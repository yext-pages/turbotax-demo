import { IconProps } from "../../assets/icons";
import { H6 } from "../atoms/Typography";
import Link from "../atoms/Link";
import { FontWeight, TypeScale } from "../atoms/TypeScale";
import ResponsiveTypography from "../atoms/ResponsiveTypography";
import { TextColor } from "../atoms/TextColor";
import React from "react";

export type ListItem = {
  Icon?: React.FC<IconProps>;
  icon?: React.ReactNode;
  children: React.ReactNode;
  typescaleStationary?: TypeScale;
  typescaleMobile?: TypeScale;
  weightStationary?: FontWeight;
  weightMobile?: FontWeight;
} & (
  | { href: string; action: string; object: string; objectDetail?: string }
  | { href?: never; action?: never; object?: never; objectDetail?: never }
);

const LineItem: React.FC<ListItem> = ({
  Icon,
  icon,
  children,
  href,
  action,
  object,
  objectDetail,
  typescaleMobile = TypeScale.Body02,
  typescaleStationary = TypeScale.Body02,
  weightStationary = "medium",
  weightMobile = "medium",
}) => {
  return (
    <li className="flex gap-3">
      {Icon && <Icon />}
      {icon && icon}
      {href ? (
        <Link
          href={href}
          action={action}
          object={object}
          objectDetail={objectDetail}
          target={"_blank"}
          rel={"noreferrer noopener"}
          className={"text-blue02 hover:underline outline-blue02 outline-offset-2 font-medium"}
        >
          {children}
        </Link>
      ) : (
        <ResponsiveTypography
          typescaleMobile={typescaleMobile}
          typescaleStationary={typescaleStationary}
          weightMobile={weightMobile}
          weightStationary={weightStationary}
          color={TextColor.textPrimary}
          as={"div"}
        >
          {children}
        </ResponsiveTypography>
      )}
    </li>
  );
};

interface ItemListProps {
  items: ListItem[];
  title?: string;
}

const ItemList: React.FC<ItemListProps> = ({ items, title }) => {
  return (
    <div className="flex flex-col gap-5">
      {title && (
        <H6 as={"h2"} weight="demi">
          {title}:
        </H6>
      )}
      <ul className="flex flex-col gap-5">
        {items.map((item, i) => (
          <LineItem key={i} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
