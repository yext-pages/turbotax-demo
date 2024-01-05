import type { TaxProsDevExtended } from "../hooks/useIndependentPro";

export function makeGoogleMapSearchUrl(pro: TaxProsDevExtended): string {
  const params = new URLSearchParams();

  params.set("api", "1");
  params.set("query", makeAddress(pro));
  if (pro.googlePlaceId) {
    params.set("query_place_id", pro.googlePlaceId);
  }

  return `https://www.google.com/maps/search/?${params.toString()}`;
}

function makeAddress(pro: TaxProsDevExtended): string {
  if (pro.addressHidden) {
    return `${pro.address.city} ${pro.address.region} ${pro.address.postalCode}`;
  } else {
    return `${pro.address.line1}, ${pro.address.city} ${pro.address.region} ${pro.address.postalCode}`;
  }
}
