// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Reads the Statsig feature gate that controls browser-conversation behaviour
// (e.g. page persistence and browser-use tab handling) from the app scope.
import { getFeatureGateValue } from "../boundaries/onboarding-commons-externals.facade";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

export const BROWSER_CONVERSATION_FEATURE_GATE_ID = "40604217";

export function initBrowserConversationFeatureGateChunk(): void {}

export function isBrowserConversationFeatureGateEnabled(
  scope: AppScope,
): boolean {
  return getFeatureGateValue(scope, BROWSER_CONVERSATION_FEATURE_GATE_ID);
}
