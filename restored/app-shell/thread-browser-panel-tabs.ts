// Restored from ref/webview/assets/thread-browser-panel-tabs-BBhz5qN_.js
// Alias-compatible with ref/webview/assets/thread-browser-panel-tabs-B0_gHvSH.js and thread-browser-panel-tabs-DuBf4ycc.js.
// Browser panel tab selection, transfer, and focus helpers.
import {
  getBrowserTabConversationKey,
  type BrowserPanelLocation,
} from "../runtime/persisted-signal";
import { Dr as browserUseMultipleTabsSignal } from "../boundaries/thread-context-inputs.facade";
import { getBrowserSidebarTabIds } from "../browser/browser-sidebar-open-source";
import { browserSidebarManager } from "../browser/sidebar-manager";
import {
  getThreadPanelController,
  THREAD_PANEL_IDS,
} from "./thread-panel-state";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";
type ThreadPanelId = "bottom" | "right";
type PanelPair<TValue> = {
  bottom: TValue;
  right: TValue;
};
type BrowserPanelTabMatch = {
  browserTabId: string;
  controller: AppShellTabController;
  tab: AppShellTabRecord;
  target: ThreadPanelId;
};
function getBrowserPanelTabs(
  store: AppShellStore,
  fallbackBrowserTabId?: string | null,
): BrowserPanelTabMatch[] {
  return THREAD_PANEL_IDS.flatMap((panelId) => {
    const controller = getThreadPanelController(panelId);
    return store
      .get<AppShellTabRecord[]>(controller.tabs$)
      .flatMap((tab): BrowserPanelTabMatch[] => {
        const browserTabId = getBrowserTabConversationKey(
          tab as BrowserPanelLocation,
          fallbackBrowserTabId,
        );
        return browserTabId == null
          ? []
          : [
              {
                browserTabId,
                controller,
                tab,
                target: panelId,
              },
            ];
      });
  });
}
function findBrowserPanelTab(
  store: AppShellStore,
  fallbackBrowserTabId: string | null | undefined,
  browserTabId: string,
  preferredTarget?: ThreadPanelId | null,
): BrowserPanelTabMatch | null {
  const matches = getBrowserPanelTabs(store, fallbackBrowserTabId);
  if (preferredTarget != null) {
    const targetMatch = matches.find(
      (match) =>
        match.browserTabId === browserTabId && match.target === preferredTarget,
    );
    if (targetMatch != null) return targetMatch;
  }
  return matches.find((match) => match.browserTabId === browserTabId) ?? null;
}
function getPreferredBrowserTabId(
  fallbackBrowserTabId: string | null | undefined,
  focusArea: string | null | undefined,
  panelLocations: PanelPair<BrowserPanelLocation | null>,
  enabledTargets?: PanelPair<boolean> | null,
): string | null {
  const selectedPanel =
    (enabledTargets == null
      ? null
      : choosePanelForEnabledBrowserTabTargets(
          fallbackBrowserTabId,
          focusArea,
          panelLocations,
          enabledTargets,
        )) ??
    choosePanelForBrowserTabTargets(
      fallbackBrowserTabId,
      focusArea,
      panelLocations,
    );
  return selectedPanel == null
    ? null
    : getBrowserTabConversationKey(
        panelLocations[selectedPanel],
        fallbackBrowserTabId,
      );
}
function choosePanelForBrowserTabTargets(
  fallbackBrowserTabId: string | null | undefined,
  focusArea: string | null | undefined,
  panelLocations: PanelPair<BrowserPanelLocation | null>,
): ThreadPanelId | null {
  const browserTabIds = {
    bottom: getBrowserTabConversationKey(
      panelLocations.bottom,
      fallbackBrowserTabId,
    ),
    right: getBrowserTabConversationKey(
      panelLocations.right,
      fallbackBrowserTabId,
    ),
  };
  return focusArea === "bottom-panel" && browserTabIds.bottom != null
    ? "bottom"
    : (focusArea === "right-panel" && browserTabIds.right != null) ||
        browserTabIds.right != null
      ? "right"
      : browserTabIds.bottom == null
        ? null
        : "bottom";
}
function choosePanelForEnabledBrowserTabTargets(
  fallbackBrowserTabId: string | null | undefined,
  focusArea: string | null | undefined,
  panelLocations: PanelPair<BrowserPanelLocation | null>,
  enabledTargets: PanelPair<boolean>,
): ThreadPanelId | null {
  return choosePanelForBrowserTabTargets(fallbackBrowserTabId, focusArea, {
    bottom: enabledTargets.bottom ? panelLocations.bottom : null,
    right: enabledTargets.right ? panelLocations.right : null,
  });
}
function choosePanelFromFocusAndAvailability(
  focusArea: string | null | undefined,
  availability: PanelPair<boolean>,
): ThreadPanelId | null {
  return focusArea === "bottom-panel" && availability.bottom
    ? "bottom"
    : (focusArea === "right-panel" && availability.right) || availability.right
      ? "right"
      : availability.bottom
        ? "bottom"
        : null;
}
function getBrowserTabIdsForEnabledPanels(
  fallbackBrowserTabId: string | null | undefined,
  panelLocations: PanelPair<BrowserPanelLocation | null>,
  enabledTargets: PanelPair<boolean>,
): string[] {
  const browserTabIds: string[] = [];
  for (const panelId of THREAD_PANEL_IDS) {
    if (!enabledTargets[panelId]) continue;
    const browserTabId = getBrowserTabConversationKey(
      panelLocations[panelId],
      fallbackBrowserTabId,
    );
    if (browserTabId != null) browserTabIds.push(browserTabId);
  }
  return browserTabIds;
}
function getConversationBrowserTabIdsForTransfer(
  store: AppShellStore,
  conversationId: string,
): string[] {
  const browserTabIds: string[] = [];
  const seenBrowserTabIds = new Set<string>();
  const appendBrowserTabId = (browserTabId: unknown) => {
    if (
      typeof browserTabId !== "string" ||
      seenBrowserTabIds.has(browserTabId)
    ) {
      return;
    }
    seenBrowserTabIds.add(browserTabId);
    browserTabIds.push(browserTabId);
  };
  for (const { browserTabId } of getBrowserPanelTabs(store, conversationId)) {
    appendBrowserTabId(browserTabId);
  }
  for (const browserTabId of getBrowserSidebarTabIds(conversationId)) {
    appendBrowserTabId(browserTabId);
  }
  const managerBrowserTabIds = shouldTransferAllBrowserUseTabs(store)
    ? browserSidebarManager.getConversationBrowserTabIds(conversationId)
    : [browserSidebarManager.getBrowserUseSummaryBrowserTabId(conversationId)];
  for (const browserTabId of managerBrowserTabIds) {
    if (
      browserTabId != null &&
      browserSidebarManager.isBrowserUseTab(conversationId, browserTabId)
    ) {
      appendBrowserTabId(browserTabId);
    }
  }
  return browserTabIds;
}
function getLastFocusedBrowserTabId(
  store: AppShellStore,
  conversationId: string,
): string | null {
  const browserTabIds = getConversationBrowserTabIdsForTransfer(
    store,
    conversationId,
  );
  for (const panelId of THREAD_PANEL_IDS) {
    const controller = getThreadPanelController(panelId);
    const browserTabId = getBrowserTabConversationKey(
      store.get<BrowserPanelLocation>(controller.activeTab$),
      conversationId,
    );
    if (browserTabId != null && browserTabIds.includes(browserTabId)) {
      return browserTabId;
    }
  }
  return browserTabIds.at(-1) ?? null;
}
function shouldTransferAllBrowserUseTabs(store: AppShellStore): boolean {
  try {
    return store.get<boolean>(browserUseMultipleTabsSignal) === true;
  } catch {
    return false;
  }
}
export {
  choosePanelFromFocusAndAvailability,
  getBrowserTabIdsForEnabledPanels,
  getConversationBrowserTabIdsForTransfer,
  getLastFocusedBrowserTabId,
  getBrowserPanelTabs,
  choosePanelForBrowserTabTargets,
  choosePanelForEnabledBrowserTabTargets,
  getPreferredBrowserTabId,
  findBrowserPanelTab,
};
