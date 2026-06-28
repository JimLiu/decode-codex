// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background-agent metadata helpers used by local conversation headers.
import {
  Hx as getFallbackBackgroundAgentHandleRaw,
  cA as getSubagentSourceMetadataRaw,
  gm as backgroundAgentSnapshotSignal,
} from "../../vendor/appg-thread-shared-runtime";

export { backgroundAgentSnapshotSignal };

export type SubagentSourceMetadata = {
  agentNickname?: string | null;
};

export function getFallbackBackgroundAgentHandle(
  conversationId: string,
): string {
  return getFallbackBackgroundAgentHandleRaw(conversationId);
}

export function getSubagentSourceMetadata(
  snapshot: unknown,
): SubagentSourceMetadata | null {
  return getSubagentSourceMetadataRaw(
    snapshot,
  ) as SubagentSourceMetadata | null;
}
