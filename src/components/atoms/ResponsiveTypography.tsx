import {
  fontSizeMapMobile,
  fontSizeMapStationary,
  FontWeight,
  fontWeightMap,
  fontWeightMapStationary,
  TypeScale,
} from "./TypeScale";
import React, { PropsWithChildren } from "react";
import { TextColor } from "./TextColor";

type Props = {
  typescaleMobile: TypeScale;
  typescaleStationary: TypeScale;
  weightMobile: FontWeight;
  weightStationary: FontWeight;
  color?: TextColor;
  as: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a";
  style?: React.CSSProperties;
  className?: string;
  href?: string;
} & React.ComponentPropsWithoutRef<"div">;

const ResponsiveTypography: React.FC<PropsWithChildren<Props>> = ({
  typescaleMobile,
  typescaleStationary,
  weightMobile,
  weightStationary,
  color = TextColor.textPrimary,
  as,
  className,
  ...html
}) => {
  const Element = as;
  const fullClassName = `${fontSizeMapStationary[typescaleStationary]} ${
    fontSizeMapMobile[typescaleMobile]
  } ${fontWeightMapStationary[weightStationary]} ${fontWeightMap[weightMobile]} ${color} ${
    className || ""
  }`;
  return <Element className={fullClassName} {...html} />;
};

export default ResponsiveTypography;
