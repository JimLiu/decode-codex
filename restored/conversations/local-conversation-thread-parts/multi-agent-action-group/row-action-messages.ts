// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Per-row action message descriptors keyed by multi-agent action type and status.

import { messages } from "./message-descriptors";
import { pickStatusMessages } from "./status-message-utils";
import type { MultiAgentActionType, StatusMessageGroup } from "./types";

function createRowActionMessages(): Record<
  MultiAgentActionType,
  StatusMessageGroup
> {
  return {
    spawnAgent: pickStatusMessages({
      inProgress: messages.rowSpawnInProgress,
      completed: messages.rowSpawnCompleted,
      failed: messages.rowSpawnFailed,
    }),
    sendInput: pickStatusMessages({
      inProgress: messages.rowSendInputInProgress,
      completed: messages.rowSendInputCompleted,
      failed: messages.rowSendInputFailed,
    }),
    resumeAgent: pickStatusMessages({
      inProgress: messages.rowResumeInProgress,
      completed: messages.rowResumeCompleted,
      failed: messages.rowResumeFailed,
    }),
    closeAgent: pickStatusMessages({
      inProgress: messages.rowCloseInProgress,
      completed: messages.rowCloseCompleted,
      failed: messages.rowCloseFailed,
    }),
  };
}

export const rowActionMessages = createRowActionMessages();
