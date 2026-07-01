// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Lodash object helpers inlined into the current app-main aggregator.
export function lodashGetPrototypeOf(value: object): object | null {
  return Object.getPrototypeOf(value) as object | null;
}

export function requireLodashGetPrototypeOf(): typeof lodashGetPrototypeOf {
  return lodashGetPrototypeOf;
}

function getObjectTag(value: unknown): string {
  return Object.prototype.toString.call(value);
}

export function lodashIsPlainObject(value: unknown): boolean {
  if (
    value === null ||
    (typeof value !== "object" && typeof value !== "function") ||
    getObjectTag(value) !== "[object Object]"
  ) {
    return false;
  }
  const prototype = lodashGetPrototypeOf(value as object);
  if (prototype === null) return true;

  const constructor =
    Object.prototype.hasOwnProperty.call(prototype, "constructor") &&
    (prototype as { constructor?: unknown }).constructor;
  return (
    typeof constructor === "function" &&
    constructor instanceof constructor &&
    Function.prototype.toString.call(constructor) ===
      Function.prototype.toString.call(Object)
  );
}

export function requireLodashIsPlainObject(): typeof lodashIsPlainObject {
  return lodashIsPlainObject;
}
