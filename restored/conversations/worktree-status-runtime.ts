// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Query atoms and refresh helpers that inspect the managed-worktree state backing a
// conversation, used to drive the worktree-restore banner.

import { getWorktreePathFromGitDir } from "../utils/worktree-paths";
import {
  appAtomScope,
  canonicalizeRootPath,
  codexHomeQueryAtom,
  conversationCwdAtom,
  conversationHostIdAtom,
  conversationWorkspaceStateAtom,
  derivedAtomFamily,
  DURATIONS,
  getHostBridge,
  hostConfigAtom,
  isPathWithin,
  normalizePath,
  queryAtomFamily,
  uniq,
  worktreeStatusQueryKey,
  workspaceRootsQueryAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export type WorktreeStatus =
  | { kind: "available" }
  | { kind: "restorable"; worktreePath: string | null; [key: string]: unknown }
  | { kind: "gone"; worktreePath: string | null }
  | {
      kind: "unavailable";
      reason?: string;
      worktreePath: string | null;
    };

export interface WorktreeStatusTarget {
  conversationId: string;
  cwd: string | null;
  hostId: string;
}

interface QueryStateHandle {
  query: {
    getOrFetch<T>(atom: unknown, params: unknown): Promise<T>;
    invalidate(
      atom: unknown,
      params: unknown,
      options?: { exact?: boolean },
    ): Promise<void>;
    fetch<T>(atom: unknown, params: unknown): Promise<T>;
  };
  queryClient: {
    invalidateQueries(filter: { queryKey: unknown }): Promise<void>;
  };
}

const AVAILABLE_STATUS: WorktreeStatus = { kind: "available" };
const INSPECTION_FAILED_STATUS: WorktreeStatus = {
  kind: "unavailable",
  reason: "inspection-failed",
  worktreePath: null,
};

export const WORKTREE_RESTORE_REQUIRED = "worktree_restore_required";
export const WORKTREE_GONE = "worktree_gone";
export const WORKTREE_STATUS_UNAVAILABLE = "worktree_status_unavailable";

export const worktreeStatusQueryAtom = queryAtomFamily(
  appAtomScope,
  (
    { conversationId, cwd, hostId }: WorktreeStatusTarget,
    { get }: { get: <T>(atom: unknown, param?: unknown) => T },
  ) => {
    const queryKeyPrefix = worktreeStatusQueryKey(hostId);

    if (cwd == null) {
      return {
        queryFn: async () => AVAILABLE_STATUS,
        queryKey: [...queryKeyPrefix, "available", null],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    const codexHome = get<{
      data: { codexHome: string; worktreesSegment: string } | null;
      isError: boolean;
    }>(codexHomeQueryAtom, { hostId });

    if (codexHome.data == null) {
      return {
        enabled: codexHome.isError,
        queryFn: async () => INSPECTION_FAILED_STATUS,
        queryKey: [
          ...queryKeyPrefix,
          codexHome.isError ? "codex-home-error" : "codex-home-loading",
          cwd,
        ],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    if (!isPathWithin(cwd, codexHome.data.codexHome)) {
      return {
        queryFn: async () => AVAILABLE_STATUS,
        queryKey: [...queryKeyPrefix, "available", cwd],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    const worktreeRoot = getWorktreePathFromGitDir(
      cwd,
      codexHome.data.worktreesSegment,
    );
    if (worktreeRoot == null) {
      return {
        queryFn: async () => INSPECTION_FAILED_STATUS,
        queryKey: [...queryKeyPrefix, "invalid-worktree-root", cwd],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    const hostConfig = get<{ id: string }>(hostConfigAtom, hostId);
    if (hostConfig.id !== hostId) {
      return {
        enabled: false,
        queryFn: async () => INSPECTION_FAILED_STATUS,
        queryKey: [...queryKeyPrefix, "host-config-loading", cwd],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    const workspaceState = get<{
      pending?: { cwd: string; projectSources: string[] };
      applied?: { cwd: string; projectSources: string[] };
    } | null>(conversationWorkspaceStateAtom, conversationId);
    const projectSources =
      workspaceState?.pending?.cwd === cwd
        ? workspaceState.pending.projectSources
        : workspaceState?.applied?.cwd === cwd
          ? workspaceState.applied.projectSources
          : null;
    const workspaceRoots = get<{
      data: { roots: string[] } | null;
      isError: boolean;
    }>(workspaceRootsQueryAtom, { hostId });

    if (
      projectSources == null &&
      workspaceRoots.data == null &&
      !workspaceRoots.isError
    ) {
      return {
        enabled: false,
        queryFn: async () => INSPECTION_FAILED_STATUS,
        queryKey: [...queryKeyPrefix, "workspace-roots-loading", worktreeRoot],
        staleTime: DURATIONS.FIVE_SECONDS,
      };
    }

    const candidateRoots = uniq([
      ...(projectSources ?? []),
      ...(workspaceRoots.data?.roots ?? []),
    ]).map(canonicalizeRootPath);
    const worktreePath = normalizePath(worktreeRoot);

    return {
      queryFn: async (): Promise<WorktreeStatus> => {
        const result = await getHostBridge("git").request<WorktreeStatus>({
          method: "managed-worktree-state",
          params: {
            candidateRoots,
            cwd,
            hostConfig,
            operationSource: "worktree_restore_banner",
            worktreePath,
          },
        });
        switch (result.kind) {
          case "available":
            return AVAILABLE_STATUS;
          case "restorable":
            return { ...result, worktreePath };
          case "gone":
            return { kind: "gone", worktreePath };
          case "unavailable":
            return { ...result, worktreePath };
        }
      },
      queryKey: [
        ...queryKeyPrefix,
        "inspect",
        cwd,
        worktreePath,
        candidateRoots,
      ],
      staleTime: DURATIONS.FIVE_SECONDS,
    };
  },
);

export const worktreeStatusForConversationAtom = derivedAtomFamily(
  appAtomScope,
  (
    conversationId: string,
    { get }: { get: <T>(atom: unknown, param?: unknown) => T },
  ) =>
    get(worktreeStatusQueryAtom, {
      conversationId,
      cwd: get(conversationCwdAtom, conversationId),
      hostId: get(conversationHostIdAtom, conversationId),
    }),
);

export const worktreeStatusKindAtom = derivedAtomFamily(
  appAtomScope,
  (
    conversationId: string,
    { get }: { get: <T>(atom: unknown, param?: unknown) => T },
  ) => {
    const status = get<{ isError: boolean; data: WorktreeStatus | null }>(
      worktreeStatusForConversationAtom,
      conversationId,
    );
    return status.isError
      ? "unavailable"
      : status.data == null
        ? "loading"
        : status.data.kind;
  },
);

export async function refreshWorktreeStatus(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<WorktreeStatus> {
  await invalidateWorktreeInputs(store, hostId);
  return refetchWorktreeStatus(store, { conversationId, cwd, hostId });
}

export async function invalidateWorktreeStatusForHost(
  store: QueryStateHandle,
  hostId: string,
): Promise<void> {
  await invalidateWorktreeInputs(store, hostId);
  await store.queryClient.invalidateQueries({
    queryKey: worktreeStatusQueryKey(hostId),
  });
}

export async function ensureWorktreeAvailable(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<void> {
  let status: WorktreeStatus;
  try {
    status = await refetchWorktreeStatus(store, {
      conversationId,
      cwd,
      hostId,
    });
  } catch {
    throw Error(WORKTREE_STATUS_UNAVAILABLE);
  }
  switch (status.kind) {
    case "available":
      return;
    case "restorable":
      throw Error(WORKTREE_RESTORE_REQUIRED);
    case "gone":
      throw Error(WORKTREE_GONE);
    case "unavailable":
      throw Error(WORKTREE_STATUS_UNAVAILABLE);
  }
}

export async function refetchWorktreeStatus(
  store: QueryStateHandle,
  { conversationId, cwd, hostId }: WorktreeStatusTarget,
): Promise<WorktreeStatus> {
  const codexHome = await store.query.getOrFetch<{ codexHome: string }>(
    codexHomeQueryAtom,
    { hostId },
  );
  if (isPathWithin(cwd, codexHome.codexHome)) {
    await store.query
      .getOrFetch(workspaceRootsQueryAtom, { hostId })
      .catch(() => undefined);
  }
  const target = { conversationId, cwd: normalizePath(cwd), hostId };
  await store.query.invalidate(worktreeStatusQueryAtom, target, {
    exact: true,
  });
  return store.query.fetch<WorktreeStatus>(worktreeStatusQueryAtom, target);
}

async function invalidateWorktreeInputs(
  store: QueryStateHandle,
  hostId: string,
): Promise<void> {
  await Promise.all([
    store.query.invalidate(codexHomeQueryAtom, { hostId }, { exact: true }),
    store.query.invalidate(
      workspaceRootsQueryAtom,
      { hostId },
      { exact: true },
    ),
  ]);
}
