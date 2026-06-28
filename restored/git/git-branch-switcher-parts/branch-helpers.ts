// Restored from ref/webview/assets/git-branch-switcher-BokkKYIT.js

type BranchOrderingInput = {
  branches: string[];
  currentBranch?: string | null;
  defaultBranch?: string | null;
};

type StatusSummary = {
  type?: string;
  stagedCount?: number;
  unstagedCount?: number;
  untrackedCount?: number;
};

export function orderPreferredBranches({
  branches,
  currentBranch,
  defaultBranch,
}: BranchOrderingInput): string[] {
  const seenBranches = new Set<string>();
  const orderedBranches: string[] = [];

  pushUniqueBranch(defaultBranch, orderedBranches, seenBranches);
  pushUniqueBranch(currentBranch, orderedBranches, seenBranches);

  branches.forEach((branchName) => {
    pushUniqueBranch(branchName, orderedBranches, seenBranches);
  });

  return orderedBranches;
}

function pushUniqueBranch(
  branchName: string | null | undefined,
  orderedBranches: string[],
  seenBranches: Set<string>,
): void {
  if (branchName == null || branchName.length === 0 || seenBranches.has(branchName)) {
    return;
  }

  seenBranches.add(branchName);
  orderedBranches.push(branchName);
}

export function getChangedFileCount(summary: StatusSummary | undefined): number {
  return summary?.type === "success"
    ? Math.max(summary.stagedCount ?? 0, summary.unstagedCount ?? 0) + (summary.untrackedCount ?? 0)
    : 0;
}
