// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Git and host workspace query runtime helpers.
import {
  Au as initOsInfoQueryRaw,
  Hh as initGitQueryKeyHelpersRaw,
  Nh as initGitBranchQueryRuntimeRaw,
  Uh as useGitAvailabilityQueryRaw,
} from "../vendor/projects-app-shared-runtime";

export type GitAvailabilityQueryResult<TResult = unknown> = {
  data?: TResult;
  error?: unknown;
  isFetching?: boolean;
  isLoading?: boolean;
};

export function initOsInfoQueryRuntime(): void {
  initOsInfoQueryRaw();
}

export function initGitQueryKeyHelpers(): void {
  initGitQueryKeyHelpersRaw();
}

export function initGitBranchQueryRuntime(): void {
  initGitBranchQueryRuntimeRaw();
}

// Current bj5tp28r Uf is a CodexAppshotCaptureStarted event descriptor, not the
// old workspace-query initializer alias.
export function initHostWorkspaceQueries(): void {}

export function useGitAvailabilityQuery<TResult = unknown>(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  options?: unknown,
): GitAvailabilityQueryResult<TResult> {
  return useGitAvailabilityQueryRaw(
    cwd,
    hostConfig,
    operationSource,
    options,
  ) as GitAvailabilityQueryResult<TResult>;
}
