// Restored from ref/webview/assets/badge-DN8gIpAW.js
// badge-DN8gIpAW chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
export type BadgeProps = {
  children?: ReactNode;
  className?: string;
};
export function Badge({ children, className }: BadgeProps): JSX.Element {
  return (
    <span
      className={clsx(
        "bg-token-badge-background text-token-badge-foreground inline-flex items-center rounded-sm px-2 py-1 text-sm leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
