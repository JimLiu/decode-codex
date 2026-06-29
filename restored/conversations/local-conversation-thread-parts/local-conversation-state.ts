// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation title/source context signals backed by the projects app bundle.
import {
  conversationTitleSignal,
  refreshConversationHistorySignals,
  setConversationSourceContext,
  type ConversationSourceScope,
} from "../../runtime/conversation-state-runtime";

export { conversationTitleSignal, refreshConversationHistorySignals };

export function setActiveConversationSourceContext(
  scope: ConversationSourceScope,
  conversationId: string,
): void {
  setConversationSourceContext(
    scope,
    "conversation",
    `conversation:${conversationId}`,
  );
}
