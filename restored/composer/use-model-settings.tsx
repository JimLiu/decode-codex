// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolve and mutate the composer model + reasoning-effort settings for a host/conversation.
import React, { useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { useIntl } from "../vendor/react-intl";
import {
  _appScopeA as useAppScopeQueryValue,
  appScopeA as useAppScopeFamilyValue,
  appScopeO as useAppScopeStore,
  appScopeS as useAppScopeValue,
  appScopeT as appScopeRoot,
} from "../boundaries/app-scope";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { useAuthForHost } from "../auth/use-auth";
import {
  useModelFilterConfig,
  useModelListQuery,
} from "../utils/model-queries";
import {
  DEFAULT_MODEL,
  DEFAULT_REASONING_EFFORT,
} from "../utils/models-and-reasoning-efforts";
import {
  USER_SAVED_CONFIG_QUERY_KEY,
  createUserSavedConfigQueryOptions,
  userSavedConfigQueryOptions,
} from "../config/user-saved-config-query";
import { useActiveWorkspace } from "./use-active-workspace";
import {
  MULTI_AGENT_MODE,
  hasConversationSignal,
  logger,
  modelSelectionWriteQueueFamily,
  nextTurnModelOverrideSignal,
  pendingModelSelectionSignal,
  persistScopedSignalValue,
  registeredAppServerHostIdsSignal,
  threadSettingsByIdSignal,
  toastControllerSignal,
  useInvalidateQueries,
  useQueryClient,
  useScopedPersistedValue,
} from "../boundaries/onboarding-commons-externals.facade";
import { OpenConfigLinkButton } from "../boundaries/onboarding-commons-externals.facade";

export interface ModelSettings {
  model: string;
  reasoningEffort: string | null;
  profile: string | null;
  isLoading: boolean;
}

interface ModelListEntry {
  model: string;
  defaultReasoningEffort?: string;
  supportedReasoningEfforts?: { reasoningEffort: string }[];
}

interface ModelListData {
  models: ModelListEntry[];
  defaultModel: ModelListEntry | null;
}

interface UserSavedConfig {
  model?: string | null;
  model_reasoning_effort?: string | null;
  profile?: string | null;
}

interface NextTurnModelOverride {
  model: string;
  reasoningEffort: string | null;
  profile: string | null;
}

/** Reasoning efforts a user may toggle on for a model. */
export const SELECTABLE_REASONING_EFFORTS = ["low", "medium", "high", "xhigh"];

export function findModelByName(
  models: ModelListEntry[] | undefined | null,
  modelName: string,
): ModelListEntry | undefined {
  return models?.find((model) => model.model === modelName);
}

function userSavedConfigQueryKeyFor(hostId: string, cwd: string | null) {
  return [...USER_SAVED_CONFIG_QUERY_KEY, hostId, cwd];
}

function modelSelectionTargetKey({
  conversationId,
  hasConversation,
  hostId,
  cwd,
}: {
  conversationId: string | null;
  hasConversation: boolean;
  hostId: string;
  cwd: string | null;
}) {
  return conversationId != null && hasConversation
    ? ["conversation", conversationId]
    : ["default", hostId, cwd];
}

function isConfigValidationError(
  error: unknown,
): error is { code: number; message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    (error as { code?: unknown }).code === -32600 &&
    typeof (error as { message?: unknown }).message === "string" &&
    (error as { message: string }).message.length > 0
  );
}

function applyModelOverride(
  settings: ModelSettings,
  override: NextTurnModelOverride | null,
): ModelSettings {
  return override == null
    ? settings
    : {
        ...settings,
        model: override.model,
        reasoningEffort: override.reasoningEffort,
        profile: override.profile,
      };
}

function resolveModelSettingsForConfig({
  userSavedModelString,
  userSavedReasoningEffort,
  listModelsData,
}: {
  userSavedModelString: string | null;
  userSavedReasoningEffort: string | null;
  listModelsData: ModelListData | null | undefined;
}): ModelSettings {
  const matchedModel = userSavedModelString
    ? findModelByName(listModelsData?.models, userSavedModelString)
    : (listModelsData?.defaultModel ??
      findModelByName(listModelsData?.models, DEFAULT_MODEL));
  const supportedEfforts = matchedModel?.supportedReasoningEfforts?.map(
    (effort) => effort.reasoningEffort,
  );
  const reasoningEffort =
    userSavedReasoningEffort != null &&
    supportedEfforts != null &&
    supportedEfforts.includes(userSavedReasoningEffort)
      ? userSavedReasoningEffort
      : matchedModel?.defaultReasoningEffort;
  return {
    model: matchedModel
      ? matchedModel.model
      : (userSavedModelString ?? DEFAULT_MODEL),
    reasoningEffort:
      reasoningEffort ??
      userSavedReasoningEffort ??
      listModelsData?.defaultModel?.defaultReasoningEffort ??
      DEFAULT_REASONING_EFFORT,
    profile: null,
    isLoading: false,
  };
}

