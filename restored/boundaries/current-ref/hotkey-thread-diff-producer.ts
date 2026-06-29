// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js
// Current mixed producer for compact-window helpers, composer chrome, diff parsing,
// and shared highlight-theme registration aliases.
export {
  getPatchFileSizeSummary,
  initPatchFileSizeSummaryChunk,
} from "../../utils/parse-diff/size";

export {
  initParseDiffRuntimeChunk,
  parseDiff as parseDiffFromUnifiedText,
} from "../../utils/parse-diff";

export {
  createHighlightThemeRegistration,
  DuplicateThemeError,
  initBundledHighlightThemesChunk,
  initDuplicateThemeErrorChunk,
  initResolvedHighlightThemesChunk,
  initSharedHighlightThemeRegistryChunk,
  initVirtualScrollRuntimeChunk,
  sharedHighlightThemeRegistry,
} from "../../utils/shared-highlight-themes";

export { Command, useCommandState } from "../../vendor/cmdk";

export { parseDiffFromFiles } from "../../vendor/pierre-diffs/file-diff";

export function initCommandRuntimeChunk(): void {}

export function initParseDiffFromFilesRuntimeChunk(): void {}

export {
  ComposerTopMenuShell,
  initComposerTopMenuChromeChunk,
} from "../../composer/top-menu-chrome";

export {
  AppgenSitesIcon,
  AppMentionPill,
  initAppgenSitesIconChunk,
  initAppMentionPillRuntime,
} from "../../appgen/appgen-announcement-modal";

export {
  initPullRequestCommentCardChunk,
  PullRequestCommentCard,
} from "../../conversations/pull-request-comment-card";

export {
  initPullRequestDescriptionMarkdownRendererChunk,
  PullRequestDescriptionMarkdown,
} from "../../conversations/pull-request-description-markdown-renderer";

export {
  initInitialRouteRuntime,
  isCurrentCompactWindow,
} from "../../features/is-compact-window-context";

export {
  applyCodexThemeToElement,
  normalizeCodexChromeTheme,
} from "../../github/diff-view-mode";

export { TerminalPanelIcon } from "../../app-shell/thread-app-shell-chrome/icons";

export function initCodexChromeThemeRuntimeChunk(): void {}

export function initTerminalPanelIconChunk(): void {}
