// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Summary panel section assembly for outputs, background tasks, browser tabs, sources, plan, automation, and git environment state.
import type { ComponentType } from "react";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import { isEqualT as createIsEqual } from "../../vendor/lodash-is-equal";
import {
  $N as initVscodeApiBridge,
  AB as initScopeRuntime,
  Am as conversationWorkspaceRootSignal,
  Bn as initGlobalCommandHandlers,
  DL as normalizeWorkspacePath,
  Es as browserSidebarEnabledSignal,
  FB as useScope,
  Ga as initElectronPlatformContent,
  Gj as initStatsigFeatureGateHooks,
  Gu as initGlobalStateQueryRuntime,
  IB as useSignalValue,
  I_ as initRouteScope,
  Ku as useGlobalStateQuery,
  La as initExternalUrlHelpers,
  M_ as localConversationRouteScope,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  R as initSlashIcon,
  Sc as useConversationDetailMode,
  Ts as initBrowserFeatureAvailabilitySignals,
  VE as initHostConfigHelpers,
  Vn as dispatchGlobalCommand,
  Wa as PlatformContentGate,
  XR as GLOBAL_STATE_KEYS,
  a_ as initFileTypeDetectionHelpers,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  bM as initKeyboardShortcutLabel,
  bc as initConversationDetailModeConstants,
  cM as initToastRuntime,
  hs as initLocalImageInliningHelpers,
  iF as initIntlRuntime,
  jm as conversationModeSignal,
  pP as initLoggerRuntime,
  qj as useStatsigGate,
  uM as toastSignal,
  _c as CONVERSATION_DETAIL_STEPS_PROSE,
  eP as useHostQuery,
  tP as useAppServerMutation,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  Il as initWorkspaceRouteStateChunk,
  Ir as setThreadSourceFrameState,
  Ja as initThreadSourceFrameStateChunk,
  Jl as initThreadSourceTabHelpersChunk,
  Kl as conversationTitleSignal,
  Mr as initRightPanelTabsRuntime,
  Qc as openPullRequestReviewTab,
  Rl as hostConfigSignal,
  Rr as getThreadSourceFrameTabId,
  Sl as workspaceRouteStateSignal,
  Wl as initCurrentWorkspaceRootSignalChunk,
  Ya as showRightPanel,
  Yl as rightPanelTabsStore,
  wl as currentWorkspaceRootSignal,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import { $c as openBrowserSummaryTab } from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  Jn as PlanIcon,
  St as openPlanSidePanelTab,
  Xc as initEmptyPageStateChunk,
  Yn as initBackgroundTaskSectionTitleChunk,
  fl as initGlobalStateQueryHelpersChunk,
  gt as initWorkspaceRouteStateSignalsChunk,
  hc as openSideChatTabInRightPanel,
  ht as ProcessManagerIcon,
  ss as initThreadSummarySectionsSupportChunk,
  xt as initThreadSummarySourceSupportChunk,
  xl as initThreadSummaryPanelSignalsSupportChunk,
  yc as initLocalConversationSummaryPanelSupportChunk,
} from "../../boundaries/current-ref/profile-page-producer";
import {
  automationsQuerySignal as automationDataSignal,
  initAutomationsQueryChunk as initAutomationDataSignalChunk,
} from "../../automation/automation-schedule";
import {
  getAttachedHeartbeatAutomationForThread,
  initAttachedHeartbeatAutomationLookupChunk,
} from "../../github/pull-request-checks-summary";
import {
  computerUsePictureInPictureAvailableSignal,
  computerUsePictureInPictureVisibleSignal,
  initBackgroundTerminalSidePanelTabChunk,
  initPendingBackgroundProcessRowsChunk,
  initThreadSummaryPanelSignalsChunk,
  isPendingProcessRowExpired,
  mergeProcessRows,
  openBackgroundTerminalSidePanelTab,
  pendingBackgroundProcessRowsSignal,
  restoreRegisteredProcessRows,
  selectRunningProcessRows,
} from "../../app-shell/thread-background-processes";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  isDoneBackgroundAgent,
  shouldHideInlineBackgroundAgent,
  shouldShowInlineBackgroundAgent,
} from "./background-summary";
import { createBackgroundTerminalProcessSnapshotSelector } from "./background-terminal-process-snapshot";
import { createRestoredBackgroundTerminalRows } from "./background-terminal-restored-rows";
import { countBackgroundTerminalSummaryRows } from "./background-terminal-summary-count";
import type { BrowserUseSummary } from "./browser-use-summary";
import { BackgroundTaskSectionTitle } from "./background-task-section-title";
import {
  BackgroundTerminalSummaryRows,
  ThreadSummaryBackgroundActivityRows,
} from "./thread-summary-background-tasks";
import {
  initThreadSummaryAutomationRowChunk,
  ThreadSummaryAutomationRow,
} from "./thread-summary-automation-row";
import {
  initThreadSummaryBrowserSectionsChunk,
  ThreadSummaryBrowserTabsSection,
  ThreadSummaryComputerUsePipSection,
} from "./thread-summary-browser-sections";
import {
  initThreadSummaryEnvironmentSectionChunk,
  ThreadSummaryEnvironmentSection,
} from "./thread-summary-environment-section";
import {
  initThreadSummaryOutputOpenHandlersChunk,
  useThreadSummaryOutputOpenHandlers,
} from "./thread-summary-output-open-handlers";
import {
  initThreadSummarySideChatRowsChunk,
  ThreadSummarySideChatRows,
} from "./thread-summary-side-chat-rows";
import {
  initThreadSummarySourceRowsChunk,
  ThreadSummarySourceRows,
} from "./thread-summary-source-rows";
import {
  initSummaryPanelArtifactsListChunk,
  SummaryPanelArtifactsList,
} from "./summary-panel-artifacts-list";
import {
  initThreadSummaryPanelChromePrimitives,
  ThreadSummaryPanelSectionCount,
} from "./thread-summary-panel-chrome-primitives";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./thread-summary-panel-section";

