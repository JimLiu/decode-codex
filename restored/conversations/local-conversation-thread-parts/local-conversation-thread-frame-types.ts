// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Type contracts shared by the local conversation thread frame and content.
import type { ComponentType, ReactNode } from "react";
import type { VirtualizedTurnListContracts } from "./local-conversation-virtualized-turn-list-types";

type VirtualizedTurnListRestoreState =
  VirtualizedTurnListContracts["restoreState"];

export type ThreadRouteScope = unknown;

export type BackgroundAgent = {
  showInlineActivity?: boolean;
};

export type BackgroundAgentOpenHandler = (
  backgroundAgent: BackgroundAgent,
) => void;

export type WorktreeRestoreBannerProps = {
  conversationId: string;
  cwd: string | null | undefined;
};

export type LatestTurnSubmitPlacement = {
  distanceFromBottomPx: number;
  scrollHeightPx: number | null;
};

export type LocalConversationThreadContentComponentProps = {
  consumePendingLatestTurnSubmitPlacement: () => LatestTurnSubmitPlacement | null;
  conversationId: string;
  initialScrollOffset: number | null;
  initialVirtualizedTurnListRestoreState: VirtualizedTurnListRestoreState;
  isBackgroundSubagentsEnabled: boolean;
  isReadOnly: boolean;
  isResuming: boolean;
  isScrollToTopEnabled: boolean;
  onResponseSpacerStateChange: (responseSpacerState: unknown) => void;
  onVisibleThreadContentReady?: (turnCount: number) => void;
  onVirtualizedTurnListRestoreStateChange: (
    restoreState: VirtualizedTurnListRestoreState,
  ) => void;
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
