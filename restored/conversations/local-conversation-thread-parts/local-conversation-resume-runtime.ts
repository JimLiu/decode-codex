// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Runtime helpers for resuming local conversations.
import {
  ho as resolveConversationServiceTierRaw,
  mo as initProjectsAppSharedProducerRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  In as initProfilePageProducerRaw,
  Nf as useProfileConversationAgentModeRaw,
} from "../../vendor/profile-page-runtime";

export type ProfileConversationAgentModeState = {
  activeMode?: {
    settings: {
      model?: unknown | null;
    };
  } | null;
};

export function useProfileConversationAgentMode(
  conversationId: string | null | undefined,
): ProfileConversationAgentModeState {
  return useProfileConversationAgentModeRaw(
    conversationId,
  ) as ProfileConversationAgentModeState;
}

export function resolveConversationServiceTier(
  scope: unknown,
  hostId: unknown,
  model: unknown,
): Promise<unknown> {
  return resolveConversationServiceTierRaw(
    scope,
    hostId,
    model,
  ) as Promise<unknown>;
}

export function initConversationResumeRuntime(): void {
  initProjectsAppSharedProducerRaw();
  initProfilePageProducerRaw();
}
