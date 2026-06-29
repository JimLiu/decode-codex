// Restored from ref/webview/assets/composer-external-footer-BFeCW1bq.js
// Composer footer orchestration for run location, branch, project, and environment controls.

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Tooltip } from "../ui/tooltip-b";
import { ChevronIcon } from "../icons/chevron-icon";
import {
  BranchIcon,
  CheckIcon,
  ComposerFooterBranchBadge,
  ComposerFooterBranchSwitcher,
  ComposerFooterInlineBranchSwitcher,
} from "./composer-footer-branch-switcher";
import type { ComposerStartingState } from "./composer-footer-branch-switcher";
import {
  WorktreeEnvironmentDropdown,
  type WorktreeEnvironmentDropdownProps,
} from "../environments/worktree-environment-dropdown";

type ComposerMode = "local" | "cloud" | "worktree";
type ComposerFooterVariant = "default" | "home";
type CloudFollowUpStartingState = "working-tree" | "direct-follow-up";
type FooterBranchVisibility = "always" | "local" | "never";
type IconKind =
  | "cloud"
  | "local"
  | "project"
  | "remote"
  | "warning"
  | "worktree";
type WorktreeEnvironment =
  WorktreeEnvironmentDropdownProps["environments"][number];

type RemoteSelectionState = {
  hostId?: string | null;
  connectionDisplayName?: string | null;
  projectPath?: string | null;
};

type ComposerRemoteConfig = {
  currentHostId?: string | null;
  getConnectionDisplayNameForHostId?: (
    hostId: string | null | undefined,
  ) => string | null;
  getProjectPathForHostId?: (
    hostId: string | null | undefined,
  ) => string | null;
};

type FooterRemoteState = {
  isAttachedToStartedTask: boolean;
  existingRemoteThreadState: RemoteSelectionState;
  draftNewThreadRemoteSelectionState: RemoteSelectionState;
};

type ProjectSelectorRenderProps = {
  activeProjectIdOverride?: string | null;
  allowLocalProjectActions: boolean;
  variant: ComposerFooterVariant;
};

type RunLocationRenderProps = {
  allowWorktree: boolean;
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled: boolean;
  executionTargetOverride?: unknown;
  footerRemoteState: FooterRemoteState;
  hideModeDropdown: boolean;
  setComposerMode: (composerMode: ComposerMode) => void;
  threadHandoff?: unknown;
  worktreeLabelOnly: boolean;
};

type CloudRuntimeRenderProps = {
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled: boolean;
  setComposerMode: (composerMode: ComposerMode) => void;
};

type WorktreeEnvironmentRenderProps = {
  codexHome?: string | null;
  environments: WorktreeEnvironment[];
  hasError: boolean;
  hostId?: string | null;
  isLoading: boolean;
  onOpenSettings: () => void;
  onSelectConfigPath: (configPath: string | null) => void;
  selectedConfigPath: string | null;
  workspaceRoot?: string | null;
};

