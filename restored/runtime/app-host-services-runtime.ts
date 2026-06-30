// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// App-host service bridge bootstrap used by the Electron app-main entry.
import { createPersistedSignal } from "./persisted-signal";
import {
  appHostServicesRaw,
  connectAppHostServicesRaw,
  initAppHostServicesRuntimeChunkRaw,
} from "./current-app-initial/remote-projects-app-shared-runtime";

type PersistentSignalFactory = <TValue>(
  key: string,
  defaultValue: TValue,
) => unknown;
type OnboardingWizardActionCatalog = {
  CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED: string;
  CODEX_ONBOARDING_WIZARD_ACTION_DISMISSED: string;
  CODEX_ONBOARDING_WIZARD_ACTION_FAILED: string;
  CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED: string;
  CODEX_ONBOARDING_WIZARD_ACTION_UNSPECIFIED: string;
  CODEX_ONBOARDING_WIZARD_ACTION_VIEWED: string;
  UNRECOGNIZED: string;
  [action: string]: string;
};
type CanonicalTurnHistory<TTurn> = {
  islands: Array<{
    entries: Array<{
      value: TTurn;
    }>;
  }>;
};
type CachedConversation<TTurn> = {
  turnHistory?: {
    kind?: string;
    history?: CanonicalTurnHistory<TTurn>;
  };
  turns?: readonly TTurn[];
};
export type AppHostInfo = {
  name?: string;
  version?: string;
  [key: string]: unknown;
};
export type AppHostServicesBridge = {
  appInfo: {
    get: () => Promise<AppHostInfo>;
  };
  workspaceFiles: {
    read(params: {
      hostId: string;
      path: string;
      representation: unknown;
    }): Promise<unknown>;
  };
  [serviceName: string]: unknown;
};

const canonicalHistoryTurnCache = new WeakMap<object, readonly unknown[]>();

export const appHostServices = new Proxy({} as AppHostServicesBridge, {
  get(_target, property) {
    return Reflect.get(getConnectedAppHostServices(), property);
  },
});

export const createPersistentSignal =
  createPersistedSignal as PersistentSignalFactory;

export const onboardingWizardAction = {
  CODEX_ONBOARDING_WIZARD_ACTION_UNSPECIFIED:
    "CODEX_ONBOARDING_WIZARD_ACTION_UNSPECIFIED",
  CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED:
    "CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED",
  CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED:
    "CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED",
  CODEX_ONBOARDING_WIZARD_ACTION_DISMISSED:
    "CODEX_ONBOARDING_WIZARD_ACTION_DISMISSED",
  CODEX_ONBOARDING_WIZARD_ACTION_FAILED:
    "CODEX_ONBOARDING_WIZARD_ACTION_FAILED",
  CODEX_ONBOARDING_WIZARD_ACTION_VIEWED:
    "CODEX_ONBOARDING_WIZARD_ACTION_VIEWED",
  UNRECOGNIZED: "UNRECOGNIZED",
} satisfies OnboardingWizardActionCatalog;

export function initAppHostServicesRuntimeChunk(): void {
  // The current bundle owns the MessagePort RPC client; this runtime exposes its
  // connected service surface under semantic names.
  initAppHostServicesRuntimeChunkRaw();
}

export async function connectAppHostServices(): Promise<void> {
  await connectAppHostServicesRaw();
}

function getConnectedAppHostServices(): AppHostServicesBridge {
  const services = appHostServicesRaw as AppHostServicesBridge | undefined;
  if (services == null) throw new Error("App host services are not connected.");
  return services;
}

export function initProductEventRuntime(): void {}

export function initPersistentSignalRuntime(): void {}

export function getCachedConversationTurns<TTurn = unknown>(
  conversation: unknown,
): readonly TTurn[] {
  const cachedConversation = conversation as CachedConversation<TTurn> | null;
  const canonicalHistory =
    cachedConversation?.turnHistory?.kind === "canonical"
      ? cachedConversation.turnHistory.history
      : null;
  if (canonicalHistory == null) {
    return cachedConversation?.turns ?? [];
  }

  const cachedTurns = canonicalHistoryTurnCache.get(canonicalHistory);
  if (cachedTurns != null) return cachedTurns as readonly TTurn[];

  const turns = canonicalHistory.islands.flatMap((island) =>
    island.entries.map((entry) => entry.value),
  );
  canonicalHistoryTurnCache.set(canonicalHistory, turns);
  return turns;
}
