// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Builds searchable conversation turn units for local conversation search.
import { once } from "../../runtime/commonjs-interop";
import {
  formatLocalConversationTurnForSearch,
  initLocalConversationTurnRenderingRuntime,
  isRenderableLocalConversationTurn,
  normalizeConversationSearchMarkdown,
} from "./conversation-turn-rendering";
import {
  createLocalConversationSearchAdapter,
  initConversationSearchHelpers,
  type ConversationSearchScrollAdapter,
  type ConversationSearchUnit,
  type SearchableConversationTurn,
} from "./local-conversation-search";
import { getLocalConversationTurnSearchKey } from "./turn-search-key";

type ConversationTurn = {
  items: ConversationTurnItem[];
  turnId?: string | null;
  [key: string]: unknown;
};

type ConversationTurnItem =
  | {
      message: string;
      type: "user-message";
    }
  | {
      content: string;
      type: "assistant-message";
    }
  | {
      type: string;
      [key: string]: unknown;
    };

type ConversationSearchSourceOptions = {
  getConversationState: () => { turns: ConversationTurn[] } | null | undefined;
  getIsBackgroundSubagentsEnabled: () => boolean;
  routeContextId: string;
  scrollAdapter: ConversationSearchScrollAdapter;
};

export function createLocalConversationSearchSource({
  getConversationState,
  getIsBackgroundSubagentsEnabled,
  routeContextId,
  scrollAdapter,
}: ConversationSearchSourceOptions) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () => {
      let conversationState = getConversationState();
      return conversationState == null
        ? []
        : conversationState.turns
            .map((turn, index) => {
              let renderOptions = {
                isBackgroundSubagentsEnabled: getIsBackgroundSubagentsEnabled(),
              };
              return isRenderableLocalConversationTurn(turn, [], renderOptions)
                ? {
                    turnKey: getLocalConversationTurnSearchKey(
                      turn.turnId,
                      index,
                    ),
                    units: extractConversationSearchUnits(
                      formatLocalConversationTurnForSearch<ConversationTurnItem>(
                        turn,
                        [],
                        renderOptions,
                      ).items,
                    ),
                  }
                : null;
            })
            .filter((turn): turn is SearchableConversationTurn => turn != null);
    },
    scrollAdapter,
  });
}

function extractConversationSearchUnits(
  items: ConversationTurnItem[],
): ConversationSearchUnit[] {
  let units: ConversationSearchUnit[] = [];
  let latestAssistantMessageIndex = findLastIndex(
    items,
    (item) => item.type === "assistant-message",
  );

  items.forEach((item, index) => {
    if (item.type === "user-message") {
      let messageText = item.message.trim();
      if (messageText.length === 0) return;
      units.push({
        unitId: `${index}:user`,
        text: messageText,
      });
      return;
    }
    if (
      item.type !== "assistant-message" ||
      index !== latestAssistantMessageIndex
    )
      return;

    let assistantText = normalizeConversationSearchMarkdown(item.content);
    assistantText.length !== 0 &&
      units.push({
        unitId: `${index}:assistant`,
        text: assistantText,
      });
  });

  return units;
}

function findLastIndex<T>(
  items: readonly T[],
  predicate: (item: T, index: number) => boolean,
): number {
  for (let index = items.length - 1; index >= 0; index--)
    if (predicate(items[index], index)) return index;
  return -1;
}

export const initConversationSearchUnitExtractor = once(() => {
  initConversationSearchHelpers();
  initLocalConversationTurnRenderingRuntime();
});
