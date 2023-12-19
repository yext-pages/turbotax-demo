import type { Tag } from "@yext/pages";
import defaultMetaTags from "./defaultMetaTags";

export default function faqHeader(): Tag[] {
  const metaTags: Tag[] = [
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

  return [...defaultMetaTags({ withRobots: true }), ...metaTags];
}
