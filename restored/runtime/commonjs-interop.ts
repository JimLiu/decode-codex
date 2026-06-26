// Restored from ref/webview/assets/chunk-Cq_f4orQ.js
// Also matches ref/webview/assets/rolldown-runtime-Czos8NxU.js.
// Rolldown CommonJS/ESM interop helpers restored from the Codex webview bundle.
type AnyModule = Record<PropertyKey, any>;
type CommonJsCallback = (
  exports: AnyModule,
  module: { exports: AnyModule },
) => void;

const objectCreate = Object.create;
const defineProperty = Object.defineProperty;
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
const getOwnPropertyNames = Object.getOwnPropertyNames;
const getPrototypeOf = Object.getPrototypeOf;
const hasOwnProperty = Object.prototype.hasOwnProperty;

export const commonJsRequire = ((fallbackRequire: any) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(fallbackRequire, {
          get: (target, property) =>
            (typeof require < "u" ? require : target)[property],
        })
      : fallbackRequire)(function requireUnavailable(
  moduleName: string,
): never {
  if (typeof require < "u") return require.apply(this, arguments as any);
  throw Error(
    'Calling `require` for "' +
      moduleName +
      "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
  );
});

export const copyCommonJsProperties = (
  target: AnyModule,
  source: AnyModule,
  secondTarget?: AnyModule,
): void => {
  copyProperties(target, source, "default");
  if (secondTarget) copyProperties(secondTarget, source, "default");
};

export const once =
  <T>(initializer: ((value: 0) => T) | undefined, value?: T) =>
  () => {
    if (initializer) {
      value = initializer((initializer = undefined as never));
    }
    return value;
  };

export const toCommonJs = (module: AnyModule): AnyModule =>
  hasOwnProperty.call(module, "module.exports")
    ? module["module.exports"]
    : copyProperties(
        defineProperty({}, "__esModule", {
          value: true,
        }),
        module,
      );

export const exportGetters = (
  getters: Record<string, () => unknown>,
  tagAsModule?: boolean,
): AnyModule => {
  const result: AnyModule = {};
  for (const key in getters) {
    defineProperty(result, key, {
      get: getters[key],
      enumerable: true,
    });
  }
  if (!tagAsModule) {
    defineProperty(result, Symbol.toStringTag, {
      value: "Module",
    });
  }
  return result;
};

export const toEsModule = (
  module: AnyModule | null | undefined,
  target?: AnyModule,
): AnyModule => {
  const result = module == null ? {} : objectCreate(getPrototypeOf(module));
  return copyProperties(
    target || !module || !module.__esModule
      ? defineProperty(result, "default", {
          value: module,
          enumerable: true,
        })
      : result,
    module,
  );
};

export const createCommonJsModule =
  (callback: CommonJsCallback, cache?: { exports: AnyModule }) => () => {
    if (!cache) {
      cache = {
        exports: {},
      };
      callback(cache.exports, cache);
    }
    return cache.exports;
  };

function copyProperties(
  target: AnyModule,
  source: AnyModule | null | undefined,
  except?: PropertyKey,
  descriptor?: PropertyDescriptor,
): AnyModule {
  if ((source && typeof source === "object") || typeof source === "function") {
    for (const key of getOwnPropertyNames(source)) {
      if (!hasOwnProperty.call(target, key) && key !== except) {
        defineProperty(target, key, {
          get: () => source[key],
          enumerable:
            !(descriptor = getOwnPropertyDescriptor(source, key)) ||
            descriptor.enumerable,
        });
      }
    }
  }
  return target;
}
