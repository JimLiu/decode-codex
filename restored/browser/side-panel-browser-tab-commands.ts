// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative commands for opening / creating browser tabs in the thread side panel.
import { createElement } from "react";
import { defineMessage } from "../vendor/react-intl";
import {
  resolveActiveBrowserConversationId,
  browserSidebarTabManager,
  isKnownBrowserTab,
  getDefaultBrowserTabId,
  getBrowserTabPlacement,
  getActiveBrowserTabId,
  multiBrowserTabsEnabledAtom,
  browserHostIdAtom,
  intlControllerAtom,
  browserHostConfigAtom,
  activeCwdAtom,
  allowBrowserTabWithoutPlacementAtom,
  shouldRemoveSourceBrowserStateWhenEmpty,
  deriveBrowserTabDisplay,
  getSidePanelTabControllerForTarget,
  SidePanelTabKind,
  handleBrowserTabActivated,
  getPagePersistenceContext,
  cleanupBrowserTabOnClose,
  browserSidebarMessenger,
  focusBrowserSidePanelPanel,
  ensureBrowserPageState,
  removeBrowserPageState,
  BrowserSidebarTabContent,
  BrowserHighlightedTabIcon,
  FaviconImage,
  GlobeFallbackIcon,
  BrowserTabTrailingIndicators,
  toBrowserTabId,
} from "../boundaries/onboarding-commons-externals.facade";

interface AppStore {
  get(atom: unknown, key?: unknown): any;
  set(atom: unknown, value: unknown): void;
}

type SidePanelTarget = string;

export interface OpenBrowserTabOptions {
  browserConversationId?: string | null;
  browserTabId?: string;
  browserHostDisplayName?: string;
  cwd?: string;
  insertAfterTabId?: string;
  browserTransferSourceConversationId?: string | null;
  browserTransferSourceBrowserTabId?: string;
}

export interface OpenOrCreateBrowserTabOptions {
  browserConversationId?: string | null;
  browserHostDisplayName?: string;
  browserTabId?: string;
  cwd?: string;
  hostId?: string;
  initialUrl?: string;
  initiator?: string;
  insertAfterTabId?: string;
  restore?: { browserStorageId: string } | null;
  source?: string;
  target?: SidePanelTarget;
}

interface BrowserTabContextMenuConfig {
  browserConversationId: string;
  browserHostDisplayName: string;
  browserTabId: string;
  cwd?: string;
  target: SidePanelTarget;
}

export function resolveSidePanelBrowserTabId(
  store: AppStore,
  conversationId: string,
  browserTabId?: string,
): string {
  const summaryTabId =
    browserSidebarTabManager.getBrowserUseSummaryBrowserTabId(conversationId);
  if (store.get(multiBrowserTabsEnabledAtom)) {
    return browserTabId ?? toBrowserTabId(crypto.randomUUID());
  }
  if (
    browserTabId != null &&
    (isKnownBrowserTab(store, conversationId, browserTabId) ||
      (browserSidebarTabManager.isBrowserUseTab(conversationId, browserTabId) &&
        summaryTabId === browserTabId))
  ) {
    return browserTabId;
  }
  return (
    resolveExistingBrowserTabId(store, conversationId, browserTabId) ??
    getDefaultBrowserTabId(conversationId)
  );
}

function resolveExistingBrowserTabId(
  store: AppStore,
  conversationId: string,
  browserTabId?: string,
): string | null {
  return browserTabId != null &&
    getBrowserTabPlacement(store, conversationId, browserTabId) != null
    ? browserTabId
    : getActiveBrowserTabId(store, conversationId);
}

function isBrowserTabExternallyFocused(browserTabId: string): boolean {
  const element = document.querySelector(
    `[data-browser-sidebar-browser-tab-id="${browserTabId}"]`,
  );
  return element instanceof HTMLElement && document.activeElement === element;
}

function buildBrowserTabContextMenuItems({
  browserConversationId,
  browserHostDisplayName,
  browserTabId,
  cwd,
  target,
}: BrowserTabContextMenuConfig) {
  return (store: AppStore) =>
    store.get(multiBrowserTabsEnabledAtom)
      ? [
          {
            id: "new-browser-tab-to-the-right",
            message: defineMessage({
              id: "thread.sidePanel.browserTabMenu.newTabToTheRight",
              defaultMessage: "New tab to the right",
              description:
                "Context menu action that opens a new browser tab immediately to the right of the current browser tab",
            }),
            onSelect: () => {
              openBrowserTabFromContextMenu(store, {
                browserConversationId,
                browserHostDisplayName,
                browserTabId,
                cwd,
                target,
              });
            },
          },
          {
            id: "browser-tab-menu-reload-section-separator",
            type: "separator",
          },
          {
            id: "reload-browser-tab",
            message: defineMessage({
              id: "thread.sidePanel.browserTabMenu.reload",
              defaultMessage: "Reload",
              description:
                "Context menu action that reloads the current browser tab from the side panel tab strip",
            }),
            onSelect: () => {
              browserSidebarMessenger.dispatchMessage(
                "browser-sidebar-command",
                {
                  browserTabId,
                  conversationId: browserConversationId,
                  command: { type: "reload" },
                },
              );
            },
          },
          {
            id: "duplicate-browser-tab",
            message: defineMessage({
              id: "thread.sidePanel.browserTabMenu.duplicate",
              defaultMessage: "Duplicate",
              description:
                "Context menu action that duplicates the current browser tab from the side panel tab strip",
            }),
            onSelect: () => {
              duplicateBrowserTabFromContextMenu(store, {
                browserConversationId,
                browserHostDisplayName,
                browserTabId,
                cwd,
                target,
              });
            },
          },
        ]
      : [];
}

