// Restored from ref/webview/assets/ordinal-BBV4AAIZ.js
// ordinal-jw163_Ud chunk restored from the Codex webview bundle.
import { init } from "./init";
type InternKey = unknown;
type KeyFunction = (value: unknown) => InternKey;
type InternMapShape<K, V> = Map<K, V> & {
  _intern: Map<InternKey, K>;
  _key: KeyFunction;
};
type OrdinalScale = {
  (value: unknown): unknown;
  domain(): unknown[];
  domain(values: Iterable<unknown>): OrdinalScale;
  range(): unknown[];
  range(values: Iterable<unknown>): OrdinalScale;
  unknown(): unknown;
  unknown(value: unknown): OrdinalScale;
  copy(): OrdinalScale;
};
class InternMap<K, V> extends Map<K, V> {
  private readonly _intern = new Map<InternKey, K>();
  private readonly _key: KeyFunction;
  constructor(entries?: Iterable<[K, V]> | null, key: KeyFunction = valueOf) {
    super();
    this._key = key;
    if (entries != null) {
      for (const [keyValue, value] of entries) {
        this.set(keyValue, value);
      }
    }
  }
  override get(keyValue: K): V | undefined {
    return super.get(internGet(this, keyValue));
  }
  override has(keyValue: K): boolean {
    return super.has(internGet(this, keyValue));
  }
  override set(keyValue: K, value: V): this {
    return super.set(internSet(this, keyValue), value);
  }
  override delete(keyValue: K): boolean {
    return super.delete(internDelete(this, keyValue));
  }
}
const implicit = Symbol("implicit");
export function Ordinal(
  domainValues?: Iterable<unknown>,
  rangeValues?: Iterable<unknown>,
): OrdinalScale {
  let indexByDomainValue = new InternMap<unknown, number>();
  let domain: unknown[] = [];
  let range: unknown[] = [];
  let unknownValue: unknown = implicit;
  const scale = ((value: unknown): unknown => {
    let index = indexByDomainValue.get(value);
    if (index === undefined) {
      if (unknownValue !== implicit) return unknownValue;
      indexByDomainValue.set(value, (index = domain.push(value) - 1));
    }
    return range[index % range.length];
  }) as OrdinalScale;
  scale.domain = function (
    values?: Iterable<unknown>,
  ): unknown[] | OrdinalScale {
    if (!arguments.length) return domain.slice();
    domain = [];
    indexByDomainValue = new InternMap<unknown, number>();
    for (const value of values ?? []) {
      if (!indexByDomainValue.has(value)) {
        indexByDomainValue.set(value, domain.push(value) - 1);
      }
    }
    return scale;
  } as OrdinalScale["domain"];
  scale.range = function (
    values?: Iterable<unknown>,
  ): unknown[] | OrdinalScale {
    return arguments.length
      ? ((range = Array.from(values ?? [])), scale)
      : range.slice();
  } as OrdinalScale["range"];
  scale.unknown = function (value?: unknown): unknown {
    return arguments.length ? ((unknownValue = value), scale) : unknownValue;
  } as OrdinalScale["unknown"];
  scale.copy = function (): OrdinalScale {
    return Ordinal(domain, range).unknown(unknownValue);
  };
  init.apply(scale, arguments as unknown as [unknown?, unknown?]);
  return scale;
}
function internGet<K>(
  { _intern, _key }: InternMapShape<K, unknown>,
  value: K,
): K {
  const key = _key(value);
  return _intern.has(key) ? (_intern.get(key) as K) : value;
}
function internSet<K>(
  { _intern, _key }: InternMapShape<K, unknown>,
  value: K,
): K {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key) as K;
  _intern.set(key, value);
  return value;
}
function internDelete<K>(
  { _intern, _key }: InternMapShape<K, unknown>,
  value: K,
): K {
  const key = _key(value);
  if (_intern.has(key)) {
    const internedValue = _intern.get(key) as K;
    _intern.delete(key);
    return internedValue;
  }
  return value;
}
function valueOf(value: unknown): unknown {
  return typeof value === "object" && value
    ? (
        value as {
          valueOf(): unknown;
        }
      ).valueOf()
    : value;
}
