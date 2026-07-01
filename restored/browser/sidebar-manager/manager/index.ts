// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// browser-sidebar-manager-DZM0wpKX chunk restored from the Codex webview bundle.
import {
  vscodeApiF as vscodeBridge,
  vscodeApiH as vscodeLogger,
} from "../../../boundaries/vscode-api";
import { getBrowserTabLegacyKey } from "../../../runtime/persisted-signal";
import { clearQueuedBrowserSidebarTab } from "../../browser-sidebar-open-source";
import {
  DEFAULT_DEVICE_TOOLBAR_STATE,
  RESPONSIVE_DEVICE_PRESET_ID,
  clampDeviceViewportHeight,
  clampDeviceViewportWidth,
} from "../device-toolbar";
import { createPartitionName } from "../dom";
import { BrowserSidebarElectronWebviewHandoff } from "../electron-webview-handoff";
import type {
  BrowserSidebarDeviceToolbarTabState,
  BrowserSidebarHostKind,
  BrowserSidebarMountState,
  BrowserSidebarPendingElectronTransfer,
  BrowserSidebarSize,
  BrowserSidebarSnapshot,
  BrowserSidebarWebviewHost,
  BrowserUseCursorState,
} from "../types";
import {
  ElectronBrowserSidebarWebviewHost,
  RetainedBrowserSidebarWebviewHost,
} from "../webview-host";
type BrowserSidebarTabRef = {
  browserTabId: string;
  conversationId: string;
};
type BrowserSidebarElectronWebviewOptions = {
  adoptionLease?: string | null;
  adoptedWebContentsId?: number | null;
  hostKind?: BrowserSidebarHostKind;
  persistedTabsEnabled?: boolean;
};
type BrowserSidebarRetainedWebviewOptions = {
  hostKind?: BrowserSidebarHostKind;
};
type BrowserSidebarDeviceToolbarUpdater = (
  currentState: BrowserSidebarDeviceToolbarTabState,
) => BrowserSidebarDeviceToolbarTabState;
type ReassociateTabStateOptions = {
  removeSourceBrowserStateWhenEmpty?: boolean;
};
type BrowserSidebarStateMessage = {
  browserTabId?: string | null;
  conversationId: string;
  snapshot: BrowserSidebarSnapshot;
};
type BrowserSidebarBrowserUseStateMessage = {
  browserTabId?: string | null;
  conversationId: string;
  isActive: boolean;
};
type BrowserSidebarBrowserUsePageReleasedMessage = {
  browserTabId?: string | null;
  conversationId: string;
};
type BrowserSidebarBrowserUseViewportMessage = {
  browserTabId?: string | null;
  conversationId: string;
  viewportSize: BrowserSidebarSize | null;
};
type BrowserSidebarBrowserUseCaptureSurfaceMessage = {
  browserTabId?: string | null;
  conversationId: string;
  surfaceSize: BrowserSidebarSize | null;
};
type BrowserSidebarTabCaptureStateMessage = {
  browserTabId: string;
  conversationId: string;
  isActive: boolean;
};
type BrowserSidebarDestroyWebviewMessage = {
  browserTabId: string;
  conversationId: string;
  mountGeneration?: number;
  reason: string;
  teardownId?: string;
};
type BrowserSidebarWebviewAttachedMessage = {
  browserTabId: string;
  conversationId: string;
  mountGeneration: number;
};
type GetElectronWebviewArgs =
  | [initialUrl: string, options?: BrowserSidebarElectronWebviewOptions]
  | [
      browserTabId: string,
      initialUrl: string,
      options?: BrowserSidebarElectronWebviewOptions,
    ];
