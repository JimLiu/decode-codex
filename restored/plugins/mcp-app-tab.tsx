// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Side-panel tab management for MCP app frames: the panel frame component plus
// helpers to open, close and id the tab that hosts an MCP app's side panel.
import { createElement } from "react";
import {
  McpServerIcon,
  ConnectorLogoImage,
} from "../boundaries/onboarding-commons-externals.facade";
import { rightAppShellTabController as sidePanelTabController } from "../app-shell/app-shell-tab-controller";
import {
  closeThreadPanel,
  openThreadPanel,
} from "../app-shell/thread-panel-state";
import { PERSISTED_PANEL_KIND } from "../runtime/persisted-signal";

export function mcpAppTabId(mcpAppId: string): string {
  return `${PERSISTED_PANEL_KIND.MCP_APP}:${mcpAppId}`;
}

export interface McpAppSidePanelFrameProps {
  onPanelElementChange: (element: HTMLElement | null) => void;
}

export function McpAppSidePanelFrame(props: McpAppSidePanelFrameProps) {
  const { onPanelElementChange } = props;
  return (
    <div className="bg-token-background relative h-full min-h-0">
      <div
        ref={onPanelElementChange}
        data-mcp-app-side-panel-frame-container="true"
        className="h-full min-h-0 w-full"
      />
    </div>
  );
}

export interface OpenMcpAppTabOptions {
  activate?: boolean;
  icon?: { alt: string; logoUrl?: string; logoDarkUrl?: string } | null;
  mcpAppId: string;
  onExitFullScreen?: (...args: unknown[]) => void;
  onPanelElementChange: (element: HTMLElement | null) => void;
  title: string;
}

export function openMcpAppTab(store: any, options: OpenMcpAppTabOptions) {
  const {
    activate = true,
    icon,
    mcpAppId,
    onExitFullScreen,
    onPanelElementChange,
    title,
  } = options;

  const tabId = mcpAppTabId(mcpAppId);
  sidePanelTabController.openTab(store, McpAppSidePanelFrame, {
    icon:
      icon == null
        ? createElement(McpServerIcon, {
            className: "icon-xs shrink-0 text-token-text-secondary",
          })
        : createElement(ConnectorLogoImage, {
            alt: icon.alt,
            className: "icon-xs shrink-0 object-contain",
            logoUrl: icon.logoUrl,
            logoDarkUrl: icon.logoDarkUrl,
            fallback: createElement(McpServerIcon, {
              className: "icon-xs shrink-0 text-token-text-secondary",
            }),
          }),
    props: { onPanelElementChange },
    id: tabId,
    title,
    activate,
    onClose: onExitFullScreen,
  });
  if (activate) openThreadPanel(store, "right");
}

export function closeMcpAppTab(store: any, mcpAppId: string) {
  const tabId = mcpAppTabId(mcpAppId);
  if (
    store
      .get(sidePanelTabController.tabs$)
      .some((tab: any) => tab.tabId === tabId)
  ) {
    sidePanelTabController.closeTab(store, tabId);
    if (store.get(sidePanelTabController.tabs$).length === 0) {
      closeThreadPanel(store, "right");
    }
  }
}
