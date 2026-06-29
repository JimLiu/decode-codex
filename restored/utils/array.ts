// Restored from ref/webview/assets/array-Q5SdTH7L.js
// Converts array-like and iterable values into an array-compatible value.

export function array<T>(
  value: ArrayLike<T> | Iterable<T>,
): ArrayLike<T> | T[] {
  return typeof value === "object" && value !== null && "length" in value
    ? value
    : Array.from(value);
}
