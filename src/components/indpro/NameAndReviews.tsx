import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import Button from "../atoms/Button";
import useConfig from "../../hooks/useConfig";
import { Label, useProHasLabel } from "../../hooks/useProHasLabel";
import ErrorBoundary from "../ErrorBoundary";
import { useEffect, useState } from "react";

const CID_KEY = "cid";
const CHANNEL_URL_KEY = "channelUrl";

function enrichCtaQueryParams(params: URLSearchParams): void {
  if (!globalThis.document) return;
  console.log("enriching params");

  const currentParams = new URL(document.URL).searchParams;

  if (currentParams.has(CID_KEY)) {
    params.set(CID_KEY, currentParams.get(CID_KEY) as string);
  }

  const referrer = document.referrer;
  if (referrer) {
    params.set(CHANNEL_URL_KEY, referrer);
  }
}

const NameAndReviews = () => {
  const pro = useIndependentPro();
  const { c_taxProName, c_officeLocationName } = pro;

  return (
    <div>
      <B2 weight={"medium"} color={TextColor.gray02} className={"uppercase"}>
        {c_officeLocationName}
      </B2>
      <H3 as={"h1"}>{c_taxProName}</H3>
      <ErrorBoundary fallback={null}>
        <CallToActions />
      </ErrorBoundary>
      {/*<Reviews />*/}
    </div>
  );
};

const CallToActions = () => {
  const pro = useIndependentPro();
  const config = useConfig();

  const isOffboarding = useProHasLabel(Label.OffboardInProgress);
  const showCTAs = config.showMatchingCTAs && !isOffboarding;

  const [ctaUrl, ctaParams] = config.makeMatchingCtaUrl(pro);
  enrichCtaQueryParams(ctaParams);

  const [fullUrl, setFullUrl] = useState(ctaUrl + "?" + ctaParams.toString());

  useEffect(() => {
    enrichCtaQueryParams(ctaParams);
    setFullUrl(ctaUrl + "?" + ctaParams.toString());
  }, []);

  if (!showCTAs) return null;
  return (
    <div className={"flex flex-wrap gap-2 mt-2"}>
      <Button as={"a"} href={fullUrl} className={"grow xs:grow-0"}>
        Book an intro call
      </Button>
    </div>
  );
};

export default NameAndReviews;
