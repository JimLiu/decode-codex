// Restored from ref/webview/assets/review-mode-content-Bx3AaAoJ.js
// Review mode command content restored from the current ref chunk.
import { useState, type ReactNode } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotDollarLowerS as initTypeScriptHelpersRuntime,
  currentAppInitialSharedCompatSlotUpperC as logger,
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntime,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotUpperO as initCurrentSharedObjectRuntime,
  currentAppInitialSharedCompatSlotUpperS as initCurrentSharedSignalsRuntime,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
  currentAppInitialSharedCompatSlotLowerC as initCurrentSharedCompatRuntime,
  currentAppInitialSharedCompatSlotLowerI as invokeAppMethod,
  currentAppInitialSharedCompatSlotLowerNLowerT as settingsKeys,
  currentAppInitialSharedCompatSlotLowerTLowerC as useMutation,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotDollarLowerR as initReviewModePanelRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerF as initWorktreeHostRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC as initCodeReviewHostRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerC as resolveServiceTier,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerF as activeTabStore,
  worktreeNewThreadOrchestratorCompatSlotUpperYLowerD as openReviewSidePanelForBranch,
  worktreeNewThreadOrchestratorCompatSlotLowerELowerF as initReviewStateRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerELowerI as useSetActiveConversationId,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerM as threadSidePanelExpandedSignal,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerD as initReviewThreadRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerKLowerD as getDefaultTargetBranch,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerM as initWorktreeThreadRuntime,
  worktreeNewThreadOrchestratorCompatSlotLowerNLowerF as setReviewDiffFilter,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM as LoadingSpinnerIcon,
  worktreeNewThreadQueryCompatSlotUpperELowerM as initButtonRuntime,
  worktreeNewThreadQueryCompatSlotUpperOLowerM as initDialogRuntime,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as Button,
  worktreeNewThreadQueryCompatSlotUpperULowerM as useSetting,
  worktreeNewThreadQueryCompatSlotLowerGLowerP as toastControllerSignal,
  worktreeNewThreadQueryCompatSlotLowerMLowerP as initToastControllerRuntime,
  worktreeNewThreadQueryCompatSlotLowerZLowerM as initSettingsRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  imagePickerSchemaCapabilities as logProductEvent,
  currentAppInitialSharedMember0135 as reviewPromptFooter,
  reactRouterRouteScopeParentRuntime as initReactRouterRouteScopeRuntime,
  intlFormatDateTimeRuntime as initIntlDateTimeRuntime,
  remoteControlRefreshSourceEnum as initRemoteControlRefreshSourceEnum,
  appServerDisconnectedAppServerSignal as initAppServerDisconnectedRuntime,
  reactRouterMember0297 as routeScopedStateStore,
  remoteConnectionRuntime0298 as initRemoteConnectionRuntime,
  currentAppInitialSharedMember0365 as reviewPromptIntro,
  currentAppInitialSharedFunction0375 as useIntl,
  currentAppInitialSharedMember0595 as reviewTargetProductEvent,
  gitRuntime0670 as initGitRuntime,
  currentAppInitialSharedMember0743 as conversationHostIdByConversationId,
  codeReviewPromptSections as initCodeReviewPromptSectionsRuntime,
  currentAppInitialSharedMember0755 as useGitBranchOverviewQuery,
  gitYouAgreedXcodeFunction as isXcodeLicenseError,
  currentAppInitialSharedRuntime0840 as initCurrentSharedCodeReviewRuntime,
  currentAppInitialSharedFunction0895 as startAppServerOperation,
  gitUpstreamBranchBaseRuntime as initGitUpstreamBranchRuntime,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotUpperC as useCodeReviewHost,
  pullRequestNewThreadCompatSlotLowerY as initPullRequestNewThreadRuntime,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotUpperFLowerC as initAppMainReviewContentRuntime,
  appMainCurrentCompatSlotUpperHLowerC as setThreadBrowserSidePanelExpanded,
  openThreadBrowserSidePanelTabWithPendingState as useCurrentGitBranch,
  appMainCurrentCompatSlotLowerFLowerO as XcodeLicenseWarningIcon,
  openThreadBrowserSidePanelTab as initThreadBrowserSidePanelTabRuntime,
  appMainCurrentCompatSlotLowerPLowerO as initReviewModeIconsRuntime,
} from "../vendor/app-main-current-runtime/index";
import {
  appgenLibraryHotDjo67r4nCompatSlotDollar as initAppgenLibraryRuntime,
  appgenLibraryHotDjo67r4nCompatSlotLowerTLowerT as getWorkspaceGitRoot,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initCommandMenuItemComponent,
  CommandMenuItem,
} from "../runtime/current-app-initial/local-conversation-current-runtime";
import {
  useGitRecentBranches,
  initUseGitRecentBranchesChunk,
} from "../utils/use-git-recent-branches";

