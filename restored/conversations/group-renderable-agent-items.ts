// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Folds a turn's agent items into renderable units, collapsing consecutive
// file-exploration steps (reads / searches / listings) and adjoining reasoning
// into a single "exploration" group, and reports whether the agent is still
// exploring (localConversation domain).
import {
  isConversationItemInProgress,
  isInlineReadCommandSummaryVisible,
  last,
} from "../boundaries/onboarding-commons-externals.facade";

export function initRenderableAgentItemsGroupingChunk(): void {}

export type AgentTurnItem = {
  type: string;
  parsedCmd?: {
    type: string;
    isFinished?: boolean;
    [key: string]: unknown;
  };
  cwd?: string | null;
  completed?: boolean;
  [key: string]: unknown;
};

export type ExplorationStatus = "exploring" | "explored";

export type RenderableAgentUnit =
  | { kind: "item"; item: AgentTurnItem }
  | { kind: "exploration"; items: AgentTurnItem[]; status: ExplorationStatus };

export interface ResolveRenderableAgentItemsInput {
  agentItems: AgentTurnItem[];
  isTurnInProgress: boolean;
  isAnyNonAgentItemInProgress: boolean;
}

export interface ResolveRenderableAgentItemsResult {
  renderableAgentItems: RenderableAgentUnit[];
  isExploring: boolean;
  isAnyNonExploringAgentItemInProgress: boolean;
}

function isExplorationAgentItem(item: AgentTurnItem): boolean {
  if (
    item.type !== "exec" ||
    (item.parsedCmd?.type === "read" &&
      !item.parsedCmd.isFinished &&
      isInlineReadCommandSummaryVisible({
        summary: item.parsedCmd,
        cwd: item.cwd,
      }))
  ) {
    return false;
  }
  return (
    item.parsedCmd?.type === "list_files" ||
    item.parsedCmd?.type === "search" ||
    item.parsedCmd?.type === "read"
  );
}

export function resolveRenderableAgentItems({
  agentItems,
  isTurnInProgress,
  isAnyNonAgentItemInProgress,
}: ResolveRenderableAgentItemsInput): ResolveRenderableAgentItemsResult {
  const renderableAgentItems: RenderableAgentUnit[] = [];
  let explorationItems: AgentTurnItem[] | null = null;
  let isExploring = false;
  let isAnyNonExploringAgentItemInProgress = false;

  const flushExploration = (status: ExplorationStatus) => {
    if (explorationItems && explorationItems.length > 0) {
      renderableAgentItems.push({
        kind: "exploration",
        items: explorationItems,
        status,
      });
    }
    explorationItems = null;
  };

  for (const [, item] of agentItems.entries()) {
    if (isExplorationAgentItem(item)) {
      if (explorationItems) {
        explorationItems.push(item);
        continue;
      }
      explorationItems = [item];
      continue;
    }
    if (item.type === "reasoning") {
      explorationItems?.push(item);
      continue;
    }
    if (explorationItems) flushExploration("explored");
    renderableAgentItems.push({ kind: "item", item });
  }

  if (explorationItems) {
    const hasInProgressExploration = explorationItems.some((item) =>
      isConversationItemInProgress(item),
    );
    isExploring =
      isTurnInProgress &&
      (!isAnyNonAgentItemInProgress || hasInProgressExploration);
    flushExploration(isExploring ? "exploring" : "explored");
  } else {
    const lastUnit = last(renderableAgentItems);
    if (lastUnit?.kind === "item") {
      isAnyNonExploringAgentItemInProgress = isConversationItemInProgress(
        lastUnit.item,
      );
      if (
        lastUnit.item.type === "reasoning" &&
        lastUnit.item.completed === false
      ) {
        isAnyNonExploringAgentItemInProgress = false;
      }
    }
  }

  return {
    renderableAgentItems,
    isExploring,
    isAnyNonExploringAgentItemInProgress,
  };
}
