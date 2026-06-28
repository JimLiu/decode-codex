// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser-use summary helpers for the local conversation side panel.
import { getBrowserSidebarTabIds } from "../../browser/browser-sidebar-open-source";
import { browserSidebarManager } from "../../browser/sidebar-manager";
import type { BrowserSidebarSnapshot } from "../../browser/sidebar-manager/types";
import {
  getBrowserTabConversationKey,
  type BrowserPanelLocation,
} from "../../runtime/persisted-signal";

const BROWSER_SIDEBAR_ATTACH_TOKEN_URL_PREFIX =
  "about:blank#codex-browser-sidebar-attach-token=";
const WEB_BROWSER_TAB_TYPE = "web";

export type BrowserUseSummary = {
  browserTabId: string;
  displayUrl: string | null;
  faviconUrl: string | null;
  isAgentWorking: boolean;
  title: string;
  url: string;
};

export type BrowserPanelTabLike = {
  kind?: string | null;
  tabId: string;
} | null;

export type BrowserUseSummaryPanelTabs = {
  bottomPanelTabs: readonly BrowserPanelTabLike[];
  rightPanelTabs: readonly BrowserPanelTabLike[];
};

export const subscribeToBrowserUseSummaryChanges =
  browserSidebarManager.subscribe;

export function createBrowserUseSummaryRows({
  blankTitle,
  bottomPanelTabs,
  browserUseSummarySyncKey,
  conversationId,
  isMultiBrowserTabsGateEnabled,
  rightPanelTabs,
}: BrowserUseSummaryPanelTabs & {
  blankTitle: string;
  browserUseSummarySyncKey: string;
  conversationId: string | null;
  isMultiBrowserTabsGateEnabled: boolean;
}): BrowserUseSummary[] {
  if (conversationId == null) return [];

  if (!isMultiBrowserTabsGateEnabled) {
    if (browserUseSummarySyncKey.length === 0) return [];
    const browserTabId =
      browserSidebarManager.getBrowserUseSummaryBrowserTabId(conversationId);
    if (browserTabId == null) return [];

    const summary = createWebBrowserUseSummary({
      browserTabId,
      browserSnapshot: browserSidebarManager.getSnapshot(
        conversationId,
        browserTabId,
      ),
      isAgentWorking: browserSidebarManager.isBrowserUseActive(
        conversationId,
        browserTabId,
      ),
    });
    return summary == null ? [] : [summary];
  }

  if (browserUseSummarySyncKey.length === 0) return [];

  return getBrowserTabIdsForSummary({
    bottomPanelTabs,
    conversationId,
    rightPanelTabs,
  }).map((browserTabId) =>
    createBrowserUseSummary({
      blankTitle,
      browserTabId,
      browserSnapshot: browserSidebarManager.getSnapshot(
        conversationId,
        browserTabId,
      ),
      isAgentWorking: browserSidebarManager.isBrowserUseActive(
        conversationId,
        browserTabId,
      ),
    }),
  );
}

export function createBrowserUseSummarySyncKey({
  bottomPanelTabs,
  conversationId,
  isMultiBrowserTabsGateEnabled,
  rightPanelTabs,
}: BrowserUseSummaryPanelTabs & {
  conversationId: string;
  isMultiBrowserTabsGateEnabled: boolean;
}): string {
  if (!isMultiBrowserTabsGateEnabled) {
    const browserTabId =
      browserSidebarManager.getBrowserUseSummaryBrowserTabId(conversationId);
    const summarySyncKey =
      browserSidebarManager.getBrowserUseBrowserTabSummarySyncKey(
        conversationId,
      );
    return browserTabId == null || summarySyncKey.length === 0
      ? ""
      : [
          summarySyncKey,
          browserTabId,
          browserSidebarManager.isBrowserUseActive(conversationId, browserTabId)
            ? "active"
            : "inactive",
        ].join("\t");
  }

  return getBrowserTabIdsForSummary({
    bottomPanelTabs,
    conversationId,
    rightPanelTabs,
  })
    .map((browserTabId) => {
      const snapshot = browserSidebarManager.getSnapshot(
        conversationId,
        browserTabId,
      );
      let activityState = "user";
      if (browserSidebarManager.isBrowserUseTab(conversationId, browserTabId)) {
        activityState = "inactive";
      }
      if (
        browserSidebarManager.isBrowserUseActive(conversationId, browserTabId)
      ) {
        activityState = "active";
      }
      return [
        browserTabId,
        activityState,
        snapshot?.tabType ?? "",
        snapshot?.title ?? "",
        snapshot?.url ?? "",
        snapshot?.faviconUrl ?? "",
      ].join("\t");
    })
    .join("\n");
}

