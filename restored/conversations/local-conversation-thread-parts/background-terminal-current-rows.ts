// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Current background terminal row helpers for local conversation panels.

import {
  createBackgroundTerminalProcessRecord,
  type BackgroundTerminalProcessRecord,
  type BackgroundTerminalSnapshot,
} from "./background-terminal-state";

interface BackgroundTerminalCurrentRow<
  Terminal extends BackgroundTerminalSnapshot,
  Metrics,
> {
  metrics: Metrics | null;
  process: BackgroundTerminalProcessRecord;
  terminal: Terminal;
}

interface RestartableBackgroundTerminalProcess {
  chatTitle: string | null;
  command: string;
  conversationId: string;
  cwd: string | null | undefined;
  hostId: string;
  id: string;
  itemId: string;
  osPid: number | null;
  processId: string | null;
  startedAtMs: number;
  turnId?: string | null;
}

interface RestartableBackgroundTerminal {
  id: string;
  processId: string | null;
  startedAtMs: number;
}

interface RestartableBackgroundTerminalRow<
  Process extends RestartableBackgroundTerminalProcess,
  Terminal extends RestartableBackgroundTerminal,
  Metrics,
> {
  metrics: Metrics | null;
  process: Process;
  terminal: Terminal;
}

export function createStartingBackgroundTerminalRow<
  Process extends RestartableBackgroundTerminalProcess,
  Terminal extends RestartableBackgroundTerminal,
  Metrics,
  Row extends RestartableBackgroundTerminalRow<Process, Terminal, Metrics>,
>(
  row: Row,
  sessionId: string,
  startedAtMs: number,
): Row & {
  metrics: null;
  process: Process & {
    commandExecutionStartedAtMs: number;
    itemId: string;
    osPid: null;
    processId: null;
    startedAtMs: number;
  };
  terminal: Terminal & {
    id: string;
    processId: null;
    startedAtMs: number;
  };
} {
  return {
    ...row,
    metrics: null,
    process: {
      ...row.process,
      commandExecutionStartedAtMs: startedAtMs,
      itemId: sessionId,
      osPid: null,
      processId: null,
      startedAtMs,
    },
    terminal: {
      ...row.terminal,
      id: sessionId,
      processId: null,
      startedAtMs,
    },
  };
}

export function createBackgroundTerminalRestartRecord(
  process: RestartableBackgroundTerminalProcess,
  sessionId: string,
  startedAtMs: number,
) {
  return {
    chatTitle: process.chatTitle,
    command: process.command,
    conversationId: process.conversationId,
    cwd: process.cwd,
    id: process.id,
    itemId: sessionId,
    osPid: null,
    processId: null,
    startedAtMs,
    turnId: process.turnId,
    updatedAtMs: startedAtMs,
  };
}

export function createBackgroundTerminalCurrentRows<
  Terminal extends BackgroundTerminalSnapshot,
  Metrics,
  ChildProcess,
>({
  backgroundTerminals,
  childProcesses,
  conversationId,
  hostId,
  processSnapshotTimeMs,
  resolveProcessMetrics,
}: {
  backgroundTerminals: Terminal[];
  childProcesses: ChildProcess[] | undefined;
  conversationId: string | null | undefined;
  hostId: string;
  processSnapshotTimeMs: number;
  resolveProcessMetrics: (
    process: BackgroundTerminalProcessRecord,
    childProcesses: ChildProcess[] | undefined,
    processSnapshotTimeMs: number,
  ) => Metrics | null;
}): Array<BackgroundTerminalCurrentRow<Terminal, Metrics>> {
  if (conversationId == null) {
    return [];
  }

  return backgroundTerminals.map((terminal) => {
    let process = createBackgroundTerminalProcessRecord({
      conversationId,
      hostId,
      terminal,
    });
    return {
      metrics: resolveProcessMetrics(
        process,
        childProcesses,
        processSnapshotTimeMs,
      ),
      process,
      terminal,
    };
  });
}
