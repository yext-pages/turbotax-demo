import { fontSizeMap, TypeScale } from "./TypeScale";
import { PolymorphicComponentPropWithRef, PolymorphicRef } from "../../types/polymorphic";
import { forwardRef } from "react";
import { useAnalytics } from "../../context/analytics";

type Priority = "primary" | "secondary" | "tertiary";
type Purpose = "standard" | "passive";
type Size = "small" | "medium" | "large";

type ButtonElement = "button" | "a";

export type Props<C extends ButtonElement> = PolymorphicComponentPropWithRef<
  C,
  {
    action?: string;
    object?: string;
    uiAction?: TrackingConstants["uiAction"][keyof TrackingConstants["uiAction"]];
    uiObject?: string;
    uiObjectDetail?: string;

    priority?: Priority;
    purpose?: Purpose;
    size?: Size;
    iconBefore?: React.ReactChild;
    iconAfter?: React.ReactChild;
    children: string;
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
    standard:
      "bg-blueberry80 border-blueberry80 text-white hover:bg-blueberry90 active:bg-blueberry100",
    passive: "bg-pepper10 border-pepper10 text-pepper120 hover:bg-pepper20 active:bg-pepper30",
  },
  secondary: {
    standard:
      "text-blueberry80 border-blueberry80 border-2 outline-offset-4 hover:bg-blueberry0 active:bg-blueberry10",
    passive:
      "text-pepper120 border-pepper120 border-2 outline-offset-4 hover:bg-pepper0 active:bg-pepper10",
  },
  tertiary: {
    standard:
      "text-blueberry80 border-transparent [&>svg]:fill-blueberry80 hover:bg-blueberry0 active:bg-blueberry10",
    passive:
      "text-gray01 border-transparent [&>svg]:fill-gray01 hover:bg-pepper0 active:bg-pepper10",
  },
};

const btnSizes: Record<Size, string> = {
  small: "h-6 !leading-[20px] min-w-[80px] [&>svg]:w-4 [&>svg]:h-4 [&>svg]:mx-1",
  medium: "h-9 !leading-[32px] min-w-[100px] [&>svg]:w-6 [&>svg]:h-6 [&>svg]:mx-2",
  large: "h-12 !leading-[44px] min-w-[120px] [&>svg]:h-7 [&>svg]:h-7 [&>svg]:mx-3",
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
      action = "engaged",
      object = "content",
      uiAction = "clicked",
      uiObject = "button",
      uiObjectDetail,
      ...html
    }: Props<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const typeScale = btnTypeScale[size];
    const fullClassName = `flex text-center border-2 font-semibold items-center justify-center rounded-small outline-offset-2 outline-blue02 outline-2 ${
      fontSizeMap[typeScale]
    } ${btnStyle[priority][purpose]} ${btnSizes[size]} ${className} ${
      iconBefore ? "" : btnPadding[size].left
    } ${iconAfter ? "" : btnPadding[size].right}`;

    const { track } = useAnalytics();
    const onClick = (e: React.MouseEvent<C, MouseEvent>) => {
      track({
        action,
        object,
        uiAction,
        uiObject,
        uiObjectDetail: uiObjectDetail || children,
        event: e,
      });
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
