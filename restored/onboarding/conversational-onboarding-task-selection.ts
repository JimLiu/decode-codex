// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Selection helpers over the conversational-onboarding task registry: which
// messaging plugins a given account exposes, how tasks map to installed app
// plugins, whether a task is messaging-gated, and which tasks are available for
// an account type / plan combination.
import { PlanType } from "../boundaries/onboarding-commons-externals.facade";

import {
  getConversationalOnboardingTaskPluginName,
  isConversationalOnboardingMessagingTask,
} from "./conversational-onboarding-task-registry";
import type {
  ConversationalOnboardingPluginName,
  ConversationalOnboardingTaskId,
} from "./conversational-onboarding-task-registry";

export const conversationalOnboardingTaskOrder: ConversationalOnboardingTaskId[] =
  ["desktop_note", "csv_chart", "hold_next_free_hour", "send_message_to_self"];

const conversationalOnboardingTaskOrderWithoutCalendar =
  conversationalOnboardingTaskOrder.filter(
    (task) => task !== "hold_next_free_hour",
  );

interface InstalledAppPlugin {
  plugin: { name?: string };
}

export function getConversationalOnboardingMessagingPluginNames(
  accountType: string,
): ConversationalOnboardingPluginName[] {
  return Array.from(
    new Set(
      conversationalOnboardingTaskOrder.flatMap((task) => {
        const pluginName = getConversationalOnboardingTaskPluginName(
          task,
          accountType,
        );
        return pluginName == null ? [] : [pluginName];
      }),
    ),
  );
}

export function mapConversationalOnboardingTasksToAppPlugins(
  accountType: string,
  installedPlugins: InstalledAppPlugin[] | null | undefined,
): Map<ConversationalOnboardingTaskId, InstalledAppPlugin> | null {
  if (installedPlugins == null) return null;
  const result = new Map<ConversationalOnboardingTaskId, InstalledAppPlugin>();
  for (const task of conversationalOnboardingTaskOrder) {
    const pluginName = getConversationalOnboardingTaskPluginName(
      task,
      accountType,
    );
    const match = installedPlugins.find(
      (entry) => entry.plugin.name === pluginName,
    );
    if (match != null) result.set(task, match);
  }
  return result;
}

export function getAvailableConversationalOnboardingTasks(
  accountType: string,
  plan: unknown,
): ConversationalOnboardingTaskId[] {
  return accountType === "google" &&
    (plan === PlanType.FREE || plan === PlanType.GO)
    ? conversationalOnboardingTaskOrderWithoutCalendar
    : conversationalOnboardingTaskOrder;
}
