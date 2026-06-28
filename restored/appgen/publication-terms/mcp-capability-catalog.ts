// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// MCP app capability catalog and entrypoint derivation.
import { once } from "../../runtime/commonjs-interop";
import { sendHostRequest } from "../../runtime/publication-terms-runtime";
import { getMcpServerLogo, initMcpServerLogoHelpers } from "./mcp-server-logo";
import type { McpCapabilityFileViewer } from "./resource-opener-types";

const MCP_SERVER_STATUS_PAGE_LIMIT = 100;

export const localMcpCapabilityCatalogState = Symbol.for(
  "codex.restored.local-mcp-capability-catalog",
);
export const mcpCapabilityMentionServersByHostState = Symbol.for(
  "codex.restored.mcp-capability-mention-servers-by-host",
);
export const localMcpCapabilityMentionServersState = Symbol.for(
  "codex.restored.local-mcp-capability-mention-servers",
);
export const mcpCapabilityFileViewersByHostState = Symbol.for(
  "codex.restored.mcp-capability-file-viewers-by-host",
);
export const localMcpCapabilityFileViewersState = Symbol.for(
  "codex.restored.local-mcp-capability-file-viewers",
);
export const mcpCapabilityEntryPointsState = Symbol.for(
  "codex.restored.mcp-capability-entrypoints",
);
export const globalMcpCapabilityEntryPointsState = Symbol.for(
  "codex.restored.global-mcp-capability-entrypoints",
);

type McpToolLike = {
  annotations?: { title?: string };
  inputSchema?: unknown;
  name: string;
  title?: string;
  _meta?: Record<string, unknown>;
};

type McpServerStatus = {
  name: string;
  serverInfo?: {
    icons?: unknown[];
    name?: string;
    title?: string;
  };
  tools?: Record<string, unknown>;
};

type McpUiEntrypoint =
  | { type: "global" | "thread" }
  | { type: "file"; extensions: string[] };

export type McpCapabilityMentionServer = {
  mentionSearchTool: string;
  server: string;
  title: string;
};

export type McpCapabilityEntrypoint = {
  entrypoint: "global" | "thread";
  hostId: string;
  icon: ReturnType<typeof getMcpServerLogo>;
  resourceUri: string;
  server: string;
  serverTools: McpToolLike[];
  title: string;
  tool: McpToolLike;
};

export const initMcpCapabilityCatalogChunk = once(() => {
  initMcpServerLogoHelpers();
});

export async function readMcpCapabilityCatalog(hostId: string) {
  return (await readMcpServerStatusPages(hostId)).map(
    ({ name, serverInfo, tools }) => ({
      hostId,
      icon: getMcpServerLogo(serverInfo),
      server: name,
      tools: parseServerTools(tools),
    }),
  );
}

export async function readMcpCapabilityMentionServers(hostId: string) {
  return (await readMcpServerStatusPages(hostId)).flatMap(
    ({ name, serverInfo, tools }) =>
      parseServerTools(tools)
        .filter(hasMentionSearchCapability)
        .map((tool) => ({
          mentionSearchTool: tool.name,
          server: name,
          title: getMentionServerTitle(tool, serverInfo, name),
        })),
  );
}

export function collectMcpCapabilityFileViewers(
  catalog: Awaited<ReturnType<typeof readMcpCapabilityCatalog>>,
) {
  return catalog.flatMap(({ hostId, icon, server, tools }) =>
    tools.flatMap((tool) => {
      const extensions = getMcpUiEntrypoints(tool).flatMap((entrypoint) =>
        entrypoint.type === "file" ? entrypoint.extensions : [],
      );
      const resourceUri = getToolResourceUri(tool);
      return extensions.length === 0 ||
        resourceUri == null ||
        !isVisibleToApp(tool)
        ? []
        : [
            {
              extensions,
              hostId,
              icon,
              resourceUri,
              server,
              serverTools: tools,
              title: getToolTitle(tool),
              tool,
            } satisfies McpCapabilityFileViewer,
          ];
    }),
  );
}

