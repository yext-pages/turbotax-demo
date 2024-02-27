import {TaxProsDevExtended} from "../hooks/useIndependentPro";

export async function fetchReviewUrl(pro: TaxProsDevExtended): Promise<string | undefined> {
  const params = new URLSearchParams();
  params.set("fields", "reviewGenerationUrl");
  params.set("v", "20240117");
  params.set("api_key", YEXT_PUBLIC_REVIEWS_API_KEY);

  try {
    const response = await fetch(
      "https://cdn.yextapis.com/v2/accounts/me/entities/" + pro.id + "?" + params
    );
    const respJson = await response.json();
    const url: string | undefined = respJson.response.reviewGenerationUrl;

    if (!url) {
      console.log("No reviewGenerationUrl found: " + JSON.stringify(respJson));
    }

    return url;
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

export interface ReviewAggregateResponse {
  averageRating: number
  reviewCount: number
}

export async function getReviewsAggregate(pro: TaxProsDevExtended): Promise<ReviewAggregateResponse | undefined> {
  const params = new URLSearchParams();
  params.set("v", "20240117");
  params.set("api_key", YEXT_PUBLIC_REVIEWS_API_KEY);
  params.set("entity.id", pro.id);

  try {
    const response = await fetch(
        "https://cdn.yextapis.com/v2/accounts/me/content/ttoProGoogleReviews" + "?" + params
    );
    const respJson = await response.json();
    return respJson?.response?.docs?.[0];
  } catch (err) {
    console.error(err);
  }

  return undefined;
}

export interface ReviewResponse {
  authorName: string
  content: string
  rating: number
  reviewDate: string
}

export async function getReviews(pro: TaxProsDevExtended): Promise<ReviewResponse[] | undefined> {
  const params = new URLSearchParams();
  params.set("v", "20240117");
  params.set("api_key", YEXT_PUBLIC_REVIEWS_API_KEY);
  params.set("entity.id", pro.id);

  try {
    const response = await fetch(
        "https://cdn.yextapis.com/v2/accounts/me/content/turbotaxProGoogleReviewsDetailed" + "?" + params
    );
    const respJson = await response.json();
    return respJson?.response?.docs;
  } catch (err) {
    console.error(err);
  }

  return undefined;
}