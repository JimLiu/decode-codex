// Restored from ref/webview/assets/keyboard-layout-map-Z1-mi1D4.js
// keyboard-layout-map-Z1-mi1D4 chunk restored from the Codex webview bundle.
const FALLBACK_KEY_BY_CODE = new Map([
  ["Backquote", "`"],
  ["Minus", "-"],
  ["Equal", "="],
  ["BracketLeft", "["],
  ["BracketRight", "]"],
  ["Backslash", "\\"],
  ["Semicolon", ";"],
  ["Quote", "'"],
  ["Comma", ","],
  ["Period", "."],
  ["Slash", "/"],
  ["Space", " "],
  ["NumpadMultiply", "*"],
  ["NumpadAdd", "+"],
  ["NumpadSubtract", "-"],
  ["NumpadDecimal", "."],
  ["NumpadDivide", "/"],
]);

let keyboardLayoutMap: Record<string, string> | null = null;

export function initKeyboardLayoutMapChunk(): void {}

export function setKeyboardLayoutMap(layoutMap: Record<string, string>): void {
  keyboardLayoutMap = layoutMap;
}

export function resolveKeyboardLayoutKey({
  altKey,
  code,
  key,
}: {
  altKey: boolean;
  code?: string | null;
  key: string;
}): string {
  return !altKey || code == null
    ? key
    : (keyboardLayoutMap?.[code] ?? fallbackKeyForCode(code) ?? key);
}

function fallbackKeyForCode(code: string): string | null {
  return /^Key[A-Z]$/.test(code)
    ? code.slice(3).toLowerCase()
    : /^Digit[0-9]$/.test(code)
      ? code.slice(5)
      : (FALLBACK_KEY_BY_CODE.get(code) ?? null);
}
