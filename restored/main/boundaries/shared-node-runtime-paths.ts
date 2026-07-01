// Restored from ref/.vite/build/src-CoIhwwHr.js
// Path, plugin id, error, and Codex deep-link helpers.

export function normalizePathSeparators(value: string): string {
  return value.replace(/\\/g, "/");
}

const windowsDrivePath = /^[A-Za-z]:[\\/]/;
const slashPrefixedWindowsDrivePath = /^\/[A-Za-z]:[\\/]/;
const windowsUncPath = /^\\\\[^\\]+\\[^\\]+/;
const posixUncPath = /^\/\/[^/]+\/[^/]+/;

export function isUncPath(value: string): boolean {
  return windowsUncPath.test(value) || posixUncPath.test(value);
}

export function isAbsoluteFilePath(value: string): boolean {
  return (
    (value.startsWith("/") && !value.startsWith("//")) ||
    windowsDrivePath.test(value) ||
    isUncPath(value)
  );
}

export function stripLeadingSlashFromWindowsDrivePath(value: string): string {
  return slashPrefixedWindowsDrivePath.test(value) ? value.slice(1) : value;
}

export function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  if (typeof error === "string") return Error(error);
  if (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return Error(error.message);
  }
  try {
    return Error(JSON.stringify(error));
  } catch {
    return Error(String(error));
  }
}

export const pluginManagePermission = "manage";

const pluginIdPattern =
  /^(plugins_[0-9a-f]{32}|(?:plugins~)?Plugin_[0-9a-f]{32}|plugin_[A-Za-z0-9][A-Za-z0-9_-]{0,247})$/;

export function parsePluginIdentifier(pluginName: string): string | null {
  return pluginIdPattern.test(pluginName) ? pluginName : null;
}

export function isSafePathSegment(value: string | undefined): boolean {
  return (
    value != null &&
    value.length > 0 &&
    !value.includes("/") &&
    !value.includes("\\") &&
    value !== "." &&
    value !== ".."
  );
}

export function parseCodexThreadDeepLink(
  input: URL | string,
  { allowExtraPathSegments = false }: { allowExtraPathSegments?: boolean } = {},
): {
  conversationId: string;
  openReview?: boolean;
  reviewDiffFilter?: "branch" | "last-turn";
  reviewPath?: string;
} | null {
  let url: URL;
  try {
    url = typeof input === "string" ? new URL(input) : input;
  } catch {
    return null;
  }
  const [conversationId, ...extraPathSegments] = url.pathname
    .split("/")
    .filter(Boolean);
  if (
    url.protocol !== "codex:" ||
    url.host !== "threads" ||
    !conversationId ||
    (!allowExtraPathSegments && extraPathSegments.length > 0)
  ) {
    return null;
  }
  if (url.searchParams.get("view") !== "review") return { conversationId };
  const diffFilter = url.searchParams.get("diffFilter");
  if (diffFilter == null) {
    return { conversationId, openReview: true };
  }
  if (diffFilter !== "branch" && diffFilter !== "last-turn") return null;
  return {
    conversationId,
    openReview: true,
    reviewDiffFilter: diffFilter,
    reviewPath: url.searchParams.get("path") ?? undefined,
  };
}
