// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// MCP capability file-viewer matching and resource adapters.
import { getPathBasename } from "../../runtime/publication-terms-runtime";
import type {
  McpCapabilityFileViewer,
  McpFileViewerReadContents,
  McpHostResourceReader,
} from "./resource-opener-types";

export const mcpCapabilityFileViewerState = Symbol.for(
  "codex.restored.mcp-capability-file-viewers",
);

export function initMcpResourceReadParamsChunk(): void {}

export function findMatchingMcpCapabilityFileViewer(
  path: string,
  fileViewers: readonly unknown[],
) {
  const normalizedPath = path.toLowerCase();
  let bestViewer: McpCapabilityFileViewer | null = null;
  let bestLength = 0;

  for (const fileViewer of fileViewers) {
    const extensions = getFileViewerExtensions(fileViewer);
    for (const extension of extensions) {
      const normalizedExtension = extension
        .trim()
        .replace(/^\.+/u, "")
        .toLowerCase();
      if (
        normalizedExtension.length > 0 &&
        normalizedPath.endsWith(`.${normalizedExtension}`) &&
        normalizedExtension.length > bestLength
      ) {
        bestViewer = fileViewer as McpCapabilityFileViewer;
        bestLength = normalizedExtension.length;
      }
    }
  }

  return bestViewer;
}

export function createFileViewerToolArguments(
  path: string,
  resourceUri: string,
) {
  return { file: { name: getPathBasename(path), resourceUri } };
}

export function createMcpFileViewerHostResource({
  fileViewer,
  path,
  readContents,
  resourceUri,
}: {
  fileViewer: McpCapabilityFileViewer;
  path: string;
  readContents: McpFileViewerReadContents;
  resourceUri: string;
}): McpHostResourceReader {
  return async (resource) => {
    if (!isGeneratedMcpResourceUri(resource.uri, resourceUri)) return null;
    return {
      extension: getFileViewerExtensionForPath(path, fileViewer),
      ...(await readContents(parseMcpResourceRepresentation(resource._meta))),
    };
  };
}

function getFileViewerExtensions(fileViewer: unknown) {
  if (fileViewer == null || typeof fileViewer !== "object") return [];
  const extensions = (fileViewer as { extensions?: unknown }).extensions;
  return Array.isArray(extensions)
    ? extensions.filter(
        (extension): extension is string => typeof extension === "string",
      )
    : [];
}

function parseMcpResourceRepresentation(
  meta: unknown,
): "auto" | "blob" | "text" {
  const representation =
    meta != null && typeof meta === "object"
      ? (meta as { "openai/resource"?: { representation?: unknown } })[
          "openai/resource"
        ]?.representation
      : undefined;
  if (representation == null) return "auto";
  if (representation === "blob" || representation === "text")
    return representation;
  throw Object.assign(Error("Invalid MCP resource read params"), {
    code: -32602,
  });
}

function isGeneratedMcpResourceUri(uri: string, resourceUri: string) {
  return (
    resourceUri.startsWith("codex-resource://") &&
    (uri === resourceUri || uri.startsWith(`${resourceUri}/`))
  );
}

function getFileViewerExtensionForPath(
  path: string,
  fileViewer: McpCapabilityFileViewer,
) {
  const normalizedPath = path.toLowerCase();
  return (
    getFileViewerExtensions(fileViewer)
      .map((extension) => extension.trim().replace(/^\.+/u, "").toLowerCase())
      .filter((extension) => normalizedPath.endsWith(`.${extension}`))
      .sort((left, right) => right.length - left.length)[0] ?? ""
  );
}
