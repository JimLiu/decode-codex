// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser device toolbar overlay: viewport preset/dimension controls, zoom, rotate, and resize handles.

import * as React from "react";
import type { CSSProperties, SVGProps } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { useSystemPrefersReducedMotion } from "../utils/reduced-motion-preference";
import { XIcon } from "../icons/x-icon";
import {
  appStoreScope,
  useScopedStore,
  trackScopedAnalyticsEvent,
  browserToolbarActionEvent,
  browserToolbarActionType,
  browserDevicePresets,
  RESPONSIVE_PRESET_ID,
  parseBrowserDevicePreset,
  clampBrowserDeviceWidth,
  clampBrowserDeviceHeight,
  MAX_BROWSER_DEVICE_WIDTH,
  MAX_BROWSER_DEVICE_HEIGHT,
  computeBrowserDeviceResize,
} from "../boundaries/onboarding-commons-externals.facade";

const COMPACT_TOOLBAR_WIDTH = 600;
const ULTRA_COMPACT_TOOLBAR_WIDTH = 460;
const TELEMETRY_DEBOUNCE_MS = 5000;

const ZOOM_PERCENT_PRESETS = [50, 75, 100, 125, 150, 200];

const DIMENSIONS_INPUT_CHANGED_ACTION =
  browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_INPUT_CHANGED;
const DIMENSIONS_DRAG_CHANGED_ACTION =
  browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_DRAG_CHANGED;

const RotateDeviceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z" />
  </svg>
);

type ResizeEdge = "left" | "right" | "bottom" | "bottom-left" | "bottom-right";

interface DeviceToolbarLayout {
  visualBounds: { x: number; y: number; width: number; height: number };
  fitWidth?: number;
  fitHeight?: number;
  scale?: number;
}

interface DeviceToolbarState {
  isEnabled: boolean;
  presetId: string;
  width: number;
  height: number;
}

interface PanelBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ResizeResult {
  width: number;
  height: number;
}

export interface Props {
  currentZoomPercent: number;
  layout: DeviceToolbarLayout | null;
  onClose: () => void;
  onRotate: () => void;
  onStateChange: (
    state: DeviceToolbarState,
    options?: { shouldResetPageZoom?: boolean },
  ) => void;
  onViewportResizeActiveChange: (active: boolean) => void;
  onZoomPercentChange: (zoomPercent: number) => void;
  panelBounds: PanelBounds | null;
  state: DeviceToolbarState;
}

interface ResizeDragState {
  edge: ResizeEdge;
  startHeight: number;
  startPointerX: number;
  startPointerY: number;
  startWidth: number;
}

interface PointerPosition {
  pointerX: number;
  pointerY: number;
}

