// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Synthetic inline divider shown when a request is rerouted to another model (incl. cyber-abuse reroute warning).
import { FormattedMessage } from "../../vendor/react-intl";
import {
  Tooltip,
  InlineStatusDivider,
  InfoTooltipIcon,
  formatModelLabel,
} from "../../boundaries/onboarding-commons-externals.facade";

export interface ModelReroutedDividerProps {
  toModel: string;
  reason?: string;
}

function CyberReviewLink(label: React.ReactNode) {
  return (
    <a
      href="https://chatgpt.com/cyber"
      target="_blank"
      rel="noreferrer"
      className="text-token-link underline-offset-2 hover:underline"
    >
      {label}
    </a>
  );
}

export function ModelReroutedDivider({
  toModel,
  reason,
}: ModelReroutedDividerProps) {
  const isHighRiskCyberActivity = reason === "highRiskCyberActivity";
  const toModelLabel = formatModelLabel(toModel);

  const message = (
    <FormattedMessage
      id="localConversation.modelRerouted"
      defaultMessage="Your request was routed to {toModel}."
      description="Synthetic divider shown when a request is rerouted to another model."
      values={{ toModel: toModelLabel }}
    />
  );

  const trailingContent = isHighRiskCyberActivity ? (
    <Tooltip
      interactive
      tooltipContent={
        <div className="max-w-3xs text-center whitespace-normal">
          <div>
            <FormattedMessage
              id="localConversation.modelRerouted.warning.line1"
              defaultMessage="Heads up, your request was re-routed to reduce cyber-abuse risk."
              description="First line of warning tooltip shown after the model-rerouted inline status."
            />
          </div>
          <div className="mt-2">
            <FormattedMessage
              id="localConversation.modelRerouted.warning.line2"
              defaultMessage="Think this is a mistake? Request a review at <link>chatgpt.com/cyber</link> or report via /feedback"
              description="Second line of warning tooltip shown after the model-rerouted inline status."
              values={{ link: CyberReviewLink }}
            />
          </div>
        </div>
      }
    >
      <InfoTooltipIcon className="icon-2xs" />
    </Tooltip>
  ) : null;

  return (
    <InlineStatusDivider message={message} trailingContent={trailingContent} />
  );
}
