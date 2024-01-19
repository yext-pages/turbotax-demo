import { AnalyticsScreen } from "../../context/analytics";
import { Config, ConfigContext } from "../../hooks/useConfig";
import { IndependentProContext, TaxProsDevExtended } from "../../hooks/useIndependentPro";
import { useMemo } from "react";
import { cleanPseudonym } from "../../utils/pseudonym";
import Page from "../redesign/Page";

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
        objectDetail={cleanPseudonym(pro.c_pseudonymID || pro.id)}
        screenObjectStatus={isProSourced ? "pro_sourced" : "intuit_sourced"}
      >
        <IndependentProContext.Provider value={pro}>
          <Page />
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
