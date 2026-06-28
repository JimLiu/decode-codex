// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser-use summary model glue for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";
import {
  getRouteConversationId,
  initBrowserFeatureAvailabilityRuntime,
  multiBrowserTabsEnabledSignal,
  NEW_TAB_TITLE,
} from "../../runtime/browser-feature-runtime";
import { useSignalValue } from "../../runtime/app-scope-hooks";
import {
  bottomPanelTabsStore,
  rightPanelTabsStore,
} from "../../app-shell/thread-panel-tabs-store";
import type { BrowserUseSummary } from "./browser-use-summary";
import { useBrowserUseSummaries } from "./browser-use-summary-store";

type LocalConversationRouteScopeSnapshot = unknown;

export function useThreadSummaryBrowserUseSummaries(
  routeScopeSnapshot: LocalConversationRouteScopeSnapshot,
): BrowserUseSummary[] {
  let conversationId = getRouteConversationId(routeScopeSnapshot),
    isMultiBrowserTabsGateEnabled = useSignalValue(
      multiBrowserTabsEnabledSignal,
    ),
    rightPanelTabs = useSignalValue(rightPanelTabsStore.tabs$),
    bottomPanelTabs = useSignalValue(bottomPanelTabsStore.tabs$);

  return useBrowserUseSummaries({
    blankTitle: NEW_TAB_TITLE,
    bottomPanelTabs,
    conversationId,
    isMultiBrowserTabsGateEnabled,
    rightPanelTabs,
  });
}

export const initThreadSummaryBrowserUseModelChunk = once(() => {
  initBrowserFeatureAvailabilityRuntime();
});
