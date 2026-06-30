// Restored from ref/webview/assets/gracefulDecodeURIComponent-LfJMBovP.js
// Decodes a URI component while preserving malformed input.

export function initGracefulDecodeURIComponentChunk(): void {}

export function gracefulDecodeURIComponent(value: string): string {
  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value;
  }
}
