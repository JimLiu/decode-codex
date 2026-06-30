// Restored from ref/webview/assets/thread-side-panel-tabs-DDAJVj-n.js
// Semantic side-panel tab barrel for the updated Codex webview bundle.
import {
  getBrowserTabIdForSidePanelOpen,
  initThreadSidePanelTabsChunk,
  openSessionSandboxSidePanel,
  openThreadBranchReviewSidePanelTab,
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  openThreadBrowserSidePanelTabWithoutAnimation,
  openThreadLastTurnReviewSidePanelTab,
  openThreadReviewSidePanelTab,
  openThreadTimelineSidePanel,
  primeBrowserTabTransfers,
  toggleThreadSidePanel,
} from "../vendor/app-main-current-runtime";
import {
  closeMcpAppTab as closeThreadMcpAppSidePanelTab,
  mcpAppTabId as getThreadMcpAppSidePanelTabId,
  openMcpAppTab as openThreadMcpAppSidePanelTab,
} from "../plugins/mcp-app-tab";

initThreadSidePanelTabsChunk();

const THREAD_SIDE_PANEL_TAB = {
  BROWSER: "browser",
  DIFF: "diff",
  MCP_APP: "mcp-app",
  PLAN: "plan",
  SANDBOX: "sandbox",
  TIMELINE: "timeline",
} as const;

export {
  THREAD_SIDE_PANEL_TAB,
  closeThreadMcpAppSidePanelTab,
  getBrowserTabIdForSidePanelOpen,
  getThreadMcpAppSidePanelTabId,
  openSessionSandboxSidePanel,
  openThreadBranchReviewSidePanelTab,
  openThreadBrowserSidePanelTab,
  openThreadBrowserSidePanelTabWithPendingState,
  openThreadBrowserSidePanelTabWithoutAnimation,
  openThreadLastTurnReviewSidePanelTab,
  openThreadMcpAppSidePanelTab,
  openThreadReviewSidePanelTab,
  openThreadTimelineSidePanel,
  primeBrowserTabTransfers,
  toggleThreadSidePanel,
};