type ComposerExternalFooterProps = {
  activeProjectIdOverride?: string | null;
  asyncThreadStartingState?: ComposerStartingState | null;
  canCreateGitRepository?: boolean;
  canRunCloudFollowUp?: boolean;
  className?: string;
  cloudRuntimeLabel?: ReactNode;
  codexHome?: string | null;
  composerMode: ComposerMode;
  currentHostConfig?: unknown;
  draftNewThreadRemoteSelectionState?: RemoteSelectionState | null;
  existingRemoteThreadState?: RemoteSelectionState | null;
  followUpCloudStartingState?: CloudFollowUpStartingState;
  followUpType?: "cloud" | "local" | null;
  freeUpsellButton?: ReactNode;
  gitRoot?: string | null;
  gitRootForStartingState?: string | null;
  hasAppliedCodeLocally?: boolean;
  hasCustomCliExecutable?: boolean;
  hideRunLocationDropdown?: boolean;
  isAttachedToStartedTask?: boolean;
  isCloudFollowUpRootLoading?: boolean;
  isCreatingGitRepository?: boolean;
  isGitStatusLoading?: boolean;
  isResponseInProgress?: boolean;
  localConversationId?: string | null;
  localRemoteExecutionTarget?: unknown;
  onCreateGitRepository?: () => void;
  onOpenWorktreeEnvironmentSettings?: () => void;
  onSelectWorktreeEnvironmentConfigPath?: (configPath: string | null) => void;
  remoteConfig?: ComposerRemoteConfig;
  renderCloudRuntimeControl?: (props: CloudRuntimeRenderProps) => ReactNode;
  renderProjectSelector?: (props: ProjectSelectorRenderProps) => ReactNode;
  renderRemoteStatus?: (state: RemoteSelectionState) => ReactNode;
  renderRunLocationControl?: (props: RunLocationRenderProps) => ReactNode;
  renderWorktreeEnvironmentDropdown?: (
    props: WorktreeEnvironmentRenderProps,
  ) => ReactNode;
  selectedWorktreeEnvironmentConfigPath?: string | null;
  setAsyncThreadStartingState?: (startingState: ComposerStartingState) => void;
  setComposerMode: (composerMode: ComposerMode) => void;
  setFollowUpCloudStartingState?: (
    startingState: CloudFollowUpStartingState,
  ) => void;
  showFooterBranchWhen?: FooterBranchVisibility;
  showRuntimeControls?: boolean;
  showWorkspaceDropdown?: boolean;
  threadHandoff?: unknown;
  useDraftNewThreadRemoteSelectionState?: boolean;
  variant?: ComposerFooterVariant;
  worktreeEnvironmentError?: unknown;
  worktreeEnvironmentHostId?: string | null;
  worktreeEnvironmentWorkspaceRoot?: string | null;
  worktreeEnvironments?: WorktreeEnvironment[];
  isWorktreeEnvironmentLoading?: boolean;
};

function renderMessage(id: string, defaultMessage: string, className?: string) {
  return (
    <span className={className} data-message-id={id}>
      {defaultMessage}
    </span>
  );
}

type FooterPillButtonProps = {
  categoryLabel?: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  indicator?: "chevron" | "pending" | "none";
  onClick?: () => void;
  tooltipContent?: ReactNode;
  value: ReactNode;
  valueClassName?: string;
};

function FooterPillButton({
  categoryLabel,
  className,
  disabled = false,
  icon,
  indicator = "none",
  onClick,
  tooltipContent,
  value,
  valueClassName,
}: FooterPillButtonProps) {
  const button = (
    <Button
      className={clsx("min-w-0 px-0", className)}
      color="ghost"
      disabled={disabled}
      onClick={onClick}
      size="composerSm"
    >
      {icon == null ? null : <span className="shrink-0">{icon}</span>}
      {categoryLabel == null ? null : (
        <span className="text-token-description-foreground text-xs">
          {categoryLabel}
        </span>
      )}
      <span className={clsx("min-w-0 truncate", valueClassName)}>{value}</span>
      {indicator === "chevron" ? (
        <ChevronIcon className="icon-2xs text-token-input-placeholder-foreground shrink-0" />
      ) : null}
      {indicator === "pending" ? (
        <Spinner className="icon-2xs text-token-input-placeholder-foreground" />
      ) : null}
    </Button>
  );

  if (tooltipContent == null) return button;

  return <Tooltip tooltipContent={tooltipContent}>{button}</Tooltip>;
}

type FooterDropdownProps = {
  children: (closeDropdown: () => void) => ReactNode;
  panelClassName?: string;
  renderTrigger: (props: {
    open: boolean;
    toggleOpen: () => void;
  }) => ReactNode;
};

