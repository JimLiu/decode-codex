// Restored from ref/.vite/build/worker.js
// Git worker lifecycle, availability checks, and branch metadata handlers.

import { spawnSync } from "node:child_process";
import { accessSync, constants } from "node:fs";
import { posix, win32 } from "node:path";
import type { WorkerFeatureContext } from "./worker-feature-context";
import type {
  WorkerExecutionHostClient,
  WorkerExecutionHostConfig,
} from "./worker-execution-host-client";
import { readBlameFile } from "./git-worker-blame-file";
import {
  readBranchCommits,
  readNearestAncestorBranch,
} from "./git-worker-branch-discovery";
import {
  readBaseBranch,
  readBranchAheadCount,
  readDefaultBranch,
  readUpstreamBranchResult,
} from "./git-worker-branch-base";
import { readBranchMetadata } from "./git-worker-branch-metadata";
import {
  branchExists,
  clampBranchSearchLimit,
  clampRecentBranchLimit,
  readRecentBranches,
  searchBranches,
} from "./git-worker-branch-search";
import { readCatFile } from "./git-worker-cat-file";
import {
  readConfigValueForScope,
  readSubmodulePaths,
  setConfigValueForScope,
} from "./git-worker-config-queries";
import { commitGitChanges } from "./git-worker-commit";
import { readCommitMessageDiff } from "./git-worker-commit-message-diff";
import { readCurrentBranch } from "./git-worker-current-branch";
import { readBranchDiffStats } from "./git-worker-diff-stats";
import { readGitOrigins } from "./git-worker-origin-queries";
import { readStableMetadata } from "./git-worker-repo-queries";
import { initializeGitRepository } from "./git-worker-init-repo";
import { readReviewDiff } from "./git-worker-review/file-diff";
import { readReviewSummary } from "./git-worker-review/metadata";
import { readReviewPatch } from "./git-worker-review/patch";
import { searchReviewDiff } from "./git-worker-review/search";
import { readIndexInfo, readStatusSummary } from "./git-worker-status-queries";
import {
  readSyncedBranch,
  readSyncedBranchDetailedState,
} from "./git-worker-synced-branch";
import { setWorktreeOwnerThread } from "./git-worker-worktree-thread";
import {
  readManagedWorktreeState,
  readWorktreeSnapshotRef,
} from "./git-worker-managed-worktree";
import { resolveWorktreeForThread } from "./git-worker-thread-worktree";
import { listCodexWorktrees, listWorktrees } from "./git-worker-worktrees";
import type { RpcResult } from "./worker-main-rpc-client";
import { toRpcError } from "./worker-runtime-utils";

type GitWorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};

type GitWorkerOutboundMessage =
  | {
      type: "worker-response";
      workerId: string;
      response: { id: string; method: string; result: RpcResult };
    }
  | { type: "worker-event"; workerId: string; event: unknown };

type GitWorkerRequestDispatcherOptions = {
  spawnInsideWsl?: boolean;
};

type GitAvailabilityCacheEntry = {
  key: string;
  expiresAt: number;
  value: boolean;
};

const GIT_UNAVAILABLE_MESSAGE = "Git is unavailable";
const DEFAULT_LOCAL_HOST_CONFIG: WorkerExecutionHostConfig = {
  id: "local",
  display_name: "Local",
  kind: "local",
};
const DEFAULT_WINDOWS_EXECUTABLE_EXTENSIONS = ".COM;.EXE;.BAT;.CMD";
const SYSTEM_MACOS_GIT_PATH = "/usr/bin/git";
const availabilityCacheTtlMs = 10_000;
const gitAllowedWhenUnavailableSources = new Set([
  "async_task_starting_state_dropdown",
  "commit_modal",
  "composer_branch_switcher",
  "composer_worktree_source",
  "create_pull_request_modal",
  "local_conversation_git_actions",
]);
const gitAllowedWhenUnavailableMethods = new Set([
  "git-checkout-branch",
  "git-create-branch",
  "git-init-repo",
]);
const uncancellableGitWorkerMethods = new Set([
  "delete-worktree",
  "dispose-git-init-watch",
  "invalidate-stable-metadata",
  "invalidate-git-read-caches",
  "git-init-repo",
  "cleanup-host-handoff-transfer",
  "watch-repo",
  "unwatch-repo",
]);
let gitAvailabilityCache: GitAvailabilityCacheEntry | null = null;

