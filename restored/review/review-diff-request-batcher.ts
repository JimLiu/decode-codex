// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Coalesces per-file review-diff requests that share the same repo/source/options into
// a single batched "review-diff" RPC, with abort-listener wiring and a per-batch timeout.

import {
  getHostKey,
  getRpcClient,
  createRequestAbortedError,
  normalizeRequestCwd,
} from "../boundaries/onboarding-commons-externals.facade";

type ReviewDiffSource = "branch" | "commit" | "unstaged" | "staged";

interface ReviewDiffSuccessResult {
  type: "success";
  diff: string;
}

type ReviewDiffResult =
  | ReviewDiffSuccessResult
  | { type: "error"; [key: string]: unknown };

interface ReviewFilePathRequest {
  changeKind: string;
  disposeAbortListener: () => void;
  previousPath: string | null;
  reject: (reason?: unknown) => void;
  resolve: (value: ReviewDiffResult) => void;
}

interface PendingReviewDiffBatch {
  abortControllers: Set<AbortController> | null;
  baseBranch: string | null;
  commitSha: string | null;
  cwd: string;
  hideWhitespace: boolean;
  hostConfig: unknown;
  paths: Map<string, ReviewFilePathRequest>;
  requestKey: string;
  source: ReviewDiffSource;
}

interface ReviewDiffFileSpec {
  path: string;
  changeKind: string;
  previousPath?: string;
}

const pendingBatchesByKey = new Map<string, PendingReviewDiffBatch>();
const LOAD_FAILED_ERROR_MESSAGE = "load-failed";
const REVIEW_DIFF_TIMEOUT_MS = 15000;
const TIMED_OUT_ERROR_MESSAGE = "timed-out";

export function requestReviewFileDiff({
  baseBranch,
  changeKind,
  commitSha = null,
  cwd,
  hostConfig,
  hideWhitespace,
  path,
  previousPath,
  signal,
  source,
}: {
  baseBranch: string | null;
  changeKind: string;
  commitSha?: string | null;
  cwd: string;
  hostConfig: unknown;
  hideWhitespace: boolean;
  path: string;
  previousPath?: string | null;
  signal?: AbortSignal;
  source: ReviewDiffSource;
}): Promise<ReviewDiffResult> {
  if (signal?.aborted) return Promise.reject(createRequestAbortedError());
  return new Promise<ReviewDiffResult>((resolve, reject) => {
    const requestKey = `${getHostKey(hostConfig)}:${cwd}:${source}:${baseBranch ?? ""}:${commitSha ?? ""}:${hideWhitespace}`;
    const batch: PendingReviewDiffBatch = pendingBatchesByKey.get(
      requestKey,
    ) ?? {
      abortControllers: null,
      baseBranch,
      commitSha,
      cwd,
      hideWhitespace,
      hostConfig,
      paths: new Map(),
      requestKey,
      source,
    };
    const pathRequest: ReviewFilePathRequest = {
      changeKind,
      disposeAbortListener: () => {},
      previousPath: previousPath ?? null,
      reject,
      resolve,
    };
    pathRequest.disposeAbortListener = attachAbortListener({
      abortPathRequest: () => {
        abortPathRequest({ path, batch, pathRequest });
      },
      signal,
    });
    const existing = batch.paths.get(path);
    if (existing != null) {
      existing.disposeAbortListener();
      existing.reject(createRequestAbortedError());
    }
    batch.paths.set(path, pathRequest);
    if (!pendingBatchesByKey.has(requestKey)) {
      pendingBatchesByKey.set(requestKey, batch);
      queueMicrotask(() => {
        queueMicrotask(() => {
          if (pendingBatchesByKey.get(requestKey) === batch)
            flushReviewDiffBatch(requestKey);
        });
      });
    }
  });
}

function partitionTrackedUntracked(
  files: ReviewDiffFileSpec[],
): ReviewDiffFileSpec[][] {
  return [
    files.filter((file) => file.changeKind !== "untracked"),
    files.filter((file) => file.changeKind === "untracked"),
  ].filter((group) => group.length > 0);
}

function attachAbortListener({
  abortPathRequest: onAbort,
  signal,
}: {
  abortPathRequest: () => void;
  signal?: AbortSignal;
}): () => void {
  if (signal == null) return () => {};
  signal.addEventListener("abort", onAbort, { once: true });
  return () => {
    signal.removeEventListener("abort", onAbort);
  };
}

