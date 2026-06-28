// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Pinned local-conversation summary panel layout state and content-shift behavior.

import React from "react";
import { once } from "../../runtime/commonjs-interop";
import { useSignalValue } from "../../runtime/app-scope-hooks";
import { appScopeRoot as appScope } from "../../runtime/app-scope-runtime";
import {
  animateSignalValue,
  createMotionSignal,
  createSignal,
  initMotionSignalRuntime,
  reducedMotionPreferenceSignal,
  useMotionValueEvent,
} from "../../utils/motion-signal-runtime";
import {
  leftPanelStateSignal,
  pinnedSummaryPanelPinnedSignal,
  pinnedSummaryPanelSpringTransition,
  rightPanelStateSignal,
  threadLayoutContext,
} from "./thread-summary-panel-runtime";

const PINNED_SUMMARY_PANEL_WIDTH_PX = 300;
const PINNED_SUMMARY_PANEL_GAP_PX = 16;

export interface PinnedSummaryPanelState {
  displayMode: "overlay" | "shift" | "gutter";
  isPopoverOpen: boolean;
}

export interface PinnedSummaryPanelLayoutStore {
  set: (
    atom: typeof pinnedSummaryPanelState,
    updater: (state: PinnedSummaryPanelState) => PinnedSummaryPanelState,
  ) => void;
}

type MotionValueSignal = ReturnType<typeof createMotionSignal>;
type StoppableAnimation = {
  stop: () => void;
};

const DEFAULT_PINNED_SUMMARY_PANEL_STATE: PinnedSummaryPanelState = {
  displayMode: "overlay",
  isPopoverOpen: false,
};

export let pinnedSummaryPanelState: ReturnType<typeof createSignal>;

export const initPinnedSummaryPanelState = once(() => {
  initMotionSignalRuntime();
  pinnedSummaryPanelState = createSignal(
    appScope,
    DEFAULT_PINNED_SUMMARY_PANEL_STATE,
  );
});

function getPinnedSummaryPanelDisplayMode(
  mainContentTargetWidth: number,
): PinnedSummaryPanelState["displayMode"] {
  let sideGutterWidth = (mainContentTargetWidth - 736) / 2;
  return sideGutterWidth < 180
    ? "overlay"
    : sideGutterWidth < 400
      ? "shift"
      : "gutter";
}

function getPinnedSummaryPanelVisibility({
  displayMode,
  isPinned,
  isPopoverOpen,
}: {
  displayMode: PinnedSummaryPanelState["displayMode"];
  isPinned: boolean;
  isPopoverOpen: boolean;
}) {
  return {
    displayMode,
    shouldHideInlineImmediately: displayMode === "overlay" && isPopoverOpen,
    shouldShow: isPinned && displayMode !== "overlay",
  };
}

function getPinnedSummaryPanelContentShift({
  displayMode,
  isPinned,
}: {
  displayMode: PinnedSummaryPanelState["displayMode"];
  isPinned: boolean;
}) {
  return isPinned && displayMode === "shift"
    ? -(PINNED_SUMMARY_PANEL_WIDTH_PX + PINNED_SUMMARY_PANEL_GAP_PX) / 2
    : 0;
}

export function usePinnedSummaryPanelLayout(
  store: PinnedSummaryPanelLayoutStore,
): void {
  let leftPanelSignal = useSignalValue(leftPanelStateSignal),
    rightPanelSignal = useSignalValue(rightPanelStateSignal),
    layoutContext = React.useContext(threadLayoutContext),
    fallbackTargetWidthSignal = createMotionSignal(0),
    mainContentTargetWidthSignal =
      layoutContext?.mainContentTargetWidth ?? fallbackTargetWidthSignal,
    updatePinnedPanelLayout;
  updatePinnedPanelLayout = (nextWidth: number) => {
    syncPinnedSummaryPanelStateForWidth(store, nextWidth);
  };
  useMotionValueEvent(
    mainContentTargetWidthSignal,
    "change",
    updatePinnedPanelLayout,
  );
  let syncPinnedPanelLayout = () => {
    syncPinnedSummaryPanelStateForWidth(
      store,
      mainContentTargetWidthSignal.get(),
    );
  };
  let syncLayoutDependencies;
  syncLayoutDependencies = [
    leftPanelSignal,
    rightPanelSignal,
    mainContentTargetWidthSignal,
    store,
  ];
  React.useLayoutEffect(syncPinnedPanelLayout, syncLayoutDependencies);
  let closePopoverOnUnmount, closePopoverDependencies;
  closePopoverOnUnmount = () => () => {
    store.set(pinnedSummaryPanelState, closePinnedSummaryPanelPopover);
  };
  closePopoverDependencies = [store];
  React.useLayoutEffect(closePopoverOnUnmount, closePopoverDependencies);
}

