// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// Lightweight mime-types compatibility surface used by file-open analytics.

const MIME_BY_EXTENSION: Record<string, string> = {
  css: "text/css",
  csv: "text/csv",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "application/json",
  markdown: "text/markdown",
  md: "text/markdown",
  mjs: "text/javascript",
  pdf: "application/pdf",
  png: "image/png",
  svg: "image/svg+xml",
  ts: "text/typescript",
  txt: "text/plain",
  webp: "image/webp",
};

const EXTENSION_BY_MIME = Object.fromEntries(
  Object.entries(MIME_BY_EXTENSION).map(([extension, mimeType]) => [
    mimeType,
    extension,
  ]),
);
const EXTENSIONS_BY_MIME = Object.entries(MIME_BY_EXTENSION).reduce<
  Record<string, string[]>
>((extensionsByMime, [extension, mimeType]) => {
  (extensionsByMime[mimeType] ??= []).push(extension);
  return extensionsByMime;
}, {});

function normalizeExtension(pathOrExtension: string) {
  const lastPathSegment = pathOrExtension.split(/[\\/]/u).pop() ?? "";
  const dotIndex = lastPathSegment.lastIndexOf(".");
  const extension =
    dotIndex >= 0 ? lastPathSegment.slice(dotIndex + 1) : lastPathSegment;
  return extension.trim().toLowerCase();
}

function normalizeMimeType(type: string) {
  return type.trim().split(/[;\s]/u)[0]?.toLowerCase() ?? "";
}

export function lookupMimeType(pathOrExtension: string) {
  if (!pathOrExtension || typeof pathOrExtension !== "string") return false;
  return MIME_BY_EXTENSION[normalizeExtension(pathOrExtension)] ?? false;
}

export function getMimeExtension(type: string) {
  if (!type || typeof type !== "string") return false;
  return EXTENSION_BY_MIME[normalizeMimeType(type)] ?? false;
}

export function getMimeCharset(type: string) {
  const normalizedType = normalizeMimeType(type);
  if (normalizedType.startsWith("text/")) return "UTF-8";
  return normalizedType === "application/json" ||
    normalizedType.endsWith("+json") ||
    normalizedType.endsWith("+xml")
    ? "UTF-8"
    : false;
}

export function getMimeContentType(pathOrType: string) {
  if (!pathOrType || typeof pathOrType !== "string") return false;
  const type = pathOrType.includes("/")
    ? normalizeMimeType(pathOrType)
    : lookupMimeType(pathOrType);
  if (!type) return false;
  const charset = getMimeCharset(type);
  return charset && !String(type).includes("charset")
    ? `${type}; charset=${String(charset).toLowerCase()}`
    : type;
}

export function createMimeTypesModule() {
  return {
    charset: getMimeCharset,
    charsets: { lookup: getMimeCharset },
    contentType: getMimeContentType,
    extension: getMimeExtension,
    extensions: EXTENSIONS_BY_MIME,
    lookup: lookupMimeType,
    types: MIME_BY_EXTENSION,
  };
}
