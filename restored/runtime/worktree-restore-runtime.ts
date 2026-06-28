// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Managed worktree restore mutation runtime helpers.
import type { ComponentType } from "react";
import {
  ag as initWorktreeCheckMutationRuntimeRaw,
  eg as initWorktreeRestoreMutationRuntimeRaw,
} from "../vendor/appg-thread-shared-runtime";
import {
  $n as initWorktreeStatusQuerySignalChunkRaw,
  Bn as worktreeStatusQuerySignal,
  In as initWorktreeStatusQueryInvalidationChunkRaw,
  Ln as worktreeStatusQueryKey,
  No as getGitMetadataQueryKeyRaw,
  Po as initGitMetadataQueryHelpersChunkRaw,
  Qn as SummaryPanelBannerRaw,
  Rn as checkManagedWorktreeRaw,
} from "../vendor/profile-page-runtime";

export const SummaryPanelBanner =
  SummaryPanelBannerRaw as ComponentType<Record<string, unknown>>;

export { worktreeStatusQuerySignal, worktreeStatusQueryKey };

export function initWorktreeCheckMutationRuntime(): void {
  initWorktreeCheckMutationRuntimeRaw();
}

export function initWorktreeRestoreMutationRuntime(): void {
  initWorktreeRestoreMutationRuntimeRaw();
}

export function initWorktreeStatusQueryRuntime(): void {
  initWorktreeStatusQuerySignalChunkRaw();
  initWorktreeStatusQueryInvalidationChunkRaw();
}

export function initGitMetadataQueryHelpersRuntime(): void {
  initGitMetadataQueryHelpersChunkRaw();
}

export function getGitMetadataQueryKey(hostKey: string): unknown {
  return getGitMetadataQueryKeyRaw(hostKey);
}

export function checkManagedWorktree(
  scope: unknown,
  options: {
    conversationId: string;
    cwd: string;
    hostId: string;
  },
): Promise<unknown> | unknown {
  return checkManagedWorktreeRaw(scope, options);
}
