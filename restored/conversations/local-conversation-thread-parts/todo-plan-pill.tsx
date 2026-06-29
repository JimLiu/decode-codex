// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compact and expanded renderings of the model's to-do plan shown above the composer.

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import { PlanProgressIcon } from "../../icons/plan-progress-icon";
import {
  activityDisclosureTransition,
  ChevronDownIcon,
  ChevronUpIcon,
  DonutProgress,
  motion,
  PlanStepCompletedIcon,
  PlanStepInactiveIcon,
  PlanStepPendingIcon,
  PlanStepSpinnerIcon,
  sumBy,
  Tooltip,
  useDisclosureContentHeight,
} from "../../boundaries/onboarding-commons-externals.facade";

export type PlanStepStatus = "pending" | "in_progress" | "completed";

export interface PlanStep {
  step: string;
  status: PlanStepStatus;
}

export interface TodoPlanItem {
  plan: PlanStep[];
}

function isCompletedAsNumber(step: PlanStep): number {
  return step.status === "completed" ? 1 : 0;
}

function isNotCompleted(step: PlanStep): boolean {
  return step.status !== "completed";
}

function isInProgress(step: PlanStep): boolean {
  return step.status === "in_progress";
}

function negate(value: boolean): boolean {
  return !value;
}

export interface PlanPillBarProps {
  children: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
  expandedContent?: ReactNode;
  backgroundColorClassName?: string;
}

export function PlanPillBar({
  children,
  action,
  onClick,
  expandedContent,
  backgroundColorClassName,
}: PlanPillBarProps) {
  const interactionClassName = onClick && "cursor-interaction";
  const containerClassName = classNames(
    "bg-token-input-background/70 text-token-foreground border-token-border/80 relative overflow-clip border-x border-t backdrop-blur-sm transition-colors first:rounded-t-2xl",
    interactionClassName,
    backgroundColorClassName,
  );
  return (
    <div className={containerClassName} onClick={onClick}>
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between gap-1.5 py-1.5 pr-2 pl-3 text-sm font-normal">
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            {children}
          </div>
          <div className="flex min-w-fit shrink-0 items-center gap-1.5 select-none sm:ml-auto">
            {action}
          </div>
        </div>
        {expandedContent}
      </div>
    </div>
  );
}

export interface TodoPlanWidgetProps {
  donutAnimateOnMountDelayMs?: number;
  item: TodoPlanItem;
  isComplete?: boolean;
  tooltipPortalContainer?: HTMLElement | null;
}

export function TodoPlanWidget({
  donutAnimateOnMountDelayMs = 0,
  item,
  isComplete = false,
  tooltipPortalContainer,
}: TodoPlanWidgetProps) {
  return (
    <TodoPlanPill
      donutAnimateOnMountDelayMs={donutAnimateOnMountDelayMs}
      item={item}
      isComplete={isComplete}
      tooltipPortalContainer={tooltipPortalContainer}
    />
  );
}

export function TodoPlanPill({
  donutAnimateOnMountDelayMs,
  item,
  isComplete,
  tooltipPortalContainer,
}: Required<Omit<TodoPlanWidgetProps, "tooltipPortalContainer">> & {
  tooltipPortalContainer?: HTMLElement | null;
}) {
  const inProgressIndex = item.plan.findIndex(isInProgress);
  const firstIncompleteIndex = item.plan.findIndex(isNotCompleted);
  const currentIndex =
    inProgressIndex >= 0
      ? inProgressIndex
      : firstIncompleteIndex >= 0
        ? firstIncompleteIndex
        : item.plan.length - 1;

  if (currentIndex < 0) {
    return <div className="size-1 rounded-full bg-token-charts-blue" />;
  }

  const completedCount = sumBy(item.plan, isCompletedAsNumber);
  const percent = isComplete ? 100 : (completedCount / item.plan.length) * 100;
  const stepNumber = currentIndex + 1;

  const pillBody = (
    <span className="inline-flex max-w-full min-w-0 cursor-interaction hover:text-token-foreground">
      <span className="text-size-chat flex max-w-full min-w-0 items-center gap-1.5 text-token-text-secondary">
        <DonutProgress
          animateOnMount={true}
          animateOnMountDelayMs={donutAnimateOnMountDelayMs}
          percent={percent}
          className="text-token-charts-blue"
        />
        <span className="whitespace-nowrap tabular-nums">
          <FormattedMessage
            id="codex.todoPlan.pillProgress"
            defaultMessage="Step {stepNumber} / {stepCount}"
            description="Compact step count shown in the in-progress plan pill above the composer"
            values={{ stepNumber, stepCount: item.plan.length }}
          />
        </span>
      </span>
    </span>
  );

  return (
    <Tooltip
      delayDuration={0}
      interactive={true}
      portalContainer={tooltipPortalContainer}
      side="top"
      sideOffset={8}
      variant="rich"
      tooltipContent={<TodoPlanTooltip item={item} />}
      tooltipMaxWidth="min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))"
    >
      {pillBody}
    </Tooltip>
  );
}

export function TodoPlanTooltip({ item }: { item: TodoPlanItem }) {
  return (
    <div className="flex max-h-[min(var(--radix-tooltip-content-available-height),calc(100vh-16px))] min-h-0 max-w-80 flex-1 flex-col overflow-hidden rounded-xl">
      <div className="vertical-scroll-fade-mask flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2 py-2 [--edge-fade-distance:1rem]">
        {item.plan.map((step, index) => (
          <TodoPlanTooltipStep key={`${step.step}:${index}`} step={step} />
        ))}
      </div>
    </div>
  );
}

