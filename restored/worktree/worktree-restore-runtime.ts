// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Managed worktree restore mutation and materialization helpers.
import type { ComponentType } from "react";
import {
  appScopeL as createScopedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  ag as initWorktreeCheckMutationRuntimeRaw,
  eg as initWorktreeRestoreMutationRuntimeRaw,
} from "../vendor/projects-app-shared-runtime";
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

export const SummaryPanelBanner = SummaryPanelBannerRaw as ComponentType<
  Record<string, unknown>
>;

export { worktreeStatusQuerySignal, worktreeStatusQueryKey };

type WorktreeStatusQueryData = {
  kind?: string;
} | null;
type WorktreeStatusQueryState = {
  data?: WorktreeStatusQueryData;
  isError?: boolean;
};

export const localWorkspaceMaterializationSignal = createScopedSignalFamily(
  appScopeRoot,
  (conversationId, { get }) => {
    const query = get<WorktreeStatusQueryState | null>(
      worktreeStatusQuerySignal,
      conversationId,
    );
    if (query?.isError) return "unavailable";
    if (query?.data == null) return "loading";
    return query.data.kind ?? "unavailable";
  },
);

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
