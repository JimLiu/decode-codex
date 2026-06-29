// Restored from ref/webview/assets/use-element-in-view-CZGmoMvk.js
// Boundary facade for shared utility hooks, small icons, and vendored helpers.
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  onboardingWizardAction,
} from "./app-host-services-runtime";
import {
  getChunkModuleExports,
  getJsxRuntime,
  initReactRuntime,
} from "./app-main-host-runtime";
import {
  _r as createDefineProperty,
  _u as createBaseAt,
} from "../vendor/pull-request-thread-actions-runtime";
import { initClassNameRuntime } from "../boundaries/current-ref/appg-thread-shared-producer";
import { initAppScope, initScopeRuntime } from "./app-scope-runtime";

const MAX_SAFE_INTEGER = 9007199254740991;
const unsignedIntegerPattern = /^(?:0|[1-9]\d*)$/;
const objectToString = Object.prototype.toString;

function isLength(value: unknown): value is number {
  return (
    typeof value === "number" &&
    value > -1 &&
    value % 1 === 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

export function createSymbolConstructor(): SymbolConstructor | undefined {
  return typeof Symbol === "function" ? Symbol : undefined;
}

export function createArrayPush() {
  return function arrayPush<TValue>(
    array: TValue[],
    values: ArrayLike<TValue>,
  ): TValue[] {
    for (let index = 0; index < values.length; index += 1) {
      array[array.length] = values[index];
    }
    return array;
  };
}

export function createIsObject() {
  return function isObject(value: unknown): boolean {
    let valueType = typeof value;
    return (
      value != null && (valueType === "object" || valueType === "function")
    );
  };
}

export function createIsArray() {
  return Array.isArray;
}

export function createEq() {
  return function eq(value: unknown, other: unknown): boolean {
    return value === other || (value !== value && other !== other);
  };
}

export function createIdentity() {
  return function identity<TValue>(value: TValue): TValue {
    return value;
  };
}

export function createIsArrayLike() {
  return function isArrayLike(value: unknown): value is ArrayLike<unknown> {
    return (
      value != null &&
      typeof value !== "function" &&
      isLength((value as ArrayLike<unknown>).length)
    );
  };
}

export function createIsIndex() {
  return function isIndex(
    value: unknown,
    length: number | null = MAX_SAFE_INTEGER,
  ): boolean {
    let normalizedLength = length == null ? MAX_SAFE_INTEGER : length;
    let valueType = typeof value;
    let index =
      valueType === "number"
        ? (value as number)
        : valueType !== "symbol" && unsignedIntegerPattern.test(String(value))
          ? Number(value)
          : NaN;
    return (
      normalizedLength > 0 &&
      index > -1 &&
      index % 1 === 0 &&
      index < normalizedLength
    );
  };
}

export function createIsArguments() {
  return function isArguments(value: unknown): value is IArguments {
    return objectToString.call(value) === "[object Arguments]";
  };
}

// Current bj5tp28r Uf/ub aliases are not these initializers; keep the legacy init
// hooks as explicit no-ops until their current producer aliases are restored.
export function initHostWorkspaceQueries(): void {}

export function initOnboardingWizardTrackingRuntime(): void {}

export {
  createBaseAt,
  createDefineProperty,
  createPersistentSignal,
  getChunkModuleExports,
  getJsxRuntime,
  initAppScope,
  initClassNameRuntime,
  initHostWorkspaceQueries,
  initOnboardingWizardTrackingRuntime,
  initPersistentSignalRuntime,
  initProductEventRuntime,
  initReactRuntime,
  initScopeRuntime,
  onboardingWizardAction,
};
