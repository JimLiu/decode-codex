// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Product-analytics emitters for the Electron conversational-onboarding flow:
// lifecycle, app-access, task-execution, role-selection and task-selection
// events. (The "access denied" emitter lives in
// ./conversational-onboarding-access-analytics.)
import { logProductEvent } from "../generated/product-logger";
import type { ProductLoggerScope } from "../generated/product-logger";
// Generated protobuf enums + event descriptors for conversational-onboarding
// analytics (aliases `Gn`, `Hu`, `gr`, `Qi`, `Ta`, `Tr`, `pi`, `Xc`, `yee`,
// `eo`, `pa`, `sa`, `Ir` in the source chunk). These live in a generated module
// owned by a sibling chunk that has not been restored yet; imported here by role.
import {
  ConversationalOnboardingLifecycleAction,
  ConversationalOnboardingAccessAction,
  ConversationalOnboardingExecutionAction,
  ConversationalOnboardingRoleAction,
  ConversationalOnboardingTaskAction,
  ConversationalOnboardingAccessType,
  ConversationalOnboardingTaskType,
  ConversationalOnboardingFailureKind,
  conversationalOnboardingLifecycleEvent,
  conversationalOnboardingAccessEvent,
  conversationalOnboardingExecutionEvent,
  conversationalOnboardingRoleEvent,
  conversationalOnboardingTaskEvent,
} from "../generated/conversational-onboarding-product-events";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

type ConversationalOnboardingRoleType = string;

// --- Lifecycle ---------------------------------------------------------------

function trackConversationalOnboardingLifecycleStarted(
  scope: ProductLoggerScope,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.STARTED,
    scope,
  });
}

function trackConversationalOnboardingLifecycleCompleted(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.COMPLETED,
    scope,
    selectedTask,
  });
}

function trackConversationalOnboardingLifecycleSkipped(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.SKIPPED,
    scope,
    selectedTask,
  });
}

function trackConversationalOnboardingLifecycleStartFailed(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.START_FAILED,
    scope,
    selectedTask,
  });
}

function emitLifecycleEvent({
  action,
  failureKind,
  scope,
  selectedTask,
}: {
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  selectedTask?: ConversationalOnboardingTaskId | null;
}): void {
  logProductEvent(scope, conversationalOnboardingLifecycleEvent, {
    action,
    failureKind,
    taskType: selectedTask == null ? undefined : mapTaskType(selectedTask),
  });
}

// --- App access --------------------------------------------------------------

function trackConversationalOnboardingAccessStarted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapAccessType(task),
    action: ConversationalOnboardingAccessAction.STARTED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessRequested(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapAccessType(task),
    action: ConversationalOnboardingAccessAction.REQUESTED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessCompleted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapAccessType(task),
    action: ConversationalOnboardingAccessAction.COMPLETED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessHostServiceUnavailable(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessFailure(
    scope,
    task,
    ConversationalOnboardingFailureKind.HOST_SERVICE_UNAVAILABLE,
  );
}

function trackConversationalOnboardingAccessPluginUnavailable(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessFailure(
    scope,
    task,
    ConversationalOnboardingFailureKind.PLUGIN_UNAVAILABLE,
  );
}

function emitAccessFailure(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
  failureKind: unknown,
): void {
  emitAccessEvent({
    accessType: mapAccessType(task),
    action: ConversationalOnboardingAccessAction.FAILED,
    failureKind,
    scope,
    task,
  });
}

function emitAccessEvent({
  accessType,
  action,
  failureKind,
  scope,
  task,
}: {
  accessType: unknown;
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  task: ConversationalOnboardingTaskId;
}): void {
  logProductEvent(scope, conversationalOnboardingAccessEvent, {
    accessType,
    action,
    failureKind,
    taskType: mapTaskType(task),
  });
}

// --- Task execution ----------------------------------------------------------

function trackConversationalOnboardingExecutionStarted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.STARTED,
    scope,
    task,
  });
}

function trackConversationalOnboardingExecutionCompleted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.COMPLETED,
    scope,
    task,
  });
}

function trackConversationalOnboardingExecutionStartFailed(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.START_FAILED,
    scope,
    task,
  });
}

function trackConversationalOnboardingExecutionCompletionMissing(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.COMPLETION_MISSING,
    scope,
    task,
  });
}

function trackConversationalOnboardingExecutionCancelled(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.CANCELLED,
    scope,
    task,
  });
}

function emitExecutionEvent({
  action,
  failureKind,
  scope,
  task,
}: {
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  task: ConversationalOnboardingTaskId;
}): void {
  logProductEvent(scope, conversationalOnboardingExecutionEvent, {
    action,
    failureKind,
    taskType: mapTaskType(task),
  });
}

// --- Role / task selection ---------------------------------------------------

function trackConversationalOnboardingRoleSelected(
  scope: ProductLoggerScope,
  roleType: ConversationalOnboardingRoleType,
): void {
  logProductEvent(scope, conversationalOnboardingRoleEvent, {
    action: ConversationalOnboardingRoleAction.SELECTED,
    roleType,
  });
}

function trackConversationalOnboardingTaskSelected(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  logProductEvent(scope, conversationalOnboardingTaskEvent, {
    action: ConversationalOnboardingTaskAction.SELECTED,
    taskType: mapTaskType(task),
  });
}

// --- Enum mapping helpers ----------------------------------------------------

function mapAccessType(task: ConversationalOnboardingTaskId): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingAccessType.DESKTOP;
    case "csv_chart":
      return ConversationalOnboardingAccessType.CSV_PICKER;
    case "hold_next_free_hour":
      return ConversationalOnboardingAccessType.CALENDAR_APP;
    case "send_message_to_self":
      return ConversationalOnboardingAccessType.MESSAGING_APP;
  }
}

function mapTaskType(task: ConversationalOnboardingTaskId): unknown {
  switch (task) {
    case "desktop_note":
      return ConversationalOnboardingTaskType.DESKTOP_NOTE;
    case "csv_chart":
      return ConversationalOnboardingTaskType.CSV_CHART;
    case "hold_next_free_hour":
      return ConversationalOnboardingTaskType.HOLD_NEXT_FREE_HOUR;
    case "send_message_to_self":
      return ConversationalOnboardingTaskType.SEND_MESSAGE_TO_SELF;
  }
}
