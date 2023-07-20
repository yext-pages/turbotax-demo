import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import GridContainer from "../components/GridContainer";
import HStack from "../components/HorizontalStack";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";
import Item from "../components/Item";
import ItemsGrid from "../components/ItemsGrid";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/HeroImage";
import ProductTable from "../components/ProductTable";
import Title from "../components/Title";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import HorizontalStack from "../components/HorizontalStack";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import { LocationMap } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";

export const config: TemplateConfig = {
  stream: {
    $id: "professionals",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["location"] },
    fields: [
      "name",
      "address",
      "c_advisorPhoto",
      "slug",
      "photoGallery",
      "mainPhone",
      "geocodedCoordinate",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Professional({ document }: TemplateProps) {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CenteredContainer>
        <HeaderSimple logo={document.logo.image.url} backgroundColor="#fff" />
        <HorizontalStack
          spacing="1"
          topMargin="0"
          bottomMargin="0"
          leftMargin="0"
          rightMargin="0"
          alignment="center"
          verticalOnMobile="false"
          backgroundColor="#1C2E5E"
          backgroundImage={document.photoGallery[0]?.image.url}
        >
          <ContactInfo
            name={document.name}
            // title={document.fins_jobTitle}
            addressLine1={document.address.line1}
            addressLine2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
            // email={document.emails[0]}
            phone={document.mainPhone}
            textColor="#fff"
          ></ContactInfo>
        </HorizontalStack>
        <VerticalStack
          alignment="left"
          rightMargin="0"
          leftMargin="0"
          bottomMargin="0"
          topMargin="0"
          spacing="0"
          backgroundColor="#F9FAFB"
        >
          <Title
            value={`About ${document.name}`}
            textSize="4xl"
            fontWeight="medium"
            topMargin="4"
            bottomMargin="4"
          />
        </VerticalStack>

        <Title
          value={`Let's Talk`}
          textSize="4xl"
          fontWeight="medium"
          topMargin="0"
          bottomMargin="4"
        />
        <GridContainer backgroundColor="#F9FAFB">
          <HorizontalStack
            spacing="1"
            topMargin="4"
            bottomMargin="10"
            leftMargin="2"
            rightMargin="2"
            alignment="center"
            verticalOnMobile="false"
          ></HorizontalStack>
        </GridContainer>
        <Footer logo={document.logo.image.url} />
      </CenteredContainer>
    </PageLayout>
  );
}
