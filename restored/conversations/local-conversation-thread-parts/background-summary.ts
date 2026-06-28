// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background agent and terminal summary helpers for the local conversation panel.

interface BackgroundAgentVisibilityState {
  showInlineActivity?: boolean | null;
}

interface BackgroundAgentStatusState {
  status: string;
}

interface BackgroundAgentIdentity {
  conversationId: string;
}

interface BackgroundTerminalIdentity {
  id: string;
}

export type BackgroundSummaryItem<Agent, Terminal> =
  | {
      backgroundAgent: Agent;
      type: "agent";
    }
  | {
      terminal: Terminal;
      type: "terminal";
    };

export function shouldShowInlineBackgroundAgent(
  backgroundAgent: BackgroundAgentVisibilityState,
): boolean {
  return backgroundAgent.showInlineActivity === true;
}

export function shouldHideInlineBackgroundAgent(
  backgroundAgent: BackgroundAgentVisibilityState,
): boolean {
  return !shouldShowInlineBackgroundAgent(backgroundAgent);
}

export function isDoneBackgroundAgent(
  backgroundAgent: BackgroundAgentStatusState,
): boolean {
  return backgroundAgent.status === "done";
}

export function isWorkingBackgroundAgent(
  backgroundAgent: BackgroundAgentStatusState,
): boolean {
  return backgroundAgent.status !== "done";
}

export function getInlineActivityBackgroundAgents<
  Agent extends BackgroundAgentVisibilityState,
>(backgroundAgents: Agent[]): Agent[] {
  return backgroundAgents.filter(shouldShowInlineBackgroundAgent);
}

export function createBackgroundSummaryItems<
  Agent extends BackgroundAgentVisibilityState,
  Terminal,
>(
  backgroundAgents: Agent[],
  backgroundTerminals: Terminal[],
): BackgroundSummaryItem<Agent, Terminal>[] {
  let items: BackgroundSummaryItem<Agent, Terminal>[] = [];
  for (let backgroundAgent of backgroundAgents) {
    if (shouldHideInlineBackgroundAgent(backgroundAgent)) {
      items.push({
        backgroundAgent,
        type: "agent",
      });
    }
  }
  for (let terminal of backgroundTerminals) {
    items.push({
      terminal,
      type: "terminal",
    });
  }
  return items;
}

export function getBackgroundSummaryItemKey(
  item: BackgroundSummaryItem<
    BackgroundAgentIdentity,
    BackgroundTerminalIdentity
  >,
): string {
  switch (item.type) {
    case "agent":
      return `agent:${item.backgroundAgent.conversationId}`;
    case "terminal":
      return `terminal:${item.terminal.id}`;
  }
}
