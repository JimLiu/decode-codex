// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Detects whether the current document location (or its `initialRoute` query
// param) points at a Codex conversation page, used to decide between the
// in-app route and the host-window route when navigating to a thread.
import { matchesCodexPagePath } from "../boundaries/onboarding-commons-externals.facade";

export type CodexPageLocation = {
  pathname: string;
  initialRoute: string | null;
};

export function isCodexPageLocation({
  pathname,
  initialRoute,
}: CodexPageLocation): boolean {
  return matchesCodexPagePath(pathname) || matchesCodexPagePath(initialRoute);
}

export function isCurrentLocationCodexPage(): boolean {
  return isCodexPageLocation(readCodexPageLocation());
}

export function readCodexPageLocation(): CodexPageLocation {
  if (typeof window === "undefined") {
    return { pathname: "", initialRoute: null };
  }
  const url = new URL(window.location.href);
  return {
    pathname: url.pathname,
    initialRoute: url.searchParams.get("initialRoute"),
  };
}
