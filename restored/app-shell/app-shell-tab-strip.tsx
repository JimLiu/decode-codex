// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Horizontal app-shell tab strip: a sortable/draggable row of tabs with
// edge-fade affordances driven by intersection sentinels, inter-tab separators,
// and optional leading/trailing/sticky slots.
import type { CSSProperties, ReactNode } from "react";
import { useContext, useRef, useState } from "react";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import { defineMessage } from "../vendor/react-intl";
import { motion as Motion } from "../boundaries/onboarding-commons-externals.facade";
import {
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from "../vendor/dnd-kit-sortable";
import { useDroppable } from "../vendor/dnd-kit-core";
import { AppShellTab } from "./app-shell-tab";
import {
  appStoreScope,
  cssTransformHelpers,
  ContextMenu,
  useAppScope,
  useMeasuredWidth,
  appShellPanelDragContext,
  showMultiTabCloseMenuSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

interface ContextMenuItem {
  id: string;
  type?: "separator";
  enabled?: boolean;
  message?: unknown;
  onSelect?: () => void;
}

function getTabDndId(tab: AppShellTabRecord): string {
  return tab.dndId;
}

function getTabId(tab: AppShellTabRecord): string {
  return tab.tabId;
}

function isTabClosable(tab: AppShellTabRecord): boolean {
  return tab.isClosable;
}

function isSeparatorAdjacentToActive(
  index: number,
  activeIndex: number,
): boolean {
  return (
    activeIndex !== -1 && (index === activeIndex || index === activeIndex - 1)
  );
}

interface SortableAppShellTabProps {
  controller: AppShellTabController;
  disabled: boolean;
  isActive: boolean;
  separatorIndex: number;
  showTrailingSeparator: boolean;
  tab: AppShellTabRecord;
}

export function SortableAppShellTab({
  controller,
  disabled,
  isActive,
  separatorIndex,
  showTrailingSeparator,
  tab,
}: SortableAppShellTabProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const {
    tabId,
    title,
    icon,
    isClosable,
    isLabel,
    contextMenuItems,
    highlightedIcon,
    isHighlighted,
    trailingContent,
    isPreview,
    tooltip,
  } = tab;
  const dragData = { controller, kind: "app-shell-tab", tabId };
  const isSortableDisabled = disabled || isLabel;
  const {
    attributes,
    isDragging,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    data: dragData,
    disabled: isSortableDisabled,
    id: tab.dndId,
    strategy: horizontalListSortingStrategy,
  });

  const appendCloseMenuItems = (
    items: ContextMenuItem[],
  ): ContextMenuItem[] => {
    if (!isClosable) return items;
    const showMultiClose = store.get<boolean>(showMultiTabCloseMenuSignal);
    const tabs = store.get<AppShellTabRecord[]>(controller.tabs$);
    const tabIndex = tabs.findIndex((item) => item.tabId === tabId);
    const hasOtherClosableTabs = tabs.some(
      (item) => item.tabId !== tabId && item.isClosable,
    );
    const hasClosableTabsToRight =
      tabIndex !== -1 && tabs.slice(tabIndex + 1).some(isTabClosable);
    if (items.length > 0) {
      items.push({ id: "close-tab-separator", type: "separator" });
    }
    items.push({
      id: "close-tab",
      message: defineMessage({
        id: "codex.tabs.contextMenu.close",
        defaultMessage: "Close",
        description: "Context menu action for closing a tab",
      }),
      onSelect: () => controller.closeTab(store, tabId),
    });
    if (!showMultiClose) return items;
    items.push({
      enabled: hasOtherClosableTabs,
      id: "close-other-tabs",
      message: defineMessage({
        id: "codex.tabs.contextMenu.closeOtherTabs",
        defaultMessage: "Close other tabs",
        description:
          "Context menu action for closing all other tabs besides the current tab",
      }),
      onSelect: () => controller.closeOtherTabs(store, tabId),
    });
    items.push({
      enabled: hasClosableTabsToRight,
      id: "close-tabs-to-the-right",
      message: defineMessage({
        id: "codex.tabs.contextMenu.closeTabsToTheRight",
        defaultMessage: "Close tabs to the right",
        description:
          "Context menu action for closing the tabs to the right of the current tab",
      }),
      onSelect: () => controller.closeTabsToRight(store, tabId),
    });
    return items;
  };

  const getContextMenuItems = () => {
    const baseItems =
      typeof contextMenuItems === "function"
        ? contextMenuItems(store)
        : (contextMenuItems ?? []);
    return Array.isArray(baseItems)
      ? appendCloseMenuItems([...baseItems])
      : baseItems.then((value: ContextMenuItem[]) =>
          appendCloseMenuItems([...value]),
        );
  };

  const panelId = controller.panelId;
  const containerClassName = clsx(
    "my-auto flex shrink-0 relative max-w-40 pe-1 items-center contain-content gap-0.5",
    disabled && "opacity-50",
    isDragging && "z-10 cursor-grab opacity-0",
  );
  const containerStyle: CSSProperties = {
    transform: cssTransformHelpers.Translate.toString(transform),
    transition,
  };

  const handleActivate = () => controller.activateTab(store, tabId);
  const handleClose = () => controller.closeTab(store, tabId);
  const handleDoubleClick = () => {
    if (isPreview) controller.pinTab(store, tabId);
  };

  const tabButton = (
    <AppShellTab
      activatorRef={setActivatorNodeRef}
      disabled={disabled}
      id={tabId}
      highlightedIcon={highlightedIcon}
      icon={icon}
      isActive={isActive}
      isClosable={isClosable}
      isDragging={isDragging}
      isHighlighted={isHighlighted}
      isLabel={isLabel}
      isPreview={isPreview}
      onActivate={handleActivate}
      onClose={handleClose}
      trailingContent={trailingContent}
      title={title}
      tooltip={tooltip}
      {...listeners}
      {...attributes}
      onDoubleClick={handleDoubleClick}
    />
  );

  const separatorClassName = clsx(
    "h-3 w-px shrink-0 end-0 absolute bg-token-border transition-opacity duration-200",
    showTrailingSeparator ? "opacity-100" : "opacity-0",
  );

  return (
    <Motion.div
      inert={disabled}
      data-app-shell-tab-controller={panelId}
      data-tab-id={tabId}
      ref={setNodeRef}
      className={containerClassName}
      style={containerStyle}
    >
      <ContextMenu getItems={getContextMenuItems}>{tabButton}</ContextMenu>
      <div
        aria-hidden
        data-app-shell-tab-separator={tabId}
        data-app-shell-tab-separator-index={separatorIndex}
        className={separatorClassName}
      />
    </Motion.div>
  );
}

interface IntersectionSentinelProps {
  onVisibleChange: (isVisible: boolean) => void;
  root: Element | null;
  rootMargin?: string;
}

function IntersectionSentinel({
  onVisibleChange,
  root,
  rootMargin,
}: IntersectionSentinelProps) {
  const attachObserver = (element: HTMLSpanElement | null) => {
    if (element == null) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) onVisibleChange(entry.isIntersecting);
      },
      { root, rootMargin },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  };
  return <span key={rootMargin} aria-hidden ref={attachObserver} />;
}

