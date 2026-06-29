// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolve the active workspace (cwd, host, workspace root and host config) for a conversation.
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeS as useAppScopeValue,
} from "../boundaries/app-scope";
import {
  LOCAL_HOST_ID,
  activeLocalProjectCwdSignal,
  activeWorkspaceRootsQuery,
  conversationCwdByIdSignal,
  conversationHostIdByIdSignal,
  isWorkspaceContextLoadingSignal,
  remoteConnectionSelectionSignal,
  resolveHostConfig,
  useSelectedRemoteProject,
  useStatsigDynamicConfig,
} from "../boundaries/onboarding-commons-externals.facade";

export interface RemoteProject {
  hostId: string;
  remotePath: string;
}

export interface WorkspaceContext {
  cwd: string | null;
  hostId: string;
}

export interface ActiveWorkspace extends WorkspaceContext {
  activeWorkspaceRoot: string | null;
  isActiveWorkspaceRootLoading: boolean;
  hostConfig: unknown;
}

function resolveWorkspaceContext({
  activeLocalProjectCwd,
  conversationCwd,
  conversationHostId,
  selectedRemoteProject,
}: {
  activeLocalProjectCwd: string | null;
  conversationCwd: string | null;
  conversationHostId: string | null;
  selectedRemoteProject: RemoteProject | null;
}): WorkspaceContext {
  if (conversationCwd || conversationHostId != null) {
    return {
      cwd: conversationCwd === "~" ? null : conversationCwd,
      hostId: conversationHostId ?? "local",
    };
  }
  if (selectedRemoteProject == null) {
    return { cwd: activeLocalProjectCwd, hostId: LOCAL_HOST_ID };
  }
  return {
    cwd: selectedRemoteProject.remotePath,
    hostId: selectedRemoteProject.hostId,
  };
}

export function useActiveWorkspace(
  conversationId?: string | null,
): ActiveWorkspace {
  const id = conversationId === undefined ? null : conversationId;
  const conversationCwd = useAppScopeFamilyValue(conversationCwdByIdSignal, id);
  const conversationHostId = useAppScopeFamilyValue(
    conversationHostIdByIdSignal,
    id,
  );
  const { data: workspaceRootsData, isLoading } = useAppScopeValue(
    activeWorkspaceRootsQuery,
  );
  const activeLocalProjectCwd = useAppScopeValue(activeLocalProjectCwdSignal);
  const isWorkspaceContextLoading = useAppScopeValue(
    isWorkspaceContextLoadingSignal,
  );
  const { remoteConnections } = useAppScopeValue(
    remoteConnectionSelectionSignal,
  );
  const { selectedRemoteProject } = useSelectedRemoteProject();
  const [hostConfigOverride] = useStatsigDynamicConfig("host_config");

  const activeWorkspaceRoot = workspaceRootsData?.roots?.[0] ?? null;
  const context = resolveWorkspaceContext({
    activeLocalProjectCwd,
    conversationCwd,
    conversationHostId,
    selectedRemoteProject,
  });
  const hostConfig =
    hostConfigOverride && context.hostId === hostConfigOverride.id
      ? hostConfigOverride
      : resolveHostConfig(context.hostId, remoteConnections);

  return {
    activeWorkspaceRoot,
    isActiveWorkspaceRootLoading: isLoading || isWorkspaceContextLoading,
    hostConfig,
    ...context,
  };
}
