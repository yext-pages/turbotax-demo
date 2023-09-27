import type { TaxProsDevExtended } from "../hooks/useIndependentPro";
import type { FaqItemProps } from "../components/indpro/FaqItem";
import { renderToStaticMarkup } from "react-dom/server";

export function createFaqStructuredData(items: FaqItemProps[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: {
        "@type": "Answer",
        // this isn't ideal, since it forces react-dom/server to be included in the client bundle,
        // but it's ~20kib, and only gets downloaded on the faq page, so it's not a _massive_ issue
        text: renderToStaticMarkup(item.children),
      },
    })),
  };
}
