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
import indProHeader from "../assets/content/indProHeader";
import { createLocalBusinessStructuredData } from "../utils/taxProStructuredData";
import { cleanPseudonym } from "../utils/pseudonym";
import taxProFields from "../utils/taxProFields";

export const config: TemplateConfig = {
  stream: {
    $id: "tax-pros-dev",
    localization: { locales: ["en"] },
    filter: { savedFilterIds: [YEXT_PUBLIC_FILTER_ID] },
    fields: taxProFields,
  },
};

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = ({ document }) => {
  return document.slug;
};

// export const getRedirects: GetRedirects<TemplateProps<TaxProsDevExtended>> = ({ document }) => {
//   return [`tax-pro/${document.c_uRLName}`, `local-tax-experts/${document.c_uRLName}`];
// };

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps<TaxProsDevExtended>> = (data) => {
  const config = createConfig("independentPro");
  let scripts = createAnalyticsScripts({
    scopeArea: "tip_profile_landing_pages",
    screen: "tip_pro_profile_modal_landing_page",
    options: {
      object_detail: cleanPseudonym(data.document.c_pseudonymID || data.document.id), // pseudonym ID,
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

  const params = new URLSearchParams();
  params.set("fields", "reviewGenerationUrl");
  params.set("v", "20240117");
  params.set("api_key", YEXT_PUBLIC_REVIEWS_API_KEY);
  const response = await fetch(
    "https://cdn.yextapis.com/v2/accounts/me/entities/prd-" +
      data.document.c_pseudonymID +
      "?" +
      params
  );
  const respJson = await response.json();
  data.document.reviewGenerationUrl = respJson.response.reviewGenerationUrl;

  const doc = data.document;
  if (isQA) {
    doc.c_signedMapUrl = doc.c_signedMapUrlPreProd;
  } else {
    doc.c_signedMapUrl = doc.c_signedMapUrlProd;
  }

  delete doc.c_signedMapUrlPreProd;
  delete doc.c_signedMapUrlProd;

  if (doc.addressHidden) {
    doc.address.line1 = undefined;
    doc.address.line2 = undefined;
    doc.address.line3 = undefined;
  }

  return { ...data };
};

// Template that will show as the page
const IndependentPro: Template<TemplateRenderProps<TaxProsDevExtended>> = ({ document }) => {
  const config = useMemo(() => createConfig("independentPro"), []);

  return <IndependentProPage config={config} pro={document} />;
};

export default IndependentPro;
