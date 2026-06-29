// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Environment action state, commands, and shared toolbar icons used by local conversation controls.
import type { ComponentType } from "react";
import {
  $i as initConversationRemoteStateHelpersRaw,
  ba as initLocalEnvironmentSelectionRuntimeRaw,
  d as useLocalEnvironmentSelectionStateRaw,
  Ga as MoreHorizontalIconRaw,
  Ka as initMoreHorizontalIconRaw,
  u as refreshWorktreeEnvironmentConfigValueRaw,
  Yi as localEnvironmentActionShortcutSignal,
} from "../vendor/projects-app-shared-runtime";
import {
  Bu as initProfileGitSummaryRuntimeRaw,
  Vu as setActiveSettingsHostRaw,
} from "../vendor/profile-page-runtime";
import { ENVIRONMENT_ACTION_COMMAND_IDS } from "../utils/electron-menu-shortcuts";

export type LocalEnvironmentSelectionState = {
  environments?: unknown[] | null;
  normalizedResolvedConfigPath?: string | null;
  resolvedConfigPath?: string | null;
} & Record<string, unknown>;

export type MoreHorizontalIconProps = {
  className?: string;
};

export const LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS =
  ENVIRONMENT_ACTION_COMMAND_IDS as readonly string[];
export const MoreHorizontalIcon =
  MoreHorizontalIconRaw as ComponentType<MoreHorizontalIconProps>;
export { localEnvironmentActionShortcutSignal };

export function useLocalEnvironmentSelectionState(options: {
  hostId: string;
  workspaceRoot: string | null | undefined;
}): LocalEnvironmentSelectionState {
  return useLocalEnvironmentSelectionStateRaw(
    options,
  ) as LocalEnvironmentSelectionState;
}

export function refreshWorktreeEnvironmentConfigValue(
  scope: unknown,
  gitAvailability: unknown,
  hostConfig: unknown,
  value: string,
  source: string,
): void {
  refreshWorktreeEnvironmentConfigValueRaw(
    scope,
    gitAvailability,
    hostConfig,
    value,
    source,
  );
}

export function setActiveSettingsHost(scope: unknown, hostId: string): void {
  setActiveSettingsHostRaw(scope, hostId);
}

export function initLocalEnvironmentSelectionRuntime(): void {
  initLocalEnvironmentSelectionRuntimeRaw();
}

export function initMoreHorizontalIcon(): void {
  initMoreHorizontalIconRaw();
}

export function initConversationRemoteStateHelpers(): void {
  initConversationRemoteStateHelpersRaw();
}

export function initProfileGitSummaryRuntime(): void {
  initProfileGitSummaryRuntimeRaw();
}
