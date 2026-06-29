// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zod argument schemas and MCP tool definitions for the Codex thread-management
// tools (fork/create/list/read/send/pin/archive/rename/list-projects), plus the
// builder that assembles the full thread-tool set and the model-description
// augmenter (localConversation domain).
import { z } from "zod";
import {
  FORK_THREAD_TOOL_NAME,
  LIST_PROJECTS_TOOL_NAME,
  CREATE_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "./codex-app-tool-names";
import {
  buildHandoffThreadToolDefinition,
  buildGetHandoffStatusToolDefinition,
} from "./thread-handoff-tool-definitions";
import type { HandoffHostConfig } from "./available-handoff-hosts";

export const INVALID_TOOL_ARGUMENTS_MESSAGE = "received invalid arguments.";
export const DEFAULT_LIST_THREADS_LIMIT = 10;
export const DEFAULT_READ_THREAD_TURN_LIMIT = 1;
export const DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS = 2_000;

export const reasoningEffortEnum = z.enum([
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra",
]);

const worktreeStartingStateSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("working-tree") }),
  z.object({ type: z.literal("branch"), branchName: z.string().min(1) }),
]);

const threadEnvironmentSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("local") }),
  z.object({
    type: z.literal("worktree"),
    startingState: worktreeStartingStateSchema.optional(),
  }),
]);

const createThreadTargetSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("project"),
    projectId: z.string().min(1),
    environment: threadEnvironmentSchema,
  }),
  z.object({
    type: z.literal("projectless"),
    directoryName: z.string().min(1).optional(),
  }),
]);

const forkEnvironmentSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("same-directory") }),
  z.object({ type: z.literal("worktree") }),
]);

export const createThreadParamsSchema = z.object({
  prompt: z.string().min(1),
  target: createThreadTargetSchema,
  model: z.string().min(1).optional(),
  thinking: reasoningEffortEnum.optional(),
});

export const forkThreadParamsSchema = z.object({
  threadId: z.string().min(1).optional(),
  environment: forkEnvironmentSchema.optional(),
});

export const listProjectsParamsSchema = z.object({});

export const listThreadsParamsSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().min(1).max(50).optional(),
});

export const readThreadParamsSchema = z.object({
  threadId: z.string().min(1),
  hostId: z.string().min(1).optional(),
  cursor: z.string().min(1).optional(),
  turnLimit: z.number().int().min(1).max(10).optional(),
  includeOutputs: z.boolean().optional(),
  maxOutputCharsPerItem: z.number().int().min(0).max(20_000).optional(),
});

export const sendMessageToThreadParamsSchema = z.object({
  threadId: z.string().min(1),
  hostId: z.string().min(1).optional(),
  prompt: z.string().min(1),
  model: z.string().min(1).optional(),
  thinking: reasoningEffortEnum.optional(),
});

export const setThreadPinnedParamsSchema = z.object({
  threadId: z.string().min(1),
  pinned: z.boolean(),
});

export const setThreadArchivedParamsSchema = z.object({
  threadId: z.string().min(1).optional(),
  archived: z.boolean(),
});

export const setThreadTitleParamsSchema = z.object({
  threadId: z.string().min(1),
  title: z.string().min(1),
});

type ModelGuidance = { model: string; description: string };

type McpToolDefinition = {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    additionalProperties: false;
    properties: Record<string, any>;
    required?: string[];
  };
};

const DEFAULT_MODEL_GUIDANCE =
  "Do not specify a model unless the user explicitly requests a specific model. Otherwise omit this field so the new thread uses the user's configured default model.";

const createThreadEnvironmentSchemaDescriptor = {
  description:
    "Where the project thread should run: directly in the saved project or in a new worktree.",
  anyOf: [
    {
      type: "object",
      additionalProperties: false,
      properties: { type: { type: "string", enum: ["local"] } },
      required: ["type"],
    },
    {
      type: "object",
      additionalProperties: false,
      properties: {
        type: { type: "string", enum: ["worktree"] },
        startingState: {
          description:
            "Only specify this when the user explicitly asks to start from a particular existing git state. Use working-tree to include the current checkout and uncommitted changes. Use branch only for a branch or ref that already exists. Otherwise omit this field so the worktree starts from the project's default branch. Do not use this to name a new branch.",
          anyOf: [
            {
              type: "object",
              additionalProperties: false,
              properties: { type: { type: "string", enum: ["working-tree"] } },
              required: ["type"],
            },
            {
              type: "object",
              additionalProperties: false,
              properties: {
                type: { type: "string", enum: ["branch"] },
                branchName: { type: "string" },
              },
              required: ["type", "branchName"],
            },
          ],
        },
      },
      required: ["type"],
    },
  ],
};

