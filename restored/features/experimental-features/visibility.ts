// Restored from ref/webview/assets/experimental-feature-visibility-Bvp90zWX.js
// Also matches ref/webview/assets/experimental-feature-visibility-8-2TesZ9.js.
// Visibility predicate for experimental feature rows.
const HIDDEN_BETA_FEATURES = new Set([
  "memories",
  "multi_agent",
  "plugins",
  "plugin",
  "remote_control",
  "chronicle",
  "workspace_dependencies",
]);
const HIDDEN_BETA_FEATURE_PREFIXES = ["realtime_"] as const;

type ExperimentalFeatureVisibilityInput = {
  name: string;
  stage: string;
};

function isExperimentalFeatureVisible(
  feature: ExperimentalFeatureVisibilityInput,
): boolean {
  return (
    feature.stage === "beta" &&
    !HIDDEN_BETA_FEATURES.has(feature.name) &&
    !HIDDEN_BETA_FEATURE_PREFIXES.some((prefix) =>
      feature.name.startsWith(prefix),
    )
  );
}

function initExperimentalFeatureVisibilityChunk(): void {}

export { initExperimentalFeatureVisibilityChunk, isExperimentalFeatureVisible };
