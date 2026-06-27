// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Frame-level app-shell, composer footer, scroll layout, and background-agent wiring for local conversation threads.
import React, { type ComponentType, type ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  AB as initScopeRuntime,
  FB as useScope,
  Gj as initStatsigFeatureGateHooks,
  IB as useSignalValue,
  M_ as localConversationRouteScope,
  Op as initConversationStateSelectors,
  PB as useScopedValue,
  qj as useStatsigGate,
  vm as subagentParentThreadIdSignal,
  xM as useStableCallback,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { jr as liveMcpAppFrameSignal } from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  initBackgroundAgentThreadTab,
  openBackgroundAgentThreadTab,
} from "./local-conversation-background-agent-thread-tab";
import {
  initMarkConversationReadEffect,
  useMarkConversationReadOnVisibility,
} from "./local-conversation-read-state";
import {
  LocalConversationThreadBodyLayout,
  initLocalConversationThreadBodyLayoutChunk,
} from "./local-conversation-thread-body-layout";
import {
  LocalConversationThreadFooter,
  initLocalConversationThreadFooterChunk,
} from "./local-conversation-thread-footer";
import {
  LocalConversationThreadLayoutShell,
  initLocalConversationThreadLayoutShellChunk,
} from "./local-conversation-thread-layout-shell";
import {
  MAIN_THREAD_PIP_HOST_ID,
  RefreshSummaryPanelObstaclesEffect,
} from "./pip-host-layout-observer";
import {
  initLocalConversationThreadScrollBehaviorChunk,
  useLocalConversationThreadScrollBehavior,
} from "./local-conversation-thread-scroll-behavior";

type ThreadRouteScope = unknown;

type BackgroundAgent = {
  showInlineActivity?: boolean;
};

type BackgroundAgentOpenHandler = (backgroundAgent: BackgroundAgent) => void;

type WorktreeRestoreBannerProps = {
  conversationId: string;
  cwd: string | null | undefined;
};

type LatestTurnSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx: number | null;
};

export type LocalConversationThreadContentComponentProps = {
  consumePendingLatestTurnSubmitPlacement: () => unknown;
  conversationId: string;
  initialScrollOffset: number | null;
  initialVirtualizedTurnListRestoreState: unknown;
  isBackgroundSubagentsEnabled: boolean;
  isReadOnly: boolean;
  isResuming: boolean;
  isScrollToTopEnabled: boolean;
  onResponseSpacerStateChange: (responseSpacerState: unknown) => void;
  onVisibleThreadContentReady?: (turnCount: number) => void;
  onVirtualizedTurnListRestoreStateChange: (restoreState: unknown) => void;
  showInProgressFixedContent: boolean;
};

export type LocalConversationThreadFrameProps = {
  MainThreadComponent: ComponentType<Record<string, unknown>>;
  SideChatThreadComponent: ComponentType<Record<string, unknown>>;
  ThreadContentComponent: ComponentType<LocalConversationThreadContentComponentProps>;
  WorktreeRestoreBannerComponent: ComponentType<WorktreeRestoreBannerProps>;
  composerSurfaceClassName?: string;
  contentX?: unknown;
  conversationId: string;
  floatingContent?: ReactNode;
  footerContent?: ReactNode;
  hasConversation: boolean;
  header?: ReactNode;
  hideThreadContent?: boolean;
  hostId: string | null | undefined;
  isBackgroundSubagentsEnabled: boolean;
  isReadOnly?: boolean;
  isResuming: boolean;
  lockedCollaborationMode?: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
  onVisibleThreadContentReady?: (turnCount: number) => void;
  showComposer?: boolean;
  showExternalFooter: boolean;
  subagentResponseInProgressSignal: unknown;
  threadScrollStateSignal: unknown;
};

export function openBackgroundAgentFromThread(
  scope: ThreadRouteScope,
  hostId: string | null | undefined,
  backgroundAgent: BackgroundAgent,
  onOpenBackgroundAgent: BackgroundAgentOpenHandler | undefined,
  MainThreadComponent: ComponentType<Record<string, unknown>>,
) {
  if (onOpenBackgroundAgent != null) {
    onOpenBackgroundAgent(backgroundAgent);
    return;
  }
  if (backgroundAgent.showInlineActivity !== true) {
    openBackgroundAgentThreadTab(scope, {
      backgroundAgent,
      hostId,
      TabComponent: MainThreadComponent,
    });
  }
}

