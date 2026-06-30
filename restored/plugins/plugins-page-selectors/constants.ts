// Restored from ref/webview/assets/plugins-page-selectors-C14o5Dw0.js
// Constants for plugin marketplace selector behavior.

import { BUNDLED_MARKETPLACE_NAME } from "../use-plugins/marketplace-constants";

export const AGENTS_PLUGIN_MARKETPLACE_SUFFIX =
  "/.agents/plugins/marketplace.json";
export const MARKETPLACE_MANIFEST_SUFFIX = "/marketplace.json";
export const BUNDLED_FEATURED_PLUGIN_IDS = [
  `computer-use@${BUNDLED_MARKETPLACE_NAME}`,
  `browser-use@${BUNDLED_MARKETPLACE_NAME}`,
  `chrome@${BUNDLED_MARKETPLACE_NAME}`,
  `chrome-internal@${BUNDLED_MARKETPLACE_NAME}`,
  "spreadsheets@openai-primary-runtime",
  "presentations@openai-primary-runtime",
] as const;