function FooterDropdown({
  children,
  panelClassName,
  renderTrigger,
}: FooterDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeDropdown = () => setOpen(false);
  const toggleOpen = () => setOpen((currentOpen) => !currentOpen);

  return (
    <div className="relative inline-flex">
      {renderTrigger({ open, toggleOpen })}
      {open ? (
        <div
          className={clsx(
            "border-token-border bg-token-dropdown-background absolute bottom-full left-0 z-50 mb-2 flex min-w-44 flex-col gap-1 rounded-xl border p-1.5 shadow-lg",
            panelClassName,
          )}
        >
          {children(closeDropdown)}
        </div>
      ) : null}
    </div>
  );
}

type ModeOptionButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  onClick: () => void;
  selected?: boolean;
  tooltipContent?: ReactNode;
};

function ModeOptionButton({
  children,
  disabled = false,
  icon,
  onClick,
  selected = false,
  tooltipContent,
}: ModeOptionButtonProps) {
  const button = (
    <button
      className={clsx(
        "hover:bg-token-list-hover-background flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm",
        disabled
          ? "text-token-description-foreground cursor-not-allowed opacity-60"
          : "text-token-foreground",
      )}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {icon == null ? null : <span className="shrink-0">{icon}</span>}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {selected ? <CheckIcon className="icon-xs shrink-0" /> : null}
    </button>
  );

  if (tooltipContent == null) return button;

  return (
    <Tooltip disabled={!disabled} tooltipContent={tooltipContent}>
      <span>{button}</span>
    </Tooltip>
  );
}

type CloudFollowUpModeDropdownProps = {
  canRunCloudFollowUp: boolean;
  composerMode: ComposerMode;
  hasAppliedCodeLocally: boolean;
  isCloudFollowUpRootLoading: boolean;
  setComposerMode: (composerMode: ComposerMode) => void;
};

function CloudFollowUpModeDropdown({
  canRunCloudFollowUp,
  composerMode,
  hasAppliedCodeLocally,
  isCloudFollowUpRootLoading,
  setComposerMode,
}: CloudFollowUpModeDropdownProps) {
  useEffect(() => {
    if (hasAppliedCodeLocally && composerMode !== "local") {
      setComposerMode("local");
    }
  }, [composerMode, hasAppliedCodeLocally, setComposerMode]);

  useEffect(() => {
    if (
      !isCloudFollowUpRootLoading &&
      !canRunCloudFollowUp &&
      composerMode !== "local"
    ) {
      setComposerMode("local");
    }
  }, [
    canRunCloudFollowUp,
    composerMode,
    isCloudFollowUpRootLoading,
    setComposerMode,
  ]);

  const currentLabel =
    composerMode === "cloud"
      ? renderMessage("composer.cloudFollowUp.cloud", "Cloud")
      : renderMessage("composer.cloudFollowUp.local", "Local");

  return (
    <FooterDropdown
      panelClassName="w-44"
      renderTrigger={({ toggleOpen }) => (
        <FooterPillButton
          icon={
            composerMode === "cloud" ? (
              <ModeGlyphIcon className="icon-xs" kind="cloud" />
            ) : (
              <ModeGlyphIcon className="icon-xs" kind="local" />
            )
          }
          indicator="chevron"
          onClick={toggleOpen}
          tooltipContent={renderMessage(
            "composer.cloudFollowUp.whereRun",
            "Where should this follow-up run?",
          )}
          value={currentLabel}
          valueClassName="max-w-40"
        />
      )}
    >
      {(closeDropdown) => (
        <>
          <div className="text-token-description-foreground px-2 py-1 text-xs font-medium">
            {renderMessage("composer.mode.newTask.header", "Continue in")}
          </div>
          <ModeOptionButton
            icon={<ModeGlyphIcon className="icon-xs" kind="local" />}
            selected={composerMode === "local"}
            onClick={() => {
              setComposerMode("local");
              closeDropdown();
            }}
          >
            {renderMessage("composer.cloudFollowUp.local", "Local")}
          </ModeOptionButton>
          {canRunCloudFollowUp ? (
            <ModeOptionButton
              icon={<ModeGlyphIcon className="icon-xs" kind="cloud" />}
              selected={composerMode === "cloud"}
              onClick={() => {
                setComposerMode("cloud");
                closeDropdown();
              }}
            >
              {renderMessage("composer.cloudFollowUp.cloud", "Cloud")}
            </ModeOptionButton>
          ) : null}
        </>
      )}
    </FooterDropdown>
  );
}

