import { createContext, useContext } from "react";

type Env = "local" | "qa" | "prod";
type Page = "independentPro" | "matchingPreview" | "faq" | "dynamicPreview";

export interface Config {
  env: Env;
  showWIP: boolean;
  showMatchingCTAs: boolean;
  showHeader: boolean;
  showFooter: boolean;
  loadTealium: boolean;
  tealiumURL: string;
  loadAnalytics: boolean;
  debugAnalytics?: boolean;
  analyticsConfig: {
    writeKey: string;
    env: string;
    src: string;
    loadAdobeVisitorAPI: boolean;
  };
}

const ConfigsByEnv: Record<Env, Config> = {
  local: {
    env: "local",
    showWIP: true,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: false,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/dev/utag.js",
    loadAnalytics: false,
    debugAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "e2e",
      src: "//uxfabric.intuitcdn.net/analytics/staging/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
  },
  qa: {
    env: "qa",
    showWIP: true,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: true,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/dev/utag.js",
    loadAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "e2e",
      src: "//uxfabric.intuitcdn.net/analytics/staging/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
  },
  prod: {
    env: "prod",
    showWIP: false,
    showMatchingCTAs: true,
    showHeader: true,
    showFooter: true,
    loadTealium: true,
    tealiumURL: "https://tags.tiqcdn.com/utag/intuit/cg-turbotax-biz/prod/utag.js",
    loadAnalytics: true,
    analyticsConfig: {
      writeKey: YEXT_PUBLIC_TRACKSTAR_WRITE_KEY,
      env: "prod",
      src: "//uxfabric.intuitcdn.net/analytics/prod/track-event-lib-init.min.js",
      loadAdobeVisitorAPI: false,
    },
  },
};

function getConfigForEnv(): Config {
  const env = YEXT_PUBLIC_ENVIRONMENT as Env;
  if (env in ConfigsByEnv) {
    return ConfigsByEnv[env];
  }

  console.error("Invalid environment, fallback to prod config", env);
  return ConfigsByEnv.prod;
}

export const createConfig = (page: Page = "independentPro"): Config => {
  const config: Config = JSON.parse(JSON.stringify(getConfigForEnv()));

  if (page === "matchingPreview" || page === "dynamicPreview") {
    config.showHeader = false;
    config.showMatchingCTAs = false;
  }

  return config;
};

export const ConfigContext = createContext<Config>(createConfig());

const useConfig = (): Config => {
  return useContext(ConfigContext);
};

export default useConfig;
