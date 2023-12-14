import useIndependentPro from "../../hooks/useIndependentPro";
import { B2, B3, H5 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import Link from "../atoms/Link";
import type React from "react";

const AboutMe: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <div>
      <H5 as={"h2"} weight={"demi"} color={TextColor.pepper130} className="mb-5">
        Great to meet you!
      </H5>
      <B2 color={TextColor.pepper110} className="whitespace-pre-line">
        {pro.description || pro.c_advisorBio}
      </B2>

      <B3 as={"aside"} className={"mt-4 text-pepper110 italic"}>
        This profile includes statements from the independent professional about their own
        education, skills, and experience. Intuit has not reviewed these statements for accuracy.{" "}
        <Link
          action={"engaged"}
          object={"faq link"}
          objectDetail={"See here for Intuitʼs Pro verification program"}
          className={"text-blue02 font-medium hover:underline"}
          href={"/faq#how-does-intuit-verify-these-independent-tax-professionals?"}
        />
        .
      </B3>
    </div>
  );
};

export default AboutMe;
