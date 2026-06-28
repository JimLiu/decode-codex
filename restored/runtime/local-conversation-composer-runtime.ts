// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Stable runtime path for local conversation composer helpers.
import { initLocalConversationComposerRuntime as initLocalConversationComposerBridgeRuntime } from "../composer/local-conversation-composer-bridge";
import {
  initWorktreeStatusQueryRuntime,
  localWorkspaceMaterializationSignal,
} from "./worktree-restore-runtime";

export type {
  ThreadComposerFooterProps,
  ThreadComposerFooterSideConversationRequest,
} from "../composer/local-conversation-composer-bridge";
export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  initThreadComposerFooterRuntime,
  LOCAL_HOST_ID,
  threadComposerContext,
  ThreadComposerFooter,
  useLocalConversationComposerRuntime,
} from "../composer/local-conversation-composer-bridge";
export { localWorkspaceMaterializationSignal };

export function initLocalConversationComposerRuntime(): void {
  initLocalConversationComposerBridgeRuntime();
  initWorktreeStatusQueryRuntime();
}
