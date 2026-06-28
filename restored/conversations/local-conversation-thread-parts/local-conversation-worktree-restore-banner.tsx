// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Missing managed-worktree restore banner for local conversation thread frames.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  appLogger as logger,
  initAppLoggerRuntime,
} from "../../runtime/app-logger";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import {
  initAppServerMutationRuntime,
  useMutation,
  useQueryClient,
} from "../../runtime/app-server-mutation-runtime";
import {
  conversationHostIdSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";
import {
  environmentTerminalControllerService,
  initEnvironmentTerminalRuntime,
} from "../../runtime/environment-terminal-runtime";
import { initGitBranchQueryRuntime } from "../../runtime/git-query-runtime";
import {
  getHostConfigKey,
  initHostConfigRuntime,
  initLocalHostConstantsRuntime,
  useHostConfigById,
  type HostConfigRecord,
} from "../../runtime/host-config-runtime";
import { useHostMutation } from "../../runtime/host-mutation-runtime";
import {
  hostConnectionStatusSignal,
  initLocalConversationComposerRuntime,
} from "../../composer/local-conversation-composer-runtime";
import {
  initToastSignalRuntime,
  toastSignal,
} from "../local-conversation-route-runtime";
import { normalizeWorkspacePath } from "../output-artifact-runtime";
import { initPathHelpersRuntime } from "../../runtime/path-helpers-runtime";
import { initVscodeBridgeRuntime } from "../../runtime/platform-content-runtime";
import {
  checkManagedWorktree,
  getGitMetadataQueryKey,
  initGitMetadataQueryHelpersRuntime,
  initWorktreeCheckMutationRuntime,
  initWorktreeRestoreMutationRuntime,
  initWorktreeStatusQueryRuntime,
  SummaryPanelBanner,
  worktreeStatusQueryKey,
  worktreeStatusQuerySignal,
} from "../../worktree/worktree-restore-runtime";
import {
  initIntlRuntime,
  useIntl,
  FormattedMessage,
} from "../../vendor/react-intl";

type ConnectedLocalWorktreeRestoreBannerProps = {
  conversationId: string;
  cwd: string | null;
};

type WorktreeRestoreBannerProps = ConnectedLocalWorktreeRestoreBannerProps & {
  threadHostId: string;
};

type RestorableWorktreeStatus = {
  kind: "restorable";
  snapshot: {
    repoRoot: string;
  };
  worktreePath: string;
};

type WorktreeStatus =
  | RestorableWorktreeStatus
  | {
      kind: "gone" | "unavailable";
    }
  | {
      kind: string;
    }
  | null
  | undefined;

type WorktreeStatusQuery = {
  data?: WorktreeStatus;
  isError?: boolean;
};

type WorktreeRestoreScope = {
  get<TValue = unknown>(signal: unknown): TValue;
  query: {
    invalidate(queryKey: unknown, variables?: unknown, options?: unknown): void;
  };
};

export function ConnectedLocalWorktreeRestoreBanner({
  conversationId,
  cwd,
}: ConnectedLocalWorktreeRestoreBannerProps) {
  let threadHostId = useScopedValue<string | null>(
      conversationHostIdSignal,
      conversationId,
    ),
    hostConnectionStatus = useScopedValue<string | null>(
      hostConnectionStatusSignal,
      threadHostId,
    );

  if (
    threadHostId == null ||
    (threadHostId !== "local" && hostConnectionStatus !== "connected")
  ) {
    return null;
  }

  return (
    <WorktreeRestoreBanner
      conversationId={conversationId}
      cwd={cwd}
      threadHostId={threadHostId}
    />
  );
}

function WorktreeRestoreBanner({
  conversationId,
  cwd,
  threadHostId,
}: WorktreeRestoreBannerProps) {
  let scope = useScope(appScope),
    host = useHostConfigById<HostConfigRecord>(threadHostId),
    hostKey = getHostConfigKey(host),
    intl = useIntl(),
    queryClient = useQueryClient(),
    worktreeStatusQuery = useScopedValue<WorktreeStatusQuery>(
      worktreeStatusQuerySignal,
      conversationId,
    ),
    worktreeStatus = worktreeStatusQuery.data,
    isWorktreeStatusUnavailable =
      worktreeStatusQuery.isError || worktreeStatus?.kind === "unavailable",
    checkWorktreeMutation = useMutationForWorktreeCheck({
      conversationId,
      cwd,
      scope,
      threadHostId,
    });

  let restoreWorktreeMutation = useHostMutation("restore-worktree", host, {
    onSuccess: () => {
      logger.info("[worktree-restore] successfully restored");
      if (cwd != null) {
        scope.query.invalidate(
          worktreeStatusQueryKey,
          {
            conversationId,
            cwd: normalizeWorkspacePath(cwd),
            hostId: threadHostId,
          },
          {
            exact: true,
          },
        );
      }

      queryClient.invalidateQueries({
        queryKey: getGitMetadataQueryKey(hostKey),
      });
      queryClient.invalidateQueries({
        queryKey: ["git", "metadata", hostKey],
      });

      let sessionId =
        environmentTerminalControllerService.getSessionForConversation(
          conversationId,
        );
      if (sessionId != null && cwd != null) {
        environmentTerminalControllerService.attach({
          sessionId,
          conversationId,
          hostId: host.id,
          cwd,
          forceCwdSync: true,
        });
      }

      scope.get(toastSignal).success(
        intl.formatMessage({
          id: "worktreeRestoreBanner.restore.success",
          defaultMessage: "Worktree restored",
          description: "Toast shown when a missing Codex worktree is restored",
        }),
      );
    },
    onError: (error: Error) => {
      let message = error.message;
      logger.debug("[worktree-restore] restore failed for", {
        safe: {},
        sensitive: {
          cwd: cwd ?? "unknown",
          message,
        },
      });
      scope.get(toastSignal).danger(
        intl.formatMessage(
          {
            id: "worktreeRestoreBanner.restore.error",
            defaultMessage: "Failed to restore worktree: {message}",
            description:
              "Toast shown when restoring a missing Codex worktree fails",
          },
          {
            message,
          },
        ),
      );
    },
  });

  if (
    worktreeStatus?.kind !== "restorable" &&
    worktreeStatus?.kind !== "gone" &&
    !isWorktreeStatusUnavailable
  ) {
    return null;
  }

  let title = isWorktreeStatusUnavailable ? (
      <FormattedMessage
        id="worktreeRestoreBanner.unavailable.title"
        defaultMessage="Couldn't check worktree status"
        description="Title for banner when Codex cannot verify whether a managed worktree exists"
      />
    ) : worktreeStatus?.kind === "gone" ? (
      <FormattedMessage
        id="worktreeRestoreBanner.missing.title"
        defaultMessage="Current working directory missing"
        description="Title for banner when the current working directory is missing and no snapshot exists"
      />
    ) : (
      <FormattedMessage
        id="worktreeRestoreBanner.title"
        defaultMessage="Worktree cleaned up"
        description="Title for banner when a Codex worktree was pruned but can be restored"
      />
    ),
    body = isWorktreeStatusUnavailable ? (
      <FormattedMessage
        id="worktreeRestoreBanner.unavailable.body"
        defaultMessage="Retry to verify this chat's working directory"
        description="Body text for banner shown when Codex cannot inspect a managed worktree"
      />
    ) : worktreeStatus?.kind === "gone" ? (
      <FormattedMessage
        id="worktreeRestoreBanner.missing.body"
        defaultMessage="This chat's working directory no longer exists"
        description="Body text for banner shown when the current working directory is missing and no snapshot exists"
      />
    ) : (
      <FormattedMessage
        id="worktreeRestoreBanner.body"
        defaultMessage="This chat's worktree was removed to save disk space"
        description="Body text for banner that offers to restore a missing worktree snapshot"
      />
    ),
    content = (
      <span className="flex min-w-0 items-center gap-2">
        <span className="min-w-0 truncate font-semibold text-token-foreground">
          {title}
        </span>
        <span className="hidden min-w-0 truncate text-token-description-foreground sm:inline">
          {body}
        </span>
      </span>
    ),
    customCtas =
      isWorktreeStatusUnavailable && cwd != null ? (
        <Button
          loading={
            checkWorktreeMutation.isPending || worktreeStatusQuery.isFetching
          }
          onClick={() => {
            checkWorktreeMutation.mutate(cwd);
          }}
        >
          <FormattedMessage
            id="worktreeRestoreBanner.retryCta"
            defaultMessage="Retry"
            description="Action to retry managed worktree inspection"
          />
        </Button>
      ) : worktreeStatus?.kind === "restorable" ? (
        <Button
          color="primary"
          loading={restoreWorktreeMutation.isPending}
          onClick={() => {
            restoreWorktreeMutation.mutateAsync({
              repoRoot: worktreeStatus.snapshot.repoRoot,
              worktreePath: worktreeStatus.worktreePath,
              conversationId,
              operationSource: "worktree_restore_banner",
            });
          }}
        >
          <FormattedMessage
            id="worktreeRestoreBanner.restoreCta"
            defaultMessage="Restore worktree"
            description="Primary call to action for restoring a missing worktree snapshot"
          />
        </Button>
      ) : null;

  return (
    <SummaryPanelBanner
      type={isWorktreeStatusUnavailable ? "error" : "info"}
      layout="horizontal"
      content={content}
      customCtas={customCtas}
    />
  );
}

function useMutationForWorktreeCheck({
  conversationId,
  scope,
  threadHostId,
}: {
  conversationId: string;
  cwd: string | null;
  scope: WorktreeRestoreScope;
  threadHostId: string;
}) {
  return useMutation({
    mutationFn: (nextCwd: string) =>
      checkManagedWorktree(scope, {
        conversationId,
        cwd: nextCwd,
        hostId: threadHostId,
      }),
  });
}

export const initWorktreeRestoreBannerChunk = once(() => {
  initAppServerMutationRuntime();
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initWorktreeStatusQueryRuntime();
  initButtonComponentPrimitives();
  initToastSignalRuntime();
  initGitBranchQueryRuntime();
  initWorktreeCheckMutationRuntime();
  initWorktreeRestoreMutationRuntime();
  initAppScopeSignalRuntime();
  initLocalHostConstantsRuntime();
  initHostConfigRuntime();
  initEnvironmentTerminalRuntime();
  initAppLoggerRuntime();
  initGitMetadataQueryHelpersRuntime();
  initVscodeBridgeRuntime();
  initLocalConversationComposerRuntime();
});
