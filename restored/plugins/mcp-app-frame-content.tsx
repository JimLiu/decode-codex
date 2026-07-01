// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Runtime content host for an MCP app frame.

import * as React from "react";
import { useIntl } from "../vendor/react-intl";
import equal from "fast-deep-equal";
import {
  buildConversationRoute,
  buildMcpAppSandboxId,
  buildMcpAppSandboxSourceUrl,
  buildMcpToolList,
  conversationCwdFamily,
  downloadBlob,
  exitMcpAppFullScreen,
  extractToolResponseMetadata,
  isCodexAppsServer,
  logger,
  openExternalLink,
  parseFollowUpRequest,
  recordMcpResourceRead,
  resolveMcpConnectorId,
  rightPanelColumnCountSignal,
  selectMcpToolResult,
  sidePanelTabController,
  useComposerMessageSetter,
  useNavigate,
  usePendingWorktreeController,
  useRightPanelLayout,
  useScopedStore,
  useScopedValue,
  appRootScope,
} from "../boundaries/onboarding-commons-externals.facade";
import { closeMcpAppTab, mcpAppTabId, openMcpAppTab } from "./mcp-app-tab";
import { updateMcpAppFrameState } from "./mcp-app-frame-state";
import { connectMcpAppSandbox } from "./mcp-app-sandbox-bridge";
import {
  environmentStatusSchema,
  openExternalRequestSchema,
} from "./mcp-app-sandbox-schemas";
import {
  buildMcpAppHostContext,
  buildMcpAppUserAgent,
  DEFAULT_MCP_APP_SAFE_AREA,
  measureMcpAppContainerDimensions,
  resolveMcpAppSafeArea,
} from "./mcp-app-host-context";
import {
  mcpAppStyleVariablesAtom,
  mcpAppSurfaceBackgroundColorAtom,
  resolveMcpAppColorScheme,
} from "./mcp-app-style-variables";
import {
  callMcpAppTool,
  collectMcpServerTools,
  fetchMcpServerStatus,
  readMcpAppResource,
} from "./mcp-app-tool-proxy";
import {
  createMcpAppError,
  MCP_APP_DEFAULT_ERROR_CODE,
  normalizeMcpAppError,
  runMcpAppHandler,
  swallowMcpAppRpcError,
} from "./mcp-app-errors";
import {
  backgroundColorSchema,
  DEFAULT_NAVIGATION_STATE,
  displayModeRequestSchema,
  fileDownloadParamsSchema,
  intrinsicHeightSchema,
  modelContextUpdateSchema,
  navigationStateSchema,
  proxyRequestSchema,
  resourceReadParamsSchema,
  toolCallParamsSchema,
  toolResultUpdateSchema,
  widgetStateSchema,
  type McpAppNavigationState,
} from "./mcp-app-schemas";
import {
  createWorktreeForFollowUp,
  extractFollowUpImages,
  extractFollowUpText,
  startThreadForFollowUp,
} from "./mcp-app-follow-up";
import { positionMcpAppFrame } from "./mcp-app-frame-positioning";
import {
  toMcpAppToolInput,
  toMcpAppToolOutput,
} from "./mcp-app-frame-tool-data";
import { McpAppFrameOverlays } from "./mcp-app-frame-overlays";
import { useMcpAppFrameHost } from "./use-mcp-app-frame-host";
import { useMcpAppFrameStyles } from "./use-mcp-app-frame-styles";
import { useMcpAppSandboxInitConfig } from "./use-mcp-app-sandbox-init-config";
import type {
  McpAppFrameContentProps,
  PendingMcpAppFollowUp,
} from "./mcp-app-frame-types";

