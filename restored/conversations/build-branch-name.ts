// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derive a git branch name from an optional prefix plus a slugified conversation title.

const MAX_BRANCH_TITLE_WORDS = 5;

function slugifyConversationTitle(
  conversationTitle: string | null | undefined,
): string {
  return conversationTitle
    ? conversationTitle
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .slice(0, MAX_BRANCH_TITLE_WORDS)
        .map((word) => word.replace(/[^a-z0-9]/g, ""))
        .filter((word) => word.length > 0)
        .join("-")
    : "";
}

export interface BuildBranchNameOptions {
  branchPrefix?: string | null;
  conversationTitle?: string | null;
}

export function buildBranchName({
  branchPrefix,
  conversationTitle,
}: BuildBranchNameOptions): string {
  const prefix = branchPrefix?.trim() ?? "";
  const titleSlug = slugifyConversationTitle(conversationTitle);
  return titleSlug.length === 0 ? prefix : `${prefix}${titleSlug}`;
}
