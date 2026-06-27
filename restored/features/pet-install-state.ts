// Restored from ref/webview/assets/pet-install-state-DNnY2nH8.js
// Pet install preview/install session state for the current Codex webview.
import { once } from "../runtime/commonjs-interop";
import {
  $N as initPetInstallSignalRuntime,
  $P as initAppScope,
  AB as initScopeRuntime,
  QP as appScopeRoot,
  YN as sendHostRequest,
  yV as createSignal,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export interface PetInstallParams {
  name: string;
  description: string;
  imageUrl: string;
}

export type PetInstallSession =
  | null
  | (PetInstallParams & { status: "loading" })
  | (PetInstallParams & { status: "ready"; preview: unknown })
  | (PetInstallParams & { status: "previewError" })
  | (PetInstallParams & { status: "installing" })
  | (PetInstallParams & { status: "installError" })
  | (PetInstallParams & {
      status: "installed";
      installedAvatarId: string;
    });

type PetInstallScope = {
  get: <TValue>(signal: unknown) => TValue;
  set: <TValue>(signal: unknown, value: TValue) => void;
};

type LoadPetInstallPreview = (params: PetInstallParams) => Promise<unknown>;

type InstallPetRequest = (params: PetInstallParams) => Promise<{ id: string }>;

export let petInstallSession$: ReturnType<typeof createSignal>;

export const initPetInstallStateChunk = once(() => {
  initScopeRuntime();
  initAppScope();
  initPetInstallSignalRuntime();
  petInstallSession$ = createSignal(appScopeRoot, null);
});

export async function startPetInstallSession(
  scope: PetInstallScope,
  params: PetInstallParams,
  loadPreview: LoadPetInstallPreview = (nextParams) =>
    sendHostRequest("pet-install-preview", {
      params: nextParams,
    }) as Promise<unknown>,
): Promise<void> {
  if (scope.get<PetInstallSession>(petInstallSession$)?.status === "installing")
    return;

  const loadingSession: PetInstallSession = {
    ...params,
    status: "loading",
  };
  scope.set(petInstallSession$, loadingSession);

  try {
    const preview = await loadPreview(params);
    if (scope.get<PetInstallSession>(petInstallSession$) !== loadingSession)
      return;
    scope.set(petInstallSession$, {
      ...params,
      status: "ready",
      preview,
    });
  } catch {
    if (scope.get<PetInstallSession>(petInstallSession$) !== loadingSession)
      return;
    scope.set(petInstallSession$, {
      ...params,
      status: "previewError",
    });
  }
}

export async function installPet(
  scope: PetInstallScope,
  refreshCustomAvatars: () => Promise<unknown>,
  install: InstallPetRequest = (params) =>
    sendHostRequest("pet-install", { params }) as Promise<{ id: string }>,
): Promise<void> {
  const currentSession = scope.get<PetInstallSession>(petInstallSession$);
  if (
    currentSession?.status !== "ready" &&
    currentSession?.status !== "installError"
  )
    return;

  const installingSession: PetInstallSession = {
    ...currentSession,
    status: "installing",
  };
  scope.set(petInstallSession$, installingSession);

  let installedAvatar: { id: string };
  try {
    installedAvatar = await install({
      name: currentSession.name,
      description: currentSession.description,
      imageUrl: currentSession.imageUrl,
    });
  } catch {
    if (scope.get<PetInstallSession>(petInstallSession$) !== installingSession)
      return;
    scope.set(petInstallSession$, {
      ...currentSession,
      status: "installError",
    });
    return;
  }

  if (scope.get<PetInstallSession>(petInstallSession$) === installingSession) {
    scope.set(petInstallSession$, {
      ...currentSession,
      status: "installed",
      installedAvatarId: installedAvatar.id,
    });
    await refreshCustomAvatars().catch(() => undefined);
  }
}

export function closePetInstallSession(scope: PetInstallScope): void {
  scope.set(petInstallSession$, null);
}