type ReviewDelivery = "inline" | "detached";
type ReviewDiffFilter = "unstaged" | "branch";
type ReviewTarget = "unstaged" | "base-branch";

interface MessageDescriptor {
  defaultMessage: string;
  description: string;
  id: string;
}

interface IntlShape {
  formatMessage: (
    descriptor: MessageDescriptor,
    values?: Record<string, unknown>,
  ) => string;
}

interface ScopeStore {
  get: (token: unknown, ...args: unknown[]) => any;
  set: (token: unknown, value: unknown) => void;
}

interface HostConfig {
  id: string;
  [key: string]: unknown;
}

interface BaseReviewContext {
  cwd: string;
  gitRoot: string;
  sourceBranch: string;
}

interface UncommittedReviewContext extends BaseReviewContext {
  mode: "uncommitted";
}

interface BaseBranchReviewContext extends BaseReviewContext {
  baseBranch: string;
  mode: "base-branch";
}

type ReviewContext = UncommittedReviewContext | BaseBranchReviewContext;

interface ReviewRequest {
  baseBranch: string | null;
  diffFilter: ReviewDiffFilter;
  prompt: string;
}

interface StartReviewVariables {
  context: ReviewContext;
  conversationId: string | null;
  delivery: ReviewDelivery;
}

type StartReviewResult =
  | {
      baseBranch: string | null;
      delivery: "inline";
      diffFilter: ReviewDiffFilter;
    }
  | {
      baseBranch: string | null;
      conversationId: string;
      delivery: "detached";
      diffFilter: ReviewDiffFilter;
    };

interface StartReviewMutationOptions {
  hostId: string;
  onError: (error: unknown) => void;
  onSuccess: (result: StartReviewResult) => void;
}

interface ReviewModeContentProps {
  conversationId: string | null;
  cwd: string;
  hostConfig: HostConfig;
  onClose: () => void;
  onItemsChanged: () => void;
}

interface ReviewModeViewState {
  status: "choose-target" | "choose-base";
}

interface BranchLine {
  key: string;
  label: string;
}

interface ReviewModeTargetOptionsProps {
  isLoadingBaseBranch: boolean;
  isRetryingGit: boolean;
  isSubmitting: boolean;
  onRetryGit: () => void;
  onSelectBaseBranch: () => void;
  onSelectUnstaged: () => void;
  requiresXcodeLicense: boolean;
}

interface ReviewModeBranchOptionsProps {
  branchLines: BranchLine[];
  isError: boolean;
  isLoading: boolean;
  onSelect: (baseBranch: string) => void;
  refetchBranchOverview: () => void;
  submittingBranchName: string | null;
}

interface ReviewTargetBranchesOptions {
  currentBranch?: string | null;
  defaultTargetBranch?: string | null;
  recentBranches?: string[] | null;
}

interface GitMergeBaseResult {
  mergeBaseSha?: string | null;
}

