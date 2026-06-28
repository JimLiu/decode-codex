// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import { useState, type ReactNode } from "react";
import { CheckMdIcon, initCheckmarkIcon } from "../../icons/check-md-icon";
import { initPlusIcon, PlusIcon } from "../../icons/plus-icon";
import {
  initSettingsGearIcon,
  SettingsGearIcon,
} from "../../icons/settings-gear-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  initKeyboardShortcutKeycap,
  KeyboardShortcutKeycap,
} from "../../ui/keyboard-shortcut-keycap";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  Dropdown as MenuChrome,
  DropdownMenu,
  DropdownSeparator as MenuSeparator,
  DropdownSubmenuItem as DropdownMenuSubmenu,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import { initTooltipPrimitives, Tooltip } from "../../ui/tooltip-b";
import {
  initUseStableCallback,
  useStableCallback,
} from "../../utils/use-stable-callback";
import {
  appScope,
  createPersistedSignal,
  environmentTerminalControllerService,
  initAppScopeSignalRuntime,
  initAppLoggerRuntime,
  initConfigPathRuntime,
  initEnvironmentTerminalRuntime,
  initGitBranchQueryRuntime,
  initGitQueryKeyHelpers,
  initHostWorktreeContextRuntime,
  initHostWorkspaceQueries,
  initKeyboardModifierStateRuntime,
  initCommandMenuItemComponent,
  CommandMenuItem,
  initConversationRemoteStateHelpers,
  initOsInfoQueryRuntime,
  initLocalConversationNavigationRuntime,
  initLocalEnvironmentConfigRuntime,
  initLocalEnvironmentSelectionRuntime,
  initModalRuntime,
  initMoreHorizontalIcon,
  initOutputArtifactRuntime,
  initPathHelpersRuntime,
  initPersistedSignalRuntime,
  initPlatformContentRuntime,
  initProfileGitSummaryRuntime,
  initSignalStateRuntime,
  initVscodeBridgeRuntime,
  joinPath,
  localEnvironmentActionShortcutSignal,
  LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS,
  LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
  logger,
  MoreHorizontalIcon,
  normalizeConfigPath,
  normalizeWorkspacePath,
  openScopedModal,
  PlatformContentGate,
  refreshWorktreeEnvironmentConfigValue,
  setActiveSettingsHost,
  useCommandRegistration,
  useGitAvailabilityQuery,
  useHostMutation,
  useHostQuery,
  useLocation,
  useNavigate,
  useLocalEnvironmentSelectionState,
  useOsInfo,
  useScope,
  useScopedValue,
  useSignalState,
} from "./local-environment-action-controls-runtime";
import {
  initThreadSidePanelTabRegistryChunk,
  registerThreadSidePanelTab,
} from "../../app-shell/thread-background-processes";
import { buildLocalEnvironmentCreateRoute } from "../../environments/local-environment-create-route";
import {
  initLocalEnvironmentActionIconChunk,
  initLocalEnvironmentDefaultsChunk,
  LocalEnvironmentActionIcon,
  type LocalEnvironmentAction,
} from "../../environments/local-environments-utils";
import {
  initUseGitConfigValueChunk,
  useGitConfigValue,
} from "../../utils/use-git-config-value";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";
import {
  createLocalEnvironmentActionRunId,
  encodeLocalEnvironmentActionKey,
  getLocalEnvironmentActionItems,
  resolveLocalEnvironmentActionCwd,
  resolveLocalEnvironmentActionKey,
  sortLocalEnvironmentActionItemsByRecentActionNames,
  type LocalEnvironmentActionItem,
} from "./local-environment-action-items";
import {
  AddLocalEnvironmentActionPopoverContent,
  initAddLocalEnvironmentActionFormChunk,
} from "./local-environment-action-form";
import {
  getLocalEnvironmentResultDisplayName,
  initLocalEnvironmentSelectorContentChunk,
  LocalEnvironmentSelectorContent,
} from "./local-environment-selector-content";
import {
  getRecentLocalEnvironmentActions,
  isRecentLocalEnvironmentAction,
  prependRecentLocalEnvironmentAction,
  type RecentLocalEnvironmentActionsByKey,
} from "./local-environment-recent-actions";