type RemoteStartingPointDropdownProps = {
  setStartingState: (startingState: CloudFollowUpStartingState) => void;
  startingState: CloudFollowUpStartingState;
};

function RemoteStartingPointDropdown({
  setStartingState,
  startingState,
}: RemoteStartingPointDropdownProps) {
  const useWorkingTree = startingState === "working-tree";
  const nextStartingState: CloudFollowUpStartingState = useWorkingTree
    ? "direct-follow-up"
    : "working-tree";
  const value = useWorkingTree
    ? renderMessage("composer.remote.localWorkingTree", "Use local changes")
    : renderMessage(
        "composer.remote.directFollowUp",
        "Don't use local changes",
      );

  return (
    <FooterPillButton
      categoryLabel={renderMessage(
        "composer.followUpStartingState.footerCategory",
        "Starting from",
      )}
      icon={
        <ComposerFooterBranchBadge
          badgeEnabled={useWorkingTree}
          borderColor="border-token-side-bar-background"
        >
          <BranchIcon className="icon-xs" />
        </ComposerFooterBranchBadge>
      }
      indicator="chevron"
      onClick={() => setStartingState(nextStartingState)}
      tooltipContent={renderMessage(
        "composer.remote.startingPoint",
        "What code should this task start from?",
      )}
      value={value}
      valueClassName="max-[440px]:hidden"
    />
  );
}

type RunLocationControlProps = {
  composerMode: ComposerMode;
  disabled: boolean;
  footerRemoteState: FooterRemoteState;
  worktreeLabelOnly: boolean;
};

function RunLocationSummaryControl({
  composerMode,
  disabled,
  footerRemoteState,
  worktreeLabelOnly,
}: RunLocationControlProps) {
  const activeRemoteState =
    footerRemoteState.isAttachedToStartedTask ||
    footerRemoteState.draftNewThreadRemoteSelectionState.hostId == null
      ? footerRemoteState.existingRemoteThreadState
      : footerRemoteState.draftNewThreadRemoteSelectionState;
  const isRemoteHost =
    activeRemoteState.hostId != null && activeRemoteState.hostId !== "local";
  const value = getComposerModeLabel({
    composerMode,
    isRemoteHost,
    worktreeLabelOnly,
  });
  const icon = getComposerModeIcon(composerMode, isRemoteHost);

  return (
    <FooterPillButton
      disabled={disabled}
      icon={icon}
      indicator="none"
      tooltipContent={renderMessage(
        "composer.mode.localRemoteWhereRun",
        "Select where to run the task",
      )}
      value={value}
      valueClassName="max-w-40"
    />
  );
}

type RemoteStatusChipProps = {
  state: RemoteSelectionState;
};

function RemoteStatusChip({ state }: RemoteStatusChipProps) {
  if (state.hostId == null) return null;

  const displayName = state.connectionDisplayName ?? state.hostId;
  const chip = (
    <span className="text-token-description-foreground flex min-w-0 items-center gap-1 text-sm">
      <span className="max-w-40 min-w-0 truncate">{displayName}</span>
      <ModeGlyphIcon className="icon-2xs shrink-0" kind="remote" />
    </span>
  );

  return (
    <Tooltip
      disabled={state.projectPath == null}
      tooltipContent={state.projectPath}
    >
      {chip}
    </Tooltip>
  );
}

type CreateGitRepositoryButtonProps = {
  disabled: boolean;
  isCreating: boolean;
  onCreateGitRepository: () => void;
};

