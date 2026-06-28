// Restored from ref/webview/assets/external-link-favicon-QeoIWTbH.js
// external-link-favicon-QeoIWTbH chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { GlobeIcon } from "../icons/globe-icon";
type ExternalLinkFaviconProps = {
  href: string;
  className?: string;
};
export function ExternalLinkFavicon({
  href,
  className,
}: ExternalLinkFaviconProps) {
  const faviconUrl = getFaviconUrl(href);
  const [loadedFaviconUrl, setLoadedFaviconUrl] = React.useState<string | null>(
    null,
  );
  const [failedFaviconUrl, setFailedFaviconUrl] = React.useState<string | null>(
    null,
  );
  const wrapperClassName = clsx("relative inline-block shrink-0", className);
  const shouldShowFallback =
    faviconUrl == null ||
    failedFaviconUrl === faviconUrl ||
    loadedFaviconUrl !== faviconUrl;
  return (
    <span className={wrapperClassName}>
      {shouldShowFallback ? (
        <GlobeIcon aria-hidden={true} className="h-full w-full" />
      ) : null}
      {faviconUrl != null && failedFaviconUrl !== faviconUrl ? (
        <img
          alt=""
          className={clsx(
            "absolute inset-0 h-full w-full rounded-2xs object-contain",
            loadedFaviconUrl === faviconUrl ? "opacity-100" : "opacity-0",
          )}
          decoding="async"
          draggable={false}
          onError={() => {
            setFailedFaviconUrl(faviconUrl);
          }}
          onLoad={() => {
            setLoadedFaviconUrl(faviconUrl);
          }}
          referrerPolicy="no-referrer"
          src={faviconUrl}
        />
      ) : null}
    </span>
  );
}
function getFaviconUrl(href: string) {
  try {
    const url = new URL(href);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return `${url.origin}/favicon.ico`;
  } catch {
    return null;
  }
}
