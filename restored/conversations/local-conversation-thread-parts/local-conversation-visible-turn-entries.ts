// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Builds the visible turn entry model for the local conversation thread.
import { once } from "../../runtime/commonjs-interop";
import { isRenderableLocalConversationTurn } from "./conversation-turn-rendering";
import { getConversationTurnsNotInParent } from "./parent-conversation-turns";
import {
  collectConversationRequestsForTurnIds,
  createPhysicalTurnEntries,
  type LocalConversationPhysicalTurnEntry,
  parseBerryDisplayTurnId,
  groupConversationRequestsByTurnId,
} from "./turn-request-index";
import { getLocalConversationTurnSearchKey } from "./turn-search-key";

type ConversationTurn = {
  diff?: unknown;
  durationMs?: number | null;
  error?: unknown;
  finalAssistantStartedAtMs?: number | null;
  firstTurnWorkItemStartedAtMs?: number | null;
  hookRuns?: unknown[];
  interruptedCommandExecutionItemIds?: string[];
  items: Array<{ type: string; [key: string]: unknown }>;
  params?: unknown;
  status?: "completed" | "failed" | "inProgress" | string;
  turnId?: string | null;
  turnStartedAtMs?: number | null;
  [key: string]: unknown;
};

type ConversationRequest = {
  method: string;
  params: {
    turnId: string;
    [key: string]: unknown;
  };
};

type VisibleTurnEntry = {
  preserveServerUserMessages: boolean;
  requests: readonly ConversationRequest[];
  turn: ConversationTurn;
  turnId: string | null | undefined;
  turnSearchKey: string;
};

type VisibleTurnEntriesResult = {
  conversationTurns: readonly ConversationTurn[];
  hasInheritedParentTurns: boolean;
  hasRenderableTurns: boolean;
  hasUserMessage: boolean;
  latestVisibleTurnId: string | null | undefined;
  visibleTurnEntries: VisibleTurnEntry[];
};

type BuildVisibleTurnEntriesOptions = {
  areTurnItemsEqual: (turnItem: unknown, parentTurnItem: unknown) => boolean;
  conversationRequests: readonly ConversationRequest[];
  conversationTurns: readonly ConversationTurn[];
  emptyConversationRequests: readonly ConversationRequest[];
  emptyVisibleTurnEntries: VisibleTurnEntriesResult;
  hasConversation: boolean;
  isBackgroundSubagentsEnabled: boolean;
  mergeBerryDisplayTurnsForPIA?: boolean;
  parentConversationTurns: readonly ConversationTurn[];
  preserveServerUserMessages?: boolean;
  subagentParentThreadId: string | null | undefined;
};

type BerryDisplayTurnGroup = {
  controlTurnId: string;
  displayTurns: Array<
    LocalConversationPhysicalTurnEntry<ConversationTurn> & {
      displayIndex: number;
    }
  >;
};

