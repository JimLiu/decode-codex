// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~projects-index-page~hotkey~ek7ayrmo-CGSZn3BZ.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~projects-index-page~hotkey~ek7ayrmo-BLROoMi3.js.
import { FormattedMessage } from "react-intl";
import { CheckCircleFilledIcon } from "../icons/check-circle-filled-icon";
import { ClockIcon } from "../icons/clock-icon";
import {
  getAttachedHeartbeatAutomationForThread,
  HeartbeatAutomationCheckRing,
  HeartbeatAutomationIcon,
} from "../utils/get-attached-heartbeat-automation-for-thread";
import { XCircleFilledIcon } from "../icons/x-circle-filled-icon";
type PullRequestCiStatus = "failing" | "none" | "passing" | "pending";
type PullRequestCheck = {
  status: string;
};
export function pullRequestChecksStatusLabel(status: PullRequestCiStatus) {
  switch (status) {
    case "failing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksFailing"
          defaultMessage="Checks failing"
          description="Status row shown when pull request checks are failing"
        />
      );
    case "none":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.noCiChecks"
          defaultMessage="No CI checks"
          description="Status row shown when the pull request currently has no CI checks"
        />
      );
    case "passing":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksSuccessful"
          defaultMessage="Checks successful"
          description="Status row shown when pull request checks are passing"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="localConversation.pullRequest.actions.checksPending"
          defaultMessage="Checks pending"
          description="Status row shown when pull request checks are still pending"
        />
      );
  }
}
export function PullRequestChecksSummary({
  checks,
  ciStatus,
}: {
  checks: readonly PullRequestCheck[];
  ciStatus: PullRequestCiStatus;
}) {
  if (checks.length === 0) {
    switch (ciStatus) {
      case "failing":
        return (
          <XCircleFilledIcon className="icon-sm shrink-0 text-token-charts-red" />
        );
      case "none":
        return <ClockIcon className="icon-sm shrink-0" />;
      case "passing":
        return (
          <CheckCircleFilledIcon className="icon-sm shrink-0 text-token-charts-green" />
        );
      case "pending":
        return (
          <HeartbeatAutomationIcon className="icon-sm shrink-0 text-token-charts-yellow" />
        );
    }
  }
  return ciStatus === "none" ? (
    <ClockIcon className="icon-sm shrink-0" />
  ) : (
    <HeartbeatAutomationCheckRing checks={checks} />
  );
}
export function initPullRequestChecksStatusLabelChunk(): void {}
export function initHeartbeatAutomationCheckRingChunk(): void {}
export function initAttachedHeartbeatAutomationLookupChunk(): void {}
export function initHeartbeatAutomationIconChunk(): void {}

export {
  getAttachedHeartbeatAutomationForThread,
  HeartbeatAutomationCheckRing,
  HeartbeatAutomationIcon,
};
