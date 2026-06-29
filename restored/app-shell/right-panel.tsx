// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collapsible right side panel shell plus its width derivation. The panel
// animates open/closed, supports a "full width" mode, and exposes a left-edge
// resize handle that toggles open/maximized state and persists the chosen width.
import type { MutableRefObject, ReactNode } from "react";
import { createContext, useRef, useState } from "react";
import clsx from "clsx";
import { ResizeHandle } from "./resize-handle";
import { usePanelAnimation } from "./panel-animation";
import { RightPanelTabBar } from "./right-panel-tab-bar";
import { rightAppShellTabController } from "./app-shell-tab-controller";
import { setRightPanelOpen, rightPanelOpenSignal } from "./app-shell-state";
import {
  appStoreScope,
  computeRightPanelWidth,
  computeRightPanelWidthRatio,
  computeStoredRightPanelWidthRatio,
  createMotionValue,
  motion as Motion,
  motionTemplate,
  panelSpringTransition,
  persistRightPanelWidth,
  rightPanelAnimationSignal,
  rightPanelMaximizedSignal,
  rightPanelStoredWidthSignal,
  rightPanelWidthConfigSignal,
  rightPanelFallbackContentSignal,
  scalePx,
  setRightPanelOpenPreservingMaximized,
  useAppScope,
  useAppShellLayout,
  useMotionTransform,
  useMotionValueEvent,
  useSignalValue,
  type MotionValue,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

export const rightPanelContentRefContext = createContext<
  MutableRefObject<HTMLElement | null>
>({ current: null });

export const rightPanelContext = createContext<unknown>(null);

type RightPanelWidthMode = "full" | "regular";

interface RightPanelWidthConfig {
  defaultWidth: number;
  storageKey: string;
}

export interface RightPanelProps {
  children?: ReactNode;
  isRightPanelOpen: boolean;
  mainContentWidth: MotionValue<number>;
  rightPanelWidth: MotionValue<number>;
  rightPanelWidthRatio: MotionValue<number>;
  widthMode: RightPanelWidthMode;
}

export function RightPanel({
  children,
  isRightPanelOpen,
  mainContentWidth,
  rightPanelWidth,
  rightPanelWidthRatio,
  widthMode,
}: RightPanelProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const activeTab = useSignalValue(rightAppShellTabController.activeTab$);
  const fallbackContent = useSignalValue(rightPanelFallbackContentSignal);
  const storedWidth = useSignalValue<number | null>(
    rightPanelStoredWidthSignal,
  );
  const widthConfig = useSignalValue<RightPanelWidthConfig>(
    rightPanelWidthConfigSignal,
  );
  const animation = useSignalValue<MotionValue<number>>(
    rightPanelAnimationSignal,
  );
  const { rightPanelLayoutTick } = useAppShellLayout();
  const [isResizing, setIsResizing] = useState(false);
  const wasMaximizedRef = useRef(false);
  const isFullWidth = widthMode === "full";
  const widthTemplate = motionTemplate`${rightPanelWidth}px`;
  const { isMounted, opacity, animatedSize, progress } = usePanelAnimation({
    animation,
    size: rightPanelWidth,
    isVisible: isRightPanelOpen,
  });

  useMotionValueEvent(progress, "change", () => {
    rightPanelLayoutTick.set(rightPanelLayoutTick.get() + 1);
  });

  if (!isMounted && !isRightPanelOpen && !isResizing) return null;

  return (
    <Motion.aside
      data-app-shell-focus-area="right-panel"
      className="relative z-[41] ml-auto h-full min-h-0 min-w-0 shrink-0 overflow-visible"
      style={{ opacity, width: animatedSize }}
      transition={panelSpringTransition}
    >
      {!isFullWidth && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-px shadow-[-8px_0_16px_-8px_rgb(0_0_0/0.18)]"
        />
      )}
      {!isFullWidth && (
        <ResizeHandle
          defaultSize={storedWidth ?? widthConfig.defaultWidth}
          edge="left"
          getCurrentSize={() => rightPanelWidth.get()}
          onResizingChange={(resizing) => {
            setIsResizing(resizing);
            if (resizing) {
              wasMaximizedRef.current = store.get(rightPanelMaximizedSignal);
            }
          }}
          setSize={(size) => {
            const shouldBeOpen = size >= scalePx(320);
            if (store.get(rightPanelOpenSignal) !== shouldBeOpen) {
              if (shouldBeOpen && wasMaximizedRef.current) {
                setRightPanelOpenPreservingMaximized(store, true);
              } else {
                setRightPanelOpen(store, shouldBeOpen);
              }
            }
            if (shouldBeOpen) {
              rightPanelWidthRatio.set(
                computeRightPanelWidthRatio(
                  size,
                  mainContentWidth.get(),
                  widthMode,
                ),
              );
            }
          }}
          onResizeEnd={(size) => {
            if (size < scalePx(320)) return;
            persistRightPanelWidth({
              mainContentWidth: mainContentWidth.get(),
              storageKey: widthConfig.storageKey,
              width: size,
              widthMode,
            });
          }}
        />
      )}
      <div className="absolute inset-0 min-h-0 min-w-0 overflow-hidden">
        <Motion.div
          className={clsx(
            "absolute top-0 bottom-0 left-0 min-w-0 bg-token-main-surface-primary",
            !isFullWidth && "border-l border-token-border-default",
          )}
          style={{ minWidth: widthTemplate, width: widthTemplate }}
        >
          <div className="h-full min-h-0 min-w-0 overflow-hidden [contain:layout_paint] [--thread-content-top-inset:calc(var(--spacing)*8)]">
            {children}
            {activeTab == null ? fallbackContent : <RightPanelTabBar />}
          </div>
        </Motion.div>
      </div>
    </Motion.aside>
  );
}