type DeepEqualModule = {
  default: (left: unknown, right: unknown) => boolean;
};

type SummaryPanelComponentProps = Record<string, unknown>;

export type ThreadSummaryPanelSectionsProps = {
  artifacts: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly BrowserUseSummary[];
  restoredBackgroundProcesses: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  plan: unknown;
  isVisible: boolean;
  registerEnvironmentActionCommands: boolean;
  BranchChangesSummaryRowComponent: ComponentType<SummaryPanelComponentProps>;
  EnvironmentActionControlsComponent: ComponentType<SummaryPanelComponentProps>;
  GitSummaryComponent: ComponentType<SummaryPanelComponentProps>;
  onForceShow: () => void;
  onOpenBackgroundAgent?: (backgroundAgent: unknown) => void;
};

let areValuesEqual: DeepEqualModule["default"];

export function ThreadSummaryPanelSections({
  artifacts,
  backgroundAgents,
  backgroundTerminals,
  browserUseSummaries,
  restoredBackgroundProcesses,
  sideChats,
  toolSources,
  webSources,
  plan,
  isVisible,
  registerEnvironmentActionCommands,
  BranchChangesSummaryRowComponent,
  EnvironmentActionControlsComponent,
  GitSummaryComponent,
  onForceShow,
  onOpenBackgroundAgent,
}: ThreadSummaryPanelSectionsProps) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    isElectronRuntime =
      useConversationDetailMode() === CONVERSATION_DETAIL_STEPS_PROSE,
    hostConfig = useSignalValue(hostConfigSignal),
    conversationId =
      scope.value.routeKind === "local-thread"
        ? scope.value.conversationId
        : null,
    conversationTitle = useScopedValue(conversationTitleSignal, conversationId),
    isBrowserSidebarEnabled = useSignalValue(browserSidebarEnabledSignal),
    isBackgroundProcessTrackingEnabled = useStatsigGate("3264431617"),
    isComputerUsePipAvailable = useSignalValue(
      computerUsePictureInPictureAvailableSignal,
    ),
    isComputerUsePipVisible = useSignalValue(
      computerUsePictureInPictureVisibleSignal,
    ),
    openFileMutation = useAppServerMutation("open-file"),
    workspaceRouteState = useSignalValue(workspaceRouteStateSignal),
    conversationMode = useScopedValue(conversationModeSignal, conversationId),
    { data: automationData } = useSignalValue(automationDataSignal),
    pendingBackgroundProcessRows = useSignalValue(
      pendingBackgroundProcessRowsSignal,
    ),
    hasInlineBackgroundAgent = backgroundAgents.some(
      shouldShowInlineBackgroundAgent,
    );

  let hiddenBackgroundAgents = backgroundAgents.filter(
      shouldHideInlineBackgroundAgent,
    ),
    shouldPollChatProcesses =
      isBackgroundProcessTrackingEnabled && isVisible && conversationId != null,
    chatProcessesQueryOptions = {
      queryConfig: {
        enabled: shouldPollChatProcesses,
        intervalMs: 1e3,
      },
    };
  let { data: chatProcessesData } = useHostQuery(
      "chat-processes",
      chatProcessesQueryOptions,
    ),
    conversationWorkspaceRoot = useScopedValue(
      conversationWorkspaceRootSignal,
      conversationId,
    ),
    currentWorkspaceRoot = useSignalValue(currentWorkspaceRootSignal),
    { data: threadWorkspaceRootHints } = useGlobalStateQuery(
      GLOBAL_STATE_KEYS.THREAD_WORKSPACE_ROOT_HINTS,
    ),
    isProjectlessConversation = conversationMode === "projectless",
    threadWorkspaceRootHint =
      conversationId == null
        ? null
        : (threadWorkspaceRootHints?.[conversationId] ?? null),
    workspaceBrowserRoot = isProjectlessConversation
      ? (conversationWorkspaceRoot ?? threadWorkspaceRootHint)
      : currentWorkspaceRoot,
    isGitWorkspace =
      !isProjectlessConversation && workspaceRouteState.kind === "git",
    resolvedWorkspaceCwd =
      workspaceRouteState.cwd == null
        ? null
        : normalizeWorkspacePath(workspaceRouteState.cwd);
  let activeCwd = resolvedWorkspaceCwd,
    hasTrackedConversationProcesses =
      chatProcessesData?.processes.some(
        (processRecord) => processRecord.conversationId === conversationId,
      ) ?? false;
  let hasBackgroundTaskSources =
    backgroundTerminals.length > 0 ||
    restoredBackgroundProcesses.length > 0 ||
    pendingBackgroundProcessRows.size > 0 ||
    hasTrackedConversationProcesses;
  let chatProcessRecords = chatProcessesData?.processes,
    backgroundProcessSnapshotSelector =
      createBackgroundTerminalProcessSnapshotSelector({
        actionStatesByProcessId: pendingBackgroundProcessRows,
        backgroundTerminals,
        conversationId,
        isEqual: areValuesEqual,
        persistedProcesses: chatProcessRecords,
        restoredProcesses: restoredBackgroundProcesses,
      });
  let shouldPollChildProcesses =
      shouldPollChatProcesses && hasBackgroundTaskSources,
    childProcessesQueryConfig = {
      enabled: shouldPollChildProcesses,
      intervalMs: 1e3,
      structuralSharing: false,
    };
  let childProcessesQueryOptions = {
    queryConfig: childProcessesQueryConfig,
    select: backgroundProcessSnapshotSelector,
  };
  let { data: childProcessesData } = useHostQuery(
      "child-processes",
      childProcessesQueryOptions,
    ),
    processSnapshotTimeMs = childProcessesData?.processSnapshotTimeMs ?? 0,
    matchingAutomation,
    backgroundTaskCount,
    backgroundTerminalRows;

  {
    backgroundTerminalRows = isBackgroundProcessTrackingEnabled
      ? createRestoredBackgroundTerminalRows({
          attachChildProcessMetrics: selectRunningProcessRows,
          childProcesses: childProcessesData?.processes,
          conversationCwd: workspaceRouteState.cwd,
          conversationId,
          createConversationProcessRecords: restoreRegisteredProcessRows,
          enabled: isVisible,
          hostId: hostConfig.id,
          mergeRestoredProcesses: mergeProcessRows,
          processSnapshotTimeMs,
          records: chatProcessesData?.processes,
          restoredProcesses: restoredBackgroundProcesses,
        })
      : [];
    matchingAutomation =
      automationData == null
        ? null
        : getAttachedHeartbeatAutomationForThread({
            automations: automationData.items,
            conversationId,
          });
    backgroundTaskCount = countBackgroundTerminalSummaryRows({
      actionStatesByProcessId: pendingBackgroundProcessRows,
      backgroundTerminals,
      conversationId,
      isSettledActionState: isPendingProcessRowExpired,
      processSnapshotTimeMs,
      registeredRows: backgroundTerminalRows,
    });
  }

  let showBackgroundTasksSection =
      !isElectronRuntime && backgroundTaskCount > 0,
    viewAllProcessesLabel = intl.formatMessage({
      id: "codex.localConversation.backgroundTasks.viewAllProcessesLabel",
      defaultMessage: "View all processes",
      description:
        "Accessible label for the thread summary panel action that opens the process manager",
    });
  let planSectionTitle = intl.formatMessage({
    id: "codex.localConversation.plan.title",
    defaultMessage: "Plan",
    description: "Title for the plan section in the thread summary panel",
  });
  let { getImagePreviewSrc, onOpenOutput } = useThreadSummaryOutputOpenHandlers(
      {
        browserSidebarEnabled: isBrowserSidebarEnabled,
        cwd: activeCwd,
        hostConfig,
        openFile: openFileMutation.mutate,
        scope,
      },
    ),
    handleOpenSideChat = (sideChat) => {
      openSideChatTabInRightPanel(scope, "right", sideChat.tabId);
    };
  let onOpenSideChat = useStableCallback(handleOpenSideChat),
    handleOpenSource = (source) => {
      setThreadSourceFrameState(scope, source, {
        isFullScreen: true,
      });
      let tabId = getThreadSourceFrameTabId(source);
      scope
        .get(rightPanelTabsStore.tabs$)
        .some((item) => item.tabId === tabId) &&
        (rightPanelTabsStore.activateTab(scope, tabId), showRightPanel(scope));
    };
  let onOpenSource = useStableCallback(handleOpenSource),
    showStopBackgroundTerminalError = () => {
      scope
        .get(toastSignal)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.cleanError"
            defaultMessage="Unable to stop background terminals"
            description="Toast shown when cleaning background terminals from the thread summary panel fails"
          />,
        );
    };
  let onStopBackgroundTerminalError = useStableCallback(
      showStopBackgroundTerminalError,
    ),
    showRestartBackgroundTerminalError = () => {
      scope
        .get(toastSignal)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.restartError"
            defaultMessage="Unable to track restarted background terminal"
            description="Toast shown when tracking a restarted background terminal from the thread summary panel fails"
          />,
        );
    };
  let onRestartBackgroundTerminalError = useStableCallback(
      showRestartBackgroundTerminalError,
    ),
    handleOpenBackgroundTerminal = (backgroundTerminal) => {
      conversationId != null &&
        openBackgroundTerminalSidePanelTab({
          scope,
          backgroundTerminal,
          conversationId,
          fallbackTitle: intl.formatMessage({
            id: "codex.localConversation.backgroundTerminalTab.title",
            defaultMessage: "Background terminal",
            description:
              "Title for a background terminal output tab when the command text is unavailable",
          }),
        });
    };
  let onOpenBackgroundTerminal = useStableCallback(
      handleOpenBackgroundTerminal,
    ),
    automationSection = matchingAutomation != null && (
      <ThreadSummaryPanelSection
        sectionKey="automation"
        title={
          <FormattedMessage
            id="codex.localConversation.heartbeatAutomation.title"
            defaultMessage="Scheduled"
            description="Title for the active scheduled task section in the thread summary side panel"
          />
        }
      >
        <ThreadSummaryAutomationRow automation={matchingAutomation} />
      </ThreadSummaryPanelSection>
    );
  let gitSummarySection = !isElectronRuntime && isGitWorkspace && activeCwd && (
    <ThreadSummaryEnvironmentSection
      BranchChangesSummaryRowComponent={BranchChangesSummaryRowComponent}
      EnvironmentActionControlsComponent={EnvironmentActionControlsComponent}
      GitSummaryComponent={GitSummaryComponent}
      cwd={activeCwd}
      conversationId={conversationId}
      hostConfig={hostConfig}
      isCodexWorktree={workspaceRouteState.isCodexWorktree}
      onOpenReviewTab={() => openPullRequestReviewTab(scope)}
      onForceShow={onForceShow}
      registerEnvironmentActionCommands={registerEnvironmentActionCommands}
      workspaceBrowserRoot={workspaceBrowserRoot}
    />
  );
  let planSection =
    plan != null && conversationId != null ? (
      <ThreadSummaryPanelSection sectionKey="plan" title={planSectionTitle}>
        <SummaryPanelRow
          icon={<PlanIcon className="icon-xs shrink-0" />}
          label={plan.title ?? planSectionTitle}
          labelClassName="min-w-0 truncate"
          title={plan.title ?? planSectionTitle}
          onClick={() => {
            openPlanSidePanelTab(scope, {
              content: plan.content,
              conversationId,
              cwd: activeCwd,
              key: plan.key,
              title: planSectionTitle,
            });
          }}
        />
      </ThreadSummaryPanelSection>
    ) : null;
  let outputsSection = !isGitWorkspace && (
    <ThreadSummaryPanelSection
      sectionKey="artifacts"
      title={
        <FormattedMessage
          id="codex.localConversation.outputs.title"
          defaultMessage="Outputs"
          description="Title for the outputs section in the local conversation summary panel"
        />
      }
      titleSuffix={<ThreadSummaryPanelSectionCount count={artifacts.length} />}
    >
      <SummaryPanelArtifactsList
        onOpen={onOpenOutput}
        artifacts={artifacts}
        conversationTitle={conversationTitle}
        getImagePreviewSrc={getImagePreviewSrc}
      />
    </ThreadSummaryPanelSection>
  );
  let sideChatsSection = sideChats.length > 0 && (
    <ThreadSummaryPanelSection
      sectionKey="side-chats"
      title={
        <FormattedMessage
          id="codex.localConversation.sideChats.title"
          defaultMessage="Side chats"
          description="Title for the side chats section in the thread summary side panel"
        />
      }
      titleSuffix={<ThreadSummaryPanelSectionCount count={sideChats.length} />}
    >
      <ThreadSummarySideChatRows
        sideChats={sideChats}
        onOpen={onOpenSideChat}
      />
    </ThreadSummaryPanelSection>
  );
  let backgroundAgentsSection = backgroundAgents.length > 0 && (
    <ThreadSummaryPanelSection
      autoCollapse={
        !hasInlineBackgroundAgent &&
        backgroundAgents.every(isDoneBackgroundAgent)
      }
      sectionKey="background-subagents"
      title={<BackgroundTaskSectionTitle type="subagents" />}
      titleSuffix={
        hasInlineBackgroundAgent ? null : (
          <ThreadSummaryPanelSectionCount
            count={hiddenBackgroundAgents.length}
          />
        )
      }
    >
      <ThreadSummaryBackgroundActivityRows
        backgroundAgents={backgroundAgents}
        backgroundTerminals={[]}
        conversationId={conversationId}
        onOpenBackgroundAgent={onOpenBackgroundAgent}
        onOpenTerminal={onOpenBackgroundTerminal}
        onStopError={onStopBackgroundTerminalError}
      />
    </ThreadSummaryPanelSection>
  );
  let backgroundTasksSection = showBackgroundTasksSection && (
    <ThreadSummaryPanelSection
      after={
        isBackgroundProcessTrackingEnabled ? (
          <button
            type="button"
            aria-label={viewAllProcessesLabel}
            className="ms-auto inline-flex size-6 cursor-interaction items-center justify-center rounded-sm text-token-text-tertiary hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            title={viewAllProcessesLabel}
            onClick={openThreadSummaryProcessManager}
          >
            <ProcessManagerIcon className="icon-xs" />
          </button>
        ) : null
      }
      sectionKey="background-tasks"
      title={<BackgroundTaskSectionTitle type="tasks" />}
      titleSuffix={
        <ThreadSummaryPanelSectionCount count={backgroundTaskCount} />
      }
    >
      <PlatformContentGate electron={true}>
        <BackgroundTerminalSummaryRows
          backgroundTerminals={backgroundTerminals}
          childProcesses={childProcessesData?.processes}
          conversationId={conversationId}
          hostId={hostConfig.id}
          isVisible={isVisible}
          processSnapshotTimeMs={processSnapshotTimeMs}
          registeredRows={backgroundTerminalRows}
          onOpen={onOpenBackgroundTerminal}
          onRestartError={onRestartBackgroundTerminalError}
          onStopError={onStopBackgroundTerminalError}
        />
      </PlatformContentGate>
      {backgroundTerminals.length > 0 && (
        <PlatformContentGate extension={true}>
          <ThreadSummaryBackgroundActivityRows
            backgroundAgents={[]}
            backgroundTerminals={backgroundTerminals}
            conversationId={conversationId}
            onOpenBackgroundAgent={onOpenBackgroundAgent}
            onOpenTerminal={onOpenBackgroundTerminal}
            onStopError={onStopBackgroundTerminalError}
          />
        </PlatformContentGate>
      )}
    </ThreadSummaryPanelSection>
  );
  let computerUsePipSection = (
    <ThreadSummaryComputerUsePipSection
      isAvailable={isComputerUsePipAvailable}
      isVisible={isComputerUsePipVisible}
      onToggle={() => {
        scope.set(
          computerUsePictureInPictureVisibleSignal,
          !isComputerUsePipVisible,
        );
      }}
    />
  );
  let browserTabsSection = (
    <ThreadSummaryBrowserTabsSection
      browserUseSummaries={browserUseSummaries}
      onOpenBrowserTab={(browserTabId) => {
        openBrowserSummaryTab(scope, true, {
          browserTabId,
        });
      }}
    />
  );
  let sourcesTitle = (
    <FormattedMessage
      id="codex.localConversation.sources.title"
      defaultMessage="Sources"
      description="Title for the thread summary side panel sources section"
    />
  );
  let sourceCount = toolSources.length + webSources.length,
    sourceCountSuffix = <ThreadSummaryPanelSectionCount count={sourceCount} />;
  let sourcesContent = (
    <ThreadSummarySourceRows
      onOpen={onOpenSource}
      toolSources={toolSources}
      webSources={webSources}
    />
  );
  let sourcesSection = (
    <ThreadSummaryPanelSection
      sectionKey="tool-sources"
      title={sourcesTitle}
      titleSuffix={sourceCountSuffix}
    >
      {sourcesContent}
    </ThreadSummaryPanelSection>
  );

  return (
    <>
      {automationSection}
      {gitSummarySection}
      {planSection}
      {outputsSection}
      {sideChatsSection}
      {backgroundAgentsSection}
      {backgroundTasksSection}
      {computerUsePipSection}
      {browserTabsSection}
      {sourcesSection}
    </>
  );
}

