// Restored from ref/webview/assets/worktree-init-v2-page-CAOv319r.js
// Pending worktree route UI and recovery flow.
import React, { type ReactNode } from "react";
import { Navigate, useParams } from "../vendor/react-router";
import {
  FormattedMessage,
  initIntlRuntime,
  type IntlShape,
  useIntl,
} from "../vendor/react-intl";
import { once } from "../runtime/commonjs-interop";
import { appLogger, initAppLoggerRuntime } from "../runtime/app-logger";
import { useScope } from "../runtime/app-scope-hooks";
import {
  appScopeRoot,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";
import {
  initLocalConversationNavigationRuntime,
  toastSignal,
  useLocation,
  useNavigate,
  type Navigate as NavigateFunction,
} from "../conversations/local-conversation-route-runtime";
import {
  initAppServerMutationRuntime,
  useMutation,
} from "../runtime/app-server-mutation-runtime";
import { useCommandRegistration } from "../runtime/command-registration-runtime";
import { Button, initButtonComponentPrimitives } from "../ui/button";
import { ProgressStepRow } from "../ui/progress-step-row";
import { ThreadScrollLayout } from "../threads/thread-scroll-layout";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { formatUnknownError } from "../boundaries/src-l0hb-mz-p";
import { buildLocalEnvironmentCreateRoute } from "../environments/local-environment-create-route";
import { getPersistedAtomValue } from "../utils/persisted-atom-store";
import { readServiceTierForRequest } from "../utils/read-service-tier-for-request";
import {
  getPendingWorktreeConversationStartActions,
  isPendingWorktreeInProgress,
  usePendingWorktree,
  usePendingWorktreeConversationStarts,
  usePendingWorktreeStore,
} from "../threads/pending-worktree-store";
import type {
  PendingWorktree,
  PendingWorktreePhase,
} from "../threads/pending-worktree-store/types";
import {
  restorePendingWorktreeBrowserTransferSources,
  startPendingWorktreeConversation,
} from "../threads/pending-worktree-conversation";
import {
  M as recordPendingWorktreeRestoreRaw,
  k as clearPendingWorktreeRestoreRaw,
  Q_ as bindClientThreadConversationRaw,
  ev as bindPendingWorktreeConversationRaw,
  rx as applyActiveProfileConfigOverridesRaw,
} from "../vendor/projects-app-shared-runtime";
import {
  buildPendingWorktreeRoute,
  extractPullRequestNumber,
} from "../runtime/pending-worktree-route-runtime";
import {
  Vu as setActiveLocalEnvironmentSettingsHostRaw,
  oa as UserMessageBubbleRaw,
  zt as PullRequestNumberBadgeRaw,
} from "../vendor/profile-page-runtime";
import {
  initComposerPrefillChunk as initComposerPrefillChunkRaw,
  useComposerPrefill as useComposerPrefillRaw,
} from "../boundaries/current-ref/composer-prefill-producer";

type AppScopeLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  query?: {
    fetch<TValue = unknown>(query: unknown, params?: unknown): Promise<TValue>;
  };
};

type ToastApiLike = {
  danger(message: ReactNode): unknown;
};

type PendingWorktreeConversationProps = {
  conversationPathBuilder?: (conversationId: string) => string;
  homePath?: string;
  onConversationReady?: (conversationId: string) => void;
  pendingWorktreeId?: string;
  stayOnClientThread?: boolean;
};

type PendingWorktreeActivityStatus =
  | "completed"
  | "failed"
  | "running"
  | "skipped";

type PendingWorktreeActivity = {
  id: string;
  kind: "conversation" | "setup" | "worktree";
  outputText: string;
  status: PendingWorktreeActivityStatus;
};

type StartConversationParamsInput = {
  collaborationMode?: unknown;
  commentAttachments?: unknown[];
  [key: string]: unknown;
};

type ComposerPrefill = {
  prefillCommentAttachments?: unknown[];
  prefillPrompt: string;
};

const PullRequestNumberBadge =
  PullRequestNumberBadgeRaw as React.ComponentType<{
    pullRequestNumber: string | number;
  }>;

