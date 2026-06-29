// Restored from ref/webview/assets/use-hotkey-window-dismiss-on-escape-Dpt2emga.js
import React from "react";
import { appServices } from "../boundaries/rpc.facade";

export function initHotkeyWindowDismissOnEscapeChunk(): void {}

function shouldDismissHotkeyWindow(event: KeyboardEvent) {
  return (
    event.key === "Escape" &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.shiftKey
  );
}
export function useHotkeyWindowDismissOnEscape(): void {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!shouldDismissHotkeyWindow(event)) return;
      event.preventDefault();
      event.stopPropagation();
      appServices.hotkeyWindowHotkeys?.dismiss();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
