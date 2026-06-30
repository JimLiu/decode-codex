// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Send-input action labels keyed by status.

import { messages } from "./message-descriptors";
import { pickStatusMessages } from "./status-message-utils";
import type { StatusMessageGroup } from "./types";

export const sendInputMessages: StatusMessageGroup = pickStatusMessages({
  inProgress: messages.rowSendInputMessagedInProgress,
  completed: messages.rowSendInputMessagedCompleted,
  failed: messages.rowSendInputMessagedFailed,
});
