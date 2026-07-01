// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Open the generated-image preview in a right-panel tab (gated by a feature flag).
import { createElement } from "react";
import { ImagePreviewTabContent } from "./image-preview-tab-content";
import {
  evaluateFeatureGate,
  previewTabManager,
  ImagePreviewTabIcon,
  focusPreviewTabComposer,
} from "../boundaries/onboarding-commons-externals.facade";

const IMAGE_PREVIEW_GATE_ID = "120995366";

export interface OpenImagePreviewTabOptions {
  title: string;
  [key: string]: unknown;
}

export function openImagePreviewTab(
  scope: unknown,
  { title, ...rest }: OpenImagePreviewTabOptions,
): boolean {
  if (!evaluateFeatureGate(scope, IMAGE_PREVIEW_GATE_ID)) return false;

  const tabId = `image:${crypto.randomUUID()}`;
  previewTabManager.openTab(scope, ImagePreviewTabContent, {
    icon: createElement(ImagePreviewTabIcon, { className: "icon-xs shrink-0" }),
    id: tabId,
    isPreview: true,
    props: { ...rest, tabId },
    title,
    tooltip: title,
  });
  focusPreviewTabComposer(scope);
  return true;
}
