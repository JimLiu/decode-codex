// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Virtualized local conversation turn list and per-turn measurement behavior.
import React from "react";
import { flushSync as flushSyncReactUpdates } from "react-dom";
import { once } from "../../runtime/commonjs-interop";
import { classNames, initClassNameRuntime } from "../../utils/class-names";
import {
  initUseStableCallback,
  useStableCallback,
} from "../../utils/use-stable-callback";
import {
  initWindowZoomContext,
  useWindowZoom,
} from "../../utils/window-zoom-context";
import {
  buildThreadVirtualizerLayout,
  getDistanceFromBottomForCenteredTurn,
  getDistanceFromBottomForPreservedAnchor,
  getRangeAnchoredAtTurn,
  getVisibleThreadRange,
  initThreadVirtualizerChunk,
} from "../../threads/thread-virtualizer";
import {
  getResizeObserverEntrySize,
  initUseResizeObserverChunk,
} from "../../utils/use-resize-observer";
import { initThreadScrollLayoutStyleChunk } from "../../threads/thread-scroll-layout";
import {
  initThreadScrollControllerContextChunk,
  useThreadScrollController,
} from "../../threads/thread-scroll-layout/scroll-controller-context";
import {
  getBottomScrollPaddingPxValue,
  getDistanceFromBottomForTargetElement,
  isAtBottomAfterPadding,
  measureTurnBottomViewportOverflow,
  subtractBottomScrollPaddingPx,
} from "./local-conversation-turn-list-measurements";
import {
  areTurnKeyArraysEqual,
  createInitialVirtualizedTurnListState,
  createVirtualizedTurnListRestoreState,
  DEFAULT_VIRTUAL_TURN_GAP_PX,
  DEFAULT_VIRTUAL_VIEWPORT_HEIGHT_PX,
  EMPTY_TURN_HEIGHTS_BY_KEY,
  findMeasuredAnchorKeyForViewportPreservation,
  updateVirtualizedTurnListViewportState,
  VIRTUAL_TURN_OVERSCAN_COUNT,
} from "./local-conversation-virtualized-turn-list-state";
import { VirtualizedTurnItem } from "./local-conversation-virtualized-turn-item";
import type { VirtualizedTurnListContracts } from "./local-conversation-virtualized-turn-list-types";

type PendingScrollRequest =
  VirtualizedTurnListContracts["pendingScrollRequest"];
type PendingMeasurementCommit =
  VirtualizedTurnListContracts["pendingMeasurementCommit"];
type TurnMeasurement = VirtualizedTurnListContracts["turnMeasurement"];
type ObservedElementMetadata =
  VirtualizedTurnListContracts["observedElementMetadata"];
type VirtualizedTurnListProps = VirtualizedTurnListContracts["props"];

const MemoizedVirtualizedTurnItem = React.memo(VirtualizedTurnItem);

