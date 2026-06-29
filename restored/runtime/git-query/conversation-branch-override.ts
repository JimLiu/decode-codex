// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Best-effort persistence for a conversation's selected Git branch.
import {
  initHostRequestRuntime,
  sendHostRequest,
} from "../host-request-runtime";

export function initConversationBranchOverrideRuntime(): void {
  initHostRequestRuntime();
}

export async function setConversationBranchOverride(
  conversationId: string,
  branch: string | null | undefined,
): Promise<void> {
  if (branch == null || branch.length === 0) return;

  try {
    await sendHostRequest("update-thread-git-branch", {
      params: { conversationId, branch },
    });
  } catch {
    // Matches the bundled runtime: branch override persistence is best effort.
  }
}
