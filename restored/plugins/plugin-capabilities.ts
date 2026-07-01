// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Aggregates a conversation's used capabilities (skills, connectors, plugins)
// into a bounded, sorted summary for telemetry/UI. Catalog (first-party /
// marketplace) capabilities are de-duplicated by (type, origin, catalogId);
// everything else is rolled up into a single "custom" bucket per type, with a
// distinct-count. The catalog list is truncated to keep the total under a cap.

import {
  bundledMarketplaceName,
  curatedMarketplaceName,
  curatedRemoteMarketplaceName,
  firstPartyBundledAppNameA,
  firstPartyBundledAppNameB,
  firstPartyBundledAppNameC,
  firstPartyBundledAppNameD,
  firstPartyBundledAppNameE,
  firstPartyBundledAppNameF,
  firstPartyBundledAppNameG,
  isCodexAppsServer,
  resolveCatalogAppIdForMcpTool,
} from "../boundaries/onboarding-commons-externals.facade";

type CapabilityType = "skill" | "connector" | "plugin";
type CapabilityOrigin = "firstParty" | "marketplace" | "custom";
type CatalogDistribution = "firstParty" | "marketplace";

interface Capability {
  capabilityType: CapabilityType;
  origin: CapabilityOrigin;
  catalogId?: string;
  customDistinctCount?: number;
}

interface CapabilitySkill {
  privateIdentity: string;
  isSystem?: boolean;
  pluginId?: string | null;
  pluginMarketplaceName?: string | null;
}

interface CapabilityPlugin {
  id: string;
  name?: string;
  marketplaceName?: string;
  remotePluginId?: string | null;
  isAvailable?: boolean;
  isRemoteCatalogEntry?: boolean;
}

interface CapabilityApp {
  id: string;
  appMetadata?: { firstPartyType?: string } | null;
  distributionChannel?: string;
}

interface CapabilityToolCall {
  server: string;
  tool: string;
  pluginId?: string | null;
}

interface PluginCapabilityInputs {
  apps?: readonly CapabilityApp[] | null;
  catalogSkills?: readonly { privateIdentity: string }[] | null;
  mcpServerStatuses?: unknown;
  plugins?: readonly CapabilityPlugin[] | null;
  skills: readonly CapabilitySkill[];
  toolCalls: readonly CapabilityToolCall[];
}

interface PluginCapabilitiesResult {
  capabilities: Capability[];
  capabilitiesTruncated: boolean;
}

const MAX_CAPABILITIES = 100;
const CAPABILITY_TYPE_ORDER: CapabilityType[] = [
  "skill",
  "connector",
  "plugin",
];
const ORIGIN_ORDER: CapabilityOrigin[] = [
  "firstParty",
  "marketplace",
  "custom",
];

const FIRST_PARTY_MARKETPLACE_NAMES = new Set<string>([
  "codex-official",
  bundledMarketplaceName,
  "openai-primary-runtime",
]);

const RECOGNIZED_MARKETPLACE_NAMES = new Set<string>([
  ...FIRST_PARTY_MARKETPLACE_NAMES,
  curatedMarketplaceName,
  curatedRemoteMarketplaceName,
]);

const FIRST_PARTY_CATALOG_APP_IDS = new Set<string>([
  ...[
    firstPartyBundledAppNameA,
    firstPartyBundledAppNameB,
    firstPartyBundledAppNameC,
    firstPartyBundledAppNameD,
    firstPartyBundledAppNameE,
    firstPartyBundledAppNameF,
    firstPartyBundledAppNameG,
    "chrome",
    "chrome-dev",
  ].map((appName) => `${appName}@${bundledMarketplaceName}`),
  "documents@openai-primary-runtime",
  "pdf@openai-primary-runtime",
  "presentations@openai-primary-runtime",
  "spreadsheets@openai-primary-runtime",
]);

function classifyAppDistribution(
  app: CapabilityApp | null | undefined,
): CatalogDistribution | null {
  if (
    app?.appMetadata?.firstPartyType?.trim() ||
    app?.distributionChannel === "DEFAULT_OAI_CATALOG"
  )
    return "firstParty";
  if (app?.distributionChannel === "ECOSYSTEM_DIRECTORY") return "marketplace";
  return null;
}

function classifyPluginDistribution(
  plugin: CapabilityPlugin | null | undefined,
): CatalogDistribution | null {
  if (plugin == null || !plugin.isAvailable) return null;
  if (
    plugin.id === `${plugin.name}@${plugin.marketplaceName}` &&
    FIRST_PARTY_CATALOG_APP_IDS.has(plugin.id)
  )
    return "firstParty";
  if (
    !plugin.isRemoteCatalogEntry ||
    plugin.marketplaceName == null ||
    !RECOGNIZED_MARKETPLACE_NAMES.has(plugin.marketplaceName)
  )
    return null;
  return FIRST_PARTY_MARKETPLACE_NAMES.has(plugin.marketplaceName)
    ? "firstParty"
    : "marketplace";
}

function getPluginCatalogId(plugin: CapabilityPlugin): string {
  return plugin.isRemoteCatalogEntry
    ? (plugin.remotePluginId ?? plugin.id)
    : plugin.id;
}

