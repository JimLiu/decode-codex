// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native app icon resolution for About and menu-owned windows.

import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, extname, join } from "node:path";
import { promisify } from "node:util";
import { app, nativeImage } from "electron";
import {
  RuntimeAppBrands,
  type RuntimeAppBrand,
} from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  type BuildFlavorValue,
} from "../logging/file-based-logger";
import type {
  AboutDialogIcons,
  LoadAboutDialogIconOptions,
} from "./about-dialog-types";

const execFileAsync = promisify(execFile);

export async function loadAboutDialogIcons({
  appBrand = RuntimeAppBrands.Codex,
  buildFlavor,
  macAppBundlePath,
  platform = process.platform,
  resourcesPath = process.resourcesPath,
}: LoadAboutDialogIconOptions): Promise<AboutDialogIcons> {
  const isMacOS = platform === "darwin";
  const isWindows = platform === "win32";
  let iconPath = process.execPath;

  if (isMacOS) {
    iconPath =
      macAppBundlePath ??
      inferMacAppBundlePath(process.execPath) ??
      process.execPath;
  } else if (isWindows) {
    iconPath = join(
      app.isPackaged ? resourcesPath : join(app.getAppPath(), "src", "icons"),
      `${getWindowIconBaseName(buildFlavor, "win32", appBrand)}.ico`,
    );
  }

  const [macHtmlIconDataUrl, windowIcon] = await Promise.all([
    isMacOS ? loadMacAppIconDataUrl(iconPath) : null,
    isWindows
      ? nativeImage.createFromPath(iconPath)
      : app.getFileIcon(iconPath, { size: "normal" }),
  ]);

  return {
    htmlIconDataUrl:
      macHtmlIconDataUrl ??
      (windowIcon.isEmpty()
        ? null
        : windowIcon
            .resize({ width: 72, height: 72, quality: "best" })
            .toDataURL()),
    windowIcon,
  };
}

export function getWindowIconBaseName(
  buildFlavor: BuildFlavorValue,
  platform: NodeJS.Platform,
  appBrand: RuntimeAppBrand = RuntimeAppBrands.Codex,
): string {
  if (
    appBrand === RuntimeAppBrands.ChatGPT &&
    (platform === "darwin" || platform === "win32")
  ) {
    switch (buildFlavor) {
      case BuildFlavor.Nightly:
        return "icon-chatgpt-nightly";
      case BuildFlavor.InternalAlpha:
        return "icon-chatgpt-alpha";
      case BuildFlavor.PublicBeta:
        return "icon-chatgpt-beta";
      case BuildFlavor.Agent:
        return "icon-agent";
      case BuildFlavor.Dev:
      case BuildFlavor.Prod:
        return "icon-chatgpt";
    }
  }

  switch (buildFlavor) {
    case BuildFlavor.Agent:
      return "icon-agent";
    case BuildFlavor.Nightly:
      return "icon-nightly";
    case BuildFlavor.InternalAlpha:
      return "icon-alpha";
    case BuildFlavor.PublicBeta:
      return "icon-beta";
    case BuildFlavor.Dev:
    case BuildFlavor.Prod:
      return "icon";
    default:
      return "icon";
  }
}

export function getDockIconAssetNames(
  buildFlavor: BuildFlavorValue,
): Record<"app-default" | "codex-dark" | "codex-light", string | null> {
  let flavorSuffix: string;
  switch (buildFlavor) {
    case BuildFlavor.Dev:
    case BuildFlavor.Prod:
      flavorSuffix = "";
      break;
    case BuildFlavor.Nightly:
      flavorSuffix = "-nightly";
      break;
    case BuildFlavor.InternalAlpha:
      flavorSuffix = "-alpha";
      break;
    case BuildFlavor.PublicBeta:
      flavorSuffix = "-beta";
      break;
    case BuildFlavor.Agent:
      return {
        "app-default": null,
        "codex-dark": null,
        "codex-light": null,
      };
    default:
      flavorSuffix = "";
      break;
  }
  return {
    "app-default": null,
    "codex-dark": `icon-codex-dark-color${flavorSuffix}.png`,
    "codex-light": `icon-codex-light${flavorSuffix}.png`,
  };
}

export async function loadMacAppIconDataUrl(
  appBundlePath: string,
): Promise<string | null> {
  if (process.platform !== "darwin") return null;
  const iconPath = await resolveMacBundleIconPath(appBundlePath);
  return iconPath == null ? null : convertIcnsToPngDataUrl(iconPath);
}

export async function resolveMacBundleIconPath(
  appBundlePath: string,
): Promise<string | null> {
  const infoPlistPath = join(appBundlePath, "Contents", "Info.plist");
  const resourcesDirectory = join(appBundlePath, "Contents", "Resources");
  const iconName =
    (await readPlistString(infoPlistPath, "CFBundleIconFile")) ??
    (await readPlistString(infoPlistPath, "CFBundleIconName"));
  const iconCandidates =
    iconName == null
      ? ["AppIcon.icns"]
      : [iconName, ensureIcnsExtension(iconName), "AppIcon.icns"];

  for (const iconCandidate of iconCandidates) {
    const iconPath = join(resourcesDirectory, iconCandidate);
    if (existsSync(iconPath)) return iconPath;
  }
  return null;
}

function inferMacAppBundlePath(executablePath: string): string | null {
  let current = executablePath;
  for (let depth = 0; depth < 6; depth += 1) {
    if (current.endsWith(".app")) return current;
    const parent = dirname(current);
    if (parent === current) return null;
    current = parent;
  }
  return null;
}

async function convertIcnsToPngDataUrl(
  iconPath: string,
): Promise<string | null> {
  const tempDirectory = await mkdtemp(join(tmpdir(), "codex-app-icon-"));
  const pngPath = join(tempDirectory, "icon.png");
  try {
    await execFileAsync(
      "/usr/bin/sips",
      ["-s", "format", "png", iconPath, "--out", pngPath],
      {
        env: { ...process.env },
        timeout: 5_000,
      },
    );
    const pngBytes = await readFile(pngPath);
    return pngBytes.byteLength === 0
      ? null
      : `data:image/png;base64,${pngBytes.toString("base64")}`;
  } catch {
    return null;
  } finally {
    await rm(tempDirectory, { force: true, recursive: true });
  }
}

async function readPlistString(
  infoPlistPath: string,
  key: string,
): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync(
      "/usr/libexec/PlistBuddy",
      ["-c", `Print :${key}`, infoPlistPath],
      { timeout: 5_000 },
    );
    const value = stdout.trim();
    return value.length === 0 ? null : value;
  } catch {
    return null;
  }
}

function ensureIcnsExtension(iconName: string): string {
  return extname(iconName) === "" ? `${iconName}.icns` : iconName;
}
