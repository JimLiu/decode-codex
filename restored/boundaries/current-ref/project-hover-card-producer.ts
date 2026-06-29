// Current-ref boundary for project hover card internals still owned by the
// pull-request/projects shared chunk.
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import {
  Pt as initLocalProjectActionsRuntimeRaw,
  Qn as initProjectAvatarRuntimeRaw,
  Rt as openLocalProjectEditModalRaw,
  Zn as ProjectAvatarRaw,
  cr as updateWorkspaceRootLabelRaw,
  lr as LocalProjectFallbackIconRaw,
  sr as initWorkspaceRootLabelRuntimeRaw,
  ur as initLocalProjectFallbackIconRuntimeRaw,
  xn as threadAttentionCountsSignalRaw,
  yn as initThreadAttentionCountsRuntimeRaw,
} from "../../../ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js";

export type ProjectAvatarProps = {
  appearance?: unknown;
  buttonClassName?: string;
  disablePopoverPortal?: boolean;
  fallbackIcon?: ReactNode;
  markerClassName?: string;
  onAppearanceChange?: (appearance: unknown) => void;
  projectId: string;
  projectName: string;
};

export type LocalProjectEditModalOptions = {
  initialName: string;
  initialSources: string[];
  project: unknown;
  showDeleteAction?: boolean;
};

export type UpdateWorkspaceRootLabelOptions = {
  label: string;
  path: string;
  queryClient: unknown;
};

export const ProjectAvatar =
  ProjectAvatarRaw as ComponentType<ProjectAvatarProps>;

export const LocalProjectFallbackIcon =
  LocalProjectFallbackIconRaw as ComponentType<ComponentPropsWithoutRef<"svg">>;

export const threadAttentionCountsSignal = threadAttentionCountsSignalRaw;

export function openLocalProjectEditModal(
  scope: unknown,
  options: LocalProjectEditModalOptions,
): void {
  openLocalProjectEditModalRaw(scope, options);
}

export function updateWorkspaceRootLabel(
  options: UpdateWorkspaceRootLabelOptions,
): void {
  updateWorkspaceRootLabelRaw(options);
}

export function initLocalProjectActionsRuntime(): void {
  initLocalProjectActionsRuntimeRaw();
}

export function initProjectAvatarRuntime(): void {
  initProjectAvatarRuntimeRaw();
}

export function initLocalProjectFallbackIconRuntime(): void {
  initLocalProjectFallbackIconRuntimeRaw();
}

export function initWorkspaceRootLabelRuntime(): void {
  initWorkspaceRootLabelRuntimeRaw();
}

export function initThreadAttentionCountsRuntime(): void {
  initThreadAttentionCountsRuntimeRaw();
}

export function initProjectHoverCardCurrentRefRuntime(): void {
  initLocalProjectActionsRuntime();
  initProjectAvatarRuntime();
  initLocalProjectFallbackIconRuntime();
  initWorkspaceRootLabelRuntime();
  initThreadAttentionCountsRuntime();
}
