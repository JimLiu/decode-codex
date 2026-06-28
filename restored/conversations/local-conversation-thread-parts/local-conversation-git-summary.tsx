// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Git and pull-request summary rows used by the local conversation summary panel.
import {
  GithubMarkIcon as GitHubIcon,
  initGitHubIcon,
} from "../../icons/github-mark-icon";
import { once } from "../../runtime/commonjs-interop";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  conversationCwdSignal,
  initConversationStateRuntime,
  storedThreadBranchSignal,
} from "../../runtime/conversation-state-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import {
  activeWorkflowSignal,
  BranchChangesIcon,
  CancelCreatePullRequestButton,
  cancelCreatePullRequestWorkflow,
  createPullRequestActionStateSignal,
  CreatePullRequestWorkflowPhaseLabel,
  githubCliAvailabilitySignal,
  initBranchChangesIconRuntime,
  initPullRequestGitSummaryRuntime,
  pullRequestStatusQuerySignal,
  useHeadBranchQuery,
} from "./pull-request-git-summary-runtime";
import {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
  initPullRequestVisualStateChunk,
} from "../../utils/pull-request-visual-state";
import { DiffStats, initDiffStatsChunk } from "../../git/git-review-primitives";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";
import {
  initPullRequestSummaryRowChunk,
  PullRequestSummaryRow,
  type PullRequestSummaryRowProps,
} from "./pull-request-summary-row";
import {
  initPullRequestStatusDetailRowsChunk,
  PullRequestStatusDetailRows,
  type PullRequestStatusDetailRowsProps,
} from "./pull-request-status-detail-rows";
import {
  initPullRequestSidePanelOpenerChunk,
  openPullRequestSidePanelTab,
} from "./pull-request-side-panel-tab";

type HostConfigForGitSummary = {
  id: string;
  [key: string]: unknown;
};

type DiffStatsMetrics = {
  additions: number;
  deletions: number;
};

export type BranchChangesSummaryRowProps = {
  diffStats?: DiffStatsMetrics | null;
  isDiffStatsLoading: boolean;
  onOpenReviewTab: () => void;
};

type HeadBranchQuery = {
  data?: string | null;
  isSuccess: boolean;
};

type CreatePullRequestActionState =
  | "disabled"
  | "enabled"
  | "hidden"
  | string
  | null
  | undefined;

type GithubCliAvailability =
  | "available"
  | "error"
  | "loading"
  | "missing"
  | "unauthenticated"
  | null
  | undefined;

type ActiveWorkflow = {
  phase?: unknown;
  workflow?: string | null;
};

type PullRequestStatus = NonNullable<
  PullRequestStatusDetailRowsProps["pullRequestStatus"]
> &
  PullRequestSummaryRowProps["pullRequestStatus"];

type OpenPullRequestSidePanelRequest = Parameters<
  typeof openPullRequestSidePanelTab
>[1];

type PullRequestStatusQuery =
  | {
      type: "success";
      data: PullRequestStatus;
    }
  | {
      type: "error" | "loading" | "not-found";
      data?: PullRequestStatus;
    };

export type LocalConversationGitSummaryProps = {
  conversationId?: string | null;
  cwd: string;
  hostConfig: HostConfigForGitSummary;
  onCreatePullRequest: () => void;
  workspaceBrowserRoot?: string | null;
};

const GITHUB_STATUS_ICON_CLASS_NAME =
  "icon-sm shrink-0 text-token-text-tertiary";

export function BranchChangesSummaryRow({
  diffStats,
  isDiffStatsLoading,
  onOpenReviewTab,
}: BranchChangesSummaryRowProps) {
  let branchIcon = <BranchChangesIcon className="icon-sm shrink-0" />,
    changesLabel = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.branchChangesLabel"
        defaultMessage="Changes"
        description="Label for the branch changes row"
      />
    );
  let trailingDiffStats = isDiffStatsLoading ? (
    <Spinner className="icon-xs text-token-text-tertiary" />
  ) : diffStats == null ? null : (
    <DiffStats
      className="text-size-chat shrink-0"
      linesAdded={diffStats.additions}
      linesRemoved={diffStats.deletions}
    />
  );
  return (
    <SummaryPanelRow
      icon={branchIcon}
      label={changesLabel}
      onClick={onOpenReviewTab}
      trailing={trailingDiffStats}
      trailingVisible={true}
    />
  );
}

function getPullRequestTitleOrFallback(
  title: string | null | undefined,
  fallbackTitle: string,
) {
  return title?.trim() || fallbackTitle;
}

const initPullRequestTitleFallbackChunk = once(() => {});

