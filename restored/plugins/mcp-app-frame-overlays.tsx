// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Portalled overlay controls for MCP app frames.

import * as React from "react";
import { createPortal } from "react-dom";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  appMessenger,
  isMcpAppDevtoolsEnabled,
  sidePanelSlots,
  Tooltip,
} from "../boundaries/onboarding-commons-externals.facade";
import { mcpAppTabId } from "./mcp-app-tab";
import { McpAppFollowUpConfirmation } from "./mcp-app-follow-up-confirmation";
import { McpAppNavigationControls } from "./mcp-app-navigation-controls";
import {
  createMcpAppError,
  MCP_APP_DEFAULT_ERROR_CODE,
} from "./mcp-app-errors";
import type { McpAppNavigationState } from "./mcp-app-schemas";
import type { PendingMcpAppFollowUp } from "./mcp-app-frame-types";

interface McpAppFrameOverlaysProps {
  activeTab: { tabId: string } | null;
  conversationId: string;
  frameElement: HTMLDivElement | null;
  handleNavigateDelta: (delta: number) => void;
  isFullScreen: boolean;
  mcpAppId: string;
  navigationState: McpAppNavigationState;
  pendingFollowUp: PendingMcpAppFollowUp | null;
  sandboxApi: any;
  sandboxId: string;
  setPendingFollowUp: React.Dispatch<
    React.SetStateAction<PendingMcpAppFollowUp | null>
  >;
  webviewElement: HTMLElement | null;
}

export function McpAppFrameOverlays({
  activeTab,
  conversationId,
  frameElement,
  handleNavigateDelta,
  isFullScreen,
  mcpAppId,
  navigationState,
  pendingFollowUp,
  sandboxApi,
  sandboxId,
  setPendingFollowUp,
  webviewElement,
}: McpAppFrameOverlaysProps) {
  const intl = useIntl();
  const resolveFollowUp = (result: unknown) => {
    const current = pendingFollowUp;
    if (current != null) {
      setPendingFollowUp(null);
      current.resolve(result);
    }
  };
  const rejectFollowUp = () => {
    const current = pendingFollowUp;
    if (current != null) {
      setPendingFollowUp(null);
      current.reject(
        createMcpAppError(
          "Follow-up message was not confirmed",
          MCP_APP_DEFAULT_ERROR_CODE,
        ),
      );
    }
  };
  const isWebview = webviewElement?.tagName === "WEBVIEW";
  const canShowDevtools =
    frameElement != null &&
    sandboxApi != null &&
    isWebview &&
    isMcpAppDevtoolsEnabled();
  const hasNavigationHistory =
    navigationState.canGoBack || navigationState.canGoForward;
  const showNavigation = sandboxApi != null && hasNavigationHistory;
  const showInlineNavigation = showNavigation && !isFullScreen;
  const showFullScreenNavigation =
    showNavigation &&
    isFullScreen &&
    activeTab?.tabId === mcpAppTabId(mcpAppId);

  return (
    <>
      {pendingFollowUp == null ? null : (
        <McpAppFollowUpConfirmation
          conversationId={conversationId}
          onCancel={rejectFollowUp}
          onConfirm={resolveFollowUp}
          prompt={pendingFollowUp.prompt}
          title={pendingFollowUp.title}
        />
      )}
      {showFullScreenNavigation ? (
        <sidePanelSlots.RightPanelTabListBefore>
          <McpAppNavigationControls
            canGoBack={navigationState.canGoBack}
            canGoForward={navigationState.canGoForward}
            className="h-full px-1"
            onBack={() => handleNavigateDelta(-1)}
            onForward={() => handleNavigateDelta(1)}
          />
        </sidePanelSlots.RightPanelTabListBefore>
      ) : null}
      {showInlineNavigation && frameElement != null && !isFullScreen
        ? createPortal(
            <McpAppNavigationControls
              canGoBack={navigationState.canGoBack}
              canGoForward={navigationState.canGoForward}
              className="absolute top-2 left-2 z-50 rounded-md border border-token-border bg-token-main-surface-primary/95 p-0.5 shadow-sm"
              onBack={() => handleNavigateDelta(-1)}
              onForward={() => handleNavigateDelta(1)}
            />,
            frameElement,
          )
        : null}
      {canShowDevtools && frameElement != null
        ? createPortal(
            <Tooltip
              side="top"
              align="end"
              tooltipContent={
                <FormattedMessage
                  id="codex.mcpTool.mcpAppSandboxDevtoolsTooltip"
                  defaultMessage="Open app DevTools"
                  description="Tooltip for a development-only button that opens DevTools for an MCP app sandbox webview"
                />
              }
            >
              <div className="absolute top-2 right-2 z-50 inline-flex w-fit">
                <Button
                  color="secondary"
                  size="default"
                  className="cursor-interaction border border-token-border bg-token-main-surface-primary/95 px-2 py-0.5 text-xs shadow-sm"
                  aria-label={intl.formatMessage({
                    id: "codex.mcpTool.mcpAppSandboxDevtoolsAriaLabel",
                    defaultMessage: "Open app DevTools",
                    description:
                      "Aria label for a development-only button that opens DevTools for an MCP app sandbox webview",
                  })}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    appMessenger.dispatchMessage(
                      "open-mcp-app-sandbox-devtools",
                      { sandboxId },
                    );
                  }}
                  onPointerDown={(event: React.PointerEvent) =>
                    event.stopPropagation()
                  }
                >
                  <FormattedMessage
                    id="codex.mcpTool.mcpAppSandboxDevtoolsButton"
                    defaultMessage="DevTools"
                    description="Label for a development-only button that opens DevTools for an MCP app sandbox webview"
                  />
                </Button>
              </div>
            </Tooltip>,
            frameElement,
          )
        : null}
    </>
  );
}
