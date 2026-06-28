// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation turn-row entry assembly and structural reuse checks.
import { collectGeneratedImagesForVisibleTurns } from "./visible-turn-generated-images";

type TranscriptBlock = {
  key?: unknown;
  type?: unknown;
} | null;

type GeneratedImageOutput = {
  src?: string | null;
  type?: string;
};

type ConversationTurnForGeneratedImages = {
  items: readonly {
    src?: string | null;
    type: string;
  }[];
  params?: { model?: unknown } | null;
  status?: string;
  turnStartedAtMs?: number | null;
};

export type VisibleTurnEntryForTurnList = {
  preserveServerUserMessages?: boolean;
  requests: readonly unknown[];
  turn: ConversationTurnForGeneratedImages;
  turnId?: string | null;
  turnSearchKey: string;
};

export type LocalConversationTurnListEntry = {
  completedThreadGoal?: unknown;
  conversationId: string;
  cwd: string | null;
  generatedImages?: GeneratedImageOutput[];
  hostId: string | null;
  includeTranscriptTurnExtras?: unknown;
  isBackgroundSubagentsEnabled: boolean;
  isCollapsed?: boolean;
  isMostRecentTurn: boolean;
  isProjectlessConversation: boolean;
  isReadOnly: boolean;
  modelProvider: unknown;
  onEditLastTurnMessage?: unknown;
  onForkTurnMessage?: unknown;
  onSetCollapsedForTurn?: unknown;
  parentThreadAttachmentSourceConversationId?: string;
  preserveServerUserMessages?: boolean;
  projectlessOutputDirectory: string | null;
  renderMcpApps?: "auto-expand" | "default";
  requests: readonly unknown[];
  resolvedApps: unknown;
  showInProgressFixedContent: boolean;
  totalTurnCount: number;
  transcriptBlock?: TranscriptBlock;
  turn: ConversationTurnForGeneratedImages;
  turnId?: string | null;
  turnKey: string;
  turnNumber: number;
  turnSearchKey: string;
};

export function buildLocalConversationTurnListEntries({
  collapsedTurnsById,
  completedThreadGoal,
  completedThreadGoalTurnKey,
  conversationId,
  cwd,
  hasInheritedParentTurns,
  hostId,
  isBackgroundSubagentsEnabled,
  isProjectlessConversation,
  isReadOnly,
  modelProvider,
  projectlessOutputDirectory = null,
  onEditLastTurnMessage,
  onForkTurnMessage,
  onSetCollapsedForTurn,
  previousEntries,
  renderMcpApps,
  resolvedApps,
  showInProgressFixedContent,
  visibleSubagentParentThreadId,
  visibleTurnEntries,
}: {
  collapsedTurnsById: Record<string, boolean | undefined>;
  completedThreadGoal: unknown;
  completedThreadGoalTurnKey: string | null;
  conversationId: string;
  cwd: string | null;
  hasInheritedParentTurns: boolean;
  hostId: string | null;
  isBackgroundSubagentsEnabled: boolean;
  isProjectlessConversation: boolean;
  isReadOnly: boolean;
  modelProvider: unknown;
  onEditLastTurnMessage?: unknown;
  onForkTurnMessage?: unknown;
  onSetCollapsedForTurn?: unknown;
  previousEntries: readonly LocalConversationTurnListEntry[];
  projectlessOutputDirectory?: string | null;
  renderMcpApps: boolean;
  resolvedApps: unknown;
  showInProgressFixedContent: boolean;
  visibleSubagentParentThreadId: string | null;
  visibleTurnEntries: readonly VisibleTurnEntryForTurnList[];
}): readonly LocalConversationTurnListEntry[] {
  let previousEntriesByTurnKey = new Map(
      previousEntries.map((item) => [item.turnKey, item]),
    ),
    generatedImagesForVisibleEntries = collectGeneratedImagesForVisibleTurns({
      isBackgroundSubagentsEnabled,
      previousEntries,
      projectlessOutputDirectory,
      visibleTurnEntries,
    }),
    didEntriesChange = false,
    nextEntries: LocalConversationTurnListEntry[] = [];

  visibleTurnEntries.forEach((item, index) => {
    let turnId = item.turnId,
      renderMcpAppsMode: "auto-expand" | "default" | undefined;
    if (renderMcpApps) {
      renderMcpAppsMode =
        index >= visibleTurnEntries.length - 3 ? "auto-expand" : "default";
    }

    let candidateEntries: LocalConversationTurnListEntry[] = [
      {
        conversationId,
        cwd,
        hostId,
        isCollapsed: turnId == null ? undefined : collapsedTurnsById[turnId],
        isMostRecentTurn: index === visibleTurnEntries.length - 1,
        isReadOnly,
        totalTurnCount: visibleTurnEntries.length,
        turnNumber: index + 1,
        isProjectlessConversation,
        modelProvider,
        projectlessOutputDirectory,
        onEditLastTurnMessage,
        onForkTurnMessage,
        completedThreadGoal:
          completedThreadGoalTurnKey === item.turnSearchKey
            ? completedThreadGoal
            : null,
        generatedImages: generatedImagesForVisibleEntries,
        onSetCollapsedForTurn:
          turnId == null ? undefined : onSetCollapsedForTurn,
        parentThreadAttachmentSourceConversationId:
          index === 0 &&
          hasInheritedParentTurns &&
          visibleSubagentParentThreadId != null
            ? visibleSubagentParentThreadId
            : undefined,
        preserveServerUserMessages: item.preserveServerUserMessages,
        renderMcpApps: renderMcpAppsMode,
        requests: item.requests,
        resolvedApps,
        showInProgressFixedContent:
          showInProgressFixedContent && index === visibleTurnEntries.length - 1,
        turn: item.turn,
        turnId,
        turnKey: item.turnSearchKey,
        turnSearchKey: item.turnSearchKey,
        isBackgroundSubagentsEnabled,
      },
    ];

    for (let candidateEntry of candidateEntries) {
      let previousEntry = previousEntriesByTurnKey.get(candidateEntry.turnKey);
      if (
        previousEntry != null &&
        areTurnListEntriesEquivalent(previousEntry, candidateEntry)
      ) {
        nextEntries.push(previousEntry);
        continue;
      }
      didEntriesChange = true;
      nextEntries.push(candidateEntry);
    }
  });

  if (!didEntriesChange && previousEntries.length !== nextEntries.length) {
    didEntriesChange = true;
  }
  if (!didEntriesChange) {
    for (let [entryIndex, candidateEntry] of nextEntries.entries()) {
      if (previousEntries[entryIndex] !== candidateEntry) {
        didEntriesChange = true;
        break;
      }
    }
  }

  return didEntriesChange ? nextEntries : previousEntries;
}

