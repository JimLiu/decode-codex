// Restored from ref/webview/assets/use-debounced-value-DhB_g6ub.js
// use-debounced-value-DhB_g6ub chunk restored from the Codex webview bundle.
import React from "react";
export function useDebouncedValue<TValue>(
  value: TValue,
  delayMs: number,
): TValue {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedValue(value), delayMs);
    return () => window.clearTimeout(timeout);
  }, [value, delayMs]);
  return debouncedValue;
}
