// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation state selectors shared by local thread modules.
import {
  $p as modelProviderSignal,
  Am as conversationWorkspaceRootSignal,
  Dp as conversationRemoteHostIdSignal,
  Ep as conversationUnreadSignal,
  Em as conversationTurnsSignal,
  Ip as localResponseInProgressSignal,
  Kp as conversationReadStateSignal,
  Np as conversationHistoryCompleteSignal,
  Op as initConversationStateSelectors,
  Rf as workspaceRootsSignal,
  Sm as threadSourceSignal,
  Tp as hasConversationSignal,
  Tm as conversationTurnCountSignal,
  Xp as latestConversationTurnSignal,
  cm as conversationHostIdSignal,
  dp as berryDisplayConversationTurnsSignal,
  gp as conversationCwdSignal,
  jm as conversationModeSignal,
  lm as conversationResumeStateSignal,
  nm as projectlessOutputDirectorySignal,
  pp as shouldResumeConversationSignal,
  sm as conversationRequestsSignal,
  vm as subagentParentThreadIdSignal,
  wp as storedThreadBranchSignal,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export {
  berryDisplayConversationTurnsSignal,
  conversationCwdSignal,
  conversationHistoryCompleteSignal,
  conversationHostIdSignal,
  conversationModeSignal,
  conversationReadStateSignal,
  conversationRequestsSignal,
  conversationRemoteHostIdSignal,
  conversationResumeStateSignal,
  conversationTurnCountSignal,
  conversationTurnsSignal,
  conversationUnreadSignal,
  conversationWorkspaceRootSignal,
  hasConversationSignal,
  latestConversationTurnSignal,
  localResponseInProgressSignal,
  modelProviderSignal,
  projectlessOutputDirectorySignal,
  shouldResumeConversationSignal,
  storedThreadBranchSignal,
  subagentParentThreadIdSignal,
  threadSourceSignal,
  workspaceRootsSignal,
};

export function initConversationStateRuntime(): void {
  initConversationStateSelectors();
}
