// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Shared type contracts for local conversation virtualized turn list modules.
import type React from "react";

type VirtualizedTurnEntry = {
  turnKey: string;
  turn?: {
    finalAssistantStartedAtMs?: number | null;
    firstTurnWorkItemStartedAtMs?: number | null;
    items?: readonly unknown[];
    status?: string;
  } | null;
};

type VirtualizedTurnListRestoreState = {
  renderedWindow?: {
    anchorKey: string;
    count: number;
  } | null;
  turnHeightsByKey?: Record<string, number> | null;
} | null;

type VirtualizedTurnListRowProps = {
  entry: VirtualizedTurnEntry;
  latestTurnFollowContentRef?: (element: HTMLElement | null) => void;
};

type VirtualizedTurnListApi = {
  scrollToKey(
    turnKey: string,
    getTargetElement?: (turnElement: HTMLElement) => HTMLElement | null,
  ): Promise<void>;
};

type LatestTurnHeightChange = {
  bottomViewportOverflowPx: number;
  followContentHeightPx: number | null;
  heightDeltaPx: number | null;
  heightPx: number | null;
  turnElement: HTMLElement | null;
};

type PendingScrollRequest = {
  complete(): void;
  getTargetElement?: (turnElement: HTMLElement) => HTMLElement | null;
  turnKey: string;
};

type PendingMeasurementCommit = {
  latestTurnHeightChange: LatestTurnHeightChange | null;
  restoreScrollDistanceFromBottom: boolean;
  scrollDistanceFromBottomPx: number | null;
  turnHeightsByKey: Record<string, number>;
};

type TurnMeasurement = {
  element: HTMLElement;
  firstHeightPx: number;
  heightPx: number;
};

type ObservedElementMetadata =
  | {
      kind: "turn";
      turnKey: string;
    }
  | {
      element: HTMLElement;
      kind: "latest-turn-follow-content";
    };

type VirtualizedTurnListProps = {
  className?: string;
  entries: readonly VirtualizedTurnEntry[];
  gapPx?: number;
  getBottomScrollPaddingPx?: (() => number | null | undefined) | null;
  getPendingRestoreScrollDistanceFromBottomPx?:
    | (() => number | null | undefined)
    | null;
  initialRestoreState?: VirtualizedTurnListRestoreState;
  latestTurnSynchronousMeasurementKey?: unknown;
  onApiChange?: ((api: VirtualizedTurnListApi | null) => void) | null;
  onLatestTurnHeightChange?: ((change: LatestTurnHeightChange) => void) | null;
  onRestoreStateChange?:
    | ((state: VirtualizedTurnListRestoreState) => void)
    | null;
  onViewportChange?:
    | ((change: {
        target: { originPx: number; targetPx: number } | null;
        viewportEndPx: number;
        viewportStartPx: number;
      }) => void)
    | null;
  onVisibleContentReady?: (() => void) | null;
  preserveMeasuredTurnViewport?: boolean;
  restoreScrollDistanceFromBottomPx?: (() => void) | null;
  RowComponent: React.ComponentType<VirtualizedTurnListRowProps>;
};

type VirtualizedTurnItemProps = {
  constrainedHeightPx?: number;
  entry: VirtualizedTurnEntry;
  latestTurnFollowContentRef?: (element: HTMLElement | null) => void;
  observeTurnElement(
    turnKey: string,
    element: HTMLElement | null,
  ): (() => void) | undefined;
  RowComponent: React.ComponentType<VirtualizedTurnListRowProps>;
};

export type VirtualizedTurnListContracts = {
  api: VirtualizedTurnListApi;
  entry: VirtualizedTurnEntry;
  heightChange: LatestTurnHeightChange;
  itemProps: VirtualizedTurnItemProps;
  observedElementMetadata: ObservedElementMetadata;
  pendingMeasurementCommit: PendingMeasurementCommit;
  pendingScrollRequest: PendingScrollRequest;
  props: VirtualizedTurnListProps;
  restoreState: VirtualizedTurnListRestoreState;
  rowProps: VirtualizedTurnListRowProps;
  turnMeasurement: TurnMeasurement;
};
