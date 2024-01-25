import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import Button from "../atoms/Button";
import useConfig from "../../hooks/useConfig";
import { Label, useProHasLabel } from "../../hooks/useProHasLabel";
import ErrorBoundary from "../ErrorBoundary";
import { useEffect, useRef, useState } from "react";
import { useMatchingLink } from "../../hooks/useMatchingLink";

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
  const config = useConfig();

  const isOffboarding = useProHasLabel(Label.OffboardInProgress);
  const showCTAs = config.showMatchingCTAs && !isOffboarding;

  const matchingLink = useMatchingLink();
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // work-around
    const anchorElem = linkRef.current;
    if (anchorElem) anchorElem.href = matchingLink;
  }, []);

  if (!showCTAs) return null;
  return (
    <div className={"flex flex-wrap gap-2 mt-2"}>
      <Button
        id={"book-intro-url"}
        ref={linkRef}
        as={"a"}
        href={matchingLink}
        className={"grow xs:grow-0"}
      >
        Book an intro call
      </Button>
    </div>
  );
};

export default NameAndReviews;
