// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Dialog form for adding a runnable local-environment action from the thread summary panel.
import {
  useId,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { once } from "../../runtime/commonjs-interop";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  Dropdown as MenuChrome,
  DropdownMenu,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import {
  DialogBody,
  DialogFooter as DialogFooterActions,
  DialogHeader,
  DialogLayout as AppDialog,
  DialogSection,
  FieldStack as DialogFieldStack,
  initAppDialog,
  initDialogLayoutComponents,
} from "../../ui/dialog-layout";
import {
  createQueryKey,
  initAppServerMutationRuntime,
  useAppServerMutation,
  useQueryClient,
} from "../../runtime/app-server-mutation-runtime";
import {
  getWorkspaceRootDisplayName,
  initWorkspaceRootDisplayNameRuntime,
} from "./local-environment-action-controls-runtime";
import {
  cloneLocalEnvironmentActions,
  createLocalEnvironmentAction,
  initLocalEnvironmentActionIconChunk,
  initLocalEnvironmentActionIconOptionsChunk,
  initLocalEnvironmentDefaultsChunk,
  LocalEnvironmentActionIcon,
  LOCAL_ENVIRONMENT_ACTION_ICON_OPTIONS,
  normalizePlatformScripts,
  serializeLocalEnvironmentConfig,
  type LocalEnvironmentAction,
} from "../../environments/local-environments-utils";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";

type HostConfigForLocalEnvironmentAction = {
  id: string;
};

type LocalEnvironmentConfigForActionForm = {
  actions?: LocalEnvironmentAction[] | null;
  cleanup?: {
    script?: string;
    darwin?: { script?: string };
    linux?: { script?: string };
    win32?: { script?: string };
  } | null;
  name?: string | null;
  setup: {
    script?: string;
    darwin?: { script?: string };
    linux?: { script?: string };
    win32?: { script?: string };
  };
  version?: number | null;
};

type LocalEnvironmentForActionForm = {
  configPath: string;
  environment: LocalEnvironmentConfigForActionForm;
};

type LocalEnvironmentActionRunPayload = {
  command: string;
  icon?: LocalEnvironmentAction["icon"];
  name: string;
  platform?: LocalEnvironmentAction["platform"];
};

type LocalEnvironmentActionSetupFormProps = {
  command: string;
  commandLabel: ReactNode;
  commandPlaceholder: string;
  description: ReactNode;
  extraFields?: ReactNode;
  headerIcon: ReactNode;
  leftAction: ReactNode;
  submitDisabled?: boolean;
  submitLabel: ReactNode;
  submitLoading?: boolean;
  title: ReactNode;
  onCommandChange: (command: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

type AddLocalEnvironmentActionFormProps = {
  action: LocalEnvironmentAction;
  configPath: string;
  environment: LocalEnvironmentForActionForm;
  hostConfig: HostConfigForLocalEnvironmentAction;
  onOpenSettings: () => void;
  onRunAction: (action: LocalEnvironmentActionRunPayload) => void;
  onSaved: () => void;
  onUpdate: (patch: Partial<LocalEnvironmentAction>) => void;
  workspaceRoot: string | null | undefined;
};

type AddLocalEnvironmentActionPopoverContentProps = Omit<
  AddLocalEnvironmentActionFormProps,
  "action" | "onSaved" | "onUpdate"
> & {
  onClose: () => void;
};

function LocalEnvironmentActionSetupForm({
  headerIcon,
  title,
  description,
  commandLabel,
  command,
  onCommandChange,
  commandPlaceholder,
  extraFields,
  leftAction,
  submitLabel,
  submitDisabled = false,
  submitLoading = false,
  onSubmit,
}: LocalEnvironmentActionSetupFormProps) {
  let commandInputId = useId();
  let handleCommandInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onCommandChange(event.target.value);
  };

  return (
    <form className="flex flex-col gap-0" onSubmit={onSubmit}>
      <DialogBody className="gap-3">
        <DialogSection>
          <DialogHeader
            icon={headerIcon}
            subtitle={description}
            title={title}
          />
        </DialogSection>
        {extraFields ? (
          <DialogSection>
            <DialogFieldStack className="gap-3">{extraFields}</DialogFieldStack>
          </DialogSection>
        ) : null}
        <DialogSection>
          <DialogFieldStack className="gap-2">
            <label
              className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
              htmlFor={commandInputId}
            >
              {commandLabel}
            </label>
            <textarea
              id={commandInputId}
              className="focus-visible:ring-token-focus min-h-44 w-full resize-none rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none placeholder:text-token-input-placeholder-foreground focus-visible:ring-2"
              placeholder={commandPlaceholder}
              value={command}
              onChange={handleCommandInputChange}
            />
          </DialogFieldStack>
        </DialogSection>
        <DialogSection>
          <DialogFooterActions className="justify-between">
            {leftAction}
            <Button
              color="primary"
              disabled={submitDisabled}
              loading={submitLoading}
              type="submit"
            >
              {submitLabel}
            </Button>
          </DialogFooterActions>
        </DialogSection>
      </DialogBody>
    </form>
  );
}

function AddLocalEnvironmentActionForm({
  action,
  configPath,
  environment,
  hostConfig,
  onOpenSettings,
  onRunAction,
  onSaved,
  onUpdate,
  workspaceRoot,
}: AddLocalEnvironmentActionFormProps) {
  let intl = useIntl(),
    queryClient = useQueryClient(),
    saveConfigMutation = useAppServerMutation("local-environment-config-save");

  let iconOptions = LOCAL_ENVIRONMENT_ACTION_ICON_OPTIONS.map(
      (iconOptionConfig) => ({
        ariaLabel: intl.formatMessage(iconOptionConfig.message),
        icon: <LocalEnvironmentActionIcon icon={iconOptionConfig.value} />,
        value: iconOptionConfig.value,
      }),
    ),
    selectedIconOption =
      iconOptions.find((item) => item.value === action.icon) ?? iconOptions[0],
    defaultEnvironmentName =
      getWorkspaceRootDisplayName(workspaceRoot) ??
      intl.formatMessage({
        id: "settings.localEnvironments.environment.defaultName",
        defaultMessage: "local",
        description: "Fallback name for the local environment",
      }),
    trimmedActionName = action.name.trim(),
    trimmedCommand = action.command.trim(),
    submitDisabled =
      trimmedActionName.length === 0 ||
      trimmedCommand.length === 0 ||
      saveConfigMutation.isPending,
    nameInputId = `local-env-action-name-${action.id}`;

  let handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitDisabled) return;

    let currentEnvironment = environment.environment,
      savedAction = {
        ...action,
        command: trimmedCommand,
        name: trimmedActionName,
      },
      runActionPayload: LocalEnvironmentActionRunPayload = {
        command: trimmedCommand,
        icon: action.icon,
        name: trimmedActionName,
        ...(action.platform
          ? {
              platform: action.platform,
            }
          : {}),
      },
      rawEnvironmentConfig = serializeLocalEnvironmentConfig({
        actions: [
          ...cloneLocalEnvironmentActions(currentEnvironment.actions ?? []),
          savedAction,
        ],
        cleanupPlatformScripts: normalizePlatformScripts(
          currentEnvironment.cleanup ?? undefined,
        ),
        cleanupScript: currentEnvironment.cleanup?.script ?? "",
        name: currentEnvironment.name || defaultEnvironmentName,
        setupPlatformScripts: normalizePlatformScripts(
          currentEnvironment.setup,
        ),
        setupScript: currentEnvironment.setup.script ?? "",
        version: currentEnvironment.version ?? 1,
      });

    saveConfigMutation.mutate(
      {
        configPath,
        hostId: hostConfig.id,
        raw: rawEnvironmentConfig,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: createQueryKey("local-environment-config", {
              configPath,
              hostId: hostConfig.id,
            }),
          });
          queryClient.invalidateQueries({
            queryKey: createQueryKey("local-environment", {
              configPath,
              hostId: hostConfig.id,
            }),
          });
          if (workspaceRoot != null) {
            queryClient.invalidateQueries({
              queryKey: createQueryKey("local-environments", {
                hostId: hostConfig.id,
                workspaceRoot,
              }),
            });
          }
          onSaved();
          onRunAction(runActionPayload);
        },
      },
    );
  };

  let handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    onUpdate({
      name: event.target.value,
    });
  };
  let handleCommandChange = (command: string) => {
    onUpdate({
      command,
    });
  };
  let renderIconOption = (iconOption: (typeof iconOptions)[number]) => (
    <MenuChrome.Item
      key={iconOption.value}
      tooltipText={iconOption.ariaLabel}
      onSelect={() => {
        onUpdate({
          icon: iconOption.value,
        });
      }}
    >
      {iconOption.icon}
    </MenuChrome.Item>
  );

  let iconDropdown = (
    <DropdownMenu
      align="start"
      contentWidth="icon"
      triggerButton={
        <Button
          id={`local-env-action-icon-${action.id}`}
          aria-label={selectedIconOption.ariaLabel}
          className="w-12 justify-center text-sm"
          color="secondary"
          size="toolbar"
        >
          {selectedIconOption.icon}
        </Button>
      }
    >
      {iconOptions.map(renderIconOption)}
    </DropdownMenu>
  );
  let extraFields = (
    <div className="flex w-full flex-col gap-2">
      <label
        className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
        htmlFor={nameInputId}
      >
        <FormattedMessage
          id="settings.localEnvironments.actions.item.name"
          defaultMessage="Name"
          description="Label for local environment action name"
        />
      </label>
      <div className="flex items-center gap-2">
        {iconDropdown}
        <div className="flex-1">
          <input
            id={nameInputId}
            className="w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-0"
            value={action.name}
            onChange={handleNameChange}
          />
        </div>
      </div>
    </div>
  );
  let headerIcon = (
    <LocalEnvironmentActionIcon
      className="icon-base text-token-foreground"
      icon={action.icon ?? "tool"}
    />
  );
  let settingsButton = (
    <Button
      className="px-0"
      color="ghost"
      size="toolbar"
      type="button"
      onClick={onOpenSettings}
    >
      <FormattedMessage
        id="threadPage.runAction.setup.editMore"
        defaultMessage="Environment settings"
        description="Edit more action label in run action setup popover"
      />
    </Button>
  );

  return (
    <LocalEnvironmentActionSetupForm
      command={action.command}
      commandLabel={
        <FormattedMessage
          id="threadPage.runAction.setup.commandLabel"
          defaultMessage="Command to run"
          description="Label for run action command input"
        />
      }
      commandPlaceholder={intl.formatMessage({
        id: "threadPage.runAction.setup.placeholder",
        defaultMessage: "eg:\nnpm install\nnpm run",
        description: "Placeholder text for the run action command input",
      })}
      description={
        <FormattedMessage
          id="settings.localEnvironments.actions.add.description"
          defaultMessage="Create a new command to run from the toolbar."
          description="Description for adding a local environment action"
        />
      }
      extraFields={extraFields}
      headerIcon={headerIcon}
      leftAction={settingsButton}
      submitDisabled={submitDisabled}
      submitLabel={
        <FormattedMessage
          id="settings.localEnvironments.actions.add.save"
          defaultMessage="Save"
          description="Save button label for adding a local environment action"
        />
      }
      submitLoading={saveConfigMutation.isPending}
      title={
        <FormattedMessage
          id="settings.localEnvironments.actions.add"
          defaultMessage="Add action"
          description="Button label to add a local environment action"
        />
      }
      onCommandChange={handleCommandChange}
      onSubmit={handleSubmit}
    />
  );
}

