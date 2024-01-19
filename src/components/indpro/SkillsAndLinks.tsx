import ShieldCheckIcon from "../../assets/icons/ShieldCheck";
import CallIcon from "../../assets/icons/Call";
import LocationArrowIcon from "../../assets/icons/LocationArrow";
import MapIcon from "../../assets/icons/Map";
import ItemList, { ListItem } from "./ItemList";
import useIndependentPro from "../../hooks/useIndependentPro";
import { useMemo } from "react";
import { makeGoogleMapSearchUrl } from "../../utils/googleMaps";
import Badge from "../atoms/Badge";

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

    if (pro.mainPhone) {
      items.push({
        Icon: CallIcon,
        children: formatPhone(pro.mainPhone),
        href: `tel:${pro.mainPhone}`,
        action: "engaged",
        object: "sidebar link",
        objectDetail: "phone number",
      });
    }

    return items;
  }, [pro.c_pseudonymID]);

  return (
    <div className={"flex flex-col gap-4 items-start"}>
      {pro.c_acceptingNewClients == false ? (
        <Badge variant={"critical"}>Not accepting new clients</Badge>
      ) : (
        <Badge variant={"success"}>Accepting new clients</Badge>
      )}
      <ItemList items={items} />
    </div>
  );
};

export function formatPhone(phone: string): string {
  // our sync service formats phone numbers in the form of +1XXXXXXXXXX
  // we want to format them as (XXX) XXX-XXXX
  // if the phone number is not in the expected format, we return it as is (shouldn't happen)
  if (phone.length === 12 && phone.startsWith("+1")) {
    return `(${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8)}`;
  }
  return phone;
}

export default SkillsAndLinks;
