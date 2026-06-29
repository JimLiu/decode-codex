// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builders for the handoff_thread and get_handoff_status MCP tool definitions
// surfaced by the Codex app tool namespace (localConversation domain).
import {
  HANDOFF_THREAD_TOOL_NAME,
  GET_HANDOFF_STATUS_TOOL_NAME,
} from "./codex-app-tool-names";
import type { HandoffHostConfig } from "./available-handoff-hosts";

export const MAX_HANDOFF_STATUS_WAIT_MS = 60_000;

export const LOCAL_HANDOFF_HOST_FALLBACK = {
  display_name: "Local",
  kind: "local",
} as Pick<HandoffHostConfig, "display_name" | "kind">;

type McpToolDefinition = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
};

export function buildHandoffThreadToolDefinition(
  availableHosts: HandoffHostConfig[],
  crossHostHandoffEnabled = false,
): McpToolDefinition {
  return {
    name: HANDOFF_THREAD_TOOL_NAME,
    description:
      "Move another Codex thread and its associated git state between its checkout and Codex worktree on its current host. Running threads are interrupted before handoff. Omit destinationHostId for this current-host toggle. The calling thread cannot move itself, and cloud handoff is not supported." +
      (crossHostHandoffEnabled
        ? " You can also choose another host to move the thread to a matching saved-project worktree."
        : "") +
      " Returns quickly with an operationId and revision. The UI continues to show live progress in the original handoff item. For model-visible completion, call get_handoff_status with afterRevision and a 30000-60000 waitMs, then back off if the revision does not change.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      properties: {
        threadId: {
          type: "string",
          description: "Other thread id to hand off.",
        },
        ...(crossHostHandoffEnabled
          ? {
              destinationHostId: {
                type: "string",
                description: `Optional host that should run the thread after handoff. Omit to move between the source thread's checkout and Codex worktree on its current host. Choose another host to move to a matching saved-project worktree. Available hosts: ${availableHosts
                  .map(({ display_name, id }) => `${display_name} (${id})`)
                  .join(", ")}.`,
                enum: availableHosts.map(({ id }) => id),
              },
            }
          : {}),
        followUpPrompt: {
          type: "string",
          description:
            "Optional prompt to send to the destination thread after handoff succeeds.",
        },
      },
      required: ["threadId"],
    },
  };
}

export function buildGetHandoffStatusToolDefinition(): McpToolDefinition {
  return {
    name: GET_HANDOFF_STATUS_TOOL_NAME,
    description:
      "Read status for a handoff_thread operation. The user-facing UI already updates in the original handoff item, so avoid frequent polling. Prefer afterRevision with a 30000-60000 waitMs so the call returns only when progress changes or the timeout expires. Poll once after dispatch, then wait longer/back off; do not repeatedly poll unchanged state or narrate unchanged polls.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      properties: {
        operationId: {
          type: "string",
          description: "operationId returned by handoff_thread.",
        },
        afterRevision: {
          type: "number",
          description:
            "Optional last revision already seen. When provided with waitMs, wait until the operation revision is greater than this value or the timeout expires.",
        },
        waitMs: {
          type: "number",
          description: `Optional maximum milliseconds to wait for a status change, from 0 to ${MAX_HANDOFF_STATUS_WAIT_MS}.`,
        },
      },
      required: ["operationId"],
    },
  };
}
