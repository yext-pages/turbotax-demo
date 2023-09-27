import type { Tag } from "@yext/pages";
import type { TaxProsDevExtended } from "../../hooks/useIndependentPro";
import { getProImageUrl } from "../../utils/taxProStructuredData";

export default function indProHeader(pro: TaxProsDevExtended): Tag[] {
  if (!pro.address) throw new Error("Pro is missing address");

  const metaTags: Tag[] = [
    {
      type: "meta",
      attributes: {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "dcterms.rightsHolder",
        content: "Copyright 1997–2023 Intuit, Inc. All Rights Reserved.",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "dcterms.audience",
        content: "Global",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "msapplication-config",
        content: "https://turbotax.intuit.com/browserconfig.xml",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "author",
        content: "TurboTax",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "description",
        content: `Looking for a trusted tax preparer in ${pro.address.city}, ${
          pro.address.region
        }? Meet ${pro.c_taxProName}, a ${pro.certifications?.[0] || "tax preparer"} with ${
          pro.yearsOfExperience
        } ${
          pro.yearsOfExperience === 1 ? "year" : "years"
        } of experience. Get expert tax help near you!`,
      },
    },
    {
      type: "meta",
      attributes: {
        name: "robots",
        content: "index,follow,noodp",
      },
    },
    {
      type: "meta",
      attributes: {
        name: "slurp",
        content: "noodp,noydir",
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
        content: `Discover reliable tax preparation services in ${pro.address.city}, ${
          pro.address.region
        } with ${pro.c_taxProName}, a non-TurboTax ${
          pro.certifications?.[0] || "tax preparer"
        } featured on TurboTax’s website.`,
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

  const linkTags: Tag[] = [
    {
      type: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        href: "https://digitalasset.intuit.com/IMAGE/A4EFQzEN2/tt-favicon.png",
      },
    },
    {
      type: "link",
      attributes: {
        rel: "apple-touch-icon",
        href: "https://digitalasset.intuit.com/IMAGE/A4EFQzEN2/tt-favicon.png",
      },
    },
    {
      type: "link",
      attributes: {
        rel: "apple-touch-icon-precomposed",
        href: "https://digitalasset.intuit.com/IMAGE/A4EFQzEN2/tt-favicon.png",
      },
    },
    // Preconnect to CDN
    {
      type: "link",
      attributes: {
        rel: "preconnect",
        href: "https://lib.intuitcdn.net/",
        crossorigin: "anonymous",
      },
    },
    {
      type: "link",
      attributes: {
        rel: "preconnect",
        href: "https://digitalasset.intuit.com/",
        crossorigin: "anonymous",
      },
    },
  ];

  const fontsToPreload = ["400", "500", "600", "400-it", "500-it"];

  fontsToPreload.forEach((weight) => {
    linkTags.push({
      type: "link",
      attributes: {
        rel: "preload",
        href: `https://assets.intuitcdn.net/fonts/avenir-${weight}.woff2`,
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    });
  });

  return [...metaTags, ...linkTags];
}
