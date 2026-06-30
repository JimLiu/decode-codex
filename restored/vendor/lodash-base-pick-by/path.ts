// Restored from ref/webview/assets/_basePickBy-X1_M8KZ0.js
// Number conversion and object path helpers for lodash basePickBy compatibility.

type AnyRecord = Record<PropertyKey, unknown>;
type PathSegment = string | number | symbol;
type PropertyPath = PathSegment | readonly PathSegment[];
type PickPredicate = (value: unknown, path: PropertyPath) => boolean;
type PathCustomizer = (
  currentValue: unknown,
  key: PathSegment,
  parent: AnyRecord,
) => unknown;

const whitespacePattern = /\s/;
const leadingWhitespacePattern = /^\s+/;
const binaryPattern = /^0b[01]+$/i;
const octalPattern = /^0o[0-7]+$/i;
const badHexPattern = /^[-+]0x[0-9a-f]+$/i;
const pathTokenPattern =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const escapeCharacterPattern = /\\(\\)?/g;
const hasOwn = Object.prototype.hasOwnProperty;

function trimmedEndIndex(value: string): number {
  let index = value.length;
  while (index-- && whitespacePattern.test(value.charAt(index))) {}
  return index;
}

function baseTrim(value: string): string {
  return value
    ? value
        .slice(0, trimmedEndIndex(value) + 1)
        .replace(leadingWhitespacePattern, "")
    : value;
}

function isObject(value: unknown): value is object {
  const valueType = typeof value;
  return value != null && (valueType === "object" || valueType === "function");
}

function isSymbol(value: unknown): value is symbol {
  return (
    typeof value === "symbol" ||
    (typeof value === "object" &&
      value !== null &&
      Object.prototype.toString.call(value) === "[object Symbol]")
  );
}

function isIndex(value: unknown, length = Number.MAX_SAFE_INTEGER): boolean {
  const valueType = typeof value;
  return (
    !!length &&
    (valueType === "number" ||
      (valueType !== "symbol" && /^(?:0|[1-9]\d*)$/.test(String(value)))) &&
    Number(value) > -1 &&
    Number(value) % 1 === 0 &&
    Number(value) < length
  );
}

function toKey(value: PathSegment): PathSegment {
  if (typeof value === "string" || isSymbol(value)) return value;
  const result = `${value}`;
  return result === "0" && 1 / Number(value) === -Infinity ? "-0" : result;
}

function stringToPath(value: string): PathSegment[] {
  const result: PathSegment[] = [];
  if (value.charCodeAt(0) === 46) result.push("");
  value.replace(pathTokenPattern, (match, number, quote, quotedValue) => {
    result.push(
      quote
        ? quotedValue.replace(escapeCharacterPattern, "$1")
        : (number ?? match),
    );
    return "";
  });
  return result;
}

function castPath(path: PropertyPath, object?: unknown): PathSegment[] {
  if (Array.isArray(path)) return [...path];
  if (
    typeof path === "number" ||
    typeof path === "symbol" ||
    path == null ||
    /^[\w$]*$/.test(String(path)) ||
    (object != null && path in Object(object))
  ) {
    return [path as PathSegment];
  }
  return stringToPath(String(path));
}

function baseGet(object: unknown, path: PropertyPath): unknown {
  const pathSegments = castPath(path, object);
  let current = object;
  for (const segment of pathSegments) {
    if (current == null) return undefined;
    current = (Object(current) as AnyRecord)[toKey(segment)];
  }
  return current;
}

function assignValue(
  object: AnyRecord,
  key: PathSegment,
  value: unknown,
): void {
  const propertyKey = toKey(key);
  const currentValue = object[propertyKey];
  if (
    currentValue !== value ||
    (value === undefined && !(propertyKey in object))
  ) {
    object[propertyKey] = value;
  }
}

function baseSet(
  object: AnyRecord,
  path: PropertyPath,
  value: unknown,
  customizer?: PathCustomizer,
): AnyRecord {
  if (!isObject(object)) return object;
  const pathSegments = castPath(path, object);
  let nested: AnyRecord = object;
  for (let index = 0; index < pathSegments.length; index += 1) {
    const key = toKey(pathSegments[index]);
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    let nextValue = value;
    if (index !== pathSegments.length - 1) {
      const currentValue = nested[key];
      nextValue = customizer?.(currentValue, key, nested);
      if (nextValue === undefined) {
        nextValue = isObject(currentValue)
          ? currentValue
          : isIndex(pathSegments[index + 1])
            ? []
            : {};
      }
    }
    assignValue(nested, key, nextValue);
    nested = nested[key] as AnyRecord;
  }
  return object;
}

export function toNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (isSymbol(value)) return NaN;
  let normalized = value;
  if (isObject(normalized)) {
    const primitive =
      typeof (normalized as { valueOf?: () => unknown }).valueOf === "function"
        ? (normalized as { valueOf: () => unknown }).valueOf()
        : normalized;
    normalized = isObject(primitive) ? `${primitive}` : primitive;
  }
  if (typeof normalized !== "string") {
    return normalized === 0 ? normalized : Number(normalized);
  }
  const text = baseTrim(normalized);
  const isBinary = binaryPattern.test(text);
  if (isBinary || octalPattern.test(text)) {
    return parseInt(text.slice(2), isBinary ? 2 : 8);
  }
  return badHexPattern.test(text) ? NaN : Number(text);
}

export function toFiniteNumber(value: unknown): number {
  if (!value) return value === 0 ? value : 0;
  const numericValue = toNumber(value);
  if (numericValue === Infinity || numericValue === -Infinity) {
    return (numericValue < 0 ? -1 : 1) * Number.MAX_VALUE;
  }
  return numericValue === numericValue ? numericValue : 0;
}

export function toInteger(value: unknown): number {
  const finiteValue = toFiniteNumber(value);
  const remainder = finiteValue % 1;
  return finiteValue === finiteValue
    ? remainder
      ? finiteValue - remainder
      : finiteValue
    : 0;
}

export function basePickByPath(
  object: unknown,
  paths: readonly PropertyPath[],
  predicate: PickPredicate,
): AnyRecord {
  const result: AnyRecord = {};
  for (const path of paths) {
    const value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

export function hasObjectPath(object: unknown, path: PropertyPath): boolean {
  const pathSegments = castPath(path, object);
  let current = object;
  for (const segment of pathSegments) {
    if (current == null) return false;
    const key = toKey(segment);
    if (!hasOwn.call(Object(current), key)) return false;
    current = (Object(current) as AnyRecord)[key];
  }
  return pathSegments.length > 0;
}