function CreateGitRepositoryButton({
  disabled,
  isCreating,
  onCreateGitRepository,
}: CreateGitRepositoryButtonProps) {
  return (
    <Button
      className="px-0"
      color="ghost"
      disabled={disabled}
      size="composerSm"
      onClick={onCreateGitRepository}
    >
      <BranchIcon className="icon-xs" />
      <span className="max-w-40 truncate text-sm">
        {isCreating
          ? renderMessage("codex.review.noDiff.gitInit.creating", "Creating...")
          : renderMessage(
              "codex.review.noDiff.gitInit.createRepository",
              "Create git repository",
            )}
      </span>
    </Button>
  );
}

type CustomCliWarningProps = {
  hasCustomCliExecutable: boolean;
};

function CustomCliWarning({ hasCustomCliExecutable }: CustomCliWarningProps) {
  if (!hasCustomCliExecutable) return null;

  return (
    <Tooltip
      tooltipContent={renderMessage(
        "composer.customCliTooltip",
        "Using a custom CLI executable",
      )}
    >
      <Button className="-mx-2" color="ghost" size="composerSm" uniform={true}>
        <ModeGlyphIcon
          className="icon-xs text-token-editor-warning-foreground"
          kind="warning"
        />
      </Button>
    </Tooltip>
  );
}

