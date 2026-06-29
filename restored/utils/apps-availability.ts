// Restored from ref/webview/assets/apps-availability-D1MVObnB.js
import {
  _appScopeA as useAppScopeQuery,
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiUnderscore as useMutation,
} from "../boundaries/vscode-api";
import {
  userConfigQueryOptions,
  USER_CONFIG_QUERY_KEY,
} from "../config/config-queries";
import {
  appsListQueryKey,
  type AppConnectApp,
} from "../connectors/apps-queries";
import { toastApiSignal } from "../ui/toast-signal";
import { invalidateQueriesAndBroadcast } from "./invalidate-queries-and-broadcast";
import { useIntl } from "../vendor/react-intl";
const APPS_CONFIG_ROOT_KEY = "apps";
const USER_SAVED_CONFIG_QUERY_KEY = ["user-saved-config"] as const;
type AppsAvailabilityOptions = {
  hostId?: string | null;
};
type SetAppEnabledInput = {
  appId: string;
  appName?: string | null;
  enabled: boolean;
};
type AppEnablementMutationContext = {
  previousApps?: AppConnectApp[];
};
type ConfigWriteTarget = {
  expectedVersion?: string | number | null;
  filePath?: string | null;
};
type UserConfigQueryData = {
  configWriteTarget?: ConfigWriteTarget | null;
};
type QueryClientLike = {
  cancelQueries(options: { queryKey: readonly unknown[] }): Promise<unknown>;
  getQueryData<T>(queryKey: readonly unknown[]): T | undefined;
  setQueryData<T>(
    queryKey: readonly unknown[],
    updater: T | ((current: T | undefined) => T | undefined),
  ): void;
};
type ToastApiLike = {
  danger(message: string): unknown;
  success(message: string): unknown;
};
type AppScopeWithToast = {
  get<T>(signal: unknown): T;
};
type AppsAvailabilityResult = {
  isUpdating: boolean;
  setAppEnabled(input: SetAppEnabledInput): Promise<unknown>;
  updatingAppId: string | null;
};
export function useAppsAvailability(
  options?: AppsAvailabilityOptions,
): AppsAvailabilityResult {
  const hostId = options?.hostId ?? "local";
  const appScope = useAppScope(appScopeRoot) as AppScopeWithToast;
  const { data: userConfig } = useAppScopeQuery(
    userConfigQueryOptions,
    hostId,
  ) as {
    data?: UserConfigQueryData;
  };
  const queryClient = useQueryClient() as QueryClientLike;
  const invalidateQuery = invalidateQueriesAndBroadcast();
  const intl = useIntl();
  const appsQueryKey = appsListQueryKey(hostId);
  const invalidateAppConfigQueries = async () => {
    await Promise.all([
      invalidateQuery(appsQueryKey),
      invalidateQuery(USER_CONFIG_QUERY_KEY),
      invalidateQuery(USER_SAVED_CONFIG_QUERY_KEY),
    ]);
  };
  const writeAppEnabledState = async ({
    appId,
    enabled,
  }: SetAppEnabledInput) => {
    await sendAppServerRequest("batch-write-config-value", {
      hostId,
      edits: createAppEnabledConfigEdits({
        appId,
        enabled,
      }),
      filePath: userConfig?.configWriteTarget?.filePath ?? null,
      expectedVersion: userConfig?.configWriteTarget?.expectedVersion ?? null,
      reloadUserConfig: true,
    });
  };
  const updateAppsListOptimistically = async ({
    appId,
    enabled,
  }: SetAppEnabledInput): Promise<AppEnablementMutationContext> => {
    await queryClient.cancelQueries({
      queryKey: appsQueryKey,
    });
    const previousApps =
      queryClient.getQueryData<AppConnectApp[]>(appsQueryKey);
    if (previousApps != null) {
      queryClient.setQueryData<AppConnectApp[]>(
        appsQueryKey,
        previousApps.map((app) =>
          app.id !== appId || app.isEnabled === enabled
            ? app
            : {
                ...app,
                isEnabled: enabled,
              },
        ),
      );
    }
    return {
      previousApps,
    };
  };
  const mutation = useMutation({
    mutationFn: writeAppEnabledState,
    onMutate: updateAppsListOptimistically,
    onSuccess: (
      _data: unknown,
      { appId, appName, enabled }: SetAppEnabledInput,
    ) => {
      const displayName =
        appName ??
        queryClient
          .getQueryData<AppConnectApp[]>(appsQueryKey)
          ?.find((app) => app.id === appId)?.name ??
        appId;
      appScope.get<ToastApiLike>(toastApiSignal).success(
        intl.formatMessage(
          enabled
            ? {
                id: "apps.enable.success",
                defaultMessage: "{appName} app enabled",
                description: "Toast shown after successfully enabling an app",
              }
            : {
                id: "apps.disable.success",
                defaultMessage: "{appName} app disabled",
                description: "Toast shown after successfully disabling an app",
              },
          {
            appName: displayName,
          },
        ),
      );
    },
    onError: (
      error: unknown,
      _variables: SetAppEnabledInput,
      context?: AppEnablementMutationContext,
    ) => {
      vscodeLogger.error("Failed to update app enablement", {
        safe: {},
        sensitive: {
          error,
        },
      });
      appScope.get<ToastApiLike>(toastApiSignal).danger(
        intl.formatMessage({
          id: "apps.update.error",
          defaultMessage: "Failed to update app",
          description: "Toast shown when enabling or disabling an app fails",
        }),
      );
      if (context?.previousApps != null) {
        queryClient.setQueryData(appsQueryKey, context.previousApps);
      }
    },
    onSettled: invalidateAppConfigQueries,
  });
  return {
    setAppEnabled: mutation.mutateAsync,
    isUpdating: mutation.isPending,
    updatingAppId: mutation.isPending
      ? (mutation.variables?.appId ?? null)
      : null,
  };
}
function createAppEnabledConfigEdits({ appId, enabled }: SetAppEnabledInput) {
  return [
    {
      keyPath: `${APPS_CONFIG_ROOT_KEY}.${appId}.enabled`,
      value: enabled,
      mergeStrategy: "upsert",
    },
  ];
}

export function initAppsAvailabilityChunk(): void {}
