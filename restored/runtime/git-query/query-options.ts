// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// React Query option builders for Git worker requests.
import { normalizeWorkspacePath } from "../../boundaries/src-l0hb-mz-p";
import {
  initHostRequestRuntime,
  sendHostRequest,
} from "../host-request-runtime";
import {
  initReactQueryRuntimeChunk,
  type QueryOptions,
} from "../query-client/react-query-runtime";
import { createGitOperationQueryKey } from "./query-keys";
import type { GitMetadata, GitQueryOptions, HostConfigWithId } from "./types";

const GIT_METADATA_STALE_TIME = Infinity;
const GIT_METADATA_GC_TIME = 1_800_000;
const GIT_OPERATION_GC_TIME = 30 * 601_000;
const GIT_METADATA_RETRY_DELAY_MS = 1_000;
const GIT_METADATA_RETRY_COUNT = 3;

export function initGitRootQueryRuntime(): void {
  initReactQueryRuntimeChunk();
  initHostRequestRuntime();
}

export function createGitRootQueryOptions<TData = GitMetadata | null>(
  cwd: string | null | undefined,
  hostKey: string,
  hostConfig: HostConfigWithId,
  operationSource: string,
  options: GitQueryOptions<TData> = {},
): QueryOptions<TData> {
  const normalizedCwd = cwd == null ? "" : normalizeWorkspacePath(String(cwd));
  const watchForGitInit = options.watchForGitInit;

  return {
    ...options,
    enabled: (query) =>
      isQueryOptionEnabled(options.enabled, query) && cwd != null,
    gcTime: GIT_METADATA_GC_TIME,
    queryFn: (context) => {
      if (!cwd) return Promise.reject(Error("Missing cwd"));
      return sendHostRequest<TData>("stable-metadata", {
        params: {
          cwd: normalizedCwd,
          hostConfig,
          operationSource,
          watchForGitInit,
        },
        signal: (context as { signal?: AbortSignal }).signal,
        source: operationSource,
      });
    },
    queryKey:
      watchForGitInit == null
        ? ["git", "metadata", hostKey, normalizedCwd]
        : ["git", "metadata", hostKey, normalizedCwd, watchForGitInit],
    retry: (failureCount: number, error: unknown) =>
      isMissingProcessSpawn(error) || isXcodeLicenseAgreementError(error)
        ? false
        : isTransientCwdPermissionError(error) ||
          failureCount < GIT_METADATA_RETRY_COUNT,
    retryDelay: () => GIT_METADATA_RETRY_DELAY_MS,
    staleTime: GIT_METADATA_STALE_TIME,
  } as QueryOptions<TData>;
}

export function createHostQueryOptions<TData = unknown, TResult = TData>(
  method: string,
  metadata: GitMetadata | null | undefined,
  params: Record<string, unknown> | null | undefined,
  hostKey: string,
  hostConfig: HostConfigWithId,
  options: GitQueryOptions<TData, TResult> = {},
): QueryOptions<TData, TResult> {
  return {
    ...options,
    enabled: (query) =>
      metadata != null &&
      params != null &&
      isQueryOptionEnabled(options.enabled, query),
    gcTime: GIT_OPERATION_GC_TIME,
    networkMode: "always",
    queryFn: (context) => {
      if (metadata == null || params == null) {
        return Promise.reject(Error("Missing git metadata"));
      }

      return sendHostRequest<TData>(method, {
        params: {
          ...params,
          hostConfig,
        },
        signal: (context as { signal?: AbortSignal }).signal,
      });
    },
    queryKey:
      metadata != null && params != null
        ? createGitOperationQueryKey(metadata, method, params, hostKey)
        : ["git", "disabled", method],
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
    staleTime: options.staleTime ?? GIT_METADATA_STALE_TIME,
  } as QueryOptions<TData, TResult>;
}

export function isQueryOptionEnabled(
  enabled: GitQueryOptions["enabled"],
  query: unknown,
): boolean {
  return typeof enabled === "function" ? enabled(query) : (enabled ?? true);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function isMissingProcessSpawn(error: unknown): boolean {
  return errorMessage(error).includes("Unknown method: process/spawn");
}

function isXcodeLicenseAgreementError(error: unknown): boolean {
  return errorMessage(error)
    .toLowerCase()
    .includes("you have not agreed to the xcode license agreements");
}

function isTransientCwdPermissionError(error: unknown): boolean {
  const message = errorMessage(error).toLowerCase();
  return (
    message.includes("unable to read current working directory") &&
    (message.includes("operation not permitted") ||
      message.includes("permission denied"))
  );
}
