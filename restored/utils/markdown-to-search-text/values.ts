// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// markdown-to-search-text-D4gbAqkt chunk restored from the Codex webview bundle.
const objectToString = Object.prototype.toString;
const symbolToString = Symbol.prototype.toString;
function isObject(
  value: unknown,
): value is Record<PropertyKey, unknown> | Function {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isObjectLike(value: unknown): value is Record<PropertyKey, unknown> {
  return value != null && typeof value === "object";
}
function isSymbol(value: unknown): value is symbol {
  return (
    typeof value === "symbol" ||
    (isObjectLike(value) && objectToString.call(value) === "[object Symbol]")
  );
}
function arrayMap<T, R>(
  array: ArrayLike<T> | null | undefined,
  iteratee: (value: T, index: number, array: ArrayLike<T>) => R,
) {
  const length = array == null ? 0 : array.length;
  const result = Array<R>(length);
  for (let index = 0; index < length; index += 1) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function baseToString(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return `${arrayMap(value, baseToString)}`;
  if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
  const result = `${value}`;
  return result === "0" && 1 / (value as number) === -Infinity ? "-0" : result;
}
function toStringValue(value: unknown) {
  return value == null ? "" : baseToString(value);
}
function toNumber(value: unknown) {
  if (typeof value === "number") return value;
  if (isSymbol(value)) return NaN;
  if (isObject(value)) {
    const primitiveValue =
      typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(primitiveValue) ? `${primitiveValue}` : primitiveValue;
  }
  if (typeof value !== "string") return value === 0 ? value : +value;
  const trimmedValue = value.replace(/^\s+|\s+$/g, "");
  const isBinary = /^0b[01]+$/i.test(trimmedValue);
  const isOctal = /^0o[0-7]+$/i.test(trimmedValue);
  if (isBinary || isOctal) {
    return parseInt(trimmedValue.slice(2), isBinary ? 2 : 8);
  }
  return /^[-+]0x[0-9a-f]+$/i.test(trimmedValue) ? NaN : +trimmedValue;
}
export { arrayMap, isObject, isObjectLike, isSymbol, toNumber, toStringValue };
