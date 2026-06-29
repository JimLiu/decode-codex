// Restored from ref/webview/assets/cloud-preferences-settings-BEKBzFdU.js
// cloud-preferences-settings-DFJ0Jg4r chunk restored from the Codex webview bundle.
import React from "react";
import { _appScopeO, _appScopeT } from "../boundaries/app-scope";
import * as reactIntlRuntime from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { toastApiSignal } from "../ui/toast-signal";
import { SettingsSectionTitle } from "./settings-shared";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsControlRow } from "../ui/settings-row";
import { SettingsSurface } from "../utils/settings-surface";
import { SettingsGroup } from "../utils/settings-group";
import { SegmentedToggle } from "../utils/segmented-toggle";
import {
  renderCloudPathPatternExample,
  useCloudPreferencesConfig,
  useCloudUserPreferences,
  useUpdateCloudUserPreferences,
  validateCloudPathPattern,
} from "./cloud-preferences";
type BranchFormatDraft = {
  baseline: string;
  value: string;
};
type CloudPreferenceUpdate = {
  branch_format?: string;
  git_diff_mode?: string;
};
type CloudPatternVariable = {
  value: string;
};
function CloudPreferencesSettings() {
  return (
    <SettingsContentLayout
      title={<SettingsSectionTitle slug="cloud-settings" />}
    >
      <CloudPreferencesSettingsContent />
    </SettingsContentLayout>
  );
}
function CloudPreferencesSettingsContent() {
  const intl = reactIntlRuntime.libL();
  const appScopeStore = _appScopeO(_appScopeT);
  const userPreferencesQuery = useCloudUserPreferences();
  const configQuery = useCloudPreferencesConfig();
  const updatePreferences = useUpdateCloudUserPreferences();
  const [branchFormatDraft, setBranchFormatDraft] =
    React.useState<BranchFormatDraft | null>(null);
  if (userPreferencesQuery.isError || configQuery.isError) {
    return (
      <SettingsGroup>
        <SettingsGroup.Content>
          <SettingsSurface>
            <SettingsControlRow
              label={
                <reactIntlRuntime.libS
                  id="settings.general.cloudPreferences.loadError"
                  defaultMessage="Unable to load cloud preferences"
                  description="Error message shown when cloud preferences fail to load"
                />
              }
              control={
                <Button
                  color="secondary"
                  onClick={() => {
                    userPreferencesQuery.refetch();
                    configQuery.refetch();
                  }}
                  size="toolbar"
                >
                  <reactIntlRuntime.libS
                    id="settings.general.cloudPreferences.retry"
                    defaultMessage="Retry"
                    description="Button label to retry loading cloud preferences"
                  />
                </Button>
              }
            />
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>
    );
  }
  if (userPreferencesQuery.data == null || configQuery.data == null) {
    return (
      <SettingsGroup>
        <SettingsGroup.Content>
          <SettingsSurface>
            <SettingsControlRow
              label={
                <reactIntlRuntime.libS
                  id="settings.general.cloudPreferences.loading"
                  defaultMessage="Loading cloud preferences..."
                  description="Loading label for cloud preferences"
                />
              }
              control={<Spinner className="icon-xs" />}
            />
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>
    );
  }
  const userPreferences = userPreferencesQuery.data;
  const config = configQuery.data;
  const branchFormat =
    branchFormatDraft?.baseline === userPreferences.branch_format
      ? branchFormatDraft.value
      : userPreferences.branch_format;
  const branchFormatError = validateCloudPathPattern(
    branchFormat,
    config.branch_format_max_length,
    config.branch_format_special_values,
  );
  const savePreference = (
    preference: CloudPreferenceUpdate,
    successMessage: string,
  ) => {
    updatePreferences.mutate(preference, {
      onSuccess: () => {
        appScopeStore.get(toastApiSignal).success(successMessage);
      },
      onError: () => {
        appScopeStore.get(toastApiSignal).danger(
          intl.formatMessage({
            id: "settings.general.cloudPreferences.save.error",
            defaultMessage: "Unable to save cloud preference",
            description: "Toast shown when saving a cloud preference fails",
          }),
        );
      },
    });
  };
  return (
    <SettingsGroup>
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsControlRow
            label={
              <reactIntlRuntime.libS
                id="settings.general.cloudPreferences.diffView.label"
                defaultMessage="Diff view"
                description="Label for cloud diff display preference"
              />
            }
            description={
              <reactIntlRuntime.libS
                id="settings.general.cloudPreferences.diffView.description"
                defaultMessage="Choose how changes are shown in cloud tasks"
                description="Description for cloud diff display preference"
              />
            }
            control={
              <SegmentedToggle
                ariaLabel={intl.formatMessage({
                  id: "settings.general.cloudPreferences.diffView.ariaLabel",
                  defaultMessage: "Diff view",
                  description: "Aria label for cloud diff display selector",
                })}
                options={[
                  {
                    id: "unified",
                    label: (
                      <reactIntlRuntime.libS
                        id="settings.general.cloudPreferences.diffView.unified"
                        defaultMessage="Unified"
                        description="Unified diff display preference option"
                      />
                    ),
                    disabled: updatePreferences.isPending,
                  },
                  {
                    id: "split",
                    label: (
                      <reactIntlRuntime.libS
                        id="settings.general.cloudPreferences.diffView.split"
                        defaultMessage="Split"
                        description="Split diff display preference option"
                      />
                    ),
                    disabled: updatePreferences.isPending,
                  },
                ]}
                selectedId={userPreferences.git_diff_mode}
                onSelect={(gitDiffMode) => {
                  savePreference(
                    {
                      git_diff_mode: gitDiffMode,
                    },
                    intl.formatMessage({
                      id: "settings.general.cloudPreferences.diffView.save.success",
                      defaultMessage: "Saved diff view",
                      description:
                        "Toast shown when cloud diff display preference is saved",
                    }),
                  );
                }}
              />
            }
          />
          <SettingsControlRow
            label={
              <reactIntlRuntime.libS
                id="settings.general.cloudPreferences.branchFormat.title"
                defaultMessage="Branch format"
                description="Heading for cloud branch format preference"
              />
            }
            description={
              branchFormatError == null ? (
                <reactIntlRuntime.libS
                  id="settings.general.cloudPreferences.branchFormat.preview"
                  defaultMessage="Example: {branchName}"
                  description="Example branch name produced by the cloud branch format"
                  values={{
                    branchName: renderCloudPathPatternExample(
                      branchFormat,
                      config.branch_format_special_values,
                    ),
                  }}
                />
              ) : (
                <BranchFormatErrorMessage error={branchFormatError} />
              )
            }
            control={
              <input
                className="w-56 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
                aria-label={intl.formatMessage({
                  id: "settings.general.cloudPreferences.branchFormat.input.ariaLabel",
                  defaultMessage: "Branch format pattern",
                  description:
                    "Accessible label for the cloud branch format input",
                })}
                disabled={updatePreferences.isPending}
                placeholder={intl.formatMessage(
                  {
                    id: "settings.general.cloudPreferences.branchFormat.input.placeholder",
                    defaultMessage: "codex/{pattern}",
                    description:
                      "Placeholder for the cloud branch format input",
                  },
                  {
                    pattern: "{feature}",
                  },
                )}
                value={branchFormat}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setBranchFormatDraft({
                    baseline: userPreferences.branch_format,
                    value: event.currentTarget.value,
                  });
                }}
              />
            }
          />
          <SettingsControlRow
            label={
              <reactIntlRuntime.libS
                id="settings.general.cloudPreferences.branchFormat.availableTags"
                defaultMessage="Available placeholders"
                description="Label for branch format placeholders"
              />
            }
            description={config.branch_format_special_values
              .map(getCloudPatternVariableValue)
              .join(", ")}
            control={
              <Button
                color="primary"
                disabled={
                  branchFormat === userPreferences.branch_format ||
                  branchFormatError != null
                }
                loading={updatePreferences.isPending}
                onClick={() => {
                  savePreference(
                    {
                      branch_format: branchFormat,
                    },
                    intl.formatMessage({
                      id: "settings.general.cloudPreferences.branchFormat.save.success",
                      defaultMessage: "Saved branch format",
                      description:
                        "Toast shown when cloud branch format is saved",
                    }),
                  );
                }}
                size="toolbar"
              >
                <reactIntlRuntime.libS
                  id="settings.general.cloudPreferences.branchFormat.save"
                  defaultMessage="Save"
                  description="Button label to save cloud branch format"
                />
              </Button>
            }
          />
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function getCloudPatternVariableValue(variable: CloudPatternVariable) {
  return variable.value;
}
function BranchFormatErrorMessage({ error }: { error: string }) {
  switch (error) {
    case "bracket-mismatch":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.bracketMismatch"
          defaultMessage="Branch format has unmatched brackets"
          description="Validation error for mismatched branch format brackets"
        />
      );
    case "invalid-characters":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.invalidCharacters"
          defaultMessage="Branch format contains invalid characters"
          description="Validation error for invalid branch format characters"
        />
      );
    case "invalid-pattern":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.invalidPattern"
          defaultMessage="Branch format contains an unavailable placeholder"
          description="Validation error for unavailable branch format placeholders"
        />
      );
    case "leading-slash":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.leadingSlash"
          defaultMessage="Branch format cannot start with '/'"
          description="Validation error for branch format starting with slash"
        />
      );
    case "missing-pattern":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.missingPattern"
          defaultMessage="Branch format must contain at least one placeholder"
          description="Validation error when a branch format has no placeholder"
        />
      );
    case "too-long":
      return (
        <reactIntlRuntime.libS
          id="settings.general.cloudPreferences.branchFormat.error.tooLong"
          defaultMessage="Generated branch name exceeds the allowed length"
          description="Validation error when a generated branch name is too long"
        />
      );
    default:
      return null;
  }
}
export { CloudPreferencesSettings };
