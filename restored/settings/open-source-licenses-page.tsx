// Restored from ref/webview/assets/open-source-licenses-page-BDuF6z8x.js
// open-source-licenses-page-BeKIrKdc chunk restored from the Codex webview bundle.
import { appScopeRoot, useAppScopeValue } from "../boundaries/app-scope";
import { createVscodeQueryOptions, vscodeApiU } from "../boundaries/vscode-api";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { Button } from "../ui/button";
import { SettingsContentLayout } from "../ui/settings-content-layout";
import { SettingsGroup } from "../utils/settings-group";
import { SettingsSurface } from "../utils/settings-surface";
import { FormattedMessage } from "../vendor/react-intl";
import { useLocation, useNavigate } from "../vendor/react-router";
type LicensesNavigationState = {
  licensesBackPath?: unknown;
};
type ThirdPartyNotices = {
  text?: string;
};
const thirdPartyNoticesQuery = createVscodeQueryOptions(
  appScopeRoot,
  "third-party-notices",
  {
    enabled: true,
    staleTime: vscodeApiU.ONE_MINUTE,
  },
);
export function OpenSourceLicensesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backPath = getLicensesBackPath(location.state);
  const backState = isNavigationState(location.state) ? location.state : null;
  const { data, isLoading } = useAppScopeValue(thirdPartyNoticesQuery) as {
    data?: ThirdPartyNotices;
    isLoading: boolean;
  };
  const navigateBack = () => {
    navigate(backPath, {
      replace: true,
      state: backState,
    });
  };
  return (
    <SettingsContentLayout
      backSlot={
        <Button color="ghost" size="toolbar" onClick={navigateBack}>
          <ArrowLeftIcon className="icon-xs" />
          <FormattedMessage
            id="settings.openSourceLicenses.back"
            defaultMessage="Back"
            description="Button label to go back to the main settings page"
          />
        </Button>
      }
      title={
        <FormattedMessage
          id="settings.openSourceLicenses.title"
          defaultMessage="Open source licenses"
          description="Title for the open source licenses settings page"
        />
      }
      subtitle={
        <FormattedMessage
          id="settings.openSourceLicenses.subtitle"
          defaultMessage="Third-party notices for dependencies included in this app"
          description="Subtitle for the open source licenses settings page"
        />
      }
    >
      <SettingsGroup>
        <SettingsGroup.Content>
          <SettingsSurface>
            {isLoading ? (
              <div className="text-sm text-token-text-secondary">
                <FormattedMessage
                  id="settings.openSourceLicenses.loading"
                  defaultMessage="Loading..."
                  description="Loading label while fetching third-party notices"
                />
              </div>
            ) : data?.text ? (
              <pre className="bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary">
                {data.text}
              </pre>
            ) : (
              <div className="text-sm text-token-text-secondary">
                <FormattedMessage
                  id="settings.openSourceLicenses.missing"
                  defaultMessage="No third-party notices were found."
                  description="Message shown when the third-party notices file is missing"
                />
              </div>
            )}
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>
    </SettingsContentLayout>
  );
}
function isNavigationState(value: unknown): value is LicensesNavigationState {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function getLicensesBackPath(value: unknown): string {
  if (isNavigationState(value) && "licensesBackPath" in value) {
    const backPath = value.licensesBackPath;
    if (typeof backPath === "string" && backPath.startsWith("/settings/")) {
      return backPath;
    }
  }
  return "/settings/general";
}