function openBrowserTabFromContextMenu(
  store: AppStore,
  {
    browserInitialUrl,
    browserConversationId,
    browserHostDisplayName,
    browserTabId,
    cwd,
    target,
  }: BrowserTabContextMenuConfig & { browserInitialUrl?: string },
): string | null {
  return store.get(multiBrowserTabsEnabledAtom)
    ? openOrCreateBrowserTab(store, {
        browserConversationId,
        browserHostDisplayName,
        browserTabId: toBrowserTabId(crypto.randomUUID()),
        cwd,
        hostId: store.get(browserHostIdAtom),
        initialUrl: browserInitialUrl,
        initiator: "side_panel_menu",
        insertAfterTabId: browserTabId,
        source: "manual",
        target,
      })
    : null;
}

function duplicateBrowserTabFromContextMenu(
  store: AppStore,
  {
    browserConversationId,
    browserHostDisplayName,
    browserTabId,
    cwd,
    target,
  }: BrowserTabContextMenuConfig,
): void {
  openBrowserTabFromContextMenu(store, {
    browserInitialUrl:
      browserSidebarTabManager.getSnapshot(browserConversationId, browserTabId)
        ?.url ?? "",
    browserConversationId,
    browserHostDisplayName,
    browserTabId,
    cwd,
    target,
  });
}

export function openBrowserTab(
  store: AppStore,
  activate = true,
  options: OpenBrowserTabOptions = {},
  target: SidePanelTarget = "right",
): boolean {
  const fallbackConversationId = resolveActiveBrowserConversationId(store);
  const conversationId =
    options.browserConversationId ?? fallbackConversationId;
  if (conversationId == null) return false;

  const browserTabId = resolveSidePanelBrowserTabId(
    store,
    conversationId,
    options.browserTabId,
  );
  browserSidebarTabManager.getBrowserStorageId(conversationId, browserTabId);

  const placement = getBrowserTabPlacement(
    store,
    conversationId,
    browserTabId,
    target,
  );
  if (placement == null && !store.get(allowBrowserTabWithoutPlacementAtom)) {
    return false;
  }
  const resolvedTarget = placement?.target ?? target;

  if (options.browserTransferSourceConversationId != null) {
    browserSidebarTabManager.reassociateTabState(
      options.browserTransferSourceConversationId,
      options.browserTransferSourceBrowserTabId ??
        getDefaultBrowserTabId(options.browserTransferSourceConversationId),
      conversationId,
      browserTabId,
      {
        removeSourceBrowserStateWhenEmpty:
          shouldRemoveSourceBrowserStateWhenEmpty(
            store,
            options.browserTransferSourceConversationId,
          ),
      },
    );
  }

  const fallbackTitle = store.get(intlControllerAtom).formatMessage({
    id: "thread.sidePanel.emptyBrowserTab",
    defaultMessage: "New tab",
    description: "Title for an empty browser tab in the thread side panel",
  });
  const display = deriveBrowserTabDisplay({
    browserSnapshot: browserSidebarTabManager.getSnapshot(
      conversationId,
      browserTabId,
    ),
    browserTabFallbackTitle: fallbackTitle,
    isBrowserUseActive: browserSidebarTabManager.isBrowserUseActive(
      conversationId,
      browserTabId,
    ),
    isBrowserUseTab: browserSidebarTabManager.isBrowserUseTab(
      conversationId,
      browserTabId,
    ),
  });

  const controller = getSidePanelTabControllerForTarget(resolvedTarget);
  const existingTab =
    placement?.tab ?? store.get(controller.tabById$, browserTabId);
  const title =
    display.preserveExistingTitle && existingTab?.title != null
      ? existingTab.title
      : display.title;
  const hostDisplayName =
    options.browserHostDisplayName ??
    store.get(browserHostConfigAtom).display_name;
  const cwd = options.cwd ?? store.get(activeCwdAtom);

  controller.openTab(store, BrowserSidebarTabContent, {
    contextMenuItems: buildBrowserTabContextMenuItems({
      browserConversationId: conversationId,
      browserHostDisplayName: hostDisplayName,
      browserTabId,
      cwd,
      target: resolvedTarget,
    }),
    highlightedIcon: createElement(BrowserHighlightedTabIcon, {
      className: "size-4",
    }),
    icon: createElement(FaviconImage, {
      alt: "",
      className: "icon-xs shrink-0 rounded-2xs",
      logoUrl: display.faviconUrl,
      fallback: createElement(GlobeFallbackIcon, { className: "size-full" }),
    }),
    insertAfterTabId: options.insertAfterTabId,
    isHighlighted: display.isHighlighted,
    trailingContent:
      display.isCapturingUserMedia || display.isAudible
        ? createElement(BrowserTabTrailingIndicators, {
            isAudible: display.isAudible,
            isCapturingUserMedia: display.isCapturingUserMedia,
          })
        : undefined,
    props: {
      browserConversationId: conversationId,
      browserHostDisplayName: hostDisplayName,
      browserTabId,
      cwd,
      target: resolvedTarget,
    },
    id: browserTabId,
    activate,
    hasExternalFocus: () => isBrowserTabExternallyFocused(browserTabId),
    kind: SidePanelTabKind.BROWSER,
    requiresWorkspaceReady: false,
    onActivate: () => {
      handleBrowserTabActivated(store, conversationId, browserTabId);
    },
    onClose: () => {
      const pagePersistence = browserSidebarTabManager.getPagePersistence(
        conversationId,
        browserTabId,
        getPagePersistenceContext(store),
      );
      cleanupBrowserTabOnClose(store, conversationId, browserTabId);
      if (!store.get(multiBrowserTabsEnabledAtom)) {
        browserSidebarTabManager.removeTab(conversationId, browserTabId);
      }
      browserSidebarMessenger.dispatchMessage("browser-sidebar-command", {
        pagePersistence,
        conversationId,
        browserTabId,
        command: { type: "close-tab" },
      });
    },
    onMove: (
      _moveStore: AppStore,
      moveTarget: { panelId: SidePanelTarget },
    ) => ({
      contextMenuItems: buildBrowserTabContextMenuItems({
        browserConversationId: conversationId,
        browserHostDisplayName: hostDisplayName,
        browserTabId,
        cwd,
        target: moveTarget.panelId,
      }),
      props: {
        browserConversationId: conversationId,
        browserHostDisplayName: hostDisplayName,
        browserTabId,
        cwd,
        target: moveTarget.panelId,
      },
    }),
    title,
  });

  if (activate) focusBrowserSidePanelPanel(store, resolvedTarget);
  return true;
}

