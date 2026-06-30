// Restored from ref/webview/assets/is-plan-event-enabled-Cr4BiXzc.js
// is-plan-event-enabled-yBXVgx1W chunk restored from the Codex webview bundle.
type PlanEventDefaults = {
  __default?: {
    enabled?: boolean;
  };
};

type PlanEventOverride = {
  enabled?: boolean;
};

export function initIsPlanEventEnabledChunk(): void {}

export function isPlanEventEnabled(
  defaults: PlanEventDefaults | null | undefined,
  override: PlanEventOverride | null | undefined,
): boolean {
  return typeof override?.enabled === "boolean"
    ? override.enabled
    : (defaults?.__default?.enabled ?? true);
}