const listProjectsToolDefinition: McpToolDefinition = {
  name: LIST_PROJECTS_TOOL_NAME,
  description:
    "List local and remote projects available for background thread creation. Use a returned projectId with create_thread.",
  inputSchema: { type: "object", additionalProperties: false, properties: {} },
};

const createThreadToolDefinition: McpToolDefinition = {
  name: CREATE_THREAD_TOOL_NAME,
  description:
    "Create a separate Codex thread only when the user explicitly asks for a new or background thread. Use list_projects first, then pass its projectId for repo-scoped work in any local or remote project. Use projectless targets for general tasks. Project targets must choose a local or worktree environment.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      prompt: {
        type: "string",
        description: "Initial prompt for the new thread.",
      },
      target: {
        description: "Where to create the thread.",
        anyOf: [
          {
            type: "object",
            additionalProperties: false,
            properties: {
              type: { type: "string", enum: ["project"] },
              projectId: {
                type: "string",
                description: "Project id returned by list_projects.",
              },
              environment: createThreadEnvironmentSchemaDescriptor,
            },
            required: ["type", "projectId", "environment"],
          },
          {
            type: "object",
            additionalProperties: false,
            properties: {
              type: { type: "string", enum: ["projectless"] },
              directoryName: {
                type: "string",
                description: "Optional projectless output directory name.",
              },
            },
            required: ["type"],
          },
        ],
      },
      model: { type: "string", description: DEFAULT_MODEL_GUIDANCE },
      thinking: {
        type: "string",
        description: "Optional reasoning effort override.",
        enum: ["low", "medium", "high", "xhigh", "max", "ultra"],
      },
    },
    required: ["prompt", "target"],
  },
};

const sendMessageToThreadToolDefinition: McpToolDefinition = {
  name: SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  description:
    "Send a follow-up prompt to an existing Codex thread in the background. Omit model and thinking to keep the thread's current settings.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: { type: "string", description: "Thread id to continue." },
      hostId: {
        type: "string",
        description: "Optional host id returned by list_threads.",
      },
      prompt: { type: "string", description: "Follow-up prompt to send." },
      model: { type: "string", description: "Optional model override." },
      thinking: {
        type: "string",
        description: "Optional reasoning effort override.",
        enum: ["low", "medium", "high", "xhigh", "max", "ultra"],
      },
    },
    required: ["threadId", "prompt"],
  },
};

const forkThreadToolDefinition: McpToolDefinition = {
  name: FORK_THREAD_TOOL_NAME,
  description:
    "Fork a Codex thread. Omit threadId to fork the calling thread, or pass a threadId to fork that specific thread. A same-directory fork returns a child threadId immediately; a worktree fork returns only a pendingWorktreeId until worktree setup creates the child. Forks contain completed history only: if the source thread is running, the active turn and unfinished response are not copied. Send a follow-up message to the child only if the task requires work to continue there.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: {
        type: "string",
        description:
          "Optional source thread id to fork. Omit to fork the calling thread.",
      },
      environment: {
        description:
          "Where the fork should run. Omit for a same-directory fork.",
        anyOf: [
          {
            type: "object",
            additionalProperties: false,
            properties: { type: { type: "string", enum: ["same-directory"] } },
            required: ["type"],
          },
          {
            type: "object",
            additionalProperties: false,
            properties: { type: { type: "string", enum: ["worktree"] } },
            required: ["type"],
          },
        ],
      },
    },
  },
};

const listThreadsToolDefinition: McpToolDefinition = {
  name: LIST_THREADS_TOOL_NAME,
  description:
    "List recent Codex threads across the local host and connected remote hosts. Use an optional query to find a specific thread before reading or steering it.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      query: { type: "string", description: "Optional thread search query." },
      limit: {
        type: "number",
        description: "Maximum number of thread summaries to return.",
      },
    },
  },
};

