// Restored from ref/webview/assets/remote-projects-Beixx8Gf.js
// Remote project global-state helpers and git-origin matching queries.
import React from "react";
import {
  _appScopeL as createComputedSignalFamily,
  _appScopeO as useAppScopeStore,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import {
  c as remoteProjectsSignal,
  s as remoteHostConfigsSignal,
  ta as writeGlobalSetting,
} from "../../boundaries/thread-context-inputs.facade";
import { _useHostConfigMt as getHostConfigById } from "../../boundaries/use-host-config.facade";
import {
  vscodeApiN as callVscodeApi,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiU as vscodeQueryTimes,
} from "../../boundaries/vscode-api";
import { useGlobalState } from "../../utils/use-global-state";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type QueryClientLike = {
  getQueryCache(): {
    findAll(options: { queryKey: unknown[] }): QueryLike[];
  };
  getQueryData<TValue = unknown>(queryKey: unknown): TValue | undefined;
};
type QueryLike = {
  meta?: {
    gitOrigins?: unknown;
  };
  queryKey: unknown;
};
type QueryContextLike = {
  queryClient: QueryClientLike;
};
type GitOriginsParams = {
  dirs?: string[] | null;
  hostId?: string | null;
};
type GitOrigin = {
  dir: string;
  originUrl?: string | null;
  root?: string | null;
};
type GitOriginsData = {
  origins?: GitOrigin[] | null;
};
type GitOriginsQueryResult = {
  data?: GitOriginsData | null;
  isError?: boolean;
  isPending?: boolean;
};
export type RemoteProject = {
  hostId: string;
  id: string;
  remotePath: string;
  [key: string]: unknown;
};
export type RemoteProjectCandidate =
  | {
      hostDisplayName: string;
      hostId: string;
      status: "error" | "loading";
    }
  | {
      hostDisplayName: string;
      project: RemoteProject;
      status: "ready";
    };
type FindMatchingRemoteProjectRootParams = {
  destinationGitOrigins?: GitOrigin[] | null;
  destinationWorkspaceRoots: string[];
  sourceGitOriginUrl?: string | null;
  sourceGitOrigins?: GitOrigin[] | null;
  sourceGitRoot?: string | null;
  sourceWorkspaceRoot?: string | null;
};
type SameRepositoryLocationParams = {
  destinationGitOriginUrl?: string | null;
  destinationGitRoot?: string | null;
  destinationWorkspaceRoot?: string | null;
  sourceGitOriginUrl?: string | null;
  sourceGitRoot?: string | null;
  sourceWorkspaceRoot?: string | null;
};
type RemoteProjectsState = {
  remoteProjects: RemoteProject[];
  selectedRemoteProject: RemoteProject | null;
  selectedRemoteProjectId: string | null;
  setRemoteProjects: (remoteProjects: RemoteProject[]) => void;
  setSelectedRemoteProjectId: (projectId: string | null) => void;
};
const {
  globalSettingKeys,
  srcAa: zString,
  srcD: normalizeRemotePathForCompare,
  _srcJr: normalizePlatformPath,
  srcLt: parseGitOriginUrl,
  srcPa: zArray,
  srcTa: zObject,
} = sourceRuntime;
const gitOriginsMetaSchema = zObject({
  dirs: zArray(zString()).optional(),
  hostId: zString().optional(),
});
const gitOriginsQuery = createQuerySignalFamily(
  appScopeRoot,
  (
    {
      params,
      source,
    }: {
      params?: GitOriginsParams | null;
      source?: string;
    },
    { queryClient }: QueryContextLike,
  ) => ({
    enabled: params?.dirs == null || params.dirs.length > 0,
    meta: {
      gitOrigins: {
        dirs: params?.dirs,
        hostId: params?.hostId,
      },
    },
    placeholderData: () => getBroaderGitOriginsQueryData(queryClient, params),
    queryFn: () =>
      callVscodeApi("git-origins", {
        params,
        source,
      }),
    queryKey: createVscodeQueryKey("git-origins", params),
    staleTime: vscodeQueryTimes.FIVE_SECONDS,
  }),
);
function getBroaderGitOriginsQueryData(
  queryClient: QueryClientLike,
  params?: GitOriginsParams | null,
): unknown {
  if (params?.dirs == null || params.dirs.length === 0) return undefined;
  for (const query of queryClient.getQueryCache().findAll({
    queryKey: createVscodeQueryKey("git-origins"),
  })) {
    const parsedMeta = gitOriginsMetaSchema.safeParse(query.meta?.gitOrigins);
    if (
      !parsedMeta.success ||
      parsedMeta.data.hostId !== params.hostId ||
      parsedMeta.data.dirs == null
    ) {
      continue;
    }
    const cachedDirs = new Set(parsedMeta.data.dirs);
    if (!params.dirs.every((dir) => cachedDirs.has(dir))) continue;
    const cachedData = queryClient.getQueryData(query.queryKey);
    if (cachedData != null) return cachedData;
  }
  return undefined;
}
function findRemoteProjectByPath(
  remoteProjects: RemoteProject[] | null | undefined,
  hostId: string | null | undefined,
  remotePath: string,
): RemoteProject | null {
  if (hostId == null || remoteProjects == null) return null;
  const normalizedRemotePath = normalizeRemotePathForCompare(remotePath);
  return (
    remoteProjects.find(
      (project) =>
        project.hostId === hostId &&
        normalizeRemotePathForCompare(project.remotePath) ===
          normalizedRemotePath,
    ) ?? null
  );
}
function isSameRepositoryLocation({
  sourceWorkspaceRoot,
  sourceGitRoot,
  sourceGitOriginUrl,
  destinationWorkspaceRoot,
  destinationGitRoot,
  destinationGitOriginUrl,
}: SameRepositoryLocationParams): boolean {
  const sourceRelativePath = getRelativePathInsideGitRoot(
    sourceWorkspaceRoot,
    sourceGitRoot,
  );
  const sourceRepositoryKey = getRepositoryKey(sourceGitOriginUrl);
  return (
    sourceRelativePath != null &&
    sourceRepositoryKey != null &&
    getRepositoryKey(destinationGitOriginUrl) === sourceRepositoryKey &&
    getRelativePathInsideGitRoot(
      destinationWorkspaceRoot,
      destinationGitRoot,
    ) === sourceRelativePath
  );
}
function findMatchingRemoteProjectRoot({
  sourceWorkspaceRoot,
  sourceGitRoot,
  sourceGitOrigins,
  destinationWorkspaceRoots,
  destinationGitOrigins,
}: FindMatchingRemoteProjectRootParams): string | null {
  const sourceGitOrigin = findGitOriginForDirectory(
    sourceWorkspaceRoot,
    sourceGitOrigins,
  );
  return (
    destinationWorkspaceRoots.find((destinationWorkspaceRoot) => {
      const destinationGitOrigin = findGitOriginForDirectory(
        destinationWorkspaceRoot,
        destinationGitOrigins,
      );
      return isSameRepositoryLocation({
        sourceWorkspaceRoot,
        sourceGitRoot,
        sourceGitOriginUrl: sourceGitOrigin?.originUrl ?? null,
        destinationWorkspaceRoot,
        destinationGitRoot: destinationGitOrigin?.root ?? null,
        destinationGitOriginUrl: destinationGitOrigin?.originUrl ?? null,
      });
    }) ?? null
  );
}
const localRemoteProjectCandidatesSignal = createComputedSignalFamily(
  appScopeRoot,
  (
    {
      sourceHostId,
      sourceGitRoot,
      sourceWorkspaceRoot,
    }: {
      sourceGitRoot?: string | null;
      sourceHostId?: string | null;
      sourceWorkspaceRoot?: string | null;
    },
    { get }: AppScopeGetter,
  ): RemoteProjectCandidate[] => {
    if (
      sourceHostId !== "local" ||
      sourceGitRoot == null ||
      sourceWorkspaceRoot == null
    ) {
      return [];
    }
    const remoteHostConfigs = get<
      Array<{
        hostId: string;
      }>
    >(remoteHostConfigsSignal);
    const sourceGitOriginsResult = get<GitOriginsQueryResult>(gitOriginsQuery, {
      params: {
        hostId: sourceHostId,
        dirs: [sourceWorkspaceRoot],
      },
      source: "local_remote_dropdown",
    });
    const projectsByHostId = new Map<
      string,
      {
        hostDisplayName: string;
        hostId: string;
        projects: RemoteProject[];
      }
    >();
    for (const remoteProject of get<RemoteProject[]>(remoteProjectsSignal)) {
      if (
        remoteHostConfigs.find(
          (item) => item.hostId === remoteProject.hostId,
        ) == null
      ) {
        continue;
      }
      const hostProjects = projectsByHostId.get(remoteProject.hostId);
      if (hostProjects != null) {
        hostProjects.projects.push(remoteProject);
        continue;
      }
      projectsByHostId.set(remoteProject.hostId, {
        hostId: remoteProject.hostId,
        hostDisplayName: getHostConfigById(
          remoteProject.hostId,
          remoteHostConfigs,
        ).display_name,
        projects: [remoteProject],
      });
    }
    const candidates: RemoteProjectCandidate[] = [];
    for (const {
      hostDisplayName,
      hostId,
      projects,
    } of projectsByHostId.values()) {
      const destinationGitOriginsResult = get<GitOriginsQueryResult>(
        gitOriginsQuery,
        {
          params: {
            hostId,
            dirs: projects.map((project) => project.remotePath),
          },
          source: "local_remote_dropdown",
        },
      );
      if (
        sourceGitOriginsResult?.isPending ||
        destinationGitOriginsResult?.isPending
      ) {
        candidates.push({
          status: "loading",
          hostDisplayName,
          hostId,
        });
        continue;
      }
      if (
        sourceGitOriginsResult?.isError ||
        destinationGitOriginsResult?.isError
      ) {
        candidates.push({
          status: "error",
          hostDisplayName,
          hostId,
        });
        continue;
      }
      const matchingRemotePath = findMatchingRemoteProjectRoot({
        sourceWorkspaceRoot,
        sourceGitRoot,
        sourceGitOrigins: sourceGitOriginsResult?.data?.origins,
        destinationWorkspaceRoots: projects.map(
          (project) => project.remotePath,
        ),
        destinationGitOrigins: destinationGitOriginsResult?.data?.origins,
      });
      const matchingProject =
        projects.find((project) => project.remotePath === matchingRemotePath) ??
        null;
      if (matchingProject != null) {
        candidates.push({
          status: "ready",
          hostDisplayName,
          project: matchingProject,
        });
      }
    }
    return candidates;
  },
);
function getRelativePathInsideGitRoot(
  workspaceRoot?: string | null,
  gitRoot?: string | null,
): string | null {
  if (workspaceRoot == null || gitRoot == null) return null;
  const normalizedWorkspaceRoot =
    normalizePathForPrefixComparison(workspaceRoot);
  const normalizedGitRoot = normalizePathForPrefixComparison(gitRoot);
  if (normalizedWorkspaceRoot === normalizedGitRoot) return "";
  const gitRootPrefix =
    normalizedGitRoot === "/" ? normalizedGitRoot : `${normalizedGitRoot}/`;
  return normalizedWorkspaceRoot.startsWith(gitRootPrefix)
    ? normalizedWorkspaceRoot.slice(gitRootPrefix.length)
    : null;
}
function findGitOriginForDirectory(
  directory: string | null | undefined,
  gitOrigins?: GitOrigin[] | null,
): GitOrigin | null {
  if (directory == null) return null;
  const normalizedDirectory = normalizeRemotePathForCompare(directory);
  return (
    gitOrigins?.find(
      (gitOrigin) =>
        normalizeRemotePathForCompare(gitOrigin.dir) === normalizedDirectory,
    ) ?? null
  );
}
function getRepositoryKey(originUrl?: string | null): string | null {
  const parsedOrigin = originUrl == null ? null : parseGitOriginUrl(originUrl);
  return parsedOrigin == null
    ? null
    : `${parsedOrigin.host}/${parsedOrigin.owner}/${parsedOrigin.repo}`.toLowerCase();
}
function normalizePathForPrefixComparison(path: string): string {
  const normalizedPath = normalizePlatformPath(path.trim()).replace(
    /\/+/g,
    "/",
  );
  return normalizedPath === "/"
    ? normalizedPath
    : normalizedPath.replace(/\/+$/, "");
}
function setActiveRemoteProjectId(
  appScopeStore: unknown,
  projectId: string | null,
): void {
  writeGlobalSetting(
    appScopeStore,
    globalSettingKeys.ACTIVE_REMOTE_PROJECT_ID,
    projectId ?? undefined,
  );
}
function writeRemoteProjects(
  appScopeStore: unknown,
  remoteProjects: RemoteProject[],
) {
  writeGlobalSetting(
    appScopeStore,
    globalSettingKeys.REMOTE_PROJECTS,
    remoteProjects,
  );
}
function useRemoteProjects(): RemoteProjectsState {
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const { data: remoteProjects = [], isLoading } = useGlobalState<{
    data?: RemoteProject[];
    isLoading?: boolean;
  }>(globalSettingKeys.REMOTE_PROJECTS);
  const { data: selectedRemoteProjectId = null } = useGlobalState<{
    data?: string | null;
  }>(globalSettingKeys.ACTIVE_REMOTE_PROJECT_ID);
  const selectedRemoteProject =
    remoteProjects.find((project) => project.id === selectedRemoteProjectId) ??
    null;
  React.useEffect(() => {
    if (
      !isLoading &&
      selectedRemoteProjectId != null &&
      selectedRemoteProject == null
    ) {
      writeGlobalSetting(
        appScopeStore,
        globalSettingKeys.ACTIVE_REMOTE_PROJECT_ID,
        undefined,
      );
    }
  }, [
    isLoading,
    appScopeStore,
    selectedRemoteProject,
    selectedRemoteProjectId,
  ]);
  return {
    selectedRemoteProject,
    selectedRemoteProjectId,
    setSelectedRemoteProjectId: (projectId) => {
      setActiveRemoteProjectId(appScopeStore, projectId);
    },
    remoteProjects,
    setRemoteProjects: (nextRemoteProjects) => {
      writeRemoteProjects(appScopeStore, nextRemoteProjects);
    },
  };
}
export {
  useRemoteProjects,
  setActiveRemoteProjectId,
  findRemoteProjectByPath,
  gitOriginsQuery,
  localRemoteProjectCandidatesSignal,
  findMatchingRemoteProjectRoot,
};
