// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers that optimistically update cached branch-ahead counts after commit and push.

import { buildBranchAheadCountQueryKey } from "../boundaries/onboarding-commons-externals.facade";

interface QueryClient {
  setQueryData(queryKey: unknown, updater: unknown): void;
  invalidateQueries(filters: { queryKey: unknown }): Promise<void> | void;
}

interface GitMetadata {
  root: string;
  commonDir: string;
}

function adjustBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
  updateCount: (count: number) => number,
): void {
  if (!metadata) {
    return;
  }
  const queryKey = buildBranchAheadCountQueryKey({
    metadata,
    method: "branch-ahead-count",
    params: { operationSource, root: metadata.root },
    hostKey,
  });
  queryClient.setQueryData(
    queryKey,
    (current: { commitsAhead: number } | undefined) =>
      current && {
        ...current,
        commitsAhead: updateCount(current.commitsAhead),
      },
  );
  queryClient.invalidateQueries({ queryKey });
}

export function incrementBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
): void {
  adjustBranchAheadCount(
    queryClient,
    metadata,
    hostKey,
    operationSource,
    (count) => count + 1,
  );
}

export function resetBranchAheadCount(
  queryClient: QueryClient,
  metadata: GitMetadata | null,
  hostKey: unknown,
  operationSource: string,
): void {
  adjustBranchAheadCount(
    queryClient,
    metadata,
    hostKey,
    operationSource,
    () => 0,
  );
}