function useStableRightPanelWidthRatio(
  config: RightPanelWidthConfig,
  mainContentWidth: MotionValue<number>,
): MotionValue<number> {
  const cacheRef = useRef<
    (RightPanelWidthConfig & { widthRatio: MotionValue<number> }) | null
  >(null);
  if (
    cacheRef.current != null &&
    cacheRef.current.defaultWidth === config.defaultWidth &&
    cacheRef.current.storageKey === config.storageKey
  ) {
    return cacheRef.current.widthRatio;
  }
  const widthRatio = createMotionValue(
    computeStoredRightPanelWidthRatio({
      ...config,
      mainContentWidth: mainContentWidth.get(),
    }),
  );
  cacheRef.current = { ...config, widthRatio };
  return widthRatio;
}

export interface UseRightPanelWidthArgs {
  isFullWidth: boolean;
  mainContentWidth: MotionValue<number>;
}

export interface RightPanelWidthValues {
  rightPanelAnimatedWidth: MotionValue<number>;
  rightPanelWidth: MotionValue<number>;
  rightPanelWidthRatio: MotionValue<number>;
  widthMode: RightPanelWidthMode;
}

export function useRightPanelWidth({
  isFullWidth,
  mainContentWidth,
}: UseRightPanelWidthArgs): RightPanelWidthValues {
  const animation = useSignalValue<MotionValue<number>>(
    rightPanelAnimationSignal,
  );
  const widthRatio = useStableRightPanelWidthRatio(
    useSignalValue<RightPanelWidthConfig>(rightPanelWidthConfigSignal),
    mainContentWidth,
  );
  const widthMode: RightPanelWidthMode = isFullWidth ? "full" : "regular";
  const rightPanelWidth = useMotionTransform(
    [mainContentWidth, widthRatio],
    ([availableWidth, ratio]: [number, number]) =>
      isFullWidth
        ? availableWidth
        : computeRightPanelWidth(ratio, availableWidth, widthMode),
  );
  const rightPanelAnimatedWidth = useMotionTransform(
    [animation, rightPanelWidth],
    ([progress, width]: [number, number]) =>
      isFullWidth ? 0 : Math.max(0, Math.min(1, progress)) * width,
  );
  return {
    rightPanelAnimatedWidth,
    rightPanelWidth,
    rightPanelWidthRatio: widthRatio,
    widthMode,
  };
}