export function buildLocalConversationVisibleTurnEntries({
  areTurnItemsEqual,
  conversationRequests,
  mergeBerryDisplayTurnsForPIA = false,
  preserveServerUserMessages = false,
  conversationTurns,
  emptyConversationRequests,
  emptyVisibleTurnEntries,
  hasConversation,
  isBackgroundSubagentsEnabled,
  parentConversationTurns,
  subagentParentThreadId,
}: BuildVisibleTurnEntriesOptions): VisibleTurnEntriesResult {
  if (conversationTurns.length === 0 && conversationRequests.length === 0)
    return emptyVisibleTurnEntries;

  let requestsByTurnId =
      groupConversationRequestsByTurnId(conversationRequests),
    visibleConversationTurns =
      hasConversation && subagentParentThreadId != null
        ? getConversationTurnsNotInParent({
            areTurnItemsEqual,
            conversation: {
              turns: conversationTurns,
            },
            parentConversation: {
              turns: parentConversationTurns,
            },
          })
        : conversationTurns,
    visibleTurnIds = new Set(
      visibleConversationTurns.flatMap((turn) =>
        turn.turnId == null ? [] : [turn.turnId],
      ),
    ),
    visibleTurnsSet = new Set(visibleConversationTurns),
    physicalTurnEntries = createPhysicalTurnEntries(conversationTurns);

  mergeBerryDisplayTurnsForPIA &&
    (physicalTurnEntries =
      mergeBerryDisplayPhysicalTurnEntries(conversationTurns));

  let visibleTurnEntries: VisibleTurnEntry[] = [],
    hasInheritedParentTurns =
      visibleConversationTurns.length < conversationTurns.length,
    hasUserMessage = false,
    latestVisibleTurnId: string | null | undefined = null;

  for (let conversationTurn of conversationTurns)
    !hasUserMessage &&
      conversationTurn.items.some(
        (item) =>
          item.type === "userMessage" || item.type === "steeringUserMessage",
      ) &&
      (hasUserMessage = true);

  for (let physicalTurnEntry of physicalTurnEntries) {
    let { turn, turnId } = physicalTurnEntry,
      requests =
        physicalTurnEntry.physicalTurnIds.length > 0
          ? collectConversationRequestsForTurnIds(
              physicalTurnEntry.physicalTurnIds,
              requestsByTurnId,
              emptyConversationRequests,
            )
          : emptyConversationRequests;

    isRenderableLocalConversationTurn(turn, requests, {
      isBackgroundSubagentsEnabled,
    }) &&
      ((turnId != null &&
        !physicalTurnEntry.physicalTurnIds.some((item) =>
          visibleTurnIds.has(item),
        )) ||
        (turnId == null && !visibleTurnsSet.has(turn)) ||
        (visibleTurnEntries.push({
          preserveServerUserMessages,
          requests,
          turn,
          turnId,
          turnSearchKey: getLocalConversationTurnSearchKey(
            turnId,
            physicalTurnEntry.turnIndex,
          ),
        }),
        (latestVisibleTurnId = turnId)));
  }

  return {
    conversationTurns,
    hasInheritedParentTurns,
    hasRenderableTurns: visibleTurnEntries.length > 0,
    hasUserMessage,
    latestVisibleTurnId,
    visibleTurnEntries,
  };
}

function mergeBerryDisplayPhysicalTurnEntries(
  conversationTurns: readonly ConversationTurn[],
): LocalConversationPhysicalTurnEntry<ConversationTurn>[] {
  let physicalTurnById = new Map<
      string,
      LocalConversationPhysicalTurnEntry<ConversationTurn>
    >(),
    displayGroupByControlTurnId = new Map<string, BerryDisplayTurnGroup>(),
    controlTurnIdByDisplayTurnId = new Map<string, string>();

  for (let [turnIndex, turn] of conversationTurns.entries()) {
    let turnId = turn.turnId;
    if (turnId == null) continue;
    let physicalTurnEntry = {
      turn,
      turnIndex,
      physicalTurnIds: [turnId],
      turnId,
    };
    physicalTurnById.set(turnId, physicalTurnEntry);
    let berryDisplayTurnId = parseBerryDisplayTurnId(turnId);
    if (berryDisplayTurnId == null) continue;
    let displayGroup = displayGroupByControlTurnId.get(
      berryDisplayTurnId.controlTurnId,
    );
    displayGroup ??
      ((displayGroup = {
        controlTurnId: berryDisplayTurnId.controlTurnId,
        displayTurns: [],
      }),
      displayGroupByControlTurnId.set(
        berryDisplayTurnId.controlTurnId,
        displayGroup,
      ));
    displayGroup.displayTurns.push({
      displayIndex: berryDisplayTurnId.displayIndex,
      ...physicalTurnEntry,
    });
    controlTurnIdByDisplayTurnId.set(turnId, berryDisplayTurnId.controlTurnId);
  }

  let emittedControlTurnIds = new Set<string>(),
    physicalTurnEntries: LocalConversationPhysicalTurnEntry<ConversationTurn>[] =
      [];
  for (let [turnIndex, turn] of conversationTurns.entries()) {
    let turnId = turn.turnId,
      controlTurnId =
        turnId == null
          ? null
          : (controlTurnIdByDisplayTurnId.get(turnId) ?? turnId),
      displayGroup =
        controlTurnId == null
          ? null
          : displayGroupByControlTurnId.get(controlTurnId);
    if (displayGroup != null) {
      if (emittedControlTurnIds.has(displayGroup.controlTurnId)) continue;
      emittedControlTurnIds.add(displayGroup.controlTurnId);
      physicalTurnEntries.push(
        createBerryDisplayTurnEntry(
          displayGroup,
          physicalTurnById.get(displayGroup.controlTurnId) ?? null,
        ),
      );
      continue;
    }
    physicalTurnEntries.push({
      physicalTurnIds: turnId == null ? [] : [turnId],
      turn,
      turnId,
      turnIndex,
    });
  }

  return physicalTurnEntries;
}

