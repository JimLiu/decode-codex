// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Browser-file and attachment utility helpers shared by composer attachment hooks.

import { generateId } from "../boundaries/onboarding-commons-externals.facade";

function mimeTypeToExtension(mimeType: string): string {
  const subtype = mimeType.split("/")[1] || "png";
  return subtype === "jpeg" ? "jpg" : subtype;
}

export function deriveImageFilename(file: File): string {
  if (file.name.trim().length > 0) return file.name;
  const extension = mimeTypeToExtension(file.type || "image/png");
  return `pasted-image-${generateId().slice(0, 8)}.${extension}`;
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export function firstNonEmptyLine(text: string): string | null {
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.length > 0) return trimmed;
  }
  return null;
}

export function resolveAttachmentHostId(
  attachment: { hostId?: string },
  fallbackHostId: string,
): string {
  return attachment.hostId ?? fallbackHostId;
}

export function pickBrowserFiles({
  imagesOnly,
}: { imagesOnly?: boolean } = {}): Promise<File[]> {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    if (imagesOnly) input.accept = "image/*";
    input.style.display = "none";
    const finish = (files: File[]): void => {
      input.remove();
      resolve(files);
    };
    input.addEventListener(
      "change",
      () => finish(input.files == null ? [] : Array.from(input.files)),
      { once: true },
    );
    input.addEventListener("cancel", () => finish([]), { once: true });
    (document.body ?? document.documentElement).append(input);
    input.click();
  });
}