export function collectMcpCapabilityEntrypoints(
  catalog: Awaited<ReturnType<typeof readMcpCapabilityCatalog>>,
) {
  return catalog.flatMap(({ hostId, icon, server, tools }) =>
    tools.flatMap((tool) => {
      const resourceUri = getToolResourceUri(tool);
      if (resourceUri == null || !isVisibleToApp(tool)) return [];

      return getMcpUiEntrypoints(tool).flatMap((entrypoint) =>
        entrypoint.type === "file"
          ? []
          : [
              {
                entrypoint: entrypoint.type,
                hostId,
                icon,
                resourceUri,
                server,
                serverTools: tools,
                title: getToolTitle(tool),
                tool,
              } satisfies McpCapabilityEntrypoint,
            ],
      );
    }),
  );
}

async function readMcpServerStatusPages(
  hostId: string,
  cursor: string | null = null,
): Promise<McpServerStatus[]> {
  const response = (await sendHostRequest("list-mcp-server-status", {
    cursor,
    detail: "toolsAndAuthOnly",
    hostId,
    limit: MCP_SERVER_STATUS_PAGE_LIMIT,
  })) as {
    data?: McpServerStatus[];
    nextCursor?: string | null;
  };
  const data = Array.isArray(response.data) ? response.data : [];
  return response.nextCursor == null
    ? data
    : [
        ...data,
        ...(await readMcpServerStatusPages(hostId, response.nextCursor)),
      ];
}

function parseServerTools(tools: unknown): McpToolLike[] {
  if (tools == null || typeof tools !== "object") return [];
  return Object.values(tools as Record<string, unknown>).flatMap((tool) =>
    isMcpTool(tool) ? [tool] : [],
  );
}

function isMcpTool(value: unknown): value is McpToolLike {
  return (
    value != null &&
    typeof value === "object" &&
    typeof (value as { name?: unknown }).name === "string"
  );
}

function getMcpUiEntrypoints(tool: McpToolLike): McpUiEntrypoint[] {
  const openAiUi = tool._meta?.["openai/ui"];
  if (openAiUi == null || typeof openAiUi !== "object") return [];

  const entrypoints = (openAiUi as { entrypoints?: unknown }).entrypoints;
  if (!Array.isArray(entrypoints)) return [];
  return entrypoints.flatMap((entrypoint) => {
    if (entrypoint == null || typeof entrypoint !== "object") return [];
    const type = (entrypoint as { type?: unknown }).type;
    if (type === "global" || type === "thread") return [{ type }];
    if (type !== "file") return [];

    const extensions = (entrypoint as { extensions?: unknown }).extensions;
    return Array.isArray(extensions)
      ? [
          {
            type,
            extensions: extensions.filter(
              (extension): extension is string =>
                typeof extension === "string" && extension.trim().length > 0,
            ),
          },
        ]
      : [];
  });
}

function getToolResourceUri(tool: McpToolLike) {
  const ui = tool._meta?.ui;
  const uri =
    ui != null && typeof ui === "object"
      ? (ui as { resourceUri?: unknown }).resourceUri
      : tool._meta?.["ui/resourceUri"];
  if (uri === undefined) return null;
  if (typeof uri === "string" && uri.startsWith("ui://")) return uri;
  return null;
}

function hasMentionSearchCapability(tool: McpToolLike) {
  const capabilities = tool._meta?.["openai/capabilities"];
  return (
    capabilities != null &&
    typeof capabilities === "object" &&
    (capabilities as { "mentions/search"?: unknown })["mentions/search"] != null
  );
}

function isVisibleToApp(tool: McpToolLike) {
  const visibility =
    tool._meta?.ui != null && typeof tool._meta.ui === "object"
      ? (tool._meta.ui as { visibility?: unknown }).visibility
      : undefined;
  return Array.isArray(visibility) && visibility.includes("app");
}

function getToolTitle(tool: McpToolLike) {
  return tool.title ?? tool.annotations?.title ?? tool.name;
}

function getMentionServerTitle(
  tool: McpToolLike,
  serverInfo: McpServerStatus["serverInfo"],
  serverName: string,
) {
  const connectorName = tool._meta?.connector_name;
  return typeof connectorName === "string" && connectorName.trim().length > 0
    ? connectorName.trim()
    : (serverInfo?.title ?? serverInfo?.name ?? serverName);
}