function formatModelSettingsError(
  intl: ReturnType<typeof useIntl>,
  error: unknown,
): string {
  return isConfigValidationError(error)
    ? intl.formatMessage(
        {
          id: "composer.modelSettings.errorConfigValidation",
          defaultMessage:
            "Couldn’t update model settings. Check your config.toml.{br}{br}{message}",
          description:
            "Error shown when updating model settings fails because the configuration is invalid",
        },
        {
          br: <br />,
          message: error.message,
        },
      )
    : intl.formatMessage({
        id: "composer.modelSettings.errorGeneric",
        defaultMessage: "Couldn’t update model settings",
        description:
          "Error shown when updating model settings fails for a non-auth reason",
      });
}

function enqueueModelSelectionWrite(
  store: { get: (...args: unknown[]) => (event: unknown) => void },
  target: unknown,
  selection: unknown,
  write: () => Promise<void> | void,
): Promise<void> {
  return new Promise((resolve) => {
    store.get(
      modelSelectionWriteQueueFamily,
      JSON.stringify(target),
    )({
      resolve,
      selection,
      target,
      write,
    });
  });
}

function useCopilotDefaultModelSettings(): ModelSettings {
  const filterConfig = useModelFilterConfig();
  const { data, isLoading } = useScopedPersistedValue("copilot-default-model");
  return {
    model: data ?? filterConfig.defaultModel,
    reasoningEffort: "medium",
    profile: null,
    isLoading,
  };
}

function useInvalidateUserSavedConfig({
  hostId,
  cwd,
}: {
  hostId: string;
  cwd: string | null;
}) {
  const queryClient = useQueryClient();
  const invalidateQueries = useInvalidateQueries();
  return async () => {
    const queryKey = userSavedConfigQueryKeyFor(hostId, cwd);
    await queryClient.cancelQueries({ queryKey, exact: true });
    await invalidateQueries(queryKey);
  };
}