export function ComposerExternalFooter({
  activeProjectIdOverride,
  asyncThreadStartingState,
  canCreateGitRepository = false,
  canRunCloudFollowUp = true,
  className,
  cloudRuntimeLabel,
  codexHome,
  composerMode,
  currentHostConfig,
  draftNewThreadRemoteSelectionState,
  existingRemoteThreadState,
  followUpCloudStartingState = "direct-follow-up",
  followUpType = null,
  freeUpsellButton,
  gitRoot = null,
  gitRootForStartingState,
  hasAppliedCodeLocally = false,
  hasCustomCliExecutable = false,
  hideRunLocationDropdown = false,
  isAttachedToStartedTask = false,
  isCloudFollowUpRootLoading = false,
  isCreatingGitRepository = false,
  isGitStatusLoading = false,
  isResponseInProgress = false,
  localConversationId,
  localRemoteExecutionTarget,
  onCreateGitRepository,
  onOpenWorktreeEnvironmentSettings,
  onSelectWorktreeEnvironmentConfigPath,
  remoteConfig,
  renderCloudRuntimeControl,
  renderProjectSelector,
  renderRemoteStatus,
  renderRunLocationControl,
  renderWorktreeEnvironmentDropdown,
  selectedWorktreeEnvironmentConfigPath = null,
  setAsyncThreadStartingState,
  setComposerMode,
  setFollowUpCloudStartingState,
  showFooterBranchWhen = "local",
  showRuntimeControls = false,
  showWorkspaceDropdown = false,
  threadHandoff,
  useDraftNewThreadRemoteSelectionState = false,
  variant = "default",
  worktreeEnvironmentError,
  worktreeEnvironmentHostId,
  worktreeEnvironmentWorkspaceRoot,
  worktreeEnvironments = [],
  isWorktreeEnvironmentLoading = false,
}: ComposerExternalFooterProps) {
  const isCloudFollowUp = followUpType === "cloud";
  const hasActiveFollowUp = followUpType != null;
  const remoteHostId = remoteConfig?.currentHostId ?? "local";
  const defaultDraftRemoteState = buildRemoteSelectionState(
    remoteHostId,
    remoteConfig,
  );
  const footerRemoteState: FooterRemoteState = {
    isAttachedToStartedTask,
    existingRemoteThreadState:
      existingRemoteThreadState ??
      buildRemoteSelectionState("local", remoteConfig),
    draftNewThreadRemoteSelectionState:
      draftNewThreadRemoteSelectionState ?? defaultDraftRemoteState,
  };
  const activeRemoteState = useDraftNewThreadRemoteSelectionState
    ? footerRemoteState.draftNewThreadRemoteSelectionState
    : footerRemoteState.existingRemoteThreadState;
  const showProjectSelector =
    showWorkspaceDropdown && composerMode !== "cloud" && !hasActiveFollowUp;
  const showInlineBranchSwitcher =
    showFooterBranchWhen !== "never" &&
    (showFooterBranchWhen === "always" || composerMode === "local") &&
    !isAttachedToStartedTask &&
    !isGitStatusLoading;
  const showGitCreateButton =
    showInlineBranchSwitcher &&
    canCreateGitRepository &&
    gitRoot == null &&
    onCreateGitRepository != null;
  const inlineBranchSwitcher =
    showInlineBranchSwitcher && !showGitCreateButton ? (
      <ComposerFooterInlineBranchSwitcher
        align="start"
        gitRoot={gitRoot}
        hostConfig={currentHostConfig}
        localConversationId={localConversationId}
        shouldShow={true}
      />
    ) : null;
  const branchStartingState =
    !hasActiveFollowUp &&
    (composerMode === "cloud" || composerMode === "worktree") &&
    asyncThreadStartingState != null &&
    setAsyncThreadStartingState != null ? (
      <ComposerFooterBranchSwitcher
        branchSource={composerMode === "worktree" ? "worktree" : "remote"}
        gitRootOverride={gitRootForStartingState}
        hostConfig={currentHostConfig}
        setStartingState={setAsyncThreadStartingState}
        startingState={asyncThreadStartingState}
      />
    ) : null;
  const projectSelector = showProjectSelector
    ? (renderProjectSelector?.({
        activeProjectIdOverride,
        allowLocalProjectActions: true,
        variant,
      }) ?? (
        <FooterPillButton
          categoryLabel={renderMessage(
            "composer.localCwdDropdown.footerCategory",
            "Project",
          )}
          icon={<ModeGlyphIcon className="icon-xs" kind="project" />}
          tooltipContent={renderMessage(
            "composer.localCwdDropdown.chooseProject",
            "Choose a project",
          )}
          value={activeProjectIdOverride ?? "Project"}
          valueClassName="max-w-40"
        />
      ))
    : null;
  const runLocationControl =
    showRuntimeControls && !hideRunLocationDropdown ? (
      isCloudFollowUp ? (
        <CloudFollowUpModeDropdown
          canRunCloudFollowUp={canRunCloudFollowUp}
          composerMode={composerMode}
          hasAppliedCodeLocally={hasAppliedCodeLocally}
          isCloudFollowUpRootLoading={isCloudFollowUpRootLoading}
          setComposerMode={setComposerMode}
        />
      ) : (
        (renderRunLocationControl?.({
          allowWorktree: !hasActiveFollowUp && !isResponseInProgress,
          composerMode,
          conversationId: localConversationId,
          disabled: isResponseInProgress,
          executionTargetOverride: localRemoteExecutionTarget,
          footerRemoteState,
          hideModeDropdown: hideRunLocationDropdown,
          setComposerMode,
          threadHandoff,
          worktreeLabelOnly: false,
        }) ?? (
          <RunLocationSummaryControl
            composerMode={composerMode}
            disabled={isResponseInProgress}
            footerRemoteState={footerRemoteState}
            worktreeLabelOnly={false}
          />
        ))
      )
    ) : null;
  const cloudRuntimeControl =
    showRuntimeControls && !isCloudFollowUp && composerMode === "cloud"
      ? (renderCloudRuntimeControl?.({
          composerMode,
          conversationId: localConversationId,
          disabled: isResponseInProgress,
          setComposerMode,
        }) ?? (
          <FooterPillButton
            disabled={isResponseInProgress}
            icon={<ModeGlyphIcon className="icon-xs" kind="cloud" />}
            tooltipContent={renderMessage(
              "composer.environmentSelector.tooltip",
              "Select a cloud environment",
            )}
            value={
              cloudRuntimeLabel ??
              renderMessage("composer.mode.runInCloud", "Cloud")
            }
            valueClassName="max-w-40"
          />
        ))
      : null;
  const worktreeEnvironmentControl =
    showRuntimeControls &&
    !hasActiveFollowUp &&
    composerMode === "worktree" &&
    onSelectWorktreeEnvironmentConfigPath != null &&
    onOpenWorktreeEnvironmentSettings != null
      ? (renderWorktreeEnvironmentDropdown?.({
          codexHome,
          environments: worktreeEnvironments,
          hasError: worktreeEnvironmentError != null,
          hostId: worktreeEnvironmentHostId,
          isLoading: isWorktreeEnvironmentLoading,
          onOpenSettings: onOpenWorktreeEnvironmentSettings,
          onSelectConfigPath: onSelectWorktreeEnvironmentConfigPath,
          selectedConfigPath: selectedWorktreeEnvironmentConfigPath,
          workspaceRoot: worktreeEnvironmentWorkspaceRoot,
        }) ?? (
          <WorktreeEnvironmentDropdown
            environments={worktreeEnvironments}
            hasError={worktreeEnvironmentError != null}
            isLoading={isWorktreeEnvironmentLoading}
            onOpenSettings={onOpenWorktreeEnvironmentSettings}
            onSelectConfigPath={onSelectWorktreeEnvironmentConfigPath}
            selectedConfigPath={selectedWorktreeEnvironmentConfigPath}
          />
        ))
      : null;
  const startingStateControl =
    showRuntimeControls &&
    isCloudFollowUp &&
    hasAppliedCodeLocally &&
    setFollowUpCloudStartingState != null ? (
      <RemoteStartingPointDropdown
        setStartingState={setFollowUpCloudStartingState}
        startingState={followUpCloudStartingState}
      />
    ) : null;
  const runtimeControls = getRuntimeControls({
    branchStartingState,
    cloudRuntimeControl,
    inlineBranchSwitcher,
    isCloudFollowUp,
    runLocationControl,
    startingStateControl,
    variant,
    worktreeEnvironmentControl,
  });
  const orderedLeftControls =
    variant === "home" ? (
      <>
        {projectSelector}
        {runtimeControls}
      </>
    ) : (
      <>
        {runtimeControls}
        {projectSelector}
      </>
    );
  const remoteStatus =
    showRuntimeControls &&
    composerMode === "local" &&
    activeRemoteState.hostId != null &&
    activeRemoteState.hostId !== "local"
      ? (renderRemoteStatus?.(activeRemoteState) ?? (
          <RemoteStatusChip state={activeRemoteState} />
        ))
      : null;
  const gitCreateButton =
    showRuntimeControls &&
    showGitCreateButton &&
    onCreateGitRepository != null ? (
      <CreateGitRepositoryButton
        disabled={isCreatingGitRepository || isGitStatusLoading}
        isCreating={isCreatingGitRepository}
        onCreateGitRepository={onCreateGitRepository}
      />
    ) : null;
  const upsellButton =
    showRuntimeControls && !showGitCreateButton ? freeUpsellButton : null;
  const customCliWarning =
    showRuntimeControls && hasActiveFollowUp ? (
      <CustomCliWarning hasCustomCliExecutable={hasCustomCliExecutable} />
    ) : null;
  const rightCluster =
    remoteStatus != null ||
    gitCreateButton != null ||
    upsellButton != null ||
    customCliWarning != null ? (
      <div className="flex min-w-0 shrink-0 items-center gap-3">
        {remoteStatus}
        {gitCreateButton}
        {upsellButton}
        {customCliWarning}
      </div>
    ) : null;

  if (variant === "home") {
    return (
      <div
        className={clsx(
          "flex flex-nowrap items-center gap-2 overflow-hidden",
          "-mx-px -mt-4.5 bg-token-side-bar-background rounded-b-2xl px-2 pt-[25px] pb-2 dark:bg-token-bg-fog",
          "electron:mx-4 electron:rounded-b-xl",
          className,
        )}
      >
        <div className="horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden pr-4 [--edge-fade-distance:1rem]">
          {orderedLeftControls}
        </div>
        {rightCluster}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center gap-2 overflow-visible pr-2 pl-2",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-nowrap items-center gap-1">
        {orderedLeftControls}
      </div>
      {rightCluster}
    </div>
  );
}

type RuntimeControlsProps = {
  branchStartingState: ReactNode;
  cloudRuntimeControl: ReactNode;
  inlineBranchSwitcher: ReactNode;
  isCloudFollowUp: boolean;
  runLocationControl: ReactNode;
  startingStateControl: ReactNode;
  variant: ComposerFooterVariant;
  worktreeEnvironmentControl: ReactNode;
};

function getRuntimeControls({
  branchStartingState,
  cloudRuntimeControl,
  inlineBranchSwitcher,
  isCloudFollowUp,
  runLocationControl,
  startingStateControl,
  variant,
  worktreeEnvironmentControl,
}: RuntimeControlsProps) {
  if (isCloudFollowUp) {
    return (
      <>
        {variant === "home" ? inlineBranchSwitcher : null}
        {runLocationControl}
        {variant === "default" ? inlineBranchSwitcher : null}
        {startingStateControl}
      </>
    );
  }

  return (
    <>
      {runLocationControl}
      {inlineBranchSwitcher}
      {cloudRuntimeControl}
      {worktreeEnvironmentControl}
      {branchStartingState}
    </>
  );
}

function buildRemoteSelectionState(
  hostId: string | null | undefined,
  remoteConfig?: ComposerRemoteConfig,
): RemoteSelectionState {
  return {
    hostId,
    connectionDisplayName:
      remoteConfig?.getConnectionDisplayNameForHostId?.(hostId) ?? null,
    projectPath: remoteConfig?.getProjectPathForHostId?.(hostId) ?? null,
  };
}

function getComposerModeLabel({
  composerMode,
  isRemoteHost,
  worktreeLabelOnly,
}: {
  composerMode: ComposerMode;
  isRemoteHost: boolean;
  worktreeLabelOnly: boolean;
}): ReactNode {
  if (composerMode === "cloud") {
    return renderMessage("composer.mode.runInCloud", "Cloud");
  }
  if (composerMode === "worktree") {
    return renderMessage(
      isRemoteHost ? "composer.mode.remoteWorktree" : "composer.mode.worktree",
      worktreeLabelOnly ? "Worktree" : "New worktree",
    );
  }
  if (isRemoteHost) {
    return renderMessage("composer.mode.remote", "Remote");
  }
  return renderMessage("composer.mode.local.short", "Local");
}

function getComposerModeIcon(
  composerMode: ComposerMode,
  isRemoteHost: boolean,
): ReactNode {
  if (composerMode === "cloud") {
    return <ModeGlyphIcon className="icon-xs" kind="cloud" />;
  }
  if (composerMode === "worktree") {
    return <ModeGlyphIcon className="icon-xs" kind="worktree" />;
  }
  if (isRemoteHost) {
    return <ModeGlyphIcon className="icon-xs" kind="remote" />;
  }
  return <ModeGlyphIcon className="icon-xs" kind="local" />;
}

type ModeGlyphIconProps = {
  className?: string;
  kind: IconKind;
};

const modeGlyphLabels: Record<IconKind, string> = {
  cloud: "C",
  local: "L",
  project: "P",
  remote: "",
  warning: "!",
  worktree: "W",
};

function ModeGlyphIcon({ className, kind }: ModeGlyphIconProps) {
  return (
    <span
      aria-hidden="true"
      data-icon-kind={kind}
      className={clsx(
        "inline-flex items-center justify-center rounded-full border border-current text-[9px] leading-none font-medium",
        kind === "remote" && "bg-current",
        className,
      )}
    >
      {modeGlyphLabels[kind]}
    </span>
  );
}

export default ComposerExternalFooter;
