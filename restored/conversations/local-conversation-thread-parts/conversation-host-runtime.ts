// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation host API and agent-mode hooks used by local thread content.
import {
  ed as useConversationHostApiRaw,
  ic as useConversationAgentModeRaw,
} from "../../vendor/projects-app-shared-runtime";

export type ConversationHostApi = {
  getHostId(): string;
};

export type ConversationAgentModeOptions = {
  conversationId: string;
  hostId: string | null;
};

export type ConversationAgentModeState = {
  agentMode: unknown;
};

export function useConversationHostApi(
  conversationId: string,
): ConversationHostApi {
  return useConversationHostApiRaw(conversationId) as ConversationHostApi;
}

export function useConversationAgentMode(
  options: ConversationAgentModeOptions,
): ConversationAgentModeState {
  return useConversationAgentModeRaw(options) as ConversationAgentModeState;
}
