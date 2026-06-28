// Restored from ref/webview/assets/prompt-text-BpPEyD-S.js
// prompt-text-BpPEyD-S chunk restored from the Codex webview bundle.
import { parseDirectivesU as scanMarkdownPromptLink } from "../../utils/parse-directives";
import type { ParsedMarkdownPromptLink, PromptTextSchema } from "./types";
export const CODEX_TEXT_LINK_PREFIX = "codex-text-link://";
export const possibleUrlPattern =
  /^(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|www\.|mailto:|tel:)/;
export function createFallbackMarkdownText(
  schema: PromptTextSchema,
  rawLabel: string,
  rawHref: string,
): unknown {
  return schema.text(`[${rawLabel}](${rawHref})`);
}
export function hasMarkdownPromptLink(
  text: string,
  predicate: (link: ParsedMarkdownPromptLink) => boolean,
): boolean {
  let searchIndex = 0;
  for (; searchIndex < text.length; ) {
    const link = scanMarkdownPromptLink(
      text,
      searchIndex,
    ) as ParsedMarkdownPromptLink | null;
    if (link == null) break;
    if (predicate(link)) return true;
    searchIndex = link.end;
  }
  return false;
}
