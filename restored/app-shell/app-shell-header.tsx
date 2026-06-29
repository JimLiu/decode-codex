// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Fixed app-shell header chrome: lays out start/center/end action entries across
// draggable regions aligned to the side panels, renders an optional context-menu
// surface, and measures each slot so its reserved width tracks the content.
import type { ReactNode } from "react";
import clsx from "clsx";
import {
  appShellHeaderActionEntriesSignal,
  appShellHeaderContextMenuItemsSignal,
  appShellHeaderContextMenuSurfaceSignal,
  appShellHeaderEndEntriesSignal,
  appShellHeaderStartEntriesSignal,
  ContextMenu,
  createMotionValue,
  measureElementSize,
  motion as Motion,
  motionTemplate,
  rightPanelMaximizedSignal,
  useAppShellLayout,
  useResizeObserverRef,
  useSignalValue,
  type MotionValue,
} from "../boundaries/onboarding-commons-externals.facade";

const HEADER_INTERACTIVE_CHILDREN_CLASS =
  "[&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto";

interface HeaderEntry {
  actionId: string;
  node: ReactNode;
  align: "start" | "center" | "end";
}

function isStartEntry(entry: HeaderEntry): boolean {
  return entry.align === "start";
}

function isCenterEntry(entry: HeaderEntry): boolean {
  return entry.align === "center";
}

function isEndEntry(entry: HeaderEntry): boolean {
  return entry.align === "end";
}

function StartEntry({ actionId, node }: HeaderEntry) {
  return (
    <div
      key={actionId}
      className="no-drag pointer-events-auto flex shrink-0 items-center"
    >
      {node}
    </div>
  );
}

function CenterEntry({ actionId, node }: HeaderEntry) {
  return (
    <div
      key={actionId}
      className="no-drag pointer-events-auto flex shrink-0 items-center"
    >
      {node}
    </div>
  );
}

function EndEntry({ actionId, node }: HeaderEntry, index: number) {
  return (
    <div
      key={actionId}
      className={clsx(
        "no-drag pointer-events-auto flex shrink-0 items-center",
        index === 0 && "ms-auto",
      )}
    >
      {node}
    </div>
  );
}

interface HeaderEntriesProps {
  entries: HeaderEntry[];
  fillSlot?: boolean;
}

function HeaderEntries({ entries, fillSlot = false }: HeaderEntriesProps) {
  const startEntries = entries.filter(isStartEntry);
  const centerEntries = entries.filter(isCenterEntry);
  const endEntries = entries.filter(isEndEntry);
  const containerClassName = clsx(
    "inline-flex h-full items-center gap-1.5",
    fillSlot
      ? "pointer-events-none w-full"
      : "no-drag pointer-events-auto w-auto",
  );
  return (
    <div className={containerClassName}>
      {startEntries.map(StartEntry)}
      {centerEntries.length > 0 ? (
        <div className="mx-auto flex shrink-0 items-center gap-1.5">
          {centerEntries.map(CenterEntry)}
        </div>
      ) : null}
      {endEntries.map(EndEntry)}
    </div>
  );
}

interface HeaderSlotProps {
  entries: HeaderEntry[];
  fitWidth: MotionValue<number>;
  side: "start" | "end";
  slotWidth: MotionValue<number>;
}

function HeaderSlot({ entries, fitWidth, side, slotWidth }: HeaderSlotProps) {
  const hasEndEntry = entries.some(isEndEntry);
  const paddingClassName = clsx({
    "ps-[max(var(--spacing-token-safe-header-left),0.5rem)]": side === "start",
    "pe-2": (side === "start" && hasEndEntry) || side === "end",
  });
  const measureRef = useResizeObserverRef((element: Element) => {
    const { width } = measureElementSize(element);
    fitWidth.set(width);
  });
  return (
    <>
      <div
        aria-hidden
        className={clsx(
          "invisible pointer-events-none fixed top-0 left-0 min-w-max [&_*]:![view-transition-name:none]",
          !!entries.length && paddingClassName,
        )}
        ref={measureRef}
      >
        <HeaderEntries entries={entries} />
      </div>
      <Motion.div
        data-test-id="header-shell-slot"
        className={clsx(
          "pointer-events-none relative h-full shrink-0 [container-type:inline-size]",
          !!entries.length && paddingClassName,
        )}
        style={{ width: slotWidth, minWidth: motionTemplate`${fitWidth}px` }}
      >
        <HeaderEntries entries={entries} fillSlot />
      </Motion.div>
    </>
  );
}

export interface AppShellHeaderProps {
  isHeaderEdgeScroll: boolean;
  isApplicationMenuBarEnabled: boolean;
}

