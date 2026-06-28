// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-shell route entry components for main, summary, and side-chat local conversation threads.
import React, { useState, type ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { Button } from "../../ui/button";
import {
  ScopeValueProvider,
  useScope,
  useScopedValue,
} from "../../runtime/app-scope-hooks";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import { initAppServerRequestRuntime } from "../../runtime/app-server-request";
import { appLogger as logger } from "../../runtime/app-logger";
import { composerScope } from "../../composer/composer-scope-runtime";
import {
  conversationCollaborationModeSignal,
  conversationCwdSignal,
  conversationHostIdSignal,
  expiredSideChatSignal,
  hasConversationSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";
import { initHostConfigRuntime } from "../../runtime/host-config-runtime";
import {
  createLocalConversationRouteTarget,
  initLocalConversationRouteRuntime,
  initToastSignalRuntime,
  localConversationRouteScope,
  toastSignal,
} from "../local-conversation-route-runtime";
import { initPathHelpersRuntime } from "../../runtime/path-helpers-runtime";
import { initVscodeMessageRuntime } from "../../runtime/vscode-message-runtime";
import { getLocalThreadConversationIdFromRoute } from "../local-thread-route";
import {
  AutomationDescription,
  EmptyConversationState,
  EmptyPageState,
  getSidePanelTargetStore,
  initLocalConversationThreadEntryRuntime,
  SideChatHeader,
  SummaryPanelBanner,
} from "./local-conversation-thread-entry-runtime";
import {
  initOpenSideChatTabChunk,
  openSideChatTab,
} from "../../threads/thread-overflow-menu";
import { useIsBackgroundSubagentsEnabled as useBackgroundSubagentsEnabled } from "../../utils/use-is-background-subagents-enabled";
import {
  FormattedMessage,
  useIntl,
  initIntlRuntime,
} from "../../vendor/react-intl";
import {
  initResumeLocalConversationChunk,
  useResumeLocalConversation,
} from "./local-conversation-resume";
import {
  ConnectedLocalWorktreeRestoreBanner,
  initWorktreeRestoreBannerChunk,
} from "./local-conversation-worktree-restore-banner";
import {
  initLocalConversationThreadFrameChunk,
  LocalConversationThreadFrame,
} from "./local-conversation-thread-frame";
import {
  initLocalConversationThreadContentChunk,
  LocalConversationThreadContentCore,
  type LocalConversationThreadContentCoreProps,
} from "./local-conversation-thread-content";
import {
  initAutoFollowVirtualizedTurnListChunk,
  LocalConversationAutoFollowVirtualizedTurnList,
} from "./local-conversation-auto-follow-turn-list";
import {
  initLocalConversationTurnRowChunk,
  LocalConversationTurnRow,
} from "./local-conversation-turn-row";
import {
  initThreadScrollStateSignal,
  threadScrollStateSignal,
} from "./local-conversation-thread-scroll-state-signal";
import {
  initVirtualizedTurnListChunk,
  VirtualizedTurnList,
} from "./local-conversation-virtualized-turn-list";
import {
  initLocalConversationTurnSelectors,
  localConversationVisibleTurnEntriesSignal,
  subagentResponseInProgressSignal,
} from "./local-conversation-turn-selectors";
import type { LocalConversationThreadContentComponentProps } from "./local-conversation-thread-frame-types";

type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;
type AutomationDescriptionComponent =
  LocalConversationThreadContentCoreProps["AutomationDescriptionComponent"];
type EmptyConversationStateComponent =
  LocalConversationThreadContentCoreProps["EmptyStateComponent"];

type LocalConversationSideChatThreadProps = {
  conversationId: string;
  lockedCollaborationMode?: unknown;
  target: unknown;
};

type LocalConversationMainThreadProps = {
  conversationId: string;
};

export type LocalConversationSummaryThreadProps = {
  conversationId: string;
  header?: ReactNode;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
};

function LocalConversationSideChatThread({
  conversationId,
  lockedCollaborationMode,
  target,
}: LocalConversationSideChatThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    isExpiredSideChat = useScopedValue(expiredSideChatSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    sourceConversationId = getLocalThreadConversationIdFromRoute(scope.value),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled();

  if (!hasConversation)
    return (
      <ExpiredSideChatState
        conversationId={conversationId}
        sourceConversationId={sourceConversationId}
        target={target}
      />
    );

  let sideChatHeader =
    isExpiredSideChat === true ? null : (
      <SideChatHeader conversationId={conversationId} hostId={hostId} />
    );
  let threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "side",
      sourceConversationId,
    ),
    expiredSideChatBanner =
      isExpiredSideChat === true ? (
        <ExpiredSideChatState
          conversationId={conversationId}
          presentation="banner"
          sourceConversationId={sourceConversationId}
          target={target}
        />
      ) : undefined;
  let isReadOnly = isExpiredSideChat === true,
    showComposer = isExpiredSideChat !== true,
    threadFrame = (
      <LocalConversationThreadFrame
        MainThreadComponent={LocalConversationMainThread}
        SideChatThreadComponent={LocalConversationSideChatThread}
        ThreadContentComponent={LocalConversationThreadContent}
        WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
        conversationId={conversationId}
        hasConversation={hasConversation}
        hostId={hostId}
        isResuming={false}
        showExternalFooter={false}
        footerContent={expiredSideChatBanner}
        isReadOnly={isReadOnly}
        lockedCollaborationMode={lockedCollaborationMode}
        showComposer={showComposer}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        subagentResponseInProgressSignal={subagentResponseInProgressSignal}
        threadScrollStateSignal={threadScrollStateSignal}
      />
    );

  return (
    <>
      {sideChatHeader}
      <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
        {threadFrame}
      </ScopeValueProvider>
    </>
  );
}

type ExpiredSideChatStateProps = {
  conversationId: string;
  presentation?: "banner" | "page";
  sourceConversationId?: string | null;
  target: unknown;
};

function ExpiredSideChatState({
  conversationId,
  presentation = "page",
  sourceConversationId,
  target,
}: ExpiredSideChatStateProps) {
  let scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    sourceCwd = useScopedValue(conversationCwdSignal, sourceConversationId),
    sourceHostId = useScopedValue(
      conversationHostIdSignal,
      sourceConversationId,
    ),
    sourceCollaborationMode = useScopedValue(
      conversationCollaborationModeSignal,
      sourceConversationId,
    ),
    displayTitle = useScopedValue(
      getSidePanelTargetStore(target).tabById$,
      `sidechat:${conversationId}`,
    )?.title,
    [isRecreatingSideChat, setIsRecreatingSideChat] = useState(false),
    recreateSideChat = () => {
      sourceConversationId == null ||
        isRecreatingSideChat ||
        (setIsRecreatingSideChat(true),
        openSideChatTab(scope, LocalConversationSideChatThread, {
          sourceConversationId,
          cwd: sourceCwd,
          hostId: sourceHostId,
          collaborationMode: sourceCollaborationMode,
          displayTitle,
          intl,
          target,
        }).catch((error) => {
          setIsRecreatingSideChat(false);
          logger.error("Error recreating expired side chat", {
            safe: {},
            sensitive: {
              error,
            },
          });
          scope.get(toastSignal).danger(
            intl.formatMessage({
              id: "localConversation.sideChat.recreateError",
              defaultMessage: "Failed to start a new side chat",
              description:
                "Error message shown when recreating an expired side chat fails",
            }),
          );
        }));
    };

  let expiredTitle = (
      <FormattedMessage
        id="localConversation.sideChat.expired.title"
        defaultMessage="Side chat expired"
        description="Title shown when an ephemeral side chat can no longer be continued"
      />
    ),
    expiredDescription = (
      <FormattedMessage
        id="localConversation.sideChat.expired.description"
        defaultMessage="This temporary side chat is no longer available; start a new side chat to continue"
        description="Description shown when an ephemeral side chat must be recreated"
      />
    ),
    actionButton =
      sourceConversationId == null ? null : (
        <Button loading={isRecreatingSideChat} onClick={recreateSideChat}>
          <FormattedMessage
            id="localConversation.sideChat.expired.action"
            defaultMessage="Start new side chat"
            description="Button label to replace an expired side chat"
          />
        </Button>
      );

  if (presentation === "banner") {
    return (
      <SummaryPanelBanner
        type="info"
        layout="vertical"
        title={expiredTitle}
        content={expiredDescription}
        customCtas={actionButton}
      />
    );
  }

  return (
    <EmptyPageState
      className="h-full"
      spacing="compact"
      title={expiredTitle}
      description={expiredDescription}
      actions={actionButton}
    />
  );
}

export function LocalConversationMainThread({
  conversationId,
}: LocalConversationMainThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    { isResuming } = useResumeLocalConversation(conversationId),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      conversationId={conversationId}
      hasConversation={hasConversation}
      hostId={hostId}
      isResuming={isResuming}
      showExternalFooter={false}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );

  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}

function LocalConversationSummaryThread({
  conversationId,
  header,
  onOpenBackgroundAgent,
}: LocalConversationSummaryThreadProps) {
  let scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = useBackgroundSubagentsEnabled(),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      MainThreadComponent={LocalConversationMainThread}
      SideChatThreadComponent={LocalConversationSideChatThread}
      ThreadContentComponent={LocalConversationThreadContent}
      WorktreeRestoreBannerComponent={ConnectedLocalWorktreeRestoreBanner}
      conversationId={conversationId}
      hasConversation={hasConversation}
      header={header}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={true}
      isResuming={false}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      showComposer={false}
      showExternalFooter={false}
      subagentResponseInProgressSignal={subagentResponseInProgressSignal}
      threadScrollStateSignal={threadScrollStateSignal}
    />
  );

  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}

