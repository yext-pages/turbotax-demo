import { createContext, useContext, useEffect, useMemo } from "react";

type AnalyticsScreenType = {
  scope_area: string;
  screen: string;
  object_detail?: string;
  screen_object_status?: string;
};

export const AnalyticsScreenContext = createContext({} as AnalyticsScreenType);

export const useAnalyticsScreen = (): AnalyticsScreenType => useContext(AnalyticsScreenContext);

interface TrackProps {
  action: string;
  object: string;
  uiAction: TrackingConstants["uiAction"][keyof TrackingConstants["uiAction"]];
  uiObject: string;
  uiObjectDetail: string;
  pageExperience?: string;
  customProperties?: Record<string, any>;
  event?: React.MouseEvent<any, MouseEvent>;
}

export const useAnalytics = () => {
  const analyticsScreen = useAnalyticsScreen();

  return useMemo(() => {
    const track = (props: TrackProps) => {
      if (YEXT_PUBLIC_ENVIRONMENT !== "prod") console.log("TRACKING", props);
      if (!window.intuit?.tracking?.ecs?.webAnalytics) return;

      let clickEvent = undefined;
      if (props.event) {
        clickEvent = {
          targetElement: props.event.currentTarget,
          clickEvent: props.event.nativeEvent,
        };
      }

      window.intuit.tracking.ecs.webAnalytics.track(
        {
          ...analyticsScreen,
          action: props.action,
          object: props.object,
          ui_action: props.uiAction,
          ui_object: props.uiObject,
          ui_object_detail: props.uiObjectDetail,
          custom_properties: props.customProperties,
          page_experience: props.pageExperience,
        },
        clickEvent
      );
    };

    return { track };
  }, [analyticsScreen]);
};

interface AnalyticsScreenProps {
  scopeArea: string;
  screen: string;
  objectDetail?: string;
  screenObjectStatus?: string;
  customProperties?: Record<string, any>;
}

export const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({
  screen,
  scopeArea,
  objectDetail,
  screenObjectStatus,
  children,
  customProperties,
}) => {
  const analyticsScreen: AnalyticsScreenType = useMemo(() => {
    return {
      scope_area: scopeArea,
      screen,
      object_detail: objectDetail,
      screen_object_status: screenObjectStatus,
    };
  }, [scopeArea, screen, objectDetail, screenObjectStatus]);

  useEffect(() => {
    window.intuit?.tracking?.ecs?.webAnalytics?.trackPage?.({
      ...analyticsScreen,
      action: "viewed",
      object: "screen",
      ui_action: "viewed",
      ui_object: "screen",
      custom_properties: customProperties,
    });

    // purposefully exclude customProperties from the dependency array, since we only want to track the initial page view.
    // plus, someone might forget to memo the customProperties, and we don't want to track every time they change.
  }, [analyticsScreen]);

  useEffect(() => {
    if (YEXT_PUBLIC_ENVIRONMENT === "prod") return;

    const checker = () => {
      const tags = ["a", "button"];
      for (let tag of tags) {
        const elements = document.body.getElementsByTagName(tag);
        for (let element of elements) {
          if (!element.hasAttribute("data-action")) {
            console.warn("Element probably not tracked", element);
          }
        }
      }
    };

    const observer = new MutationObserver(() => checker());
    observer.observe(document.body, { childList: true, subtree: true });
    checker();

    return () => observer.disconnect();
  }, []);

  return <AnalyticsScreenContext.Provider children={children} value={analyticsScreen} />;
};
