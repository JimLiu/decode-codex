// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
// Error-boundary fallback used by the Electron app shell root.
import { once } from "../runtime/commonjs-interop";

export function AppFallback() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <ErrorFallbackIcon className="icon-lg text-token-error-foreground" />
      <span>Oops, an error has occurred</span>
      <button
        className="border-token-border no-drag cursor-interaction rounded-full border bg-token-foreground px-2 py-0.5 text-sm leading-[18px] whitespace-nowrap text-token-dropdown-background select-none hover:bg-token-foreground/80 focus:outline-none"
        type="button"
        onClick={reloadWindow}
      >
        Try again
      </button>
    </div>
  );
}

function reloadWindow() {
  window.location.reload();
}

function ErrorFallbackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.25c.42 0 .81.23 1.02.6l7 12.25a1.2 1.2 0 0 1-1.04 1.8H3.02a1.2 1.2 0 0 1-1.04-1.8l7-12.25c.21-.37.6-.6 1.02-.6Zm0 4.25a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 1.5 0v-3.5A.75.75 0 0 0 10 6.5Zm0 7.25a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
      />
    </svg>
  );
}

export const initAppFallbackChunk = once(() => {});

export { AppFallback as Ln, initAppFallbackChunk as Rn };
