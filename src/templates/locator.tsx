import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages/*";
import PageLayout from "../components/PageLayout";
import Locator from "../components/Locator";
import HeaderSimple from "../components/HeaderSimple";
import "../index.css";

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Locator",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "index.html";
};

export default function LocationSearch() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <HeaderSimple
        logo={{
          image: {
            url: "https://a.mktgcdn.com/p/RcJwi7NhLFjt-O-HZedHKtR7Fo3XYyR0ffsIj4LEMGc/600x600.png",
            height: 600,
            width: 600,
          },
        }}
      />
      <Locator />
    </PageLayout>
  );
}
