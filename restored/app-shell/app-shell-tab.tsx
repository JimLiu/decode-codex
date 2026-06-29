// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Presentational app-shell tab button: renders the tab icon, (optionally
// truncated) title with an overflow tooltip, an optional trailing slot, and a
// close affordance for closable tabs.
import type { CSSProperties, PointerEvent, ReactNode, Ref } from "react";
import { useState } from "react";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import { Tooltip } from "../ui/tooltip-b";
import { TabCloseCircleIcon } from "../icons/app-shell-panel-icons";
import {
  useMeasuredWidth,
  useResizeObserverRef,
} from "../boundaries/onboarding-commons-externals.facade";

export const APP_SHELL_TAB_BACKGROUND =
  "color-mix(in srgb, var(--color-token-foreground) 5%, var(--color-token-main-surface-primary))";
export const APP_SHELL_TAB_TOOLTIP_MAX_WIDTH =
  "min(32rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))";
export const TAB_CLOSE_HOVER_WIDTH_THRESHOLD = 100;

export interface AppShellTabProps {
  activatorRef?: Ref<HTMLDivElement>;
  disabled?: boolean;
  tooltip?: ReactNode;
  highlightedIcon?: ReactNode;
  id: string;
  icon?: ReactNode;
  trailingContent?: ReactNode;
  title: string;
  isDragging?: boolean;
  isActive?: boolean;
  isClosable?: boolean;
  isHighlighted?: boolean;
  isLabel?: boolean;
  isPreview?: boolean;
  onActivate?: () => void;
  onClose?: () => void;
  onPointerDown?: (event: PointerEvent) => void;
  style?: CSSProperties;
  [key: string]: unknown;
}

function stopPointerPropagation(event: PointerEvent) {
  event.stopPropagation();
}

function preventCloseButtonActivation(event: PointerEvent) {
  event.preventDefault();
  event.stopPropagation();
}

