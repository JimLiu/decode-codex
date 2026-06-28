// Restored from ref/webview/assets/local-remote-dropdown-BcmhHtfg.js
// Composer run-location controls used by the local-conversation summary panel.
import React, { type ReactNode } from "react";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../vendor/react-intl";

type ComposerMode = "cloud" | "local" | "worktree" | string;

type FooterRemoteState = {
  existingRemoteThreadState?: {
    connectionDisplayName?: string | null;
    hostId?: string | null;
    projectPath?: string | null;
  } | null;
  isAttachedToStartedTask?: boolean;
};

type ThreadHandoffSummary = {
  conversationTitle?: string | null;
  cwd: string;
  isWorktreeConversation: boolean;
};

type LocalRemoteDropdownProps = {
  allowWorktree?: boolean;
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  footerRemoteState?: FooterRemoteState | null;
  hideModeDropdown?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
  threadHandoff?: ThreadHandoffSummary | null;
  triggerVariant?: "composer" | "summary-panel" | string;
  worktreeLabelOnly?: boolean;
};

type CloudEnvironmentDropdownProps = {
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
};

type DropdownOption = {
  description?: ReactNode;
  disabled?: boolean;
  id: ComposerMode;
  label: ReactNode;
};

export function initThreadHandoffSummaryHelpersChunk(): void {}

export function initLocalRemoteDropdownChunk(): void {
  initIntlRuntime();
}

export function initCloudEnvironmentDropdownChunk(): void {
  initIntlRuntime();
}

export function initLocalRemoteDropdownStateChunk(): void {}

export function shouldShowThreadHandoffInSummary({
  isCompactWindow,
}: {
  isCompactWindow: boolean;
}): boolean {
  return !isCompactWindow;
}

export function isComposerModeVisibleInLocalRemoteDropdown(
  mode: ComposerMode,
): boolean {
  return mode !== "cloud";
}

