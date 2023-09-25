import { AnalyticsScreen } from "../../context/analytics";
import { Config, ConfigContext } from "../../hooks/useConfig";
import { IndependentProContext, TaxProsDevExtended } from "../../hooks/useIndependentPro";
import BackgroundBanner from "../indpro/BackgroundBanner";
import Footer from "../indpro/Footer";
import Header from "../indpro/Header";
import MainContent from "../indpro/MainContent";
import Sidebar from "../indpro/Sidebar";

interface Props {
  config: Config;
  pro: TaxProsDevExtended;
}

const IndependentProPage: React.FC<Props> = ({ config, pro }) => (
  <ConfigContext.Provider value={config}>
    <AnalyticsScreen
      scopeArea={"verified_pro_profile_pages"}
      screen={"pro profile pages"}
      objectDetail={pro.id}
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

export default IndependentProPage;
