import React from "react";
import { B2, H4 } from "../atoms/Typography";
import ExpertIcon from "../../assets/icons/primary/expert.svg";
import IncomeSummaryIcon from "../../assets/icons/primary/income-summary.svg";
import WebPageIcon from "../../assets/icons/primary/web-page.svg";
import { Section, StationaryBookNow } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";

const WorkingTogether: React.FC = () => {
  return (
    <Section
      id={"working-together"}
      solidBg
      gapMobile={"24"}
      pyStationary={"120"}
      pxSmall={"40"}
      pxLarge={"80"}
      aria-labelledby={"work-together"}
    >
      <Title />
      <div className={"flex flex-col gap-10 s:flex-row m:gap-16"}>
        <Step
          icon={ExpertIcon}
          title={"Intro call"}
          description={"Schedule an intro call and we’ll meet to go over your tax situation."}
        />
        <Step
          icon={WebPageIcon}
          title={"Upload your documents"}
          description={"I’ll help you understand what documents you need to upload."}
        />
        <Step
          icon={IncomeSummaryIcon}
          title={"Review and file"}
          description={"After you review, I’ll file you taxes for you. And you’re done!"}
        />
      </div>
      <StationaryBookNow section={"working-together"} />
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
      id={"work-together"}
    >
      How we’ll work together
    </ResponsiveTypography>
  );
};

interface StepProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = (props) => {
  return (
    <div className={"flex flex-col gap-4 items-center s:items-start"}>
      {/* no alt text, as the icons are decorative and the title describes them better */}
      <img src={props.icon} height={60} width={60} alt={""} />
      <div className={"flex flex-col gap-2 items-center text-center s:items-start s:text-start"}>
        <H4 as={"h3"} weight={"regular"}>
          {props.title}
        </H4>
        <ResponsiveTypography
          typescaleMobile={TypeScale.Body02}
          typescaleStationary={TypeScale.Body01}
          weightMobile={"regular"}
          weightStationary={"regular"}
          color={TextColor.textPrimary}
          as={"div"}
        >
          {props.description}
        </ResponsiveTypography>
      </div>
    </div>
  );
};

export default WorkingTogether;
