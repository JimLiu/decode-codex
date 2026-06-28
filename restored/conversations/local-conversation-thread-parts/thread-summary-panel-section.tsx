// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Accordion/dropdown section primitive for the local conversation summary panel.
import type { MouseEventHandler, ReactNode, Ref } from "react";
import { useEffect, useImperativeHandle } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { once } from "../../runtime/commonjs-interop";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import { localConversationRouteScope } from "../local-conversation-route-runtime";
import {
  createLocalConversationRouteScopedSignal,
  createPersistedScopedSignal,
  initThreadSummaryPanelSectionRuntime,
  threadSummaryPanelSectionTransition,
} from "./thread-summary-panel-runtime";
import { ChevronIcon } from "../../icons/chevron-icon";
import { DropdownItem, DropdownMenu } from "../../ui/dropdown";
import { useReducedMotion } from "../../utils/use-reduced-motion";

const THREAD_SUMMARY_PANEL_SECTION_AUTO_COLLAPSE_DELAY_MS = 30000;
const THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE_PREFIX =
  "thread-summary-panel-section-expanded-";
const DEFAULT_THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE = null;

const collapsedSectionMotionState = {
  height: 0,
  opacity: 0,
  marginTop: 0,
};
const expandedSectionMotionState = {
  height: "auto",
  opacity: 1,
  marginTop: 2,
};

type ThreadSummaryPanelSectionMode = "accordion" | "dropdown" | "headerless";
type ThreadSummaryPanelSectionOption = string;
type ThreadSummaryPanelSectionAfter =
  | ReactNode
  | ((state: { isExpanded: boolean }) => ReactNode);

export type ThreadSummaryPanelSectionHandle = {
  collapse: () => void;
  expand: () => void;
};

export type ThreadSummaryPanelSectionProps = {
  after?: ThreadSummaryPanelSectionAfter;
  autoCollapse?: boolean;
  children: ReactNode;
  defaultCollapsed?: boolean;
  mode?: ThreadSummaryPanelSectionMode;
  onChange?: (option: ThreadSummaryPanelSectionOption) => void;
  ref?: Ref<ThreadSummaryPanelSectionHandle>;
  sectionKey: string;
  sectionOptions?: readonly ThreadSummaryPanelSectionOption[];
  title?: ReactNode;
  titleSuffix?: ReactNode;
};

let threadSummaryPanelSectionExpandedState: unknown;
let threadSummaryPanelSectionAutoCollapseState: unknown;