function getPluginCapabilityId(
  plugin: CapabilityPlugin | null | undefined,
  pluginId: string,
  marketplaceName: string | null,
): string {
  return (
    plugin?.id ??
    (marketplaceName == null || pluginId.includes("@")
      ? pluginId
      : `${pluginId}@${marketplaceName}`)
  );
}

function compareCapabilities(a: Capability, b: Capability): number {
  const typeDelta =
    CAPABILITY_TYPE_ORDER.indexOf(a.capabilityType) -
    CAPABILITY_TYPE_ORDER.indexOf(b.capabilityType);
  if (typeDelta !== 0) return typeDelta;
  const originDelta =
    ORIGIN_ORDER.indexOf(a.origin) - ORIGIN_ORDER.indexOf(b.origin);
  if (originDelta !== 0) return originDelta;
  const aCatalogId = a.catalogId ?? "";
  const bCatalogId = b.catalogId ?? "";
  if (
    a.origin === "custom" ||
    b.origin === "custom" ||
    aCatalogId === bCatalogId
  )
    return 0;
  return aCatalogId < bCatalogId ? -1 : 1;
}

function aggregatePluginCapabilities({
  apps,
  catalogSkills,
  mcpServerStatuses,
  plugins,
  skills,
  toolCalls,
}: PluginCapabilityInputs): PluginCapabilitiesResult {
  const catalogCapabilityByKey = new Map<string, Capability>();
  const customIdsByType: Record<CapabilityType, Set<string>> = {
    skill: new Set(),
    connector: new Set(),
    plugin: new Set(),
  };

  const addCatalogCapability = (
    capabilityType: CapabilityType,
    origin: CatalogDistribution,
    catalogId: string,
  ): void => {
    catalogCapabilityByKey.set(`${capabilityType}\0${origin}\0${catalogId}`, {
      capabilityType,
      origin,
      catalogId,
    });
  };

  const addCustomCapability = (
    capabilityType: CapabilityType,
    distinctId: string,
  ): void => {
    customIdsByType[capabilityType].add(distinctId);
  };

  for (const skill of skills) {
    addCustomCapability("skill", skill.privateIdentity);
    if (skill.isSystem || skill.pluginId == null) continue;
    const isCatalogSkill = catalogSkills?.some(
      (candidate) => candidate.privateIdentity === skill.privateIdentity,
    );
    const plugin = plugins?.find(
      ({ id, marketplaceName, name }) =>
        marketplaceName === skill.pluginMarketplaceName &&
        (name === skill.pluginId || id === skill.pluginId),
    );
    const distribution = classifyPluginDistribution(plugin);
    if (!isCatalogSkill || plugin == null || distribution == null) {
      addCustomCapability(
        "plugin",
        getPluginCapabilityId(
          plugin,
          skill.pluginId,
          skill.pluginMarketplaceName ?? null,
        ),
      );
      continue;
    }
    addCatalogCapability("plugin", distribution, getPluginCatalogId(plugin));
  }

  for (const toolCall of toolCalls) {
    if (isCodexAppsServer(toolCall.server)) {
      const catalogAppId: string | null = resolveCatalogAppIdForMcpTool({
        mcpServerStatuses,
        server: toolCall.server,
        tool: toolCall.tool,
      });
      const app = apps?.find((candidate) => candidate.id === catalogAppId);
      const appDistribution = classifyAppDistribution(app);
      if (catalogAppId != null && appDistribution != null)
        addCatalogCapability("connector", appDistribution, catalogAppId);
      else
        addCustomCapability(
          "connector",
          catalogAppId ?? `${toolCall.server}\0${toolCall.tool}`,
        );
    } else if (toolCall.pluginId == null) {
      addCustomCapability("connector", toolCall.server);
    }
    if (toolCall.pluginId != null) {
      const plugin = plugins?.find(
        ({ id, remotePluginId }) =>
          id === toolCall.pluginId || remotePluginId === toolCall.pluginId,
      );
      const distribution = classifyPluginDistribution(plugin);
      if (plugin != null && distribution != null)
        addCatalogCapability(
          "plugin",
          distribution,
          getPluginCatalogId(plugin),
        );
      else
        addCustomCapability(
          "plugin",
          getPluginCapabilityId(plugin, toolCall.pluginId, null),
        );
    }
  }

  const customCapabilities: Capability[] = CAPABILITY_TYPE_ORDER.filter(
    (capabilityType) => customIdsByType[capabilityType].size > 0,
  ).map((capabilityType) => ({
    capabilityType,
    origin: "custom",
    customDistinctCount: customIdsByType[capabilityType].size,
  }));

  const catalogCapabilities = Array.from(catalogCapabilityByKey.values()).sort(
    compareCapabilities,
  );
  const catalogLimit = MAX_CAPABILITIES - customCapabilities.length;

  return {
    capabilities: [
      ...catalogCapabilities.slice(0, catalogLimit),
      ...customCapabilities,
    ].sort(compareCapabilities),
    capabilitiesTruncated: catalogCapabilities.length > catalogLimit,
  };
}
