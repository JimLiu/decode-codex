// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Semantic external-link icon wrapper used by conversation summary rows.
import type { ComponentType, SVGProps } from "react";
import { LinkExternalIcon } from "./link-external-icon";

export type ExternalLinkIconProps = SVGProps<SVGSVGElement> & {
  ExternalIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string | null;
};

export function ExternalLinkIcon({
  ExternalIcon = LinkExternalIcon,
  href: _href,
  ...props
}: ExternalLinkIconProps) {
  return <ExternalIcon {...props} />;
}

export function initExternalLinkIconChunk(): void {}

export default ExternalLinkIcon;
