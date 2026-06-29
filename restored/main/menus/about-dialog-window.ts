// Restored from ref/.vite/build/main-r5HnecX_.js
// Native About dialog window lifecycle.

import { app, BrowserWindow, nativeTheme, screen } from "electron";
import { renderAboutDialogHtml } from "./about-dialog-html";
import { loadAboutDialogIcons } from "./about-dialog-icons";
import type {
  NativeMessageDescriptor,
  NativeMessageFormatter,
  ShowAboutDialogOptions,
} from "./about-dialog-types";
import { formatReleaseDateFromVersion } from "./about-dialog-version";

const ABOUT_DIALOG_WIDTH = 380;
const ABOUT_DIALOG_DEFAULT_HEIGHT = 360;
const fallbackFormatter: NativeMessageFormatter = {
  formatMessage(message: NativeMessageDescriptor): string {
    return formatDefaultMessage(message.defaultMessage, message.values);
  },
};

let activeAboutDialogWindow: BrowserWindow | null = null;

export async function showAboutDialog({
  appBrand,
  browserWindowOptions,
  buildFlavor,
  formatBuildFlavorVersionSuffix,
  formatter = fallbackFormatter,
  macAppBundlePath,
  parent,
  platform = process.platform,
  resourcesPath = process.resourcesPath,
}: ShowAboutDialogOptions): Promise<void> {
  if (
    activeAboutDialogWindow != null &&
    !activeAboutDialogWindow.isDestroyed()
  ) {
    if (activeAboutDialogWindow.isMinimized())
      activeAboutDialogWindow.restore();
    activeAboutDialogWindow.show();
    activeAboutDialogWindow.focus();
    return;
  }

  const appDisplayName = app.getName();
  const appVersion = app.getVersion();
  const releaseDate = formatReleaseDateFromVersion(appVersion);
  const buildFlavorSuffix =
    formatBuildFlavorVersionSuffix?.(buildFlavor) ?? null;
  const displayVersion =
    buildFlavorSuffix == null
      ? appVersion
      : `${appVersion} \u2022 ${buildFlavorSuffix}`;
  const isMacOS = platform === "darwin";
  const icons = await loadAboutDialogIcons({
    appBrand,
    buildFlavor,
    macAppBundlePath,
    platform,
    resourcesPath,
  });
  const title = formatter.formatMessage({
    messageId: "codex.aboutDialog.title",
    defaultMessage: "About {appName}",
    values: { appName: appDisplayName },
  });
  const okLabel = isMacOS
    ? null
    : formatter.formatMessage({
        messageId: "codex.aboutDialog.ok",
        defaultMessage: "OK",
      });
  const versionLine =
    releaseDate == null
      ? formatter.formatMessage({
          messageId: "codex.aboutDialog.versionLine",
          defaultMessage: "Version {version}",
          values: { version: displayVersion },
        })
      : formatter.formatMessage({
          messageId: "codex.aboutDialog.versionLineWithDate",
          defaultMessage: "Version {version} \u2022 Released {releaseDate}",
          values: { version: displayVersion, releaseDate },
        });
  const buildInfoLabel = formatter.formatMessage({
    messageId: "codex.aboutDialog.buildInfoLabel",
    defaultMessage: "Build information",
  });
  const extraBuildInfoLines = getAdditionalBuildInfoLines(appVersion);
  const buildInfoText =
    extraBuildInfoLines.length === 0
      ? versionLine
      : [versionLine, "", ...extraBuildInfoLines].join("\n");
  const validParent = parent != null && !parent.isDestroyed() ? parent : null;
  const isDark = nativeTheme.shouldUseDarkColors;
  const aboutWindow = new BrowserWindow({
    width: ABOUT_DIALOG_WIDTH,
    height: ABOUT_DIALOG_DEFAULT_HEIGHT,
    useContentSize: true,
    title,
    show: false,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,
    backgroundColor: isDark ? "#202020" : "#ffffff",
    ...(icons.windowIcon.isEmpty() ? {} : { icon: icons.windowIcon }),
    ...(validParent == null
      ? {}
      : {
          parent: validParent,
          ...(isMacOS ? {} : { modal: true }),
        }),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
      devTools: false,
    },
    ...browserWindowOptions,
  });

  activeAboutDialogWindow = aboutWindow;
  aboutWindow.setMenuBarVisibility(false);
  if (platform !== "darwin") aboutWindow.removeMenu();
  centerAboutDialogWindow(aboutWindow, validParent);
  aboutWindow.once("closed", () => {
    if (activeAboutDialogWindow === aboutWindow) {
      activeAboutDialogWindow = null;
    }
  });
  aboutWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  aboutWindow.webContents.on("will-navigate", (event) => {
    event.preventDefault();
  });

  try {
    await aboutWindow.loadURL(
      `data:text/html;charset=utf-8,${encodeURIComponent(
        renderAboutDialogHtml({
          appDisplayName,
          buildInfoLabel,
          buildInfoText,
          iconDataUrl: icons.htmlIconDataUrl,
          isDark,
          okLabel,
          title,
        }),
      )}`,
    );
    if (aboutWindow.isDestroyed()) return;
    await fitAboutDialogWindowToContent(aboutWindow);
    centerAboutDialogWindow(aboutWindow, validParent);
    aboutWindow.show();
    aboutWindow.focus();
  } catch {
    if (activeAboutDialogWindow === aboutWindow) {
      activeAboutDialogWindow = null;
    }
    if (!aboutWindow.isDestroyed()) aboutWindow.destroy();
  }
}

