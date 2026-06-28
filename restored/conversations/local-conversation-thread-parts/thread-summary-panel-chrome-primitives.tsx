// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Layout primitives for the local conversation summary-panel chrome.
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { once } from "../../runtime/commonjs-interop";
import {
  BackgroundTerminalIcon,
  initBackgroundTerminalIconChunk,
} from "../../app-shell/thread-background-processes";
import { Button } from "../../ui/button";
import { Tooltip } from "../../ui/tooltip-b";
import { useReducedMotion } from "../../utils/use-reduced-motion";

export type ThreadSummaryPanelRootProps = {
  children: ReactNode;
  shouldHideInlineImmediately?: boolean;
  shouldShow: boolean;
};

export function ThreadSummaryPanelRoot({
  children,
  shouldHideInlineImmediately,
  shouldShow,
}: ThreadSummaryPanelRootProps) {
  let animationsDisabled = useReducedMotion(),
    invisibleClassName = shouldHideInlineImmediately && "invisible",
    motionContainerClassName = clsx(
      "pointer-events-none pe-4 max-h-full min-h-0 origin-top-right",
      invisibleClassName,
    ),
    targetOpacity = shouldShow ? 1 : 0,
    targetTranslateX = shouldShow ? 0 : "100%",
    targetScale = shouldShow ? 1 : 0.8,
    animateState = {
      opacity: targetOpacity,
      translateX: targetTranslateX,
      scale: targetScale,
    },
    transitionConfig =
      shouldHideInlineImmediately || animationsDisabled
        ? {
            duration: 0,
          }
        : {
            type: "spring",
            duration: 0.3,
            bounce: 0.01,
          },
    pipObstacleId = shouldShow ? "thread-summary-panel" : undefined,
    pointerEventsClassName = shouldShow
      ? "pointer-events-auto"
      : "pointer-events-none",
    panelClassName = clsx(
      "flex max-h-full min-h-0 flex-col",
      pointerEventsClassName,
    ),
    panelStyle = {
      width: 300,
    },
    panelBody = (
      <div
        data-pip-obstacle={pipObstacleId}
        className={panelClassName}
        style={panelStyle}
      >
        {children}
      </div>
    );

  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        <motion.div
          initial={false}
          className={motionContainerClassName}
          animate={animateState}
          transition={transitionConfig}
        >
          {panelBody}
        </motion.div>
      </div>
    </div>
  );
}

export type ThreadSummaryPanelPopoverContentProps = {
  children: ReactNode;
};

export function ThreadSummaryPanelPopoverContent({
  children,
}: ThreadSummaryPanelPopoverContentProps) {
  let popoverStyle = {
    width: 300,
  };
  return (
    <div
      className="flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col"
      style={popoverStyle}
    >
      {children}
    </div>
  );
}

export type ThreadSummaryPanelContentProps = {
  children: ReactNode;
};

export function ThreadSummaryPanelContent({
  children,
}: ThreadSummaryPanelContentProps) {
  return (
    <div className="relative flex max-h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-token-dropdown-background pt-3 electron:elevation-prominent extension:border extension:border-token-border-default extension:shadow-md">
      <div className="flex h-fit max-h-full min-h-0 flex-col gap-3 overflow-y-auto pb-3">
        {children}
      </div>
    </div>
  );
}

type HeaderButtonBaseProps = Omit<
  ComponentProps<typeof Button>,
  "children" | "color" | "size" | "title" | "uniform"
>;

export type ThreadSummaryPanelHeaderButtonProps = HeaderButtonBaseProps & {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  pressed?: boolean;
  shortcut?: ReactNode;
};

export function ThreadSummaryPanelHeaderButton({
  label,
  onClick,
  pressed,
  shortcut,
  ...buttonProps
}: ThreadSummaryPanelHeaderButtonProps) {
  let buttonColor = pressed ? "secondary" : "ghost",
    iconNode = <BackgroundTerminalIcon className="icon-sm" />,
    buttonNode = (
      <Button
        size="toolbar"
        color={buttonColor}
        aria-label={label}
        aria-pressed={pressed}
        title={label}
        onClick={onClick}
        uniform={true}
        {...buttonProps}
      >
        {iconNode}
      </Button>
    );

  return (
    <Tooltip tooltipContent={label} shortcut={shortcut} delayOpen={true}>
      {buttonNode}
    </Tooltip>
  );
}

export type ThreadSummaryPanelSectionCountProps = {
  count: number;
};

export function ThreadSummaryPanelSectionCount({
  count,
}: ThreadSummaryPanelSectionCountProps) {
  if (count === 0) return null;
  return (
    <span className="text-base text-token-description-foreground opacity-50">
      {count}
    </span>
  );
}

export const initThreadSummaryPanelChromePrimitives = once(() => {
  initBackgroundTerminalIconChunk();
});
