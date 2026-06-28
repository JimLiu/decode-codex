// Restored from ref/webview/assets/app-main-lwTO-JL9.js
// Electron main-window bootstrap for the Codex webview application.
import React from "react";
import { createRoot } from "react-dom/client";
import { once } from "../runtime/commonjs-interop";
import {
  GA as refreshStatsigDiagnostics,
  WA as initAppRuntimeChunk,
  cP as initAppLoggingChunk,
  lP as hostMessageBridge,
  mP as appMainLogger,
  pP as initAppFeatureRuntimeChunk,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  So as initProjectsAppEntryChunk,
  bo as getCodexWindowChrome,
  wo as readCompactWindowPreference,
  xo as initProjectsSharedRuntimeChunk,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  c as initAutomationsRuntimeChunk,
  n as windowsTabsOpenHandler,
  r as initAutomationsStateChunk,
  s as CodexApp,
  t as initCodexAppChunk,
} from "../boundaries/current-ref/automations-page-producer";
import { AppFallback, initAppFallbackChunk } from "./app-fallback";
import { initEmptyAppChunk } from "./empty-app-initializer";
import {
  Ja as initPullRequestThreadActionsChunk,
  do as initPullRequestErrorBoundaryChunk,
  qa as ErrorBoundary,
  uo as initDesktopNotificationRuntime,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
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

type CodexOs = "win32" | "darwin" | "linux" | "unknown";

type ReactRoot = ReturnType<typeof createRoot>;

type CodexWindow = Window &
  typeof globalThis & {
    __codexRoot?: ReactRoot;
  };

let codexRoot: ReactRoot;

async function renderElectronAppRoot(): Promise<void> {
  await prepareAppMainRender();
  await refreshStatsigDiagnostics();
  appMainLogger.info(
    "[statsig-refresh-diagnostics] React root render requested",
    {
      safe: { windowType: "electron" },
    },
  );
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
    hostMessageBridge.dispatchMessage("log-message", {
      level: "error",
      message: `[desktop-notifications][global-error] ${String(message)}`,
    });
  });
  window.addEventListener("unhandledrejection", (event) => {
    hostMessageBridge.dispatchMessage("log-message", {
      level: "error",
      message: `[desktop-notifications][unhandled-rejection] ${stringifyUnhandledRejection(event.reason)}`,
    });
  });
}

const initAppMainChunk = once(() => {
  initRegisterAppActionsChunk();
  initProjectsAppEntryChunk();
  initPullRequestThreadActionsChunk();
  initAppFallbackChunk();
  initProjectsSharedRuntimeChunk();
  initPublicationTermsHandlerRegistryChunk();
  initPublicationTermsSidePanelHandlerChunk();
  initAutomationsRuntimeChunk();
  initAppLoggingChunk();
  initAutomationsStateChunk();
  initAppRuntimeChunk();
  initPullRequestErrorBoundaryChunk();
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
  document.documentElement.dataset.codexWindowChrome = getCodexWindowChrome(
    "electron",
    codexOs,
  );
  if (urlSearchParams.get("mcpAppSandboxDevtools") === "1") {
    document.documentElement.dataset.mcpAppSandboxDevtools = "true";
  }
  if (readCompactWindowPreference()) {
    document.documentElement.classList.add("compact-window");
  }

  initDesktopNotificationRuntime();
  installGlobalErrorForwarders();

  const rootElement = document.getElementById("root");
  if (!rootElement) throw Error("Root container not found");

  const codexWindow = window as CodexWindow;
  codexWindow.__codexRoot ||= createRoot(rootElement);
  codexRoot = codexWindow.__codexRoot;
  renderElectronAppRoot();
});

initAppMainChunk();
