// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
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
  initPullRequestDescriptionMarkdownRendererChunk as initPullRequestDescriptionMarkdownRendererChunkRaw,
  PullRequestDescriptionMarkdown,
} from "./pull-request-description-markdown-renderer";
import {
  initPullRequestDescriptionMarkdownParserChunk as initPullRequestDescriptionMarkdownParserChunkRaw,
  parsePullRequestDescriptionMarkdown,
} from "./pull-request-description-markdown-parser";

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
