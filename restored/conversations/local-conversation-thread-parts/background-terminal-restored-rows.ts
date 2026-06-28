// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Restored background terminal row helpers for local conversation panels.

import {
  createBackgroundTerminalSnapshot,
  type BackgroundTerminalSnapshot,
} from "./background-terminal-state";

interface BackgroundTerminalProcessSnapshot {
  command: string;
  cwd: string | null | undefined;
  itemId: string;
  processId: string;
  startedAtMs: number;
  turnId?: string | null;
}

interface BackgroundTerminalProcessRow<
  Process extends BackgroundTerminalProcessSnapshot,
> {
  process: Process;
}

interface ConversationProcessRecord {
  conversationId: string;
}

interface ConversationWorkspaceRecord {
  cwd: string | null | undefined;
  hostId: string;
  id: string;
  title: null;
  turns: never[];
}

export function createRestoredBackgroundTerminalRows<
  Record extends ConversationProcessRecord,
  ProcessRecord,
  RestoredProcess,
  MergedProcess,
  ChildProcess,
  Row extends BackgroundTerminalProcessRow<BackgroundTerminalProcessSnapshot>,
>({
  attachChildProcessMetrics,
  childProcesses,
  conversationCwd,
  conversationId,
  createConversationProcessRecords,
  enabled,
  hostId,
  mergeRestoredProcesses,
  processSnapshotTimeMs,
  records,
  restoredProcesses,
}: {
  attachChildProcessMetrics: (
    processes: MergedProcess[],
    childProcesses: ChildProcess[] | undefined,
    processSnapshotTimeMs: number,
  ) => Row[];
  childProcesses: ChildProcess[] | undefined;
  conversationCwd: string | null | undefined;
  conversationId: string | null | undefined;
  createConversationProcessRecords: (
    records: Record[],
    conversations: ConversationWorkspaceRecord[],
  ) => ProcessRecord[];
  enabled: boolean;
  hostId: string;
  mergeRestoredProcesses: (
    restoredProcesses: RestoredProcess[],
    records: ProcessRecord[],
  ) => MergedProcess[];
  processSnapshotTimeMs: number;
  records: Record[] | null | undefined;
  restoredProcesses: RestoredProcess[];
}): Array<Row & { terminal: BackgroundTerminalSnapshot }> {
  if (!enabled || conversationId == null) {
    return [];
  }

  let conversationRecords =
    records == null || records.length === 0
      ? []
      : createConversationProcessRecords(
          records.filter((record) => record.conversationId === conversationId),
          [
            {
              cwd: conversationCwd,
              hostId,
              id: conversationId,
              title: null,
              turns: [],
            },
          ],
        );
  return attachChildProcessMetrics(
    mergeRestoredProcesses(restoredProcesses, conversationRecords),
    childProcesses,
    processSnapshotTimeMs,
  ).map((row) => ({
    ...row,
    terminal: createBackgroundTerminalSnapshot(row.process),
  }));
}
