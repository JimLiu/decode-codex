// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js
// Pull-request description markdown renderer.
import * as React from "react";
import clsx from "clsx";
import type { ReactElement, ReactNode } from "react";

const MARKDOWN_FENCE_START_PATTERN = /^(`{3,}|~{3,})(.*)$/;
const MARKDOWN_DETAILS_START_PATTERN =
  /^:::github-details\{summary=(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')(\s+open="true")?\}$/;
const MARKDOWN_DETAILS_END_PATTERN = /^:::\s*$/;
const MARKDOWN_HEADING_PATTERN = /^(#{1,6})\s+(.+)$/;
const MARKDOWN_UNORDERED_ITEM_PATTERN = /^\s*[-*+]\s+(.+)$/;
const MARKDOWN_ORDERED_ITEM_PATTERN = /^\s*(\d+)[.)]\s+(.+)$/;
const MARKDOWN_BLOCKQUOTE_PATTERN = /^\s*>\s?(.*)$/;
const MARKDOWN_HORIZONTAL_RULE_PATTERN = /^\s{0,3}([-*_])(?:\s*\1){2,}\s*$/;
const MARKDOWN_INLINE_PATTERN =
  /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|<br\s*\/?>)/gi;
const SAFE_LINK_PROTOCOL_PATTERN =
  /^(https?:|mailto:|file:|vscode:|command:|codex-text-link:|\/|#)/i;

export interface PullRequestDescriptionMarkdownProps {
  allowBasicHtml?: boolean;
  allowWideBlocks?: boolean;
  children?: ReactNode;
  className?: string;
  components?: Record<string, unknown>;
  conversationId?: string | null;
  cwd?: string | null;
  directives?: Record<string, unknown>;
  extensions?: unknown[];
  forceCodeBlockWordWrap?: boolean;
  hideCodeBlocks?: boolean;
  hostId?: string | null;
  isBrowserSidebarEnabled?: boolean;
  mediaCacheKey?: string | null;
  onAddSelectedTextToChat?: (...args: unknown[]) => unknown;
  onFileLinkOpen?: (...args: unknown[]) => unknown;
  openFileLinksInSidePanel?: boolean;
  renderCodeBlocksAsWritingBlocks?: boolean;
  renderCodeBlocksImmediately?: boolean;
  textStyle?: "assistant-message" | "chat" | "small";
  turnId?: string | null;
}

type MarkdownBlock =
  | { kind: "blockquote"; lines: string[] }
  | { kind: "code"; code: string; language?: string }
  | {
      kind: "details";
      blocks: MarkdownBlock[];
      open: boolean;
      summary: string;
    }
  | { kind: "heading"; level: number; text: string }
  | { kind: "hr" }
  | { kind: "ordered-list"; items: string[]; start: number }
  | { kind: "paragraph"; lines: string[] }
  | { kind: "unordered-list"; items: string[] };

type MarkdownErrorBoundaryProps = {
  children: ReactNode;
  resetKey: string;
};

type MarkdownErrorBoundaryState = {
  hasError: boolean;
};

export function initPullRequestDescriptionMarkdownRendererChunk(): void {}

export function PullRequestDescriptionMarkdown({
  allowBasicHtml = false,
  children,
  className,
  hideCodeBlocks = false,
}: PullRequestDescriptionMarkdownProps): ReactElement {
  const markdown = reactNodeToMarkdown(children);
  const blocks = React.useMemo(() => parseMarkdownBlocks(markdown), [markdown]);

  return React.createElement(
    PullRequestMarkdownErrorBoundary,
    { resetKey: markdown },
    React.createElement(
      "div",
      {
        className: clsx(
          "break-words",
          "text-token-foreground",
          "[&_a]:underline [&_a]:underline-offset-2",
          "[&_blockquote]:border-l [&_blockquote]:border-token-border-default [&_blockquote]:pl-3",
          "[&_code]:rounded-sm [&_code]:bg-token-foreground/10 [&_code]:px-1 [&_code]:py-0.5",
          "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
          className,
        ),
      },
      renderMarkdownBlocks(blocks, {
        allowBasicHtml,
        hideCodeBlocks,
        keyPrefix: "pull-request-description",
      }),
    ),
  );
}

class PullRequestMarkdownErrorBoundary extends React.Component<
  MarkdownErrorBoundaryProps,
  MarkdownErrorBoundaryState
> {
  state: MarkdownErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): MarkdownErrorBoundaryState {
    return { hasError: true };
  }

  componentDidUpdate(previousProps: MarkdownErrorBoundaryProps): void {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return React.createElement(
        "div",
        {
          className:
            "rounded-md border border-token-border-default bg-token-foreground/5 px-3 py-2 text-sm text-token-text-secondary",
          role: "alert",
        },
        "Unable to render pull request description.",
      );
    }

    return this.props.children;
  }
}

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const { blocks } = parseMarkdownBlockRange(lines, 0);
  return blocks;
}

function parseMarkdownBlockRange(
  lines: readonly string[],
  startIndex: number,
): { blocks: MarkdownBlock[]; nextIndex: number } {
  const blocks: MarkdownBlock[] = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index] ?? "";
    if (line.trim().length === 0) {
      index += 1;
      continue;
    }
    if (MARKDOWN_DETAILS_END_PATTERN.test(line)) {
      break;
    }

    const fenceMatch = line.match(MARKDOWN_FENCE_START_PATTERN);
    if (fenceMatch != null) {
      const fence = fenceMatch[1] ?? "```";
      const language = (fenceMatch[2] ?? "").trim() || undefined;
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length) {
        const codeLine = lines[index] ?? "";
        if (codeLine.startsWith(fence)) {
          index += 1;
          break;
        }
        codeLines.push(codeLine);
        index += 1;
      }

      blocks.push({ kind: "code", code: codeLines.join("\n"), language });
      continue;
    }

    const detailsMatch = line.match(MARKDOWN_DETAILS_START_PATTERN);
    if (detailsMatch != null) {
      const summary = unescapeQuotedAttribute(
        detailsMatch[1] ?? detailsMatch[2] ?? "",
      );
      const open = detailsMatch[3] != null;
      const result = parseMarkdownBlockRange(lines, index + 1);
      blocks.push({ kind: "details", blocks: result.blocks, open, summary });
      index =
        result.nextIndex < lines.length &&
        MARKDOWN_DETAILS_END_PATTERN.test(lines[result.nextIndex] ?? "")
          ? result.nextIndex + 1
          : result.nextIndex;
      continue;
    }

    const headingMatch = line.match(MARKDOWN_HEADING_PATTERN);
    if (headingMatch != null) {
      blocks.push({
        kind: "heading",
        level: Math.min(headingMatch[1]?.length ?? 1, 6),
        text: headingMatch[2] ?? "",
      });
      index += 1;
      continue;
    }

    if (MARKDOWN_HORIZONTAL_RULE_PATTERN.test(line)) {
      blocks.push({ kind: "hr" });
      index += 1;
      continue;
    }

    const unorderedItemMatch = line.match(MARKDOWN_UNORDERED_ITEM_PATTERN);
    if (unorderedItemMatch != null) {
      const items: string[] = [];
      while (index < lines.length) {
        const itemMatch = (lines[index] ?? "").match(
          MARKDOWN_UNORDERED_ITEM_PATTERN,
        );
        if (itemMatch == null) break;
        items.push(itemMatch[1] ?? "");
        index += 1;
      }
      blocks.push({ kind: "unordered-list", items });
      continue;
    }

    const orderedItemMatch = line.match(MARKDOWN_ORDERED_ITEM_PATTERN);
    if (orderedItemMatch != null) {
      const start = Number(orderedItemMatch[1] ?? "1");
      const items: string[] = [];
      while (index < lines.length) {
        const itemMatch = (lines[index] ?? "").match(
          MARKDOWN_ORDERED_ITEM_PATTERN,
        );
        if (itemMatch == null) break;
        items.push(itemMatch[2] ?? "");
        index += 1;
      }
      blocks.push({ kind: "ordered-list", items, start });
      continue;
    }

    const blockquoteMatch = line.match(MARKDOWN_BLOCKQUOTE_PATTERN);
    if (blockquoteMatch != null) {
      const quoteLines: string[] = [];
      while (index < lines.length) {
        const quoteMatch = (lines[index] ?? "").match(
          MARKDOWN_BLOCKQUOTE_PATTERN,
        );
        if (quoteMatch == null) break;
        quoteLines.push(quoteMatch[1] ?? "");
        index += 1;
      }
      blocks.push({ kind: "blockquote", lines: quoteLines });
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      shouldContinueParagraph(lines[index] ?? "")
    ) {
      paragraphLines.push(lines[index] ?? "");
      index += 1;
    }
    blocks.push({ kind: "paragraph", lines: paragraphLines });
  }

  return { blocks, nextIndex: index };
}

