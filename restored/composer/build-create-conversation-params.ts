// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Build the request payload for creating a new conversation/thread.
import {
  MULTI_AGENT_MODE,
  buildAttachmentsPayload,
  buildThreadPermissions,
} from "../boundaries/onboarding-commons-externals.facade";

export interface BuildCreateConversationParamsInput {
  agentMode: string;
  permissionProfileId: string | null;
  shouldSendPermissionOverrides: boolean;
  workspaceRoots: string[];
  config: unknown;
  configOverrides: unknown;
  input: unknown;
  commentAttachments: unknown;
  collaborationMode: unknown;
  serviceTier: string | null;
  cwd: string | null;
  fileAttachments: unknown[];
  addedFiles: unknown[];
  memoryPreferences: unknown;
  threadSource: unknown;
  threadStartKind: unknown;
  workspaceKind?: "project" | "projectless";
  projectlessOutputDirectory?: string | null;
  projectAssignment: unknown;
  baseInstructions: unknown;
  additionalDeveloperInstructions: unknown;
}

export function buildCreateConversationParams({
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  workspaceRoots,
  config,
  configOverrides,
  input,
  commentAttachments,
  collaborationMode,
  serviceTier,
  cwd,
  fileAttachments,
  addedFiles,
  memoryPreferences,
  threadSource,
  threadStartKind,
  workspaceKind = "project",
  projectlessOutputDirectory,
  projectAssignment,
  baseInstructions,
  additionalDeveloperInstructions,
}: BuildCreateConversationParamsInput) {
  if (workspaceKind === "projectless" && projectlessOutputDirectory == null) {
    throw new Error("Projectless conversations require an output directory");
  }

  const attachments = buildAttachmentsPayload([
    ...fileAttachments,
    ...addedFiles,
  ]);
  const permissions =
    shouldSendPermissionOverrides === false
      ? null
      : buildThreadPermissions(agentMode, workspaceRoots, config);

  if (permissions != null && permissionProfileId != null) {
    permissions.activePermissionProfile = {
      id: permissionProfileId,
      extends: null,
    };
    permissions.runtimeWorkspaceRoots = workspaceRoots;
  }

  return {
    input,
    commentAttachments,
    workspaceRoots,
    collaborationMode,
    multiAgentMode: MULTI_AGENT_MODE,
    serviceTier,
    ...(permissions == null
      ? { useAppServerPermissionDefault: true }
      : {
          permissions,
          approvalsReviewer: permissions.approvalsReviewer,
        }),
    cwd,
    attachments,
    workspaceKind,
    projectAssignment,
    threadSource,
    threadStartKind,
    config: configOverrides,
    ...(workspaceKind === "projectless" ? { projectlessOutputDirectory } : {}),
    memoryPreferences,
    baseInstructions,
    additionalDeveloperInstructions,
  };
}
