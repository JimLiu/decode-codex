// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import type {
  ActiveTurnTreeNode,
  TaskTurn,
  TaskTurnsResponse,
  TurnTreeNode,
} from "./types";
export function isUserTaskTurn(turn: TaskTurn): boolean {
  return "input_items" in turn;
}
export function collectSortedTaskTurns({
  fallbackAssistantTurn,
  fallbackUserTurn,
  taskTurns,
}: {
  fallbackAssistantTurn?: TaskTurn | null;
  fallbackUserTurn?: TaskTurn | null;
  taskTurns?: TaskTurnsResponse | null;
}): TaskTurn[] {
  const turnsById = new Map<string, TaskTurn>();
  Object.values(taskTurns?.turn_mapping ?? {}).forEach((entry) => {
    if (entry?.turn) turnsById.set(entry.turn.id, entry.turn);
  });
  if (fallbackUserTurn) turnsById.set(fallbackUserTurn.id, fallbackUserTurn);
  if (fallbackAssistantTurn) {
    turnsById.set(fallbackAssistantTurn.id, fallbackAssistantTurn);
  }
  return Array.from(turnsById.values()).sort(
    (left, right) => left.created_at - right.created_at,
  );
}
export function buildTurnTree(turns: readonly TaskTurn[]): TurnTreeNode | null {
  const assistantTurnsByUserTurnId: Record<string, TaskTurn[]> = {};
  const userTurnsByAssistantTurnId: Record<string, TaskTurn> = {};
  let rootUserTurn: TaskTurn | undefined;
  for (const turn of turns) {
    if (isUserTaskTurn(turn)) {
      if (turn.previous_turn_id) {
        userTurnsByAssistantTurnId[turn.previous_turn_id] = turn;
      } else {
        rootUserTurn = turn;
      }
    } else if (turn.previous_turn_id) {
      (assistantTurnsByUserTurnId[turn.previous_turn_id] ??= []).push(turn);
    }
  }
  if (!rootUserTurn) return null;
  const buildNode = (userTurn: TaskTurn): TurnTreeNode => {
    const assistantTurns = assistantTurnsByUserTurnId[userTurn.id] ?? [];
    const children: Record<string, TurnTreeNode> = {};
    for (const assistantTurn of assistantTurns) {
      const childUserTurn = userTurnsByAssistantTurnId[assistantTurn.id];
      if (childUserTurn) children[assistantTurn.id] = buildNode(childUserTurn);
    }
    return {
      userTurn,
      assistantTurns,
      children,
    };
  };
  return buildNode(rootUserTurn);
}
export function getPreviousUserTurnIdForLastUserTurn(
  turns: readonly TaskTurn[],
): string | null {
  for (let index = turns.length - 1; index >= 0; index -= 1) {
    const turn = turns[index];
    if (turn && isUserTaskTurn(turn) && turn.previous_turn_id) {
      return turn.previous_turn_id;
    }
  }
  return null;
}
export function selectPreferredTurn(
  turns: readonly TaskTurn[],
  preferredTurnId: string | null,
): TaskTurn | null {
  return (
    turns.find((turn) => turn.id === preferredTurnId && !turn.discarded) ??
    turns.find((turn) => !turn.discarded) ??
    turns.find((turn) => turn.id === preferredTurnId) ??
    turns[0] ??
    null
  );
}
export function areTurnsInSameLineage(
  turnsById: Map<string, TaskTurn>,
  firstTurnId: string,
  secondTurnId: string,
): boolean {
  return (
    isTurnDescendedFrom(turnsById, firstTurnId, secondTurnId) ||
    isTurnDescendedFrom(turnsById, secondTurnId, firstTurnId)
  );
}
function isTurnDescendedFrom(
  turnsById: Map<string, TaskTurn>,
  ancestorTurnId: string,
  descendantTurnId: string,
): boolean {
  if (ancestorTurnId === descendantTurnId) return true;
  let turn = turnsById.get(descendantTurnId);
  const visitedTurnIds = new Set<string>();
  while (turn?.previous_turn_id && !visitedTurnIds.has(turn.id)) {
    visitedTurnIds.add(turn.id);
    if (turn.previous_turn_id === ancestorTurnId) return true;
    turn = turnsById.get(turn.previous_turn_id);
  }
  return false;
}
export function getActiveTurnPath(
  tree: TurnTreeNode | null,
  preferredAssistantTurnId: string | null,
): ActiveTurnTreeNode[] {
  if (!tree) return [];
  let preferredPath = preferredAssistantTurnId
    ? findAssistantTurnPath(tree, preferredAssistantTurnId)
    : null;
  let node: TurnTreeNode | undefined = tree;
  const path: ActiveTurnTreeNode[] = [];
  while (node) {
    const preferredActiveId =
      preferredPath?.[0] ?? node.assistantTurns[0]?.id ?? null;
    const activeTurnId =
      selectPreferredTurn(node.assistantTurns, preferredActiveId)?.id ?? null;
    path.push({
      node,
      activeId: activeTurnId,
    });
    if (!activeTurnId) break;
    preferredPath =
      preferredPath?.[0] === activeTurnId ? preferredPath.slice(1) : null;
    node = node.children[activeTurnId];
  }
  return path;
}
function findAssistantTurnPath(
  node: TurnTreeNode,
  assistantTurnId: string,
): string[] | null {
  for (const assistantTurn of node.assistantTurns) {
    if (assistantTurn.id === assistantTurnId) return [assistantTurn.id];
    const childPath = node.children[assistantTurn.id]
      ? findAssistantTurnPath(node.children[assistantTurn.id], assistantTurnId)
      : null;
    if (childPath) return [assistantTurn.id, ...childPath];
  }
  return null;
}