function LocalConversationThreadContent(
  props: LocalConversationThreadContentComponentProps,
) {
  return (
    <LocalConversationThreadContentCore
      {...props}
      AutomationDescriptionComponent={
        AutomationDescription as AutomationDescriptionComponent
      }
      AutoFollowVirtualizedTurnListComponent={
        LocalConversationAutoFollowVirtualizedTurnList
      }
      EmptyStateComponent={
        EmptyConversationState as EmptyConversationStateComponent
      }
      TurnRowComponent={LocalConversationTurnRow}
      VirtualizedTurnListComponent={VirtualizedTurnList}
      localConversationVisibleTurnEntriesSignal={
        localConversationVisibleTurnEntriesSignal
      }
    />
  );
}

const initLocalConversationThreadEntryComponentsChunk = once(() => {
  initLocalConversationRouteRuntime();
  initPathHelpersRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initToastSignalRuntime();
  initResumeLocalConversationChunk();
  initVscodeMessageRuntime();
  initAppScopeSignalRuntime();
  initHostConfigRuntime();
  initOpenSideChatTabChunk();
  initLocalConversationThreadFrameChunk();
  initLocalConversationThreadContentChunk();
  initWorktreeRestoreBannerChunk();
  initThreadScrollStateSignal();
  initAutoFollowVirtualizedTurnListChunk();
  initLocalConversationTurnRowChunk();
  initVirtualizedTurnListChunk();
  initLocalConversationTurnSelectors();
  initLocalConversationThreadEntryRuntime();
});

LocalConversationMainThread.initChunk =
  initLocalConversationThreadEntryComponentsChunk;
LocalConversationMainThread.SideChatThread = LocalConversationSideChatThread;
LocalConversationMainThread.SummaryThread = LocalConversationSummaryThread;
LocalConversationMainThread.ThreadContent = LocalConversationThreadContent;