export function AddLocalEnvironmentActionPopoverContent({
  configPath,
  environment,
  hostConfig,
  onClose,
  onOpenSettings,
  onRunAction,
  workspaceRoot,
}: AddLocalEnvironmentActionPopoverContentProps) {
  let [draftAction, setDraftAction] = useState(
    createEmptyLocalEnvironmentActionDraft,
  );
  let openSettingsAndClose = () => {
    onClose();
    onOpenSettings();
  };
  let updateDraftAction = (patch: Partial<LocalEnvironmentAction>) => {
    setDraftAction((currentDraft) => ({
      ...currentDraft,
      ...patch,
    }));
  };

  return (
    <AppDialog
      open={true}
      contentClassName="!w-[379px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)] !p-0"
      onOpenChange={onClose}
    >
      <AddLocalEnvironmentActionForm
        action={draftAction}
        configPath={configPath}
        environment={environment}
        hostConfig={hostConfig}
        onOpenSettings={openSettingsAndClose}
        onRunAction={onRunAction}
        onSaved={onClose}
        onUpdate={updateDraftAction}
        workspaceRoot={workspaceRoot}
      />
    </AppDialog>
  );
}

function createEmptyLocalEnvironmentActionDraft(): LocalEnvironmentAction {
  return createLocalEnvironmentAction("");
}

export const initAddLocalEnvironmentActionFormChunk = once(() => {
  initAppServerMutationRuntime();
  initIntlRuntime();
  initButtonComponentPrimitives();
  initDialogLayoutComponents();
  initDropdownMenuPrimitives();
  initAppDialog();
  initLocalEnvironmentActionIconChunk();
  initLocalEnvironmentActionIconOptionsChunk();
  initLocalEnvironmentDefaultsChunk();
  initWorkspaceRootDisplayNameRuntime();
});
