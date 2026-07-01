// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Review/status summary atoms shared by the local conversation git action flow.

import {
  appStoreScope,
  createComputedQueryAtom,
  createGitQueryOptions,
  createParametricAtom,
  DURATIONS,
  getHostKey,
  gitMetadataFromCwdQuery,
  mapPendingQueryState,
} from "../boundaries/onboarding-commons-externals.facade";
import { aggregateChangedFileSummary } from "./diff-selection-summary";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
}

interface SummarySource extends GitActionContext {
  commonDir: string;
  root: string;
  source: "staged" | "unstaged";
}

export const reviewSummaryQueryFamily = createComputedQueryAtom(
  appStoreScope,
  (source: SummarySource) =>
    createGitQueryOptions(
      "review-summary",
      { commonDir: source.commonDir, root: source.root },
      source.source === "staged"
        ? {
            cwd: source.cwd,
            includeUntrackedFiles: false,
            operationSource: "local_conversation_git_actions",
            source: "staged",
          }
        : {
            cwd: source.cwd,
            operationSource: "local_conversation_git_actions",
            source: "unstaged",
          },
      getHostKey(source.hostConfig),
      source.hostConfig,
      { staleTime: DURATIONS.FIVE_SECONDS },
    ),
);

export const statusSummaryQueryFamily = createComputedQueryAtom(
  appStoreScope,
  (source: { commonDir: string; root: string } & GitActionContext) =>
    createGitQueryOptions(
      "status-summary",
      { commonDir: source.commonDir, root: source.root },
      {
        cwd: source.cwd,
        operationSource: "local_conversation_git_actions",
      },
      getHostKey(source.hostConfig),
      source.hostConfig,
      { staleTime: DURATIONS.FIVE_SECONDS },
    ),
);

export const gitActionMetadataAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(gitMetadataFromCwdQuery, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: "local_conversation_git_actions",
      watchForGitInit: false,
    }),
);

export const gitActionReviewSummaryAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { source: "staged" | "unstaged" },
    { get }: { get: Getter },
  ) => {
    const metadata = get<{ data?: { commonDir: string; root: string } | null }>(
      gitActionMetadataAtom,
      params,
    );
    const gitRoot = metadata.data ?? null;
    return gitRoot == null
      ? mapPendingQueryState(metadata)
      : get(reviewSummaryQueryFamily, {
          commonDir: gitRoot.commonDir,
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          root: gitRoot.root,
          source: params.source,
        });
  },
);

export const gitActionStatusSummaryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) => {
    const metadata = get<{ data?: { commonDir: string; root: string } | null }>(
      gitActionMetadataAtom,
      params,
    );
    const gitRoot = metadata.data ?? null;
    return gitRoot == null
      ? mapPendingQueryState(metadata)
      : get(statusSummaryQueryFamily, {
          commonDir: gitRoot.commonDir,
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          root: gitRoot.root,
        });
  },
);

interface SummaryQueryState {
  data?: { type: "success" | "error" } | unknown;
  isFetching: boolean;
  isLoading: boolean;
}

export const gitActionSelectionSummaryAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { includeUnstaged?: boolean },
    { get }: { get: Getter },
  ) => {
    const stagedSummary = get<SummaryQueryState>(gitActionReviewSummaryAtom, {
      cwd: params.cwd,
      hostConfig: params.hostConfig,
      source: "staged",
    });
    const unstagedSummary = params.includeUnstaged
      ? get<SummaryQueryState>(gitActionReviewSummaryAtom, {
          cwd: params.cwd,
          hostConfig: params.hostConfig,
          source: "unstaged",
        })
      : null;
    const selectionSummary = aggregateChangedFileSummary(
      unstagedSummary == null
        ? [stagedSummary.data as never]
        : [stagedSummary.data as never, unstagedSummary.data as never],
    );
    return {
      hasSelectedChanges: (selectionSummary?.files.length ?? 0) > 0,
      isFetching:
        stagedSummary.isFetching || (unstagedSummary?.isFetching ?? false),
      isLoading:
        stagedSummary.isLoading || (unstagedSummary?.isLoading ?? false),
      isUnavailable:
        (stagedSummary.data as { type?: string })?.type === "error" ||
        (unstagedSummary?.data as { type?: string })?.type === "error",
      selectionSummary,
    };
  },
);