type HostConfigForEnvironmentActions = { id: string } & Record<string, unknown>;

type LocalConversationEnvironmentActionControlsProps = {
  conversationId: string | null | undefined;
  hostConfig: HostConfigForEnvironmentActions;
  onMenuOpenChange?: (isOpen: boolean) => void;
  onOpenChange?: (isOpen: boolean) => void;
  onShowTerminal: (terminalId: string) => void;
  registerCommands: boolean;
  workspaceRoot: string;
};

type LocalEnvironmentResponse = {
  configPath: string;
  cwdRelativeToGitRoot?: string | null;
  environment: { actions?: LocalEnvironmentAction[] | null };
  type: "success";
};

type LocalEnvironmentActionRunRequest =
  LocalEnvironmentActionItem<LocalEnvironmentAction>;
type LocalEnvironmentSelectorDropdownProps = {
  canChangeEnvironment: boolean;
  children: ReactNode;
  open: boolean;
  title: string;
  onOpenChange: (isOpen: boolean) => void;
};

type LocalEnvironmentActionMenuItemProps = {
  actionItem: LocalEnvironmentActionRunRequest;
  isPrimaryAction: boolean;
  onRunAction: (request: LocalEnvironmentActionRunRequest) => void;
};

type LocalEnvironmentActionMenuRowProps =
  LocalEnvironmentActionMenuItemProps & {
    shortcut: string | null;
  };

type RegisterLocalEnvironmentActionCommandsProps = {
  actions: readonly LocalEnvironmentActionRunRequest[];
  conversationId: string | null | undefined;
  onRunAction: (request: LocalEnvironmentActionRunRequest) => void;
};

type RegisterLocalEnvironmentActionCommandProps = {
  actionItem: LocalEnvironmentActionRunRequest | undefined;
  commandId: string;
  conversationId: string | null | undefined;
  index: number;
  onRunAction: (request: LocalEnvironmentActionRunRequest) => void;
};

type LocalEnvironmentActionShortcutBadgeProps = { commandId: string };

const joinLocalEnvironmentRepoPath = joinPath;
const EMPTY_LOCAL_ENVIRONMENT_ACTION_ITEMS =
  [] as LocalEnvironmentActionRunRequest[];
const localEnvironmentActionIconButtonClassName =
  "flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center rounded-sm border-0 bg-transparent p-0 text-token-text-tertiary hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background";

let recentLocalEnvironmentActionsByKeySignal: unknown;

const initRecentLocalEnvironmentActionsSignal = once(() => {
  initPersistedSignalRuntime();
  recentLocalEnvironmentActionsByKeySignal = createPersistedSignal(
    "local-env-recent-actions-by-key",
    {},
  );
});

