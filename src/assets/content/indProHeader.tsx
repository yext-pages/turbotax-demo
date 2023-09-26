import { Tag } from "@yext/pages";

const tags: Tag[] = [
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
      content:
        "TurboTax® is the #1 best-selling tax preparation software to file taxes online. Easily file federal and state income tax returns with 100% accuracy to get your maximum tax refund guaranteed. Join the millions who file with TurboTax.",
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
  tags.push({
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

export default tags;
