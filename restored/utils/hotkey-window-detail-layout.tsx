// Restored from ref/webview/assets/hotkey-window-detail-layout-BKPOZ5YH.js

import React, { type ReactNode } from "react";
import { vscodeApiF } from "../boundaries/vscode-api";
import { appServices } from "../boundaries/rpc.facade";
import { ComposeIcon } from "../icons/compose-icon";
import { PopInMacIcon } from "../icons/pop-in-mac-icon";
import { XIcon } from "../icons/x-icon";
import {
  defineMessages,
  FormattedMessage,
  useIntl,
} from "../vendor/react-intl";
import { useOutlet } from "../vendor/react-router";
import { useWindowControlsSafeArea } from "../runtime/use-window-controls-safe-area";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { useCommandHotkey } from "./use-command-hotkey";
import { HotkeyWindowDetailLayoutContext } from "./use-hotkey-window-detail-layout";
import { useHotkeyWindowDismissOnEscape } from "./use-hotkey-window-dismiss-on-escape";
type HotkeyWindowHeaderProps = {
  title: ReactNode;
  onDismiss: () => void;
  showDismissButton?: boolean;
  reserveWindowControlsSafeArea?: boolean;
  rightActions?: ReactNode;
};
type HotkeyWindowDetailConfig = {
  title: ReactNode;
  mainWindowPath: string;
  canCollapseToHome?: boolean;
};
const hotkeyWindowDetailLayoutMessages = defineMessages({
  dismiss: {
    id: "hotkeyWindow.dismiss",
    defaultMessage: "Dismiss Popout Window",
    description: "Tooltip label for dismissing the hotkey window",
  },
  newThread: {
    id: "hotkeyWindow.threadPage.newButton",
    defaultMessage: "Start New Chat",
    description:
      "Tooltip label for the hotkey window header button that returns to hotkey window home",
  },
  openInMainWindow: {
    id: "hotkeyWindow.threadPage.openInMainWindow",
    defaultMessage: "Open in Main Window",
    description:
      "Tooltip label for the hotkey window header button that opens the current page in the main app window",
  },
});
function HotkeyWindowHeader({
  title,
  onDismiss,
  showDismissButton = true,
  reserveWindowControlsSafeArea = false,
  rightActions,
}: HotkeyWindowHeaderProps) {
  const intl = useIntl();
  const windowControlsSafeArea = useWindowControlsSafeArea();
  const safeAreaLeft = reserveWindowControlsSafeArea
    ? windowControlsSafeArea.left
    : 0;
  const safeAreaRight = reserveWindowControlsSafeArea
    ? windowControlsSafeArea.right
    : 0;
  const leftPadding = safeAreaLeft + 12;
  const rightPadding = safeAreaRight + 12;
  const titleStyle = {
    left: leftPadding + (showDismissButton ? 52 : 0),
    right: rightPadding + 84,
  };
  return (
    <div className="draggable relative flex h-toolbar-sm items-center justify-center px-3">
      <div
        className="absolute inset-y-0 flex items-center justify-center text-base font-medium text-token-foreground/60 select-none"
        style={titleStyle}
      >
        {title}
      </div>
      {showDismissButton ? (
        <div
          className="absolute flex items-center gap-0"
          style={{
            left: leftPadding,
          }}
        >
          <Tooltip
            tooltipContent={
              <FormattedMessage {...hotkeyWindowDetailLayoutMessages.dismiss} />
            }
            delayOpen
          >
            <Button
              size="toolbar"
              color="ghost"
              aria-label={intl.formatMessage(
                hotkeyWindowDetailLayoutMessages.dismiss,
              )}
              onClick={onDismiss}
            >
              <XIcon className="icon-xs" />
            </Button>
          </Tooltip>
        </div>
      ) : null}
      <div
        className="absolute flex items-center gap-0"
        style={{
          right: rightPadding,
        }}
      >
        {rightActions}
      </div>
    </div>
  );
}
function collapseHotkeyWindowToHome() {
  appServices.hotkeyWindowHotkeys?.collapseToHome();
}
function dismissHotkeyWindow() {
  appServices.hotkeyWindowHotkeys?.dismiss();
}
function HotkeyWindowThreadHeader({
  title,
  mainWindowPath,
  canCollapseToHome = true,
}: HotkeyWindowDetailConfig) {
  const intl = useIntl();
  const startNewThreadAction = canCollapseToHome ? (
    <Tooltip
      tooltipContent={
        <FormattedMessage {...hotkeyWindowDetailLayoutMessages.newThread} />
      }
      delayOpen
    >
      <Button
        size="toolbar"
        color="ghost"
        aria-label={intl.formatMessage(
          hotkeyWindowDetailLayoutMessages.newThread,
        )}
        onClick={collapseHotkeyWindowToHome}
      >
        <ComposeIcon className="icon-sm" />
      </Button>
    </Tooltip>
  ) : null;
  const openInMainWindowLabel = intl.formatMessage(
    hotkeyWindowDetailLayoutMessages.openInMainWindow,
  );
  const openInMainWindow = () => {
    vscodeApiF.dispatchMessage("open-in-main-window", {
      path: mainWindowPath,
    });
  };
  return (
    <HotkeyWindowHeader
      title={title}
      onDismiss={dismissHotkeyWindow}
      rightActions={
        <>
          {startNewThreadAction}
          <Tooltip
            tooltipContent={
              <FormattedMessage
                {...hotkeyWindowDetailLayoutMessages.openInMainWindow}
              />
            }
            delayOpen
          >
            <Button
              size="toolbar"
              color="ghost"
              aria-label={openInMainWindowLabel}
              onClick={openInMainWindow}
            >
              <PopInMacIcon className="icon-sm" />
            </Button>
          </Tooltip>
        </>
      }
    />
  );
}
function handleNewThreadHotkey(event: KeyboardEvent) {
  event.preventDefault();
  event.stopPropagation();
  collapseHotkeyWindowToHome();
}
export function HotkeyWindowDetailLayout() {
  useHotkeyWindowDismissOnEscape();
  const [detailLayoutConfig, setDetailLayoutConfig] =
    React.useState<HotkeyWindowDetailConfig | null>(null);
  const canCollapseToHome =
    detailLayoutConfig != null &&
    detailLayoutConfig.canCollapseToHome !== false;
  useCommandHotkey({
    commandId: "newThread",
    enabled: canCollapseToHome,
    onKeyDown: handleNewThreadHotkey,
  });
  const setDetailLayoutRegistration = React.useCallback(
    (registration: unknown | null) => {
      setDetailLayoutConfig(registration as HotkeyWindowDetailConfig | null);
    },
    [],
  );
  const outlet = useOutlet();
  return (
    <HotkeyWindowDetailLayoutContext.Provider
      value={setDetailLayoutRegistration}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-token-border-light bg-token-main-surface-primary">
        {detailLayoutConfig == null ? null : (
          <HotkeyWindowThreadHeader
            title={detailLayoutConfig.title}
            mainWindowPath={detailLayoutConfig.mainWindowPath}
            canCollapseToHome={detailLayoutConfig.canCollapseToHome !== false}
          />
        )}
        <div className="min-h-0 flex-1">{outlet}</div>
      </div>
    </HotkeyWindowDetailLayoutContext.Provider>
  );
}
