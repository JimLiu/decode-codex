// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact ("collapsed") variant of the review toolbar options menu (overflow dropdown
// plus an inline expand/collapse-all button).
import { useState } from "react";
import { useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import {
  ReviewOptionsMenuIcon,
  RefreshIcon,
  WordWrapEnabledIcon,
  WordWrapDisabledIcon,
  CollapseAllDiffsIcon,
  ExpandAllDiffsIcon,
  ReviewDiffOptionsMenuItems,
  ReviewToolbarIconButton,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ReviewDiffControls {
  wrap: boolean;
  expanded: boolean;
  hideWhitespace: boolean;
  richPreviewEnabled: boolean;
  wordDiffsEnabled: boolean;
  loadFullFilesEnabled: boolean;
  onToggleWrap: () => void;
  onToggleExpanded: () => void;
  onToggleHideWhitespace: () => void;
  onToggleRichPreview: () => void;
  onToggleWordDiffs: () => void;
  onToggleLoadFullFiles: () => void;
}

export interface ReviewOptionsMenuCompactProps {
  copyGitApplyCommandDisabled?: boolean;
  diffControls: ReviewDiffControls;
  onClickCopyGitApplyCommand?: () => void;
  onRefreshGitQueries?: () => void;
  refreshGitQueriesDisabled?: boolean;
  showCopyGitApplyCommand?: boolean;
  showHideWhitespace?: boolean;
  showLoadFullFiles?: boolean;
  showRefreshGitQueries?: boolean;
}

export function ReviewOptionsMenuCompact({
  copyGitApplyCommandDisabled,
  diffControls,
  onClickCopyGitApplyCommand,
  onRefreshGitQueries,
  refreshGitQueriesDisabled,
  showCopyGitApplyCommand,
  showHideWhitespace = true,
  showLoadFullFiles = true,
  showRefreshGitQueries,
}: ReviewOptionsMenuCompactProps) {
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
        <ReviewOptionsMenuIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );

  const refreshItem = showRefreshGitQueries ? (
    <MenuChrome.Item
      onSelect={(event: Event) => {
        event.preventDefault();
        onRefreshGitQueries?.();
        closeMenu();
      }}
      LeftIcon={RefreshIcon}
      disabled={refreshGitQueriesDisabled || !onRefreshGitQueries}
    >
      {refreshLabel}
    </MenuChrome.Item>
  ) : null;

  const wrapItem = (
    <MenuChrome.Item
      onSelect={(event: Event) => {
        event.preventDefault();
        diffControls.onToggleWrap();
        closeMenu();
      }}
      LeftIcon={diffControls.wrap ? WordWrapEnabledIcon : WordWrapDisabledIcon}
    >
      {wrapLabel}
    </MenuChrome.Item>
  );

  const expandCollapseButton = (
    <ReviewToolbarIconButton
      Icon={diffControls.expanded ? CollapseAllDiffsIcon : ExpandAllDiffsIcon}
      label={expandCollapseLabel}
      onClick={diffControls.onToggleExpanded}
    />
  );

  return (
    <>
      <DropdownMenu
        open={open}
        onOpenChange={setOpen}
        align="end"
        contentWidth="menu"
        triggerButton={triggerButton}
      >
        {refreshItem}
        {wrapItem}
        <MenuChrome.Separator />
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
      {expandCollapseButton}
    </>
  );
}
