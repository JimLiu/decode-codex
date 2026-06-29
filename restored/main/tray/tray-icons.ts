// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Tray icon resolution and Chronicle running-state badge helpers.

import { join } from "node:path";
import { app, nativeImage, type NativeImage } from "electron";
import {
  RuntimeAppBrands,
  type RuntimeAppBrand,
} from "../boundaries/shared-node-runtime.facade";
import {
  BuildFlavor,
  type BuildFlavorValue,
} from "../logging/file-based-logger";

export type DesktopTrayIcons = {
  defaultIcon: NativeImage;
  chronicleRunningIcon: NativeImage | null;
};

export async function loadDesktopTrayIcons(
  buildFlavor: BuildFlavorValue,
  appBrand: RuntimeAppBrand,
  repoRoot: string,
): Promise<DesktopTrayIcons> {
  if (process.platform === "darwin") {
    const [templateIconName] = getDarwinTrayTemplateIconNames(appBrand);
    const candidatePaths = [
      ...(app.isPackaged
        ? [join(process.resourcesPath, templateIconName)]
        : []),
      join(repoRoot, "electron", "src", "icons", templateIconName),
    ];
    for (const candidatePath of candidatePaths) {
      const icon = nativeImage.createFromPath(candidatePath);
      if (!icon.isEmpty()) {
        icon.setTemplateImage(true);
        return {
          defaultIcon: icon,
          chronicleRunningIcon: createChronicleRunningTrayIcon(icon),
        };
      }
    }
    const fallbackIcon = await app.getFileIcon(process.execPath, {
      size: "normal",
    });
    return {
      defaultIcon: fallbackIcon,
      chronicleRunningIcon: createChronicleRunningTrayIcon(fallbackIcon),
    };
  }

  const trayIconName = getWindowsTrayIconName(buildFlavor, appBrand);
  const candidatePaths = [
    ...(app.isPackaged ? [join(process.resourcesPath, trayIconName)] : []),
    join(repoRoot, "electron", "src", "icons", trayIconName),
  ];
  for (const candidatePath of candidatePaths) {
    const icon = nativeImage.createFromPath(candidatePath);
    if (!icon.isEmpty()) {
      return {
        defaultIcon: icon,
        chronicleRunningIcon: null,
      };
    }
  }
  return {
    defaultIcon: await app.getFileIcon(process.execPath, { size: "small" }),
    chronicleRunningIcon: null,
  };
}

export function getWindowsTrayIconName(
  buildFlavor: BuildFlavorValue,
  appBrand: RuntimeAppBrand,
): string {
  if (
    buildFlavor === BuildFlavor.Agent &&
    appBrand === RuntimeAppBrands.ChatGPT
  ) {
    return "icon-agent.ico";
  }
  switch (appBrand) {
    case RuntimeAppBrands.Codex:
      return "codex-tray.ico";
    case RuntimeAppBrands.ChatGPT:
      return "chatgpt-tray.ico";
  }
}

export function getDarwinTrayTemplateIconNames(
  appBrand: RuntimeAppBrand,
): [string, string] {
  switch (appBrand) {
    case RuntimeAppBrands.Codex:
      return ["codexTemplate.png", "codexTemplate@2x.png"];
    case RuntimeAppBrands.ChatGPT:
      return ["chatgptTemplate.png", "chatgptTemplate@2x.png"];
  }
}

export function createChronicleRunningTrayIcon(
  baseIcon: NativeImage,
): NativeImage | null {
  const size = baseIcon.getSize();
  if (size.width <= 0 || size.height <= 0) return null;
  const icon = nativeImage.createEmpty();
  let didAddRepresentation = false;
  for (const scaleFactor of baseIcon.getScaleFactors()) {
    const representation = createChronicleRunningRepresentation(
      baseIcon,
      size.width,
      size.height,
      scaleFactor,
    );
    if (representation != null) {
      icon.addRepresentation(representation);
      didAddRepresentation = true;
    }
  }
  if (!didAddRepresentation || icon.isEmpty()) return null;
  icon.setTemplateImage(true);
  return icon;
}

function createChronicleRunningRepresentation(
  baseIcon: NativeImage,
  logicalWidth: number,
  logicalHeight: number,
  scaleFactor: number,
): {
  buffer: Buffer;
  width: number;
  height: number;
  scaleFactor: number;
} | null {
  const bitmap = Buffer.from(baseIcon.toBitmap({ scaleFactor }));
  const bitmapSize = inferBitmapRepresentationSize(
    bitmap,
    logicalWidth,
    logicalHeight,
  );
  if (bitmapSize == null) return null;
  const dotScale =
    Math.min(bitmapSize.width, bitmapSize.height) /
    Math.min(logicalWidth, logicalHeight);
  const dotRadius = 3 * dotScale;
  const clearRadius = 5.5 * dotScale;
  const margin = dotScale;
  const centerX = bitmapSize.width - dotRadius - margin;
  const centerY = bitmapSize.height - dotRadius - margin;
  for (let y = 0; y < bitmapSize.height; y += 1) {
    for (let x = 0; x < bitmapSize.width; x += 1) {
      const distance = Math.hypot(x + 0.5 - centerX, y + 0.5 - centerY);
      const offset = (y * bitmapSize.width + x) * 4;
      if (distance <= clearRadius) bitmap[offset + 3] = 0;
      if (distance <= dotRadius) {
        bitmap[offset] = 0;
        bitmap[offset + 1] = 0;
        bitmap[offset + 2] = 0;
        bitmap[offset + 3] = 255;
      }
    }
  }
  return {
    buffer: bitmap,
    width: bitmapSize.width,
    height: bitmapSize.height,
    scaleFactor: bitmapSize.scaleFactor,
  };
}

function inferBitmapRepresentationSize(
  bitmap: Buffer,
  logicalWidth: number,
  logicalHeight: number,
): { width: number; height: number; scaleFactor: number } | null {
  const pixelCount = bitmap.length / 4;
  if (!Number.isInteger(pixelCount) || pixelCount <= 0) return null;
  if (pixelCount === logicalWidth * logicalHeight) {
    return { width: logicalWidth, height: logicalHeight, scaleFactor: 1 };
  }
  const aspectRatio = logicalWidth / logicalHeight;
  const height = Math.round(Math.sqrt(pixelCount / aspectRatio));
  const width = Math.round(height * aspectRatio);
  return width * height === pixelCount
    ? { width, height, scaleFactor: width / logicalWidth }
    : null;
}
