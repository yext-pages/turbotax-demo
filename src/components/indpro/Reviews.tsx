import { B3, B4 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import StarEmpty from "../../assets/icons/Star";
import StarFill from "../../assets/icons/StarFill";
import StarHalf from "../../assets/icons/StarHalf";
import { useMemo } from "react";

const Reviews: React.FC = () => {
  return (
    <div className={"flex flex-col gap-1"}>
      <div className={"flex gap-2 items-center"}>
        <Stars rating={4.6} />
        <B3 color={TextColor.gray01}>(4.6/5 | 160 reviews)</B3>
      </div>
      <B4>Star ratings are from 2022</B4>
    </div>
  );
};

const Stars = ({ rating }: { rating: number }) => {
  const content = useMemo(() => {
    const starArr = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 0.75) {
        starArr.push(<StarFill key={i} />);
      } else if (rating > i + 0.3) {
        starArr.push(<StarHalf key={i} />);
      } else {
        starArr.push(<StarEmpty key={i} />);
      }
    }
    return starArr;
  }, [rating]);

  return <div className={"flex gap-1 text-yellow03 [&>svg]:h-5 [&>svg]:w-5"}>{content}</div>;
};

export default Reviews;
