// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Agent state labels keyed by raw state value.

import { messages } from "./message-descriptors";

function createAgentStateMessages() {
  return {
    pendingInit: messages.statePendingInit,
    running: messages.stateRunning,
    interrupted: messages.stateInterrupted,
    shutdown: messages.stateShutdown,
    completed: messages.stateCompleted,
    errored: messages.stateErrored,
    notFound: messages.stateNotFound,
  };
}

export const agentStateMessages = createAgentStateMessages();
