// Restored from ref/webview/assets/avatar-overlay-featuregate-page-CD3wz3Jd.js
// Current avatar overlay feature gate page backing bundle with restored dependency imports.

import { lazy, type ReactElement } from "react";
import { once } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerALowerR as initLazyPreloadRuntime,
  currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedMember0781 as useAvatarOverlayNativeRendererGate,
  currentAppInitialSharedRuntime0816 as initStatsigGateRuntime,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

const AVATAR_OVERLAY_NATIVE_RENDERER_GATE = "3563904085";

const LazyAvatarOverlayNativePage = lazy(async () => {
  const { AvatarOverlayNativePage } = await import(
    "../runtime/current-app-initial/avatar-overlay-native-page-current-runtime"
  );
  return { default: AvatarOverlayNativePage };
});

const LazyAvatarOverlayPage = lazy(async () => {
  const { AvatarOverlayPage } = await import(
    "../runtime/current-app-initial/avatar-overlay-page-current-runtime"
  );
  return { default: AvatarOverlayPage };
});

export function AvatarOverlayFeatureGatePage(): ReactElement {
  const useNativeOverlayRenderer = useAvatarOverlayNativeRendererGate(
    AVATAR_OVERLAY_NATIVE_RENDERER_GATE,
  );

  return useNativeOverlayRenderer ? (
    <LazyAvatarOverlayNativePage />
  ) : (
    <LazyAvatarOverlayPage />
  );
}

export { AvatarOverlayFeatureGatePage as AvatarOverlayFeaturegatePage };

once(() => {
  initReactCompilerRuntime();
  initStatsigGateRuntime();
  initLazyPreloadRuntime();
})();
