// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Minimal react-is runtime required by the current app-main aggregator.
const reactElementType = Symbol.for("react.element");
const reactPortalType = Symbol.for("react.portal");
const reactFragmentType = Symbol.for("react.fragment");
const reactStrictModeType = Symbol.for("react.strict_mode");
const reactProfilerType = Symbol.for("react.profiler");
const reactProviderType = Symbol.for("react.provider");
const reactContextType = Symbol.for("react.context");
const reactServerContextType = Symbol.for("react.server_context");
const reactForwardRefType = Symbol.for("react.forward_ref");
const reactSuspenseType = Symbol.for("react.suspense");
const reactSuspenseListType = Symbol.for("react.suspense_list");
const reactMemoType = Symbol.for("react.memo");
const reactLazyType = Symbol.for("react.lazy");

function typeOfReactElement(value: unknown): symbol | undefined {
  if (typeof value !== "object" || value === null) return undefined;

  const maybeElement = value as { $$typeof?: symbol; type?: unknown };
  switch (maybeElement.$$typeof) {
    case reactElementType: {
      const elementType = maybeElement.type as
        | { $$typeof?: symbol }
        | symbol
        | null
        | undefined;
      switch (elementType) {
        case reactFragmentType:
        case reactProfilerType:
        case reactStrictModeType:
        case reactSuspenseType:
        case reactSuspenseListType:
          return elementType;
        default: {
          const nestedType =
            typeof elementType === "object" && elementType !== null
              ? elementType.$$typeof
              : undefined;
          switch (nestedType) {
            case reactServerContextType:
            case reactContextType:
            case reactForwardRefType:
            case reactLazyType:
            case reactMemoType:
            case reactProviderType:
              return nestedType;
            default:
              return maybeElement.$$typeof;
          }
        }
      }
    }
    case reactPortalType:
      return maybeElement.$$typeof;
    default:
      return undefined;
  }
}

export const reactIsRuntime = {
  isFragment(value: unknown): boolean {
    return typeOfReactElement(value) === reactFragmentType;
  },
};

export function requireReactIsRuntime(): typeof reactIsRuntime {
  return reactIsRuntime;
}
