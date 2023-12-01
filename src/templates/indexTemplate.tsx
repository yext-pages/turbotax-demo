import type {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "index",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "TurboTax® Verified Pro",
  };
};

const IndexTemplate: Template<TemplateRenderProps> = () => {
  if (globalThis.document) {
    document.location = "https://pros-turbotax.app.intuit.com/pro-matching-intro"
  }

  return (
    <div/>
  );
}

export default IndexTemplate;