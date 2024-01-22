import React from "react";
import TIPLogo from "../../assets/logos/5050_horizontal.svg";
import Button from "../atoms/Button";
import Link from "../atoms/Link";
import { TypeScale } from "../atoms/TypeScale";
import Call from "../../assets/icons/Call";
import { MatchingCtaButton } from "./SharedComponents";

const Header: React.FC = () => {
  return (
    <header className={"hidden s:block bg-white px-6 py-4 sticky top-0 shadow-elev1 z-10"}>
      <div className={"flex justify-between"}>
        <div className={"flex gap-6 items-center"}>
          <Link action={"engaged"} href={"/"} object={"tip_logo"} uiObjectDetail={"tip_logo"}>
            <picture>
              <source srcSet={TIPLogo} width={146} height={24} media={"(min-width: 1024px)"} />
              <img
                src={"https://digitalasset.intuit.com/IMAGE/A1Ess9OMc/turbo-checkball.svg"}
                width={24}
                height={24}
                alt={"Intuit TurboTax Verified Pro logo"}
              />
            </picture>
          </Link>
          <HeaderLink name={"Expertise"} id={"skills"} />
          <HeaderLink name={"Experience"} id={"skills"} className={"hidden m:block"} />
          <HeaderLink name={"Reviews"} id={"reviews"} />
          <HeaderLink name={"About me"} id={"bio"} />
          <HeaderLink name={"Location"} id={"location"} />
        </div>
        <div className={"flex gap-4"}>
          <Button as={"a"} href={"/"} priority={"secondary"}>
            Learn more
          </Button>
          <MatchingCtaButton size={"medium"} icon={Call}>
            Book a free call
          </MatchingCtaButton>
        </div>
      </div>
    </header>
  );
};

interface HeaderLinkProps {
  name: string;
  id: string;
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
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
    />
  );
};

export default Header;
