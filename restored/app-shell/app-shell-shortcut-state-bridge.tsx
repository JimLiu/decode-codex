// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Side-effect-only bridge that mirrors app-shell shortcut-relevant state (focus
// area, browser zoom capability, closable tabs, image preview) to the host
// process, and handles host-driven image-zoom and close-active-tab commands.
import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "./app-shell-tab-controller";
import {
  activeAppShellFocusAreaSignal,
  bottomPanelOpenSignal,
  rightPanelOpenSignal,
} from "./app-shell-state";
import {
  appStoreScope,
  applyImagePreviewZoomCommand,
  browserTabSnapshotStore,
  browserTabTypes,
  getActiveConversationId,
  hostBridge,
  imagePreviewOpenStore,
  resolveBrowserTabId,
  terminalFocusedSignal,
  useAppScope,
  useHostMessage,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";
import type {
  AppShellStore,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

interface BrowserTabDescriptor {
  browserTabId: string;
  conversationId: string;
}

function resolveBrowserTabDescriptor(
  activeTab: AppShellTabRecord | null,
  conversationId: string | null,
): BrowserTabDescriptor | null {
  const browserTabId = resolveBrowserTabId(activeTab, conversationId);
  return browserTabId == null || conversationId == null
    ? null
    : { browserTabId, conversationId };
}

function dispatchResetShortcutState(): void {
  hostBridge.dispatchMessage("app-shell-shortcut-state-changed", {
    bottomPanelBrowserCanZoom: false,
    bottomPanelBrowserConversationId: null,
    bottomPanelBrowserTabId: null,
    canAcceptAppshotShortcut: false,
    bottomPanelCanCloseActiveTab: false,
    focusArea: "main",
    imagePreviewOpen: false,
    terminalFocused: false,
    rightPanelBrowserCanZoom: false,
    rightPanelBrowserConversationId: null,
    rightPanelBrowserTabId: null,
    rightPanelCanCloseActiveTab: false,
  });
}

export function AppShellShortcutStateBridge(): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const bottomActiveTab = useSignalValue<AppShellTabRecord | null>(
    bottomAppShellTabController.activeTab$,
  );
  const isBottomPanelOpen = useSignalValue<boolean>(bottomPanelOpenSignal);
  const focusArea = useSignalValue<string>(activeAppShellFocusAreaSignal);
  const isTerminalFocused = useSignalValue<boolean>(terminalFocusedSignal);
  const rightActiveTab = useSignalValue<AppShellTabRecord | null>(
    rightAppShellTabController.activeTab$,
  );
  const isImagePreviewOpen = useSyncExternalStore(
    imagePreviewOpenStore.subscribe,
    imagePreviewOpenStore.getSnapshot,
    imagePreviewOpenStore.getSnapshot,
  );
  const isRightPanelOpen = useSignalValue<boolean>(rightPanelOpenSignal);

  const conversationId = getActiveConversationId(store);
  const canAcceptAppshotShortcut = conversationId != null;
  const bottomBrowserTab = resolveBrowserTabDescriptor(
    bottomActiveTab,
    conversationId,
  );
  const rightBrowserTab = resolveBrowserTabDescriptor(
    rightActiveTab,
    conversationId,
  );

  const rightPanelCanCloseActiveTab =
    isRightPanelOpen &&
    ((rightActiveTab?.isClosable ?? false) || rightBrowserTab != null);
  const bottomPanelCanCloseActiveTab =
    isBottomPanelOpen &&
    ((bottomActiveTab?.isClosable ?? false) || bottomBrowserTab != null);

  const getBottomBrowserSnapshot = () =>
    bottomBrowserTab == null
      ? null
      : browserTabSnapshotStore.getSnapshot(
          bottomBrowserTab.conversationId,
          bottomBrowserTab.browserTabId,
        );
  const getRightBrowserSnapshot = () =>
    rightBrowserTab == null
      ? null
      : browserTabSnapshotStore.getSnapshot(
          rightBrowserTab.conversationId,
          rightBrowserTab.browserTabId,
        );
  const bottomBrowserSnapshot = useSyncExternalStore(
    browserTabSnapshotStore.subscribe,
    getBottomBrowserSnapshot,
    getBottomBrowserSnapshot,
  );
  const rightBrowserSnapshot = useSyncExternalStore(
    browserTabSnapshotStore.subscribe,
    getRightBrowserSnapshot,
    getRightBrowserSnapshot,
  );
  const bottomPanelBrowserCanZoom =
    bottomBrowserSnapshot?.tabType === browserTabTypes.WEB;
  const rightPanelBrowserCanZoom =
    rightBrowserSnapshot?.tabType === browserTabTypes.WEB;
  const bottomPanelBrowserConversationId =
    bottomBrowserTab?.conversationId ?? null;
  const bottomPanelBrowserTabId = bottomBrowserTab?.browserTabId ?? null;
  const rightPanelBrowserConversationId =
    rightBrowserTab?.conversationId ?? null;
  const rightPanelBrowserTabId = rightBrowserTab?.browserTabId ?? null;

  useLayoutEffect(() => {
    hostBridge.dispatchMessage("app-shell-shortcut-state-changed", {
      bottomPanelBrowserCanZoom,
      bottomPanelBrowserConversationId,
      bottomPanelBrowserTabId,
      canAcceptAppshotShortcut,
      bottomPanelCanCloseActiveTab,
      focusArea,
      imagePreviewOpen: isImagePreviewOpen,
      terminalFocused: isTerminalFocused,
      rightPanelBrowserCanZoom,
      rightPanelBrowserConversationId,
      rightPanelBrowserTabId,
      rightPanelCanCloseActiveTab,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    bottomPanelBrowserCanZoom,
    bottomPanelBrowserConversationId,
    bottomPanelBrowserTabId,
    canAcceptAppshotShortcut,
    bottomPanelCanCloseActiveTab,
    focusArea,
    isImagePreviewOpen,
    rightPanelBrowserCanZoom,
    rightPanelBrowserConversationId,
    rightPanelBrowserTabId,
    isTerminalFocused,
    rightPanelCanCloseActiveTab,
  ]);

  useEffect(() => dispatchResetShortcutState, []);

  useHostMessage(
    "image-preview-zoom-command",
    ({ command }: { command: string }) => {
      applyImagePreviewZoomCommand(command);
    },
    [],
  );

  useHostMessage(
    "close-active-app-shell-tab",
    ({ panelId }: { panelId: "bottom" | "right" }) => {
      switch (panelId) {
        case "bottom":
          if (bottomAppShellTabController.closeActiveTab(store)) return;
          if (bottomBrowserTab != null && bottomActiveTab != null) {
            bottomAppShellTabController.closeTab(store, bottomActiveTab.tabId);
          }
          return;
        case "right":
          if (rightAppShellTabController.closeActiveTab(store)) return;
          if (rightBrowserTab != null && rightActiveTab != null) {
            rightAppShellTabController.closeTab(store, rightActiveTab.tabId);
          }
      }
    },
    [bottomActiveTab, bottomBrowserTab, rightActiveTab, rightBrowserTab, store],
  );

  return null;
}
