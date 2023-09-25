import { ComponentProps } from "react";
import { useAnalytics } from "../../context/analytics";
import { TypeScale } from "./TypeScale";
import Typography from "./Typography";

export interface LinkProps extends ComponentProps<"a"> {
  typeScale?: TypeScale;
  action: string;
  object: string;
  objectDetail?: string;
}

const Link: React.FC<LinkProps> = ({ action, object, objectDetail, typeScale, ...html }) => {
  const { track } = useAnalytics();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    track({
      action,
      object,
      objectDetail,
      uiObject: "link",
      uiAction: "clicked",
      event,
    });
    html.onClick?.(event);
  };

  if (typeScale) {
    return (
      // @ts-ignore
      <Typography
        as={"a"}
        {...html}
        variant={typeScale}
        children={html.children || objectDetail}
        onClick={onClick}
        data-action={action}
      />
    );
  }

  return (
    <a {...html} children={html.children || objectDetail} onClick={onClick} data-action={action} />
  );
};

export default Link;
