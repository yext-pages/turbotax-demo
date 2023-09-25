import { useMemo } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import ItemList, { ListItem } from "./ItemList";

const LanguagesSpoken: React.FC = () => {
  const pro = useIndependentPro();
  const items: ListItem[] = useMemo(() => {
    if (pro.languages === undefined) return [{ children: "English" }];
    return pro.languages?.map((lang) => ({ children: lang }));
  }, [pro]);

  return <ItemList items={items} title={"Languages spoken"} />;
};

export default LanguagesSpoken;
