// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Activity-stream dispatcher for the Codex app-control thread tools: picks the
// right status label (and, for create_thread, the result card), and makes the
// read/send-message rows navigable to the referenced thread (localConversation
// domain).
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { vscodeApiF as codexHost } from "../boundaries/vscode-api";
import {
  AnimatedActivityLabel,
  CodexThreadToolIcon,
  conversationRoutePath,
  hostConversationRoutePath,
  parseThreadId,
} from "../boundaries/onboarding-commons-externals.facade";
import { appControlToolCallMessages } from "./app-control-tool-call-messages";

type AppControlToolCallMessageKey = keyof typeof appControlToolCallMessages;
import {
  threadsHandoffStatusParamsSchema,
  threadsOperationParamsSchema,
  threadsThreadIdParamsSchema,
  threadsCreateEnvironmentSchema,
  threadsHandoffTargetSchema,
  threadsTargetReferenceSchema,
} from "./app-control-tool-schemas";
import {
  HANDOFF_THREAD_TOOL_NAME,
  GET_HANDOFF_STATUS_TOOL_NAME,
  FORK_THREAD_TOOL_NAME,
  CREATE_THREAD_TOOL_NAME,
  SEND_MESSAGE_TO_THREAD_TOOL_NAME,
  LIST_THREADS_TOOL_NAME,
  READ_THREAD_TOOL_NAME,
  SET_THREAD_PINNED_TOOL_NAME,
  SET_THREAD_ARCHIVED_TOOL_NAME,
  SET_THREAD_TITLE_TOOL_NAME,
} from "./codex-app-tool-names";
import { CreatedThreadCard } from "./created-thread-card";
import { ThreadHandoffToolCall } from "./thread-handoff-tool-call-row";
import { isCurrentLocationCodexPage } from "../utils/is-codex-page-route";

type ToolCallContentItem = { type: string; text?: string };

type AppControlToolCallItem = {
  tool: string;
  arguments: unknown;
  callId: string;
  completed: boolean;
  success?: boolean;
  contentItems?: ToolCallContentItem[] | null;
};

type AppControlToolCallVariant = "row" | "summary-text" | "trailing";

export function renderHandoffToolCall(
  item: AppControlToolCallItem,
  variant: AppControlToolCallVariant,
): ReactNode {
  return threadsHandoffStatusParamsSchema.safeParse(item.arguments).success ? (
    <ThreadHandoffToolCall item={item} variant={variant} />
  ) : null;
}

export function getHandoffToolCallSummaryKey(
  item: AppControlToolCallItem,
): string | null {
  const parsed = threadsHandoffStatusParamsSchema.safeParse(item.arguments);
  return parsed.success
    ? JSON.stringify([
        parsed.data.threadId,
        parsed.data.destinationHostId ?? null,
      ])
    : null;
}

export function getHandoffStatusToolCallSummaryKey(
  item: AppControlToolCallItem,
): string | null {
  const parsed = threadsOperationParamsSchema.safeParse(item.arguments);
  return parsed.success ? parsed.data.operationId : null;
}

