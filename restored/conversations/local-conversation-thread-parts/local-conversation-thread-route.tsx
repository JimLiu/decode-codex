// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Route-level thread composition for the local conversation screen.
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  FB as useScope,
  IB as useSignalValue,
  M_ as localConversationRouteScope,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  PI as getHotkeyWindowFallbackPath,
  P_ as getLocalThreadConversationIdFromRoute,
  Tp as hasConversationSignal,
  Uf as initHostWorkspaceQueries,
  VE as initHostConfigHelpers,
  Wa as PlatformContentGate,
  ak as initAppServerRequestBridge,
  bF as initPathHelpers,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  gp as conversationCwdSignal,
  iF as initIntlRuntime,
  pP as initLoggerRuntime,
  Sm as threadSourceSignal,
  vm as subagentParentThreadIdSignal,
  yv as Navigate,
  zo as useAppsQuery,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { yd as rightPanelFullWidthSignal } from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  ji as useBackgroundSubagentsEnabled,
  qa as ThreadSummaryPanelErrorBoundary,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import { threadSwitchTimingTracker } from "../../automation/heartbeat-automation-eligibility";
import { launcherHotkeyStateQuery } from "../../features/hotkey-window-state";
import { ConnectedLocalWorktreeRestoreBanner } from "./local-conversation-worktree-restore-banner";
import {
  ChromeExtensionConversationHeader,
  initChromeExtensionConversationHeaderChunk,
} from "./local-conversation-chrome-extension-header";
import { LocalConversationMainThread } from "./local-conversation-thread-entry-components";
import { LocalConversationThreadFrame } from "./local-conversation-thread-frame";
import { openBackgroundAgentFromThread } from "./local-conversation-background-agent-open";
import {
  localConversationVisibleTurnEntriesSignal,
  subagentResponseInProgressSignal,
} from "./local-conversation-turn-selectors";
import { FloatingLocalConversationSummaryPanel } from "./local-conversation-summary-panel";
import { renderLocalConversationMarkdownForTurns } from "./local-conversation-markdown-renderer";
import {
  initLocalConversationNavigationHelpers,
  useMissingLocalConversationRedirect,
} from "./local-conversation-navigation";
import {
  initResumeLocalConversationChunk,
  useResumeLocalConversation,
} from "./local-conversation-resume";
import {
  initSummaryPanelErrorFallbackChunk,
  SummaryPanelErrorFallback,
} from "./local-conversation-summary-panel-error";
import { useLocalConversationSummaryPanelModel } from "./local-conversation-summary-panel-model";
import { usePinnedSummaryPanelDisplay } from "./pinned-summary-panel-layout";
import { shouldUseFullWidthRightPanelForRoute } from "./right-panel-route-state";
import { threadScrollStateSignal } from "./local-conversation-thread-scroll-state-signal";

type RenderableThreadNode = unknown;
export type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;

export interface LocalConversationThreadProps {
  conversationId?: string | null;
  shouldResume?: boolean;
  allowMissingConversation?: boolean;
  showExternalFooter?: boolean;
  composerSurfaceClassName?: string;
  footerContent?: RenderableThreadNode;
  isReadOnly?: boolean;
  showComposer?: boolean;
  lockedCollaborationMode?: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}

export const LocalConversationSideChatThread =
  LocalConversationMainThread.SideChatThread;
export const LocalConversationSummaryThread =
  LocalConversationMainThread.SummaryThread;

export function LocalConversationThread({
  conversationId,
  shouldResume = true,
  allowMissingConversation = false,
  showExternalFooter = true,
  composerSurfaceClassName,
  footerContent,
  isReadOnly = false,
  showComposer = true,
  lockedCollaborationMode,
  onOpenBackgroundAgent,
}: LocalConversationThreadProps) {
  if (!conversationId) return <Navigate to="/" />;
  return (
    <LocalConversationThreadRoute
      conversationId={conversationId}
      shouldResume={shouldResume}
      allowMissingConversation={allowMissingConversation}
      showExternalFooter={showExternalFooter}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      isReadOnly={isReadOnly}
      showComposer={showComposer}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
    />
  );
}

