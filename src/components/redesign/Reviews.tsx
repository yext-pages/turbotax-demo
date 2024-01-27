import Button from "../atoms/Button";
import React, { useEffect, useRef } from "react";
import { Section } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import { PageSection } from "./constants";
import { fetchReviewUrl } from "../../utils/yextApi";

const Reviews: React.FC = () => {
  return (
    <Section
      id={PageSection.Reviews}
      solidBg
      pyStationary={"80"}
      pxSmall={"40"}
      pxLarge={"80"}
      aria-labelledby={"what-clients-say"}
    >
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline04}
        typescaleStationary={TypeScale.Headline02}
        weightMobile={"regular"}
        weightStationary={"regular"}
        color={TextColor.textPrimary}
        as={"h2"}
        id={"what-clients-say"}
      >
        What my clients say
      </ResponsiveTypography>
      {/*<ReviewsWidget showNote />*/}
      {/*<CardGrid />*/}
      <SubmitReview />
    </Section>
  );
};

// const CardGrid: React.FC = () => {
//   return (
//     <div
//       className={"-mx-10"}
//       style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1) 20px)" }}
//     >
//       <div style={{ maskImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20px)" }}>
//         <div className={"flex gap-8 snap-x overflow-x-auto snap-mandatory py-2 px-10 scroll-pl-10"}>
//           <ReviewCard
//             rating={3.5}
//             reviewerName={"Scott Cook"}
//             reviewDate={"Yesterday"}
//             description={
//               "This is the best tax service I could ever use. I have used Amy since 2008, she just keep getting better & better."
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// interface ReviewCardProps {
//   rating: number;
//   reviewerName: string;
//   reviewDate: string;
//   description: string;
// }
//
// const ReviewCard: React.FC<ReviewCardProps> = (props) => {
//   return (
//     <div
//       className={
//         "px-6 py-8 w-[300px] shrink-0 flex flex-col gap-10 rounded-large bg-white shadow-elev2 snap-start"
//       }
//     >
//       <div className={"flex flex-col gap-1"}>
//         <H6 weight={"bold"}>{props.reviewerName}</H6>
//         <B3>{props.reviewDate}</B3>
//       </div>
//
//       <div className={"flex flex-col gap-2"}>
//         <StarScale
//           className={"py-2 flex gap-3"}
//           rating={props.rating}
//           starClass={"text-honey40 w-6 h-6"}
//         />
//         <B2>“{props.description}”</B2>
//       </div>
//     </div>
//   );
// };

const SubmitReview: React.FC = () => {
  const pro = useIndependentPro();
  const [reviewUrl, setReviewUrl] = React.useState(pro.reviewGenerationUrl);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reviewUrl) return;
    const elem = ref.current;
    if (!elem || !globalThis.IntersectionObserver) return;
    console.log("setting up observer");

    // fetch the url when we are getting close to it
    const config: IntersectionObserverInit = {
      rootMargin: "400px",
      threshold: 1.0,
    };

    const callback: IntersectionObserverCallback = (entries, self) => {
      if (entries.length === 1 && entries[0].isIntersecting) {
        fetchReviewUrl(pro)
          .then((url) => setReviewUrl(url))
          .finally(() => self.disconnect());
      }
    };

    const observer = new IntersectionObserver(callback, config);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [reviewUrl]);

  return (
    <div ref={ref} className={"flex"}>
      {reviewUrl && (
        <Button
          as={"a"}
          href={reviewUrl}
          priority={"secondary"}
          className={"s:self-start"}
          uiObjectDetail={"yext_review_generation_url"}
        >
          Be the first to leave a review
        </Button>
      )}
    </div>
  );
};

export default Reviews;