export function LocalConversationThreadFrame({
  MainThreadComponent,
  SideChatThreadComponent,
  ThreadContentComponent,
  WorktreeRestoreBannerComponent,
  composerSurfaceClassName,
  contentX,
  conversationId,
  floatingContent,
  footerContent,
  hasConversation,
  header,
  hideThreadContent = false,
  hostId,
  isBackgroundSubagentsEnabled,
  isReadOnly = false,
  isResuming,
  lockedCollaborationMode,
  onOpenBackgroundAgent,
  onVisibleThreadContentReady,
  showComposer = true,
  showExternalFooter,
  subagentResponseInProgressSignal,
  threadScrollStateSignal,
}: LocalConversationThreadFrameProps) {
  let scope = useScope(localConversationRouteScope),
    visibleSubagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    isScrollToTopEnabled = useStatsigGate("1579719221"),
    shouldShowSummaryPanelObstacles = useStatsigGate("3563904085"),
    {
      initialScrollOffset,
      initialVirtualizedTurnListRestoreState,
      loadOlderConversationHistory,
      onClearPendingLatestTurnSubmitPlacement,
      onConsumePendingLatestTurnSubmitPlacement,
      onPrepareLatestTurnSubmitPlacement,
      onScrollToBottom,
      onThreadScroll,
      onVirtualizedTurnListRestoreStateChange,
      setResponseSpacerState,
      showScrollToBottomButton,
      threadScrollLayoutApiRef,
    } = useLocalConversationThreadScrollBehavior({
      conversationId,
      hideThreadContent,
      isScrollToTopEnabled,
      scope,
      threadScrollStateSignal,
      visibleSubagentParentThreadId,
    }),
    markConversationReadOnThreadInteraction =
      useMarkConversationReadOnVisibility(conversationId, hasConversation),
    hasLiveMcpAppFrame = useSignalValue(liveMcpAppFrameSignal),
    subagentResponseInProgress =
      useScopedValue<boolean>(
        subagentResponseInProgressSignal,
        conversationId,
      ) ?? false,
    shouldMountSummaryPanelObstacles =
      shouldShowSummaryPanelObstacles && hasConversation && !hideThreadContent,
    handleOpenBackgroundAgent = (backgroundAgent: BackgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
        MainThreadComponent,
      );
    };

  let onOpenBackgroundAgentFromSummary = useStableCallback(
      handleOpenBackgroundAgent,
    ),
    summaryPanelObstaclesEffect = shouldMountSummaryPanelObstacles ? (
      <RefreshSummaryPanelObstaclesEffect />
    ) : null,
    remoteHostedPipAnchorHostId = shouldMountSummaryPanelObstacles
      ? MAIN_THREAD_PIP_HOST_ID
      : undefined,
    footer = (
      <LocalConversationThreadFooter
        conversationId={conversationId}
        footerContent={footerContent}
        hasConversation={hasConversation}
        hostId={hostId}
        isResuming={isResuming}
        showExternalFooter={showExternalFooter}
        composerSurfaceClassName={composerSurfaceClassName}
        showScrollToBottomButton={showScrollToBottomButton}
        onScrollToBottom={onScrollToBottom}
        onPrepareLatestTurnSubmitPlacement={
          onPrepareLatestTurnSubmitPlacement as (
            placement: LatestTurnSubmitPlacement,
          ) => void
        }
        onClearPendingLatestTurnSubmitPlacement={
          onClearPendingLatestTurnSubmitPlacement
        }
        subagentResponseInProgress={subagentResponseInProgress}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        lockedCollaborationMode={lockedCollaborationMode}
        isScrollToTopEnabled={isScrollToTopEnabled}
        WorktreeRestoreBanner={WorktreeRestoreBannerComponent}
        SideChatThreadComponent={SideChatThreadComponent}
        scope={scope}
        showComposer={showComposer}
      />
    ),
    threadContent = hideThreadContent ? null : (
      <ThreadContentComponent
        conversationId={conversationId}
        isReadOnly={isReadOnly}
        initialScrollOffset={initialScrollOffset}
        initialVirtualizedTurnListRestoreState={
          initialVirtualizedTurnListRestoreState
        }
        isResuming={isResuming}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        consumePendingLatestTurnSubmitPlacement={
          onConsumePendingLatestTurnSubmitPlacement
        }
        onVisibleThreadContentReady={onVisibleThreadContentReady}
        onResponseSpacerStateChange={setResponseSpacerState}
        onVirtualizedTurnListRestoreStateChange={
          onVirtualizedTurnListRestoreStateChange
        }
        showInProgressFixedContent={showComposer}
        isScrollToTopEnabled={isScrollToTopEnabled}
      />
    ),
    threadBody = (
      <LocalConversationThreadBodyLayout
        threadScrollLayoutApiRef={threadScrollLayoutApiRef}
        hasLiveMcpAppFrame={hasLiveMcpAppFrame}
        remoteHostedPipAnchorHostId={remoteHostedPipAnchorHostId}
        contentX={contentX}
        footer={footer}
        initialScrollOffset={initialScrollOffset}
        onThreadScroll={onThreadScroll}
        loadOlderConversationHistory={loadOlderConversationHistory}
        threadContent={threadContent}
        floatingContent={floatingContent}
        onOpenBackgroundAgentFromSummary={onOpenBackgroundAgentFromSummary}
      />
    );

  return (
    <LocalConversationThreadLayoutShell
      header={header}
      markConversationReadOnThreadInteraction={
        markConversationReadOnThreadInteraction
      }
      summaryPanelObstaclesEffect={summaryPanelObstaclesEffect}
      threadBody={threadBody}
    />
  );
}

export const initLocalConversationThreadFrameChunk = once(() => {
  initScopeRuntime();
  initConversationStateSelectors();
  initStatsigFeatureGateHooks();
  initMarkConversationReadEffect();
  initBackgroundAgentThreadTab();
  initLocalConversationThreadLayoutShellChunk();
  initLocalConversationThreadBodyLayoutChunk();
  initLocalConversationThreadScrollBehaviorChunk();
  initLocalConversationThreadFooterChunk();
});
