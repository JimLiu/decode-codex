// Restored from ref/webview/assets/tabs-BAeCIxNQ.js
// Updated with exports from ref/webview/assets/tabs-Bltkr1kO.js.
import clsx from "clsx";
import type { MouseEventHandler, ReactNode, Ref, WheelEvent } from "react";
import { XIcon } from "../icons/x-icon";
type TabVariant = "pills" | "segmented" | "toolbar" | "underline";
type TabItem = {
  closeLabel?: string;
  icon?: ReactNode;
  key: string;
  name: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  panelId?: string;
};
type TabsProps = {
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
  onSelect: (key: string) => void;
  scrollable?: boolean;
  selectedKey: string;
  tabListRef?: Ref<HTMLDivElement>;
  tabs: readonly TabItem[];
  variant?: TabVariant;
};
export function Tabs({
  ariaLabel,
  ariaLabelledBy,
  className,
  onSelect,
  scrollable = false,
  selectedKey,
  tabListRef,
  tabs,
  variant = "segmented",
}: TabsProps) {
  const tabVariant = tabVariantClassNames[variant];
  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={clsx(
        tabVariant.listClassName,
        scrollable && "hide-scrollbar overflow-x-auto overflow-y-hidden",
        className,
      )}
      onWheel={scrollable ? scrollTabListOnWheel : undefined}
    >
      {tabs.map((tab, index) => {
        const isSelected = tab.key === selectedKey;
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;
        return (
          <div
            key={tab.key}
            className={clsx(
              "relative flex min-w-0 items-center",
              tabVariant.itemClassName,
              tab.onClose != null && "group/tab",
            )}
          >
            <button
              type="button"
              role="tab"
              aria-controls={tab.panelId}
              aria-selected={isSelected}
              aria-pressed={isSelected}
              className={clsx(
                "cursor-interaction items-center text-sm font-medium",
                isSelected
                  ? "text-token-text-primary"
                  : "text-token-text-secondary",
                tabVariant.tabButtonClassName,
                tabVariant.segmentedEdges && isFirst && "rounded-l-md",
                tabVariant.segmentedEdges && isLast && "rounded-r-md",
                isSelected
                  ? tabVariant.selectedClassName
                  : tabVariant.unselectedClassName,
              )}
              onClick={() => {
                if (!isSelected) onSelect(tab.key);
              }}
            >
              {tab.icon == null ? null : (
                <span
                  aria-hidden="true"
                  className="icon-xs flex shrink-0 items-center justify-center"
                >
                  {tab.icon}
                </span>
              )}
              {tab.name}
            </button>
            {tabVariant.selectionIndicator === "underline" && isSelected ? (
              <div className="absolute inset-x-0 bottom-[-1px] h-px bg-token-text-primary" />
            ) : null}
            {tab.onClose == null ? null : (
              <button
                type="button"
                aria-label={tab.closeLabel}
                className={clsx(
                  "cursor-interaction text-token-text-tertiary hover:text-token-text-primary",
                  tabVariant.closeButtonClassName,
                )}
                onClick={tab.onClose}
              >
                <XIcon className="icon-2xs" />
              </button>
            )}
            {tabVariant.segmentedEdges && !isLast ? (
              <div className="h-full w-px self-stretch bg-token-border" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
function scrollTabListOnWheel(event: WheelEvent<HTMLDivElement>) {
  const delta = event.deltaX || event.deltaY;
  if (delta !== 0) {
    event.currentTarget.scrollLeft += delta;
  }
}
const tabVariantClassNames = {
  pills: {
    closeButtonClassName: "px-1",
    itemClassName: "shrink-0",
    listClassName: "flex min-w-0 items-center gap-2",
    segmentedEdges: false,
    selectedClassName: "bg-token-foreground/5 text-token-foreground",
    selectionIndicator: null,
    tabButtonClassName: "flex min-w-0 gap-1.5 rounded-full px-2 py-1",
    unselectedClassName: "hover:bg-token-foreground/5",
  },
  segmented: {
    closeButtonClassName: "px-1",
    itemClassName: "flex-1",
    listClassName:
      "bg-token-surface-secondary border-token-border flex items-center rounded-lg border",
    segmentedEdges: true,
    selectedClassName:
      "bg-token-radio-active-foreground/25 text-token-text-primary",
    selectionIndicator: null,
    tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5",
    unselectedClassName: "hover:bg-token-radio-active-foreground/5",
  },
  toolbar: {
    closeButtonClassName: "flex h-7 w-5 items-center justify-center",
    itemClassName: "shrink-0",
    listClassName: "flex min-w-0 items-center gap-0.5",
    segmentedEdges: false,
    selectedClassName: "bg-token-bg-primary text-token-text-primary",
    selectionIndicator: null,
    tabButtonClassName: "flex min-w-0 gap-1.5 rounded-md px-2 py-1",
    unselectedClassName: "hover:bg-token-bg-primary",
  },
  underline: {
    closeButtonClassName: "px-1",
    itemClassName: "shrink-0 pb-2",
    listClassName:
      "border-token-border flex min-w-0 items-start gap-8 border-b",
    segmentedEdges: false,
    selectedClassName: "text-token-text-primary",
    selectionIndicator: "underline",
    tabButtonClassName: "flex min-w-0 gap-1.5",
    unselectedClassName: "hover:text-token-text-primary",
  },
} as const;
export function initTabsChunk(): void {}
