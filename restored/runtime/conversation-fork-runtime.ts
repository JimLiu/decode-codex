// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Runtime helpers for forking a local conversation into local/worktree targets.
import type { ComponentType } from "react";
import {
  A as initPendingWorktreeFactoryRaw,
  Cn as initForkDialogLocalIconRaw,
  F as recordPendingWorktreeForkSourceStateRaw,
  kn as initForkDialogWorktreeIconRaw,
  On as WorktreeForkIconRaw,
  Sn as LocalForkIconRaw,
  Xa as createPendingWorktreeRaw,
  Za as initResolvedLocalEnvironmentConfigPathHookRaw,
  b as initForkThreadMessagesRaw,
  d as useResolvedLocalEnvironmentConfigPathRaw,
  l as initPendingWorktreeNavigationRouteRaw,
  x as forkThreadMessagesRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  initGitRootQueryRuntime,
  useGitRootQuery as useGitRootQueryRaw,
} from "../github/git-root-query";

export type ForkIconProps = {
  className?: string;
};

export type MessageDescriptorLike = {
  defaultMessage?: string;
  description?: string;
  id: string;
};

export type PendingWorktreeForkSourceState = {
  pendingWorktreeId: string;
  sourceConversationId: string;
  sourceWorkspaceRoot: string;
};

export const WorktreeForkIcon =
  WorktreeForkIconRaw as ComponentType<ForkIconProps>;
export const LocalForkIcon = LocalForkIconRaw as ComponentType<ForkIconProps>;
export const forkThreadMessages = forkThreadMessagesRaw as Record<
  string,
  MessageDescriptorLike
>;

export function useGitRootQuery(
  workspaceRoot: string | null | undefined,
  options: Record<string, unknown>,
): { gitRoot?: string | null } {
  return useGitRootQueryRaw(workspaceRoot, options) as {
    gitRoot?: string | null;
  };
}

export function useResolvedLocalEnvironmentConfigPath(options: {
  hostId: string;
  workspaceRoot: string | null | undefined;
}): { resolvedConfigPath?: string | null } {
  return useResolvedLocalEnvironmentConfigPathRaw(options) as {
    resolvedConfigPath?: string | null;
  };
}

export function createPendingWorktree(
  options: Record<string, unknown>,
): string {
  return createPendingWorktreeRaw(options);
}

export function recordPendingWorktreeForkSourceState(
  scope: unknown,
  state: PendingWorktreeForkSourceState,
): void {
  recordPendingWorktreeForkSourceStateRaw(scope, state);
}

export function initConversationForkDialogUiRuntime(): void {
  initForkDialogLocalIconRaw();
  initForkDialogWorktreeIconRaw();
  initForkThreadMessagesRaw();
}

export function initConversationForkControllerRuntime(): void {
  initPendingWorktreeFactoryRaw();
  initGitRootQueryRuntime();
  initResolvedLocalEnvironmentConfigPathHookRaw();
  initPendingWorktreeNavigationRouteRaw();
  initConversationForkDialogUiRuntime();
}
