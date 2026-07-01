// Restored from ref/webview/assets/browser-sidebar-webview-B-SVcDNr.js
// browser-sidebar-webview-B-SVcDNr chunk restored from the Codex webview bundle.
import React, {
  type ReactNode,
  useId,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { browserSidebarManager } from "./sidebar-manager";
import type {
  BrowserSidebarBounds,
  BrowserSidebarHostKind,
  BrowserSidebarWebviewHost,
  BrowserSidebarWebviewRef,
} from "./sidebar-manager/types";
export type BrowserSidebarWebviewProps = {
  adoptionLease?: string | null;
  adoptedWebContentsId?: number | null;
  bounds: BrowserSidebarBounds | null;
  browserTabId: string;
  children?: ReactNode;
  conversationId: string;
  hostKind?: BrowserSidebarHostKind;
  initialUrl: string;
  isVisible: boolean;
  persistedTabsEnabled?: boolean;
  scale: number;
  shouldBootstrapWhenHidden?: boolean;
  shouldPaint?: boolean;
  webviewRef: BrowserSidebarWebviewRef;
  windowZoom?: number;
};
type ManagedWebviewHost = BrowserSidebarWebviewHost & {
  readonly disposed?: boolean;
};
type PresentationMode = "bootstrap" | "skip" | "sync";
export function BrowserSidebarWebview({
  adoptionLease,
  adoptedWebContentsId,
  bounds,
  browserTabId,
  children,
  conversationId,
  hostKind = "right-panel",
  initialUrl,
  isVisible,
  persistedTabsEnabled = false,
  scale,
  shouldBootstrapWhenHidden,
  shouldPaint,
  webviewRef,
  windowZoom,
}: BrowserSidebarWebviewProps): React.JSX.Element | null {
  const managedWebviewRef = useRef<ManagedWebviewHost | null>(null);
  const mountClaimKey = useId();
  const hasActiveMountClaimRef = useRef(false);
  const isMountedRef = useRef(false);
  const mountGenerationRef = useRef(
    browserSidebarManager.getMountGeneration(conversationId, browserTabId),
  );
  const currentTabKeyRef = useRef(
    createBrowserSidebarTabKey(conversationId, browserTabId),
  );
  const cursorOverlayHost = useSyncExternalStore(
    browserSidebarManager.subscribe,
    () =>
      browserSidebarManager.getCursorOverlayHost(conversationId, browserTabId),
    () => null,
  );
  currentTabKeyRef.current = createBrowserSidebarTabKey(
    conversationId,
    browserTabId,
  );
  useLayoutEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const isPresented = isVisible && bounds != null;
  useLayoutEffect(() => {
    const effectTabKey = createBrowserSidebarTabKey(
      conversationId,
      browserTabId,
    );
    const presentationMode = getPresentationMode({
      hasManagedWebview: managedWebviewRef.current != null,
      isPresented,
      shouldBootstrapWhenHidden,
    });
    if (presentationMode === "skip") {
      hasActiveMountClaimRef.current = false;
      mountGenerationRef.current = browserSidebarManager.getMountGeneration(
        conversationId,
        browserTabId,
      );
      return;
    }
    const claimedMountGeneration = browserSidebarManager.claimMountGeneration(
      conversationId,
      browserTabId,
      mountClaimKey,
    );
    mountGenerationRef.current = claimedMountGeneration;
    hasActiveMountClaimRef.current = true;
    return () => {
      hasActiveMountClaimRef.current = false;
      queueMicrotask(() => {
        if (
          isMountedRef.current &&
          currentTabKeyRef.current === effectTabKey &&
          hasActiveMountClaimRef.current
        ) {
          return;
        }
        const currentMountGeneration =
          browserSidebarManager.releaseMountGeneration(
            conversationId,
            browserTabId,
            mountClaimKey,
            claimedMountGeneration,
          );
        if (mountGenerationRef.current === claimedMountGeneration) {
          mountGenerationRef.current = currentMountGeneration;
        }
      });
    };
  }, [
    browserTabId,
    conversationId,
    isPresented,
    mountClaimKey,
    shouldBootstrapWhenHidden,
  ]);
  useLayoutEffect(() => {
    const effectTabKey = createBrowserSidebarTabKey(
      conversationId,
      browserTabId,
    );
    return () => {
      const managedWebview = managedWebviewRef.current;
      const mountGeneration = mountGenerationRef.current;
      queueMicrotask(() => {
        if (isMountedRef.current && currentTabKeyRef.current === effectTabKey) {
          return;
        }
        if (
          browserSidebarManager.hasOtherMountGenerationClaim(
            conversationId,
            browserTabId,
            mountClaimKey,
            mountGeneration,
          )
        ) {
          return;
        }
        if (managedWebview == null) return;
        browserSidebarManager.detachElectronWebview(
          managedWebview,
          webviewRef,
          hostKind,
          mountGeneration,
        );
        if (managedWebviewRef.current === managedWebview) {
          managedWebviewRef.current = null;
        }
      });
    };
  }, [browserTabId, conversationId, hostKind, mountClaimKey, webviewRef]);
  useLayoutEffect(() => {
    if (managedWebviewRef.current?.disposed) {
      managedWebviewRef.current = null;
    }
    const managedWebview = managedWebviewRef.current;
    const presentationMode = getPresentationMode({
      hasManagedWebview: managedWebview != null,
      isPresented,
      shouldBootstrapWhenHidden,
    });
    if (presentationMode === "skip") {
      if (managedWebview != null) {
        const mountGeneration = mountGenerationRef.current;
        if (
          !browserSidebarManager.hasOtherMountGenerationClaim(
            conversationId,
            browserTabId,
            mountClaimKey,
            mountGeneration,
          )
        ) {
          browserSidebarManager.detachElectronWebview(
            managedWebview,
            webviewRef,
            hostKind,
            mountGeneration,
          );
        }
      }
      if (managedWebviewRef.current === managedWebview) {
        managedWebviewRef.current = null;
      }
      return;
    }
    const nextManagedWebview = browserSidebarManager.getWebview(
      conversationId,
      browserTabId,
      initialUrl,
      {
        adoptionLease,
        adoptedWebContentsId,
        hostKind,
        persistedTabsEnabled,
      },
    );
    managedWebviewRef.current = nextManagedWebview;
    browserSidebarManager.syncElectronWebview(
      nextManagedWebview,
      {
        bounds,
        isVisible: isPresented,
        mountGeneration: mountGenerationRef.current,
        scale,
        shouldBootstrap: presentationMode === "bootstrap",
        shouldPaint,
        windowZoom,
      },
      webviewRef,
      hostKind,
    );
  }, [
    browserTabId,
    conversationId,
    hostKind,
    initialUrl,
    adoptionLease,
    adoptedWebContentsId,
    bounds,
    isPresented,
    mountClaimKey,
    persistedTabsEnabled,
    scale,
    shouldPaint,
    shouldBootstrapWhenHidden,
    webviewRef,
    windowZoom,
  ]);
  return cursorOverlayHost == null || children == null
    ? null
    : createPortal(children, cursorOverlayHost);
}
function getPresentationMode({
  hasManagedWebview,
  isPresented,
  shouldBootstrapWhenHidden,
}: {
  hasManagedWebview: boolean;
  isPresented: boolean;
  shouldBootstrapWhenHidden?: boolean;
}): PresentationMode {
  return isPresented
    ? "sync"
    : shouldBootstrapWhenHidden
      ? hasManagedWebview
        ? "sync"
        : "bootstrap"
      : "skip";
}
function createBrowserSidebarTabKey(
  conversationId: string,
  browserTabId: string,
): string {
  return `${conversationId}\0${browserTabId}`;
}

export function initBrowserSidebarWebviewChunk(): void {}
