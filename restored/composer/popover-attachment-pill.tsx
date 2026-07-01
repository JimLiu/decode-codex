// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Attachment pill variant that opens a hover popover.

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { AttachmentPill } from "./attachment-pill";
import type { IconComponent } from "./attachment-pill-types";

const POPOVER_CLOSE_DELAY_MS = 100;

export interface PopoverAttachmentPillProps {
  Icon?: IconComponent;
  icon?: ReactNode;
  label: ReactNode;
  onRemove?: () => void;
  onRemoveAriaLabel?: string;
  popoverClassName?: string;
  popoverContent: ReactNode;
  popoverStyle?: CSSProperties;
}

function preventPopoverAutoFocus(event: Event) {
  event.preventDefault();
}

export function PopoverAttachmentPill({
  Icon,
  icon,
  label,
  onRemove,
  onRemoveAriaLabel,
  popoverClassName = "w-96 gap-2",
  popoverContent,
  popoverStyle,
}: PopoverAttachmentPillProps) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (closeTimeoutRef.current != null) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    },
    [],
  );

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current != null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };
  const openPopover = () => {
    cancelScheduledClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      setOpen(false);
    }, POPOVER_CLOSE_DELAY_MS);
  };

  const iconProps = Icon == null ? { icon } : { Icon };
  const labelNode = (
    <span className="flex max-w-full min-w-0 items-center gap-1">
      <span className="truncate">{label}</span>
    </span>
  );
  const trigger = (
    <div
      className="group relative inline-flex"
      onMouseEnter={openPopover}
      onMouseLeave={scheduleClose}
    >
      <PopoverTrigger asChild>
        <AttachmentPill
          {...iconProps}
          onRemove={onRemove}
          onRemoveAriaLabel={onRemoveAriaLabel}
        >
          {labelNode}
        </AttachmentPill>
      </PopoverTrigger>
    </div>
  );
  const content = (
    <PopoverContent
      align="start"
      side="top"
      sideOffset={4}
      className={popoverClassName}
      style={{
        maxHeight:
          "min(20rem, var(--radix-popover-content-available-height), calc(100vh - 16px))",
        ...popoverStyle,
      }}
      onMouseEnter={openPopover}
      onMouseLeave={scheduleClose}
      onOpenAutoFocus={preventPopoverAutoFocus}
    >
      {popoverContent}
    </PopoverContent>
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      {trigger}
      {content}
    </Popover>
  );
}

export function initPopoverAttachmentPillChunk(): void {}
