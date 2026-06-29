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
import {
  readBranchCommits,
  readNearestAncestorBranch,
} from "./git-worker-branch-discovery";
import {
  clampBranchSearchLimit,
  searchBranches,
} from "./git-worker-branch-search";
import { readCatFile } from "./git-worker-cat-file";
import {
  readConfigValueForScope,
  readSubmodulePaths,
} from "./git-worker-config-queries";
import { readGitOrigins } from "./git-worker-origin-queries";
import { readStableMetadata } from "./git-worker-repo-queries";
import { readIndexInfo, readStatusSummary } from "./git-worker-status-queries";
import { runGitCommand } from "./git-worker-commands";
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

async function readCurrentBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  const branchResult = await runGitCommand({
    args: ["rev-parse", "--abbrev-ref", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  if (
    branchResult.success &&
    branchResult.stdout &&
    branchResult.stdout !== "HEAD"
  ) {
    return branchResult.stdout;
  }

  const symbolicHeadResult = await runGitCommand({
    args: ["symbolic-ref", "--quiet", "--short", "HEAD"],
    cwd: root,
    host,
    signal,
  });
  return symbolicHeadResult.success && symbolicHeadResult.stdout
    ? symbolicHeadResult.stdout
    : null;
}

async function readRecentBranches({
  host,
  limit,
  root,
  signal,
}: {
  host: WorkerExecutionHostClient;
  limit: number;
  root: string;
  signal: AbortSignal;
}): Promise<string[]> {
  const result = await runGitCommand({
    args: [
      "for-each-ref",
      `--count=${limit}`,
      "--sort=-committerdate",
      "refs/heads",
      "--format=%(refname:short)",
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout
    ? result.stdout
        .split("\n")
        .map((branch) => branch.trim())
        .filter((branch) => branch.length > 0)
    : [];
}

async function branchExists({
  branch,
  host,
  root,
  signal,
}: {
  branch: string;
  host: WorkerExecutionHostClient;
  root: string;
  signal: AbortSignal;
}): Promise<boolean> {
  const result = await runGitCommand({
    args: ["show-ref", "--verify", "--quiet", gitBranchRef(branch)],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.code === 0;
}

async function readUpstreamBranchResult(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<{ branch: string | null; upstream: { branch: string } | null }> {
  const branch = await readCurrentBranch(host, root, signal);
  const upstreamBranch = await readUpstreamBranch(
    host,
    root,
    branch ?? "HEAD",
    signal,
  );
  return upstreamBranch
    ? { branch, upstream: { branch: upstreamBranch } }
    : { branch, upstream: null };
}

async function readDefaultBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string | null> {
  return (
    (await readBaseBranch(host, root, signal))?.branch ??
    (await readRecentBranches({ host, limit: 10, root, signal })).find(
      (branch) => branch === "main" || branch === "master",
    ) ??
    null
  );
}

async function readBaseBranch(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<{ remote: string; branch: string } | null> {
  const remotes = await readOrderedRemotes(host, root, signal);
  for (const remote of remotes) {
    const defaultBranch = await readRemoteDefaultBranch(
      host,
      root,
      remote,
      signal,
    );
    if (defaultBranch != null) return { remote, branch: defaultBranch };

    const fallbackBranch = await readFirstExistingRemoteBranch(
      host,
      root,
      remote,
      ["main", "master"],
      signal,
    );
    if (fallbackBranch != null) return { remote, branch: fallbackBranch };
  }
  return null;
}

async function readBranchAheadCount(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<number> {
  const baseBranch = await readBaseBranch(host, root, signal);
  const remotes = await readOrderedRemotes(host, root, signal);
  const remote = baseBranch?.remote ?? remotes[0] ?? null;
  const currentBranch = await readCurrentBranch(host, root, signal);
  const upstreamBranch = await readUpstreamBranch(
    host,
    root,
    currentBranch ?? "HEAD",
    signal,
  );

  const [aheadOfUpstream, aheadOfRemote, aheadOfBase] = await Promise.all([
    upstreamBranch == null
      ? Promise.resolve(0)
      : readCommitCount(host, root, [`${upstreamBranch}..HEAD`], signal).then(
          (count) => count ?? 0,
        ),
    remote == null
      ? Promise.resolve(null)
      : readCommitCount(
          host,
          root,
          ["HEAD", "--not", `--remotes=${remote}`],
          signal,
        ),
    (async () => {
      if (baseBranch == null) return 0;
      const candidate = baseBranch.branch.includes("/")
        ? baseBranch.branch
        : remote != null
          ? `${remote}/${baseBranch.branch}`
          : baseBranch.branch;
      const mergeBase = await readHeadMergeBase(host, root, candidate, signal);
      return mergeBase == null
        ? 0
        : ((await readCommitCount(
            host,
            root,
            [`${mergeBase}..HEAD`],
            signal,
          )) ?? 0);
    })(),
  ]);

  if (aheadOfRemote == null) {
    return upstreamBranch != null ? aheadOfUpstream : aheadOfBase;
  }
  return aheadOfRemote;
}

async function readUpstreamBranch(
  host: WorkerExecutionHostClient,
  root: string,
  branch: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: [
      "rev-parse",
      "--abbrev-ref",
      "--symbolic-full-name",
      `${branch}@{u}`,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.success && result.stdout ? result.stdout : null;
}

async function readOrderedRemotes(
  host: WorkerExecutionHostClient,
  root: string,
  signal: AbortSignal,
): Promise<string[]> {
  const result = await runGitCommand({
    args: ["remote"],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return [];
  const remotes = result.stdout
    .split("\n")
    .map((remote) => remote.trim())
    .filter((remote) => remote.length > 0);
  return remotes.includes("origin") && remotes.length > 1
    ? ["origin", ...remotes.filter((remote) => remote !== "origin")]
    : remotes;
}

async function readRemoteDefaultBranch(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  signal: AbortSignal,
): Promise<string | null> {
  const locallyKnownResult = await runGitCommand({
    args: ["symbolic-ref", "--quiet", `refs/remotes/${remote}/HEAD`],
    cwd: root,
    host,
    signal,
  });
  if (locallyKnownResult.success && locallyKnownResult.stdout) {
    const parts = locallyKnownResult.stdout.split("/");
    return parts[parts.length - 1] ?? null;
  }

  const remoteShowResult = await runGitCommand({
    args: ["remote", "show", remote],
    cwd: root,
    host,
    signal,
    timeoutMs: 10_000,
  });
  if (!remoteShowResult.success || !remoteShowResult.stdout) return null;
  const branch = /HEAD branch:\s*(.+)/
    .exec(remoteShowResult.stdout)?.[1]
    .trim();
  return branch == null || branch === "(unknown)" ? null : branch;
}

async function readFirstExistingRemoteBranch(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  branches: string[],
  signal: AbortSignal,
): Promise<string | null> {
  for (const branch of branches) {
    const exists = await remoteBranchExists(host, root, remote, branch, signal);
    if (exists) return branch;
  }
  return null;
}

async function remoteBranchExists(
  host: WorkerExecutionHostClient,
  root: string,
  remote: string,
  branch: string,
  signal: AbortSignal,
): Promise<boolean> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1],
    args: [
      "show-ref",
      "--verify",
      "--quiet",
      `refs/remotes/${remote}/${branch}`,
    ],
    cwd: root,
    host,
    signal,
  });
  return result.code === 0;
}

async function readHeadMergeBase(
  host: WorkerExecutionHostClient,
  root: string,
  ref: string,
  signal: AbortSignal,
): Promise<string | null> {
  const resolvedRef = await resolveGitRef(host, root, ref, signal);
  if (resolvedRef == null) return null;
  const result = await runGitCommand({
    args: ["merge-base", "HEAD", ref],
    cwd: root,
    host,
    signal,
  });
  return result.success && isGitSha(result.stdout) ? result.stdout : null;
}

async function resolveGitRef(
  host: WorkerExecutionHostClient,
  root: string,
  ref: string,
  signal: AbortSignal,
): Promise<string | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-parse", "--verify", "--quiet", ref],
    cwd: root,
    host,
    signal,
  });
  return result.success && isGitSha(result.stdout) ? result.stdout : null;
}

async function readCommitCount(
  host: WorkerExecutionHostClient,
  root: string,
  args: string[],
  signal: AbortSignal,
): Promise<number | null> {
  const result = await runGitCommand({
    allowedNonZeroExitCodes: [1, 128],
    args: ["rev-list", "--count", ...args],
    cwd: root,
    host,
    signal,
  });
  if (!result.success || !result.stdout) return null;
  const count = Number.parseInt(result.stdout, 10);
  return Number.isNaN(count) ? null : count;
}

function isGitSha(value: string): boolean {
  return /^[0-9a-f]{7,40}$/i.test(value.trim());
}

function gitBranchRef(branch: string): string {
  return branch.startsWith("refs/") ? branch : `refs/heads/${branch}`;
}

function clampRecentBranchLimit(value: unknown): number {
  const limit =
    typeof value === "number" && Number.isFinite(value) ? value : 10;
  return Math.max(1, Math.min(Math.trunc(limit), 100));
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