function shouldContinueParagraph(line: string): boolean {
  return (
    line.trim().length > 0 &&
    !MARKDOWN_DETAILS_END_PATTERN.test(line) &&
    !MARKDOWN_DETAILS_START_PATTERN.test(line) &&
    !MARKDOWN_FENCE_START_PATTERN.test(line) &&
    !MARKDOWN_HEADING_PATTERN.test(line) &&
    !MARKDOWN_HORIZONTAL_RULE_PATTERN.test(line) &&
    !MARKDOWN_UNORDERED_ITEM_PATTERN.test(line) &&
    !MARKDOWN_ORDERED_ITEM_PATTERN.test(line) &&
    !MARKDOWN_BLOCKQUOTE_PATTERN.test(line)
  );
}

function renderMarkdownBlocks(
  blocks: readonly MarkdownBlock[],
  options: {
    allowBasicHtml: boolean;
    hideCodeBlocks: boolean;
    keyPrefix: string;
  },
): ReactNode[] {
  return blocks.map((block, index) =>
    renderMarkdownBlock(block, {
      ...options,
      key: `${options.keyPrefix}-${index}`,
    }),
  );
}

function renderMarkdownBlock(
  block: MarkdownBlock,
  options: {
    allowBasicHtml: boolean;
    hideCodeBlocks: boolean;
    key: string;
    keyPrefix: string;
  },
): ReactNode {
  switch (block.kind) {
    case "blockquote":
      return React.createElement(
        "blockquote",
        { className: "my-3 text-token-text-secondary", key: options.key },
        renderMarkdownBlocks(parseMarkdownBlocks(block.lines.join("\n")), {
          ...options,
          keyPrefix: `${options.key}-quote`,
        }),
      );
    case "code":
      if (options.hideCodeBlocks) return null;
      return React.createElement(
        "pre",
        {
          className:
            "my-3 overflow-x-auto rounded-md bg-token-foreground/10 p-3 text-sm",
          key: options.key,
        },
        React.createElement(
          "code",
          {
            className:
              block.language == null ? undefined : `language-${block.language}`,
          },
          block.code,
        ),
      );
    case "details":
      return React.createElement(
        "details",
        { className: "my-3", key: options.key, open: block.open },
        React.createElement(
          "summary",
          { className: "cursor-pointer font-medium" },
          renderInlineMarkdown(block.summary, options),
        ),
        React.createElement(
          "div",
          { className: "mt-2 pl-4" },
          renderMarkdownBlocks(block.blocks, {
            ...options,
            keyPrefix: `${options.key}-details`,
          }),
        ),
      );
    case "heading": {
      const tagName = `h${block.level}`;
      return React.createElement(
        tagName,
        {
          className: headingClassName(block.level),
          key: options.key,
        },
        renderInlineMarkdown(block.text, options),
      );
    }
    case "hr":
      return React.createElement("hr", {
        className: "my-4 border-token-border-default",
        key: options.key,
      });
    case "ordered-list":
      return React.createElement(
        "ol",
        {
          className: "my-3 list-decimal space-y-1 pl-5",
          key: options.key,
          start: block.start,
        },
        block.items.map((item, itemIndex) =>
          React.createElement(
            "li",
            { key: `${options.key}-item-${itemIndex}` },
            renderInlineMarkdown(item, options),
          ),
        ),
      );
    case "paragraph":
      return React.createElement(
        "p",
        { className: "my-3", key: options.key },
        renderInlineMarkdown(block.lines.join("\n"), options),
      );
    case "unordered-list":
      return React.createElement(
        "ul",
        {
          className: "my-3 list-disc space-y-1 pl-5",
          key: options.key,
        },
        block.items.map((item, itemIndex) =>
          React.createElement(
            "li",
            { key: `${options.key}-item-${itemIndex}` },
            renderInlineMarkdown(item, options),
          ),
        ),
      );
  }
}

