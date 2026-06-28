// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation detail-mode setting helpers used by the local thread summary panel.
import {
  Sc as useConversationDetailModeRaw,
  bc as initConversationDetailModeConstantsRaw,
  _c as CONVERSATION_DETAIL_STEPS_PROSE,
} from "../../vendor/projects-app-shared-runtime";

export { CONVERSATION_DETAIL_STEPS_PROSE };

export function initConversationDetailModeRuntime(): void {
  initConversationDetailModeConstantsRaw();
}

export function useConversationDetailMode(): string {
  return useConversationDetailModeRaw();
}
