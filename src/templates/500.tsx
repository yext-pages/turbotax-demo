import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig
} from "@yext/pages";
import * as React from "react";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import PageLayout from "../components/PageLayout";
import CenteredContainer from "../components/CenteredContainer";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "500",
};


// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "500.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: 'TurboTax® 500 Error Page',
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout backgroundColor={'#FFF'}>
      <CenteredContainer>
        <img
          src={'https://lib.intuitcdn.net/img/nav/3.0/intuit-tt-verified-pro.png'}
          width={679}
          height={96}
          alt={'Intuit TurboTax Verified Pro'}
          className={'h-[40px] w-auto mt-5 mb-12 object-contain'}
        />

        <div className={'md:ml-8'}>
          <VerticalStack spacing={'4'} alignment={'left'} bottomMargin={'4'} topMargin={'4'} leftMargin={'4'}
                         rightMargin={'4'}>
            <h1 className={'text-gray01 text-xl  md:text-2xl font-medium'}>
              We're sorry, we are experiencing technical difficulties.
            </h1>
            <p className={'text-base md:text-lg text-gray01 font-medium'}>
              Our engineers are hard at work fixing the issue. We recommend waiting a few minutes and then trying again.
            </p>
            <p className={'text-base md:text-lg text-gray01 font-medium'}>
              You can also <a className={'text-blue02 hover:text-blue01 hover:underline'}
                         href={'https://turbotax.intuit.com/'}>return to the main page</a> or <a
              className={'text-blue02 hover:text-blue01 hover:underline'}
              href={'https://support.turbotax.intuit.com/contact/'}>contact support</a>.
            </p>
          </VerticalStack>
        </div>
      </CenteredContainer>
    </PageLayout>
  );
};

export default FourOhFour;