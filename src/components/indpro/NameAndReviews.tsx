import { B2, H3 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import useIndependentPro from "../../hooks/useIndependentPro";
import Button from "../atoms/Button";
import useConfig from "../../hooks/useConfig";

const NameAndReviews = () => {
  const { c_taxProName, c_officeLocationName } = useIndependentPro();
  const config = useConfig();
  return (
    <div>
      <B2 weight={"medium"} color={TextColor.gray02} className={"uppercase"}>
        {c_officeLocationName}
      </B2>
      <H3 as={"h1"}>{c_taxProName}</H3>
      {config.showMatchingCTAs && (
        <div className={"flex flex-wrap gap-2 mt-2"}>
          <Button
            action={"engaged"}
            object={"Schedule a meeting"}
            as={"a"}
            href={
              "https://myturbotax.intuit.com/?uroute=pro-matching&verified-pro-name=" +
              encodeURIComponent(c_taxProName)
            }
            className={"grow xs:grow-0"}
          >
            Schedule a meeting
          </Button>
          <Button
            action={"engaged"}
            object={"Find a pro"}
            priority={"secondary"}
            purpose={"passive"}
            as={"a"}
            href={"https://myturbotax.intuit.com/?uroute=pro-matching"}
            className={"grow xs:grow-0"}
          >
            Find a pro
          </Button>
        </div>
      )}
      {/*<Reviews />*/}
    </div>
  );
};

export default NameAndReviews;
