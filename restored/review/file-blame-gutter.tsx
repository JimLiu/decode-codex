// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git-blame gutter for a workspace file preview: renders a per-line author cell
// with a hover/expanded tooltip (author, date, commit, PR) and imperatively
// mounts those React cells into the diff renderer's column elements.
import { createElement } from "react";
import { flushSync } from "react-dom";
import { createRoot, type Root } from "react-dom/client";
import { parseDiffColumnLineNumber } from "./diff-column-line-number";

interface BlameLine {
  author?: string | null;
  authorLogin?: string | null;
  authorTime?: number | null;
  commitSha: string;
  summary?: string | null;
}

interface BlameLabels {
  author: string;
  commit: string;
  date: string;
  pullRequest: string;
}

interface BlameLink {
  label: string;
  url: string;
}

interface FileBlameLineProps {
  isExpanded: boolean;
  labels: BlameLabels;
  line: BlameLine;
  lineNumber: number;
  onOpenBlameLink: (url: string, event: React.MouseEvent) => void;
  onToggleExpandedBlameLine: (lineNumber: number) => void;
  repositoryWebUrl: string | null;
}

function FileBlameLine(props: FileBlameLineProps) {
  const {
    isExpanded,
    labels,
    line,
    lineNumber,
    onOpenBlameLink,
    onToggleExpandedBlameLine,
    repositoryWebUrl,
  } = props;
  const ariaLabel = buildBlameAriaLabel(line);
  const toggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onToggleExpandedBlameLine(lineNumber);
  };
  return (
    <>
      <button
        type="button"
        data-file-blame-trigger=""
        aria-expanded={isExpanded}
        aria-haspopup="dialog"
        aria-label={ariaLabel}
        onClick={toggle}
      >
        <span data-file-blame-author="">{blameAuthorLabel(line)}</span>
      </button>
      <FileBlameTooltip
        labels={labels}
        line={line}
        onOpenBlameLink={onOpenBlameLink}
        repositoryWebUrl={repositoryWebUrl}
      />
    </>
  );
}

interface FileBlameTooltipProps {
  labels: BlameLabels;
  line: BlameLine;
  onOpenBlameLink: (url: string, event: React.MouseEvent) => void;
  repositoryWebUrl: string | null;
}

function FileBlameTooltip(props: FileBlameTooltipProps) {
  const { labels, line, onOpenBlameLink, repositoryWebUrl } = props;
  const title = line.summary ?? line.commitSha.slice(0, 8);
  const authorLink = buildAuthorLink(line);
  const commitLink = buildCommitLink(line, repositoryWebUrl);
  const pullRequestLink = buildPullRequestLink(line, repositoryWebUrl);
  const date = formatBlameDate(line.authorTime);

  const authorValue =
    authorLink == null ? (
      blameAuthorLabel(line)
    ) : (
      <BlameTooltipLink link={authorLink} onOpenBlameLink={onOpenBlameLink} />
    );
  const commitValue =
    commitLink == null ? (
      line.commitSha.slice(0, 8)
    ) : (
      <BlameTooltipLink link={commitLink} onOpenBlameLink={onOpenBlameLink} />
    );

  return (
    <span data-file-blame-tooltip="" role="dialog" aria-label={title}>
      <span data-file-blame-tooltip-title="">{title}</span>
      <span data-file-blame-tooltip-meta="">
        <BlameTooltipRow label={labels.author}>{authorValue}</BlameTooltipRow>
        {date && <BlameTooltipRow label={labels.date}>{date}</BlameTooltipRow>}
        <BlameTooltipRow label={labels.commit}>{commitValue}</BlameTooltipRow>
        {pullRequestLink && (
          <BlameTooltipRow label={labels.pullRequest}>
            <BlameTooltipLink
              link={pullRequestLink}
              onOpenBlameLink={onOpenBlameLink}
            />
          </BlameTooltipRow>
        )}
      </span>
    </span>
  );
}

interface BlameTooltipRowProps {
  children: React.ReactNode;
  label: string;
}

function BlameTooltipRow({ children, label }: BlameTooltipRowProps) {
  return (
    <>
      <span data-file-blame-tooltip-label="">{label}</span>
      <span data-file-blame-tooltip-value="">{children}</span>
    </>
  );
}

interface BlameTooltipLinkProps {
  link: BlameLink;
  onOpenBlameLink: (url: string, event: React.MouseEvent) => void;
}

function BlameTooltipLink({ link, onOpenBlameLink }: BlameTooltipLinkProps) {
  return (
    <button
      type="button"
      data-file-blame-link=""
      data-file-blame-url={link.url}
      role="link"
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onOpenBlameLink(link.url, event);
      }}
    >
      {link.label}
    </button>
  );
}