const CODE_REVIEW_SYSTEM_PROMPT = `# Review Guidelines

You are acting as a reviewer for a proposed code change made by another engineer.

Review the change and respond in normal Markdown. Do not return JSON, XML, a findings object, or any structured review schema.

When feedback should be attached directly to a changed line, emit one \`::code-comment{...}\` directive for that issue. The directive creates an inline code comment in the review UI; keep the visible response as normal Markdown. Emit no directives when there are no actionable inline comments.

Required \`code-comment\` attributes: \`title\`, \`body\`, and \`file\`. Optional attributes: \`start\`, \`end\`, and \`priority\`. Use the shortest useful line range. \`file\` should be an absolute path or include the workspace folder segment.

Focus on discrete, actionable issues the original author would likely fix if they knew about them. Prefer no issues over speculative or low-signal feedback.

General guidelines for whether to call out an issue:

1. It meaningfully impacts correctness, performance, security, or maintainability.
2. It is discrete and actionable.
3. It was introduced by the change under review.
4. The author would likely fix it once aware.
5. It does not rely on unstated assumptions about intent.
6. It identifies the affected behavior clearly rather than speculating broadly.

When you call out an issue, include the relevant file and line or function in prose, explain the scenario where it matters, and keep the explanation concise. Use priority labels such as \`[P1]\` or \`[P2]\` only when helpful to communicate severity.

If there are no actionable issues, say that directly and briefly.
`;

const BRANCH_REVIEW_INSTRUCTIONS =
  "Review the code changes against the base branch '{baseBranch}'. The merge base commit for this comparison is {mergeBaseSha}. Run `git diff {mergeBaseSha}` to inspect the changes relative to {baseBranch}. Provide concise, actionable feedback in a normal Markdown response.";

const UNCOMMITTED_REVIEW_INSTRUCTIONS =
  "Review the current code changes (staged, unstaged, and untracked files) and provide concise, actionable feedback in a normal Markdown response.";

const DEFAULT_BASE_BRANCH = "main";

const initReviewModeContentCurrentBundle = runOnce(() => {
  initRemoteControlRefreshSourceEnum();
  initCurrentSharedRuntime();
  initCurrentSharedObjectRuntime();
  initIntlDateTimeRuntime();
  initTypeScriptHelpersRuntime();
  initPullRequestNewThreadRuntime();
  initAppServerDisconnectedRuntime();
  initCurrentSharedCodeReviewRuntime();
  initCodeReviewHostRuntime();
  initCodeReviewPromptSectionsRuntime();
  initAppScopeRuntime();
  initCurrentSharedSignalsRuntime();
  initCurrentSharedCompatRuntime();
  initWorktreeThreadRuntime();
  initWorktreeHostRuntime();
  initToastControllerRuntime();
  initGitRuntime();
  initGitUpstreamBranchRuntime();
  initThreadBrowserSidePanelTabRuntime();
  initUseGitRecentBranchesChunk();
  initRemoteConnectionRuntime();
  initReviewStateRuntime();
  initReviewThreadRuntime();
  initReactRouterRouteScopeRuntime();
  initSettingsRuntime();
  initAppMainReviewContentRuntime();
  initAppgenLibraryRuntime();
  initReviewModePanelRuntime();
  initButtonRuntime();
  initDialogRuntime();
  initReviewModeIconsRuntime();
  initCommandMenuItemComponent();
});

initReviewModeContentCurrentBundle();

function buildReviewPrompt({
  reviewInstructions,
  requestMessage,
}: {
  requestMessage: string;
  reviewInstructions: string;
}) {
  return [
    reviewPromptIntro,
    CODE_REVIEW_SYSTEM_PROMPT.trim(),
    reviewInstructions.trim(),
    reviewPromptFooter,
    requestMessage,
  ].join("\n");
}

