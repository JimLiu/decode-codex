// Restored from ref/webview/assets/app-shell-ref-DW6qz7GS.js
// app-shell-ref-DW6qz7GS chunk restored from the Codex webview bundle.
import React from "react";
export type AppShellElement = HTMLElement | null;
export const appShellRefContext = React.createContext<
  React.MutableRefObject<AppShellElement>
>({
  current: null,
});
export const appShellElementContext =
  React.createContext<AppShellElement>(null);
