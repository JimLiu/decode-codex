// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// GitHub CLI availability and pull-request status query signals used by local conversation summaries.
import {
  _i as githubCliAvailabilitySignal,
  gi as initGithubCliAvailabilitySignalChunkRaw,
  pi as pullRequestStatusQuerySignal,
  vi as initPullRequestStatusQueryChunkRaw,
} from "../vendor/projects-app-shared-runtime";

export { githubCliAvailabilitySignal, pullRequestStatusQuerySignal };

export function initPullRequestGitSummaryStateRuntime(): void {
  initPullRequestStatusQueryChunkRaw();
  initGithubCliAvailabilitySignalChunkRaw();
}
