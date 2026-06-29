// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resizable left sidebar shell. Dragging the right-edge handle below the minimum
// width collapses the sidebar; otherwise it persists the rounded width and keeps
// the sidebar marked visible.
import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import { ResizeHandle } from "./resize-handle";
import { setSidebarOpen } from "./app-shell-state";
import {
  appStoreScope,
  leftPanelOpacitySignal,
  leftPanelWidthSignal,
  motion as Motion,
  motionTemplate,
  persistLeftPanelWidth,
  roundLeftPanelWidth,
  scalePx,
  sidebarPeekActiveSignal,
  sidebarVisibleSignal,
  useAppScope,
  useAppShellLayout,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

export interface LeftPanelProps {
  children?: ReactNode;
  isResizing: boolean;
  onResizingChange?: (isResizing: boolean) => void;
  paddingTop?: CSSProperties["paddingTop"];
}

export function LeftPanel({
  children,
  isResizing,
  onResizingChange,
  paddingTop,
}: LeftPanelProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const { leftPanelAnimatedWidth, leftPanelWidth } = useAppShellLayout();
  const isPeekActive = useSignalValue<boolean>(sidebarPeekActiveSignal);
  const widthTemplate = motionTemplate`${leftPanelWidth}px`;
  return (
    <Motion.aside
      className={clsx(
        "app-shell-left-panel pointer-events-auto relative flex overflow-visible browser:bg-token-main-surface-primary",
        isResizing && "cursor-col-resize",
      )}
      style={{ width: leftPanelAnimatedWidth, paddingTop }}
    >
      <Motion.div
        className="max-w-full overflow-hidden"
        style={{
          minWidth: widthTemplate,
          width: widthTemplate,
          opacity: useSignalValue(leftPanelOpacitySignal),
        }}
      >
        {children}
      </Motion.div>
      <ResizeHandle
        disabled={isPeekActive && !isResizing}
        defaultSize={300}
        getCurrentSize={() => leftPanelWidth.get()}
        onResizingChange={onResizingChange}
        setSize={(size) => {
          const shouldBeVisible = size >= scalePx(240);
          if (store.get(sidebarVisibleSignal) !== shouldBeVisible) {
            setSidebarOpen(store, shouldBeVisible);
          }
          if (!shouldBeVisible) return;
          const roundedWidth = roundLeftPanelWidth(size);
          store.set(leftPanelWidthSignal, roundedWidth);
          leftPanelWidth.set(roundedWidth);
        }}
        onResizeEnd={(size) => {
          if (size < scalePx(240)) return;
          persistLeftPanelWidth(roundLeftPanelWidth(size));
        }}
      />
    </Motion.aside>
  );
}
