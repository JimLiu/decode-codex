// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Appshot capture tray + controls for the composer.
//
// `useAppshotCaptureTray` owns the client-side state for in-flight appshot
// captures: the list of pending capture placeholders shown in the attachment
// tray, the per-request transition-animation metadata, and the geometry math
// that tells the native capture animation where the attachment pill will land
// (`getAnimationDestinationFrame`). `AppshotCaptureControls` is a headless
// component that binds the "appshot-shortcut" keyboard shortcut to the composer
// input and, when triggered, checks host availability, resolves the frontmost
// window, gates on the one-time intro, and kicks off a capture.
//
// The native capture pipeline (frontmost-window IPC query, the capture-start
// orchestration, and the intro dialog) lives outside this chunk; the pieces
// that are not exported by the onboarding-commons facade are reconstructed here
// as minimal typed collaborators and flagged for follow-up.
import { useCallback, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { appshotAvailabilityByHost } from "../features/appshot";
import {
  composerScope,
  showComposerToast,
  useAtomFamily,
  useComposerIntl,
  useDevicePixelRatio,
  useNamedKeyboardShortcut,
  useScopeStore,
} from "../boundaries/onboarding-commons-externals.facade";

// ── shared types ────────────────────────────────────────────────────────────
type AttachmentTrayGrowthDirection = "up" | "down";

interface AppshotTargetWindow {
  bundleIdentifier: string;
  name: string;
  windowTitle?: string | null;
}

interface RgbColor {
  blue: number;
  green: number;
  red: number;
}

interface RgbaColor extends RgbColor {
  alpha: number;
}

interface PendingAppshotCapture {
  requestId: string;
  transitionSnapshotHeight: number | null;
  transitionSnapshotHeightResolved: boolean;
  transitionSpringDampingFraction: number | null;
  transitionSpringResponse: number | null;
}

interface AppshotCaptureAnimationMetadata {
  transitionSnapshotHeight?: number | null;
  transitionSpringDampingFraction?: number | null;
  transitionSpringResponse?: number | null;
}

interface AppshotCaptureDestinationFrame {
  backgroundColor: RgbColor;
  cornerRadius: number;
  height: number;
  primaryTextColor: RgbColor;
  transitionSnapshotScale: number;
  width: number;
  x: number;
  y: number;
}

export interface UseAppshotCaptureTrayOptions {
  attachmentTrayGrowthDirection: AttachmentTrayGrowthDirection;
  imageAttachmentCount: number;
  appshotContextCount: number;
}

export interface UseAppshotCaptureTrayResult {
  attachmentsContainerRef: React.RefObject<HTMLDivElement | null>;
  clearPendingCaptures: () => void;
  getAnimationDestinationFrame: (
    target: AppshotTargetWindow,
  ) => AppshotCaptureDestinationFrame | null;
  handleCaptureAttached: (requestId: string | null) => number;
  handleCaptureAnimationDuration: (
    requestId: string,
    metadata: AppshotCaptureAnimationMetadata | null,
  ) => void;
  handleCaptureSettled: (requestId: string, keepPlaceholder?: boolean) => void;
  handleCaptureStarted: (requestId: string) => void;
  hasPendingCaptures: boolean;
  pendingCaptures: PendingAppshotCapture[];
}

// Layout constants used to project the destination frame of the capture
// animation onto the attachment tray (all in CSS px, later scaled by DPR).
const IMAGE_ATTACHMENT_SLOT_WIDTH = 88;
const APPSHOT_CONTEXT_SLOT_WIDTH = 240;
const CAPTURE_FRAME_HEIGHT = 140;
const CAPTURE_FRAME_WIDTH = 232;

// ── theme-color sampling (for the capture transition snapshot) ──────────────
const WHITE_COLOR: RgbaColor = { alpha: 1, blue: 255, green: 255, red: 255 };

function clampUnitInterval(value: number): number {
  return Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 1;
}

function clampColorByte(value: number): number {
  return Number.isFinite(value)
    ? Math.min(255, Math.max(0, Math.round(value)))
    : 0;
}

function parseColorChannel(
  raw: string | undefined,
  inputScale: number,
): number {
  if (raw == null) return 0;
  if (raw.endsWith("%")) return (Number.parseFloat(raw) / 100) * 255;
  const value = Number.parseFloat(raw);
  return inputScale === 1 ? value * 255 : value;
}

function parseAlphaChannel(raw: string | undefined): number {
  if (raw == null) return 1;
  return clampUnitInterval(
    Number.parseFloat(raw) / (raw.endsWith("%") ? 100 : 1),
  );
}

function parseRgbColor(cssColor: string): RgbaColor | null {
  const inner = cssColor.match(/^rgba?\((.*)\)$/i)?.[1];
  if (inner == null) return null;
  const [channelList, trailingAlpha] = inner.includes("/")
    ? inner.split("/").map((part) => part.trim())
    : [inner, undefined];
  const channels = channelList
    .split(/[,\s]+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const legacyAlpha =
    trailingAlpha == null && channels.length >= 4 ? channels.pop() : undefined;
  if (channels.length < 3) return null;
  return {
    alpha: parseAlphaChannel(trailingAlpha ?? legacyAlpha),
    blue: parseColorChannel(channels[2], 255),
    green: parseColorChannel(channels[1], 255),
    red: parseColorChannel(channels[0], 255),
  };
}

function parseSrgbColor(cssColor: string): RgbaColor | null {
  const inner = cssColor.match(/^color\(\s*srgb\s+(.*)\)$/i)?.[1];
  if (inner == null) return null;
  const [channelList, trailingAlpha] = inner.includes("/")
    ? inner.split("/").map((part) => part.trim())
    : [inner, undefined];
  const channels = channelList
    .split(/\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (channels.length < 3) return null;
  return {
    alpha: parseAlphaChannel(trailingAlpha),
    blue: parseColorChannel(channels[2], 1),
    green: parseColorChannel(channels[1], 1),
    red: parseColorChannel(channels[0], 1),
  };
}

function parseCssColor(cssColor: string): RgbaColor | null {
  const normalized = cssColor.trim().toLowerCase();
  if (normalized.length === 0 || normalized === "transparent") return null;
  return parseRgbColor(normalized) ?? parseSrgbColor(normalized);
}

function compositeColors(source: RgbaColor, backdrop: RgbaColor): RgbaColor {
  const alpha = source.alpha + backdrop.alpha * (1 - source.alpha);
  if (alpha <= 0) return { ...WHITE_COLOR, alpha: 0 };
  return {
    alpha,
    blue:
      (source.blue * source.alpha +
        backdrop.blue * backdrop.alpha * (1 - source.alpha)) /
      alpha,
    green:
      (source.green * source.alpha +
        backdrop.green * backdrop.alpha * (1 - source.alpha)) /
      alpha,
    red:
      (source.red * source.alpha +
        backdrop.red * backdrop.alpha * (1 - source.alpha)) /
      alpha,
  };
}

function toIntegerRgb(color: RgbaColor): RgbColor {
  return {
    blue: clampColorByte(color.blue),
    green: clampColorByte(color.green),
    red: clampColorByte(color.red),
  };
}

function resolveOpaqueBackgroundColor(
  element: Element,
  seedColor: RgbaColor | null,
): RgbaColor {
  let accumulated = seedColor ?? { ...WHITE_COLOR, alpha: 0 };
  let ancestor = element.parentElement;
  while (accumulated.alpha < 1 && ancestor != null) {
    const ancestorBackground = parseCssColor(
      window.getComputedStyle(ancestor).backgroundColor,
    );
    if (ancestorBackground != null && ancestorBackground.alpha > 0) {
      accumulated = compositeColors(accumulated, ancestorBackground);
    }
    ancestor = ancestor.parentElement;
  }
  if (accumulated.alpha < 1)
    accumulated = compositeColors(accumulated, WHITE_COLOR);
  return accumulated;
}

function readComposerThemeColors(container: HTMLElement): {
  backgroundColor: RgbColor;
  primaryTextColor: RgbColor;
} {
  const probe = document.createElement("div");
  probe.className = "text-token-text-primary";
  probe.style.height = "1px";
  probe.style.left = "0";
  probe.style.pointerEvents = "none";
  probe.style.position = "absolute";
  probe.style.top = "0";
  probe.style.visibility = "hidden";
  probe.style.width = "1px";
  container.appendChild(probe);
  try {
    const computed = window.getComputedStyle(probe);
    const background = resolveOpaqueBackgroundColor(
      probe,
      parseCssColor(computed.backgroundColor),
    );
    const primaryText = compositeColors(
      parseCssColor(computed.color) ?? WHITE_COLOR,
      background,
    );
    return {
      backgroundColor: toIntegerRgb(background),
      primaryTextColor: toIntegerRgb(primaryText),
    };
  } finally {
    probe.remove();
  }
}

function getCaptureRequestId(capture: PendingAppshotCapture): string {
  return capture.requestId;
}

// Approximate on-screen height of the target window's title chrome, used to
// nudge the destination frame upward when the tray grows upward.
function measureTargetWindowTitleHeight(target: AppshotTargetWindow): number {
  const label = target.windowTitle?.trim() || target.name.trim();
  if (label.length === 0) return CAPTURE_FRAME_HEIGHT;
  const devicePixelRatio = Math.max(window.devicePixelRatio || 1, 1);
  return 144 + Math.ceil(16.021484375 * devicePixelRatio) / devicePixelRatio;
}

export function useAppshotCaptureTray(
  options: UseAppshotCaptureTrayOptions,
): UseAppshotCaptureTrayResult {
  const {
    attachmentTrayGrowthDirection,
    imageAttachmentCount,
    appshotContextCount,
  } = options;

  const [pendingCaptures, setPendingCaptures] = useState<
    PendingAppshotCapture[]
  >([]);
  const devicePixelRatio = useDevicePixelRatio();

  const captureRequestOrderRef = useRef<string[]>([]);
  const attachedRequestOrderRef = useRef<string[]>([]);
  const pendingCapturesRef = useRef<PendingAppshotCapture[]>([]);
  const pendingAttachRequestIdRef = useRef<string | null>(null);
  const attachmentsContainerRef = useRef<HTMLDivElement | null>(null);

  const getAnimationDestinationFrame = useCallback(
    (target: AppshotTargetWindow): AppshotCaptureDestinationFrame | null => {
      const container = attachmentsContainerRef.current;
      if (container == null) return null;

      const containerRect = container.getBoundingClientRect();
      const containerStyle = window.getComputedStyle(container);
      const attachmentsRow = container.querySelector(
        "[data-composer-attachments-row]",
      );
      const pendingRequestIds =
        pendingCapturesRef.current.map(getCaptureRequestId);
      const pendingAttachRequestId = pendingAttachRequestIdRef.current;
      const attachSlotIndex =
        pendingAttachRequestId == null
          ? 0
          : Math.max(0, pendingRequestIds.indexOf(pendingAttachRequestId));
      pendingAttachRequestIdRef.current = null;

      const attachPlaceholderRect =
        (pendingAttachRequestId == null
          ? null
          : (Array.from(
              container.querySelectorAll(
                "[data-pending-appshot-capture-request-id]",
              ),
            ).find(
              (element) =>
                (element as HTMLElement).dataset
                  .pendingAppshotCaptureRequestId === pendingAttachRequestId,
            ) ?? null)
        )?.getBoundingClientRect() ?? null;

      const imageAttachmentsOffset =
        imageAttachmentCount * IMAGE_ATTACHMENT_SLOT_WIDTH * devicePixelRatio;
      const slotWidth = APPSHOT_CONTEXT_SLOT_WIDTH * devicePixelRatio;
      const attachSlotOffset = attachSlotIndex * slotWidth;
      const appshotContextsOffset = appshotContextCount * slotWidth;
      const projectedLeft =
        containerRect.left +
        Number.parseFloat(containerStyle.paddingLeft || "0") *
          devicePixelRatio -
        (attachmentsRow?.scrollLeft ?? 0) * devicePixelRatio +
        imageAttachmentsOffset +
        appshotContextsOffset +
        attachSlotOffset;
      const projectedTop =
        containerRect.top +
        Number.parseFloat(containerStyle.paddingTop || "0") * devicePixelRatio;

      const themeColors = readComposerThemeColors(container);
      const destinationX = attachPlaceholderRect?.left ?? projectedLeft;
      const attachmentsRowHeight =
        attachmentsRow?.getBoundingClientRect().height ?? 0;
      const upwardOffset =
        attachmentTrayGrowthDirection === "up"
          ? Math.max(
              0,
              measureTargetWindowTitleHeight(target) * devicePixelRatio -
                attachmentsRowHeight,
            )
          : 0;

      return {
        backgroundColor: themeColors.backgroundColor,
        cornerRadius: 0,
        height: CAPTURE_FRAME_HEIGHT * devicePixelRatio,
        primaryTextColor: themeColors.primaryTextColor,
        transitionSnapshotScale: devicePixelRatio,
        width: CAPTURE_FRAME_WIDTH * devicePixelRatio,
        x: destinationX,
        y: projectedTop - upwardOffset,
      };
    },
    [
      appshotContextCount,
      attachmentTrayGrowthDirection,
      imageAttachmentCount,
      devicePixelRatio,
    ],
  );

  const handleCaptureStarted = useCallback((requestId: string): void => {
    if (
      pendingCapturesRef.current.some(
        (capture) => capture.requestId === requestId,
      )
    ) {
      pendingAttachRequestIdRef.current = requestId;
      return;
    }
    flushSync(() => {
      const current = pendingCapturesRef.current;
      if (current.some((capture) => capture.requestId === requestId)) {
        pendingAttachRequestIdRef.current = requestId;
        return;
      }
      pendingAttachRequestIdRef.current = requestId;
      captureRequestOrderRef.current = [
        requestId,
        ...captureRequestOrderRef.current,
      ];
      const next: PendingAppshotCapture[] = [
        {
          requestId,
          transitionSnapshotHeight: null,
          transitionSnapshotHeightResolved: false,
          transitionSpringDampingFraction: null,
          transitionSpringResponse: null,
        },
        ...current,
      ];
      pendingCapturesRef.current = next;
      setPendingCaptures(next);
    });
  }, []);

  const handleCaptureAttached = useCallback(
    (requestId: string | null): number => {
      if (requestId == null) return 0;
      const requestPosition = captureRequestOrderRef.current.indexOf(requestId);
      if (requestPosition === -1) return 0;
      const precedingAttachedCount = attachedRequestOrderRef.current.filter(
        (attachedRequestId) => {
          const position =
            captureRequestOrderRef.current.indexOf(attachedRequestId);
          return position !== -1 && position < requestPosition;
        },
      ).length;
      if (!attachedRequestOrderRef.current.includes(requestId)) {
        attachedRequestOrderRef.current = [
          requestId,
          ...attachedRequestOrderRef.current,
        ];
      }
      return precedingAttachedCount;
    },
    [],
  );

  const handleCaptureAnimationDuration = useCallback(
    (
      requestId: string,
      metadata: AppshotCaptureAnimationMetadata | null,
    ): void => {
      flushSync(() => {
        const next = pendingCapturesRef.current.map((capture) =>
          capture.requestId === requestId
            ? {
                ...capture,
                transitionSnapshotHeight:
                  metadata?.transitionSnapshotHeight ?? null,
                transitionSnapshotHeightResolved: true,
                transitionSpringDampingFraction:
                  metadata?.transitionSpringDampingFraction ?? null,
                transitionSpringResponse:
                  metadata?.transitionSpringResponse ?? null,
              }
            : capture,
        );
        pendingCapturesRef.current = next;
        setPendingCaptures(next);
      });
    },
    [],
  );

  const handleCaptureSettled = useCallback(
    (requestId: string, keepPlaceholder?: boolean): void => {
      if (pendingAttachRequestIdRef.current === requestId) {
        pendingAttachRequestIdRef.current = null;
      }
      if (!keepPlaceholder) {
        captureRequestOrderRef.current = captureRequestOrderRef.current.filter(
          (id) => id !== requestId,
        );
        attachedRequestOrderRef.current =
          attachedRequestOrderRef.current.filter((id) => id !== requestId);
      }
      setPendingCaptures((current) => {
        const next = current.filter(
          (capture) => capture.requestId !== requestId,
        );
        pendingCapturesRef.current = next;
        return next;
      });
    },
    [],
  );

  const clearPendingCaptures = useCallback((): void => {
    attachedRequestOrderRef.current = [];
    captureRequestOrderRef.current = [];
    pendingCapturesRef.current = [];
    pendingAttachRequestIdRef.current = null;
    setPendingCaptures([]);
  }, []);

  return {
    attachmentsContainerRef,
    clearPendingCaptures,
    getAnimationDestinationFrame,
    handleCaptureAttached,
    handleCaptureAnimationDuration,
    handleCaptureSettled,
    handleCaptureStarted,
    hasPendingCaptures: pendingCaptures.length > 0,
    pendingCaptures,
  };
}

// ── AppshotCaptureControls ──────────────────────────────────────────────────
interface StartAppshotCaptureOptions {
  getAnimationDestinationFrame: (
    target: AppshotTargetWindow,
  ) => AppshotCaptureDestinationFrame | null;
  getAttachmentGen: () => number;
  onAddAppshotContext: (context: unknown, requestId?: string) => void;
  onCaptureAnimationDuration: (
    requestId: string,
    metadata: AppshotCaptureAnimationMetadata | null,
  ) => void;
  onCaptureSettled: (requestId: string, keepPlaceholder?: boolean) => void;
  onCaptureStarted: (requestId: string) => void;
  source: "hotkey";
  target: AppshotTargetWindow;
}

interface AppshotLogPayload {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
}

// Minimal reconstruction: the real logger is the shared product logger scoped
// to the appshot feature. Reconstructed as a no-op sink to keep the module
// self-contained; see notes / newFacadeExports.
const appshotCaptureLogger = {
  info(_message: string, _payload?: AppshotLogPayload): void {},
  error(_message: string, _payload?: AppshotLogPayload): void {},
};

// Minimal reconstruction of the react-query hook that resolves the frontmost
// macOS window over the host bridge. The real query performs a native IPC
// round-trip; reconstructed here to return no target. See notes.
function useFrontmostAppshotWindowQuery(): {
  refetch: () => Promise<{ data: AppshotTargetWindow | null }>;
} {
  return useMemo(
    () => ({
      refetch: async () => ({ data: null as AppshotTargetWindow | null }),
    }),
    [],
  );
}

// Minimal reconstruction of the one-time "accept appshot intro" gate. The real
// gate reads the `has-accepted-appshot-intro` flag, focuses the main window,
// and shows the intro dialog before proceeding. See notes.
function ensureAppshotIntroAccepted(
  _scopeStore: unknown,
  onAccepted: () => void,
): void {
  onAccepted();
}

// Minimal reconstruction of the capture-start orchestration (`PE` in source).
// The real implementation records a pending capture request, emits analytics,
// drives the native capture + transition animation, and finally invokes
// `onAddAppshotContext`. Reconstructed to register the placeholder only. See notes.
function startAppshotCapture(
  _scopeStore: unknown,
  options: StartAppshotCaptureOptions,
): void {
  const requestId = crypto.randomUUID();
  options.onCaptureStarted(requestId);
}

export interface AppshotCaptureControlsProps {
  composerInput: HTMLElement | null;
  executionTargetHostId: string;
  getAnimationDestinationFrame: (
    target: AppshotTargetWindow,
  ) => AppshotCaptureDestinationFrame | null;
  getAttachmentGen: () => number;
  onAddAppshotContext: (context: unknown, requestId?: string) => void;
  onCaptureAnimationDuration: (
    requestId: string,
    metadata: AppshotCaptureAnimationMetadata | null,
  ) => void;
  onCaptureSettled: (requestId: string, keepPlaceholder?: boolean) => void;
  onCaptureStarted: (requestId: string) => void;
}

export function AppshotCaptureControls(
  props: AppshotCaptureControlsProps,
): null {
  const {
    composerInput,
    executionTargetHostId,
    getAnimationDestinationFrame,
    getAttachmentGen,
    onAddAppshotContext,
    onCaptureAnimationDuration,
    onCaptureSettled,
    onCaptureStarted,
  } = props;

  const scopeStore = useScopeStore(composerScope);
  const intl = useComposerIntl();
  const isAppshotAvailable = useAtomFamily(
    appshotAvailabilityByHost,
    executionTargetHostId,
  );
  const { refetch: refetchFrontmostWindow } = useFrontmostAppshotWindowQuery();

  const handleAppshotShortcut = useCallback(async () => {
    if (!isAppshotAvailable) return;
    try {
      const startedAt = performance.now();
      appshotCaptureLogger.info("Appshot shortcut received");
      const { data: target } = await refetchFrontmostWindow();
      const frontmostWindowElapsedMs = Math.round(
        performance.now() - startedAt,
      );
      if (target == null) {
        appshotCaptureLogger.info("Appshot shortcut had no target", {
          safe: { frontmostWindowElapsedMs },
        });
        return;
      }
      appshotCaptureLogger.info("Appshot shortcut found target", {
        safe: { frontmostWindowElapsedMs },
        sensitive: {
          bundleIdentifier: target.bundleIdentifier,
          name: target.name,
        },
      });
      ensureAppshotIntroAccepted(scopeStore, () => {
        startAppshotCapture(scopeStore, {
          getAnimationDestinationFrame,
          getAttachmentGen,
          onAddAppshotContext,
          onCaptureAnimationDuration,
          onCaptureSettled,
          onCaptureStarted,
          source: "hotkey",
          target,
        });
        appshotCaptureLogger.info("Appshot shortcut started appshot", {
          safe: {
            shortcutElapsedMs: Math.round(performance.now() - startedAt),
          },
          sensitive: {
            bundleIdentifier: target.bundleIdentifier,
            name: target.name,
          },
        });
      });
    } catch (error) {
      appshotCaptureLogger.error("Appshot shortcut failed", {
        safe: {},
        sensitive: { error },
      });
      showComposerToast(
        scopeStore,
        intl.formatMessage({
          id: "composer.appshotShortcut.attach.error",
          defaultMessage: "Failed to attach appshot",
          description:
            "Toast shown when the appshot shortcut fails to attach an appshot",
        }),
      );
    }
  }, [
    getAnimationDestinationFrame,
    getAttachmentGen,
    intl,
    isAppshotAvailable,
    onAddAppshotContext,
    onCaptureAnimationDuration,
    onCaptureSettled,
    onCaptureStarted,
    refetchFrontmostWindow,
    scopeStore,
  ]);

  useNamedKeyboardShortcut(
    "appshot-shortcut",
    composerInput,
    handleAppshotShortcut,
  );

  return null;
}
