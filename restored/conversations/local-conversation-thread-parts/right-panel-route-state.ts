// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Route matching helper for full-width local conversation right panels.

export interface FullWidthRightPanelRouteState {
  conversationId?: string | null;
  isRightPanelFullWidth: boolean;
  routeConversationId?: string | null;
}

export function shouldUseFullWidthRightPanelForRoute({
  conversationId,
  isRightPanelFullWidth,
  routeConversationId,
}: FullWidthRightPanelRouteState): boolean {
  return isRightPanelFullWidth && conversationId === routeConversationId;
}
