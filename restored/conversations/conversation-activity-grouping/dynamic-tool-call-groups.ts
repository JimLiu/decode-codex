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

// Wit: fold runs of dynamic-tool-call items into a dynamic-tool-call-group,
// honoring descriptors that must stand alone in the conversation.
export function groupDynamicToolCalls({
  units,
  keepLatestLiveActivityInGroup = false,
}: GroupDynamicToolCallsOptions): ActivityUnit[] {
  const result: ActivityUnit[] = [];
  for (let index = 0; index < units.length; ) {
    const grouped: ToolActivityItem[] = [];
    let firstUnit: ActivityUnit | null = null;
    let cursor = index;

    for (; cursor < units.length; ) {
      const item = getDynamicToolCallItem(units[cursor]);
      if (item == null) break;
      if (findToolActivityDescriptor(item)?.standaloneInConversation === true) {
        if (grouped.length > 0) break;
        grouped.push(item);
        firstUnit = units[cursor] ?? null;
        cursor += 1;
        break;
      }
      grouped.push(item);
      const unit = units[cursor];
      if (firstUnit == null && unit != null) firstUnit = unit;
      cursor += 1;
    }

    if (cursor === index) {
      const unit = units[index];
      if (unit != null) result.push(unit);
      index += 1;
      continue;
    }

    if (grouped.length === 0) {
      index = cursor;
      continue;
    }

    if (
      shouldGroupDynamicToolCalls({
        items: grouped,
        keepLatestLiveActivityInGroup:
          keepLatestLiveActivityInGroup && cursor === units.length,
      })
    ) {
      result.push({
        kind: "dynamic-tool-call-group",
        key: grouped[0]?.callId ?? `${index}`,
        items: grouped,
      });
      index = cursor;
      continue;
    }

    if (firstUnit != null) result.push(firstUnit);
    index = cursor;
  }
  return result;
}
