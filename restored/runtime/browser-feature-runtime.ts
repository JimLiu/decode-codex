// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Browser feature flags and route helpers used by local thread summaries.
import {
  G_ as multiBrowserTabsEnabledSignal,
  T_ as getRouteConversationIdRaw,
  uz as NEW_TAB_TITLE,
} from "../vendor/appg-thread-shared-runtime";
import {
  Es as browserSidebarEnabledSignal,
  Ts as initBrowserFeatureAvailabilitySignals,
} from "../vendor/pull-request-thread-actions-runtime";

export {
  browserSidebarEnabledSignal,
  multiBrowserTabsEnabledSignal,
  NEW_TAB_TITLE,
};

export function getRouteConversationId(routeScopeSnapshot: unknown): string | null {
  return getRouteConversationIdRaw(routeScopeSnapshot) ?? null;
}

export function initBrowserFeatureAvailabilityRuntime(): void {
  initBrowserFeatureAvailabilitySignals();
}
