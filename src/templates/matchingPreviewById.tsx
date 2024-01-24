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
import { cleanPseudonym } from "../utils/pseudonym";

import * as indepProPageUtils from "../utils/indepProPageUtils";

export const config: TemplateConfig = indepProPageUtils.makeConfig("preview");

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = ({ document }) => {
  return `matching-preview/${cleanPseudonym(document.c_pseudonymID || document.id)}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  return indepProPageUtils.getHeadConfig(data, "matchingPreview", hiddenPageTags);
};

export const transformProps: TransformProps<TemplateProps<TaxProsDevExtended>> = async (data) => {
  return indepProPageUtils.transformProps(data);
};

// Template that will show as the page
const Component: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("matchingPreview"), []);

  return <IndependentProPage config={config} pro={document} />;
};

export default Component;
