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
import Specialities from "../components/Specialties";
import Articles from "../components/Articles";

export const config: TemplateConfig = {
  stream: {
    $id: "tax-pros",
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
      "c_advisorBio",
      "hours",
      "specialities",
      "c_featuredArticles.name",
      "c_featuredArticles.shortDescription",
      "c_featuredArticles.c_coverPhoto",
      "c_metaDescription",
      "c_metaKeywords",
    ],
  },
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const tags = [];

  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    // tags: [
    //   {
    //     type: "meta",
    //     attributes: {
    //       name: "description",
    //       content: document?.c_metaDescription ?? "",
    //     },
    //   },
    //   {
    //     type: "meta",
    //     attributes: {
    //       name: "keywords",
    //       content: document?.c_metaKeywords ?? "",
    //     },
    //   },
    // ],
  };
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Professional({ document }: TemplateProps) {
  console.log(document);
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
              email={document.emails?.[0]}
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
              text={document.c_advisorBio}
              className="whitespace-pre-line"
            />
          </ScrollableSection>
          <ScrollableSection title="Specialities">
            <Specialities specialties={document.specialities} />
          </ScrollableSection>
          {document.c_featuredArticles?.length > 0 && (
            <ScrollableSection title="Featured Articles">
              <Articles articles={document.c_featuredArticles} />
            </ScrollableSection>
          )}
        </ScrollableContainer>
      </CenteredContainer>
    </PageLayout>
  );
}
