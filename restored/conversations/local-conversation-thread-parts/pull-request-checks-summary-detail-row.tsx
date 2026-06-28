// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import type { MouseEvent, ReactNode } from "react";
import {
  CheckCircleFilledIcon as CheckCircleIcon,
  initCheckCircleFilledIcon,
} from "../../icons/check-circle-filled-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  initTooltipPrimitives,
  Tooltip,
  TooltipProvider,
} from "../../ui/tooltip-b";
import {
  initResourceOpenRuntime,
  openInBrowserFromEvent,
} from "../../runtime/resource-open-runtime";
import { XCircleFilledIcon as PullRequestFailedCheckIcon } from "../../icons/x-circle-filled-icon";
import {
  HeartbeatAutomationCheckRing,
  HeartbeatAutomationIcon,
  initHeartbeatAutomationCheckRingChunk,
  initHeartbeatAutomationIconChunk,
} from "../../github/pull-request-checks-summary";
import {
  PullRequestInlineActionButton,
  PullRequestUnknownCheckIcon,
  initPullRequestCheckStatusIconChunk,
  initPullRequestInlineActionButtonChunk,
} from "../../github/pull-request-actions";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";

type PullRequestCheck = {
  link?: string | null;
  name: string;
  status: "failing" | "passing" | "pending" | "skipped" | "unknown";
  workflow?: string | null;
};

type PullRequestChecksSummaryState = {
  checks: PullRequestCheck[];
  ciStatus: "passing" | "none" | "failing" | "pending";
};

type PullRequestChecksSummaryRowProps = {
  canFixFailingChecks?: boolean;
  fixTooltipContent?: ReactNode;
  onFixFailingChecks?: (checks: PullRequestCheck[]) => void;
  pullRequestStatus?: PullRequestChecksSummaryState | null;
};

const PULL_REQUEST_CHECK_STATUS_ORDER: PullRequestCheck["status"][] = [
  "failing",
  "pending",
  "skipped",
  "unknown",
  "passing",
];

function PullRequestRichTooltip({
  children,
  content,
  triggerAsChild = false,
}: {
  children: ReactNode;
  content: ReactNode;
  triggerAsChild?: boolean;
}) {
  let tooltipContent = <TooltipProvider>{content}</TooltipProvider>,
    triggerContent = <TooltipProvider>{children}</TooltipProvider>;
  return (
    <Tooltip
      align="start"
      className="w-full border-0 bg-transparent p-0 text-left"
      delayDuration={0}
      interactive={true}
      side="right"
      sideOffset={4}
      variant="rich"
      tooltipContent={tooltipContent}
      tooltipMaxWidth="min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
      triggerAsChild={triggerAsChild}
    >
      {triggerContent}
    </Tooltip>
  );
}

function PullRequestFlyoutContent({ children }: { children?: ReactNode }) {
  let body =
    children == null ? null : (
      <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3">
        {children}
      </div>
    );
  return (
    <div className="flex max-h-96 min-h-0 w-96 max-w-full flex-1 flex-col overflow-hidden rounded-xl py-1">
      {body}
    </div>
  );
}

const initPullRequestRichTooltipChunk = once(() => {
  initTooltipPrimitives();
});

export class PullRequestRichFlyout {
  static Tooltip = PullRequestRichTooltip;
  static Content = PullRequestFlyoutContent;
}

export function PullRequestChecksSummaryRow({
  canFixFailingChecks = false,
  fixTooltipContent,
  onFixFailingChecks,
  pullRequestStatus,
}: PullRequestChecksSummaryRowProps) {
  if (pullRequestStatus == null || pullRequestStatus.checks.length === 0) {
    return null;
  }
  let failingChecks = pullRequestStatus.checks.filter(
    isFailingPullRequestCheck,
  );
  let checksToFix = failingChecks,
    hasFixableFailingChecks =
      checksToFix.length > 0 && onFixFailingChecks != null,
    getChecksByStatus = (status: PullRequestCheck["status"]) =>
      pullRequestStatus.checks.filter((item) => item.status === status),
    orderedChecks = PULL_REQUEST_CHECK_STATUS_ORDER.flatMap(getChecksByStatus),
    checkRows = orderedChecks.map(PullRequestCheckFlyoutRowItem);
  let popoverContent = (
    <PullRequestFlyoutContent>{checkRows}</PullRequestFlyoutContent>
  );
  let fixFailingChecksAction = hasFixableFailingChecks ? (
    <PullRequestInlineActionButton
      color="ghostTertiary"
      disabled={!canFixFailingChecks}
      tooltipContent={fixTooltipContent}
      onClick={() => {
        onFixFailingChecks(checksToFix);
      }}
    >
      <FormattedMessage
        id="codex.localConversation.gitSummary.fixFailingChecks"
        defaultMessage="Fix"
        description="Summary panel row action label for fixing failing pull request checks"
      />
    </PullRequestInlineActionButton>
  ) : undefined;
  let actionsVisible = hasFixableFailingChecks,
    checksIcon = (
      <HeartbeatAutomationCheckRing checks={pullRequestStatus.checks} />
    );
  let checksLabel = getPullRequestChecksSummaryLabel(
    pullRequestStatus.checks,
    pullRequestStatus.ciStatus,
  );
  let summaryRow = (
    <SummaryPanelRow
      actions={fixFailingChecksAction}
      actionsVisible={actionsVisible}
      icon={checksIcon}
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={checksLabel}
    />
  );
  return (
    <PullRequestRichTooltip
      triggerAsChild={hasFixableFailingChecks}
      content={popoverContent}
    >
      {summaryRow}
    </PullRequestRichTooltip>
  );
}

