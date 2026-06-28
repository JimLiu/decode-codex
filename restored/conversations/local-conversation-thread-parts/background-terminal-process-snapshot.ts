// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background terminal process snapshot selectors for local conversation panels.

interface ProcessStartedAtSnapshot {
  startedAtMs?: number | null;
}

interface BackgroundTerminalActionProcessIdentity {
  conversationId: string | null | undefined;
}

interface BackgroundTerminalActionState<
  Process extends BackgroundTerminalActionProcessIdentity,
> {
  expiresAtMs?: number | null;
  row: {
    process: Process;
  };
  status: string;
}

interface ChildProcessSnapshot {
  ageSeconds?: number | null;
  cpuPercent?: unknown;
  rssKb?: unknown;
}

interface ChildProcessSnapshotResponse<Process extends ChildProcessSnapshot> {
  processes: Process[];
}

interface NormalizedChildProcessSnapshot<Process extends ChildProcessSnapshot> {
  processSnapshotTimeMs: number;
  processes: Array<
    Process & {
      ageSeconds: number | null;
      cpuPercent: null;
      rssKb: null;
    }
  >;
}

interface SelectedChildProcessSnapshot<Process extends ChildProcessSnapshot> {
  processSnapshotTimeMs: number;
  processes: Process[];
}

export function createBackgroundTerminalProcessSnapshotSelector<
  Terminal extends ProcessStartedAtSnapshot,
  RestoredProcess extends ProcessStartedAtSnapshot,
  PersistedProcess extends ProcessStartedAtSnapshot,
  ActionProcess extends BackgroundTerminalActionProcessIdentity,
  ActionState extends BackgroundTerminalActionState<ActionProcess>,
  Process extends ChildProcessSnapshot,
>({
  actionStatesByProcessId,
  backgroundTerminals,
  conversationId,
  isEqual,
  persistedProcesses,
  restoredProcesses,
}: {
  actionStatesByProcessId: Map<string, ActionState>;
  backgroundTerminals: Terminal[];
  conversationId: string | null | undefined;
  isEqual: (
    left: NormalizedChildProcessSnapshot<Process>,
    right: NormalizedChildProcessSnapshot<Process>,
  ) => boolean;
  persistedProcesses: PersistedProcess[] | null | undefined;
  restoredProcesses: RestoredProcess[];
}): (
  snapshot: ChildProcessSnapshotResponse<Process>,
) => SelectedChildProcessSnapshot<Process> {
  let cachedSnapshot: {
    comparison: NormalizedChildProcessSnapshot<Process>;
    selected: SelectedChildProcessSnapshot<Process>;
  } | null = null;

  return (snapshot) => {
    let nowMs = Date.now();
    let startingActionStates = Array.from(
      actionStatesByProcessId.values(),
    ).filter(
      (actionState) =>
        actionState.status === "starting" &&
        actionState.row.process.conversationId === conversationId,
    );
    let latestExpiredStartingActionMs = startingActionStates.reduce(
      (latestExpiresAtMs, actionState) =>
        actionState.expiresAtMs != null && actionState.expiresAtMs <= nowMs
          ? Math.max(latestExpiresAtMs, actionState.expiresAtMs)
          : latestExpiresAtMs,
      0,
    );
    let hasActiveStartingAction = startingActionStates.some(
      (actionState) =>
        actionState.expiresAtMs == null || actionState.expiresAtMs > nowMs,
    );
    let latestNewProcessRefreshMs = snapshot.processes.some(
      (process) => process.ageSeconds == null,
    )
      ? [
          ...backgroundTerminals,
          ...restoredProcesses,
          ...(persistedProcesses ?? []),
        ].reduce(
          (latestRefreshMs, process) =>
            process.startedAtMs == null
              ? latestRefreshMs
              : Math.max(latestRefreshMs, process.startedAtMs + 3000),
          0,
        )
      : 0;
    let comparison = {
      processSnapshotTimeMs:
        hasActiveStartingAction || latestNewProcessRefreshMs > nowMs
          ? nowMs
          : Math.max(latestExpiredStartingActionMs, latestNewProcessRefreshMs),
      processes: snapshot.processes.map((process) => ({
        ...process,
        ageSeconds:
          process.ageSeconds == null ? null : Math.min(process.ageSeconds, 3),
        cpuPercent: null,
        rssKb: null,
      })),
    };
    if (
      cachedSnapshot != null &&
      isEqual(cachedSnapshot.comparison, comparison)
    ) {
      return cachedSnapshot.selected;
    }

    let selected = {
      processSnapshotTimeMs: nowMs,
      processes: snapshot.processes,
    };
    cachedSnapshot = {
      comparison,
      selected,
    };
    return selected;
  };
}
