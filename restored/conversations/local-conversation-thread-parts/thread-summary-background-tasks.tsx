// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { initRefreshIcon, RefreshIcon } from "../../icons/refresh-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  Dropdown as MenuChrome,
  DropdownMenu,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import { initTooltipPrimitives, Tooltip } from "../../ui/tooltip-b";
import { classNames, initClassNameRuntime } from "../../utils/class-names";
import { useScope, useSignalValue } from "../../runtime/app-scope-hooks";
import {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import {
  initAppServerMutationRuntime,
  useAppServerMutation,
} from "../../runtime/app-server-mutation-runtime";
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import {
  environmentTerminalControllerService,
  initEnvironmentTerminalRuntime,
} from "../../runtime/environment-terminal-runtime";
import { initSignalStateRuntime } from "../../runtime/signal-state-runtime";
import { initVscodeBridgeRuntime } from "../../runtime/platform-content-runtime";
import {
  BackgroundAgentAvatar,
  initBackgroundAgentAvatarChunk,
} from "../../ui/background-agent-avatar";
import {
  clearStoppedPendingProcessRows,
  getPendingBackgroundProcessRow,
  initActiveConversationProcessRowsChunk,
  initPendingBackgroundProcessRowsChunk,
  initProcessMetricHelpersChunk,
  isPendingProcessRowExpired,
  isSameProcessRow,
  matchProcessMetrics,
  pendingBackgroundProcessRowsSignal,
  removePendingBackgroundProcessRow,
  setPendingBackgroundProcessRow,
} from "../../app-shell/thread-background-processes";
import { DiffStats, initDiffStatsChunk } from "../../git/git-review-primitives";
import { StopIcon } from "../../icons/stop-icon";
import { TerminalIcon } from "../../icons/terminal-icon";
import { ThreeDotsIcon } from "../../icons/three-dots-icon";
import { formatModelDisplayName } from "../../utils/format-model-display-name";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";
import {
  createBackgroundSummaryItems,
  getBackgroundSummaryItemKey,
  getInlineActivityBackgroundAgents,
  isDoneBackgroundAgent,
  isWorkingBackgroundAgent,
  type BackgroundSummaryItem,
} from "./background-summary";
import {
  backgroundTerminalMessages,
  getBackgroundTerminalStatusMessageDescriptor,
} from "./background-terminal-messages";
import {
  appendRegisteredBackgroundTerminalRows,
  insertBackgroundTerminalActionRows,
  pruneSettledBackgroundTerminalActionStates,
  resolveBackgroundTerminalStatus,
  type BackgroundTerminalStatus,
} from "./background-terminal-state";
import {
  createBackgroundTerminalCurrentRows,
  createBackgroundTerminalRestartRecord,
  createStartingBackgroundTerminalRow,
} from "./background-terminal-current-rows";
import {
  initSummaryPanelExpandableList,
  SummaryPanelExpandableList,
} from "./summary-panel-expandable-list";

type BackgroundAgentDiffStats = {
  linesAdded: number;
  linesRemoved: number;
};

type BackgroundAgentSummary = {
  agentRole?: ReactNode | null;
  conversationId: string;
  diffStats?: BackgroundAgentDiffStats | null;
  displayName: string;
  showInlineActivity?: boolean | null;
  spawnModel?: string | null;
  status: string;
};

type BackgroundTerminalSummary = {
  command: string;
  conversationId: string;
  cwd?: string | null;
  id: string;
  processId?: string | null;
  startedAtMs?: number | null;
  turnId?: string | null;
};

type BackgroundProcessMetrics = {
  pid?: number | null;
  [key: string]: unknown;
};

type BackgroundProcessRecord = {
  chatTitle?: string | null;
  command: string;
  commandExecutionStartedAtMs?: number;
  conversationId: string;
  cwd?: string | null;
  hostId: string;
  id: string;
  itemId: string;
  osPid?: number | null;
  processId?: string | null;
  startedAtMs: number;
  turnId?: string | null;
};

type BackgroundTerminalSummaryRow = {
  metrics?: BackgroundProcessMetrics | null;
  process: BackgroundProcessRecord;
  terminal: BackgroundTerminalSummary;
};

type ThreadSummaryBackgroundActivityRowsProps = {
  backgroundAgents: BackgroundAgentSummary[];
  backgroundTerminals: BackgroundTerminalSummary[];
  conversationId: string | null | undefined;
  onOpenBackgroundAgent: (backgroundAgent: BackgroundAgentSummary) => void;
  onOpenTerminal: (terminal: BackgroundTerminalSummary) => void;
  onStopError: (error: unknown) => void;
};

type BackgroundAgentCollapsedSummaryRowProps = {
  backgroundAgents: BackgroundAgentSummary[];
  onOpenBackgroundAgent: (backgroundAgent: BackgroundAgentSummary) => void;
};

type BackgroundAgentSummaryLabelProps = {
  backgroundAgent: BackgroundAgentSummary;
};

type BackgroundTerminalSummaryRowsProps = {
  backgroundTerminals: BackgroundTerminalSummary[];
  childProcesses: unknown[] | undefined;
  conversationId: string | null | undefined;
  hostId: string;
  isVisible: boolean;
  processSnapshotTimeMs: number;
  registeredRows: BackgroundTerminalSummaryRow[];
  onOpen: (terminal: BackgroundTerminalSummary) => void;
  onRestartError: (error?: unknown) => void;
  onStopError: (error?: unknown) => void;
};

type BackgroundTerminalRowActionMenuProps = {
  row: BackgroundTerminalSummaryRow;
  rowIndex: number;
  status: BackgroundTerminalStatus;
  onOpen: (terminal: BackgroundTerminalSummary) => void;
  onRestart: (row: BackgroundTerminalSummaryRow, rowIndex: number) => void;
  onStart: (row: BackgroundTerminalSummaryRow, rowIndex: number) => void;
  onStop: (row: BackgroundTerminalSummaryRow, rowIndex: number) => void;
};

type BackgroundTerminalStatusIconProps = {
  status: BackgroundTerminalStatus;
};

const BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS = 10_000;
const backgroundTerminalActionButtonClassName =
  "flex h-4 w-4 shrink-0 cursor-interaction items-center justify-center rounded-sm border-0 bg-transparent p-0 text-token-text-tertiary hover:text-token-foreground focus:outline-none data-[state=open]:text-token-foreground";
const BackgroundAgentIdenticon = BackgroundAgentAvatar;

export function ThreadSummaryBackgroundActivityRows({
  backgroundAgents,
  backgroundTerminals,
  conversationId,
  onOpenBackgroundAgent,
  onOpenTerminal,
  onStopError,
}: ThreadSummaryBackgroundActivityRowsProps) {
  let intl = useIntl(),
    [stoppingTerminalId, setStoppingTerminalId] = useState<string | null>(null),
    inlineActivityBackgroundAgents =
      getInlineActivityBackgroundAgents(backgroundAgents),
    backgroundSummaryItems = createBackgroundSummaryItems(
      backgroundAgents,
      backgroundTerminals,
    ),
    stopAllBackgroundTerminals = (terminal: BackgroundTerminalSummary) => {
      if (conversationId == null || stoppingTerminalId != null) return;
      setStoppingTerminalId(terminal.id);
      sendAppServerRequest("clean-background-terminals", {
        conversationId,
      })
        .catch(onStopError)
        .finally(() => setStoppingTerminalId(null));
    },
    renderBackgroundSummaryItem = (
      item: BackgroundSummaryItem<
        BackgroundAgentSummary,
        BackgroundTerminalSummary
      >,
    ) => {
      switch (item.type) {
        case "agent":
          return (
            <SummaryPanelRow
              icon={null}
              label={
                <BackgroundAgentSummaryLabel
                  backgroundAgent={item.backgroundAgent}
                />
              }
              labelClassName="min-w-0"
              trailing={
                item.backgroundAgent.diffStats == null ? null : (
                  <DiffStats
                    linesAdded={item.backgroundAgent.diffStats.linesAdded}
                    linesRemoved={item.backgroundAgent.diffStats.linesRemoved}
                    className="text-size-chat"
                  />
                )
              }
              trailingVisible={item.backgroundAgent.diffStats != null}
              onClick={() => onOpenBackgroundAgent(item.backgroundAgent)}
            />
          );
        case "terminal":
          return (
            <SummaryPanelRow
              icon={
                <TerminalIcon className="icon-sm shrink-0 text-token-text-secondary" />
              }
              label={
                <span className="truncate text-sm">
                  {item.terminal.command.length > 0 ? (
                    item.terminal.command
                  ) : (
                    <FormattedMessage
                      id="codex.localConversation.backgroundTerminals.defaultLabel"
                      defaultMessage="Background terminal"
                      description="Fallback row label for a running background terminal when the command text is unavailable"
                    />
                  )}
                </span>
              }
              actions={
                <Tooltip
                  side="top"
                  tooltipContent={
                    <FormattedMessage
                      id="codex.localConversation.backgroundTerminals.stopTooltip"
                      defaultMessage="Stop all background terminals"
                      description="Tooltip for button that stops all background terminals from the thread summary panel"
                    />
                  }
                >
                  <button
                    type="button"
                    className="flex size-4 shrink-0 cursor-interaction items-center justify-center border-0 bg-transparent p-0 text-token-text-tertiary hover:text-token-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={stoppingTerminalId != null}
                    onClick={() => stopAllBackgroundTerminals(item.terminal)}
                    aria-label={intl.formatMessage({
                      id: "codex.localConversation.backgroundTerminals.stop",
                      defaultMessage: "Stop all background terminals",
                      description:
                        "Aria label for button that stops all background terminals from the thread summary panel",
                    })}
                  >
                    {stoppingTerminalId === item.terminal.id ? (
                      <Spinner className="icon-xs" />
                    ) : (
                      <StopIcon className="icon-xs" aria-hidden={true} />
                    )}
                  </button>
                </Tooltip>
              }
              onClick={() => onOpenTerminal(item.terminal)}
            />
          );
      }
    },
    rows = (
      <SummaryPanelExpandableList
        items={backgroundSummaryItems}
        getKey={getBackgroundSummaryItemKey}
      >
        {renderBackgroundSummaryItem}
      </SummaryPanelExpandableList>
    );

  return inlineActivityBackgroundAgents.length > 0 ? (
    <>
      <BackgroundAgentCollapsedSummaryRow
        backgroundAgents={inlineActivityBackgroundAgents}
        onOpenBackgroundAgent={onOpenBackgroundAgent}
      />
      {rows}
    </>
  ) : (
    rows
  );
}

function BackgroundAgentCollapsedSummaryRow({
  backgroundAgents,
  onOpenBackgroundAgent,
}: BackgroundAgentCollapsedSummaryRowProps) {
  let workingBackgroundAgents = backgroundAgents.filter(
      isWorkingBackgroundAgent,
    ),
    doneBackgroundAgents = backgroundAgents.filter(isDoneBackgroundAgent),
    visibleBackgroundAgents =
      workingBackgroundAgents.length > 0
        ? workingBackgroundAgents.slice(0, 4)
        : doneBackgroundAgents.slice(-4),
    agentAvatarButtons = visibleBackgroundAgents.map((backgroundAgent) => (
      <button
        key={backgroundAgent.conversationId}
        type="button"
        className="flex size-4 cursor-interaction rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={backgroundAgent.displayName}
        onClick={() => onOpenBackgroundAgent(backgroundAgent)}
      >
        <BackgroundAgentIdenticon
          seed={backgroundAgent.conversationId}
          className="size-4"
          aria-hidden={true}
        />
      </button>
    )),
    workingCountLabel =
      workingBackgroundAgents.length > 0 ? (
        <span className="text-base whitespace-nowrap text-token-foreground">
          <FormattedMessage
            id="codex.localConversation.backgroundAgents.collapsedWorkingCount"
            defaultMessage={
              "{count, plural, one {# working} other {# working}}"
            }
            description="Number of multi-agent v2 subagents that are still working in the collapsed summary panel row"
            values={{
              count: workingBackgroundAgents.length,
            }}
          />
        </span>
      ) : null,
    doneCountLabel =
      doneBackgroundAgents.length > 0 ? (
        <span className="text-base whitespace-nowrap text-token-text-tertiary">
          <FormattedMessage
            id="codex.localConversation.backgroundAgents.collapsedDoneCount"
            defaultMessage={"{count, plural, one {# done} other {# done}}"}
            description="Number of multi-agent v2 subagents that are done in the collapsed summary panel row"
            values={{
              count: doneBackgroundAgents.length,
            }}
          />
        </span>
      ) : null;

  return (
    <div className="flex min-h-8 items-center gap-2">
      <span className="flex shrink-0 items-center gap-1.5">
        {agentAvatarButtons}
      </span>
      {workingCountLabel}
      {doneCountLabel}
    </div>
  );
}

function BackgroundAgentSummaryLabel({
  backgroundAgent,
}: BackgroundAgentSummaryLabelProps) {
  let tooltipContent =
      backgroundAgent.agentRole == null &&
      backgroundAgent.spawnModel == null ? null : (
        <span className="flex flex-col gap-0.5">
          {backgroundAgent.agentRole == null ? null : (
            <span>{backgroundAgent.agentRole}</span>
          )}
          {backgroundAgent.spawnModel == null ? null : (
            <span>
              <FormattedMessage
                id="codex.localConversation.backgroundAgents.modelTooltip"
                defaultMessage={"Uses {model}"}
                description="Tooltip line that shows the model used by a background subagent."
                values={{
                  model: formatModelDisplayName(backgroundAgent.spawnModel),
                }}
              />
            </span>
          )}
        </span>
      ),
    isActive = backgroundAgent.status === "active";

  return (
    <Tooltip disabled={tooltipContent == null} tooltipContent={tooltipContent}>
      <span className="flex min-w-0 items-center gap-2">
        <BackgroundAgentAvatar
          active={isActive}
          seed={backgroundAgent.conversationId}
          className="icon-sm pointer-events-none"
          aria-hidden={true}
        />
        <span className="min-w-0 truncate">{backgroundAgent.displayName}</span>
        {isActive ? (
          <span className="loading-shimmer-pure-text shrink-0 whitespace-nowrap text-token-description-foreground">
            <FormattedMessage
              id="codex.localConversation.backgroundAgents.activeLabel"
              defaultMessage="is working"
              description="Status label shown next to an active background subagent in the thread summary panel"
            />
          </span>
        ) : null}
      </span>
    </Tooltip>
  );
}

const initThreadSummaryBackgroundActivityRowsChunk = once(() => {
  initIntlRuntime();
  initAppServerRequestRuntime();
  initSpinnerComponent();
  initTooltipPrimitives();
  initDiffStatsChunk();
  initBackgroundAgentAvatarChunk();
  initSummaryPanelExpandableList();
  initSummaryPanelRowChunk();
});

const initBackgroundTerminalSummaryRowsSupportChunk = once(() => {
  initActiveConversationProcessRowsChunk();
  initProcessMetricHelpersChunk();
});

export function BackgroundTerminalSummaryRows({
  backgroundTerminals,
  childProcesses,
  conversationId,
  hostId,
  isVisible,
  processSnapshotTimeMs,
  registeredRows,
  onRestartError,
  onStopError,
  onOpen,
}: BackgroundTerminalSummaryRowsProps) {
  let scope = useScope(appScope),
    isVisibleRef = useRef(isVisible),
    pendingProcessRows = useSignalValue(
      pendingBackgroundProcessRowsSignal,
    ) as Map<string, unknown>,
    killChildProcessMutation = useAppServerMutation("child-process-kill"),
    registerProcessMutation = useAppServerMutation("chat-process-register"),
    currentRows = createBackgroundTerminalCurrentRows({
      backgroundTerminals,
      childProcesses,
      conversationId,
      hostId,
      processSnapshotTimeMs,
      resolveProcessMetrics: matchProcessMetrics,
    }),
    processRows = appendRegisteredBackgroundTerminalRows(
      currentRows,
      registeredRows,
      isSameProcessRow,
    ) as BackgroundTerminalSummaryRow[],
    pendingRowsByProcessId = pruneSettledBackgroundTerminalActionStates(
      processRows,
      pendingProcessRows,
      processSnapshotTimeMs,
      isPendingProcessRowExpired,
      isSameProcessRow,
    ),
    summaryRows = insertBackgroundTerminalActionRows(
      processRows,
      pendingRowsByProcessId,
      isSameProcessRow,
    );

  useEffect(() => {
    isVisibleRef.current = isVisible;
    if (!isVisible) clearStoppedPendingProcessRows(scope);
  }, [isVisible, scope]);

  useEffect(
    () => () => {
      isVisibleRef.current = false;
      clearStoppedPendingProcessRows(scope);
    },
    [scope],
  );

  let stopBackgroundTerminal = (
      row: BackgroundTerminalSummaryRow,
      rowIndex: number,
    ) => {
      let pid = row.metrics?.pid;
      if (pid == null) return;
      setPendingBackgroundProcessRow(scope, row.process.id, {
        row,
        rowIndex,
        sortRow: row,
        status: "stopping",
      });
      killChildProcessMutation
        .mutateAsync({
          pid,
        })
        .then(
          (value: { killed?: boolean }) => {
            if (!value.killed) throw Error("Process is no longer running");
            if (isVisibleRef.current) {
              setPendingBackgroundProcessRow(scope, row.process.id, {
                row,
                rowIndex,
                sortRow: row,
                status: "stopped",
              });
              return;
            }
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
          () => {
            onStopError();
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
        );
    },
    startBackgroundTerminal = (
      row: BackgroundTerminalSummaryRow,
      rowIndex: number,
    ) => {
      let { process } = row;
      if (process.cwd == null) return;
      let startedAtMs = Date.now(),
        sessionId =
          environmentTerminalControllerService.addSessionForConversation(
            process.conversationId,
          ),
        startingRow = createStartingBackgroundTerminalRow(
          row,
          sessionId,
          startedAtMs,
        );
      setPendingBackgroundProcessRow(scope, process.id, {
        expiresAtMs: startedAtMs + BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS,
        row: startingRow,
        rowIndex,
        sortRow: row,
        status: "starting",
      });
      registerProcessMutation
        .mutateAsync({
          persistIfUnmatched: true,
          record: createBackgroundTerminalRestartRecord(
            process,
            sessionId,
            startedAtMs,
          ),
        })
        .catch(onRestartError);
      environmentTerminalControllerService.create({
        conversationId: process.conversationId,
        conversationTitle: process.chatTitle,
        cwd: process.cwd,
        hostId: process.hostId,
        preserveOnOwnerDestroy: true,
        sessionId,
      });
      environmentTerminalControllerService.runHeadlessAction(sessionId, {
        command: process.command,
        cwd: process.cwd,
      });
    },
    restartBackgroundTerminal = (
      row: BackgroundTerminalSummaryRow,
      rowIndex: number,
    ) => {
      let pid = row.metrics?.pid;
      if (pid == null) return;
      setPendingBackgroundProcessRow(scope, row.process.id, {
        row,
        rowIndex,
        sortRow: row,
        status: "stopping",
      });
      killChildProcessMutation
        .mutateAsync({
          pid,
        })
        .then(
          (value: { killed?: boolean }) => {
            if (!value.killed) throw Error("Process is no longer running");
            startBackgroundTerminal(row, rowIndex);
          },
          () => {
            onRestartError();
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
        );
    };

  return summaryRows.map((row, rowIndex) => {
    let status = resolveBackgroundTerminalStatus(
      row,
      getPendingBackgroundProcessRow(row, pendingRowsByProcessId),
      childProcesses != null,
    );
    return (
      <SummaryPanelRow
        key={row.terminal.id}
        icon={<BackgroundTerminalStatusIcon status={status} />}
        label={
          <span
            className={classNames(
              "block min-w-0 truncate text-sm leading-5",
              status === "starting" && "loading-shimmer-pure-text",
              (status === "stopped" || status === "not-found") &&
                "text-token-description-foreground",
            )}
          >
            {row.terminal.command.length > 0 ? (
              row.terminal.command
            ) : (
              <FormattedMessage {...backgroundTerminalMessages.defaultLabel} />
            )}
          </span>
        }
        actions={
          <BackgroundTerminalRowActionMenu
            row={row}
            rowIndex={rowIndex}
            status={status}
            onOpen={onOpen}
            onRestart={restartBackgroundTerminal}
            onStart={startBackgroundTerminal}
            onStop={stopBackgroundTerminal}
          />
        }
        actionsAlwaysFocusable={true}
        onClick={() => onOpen(row.terminal)}
      />
    );
  });
}

function BackgroundTerminalRowActionMenu({
  onOpen,
  onRestart,
  onStart,
  onStop,
  row,
  rowIndex,
  status,
}: BackgroundTerminalRowActionMenuProps) {
  let intl = useIntl(),
    isStarting = status === "starting",
    isStopping = status === "stopping",
    isStopped = status === "stopped",
    isNotFound = status === "not-found",
    isMissingLiveProcess =
      !isStopped && !isNotFound && row.metrics?.pid == null,
    canStartOrRestart =
      row.process.cwd != null &&
      !isStarting &&
      !isStopping &&
      !isMissingLiveProcess,
    restartTooltip =
      row.process.cwd == null ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartMissingWorkspaceTooltip}
        />
      ) : isStarting ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartStartingTooltip}
        />
      ) : isStopping ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartStoppingTooltip}
        />
      ) : isMissingLiveProcess ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartMissingProcessTooltip}
        />
      ) : undefined,
    startOrRestartMessageDescriptor =
      isStopped || isNotFound
        ? backgroundTerminalMessages.start
        : backgroundTerminalMessages.restart,
    handleStartOrRestart = () => {
      if (isStopped || isNotFound) {
        onStart(row, rowIndex);
        return;
      }
      onRestart(row, rowIndex);
    },
    actionsLabel = intl.formatMessage(backgroundTerminalMessages.actions),
    isStopDisabled =
      row.metrics?.pid == null || isStarting || isStopping || isStopped,
    stopTooltip =
      row.metrics?.pid == null ? (
        <FormattedMessage
          {...backgroundTerminalMessages.stopMissingProcessTooltip}
        />
      ) : undefined,
    isStopTooltipInteractive = row.metrics?.pid == null,
    handleOpenOutput = () => onOpen(row.terminal),
    handleStop = () => onStop(row, rowIndex);

  return (
    <DropdownMenu
      align="end"
      animateExit={false}
      contentClassName="!animate-none"
      contentWidth="xs"
      triggerButton={
        <button
          type="button"
          aria-label={actionsLabel}
          className={backgroundTerminalActionButtonClassName}
          onClick={stopBackgroundTerminalActionTriggerPropagation}
        >
          <ThreeDotsIcon className="icon-2xs" />
        </button>
      }
    >
      <MenuChrome.Item
        LeftIcon={TerminalIcon}
        leftIconClassName="icon-xs"
        onSelect={handleOpenOutput}
      >
        <FormattedMessage {...backgroundTerminalMessages.openOutput} />
      </MenuChrome.Item>
      <MenuChrome.Item
        LeftIcon={StopIcon}
        leftIconClassName="icon-xs"
        disabled={isStopDisabled}
        tooltipText={stopTooltip}
        tooltipInteractive={isStopTooltipInteractive}
        onSelect={handleStop}
      >
        <FormattedMessage {...backgroundTerminalMessages.stop} />
      </MenuChrome.Item>
      <MenuChrome.Item
        LeftIcon={RefreshIcon}
        leftIconClassName="icon-xs"
        disabled={!canStartOrRestart}
        tooltipText={restartTooltip}
        tooltipInteractive={restartTooltip != null}
        onSelect={handleStartOrRestart}
      >
        <FormattedMessage {...startOrRestartMessageDescriptor} />
      </MenuChrome.Item>
    </DropdownMenu>
  );
}

