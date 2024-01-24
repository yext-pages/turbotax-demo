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
import { TaxProsDevExtended } from "../hooks/useIndependentPro";
import { createConfig } from "../hooks/useConfig";
import { useMemo } from "react";
import IndependentProPage from "../components/pages/IndependentProPage";
import hiddenPageTags from "../assets/content/hiddenPageTags";
import * as indepProPageUtils from "../utils/indepProPageUtils";

export const config: TemplateConfig = indepProPageUtils.makeConfig("referred");

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = (args) => {
  return indepProPageUtils.getPath(args) + "/pro";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  return indepProPageUtils.getHeadConfig(data, "proReferral", hiddenPageTags);
};

export const transformProps: TransformProps<TemplateProps<TaxProsDevExtended>> = async (data) => {
  return indepProPageUtils.transformProps(data);
};

// Template that will show as the page
const Component: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("proReferral"), []);

  return <IndependentProPage config={config} pro={document} proReferred />;
};

export default Component;
