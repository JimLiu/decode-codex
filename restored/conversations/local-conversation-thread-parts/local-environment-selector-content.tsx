// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local environment display-name helpers and environment selector menu content.
import {
  CheckMdIcon as CheckIcon,
  initCheckmarkIcon,
} from "../../icons/check-md-icon";
import {
  initSettingsGearIcon,
  SettingsGearIcon,
} from "../../icons/settings-gear-icon";
import { once } from "../../runtime/commonjs-interop";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import {
  Dropdown as MenuChrome,
  DropdownSeparator as MenuSeparator,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import {
  initConfigPathRuntime,
  normalizeConfigPath,
} from "../../runtime/config-path-runtime";
import { initStarIconChunk, StarIcon } from "../../icons/star-icon";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";

type LocalEnvironmentResultLike = {
  configPath: string;
  type: string;
  environment?: {
    name?: string | null;
  } | null;
};

export type LocalEnvironmentSelectorContentProps = {
  availableEnvironments: readonly LocalEnvironmentResultLike[];
  defaultEnvironment: LocalEnvironmentResultLike | null | undefined;
  defaultEnvironmentNormalized: string | null | undefined;
  localEnvironments: readonly unknown[];
  localEnvironmentsError: boolean;
  localEnvironmentsLoading: boolean;
  normalizedResolvedConfigPath: string | null | undefined;
  onOpenSettings: () => void;
  onSelectEnvironment: (configPath: string | null) => void;
};

export function getLocalEnvironmentDisplayName(
  configPath: string,
  environmentName: string | null | undefined,
): string {
  return environmentName?.trim() || getConfigPathDisplayName(configPath);
}

export function getLocalEnvironmentResultDisplayName(
  environmentResult: LocalEnvironmentResultLike,
): string {
  return getLocalEnvironmentDisplayName(
    environmentResult.configPath,
    environmentResult.type === "success"
      ? environmentResult.environment?.name
      : null,
  );
}

function getConfigPathDisplayName(configPath: string): string {
  let normalizedConfigPath = normalizeConfigPath(configPath),
    pathParts = normalizedConfigPath.split("/").filter(Boolean);
  return pathParts[pathParts.length - 1] ?? normalizedConfigPath;
}

export function LocalEnvironmentSelectorContent({
  localEnvironmentsLoading,
  localEnvironmentsError,
  localEnvironments,
  availableEnvironments,
  defaultEnvironment,
  defaultEnvironmentNormalized,
  normalizedResolvedConfigPath,
  onSelectEnvironment,
  onOpenSettings,
}: LocalEnvironmentSelectorContentProps) {
  let intl = useIntl(),
    noEnvironmentCheckIcon =
      normalizedResolvedConfigPath == null ? CheckIcon : undefined;

  let clearEnvironmentSelection = () => {
    onSelectEnvironment(null);
  };

  let noEnvironmentLabel = (
    <FormattedMessage
      id="codex.environmentSelector.noEnvironment"
      defaultMessage="No environment"
      description="No environment selected message"
    />
  );
  let noEnvironmentItem = (
    <MenuChrome.Item
      RightIcon={noEnvironmentCheckIcon}
      onSelect={clearEnvironmentSelection}
    >
      {noEnvironmentLabel}
    </MenuChrome.Item>
  );
  let defaultEnvironmentItem = defaultEnvironment ? (
    <MenuChrome.Item
      LeftIcon={StarIcon}
      leftIconClassName="icon-xxs text-token-description-foreground"
      RightIcon={
        defaultEnvironmentNormalized != null &&
        defaultEnvironmentNormalized === normalizedResolvedConfigPath
          ? CheckIcon
          : undefined
      }
      tooltipText={intl.formatMessage({
        id: "composer.worktreeEnvironment.default",
        defaultMessage: "Default environment",
        description: "Tooltip for default local environment icon",
      })}
      onSelect={() => {
        onSelectEnvironment(defaultEnvironment.configPath);
      }}
    >
      {getLocalEnvironmentResultDisplayName(defaultEnvironment)}
    </MenuChrome.Item>
  ) : null;
  let environmentItems =
    localEnvironmentsLoading && localEnvironments.length === 0 ? (
      <div className="flex items-center justify-center py-3">
        <Spinner className="icon-xxs" />
      </div>
    ) : localEnvironmentsError ? (
      <MenuChrome.Message compact={true} tone="error">
        <FormattedMessage
          id="composer.worktreeEnvironment.error"
          defaultMessage="Error loading environments"
          description="Error state for worktree environment dropdown"
        />
      </MenuChrome.Message>
    ) : availableEnvironments.length > 0 ? (
      availableEnvironments.map((item) => (
        <MenuChrome.Item
          key={item.configPath}
          RightIcon={
            normalizedResolvedConfigPath != null &&
            normalizeConfigPath(item.configPath) ===
              normalizedResolvedConfigPath
              ? CheckIcon
              : undefined
          }
          onSelect={() => {
            onSelectEnvironment(item.configPath);
          }}
        >
          <span className="min-w-0 truncate">
            {getLocalEnvironmentResultDisplayName(item)}
          </span>
        </MenuChrome.Item>
      ))
    ) : localEnvironments.length === 0 ? (
      <MenuChrome.Message compact={true}>
        <FormattedMessage
          id="codex.environments.noEnvironmentsFound"
          defaultMessage="No environments found"
          description="Message shown when no Codex environments were found"
        />
      </MenuChrome.Message>
    ) : null;
  let environmentList = (
    <div className="vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-0.5 overflow-y-auto pr-1">
      {noEnvironmentItem}
      {defaultEnvironmentItem}
      {environmentItems}
    </div>
  );
  let settingsLabel = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let settingsItem = (
    <MenuChrome.Item
      LeftIcon={SettingsGearIcon}
      leftIconClassName="icon-sm"
      onSelect={onOpenSettings}
    >
      {settingsLabel}
    </MenuChrome.Item>
  );
  return (
    <div className="flex flex-col gap-0.5 pb-1">
      {environmentList}
      <MenuSeparator />
      {settingsItem}
    </div>
  );
}

export const initLocalEnvironmentSelectorContentChunk = once(() => {
  initIntlRuntime();
  initDropdownMenuPrimitives();
  initSpinnerComponent();
  initCheckmarkIcon();
  initSettingsGearIcon();
  initStarIconChunk();
  initConfigPathRuntime();
});
