// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// markdown-to-search-text-D4gbAqkt chunk restored from the Codex webview bundle.
import type { PathSegment, PropertyPath } from "./types";
import { isSymbol, toStringValue } from "./values";
const MAX_MEMOIZED_PATHS = 500;
const MAX_SAFE_INTEGER = 9007199254740991;
const objectToString = Object.prototype.toString;
const pathCache = new Map<string, string[]>();
const deepPropertyPattern = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const plainPropertyPattern = /^\w*$/;
const propertyNamePattern =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const escapeCharacterPattern = /\\(\\)?/g;
function stringToPath(value: string) {
  const result: string[] = [];
  if (value.charCodeAt(0) === 46) result.push("");
  value.replace(propertyNamePattern, (match, number, quote, quotedValue) => {
    result.push(
      quote
        ? quotedValue.replace(escapeCharacterPattern, "$1")
        : number || match,
    );
    return "";
  });
  return result;
}
function memoizedStringToPath(value: string) {
  const cachedPath = pathCache.get(value);
  if (cachedPath != null) return cachedPath;
  if (pathCache.size === MAX_MEMOIZED_PATHS) pathCache.clear();
  const path = stringToPath(value);
  pathCache.set(value, path);
  return path;
}
function isKey(value: unknown, object?: unknown) {
  if (Array.isArray(value)) return false;
  const type = typeof value;
  return type === "number" ||
    type === "symbol" ||
    type === "boolean" ||
    value == null ||
    isSymbol(value)
    ? true
    : plainPropertyPattern.test(value as string) ||
        !deepPropertyPattern.test(value as string) ||
        (object != null && (value as string) in Object(object));
}
function castPath(value: PropertyPath | unknown, object?: unknown) {
  return Array.isArray(value)
    ? value
    : isKey(value, object)
      ? [value as PathSegment]
      : memoizedStringToPath(toStringValue(value));
}
function toKey(value: unknown) {
  if (typeof value === "string" || isSymbol(value)) return value;
  const result = `${value}`;
  return result === "0" && 1 / (value as number) === -Infinity ? "-0" : result;
}
function baseGet(object: unknown, path: PropertyPath | unknown) {
  const pathSegments = castPath(path, object);
  let index = 0;
  while (object != null && index < pathSegments.length) {
    object = (object as Record<PropertyKey, unknown>)[
      toKey(pathSegments[index])
    ];
    index += 1;
  }
  return index > 0 && index === pathSegments.length ? object : undefined;
}
function baseHas(object: unknown, key: PropertyKey) {
  return object != null && key in Object(object);
}
function isArguments(value: unknown) {
  return objectToString.call(value) === "[object Arguments]";
}
function isLength(value: unknown) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
function isIndex(value: unknown, length: number) {
  return (
    length > 0 &&
    (typeof value === "number" ||
      (typeof value !== "symbol" && /^(?:0|[1-9]\d*)$/.test(`${value}`))) &&
    (value as number) > -1 &&
    (value as number) % 1 === 0 &&
    (value as number) < length
  );
}
function hasPath(
  object: unknown,
  path: PropertyPath | unknown,
  hasFunc: (object: unknown, key: PropertyKey) => boolean,
) {
  const pathSegments = castPath(path, object);
  let index = -1;
  let result = false;
  let key: PropertyKey = "";
  while (++index < pathSegments.length) {
    key = toKey(pathSegments[index]);
    if (!(result = object != null && hasFunc(object, key))) break;
    object = (object as Record<PropertyKey, unknown>)[key];
  }
  if (result || ++index !== pathSegments.length) return result;
  const length =
    object == null
      ? 0
      : (
          object as {
            length?: number;
          }
        ).length;
  return (
    !!length &&
    isLength(length) &&
    isIndex(key, length) &&
    (Array.isArray(object) || isArguments(object))
  );
}
function hasIn(object: unknown, path: PropertyPath | unknown) {
  return object != null && hasPath(object, path, baseHas);
}
export { baseGet, castPath, hasIn, isKey, toKey };
