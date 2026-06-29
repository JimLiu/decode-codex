// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Disclosure group + per-agent rows for multi-agent (spawn/sendInput/resume/close) conversation actions.
import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  FormattedMessage,
  useIntl,
  defineMessages,
  type IntlShape,
  type MessageDescriptor,
} from "../../vendor/react-intl";
import {
  ActivityDisclosureLayout,
  ActivityDisclosureHeaderRow,
  AnimatedActivityLabel,
  useDisclosureContentHeight,
  activityDisclosureTransition,
  Tooltip,
  SubagentInlineActivityContext,
  // MISSING from facade (reported under facadeNeeded):
  useConversationParentModel,
  useMultiAgentActionsEnabled,
  formatModelLabel,
  normalizeThreadId,
  parseAgentSource,
  getThreadDisplayName,
  formatAgentIdLabel,
} from "../../boundaries/onboarding-commons-externals.facade";
import { PeopleGroupIcon } from "../../icons/people-group-icon";

export type MultiAgentActionType =
  | "spawnAgent"
  | "sendInput"
  | "resumeAgent"
  | "closeAgent";

export type MultiAgentActionStatus = "inProgress" | "completed" | "failed";

export interface AgentState {
  status?: string;
  message?: string | null;
}

export interface AgentThread {
  agentRole?: string | null;
  source?: string | null;
}

export interface MultiAgentActionItem {
  id: string;
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  prompt?: string | null;
  model?: string | null;
  receiverThreads?: { threadId: string; thread: unknown }[];
  agentsStates: Record<string, AgentState>;
}

export interface OpenAgentThreadInput {
  agentRole: string | null;
  conversationId: string;
  diffStats: null;
  displayName: string;
  spawnModel: string | null;
  status: string;
  statusSummary: string | null;
}

export type OpenAgentThreadHandler = (input: OpenAgentThreadInput) => void;

export interface ActionRow {
  key: string;
  node: React.ReactNode;
}

interface StatusMessageGroup {
  inProgress: MessageDescriptor;
  completed: MessageDescriptor;
  failed: MessageDescriptor;
}

export interface MultiAgentActionGroupProps {
  conversationId: string;
  items: MultiAgentActionItem[];
}

