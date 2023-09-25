import { useAnalyticsScreen } from "../context/analytics";
import { useMemo } from "react";

interface AnalyticsObject {
  // trackPageView: (args: { scopeArea: string, screen: string, custom?: Record<string, any> }) => void;
  // trackClick(event: React.MouseEvent<HTMLElement, MouseEvent>)
}

// const useAnalytics = (): AnalyticsObject => {
//   const screen = useAnalyticsScreen();
//
//   // return useMemo(() => {
//   //
//   // }, [screen]);
//
// };
//
// export default useAnalytics();
