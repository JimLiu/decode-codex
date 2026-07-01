// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Statsig feature-gate signal and hook facade for restored conversation modules.
import { useMemo } from "react";
import { useStatsigClient } from "../vendor/statsig-current-runtime";
import {
  createAppScopedSignal,
  createAppScopedSignalFamily,
  initAppScopeSignalRuntime,
  type ScopedSignalContext,
} from "./app-scope-runtime";
import { useScopedValue } from "./app-scope-hooks";
import { initAppgFeatureGateAndSideConversationRuntime } from "./appg-shared-runtime-initializers";

export type StatsigLayer = {
  get<TValue>(key: string, fallbackValue: TValue): TValue;
};

type StatsigValuesUpdatedEvent = {
  status?: string;
  values?: unknown;
};

type StatsigFeatureGateClient = {
  checkGate(gateName: string): boolean;
  getLayer(layerName: string, options?: unknown): StatsigLayer;
  off(
    eventName: "values_updated",
    listener: (event: StatsigValuesUpdatedEvent) => void,
  ): void;
  on(
    eventName: "values_updated",
    listener: (event: StatsigValuesUpdatedEvent) => void,
  ): void;
};

type StatsigScopeContext = ScopedSignalContext & {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

const statsigClientSignal =
  createAppScopedSignal<StatsigFeatureGateClient | null>(null);
const mountedFeatureGateNamesSignal = createAppScopedSignal<string[]>([]);

export const featureGateSignal = createAppScopedSignalFamily<string, boolean>(
  () => false,
  {
    onMount(setGateValue, scope) {
      const gateName = scope.key;
      const client = scope.get<StatsigFeatureGateClient | null>(
        statsigClientSignal,
      );

      if (client != null) setGateValue(client.checkGate(gateName));

      scope.set<string[]>(mountedFeatureGateNamesSignal, (gateNames) =>
        gateNames.includes(gateName) ? gateNames : [...gateNames, gateName],
      );

      return () => {
        scope.set<string[]>(mountedFeatureGateNamesSignal, (gateNames) =>
          gateNames.filter((mountedGateName) => mountedGateName !== gateName),
        );
      };
    },
  },
);

export function initFeatureGateSignalRuntime(): void {
  initAppScopeSignalRuntime();
  initAppgFeatureGateAndSideConversationRuntime();
}

export function initStatsigFeatureGateRuntime(): void {
  initFeatureGateSignalRuntime();
}

export function syncFeatureGateSignalWithStatsigClient(
  scope: StatsigScopeContext,
  client: StatsigFeatureGateClient,
): () => void {
  function refreshMountedFeatureGates(): void {
    for (const gateName of scope.get<string[]>(mountedFeatureGateNamesSignal)) {
      scope.set(featureGateSignal, gateName, client.checkGate(gateName));
    }
  }

  function handleValuesUpdated(event: StatsigValuesUpdatedEvent): void {
    if (event.status === "Ready" || event.values != null) {
      refreshMountedFeatureGates();
    }
  }

  scope.set(statsigClientSignal, client);
  refreshMountedFeatureGates();
  client.on("values_updated", handleValuesUpdated);

  return () => {
    client.off("values_updated", handleValuesUpdated);
  };
}

export function useStatsigGate(gateName: string): boolean {
  return useScopedValue<boolean>(featureGateSignal, gateName);
}

export function useStatsigLayer(
  layerName: string,
  options?: unknown,
): StatsigLayer {
  const { client } = useStatsigClient() as {
    client: StatsigFeatureGateClient;
  };

  return useMemo(
    () => client.getLayer(layerName, options),
    [client, layerName, options],
  );
}

export function useStatsigLoading(): boolean {
  return useStatsigClient().isLoading;
}
