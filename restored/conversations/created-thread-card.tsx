// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Result card rendered after a create_thread tool call succeeds: links to the
// newly created chat or, for worktree-backed threads, to the worktree setup
// route (localConversation domain).
import type { ReactNode } from "react";
import {
  useIntl,
  FormattedMessage,
  defineMessages,
} from "../vendor/react-intl";
import { vscodeApiF as codexHost } from "../boundaries/vscode-api";
import { NotePlusIcon } from "../icons/note-plus-icon";
import {
  ActivityResultCard,
  ActivityResultCardRow,
  ActivityResultCardAction,
  conversationRoutePath,
  worktreeSetupRoutePath,
  parseThreadId,
} from "../boundaries/onboarding-commons-externals.facade";

type CreatedThreadResult = { threadId: string } | { pendingWorktreeId: string };

type CreatedThreadCardProps = {
  result: CreatedThreadResult;
};

const createdThreadCardMessages = defineMessages({
  threadCreated: {
    id: "localConversation.appControlToolCall.threadCreated",
    defaultMessage: "Chat created",
    description: "Title for a card shown after a Codex chat is created.",
  },
  openCreatedThread: {
    id: "localConversation.appControlToolCall.openCreatedThread",
    defaultMessage: "Open chat",
    description: "Accessible label for opening a newly created Codex chat.",
  },
  openThread: {
    id: "localConversation.appControlToolCall.openThread",
    defaultMessage: "Open chat",
    description: "Button label for opening a newly created Codex chat.",
  },
  worktreeThreadQueued: {
    id: "localConversation.appControlToolCall.worktreeThreadQueued",
    defaultMessage: "Worktree chat queued",
    description:
      "Title for a card shown after a worktree-backed Codex chat is queued.",
  },
  openWorktreeSetup: {
    id: "localConversation.appControlToolCall.openWorktreeSetup",
    defaultMessage: "Open worktree setup",
    description:
      "Accessible label for opening setup for a queued worktree Codex thread.",
  },
  openSetup: {
    id: "localConversation.appControlToolCall.openSetup",
    defaultMessage: "Open setup",
    description:
      "Button label for opening setup for a queued worktree Codex thread.",
  },
});

export function CreatedThreadCard({
  result,
}: CreatedThreadCardProps): ReactNode {
  const intl = useIntl();
  const isPendingWorktree = "pendingWorktreeId" in result;
  const ariaLabel = intl.formatMessage(
    isPendingWorktree
      ? createdThreadCardMessages.openWorktreeSetup
      : createdThreadCardMessages.openCreatedThread,
  );

  const navigateToThread = () => {
    codexHost.dispatchHostMessage({
      type: "navigate-to-route",
      path: isPendingWorktree
        ? worktreeSetupRoutePath(result.pendingWorktreeId)
        : conversationRoutePath(parseThreadId(result.threadId)),
    });
  };

  const icon = (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
      <NotePlusIcon className="icon-sm" aria-hidden={true} />
    </span>
  );

  const title = (
    <FormattedMessage
      {...(isPendingWorktree
        ? createdThreadCardMessages.worktreeThreadQueued
        : createdThreadCardMessages.threadCreated)}
    />
  );

  const trailing = (
    <ActivityResultCardAction
      label={
        <FormattedMessage
          {...(isPendingWorktree
            ? createdThreadCardMessages.openSetup
            : createdThreadCardMessages.openThread)}
        />
      }
    />
  );

  return (
    <ActivityResultCard className="my-1">
      <button
        type="button"
        aria-label={ariaLabel}
        className="w-full cursor-interaction text-left hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset"
        onClick={navigateToThread}
      >
        <ActivityResultCardRow icon={icon} title={title} trailing={trailing} />
      </button>
    </ActivityResultCard>
  );
}
