// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Environment, branch, and composer-mode section for the local conversation summary panel.
import type { ComponentType } from "react";
import { useRef } from "react";
import { ChevronIcon, initChevronDownIcon } from "../../icons/chevron-icon";
import { GitBranchIcon, initGitBranchIcon } from "../../icons/git-branch-icon";
import { once } from "../../runtime/commonjs-interop";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../../runtime/app-scope-hooks";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";
import {
  initStatsigFeatureGateRuntime,
  useStatsigGate,
} from "../../runtime/feature-gate-runtime";
import {
  getHostCodexHome,
  initHostWorktreeContextRuntime,
  isPathInCodexWorktree,
} from "../../worktree/host-worktree-context";
import { initHostConfigRuntime } from "../../runtime/host-config-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import { normalizeWorkspacePath } from "../output-artifact-runtime";
import {
  initPathHelpersRuntime,
  normalizeWorkspaceBrowserRoot,
} from "../../runtime/path-helpers-runtime";
import {
  PlatformContentGate,
  initPlatformContentRuntime,
} from "../../runtime/platform-content-runtime";
import {
  CloudEnvironmentDropdown,
  conversationDisplayTitleSignal,
  diffStatsSignal,
  environmentTerminalControllerSignal,
  getConversationRemoteState,
  initThreadSummaryEnvironmentRuntime,
  isCompactWindow,
  LocalRemoteDropdown,
  openEnvironmentTerminalSession,
  shouldShowThreadHandoffInSummary,
  SummaryPanelPullRequestControls,
} from "./thread-summary-environment-runtime";
import {
  composerModeState as composerModeSignal,
  initComposerModeRuntime,
  setComposerModeForScope,
} from "../../composer/composer-view-state";
import { DiffStats, initDiffStatsChunk } from "../../git/git-review-primitives";
import {
  GitBranchSwitcher,
  initGitBranchSwitcherChunk,
} from "../../git/git-branch-switcher";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage, initIntlRuntime } from "../../vendor/react-intl";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./thread-summary-panel-section";

type HostConfigForEnvironmentSection = {
  id: string;
  [key: string]: unknown;
};

type EnvironmentActionControlsComponent = ComponentType<{
  conversationId: string | null | undefined;
  hostConfig: HostConfigForEnvironmentSection;
  onMenuOpenChange?: (isOpen: boolean) => void;
  onOpenChange?: (isOpen: boolean) => void;
  onShowTerminal: (terminalId: string) => void;
  registerCommands: boolean;
  workspaceRoot: string;
}>;

type BranchChangesSummaryRowComponent = ComponentType<{
  diffStats: unknown;
  isDiffStatsLoading: boolean;
  onOpenReviewTab: () => void;
}>;

type GitSummaryComponent = ComponentType<{
  conversationId: string | null | undefined;
  cwd: string;
  hostConfig: HostConfigForEnvironmentSection;
  onCreatePullRequest: () => void;
  workspaceBrowserRoot: string | null | undefined;
}>;

export type ThreadSummaryEnvironmentSectionProps = {
  BranchChangesSummaryRowComponent: BranchChangesSummaryRowComponent;
  EnvironmentActionControlsComponent: EnvironmentActionControlsComponent;
  GitSummaryComponent: GitSummaryComponent;
  conversationId: string | null | undefined;
  cwd: string;
  hostConfig: HostConfigForEnvironmentSection;
  isCodexWorktree: boolean;
  onForceShow?: (isOpen: boolean) => void;
  onOpenReviewTab: () => void;
  registerEnvironmentActionCommands: boolean;
  workspaceBrowserRoot: string | null | undefined;
};

type ThreadSummaryEnvironmentModeControlsProps = {
  conversationId: string | null | undefined;
  onOpenChange?: (isOpen: boolean) => void;
};

