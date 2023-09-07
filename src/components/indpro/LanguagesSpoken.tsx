import { useMemo } from "react";
import useIndependentPro from "../../hooks/useIndependentPro";
import ItemList, { ListItem } from "./ItemList";

const LanguagesSpoken: React.FC = () => {
	const pro = useIndependentPro();
	const items: ListItem[] = useMemo(() => {
		return pro.languagesSpoken.map((lang) => ({ children: lang }));
	}, [pro]);

	return <ItemList items={items} title={"Languages spoken"} />;
};

export default LanguagesSpoken;
