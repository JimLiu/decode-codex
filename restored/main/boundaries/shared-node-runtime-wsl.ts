// Restored from ref/.vite/build/src-CoIhwwHr.js
// WSL detection and CODEX_HOME resolution helpers.
import { execFileSync } from "node:child_process";
import * as os from "node:os";
import * as path from "node:path";
import { removeCrashReporterEnv } from "./shared-node-runtime-env";
import { getRootStructuredLogger } from "./shared-node-runtime-logging";

let shouldSpawnInsideWsl: (() => boolean) | null = null;
let cachedWslDistro: string | null | undefined;

export function registerShouldSpawnInsideWsl(callback: () => boolean): void {
  if (shouldSpawnInsideWsl != null) {
    throw Error("shouldSpawnInsideWsl already set");
  }
  shouldSpawnInsideWsl = callback;
}

export function resolveDefaultWslDistro(force: boolean = false): string | null {
  if (process.platform !== "win32") return null;
  if (!force && cachedWslDistro !== undefined) return cachedWslDistro;
  try {
    execFileSync("wsl.exe", ["--status"], {
      env: removeCrashReporterEnv(process.env),
      timeout: 3000,
      windowsHide: true,
    });
    const verbose = decodeCommandOutput(
      execFileSync("wsl.exe", ["--list", "--verbose"], {
        env: removeCrashReporterEnv(process.env),
        timeout: 3000,
        windowsHide: true,
      }),
    );
    const quiet = decodeCommandOutput(
      execFileSync("wsl.exe", ["--list", "--quiet"], {
        env: removeCrashReporterEnv(process.env),
        timeout: 3000,
        windowsHide: true,
      }),
    );
    cachedWslDistro =
      parseDefaultWslDistro(verbose) ??
      quiet
        .split("\n")
        .map((item) => item.trim())
        .find((item) => item.toLowerCase().startsWith("ubuntu")) ??
      null;
    return cachedWslDistro;
  } catch (error) {
    getRootStructuredLogger().error("[wsl] error retrieving eligible distro", {
      safe: { error: String(error) },
      sensitive: {},
    });
    cachedWslDistro = null;
    return null;
  }
}

function parseDefaultWslDistro(listOutput: string): string | null {
  const line = listOutput
    .split("\n")
    .map((item) => item.trim())
    .find((item) => item.startsWith("*"));
  return (
    line
      ?.slice(1)
      .trim()
      .split(/\s{2,}|\t+/)[0] || null
  );
}

function decodeCommandOutput(output: Buffer | string): string {
  if (typeof output === "string") return output.trim();
  if (output.length === 0) return "";
  if (output.length >= 2 && output[0] === 255 && output[1] === 254) {
    return output
      .slice(2)
      .toString("utf16le")
      .replace(/^\uFEFF/, "")
      .trim();
  }
  if (
    output.length >= 3 &&
    output[0] === 239 &&
    output[1] === 187 &&
    output[2] === 191
  ) {
    return output.slice(3).toString("utf8").trim();
  }
  return output
    .toString("utf8")
    .replace(/^\uFEFF/, "")
    .trim();
}

export function resolveCodexHome({
  preferWsl = false,
}: { preferWsl?: boolean } = {}): string {
  if (preferWsl && process.platform === "win32") {
    const resolved = resolveCodexHomeFromWsl();
    if (resolved) return resolved;
    getRootStructuredLogger().info(
      "[resolveCodexHome] Falling back to host home directory because WSL CODEX_HOME could not be resolved",
    );
  }
  return process.env.CODEX_HOME ?? path.join(os.homedir(), ".codex");
}

function resolveCodexHomeFromWsl(): string | null {
  try {
    const output = decodeCommandOutput(
      execFileSync(
        "wsl.exe",
        [
          "/usr/bin/env",
          "bash",
          "-lc",
          'printf %s "${CODEX_HOME:-$HOME/.codex}"',
        ],
        { env: removeCrashReporterEnv(process.env), windowsHide: true },
      ),
    );
    if (!output) return null;
    if (/^[a-zA-Z]:[\\/]/.test(output) || output.startsWith("\\\\")) {
      return output.replace(/\//g, "\\");
    }
    const translated = decodeCommandOutput(
      execFileSync("wsl.exe", ["wslpath", "-w", output], {
        env: removeCrashReporterEnv(process.env),
        windowsHide: true,
      }),
    );
    return translated ? translated.replace(/\//g, "\\") : null;
  } catch {
    return null;
  }
}
