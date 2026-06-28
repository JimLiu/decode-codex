// Restored from ref/webview/assets/composer-suggestion-list-BQ2rPanH.js
import type { ButtonHTMLAttributes, MouseEvent, ReactNode, Ref } from "react";
import clsx from "clsx";
import { useLocation } from "../../vendor/react-router";
import { ComposerTopMenuPanel } from "../top-menu-chrome";
import type { ComposerSuggestionChromeVariant } from "./types";
export const HOTKEY_WINDOW_HOME_COMPOSER_MENU_OPEN_ATTR =
  "data-hotkey-window-home-composer-menu-open";
export function isHotkeyWindowPath(pathname: string): boolean {
  return pathname === "/hotkey-window";
}
type SuggestionListChromeProps = {
  children: ReactNode;
  className?: string;
  chromeVariant?: ComposerSuggestionChromeVariant;
  containerRef?: Ref<HTMLDivElement>;
};
type SuggestionListScrollAreaProps = {
  children: ReactNode;
  className?: string;
  fadeMaskVariant?: "both" | "bottom" | "top";
  listRef?: Ref<HTMLDivElement>;
};
type SuggestionListSectionTitleProps = {
  children: ReactNode;
  className?: string;
  chromeVariant?: ComposerSuggestionChromeVariant;
};
type SuggestionListEmptyStateProps = {
  children: ReactNode;
};
type SuggestionListItemProps = {
  children: ReactNode;
  getItemProps: (index: number) => ButtonHTMLAttributes<HTMLButtonElement>;
  highlighted: boolean;
  itemIndex: number;
};
export function SuggestionListChrome({
  children,
  className,
  chromeVariant = "default",
  containerRef,
}: SuggestionListChromeProps) {
  const location = useLocation();
  const embeddedExpandedTopTray = chromeVariant === "embeddedExpandedTopTray";
  if (
    chromeVariant === "expandedTopTray" ||
    embeddedExpandedTopTray ||
    isHotkeyWindowPath(location.pathname)
  ) {
    return (
      <ComposerTopMenuPanel
        embedded={embeddedExpandedTopTray}
        expandedTopTray
        containerRef={containerRef}
        className={clsx(
          "relative flex w-full flex-col overflow-hidden text-sm",
          className,
        )}
      >
        {children}
      </ComposerTopMenuPanel>
    );
  }
  return (
    <div
      ref={containerRef}
      className={clsx(
        "border-token-border bg-token-dropdown-background/90 relative flex w-full flex-col overflow-hidden rounded-2xl border p-1 text-sm backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function SuggestionListScrollArea({
  children,
  className,
  fadeMaskVariant = "both",
  listRef,
}: SuggestionListScrollAreaProps) {
  const maskClassName =
    fadeMaskVariant === "bottom"
      ? "vertical-scroll-fade-mask-bottom"
      : fadeMaskVariant === "top"
        ? "vertical-scroll-fade-mask-top"
        : "vertical-scroll-fade-mask";
  return (
    <div
      ref={listRef}
      className={clsx(
        maskClassName,
        "flex w-full flex-1 flex-col overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function SuggestionListSectionTitle({
  children,
  className,
  chromeVariant = "default",
}: SuggestionListSectionTitleProps) {
  const location = useLocation();
  const expandedChrome =
    chromeVariant === "expandedTopTray" ||
    chromeVariant === "embeddedExpandedTopTray" ||
    isHotkeyWindowPath(location.pathname);
  return (
    <div
      className={clsx(
        expandedChrome
          ? "px-row-x pb-1 text-sm text-token-description-foreground"
          : "bg-token-dropdown-background/95 text-token-description-foreground sticky top-0 z-10 px-row-x py-1 text-sm backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
export function SuggestionListEmptyState({
  children,
}: SuggestionListEmptyStateProps) {
  return (
    <div className="px-row-x py-row-y text-sm text-token-input-placeholder-foreground">
      {children}
    </div>
  );
}
export function SuggestionListItem({
  children,
  getItemProps,
  highlighted,
  itemIndex,
}: SuggestionListItemProps) {
  const itemProps = getItemProps(itemIndex);
  return (
    <button
      type="button"
      {...itemProps}
      aria-selected={highlighted}
      onMouseDown={preventDefaultMouseDown}
      className={clsx(
        "text-token-foreground outline-hidden opacity-75 focus:bg-token-list-hover-background cursor-interaction w-full shrink-0 overflow-hidden rounded-lg px-row-x py-row-y text-left text-sm",
        highlighted && "bg-token-list-hover-background opacity-100",
      )}
    >
      {children}
    </button>
  );
}
function preventDefaultMouseDown(event: MouseEvent): void {
  event.preventDefault();
}