function PullRequestCheckFlyoutRowItem(check: PullRequestCheck, index: number) {
  return (
    <PullRequestCheckFlyoutRow
      key={`${check.name}-${check.workflow ?? ""}-${index}`}
      check={check}
    />
  );
}

function isFailingPullRequestCheck(check: PullRequestCheck) {
  return check.status === "failing";
}

function PullRequestCheckFlyoutRow({ check }: { check: PullRequestCheck }) {
  let checkLink = check.link,
    statusIcon = <PullRequestCheckStatusIcon status={check.status} />;
  let isInteractive = checkLink != null,
    statusLabel = (
      <span className="text-sm text-token-description-foreground">
        <PullRequestCheckStatusLabel status={check.status} />
      </span>
    );
  let handleClick =
    checkLink == null
      ? undefined
      : (event: MouseEvent) => {
          openInBrowserFromEvent({
            event,
            href: checkLink,
            initiator: "pull_request_link",
          });
        };
  return (
    <SummaryPanelRow
      icon={statusIcon}
      interactive={isInteractive}
      label={check.name}
      trailing={statusLabel}
      trailingVisible={true}
      onClick={handleClick}
    />
  );
}

function PullRequestCheckStatusIcon({
  status,
}: {
  status: PullRequestCheck["status"];
}) {
  switch (status) {
    case "failing": {
      return (
        <PullRequestFailedCheckIcon className="icon-sm shrink-0 text-token-charts-red" />
      );
    }
    case "passing": {
      return (
        <CheckCircleIcon className="icon-sm shrink-0 text-token-charts-green" />
      );
    }
    case "pending": {
      return (
        <HeartbeatAutomationIcon className="icon-sm shrink-0 text-token-charts-yellow" />
      );
    }
    case "skipped":
    case "unknown": {
      return (
        <PullRequestUnknownCheckIcon className="icon-sm shrink-0 text-token-text-tertiary" />
      );
    }
  }
}

function PullRequestCheckStatusLabel({
  status,
}: {
  status: PullRequestCheck["status"];
}) {
  switch (status) {
    case "failing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.failed"
          defaultMessage="Failed"
          description="Status label for a failed check in the thread summary panel flyout"
        />
      );
    }
    case "passing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.succeeded"
          defaultMessage="Succeeded"
          description="Status label for a successful check in the thread summary panel flyout"
        />
      );
    }
    case "pending": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.running"
          defaultMessage="Running"
          description="Status label for a pending check in the thread summary panel flyout"
        />
      );
    }
    case "skipped": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.skipped"
          defaultMessage="Skipped"
          description="Status label for a skipped check in the thread summary panel flyout"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.unknown"
          defaultMessage="Unknown"
          description="Status label for an unknown check in the thread summary panel flyout"
        />
      );
    }
  }
}

function getPullRequestChecksSummaryLabel(
  checks: PullRequestCheck[],
  ciStatus: PullRequestChecksSummaryState["ciStatus"],
) {
  let failingCheckCount = checks.filter(
      (item) => item.status === "failing",
    ).length,
    pendingCheckCount = checks.filter(
      (item) => item.status === "pending",
    ).length;
  if (failingCheckCount > 0) {
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.failingChecks.count"
        defaultMessage={
          "{count, plural, one {# failing check} other {# failing checks}}"
        }
        description="Summary panel row label when pull request checks are failing"
        values={{
          count: failingCheckCount,
        }}
      />
    );
  }
  if (pendingCheckCount > 0) {
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.pendingChecks.count"
        defaultMessage={
          "{count, plural, one {# pending check} other {# pending checks}}"
        }
        description="Summary panel row label when pull request checks are pending"
        values={{
          count: pendingCheckCount,
        }}
      />
    );
  }
  switch (ciStatus) {
    case "passing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksSuccessful"
          defaultMessage="Checks successful"
          description="Summary panel row label when all pull request checks have completed successfully"
        />
      );
    case "none":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.noChecks"
          defaultMessage="No CI checks"
          description="Summary panel row label when the pull request has no checks"
        />
      );
    case "failing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksFailing"
          defaultMessage="Checks failing"
          description="Summary panel row label when pull request checks failed without individual failure details"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.pendingChecks"
          defaultMessage="Pending checks"
          description="Summary panel row label when pull request checks are pending without individual pending details"
        />
      );
  }
}

const initPullRequestChecksSummaryRowChunk = once(() => {
  initIntlRuntime();
  initResourceOpenRuntime();
  initCheckCircleFilledIcon();
  initPullRequestCheckStatusIconChunk();
  initHeartbeatAutomationIconChunk();
  initHeartbeatAutomationCheckRingChunk();
  initPullRequestInlineActionButtonChunk();
  initPullRequestRichTooltipChunk();
  initSummaryPanelRowChunk();
});

Object.assign(PullRequestChecksSummaryRow, {
  initChunk: initPullRequestChecksSummaryRowChunk,
});
