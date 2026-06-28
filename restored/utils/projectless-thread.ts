// Restored from ref/webview/assets/projectless-thread-BKzpAc6P.js

import { vscodeApiN } from "../boundaries/vscode-api";
type ProjectWritableRoot = {
  path: string;
  [key: string]: unknown;
};
type ProjectlessThreadCwdResponse = {
  cwd: string | null;
  outputDirectory?: string | null;
  workspaceRoot: string;
  [key: string]: unknown;
};
function isProjectlessRootList(workspaceRoots: string[]) {
  return (
    workspaceRoots.length === 0 ||
    (workspaceRoots.length === 1 && workspaceRoots[0] === "~")
  );
}
async function resolveProjectlessThreadCwd(
  workspaceRoots: string[],
  {
    directoryName,
    prompt,
  }: {
    directoryName?: string | null;
    prompt?: string | null;
  } = {},
) {
  if (!isProjectlessRootList(workspaceRoots)) {
    return {
      cwd: workspaceRoots[0] ?? null,
      projectlessOutputDirectory: null,
      workspaceRoots,
    };
  }
  const { cwd, outputDirectory, workspaceRoot } = (await vscodeApiN(
    "projectless-thread-cwd",
    {
      params: {
        ...(directoryName == null
          ? {}
          : {
              directoryName,
            }),
        prompt: prompt ?? null,
      },
    },
  )) as ProjectlessThreadCwdResponse;
  return {
    cwd,
    projectlessOutputDirectory: outputDirectory,
    workspaceRoots: [workspaceRoot],
  };
}
async function resolveProjectThreadCwd({
  projectId,
  projectWritableRoots,
  legacyRoot = projectId,
  prompt,
}: {
  projectId: string;
  projectWritableRoots: Record<string, ProjectWritableRoot[] | undefined>;
  legacyRoot?: string | null;
  prompt?: string | null;
}) {
  const workspaceRoots = getProjectWritableRootPaths({
    projectId,
    projectWritableRoots,
    legacyRoot,
  });
  if (workspaceRoots.length === 1) {
    return {
      cwd: workspaceRoots[0],
      workspaceRoots,
    };
  }
  const generatedWorkspace = (await vscodeApiN("projectless-thread-cwd", {
    params: {
      prompt: prompt ?? null,
    },
  })) as ProjectlessThreadCwdResponse;
  return {
    cwd: generatedWorkspace.cwd,
    workspaceRoots: [generatedWorkspace.workspaceRoot, ...workspaceRoots],
    generatedWorkspace,
  };
}
function getProjectWritableRootPaths({
  projectId,
  projectWritableRoots,
  legacyRoot,
}: {
  projectId: string;
  projectWritableRoots: Record<string, ProjectWritableRoot[] | undefined>;
  legacyRoot?: string | null;
}) {
  return Object.hasOwn(projectWritableRoots, projectId)
    ? (projectWritableRoots[projectId]?.map((root) => root.path) ?? [])
    : legacyRoot == null
      ? []
      : [legacyRoot];
}
export {
  resolveProjectlessThreadCwd,
  isProjectlessRootList,
  resolveProjectThreadCwd,
};