export function LocalConversationGitSummary({
  conversationId,
  cwd,
  hostConfig,
  workspaceBrowserRoot,
  onCreatePullRequest,
}: LocalConversationGitSummaryProps) {
  let scope = useScope(localConversationRouteScope),
    threadWorkspaceBrowserRoot = useScopedValue(
      conversationCwdSignal,
      conversationId,
    ) as string | null | undefined,
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ) as string | null | undefined,
    workspaceRoot = threadWorkspaceBrowserRoot ?? workspaceBrowserRoot,
    headBranchQuery = useHeadBranchQuery(
      workspaceRoot,
      hostConfig,
      "local_conversation_git_summary",
    ) as HeadBranchQuery,
    createPullRequestActionParams = {
      cwd,
      hostConfig,
    };
  let createPullRequestActionState = useScopedValue(
      createPullRequestActionStateSignal,
      createPullRequestActionParams,
    ) as CreatePullRequestActionState,
    headBranchName = headBranchQuery.data?.trim() ?? "",
    normalizedHeadBranchName = getPullRequestTitleOrFallback(
      storedThreadBranch,
      headBranchName,
    );
  let headBranch = normalizedHeadBranchName,
    hasEmptyHeadBranch =
      headBranchQuery.isSuccess && headBranchName.length === 0,
    workflowParams = {
      cwd,
      hostId: hostConfig.id,
    };
  let activeWorkflow = useScopedValue(activeWorkflowSignal, workflowParams) as
      | ActiveWorkflow
      | null
      | undefined,
    workflowPhase = activeWorkflow?.phase ?? null,
    isCreatePrWorkflow = activeWorkflow?.workflow === "create-pr",
    ghCliAvailability = useScopedValue(
      githubCliAvailabilitySignal,
      hostConfig.id,
    ) as GithubCliAvailability,
    pullRequestStatusParams = {
      cwd: workspaceRoot,
      headBranch,
      hostId: hostConfig.id,
      operationSource: "local_conversation_git_summary",
    };
  let pullRequestStatusQuery = useScopedValue(
    pullRequestStatusQuerySignal,
    pullRequestStatusParams,
  ) as PullRequestStatusQuery;
  if (
    workspaceRoot == null ||
    (!hasEmptyHeadBranch && headBranchName.length === 0)
  )
    return null;
  if (hasEmptyHeadBranch) {
    if (
      isCreatePrWorkflow &&
      workflowPhase != null &&
      (pullRequestStatusQuery.type !== "success" ||
        pullRequestStatusQuery.data.hasOpenPr !== true)
    ) {
      let cancelCreatePullRequest = () =>
        cancelCreatePullRequestWorkflow({
          cwd,
          hostId: hostConfig.id,
        });
      return (
        <CreatePullRequestProgressSummaryRow
          phase={workflowPhase}
          onCancel={cancelCreatePullRequest}
        />
      );
    }
    return (
      <CreatePullRequestSummaryAction
        createPullRequestActionState={createPullRequestActionState}
        ghCliAvailability={ghCliAvailability}
        onCreatePullRequest={onCreatePullRequest}
        workflowPhase={workflowPhase}
      />
    );
  }
  if (
    isCreatePrWorkflow &&
    workflowPhase != null &&
    (pullRequestStatusQuery.type !== "success" ||
      pullRequestStatusQuery.data.hasOpenPr !== true)
  ) {
    let cancelCreatePullRequest = () =>
      cancelCreatePullRequestWorkflow({
        cwd,
        hostId: hostConfig.id,
      });
    return (
      <CreatePullRequestProgressSummaryRow
        phase={workflowPhase}
        onCancel={cancelCreatePullRequest}
      />
    );
  }
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  if (pullRequestStatusQuery.type === "error") {
    return (
      <SummaryPanelRow
        className="!text-token-text-tertiary"
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.pullRequestUnavailable"
            defaultMessage="Pull request status unavailable"
            description="GitHub status row shown when PR status cannot be loaded"
          />
        }
      />
    );
  }
  if (pullRequestStatusQuery.type === "loading") {
    return (
      <SummaryPanelRow
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.checkingPullRequest"
            defaultMessage="Checking pull request"
            description="GitHub status row shown while loading PR data"
          />
        }
      />
    );
  }
  let createPullRequestRow =
    createPullRequestActionState === "hidden" ? null : (
      <CreatePullRequestSummaryRow
        isCreatePullRequestEnabled={createPullRequestActionState === "enabled"}
        onCreatePullRequest={onCreatePullRequest}
        workflowPhase={workflowPhase}
      />
    );
  let fallbackRow = createPullRequestRow;
  if (pullRequestStatusQuery.type === "not-found") return fallbackRow;
  let pullRequestStatus = pullRequestStatusQuery.data,
    visualState = getPullRequestVisualState({
      hasOpenPr: pullRequestStatus.hasOpenPr,
      isDraft: pullRequestStatus.isDraft,
      url: pullRequestStatus.url,
    });
  if (visualState == null) return fallbackRow;
  let mergeVisualState = getPullRequestMergeVisualState({
      canMerge: pullRequestStatus.canMerge,
      ciStatus: pullRequestStatus.ciStatus,
      hasMergeConflicts: pullRequestStatus.mergeBlocker === "conflicts",
      status: visualState,
    }) as PullRequestSummaryRowProps["visualState"],
    pullRequestSummaryRow = (
      <PullRequestSummaryRow
        conversationId={conversationId}
        hostId={hostConfig.id}
        onOpenSidePanel={({ hostId, item, repo }) => {
          openPullRequestSidePanelTab(scope, {
            hostId,
            item: item as OpenPullRequestSidePanelRequest["item"],
            repo,
          });
        }}
        pullRequestStatus={pullRequestStatus}
        visualState={mergeVisualState}
      />
    );
  let detailRows = (
    <PullRequestStatusDetailRows
      conversationId={conversationId}
      headBranch={headBranchName}
      pullRequestStatus={pullRequestStatus}
    />
  );
  return (
    <div className="relative z-10 flex flex-col">
      {pullRequestSummaryRow}
      {detailRows}
    </div>
  );
}

