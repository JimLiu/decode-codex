// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collapse-state logic for a conversation turn's agent activity: whether the
// activity slice may collapse, partitioning renderable entries into
// collapsible / persistent / pre-toggle buckets, and the persisted
// per-turn collapsed map (localConversation domain).
import {
  isMcpAppWindowType,
  resolveMcpAppForToolResult,
} from "../boundaries/onboarding-commons-externals.facade";

export function initTurnCollapseStateChunk(): void {}

export interface RenderableTurnItem {
  type: string;
  steeringStatus?: unknown;
  hookFeedback?: boolean;
  completed?: boolean;
  mcpAppResourceUri?: string | null;
  result?: { type: string; raw?: unknown } | null;
  invocation?: { server: string; tool: string };
  [key: string]: unknown;
}

export type RenderableTurnEntry =
  | { kind: "item"; item: RenderableTurnItem }
  | { kind: string; [key: string]: unknown };

export interface TurnCollapseState {
  shouldAllowCollapse: boolean;
  isCollapsed: boolean;
}

export interface PartitionedCollapseEntries {
  collapsibleEntries: RenderableTurnEntry[];
  expandedEntries: RenderableTurnEntry[];
  persistentEntries: RenderableTurnEntry[];
  preToggleEntries: RenderableTurnEntry[];
  workedForItem: RenderableTurnItem | null;
}

interface PersistentEntryContext {
  keepMcpAppEntriesPersistent?: boolean;
  mcpServerStatuses?: unknown;
  renderMcpApps?: boolean;
  windowType?: unknown;
}

export function computeTurnCollapseState({
  hasFinalAssistantStarted,
  isTurnCancelled,
  hasRenderableAgentItems,
  forceExpanded = false,
  preventAutoCollapse,
  persistedCollapsed,
}: {
  hasFinalAssistantStarted: boolean;
  isTurnCancelled: boolean;
  hasRenderableAgentItems: boolean;
  forceExpanded?: boolean;
  preventAutoCollapse?: boolean | null;
  persistedCollapsed?: boolean | null;
}): TurnCollapseState {
  if (hasFinalAssistantStarted && !isTurnCancelled && hasRenderableAgentItems) {
    return {
      shouldAllowCollapse: true,
      isCollapsed:
        !forceExpanded && (persistedCollapsed ?? !preventAutoCollapse),
    };
  }
  return { shouldAllowCollapse: false, isCollapsed: false };
}

function mcpToolCallHasPersistentApp({
  item,
  mcpServerStatuses,
}: {
  item: RenderableTurnItem;
  mcpServerStatuses: unknown;
}): boolean {
  const rawResult =
    item.result?.type === "success" ? (item.result.raw ?? null) : null;
  if (item.completed && rawResult == null) {
    return false;
  }
  return (
    item.mcpAppResourceUri != null ||
    resolveMcpAppForToolResult({
      mcpServerStatuses,
      server: item.invocation?.server,
      tool: item.invocation?.tool,
      toolResult: rawResult,
    }) != null
  );
}

function isPersistentEntry({
  entry,
  keepMcpAppEntriesPersistent,
  mcpServerStatuses,
  renderMcpApps,
  windowType,
}: PersistentEntryContext & { entry: RenderableTurnEntry }): boolean {
  if (entry.kind !== "item") {
    return false;
  }
  const item = (entry as { item: RenderableTurnItem }).item;
  if (
    keepMcpAppEntriesPersistent &&
    renderMcpApps &&
    isMcpAppWindowType(windowType) &&
    item.type === "mcp-tool-call" &&
    mcpToolCallHasPersistentApp({ item, mcpServerStatuses })
  ) {
    return true;
  }
  return (
    item.type === "user-message" &&
    (item.steeringStatus != null || item.hookFeedback === true)
  );
}

export function partitionCollapsibleEntries(
  entries: RenderableTurnEntry[],
  {
    keepMcpAppEntriesPersistent = false,
    mcpServerStatuses,
    renderMcpApps = false,
    windowType,
  }: PersistentEntryContext = {},
): PartitionedCollapseEntries {
  const collapsibleEntries: RenderableTurnEntry[] = [];
  const expandedEntries: RenderableTurnEntry[] = [];
  const persistentEntries: RenderableTurnEntry[] = [];
  const preToggleEntries: RenderableTurnEntry[] = [];
  let workedForItem: RenderableTurnItem | null = null;
  for (const entry of entries) {
    if (entry.kind === "item") {
      const item = (entry as { item: RenderableTurnItem }).item;
      if (item.type === "worked-for") {
        workedForItem = item;
        continue;
      }
      if (item.type === "realtime-transcript") {
        if (expandedEntries.length === 0) {
          preToggleEntries.push(entry);
        } else {
          expandedEntries.push(entry);
          persistentEntries.push(entry);
        }
        continue;
      }
    }
    expandedEntries.push(entry);
    if (
      isPersistentEntry({
        entry,
        keepMcpAppEntriesPersistent,
        mcpServerStatuses,
        renderMcpApps,
        windowType,
      })
    ) {
      persistentEntries.push(entry);
      continue;
    }
    collapsibleEntries.push(entry);
  }
  return {
    collapsibleEntries,
    expandedEntries,
    persistentEntries,
    preToggleEntries,
    workedForItem,
  };
}

export function updateCollapsedTurnState({
  current,
  conversationId,
  turnId,
  collapsed,
}: {
  current: Record<string, Record<string, boolean>>;
  conversationId: string;
  turnId: string;
  collapsed: boolean;
}): Record<string, Record<string, boolean>> {
  const conversationState = current[conversationId] ?? {};
  return {
    ...current,
    [conversationId]: {
      ...conversationState,
      [turnId]: collapsed,
    },
  };
}
