// Restored from ref/webview/assets/with-window-B85Yfj4i.js
// with-window-B85Yfj4i chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
export type WithWindowProps = {
  browser?: unknown;
  chromeExtension?: unknown;
  children?: ReactNode;
  extension?: unknown;
  electron?: unknown;
};
export function WithWindow({
  browser,
  children,
  chromeExtension,
  electron,
  extension,
}: WithWindowProps): JSX.Element | null {
  if (!browser && !chromeExtension && !electron && !extension) return null;
  return <>{children}</>;
}