function openThreadSummaryProcessManager() {
  dispatchGlobalCommand("openProcessManager", "thread_summary_process_manager");
}

const initDeepEqualModule = once(() => {
  areValuesEqual = createIsEqual() as DeepEqualModule["default"];
});

const initThreadSummaryPanelSectionsChunk = once(() => {
  initDeepEqualModule();
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initAutomationDataSignalChunk();
  initAttachedHeartbeatAutomationLookupChunk();
  initBrowserFeatureAvailabilitySignals();
  initGlobalCommandHandlers();
  initThreadSourceTabHelpersChunk();
  initExternalUrlHelpers();
  initToastRuntime();
  initElectronPlatformContent();
  initFileTypeDetectionHelpers();
  initGlobalStateQueryRuntime();
  initWorkspaceRouteStateSignalsChunk();
  initGlobalStateQueryHelpersChunk();
  initSlashIcon();
  initRightPanelTabsRuntime();
  initThreadSummarySourceSupportChunk();
  initCurrentWorkspaceRootSignalChunk();
  initLocalImageInliningHelpers();
  initPendingBackgroundProcessRowsChunk();
  initThreadSummaryPanelSignalsSupportChunk();
  initThreadSummaryPanelSignalsChunk();
  initRouteScope();
  initWorkspaceRouteStateChunk();
  initConversationDetailModeConstants();
  initStatsigFeatureGateHooks();
  initLocalConversationSummaryPanelSupportChunk();
  initThreadSourceFrameStateChunk();
  initEmptyPageStateChunk();
  initSummaryPanelArtifactsListChunk();
  ThreadSummaryBackgroundActivityRows.initChunk();
  BackgroundTerminalSummaryRows.initChunk();
  initThreadSummaryEnvironmentSectionChunk();
  initThreadSummaryAutomationRowChunk();
  initThreadSummarySideChatRowsChunk();
  initThreadSummarySourceRowsChunk();
  initThreadSummaryBrowserSectionsChunk();
  initThreadSummaryOutputOpenHandlersChunk();
  initBackgroundTerminalSidePanelTabChunk();
  initSummaryPanelRowChunk();
  initThreadSummaryPanelSectionChunk();
  initThreadSummaryPanelChromePrimitives();
  initKeyboardShortcutLabel();
  initVscodeApiBridge();
  initHostConfigHelpers();
  initLoggerRuntime();
  initBackgroundTaskSectionTitleChunk();
});

ThreadSummaryPanelSections.initChunk = initThreadSummaryPanelSectionsChunk;