function createBerryDisplayTurnEntry(
  displayTurnGroup: BerryDisplayTurnGroup,
  controlTurnEntry: LocalConversationPhysicalTurnEntry<ConversationTurn> | null,
): LocalConversationPhysicalTurnEntry<ConversationTurn> {
  let sortedDisplayTurns = [...displayTurnGroup.displayTurns].sort(
      (leftDisplayTurn, rightDisplayTurn) =>
        leftDisplayTurn.displayIndex - rightDisplayTurn.displayIndex,
    ),
    mergedTurnEntries = [
      ...(controlTurnEntry == null ? [] : [controlTurnEntry]),
      ...sortedDisplayTurns,
    ].sort(
      (leftTurnEntry, rightTurnEntry) =>
        leftTurnEntry.turnIndex - rightTurnEntry.turnIndex,
    ),
    mergedTurns = mergedTurnEntries.map(({ turn }) => turn),
    displayTurns = sortedDisplayTurns.map(({ turn }) => turn),
    baseTurn = controlTurnEntry?.turn ?? displayTurns[0];
  if (baseTurn == null)
    throw Error("Berry display turn group must contain a turn");

  return {
    physicalTurnIds: mergedTurns.flatMap((turn) =>
      turn.turnId == null ? [] : [turn.turnId],
    ),
    turn: {
      params: baseTurn.params,
      turnId: displayTurnGroup.controlTurnId,
      turnStartedAtMs:
        controlTurnEntry?.turn.turnStartedAtMs ??
        getFirstDefinedTurnField(mergedTurns, "turnStartedAtMs"),
      durationMs:
        controlTurnEntry?.turn.durationMs ??
        getLastDefinedTurnField(mergedTurns, "durationMs"),
      firstTurnWorkItemStartedAtMs: getFirstDefinedTurnField(
        mergedTurns,
        "firstTurnWorkItemStartedAtMs",
      ),
      finalAssistantStartedAtMs: getLastDefinedTurnField(
        mergedTurns,
        "finalAssistantStartedAtMs",
      ),
      status: getMergedTurnStatus(mergedTurns),
      error: mergedTurns.find((turn) => turn.error != null)?.error ?? null,
      diff: getLastDefinedTurnField(mergedTurns, "diff"),
      interruptedCommandExecutionItemIds: mergedTurns.flatMap(
        (turn) => turn.interruptedCommandExecutionItemIds ?? [],
      ),
      hookRuns: mergedTurns.flatMap((turn) => turn.hookRuns ?? []),
      items: [
        ...(controlTurnEntry?.turn.items ?? []),
        ...displayTurns.flatMap((turn) => turn.items),
      ],
    },
    turnId: displayTurnGroup.controlTurnId,
    turnIndex: mergedTurnEntries[0]?.turnIndex ?? 0,
  };
}

function getMergedTurnStatus(turns: readonly ConversationTurn[]) {
  let failedTurn = turns.find((turn) => turn.status === "failed");
  if (failedTurn != null) return failedTurn.status;
  let inProgressTurn = turns.find((turn) => turn.status === "inProgress");
  return inProgressTurn == null
    ? (turns.at(-1)?.status ?? "completed")
    : inProgressTurn.status;
}

function getFirstDefinedTurnField(
  turns: readonly ConversationTurn[],
  fieldName: string,
) {
  return turns.find((turn) => turn[fieldName] != null)?.[fieldName] ?? null;
}

function getLastDefinedTurnField(
  turns: readonly ConversationTurn[],
  fieldName: string,
) {
  return (
    findLast(turns, (turn) => turn[fieldName] != null)?.[fieldName] ?? null
  );
}

function findLast<T>(
  items: readonly T[],
  predicate: (item: T, index: number) => boolean,
): T | undefined {
  for (let index = items.length - 1; index >= 0; index--)
    if (predicate(items[index], index)) return items[index];
  return undefined;
}

export const initLocalConversationVisibleTurnEntriesBuilder = once(() => {});
