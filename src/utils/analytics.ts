import { Config } from "../hooks/useConfig";

interface AnalyticsProps {
  scopeArea: string;
  screen: string;
  options?: Record<string, any>;
  config: Config;
}

export function createAnalyticsScripts(props: AnalyticsProps): string {
  const config = props.config;
  let scripts = "";

  if (config.loadTealium) {
    scripts += `
      <script type="text/javascript">var utag_data = utag_data || {};</script>
      <script type="text/javascript">
          (function(a,b,c,d){
          a='${config.tealiumURL}';
          b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
          a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
          })();
      </script>`;
  }

  if (config.loadAnalytics) {
    scripts += `
      <script data-write-key="${config.analyticsConfig.writeKey}" data-env="${
      config.analyticsConfig.env
    }"
        src="${config.analyticsConfig.src}" 
        data-load-adobe-visitor-api="${
          config.analyticsConfig.loadAdobeVisitorAPI
        }" data-name="webAnalytics" type="text/javascript">
      </script>
      <script type="text/javascript">
        (() => {
          const constants = window.intuit.tracking.ecs.webAnalytics.constants;
          window.intuit.tracking.ecs.webAnalytics.initConfig = {
            org: constants.org.CG,
            purpose: constants.purpose.MKTG,
            scope: constants.scope.TURBOTAX,
          };
          
          window.intuit.tracking.ecs.webAnalytics.setApplicationTrackingContext('TIP Pro Profiles', APP_VERSION, '${
            props.scopeArea
          }', '${props.screen}', ${props.options ? JSON.stringify(props.options) : "undefined"})
        })();
      </script>`;
  } else if (config.debugAnalytics) {
    scripts += `<script>
    let __appTrackingContext = {};
    window.intuit = {
        tracking: {
            ecs: {
                webAnalytics: {
                    initConfig: {},
                    setApplicationTrackingContext: (appName, appVersion, scopeArea, screen, options) => {
                        __appTrackingContext = {
                            appName,
                            appVersion,
                            scopeArea,
                            screen,
                            options
                        };
                    },
                    trackPage: (data) => {
                        console.log('trackPage', {...__appTrackingContext, ...data});
                    },
                    track: (data, event) => {
                        console.log('track', {...__appTrackingContext, ...data, event})
                    }
                }
            }
        }
    }
</script>
    `;
  }

  return scripts;
}