function LocalConversationThreadRoute({
  conversationId,
  shouldResume = true,
  allowMissingConversation = false,
  showExternalFooter = true,
  composerSurfaceClassName,
  footerContent,
  isReadOnly = false,
  showComposer = true,
  lockedCollaborationMode,
  onOpenBackgroundAgent,
}: Required<Pick<LocalConversationThreadProps, "conversationId">> &
  Omit<LocalConversationThreadProps, "conversationId">) {
  let scope = useScope(localConversationRouteScope),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    { data } = useSignalValue(launcherHotkeyStateQuery),
    hasConfiguredLauncherHotkey = data == null || data.configuredHotkey != null,
    launcherFallbackPath = getHotkeyWindowFallbackPath(
      hasConfiguredLauncherHotkey,
    ),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId);
  useScopedValue(conversationCwdSignal, conversationId);
  useScopedValue(threadSourceSignal, conversationId);
  useAppsQuery({ enabled: false, hostId });
  let isRightPanelFullWidth = useSignalValue(rightPanelFullWidthSignal),
    hideThreadContent = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth,
      routeConversationId: getLocalThreadConversationIdFromRoute(scope.value),
    }),
    summaryPanelDisplay = usePinnedSummaryPanelDisplay(conversationId),
    summaryPanelModel = useLocalConversationSummaryPanelModel(
      summaryPanelDisplay.shouldShow,
    ),
    { isResuming } = useResumeLocalConversation(
      shouldResume ? (conversationId ?? null) : null,
    ),
    subagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null;
  useMissingLocalConversationRedirect({
    allowMissingConversation,
    hasConversation,
    isResuming,
    subagentParentThreadId,
    launcherFallbackPath,
    visibleSubagentParentThreadId,
  });
  let onVisibleThreadContentReady = useStableCallback((turnCount) => {
      threadSwitchTimingTracker.complete(scope, "thread_switch_completed", {
        conversationId,
        turnCount,
      });
    }),
    onOpenBackgroundAgentFromSummary = useStableCallback((backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
        LocalConversationMainThread,
      );
    }),
    headerContent = (
      <ChromeExtensionConversationHeader
        conversationId={conversationId}
        renderLocalConversationMarkdownForTurns={
          renderLocalConversationMarkdownForTurns
        }
        visibleTurnEntriesSignal={localConversationVisibleTurnEntriesSignal}
      />
    ),
    contentX = hideThreadContent ? undefined : summaryPanelDisplay.contentShift,
    renderSummaryPanelErrorFallback = (errorBoundary: {
      resetError: () => void;
    }) => (
      <SummaryPanelErrorFallback
        display={summaryPanelDisplay}
        onRetry={() => {
          errorBoundary.resetError();
        }}
      />
    );
  let summaryPanel = (
      <FloatingLocalConversationSummaryPanel
        {...summaryPanelDisplay}
        {...summaryPanelModel}
        onOpenBackgroundAgent={onOpenBackgroundAgentFromSummary}
      />
    ),
    floatingSummaryPanel = (
      <PlatformContentGate browser={true} electron={true}>
        <ThreadSummaryPanelErrorBoundary
          name="ThreadSummaryPanel"
          fallback={renderSummaryPanelErrorFallback}
        >
          {summaryPanel}
        </ThreadSummaryPanelErrorBoundary>
      </PlatformContentGate>
    );
  return (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationMainThread.ThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      key={conversationId}
      conversationId={conversationId}
      contentX={contentX}
      floatingContent={floatingSummaryPanel}
      hasConversation={hasConversation}
      header={headerContent}
      hideThreadContent={hideThreadContent}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={isReadOnly}
      isResuming={isResuming}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      showComposer={showComposer}
      showExternalFooter={showExternalFooter}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );
}

export const initLocalConversationThreadRoute = once(() => {
  initScopeRuntime();
  initPathHelpers();
  initIntlRuntime();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initToastRuntime();
  initResumeLocalConversationChunk();
  initLocalConversationNavigationHelpers();
  initSummaryPanelErrorFallbackChunk();
  initChromeExtensionConversationHeaderChunk();
  initVscodeMessageBridge();
  initAppScope();
  initHostWorkspaceQueries();
  initHostConfigHelpers();
  initLoggerRuntime();
  LocalConversationMainThread.initChunk();
});
