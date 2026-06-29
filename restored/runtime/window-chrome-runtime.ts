// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Window chrome and route context helpers used by the Electron app-main bootstrap.
import { Rv as currentRouteHostIdSignalRaw } from "../../ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js";
import { once } from "./commonjs-interop";

export type CodexWindowType = "electron" | string;
export type CodexOs = "win32" | "darwin" | "linux" | "unknown";
export type CodexWindowChrome = "application-menu" | "native";

export const currentRouteHostIdSignal = currentRouteHostIdSignalRaw as unknown;

export function getCodexWindowChrome(
  windowType: CodexWindowType,
  codexOs: CodexOs,
): CodexWindowChrome {
  if (windowType !== "electron") return "native";

  switch (codexOs) {
    case "win32":
    case "linux":
      return "application-menu";
    case "darwin":
    case "unknown":
      return "native";
  }
}

export const initAppFeatureRuntimeChunk = once(() => {});
