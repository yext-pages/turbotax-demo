import ShieldCheckIcon from "../../assets/icons/ShieldCheck";
import LocationArrowIcon from "../../assets/icons/LocationArrow";
import DollarSignIcon from "../../assets/icons/DollarSign";
import MapIcon from "../../assets/icons/Map";
import LinkIcon from "../../assets/icons/Link";
import LinkedInIcon from "../../assets/icons/LinkedIn";
import ItemList, { ListItem } from "./ItemList";
import useIndependentPro from "../../hooks/useIndependentPro";
import { useMemo } from "react";
import { TaxProsDevExtended } from "../../hooks/useIndependentPro";
import { makeGoogleMapSearchUrl } from "../../utils/googleMaps";

const SkillsAndLinks: React.FC = () => {
  const pro = useIndependentPro();
  const items = useMemo(() => {
    const years: ListItem = {
      Icon: ShieldCheckIcon,
      children: pro.certifications
        ? `${pro.certifications[0]} with ${pro.yearsOfExperience} ${
            pro.yearsOfExperience === 1 ? "year" : "years"
          } of experience`
        : `${pro.yearsOfExperience} ${
            pro.yearsOfExperience === 1 ? "year" : "years"
          } of experience`,
    };
    const location: ListItem = {
      Icon: LocationArrowIcon,
      children: `Experienced with ${pro.address.region} tax code`,
    };
    // const expertise: ListItem = {
    // 	Icon: DollarSignIcon,
    // 	children: `Expert in ${pro.taxSpecialty} taxes`,
    // };
    const location2: ListItem = {
      Icon: MapIcon,
      children: `${pro.address.city}, ${pro.address.region}`,
      href: makeGoogleMapSearchUrl(pro),
      action: "engaged",
      object: "sidebar link",
      objectDetail: "pro location",
    };

    const items: ListItem[] = [years, location, location2];

    // if (pro.emails?.length > 0)
    //   items.push({
    //     Icon: LinkIcon,
    //     children: "Business website",
    //     href: 'https://' + pro.emails[0].split('@')[1],
    //   });
    // if (pro.links.linkedin)
    // 	items.push({
    // 		Icon: LinkedInIcon,
    // 		children: "LinkedIn",
    // 		href: pro.links.linkedin,
    // 	});

    return items;
  }, [pro]);

  return <ItemList items={items} />;
};

export default SkillsAndLinks;
