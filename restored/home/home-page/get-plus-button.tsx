// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Home page Plus upsell button and pricing dialog prefetch hook.
import type { MouseEvent } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  ComposerButton,
  SparklesIcon,
} from "../../boundaries/onboarding-commons-externals.facade";

export interface GetPlusButtonProps {
  onClick: (event: MouseEvent) => void;
}

function prefetchUpgradePlanDialog() {
  import("../../settings/upgrade-plan-dialog").catch(() => undefined);
}

export function GetPlusButton({ onClick }: GetPlusButtonProps) {
  return (
    <ComposerButton
      className="!bg-token-charts-purple/10 !text-token-charts-purple hover:!bg-token-charts-purple/20"
      color="secondary"
      onClick={onClick}
      onFocus={prefetchUpgradePlanDialog}
      onPointerEnter={prefetchUpgradePlanDialog}
      size="composerSm"
    >
      <SparklesIcon className="icon-xxs" />
      <FormattedMessage
        id="home.header.getPlus"
        defaultMessage="Get Plus"
        description="Upsell button label shown in the new thread page header for free users"
      />
    </ComposerButton>
  );
}
