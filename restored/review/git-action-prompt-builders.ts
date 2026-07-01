// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure prompt builders and diff-size helpers for local git actions.

const TESTING_NOTE =
  "Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.";
const UNTRACKED_CHANGES_NOTE = "Untracked changes are not included.";
const PULL_REQUEST_DIFF_LINE_LIMIT = 1000;
const PULL_REQUEST_FILE_LIST_LIMIT = 100;

export interface OversizedDiffSummary {
  filesChanged: number;
  linesAdded: number;
  linesRemoved: number;
}

interface DiffError {
  type: string;
}

export function buildCommitMessagePrompt({
  commitInstructions,
  diffError = null,
  draftMessage,
  oversizedDiffSummary = null,
  uncommittedDiff,
}: {
  commitInstructions?: string | null;
  diffError?: DiffError | null;
  draftMessage: string;
  oversizedDiffSummary?: OversizedDiffSummary | null;
  uncommittedDiff: string | null;
}): string {
  const sections: string[] = [];
  const trimmedDraft = draftMessage.trim();
  if (trimmedDraft.length > 0) {
    sections.push(`Draft message:\n${trimmedDraft}`);
  }
  const diffSection = buildCommitDiffSection({
    diffError,
    oversizedDiffSummary,
    uncommittedDiff,
  });
  if (diffSection != null) {
    sections.push(diffSection);
  }
  if (sections.length > 0) {
    sections.push(TESTING_NOTE);
  }
  const trimmedInstructions = commitInstructions?.trim() ?? "";
  if (trimmedInstructions.length > 0) {
    sections.push(
      `Custom commit instructions (apply these to the commit message text only; do not change the required output format):\n${trimmedInstructions}`,
    );
  }
  return sections.join("\n\n");
}

export function buildCommitDiffSection({
  diffError,
  oversizedDiffSummary,
  uncommittedDiff,
}: {
  diffError: DiffError | null;
  oversizedDiffSummary: OversizedDiffSummary | null;
  uncommittedDiff: string | null;
}): string | null {
  if (oversizedDiffSummary != null) {
    return [
      "Changes:",
      "Diff too large to include inline.",
      `Summary: ${oversizedDiffSummary.filesChanged} changed files, +${oversizedDiffSummary.linesAdded}/-${oversizedDiffSummary.linesRemoved} lines.`,
      "",
      UNTRACKED_CHANGES_NOTE,
    ].join("\n");
  }
  if (diffError?.type === "diff-too-large") {
    return [
      "Changes:",
      "Diff too large to include inline.",
      "",
      UNTRACKED_CHANGES_NOTE,
    ].join("\n");
  }
  if (!uncommittedDiff || uncommittedDiff.trim().length === 0) {
    return null;
  }
  return ["Changes:", uncommittedDiff, UNTRACKED_CHANGES_NOTE].join("\n");
}

export function extractUnifiedDiff(
  result: { type: string; unifiedDiff?: string } | null | undefined,
): string | null {
  return !result || result.type !== "success"
    ? null
    : (result.unifiedDiff ?? null);
}

export function summarizeUnifiedDiff(
  diff: string | null,
): OversizedDiffSummary | null {
  if (diff == null || diff.trim().length === 0) {
    return null;
  }
  let filesChanged = 0;
  let linesAdded = 0;
  let linesRemoved = 0;
  let inHunk = false;
  for (const line of diff.split(/\r?\n/)) {
    if (line.startsWith("diff --git ")) {
      filesChanged += 1;
      inHunk = false;
      continue;
    }
    if (line.startsWith("@@")) {
      inHunk = true;
      continue;
    }
    if (inHunk) {
      if (line.startsWith("+")) {
        linesAdded += 1;
        continue;
      }
      if (line.startsWith("-")) {
        linesRemoved += 1;
      }
    }
  }
  return { filesChanged, linesAdded, linesRemoved };
}

export function buildPullRequestPrompt({
  pullRequestInstructions,
  uncommittedDiff,
  filePaths,
  baseBranch,
  headBranch,
}: {
  pullRequestInstructions?: string | null;
  uncommittedDiff: string | null;
  filePaths: string[];
  baseBranch?: string | null;
  headBranch?: string | null;
}): string {
  const sections: string[] = [];
  if (baseBranch || headBranch) {
    sections.push(
      [
        "Branches:",
        `- Head: ${headBranch ?? "-"}`,
        `- Base: ${baseBranch ?? "-"}`,
      ].join("\n"),
    );
  }
  const trimmedInstructions = pullRequestInstructions?.trim() ?? "";
  if (trimmedInstructions.length > 0) {
    sections.push(
      `Pull request instructions (apply these to the title/body content only):\n${balanceCodeFences(
        trimmedInstructions,
      )}`,
    );
  }
  sections.push(buildPullRequestChangesSection({ uncommittedDiff, filePaths }));
  return sections.join("\n\n");
}

export function buildPullRequestChangesSection({
  uncommittedDiff,
  filePaths,
}: {
  uncommittedDiff: string | null;
  filePaths: string[];
}): string {
  const trimmedDiff = uncommittedDiff?.trim() ?? "";
  const isOversized =
    (trimmedDiff.length > 0 ? countDiffLines(trimmedDiff) : 0) >
    PULL_REQUEST_DIFF_LINE_LIMIT;
  const lines = ["Changes:"];
  if (trimmedDiff.length === 0 || isOversized) {
    lines.push(formatFilePathList(filePaths));
    return lines.join("\n");
  }
  lines.push(trimmedDiff);
  return lines.join("\n");
}

export function countDiffLines(diff: string): number {
  return diff.split(/\r?\n/).length;
}

export function formatFilePathList(filePaths: string[]): string {
  if (filePaths.length === 0) {
    return "- (no files listed)";
  }
  const visiblePaths = filePaths.slice(0, PULL_REQUEST_FILE_LIST_LIMIT);
  const remaining = filePaths.length - visiblePaths.length;
  const lines = visiblePaths.map((path) => `- ${path}`);
  if (remaining > 0) {
    lines.push(`…and ${remaining} more`);
  }
  return lines.join("\n");
}

export function balanceCodeFences(text: string): string {
  const fenceMatches = text.match(/```/g);
  return fenceMatches == null || fenceMatches.length % 2 === 0
    ? text
    : `${text}\n\`\`\``;
}
