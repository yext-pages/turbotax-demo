import { useMemo } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import ItemList, { ListItem } from "./ItemList";

const AreasOfExpertise: React.FC = () => {
  const pro = useIndependentPro();
  const items: ListItem[] = useMemo(() => {
    return pro.c_areasOfExpertise.map((area) => ({ children: area }));
  }, [pro]);

  return <ItemList items={items} title={"Areas of expertise"} />;
};

export default AreasOfExpertise;
