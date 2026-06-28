// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// markdown-to-search-text-D4gbAqkt chunk restored from the Codex webview bundle.
import * as markdownRenderer from "../../vendor/markdown-renderer";
type MarkdownNode = {
  children?: MarkdownNode[];
  type?: string;
};
const SPACING_CONTAINER_TYPES = new Set([
  "root",
  "blockquote",
  "list",
  "listItem",
]);
function markdownToSearchText(markdown: string) {
  const trimmedMarkdown = markdown.trim();
  return trimmedMarkdown.length === 0
    ? ""
    : markdownNodeToSearchText(markdownRenderer.libT(trimmedMarkdown))
        .replace(/\s+/g, " ")
        .trim();
}
function markdownNodeToSearchText(node: MarkdownNode) {
  return SPACING_CONTAINER_TYPES.has(node.type ?? "")
    ? (node.children ?? []).map(markdownNodeToSearchText).join(" ")
    : markdownRenderer.libY(node);
}
export { markdownToSearchText };
