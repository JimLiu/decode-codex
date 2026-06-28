// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background terminal summary count helpers for local conversation panels.

import {
  hasBackgroundTerminalRow,
  hasMatchingBackgroundTerminal,
  type BackgroundTerminalRow,
} from "./background-terminal-state";

interface ComparableBackgroundTerminal {
  command: string;
  cwd: string | null | undefined;
  id: string;
  turnId?: string | null;
}

interface BackgroundTerminalConversationProcessIdentity {
  conversationId: string;
  id: string;
}

interface BackgroundTerminalProcessRow<
  Process extends BackgroundTerminalConversationProcessIdentity,
> {
  process: Process;
}

interface BackgroundTerminalActionStateWithConversationRow<
  Process extends BackgroundTerminalConversationProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
> {
  row: Row;
}

export function countBackgroundTerminalSummaryRows<
  Terminal extends ComparableBackgroundTerminal,
  Process extends BackgroundTerminalConversationProcessIdentity,
  Row extends BackgroundTerminalProcessRow<Process>,
  RegisteredRow extends BackgroundTerminalRow<Terminal>,
  ActionState extends BackgroundTerminalActionStateWithConversationRow<
    Process,
    Row
  >,
>({
  actionStatesByProcessId,
  backgroundTerminals,
  conversationId,
  processSnapshotTimeMs,
  registeredRows,
  isSettledActionState,
}: {
  actionStatesByProcessId: Map<string, ActionState>;
  backgroundTerminals: Terminal[];
  conversationId: string | null | undefined;
  processSnapshotTimeMs: number;
  registeredRows: RegisteredRow[];
  isSettledActionState: (
    actionState: ActionState,
    matchingRow: Row | null,
    processSnapshotTimeMs: number,
  ) => boolean;
}): number {
  if (conversationId == null) {
    return 0;
  }

  let seenTerminalIds = new Set(
    backgroundTerminals.map((terminal) => terminal.id),
  );
  let countedTerminals: ComparableBackgroundTerminal[] =
    backgroundTerminals.slice();
  let summaryRowCount = backgroundTerminals.length;
  for (let registeredRow of registeredRows) {
    let registeredTerminal = registeredRow.terminal;
    if (
      seenTerminalIds.has(registeredTerminal.id) ||
      hasMatchingBackgroundTerminal(countedTerminals, registeredTerminal)
    ) {
      continue;
    }

    seenTerminalIds.add(registeredTerminal.id);
    countedTerminals.push(registeredTerminal);
    summaryRowCount += 1;
  }

  for (let actionState of actionStatesByProcessId.values()) {
    let actionRow = actionState.row;
    if (
      isSettledActionState(actionState, null, processSnapshotTimeMs) ||
      actionRow.process.conversationId !== conversationId ||
      !hasBackgroundTerminalRow(actionRow)
    ) {
      continue;
    }

    let actionTerminal = actionRow.terminal;
    if (
      seenTerminalIds.has(actionTerminal.id) ||
      hasMatchingBackgroundTerminal(countedTerminals, actionTerminal)
    ) {
      continue;
    }

    seenTerminalIds.add(actionTerminal.id);
    countedTerminals.push(actionTerminal);
    summaryRowCount += 1;
  }

  return summaryRowCount;
}
