// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// markdown-to-search-text-D4gbAqkt chunk restored from the Codex webview bundle.
import { isEqualN } from "../../vendor/lodash-is-equal";
import { baseGet, castPath, hasIn, isKey, toKey } from "./path";
import type { MatchData, Predicate, PropertyPath } from "./types";
import { isObject, toNumber } from "./values";
const COMPARE_PARTIAL_FLAG = 1;
const COMPARE_UNORDERED_FLAG = 2;
const COMPARE_PARTIAL_UNORDERED = COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG;
const MAX_INTEGER = 1.7976931348623157e308;
function isStrictComparable(value: unknown) {
  return value === value && !isObject(value);
}
function getMatchData(source: Record<string, unknown>): MatchData[] {
  const keys = Object.keys(source);
  for (let index = keys.length; index--; ) {
    const key = keys[index];
    const value = source[key];
    keys[index] = [key, value, isStrictComparable(value)] as unknown as string;
  }
  return keys as unknown as MatchData[];
}
function matchesStrictComparable(key: PropertyKey, sourceValue: unknown) {
  return (object: unknown) =>
    object == null
      ? false
      : (object as Record<PropertyKey, unknown>)[key] === sourceValue &&
        (sourceValue !== undefined || key in Object(object));
}
function baseIsMatch(
  object: unknown,
  source: unknown,
  matchData: MatchData[],
  customizer?: (
    objectValue: unknown,
    sourceValue: unknown,
    key: string,
    object: object,
    source: unknown,
    stack: unknown,
  ) => boolean | undefined,
) {
  let length = matchData.length;
  let dataLength = length;
  const noCustomizer = customizer == null;
  if (object == null) return dataLength === 0;
  const boxedObject = Object(object) as Record<string, unknown>;
  while (length--) {
    const data = matchData[length];
    if (
      noCustomizer && data[2]
        ? data[1] !== boxedObject[data[0]]
        : !(data[0] in boxedObject)
    ) {
      return false;
    }
  }
  while (++length < dataLength) {
    const data = matchData[length];
    const key = data[0];
    const objectValue = boxedObject[key];
    const sourceValue = data[1];
    if (noCustomizer && data[2]) {
      if (objectValue === undefined && !(key in boxedObject)) return false;
    } else {
      const customized = customizer?.(
        objectValue,
        sourceValue,
        key,
        boxedObject,
        source,
        undefined,
      );
      if (
        !(customized === undefined
          ? isEqualN(
              sourceValue,
              objectValue,
              COMPARE_PARTIAL_UNORDERED,
              customizer,
            )
          : customized)
      ) {
        return false;
      }
    }
  }
  return true;
}
function baseMatches(source: Record<string, unknown>) {
  const matchData = getMatchData(source);
  return matchData.length === 1 && matchData[0][2]
    ? matchesStrictComparable(matchData[0][0], matchData[0][1])
    : (object: unknown) =>
        object === source || baseIsMatch(object, source, matchData);
}
function baseMatchesProperty(
  path: PropertyPath | unknown,
  sourceValue: unknown,
) {
  return isKey(path) && isStrictComparable(sourceValue)
    ? matchesStrictComparable(toKey(path), sourceValue)
    : (object: unknown) => {
        const objectValue = baseGet(object, path);
        return objectValue === undefined && objectValue === sourceValue
          ? hasIn(object, path)
          : isEqualN(sourceValue, objectValue, COMPARE_PARTIAL_UNORDERED);
      };
}
function identity<T>(value: T) {
  return value;
}
function baseProperty(key: PropertyKey) {
  return (object: unknown) =>
    object == null ? undefined : (object as Record<PropertyKey, unknown>)[key];
}
function basePropertyDeep(path: PropertyPath | unknown) {
  return (object: unknown) => baseGet(object, path);
}
function property(path: PropertyPath | unknown) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(
  value?: unknown,
): Predicate | ((value: unknown) => unknown) {
  if (typeof value === "function") return value as Predicate;
  if (value == null) return identity;
  if (typeof value === "object") {
    return Array.isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value as Record<string, unknown>);
  }
  return property(value);
}
function baseFindIndex<T>(
  array: ArrayLike<T>,
  predicate: (value: T, index: number, array: ArrayLike<T>) => boolean,
  fromIndex: number,
  fromRight?: boolean,
) {
  const length = array.length;
  let index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) return index;
  }
  return -1;
}
function toFinite(value: unknown) {
  if (!value) return value === 0 ? value : 0;
  const number = toNumber(value);
  if (number === Infinity || number === -Infinity) {
    return (number < 0 ? -1 : 1) * MAX_INTEGER;
  }
  return number === number ? number : 0;
}
function toInteger(value: unknown) {
  const result = toFinite(value) as number;
  const remainder = result % 1;
  return result === result ? (remainder ? result - remainder : result) : 0;
}
function findLastIndex<T>(
  array: ArrayLike<T> | null | undefined,
  predicate?: unknown,
  fromIndex?: number,
) {
  const length = array == null ? 0 : array.length;
  if (!length || array == null) return -1;
  let index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index =
      fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
  }
  const iteratee = baseIteratee(predicate) as (
    value: T,
    index: number,
    array: ArrayLike<T>,
  ) => boolean;
  return baseFindIndex(array, iteratee, index, true);
}
export { baseFindIndex, baseIteratee, findLastIndex, identity };
