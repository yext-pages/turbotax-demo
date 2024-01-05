import useIndependentPro from "../../hooks/useIndependentPro";
import { B3, H5 } from "../atoms/Typography";
import { TextColor } from "../atoms/TextColor";
import { makeGoogleMapSearchUrl } from "../../utils/googleMaps";
import Link from "../atoms/Link";

interface Props {
  className?: string;
}

const Map: React.FC<Props> = ({ className }) => {
  const pro = useIndependentPro();
  const {
    address: { line1, line2, line3, city, region, postalCode },
    addressHidden,
    c_officeLocationName,
    c_signedMapUrl,
  } = pro;

  const showAddress = !addressHidden || false;

  return (
    <figure className={className}>
      {c_signedMapUrl && (
        <Link
          action={"engaged"}
          object={"google maps image"}
          href={makeGoogleMapSearchUrl(pro)}
          target={"_blank"}
        >
          <img
            width={300}
            height={300}
            className={"mb-8 rounded-large w-full s:w-[300px] h-auto bg-gray08"}
            src={c_signedMapUrl}
            alt={`Map showing location of ${c_officeLocationName}`}
          />
        </Link>
      )}

      <figcaption className={"text-pepper110"}>
        <H5 as={"h2"} weight={"demi"} color={TextColor.pepper130} className={"mb-2"}>
          Location
        </H5>
        {showAddress && (
          <>
            <B3>{line1}</B3>
            {line2 && <B3>{line2}</B3>}
            {line3 && <B3>{line3}</B3>}
          </>
        )}
        <B3>
          {city}, {region} {postalCode}
        </B3>
      </figcaption>
    </figure>
  );
};

export default Map;