function areTurnListEntriesEquivalent(
  previousEntry: LocalConversationTurnListEntry,
  nextEntry: LocalConversationTurnListEntry,
) {
  return (
    previousEntry.conversationId === nextEntry.conversationId &&
    previousEntry.cwd === nextEntry.cwd &&
    previousEntry.hostId === nextEntry.hostId &&
    previousEntry.isCollapsed === nextEntry.isCollapsed &&
    previousEntry.isMostRecentTurn === nextEntry.isMostRecentTurn &&
    previousEntry.isReadOnly === nextEntry.isReadOnly &&
    previousEntry.totalTurnCount === nextEntry.totalTurnCount &&
    previousEntry.turnNumber === nextEntry.turnNumber &&
    previousEntry.isProjectlessConversation ===
      nextEntry.isProjectlessConversation &&
    previousEntry.modelProvider === nextEntry.modelProvider &&
    previousEntry.onEditLastTurnMessage === nextEntry.onEditLastTurnMessage &&
    previousEntry.onForkTurnMessage === nextEntry.onForkTurnMessage &&
    previousEntry.completedThreadGoal === nextEntry.completedThreadGoal &&
    previousEntry.generatedImages === nextEntry.generatedImages &&
    previousEntry.onSetCollapsedForTurn === nextEntry.onSetCollapsedForTurn &&
    previousEntry.parentThreadAttachmentSourceConversationId ===
      nextEntry.parentThreadAttachmentSourceConversationId &&
    previousEntry.preserveServerUserMessages ===
      nextEntry.preserveServerUserMessages &&
    previousEntry.renderMcpApps === nextEntry.renderMcpApps &&
    previousEntry.requests === nextEntry.requests &&
    previousEntry.resolvedApps === nextEntry.resolvedApps &&
    previousEntry.showInProgressFixedContent ===
      nextEntry.showInProgressFixedContent &&
    previousEntry.turn === nextEntry.turn &&
    previousEntry.turnId === nextEntry.turnId &&
    previousEntry.turnKey === nextEntry.turnKey &&
    previousEntry.turnSearchKey === nextEntry.turnSearchKey &&
    areTranscriptBlocksEquivalent(
      previousEntry.transcriptBlock,
      nextEntry.transcriptBlock,
    ) &&
    previousEntry.includeTranscriptTurnExtras ===
      nextEntry.includeTranscriptTurnExtras &&
    previousEntry.isBackgroundSubagentsEnabled ===
      nextEntry.isBackgroundSubagentsEnabled
  );
}

function areTranscriptBlocksEquivalent(
  previousTranscriptBlock: TranscriptBlock,
  nextTranscriptBlock: TranscriptBlock,
) {
  return previousTranscriptBlock == null || nextTranscriptBlock == null
    ? previousTranscriptBlock === nextTranscriptBlock
    : previousTranscriptBlock.type === nextTranscriptBlock.type &&
        previousTranscriptBlock.key === nextTranscriptBlock.key;
}
