import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import Reviews from "./Reviews";
import useIndependentPro from "../../hooks/useIndependentPro";

const NameAndReviews = () => {
  const { businessName, fullName } = useIndependentPro();
  return (
    <div>
      <B2 weight={"medium"} color={TextColor.gray02} className={"uppercase"}>
        {businessName}
      </B2>
      <H3>{fullName}</H3>
      <Reviews />
    </div>
  );
};

export default NameAndReviews;
