// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scoped mutation atom for creating a pull request with the GitHub CLI host bridge.

import {
  appStoreScope,
  buildQueryKey,
  createScopedMutationAtom,
  dispatchHostRequest,
  invalidatePullRequestStatus,
  pullRequestStatusAtom,
  recordProductEvent,
  setConversationBranch,
  pullRequestCreatedProductEvent,
} from "../boundaries/onboarding-commons-externals.facade";

interface QueryClient {
  invalidateQueries(filters: { queryKey: unknown }): Promise<void> | void;
}

interface ScopedStore {
  query: { snapshot(atom: unknown, params: unknown): QuerySnapshot };
  queryClient: QueryClient;
}

interface QuerySnapshot {
  cancel(): Promise<void>;
  setData(data: unknown): void;
}

export const createPullRequestMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (
    context: { cwd: string; hostId: string },
    { scope }: { scope: ScopedStore },
  ) => ({
    mutationKey: ["vscode", "gh-pr-create", context.cwd, context.hostId],
    mutationFn: (variables: {
      cwd: string;
      headBranch: string;
      baseBranch: string;
      isDraft?: boolean;
      openInBrowser?: boolean;
      titleOverride?: string | null;
      bodyOverride?: string | null;
      signal?: AbortSignal;
      operationSource: string;
    }) =>
      dispatchHostRequest("gh-pr-create", {
        params: {
          cwd: variables.cwd,
          headBranch: variables.headBranch,
          baseBranch: variables.baseBranch,
          hostId: context.hostId,
          isDraft: variables.isDraft,
          openInBrowser: variables.openInBrowser,
          titleOverride: variables.titleOverride,
          bodyOverride: variables.bodyOverride,
        },
        signal: variables.signal,
        source: variables.operationSource,
      }),
    onSuccess: async (
      result: { status: string; number?: number; url?: string },
      variables: {
        openInBrowser?: boolean;
        cwd: string;
        headBranch: string;
        operationSource: string;
        isDraft?: boolean;
        titleOverride?: string | null;
        bodyOverride?: string | null;
        conversationId?: string | null;
      },
    ) => {
      if (result.status !== "success") {
        invalidatePullRequestStatus(scope, context.hostId);
        return;
      }
      if (variables.openInBrowser === true) {
        return;
      }
      recordProductEvent(scope, pullRequestCreatedProductEvent, {});
      const snapshot = scope.query.snapshot(pullRequestStatusAtom, {
        cwd: variables.cwd,
        headBranch: variables.headBranch,
        hostId: context.hostId,
        operationSource: variables.operationSource,
      });
      await snapshot.cancel();
      snapshot.setData({
        activityItems: [],
        boardItem: null,
        body: variables.bodyOverride?.trim() || "",
        canMerge: false,
        checks: [],
        ciStatus: "pending",
        commentAttachments: [],
        hasOpenPr: true,
        isDraft: variables.isDraft ?? false,
        mergeBlocker: "unknown",
        number: result.number,
        repo: null,
        reviewers: {
          approved: [],
          commentCounts: [],
          commented: [],
          changesRequested: [],
          requested: [],
          requestedTeams: [],
          unresolvedCommentCount: 0,
        },
        reviewStatus: "none",
        status: "success",
        title: variables.titleOverride?.trim() || null,
        url: result.url,
      });
      if (
        variables.conversationId != null &&
        variables.headBranch.trim().length > 0
      ) {
        setConversationBranch(variables.conversationId, variables.headBranch);
      }
    },
    onSettled: (
      _result: unknown,
      _error: unknown,
      variables: {
        signal?: AbortSignal;
        openInBrowser?: boolean;
        cwd: string;
        headBranch: string;
      },
    ) => {
      if (variables.signal?.aborted && variables.openInBrowser !== true) {
        scope.queryClient.invalidateQueries({
          queryKey: buildQueryKey("gh-pr-status", {
            cwd: variables.cwd,
            headBranch: variables.headBranch,
            hostId: context.hostId,
          }),
        });
      }
    },
    networkMode: "always",
  }),
  { excludeFieldsFromKey: ["operationSource"] },
);
