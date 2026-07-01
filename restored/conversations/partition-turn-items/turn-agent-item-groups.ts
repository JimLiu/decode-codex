// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Partitions turn items into per-role renderer buckets.
import { uniqBy } from "../../boundaries/onboarding-commons-externals.facade";
import type { PartitionedTurnItems, TurnItem } from "./types";

export function initTurnItemPartitioningChunk(): void {}

const isPendingPatchApproval = (item: TurnItem): boolean =>
  item.type === "patch" &&
  item.approvalRequestId != null &&
  item.success == null;

const isPendingExecApproval = (item: TurnItem): boolean =>
  item.type === "exec" &&
  item.approvalRequestId != null &&
  item.output?.exitCode === undefined;

const isAssistantMessageItem = (item: TurnItem | null | undefined): boolean =>
  item?.type === "assistant-message";

const isSystemErrorItem = (item: TurnItem | null | undefined): boolean =>
  item?.type === "system-error";

function takeTrailingAutomaticApprovalReviews(items: TurnItem[]): TurnItem[] {
  const trailing: TurnItem[] = [];
  for (;;) {
    const lastItem = items[items.length - 1];
    if (lastItem?.type !== "automatic-approval-review") break;
    items.pop();
    trailing.push(lastItem);
  }
  return trailing.reverse();
}

const getApprovableItemId = (item: TurnItem): string | null => {
  if (
    item.type === "exec" ||
    item.type === "patch" ||
    item.type === "mcp-tool-call"
  ) {
    return item.type === "exec"
      ? (item.commandExecutionItemId ?? item.callId)
      : item.callId;
  }
  return null;
};

function attachAutomaticApprovalReviews(items: TurnItem[]): TurnItem[] {
  const reviewsByTargetId = new Map<string, TurnItem[]>();
  const approvableItemIds = new Set<string>();
  for (const item of items) {
    const approvableItemId = getApprovableItemId(item);
    if (approvableItemId != null) approvableItemIds.add(approvableItemId);
  }
  for (const item of items) {
    if (
      item.type === "automatic-approval-review" &&
      item.targetItemId != null &&
      approvableItemIds.has(item.targetItemId)
    ) {
      const existing = reviewsByTargetId.get(item.targetItemId);
      if (existing == null) {
        reviewsByTargetId.set(item.targetItemId, [item]);
        continue;
      }
      existing.push(item);
    }
  }
  return items.flatMap((item) => {
    if (
      item.type === "automatic-approval-review" &&
      item.targetItemId != null &&
      reviewsByTargetId.has(item.targetItemId)
    ) {
      return [];
    }
    const approvableItemId = getApprovableItemId(item);
    const reviews =
      approvableItemId == null
        ? null
        : (reviewsByTargetId.get(approvableItemId) ?? null);
    return reviews == null
      ? [item]
      : [{ ...item, automaticApprovalReviews: reviews }];
  });
}

const getElicitationServerId = (item: TurnItem): string | null => {
  switch (item.elicitation.kind) {
    case "formElicitation":
    case "openaiForm":
    case "generic":
    case "urlAction":
      return item.elicitation.serverName.trim() || null;
    case "mcpToolCall":
      return item.elicitation.approval.connector_id;
    case "connectorAuth":
      return item.elicitation.connector.connector_id;
    case "toolSuggestion":
    case "unsupportedOpenAIForm":
      return null;
    default:
      return null;
  }
};

function isCollectibleTurnItem(item: TurnItem): boolean {
  switch (item.type) {
    case "todo-list":
    case "turn-diff":
    case "user-message":
    case "remote-task-created":
    case "proposed-plan":
    case "plan-implementation":
    case "mcp-server-elicitation":
    case "permission-request":
    case "userInput":
    case "personality-changed":
    case "forked-from-conversation":
    case "model-changed":
    case "model-rerouted":
    case "auto-review-interruption-warning":
    case "generated-image":
    case "automation-update":
    case "subagent-activity":
      return false;
    case "web-search":
      return item.query.trim().length > 0;
    case "assistant-message":
    case "realtime-transcript":
    case "exec":
    case "patch":
    case "dynamic-tool-call":
    case "mcp-tool-call":
    case "automatic-approval-review":
    case "multi-agent-action":
    case "stream-error":
    case "system-error":
    case "context-compaction":
    case "reasoning":
    case "steered":
    case "user-input-response":
    case "worked-for":
    case "worktree-init":
      return true;
    default:
      return false;
  }
}