const DEFAULT_DEVICE_TOOLBAR_TAB_STATE: BrowserSidebarDeviceToolbarTabState = {
  responsiveViewportSize: null,
  toolbarState: DEFAULT_DEVICE_TOOLBAR_STATE,
};
const DEFAULT_MOUNT_CLAIM_KEY = "default";
const WEB_TAB_TYPE = "web";
class BrowserSidebarManager {
  private readonly browserUseActiveTabKeys = new Set<string>();
  private readonly browserUseCaptureSurfaceSizes = new Map<
    string,
    BrowserSidebarSize
  >();
  private readonly browserUseCursorStates = new Map<
    string,
    BrowserUseCursorState
  >();
  private readonly browserUseTabIdsKeysByConversation = new Map<
    string,
    string
  >();
  private readonly browserUseTabKeys = new Set<string>();
  private readonly browserUseTabSummarySyncKeysByConversation = new Map<
    string,
    string
  >();
  private browserUseTabs: BrowserSidebarTabRef[] = [];
  private readonly browserUseViewportSizes = new Map<
    string,
    BrowserSidebarSize
  >();
  private readonly deviceToolbarTabStates = new Map<
    string,
    BrowserSidebarDeviceToolbarTabState
  >();
  private readonly electronPageHandoff =
    new BrowserSidebarElectronWebviewHandoff();
  private readonly listeners = new Set<() => void>();
  private readonly mountStates = new Map<string, BrowserSidebarMountState>();
  private readonly pendingElectronTransfers = new Map<
    string,
    BrowserSidebarPendingElectronTransfer
  >();
  private readonly snapshots = new Map<string, BrowserSidebarSnapshot>();
  private readonly tabCaptureActiveKeys = new Set<string>();
  private readonly transferredWebviewKeys = new Set<string>();
  private readonly webviews = new Map<string, BrowserSidebarWebviewHost>();
  constructor() {
    vscodeBridge.subscribe(
      "browser-sidebar-state",
      (message: BrowserSidebarStateMessage) => {
        this.setSnapshot(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
          message.snapshot,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-browser-use-state",
      (message: BrowserSidebarBrowserUseStateMessage) => {
        this.setBrowserUseActive(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
          message.isActive,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-browser-use-page-released",
      (message: BrowserSidebarBrowserUsePageReleasedMessage) => {
        this.releaseBrowserUseTab(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-browser-use-viewport",
      (message: BrowserSidebarBrowserUseViewportMessage) => {
        this.setBrowserUseViewportSize(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
          message.viewportSize,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-browser-use-capture-surface",
      (message: BrowserSidebarBrowserUseCaptureSurfaceMessage) => {
        this.setBrowserUseCaptureSurfaceSize(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
          message.surfaceSize,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-browser-use-cursor-state",
      (
        message: BrowserUseCursorState & {
          browserTabId?: string | null;
          conversationId: string;
        },
      ) => {
        this.setBrowserUseCursorState(
          message.conversationId,
          getDefaultBrowserTabId(message.conversationId, message.browserTabId),
          message,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-tab-capture-state",
      (message: BrowserSidebarTabCaptureStateMessage) => {
        this.setTabCaptureActive(
          message.conversationId,
          message.browserTabId,
          message.isActive,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-destroy-webview",
      (message: BrowserSidebarDestroyWebviewMessage) => {
        this.destroyWebviewAtHostRequest(
          message.conversationId,
          message.browserTabId,
          message.mountGeneration,
          message.reason,
          message.teardownId,
        );
      },
    );
    vscodeBridge.subscribe(
      "browser-sidebar-webview-attached",
      (message: BrowserSidebarWebviewAttachedMessage) => {
        this.markWebviewAttached(
          message.conversationId,
          message.browserTabId,
          message.mountGeneration,
        );
      },
    );
    if (typeof window !== "undefined") {
      window.addEventListener("focus", () => {
        this.resyncAttachedWebviews();
      });
    }
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.resyncAttachedWebviews();
        }
      });
    }
  }
  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  getSnapshot(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): BrowserSidebarSnapshot | null {
    return (
      this.snapshots.get(createBrowserTabKey(conversationId, browserTabId)) ??
      null
    );
  }
  hasRetainedWebview(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): boolean {
    return (
      this.webviews.get(
        createBrowserTabKey(conversationId, browserTabId),
      ) instanceof RetainedBrowserSidebarWebviewHost
    );
  }
  getBrowserUseCursorState(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): BrowserUseCursorState | null {
    return (
      this.browserUseCursorStates.get(
        createBrowserTabKey(conversationId, browserTabId),
      ) ?? null
    );
  }
  isBrowserUseActive(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): boolean {
    return this.browserUseActiveTabKeys.has(
      createBrowserTabKey(conversationId, browserTabId),
    );
  }
  isBrowserUseTab(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): boolean {
    return this.browserUseTabKeys.has(
      createBrowserTabKey(conversationId, browserTabId),
    );
  }
  getBrowserUseTabs(): BrowserSidebarTabRef[] {
    return this.browserUseTabs;
  }
  getBrowserUseSummaryBrowserTabId(conversationId: string): string | null {
    return (
      this.getBrowserUseActiveBrowserTabId(conversationId) ??
      this.getFirstConversationBrowserTabId(
        conversationId,
        this.browserUseTabKeys,
      ) ??
      this.getFirstConversationBrowserTabId(
        conversationId,
        this.snapshots.keys(),
      )
    );
  }
  getBrowserUseActiveBrowserTabId(conversationId: string): string | null {
    return this.getFirstConversationBrowserTabId(
      conversationId,
      this.browserUseActiveTabKeys,
    );
  }
  getBrowserUseBrowserTabIdsKey(conversationId: string): string {
    return this.browserUseTabIdsKeysByConversation.get(conversationId) ?? "";
  }
  getConversationBrowserTabIds(conversationId: string): string[] {
    const browserTabIds: string[] = [];
    const seenBrowserTabIds = new Set<string>();
    const keySources: Iterable<string>[] = [
      this.browserUseTabKeys,
      this.webviews.keys(),
    ];
    for (const keySource of keySources) {
      for (const browserTabId of this.getConversationBrowserTabIdsFromKeys(
        conversationId,
        keySource,
      )) {
        if (seenBrowserTabIds.has(browserTabId)) continue;
        seenBrowserTabIds.add(browserTabId);
        browserTabIds.push(browserTabId);
      }
    }
    return browserTabIds;
  }
  getBrowserUseBrowserTabIds(conversationId: string): string[] {
    return this.getConversationBrowserTabIdsFromKeys(
      conversationId,
      this.browserUseTabKeys,
    );
  }
  getBrowserUseBrowserTabSummarySyncKey(conversationId: string): string {
    const syncKey =
      this.browserUseTabSummarySyncKeysByConversation.get(conversationId) ?? "";
    if (syncKey.length > 0) return syncKey;
    const browserTabId = this.getBrowserUseSummaryBrowserTabId(conversationId);
    return browserTabId == null
      ? ""
      : createBrowserUseSummarySyncKey(
          browserTabId,
          this.getSnapshot(conversationId, browserTabId),
        );
  }
  getDeviceToolbarTabState(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): BrowserSidebarDeviceToolbarTabState {
    return (
      this.deviceToolbarTabStates.get(
        createBrowserTabKey(conversationId, browserTabId),
      ) ?? DEFAULT_DEVICE_TOOLBAR_TAB_STATE
    );
  }
  getMountGeneration(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): number {
    return (
      this.mountStates.get(createBrowserTabKey(conversationId, browserTabId))
        ?.generation ?? 0
    );
  }
  claimMountGeneration(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
    claimKey = DEFAULT_MOUNT_CLAIM_KEY,
  ): number {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const mountState = this.mountStates.get(browserTabKey) ?? {
      claimKeys: new Set<string>(),
      generation: 0,
    };
    if (mountState.claimKeys.size === 0) {
      mountState.generation += 1;
    }
    mountState.claimKeys.add(claimKey);
    this.mountStates.set(browserTabKey, mountState);
    return mountState.generation;
  }
  hasOtherMountGenerationClaim(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
    claimKey = DEFAULT_MOUNT_CLAIM_KEY,
    generation?: number,
  ): boolean {
    const mountState = this.mountStates.get(
      createBrowserTabKey(conversationId, browserTabId),
    );
    if (
      mountState == null ||
      (generation != null && mountState.generation !== generation)
    ) {
      return false;
    }
    for (const activeClaimKey of mountState.claimKeys) {
      if (activeClaimKey !== claimKey) return true;
    }
    return false;
  }
  releaseMountGeneration(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
    claimKey = DEFAULT_MOUNT_CLAIM_KEY,
    generation?: number,
  ): number {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const mountState = this.mountStates.get(browserTabKey);
    if (mountState == null) return 0;
    if (generation == null || mountState.generation === generation) {
      mountState.claimKeys.delete(claimKey);
    }
    return mountState.generation;
  }
  syncElectronWebview(
    host: BrowserSidebarWebviewHost,
    state: Parameters<BrowserSidebarWebviewHost["sync"]>[0],
    webviewRef: Parameters<BrowserSidebarWebviewHost["sync"]>[1],
    hostKind: BrowserSidebarHostKind = "right-panel",
  ): void {
    this.electronPageHandoff.sync(host, state, webviewRef, hostKind);
  }
  detachElectronWebview(
    host: BrowserSidebarWebviewHost,
    webviewRef: Parameters<BrowserSidebarWebviewHost["detach"]>[0],
    hostKind: BrowserSidebarHostKind,
    mountGeneration?: number,
  ): void {
    this.electronPageHandoff.detach(
      host,
      webviewRef,
      hostKind,
      mountGeneration,
    );
  }
  setDeviceToolbarTabState(
    conversationId: string,
    updater: BrowserSidebarDeviceToolbarUpdater,
  ): void;
  setDeviceToolbarTabState(
    conversationId: string,
    browserTabId: string,
    updater: BrowserSidebarDeviceToolbarUpdater,
  ): void;
  setDeviceToolbarTabState(
    conversationId: string,
    browserTabIdOrUpdater: string | BrowserSidebarDeviceToolbarUpdater,
    maybeUpdater?: BrowserSidebarDeviceToolbarUpdater,
  ): void {
    const browserTabId =
      typeof browserTabIdOrUpdater === "function"
        ? getDefaultBrowserTabId(conversationId)
        : browserTabIdOrUpdater;
    const updater =
      typeof browserTabIdOrUpdater === "function"
        ? browserTabIdOrUpdater
        : maybeUpdater;
    if (updater == null) return;
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    this.deviceToolbarTabStates.set(
      browserTabKey,
      updater(this.getDeviceToolbarTabState(conversationId, browserTabId)),
    );
    this.emitChange();
  }
  setSnapshot(conversationId: string, snapshot: BrowserSidebarSnapshot): void;
  setSnapshot(
    conversationId: string,
    browserTabId: string,
    snapshot: BrowserSidebarSnapshot,
  ): void;
  setSnapshot(
    conversationId: string,
    browserTabIdOrSnapshot: string | BrowserSidebarSnapshot,
    maybeSnapshot?: BrowserSidebarSnapshot,
  ): void {
    const browserTabId =
      typeof browserTabIdOrSnapshot === "string"
        ? browserTabIdOrSnapshot
        : getDefaultBrowserTabId(conversationId);
    const snapshot =
      typeof browserTabIdOrSnapshot === "string"
        ? maybeSnapshot
        : browserTabIdOrSnapshot;
    if (snapshot == null) return;
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    this.snapshots.set(browserTabKey, snapshot);
    if (this.browserUseTabKeys.has(browserTabKey)) {
      this.syncBrowserUseTabKeys(conversationId);
    }
    if (
      snapshot.tabType !== WEB_TAB_TYPE &&
      this.webviews.get(browserTabKey) instanceof
        RetainedBrowserSidebarWebviewHost
    ) {
      this.disposeWebviewHost(
        conversationId,
        browserTabId,
        browserTabKey,
        snapshot.tabType ?? WEB_TAB_TYPE,
      );
    }
    this.emitChange();
  }
  removeTab(conversationId: string, browserTabId: string): void {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const webviewHost = this.webviews.get(browserTabKey);
    if (webviewHost instanceof ElectronBrowserSidebarWebviewHost) {
      this.electronPageHandoff.removeTab(webviewHost);
    }
    this.pendingElectronTransfers.delete(browserTabKey);
    this.snapshots.delete(browserTabKey);
    const removedBrowserUseTab = this.browserUseTabKeys.delete(browserTabKey);
    this.browserUseActiveTabKeys.delete(browserTabKey);
    this.browserUseCursorStates.delete(browserTabKey);
    this.browserUseCaptureSurfaceSizes.delete(browserTabKey);
    this.browserUseViewportSizes.delete(browserTabKey);
    this.tabCaptureActiveKeys.delete(browserTabKey);
    this.deviceToolbarTabStates.delete(browserTabKey);
    this.mountStates.delete(browserTabKey);
    if (removedBrowserUseTab) {
      this.syncBrowserUseTabKeys(conversationId);
    }
    this.emitChange();
  }
  getWebview(
    conversationId: string,
    initialUrl: string,
    options?: BrowserSidebarElectronWebviewOptions,
  ): ElectronBrowserSidebarWebviewHost;
  getWebview(
    conversationId: string,
    browserTabId: string,
    initialUrl: string,
    options?: BrowserSidebarElectronWebviewOptions,
  ): ElectronBrowserSidebarWebviewHost;
  getWebview(
    conversationId: string,
    ...args: GetElectronWebviewArgs
  ): ElectronBrowserSidebarWebviewHost {
    const [browserTabId, initialUrl, options] = hasExplicitBrowserTabArgs(args)
      ? [args[0], args[1], args[2]]
      : [getDefaultBrowserTabId(conversationId), args[0], args[1]];
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const existingWebviewHost = this.webviews.get(browserTabKey);
    const hostKind = options?.hostKind ?? "right-panel";
    if (existingWebviewHost instanceof ElectronBrowserSidebarWebviewHost) {
      existingWebviewHost.setHostKind(hostKind);
      if (options != null) {
        existingWebviewHost.setAdoptionAttributes?.(
          options.adoptionLease ?? null,
          options.adoptedWebContentsId ?? null,
          initialUrl,
        );
        if (
          options.adoptionLease != null &&
          options.adoptedWebContentsId != null
        ) {
          vscodeLogger.info("IAB_ADOPTION renderer updated adopted webview", {
            safe: {
              adoptedWebContentsId: options.adoptedWebContentsId,
              browserTabId,
              conversationId,
              hasInitialUrl: initialUrl.length > 0,
            },
            sensitive: {},
          });
        }
      }
      return existingWebviewHost;
    }
    if (existingWebviewHost != null) {
      this.disposeWebviewHost(
        conversationId,
        browserTabId,
        browserTabKey,
        WEB_TAB_TYPE,
      );
    }
    const webviewHost = new ElectronBrowserSidebarWebviewHost({
      adoptionLease: options?.adoptionLease ?? null,
      adoptedWebContentsId: options?.adoptedWebContentsId ?? null,
      browserTabId,
      conversationId,
      elementKey: createElementKey(conversationId, browserTabId),
      hostKind,
      initialUrl,
      partition: createPartitionName(browserTabKey),
    });
    if (this.browserUseActiveTabKeys.has(browserTabKey)) {
      webviewHost.setBrowserUseActive?.(true);
    }
    const browserUseViewportSize =
      this.browserUseViewportSizes.get(browserTabKey) ?? null;
    if (browserUseViewportSize != null) {
      webviewHost.setBrowserUseViewportSize?.(browserUseViewportSize);
    }
    const browserUseCaptureSurfaceSize =
      this.browserUseCaptureSurfaceSizes.get(browserTabKey) ?? null;
    if (browserUseCaptureSurfaceSize != null) {
      webviewHost.setBrowserUseCaptureSurfaceSize(browserUseCaptureSurfaceSize);
    }
    webviewHost.setTabCaptureActive(
      this.tabCaptureActiveKeys.has(browserTabKey),
    );
    this.webviews.set(browserTabKey, webviewHost);
    this.notifyWebviewHostCreated(conversationId, browserTabId, hostKind);
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer created browser sidebar webview",
      {
        safe: {
          browserTabId,
          conversationId,
          hostKind,
        },
        sensitive: {
          initialUrl,
        },
      },
    );
    if (
      options?.adoptionLease != null &&
      options.adoptedWebContentsId != null
    ) {
      vscodeLogger.info("IAB_ADOPTION renderer created adopted webview", {
        safe: {
          adoptedWebContentsId: options.adoptedWebContentsId,
          browserTabId,
          conversationId,
          hasInitialUrl: initialUrl.length > 0,
        },
        sensitive: {},
      });
    }
    this.emitChange();
    return webviewHost;
  }
  getRetainedWebview(
    conversationId: string,
    browserTabId: string,
    initialUrl: string,
    options?: BrowserSidebarRetainedWebviewOptions,
  ): BrowserSidebarWebviewHost {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const existingWebviewHost = this.webviews.get(browserTabKey);
    const hostKind = options?.hostKind ?? "right-panel";
    if (existingWebviewHost != null) {
      existingWebviewHost.setHostKind(hostKind);
      return existingWebviewHost;
    }
    const webviewHost = new RetainedBrowserSidebarWebviewHost({
      browserTabId,
      browserUseCaptureSurfaceSize:
        this.browserUseCaptureSurfaceSizes.get(browserTabKey) ?? null,
      browserUseViewportSize:
        this.browserUseViewportSizes.get(browserTabKey) ?? null,
      conversationId,
      elementKey: createElementKey(conversationId, browserTabId),
      hostKind,
      initialUrl,
      isBrowserUseActive: this.browserUseActiveTabKeys.has(browserTabKey),
      partition: createPartitionName(browserTabKey),
    });
    webviewHost.setTabCaptureActive(
      this.tabCaptureActiveKeys.has(browserTabKey),
    );
    this.webviews.set(browserTabKey, webviewHost);
    this.notifyWebviewHostCreated(conversationId, browserTabId, hostKind);
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer created retained browser sidebar webview",
      {
        safe: {
          browserTabId,
          conversationId,
          hostKind,
        },
        sensitive: {
          initialUrl,
        },
      },
    );
    this.emitChange();
    return webviewHost;
  }
  notifyWebviewHostCreated(
    conversationId: string,
    browserTabId: string,
    hostKind: BrowserSidebarHostKind,
  ): void {
    vscodeBridge.dispatchMessage("browser-sidebar-webview-host-created", {
      browserTabId,
      conversationId,
      hostKind,
    });
  }
  getCursorOverlayHost(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): HTMLElement | null {
    return (
      this.webviews
        .get(createBrowserTabKey(conversationId, browserTabId))
        ?.getCursorOverlayHost() ?? null
    );
  }
  setBrowserUseActive(conversationId: string, isActive: boolean): void;
  setBrowserUseActive(
    conversationId: string,
    browserTabId: string,
    isActive: boolean,
  ): void;
  setBrowserUseActive(
    conversationId: string,
    browserTabIdOrIsActive: string | boolean,
    maybeIsActive?: boolean,
  ): void {
    const browserTabId =
      typeof browserTabIdOrIsActive === "boolean"
        ? getDefaultBrowserTabId(conversationId)
        : browserTabIdOrIsActive;
    const isActive =
      typeof browserTabIdOrIsActive === "boolean"
        ? browserTabIdOrIsActive
        : Boolean(maybeIsActive);
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const wasActive = this.browserUseActiveTabKeys.has(browserTabKey);
    const wasBrowserUseTab = this.browserUseTabKeys.has(browserTabKey);
    const cursorState = this.browserUseCursorStates.get(browserTabKey) ?? null;
    let deactivatedSiblingTab = false;
    if (isActive) {
      this.browserUseTabKeys.add(browserTabKey);
      if (!wasBrowserUseTab) this.syncBrowserUseTabKeys(conversationId);
      const conversationKeyPrefix = `${conversationId}\0`;
      for (const activeTabKey of Array.from(this.browserUseActiveTabKeys)) {
        if (
          activeTabKey === browserTabKey ||
          !activeTabKey.startsWith(conversationKeyPrefix)
        ) {
          continue;
        }
        this.browserUseActiveTabKeys.delete(activeTabKey);
        const siblingCursorState =
          this.browserUseCursorStates.get(activeTabKey) ?? null;
        if (siblingCursorState != null) {
          this.browserUseCursorStates.set(activeTabKey, {
            visible: false,
            x: siblingCursorState.x,
            y: siblingCursorState.y,
          });
        }
        this.webviews.get(activeTabKey)?.setBrowserUseActive?.(false);
        deactivatedSiblingTab = true;
      }
      this.browserUseActiveTabKeys.add(browserTabKey);
      if (!wasActive) this.browserUseCursorStates.delete(browserTabKey);
    } else {
      this.browserUseActiveTabKeys.delete(browserTabKey);
      if (cursorState != null) {
        this.browserUseCursorStates.set(browserTabKey, {
          visible: false,
          x: cursorState.x,
          y: cursorState.y,
        });
      }
    }
    this.webviews.get(browserTabKey)?.setBrowserUseActive?.(isActive);
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer synced browser use webview state",
      {
        safe: {
          browserTabId,
          conversationId,
          isBrowserUseActive: isActive,
        },
        sensitive: {},
      },
    );
    if (
      wasActive !== isActive ||
      cursorState != null ||
      deactivatedSiblingTab
    ) {
      this.emitChange();
    }
  }
  releaseBrowserUseTab(conversationId: string, browserTabId: string): void {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const removedActiveTab = this.browserUseActiveTabKeys.delete(browserTabKey);
    const removedBrowserUseTab = this.browserUseTabKeys.delete(browserTabKey);
    const removedCursorState =
      this.browserUseCursorStates.delete(browserTabKey);
    const removedCaptureSurface =
      this.browserUseCaptureSurfaceSizes.delete(browserTabKey);
    const removedViewportSize =
      this.browserUseViewportSizes.delete(browserTabKey);
    const removedDeviceToolbarState =
      this.deviceToolbarTabStates.delete(browserTabKey);
    const didChange =
      removedActiveTab ||
      removedBrowserUseTab ||
      removedCursorState ||
      removedCaptureSurface ||
      removedViewportSize ||
      removedDeviceToolbarState;
    this.webviews.get(browserTabKey)?.releaseBrowserUse();
    if (removedBrowserUseTab) {
      this.syncBrowserUseTabKeys(conversationId);
    }
    if (didChange) this.emitChange();
  }
  clearBrowserUseState(): void {
    const browserUseKeys = new Set([
      ...this.browserUseTabKeys,
      ...this.browserUseActiveTabKeys,
      ...this.browserUseCursorStates.keys(),
      ...this.browserUseCaptureSurfaceSizes.keys(),
      ...this.browserUseViewportSizes.keys(),
    ]);
    for (const browserUseKey of browserUseKeys) {
      const { browserTabId, conversationId } =
        parseBrowserTabKey(browserUseKey);
      this.releaseBrowserUseTab(conversationId, browserTabId);
    }
  }
  setBrowserUseViewportSize(
    conversationId: string,
    viewportSize: BrowserSidebarSize | null,
  ): void;
  setBrowserUseViewportSize(
    conversationId: string,
    browserTabId: string,
    viewportSize: BrowserSidebarSize | null,
  ): void;
  setBrowserUseViewportSize(
    conversationId: string,
    browserTabIdOrViewportSize: string | BrowserSidebarSize | null,
    maybeViewportSize?: BrowserSidebarSize | null,
  ): void {
    const browserTabId =
      typeof browserTabIdOrViewportSize === "string"
        ? browserTabIdOrViewportSize
        : getDefaultBrowserTabId(conversationId);
    const viewportSize =
      typeof browserTabIdOrViewportSize === "string"
        ? maybeViewportSize
        : browserTabIdOrViewportSize;
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const clampedViewportSize =
      viewportSize == null
        ? null
        : {
            width: clampDeviceViewportWidth(viewportSize.width),
            height: clampDeviceViewportHeight(viewportSize.height),
          };
    if (clampedViewportSize == null) {
      this.browserUseViewportSizes.delete(browserTabKey);
    } else {
      this.browserUseViewportSizes.set(browserTabKey, clampedViewportSize);
    }
    this.webviews
      .get(browserTabKey)
      ?.setBrowserUseViewportSize?.(clampedViewportSize);
    this.setDeviceToolbarTabState(
      conversationId,
      browserTabId,
      (currentTabState) =>
        clampedViewportSize == null
          ? {
              ...currentTabState,
              toolbarState: {
                ...currentTabState.toolbarState,
                isEnabled: false,
              },
            }
          : {
              responsiveViewportSize: clampedViewportSize,
              toolbarState: {
                ...currentTabState.toolbarState,
                ...clampedViewportSize,
                isEnabled: true,
                presetId: RESPONSIVE_DEVICE_PRESET_ID,
              },
            },
    );
  }
  setBrowserUseCaptureSurfaceSize(
    conversationId: string,
    surfaceSize: BrowserSidebarSize | null,
  ): void;
  setBrowserUseCaptureSurfaceSize(
    conversationId: string,
    browserTabId: string,
    surfaceSize: BrowserSidebarSize | null,
  ): void;
  setBrowserUseCaptureSurfaceSize(
    conversationId: string,
    browserTabIdOrSurfaceSize: string | BrowserSidebarSize | null,
    maybeSurfaceSize?: BrowserSidebarSize | null,
  ): void {
    const browserTabId =
      typeof browserTabIdOrSurfaceSize === "string"
        ? browserTabIdOrSurfaceSize
        : getDefaultBrowserTabId(conversationId);
    const surfaceSize =
      typeof browserTabIdOrSurfaceSize === "string"
        ? maybeSurfaceSize
        : browserTabIdOrSurfaceSize;
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    if (surfaceSize == null) {
      this.browserUseCaptureSurfaceSizes.delete(browserTabKey);
    } else {
      this.browserUseCaptureSurfaceSizes.set(browserTabKey, surfaceSize);
    }
    this.webviews
      .get(browserTabKey)
      ?.setBrowserUseCaptureSurfaceSize(surfaceSize ?? null);
  }
  setBrowserUseCursorState(
    conversationId: string,
    cursorState: BrowserUseCursorState,
  ): void;
  setBrowserUseCursorState(
    conversationId: string,
    browserTabId: string,
    cursorState: BrowserUseCursorState,
  ): void;
  setBrowserUseCursorState(
    conversationId: string,
    browserTabIdOrCursorState: string | BrowserUseCursorState,
    maybeCursorState?: BrowserUseCursorState,
  ): void {
    const browserTabId =
      typeof browserTabIdOrCursorState === "string"
        ? browserTabIdOrCursorState
        : getDefaultBrowserTabId(conversationId);
    const cursorState =
      typeof browserTabIdOrCursorState === "string"
        ? maybeCursorState
        : browserTabIdOrCursorState;
    if (cursorState == null) return;
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const previousCursorState = this.browserUseCursorStates.get(browserTabKey);
    if (cursorState.visible) {
      if (
        previousCursorState?.visible === cursorState.visible &&
        previousCursorState.animateMovement === cursorState.animateMovement &&
        previousCursorState.moveSequence === cursorState.moveSequence &&
        previousCursorState.x === cursorState.x &&
        previousCursorState.y === cursorState.y
      ) {
        return;
      }
      this.browserUseCursorStates.set(browserTabKey, {
        ...(cursorState.animateMovement == null
          ? {}
          : {
              animateMovement: cursorState.animateMovement,
            }),
        ...(cursorState.moveSequence == null
          ? {}
          : {
              moveSequence: cursorState.moveSequence,
            }),
        visible: true,
        x: cursorState.x,
        y: cursorState.y,
      });
      this.emitChange();
      return;
    }
    if (previousCursorState?.visible) {
      this.browserUseCursorStates.set(browserTabKey, {
        visible: false,
        x: previousCursorState.x,
        y: previousCursorState.y,
      });
      this.emitChange();
    }
  }
  setTabCaptureActive(
    conversationId: string,
    browserTabId: string,
    isActive: boolean,
  ): void {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    if (isActive) {
      this.tabCaptureActiveKeys.add(browserTabKey);
    } else {
      this.tabCaptureActiveKeys.delete(browserTabKey);
    }
    this.webviews.get(browserTabKey)?.setTabCaptureActive(isActive);
  }
  reassociateTabState(
    sourceConversationId: string,
    targetConversationId: string,
    options?: ReassociateTabStateOptions,
  ): void;
  reassociateTabState(
    sourceConversationId: string,
    sourceBrowserTabId: string,
    targetConversationId: string,
    targetBrowserTabId: string,
    options?: ReassociateTabStateOptions,
  ): void;
  reassociateTabState(
    sourceConversationId: string,
    ...args:
      | [targetConversationId: string, options?: ReassociateTabStateOptions]
      | [
          sourceBrowserTabId: string,
          targetConversationId: string,
          targetBrowserTabId: string,
          options?: ReassociateTabStateOptions,
        ]
  ): void {
    const usesDefaultBrowserTabs =
      args.length <= 2 && (args.length === 1 || typeof args[1] !== "string");
    const sourceBrowserTabId = usesDefaultBrowserTabs
      ? getDefaultBrowserTabId(sourceConversationId)
      : args[0];
    const targetConversationId = usesDefaultBrowserTabs ? args[0] : args[1];
    const targetBrowserTabId = usesDefaultBrowserTabs
      ? getDefaultBrowserTabId(targetConversationId)
      : args[2];
    const options = usesDefaultBrowserTabs ? args[1] : args[3];
    const sourceBrowserTabKey = createBrowserTabKey(
      sourceConversationId,
      sourceBrowserTabId,
    );
    const targetBrowserTabKey = createBrowserTabKey(
      targetConversationId,
      targetBrowserTabId,
    );
    const transferKey = createTransferKey(
      sourceBrowserTabKey,
      targetBrowserTabKey,
    );
    if (
      sourceBrowserTabKey === targetBrowserTabKey ||
      this.transferredWebviewKeys.has(transferKey)
    ) {
      return;
    }
    const sourceWebviewHost = this.webviews.get(sourceBrowserTabKey) ?? null;
    if (sourceWebviewHost instanceof ElectronBrowserSidebarWebviewHost) {
      this.electronPageHandoff.transferRoute(sourceWebviewHost);
    }
    const targetWebviewHost = this.webviews.get(targetBrowserTabKey) ?? null;
    const sourceSnapshot = this.snapshots.get(sourceBrowserTabKey) ?? null;
    this.pendingElectronTransfers.delete(sourceBrowserTabKey);
    this.pendingElectronTransfers.delete(targetBrowserTabKey);
    this.transferredWebviewKeys.add(transferKey);
    const shouldMoveWebview =
      sourceWebviewHost != null && targetWebviewHost == null;
    if (sourceWebviewHost != null) {
      if (shouldMoveWebview) {
        this.webviews.delete(sourceBrowserTabKey);
        sourceWebviewHost.transfer({
          browserTabId: targetBrowserTabId,
          conversationId: targetConversationId,
          elementKey: createElementKey(
            targetConversationId,
            targetBrowserTabId,
          ),
          partition: createPartitionName(targetBrowserTabKey),
        });
        this.webviews.set(targetBrowserTabKey, sourceWebviewHost);
      } else {
        this.disposeWebviewHost(
          sourceConversationId,
          sourceBrowserTabId,
          sourceBrowserTabKey,
          sourceSnapshot?.tabType ?? WEB_TAB_TYPE,
        );
      }
    }
    const sourceBrowserUseViewportSize =
      this.browserUseViewportSizes.get(sourceBrowserTabKey) ?? null;
    const hadSourceBrowserUseTab =
      this.browserUseTabKeys.has(sourceBrowserTabKey);
    const hadSourceTabCapture =
      this.tabCaptureActiveKeys.delete(sourceBrowserTabKey);
    const sourceMountState = this.mountStates.get(sourceBrowserTabKey) ?? null;
    const wasSourceBrowserUseActive =
      this.browserUseActiveTabKeys.delete(sourceBrowserTabKey);
    this.browserUseCaptureSurfaceSizes.delete(sourceBrowserTabKey);
    this.browserUseCursorStates.delete(sourceBrowserTabKey);
    this.browserUseTabKeys.delete(sourceBrowserTabKey);
    this.browserUseViewportSizes.delete(sourceBrowserTabKey);
    this.mountStates.delete(sourceBrowserTabKey);
    this.pendingElectronTransfers.set(targetBrowserTabKey, {
      sourceBrowserTabId,
      sourceConversationId,
    });
    vscodeBridge.dispatchMessage("browser-sidebar-command", {
      browserTabId: sourceBrowserTabId,
      command: {
        targetBrowserTabId,
        targetConversationId,
        type: "transfer-conversation",
      },
      conversationId: sourceConversationId,
    });
    let movedBrowserUseTab = false;
    if (hadSourceBrowserUseTab) {
      this.browserUseTabKeys.add(targetBrowserTabKey);
      this.syncBrowserUseTabKeys(sourceConversationId);
      movedBrowserUseTab = true;
    }
    if (wasSourceBrowserUseActive) {
      this.browserUseActiveTabKeys.add(targetBrowserTabKey);
    }
    if (sourceBrowserUseViewportSize != null) {
      this.browserUseViewportSizes.set(
        targetBrowserTabKey,
        sourceBrowserUseViewportSize,
      );
    }
    if (hadSourceTabCapture && shouldMoveWebview) {
      this.tabCaptureActiveKeys.add(targetBrowserTabKey);
    }
    if (sourceMountState != null) {
      this.mountStates.set(targetBrowserTabKey, {
        claimKeys: new Set(),
        generation: sourceMountState.generation,
      });
    }
    sourceWebviewHost?.setBrowserUseCaptureSurfaceSize(null);
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer reassociated browser sidebar tab",
      {
        safe: {
          sourceBrowserTabId,
          sourceConversationId,
          targetBrowserTabId,
          targetConversationId,
        },
      },
    );
    const sourceDeviceToolbarTabState =
      this.deviceToolbarTabStates.get(sourceBrowserTabKey);
    if (sourceSnapshot != null) {
      this.snapshots.delete(sourceBrowserTabKey);
      this.snapshots.set(targetBrowserTabKey, sourceSnapshot);
    }
    if (movedBrowserUseTab) {
      this.syncBrowserUseTabKeys(targetConversationId);
    }
    if (sourceDeviceToolbarTabState != null) {
      this.deviceToolbarTabStates.delete(sourceBrowserTabKey);
      this.deviceToolbarTabStates.set(
        targetBrowserTabKey,
        sourceDeviceToolbarTabState,
      );
    }
    if (options?.removeSourceBrowserStateWhenEmpty) {
      this.removeConversationBrowserStateIfEmpty(sourceConversationId);
    }
    this.emitChange();
  }
  consumePendingElectronTransfer(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): BrowserSidebarPendingElectronTransfer | null {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const pendingTransfer =
      this.pendingElectronTransfers.get(browserTabKey) ?? null;
    if (pendingTransfer == null) return null;
    this.pendingElectronTransfers.delete(browserTabKey);
    return pendingTransfer;
  }
  peekPendingElectronTransfer(
    conversationId: string,
    browserTabId = getDefaultBrowserTabId(conversationId),
  ): BrowserSidebarPendingElectronTransfer | null {
    return (
      this.pendingElectronTransfers.get(
        createBrowserTabKey(conversationId, browserTabId),
      ) ?? null
    );
  }
  disposeAll(): void {
    this.electronPageHandoff.disposeAll();
    this.snapshots.clear();
    this.browserUseCursorStates.clear();
    this.browserUseActiveTabKeys.clear();
    this.browserUseTabKeys.clear();
    this.browserUseTabIdsKeysByConversation.clear();
    this.browserUseTabSummarySyncKeysByConversation.clear();
    this.refreshBrowserUseTabs();
    this.browserUseCaptureSurfaceSizes.clear();
    this.browserUseViewportSizes.clear();
    this.tabCaptureActiveKeys.clear();
    this.deviceToolbarTabStates.clear();
    this.pendingElectronTransfers.clear();
    this.mountStates.clear();
    for (const webviewHost of this.webviews.values()) {
      webviewHost.dispose();
    }
    this.webviews.clear();
    this.transferredWebviewKeys.clear();
    this.emitChange();
  }
  emitChange(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }
  removeElectronWebviewFromHandoff(
    webviewHost: BrowserSidebarWebviewHost,
  ): void {
    if (webviewHost instanceof ElectronBrowserSidebarWebviewHost) {
      this.electronPageHandoff.disposeHost(webviewHost);
    }
  }
  resyncAttachedWebviews(): void {
    for (const webviewHost of this.webviews.values()) {
      webviewHost.resync();
    }
  }
  disposeWebviewHost(
    conversationId: string,
    browserTabId: string,
    browserTabKey: string,
    tabType: string | null | undefined,
  ): void {
    const webviewHost = this.webviews.get(browserTabKey) ?? null;
    this.webviews.delete(browserTabKey);
    if (webviewHost == null) return;
    if (
      tabType === "closed" &&
      webviewHost instanceof ElectronBrowserSidebarWebviewHost
    ) {
      this.electronPageHandoff.removeTab(webviewHost);
    } else {
      this.removeElectronWebviewFromHandoff(webviewHost);
    }
    webviewHost.dispose();
    vscodeLogger.info(
      "IAB_LIFECYCLE renderer removed browser sidebar webview",
      {
        safe: {
          browserTabId,
          conversationId,
          tabType,
        },
      },
    );
  }
  destroyWebviewAtHostRequest(
    conversationId: string,
    browserTabId: string,
    mountGeneration: number | undefined,
    reason: string,
    teardownId?: string,
  ): void {
    const browserTabKey = createBrowserTabKey(conversationId, browserTabId);
    const webviewHost = this.webviews.get(browserTabKey) ?? null;
    if (
      webviewHost?.shouldDestroyForHostRequest({
        mountGeneration,
        reason,
      }) !== false
    ) {
      this.disposeWebviewHost(
        conversationId,
        browserTabId,
        browserTabKey,
        reason,
      );
    }
    if (reason === "closed") {
      this.removeTab(conversationId, browserTabId);
    }
    vscodeBridge.dispatchMessage("browser-sidebar-webview-destroyed", {
      browserTabId,
      conversationId,
      reason,
      teardownId,
    });
  }
  private getFirstConversationBrowserTabId(
    conversationId: string,
    browserTabKeys: Iterable<string>,
  ): string | null {
    const conversationKeyPrefix = `${conversationId}\0`;
    for (const browserTabKey of browserTabKeys) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        return browserTabKey.slice(conversationKeyPrefix.length);
      }
    }
    return null;
  }
  private getConversationBrowserTabIdsFromKeys(
    conversationId: string,
    browserTabKeys: Iterable<string>,
  ): string[] {
    const conversationKeyPrefix = `${conversationId}\0`;
    const browserTabIds: string[] = [];
    for (const browserTabKey of browserTabKeys) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        browserTabIds.push(browserTabKey.slice(conversationKeyPrefix.length));
      }
    }
    return browserTabIds;
  }
  private removeConversationBrowserStateIfEmpty(conversationId: string): void {
    if (this.getConversationBrowserTabIds(conversationId).length === 0) {
      this.removeConversationTabs(conversationId);
    }
  }
  private syncBrowserUseTabKeys(conversationId: string): void {
    const browserTabIds = this.getConversationBrowserTabIdsFromKeys(
      conversationId,
      this.browserUseTabKeys,
    );
    if (browserTabIds.length === 0) {
      this.browserUseTabIdsKeysByConversation.delete(conversationId);
      this.browserUseTabSummarySyncKeysByConversation.delete(conversationId);
      this.refreshBrowserUseTabs();
      return;
    }
    this.browserUseTabIdsKeysByConversation.set(
      conversationId,
      browserTabIds.join("\0"),
    );
    this.browserUseTabSummarySyncKeysByConversation.set(
      conversationId,
      browserTabIds
        .map((browserTabId) =>
          createBrowserUseSummarySyncKey(
            browserTabId,
            this.getSnapshot(conversationId, browserTabId),
          ),
        )
        .join("\0"),
    );
    this.refreshBrowserUseTabs();
  }
  private refreshBrowserUseTabs(): void {
    this.browserUseTabs = Array.from(
      this.browserUseTabKeys,
      parseBrowserTabKey,
    );
  }
  private removeConversationTabs(conversationId: string): void {
    const conversationKeyPrefix = `${conversationId}\0`;
    this.electronPageHandoff.removeConversation(conversationId);
    for (const browserTabKey of this.snapshots.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.snapshots.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.browserUseActiveTabKeys) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.browserUseActiveTabKeys.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.browserUseTabKeys) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.browserUseTabKeys.delete(browserTabKey);
      }
    }
    this.refreshBrowserUseTabs();
    for (const browserTabKey of this.browserUseCursorStates.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.browserUseCursorStates.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.browserUseCaptureSurfaceSizes.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.browserUseCaptureSurfaceSizes.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.browserUseViewportSizes.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.browserUseViewportSizes.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.tabCaptureActiveKeys) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.tabCaptureActiveKeys.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.deviceToolbarTabStates.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.deviceToolbarTabStates.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.pendingElectronTransfers.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.pendingElectronTransfers.delete(browserTabKey);
      }
    }
    for (const browserTabKey of this.mountStates.keys()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.mountStates.delete(browserTabKey);
      }
    }
    for (const [browserTabKey, webviewHost] of this.webviews.entries()) {
      if (browserTabKey.startsWith(conversationKeyPrefix)) {
        this.webviews.delete(browserTabKey);
        this.removeElectronWebviewFromHandoff(webviewHost);
        webviewHost.dispose();
      }
    }
    this.browserUseTabIdsKeysByConversation.delete(conversationId);
    this.browserUseTabSummarySyncKeysByConversation.delete(conversationId);
  }
  private markWebviewAttached(
    conversationId: string,
    browserTabId: string,
    mountGeneration: number,
  ): void {
    const currentMountGeneration = this.getMountGeneration(
      conversationId,
      browserTabId,
    );
    if (currentMountGeneration === mountGeneration) {
      clearQueuedBrowserSidebarTab(conversationId, browserTabId);
    }
    this.electronPageHandoff.acknowledgeAttachment(
      conversationId,
      browserTabId,
      mountGeneration,
      currentMountGeneration,
    );
    this.emitChange();
  }
}
function createBrowserTabKey(
  conversationId: string,
  browserTabId: string,
): string {
  return `${conversationId}\0${browserTabId}`;
}
function parseBrowserTabKey(browserTabKey: string): BrowserSidebarTabRef {
  const separatorIndex = browserTabKey.indexOf("\0");
  return {
    browserTabId: browserTabKey.slice(separatorIndex + 1),
    conversationId: browserTabKey.slice(0, separatorIndex),
  };
}
function createBrowserUseSummarySyncKey(
  browserTabId: string,
  snapshot: BrowserSidebarSnapshot | null,
): string {
  return [
    browserTabId,
    snapshot?.tabType ?? "",
    snapshot?.title ?? "",
    snapshot?.url ?? "",
    snapshot?.faviconUrl ?? "",
  ].join("\t");
}
function createElementKey(
  conversationId: string,
  browserTabId: string,
): string {
  return browserTabId === getDefaultBrowserTabId(conversationId)
    ? conversationId
    : createBrowserTabKey(conversationId, browserTabId);
}
function getDefaultBrowserTabId(
  conversationId: string,
  browserTabId?: string | null,
): string {
  return browserTabId ?? getBrowserTabLegacyKey(conversationId);
}
function hasExplicitBrowserTabArgs(
  args: GetElectronWebviewArgs,
): args is [
  browserTabId: string,
  initialUrl: string,
  options?: BrowserSidebarElectronWebviewOptions,
] {
  return typeof args[1] === "string";
}
function createTransferKey(sourceKey: string, targetKey: string): string {
  return `${sourceKey}\0${targetKey}`;
}
export const browserSidebarManager = new BrowserSidebarManager();
