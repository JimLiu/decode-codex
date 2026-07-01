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

// Hit: fold consecutive web-search items into a single web-search-group and
// consecutive multi-agent actions sharing an action into a multi-agent-group;
// everything else passes through as a plain entry.
export function groupConversationActivityEntries(
  entries: RenderEntry[],
): ActivityGroup[] {
  const groups: ActivityGroup[] = [];
  let pendingWebSearches: ToolActivityItem[] = [];

  const flushWebSearches = () => {
    if (pendingWebSearches.length !== 0) {
      groups.push({ kind: "web-search-group", items: pendingWebSearches });
      pendingWebSearches = [];
    }
  };

  for (const entry of entries) {
    if (entry.kind === "item" && (entry as any).item.type === "web-search") {
      pendingWebSearches.push((entry as any).item);
      continue;
    }
    flushWebSearches();
    if (
      entry.kind === "item" &&
      (entry as any).item.type === "multi-agent-action"
    ) {
      const item = (entry as any).item as ToolActivityItem;
      const last = groups[groups.length - 1];
      if (
        last?.kind === "multi-agent-group" &&
        last.items[0]?.action === item.action
      ) {
        last.items.push(item);
        continue;
      }
      groups.push({ kind: "multi-agent-group", items: [item] });
      continue;
    }
    groups.push({ kind: "entry", entry });
  }

  flushWebSearches();
  return groups;
}
