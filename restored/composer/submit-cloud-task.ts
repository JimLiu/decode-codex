// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js

type CloudFollowUp =
  | {
      type: "cloud";
      taskDetails: {
        task: { id: string };
        current_assistant_turn?: { id?: string } | null;
      };
      selectedTurnId: string;
      selectedTurn?: { id?: string } | null;
    }
  | { type: "local"; localConversationId: string }
  | { type?: undefined };

type CloudTaskType =
  | { type: "new-task"; startingState: unknown }
  | { type: "follow-up"; taskId: string; turnId: string };

type FollowUpCloudStartingState = "direct-follow-up" | "working-tree";

function resolveCloudFollowUpType(
  followUp: Extract<CloudFollowUp, { type: "cloud" }>,
  startingState: FollowUpCloudStartingState | undefined,
): CloudTaskType {
  if (startingState === "direct-follow-up") {
    return {
      type: "follow-up",
      taskId: followUp.taskDetails.task.id,
      turnId: followUp.selectedTurnId,
    };
  }
  const hasDivergentTurn =
    followUp.selectedTurn != null &&
    followUp.selectedTurn.id !==
      followUp.taskDetails.current_assistant_turn?.id;
  return {
    type: "new-task",
    startingState: {
      type: "fork-cloud-task",
      taskDetails: hasDivergentTurn
        ? {
            ...followUp.taskDetails,
            current_assistant_turn: followUp.selectedTurn,
            current_diff_task_turn: followUp.selectedTurn,
          }
        : followUp.taskDetails,
    },
  };
}

export function resolveCloudTaskType(
  followUp: CloudFollowUp | null | undefined,
  threadGoal: unknown,
  followUpCloudStartingState: FollowUpCloudStartingState | undefined,
): CloudTaskType | undefined {
  switch (followUp?.type) {
    case undefined:
      return { type: "new-task", startingState: threadGoal };
    case "cloud":
      return resolveCloudFollowUpType(followUp, followUpCloudStartingState);
    case "local":
      return {
        type: "new-task",
        startingState: {
          type: "fork-local-task",
          conversationId: followUp.localConversationId,
        },
      };
    default:
      return undefined;
  }
}

interface CloudSubmitContext {
  cloudTaskType: CloudTaskType;
  [key: string]: unknown;
}

type BuildCloudSubmitResult =
  | { type: "created-task"; taskId: string }
  | { type: "none" };

export interface BuildCloudSubmitTaskArgs {
  scope: unknown;
  codeEnvironment?: unknown;
  context: CloudSubmitContext;
  createCloudTask: (args: unknown) => Promise<{ id: string }>;
  followUp: CloudFollowUp | null | undefined;
  followUpToCloudTask: (args: unknown) => Promise<unknown>;
  isWorktreeSnapshotsEnabled: boolean;
  mcpManagerHostId: string;
  queryClient: {
    invalidateQueries(args: { queryKey: string[] }): Promise<void>;
  };
  selectedModel: unknown;
}

export async function buildCloudSubmitTask(
  args: BuildCloudSubmitTaskArgs,
): Promise<BuildCloudSubmitResult | undefined> {
  const {
    context,
    createCloudTask,
    followUpToCloudTask,
    queryClient,
    selectedModel,
  } = args;
  let result: BuildCloudSubmitResult | undefined;

  switch (context.cloudTaskType.type) {
    case "new-task": {
      const task = await createCloudTask({ context, selectedModel });
      result = { type: "created-task", taskId: task.id };
      break;
    }
    case "follow-up": {
      await followUpToCloudTask({
        taskId: context.cloudTaskType.taskId,
        turnId: context.cloudTaskType.turnId,
        context,
        selectedModel,
      });
      result = { type: "none" };
      break;
    }
  }

  await queryClient.invalidateQueries({ queryKey: ["tasks"] });
  return result;
}
