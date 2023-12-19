import type {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import hiddenPageTags from "../assets/content/hiddenPageTags";
import { TaxProsDevExtended } from "../hooks/useIndependentPro";
import { useEffect, useMemo, useState } from "react";
import "../index.css";
import SpotExpertWorking from "../assets/icons/SpotExpertWorking";
import { B1, H3 } from "../components/atoms/Typography";
import { TextColor } from "../components/atoms/TextColor";
import IndependentProPage from "../components/pages/IndependentProPage";
import { createConfig } from "../hooks/useConfig";

export const config: TemplateConfig = {
  name: "Dynamic Preview",
};

export const getPath: GetPath<TemplateProps> = () => {
  return "dynamicPreview";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Dynamic Preview",
    tags: hiddenPageTags,
  };
};

const basePro: () => TaxProsDevExtended = () => ({
  address: {},
  headshot: undefined,
  c_advisorBio: "",
  c_areasOfExpertise: [],
  c_jotFormId: "",
  c_metaDescription: "",
  c_metaKeywords: "",
  c_officeLocationName: "",
  c_taxProName: "",
  c_title: "",
  c_uRLName: "",
  certifications: [],
  geocodedCoordinate: {},
  googlePlaceId: "",
  hours: {},
  id: "",
  languages: [],
  services: [],
  slug: "",
  yearsOfExperience: 0,
});

function isIEP(source: string): boolean {
  let url: URL;
  try {
    url = new URL(source);
  } catch (e) {
    return false;
  }

  const validUrls = [
    "https://e2e.expert.intuit.com",
    "https://expert.intuit.com",
    "https://expert-onboarding.intuit.com",
    "https://expert-onboarding-e2e.intuit.com/",
  ];

  return validUrls.includes(url.origin);
}

const DynamicPreview: Template<TemplateRenderProps> = () => {
  const [pro, setPro] = useState<TaxProsDevExtended | null>(null);
  const config = useMemo(() => createConfig("dynamicPreview"), []);

  useEffect(() => {
    const listener: (event: MessageEvent) => void = (event) => {
      console.log("Received message", event);
      if (!event.origin || !isIEP(event.origin)) {
        console.warn("Message is from unacceptable origin = " + event.origin);
        return;
      }

      const data = event.data;

      if (!data || typeof data !== "object" || !data.type || data.type !== "profile-preview") {
        console.log("Message has invalid data", data);
        return;
      }

      console.log("Setting pro");
      setPro({ ...basePro(), ...(data.pro as TaxProsDevExtended) });
    };

    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  }, []);

  if (pro) {
    console.log("Rendering pro", pro);
  }

  return (
    <div>
      <div
        className={`bg-white absolute z-10 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center transition-opacity duration-350 delay-100 ease-transform ${
          pro ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <SpotExpertWorking />
        <H3 color={TextColor.gray01}>Hang tight</H3>
        <B1 color={TextColor.gray02}>We’re building your preview</B1>
      </div>

      {pro && <IndependentProPage config={config} pro={pro} />}
    </div>
  );
};

export default DynamicPreview;
