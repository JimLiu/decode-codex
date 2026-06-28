// Restored from ref/webview/assets/local-projects-CoROwpJd.js
// Local project CRUD operations, source normalization, and thread-start context resolution.
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import {
  $i as globalSettingValueSignal,
  n as activeWorkspaceRootsQuery,
  ta as setGlobalSettingData,
} from "../../boundaries/thread-context-inputs.facade";
import {
  callCodexVscodeApi,
  vscodeApiF as vscodeBridge,
} from "../../boundaries/vscode-api";
import {
  normalizeFilesystemPath,
  toComparableFilesystemPath,
} from "../../boundaries/rpc.facade";
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import { setActiveRemoteProjectId } from "../remote-projects";
import { resolveProjectThreadCwd } from "../../utils/projectless-thread";
type LocalProjectMetadata = {
  createdAt: number;
  id: string;
  name: string;
  updatedAt: number;
};
type LocalProjectMap = Record<string, LocalProjectMetadata | undefined>;
type ProjectWritableRoot = {
  kind?: "local";
  label?: string;
  path: string;
};
type ProjectWritableRoots = Record<string, ProjectWritableRoot[] | undefined>;
type ProjectReference = {
  isLocalProject?: boolean;
  path?: string | null;
  projectId: string;
};
type NormalizedProjectReference = {
  folderPath: string | null;
  metadataProjectId: string | null;
  projectId: string;
};
type LocalProjectSelection = {
  isLocalProject: true;
  projectId: string;
};
type AppScopeStore = {
  query: {
    setData(signal: unknown, keyOrValue: unknown, value?: unknown): void;
    snapshot(
      signal: unknown,
      key: string,
    ): {
      getOrFetch(): Promise<unknown>;
      setData(
        updater: (
          current: {
            value?: unknown;
          } | null,
        ) => unknown,
      ): void;
    };
  };
};
type SetGlobalSetting = (key: string, value: unknown) => Promise<void> | void;
type WorkspaceRootOptions = {
  roots: string[];
};
type ResolveLocalProjectThreadContextParams = {
  projectId: string;
  prompt?: string | null;
  validateProjectId?: boolean;
};
const {
  _srcZt: parseLocalProjects,
  globalSettingKeys,
  srcEt: parseProjectWritableRoots,
  srcRt: updateLocalProjects,
} = sourceRuntime as {
  _srcZt(value: unknown): LocalProjectMap;
  globalSettingKeys: Record<string, string>;
  srcEt(value: unknown): ProjectWritableRoots;
  srcRt(params: {
    localProjects: LocalProjectMap;
    project: LocalProjectMetadata | null;
    projectId: string;
  }): LocalProjectMap;
};
const DEFAULT_PROJECT_NAME = "New project";
const localProjectActions = {
  create: createLocalProject,
  edit: editLocalProject,
  getFolderPath: getLocalProjectFolderPath,
  getId: getLocalProjectId,
  getThreadStartCwd: getLocalProjectThreadStartCwd,
  remove: removeLocalProject,
  rename: renameLocalProject,
  select: selectLocalProject,
  setWritableRootsQueryData: setLocalProjectWritableRootsQueryData,
};
async function createLocalProject({
  addWritableRoot,
  existingLocalProjects,
  name,
  now,
  projectId,
  projectOrder,
  setGlobalSetting,
  sources,
}: {
  addWritableRoot(params: {
    legacyRoot: null;
    projectId: string;
    root: string;
  }): Promise<{
    roots: ProjectWritableRoot[];
  }>;
  existingLocalProjects?: LocalProjectMap | null;
  name: string;
  now: number;
  projectId: string;
  projectOrder?: string[] | null;
  setGlobalSetting: SetGlobalSetting;
  sources: string[];
}) {
  await setGlobalSetting(
    globalSettingKeys.LOCAL_PROJECTS,
    updateLocalProjects({
      localProjects: existingLocalProjects ?? {},
      projectId,
      project: {
        createdAt: now,
        id: projectId,
        name: getProjectName(name, sources),
        updatedAt: now,
      },
    }),
  );
  await setGlobalSetting(globalSettingKeys.PROJECT_ORDER, [
    projectId,
    ...(projectOrder ?? []).filter((orderedProjectId) => {
      return orderedProjectId !== projectId;
    }),
  ]);
  let roots: ProjectWritableRoot[] = [];
  await Promise.all(
    dedupeLocalProjectSources(sources).map(async (root) => {
      ({ roots } = await addWritableRoot({
        legacyRoot: null,
        projectId,
        root,
      }));
    }),
  );
  return {
    project: {
      isLocalProject: true,
      projectId,
    } satisfies LocalProjectSelection,
    roots,
  };
}
function selectLocalProject(store: AppScopeStore, project: ProjectReference) {
  const normalizedProject = normalizeProjectReference(project);
  store.query.setData(
    globalSettingValueSignal,
    globalSettingKeys.ACTIVE_REMOTE_PROJECT_ID,
    {
      value: undefined,
    },
  );
  store.query.setData(activeWorkspaceRootsQuery, {
    roots: [normalizedProject.projectId],
  });
  setActiveRemoteProjectId(store, null);
  if (normalizedProject.folderPath == null) {
    setGlobalSettingData(store, globalSettingKeys.ACTIVE_WORKSPACE_ROOTS, [
      normalizedProject.projectId,
    ]);
  } else {
    vscodeBridge.dispatchMessage("electron-set-active-workspace-root", {
      root: normalizedProject.folderPath,
    });
  }
  return normalizedProject.projectId;
}
async function setLocalProjectWritableRootsQueryData(
  store: AppScopeStore,
  projectId: string,
  roots: ProjectWritableRoot[],
) {
  const writableRootsQuery = store.query.snapshot(
    globalSettingValueSignal,
    globalSettingKeys.PROJECT_WRITABLE_ROOTS,
  );
  await writableRootsQuery.getOrFetch();
  writableRootsQuery.setData((current) => ({
    value: {
      ...parseProjectWritableRoots(current?.value),
      [projectId]: roots,
    },
  }));
}
async function renameLocalProject({
  existingLocalProjects,
  name,
  now,
  project,
  setGlobalSetting,
  updateWorkspaceRootLabel,
}: {
  existingLocalProjects?: LocalProjectMap | null;
  name: string;
  now: number;
  project: ProjectReference;
  setGlobalSetting: SetGlobalSetting;
  updateWorkspaceRootLabel?: (root: string, label: string) => void;
}) {
  const normalizedProject = normalizeProjectReference(project);
  const trimmedName = name.trim();
  if (normalizedProject.folderPath != null) {
    vscodeBridge.dispatchMessage("electron-rename-workspace-root-option", {
      label: trimmedName,
      root: normalizedProject.folderPath,
    });
    updateWorkspaceRootLabel?.(normalizedProject.folderPath, trimmedName);
    return;
  }
  const existingProject = existingLocalProjects?.[normalizedProject.projectId];
  if (existingProject == null) return;
  await setGlobalSetting(
    globalSettingKeys.LOCAL_PROJECTS,
    updateLocalProjects({
      localProjects: existingLocalProjects ?? {},
      projectId: normalizedProject.projectId,
      project: {
        ...existingProject,
        name: trimmedName || existingProject.name,
        updatedAt: now,
      },
    }),
  );
}
async function editLocalProject({
  addWritableRoot,
  clearWritableRoots,
  existingLocalProjects,
  name,
  now,
  project,
  setGlobalSetting,
  sources,
  updateWorkspaceRootLabel,
}: {
  addWritableRoot(params: {
    legacyRoot: string | null;
    projectId: string;
    root: string;
  }): Promise<{
    roots: ProjectWritableRoot[];
  }>;
  clearWritableRoots(params: {
    legacyRoot: string | null;
    projectId: string;
  }): Promise<{
    roots: ProjectWritableRoot[];
  }>;
  existingLocalProjects?: LocalProjectMap | null;
  name: string;
  now: number;
  project: ProjectReference;
  setGlobalSetting: SetGlobalSetting;
  sources: string[];
  updateWorkspaceRootLabel?: (root: string, label: string) => void;
}) {
  await renameLocalProject({
    existingLocalProjects,
    name,
    now,
    project,
    setGlobalSetting,
    updateWorkspaceRootLabel,
  });
  const normalizedProject = normalizeProjectReference(project);
  let { roots } = await clearWritableRoots({
    legacyRoot: normalizedProject.folderPath,
    projectId: normalizedProject.projectId,
  });
  await Promise.all(
    dedupeLocalProjectSources(sources).map(async (root) => {
      ({ roots } = await addWritableRoot({
        legacyRoot: normalizedProject.folderPath,
        projectId: normalizedProject.projectId,
        root,
      }));
    }),
  );
  return roots;
}
async function removeLocalProject({
  clearWritableRoots,
  existingLocalProjects,
  pinnedProjectIds,
  project,
  projectOrder,
  setGlobalSetting,
  workspaceRootOptions,
}: {
  clearWritableRoots(params: {
    legacyRoot: string | null;
    projectId: string;
  }): Promise<unknown>;
  existingLocalProjects?: LocalProjectMap | null;
  pinnedProjectIds?: string[] | null;
  project: ProjectReference;
  projectOrder?: string[] | null;
  setGlobalSetting: SetGlobalSetting;
  workspaceRootOptions: string[];
}) {
  const normalizedProject = normalizeProjectReference(project);
  const metadataCleanup =
    normalizedProject.metadataProjectId == null
      ? []
      : [
          setGlobalSetting(
            globalSettingKeys.LOCAL_PROJECTS,
            updateLocalProjects({
              localProjects: existingLocalProjects ?? {},
              projectId: normalizedProject.metadataProjectId,
              project: null,
            }),
          ),
          clearWritableRoots({
            legacyRoot: null,
            projectId: normalizedProject.metadataProjectId,
          }),
        ];
  await Promise.all([
    ...metadataCleanup,
    setGlobalSetting(
      globalSettingKeys.PROJECT_ORDER,
      projectOrder?.filter(
        (projectId) => projectId !== normalizedProject.projectId,
      ),
    ),
    setGlobalSetting(
      globalSettingKeys.PINNED_PROJECT_IDS,
      pinnedProjectIds?.filter(
        (projectId) => projectId !== normalizedProject.projectId,
      ),
    ),
  ]);
  if (normalizedProject.folderPath != null) {
    vscodeBridge.dispatchMessage("electron-update-workspace-root-options", {
      roots: workspaceRootOptions.filter(
        (root) => root !== normalizedProject.folderPath,
      ),
    });
  }
}
function getLocalProjectId(project: ProjectReference) {
  return normalizeProjectReference(project).projectId;
}
function getLocalProjectFolderPath(project: ProjectReference) {
  return normalizeProjectReference(project).folderPath;
}
function getLocalProjectThreadStartCwd(project: ProjectReference) {
  return normalizeProjectReference(project).projectId;
}
function normalizeProjectReference(
  project: ProjectReference,
): NormalizedProjectReference {
  const projectId = project.projectId;
  if (project.isLocalProject === true) {
    return {
      folderPath: null,
      metadataProjectId: projectId,
      projectId,
    };
  }
  const folderPath = project.path ?? projectId;
  return {
    folderPath,
    metadataProjectId: null,
    projectId: folderPath,
  };
}
function dedupeLocalProjectSources(sources: string[]) {
  const seenComparablePaths = new Set<string>();
  const uniqueSources: string[] = [];
  for (const source of sources) {
    const comparablePath = toComparableFilesystemPath(source);
    if (seenComparablePaths.has(comparablePath)) continue;
    seenComparablePaths.add(comparablePath);
    uniqueSources.push(source);
  }
  return uniqueSources;
}
async function resolveLocalProjectThreadContext({
  projectId,
  prompt,
  validateProjectId = false,
}: ResolveLocalProjectThreadContextParams) {
  const [
    { value: localProjectsValue },
    { value: projectWritableRootsValue },
    workspaceRootOptions,
  ] = await Promise.all([
    callCodexVscodeApi("get-global-state", {
      params: {
        key: globalSettingKeys.LOCAL_PROJECTS,
      },
    }) as Promise<{
      value: unknown;
    }>,
    callCodexVscodeApi("get-global-state", {
      params: {
        key: globalSettingKeys.PROJECT_WRITABLE_ROOTS,
      },
    }) as Promise<{
      value: unknown;
    }>,
    validateProjectId
      ? (callCodexVscodeApi("workspace-root-options", {
          params: {
            hostId: LOCAL_HOST_ID,
          },
        }) as Promise<WorkspaceRootOptions>)
      : Promise.resolve(null),
  ]);
  const localProjects = parseLocalProjects(localProjectsValue);
  const hasSavedLocalProject = Object.hasOwn(localProjects, projectId);
  if (
    workspaceRootOptions != null &&
    !workspaceRootOptions.roots.includes(projectId) &&
    !hasSavedLocalProject
  ) {
    throw Error(
      `Unknown projectId: ${projectId}\nSaved projectIds:\n${workspaceRootOptions.roots.join("\n")}`,
    );
  }
  const projectWritableRoots = parseProjectWritableRoots(
    projectWritableRootsValue,
  );
  if (
    !Object.hasOwn(projectWritableRoots, projectId) &&
    !hasSavedLocalProject
  ) {
    return null;
  }
  const resolvedThread = await resolveProjectThreadCwd({
    legacyRoot: hasSavedLocalProject ? null : projectId,
    projectId,
    projectWritableRoots,
    prompt,
  });
  return {
    cwd: resolvedThread.cwd,
    projectAssignment: {
      ...(hasSavedLocalProject
        ? {}
        : {
            path: projectId,
          }),
      cwd: resolvedThread.cwd,
      pendingCoreUpdate: false,
      projectId,
      projectKind: "local",
    },
    projectlessOutputDirectory:
      resolvedThread.generatedWorkspace?.outputDirectory ?? null,
    workspaceRoots: resolvedThread.workspaceRoots,
  };
}
function getProjectName(name: string, sources: string[]) {
  return (
    name.trim() ||
    getFilesystemPathBasename(sources[0] ?? "").trim() ||
    DEFAULT_PROJECT_NAME
  );
}
function getFilesystemPathBasename(path: string) {
  const normalizedPath = normalizeFilesystemPath(path).replace(/\/+$/, "");
  return normalizedPath.split("/").at(-1) ?? normalizedPath;
}
export {
  dedupeLocalProjectSources,
  localProjectActions,
  resolveLocalProjectThreadContext,
};
