// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Back/forward controls for MCP app frames.

import * as React from "react";
import { useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { BackForwardNavigationButtons } from "../boundaries/onboarding-commons-externals.facade";

function stopPointerPropagation(event: React.PointerEvent): void {
  event.stopPropagation();
}

interface McpAppNavigationControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  className?: string;
  onBack: () => void;
  onForward: () => void;
}

export function McpAppNavigationControls({
  canGoBack,
  canGoForward,
  className,
  onBack,
  onForward,
}: McpAppNavigationControlsProps) {
  const intl = useIntl();
  const backLabel = intl.formatMessage({
    id: "codex.mcpTool.mcpAppNavigationBack",
    defaultMessage: "Back",
    description: "Button label to navigate back inside an MCP app",
  });
  const forwardLabel = intl.formatMessage({
    id: "codex.mcpTool.mcpAppNavigationForward",
    defaultMessage: "Next",
    description: "Button label to navigate forward inside an MCP app",
  });
  const handleBack = (event: React.MouseEvent) => {
    event.stopPropagation();
    onBack();
  };
  const handleForward = (event: React.MouseEvent) => {
    event.stopPropagation();
    onForward();
  };
  return (
    <div
      className={classNames("flex items-center gap-px", className)}
      data-mcp-app-navigation-controls="true"
      onPointerDown={stopPointerPropagation}
    >
      <BackForwardNavigationButtons
        backLabel={backLabel}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        forwardLabel={forwardLabel}
        onBack={handleBack}
        onForward={handleForward}
      />
    </div>
  );
}
