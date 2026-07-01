// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Resolves the { hostId, cwdOverride } pair used to load agent-mode / permission
// settings for the current composer mode. Worktree mode targets the worktree
// environment host; local mode may target a remote host (SSH) when a local
// execution is pinned to a remote project; otherwise the MCP manager host.

export type ComposerMode = "local" | "worktree" | "cloud";

export interface ResolveComposerExecutionTargetInput {
  composerMode: ComposerMode;
  followUpType: "local" | "cloud" | undefined;
  localExecutionRemoteHostId: string | null;
  worktreeExecutionHostId: string | null;
  worktreeExecutionCwd: string | null;
  mcpManagerHostId: string | null;
  currentRemoteCwd: string | null;
}

export interface ComposerExecutionTarget {
  hostId: string;
  cwdOverride: string | null | undefined;
}

export function resolveComposerExecutionTarget({
  composerMode,
  followUpType,
  localExecutionRemoteHostId,
  worktreeExecutionHostId,
  worktreeExecutionCwd,
  mcpManagerHostId,
  currentRemoteCwd,
}: ResolveComposerExecutionTargetInput): ComposerExecutionTarget {
  const isLocalModeOnRemoteHost =
    composerMode === "local" &&
    localExecutionRemoteHostId != null &&
    (followUpType == null ||
      followUpType === "cloud" ||
      mcpManagerHostId === "local");

  if (composerMode === "worktree" && worktreeExecutionHostId != null) {
    return {
      hostId: worktreeExecutionHostId,
      cwdOverride: worktreeExecutionCwd,
    };
  }
  return {
    hostId:
      isLocalModeOnRemoteHost && localExecutionRemoteHostId != null
        ? localExecutionRemoteHostId
        : (mcpManagerHostId ?? "local"),
    cwdOverride: isLocalModeOnRemoteHost ? currentRemoteCwd : undefined,
  };
}