export interface AppShellTabStripProps {
  activeTabId: string | null;
  after?: ReactNode;
  afterSticky?: ReactNode;
  before?: ReactNode;
  controller: AppShellTabController;
  height: "toolbar" | "pane";
  tabs: AppShellTabRecord[];
  workspaceReady: boolean;
}

export function AppShellTabStrip({
  activeTabId,
  after,
  afterSticky,
  before,
  controller,
  height,
  tabs,
  workspaceReady,
}: AppShellTabStripProps) {
  const [isStartVisible, setStartVisible] = useState(false);
  const [isEndVisible, setEndVisible] = useState(false);
  const [stickyAfterRef, stickyAfterWidth] = useMeasuredWidth();
  const [scrollRoot, setScrollRoot] = useState<Element | null>(null);
  const droppableId = `app-shell-tab-strip:${controller.panelId}`;
  const { setNodeRef } = useDroppable({
    id: droppableId,
    data: { controller, kind: "app-shell-tab-strip" },
  });
  const dragContext = useContext(appShellPanelDragContext);

  const tabIds = tabs.map(getTabId);
  const dndIds = tabs.map(getTabDndId);
  const endRootMargin =
    stickyAfterWidth == null || stickyAfterWidth === 0
      ? "0px"
      : `0px -${stickyAfterWidth}px 0px 0px`;
  const isDragging = dragContext?.dragState != null;
  const activeIndex = activeTabId == null ? -1 : tabIds.indexOf(activeTabId);

  const stripClassName = clsx(
    height === "toolbar" && "h-toolbar",
    height === "pane" && "h-toolbar-pane",
    "isolate flex min-w-0 shrink-0 select-none items-center bg-token-main-surface-primary px-2 [contain:layout_paint]",
  );
  const setScrollContainerRef = (element: HTMLDivElement | null) => {
    setScrollRoot(element);
    setNodeRef(element);
  };
  const scrollContainerClassName =
    "hide-scrollbar relative isolate flex h-full min-w-0 flex-1 scroll-px-1 items-center overflow-x-auto overflow-y-hidden [contain:layout_paint]";
  const scrollContainerStyle: CSSProperties = {
    scrollPaddingInlineEnd: `${stickyAfterWidth ?? 0}px`,
  };
  const startFadeClassName = clsx(
    "sticky start-0 z-10 h-full w-0 after:absolute transition-opacity after:pointer-events-none duration-100 after:start-0 after:top-0 after:bottom-0 after:w-10 after:bg-linear-to-l after:from-transparent after:to-token-main-surface-primary after:content-['']",
    isStartVisible ? "opacity-0" : "opacity-100",
  );
  const tabListClassName = clsx("relative flex", isDragging ? "z-20" : "z-0");
  const endFadeClassName = clsx(
    "sticky z-10 h-full w-0 after:absolute transition-opacity duration-100 after:pointer-events-none after:end-0 after:inset-y-0 after:w-10 after:bg-linear-to-r after:from-transparent after:to-token-main-surface-primary after:content-['']",
    isEndVisible ? "opacity-0" : "opacity-100",
  );

  const tabItems = tabs.map((tab) => {
    const isActive = activeTabId === tab.tabId;
    const index = tabIds.indexOf(tab.tabId);
    const showTrailingSeparator =
      index < tabIds.length - 1 &&
      !isActive &&
      !isSeparatorAdjacentToActive(index, activeIndex);
    return (
      <SortableAppShellTab
        key={tab.tabId}
        controller={controller}
        disabled={!workspaceReady && tab.requiresWorkspaceReady !== false}
        isActive={isActive}
        separatorIndex={index}
        showTrailingSeparator={showTrailingSeparator}
        tab={tab}
      />
    );
  });

  return (
    <div className={stripClassName}>
      {before != null && (
        <div className="my-auto flex shrink-0 items-center" role="presentation">
          {before}
        </div>
      )}
      <div
        ref={setScrollContainerRef}
        data-app-shell-tab-strip-controller={controller.panelId}
        className={scrollContainerClassName}
        style={scrollContainerStyle}
      >
        <div aria-hidden className={startFadeClassName} />
        <IntersectionSentinel
          onVisibleChange={setStartVisible}
          root={scrollRoot}
        />
        <SortableContext
          items={dndIds}
          strategy={horizontalListSortingStrategy}
        >
          <div role="tablist" className={tabListClassName} style={{ gap: 3 }}>
            {tabItems}
          </div>
        </SortableContext>
        <IntersectionSentinel
          onVisibleChange={setEndVisible}
          root={scrollRoot}
          rootMargin={endRootMargin}
        />
        <div
          aria-hidden
          style={{ right: stickyAfterWidth ?? 0 }}
          className={endFadeClassName}
        />
        {afterSticky != null && (
          <div
            ref={stickyAfterRef}
            className={clsx(
              "sticky right-0 shrink-0 bg-token-main-surface-primary",
              isDragging ? "pointer-events-none z-0" : "z-10",
            )}
          >
            {afterSticky}
          </div>
        )}
      </div>
      {after != null && (
        <div className="my-auto flex shrink-0 items-center" role="presentation">
          {after}
        </div>
      )}
    </div>
  );
}
