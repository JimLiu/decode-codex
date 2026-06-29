// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pointer-driven resize handle for app-shell panels. Tracks a pointer drag along
// one edge, converts screen coordinates to device-independent sizes, reports
// live size changes, and resets to a default size on double-click.
import { useEffect, useEffectEvent, useRef, useState } from "react";
import clsx from "clsx";
import { useDevicePixelRatio } from "../boundaries/onboarding-commons-externals.facade";

export type ResizeEdge = "left" | "right" | "top" | "bottom";

interface ResizeDragState {
  didMove: boolean;
  startPosition: number;
  startSize: number;
}

export interface ResizeHandleProps {
  disabled?: boolean;
  edge?: ResizeEdge;
  defaultSize: number;
  getCurrentSize: () => number;
  onResizeEnd?: (size: number) => void;
  onResizingChange?: (isResizing: boolean) => void;
  setSize: (size: number) => void;
}

interface PointerPoint {
  x: number;
  y: number;
}

function computeResizeSize(
  edge: ResizeEdge,
  point: PointerPoint,
  state: ResizeDragState,
): number {
  const delta =
    (edge === "left" || edge === "right" ? point.x : point.y) -
    state.startPosition;
  switch (edge) {
    case "bottom":
    case "right":
      return state.startSize + delta;
    case "left":
    case "top":
      return state.startSize - delta;
  }
}

export function ResizeHandle({
  disabled = false,
  edge = "right",
  defaultSize,
  getCurrentSize,
  onResizeEnd,
  onResizingChange,
  setSize,
}: ResizeHandleProps) {
  const devicePixelRatio = useDevicePixelRatio();
  const [isResizing, setIsResizing] = useState(false);
  const dragStateRef = useRef<ResizeDragState | null>(null);
  const isHorizontal = edge === "left" || edge === "right";

  const finishResize = useEffectEvent(() => {
    dragStateRef.current = null;
    setIsResizing(false);
    onResizingChange?.(false);
  });
  const cancelResizeIfDisabled = useEffectEvent(() => {
    if (!disabled || dragStateRef.current == null) return;
    finishResize();
  });

  const toPoint = (event: PointerEvent): PointerPoint => ({
    x: event.clientX / devicePixelRatio,
    y: event.clientY / devicePixelRatio,
  });
  const axisValue = (point: PointerPoint) => (isHorizontal ? point.x : point.y);

  useEffect(() => {
    if (!isResizing || disabled) return;
    const handlePointerMove = (event: PointerEvent) => {
      event.preventDefault();
      const dragState = dragStateRef.current;
      if (dragState == null) return;
      const point = toPoint(event);
      if (axisValue(point) !== dragState.startPosition) {
        dragState.didMove = true;
      }
      setSize(computeResizeSize(edge, point, dragState));
    };
    const handlePointerUp = (event: PointerEvent) => {
      event.preventDefault();
      const dragState = dragStateRef.current;
      if (dragState?.didMove === true) {
        const nextSize = computeResizeSize(edge, toPoint(event), dragState);
        setSize(nextSize);
        onResizeEnd?.(nextSize);
      }
      finishResize();
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      cancelResizeIfDisabled();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    disabled,
    edge,
    isHorizontal,
    isResizing,
    onResizeEnd,
    setSize,
    devicePixelRatio,
  ]);

  const handlePointerDown = (event: React.PointerEvent) => {
    if (disabled || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragStateRef.current = {
      didMove: false,
      startPosition: axisValue({
        x: event.clientX / devicePixelRatio,
        y: event.clientY / devicePixelRatio,
      }),
      startSize: getCurrentSize(),
    };
    setIsResizing(true);
    onResizingChange?.(true);
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    if (disabled || event.detail !== 2) return;
    event.preventDefault();
    dragStateRef.current = null;
    setIsResizing(false);
    onResizingChange?.(false);
    setSize(defaultSize);
    onResizeEnd?.(defaultSize);
  };

  return (
    <ResizeHandleSurface
      disabled={disabled}
      edge={edge}
      isResizing={isResizing}
      onClick={handleDoubleClick}
      onPointerDown={handlePointerDown}
    />
  );
}

interface ResizeHandleSurfaceProps {
  disabled: boolean;
  edge: ResizeEdge;
  isResizing: boolean;
  onClick: (event: React.MouseEvent) => void;
  onPointerDown: (event: React.PointerEvent) => void;
}

function ResizeHandleSurface({
  disabled,
  edge,
  isResizing,
  onClick,
  onPointerDown,
}: ResizeHandleSurfaceProps) {
  const isHorizontal = edge === "left" || edge === "right";
  const containerClassName = clsx(
    "group absolute flex touch-none select-none",
    disabled && "pointer-events-none",
    edge === "left" ? "z-40" : "z-20",
    edge === "right" && "-top-toolbar right-0 bottom-0 w-4 translate-x-2",
    edge === "left" && "top-0 bottom-0 left-0 w-4 -translate-x-2",
    edge === "top" && "top-0 right-0 left-0 h-4 -translate-y-2",
    edge === "bottom" && "right-0 bottom-0 left-0 h-4 translate-y-2",
    !disabled &&
      (isHorizontal
        ? "cursor-col-resize active:cursor-col-resize"
        : "cursor-row-resize active:cursor-row-resize"),
  );
  const lineClassName = clsx(
    "sidebar-resize-handle-line pointer-events-none m-auto opacity-0",
    isHorizontal
      ? "h-full w-px bg-gradient-to-b from-transparent via-token-foreground/25 to-transparent"
      : "h-px w-full bg-gradient-to-r from-transparent via-token-foreground/25 to-transparent",
    isResizing
      ? "opacity-100"
      : "group-hover:opacity-100 group-active:opacity-100",
  );
  return (
    <div
      role="separator"
      aria-disabled={disabled || undefined}
      aria-orientation={isHorizontal ? "vertical" : "horizontal"}
      className={containerClassName}
      onClick={onClick}
      onPointerDown={onPointerDown}
    >
      <div className={lineClassName} />
    </div>
  );
}