function abortPathRequest({
  path,
  pathRequest,
  batch,
}: {
  path: string;
  pathRequest: ReviewFilePathRequest;
  batch: PendingReviewDiffBatch;
}): void {
  if (
    batch.paths.get(path) === pathRequest &&
    (pathRequest.disposeAbortListener(),
    batch.paths.delete(path),
    pathRequest.reject(createRequestAbortedError()),
    !(batch.paths.size > 0))
  ) {
    if (batch.abortControllers != null) {
      for (const controller of batch.abortControllers) controller.abort();
      return;
    }
    pendingBatchesByKey.delete(batch.requestKey);
  }
}

async function flushReviewDiffBatch(requestKey: string): Promise<void> {
  const batch = pendingBatchesByKey.get(requestKey);
  if (
    batch == null ||
    (pendingBatchesByKey.delete(requestKey), batch.paths.size === 0)
  )
    return;
  const abortControllers = new Set<AbortController>();
  batch.abortControllers = abortControllers;
  try {
    const fileGroups = partitionTrackedUntracked(
      [...batch.paths.entries()].map(([path, request]) => ({
        path,
        changeKind: request.changeKind,
        previousPath: request.previousPath ?? undefined,
      })),
    );
    await Promise.allSettled(
      fileGroups.map(async (files) => {
        const controller = new AbortController();
        let timeoutId: ReturnType<typeof setTimeout> | null = null;
        abortControllers.add(controller);
        try {
          resolvePendingDiffs({
            diffs: (
              await Promise.race([
                getRpcClient("git").request({
                  method: "review-diff",
                  params: {
                    ...buildReviewDiffRequestParams({
                      cwd: batch.cwd,
                      hideWhitespace: batch.hideWhitespace,
                      source: batch.source,
                      baseBranch: batch.baseBranch,
                      commitSha: batch.commitSha,
                    }),
                    files,
                    hostConfig: batch.hostConfig,
                    operationSource: "review_model",
                  },
                  signal: controller.signal,
                }),
                new Promise<never>((_resolve, rejectRace) => {
                  timeoutId = setTimeout(() => {
                    rejectRace(Error(TIMED_OUT_ERROR_MESSAGE));
                    controller.abort();
                  }, REVIEW_DIFF_TIMEOUT_MS);
                }),
              ])
            ).diffs,
            files,
            hideWhitespace: batch.hideWhitespace,
            batch,
          });
        } catch (error) {
          rejectPendingDiffs({
            error: error instanceof Error ? error : Error(String(error)),
            files,
            batch,
          });
        } finally {
          if (timeoutId != null) clearTimeout(timeoutId);
          abortControllers.delete(controller);
        }
      }),
    );
  } finally {
    for (const [, request] of batch.paths) request.disposeAbortListener();
    batch.abortControllers = null;
    batch.paths.clear();
  }
}

function resolvePendingDiffs({
  diffs,
  files,
  hideWhitespace,
  batch,
}: {
  diffs: Record<string, ReviewDiffResult | undefined>;
  files: ReviewDiffFileSpec[];
  hideWhitespace: boolean;
  batch: PendingReviewDiffBatch;
}): void {
  for (const file of files) {
    const pathRequest = batch.paths.get(file.path);
    const diff = diffs[file.path];
    if (pathRequest != null) {
      if (
        diff?.type === "success" &&
        (diff.diff.trim().length > 0 || hideWhitespace)
      ) {
        pathRequest.resolve(diff);
        continue;
      }
      pathRequest.reject(Error(LOAD_FAILED_ERROR_MESSAGE));
    }
  }
}

function rejectPendingDiffs({
  error,
  files,
  batch,
}: {
  error: Error;
  files: ReviewDiffFileSpec[];
  batch: PendingReviewDiffBatch;
}): void {
  for (const file of files) batch.paths.get(file.path)?.reject(error);
}

function buildReviewDiffRequestParams({
  baseBranch,
  commitSha,
  cwd,
  hideWhitespace,
  source,
}: {
  baseBranch: string | null;
  commitSha: string | null;
  cwd: string;
  hideWhitespace: boolean;
  source: ReviewDiffSource;
}): Record<string, unknown> {
  return {
    cwd: normalizeRequestCwd(cwd),
    ...(hideWhitespace ? { hideWhitespace } : {}),
    source,
    ...(source === "branch" && baseBranch != null ? { baseBranch } : {}),
    ...(source === "commit" && commitSha != null ? { commitSha } : {}),
  };
}
