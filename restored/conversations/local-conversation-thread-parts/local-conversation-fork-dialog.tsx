// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Dialog and controller for forking a local conversation from an older turn.
import React from "react";
import { GitBranchIcon, initGitBranchIcon } from "../../icons/git-branch-icon";
import { once } from "../../runtime/commonjs-interop";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  DialogBody,
  DialogFooter as DialogFooterActions,
  DialogHeader,
  DialogLayout as AppDialog,
  initAppDialog,
  initDialogLayoutComponents,
} from "../../ui/dialog-layout";
import { useScope } from "../../runtime/app-scope-hooks";
import {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import {
  appLogger as logger,
  initAppLoggerRuntime,
} from "../../runtime/app-logger";
import { initHostWorktreeContextRuntime } from "../../worktree/host-worktree-context";
import { initLocalEnvironmentConfigRuntime } from "../../runtime/local-environment-config-runtime";
import {
  initLocalConversationNavigationRuntime,
  toastSignal,
  useNavigate,
} from "../local-conversation-route-runtime";
import {
  initOutputArtifactRuntime,
  normalizeWorkspacePath,
} from "../output-artifact-runtime";
import {
  createPendingWorktree,
  forkThreadMessages,
  initConversationForkControllerRuntime,
  initConversationForkDialogUiRuntime,
  LocalForkIcon,
  recordPendingWorktreeForkSourceState,
  useGitRootQuery,
  useResolvedLocalEnvironmentConfigPath,
  WorktreeForkIcon,
} from "./conversation-fork-runtime";
import { isRecentLocalEnvironmentAction } from "./local-environment-recent-actions";
import {
  initIntlRuntime,
  useIntl,
  FormattedMessage,
} from "../../vendor/react-intl";

type ForkFromOlderTurnDialogProps = {
  canForkIntoWorktree: boolean;
  isSubmitting: boolean;
  isWorktreeThread: boolean;
  onClose: () => void;
  onForkIntoLocal: () => void;
  onForkIntoWorktree: () => void;
  open: boolean;
  showWorktreeOption: boolean;
};

export type ForkFromOlderTurnDialogControllerProps = {
  conversationCwd: string | null | undefined;
  conversationId: string;
  conversationLatestCollaborationMode: unknown;
  hostId: string;
  onClose: () => void;
  onForkIntoLocal: () => Promise<unknown> | unknown;
  turnId: string;
};

function ForkFromOlderTurnDialog({
  canForkIntoWorktree,
  isSubmitting,
  isWorktreeThread,
  onClose,
  onForkIntoLocal,
  onForkIntoWorktree,
  open,
  showWorktreeOption,
}: ForkFromOlderTurnDialogProps) {
  let handleOpenChange = (nextOpen: boolean) => {
    nextOpen || onClose();
  };
  let localForkIcon = isWorktreeThread ? (
      <WorktreeForkIcon className="icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100" />
    ) : (
      <LocalForkIcon className="icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100" />
    ),
    localForkMessageDescriptor = isWorktreeThread
      ? forkThreadMessages.forkIntoSameWorktree
      : forkThreadMessages.forkIntoLocal;

  return (
    <AppDialog
      open={open}
      showDialogClose={false}
      size="compact"
      onOpenChange={handleOpenChange}
    >
      <DialogBody className="gap-4">
        <DialogHeader
          icon={<GitBranchIcon className="icon-sm text-token-foreground" />}
          title={
            <FormattedMessage
              id="localConversation.forkFromOlderTurnDialog.title"
              defaultMessage="Fork from earlier message?"
              description="Title for the confirmation dialog shown when forking from a non-latest user message"
            />
          }
          subtitle={
            <FormattedMessage
              id="localConversation.forkFromOlderTurnDialog.subtitle"
              defaultMessage="This keeps your current files and worktree state as-is. If later turns changed the filesystem, the new fork may not match what is currently on disk."
              description="Subtitle for the confirmation dialog shown when forking from a non-latest user message"
            />
          }
        />
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className="group flex w-full items-center gap-3 rounded-lg px-[var(--padding-row-x)] py-2 text-left text-token-foreground outline-hidden enabled:cursor-interaction enabled:hover:bg-token-list-hover-background enabled:focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSubmitting}
            onClick={onForkIntoLocal}
          >
            {localForkIcon}
            <span className="flex min-w-0 flex-col gap-0.5">
              <span className="text-sm font-medium electron:text-base">
                <FormattedMessage {...localForkMessageDescriptor} />
              </span>
              <span className="text-xs whitespace-normal text-token-description-foreground">
                {isWorktreeThread ? (
                  <FormattedMessage
                    id="localConversation.forkFromOlderTurnDialog.local.sameWorktreeDescription"
                    defaultMessage="Continue from this message in the same worktree"
                    description="Description for forking an older message within the same worktree"
                  />
                ) : (
                  <FormattedMessage
                    id="localConversation.forkFromOlderTurnDialog.local.description"
                    defaultMessage="Continue from this message in a new local chat"
                    description="Description for forking an older message locally"
                  />
                )}
              </span>
            </span>
          </button>
          {showWorktreeOption ? (
            <button
              type="button"
              className="group flex w-full items-center gap-3 rounded-lg px-[var(--padding-row-x)] py-2 text-left text-token-foreground outline-hidden enabled:cursor-interaction enabled:hover:bg-token-list-hover-background enabled:focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isSubmitting || !canForkIntoWorktree}
              onClick={onForkIntoWorktree}
            >
              <WorktreeForkIcon className="icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-sm font-medium electron:text-base">
                  <FormattedMessage {...forkThreadMessages.forkIntoWorktree} />
                </span>
                <span className="text-xs whitespace-normal text-token-description-foreground">
                  {canForkIntoWorktree ? (
                    <FormattedMessage
                      id="localConversation.forkFromOlderTurnDialog.worktree.description"
                      defaultMessage="Continue from this message in a new worktree"
                      description="Description for forking an older message into a new worktree"
                    />
                  ) : (
                    <FormattedMessage
                      {...forkThreadMessages.forkThreadRequiresGitRepo}
                    />
                  )}
                </span>
              </span>
            </button>
          ) : null}
        </div>
        <DialogFooterActions>
          <Button color="secondary" disabled={isSubmitting} onClick={onClose}>
            <FormattedMessage
              id="localConversation.forkFromOlderTurnDialog.cancel"
              defaultMessage="Cancel"
              description="Cancel button label for the older-turn fork confirmation dialog"
            />
          </Button>
        </DialogFooterActions>
      </DialogBody>
    </AppDialog>
  );
}

export function ForkFromOlderTurnDialogController({
  conversationCwd,
  conversationId,
  conversationLatestCollaborationMode,
  hostId,
  onClose,
  onForkIntoLocal,
  turnId,
}: ForkFromOlderTurnDialogControllerProps) {
  let scope = useScope(appScope),
    intl = useIntl(),
    navigate = useNavigate(),
    [isSubmitting, setIsSubmitting] = React.useState(false),
    isWorktreeThread = isRecentLocalEnvironmentAction(
      conversationCwd ? normalizeWorkspacePath(conversationCwd) : null,
      hostId,
    ),
    { gitRoot } = useGitRootQuery(conversationCwd, {
      enabled: conversationCwd != null,
      hostId,
      source: "local_conversation_thread",
    }),
    canForkIntoWorktree = gitRoot != null,
    { resolvedConfigPath } = useResolvedLocalEnvironmentConfigPath({
      hostId,
      workspaceRoot: conversationCwd,
    }),
    closeIfIdle = () => {
      isSubmitting || onClose();
    },
    forkIntoLocal = async () => {
      setIsSubmitting(true);
      try {
        await onForkIntoLocal();
        onClose();
      } finally {
        setIsSubmitting(false);
      }
    },
    forkIntoWorktree = async () => {
      if (!canForkIntoWorktree || conversationCwd == null) {
        scope
          .get(toastSignal)
          .danger(
            intl.formatMessage(forkThreadMessages.forkThreadRequiresGitRepo),
          );
        return;
      }
      setIsSubmitting(true);
      try {
        let pendingWorktreeId = createPendingWorktree({
          hostId,
          label: intl.formatMessage(
            forkThreadMessages.forkPendingWorktreeTitle,
          ),
          sourceWorkspaceRoot: conversationCwd,
          startingState: {
            type: "working-tree",
          },
          localEnvironmentConfigPath: resolvedConfigPath,
          launchMode: "fork-conversation",
          prompt: intl.formatMessage(
            forkThreadMessages.forkPendingWorktreePrompt,
          ),
          startConversationParamsInput: null,
          sourceConversationId: conversationId,
          sourceCollaborationMode: conversationLatestCollaborationMode,
          targetTurnId: turnId,
        });
        recordPendingWorktreeForkSourceState(scope, {
          pendingWorktreeId,
          sourceConversationId: conversationId,
          sourceWorkspaceRoot: conversationCwd,
        });
        onClose();
        navigate(`/worktree-init-v2/${pendingWorktreeId}`);
      } catch (error) {
        logger.error("Error creating worktree fork from turn", {
          safe: {},
          sensitive: {
            error,
          },
        });
        scope
          .get(toastSignal)
          .danger(intl.formatMessage(forkThreadMessages.forkThreadError));
        throw error;
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <ForkFromOlderTurnDialog
      canForkIntoWorktree={canForkIntoWorktree}
      isSubmitting={isSubmitting}
      isWorktreeThread={isWorktreeThread}
      open={true}
      onClose={closeIfIdle}
      onForkIntoLocal={() => {
        forkIntoLocal();
      }}
      onForkIntoWorktree={() => {
        forkIntoWorktree();
      }}
      showWorktreeOption={canForkIntoWorktree}
    />
  );
}

const initForkFromOlderTurnDialogChunk = once(() => {
  initIntlRuntime();
  initButtonComponentPrimitives();
  initAppDialog();
  initDialogLayoutComponents();
  initGitBranchIcon();
  initConversationForkDialogUiRuntime();
});

export const initForkFromOlderTurnDialogControllerChunk = once(() => {
  initAppScopeSignalRuntime();
  initOutputArtifactRuntime();
  initIntlRuntime();
  initLocalEnvironmentConfigRuntime();
  initLocalConversationNavigationRuntime();
  initConversationForkControllerRuntime();
  initAppLoggerRuntime();
  initForkFromOlderTurnDialogChunk();
  initHostWorktreeContextRuntime();
});
