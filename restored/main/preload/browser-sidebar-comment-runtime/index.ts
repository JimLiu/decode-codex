// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment runtime document-context public surface.

export { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
export { normalizeCssColorValue } from "./colors";
export {
  DEFAULT_DESIGN_GROUP_ATTRIBUTE,
  mergeDesignStyleDeclarationValues,
  readDesignStyleDeclarations,
  serializeDesignDraftStyles,
} from "./design-css";
export {
  createGoogleDocsDocumentContext,
  isGoogleWorkspaceDocumentUrl,
  parseGoogleDocsDocumentUrl,
  parseGoogleSheetsDocumentId,
} from "./google-workspace-urls";
export {
  clampNumber,
  computeCommentEditorRect,
  hasPointMovedPastThreshold,
  inverseViewportScale,
  isPointInsideViewportSize,
  rectBetweenPoints,
  scaleRect,
  spreadCoincidentMarkerPoints,
} from "./geometry";
export { normalizeBrowserSidebarText } from "./text";
export type {
  BrowserSidebarCommentEditorLayoutOptions,
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
export type {
  BrowserSidebarDesignStyleDeclaration,
  BrowserSidebarDesignStyleDraft,
} from "./design-css";
export type {
  BrowserSidebarAnchorLike,
  BrowserSidebarDocumentContextInput,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarGoogleDocsDocumentLocation,
  BrowserSidebarViewportRect,
} from "./types";