const UserMessageBubble = UserMessageBubbleRaw as React.ComponentType<{
  alwaysShowActions?: boolean;
  hostId: string;
  message?: string | null;
  sentAtMs: number | null;
}>;

const bindClientThreadConversation =
  bindClientThreadConversationRaw as unknown as (
    scope: AppScopeLike,
    input: {
      clientThreadId: string;
      conversationId: string;
    },
  ) => void;

const bindPendingWorktreeConversation =
  bindPendingWorktreeConversationRaw as unknown as (
    scope: AppScopeLike,
    input: {
      conversationId: string;
      pendingWorktreeId: string;
    },
  ) => boolean;

const applyActiveProfileConfigOverrides =
  applyActiveProfileConfigOverridesRaw as unknown as (
    config: unknown,
  ) => unknown;

const clearPendingWorktreeRestore =
  clearPendingWorktreeRestoreRaw as unknown as (
    scope: AppScopeLike,
    pendingWorktreeId: string,
  ) => void;

const recordPendingWorktreeRestore =
  recordPendingWorktreeRestoreRaw as unknown as (
    scope: AppScopeLike,
    input: {
      pendingWorktreeId: string;
      targetConversationId: string;
      targetWorkspaceRoot: string;
    },
  ) => boolean;

const setActiveLocalEnvironmentSettingsHost =
  setActiveLocalEnvironmentSettingsHostRaw as unknown as (
    scope: AppScopeLike,
    hostId: string,
  ) => void;

const useComposerPrefill = useComposerPrefillRaw as unknown as () => (
  prefill: ComposerPrefill,
) => void;

export const initPendingWorktreeChunk = once(() => {
  initIntlRuntime();
  initAppLoggerRuntime();
  initAppScopeSignalRuntime();
  initLocalConversationNavigationRuntime();
  initAppServerMutationRuntime();
  initButtonComponentPrimitives();
  initComposerPrefillChunkRaw();
});

