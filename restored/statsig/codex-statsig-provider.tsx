// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// The CodexStatsigProvider tree: resolves host/auth context, initializes the
// Statsig client (async for OpenAI auth, sync post-login bootstrap for ChatGPT
// auth), then mounts the ready provider with Owl publishing + analytics.
import React, { useEffectEvent } from "react";
import { LoadingPage } from "../ui/loading-page";
import { useAuth } from "../auth/use-auth";
import { STATSIG_CLIENT_KEY } from "../utils/statsig-client-key";
import { isEqualN as isEqual } from "../vendor/lodash-is-equal";
import { appLogger } from "../runtime/app-logger";
import { refreshStatsigValuesForDiagnostics } from "../utils/statsig-refresh-diagnostics";
import {
  fetchPostLoginStatsigBootstrap,
  type PostLoginStatsigBootstrapParams,
  type StatsigBootstrapUser,
} from "./post-login-bootstrap";
import { statsigNetworkOverride } from "./statsig-network-override";
import { OwlFeaturePublisher } from "./owl-feature-publishing";
import {
  StableID,
  StatsigClient,
  StatsigMetadataProvider,
  StatsigProvider,
  StatsigSession,
  useClientAsyncInit,
} from "../boundaries/statsig.facade";
import {
  buildStatsigUser,
  codexBrandName,
  finalizeStatsigUser,
  HostRequestError,
  hostAppInfoQueryOptions,
  hostPlatformInfoQueryOptions,
  StatsigAnalyticsBridge,
  statsigLogEventUrl,
  statsigReadyContext,
  useCurrentAccountQuery,
  useHostInfoQuery,
  useHostResourceQuery,
  useMutation,
  useStatsigAnalyticsLogger,
} from "../boundaries/onboarding-commons-externals.facade";

const STATSIG_API_URL = "https://ab.chatgpt.com/v1";
const STATSIG_SDK_EXCEPTION_URL = "https://ab.chatgpt.com/v1/sdk_exception";
const READY_REFRESH_INTERVAL_MS = 600000;
const MAX_BOOTSTRAP_RETRIES = 5;
const BOOTSTRAP_RETRY_DELAY_MS = 500;

const statsigOptions = {
  networkConfig: {
    api: STATSIG_API_URL,
    logEventUrl: statsigLogEventUrl,
    sdkExceptionUrl: STATSIG_SDK_EXCEPTION_URL,
    networkOverrideFunc: statsigNetworkOverride,
  },
};

let statsigReadyProviderInstanceCounter = 1;

interface StatsigUpdateUserResult {
  success?: boolean;
  error?: unknown;
}