export class GitWorkerRequestDispatcher {
  private readonly canceledRequests = new Set<string>();
  private readonly inFlightRequests = new Map<string, AbortController>();
  private readonly uncancelableRequestIds = new Set<string>();
  private localGitAvailable: boolean | null = null;

  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: GitWorkerOutboundMessage) => void,
    private readonly featureContext: WorkerFeatureContext,
    private readonly options: GitWorkerRequestDispatcherOptions = {},
  ) {}

  handleRequest(request: GitWorkerRequest): void {
    void this.handleRequestAsync(request);
  }

  handleCancel(requestId: string): void {
    if (this.uncancelableRequestIds.has(requestId)) return;
    const controller = this.inFlightRequests.get(requestId);
    if (controller == null) {
      this.canceledRequests.add(requestId);
      return;
    }
    this.inFlightRequests.delete(requestId);
    controller.abort(createAbortError());
  }

  private async handleRequestAsync(request: GitWorkerRequest): Promise<void> {
    const abortController = new AbortController();
    const params = isRecord(request.params) ? request.params : {};
    const hostConfig = isRecord(params.hostConfig)
      ? (params.hostConfig as WorkerExecutionHostConfig)
      : DEFAULT_LOCAL_HOST_CONFIG;
    const executionHost =
      this.featureContext.git?.createExecutionHost(hostConfig);
    const isCancellable = !uncancellableGitWorkerMethods.has(request.method);

    if (executionHost == null) {
      this.postResponse(
        request,
        toRpcError(
          openRestorationBoundaryError("Git worker dependencies are required"),
        ),
      );
      return;
    }

    if (isCancellable) {
      this.inFlightRequests.set(request.id, abortController);
      if (this.canceledRequests.has(request.id)) {
        this.canceledRequests.delete(request.id);
        abortController.abort(createAbortError());
        this.inFlightRequests.delete(request.id);
        return;
      }
    } else {
      this.uncancelableRequestIds.add(request.id);
      this.canceledRequests.delete(request.id);
    }

    let result: RpcResult;
    try {
      if (
        request.method !== "availability" &&
        executionHost.isLocal &&
        !isAllowedWhenGitUnavailable(request.method, params.operationSource) &&
        !(this.localGitAvailable ??= isGitAvailableForHost({
          env: process.env,
          hostIsLocal: executionHost.isLocal,
          platform: process.platform,
          spawnInsideWsl: this.options.spawnInsideWsl === true,
        }))
      ) {
        throw Error(GIT_UNAVAILABLE_MESSAGE);
      }

      result = await this.dispatchGitRequest(request, {
        available: isGitAvailableForHost({
          env: process.env,
          hostIsLocal: executionHost.isLocal,
          platform: process.platform,
          spawnInsideWsl: this.options.spawnInsideWsl === true,
        }),
        host: executionHost,
        signal: abortController.signal,
      });
    } catch (error) {
      result = fallbackGitErrorResult(request, error);
    } finally {
      if (isCancellable) {
        this.inFlightRequests.delete(request.id);
      } else {
        this.uncancelableRequestIds.delete(request.id);
      }
      this.canceledRequests.delete(request.id);
    }

    if (isCancellable && abortController.signal.aborted) return;
    this.postResponse(request, result);
  }

  private async dispatchGitRequest(
    request: GitWorkerRequest,
    context: {
      available: boolean;
      host: WorkerExecutionHostClient;
      signal: AbortSignal;
    },
  ): Promise<RpcResult> {
    switch (request.method) {
      case "availability":
        this.localGitAvailable = context.available;
        return ok({ available: context.available });
      case "stable-metadata": {
        const params = requireRecordParams(request);
        return ok(
          await readStableMetadata({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "current-branch": {
        const params = requireRecordParams(request);
        return ok({
          branch: await readCurrentBranch(
            context.host,
            requireStringParam(params, "root"),
            context.signal,
          ),
        });
      }
      case "recent-branches": {
        const params = requireRecordParams(request);
        return ok({
          branches: await readRecentBranches({
            host: context.host,
            limit: clampRecentBranchLimit(params.limit),
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "branch-exists": {
        const params = requireRecordParams(request);
        return ok({
          exists: await branchExists({
            branch: requireStringParam(params, "branch"),
            host: context.host,
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "upstream-branch": {
        const params = requireRecordParams(request);
        const root = requireStringParam(params, "root");
        return ok(
          await readUpstreamBranchResult(context.host, root, context.signal),
        );
      }
      case "default-branch": {
        const params = requireRecordParams(request);
        return ok({
          branch: await readDefaultBranch(
            context.host,
            requireStringParam(params, "root"),
            context.signal,
          ),
        });
      }
      case "base-branch": {
        const params = requireRecordParams(request);
        const baseBranch = await readBaseBranch(
          context.host,
          requireStringParam(params, "root"),
          context.signal,
        );
        return ok({
          local: baseBranch?.branch ?? null,
          remote: baseBranch?.remote ?? null,
        });
      }
      case "branch-ahead-count": {
        const params = requireRecordParams(request);
        return ok({
          commitsAhead: await readBranchAheadCount(
            context.host,
            requireStringParam(params, "root"),
            context.signal,
          ),
        });
      }
      case "branch-commits": {
        const params = requireRecordParams(request);
        return ok({
          commits: await readBranchCommits({
            baseBranch: optionalStringParam(params, "baseBranch"),
            host: context.host,
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "search-branches": {
        const params = requireRecordParams(request);
        return ok({
          branches: await searchBranches({
            host: context.host,
            limit: clampBranchSearchLimit(params.limit),
            query: requireStringParam(params, "query", { allowEmpty: true }),
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "nearest-ancestor-branch": {
        const params = requireRecordParams(request);
        return ok({
          branch: await readNearestAncestorBranch({
            candidates: requireStringArrayParam(params, "candidates"),
            currentBranch: optionalStringParam(params, "currentBranch"),
            host: context.host,
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "branch-metadata": {
        const params = requireRecordParams(request);
        return ok(
          await readBranchMetadata({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "branch-diff-stats": {
        const params = requireRecordParams(request);
        return ok(
          await readBranchDiffStats({
            baseBranch: optionalStringParam(params, "baseBranch"),
            cwd: requireStringParam(params, "cwd"),
            hideWhitespace: optionalBooleanParam(params, "hideWhitespace"),
            host: context.host,
            includeUntrackedFiles: params.includeUntrackedFiles !== false,
            signal: context.signal,
          }),
        );
      }
      case "review-summary": {
        const params = requireRecordParams(request);
        return ok(
          await readReviewSummary({
            baseBranch: optionalStringParam(params, "baseBranch"),
            commitSha: optionalStringParam(params, "commitSha"),
            cwd: requireStringParam(params, "cwd"),
            hideWhitespace: optionalBooleanParam(params, "hideWhitespace"),
            host: context.host,
            includeUntrackedFiles: params.includeUntrackedFiles !== false,
            signal: context.signal,
            source: requireReviewSourceParam(params),
          }),
        );
      }
      case "review-diff": {
        const params = requireRecordParams(request);
        return ok(
          await readReviewDiff({
            baseBranch: optionalStringParam(params, "baseBranch"),
            binary: optionalBooleanParam(params, "binary"),
            commitSha: optionalStringParam(params, "commitSha"),
            cwd: requireStringParam(params, "cwd"),
            files: requireReviewFilesParam(params),
            hideWhitespace: optionalBooleanParam(params, "hideWhitespace"),
            host: context.host,
            signal: context.signal,
            source: requireReviewSourceParam(params),
          }),
        );
      }
      case "review-search": {
        const params = requireRecordParams(request);
        return ok(
          await searchReviewDiff({
            baseBranch: optionalStringParam(params, "baseBranch"),
            commitSha: optionalStringParam(params, "commitSha"),
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            query: requireStringParam(params, "query", { allowEmpty: true }),
            signal: context.signal,
            source: requireReviewSourceParam(params),
          }),
        );
      }
      case "review-patch": {
        const params = requireRecordParams(request);
        return ok(
          await readReviewPatch({
            baseBranch: optionalStringParam(params, "baseBranch"),
            commitSha: optionalStringParam(params, "commitSha"),
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
            source: requireReviewSourceParam(params),
          }),
        );
      }
      case "commit-message-diff": {
        const params = requireRecordParams(request);
        return ok(
          await readCommitMessageDiff({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            includeUnstaged: optionalBooleanParam(params, "includeUnstaged"),
            signal: context.signal,
          }),
        );
      }
      case "commit": {
        const params = requireRecordParams(request);
        return ok(
          await commitGitChanges({
            commitAttribution: params.commitAttribution,
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            includeUnstaged: optionalBooleanParam(params, "includeUnstaged"),
            message: requireStringParam(params, "message"),
            signal: context.signal,
          }),
        );
      }
      case "synced-branch": {
        const params = requireRecordParams(request);
        return ok(
          await readSyncedBranch({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "synced-branch-state": {
        const params = requireRecordParams(request);
        return ok(
          await readSyncedBranchDetailedState({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "status-summary": {
        const params = requireRecordParams(request);
        return ok(
          await readStatusSummary({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "submodule-paths": {
        const params = requireRecordParams(request);
        return ok({
          paths: await readSubmodulePaths({
            host: context.host,
            root: requireStringParam(params, "root"),
            signal: context.signal,
          }),
        });
      }
      case "cat-file": {
        const params = requireRecordParams(request);
        return ok(
          await readCatFile({
            cwd: requireStringParam(params, "cwd"),
            fallbackToDisk: optionalBooleanParam(params, "fallbackToDisk"),
            host: context.host,
            oid: optionalStringParam(params, "oid"),
            path: requireStringParam(params, "path", { allowEmpty: true }),
            signal: context.signal,
          }),
        );
      }
      case "blame-file": {
        const params = requireRecordParams(request);
        return ok(
          await readBlameFile({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            path: requireStringParam(params, "path", { allowEmpty: true }),
            signal: context.signal,
          }),
        );
      }
      case "index-info": {
        const params = requireRecordParams(request);
        return ok(
          await readIndexInfo({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "config-value": {
        const params = requireRecordParams(request);
        return ok({
          value: await readConfigValueForScope({
            host: context.host,
            key: requireStringParam(params, "key"),
            root: requireStringParam(params, "root"),
            scope: optionalStringParam(params, "scope"),
            signal: context.signal,
          }),
        });
      }
      case "git-origins": {
        const params = requireRecordParams(request);
        return ok({
          origins: await readGitOrigins({
            dirs: requireStringArrayParam(params, "dirs"),
            host: context.host,
            signal: context.signal,
          }),
        });
      }
      case "set-config-value": {
        const params = requireRecordParams(request);
        return ok({
          success: await setConfigValueForScope({
            host: context.host,
            key: requireStringParam(params, "key"),
            root: requireStringParam(params, "root"),
            scope: optionalStringParam(params, "scope"),
            signal: context.signal,
            value: requireStringParam(params, "value", { allowEmpty: true }),
          }),
        });
      }
      case "git-init-repo": {
        const params = requireRecordParams(request);
        return ok(
          await initializeGitRepository({
            cwd: requireStringParam(params, "cwd", { allowEmpty: true }),
            host: context.host,
            signal: context.signal,
          }),
        );
      }
      case "set-worktree-owner-thread": {
        const params = requireRecordParams(request);
        try {
          await setWorktreeOwnerThread({
            conversationId: requireStringParam(params, "conversationId"),
            host: context.host,
            signal: context.signal,
            worktree: requireStringParam(params, "worktree"),
          });
          return ok({ success: true });
        } catch {
          return rpcError("Failed to set thread worktree owner");
        }
      }
      case "list-worktrees": {
        const params = requireRecordParams(request);
        return ok({
          worktrees: await listWorktrees({
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
          }),
        });
      }
      case "codex-worktrees":
        return ok({
          worktrees: await listCodexWorktrees({
            host: context.host,
            signal: context.signal,
          }),
        });
      case "resolve-worktree-for-thread": {
        const params = requireRecordParams(request);
        return ok(
          await resolveWorktreeForThread({
            conversationId: requireStringParam(params, "conversationId"),
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
            threadCwd: optionalStringParam(params, "threadCwd"),
          }),
        );
      }
      case "worktree-snapshot-ref": {
        const params = requireRecordParams(request);
        return ok(
          await readWorktreeSnapshotRef({
            candidateRoots: requireStringArrayParam(params, "candidateRoots"),
            host: context.host,
            signal: context.signal,
            worktreePath: requireStringParam(params, "worktreePath"),
          }),
        );
      }
      case "managed-worktree-state": {
        const params = requireRecordParams(request);
        return ok(
          await readManagedWorktreeState({
            candidateRoots: requireStringArrayParam(params, "candidateRoots"),
            cwd: requireStringParam(params, "cwd"),
            host: context.host,
            signal: context.signal,
            worktreePath: requireStringParam(params, "worktreePath"),
          }),
        );
      }
    }
    throw openRestorationBoundaryError(
      `Git worker method '${request.method}' remains an open restoration boundary.`,
    );
  }

  private postResponse(request: GitWorkerRequest, result: RpcResult): void {
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: { id: request.id, method: request.method, result },
    });
  }
}

function ok(value: unknown): RpcResult {
  return { type: "ok", value };
}

function rpcError(message: string): RpcResult {
  return { type: "error", error: { message } };
}

function requireRecordParams(
  request: GitWorkerRequest,
): Record<string, unknown> {
  if (isRecord(request.params)) return request.params;
  throw Error(`Git worker method '${request.method}' requires parameters`);
}

function requireStringParam(
  params: Record<string, unknown>,
  key: string,
  options: { allowEmpty?: boolean } = {},
): string {
  const value = params[key];
  if (
    typeof value === "string" &&
    (options.allowEmpty === true || value.length > 0)
  ) {
    return value;
  }
  const requirement =
    options.allowEmpty === true ? "a string" : "a non-empty string";
  throw Error(`Git worker parameter '${key}' must be ${requirement}`);
}

function optionalStringParam(
  params: Record<string, unknown>,
  key: string,
): string | null {
  const value = params[key];
  if (value == null) return null;
  if (typeof value === "string") return value;
  throw Error(`Git worker parameter '${key}' must be a string`);
}

function requireStringArrayParam(
  params: Record<string, unknown>,
  key: string,
): string[] {
  const value = params[key];
  if (Array.isArray(value) && value.every((item) => typeof item === "string")) {
    return value;
  }
  throw Error(`Git worker parameter '${key}' must be a string array`);
}

function optionalBooleanParam(
  params: Record<string, unknown>,
  key: string,
): boolean {
  const value = params[key];
  if (value == null) return false;
  if (typeof value === "boolean") return value;
  throw Error(`Git worker parameter '${key}' must be a boolean`);
}

function requireReviewSourceParam(
  params: Record<string, unknown>,
): "branch" | "commit" | "staged" | "unstaged" {
  const source = params.source;
  if (
    source === "branch" ||
    source === "commit" ||
    source === "staged" ||
    source === "unstaged"
  ) {
    return source;
  }
  throw Error("Git worker parameter 'source' must be a review source");
}

function requireReviewFilesParam(params: Record<string, unknown>): Array<{
  changeKind?:
    | "added"
    | "copied"
    | "deleted"
    | "modified"
    | "renamed"
    | "type-changed"
    | "unmerged"
    | "untracked";
  path: string;
  previousPath?: string | null;
}> {
  const value = params.files;
  if (!Array.isArray(value)) {
    throw Error("Git worker parameter 'files' must be an array");
  }
  return value.map((item) => {
    if (!isRecord(item) || typeof item.path !== "string") {
      throw Error("Git worker review file entries require a path");
    }
    const previousPath = item.previousPath;
    if (previousPath != null && typeof previousPath !== "string") {
      throw Error("Git worker review file previousPath must be a string");
    }
    const changeKind = item.changeKind;
    if (changeKind != null && !isReviewFileChangeKind(changeKind)) {
      throw Error("Git worker review file changeKind is invalid");
    }
    return {
      changeKind,
      path: item.path,
      previousPath,
    };
  });
}

function isReviewFileChangeKind(
  value: unknown,
): value is
  | "added"
  | "copied"
  | "deleted"
  | "modified"
  | "renamed"
  | "type-changed"
  | "unmerged"
  | "untracked" {
  return (
    value === "added" ||
    value === "copied" ||
    value === "deleted" ||
    value === "modified" ||
    value === "renamed" ||
    value === "type-changed" ||
    value === "unmerged" ||
    value === "untracked"
  );
}

function fallbackGitErrorResult(
  request: GitWorkerRequest,
  error: unknown,
): RpcResult {
  if (isGitUnavailableError(error)) {
    if (request.method === "stable-metadata") return ok(null);
    if (request.method === "git-origins") return ok({ origins: [] });
  }
  return toRpcError(error);
}

function isAllowedWhenGitUnavailable(
  method: string,
  operationSource: unknown,
): boolean {
  return (
    gitAllowedWhenUnavailableMethods.has(method) ||
    (typeof operationSource === "string" &&
      gitAllowedWhenUnavailableSources.has(operationSource))
  );
}

function isGitAvailableForHost({
  env,
  hostIsLocal,
  platform,
  spawnInsideWsl,
}: {
  env: NodeJS.ProcessEnv;
  hostIsLocal: boolean;
  platform: NodeJS.Platform;
  spawnInsideWsl: boolean;
}): boolean {
  if (!hostIsLocal) return true;
  if (platform === "win32" && spawnInsideWsl) return true;
  return cachedLocalGitAvailable(env, platform);
}

function cachedLocalGitAvailable(
  env: NodeJS.ProcessEnv,
  platform: NodeJS.Platform,
): boolean {
  const pathValue = getEnvironmentValue(env, "PATH");
  const pathExtValue = getEnvironmentValue(env, "PATHEXT");
  const key = JSON.stringify([pathValue, pathExtValue, platform]);
  const now = Date.now();
  if (
    gitAvailabilityCache != null &&
    gitAvailabilityCache.key === key &&
    gitAvailabilityCache.expiresAt > now
  ) {
    return gitAvailabilityCache.value;
  }
  const value = computeLocalGitAvailable(pathValue, pathExtValue, platform);
  gitAvailabilityCache = {
    key,
    expiresAt: now + availabilityCacheTtlMs,
    value,
  };
  return value;
}

function computeLocalGitAvailable(
  pathValue: string | undefined,
  pathExtValue: string | undefined,
  platform: NodeJS.Platform,
): boolean {
  const gitPath = findGitExecutable(pathValue, pathExtValue, platform);
  if (gitPath == null) return false;
  if (platform !== "darwin") return true;
  return posix.normalize(gitPath) !== SYSTEM_MACOS_GIT_PATH
    ? true
    : readAppleDeveloperDirectory() != null;
}

function findGitExecutable(
  pathValue: string | undefined,
  pathExtValue: string | undefined,
  platform: NodeJS.Platform,
): string | null {
  if (pathValue == null) return null;
  const pathApi = platform === "win32" ? win32 : posix;
  const executableExtensions =
    platform === "win32"
      ? [
          "",
          ...(pathExtValue ?? DEFAULT_WINDOWS_EXECUTABLE_EXTENSIONS).split(";"),
        ]
      : [""];
  for (const rawDirectory of pathValue.split(pathApi.delimiter)) {
    const directory = rawDirectory.trim().replace(/^"|"$/g, "");
    if (directory.length === 0) continue;
    for (const extension of executableExtensions) {
      const candidate = pathApi.join(directory, `git${extension}`);
      try {
        accessSync(
          candidate,
          platform === "win32" ? constants.F_OK : constants.X_OK,
        );
        return candidate;
      } catch {}
    }
  }
  return null;
}

function readAppleDeveloperDirectory(): string | null {
  const result = spawnSync("/usr/bin/xcode-select", ["-p"], {
    encoding: "utf8",
    env: process.env,
    timeout: 1_000,
  });
  const directory = result.stdout?.trim();
  return result.status === 0 && directory ? directory : null;
}

function getEnvironmentValue(
  env: NodeJS.ProcessEnv,
  key: string,
): string | undefined {
  return (
    env[
      Object.keys(env).find(
        (candidate) => candidate.toLowerCase() === key.toLowerCase(),
      ) ?? ""
    ]?.trim() || undefined
  );
}

function openRestorationBoundaryError(message: string): Error {
  return Object.assign(Error(message), { code: "OPEN_RESTORATION_BOUNDARY" });
}

function isGitUnavailableError(error: unknown): boolean {
  return error instanceof Error && error.message === GIT_UNAVAILABLE_MESSAGE;
}

function createAbortError(): Error {
  const error = Error("The operation was aborted");
  error.name = "AbortError";
  return error;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
