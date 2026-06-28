// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Pull-request side-panel positioning and description markdown runtime helpers.
import {
  Cl as pullRequestCurrentBranchSignal,
  _c as threadSidePanelPositionControllers,
  bc as activateThreadSidePanelPosition,
  tc as initThreadSidePanelRuntimeChunkRaw,
  vc as getExistingThreadSidePanelPosition,
  xl as initPullRequestCurrentBranchSignalChunkRaw,
  yc as initThreadSidePanelPositioningChunkRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  H as initPullRequestDescriptionMarkdownRendererChunkRaw,
  W as PullRequestDescriptionMarkdown,
  m as parsePullRequestDescriptionMarkdown,
  p as initPullRequestDescriptionMarkdownParserChunkRaw,
} from "../vendor/pull-request-thread-actions-runtime";

export {
  activateThreadSidePanelPosition,
  getExistingThreadSidePanelPosition,
  parsePullRequestDescriptionMarkdown,
  PullRequestDescriptionMarkdown,
  pullRequestCurrentBranchSignal,
  threadSidePanelPositionControllers,
};

export function initPullRequestCurrentBranchRuntime(): void {
  initPullRequestCurrentBranchSignalChunkRaw();
}

export function initPullRequestDescriptionMarkdownRuntime(): void {
  initPullRequestDescriptionMarkdownRendererChunkRaw();
  initPullRequestDescriptionMarkdownParserChunkRaw();
}

export function initPullRequestSidePanelPositionRuntime(): void {
  initThreadSidePanelRuntimeChunkRaw();
  initThreadSidePanelPositioningChunkRaw();
}