export function PendingWorktreeConversation({
  homePath = "/",
  pendingWorktreeId,
  conversationPathBuilder = (conversationId) =>
    `/conversation/${conversationId}`,
  onConversationReady,
  stayOnClientThread = false,
}: PendingWorktreeConversationProps = {}): JSX.Element | null {
  const scope = useScope<AppScopeLike>(appScopeRoot);
  const location = useLocation();
  const navigate = useNavigate();
  const intl = useIntl();
  const setComposerPrefill = useComposerPrefill();
  const routeParams = useParams() as {
    pendingWorktreeId?: string;
  };
  const resolvedPendingWorktreeId =
    pendingWorktreeId ?? routeParams.pendingWorktreeId ?? null;
  const {
    cancelPendingWorktree,
    clearPendingWorktreeAttention,
    continuePendingWorktree,
    createPendingWorktree,
    retryPendingWorktree,
    setPendingWorktreePinned,
  } = usePendingWorktreeStore();
  const { retryPendingWorktreeConversationStart } =
    getPendingWorktreeConversationStartActions();
  const pendingWorktree = usePendingWorktree(resolvedPendingWorktreeId);
  const pendingConversationStart = usePendingWorktreeConversationStarts().find(
    (start) => start.pendingWorktreeId === resolvedPendingWorktreeId,
  );

  const startLocallyMutation = useMutation<void, { continueLocally: boolean }>({
    mutationFn: async ({ continueLocally }) => {
      if (!pendingWorktree) return;
      cancelPendingWorktree(pendingWorktree.id);
      if (!continueLocally) {
        clearPendingWorktreeRestore(scope, pendingWorktree.id);
        setComposerPrefill(buildComposerPrefill(pendingWorktree));
        return;
      }
      try {
        const sourceWorkspaceRoot =
          getRequiredSourceWorkspaceRoot(pendingWorktree);
        const conversationId = (await startPendingWorktreeConversation({
          entry: pendingWorktree,
          workspaceRoot: sourceWorkspaceRoot,
        })) as string;
        recordPendingWorktreeRestore(scope, {
          pendingWorktreeId: pendingWorktree.id,
          targetConversationId: conversationId,
          targetWorkspaceRoot: sourceWorkspaceRoot,
        });
        if (pendingWorktree.clientThreadId == null) {
          const restoredRouteState = bindPendingWorktreeConversation(scope, {
            conversationId,
            pendingWorktreeId: pendingWorktree.id,
          });
          if (!restoredRouteState) {
            restorePendingWorktreeBrowserTransferSources(
              pendingWorktree,
              conversationId,
            );
          }
        } else {
          bindClientThreadConversation(scope, {
            clientThreadId: pendingWorktree.clientThreadId,
            conversationId,
          });
        }
        onConversationReady?.(conversationId);
        if (
          onConversationReady == null &&
          pendingWorktree.clientThreadId == null
        ) {
          navigate(conversationPathBuilder(conversationId));
        }
      } catch (error) {
        cancelPendingWorktree(pendingWorktree.id);
        showStartConversationError(
          scope,
          intl,
          "Error creating local task from worktree",
          error,
        );
        throw error;
      }
    },
  });

  const autoFixMutation = useMutation<void, void>({
    mutationFn: async () => {
      if (!pendingWorktree) return;
      const modelId = getPendingWorktreeModel(pendingWorktree);
      const serviceTier = await readServiceTierForRequest(
        scope,
        pendingWorktree.hostId,
        modelId,
      );
      const repairPendingWorktreeId = await createAutoFixPendingWorktree({
        createPendingWorktree,
        intl,
        pendingWorktree,
        serviceTier,
      });
      navigate(buildPendingWorktreeRoute(repairPendingWorktreeId));
    },
    onError: (error) => {
      showStartConversationError(
        scope,
        intl,
        "Error starting worktree setup repair thread",
        error,
      );
    },
  });

  useCommandRegistration("toggle-thread-pin", () => {
    if (pendingWorktree) {
      setPendingWorktreePinned(pendingWorktree.id, !pendingWorktree.isPinned);
    }
  });

  React.useEffect(() => {
    if (resolvedPendingWorktreeId) {
      clearPendingWorktreeAttention(resolvedPendingWorktreeId);
    }
  }, [clearPendingWorktreeAttention, resolvedPendingWorktreeId]);

  if (
    startLocallyMutation.isPending ||
    startLocallyMutation.isSuccess ||
    pendingWorktree === undefined
  ) {
    return null;
  }
  if (pendingConversationStart?.state === "succeeded" && !stayOnClientThread) {
    return (
      <Navigate
        to={conversationPathBuilder(pendingConversationStart.conversationId)}
        replace={true}
      />
    );
  }
  if (pendingWorktree == null && pendingConversationStart != null) {
    return null;
  }
  if (!pendingWorktree) {
    return <Navigate to={homePath} replace={true} />;
  }

  const isWorktreePending = isPendingWorktreeInProgress(pendingWorktree.phase);
  const isConversationStartFailed =
    pendingConversationStart?.state === "failed";
  const isConversationStarting = pendingConversationStart?.state === "starting";
  const hasFailure =
    pendingWorktree.phase === "failed" || isConversationStartFailed;
  const isStableWorktree =
    pendingWorktree.launchMode === "create-stable-worktree";
  const hasCreatedWorktree =
    pendingWorktree.phase === "failed" &&
    pendingWorktree.worktreeGitRoot != null &&
    pendingWorktree.worktreeWorkspaceRoot != null;
  const canContinueAnyway = hasCreatedWorktree && !isStableWorktree;
  const canAutoFix =
    hasCreatedWorktree && pendingWorktree.localEnvironmentConfigPath != null;

  return (
    <ThreadPageShell>
      <ThreadScrollLayout>
        <div className="flex flex-col gap-4">
          <PendingWorktreePromptPreview
            hostId={pendingWorktree.hostId}
            prompt={pendingWorktree.prompt}
          />
          <PendingWorktreeActivities
            pendingWorktree={pendingWorktree}
            isConversationStarting={isConversationStarting}
            isConversationStartFailed={isConversationStartFailed}
          >
            {isWorktreePending || hasFailure ? (
              <>
                {isWorktreePending && !isStableWorktree ? (
                  <Button
                    color="secondary"
                    loading={startLocallyMutation.isPending}
                    onClick={() => {
                      startLocallyMutation.mutate({ continueLocally: true });
                    }}
                  >
                    <FormattedMessage
                      id="worktreeInitV2.workLocallyInstead"
                      defaultMessage="Work locally"
                      description="Button that cancels worktree setup and starts a local conversation"
                    />
                  </Button>
                ) : null}
                {isWorktreePending ? (
                  <Button
                    color="secondary"
                    loading={startLocallyMutation.isPending}
                    onClick={() => {
                      startLocallyMutation.mutate({ continueLocally: false });
                    }}
                  >
                    <FormattedMessage
                      id="worktreeInitV2.cancel"
                      defaultMessage="Cancel"
                      description="Cancel button for worktree creation"
                    />
                  </Button>
                ) : null}
                {hasFailure ? (
                  <>
                    {pendingWorktree.phase === "failed" ? (
                      <Button
                        color="secondary"
                        onClick={() => {
                          openLocalEnvironmentSettings({
                            entry: pendingWorktree,
                            location,
                            navigate,
                            scope,
                          });
                        }}
                      >
                        <FormattedMessage
                          id="worktreeInitV2.editEnvironment"
                          defaultMessage="Edit environment"
                          description="Button label to open local environment settings after worktree setup fails"
                        />
                      </Button>
                    ) : null}
                    {canAutoFix ? (
                      <Button
                        color="secondary"
                        loading={autoFixMutation.isPending}
                        onClick={() => {
                          autoFixMutation.mutate();
                        }}
                      >
                        <FormattedMessage
                          id="worktreeInitV2.autoFix"
                          defaultMessage="Auto-fix"
                          description="Button label to start a repair thread after worktree setup fails"
                        />
                      </Button>
                    ) : null}
                    <Button
                      color="secondary"
                      onClick={() => {
                        if (pendingWorktree.phase === "failed") {
                          retryPendingWorktree(pendingWorktree.id);
                        } else {
                          retryPendingWorktreeConversationStart(
                            pendingWorktree.id,
                          );
                        }
                      }}
                    >
                      <FormattedMessage
                        id="codex.common.retry"
                        defaultMessage="Retry"
                        description="Retry button"
                      />
                    </Button>
                    {canContinueAnyway ? (
                      <Button
                        color="primary"
                        onClick={() => {
                          continuePendingWorktree(pendingWorktree.id);
                        }}
                      >
                        <FormattedMessage
                          id="worktreeInitV2.continueAnyway"
                          defaultMessage="Continue anyway"
                          description="Button label to continue starting a thread after local environment setup fails"
                        />
                      </Button>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
          </PendingWorktreeActivities>
        </div>
      </ThreadScrollLayout>
    </ThreadPageShell>
  );
}

function ThreadPageShell({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div className="relative flex h-full flex-col">
      <div className="sticky top-0 z-10" />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative mx-auto flex min-h-0 w-full flex-1 flex-col">
          <div className="min-h-0 flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function PendingWorktreePromptPreview({
  hostId,
  prompt,
}: {
  hostId: string;
  prompt?: string | null;
}): JSX.Element {
  const pullRequestNumber = React.useMemo(
    () => extractPullRequestNumber(prompt),
    [prompt],
  );
  return (
    <div className="flex flex-col items-end gap-2">
      {pullRequestNumber ? (
        <PullRequestNumberBadge pullRequestNumber={pullRequestNumber} />
      ) : null}
      <UserMessageBubble
        message={prompt}
        sentAtMs={null}
        hostId={hostId}
        alwaysShowActions={true}
      />
    </div>
  );
}

function PendingWorktreeActivities({
  pendingWorktree,
  isConversationStarting,
  isConversationStartFailed,
  children,
}: {
  children?: ReactNode;
  isConversationStartFailed: boolean;
  isConversationStarting: boolean;
  pendingWorktree: PendingWorktree;
}): JSX.Element {
  const activities = React.useMemo(
    () =>
      buildPendingWorktreeActivities({
        pendingWorktree,
        isConversationStarting,
        isConversationStartFailed,
      }),
    [pendingWorktree, isConversationStarting, isConversationStartFailed],
  );
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-token-border-subtle bg-token-bg-primary p-4">
      <div className="flex flex-col gap-3">
        {activities.map((activity) => (
          <PendingWorktreeActivityRow key={activity.id} activity={activity} />
        ))}
      </div>
      {children ? (
        <div className="flex flex-wrap gap-2 pt-1">{children}</div>
      ) : null}
    </div>
  );
}

function PendingWorktreeActivityRow({
  activity,
}: {
  activity: PendingWorktreeActivity;
}): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <ProgressStepRow status={toProgressStepStatus(activity.status)}>
        <PendingWorktreeActivityLabel activity={activity} />
      </ProgressStepRow>
      {activity.outputText.trim().length > 0 ? (
        <pre className="max-h-60 overflow-auto rounded-md bg-token-bg-tertiary p-2 text-xs whitespace-pre-wrap text-token-text-secondary">
          {activity.outputText}
        </pre>
      ) : null}
    </div>
  );
}

function PendingWorktreeActivityLabel({
  activity,
}: {
  activity: PendingWorktreeActivity;
}): JSX.Element {
  switch (activity.kind) {
    case "worktree":
      return activity.status === "failed" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.worktree.failed"
          defaultMessage="Failed to create worktree"
          description="Worktree creation activity label when the worktree could not be created"
        />
      ) : activity.status === "completed" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.worktree.completed"
          defaultMessage="Created worktree"
          description="Worktree creation activity label after the worktree is created"
        />
      ) : (
        <FormattedMessage
          id="worktreeInitV2.activity.worktree.running"
          defaultMessage="Creating worktree"
          description="Worktree creation activity label while a worktree is being created"
        />
      );
    case "setup":
      return activity.status === "failed" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.setup.failed"
          defaultMessage="Failed to set up environment"
          description="Local environment setup activity label when setup fails"
        />
      ) : activity.status === "skipped" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.setup.skipped"
          defaultMessage="Skipped environment setup"
          description="Local environment setup activity label when setup is skipped"
        />
      ) : activity.status === "completed" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.setup.completed"
          defaultMessage="Set up environment"
          description="Local environment setup activity label after setup succeeds"
        />
      ) : (
        <FormattedMessage
          id="worktreeInitV2.activity.setup.running"
          defaultMessage="Setting up environment"
          description="Local environment setup activity label while setup is running"
        />
      );
    case "conversation":
      return activity.status === "failed" ? (
        <FormattedMessage
          id="worktreeInitV2.activity.conversation.failed"
          defaultMessage="Failed to start conversation"
          description="Conversation start activity label when the thread could not be started"
        />
      ) : (
        <FormattedMessage
          id="worktreeInitV2.activity.conversation.running"
          defaultMessage="Starting conversation"
          description="Conversation start activity label while the thread is being started"
        />
      );
  }
}