export function MultiAgentActionGroup({
  conversationId,
  items,
}: MultiAgentActionGroupProps) {
  const inlineActivity = React.useContext(SubagentInlineActivityContext);
  const enabled = useMultiAgentActionsEnabled();
  const intl = useIntl();
  const firstItem = items[0];
  const parentModel = useConversationParentModel(conversationId);
  const [expanded, setExpanded] = React.useState(false);
  const status = aggregateStatus(items);
  const isInProgress = status === "inProgress";
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();
  const agentCount = countAgents(items);
  const onOpenAgentThread: OpenAgentThreadHandler = (input) => {
    inlineActivity?.(input);
  };

  if (!enabled) return null;

  const disclosure = {
    expanded,
    onToggle: () => setExpanded((value) => !value),
  };

  const icon = (
    <PeopleGroupIcon
      aria-hidden
      className="icon-xs shrink-0 text-token-input-placeholder-foreground"
    />
  );

  const headerLabel = formatHeaderLabel({
    action: firstItem.action,
    status,
    intl,
  });
  const headerAction = (
    <AnimatedActivityLabel
      key="action"
      active={isInProgress}
      className="text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground"
    >
      {headerLabel}
    </AnimatedActivityLabel>
  );
  const countLabel =
    agentCount > 0
      ? intl.formatMessage(
          {
            id: "localConversation.multiAgentAction.header.count",
            defaultMessage: " {count, plural, one {an agent} other {# agents}}",
            description: "Agent count suffix shown for multi-agent actions.",
          },
          { count: agentCount },
        )
      : "";
  const headerValues = { action: headerAction, countLabel };

  const headerTrailing = (
    <span className="text-size-chat truncate text-token-conversation-summary-trailing">
      <FormattedMessage
        id="localConversation.multiAgentAction.header"
        defaultMessage={"{action}{countLabel}"}
        description="Header row for multi-agent action events."
        values={headerValues}
      />
    </span>
  );

  const header = (
    <ActivityDisclosureHeaderRow
      disclosure={disclosure}
      testId="multi-agent-action-header"
    >
      {icon}
      {headerTrailing}
    </ActivityDisclosureHeaderRow>
  );

  const animate = {
    height: expanded ? elementHeightPx : 0,
    opacity: expanded ? 1 : 0,
  };
  const overflowClassName = clsx(
    expanded ? "overflow-visible" : "overflow-hidden",
  );
  const bodyStyle = {
    pointerEvents: expanded ? ("auto" as const) : ("none" as const),
    visibility: expanded ? ("visible" as const) : ("hidden" as const),
  };

  const rows = (
    <MultiAgentActionRows
      items={items}
      parentModel={parentModel}
      onOpenAgentThread={onOpenAgentThread}
    />
  );
  const body = (
    <motion.div
      initial={false}
      animate={animate}
      transition={activityDisclosureTransition}
      className={overflowClassName}
      style={bodyStyle}
    >
      <div
        ref={expanded ? elementRef : null}
        className="flex flex-col gap-0.5"
        data-testid="multi-agent-action-rows"
      >
        {rows}
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={header} body={body} />;
}

export function pickStatusMessages(
  map: StatusMessageGroup,
): StatusMessageGroup {
  return {
    inProgress: map.inProgress,
    completed: map.completed,
    failed: map.failed,
  };
}

export function collectAgentIds(action: MultiAgentActionItem): string[] {
  const threads = action.receiverThreads ?? [];
  const states = action.agentsStates ?? {};
  return Array.from(
    new Set([
      ...threads.map((item) => normalizeThreadId(item.threadId)),
      ...Object.keys(states).map(normalizeThreadId),
    ]),
  ).sort();
}

export function buildThreadById(
  action: MultiAgentActionItem,
): Map<string, unknown> {
  const threads = action.receiverThreads ?? [];
  return new Map(
    threads.map((item) => [normalizeThreadId(item.threadId), item.thread]),
  );
}

export function buildActionRows(
  items: MultiAgentActionItem[],
  parentModel: string | null,
  intl: IntlShape,
  onOpenAgentThread: OpenAgentThreadHandler,
): ActionRow[] {
  const rows: ActionRow[] = [];
  const agentModelMap = buildAgentModelMap(items, parentModel);
  const wrapRow = (chunks: React.ReactNode) => (
    <span className="flex min-w-0 items-baseline gap-1 overflow-hidden whitespace-nowrap">
      {chunks}
    </span>
  );

  for (const action of items) {
    const agentIds = collectAgentIds(action);
    const threadById = buildThreadById(action);
    const hasSpawnInstructions =
      action.action === "spawnAgent" &&
      action.status === "completed" &&
      action.prompt != null &&
      action.prompt.trim().length > 0;
    const hasSendInputPrompt =
      action.action === "sendInput" &&
      action.prompt != null &&
      action.prompt.trim().length > 0;

    if (agentIds.length === 0) {
      rows.push({
        key: `row-generic-${action.id}`,
        node: (
          <FormattedMessage
            id="localConversation.multiAgentAction.row.generic"
            defaultMessage={"{action}"}
            description="Fallback row when there are no known agent ids yet."
            values={{
              action: formatRowAction({
                action: action.action,
                status: action.status,
                intl,
              }),
            }}
          />
        ),
      });
    } else {
      for (const agentId of agentIds) {
        const agentLink = (
          <AgentLink
            agentId={agentId}
            model={agentModelMap.get(agentId) ?? null}
            onOpenAgentThread={onOpenAgentThread}
            state={action.agentsStates[agentId]}
            thread={threadById.get(agentId) ?? null}
          />
        );
        rows.push({
          key: `row-${action.id}-${agentId}`,
          node: hasSpawnInstructions ? (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.spawn.createdWithInstructions"
              defaultMessage={
                "<row>Created {agent} with the instructions: {instructions}</row>"
              }
              description="Per-agent row for completed spawn actions when prompt instructions are present."
              values={{
                agent: agentLink,
                instructions: (
                  <ActionPromptPreview
                    key="instructions"
                    prompt={action.prompt ?? ""}
                  />
                ),
                row: wrapRow,
              }}
            />
          ) : hasSendInputPrompt ? (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.sendInput.messagedWithPrompt"
              defaultMessage={"<row>{action} {agent}: {prompt}</row>"}
              description="Per-agent row for sendInput actions when prompt text is present."
              values={{
                action: formatSendInputAction({ status: action.status, intl }),
                agent: agentLink,
                prompt: (
                  <ActionPromptPreview
                    key="prompt"
                    prompt={action.prompt ?? ""}
                  />
                ),
                row: wrapRow,
              }}
            />
          ) : (
            <FormattedMessage
              id="localConversation.multiAgentAction.row.agent"
              defaultMessage={"{action} {agent}{stateSuffix}"}
              description="Per-agent row for multi-agent action events."
              values={{
                action: formatRowAction({
                  action: action.action,
                  status: action.status,
                  intl,
                }),
                agent: agentLink,
                stateSuffix: formatActionStateSuffix(
                  action,
                  action.agentsStates[agentId],
                  intl,
                ),
              }}
            />
          ),
        });
      }
    }

    if (
      !hasSpawnInstructions &&
      !hasSendInputPrompt &&
      action.prompt != null &&
      action.prompt.trim().length > 0
    ) {
      rows.push({
        key: `meta-prompt-${action.id}`,
        node: (
          <FormattedMessage
            id="localConversation.multiAgentAction.meta.prompt"
            defaultMessage={"Input: {prompt}"}
            description="Input prompt metadata for multi-agent actions."
            values={{
              prompt: (
                <span className="break-words whitespace-pre-wrap">
                  {action.prompt}
                </span>
              ),
            }}
          />
        ),
      });
    }
  }

  return rows;
}

export interface ActionPromptPreviewProps {
  prompt: string;
}

export function ActionPromptPreview({ prompt }: ActionPromptPreviewProps) {
  return (
    <Tooltip tooltipContent={prompt} openWhen="trigger-overflows">
      <span className="min-w-0 flex-1 truncate text-token-conversation-summary-trailing">
        {prompt}
      </span>
    </Tooltip>
  );
}

export function countAgents(items: MultiAgentActionItem[]): number {
  const ids = new Set<string>();
  for (const action of items) {
    for (const agentId of collectAgentIds(action)) ids.add(agentId);
  }
  return ids.size > 0 ? ids.size : items.length;
}

export function aggregateStatus(
  items: MultiAgentActionItem[],
): MultiAgentActionStatus {
  return items.some((item) => item.status === "inProgress")
    ? "inProgress"
    : items.some((item) => item.status === "failed")
      ? "failed"
      : "completed";
}

export interface AgentLinkProps {
  agentId: string;
  model: string | null;
  onOpenAgentThread: OpenAgentThreadHandler;
  state: AgentState | undefined;
  thread: unknown;
}

export function AgentLink({
  agentId,
  model,
  onOpenAgentThread,
  state,
  thread,
}: AgentLinkProps) {
  const agentRole = resolveAgentRole(thread);
  const roleSuffix = agentRole == null ? null : ` (${agentRole})`;
  const displayName = resolveAgentDisplayName(agentId, thread);
  const status = mapAgentStatus(state);
  const normalizedModel = normalizeModel(model);
  return (
    <span key="agent">
      <Tooltip
        disabled={normalizedModel == null}
        tooltipContent={
          normalizedModel == null
            ? null
            : `Uses ${formatModelLabel(normalizedModel)}`
        }
      >
        <button
          type="button"
          className="cursor-interaction bg-transparent p-0 align-baseline font-medium"
          onClick={() => {
            onOpenAgentThread({
              agentRole,
              conversationId: agentId,
              diffStats: null,
              displayName,
              spawnModel: model,
              status,
              statusSummary: state?.message ?? null,
            });
          }}
        >
          {displayName}
        </button>
      </Tooltip>
      {roleSuffix == null ? null : <span>{roleSuffix}</span>}
    </span>
  );
}

export function mapAgentStatus(state: AgentState | undefined): string {
  switch (state?.status) {
    case "pendingInit":
      return "waiting";
    case "running":
      return "active";
    case "completed":
    case "errored":
    case "interrupted":
    case "notFound":
    case "shutdown":
    case undefined:
      return "done";
    default:
      return "done";
  }
}

export function buildAgentModelMap(
  items: MultiAgentActionItem[],
  parentModel: string | null,
): Map<string, string> {
  const map = new Map<string, string>();
  const fallbackModel = normalizeModel(parentModel);
  for (const action of items) {
    const model = normalizeModel(action.model) ?? fallbackModel;
    if (action.action === "spawnAgent" && model != null) {
      for (const receiver of action.receiverThreads ?? []) {
        map.set(normalizeThreadId(receiver.threadId), model);
      }
    }
  }
  return map;
}

export function normalizeModel(
  value: string | null | undefined,
): string | null {
  return value == null || value.trim().length === 0 ? null : value;
}

export function resolveAgentDisplayName(
  agentId: string,
  thread: unknown,
): string {
  return stripLeadingAt(
    getThreadDisplayName(thread) ?? formatAgentIdLabel(agentId),
  );
}

export function stripLeadingAt(text: string): string {
  const trimmed = text.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
}

export function resolveAgentRole(thread: unknown): string | null {
  const data = thread as AgentThread | null | undefined;
  const role = data?.agentRole ?? parseAgentSource(data?.source)?.agentRole;
  if (role == null) return null;
  const trimmed = role.trim();
  return trimmed.length === 0 || trimmed === "default" ? null : trimmed;
}

export function formatStateSuffix(
  state: AgentState | undefined,
  intl: IntlShape,
): string {
  if (state == null) return "";
  const label = formatAgentStateLabel({ status: state.status, intl });
  return state.message == null || state.message.trim().length === 0
    ? ` (${label})`
    : ` (${label}: ${state.message})`;
}

export function formatActionStateSuffix(
  action: MultiAgentActionItem,
  state: AgentState | undefined,
  intl: IntlShape,
): string {
  return action.action === "closeAgent" || action.action === "resumeAgent"
    ? ""
    : formatStateSuffix(state, intl);
}

export function formatHeaderLabel(input: {
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(headerMessages[input.action][input.status]);
}

export function formatRowAction(input: {
  action: MultiAgentActionType;
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(
    rowActionMessages[input.action][input.status],
  );
}

export function formatSendInputAction(input: {
  status: MultiAgentActionStatus;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(sendInputMessages[input.status]);
}

export function formatAgentStateLabel(input: {
  status: string | undefined;
  intl: IntlShape;
}): string {
  return input.intl.formatMessage(
    agentStateMessages[input.status as keyof typeof agentStateMessages],
  );
}

export function renderActionRow(row: ActionRow): React.ReactNode {
  return (
    <div
      key={row.key}
      className={clsx(
        "text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant",
        "text-size-chat min-w-0",
      )}
    >
      {row.node}
    </div>
  );
}

export const messages = defineMessages({
  headerSpawnInProgress: {
    id: "localConversation.multiAgentAction.header.spawn.inProgress",
    defaultMessage: "Creating",
    description: "Header for in-progress spawnAgent multi-agent action.",
  },
  headerSpawnCompleted: {
    id: "localConversation.multiAgentAction.header.spawn.completed",
    defaultMessage: "Created",
    description: "Header for completed spawnAgent multi-agent action.",
  },
  headerSpawnFailed: {
    id: "localConversation.multiAgentAction.header.spawn.failed",
    defaultMessage: "Failed to create",
    description: "Header for failed spawnAgent multi-agent action.",
  },
  headerSendInputInProgress: {
    id: "localConversation.multiAgentAction.header.sendInput.inProgress",
    defaultMessage: "Messaging",
    description: "Header for in-progress sendInput multi-agent action.",
  },
  headerSendInputCompleted: {
    id: "localConversation.multiAgentAction.header.sendInput.completed",
    defaultMessage: "Messaged",
    description: "Header for completed sendInput multi-agent action.",
  },
  headerSendInputFailed: {
    id: "localConversation.multiAgentAction.header.sendInput.failed",
    defaultMessage: "Failed to message",
    description: "Header for failed sendInput multi-agent action.",
  },
  headerResumeInProgress: {
    id: "localConversation.multiAgentAction.header.resume.inProgress",
    defaultMessage: "Resuming",
    description: "Header for in-progress resumeAgent multi-agent action.",
  },
  headerResumeCompleted: {
    id: "localConversation.multiAgentAction.header.resume.completed",
    defaultMessage: "Resumed",
    description: "Header for completed resumeAgent multi-agent action.",
  },
  headerResumeFailed: {
    id: "localConversation.multiAgentAction.header.resume.failed",
    defaultMessage: "Failed to resume",
    description: "Header for failed resumeAgent multi-agent action.",
  },
  headerCloseInProgress: {
    id: "localConversation.multiAgentAction.header.close.inProgress",
    defaultMessage: "Closing",
    description: "Header for in-progress closeAgent multi-agent action.",
  },
  headerCloseCompleted: {
    id: "localConversation.multiAgentAction.header.close.completed",
    defaultMessage: "Closed",
    description: "Header for completed closeAgent multi-agent action.",
  },
  headerCloseFailed: {
    id: "localConversation.multiAgentAction.header.close.failed",
    defaultMessage: "Failed to close",
    description: "Header for failed closeAgent multi-agent action.",
  },
  rowSpawnInProgress: {
    id: "localConversation.multiAgentAction.rowAction.spawn.inProgress",
    defaultMessage: "Creating",
    description: "Per-agent verb for in-progress spawnAgent actions.",
  },
  rowSpawnCompleted: {
    id: "localConversation.multiAgentAction.rowAction.spawn.completed",
    defaultMessage: "Created",
    description: "Per-agent verb for completed spawnAgent actions.",
  },
  rowSpawnFailed: {
    id: "localConversation.multiAgentAction.rowAction.spawn.failed",
    defaultMessage: "Failed creating",
    description: "Per-agent verb for failed spawnAgent actions.",
  },
  rowSendInputInProgress: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.inProgress",
    defaultMessage: "Messaging",
    description: "Per-agent verb for in-progress sendInput actions.",
  },
  rowSendInputCompleted: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.completed",
    defaultMessage: "Messaged",
    description: "Per-agent verb for completed sendInput actions.",
  },
  rowSendInputFailed: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.failed",
    defaultMessage: "Failed messaging",
    description: "Per-agent verb for failed sendInput actions.",
  },
  rowResumeInProgress: {
    id: "localConversation.multiAgentAction.rowAction.resume.inProgress",
    defaultMessage: "Resuming",
    description: "Per-agent verb for in-progress resumeAgent actions.",
  },
  rowResumeCompleted: {
    id: "localConversation.multiAgentAction.rowAction.resume.completed",
    defaultMessage: "Resumed",
    description: "Per-agent verb for completed resumeAgent actions.",
  },
  rowResumeFailed: {
    id: "localConversation.multiAgentAction.rowAction.resume.failed",
    defaultMessage: "Failed resuming",
    description: "Per-agent verb for failed resumeAgent actions.",
  },
  rowCloseInProgress: {
    id: "localConversation.multiAgentAction.rowAction.close.inProgress",
    defaultMessage: "Closing",
    description: "Per-agent verb for in-progress closeAgent actions.",
  },
  rowCloseCompleted: {
    id: "localConversation.multiAgentAction.rowAction.close.completed",
    defaultMessage: "Closed",
    description: "Per-agent verb for completed closeAgent actions.",
  },
  rowCloseFailed: {
    id: "localConversation.multiAgentAction.rowAction.close.failed",
    defaultMessage: "Failed closing",
    description: "Per-agent verb for failed closeAgent actions.",
  },
  rowSendInputMessagedInProgress: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.inProgress",
    defaultMessage: "Messaging",
    description: "Row action label for in-progress sendInput rows.",
  },
  rowSendInputMessagedCompleted: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.completed",
    defaultMessage: "Messaged",
    description: "Row action label for completed sendInput rows.",
  },
  rowSendInputMessagedFailed: {
    id: "localConversation.multiAgentAction.rowAction.sendInput.messaged.failed",
    defaultMessage: "Failed to message",
    description: "Row action label for failed sendInput rows.",
  },
  statePendingInit: {
    id: "localConversation.multiAgentAction.agentState.pendingInit",
    defaultMessage: "pending init",
    description: "Status label for pendingInit sub-agent state.",
  },
  stateRunning: {
    id: "localConversation.multiAgentAction.agentState.running",
    defaultMessage: "running",
    description: "Status label for running sub-agent state.",
  },
  stateInterrupted: {
    id: "localConversation.multiAgentAction.agentState.interrupted",
    defaultMessage: "interrupted",
    description: "Status label for interrupted sub-agent state.",
  },
  stateShutdown: {
    id: "localConversation.multiAgentAction.agentState.shutdown",
    defaultMessage: "shutdown",
    description: "Status label for shutdown sub-agent state.",
  },
  stateCompleted: {
    id: "localConversation.multiAgentAction.agentState.completed",
    defaultMessage: "completed",
    description: "Status label for completed sub-agent state.",
  },
  stateErrored: {
    id: "localConversation.multiAgentAction.agentState.errored",
    defaultMessage: "errored",
    description: "Status label for errored sub-agent state.",
  },
  stateNotFound: {
    id: "localConversation.multiAgentAction.agentState.notFound",
    defaultMessage: "not found",
    description: "Status label for notFound sub-agent state.",
  },
});

