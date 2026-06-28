// Restored from ref/webview/assets/composer-utils-CytYpctu.js
import { vscodeApiH, vscodeApiN } from "../boundaries/vscode-api";
const CLOSED_AGENT_SEND_FAILED_EVENT = "closed_agent_send_failed";
function appendPromptText(existingPrompt: string, textToAppend: string) {
  const trimmedText = textToAppend.trim();
  return trimmedText.length === 0
    ? existingPrompt
    : existingPrompt.length === 0 || /\s$/.test(existingPrompt)
      ? `${existingPrompt}${trimmedText}`
      : `${existingPrompt} ${trimmedText}`;
}
async function fetchIdeContext(
  includeWorkspaceRoot: boolean,
  enabled: boolean,
  workspaceRoot: string,
) {
  if (!enabled) return null;
  try {
    return (
      await vscodeApiN("ide-context", {
        params: includeWorkspaceRoot
          ? {
              workspaceRoot,
            }
          : undefined,
      })
    ).ideContext;
  } catch (error) {
    vscodeApiH.error("[Composer] failed to fetch ide-context", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}
export { appendPromptText, fetchIdeContext, CLOSED_AGENT_SEND_FAILED_EVENT };
