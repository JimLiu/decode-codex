// Restored from ref/webview/assets/prompt-text-BpPEyD-S.js
// prompt-text-BpPEyD-S chunk restored from the Codex webview bundle.
import {
  parseDirectivesG as decodePromptLinkLabel,
  parseDirectivesUnderscore as decodePromptLinkPath,
} from "../../utils/parse-directives";
import { classifyMentionHref } from "../mention-item";
import {
  createRichLinkFromDisplayText,
  normalizeRichLinkHref,
} from "../../ui/rich-link-g-oum-tm-pc";
import {
  CODEX_TEXT_LINK_PREFIX,
  hasMarkdownPromptLink,
  possibleUrlPattern,
} from "./link-utils";
export function hasRestorablePromptLinks(text: string): boolean {
  return (
    hasRestorableMentionOrPathLink(text) ||
    hasMarkdownPromptLink(text, ({ label, path }) => {
      const isTextLink = path.startsWith(CODEX_TEXT_LINK_PREFIX);
      const href = decodePromptLinkPath(
        isTextLink ? path.slice(CODEX_TEXT_LINK_PREFIX.length) : path,
      );
      return isTextLink
        ? normalizeRichLinkHref(href) != null
        : createRichLinkFromDisplayText({
            displayText: decodePromptLinkLabel(label),
            href,
          }) != null;
    })
  );
}
export function hasRestorableTextLinks(text: string): boolean {
  return hasMarkdownPromptLink(
    text,
    ({ path }) => normalizeRichLinkHref(decodePromptLinkPath(path)) != null,
  );
}
export function hasRestorableMentionOrPathLink(text: string): boolean {
  return hasMarkdownPromptLink(text, ({ label, path }) => {
    const href = decodePromptLinkPath(path);
    return (
      classifyMentionHref({
        href,
        label: decodePromptLinkLabel(label),
      }) !== "text" || !possibleUrlPattern.test(href)
    );
  });
}
