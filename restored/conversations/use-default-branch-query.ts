// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook reading the default branch query for a working directory / host pair.

import {
  defaultBranchQueryAtom,
  resolveQueryOptions,
  useScopedQuery,
} from "../boundaries/onboarding-commons-externals.facade";

export function useDefaultBranchQuery(
  cwd: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  options?: Record<string, unknown> | null,
) {
  const resolvedOptions = resolveQueryOptions(options, null);
  return useScopedQuery(defaultBranchQueryAtom, {
    cwd: cwd ?? null,
    hostConfig,
    operationSource,
    ...resolvedOptions,
  });
}
