// Restored from ref/webview/assets/artifact-file-preview-icon-LMyZNsDA.js
// Also matches ref/webview/assets/artifact-file-preview-icon-DejMdUR4.js.
// Artifact file preview icon restored from the Codex webview bundle.
import type { ComponentType, SVGProps } from "react";
import clsx from "clsx";
import { getFileIcon } from "../utils/get-file-icon";

type ArtifactFilePreviewIconProps = {
  path: string;
  iconClassName?: string;
  imageClassName?: string;
  getImagePreviewSrc?: (path: string) => string | null | undefined;
};

export function initArtifactFilePreviewIconChunk(): void {
  // The bundled chunk used this export to initialize lazy runtime bindings.
  // The semantic module imports dependencies eagerly, so no runtime work remains.
}

export function ArtifactFilePreviewIcon({
  getImagePreviewSrc,
  iconClassName,
  imageClassName,
  path,
}: ArtifactFilePreviewIconProps) {
  const imagePreviewSrc = getImagePreviewSrc?.(path) ?? null;
  if (imagePreviewSrc != null) {
    return (
      <img
        alt=""
        className={clsx("shrink-0 object-cover", imageClassName)}
        src={imagePreviewSrc}
      />
    );
  }
  const Icon = getFileIcon(path) as ComponentType<SVGProps<SVGSVGElement>>;
  return <Icon className={clsx("shrink-0", iconClassName)} />;
}
