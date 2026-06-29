// Restored from ref/webview/assets/conversation-markdown-BBR-zfID.js
// Boundary facade for conversation markdown rendering and formatting helpers.
import { initPathHelpersRuntime as initPathHelpers } from "./path-helpers-runtime";
import { initArtifactPreviewRuntime } from "./artifact-preview-runtime";

import { normalizeArtifactPathKey } from "../conversations/output-artifact-runtime";

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

function quoteShellArgument(argument: string) {
  return argument === ""
    ? "''"
    : /[^\w@%\-+=:,./]/.test(argument)
      ? (`'` + argument.replace(/('+)/g, `'"$1"'`) + `'`).replace(
          /^''|''$/g,
          "",
        )
      : argument;
}

function formatShellCommandArgument(argument: string) {
  return /^[A-Za-z0-9_@+=:,./-]+$/.test(argument)
    ? argument
    : !/[`$\\!]/.test(argument) && !argument.includes(`"`)
      ? `"${argument}"`
      : quoteShellArgument(argument);
}

function formatShellCommand(command: readonly string[]) {
  return command.map(formatShellCommandArgument).join(" ");
}

function initCommandMarkdownRuntime() {}

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
