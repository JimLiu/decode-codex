// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Commit subject and commit-selection submenu for the review source dropdown.

import type { ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Tooltip } from "../ui/tooltip-b";
import { MenuChrome } from "../ui/dropdown";
import type { ReviewDiffFilter } from "./review-diff-model";
import {
  useStore,
  useAtomValue,
  routeAtom,
  CheckmarkIcon,
  RelativeTimeLabel,
  reviewBranchCommitsQueryAtom,
  reviewCommitShaAtom,
  selectReviewCommit,
} from "../boundaries/onboarding-commons-externals.facade";

export function CommitSubjectLabel() {
  const commitsQuery = useAtomValue(reviewBranchCommitsQueryAtom);
  const commitSha = useAtomValue(reviewCommitShaAtom);
  const subject =
    commitsQuery.data?.commits.find(
      (commit: { sha: string; subject: string }) => commit.sha === commitSha,
    )?.subject ?? null;
  if (subject == null) return null;
  return (
    <Tooltip tooltipContent={subject} tooltipBodyClassName="break-words">
      <span className="max-w-[320px] truncate text-token-description-foreground">
        {subject}
      </span>
    </Tooltip>
  );
}

export interface CommitFilterSubmenuContentProps {
  diffFilter?: ReviewDiffFilter;
}

export function CommitFilterSubmenuContent({
  diffFilter,
}: CommitFilterSubmenuContentProps) {
  const store = useStore(routeAtom);
  const commitsQuery = useAtomValue(reviewBranchCommitsQueryAtom);
  const commitSha = useAtomValue(reviewCommitShaAtom);
  const commits = commitsQuery.data?.commits;
  return (
    <>
      {commitsQuery.isPending ? (
        <MenuChrome.Message>
          <FormattedMessage
            id="codex.review.source.local.commit.loading"
            defaultMessage="Loading commits…"
            description="Loading label shown while branch commits are fetched for the review source menu."
          />
        </MenuChrome.Message>
      ) : commitsQuery.isError ? (
        <>
          <MenuChrome.Message>
            <FormattedMessage
              id="codex.review.source.local.commit.error"
              defaultMessage="Unable to load commits"
              description="Error label shown when branch commits cannot be fetched for the review source menu."
            />
          </MenuChrome.Message>
          <MenuChrome.Item
            onSelect={() => {
              commitsQuery.refetch();
            }}
          >
            <FormattedMessage
              id="codex.review.source.local.commit.retry"
              defaultMessage="Retry"
              description="Retry action shown when branch commits fail to load for the review source menu."
            />
          </MenuChrome.Item>
        </>
      ) : commits == null || commits.length === 0 ? (
        <MenuChrome.Message>
          <FormattedMessage
            id="codex.review.source.local.commit.empty"
            defaultMessage="No commits on branch"
            description="Empty label shown when there are no branch commits to review."
          />
        </MenuChrome.Message>
      ) : (
        <div className="max-h-80 overflow-y-auto">
          {commits.map(
            (commit: { sha: string; subject: string; committedAt: string }) => (
              <MenuChrome.Item
                key={commit.sha}
                onSelect={() => selectReviewCommit(store, commit.sha)}
                RightIcon={
                  diffFilter === "commit" && commitSha === commit.sha
                    ? CheckmarkIcon
                    : undefined
                }
                tooltipText={commit.subject}
              >
                <span className="flex min-w-0 items-center justify-between gap-3">
                  <span className="truncate">{commit.subject}</span>
                  <span className="shrink-0 text-xs text-token-description-foreground">
                    <RelativeTimeLabel dateString={commit.committedAt} />
                    <span className="ms-1">
                      <FormattedMessage
                        id="codex.review.source.local.commit.relativeTimeAgo"
                        defaultMessage="ago"
                        description="Relative time suffix shown after a commit timestamp in the review source menu"
                      />
                    </span>
                  </span>
                </span>
              </MenuChrome.Item>
            ),
          )}
        </div>
      )}
    </>
  );
}

export interface CommitFilterSubmenuProps {
  children: ReactNode;
  diffFilter?: ReviewDiffFilter;
}

export function CommitFilterSubmenu({
  children,
  diffFilter,
}: CommitFilterSubmenuProps) {
  const store = useStore(routeAtom);
  const handleOpenChange = (open: boolean) => {
    if (open) store.get(reviewBranchCommitsQueryAtom).refetch();
  };
  return (
    <MenuChrome.FlyoutSubmenuItem
      label={children}
      onOpenChange={handleOpenChange}
    >
      <CommitFilterSubmenuContent diffFilter={diffFilter} />
    </MenuChrome.FlyoutSubmenuItem>
  );
}