function stopBackgroundTerminalActionTriggerPropagation(
  event: MouseEvent<HTMLButtonElement>,
) {
  event.stopPropagation();
}

function BackgroundTerminalStatusIcon({
  status,
}: BackgroundTerminalStatusIconProps) {
  let intl = useIntl(),
    statusLabel = intl.formatMessage(
      getBackgroundTerminalStatusMessageDescriptor(status),
    );

  if (status === "starting") {
    return (
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center"
        title={statusLabel}
        aria-label={statusLabel}
        role="img"
      >
        <Spinner className="icon-xs text-token-charts-green" />
      </span>
    );
  }

  return (
    <TerminalIcon
      className="icon-sm shrink-0"
      title={statusLabel}
      aria-label={statusLabel}
      role="img"
    />
  );
}

const initBackgroundTerminalSummaryRowsChunk = once(() => {
  initClassNameRuntime();
  initAppScopeSignalRuntime();
  initIntlRuntime();
  initDropdownMenuPrimitives();
  initSpinnerComponent();
  initRefreshIcon();
  initActiveConversationProcessRowsChunk();
  initPendingBackgroundProcessRowsChunk();
  initProcessMetricHelpersChunk();
  initAppScopeSignalRuntime();
  initEnvironmentTerminalRuntime();
  initVscodeBridgeRuntime();
  initSignalStateRuntime();
  initAppServerMutationRuntime();
  initBackgroundTerminalSummaryRowsSupportChunk();
  initSummaryPanelRowChunk();
});

ThreadSummaryBackgroundActivityRows.initChunk =
  initThreadSummaryBackgroundActivityRowsChunk;
BackgroundTerminalSummaryRows.initChunk =
  initBackgroundTerminalSummaryRowsChunk;