interface StatsigClientInstance {
  loadingStatus?: string;
  dataAdapter: {
    setData(payload: string): void;
    prefetchData(user: unknown): Promise<unknown>;
  };
  getContext(): { user: StatsigBootstrapUser };
  initializeSync(): void;
  updateUserAsync(user: unknown): Promise<StatsigUpdateUserResult>;
  updateUserSync(
    user: unknown,
    options: { disableBackgroundCacheRefresh: boolean },
  ): StatsigUpdateUserResult;
  on(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  off(
    event: "values_updated",
    listener: (event?: { status?: string; values?: unknown }) => void,
  ): void;
  getFeatureGate(name: string): { value: boolean; details: { reason?: string } };
  getDynamicConfig(name: string): { value: unknown };
}

interface CodexAuthState {
  authMethod: string;
  accountId?: string | null;
  computeResidency?: unknown;
  email?: string | null;
  openAIAuth?: unknown;
  requiresAuth?: boolean;
  userId?: string | null;
  planAtLogin?: string | null;
  isLoading?: boolean;
}

interface CurrentAccount {
  account_user_id?: string | null;
  id?: string | null;
  structure?: unknown;
  plan_type?: string | null;
}

interface StatsigProviderChildProps {
  appSessionId: string | undefined;
  appVersion: string | undefined;
  auth: CodexAuthState;
  browserLocale: string | undefined;
  currentAccount?: CurrentAccount | null;
  hostBuildFlavor: string | undefined;
  plan?: string | null;
  statsigClientKey: string;
  systemName: string | undefined;
  systemVersion: string | undefined;
  children: React.ReactNode;
}

export interface CodexStatsigProviderProps {
  children: React.ReactNode;
}

export function CodexStatsigProvider({
  children,
}: CodexStatsigProviderProps): React.ReactElement {
  const auth = useAuth() as unknown as CodexAuthState;
  const { data: hostInfo, isLoading: isHostInfoLoading } =
    useHostInfoQuery(hostAppInfoQueryOptions);
  const { data: platformInfo, isLoading: isPlatformInfoLoading } =
    useHostInfoQuery(hostPlatformInfoQueryOptions);
  const appVersion: string | undefined = hostInfo?.version;
  const hostBuildFlavor: string | undefined = hostInfo?.buildFlavor ?? undefined;
  const systemName =
    platformInfo?.platform === "darwin"
      ? "macOS"
      : platformInfo?.platform === "win32"
        ? "Windows"
        : platformInfo?.platform === "linux"
          ? "Linux"
          : platformInfo?.platform;
  const systemVersion = hostInfo?.systemVersion ?? platformInfo?.osVersion;

  if (auth.isLoading || isHostInfoLoading || isPlatformInfoLoading) {
    return <LoadingPage />;
  }
  return (
    <CodexStatsigProviderWithMetadata
      auth={auth}
      appVersion={appVersion}
      hostBuildFlavor={hostBuildFlavor}
      systemName={systemName}
      systemVersion={systemVersion}
    >
      {children}
    </CodexStatsigProviderWithMetadata>
  );
}

interface CodexStatsigProviderWithMetadataProps {
  auth: CodexAuthState;
  appVersion: string | undefined;
  currentAccount?: CurrentAccount | null;
  hostBuildFlavor: string | undefined;
  plan?: string | null;
  statsigClientKey?: string;
  systemName: string | undefined;
  systemVersion: string | undefined;
  children: React.ReactNode;
}

function CodexStatsigProviderWithMetadata({
  auth,
  appVersion,
  currentAccount,
  hostBuildFlavor,
  plan = null,
  statsigClientKey,
  systemName,
  systemVersion,
  children,
}: CodexStatsigProviderWithMetadataProps): React.ReactElement {
  const resolvedStatsigClientKey =
    statsigClientKey === undefined ? STATSIG_CLIENT_KEY : statsigClientKey;
  const appSessionId = (
    window as unknown as {
      electronBridge?: { getAppSessionId?: () => string | undefined };
    }
  ).electronBridge?.getAppSessionId?.();
  const browserLocale =
    typeof navigator === "undefined" ? undefined : navigator.language;
  const stableId = StableID.get(resolvedStatsigClientKey);

  if (
    appSessionId != null &&
    StatsigSession.get(resolvedStatsigClientKey, false).data.sessionID !==
      appSessionId
  ) {
    StatsigSession.overrideInitialSessionID(
      appSessionId,
      resolvedStatsigClientKey,
    );
  }
  StatsigMetadataProvider.add({
    appIdentifier: "codex-electron",
    appVersion: appVersion ?? "",
    locale: browserLocale,
    systemName,
    systemVersion,
  });

  if (auth.authMethod === "chatgpt") {
    return (
      <ChatGptBootstrapStatsigProvider
        appSessionId={appSessionId}
        appVersion={appVersion}
        auth={auth}
        browserLocale={browserLocale}
        hostBuildFlavor={hostBuildFlavor}
        stableId={stableId}
        statsigClientKey={resolvedStatsigClientKey}
        systemName={systemName}
        systemVersion={systemVersion}
      >
        {children}
      </ChatGptBootstrapStatsigProvider>
    );
  }
  return (
    <CodexStatsigProviderForAuthMethod
      appSessionId={appSessionId}
      appVersion={appVersion}
      auth={auth}
      browserLocale={browserLocale}
      currentAccount={currentAccount}
      hostBuildFlavor={hostBuildFlavor}
      plan={plan}
      statsigClientKey={resolvedStatsigClientKey}
      systemName={systemName}
      systemVersion={systemVersion}
    >
      {children}
    </CodexStatsigProviderForAuthMethod>
  );
}

function CodexStatsigProviderForAuthMethod({
  appSessionId,
  appVersion,
  auth,
  browserLocale,
  currentAccount,
  hostBuildFlavor,
  plan = null,
  statsigClientKey,
  systemName,
  systemVersion,
  children,
}: StatsigProviderChildProps): React.ReactElement {
  if (auth.authMethod === "chatgpt") {
    return (
      <ChatGptIdentityStatsigProvider
        appSessionId={appSessionId}
        appVersion={appVersion}
        auth={auth}
        browserLocale={browserLocale}
        currentAccount={currentAccount}
        hostBuildFlavor={hostBuildFlavor}
        plan={plan}
        statsigClientKey={statsigClientKey}
        systemName={systemName}
        systemVersion={systemVersion}
      >
        {children}
      </ChatGptIdentityStatsigProvider>
    );
  }
  return (
    <AsyncCodexStatsigProvider
      appSessionId={appSessionId}
      appVersion={appVersion}
      auth={auth}
      browserLocale={browserLocale}
      currentAccount={currentAccount}
      hostBuildFlavor={hostBuildFlavor}
      plan={plan}
      statsigClientKey={statsigClientKey}
      systemName={systemName}
      systemVersion={systemVersion}
    >
      {children}
    </AsyncCodexStatsigProvider>
  );
}

function ChatGptIdentityStatsigProvider({
  appSessionId,
  appVersion,
  auth,
  browserLocale,
  currentAccount,
  hostBuildFlavor,
  plan,
  statsigClientKey,
  systemName,
  systemVersion,
  children,
}: StatsigProviderChildProps): React.ReactElement {
  const { data, isLoading, hasEverErrored } = useCurrentAccountQuery();
  const { isLoading: isAccountInfoLoading } = useHostResourceQuery(
    "account-info",
    { queryConfig: { enabled: true } },
  );
  const resolvedAccount: CurrentAccount | null = currentAccount ?? data;
  const resolvedPlan =
    plan ?? resolvedAccount?.plan_type ?? auth.planAtLogin;

  if (isAccountInfoLoading || (isLoading && !hasEverErrored)) {
    return <LoadingPage debugName="CodexStatsigProvider.async.identity" />;
  }
  return (
    <AsyncCodexStatsigProvider
      appSessionId={appSessionId}
      appVersion={appVersion}
      auth={auth}
      browserLocale={browserLocale}
      currentAccount={resolvedAccount}
      hostBuildFlavor={hostBuildFlavor}
      plan={resolvedPlan}
      statsigClientKey={statsigClientKey}
      systemName={systemName}
      systemVersion={systemVersion}
    >
      {children}
    </AsyncCodexStatsigProvider>
  );
}

function AsyncCodexStatsigProvider({
  appSessionId,
  appVersion,
  auth,
  browserLocale,
  currentAccount,
  hostBuildFlavor,
  plan,
  statsigClientKey,
  systemName,
  systemVersion,
  children,
}: StatsigProviderChildProps): React.ReactElement {
  const stableId = StableID.get(statsigClientKey);
  const builtUser = buildStatsigUser({
    appSessionId,
    appVersion,
    auth: {
      accountId: auth.accountId,
      authMethod: auth.authMethod,
      computeResidency: auth.computeResidency,
      email: auth.email,
      openAIAuth: auth.openAIAuth,
      requiresAuth: auth.requiresAuth,
      userId: auth.userId,
    },
    buildFlavor: hostBuildFlavor,
    currentAccount: {
      account_user_id: currentAccount?.account_user_id ?? null,
      id: currentAccount?.id ?? null,
      structure: currentAccount?.structure ?? null,
    },
    locale: browserLocale,
    planType: plan,
    stableId,
    systemName,
    systemVersion,
  });
  const statsigUser = finalizeStatsigUser(builtUser);
  const { client, isLoading }: { client: StatsigClientInstance; isLoading: boolean } =
    useClientAsyncInit(statsigClientKey, statsigUser, statsigOptions);
  const [appliedUser, setAppliedUser] = React.useState(
    () => client.getContext().user,
  );
  const isUserApplied =
    appliedUser.userID === statsigUser.userID &&
    isEqual(appliedUser.customIDs, statsigUser.customIDs);

  React.useEffect(() => {
    if (client == null) return;
    let cancelled = false;
    const onValuesUpdated = (event?: { status?: string }) => {
      if (event?.status === "Ready") setAppliedUser(statsigUser);
    };
    client.on("values_updated", onValuesUpdated);
    try {
      const currentUser = client.getContext().user;
      if (!isEqual(currentUser, normalizeStatsigUser(statsigUser))) {
        client
          .updateUserAsync(statsigUser)
          .then(logStatsigUpdateUserResult)
          .finally(() => {
            if (!cancelled) setAppliedUser(statsigUser);
          });
      }
    } catch (error) {
      appLogger.error("Statsig: error while checking/updating user", {
        safe: {},
        sensitive: { error },
      });
    }
    return () => {
      cancelled = true;
      client.off("values_updated", onValuesUpdated);
    };
  }, [client, statsigUser]);

  if (isLoading || !isUserApplied) {
    return (
      <LoadingPage
        debugName={"CodexStatsigProvider.async" + (isLoading ? "" : ".update")}
      />
    );
  }
  return (
    <StatsigReadyProvider
      appVersion={builtUser.appVersion}
      authMethod={builtUser.authMethod}
      client={client}
      deviceId={builtUser.stableId}
      hostBuildFlavor={builtUser.buildFlavor}
    >
      {children}
    </StatsigReadyProvider>
  );
}

function logStatsigUpdateUserResult(result: StatsigUpdateUserResult): void {
  if (!result.success) {
    appLogger.error("Statsig: error while checking/updating user", {
      safe: {},
      sensitive: { error: result.error },
    });
  }
}

interface ChatGptBootstrapStatsigProviderProps {
  appSessionId: string | undefined;
  appVersion: string | undefined;
  auth: CodexAuthState;
  browserLocale: string | undefined;
  hostBuildFlavor: string | undefined;
  stableId: string | undefined;
  statsigClientKey: string;
  systemName: string | undefined;
  systemVersion: string | undefined;
  children: React.ReactNode;
}

function ChatGptBootstrapStatsigProvider(
  props: ChatGptBootstrapStatsigProviderProps,
): React.ReactElement {
  return <SyncCodexStatsigProvider {...props} />;
}

function SyncCodexStatsigProvider({
  appSessionId,
  appVersion,
  auth,
  browserLocale,
  hostBuildFlavor,
  stableId,
  statsigClientKey,
  systemName,
  systemVersion,
  children,
}: ChatGptBootstrapStatsigProviderProps): React.ReactElement {
  const { data, mutate, status } = useMutation({
    mutationFn: async (params: PostLoginStatsigBootstrapParams) => {
      const bootstrap = await fetchPostLoginStatsigBootstrap(params);
      const client: StatsigClientInstance = new StatsigClient(
        statsigClientKey,
        bootstrap.user,
        statsigOptions,
      );
      client.dataAdapter.setData(bootstrap.statsigPayload);
      client.initializeSync();
      return client;
    },
    retry: shouldRetryStatsigBootstrap,
    retryDelay: BOOTSTRAP_RETRY_DELAY_MS,
    onError: logStatsigBootstrapError,
  });

  React.useEffect(() => {
    if (status === "idle") {
      mutate({
        appSessionId,
        appVersion,
        brandName: codexBrandName,
        buildFlavor: hostBuildFlavor,
        locale: browserLocale,
        stableId: stableId ?? undefined,
        systemName,
        systemVersion,
        windowType: "electron",
      });
    }
  }, [
    appSessionId,
    appVersion,
    status,
    browserLocale,
    hostBuildFlavor,
    stableId,
    mutate,
    systemName,
    systemVersion,
  ]);

  if (status === "error") {
    return (
      <CodexStatsigProviderForAuthMethod
        appSessionId={appSessionId}
        appVersion={appVersion}
        auth={auth}
        browserLocale={browserLocale}
        hostBuildFlavor={hostBuildFlavor}
        statsigClientKey={statsigClientKey}
        systemName={systemName}
        systemVersion={systemVersion}
      >
        {children}
      </CodexStatsigProviderForAuthMethod>
    );
  }
  if (data == null) {
    return <LoadingPage debugName="CodexStatsigProvider.sync" />;
  }
  return (
    <StatsigReadyProvider
      appVersion={appVersion}
      authMethod={auth.authMethod}
      client={data}
      deviceId={stableId}
      hostBuildFlavor={hostBuildFlavor}
    >
      {children}
    </StatsigReadyProvider>
  );
}

function logStatsigBootstrapError(error: unknown): void {
  appLogger.error("Statsig: error while bootstrapping post-login client", {
    safe: {},
    sensitive: { error },
  });
}

function shouldRetryStatsigBootstrap(
  failureCount: number,
  error: unknown,
): boolean {
  return (
    error instanceof HostRequestError &&
    error.status === 401 &&
    failureCount < MAX_BOOTSTRAP_RETRIES
  );
}

interface StatsigReadyProviderProps {
  appVersion: string | undefined;
  authMethod: string;
  client: StatsigClientInstance;
  deviceId: string | undefined;
  hostBuildFlavor: string | undefined;
  children: React.ReactNode;
}

function StatsigReadyProvider({
  appVersion,
  authMethod,
  client,
  deviceId,
  hostBuildFlavor,
  children,
}: StatsigReadyProviderProps): React.ReactElement {
  const [instanceId] = React.useState(
    () => statsigReadyProviderInstanceCounter++,
  );
  const analyticsLogger = useStatsigAnalyticsLogger({
    appVersion,
    client,
    deviceId,
    enabled: true,
  });
  const runIntervalRefresh = useEffectEvent(() =>
    refreshStatsigValuesForDiagnostics(client, "interval"),
  );

  React.useEffect(() => {
    appLogger.info("[statsig-refresh-diagnostics] ready provider mounted", {
      safe: { instanceId, windowType: "electron" },
    });
    let refreshing = false;
    const intervalId = window.setInterval(() => {
      if (refreshing) return;
      refreshing = true;
      runIntervalRefresh().finally(() => {
        refreshing = false;
      });
    }, READY_REFRESH_INTERVAL_MS);
    return () => {
      window.clearInterval(intervalId);
      appLogger.info("[statsig-refresh-diagnostics] ready provider unmounted", {
        safe: { instanceId, windowType: "electron" },
      });
    };
  }, [instanceId]);

  return (
    <statsigReadyContext.Provider value={true}>
      <StatsigProvider client={client}>
        <OwlFeaturePublisher client={client} />
        <StatsigAnalyticsBridge
          analyticsLogger={analyticsLogger}
          authMethod={authMethod}
          hostBuildFlavor={hostBuildFlavor}
        />
        {children}
      </StatsigProvider>
    </statsigReadyContext.Provider>
  );
}

function normalizeStatsigUser(user: StatsigBootstrapUser): StatsigBootstrapUser {
  return {
    ...omitUndefined(user),
    customIDs: omitUndefined(user.customIDs ?? {}),
    custom: omitUndefined(user.custom ?? {}),
  } as StatsigBootstrapUser;
}

function omitUndefined<T extends Record<string, unknown>>(value: T): Partial<T> {
  const result: Partial<T> = {};
  for (const key of Object.keys(value) as Array<keyof T>) {
    if (value[key] !== undefined) result[key] = value[key];
  }
  return result;
}
