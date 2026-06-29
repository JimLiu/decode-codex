// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Whether the ChatGPT "fast mode" service tier is available for a host.
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeS as useAppScopeValue,
} from "../boundaries/app-scope";
import { useAuthForHost } from "../auth/use-auth";
import {
  defaultHostIdSignal,
  serverConfigRequirementsQuery,
} from "../boundaries/onboarding-commons-externals.facade";

export interface UseServiceTierOptions {
  hostId?: string;
}

export interface ServiceTierState {
  isServiceTierAllowed: boolean;
  isLoading: boolean;
}

export function useServiceTier(
  options?: UseServiceTierOptions,
): ServiceTierState {
  const defaultHostId = useAppScopeValue(defaultHostIdSignal);
  const hostId = options?.hostId ?? defaultHostId;
  const auth = useAuthForHost(hostId);
  const isChatgpt = auth?.authMethod === "chatgpt";
  const authMethod = auth?.authMethod ?? null;
  const { data, isPending } = useAppScopeFamilyValue(
    serverConfigRequirementsQuery,
    { authMethod, hostId },
  );
  const isLoading = !!auth?.isLoading || (isChatgpt && isPending);
  const isServiceTierAllowed =
    isChatgpt &&
    !isLoading &&
    data != null &&
    data?.requirements?.featureRequirements?.fast_mode !== false;
  return { isServiceTierAllowed, isLoading };
}