function buildPendingWorktreeActivities({
  pendingWorktree,
  isConversationStarting,
  isConversationStartFailed,
}: {
  isConversationStartFailed: boolean;
  isConversationStarting: boolean;
  pendingWorktree: PendingWorktree;
}): PendingWorktreeActivity[] {
  const hasCreatedWorktree =
    pendingWorktree.worktreeGitRoot != null &&
    pendingWorktree.worktreeWorkspaceRoot != null;
  const attempt = pendingWorktree.attempt ?? 1;
  const activities: PendingWorktreeActivity[] = [
    {
      id: `${pendingWorktree.id}:${attempt}:worktree`,
      kind: "worktree",
      status: getWorktreeActivityStatus(
        pendingWorktree.phase,
        hasCreatedWorktree,
      ),
      outputText:
        pendingWorktree.worktreeOutputText ?? pendingWorktree.outputText ?? "",
    },
  ];
  const setupStatus = getSetupActivityStatus(
    pendingWorktree,
    hasCreatedWorktree,
  );
  if (setupStatus != null) {
    activities.push({
      id: `${pendingWorktree.id}:${attempt}:setup`,
      kind: "setup",
      status: setupStatus,
      outputText: pendingWorktree.setupOutputText ?? "",
    });
  }
  if (isConversationStarting || isConversationStartFailed) {
    activities.push({
      id: `${pendingWorktree.id}:${attempt}:conversation`,
      kind: "conversation",
      status: isConversationStartFailed ? "failed" : "running",
      outputText: "",
    });
  }
  return activities;
}