export function BrowserDeviceToolbarOverlay({
  currentZoomPercent,
  layout,
  onClose,
  onRotate,
  onStateChange,
  onViewportResizeActiveChange,
  onZoomPercentChange,
  panelBounds,
  state,
}: Props) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const prefersReducedMotion = useSystemPrefersReducedMotion();

  const dragRef = React.useRef<ResizeDragState | null>(null);
  const animationFrameRef = React.useRef<number | null>(null);
  const pendingPointerRef = React.useRef<PointerPosition | null>(null);
  const lastResizeRef = React.useRef<ResizeResult | null>(null);
  const telemetryTimeoutRef = React.useRef<number | null>(null);
  const layoutRef = React.useRef(layout);
  const onStateChangeRef = React.useRef(onStateChange);
  const onViewportResizeActiveChangeRef = React.useRef(
    onViewportResizeActiveChange,
  );
  const stateRef = React.useRef(state);

  const [widthInputValue, setWidthInputValue] = React.useState<string | null>(
    null,
  );
  const [heightInputValue, setHeightInputValue] = React.useState<string | null>(
    null,
  );
  const [rotateAnimationKey, setRotateAnimationKey] = React.useState<
    number | null
  >(null);

  layoutRef.current = layout;
  onStateChangeRef.current = onStateChange;
  onViewportResizeActiveChangeRef.current = onViewportResizeActiveChange;
  stateRef.current = state;

  const viewportBounds =
    layout != null && panelBounds != null
      ? {
          height: layout.visualBounds.height,
          left: layout.visualBounds.x - panelBounds.x,
          top: layout.visualBounds.y - panelBounds.y,
          width: layout.visualBounds.width,
        }
      : undefined;

  const edgeHandleStyle: CSSProperties | undefined =
    layout == null
      ? undefined
      : {
          height: layout.visualBounds.height,
          top: 0,
        };

  const resizeEnabled =
    viewportBounds != null && state.presetId === RESPONSIVE_PRESET_ID;

  const trackAction = (action: number) => {
    trackScopedAnalyticsEvent(store, browserToolbarActionEvent, { action });
  };

  const scheduleTrackAction = (action: number) => {
    if (telemetryTimeoutRef.current != null) {
      window.clearTimeout(telemetryTimeoutRef.current);
    }
    telemetryTimeoutRef.current = window.setTimeout(() => {
      telemetryTimeoutRef.current = null;
      trackAction(action);
    }, TELEMETRY_DEBOUNCE_MS);
  };

  React.useLayoutEffect(() => {
    const cleanup = () => {
      const wasResizing =
        animationFrameRef.current != null ||
        dragRef.current != null ||
        pendingPointerRef.current != null;
      if (animationFrameRef.current != null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      dragRef.current = null;
      pendingPointerRef.current = null;
      lastResizeRef.current = null;
      if (wasResizing) {
        onViewportResizeActiveChangeRef.current(false);
      }
    };
    if (!resizeEnabled) {
      cleanup();
      return;
    }
    return cleanup;
  }, [resizeEnabled]);

  if (!state.isEnabled) return null;

  const widthLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.width",
    defaultMessage: "Viewport width",
    description: "Accessible label for browser device toolbar width input",
  });
  const heightLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.height",
    defaultMessage: "Viewport height",
    description: "Accessible label for browser device toolbar height input",
  });
  const zoomLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.zoom",
    defaultMessage: "Browser zoom",
    description: "Accessible label for browser device toolbar zoom select",
  });
  const resizeLeftLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.resizeLeft",
    defaultMessage: "Resize device viewport from the left edge",
    description:
      "Accessible label for the browser device toolbar left resize handle",
  });
  const resizeRightLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.resizeRight",
    defaultMessage: "Resize device viewport from the right edge",
    description:
      "Accessible label for the browser device toolbar right resize handle",
  });
  const resizeBottomLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.resizeBottom",
    defaultMessage: "Resize device viewport from the bottom edge",
    description:
      "Accessible label for the browser device toolbar bottom resize handle",
  });
  const resizeBottomLeftLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.resizeBottomLeft",
    defaultMessage: "Resize device viewport from the bottom-left corner",
    description:
      "Accessible label for the browser device toolbar bottom-left resize handle",
  });
  const resizeBottomRightLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.resizeBottomRight",
    defaultMessage: "Resize device viewport from the bottom-right corner",
    description:
      "Accessible label for the browser device toolbar bottom-right resize handle",
  });
  const closeLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.close",
    defaultMessage: "Exit device toolbar mode",
    description: "Accessible label for closing the browser device toolbar mode",
  });
  const rotateLabel = intl.formatMessage({
    id: "thread.browser.deviceToolbar.rotate",
    defaultMessage: "Rotate viewport",
    description: "Accessible label for rotating the browser device viewport",
  });

  const zoomPercentOptions = ZOOM_PERCENT_PRESETS.includes(currentZoomPercent)
    ? ZOOM_PERCENT_PRESETS
    : [...ZOOM_PERCENT_PRESETS, currentZoomPercent].sort((a, b) => a - b);

  const availableWidth = panelBounds?.width ?? Infinity;
  const isCompact = availableWidth < COMPACT_TOOLBAR_WIDTH;
  const isUltraCompact = availableWidth < ULTRA_COMPACT_TOOLBAR_WIDTH;
  const showZoomSelect = !isCompact;

  const widthFieldValue = widthInputValue ?? String(state.width);
  const heightFieldValue = heightInputValue ?? String(state.height);

  const handlePresetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const preset = parseBrowserDevicePreset(event.currentTarget.value);
    if (preset == null) return;
    const presetChanged =
      preset.id !== state.presetId ||
      (preset.id !== RESPONSIVE_PRESET_ID &&
        (preset.width !== state.width || preset.height !== state.height));
    if (presetChanged) {
      scheduleTrackAction(DIMENSIONS_INPUT_CHANGED_ACTION);
    }
    setWidthInputValue(null);
    setHeightInputValue(null);
    onStateChange(
      preset.id === RESPONSIVE_PRESET_ID
        ? { ...state, presetId: preset.id }
        : {
            ...state,
            presetId: preset.id,
            width: preset.width,
            height: preset.height,
          },
      { shouldResetPageZoom: true },
    );
    event.currentTarget.blur();
  };

  const applyWidth = (rawWidth: number) => {
    const width = clampBrowserDeviceWidth(rawWidth);
    if (state.presetId !== RESPONSIVE_PRESET_ID || state.width !== width) {
      scheduleTrackAction(DIMENSIONS_INPUT_CHANGED_ACTION);
    }
    onStateChange({ ...state, presetId: RESPONSIVE_PRESET_ID, width });
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidthInputValue(event.currentTarget.value);
    const value = event.currentTarget.valueAsNumber;
    if (Number.isNaN(value) || value < 240 || value > 4096) return;
    applyWidth(value);
  };

  const handleWidthBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setWidthInputValue(null);
    const value = event.currentTarget.valueAsNumber;
    if (Number.isNaN(value)) return;
    applyWidth(value);
  };

  const applyHeight = (rawHeight: number) => {
    const height = clampBrowserDeviceHeight(rawHeight);
    if (state.presetId !== RESPONSIVE_PRESET_ID || state.height !== height) {
      scheduleTrackAction(DIMENSIONS_INPUT_CHANGED_ACTION);
    }
    onStateChange({ ...state, presetId: RESPONSIVE_PRESET_ID, height });
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeightInputValue(event.currentTarget.value);
    const value = event.currentTarget.valueAsNumber;
    if (Number.isNaN(value) || value < 160 || value > 4096) return;
    applyHeight(value);
  };

  const handleHeightBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setHeightInputValue(null);
    const value = event.currentTarget.valueAsNumber;
    if (Number.isNaN(value)) return;
    applyHeight(value);
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onZoomPercentChange(Number(event.currentTarget.value));
    event.currentTarget.blur();
  };

  const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  const handleRotate = (event: React.MouseEvent<HTMLButtonElement>) => {
    trackAction(
      browserToolbarActionType.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_ROTATED,
    );
    setWidthInputValue(null);
    setHeightInputValue(null);
    if (!prefersReducedMotion) {
      setRotateAnimationKey((previous) => (previous ?? 0) + 1);
    }
    onRotate();
    event.currentTarget.blur();
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClose();
    event.currentTarget.blur();
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLButtonElement>,
    edge: ResizeEdge,
  ) => {
    event.preventDefault();
    setWidthInputValue(null);
    setHeightInputValue(null);
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      edge,
      startHeight: state.height,
      startPointerX: event.clientX,
      startPointerY: event.clientY,
      startWidth: state.width,
    };
    lastResizeRef.current = null;
    onViewportResizeActiveChange(true);
  };

  const applyPendingResize = () => {
    animationFrameRef.current = null;
    const drag = dragRef.current;
    const pointer = pendingPointerRef.current;
    if (drag == null || pointer == null) return;
    pendingPointerRef.current = null;
    const currentLayout = layoutRef.current;
    const currentState = stateRef.current;
    const resize = computeBrowserDeviceResize({
      drag,
      fitHeight: currentLayout?.fitHeight ?? currentState.height,
      fitWidth: currentLayout?.fitWidth ?? currentState.width,
      pointerX: pointer.pointerX,
      pointerY: pointer.pointerY,
      scale: currentLayout?.scale ?? 1,
    });
    lastResizeRef.current = resize;
    onStateChangeRef.current({
      ...currentState,
      presetId: RESPONSIVE_PRESET_ID,
      ...resize,
    });
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (dragRef.current != null) {
      pendingPointerRef.current = {
        pointerX: event.clientX,
        pointerY: event.clientY,
      };
      animationFrameRef.current ??=
        window.requestAnimationFrame(applyPendingResize);
    }
  };

  const handlePointerUp = () => {
    const drag = dragRef.current;
    const wasDragging = drag != null;
    if (animationFrameRef.current != null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      applyPendingResize();
    }
    const resize = lastResizeRef.current;
    dragRef.current = null;
    pendingPointerRef.current = null;
    lastResizeRef.current = null;
    if (wasDragging) {
      if (
        resize != null &&
        drag != null &&
        (resize.width !== drag.startWidth || resize.height !== drag.startHeight)
      ) {
        scheduleTrackAction(DIMENSIONS_DRAG_CHANGED_ACTION);
      }
      onViewportResizeActiveChange(false);
    }
  };

  const dimensionsLabel = (
    <label
      className={classNames(
        "max-w-28 shrink min-w-0 truncate font-medium",
        isUltraCompact && "sr-only",
      )}
      htmlFor="browser-device-preset"
    >
      <FormattedMessage
        id="thread.browser.deviceToolbar.dimensions"
        defaultMessage="Dimensions:"
        description="Label for browser device toolbar viewport dimensions"
      />
    </label>
  );

  const presetSelect = (
    <select
      id="browser-device-preset"
      value={state.presetId}
      onChange={handlePresetChange}
      className={classNames(
        "h-7 min-w-[100px] cursor-interaction truncate rounded-md border border-transparent bg-transparent px-1 text-sm font-medium text-token-description-foreground outline-none hover:bg-token-list-hover-background focus:bg-token-list-hover-background",
        isCompact ? "w-[100px] max-w-[100px]" : "max-w-44",
      )}
    >
      {browserDevicePresets.map((preset: { id: string }) => (
        <option key={preset.id} value={preset.id}>
          <BrowserDevicePresetLabel presetId={preset.id} />
        </option>
      ))}
    </select>
  );

  const dimensionInputs = (
    <div className="flex shrink-0 items-center gap-1">
      <input
        aria-label={widthLabel}
        className="h-6 w-[72px] rounded-lg border border-transparent bg-token-foreground/5 px-2 text-center font-semibold text-token-foreground tabular-nums outline-none hover:bg-token-list-hover-background focus:border-token-focus-border focus:bg-token-bg-primary"
        min={240}
        max={MAX_BROWSER_DEVICE_WIDTH}
        onBlur={handleWidthBlur}
        onChange={handleWidthChange}
        onFocus={() => setWidthInputValue(String(state.width))}
        onKeyDown={handleInputEnter}
        type="number"
        value={widthFieldValue}
      />
      <span className="text-sm text-token-description-foreground">
        <FormattedMessage
          id="thread.browser.deviceToolbar.dimensionSeparator"
          defaultMessage="×"
          description="Separator between browser device toolbar viewport width and height"
        />
      </span>
      <input
        aria-label={heightLabel}
        className="h-6 w-[72px] rounded-lg border border-transparent bg-token-foreground/5 px-2 text-center font-semibold text-token-foreground tabular-nums outline-none hover:bg-token-list-hover-background focus:border-token-focus-border focus:bg-token-bg-primary"
        min={160}
        max={MAX_BROWSER_DEVICE_HEIGHT}
        onBlur={handleHeightBlur}
        onChange={handleHeightChange}
        onFocus={() => setHeightInputValue(String(state.height))}
        onKeyDown={handleInputEnter}
        type="number"
        value={heightFieldValue}
      />
    </div>
  );

  const rotateButton = (
    <button
      type="button"
      aria-label={rotateLabel}
      className="flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-description-foreground outline-none hover:bg-token-list-hover-background hover:text-token-foreground focus:bg-token-list-hover-background focus:text-token-foreground"
      onClick={handleRotate}
    >
      <span
        key={`rotate-device-icon-${rotateAnimationKey ?? 0}`}
        className={classNames(
          "inline-flex items-center justify-center",
          rotateAnimationKey != null && "browser-sidebar-device-rotate-click",
        )}
        onAnimationEnd={() => {
          setRotateAnimationKey(null);
        }}
      >
        <RotateDeviceIcon className="size-4" />
      </span>
    </button>
  );

  const zoomSelect = (
    <select
      aria-label={zoomLabel}
      className="h-7 shrink-0 cursor-interaction rounded-md border border-transparent bg-transparent px-1 text-sm font-medium text-token-description-foreground outline-none hover:bg-token-list-hover-background focus:bg-token-list-hover-background"
      onChange={handleZoomChange}
      value={currentZoomPercent}
    >
      {zoomPercentOptions.map((zoomPercent) => (
        <option key={zoomPercent} value={zoomPercent}>
          <FormattedMessage
            id="thread.browser.zoomPercent"
            defaultMessage={"{zoomPercent}%"}
            description="Zoom percentage shown in in-app browser controls"
            values={{ zoomPercent }}
          />
        </option>
      ))}
    </select>
  );

  return (
    <>
      <div
        className="absolute inset-x-0 top-0 z-30 flex items-center gap-2 border-b border-token-border bg-token-bg-secondary px-2.5 text-sm text-token-foreground"
        style={{ height: 34 }}
      >
        {dimensionsLabel}
        {presetSelect}
        {dimensionInputs}
        {rotateButton}
        {showZoomSelect ? zoomSelect : null}
        <button
          type="button"
          aria-label={closeLabel}
          className="ml-auto flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-token-description-foreground outline-none hover:bg-token-list-hover-background hover:text-token-foreground focus:bg-token-list-hover-background focus:text-token-foreground"
          onClick={handleClose}
        >
          <XIcon className="icon-xs" />
        </button>
      </div>
      {resizeEnabled ? (
        <div
          className="pointer-events-none absolute z-40"
          style={viewportBounds}
        >
          <BrowserDeviceEdgeResizeHandle
            className="-left-5 w-5 cursor-ew-resize"
            edge="left"
            label={resizeLeftLabel}
            style={edgeHandleStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
          <BrowserDeviceEdgeResizeHandle
            className="-right-5 w-5 cursor-ew-resize"
            edge="right"
            label={resizeRightLabel}
            style={edgeHandleStyle}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
          <BrowserDeviceEdgeResizeHandle
            className="top-full -right-5 -left-5 h-5 cursor-ns-resize"
            edge="bottom"
            label={resizeBottomLabel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
          <BrowserDeviceCornerResizeHandle
            className="top-full -left-5 cursor-nesw-resize"
            edge="bottom-left"
            label={resizeBottomLeftLabel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
          <BrowserDeviceCornerResizeHandle
            className="top-full -right-5 cursor-nwse-resize"
            edge="bottom-right"
            label={resizeBottomRightLabel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          />
        </div>
      ) : null}
    </>
  );
}

interface BrowserDevicePresetLabelProps {
  presetId: string;
}

function BrowserDevicePresetLabel({ presetId }: BrowserDevicePresetLabelProps) {
  switch (presetId) {
    case RESPONSIVE_PRESET_ID:
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.responsive"
          defaultMessage="Responsive"
          description="Option label for responsive browser device toolbar sizing"
        />
      );
    case "4k":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.4k"
          defaultMessage="4K"
          description="Option label for a 4K browser device toolbar preset"
        />
      );
    case "laptop-l":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.laptopLarge"
          defaultMessage="Laptop L"
          description="Option label for a large laptop browser device toolbar preset"
        />
      );
    case "laptop":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.laptop"
          defaultMessage="Laptop"
          description="Option label for a laptop browser device toolbar preset"
        />
      );
    case "surface-pro-7":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.surfacePro7"
          defaultMessage="Surface Pro 7"
          description="Option label for a Surface Pro 7 browser device toolbar preset"
        />
      );
    case "ipad-air":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.ipadAir"
          defaultMessage="iPad Air"
          description="Option label for an iPad Air browser device toolbar preset"
        />
      );
    case "ipad-mini":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.ipadMini"
          defaultMessage="iPad Mini"
          description="Option label for an iPad Mini browser device toolbar preset"
        />
      );
    case "surface-duo":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.surfaceDuo"
          defaultMessage="Surface Duo"
          description="Option label for a Surface Duo browser device toolbar preset"
        />
      );
    case "iphone-15-pro-max":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.iphone15ProMax"
          defaultMessage="iPhone 15 Pro Max"
          description="Option label for an iPhone 15 Pro Max browser device toolbar preset"
        />
      );
    case "pixel-8":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.pixel8"
          defaultMessage="Pixel 8"
          description="Option label for a Pixel 8 browser device toolbar preset"
        />
      );
    case "iphone-15-pro":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.iphone15Pro"
          defaultMessage="iPhone 15 Pro"
          description="Option label for an iPhone 15 Pro browser device toolbar preset"
        />
      );
    case "samsung-galaxy-s24-ultra":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.samsungGalaxyS24Ultra"
          defaultMessage="Samsung Galaxy S24 Ultra"
          description="Option label for a Samsung Galaxy S24 Ultra browser device toolbar preset"
        />
      );
    case "iphone-se":
      return (
        <FormattedMessage
          id="thread.browser.deviceToolbar.iphoneSe"
          defaultMessage="iPhone SE"
          description="Option label for an iPhone SE browser device toolbar preset"
        />
      );
    default:
      return null;
  }
}

