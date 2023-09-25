import { IconProps } from "../../assets/icons";
import { B2, H6 } from "../atoms/Typography";
import Link from "../atoms/Link";

export type ListItem = {
  Icon?: React.FC<IconProps>;
  children: React.ReactNode;
} & (
  | { href: string; action: string; object: string; objectDetail?: string }
  | { href?: never; action?: never; object?: never; objectDetail?: never }
);

const LineItem: React.FC<ListItem> = ({ Icon, children, href, action, object, objectDetail }) => {
  return (
    <li className="flex gap-3">
      {Icon && <Icon />}
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
        <B2 weight="medium">{children}</B2>
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
      {title && <H6 weight="demi">{title}:</H6>}
      <ul className="flex flex-col gap-5">
        {items.map((item, i) => (
          <LineItem key={i} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
