// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import { useEffect } from "react";
import {
  useScope,
  useSignalValue,
  settingsAtoms,
  appScopeAtom,
  errorToString,
  LOCAL_HOST_ID,
} from "../boundaries/onboarding-commons-externals.facade";
import { useQueuedFollowUpsStore } from "../utils/queued-follow-ups-store";

/** In-flight lock: prevents concurrent sends for the same conversation. */
const inFlightSends = new Set<string>();

function acquireConversationLock(conversationId: string): boolean {
  if (inFlightSends.has(conversationId)) return false;
  inFlightSends.add(conversationId);
  return true;
}

function releaseConversationLock(conversationId: string): void {
  inFlightSends.delete(conversationId);
}

/** Returns true when pasted text attachments exist and cannot be used on the given host. */
function isPastedTextUnavailableForHost(
  context: { pastedTextAttachments?: unknown[] } | undefined,
  executionHostId: string,
): boolean {
  return (
    (context?.pastedTextAttachments?.length ?? 0) > 0 &&
    executionHostId !== (LOCAL_HOST_ID as string)
  );
}

/** Queue follow-up mode: "queue" buffers messages, "steer" sends immediately. */
export type FollowUpQueueMode = "queue" | "steer";

/**
 * Reads the follow-up queue mode setting. Migrates a legacy "interrupt" value to
 * "steer" on first read. Returns the current mode and whether queuing is active.
 */
export function useIsQueueingEnabled(): {
  mode: FollowUpQueueMode;
  isQueueingEnabled: boolean;
} {
  const scope: any = useScope(appScopeAtom);
  const rawMode: string | null | undefined = useSignalValue(
    settingsAtoms.followUpQueueMode,
  );
  const mode: FollowUpQueueMode =
    rawMode === "interrupt"
      ? "steer"
      : ((rawMode as FollowUpQueueMode) ?? "queue");

  useEffect(() => {
    if (rawMode === "interrupt") {
      scope.set(settingsAtoms.followUpQueueMode, "steer");
    }
  }, [rawMode, scope]);

  return { mode, isQueueingEnabled: mode === "queue" };
}

/** Returns the queued follow-up messages and actions for the given conversation. */
export function useQueuedFollowUps(
  conversationId: string | null | undefined,
): ReturnType<typeof useQueuedFollowUpsStore> {
  return useQueuedFollowUpsStore(conversationId ?? undefined);
}

interface QueuedMessageEntry {
  id: string;
  context?: { pastedTextAttachments?: unknown[] };
  cwd?: string | null;
  pausedReason?: string;
  [key: string]: unknown;
}

export interface SendQueuedSteerMessageArgs {
  conversationId: string | null | undefined;
  executionHostId: string;
  messageId: string;
  queuedMessages: QueuedMessageEntry[];
  removeQueuedMessage: (id: string) => void;
  updateQueuedMessage: (
    id: string,
    updater: (prev: QueuedMessageEntry) => QueuedMessageEntry,
  ) => void;
  onSendResult?: (
    status: "attempted" | "succeeded" | "failed",
    result?: unknown,
  ) => void;
  onSubmitLocal: (
    context: unknown,
    cwd: string,
    queuedFollowUp?: unknown,
    submitOptions?: unknown,
    queuedMessage?: unknown,
  ) => Promise<unknown>;
}

/**
 * Sends a single queued steer message, guarding against concurrent sends for the
 * same conversation. Updates the entry's pausedReason on failure.
 */
export function sendQueuedSteerMessage(args: SendQueuedSteerMessageArgs): void {
  const {
    conversationId,
    executionHostId,
    messageId,
    queuedMessages,
    removeQueuedMessage,
    updateQueuedMessage,
    onSendResult,
    onSubmitLocal,
  } = args;

  if (conversationId == null) return;

  const message = queuedMessages.find((entry) => entry.id === messageId);
  if (message == null) return;

  if (isPastedTextUnavailableForHost(message.context, executionHostId)) {
    updateQueuedMessage(messageId, (prev) => ({
      ...prev,
      pausedReason: "pasted-text-unavailable",
    }));
    return;
  }

  if (!acquireConversationLock(conversationId)) return;

  void (async () => {
    try {
      onSendResult?.("attempted");
      const result = await onSubmitLocal(
        message.context,
        message.cwd ?? "",
        undefined,
        undefined,
        message,
      );
      onSendResult?.("succeeded", result);
      removeQueuedMessage(messageId);
    } catch (sendError) {
      onSendResult?.("failed");
      updateQueuedMessage(messageId, (prev) => ({
        ...prev,
        pausedReason: errorToString(sendError) as string,
      }));
    } finally {
      releaseConversationLock(conversationId);
    }
  })();
}