async function resolveReviewRequest({
  context,
  hostId,
  intl,
}: {
  context: ReviewContext;
  hostId: string;
  intl: IntlShape;
}): Promise<ReviewRequest> {
  if (context.mode === "uncommitted") {
    return {
      diffFilter: "unstaged",
      prompt: buildReviewPrompt({
        reviewInstructions: UNCOMMITTED_REVIEW_INSTRUCTIONS,
        requestMessage: intl.formatMessage({
          id: "quickAction.request.codeReview.uncommitted",
          defaultMessage: "Please review my uncommitted changes",
          description: "User message used when reviewing uncommitted changes",
        }),
      }),
      baseBranch: null,
    };
  }

  const mergeBase = (await invokeAppMethod("git-merge-base", {
    source: "review_model",
    params: {
      gitRoot: context.gitRoot,
      baseBranch: context.baseBranch,
      hostId,
    },
  })) as GitMergeBaseResult;

  if (!mergeBase.mergeBaseSha) {
    throw Error(
      `Failed to resolve a merge base between HEAD and ${context.baseBranch}.`,
    );
  }

  const requestMessage = intl.formatMessage(
    {
      id: "quickAction.request.codeReview.branches",
      defaultMessage: "Please review changes on {from} against {to}",
      description:
        "User message used when reviewing against a selected base branch",
    },
    {
      from: context.sourceBranch,
      to: context.baseBranch,
    },
  );

  return {
    diffFilter: "branch",
    prompt: buildReviewPrompt({
      reviewInstructions: BRANCH_REVIEW_INSTRUCTIONS.replaceAll(
        "{baseBranch}",
        context.baseBranch,
      ).replaceAll("{mergeBaseSha}", mergeBase.mergeBaseSha.trim()),
      requestMessage,
    }),
    baseBranch: context.baseBranch,
  };
}

function useStartReviewMutation({
  hostId,
  onError,
  onSuccess,
}: StartReviewMutationOptions) {
  const scope = useRouteScopeContext(appScopeRoot) as ScopeStore;
  const intl = useIntl() as IntlShape;
  const codeReviewHost = useCodeReviewHost(hostId);

  return useMutation({
    mutationFn: async ({
      context,
      conversationId,
      delivery,
    }: StartReviewVariables): Promise<StartReviewResult> => {
      const { gitRoot, cwd } = context;
      const reviewRequest = await resolveReviewRequest({
        context,
        hostId,
        intl,
      });
      const conversationHostId =
        conversationId == null
          ? null
          : scope.get(conversationHostIdByConversationId, conversationId);

      if (
        delivery === "inline" &&
        conversationId != null &&
        conversationHostId === hostId
      ) {
        if (codeReviewHost == null) {
          throw Error("Code review host is unavailable");
        }

        await startAppServerOperation("start-turn-for-host", {
          hostId: codeReviewHost.getHostId(),
          conversationId,
          params: {
            cwd,
            input: [
              {
                type: "text",
                text: reviewRequest.prompt,
                text_elements: [],
              },
            ],
            approvalsReviewer: "user",
            collaborationMode: null,
            inheritThreadSettings: false,
            serviceTier: await resolveServiceTier(scope, hostId, null),
          },
        });

        return {
          delivery: "inline",
          diffFilter: reviewRequest.diffFilter,
          baseBranch: reviewRequest.baseBranch,
        };
      }

      const newConversationId = await startAppServerOperation(
        "start-conversation",
        {
          hostId,
          input: [
            {
              type: "text",
              text: reviewRequest.prompt,
              text_elements: [],
            },
          ],
          cwd,
          workspaceRoots: [gitRoot],
          collaborationMode: null,
          serviceTier: await resolveServiceTier(scope, hostId, null),
          approvalsReviewer: "user",
        },
      );

      return {
        baseBranch: reviewRequest.baseBranch,
        conversationId: newConversationId,
        delivery: "detached",
        diffFilter: reviewRequest.diffFilter,
      };
    },
    onSuccess: (result: StartReviewResult) => {
      onSuccess(result);
    },
    onError: (error: unknown) => {
      logger.error("Failed to start quick review conversation", {
        safe: {},
        sensitive: {
          error,
        },
      });
      onError(error);
    },
  });
}

