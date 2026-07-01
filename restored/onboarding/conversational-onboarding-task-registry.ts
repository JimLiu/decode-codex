// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Registry of conversational-onboarding starter tasks plus accessors used to
// resolve a task's messaging-plugin name and its task-picker option metadata.

import type { ComponentType, ReactNode } from "react";
import type { MessageDescriptor } from "../vendor/react-intl";

import { csvChartTask } from "./conversational-onboarding-csv-chart-task";
import { desktopNoteTask } from "./conversational-onboarding-desktop-note-task";
import { holdNextFreeHourTask } from "./conversational-onboarding-hold-next-free-hour-task";
import { messagingTask } from "./conversational-onboarding-messaging-task";

export type ConversationalOnboardingTaskId =
  | "desktop_note"
  | "csv_chart"
  | "hold_next_free_hour"
  | "send_message_to_self";

export type ConversationalOnboardingPluginName = "slack" | "teams";

interface ConversationalOnboardingTaskIconProps {
  appPlugin?: unknown;
  className?: string;
}

export interface ConversationalOnboardingTaskOption {
  Icon: ComponentType<ConversationalOnboardingTaskIconProps>;
  SelectionAttachment?: ComponentType;
  label: MessageDescriptor;
}

export interface ConversationalOnboardingTaskBase {
  option: ConversationalOnboardingTaskOption;
  View: ComponentType<Record<string, unknown>>;
  prepare?: (...args: unknown[]) => void;
  reset?: (...args: unknown[]) => void;
  retry?: (...args: unknown[]) => void;
  start?: (...args: unknown[]) => void | Promise<void>;
  getDeclinedRetryPrompt?: (...args: unknown[]) => ReactNode | string;
}

export interface ConversationalOnboardingMessagingTask extends ConversationalOnboardingTaskBase {
  getPluginName: (
    accountType: string,
  ) => ConversationalOnboardingPluginName | null;
}

export type ConversationalOnboardingTaskDefinition =
  | ConversationalOnboardingTaskBase
  | ConversationalOnboardingMessagingTask;

const conversationalOnboardingTasks: Record<
  ConversationalOnboardingTaskId,
  ConversationalOnboardingTaskDefinition
> = {
  desktop_note: desktopNoteTask,
  csv_chart: csvChartTask,
  hold_next_free_hour: holdNextFreeHourTask,
  send_message_to_self: messagingTask,
};

export function getConversationalOnboardingTaskPluginName(
  task: ConversationalOnboardingTaskId,
  accountType: string,
): ConversationalOnboardingPluginName | null {
  const definition = conversationalOnboardingTasks[task];
  return "getPluginName" in definition
    ? definition.getPluginName(accountType)
    : null;
}

export function getConversationalOnboardingTaskOption(
  task: ConversationalOnboardingTaskId,
): ConversationalOnboardingTaskOption {
  return conversationalOnboardingTasks[task].option;
}

export function isConversationalOnboardingMessagingTask(
  task: ConversationalOnboardingTaskId,
): boolean {
  return "getPluginName" in conversationalOnboardingTasks[task];
}
