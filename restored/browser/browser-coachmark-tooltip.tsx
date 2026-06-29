// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Coachmark tooltip wrapper: shows a dismissible coachmark bubble (title/badge/
// description) when open, otherwise falls back to a standard tooltip.
import type { ReactNode } from "react";
import { useState } from "react";
import clsx from "clsx";
import { Tooltip } from "../ui/tooltip-b";
import type { TooltipAlign, TooltipSide } from "../ui/tooltip-b/types";
import { Badge } from "../utils/badge";
import { Button } from "../ui/button";
import { XIcon } from "../icons/x-icon";

const COACHMARK_BUBBLE_CLASS_NAME =
  "relative max-w-64 !rounded-2xl !border-0 !bg-token-charts-blue px-4 py-3 !text-token-button-foreground shadow-lg dark:!text-token-foreground before:pointer-events-none before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rotate-45 before:rounded-[1px] before:!bg-token-charts-blue before:content-['']";
const COACHMARK_BADGE_CLASS_NAME =
  "!bg-token-dropdown-background px-1.5 py-0.5 text-xs font-bold leading-[13px] tracking-[0.06px] !text-token-charts-blue dark:!text-token-foreground";
const COACHMARK_DISMISS_BUTTON_CLASS_NAME =
  "-me-1 -mt-1 h-6 w-6 !rounded-md !p-0 !text-token-button-foreground hover:!bg-token-button-foreground/10 hover:!text-token-button-foreground dark:!text-token-foreground dark:hover:!bg-token-foreground/10 dark:hover:!text-token-foreground";

type CoachmarkTooltipProps = {
  align?: TooltipAlign;
  badge?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  dismissLabel?: string;
  fallbackShortcut?: ReactNode;
  fallbackTooltipContent?: ReactNode;
  onDismiss: () => void;
  open?: boolean;
  side?: TooltipSide;
  sideOffset?: number;
  title?: ReactNode;
  tooltipClassName?: string;
};

function CoachmarkTooltip({
  align,
  badge,
  children,
  description,
  disabled = false,
  dismissLabel,
  fallbackShortcut,
  fallbackTooltipContent,
  onDismiss,
  open,
  side,
  sideOffset,
  title,
  tooltipClassName,
}: CoachmarkTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasFallbackTooltip = fallbackTooltipContent != null;
  const isCoachmarkOpen = open === true;
  const tooltipContent = isCoachmarkOpen ? (
    <CoachmarkTooltipCard
      badge={badge}
      description={description}
      dismissLabel={dismissLabel}
      onDismiss={onDismiss}
      title={title}
    />
  ) : (
    (fallbackTooltipContent ?? "")
  );
  return (
    <Tooltip
      align={isCoachmarkOpen ? align : undefined}
      disabled={disabled}
      interactive={isCoachmarkOpen}
      onOpenChange={
        isCoachmarkOpen || !hasFallbackTooltip ? undefined : setIsHovered
      }
      open={isCoachmarkOpen || (hasFallbackTooltip && isHovered)}
      shortcut={isCoachmarkOpen ? undefined : fallbackShortcut}
      side={isCoachmarkOpen ? side : undefined}
      sideOffset={isCoachmarkOpen ? sideOffset : undefined}
      tooltipBodyClassName={isCoachmarkOpen ? "w-full" : undefined}
      tooltipClassName={
        isCoachmarkOpen
          ? clsx(COACHMARK_BUBBLE_CLASS_NAME, tooltipClassName)
          : undefined
      }
      tooltipContent={tooltipContent}
    >
      {children}
    </Tooltip>
  );
}

type CoachmarkTooltipCardProps = {
  badge?: ReactNode;
  description?: ReactNode;
  dismissLabel?: string;
  onDismiss: () => void;
  title?: ReactNode;
};

function CoachmarkTooltipCard({
  badge,
  description,
  dismissLabel,
  onDismiss,
  title,
}: CoachmarkTooltipCardProps) {
  const handleDismiss: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onDismiss();
  };
  return (
    <div className="flex w-full min-w-0 flex-col gap-2">
      <div className="flex items-start gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          {badge ? (
            <Badge className={COACHMARK_BADGE_CLASS_NAME}>{badge}</Badge>
          ) : null}
          <div className="truncate text-base leading-[18px] font-medium tracking-[-0.08px]">
            {title}
          </div>
        </div>
        <Button
          className={COACHMARK_DISMISS_BUTTON_CLASS_NAME}
          color="ghost"
          size="icon"
          aria-label={dismissLabel}
          onClick={handleDismiss}
        >
          <XIcon className="icon-xs" />
        </Button>
      </div>
      {description ? (
        <div className="pe-4 text-base leading-[18px] tracking-[-0.08px]">
          {description}
        </div>
      ) : null}
    </div>
  );
}

export { CoachmarkTooltip, CoachmarkTooltipCard };
