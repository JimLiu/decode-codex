// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Query key helpers for repository-scoped Git operations.
import type { GitMetadata, HostConfigWithId } from "./types";

export function getHostCacheKey(hostConfig: HostConfigWithId): string {
  return hostConfig.id;
}

export function createGitRepositoryQueryKey(
  commonDir: string,
  root: string,
  hostKey: string,
) {
  return ["git", hostKey, commonDir, root];
}

export function createGitOperationQueryKey(
  metadata: GitMetadata,
  method: string,
  params: Record<string, unknown>,
  hostKey: string,
) {
  return [
    ...createGitRepositoryQueryKey(metadata.commonDir, metadata.root, hostKey),
    method,
    JSON.stringify(stripOperationSource(params)),
  ];
}

function stripOperationSource(params: Record<string, unknown>) {
  const { operationSource: _operationSource, ...rest } = params;
  return rest;
}
