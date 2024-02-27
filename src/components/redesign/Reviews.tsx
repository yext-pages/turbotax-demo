import Button from "../atoms/Button";
import React, {useEffect, useRef} from "react";
import {Section, StarScale} from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import {TypeScale} from "../atoms/TypeScale";
import {TextColor} from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import {PageSection} from "./constants";
import {fetchReviewUrl} from "../../utils/yextApi";
import {B2, B3, H6} from "../atoms/Typography";

const Reviews: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <Section
      id={PageSection.Reviews}
      solidBg
      pyStationary={"80"}
      pxSmall={"40"}
      pxLarge={"80"}
      aria-labelledby={"what-clients-say"}
      gapStationary={"24"}
      gapMobile={"24"}
    >
      <div className={"flex flex-row justify-between"}>
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
        <span className={"hidden l:block"}>
          <SubmitReview />
        </span>
      </div>
      {pro.reviewsAggregate && (<ReviewAggregate />)}
      <CardGrid />
      <span className={"l:hidden s:block"}>
          <SubmitReview />
        </span>
    </Section>
  );
};

const ReviewAggregate: React.FC = () => {
  const pro = useIndependentPro();
  if (!pro?.reviewsAggregate) {
    return <></>
  }

  return (
      <div className={"flex flex-col gap-1"}>
        <StarScale
            className={"py-2 flex gap-3"}
            rating={pro.reviewsAggregate.averageRating}
            starClass={"text-honey40 w-6 h-6"}
        />
        <span>Rated <strong>{pro.reviewsAggregate.averageRating} out of 5</strong> stars by my clients</span>
        <span>{pro.reviewsAggregate.reviewCount} reviews</span>
      </div>
  )
}

const CardGrid: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <div
      className={"-mx-10 w-full"}
      style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,1) 20px)" }}
    >
      <div style={{ maskImage: "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20px)" }}>
        <div className={"flex gap-8 snap-x overflow-x-auto snap-mandatory py-2 px-10 scroll-pl-10"}>
          {pro.reviews?.map((review) => (
              <ReviewCard
                  rating={review.rating}
                  reviewerName={review.authorName}
                  reviewDate={review.reviewDate}
                  description={review.content}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  rating: number;
  reviewerName: string;
  reviewDate: string;
  description: string;
}

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  const reviewerInitials = props.reviewerName.split(' ').map((name) => {
    return name[0]
  }).join('')

  function timeSince(reviewDate: string) {
    var seconds = Math.floor((Date.now() - new Date(reviewDate)) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours  ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes  ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

  const reviewDateDisplay = timeSince(props.reviewDate)
  return (
    <div
      className={
        "px-6 py-8 w-[300px] shrink-0 flex flex-col gap-8 rounded-large bg-white shadow-elev2 snap-start"
      }
    >
      <div className={"flex flex-row gap-4"}>
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue03">
          <span className="text-white font-bold text-2xl">
              {reviewerInitials}
          </span>
        </div>
        <div className={"flex flex-col gap-1"}>
          <H6 weight={"bold"}>{props.reviewerName}</H6>
          <B3>{reviewDateDisplay}</B3>
        </div>
      </div>
      <div className={"flex flex-col gap-2"}>
        <StarScale
          className={"py-2 flex gap-3"}
          rating={props.rating}
          starClass={"text-honey40 w-6 h-6"}
        />
        <B2>“{props.description}”</B2>
      </div>
    </div>
  );
};

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
    <div ref={ref}>
      {reviewUrl && (
        <Button
          as={"a"}
          href={reviewUrl}
          priority={"secondary"}
          className={"s:self-start"}
          uiObjectDetail={"yext_review_generation_url"}
        >
          Leave a review
        </Button>
      )}
    </div>
  );
};

export default Reviews;
