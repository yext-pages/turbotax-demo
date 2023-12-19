import ShieldCheckIcon from "../../assets/icons/ShieldCheck";
import LocationArrowIcon from "../../assets/icons/LocationArrow";
import MapIcon from "../../assets/icons/Map";
import ItemList, { ListItem } from "./ItemList";
import useIndependentPro from "../../hooks/useIndependentPro";
import { useMemo } from "react";
import { makeGoogleMapSearchUrl } from "../../utils/googleMaps";
// import Badge from "../atoms/Badge";

const SkillsAndLinks: React.FC = () => {
  const pro = useIndependentPro();
  const items = useMemo(() => {
    const items: ListItem[] = [];

    let years: ListItem = { Icon: ShieldCheckIcon, children: "" };
    if (pro.certifications?.[0] && pro.yearsOfExperience) {
      years.children = `${pro.certifications[0]} with ${pro.yearsOfExperience} ${
        pro.yearsOfExperience === 1 ? "year" : "years"
      } of experience`;
    } else if (pro.certifications?.[0]) {
      years.children = `Experienced ${pro.certifications[0]}`;
    } else if (pro.yearsOfExperience) {
      years.children = `${pro.yearsOfExperience} ${
        pro.yearsOfExperience === 1 ? "year" : "years"
      } of experience`;
    } else {
      years.children = pro.c_title || "Experienced Pro";
    }
    items.push(years);

    if (pro.address?.region) {
      items.push({
        Icon: LocationArrowIcon,
        children: `Experienced with ${pro.address.region} tax code`,
      });

      if (pro.address.city) {
        items.push({
          Icon: MapIcon,
          children: `${pro.address.city}, ${pro.address.region}`,
          href: makeGoogleMapSearchUrl(pro),
          action: "engaged",
          object: "sidebar link",
          objectDetail: "pro location",
        });
      }
    }

    return items;
  }, [pro]);

  return (
    <div className={"flex flex-col gap-4 items-start"}>
      {/*<Badge variant={"success"}>Party on, dude</Badge>*/}
      <ItemList items={items} />
    </div>
  );
};

export default SkillsAndLinks;
