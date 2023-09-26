import type { Tag } from "@yext/pages";

const tags: Tag[] = [
  // Disable search indexing
  {
    type: "meta",
    attributes: {
      name: "robots",
      content: "noindex",
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

export default tags;
