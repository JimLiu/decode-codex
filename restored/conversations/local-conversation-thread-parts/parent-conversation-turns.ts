// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Helpers for separating child conversation turns from an inherited parent thread.

export interface ConversationTurnWithItems {
  turnId?: string | null;
  items: readonly unknown[];
}

export interface ConversationTurnCollection<
  Turn extends ConversationTurnWithItems = ConversationTurnWithItems,
> {
  turns: readonly Turn[];
}

export interface GetConversationTurnsNotInParentOptions<
  Turn extends ConversationTurnWithItems,
> {
  areTurnItemsEqual: (turnItem: unknown, parentTurnItem: unknown) => boolean;
  conversation: ConversationTurnCollection<Turn>;
  parentConversation: ConversationTurnCollection;
}

export function getConversationTurnsNotInParent<
  Turn extends ConversationTurnWithItems,
>({
  areTurnItemsEqual,
  conversation,
  parentConversation,
}: GetConversationTurnsNotInParentOptions<Turn>): Turn[] {
  let parentTurnIds = new Set<string>();
  for (let parentTurn of parentConversation.turns)
    if (parentTurn.turnId != null) parentTurnIds.add(parentTurn.turnId);
  return conversation.turns.filter((turn) => {
    if (turn.turnId != null && parentTurnIds.has(turn.turnId)) return false;
    if (turn.items.length === 0) return true;
    return !parentConversation.turns.some(
      (parentTurn) =>
        parentTurn.items.length >= turn.items.length &&
        turn.items.every((turnItem, itemIndex) =>
          areTurnItemsEqual(turnItem, parentTurn.items[itemIndex]),
        ),
    );
  });
}
