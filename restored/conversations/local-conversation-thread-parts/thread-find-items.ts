// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Thread-find navigation items for visible local conversation turns.
import { once } from "../../runtime/commonjs-interop";
import { initThreadFindPreviewRuntime } from "./conversation-content-runtime";
import {
  initThreadFindItemIdRuntime,
  joinThreadFindItemId,
} from "./conversation-search-runtime";
import {
  buildThreadFindPreviewOutputs,
  EMPTY_THREAD_FIND_PREVIEW_OUTPUTS,
  type ThreadFindPreviewOutput,
} from "./thread-find-preview-outputs";
import {
  initLocalConversationArtifactRuntime,
  initLocalConversationMarkdownResourceRuntime,
  renderLocalConversationTurnForArtifacts,
} from "./local-conversation-artifact-runtime";

type RenderedConversationItem = {
  content: string;
  heartbeatTrigger?: unknown;
  message: string;
  src?: string | null;
  type: string;
};

type RenderedConversationTurn = {
  artifacts: {
    editedFilePaths: readonly string[];
  };
  items: readonly RenderedConversationItem[];
  status: string;
};

type VisibleThreadFindTurnEntry = {
  preserveServerUserMessages?: boolean;
  requests: readonly unknown[];
  turn: {
    items: readonly unknown[];
  };
  turnSearchKey: string;
};

export type ThreadFindItem = {
  getLabel(): string;
  getPreview(): {
    outputs: ThreadFindPreviewOutput[];
    response: string;
  };
  id: string;
  isHeartbeat?: boolean;
  turnKey: string;
};

type ThreadFindItemsCacheEntry = {
  isAppgenEndCardEnabled: boolean;
  isBackgroundSubagentsEnabled: boolean;
  items: ThreadFindItem[];
  modelProvider: unknown;
  preserveServerUserMessages?: boolean;
  projectlessOutputDirectory: string | null;
  requests: readonly unknown[];
  turnSearchKey: string;
};

export type ThreadFindItemsForVisibleTurnsOptions = {
  isAppgenEndCardEnabled: boolean;
  isBackgroundSubagentsEnabled: boolean;
  isConversationHistoryComplete: boolean;
  modelProvider: unknown;
  projectlessOutputDirectory: string | null;
  visibleTurnEntries: readonly VisibleThreadFindTurnEntry[];
};

let EMPTY_THREAD_FIND_ITEMS: ThreadFindItem[];
let threadFindItemsCache: WeakMap<object, ThreadFindItemsCacheEntry>;

export function buildThreadFindItemsForVisibleTurns({
  isConversationHistoryComplete,
  isAppgenEndCardEnabled,
  isBackgroundSubagentsEnabled,
  modelProvider,
  projectlessOutputDirectory,
  visibleTurnEntries,
}: ThreadFindItemsForVisibleTurnsOptions): ThreadFindItem[] {
  return isConversationHistoryComplete
    ? visibleTurnEntries.flatMap((item) => {
        let cachedThreadFindItems = threadFindItemsCache.get(item.turn);
        if (
          cachedThreadFindItems?.isAppgenEndCardEnabled ===
            isAppgenEndCardEnabled &&
          cachedThreadFindItems.isBackgroundSubagentsEnabled ===
            isBackgroundSubagentsEnabled &&
          cachedThreadFindItems.modelProvider === modelProvider &&
          cachedThreadFindItems.preserveServerUserMessages ===
            item.preserveServerUserMessages &&
          cachedThreadFindItems.projectlessOutputDirectory ===
            projectlessOutputDirectory &&
          cachedThreadFindItems.requests === item.requests &&
          cachedThreadFindItems.turnSearchKey === item.turnSearchKey
        )
          return cachedThreadFindItems.items;

        let renderedTurn =
          renderLocalConversationTurnForArtifacts<RenderedConversationTurn>(
            item.turn,
            item.requests,
            {
              isBackgroundSubagentsEnabled,
              preserveServerUserMessages: item.preserveServerUserMessages,
            },
          );
        let renderedItems = renderedTurn.items,
          assistantResponseByUserItemIndex = new Map<number, string>(),
          latestUserMessageIndex: number | null = null,
          latestAssistantContent = "";

        for (let [itemIndex, renderedItem] of renderedItems.entries())
          renderedItem.type === "user-message"
            ? (latestUserMessageIndex = itemIndex)
            : renderedItem.type === "assistant-message" &&
              ((latestAssistantContent = renderedItem.content),
              latestUserMessageIndex != null &&
                assistantResponseByUserItemIndex.set(
                  latestUserMessageIndex,
                  renderedItem.content,
                ));

        let previewOutputs = buildThreadFindPreviewOutputs({
            assistantContent: latestAssistantContent,
            generatedImageSources: renderedItems.flatMap((renderedItem) =>
              renderedItem.type === "generated-image" &&
              renderedItem.src != null
                ? [renderedItem.src]
                : [],
            ),
            isAppgenEndCardEnabled,
            projectlessOutputDirectory,
            turn: renderedTurn,
          }),
          turnKeyByItem = new Map<RenderedConversationItem, string>(),
          threadFindItems = renderedItems.flatMap((renderedItem, index) => {
            let previewOutputsForItem =
              index === latestUserMessageIndex
                ? previewOutputs
                : EMPTY_THREAD_FIND_PREVIEW_OUTPUTS;
            return renderedItem.type === "user-message"
              ? [
                  {
                    getPreview: () => ({
                      outputs: previewOutputsForItem,
                      response:
                        assistantResponseByUserItemIndex.get(index) ?? "",
                    }),
                    id: joinThreadFindItemId(
                      item.turnSearchKey,
                      `${index}:user`,
                    ),
                    getLabel: () => renderedItem.message.trim(),
                    isHeartbeat: renderedItem.heartbeatTrigger != null,
                    turnKey:
                      turnKeyByItem.get(renderedItem) ?? item.turnSearchKey,
                  },
                ]
              : [];
          });

        threadFindItemsCache.set(item.turn, {
          isAppgenEndCardEnabled,
          isBackgroundSubagentsEnabled,
          items: threadFindItems,
          modelProvider,
          preserveServerUserMessages: item.preserveServerUserMessages,
          projectlessOutputDirectory,
          requests: item.requests,
          turnSearchKey: item.turnSearchKey,
        });
        return threadFindItems;
      })
    : EMPTY_THREAD_FIND_ITEMS;
}

export const initThreadFindItemsBuilder = once(() => {
  initThreadFindPreviewRuntime();
  initThreadFindItemIdRuntime();
  initLocalConversationArtifactRuntime();
  initLocalConversationMarkdownResourceRuntime();
  EMPTY_THREAD_FIND_ITEMS = [];
  threadFindItemsCache = new WeakMap();
});
