// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull request side-panel tab content, body queries, and opener.
import React, { type MouseEvent, type ReactNode } from "react";
import {
  ExternalLinkIcon,
  initExternalLinkIconChunk,
} from "../../icons/external-link-icon";
import { once } from "../../runtime/commonjs-interop";
import { useScope, useSignalValue } from "../../runtime/app-scope-hooks";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import {
  initHostQueryRuntime,
  QUERY_DURATIONS,
  useHostQuery,
} from "../../runtime/host-query-runtime";
import {
  PlatformContentGate,
  initVscodeBridgeRuntime,
} from "../../runtime/platform-content-runtime";
import {
  initResourceOpenRuntime,
  openInBrowserFromEvent,
} from "../../runtime/resource-open-runtime";
import {
  activateThreadSidePanelPosition,
  getExistingThreadSidePanelPosition,
  initPullRequestCurrentBranchRuntime,
  initPullRequestDescriptionMarkdownRuntime,
  initPullRequestSidePanelPositionRuntime,
  parsePullRequestDescriptionMarkdown,
  PullRequestDescriptionMarkdown,
  pullRequestCurrentBranchSignal,
  threadSidePanelPositionControllers,
} from "./pull-request-side-panel-runtime";
import {
  getThreadBranchMismatchState,
  initThreadBranchComparisonRuntime,
} from "./pull-request-prompt-runtime";
import { PullRequestStatusIcon } from "../../github/pull-request-status";
import {
  PullRequestMergeActions,
  initPullRequestMergeActionsChunk,
} from "../../github/pull-request-actions";
import {
  initUnifiedDiffFileSummariesChunk,
  parseUnifiedDiffFileSummaries,
} from "../../utils/unified-diff-file-summaries";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";
import {
  getPullRequestFixDisabledReason,
  type PullRequestFixDisabledReason,
} from "./pull-request-fix-tooltips";
import {
  initPullRequestSidePanelDetailsSummaryChunk,
  initPullRequestSidePanelErrorMessageChunk,
  initPullRequestSidePanelLoadingStateChunk,
  PullRequestSidePanelDetailsSummary,
  PullRequestSidePanelErrorMessage,
  PullRequestSidePanelLoadingState,
} from "./pull-request-side-panel-primitives";
import {
  initPullRequestSidePanelChecksSectionChunk,
  PullRequestSidePanelChecksSection,
} from "./pull-request-side-panel-checks-section";
import {
  initPullRequestSidePanelCommentsSectionChunk,
  PullRequestSidePanelCommentsSection,
} from "./pull-request-side-panel-comments-section";
import {
  initPullRequestSidePanelConflictsSectionChunk,
  PullRequestSidePanelConflictsSection,
} from "./pull-request-side-panel-conflicts-section";
import {
  initPullRequestSidePanelOverviewSectionChunk,
  PullRequestSidePanelOverviewSection,
} from "./pull-request-side-panel-overview-section";

type PullRequestBoardItem = {
  additions: number;
  baseBranch: string;
  cwd: string;
  deletions: number;
  headBranch: string;
  isAuthor: boolean;
  mergeBlocker?: PullRequestMergeBlocker;
  number: number;
  state: "draft" | "merged" | string;
  title: string;
  url: string;
};

type PullRequestRepo = unknown;

type PullRequestSidePanelRequest = {
  cwd: string;
  headBranch: string;
  hostId: string;
  number: number;
  repo: PullRequestRepo;
};

type PullRequestBodyResult = {
  body?: string | null;
  hasOpenPr?: boolean | null;
  isDraft?: boolean | null;
  mergeBlocker?: PullRequestMergeBlocker;
  repo?: PullRequestRepo | null;
  status?: string;
};

type PullRequestMergeBlocker = "conflicts" | "unknown" | null;

type PullRequestPanelScope = {
  get: (signal: unknown) => {
    formatMessage: (
      descriptor: {
        defaultMessage: string;
        description: string;
        id: string;
      },
      values?: Record<string, unknown>,
    ) => string;
  };
  value: {
    routeConversationId?: string | null;
  };
};

type OpenPullRequestSidePanelTabParams = {
  hostId: string;
  item: PullRequestBoardItem;
  repo: PullRequestRepo;
};

type PullRequestSidePanelTabContentProps = OpenPullRequestSidePanelTabParams;

type PullRequestSidePanelDetailsProps = {
  bodyError?: ReactNode;
  bodyIsLoading: boolean;
  item: PullRequestBoardItem;
  pullRequestBody?: PullRequestBodyResult | null;
  request: PullRequestSidePanelRequest;
};