export function LocalRemoteDropdown({
  allowWorktree = false,
  composerMode,
  disabled = false,
  footerRemoteState = null,
  hideModeDropdown = false,
  onOpenChange,
  setComposerMode,
  threadHandoff = null,
  triggerVariant = "composer",
  worktreeLabelOnly = false,
}: LocalRemoteDropdownProps): JSX.Element | null {
  let intl = useIntl(),
    [isOpen, setIsOpen] = React.useState(false),
    isRemoteThread = getRemoteThreadState(footerRemoteState) != null,
    isSummaryPanel = triggerVariant === "summary-panel",
    modeLabel = getComposerModeLabel({
      composerMode,
      isRemoteThread,
      worktreeLabelOnly,
    }),
    modeDescription = getModeDescription({
      composerMode,
      isRemoteThread,
      threadHandoff,
    }),
    canOpen = !disabled && !hideModeDropdown;

  let updateOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!canOpen && nextOpen) return;
      setIsOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [canOpen, onOpenChange],
  );

  if (hideModeDropdown && !worktreeLabelOnly) return null;

  let options: DropdownOption[] = [
    {
      id: "local",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remote"
          defaultMessage="Remote"
          description="Remote mode label"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.workLocally"
          defaultMessage="Work locally"
          description="Local mode label"
        />
      ),
      description: isRemoteThread ? (
        getRemoteThreadDescription(footerRemoteState)
      ) : (
        <FormattedMessage
          id="composer.mode.localSlashCommand.description"
          defaultMessage="Run this chat locally"
          description="Description for the local mode slash command"
        />
      ),
      disabled: composerMode === "local",
    },
    {
      id: "cloud",
      label: (
        <FormattedMessage
          id="composer.mode.runInCloud"
          defaultMessage="Cloud"
          description="Remote mode label when a Codex task will be run in the cloud"
        />
      ),
      description: (
        <FormattedMessage
          id="composer.mode.cloudSlashCommand.description"
          defaultMessage="Run this chat in the cloud"
          description="Description for the cloud mode slash command"
        />
      ),
      disabled: composerMode === "cloud",
    },
  ];

  if (allowWorktree || worktreeLabelOnly || threadHandoff != null) {
    options.splice(1, 0, {
      id: "worktree",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remoteWorktree"
          defaultMessage="New remote worktree"
          description="Worktree mode label when the selected workspace is remote"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.worktree"
          defaultMessage="New worktree"
          description="Worktree mode label"
        />
      ),
      description: (
        <FormattedMessage
          id={
            isRemoteThread
              ? "composer.mode.remoteWorktree.tooltip"
              : "composer.mode.worktree.tooltip"
          }
          defaultMessage={
            isRemoteThread
              ? "Create a copy of your remote project to work in parallel"
              : "Create a copy of your local project to work in parallel"
          }
          description="Tooltip content for worktree mode dropdown item"
        />
      ),
      disabled:
        composerMode === "worktree" || (!allowWorktree && !threadHandoff),
    });
  }

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className={getTriggerClassName(isSummaryPanel)}
        disabled={!canOpen}
        title={intl.formatMessage({
          id: "composer.mode.localRemoteWhereRun",
          defaultMessage: "Select where to run the task",
          description: "Tooltip content for local/remote dropdown",
        })}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 truncate">{modeLabel}</span>
        {canOpen ? (
          <span className="text-token-text-tertiary" aria-hidden={true}>
            v
          </span>
        ) : null}
      </button>
      {isOpen ? (
        <RunLocationMenu
          description={modeDescription}
          options={options}
          selectedMode={composerMode}
          onSelect={(nextMode) => {
            void setComposerMode(nextMode);
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}

export function CloudEnvironmentDropdown({
  composerMode,
  disabled = false,
  onOpenChange,
  setComposerMode,
}: CloudEnvironmentDropdownProps): JSX.Element | null {
  let [isOpen, setIsOpen] = React.useState(false);
  if (composerMode !== "cloud") return null;

  let updateOpen = (nextOpen: boolean) => {
    if (disabled && nextOpen) return;
    setIsOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className="flex h-7 min-w-0 items-center gap-1 rounded-md border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40"
        disabled={disabled}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 truncate">
          <FormattedMessage
            id="composer.mode.remote.selectEnvironment"
            defaultMessage="Select environment"
            description="Remote mode label when no environment is selected"
          />
        </span>
        <span className="text-token-text-tertiary" aria-hidden={true}>
          v
        </span>
      </button>
      {isOpen ? (
        <RunLocationMenu
          description={
            <FormattedMessage
              id="composer.environmentSelector.title"
              defaultMessage="Select environment"
              description="Title for the cloud environment dropdown"
            />
          }
          options={[
            {
              id: "cloud",
              label: (
                <FormattedMessage
                  id="composer.mode.runInCloud"
                  defaultMessage="Cloud"
                  description="Remote mode label when a Codex task will be run in the cloud"
                />
              ),
              description: (
                <FormattedMessage
                  id="composer.environmentSelector.footerCategory"
                  defaultMessage="Env"
                  description="Category label for the environment control in the composer footer"
                />
              ),
            },
          ]}
          selectedMode={composerMode}
          onSelect={(nextMode) => {
            void setComposerMode(nextMode);
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}

function RunLocationMenu({
  description,
  onSelect,
  options,
  selectedMode,
}: {
  description?: ReactNode;
  onSelect: (mode: ComposerMode) => void;
  options: DropdownOption[];
  selectedMode: ComposerMode;
}): JSX.Element {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 flex w-64 flex-col overflow-hidden rounded-md border border-token-border bg-token-bg-primary py-1 text-sm shadow-lg">
      {description ? (
        <div className="border-b border-token-border px-3 py-2 text-xs text-token-text-secondary">
          {description}
        </div>
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={option.disabled}
          className="flex min-w-0 flex-col gap-0.5 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background disabled:cursor-default disabled:opacity-50"
          onClick={() => onSelect(option.id)}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate">{option.label}</span>
            {selectedMode === option.id ? (
              <span className="text-token-text-tertiary" aria-hidden={true}>
                *
              </span>
            ) : null}
          </span>
          {option.description ? (
            <span className="line-clamp-2 text-xs text-token-text-secondary">
              {option.description}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

function getTriggerClassName(isSummaryPanel: boolean): string {
  return isSummaryPanel
    ? "flex h-7 min-w-0 items-center gap-1 rounded-md px-1.5 text-sm text-token-foreground hover:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
    : "flex h-token-button-composer min-w-0 items-center gap-1 rounded-full border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40";
}

function getComposerModeLabel({
  composerMode,
  isRemoteThread,
  worktreeLabelOnly,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  worktreeLabelOnly: boolean;
}): ReactNode {
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.runInCloud"
        defaultMessage="Cloud"
        description="Remote mode label when a Codex task will be run in the cloud"
      />
    );
  }
  if (composerMode === "worktree" || worktreeLabelOnly) {
    return isRemoteThread ? (
      <FormattedMessage
        id="composer.mode.remoteWorktree"
        defaultMessage="New remote worktree"
        description="Worktree mode label when the selected workspace is remote"
      />
    ) : (
      <FormattedMessage
        id="composer.mode.worktree"
        defaultMessage="New worktree"
        description="Worktree mode label"
      />
    );
  }
  if (isRemoteThread) {
    return (
      <FormattedMessage
        id="composer.mode.remote"
        defaultMessage="Remote"
        description="Remote mode label"
      />
    );
  }
  return (
    <FormattedMessage
      id="composer.mode.local.short"
      defaultMessage="Local"
      description="Short local mode label"
    />
  );
}

function getModeDescription({
  composerMode,
  isRemoteThread,
  threadHandoff,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  threadHandoff: ThreadHandoffSummary | null;
}): ReactNode {
  if (threadHandoff != null) {
    return (
      <span className="block truncate">
        {threadHandoff.conversationTitle ?? threadHandoff.cwd}
      </span>
    );
  }
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.cloudSlashCommand.description"
        defaultMessage="Run this chat in the cloud"
        description="Description for the cloud mode slash command"
      />
    );
  }
  if (isRemoteThread) return null;
  return (
    <FormattedMessage
      id="composer.mode.localRemoteWhereRun"
      defaultMessage="Select where to run the task"
      description="Tooltip content for local/remote dropdown"
    />
  );
}

function getRemoteThreadState(
  footerRemoteState: FooterRemoteState | null,
): FooterRemoteState["existingRemoteThreadState"] | null {
  let remoteThreadState = footerRemoteState?.existingRemoteThreadState ?? null;
  return remoteThreadState?.hostId != null &&
    remoteThreadState.hostId !== "local"
    ? remoteThreadState
    : null;
}

function getRemoteThreadDescription(
  footerRemoteState: FooterRemoteState | null,
): ReactNode {
  let remoteThreadState = getRemoteThreadState(footerRemoteState);
  if (remoteThreadState == null) return null;
  return (
    remoteThreadState.connectionDisplayName ?? remoteThreadState.projectPath
  );
}
