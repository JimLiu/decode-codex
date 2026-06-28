// Restored from ref/webview/assets/conversation-markdown-BjFKV53f.js
// Markdown formatting and path normalization helpers for conversation export.
import {
  isAbsolutePath,
  normalizeArtifactPathKey,
  normalizeConfigPath,
  rewriteMarkdownResourceLinks,
} from "../../runtime/conversation-markdown-runtime";

type MarkdownRecord = Record<string, any>;

type PathContext = {
  cwd: string | null;
  homeDir: string | null;
};

const GIT_ANNOTATION_PATTERN = /::git-[a-z-]+\{[^}\n]*\}/g;
const EMPTY_PATH_CONTEXT: PathContext = {
  cwd: null,
  homeDir: null,
};
const MARKDOWN_LINK_TARGET_PATTERN =
  /\]\((<[^>\n]+>|[^)\s\n]+)([ \t]+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)/g;
const POSIX_HOME_PATTERN = /^\/(?:Users|home)\/[^/]+(?=\/|$)/;
const WINDOWS_HOME_PATTERN = /^[A-Za-z]:\/Users\/[^/]+(?=\/|$)/;
const LINE_SUFFIX_PATTERN = /^(.*?)(:\d+(?:-\d+)?)$/;

function renderTitledMarkdownBlock(
  title: string,
  content: string,
): string | null {
  const escapedContent = escapeDetailsHtmlTags(content).trim();
  return escapedContent.length === 0 ? null : `${title}\n\n${escapedContent}`;
}

function renderMetadataBlock(
  title: string,
  lines: readonly (string | null)[],
): string {
  const contentLines = lines.flatMap((line) => {
    if (line == null) return [];
    const escapedLine = escapeDetailsHtmlTags(line);
    return escapedLine.trim().length === 0 ? [] : [escapedLine];
  });
  return contentLines.length === 0
    ? title
    : `${title}\n\n${contentLines.join("\n")}`;
}

function appendMarkdownSection(
  sections: string[],
  section: string | null,
): void {
  if (section != null && section.trim().length > 0) sections.push(section);
}

function formatTodoStatus(status: string): string {
  switch (status) {
    case "completed":
      return "x";
    case "in_progress":
    case "pending":
      return " ";
    default:
      return " ";
  }
}

function escapeMarkdownHeading(title: string): string {
  const normalizedTitle = title.replaceAll(/\s+/g, " ").trim();
  return normalizedTitle.length === 0
    ? "Codex conversation"
    : normalizedTitle.replaceAll("#", "\\#");
}

function wrapDetails(summary: string, content: string): string {
  return `<details><summary>${summary}</summary>\n\n${normalizeLineEndings(content).trim()}\n\n</details>`;
}

function wrapQuotedDetails(summary: string, content: string): string {
  return `<details><summary>${summary}</summary>\n\n${blockquoteMarkdown(content)}\n</details>`;
}

function blockquoteMarkdown(content: string): string {
  return normalizeLineEndings(content)
    .trim()
    .split("\n")
    .map((line) => (line.length === 0 ? ">" : `> ${line}`))
    .join("\n");
}

function normalizeLineEndings(content: string): string {
  return content.replaceAll(/\r\n?/g, "\n");
}

function normalizeMessageMarkdown(
  content: string,
  pathContext: PathContext,
): string {
  return rewriteMarkdownLinks(
    cleanMarkdownLines(
      normalizeLineEndings(rewriteMarkdownResourceLinks(content)),
    ),
    pathContext,
  );
}

function cleanMarkdownLines(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      const withoutGitAnnotations = line.replaceAll(GIT_ANNOTATION_PATTERN, "");
      return withoutGitAnnotations.trim().length === 0
        ? ""
        : withoutGitAnnotations.trimEnd();
    })
    .join("\n")
    .replaceAll(/\n{3,}/g, "\n\n");
}

function rewriteMarkdownLinks(
  content: string,
  pathContext: PathContext,
): string {
  return content.replaceAll(
    MARKDOWN_LINK_TARGET_PATTERN,
    (fullMatch, rawTarget, titleSuffix) => {
      const targetWasAngleWrapped =
        rawTarget.startsWith("<") && rawTarget.endsWith(">");
      const unwrappedTarget = targetWasAngleWrapped
        ? rawTarget.slice(1, -1)
        : rawTarget;
      const rewrittenTarget = rewriteLinkTargetPath(
        unwrappedTarget,
        pathContext,
      );
      return rewrittenTarget === unwrappedTarget
        ? fullMatch
        : `](${wrapMarkdownLinkTarget(rewrittenTarget, targetWasAngleWrapped)}${titleSuffix ?? ""})`;
    },
  );
}

function rewriteLinkTargetPath(
  target: string,
  pathContext: PathContext,
): string {
  const { path } = splitPathLineSuffix(target);
  return isAbsolutePath(path)
    ? formatRelativePath(target, pathContext)
    : target;
}

function wrapMarkdownLinkTarget(
  target: string,
  forceAngleWrap: boolean,
): string {
  return forceAngleWrap || /[\s()]/.test(target) ? `<${target}>` : target;
}

