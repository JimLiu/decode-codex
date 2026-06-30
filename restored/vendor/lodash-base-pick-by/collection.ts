// Restored from ref/webview/assets/_basePickBy-X1_M8KZ0.js
// Collection helpers used by the lodash basePickBy compatibility barrel.
import { toInteger } from "./path";

type AnyRecord = Record<PropertyKey, unknown>;
type Collection<TValue = unknown> =
  | ArrayLike<TValue>
  | Record<PropertyKey, TValue>
  | null
  | undefined;
type Iteratee<TValue = unknown, TResult = unknown> = (
  value: TValue,
  key: PropertyKey,
  collection: Collection<TValue>,
) => TResult;

const objectPrototype = Object.prototype;
const hasOwn = objectPrototype.hasOwnProperty;
const objectToString = objectPrototype.toString;

function isObjectLike(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  return (
    value != null &&
    typeof value !== "function" &&
    Number.isSafeInteger((value as { length?: unknown }).length) &&
    Number((value as { length: number }).length) >= 0
  );
}

function enumerableKeysIn(value: unknown): PropertyKey[] {
  if (value == null) return [];
  const keys: PropertyKey[] = [];
  for (const key in Object(value)) keys.push(key);
  return keys;
}

function getCollectionKeys(collection: Collection): PropertyKey[] {
  if (isArrayLike(collection)) {
    return Array.from({ length: collection.length }, (_value, index) => index);
  }
  return enumerableKeysIn(collection);
}

function getTag(value: unknown): string {
  return value == null
    ? value === undefined
      ? "[object Undefined]"
      : "[object Null]"
    : objectToString.call(value);
}

function isFlattenable(value: unknown): value is ArrayLike<unknown> {
  return (
    Array.isArray(value) ||
    getTag(value) === "[object Arguments]" ||
    Boolean(
      isObjectLike(value) &&
        (value as { [Symbol.isConcatSpreadable]?: unknown })[
          Symbol.isConcatSpreadable
        ],
    )
  );
}

function matchesObject(source: AnyRecord): Iteratee {
  return (value: unknown) => {
    if (!isObjectLike(value)) return false;
    return Object.keys(source).every(
      (key) => (value as AnyRecord)[key] === source[key],
    );
  };
}

function propertyAccessor(path: PropertyKey): Iteratee {
  return (value: unknown) =>
    value == null ? undefined : (Object(value) as AnyRecord)[path];
}

function baseIteratee<TValue, TResult>(
  iteratee:
    | Iteratee<TValue, TResult>
    | PropertyKey
    | AnyRecord
    | null
    | undefined,
): Iteratee<TValue, TResult | unknown> {
  if (typeof iteratee === "function") return iteratee;
  if (iteratee == null) return (value) => value;
  if (Array.isArray(iteratee)) {
    const [path, expected] = iteratee;
    return (value) =>
      value != null &&
      (Object(value) as AnyRecord)[path as PropertyKey] === expected;
  }
  if (typeof iteratee === "object") return matchesObject(iteratee as AnyRecord);
  return propertyAccessor(iteratee);
}

export function flattenOneLevel<TValue>(
  values: ArrayLike<TValue | ArrayLike<TValue>> | null | undefined,
): TValue[] {
  if (values == null || values.length === 0) return [];
  const flattened: TValue[] = [];
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (isFlattenable(value)) {
      for (
        let innerIndex = 0;
        innerIndex < (value as ArrayLike<TValue>).length;
        innerIndex += 1
      ) {
        flattened.push((value as ArrayLike<TValue>)[innerIndex]);
      }
    } else {
      flattened.push(value as TValue);
    }
  }
  return flattened;
}

export function assignDefaults<TTarget extends AnyRecord>(
  target: TTarget,
  ...sources: Array<AnyRecord | null | undefined>
): TTarget {
  const result = Object(target) as TTarget;
  for (const source of sources) {
    if (source == null) continue;
    for (const key of enumerableKeysIn(source)) {
      const currentValue = result[key];
      if (
        currentValue === undefined ||
        (currentValue === (objectPrototype as AnyRecord)[key] &&
          !hasOwn.call(result, key))
      ) {
        result[key] = source[key] as TTarget[typeof key];
      }
    }
  }
  return result;
}

export function lastElement<TValue>(
  values: ArrayLike<TValue> | null | undefined,
): TValue | undefined {
  const length = values == null ? 0 : values.length;
  return length ? values[length - 1] : undefined;
}

export function findInCollection<TValue>(
  collection: Collection<TValue>,
  predicate: Iteratee<TValue, unknown> | PropertyKey | AnyRecord,
  fromIndex?: number | null,
): TValue | undefined {
  const objectCollection = Object(collection ?? []);
  const keys = isArrayLike(collection) ? null : getCollectionKeys(collection);
  const values = keys == null ? (collection as ArrayLike<TValue>) : keys;
  const length = values == null ? 0 : values.length;
  let index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) index = Math.max(length + index, 0);
  const iteratee = baseIteratee(predicate);
  for (; index < length; index += 1) {
    const key = keys == null ? index : keys[index];
    const value = objectCollection[
      key as keyof typeof objectCollection
    ] as TValue;
    if (iteratee(value, key, collection)) return value;
  }
  return undefined;
}

export function baseMapCollection<TValue, TResult>(
  collection: Collection<TValue>,
  iteratee: Iteratee<TValue, TResult>,
): TResult[] {
  const keys = getCollectionKeys(collection);
  const result = new Array<TResult>(keys.length);
  const objectCollection = Object(collection ?? []);
  keys.forEach((key, index) => {
    const value = objectCollection[
      key as keyof typeof objectCollection
    ] as TValue;
    result[index] = iteratee(value, key, collection);
  });
  return result;
}

export function mapCollection<TValue, TResult>(
  collection: Collection<TValue>,
  iteratee:
    | Iteratee<TValue, TResult>
    | PropertyKey
    | AnyRecord
    | null
    | undefined,
): Array<TResult | unknown> {
  return baseMapCollection(collection, baseIteratee(iteratee));
}

export function isStringLike(value: unknown): value is string | String {
  return (
    typeof value === "string" ||
    (!Array.isArray(value) &&
      isObjectLike(value) &&
      getTag(value) === "[object String]")
  );
}
