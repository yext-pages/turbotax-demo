import type {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import CenteredContainer from "../components/CenteredContainer";
import { B2, H6 } from "../components/atoms/Typography";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "404",
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "TurboTax® 404 Error Page",
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout>
      <CenteredContainer>
        <img
          src={"https://lib.intuitcdn.net/img/nav/3.0/intuit-tt-verified-pro.png"}
          width={679}
          height={96}
          alt={"Intuit TurboTax Verified Pro"}
          className={"h-10 w-auto mt-4 mb-8 mx-4 object-contain"}
        />

        <div className={"flex flex-col gap-4 m-4"}>
          <H6>We're sorry, we can't find the page you requested.</H6>
          <B2>You may have incorrectly type the address (URL) or clicked on an outdated link.</B2>
          <B2>
            You can{" "}
            <a className={"text-blueberry80 underline"} href={"https://turbotax.intuit.com/"}>
              return to the main page
            </a>{" "}
            or{" "}
            <a
              className={"text-blueberry80 underline"}
              href={"https://support.turbotax.intuit.com/contact/"}
            >
              contact support
            </a>
            .
          </B2>
        </div>
      </CenteredContainer>
    </PageLayout>
  );
};

export default FourOhFour;
