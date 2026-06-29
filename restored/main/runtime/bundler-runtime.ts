// Restored from ref/.vite/build/src-BZqs_tzA.js
// Vendored runtime boundary.
import { createRequire } from "node:module";

type GetterMap = Record<string, () => unknown>;
type MutableExports = Record<PropertyKey, unknown>;
type CommonJsModule<TExports = unknown> = { exports: TExports };
type CommonJsFactory<TExports = unknown> = (
  exports: MutableExports,
  module: CommonJsModule<TExports>,
) => void;

const requireFromRestoredRuntime = createRequire(import.meta.url);

/**
 * Lazily run a one-time initializer and keep its result.
 *
 * This mirrors the helper emitted by the bundle for side-effectful module
 * initializers that should be evaluated on first use.
 */
function createLazyInitializer<T>(initializer: (sentinel: 0) => T): () => T {
  let pending: ((sentinel: 0) => T) | null = initializer;
  let value: T;

  return () => {
    if (pending) {
      const run = pending;
      pending = null;
      value = run(0);
    }

    return value;
  };
}

/**
 * Wrap a CommonJS factory in the same lazy cache shape used by esbuild.
 */
function createCommonJsModule<TExports = unknown>(
  factory: CommonJsFactory<TExports>,
): () => TExports {
  let module: CommonJsModule<TExports> | null = null;

  return () => {
    if (!module) {
      module = { exports: {} as TExports };
      factory(module.exports as MutableExports, module);
    }

    return module.exports;
  };
}

/**
 * Build an ESM-like namespace whose properties are backed by getters.
 */
function defineGetterNamespace<TNamespace extends object = MutableExports>(
  getters: GetterMap,
  omitModuleTag = false,
): TNamespace {
  const namespace: MutableExports = {};

  for (const key in getters) {
    Object.defineProperty(namespace, key, {
      enumerable: true,
      get: getters[key],
    });
  }

  if (!omitModuleTag) {
    Object.defineProperty(namespace, Symbol.toStringTag, {
      value: "Module",
    });
  }

  return namespace as TNamespace;
}

function copyEnumerableProperties<TTarget extends MutableExports>(
  target: TTarget,
  source: unknown,
  defaultKey?: PropertyKey,
): TTarget {
  if (
    source == null ||
    (typeof source !== "object" && typeof source !== "function")
  ) {
    return target;
  }

  for (const key of Object.getOwnPropertyNames(source)) {
    if (
      key === defaultKey ||
      Object.prototype.hasOwnProperty.call(target, key)
    ) {
      continue;
    }

    const descriptor = Object.getOwnPropertyDescriptor(source, key);
    Object.defineProperty(target, key, {
      enumerable: descriptor?.enumerable ?? true,
      get: () => (source as MutableExports)[key],
    });
  }

  return target;
}

/**
 * Convert a CommonJS value to the namespace shape expected by bundled imports.
 */
function toEsModule<TValue>(
  value: TValue,
  forceDefaultExport = false,
): TValue & { default?: TValue } {
  const namespace =
    value == null
      ? {}
      : (Object.create(Object.getPrototypeOf(value)) as MutableExports);

  if (
    forceDefaultExport ||
    !value ||
    !(value as { __esModule?: boolean }).__esModule
  ) {
    Object.defineProperty(namespace, "default", {
      value,
      enumerable: true,
    });
  }

  return copyEnumerableProperties(namespace, value, "default") as TValue & {
    default?: TValue;
  };
}

/**
 * Convert named exports to a CommonJS-compatible object.
 */
function toCommonJsModule<TExports extends MutableExports>(
  exportsObject: TExports,
): TExports {
  if (Object.prototype.hasOwnProperty.call(exportsObject, "module.exports")) {
    return exportsObject["module.exports"] as TExports;
  }

  return copyEnumerableProperties(
    Object.defineProperty({}, "__esModule", { value: true }) as MutableExports,
    exportsObject,
  ) as TExports;
}

let debugModule: unknown;

/**
 * The original chunk bundled debug/ms/supports-color. Those are npm package
 * internals, so the restored runtime keeps only the bundle helper surface and
 * lazy-loads the real package.
 */
function loadDebugModule(): unknown {
  debugModule ??= requireFromRestoredRuntime("debug");
  return debugModule;
}

export {
  createLazyInitializer,
  createCommonJsModule,
  defineGetterNamespace,
  toEsModule,
  toCommonJsModule,
  loadDebugModule,
  toCommonJsModule as a,
  defineGetterNamespace as i,
  createCommonJsModule as n,
  toEsModule as o,
  createLazyInitializer as r,
  loadDebugModule as t,
};
