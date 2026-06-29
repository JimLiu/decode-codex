// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Assembles the `codex_app` MCP tool namespace exposed to the model: gates each
// tool behind host/feature checks, loads model guidance for the thread tools,
// and marks tools that should be deferred until first use (localConversation
// domain).
import { buildThreadTools } from "./thread-management-tool-definitions";
import {
  isLocalHost,
  filterAvailableModels,
  readFeatureGateById,
  settingsToolNamespaceEntries,
  buildOpenInCodexTool,
  buildNavigateToCodexPageTool,
  alwaysAvailableCodexTool,
  experimentalFileToolDefinition,
  experimentalToolPair,
  conversationalOnboardingTool,
  speakToUserToolDefinitions,
  speakToUserToolDefinition,
  showExperimentalFileToolFeatureKey,
  threadToolsFeatureKey,
  speakToUserFeatureKey,
  nonDeferredCodexToolNames,
} from "../boundaries/onboarding-commons-externals.facade";

export const CODEX_APP_TOOL_NAMESPACE = "codex_app";

const EXPERIMENTAL_FEATURES_PAGE_SIZE = 100;
const MODELS_PAGE_SIZE = 100;
const MODEL_GUIDANCE_TIMEOUT_MS = 1_000;

type ModelGuidance = { model: string; description: string };

type ModelsPage = {
  data: ModelGuidance[];
  nextCursor: string | null;
};

type ListModels = (params: {
  cursor: string | null;
  includeHidden?: boolean;
  limit: number;
}) => Promise<ModelsPage>;

type ListExperimentalFeatures = (params: {
  cursor: string | null;
  limit: number;
}) => Promise<{ data: unknown[]; nextCursor: string | null }>;

type BuildCodexAppToolNamespaceOptions = {
  availableHandoffHosts: any;
  authMethod: any;
  crossHostHandoffEnabled?: boolean;
  enabledReasoningEfforts: any;
  featureOverrides?: Record<string, boolean>;
  hostId: string;
  includeUltraReasoningEffort: boolean;
  isAuthLoading: boolean;
  listExperimentalFeatures: ListExperimentalFeatures;
  listModels: ListModels;
  modelAvailabilityConfig: any;
  navigateToCodexPageEnabled?: boolean;
  speakToUserEnabled?: boolean;
  speakToUserToolDescription?: string;
  threadStartKind?: string;
};

export async function buildCodexAppToolNamespace({
  availableHandoffHosts,
  authMethod,
  crossHostHandoffEnabled = false,
  enabledReasoningEfforts,
  featureOverrides,
  hostId,
  includeUltraReasoningEffort,
  isAuthLoading,
  listExperimentalFeatures,
  listModels,
  modelAvailabilityConfig,
  navigateToCodexPageEnabled = true,
  speakToUserEnabled = false,
  speakToUserToolDescription,
  threadStartKind = "default",
}: BuildCodexAppToolNamespaceOptions) {
  const isLocal = isLocalHost(hostId);
  const threadToolsEnabled = featureOverrides?.[threadToolsFeatureKey] === true;
  const speakToUserGateEnabled =
    featureOverrides?.[speakToUserFeatureKey] === true;
  const experimentalFileToolEnabled =
    featureOverrides?.[showExperimentalFileToolFeatureKey] === true;

  const [experimentalFileToolVisible, availableModels] = await Promise.all([
    isLocal
      ? hasAnyExperimentalFeature(listExperimentalFeatures)
      : Promise.resolve(false),
    threadToolsEnabled
      ? loadThreadToolModelGuidance({
          authMethod,
          enabledReasoningEfforts,
          includeUltraReasoningEffort,
          isAuthLoading,
          listModels,
          modelAvailabilityConfig,
        })
      : Promise.resolve([]),
  ]);

  return [
    {
      type: "namespace",
      name: CODEX_APP_TOOL_NAMESPACE,
      description: "Tools provided by the Codex app.",
      tools: [
        ...(isLocal ? [settingsToolNamespaceEntries()] : []),
        ...(featureOverrides?.open_in_codex === true
          ? [buildOpenInCodexTool]
          : []),
        ...(isLocal && navigateToCodexPageEnabled
          ? [buildNavigateToCodexPageTool]
          : []),
        alwaysAvailableCodexTool,
        ...(isLocal && experimentalFileToolVisible
          ? [experimentalFileToolDefinition]
          : []),
        ...(threadToolsEnabled
          ? buildThreadTools({
              availableHandoffHosts,
              availableModels,
              crossHostHandoffEnabled,
              forkThreadEnabled: true,
            })
          : []),
        ...(isLocal && experimentalFileToolEnabled ? experimentalToolPair : []),
        ...(threadStartKind === "conversational_onboarding"
          ? [conversationalOnboardingTool]
          : []),
        ...(speakToUserEnabled &&
        threadStartKind !== "conversational_onboarding"
          ? [...speakToUserToolDefinitions, speakToUserToolDefinition]
          : []),
      ].map((tool: any) => ({
        type: "function",
        ...tool,
        ...(nonDeferredCodexToolNames.has(tool.name)
          ? {}
          : { deferLoading: true }),
      })),
    },
  ];
}

async function loadThreadToolModelGuidance({
  authMethod,
  enabledReasoningEfforts,
  includeUltraReasoningEffort,
  isAuthLoading,
  listModels,
  modelAvailabilityConfig,
}: {
  authMethod: any;
  enabledReasoningEfforts: any;
  includeUltraReasoningEffort: boolean;
  isAuthLoading: boolean;
  listModels: ListModels;
  modelAvailabilityConfig: any;
}): Promise<ModelGuidance[]> {
  if (isAuthLoading) return [];
  try {
    const rawModels = await loadAllModelsWithTimeout(listModels);
    const { models } = filterAvailableModels({
      authMethod,
      availableModels: modelAvailabilityConfig.availableModels,
      defaultModel: modelAvailabilityConfig.defaultModel,
      enabledReasoningEfforts,
      includeUltraReasoningEffort,
      models: rawModels,
      useHiddenModels: modelAvailabilityConfig.useHiddenModels,
    });
    return models;
  } catch {
    return [];
  }
}

function loadAllModelsWithTimeout(
  listModels: ListModels,
): Promise<ModelGuidance[]> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Timed out loading thread tool model guidance."));
    }, MODEL_GUIDANCE_TIMEOUT_MS);
    loadAllModels(listModels)
      .then(resolve, reject)
      .finally(() => {
        clearTimeout(timeoutId);
      });
  });
}

async function loadAllModels(listModels: ListModels): Promise<ModelGuidance[]> {
  const models: ModelGuidance[] = [];
  let cursor: string | null = null;
  do {
    const page: ModelsPage = await listModels({
      cursor,
      includeHidden: true,
      limit: MODELS_PAGE_SIZE,
    });
    models.push(...page.data);
    cursor = page.nextCursor;
  } while (cursor != null);
  return models;
}

async function hasAnyExperimentalFeature(
  listExperimentalFeatures: ListExperimentalFeatures,
  cursor: string | null = null,
): Promise<boolean> {
  try {
    const page = await listExperimentalFeatures({
      cursor,
      limit: EXPERIMENTAL_FEATURES_PAGE_SIZE,
    });
    if (page.data.length > 0) return true;
    if (page.nextCursor == null) return false;
    return await hasAnyExperimentalFeature(
      listExperimentalFeatures,
      page.nextCursor,
    );
  } catch {
    return false;
  }
}
