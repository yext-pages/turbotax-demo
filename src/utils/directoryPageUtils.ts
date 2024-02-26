import type {
  GetPath,
  GetHeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import type { DirectoryProfile } from "../types/entities";
import { createConfig, Page } from "../hooks/useConfig";
import { Tag } from "@yext/pages/dist/types/src";
import { createBreadcrumbsStructuredData } from "../utils/breadcrumbsStructuredData"

export const makeConfig = (streamId: string, savedFilterId: string, streamFields: string[]): TemplateConfig => {
  return {
    stream: {
      $id: "directory-" + streamId,
      localization: { locales: ["en"] },
      filter: { savedFilterIds: ["dm_" + savedFilterId] },
      fields: streamFields,
    },
  };
};

export const getPath: GetPath<TemplateProps<DirectoryProfile<never>>> = ({ document }) => {
  return document.slug;
};

export const transformProps: TransformProps<TemplateProps<DirectoryProfile<never>>> = async (data) => {
  const { dm_directoryParents_directory, name, slug } = data.document;

  let parents = dm_directoryParents_directory || [];
  parents.push({ name: name, slug: slug });

  return {
    ...data,
    document: {
      ...data.document,
      dm_directoryParents_directory: parents,
    },
  };
};

export const getHeadConfig = (
  data: Parameters<GetHeadConfig<TemplateRenderProps<DirectoryProfile<never>>>>[0],
  configVariant: Page,
  tags: Tag[],
  title: string,
): ReturnType<GetHeadConfig<TemplateRenderProps<DirectoryProfile<never>>>> => {
  // const config = createConfig(configVariant);

  // TODO: check if they want their custom analytics on directory pages
  // let scripts = createAnalyticsScripts({
  //   scopeArea: "tip_profile_landing_pages",
  //   screen: "tip_pro_profile_modal_landing_page",
  //   options: {
  //     object_detail: cleanPseudonym(data.document.c_pseudonymID || data.document.id), // pseudonym ID,
  //   },
  //   config,
  // });

  const scripts = `<script type="application/ld+json">${JSON.stringify(
    createBreadcrumbsStructuredData(data)
  )}</script>`;

  const headConfig: HeadConfig = {
    title: title,
    other: scripts,
    tags: tags,
  };

  return headConfig;
};