type PullRequestSidePanelDescriptionSectionProps = {
  body?: string | null;
  error?: ReactNode;
  loading: boolean;
};

function PullRequestSidePanelDescriptionSection({
  body,
  error,
  loading,
}: PullRequestSidePanelDescriptionSectionProps) {
  let header = (
    <PullRequestSidePanelDetailsSummary>
      <FormattedMessage
        id="pullRequestSidePanel.description.title"
        defaultMessage="Description"
        description="Pull request description section title"
      />
    </PullRequestSidePanelDetailsSummary>
  );
  return (
    <details open={true} className="group flex flex-col">
      {header}
      <div className="group-open:pt-2">
        {error == null ? (
          loading || body == null ? (
            <PullRequestSidePanelLoadingState
              label={
                <FormattedMessage
                  id="pullRequestSidePanel.description.loading"
                  defaultMessage="Loading description"
                  description="Loading label for the pull request description"
                />
              }
            />
          ) : body.trim().length > 0 ? (
            <PullRequestDescriptionMarkdown
              allowBasicHtml={true}
              className="text-base text-token-foreground [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_li]:leading-5 [&_p]:leading-5"
              cwd={null}
            >
              {parsePullRequestDescriptionMarkdown(body)}
            </PullRequestDescriptionMarkdown>
          ) : (
            <p className="py-2 text-base text-token-text-tertiary">
              <FormattedMessage
                id="pullRequestSidePanel.description.empty"
                defaultMessage="No description provided"
                description="Empty pull request description in the side panel"
              />
            </p>
          )
        ) : (
          <PullRequestSidePanelErrorMessage description={error} />
        )}
      </div>
    </details>
  );
}

const initPullRequestSidePanelDescriptionSectionChunk = once(() => {
  initIntlRuntime();
  initPullRequestDescriptionMarkdownRuntime();
  initPullRequestSidePanelErrorMessageChunk();
  initPullRequestSidePanelDetailsSummaryChunk();
  initPullRequestSidePanelLoadingStateChunk();
});

function PullRequestSidePanelDetails({
  bodyError,
  bodyIsLoading,
  item,
  pullRequestBody,
  request,
}: PullRequestSidePanelDetailsProps) {
  let scope = useScope(composerScope) as PullRequestPanelScope,
    { data } = useSignalValue(pullRequestCurrentBranchSignal) as {
      data?: string | null;
    },
    fixDisabledReason: PullRequestFixDisabledReason | null =
      getThreadBranchMismatchState({
        currentBranch: data,
        storedThreadBranch: item.headBranch,
      }).hasThreadBranchMismatch
        ? "branch-mismatch"
        : null,
    hasOpenPullRequest = pullRequestBody?.hasOpenPr ?? null,
    mergeFixDisabledReason = getPullRequestFixDisabledReason({
      baseBranch: item.baseBranch,
      conversationId: scope.value.routeConversationId,
      fixDisabledReason,
      hasOpenPr: hasOpenPullRequest,
      headBranch: item.headBranch,
      prNumber: item.number,
    });
  let checksQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: {
      intervalMs: QUERY_DURATIONS.ONE_MINUTE,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    },
  };
  let {
    data: checksResult,
    error: checksError,
    isError: checksHaveError,
    isLoading: checksAreLoading,
  } = useHostQuery("gh-pr-checks", checksQueryOptions);
  let commentsQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: {
      intervalMs: QUERY_DURATIONS.ONE_MINUTE,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    },
  };
  let {
      data: commentsResult,
      error: commentsError,
      isError: commentsHaveError,
      isLoading: commentsAreLoading,
    } = useHostQuery("gh-pr-comments", commentsQueryOptions),
    mergeBlocker =
      pullRequestBody == null
        ? item.mergeBlocker
        : pullRequestBody.mergeBlocker,
    repo = pullRequestBody?.repo ?? request.repo ?? null,
    diffRequest = {
      cwd: request.cwd,
      hostId: request.hostId,
      number: item.number,
      repo,
    };
  let shouldLoadConflictDiff = mergeBlocker === "conflicts",
    diffQueryOptions = {
      source: "pull_request_board",
      params: diffRequest,
      queryConfig: {
        enabled: shouldLoadConflictDiff,
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      },
    };
  let {
      data: diffResult,
      error: diffError,
      isError: diffHaveError,
      isLoading: diffIsLoading,
    } = useHostQuery("gh-pr-diff", diffQueryOptions),
    checksData = checksResult?.status === "success" ? checksResult : null,
    commentsData = commentsResult?.status === "success" ? commentsResult : null,
    conflictFilePaths =
      diffResult?.status === "success"
        ? parseUnifiedDiffFileSummaries(diffResult.unifiedDiff, {
            maxFiles: 20,
          }).map(getPullRequestDiffFileDisplayPath)
        : null;
  let overviewSection = (
    <PullRequestSidePanelOverviewSection
      hostId={request.hostId}
      item={item}
      checks={checksData}
      checksHaveError={checksHaveError}
      checksAreLoading={checksAreLoading}
      comments={commentsData}
      commentsHaveError={commentsHaveError}
      commentsAreLoading={commentsAreLoading}
      mergeBlocker={mergeBlocker}
      repo={repo}
    />
  );
  let bodySection = (
    <PullRequestSidePanelDescriptionSection
      body={pullRequestBody?.body ?? null}
      error={bodyError}
      loading={bodyIsLoading}
    />
  );
  let checksSection = (
    <PullRequestSidePanelChecksSection
      data={checksData}
      error={checksError?.message}
      fixDisabledReason={mergeFixDisabledReason}
      item={item}
      loading={checksAreLoading}
    />
  );
  let conflictSection =
    mergeBlocker === "conflicts" ? (
      <PullRequestSidePanelConflictsSection
        error={
          diffResult?.status === "error" ? diffResult.error : diffError?.message
        }
        files={conflictFilePaths}
        fixDisabledReason={mergeFixDisabledReason}
        hasError={diffHaveError || diffResult?.status === "error"}
        item={item}
        loading={diffIsLoading}
        repo={repo}
      />
    ) : null;
  let commentsSection = (
    <PullRequestSidePanelCommentsSection
      data={commentsData}
      error={commentsError?.message}
      fixDisabledReason={mergeFixDisabledReason}
      item={item}
      loading={commentsAreLoading}
    />
  );
  return (
    <>
      {overviewSection}
      {bodySection}
      {checksSection}
      {conflictSection}
      {commentsSection}
    </>
  );
}

