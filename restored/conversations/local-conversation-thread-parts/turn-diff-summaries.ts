// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure helpers for summarising the unified diff of a Codex turn: line counts, file
// summaries, and "too large to render inline" budget checks.

import {
  parseQuotedGitPath,
  parseUnifiedDiff,
} from "../../boundaries/onboarding-commons-externals.facade";

const DIFF_GIT_HEADER_PREFIX = "diff --git ";
const MAX_INLINE_RENDERED_LINES = 5000;

export interface DiffHunkLineCounts {
  unifiedLineCount: number;
  splitLineCount: number;
}

export interface ParsedFileDiff {
  metadata: {
    name: string;
    cacheKey?: string | null;
    hunks: DiffHunkLineCounts[];
  };
  additions: number;
  deletions: number;
}

export interface DiffFileSummary {
  path: string;
  linesAdded: number;
  linesDeleted: number;
  renderedLineEstimate: number;
}

export interface DiffSummary {
  fileCount: number;
  files: DiffFileSummary[];
  hasChanges: boolean;
  linesAdded: number;
  linesDeleted: number;
}

export interface TurnDiffStats {
  fileCount: number;
  linesAdded: number;
  linesDeleted: number;
  hasChanges: boolean;
}

export function summarizeTurnDiffStats(
  files: ReadonlyArray<{ additions: number; deletions: number }>,
): TurnDiffStats {
  let linesAdded = 0;
  let linesDeleted = 0;
  for (const file of files) {
    linesAdded += file.additions;
    linesDeleted += file.deletions;
  }
  return {
    fileCount: files.length,
    linesAdded,
    linesDeleted,
    hasChanges: linesAdded > 0 || linesDeleted > 0,
  };
}

function sumHunkLines(file: ParsedFileDiff): number {
  return Math.max(
    file.metadata.hunks.reduce(
      (total, hunk) => total + hunk.unifiedLineCount,
      0,
    ),
    file.metadata.hunks.reduce((total, hunk) => total + hunk.splitLineCount, 0),
  );
}

export function isParsedFileDiffTooLarge(file: ParsedFileDiff): boolean {
  return exceedsInlineRenderBudget(
    sumHunkLines(file),
    file.additions,
    file.deletions,
  );
}

export function exceedsInlineRenderBudget(
  renderedLineEstimate: number,
  linesAdded: number,
  linesDeleted: number,
): boolean {
  return (
    Math.max(renderedLineEstimate, linesAdded + linesDeleted) >
    MAX_INLINE_RENDERED_LINES
  );
}

export function summarizeUnifiedDiff(unifiedDiff: string): DiffSummary {
  const files: DiffFileSummary[] = [];
  let current: DiffFileSummary | null = null;
  let insideHunk = false;

  for (const line of unifiedDiff.split(/\r?\n/)) {
    const path = parseDiffGitPath(line);
    if (path != null) {
      if (current != null) files.push(current);
      current = {
        linesAdded: 0,
        linesDeleted: 0,
        path,
        renderedLineEstimate: 0,
      };
      insideHunk = false;
      continue;
    }
    if (current != null) {
      if (line.startsWith("@@")) {
        current.renderedLineEstimate += 1;
        insideHunk = true;
        continue;
      }
      if (!(line.startsWith("+++") || line.startsWith("---"))) {
        if (line.startsWith("+")) {
          current.linesAdded += 1;
          current.renderedLineEstimate += insideHunk ? 1 : 0;
          continue;
        }
        if (line.startsWith("-")) {
          current.linesDeleted += 1;
          current.renderedLineEstimate += insideHunk ? 1 : 0;
          continue;
        }
        if (insideHunk && (line.startsWith(" ") || line.startsWith("\\"))) {
          current.renderedLineEstimate += 1;
        }
      }
    }
  }
  if (current != null) files.push(current);

  const summary = buildDiffSummary(mergeFileSummariesByPath(files));
  if (summary.hasChanges || unifiedDiff.length === 0) return summary;

  const parsed = parseUnifiedDiff(unifiedDiff) as ParsedFileDiff[];
  return parsed.length === 0
    ? summary
    : buildDiffSummary(
        parsed.map((file) => ({
          linesAdded: file.additions,
          linesDeleted: file.deletions,
          path: file.metadata.name,
          renderedLineEstimate: sumHunkLines(file),
        })),
      );
}

export function parseDiffGitPath(line: string): string | null {
  if (!line.startsWith(DIFF_GIT_HEADER_PREFIX)) return null;
  const rest = line.slice(11);
  if (rest.startsWith('"')) {
    const first = parseQuotedGitPath(rest, 0);
    if (first == null || rest[first.nextIndex] !== " ") return null;
    const second = parseQuotedGitPath(rest, first.nextIndex + 1);
    return second == null || !second.path.startsWith("b/")
      ? null
      : second.path.slice(2);
  }
  const bIndex = rest.lastIndexOf(" b/");
  if (bIndex < 0) return null;
  const target = rest.slice(bIndex + 1);
  return target.startsWith("b/") ? target.slice(2) : null;
}

function buildDiffSummary(files: DiffFileSummary[]): DiffSummary {
  return {
    fileCount: files.length,
    files,
    hasChanges: files.length > 0,
    linesAdded: files.reduce((total, file) => total + file.linesAdded, 0),
    linesDeleted: files.reduce((total, file) => total + file.linesDeleted, 0),
  };
}

function mergeFileSummariesByPath(files: DiffFileSummary[]): DiffFileSummary[] {
  const byPath = new Map<string, DiffFileSummary>();
  for (const file of files) {
    const existing = byPath.get(file.path);
    if (existing == null) {
      byPath.set(file.path, { ...file });
      continue;
    }
    existing.linesAdded += file.linesAdded;
    existing.linesDeleted += file.linesDeleted;
    existing.renderedLineEstimate += file.renderedLineEstimate;
  }
  return [...byPath.values()];
}