type CreatePullRequestSummaryActionProps = {
  createPullRequestActionState: CreatePullRequestActionState;
  ghCliAvailability: GithubCliAvailability;
  onCreatePullRequest: () => void;
  workflowPhase: unknown;
};

function CreatePullRequestSummaryAction({
  createPullRequestActionState,
  ghCliAvailability,
  onCreatePullRequest,
  workflowPhase,
}: CreatePullRequestSummaryActionProps) {
  if (createPullRequestActionState === "hidden") return null;
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  let isCreatePullRequestEnabled = createPullRequestActionState === "enabled";
  return (
    <CreatePullRequestSummaryRow
      isCreatePullRequestEnabled={isCreatePullRequestEnabled}
      onCreatePullRequest={onCreatePullRequest}
      workflowPhase={workflowPhase}
    />
  );
}

type CreatePullRequestSummaryRowProps = {
  isCreatePullRequestEnabled: boolean;
  onCreatePullRequest: () => void;
  workflowPhase: unknown;
};

function CreatePullRequestSummaryRow({
  isCreatePullRequestEnabled,
  onCreatePullRequest,
  workflowPhase,
}: CreatePullRequestSummaryRowProps) {
  let isDisabled = workflowPhase != null || !isCreatePullRequestEnabled,
    icon = <GithubStatusPlaceholderIcon />,
    label = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.createPullRequest"
        defaultMessage="Create pull request"
        description="GitHub status row shown when no PR exists for the branch"
      />
    );
  return (
    <SummaryPanelRow
      disabled={isDisabled}
      onClick={onCreatePullRequest}
      icon={icon}
      label={label}
    />
  );
}

function getGithubCliStatusSummaryRow(
  ghCliAvailability: GithubCliAvailability,
) {
  switch (ghCliAvailability) {
    case "loading":
    case "error":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.checkingPullRequest"
              defaultMessage="Checking pull request"
              description="GitHub status row shown while loading PR data"
            />
          }
        />
      );
    case "missing":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliUnavailable"
              defaultMessage="GitHub CLI unavailable"
              description="GitHub status row shown when gh is not installed"
            />
          }
        />
      );
    case "unauthenticated":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliSignedOut"
              defaultMessage="GitHub CLI not authenticated"
              description="GitHub status row shown when gh is not authenticated"
            />
          }
        />
      );
    case "available":
    default:
      return null;
  }
}

type CreatePullRequestProgressSummaryRowProps = {
  phase: unknown;
  onCancel: () => void;
};

function CreatePullRequestProgressSummaryRow({
  phase,
  onCancel,
}: CreatePullRequestProgressSummaryRowProps) {
  let spinnerIcon = <Spinner className={GITHUB_STATUS_ICON_CLASS_NAME} />,
    phaseLabel = <CreatePullRequestWorkflowPhaseLabel phase={phase} />,
    cancelButton = <CancelCreatePullRequestButton onCancel={onCancel} />;
  return (
    <SummaryPanelRow
      icon={spinnerIcon}
      label={phaseLabel}
      trailing={cancelButton}
      trailingVisible={true}
    />
  );
}

function GithubStatusPlaceholderIcon() {
  return <GitHubIcon className={GITHUB_STATUS_ICON_CLASS_NAME} />;
}

const initBranchChangesSummaryRowChunk = once(() => {
  initIntlRuntime();
  initSpinnerComponent();
  initDiffStatsChunk();
  initBranchChangesIconRuntime();
  initSummaryPanelRowChunk();
});

const initLocalConversationGitSummaryChunk = once(() => {
  initBranchChangesSummaryRowChunk();
  initLocalConversationRouteRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initSpinnerComponent();
  initGitHubIcon();
  initPullRequestGitSummaryRuntime();
  initPullRequestVisualStateChunk();
  initSummaryPanelRowChunk();
  initPullRequestTitleFallbackChunk();
  initPullRequestSummaryRowChunk();
  initPullRequestStatusDetailRowsChunk();
  initPullRequestSidePanelOpenerChunk();
});

(
  LocalConversationGitSummary as typeof LocalConversationGitSummary & {
    initChunk: () => void;
  }
).initChunk = initLocalConversationGitSummaryChunk;