function useBaseBranchOverview(
  gitRoot: string | null | undefined,
  hostConfig: HostConfig,
  operationSource: string,
  options?: unknown,
) {
  return useGitBranchOverviewQuery(
    gitRoot,
    hostConfig,
    "base-branch",
    ({ root }: { root: string }) => ({
      operationSource,
      root,
    }),
    operationSource,
    options,
  );
}

function getReviewTargetBranches({
  currentBranch,
  defaultTargetBranch,
  recentBranches,
}: ReviewTargetBranchesOptions) {
  const branches: string[] = [];
  const candidates = [defaultTargetBranch ?? DEFAULT_BASE_BRANCH];
  const seenBranches = new Set<string>();

  if (currentBranch) {
    seenBranches.add(currentBranch);
  }

  if (recentBranches != null) {
    candidates.push(...recentBranches);
  }

  candidates.forEach((branch) => {
    if (!branch || seenBranches.has(branch)) {
      return;
    }

    branches.push(branch);
    seenBranches.add(branch);
  });

  return branches;
}

function ReviewModeTargetOptions({
  onSelectUnstaged,
  onSelectBaseBranch,
  isSubmitting,
  isLoadingBaseBranch,
  requiresXcodeLicense,
  isRetryingGit,
  onRetryGit,
}: ReviewModeTargetOptionsProps) {
  const intl = useIntl() as IntlShape;

  if (requiresXcodeLicense) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 text-sm" role="alert">
        <XcodeLicenseWarningIcon className="icon-xs shrink-0 text-token-charts-red" />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="font-medium text-token-foreground">
            <FormattedMessage
              id="composer.reviewMode.xcodeLicenseRequired.title"
              defaultMessage="Review the Xcode license to use Git"
              description="Title shown when Git cannot run until the user accepts the Xcode license"
            />
          </span>
          <span className="text-token-description-foreground">
            <FormattedMessage
              id="composer.reviewMode.xcodeLicenseRequired.detail"
              defaultMessage="In your terminal, run <command>sudo xcodebuild -license</command>, follow the prompts, and try again."
              description="Instructions shown when Git cannot run until the user accepts the Xcode license"
              values={{
                command: renderCommandCode,
              }}
            />
          </span>
        </div>
        <Button
          className="shrink-0"
          loading={isRetryingGit}
          onClick={onRetryGit}
          size="composerSm"
        >
          <FormattedMessage
            id="composer.reviewMode.xcodeLicenseRequired.retry"
            defaultMessage="Try again"
            description="Button label for retrying Git after accepting the Xcode license"
          />
        </Button>
      </div>
    );
  }

  const baseBranchTitle = intl.formatMessage({
    id: "composer.reviewMode.option.baseBranch.simple",
    defaultMessage: "Review against a base branch",
    description: "Button label for reviewing against a base branch",
  });
  const uncommittedTitle = intl.formatMessage({
    id: "composer.reviewMode.option.unstaged.simple",
    defaultMessage: "Review uncommitted changes",
    description: "Button label for reviewing unstaged changes",
  });

  return (
    <>
      <CommandMenuItem
        value="base-branch"
        title={baseBranchTitle}
        onSelect={onSelectBaseBranch}
        disabled={isSubmitting || isLoadingBaseBranch}
        RightIcon={isLoadingBaseBranch ? LoadingSpinnerIcon : undefined}
      />
      <CommandMenuItem
        value="unstaged"
        title={uncommittedTitle}
        onSelect={onSelectUnstaged}
        disabled={isSubmitting}
        RightIcon={isSubmitting ? LoadingSpinnerIcon : undefined}
      />
    </>
  );
}