function renderInlineMarkdown(
  text: string,
  options: { allowBasicHtml: boolean; keyPrefix: string },
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  MARKDOWN_INLINE_PATTERN.lastIndex = 0;

  while ((match = MARKDOWN_INLINE_PATTERN.exec(text)) != null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const token = match[0];
    nodes.push(
      renderInlineToken(token, {
        ...options,
        key: `${options.keyPrefix}-inline-${nodes.length}`,
      }),
    );
    cursor = match.index + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes.length === 0 ? [text] : nodes;
}

function renderInlineToken(
  token: string,
  options: {
    allowBasicHtml: boolean;
    key: string;
    keyPrefix: string;
  },
): ReactNode {
  if (/^<br\s*\/?>$/i.test(token)) {
    return options.allowBasicHtml
      ? React.createElement("br", { key: options.key })
      : token;
  }

  if (token.startsWith("`") && token.endsWith("`")) {
    return React.createElement(
      "code",
      { key: options.key },
      token.slice(1, -1),
    );
  }

  if (
    (token.startsWith("**") && token.endsWith("**")) ||
    (token.startsWith("__") && token.endsWith("__"))
  ) {
    return React.createElement(
      "strong",
      { key: options.key },
      renderInlineMarkdown(token.slice(2, -2), {
        ...options,
        keyPrefix: `${options.key}-strong`,
      }),
    );
  }

  if (token.startsWith("~~") && token.endsWith("~~")) {
    return React.createElement(
      "del",
      { key: options.key },
      renderInlineMarkdown(token.slice(2, -2), {
        ...options,
        keyPrefix: `${options.key}-delete`,
      }),
    );
  }

  const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  if (linkMatch != null) {
    const label = linkMatch[1] ?? "";
    const href = normalizeMarkdownLinkTarget(linkMatch[2] ?? "");
    if (isSafeMarkdownHref(href)) {
      return React.createElement(
        "a",
        {
          href,
          key: options.key,
          rel: "noreferrer",
          target: href.startsWith("#") ? undefined : "_blank",
        },
        renderInlineMarkdown(label, {
          ...options,
          keyPrefix: `${options.key}-link`,
        }),
      );
    }
    return label;
  }

  return token;
}

function headingClassName(level: number): string {
  switch (level) {
    case 1:
      return "mt-4 mb-2 text-lg font-semibold";
    case 2:
      return "mt-4 mb-2 text-base font-semibold";
    case 3:
      return "mt-3 mb-1.5 text-base font-semibold";
    default:
      return "mt-3 mb-1.5 font-semibold";
  }
}

function reactNodeToMarkdown(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToMarkdown).join("");
  if (React.isValidElement<{ children?: ReactNode }>(node)) {
    return reactNodeToMarkdown(node.props.children);
  }
  return "";
}

function normalizeMarkdownLinkTarget(target: string): string {
  const trimmedTarget = target.trim();
  if (trimmedTarget.startsWith("<") && trimmedTarget.endsWith(">")) {
    return trimmedTarget.slice(1, -1);
  }
  return trimmedTarget;
}

function isSafeMarkdownHref(href: string): boolean {
  return SAFE_LINK_PROTOCOL_PATTERN.test(href);
}

function unescapeQuotedAttribute(value: string): string {
  return value.replace(/\\"/g, '"').replace(/\\'/g, "'");
}
