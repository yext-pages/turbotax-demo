import type { TaxProsDevExtended } from "../hooks/useIndependentPro";

// https://schema.org/FinancialService
// https://developers.google.com/search/docs/appearance/structured-data/local-business#structured-data-type-definitions
interface LocalBusinessStructuredData {
  "@context": "https://schema.org";
  "@type": string;
  name: string;
  address: {
    "@type": "PostalAddress";
    addressCountry?: string;
    addressLocality?: string;
    addressRegion?: string;
    postOfficeBoxNumber?: string;
    postalCode?: string;
    streetAddress?: string;
  };
  image?: string[];
  currenciesAccepted?: string;
  geo?: {
    "@type": "GeoCoordinates";
    latitude?: number;
    longitude?: number;
  };
  openingHoursSpecification?: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek?: string;
    opens?: string;
    closes?: string;
  }[];
}

export function createLocalBusinessStructuredData(
  pro: TaxProsDevExtended
): LocalBusinessStructuredData {
  const data: LocalBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: pro.c_officeLocationName,
    address: {
      "@type": "PostalAddress",
      addressCountry: pro.address.countryCode,
      addressLocality: pro.address.city,
      addressRegion: pro.address.region,
      // postOfficeBoxNumber: pro.c_officeZip,
      postalCode: pro.address.postalCode,
      streetAddress: [pro.address.line1, pro.address.line2, pro.address.line3]
        .filter(Boolean)
        .join(", "),
    },
    currenciesAccepted: "USD",
  };

  if (pro.geocodedCoordinate) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: pro.geocodedCoordinate.latitude,
      longitude: pro.geocodedCoordinate.longitude,
    };
  }

  if (pro.hours) {
    data.openingHoursSpecification = [];
    (
      ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const
    ).forEach((day) => {
      const hours = pro.hours[day];
      if (!hours || hours.isClosed || !hours.openIntervals || hours.openIntervals.length < 1)
        return;

      data.openingHoursSpecification!.push({
        "@type": "OpeningHoursSpecification",
        opens: hours.openIntervals[0].start + ":00",
        closes: hours.openIntervals[0].end + ":00",
        dayOfWeek: `https://schema.org/${day[0].toUpperCase()}${day.slice(1)}`,
      });
    });
  }

  const headshotUrl = getProImageUrl(pro);
  if (headshotUrl) {
    data.image = [headshotUrl];
  }

  return data;
}

export function getProImageUrl(pro: TaxProsDevExtended): string | undefined {
  if (!pro.headshot) return undefined;
  const imageId = new URL(pro.headshot.url).pathname.split("/")[2];
  return `https://dynl.mktgcdn.com/p/${imageId}/512x512`;
}
