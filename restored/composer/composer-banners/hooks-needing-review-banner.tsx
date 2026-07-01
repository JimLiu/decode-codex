// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../boundaries/onboarding-commons-externals.facade";

interface HooksMutation {
  mutate: (hooks: unknown[]) => void;
}

export interface HooksNeedingReviewBannerProps {
  count: number;
  hooksNeedingReview: HooksMutation | null;
  hostId: string | null;
  projectRoot: string | null;
}

export function HooksNeedingReviewBanner({
  count,
  hooksNeedingReview,
  hostId: _hostId,
  projectRoot: _projectRoot,
}: HooksNeedingReviewBannerProps): React.ReactElement {
  function handleTrustAll(): void {
    if (hooksNeedingReview != null) {
      hooksNeedingReview.mutate([]);
    }
  }

  function handleReviewHooks(): void {
    // Navigate to settings section for hook review
  }

  return (
    <div className="bg-token-editor-warning-background/20 rounded-3xl">
      <div className="flex items-center gap-2 px-3 py-1.5">
        <span
          className="icon-2xs text-token-editor-warning-foreground"
          aria-hidden="true"
        >
          ⚠
        </span>
        <span className="text-token-text-secondary flex-1 text-sm">
          <FormattedMessage
            id="codex.hooksReviewBanner.summary"
            defaultMessage="{count, plural, one {# hook needs review before it can run} other {# hooks need review before they can run}}"
            values={{ count }}
          />
        </span>
        <div className="flex gap-1">
          <Button
            color="ghostActive"
            size="composerSm"
            onClick={handleTrustAll}
          >
            <FormattedMessage
              id="codex.hooksReviewBanner.trustAll"
              defaultMessage="Trust all"
            />
          </Button>
          <Button
            color="ghostActive"
            size="composerSm"
            onClick={handleReviewHooks}
          >
            <FormattedMessage
              id="codex.hooksReviewBanner.review"
              defaultMessage="Review hooks"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
