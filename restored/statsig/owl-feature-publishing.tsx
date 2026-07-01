// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Publishes Owl (browser) feature toggles derived from Statsig gates back to the
// host app services, and keeps the local "default enabled features" override in sync.
import React from "react";
import { uniq } from "../utils/uniq";
import { isEqualN as isEqual } from "../vendor/lodash-is-equal";
import { appLogger } from "../runtime/app-logger";
import { appServices } from "../boundaries/rpc.facade";
import {
  applyStatsigFeatureOverrides,
  getEnabledFeaturesSnapshot,
  onboardingDynamicConfigStoreKey,
  owlFeatureAuth,
  owlFeatureAutofillAndPasswords,
  owlFeatureDownloads,
  owlFeatureExtensions,
  owlFeatureHistory,
  owlFeatureOpenAiGoLinks,
  owlFeaturePermissions,
  owlFeaturePrinting,
  owlFeatureWebViewEnhancements,
  owlFeaturesQueryKey,
  owlFeaturesQueryKeyPrefix,
  parseOnboardingDynamicConfig,
  useCodexAppStore,
  useStatsigFeatureOverride,
} from "../boundaries/onboarding-commons-externals.facade";

// The dynamic config that carries onboarding gating information.
const ONBOARDING_DYNAMIC_CONFIG_ID = "107580212";
const DEFAULT_ENABLED_FEATURES_OVERRIDE_KEY = "statsig_default_enable_features";

interface FeatureGateEvaluation {
  value: boolean;
  details: { reason?: string };
}

interface OwlPublisherStatsigClient {
  loadingStatus?: string;
  getFeatureGate(name: string): FeatureGateEvaluation;
  getDynamicConfig(name: string): { value: unknown };
  on(event: "values_updated", listener: (event?: { status?: string }) => void): void;
  off(event: "values_updated", listener: (event?: { status?: string }) => void): void;
}

interface OwlFeaturesQueryClient {
  setQueryData(queryKey: unknown, data: unknown): void;
  invalidateQueries(filters: { queryKey: unknown }): Promise<unknown>;
}

// Each Statsig feature gate id controls a set of Owl feature names.
// NOTE: the constant identities come from the (not-yet-restored) Owl-features
// cluster; the gate ids are opaque Statsig hashes.
const owlFeatureGateMap: ReadonlyArray<readonly [string, readonly string[]]> = [
  [
    "1834314516",
    [
      owlFeatureAutofillAndPasswords,
      owlFeatureAuth,
      owlFeatureDownloads,
      owlFeatureExtensions,
      owlFeatureHistory,
    ],
  ],
  ["1714131075", [owlFeatureHistory]],
  ["72045066", [owlFeatureAutofillAndPasswords, owlFeatureAuth]],
  ["2982604767", [owlFeatureOpenAiGoLinks]],
  ["2177625257", [owlFeaturePermissions]],
  ["3657624089", [owlFeatureExtensions]],
  ["3245360288", [owlFeaturePrinting]],
  ["3646210497", [owlFeatureWebViewEnhancements]],
];

export async function publishOwlFeatureNames(
  queryClient: OwlFeaturesQueryClient,
  client: OwlPublisherStatsigClient,
): Promise<void> {
  const evaluations = owlFeatureGateMap.map(([gateId, owlFeatureNames]) => ({
    owlFeatureNames,
    evaluation: client.getFeatureGate(gateId),
  }));
  if (
    evaluations.some(
      ({ evaluation }) => !evaluation.details.reason?.endsWith(":Recognized"),
    )
  ) {
    return;
  }
  const enabledFeatureNames = uniq(
    evaluations.flatMap(({ owlFeatureNames, evaluation }) =>
      evaluation.value ? owlFeatureNames : [],
    ),
  );
  const disabledFeatureNames = uniq(
    evaluations.flatMap(({ owlFeatureNames, evaluation }) =>
      evaluation.value ? [] : owlFeatureNames,
    ),
  ).filter((name) => !enabledFeatureNames.includes(name));

  if (appServices.owlFeatures == null) return;
  const result = await appServices.owlFeatures.setFeatureNames({
    disabledFeatureNames,
    enabledFeatureNames,
  });
  queryClient.setQueryData(owlFeaturesQueryKey, result);
  await queryClient.invalidateQueries({ queryKey: owlFeaturesQueryKeyPrefix });
}

export function logOwlFeaturePublishError(error: unknown): void {
  appLogger.warning("Failed to publish Owl feature names", {
    safe: {},
    sensitive: { error },
  });
}

export interface OwlFeaturePublisherProps {
  client: OwlPublisherStatsigClient;
}

export function OwlFeaturePublisher({
  client,
}: OwlFeaturePublisherProps): null {
  const appStore = useCodexAppStore();
  const [, setDefaultEnabledFeaturesOverride] = useStatsigFeatureOverride(
    DEFAULT_ENABLED_FEATURES_OVERRIDE_KEY,
  );
  const [enabledFeatures, setEnabledFeatures] = React.useState<
    Record<string, unknown>
  >(() => getEnabledFeaturesSnapshot(client));

  React.useLayoutEffect(
    () => applyStatsigFeatureOverrides(appStore, client),
    [client, appStore],
  );

  React.useEffect(() => {
    const onValuesUpdated = (event?: { status?: string }) => {
      if ((event?.status ?? client.loadingStatus) !== "Ready") return;
      publishOwlFeatureNames(appStore.queryClient, client).catch(
        logOwlFeaturePublishError,
      );
      appStore.set(
        onboardingDynamicConfigStoreKey,
        parseOnboardingDynamicConfig(
          client.getDynamicConfig(ONBOARDING_DYNAMIC_CONFIG_ID).value,
        ),
      );
      setEnabledFeatures((previous) => {
        const next = getEnabledFeaturesSnapshot(client);
        return isEqual(previous, next) ? previous : next;
      });
    };
    onValuesUpdated();
    client.on("values_updated", onValuesUpdated);
    return () => {
      client.off("values_updated", onValuesUpdated);
    };
  }, [client, appStore]);

  React.useEffect(() => {
    setDefaultEnabledFeaturesOverride(
      (previous: Record<string, unknown> | undefined) => {
        if (previous && isEqual(previous, enabledFeatures)) return previous;
        const enabledList = Object.entries(enabledFeatures)
          .filter(isFeatureEntryEnabled)
          .map(getFeatureEntryName);
        if (enabledList.length > 0) {
          appLogger.info("Features enabled", {
            safe: { enabledFeatures: enabledList.join(", ") },
            sensitive: {},
          });
        }
        return enabledFeatures;
      },
    );
  }, [enabledFeatures, setDefaultEnabledFeaturesOverride]);

  return null;
}

function getFeatureEntryName(entry: [string, unknown]): string {
  const [name] = entry;
  return name;
}

function isFeatureEntryEnabled(entry: [string, unknown]): boolean {
  const [, enabled] = entry;
  return Boolean(enabled);
}
