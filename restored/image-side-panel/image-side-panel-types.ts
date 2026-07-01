// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared data shapes for the image side panel and generated-image viewer.
import type { HTMLAttributeReferrerPolicy } from "react";

export interface ImageSidePanelProps {
  alt: string;
  attachmentSrc: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  src: string;
  downloadSrc?: string;
}

export interface GeneratedImage {
  id: string;
  alt: string;
  src: string;
  previewSrc: string;
  tabTitle?: string;
}
