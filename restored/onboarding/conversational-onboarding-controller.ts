// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Controller-side singletons for starting and aborting conversational
// onboarding conversations.
import type { ActiveConversationalOnboardingConversation } from "./conversational-onboarding-conversation-state";

export const conversationalOnboardingHostStartGenerations = new Map<
  string,
  number
>();

export function abortActiveConversationalOnboardingConversation(
  conversation: ActiveConversationalOnboardingConversation,
): void {
  conversation.abortController?.abort();
  conversation.abort?.();
}
