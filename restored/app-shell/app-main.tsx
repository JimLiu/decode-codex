// Restored from ref/webview/assets/app-main-DxUcMyo0.js
// Electron main-window bootstrap for the Codex webview application.
import React from "react";
import { createRoot } from "react-dom/client";
import { once } from "../runtime/commonjs-interop";
import {
  CodexApp,
  dispatchRendererLogMessage,
  getElectronWindowChrome,
  initAppFeatureRuntimeChunk,
  initAppLoggingChunk,
  initAppRuntimeChunk,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
  initErrorBoundaryRuntimeChunk,
  initProjectsAppEntryChunk,
  initRendererSentryRuntimeChunk,
  isCompactWindowPreferred,
  logAppMainStatsigRenderRequest,
  connectAppHostServices,
  type CodexOs,
} from "../runtime/app-main-runtime";
import { AppFallback, initAppFallbackChunk } from "./app-fallback";
import { initEmptyAppChunk } from "./empty-app-initializer";
import {
  ErrorBoundary,
  initializeRendererSentry,
} from "../runtime/error-boundary";
import {
  appgenPublicationTermsSidePanelHandler,
  initPublicationTermsHandlerRegistryChunk,
  initPublicationTermsSidePanelHandlerChunk,
  registerPublicationTermsSidePanelHandler,
} from "../appgen/publication-terms";
import {
  initRegisterAppActionsChunk,
  registerWindowsTabsOpenHandler,
} from "./register-app-actions";
import { windowsTabsOpenHandler } from "./windows-tabs-open-handler";

type ReactRoot = ReturnType<typeof createRoot>;

type CodexWindow = Window &
  typeof globalThis & {
    __codexRoot?: ReactRoot;
  };

let codexRoot: ReactRoot;

async function renderElectronAppRoot(): Promise<void> {
  await prepareAppMainRender();
  await connectAppHostServices();
  logAppMainStatsigRenderRequest();
  codexRoot.render(
    <React.StrictMode>
      <ErrorBoundary name="App" fallback={<AppFallback />}>
        <CodexApp />
      </ErrorBoundary>
    </React.StrictMode>,
  );
}

async function prepareAppMainRender(): Promise<void> {}

function detectCodexOs(): CodexOs {
  const navigatorWithUserAgentData = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };
  const platform =
    navigatorWithUserAgentData.userAgentData?.platform?.toLowerCase() ??
    navigator.platform?.toLowerCase() ??
    navigator.userAgent.toLowerCase();

  if (platform.includes("win")) return "win32";
  if (platform.includes("mac") || platform.includes("darwin")) return "darwin";
  if (platform.includes("linux")) return "linux";
  return "unknown";
}

function stringifyUnhandledRejection(reason: unknown): string {
  if (typeof reason === "object" && reason) {
    const maybeError = reason as {
      message?: unknown;
      stack?: unknown;
    };
    return String(
      maybeError.stack ?? maybeError.message ?? JSON.stringify(reason),
    );
  }
  return String(reason);
}

function installGlobalErrorForwarders(): void {
  window.addEventListener("error", (event) => {
    const message =
      event?.error?.stack ??
      event?.error?.message ??
      event?.message ??
      "Unknown error";
    dispatchRendererLogMessage(
      "error",
      `[desktop-notifications][global-error] ${String(message)}`,
    );
  });
  window.addEventListener("unhandledrejection", (event) => {
    dispatchRendererLogMessage(
      "error",
      `[desktop-notifications][unhandled-rejection] ${stringifyUnhandledRejection(event.reason)}`,
    );
  });
}

const initAppMainChunk = once(() => {
  initRegisterAppActionsChunk();
  initProjectsAppEntryChunk();
  initAppFallbackChunk();
  initErrorBoundaryRuntimeChunk();
  initPublicationTermsHandlerRegistryChunk();
  initPublicationTermsSidePanelHandlerChunk();
  initAutomationsRuntimeChunk();
  initAppLoggingChunk();
  initAutomationsStateChunk();
  initAppRuntimeChunk();
  initRendererSentryRuntimeChunk();
  initCodexAppChunk();
  initAppFeatureRuntimeChunk();
  initEmptyAppChunk();

  const urlSearchParams = new URL(window.location.href).searchParams;
  const codexOs = detectCodexOs();
  registerPublicationTermsSidePanelHandler(
    appgenPublicationTermsSidePanelHandler,
  );
  registerWindowsTabsOpenHandler(windowsTabsOpenHandler);

  document.documentElement.dataset.codexWindowType = "electron";
  document.documentElement.dataset.windowType = "electron";
  document.documentElement.dataset.codexOs = codexOs;
  document.documentElement.dataset.codexWindowChrome =
    getElectronWindowChrome(codexOs);
  if (urlSearchParams.get("mcpAppSandboxDevtools") === "1") {
    document.documentElement.dataset.mcpAppSandboxDevtools = "true";
  }
  if (isCompactWindowPreferred()) {
    document.documentElement.classList.add("compact-window");
  }

  initializeRendererSentry();
  installGlobalErrorForwarders();

  const rootElement = document.getElementById("root");
  if (!rootElement) throw Error("Root container not found");

  const codexWindow = window as CodexWindow;
  codexWindow.__codexRoot ||= createRoot(rootElement);
  codexRoot = codexWindow.__codexRoot;
  renderElectronAppRoot();
});

initAppMainChunk();