function useLocalConversationEnvironmentState(
  workspaceRoot: string,
  hostConfig: HostConfigForEnvironmentActions,
) {
  let scope = useScope(appScope),
    hostId = hostConfig.id,
    workspaceEnvironmentKey = workspaceRoot
      ? normalizeWorkspacePath(workspaceRoot)
      : null,
    localEnvironmentState = useLocalEnvironmentSelectionState({
      hostId,
      workspaceRoot,
    }),
    isCodexWorktree = isRecentLocalEnvironmentAction(
      workspaceEnvironmentKey,
      hostConfig.id,
    ),
    { data: gitAvailability } = useGitAvailabilityQuery(
      workspaceRoot,
      hostConfig,
      "use_local_conversation_environment",
    ),
    localEnvironments = localEnvironmentState.environments,
    setConfigValueMutation = useHostMutation("set-config-value", hostConfig, {
      onSuccess: (
        result: { success?: boolean },
        variables: { value: string },
      ) => {
        if (result.success && gitAvailability?.root) {
          refreshWorktreeEnvironmentConfigValue(
            scope,
            gitAvailability,
            hostConfig,
            variables.value,
            "use_local_conversation_environment",
          );
        }
      },
    }),
    { data: selectedEnvironmentConfigValue } = useGitConfigValue(
      isCodexWorktree ? workspaceEnvironmentKey : null,
      hostConfig,
      LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
      "worktree",
      "use_local_conversation_environment",
    ),
    selectedConfigPath =
      selectedEnvironmentConfigValue === "__none__"
        ? null
        : selectedEnvironmentConfigValue,
    normalizedSelectedConfigPath = selectedConfigPath
      ? normalizeConfigPath(selectedConfigPath)
      : null,
    resolvedConfigPath = isCodexWorktree
      ? selectedConfigPath
      : localEnvironmentState.resolvedConfigPath,
    normalizedResolvedConfigPath = isCodexWorktree
      ? normalizedSelectedConfigPath
      : (localEnvironmentState.normalizedResolvedConfigPath ?? null);

  let { data: environment = null } = useHostQuery("local-environment", {
      params: {
        configPath: resolvedConfigPath ?? "",
        hostId,
      },
      select: selectSuccessfulLocalEnvironment,
      queryConfig: {
        enabled: resolvedConfigPath != null,
      },
    }),
    hasSavedActions =
      (environment?.environment.actions ?? []).length > 0 ||
      localEnvironments.some(hasSuccessfulLocalEnvironmentActions),
    canChangeEnvironment =
      localEnvironmentState.workspaceKey != null &&
      (!isCodexWorktree || gitAvailability?.root != null);

  let setEnvironmentSelection = (configPath: string | null) => {
    if (isCodexWorktree) {
      if (!gitAvailability?.root) return;
      setConfigValueMutation.mutate({
        root: gitAvailability.root,
        key: LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
        operationSource: "use_local_conversation_environment",
        value: configPath ?? "__none__",
        scope: "worktree",
      });
      return;
    }
    localEnvironmentState.updateSelection(configPath);
  };

  return {
    workspaceRoot,
    codexWorktree: isCodexWorktree,
    environment,
    resolvedEnvironmentConfigPath: resolvedConfigPath ?? null,
    localEnvironments,
    localEnvironmentsLoading:
      localEnvironmentState.isLoading || localEnvironmentState.isFetching,
    localEnvironmentsError: localEnvironmentState.error != null,
    defaultEnvironment: localEnvironmentState.defaultEnvironment,
    defaultEnvironmentNormalized:
      localEnvironmentState.defaultEnvironmentNormalized,
    availableEnvironments: localEnvironmentState.availableEnvironments,
    normalizedResolvedConfigPath,
    canChangeEnvironment,
    setEnvironmentSelection,
    hasSavedActions,
  };
}

function hasSuccessfulLocalEnvironmentActions(environmentResult: {
  type: string;
  environment?: { actions?: unknown[] | null } | null;
}) {
  return environmentResult.type === "success"
    ? (environmentResult.environment?.actions ?? []).length > 0
    : false;
}

function selectSuccessfulLocalEnvironment(environmentResponse: {
  environment: LocalEnvironmentResponse | { type: string } | null;
}) {
  return environmentResponse.environment?.type === "success"
    ? (environmentResponse.environment as LocalEnvironmentResponse)
    : null;
}

