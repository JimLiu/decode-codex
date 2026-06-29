// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Host Codex-home and managed worktree path helpers for local conversation surfaces.
import { isPathInCodexWorktree } from "../vendor/worktree-path-runtime";
import {
  Mu as initHostCodexHomeQuery,
  Nu as getHostCodexHome,
} from "../vendor/projects-app-shared-runtime";

export { getHostCodexHome, isPathInCodexWorktree };

export function initHostWorktreeContextRuntime(): void {
  initHostCodexHomeQuery();
}
