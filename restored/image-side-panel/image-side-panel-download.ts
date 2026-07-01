// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File-name derivation used by the image side-panel download button.

function getFileNameFromUrl(url: string): string | null {
  if (url.startsWith("data:")) return null;
  const lastSegment = url.split(/[?#]/, 1)[0].split(/[\\/]/).at(-1);
  if (lastSegment == null || lastSegment.length === 0) return null;
  try {
    return decodeURIComponent(lastSegment);
  } catch {
    return lastSegment;
  }
}

function getFileExtension(value: string): string | null {
  const extension =
    value.match(/\.([a-z0-9]+)$/i)?.[1] ??
    /^data:image\/([a-z0-9.+-]+)[;,]/i.exec(value)?.[1];
  if (extension == null) return null;
  return extension.toLowerCase() === "jpeg" ? "jpg" : extension.toLowerCase();
}

export function deriveDownloadFileName(src: string, alt: string): string {
  const fileName = getFileNameFromUrl(src);
  const baseName = alt.trim().length > 0 ? alt.trim() : (fileName ?? "image");
  return getFileExtension(baseName) == null
    ? `${baseName}.${getFileExtension(fileName ?? src) ?? "png"}`
    : baseName;
}
