// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background-agent metadata helpers used by local conversation headers.
import { getSubagentSourceMetadata as getSubagentSourceMetadataValue } from "../subagent-source-metadata-runtime";

import { gm as backgroundAgentSnapshotSignal } from "../../vendor/projects-app-shared-runtime";

export { backgroundAgentSnapshotSignal };

export type SubagentSourceMetadata = {
  agentNickname?: string | null;
};

export function getFallbackBackgroundAgentHandle(
  conversationId: string,
): string {
  return `@agent-${conversationId.slice(0, 8)}`;
}

export function getSubagentSourceMetadata(
  snapshot: unknown,
): SubagentSourceMetadata | null {
  return getSubagentSourceMetadataValue(
    snapshot,
  ) as SubagentSourceMetadata | null;
}
