// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Banner } from "../../ui/banner";
import { Button } from "../../boundaries/onboarding-commons-externals.facade";

interface RateLimit {
  remaining: number;
  limit: number;
}

export interface RateLimitBannerProps {
  isUsageBannerEnabled: boolean;
  modelName: string | null;
  resetAt: number | null;
  rateLimit: RateLimit | null;
  rateLimitWarningThreshold: number;
  showModelLimit: boolean;
  showWorkspaceUsageLimit: boolean;
  showUpsell: boolean;
}

export function RateLimitBanner({
  isUsageBannerEnabled,
  rateLimit,
  rateLimitWarningThreshold,
  showModelLimit,
  showWorkspaceUsageLimit,
  showUpsell,
  modelName,
  resetAt: _resetAt,
}: RateLimitBannerProps): React.ReactElement | null {
  if (!isUsageBannerEnabled || rateLimit == null) return null;

  if (showUpsell || showWorkspaceUsageLimit) {
    return (
      <Banner
        type="error"
        title={
          <FormattedMessage
            id="composer.rateLimit.upsell.title"
            defaultMessage="Usage limit reached"
          />
        }
        content={
          <FormattedMessage
            id="composer.rateLimit.upsell.content"
            defaultMessage="Upgrade your plan to continue sending messages"
          />
        }
      />
    );
  }

  if (showModelLimit) {
    return (
      <Banner
        type="info"
        title={
          <FormattedMessage
            id="composer.rateLimit.model.title"
            defaultMessage="Model limit reached"
          />
        }
        content={
          <FormattedMessage
            id="composer.rateLimit.model.content"
            defaultMessage="{model} has reached its limit. Switch to another model to continue."
            values={{ model: modelName ?? "This model" }}
          />
        }
      />
    );
  }

  const usedPercent =
    rateLimit.limit > 0
      ? ((rateLimit.limit - rateLimit.remaining) / rateLimit.limit) * 100
      : 0;

  if (usedPercent < rateLimitWarningThreshold) return null;

  return (
    <Banner
      type="infoAccent"
      content={
        <FormattedMessage
          id="composer.rateLimit.warning"
          defaultMessage="You're approaching your usage limit. {remaining} messages remaining."
          values={{ remaining: rateLimit.remaining }}
        />
      }
    />
  );
}

export interface FirstBlockRateLimitBannerProps {
  domain: string;
  threadId: string;
  turnId: string;
}

export function FirstBlockRateLimitBanner({
  domain: _domain,
  threadId: _threadId,
  turnId: _turnId,
}: FirstBlockRateLimitBannerProps): React.ReactElement {
  return (
    <Banner
      type="error"
      title={
        <FormattedMessage
          id="composer.firstBlock.title"
          defaultMessage="Message blocked"
        />
      }
      content={
        <FormattedMessage
          id="composer.firstBlock.content"
          defaultMessage="This message was blocked due to safety guidelines. Please revise and try again."
        />
      }
    />
  );
}

type MessageLimitVariant =
  | "first_block"
  | "repeated_blocks"
  | "soft_limit"
  | "hard_limit";

export interface AnnouncementBannerProps {
  conversationId: string;
  variant: MessageLimitVariant;
  onClose: () => void;
}

export function AnnouncementBanner({
  conversationId: _conversationId,
  variant,
  onClose,
}: AnnouncementBannerProps): React.ReactElement {
  const isBlock = variant === "first_block" || variant === "repeated_blocks";

  return (
    <Banner
      type={isBlock ? "error" : "info"}
      title={
        isBlock ? (
          <FormattedMessage
            id="composer.announcement.blocked.title"
            defaultMessage="Message blocked"
          />
        ) : (
          <FormattedMessage
            id="composer.announcement.limit.title"
            defaultMessage="Usage notice"
          />
        )
      }
      content={
        isBlock ? (
          <FormattedMessage
            id="composer.announcement.blocked.content"
            defaultMessage="Your message was blocked. Please revise and try again."
          />
        ) : (
          <FormattedMessage
            id="composer.announcement.limit.content"
            defaultMessage="You are approaching your usage limit for this period."
          />
        )
      }
      customCtas={
        <Button color="ghost" size="composerSm" onClick={onClose}>
          <FormattedMessage
            id="composer.announcement.dismiss"
            defaultMessage="Dismiss"
          />
        </Button>
      }
    />
  );
}
