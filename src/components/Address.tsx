import { twMerge } from "tailwind-merge";
import { Coordinate } from "../types/autogen";
import BodyText from "./atoms/BodyText";
import { ThemeColors } from "../types/tailwind";

export interface AddressProps {
  address: {
    city?: string;
    countryCode?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
    region?: string;
  };
  geocodedCoordinates?: Coordinate;
  showDirectionsLink?: boolean;
  containerClassname?: string;
  textColor?: ThemeColors;
}

export const initialProps: AddressProps = {
  address: {
    city: "New York",
    countryCode: "US",
    line1: "123 Main St",
    line2: "Apt 1",
    postalCode: "10001",
    region: "NY",
  },
  geocodedCoordinates: {
    latitude: 40.7484,
    longitude: 73.9857,
  },
  showDirectionsLink: true,
  textColor: "gray-dark",
};

export default function Address({
  address,
  geocodedCoordinates,
  showDirectionsLink,
  containerClassname,
  textColor,
}: AddressProps) {
  return (
    <div className={twMerge("text-sm", containerClassname)}>
      {address.line1 && <BodyText text={address.line1} color={textColor} />}
      {address.line2 && <BodyText text={address.line2} color={textColor} />}
      {address.city && address.region && (
        <BodyText
          text={`${address.city}, ${address.region} ${address.postalCode}`}
          color={textColor}
        />
      )}

      {showDirectionsLink && geocodedCoordinates && (
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${geocodedCoordinates.latitude},${geocodedCoordinates.longitude}`}
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>
      )}
    </div>
  );
}
