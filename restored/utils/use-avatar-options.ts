// Restored from ref/webview/assets/use-avatar-options-CMZnWjwp.js
import { _appScopeS as useSignalValue } from "../boundaries/app-scope";
import { once } from "../runtime/commonjs-interop";
import {
  getChunkModuleExports,
  initScopeRuntime,
} from "../runtime/shared-utility-runtime";
import {
  buildAvatarDefinitions,
  customAvatarsQuery,
  initCustomAvatarsQueryChunk,
} from "../features/custom-avatars-query";
type CustomAvatarsQueryData = {
  avatarDirectory?: string | null;
  avatars?: Parameters<typeof buildAvatarDefinitions>[0];
};
type CustomAvatarsQueryState = {
  data?: CustomAvatarsQueryData;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
};
type AvatarOptionsResult = {
  avatarDirectory: string | null;
  avatarOptions: ReturnType<typeof buildAvatarDefinitions>;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
};
export const initUseAvatarOptionsChunk = once(() => {
  getChunkModuleExports();
  initScopeRuntime();
  initCustomAvatarsQueryChunk();
});
export function useAvatarOptions(): AvatarOptionsResult {
  const { data, isError, isFetching, isLoading } = useSignalValue(
    customAvatarsQuery,
  ) as CustomAvatarsQueryState;
  const avatarOptions = buildAvatarDefinitions(data?.avatars);
  return {
    avatarDirectory: data?.avatarDirectory ?? null,
    avatarOptions,
    isError,
    isFetching,
    isLoading,
  };
}
