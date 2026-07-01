// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Exported async backend handlers for the Codex thread-management MCP tools
// (fork / create / list_projects / list_threads / read / send_message /
// pin / archive / rename), plus the JSON tool-result wrapper and the
// create_thread target resolver (localConversation domain).
import {
  FORK_THREAD_TOOL_NAME,
  CREATE_THREAD_TOOL_NAME,
  LIST_PROJECTS_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "./codex-app-tool-names";
import {
  INVALID_TOOL_ARGUMENTS_MESSAGE,
  DEFAULT_LIST_THREADS_LIMIT,
  DEFAULT_READ_THREAD_TURN_LIMIT,
  DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS,
  forkThreadParamsSchema,
  createThreadParamsSchema,
  listProjectsParamsSchema,
  listThreadsParamsSchema,
  readThreadParamsSchema,
  sendMessageToThreadParamsSchema,
  setThreadPinnedParamsSchema,
  setThreadArchivedParamsSchema,
  setThreadTitleParamsSchema,
} from "./thread-management-tool-params";
import {
  // Routed through the boundary facade (reported under facadeNeeded):
  buildToolErrorResult,
  forkConversation,
  createBackgroundThread,
  listBackgroundProjects,
  getBackgroundProjects,
  listBackgroundThreads,
  readBackgroundThread,
  sendMessageToBackgroundThread,
  setBackgroundThreadPinned,
  setBackgroundThreadArchived,
  setBackgroundThreadTitle,
  LOCAL_HOST_ID,
} from "../boundaries/onboarding-commons-externals.facade";

type AppScope = {
  get: (...args: unknown[]) => any;
  set: (...args: unknown[]) => void;
};

type ToolResult = {
  contentItems: { type: string; text: string }[];
  success: boolean;
};

type CreateThreadTarget =
  | { type: "projectless"; directoryName?: string }
  | {
      type: "project";
      projectId: string;
      environment?: unknown;
    };

type ResolvedCreateThreadTarget =
  | { type: "projectless"; directoryName?: string }
  | { type: "project"; projectId: string; environment?: unknown }
  | {
      type: "remoteProject";
      projectId: string;
      hostId: string;
      path: string;
      environment?: unknown;
    };

type BackgroundProject = {
  projectId: string;
  projectKind: "local" | "remote";
  hostId: string;
  path: string;
};

type AvailableModel = {
  model: string;
  description?: string;
  supportedReasoningEfforts: Array<{ reasoningEffort: string }>;
};

type GetAvailableModels = (
  hostId: string,
) => Promise<AvailableModel[]> | AvailableModel[];

const DEFAULT_CREATE_THREAD_MODEL_FOR_VALIDATION = "gpt-5.5";

function toToolResult(payload: unknown): ToolResult {
  return {
    contentItems: [
      { type: "inputText", text: JSON.stringify(payload ?? null) },
    ],
    success: true,
  };
}

function resolveCreateThreadTarget(
  scope: AppScope,
  target: CreateThreadTarget,
): ResolvedCreateThreadTarget {
  if (target.type === "projectless") return target;
  const project = (getBackgroundProjects(scope) as BackgroundProject[]).find(
    (candidate) => candidate.projectId === target.projectId,
  );
  if (project == null) {
    throw Error(
      `Unknown projectId: ${target.projectId}. Call list_projects to find available projects.`,
    );
  }
  return project.projectKind === "remote"
    ? {
        type: "remoteProject",
        projectId: project.projectId,
        hostId: project.hostId,
        path: project.path,
        environment: target.environment,
      }
    : {
        type: "project",
        projectId: project.projectId,
        environment: target.environment,
      };
}

function validateReasoningEffortForModel(
  toolName: string,
  model: string,
  reasoningEffort: string,
  availableModels: AvailableModel[],
): string | null {
  const matchedModel = availableModels.find(
    (candidate) => candidate.model === model,
  );
  if (matchedModel == null) {
    return `${toolName} could not validate reasoning effort "${reasoningEffort}" for model "${model}". Use a model and reasoning combination listed in the tool description, or omit thinking.`;
  }

  const supportedEfforts = matchedModel.supportedReasoningEfforts.map(
    ({ reasoningEffort }) => reasoningEffort,
  );
  if (supportedEfforts.includes(reasoningEffort)) return null;

  const supportedMessage =
    supportedEfforts.length === 0
      ? "This model supports no reasoning effort overrides."
      : `Supported reasoning efforts: ${supportedEfforts.join(", ")}.`;
  return `${toolName} rejected unsupported model/reasoning combination: "${matchedModel.model}" does not support "${reasoningEffort}". ${supportedMessage}`;
}

export async function handleForkThread({
  scope,
  argumentsValue,
  sourceThreadId,
}: {
  scope: AppScope;
  argumentsValue: unknown;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  if (sourceThreadId == null) {
    return buildToolErrorResult(
      `${FORK_THREAD_TOOL_NAME} missing calling thread id.`,
    );
  }
  const parsed = forkThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${FORK_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await forkConversation({
        scope,
        sourceThreadId,
        targetThreadId: parsed.data.threadId,
        environment: parsed.data.environment ?? { type: "same-directory" },
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleCreateThread({
  argumentsValue,
  getAvailableModels,
  scope,
  sourceThreadId,
}: {
  argumentsValue: unknown;
  getAvailableModels?: GetAvailableModels;
  scope: AppScope;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  const parsed = createThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${CREATE_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    const target = resolveCreateThreadTarget(
      scope,
      parsed.data.target as CreateThreadTarget,
    );
    if (parsed.data.thinking != null) {
      const hostId =
        target.type === "remoteProject" ? target.hostId : LOCAL_HOST_ID;
      const availableModels =
        getAvailableModels == null ? [] : await getAvailableModels(hostId);
      const validationError = validateReasoningEffortForModel(
        CREATE_THREAD_TOOL_NAME,
        parsed.data.model ?? DEFAULT_CREATE_THREAD_MODEL_FOR_VALIDATION,
        parsed.data.thinking,
        availableModels,
      );
      if (validationError != null) {
        return buildToolErrorResult(validationError);
      }
    }
    return toToolResult(
      await createBackgroundThread({
        model: parsed.data.model,
        prompt: parsed.data.prompt,
        scope,
        sourceThreadId,
        target,
        thinking: parsed.data.thinking,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleListProjects({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  if (!listProjectsParamsSchema.safeParse(argumentsValue).success) {
    return buildToolErrorResult(
      `${LIST_PROJECTS_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(await listBackgroundProjects({ scope }));
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleListThreads({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = listThreadsParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${LIST_THREADS_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await listBackgroundThreads({
        scope,
        limit: parsed.data.limit ?? DEFAULT_LIST_THREADS_LIMIT,
        query: parsed.data.query,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleReadThread({
  scope,
  argumentsValue,
  sourceHostId,
}: {
  scope: AppScope;
  argumentsValue: unknown;
  sourceHostId?: string;
}): Promise<ToolResult> {
  const parsed = readThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${READ_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await readBackgroundThread({
        scope,
        cursor: parsed.data.cursor,
        hostId: parsed.data.hostId ?? sourceHostId,
        includeOutputs: parsed.data.includeOutputs ?? false,
        maxOutputCharsPerItem:
          parsed.data.maxOutputCharsPerItem ??
          DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS,
        threadId: parsed.data.threadId,
        turnLimit: parsed.data.turnLimit ?? DEFAULT_READ_THREAD_TURN_LIMIT,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleSendMessageToThread({
  argumentsValue,
  scope,
  sourceHostId,
  sourceThreadId,
}: {
  argumentsValue: unknown;
  scope: AppScope;
  sourceHostId?: string;
  sourceThreadId: string | null;
}): Promise<ToolResult> {
  const parsed = sendMessageToThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SEND_MESSAGE_TO_THREAD_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await sendMessageToBackgroundThread({
        hostId: parsed.data.hostId,
        model: parsed.data.model,
        preferredHostId: sourceHostId,
        prompt: parsed.data.prompt,
        scope,
        sourceThreadId,
        threadId: parsed.data.threadId,
        thinking: parsed.data.thinking,
      }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleSetThreadPinned({
  argumentsValue,
}: {
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = setThreadPinnedParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_PINNED_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(await setBackgroundThreadPinned(parsed.data));
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleSetThreadArchived({
  argumentsValue,
  sourceThreadId,
  scope,
}: {
  argumentsValue: unknown;
  sourceThreadId: string | null;
  scope: AppScope;
}): Promise<ToolResult> {
  const parsed = setThreadArchivedParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_ARCHIVED_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  const threadId = parsed.data.threadId ?? sourceThreadId;
  if (threadId == null) {
    return buildToolErrorResult(
      `${SET_THREAD_ARCHIVED_TOOL_NAME} missing calling thread id.`,
    );
  }
  try {
    return toToolResult(
      await setBackgroundThreadArchived({ ...parsed.data, threadId, scope }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

async function handleSetThreadTitle({
  argumentsValue,
  scope,
}: {
  argumentsValue: unknown;
  scope: AppScope;
}): Promise<ToolResult> {
  const parsed = setThreadTitleParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${SET_THREAD_TITLE_TOOL_NAME} ${INVALID_TOOL_ARGUMENTS_MESSAGE}`,
    );
  }
  try {
    return toToolResult(
      await setBackgroundThreadTitle({ ...parsed.data, scope }),
    );
  } catch (error) {
    return buildToolErrorResult(
      error instanceof Error ? error.message : String(error),
    );
  }
}

export function getThreadManagementToolHandlers() {
  return {
    handleCreateThread,
    handleListProjects,
    handleListThreads,
    handleReadThread,
    handleSendMessageToThread,
    handleSetThreadPinned,
    handleSetThreadArchived,
    handleSetThreadTitle,
  };
}