function formatPathInline(path: string, pathContext: PathContext): string {
  return formatInlineCode(formatRelativePath(path, pathContext));
}

function formatReadableRelativePath(
  path: string,
  pathContext: PathContext,
): string {
  return formatInlineCode(ensureRelativePathPrefix(path, pathContext));
}

function ensureRelativePathPrefix(
  path: string,
  pathContext: PathContext,
): string {
  const formattedPath = formatRelativePath(path, pathContext);
  return formattedPath === "." ||
    formattedPath === "~" ||
    formattedPath.startsWith("./") ||
    formattedPath.startsWith("../") ||
    formattedPath.startsWith("~/") ||
    isAbsolutePath(formattedPath)
    ? formattedPath
    : `./${formattedPath}`;
}

function formatRelativePath(path: string, pathContext: PathContext): string {
  const { path: basePath, lineSuffix } = splitPathLineSuffix(path);
  const normalizedPath = normalizeConfigPath(basePath);
  const cwdRelativePath = relativizePath(normalizedPath, pathContext.cwd, ".");
  if (cwdRelativePath != null) return `${cwdRelativePath}${lineSuffix}`;
  const homeRelativePath = relativizePath(
    normalizedPath,
    pathContext.homeDir,
    "~",
  );
  return homeRelativePath == null
    ? `${normalizedPath}${lineSuffix}`
    : `${homeRelativePath}${lineSuffix}`;
}

function splitPathLineSuffix(path: string): {
  path: string;
  lineSuffix: string;
} {
  const match = LINE_SUFFIX_PATTERN.exec(path);
  return match?.[1] == null || match[2] == null || !isAbsolutePath(match[1])
    ? {
        lineSuffix: "",
        path,
      }
    : {
        lineSuffix: match[2],
        path: match[1],
      };
}

function relativizePath(
  path: string,
  rootPath: string | null,
  rootLabel: string,
): string | null {
  if (rootPath == null || rootPath === "/") return null;
  const normalizedPath = normalizeArtifactPathKey(path);
  const normalizedRootPath = normalizeArtifactPathKey(rootPath);
  return normalizedPath === normalizedRootPath
    ? rootLabel
    : normalizedPath.startsWith(`${normalizedRootPath}/`)
      ? `${rootLabel}/${path.slice(rootPath.length + 1)}`
      : null;
}

function createPathContext(cwd: string | null): PathContext {
  if (cwd == null) return EMPTY_PATH_CONTEXT;
  const normalizedCwd = normalizeAbsolutePath(cwd);
  return normalizedCwd == null
    ? EMPTY_PATH_CONTEXT
    : {
        cwd: normalizedCwd,
        homeDir: detectHomeDirectory(normalizedCwd),
      };
}

function normalizeAbsolutePath(path: string): string | null {
  const normalizedPath = normalizeConfigPath(path).replace(/\/+$/, "");
  return isAbsolutePath(normalizedPath) ? normalizedPath : null;
}

function detectHomeDirectory(path: string): string | null {
  const posixHome = POSIX_HOME_PATTERN.exec(path);
  if (posixHome != null) return posixHome[0];
  const windowsHome = WINDOWS_HOME_PATTERN.exec(path);
  return windowsHome == null ? null : windowsHome[0];
}

function escapeDetailsHtmlTags(content: string): string {
  return content.replaceAll(/<\/?details(?=[\s>])[^>]*>/gi, (tag) =>
    escapeHtml(tag),
  );
}

function formatInlineCode(content: string): string {
  const fence = "`".repeat(longestBacktickRun(content) + 1);
  return `${fence}${content}${fence}`;
}

function formatHtmlCode(content: string): string {
  return `<code>${escapeHtml(content)}</code>`;
}

function formatCodeBlock(language: string, content: string): string {
  const normalizedContent = normalizeLineEndings(content).trimEnd();
  const fence = "`".repeat(
    Math.max(3, longestBacktickRun(normalizedContent) + 1),
  );
  return `${fence}${language}\n${normalizedContent}\n${fence}`;
}

