// Restored from ref/webview/assets/use-git-recent-branches-C6O5sB4S.js
// Also covers ref/webview/assets/use-git-recent-branches-DVeuba-T.js.
// use-git-recent-branches chunk restored from the Codex webview bundle.
import { useGitRepositoryQuery } from "../boundaries/thread-context-inputs.facade";
type GitRepositoryMetadata = {
  root: string;
};
type GitRecentBranchesResponse = {
  branches: unknown[];
};
type GitRecentBranchesQueryOptions = Record<string, unknown> & {
  limit?: number;
};
export function useGitRecentBranches(
  hostConfig: unknown,
  repositoryMetadata: unknown,
  operationSource: string,
  queryOptions?: GitRecentBranchesQueryOptions,
) {
  const { limit = 100, ...restQueryOptions } = queryOptions ?? {};
  const paramsForRepository = ({ root }: GitRepositoryMetadata) => ({
    operationSource,
    root,
    limit,
  });
  return useGitRepositoryQuery(
    hostConfig,
    repositoryMetadata,
    "recent-branches",
    paramsForRepository,
    operationSource,
    {
      select: selectRecentBranches,
      ...restQueryOptions,
    },
  );
}

export function initUseGitRecentBranchesChunk() {}

function selectRecentBranches(response: GitRecentBranchesResponse): unknown[] {
  return response.branches;
}