export async function fitAboutDialogWindowToContent(
  aboutWindow: BrowserWindow,
): Promise<void> {
  const contentHeight = await aboutWindow.webContents.executeJavaScript(
    'Math.ceil(document.querySelector(".dialog")?.getBoundingClientRect().height ?? document.documentElement.scrollHeight)',
    true,
  );
  const height =
    typeof contentHeight === "number" && Number.isFinite(contentHeight)
      ? contentHeight
      : ABOUT_DIALOG_DEFAULT_HEIGHT;
  aboutWindow.setContentSize(ABOUT_DIALOG_WIDTH, height, false);
}

export function centerAboutDialogWindow(
  aboutWindow: BrowserWindow,
  parentWindow: BrowserWindow | null,
): void {
  if (parentWindow == null || parentWindow.isDestroyed()) {
    aboutWindow.center();
    return;
  }
  const parentBounds = parentWindow.getBounds();
  const aboutBounds = aboutWindow.getBounds();
  const displayWorkArea = screen.getDisplayMatching(parentBounds).workArea;
  aboutWindow.setPosition(
    clampWindowCoordinate(
      Math.round(parentBounds.x + (parentBounds.width - aboutBounds.width) / 2),
      displayWorkArea.x,
      displayWorkArea.x +
        Math.max(0, displayWorkArea.width - aboutBounds.width),
    ),
    clampWindowCoordinate(
      Math.round(
        parentBounds.y + (parentBounds.height - aboutBounds.height) / 2,
      ),
      displayWorkArea.y,
      displayWorkArea.y +
        Math.max(0, displayWorkArea.height - aboutBounds.height),
    ),
    false,
  );
}

function clampWindowCoordinate(
  coordinate: number,
  minimum: number,
  maximum: number,
): number {
  return Math.min(Math.max(coordinate, minimum), maximum);
}

function formatDefaultMessage(
  defaultMessage: string,
  values: Record<string, unknown> = {},
): string {
  return defaultMessage.replace(/\{([^}]+)\}/g, (placeholder, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key)
      ? String(values[key])
      : placeholder,
  );
}

function getAdditionalBuildInfoLines(appVersion: string): string[] {
  void appVersion;
  return [];
}
