import {IconProps} from "../../assets/icons";
import {B1, B2, H6} from "../atoms/Typography";

export interface ListItem {
  Icon?: React.FC<IconProps>;
  children: React.ReactNode;
  href?: string;
}

const LineItem: React.FC<ListItem> = ({Icon, children, href}) => {
  return (
    <li className="flex gap-3">
      {Icon && <Icon/>}
      {href ? (
        <B2 weight="medium" as={'a'} href={href} target={'_blank'} rel={'noreferrer noopener'}
            className={'text-blue02 hover:underline outline-blue02 outline-offset-2'}>{children}</B2>
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

const ItemList: React.FC<ItemListProps> = ({items, title}) => {
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
