// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import {
  appScopeC as createScopedComputedAtom,
  appScopeM as createRouteScopedQuery,
  appScopeT as appScopeRoot,
  appScopeUnderscore as createScopedAtomFamily,
} from "../../boundaries/app-scope";
import {
  createTaskQueryOptions,
  createTaskTurnsQueryOptions,
} from "../../runtime/codex-api";
import { routeScope } from "../../runtime/persisted-signal";
import {
  buildTurnTree,
  collectSortedTaskTurns,
  getActiveTurnPath,
  getPreviousUserTurnIdForLastUserTurn,
  isUserTaskTurn,
  selectPreferredTurn,
} from "./remote-turn-tree";
import type { CloudComposerContext, TaskDetails, TaskTurn } from "./types";
export const remoteTaskQueryState = createRouteScopedQuery(
  routeScope,
  ({
    scope,
  }: {
    scope: {
      value: {
        routeKind?: string;
        taskId?: string;
      };
    };
  }) =>
    createTaskQueryOptions(
      scope.value.routeKind === "remote-thread" ? scope.value.taskId : null,
    ),
);
export const remoteTaskTurnsQueryState = createRouteScopedQuery(
  routeScope,
  ({
    scope,
  }: {
    scope: {
      value: {
        routeKind?: string;
        taskId?: string;
      };
    };
  }) =>
    createTaskTurnsQueryOptions(
      scope.value.routeKind === "remote-thread" ? scope.value.taskId : null,
    ),
);
export const appliedCodeLocallyByTurnIdState = createScopedAtomFamily(
  appScopeRoot,
  () => false,
);
export const remoteTaskTurnsState = createScopedComputedAtom(
  routeScope,
  ({ get }: { get: (...args: unknown[]) => any }) => {
    const { data } = get(remoteTaskQueryState) as {
      data?: TaskDetails | null;
    };
    return collectSortedTaskTurns({
      taskTurns: get(remoteTaskTurnsQueryState).data,
      fallbackUserTurn: data?.current_user_turn ?? null,
      fallbackAssistantTurn: data?.current_assistant_turn ?? null,
    });
  },
);
export const selectedRemoteAssistantTurnState = createScopedComputedAtom(
  routeScope,
  ({ get }: { get: (...args: unknown[]) => any }) => {
    const { data } = get(remoteTaskQueryState) as {
      data?: TaskDetails | null;
    };
    const currentAssistantTurn = data?.current_assistant_turn;
    if (currentAssistantTurn && !currentAssistantTurn.discarded) {
      return currentAssistantTurn;
    }
    const turns = get(remoteTaskTurnsState) as TaskTurn[];
    if (!currentAssistantTurn) {
      const lastActiveNode = getActiveTurnPath(
        buildTurnTree(turns),
        getPreviousUserTurnIdForLastUserTurn(turns),
      ).at(-1);
      return lastActiveNode
        ? selectPreferredTurn(
            lastActiveNode.node.assistantTurns,
            lastActiveNode.activeId,
          )
        : null;
    }
    return (
      selectPreferredTurn(
        turns.filter(
          (turn) =>
            !isUserTaskTurn(turn) &&
            turn.previous_turn_id === currentAssistantTurn.previous_turn_id,
        ),
        currentAssistantTurn.id,
      ) ?? currentAssistantTurn
    );
  },
);
export const selectedRemoteTurnHasAppliedCodeLocallyState =
  createScopedComputedAtom(
    routeScope,
    ({ get }: { get: (...args: unknown[]) => any }) => {
      const selectedTurn = get(
        selectedRemoteAssistantTurnState,
      ) as TaskTurn | null;
      return selectedTurn == null
        ? false
        : get(appliedCodeLocallyByTurnIdState, selectedTurn.id);
    },
  );
export function markRemoteTurnCodeAppliedLocally(
  scopeStore: {
    set: (...args: unknown[]) => void;
  },
  turnId: string,
): void {
  scopeStore.set(appliedCodeLocallyByTurnIdState, turnId, true);
}
export function markRemoteTurnCodeNotAppliedLocally(
  scopeStore: {
    set: (...args: unknown[]) => void;
  },
  turnId: string,
): void {
  scopeStore.set(appliedCodeLocallyByTurnIdState, turnId, false);
}
export const cloudComposerContextState = createScopedComputedAtom(
  routeScope,
  ({
    get,
  }: {
    get: (...args: unknown[]) => any;
  }): CloudComposerContext | void => {
    const { data } = get(remoteTaskQueryState) as {
      data?: TaskDetails | null;
    };
    const selectedTurn = get(
      selectedRemoteAssistantTurnState,
    ) as TaskTurn | null;
    if (data == null || selectedTurn == null) return;
    return {
      type: "cloud",
      hasAppliedCodeLocally: get(selectedRemoteTurnHasAppliedCodeLocallyState),
      taskDetails: data,
      selectedTurnId: selectedTurn.id,
      selectedTurn,
    };
  },
);
