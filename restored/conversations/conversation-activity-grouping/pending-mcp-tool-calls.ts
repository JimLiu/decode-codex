// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Grouping passes that fold a conversation turn's raw render entries into
// web-search / multi-agent / pending-MCP / dynamic-tool-call / collapsed-tool
// activity groups for the local conversation thread (localConversation domain).
import {
  getMcpToolCallItem,
  isMcpToolCallExcludedFromGrouping,
  getMcpToolCallGroupKey,
  getDynamicToolCallItem,
  findToolActivityDescriptor,
  shouldGroupDynamicToolCalls,
  isDynamicToolCallUnit,
  toToolActivitySummaryUnit,
  buildToolActivitySummaries,
  findIndexAfterLastAssistantMessage,
  shouldCollapseGroupedUnits,
  buildCollapsedActivityKey,
  adjustCollapsedActivitySummary,
} from "../../boundaries/onboarding-commons-externals.facade";
import type {
  ActivityGroup,
  ActivityUnit,
  BuildConversationActivityUnitsOptions,
  ConversationDetailLevel,
  RenderEntry,
  ToolActivityItem,
} from "../conversation-activity-types";

type GroupPendingMcpToolCallsOptions = {
  units: ActivityUnit[];
  isActivitySliceClosed: boolean;
  mcpServerStatuses: unknown;
  shouldAutoExpandMcpApps?: boolean;
  resolvedApps: unknown;
  keepLatestLiveActivityInGroup?: boolean;
};

type GroupDynamicToolCallsOptions = {
  units: ActivityUnit[];
  keepLatestLiveActivityInGroup?: boolean;
};

type CollapseToolActivityOptions = {
  units: ActivityUnit[];
  isActivitySliceClosed: boolean;
  conversationDetailLevel: ConversationDetailLevel;
  mcpServerStatuses: unknown;
  resolvedApps: unknown;
  shouldAutoExpandMcpApps?: boolean;
  modelProvider?: unknown;
  isTurnCancelled?: boolean;
  collapseMixedDynamicToolActivity?: boolean;
};

// Uit: while the activity slice is open, merge runs of adjacent MCP tool calls
// that share a group key into a single pending-mcp-tool-calls unit.
export function groupPendingMcpToolCalls({
  units,
  isActivitySliceClosed,
  mcpServerStatuses,
  shouldAutoExpandMcpApps = false,
  resolvedApps,
  keepLatestLiveActivityInGroup = false,
}: GroupPendingMcpToolCallsOptions): ActivityUnit[] {
  if (isActivitySliceClosed) return units;

  const result: ActivityUnit[] = [];
  for (let index = 0; index < units.length; ) {
    const grouped: ToolActivityItem[] = [];
    let groupKey: string | null = null;
    let cursor = index;

    for (; cursor < units.length; ) {
      const item = getMcpToolCallItem(units[cursor]);
      if (
        item == null ||
        isMcpToolCallExcludedFromGrouping(
          item,
          mcpServerStatuses,
          shouldAutoExpandMcpApps,
        )
      )
        break;
      const key = getMcpToolCallGroupKey({ item, resolvedApps });
      if (groupKey != null && key !== groupKey) break;
      groupKey = key;
      grouped.push(item);
      cursor += 1;
    }

    if (
      grouped.length > 1 ||
      (keepLatestLiveActivityInGroup &&
        grouped.length > 0 &&
        cursor === units.length)
    ) {
      result.push({
        kind: "pending-mcp-tool-calls",
        key: grouped[0]?.callId ?? `${index}`,
        items: grouped,
      });
      index = cursor;
      continue;
    }

    const unit = units[index];
    if (unit != null) result.push(unit);
    index += 1;
  }
  return result;
}