export function LocalConversationEnvironmentActionControls({
  conversationId,
  hostConfig,
  onMenuOpenChange,
  workspaceRoot,
  onOpenChange,
  onShowTerminal,
  registerCommands,
}: LocalConversationEnvironmentActionControlsProps) {
  let scope = useScope(appScope),
    intl = useIntl(),
    location = useLocation(),
    navigate = useNavigate(),
    {
      environment,
      resolvedEnvironmentConfigPath,
      localEnvironmentsLoading,
      localEnvironmentsError,
      localEnvironments,
      availableEnvironments,
      defaultEnvironment,
      defaultEnvironmentNormalized,
      normalizedResolvedConfigPath,
      canChangeEnvironment,
      setEnvironmentSelection,
    } = useLocalConversationEnvironmentState(workspaceRoot, hostConfig),
    hasNoLocalEnvironments =
      !localEnvironmentsLoading &&
      !localEnvironmentsError &&
      localEnvironments.length === 0,
    { data: gitAvailability } = useGitAvailabilityQuery(
      workspaceRoot,
      hostConfig,
      "local_conversation_action_compound_button",
    ),
    { data: osInfo } = useOsInfo(),
    [recentActionsByKey, setRecentActionsByKey] = useSignalState(
      recentLocalEnvironmentActionsByKeySignal,
    ) as [
      RecentLocalEnvironmentActionsByKey,
      (nextValue: RecentLocalEnvironmentActionsByKey) => void,
    ],
    [isMenuOpen, setMenuOpen] = useState(false),
    repoRoot = gitAvailability?.root ?? null,
    platform = osInfo?.platform ?? null,
    actionItems = getLocalEnvironmentActionItems(
      environment?.environment.actions,
      platform,
      LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS,
    ),
    environmentActionKey = resolveLocalEnvironmentActionKey({
      configPath: environment?.configPath ?? null,
      joinPath: joinLocalEnvironmentRepoPath,
      relativePath: environment?.cwdRelativeToGitRoot ?? null,
      repoRoot,
      workspaceRoot,
    }),
    recentActionNames = getRecentLocalEnvironmentActions(
      recentActionsByKey,
      environmentActionKey,
    ),
    sortedActionItems =
      actionItems == null
        ? null
        : recentActionNames.length > 0
          ? sortLocalEnvironmentActionItemsByRecentActionNames(
              actionItems,
              recentActionNames,
            )
          : actionItems,
    primaryActionItem = sortedActionItems?.[0] ?? null,
    primaryShortcut = useScopedValue(
      localEnvironmentActionShortcutSignal,
      primaryActionItem?.commandId ?? LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS[0],
    ),
    commandActionItems = actionItems ?? EMPTY_LOCAL_ENVIRONMENT_ACTION_ITEMS;

  let runEnvironmentAction = useStableCallback(
    (actionRunRequest: LocalEnvironmentActionRunRequest) => {
      let { action } = actionRunRequest,
        actionCwd = resolveLocalEnvironmentActionCwd({
          joinPath: joinLocalEnvironmentRepoPath,
          relativePath: environment?.cwdRelativeToGitRoot ?? null,
          repoRoot,
          workspaceRoot,
        });
      if (actionCwd == null || !conversationId) {
        logger.error("Can not run action. Cwd is not set");
        return;
      }
      setRecentActionsByKey(
        prependRecentLocalEnvironmentAction(
          recentActionsByKey,
          environmentActionKey ?? actionCwd,
          action.name,
        ),
      );
      let runId = createLocalEnvironmentActionRunId({
        conversationId,
        encodeEnvironmentKey: encodeLocalEnvironmentActionKey,
        environmentKey: environmentActionKey ?? actionCwd,
        runId: actionRunRequest.runId,
      });
      onShowTerminal(runId);
      environmentTerminalControllerService.runAction(runId, {
        command: action.command,
        cwd: actionCwd,
        title: action.name,
      });
    },
  );

  let handleMenuOpenChange = useStableCallback((open: boolean) => {
    setMenuOpen(open);
    onMenuOpenChange?.(open);
  });
  let openSettings = useStableCallback(() => {
    setMenuOpen(false);
    onMenuOpenChange?.(false);
    setActiveSettingsHost(scope, hostConfig.id);
    let searchParams = new URLSearchParams({
      workspaceRoot,
    });
    if (resolvedEnvironmentConfigPath != null) {
      searchParams.set("configPath", resolvedEnvironmentConfigPath);
    }
    navigate(`/settings/local-environments?${searchParams.toString()}`);
  });
  let createEnvironment = useStableCallback(() => {
    setMenuOpen(false);
    onMenuOpenChange?.(false);
    setActiveSettingsHost(scope, hostConfig.id);
    navigate(
      buildLocalEnvironmentCreateRoute({
        configPath: null,
        workspaceRoot,
      }),
      {
        state: {
          hostId: hostConfig.id,
          returnTo: `${location.pathname}${location.search}${location.hash}`,
        },
      },
    );
  });
  let openAddAction = () => {
    if (resolvedEnvironmentConfigPath == null || environment == null) return;
    setMenuOpen(false);
    onMenuOpenChange?.(false);
    openScopedModal(scope, AddLocalEnvironmentActionPopoverContent, {
      configPath: resolvedEnvironmentConfigPath,
      environment,
      hostConfig,
      onOpenSettings: openSettings,
      onRunAction: (action: LocalEnvironmentAction) => {
        runEnvironmentAction({
          action,
          commandId: null,
          runId: `environmentAction${(environment.environment.actions ?? []).length + 1}`,
        });
      },
      workspaceRoot,
    });
  };

  if (
    conversationId != null &&
    environment != null &&
    resolvedEnvironmentConfigPath != null
  ) {
    let actionsTitle = intl.formatMessage({
        id: "settings.localEnvironments.actions.title",
        defaultMessage: "Actions",
        description: "Title for local environment actions section",
      }),
      primaryAction = primaryActionItem?.action ?? null,
      primaryActionTitle = primaryAction
        ? intl.formatMessage(
            {
              id: "threadPage.runAction.summaryRow.primaryActionTitle",
              defaultMessage: "Run: {actionName}",
              description:
                "Tooltip and accessible label for the primary run action row in the summary panel",
            },
            {
              actionName: primaryAction.name,
            },
          )
        : null,
      runPrimaryAction = () => {
        if (primaryActionItem == null) return;
        setMenuOpen(false);
        onMenuOpenChange?.(false);
        runEnvironmentAction(primaryActionItem);
      },
      commandRegistration = registerCommands ? (
        <RegisterLocalEnvironmentActionCommands
          actions={commandActionItems}
          conversationId={conversationId}
          onRunAction={runEnvironmentAction}
        />
      ) : null,
      actionsTriggerButton = (
        <Tooltip tooltipContent={actionsTitle} delayOpen={true}>
          <button
            aria-label={actionsTitle}
            className={localEnvironmentActionIconButtonClassName}
            title={actionsTitle}
            type="button"
          >
            <MoreHorizontalIcon className="icon-xs" />
          </button>
        </Tooltip>
      ),
      actionMenuItems = sortedActionItems?.map((actionItem) => (
        <LocalEnvironmentActionMenuItem
          key={actionItem.action.name}
          actionItem={actionItem}
          isPrimaryAction={actionItem === primaryActionItem}
          onRunAction={runEnvironmentAction}
        />
      )),
      changeEnvironmentMenu = canChangeEnvironment ? (
        <>
          <MenuSeparator />
          <DropdownMenuSubmenu
            trigger={
              <MenuChrome.Item
                LeftIcon={SettingsGearIcon}
                leftIconClassName="icon-sm"
              >
                <FormattedMessage
                  id="threadPage.runAction.changeEnvironment"
                  defaultMessage="Change environment"
                  description="Menu item to change the active local environment"
                />
              </MenuChrome.Item>
            }
          >
            <LocalEnvironmentSelectorContent
              availableEnvironments={availableEnvironments}
              defaultEnvironment={defaultEnvironment}
              defaultEnvironmentNormalized={defaultEnvironmentNormalized}
              localEnvironments={localEnvironments}
              localEnvironmentsError={localEnvironmentsError}
              localEnvironmentsLoading={localEnvironmentsLoading}
              normalizedResolvedConfigPath={normalizedResolvedConfigPath}
              onOpenSettings={openSettings}
              onSelectEnvironment={(configPath) => {
                setEnvironmentSelection(configPath);
                setMenuOpen(false);
                onMenuOpenChange?.(false);
              }}
            />
          </DropdownMenuSubmenu>
        </>
      ) : null;

    let primaryActionButton =
      primaryActionItem != null && primaryActionTitle != null ? (
        <Tooltip
          tooltipContent={primaryActionTitle}
          shortcut={
            primaryActionItem.commandId == null ? null : primaryShortcut
          }
          delayOpen={true}
        >
          <button
            aria-label={primaryActionTitle}
            className={localEnvironmentActionIconButtonClassName}
            title={primaryActionTitle}
            type="button"
            onClick={runPrimaryAction}
          >
            <LocalEnvironmentActionIcon
              icon={primaryActionItem.action.icon ?? "tool"}
            />
          </button>
        </Tooltip>
      ) : null;

    return (
      <div className="ms-auto flex min-w-0 items-center">
        {commandRegistration}
        <DropdownMenu
          align="end"
          contentWidth="workspace"
          open={isMenuOpen}
          side="bottom"
          onOpenChange={handleMenuOpenChange}
          triggerButton={actionsTriggerButton}
        >
          <MenuChrome.Title>
            <FormattedMessage
              id="threadPage.runAction.dropdown.titleWithEnvironment"
              defaultMessage={"{environmentName} actions"}
              description="Title for the run action dropdown when an environment is selected"
              values={{
                environmentName:
                  getLocalEnvironmentResultDisplayName(environment),
              }}
            />
          </MenuChrome.Title>
          {actionMenuItems}
          <MenuChrome.Item
            LeftIcon={PlusIcon}
            leftIconClassName="icon-sm"
            onSelect={openAddAction}
          >
            <FormattedMessage
              id="settings.localEnvironments.actions.add"
              defaultMessage="Add action"
              description="Button label to add a local environment action"
            />
          </MenuChrome.Item>
          {changeEnvironmentMenu}
        </DropdownMenu>
        {primaryActionButton}
      </div>
    );
  }

  let createEnvironmentLabel = intl.formatMessage({
      id: "threadPage.runAction.environment.create",
      defaultMessage: "Create environment",
      description: "CTA to create a local environment from a thread",
    }),
    environmentSelectorTitle = intl.formatMessage({
      id: "threadPage.runAction.environmentSelector.label",
      defaultMessage: "Choose environment",
      description:
        "Tooltip and aria label for the environment selector button when no environment is selected",
    }),
    handleEnvironmentSelect = (configPath: string | null) => {
      setEnvironmentSelection(configPath);
      setMenuOpen(false);
      onOpenChange?.(false);
    },
    selectorContent = (
      <LocalEnvironmentSelectorContent
        localEnvironmentsLoading={localEnvironmentsLoading}
        localEnvironmentsError={localEnvironmentsError}
        localEnvironments={localEnvironments}
        availableEnvironments={availableEnvironments}
        defaultEnvironment={defaultEnvironment}
        defaultEnvironmentNormalized={defaultEnvironmentNormalized}
        normalizedResolvedConfigPath={normalizedResolvedConfigPath}
        onSelectEnvironment={handleEnvironmentSelect}
        onOpenSettings={openSettings}
      />
    ),
    handleSelectorOpenChange = (open: boolean) => {
      setMenuOpen(open);
      onOpenChange?.(open);
    };

  return (
    <>
      <PlatformContentGate electron={true}>
        {hasNoLocalEnvironments ? (
          <Tooltip tooltipContent={createEnvironmentLabel} delayOpen={true}>
            <Button
              aria-label={createEnvironmentLabel}
              className="ms-auto"
              color="ghost"
              disabled={!canChangeEnvironment}
              size="icon"
              type="button"
              onClick={createEnvironment}
            >
              <PlusIcon className="icon-sm" />
            </Button>
          </Tooltip>
        ) : (
          <LocalEnvironmentSelectorDropdown
            canChangeEnvironment={canChangeEnvironment}
            open={isMenuOpen}
            title={environmentSelectorTitle}
            onOpenChange={handleSelectorOpenChange}
          >
            {selectorContent}
          </LocalEnvironmentSelectorDropdown>
        )}
      </PlatformContentGate>
      <PlatformContentGate
        browser={true}
        chromeExtension={true}
        extension={true}
      >
        <LocalEnvironmentSelectorDropdown
          canChangeEnvironment={canChangeEnvironment}
          open={isMenuOpen}
          title={environmentSelectorTitle}
          onOpenChange={handleSelectorOpenChange}
        >
          {selectorContent}
        </LocalEnvironmentSelectorDropdown>
      </PlatformContentGate>
    </>
  );
}