function buildAuthorLink(line: BlameLine): BlameLink | null {
  return line.authorLogin == null
    ? null
    : {
        label: `@${line.authorLogin}`,
        url: `https://github.com/${encodeURIComponent(line.authorLogin)}`,
      };
}

function buildCommitLink(
  line: BlameLine,
  repositoryWebUrl: string | null,
): BlameLink | null {
  return isNonZeroSha(line.commitSha)
    ? buildGithubResourceLink(
        repositoryWebUrl,
        `commit/${encodeURIComponent(line.commitSha)}`,
        line.commitSha.slice(0, 8),
      )
    : null;
}

function buildPullRequestLink(
  line: BlameLine,
  repositoryWebUrl: string | null,
): BlameLink | null {
  const pullRequestNumber = parsePullRequestNumber(line.summary ?? null);
  return pullRequestNumber == null
    ? null
    : buildGithubResourceLink(
        repositoryWebUrl,
        `pull/${pullRequestNumber}`,
        `#${pullRequestNumber}`,
      );
}

function buildGithubResourceLink(
  repositoryWebUrl: string | null,
  path: string,
  label: string,
): BlameLink | null {
  return repositoryWebUrl == null || !isGithubHostUrl(repositoryWebUrl)
    ? null
    : {
        label,
        url: `${repositoryWebUrl.replace(/\/+$/, "")}/${path}`,
      };
}

function buildBlameAriaLabel(line: BlameLine): string {
  return [
    blameAuthorLabel(line),
    formatBlameDate(line.authorTime),
    blameCommitSummary(line),
  ]
    .filter((part) => !!part)
    .join(" ");
}

function blameAuthorLabel(line: BlameLine): string {
  return line.author ?? line.commitSha.slice(0, 8);
}

function blameCommitSummary(line: BlameLine): string {
  const shortSha = line.commitSha.slice(0, 8);
  return line.summary == null ? shortSha : `${shortSha} ${line.summary}`;
}

function isNonZeroSha(sha: string): boolean {
  return sha.length > 0 && !/^0+$/.test(sha);
}

function isGithubHostUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === "github.com" ||
      parsed.hostname.endsWith(".github.com")
    );
  } catch {
    return false;
  }
}

