// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Draft state and message-generation abort registry for local conversation git actions.

import {
  appStoreScope,
  createParametricStateAtom,
  createPersistedToggleAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export type GitActionStep = "commit" | "create-pr";
export type ActiveGitWorkflow = {
  workflow: "commit" | "create-pr";
  phase: string;
} | null;

export interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
}

export interface HostScope {
  cwd: string;
  hostId: string;
}

export const activeGitWorkflowAtom = createParametricStateAtom(
  appStoreScope,
  (): ActiveGitWorkflow => null,
);

export const commitMessageDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const includeUnstagedChangesAtom = createPersistedToggleAtom(
  "git-action-include-unstaged-changes",
  true,
);

export const createPullRequestTitleDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const createPullRequestBodyDraftAtom = createParametricStateAtom(
  appStoreScope,
  (): string => "",
);

export const createPullRequestIncludeLocalChangesAtom =
  createParametricStateAtom(appStoreScope, (): boolean => true);

export function resetCreatePullRequestDrafts(
  scope: ScopedStore,
  hostScope: HostScope,
): void {
  scope.set(createPullRequestTitleDraftAtom, hostScope, "");
  scope.set(createPullRequestBodyDraftAtom, hostScope, "");
  scope.set(createPullRequestIncludeLocalChangesAtom, hostScope, true);
}

export const gitActionMessageGenerationControllers = new Map<
  string,
  AbortController
>();

export function getGitActionMessageGenerationKey(target: HostScope): string {
  return JSON.stringify([target.hostId, target.cwd]);
}

export function createGitWorkflowAbortSignal(target: HostScope): AbortSignal {
  const controller = new AbortController();
  gitActionMessageGenerationControllers.set(
    getGitActionMessageGenerationKey(target),
    controller,
  );
  return controller.signal;
}

export function cancelGitWorkflowAbortSignal(target: HostScope): void {
  gitActionMessageGenerationControllers
    .get(getGitActionMessageGenerationKey(target))
    ?.abort();
}

export function cleanupGitWorkflowAbortSignal(
  target: HostScope,
  signal: AbortSignal,
): void {
  const key = getGitActionMessageGenerationKey(target);
  if (gitActionMessageGenerationControllers.get(key)?.signal === signal) {
    gitActionMessageGenerationControllers.delete(key);
  }
}