export function openOrCreateBrowserTab(
  store: AppStore,
  options: OpenOrCreateBrowserTabOptions = {},
): string | null {
  const {
    browserConversationId,
    browserHostDisplayName,
    browserTabId,
    cwd,
    hostId,
    initialUrl,
    initiator,
    insertAfterTabId,
    restore,
    source,
    target = "right",
  } = options;

  const conversationId =
    browserConversationId ?? resolveActiveBrowserConversationId(store);
  if (conversationId == null) return null;

  const resolvedTabId = resolveSidePanelBrowserTabId(
    store,
    conversationId,
    browserTabId,
  );
  const isNewTab =
    !store.get(multiBrowserTabsEnabledAtom) &&
    !isKnownBrowserTab(store, conversationId, resolvedTabId);

  if (
    isNewTab &&
    getBrowserTabPlacement(store, conversationId, resolvedTabId) == null
  ) {
    browserSidebarTabManager.removeTab(conversationId, resolvedTabId);
  }
  if (restore != null) {
    browserSidebarTabManager.restorePersistedPageState(
      conversationId,
      resolvedTabId,
      restore.browserStorageId,
    );
  }
  if (isNewTab) {
    ensureBrowserPageState(conversationId, resolvedTabId, {
      initialUrl,
      initiator,
      source,
    });
  }

  const opened = openBrowserTab(
    store,
    true,
    {
      browserConversationId: conversationId,
      browserHostDisplayName,
      browserTabId: resolvedTabId,
      cwd,
      insertAfterTabId,
    },
    target,
  );
  if (!opened) {
    if (isNewTab) removeBrowserPageState(conversationId, resolvedTabId);
    return null;
  }

  const finalTabId =
    target === "right"
      ? (getActiveBrowserTabId(store, conversationId) ?? resolvedTabId)
      : resolvedTabId;

  if (restore != null && finalTabId !== resolvedTabId) {
    browserSidebarTabManager.restorePersistedPageState(
      conversationId,
      finalTabId,
      restore.browserStorageId,
    );
  }
  if (isNewTab) {
    if (finalTabId !== resolvedTabId) {
      removeBrowserPageState(conversationId, resolvedTabId);
      ensureBrowserPageState(conversationId, finalTabId, {
        initialUrl,
        initiator,
        source,
      });
    }
  } else {
    ensureBrowserPageState(conversationId, finalTabId, {
      initialUrl,
      initiator,
      source,
    });
  }

  if (initialUrl != null) {
    const pagePersistence = browserSidebarTabManager.getPagePersistence(
      conversationId,
      finalTabId,
      getPagePersistenceContext(store),
    );
    browserSidebarMessenger.dispatchMessage("browser-sidebar-command", {
      pagePersistence,
      browserTabId: finalTabId,
      conversationId,
      command: {
        hostId: hostId ?? store.get(browserHostIdAtom),
        initiator: initiator ?? "toggle_browser_command",
        source: source ?? "manual",
        type: "navigate",
        url: initialUrl,
      },
    });
  }
  return finalTabId;
}
