// Restored from ref/webview/assets/custom-avatars-query-Bodwj3U-.js
import {
  _appScopeM as createQuerySignal,
  _appScopeO as useAppScope,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { once } from "../runtime/commonjs-interop";
import {
  initAppScope,
  initAppServicesRuntime,
  initQueryDurationConstants,
  initScopeRuntime,
} from "../runtime/feature-support-runtime";
import { appServices } from "../boundaries/rpc.facade";
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import {
  useSettingValue,
  writeSettingValue,
} from "../settings/setting-storage";
type AvatarDefinition = {
  assetRef: string;
  description: string;
  displayName: string;
  id: string;
  spritesheetUrl?: string;
};
type CustomAvatar = {
  description: string;
  displayName: string;
  id: string;
  spritesheetDataUrl: string;
};
type CustomAvatarsResponse = {
  avatars: CustomAvatar[];
};
type SelectedAvatarState = {
  selectedAvatar: AvatarDefinition;
  selectedAvatarId: string;
  setSelectedAvatarId(id: string): void;
};
type QueryContext = {
  get<T>(query: unknown): {
    data?: T;
  };
  scope: {
    query: {
      fetch<T>(query: unknown): Promise<T>;
      invalidate(
        query: unknown,
        options?: {
          exact?: boolean;
          refetchType?: string;
        },
      ): Promise<void>;
    };
  };
};
export const DEFAULT_AVATARS: AvatarDefinition[] = [
  {
    assetRef: "codex",
    description: "The original Codex companion.",
    displayName: "Codex",
    id: "codex",
  },
  {
    assetRef: "dewey",
    description: "A tidy duck for calm workspace days.",
    displayName: "Dewey",
    id: "dewey",
  },
  {
    assetRef: "fireball",
    description: "Hot path energy for fast iteration.",
    displayName: "Fireball",
    id: "fireball",
  },
  {
    assetRef: "hoots",
    description: "A sharp-eyed owl for polished work in a blink.",
    displayName: "Hoots",
    id: "hoots",
  },
  {
    assetRef: "rocky",
    description: "A steady rock when the diff gets large.",
    displayName: "Rocky",
    id: "rocky",
  },
  {
    assetRef: "seedy",
    description: "Small green shoots for new ideas.",
    displayName: "Seedy",
    id: "seedy",
  },
  {
    assetRef: "stacky",
    description: "A balanced stack for deep work.",
    displayName: "Stacky",
    id: "stacky",
  },
  {
    assetRef: "bsod",
    description: "A tiny blue-screen gremlin.",
    displayName: "BSOD",
    id: "bsod",
  },
  {
    assetRef: "null-signal",
    description: "Quiet signal from the void.",
    displayName: "Null Signal",
    id: "null-signal",
  },
];
const SELECTED_AVATAR_SETTING = globalSettingKeys.selectedAvatarId;
const CODEX_AVATAR_ID = "codex";
export function buildAvatarDefinitions(
  customAvatars: CustomAvatar[] | null | undefined,
): AvatarDefinition[] {
  if (customAvatars == null || customAvatars.length === 0) {
    return DEFAULT_AVATARS;
  }
  return [
    ...DEFAULT_AVATARS,
    ...customAvatars.map((avatar) => ({
      assetRef: CODEX_AVATAR_ID,
      description: avatar.description,
      displayName: avatar.displayName,
      id: avatar.id,
      spritesheetUrl: avatar.spritesheetDataUrl,
    })),
  ];
}
function findAvatarById(
  avatarId: string,
  avatars: AvatarDefinition[] = DEFAULT_AVATARS,
): AvatarDefinition {
  return (
    avatars.find((avatar) => avatar.id === avatarId) ??
    avatars.find((avatar) => avatar.id === CODEX_AVATAR_ID) ??
    avatars[0] ??
    DEFAULT_AVATARS[0]
  );
}
export function isSelectedCustomAvatarMissing(
  selectedAvatar: AvatarDefinition,
  selectedAvatarId: string | null | undefined,
): boolean {
  return (
    selectedAvatarId?.startsWith("custom:") === true &&
    selectedAvatar.id !== selectedAvatarId
  );
}
export function useSelectedAvatar(
  avatars: AvatarDefinition[],
): SelectedAvatarState {
  const scope = useAppScope(appScopeRoot);
  const selectedAvatarId = useSettingValue(SELECTED_AVATAR_SETTING);
  const selectedAvatar = findAvatarById(selectedAvatarId, avatars);
  return {
    selectedAvatar,
    selectedAvatarId,
    setSelectedAvatarId: (nextAvatarId: string) => {
      void writeSettingValue(scope, SELECTED_AVATAR_SETTING, nextAvatarId);
    },
  };
}
export const CUSTOM_AVATARS_QUERY_KEY = ["custom-avatars"];
export const initCustomAvatarsQueryChunk = once(() => {
  initScopeRuntime();
  initAppServicesRuntime();
  initAppScope();
  initQueryDurationConstants();
});

export const customAvatarsQuery = createQuerySignal(appScopeRoot, () => ({
  queryKey: CUSTOM_AVATARS_QUERY_KEY,
  queryFn: () => appServices.customAvatars.load(),
  enabled: true,
  networkMode: "always",
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  staleTime: Number.POSITIVE_INFINITY,
}));
export const selectedCustomAvatarRefreshQuery = createQuerySignalFamily(
  appScopeRoot,
  (selectedAvatarId: string, { get, scope }: QueryContext) => ({
    queryKey: [...CUSTOM_AVATARS_QUERY_KEY, "selected", selectedAvatarId],
    queryFn: async () => {
      await scope.query.invalidate(customAvatarsQuery, {
        exact: true,
        refetchType: "none",
      });
      return scope.query.fetch(customAvatarsQuery);
    },
    enabled:
      selectedAvatarId.startsWith("custom:") &&
      get<CustomAvatarsResponse>(customAvatarsQuery).data?.avatars.some(
        ({ id }) => id === selectedAvatarId,
      ) !== true,
    gcTime: 0,
    networkMode: "always",
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Number.POSITIVE_INFINITY,
  }),
);