export function VirtualizedTurnList({
  entries,
  RowComponent,
  onApiChange,
  onVisibleContentReady,
  className,
  gapPx = DEFAULT_VIRTUAL_TURN_GAP_PX,
  getBottomScrollPaddingPx,
  onLatestTurnHeightChange,
  preserveMeasuredTurnViewport = false,
  getPendingRestoreScrollDistanceFromBottomPx,
  restoreScrollDistanceFromBottomPx,
  initialRestoreState,
  onRestoreStateChange,
  onViewportChange,
  latestTurnSynchronousMeasurementKey,
}: VirtualizedTurnListProps) {
  let scrollController = useThreadScrollController(),
    windowZoom = useWindowZoom(),
    [measuredHeightsByKey, setMeasuredHeightsByKey] = React.useState(
      initialRestoreState?.turnHeightsByKey ?? EMPTY_TURN_HEIGHTS_BY_KEY,
    ),
    [rootElement, setRootElement] = React.useState<HTMLDivElement | null>(null),
    [viewportState, setViewportState] = React.useState(() => {
      let bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
        getBottomScrollPaddingPx,
      );
      return createInitialVirtualizedTurnListState(
        entries,
        subtractBottomScrollPaddingPx(
          scrollController.getLastScrollDistanceFromBottomPx(),
          bottomScrollPaddingPx,
        ),
        gapPx,
        initialRestoreState ?? null,
      );
    }),
    [pendingScrollRequest, setPendingScrollRequest] =
      React.useState<PendingScrollRequest | null>(null),
    pendingScrollRequestRef = React.useRef<PendingScrollRequest | null>(null),
    measuredHeightsByKeyRef = React.useRef(measuredHeightsByKey),
    viewportStateRef = React.useRef(viewportState),
    observedElementMetadataRef = React.useRef(
      new Map<HTMLElement, ObservedElementMetadata>(),
    ),
    turnElementByKeyRef = React.useRef(new Map<string, HTMLElement>()),
    pendingInitialMeasureElementsRef = React.useRef(
      new Map<string, HTMLElement>(),
    ),
    latestTurnFollowContentHeightsRef = React.useRef(
      new Map<HTMLElement, number>(),
    ),
    pendingResizeMeasurementsRef = React.useRef(
      new Map<string, TurnMeasurement>(),
    ),
    pendingMeasurementCommitRef = React.useRef<PendingMeasurementCommit | null>(
      null,
    ),
    resizeFrameRef = React.useRef<number | null>(null),
    resizeObserverRef = React.useRef<ResizeObserver | null>(null),
    visibleContentReadyRef = React.useRef(false),
    virtualLayout = React.useMemo(
      () =>
        buildThreadVirtualizerLayout({
          entries,
          gapPx,
          measuredHeightsByKey,
        }),
      [entries, gapPx, measuredHeightsByKey],
    ),
    virtualLayoutRef = React.useRef(virtualLayout),
    previousLayoutRef = React.useRef<typeof virtualLayout | null>(null),
    renderedRange = viewportState.renderedRange;

  if (pendingScrollRequest != null) {
    let pendingScrollDistanceFromBottomPx =
      getDistanceFromBottomForCenteredTurn({
        layout: virtualLayout,
        turnKey: pendingScrollRequest.turnKey,
        viewportHeightPx: viewportState.viewportHeightPx,
      });
    if (pendingScrollDistanceFromBottomPx != null) {
      renderedRange = getVisibleThreadRange({
        distanceFromBottomPx: pendingScrollDistanceFromBottomPx,
        layout: virtualLayout,
        overscanCount: VIRTUAL_TURN_OVERSCAN_COUNT,
        viewportHeightPx: viewportState.viewportHeightPx,
      });
    }
  } else if (
    !areTurnKeyArraysEqual(viewportState.turnKeys, virtualLayout.turnKeys)
  ) {
    let anchorTurnKey =
      viewportState.turnKeys[viewportState.renderedRange.startIndex];
    if (anchorTurnKey != null) {
      renderedRange =
        getRangeAnchoredAtTurn({
          anchorKey: anchorTurnKey,
          layout: virtualLayout,
          previousRange: renderedRange,
        }) ?? renderedRange;
    }
  }

  let restoreScrollDistanceFromBottom = useStableCallback(() => {
      pendingMeasurementCommitRef.current ??
        restoreScrollDistanceFromBottomPx?.();
    }),
    applyPendingMeasurementCommit = useStableCallback(
      (pendingCommit: PendingMeasurementCommit) => {
        if (pendingCommit.latestTurnHeightChange != null) {
          onLatestTurnHeightChange?.(pendingCommit.latestTurnHeightChange);
        }
        if (pendingCommit.restoreScrollDistanceFromBottom) {
          restoreScrollDistanceFromBottom();
        } else if (pendingCommit.scrollDistanceFromBottomPx != null) {
          scrollController.scrollToDistanceFromBottomPx(
            pendingCommit.scrollDistanceFromBottomPx,
            "instant",
          );
        }
      },
    ),
    syncViewportState = useStableCallback(
      (distanceFromBottomPx: number, viewportHeightPx: number) => {
        if (pendingMeasurementCommitRef.current != null) return;
        let nextViewportState = updateVirtualizedTurnListViewportState({
          current: viewportStateRef.current,
          distanceFromBottomPx,
          layout: virtualLayout,
          viewportHeightPx,
        });
        if (nextViewportState !== viewportStateRef.current) {
          viewportStateRef.current = nextViewportState;
          setViewportState(nextViewportState);
        }
      },
    ),
    notifyViewportChange = useStableCallback(
      (
        distanceFromBottomPx: number,
        viewportHeightPx: number,
        previousDistanceFromBottomPx?: number,
      ) => {
        if (onViewportChange == null) return;
        let viewportEndPx = Math.max(
            0,
            Math.min(
              virtualLayout.totalHeightPx,
              virtualLayout.totalHeightPx - distanceFromBottomPx,
            ),
          ),
          viewportStartPx = Math.max(0, viewportEndPx - viewportHeightPx),
          previousViewportEndPx =
            previousDistanceFromBottomPx == null
              ? viewportEndPx
              : Math.max(
                  0,
                  Math.min(
                    virtualLayout.totalHeightPx,
                    virtualLayout.totalHeightPx - previousDistanceFromBottomPx,
                  ),
                ),
          previousViewportStartPx = Math.max(
            0,
            previousViewportEndPx - viewportHeightPx,
          );

        onViewportChange({
          target:
            previousDistanceFromBottomPx == null
              ? null
              : viewportStartPx < previousViewportStartPx
                ? {
                    originPx: previousViewportStartPx,
                    targetPx: viewportStartPx,
                  }
                : viewportEndPx > previousViewportEndPx
                  ? {
                      originPx: previousViewportEndPx,
                      targetPx: viewportEndPx,
                    }
                  : null,
          viewportEndPx,
          viewportStartPx,
        });
      },
    ),
    finishPendingScrollRequest = useStableCallback(
      (request: PendingScrollRequest) => {
        queueMicrotask(() => {
          if (pendingScrollRequestRef.current === request) {
            request.complete();
            pendingScrollRequestRef.current = null;
          }
          setPendingScrollRequest((currentRequest) =>
            currentRequest === request ? null : currentRequest,
          );
        });
      },
    ),
    scrollToKey = useStableCallback(
      (
        turnKey: string,
        getTargetElement?: (turnElement: HTMLElement) => HTMLElement | null,
      ) => {
        pendingScrollRequestRef.current?.complete();
        return new Promise<void>((complete) => {
          let request = {
            complete,
            getTargetElement,
            turnKey,
          };
          pendingScrollRequestRef.current = request;
          setPendingScrollRequest(request);
        });
      },
    ),
    publishLatestTurnFollowContentHeight = useStableCallback(() => {
      let followContentHeightPx = 0,
        lastFollowContentElement: HTMLElement | null = null;

      for (let [
        followContentElement,
        heightPx,
      ] of latestTurnFollowContentHeightsRef.current) {
        followContentHeightPx += heightPx;
        if (
          lastFollowContentElement == null ||
          lastFollowContentElement.compareDocumentPosition(
            followContentElement,
          ) === Node.DOCUMENT_POSITION_FOLLOWING
        ) {
          lastFollowContentElement = followContentElement;
        }
      }

      if (lastFollowContentElement != null) {
        onLatestTurnHeightChange?.({
          heightDeltaPx: null,
          heightPx: null,
          bottomViewportOverflowPx: measureTurnBottomViewportOverflow({
            scrollElement: scrollController.getScrollElement(),
            turnElement: lastFollowContentElement,
            windowZoom,
          }),
          turnElement: lastFollowContentElement,
          followContentHeightPx,
        });
      }
    }),
    applyMeasuredTurnHeights = useStableCallback(
      (
        measurementsByTurnKey: Map<string, TurnMeasurement>,
        flushSync = true,
      ) => {
        let pendingCommit = pendingMeasurementCommitRef.current,
          currentHeightsByKey = measuredHeightsByKeyRef.current,
          nextHeightsByKey = currentHeightsByKey,
          latestTurnHeightDeltaPx = 0,
          didLatestTurnHeightChange = false,
          latestTurnElement: HTMLElement | null = null,
          totalLayoutHeightDeltaPx = 0,
          preservedDistanceDeltaPx = 0,
          rawDistanceFromBottomPx =
            scrollController.getLastScrollDistanceFromBottomPx(),
          bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
            getBottomScrollPaddingPx,
          ),
          paddedDistanceFromBottomPx = subtractBottomScrollPaddingPx(
            rawDistanceFromBottomPx,
            bottomScrollPaddingPx,
          ),
          pendingRestoreDistanceFromBottomPx = preserveMeasuredTurnViewport
            ? null
            : (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null),
          viewportDistanceFromBottomPx =
            pendingCommit == null
              ? paddedDistanceFromBottomPx
              : viewportStateRef.current.distanceFromBottomPx;

        for (let [
          turnKey,
          { element, firstHeightPx, heightPx },
        ] of measurementsByTurnKey) {
          let currentElement = turnElementByKeyRef.current.get(turnKey);
          if (currentElement !== element) continue;
          let measuredHeightPx = Math.max(1, heightPx),
            previousHeightPx = currentHeightsByKey[turnKey];
          if (previousHeightPx === measuredHeightPx) continue;
          if (nextHeightsByKey === currentHeightsByKey) {
            nextHeightsByKey = {
              ...currentHeightsByKey,
            };
          }
          nextHeightsByKey[turnKey] = measuredHeightPx;

          let heightDeltaPx =
              measuredHeightPx -
              (previousHeightPx ?? Math.max(1, firstHeightPx)),
            turnIndex = virtualLayout.turnIndexByKey.get(turnKey);
          if (turnIndex == null) continue;
          let isLatestTurn = turnIndex === virtualLayout.turnKeys.length - 1;
          if (isLatestTurn) {
            didLatestTurnHeightChange = true;
            latestTurnHeightDeltaPx += heightDeltaPx;
            latestTurnElement = currentElement;
          }

          let layoutHeightDeltaPx =
            measuredHeightPx -
            (virtualLayout.heightsPx[turnIndex] ?? measuredHeightPx);
          totalLayoutHeightDeltaPx += layoutHeightDeltaPx;
          let turnBottomOffsetPx =
            virtualLayout.bottomOffsetsPx[turnIndex] ?? 0;
          if (
            layoutHeightDeltaPx !== 0 &&
            turnBottomOffsetPx <= viewportDistanceFromBottomPx &&
            (preserveMeasuredTurnViewport ||
              (getPendingRestoreScrollDistanceFromBottomPx != null &&
                !isLatestTurn))
          ) {
            preservedDistanceDeltaPx += layoutHeightDeltaPx;
          }
        }

        if (nextHeightsByKey === currentHeightsByKey) return false;

        let isAtBottom =
            preserveMeasuredTurnViewport &&
            isAtBottomAfterPadding(
              rawDistanceFromBottomPx,
              bottomScrollPaddingPx,
            ),
          shouldRestoreScrollDistance =
            pendingCommit?.restoreScrollDistanceFromBottom ||
            pendingRestoreDistanceFromBottomPx != null,
          nextScrollDistanceFromBottomPx = null as number | null;

        if (!shouldRestoreScrollDistance) {
          nextScrollDistanceFromBottomPx = isAtBottom
            ? 0
            : preservedDistanceDeltaPx === 0
              ? (pendingCommit?.scrollDistanceFromBottomPx ?? null)
              : (pendingCommit?.scrollDistanceFromBottomPx ??
                  rawDistanceFromBottomPx) + preservedDistanceDeltaPx;
        }

        let nextViewportDistanceFromBottomPx =
          viewportStateRef.current.distanceFromBottomPx;
        if (shouldRestoreScrollDistance) {
          nextViewportDistanceFromBottomPx =
            pendingRestoreDistanceFromBottomPx ??
            nextViewportDistanceFromBottomPx;
        } else if (nextScrollDistanceFromBottomPx != null) {
          nextViewportDistanceFromBottomPx = subtractBottomScrollPaddingPx(
            nextScrollDistanceFromBottomPx,
            bottomScrollPaddingPx,
          );
        }

        let nextVirtualLayout = buildThreadVirtualizerLayout({
          entries,
          gapPx,
          measuredHeightsByKey: nextHeightsByKey,
        });
        previousLayoutRef.current ??= virtualLayout;
        let nextViewportState = updateVirtualizedTurnListViewportState({
            current: viewportStateRef.current,
            distanceFromBottomPx: nextViewportDistanceFromBottomPx,
            layout: nextVirtualLayout,
            viewportHeightPx: viewportStateRef.current.viewportHeightPx,
          }),
          pendingLatestTurnHeightChange = pendingCommit?.latestTurnHeightChange,
          measuredLatestTurnElement =
            latestTurnElement ??
            pendingLatestTurnHeightChange?.turnElement ??
            null,
          measurementCommit: PendingMeasurementCommit = {
            latestTurnHeightChange:
              didLatestTurnHeightChange || pendingLatestTurnHeightChange != null
                ? {
                    heightDeltaPx:
                      (pendingLatestTurnHeightChange?.heightDeltaPx ?? 0) +
                      latestTurnHeightDeltaPx,
                    heightPx: nextVirtualLayout.heightsPx.at(-1) ?? null,
                    bottomViewportOverflowPx: measureTurnBottomViewportOverflow(
                      {
                        scrollElement: scrollController.getScrollElement(),
                        turnElement: measuredLatestTurnElement,
                        windowZoom,
                      },
                    ),
                    turnElement: measuredLatestTurnElement,
                    followContentHeightPx: null,
                  }
                : null,
            restoreScrollDistanceFromBottom: shouldRestoreScrollDistance,
            scrollDistanceFromBottomPx: nextScrollDistanceFromBottomPx,
            turnHeightsByKey: nextHeightsByKey,
          },
          commitMeasuredHeights = () => {
            measuredHeightsByKeyRef.current = nextHeightsByKey;
            setMeasuredHeightsByKey(nextHeightsByKey);
            if (nextViewportState !== viewportStateRef.current) {
              viewportStateRef.current = nextViewportState;
              setViewportState(nextViewportState);
            }
          };

        pendingMeasurementCommitRef.current = measurementCommit;
        if (
          preserveMeasuredTurnViewport &&
          totalLayoutHeightDeltaPx !== 0 &&
          preservedDistanceDeltaPx === 0 &&
          !isAtBottom &&
          !shouldRestoreScrollDistance
        ) {
          scrollController.preserveScrollPositionForNextLayout();
        }

        if (flushSync) {
          flushSyncReactUpdates(commitMeasuredHeights);
        } else {
          commitMeasuredHeights();
        }

        return true;
      },
    ),
    getResizeObserver = useStableCallback(() => {
      if (resizeObserverRef.current != null) return resizeObserverRef.current;
      let didLatestFollowContentResize = false,
        resizeObserver = new ResizeObserver((resizeEntries) => {
          let pendingMeasurementsByTurnKey =
            pendingResizeMeasurementsRef.current;
          for (let resizeEntry of resizeEntries) {
            let metadata = observedElementMetadataRef.current.get(
              resizeEntry.target as HTMLElement,
            );
            if (metadata == null) continue;
            let { height } = getResizeObserverEntrySize(resizeEntry);
            switch (metadata.kind) {
              case "turn": {
                let pendingTurnMeasurement = pendingMeasurementsByTurnKey.get(
                  metadata.turnKey,
                );
                if (
                  pendingTurnMeasurement == null ||
                  pendingTurnMeasurement.element !== resizeEntry.target
                ) {
                  pendingMeasurementsByTurnKey.set(metadata.turnKey, {
                    element: resizeEntry.target as HTMLElement,
                    firstHeightPx: height,
                    heightPx: height,
                  });
                } else {
                  pendingTurnMeasurement.heightPx = height;
                }
                break;
              }
              case "latest-turn-follow-content":
                latestTurnFollowContentHeightsRef.current.set(
                  metadata.element,
                  height,
                );
                didLatestFollowContentResize = true;
                break;
            }
          }
          resizeFrameRef.current ??= window.requestAnimationFrame(() => {
            resizeFrameRef.current = null;
            let measurementsByTurnKey = pendingResizeMeasurementsRef.current;
            pendingResizeMeasurementsRef.current = new Map();
            let didFollowContentResize = didLatestFollowContentResize;
            didLatestFollowContentResize = false;
            applyMeasuredTurnHeights(measurementsByTurnKey);
            if (didFollowContentResize) publishLatestTurnFollowContentHeight();
          });
        });
      resizeObserverRef.current = resizeObserver;
      return resizeObserver;
    }),
    observeTurnElement = useStableCallback(
      (turnKey: string, element: HTMLElement | null) => {
        if (element == null) return;
        observedElementMetadataRef.current.set(element, {
          kind: "turn",
          turnKey,
        });
        turnElementByKeyRef.current.set(turnKey, element);
        pendingInitialMeasureElementsRef.current.set(turnKey, element);
        let resizeObserver = getResizeObserver();
        resizeObserver.observe(element);
        return () => {
          resizeObserver.unobserve(element);
          observedElementMetadataRef.current.delete(element);
          if (
            pendingInitialMeasureElementsRef.current.get(turnKey) === element
          ) {
            pendingInitialMeasureElementsRef.current.delete(turnKey);
          }
          if (turnElementByKeyRef.current.get(turnKey) === element) {
            turnElementByKeyRef.current.delete(turnKey);
          }
        };
      },
    ),
    measureLatestTurnHeight = useStableCallback(() => {
      let latestTurnKey = entries.at(-1)?.turnKey;
      if (latestTurnKey == null) return;
      let latestTurnElement = turnElementByKeyRef.current.get(latestTurnKey);
      if (latestTurnElement == null) return;
      let latestTurnHeightPx = latestTurnElement.offsetHeight;
      if (latestTurnHeightPx <= 0) return;
      applyMeasuredTurnHeights(
        new Map([
          [
            latestTurnKey,
            {
              element: latestTurnElement,
              firstHeightPx: latestTurnHeightPx,
              heightPx: latestTurnHeightPx,
            },
          ],
        ]),
        false,
      );
    }),
    observeLatestTurnFollowContent = useStableCallback(
      (element: HTMLElement | null) => {
        if (element == null) return;
        observedElementMetadataRef.current.set(element, {
          element,
          kind: "latest-turn-follow-content",
        });
        latestTurnFollowContentHeightsRef.current.set(element, 0);
        let resizeObserver = getResizeObserver();
        resizeObserver.observe(element);
        return () => {
          resizeObserver.unobserve(element);
          observedElementMetadataRef.current.delete(element);
          latestTurnFollowContentHeightsRef.current.delete(element);
        };
      },
    );

  React.useLayoutEffect(() => {
    let pendingInitialElements = pendingInitialMeasureElementsRef.current;
    if (pendingInitialElements.size === 0) return;
    pendingInitialMeasureElementsRef.current = new Map();
    let measurementsByTurnKey = new Map<string, TurnMeasurement>();
    for (let [turnKey, element] of pendingInitialElements) {
      if (turnElementByKeyRef.current.get(turnKey) !== element) continue;
      let heightPx = element.offsetHeight;
      if (heightPx > 0) {
        measurementsByTurnKey.set(turnKey, {
          element,
          firstHeightPx: heightPx,
          heightPx,
        });
      }
    }
    if (
      measurementsByTurnKey.size > 0 &&
      applyMeasuredTurnHeights(measurementsByTurnKey, false)
    ) {
      for (let [turnKey, element] of pendingInitialElements) {
        if (turnElementByKeyRef.current.get(turnKey) === element) {
          pendingInitialMeasureElementsRef.current.set(turnKey, element);
        }
      }
    }
  });

  React.useLayoutEffect(() => {
    if (latestTurnSynchronousMeasurementKey != null) measureLatestTurnHeight();
  }, [latestTurnSynchronousMeasurementKey, measureLatestTurnHeight]);

  React.useLayoutEffect(() => {
    let pendingCommit = pendingMeasurementCommitRef.current;
    if (
      pendingCommit == null ||
      pendingCommit.turnHeightsByKey !== measuredHeightsByKey
    )
      return;
    pendingMeasurementCommitRef.current = null;
    applyPendingMeasurementCommit(pendingCommit);
  }, [applyPendingMeasurementCommit, measuredHeightsByKey]);

  React.useEffect(() => {
    if (onApiChange == null) return;
    onApiChange({
      scrollToKey,
    });
    return () => {
      onApiChange(null);
    };
  }, [onApiChange, scrollToKey]);

  React.useEffect(() => {
    if (
      onVisibleContentReady == null ||
      visibleContentReadyRef.current ||
      rootElement == null ||
      (entries.length > 0 && turnElementByKeyRef.current.size === 0)
    )
      return;
    let secondFrameId: number | null = null,
      firstFrameId = window.requestAnimationFrame(() => {
        secondFrameId = window.requestAnimationFrame(() => {
          visibleContentReadyRef.current = true;
          restoreScrollDistanceFromBottom();
          onVisibleContentReady();
        });
      });
    return () => {
      window.cancelAnimationFrame(firstFrameId);
      if (secondFrameId != null) window.cancelAnimationFrame(secondFrameId);
    };
  }, [
    entries.length,
    onVisibleContentReady,
    restoreScrollDistanceFromBottom,
    rootElement,
  ]);

  React.useEffect(() => {
    let observedMetadata = observedElementMetadataRef.current,
      turnElements = turnElementByKeyRef.current,
      followContentHeights = latestTurnFollowContentHeightsRef.current;
    return () => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      if (resizeFrameRef.current != null) {
        window.cancelAnimationFrame(resizeFrameRef.current);
        resizeFrameRef.current = null;
      }
      observedMetadata.clear();
      turnElements.clear();
      pendingInitialMeasureElementsRef.current.clear();
      followContentHeights.clear();
      pendingMeasurementCommitRef.current = null;
      pendingScrollRequestRef.current?.complete();
      pendingScrollRequestRef.current = null;
    };
  }, []);

  React.useLayoutEffect(() => {
    if (onRestoreStateChange == null) return;
    return () => {
      onRestoreStateChange(
        createVirtualizedTurnListRestoreState(
          measuredHeightsByKeyRef.current,
          viewportStateRef.current.turnKeys,
          viewportStateRef.current.renderedRange,
        ),
      );
    };
  }, [onRestoreStateChange]);

  React.useLayoutEffect(() => {
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    let getViewportHeightPx = () =>
        scrollElement.clientHeight ||
        viewportStateRef.current.viewportHeightPx ||
        DEFAULT_VIRTUAL_VIEWPORT_HEIGHT_PX,
      removeScrollListener = scrollController.addScrollListener(
        (distanceFromBottomPx: number) => {
          syncViewportState(
            subtractBottomScrollPaddingPx(
              distanceFromBottomPx,
              getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
            ),
            getViewportHeightPx(),
          );
        },
      ),
      removeUserScrollListener = scrollController.addUserScrollListener(
        (
          distanceFromBottomPx: number,
          previousDistanceFromBottomPx?: number,
        ) => {
          notifyViewportChange(
            subtractBottomScrollPaddingPx(
              distanceFromBottomPx,
              getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
            ),
            getViewportHeightPx(),
            previousDistanceFromBottomPx == null
              ? undefined
              : subtractBottomScrollPaddingPx(
                  previousDistanceFromBottomPx,
                  getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
                ),
          );
        },
      ),
      resizeObserver = new ResizeObserver((resizeEntries) => {
        let resizeEntry = resizeEntries[0];
        if (resizeEntry == null) return;
        let { height } = getResizeObserverEntrySize(resizeEntry);
        syncViewportState(
          viewportStateRef.current.distanceFromBottomPx,
          height,
        );
        restoreScrollDistanceFromBottom();
      });
    resizeObserver.observe(scrollElement);
    return () => {
      removeScrollListener();
      removeUserScrollListener();
      resizeObserver.disconnect();
    };
  }, [
    getBottomScrollPaddingPx,
    notifyViewportChange,
    restoreScrollDistanceFromBottom,
    scrollController,
    syncViewportState,
  ]);

  React.useLayoutEffect(() => {
    if (pendingScrollRequest == null) return;
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    let pendingMeasurementsByTurnKey = pendingResizeMeasurementsRef.current,
      measurementsByTurnKey = new Map<string, TurnMeasurement>();
    for (let [turnKey, element] of turnElementByKeyRef.current) {
      let heightPx = element.offsetHeight;
      if (heightPx > 0) {
        let pendingMeasurement = pendingMeasurementsByTurnKey.get(turnKey);
        measurementsByTurnKey.set(turnKey, {
          element,
          firstHeightPx:
            pendingMeasurement?.element === element
              ? pendingMeasurement.firstHeightPx
              : heightPx,
          heightPx,
        });
      }
    }
    if (
      (pendingMeasurementsByTurnKey.clear(),
      applyMeasuredTurnHeights(measurementsByTurnKey, false) ||
        pendingMeasurementCommitRef.current != null)
    )
      return;

    let turnElement = turnElementByKeyRef.current.get(
        pendingScrollRequest.turnKey,
      ),
      targetElement =
        turnElement == null
          ? null
          : (pendingScrollRequest.getTargetElement?.(turnElement) ??
            turnElement),
      targetDistanceFromBottomPx =
        turnElement == null || targetElement == null
          ? getDistanceFromBottomForCenteredTurn({
              layout: virtualLayout,
              turnKey: pendingScrollRequest.turnKey,
              viewportHeightPx: scrollElement.clientHeight,
            })
          : getDistanceFromBottomForTargetElement({
              layout: virtualLayout,
              targetElement,
              turnElement,
              turnKey: pendingScrollRequest.turnKey,
              viewportHeightPx: scrollElement.clientHeight,
              windowZoom,
            });

    if (targetDistanceFromBottomPx == null) {
      finishPendingScrollRequest(pendingScrollRequest);
      return;
    }

    scrollController.scrollToDistanceFromBottomPx(
      targetDistanceFromBottomPx +
        getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
      "instant",
    );
    syncViewportState(targetDistanceFromBottomPx, scrollElement.clientHeight);
    finishPendingScrollRequest(pendingScrollRequest);
  }, [
    applyMeasuredTurnHeights,
    virtualLayout,
    pendingScrollRequest,
    scrollController,
    finishPendingScrollRequest,
    getBottomScrollPaddingPx,
    syncViewportState,
    windowZoom,
  ]);

  React.useLayoutEffect(() => {
    if (pendingMeasurementCommitRef.current != null) return;
    let previousVirtualLayout = virtualLayoutRef.current,
      nextVirtualLayout = previousLayoutRef.current ?? virtualLayout;
    previousLayoutRef.current = null;
    virtualLayoutRef.current = virtualLayout;
    if (
      !preserveMeasuredTurnViewport ||
      pendingScrollRequest != null ||
      previousVirtualLayout === nextVirtualLayout
    )
      return;

    let bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
        getBottomScrollPaddingPx,
      ),
      rawDistanceFromBottomPx =
        scrollController.getLastScrollDistanceFromBottomPx(),
      distanceFromBottomPx = subtractBottomScrollPaddingPx(
        rawDistanceFromBottomPx,
        bottomScrollPaddingPx,
      );
    if (
      (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null) != null ||
      isAtBottomAfterPadding(rawDistanceFromBottomPx, bottomScrollPaddingPx)
    )
      return;

    let anchorKey = findMeasuredAnchorKeyForViewportPreservation({
      distanceFromBottomPx,
      layout: previousVirtualLayout,
      measuredHeightsByKey: measuredHeightsByKeyRef.current,
      nextLayout: nextVirtualLayout,
      viewportHeightPx: viewportStateRef.current.viewportHeightPx,
    });
    if (anchorKey == null) return;
    let adjustedDistanceFromBottomPx = getDistanceFromBottomForPreservedAnchor({
      anchorKey,
      distanceFromBottomPx,
      nextLayout: nextVirtualLayout,
      previousLayout: previousVirtualLayout,
    });
    if (
      adjustedDistanceFromBottomPx == null ||
      adjustedDistanceFromBottomPx === distanceFromBottomPx
    )
      return;
    syncViewportState(
      adjustedDistanceFromBottomPx,
      viewportStateRef.current.viewportHeightPx,
    );
    scrollController.scrollToDistanceFromBottomPx(
      adjustedDistanceFromBottomPx + bottomScrollPaddingPx,
      "instant",
    );
  }, [
    getBottomScrollPaddingPx,
    getPendingRestoreScrollDistanceFromBottomPx,
    virtualLayout,
    pendingScrollRequest,
    preserveMeasuredTurnViewport,
    scrollController,
    syncViewportState,
  ]);

  React.useLayoutEffect(() => {
    if (pendingScrollRequest != null) return;
    syncViewportState(
      viewportStateRef.current.distanceFromBottomPx,
      viewportStateRef.current.viewportHeightPx,
    );
    restoreScrollDistanceFromBottom();
  }, [
    entries.length,
    pendingScrollRequest,
    restoreScrollDistanceFromBottom,
    syncViewportState,
  ]);

  return (
    <div
      ref={setRootElement}
      className={classNames("relative shrink-0", className)}
      style={{
        height: `${virtualLayout.totalHeightPx}px`,
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: `${gapPx}px`,
          marginTop: `${virtualLayout.topOffsetsPx[renderedRange.startIndex] ?? 0}px`,
        }}
      >
        {entries
          .slice(renderedRange.startIndex, renderedRange.endIndex)
          .map((item, index) => {
            let itemIndex = renderedRange.startIndex + index;
            return (
              <MemoizedVirtualizedTurnItem
                key={item.turnKey}
                entry={item}
                latestTurnFollowContentRef={
                  itemIndex === entries.length - 1 &&
                  onLatestTurnHeightChange != null
                    ? observeLatestTurnFollowContent
                    : undefined
                }
                RowComponent={RowComponent}
                constrainedHeightPx={
                  itemIndex !== entries.length - 1 &&
                  pendingScrollRequest?.turnKey !== item.turnKey &&
                  measuredHeightsByKey[item.turnKey] == null
                    ? virtualLayout.heightsPx[itemIndex]
                    : undefined
                }
                observeTurnElement={observeTurnElement}
              />
            );
          })}
      </div>
    </div>
  );
}

export const initVirtualizedTurnListChunk = once(() => {
  initClassNameRuntime();
  initWindowZoomContext();
  initUseResizeObserverChunk();
  initThreadScrollLayoutStyleChunk();
  initThreadScrollControllerContextChunk();
  initUseStableCallback();
  initThreadVirtualizerChunk();
});
