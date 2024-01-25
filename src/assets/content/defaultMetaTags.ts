import type { Tag } from "@yext/pages";

export default function defaultMetaTags(opts: { withRobots: boolean }): Tag[] {
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
        content: "Copyright 1997–2024 Intuit, Inc. All Rights Reserved.",
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
        name: "theme-color",
        content: "#ffffff",
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
    {
      type: "link",
      attributes: {
        rel: "preload",
        href: "https://uxfabric.intuitcdn.net/fonts/avenir-next-intuit/AvenirNextforINTUITVarW05.woff2",
        as: "font",
        type: "font/woff2",
        crossorigin: "anonymous",
      },
    },
  ];

  let roboTags: Tag[];
  if (opts.withRobots) {
    roboTags = [
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
    ];
  } else {
    roboTags = [
      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex,nofollow",
        },
      },
    ];
  }

  return [...metaTags, ...roboTags, ...linkTags];
}