function TodoPlanTooltipStep({ step }: { step: PlanStep }) {
  return (
    <div className="flex max-w-80 min-w-0 items-start gap-2">
      <PlanStepStatusIcon isComplete={false} status={step.status} />
      <span
        className={classNames(
          "text-size-chat max-w-72 min-w-0 break-words leading-4",
          step.status === "completed"
            ? "text-token-text-tertiary"
            : "text-token-text-secondary",
        )}
      >
        {step.step}
      </span>
    </div>
  );
}

export interface TodoPlanListProps {
  item: TodoPlanItem;
  isComplete: boolean;
}

export function TodoPlanList({ item, isComplete }: TodoPlanListProps) {
  const intl = useIntl();
  const [isExpanded, setIsExpanded] = useState(true);
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();
  const inProgressRef = useRef<HTMLDivElement>(null);

  const completedCount = sumBy(item.plan, isCompletedAsNumber);
  const totalCount = item.plan.length;
  const inProgressIndex = item.plan.findIndex(isInProgress);
  const scrollTargetIndex =
    completedCount === totalCount ? totalCount - 1 : inProgressIndex;

  useEffect(() => {
    const element = inProgressRef.current;
    if (scrollTargetIndex < 0 || !element) return;
    element.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [scrollTargetIndex]);

  const contentHeight = isExpanded ? elementHeightPx : 0;
  const toggle = () => setIsExpanded(negate);

  const toggleButton = (
    <button
      type="button"
      className="text-token-input-placeholder-foreground hover:bg-transparent hover:text-token-foreground focus-visible:outline-none"
    >
      {isExpanded ? (
        <ChevronUpIcon className="icon-2xs" />
      ) : (
        <ChevronDownIcon className="icon-2xs" />
      )}
    </button>
  );

  const steps = item.plan.map((step, index) => (
    <div
      key={index}
      ref={index === inProgressIndex ? inProgressRef : null}
      id={`plan-item-${index}`}
      className="flex items-start gap-2"
    >
      <div className="flex flex-shrink-0 items-start gap-0.5">
        <PlanStepStatusIcon isComplete={isComplete} status={step.status} />
        <span className="text-size-chat leading-4">
          {intl.formatMessage(
            {
              id: "codex.todoPlan.stepIndexPrefix",
              defaultMessage: "{index}.",
              description:
                "Prefix numbering for a plan step, including a trailing period",
            },
            { index: index + 1 },
          )}
        </span>
      </div>
      <span
        className={classNames(
          "text-size-chat flex-1 leading-4",
          step.status === "completed" && "line-through",
        )}
      >
        {step.step}
      </span>
    </div>
  ));

  const expandedContent = (
    <motion.div
      initial={false}
      animate={{ height: contentHeight, opacity: isExpanded ? 1 : 0 }}
      transition={activityDisclosureTransition}
      className={classNames(
        isExpanded ? "overflow-visible" : "overflow-hidden",
      )}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
    >
      <div
        ref={isExpanded ? elementRef : null}
        className="flex flex-col gap-2 bg-token-input-background/70 p-2 backdrop-blur-sm"
      >
        <div className="vertical-scroll-fade-mask max-h-40 space-y-2 overflow-y-auto [--edge-fade-distance:2rem]">
          {steps}
        </div>
      </div>
    </motion.div>
  );

  const completionIcon = (
    <span
      aria-hidden={isComplete}
      className={classNames(
        "flex shrink-0 items-center justify-center overflow-hidden transition-[margin-inline-end,opacity,transform,width] duration-150 ease-out",
        isComplete
          ? "me-0 w-0 scale-90 opacity-0"
          : "me-1 w-4 scale-100 opacity-100",
      )}
    >
      <PlanProgressIcon className="icon-xs text-token-foreground" />
    </span>
  );

  const summary = (
    <div className="flex min-w-0 items-center">
      <div className="text-size-chat flex min-w-0 items-center">
        {completionIcon}
        <span className="min-w-0 truncate text-token-input-placeholder-foreground">
          <FormattedMessage
            id="localConversationPage.planItemsCompleted"
            defaultMessage="{completedItems} out of {totalItems, plural, one {# task completed} other {# tasks completed}}"
            description="Title for a plan that the model generates font-medium"
            values={{ completedItems: completedCount, totalItems: totalCount }}
          />
        </span>
      </div>
    </div>
  );

  return (
    <PlanPillBar
      onClick={toggle}
      action={toggleButton}
      expandedContent={expandedContent}
    >
      {summary}
    </PlanPillBar>
  );
}

export interface PlanStepStatusIconProps {
  status: PlanStepStatus;
  isComplete: boolean;
}

export function PlanStepStatusIcon({
  status,
  isComplete,
}: PlanStepStatusIconProps) {
  switch (status) {
    case "pending":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          {isComplete ? (
            <PlanStepInactiveIcon className="icon-xs block shrink-0" />
          ) : (
            <PlanStepPendingIcon className="icon-xs block shrink-0" />
          )}
        </div>
      );
    case "in_progress":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          {isComplete ? (
            <PlanStepInactiveIcon className="icon-xs block shrink-0" />
          ) : (
            <PlanStepSpinnerIcon className="icon-xs" />
          )}
        </div>
      );
    case "completed":
      return (
        <div className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
          <PlanStepCompletedIcon
            className={classNames(
              "icon-xs block shrink-0",
              "text-token-text-tertiary",
            )}
          />
        </div>
      );
  }
}
