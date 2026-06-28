// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Composer footer surface for the local conversation thread.
import React, { type ComponentType } from "react";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import { initAppScopeSignalRuntime } from "../../runtime/app-scope-runtime";
import { getRouteConversationId } from "../../runtime/browser-feature-runtime";
import {
  composerScope,
  initComposerScopeRuntime,
} from "../../composer/composer-scope-runtime";
import {
  conversationCwdSignal,
  conversationModeSignal,
  conversationTurnsSignal,
  initConversationStateRuntime,
  localResponseInProgressSignal,
  modelProviderSignal,
  shouldResumeConversationSignal,
} from "../../runtime/conversation-state-runtime";
import {
  hostConnectionStatusSignal,
  initLocalConversationComposerRuntime,
  initThreadComposerFooterRuntime,
  LOCAL_HOST_ID,
  localWorkspaceMaterializationSignal,
  backgroundAgentsSignal,
  threadComposerContext,
  ThreadComposerFooter,
  useLocalConversationComposerRuntime,
} from "../../composer/local-conversation-composer-runtime";
import {
  initConversationRouteSourceRuntime,
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "../local-conversation-route-runtime";
import { getLocalThreadConversationIdFromRoute } from "../local-thread-route";
import { setActiveConversationSourceContext } from "./local-conversation-state";
import {
  FormattedMessage,
  useIntl,
  initIntlRuntime,
} from "../../vendor/react-intl";
import { SpinnerIcon } from "../../ui/spinner";
import { ScrollToBottomButton } from "../../threads/scroll-to-bottom-button";
import { useThreadScrollController } from "../../threads/thread-scroll-layout/scroll-controller-context";

type WorktreeRestoreBannerProps = {
  conversationId: string;
  cwd: string | null | undefined;
};

type CreateSideConversationRequest = {
  collaborationMode: unknown;
  cwd: string | null;
  displayTitle: unknown;
  hostId: string | null;
  intl: unknown;
  sourceConversationId: string;
};

type LocalSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx: number | null;
};

export type LocalConversationComposerFooterProps = {
  WorktreeRestoreBanner: ComponentType<WorktreeRestoreBannerProps>;
  composerSurfaceClassName?: string;
  conversationId: string;
  hostId: string;
  isBackgroundSubagentsEnabled: boolean;
  isResuming: boolean;
  isScrollToTopEnabled: boolean;
  lockedCollaborationMode?: unknown;
  onClearPendingLatestTurnSubmitPlacement: () => void;
  onCreateSideConversation: (
    request: CreateSideConversationRequest,
  ) => Promise<unknown> | unknown;
  onPrepareLatestTurnSubmitPlacement: (placement: LocalSubmitPlacement) => void;
  onScrollToBottom: () => void;
  showExternalFooter: boolean;
  showScrollToBottomButton: boolean;
  subagentResponseInProgress: boolean;
};

function ComposerWorkspaceDirectoryTree({
  WorktreeRestoreBanner,
  conversationId,
}: {
  WorktreeRestoreBanner: ComponentType<WorktreeRestoreBannerProps>;
  conversationId: string;
}) {
  let cwd = useScopedValue(conversationCwdSignal, conversationId);
  return <WorktreeRestoreBanner conversationId={conversationId} cwd={cwd} />;
}

function LocalConversationConnectionStatus({
  status,
}: {
  status: "loading" | "reconnecting";
}) {
  let spinnerIcon = <SpinnerIcon className="icon-xs" />;
  return (
    <div
      aria-live="polite"
      className="flex items-center justify-center gap-2 px-4 py-1 text-sm text-token-text-secondary"
      role="status"
    >
      {spinnerIcon}
      {status === "loading" ? (
        <FormattedMessage
          id="localConversation.loadingThread"
          defaultMessage="Loading thread…"
          description="Status shown above the composer while loading a thread"
        />
      ) : (
        <FormattedMessage
          id="localConversation.reconnectingToCodex"
          defaultMessage="Reconnecting to Codex…"
          description="Status shown above the composer while reconnecting to the Codex app server"
        />
      )}
    </div>
  );
}

