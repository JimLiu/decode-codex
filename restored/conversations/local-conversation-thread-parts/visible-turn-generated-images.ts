// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Generated-image output collection for visible local conversation turns.
import { once } from "../../runtime/commonjs-interop";
import { isEqualT as createIsEqual } from "../../vendor/lodash-is-equal";
import {
  collectLocalAssistantOutputArtifacts,
  collectLocalConversationEndResourcePaths,
  collectRenderedTurnOutputItems,
  initLocalConversationArtifactRuntime,
  initLocalConversationMarkdownResourceRuntime,
  initVisibleGeneratedImageOutputRuntime,
  renderLocalConversationTurnForArtifacts,
  resolveVisibleGeneratedImageOutputs,
} from "./local-conversation-artifact-runtime";

type GeneratedImageOutput = {
  src?: string | null;
  type?: string;
};

type ConversationTurnItem = {
  src?: string | null;
  type: string;
};

type ConversationTurnLike = {
  items: readonly ConversationTurnItem[];
};

type VisibleTurnEntryForGeneratedImages = {
  preserveServerUserMessages?: boolean;
  requests: readonly unknown[];
  turn: ConversationTurnLike;
  turnSearchKey: string;
};

type PreviousTurnListEntryForGeneratedImages = {
  generatedImages?: GeneratedImageOutput[];
  turn: ConversationTurnLike;
  turnSearchKey: string;
};

export type VisibleTurnGeneratedImagesOptions = {
  isBackgroundSubagentsEnabled: boolean;
  previousEntries: readonly PreviousTurnListEntryForGeneratedImages[];
  projectlessOutputDirectory: string | null;
  visibleTurnEntries: readonly VisibleTurnEntryForGeneratedImages[];
};

let areGeneratedImageListsEqual: (
  leftValue: unknown,
  rightValue: unknown,
) => boolean;

export function collectGeneratedImagesForVisibleTurns({
  isBackgroundSubagentsEnabled,
  previousEntries,
  projectlessOutputDirectory,
  visibleTurnEntries,
}: VisibleTurnGeneratedImagesOptions): GeneratedImageOutput[] {
  let previousGeneratedImages = previousEntries[0]?.generatedImages,
    matchingEntryCount: number | null = 0,
    lastMatchedTurnSearchKey: string | null = null;

  for (let previousEntry of previousEntries)
    if (previousEntry.turnSearchKey !== lastMatchedTurnSearchKey) {
      if (
        ((lastMatchedTurnSearchKey = previousEntry.turnSearchKey),
        visibleTurnEntries[matchingEntryCount]?.turn !== previousEntry.turn)
      ) {
        matchingEntryCount = null;
        break;
      }
      matchingEntryCount++;
    }

  let reusedGeneratedImages: GeneratedImageOutput[] = [],
    entriesNeedingImageScan = visibleTurnEntries;
  matchingEntryCount != null &&
    matchingEntryCount > 0 &&
    previousGeneratedImages != null &&
    ((reusedGeneratedImages = previousGeneratedImages),
    (entriesNeedingImageScan = visibleTurnEntries.slice(matchingEntryCount)));

  let generatedImages = [
    ...reusedGeneratedImages,
    ...entriesNeedingImageScan.flatMap(
      ({ preserveServerUserMessages, requests, turn }) => {
        if (
          !turn.items.some(
            (item) => item.type === "imageGeneration" && item.src != null,
          )
        )
          return [];

        let renderedTurn = renderLocalConversationTurnForArtifacts<{
          items: readonly unknown[];
          status: string;
        }>(turn, requests, {
          isBackgroundSubagentsEnabled,
          preserveServerUserMessages,
        });
        let { assistantItem, toolOutputItems } = collectRenderedTurnOutputItems(
          renderedTurn.items,
          renderedTurn.status,
        );
        let endResourcePaths = collectLocalConversationEndResourcePaths(
          collectLocalAssistantOutputArtifacts({
            assistantContent: assistantItem?.content ?? null,
            projectlessOutputDirectory,
            turn: renderedTurn,
          }),
        );
        return resolveVisibleGeneratedImageOutputs({
          completedGeneratedImages: toolOutputItems.filter(
            (item) => item.src != null,
          ),
          endResourcePaths,
          hasPendingGeneratedImages: false,
        }).visibleCompletedGeneratedImages;
      },
    ),
  ];

  return previousGeneratedImages != null &&
    areGeneratedImageListsEqual(previousGeneratedImages, generatedImages)
    ? previousGeneratedImages
    : generatedImages;
}

export const initVisibleTurnGeneratedImagesCollector = once(() => {
  areGeneratedImageListsEqual = createIsEqual() as (
    leftValue: unknown,
    rightValue: unknown,
  ) => boolean;
  initVisibleGeneratedImageOutputRuntime();
  initLocalConversationArtifactRuntime();
  initLocalConversationMarkdownResourceRuntime();
});