function renderCommandCode(chunks: ReactNode) {
  return (
    <code className="font-mono" key="command">
      {chunks}
    </code>
  );
}

function ReviewModeBranchOptions({
  onSelect,
  branchLines,
  isLoading,
  isError,
  refetchBranchOverview,
  submittingBranchName,
}: ReviewModeBranchOptionsProps) {
  const isSubmittingBranch = submittingBranchName != null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 py-4 text-xs text-token-foreground/70">
        <LoadingSpinnerIcon className="size-3" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-2 py-2">
        <span className="text-center text-xs text-token-foreground/70">
          <FormattedMessage
            id="composer.reviewMode.branches.error"
            defaultMessage="Unable to load branches"
            description="Error message when branch list could not be loaded"
          />
        </span>
        <button
          type="button"
          className="text-xs font-medium text-token-text-link-foreground"
          onClick={refetchBranchOverview}
        >
          <FormattedMessage
            id="composer.reviewMode.branches.retry"
            defaultMessage="Retry"
            description="Retry button for branch list error"
          />
        </button>
      </div>
    );
  }

  return (
    <>
      {branchLines.map((item) => (
        <CommandMenuItem
          key={item.key}
          value={item.label}
          title={item.label}
          onSelect={onSelect}
          disabled={isSubmittingBranch}
          RightIcon={
            submittingBranchName === item.key ? LoadingSpinnerIcon : undefined
          }
        />
      ))}
    </>
  );
}