function ThreadSummaryEnvironmentModeControls({
  conversationId,
  onOpenChange,
}: ThreadSummaryEnvironmentModeControlsProps) {
  let scope = useScope(composerScope),
    composerMode = useSignalValue(composerModeSignal),
    setComposerMode = (nextMode: unknown) => {
      setComposerModeForScope(scope, null, nextMode);
    };

  let conversationRemoteState = getConversationRemoteState(conversationId),
    threadHostId =
      useScopedValue(conversationHostIdSignal, conversationId) ?? "local",
    conversationCwd = useScopedValue(conversationCwdSignal, conversationId),
    remoteCodexHome = getHostCodexHome(conversationRemoteState.hostId),
    isWorktreeConversation = isPathInCodexWorktree(
      conversationCwd,
      remoteCodexHome,
    );

  let isThreadHandoffSummaryEnabled = useStatsigGate("1115442235"),
    conversationTitle = useScopedValue(
      conversationDisplayTitleSignal,
      conversationId,
    ),
    threadHandoff =
      isThreadHandoffSummaryEnabled &&
      shouldShowThreadHandoffInSummary({
        isCompactWindow: isCompactWindow(),
      }) &&
      conversationRemoteState.cwd != null
        ? {
            conversationTitle,
            cwd: normalizeWorkspacePath(conversationRemoteState.cwd),
            isWorktreeConversation,
          }
        : null;

  let footerRemoteState = {
      isAttachedToStartedTask: true,
      existingRemoteThreadState: {
        hostId: threadHostId,
      },
    },
    localRemoteDropdown = (
      <LocalRemoteDropdown
        composerMode={composerMode}
        setComposerMode={setComposerMode}
        conversationId={conversationId}
        footerRemoteState={footerRemoteState}
        side="left"
        disabled={isWorktreeConversation}
        threadHandoff={threadHandoff}
        worktreeLabelOnly={isWorktreeConversation}
        triggerVariant="summary-panel"
        onOpenChange={onOpenChange}
      />
    ),
    cloudEnvironmentDropdown = composerMode === "cloud" && (
      <PlatformContentGate electron={true} browser={true}>
        <CloudEnvironmentDropdown
          composerMode={composerMode}
          conversationId={conversationId}
          disabled={isWorktreeConversation}
          setComposerMode={setComposerMode}
          side="left"
        />
      </PlatformContentGate>
    );

  return (
    <div className="relative flex w-full items-center gap-2">
      {localRemoteDropdown}
      {cloudEnvironmentDropdown}
    </div>
  );
}

