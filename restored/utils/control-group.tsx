// Restored from ref/webview/assets/control-group-g0j1uRO5.js
// Also matches ref/webview/assets/control-group-B8InwDgE.js.
// control-group-D6VRtZJR chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";

export function initControlGroupChunk(): void {}

export type ControlGroupProps = {
  children?: ReactNode;
  className?: string;
};
export function ControlGroup({
  children,
  className,
}: ControlGroupProps): JSX.Element {
  return (
    <div className={clsx("flex items-center gap-2", className)}>{children}</div>
  );
}
