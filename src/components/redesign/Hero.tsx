import React from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import TIPLogo from "../../assets/logos/5050_horizontal.svg";
import { TextColor } from "../atoms/TextColor";
import Badge from "../atoms/Badge";
import ItemList, { ListItem } from "../indpro/ItemList";
import ShieldCheck from "../../assets/icons/ShieldCheck";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { StateIcon } from "../../assets/icons/primary/StateIcon";
import Calendar from "../../assets/icons/Calendar";
import { Blob, Clippy } from "./HeroSvgs";
import { MatchingCtaButton } from "./SharedComponents";
import { PageSection } from "./constants";
import { Label, useProHasLabel } from "../../hooks/useProHasLabel";

const Hero: React.FC = () => {
  return (
    <section className={"bg-blueberry0 px-4 py-6"} aria-labelledby={"taxProName"}>
      <div
        className={
          "flex flex-col gap-8 s:flex-row-reverse s:gap-6 justify-between s:items-center s:px-6 m:px-20 l:px-[140px] s:max-w-screen-xl mx-auto"
        }
      >
        <Headshot />
        <div
          className={"contents s:flex flex-col s:gap-6 gap-8 s:max-w-[600px] items-start s:py-14"}
        >
          <Name />
          <Reviews />
          <Details />
          <Booking />
        </div>
      </div>
    </section>
  );
};

/* Start cursed black magic */

const Headshot: React.FC = () => {
  const pro = useIndependentPro();

  return (
    <div
      className={
        "flex flex-col gap-4 self-center items-center relative w-full max-w-[200px] s:max-w-[300px] m:max-w-[325px] l:max-w-[350px] xl:max-w-[450px] aspect-[543/460] h-auto z-[0] mb-10 s:mb-0"
      }
    >
      <Clippy />
      <img
        src={pro.c_epsImageUrl || pro.headshot?.url}
        className={"bg-wintermint120 w-full h-full object-cover object-top"}
        style={{ clipPath: "url(#my-clip-path)" }}
        alt={pro.c_taxProName}
      />
      <Blob />

      <img
        src={TIPLogo}
        width={146}
        height={24}
        className={
          "absolute bottom-[-40px] m:bottom-0 m:right-[-4px] l:bottom-0 l:right-0 xl:bottom-4 xl:right-4"
        }
        alt={"Intuit TurboTax Verified Pro"}
      />
    </div>
  );
};

/* End cursed black magic */

const Name: React.FC = () => {
  const pro = useIndependentPro();

  return (
    <div className={"flex flex-col gap-1"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Body03}
        typescaleStationary={TypeScale.Headline06}
        weightMobile={"regular"}
        weightStationary={"medium"}
        color={TextColor.textSecondary}
        as={"div"}
        className={"uppercase"}
      >
        {pro.c_officeLocationName}
      </ResponsiveTypography>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline01}
        typescaleStationary={TypeScale.Display04}
        weightMobile={"regular"}
        weightStationary={"medium"}
        color={TextColor.textPrimary}
        as={"h1"}
        id={"taxProName"}
      >
        {pro.c_taxProName}
      </ResponsiveTypography>
    </div>
  );
};

const Reviews: React.FC = () => {
  // return <ReviewsWidget />;
  return null;
};

const Details: React.FC = () => {
  const pro = useIndependentPro();
  const isOffboarding = useProHasLabel(Label.OffboardInProgress);

  let certification: string;
  if (pro.certifications && pro.certifications.length > 0) {
    if (pro.certifications[0] === "EA") certification = "Enrolled Agent";
    else certification = pro.certifications[0];
  } else {
    certification = `Verified Pro with ${pro.yearsOfExperience} ${
      pro.yearsOfExperience == 1 ? "year" : "years"
    } of experience`;
  }

  const items: ListItem[] = [];
  items.push({
    icon: <ShieldCheck className={"w-6 h-6 s:w-8 s:h-8"} />,
    children: certification,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  items.push({
    icon: <StateIcon state={pro.address.region} />,
    children: `${pro.address.city}, ${pro.address.region}`,
    typescaleMobile: TypeScale.Body02,
    weightMobile: "regular",
    typescaleStationary: TypeScale.Body01,
    weightStationary: "regular",
  });

  const acceptingClients = pro.c_acceptingNewClients && !isOffboarding;

  return (
    <div className={"flex flex-col gap-4 items-start"}>
      <Badge variant={acceptingClients ? "success" : "critical"}>
        {acceptingClients ? "Accepting new clients" : "Not accepting new clients"}
      </Badge>
      <ItemList items={items} />
    </div>
  );
};

const Booking: React.FC = () => {
  return (
    <MatchingCtaButton size={"large"} icon={Calendar} id={"primary-cta"} section={PageSection.Hero}>
      Book a free call
    </MatchingCtaButton>
  );
};

export default Hero;
