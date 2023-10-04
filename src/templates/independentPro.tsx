import type {
  GetHeadConfig,
  GetRedirects,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import "../index.css";
import { TaxProsDevExtended } from "../hooks/useIndependentPro";
import { createConfig } from "../hooks/useConfig";
import { createAnalyticsScripts } from "../utils/analytics";
import { useMemo } from "react";
import IndependentProPage from "../components/pages/IndependentProPage";
import { normalizeName } from "../utils/normalizeNames";
import indProHeader from "../assets/content/indProHeader";
import { createLocalBusinessStructuredData } from "../utils/taxProStructuredData";

export const config: TemplateConfig = {
  stream: {
    $id: "tax-pros-dev",
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
  return `local-tax-experts/${normalizeName(document.c_officeLocationName)}/${normalizeName(
    document.c_taxProName
  )}`;
};

export const getRedirects: GetRedirects<TemplateProps<TaxProsDevExtended>> = ({ document }) => {
  return [`tax-pro/${document.c_uRLName}`, `local-tax-experts/${document.c_uRLName}`];
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  const config = createConfig("independentPro");
  let scripts = createAnalyticsScripts({
    scopeArea: "verified_pro_profile_pages",
    screen: "pro profile pages",
    options: {
      object_detail: data.document.id,
    },
    config,
  });

  scripts += `<script type="application/ld+json">${JSON.stringify(
    createLocalBusinessStructuredData(data.document)
  )}</script>`;

  const headConfig: HeadConfig = {
    title: `${data.document.c_taxProName} Tax Preparer | ${data.document.address.city}, ${data.document.address.region} - ${data.document.address.postalCode} | TurboTax`,
    other: scripts,
    tags: indProHeader(data.document),
  };

  return headConfig;
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
const IndependentPro: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("independentPro"), []);

  return <IndependentProPage config={config} pro={document} />;
};

export default IndependentPro;