const readThreadToolDefinition: McpToolDefinition = {
  name: READ_THREAD_TOOL_NAME,
  description:
    "Read recent status and turn summaries for one Codex thread without opening it. Use page cursors from earlier responses to read older turns.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: { type: "string", description: "Thread id to inspect." },
      hostId: {
        type: "string",
        description: "Optional host id returned by list_threads.",
      },
      cursor: {
        type: "string",
        description: "Optional cursor for older turns.",
      },
      turnLimit: {
        type: "number",
        description: "Maximum number of turns to return.",
      },
      includeOutputs: {
        type: "boolean",
        description: "Whether to include truncated tool or command outputs.",
      },
      maxOutputCharsPerItem: {
        type: "number",
        description:
          "Maximum output characters to keep for each included output item.",
      },
    },
    required: ["threadId"],
  },
};

const setThreadPinnedToolDefinition: McpToolDefinition = {
  name: SET_THREAD_PINNED_TOOL_NAME,
  description: "Pin or unpin a Codex thread in the background.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: { type: "string", description: "Thread id to pin or unpin." },
      pinned: {
        type: "boolean",
        description: "Whether the thread should be pinned.",
      },
    },
    required: ["threadId", "pinned"],
  },
};

const setThreadArchivedToolDefinition: McpToolDefinition = {
  name: SET_THREAD_ARCHIVED_TOOL_NAME,
  description: "Archive or unarchive a Codex thread in the background.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: {
        type: "string",
        description:
          "Thread id to archive or unarchive. Omit to target the calling thread.",
      },
      archived: {
        type: "boolean",
        description: "Whether the thread should be archived.",
      },
    },
    required: ["archived"],
  },
};

const setThreadTitleToolDefinition: McpToolDefinition = {
  name: SET_THREAD_TITLE_TOOL_NAME,
  description: "Rename a Codex thread in the background.",
  inputSchema: {
    type: "object",
    additionalProperties: false,
    properties: {
      threadId: { type: "string", description: "Thread id to rename." },
      title: { type: "string", description: "New thread title." },
    },
    required: ["threadId", "title"],
  },
};

export function augmentToolModelDescription(
  toolDefinition: McpToolDefinition,
  models: ModelGuidance[],
): McpToolDefinition {
  if (models.length === 0) return toolDefinition;
  const modelList = models
    .map((entry) =>
      entry.description.trim().length === 0
        ? entry.model
        : `${entry.model} (${entry.description.trim()})`,
    )
    .join(", ");
  return {
    ...toolDefinition,
    inputSchema: {
      ...toolDefinition.inputSchema,
      properties: {
        ...toolDefinition.inputSchema.properties,
        model: {
          type: "string",
          description: `${toolDefinition.inputSchema.properties.model.description} Available models: ${modelList}. You may supply a newer model id when explicitly requested.`,
        },
      },
    },
  };
}

type BuildThreadToolsOptions = {
  availableHandoffHosts: HandoffHostConfig[];
  availableModels?: ModelGuidance[];
  crossHostHandoffEnabled?: boolean;
  deferLoading?: boolean;
  forkThreadEnabled?: boolean;
};

export function buildThreadTools({
  availableHandoffHosts,
  availableModels = [],
  crossHostHandoffEnabled = false,
  deferLoading = false,
  forkThreadEnabled = true,
}: BuildThreadToolsOptions): Array<
  McpToolDefinition & { deferLoading?: boolean }
> {
  return [
    ...(forkThreadEnabled ? [forkThreadToolDefinition] : []),
    buildHandoffThreadToolDefinition(
      availableHandoffHosts,
      crossHostHandoffEnabled,
    ),
    buildGetHandoffStatusToolDefinition(),
    listProjectsToolDefinition,
    augmentToolModelDescription(createThreadToolDefinition, availableModels),
    listThreadsToolDefinition,
    readThreadToolDefinition,
    augmentToolModelDescription(
      sendMessageToThreadToolDefinition,
      availableModels,
    ),
    setThreadPinnedToolDefinition,
    setThreadArchivedToolDefinition,
    setThreadTitleToolDefinition,
  ].map((definition) =>
    deferLoading ? { ...definition, deferLoading: true } : definition,
  );
}
