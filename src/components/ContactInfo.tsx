import { HexColor } from "@yext/studio";
import Address from "./Address";
import HeadingText from "./atoms/HeadingText";
import { ThemeColors } from "../types/tailwind";
import GridContainer from "./GridContainer";
import VerticalStack from "./VerticalStack";
import BodyText from "./atoms/BodyText";

export interface ContactInfoProps {
  children?: React.ReactNode;
  name?: string;
  title?: string;
  address: {
    city?: string;
    countryCode?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
    region?: string;
  };
  phone?: string;
  email?: string;
  textColor?: ThemeColors;
}

export const initialProps = {
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
  showDirectionsLink: false,
  textColor: "gray-dark",
};

const ContactInfo = ({
  name,
  title,
  address,
  phone,
  email,
  textColor,
}: ContactInfoProps) => {
  return (
    <div className="rounded-lg w-96">
      <HeadingText text={name} color={textColor} />
      <h2 className="text-lg font-semibold mb-2" style={{ color: textColor }}>
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-6">
        <Address address={address} textColor={textColor} />
        <VerticalStack
          spacing="0"
          topMargin="0"
          leftMargin="0"
          rightMargin="0"
          bottomMargin="0"
          alignment="left"
        >
          <BodyText color="white" text={phone} />
          <BodyText color="white" text={email} />
        </VerticalStack>
      </div>
      {/* <button className="bg-white hover:bg-slate-100 text-blue border-blue font-semibold py-2 px-4 rounded">
            Get In Touch
          </button> */}
    </div>
  );
};

export default ContactInfo;
