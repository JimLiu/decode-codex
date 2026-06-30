// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Header message descriptors keyed by multi-agent action type and status.

import { messages } from "./message-descriptors";
import { pickStatusMessages } from "./status-message-utils";
import type { MultiAgentActionType, StatusMessageGroup } from "./types";

function createHeaderMessages(): Record<
  MultiAgentActionType,
  StatusMessageGroup
> {
  return {
    spawnAgent: pickStatusMessages({
      inProgress: messages.headerSpawnInProgress,
      completed: messages.headerSpawnCompleted,
      failed: messages.headerSpawnFailed,
    }),
    sendInput: pickStatusMessages({
      inProgress: messages.headerSendInputInProgress,
      completed: messages.headerSendInputCompleted,
      failed: messages.headerSendInputFailed,
    }),
    resumeAgent: pickStatusMessages({
      inProgress: messages.headerResumeInProgress,
      completed: messages.headerResumeCompleted,
      failed: messages.headerResumeFailed,
    }),
    closeAgent: pickStatusMessages({
      inProgress: messages.headerCloseInProgress,
      completed: messages.headerCloseCompleted,
      failed: messages.headerCloseFailed,
    }),
  };
}

export const headerMessages = createHeaderMessages();
