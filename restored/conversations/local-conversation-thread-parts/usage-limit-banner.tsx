// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline transcript error banner plus the usage-limit messaging shown when a turn
// fails because the account hit its plan usage limit.

import type { ReactNode } from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { Banner } from "../../ui/banner";
import { InfoAlertCircleIcon } from "../../icons/info-alert-circle-icon";
import {
  formatUsageLimitResetDate,
  getUsageLimitResetWindow,
  InlineTranscriptStatusMessage,
  PlanType,
  rateLimitInfoAtom,
  useAtomValue,
  useSessionState,
  useSubscriptionQuery,
} from "../../boundaries/onboarding-commons-externals.facade";

export type UsageLimitVariant =
  | "manage-workspace"
  | "contact-workspace-owner"
  | "upgrade"
  | "upgrade-or-add-credits"
  | "add-credits"
  | "retry";

export interface UsageLimitVariantParams {
  plan: string | null | undefined;
  isWorkspaceAccount: boolean;
  isWorkspaceOwner: boolean;
}

export function getUsageLimitVariant({
  plan,
  isWorkspaceAccount,
  isWorkspaceOwner,
}: UsageLimitVariantParams): UsageLimitVariant {
  if (isWorkspaceAccount) {
    return isWorkspaceOwner ? "manage-workspace" : "contact-workspace-owner";
  }
  switch (plan) {
    case PlanType.FREE:
    case PlanType.GO:
      return "upgrade";
    case PlanType.PLUS:
    case PlanType.PROLITE:
      return "upgrade-or-add-credits";
    case PlanType.PRO:
      return "add-credits";
    case null:
    case undefined:
    default:
      return "retry";
  }
}

export interface InlineErrorBannerItem {
  errorInfo?: string;
  content: ReactNode;
}

export function InlineErrorBanner({ item }: { item: InlineErrorBannerItem }) {
  if (item.errorInfo === "usageLimitExceeded") {
    return <UsageLimitExceededMessage />;
  }
  return (
    <Banner
      layout="verticalIcon"
      Icon={InfoAlertCircleIcon}
      content={<span className="wrap-anywhere">{item.content}</span>}
    />
  );
}

export function UsageLimitExceededMessage() {
  const intl = useIntl();
  const { planAtLogin } = useSessionState();
  const { data } = useSubscriptionQuery();
  const { data: rateLimitInfo } = useAtomValue(rateLimitInfoAtom);

  const resetWindow = getUsageLimitResetWindow(rateLimitInfo);
  const resetDate =
    resetWindow == null ? null : formatUsageLimitResetDate(intl, resetWindow);

  const plan = data?.plan_type ?? planAtLogin;
  const isWorkspaceAccount = data?.structure === "workspace";
  const isWorkspaceOwner = data?.account_user_role === "account-owner";
  const variant = getUsageLimitVariant({
    plan,
    isWorkspaceAccount,
    isWorkspaceOwner,
  });

  return (
    <InlineTranscriptStatusMessage
      icon={<InfoAlertCircleIcon className="icon-xs" />}
      message={<UsageLimitMessage variant={variant} resetDate={resetDate} />}
      wrapMessage={true}
    />
  );
}

export interface UsageLimitMessageProps {
  variant: UsageLimitVariant;
  resetDate: string | null;
}

export function UsageLimitMessage({
  variant,
  resetDate,
}: UsageLimitMessageProps) {
  switch (variant) {
    case "manage-workspace":
      return (
        <FormattedMessage
          id="localConversation.usageLimit.workspaceOwner"
          defaultMessage="You've hit your usage limit. Review your workspace's usage settings to continue."
          description="Inline transcript message shown when a workspace owner reaches a usage limit."
        />
      );
    case "contact-workspace-owner":
      return (
        <FormattedMessage
          id="localConversation.usageLimit.workspaceMember"
          defaultMessage="You've hit your usage limit. Contact your workspace owner for more access."
          description="Inline transcript message shown when a workspace member reaches a usage limit."
        />
      );
    case "upgrade":
      return resetDate == null ? (
        <FormattedMessage
          id="localConversation.usageLimit.upgrade.noReset"
          defaultMessage="You've hit your usage limit. Upgrade your plan to continue, or try again later."
          description="Inline transcript usage-limit message prompting the user to upgrade without a known reset time."
        />
      ) : (
        <FormattedMessage
          id="localConversation.usageLimit.upgrade"
          defaultMessage="You've hit your usage limit. Upgrade your plan to continue, or try again at {resetDate}."
          description="Inline transcript usage-limit message prompting the user to upgrade."
          values={{ resetDate }}
        />
      );
    case "upgrade-or-add-credits":
      return resetDate == null ? (
        <FormattedMessage
          id="localConversation.usageLimit.upgradeOrAddCredits.noReset"
          defaultMessage="You've hit your usage limit. Upgrade your plan or add credits to continue, or try again later."
          description="Inline transcript usage-limit message prompting the user to upgrade or add credits without a known reset time."
        />
      ) : (
        <FormattedMessage
          id="localConversation.usageLimit.upgradeOrAddCredits"
          defaultMessage="You've hit your usage limit. Upgrade your plan or add credits to continue, or try again at {resetDate}."
          description="Inline transcript usage-limit message prompting the user to upgrade or add credits."
          values={{ resetDate }}
        />
      );
    case "add-credits":
      return resetDate == null ? (
        <FormattedMessage
          id="localConversation.usageLimit.addCredits.noReset"
          defaultMessage="You've hit your usage limit. Add credits to continue, or try again later."
          description="Inline transcript usage-limit message prompting the user to add credits without a known reset time."
        />
      ) : (
        <FormattedMessage
          id="localConversation.usageLimit.addCredits"
          defaultMessage="You've hit your usage limit. Add credits to continue, or try again at {resetDate}."
          description="Inline transcript usage-limit message prompting the user to add credits."
          values={{ resetDate }}
        />
      );
    case "retry":
      return resetDate == null ? (
        <FormattedMessage
          id="localConversation.usageLimit.retry.noReset"
          defaultMessage="You've hit your usage limit. Try again later."
          description="Fallback inline transcript message shown when a user reaches a usage limit without a known reset time."
        />
      ) : (
        <FormattedMessage
          id="localConversation.usageLimit.retry"
          defaultMessage="You've hit your usage limit. Try again at {resetDate}."
          description="Fallback inline transcript message shown when a user reaches a usage limit."
          values={{ resetDate }}
        />
      );
  }
}
