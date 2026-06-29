// Restored from ref/webview/assets/browser-use-elevated-risk-learn-more-url-SLRkBp9s.js
import { CODEX_CHROME_EXTENSION_DOCS_URL } from "../utils/links-bd-mmkun-d";
import { getStatsigUrlConfig } from "../utils/statsig-url-config";
const BROWSER_USE_ELEVATED_RISK_LEARN_MORE_CONFIG_ID = "4168530037";
function getBrowserUseElevatedRiskLearnMoreUrl(config: { url?: unknown }) {
  return getStatsigUrlConfig(config, CODEX_CHROME_EXTENSION_DOCS_URL);
}
function initializeBrowserUseElevatedRiskLearnMoreUrlChunk() {
  return true;
}
export {
  getBrowserUseElevatedRiskLearnMoreUrl,
  initializeBrowserUseElevatedRiskLearnMoreUrlChunk,
  BROWSER_USE_ELEVATED_RISK_LEARN_MORE_CONFIG_ID,
};
