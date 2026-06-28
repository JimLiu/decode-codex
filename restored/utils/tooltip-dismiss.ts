// Restored from ref/webview/assets/tooltip-dismiss-BS2Xt99s.js
// tooltip-dismiss-BS2Xt99s chunk restored from the Codex webview bundle.
const TOOLTIP_DISMISS_EVENT = "codex:dismiss-tooltips";

export function dismissTooltips(): void {
  if (typeof window <= "u") {
    window.dispatchEvent(new Event(TOOLTIP_DISMISS_EVENT));
  }
}

export { TOOLTIP_DISMISS_EVENT };
