// Restored from ref/webview/assets/use-media-query-_Pl2VYyH.js
// Also matches ref/webview/assets/use-media-query-CUpGkpzI.js.
// Media-query hook restored from the Codex webview bundle.
import React from "react";

export function initUseMediaQueryChunk(): void {
  // The bundled chunk used this export to initialize lazy runtime bindings.
  // The semantic module imports React eagerly, so no runtime work remains.
}

function getMediaQueryMatches(query: string): boolean {
  return typeof window !== "undefined" &&
    typeof window.matchMedia === "function"
    ? window.matchMedia(query).matches
    : false;
}
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(() =>
    getMediaQueryMatches(query),
  );
  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    )
      return;
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [query]);
  return matches;
}