export function AppShellTab(props: AppShellTabProps) {
  const {
    activatorRef,
    disabled = false,
    tooltip,
    highlightedIcon,
    id,
    icon,
    trailingContent,
    title,
    isDragging = false,
    isActive = false,
    isClosable = false,
    isHighlighted = false,
    isLabel = false,
    isPreview = false,
    onActivate,
    onClose,
    onPointerDown,
    style,
    ...rest
  } = props;
  const intl = useIntl();
  const [isTitleTruncated, setIsTitleTruncated] = useState(false);
  const [closeButtonRef, tabWidth] = useMeasuredWidth();
  const showCloseAffordance =
    isClosable &&
    (isActive ||
      (tabWidth != null && tabWidth >= TAB_CLOSE_HOVER_WIDTH_THRESHOLD));
  const isInteractive = !isLabel;
  const showHighlightedIcon = isHighlighted && highlightedIcon != null;
  const isActiveInteractiveTab = isInteractive && isActive;

  const titleRef = useResizeObserverRef(
    (_element: Element, target: HTMLElement) => {
      setIsTitleTruncated(target.scrollWidth > target.clientWidth);
    },
  );
  const titleClassName = clsx(
    "block w-full min-w-0 whitespace-nowrap",
    isPreview && "italic",
  );
  const titleNode = (
    <span ref={titleRef} className={titleClassName}>
      {title}
    </span>
  );

  const containerStyle: CSSProperties = {
    ...style,
    ["--app-shell-tab-background" as string]: APP_SHELL_TAB_BACKGROUND,
  };

  const handleContainerPointerDown = (event: PointerEvent) => {
    if (event.button !== 0 || event.ctrlKey) {
      event.stopPropagation();
      return;
    }
    onPointerDown?.(event);
  };

  const backgroundClassName = clsx(
    "pointer-events-none absolute inset-0 z-0 rounded-md",
    isInteractive && "group-hover/tab:bg-[var(--app-shell-tab-background)]",
    isInteractive &&
      (isActive || isDragging) &&
      "bg-[var(--app-shell-tab-background)]",
  );

  const buttonClassName = clsx(
    "no-drag relative flex flex-1 items-center gap-2 z-10 text-sm min-w-0",
    isClosable && trailingContent == null && "pe-2",
    isActive && "text-token-text-primary",
    !isActive && "text-token-text-secondary",
  );

  const handleButtonMouseDown = (event: React.MouseEvent) => {
    if (isClosable && event.button === 1) {
      event.preventDefault();
      event.stopPropagation();
      onClose?.();
      return;
    }
    onActivate?.();
  };

  const iconNode = (icon != null || showHighlightedIcon) && (
    <span
      aria-hidden="true"
      className="icon-xs relative flex shrink-0 items-center justify-center overflow-visible"
    >
      {icon != null && (
        <span
          className={clsx(
            "flex size-full items-center justify-center",
            showHighlightedIcon && "opacity-30",
          )}
        >
          {icon}
        </span>
      )}
      {showHighlightedIcon && (
        <span className="pointer-events-none absolute inset-0 z-10 flex size-full items-center justify-center">
          {highlightedIcon}
        </span>
      )}
    </span>
  );

  const titleWithTooltip = tooltip ? (
    <Tooltip
      tooltipContent={tooltip}
      disabled={isDragging}
      delayOpen
      side="bottom"
      tooltipMaxWidth={APP_SHELL_TAB_TOOLTIP_MAX_WIDTH}
    >
      {titleNode}
    </Tooltip>
  ) : (
    titleNode
  );

  const truncationFade = isTitleTruncated && (
    <span
      className={clsx(
        "pointer-events-none absolute inset-y-0 end-0 z-20 w-2 bg-linear-to-r from-transparent to-100%",
        isActiveInteractiveTab
          ? "to-[var(--app-shell-tab-background)]"
          : "to-token-main-surface-primary",
        isInteractive &&
          !isActive &&
          "group-hover/tab:to-[var(--app-shell-tab-background)]",
      )}
    />
  );

  const trailingNode = trailingContent != null && (
    <span
      className={clsx(
        "-ms-1.5 flex shrink-0 items-center",
        showCloseAffordance && "group-hover/tab:opacity-0",
      )}
    >
      {trailingContent}
    </span>
  );

  const closeButton = isClosable && (
    <button
      type="button"
      aria-label={intl.formatMessage(
        {
          id: "codex.tabs.closeNamed",
          defaultMessage: "Close {title} tab",
          description: "Accessible label for closing a named tab",
        },
        { title },
      )}
      className={clsx(
        "no-drag invisible absolute inset-y-0 end-1 z-30 flex cursor-interaction items-center pe-1 text-token-text-tertiary hover:text-token-text-primary",
        showCloseAffordance && "group-hover/tab:visible",
        trailingContent == null &&
          "before:pointer-events-none before:absolute before:inset-y-0 before:end-1 before:w-[26px] before:bg-linear-to-r before:from-transparent before:to-30% before:content-['']",
        trailingContent == null &&
          (isActive
            ? "before:to-[var(--app-shell-tab-background)]"
            : "before:to-token-main-surface-primary group-hover/tab:before:to-[var(--app-shell-tab-background)]"),
      )}
      onClick={onClose}
      onMouseDown={preventCloseButtonActivation}
      onPointerDown={stopPointerPropagation}
    >
      <TabCloseCircleIcon className="icon-xs relative" />
    </button>
  );

  return (
    <div
      ref={activatorRef}
      data-tab-id={id}
      className="group/tab relative flex h-7 max-w-39 shrink-0 items-center overflow-hidden rounded-lg bg-token-main-surface-primary px-2 py-1"
      style={containerStyle}
      {...rest}
      onPointerDown={handleContainerPointerDown}
    >
      <div className={backgroundClassName} />
      <button
        ref={closeButtonRef}
        disabled={disabled}
        type="button"
        role="tab"
        aria-selected={isActive}
        className={buttonClassName}
        onMouseDown={handleButtonMouseDown}
      >
        {iconNode}
        <span className="relative min-w-0 flex-1 overflow-hidden">
          {titleWithTooltip}
          {truncationFade}
        </span>
        {trailingNode}
      </button>
      {closeButton}
    </div>
  );
}
