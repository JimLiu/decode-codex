// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Synthetic inline divider shown when the model changes for the next turn, with a degradation warning tooltip.
import type { ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  Tooltip,
  InlineStatusDivider,
  ModelChangedIcon,
  InfoTooltipIcon,
  useModelsQuery,
  findModelById,
  formatModelLabel,
} from "../../boundaries/onboarding-commons-externals.facade";

interface ModelDescriptor {
  displayName?: string | null;
}

export interface ModelChangedDividerProps {
  fromModel: string;
  toModel: string;
}

function resolveModelDisplayName(
  modelId: string,
  models: ModelDescriptor[] | undefined,
): ReactNode {
  const displayName = findModelById(models, modelId)?.displayName;
  if (displayName != null && displayName.trim().length > 0) {
    return formatModelLabel(displayName);
  }
  return (
    <FormattedMessage
      id="composer.mode.local.model.custom"
      defaultMessage="Custom"
      description="Custom model from config"
    />
  );
}

export function ModelChangedDivider({
  fromModel,
  toModel,
}: ModelChangedDividerProps) {
  const { data } = useModelsQuery();
  const fromModelLabel = resolveModelDisplayName(fromModel, data?.models);
  const toModelLabel = resolveModelDisplayName(toModel, data?.models);

  const message = (
    <FormattedMessage
      id="localConversation.modelChanged"
      defaultMessage="Model changed from {fromModel} to {toModel}."
      description="Synthetic divider shown when model changes for the next turn."
      values={{ fromModel: fromModelLabel, toModel: toModelLabel }}
    />
  );

  const warning = (
    <div className="max-w-3xs text-center">
      <div>
        <FormattedMessage
          id="localConversation.modelChanged.warning.line1"
          defaultMessage="Changing models mid-conversation will degrade performance."
          description="First line of warning tooltip shown after the model-changed inline status."
        />
      </div>
      <div>
        <FormattedMessage
          id="localConversation.modelChanged.warning.line2"
          defaultMessage="Context may automatically compact."
          description="Second line of warning tooltip shown after the model-changed inline status."
        />
      </div>
    </div>
  );

  const trailingContent = (
    <Tooltip tooltipContent={warning}>
      <span className="inline-flex items-center">
        <InfoTooltipIcon className="icon-2xs" />
      </span>
    </Tooltip>
  );

  return (
    <InlineStatusDivider
      icon={<ModelChangedIcon className="icon-xs" />}
      message={message}
      trailingContent={trailingContent}
    />
  );
}
