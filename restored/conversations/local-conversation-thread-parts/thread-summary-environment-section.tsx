// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Environment, branch, and composer-mode section for the local conversation summary panel.
import type { ComponentType } from "react";
import { useRef } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  AB as initScopeRuntime,
  Al as initComposerScope,
  AN as initSpinnerComponent,
  bF as initPathHelpers,
  cm as conversationHostIdSignal,
  DL as normalizeWorkspacePath,
  FB as useScope,
  Ga as initElectronPlatformContent,
  Gj as initStatsigFeatureGateHooks,
  gp as conversationCwdSignal,
  IB as useSignalValue,
  iF as initIntlRuntime,
  I_ as initRouteScope,
  kN as SpinnerIcon,
  ko as GitBranchIcon,
  M_ as localConversationRouteScope,
  Mu as initHostCodexHomeQuery,
  Nu as getHostCodexHome,
  OL as normalizeWorkspaceBrowserRoot,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  pI as isPathInCodexWorktree,
  qj as useStatsigGate,
  RP as ChevronIcon,
  VE as initHostConfigHelpers,
  Wa as PlatformContentGate,
  wl as composerScope,
  zP as initChevronDownIcon,
  Ao as initGitBranchIcon,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  $i as getConversationRemoteState,
  Dd as initConversationRemoteStateHelpers,
  Ds as openEnvironmentTerminalSession,
  Ec as initEnvironmentTerminalSessionHelpers,
  Es as initWorkspaceRouteStateHelpers,
  Gl as conversationDisplayTitleSignal,
  js as environmentTerminalControllerSignal,
  kc as diffStatsSignal,
  So as initWorkspaceRouteHelpers,
  Wl as initConversationDisplayTitleSignals,
  wo as isCompactWindow,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  $o as setComposerModeForScope,
  Ko as composerModeSignal,
  ns as initComposerModeRuntime,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  El as initSummaryPanelPullRequestControlsChunk,
  Tl as SummaryPanelPullRequestControls,
} from "../../boundaries/current-ref/profile-page-producer";
import {
  a as CloudEnvironmentDropdown,
  i as initThreadHandoffHelpersChunk,
  n as initLocalRemoteDropdownChunk,
  o as initCloudEnvironmentDropdownChunk,
  r as shouldShowThreadHandoffInSummary,
  t as LocalRemoteDropdown,
} from "../../boundaries/current-ref/local-remote-dropdown-producer";
import { DiffStats, initDiffStatsChunk } from "../../git/git-review-primitives";
import {
  GitBranchSwitcher,
  initGitBranchSwitcherChunk,
} from "../../git/git-branch-switcher";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage } from "../../vendor/react-intl";
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
                  <SpinnerIcon className="icon-xs text-token-text-tertiary" />
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
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  initSpinnerComponent();
  initDiffStatsChunk();
  initGitBranchIcon();
  initChevronDownIcon();
  initGitBranchSwitcherChunk();
  initSummaryPanelPullRequestControlsChunk();
  initEnvironmentTerminalSessionHelpers();
  initRouteScope();
  initWorkspaceRouteStateHelpers();
  initSummaryPanelRowChunk();
  initThreadSummaryPanelSectionChunk();
  initConversationStateSelectors();
  initElectronPlatformContent();
  initCloudEnvironmentDropdownChunk();
  initComposerModeRuntime();
  initThreadHandoffHelpersChunk();
  initLocalRemoteDropdownChunk();
  initHostCodexHomeQuery();
  initConversationRemoteStateHelpers();
  initConversationDisplayTitleSignals();
  initComposerScope();
  initHostConfigHelpers();
  initStatsigFeatureGateHooks();
  initWorkspaceRouteHelpers();
});