export function getTurnAgentItemGroups(
  items: TurnItem[],
  turnStatus: string,
): PartitionedTurnItems {
  let approvalItem: TurnItem | null = null;
  let userInputItem: TurnItem | null = null;
  const userItems: TurnItem[] = [];
  let unifiedDiffItem: TurnItem | null = null;
  let todoListItem: TurnItem | null = null;
  let proposedPlanItem: TurnItem | null = null;
  let planImplementationItem: TurnItem | null = null;
  const mcpServerElicitationItems: TurnItem[] = [];
  const permissionRequestItems: TurnItem[] = [];
  const elicitationServerIds = new Set<string>();
  const collectedItems: TurnItem[] = [];
  const automationUpdateItems: TurnItem[] = [];
  const toolOutputItems: TurnItem[] = [];
  const remoteTaskCreatedItems: TurnItem[] = [];
  const personalityChangedItems: TurnItem[] = [];
  const forkedFromConversationItems: TurnItem[] = [];
  const modelChangedItems: TurnItem[] = [];
  const modelReroutedItems: TurnItem[] = [];
  const postAssistantItems: TurnItem[] = [];
  const subagentActivityItemGroups: TurnItem[][] = [];
  let hasSeenInitialUserMessages = false;
  let prevWasSubagentActivity = false;

  for (const item of items) {
    const isNewSubagentGroup =
      item.type === "subagent-activity" && !prevWasSubagentActivity;
    prevWasSubagentActivity = item.type === "subagent-activity";

    if (item.type === "user-message" && item.heartbeatTrigger != null) {
      userItems.push(item);
      continue;
    }
    if (!hasSeenInitialUserMessages && item.type === "user-message") {
      userItems.push(item);
      continue;
    }
    hasSeenInitialUserMessages = true;
    if (item.type === "turn-diff") unifiedDiffItem = item;
    if (item.type === "todo-list") todoListItem = item;
    if (item.type === "proposed-plan") {
      proposedPlanItem = item;
      continue;
    }
    if (item.type === "remote-task-created") remoteTaskCreatedItems.push(item);
    if (item.type === "personality-changed") personalityChangedItems.push(item);
    if (item.type === "forked-from-conversation")
      forkedFromConversationItems.push(item);
    if (item.type === "model-changed") {
      modelChangedItems.push(item);
      continue;
    }
    if (item.type === "model-rerouted") {
      modelReroutedItems.push(item);
      continue;
    }
    if (item.type === "plan-implementation") {
      planImplementationItem = item;
      continue;
    }
    if (item.type === "mcp-server-elicitation" && item.completed !== true) {
      const serverId = getElicitationServerId(item);
      if (serverId != null) elicitationServerIds.add(serverId);
      mcpServerElicitationItems.push(item);
      continue;
    }
    if (item.type === "permission-request") {
      permissionRequestItems.push(item);
      continue;
    }
    const isPatchApproval = isPendingPatchApproval(item);
    const isExecApproval = !isPatchApproval && isPendingExecApproval(item);
    if (isPatchApproval || isExecApproval) {
      approvalItem = item;
      continue;
    }
    if (item.type === "userInput" && item.completed !== true) {
      userInputItem = item;
      continue;
    }
    if (item.type === "user-message") {
      collectedItems.push(item);
      continue;
    }
    if (item.type === "generated-image") {
      toolOutputItems.push(item);
      continue;
    }
    if (item.type === "automation-update") {
      automationUpdateItems.push(item);
      continue;
    }
    if (item.type === "auto-review-interruption-warning") {
      postAssistantItems.push(item);
      continue;
    }
    if (item.type === "subagent-activity") {
      if (isNewSubagentGroup) {
        collectedItems.push(item);
        subagentActivityItemGroups.push([item]);
      } else {
        subagentActivityItemGroups.at(-1)?.push(item);
      }
      continue;
    }
    if (isCollectibleTurnItem(item)) collectedItems.push(item);
  }

  const itemsWithReviews = attachAutomaticApprovalReviews(collectedItems);
  const trailingAutoReviews =
    takeTrailingAutomaticApprovalReviews(itemsWithReviews);
  const agentItems =
    elicitationServerIds.size > 0
      ? itemsWithReviews.filter(
          (item) =>
            item.type !== "mcp-tool-call" ||
            item.completed ||
            !elicitationServerIds.has(item.invocation.server),
        )
      : itemsWithReviews;
  const lastAgentItem = agentItems[agentItems.length - 1];
  const assistantCandidate = isAssistantMessageItem(lastAgentItem)
    ? lastAgentItem
    : null;
  const hasAssistantContent =
    (assistantCandidate?.content?.trim().length ?? 0) > 0 ||
    !!assistantCandidate?.structuredOutput;
  if (assistantCandidate) {
    agentItems.pop();
    postAssistantItems.push(...trailingAutoReviews);
  } else {
    agentItems.push(...trailingAutoReviews);
  }
  const newLastAgentItem = agentItems[agentItems.length - 1];
  const systemEventItem =
    turnStatus !== "in_progress" &&
    !hasAssistantContent &&
    isSystemErrorItem(newLastAgentItem)
      ? newLastAgentItem
      : null;
  if (systemEventItem) agentItems.pop();
  const assistantItem =
    assistantCandidate != null &&
    assistantCandidate.completed &&
    automationUpdateItems.length > 0
      ? {
          ...assistantCandidate,
          automationCitations: uniqBy(
            [...automationUpdateItems].reverse(),
            (item: TurnItem) =>
              item.result?.automationId ?? item.arguments.id ?? item.callId,
          ).reverse(),
        }
      : assistantCandidate;

  return {
    userItems,
    agentItems,
    automationUpdateItems:
      assistantCandidate == null ? automationUpdateItems : [],
    assistantItem,
    toolOutputItems,
    postAssistantItems,
    systemEventItem,
    unifiedDiffItem,
    remoteTaskCreatedItems,
    personalityChangedItems,
    forkedFromConversationItems,
    modelChangedItems,
    modelReroutedItems,
    subagentActivityItemGroups,
    todoListItem,
    proposedPlanItem,
    planImplementationItem,
    mcpServerElicitationItems,
    permissionRequestItems,
    approvalItem,
    userInputItem,
  };
}
