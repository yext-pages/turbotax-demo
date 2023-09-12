import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
  GetRedirects,
} from "@yext/pages";
import * as React from "react";
import "../index.css";
import Header from "../components/indpro/Header";
import BackgroundBanner from "../components/indpro/BackgroundBanner";
import Sidebar from "../components/indpro/Sidebar";
import {IndependentProContext, TaxProsDevExtended,} from "../hooks/useIndependentPro";
import MainContent from "../components/indpro/MainContent";
import Footer from "../components/indpro/Footer";
import {TaxProsDev} from "../types/autogen";

export const config: TemplateConfig = {
  stream: {
    $id: "tax-pros-dev",
    localization: {locales: ["en"]},
    filter: {savedFilterIds: ["1339059980"]},
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
      "mainPhone",
      "emails",
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
      // "id",
    ],
  },
};

export const getPath: GetPath<TemplateProps<TaxProsDevExtended>> = ({document}) => {
  return `local-tax-experts/${document.c_uRLName}`;
};

// export const getRedirects: GetRedirects<TemplateProps> = ({document}) => {
//   return [`deeplink/${document.id}`, `local-tax-experts/${document.c_uRLName}/${document.id}`.toLowerCase()];
// };

declare global {
  const YEXT_PUBLIC_ENVIRONMENT: string;
}

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  const isQA = YEXT_PUBLIC_ENVIRONMENT !== "prod";

  return {
    title: "TurboTax® Independent Pro",
    // other: `
    //   <script type="text/javascript">var utag_data = utag_data || {};</script>
    //   <script type="text/javascript">
    //       (function(a,b,c,d){
    //       a='https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/${isQA ? 'dev' : 'prod'}/utag.js';
    //       b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    //       a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    //       })();
    //   </script>
    // `
  };
};

export const transformProps: TransformProps<TemplateProps<TaxProsDevExtended>> = async (data) => {
  const isQA = YEXT_PUBLIC_ENVIRONMENT !== "prod";

  const doc = (data.document as unknown as TaxProsDev)
  if (isQA) {
    data.document.c_signedMapUrl = doc.c_signedMapUrlPreProd;
  } else {
    data.document.c_signedMapUrl = doc.c_signedMapUrlProd;
  }

  // @ts-ignore
  delete doc.c_signedMapUrlPreProd;
  // @ts-ignore
  delete doc.c_signedMapUrlProd;

  return {...data};
};

// Template that will show as the page
const IndependentPro: Template<TemplateRenderProps<TaxProsDevExtended>> = ({document}) => {
  return (
    <IndependentProContext.Provider value={document}>
      <div className={"text-gray01"}>
        <Header/>
        <BackgroundBanner/>
        <main className="flex flex-col s:flex-row gap-12 px-5">
          <Sidebar/>
          <MainContent/>
        </main>
        {/*<Footer/>*/}
      </div>
    </IndependentProContext.Provider>
  );
};

export default IndependentPro;
