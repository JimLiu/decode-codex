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

// Xit: collapse contiguous tool-activity into collapsed-tool-activity units with
// rolled-up summaries, keeping the current (open) activity expanded.
export function collapseToolActivityUnits({
  units,
  isActivitySliceClosed,
  conversationDetailLevel,
  mcpServerStatuses,
  resolvedApps,
  shouldAutoExpandMcpApps = false,
  modelProvider = null,
  isTurnCancelled = false,
  collapseMixedDynamicToolActivity = false,
}: CollapseToolActivityOptions): ActivityUnit[] {
  const summaryUnits = units.map((unit) =>
    collapseMixedDynamicToolActivity && isDynamicToolCallUnit(unit)
      ? {
          type: "mcp-tool-call",
          isInProgress: !(unit as any).entry.item.completed,
          source: null,
        }
      : toToolActivitySummaryUnit(unit, {
          mcpServerStatuses,
          resolvedApps,
          shouldKeepMcpAppToolCallsExpandedByDefault: shouldAutoExpandMcpApps,
          modelProvider,
          isTurnCancelled,
        }),
  );

  const ranges: Array<{
    startIndex: number;
    endIndex: number;
    summary: unknown;
  }> = [
    ...buildToolActivitySummaries({
      units: summaryUnits,
      isActivitySliceClosed,
    }),
  ];

  if (!isActivitySliceClosed) {
    const tailStart = findIndexAfterLastAssistantMessage(summaryUnits);
    const tailUnits: any[] = [];
    for (const unit of summaryUnits.slice(tailStart)) {
      if (unit.type === "mcp-tool-call") {
        tailUnits.push({ type: "other" });
        continue;
      }
      tailUnits.push(unit);
    }
    for (const range of buildToolActivitySummaries({
      units: tailUnits,
      isActivitySliceClosed: true,
    })) {
      ranges.push({
        startIndex: range.startIndex + tailStart,
        endIndex: range.endIndex + tailStart,
        summary: range.summary,
      });
    }
  }

  const collapsibleRanges = ranges.filter((range) =>
    shouldCollapseGroupedUnits(units.slice(range.startIndex, range.endIndex)),
  );
  if (collapsibleRanges.length === 0) return units;
  collapsibleRanges.sort((a, b) => a.startIndex - b.startIndex);

  const result: ActivityUnit[] = [];
  let rangeIndex = 0;
  for (let index = 0; index < units.length; ) {
    const range = collapsibleRanges[rangeIndex];
    if (range && index === range.startIndex) {
      const groupedUnits = units.slice(range.startIndex, range.endIndex);
      const firstUnit = groupedUnits[0];
      const isCurrentToolActivity =
        !isActivitySliceClosed && range.endIndex === units.length;

      if (
        groupedUnits.length === 1 &&
        firstUnit != null &&
        firstUnit.kind === "entry" &&
        (firstUnit as any).entry.kind === "item"
      ) {
        const item = (firstUnit as any).entry.item;
        if (
          item.type === "mcp-tool-call" ||
          (conversationDetailLevel !== "STEPS_PROSE" &&
            item.type === "exec" &&
            !isCurrentToolActivity)
        ) {
          result.push(firstUnit);
          index = range.endIndex;
          rangeIndex += 1;
          continue;
        }
      }

      if (firstUnit != null) {
        const summary = adjustCollapsedActivitySummary({
          groupedUnits,
          isCurrentToolActivity,
          summary: range.summary,
        });
        result.push({
          kind: "collapsed-tool-activity",
          key: buildCollapsedActivityKey(firstUnit, range.startIndex),
          units: groupedUnits,
          summary,
        });
      }
      index = range.endIndex;
      rangeIndex += 1;
      continue;
    }

    const unit = units[index];
    if (unit != null) result.push(unit);
    index += 1;
  }
  return result;
}
