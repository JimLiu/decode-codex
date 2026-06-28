// Restored from ref/webview/assets/conversation-markdown-BjFKV53f.js
// Boundary facade for conversation markdown rendering and formatting helpers.
import {
  aD as formatShellCommand,
  bF as initPathHelpers,
  iD as initCommandMarkdownRuntime,
  Oj as normalizeArtifactPathKey,
  wj as initArtifactPreviewRuntime,
} from "../vendor/appg-thread-shared-runtime";
import { normalizeConfigPath } from "./config-path-runtime";

import {
  isAbsolutePath,
  normalizeWorkspacePath,
} from "../boundaries/src-l0hb-mz-p";
import {
  Ba as groupClosedActivityUnits,
  dt as initPersonalityChangedItems,
  Et as isConversationItemInProgress,
  ft as resolveRenderableAgentItems,
  Ha as initPostAssistantItemGrouping,
  La as shouldRenderCollapsedActivityDetails,
  lt as initRenderableOutputGrouping,
  Ra as closeActivitySlices,
  Tt as initRemoteTaskCreatedItems,
  ut as getTurnAgentItemGroups,
  Va as collectRenderableAgentUnits,
  za as wrapActivityUnits,
} from "../vendor/profile-page-runtime";
import {
  Gv as initMarkdownNormalizationRuntime,
  Kg as initNormalizedPathUtilities,
  qg as resolveProjectlessResourcePath,
  Vv as initMarkdownContentRuntime,
  Wv as rewriteMarkdownResourceLinks,
  zv as renderChangeAsUnifiedDiff,
} from "../vendor/projects-app-shared-runtime";

export {
  closeActivitySlices,
  collectRenderableAgentUnits,
  formatShellCommand,
  getTurnAgentItemGroups,
  groupClosedActivityUnits,
  initArtifactPreviewRuntime,
  initCommandMarkdownRuntime,
  initMarkdownContentRuntime,
  initMarkdownNormalizationRuntime,
  initNormalizedPathUtilities,
  initPathHelpers,
  initPersonalityChangedItems,
  initPostAssistantItemGrouping,
  initRemoteTaskCreatedItems,
  initRenderableOutputGrouping,
  isAbsolutePath,
  isConversationItemInProgress,
  normalizeArtifactPathKey,
  normalizeConfigPath,
  normalizeWorkspacePath,
  renderChangeAsUnifiedDiff,
  resolveProjectlessResourcePath,
  resolveRenderableAgentItems,
  rewriteMarkdownResourceLinks,
  shouldRenderCollapsedActivityDetails,
  wrapActivityUnits,
};
