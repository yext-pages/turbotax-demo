import { GetPath, TemplateConfig, TemplateProps, Template } from "@yext/pages";
import { GetHeadConfig, TemplateRenderProps } from "@yext/pages/dist/types/src";
import hiddenPageTags from "../assets/content/hiddenPageTags";
import "../index.css";

export const config: TemplateConfig = {
  name: "Store Finder",
};

export const getPath: GetPath<TemplateProps> = () => {
  return "store-finder";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "TurboTax® Verified Pro | Pro Directory",
    tags: hiddenPageTags,
  };
};

const StoreFinder: Template<TemplateRenderProps> = () => {
  return (
    <iframe
      src={"https://search-embed.pros.turbotax.intuit.com.pagescdn.com"}
      title={"TurboTax Verified Pro Directory"}
      // Please ignore your IDE's warning about the two classes doing the same thing.
      // Not all browsers support dvh, so we include the first as a fallback.
      className={"w-full h-screen h-[100dvh] border-none"}
    />
  );
};

export default StoreFinder;
