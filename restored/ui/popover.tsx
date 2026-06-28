// Restored from ref/webview/assets/popover-tkrnK9dz.js
// App Popover wrapper used across the Codex webview.
import clsx from "clsx";
import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  HTMLAttributes,
} from "react";
import { useWindowZoom } from "../utils/window-zoom-context";
import {
  Popover as RadixPopover,
  PopoverContent as RadixPopoverContent,
  PopoverPortal,
  PopoverTrigger as RadixPopoverTrigger,
} from "../vendor/radix-popover";
export type PopoverProps = ComponentPropsWithoutRef<typeof RadixPopover>;
export type PopoverTriggerProps = ComponentPropsWithoutRef<
  typeof RadixPopoverTrigger
>;
export type PopoverContentProps = ComponentPropsWithoutRef<
  typeof RadixPopoverContent
> & {
  disablePortal?: boolean;
  size?: "default" | "large";
  style?: CSSProperties;
  unstyled?: boolean;
};
export type PopoverTitleProps = HTMLAttributes<HTMLDivElement>;
export function initPopoverPrimitives(): void {}
export function Popover(props: PopoverProps) {
  return <RadixPopover data-slot="popover" {...props} />;
}
export function PopoverTrigger(props: PopoverTriggerProps) {
  return <RadixPopoverTrigger data-slot="popover-trigger" {...props} />;
}
export function PopoverContent({
  className,
  align = "start",
  sideOffset = 4,
  size = "default",
  style,
  disablePortal = false,
  unstyled = false,
  ...contentProps
}: PopoverContentProps) {
  const windowZoom = useWindowZoom();
  const zoom = windowZoom === 1 ? undefined : windowZoom;
  const content = (
    <RadixPopoverContent
      data-slot="popover-content"
      align={align}
      collisionPadding={6}
      sideOffset={sideOffset}
      className={clsx(
        !unstyled &&
          "bg-token-dropdown-background/90 text-token-foreground ring-token-border z-50 flex origin-[var(--radix-popover-content-transform-origin)] flex-col overflow-y-auto rounded-xl px-1 py-1 shadow-lg ring-[0.5px] backdrop-blur-sm outline-hidden",
        !unstyled && (size === "large" ? "w-96" : "w-72"),
        className,
      )}
      style={{
        zoom,
        maxWidth:
          "min(var(--radix-popover-content-available-width), calc(100vw - 16px))",
        maxHeight:
          "min(var(--radix-popover-content-available-height), calc(100vh - 16px))",
        ...style,
      }}
      {...contentProps}
    />
  );
  return disablePortal ? content : <PopoverPortal>{content}</PopoverPortal>;
}
export function PopoverTitle({ className, ...titleProps }: PopoverTitleProps) {
  return (
    <div
      data-slot="popover-title"
      className={clsx("font-medium", className)}
      {...titleProps}
    />
  );
}
