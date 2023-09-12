import BodyText from "./atoms/BodyText";
import Selector from "./Selector";
import {B2} from "./atoms/Typography";

export interface NavBarProps {
  items: {
    id: string;
    label?: string;
  }[];
  onSelect?: (id: string) => void;
}

export const initialProps: NavBarProps = {
  items: [{ id: "About" }, { id: "Insurances" }, { id: "Locations" }],
};

export default function NavBar({ items, onSelect }: NavBarProps) {
  const handleSelect = (id: string) => {
    onSelect?.(id);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className=" h-12 s:h-16 justify-between border-b border-pepper30 flex">
        <div className="flex">
          <div className="ml-6 flex space-x-6 s:space-x-8">
            {items.map(({ label, id }) => (
              <button
                key={id}
                className={`inline-flex items-center px-1 pt-1 border-transparent hover:border-logointuit border-b-2`}
                onClick={() => handleSelect(id)}
              >
                <B2 weight={'medium'}>{label || id}</B2>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/*<div className="block px-10 s:hidden">*/}
      {/*  <Selector items={items} onSelect={onSelect} />*/}
      {/*</div>*/}
    </div>
  );
}
