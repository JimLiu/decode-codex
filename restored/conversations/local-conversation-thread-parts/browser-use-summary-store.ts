// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser-use summary external-store hook for the local conversation side panel.
import { useSyncExternalStore } from "react";
import {
  createBrowserUseSummaryRows,
  createBrowserUseSummarySyncKey,
  subscribeToBrowserUseSummaryChanges,
  type BrowserUseSummary,
  type BrowserUseSummaryPanelTabs,
} from "./browser-use-summary";

export type BrowserUseSummaryStoreOptions = BrowserUseSummaryPanelTabs & {
  blankTitle: string;
  conversationId: string | null;
  isMultiBrowserTabsGateEnabled: boolean;
};

export function useBrowserUseSummaries({
  blankTitle,
  bottomPanelTabs,
  conversationId,
  isMultiBrowserTabsGateEnabled,
  rightPanelTabs,
}: BrowserUseSummaryStoreOptions): BrowserUseSummary[] {
  const getBrowserUseSummarySyncKey = () =>
    conversationId == null
      ? ""
      : createBrowserUseSummarySyncKey({
          bottomPanelTabs,
          conversationId,
          isMultiBrowserTabsGateEnabled,
          rightPanelTabs,
        });
  const browserUseSummarySyncKey = useSyncExternalStore(
    subscribeToBrowserUseSummaryChanges,
    getBrowserUseSummarySyncKey,
    getBrowserUseSummarySyncKey,
  );

  return createBrowserUseSummaryRows({
    blankTitle,
    bottomPanelTabs,
    browserUseSummarySyncKey,
    conversationId,
    isMultiBrowserTabsGateEnabled,
    rightPanelTabs,
  });
}
