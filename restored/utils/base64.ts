// Restored from ref/webview/assets/base64-B03SNoD9.js
// base64-B03SNoD9 chunk restored from the Codex webview bundle.
export function decodeBase64Text(encoded: string): string {
  return new TextDecoder().decode(decodeBase64Bytes(encoded));
}

export function encodeBase64Bytes(bytes: Uint8Array): string {
  if ("toBase64" in bytes && typeof bytes.toBase64 === "function") {
    return bytes.toBase64();
  }
  let binary = "";
  for (let index = 0; index < bytes.byteLength; index += 32768) {
    binary += String.fromCharCode(...bytes.subarray(index, index + 32768));
  }
  return btoa(binary);
}

export function encodeBase64Text(value: string): string {
  return encodeBase64Bytes(new TextEncoder().encode(value));
}

export function decodeBase64Bytes(encoded: string): Uint8Array {
  const binary = atob(encoded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}
