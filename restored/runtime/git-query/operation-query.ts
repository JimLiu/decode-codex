// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Git operation query hook and cache invalidation helpers.
import {
  useQuery,
  type QueryResult,
  type RuntimeQueryClient,
} from "../query-client/react-query-runtime";
import { createGitRepositoryQueryKey, getHostCacheKey } from "./query-keys";
import {
  createGitRootQueryOptions,
  createHostQueryOptions,
} from "./query-options";
import type {
  GitChangeType,
  GitMetadata,
  GitQueryOptions,
  HostConfigWithId,
} from "./types";

const GIT_CHANGE_INVALIDATION_METHODS: Record<
  GitChangeType,
  readonly string[]
> = {
  config: [
    "upstream-branch",
    "default-branch",
    "base-branch",
    "branch-metadata",
    "branch-diff-stats",
    "review-summary",
    "review-diff",
  ],
  head: [
    "current-branch",
    "recent-branches",
    "branch-metadata",
    "branch-diff-stats",
    "review-summary",
    "review-diff",
    "status-summary",
  ],
  "synced-branch": [
    "synced-branch",
    "branch-metadata",
    "branch-diff-stats",
    "review-summary",
    "review-diff",
    "status-summary",
  ],
  "working-tree": [
    "branch-diff-stats",
    "review-summary",
    "review-diff",
    "status-summary",
  ],
};

export function useGitOperationQuery<TData = unknown, TResult = TData>(
  cwd: string | null | undefined,
  hostConfig: HostConfigWithId,
  method: string,
  params:
    | Record<string, unknown>
    | ((metadata: GitMetadata) => Record<string, unknown> | null),
  operationSource: string,
  options: GitQueryOptions<TData, TResult> = {},
): QueryResult<TResult> {
  const hostKey = getHostCacheKey(hostConfig);
  const metadataQuery = useQuery<GitMetadata | null>(
    createGitRootQueryOptions(cwd, hostKey, hostConfig, operationSource, {
      enabled: options.enabled !== false,
      watchForGitInit: options.watchForGitInit,
    }),
  );
  const metadata = metadataQuery.data ?? null;
  const requestParams =
    metadata == null
      ? null
      : typeof params === "function"
        ? params(metadata)
        : params;

  return useQuery<TData, TResult>(
    createHostQueryOptions(
      method,
      metadata,
      requestParams,
      hostKey,
      hostConfig,
      options,
    ),
  );
}

export function updateGitMetadataCache(
  queryClient: Pick<RuntimeQueryClient, "invalidateQueries">,
  metadata: GitMetadata,
  {
    cancelRefetch = true,
    changeType,
    hostKey,
    invalidateBranchDiffStats = true,
    invalidateStatusSummary = true,
  }: {
    cancelRefetch?: boolean;
    changeType: GitChangeType;
    hostKey: string;
    invalidateBranchDiffStats?: boolean;
    invalidateStatusSummary?: boolean;
  },
): Promise<unknown[]> {
  const methods = GIT_CHANGE_INVALIDATION_METHODS[changeType].filter(
    (method) =>
      !(
        (!invalidateBranchDiffStats && method === "branch-diff-stats") ||
        (!invalidateStatusSummary && method === "status-summary")
      ),
  );

  return Promise.all(
    methods.map((method) =>
      queryClient.invalidateQueries?.(
        {
          queryKey: [
            ...createGitRepositoryQueryKey(
              metadata.commonDir,
              metadata.root,
              hostKey,
            ),
            method,
          ],
        },
        { cancelRefetch },
      ),
    ),
  );
}
