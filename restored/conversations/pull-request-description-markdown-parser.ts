// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js
// Pull-request description markdown parser and GitHub-specific normalizer.
const DETAILS_BLOCK_PATTERN = /<details(\s+open)?>([\s\S]*?)<\/details>/gi;
const FENCED_CODE_BLOCK_PATTERN =
  /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g;
const GITHUB_ALERT_PATTERN =
  /(^|\n)(>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([ \t]*(?=\n|$))/gi;
const HTML_COMMENT_PATTERN = /<!--[\s\S]*?-->/g;
const HTML_TAG_PATTERN = /<[^>]+>/g;
const SUMMARY_PATTERN = /^\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*)$/i;
const FENCED_CODE_BLOCK_PLACEHOLDER_PREFIX = "@@CODEX_FENCED_CODE_BLOCK_";

export function initPullRequestDescriptionMarkdownParserChunk(): void {}

export function parsePullRequestDescriptionMarkdown(markdown: string): string {
  const fencedCodeBlocks: string[] = [];
  const markdownWithPlaceholders = markdown.replace(
    FENCED_CODE_BLOCK_PATTERN,
    (block) => {
      const placeholder = `${FENCED_CODE_BLOCK_PLACEHOLDER_PREFIX}${fencedCodeBlocks.length}@@`;
      fencedCodeBlocks.push(block);
      return placeholder;
    },
  );

  return restoreFencedCodeBlocks(
    normalizePullRequestDescriptionMarkdown(markdownWithPlaceholders),
    fencedCodeBlocks,
  );
}

function restoreFencedCodeBlocks(
  markdown: string,
  fencedCodeBlocks: readonly string[],
): string {
  return markdown.replace(
    /@@CODEX_FENCED_CODE_BLOCK_(\d+)@@/g,
    (placeholder, index) => fencedCodeBlocks[Number(index)] ?? placeholder,
  );
}

function normalizePullRequestDescriptionMarkdown(markdown: string): string {
  return markdown
    .replace(HTML_COMMENT_PATTERN, "")
    .replace(
      GITHUB_ALERT_PATTERN,
      (_match, leadingNewline, blockquotePrefix, alertType) =>
        `${leadingNewline}${blockquotePrefix}**${formatGithubAlertType(alertType)}**`,
    )
    .replace(DETAILS_BLOCK_PATTERN, (match, openAttribute, detailsBody) => {
      const summaryMatch = detailsBody.match(SUMMARY_PATTERN);
      if (summaryMatch == null) return match;

      const summary = stripHtmlTagsAndCollapseWhitespace(summaryMatch[1] ?? "");
      if (summary.length === 0) return match;

      const body = (summaryMatch[2] ?? "").trim();
      const attributes = [`summary=${JSON.stringify(summary)}`];
      if (openAttribute != null) attributes.push(`open="true"`);
      return `:::github-details{${attributes.join(" ")}}\n${body}\n:::`;
    })
    .replace(
      /\n{3,}/g,
      `

`,
    );
}

function stripHtmlTagsAndCollapseWhitespace(value: string): string {
  return value.replace(HTML_TAG_PATTERN, " ").replace(/\s+/g, " ").trim();
}

function formatGithubAlertType(alertType: string): string {
  const normalizedAlertType = alertType.toLowerCase();
  return (
    normalizedAlertType.charAt(0).toUpperCase() + normalizedAlertType.slice(1)
  );
}
