import type { Tag } from "@yext/pages";
import type { TaxProsDevExtended } from "../../hooks/useIndependentPro";
import { getProImageUrl } from "../../utils/taxProStructuredData";
import defaultMetaTags from "./defaultMetaTags";

export default function indProHeader(pro: TaxProsDevExtended): Tag[] {
  if (!pro.address) throw new Error("Pro is missing address");

  const metaTags: Tag[] = [
    {
      type: "meta",
      attributes: {
        name: "description",
        content: makeDescription(pro),
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:site_name",
        content: "TurboTax",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:title",
        content: `${pro.c_taxProName} | ${pro.address.city} Tax Preparer`,
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:description",
        content: makeDescription(pro),
      },
    },
  ];

  const headshotUrl = getProImageUrl(pro);
  if (headshotUrl) {
    metaTags.push({
      type: "meta",
      attributes: {
        name: "og:image",
        content: headshotUrl,
      },
    });
  }

  return [...defaultMetaTags({ withRobots: true }), ...metaTags];
}

function makeDescription(pro: TaxProsDevExtended): string {
  const serviceExperienceType = "tax preparer";
  const city = pro.address.city;
  const state = stateAbbreviationsToFullNames[pro.address.region || ""] || pro.address.region;
  const zip = pro.address.postalCode;
  const name = pro.c_taxProName;
  const proCertification = pro.certifications?.[0] || "tax preparer";
  const number = pro.yearsOfExperience;
  const years = number === 1 ? "year" : "years";

  return `Looking for a trusted ${serviceExperienceType} in ${city}, ${state} - ${zip}? Meet ${name}, a ${proCertification} with ${number} ${years} of experience. Get expert tax help near you!`;
}

const stateAbbreviationsToFullNames: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  AS: "American Samoa",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  GU: "Guam",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  MP: "Northern Mariana Islands",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  PR: "Puerto Rico",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  TT: "Trust Territories",
  UT: "Utah",
  VT: "Vermont",
  VI: "Virgin Islands",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};