export function McpAppFrameContent({
  conversationId,
  csp,
  fullSurface,
  hostId,
  html,
  inlineFrameContainer,
  mcpAppId,
  mcpAppScope,
  mcpServerStatuses,
  prefersBorder,
  overrideMcpRequest,
  sandboxOriginScope,
  server,
  sidePanelIcon,
  sidePanelTitle,
  title,
  toolArguments,
  toolResult,
  widgetDomain,
  frameState,
}: McpAppFrameContentProps) {
  const store = useScopedStore(appRootScope);
  const intl = useIntl();
  const navigate = useNavigate();
  const setComposerMessage = useComposerMessageSetter(conversationId);
  const { createPendingWorktree } = usePendingWorktreeController();
  const activeTab = useScopedValue(sidePanelTabController.activeTab$) as {
    tabId: string;
  } | null;
  const rightPanelColumnCount = useScopedValue(rightPanelColumnCountSignal) as {
    get: () => number;
  };
  const { rightPanelLayoutTick } = useRightPanelLayout();
  const styleVariables = useScopedValue(mcpAppStyleVariablesAtom);
  const surfaceBackgroundColor = useScopedValue(
    mcpAppSurfaceBackgroundColorAtom,
  );
  const { isFullScreen } = frameState;

  const isUnmountedRef = React.useRef(false);
  const lastWidgetDataRef = React.useRef<unknown>(null);
  const [sidePanelElement, setSidePanelElement] =
    React.useState<HTMLElement | null>(null);
  const [backgroundColor, setBackgroundColor] = React.useState<string | null>(
    null,
  );
  const [sandboxApi, setSandboxApi] = React.useState<any>(null);
  const [navigationState, setNavigationState] =
    React.useState<McpAppNavigationState>(DEFAULT_NAVIGATION_STATE);
  const [widgetId, setWidgetId] = React.useState<string | null>(null);
  const [isWidgetReady, setIsWidgetReady] = React.useState(false);
  const [widgetState, setWidgetState] = React.useState<unknown>(null);
  const [pendingFollowUp, setPendingFollowUp] =
    React.useState<PendingMcpAppFollowUp | null>(null);

  const toolInput = React.useMemo(
    () => toMcpAppToolInput(toolArguments),
    [toolArguments],
  );
  const selectedToolResult = React.useMemo(
    () =>
      selectMcpToolResult({
        isCodexAppsServer: isCodexAppsServer(server),
        toolResult,
      }),
    [server, toolResult],
  );
  const toolOutput = React.useMemo(
    () => toMcpAppToolOutput(selectedToolResult),
    [selectedToolResult],
  );
  const toolResponseMetadata = React.useMemo(
    () => extractToolResponseMetadata({ toolResult: selectedToolResult }),
    [selectedToolResult],
  );
  const readWidgetData = React.useEffectEvent(() => ({
    toolInput,
    toolOutput,
    toolResponseMetadata,
  }));

  const sandboxSourceUrl = buildMcpAppSandboxSourceUrl({
    locale: intl.locale,
    originScope: sandboxOriginScope,
    widgetDomain,
  });
  const sandboxId = React.useMemo(
    () =>
      buildMcpAppSandboxId({
        originScope: sandboxOriginScope,
        sourceUrl: sandboxSourceUrl,
      }),
    [sandboxSourceUrl, sandboxOriginScope],
  );
  const { frameElement, isFramePlaced, setIsFramePlaced, webviewElement } =
    useMcpAppFrameHost({
      mcpAppId,
      sandboxId,
      sandboxSourceUrl,
    });
  const readSandboxInitConfig = useMcpAppSandboxInitConfig({
    csp,
    html,
    locale: intl.locale,
    sandboxSourceUrl,
  });

  const connectedSidePanelElement =
    sidePanelElement?.isConnected === true ? sidePanelElement : null;
  const connectedInlineContainer =
    inlineFrameContainer?.isConnected === true ? inlineFrameContainer : null;
  const isCardSurface =
    !isFullScreen &&
    !fullSurface &&
    inlineFrameContainer?.dataset.mcpAppInlineSurface === "card";
  const frameParent = frameElement?.parentElement;
  const portalTarget =
    connectedInlineContainer?.closest("[data-mcp-app-portal-target='true']") ??
    (frameParent instanceof HTMLElement &&
    frameParent.dataset.mcpAppPortalTarget === "true"
      ? frameParent
      : document.querySelector("[data-mcp-app-portal-target='true']"));

  useMcpAppFrameStyles({
    backgroundColor,
    frameElement,
    fullSurface,
    isCardSurface,
    isFullScreen,
    prefersBorder,
    title,
    webviewElement,
  });

  const handleBackgroundColor = React.useEffectEvent((value: unknown) => {
    const parsed = backgroundColorSchema.safeParse(value);
    if (parsed.success) setBackgroundColor(parsed.data);
  });
  const handleEnvironmentError = React.useEffectEvent(() => {
    updateMcpAppFrameState(store, mcpAppId, {
      sandboxError: new Error("The MCP app sandbox failed to load."),
    });
  });
  const handleIntrinsicHeight = React.useEffectEvent((value: unknown) => {
    const parsed = intrinsicHeightSchema.safeParse(value);
    if (parsed.success)
      updateMcpAppFrameState(store, mcpAppId, { intrinsicHeight: parsed.data });
  });
  const handleIntrinsicWidth = React.useEffectEvent((value: unknown) => {
    intrinsicHeightSchema.safeParse(value);
  });
  const handleNavigationState = React.useEffectEvent((value: unknown) => {
    const parsed = navigationStateSchema.safeParse(value);
    if (parsed.success)
      setNavigationState({
        canGoBack: parsed.data.canGoBack,
        canGoForward: parsed.data.canGoForward,
      });
  });
  const handleOpenExternal = React.useEffectEvent((value: unknown) => {
    const parsed = openExternalRequestSchema.safeParse(value);
    if (parsed.success)
      openExternalLink({
        href: parsed.data.href,
        initiator: "mcp_app_resource",
        openTarget: "external-browser",
      });
  });
  const handleRequestDisplayMode = React.useEffectEvent((value: unknown) => {
    const parsed = displayModeRequestSchema.safeParse(value);
    if (parsed.success) {
      const wantsFullScreen = parsed.data.mode === "fullscreen";
      const mode = parsed.data.mode;
      if (wantsFullScreen) {
        if (frameElement != null) frameElement.style.display = "none";
        exitMcpAppFullScreen(store, mcpAppId);
      }
      updateMcpAppFrameState(store, mcpAppId, {
        isFullScreen: wantsFullScreen,
      });
      if (widgetId != null && widgetId !== null && sandboxApi != null) {
        swallowMcpAppRpcError(
          sandboxApi.setWidgetView({
            displayMode: mode,
            isTombstone: false,
            viewParams: toolOutput,
            widgetId,
          }),
        );
        if (frameElement != null)
          swallowMcpAppRpcError(
            sandboxApi.notifyMcpAppsHostContext({
              hostContext: buildMcpAppHostContext({
                containerDimensions:
                  measureMcpAppContainerDimensions(frameElement),
                displayMode: mode,
                locale: intl.locale,
                safeAreaInsets: resolveMcpAppSafeArea({
                  displayMode: mode,
                  hasNavigationHistory:
                    navigationState.canGoBack || navigationState.canGoForward,
                }).insets,
                styleVariables,
                theme: resolveMcpAppColorScheme(),
                userAgent: buildMcpAppUserAgent(),
              }),
            }),
          );
      }
      return { mode };
    }
    return { mode: isFullScreen ? "fullscreen" : "inline" };
  });
  const readDisplayMode = React.useEffectEvent(() =>
    isFullScreen ? "fullscreen" : "inline",
  );
  const readWidgetState = React.useEffectEvent(() => widgetState);

  const applyModelContext = (update: {
    content: unknown[];
    presentation?: Record<string, unknown>;
  }) => {
    const text = extractFollowUpText(update.content);
    const imageAttachments = extractFollowUpImages(update.content);
    const { composerLabel, ...rest } = update.presentation ?? {};
    const trimmedLabel =
      typeof composerLabel === "string" ? composerLabel.trim() : undefined;
    setComposerMessage({
      ...rest,
      ...(trimmedLabel != null && trimmedLabel.length > 0
        ? { composerLabel: trimmedLabel }
        : {}),
      id: mcpAppId,
      imageAttachments,
      text,
      title,
    });
  };

  const handleUpdateWidgetState = React.useEffectEvent(
    (_state: unknown, modelContext: unknown) => {
      const parsedState = widgetStateSchema.safeParse(modelContext);
      setWidgetState(parsedState.success ? parsedState.data : null);
      const parsedModelContext = toolResultUpdateSchema.safeParse(modelContext);
      if (parsedModelContext.success)
        applyModelContext(parsedModelContext.data as any);
    },
  );
  const handleNavigateDelta = React.useEffectEvent((delta: number) => {
    if (sandboxApi != null)
      swallowMcpAppRpcError(sandboxApi.navigate({ delta }));
  });
  const handleSendFollowUp = React.useEffectEvent(async (request: unknown) => {
    const { prompt, title: followUpTitle } = parseFollowUpRequest(request);
    if (pendingFollowUp != null)
      throw createMcpAppError(
        "A follow-up message is already awaiting confirmation",
        MCP_APP_DEFAULT_ERROR_CODE,
      );
    const confirmation = await new Promise<any>((resolve, reject) => {
      setPendingFollowUp({
        prompt,
        reject,
        resolve,
        title: followUpTitle,
      });
    });
    switch (confirmation.type) {
      case "current-thread": {
        const cwd = store.get(conversationCwdFamily, conversationId);
        if (cwd == null) throw new Error("The thread is unavailable");
        confirmation.enqueue({
          context: {
            addedFiles: [],
            fileAttachments: [],
            ideContext: null,
            imageAttachments: [],
            prompt: confirmation.prompt,
            workspaceRoots: [cwd],
          },
          cwd,
          text: confirmation.prompt,
        });
        return;
      }
      case "new-thread":
        if (confirmation.executionMode === "worktree") {
          await navigate(
            `/worktree-init-v2/${await createWorktreeForFollowUp({
              createPendingWorktree,
              hostId,
              prompt: confirmation.prompt,
              projectRoot: confirmation.projectRoot,
              scope: store,
            })}`,
          );
          return;
        }
        await navigate(
          buildConversationRoute(
            await startThreadForFollowUp({
              hostId,
              prompt: confirmation.prompt,
              projectRoot: confirmation.projectRoot,
              scope: store,
            }),
          ),
        );
        return;
    }
  });

  const withOverride = async (request: unknown, run: () => unknown) =>
    overrideMcpRequest == null ? run() : overrideMcpRequest(request);
  const callTool = (toolCallParams: any) =>
    withOverride({ method: "tools/call", params: toolCallParams }, () =>
      callMcpAppTool({
        conversationId,
        hostId,
        mcpAppScope,
        mcpServerStatuses,
        server,
        toolCallParams,
      }),
    );
  const handleCallTool = React.useEffectEvent(
    async (name: string, toolArgs: unknown) => {
      const parsed = toolCallParamsSchema.safeParse({
        arguments: toolArgs,
        name,
      });
      if (!parsed.success)
        throw createMcpAppError("Invalid MCP tool call params", -32602);
      return callTool(parsed.data);
    },
  );
  const handleCallMcp = React.useEffectEvent(async (request: unknown) => {
    const parsedRequest = proxyRequestSchema.safeParse(request);
    if (!parsedRequest.success)
      throw createMcpAppError("Invalid MCP proxy request", -32602);
    const { method, params } = parsedRequest.data;
    switch (method) {
      case "ping":
        return {};
      case "ui/download-file": {
        const parsed = fileDownloadParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP file download params", -32602);
        downloadBlob(parsed.data.blob, parsed.data.name);
        return {};
      }
      case "ui/update-model-context": {
        const parsed = modelContextUpdateSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP model context params", -32602);
        applyModelContext(parsed.data as any);
        return {};
      }
      case "tools/call": {
        const parsed = toolCallParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP tool call params", -32602);
        return callTool(parsed.data);
      }
      case "resources/read": {
        const parsed = resourceReadParamsSchema.safeParse(params);
        if (!parsed.success)
          throw createMcpAppError("Invalid MCP resource read params", -32602);
        return withOverride({ method, params: parsed.data }, async () => {
          runMcpAppHandler(() => {
            recordMcpResourceRead({
              mcpAppScope,
              server,
              uri: parsed.data.uri,
            });
          });
          try {
            return await readMcpAppResource({
              hostId,
              threadId: conversationId,
              server,
              uri: parsed.data.uri,
            });
          } catch (error) {
            throw normalizeMcpAppError(error, "MCP resource read failed");
          }
        });
      }
      case "tools/list":
        return withOverride(parsedRequest.data, async () => {
          const tools = collectMcpServerTools(
            await fetchMcpServerStatus({
              hostId,
              mcpServerStatuses: isCodexAppsServer(server)
                ? (mcpServerStatuses as any)
                : undefined,
              server,
            }),
          );
          const connectorId = resolveMcpConnectorId({
            mcpAppScope,
            server,
            tools,
          });
          return {
            tools: runMcpAppHandler(() =>
              buildMcpToolList({ connectorId, server, tools }),
            ),
          };
        });
      case "resources/list":
        return withOverride(parsedRequest.data, async () =>
          isCodexAppsServer(server)
            ? { resources: [] }
            : {
                resources: (
                  await fetchMcpServerStatus({ hostId, server } as any)
                ).resources,
              },
        );
      case "resources/templates/list":
        return withOverride(parsedRequest.data, async () =>
          isCodexAppsServer(server)
            ? { resourceTemplates: [] }
            : {
                resourceTemplates: (
                  await fetchMcpServerStatus({ hostId, server } as any)
                ).resourceTemplates,
              },
        );
      case "prompts/list":
        return withOverride(parsedRequest.data, async () => ({ prompts: [] }));
      default:
        return withOverride(parsedRequest.data, async () => {
          throw createMcpAppError(
            `Unsupported MCP proxy method: ${method}`,
            -32601,
          );
        });
    }
  });

  React.useLayoutEffect(() => {
    if (frameElement == null || webviewElement == null) return;
    const targetContainer = isFullScreen
      ? connectedSidePanelElement
      : connectedInlineContainer;
    if (targetContainer == null || portalTarget == null) {
      frameElement.style.display = "none";
      return;
    }
    if (webviewElement.parentElement !== frameElement)
      frameElement.appendChild(webviewElement);
    if (frameElement.parentElement !== portalTarget)
      portalTarget.appendChild(frameElement);
    if (!isFramePlaced) setIsFramePlaced(true);

    let observedOffsetParent: Element | null = null;
    const mutationObserver = new MutationObserver(() => {
      reposition();
    });
    const observeOffsetParent = () => {
      const offsetParent = isFullScreen ? frameElement.offsetParent : null;
      if (offsetParent !== observedOffsetParent) {
        mutationObserver.disconnect();
        observedOffsetParent = offsetParent;
        if (offsetParent != null)
          mutationObserver.observe(offsetParent, {
            attributeFilter: ["class", "style"],
            attributes: true,
          });
      }
    };
    const reposition = () => {
      if (isFullScreen && rightPanelColumnCount.get() !== 1) {
        frameElement.style.display = "none";
        return;
      }
      positionMcpAppFrame({
        frameElement,
        isFullScreen,
        targetFrameContainer: targetContainer,
        threadFrameContainer: portalTarget as HTMLElement,
      });
      frameElement.style.display = "";
      observeOffsetParent();
    };
    let animationFrame: number | null = null;
    const scheduleReposition = () => {
      animationFrame ??= window.requestAnimationFrame(() => {
        animationFrame = null;
        reposition();
      });
    };
    reposition();
    if (typeof ResizeObserver === "undefined")
      return () => {
        mutationObserver.disconnect();
        if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
      };
    const resizeObserver = new ResizeObserver(reposition);
    resizeObserver.observe(targetContainer);
    resizeObserver.observe(portalTarget);
    const unsubscribe = rightPanelLayoutTick.on("change", scheduleReposition);
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      unsubscribe();
      if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
    };
  }, [
    frameElement,
    connectedInlineContainer,
    isFullScreen,
    isFramePlaced,
    rightPanelColumnCount,
    rightPanelLayoutTick,
    webviewElement,
    connectedSidePanelElement,
    portalTarget,
  ]);

  React.useLayoutEffect(() => {
    isUnmountedRef.current = false;
    return () => {
      isUnmountedRef.current = true;
      closeMcpAppTab(store, mcpAppId);
    };
  }, [mcpAppId, store]);

  const registerSidePanel = React.useEffectEvent(
    (onExitFullScreen: () => void) => {
      openMcpAppTab(store, {
        activate: !(
          store.get(sidePanelTabController.tabs$) as { tabId: string }[]
        ).some((tab) => tab.tabId === mcpAppTabId(mcpAppId)),
        icon: sidePanelIcon,
        mcpAppId,
        onExitFullScreen,
        onPanelElementChange: setSidePanelElement,
        title: sidePanelTitle,
      });
    },
  );
  const handleExitFullScreen = React.useEffectEvent(() => {
    if (!isUnmountedRef.current) {
      exitMcpAppFullScreen(store, mcpAppId);
      updateMcpAppFrameState(store, mcpAppId, { isFullScreen: false });
    }
  });

  React.useLayoutEffect(() => {
    if (isFullScreen) {
      registerSidePanel(handleExitFullScreen);
      return;
    }
    closeMcpAppTab(store, mcpAppId);
  }, [
    isFullScreen,
    mcpAppId,
    store,
    sidePanelIcon?.alt,
    sidePanelIcon?.logoDarkUrl,
    sidePanelIcon?.logoUrl,
    sidePanelTitle,
  ]);

  React.useLayoutEffect(() => {
    if (webviewElement == null || frameElement == null || !isFramePlaced)
      return;
    updateMcpAppFrameState(store, mcpAppId, { sandboxError: null });
    setIsWidgetReady(false);
    setNavigationState(DEFAULT_NAVIGATION_STATE);
    lastWidgetDataRef.current = null;
    const initConfig = readSandboxInitConfig();
    if (initConfig == null) {
      logger.warning("mcp_app_sandbox.init_config_missing", {
        safe: {},
        sensitive: { mcpAppId },
      });
      updateMcpAppFrameState(store, mcpAppId, {
        sandboxError: new Error("The MCP app sandbox failed to load."),
      });
      return;
    }
    const abortController = new AbortController();
    let connectedApi: any = null;
    const widgetIdValue = crypto.randomUUID();
    const initialWidgetState = readWidgetState();
    const { toolInput, toolOutput, toolResponseMetadata } = readWidgetData();
    connectMcpAppSandbox({
      hostApiHandlers: {
        callMcp: handleCallMcp,
        callTool: handleCallTool,
        notifyBackgroundColor: handleBackgroundColor,
        notifyEnvironmentError: handleEnvironmentError,
        notifyIntrinsicHeight: handleIntrinsicHeight,
        notifyIntrinsicWidth: handleIntrinsicWidth,
        notifyNavigation: (value: unknown) => {
          if (!abortController.signal.aborted) handleNavigationState(value);
        },
        notifySecurityPolicyViolation: () => {},
        openExternal: handleOpenExternal,
        requestDisplayMode: handleRequestDisplayMode,
        sendFollowUpMessage: handleSendFollowUp,
        sendInstrument: () => {},
        updateWidgetState: handleUpdateWidgetState,
      },
      origin: initConfig.sandboxOrigin,
      sandboxId,
      signal: abortController.signal,
      sourceUrl: initConfig.sourceUrl,
      webview: webviewElement,
    })
      .then(async (api) => {
        if (abortController.signal.aborted) return;
        connectedApi = api;
        setSandboxApi(api);
        setWidgetId(widgetIdValue);
        const displayMode = readDisplayMode();
        const theme = resolveMcpAppColorScheme();
        const containerDimensions =
          measureMcpAppContainerDimensions(frameElement);
        const userAgent = buildMcpAppUserAgent();
        const surfaceColor = store.get(mcpAppSurfaceBackgroundColorAtom);
        const hostContext = buildMcpAppHostContext({
          containerDimensions,
          displayMode,
          locale: initConfig.locale,
          safeAreaInsets: DEFAULT_MCP_APP_SAFE_AREA.insets,
          styleVariables: store.get(mcpAppStyleVariablesAtom),
          theme,
          userAgent,
        });
        const widgetStream = api.runWidgetCode({
          csp: initConfig.csp,
          displayMode,
          features: ["fullscreen"],
          html: initConfig.html,
          isFirstParty: false,
          isSidebarOpen: false,
          isTombstone: false,
          maxHeight: containerDimensions.maxHeight,
          maxWidth: containerDimensions.maxWidth,
          measureWidth: false,
          mcpApps: {
            hostCapabilities: {
              logging: {},
              message: {},
              openLinks: {},
              serverResources: {},
              serverTools: {},
              updateModelContext: { image: {}, text: {} },
              ...(initConfig.csp == null
                ? {}
                : {
                    sandbox: {
                      csp: {
                        baseUriDomains: initConfig.csp.baseUriDomains,
                        connectDomains: initConfig.csp.connectDomains,
                        frameDomains: initConfig.csp.frameDomains,
                        resourceDomains: initConfig.csp.resourceDomains,
                      },
                    },
                  }),
            },
            hostContext,
            hostInfo: { name: "chatgpt" },
          },
          safeArea: DEFAULT_MCP_APP_SAFE_AREA,
          theme,
          toolInput,
          toolOutput,
          toolResponseMetadata,
          userAgent,
          viewParams: toolOutput,
          widgetId: widgetIdValue,
          widgetState: initialWidgetState,
        });
        let didNotifyReady = false;
        for await (const event of widgetStream) {
          if (abortController.signal.aborted) break;
          if (
            !didNotifyReady &&
            environmentStatusSchema.safeParse(event).success
          ) {
            didNotifyReady = true;
            setIsWidgetReady(true);
            swallowMcpAppRpcError(
              api.setWidgetView({
                displayMode,
                isTombstone: false,
                viewParams: toolOutput,
                widgetId: widgetIdValue,
              }),
            );
            swallowMcpAppRpcError(api.setTheme({ theme }));
            swallowMcpAppRpcError(
              api.setSafeArea({ safeArea: DEFAULT_MCP_APP_SAFE_AREA }),
            );
            swallowMcpAppRpcError(
              api.setAdditionalGlobals({
                additionalGlobals: {
                  isSidebarOpen: false,
                  maxHeight: containerDimensions.maxHeight,
                  maxWidth: containerDimensions.maxWidth,
                  surfaceBackgroundColor: surfaceColor,
                },
              }),
            );
            swallowMcpAppRpcError(
              api.notifyMcpAppsHostContext({ hostContext }),
            );
          }
        }
      })
      .catch((error: unknown) => {
        if (abortController.signal.aborted) return;
        logger.warning("mcp_app_sandbox.init_failed", {
          safe: {
            errorMessage:
              error instanceof Error ? error.message : String(error),
            errorName: error instanceof Error ? error.name : "UnknownError",
          },
          sensitive: { mcpAppId },
        });
        setIsWidgetReady(false);
        updateMcpAppFrameState(store, mcpAppId, {
          sandboxError: new Error("The MCP app sandbox failed to load."),
        });
      });
    return () => {
      abortController.abort();
      lastWidgetDataRef.current = null;
      setIsWidgetReady(false);
      setSandboxApi(null);
      setNavigationState(DEFAULT_NAVIGATION_STATE);
      setWidgetId(null);
      if (connectedApi != null)
        swallowMcpAppRpcError(
          connectedApi.requestMcpAppsResourceTeardown({ timeoutMs: 500 }),
        );
      webviewElement.removeAttribute("src");
    };
  }, [frameElement, isFramePlaced, mcpAppId, store, webviewElement, sandboxId]);

  React.useEffect(() => {
    if (!isWidgetReady || sandboxApi == null || widgetId == null) return;
    const widgetData = {
      toolInput,
      toolOutput,
      toolResponseMetadata,
      toolResult: {
        content: selectedToolResult.content,
        structuredContent: selectedToolResult.structuredContent ?? undefined,
      },
    };
    if (equal(lastWidgetDataRef.current, widgetData)) return;
    lastWidgetDataRef.current = widgetData;
    const currentWidgetState = readWidgetState();
    swallowMcpAppRpcError(
      sandboxApi.setWidgetData({
        toolInput,
        toolOutput,
        toolResponseMetadata,
        widgetId,
        widgetState: currentWidgetState,
      }),
    );
    if (toolInput != null)
      swallowMcpAppRpcError(
        sandboxApi.notifyMcpAppsToolInput({ arguments: toolInput }),
      );
    swallowMcpAppRpcError(
      sandboxApi.notifyMcpAppsToolResult({
        content: selectedToolResult.content,
        ...(selectedToolResult.structuredContent == null
          ? {}
          : { structuredContent: selectedToolResult.structuredContent }),
        ...(toolResponseMetadata == null
          ? {}
          : { _meta: toolResponseMetadata }),
      }),
    );
  }, [
    isWidgetReady,
    sandboxApi,
    toolInput,
    toolOutput,
    toolResponseMetadata,
    selectedToolResult,
    widgetId,
  ]);

  React.useEffect(() => {
    if (
      frameElement == null ||
      sandboxApi == null ||
      widgetId == null ||
      (isFullScreen && connectedSidePanelElement == null)
    )
      return;
    let animationFrame: number | null = null;
    const displayMode = isFullScreen ? "fullscreen" : "inline";
    const pushLayout = () => {
      const containerDimensions =
        measureMcpAppContainerDimensions(frameElement);
      const safeArea = resolveMcpAppSafeArea({
        displayMode,
        hasNavigationHistory:
          navigationState.canGoBack || navigationState.canGoForward,
      });
      swallowMcpAppRpcError(
        sandboxApi.setAdditionalGlobals({
          additionalGlobals: {
            isSidebarOpen: false,
            maxHeight: containerDimensions.maxHeight,
            maxWidth: containerDimensions.maxWidth,
            surfaceBackgroundColor,
          },
        }),
      );
      swallowMcpAppRpcError(sandboxApi.setSafeArea({ safeArea }));
      swallowMcpAppRpcError(
        sandboxApi.setWidgetView({
          displayMode,
          isTombstone: false,
          viewParams: toolOutput,
          widgetId,
        }),
      );
      swallowMcpAppRpcError(
        sandboxApi.notifyMcpAppsHostContext({
          hostContext: buildMcpAppHostContext({
            containerDimensions,
            displayMode,
            locale: intl.locale,
            safeAreaInsets: safeArea.insets,
            styleVariables,
            theme: resolveMcpAppColorScheme(),
            userAgent: buildMcpAppUserAgent(),
          }),
        }),
      );
    };
    const scheduleLayout = () => {
      animationFrame ??= window.requestAnimationFrame(() => {
        animationFrame = null;
        pushLayout();
      });
    };
    scheduleLayout();
    if (typeof ResizeObserver === "undefined")
      return () => {
        if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
      };
    const resizeObserver = new ResizeObserver(scheduleLayout);
    resizeObserver.observe(frameElement);
    const unsubscribe = rightPanelLayoutTick.on("change", scheduleLayout);
    return () => {
      resizeObserver.disconnect();
      unsubscribe();
      if (animationFrame != null) window.cancelAnimationFrame(animationFrame);
    };
  }, [
    frameElement,
    intl.locale,
    styleVariables,
    isFullScreen,
    navigationState.canGoBack,
    navigationState.canGoForward,
    rightPanelLayoutTick,
    sandboxApi,
    connectedSidePanelElement,
    surfaceBackgroundColor,
    toolOutput,
    widgetId,
  ]);

  return (
    <McpAppFrameOverlays
      activeTab={activeTab}
      conversationId={conversationId}
      frameElement={frameElement}
      handleNavigateDelta={handleNavigateDelta}
      isFullScreen={isFullScreen}
      mcpAppId={mcpAppId}
      navigationState={navigationState}
      pendingFollowUp={pendingFollowUp}
      sandboxApi={sandboxApi}
      sandboxId={sandboxId}
      setPendingFollowUp={setPendingFollowUp}
      webviewElement={webviewElement}
    />
  );
}