function ReviewModeContent({
  conversationId,
  onItemsChanged,
  onClose,
  cwd,
  hostConfig,
}: ReviewModeContentProps) {
  const scope = useRouteScopeContext(routeScopedStateStore) as ScopeStore;
  const intl = useIntl() as IntlShape;
  const [viewState, setViewState] = useState<ReviewModeViewState>({
    status: "choose-target",
  });
  const setActiveConversationId = useSetActiveConversationId();
  const { gitRoot } = getWorkspaceGitRoot(cwd, {
    hostId: hostConfig.id,
    source: "review_mode_content",
  }) as { gitRoot?: string | null };
  const {
    data: currentBranch,
    error: currentBranchError,
    isFetching: isRetryingCurrentBranch,
    isLoading: isLoadingCurrentBranch,
    refetch: refetchCurrentBranch,
  } = useCurrentGitBranch(gitRoot, hostConfig, "review_mode_content");
  const {
    data: baseBranchOverview,
    isLoading: isLoadingBaseBranchOverview,
    isError: isBaseBranchError,
    refetch: refetchBaseBranchOverview,
  } = useBaseBranchOverview(gitRoot, hostConfig, "review_mode_content");
  const {
    data: recentBranches,
    isLoading: isLoadingRecentBranches,
    isError: isRecentBranchesError,
    refetch: refetchRecentBranches,
  } = useGitRecentBranches(gitRoot, hostConfig, "review_mode_content");
  const defaultTargetBranch = getDefaultTargetBranch(
    baseBranchOverview ?? null,
  ) as string | null;
  const reviewDelivery = useSetting(settingsKeys.reviewDelivery) as
    | ReviewDelivery
    | null
    | undefined;
  const targetBranches = getReviewTargetBranches({
    currentBranch,
    defaultTargetBranch,
    recentBranches,
  });
  const isLoadingBranches =
    isLoadingBaseBranchOverview || isLoadingRecentBranches;
  const isBranchesError = isBaseBranchError || isRecentBranchesError;
  const refetchBranchOverview = () => {
    void Promise.all([refetchBaseBranchOverview(), refetchRecentBranches()]);
  };
  const showGitRootError = () => {
    scope.get(toastControllerSignal).danger(
      intl.formatMessage({
        id: "composer.reviewMode.gitRoot.error",
        defaultMessage: "Git root not found",
        description: "Toast shown when git root not found",
      }),
    );
  };
  const handleError = (error: unknown) => {
    logger.error("Failed to start code review", {
      safe: {},
      sensitive: {
        error,
      },
    });
    scope.get(toastControllerSignal).danger(
      intl.formatMessage({
        id: "composer.reviewMode.quickReviewError",
        defaultMessage: "Failed to start code review.",
        description: "Toast shown when quick review action fails",
      }),
    );
  };
  const handleSuccess = (result: StartReviewResult) => {
    setReviewDiffFilter(scope, result.diffFilter);

    if (result.delivery === "detached") {
      openReviewSidePanelForBranch(
        scope,
        result.conversationId,
        result.baseBranch,
      );
      setActiveConversationId(result.conversationId);
      return;
    }

    openReviewSidePanelForBranch(scope, conversationId, result.baseBranch);
    const activeTabId = scope.get(activeTabStore.activeTab$)?.tabId;
    setThreadBrowserSidePanelExpanded(
      scope,
      !activeTabId?.startsWith("sidechat:"),
    );
    scope.set(threadSidePanelExpandedSignal, false);
  };
  const { mutate, isPending, variables } = useStartReviewMutation({
    hostId: hostConfig.id,
    onError: handleError,
    onSuccess: handleSuccess,
  }) as {
    isPending: boolean;
    mutate: (
      variables: StartReviewVariables,
      options?: { onSuccess?: () => void },
    ) => void;
    variables?: StartReviewVariables;
  };
  const submittingBranchName =
    isPending && variables?.context.mode === "base-branch"
      ? variables.context.baseBranch
      : null;
  const startReview = (target: ReviewTarget) => {
    if (isPending) {
      return;
    }

    if (!gitRoot) {
      showGitRootError();
      return;
    }

    if (target === "base-branch") {
      logProductEvent(scope, reviewTargetProductEvent, {
        target: "base_branch",
      });
      setViewState({
        status: "choose-base",
      });
      onItemsChanged();
      return;
    }

    logProductEvent(scope, reviewTargetProductEvent, {
      target: "unstaged",
    });
    mutate(
      {
        conversationId,
        context: {
          mode: "uncommitted",
          sourceBranch: currentBranch ?? "HEAD",
          gitRoot,
          cwd,
        },
        delivery: reviewDelivery ?? "inline",
      },
      {
        onSuccess: onClose,
      },
    );
  };
  const startBranchReview = (baseBranch: string) => {
    if (isPending) {
      return;
    }

    if (!gitRoot) {
      showGitRootError();
      return;
    }

    mutate(
      {
        conversationId,
        context: {
          mode: "base-branch",
          sourceBranch: currentBranch ?? "HEAD",
          baseBranch,
          gitRoot,
          cwd,
        },
        delivery: reviewDelivery ?? "inline",
      },
      {
        onSuccess: onClose,
      },
    );
  };

  if (viewState.status === "choose-target") {
    return (
      <ReviewModeTargetOptions
        onSelectUnstaged={() => {
          startReview("unstaged");
        }}
        onSelectBaseBranch={() => {
          startReview("base-branch");
        }}
        isSubmitting={isPending}
        isLoadingBaseBranch={isLoadingCurrentBranch}
        requiresXcodeLicense={isXcodeLicenseError(currentBranchError)}
        isRetryingGit={isRetryingCurrentBranch}
        onRetryGit={() => {
          refetchCurrentBranch();
        }}
      />
    );
  }

  return (
    <ReviewModeBranchOptions
      onSelect={startBranchReview}
      branchLines={targetBranches.map(toBranchLine)}
      isLoading={isLoadingBranches}
      isError={isBranchesError}
      refetchBranchOverview={refetchBranchOverview}
      submittingBranchName={submittingBranchName}
    />
  );
}

function toBranchLine(branch: string): BranchLine {
  return {
    key: branch,
    label: branch,
  };
}

export { ReviewModeContent };
