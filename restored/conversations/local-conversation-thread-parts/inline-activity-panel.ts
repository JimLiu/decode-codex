// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Inline activity panel visibility helper for local conversation side panels.

export interface InlineActivityPanelState {
  activeTabId?: string | null;
  isRightPanelExpanded: boolean;
}

export function shouldShowInlineActivityForRightPanel({
  activeTabId,
  isRightPanelExpanded,
}: InlineActivityPanelState): boolean {
  return (
    isRightPanelExpanded &&
    activeTabId?.startsWith("sidechat:") !== true &&
    activeTabId?.startsWith("background-agent:") !== true
  );
}
