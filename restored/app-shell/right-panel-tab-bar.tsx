// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toolbar-height tab bar for the right side panel, plus the button that toggles
// the panel between its default width and full width.
import { useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import {
  PanelExpandIcon,
  PanelCollapseIcon,
} from "../icons/app-shell-panel-icons";
import { AppShellTabs } from "./app-shell-tabs";
import { runCommand } from "../utils/run-command";
import { rightAppShellTabController } from "./app-shell-tab-controller";
import {
  appStoreScope,
  keyboardShortcutRegistry,
  motion as Motion,
  motionTemplate,
  rightPanelAfterListSignal,
  rightPanelAfterListStickySignal,
  rightPanelBeforeListSignal,
  rightPanelEmptyStateSignal,
  rightPanelMaximizedSignal,
  sidebarVisibleSignal,
  useAppScope,
  useAppShellLayout,
  useCommandHandler,
  useCommandShortcut,
  useSignalValue,
} from "../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "./app-shell-tab-controller/types";

function runToggleMaximizeSidePanelCommand() {
  return runCommand("toggleMaximizeSidePanel", "side_panel_full_width_button");
}

function MaximizeSidePanelButton() {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const intl = useIntl();
  const isMaximized = useSignalValue<boolean>(rightPanelMaximizedSignal);
  const shortcut = useCommandShortcut(
    keyboardShortcutRegistry,
    "toggleMaximizeSidePanel",
  );
  const label = isMaximized
    ? intl.formatMessage({
        id: "codex.rightPanel.restoreWidth",
        defaultMessage: "Restore panel width",
        description:
          "Accessible label for restoring the right panel from full width",
      })
    : intl.formatMessage({
        id: "codex.rightPanel.expandFullWidth",
        defaultMessage: "Expand panel",
        description:
          "Accessible label for expanding the right panel to full width",
      });
  useCommandHandler("toggleMaximizeSidePanel", () => {
    store.set(rightPanelMaximizedSignal, !isMaximized);
  });
  const icon = isMaximized ? (
    <PanelCollapseIcon className="icon-xs" />
  ) : (
    <PanelExpandIcon className="icon-xs" />
  );
  return (
    <Tooltip tooltipContent={label} shortcut={shortcut} delayOpen>
      <Button
        aria-label={label}
        aria-pressed={isMaximized}
        color={isMaximized ? "secondary" : "ghost"}
        size="toolbar"
        uniform
        onClick={runToggleMaximizeSidePanelCommand}
      >
        {icon}
      </Button>
    </Tooltip>
  );
}

export function RightPanelTabBar() {
  const afterList = useSignalValue(rightPanelAfterListSignal);
  const afterListSticky = useSignalValue(rightPanelAfterListStickySignal);
  const beforeList = useSignalValue(rightPanelBeforeListSignal);
  const emptyState = useSignalValue(rightPanelEmptyStateSignal);
  const isMaximized = useSignalValue<boolean>(rightPanelMaximizedSignal);
  const isSidebarVisible = useSignalValue<boolean>(sidebarVisibleSignal);
  const { headerLeftWidth, headerRightWidth } = useAppShellLayout();
  const trailingSpacerWidth = motionTemplate`max(0px, calc(${headerRightWidth}px)`;
  return (
    <AppShellTabs
      headerHeight="toolbar"
      beforeList={
        <>
          {isMaximized && !isSidebarVisible && (
            <Motion.div
              aria-hidden
              className="pointer-events-none h-full shrink-0"
              style={{ width: headerLeftWidth }}
            />
          )}
          {beforeList}
        </>
      }
      afterListSticky={afterListSticky}
      emptyState={emptyState}
      afterList={
        <>
          {afterList}
          <MaximizeSidePanelButton />
          <Motion.div
            aria-hidden
            data-testid="right-panel-tab-bar-header-spacer"
            className="pointer-events-none flex h-full shrink-0 items-center"
            style={{ width: trailingSpacerWidth }}
          />
        </>
      }
      controller={rightAppShellTabController}
    />
  );
}
