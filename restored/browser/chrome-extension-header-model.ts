// Restored from ref/webview/assets/header-CT44CGhD.js
// Data shaping helpers for Chrome extension recent tasks.
import React from "react";
import {
  getLatestTurn,
  getThreadTitle,
  shouldHideSubAgentThread,
} from "../boundaries/use-host-config.facade";
import { useIsBackgroundSubagentsEnabled } from "../utils/use-is-background-subagents-enabled";
import { recentTaskMessages } from "./chrome-extension-header-messages";
import type {
  HeaderCloudTask,
  HeaderEnvironment,
  LocalConversation,
  RecentTask,
} from "./chrome-extension-header-types";
import type { PendingWorktree } from "../threads/pending-worktree-store/types";

type MessageDescriptor = {
  defaultMessage: string;
  description?: string;
  id: string;
};

export function useMergedRecentTasks({
  envForFilter,
  localConversations,
  pendingWorktrees,
  tasks,
}: {
  envForFilter?: HeaderEnvironment | null;
  localConversations: LocalConversation[];
  pendingWorktrees: PendingWorktree[];
  tasks: HeaderCloudTask[];
}): RecentTask[] {
  const isBackgroundSubagentsEnabled = useIsBackgroundSubagentsEnabled();

  return React.useMemo(
    () =>
      mergeRecentTasks({
        envForFilter,
        isBackgroundSubagentsEnabled,
        localConversations,
        pendingWorktrees,
        tasks,
      }),
    [
      envForFilter,
      isBackgroundSubagentsEnabled,
      localConversations,
      pendingWorktrees,
      tasks,
    ],
  );
}

export function mergeRecentTasks({
  envForFilter,
  isBackgroundSubagentsEnabled,
  localConversations,
  pendingWorktrees,
  tasks,
}: {
  envForFilter?: HeaderEnvironment | null;
  isBackgroundSubagentsEnabled: boolean;
  localConversations: LocalConversation[];
  pendingWorktrees: PendingWorktree[];
  tasks: HeaderCloudTask[];
}): RecentTask[] {
  const seenRemoteTaskIds = new Set<string>();
  const remoteTasks = tasks.flatMap((task): RecentTask[] => {
    const taskId = getCloudTaskId(task);
    if (!taskId || seenRemoteTaskIds.has(taskId)) return [];
    if (
      envForFilter?.label &&
      task.task_status_display?.environment_label !== envForFilter.label
    ) {
      return [];
    }
    seenRemoteTaskIds.add(taskId);
    return [
      {
        kind: "remote",
        key: `remote:${taskId}`,
        at: getCloudTaskSortTimeMs(task),
        task,
      },
    ];
  });
  const localTasks = localConversations
    .filter(
      (conversation) =>
        !shouldHideLocalConversation(
          conversation,
          isBackgroundSubagentsEnabled,
        ),
    )
    .map(
      (conversation): RecentTask => ({
        kind: "local",
        key: `local:${conversation.id}`,
        at: getLocalConversationSortTimeMs(conversation),
        conversation,
      }),
    );
  const pendingTasks = pendingWorktrees.map(
    (pendingWorktree): RecentTask => ({
      kind: "pending-worktree",
      key: `pending-worktree:${pendingWorktree.id}`,
      at: pendingWorktree.createdAt,
      pendingWorktree,
    }),
  );

  return [...remoteTasks, ...localTasks, ...pendingTasks].sort(
    (left, right) => right.at - left.at,
  );
}

export function filterRecentTasksForQuery(
  tasks: RecentTask[],
  query: string,
): RecentTask[] {
  if (query.length === 0) return tasks;
  return tasks.filter((task) => {
    switch (task.kind) {
      case "remote":
        return includesSearchText(getCloudTaskTitle(task.task), query);
      case "local":
        return includesSearchText(
          getLocalConversationTitle(task.conversation),
          query,
        );
      case "pending-worktree":
        return includesSearchText(
          getPendingWorktreeSearchTitle(task.pendingWorktree),
          query,
        );
    }
  });
}

