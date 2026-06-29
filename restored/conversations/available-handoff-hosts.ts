// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the deduplicated list of hosts a thread can be handed off to:
// the current host's own config (falling back to the local host) plus every
// connected remote host, unique by host id.
import {
  LOCAL_HOST_ID,
  readSharedObjectValue,
  remoteHostsAtom,
  toHostConfig,
  uniqBy,
} from "../boundaries/onboarding-commons-externals.facade";

export type HandoffHostConfig = {
  id: string;
  display_name: string;
  kind: string;
  [key: string]: unknown;
};

type ScopeReader = {
  get: (...args: unknown[]) => unknown;
};

const LOCAL_HOST_CONFIG: HandoffHostConfig = {
  id: LOCAL_HOST_ID,
  display_name: "Local",
  kind: "local",
};

export function getAvailableHandoffHosts(
  scope: ScopeReader,
): HandoffHostConfig[] {
  return uniqBy(
    [
      (readSharedObjectValue(scope.get, "host_config") as
        | HandoffHostConfig
        | null
        | undefined) ?? LOCAL_HOST_CONFIG,
      ...(scope.get(remoteHostsAtom) as unknown[]).map(
        (host) => toHostConfig(host) as HandoffHostConfig,
      ),
    ],
    (host: HandoffHostConfig) => host.id,
  );
}
