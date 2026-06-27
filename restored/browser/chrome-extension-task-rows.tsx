// Restored from ref/webview/assets/header-CT44CGhD.js
// Recent-task row components used by the Chrome extension header.
import type { ReactNode } from "react";
import clsx from "clsx";
import { CloudIcon } from "../icons/cloud-icon";
import { HistoryIcon } from "../icons/history-icon";
import { WorktreeIcon } from "../icons/worktree-icon";
import { XIcon } from "../icons/x-icon";
import { formatRelativeDateTime } from "../utils/format-relative-date-time";
import type { PendingWorktree } from "../threads/pending-worktree-store/types";
import { Button } from "../ui/button";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { recentTaskMessages } from "./chrome-extension-header-messages";
import {
  getCloudTaskId,
  getCloudTaskSortTimeMs,
  getCloudTaskStatus,
  getCloudTaskTitle,
  getLocalConversationTitle,
  getPendingWorktreeTitle,
} from "./chrome-extension-header-model";
import type {
  HeaderCloudTask,
  LocalConversation,
  RecentTask,
} from "./chrome-extension-header-types";

export function RecentTaskRow({
  isActive,
  item,
  onArchivePendingWorktree,
  onClose,
  onNavigate,
  useStableTrailingRail = false,
}: {
  isActive: boolean;
  item: RecentTask;
  onArchivePendingWorktree: (pendingWorktreeId: string) => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
  useStableTrailingRail?: boolean;
}): JSX.Element {
  switch (item.kind) {
    case "remote":
      return (
        <CloudTaskRow
          task={item.task}
          isActive={isActive}
          onClose={onClose}
          onNavigate={onNavigate}
          useStableTrailingRail={useStableTrailingRail}
        />
      );
    case "local":
      return (
        <LocalConversationRow
          conversation={item.conversation}
          isActive={isActive}
          onClose={onClose}
          onNavigate={onNavigate}
          useStableTrailingRail={useStableTrailingRail}
        />
      );
    case "pending-worktree":
      return (
        <PendingWorktreeRow
          pendingWorktree={item.pendingWorktree}
          onArchive={() => onArchivePendingWorktree(item.pendingWorktree.id)}
          onClose={onClose}
          onNavigate={onNavigate}
          useStableTrailingRail={useStableTrailingRail}
        />
      );
  }
}

export function CloudTaskRow({
  isActive = false,
  onClose,
  onNavigate,
  task,
  useStableTrailingRail = false,
}: {
  isActive?: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  task: HeaderCloudTask;
  useStableTrailingRail?: boolean;
}): JSX.Element {
  const taskId = getCloudTaskId(task);
  const title = getCloudTaskTitle(task);
  const status = getCloudTaskStatus(task);
  const environmentLabel = task.task_status_display?.environment_label;
  const timestamp = getCloudTaskSortTimeMs(task);
  const meta = [environmentLabel, status].filter(Boolean).join(" / ");

  return (
    <TaskNavigationRow
      active={isActive}
      icon={<CloudIcon className="icon-xs" />}
      title={
        title ?? <FormattedMessage {...recentTaskMessages.unknownTaskTitle} />
      }
      meta={meta || undefined}
      time={timestamp}
      unread={task.has_unread_turn === true}
      useStableTrailingRail={useStableTrailingRail}
      onClick={() => {
        if (taskId) onNavigate(`/remote/${taskId}`);
        onClose();
      }}
    />
  );
}

export function LocalConversationRow({
  conversation,
  isActive = false,
  onClose,
  onNavigate,
  useStableTrailingRail = false,
}: {
  conversation: LocalConversation;
  isActive?: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  useStableTrailingRail?: boolean;
}): JSX.Element {
  const timestamp = conversation.recencyAt ?? conversation.updatedAt;

  return (
    <TaskNavigationRow
      active={isActive}
      icon={<HistoryIcon className="icon-xs" />}
      title={<LocalConversationTitle conversation={conversation} />}
      time={timestamp}
      unread={conversation.hasUnreadTurn === true}
      useStableTrailingRail={useStableTrailingRail}
      onClick={() => {
        onNavigate(`/local/${conversation.id}`);
        onClose();
      }}
    />
  );
}

export function PendingWorktreeRow({
  onArchive,
  onClose,
  onNavigate,
  pendingWorktree,
  useStableTrailingRail = false,
}: {
  onArchive: () => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
  pendingWorktree: PendingWorktree;
  useStableTrailingRail?: boolean;
}): JSX.Element {
  const intl = useIntl();
  const title = getPendingWorktreeTitle(pendingWorktree, intl.formatMessage);
  const status =
    pendingWorktree.phase === "failed"
      ? pendingWorktree.errorMessage
      : pendingWorktree.phase;

  return (
    <TaskNavigationRow
      icon={<WorktreeIcon className="icon-xs" />}
      title={title}
      meta={typeof status === "string" ? status : undefined}
      time={pendingWorktree.createdAt}
      unread={pendingWorktree.needsAttention}
      useStableTrailingRail={useStableTrailingRail}
      trailing={
        pendingWorktree.phase === "failed" ? (
          <Button
            color="ghost"
            size="iconSm"
            aria-label="Dismiss"
            onClick={(event) => {
              event.stopPropagation();
              onArchive();
            }}
          >
            <XIcon className="icon-2xs" />
          </Button>
        ) : null
      }
      onClick={() => {
        onNavigate(`/worktree-init-v2/${pendingWorktree.id}`);
        onClose();
      }}
    />
  );
}

export function LocalConversationTitle({
  conversation,
}: {
  conversation: LocalConversation;
}): JSX.Element {
  const title = getLocalConversationTitle(conversation);
  if (title) return <>{title}</>;
  return <FormattedMessage {...recentTaskMessages.unknownTaskTitle} />;
}

function TaskNavigationRow({
  active = false,
  icon,
  meta,
  onClick,
  time,
  title,
  trailing,
  unread = false,
  useStableTrailingRail = false,
}: {
  active?: boolean;
  icon: ReactNode;
  meta?: ReactNode;
  onClick: () => void;
  time?: number | null;
  title: ReactNode;
  trailing?: ReactNode;
  unread?: boolean;
  useStableTrailingRail?: boolean;
}): JSX.Element {
  return (
    <button
      type="button"
      className={clsx(
        "group/task-row no-drag flex min-h-10 w-full items-center gap-2 rounded-lg px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-left text-sm outline-hidden hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
        active && "bg-token-list-hover-background",
      )}
      onClick={onClick}
    >
      <span className="text-token-text-tertiary">{icon}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="min-w-0 truncate text-token-foreground">{title}</span>
        {meta ? (
          <span className="min-w-0 truncate text-xs text-token-description-foreground">
            {meta}
          </span>
        ) : null}
      </span>
      <span
        className={clsx(
          "flex shrink-0 items-center gap-1 text-xs text-token-description-foreground",
          useStableTrailingRail && "min-w-[var(--task-row-trailing-inset)]",
        )}
      >
        {unread ? (
          <span
            className="size-1.5 rounded-full bg-[var(--vscode-textLink-foreground)]"
            aria-hidden
          />
        ) : null}
        {time != null ? <RelativeTaskTime timestampMs={time} /> : null}
        {trailing}
      </span>
    </button>
  );
}

function RelativeTaskTime({
  timestampMs,
}: {
  timestampMs: number;
}): JSX.Element | null {
  if (!Number.isFinite(timestampMs) || timestampMs <= 0) return null;
  return (
    <>
      {formatRelativeDateTime({
        dateString: new Date(timestampMs).toISOString(),
      })}
    </>
  );
}
