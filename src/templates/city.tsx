import type {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import "../index.css";
import type {
  DirectoryProfile,
} from "../types/entities";
import { createConfig } from "../hooks/useConfig";
import { useMemo } from "react";
import DirectoryPage from "../components/pages/DirectoryPage";
import directoryHeader from "../assets/content/directoryHeader";
import { makeTitle } from "../assets/content/directoryHeader";
import * as directoryPageUtils from "../utils/directoryPageUtils";
import { TaxProsMain } from "../types/autogen";
import { taxProsMainFields } from "../utils/directoryFields";

export const config: TemplateConfig = directoryPageUtils.makeConfig("city", "directory_address_city", taxProsMainFields);

export const getPath: GetPath<TemplateProps<DirectoryProfile<never>>> = directoryPageUtils.getPath;

export const getHeadConfig: GetHeadConfig<TemplateRenderProps<DirectoryProfile<never>>> = (data) => {
  return directoryPageUtils.getHeadConfig(data, "directory_city", directoryHeader(data), makeTitle(data));
};

export const transformProps: TransformProps<TemplateProps<DirectoryProfile<never>>> = async (data) => {
  return directoryPageUtils.transformProps(data);
};

const City: Template<TemplateRenderProps<DirectoryProfile<TaxProsMain>>> = (data) => {
  const config = useMemo(() => createConfig("directory"), []);

  return <DirectoryPage data={data} config={config} useDirectoryGrid={true} />;
};

export default City;
