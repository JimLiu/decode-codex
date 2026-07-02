// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js

export type ParsedDiffChangeCounts = {
  additions: number;
  deletions: number;
};

export type ParsedDiffSummary = {
  fileCount: number;
  linesAdded: number;
  linesDeleted: number;
  hasChanges: boolean;
};

export function summarizeParsedDiffs(
  parsedDiffs: readonly ParsedDiffChangeCounts[],
): ParsedDiffSummary {
  let linesAdded = 0;
  let linesDeleted = 0;

  for (const parsedDiff of parsedDiffs) {
    linesAdded += parsedDiff.additions;
    linesDeleted += parsedDiff.deletions;
  }

  return {
    fileCount: parsedDiffs.length,
    linesAdded,
    linesDeleted,
    hasChanges: linesAdded > 0 || linesDeleted > 0,
  };
}