export function filterLocalConversationsForQuery(
  conversations: LocalConversation[],
  query: string,
): LocalConversation[] {
  if (query.length === 0) return conversations;
  return conversations.filter((conversation) =>
    includesSearchText(getLocalConversationTitle(conversation), query),
  );
}

export function isVisibleInlineRecentTask(task: RecentTask): boolean {
  switch (task.kind) {
    case "remote":
      return (
        task.task.has_unread_turn === true || isCloudTaskInProgress(task.task)
      );
    case "local":
      return (
        task.conversation.hasUnreadTurn === true ||
        isLocalConversationActive(task.conversation)
      );
    case "pending-worktree":
      return true;
  }
}

export function isCloudTaskInProgress(task: HeaderCloudTask): boolean {
  const status =
    task.task_status_display?.latest_turn_status_display?.turn_status;
  return status === "in_progress" || status === "pending";
}

export function isLocalConversationActive(
  conversation: LocalConversation,
): boolean {
  if (conversation.hasUnreadTurn === true) return true;
  const latestTurn = getLatestTurn(conversation) as
    | {
        status?: string | null;
      }
    | null
    | undefined;
  const status = latestTurn?.status;
  return (
    status === "in_progress" || status === "pending" || status === "running"
  );
}

export function shouldHideLocalConversation(
  conversation: LocalConversation,
  isBackgroundSubagentsEnabled: boolean,
): boolean {
  return Boolean(
    shouldHideSubAgentThread(conversation, isBackgroundSubagentsEnabled),
  );
}

export function getCloudTaskId(task: HeaderCloudTask): string | null {
  return task.id ?? task.task_id ?? null;
}

export function getCloudTaskTitle(task: HeaderCloudTask): string | null {
  const title = task.title?.trim();
  return title && title.length > 0 ? title : null;
}

export function getCloudTaskStatus(task: HeaderCloudTask): string | null {
  return (
    task.task_status_display?.latest_turn_status_display?.turn_status ?? null
  );
}

export function getCloudTaskSortTimeMs(task: HeaderCloudTask): number {
  return toTimestampMs(task.updated_at ?? task.created_at ?? 0);
}

export function getLocalConversationSortTimeMs(
  conversation: LocalConversation,
): number {
  const timestamp =
    conversation.recencyAt ?? conversation.updatedAt ?? conversation.createdAt;
  return Number.isFinite(timestamp) ? timestamp : 0;
}

export function getLocalConversationTitle(
  conversation: LocalConversation,
): string | null {
  const titleFromHostConfig = getThreadTitle(conversation);
  if (typeof titleFromHostConfig === "string" && titleFromHostConfig.trim()) {
    return titleFromHostConfig.trim();
  }
  const directTitle = conversation.title?.trim();
  if (directTitle) return directTitle;
  const name = conversation.name;
  if (typeof name === "string" && name.trim()) return name.trim();
  return null;
}

export function getPendingWorktreeTitle(
  pendingWorktree: PendingWorktree,
  formatMessage: (descriptor: MessageDescriptor) => string,
): string {
  const label = pendingWorktree.label?.trim();
  if (label) return label;
  if (pendingWorktree.phase === "failed") {
    return formatMessage(recentTaskMessages.worktreeFailed);
  }
  return formatMessage(recentTaskMessages.loadingWorktree);
}

export function getPendingWorktreeSearchTitle(
  pendingWorktree: PendingWorktree,
): string | null {
  return (
    pendingWorktree.label?.trim() ?? pendingWorktree.prompt?.trim() ?? null
  );
}

export function getEnvironmentId(environment: HeaderEnvironment): string {
  return environment.id ?? environment.environment_id ?? environment.label;
}

export function isNotFoundError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "status" in error &&
    (error as { status?: unknown }).status === 404
  );
}

function includesSearchText(value: string | null, query: string): boolean {
  return typeof value === "string" && value.toLowerCase().includes(query);
}

function toTimestampMs(timestamp: number): number {
  if (!Number.isFinite(timestamp) || timestamp <= 0) return 0;
  return timestamp < 1_000_000_000_000 ? timestamp * 1000 : timestamp;
}