export function ThreadSummaryEnvironmentSection({
  BranchChangesSummaryRowComponent,
  EnvironmentActionControlsComponent,
  GitSummaryComponent,
  conversationId,
  cwd,
  hostConfig,
  isCodexWorktree,
  onForceShow,
  onOpenReviewTab,
  registerEnvironmentActionCommands,
  workspaceBrowserRoot,
}: ThreadSummaryEnvironmentSectionProps) {
  let routeScope = useScope(localConversationRouteScope),
    diffStatsQuery = useSignalValue(diffStatsSignal),
    environmentTerminalController = useSignalValue(
      environmentTerminalControllerSignal,
    ),
    diffStats = diffStatsQuery.metrics,
    createBranchActionRef = useRef<(() => void) | null>(null),
    createPullRequestActionRef = useRef<(() => void) | null>(null),
    workspaceGitRoot =
      workspaceBrowserRoot == null
        ? null
        : normalizeWorkspaceBrowserRoot(workspaceBrowserRoot);

  let emptyBranchControlRow = isCodexWorktree ? (
    <SummaryPanelRow
      icon={<GitBranchIcon className="icon-sm shrink-0" />}
      label={
        <FormattedMessage
          id="localConversation.gitActions.createBranch"
          defaultMessage="Create branch"
          description="Label for the create branch action in the git actions dropdown"
        />
      }
      onClick={() => {
        createBranchActionRef.current?.();
      }}
    />
  ) : null;

  let branchControlRow =
    workspaceGitRoot == null ? null : (
      <GitBranchSwitcher
        gitRoot={workspaceGitRoot}
        hostConfig={hostConfig}
        localConversationId={conversationId}
        shouldShow={true}
        side="left"
        align="start"
        renderControl={(controlState) => {
          let { currentBranch, disabled, isPending, switchTooltipText } =
            controlState;
          return currentBranch == null ? (
            emptyBranchControlRow
          ) : (
            <SummaryPanelRow
              disabled={disabled}
              icon={<GitBranchIcon className="icon-sm shrink-0" />}
              label={
                <span className="flex min-w-0 items-center gap-1 text-token-foreground">
                  <span className="min-w-0 truncate">{currentBranch}</span>
                  {disabled ? null : (
                    <ChevronIcon className="icon-2xs shrink-0 text-token-text-tertiary" />
                  )}
                </span>
              }
              labelClassName="flex min-w-0 items-center"
              title={switchTooltipText}
              trailing={
                isPending ? (
                  <Spinner className="icon-xs text-token-text-tertiary" />
                ) : null
              }
              trailingVisible={isPending}
            />
          );
        }}
        onOpenChange={onForceShow}
      />
    );

  let renderSectionActions = ({ isExpanded }: { isExpanded: boolean }) => (
    <span className="ms-auto flex items-center justify-end gap-0.5">
      {diffStats && !isExpanded && (
        <DiffStats
          linesAdded={diffStats.additions}
          linesRemoved={diffStats.deletions}
        />
      )}
      <EnvironmentActionControlsComponent
        conversationId={conversationId}
        hostConfig={hostConfig}
        onMenuOpenChange={onForceShow}
        onOpenChange={onForceShow}
        onShowTerminal={(terminalId) => {
          openEnvironmentTerminalSession(
            routeScope,
            terminalId,
            environmentTerminalController,
          );
        }}
        registerCommands={registerEnvironmentActionCommands}
        workspaceRoot={cwd}
      />
    </span>
  );

  let sectionTitle = (
      <FormattedMessage
        id="codex.localConversation.environmentSummary.title"
        defaultMessage="Environment"
        description="Title for the thread summary side panel environment and branch details section"
      />
    ),
    branchChangesRow = (
      <BranchChangesSummaryRowComponent
        onOpenReviewTab={onOpenReviewTab}
        diffStats={diffStats}
        isDiffStatsLoading={diffStatsQuery.isLoading}
      />
    ),
    environmentModeControls =
      conversationId == null ? null : (
        <ThreadSummaryEnvironmentModeControls
          conversationId={conversationId}
          onOpenChange={onForceShow}
        />
      ),
    branchControlOwnsDetachedSetup =
      isCodexWorktree && workspaceGitRoot != null,
    handleCreateBranchActionReady = (action: () => void) => {
      createBranchActionRef.current = action;
    },
    handleCreatePullRequestActionReady = (action: () => void) => {
      createPullRequestActionRef.current = action;
    },
    pullRequestControls = (
      <SummaryPanelPullRequestControls
        key={cwd}
        codexWorktree={isCodexWorktree}
        conversationId={conversationId}
        cwd={cwd}
        hostId={hostConfig.id}
        hidePullRequestSection={true}
        hideCreatePullRequestAction={true}
        surface="summary-panel"
        branchControlOwnsDetachedSetup={branchControlOwnsDetachedSetup}
        onCreateBranchActionReady={handleCreateBranchActionReady}
        onCreatePullRequestActionReady={handleCreatePullRequestActionReady}
      />
    ),
    handleCreatePullRequest = () => {
      createPullRequestActionRef.current?.();
    },
    gitSummary = (
      <GitSummaryComponent
        conversationId={conversationId}
        cwd={cwd}
        hostConfig={hostConfig}
        workspaceBrowserRoot={workspaceBrowserRoot}
        onCreatePullRequest={handleCreatePullRequest}
      />
    );

  return (
    <ThreadSummaryPanelSection
      sectionKey="environment"
      after={renderSectionActions}
      title={sectionTitle}
    >
      {branchChangesRow}
      {environmentModeControls}
      {branchControlRow}
      {pullRequestControls}
      {gitSummary}
    </ThreadSummaryPanelSection>
  );
}

export const initThreadSummaryEnvironmentSectionChunk = once(() => {
  initAppScopeSignalRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initSpinnerComponent();
  initDiffStatsChunk();
  initGitBranchIcon();
  initChevronDownIcon();
  initGitBranchSwitcherChunk();
  initLocalConversationRouteRuntime();
  initThreadSummaryEnvironmentRuntime();
  initSummaryPanelRowChunk();
  initThreadSummaryPanelSectionChunk();
  initConversationStateRuntime();
  initPlatformContentRuntime();
  initComposerModeRuntime();
  initHostWorktreeContextRuntime();
  initComposerScopeRuntime();
  initHostConfigRuntime();
  initStatsigFeatureGateRuntime();
});
