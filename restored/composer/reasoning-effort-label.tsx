// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Localized labels for model reasoning-effort levels and a small label renderer.
import type { ReactElement } from "react";
import { defineMessages, FormattedMessage } from "../vendor/react-intl";

export const REASONING_EFFORT_LABELS = defineMessages({
  none: {
    id: "composer.mode.local.reasoning.none.label",
    defaultMessage: "None",
    description: "Reasoning effort label for a given model: none",
  },
  minimal: {
    id: "composer.mode.local.reasoning.minimal.label",
    defaultMessage: "Minimal",
    description: "Reasoning effort label for a given model: minimal",
  },
  low: {
    id: "composer.mode.local.reasoning.low.label",
    defaultMessage: "Light",
    description: "Reasoning effort label for a given model: low",
  },
  medium: {
    id: "composer.mode.local.reasoning.medium.label",
    defaultMessage: "Medium",
    description: "Reasoning effort label for a given model: medium",
  },
  high: {
    id: "composer.mode.local.reasoning.high.label",
    defaultMessage: "High",
    description: "Reasoning effort label for a given model: high",
  },
  xhigh: {
    id: "composer.mode.local.reasoning.xhigh.label",
    defaultMessage: "Extra High",
    description: "Reasoning effort label for a given model: extra high",
  },
  max: {
    id: "composer.mode.local.reasoning.max.label",
    defaultMessage: "Max",
    description: "Reasoning effort label for a given model: maximum",
  },
  ultra: {
    id: "composer.mode.local.reasoning.ultra.label",
    defaultMessage: "Ultra",
    description: "Reasoning effort label for a given model: ultra",
  },
});

type ReasoningEffortLevel = keyof typeof REASONING_EFFORT_LABELS;

export interface ReasoningEffortLabelProps {
  effort: ReasoningEffortLevel;
}

export function initReasoningEffortLabelChunk(): void {}

export function ReasoningEffortLabel({
  effort,
}: ReasoningEffortLabelProps): ReactElement {
  return <FormattedMessage {...REASONING_EFFORT_LABELS[effort]} />;
}
