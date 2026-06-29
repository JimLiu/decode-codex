// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared types for the native About dialog helpers.

import type {
  BrowserWindow,
  BrowserWindowConstructorOptions,
  NativeImage,
} from "electron";
import type { RuntimeAppBrand } from "../boundaries/shared-node-runtime.facade";
import type { BuildFlavorValue } from "../logging/file-based-logger";

export type NativeMessageDescriptor = {
  messageId: string;
  defaultMessage: string;
  values?: Record<string, unknown>;
};

export type NativeMessageFormatter = {
  formatMessage(message: NativeMessageDescriptor): string;
};

export type AboutDialogIcons = {
  htmlIconDataUrl: string | null;
  windowIcon: NativeImage;
};

export type AboutDialogHtmlOptions = {
  appDisplayName: string;
  buildInfoLabel: string;
  buildInfoText: string;
  iconDataUrl: string | null;
  isDark: boolean;
  okLabel: string | null;
  title: string;
};

export type LoadAboutDialogIconOptions = {
  appBrand?: RuntimeAppBrand;
  buildFlavor: BuildFlavorValue;
  macAppBundlePath?: string | null;
  platform?: NodeJS.Platform;
  resourcesPath?: string;
};

export type ShowAboutDialogOptions = LoadAboutDialogIconOptions & {
  browserWindowOptions?: Partial<BrowserWindowConstructorOptions>;
  formatBuildFlavorVersionSuffix?: (
    buildFlavor: BuildFlavorValue,
  ) => string | null;
  formatter?: NativeMessageFormatter;
  parent?: BrowserWindow | null;
};
