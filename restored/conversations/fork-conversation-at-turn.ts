// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Forks a conversation so the new thread ends at a chosen turn: fork from the
// latest state, then roll the fork back by however many turns come after the
// target, re-hydrating the local conversation state from each rollback response.

import {
  addForkedFromConversationSyntheticItem,
  applyConversationStateSlice,
  buildConversationStateFromThread,
  getConversationDisplayTitle,
  registerThreadSnapshot,
  toConversationId,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ConversationTurn {
  turnId: string;
}

export interface ConversationState {
  cwd?: string | null;
  latestModel?: string;
  latestReasoningEffort?: string | null;
  turnsPagination?: unknown;
  requests?: unknown[];
  resumeState?: string;
  sessionId?: string;
  rolloutPath?: string | null;
  source?: string;
  forkedFromId?: string | null;
  gitInfo?: unknown;
  threadRuntimeStatus?: unknown;
  hasUnreadTurn?: boolean;
  updatedAt?: number;
}

export interface ThreadSnapshot {
  cwd?: string | null;
  sessionId: string;
  path?: string | null;
  source: string;
  forkedFromId?: string | null;
  gitInfo?: unknown;
  status?: unknown;
  updatedAt: string | number;
}

export interface ThreadRollbackResponse {
  thread: ThreadSnapshot;
}

export interface ForkConversationFromLatestOptions {
  sourceConversationId: string;
  cwd?: string;
  workspaceRoots?: string[];
  collaborationMode?: unknown;
  threadSource?: string;
  addForkedSyntheticItem: boolean;
}

export interface ConversationStore {
  getConversation(conversationId: string): ConversationState | undefined;
  getCompleteConversationTurns(
    conversationId: string,
  ): Promise<ConversationTurn[]>;
  forkConversationFromLatest(
    options: ForkConversationFromLatestOptions,
  ): Promise<string>;
  sendRequest<T = unknown>(
    method: string,
    params: Record<string, unknown>,
  ): Promise<T>;
  updateConversationState(
    conversationId: string,
    updater: (draft: ConversationState) => void,
  ): void;
}

export interface ForkConversationAtTurnParams {
  sourceConversationId: string;
  targetTurnId: string;
  cwd?: string;
  workspaceRoots?: string[];
  collaborationMode?: unknown;
  threadSource?: string;
}

export function applyThreadRollbackToConversation(
  store: ConversationStore,
  {
    conversationId,
    conversationState,
    rollbackResponse,
  }: {
    conversationId: string;
    conversationState: ConversationState;
    rollbackResponse: ThreadRollbackResponse;
  },
): void {
  const rebuiltState = buildConversationStateFromThread(rollbackResponse, {
    workspaceRoots: conversationState.cwd ? [conversationState.cwd] : [],
    fallbackCwd: conversationState.cwd ?? null,
    model: conversationState.latestModel,
    reasoningEffort: conversationState.latestReasoningEffort,
  });
  registerThreadSnapshot(rollbackResponse.thread);
  store.updateConversationState(conversationId, (draft) => {
    applyConversationStateSlice(draft, rebuiltState, true);
    draft.turnsPagination = {
      olderCursor: null,
      oldestLoadedTurnId: null,
      isLoadingOlder: false,
      hasLoadedOldest: true,
    };
    draft.requests = [];
    draft.resumeState = "resumed";
    draft.sessionId = rollbackResponse.thread.sessionId;
    draft.rolloutPath = rollbackResponse.thread.path ?? draft.rolloutPath;
    draft.cwd = rollbackResponse.thread.cwd || draft.cwd;
    draft.source = rollbackResponse.thread.source;
    draft.forkedFromId =
      rollbackResponse.thread.forkedFromId == null
        ? null
        : toConversationId(rollbackResponse.thread.forkedFromId);
    draft.gitInfo = rollbackResponse.thread.gitInfo;
    draft.threadRuntimeStatus = rollbackResponse.thread.status;
    draft.hasUnreadTurn = false;
    const updatedAtMs = Number(rollbackResponse.thread.updatedAt) * 1000;
    if (Number.isFinite(updatedAtMs)) draft.updatedAt = updatedAtMs;
  });
}

export async function forkConversationAtTurn(
  store: ConversationStore,
  {
    sourceConversationId,
    targetTurnId,
    cwd,
    workspaceRoots,
    collaborationMode,
    threadSource,
  }: ForkConversationAtTurnParams,
): Promise<string> {
  const sourceConversation = store.getConversation(sourceConversationId);
  if (!sourceConversation) throw new Error("Source conversation not found.");

  const turns = await store.getCompleteConversationTurns(sourceConversationId);
  const targetTurnIndex = turns.findIndex(
    (turn) => turn.turnId === targetTurnId,
  );
  if (targetTurnIndex === -1) throw new Error("Target turn not found.");
  const turnsToRollBack = turns.length - targetTurnIndex - 1;

  const forkedConversationId = await store.forkConversationFromLatest({
    sourceConversationId,
    cwd,
    workspaceRoots,
    collaborationMode,
    threadSource,
    addForkedSyntheticItem: false,
  });
  const forkedConversation = store.getConversation(forkedConversationId);
  if (!forkedConversation)
    throw new Error("Forked conversation state not found.");

  if (turnsToRollBack > 0) {
    applyThreadRollbackToConversation(store, {
      conversationId: forkedConversationId,
      conversationState: forkedConversation,
      rollbackResponse: await store.sendRequest<ThreadRollbackResponse>(
        "thread/rollback",
        {
          threadId: forkedConversationId,
          numTurns: turnsToRollBack,
        },
      ),
    });
  }

  addForkedFromConversationSyntheticItem(
    store,
    forkedConversationId,
    sourceConversationId,
    getConversationDisplayTitle(sourceConversation),
  );
  return forkedConversationId;
}
