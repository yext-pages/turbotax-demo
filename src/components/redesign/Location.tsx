import React from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import { B1, H5 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import { formatPhone } from "../indpro/SkillsAndLinks";
import { DayHour } from "../../types/autogen";
import { Section, StationaryBookNow } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import Link from "../atoms/Link";
import { makeGoogleMapSearchUrl } from "../../utils/googleMaps";

const Location: React.FC = () => {
  return (
    <Section
      id={"location"}
      gapMobile={"24"}
      gapStationary={"64"}
      pyStationary={"180"}
      pxSmall={"40"}
      pxLarge={"80"}
    >
      <div className={"flex flex-col gap-6 m:flex-row s:gap-16"}>
        <Map />
        <Name />
      </div>
      <Divider />
      <div className={"flex flex-col gap-6 s:grid grid-cols-[1fr_2fr_1fr]"}>
        <Contact />
        <Hours />
        <Languages />
      </div>
      <StationaryBookNow />
    </Section>
  );
};

const Map: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <Link
      href={makeGoogleMapSearchUrl(pro)}
      target={"_blank"}
      action={"engaged"}
      object={"google maps image"}
    >
      <img
        src={pro.c_signedMapUrl}
        height={180}
        width={340}
        className={
          "rounded-[16px] shadow-elev2 w-full h-auto aspect-[16/9] object-cover max-w-[460px] self-center m:self-auto"
        }
        alt={"Map showing location of the tax pro"}
      />
    </Link>
  );
};

const Name: React.FC = () => {
  const pro = useIndependentPro();

  let formattedAddress = `${pro.address.city}, ${pro.address.region} ${pro.address.postalCode}`;
  if (!pro.addressHidden) {
    let street = `${pro.address.line1}`;
    if (pro.address.line2) street += `, ${pro.address.line2}`;
    formattedAddress = `${street}, ${formattedAddress}`;
  }

  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <ResponsiveTypography
          typescaleMobile={TypeScale.Headline06}
          typescaleStationary={TypeScale.Headline06}
          weightMobile={"regular"}
          weightStationary={"medium"}
          color={TextColor.textSecondary}
          as={"div"}
        >
          {pro.c_officeLocationName}
        </ResponsiveTypography>
        <ResponsiveTypography
          typescaleMobile={TypeScale.Headline02}
          typescaleStationary={TypeScale.Display03}
          weightMobile={"regular"}
          weightStationary={"medium"}
          color={TextColor.textPrimary}
          as={"h2"}
        >
          {pro.c_taxProName}
        </ResponsiveTypography>
      </div>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline05}
        typescaleStationary={TypeScale.Headline04}
        weightMobile={"regular"}
        weightStationary={"regular"}
        color={TextColor.textPrimary}
        as={"div"}
      >
        {formattedAddress}
      </ResponsiveTypography>
    </div>
  );
};

const Contact: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <div className={"flex flex-col gap-2"}>
      <H5 weight={"regular"}>Contact</H5>
      {/*<div>{pro.mainPhone && <B1>{formatPhone(pro.mainPhone)}</B1>}</div>*/}
      <div>
        {pro.mainPhone && (
          <Link
            href={"tel:" + pro.mainPhone}
            action={"clicked"}
            object={"pro_mainPhone"}
            className={"hover:underline"}
          >
            {formatPhone(pro.mainPhone)}
          </Link>
        )}
      </div>
    </div>
  );
};

const Hours: React.FC = () => {
  const { hours } = useIndependentPro();
  return (
    <div>
      <H5 weight={"regular"} className={"pb-2"}>
        Hours
      </H5>
      <B1 as={"div"}>
        <div className={"grid grid-cols-[110px_1fr] gap-x-4 gap-y-2"}>
          <div>Monday</div>
          <div>{formatHours(hours?.monday)}</div>
          <div>Tuesday</div>
          <div>{formatHours(hours?.tuesday)}</div>
          <div>Wednesday</div>
          <div>{formatHours(hours?.wednesday)}</div>
          <div>Thursday</div>
          <div>{formatHours(hours?.thursday)}</div>
          <div>Friday</div>
          <div>{formatHours(hours?.friday)}</div>
          <div>Saturday</div>
          <div>{formatHours(hours?.saturday)}</div>
          <div>Sunday</div>
          <div>{formatHours(hours?.sunday)}</div>
        </div>
      </B1>
    </div>
  );
};

function formatHours(hours: DayHour | undefined): string {
  if (!hours || hours.isClosed || !hours.openIntervals || hours.openIntervals.length < 1)
    return "Closed";
  const interval = hours.openIntervals[0];
  return `${formatMilitary(interval.start)} - ${formatMilitary(interval.end)}`;
}

function formatMilitary(time: string): string {
  const [hour, minute] = time.split(":");
  const parsedHour = Number(hour);

  if (parsedHour > 12) {
    return `${parsedHour - 12}:${minute}p`;
  } else {
    return `${parsedHour}:${minute}a`;
  }
}

const Languages: React.FC = () => {
  const pro = useIndependentPro();
  const languages = pro.languages || ["English"];

  return (
    <div className={"flex flex-col gap-2"}>
      <H5 weight={"regular"}>Languages</H5>
      {languages.map((l) => (
        <B1 key={l}>{l}</B1>
      ))}
    </div>
  );
};

const Divider: React.FC = () => {
  return <hr className={"hidden s:block border-t-2 border-blueberry10"} />;
};

export default Location;
