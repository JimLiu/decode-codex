// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Shared types for thread side-panel tabs and background process tracking.
import type { ComponentType, ReactNode, SVGProps } from "react";

export type ThreadSidePanelTabDefinition<Props = unknown> = {
  id: string;
  title?: ReactNode;
  order?: number | null;
  enabled?: boolean;
  dependencies?: readonly unknown[] | null;
  exclusive?: boolean;
  groupKey?: string;
  render?: (closeMenu: () => void, clearSearch?: () => void) => ReactNode;
  component?: ComponentType<Props>;
  icon?: ReactNode;
  props?: Props;
};

export type ThreadAppShellSourceRegistrationProps = {
  conversationSource?: unknown;
  diffSource?: unknown;
  orchestrationId?: string | null;
  isDefault?: boolean;
  scope?: ThreadAppShellSourceScope | null;
};

export type ThreadAppShellSourceScope = {
  setThreadAppShellSources?: (
    sources: {
      conversationSource: unknown;
      diffSource: unknown;
    },
    options: {
      orchestrationId?: string | null;
      isDefault?: boolean;
    },
  ) => void | (() => void);
};

export type BackgroundTerminalDescriptor = {
  id: string;
  command: string;
  cwd?: string | null;
  processId?: string | null;
  startedAtMs?: number | null;
  turnId?: string | null;
};

export type BackgroundTerminalSidePanelProps = {
  conversationId: string;
  terminalId: string;
  output?: string | null;
};

export type BackgroundTerminalTabRequest = {
  scope: ThreadSidePanelScope;
  backgroundTerminal: BackgroundTerminalDescriptor;
  conversationId: string;
  fallbackTitle: string;
};

export type ThreadSidePanelScope = {
  openTab?: (
    component: ComponentType<BackgroundTerminalSidePanelProps>,
    options: ThreadSidePanelOpenOptions,
  ) => void;
  sidePanel?: {
    openTab?: (
      component: ComponentType<BackgroundTerminalSidePanelProps>,
      options: ThreadSidePanelOpenOptions,
    ) => void;
  };
};

export type ThreadSidePanelOpenOptions = {
  icon: ReactNode;
  id: string;
  props: BackgroundTerminalSidePanelProps;
  title: string;
};

export type BackgroundTerminalIconProps = SVGProps<SVGSVGElement>;

export type CommandExecutionItem = {
  id: string;
  type: "commandExecution";
  status?: "inProgress" | "completed" | string;
  command?: string | null;
  aggregatedCommand?: string | null;
  cwd?: string | null;
  processId?: string | number | null;
  osPid?: number | null;
};

export type ConversationTurnSnapshot = {
  turnId?: string | null;
  status?: "inProgress" | string;
  items?: readonly unknown[];
  commandExecutionStartedAtMsById?: Record<string, number | undefined> | null;
  firstTurnWorkItemStartedAtMs?: number | null;
  turnStartedAtMs?: number | null;
  interruptedCommandExecutionItemIds?: readonly string[] | null;
};

export type ConversationProcessSource =
  | "active-turn"
  | "background-terminal"
  | "restored-process";

export type ConversationProcessStopAction =
  | "interrupt-conversation"
  | "kill-child-process";

export type ConversationProcessRow = {
  chatTitle: string | null;
  command: string;
  commandExecutionStartedAtMs?: number | null;
  conversationId: string;
  cwd: string | null;
  hostId: string;
  id: string;
  itemId: string;
  osPid: number | null;
  processId: string | number | null;
  source: ConversationProcessSource;
  startedAtMs: number | null;
  stopAction: ConversationProcessStopAction;
  turnId?: string | null;
};

export type ConversationProcessThread = {
  cwd?: string | null;
  hostId?: string | null;
  id: string;
  title?: string | null;
  turns?: readonly ConversationTurnSnapshot[];
};

export type RegisteredConversationProcess = {
  chatTitle?: string | null;
  command: string;
  conversationId: string;
  cwd?: string | null;
  hostId?: string | null;
  id: string;
  itemId: string;
  osPid?: number | null;
  processId?: string | number | null;
  startedAtMs?: number | null;
  turnId?: string | null;
};

export type ProcessMetric = {
  ageSeconds?: number | null;
  command: string;
  cpuPercent?: number | null;
  depth?: number;
  parentPid?: number | null;
  pid: number;
  rssKb?: number | null;
};

export type ProcessRowWithMetrics = {
  metrics: ProcessMetric | null;
  process: ConversationProcessRow;
};

export type PendingProcessRowStatus =
  | "starting"
  | "stopping"
  | "stopped"
  | string;

export type PendingProcessRowState<Row = ProcessRowWithMetrics> = {
  expiresAtMs?: number | null;
  row: Row;
  rowIndex?: number | null;
  sortRow?: Row | null;
  status: PendingProcessRowStatus;
};

export type AppScopeStore = {
  get<Value>(signal: unknown): Value;
  set<Value>(signal: unknown, value: Value): void;
};