export function LocalConversationComposerFooter({
  WorktreeRestoreBanner,
  conversationId,
  hostId,
  isResuming,
  showExternalFooter,
  composerSurfaceClassName,
  showScrollToBottomButton,
  onScrollToBottom,
  onPrepareLatestTurnSubmitPlacement,
  onClearPendingLatestTurnSubmitPlacement,
  isBackgroundSubagentsEnabled,
  lockedCollaborationMode,
  isScrollToTopEnabled,
  subagentResponseInProgress,
  onCreateSideConversation,
}: LocalConversationComposerFooterProps) {
  let scope = useScope(localConversationRouteScope);
  React.useContext(threadComposerContext);
  useLocalConversationComposerRuntime();

  let hostConnectionStatus = useScopedValue(hostConnectionStatusSignal, hostId),
    hasConversationTurns = !!useScopedValue(
      conversationTurnsSignal,
      conversationId,
    )?.length,
    isRemoteHost = hostId !== LOCAL_HOST_ID,
    footerConnectionStatus: "loading" | "reconnecting" | null = null;

  isRemoteHost &&
    (hostConnectionStatus === "connecting" ||
    hostConnectionStatus === "restarting"
      ? (footerConnectionStatus = "reconnecting")
      : isResuming &&
        !hasConversationTurns &&
        (footerConnectionStatus = "loading"));

  let localResponseInProgress =
      useScopedValue(localResponseInProgressSignal, conversationId) ?? false,
    localWorkspaceMaterialization = useScopedValue(
      localWorkspaceMaterializationSignal,
      conversationId,
    );

  useScopedValue(shouldResumeConversationSignal, conversationId);
  useScopedValue(modelProviderSignal, conversationId);

  let hasActiveSubagent = useScopedValue(
      backgroundAgentsSignal,
      isBackgroundSubagentsEnabled ? conversationId : null,
    ).some(({ status }) => status === "active"),
    isResponseInProgress = isBackgroundSubagentsEnabled
      ? subagentResponseInProgress || hasActiveSubagent || false
      : localResponseInProgress || false,
    composerModeAvailability =
      useScopedValue(conversationModeSignal, conversationId) === "projectless"
        ? {
            fallbackMode: "local",
            isAvailabilityLoading: false,
            isCloudAvailable: false,
            isLocalAvailable: true,
            isWorktreeAvailable: false,
          }
        : undefined,
    intl = useIntl(),
    scrollController = useThreadScrollController(),
    handleLocalSubmitStart = useStableCallback(() => {
      let scrollElement = scrollController.getScrollElement();
      onPrepareLatestTurnSubmitPlacement({
        distanceFromBottomPx:
          scrollController.getLastScrollDistanceFromBottomPx(),
        scrollHeightPx: scrollElement?.scrollHeight ?? null,
      });
      scrollController.setFooterResizeViewportPreserveDisabled(true);
    }),
    handleLocalSubmitError = useStableCallback(() => {
      onClearPendingLatestTurnSubmitPlacement();
      scrollController.setFooterResizeViewportPreserveDisabled(false);
    }),
    footer = (
      <>
        <ComposerWorkspaceDirectoryTree
          WorktreeRestoreBanner={WorktreeRestoreBanner}
          conversationId={conversationId}
        />
        {footerConnectionStatus == null ? null : (
          <LocalConversationConnectionStatus status={footerConnectionStatus} />
        )}
        <ThreadComposerFooter
          browserConversationId={
            getLocalThreadConversationIdFromRoute(scope.value) ===
            conversationId
              ? (getRouteConversationId(scope) ?? undefined)
              : undefined
          }
          isResponseInProgress={isResponseInProgress}
          localWorkspaceMaterialization={localWorkspaceMaterialization}
          showFooterBranchWhen="always"
          showExternalFooter={showExternalFooter}
          surfaceClassName={composerSurfaceClassName}
          composerModeAvailability={composerModeAvailability}
          lockedCollaborationMode={lockedCollaborationMode}
          placeholderText={undefined}
          onCreateSideConversation={async ({
            sourceConversationId,
            cwd,
            hostId: sideConversationHostId,
            collaborationMode,
            displayTitle,
          }) =>
            onCreateSideConversation({
              sourceConversationId,
              cwd,
              hostId: sideConversationHostId,
              collaborationMode,
              displayTitle,
              intl,
            })
          }
          onLocalSubmitStart={
            isScrollToTopEnabled ? handleLocalSubmitStart : undefined
          }
          onLocalSubmitError={
            isScrollToTopEnabled ? handleLocalSubmitError : undefined
          }
        />
      </>
    );

  return (
    <div
      className="flex flex-col"
      data-thread-find-composer="true"
      onMouseDownCapture={() => {
        setActiveConversationSourceContext(scope, conversationId);
      }}
      onFocusCapture={() => {
        setActiveConversationSourceContext(scope, conversationId);
      }}
    >
      <div className="relative h-0">
        <ScrollToBottomButton
          className="bottom-[calc(100%+6*var(--spacing))]"
          label={intl.formatMessage({
            id: "localConversation.scrollToBottomButton",
            defaultMessage: "Scroll to bottom",
            description: "Label for button that scrolls to the latest message",
          })}
          onClick={onScrollToBottom}
          show={showScrollToBottomButton}
          showWorkingDots={
            isScrollToTopEnabled &&
            showScrollToBottomButton &&
            isResponseInProgress
          }
        />
      </div>
      <div className="flex flex-col gap-2">{footer}</div>
    </div>
  );
}

export const initLocalConversationComposerFooterChunk = once(() => {
  initAppScopeSignalRuntime();
  initLocalConversationRouteRuntime();
  initComposerScopeRuntime();
  initIntlRuntime();
  initConversationStateRuntime();
  initConversationRouteSourceRuntime();
  initLocalConversationComposerRuntime();
  initThreadComposerFooterRuntime();
});
