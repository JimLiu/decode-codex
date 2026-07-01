// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Resolves the effective composer mode from the requested mode plus the computed
// availability (local/worktree/cloud) and cloud access. While availability is
// still loading the requested mode is kept; an unavailable mode falls back.
// Pure function (no React state) despite the hook-shaped name.

export type ComposerMode = "local" | "worktree" | "cloud";

export interface UseComposerModeInput {
  composerMode: ComposerMode;
  cloudAccess: string | null | undefined;
  fallbackMode: ComposerMode;
  isAvailabilityLoading: boolean;
  isCloudAvailable: boolean;
  isLocalAvailable: boolean;
  isWorktreeAvailable: boolean;
}

export function useComposerMode({
  composerMode,
  cloudAccess,
  fallbackMode,
  isAvailabilityLoading,
  isCloudAvailable,
  isLocalAvailable,
  isWorktreeAvailable,
}: UseComposerModeInput): ComposerMode {
  if (composerMode === "cloud" && cloudAccess !== "enabled")
    return fallbackMode;
  if (isAvailabilityLoading) return composerMode;
  switch (composerMode) {
    case "cloud":
      return isCloudAvailable ? "cloud" : fallbackMode;
    case "local":
      return isLocalAvailable ? "local" : fallbackMode;
    case "worktree":
      return isWorktreeAvailable ? "worktree" : fallbackMode;
    default:
      return fallbackMode;
  }
}