function closePinnedSummaryPanelPopover(
  state: PinnedSummaryPanelState,
): PinnedSummaryPanelState {
  return state.isPopoverOpen
    ? {
        ...state,
        isPopoverOpen: false,
      }
    : state;
}

export function usePinnedSummaryPanelDisplay(conversationId: unknown) {
  let isPinned = useSignalValue(pinnedSummaryPanelPinnedSignal),
    leftPanelState = useSignalValue(leftPanelStateSignal),
    rightPanelState = useSignalValue(rightPanelStateSignal),
    pinnedPanelState = useSignalValue(pinnedSummaryPanelState),
    animationsDisabled = useSignalValue(reducedMotionPreferenceSignal),
    layoutContext = React.useContext(threadLayoutContext),
    fallbackTargetWidthSignal = createMotionSignal(0),
    mainContentTargetWidthSignal =
      layoutContext?.mainContentTargetWidth ?? fallbackTargetWidthSignal,
    initialContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
  let contentShiftSignal = createMotionSignal(initialContentShift),
    contentShiftAnimationRef = React.useRef<StoppableAnimation | null>(null),
    currentContentShift = contentShiftSignal.get();
  let targetContentShiftRef = React.useRef(currentContentShift),
    conversationIdRef = React.useRef(conversationId),
    visibility = getPinnedSummaryPanelVisibility({
      displayMode: pinnedPanelState.displayMode,
      isPinned,
      isPopoverOpen: pinnedPanelState.isPopoverOpen,
    });
  let resetShiftAfterConversationChange = () => {
    if (conversationIdRef.current === conversationId) return;
    conversationIdRef.current = conversationId;
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftSignal.set(nextContentShift);
  };
  let resetShiftAfterConversationChangeDeps = [
    contentShiftSignal,
    isPinned,
    mainContentTargetWidthSignal,
    conversationId,
  ];
  React.useLayoutEffect(
    resetShiftAfterConversationChange,
    resetShiftAfterConversationChangeDeps,
  );
  let syncShiftForTargetWidth = (nextMainContentTargetWidth: number) => {
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: nextMainContentTargetWidth,
    });
    if (targetContentShiftRef.current === nextContentShift) return;
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftAnimationRef.current =
      setOrAnimatePinnedSummaryPanelContentShift(
        contentShiftSignal,
        nextContentShift,
        animationsDisabled,
      );
  };
  useMotionValueEvent(
    mainContentTargetWidthSignal,
    "change",
    syncShiftForTargetWidth,
  );
  let syncAnimatedContentShift = () => {
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
    if (targetContentShiftRef.current === nextContentShift) return;
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftAnimationRef.current =
      setOrAnimatePinnedSummaryPanelContentShift(
        contentShiftSignal,
        nextContentShift,
        animationsDisabled,
      );
  };
  let syncAnimatedContentShiftDeps = [
    contentShiftSignal,
    isPinned,
    leftPanelState,
    rightPanelState,
    mainContentTargetWidthSignal,
    animationsDisabled,
  ];
  React.useEffect(syncAnimatedContentShift, syncAnimatedContentShiftDeps);
  let stopShiftAnimationOnUnmount = () => () => {
    contentShiftAnimationRef.current?.stop();
  };
  React.useEffect(stopShiftAnimationOnUnmount, []);
  return {
    contentShift: contentShiftSignal,
    shouldHideInlineImmediately: visibility.shouldHideInlineImmediately,
    shouldShow: visibility.shouldShow,
  };
}

function getTargetPinnedSummaryPanelContentShift({
  isPinned,
  mainContentTargetWidth,
}: {
  isPinned: boolean;
  mainContentTargetWidth: number;
}) {
  return getPinnedSummaryPanelContentShift({
    displayMode: getPinnedSummaryPanelDisplayMode(mainContentTargetWidth),
    isPinned,
  });
}

function syncPinnedSummaryPanelStateForWidth(
  store: PinnedSummaryPanelLayoutStore,
  mainContentTargetWidth: number,
) {
  let displayMode = getPinnedSummaryPanelDisplayMode(mainContentTargetWidth);
  store.set(pinnedSummaryPanelState, (state) => {
    let shouldKeepPopoverOpen =
      displayMode === "overlay" && state.isPopoverOpen;
    return state.displayMode === displayMode &&
      state.isPopoverOpen === shouldKeepPopoverOpen
      ? state
      : {
          displayMode,
          isPopoverOpen: shouldKeepPopoverOpen,
        };
  });
}

function setOrAnimatePinnedSummaryPanelContentShift(
  contentShiftSignal: MotionValueSignal,
  nextContentShift: number,
  animationsDisabled: boolean,
): StoppableAnimation | null {
  return animationsDisabled
    ? (contentShiftSignal.set(nextContentShift), null)
    : animateSignalValue(
        contentShiftSignal,
        nextContentShift,
        pinnedSummaryPanelSpringTransition,
      );
}
