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
import { createAnalyticsScripts } from "../utils/analytics";
import { useMemo } from "react";
import IndependentProPage from "../components/pages/IndependentProPage";
import { normalizeName } from "../utils/normalizeNames";
import matchingPreviewHeader from "../assets/content/matchingPreviewHeader";

export const config: TemplateConfig = {
  stream: {
    $id: "tax-pros-preview",
    localization: { locales: ["en"] },
    filter: { savedFilterIds: [YEXT_PUBLIC_FILTER_ID] },
    fields: [
      "name",
      "address",
      "slug",
      "photoGallery",
      "geocodedCoordinate",
      "c_backgroundImage",
      "headshot",
      "keywords",
      "services",
      // "mainPhone",
      // "emails",
      "logo",
      "c_advisorBio",
      "c_uRLName",
      "hours",
      "c_areasOfExpertise",
      "c_metaDescription",
      "c_title",
      "c_metaKeywords",
      "c_taxProName",
      "c_officeLocationName",
      "certifications",
      "yearsOfExperience",
      "languages",
      "c_jotFormId",
      "googlePlaceId",
      "c_signedMapUrlPreProd",
      "c_signedMapUrlProd",
      "id",
    ],
  },
};

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = ({ document }) => {
  return `matching-preview/${normalizeName(document.c_taxProName)}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  const config = createConfig("matchingPreview");
  const scripts = createAnalyticsScripts({
    scopeArea: "verified_pro_profile_pages",
    screen: "pro profile pages",
    options: {
      object_detail: data.document.id,
    },
    config,
  });

  return {
    title: "TurboTax® Independent Pro",
    other: scripts,
    tags: matchingPreviewHeader,
  };
};

export const transformProps: TransformProps<TemplateProps<TaxProsDevExtended>> = async (data) => {
  const isQA = YEXT_PUBLIC_ENVIRONMENT !== "prod";

  const doc = data.document;
  if (isQA) {
    doc.c_signedMapUrl = doc.c_signedMapUrlPreProd;
  } else {
    doc.c_signedMapUrl = doc.c_signedMapUrlProd;
  }

  delete doc.c_signedMapUrlPreProd;
  delete doc.c_signedMapUrlProd;

  return { ...data };
};

// Template that will show as the page
const MatchingPreview: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("matchingPreview"), []);

  return <IndependentProPage config={config} pro={document} />;
};

export default MatchingPreview;
