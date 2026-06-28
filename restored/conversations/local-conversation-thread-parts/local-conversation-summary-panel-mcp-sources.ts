// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// MCP tool-source summaries for the local conversation summary panel model.
import { once } from "../../runtime/commonjs-interop";
import {
  formatIdentifierTitle,
  getAppToolSourceMetadata,
  initAppToolSourceRuntime,
  initMcpAppIdHelpers,
  parseMcpAppIdFromToolCallId,
} from "../../runtime/app-tool-source-runtime";
import {
  getMcpServerLogo,
  initMcpServerLogoHelpers,
} from "../../appgen/publication-terms";

type ConversationTurnItem = {
  id: string;
  server?: string;
  tool?: string;
  type: string;
};

type ConversationTurn = {
  items: ConversationTurnItem[];
};

type McpServerMetadata = {
  logoUrl: string | null;
  logoUrlDark: string | null;
  name: string | null;
};

type McpServersQuery = {
  data?: Array<{
    name: string;
    serverInfo?: {
      logoDarkUrl?: string | null;
      logoUrl?: string | null;
      name: string;
      title?: string | null;
    } | null;
  }>;
};

export type McpToolSourceSummary = {
  id: string;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  mcpAppId?: string;
  name: string;
  pluginDisplayNames: string[];
};

export function collectConversationMcpToolSources(
  turns: readonly ConversationTurn[],
  apps: readonly unknown[],
  installedMcpAppIds: Set<string> | null | undefined,
  mcpServersQuery: McpServersQuery | null,
): McpToolSourceSummary[] {
  let toolSources: McpToolSourceSummary[] = [],
    toolSourcesById = new Map<string, McpToolSourceSummary>(),
    serverMetadataByName = buildMcpServerMetadataByName(mcpServersQuery);

  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
      let item = turn.items[itemIndex];
      if (item.type !== "mcpToolCall" || item.server === "node_repl") continue;

      let toolSource = getMcpToolSourceSummary(
          item,
          apps,
          serverMetadataByName,
        ),
        mcpAppId = parseMcpAppIdFromToolCallId(item.id),
        installedMcpAppId =
          typeof mcpAppId === "string" &&
          installedMcpAppIds?.has(mcpAppId) === true
            ? mcpAppId
            : undefined,
        existingToolSource = toolSourcesById.get(toolSource.id);

      if (existingToolSource != null) {
        if (existingToolSource.mcpAppId == null && installedMcpAppId != null) {
          existingToolSource.mcpAppId = installedMcpAppId;
        }
        continue;
      }

      toolSource.mcpAppId = installedMcpAppId;
      toolSourcesById.set(toolSource.id, toolSource);
      toolSources.push(toolSource);
    }
  }

  return toolSources;
}

function buildMcpServerMetadataByName(mcpServersQuery: McpServersQuery | null) {
  let metadataByName = new Map<string, McpServerMetadata>();

  for (let serverRegistration of mcpServersQuery?.data ?? []) {
    let serverInfo = serverRegistration.serverInfo;
    if (serverInfo == null) continue;

    let serverLogo = getMcpServerLogo(serverInfo),
      displayName = serverInfo.title?.trim() || serverInfo.name.trim() || null;
    if (serverLogo == null && displayName == null) continue;

    let metadata: McpServerMetadata = {
      logoUrl: serverLogo?.logoUrl ?? null,
      logoUrlDark: serverLogo?.logoDarkUrl ?? null,
      name: displayName,
    };

    for (let serverName of [serverRegistration.name, serverInfo.name]) {
      let lookupKey = normalizeMcpServerLookupKey(serverName);
      if (lookupKey.length > 0 && !metadataByName.has(lookupKey)) {
        metadataByName.set(lookupKey, metadata);
      }
    }
  }

  return metadataByName;
}

function normalizeMcpServerLookupKey(serverName: string | null | undefined) {
  return serverName?.trim().toLowerCase() ?? "";
}

function getMcpToolSourceSummary(
  item: ConversationTurnItem,
  apps: readonly unknown[],
  serverMetadataByName: Map<string, McpServerMetadata>,
): McpToolSourceSummary {
  let appToolSource = getAppToolSourceMetadata({
    apps,
    functionName: `${item.server}__${item.tool}`,
    serverName: item.server,
    toolName: item.tool,
  });

  if (appToolSource != null)
    return {
      id: appToolSource.id,
      name: appToolSource.name,
      pluginDisplayNames: appToolSource.pluginDisplayNames ?? [],
      logoUrl: appToolSource.logoUrl,
      logoUrlDark: appToolSource.logoUrlDark,
    };

  let serverMetadata = serverMetadataByName.get(
    normalizeMcpServerLookupKey(item.server),
  );
  return {
    id: `mcp-server:${item.server}`,
    name: serverMetadata?.name ?? formatIdentifierTitle(item.server ?? ""),
    pluginDisplayNames: [],
    logoUrl: serverMetadata?.logoUrl ?? null,
    logoUrlDark: serverMetadata?.logoUrlDark ?? null,
  };
}

export const initLocalConversationSummaryPanelMcpSources = once(() => {
  initMcpAppIdHelpers();
  initAppToolSourceRuntime();
  initMcpServerLogoHelpers();
});