export function getBrowserTabIdsForSummary({
  bottomPanelTabs,
  conversationId,
  rightPanelTabs,
}: BrowserUseSummaryPanelTabs & {
  conversationId: string;
}): string[] {
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

  for (const panelTabs of [rightPanelTabs, bottomPanelTabs]) {
    for (const panelTab of panelTabs) {
      appendBrowserTabId(
        getBrowserTabConversationKey(
          panelTab as BrowserPanelLocation,
          conversationId,
        ),
      );
    }
  }

  for (const browserTabId of getBrowserSidebarTabIds(conversationId)) {
    appendBrowserTabId(browserTabId);
  }

  for (const browserTabId of browserSidebarManager.getConversationBrowserTabIds(
    conversationId,
  )) {
    if (browserSidebarManager.isBrowserUseTab(conversationId, browserTabId)) {
      appendBrowserTabId(browserTabId);
    }
  }

  return browserTabIds;
}

function createBrowserUseSummary({
  blankTitle,
  browserTabId,
  browserSnapshot,
  isAgentWorking,
}: {
  blankTitle: string;
  browserTabId: string;
  browserSnapshot: BrowserSidebarSnapshot | null;
  isAgentWorking: boolean;
}): BrowserUseSummary {
  const url = browserSnapshot?.url?.trim() ?? "";
  const displayUrl = isBlankBrowserUrl(url) ? null : getDisplayUrl(url);
  const title =
    displayUrl == null
      ? getBlankBrowserTitle(browserSnapshot?.title ?? "", blankTitle)
      : getPageBrowserTitle(browserSnapshot?.title ?? "", displayUrl);

  return {
    browserTabId,
    displayUrl,
    faviconUrl: browserSnapshot?.faviconUrl ?? null,
    isAgentWorking,
    title,
    url: isBrowserSidebarAttachTokenUrl(url) ? "" : url,
  };
}

function createWebBrowserUseSummary({
  browserTabId,
  browserSnapshot,
  isAgentWorking,
}: {
  browserTabId: string;
  browserSnapshot: BrowserSidebarSnapshot | null;
  isAgentWorking: boolean;
}): BrowserUseSummary | null {
  if (browserSnapshot?.tabType !== WEB_BROWSER_TAB_TYPE) return null;

  const url = browserSnapshot.url?.trim() ?? "";
  if (isBlankBrowserUrl(url)) return null;

  const displayUrl = getDisplayUrl(url);
  return {
    browserTabId,
    displayUrl,
    faviconUrl: browserSnapshot.faviconUrl ?? null,
    isAgentWorking,
    title: getPageBrowserTitle(browserSnapshot.title ?? "", displayUrl),
    url,
  };
}

function isBlankBrowserUrl(url: string): boolean {
  return (
    url.length === 0 ||
    url === "about:blank" ||
    isBrowserSidebarAttachTokenUrl(url)
  );
}

function isBrowserSidebarAttachTokenUrl(url: string): boolean {
  return url.startsWith(BROWSER_SIDEBAR_ATTACH_TOKEN_URL_PREFIX);
}

function getBlankBrowserTitle(title: string, blankTitle: string): string {
  const trimmedTitle = title.trim();
  return trimmedTitle.length === 0 ||
    trimmedTitle === "about:blank" ||
    isBrowserSidebarAttachTokenUrl(trimmedTitle)
    ? blankTitle
    : trimmedTitle;
}

function getPageBrowserTitle(title: string, displayUrl: string): string {
  const trimmedTitle = title.trim();
  return trimmedTitle.length === 0 ||
    trimmedTitle === "New tab" ||
    trimmedTitle === "about:blank" ||
    isBrowserSidebarAttachTokenUrl(trimmedTitle)
    ? displayUrl
    : trimmedTitle;
}

function getDisplayUrl(url: string): string {
  try {
    const { host } = new URL(url);
    return host.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}
