// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../boundaries/onboarding-commons-externals.facade";

const STATUS_CARD_CLASS =
  "role-status mb-4 flex min-h-[72px] items-center gap-3 rounded-2xl border border-token-input-border bg-token-input-background/90 px-5 py-3.5 text-token-foreground shadow-[0_4px_16px_0_rgba(0,0,0,0.05)] backdrop-blur-lg electron:dark:bg-token-dropdown-background";

export interface WindowsSandboxErrorProps {
  onRetry: () => void;
}

export function WindowsSandboxError({
  onRetry,
}: WindowsSandboxErrorProps): React.ReactElement {
  return (
    <div role="status" aria-live="polite" className={STATUS_CARD_CLASS}>
      <span
        className="size-6 shrink-0 text-token-charts-red"
        aria-hidden="true"
      >
        ✕
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium">
          <FormattedMessage
            id="codex.windowsSandboxBanner.readinessError"
            defaultMessage="Couldn't check Windows setup"
          />
        </p>
        <p className="text-sm text-token-text-secondary">
          <FormattedMessage
            id="codex.windowsSandboxBanner.readinessError.detail"
            defaultMessage="Try again to continue Windows setup"
          />
        </p>
      </div>
      <Button className="shrink-0" size="composerSm" onClick={onRetry}>
        <FormattedMessage
          id="codex.windowsSandboxBanner.readinessError.retryCta"
          defaultMessage="Try again"
        />
      </Button>
    </div>
  );
}

type WindowsSandboxRequirement = "setup" | "update";

export interface WindowsSandboxSetupBannerProps {
  cwd: string | null;
  requirement: WindowsSandboxRequirement;
  setShowWindowsSandboxBanner: (show: boolean) => void;
}

export function WindowsSandboxSetupBanner({
  cwd: _cwd,
  requirement,
  setShowWindowsSandboxBanner,
}: WindowsSandboxSetupBannerProps): React.ReactElement {
  const isUpdate = requirement === "update";
  return (
    <div role="status" aria-live="polite" className={STATUS_CARD_CLASS}>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium">
          <FormattedMessage
            id="codex.windowsSandboxBanner.title"
            defaultMessage="Finish Windows setup to continue"
          />
        </p>
        {isUpdate && (
          <p className="text-sm text-token-text-secondary">
            <FormattedMessage
              id="codex.windowsSandboxBanner.updateDetail"
              defaultMessage="An update is required to continue using the sandbox"
            />
          </p>
        )}
      </div>
      <Button
        className="shrink-0"
        size="composerSm"
        color="primary"
        onClick={() => setShowWindowsSandboxBanner(false)}
      >
        <FormattedMessage
          id="codex.windowsSandboxBanner.continueCta"
          defaultMessage="Continue"
        />
      </Button>
    </div>
  );
}
