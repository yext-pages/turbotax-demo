import React, { useEffect, useState } from "react";
import { MatchingCtaButton } from "./SharedComponents";

const StickyMatchingFooter: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      if (entries.length === 1) {
        setVisible(!entries[0].isIntersecting);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById("primary-cta")!!);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        "s:hidden sticky bottom-0 bg-white p-4 pb-7 shadow-elev2 rounded-t-large border-t-1 border-t-pepper20 transition-opacity duration-350 ease-transform " +
        (visible ? "opacity-100" : "opacity-0")
      }
    >
      <MatchingCtaButton className={"w-full"} size={"medium"}>
        Book a free call
      </MatchingCtaButton>
    </div>
  );
};

export default StickyMatchingFooter;
