// Restored from ref/webview/assets/composer-top-menu-chrome-DbsJIjHi.js
// Shared chrome wrappers for the composer top menu and expanded tray.
import type { ComponentProps, HTMLAttributes, ReactNode, Ref } from "react";
import clsx from "clsx";
import { Command } from "../vendor/cmdk";
const COMPOSER_TOP_MENU_CHROME_CLASS_NAMES = {
  expandedTopTrayShell: "_expandedTopTrayShell_ly16b_1",
  expandedTopTrayInFlowShell: "_expandedTopTrayInFlowShell_ly16b_9",
  expandedTopTrayPanel: "_expandedTopTrayPanel_ly16b_14",
  paddedBodyExpandedTopTrayPanel: "_paddedBodyExpandedTopTrayPanel_ly16b_49",
  embeddedExpandedTopTrayPanel: "_embeddedExpandedTopTrayPanel_ly16b_53",
} as const;
type ComposerTopMenuShellProps = HTMLAttributes<HTMLDivElement> & {
  expandedTopTray?: boolean;
  inFlow?: boolean;
};
type ComposerTopMenuPanelProps = {
  children?: ReactNode;
  className?: string;
  containerRef?: Ref<HTMLDivElement>;
  embedded?: boolean;
  expandedTopTray?: boolean;
  paddedBody?: boolean;
};
type ComposerTopMenuDialogProps = ComponentProps<typeof Command.Dialog> & {
  contentClassName?: string;
  expandedTopTray?: boolean;
};
export function ComposerTopMenuPanel({
  children,
  className,
  containerRef,
  embedded = false,
  expandedTopTray = false,
  paddedBody = false,
}: ComposerTopMenuPanelProps) {
  return (
    <div
      ref={containerRef}
      className={clsx(
        expandedTopTray &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.expandedTopTrayPanel,
        expandedTopTray &&
          embedded &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.embeddedExpandedTopTrayPanel,
        expandedTopTray &&
          paddedBody &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.paddedBodyExpandedTopTrayPanel,
        className,
      )}
    >
      {children}
    </div>
  );
}
export function ComposerTopMenuShell({
  className,
  expandedTopTray = false,
  inFlow = false,
  ...divProps
}: ComposerTopMenuShellProps) {
  return (
    <div
      {...divProps}
      className={clsx(
        expandedTopTray &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.expandedTopTrayShell,
        expandedTopTray &&
          inFlow &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.expandedTopTrayInFlowShell,
        className,
      )}
    />
  );
}
export function ComposerTopMenuDialog({
  className,
  contentClassName,
  expandedTopTray = false,
  ...dialogProps
}: ComposerTopMenuDialogProps) {
  return (
    <Command.Dialog
      {...dialogProps}
      className={clsx(
        expandedTopTray &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.expandedTopTrayPanel,
        className,
      )}
      contentClassName={clsx(
        expandedTopTray &&
          COMPOSER_TOP_MENU_CHROME_CLASS_NAMES.expandedTopTrayShell,
        contentClassName,
      )}
    />
  );
}
