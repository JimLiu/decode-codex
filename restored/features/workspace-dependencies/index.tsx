// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js
// Shared preview image fallback and workspace dependency feature detection.

import React from "react";
import clsx from "clsx";
import { once } from "../../runtime/commonjs-interop";
import {
  FallbackGlobeIcon,
  getChunkModuleExports,
  getJsxRuntime,
  initClassNameRuntime,
  initGlobeIconChunk,
  initReactRuntime,
} from "../../runtime/feature-support-runtime";

export type ImageWithFallbackIconProps = {
  className?: string;
  showFallbackWhileLoading?: boolean;
  src: string;
};

export type WorkspaceDependencyFeatureFlag = {
  enabled?: boolean;
  name?: string;
};

export const initImageWithFallbackIconChunk = once(() => {
  getChunkModuleExports();
  initClassNameRuntime();
  initReactRuntime();
  initGlobeIconChunk();
  getJsxRuntime();
});

export const initWorkspaceDependenciesFeatureChunk = once(() => {});

export function ImageWithFallbackIcon({
  className,
  showFallbackWhileLoading = true,
  src,
}: ImageWithFallbackIconProps): JSX.Element {
  const [loadedSrc, setLoadedSrc] = React.useState<string | null>(null);
  const [failedSrc, setFailedSrc] = React.useState<string | null>(null);

  const showFallback =
    failedSrc === src || (showFallbackWhileLoading && loadedSrc !== src);
  const showImage = failedSrc !== src;

  return (
    <span
      className={clsx(
        "relative flex shrink-0 items-center justify-center",
        className,
      )}
    >
      {showFallback ? (
        <FallbackGlobeIcon aria-hidden={true} className="h-full w-full" />
      ) : null}
      {showImage ? (
        <img
          alt=""
          className={clsx(
            "absolute h-full w-full rounded-2xs object-contain",
            loadedSrc === src ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onError={() => {
            setFailedSrc(src);
          }}
          onLoad={() => {
            setLoadedSrc(src);
          }}
          referrerPolicy="no-referrer"
          src={src}
        />
      ) : null}
    </span>
  );
}

export function hasWorkspaceDependenciesFeature(
  features: readonly WorkspaceDependencyFeatureFlag[] | null | undefined,
): boolean {
  return (
    features?.some(
      (feature) =>
        feature.name === "workspace_dependencies" && feature.enabled === true,
    ) ?? false
  );
}

export default ImageWithFallbackIcon;
