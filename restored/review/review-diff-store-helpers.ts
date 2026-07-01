// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure helper functions and constants for review diff store query construction.

import nodePath from "node:path";
import {
  isDeepEqual,
  joinPath,
  normalizeRequestCwd,
  parseUnifiedDiff,
} from "../boundaries/onboarding-commons-externals.facade";
import { formatBranchRef } from "./review-diff-model";
import type {
  GitMetadata,
  QueryResult,
  ReviewDiffFilter,
  ReviewSummaryRequestInput,
} from "./review-diff-store-types";

export const MAX_REVIEW_DIFF_RETRIES = 3;
export const REVIEW_DIFF_RETRY_BASE_MS = 300;
export const REVIEW_SUMMARY_ERROR_REFETCH_MS = 1000;
export const RECENT_BRANCHES_LIMIT = 30;
export const REVIEW_SUMMARY_FAILED_ERROR = Error("Review summary failed");

export function isIndexDiffFilter(filter: ReviewDiffFilter): boolean {
  return filter === "staged" || filter === "unstaged";
}

export function mergeQueryResults<TData>(
  primary: QueryResult,
  secondary: QueryResult,
  data: TData | null | undefined,
  error: unknown = null,
): QueryResult<TData> {
  const isFetching = primary.isFetching || secondary.isFetching;
  const isPending =
    primary.isPending ||
    (!primary.isError && data === undefined && secondary.isPending);
  return {
    ...primary,
    data: data ?? undefined,
    dataUpdatedAt: Math.max(primary.dataUpdatedAt, secondary.dataUpdatedAt),
    error: primary.error ?? secondary.error ?? error,
    isError: primary.isError || secondary.isError || error != null,
    isFetching,
    isLoading: isPending && isFetching,
    isPending,
    refetch: async (options?: unknown) => {
      const [, secondaryResult] = await Promise.all([
        primary.refetch(options),
        secondary.refetch(options),
      ]);
      return secondaryResult;
    },
  };
}

export function buildReviewSummaryQueryParams({
  cwd,
  hideWhitespace,
  source,
  baseBranch,
  commitSha,
}: ReviewSummaryRequestInput): Record<string, unknown> {
  return {
    cwd: normalizeRequestCwd(cwd),
    ...(hideWhitespace ? { hideWhitespace } : {}),
    operationSource: "review_model",
    source,
    ...(source === "branch" && baseBranch != null ? { baseBranch } : {}),
    ...(source === "commit" && commitSha != null ? { commitSha } : {}),
  };
}

export function resolveReviewBaseBranch(
  branchRef: { local: string | null; remote: string | null } | null,
  override: string | null = null,
): string | null {
  return override ?? formatBranchRef(branchRef);
}

export function toRepoRelativePaths({
  cwd,
  gitRoot,
  paths,
}: {
  cwd: string | null;
  gitRoot: string | null;
  paths: string[];
}): string[] {
  if (cwd == null || gitRoot == null) return [];
  const base = joinPath("", gitRoot);
  return [
    ...new Set(
      paths.flatMap((path) => {
        if (path === "") return [];
        const relative = nodePath.relative(base, joinPath(cwd, path));
        return relative === "" ||
          relative === ".." ||
          relative.startsWith("../")
          ? []
          : [relative];
      }),
    ),
  ];
}

export function parseReviewDiff(diffText: string | null | undefined): {
  diff: unknown;
  diffText: string | null;
  diffBytes: number | null;
  diffError: null;
} {
  return diffText == null || diffText.trim() === ""
    ? { diff: null, diffText: null, diffBytes: null, diffError: null }
    : {
        diff: parseUnifiedDiff(diffText),
        diffText,
        diffBytes: new TextEncoder().encode(diffText).length,
        diffError: null,
      };
}

export function shouldRetryReviewDiff(
  attempt: number,
  error: { name: string },
): boolean {
  return error.name !== "AbortError" && attempt < MAX_REVIEW_DIFF_RETRIES;
}

export function reviewDiffRetryDelay(attempt: number): number {
  return Math.min(REVIEW_DIFF_RETRY_BASE_MS * 2 ** attempt, 2000);
}

export function queryKeysShareBaseExceptLast(a: unknown[], b: unknown[]) {
  return (
    a.length > 0 &&
    a.length === b.length &&
    isDeepEqual(a.slice(0, -1), b.slice(0, -1))
  );
}

export function buildReviewSummaryParams({
  baseBranch,
  commitSha,
  cwd,
  enabled,
  hideWhitespace,
  hostConfig,
  metadata,
  source,
}: {
  baseBranch: string | null;
  commitSha: string | null;
  cwd: string | null;
  enabled: boolean;
  hideWhitespace: boolean;
  hostConfig: unknown;
  metadata: GitMetadata | null;
  source: ReviewDiffFilter | null;
}) {
  return metadata == null || cwd == null || source == null
    ? null
    : {
        baseBranch,
        commitSha,
        commonDir: metadata.commonDir,
        cwd,
        enabled,
        hideWhitespace,
        hostConfig,
        root: metadata.root,
        source,
      };
}
