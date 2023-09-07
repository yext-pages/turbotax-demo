import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import "../index.css";
import {
  B1,
  B2,
  B3,
  B4,
  D1,
  D2,
  D3,
  D4,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "../components/atoms/Typography";
import Header from "../components/indpro/Header";
import Button from "../components/atoms/Button";
import BackgroundBanner from "../components/indpro/BackgroundBanner";
import Sidebar from "../components/indpro/Sidebar";
import {
  IndependentProContext,
  IndependentPro as IndependentProType,
} from "../hooks/useIndependentPro";
import MainContent from "../components/indpro/MainContent";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "Independent Pro",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "independent-pro.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "TurboTax® Independent Pro",
  };
};

const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.912 4.52746L19.5 3.11146C19.2224 2.83183 18.8921 2.61006 18.5282 2.459C18.1643 2.30794 17.774 2.23061 17.38 2.23146V2.23146C16.9868 2.23006 16.5973 2.30648 16.2338 2.45631C15.8703 2.60614 15.54 2.82642 15.262 3.10446L3.927 14.4005C3.8462 14.4851 3.78087 14.5833 3.734 14.6905C3.72121 14.7182 3.70986 14.7466 3.7 14.7755C3.69 14.8045 3.674 14.8305 3.666 14.8605L2.24 20.5205C2.20289 20.668 2.19991 20.822 2.23131 20.9709C2.2627 21.1197 2.32764 21.2594 2.42118 21.3794C2.51471 21.4993 2.63438 21.5964 2.77108 21.6631C2.90777 21.7298 3.05789 21.7645 3.21 21.7645C3.29119 21.7642 3.37207 21.7545 3.451 21.7355L9.11 20.3295C9.143 20.3215 9.172 20.3035 9.204 20.2925C9.236 20.2815 9.258 20.2725 9.284 20.2605C9.39001 20.2139 9.48711 20.1493 9.571 20.0695V20.0695L20.902 8.76946C21.4657 8.20821 21.7835 7.44603 21.7854 6.65054C21.7872 5.85504 21.4731 5.09137 20.912 4.52746V4.52746ZM5.171 17.0665L6.833 18.7335L6.914 18.8135L4.586 19.3915L5.171 17.0665ZM8.871 17.9445L7.459 16.5285L6.047 15.1115L14.547 6.63946L15.959 8.05546L17.371 9.47146L8.871 17.9445ZM19.494 7.35346L18.785 8.05946L17.373 6.64346L15.961 5.22646L16.669 4.52046C16.8569 4.33463 17.1107 4.23072 17.375 4.23146C17.5062 4.23078 17.6362 4.25625 17.7574 4.30638C17.8786 4.35652 17.9886 4.43032 18.081 4.52346L19.5 5.93946C19.6867 6.12779 19.7909 6.38254 19.7898 6.64771C19.7887 6.91287 19.6823 7.16673 19.494 7.35346V7.35346Z" />
  </svg>
);

const defaultPro: IndependentProType = {
  fullName: "Andrea Velasquez",
  businessName: "Velasquez Accounting + Taxes",
  tagline: "Your tax anxiety tamer. I'll take care of it!",
  yearsOfExperience: 4,
  businessAddress: {
    addressLine1: "3000 Upas St #105",
    city: "San Diego",
    state: "CA",
    zipCode: "92104",
  },
  links: {
    website: "https://velasquezaccounting.com/",
    linkedin: "https://www.linkedin.com/in/andrea-velasquez-7a8b9b1a6/",
  },
  taxSpecialty: "business",
  servicesOffered: [
    "In person or virtual appointments",
    "Same day responses",
    "Tax planning services",
    "Business accounting services",
  ],
  languagesSpoken: ["🇺🇸 English", "🇵🇹 Portuguese"],
  areasOfExpertise: [
    "Freelance and gig workers",
    "Artists",
    "Irregular income",
    "Influencers",
  ],
  aboutMe: `Numbers have been my love language for as long as I can remember (I know, it’s weird!). As your accountant, it’s my passion to help you be less intimidated by your numbers, put you at ease when it comes to the ins and outs of taxes, and help you keep more of your hard-earned money. 

When I’m not wielding a calculator or spreadsheet, you can find me hiking with my rescue dog or trying to recreate my favorite restaurant dishes at home.`,
  howWeWillWork:
    "After our initial phone conversation (which you can schedule using the scheduler right on this page!), you will upload your documents through a secure link. I’ll get to work, and we will schedule a follow up meeting. This meeting can be virtual or in-person. If you choose to come to the office, you might get lucky and meet the office cat!",
  profileHeadshotUrl: "https://picsum.photos/330",
  additionalPhotosUrls: [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ],
};

// Template that will show as the page
const IndependentPro: Template<TemplateRenderProps> = () => {
  return (
    <IndependentProContext.Provider value={defaultPro}>
      <div className={"text-gray01"}>
        <Header />
        <BackgroundBanner />
        <section className="flex gap-12">
          <Sidebar />
          <MainContent />
        </section>
      </div>
    </IndependentProContext.Provider>
  );
};

export default IndependentPro;
