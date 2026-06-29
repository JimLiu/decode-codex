// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation state selectors and source context helpers shared by local thread modules.
import {
  $p as modelProviderSignal,
  Am as conversationWorkspaceRootSignal,
  Dp as conversationRemoteHostIdSignal,
  Ep as conversationUnreadSignal,
  Em as conversationTurnsSignal,
  Fp as expiredSideChatSignal,
  Pp as responseInProgressSignal,
  Ip as localResponseInProgressSignal,
  Kl as conversationTitleSignal,
  Kp as conversationReadStateSignal,
  Np as conversationHistoryCompleteSignal,
  Op as initConversationStateSelectors,
  Rf as workspaceRootsSignal,
  Sm as threadSourceSignal,
  Tp as hasConversationSignal,
  Tm as conversationTurnCountSignal,
  Up as conversationCollaborationModeSignal,
  Xp as latestConversationTurnSignal,
  cm as conversationHostIdSignal,
  cs as setConversationSourceContextRaw,
  dp as berryDisplayConversationTurnsSignal,
  fp as completedThreadGoalSignal,
  gp as conversationCwdSignal,
  jm as conversationModeSignal,
  lm as conversationResumeStateSignal,
  nm as projectlessOutputDirectorySignal,
  pp as shouldResumeConversationSignal,
  sm as conversationRequestsSignal,
  un as refreshConversationHistorySignals,
  vm as subagentParentThreadIdSignal,
  wp as storedThreadBranchSignal,
} from "../vendor/projects-app-shared-runtime";

export type ConversationSourceScope = unknown;

export {
  berryDisplayConversationTurnsSignal,
  conversationCwdSignal,
  conversationCollaborationModeSignal,
  completedThreadGoalSignal,
  conversationHistoryCompleteSignal,
  conversationHostIdSignal,
  conversationModeSignal,
  conversationReadStateSignal,
  conversationRequestsSignal,
  conversationRemoteHostIdSignal,
  conversationResumeStateSignal,
  conversationTurnCountSignal,
  conversationTurnsSignal,
  conversationTitleSignal,
  conversationUnreadSignal,
  conversationWorkspaceRootSignal,
  expiredSideChatSignal,
  hasConversationSignal,
  latestConversationTurnSignal,
  localResponseInProgressSignal,
  modelProviderSignal,
  projectlessOutputDirectorySignal,
  refreshConversationHistorySignals,
  responseInProgressSignal,
  shouldResumeConversationSignal,
  storedThreadBranchSignal,
  subagentParentThreadIdSignal,
  threadSourceSignal,
  workspaceRootsSignal,
};

export function initConversationStateRuntime(): void {
  initConversationStateSelectors();
}

export function setConversationSourceContext(
  scope: ConversationSourceScope,
  sourceKind: string,
  sourceId: string,
): void {
  setConversationSourceContextRaw(scope, sourceKind, sourceId);
}