function LocalEnvironmentSelectorDropdown({
  canChangeEnvironment,
  children,
  open,
  title,
  onOpenChange,
}: LocalEnvironmentSelectorDropdownProps) {
  let triggerButton = (
      <Button
        aria-label={title}
        className="ms-auto"
        color="ghost"
        disabled={!canChangeEnvironment}
        size="icon"
      >
        <SettingsGearIcon className="icon-sm" />
      </Button>
    ),
    tooltipTrigger = (
      <Tooltip tooltipContent={title} delayOpen={true}>
        {triggerButton}
      </Tooltip>
    );
  return (
    <DropdownMenu
      align="end"
      contentWidth="workspace"
      disabled={!canChangeEnvironment}
      open={open}
      side="bottom"
      triggerButton={tooltipTrigger}
      onOpenChange={onOpenChange}
    >
      {children}
    </DropdownMenu>
  );
}

function LocalEnvironmentActionMenuItem({
  actionItem,
  isPrimaryAction,
  onRunAction,
}: LocalEnvironmentActionMenuItemProps) {
  return actionItem.commandId == null ? (
    <LocalEnvironmentActionMenuRow
      actionItem={actionItem}
      isPrimaryAction={isPrimaryAction}
      shortcut={null}
      onRunAction={onRunAction}
    />
  ) : (
    <LocalEnvironmentActionMenuItemWithShortcut
      actionItem={actionItem}
      commandId={actionItem.commandId}
      isPrimaryAction={isPrimaryAction}
      onRunAction={onRunAction}
    />
  );
}

