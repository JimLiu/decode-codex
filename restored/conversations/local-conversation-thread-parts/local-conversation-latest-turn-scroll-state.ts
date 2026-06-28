// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Latest-turn follow state reducer and identity helpers.
export type LatestTurnFollowMode =
  | "prework_follow"
  | "prework_watch"
  | "static"
  | "user_follow";

export type LatestTurnPhase = "final_answer" | "idle" | "prework";

export type LatestTurnScrollState = {
  followMode: LatestTurnFollowMode;
};

export type LatestTurnScrollStateEvent =
  | {
      type: "latest_turn_follow_content_changed";
      followContentOverflowPx: number;
      latestTurnPhase: LatestTurnPhase;
    }
  | {
      type: "latest_turn_phase_changed";
      latestTurnPhase: LatestTurnPhase;
      previousLatestTurnPhase: LatestTurnPhase;
    }
  | {
      type: "latest_turn_placed" | "latest_turn_removed";
    }
  | {
      type: "scroll_distance_changed";
      distanceFromBottomPx: number;
      latestTurnPhase: LatestTurnPhase;
    }
  | {
      type: "scroll_to_bottom";
      latestTurnPhase: LatestTurnPhase;
    };

export type ConversationTurnItem = {
  phase?: string | null;
  restoreMessage?: {
    id: string;
  } | null;
  type?: string | null;
};

export type ConversationTurn = {
  finalAssistantStartedAtMs?: number | null;
  firstTurnWorkItemStartedAtMs?: number | null;
  items: readonly ConversationTurnItem[];
  status: string;
};

export type LatestTurnVisibleTurnEntry = {
  turn: ConversationTurn;
  turnKey: string;
};

export function createLatestTurnScrollState({
  followMode = "static",
}: {
  followMode?: LatestTurnFollowMode;
} = {}): LatestTurnScrollState {
  return {
    followMode,
  };
}

export function reduceLatestTurnScrollState(
  scrollState: LatestTurnScrollState,
  event: LatestTurnScrollStateEvent,
): LatestTurnScrollState {
  switch (event.type) {
    case "latest_turn_follow_content_changed":
      return event.latestTurnPhase !== "prework" ||
        scrollState.followMode !== "prework_watch"
        ? scrollState
        : event.followContentOverflowPx > 0
          ? setLatestTurnFollowMode(scrollState, "prework_follow")
          : scrollState;
    case "latest_turn_phase_changed": {
      let nextScrollState = scrollState;
      if (
        event.previousLatestTurnPhase !== "prework" &&
        event.latestTurnPhase === "prework"
      ) {
        if (nextScrollState.followMode === "static") {
          nextScrollState = setLatestTurnFollowMode(
            nextScrollState,
            "prework_watch",
          );
        }
        if (nextScrollState.followMode === "user_follow") {
          nextScrollState = setLatestTurnFollowMode(
            nextScrollState,
            "prework_follow",
          );
        }
      }
      if (
        event.previousLatestTurnPhase === "prework" &&
        event.latestTurnPhase === "final_answer"
      ) {
        nextScrollState = setLatestTurnFollowMode(
          nextScrollState,
          nextScrollState.followMode === "prework_follow"
            ? "user_follow"
            : "static",
        );
      }
      if (
        event.previousLatestTurnPhase !== "idle" &&
        event.latestTurnPhase === "idle" &&
        nextScrollState.followMode !== "user_follow"
      ) {
        nextScrollState = setLatestTurnFollowMode(nextScrollState, "static");
      }
      return nextScrollState;
    }
    case "latest_turn_placed":
      return setLatestTurnFollowMode(scrollState, "static");
    case "latest_turn_removed":
      return setLatestTurnFollowMode(scrollState, "static");
    case "scroll_distance_changed":
      return event.distanceFromBottomPx <= 24
        ? scrollState
        : scrollState.followMode === "prework_follow"
          ? setLatestTurnFollowMode(scrollState, "prework_watch")
          : scrollState.followMode === "user_follow"
            ? setLatestTurnFollowMode(
                scrollState,
                event.latestTurnPhase === "prework"
                  ? "prework_watch"
                  : "static",
              )
            : scrollState;
    case "scroll_to_bottom":
      return setLatestTurnFollowMode(
        scrollState,
        event.latestTurnPhase === "prework" ? "prework_follow" : "user_follow",
      );
  }
}

export function isPassiveLatestTurnFollowMode(followMode: string) {
  return followMode === "static" || followMode === "prework_watch";
}

export function getLatestTurnPhase(turn: ConversationTurn): LatestTurnPhase {
  if (turn.status !== "inProgress") return "idle";

  let sawCommentaryAgentMessage = false;
  for (let turnItem of turn.items) {
    if (turnItem.type === "agentMessage") {
      if (turnItem.phase === "commentary") {
        sawCommentaryAgentMessage = true;
        continue;
      }
      return "final_answer";
    }
  }

  return sawCommentaryAgentMessage || turn.firstTurnWorkItemStartedAtMs != null
    ? "prework"
    : turn.finalAssistantStartedAtMs == null
      ? "idle"
      : "final_answer";
}

export function getLatestTurnIdentityKey(entry: LatestTurnVisibleTurnEntry) {
  let restoreMessageId = getLatestSteeringRestoreMessageId(entry);
  return restoreMessageId == null
    ? entry.turnKey
    : `${entry.turnKey}:${restoreMessageId}`;
}

function getLatestSteeringRestoreMessageId(entry: LatestTurnVisibleTurnEntry) {
  for (
    let itemIndex = entry.turn.items.length - 1;
    itemIndex >= 0;
    --itemIndex
  ) {
    let turnItem = entry.turn.items[itemIndex];
    if (turnItem?.type === "steeringUserMessage") {
      return turnItem.restoreMessage?.id ?? null;
    }
  }
  return null;
}

function setLatestTurnFollowMode(
  scrollState: LatestTurnScrollState,
  followMode: LatestTurnFollowMode,
): LatestTurnScrollState {
  return scrollState.followMode === followMode
    ? scrollState
    : {
        ...scrollState,
        followMode,
      };
}
