// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// GitHub pull-request summary signals, queries, and create-PR workflow controls.
import {
  _i as githubCliAvailabilitySignal,
  gi as initGithubCliAvailabilitySignalChunkRaw,
  pi as pullRequestStatusQuerySignal,
  vi as initPullRequestStatusQueryChunkRaw,
} from "../../vendor/projects-app-shared-runtime";
import {
  $l as createPullRequestActionStateSignal,
  Al as useHeadBranchQuery,
  Bl as initCreatePullRequestActionStateChunkRaw,
  Hl as CancelCreatePullRequestButton,
  Ql as initCreatePullRequestControlsChunkRaw,
  Ul as initCreatePullRequestWorkflowPhaseLabelChunkRaw,
  Xd as BranchChangesIcon,
  Zd as initBranchChangesIconChunkRaw,
  au as initCreatePullRequestWorkflowCancelChunkRaw,
  iu as activeWorkflowSignal,
  kl as initCreatePullRequestWorkflowRuntimeChunkRaw,
  nu as cancelCreatePullRequestWorkflow,
  zl as CreatePullRequestWorkflowPhaseLabel,
} from "../../vendor/profile-page-runtime";

export {
  activeWorkflowSignal,
  BranchChangesIcon,
  CancelCreatePullRequestButton,
  cancelCreatePullRequestWorkflow,
  createPullRequestActionStateSignal,
  CreatePullRequestWorkflowPhaseLabel,
  githubCliAvailabilitySignal,
  pullRequestStatusQuerySignal,
  useHeadBranchQuery,
};

export function initBranchChangesIconRuntime(): void {
  initBranchChangesIconChunkRaw();
}

export function initPullRequestGitSummaryRuntime(): void {
  initCreatePullRequestWorkflowRuntimeChunkRaw();
  initCreatePullRequestWorkflowCancelChunkRaw();
  initCreatePullRequestWorkflowPhaseLabelChunkRaw();
  initCreatePullRequestControlsChunkRaw();
  initCreatePullRequestActionStateChunkRaw();
  initPullRequestStatusQueryChunkRaw();
  initGithubCliAvailabilitySignalChunkRaw();
  initBranchChangesIconRuntime();
}
