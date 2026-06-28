// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation title formatting and id normalization helpers used by the local summary panel.
import {
  G_ as initConversationTitleFormatterRaw,
  K_ as formatConversationTitleTextRaw,
} from "../../vendor/projects-app-shared-runtime";
import { normalizeConversationId } from "../../boundaries/src-l0hb-mz-p";

export function initConversationTitleRuntime(): void {
  initConversationTitleFormatterRaw();
}

export function formatConversationTitleText(title: string): string {
  return formatConversationTitleTextRaw(title);
}

export function toConversationId(value: string): string {
  return normalizeConversationId(value);
}