interface ResizeHandleProps {
  className?: string;
  edge: ResizeEdge;
  label: string;
  style?: CSSProperties;
  onPointerDown: (
    event: React.PointerEvent<HTMLButtonElement>,
    edge: ResizeEdge,
  ) => void;
  onPointerMove: (event: React.PointerEvent<HTMLButtonElement>) => void;
  onPointerUp: (event: React.PointerEvent<HTMLButtonElement>) => void;
}

function BrowserDeviceCornerResizeHandle({
  className,
  edge,
  label,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: ResizeHandleProps) {
  const buttonClassName = classNames(
    "pointer-events-auto absolute z-10 flex size-5 cursor-interaction items-center justify-center bg-[var(--gray-600)] outline-none hover:bg-[var(--gray-550)]",
    className,
  );
  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) =>
    onPointerDown(event, edge);
  const iconClassName = classNames(
    "size-5",
    edge === "bottom-left" && "-scale-x-100",
  );
  const icon = (
    <svg
      aria-hidden="true"
      className={iconClassName}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M6 11.75L11.75 6"
        stroke="var(--gray-300)"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        d="M7 15.5L15.5 7"
        stroke="var(--gray-300)"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={-1}
      className={buttonClassName}
      onPointerDown={handlePointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onLostPointerCapture={onPointerUp}
    >
      {icon}
    </button>
  );
}

function BrowserDeviceEdgeResizeHandle({
  className,
  edge,
  label,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  style,
}: ResizeHandleProps) {
  const isBottom = edge === "bottom";
  const buttonClassName = classNames(
    "pointer-events-auto absolute flex cursor-interaction items-center justify-center bg-[var(--gray-600)] outline-none hover:bg-[var(--gray-550)]",
    className,
  );
  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) =>
    onPointerDown(event, edge);
  const gripContainerClassName = classNames(
    "flex items-center justify-center gap-0.5",
    isBottom ? "h-5 w-9 flex-col" : "h-9 w-5",
  );
  const gripClassName = classNames(
    "rounded-full bg-[var(--gray-300)]",
    isBottom ? "h-0.5 w-8" : "h-8 w-0.5",
  );
  const grip = (
    <span className={gripContainerClassName}>
      <span className={gripClassName} />
      <span className={gripClassName} />
    </span>
  );
  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={-1}
      className={buttonClassName}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onLostPointerCapture={onPointerUp}
    >
      {grip}
    </button>
  );
}
