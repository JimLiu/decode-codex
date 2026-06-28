// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Turn-entry and request-index helpers for visible local conversation turns.

const berryDisplayTurnIdPattern = /^(.*)-berry-display-(\d+)$/;

export interface LocalConversationTurnLike {
  turnId?: string | null;
}

export interface LocalConversationPhysicalTurnEntry<
  Turn extends LocalConversationTurnLike,
> {
  physicalTurnIds: string[];
  turn: Turn;
  turnId: string | null | undefined;
  turnIndex: number;
}

export interface BerryDisplayTurnId {
  controlTurnId: string;
  displayIndex: number;
}

export interface LocalConversationRequestLike {
  method: string;
  params: {
    turnId: string;
  };
}

export function createPhysicalTurnEntries<
  Turn extends LocalConversationTurnLike,
>(turns: readonly Turn[]): LocalConversationPhysicalTurnEntry<Turn>[] {
  return turns.map((turn, turnIndex) => {
    let turnId = turn.turnId;
    return {
      physicalTurnIds: turnId == null ? [] : [turnId],
      turn,
      turnId,
      turnIndex,
    };
  });
}

export function parseBerryDisplayTurnId(
  turnId: string | null | undefined,
): BerryDisplayTurnId | null {
  if (turnId == null) return null;
  let match = berryDisplayTurnIdPattern.exec(turnId),
    controlTurnId = match?.[1],
    displayIndexValue = match?.[2];
  if (controlTurnId == null || displayIndexValue == null) return null;
  let displayIndex = Number(displayIndexValue);
  return Number.isSafeInteger(displayIndex)
    ? {
        controlTurnId,
        displayIndex,
      }
    : null;
}

export function groupConversationRequestsByTurnId<
  Request extends LocalConversationRequestLike,
>(requests: readonly Request[]): Map<string, Request[]> {
  let requestsByTurnId = new Map<string, Request[]>();
  for (let request of requests)
    switch (request.method) {
      case "item/commandExecution/requestApproval":
      case "item/fileChange/requestApproval":
      case "item/permissions/requestApproval":
      case "item/tool/requestOptionPicker":
      case "item/tool/requestUserInput":
      case "item/tool/requestSetupCodexContextPicker": {
        let turnRequests = requestsByTurnId.get(request.params.turnId);
        if (turnRequests != null) {
          turnRequests.push(request);
          continue;
        }
        requestsByTurnId.set(request.params.turnId, [request]);
        continue;
      }
      case "attestation/generate":
      case "account/chatgptAuthTokens/refresh":
      case "applyPatchApproval":
      case "currentTime/read":
      case "execCommandApproval":
      case "item/plan/requestImplementation":
      case "item/tool/call":
      case "mcpServer/elicitation/request":
        continue;
    }
  return requestsByTurnId;
}

export function collectConversationRequestsForTurnIds<Request>(
  turnIds: readonly string[],
  requestsByTurnId: ReadonlyMap<string, readonly Request[]>,
  emptyRequests: readonly Request[],
): readonly Request[] {
  let requests: Request[] = [];
  for (let turnId of turnIds)
    requests.push(...(requestsByTurnId.get(turnId) ?? emptyRequests));
  return requests.length > 0 ? requests : emptyRequests;
}
