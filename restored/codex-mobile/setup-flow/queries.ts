// Restored from ref/webview/assets/codex-mobile-setup-flow-XFbY7C-Z.js
// Remote-control client query helpers for Codex Mobile setup.
import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntime,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotUpperFLowerS as createScopedQueryFamily,
  currentAppInitialSharedCompatSlotUpperILowerS as createScopedQuery,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  localRemoteConnectionDescriptorSchema as initLocalRemoteConnectionDescriptorRuntime,
  currentAppInitialSharedControlConnectConnectionRuntime as initRemoteControlConnectionRuntime,
  statsigMountSignal as initStatsigMountSignalRuntime,
  currentAppInitialSharedMember0686 as appServerHostConfigById,
  localRemoteConnectionKind as readLocalRemoteConnectionValue,
  currentAppInitialSharedMember0835 as useStatsigGate,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  pullRequestNewThreadCompatSlotUpperTLowerT as listRemoteControlClientsForHost,
  pullRequestNewThreadCompatSlotLowerWLowerT as initRemoteControlClientListRuntime,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import type {
  CodexMobileSetupStep,
  RemoteControlClient,
  ScopeQueryContext,
  WaitForAddedClientQueryInput,
} from "./types";

const REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS = 30_000;

export let remoteControlClientsQuery: any;
export let appServerRemoteControlClientsQuery: any;
export let pollingRemoteControlClientsQuery: any;
export let waitingForAddedRemoteControlClientQuery: any;

export const initCodexMobileSetupFlowNoopChunk = runOnce(() => {});

export function filterRemoteControlClientsExceptCurrent(
  clients: RemoteControlClient[] | null | undefined,
  localRemoteControlClientId: string | null | undefined,
): RemoteControlClient[] | null | undefined {
  if (clients == null) return clients;
  if (localRemoteControlClientId == null) return clients;
  return clients.filter(
    (client) => client.clientId !== localRemoteControlClientId,
  );
}

export function hasNewRemoteControlClient(
  clients: RemoteControlClient[] | null | undefined,
  existingClientIds: Set<string>,
): boolean {
  return (
    clients?.some((client) => !existingClientIds.has(client.clientId)) === true
  );
}

function getWaitingForAddedClientResult(
  clients: RemoteControlClient[] | null | undefined,
  existingClientIds: Set<string>,
): CodexMobileSetupStep | null {
  if (clients == null || !hasNewRemoteControlClient(clients, existingClientIds))
    return null;
  return existingClientIds.size === 0 && clients.length === 1
    ? "connected"
    : "dismiss";
}

function serializeWaitingForAddedClientQueryKey({
  existingClientIds,
  hostId,
  localRemoteControlClientId,
  waiting,
}: WaitForAddedClientQueryInput): string {
  return JSON.stringify({
    existingClientIds:
      existingClientIds == null ? null : Array.from(existingClientIds).sort(),
    hostId,
    localRemoteControlClientId,
    waiting,
  });
}

export const initCodexMobileSetupFlowQueriesChunk = runOnce(() => {
  initCurrentSharedRuntime();
  initRemoteControlConnectionRuntime();
  initAppScopeRuntime();
  initLocalRemoteConnectionDescriptorRuntime();
  initStatsigMountSignalRuntime();
  initRemoteControlClientListRuntime();
  initCodexMobileSetupFlowNoopChunk();

  remoteControlClientsQuery = createScopedQuery(
    appScopeRoot,
    ({ get }: ScopeQueryContext) => {
      const environmentId =
        readLocalRemoteConnectionValue(
          get,
          "local_remote_control_environment_id",
        ) ?? null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      return {
        queryKey: [
          "remote-control-clients",
          environmentId,
          includeBrowserClients,
        ],
        queryFn: () =>
          listRemoteControlClientsForHost(environmentId, {
            includeBrowserClients,
          }),
        staleTime: REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS,
      };
    },
  );

  appServerRemoteControlClientsQuery = createScopedQueryFamily(
    appScopeRoot,
    (hostId: string, { get }: ScopeQueryContext) => {
      const hostConfig = get(appServerHostConfigById, hostId);
      const environmentId = hostConfig?.environmentId;

      return {
        enabled: environmentId != null,
        queryKey: [
          "remote-control-clients",
          "app-server",
          hostId,
          hostConfig?.installationId,
        ],
        queryFn: () =>
          environmentId == null
            ? Promise.resolve([])
            : listRemoteControlClientsForHost(environmentId, {
                appServerHostId: hostId,
              }),
        staleTime: REMOTE_CONTROL_CLIENTS_QUERY_STALE_TIME_MS,
      };
    },
  );

  pollingRemoteControlClientsQuery = createScopedQueryFamily(
    appScopeRoot,
    (enabled: boolean, { get }: ScopeQueryContext) => {
      const environmentId =
        readLocalRemoteConnectionValue(
          get,
          "local_remote_control_environment_id",
        ) ?? null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      return {
        enabled,
        queryKey: [
          "remote-control-clients",
          environmentId,
          includeBrowserClients,
        ],
        queryFn: () =>
          listRemoteControlClientsForHost(environmentId, {
            includeBrowserClients,
          }),
        refetchInterval: enabled ? 1000 : false,
        staleTime: 0,
      };
    },
  );

  waitingForAddedRemoteControlClientQuery = createScopedQueryFamily(
    appScopeRoot,
    (
      {
        existingClientIds,
        hostId,
        localRemoteControlClientId,
        waiting,
      }: WaitForAddedClientQueryInput,
      { get, queryClient }: ScopeQueryContext,
    ) => {
      let environmentId: string | null = null;
      let installationId: string | null = null;
      const includeBrowserClients = !get(useStatsigGate, "2055603567");

      if (waiting && hostId == null) {
        environmentId =
          readLocalRemoteConnectionValue(
            get,
            "local_remote_control_environment_id",
          ) ?? null;
      } else if (waiting) {
        const hostConfig = get(appServerHostConfigById, hostId);
        environmentId = hostConfig?.environmentId;
        installationId = hostConfig?.installationId;
      }

      const queryKey = [
        "remote-control-clients",
        "waiting-for-added",
        hostId,
        includeBrowserClients,
        hostId == null ? environmentId : installationId,
        existingClientIds == null ? null : Array.from(existingClientIds).sort(),
        localRemoteControlClientId,
      ];

      return {
        enabled:
          waiting &&
          existingClientIds != null &&
          (hostId == null || environmentId != null),
        gcTime: 0,
        queryKey,
        queryFn: async () => {
          const cachedResult = queryClient?.getQueryData(queryKey);
          if (cachedResult != null || existingClientIds == null)
            return cachedResult ?? null;

          const clients = await listRemoteControlClientsForHost(
            environmentId ?? null,
            {
              appServerHostId: hostId ?? undefined,
              includeBrowserClients,
            },
          );

          if (hostId != null) {
            queryClient?.setQueryData(
              ["remote-control-clients", "app-server", hostId, installationId],
              clients,
            );
          }

          return getWaitingForAddedClientResult(
            filterRemoteControlClientsExceptCurrent(
              clients,
              localRemoteControlClientId,
            ),
            existingClientIds,
          );
        },
        refetchInterval: (query: { state: { data: unknown } }) =>
          waiting && query.state.data == null ? 1000 : false,
        staleTime: 0,
      };
    },
    { key: serializeWaitingForAddedClientQueryKey },
  );
});
