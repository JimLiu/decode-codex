// Restored from ref/.vite/build/file-based-logger-7hbAyAYH.js
// file-based-logger-7hbAyAYH chunk restored from the Codex Electron main bundle.
import * as os from "node:os";
import * as path from "node:path";
import { BuildFlavor } from "./build-flavor";
import type { BuildFlavorValue, Platform } from "./types";

function bundleIdentifierForBuildFlavor(buildFlavor: BuildFlavorValue): string {
  switch (buildFlavor) {
    case BuildFlavor.Agent:
      return "com.openai.codex.agent";
    case BuildFlavor.Dev:
      return "com.openai.codex.dev";
    case BuildFlavor.Nightly:
      return "com.openai.codex.nightly";
    case BuildFlavor.InternalAlpha:
      return "com.openai.codex.alpha";
    case BuildFlavor.PublicBeta:
      return "com.openai.codex.beta";
    case BuildFlavor.Prod:
      return "com.openai.codex";
    default:
      return "com.openai.codex";
  }
}

function resolveLogRootDir(
  buildFlavor?: BuildFlavorValue | null,
  platform: Platform = process.platform,
): string {
  const env = process.env;
  const homeDir = os.homedir();

  if (platform === "darwin") {
    return path.join(
      homeDir,
      "Library",
      "Logs",
      bundleIdentifierForBuildFlavor(buildFlavor ?? BuildFlavor.resolve()),
    );
  }

  if (platform === "win32") {
    return path.join(
      env.LOCALAPPDATA ?? path.join(homeDir, "AppData", "Local"),
      "Codex",
      "Logs",
    );
  }

  if (platform === "linux") {
    return path.join(
      env.XDG_STATE_HOME ?? path.join(homeDir, ".local", "state"),
      "codex",
      "logs",
    );
  }

  return path.join(homeDir, ".codex", "logs");
}

export { bundleIdentifierForBuildFlavor, resolveLogRootDir };
