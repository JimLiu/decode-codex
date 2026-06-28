// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Frame-level app-shell, composer footer, scroll layout, and background-agent wiring for local conversation threads.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  useScope,
  useScopedValue,
  useSignalValue,
} from "../../runtime/app-scope-hooks";
import {
  initConversationStateRuntime,
  subagentParentThreadIdSignal,
} from "../../runtime/conversation-state-runtime";
import {
  initStatsigFeatureGateRuntime,
  useStatsigGate,
} from "../../runtime/feature-gate-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import { liveMcpAppFrameSignal } from "../../app-shell/mcp-app-frame";
import { initBackgroundAgentThreadTab } from "./local-conversation-background-agent-thread-tab";
import { openBackgroundAgentFromThread } from "./local-conversation-background-agent-open";
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
import type {
  BackgroundAgent,
  LatestTurnSubmitPlacement,
  LocalConversationThreadFrameProps,
} from "./local-conversation-thread-frame-types";

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
  initLocalConversationRouteRuntime();
  initConversationStateRuntime();
  initStatsigFeatureGateRuntime();
  initMarkConversationReadEffect();
  initBackgroundAgentThreadTab();
  initLocalConversationThreadLayoutShellChunk();
  initLocalConversationThreadBodyLayoutChunk();
  initLocalConversationThreadScrollBehaviorChunk();
  initLocalConversationThreadFooterChunk();
});