function useResolvedModelSettings({
  hostId,
  cwd,
  isHostRegistered,
  waitForModelList = false,
}: {
  hostId: string;
  cwd: string | null;
  isHostRegistered: boolean;
  waitForModelList?: boolean;
}): ModelSettings {
  const store = useAppScopeStore(appScopeRoot);
  const queryClient = store.queryClient;

  const { data: modelListData, isLoading: isModelListLoading } =
    useModelListQuery({ hostId });
  const nextTurnOverride = useAppScopeFamilyValue(nextTurnModelOverrideSignal, {
    hostId,
    cwd,
  }) as NextTurnModelOverride | null;

  const directConfigOptions = createUserSavedConfigQueryOptions({
    queryClient,
    hostId,
    cwd,
    enabled: isHostRegistered,
  });
  const {
    data: directConfig,
    dataUpdatedAt: directConfigUpdatedAt,
    isLoading: isDirectConfigLoading,
  } = useAppScopeQueryValue(directConfigOptions) as {
    data: UserSavedConfig | null;
    dataUpdatedAt: number;
    isLoading: boolean;
  };
  const {
    data: cachedConfig,
    dataUpdatedAt: cachedConfigUpdatedAt,
    isLoading: isCachedConfigLoading,
  } = useAppScopeFamilyValue(userSavedConfigQueryOptions, { hostId, cwd }) as {
    data: UserSavedConfig | null;
    dataUpdatedAt: number;
    isLoading: boolean;
  };

  const logConfigQueryDivergence = () => {
    const cachedQuery = queryClient.getQueryCache().find({
      exact: true,
      queryKey: userSavedConfigQueryKeyFor(hostId, cwd),
    });
    const cacheUpdatedAt = cachedQuery?.state.dataUpdatedAt ?? 0;
    const directModel = directConfig?.model ?? null;
    const directReasoningEffort = directConfig?.model_reasoning_effort ?? null;
    const cachedModel = cachedConfig?.model ?? null;
    const cachedReasoningEffort = cachedConfig?.model_reasoning_effort ?? null;
    if (
      cacheUpdatedAt === 0 ||
      directConfigUpdatedAt !== cacheUpdatedAt ||
      cachedConfigUpdatedAt === cacheUpdatedAt ||
      (directModel === cachedModel &&
        directReasoningEffort === cachedReasoningEffort)
    ) {
      return;
    }
    const timeout = setTimeout(() => {
      logger.warning("model_settings.config_query_diverged", {
        safe: {
          cacheDataUpdatedAt: cacheUpdatedAt,
          directDataUpdatedAt: directConfigUpdatedAt,
          directIsLoading: isDirectConfigLoading,
          isHostRegistered,
          maitaiDataUpdatedAt: cachedConfigUpdatedAt,
          maitaiIsLoading: isCachedConfigLoading,
          observerCount: cachedQuery?.getObserversCount() ?? 0,
        },
        sensitive: {
          cwd,
          directModel,
          directReasoningEffort,
          hostId,
          maitaiModel: cachedModel,
          maitaiReasoningEffort: cachedReasoningEffort,
        },
      });
    });
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(logConfigQueryDivergence, [
    cwd,
    hostId,
    isHostRegistered,
    isCachedConfigLoading,
    isDirectConfigLoading,
    cachedConfig,
    cachedConfigUpdatedAt,
    queryClient,
    directConfig,
    directConfigUpdatedAt,
  ]);

  const directModel = directConfig?.model ?? null;
  const shouldWaitForModel =
    waitForModelList &&
    directModel != null &&
    modelListData?.models.some((model) => model.model === directModel) ===
      false;

  const resolved = resolveModelSettingsForConfig({
    userSavedModelString: shouldWaitForModel ? null : directModel,
    userSavedReasoningEffort: directConfig?.model_reasoning_effort ?? null,
    listModelsData:
      waitForModelList && modelListData != null
        ? {
            ...modelListData,
            defaultModel:
              modelListData.defaultModel ?? modelListData.models[0] ?? null,
          }
        : modelListData,
  });
  const isMissingSelection =
    directConfig?.model == null || directConfig.model_reasoning_effort == null;

  return applyModelOverride(
    {
      ...resolved,
      profile:
        typeof directConfig?.profile === "string" ? directConfig.profile : null,
      isLoading:
        isDirectConfigLoading ||
        (waitForModelList
          ? modelListData?.models[0] == null
          : isModelListLoading && isMissingSelection),
    },
    nextTurnOverride,
  );
}

export interface UseModelSettingsOptions {
  hostId: string;
  cwd: string | null;
}

export function useModelSettings({
  hostId,
  cwd,
}: UseModelSettingsOptions): ModelSettings {
  const registeredHostIds = useAppScopeValue(
    registeredAppServerHostIdsSignal,
  ) as string[];
  const isHostRegistered = registeredHostIds.includes(hostId);
  return useResolvedModelSettings({
    hostId,
    cwd,
    isHostRegistered,
    waitForModelList: true,
  });
}

export interface ModelSettingsController {
  setModelAndReasoningEffortForNextTurn: (
    model: string,
    reasoningEffort: string,
  ) => Promise<void>;
  setModelAndReasoningEffort: (
    model: string,
    reasoningEffort: string,
  ) => Promise<void>;
  modelSettings: ModelSettings;
}

export function useModelSettingsController(
  conversationId: string | null = null,
): ModelSettingsController {
  const store = useAppScopeStore(appScopeRoot);
  const queryClient = store.queryClient;
  const workspace = useActiveWorkspace(conversationId);
  const hostId = workspace.hostId;
  const registeredHostIds = useAppScopeValue(
    registeredAppServerHostIdsSignal,
  ) as string[];
  const isHostRegistered = registeredHostIds.includes(hostId);
  const isCopilot = useAuthForHost(hostId)?.authMethod === "copilot";
  const intl = useIntl();
  const cwd = workspace.cwd;

  const resolvedSettings = useResolvedModelSettings({
    hostId,
    cwd,
    isHostRegistered,
  });
  const copilotDefaults = useCopilotDefaultModelSettings();
  const hasConversation = useAppScopeFamilyValue(
    hasConversationSignal,
    conversationId,
  ) as boolean;
  const pendingSelection = useAppScopeFamilyValue(
    pendingModelSelectionSignal,
    modelSelectionTargetKey({
      conversationId,
      hasConversation,
      hostId,
      cwd,
    }),
  ) as Partial<NextTurnModelOverride> | null;
  const threadSettings = useAppScopeFamilyValue(
    threadSettingsByIdSignal,
    conversationId,
  ) as {
    settings: { model?: string | null; reasoning_effort?: string | null };
  } | null;
  const threadModel = threadSettings?.settings.model ?? null;
  const normalizedThreadModel =
    threadModel != null && threadModel.trim().length > 0 ? threadModel : null;

  const updateNextTurnSettings = useCallback(
    async (model: string, reasoningEffort: string) => {
      if (conversationId == null || !hasConversation) return false;
      await sendAppServerRequest("update-thread-settings-for-next-turn", {
        conversationId,
        threadSettings: {
          model,
          effort: reasoningEffort,
          multiAgentMode: MULTI_AGENT_MODE,
        },
      });
      return true;
    },
    [conversationId, hasConversation],
  );

  const baseSettings = hasConversation
    ? {
        model: normalizedThreadModel ?? resolvedSettings.model,
        reasoningEffort: threadSettings?.settings.reasoning_effort ?? null,
        profile: resolvedSettings.profile,
        isLoading: resolvedSettings.isLoading && normalizedThreadModel == null,
      }
    : isCopilot
      ? copilotDefaults
      : resolvedSettings;
  const modelSettings =
    pendingSelection == null
      ? baseSettings
      : { ...baseSettings, ...pendingSelection };

  const invalidateUserSavedConfig = useInvalidateUserSavedConfig({
    hostId,
    cwd,
  });

  const handleError = useCallback(
    (error: unknown) => {
      logger.error("Failed to update model and reasoning effort", {
        safe: {},
        sensitive: { error },
      });
      const toastController = store.get(toastControllerSignal);
      const message = formatModelSettingsError(intl, error);
      if (isConfigValidationError(error)) {
        toastController.danger(message, {
          id: "composer.modelSettings.updateError",
          description: (
            <div className="mt-4">
              <OpenConfigLinkButton hostId={hostId} />
            </div>
          ),
        });
        return;
      }
      toastController.danger(message, {
        id: "composer.modelSettings.updateError",
      });
    },
    [hostId, intl, store],
  );

  const setModelAndReasoningEffortForNextTurn = useCallback(
    async (model: string, reasoningEffort: string) => {
      try {
        if (!(await updateNextTurnSettings(model, reasoningEffort))) {
          throw new Error(
            "No conversation available for next-turn model update",
          );
        }
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    [updateNextTurnSettings, handleError],
  );

  const setDefaultModelAndReasoningEffort = useCallback(
    async (model: string, reasoningEffort: string) => {
      let queryKey: unknown[] | null = null;
      let previousData: unknown;
      try {
        if (await updateNextTurnSettings(model, reasoningEffort)) return;
        if (isCopilot) {
          await persistScopedSignalValue(
            store,
            "copilot-default-model",
            model,
            { throwOnFailure: true },
          );
          return;
        }
        logger.info("Setting default model and reasoning effort", {
          safe: {
            newModel: model,
            newEffort: reasoningEffort,
            profile: resolvedSettings.profile,
          },
        });
        if (!isHostRegistered) {
          throw new Error("Model settings host is unavailable");
        }
        queryKey = userSavedConfigQueryKeyFor(hostId, cwd);
        const overrideTarget = { hostId, cwd };
        await queryClient.cancelQueries({ exact: true, queryKey });
        previousData = queryClient.getQueryData(queryKey);
        queryClient.setQueryData(queryKey, (current: unknown) =>
          current == null
            ? current
            : Object.assign(structuredClone(current), {
                model,
                model_reasoning_effort: reasoningEffort,
              }),
        );
        const result = await sendAppServerRequest(
          "set-default-model-config-for-host",
          {
            hostId,
            model,
            reasoningEffort,
            profile: resolvedSettings.profile,
          },
        );
        await sendAppServerRequest("clear-prewarmed-threads-for-host", {
          hostId,
        });
        if (result?.status === "okOverridden") {
          queryClient.setQueryData(queryKey, previousData);
          store.set(nextTurnModelOverrideSignal, overrideTarget, {
            model,
            reasoningEffort,
            profile: resolvedSettings.profile,
          });
          return;
        }
        store.set(nextTurnModelOverrideSignal, overrideTarget, null);
        await invalidateUserSavedConfig();
        await store.query.fetch(userSavedConfigQueryOptions, { hostId, cwd });
      } catch (error) {
        if (queryKey != null) queryClient.setQueryData(queryKey, previousData);
        handleError(error);
      }
    },
    [
      isCopilot,
      updateNextTurnSettings,
      resolvedSettings.profile,
      invalidateUserSavedConfig,
      isHostRegistered,
      hostId,
      queryClient,
      store,
      handleError,
      cwd,
    ],
  );

  const setModelAndReasoningEffort = useCallback(
    (model: string, reasoningEffort: string) =>
      enqueueModelSelectionWrite(
        store,
        modelSelectionTargetKey({
          conversationId,
          hasConversation,
          hostId,
          cwd,
        }),
        { model, reasoningEffort },
        () => setDefaultModelAndReasoningEffort(model, reasoningEffort),
      ),
    [
      conversationId,
      hasConversation,
      hostId,
      store,
      cwd,
      setDefaultModelAndReasoningEffort,
    ],
  );

  return {
    setModelAndReasoningEffortForNextTurn,
    setModelAndReasoningEffort,
    modelSettings,
  };
}
