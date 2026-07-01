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
import { groupConversationActivityEntries } from "./activity-entry-groups";
import { collapseToolActivityUnits } from "./collapsed-tool-activity";
import { groupDynamicToolCalls } from "./dynamic-tool-call-groups";
import { groupPendingMcpToolCalls } from "./pending-mcp-tool-calls";

// zit: full grouping pipeline (entries -> collapse -> dynamic groups -> pending MCP).
export function buildConversationActivityUnits({
  entries,
  conversationDetailLevel,
  isTurnInProgress,
  isActivitySliceClosed,
  mcpServerStatuses,
  shouldAutoExpandMcpApps = false,
  modelProvider = null,
  resolvedApps,
  isTurnCancelled = false,
  collapseMixedDynamicToolActivity = false,
}: BuildConversationActivityUnitsOptions): ActivityUnit[] {
  const keepLatestLiveActivityInGroup =
    isTurnInProgress && !isActivitySliceClosed;
  return groupPendingMcpToolCalls({
    units: groupDynamicToolCalls({
      units: collapseToolActivityUnits({
        units: groupConversationActivityEntries(entries),
        isActivitySliceClosed,
        conversationDetailLevel,
        mcpServerStatuses,
        resolvedApps,
        shouldAutoExpandMcpApps,
        modelProvider,
        isTurnCancelled,
        collapseMixedDynamicToolActivity,
      }),
      keepLatestLiveActivityInGroup,
    }),
    isActivitySliceClosed,
    mcpServerStatuses,
    shouldAutoExpandMcpApps,
    resolvedApps,
    keepLatestLiveActivityInGroup,
  });
}
