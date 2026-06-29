// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Subagent inline activity row: builds activity rows from items + background agents and renders one row.
import * as React from "react";
import { defineMessages, useIntl, type IntlShape } from "../vendor/react-intl";
import {
  ConversationSummaryRow,
  SubagentInlineActivityContext,
  normalizeThreadId,
} from "../boundaries/onboarding-commons-externals.facade";
import { SubagentAvatar } from "./subagent-avatar";

export interface SubagentActivityItem {
  agentThreadId: string;
  displayName?: string | null;
  displayStatus: "active" | "updated" | "interrupted" | string;
  statusSummary?: string | null;
}

export interface BackgroundAgent {
  conversationId: string;
  status?: string;
  statusSummary?: string | null;
}

export interface SubagentActivityRowData {
  activityStatus: string;
  conversationId: string;
  displayName: string;
  status: string;
  statusSummary: string | undefined;
}

const messages = defineMessages({
  defaultName: {
    id: "localConversation.subagentActivity.defaultName",
    defaultMessage: "Agent",
    description:
      "Fallback name for a subagent when no specific name is available",
  },
  startedWorking: {
    id: "localConversation.subagentActivity.summary.startedWorking",
    defaultMessage: "{displayName} started working",
    description:
      "Subagent activity summary shown when a subagent starts working",
  },
  updated: {
    id: "localConversation.subagentActivity.summary.updated",
    defaultMessage: "{displayName} updated",
    description:
      "Subagent activity summary shown when a subagent reports an update",
  },
  interrupted: {
    id: "localConversation.subagentActivity.summary.interrupted",
    defaultMessage: "{displayName} interrupted",
    description:
      "Subagent activity summary shown when a subagent is interrupted",
  },
  groupStartedWorking: {
    id: "localConversation.subagentActivity.group.startedWorking",
    defaultMessage: "started working",
    description:
      "Shared status shown after subagent chips when subagents start working",
  },
  groupUpdated: {
    id: "localConversation.subagentActivity.group.updated",
    defaultMessage: "updated",
    description:
      "Shared status shown after subagent chips when subagents report an update",
  },
  groupInterrupted: {
    id: "localConversation.subagentActivity.group.interrupted",
    defaultMessage: "interrupted",
    description:
      "Shared status shown after subagent chips when subagent work is interrupted",
  },
  groupFinished: {
    id: "localConversation.subagentActivity.group.finished",
    defaultMessage: "finished",
    description:
      "Shared status shown after subagent chips when all subagents finish",
  },
  openSubagent: {
    id: "localConversation.subagentActivity.openSubagent",
    defaultMessage: "Open {displayName} subagent",
    description: "Accessible label for opening a subagent activity row",
  },
});

function resolveDisplayName(
  intl: IntlShape,
  displayName?: string | null,
): string {
  return displayName ?? intl.formatMessage(messages.defaultName);
}

function formatActivitySummary(
  intl: IntlShape,
  displayName: string,
  status: string,
): string | undefined {
  switch (status) {
    case "active":
      return intl.formatMessage(messages.startedWorking, { displayName });
    case "updated":
      return intl.formatMessage(messages.updated, { displayName });
    case "interrupted":
      return intl.formatMessage(messages.interrupted, { displayName });
  }
}

export function formatGroupStatus(intl: IntlShape, statuses: string[]): string {
  return statuses.some((status) => status === "interrupted")
    ? intl.formatMessage(messages.groupInterrupted)
    : statuses.some((status) => status === "updated")
      ? intl.formatMessage(messages.groupUpdated)
      : statuses.length > 0 && statuses.every((status) => status === "done")
        ? intl.formatMessage(messages.groupFinished)
        : intl.formatMessage(messages.groupStartedWorking);
}

function formatOpenSubagentLabel(intl: IntlShape, displayName: string): string {
  return intl.formatMessage(messages.openSubagent, { displayName });
}

export function buildSubagentActivityRows({
  activityItems,
  backgroundAgents,
  intl,
}: {
  activityItems: SubagentActivityItem[];
  backgroundAgents: BackgroundAgent[];
  intl: IntlShape;
}): SubagentActivityRowData[] {
  const agentsByConversation = new Map(
    backgroundAgents.map((agent) => [agent.conversationId, agent]),
  );
  const itemsByConversation = new Map<string, SubagentActivityItem>();
  for (const item of activityItems)
    itemsByConversation.set(normalizeThreadId(item.agentThreadId), item);
  return Array.from(itemsByConversation, ([conversationId, item]) => {
    const backgroundAgent = agentsByConversation.get(conversationId);
    const displayName = resolveDisplayName(intl, item.displayName);
    const status =
      backgroundAgent?.status ??
      (item.displayStatus === "interrupted" ? "done" : "active");
    return {
      activityStatus:
        item.displayStatus === "interrupted"
          ? "interrupted"
          : status === "done"
            ? "done"
            : item.displayStatus,
      conversationId,
      displayName,
      status,
      statusSummary:
        backgroundAgent?.statusSummary ??
        formatActivitySummary(intl, displayName, item.displayStatus),
    };
  });
}

export function buildOpenSubagentPayload({
  conversationId,
  displayCopy,
  displayName,
  item,
}: {
  conversationId: string;
  displayCopy: string | undefined;
  displayName: string;
  item: SubagentActivityItem;
}) {
  return {
    conversationId,
    displayName,
    showInlineActivity: true,
    agentRole: null,
    spawnModel: null,
    status: item.displayStatus === "active" ? "active" : "done",
    statusSummary: displayCopy,
    diffStats: null,
  };
}

export function SubagentActivityRow({ item }: { item: SubagentActivityItem }) {
  const intl = useIntl();
  const openInlineActivity = React.useContext(SubagentInlineActivityContext);
  const conversationId = normalizeThreadId(item.agentThreadId);

  const displayName = resolveDisplayName(intl, item.displayName);
  const summary = formatActivitySummary(intl, displayName, item.displayStatus);
  const avatar = (
    <SubagentAvatar
      seed={conversationId}
      className="icon-sm"
      aria-hidden={true}
    />
  );
  const label = (
    <span className="group flex min-w-0 items-center gap-2">
      {avatar}
      <span className="truncate text-token-conversation-summary-leading group-hover:text-token-foreground">
        {summary}
      </span>
    </span>
  );

  return (
    <ConversationSummaryRow padding="offset">
      {openInlineActivity == null ? (
        <div data-testid="subagent-activity-row">{label}</div>
      ) : (
        <button
          type="button"
          aria-label={formatOpenSubagentLabel(intl, displayName)}
          className="w-full cursor-interaction text-start focus-visible:outline-2 focus-visible:outline-offset-2"
          data-testid="subagent-activity-row"
          onClick={() => {
            openInlineActivity(
              buildOpenSubagentPayload({
                conversationId,
                displayCopy: summary,
                displayName,
                item,
              }),
            );
          }}
        >
          {label}
        </button>
      )}
    </ConversationSummaryRow>
  );
}