function LocalEnvironmentActionMenuItemWithShortcut({
  actionItem,
  commandId,
  isPrimaryAction,
  onRunAction,
}: LocalEnvironmentActionMenuItemProps & { commandId: string }) {
  let shortcut = useScopedValue(
    localEnvironmentActionShortcutSignal,
    commandId,
  );
  return (
    <LocalEnvironmentActionMenuRow
      actionItem={actionItem}
      isPrimaryAction={isPrimaryAction}
      shortcut={shortcut}
      onRunAction={onRunAction}
    />
  );
}

function LocalEnvironmentActionMenuRow({
  actionItem,
  isPrimaryAction,
  shortcut,
  onRunAction,
}: LocalEnvironmentActionMenuRowProps) {
  let { action } = actionItem;
  return (
    <MenuChrome.Item
      key={action.name}
      onSelect={() => {
        onRunAction(actionItem);
      }}
    >
      <MenuChrome.ItemIcon>
        <LocalEnvironmentActionIcon icon={action.icon ?? "tool"} />
      </MenuChrome.ItemIcon>
      <span className="flex w-full min-w-0 items-center gap-2">
        <span className="min-w-0 flex-1 truncate">{action.name}</span>
        {isPrimaryAction ? (
          <CheckMdIcon className="icon-xs shrink-0 text-token-description-foreground" />
        ) : null}
        {shortcut ? (
          <span className="shrink-0 text-xs text-token-description-foreground">
            {shortcut}
          </span>
        ) : null}
      </span>
    </MenuChrome.Item>
  );
}

