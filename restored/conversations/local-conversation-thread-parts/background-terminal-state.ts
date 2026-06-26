// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
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

export interface BackgroundTerminalSnapshot
  extends ComparableBackgroundTerminal {
  processId: string;
  startedAtMs: number;
}

export interface BackgroundTerminalRow<
  Terminal extends ComparableBackgroundTerminal = ComparableBackgroundTerminal,
> {
  terminal: Terminal;
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
