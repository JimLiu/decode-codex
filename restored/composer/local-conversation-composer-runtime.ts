// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation composer runtime bridge and worktree materialization state.
import { initLocalConversationComposerRuntime as initLocalConversationComposerBridgeRuntime } from "./local-conversation-composer-bridge";
import {
  initWorktreeStatusQueryRuntime,
  localWorkspaceMaterializationSignal,
} from "../worktree/worktree-restore-runtime";

export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "./local-conversation-composer-bridge";
export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  initThreadComposerFooterRuntime,
  LOCAL_HOST_ID,
  threadComposerContext,
  ThreadComposerFooter,
  useLocalConversationComposerRuntime,
} from "./local-conversation-composer-bridge";
export { localWorkspaceMaterializationSignal };

export function initLocalConversationComposerRuntime(): void {
  initLocalConversationComposerBridgeRuntime();
  initWorktreeStatusQueryRuntime();
}
