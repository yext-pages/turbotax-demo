import {B2, B3} from "../atoms/Typography";
import {useEffect, useState} from "react";

const Footer: React.FC = () => {
  const [isInCalifornia, setIsInCalifornia] = useState(globalThis.document?.cookie.includes('AKES_GEO=US~CA'));

  useEffect(() => {
    // We won't know if the user is in CA when the page is statically rendered, so we'll check again after the page loads.
    setTimeout(() => {
      setIsInCalifornia(document.cookie.includes('AKES_GEO=US~CA'));
    }, 200);
  }, []);

  const showCookiePreference = () => {
    // @ts-ignore
    window.intuit_gdpr.showCookiePreference();
  }

  return <footer className={'w-full bg-pepper0'}>
    <FooterSection>
      <FooterLink href={'/sitemap'}><B2>Sitemap</B2></FooterLink>
    </FooterSection>
    <hr className={'border-pepper30'}/>
    <FooterSection>

      <div className={'flex flex-col pb-12 space-y-6'}>
        <div className={'flex flex-col s:flex-row  gap-4'}>
          <a href={"https://www.intuit.com/"} className={'s:w-[275px]'}>
            <img src={"https://digitalasset.intuit.com/IMAGE/A6BBzN1lV/IntuitLogo_SuperBlue-2022-08-102x30.svg"}
                 width={102} height={30} alt={"Intuit"}/>
          </a>

          <div className={'flex flex-wrap flex-row '}>
            <ProductLogo href={'https://turbotax.intuit.com'} name={'TurboTax'}
                         image={'https://digitalasset.intuit.com/IMAGE/A9yqxWvVJ/TT_Color.svg'}/>
            <ProductLogo href={'https://www.creditkarma.com/?source=intuit'} name={'Credit Karma'}
                         image={'https://digitalasset.intuit.com/IMAGE/A36wvFGOA/CK_Color.svg'}/>
            <ProductLogo href={'https://quickbooks.intuit.com/'} name={'QuickBooks'}
                         image={'https://digitalasset.intuit.com/IMAGE/A8nrdlHev/QB_Color.svg'}/>
            <ProductLogo href={'https://mailchimp.com/?utm_source=intuit.com&utm_medium=referral'} name={'Mailchimp'}
                         image={'https://digitalasset.intuit.com/IMAGE/A4zrQzkXj/Group-1.svg'}/>
          </div>
        </div>

        <div className={'flex flex-col s:flex-row gap-4'}>
          <ul className={'flex flex-wrap s:block s:columns-2 s:w-[275px]'}>
            <FooterListLink href={'https://www.intuit.com/company/'} text={'About Intuit'}/>
            <FooterListLink href={'https://www.intuit.com/careers/'} text={'Join Our Team'}/>
            <FooterListLink href={'https://www.intuit.com/company/press-room/'} text={'Press'}/>
            <FooterListLink href={'https://www.intuit.com/privacy/'} text={'Privacy'}/>
            <FooterListLink href={'https://security.intuit.com/'} text={'Security'}/>
            <FooterListLink href={'https://turbotax.intuit.com/corp/softwarelicense/'}
                            text={'Software and Licenses'}/>
            <FooterListLink href={'https://www.intuit.com/company/'} text={'Trademark Notices'}/>
            <FooterListLink href={'https://turbotax.intuit.com/corp/affiliates.jsp'} text={'Affiliates and Partners'}/>
            <FooterListLink href={'https://www.intuit.com/accessibility/'} text={'Accessibility'}/>
          </ul>

          <section className={'space-y-4 max-w-[500px]'}>
            <B3>
              ©1997-2023 Intuit, Inc. All rights reserved.
              <br/>
              Intuit, QuickBooks, QB, TurboTax, ProConnect, and Mint are registered trademarks
              of Intuit Inc. Terms and conditions, features, support, pricing, and service options
              subject to change without notice.
            </B3>
            <B3>
              Security Certification of the TurboTax Online application has been performed by
              C-Level Security.
            </B3>
            <B3>
              By accessing and using this page you agree to the <a
              href={'https://turbotax.intuit.com/corp/terms-of-use/'} target={'_blank'}
              className={'underline text-blueberry90'}>Terms of Use</a>.
            </B3>

            <section className={`flex flex-wrap gap-2`}>
              <B3 as={'a'} href={'https://security.intuit.com/index.php/intuit-cookie-policy/'}
                  className={`hover:underline text-blueberry90`}>About cookies</B3>

              <B3 className={'select-none'}>|</B3>

              <B3 as={'a'} className={'flex gap-1 hover:underline text-blueberry90'}
                  onClick={showCookiePreference} href={'#'}>{isInCalifornia ? 'Manage Cookies' : <>
                Your California Privacy Rights
                <img alt={'Privacy Setting'} className={'w-10'}
                     src={'https://lib.intuitcdn.net/img/marketingtechnology/icons/1.0/privacy-options.svg'}/>
              </>}</B3>
            </section>
          </section>

        </div>
      </div>

    </FooterSection>
  </footer>
};

interface FooterProps {
  href: string;
  openInNewWindow?: boolean;
}

const ProductLogo: React.FC<{ href: string, name: string, image: string }> = ({href, name, image}) => {
  return (
    <a href={href} target={'_blank'} className={'mr-4 s:mr-8'}>
      <img src={image} alt={name} height={19} className={'h-[31px] py-[6px]'}/>
    </a>
  )
}

const FooterListLink: React.FC<{ href: string, text: string }> = ({href, text}) => {
  return <li
    className={`mb-2 s:max-w-[130px] text-2 after:content-['|'] after:px-2 after:last:content-none after:last:px-0 s:after:content-none s:after:px-0`}>
    <FooterLink href={href}>{text}</FooterLink></li>
}

const FooterLink: React.FC<FooterProps> = ({children, href, openInNewWindow}) => {
  return <a href={href} target={openInNewWindow ? '_blank' : undefined} rel={'noopener'}
            className={'hover:underline hover:text-blueberry90'}>{children}</a>
}


const FooterSection: React.FC = ({children}) => {
  return (
    <section className={'max-w-[1200px] px-10 py-5 mx-auto'}>
      {children}
    </section>
  )
}

export default Footer;
