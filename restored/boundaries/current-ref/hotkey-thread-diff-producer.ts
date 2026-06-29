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
  initRelativeTimeRuntimeChunk,
  RelativeTime,
} from "../../utils/format-relative-date-time";

export {
  initNavigateToLocalConversationRuntimeChunk,
  useNavigateToLocalConversation,
} from "../../utils/use-navigate-to-local-conversation";

export {
  applyCodexThemeToElement,
  getCodeThemeRegistration,
  isCodeThemeId as isKnownCodeThemeId,
  listCodeThemesForVariant,
  loadChromeThemeSeed as loadChromeThemeSeedForCodeTheme,
  normalizeCodexChromeTheme,
} from "../../github/diff-view-mode";

export { TerminalPanelIcon } from "../../app-shell/thread-app-shell-chrome/icons";

export { ArrowUpIcon } from "../../icons/arrow-up-icon";

export { ArchiveIcon } from "../../icons/archive-icon";

export { ChevronIcon as ChevronDownIcon } from "../../icons/chevron-icon";

export { CommentIcon } from "../../icons/comment-icon";

export { DocumentIcon, initDocumentIconChunk } from "../../icons/document-icon";

export { EditIcon } from "../../icons/edit-icon";

export { PackageIcon, initPackageIconChunk } from "../../icons/package-icon";

export { PinFilledIcon } from "../../icons/pin-filled-icon";

export { PinIcon } from "../../icons/pin-icon";

export { PluginIcon, initPluginIconChunk } from "../../icons/plugin-icon";

export { SettingsGearIcon } from "../../icons/settings-gear-icon";

export { MoreHorizontalIcon } from "../../runtime/local-environment-action-controls-runtime";

export { isResourcePathInsideProjectlessOutput } from "../../conversations/output-artifact-runtime";

export { Checkbox } from "../../utils/checkbox";

export { Tooltip, initTooltipRuntimeChunk } from "../../ui/tooltip-b";

export function initCodexChromeThemeRuntimeChunk(): void {}

export function initCodeThemeRegistryChunk(): void {}

export function initTerminalPanelIconChunk(): void {}

export function initArrowUpIconChunk(): void {}

export function initCheckboxRuntimeChunk(): void {}

export function initCommentIconChunk(): void {}

export function initEditIconChunk(): void {}

export function initSettingsGearIconChunk(): void {}
