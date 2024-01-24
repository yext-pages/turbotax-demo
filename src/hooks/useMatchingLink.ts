import useConfig from "./useConfig";
import useIndependentPro from "./useIndependentPro";
import { useEffect, useState } from "react";

export const useMatchingLink = (): string => {
  const config = useConfig();
  const pro = useIndependentPro();

  const [link, setLink] = useState(() => {
    const [url, params] = config.makeMatchingCtaUrl(pro);
    return url + "?" + params.toString();
  });

  useEffect(() => {
    if (!globalThis.document) return;
    const [url, params] = config.makeMatchingCtaUrl(pro);
    const enrichedParams = enrichCtaQueryParams(params);

    setLink(url + "?" + enrichedParams.toString());
  }, []);

  return link;
};

const CID_KEY = "cid";
const CHANNEL_URL_KEY = "channelUrl";

function enrichCtaQueryParams(source: URLSearchParams): URLSearchParams {
  const params = new URLSearchParams(source);
  if (!globalThis.document) return params;

  const currentParams = new URL(document.URL).searchParams;

  if (currentParams.has(CID_KEY)) {
    params.set(CID_KEY, currentParams.get(CID_KEY) as string);
  }

  if (window.location.pathname.endsWith("/pro")) {
    params.set(CID_KEY, "pr");
  }

  const referrer = document.referrer;
  if (referrer) {
    params.set(CHANNEL_URL_KEY, referrer);
  }

  return params;
}
