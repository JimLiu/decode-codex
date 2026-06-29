// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path, markdown-resource, and output-artifact helpers for conversation summaries.
import { lD as initMarkdownArtifactRenderingHelpers } from "../vendor/appg-thread-shared-runtime";
import {
  Qg as mapTurnStatusToOutputStatusRaw,
  _x as normalizeArtifactPathKeyRaw,
  yx as resolveWorkspacePathFromCwdRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js";
import {
  gi as isFileUrlLikeTargetRaw,
  mi as normalizeHrefRaw,
} from "../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js";
import { initConversationPromptContextRuntime } from "../runtime/conversation-prompt-context-runtime";
import { initArtifactPreviewRuntime } from "../runtime/artifact-preview-runtime";

import { normalizeWorkspacePath as normalizeWorkspacePathValue } from "../boundaries/src-l0hb-mz-p";
import {
  Hv as collectTurnFileArtifactsRaw,
  Kg as initNormalizedPathUtilities,
  Qg as initArtifactPathDetectionHelpers,
  Uv as initMarkdownArtifactHelpers,
  e_ as isFileReferencePathRaw,
  qg as isResourcePathInsideProjectlessOutputRaw,
} from "../vendor/projects-app-shared-runtime";

export type ProjectlessResourcePathOptions = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  resourcePath: string;
};

export function initOutputArtifactRuntime(): void {
  initConversationPromptContextRuntime();
  initArtifactPathDetectionHelpers();
  initMarkdownArtifactHelpers();
  initMarkdownArtifactRenderingHelpers();
  initNormalizedPathUtilities();
  initArtifactPreviewRuntime();
}

export function resolveWorkspacePathFromCwd(cwd: string, path: string): string {
  return resolveWorkspacePathFromCwdRaw(cwd, path);
}

export function normalizeWorkspacePath(path: string): string {
  return normalizeWorkspacePathValue(path);
}

export function collectTurnFileArtifacts<TArtifacts = unknown>(
  turn: unknown,
): TArtifacts {
  return collectTurnFileArtifactsRaw(turn) as TArtifacts;
}

export function normalizeArtifactPathKey(path: string): string {
  return normalizeArtifactPathKeyRaw(path);
}

export function isFileUrlLikeTarget(target: string): boolean {
  return isFileUrlLikeTargetRaw(target);
}

export function isFileReferencePath(path: string): boolean {
  return isFileReferencePathRaw(path);
}

export function isResourcePathInsideProjectlessOutput(
  options: ProjectlessResourcePathOptions,
): boolean {
  return isResourcePathInsideProjectlessOutputRaw(options);
}

export function mapTurnStatusToOutputStatus(status: string): string {
  return mapTurnStatusToOutputStatusRaw(status);
}

export function normalizeHref(href: string): string {
  return normalizeHrefRaw(href);
}
