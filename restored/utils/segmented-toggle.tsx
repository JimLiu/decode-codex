// Restored from ref/webview/assets/segmented-toggle-WuxzI5uh.js
// Also matches ref/webview/assets/segmented-toggle-DYZLeHEX.js.

import React from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";

export function initSegmentedToggleChunk(): void {}

type SegmentedToggleOption = {
  id: string;
  label: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  tooltipContent?: React.ReactNode;
};
type SegmentedToggleProps = {
  options?: SegmentedToggleOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  size?: React.ComponentProps<typeof Button>["size"];
  className?: string;
  buttonClassName?: string;
  fullWidth?: boolean;
  uniform?: boolean;
  selectedColor?: React.ComponentProps<typeof Button>["color"];
  unselectedColor?: React.ComponentProps<typeof Button>["color"];
  ariaLabel?: string;
  ariaLabelledBy?: string;
};
export function SegmentedToggle({
  options = [],
  selectedId,
  onSelect,
  size = "default",
  className,
  buttonClassName,
  fullWidth = false,
  uniform,
  selectedColor = "secondary",
  unselectedColor = "ghost",
  ariaLabel,
  ariaLabelledBy,
}: SegmentedToggleProps) {
  const shouldUseUniformButtons =
    uniform ?? (size === "icon" && options.length > 2);
  return (
    <div
      className={clsx(
        fullWidth ? "flex w-full" : "inline-flex",
        "items-center gap-0.5",
        className,
      )}
      role="group"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {options.map((option) => {
        const selected = option.id === selectedId;
        const disabled = option.disabled ?? false;
        const button = (
          <Button
            key={option.id}
            color={selected ? selectedColor : unselectedColor}
            size={size}
            onClick={() => {
              if (!disabled) {
                onSelect(option.id);
              }
            }}
            aria-pressed={selected}
            uniform={shouldUseUniformButtons}
            aria-label={option.ariaLabel}
            disabled={disabled}
            className={clsx(
              fullWidth ? "flex-1 justify-center" : undefined,
              buttonClassName,
            )}
          >
            {option.label}
          </Button>
        );
        return option.tooltipContent ? (
          <Tooltip key={option.id} tooltipContent={option.tooltipContent}>
            {button}
          </Tooltip>
        ) : (
          button
        );
      })}
    </div>
  );
}
