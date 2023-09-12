import useIndependentPro from "../../hooks/useIndependentPro";
import {B3, H5} from "../atoms/Typography";
import {TextColor} from "../atoms/TextColor";

interface Props {
  className?: string;
}

const Map: React.FC<Props> = ({className}) => {
  const {
    address: {line1, line2, line3, city, region, postalCode},
    c_officeLocationName,
    c_signedMapUrl,
  } = useIndependentPro();

  return (
    <figure className={className}>
      {c_signedMapUrl && (
        <img width={300} height={300} className={'mb-8 rounded-large w-full s:w-[300px] h-auto'} src={c_signedMapUrl} alt={`Map showing location of ${c_officeLocationName}`}/>
      )}

      <figcaption className={'text-pepper110'}>
        <H5 weight={"demi"} color={TextColor.pepper130} className={'mb-2'}>Location</H5>
        <B3>{line1}</B3>
        {line2 && <B3>{line2}</B3>}
        {line3 && <B3>{line3}</B3>}
        <B3>
          {city}, {region} {postalCode}
        </B3>
      </figcaption>
    </figure>
  );
};

export default Map;
