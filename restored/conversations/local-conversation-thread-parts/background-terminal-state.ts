// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background terminal state helpers for local conversation terminal summaries.

interface ComparableBackgroundTerminal {
  command: string;
  cwd: string | null | undefined;
  id: string;
  turnId?: string | null;
}

interface BackgroundTerminalProcessSnapshot {
  command: string;
  cwd: string | null | undefined;
  itemId: string;
  processId: string;
  startedAtMs: number;
  turnId?: string | null;
}

export type BackgroundTerminalStatus =
  | "running"
  | "not-found"
  | "starting"
  | "stopped"
  | "stopping";

export interface BackgroundTerminalSnapshot
  extends ComparableBackgroundTerminal {
  processId: string;
  startedAtMs: number;
}

interface BackgroundTerminalActionState {
  status: BackgroundTerminalStatus;
}

interface BackgroundTerminalStatusRow {
  metrics?: unknown | null;
}

interface BackgroundTerminalProcessIdentity {
  id: string;
}

interface BackgroundTerminalProcessRow<
  Process extends BackgroundTerminalProcessIdentity,
> {
  metrics?: unknown | null;
  process: Process;
}

interface BackgroundTerminalActionStateWithRow<
  Process extends BackgroundTerminalProcessIdentity,
> extends BackgroundTerminalActionState {
  row: BackgroundTerminalProcessRow<Process>;
}

interface BackgroundTerminalActionStateWithRowIndex<
  Process extends BackgroundTerminalProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
> {
  row: Row;
  rowIndex?: number | null;
}

export interface BackgroundTerminalRow<
  Terminal extends ComparableBackgroundTerminal = ComparableBackgroundTerminal,
> {
  terminal: Terminal;
}

export interface BackgroundTerminalProcessRecord {
  chatTitle: null;
  command: string;
  conversationId: string;
  cwd: string | null | undefined;
  hostId: string;
  id: string;
  itemId: string;
  osPid: null;
  processId: string;
  source: "background-terminal";
  startedAtMs: number;
  stopAction: "kill-child-process";
  turnId?: string | null;
}

export function hasBackgroundTerminalRow(
  row: unknown,
): row is BackgroundTerminalRow {
  return typeof row === "object" && row !== null && "terminal" in row;
}

export function hasMatchingBackgroundTerminal<
  Terminal extends ComparableBackgroundTerminal,
>(
  backgroundTerminals: Terminal[],
  candidateTerminal: ComparableBackgroundTerminal,
): boolean {
  return backgroundTerminals.some(
    (backgroundTerminal) =>
      backgroundTerminal.id === candidateTerminal.id ||
      (backgroundTerminal.command === candidateTerminal.command &&
        backgroundTerminal.cwd === candidateTerminal.cwd &&
        backgroundTerminal.turnId === candidateTerminal.turnId),
  );
}

export function createBackgroundTerminalSnapshot(
  process: BackgroundTerminalProcessSnapshot,
): BackgroundTerminalSnapshot {
  return {
    command: process.command,
    cwd: process.cwd,
    id: process.itemId,
    processId: process.processId,
    startedAtMs: process.startedAtMs,
    turnId: process.turnId,
  };
}

export function resolveBackgroundTerminalStatus(
  row: BackgroundTerminalStatusRow,
  actionState: BackgroundTerminalActionState | null | undefined,
  hasChildProcesses: boolean,
): BackgroundTerminalStatus {
  return actionState == null
    ? !hasChildProcesses || row.metrics != null
      ? "running"
      : "not-found"
    : actionState.status;
}

export function appendRegisteredBackgroundTerminalRows<
  Process extends BackgroundTerminalProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
  RegisteredRow extends BackgroundTerminalProcessRow<Process>,
>(
  rows: Row[],
  registeredRows: RegisteredRow[],
  isSameProcess: (
    existingProcess: Process,
    registeredProcess: Process,
  ) => boolean,
): Array<Row | RegisteredRow> {
  if (registeredRows.length === 0) {
    return rows;
  }

  let nextRows: Array<Row | RegisteredRow> = rows.slice();
  for (let registeredRow of registeredRows) {
    if (
      !nextRows.some((row) => isSameProcess(row.process, registeredRow.process))
    ) {
      nextRows.push(registeredRow);
    }
  }
  return nextRows;
}

