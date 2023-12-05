import { AnalyticsScreen } from "../../context/analytics";
import { Config, ConfigContext } from "../../hooks/useConfig";
import { IndependentProContext, TaxProsDevExtended } from "../../hooks/useIndependentPro";
import BackgroundBanner from "../indpro/BackgroundBanner";
import Footer from "../indpro/Footer";
import Header from "../indpro/Header";
import MainContent from "../indpro/MainContent";
import Sidebar from "../indpro/Sidebar";
import { useMemo } from "react";

interface Props {
  config: Config;
  pro: TaxProsDevExtended;
}

const IndependentProPage: React.FC<Props> = ({ config, pro }) => {
  const isProSourced = useMemo(isProReferred, [globalThis.window]);

  return (
    <ConfigContext.Provider value={config}>
      <AnalyticsScreen
        scopeArea={"tip_profile_landing_pages"}
        screen={"tip_pro_profile_modal_landing_page"}
        objectDetail={pro.id}
        screenObjectStatus={isProSourced ? "pro_sourced" : "intuit_sourced"}
      >
        <IndependentProContext.Provider value={pro}>
          <div className={"text-gray01"}>
            {config.showHeader && <Header />}
            <BackgroundBanner />
            <main className="flex flex-col s:flex-row gap-12 px-5">
              <Sidebar />
              <MainContent />
            </main>
            {config.showFooter && <Footer />}
          </div>
        </IndependentProContext.Provider>
      </AnalyticsScreen>
    </ConfigContext.Provider>
  );
};

function isProReferred(): boolean {
  if (!globalThis.window) return false;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("cid") === "pr";
}

export default IndependentProPage;
