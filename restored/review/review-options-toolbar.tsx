// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Expanded ("toolbar") variant of the review diff options: per-action icon buttons plus the
// shared overflow menu items fragment and the unified/split diff-mode toggle.
import { type ComponentType, useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import { JumpToFileButton } from "./jump-to-file-menu";
import type { ReviewDiffControls } from "./review-options-menu-compact";
import { GitApplyClipboardIcon } from "../icons/git-apply-clipboard-icon";
import { WhitespaceEyeIcon } from "../icons/whitespace-eye-icon";
import { ExpandAllLinesIcon } from "../icons/expand-all-lines-icon";
import { CollapseAllLinesIcon } from "../icons/collapse-all-lines-icon";
import { WordDiffIcon } from "../icons/word-diff-icon";
import {
  ReviewOptionsMenuIcon,
  RefreshIcon,
  WordWrapEnabledIcon,
  WordWrapDisabledIcon,
  SplitDiffModeIcon,
  UnifiedDiffModeIcon,
  LoadFullFilesIcon,
  RichPreviewEnabledIcon,
  RichPreviewDisabledIcon,
  WordDiffEnabledIcon,
} from "../boundaries/onboarding-commons-externals.facade";

type IconComponent = ComponentType<{ className?: string }>;

// The toolbar renders the diff-mode toggle, so it needs the extra mode fields the
// compact menu's ReviewDiffControls omits.
interface ToolbarDiffControls extends ReviewDiffControls {
  diffMode: "unified" | "split";
  onSelectDiffMode: (side: "left" | "right") => void;
}

interface ReviewOptionsToolbarProps {
  copyGitApplyCommandDisabled?: boolean;
  diffControls: ToolbarDiffControls;
  onClickCopyGitApplyCommand?: () => void;
  onRefreshGitQueries?: () => void;
  refreshGitQueriesDisabled?: boolean;
  showCopyGitApplyCommand?: boolean;
  showHideWhitespace?: boolean;
  showLoadFullFiles?: boolean;
  showRefreshGitQueries?: boolean;
}

interface ReviewToolbarIconButtonProps {
  Icon: IconComponent;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  pressed?: boolean;
}

function ReviewToolbarIconButton({
  Icon,
  label,
  onClick,
  disabled = false,
  pressed = false,
}: ReviewToolbarIconButtonProps) {
  return (
    <Tooltip tooltipContent={label}>
      <Button
        aria-label={label}
        aria-pressed={pressed}
        color={pressed ? "ghostActive" : "ghost"}
        size="toolbar"
        uniform={true}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

interface ReviewDiffOptionsMenuItemsProps {
  onClose: () => void;
  wordDiffsEnabled: boolean;
  showCopyGitApplyCommand?: boolean;
  showHideWhitespace?: boolean;
  showLoadFullFiles?: boolean;
  copyGitApplyCommandDisabled?: boolean;
  onClickCopyGitApplyCommand?: () => void;
  richPreviewEnabled: boolean;
  onToggleRichPreview: () => void;
  onToggleWordDiffs: () => void;
  hideWhitespace: boolean;
  onToggleHideWhitespace: () => void;
  loadFullFilesEnabled: boolean;
  onToggleLoadFullFiles: () => void;
}

function ReviewDiffOptionsMenuItems({
  onClose,
  wordDiffsEnabled,
  showCopyGitApplyCommand,
  showHideWhitespace = true,
  showLoadFullFiles = true,
  copyGitApplyCommandDisabled,
  onClickCopyGitApplyCommand,
  richPreviewEnabled,
  onToggleRichPreview,
  onToggleWordDiffs,
  hideWhitespace,
  onToggleHideWhitespace,
  loadFullFilesEnabled,
  onToggleLoadFullFiles,
}: ReviewDiffOptionsMenuItemsProps) {
  const intl = useIntl();
  const richPreviewAriaLabel = richPreviewEnabled
    ? intl.formatMessage({
        id: "codex.diffView.richPreviewDisable",
        defaultMessage: "Disable rich preview",
        description: "Aria label for disabling rich previews in the diff view",
      })
    : intl.formatMessage({
        id: "codex.diffView.richPreviewEnable",
        defaultMessage: "Enable rich preview",
        description: "Aria label for enabling rich previews in the diff view",
      });

  const handleToggleRichPreview = (event: Event) => {
    event.preventDefault();
    onToggleRichPreview();
    onClose();
  };
  const handleToggleWordDiffs = (event: Event) => {
    event.preventDefault();
    onToggleWordDiffs();
    onClose();
  };
  const handleToggleHideWhitespace = (event: Event) => {
    event.preventDefault();
    onToggleHideWhitespace();
    onClose();
  };
  const handleToggleLoadFullFiles = (event: Event) => {
    event.preventDefault();
    onToggleLoadFullFiles();
    onClose();
  };
  const handleCopyGitApplyCommand = (event: Event) => {
    event.preventDefault();
    onClickCopyGitApplyCommand?.();
    onClose();
  };

  const loadFullFilesItem = showLoadFullFiles ? (
    <MenuChrome.Item
      onSelect={handleToggleLoadFullFiles}
      LeftIcon={LoadFullFilesIcon}
    >
      {loadFullFilesEnabled ? (
        <FormattedMessage
          id="codex.review.loadFullFiles.disable"
          defaultMessage="Don't load full files"
          description="Menu item to avoid loading full file contents for partial diffs"
        />
      ) : (
        <FormattedMessage
          id="codex.review.loadFullFiles.enable"
          defaultMessage="Load full files"
          description="Menu item to load full file contents for partial diffs"
        />
      )}
    </MenuChrome.Item>
  ) : null;

  const richPreviewItem = (
    <MenuChrome.Item
      onSelect={handleToggleRichPreview}
      aria-label={richPreviewAriaLabel}
      LeftIcon={
        richPreviewEnabled ? RichPreviewEnabledIcon : RichPreviewDisabledIcon
      }
    >
      {richPreviewEnabled ? (
        <FormattedMessage
          id="codex.review.richPreview.disable"
          defaultMessage="Disable rich preview"
          description="Menu item to disable rich previews in the diff view"
        />
      ) : (
        <FormattedMessage
          id="codex.review.richPreview.enable"
          defaultMessage="Enable rich preview"
          description="Menu item to enable rich previews in the diff view"
        />
      )}
    </MenuChrome.Item>
  );

  const wordDiffsItem = (
    <MenuChrome.Item
      onSelect={handleToggleWordDiffs}
      LeftIcon={wordDiffsEnabled ? WordDiffEnabledIcon : WordDiffIcon}
    >
      {wordDiffsEnabled ? (
        <FormattedMessage
          id="codex.review.wordDiffs.disable"
          defaultMessage="Disable word diffs"
          description="Menu item to disable word-level diff highlights"
        />
      ) : (
        <FormattedMessage
          id="codex.review.wordDiffs.enable"
          defaultMessage="Enable word diffs"
          description="Menu item to enable word-level diff highlights"
        />
      )}
    </MenuChrome.Item>
  );

  const hideWhitespaceItem = showHideWhitespace ? (
    <MenuChrome.Item
      onSelect={handleToggleHideWhitespace}
      LeftIcon={WhitespaceEyeIcon}
    >
      {hideWhitespace ? (
        <FormattedMessage
          id="codex.review.whitespace.show"
          defaultMessage="Show white space"
          description="Menu item to show whitespace-only diff changes"
        />
      ) : (
        <FormattedMessage
          id="codex.review.whitespace.hide"
          defaultMessage="Hide white space"
          description="Menu item to hide whitespace-only diff changes"
        />
      )}
    </MenuChrome.Item>
  ) : null;

  const copyGitApplyItem = showCopyGitApplyCommand ? (
    <MenuChrome.Item
      onSelect={handleCopyGitApplyCommand}
      disabled={copyGitApplyCommandDisabled || !onClickCopyGitApplyCommand}
      LeftIcon={GitApplyClipboardIcon}
    >
      <FormattedMessage
        id="codex.review.copyGitApplyCommand"
        defaultMessage="Copy git apply command"
        description="Menu item to copy a git apply command"
      />
    </MenuChrome.Item>
  ) : null;

  return (
    <>
      {loadFullFilesItem}
      {richPreviewItem}
      {wordDiffsItem}
      {hideWhitespaceItem}
      {copyGitApplyItem}
    </>
  );
}

interface DiffModeToggleButtonProps {
  diffControls: ToolbarDiffControls;
}

function DiffModeToggleButton({ diffControls }: DiffModeToggleButtonProps) {
  const intl = useIntl();
  const isUnified = diffControls.diffMode === "unified";
  const label = isUnified
    ? intl.formatMessage({
        id: "codex.review.switchToSplit",
        defaultMessage: "Switch to split diff",
        description: "Button label to switch to split diff view",
      })
    : intl.formatMessage({
        id: "codex.review.switchToUnified",
        defaultMessage: "Switch to unified diff",
        description: "Button label to switch to unified diff view",
      });
  const handleClick = () =>
    diffControls.onSelectDiffMode(isUnified ? "right" : "left");
  return (
    <ReviewToolbarIconButton
      Icon={isUnified ? SplitDiffModeIcon : UnifiedDiffModeIcon}
      label={label}
      onClick={handleClick}
    />
  );
}

export function ReviewOptionsToolbar({
  copyGitApplyCommandDisabled,
  diffControls,
  onClickCopyGitApplyCommand,
  onRefreshGitQueries,
  refreshGitQueriesDisabled,
  showCopyGitApplyCommand,
  showHideWhitespace = true,
  showLoadFullFiles = true,
  showRefreshGitQueries,
}: ReviewOptionsToolbarProps) {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  const refreshLabel = intl.formatMessage({
    id: "codex.review.refreshGitQueries",
    defaultMessage: "Refresh",
    description: "Menu item to refresh git queries for the current repository",
  });
  const wrapLabel = diffControls.wrap
    ? intl.formatMessage({
        id: "codex.review.wrap.disable",
        defaultMessage: "Disable word wrap",
        description: "Menu item to disable word wrap in diff view",
      })
    : intl.formatMessage({
        id: "codex.review.wrap.enable",
        defaultMessage: "Enable word wrap",
        description: "Menu item to enable word wrap in diff view",
      });
  const expandCollapseLabel = diffControls.expanded
    ? intl.formatMessage({
        id: "codex.review.expandOrCollapseDiffMenu.collapse",
        defaultMessage: "Collapse all diffs",
        description:
          "Menu item to collapse all diffs in the review options menu",
      })
    : intl.formatMessage({
        id: "codex.review.expandOrCollapseDiffMenu.expand",
        defaultMessage: "Expand all diffs",
        description: "Menu item to expand all diffs in the review options menu",
      });
  const menuLabel = intl.formatMessage({
    id: "codex.review.header.moreOptions",
    defaultMessage: "Review options",
    description: "Aria label for review header dropdown menu button",
  });

  const closeMenu = () => {
    setOpen(false);
  };

  const triggerButton = (
    <Tooltip tooltipContent={menuLabel} delayOpen={true}>
      <Button
        aria-label={menuLabel}
        color="ghost"
        size="toolbar"
        uniform={true}
      >
        <ReviewOptionsMenuIcon className="icon-xs text-token-description-foreground" />
      </Button>
    </Tooltip>
  );

  const optionsMenu = (
    <DropdownMenu
      open={open}
      onOpenChange={setOpen}
      align="end"
      contentWidth="menu"
      triggerButton={triggerButton}
    >
      <ReviewDiffOptionsMenuItems
        onClose={closeMenu}
        wordDiffsEnabled={diffControls.wordDiffsEnabled}
        showCopyGitApplyCommand={showCopyGitApplyCommand}
        showHideWhitespace={showHideWhitespace}
        showLoadFullFiles={showLoadFullFiles}
        copyGitApplyCommandDisabled={copyGitApplyCommandDisabled}
        onClickCopyGitApplyCommand={onClickCopyGitApplyCommand}
        richPreviewEnabled={diffControls.richPreviewEnabled}
        onToggleRichPreview={diffControls.onToggleRichPreview}
        onToggleWordDiffs={diffControls.onToggleWordDiffs}
        hideWhitespace={diffControls.hideWhitespace}
        onToggleHideWhitespace={diffControls.onToggleHideWhitespace}
        loadFullFilesEnabled={diffControls.loadFullFilesEnabled}
        onToggleLoadFullFiles={diffControls.onToggleLoadFullFiles}
      />
    </DropdownMenu>
  );

  const refreshButton = showRefreshGitQueries ? (
    <ReviewToolbarIconButton
      Icon={RefreshIcon}
      label={refreshLabel}
      onClick={() => onRefreshGitQueries?.()}
      disabled={refreshGitQueriesDisabled || !onRefreshGitQueries}
    />
  ) : null;

  const wrapButton = (
    <ReviewToolbarIconButton
      Icon={diffControls.wrap ? WordWrapEnabledIcon : WordWrapDisabledIcon}
      label={wrapLabel}
      onClick={diffControls.onToggleWrap}
    />
  );

  const expandCollapseButton = (
    <ReviewToolbarIconButton
      Icon={diffControls.expanded ? CollapseAllLinesIcon : ExpandAllLinesIcon}
      label={expandCollapseLabel}
      onClick={diffControls.onToggleExpanded}
    />
  );

  return (
    <div className="flex items-center gap-1.5">
      {optionsMenu}
      <JumpToFileButton />
      {refreshButton}
      {wrapButton}
      {expandCollapseButton}
      <DiffModeToggleButton diffControls={diffControls} />
    </div>
  );
}