function parseCreatedThreadResult(
  contentItems: ToolCallContentItem[] | null,
): { threadId: string } | { pendingWorktreeId: string } | null {
  const text = contentItems?.find((item) => item.type === "inputText")?.text;
  if (text == null) return null;
  try {
    const parsed = threadsTargetReferenceSchema.safeParse(JSON.parse(text));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

function getAppControlToolCallMessageKey(
  item: AppControlToolCallItem,
): AppControlToolCallMessageKey | null {
  switch (item.tool) {
    case FORK_THREAD_TOOL_NAME: {
      const parsed = threadsCreateEnvironmentSchema.safeParse(item.arguments);
      if (!parsed.success) return null;
      return parsed.data.environment?.type === "worktree"
        ? item.completed
          ? "threadsForkInWorktreeCompleted"
          : "threadsForkInWorktreeActive"
        : item.completed
          ? "threadsForkCompleted"
          : "threadsForkActive";
    }
    case CREATE_THREAD_TOOL_NAME: {
      const parsed = threadsHandoffTargetSchema.safeParse(item.arguments);
      if (!parsed.success) return null;
      return parsed.data.target.type === "project" &&
        parsed.data.target.environment?.type === "worktree"
        ? item.completed
          ? "threadsCreateInWorktreeCompleted"
          : "threadsCreateInWorktreeActive"
        : item.completed
          ? "threadsCreateCompleted"
          : "threadsCreateActive";
    }
    case LIST_THREADS_TOOL_NAME:
      return item.completed ? "threadsListCompleted" : "threadsListActive";
    case READ_THREAD_TOOL_NAME:
      return item.completed ? "threadsReadCompleted" : "threadsReadActive";
    case SEND_MESSAGE_TO_THREAD_TOOL_NAME:
      return item.completed
        ? "threadsSendMessageCompleted"
        : "threadsSendMessageActive";
    case GET_HANDOFF_STATUS_TOOL_NAME:
      return threadsOperationParamsSchema.safeParse(item.arguments).success
        ? item.completed
          ? "threadsHandoffStatusCompleted"
          : "threadsHandoffStatusActive"
        : null;
    case SET_THREAD_PINNED_TOOL_NAME:
      return item.completed
        ? "threadsSetPinnedCompleted"
        : "threadsSetPinnedActive";
    case SET_THREAD_ARCHIVED_TOOL_NAME:
      return item.completed
        ? "threadsSetArchivedCompleted"
        : "threadsSetArchivedActive";
    case SET_THREAD_TITLE_TOOL_NAME:
      return item.completed
        ? "threadsSetTitleCompleted"
        : "threadsSetTitleActive";
    default:
      return null;
  }
}

export function renderAppControlToolCall(
  item: AppControlToolCallItem,
  variant: AppControlToolCallVariant,
): ReactNode {
  const messageKey = getAppControlToolCallMessageKey(item);
  if (messageKey == null) return null;

  const createdThreadResult =
    item.tool === CREATE_THREAD_TOOL_NAME &&
    item.completed &&
    item.success === true &&
    variant === "row"
      ? parseCreatedThreadResult(item.contentItems ?? null)
      : null;
  if (createdThreadResult != null) {
    return <CreatedThreadCard result={createdThreadResult} />;
  }

  const threadReference =
    variant === "row" &&
    (item.tool === READ_THREAD_TOOL_NAME ||
      item.tool === SEND_MESSAGE_TO_THREAD_TOOL_NAME)
      ? threadsThreadIdParamsSchema.safeParse(item.arguments)
      : null;
  const navigableThreadId =
    threadReference?.success === true ? threadReference.data.threadId : null;

  const className = clsx(
    "text-size-chat min-w-0 items-center",
    variant === "summary-text" ? "inline" : "flex gap-2",
    variant === "row" && "my-1",
    variant === "row"
      ? "text-token-conversation-summary-leading"
      : "text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground",
    navigableThreadId != null &&
      "group cursor-interaction rounded-md text-left focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none",
  );

  const content = (
    <>
      {variant === "summary-text" ? null : (
        <CodexThreadToolIcon
          className={clsx(
            "icon-xs shrink-0 text-token-text-secondary",
            navigableThreadId != null && "group-hover:!text-token-foreground",
          )}
        />
      )}
      <AnimatedActivityLabel
        active={!item.completed}
        className={clsx(
          variant !== "summary-text" && "min-w-0 truncate",
          navigableThreadId != null && "group-hover:!text-token-foreground",
        )}
      >
        <FormattedMessage {...appControlToolCallMessages[messageKey]} />
      </AnimatedActivityLabel>
    </>
  );

  if (navigableThreadId != null) {
    const threadId = parseThreadId(navigableThreadId);
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          codexHost.dispatchHostMessage({
            type: "navigate-to-route",
            path: isCurrentLocationCodexPage()
              ? hostConversationRoutePath(threadId)
              : conversationRoutePath(threadId),
          });
        }}
      >
        {content}
      </button>
    );
  }

  return <span className={className}>{content}</span>;
}
