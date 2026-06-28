// Restored from ref/webview/assets/_baseOrderBy-CDSvCcEN.js
// _baseOrderBy-CDSvCcEN chunk restored from the Codex webview bundle.
import { baseEach } from "../vendor/lodash-base-each";
import {
  arrayMap,
  baseGet,
  baseIteratee,
  identity,
  isSymbol,
} from "./markdown-to-search-text";
type Iteratee<T> =
  | ((value: T) => unknown)
  | string
  | number
  | symbol
  | unknown[];
type SortOrder = "asc" | "desc" | string;
type OrderedEntry<T> = {
  criteria: unknown[];
  index: number;
  value: T;
};
const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value: unknown) {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}
function isArrayLike(value: unknown): value is ArrayLike<unknown> {
  return value != null && typeof value !== "function" && isLength(value.length);
}
function baseUnary<T, R>(func: (value: T, ...extra: unknown[]) => R) {
  return (value: T) => func(value);
}
function baseMap<T, R>(
  collection: ArrayLike<T> | Record<PropertyKey, T> | null | undefined,
  iteratee: (value: T, key: PropertyKey, collection: unknown) => R,
) {
  let index = -1;
  const result = isArrayLike(collection) ? Array<R>(collection.length) : [];
  baseEach(
    collection,
    (value: T, key: PropertyKey, innerCollection: unknown) => {
      result[++index] = iteratee(value, key, innerCollection);
    },
  );
  return result;
}
function baseSortBy<T>(
  array: OrderedEntry<T>[],
  comparer: (value: OrderedEntry<T>, other: OrderedEntry<T>) => number,
) {
  let length = array.length;
  array.sort(comparer);
  while (length--) {
    (array as unknown as T[])[length] = array[length].value;
  }
  return array as unknown as T[];
}
function compareAscending(value: unknown, other: unknown) {
  if (value !== other) {
    const valueIsDefined = value !== undefined;
    const valueIsNull = value === null;
    const valueIsReflexive = value === value;
    const valueIsSymbol = isSymbol(value);
    const otherIsDefined = other !== undefined;
    const otherIsNull = other === null;
    const otherIsReflexive = other === other;
    const otherIsSymbol = isSymbol(other);
    if (
      (!otherIsNull &&
        !otherIsSymbol &&
        !valueIsSymbol &&
        (value as string | number) > (other as string | number)) ||
      (valueIsSymbol &&
        otherIsDefined &&
        otherIsReflexive &&
        !otherIsNull &&
        !otherIsSymbol) ||
      (valueIsNull && otherIsDefined && otherIsReflexive) ||
      (!valueIsDefined && otherIsReflexive) ||
      !valueIsReflexive
    ) {
      return 1;
    }
    if (
      (!valueIsNull &&
        !valueIsSymbol &&
        !otherIsSymbol &&
        (value as string | number) < (other as string | number)) ||
      (otherIsSymbol &&
        valueIsDefined &&
        valueIsReflexive &&
        !valueIsNull &&
        !valueIsSymbol) ||
      (otherIsNull && valueIsDefined && valueIsReflexive) ||
      (!otherIsDefined && valueIsReflexive) ||
      !otherIsReflexive
    ) {
      return -1;
    }
  }
  return 0;
}
function compareMultiple<T>(
  value: OrderedEntry<T>,
  other: OrderedEntry<T>,
  orders: SortOrder[],
) {
  const criteria = value.criteria;
  const otherCriteria = other.criteria;
  const ordersLength = orders.length;
  for (let index = 0; index < criteria.length; index += 1) {
    const result = compareAscending(criteria[index], otherCriteria[index]);
    if (result) {
      return index >= ordersLength
        ? result
        : result * (orders[index] === "desc" ? -1 : 1);
    }
  }
  return value.index - other.index;
}
function baseOrderBy<T>(
  collection: ArrayLike<T> | Record<PropertyKey, T> | null | undefined,
  iteratees: Iteratee<T>[],
  orders: SortOrder[],
) {
  const normalizedIteratees = iteratees.length
    ? arrayMap(iteratees, (iteratee) =>
        Array.isArray(iteratee)
          ? (value: T) =>
              baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee)
          : iteratee,
      )
    : [identity];
  const compiledIteratees = arrayMap(
    normalizedIteratees,
    baseUnary(baseIteratee),
  ) as Array<(value: T) => unknown>;
  let index = -1;
  return baseSortBy(
    baseMap(collection, (value) => ({
      criteria: arrayMap(compiledIteratees, (iteratee) => iteratee(value)),
      index: ++index,
      value,
    })),
    (value, other) => compareMultiple(value, other, orders),
  );
}
export { baseOrderBy };
