// Restored from ref/webview/assets/code-review-settings-CaOOur3O.js
// Settings page for automatic Codex pull request code review preferences.

import { type ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  _appScopeO as useAppScopeContext,
  appScopeRoot,
} from "../boundaries/app-scope";
import { toastApiSignal } from "../ui/toast-signal";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { Toggle } from "../utils/toggle";
import { SettingsMenuButton } from "./settings-shared";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsControlRow } from "../ui/settings-row";
import { SettingsSurface } from "../utils/settings-surface";
import { SettingsGroup } from "../utils/settings-group";
import { useUsageSettingsAccess } from "../utils/use-usage-settings-access";
import {
  useCloudUserPreferences,
  useUpdateCloudUserPreferences,
} from "./cloud-preferences";
const CODE_REVIEW_TRIGGER_POLICIES = [
  "pr_open",
  "every_push",
  "smart_detect",
] as const;
type CodeReviewTriggerPolicy = (typeof CODE_REVIEW_TRIGGER_POLICIES)[number];
type CodeReviewPreferences = {
  allow_credits_for_code_reviews: boolean;
  code_review_preference: "always" | "repo_default" | string;
  code_review_trigger_policy?: CodeReviewTriggerPolicy | null;
  exhaustive_code_review: boolean;
};
type CodeReviewPreferenceUpdate = Partial<CodeReviewPreferences>;
type CodeReviewPreferencesPanelProps = {
  disabled: boolean;
  onUpdate: (preferences: CodeReviewPreferenceUpdate) => void;
  preferences: CodeReviewPreferences;
  showCreditPreference: boolean;
};
export function CodeReviewSettings() {
  const appScope = useAppScopeContext(appScopeRoot);
  const intl = useIntl();
  const preferencesQuery = useCloudUserPreferences();
  const updatePreferences = useUpdateCloudUserPreferences();
  const { canManageCreditSettings } = useUsageSettingsAccess();
  return (
    <SettingsContentLayout
      title={
        <FormattedMessage
          id="settings.codeReview.title"
          defaultMessage="Code review"
          description="Title for automatic code review settings"
        />
      }
      subtitle={
        <FormattedMessage
          id="settings.codeReview.subtitle"
          defaultMessage="Set up Codex to automatically review pull requests"
          description="Subtitle for automatic code review settings"
        />
      }
    >
      {preferencesQuery.data == null ? (
        <SettingsGroup>
          <SettingsGroup.Content>
            <SettingsSurface>
              <SettingsControlRow
                label={
                  preferencesQuery.isError ? (
                    <FormattedMessage
                      id="settings.codeReview.error"
                      defaultMessage="Unable to load code review settings"
                      description="Error state for code review settings"
                    />
                  ) : (
                    <FormattedMessage
                      id="settings.codeReview.loading"
                      defaultMessage="Loading code review settings…"
                      description="Loading state for code review settings"
                    />
                  )
                }
                control={
                  preferencesQuery.isError ? (
                    <Button
                      color="secondary"
                      size="toolbar"
                      onClick={() => {
                        preferencesQuery.refetch();
                      }}
                    >
                      <FormattedMessage
                        id="settings.codeReview.retry"
                        defaultMessage="Retry"
                        description="Button to retry loading code review settings"
                      />
                    </Button>
                  ) : (
                    <Spinner className="icon-xs" />
                  )
                }
              />
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      ) : (
        <CodeReviewPreferencesPanel
          disabled={updatePreferences.isPending}
          showCreditPreference={canManageCreditSettings}
          preferences={preferencesQuery.data as CodeReviewPreferences}
          onUpdate={(preferences) => {
            updatePreferences.mutate(preferences, {
              onError: () => {
                appScope.get(toastApiSignal).danger(
                  intl.formatMessage({
                    id: "settings.codeReview.save.error",
                    defaultMessage: "Unable to save code review settings",
                    description:
                      "Toast shown when saving code review settings fails",
                  }),
                );
              },
            });
          }}
        />
      )}
    </SettingsContentLayout>
  );
}
function CodeReviewPreferencesPanel({
  disabled,
  preferences,
  showCreditPreference,
  onUpdate,
}: CodeReviewPreferencesPanelProps) {
  const intl = useIntl();
  const triggerPolicy =
    preferences.code_review_trigger_policy ?? CODE_REVIEW_TRIGGER_POLICIES[0];
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="settings.codeReview.personal.title"
            defaultMessage="Personal preferences"
            description="Title for personal code review preferences"
          />
        }
      />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsControlRow
            label={
              <FormattedMessage
                id="settings.codeReview.personal.autoReview.label"
                defaultMessage="Automatic review"
                description="Label for automatic code review preference"
              />
            }
            description={
              <FormattedMessage
                id="settings.codeReview.personal.autoReview.description"
                defaultMessage="Automatically review your pull requests in Codex-enabled repositories"
                description="Description for automatic code review preference"
              />
            }
            control={
              <Toggle
                ariaLabel={intl.formatMessage({
                  id: "settings.codeReview.personal.autoReview.aria",
                  defaultMessage: "Enable automatic code review",
                  description: "Accessible label for automatic code review",
                })}
                checked={preferences.code_review_preference === "always"}
                disabled={disabled}
                onChange={(checked) => {
                  onUpdate({
                    code_review_preference: checked ? "always" : "repo_default",
                  });
                }}
              />
            }
          />
          <SettingsControlRow
            label={
              <FormattedMessage
                id="settings.codeReview.personal.trigger.label"
                defaultMessage="Review trigger"
                description="Label for review trigger preference"
              />
            }
            description={
              <FormattedMessage
                id="settings.codeReview.personal.trigger.description"
                defaultMessage="Choose when Codex should review your pull requests"
                description="Description for review trigger preference"
              />
            }
            control={
              <DropdownMenu
                triggerButton={
                  <SettingsMenuButton disabled={disabled}>
                    {renderCodeReviewTriggerLabel(triggerPolicy)}
                  </SettingsMenuButton>
                }
              >
                {CODE_REVIEW_TRIGGER_POLICIES.map((policy) => (
                  <Dropdown.Item
                    key={policy}
                    onSelect={() => {
                      onUpdate({
                        code_review_trigger_policy: policy,
                      });
                    }}
                  >
                    {renderCodeReviewTriggerLabel(policy)}
                  </Dropdown.Item>
                ))}
              </DropdownMenu>
            }
          />
          <SettingsControlRow
            label={
              <FormattedMessage
                id="settings.codeReview.personal.exhaustive.label"
                defaultMessage="Exhaustive code review"
                description="Label for exhaustive code review preference"
              />
            }
            description={
              <FormattedMessage
                id="settings.codeReview.personal.exhaustive.description"
                defaultMessage="Keep looking for findings until Codex stops finding new issues"
                description="Description for exhaustive code review preference"
              />
            }
            control={
              <Toggle
                ariaLabel={intl.formatMessage({
                  id: "settings.codeReview.personal.exhaustive.aria",
                  defaultMessage: "Enable exhaustive code review",
                  description: "Accessible label for exhaustive code review",
                })}
                checked={preferences.exhaustive_code_review}
                disabled={disabled}
                onChange={(checked) => {
                  onUpdate({
                    exhaustive_code_review: checked,
                  });
                }}
              />
            }
          />
          {showCreditPreference ? (
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.codeReview.personal.credits.label"
                  defaultMessage="Use credits for reviews"
                  description="Label for code review credits preference"
                />
              }
              description={
                <FormattedMessage
                  id="settings.codeReview.personal.credits.description"
                  defaultMessage="Allow credits to be consumed for reviews after rate limits"
                  description="Description for code review credits preference"
                />
              }
              control={
                <Toggle
                  ariaLabel={intl.formatMessage({
                    id: "settings.codeReview.personal.credits.aria",
                    defaultMessage: "Allow credits for code reviews",
                    description:
                      "Accessible label for code review credits preference",
                  })}
                  checked={preferences.allow_credits_for_code_reviews}
                  disabled={disabled}
                  onChange={(checked) => {
                    onUpdate({
                      allow_credits_for_code_reviews: checked,
                    });
                  }}
                />
              }
            />
          ) : null}
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function renderCodeReviewTriggerLabel(
  triggerPolicy: CodeReviewTriggerPolicy,
): ReactNode {
  switch (triggerPolicy) {
    case "pr_open":
      return (
        <FormattedMessage
          id="settings.codeReview.personal.trigger.prOpen"
          defaultMessage="On PR open"
          description="Code review trigger option for pull request creation"
        />
      );
    case "every_push":
      return (
        <FormattedMessage
          id="settings.codeReview.personal.trigger.everyPush"
          defaultMessage="On every push"
          description="Code review trigger option for every push"
        />
      );
    case "smart_detect":
      return (
        <FormattedMessage
          id="settings.codeReview.personal.trigger.smart"
          defaultMessage="Smart trigger"
          description="Experimental smart code review trigger option"
        />
      );
  }
}
