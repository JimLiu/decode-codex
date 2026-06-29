// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collapsible bottom panel shell: animates open/closed, hosts a top resize handle
// that closes the panel when dragged below the minimum height, and persists its
// height clamped to the available main-content area.
import type { ReactNode } from "react";
import { ResizeHandle } from "./resize-handle";
import { usePanelAnimation } from "./panel-animation";
import {
  clampBottomPanelHeight,
  writeBottomPanelHeight,
} from "./bottom-panel-height";
import { setBottomPanelOpen } from "./app-shell-state";
import {
  appStoreScope,
  bottomPanelAnimationSignal,
  motion as Motion,
  motionTemplate,
  panelSpringTransition,
  scalePx,
  useAppScope,
  useSignalValue,
  type MotionValue,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

export interface BottomPanelProps {
  bottomPanelHeight: MotionValue<number>;
  children?: ReactNode;
  clampedBottomPanelHeight: MotionValue<number>;
  mainContentHeight: MotionValue<number>;
  isVisible?: boolean;
}

export function BottomPanel({
  bottomPanelHeight,
  children,
  clampedBottomPanelHeight,
  mainContentHeight,
  isVisible = false,
}: BottomPanelProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const { isMounted, opacity, animatedSize } = usePanelAnimation({
    animation: useSignalValue<MotionValue<number>>(bottomPanelAnimationSignal),
    size: clampedBottomPanelHeight,
    isVisible,
  });
  const heightTemplate = motionTemplate`${clampedBottomPanelHeight}px`;
  if (!isMounted && !isVisible) return null;
  return (
    <Motion.div
      data-app-shell-focus-area="bottom-panel"
      className="relative z-30 min-h-0 w-full shrink-0 overflow-visible"
      style={{ opacity, height: animatedSize }}
      transition={panelSpringTransition}
    >
      <ResizeHandle
        defaultSize={280}
        edge="top"
        getCurrentSize={() => clampedBottomPanelHeight.get()}
        setSize={(size) => {
          if (size < scalePx(160)) {
            setBottomPanelOpen(store, false);
            return;
          }
          bottomPanelHeight.set(
            clampBottomPanelHeight(size, mainContentHeight.get()),
          );
        }}
        onResizeEnd={(size) => {
          if (size < scalePx(160)) return;
          writeBottomPanelHeight(
            clampBottomPanelHeight(size, mainContentHeight.get()),
            mainContentHeight.get(),
          );
        }}
      />
      <div className="absolute inset-0 min-h-0 overflow-hidden">
        <Motion.div
          className="absolute inset-x-0 top-0 min-h-0 border-t border-token-border-default bg-token-main-surface-primary"
          style={{ height: heightTemplate }}
        >
          <div className="h-full min-h-0 overflow-hidden [contain:layout_paint]">
            {children}
          </div>
        </Motion.div>
      </div>
    </Motion.div>
  );
}