export function findBackgroundTerminalMetricsRow<
  Process extends BackgroundTerminalProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
  ActionState extends BackgroundTerminalActionStateWithRow<Process>,
>(
  rows: Row[],
  actionState: ActionState,
  isSameProcess: (existingProcess: Process, actionProcess: Process) => boolean,
): Row | null {
  return (
    rows.find(
      (row) =>
        row.metrics != null &&
        isSameProcess(row.process, actionState.row.process),
    ) ?? null
  );
}

export function insertBackgroundTerminalActionRows<
  Process extends BackgroundTerminalProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
  ActionState extends BackgroundTerminalActionStateWithRowIndex<Process, Row>,
>(
  rows: Row[],
  actionStatesByProcessId: Map<string, ActionState>,
  isSameProcess: (existingProcess: Process, actionProcess: Process) => boolean,
): Row[] {
  if (actionStatesByProcessId.size === 0) {
    return rows;
  }

  let nextRows = rows.slice();
  let rowsToInsert: Array<{ row: Row; rowIndex: number }> = [];
  for (let actionState of actionStatesByProcessId.values()) {
    let actionRow = actionState.row;
    if (
      nextRows.some((row) => isSameProcess(row.process, actionRow.process)) ||
      !hasBackgroundTerminalRow(actionRow)
    ) {
      continue;
    }

    rowsToInsert.push({
      row: actionRow,
      rowIndex: actionState.rowIndex ?? nextRows.length,
    });
  }

  rowsToInsert.sort((left, right) => left.rowIndex - right.rowIndex);
  for (let rowToInsert of rowsToInsert) {
    nextRows.splice(
      Math.min(rowToInsert.rowIndex, nextRows.length),
      0,
      rowToInsert.row,
    );
  }
  return nextRows;
}

export function pruneSettledBackgroundTerminalActionStates<
  Process extends BackgroundTerminalProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
  ActionState extends BackgroundTerminalActionStateWithRow<Process>,
>(
  rows: Row[],
  actionStatesByProcessId: Map<string, ActionState>,
  processSnapshotTimeMs: number,
  isSettledActionState: (
    actionState: ActionState,
    matchingRow: Row | null,
    processSnapshotTimeMs: number,
  ) => boolean,
  isSameProcess: (existingProcess: Process, actionProcess: Process) => boolean,
): Map<string, ActionState> {
  if (actionStatesByProcessId.size === 0) {
    return actionStatesByProcessId;
  }

  let rowsByProcessId = new Map(
    rows
      .filter((row) => row.metrics != null)
      .map((row) => [row.process.id, row]),
  );
  let activeActionStates = new Map<string, ActionState>();
  for (let [processId, actionState] of actionStatesByProcessId) {
    let matchingRow =
      rowsByProcessId.get(processId) ??
      findBackgroundTerminalMetricsRow(rows, actionState, isSameProcess);
    if (
      !isSettledActionState(actionState, matchingRow, processSnapshotTimeMs)
    ) {
      activeActionStates.set(processId, actionState);
    }
  }
  return activeActionStates;
}

export function createBackgroundTerminalProcessRecord({
  conversationId,
  hostId,
  terminal,
}: {
  conversationId: string;
  hostId: string;
  terminal: BackgroundTerminalSnapshot;
}): BackgroundTerminalProcessRecord {
  return {
    chatTitle: null,
    command: terminal.command,
    conversationId,
    cwd: terminal.cwd,
    hostId,
    id: `${conversationId}:${terminal.turnId ?? "unknown"}:${terminal.id}`,
    itemId: terminal.id,
    osPid: null,
    processId: terminal.processId,
    source: "background-terminal",
    startedAtMs: terminal.startedAtMs,
    stopAction: "kill-child-process",
    turnId: terminal.turnId,
  };
}