function parsePullRequestNumber(summary: string | null): number | null {
  if (summary == null) return null;
  const match =
    /\(#(\d+)\)\s*$/.exec(summary)?.[1] ??
    /^Merge pull request #(\d+)\b/.exec(summary)?.[1];
  return match == null ? null : Number.parseInt(match, 10);
}

function formatBlameDate(authorTime: number | null | undefined): string | null {
  return authorTime == null
    ? null
    : new Date(authorTime * 1000).toISOString().slice(0, 10);
}

const blameRoots = new WeakMap<Element, Root>();

export function renderFileBlameGutter(
  host: Element,
  linesByNumber: Map<number, BlameLine> | null,
  repositoryWebUrl: string | null,
  expandedLineNumber: number | null,
  labels: BlameLabels,
  onOpenBlameLink: (url: string, event: React.MouseEvent) => void,
  onToggleExpandedBlameLine: (lineNumber: number) => void,
): void {
  const fileElement = (host.shadowRoot ?? host).querySelector("[data-file]");
  if (fileElement == null) return;
  const columns = fileElement.querySelectorAll("[data-column-number]");
  if (linesByNumber == null) {
    for (const column of columns) removeBlameGutterCell(column as HTMLElement);
    fileElement.toggleAttribute("data-file-blame-visible", false);
    return;
  }
  let anyVisible = false;
  flushSync(() => {
    for (const column of columns) {
      const lineNumber = parseDiffColumnLineNumber(column);
      if (lineNumber == null) {
        removeBlameGutterCell(column as HTMLElement);
        continue;
      }
      const line = linesByNumber.get(lineNumber);
      if (line == null) {
        removeBlameGutterCell(column as HTMLElement);
        continue;
      }
      const gutter = ensureBlameGutterCell(column as HTMLElement);
      const isExpanded = expandedLineNumber === lineNumber;
      gutter.toggleAttribute("data-file-blame-expanded", isExpanded);
      getOrCreateBlameRoot(gutter).render(
        createElement(FileBlameLine, {
          isExpanded,
          labels,
          line,
          lineNumber,
          onOpenBlameLink,
          onToggleExpandedBlameLine,
          repositoryWebUrl,
        }),
      );
      anyVisible = true;
    }
  });
  fileElement.toggleAttribute("data-file-blame-visible", anyVisible);
}

function ensureBlameGutterCell(column: HTMLElement): HTMLElement {
  const existing = column.querySelector<HTMLElement>(
    "[data-file-blame-gutter]",
  );
  if (existing != null) return existing;
  const gutter = document.createElement("span");
  gutter.dataset.fileBlameGutter = "";
  column.append(gutter);
  return gutter;
}

function getOrCreateBlameRoot(element: HTMLElement): Root {
  const existing = blameRoots.get(element);
  if (existing != null) return existing;
  const root = createRoot(element);
  blameRoots.set(element, root);
  return root;
}

function removeBlameGutterCell(column: HTMLElement): void {
  const gutter = column.querySelector("[data-file-blame-gutter]");
  if (gutter != null) {
    blameRoots.get(gutter)?.unmount();
    blameRoots.delete(gutter);
    gutter.remove();
  }
}

export const FILE_BLAME_GUTTER_CSS =
  '[data-file][data-file-blame-visible] [data-column-number] {\n  --codex-file-blame-gutter-width: 10ch;\n  min-width: calc(\n    var(\n        --diffs-min-number-column-width,\n        var(--diffs-min-number-column-width-default, 3ch)\n      ) +\n      var(--codex-file-blame-gutter-width) + 1ch + 3ch\n  );\n  display: grid;\n  grid-template-columns:\n    minmax(var(--diffs-min-number-column-width, 3ch), max-content)\n    minmax(0, var(--codex-file-blame-gutter-width));\n  column-gap: 1ch;\n  align-items: baseline;\n  overflow: visible;\n}\n\n[data-file][data-file-blame-visible] [data-line-number-content] {\n  grid-column: 1;\n}\n\n[data-file-blame-gutter] {\n  --codex-file-blame-tooltip-width: 32ch;\n  --codex-file-blame-tooltip-max-width: 42vw;\n  position: relative;\n  grid-column: 2;\n  min-width: 0;\n  width: 100%;\n  max-width: var(--codex-file-blame-gutter-width);\n  display: inline-block;\n  overflow: visible;\n}\n\n[data-file-blame-gutter]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 19;\n  width: var(--codex-file-blame-tooltip-width);\n  max-width: var(--codex-file-blame-tooltip-max-width);\n  height: 6px;\n  display: none;\n}\n\n[data-file-blame-trigger] {\n  min-width: 0;\n  width: 100%;\n  max-width: var(--codex-file-blame-gutter-width);\n  display: block;\n  border: 0;\n  border-radius: 4px;\n  padding: 0 0.5ch;\n  background: transparent;\n  cursor: var(--cursor-interaction);\n  font: inherit;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-token-text-tertiary);\n}\n\n[data-file-blame-trigger]:hover,\n[data-file-blame-trigger][aria-expanded="true"] {\n  background: color-mix(in srgb, var(--color-token-foreground) 6%, transparent);\n  color: var(--color-token-text-primary);\n}\n\n[data-file-blame-trigger]:focus-visible {\n  outline: 1px solid var(--color-token-focus-border);\n  outline-offset: -1px;\n}\n\n[data-file-blame-author] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[data-file-blame-tooltip] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  z-index: 20;\n  width: var(--codex-file-blame-tooltip-width);\n  max-width: var(--codex-file-blame-tooltip-max-width);\n  display: none;\n  flex-direction: column;\n  gap: 6px;\n  padding: 8px 10px;\n  border: 1px solid var(--color-token-border-default);\n  border-radius: 8px;\n  background: var(--color-token-bg-primary);\n  box-shadow: 0 8px 24px rgb(0 0 0 / 16%);\n  color: var(--color-token-foreground);\n  font-family: var(\n    --diffs-header-font-family,\n    var(--diffs-header-font-fallback)\n  );\n  font-size: 12px;\n  line-height: 1.35;\n  text-align: left;\n  white-space: normal;\n}\n\n[data-file-blame-gutter]:hover [data-file-blame-tooltip],\n[data-file-blame-gutter]:focus-within [data-file-blame-tooltip],\n[data-file-blame-gutter][data-file-blame-expanded] [data-file-blame-tooltip] {\n  display: flex;\n}\n\n[data-file-blame-gutter]:hover::after,\n[data-file-blame-gutter]:focus-within::after,\n[data-file-blame-gutter][data-file-blame-expanded]::after {\n  display: block;\n}\n\n[data-file-blame-tooltip-title] {\n  color: var(--color-token-text-primary);\n  font-weight: 500;\n  overflow-wrap: anywhere;\n}\n\n[data-file-blame-tooltip-meta] {\n  display: grid;\n  grid-template-columns: max-content minmax(0, 1fr);\n  gap: 4px 10px;\n}\n\n[data-file-blame-tooltip-label] {\n  color: var(--color-token-text-tertiary);\n}\n\n[data-file-blame-tooltip-value] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--color-token-text-secondary);\n}\n\n[data-file-blame-link] {\n  max-width: 100%;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  color: var(--color-token-text-link-foreground);\n  cursor: var(--cursor-interaction);\n  font: inherit;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n[data-file-blame-link]:hover {\n  text-decoration: underline;\n}\n\n[data-file-blame-link]:focus-visible {\n  outline: 1px solid var(--color-token-focus-border);\n  outline-offset: 2px;\n}\n';
