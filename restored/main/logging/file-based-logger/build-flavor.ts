// Restored from ref/.vite/build/file-based-logger-DZ6052-3.js
// file-based-logger-DZ6052-3 chunk restored from the Codex Electron main bundle.
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import * as sharedRuntime from "../../boundaries/shared-node-runtime.facade";
import type {
  BuildFlavorApi,
  BuildFlavorValue,
  Environment,
  LoggerFactory,
  PackageMetadataOptions,
  Platform,
  WindowsStoreConfig,
  WindowsUpdaterConfig,
} from "./types";
const sharedBuildFlavor = sharedRuntime.BuildFlavors as BuildFlavorApi;
const createScopedLogger =
  sharedRuntime.createLazyScopedStructuredLogger as LoggerFactory;
const buildFlavorLogger = createScopedLogger("build-flavor");
const releaseBuildFlavors = [
  sharedBuildFlavor.Nightly,
  sharedBuildFlavor.InternalAlpha,
  sharedBuildFlavor.PublicBeta,
  sharedBuildFlavor.Prod,
];
const windowsUpdaterByFlavor: Partial<
  Record<BuildFlavorValue, WindowsUpdaterConfig>
> = {
  [sharedBuildFlavor.Nightly]: {
    kind: "msix",
  },
  [sharedBuildFlavor.InternalAlpha]: {
    kind: "msix",
  },
  [sharedBuildFlavor.PublicBeta]: {
    kind: "store",
    storeProductId: "9N8CJ4W95TBZ",
    storeUpdateManifestUrl:
      "https://persistent.oaistatic.com/codex-app-beta/windows-store-update.json",
  },
  [sharedBuildFlavor.Prod]: {
    kind: "store",
    storeProductId: "9PLM9XGG6VKS",
    storeUpdateManifestUrl:
      "https://persistent.oaistatic.com/codex-app-prod/windows-store-update.json",
  },
};
function packageMetadataCandidates(): string[] {
  const cwd = process.cwd();
  const candidates: string[] = [];
  if (process.resourcesPath) {
    candidates.push(
      path.join(process.resourcesPath, "app.asar", "package.json"),
    );
  }
  candidates.push(path.join(cwd, "package.json"));
  candidates.push(path.join(cwd, "electron", "package.json"));
  return candidates;
}
function readPackageMetadataField<T = string>(
  field: string,
  {
    candidates = packageMetadataCandidates(),
    parse,
  }: PackageMetadataOptions<T> = {},
): T | string | null {
  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    const packageJson = JSON.parse(
      fs.readFileSync(candidate, "utf8"),
    ) as Record<string, unknown>;
    const rawValue =
      typeof packageJson[field] === "string" ? packageJson[field].trim() : "";
    if (!rawValue) continue;
    const parsed = parse ? parse(rawValue) : rawValue;
    if (parsed != null) return parsed;
  }
  return null;
}
function isSparkleDisabled(env: Environment): boolean {
  return env.CODEX_SPARKLE_ENABLED === "false";
}
function shouldIncludePlatformUpdater(
  buildFlavor: BuildFlavorValue,
  platform: Platform,
  targetPlatform: Platform,
  env: Environment,
): boolean {
  return (
    !isSparkleDisabled(env) &&
    releaseBuildFlavors.includes(buildFlavor) &&
    platform === targetPlatform
  );
}
function shouldIncludeWindowsUpdaterForFlavor(
  buildFlavor: BuildFlavorValue,
  platform: Platform,
  env: Environment,
): boolean {
  return shouldIncludePlatformUpdater(buildFlavor, platform, "win32", env);
}
function windowsUpdaterConfigForFlavor(
  buildFlavor: BuildFlavorValue,
): WindowsUpdaterConfig | null {
  return windowsUpdaterByFlavor[buildFlavor] ?? null;
}
const BuildFlavor = {
  ...sharedBuildFlavor,
  readFromPackageMetadata(): BuildFlavorValue | null {
    const value = readPackageMetadataField<BuildFlavorValue>(
      "codexBuildFlavor",
      {
        parse: (candidate) =>
          BuildFlavor.isValid(candidate) ? candidate : null,
      },
    );
    if (value) {
      buildFlavorLogger().debug("Resolved build flavor from package metadata", {
        safe: {
          value,
        },
        sensitive: {},
      });
      return value;
    }
    buildFlavorLogger().warning(
      "Missing codexBuildFlavor from package metadata",
    );
    return null;
  },
  resolve(): BuildFlavorValue {
    const envValue = process.env.BUILD_FLAVOR;
    const parsed = BuildFlavor.parse(envValue);
    if (parsed) {
      buildFlavorLogger().info("Resolved build flavor from env", {
        safe: {
          value: parsed,
        },
        sensitive: {},
      });
      return parsed;
    }
    if (envValue?.trim()) {
      buildFlavorLogger().warning("Invalid BUILD_FLAVOR", {
        safe: {
          value: envValue,
          expected: BuildFlavor.help,
        },
        sensitive: {},
      });
    }
    return (
      BuildFlavor.readFromPackageMetadata() ??
      (process.env.NODE_ENV === "production"
        ? (buildFlavorLogger().warning(
            "BUILD_FLAVOR missing; defaulting to prod in production runtime",
          ),
          BuildFlavor.Prod)
        : (buildFlavorLogger().warning(
            "BUILD_FLAVOR missing; defaulting to dev in non-production runtime",
          ),
          BuildFlavor.Dev))
    );
  },
  assertMinAppServerVersionForReleaseBuild(
    buildFlavor: BuildFlavorValue,
    minAppServerVersion: string,
    env: Environment = process.env,
  ): void {
    if (
      env.CODEX_RELEASE_BUILD_FLAVOR != null &&
      !BuildFlavor.isInternal(buildFlavor) &&
      /-alpha(?:\.|$)/.test(minAppServerVersion)
    ) {
      throw Error(
        `MIN_APP_SERVER_VERSION cannot be an alpha version for public-beta or prod builds (received ${minAppServerVersion})`,
      );
    }
  },
  shouldIncludeSparkle(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env: Environment = process.env,
  ): boolean {
    return shouldIncludePlatformUpdater(buildFlavor, platform, "darwin", env);
  },
  shouldIncludeWindowsUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env: Environment = process.env,
  ): boolean {
    return (
      shouldIncludeWindowsUpdaterForFlavor(buildFlavor, platform, env) &&
      windowsUpdaterConfigForFlavor(buildFlavor) != null
    );
  },
  shouldIncludeWindowsMsixUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env: Environment = process.env,
  ): boolean {
    return (
      shouldIncludeWindowsUpdaterForFlavor(buildFlavor, platform, env) &&
      windowsUpdaterConfigForFlavor(buildFlavor)?.kind === "msix"
    );
  },
  shouldIncludeBrowserUsePeerAuthorization(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
  ): boolean {
    return platform === "darwin" && releaseBuildFlavors.includes(buildFlavor);
  },
  shouldIncludeUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env: Environment = process.env,
  ): boolean {
    return (
      BuildFlavor.shouldIncludeSparkle(buildFlavor, platform, env) ||
      BuildFlavor.shouldIncludeWindowsUpdater(buildFlavor, platform, env)
    );
  },
  getWindowsStoreConfig(
    buildFlavor: BuildFlavorValue,
  ): WindowsStoreConfig | null {
    const config = windowsUpdaterConfigForFlavor(buildFlavor);
    return config?.kind === "store"
      ? {
          storeProductId: config.storeProductId,
          storeUpdateManifestUrl: config.storeUpdateManifestUrl,
        }
      : null;
  },
  allowDevtools(buildFlavor: BuildFlavorValue): boolean {
    return BuildFlavor.isInternal(buildFlavor);
  },
} as BuildFlavorApi & {
  readFromPackageMetadata(): BuildFlavorValue | null;
  resolve(): BuildFlavorValue;
  assertMinAppServerVersionForReleaseBuild(
    buildFlavor: BuildFlavorValue,
    minAppServerVersion: string,
    env?: Environment,
  ): void;
  shouldIncludeSparkle(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env?: Environment,
  ): boolean;
  shouldIncludeWindowsUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env?: Environment,
  ): boolean;
  shouldIncludeWindowsMsixUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env?: Environment,
  ): boolean;
  shouldIncludeBrowserUsePeerAuthorization(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
  ): boolean;
  shouldIncludeUpdater(
    buildFlavor: BuildFlavorValue,
    platform: Platform,
    env?: Environment,
  ): boolean;
  getWindowsStoreConfig(
    buildFlavor: BuildFlavorValue,
  ): WindowsStoreConfig | null;
  allowDevtools(buildFlavor: BuildFlavorValue): boolean;
};
function shouldUseOwlAppShell(
  platform: Platform = process.platform,
  env: Environment = process.env,
): boolean {
  return platform !== "linux" && env.CODEX_USE_OWL_APP_SHELL !== "0";
}
function bundleIdentifierForBuildFlavor(buildFlavor: BuildFlavorValue): string {
  switch (buildFlavor) {
    case BuildFlavor.Agent:
      return "com.openai.codex.agent";
    case BuildFlavor.Dev:
      return "com.openai.codex.dev";
    case BuildFlavor.Nightly:
      return "com.openai.codex.nightly";
    case BuildFlavor.InternalAlpha:
      return "com.openai.codex.alpha";
    case BuildFlavor.PublicBeta:
      return "com.openai.codex.beta";
    case BuildFlavor.Prod:
      return "com.openai.codex";
    default:
      return "com.openai.codex";
  }
}
function resolveLogRootDir(
  buildFlavor?: BuildFlavorValue | null,
  platform: Platform = process.platform,
): string {
  const env = process.env;
  const homeDir = os.homedir();
  if (platform === "darwin") {
    return path.join(
      homeDir,
      "Library",
      "Logs",
      bundleIdentifierForBuildFlavor(buildFlavor ?? BuildFlavor.resolve()),
    );
  }
  if (platform === "win32") {
    return path.join(
      env.LOCALAPPDATA ?? path.join(homeDir, "AppData", "Local"),
      "Codex",
      "Logs",
    );
  }
  if (platform === "linux") {
    return path.join(
      env.XDG_STATE_HOME ?? path.join(homeDir, ".local", "state"),
      "codex",
      "logs",
    );
  }
  return path.join(homeDir, ".codex", "logs");
}
export { BuildFlavor };