type PullRequestDiffFile = {
  newPath: string;
  oldPath: string;
};

function getPullRequestDiffFileDisplayPath(diffFile: PullRequestDiffFile) {
  return diffFile.newPath === "/dev/null" ? diffFile.oldPath : diffFile.newPath;
}

const initPullRequestSidePanelDetailsChunk = once(() => {
  initComposerScopeRuntime();
  initUnifiedDiffFileSummariesChunk();
  initThreadBranchComparisonRuntime();
  initPullRequestCurrentBranchRuntime();
  initHostQueryRuntime();
  initVscodeBridgeRuntime();
  initPullRequestSidePanelChecksSectionChunk();
  initPullRequestSidePanelCommentsSectionChunk();
  initPullRequestSidePanelConflictsSectionChunk();
  initPullRequestSidePanelDescriptionSectionChunk();
  initPullRequestSidePanelOverviewSectionChunk();
});

type PullRequestSidePanelHeaderProps = {
  hostId: string;
  item: PullRequestBoardItem;
  pullRequestBody?: PullRequestBodyResult | null;
  request: PullRequestSidePanelRequest;
};

function PullRequestSidePanelHeader({
  hostId,
  item,
  pullRequestBody,
  request,
}: PullRequestSidePanelHeaderProps) {
  let intl = useIntl(),
    pullRequestState =
      pullRequestBody == null
        ? item.state === "draft" || item.state === "merged"
          ? item.state
          : "open"
        : pullRequestBody.hasOpenPr === false
          ? "merged"
          : pullRequestBody.isDraft
            ? "draft"
            : "open";
  let titleNode = (
    <div className="truncate text-base leading-5 font-medium text-token-foreground">
      {item.title}
    </div>
  );
  let stateNode = (
    <div className="text-sm leading-5 text-token-text-tertiary">
      {pullRequestState === "draft" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.draft"
          defaultMessage="Draft"
          description="Draft pull request state shown in the side panel header"
        />
      ) : pullRequestState === "merged" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.merged"
          defaultMessage="Merged"
          description="Merged pull request state shown in the side panel header"
        />
      ) : (
        <FormattedMessage
          id="pullRequestSidePanel.state.open"
          defaultMessage="Open"
          description="Open pull request state shown in the side panel header"
        />
      )}
    </div>
  );
  let titleBlock = (
    <div className="flex min-w-0 flex-col">
      {titleNode}
      {stateNode}
    </div>
  );
  let openPullRequestLabel = intl.formatMessage({
    id: "pullRequestSidePanel.openOnGitHub",
    defaultMessage: "Open pull request on GitHub",
    description:
      "Accessible label for opening a pull request from the side panel",
  });
  let trackOpenOnGitHub = (event: MouseEvent<HTMLAnchorElement>) => {
    openInBrowserFromEvent({
      event,
      href: item.url,
      initiator: "pull_request_link",
    });
  };
  let githubLink = (
    <a
      aria-label={openPullRequestLabel}
      className="cursor-interaction rounded-lg p-1.5 text-token-foreground hover:bg-token-list-hover-background"
      href={item.url}
      rel="noreferrer"
      target="_blank"
      onClick={trackOpenOnGitHub}
    >
      <ExternalLinkIcon className="icon-sm" href={item.url} />
    </a>
  );
  let mergeActions = (
    <PullRequestMergeActions
      hostId={hostId}
      item={item}
      pullRequestBody={pullRequestBody}
      request={request}
      surface="thread_side_panel"
      variant="side-panel"
    />
  );
  let actionGroup = (
    <div className="flex shrink-0 items-center gap-2">
      {githubLink}
      {mergeActions}
    </div>
  );
  return (
    <header className="flex h-[50px] items-start justify-between gap-4">
      {titleBlock}
      {actionGroup}
    </header>
  );
}

