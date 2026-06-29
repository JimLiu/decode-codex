// Restored from ref/webview/assets/browser-sidebar-hidden-browser-use-webview-host-y6an5M4y.js
// Keeps hidden browser-use webviews mounted for tabs that are not visible in a panel.
import React, { useMemo, useRef, useSyncExternalStore } from "react";
import {
  _appScopeA as useAppScopeFamilyValue,
  useAppScopeValue,
} from "../boundaries/app-scope";
import {
  browserTabTypes,
  normalizeBrowserTabId,
} from "../boundaries/src-l0hb-mz-p";
import { browserUseEnabledForConversationSignal } from "../boundaries/thread-context-inputs.facade";
import {
  appShellStateExportAAlias as rightPanelExpandedSignal,
  appShellStateExportIAlias as rightPanelWidthMotionSignal,
  appShellStateExportOAlias as rightPanelOpenSignal,
  appShellStateExportRAlias as bottomPanelOpenSignal,
  appShellStateExportTAlias as bottomPanelHeightMotionSignal,
} from "../app-shell/app-shell-state";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type { BrowserPanelLocation } from "../runtime/persisted-signal";
import { getBrowserTabIdsForEnabledPanels } from "../app-shell/thread-browser-panel-tabs";
import { useWindowZoom } from "../utils/window-zoom-context";
import { browserSidebarManager } from "./sidebar-manager";
import type {
  BrowserSidebarWebviewElement,
  BrowserSidebarWebviewRef,
} from "./sidebar-manager/types";
import { BrowserSidebarWebview } from "./sidebar-webview";
type HiddenBrowserUseWebviewHostProps = {
  browserUseTabIdsKey: string;
  conversationId: string;
};
type HiddenBrowserUseWebviewProps = {
  browserTabId: string;
  conversationId: string;
};
type MotionValueLike = {
  get: () => number;
  on: (event: "change", listener: () => void) => () => void;
};
export function HiddenBrowserUseWebviewHost({
  browserUseTabIdsKey,
  conversationId,
}: HiddenBrowserUseWebviewHostProps): React.JSX.Element | null {
  const isBrowserUseEnabledForConversation = useAppScopeFamilyValue(
    browserUseEnabledForConversationSignal,
    conversationId,
  );
  const bottomActiveTab = useAppScopeValue(
    bottomAppShellTabController.activeTab$,
  ) as BrowserPanelLocation | null;
  const rightActiveTab = useAppScopeValue(
    rightAppShellTabController.activeTab$,
  ) as BrowserPanelLocation | null;
  const isBottomPanelOpen = Boolean(useAppScopeValue(bottomPanelOpenSignal));
  const bottomPanelHeight = useMotionValueSnapshot(
    useAppScopeValue(bottomPanelHeightMotionSignal) as MotionValueLike | null,
  );
  const isRightPanelExpanded = Boolean(
    useAppScopeValue(rightPanelExpandedSignal),
  );
  const isRightPanelOpen = Boolean(useAppScopeValue(rightPanelOpenSignal));
  const rightPanelWidth = useMotionValueSnapshot(
    useAppScopeValue(rightPanelWidthMotionSignal) as MotionValueLike | null,
  );
  const mountedBrowserTabIds = useMemo(
    () =>
      new Set(
        getBrowserTabIdsForEnabledPanels(
          conversationId,
          {
            bottom: bottomActiveTab,
            right: rightActiveTab,
          },
          {
            bottom: isBottomPanelOpen || bottomPanelHeight > 0,
            right:
              (isRightPanelExpanded && isRightPanelOpen) || rightPanelWidth > 0,
          },
        ),
      ),
    [
      bottomActiveTab,
      bottomPanelHeight,
      conversationId,
      isBottomPanelOpen,
      isRightPanelExpanded,
      isRightPanelOpen,
      rightActiveTab,
      rightPanelWidth,
    ],
  );
  if (!isBrowserUseEnabledForConversation && mountedBrowserTabIds.size > 0) {
    return null;
  }
  const hiddenBrowserUseTabIds = browserUseTabIdsKey
    .split("\0")
    .map(normalizeBrowserTabId)
    .filter((browserTabId) => !mountedBrowserTabIds.has(browserTabId));
  if (hiddenBrowserUseTabIds.length === 0) return null;
  return (
    <>
      {hiddenBrowserUseTabIds.map((browserTabId) => (
        <HiddenBrowserUseWebview
          key={browserTabId}
          browserTabId={browserTabId}
          conversationId={conversationId}
        />
      ))}
    </>
  );
}
function HiddenBrowserUseWebview({
  browserTabId,
  conversationId,
}: HiddenBrowserUseWebviewProps): React.JSX.Element | null {
  const windowZoom = useWindowZoom();
  const webviewRef = useRef<BrowserSidebarWebviewElement | null>(
    null,
  ) as BrowserSidebarWebviewRef;
  const browserSnapshot = useSyncExternalStore(
    browserSidebarManager.subscribe,
    () => browserSidebarManager.getSnapshot(conversationId, browserTabId),
    () => null,
  );
  if (
    browserSnapshot != null &&
    browserSnapshot.tabType !== browserTabTypes.WEB
  ) {
    return null;
  }
  const initialUrl =
    browserSnapshot == null || browserSnapshot.url.length === 0
      ? "about:blank"
      : browserSnapshot.url;
  return (
    <BrowserSidebarWebview
      bounds={null}
      browserTabId={browserTabId}
      conversationId={conversationId}
      hostKind="hidden-browser-use"
      initialUrl={initialUrl}
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
