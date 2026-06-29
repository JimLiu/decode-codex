// Restored from ref/.vite/build/main-r5HnecX_.js
// Safe path helpers for bundled plugin cache roots.

import type { ExecutionHostPath } from "./types";

export function getBundledPluginCacheRoot({
  bundledPluginName,
  codexHome,
  executionHostPath,
  marketplaceName,
}: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath,
    label: "bundled plugin cache",
    path: bundledPluginName,
    root: executionHostPath.join(
      codexHome,
      "plugins",
      "cache",
      marketplaceName,
    ),
  });
}

export function getBundledPluginCacheVersionRoot({
  version,
  ...cacheOptions
}: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
  version: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath: cacheOptions.executionHostPath,
    label: "bundled plugin cache version",
    path: version,
    root: getBundledPluginCacheRoot(cacheOptions),
  });
}

export function getBundledPluginLatestCacheRoot(cacheOptions: {
  bundledPluginName: string;
  codexHome: string;
  executionHostPath: ExecutionHostPath;
  marketplaceName: string;
}): string {
  return safeExecutionHostPath({
    executionHostPath: cacheOptions.executionHostPath,
    label: "bundled plugin latest cache",
    path: "latest",
    root: getBundledPluginCacheRoot(cacheOptions),
  });
}

export function isInsideExecutionHostRoot({
  executionHostPath,
  path,
  root,
}: {
  executionHostPath: ExecutionHostPath;
  path: string;
  root: string;
}): boolean {
  const normalizedRoot = executionHostPath.join(root);
  const normalizedPath = executionHostPath.join(path);
  return (
    normalizedPath === normalizedRoot ||
    normalizedPath.startsWith(`${normalizedRoot}/`) ||
    normalizedPath.startsWith(`${normalizedRoot}\\`)
  );
}

function safeExecutionHostPath({
  executionHostPath,
  label,
  path,
  root,
}: {
  executionHostPath: ExecutionHostPath;
  label: string;
  path: string;
  root: string;
}): string {
  if (path.length === 0 || path === "." || path === "..") {
    throw Error(`${label} path must be a single path segment`);
  }
  if (path.includes("/") || path.includes("\\")) {
    throw Error(`${label} path must not contain separators`);
  }
  return executionHostPath.join(root, path);
}
