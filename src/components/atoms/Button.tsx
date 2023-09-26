import { fontSizeMap, TypeScale } from "./TypeScale";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "../../types/polymorphic";
import { forwardRef } from "react";
import { useAnalytics } from "../../context/analytics";

type Priority = "primary" | "secondary" | "tertiary";
type Purpose = "standard" | "passive" | "destructive" | "special";
type Size = "small" | "medium" | "large";

type ButtonElement = "button" | "a";

type Props<C extends ButtonElement> = PolymorphicComponentPropWithRef<
  C,
  {
    action: string;
    object: string;
    uiAction?: TrackingConstants["uiAction"][keyof TrackingConstants["uiAction"]];
    uiObject?: string;

    priority?: Priority;
    purpose?: Purpose;
    size?: Size;
    iconBefore?: React.ReactChild;
    iconAfter?: React.ReactChild;
  }
>;

// interface Props extends React.HTMLAttributes<HTMLButtonElement> {
//   priority?: Priority;
//   purpose?: Purpose;
//   size?: Size;
//   iconBefore?: React.ReactChild;
//   iconAfter?: React.ReactChild;
// }

const btnStyle: Record<Priority, Record<Purpose, string>> = {
  primary: {
    standard: "bg-blue02 text-white hover:bg-[#0265AC] active:bg-blue01",
    passive: "bg-gray06 text-gray01 hover:bg-[#D2D4D7] active:bg-[#C1C3C6]",
    destructive: "bg-red02 text-white hover:bg-[#C6160F] active:bg-red01",
    special: "bg-orange02 text-white hover:bg-[#FC6000], active:bg-orange01",
  },
  secondary: {
    standard:
      "bg-white text-blue02 border-blue02 border-2 outline-offset-4 hover:bg-blue02/10 active:bg-blue02/20",
    passive:
      "bg-white text-gray01 border-gray02 border-2 outline-offset-4 hover:bg-gray02/10 active:bg-gray02/20",
    destructive:
      "bg-white text-red01 border-red02 border-2 outline-offset-4 hover:bg-red02/10 active:bg-red02/20",
    special:
      "bg-white text-orange01 border-orange02 border-2 outline-offset-4 hover:bg-orange02/10 active:bg-orange02/20",
  },
  tertiary: {
    standard: "text-blue02 [&>svg]:fill-blue02 hover:bg-blue02/10 active:bg-blue02/20",
    passive: "text-gray01 [&>svg]:fill-gray01 hover:bg-gray02/10 active:bg-gray02/20",
    destructive: "text-red01 [&>svg]:fill-red01 hover:bg-red02/10 active:bg-red02/20",
    special: "text-orange01 [&>svg]:fill-orange01 hover:bg-orange02/10 active:bg-orange02/20",
  },
};

const btnSizes: Record<Size, string> = {
  small: "h-6 min-w-[80px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-1",
  medium: "h-9 min-w-[100px] [&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-2",
  large: "h-12 min-w-[120px] [&>svg]:h-7 [&>svg]:h-7 [&>svg]:mx-3",
};

const btnPadding: Record<Size, { left: string; right: string }> = {
  small: { left: "pl-2", right: "pr-2" },
  medium: { left: "pl-4", right: "pr-4" },
  large: { left: "pl-5", right: "pr-5" },
};

const btnTypeScale: Record<Size, TypeScale> = {
  small: TypeScale.Body04,
  medium: TypeScale.Body02,
  large: TypeScale.Body01,
};

type ButtonComponent = <C extends ButtonElement = "button">(
  props: Props<C>
) => React.ReactElement | null;

// @ts-ignore
const Button: ButtonComponent = forwardRef(
  <C extends ButtonElement = "button">(
    {
      children,
      priority = "primary",
      purpose = "standard",
      size = "medium",
      className = "",
      iconBefore,
      iconAfter,
      as,
      action,
      object,
      uiAction = "clicked",
      uiObject = "button",
      ...html
    }: Props<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const typeScale = btnTypeScale[size];
    const fullClassName = `flex font-semibold items-center justify-center rounded-small outline-offset-2 outline-blue02 outline-2 ${
      fontSizeMap[typeScale]
    } ${btnStyle[priority][purpose]} ${btnSizes[size]} ${className} ${
      iconBefore ? "" : btnPadding[size].left
    } ${iconAfter ? "" : btnPadding[size].right}`;

    const { track } = useAnalytics();
    const onClick = (e: React.MouseEvent<C, MouseEvent>) => {
      track({ action, object, uiAction, uiObject, event: e });
    };

    const Element = as || "button";
    return (
      // @ts-ignore
      <Element {...html} ref={ref} className={fullClassName} onClick={onClick} data-action={action}>
        {iconBefore}
        {children}
        {iconAfter}
      </Element>
    );
  }
);

export default Button;
