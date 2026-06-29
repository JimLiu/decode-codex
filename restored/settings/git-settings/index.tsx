// Restored from ref/webview/assets/git-settings-DOXloXQ3.js
// Git settings page restored from the Codex webview bundle.
import React, { type ChangeEvent } from "react";
import { useGateValue } from "@statsig/react-bindings";
import { gitSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { SettingsNavLabel } from "../settings-shared";
import { useSettingValue } from "../setting-storage";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { SettingsSurface } from "../../utils/settings-surface";
import { SettingsGroup } from "../../utils/settings-group";
import { SegmentedToggle } from "../../utils/segmented-toggle";
import { Toggle } from "../../utils/toggle";
import { useHotkey } from "../../utils/use-hotkey";
import { WithWindow } from "../../utils/with-window";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { InstructionSettingsSection } from "./instruction-settings-section";
import { gitSettingsMessages } from "./messages";
import { useSettingMutation } from "./setting-mutation";
import { WorktreeAutoCleanupSettings } from "./worktree-auto-cleanup-settings";
type PullRequestMergeMethod = "merge" | "squash";
const MERGE_METHOD_OPTIONS: PullRequestMergeMethod[] = ["merge", "squash"];
export function GitSettings() {
  const intl = useIntl();
  const showMergeMethodSetting = useGateValue("2764989143");
  const defaultShowPullRequestIcons = useGateValue("2553306736");
  const [branchPrefixDraft, setBranchPrefixDraft] = React.useState<
    string | null
  >(null);
  const [commitInstructionsDraft, setCommitInstructionsDraft] = React.useState<
    string | null
  >(null);
  const [pullRequestInstructionsDraft, setPullRequestInstructionsDraft] =
    React.useState<string | null>(null);
  const branchPrefix = useSettingValue(gitSettingDefinitions.branchPrefix);
  const alwaysForcePush = useSettingValue(
    gitSettingDefinitions.alwaysForcePush,
  );
  const createDraftPullRequests = useSettingValue(
    gitSettingDefinitions.createPullRequestAsDraft,
  );
  const pullRequestMergeMethod = useSettingValue(
    gitSettingDefinitions.pullRequestMergeMethod,
  ) as PullRequestMergeMethod;
  const savedShowPullRequestIcons = useSettingValue(
    gitSettingDefinitions.showSidebarPrIcons,
  );
  const commitInstructions =
    useSettingValue(gitSettingDefinitions.commitInstructions) ?? "";
  const pullRequestInstructions =
    useSettingValue(gitSettingDefinitions.pullRequestInstructions) ?? "";
  const branchPrefixValue = branchPrefixDraft ?? branchPrefix;
  const commitInstructionsValue = commitInstructionsDraft ?? commitInstructions;
  const pullRequestInstructionsValue =
    pullRequestInstructionsDraft ?? pullRequestInstructions;
  const branchPrefixChanged =
    branchPrefixDraft != null && branchPrefixDraft !== branchPrefix;
  const commitInstructionsChanged =
    commitInstructionsDraft != null &&
    commitInstructionsDraft !== commitInstructions;
  const pullRequestInstructionsChanged =
    pullRequestInstructionsDraft != null &&
    pullRequestInstructionsDraft !== pullRequestInstructions;
  const showPullRequestIcons =
    savedShowPullRequestIcons ?? defaultShowPullRequestIcons;
  const branchPrefixMutation = useSettingMutation<string>({
    setting: gitSettingDefinitions.branchPrefix,
    successMessage: gitSettingsMessages.branchPrefixSaveSuccess,
    errorMessage: gitSettingsMessages.branchPrefixSaveError,
    onSuccess: () => {
      setBranchPrefixDraft(null);
    },
  });
  const alwaysForcePushMutation = useSettingMutation<boolean>({
    setting: gitSettingDefinitions.alwaysForcePush,
    successMessage: (enabled) =>
      enabled
        ? gitSettingsMessages.alwaysForcePushEnabled
        : gitSettingsMessages.alwaysForcePushDisabled,
    errorMessage: gitSettingsMessages.alwaysForcePushError,
  });
  const createDraftPullRequestsMutation = useSettingMutation<boolean>({
    setting: gitSettingDefinitions.createPullRequestAsDraft,
    successMessage: (enabled) =>
      enabled
        ? gitSettingsMessages.createDraftPullRequestsEnabled
        : gitSettingsMessages.createDraftPullRequestsDisabled,
    errorMessage: gitSettingsMessages.createDraftPullRequestsError,
  });
  const mergeMethodMutation = useSettingMutation<PullRequestMergeMethod>({
    setting: gitSettingDefinitions.pullRequestMergeMethod,
    successMessage: gitSettingsMessages.pullRequestMergeMethodSaveSuccess,
    errorMessage: gitSettingsMessages.pullRequestMergeMethodSaveError,
  });
  const showPullRequestIconsMutation = useSettingMutation<boolean>({
    setting: gitSettingDefinitions.showSidebarPrIcons,
    successMessage: (enabled) =>
      enabled
        ? gitSettingsMessages.showPullRequestIconsEnabled
        : gitSettingsMessages.showPullRequestIconsDisabled,
    errorMessage: gitSettingsMessages.showPullRequestIconsError,
  });
  const commitInstructionsMutation = useSettingMutation<string>({
    setting: gitSettingDefinitions.commitInstructions,
    successMessage: gitSettingsMessages.commitInstructionsSaveSuccess,
    errorMessage: gitSettingsMessages.commitInstructionsSaveError,
    onSuccess: () => {
      setCommitInstructionsDraft(null);
    },
  });
  const pullRequestInstructionsMutation = useSettingMutation<string>({
    setting: gitSettingDefinitions.pullRequestInstructions,
    successMessage: gitSettingsMessages.pullRequestInstructionsSaveSuccess,
    errorMessage: gitSettingsMessages.pullRequestInstructionsSaveError,
    onSuccess: () => {
      setPullRequestInstructionsDraft(null);
    },
  });
  const saveBranchPrefix = () => {
    if (!branchPrefixChanged || branchPrefixMutation.isPending) {
      return;
    }
    branchPrefixMutation.mutate(branchPrefixValue);
  };
  const saveCommitInstructions = () => {
    if (!commitInstructionsChanged || commitInstructionsMutation.isPending) {
      return;
    }
    commitInstructionsMutation.mutate(commitInstructionsValue);
  };
  const savePullRequestInstructions = () => {
    if (
      !pullRequestInstructionsChanged ||
      pullRequestInstructionsMutation.isPending
    ) {
      return;
    }
    pullRequestInstructionsMutation.mutate(pullRequestInstructionsValue);
  };
  const hasUnsavedTextSettings =
    (branchPrefixChanged && !branchPrefixMutation.isPending) ||
    (commitInstructionsChanged && !commitInstructionsMutation.isPending) ||
    (pullRequestInstructionsChanged &&
      !pullRequestInstructionsMutation.isPending);
  useHotkey({
    accelerator: "CmdOrCtrl+S",
    enabled: hasUnsavedTextSettings,
    onKeyDown: (event) => {
      event.preventDefault();
      saveBranchPrefix();
      saveCommitInstructions();
      savePullRequestInstructions();
    },
  });
  const handleBranchPrefixChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (branchPrefixMutation.isPending) {
      return;
    }
    const nextValue = event.target.value;
    setBranchPrefixDraft(nextValue === branchPrefix ? null : nextValue);
  };
  const handleMergeMethodSelect = (mergeMethodId: string) => {
    const mergeMethod = MERGE_METHOD_OPTIONS.find(
      (option) => option === mergeMethodId,
    );
    if (
      mergeMethod == null ||
      mergeMethodMutation.isPending ||
      mergeMethod === pullRequestMergeMethod
    ) {
      return;
    }
    mergeMethodMutation.mutate(mergeMethod);
  };
  return (
    <SettingsContentLayout title={<SettingsNavLabel slug="git-settings" />}>
      <SettingsGroup>
        <SettingsGroup.Content>
          <SettingsSurface>
            <SettingsControlRow
              label={<FormattedMessage {...gitSettingsMessages.branchPrefix} />}
              description={
                <FormattedMessage
                  {...gitSettingsMessages.branchPrefixDescription}
                />
              }
              control={
                <input
                  className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
                  value={branchPrefixValue}
                  onChange={handleBranchPrefixChange}
                  onBlur={saveBranchPrefix}
                  placeholder={intl.formatMessage(
                    gitSettingsMessages.branchPrefixPlaceholder,
                  )}
                  aria-label={intl.formatMessage(
                    gitSettingsMessages.branchPrefixAriaLabel,
                  )}
                  disabled={branchPrefixMutation.isPending}
                />
              }
            />
            {showMergeMethodSetting ? (
              <SettingsControlRow
                label={
                  <FormattedMessage
                    {...gitSettingsMessages.pullRequestMergeMethod}
                  />
                }
                description={
                  <FormattedMessage
                    {...gitSettingsMessages.pullRequestMergeMethodDescription}
                  />
                }
                control={
                  <SegmentedToggle
                    ariaLabel={intl.formatMessage(
                      gitSettingsMessages.pullRequestMergeMethodAriaLabel,
                    )}
                    selectedId={pullRequestMergeMethod}
                    onSelect={handleMergeMethodSelect}
                    options={[
                      {
                        id: "merge",
                        label: (
                          <FormattedMessage {...gitSettingsMessages.merge} />
                        ),
                        ariaLabel: intl.formatMessage(
                          gitSettingsMessages.merge,
                        ),
                        disabled: mergeMethodMutation.isPending,
                      },
                      {
                        id: "squash",
                        label: (
                          <FormattedMessage {...gitSettingsMessages.squash} />
                        ),
                        ariaLabel: intl.formatMessage(
                          gitSettingsMessages.squash,
                        ),
                        disabled: mergeMethodMutation.isPending,
                      },
                    ]}
                  />
                }
              />
            ) : null}
            <SettingsControlRow
              label={
                <FormattedMessage
                  {...gitSettingsMessages.showPullRequestIcons}
                />
              }
              description={
                <FormattedMessage
                  {...gitSettingsMessages.showPullRequestIconsDescription}
                />
              }
              control={
                <Toggle
                  checked={showPullRequestIcons}
                  disabled={showPullRequestIconsMutation.isPending}
                  onChange={(checked) => {
                    if (!showPullRequestIconsMutation.isPending) {
                      showPullRequestIconsMutation.mutate(checked);
                    }
                  }}
                  ariaLabel={intl.formatMessage(
                    gitSettingsMessages.showPullRequestIconsAriaLabel,
                  )}
                />
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage {...gitSettingsMessages.alwaysForcePush} />
              }
              description={
                <FormattedMessage
                  {...gitSettingsMessages.alwaysForcePushDescription}
                />
              }
              control={
                <Toggle
                  checked={alwaysForcePush}
                  disabled={alwaysForcePushMutation.isPending}
                  onChange={(checked) => {
                    if (!alwaysForcePushMutation.isPending) {
                      alwaysForcePushMutation.mutate(checked);
                    }
                  }}
                  ariaLabel={intl.formatMessage(
                    gitSettingsMessages.alwaysForcePushAriaLabel,
                  )}
                />
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  {...gitSettingsMessages.createDraftPullRequests}
                />
              }
              description={
                <FormattedMessage
                  {...gitSettingsMessages.createDraftPullRequestsDescription}
                />
              }
              control={
                <Toggle
                  checked={createDraftPullRequests}
                  disabled={createDraftPullRequestsMutation.isPending}
                  onChange={(checked) => {
                    if (!createDraftPullRequestsMutation.isPending) {
                      createDraftPullRequestsMutation.mutate(checked);
                    }
                  }}
                  ariaLabel={intl.formatMessage(
                    gitSettingsMessages.createDraftPullRequestsAriaLabel,
                  )}
                />
              }
            />
            <WithWindow electron={true}>
              <WorktreeAutoCleanupSettings />
            </WithWindow>
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>
      <InstructionSettingsSection
        title={<FormattedMessage {...gitSettingsMessages.commitInstructions} />}
        subtitle={
          <FormattedMessage
            {...gitSettingsMessages.commitInstructionsDescription}
          />
        }
        saveLabel={gitSettingsMessages.commitInstructionsSave}
        saveDisabled={
          !commitInstructionsChanged || commitInstructionsMutation.isPending
        }
        saving={commitInstructionsMutation.isPending}
        onSave={saveCommitInstructions}
        draftValue={commitInstructionsValue}
        onChange={(nextValue) => {
          setCommitInstructionsDraft(
            nextValue === commitInstructions ? null : nextValue,
          );
        }}
        placeholder={intl.formatMessage(
          gitSettingsMessages.commitInstructionsPlaceholder,
        )}
        ariaLabel={intl.formatMessage(
          gitSettingsMessages.commitInstructionsAriaLabel,
        )}
        disabled={commitInstructionsMutation.isPending}
      />
      <InstructionSettingsSection
        title={
          <FormattedMessage {...gitSettingsMessages.pullRequestInstructions} />
        }
        subtitle={
          <FormattedMessage
            {...gitSettingsMessages.pullRequestInstructionsDescription}
          />
        }
        saveLabel={gitSettingsMessages.pullRequestInstructionsSave}
        saveDisabled={
          !pullRequestInstructionsChanged ||
          pullRequestInstructionsMutation.isPending
        }
        saving={pullRequestInstructionsMutation.isPending}
        onSave={savePullRequestInstructions}
        draftValue={pullRequestInstructionsValue}
        onChange={(nextValue) => {
          setPullRequestInstructionsDraft(
            nextValue === pullRequestInstructions ? null : nextValue,
          );
        }}
        placeholder={intl.formatMessage(
          gitSettingsMessages.pullRequestInstructionsPlaceholder,
        )}
        ariaLabel={intl.formatMessage(
          gitSettingsMessages.pullRequestInstructionsAriaLabel,
        )}
        disabled={pullRequestInstructionsMutation.isPending}
      />
    </SettingsContentLayout>
  );
}
