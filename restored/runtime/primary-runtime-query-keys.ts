// Restored from ref/webview/assets/app-initial~app-main~debug-window-page~agent-settings~debug-modal-Baq5IrGF.js

import {
  vscodeApiF,
  vscodeApiH as vscodeLogger,
} from "../boundaries/vscode-api";
type RuntimeProvider = {
  url: string;
  [key: string]: unknown;
};
type RuntimePlatformArtifact = {
  digest: string;
  hash: "sha256";
  providers: RuntimeProvider[];
  format?: string;
  path?: string;
  size?: number;
};
type RuntimeRelease = {
  bundleFormatVersion?: number;
  bundleVersion?: string;
  platforms: Record<string, RuntimePlatformArtifact>;
  runtimeRootDirectoryName?: string;
};
type PrimaryRuntimeInstallConfig = {
  baseUrl?: string;
  latest?: RuntimeRelease;
  "latest-alpha"?: RuntimeRelease;
  versions?: Record<string, RuntimeRelease>;
};
type StatsigClientLike = {
  getContext(): {
    user: unknown;
  };
  getLayer(layerName: string): {
    get(key: string, fallback: unknown): unknown;
  };
  updateUserAsync(user: unknown): Promise<{
    success: boolean;
    [key: string]: unknown;
  }>;
};
const PRIMARY_RUNTIME_ARTIFACT = "codex-primary-runtime";
const DEFAULT_PRIMARY_RUNTIME_INSTALL_CONFIG: PrimaryRuntimeInstallConfig = {};
const primaryRuntimeUpdateStatusQueryKey = [
  "app-host",
  "primary-runtime",
  "update-status",
];
async function refreshPrimaryRuntimeConfigFromStatsig(
  statsigClient: StatsigClientLike,
) {
  try {
    const updateDetails = await statsigClient.updateUserAsync(
      statsigClient.getContext().user,
    );
    if (!updateDetails.success) {
      vscodeLogger.warning(
        "Failed to refresh Codex runtime config from Statsig",
        {
          safe: {},
          sensitive: {
            updateDetails,
          },
        },
      );
    }
  } catch (error) {
    vscodeLogger.warning(
      "Failed to refresh Codex runtime config from Statsig",
      {
        safe: {},
        sensitive: {
          error,
        },
      },
    );
  }
  publishPrimaryRuntimeConfig(
    getPrimaryRuntimeConfigFromStatsig(statsigClient),
  );
}
function getPrimaryRuntimeConfigFromStatsig(statsigClient: StatsigClientLike) {
  const runtimeInstallConfig = statsigClient
    .getLayer("2096615506")
    .get(PRIMARY_RUNTIME_ARTIFACT, DEFAULT_PRIMARY_RUNTIME_INSTALL_CONFIG);
  const isValidConfig = isPrimaryRuntimeInstallConfig(runtimeInstallConfig);
  if (!isValidConfig) {
    vscodeLogger.info(
      "Invalid Codex runtime install config; using default runtime",
      {
        safe: {},
        sensitive: {
          runtimeInstallConfig,
          error: "Invalid primary runtime install config",
        },
      },
    );
  }
  return {
    source:
      runtimeInstallConfig === DEFAULT_PRIMARY_RUNTIME_INSTALL_CONFIG
        ? "default"
        : "statsig-layer",
    value: isValidConfig
      ? runtimeInstallConfig
      : DEFAULT_PRIMARY_RUNTIME_INSTALL_CONFIG,
  };
}
function publishPrimaryRuntimeConfig(runtimeConfig: {
  source: string;
  value: PrimaryRuntimeInstallConfig;
}) {
  vscodeLogger.info("Codex runtime config selected", {
    safe: {
      artifact: PRIMARY_RUNTIME_ARTIFACT,
      source: runtimeConfig.source,
    },
    sensitive: {
      runtimeInstallConfig: runtimeConfig.value,
    },
  });
  vscodeApiF.dispatchMessage("codex-runtimes-config-changed", {
    config: buildRuntimesConfig(runtimeConfig.value),
  });
}
function buildRuntimesConfig(runtimeConfig: PrimaryRuntimeInstallConfig) {
  return {
    runtimes: {
      [PRIMARY_RUNTIME_ARTIFACT]: runtimeConfig,
    },
  };
}
function primaryRuntimeDiagnosticsQueryKey(diagnosticName: string) {
  return ["app-host", "primary-runtime", "diagnostics", diagnosticName];
}
function initPrimaryRuntimeConfigChunk() {}
function initPrimaryRuntimeUpdateStatusQueryKeyChunk() {}
function isPrimaryRuntimeInstallConfig(
  value: unknown,
): value is PrimaryRuntimeInstallConfig {
  if (!isRecord(value)) return false;
  return (
    isOptionalString(value.baseUrl) &&
    isOptionalRuntimeRelease(value.latest) &&
    isOptionalRuntimeRelease(value["latest-alpha"]) &&
    isOptionalRuntimeVersionMap(value.versions)
  );
}
function isOptionalRuntimeVersionMap(value: unknown) {
  if (value == null) return true;
  if (!isRecord(value)) return false;
  return Object.values(value).every(isRuntimeRelease);
}
function isOptionalRuntimeRelease(value: unknown) {
  return value == null || isRuntimeRelease(value);
}
function isRuntimeRelease(value: unknown): value is RuntimeRelease {
  return (
    isRecord(value) &&
    isOptionalNumber(value.bundleFormatVersion) &&
    isOptionalString(value.bundleVersion) &&
    isOptionalString(value.runtimeRootDirectoryName) &&
    isRecord(value.platforms) &&
    Object.values(value.platforms).every(isRuntimePlatformArtifact)
  );
}
function isRuntimePlatformArtifact(
  value: unknown,
): value is RuntimePlatformArtifact {
  return (
    isRecord(value) &&
    typeof value.digest === "string" &&
    value.hash === "sha256" &&
    Array.isArray(value.providers) &&
    value.providers.length > 0 &&
    value.providers.every(isRuntimeProvider) &&
    isOptionalString(value.format) &&
    isOptionalString(value.path) &&
    isOptionalPositiveNumber(value.size)
  );
}
function isRuntimeProvider(value: unknown): value is RuntimeProvider {
  return (
    isRecord(value) && typeof value.url === "string" && value.url.length > 0
  );
}
function isOptionalString(value: unknown) {
  return value == null || typeof value === "string";
}
function isOptionalNumber(value: unknown) {
  return value == null || typeof value === "number";
}
function isOptionalPositiveNumber(value: unknown) {
  return value == null || (typeof value === "number" && value > 0);
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export {
  initPrimaryRuntimeConfigChunk,
  initPrimaryRuntimeUpdateStatusQueryKeyChunk,
  refreshPrimaryRuntimeConfigFromStatsig,
  publishPrimaryRuntimeConfig,
  primaryRuntimeDiagnosticsQueryKey,
  getPrimaryRuntimeConfigFromStatsig,
  primaryRuntimeUpdateStatusQueryKey,
};
