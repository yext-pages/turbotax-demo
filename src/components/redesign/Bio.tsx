import { B1, B3, H5 } from "../atoms/Typography";
import React, { useMemo } from "react";
import useIndependentPro, { TaxProsDevExtended } from "../../hooks/useIndependentPro";
import Link from "../atoms/Link";
import { Section, StationaryBookNow } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";
import Facebook from "../../assets/icons/social/Facebook";
import Instagram from "../../assets/icons/social/Instagram";
import Twitter from "../../assets/icons/social/Twitter";
import LinkedIn from "../../assets/icons/social/LinkedIn";
import Youtube from "../../assets/icons/social/Youtube";
import GenericWebsite from "../../assets/icons/social/GenericWebsite";
import Google from "../../assets/icons/social/Google";
import Pinterest from "../../assets/icons/social/Pinterest";
import Snapchat from "../../assets/icons/social/Snapchat";
import Tiktok from "../../assets/icons/social/Tiktok";
import Yelp from "../../assets/icons/social/Yelp";
import { IconProps } from "../../assets/icons";

const Bio: React.FC = () => {
  return (
    <Section
      id={"bio"}
      pyStationary={"120"}
      pxSmall={"40"}
      pxLarge={"80"}
      aria-labelledby={"about-me"}
    >
      <Title />
      <div
        className={
          "flex flex-col gap-10 m:flex-row-reverse items-center m:items-start m:justify-between"
        }
      >
        <Headshot />
        <div className={"flex flex-col gap-10 max-w-[530px]"}>
          <AboutMe />
          <SocialMedia />
          <Disclaimer />
          <StationaryBookNow />
        </div>
      </div>
    </Section>
  );
};

const Title: React.FC = () => {
  return (
    <ResponsiveTypography
      typescaleMobile={TypeScale.Headline03}
      typescaleStationary={TypeScale.Headline02}
      weightMobile={"regular"}
      weightStationary={"regular"}
      color={TextColor.textPrimary}
      as={"h2"}
      id={"about-me"}
    >
      About me
    </ResponsiveTypography>
  );
};

const Headshot: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <img
      src={pro.c_epsImageUrl || pro.headshot?.url}
      alt={pro.c_taxProName}
      height={330}
      width={"auto"}
      className={"bg-wintermint120 rounded-[16px] object-cover shadow-elev2 w-full max-w-[440px]"}
    />
  );
};

const AboutMe: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <div className={"flex flex-col gap-4"}>
      <H5 as={"h3"} weight={"demi"}>
        Nice to meet you 👋
      </H5>
      <B1 weight={"regular"} className={"whitespace-pre-line"}>
        {pro.description || pro.c_advisorBio}
      </B1>
    </div>
  );
};

const socialMediaList: Array<{
  icon: React.FC<IconProps>;
  type: string;
  field: keyof TaxProsDevExtended;
  base?: string;
}> = [
  /* todo: google, snapchat, yelp */
  {
    type: "instagram",
    icon: Instagram,
    field: "instagramHandle",
    base: "https://www.instagram.com/",
  },
  { type: "facebook", icon: Facebook, field: "facebookPageUrl" },
  { type: "linkedin", icon: LinkedIn, field: "linkedInUrl" },
  { type: "twitter", icon: Twitter, field: "twitterHandle", base: "https://twitter.com/" },
  { type: "youtube", icon: Youtube, field: "youTubeChannelUrl" },
  { type: "personal_website", icon: GenericWebsite, field: "c_personalWebsiteUrl" },
  { type: "tiktok", icon: Tiktok, field: "tikTokUrl" },
  { type: "pinterest", icon: Pinterest, field: "pinterestUrl" },
];

const smClass = "w-12 h-12";
const SocialMedia: React.FC = () => {
  const pro = useIndependentPro();
  const links: React.ReactNode[] = useMemo(() => {
    const nodes: React.ReactNode[] = [];

    for (const sm of socialMediaList) {
      const value = pro[sm.field];
      if (typeof value === "string") {
        const link = sm.base ? sm.base + value : value;
        nodes.push(<SocialMediaIconLink key={sm.type} Icon={sm.icon} link={link} type={sm.type} />);
      }
    }

    return nodes;
  }, [pro]);

  return <div className={"flex flex-wrap gap-4 text-pepper100"}>{links}</div>;
};

interface SMILProps {
  Icon: React.FC<IconProps>;
  link: string;
  type: string;
}

const SocialMediaIconLink: React.FC<SMILProps> = ({ Icon, link, type }) => {
  return (
    <Link
      action={"engaged"}
      object={"link"}
      uiObjectDetail={"social_media_" + type}
      href={link}
      target={"_blank"}
      rel={"noreferrer noopener"}
    >
      <Icon className={smClass} />
    </Link>
  );
};

const Disclaimer: React.FC = () => {
  return (
    <B3 className={"italic"}>
      This profile includes statements from the independent professional about their own education,
      skills, and experience. Intuit has not reviewed these statements for accuracy. See{" "}
      <Link
        action={"engaged"}
        object={"faq link"}
        objectDetail={"here"}
        className={"text-blueberry80 font-medium hover:underline"}
        href={"/faq#how-does-intuit-verify-these-independent-tax-professionals?"}
      />{" "}
      for Intuit's Pro verification program.
    </B3>
  );
};

export default Bio;
