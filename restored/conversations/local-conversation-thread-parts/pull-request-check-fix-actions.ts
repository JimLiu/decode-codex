// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Chat attachment and prompt helpers for failing pull request checks.
import { once } from "../../runtime/commonjs-interop";
import {
  MY_REQUEST_PROMPT_HEADER,
  PULL_REQUEST_FIX_PROMPT_PREAMBLE,
} from "./pull-request-prompt-runtime";
import {
  focusComposerAfterPullRequestPrompt,
  submitPullRequestPrompt,
  updatePullRequestChatContext,
} from "../../composer/pull-request-prompt-actions";

type PullRequestCheck = {
  link?: string | null;
  name: string;
  status: "failing" | "passing" | "pending" | "skipped" | "unknown";
  workflow?: string | null;
};

type PullRequestChatContext = {
  pullRequestChecks?: PullRequestCheck[];
};

export const initPullRequestFailingChecksPromptChunk = once(() => {});

function buildPullRequestFailingChecksFixPrompt({
  baseBranch,
  headBranch,
  number,
}: {
  baseBranch: string;
  headBranch: string;
  number: number;
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and make the smallest safe fix for the attached failing CI.`,
    "Start from the attached failing-check context. Then use `gh` to inspect the latest runs, annotations, and logs for those failures before changing code.",
    "Treat `gh` as the primary source of truth for workflow runs, job logs, annotations, and links to any external CI.",
    "Resolve the PR with `gh pr view` or `gh pr checks` and inspect failing GitHub Actions runs with `gh run view`, including logs.",
    "If `gh pr checks` rejects a requested JSON field, retry with the available fields instead of guessing.",
    "If a GitHub Actions run log is incomplete because the run is still in progress, fall back to the per-job logs that GitHub exposes.",
    "If the failure can be diagnosed from GitHub, fix it directly.",
    MY_REQUEST_PROMPT_HEADER,
    "Use gh to inspect the failing CI and make the smallest safe fix. Once everything is fixed, commit and push it.",
  ].join("\n");
}

export function getPullRequestCheckAttachmentKey(check: PullRequestCheck) {
  return check.link ?? `${check.workflow ?? ""}:${check.name}`;
}

export function setPullRequestFailingChecksAttached(
  scope: unknown,
  { attached, checks }: { attached: boolean; checks: PullRequestCheck[] },
) {
  let failingChecks = checks.filter((item) => item.status === "failing");
  return failingChecks.length === 0
    ? false
    : (updatePullRequestChatContext(
        scope,
        (pullRequestContext: PullRequestChatContext) => {
          let pullRequestChecks = pullRequestContext.pullRequestChecks ?? [];
          if (!attached) {
            let failingCheckKeys = new Set(
              failingChecks.map(getPullRequestCheckAttachmentKey),
            );
            pullRequestContext.pullRequestChecks = pullRequestChecks.filter(
              (item) =>
                !failingCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
            );
            return;
          }
          let attachedCheckKeys = new Set(
            pullRequestChecks.map(getPullRequestCheckAttachmentKey),
          );
          pullRequestContext.pullRequestChecks = [
            ...pullRequestChecks,
            ...failingChecks.filter(
              (item) =>
                !attachedCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
            ),
          ];
        },
      ),
      true);
}

export function attachFailingPullRequestChecksAndPromptFix(
  scope: unknown,
  {
    baseBranch,
    checks,
    headBranch,
    number,
  }: {
    baseBranch?: string | null;
    checks: PullRequestCheck[];
    headBranch?: string | null;
    number?: number | null;
  },
) {
  return baseBranch == null ||
    headBranch == null ||
    number == null ||
    !setPullRequestFailingChecksAttached(scope, { attached: true, checks })
    ? false
    : (submitPullRequestPrompt(
        scope,
        buildPullRequestFailingChecksFixPrompt({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      focusComposerAfterPullRequestPrompt(),
      true);
}
