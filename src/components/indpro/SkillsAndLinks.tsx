import ShieldCheckIcon from "../../assets/icons/ShieldCheck";
import LocationArrowIcon from "../../assets/icons/LocationArrow";
import DollarSignIcon from "../../assets/icons/DollarSign";
import MapIcon from "../../assets/icons/Map";
import LinkIcon from "../../assets/icons/Link";
import LinkedInIcon from "../../assets/icons/LinkedIn";
import ItemList, { ListItem } from "./ItemList";
import useIndependentPro from "../../hooks/useIndependentPro";
import { useMemo } from "react";

const SkillsAndLinks: React.FC = () => {
	const pro = useIndependentPro();
	const items = useMemo(() => {
		const years: ListItem = {
			Icon: ShieldCheckIcon,
			children: `CPA with ${pro.yearsOfExperience} ${
				pro.yearsOfExperience === 1 ? "year" : "years"
			} of experience`,
		};
		const location: ListItem = {
			Icon: LocationArrowIcon,
			children: `Experienced with ${pro.businessAddress.state} tax code`,
		};
		const expertise: ListItem = {
			Icon: DollarSignIcon,
			children: `Expert in ${pro.taxSpecialty} taxes`,
		};
		const location2: ListItem = {
			Icon: MapIcon,
			children: `${pro.businessAddress.city}, ${pro.businessAddress.state}`,
		};

		const items: ListItem[] = [years, location, expertise, location2];

		if (pro.links.website)
			items.push({
				Icon: LinkIcon,
				children: "Business website",
				href: pro.links.website,
			});
		if (pro.links.linkedin)
			items.push({
				Icon: LinkedInIcon,
				children: "LinkedIn",
				href: pro.links.linkedin,
			});

		return items;
	}, [pro]);

	return <ItemList items={items} />;
};

export default SkillsAndLinks;
