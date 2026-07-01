// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the LLM prompts used to generate commit messages and pull request
// title/body for the local conversation git actions, including the helpers that
// read the current diff over RPC and parse its size.

import {
  getRpcClient,
  readHostConfigValue,
  SettingKeys,
  pushStatusAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  commitMessageDraftAtom,
  includeUnstagedChangesAtom,
} from "./local-git-actions-scope";
import {
  buildCommitMessagePrompt,
  buildPullRequestPrompt,
  extractUnifiedDiff,
  summarizeUnifiedDiff,
} from "./git-action-prompt-builders";

export {
  balanceCodeFences,
  buildCommitDiffSection,
  buildCommitMessagePrompt,
  buildPullRequestChangesSection,
  buildPullRequestPrompt,
  countDiffLines,
  extractUnifiedDiff,
  formatFilePathList,
  summarizeUnifiedDiff,
} from "./git-action-prompt-builders";
export type { OversizedDiffSummary } from "./git-action-prompt-builders";

export const GIT_ACTION_OPERATION_SOURCE = "local_conversation_git_actions";
const OVERSIZED_DIFF_LINE_LIMIT = 1000;

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
}

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
}

export async function buildPullRequestPromptFromGit(
  scope: ScopedStore,
  context: GitActionContext,
  { headBranch, signal }: { headBranch?: string; signal?: AbortSignal } = {},
): Promise<string> {
  const [reviewPatch, branchMetadata, reviewSummary] = await Promise.all([
    getRpcClient("git").request({
      method: "review-patch",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
        source: "branch",
      },
      signal,
    }),
    getRpcClient("git").request({
      method: "branch-metadata",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
      },
      signal,
    }),
    getRpcClient("git").request({
      method: "review-summary",
      params: {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: GIT_ACTION_OPERATION_SOURCE,
        source: "branch",
      },
      signal,
    }),
  ]);
  const pushStatusResult = scope.get<{
    type: string;
    data?: { defaultBranch?: string | null; branch?: string | null };
  }>(pushStatusAtom, {
    cwd: context.cwd,
    hostConfig: context.hostConfig,
    operationSource: GIT_ACTION_OPERATION_SOURCE,
  });
  const pushStatus =
    pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
  return buildPullRequestPrompt({
    pullRequestInstructions:
      readHostConfigValue(scope.get, SettingKeys.pullRequestInstructions) ??
      null,
    uncommittedDiff:
      reviewPatch.diff.type === "success" ? reviewPatch.diff.unifiedDiff : null,
    filePaths:
      reviewSummary.type === "success"
        ? reviewSummary.files.map((file: { path: string }) => file.path)
        : [],
    baseBranch: branchMetadata.baseBranch ?? pushStatus?.defaultBranch ?? null,
    headBranch:
      headBranch ?? branchMetadata.branch ?? pushStatus?.branch ?? null,
  });
}

export async function buildCommitPromptFromGit(
  scope: ScopedStore,
  context: GitActionContext,
  draftMessage: string,
  signal?: AbortSignal,
): Promise<string> {
  const includeUnstaged = scope.get<boolean>(includeUnstagedChangesAtom);
  const diffResult = await getRpcClient("git").request({
    method: "commit-message-diff",
    params: {
      cwd: context.cwd,
      hostConfig: context.hostConfig,
      includeUnstaged,
      operationSource: GIT_ACTION_OPERATION_SOURCE,
    },
    signal,
  });
  const unifiedDiff = extractUnifiedDiff(diffResult);
  const diffError = diffResult.type === "error" ? diffResult.error : null;
  const diffSummary = summarizeUnifiedDiff(unifiedDiff);
  const linesAdded = diffSummary?.linesAdded ?? 0;
  const linesRemoved = diffSummary?.linesRemoved ?? 0;
  const oversizedDiffSummary =
    linesAdded + linesRemoved > OVERSIZED_DIFF_LINE_LIMIT
      ? {
          filesChanged: diffSummary?.filesChanged ?? 0,
          linesAdded,
          linesRemoved,
        }
      : null;
  return buildCommitMessagePrompt({
    commitInstructions:
      readHostConfigValue(scope.get, SettingKeys.commitInstructions) ?? null,
    diffError,
    draftMessage,
    oversizedDiffSummary,
    uncommittedDiff: oversizedDiffSummary == null ? unifiedDiff : null,
  });
}

export function seedCommitDraftMessage(
  scope: ScopedStore,
  hostScope: { cwd: string; hostId: string },
  previousMessage: string,
  nextMessage: string,
): void {
  const currentDraft = scope.get<string>(commitMessageDraftAtom, hostScope);
  if (currentDraft.trim().length === 0 || currentDraft === previousMessage) {
    scope.set(commitMessageDraftAtom, hostScope, nextMessage);
  }
}