function RegisterLocalEnvironmentActionCommands({
  actions,
  conversationId,
  onRunAction,
}: RegisterLocalEnvironmentActionCommandsProps) {
  return (
    <>
      {LOCAL_ENVIRONMENT_ACTION_COMMAND_IDS.map((commandId, index) => (
        <RegisterLocalEnvironmentActionCommand
          key={commandId}
          actionItem={actions[index]}
          commandId={commandId}
          conversationId={conversationId}
          index={index}
          onRunAction={onRunAction}
        />
      ))}
    </>
  );
}

function RegisterLocalEnvironmentActionCommand({
  actionItem,
  commandId,
  conversationId,
  index,
  onRunAction,
}: RegisterLocalEnvironmentActionCommandProps) {
  let intl = useIntl(),
    enabled = actionItem != null && conversationId != null,
    title =
      actionItem == null
        ? ""
        : intl.formatMessage(
            {
              id: "threadPage.runAction.commandMenu.title",
              defaultMessage: "Run: {actionName}",
              description:
                "Command menu item title for a local environment action",
            },
            {
              actionName: actionItem.action.name,
            },
          );

  useCommandRegistration(
    commandId,
    () => {
      if (actionItem != null) onRunAction(actionItem);
    },
    {
      enabled,
    },
  );

  registerThreadSidePanelTab({
    id: commandId,
    groupKey: "workspace",
    enabled,
    order: index,
    dependencies: [
      actionItem?.action.name,
      actionItem?.action.command,
      actionItem?.action.icon,
      commandId,
    ],
    render: (closeMenu: () => void) => {
      if (actionItem == null) return null;
      let { action } = actionItem;
      return (
        <CommandMenuItem
          value={title}
          keywords={["environment", "action"]}
          title={title}
          leftAccessory={
            <LocalEnvironmentActionIcon
              className="icon-xs shrink-0"
              icon={action.icon ?? "tool"}
            />
          }
          rightAccessory={
            <LocalEnvironmentActionShortcutBadge commandId={commandId} />
          }
          onSelect={() => {
            onRunAction(actionItem);
            closeMenu();
          }}
        />
      );
    },
  });

  return null;
}

