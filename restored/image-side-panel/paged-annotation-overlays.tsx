// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public barrel for paged annotation overlay primitives and geometry helpers.

export function initPagedAnnotationOverlayGeometryChunk(): void {}

export function initPagedAnnotationOverlaysChunk(): void {}

export {
  ANNOTATION_ACCENT_COLOR,
  ANNOTATION_CROSSHAIR_CURSOR,
  ANNOTATION_EDITOR_ENTER_CLASS,
  FONT_FAMILY,
} from "./paged-annotation-overlay-constants";
export type {
  AskForEditAlignment,
  AskForEditAnchor,
  ComputeAskForEditPositionArgs,
  ComputeRectAskForEditPositionArgs,
  Point,
  Rect,
  Size,
} from "./paged-annotation-overlay-geometry";
export {
  applyAbsolutePosition,
  computeAskForEditButtonPosition,
  computeRectAskForEditPosition,
  isToggleImageCommentShortcut,
  topRightCorner,
} from "./paged-annotation-overlay-geometry";
export type { AskForEditButtonProps } from "./paged-annotation-ask-for-edit-button";
export { AskForEditButton } from "./paged-annotation-ask-for-edit-button";
export type {
  AnnotationHighlightRectProps,
  AnnotationSelectionRectProps,
} from "./paged-annotation-rects";
export {
  AnnotationHighlightRect,
  AnnotationSelectionRect,
} from "./paged-annotation-rects";
export type { CommentPreviewProps } from "./paged-annotation-comment-preview";
export { CommentPreview } from "./paged-annotation-comment-preview";
export type { PagedAnnotationMarkerProps } from "./paged-annotation-marker";
export { PagedAnnotationMarker } from "./paged-annotation-marker";
