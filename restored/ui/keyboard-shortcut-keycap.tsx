// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
import type { ReactNode } from "react";
import clsx from "clsx";

export type KeyboardShortcutKeycapVariant = "default" | "button";

export type KeyboardShortcutKeycapProps = {
  className?: string;
  keysLabel: ReactNode;
  variant?: KeyboardShortcutKeycapVariant;
};

export function initKeyboardShortcutKeycap(): void {}

export function KeyboardShortcutKeycap({
  className,
  keysLabel,
  variant = "default",
}: KeyboardShortcutKeycapProps) {
  const variantClassName =
    variant === "button"
      ? "h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4"
      : "!px-1.5 !py-0.5 !leading-none";

  return (
    <kbd
      className={clsx(
        "inline-flex !rounded-md !border-0 !bg-current/10 !font-sans !text-xs !text-current !shadow-none",
        variantClassName,
        className,
      )}
    >
      {keysLabel}
    </kbd>
  );
}
