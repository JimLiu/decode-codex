// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { AutomationNameInput } from "../automation-name-input";
import { AutomationPromptForm } from "../automation-prompt-form";
import { AutomationExecutionEnvironmentDropdown } from "../automation-execution-environment-dropdown";
import { AutomationHeartbeatThreadDropdown } from "../automation-heartbeat-thread-dropdown";
import { AutomationModelReasoningDropdown } from "../automation-model-reasoning-dropdown";
import { AutomationSchedulePicker } from "../automation-schedule-picker";
import { WorkspaceFolderDropdown } from "../../boundaries/onboarding-commons-externals.facade";
import { AUTOMATION_SIDE_PANEL_FORM_ID } from "./constants";
import {
  AutomationDetailPill,
  AutomationDetailRow,
  AutomationDetailSection,
  AutomationStatusBadge,
} from "./status-components";
import type { AutomationSidePanelController } from "./use-automation-side-panel-controller";

export function AutomationSidePanelBody({
  controller,
}: {
  controller: AutomationSidePanelController;
}): ReactElement {
  const {
    draft,
    executionEnvironmentId,
    executionEnvironmentOptions,
    folderOptions,
    handleExecutionEnvironmentSelect,
    handleFolderChange,
    handleModelSelect,
    handleNameChange,
    handleScheduleConfigChange,
    handleSubmit,
    handleThreadSelect,
    hasPinnedThreads,
    hideExecutionEnvironment,
    intl,
    isHeartbeat,
    lastRunLabel,
    nextRunLabel,
    roots,
    session,
    threadOptions,
    updateDraft,
  } = controller;

  const statusSection =
    session.type === "persisted" ? (
      <AutomationDetailSection
        title={
          <FormattedMessage
            id="inbox.automations.statusSection"
            defaultMessage="Status"
            description="Section label above the automation status section in the right rail"
          />
        }
      >
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.status.label",
            defaultMessage: "Status",
            description:
              "Label for the automation status row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationStatusBadge status={draft.status as string} />
        </AutomationDetailRow>
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.nextRun.label",
            defaultMessage: "Next run",
            description:
              "Label for the automation next run time row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationDetailPill>{nextRunLabel}</AutomationDetailPill>
        </AutomationDetailRow>
        <AutomationDetailRow
          label={intl.formatMessage({
            id: "inbox.automations.lastRun.label",
            defaultMessage: "Last ran",
            description:
              "Label for the automation last run time row in the settings rail",
          })}
          variant="compact"
        >
          <AutomationDetailPill>{lastRunLabel}</AutomationDetailPill>
        </AutomationDetailRow>
      </AutomationDetailSection>
    ) : null;

  const executionEnvironmentRow = hideExecutionEnvironment ? null : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.executionEnvironment.label",
        defaultMessage: "Runs in",
        description:
          "Label for the automation execution environment row in the details rail",
      })}
      variant="compact"
    >
      <div className="flex items-center gap-1">
        <AutomationExecutionEnvironmentDropdown
          selectedId={executionEnvironmentId}
          optionIds={executionEnvironmentOptions}
          align="end"
          className="!text-base"
          showIcon={false}
          ariaLabel={intl.formatMessage({
            id: "settings.automations.executionEnvironment.ariaLabel",
            defaultMessage: "Execution environment",
            description: "Aria label for execution environment dropdown",
          })}
          onSelect={handleExecutionEnvironmentSelect}
        />
      </div>
    </AutomationDetailRow>
  );

  const destinationRow = isHeartbeat ? (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.targetThread.label",
        defaultMessage: "Chat",
        description:
          "Label for the heartbeat automation target thread row in the details rail",
      })}
      variant="compact"
    >
      <AutomationHeartbeatThreadDropdown
        selectedThreadId={draft.targetThreadId}
        options={threadOptions}
        hasPinnedThreads={hasPinnedThreads}
        align="end"
        className="!text-base"
        showIcon={false}
        onSelect={handleThreadSelect}
      />
    </AutomationDetailRow>
  ) : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.folder.label",
        defaultMessage: "Project",
        description: "Label for the automation folder row in the details rail",
      })}
      variant="compact"
    >
      <WorkspaceFolderDropdown
        selectedRoots={draft.cwds}
        options={folderOptions}
        placeholder={intl.formatMessage({
          id: "settings.automations.projectDropdown.placeholder",
          defaultMessage: "Select project",
          description: "Placeholder text for automation project dropdown",
        })}
        align="end"
        className="!text-base"
        showIcon={false}
        localOnlyTooltip={intl.formatMessage({
          id: "settings.automations.projectDropdown.localOnlyTooltip",
          defaultMessage:
            "Scheduled tasks can only be created for local projects",
          description:
            "Tooltip explaining why scheduled task project options only include local projects when remote connections are connected",
        })}
        onChange={handleFolderChange}
      />
    </AutomationDetailRow>
  );

  const repeatsLabel = isHeartbeat
    ? intl.formatMessage({
        id: "inbox.automations.interval.label",
        defaultMessage: "Interval",
        description: "Label for the heartbeat automation interval control",
      })
    : intl.formatMessage({
        id: "inbox.automations.repeats.label",
        defaultMessage: "Repeats",
        description: "Label for the automation repeats control",
      });
  const modelRow = isHeartbeat ? null : (
    <AutomationDetailRow
      label={intl.formatMessage({
        id: "inbox.automations.model.label",
        defaultMessage: "Model",
        description: "Label for the automation model row in the details rail",
      })}
      variant="compact"
    >
      <AutomationModelReasoningDropdown
        selectedModel={draft.model}
        reasoningEffort={draft.reasoningEffort}
        align="end"
        className="!text-base"
        onSelect={handleModelSelect}
      />
    </AutomationDetailRow>
  );

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-panel">
      <div className="flex min-h-0 flex-col gap-6">
        <AutomationNameInput
          id={`${AUTOMATION_SIDE_PANEL_FORM_ID}-title`}
          value={draft.name as string}
          onChange={handleNameChange}
        />
        <AutomationDetailSection
          title={
            <FormattedMessage
              id="inbox.automations.promptSection"
              defaultMessage="Prompt"
              description="Section label above the automation prompt in the detail panel"
            />
          }
        >
          <div className="px-1">
            <AutomationPromptForm
              draft={draft}
              setDraft={updateDraft}
              roots={roots}
              onSubmit={handleSubmit}
              formId={`${AUTOMATION_SIDE_PANEL_FORM_ID}-prompt`}
              promptSize="compact"
            />
          </div>
        </AutomationDetailSection>
        {statusSection}
        <AutomationDetailSection
          title={
            <FormattedMessage
              id="inbox.automations.details"
              defaultMessage="Details"
              description="Section label above the automation details rail"
            />
          }
        >
          {executionEnvironmentRow}
          {destinationRow}
          <AutomationDetailRow label={repeatsLabel} variant="compact">
            <AutomationSchedulePicker
              scheduleMode={draft.scheduleConfig.mode}
              scheduleConfig={draft.scheduleConfig}
              align="end"
              className="!text-base"
              showIcon={false}
              intervalStyle={isHeartbeat ? "heartbeat" : "default"}
              onUpdateScheduleDraft={handleScheduleConfigChange}
            />
          </AutomationDetailRow>
          {modelRow}
        </AutomationDetailSection>
      </div>
    </div>
  );
}