function getWorktreeActivityStatus(
  phase: PendingWorktreePhase,
  hasCreatedWorktree: boolean,
): PendingWorktreeActivityStatus {
  switch (phase) {
    case "queued":
    case "creating":
      return "running";
    case "setting-up":
    case "worktree-ready":
      return "completed";
    case "failed":
      return hasCreatedWorktree ? "completed" : "failed";
  }
}

function getSetupActivityStatus(
  entry: PendingWorktree,
  hasCreatedWorktree: boolean,
): PendingWorktreeActivityStatus | null {
  switch (entry.phase) {
    case "queued":
    case "creating":
      return null;
    case "setting-up":
      return "running";
    case "worktree-ready":
      if (entry.localEnvironmentConfigPath == null) return null;
      return entry.errorMessage == null ? "completed" : "skipped";
    case "failed":
      return hasCreatedWorktree ? "failed" : null;
  }
}

function toProgressStepStatus(
  status: PendingWorktreeActivityStatus,
): "done" | "failed" | "running" {
  switch (status) {
    case "completed":
    case "skipped":
      return "done";
    case "failed":
      return "failed";
    case "running":
      return "running";
  }
}

async function createAutoFixPendingWorktree({
  createPendingWorktree,
  intl,
  pendingWorktree,
  serviceTier,
}: {
  createPendingWorktree: ReturnType<
    typeof usePendingWorktreeStore
  >["createPendingWorktree"];
  intl: IntlShape;
  pendingWorktree: PendingWorktree;
  serviceTier: string | null;
}): Promise<string> {
  const prompt = buildAutoFixPrompt(pendingWorktree, intl);
  const startConversationParamsInput =
    await buildAutoFixStartConversationParams(
      pendingWorktree,
      prompt,
      serviceTier,
    );
  const label = intl.formatMessage({
    id: "worktreeInitV2.autoFix.label",
    defaultMessage: "Fix worktree setup",
    description:
      "Pending worktree label for a repair thread created after local environment setup fails",
  });
  return createPendingWorktree({
    hostId: pendingWorktree.hostId,
    label,
    initialThreadTitle: label,
    sourceWorkspaceRoot: getRequiredSourceWorkspaceRoot(pendingWorktree),
    startingState: pendingWorktree.startingState,
    localEnvironmentConfigPath: null,
    launchMode: "start-conversation",
    prompt,
    startConversationParamsInput,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}

async function buildAutoFixStartConversationParams(
  entry: PendingWorktree,
  prompt: string,
  serviceTier: string | null,
): Promise<StartConversationParamsInput> {
  const sourceWorkspaceRoot = getRequiredSourceWorkspaceRoot(entry);
  const input = [
    {
      type: "text",
      text: prompt,
      text_elements: [],
    },
  ];
  if (entry.launchMode === "start-conversation") {
    return {
      ...toRecord(entry.startConversationParamsInput),
      input,
      commentAttachments: [],
      workspaceRoots: [sourceWorkspaceRoot],
      cwd: sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: "system",
      serviceTier,
    };
  }
  const { config } = (await sendAppServerRequest("read-config-for-host", {
    hostId: entry.hostId,
    includeLayers: false,
    cwd: sourceWorkspaceRoot,
  })) as {
    config: unknown;
  };
  return {
    input,
    commentAttachments: [],
    workspaceRoots: [sourceWorkspaceRoot],
    cwd: sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: getDefaultAgentModeForHost(entry.hostId) ?? "auto",
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier,
    reasoningEffort: null,
    collaborationMode:
      entry.launchMode === "fork-conversation"
        ? entry.sourceCollaborationMode
        : null,
    config: applyActiveProfileConfigOverrides(config),
    threadSource: "system",
    workspaceKind: "project",
  };
}

function buildAutoFixPrompt(entry: PendingWorktree, intl: IntlShape): string {
  return intl.formatMessage(
    {
      id: "worktreeInitV2.autoFix.prompt",
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description:
        "Prompt sent to a repair thread created after local environment setup fails",
    },
    {
      configPath: entry.localEnvironmentConfigPath ?? "",
      errorMessage: entry.errorMessage ?? "",
      lineBreak: "\n",
      outputText: entry.setupOutputText ?? "",
      paragraphBreak: "\n\n",
    },
  );
}

function buildComposerPrefill(entry: PendingWorktree): ComposerPrefill {
  const prefillPrompt = String(entry.prompt ?? "").trim();
  if (entry.launchMode !== "start-conversation") {
    return { prefillPrompt };
  }
  const commentAttachments = toRecord(
    entry.startConversationParamsInput,
  ).commentAttachments;
  return Array.isArray(commentAttachments) && commentAttachments.length > 0
    ? {
        prefillPrompt,
        prefillCommentAttachments: commentAttachments,
      }
    : { prefillPrompt };
}

function getPendingWorktreeModel(entry: PendingWorktree): string | null {
  if (entry.launchMode === "start-conversation") {
    return getCollaborationModeModel(
      toRecord(entry.startConversationParamsInput).collaborationMode,
    );
  }
  return getCollaborationModeModel(entry.sourceCollaborationMode);
}

function getCollaborationModeModel(collaborationMode: unknown): string | null {
  const mode = toRecord(collaborationMode);
  const settings = toRecord(mode.settings);
  return typeof settings.model === "string" ? settings.model : null;
}

function getDefaultAgentModeForHost(hostId: string): string | null {
  const agentModesByHost = toRecord(
    getPersistedAtomValue("agent-mode-by-host-id", {}),
  );
  const agentMode = agentModesByHost[hostId];
  return typeof agentMode === "string" ? agentMode : null;
}

function getRequiredSourceWorkspaceRoot(entry: PendingWorktree): string {
  if (typeof entry.sourceWorkspaceRoot === "string") {
    return entry.sourceWorkspaceRoot;
  }
  throw Error(`Pending worktree ${entry.id} is missing sourceWorkspaceRoot`);
}

function openLocalEnvironmentSettings({
  entry,
  location,
  navigate,
  scope,
}: {
  entry: PendingWorktree;
  location: {
    hash: string;
    pathname: string;
    search: string;
  };
  navigate: NavigateFunction;
  scope: AppScopeLike;
}): void {
  const sourceWorkspaceRoot = getRequiredSourceWorkspaceRoot(entry);
  setActiveLocalEnvironmentSettingsHost(scope, entry.hostId);
  const returnTo = `${location.pathname}${location.search}${location.hash}`;
  if (entry.localEnvironmentConfigPath != null) {
    navigate(
      buildLocalEnvironmentCreateRoute({
        configPath: entry.localEnvironmentConfigPath,
        workspaceRoot: sourceWorkspaceRoot,
      }),
      {
        state: {
          hostId: entry.hostId,
          returnTo,
        },
      },
    );
    return;
  }
  const searchParams = new URLSearchParams({
    workspaceRoot: sourceWorkspaceRoot,
  });
  navigate(`/settings/local-environments?${searchParams.toString()}`);
}

function showStartConversationError(
  scope: AppScopeLike,
  intl: IntlShape,
  message: string,
  error: unknown,
): void {
  appLogger.error(message, {
    safe: {},
    sensitive: {
      error,
    },
  });
  scope.get<ToastApiLike | null>(toastSignal)?.danger(
    intl.formatMessage(
      {
        id: "composer.localTaskError.v2",
        defaultMessage: "Error starting chat\n{error}",
        description: "Toast text shown when we failed to start a thread",
      },
      {
        error: formatUnknownError(error),
      },
    ),
  );
}

function toRecord(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : {};
}
