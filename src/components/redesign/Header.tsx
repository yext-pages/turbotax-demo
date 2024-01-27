import React from "react";
import TIPLogo from "../../assets/logos/5050_horizontal.svg";
import Button from "../atoms/Button";
import Link from "../atoms/Link";
import { TypeScale } from "../atoms/TypeScale";
import Call from "../../assets/icons/Call";
import { MatchingCtaButton } from "./SharedComponents";
import { PageSection } from "./constants";
import useIndependentPro from "../../hooks/useIndependentPro";

const Header: React.FC = () => {
  const pro = useIndependentPro();
  return (
    <header className={"bg-white px-6 py-4 sticky top-0 shadow-elev1 z-10"}>
      <div className={"flex justify-between"}>
        <nav className={"flex gap-6 items-center"}>
          <Link action={"engaged"} href={"/"} object={"tip_logo"} uiObjectDetail={"tip_logo"}>
            <picture>
              <source srcSet={TIPLogo} width={146} height={24} media={"(min-width: 360px)"} />
              {/* checkball logo for tiny screens */}
              <img
                src={"https://digitalasset.intuit.com/IMAGE/A1Ess9OMc/turbo-checkball.svg"}
                width={24}
                height={24}
                alt={"Intuit TurboTax Verified Pro logo"}
              />
            </picture>
          </Link>
          <HeaderLink name={"Expertise"} id={PageSection.Skills} className={"hidden m:block"} />
          <HeaderLink name={"Experience"} id={PageSection.Skills} className={"hidden l:block"} />
          <HeaderLink name={"Reviews"} id={PageSection.Reviews} className={"hidden m:block"} />
          <HeaderLink name={"About me"} id={PageSection.Bio} className={"hidden m:block"} />
          <HeaderLink name={"Location"} id={PageSection.Location} className={"hidden m:block"} />
        </nav>
        <div className={"flex gap-4"}>
          <Button
            as={"a"}
            href={"https://pros-turbotax.app.intuit.com/pro-matching"}
            priority={"secondary"}
            className={"hidden s:block"}
          >
            Find another Verified Pro
          </Button>
          <MatchingCtaButton
            size={"medium"}
            icon={Call}
            section={PageSection.Header}
            className={"hidden s:flex"}
          >
            Book a free call
          </MatchingCtaButton>
        </div>
      </div>
    </header>
  );
};

interface HeaderLinkProps {
  name: string;
  id: PageSection;
  className?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  return (
    <Link
      action={"clicked"}
      href={"#" + props.id}
      object={"header_" + props.id}
      uiObjectDetail={props.name}
      typeScale={TypeScale.Body02}
      children={props.name}
      className={`font-semibold hover:underline ${props.className}`}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(props.id);
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth" });
      }}
    />
  );
};

export default Header;