export function ThreadSummaryPanelSection({
  after,
  autoCollapse,
  children,
  defaultCollapsed = false,
  mode = "accordion",
  onChange,
  ref,
  sectionKey,
  sectionOptions,
  title,
  titleSuffix,
}: ThreadSummaryPanelSectionProps) {
  initThreadSummaryPanelSectionChunk();

  let scope = useScope(localConversationRouteScope),
    autoCollapseState = useScopedValue(
      threadSummaryPanelSectionAutoCollapseState,
      sectionKey,
    ) as "pending" | "collapsed" | "canceled",
    persistedIsExpanded = useScopedValue(
      threadSummaryPanelSectionExpandedState,
      sectionKey,
    ) as boolean | null,
    shouldHandleAutoCollapse =
      autoCollapse != null && autoCollapseState !== "canceled",
    isExpanded =
      !(autoCollapse === true && autoCollapseState === "collapsed") &&
      (persistedIsExpanded ?? !defaultCollapsed),
    shouldUseReducedMotion = useReducedMotion(),
    setIsExpanded = (nextIsExpanded: boolean) => {
      scope.set(
        threadSummaryPanelSectionExpandedState,
        sectionKey,
        nextIsExpanded,
      );
    };

  let shouldRenderContent =
      mode === "headerless" || isExpanded || mode === "dropdown",
    staticContent = (
      <div className="relative z-0 mt-0.5 overflow-hidden">
        <div className="flex flex-col gap-0.5 px-4">{children}</div>
      </div>
    );

  useImperativeHandle(ref, () => ({
    collapse: () => setIsExpanded(false),
    expand: () => setIsExpanded(true),
  }));

  useEffect(() => {
    if (!shouldHandleAutoCollapse) return;
    if (!autoCollapse) {
      if (autoCollapseState === "collapsed") {
        scope.set(
          threadSummaryPanelSectionAutoCollapseState,
          sectionKey,
          "pending",
        );
      }
      return;
    }
    if (autoCollapseState !== "pending") return;
    let timeoutId = window.setTimeout(() => {
      scope.set(
        threadSummaryPanelSectionAutoCollapseState,
        sectionKey,
        "collapsed",
      );
    }, THREAD_SUMMARY_PANEL_SECTION_AUTO_COLLAPSE_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  }, [
    autoCollapse,
    autoCollapseState,
    shouldHandleAutoCollapse,
    scope,
    sectionKey,
  ]);

  let cancelAutoCollapse: MouseEventHandler<HTMLElement> | undefined =
    shouldHandleAutoCollapse
      ? () => {
          scope.set(
            threadSummaryPanelSectionAutoCollapseState,
            sectionKey,
            "canceled",
          );
        }
      : undefined;
  let sectionHeader =
    mode === "headerless" ? null : (
      <ThreadSummaryPanelSectionHeader
        after={
          typeof after === "function"
            ? after({
                isExpanded,
              })
            : after
        }
        sectionOptions={sectionOptions}
        mode={mode}
        isExpanded={isExpanded}
        onChange={onChange}
        onToggle={() => {
          mode !== "dropdown" && setIsExpanded(!isExpanded);
        }}
        shouldUseReducedMotion={shouldUseReducedMotion}
        titleSuffix={titleSuffix}
      >
        {title}
      </ThreadSummaryPanelSectionHeader>
    );
  let sectionContent = shouldUseReducedMotion ? (
    shouldRenderContent && staticContent
  ) : (
    <AnimatePresence initial={false}>
      {shouldRenderContent && (
        <motion.div
          key="content"
          initial={collapsedSectionMotionState}
          animate={expandedSectionMotionState}
          exit={collapsedSectionMotionState}
          transition={threadSummaryPanelSectionTransition}
          className="relative z-0 overflow-hidden"
        >
          <div className="flex flex-col gap-0.5 px-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      className="relative z-0 flex flex-col pb-3 after:absolute after:inset-x-4 after:bottom-0 after:h-[0.5px] after:bg-token-border-default after:content-[''] last:pb-0 last:after:hidden"
      onClick={cancelAutoCollapse}
    >
      {sectionHeader}
      {sectionContent}
    </section>
  );
}

type ThreadSummaryPanelSectionHeaderProps = {
  after?: ReactNode;
  children: ReactNode;
  isExpanded: boolean;
  mode: Exclude<ThreadSummaryPanelSectionMode, "headerless">;
  onChange?: (option: ThreadSummaryPanelSectionOption) => void;
  onToggle: () => void;
  sectionOptions?: readonly ThreadSummaryPanelSectionOption[];
  shouldUseReducedMotion: boolean;
  titleSuffix?: ReactNode;
};

function ThreadSummaryPanelSectionHeader({
  after,
  children,
  isExpanded,
  mode,
  onChange,
  onToggle,
  sectionOptions,
  shouldUseReducedMotion,
  titleSuffix,
}: ThreadSummaryPanelSectionHeaderProps) {
  let hasMultipleSectionOptions =
      sectionOptions != null && sectionOptions.length > 1,
    toggleHandler = mode === "accordion" ? onToggle : undefined,
    titleNode = <span className="truncate">{children}</span>;
  let collapsedTitleSuffix = isExpanded ? null : titleSuffix,
    chevronIcon = (mode === "accordion" || hasMultipleSectionOptions) && (
      <ChevronIcon
        aria-hidden="true"
        className={clsx(
          "icon-2xs shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100",
          !shouldUseReducedMotion && "transition-transform",
          isExpanded ? "opacity-0" : "opacity-100",
          isExpanded ? "rotate-0" : "-rotate-90",
        )}
      />
    );
  let toggleButton = (
    <button
      aria-expanded={isExpanded}
      className="group/section-toggle inline-flex min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-md py-0.5 pr-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={toggleHandler}
      type="button"
    >
      {titleNode}
      {collapsedTitleSuffix}
      {chevronIcon}
    </button>
  );
  let headerControl =
    mode === "dropdown" && hasMultipleSectionOptions ? (
      <DropdownMenu triggerButton={toggleButton}>
        {sectionOptions?.map((option) => (
          <DropdownItem key={option} onSelect={() => onChange?.(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    ) : (
      toggleButton
    );
  let afterNode =
    after == null ? null : <div className="flex min-w-0 flex-1">{after}</div>;
  return (
    <header className="sticky top-0 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 bg-token-dropdown-background ps-4 pe-2.5 pb-0.5 text-base text-token-text-tertiary">
      {headerControl}
      {afterNode}
    </header>
  );
}

export const initThreadSummaryPanelSectionChunk = once(() => {
  initThreadSummaryPanelSectionRuntime();
  threadSummaryPanelSectionExpandedState = createPersistedScopedSignal(
    (sectionKey: string) =>
      `${THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE_PREFIX}${sectionKey}`,
    DEFAULT_THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE,
  );
  threadSummaryPanelSectionAutoCollapseState =
    createLocalConversationRouteScopedSignal(() => "pending");
});
