// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pull request summary row and browser-sidebar entry point for the local conversation summary panel.
import type { KeyboardEvent, MouseEvent } from "react";
import {
  ExternalLinkIcon,
  initExternalLinkIconChunk,
} from "../../icons/external-link-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../../runtime/app-scope-hooks";
import {
  browserSidebarEnabledSignal,
  initBrowserFeatureAvailabilityRuntime,
} from "../../runtime/browser-feature-runtime";
import {
  featureGateSignal,
  initFeatureGateSignalRuntime,
} from "../../runtime/feature-gate-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import {
  initResourceOpenRuntime,
  openInBrowserFromEvent,
} from "../../runtime/resource-open-runtime";
import {
  initPullRequestAnalyticsChunk,
  logPullRequestViewedFromSidePanel,
  trackPullRequestAction,
} from "../../github/pull-request-actions";
import { PullRequestCheckStatusIcon } from "../../github/pull-request-status";
import { useIntl } from "../../vendor/react-intl";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import {
  BrowserSidebarMenu,
  initBrowserSidebarMenuChunk,
} from "../../ui/browser-sidebar-menu";
import {
  buildExternalLinkContextMenuItems,
  canOpenExternalLinkInBrowserSidebar,
} from "../../utils/external-link";

type PullRequestBoardItem = {
  number?: number | null;
  state?: string | null;
  title?: string | null;
  url?: string | null;
};

type PullRequestStatusForSummary = {
  boardItem?: PullRequestBoardItem | null;
  number?: number | null;
  repo: unknown;
  title?: string | null;
  url?: string | null;
};

type OpenPullRequestSidePanelParams = {
  hostId: string;
  item: PullRequestBoardItem;
  repo: unknown;
};

export type PullRequestSummaryRowProps = {
  conversationId?: string | null;
  hostId: string;
  onOpenSidePanel: (params: OpenPullRequestSidePanelParams) => void;
  pullRequestStatus: PullRequestStatusForSummary;
  visualState:
    | "draft"
    | "failing"
    | "in_progress"
    | "merged"
    | "ready"
    | "successful";
};

export function PullRequestSummaryRow({
  conversationId,
  hostId,
  onOpenSidePanel,
  pullRequestStatus,
  visualState,
}: PullRequestSummaryRowProps) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    isBrowserSidebarEnabled = useSignalValue(browserSidebarEnabledSignal),
    canOpenInSidePanel = useScopedValue(featureGateSignal, "1590905736"),
    { boardItem } = pullRequestStatus,
    shouldOpenInSidePanel = canOpenInSidePanel && boardItem != null,
    pullRequestUrl = pullRequestStatus.url ?? boardItem?.url ?? null,
    openInBrowser = (event: MouseEvent) => {
      if (pullRequestUrl == null) return;
      if (boardItem != null) {
        trackPullRequestAction(scope, {
          action: "open_in_browser",
          item: boardItem,
          surface: "thread_side_panel",
        });
      }
      openInBrowserFromEvent({
        event,
        href: pullRequestUrl,
        initiator: "pull_request_link",
      });
    };

  let handleOpenInBrowser = openInBrowser,
    openPullRequest = (event: MouseEvent) => {
      if (pullRequestUrl == null) return;
      if (shouldOpenInSidePanel && boardItem != null) {
        logPullRequestViewedFromSidePanel(scope, {
          item: boardItem,
          surface: "thread_side_panel",
        });
        onOpenSidePanel({
          hostId,
          item: boardItem,
          repo: pullRequestStatus.repo,
        });
        return;
      }
      handleOpenInBrowser(event);
    };

  let summaryTitle = formatPullRequestSummaryTitle(
      pullRequestStatus.number,
      pullRequestStatus.title,
      intl,
    ),
    statusIcon = (
      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <PullRequestCheckStatusIcon
          className="icon-xs"
          state={visualState}
          tone="currentColor"
        />
      </span>
    ),
    externalLinkTrailingIcon =
      pullRequestUrl == null ? undefined : shouldOpenInSidePanel ? (
        <a
          aria-label={intl.formatMessage({
            id: "codex.localConversation.gitSummary.openPullRequestOnGitHub",
            defaultMessage: "Open pull request on GitHub",
            description:
              "Accessible label for opening a pull request on GitHub from its summary row",
          })}
          className="cursor-interaction text-token-text-tertiary hover:text-token-foreground"
          href={pullRequestUrl}
          rel="noreferrer"
          target="_blank"
          onClick={(event) => {
            event.stopPropagation();
            handleOpenInBrowser(event);
          }}
          onKeyDown={stopPullRequestSummaryLinkPropagation}
        >
          <ExternalLinkIcon className="icon-xs" href={pullRequestUrl} />
        </a>
      ) : (
        <ExternalLinkIcon
          className="icon-xs text-token-text-tertiary"
          href={pullRequestUrl}
        />
      ),
    rowClickHandler = pullRequestUrl == null ? undefined : openPullRequest,
    rowNode = (
      <SummaryPanelRow
        aria-label={summaryTitle}
        icon={statusIcon}
        label={summaryTitle}
        trailing={externalLinkTrailingIcon}
        onClick={rowClickHandler}
      />
    );

  if (
    conversationId == null ||
    pullRequestUrl == null ||
    !canOpenExternalLinkInBrowserSidebar({
      href: pullRequestUrl,
      isBrowserSidebarEnabled,
    })
  ) {
    return rowNode;
  }

  let browserSidebarItems = buildExternalLinkContextMenuItems({
    conversationId,
    href: pullRequestUrl,
    initiator: "side_panel_menu",
  });
  return (
    <BrowserSidebarMenu items={browserSidebarItems}>
      {rowNode}
    </BrowserSidebarMenu>
  );
}

function stopPullRequestSummaryLinkPropagation(
  event: MouseEvent | KeyboardEvent,
) {
  event.stopPropagation();
}

function formatPullRequestSummaryTitle(
  number: number | null | undefined,
  title: string | null | undefined,
  intl: ReturnType<typeof useIntl>,
) {
  if (title != null) return title;
  let fallbackNumber =
    number == null
      ? intl.formatMessage({
          id: "codex.localConversation.gitSummary.pullRequestFallbackNumber",
          defaultMessage: "-",
          description:
            "Fallback displayed when a pull request number is unavailable",
        })
      : `#${number}`;
  return intl.formatMessage(
    {
      id: "codex.localConversation.gitSummary.pullRequestWithState",
      defaultMessage: "PR {number}",
      description: "GitHub PR row with pull request number and status",
    },
    {
      number: fallbackNumber,
    },
  );
}

export const initPullRequestSummaryRowChunk = once(() => {
  initLocalConversationRouteRuntime();
  initBrowserFeatureAvailabilityRuntime();
  initBrowserSidebarMenuChunk();
  initResourceOpenRuntime();
  initExternalLinkIconChunk();
  initPullRequestAnalyticsChunk();
  initFeatureGateSignalRuntime();
  initSummaryPanelRowChunk();
});
