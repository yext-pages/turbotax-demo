import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import Reviews from "./Reviews";
import useIndependentPro from "../../hooks/useIndependentPro";
import Button from "../atoms/Button";

const NameAndReviews = () => {
  const { c_taxProName, c_officeLocationName } = useIndependentPro();
  return (
    <div>
      <B2 weight={"medium"} color={TextColor.gray02} className={"uppercase"}>
        {c_officeLocationName}
      </B2>
      <H3>{c_taxProName}</H3>
      {/*<div className={'flex gap-2 mt-2'}>*/}
      {/*  <Button>Schedule a meeting</Button>*/}
      {/*  <Button priority={'secondary'} purpose={'passive'}>Find a pro</Button>*/}
      {/*</div>*/}
      {/*<Reviews />*/}
    </div>
  );
};

export default NameAndReviews;