function longestBacktickRun(content: string): number {
  let longestRun = 0;
  for (const match of content.matchAll(/`+/g)) {
    longestRun = Math.max(longestRun, match[0].length);
  }
  return longestRun;
}

function stringifyJson(value: unknown): string {
  return JSON.stringify(value, null, 2) ?? "null";
}

function formatPreviousMessageCount(count: number): string {
  return `${count} previous ${count === 1 ? "message" : "messages"}`;
}

function summarizeExplorationItems(items: readonly MarkdownRecord[]): string {
  let readCount = 0;
  let searchCount = 0;
  let listCount = 0;
  for (const item of items) {
    if (item.type !== "exec") continue;
    switch (item.parsedCmd.type) {
      case "read":
        readCount += 1;
        break;
      case "search":
        searchCount += 1;
        break;
      case "list_files":
        listCount += 1;
        break;
      case "format":
      case "test":
      case "lint":
      case "noop":
      case "unknown":
        break;
    }
  }
  const summaries = [
    formatCount(readCount, "file", "files"),
    formatCount(searchCount, "search", "searches"),
    formatCount(listCount, "list", "lists"),
  ].filter((summary): summary is string => summary != null);
  return summaries.length === 0
    ? "Explored"
    : `Explored ${summaries.join(", ")}`;
}

function summarizeCollapsedToolActivity(summary: MarkdownRecord): string {
  const summaryParts: string[] = [];
  appendCountSummary(
    summaryParts,
    summary.createdFileCount,
    "Created",
    "created",
    "file",
    "files",
  );
  appendCountSummary(
    summaryParts,
    summary.editedFileCount,
    "Edited",
    "edited",
    "file",
    "files",
  );
  appendCountSummary(
    summaryParts,
    summary.deletedFileCount,
    "Deleted",
    "deleted",
    "file",
    "files",
  );
  const explorationSummaries = [
    formatCount(summary.exploredFileCount, "file", "files"),
    formatCount(summary.searchCount, "search", "searches"),
    formatCount(summary.listCount, "list", "lists"),
  ].filter((entry): entry is string => entry != null);
  if (explorationSummaries.length > 0) {
    summaryParts.push(
      `${summaryParts.length === 0 ? "Explored" : "explored"} ${explorationSummaries.join(", ")}`,
    );
  }
  appendCountSummary(
    summaryParts,
    summary.deniedRequestCount,
    "Denied",
    "denied",
    "request",
    "requests",
  );
  appendTimedOutRequestSummary(summaryParts, summary.timedOutRequestCount);
  appendCountSummary(
    summaryParts,
    summary.commandCount,
    "Ran",
    "ran",
    "command",
    "commands",
  );
  appendCountSummary(
    summaryParts,
    summary.mcpToolCallCount,
    "Called",
    "called",
    "tool",
    "tools",
  );
  if (summary.webSearchCount > 0) {
    summaryParts.push(
      summaryParts.length === 0 ? "Searched the web" : "searched the web",
    );
  }
  return summaryParts.length === 0 ? "Tool activity" : summaryParts.join(", ");
}

function appendCountSummary(
  summaries: string[],
  count: number,
  initialVerb: string,
  continuationVerb: string,
  singularNoun: string,
  pluralNoun: string,
): void {
  const formattedCount = formatCount(count, singularNoun, pluralNoun);
  if (formattedCount != null) {
    summaries.push(
      `${summaries.length === 0 ? initialVerb : continuationVerb} ${formattedCount}`,
    );
  }
}

function appendTimedOutRequestSummary(
  summaries: string[],
  count: number,
): void {
  const formattedCount = formatCount(count, "request", "requests");
  if (formattedCount != null) summaries.push(`${formattedCount} timed out`);
}

function formatCount(
  count: number,
  singularNoun: string,
  pluralNoun: string,
): string | null {
  return count === 0
    ? null
    : count === 1
      ? `a ${singularNoun}`
      : `${count} ${pluralNoun}`;
}

function formatToolCallCount(count: number): string {
  return count === 1 ? "Called a tool" : `Called ${count} tools`;
}

function formatPatchVerb(changeType: string): string {
  switch (changeType) {
    case "add":
      return "Created";
    case "delete":
      return "Deleted";
    case "update":
      return "Edited";
    default:
      return "Changed";
  }
}

function countDiffStats(unifiedDiff: string): {
  additions: number;
  deletions: number;
} {
  let additions = 0;
  let deletions = 0;
  for (const line of normalizeLineEndings(unifiedDiff).split("\n")) {
    if (line.startsWith("+") && !line.startsWith("+++")) {
      additions += 1;
      continue;
    }
    if (line.startsWith("-") && !line.startsWith("---")) deletions += 1;
  }
  return { additions, deletions };
}

function formatExecutionStatus(item: MarkdownRecord): string {
  return item.executionStatus === "interrupted"
    ? "Stopped"
    : item.output?.exitCode == null
      ? item.executionStatus === "completed"
        ? "Success"
        : "Running"
      : item.output.exitCode === 0
        ? "Success"
        : `Failed with exit code ${item.output.exitCode}`;
}

function escapeHtml(content: string): string {
  return content
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const conversationMarkdownFormat = {
  EMPTY_PATH_CONTEXT,
  appendMarkdownSection,
  countDiffStats,
  createPathContext,
  escapeDetailsHtmlTags,
  escapeMarkdownHeading,
  formatCodeBlock,
  formatExecutionStatus,
  formatHtmlCode,
  formatInlineCode,
  formatPatchVerb,
  formatPathInline,
  formatPreviousMessageCount,
  formatReadableRelativePath,
  formatRelativePath,
  formatTodoStatus,
  formatToolCallCount,
  normalizeLineEndings,
  normalizeMessageMarkdown,
  quoteMarkdownBlock: blockquoteMarkdown,
  renderMetadataBlock,
  renderTitledMarkdownBlock,
  stringifyJson,
  summarizeCollapsedToolActivity,
  summarizeExplorationItems,
  wrapDetails,
  wrapQuotedDetails,
} as const;

export type { PathContext };
export { conversationMarkdownFormat };
