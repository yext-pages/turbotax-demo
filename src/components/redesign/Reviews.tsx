import Button from "../atoms/Button";
import React from "react";
import { Section, StarScale } from "./SharedComponents";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TypeScale } from "../atoms/TypeScale";
import { TextColor } from "../atoms/TextColor";
import { B2, B3, H6 } from "../atoms/Typography";
import useIndependentPro from "../../hooks/useIndependentPro";

const Reviews: React.FC = () => {
  const pro = useIndependentPro();
  if (!pro.reviewGenerationUrl) return null;

  return (
    <Section id={"reviews"} solidBg pyStationary={"80"} pxSmall={"40"} pxLarge={"80"}>
      <ResponsiveTypography
        typescaleMobile={TypeScale.Headline04}
        typescaleStationary={TypeScale.Headline02}
        weightMobile={"regular"}
        weightStationary={"regular"}
        color={TextColor.textPrimary}
        as={"h2"}
      >
        What my clients say
      </ResponsiveTypography>
      {/*<ReviewsWidget showNote />*/}
      {/*<CardGrid />*/}
      <SubmitReview />
    </Section>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className={"grid grid-cols-3 gap-10"}>
      <ReviewCard
        rating={3.5}
        reviewerName={"Scott Cook"}
        reviewDate={"Yesterday"}
        description={
          "This is the best tax service I could ever use. I have used Amy since 2008, she just keep getting better & better."
        }
      />
      <ReviewCard
        rating={3.5}
        reviewerName={"Scott Cook"}
        reviewDate={"Yesterday"}
        description={
          "This is the best tax service I could ever use. I have used Amy since 2008, she just keep getting better & better."
        }
      />
      <ReviewCard
        rating={3.5}
        reviewerName={"Scott Cook"}
        reviewDate={"Yesterday"}
        description={
          "This is the best tax service I could ever use. I have used Amy since 2008, she just keep getting better & better."
        }
      />
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
  return (
    <div className={"px-6 py-8 flex flex-col gap-10 rounded-large bg-white shadow-elev2"}>
      <div className={"flex flex-col gap-1"}>
        <H6 weight={"bold"}>{props.reviewerName}</H6>
        <B3>{props.reviewDate}</B3>
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
  if (!pro.reviewGenerationUrl) return null;

  return (
    <Button
      as={"a"}
      href={pro.reviewGenerationUrl}
      priority={"secondary"}
      className={"s:self-start"}
      uiObjectDetail={"yext_review_generation_url"}
    >
      Be the first to leave a review
    </Button>
  );
};

export default Reviews;