export const headerMessages: Record<MultiAgentActionType, StatusMessageGroup> =
  {
    spawnAgent: pickStatusMessages({
      inProgress: messages.headerSpawnInProgress,
      completed: messages.headerSpawnCompleted,
      failed: messages.headerSpawnFailed,
    }),
    sendInput: pickStatusMessages({
      inProgress: messages.headerSendInputInProgress,
      completed: messages.headerSendInputCompleted,
      failed: messages.headerSendInputFailed,
    }),
    resumeAgent: pickStatusMessages({
      inProgress: messages.headerResumeInProgress,
      completed: messages.headerResumeCompleted,
      failed: messages.headerResumeFailed,
    }),
    closeAgent: pickStatusMessages({
      inProgress: messages.headerCloseInProgress,
      completed: messages.headerCloseCompleted,
      failed: messages.headerCloseFailed,
    }),
  };

export const rowActionMessages: Record<
  MultiAgentActionType,
  StatusMessageGroup
> = {
  spawnAgent: pickStatusMessages({
    inProgress: messages.rowSpawnInProgress,
    completed: messages.rowSpawnCompleted,
    failed: messages.rowSpawnFailed,
  }),
  sendInput: pickStatusMessages({
    inProgress: messages.rowSendInputInProgress,
    completed: messages.rowSendInputCompleted,
    failed: messages.rowSendInputFailed,
  }),
  resumeAgent: pickStatusMessages({
    inProgress: messages.rowResumeInProgress,
    completed: messages.rowResumeCompleted,
    failed: messages.rowResumeFailed,
  }),
  closeAgent: pickStatusMessages({
    inProgress: messages.rowCloseInProgress,
    completed: messages.rowCloseCompleted,
    failed: messages.rowCloseFailed,
  }),
};

export const sendInputMessages: StatusMessageGroup = pickStatusMessages({
  inProgress: messages.rowSendInputMessagedInProgress,
  completed: messages.rowSendInputMessagedCompleted,
  failed: messages.rowSendInputMessagedFailed,
});

export const agentStateMessages = {
  pendingInit: messages.statePendingInit,
  running: messages.stateRunning,
  interrupted: messages.stateInterrupted,
  shutdown: messages.stateShutdown,
  completed: messages.stateCompleted,
  errored: messages.stateErrored,
  notFound: messages.stateNotFound,
};

export interface MultiAgentActionRowsProps {
  items: MultiAgentActionItem[];
  parentModel: string | null;
  onOpenAgentThread: OpenAgentThreadHandler;
}

export const MultiAgentActionRows = React.memo(function MultiAgentActionRows({
  items,
  parentModel,
  onOpenAgentThread,
}: MultiAgentActionRowsProps) {
  const intl = useIntl();
  const rows = buildActionRows(items, parentModel, intl, onOpenAgentThread).map(
    renderActionRow,
  );
  return <>{rows}</>;
});