export function AppShellHeader({
  isHeaderEdgeScroll,
  isApplicationMenuBarEnabled,
}: AppShellHeaderProps) {
  const {
    headerLeftWidth,
    headerRightWidth,
    leftPanelAnimatedWidth,
    rightPanelAnimatedWidth,
  } = useAppShellLayout();
  const collapsedSlotWidth = createMotionValue(0);
  const leftPanelWidthTemplate = motionTemplate`${leftPanelAnimatedWidth}px`;
  const rightPanelWidthTemplate = motionTemplate`${rightPanelAnimatedWidth}px`;
  const contextMenuSurface = useSignalValue<ReactNode>(
    appShellHeaderContextMenuSurfaceSignal,
  );
  const actionEntries = useSignalValue<HeaderEntry[]>(
    appShellHeaderActionEntriesSignal,
  );
  const contextMenuItems = useSignalValue(appShellHeaderContextMenuItemsSignal);
  const startSlotEntries = useSignalValue<HeaderEntry[]>(
    appShellHeaderStartEntriesSignal,
  );
  const endSlotEntries = useSignalValue<HeaderEntry[]>(
    appShellHeaderEndEntriesSignal,
  );
  const isRightPanelMaximized = useSignalValue<boolean>(
    rightPanelMaximizedSignal,
  );

  const startActionEntries = actionEntries.filter(isStartEntry);
  const centerActionEntries = actionEntries.filter(isCenterEntry);
  const endActionEntries = actionEntries.filter(isEndEntry);
  const hasStartActions = startActionEntries.length > 0;
  const hasCenterActions = centerActionEntries.length > 0;
  const hasEndActions = endActionEntries.length > 0;
  const hasEndSlotEntries = endSlotEntries.length > 0;

  return (
    <ContextMenu items={contextMenuItems}>
      <Motion.header
        data-app-shell-header-edge-scroll={isHeaderEdgeScroll}
        className={clsx(
          "app-header-tint draggable pointer-events-none fixed z-30 flex h-toolbar min-w-0 items-center",
          isApplicationMenuBarEnabled ? "right-0" : "inset-x-0",
          isApplicationMenuBarEnabled ? "top-toolbar-sm" : "top-0",
        )}
        style={
          isApplicationMenuBarEnabled ? { left: leftPanelWidthTemplate } : {}
        }
      >
        <HeaderSlot
          entries={startSlotEntries}
          fitWidth={headerLeftWidth}
          slotWidth={
            isApplicationMenuBarEnabled
              ? collapsedSlotWidth
              : leftPanelAnimatedWidth
          }
          side="start"
        />
        <div
          aria-hidden={isRightPanelMaximized}
          data-testid="app-shell-header-context-menu-surface"
          className={clsx(
            "pointer-events-none relative ms-4 flex h-full min-w-0 flex-1 isolate items-center gap-1.5 overflow-hidden [contain:layout_paint]",
            isRightPanelMaximized && "invisible",
            hasEndSlotEntries ? "pe-1.5" : "pe-2",
          )}
        >
          {contextMenuSurface != null && (
            <div
              className={clsx(
                "pointer-events-none w-full min-w-0 flex-1",
                HEADER_INTERACTIVE_CHILDREN_CLASS,
              )}
            >
              {contextMenuSurface}
            </div>
          )}
          {hasStartActions && (
            <div className="flex shrink-0 items-center gap-1.5">
              {startActionEntries.map(({ actionId, node }) => (
                <div
                  key={actionId}
                  className="no-drag pointer-events-auto flex shrink-0 items-center"
                >
                  {node}
                </div>
              ))}
            </div>
          )}
          {hasEndActions && (
            <div className="ms-auto flex shrink-0 items-center gap-1.5">
              {endActionEntries.map(({ actionId, node }) => (
                <div
                  key={actionId}
                  className="no-drag pointer-events-auto flex shrink-0 items-center"
                >
                  {node}
                </div>
              ))}
            </div>
          )}
        </div>
        {hasCenterActions ? (
          <div className="pointer-events-none fixed inset-x-0 top-[inherit] flex h-toolbar">
            <Motion.div
              aria-hidden
              className="h-full shrink-0"
              style={{ width: leftPanelAnimatedWidth }}
            />
            <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
              {centerActionEntries.map(({ actionId, node }) => (
                <div
                  key={actionId}
                  className="no-drag pointer-events-auto flex shrink-0 items-center"
                >
                  {node}
                </div>
              ))}
            </div>
            <Motion.div
              aria-hidden
              className="h-full shrink-0"
              style={{ width: rightPanelAnimatedWidth }}
            />
          </div>
        ) : null}
        <HeaderSlot
          entries={endSlotEntries}
          fitWidth={headerRightWidth}
          slotWidth={rightPanelWidthTemplate}
          side="end"
        />
      </Motion.header>
    </ContextMenu>
  );
}
