import type { Tag } from "@yext/pages";

export default function faqHeader(): Tag[] {
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
        content: `Frequently asked questions about Intuit TurboTax Verified Pro`,
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
        content: `Frequently asked questions`,
      },
    },
    {
      type: "meta",
      attributes: {
        name: "og:description",
        content: `Frequently asked questions about Intuit TurboTax Verified Pro`,
      },
    },
  ];

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

  const fontsToPreload = ["400", "500", "600"];

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
