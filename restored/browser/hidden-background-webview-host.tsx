// Restored from ref/webview/assets/browser-sidebar-hidden-background-webview-host-BWupD_uZ.js
// browser-sidebar-hidden-background-webview-host-Dh1K2IP3 chunk restored from the Codex webview bundle.
import React, { useMemo, useRef, useSyncExternalStore } from "react";
import { useAppScopeValue } from "../boundaries/app-scope";
import {
  appShellStateExportAAlias as rightPanelExpandedSignal,
  appShellStateExportIAlias as rightPanelWidthMotionSignal,
  appShellStateExportRAlias as bottomPanelOpenSignal,
  appShellStateExportTAlias as bottomPanelHeightMotionSignal,
} from "../app-shell/app-shell-state";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type { AppShellTabRecord } from "../app-shell/app-shell-tab-controller/types";
import {
  getBrowserTabConversationKey,
  type BrowserPanelLocation,
} from "../runtime/persisted-signal";
import { getBrowserTabIdsForEnabledPanels } from "../app-shell/thread-browser-panel-tabs";
import { useWindowZoom } from "../utils/window-zoom-context";
import {
  getAdoptedWebContentsId,
  getBrowserSidebarAdoptionLease,
  getBrowserSidebarInitialUrl,
} from "./browser-sidebar-open-source";
import { browserSidebarManager } from "./sidebar-manager";
import type {
  BrowserSidebarWebviewElement,
  BrowserSidebarWebviewRef,
} from "./sidebar-manager/types";
import { BrowserSidebarWebview } from "./sidebar-webview";
type HiddenBackgroundBrowserWebviewHostProps = {
  conversationId: string;
};
type MotionValueLike = {
  get: () => number;
  on: (event: "change", listener: () => void) => () => void;
};
type PendingHiddenWebviewBootstrap = {
  adoptedWebContentsId: number | null;
  adoptionLease: string | null;
  initialUrl: string;
};
export function HiddenBackgroundBrowserWebviewHost({
  conversationId,
}: HiddenBackgroundBrowserWebviewHostProps): React.JSX.Element | null {
  const bottomActiveTab = useAppScopeValue(
    bottomAppShellTabController.activeTab$,
  ) as BrowserPanelLocation | null;
  const rightActiveTab = useAppScopeValue(
    rightAppShellTabController.activeTab$,
  ) as BrowserPanelLocation | null;
  const bottomTabs = useAppScopeValue(
    bottomAppShellTabController.tabs$,
  ) as AppShellTabRecord[];
  const rightTabs = useAppScopeValue(
    rightAppShellTabController.tabs$,
  ) as AppShellTabRecord[];
  const isBottomPanelOpen = Boolean(useAppScopeValue(bottomPanelOpenSignal));
  const bottomPanelMotionValue = useAppScopeValue(
    bottomPanelHeightMotionSignal,
  ) as MotionValueLike | null;
  const bottomPanelHeight = useMotionValueSnapshot(bottomPanelMotionValue);
  const isRightPanelExpanded = Boolean(
    useAppScopeValue(rightPanelExpandedSignal),
  );
  const rightPanelMotionValue = useAppScopeValue(
    rightPanelWidthMotionSignal,
  ) as MotionValueLike | null;
  const rightPanelWidth = useMotionValueSnapshot(rightPanelMotionValue);
  const mountedBrowserTabIds = getBrowserTabIdsForEnabledPanels(
    conversationId,
    {
      bottom: bottomActiveTab,
      right: rightActiveTab,
    },
    {
      bottom: isBottomPanelOpen || bottomPanelHeight > 0,
      right: isRightPanelExpanded || rightPanelWidth > 0,
    },
  );
  useSyncExternalStore(
    browserSidebarManager.subscribe,
    () => browserSidebarManager.getBrowserUseBrowserTabIdsKey(conversationId),
    () => "",
  );
  const hiddenBrowserTabIds = useMemo(
    () =>
      getHiddenBackgroundBrowserTabIds({
        conversationId,
        mountedBrowserTabIds,
        panelTabs: [...rightTabs, ...bottomTabs],
      }),
    [bottomTabs, conversationId, mountedBrowserTabIds, rightTabs],
  );
  if (hiddenBrowserTabIds.length === 0) return null;
  return (
    <>
      {hiddenBrowserTabIds.map((browserTabId) => (
        <HiddenBackgroundBrowserWebview
          key={browserTabId}
          browserTabId={browserTabId}
          conversationId={conversationId}
        />
      ))}
    </>
  );
}
function HiddenBackgroundBrowserWebview({
  browserTabId,
  conversationId,
}: {
  browserTabId: string;
  conversationId: string;
}): React.JSX.Element | null {
  const windowZoom = useWindowZoom();
  const webviewRef = useRef<BrowserSidebarWebviewElement | null>(
    null,
  ) as BrowserSidebarWebviewRef;
  const pendingBootstrap = getPendingHiddenWebviewBootstrap(
    conversationId,
    browserTabId,
  );
  if (
    pendingBootstrap == null ||
    !canBootstrapHiddenBackgroundWebview(conversationId, browserTabId)
  ) {
    return null;
  }
  return (
    <BrowserSidebarWebview
      adoptionLease={pendingBootstrap.adoptionLease}
      adoptedWebContentsId={pendingBootstrap.adoptedWebContentsId}
      bounds={null}
      browserTabId={browserTabId}
      conversationId={conversationId}
      initialUrl={pendingBootstrap.initialUrl}
      isVisible={false}
      scale={1}
      shouldBootstrapWhenHidden={true}
      shouldPaint={false}
      webviewRef={webviewRef}
      windowZoom={windowZoom}
    />
  );
}
function useMotionValueSnapshot(motionValue: MotionValueLike | null): number {
  return useSyncExternalStore(
    (listener) => motionValue?.on("change", listener) ?? (() => undefined),
    () => motionValue?.get() ?? 0,
    () => 0,
  );
}
function getHiddenBackgroundBrowserTabIds({
  conversationId,
  mountedBrowserTabIds,
  panelTabs,
}: {
  conversationId: string;
  mountedBrowserTabIds: string[];
  panelTabs: AppShellTabRecord[];
}): string[] {
  const hiddenBrowserTabIds = new Set<string>();
  for (const panelTab of panelTabs) {
    const browserTabId =
      getBrowserTabConversationKey(
        panelTab as BrowserPanelLocation,
        conversationId,
      ) ?? null;
    if (
      browserTabId == null ||
      browserSidebarManager.isBrowserUseTab(conversationId, browserTabId) ||
      mountedBrowserTabIds.includes(browserTabId)
    ) {
      continue;
    }
    if (canBootstrapHiddenBackgroundWebview(conversationId, browserTabId)) {
      hiddenBrowserTabIds.add(browserTabId);
    }
  }
  return Array.from(hiddenBrowserTabIds);
}
function canBootstrapHiddenBackgroundWebview(
  conversationId: string,
  browserTabId: string,
): boolean {
  return browserSidebarManager.isBrowserUseTab(conversationId, browserTabId)
    ? false
    : getPendingHiddenWebviewBootstrap(conversationId, browserTabId) != null;
}
function getPendingHiddenWebviewBootstrap(
  conversationId: string,
  browserTabId: string,
): PendingHiddenWebviewBootstrap | null {
  const initialUrl = getBrowserSidebarInitialUrl(conversationId, browserTabId);
  const adoptionLease = getBrowserSidebarAdoptionLease(
    conversationId,
    browserTabId,
  );
  const adoptedWebContentsId = getAdoptedWebContentsId(
    conversationId,
    browserTabId,
  );
  return initialUrl == null &&
    (adoptionLease == null || adoptedWebContentsId == null)
    ? null
    : {
        adoptedWebContentsId:
          typeof adoptedWebContentsId === "number"
            ? adoptedWebContentsId
            : null,
        adoptionLease: typeof adoptionLease === "string" ? adoptionLease : null,
        initialUrl: initialUrl ?? "about:blank",
      };
}
