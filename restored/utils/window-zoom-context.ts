// Restored from ref/webview/assets/window-zoom-context-BgIKnR06.js
// window-zoom-context-BgIKnR06 chunk restored from the Codex webview bundle.
import React from "react";
export const windowZoomContext = React.createContext(1);
export function useWindowZoom(): number {
  return React.useContext(windowZoomContext);
}
