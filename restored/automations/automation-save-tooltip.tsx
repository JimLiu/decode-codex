// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Tooltip shown on a disabled automation save/create button listing every
// missing requirement (title, prompt, project, schedule, …) as one sentence.
import type { ReactElement } from "react";
import type { IntlShape } from "../vendor/react-intl";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { validateAutomationDraft } from "./shared";

type AutomationDraft = Parameters<typeof validateAutomationDraft>[0];

type RequirementPosition = "initial" | "continuation";

export interface AutomationSaveTooltipProps {
  draft: AutomationDraft;
  action: "create" | "save";
}

function formatMissingRequirement({
  intl,
  requirement,
  position,
}: {
  intl: IntlShape;
  requirement: string;
  position: RequirementPosition;
}): string | undefined {
  switch (requirement) {
    case "name":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.name.initial",
            defaultMessage: "Create title",
            description:
              "Tooltip requirement shown first when the automation title is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.name.continuation",
            defaultMessage: "create title",
            description:
              "Tooltip requirement shown after the first item when the automation title is missing",
          });
    case "prompt":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.prompt.initial",
            defaultMessage: "Add prompt",
            description:
              "Tooltip requirement shown first when the automation prompt is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.prompt.continuation",
            defaultMessage: "add prompt",
            description:
              "Tooltip requirement shown after the first item when the automation prompt is missing",
          });
    case "cwd":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.cwd.initial",
            defaultMessage: "Select project",
            description:
              "Tooltip requirement shown first when the automation project selection is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.cwd.continuation",
            defaultMessage: "select project",
            description:
              "Tooltip requirement shown after the first item when the automation project selection is missing",
          });
    case "thread":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.thread.initial",
            defaultMessage: "Select chat",
            description:
              "Tooltip requirement shown first when the heartbeat automation thread selection is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.thread.continuation",
            defaultMessage: "select chat",
            description:
              "Tooltip requirement shown after the first item when the heartbeat automation thread selection is missing",
          });
    case "executionEnvironment":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.executionEnvironment.initial",
            defaultMessage: "Choose where to run it",
            description:
              "Tooltip requirement shown first when the automation execution environment is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.executionEnvironment.continuation",
            defaultMessage: "choose where to run it",
            description:
              "Tooltip requirement shown after the first item when the automation execution environment is missing",
          });
    case "model":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.model.initial",
            defaultMessage: "Choose a model",
            description:
              "Tooltip requirement shown first when the automation model is missing",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.model.continuation",
            defaultMessage: "choose a model",
            description:
              "Tooltip requirement shown after the first item when the automation model is missing",
          });
    case "schedule":
      return position === "initial"
        ? intl.formatMessage({
            id: "settings.automations.saveTooltip.schedule.initial",
            defaultMessage: "Fix the schedule",
            description:
              "Tooltip requirement shown first when the automation schedule is invalid",
          })
        : intl.formatMessage({
            id: "settings.automations.saveTooltip.schedule.continuation",
            defaultMessage: "fix the schedule",
            description:
              "Tooltip requirement shown after the first item when the automation schedule is invalid",
          });
    default:
      return undefined;
  }
}

export function AutomationSaveTooltip({
  draft,
  action,
}: AutomationSaveTooltipProps): ReactElement | null {
  const intl = useIntl();
  const { missingRequirements } = validateAutomationDraft(draft);
  if (missingRequirements.length === 0) {
    return null;
  }
  const formattedRequirements = missingRequirements.map((requirement, index) =>
    formatMissingRequirement({
      intl,
      requirement,
      position: index === 0 ? "initial" : "continuation",
    }),
  );
  const requirements = intl.formatList(
    formattedRequirements.filter((part): part is string => part != null),
    { type: "conjunction" },
  );
  return action === "create" ? (
    <FormattedMessage
      id="settings.automations.saveTooltip.combined.create"
      defaultMessage="{requirements} to create"
      description="Tooltip on the disabled automation create button combining all missing requirements"
      values={{ requirements }}
    />
  ) : (
    <FormattedMessage
      id="settings.automations.saveTooltip.combined.save"
      defaultMessage="{requirements} to save"
      description="Tooltip on the disabled automation save button combining all missing requirements"
      values={{ requirements }}
    />
  );
}

export function initAutomationSaveTooltipChunk(): void {
  void AutomationSaveTooltip;
}
