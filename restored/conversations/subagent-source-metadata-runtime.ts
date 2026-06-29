// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Subagent source metadata reader shared by conversation background-agent helpers.
import { Zy as getSubagentSourceMetadataRaw } from "../vendor/projects-app-shared-runtime";

export type SubagentSourceMetadata = {
  agentNickname?: string | null;
  agentRole?: string | null;
  parentThreadId?: string | null;
};

export function getSubagentSourceMetadata(
  source: unknown,
): SubagentSourceMetadata | null {
  return getSubagentSourceMetadataRaw(source) as SubagentSourceMetadata | null;
}
