// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure builders and store mutators for thread-handoff progress state: the
// initial progress record, per-step status updates, terminal/error/warning
// transitions, the JSON tool-result envelope, and branch-name resolution
// (localConversation domain).
import { setHandoffOperationStatus } from "./handoff-operation-status-store";
import { buildBranchName } from "./build-branch-name";
import {
  HANDOFF_STEP_ORDER,
  branchPrefixSetting,
  readSettingValue,
} from "../boundaries/onboarding-commons-externals.facade";

type HandoffStepStatus = "pending" | "running" | "done" | "failed" | "skipped";

type HandoffStep = {
  id: string;
  status: HandoffStepStatus;
};

type HandoffDirection = "to-local" | "to-worktree" | "to-host-worktree";

type HandoffProgress = {
  destinationCwd: string | null;
  destinationHostId: string;
  destinationHostDisplayName: string;
  destinationThreadId: string | null;
  direction: HandoffDirection;
  errorCode: string | null;
  errorMessage: string | null;
  localBranch: string | null;
  operationId: string;
  retryable: boolean | null;
  revision: number;
  sourceBranch: string | null;
  status: "queued" | "running" | "success" | "warning" | "error";
  steps: HandoffStep[];
  threadTitle: string;
  warningMessage: string | null;
  worktreeBranch: string | null;
};

type AppScope = {
  get: (...args: unknown[]) => unknown;
  set: (...args: unknown[]) => void;
};

type HandoffContext = {
  scope: AppScope;
  operationId: string;
  threadTitle: string;
  threadId: string;
  conversation: { title?: string | null };
};

type HandoffProgressFields = {
  destinationHostDisplayName: string;
  destinationHostId: string;
  destinationCwd: string | null;
  direction: HandoffDirection;
  localBranch: string | null;
  sourceBranch: string | null;
  steps: HandoffStep[];
  worktreeBranch: string | null;
};

export function buildInitialHandoffProgress(
  context: Pick<HandoffContext, "operationId" | "threadTitle">,
  fields: HandoffProgressFields,
): HandoffProgress {
  return {
    destinationCwd: fields.destinationCwd,
    destinationHostId: fields.destinationHostId,
    destinationHostDisplayName: fields.destinationHostDisplayName,
    destinationThreadId: null,
    direction: fields.direction,
    errorCode: null,
    errorMessage: null,
    localBranch: fields.localBranch,
    operationId: context.operationId,
    retryable: null,
    revision: 0,
    sourceBranch: fields.sourceBranch,
    status: "queued",
    steps: fields.steps,
    threadTitle: context.threadTitle,
    warningMessage: null,
    worktreeBranch: fields.worktreeBranch,
  };
}

export function buildPendingSteps(stepIds: string[]): HandoffStep[] {
  return stepIds.map((id) => ({ id, status: "pending" }));
}

export function wrapHandoffToolResult(payload: unknown): {
  contentItems: { type: string; text: string }[];
  success: boolean;
} {
  return {
    contentItems: [{ type: "inputText", text: JSON.stringify(payload) }],
    success: true,
  };
}

export function toHandoffStatusPayload(state: HandoffProgress) {
  return {
    destinationCwd: state.destinationCwd ?? undefined,
    destinationHostDisplayName: state.destinationHostDisplayName,
    destinationHostId: state.destinationHostId,
    operationId: state.operationId,
    revision: state.revision,
    status: state.status,
    steps: state.steps,
    threadTitle: state.threadTitle,
    destinationThreadId: state.destinationThreadId ?? undefined,
    errorCode: state.errorCode ?? undefined,
    errorMessage: state.errorMessage ?? undefined,
    retryable: state.retryable ?? undefined,
    warningMessage: state.warningMessage ?? undefined,
  };
}

function compareStepOrder(a: HandoffStep, b: HandoffStep): number {
  return HANDOFF_STEP_ORDER.indexOf(a.id) - HANDOFF_STEP_ORDER.indexOf(b.id);
}

export function updateHandoffStep(
  context: HandoffContext,
  stepId: string,
  status: HandoffStepStatus,
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) => {
    if (previous == null) return null;
    const state = previous as HandoffProgress;
    const nextStep: HandoffStep = { id: stepId, status };
    const existing = state.steps.find((step) => step.id === stepId);
    if (existing?.status === status) return state;
    const steps =
      existing == null
        ? [...state.steps, nextStep].sort(compareStepOrder)
        : state.steps.map((step) => (step.id === stepId ? nextStep : step));
    return { ...state, steps };
  });
}

export function setHandoffDestinationCwd(
  context: HandoffContext,
  destinationCwd: string,
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) => {
    const state = previous as HandoffProgress | null;
    return state == null || state.destinationCwd === destinationCwd
      ? state
      : { ...state, destinationCwd };
  });
}

export function setHandoffDestinationThreadId(
  context: HandoffContext,
  destinationThreadId: string,
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) => {
    const state = previous as HandoffProgress | null;
    return state == null || state.destinationThreadId === destinationThreadId
      ? state
      : { ...state, destinationThreadId };
  });
}

export function setHandoffStatus(
  context: HandoffContext,
  status: HandoffProgress["status"],
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) => {
    const state = previous as HandoffProgress | null;
    return state == null || state.status === status
      ? state
      : { ...state, status };
  });
}

export function setHandoffError(
  context: HandoffContext,
  errorMessage: string,
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) =>
    applyHandoffError(previous as HandoffProgress | null, errorMessage),
  );
}

export function setHandoffWarning(
  context: HandoffContext,
  warningMessage: string,
): void {
  setHandoffOperationStatus(context.scope, context.operationId, (previous) => {
    const state = previous as HandoffProgress | null;
    return state == null ||
      (state.status === "warning" && state.warningMessage === warningMessage)
      ? state
      : { ...state, status: "warning", warningMessage };
  });
}

function applyHandoffError(
  state: HandoffProgress | null,
  errorMessage: string,
): HandoffProgress | null {
  if (state == null) return null;
  const steps = markCurrentStepFailed(state.steps);
  return state.status === "error" &&
    state.errorCode === "handoff_failed" &&
    state.errorMessage === errorMessage &&
    state.retryable === true &&
    steps === state.steps
    ? state
    : {
        ...state,
        errorCode: "handoff_failed",
        errorMessage,
        retryable: true,
        status: "error",
        steps,
      };
}

function markCurrentStepFailed(steps: HandoffStep[]): HandoffStep[] {
  if (steps.some((step) => step.status === "failed")) return steps;
  const runningIndex = steps.findIndex((step) => step.status === "running");
  const pendingIndex = steps.findIndex((step) => step.status === "pending");
  const targetIndex = runningIndex === -1 ? pendingIndex : runningIndex;
  return targetIndex === -1
    ? steps
    : steps.map((step, index) =>
        index === targetIndex ? { ...step, status: "failed" } : step,
      );
}

export function resolveHandoffBranchName(
  context: HandoffContext,
  preferredBranch: string | null | undefined,
): string {
  const trimmed = preferredBranch?.trim() ?? "";
  if (trimmed.length > 0) return trimmed;
  const branchPrefix = readSettingValue(context.scope.get, branchPrefixSetting);
  const fromTitle = buildBranchName({
    branchPrefix,
    conversationTitle: context.conversation.title ?? "",
  });
  return fromTitle.length > 0 && !fromTitle.endsWith("/")
    ? fromTitle
    : buildBranchName({
        branchPrefix,
        conversationTitle: context.threadId,
      });
}
