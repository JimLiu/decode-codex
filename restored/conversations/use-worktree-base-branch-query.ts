// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook reading the worktree base-branch query for a working directory / host pair.

import {
  resolveQueryOptions,
  useScopedQuery,
  worktreeBaseBranchQueryAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export function useWorktreeBaseBranchQuery(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  options?: Record<string, unknown> | null,
) {
  const resolvedOptions = resolveQueryOptions(options, null);
  return useScopedQuery(worktreeBaseBranchQueryAtom, {
    cwd: cwd ?? null,
    hostConfig,
    operationSource,
    ...resolvedOptions,
  });
}
