// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Default-branch, current-branch, pull-request status, and branch-mismatch atoms
// for local conversation git actions.

import {
  appStoreScope,
  createCwdQueryAtomFamily,
  createParametricAtom,
  currentBranchQueryAtom,
  hasOpenPullRequestAtom,
  pullRequestStatusForBranchAtom,
  pushStatusAtom,
  storedThreadBranchAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { buildPullRequestStatusParams } from "./git-action-blocked-reasons";
import { LOCAL_GIT_ACTION_OPERATION_SOURCE } from "./git-action-workflow-types";

type Getter = <TValue>(atom: unknown, params?: unknown) => TValue;

export interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
  codexWorktree?: boolean;
}

export const defaultBranchFromCwdQueryFamily = createCwdQueryAtomFamily({
  method: "default-branch",
  getParams: (params: { operationSource: string; root: string }) => ({
    operationSource: params.operationSource,
    root: params.root,
  }),
  getOptions: (params: {
    refetchOnWindowFocus?: boolean | "always";
    staleTime?: number | null;
  }) => ({
    refetchOnWindowFocus: params.refetchOnWindowFocus,
    select: (response: { branch: string | null }) => response.branch,
    ...(params.staleTime == null ? {} : { staleTime: params.staleTime }),
  }),
});

export const conversationDefaultBranchAtom =
  defaultBranchFromCwdQueryFamily.fromCwd$;

export function computeBranchMismatch({
  currentBranch,
  storedThreadBranch,
}: {
  currentBranch?: string | null;
  storedThreadBranch?: string | null;
}): {
  currentBranchName: string;
  hasThreadBranchMismatch: boolean;
  storedThreadBranchName: string;
} {
  const currentBranchName = currentBranch?.trim() ?? "";
  const storedThreadBranchName = storedThreadBranch?.trim() ?? "";
  return {
    currentBranchName,
    hasThreadBranchMismatch:
      currentBranchName.length > 0 &&
      storedThreadBranchName.length > 0 &&
      currentBranchName !== storedThreadBranchName,
    storedThreadBranchName,
  };
}

export const gitActionCurrentBranchQueryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(currentBranchQueryAtom, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
      refetchOnWindowFocus: "always",
      staleTime: null,
    }),
);

export const gitActionDefaultBranchQueryAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(conversationDefaultBranchAtom, {
      cwd: params.cwd,
      enabled: true,
      hostConfig: params.hostConfig,
      operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
      refetchOnWindowFocus: true,
      staleTime: 3e4,
    }),
);

export const conversationHeadBranchAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { conversationId?: string | null },
    { get }: { get: Getter },
  ): string => {
    const currentBranchQuery = get<{ data?: string | null }>(
      gitActionCurrentBranchQueryAtom,
      params,
    );
    const pushStatusResult = get<{
      type: string;
      data?: { branch?: string | null };
    }>(pushStatusAtom, {
      cwd: params.cwd,
      hostConfig: params.hostConfig,
      operationSource: LOCAL_GIT_ACTION_OPERATION_SOURCE,
    });
    return computeBranchMismatch({
      currentBranch:
        currentBranchQuery.data ??
        (pushStatusResult.type === "success"
          ? (pushStatusResult.data?.branch ?? null)
          : null),
      storedThreadBranch: get(storedThreadBranchAtom, params.conversationId),
    }).currentBranchName;
  },
);

export const pullRequestStatusForHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(
      pullRequestStatusForBranchAtom,
      buildPullRequestStatusParams(
        params,
        get(conversationHeadBranchAtom, params),
      ),
    ),
);

export const hasOpenPullRequestForHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }) =>
    get(
      hasOpenPullRequestAtom,
      buildPullRequestStatusParams(
        params,
        get(conversationHeadBranchAtom, params),
      ),
    ),
);

export const shouldRecordConversationBranchAtom = createParametricAtom(
  appStoreScope,
  (
    params: GitActionContext & { conversationId?: string | null },
    { get }: { get: Getter },
  ): boolean =>
    computeBranchMismatch({
      currentBranch: get(conversationHeadBranchAtom, params),
      storedThreadBranch: get(storedThreadBranchAtom, params.conversationId),
    }).hasThreadBranchMismatch,
);

export const conversationIsDetachedHeadAtom = createParametricAtom(
  appStoreScope,
  (params: GitActionContext, { get }: { get: Getter }): boolean => {
    const currentBranchQuery = get<{
      isSuccess: boolean;
      data?: string | null;
    }>(gitActionCurrentBranchQueryAtom, params);
    return currentBranchQuery.isSuccess && currentBranchQuery.data == null;
  },
);