function LocalEnvironmentActionShortcutBadge({
  commandId,
}: LocalEnvironmentActionShortcutBadgeProps) {
  let shortcut = useScopedValue(
    localEnvironmentActionShortcutSignal,
    commandId,
  );
  return shortcut ? <KeyboardShortcutKeycap keysLabel={shortcut} /> : null;
}

const initLocalConversationEnvironmentStateChunk = once(() => {
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initGitBranchQueryRuntime();
  initUseGitConfigValueChunk();
  initGitQueryKeyHelpers();
  initConfigPathRuntime();
  initVscodeBridgeRuntime();
  initHostWorktreeContextRuntime();
});

export const initLocalEnvironmentActionControlsChunk = once(() => {
  initLocalEnvironmentSelectionRuntime();
  initSignalStateRuntime();
  initAppScopeSignalRuntime();
  initIntlRuntime();
  initLocalEnvironmentConfigRuntime();
  initConversationRemoteStateHelpers();
  initThreadSidePanelTabRegistryChunk();
  initKeyboardModifierStateRuntime();
  initButtonComponentPrimitives();
  initDropdownMenuPrimitives();
  initKeyboardShortcutKeycap();
  initModalRuntime();
  initTooltipPrimitives();
  initPlatformContentRuntime();
  initCommandMenuItemComponent();
  initGitQueryKeyHelpers();
  initOsInfoQueryRuntime();
  initCheckmarkIcon();
  initPlusIcon();
  initSettingsGearIcon();
  initMoreHorizontalIcon();
  initLocalEnvironmentSelectorContentChunk();
  initAddLocalEnvironmentActionFormChunk();
  initRecentLocalEnvironmentActionsSignal();
  initLocalConversationEnvironmentStateChunk();
  initAppScopeSignalRuntime();
  initLocalEnvironmentActionIconChunk();
  initProfileGitSummaryRuntime();
  initLocalEnvironmentDefaultsChunk();
  initEnvironmentTerminalRuntime();
  initAppLoggerRuntime();
  initConfigPathRuntime();
  initUseStableCallback();
  initHostWorkspaceQueries();
  initOutputArtifactRuntime();
  initLocalConversationNavigationRuntime();
});
