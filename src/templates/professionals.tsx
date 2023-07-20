import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import HeaderSimple from "../components/HeaderSimple";
import PageLayout from "../components/PageLayout";
import "../index.css";
import HorizontalStack from "../components/HorizontalStack";
import ContactInfo from "../components/ContactInfo";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import { ScrollableContainer } from "../components/ScrollingContainer";
import { ScrollableSection } from "../components/ScrollableSection";
import BodyText from "../components/atoms/BodyText";

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
      "geocodedCoordinate",
      "c_backgroundImage",
      "keywords",
      "services",
      "c_yearsOfExperience",
      "c_role",
      "mainPhone",
      "emails",
      "logo",
    ],
  },
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const pro = document;

  return {
    title: pro.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Professional({ document }: TemplateProps) {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <CenteredContainer>
        <HeaderSimple logo={document.logo} backgroundColor="#fff" />
        <Hero>
          <HorizontalStack
            spacing="10"
            topMargin="0"
            bottomMargin="0"
            leftMargin="0"
            rightMargin="0"
            alignment="center"
            verticalOnMobile="false"
          >
            <Avatar image={document.c_advisorPhoto} />
            <ContactInfo
              name={document.name}
              title={document.c_role}
              address={document.address}
              email={document.emails[0]}
              phone={document.mainPhone}
              textColor="white"
            ></ContactInfo>
          </HorizontalStack>
        </Hero>
        <ScrollableContainer>
          <ScrollableSection
            title="About"
            outerContainerClassname="scroll-mt-24"
          >
            <BodyText
              text={document.c_description}
              className="whitespace-pre-line"
            />
          </ScrollableSection>
        </ScrollableContainer>
      </CenteredContainer>
    </PageLayout>
  );
}