let PullRequestSidePanelTabContent: (
  props: PullRequestSidePanelTabContentProps,
) => ReactElement;

const initPullRequestSidePanelTabChunk = once(() => {
  initIntlRuntime();
  initResourceOpenRuntime();
  initExternalLinkIconChunk();
  initHostQueryRuntime();
  initVscodeBridgeRuntime();
  initPullRequestMergeActionsChunk();
  initPullRequestSidePanelDetailsChunk();
  PullRequestSidePanelTabContent = function PullRequestSidePanelTabContent({
    hostId,
    item,
    repo,
  }: PullRequestSidePanelTabContentProps) {
    let request = {
      cwd: item.cwd,
      headBranch: item.headBranch,
      hostId,
      number: item.number,
      repo,
    };
    let bodyQueryOptions = {
      source: "pull_request_board",
      params: request,
      queryConfig: {
        intervalMs: QUERY_DURATIONS.ONE_MINUTE,
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      },
    };
    let { data, error, isLoading } = useHostQuery(
        "gh-pr-body",
        bodyQueryOptions,
      ),
      pullRequestBody = data?.status === "success" ? data : null;
    return (
      <div className="h-full min-h-0 overflow-y-auto bg-token-main-surface-primary">
        <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5 pb-4">
          <PullRequestSidePanelHeader
            hostId={hostId}
            item={item}
            pullRequestBody={pullRequestBody}
            request={request}
          />
          <PullRequestSidePanelDetails
            bodyError={error?.message}
            bodyIsLoading={isLoading}
            item={item}
            pullRequestBody={pullRequestBody}
            request={request}
          />
        </main>
      </div>
    );
  };
});

type PullRequestSidePanelPosition = "bottom" | "left" | "right";

export function openPullRequestSidePanelTab(
  scope: PullRequestPanelScope,
  { hostId, item, repo }: OpenPullRequestSidePanelTabParams,
  activate: boolean = true,
  fallbackPosition: PullRequestSidePanelPosition = "right",
) {
  let tabId = `pull-request:${item.url}`,
    targetPosition =
      getExistingThreadSidePanelPosition(scope, tabId) ?? fallbackPosition;
  return (
    threadSidePanelPositionControllers(targetPosition).openTab(
      scope,
      PullRequestSidePanelTabContent,
      {
        activate,
        defaultState: () => ({}),
        icon: React.createElement(PullRequestStatusIcon, {
          className: "icon-xs shrink-0",
          status:
            item.state === "draft" || item.state === "merged"
              ? item.state
              : "open",
        }),
        id: tabId,
        props: {
          hostId,
          item,
          repo,
        },
        title: scope.get(PlatformContentGate).formatMessage(
          {
            id: "thread.sidePanel.pullRequestTab.title",
            defaultMessage: "PR #{number}",
            description: "Title for a pull request side-panel tab",
          },
          {
            number: item.number,
          },
        ),
        tooltip: item.title,
      },
    ),
    activate && activateThreadSidePanelPosition(scope, targetPosition),
    true
  );
}

export const initPullRequestSidePanelOpenerChunk = once(() => {
  initPullRequestSidePanelPositionRuntime();
  initPullRequestSidePanelTabChunk();
});
