// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Browser/file URL open helpers for conversation output resources.
import {
  En as toAppFsUrlRaw,
  hs as initLocalImageInliningHelpers,
  La as initExternalUrlHelpers,
  On as initAppFsUrlHelpers,
  a_ as initFileTypeDetectionHelpers,
  ms as resolveInlineableLocalImagePathRaw,
  r_ as getImagePreviewDisplayModeRaw,
  za as openInBrowserFromEventRaw,
} from "../vendor/appg-thread-shared-runtime";
import {
  Gd as initGeneratedImagePreviewRuntimeRaw,
  Jt as openGeneratedImagePreviewTabRaw,
} from "../vendor/profile-page-runtime";

export type OpenInBrowserFromEventOptions = {
  event: unknown;
  href: string;
  initiator?: string;
  originHostId?: string;
};

export type GeneratedImagePreviewTabRequest = {
  alt: string;
  attachmentSrc: string;
  downloadSrc: string;
  generatedImages: readonly unknown[];
  initialImageId: string;
  referrerPolicy?: string;
  src: string;
  title: string;
};

export function initResourceOpenRuntime(): void {
  initExternalUrlHelpers();
  initAppFsUrlHelpers();
  initFileTypeDetectionHelpers();
}

export function initLocalImageInliningRuntime(): void {
  initLocalImageInliningHelpers();
}

export function initGeneratedImagePreviewRuntime(): void {
  initGeneratedImagePreviewRuntimeRaw();
}

export function toAppFsUrl(path: string): string {
  return toAppFsUrlRaw(path);
}

export function resolveInlineableLocalImagePath(path: string): string | null {
  return resolveInlineableLocalImagePathRaw(path) ?? null;
}

export function getImagePreviewDisplayMode(path: string): string {
  return getImagePreviewDisplayModeRaw(path);
}

export function openInBrowserFromEvent(
  options: OpenInBrowserFromEventOptions,
): void {
  openInBrowserFromEventRaw(options);
}

export function openGeneratedImagePreviewTab(
  scope: unknown,
  request: GeneratedImagePreviewTabRequest,
): boolean {
  return openGeneratedImagePreviewTabRaw(scope, request) as boolean;
}
