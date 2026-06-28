// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Footer wiring for local conversation thread frames.
import type { ComponentType, ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  initOpenSideChatTabChunk,
  openSideChatTab,
} from "../../threads/thread-overflow-menu";
import {
  initLocalConversationComposerFooterChunk,
  LocalConversationComposerFooter,
} from "./local-conversation-composer-footer";

type ThreadRouteScope = unknown;

type WorktreeRestoreBannerProps = {
  conversationId: string;
  cwd: string | null | undefined;
};

type SideConversationRequest = {
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

export type LocalConversationThreadFooterProps = {
  SideChatThreadComponent: ComponentType<Record<string, unknown>>;
  WorktreeRestoreBanner: ComponentType<WorktreeRestoreBannerProps>;
  composerSurfaceClassName?: string;
  conversationId: string;
  footerContent?: ReactNode;
  hasConversation: boolean;
  hostId: string;
  isBackgroundSubagentsEnabled: boolean;
  isResuming: boolean;
  isScrollToTopEnabled: boolean;
  lockedCollaborationMode?: unknown;
  onClearPendingLatestTurnSubmitPlacement: () => void;
  onPrepareLatestTurnSubmitPlacement: (placement: LocalSubmitPlacement) => void;
  onScrollToBottom: () => void;
  scope: ThreadRouteScope;
  showComposer: boolean;
  showExternalFooter: boolean;
  showScrollToBottomButton: boolean;
  subagentResponseInProgress: boolean;
};

export function LocalConversationThreadFooter({
  SideChatThreadComponent,
  WorktreeRestoreBanner,
  composerSurfaceClassName,
  conversationId,
  footerContent,
  hasConversation,
  hostId,
  isBackgroundSubagentsEnabled,
  isResuming,
  isScrollToTopEnabled,
  lockedCollaborationMode,
  onClearPendingLatestTurnSubmitPlacement,
  onPrepareLatestTurnSubmitPlacement,
  onScrollToBottom,
  scope,
  showComposer,
  showExternalFooter,
  showScrollToBottomButton,
  subagentResponseInProgress,
}: LocalConversationThreadFooterProps) {
  if (!hasConversation) return null;
  if (!showComposer) {
    return footerContent == null ? null : (
      <div className="px-5 pb-2">{footerContent}</div>
    );
  }

  return (
    <LocalConversationComposerFooter
      conversationId={conversationId}
      hostId={hostId}
      isResuming={isResuming}
      showExternalFooter={showExternalFooter}
      composerSurfaceClassName={composerSurfaceClassName}
      showScrollToBottomButton={showScrollToBottomButton}
      onScrollToBottom={onScrollToBottom}
      onPrepareLatestTurnSubmitPlacement={onPrepareLatestTurnSubmitPlacement}
      onClearPendingLatestTurnSubmitPlacement={
        onClearPendingLatestTurnSubmitPlacement
      }
      subagentResponseInProgress={subagentResponseInProgress}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      lockedCollaborationMode={lockedCollaborationMode}
      isScrollToTopEnabled={isScrollToTopEnabled}
      WorktreeRestoreBanner={WorktreeRestoreBanner}
      onCreateSideConversation={(request: SideConversationRequest) =>
        openSideChatTab(scope, SideChatThreadComponent, request)
      }
    />
  );
}

export const initLocalConversationThreadFooterChunk = once(() => {
  initLocalConversationComposerFooterChunk();
  initOpenSideChatTabChunk();
});
