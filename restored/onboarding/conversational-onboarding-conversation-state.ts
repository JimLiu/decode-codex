// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Active conversational-onboarding conversation registry keyed by host id.

export type ActiveConversationalOnboardingConversation = {
  abort?: () => void;
  abortController?: AbortController;
  hostId?: string;
  signal?: AbortSignal;
};

const activeConversationsByHost = new Map<
  string,
  ActiveConversationalOnboardingConversation
>();

export function readActiveConversationalOnboardingConversation(
  hostId: string,
): ActiveConversationalOnboardingConversation | null {
  return activeConversationsByHost.get(hostId) ?? null;
}

export function writeActiveConversationalOnboardingConversation(
  hostId: string,
  conversation: ActiveConversationalOnboardingConversation | null,
): void {
  if (conversation == null) activeConversationsByHost.delete(hostId);
  else activeConversationsByHost.set(hostId, { ...conversation, hostId });
}

export function clearActiveConversationalOnboardingConversation(
  hostId: string,
): void {
  activeConversationsByHost.delete(hostId);
}
