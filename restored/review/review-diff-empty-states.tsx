// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Empty-state surfaces for the review pane: the shared "no diff" illustration and
// the diff-too-large, no-changes (with optional git-repo creation), and
// stage-filter empty states.
import { useState } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { LargeEmptyState } from "../utils/large-empty-state";
import { useCreateGitRepository } from "./use-create-git-repository";
import {
  useAtomValue,
  Button,
  reviewSourceAtom,
  isUncommittedReviewSource,
  conversationCwdAtom,
  reviewHostConfigAtom,
  reviewLastTurnDiffAtom,
  reviewShowGitRepoEmptyStateAtom,
} from "../boundaries/onboarding-commons-externals.facade";

function ReviewEmptyIllustration(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={66}
      height={73}
      viewBox="0 0 66 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4622 0.247806C21.3984 -0.00979114 22.5424 -0.0833059 24.3919 0.107181C26.2731 0.300998 28.6338 0.734691 31.9925 1.35718L50.5852 4.80249C53.6017 5.36157 54.6803 5.57925 55.6038 5.99488L55.929 6.15015C56.6787 6.52555 57.3664 7.00409 57.9681 7.57202C58.6934 8.25736 59.2703 9.14603 60.8177 11.6287L62.7884 14.7898C64.336 17.2728 64.8793 18.1822 65.1751 19.1355C65.455 20.0387 65.5807 20.9906 65.5491 21.9519C65.5479 21.9883 65.5432 22.0246 65.5413 22.0613C65.5596 22.3428 65.5672 22.6264 65.5579 22.9109V22.9119C65.5243 23.9209 65.245 24.9841 64.4183 27.9392L56.0804 57.7429C55.1602 61.0318 54.5093 63.3424 53.8548 65.1169V65.1179C53.2117 66.8608 52.6407 67.8608 51.9915 68.5945L51.9905 68.5955C50.6374 70.1236 48.849 71.2391 46.8811 71.781C45.9363 72.0411 44.7864 72.1129 42.9378 71.9226C41.0562 71.7288 38.6945 71.295 35.3362 70.6726L14.0296 66.7234C10.6714 66.101 8.31217 65.6599 6.51298 65.1716C4.74539 64.6918 3.74685 64.2213 3.03348 63.6541C1.54801 62.4722 0.529247 60.8364 0.122352 58.9822V58.9812C0.00960176 58.4665 -0.0292753 57.8806 0.0227425 57.1306C-0.0250512 56.373 0.0534353 55.4382 0.303016 54.1472C0.657029 52.3165 1.29974 50.004 2.22001 46.7146L11.302 14.2527C12.2224 10.9631 12.8721 8.65292 13.5266 6.87867C14.1702 5.13425 14.7404 4.13988 15.3841 3.41285C16.7292 1.89375 18.5059 0.78636 20.4622 0.247806ZM42.9808 70.9324C43.6743 71.0038 44.2688 71.0384 44.7903 71.0398C44.2691 71.0384 43.675 71.0038 42.9817 70.9324C42.7465 70.9081 42.5034 70.88 42.2522 70.8484L42.9808 70.9324ZM9.73075 64.908C10.9652 65.1573 12.3945 65.4229 14.0735 65.7341L35.3802 69.6824C37.4793 70.0714 39.1889 70.3869 40.635 70.616L39.7347 70.4675C38.4898 70.2571 37.0602 69.9936 35.3811 69.6824L14.0745 65.7341C12.3951 65.4229 10.9652 65.1573 9.73075 64.908ZM24.3411 0.604251C22.523 0.41699 21.4475 0.494741 20.595 0.729251C18.7322 1.24208 17.039 2.29737 15.7581 3.7439C15.1719 4.40597 14.6292 5.33725 13.9964 7.05249C13.3505 8.80345 12.7059 11.0904 11.7835 14.3875L2.70145 46.8494C1.77899 50.1466 1.14345 52.4359 0.794227 54.2419C0.452241 56.0108 0.446252 57.0412 0.622352 57.8445C1.00742 59.5997 1.972 61.1476 3.37821 62.2664C4.02189 62.7782 4.95004 63.227 6.68876 63.699C8.46395 64.1808 10.799 64.618 14.1653 65.2419L35.472 69.1912C38.8383 69.8151 41.176 70.2441 43.0325 70.4353C44.8509 70.6226 45.9261 70.545 46.7786 70.3103C48.6414 69.7974 50.3347 68.7422 51.6155 67.2957C52.2015 66.6336 52.7446 65.7028 53.3772 63.988C54.0232 62.237 54.6677 59.9493 55.5901 56.6521L63.928 26.8484C64.3266 25.4238 64.5906 24.4522 64.764 23.7244L53.3714 21.4041C52.1934 21.1641 51.6039 21.0432 51.2161 20.7195C50.9667 20.5111 50.7735 20.2461 50.6507 19.949C50.3911 19.6602 50.208 19.3084 50.1243 18.9255C50.06 18.6309 50.081 18.3236 50.1536 17.9578C50.2257 17.5945 50.3541 17.1493 50.5188 16.5759L53.5852 5.90015C52.8637 5.73959 51.8946 5.55438 50.4934 5.29468L31.9007 1.84839C28.5347 1.22455 26.1975 0.795542 24.3411 0.604251ZM48.5755 70.1746C48.2997 70.3039 48.0182 70.4211 47.7317 70.5261C48.0182 70.421 48.2997 70.3039 48.5755 70.1746ZM49.0227 69.9539L49.0218 69.9548L49.0227 69.9539ZM50.5677 68.9568C50.4229 69.0691 50.2746 69.1764 50.1243 69.281C50.2746 69.1764 50.4229 69.0691 50.5677 68.9568ZM51.8548 67.7722C51.771 67.8633 51.6848 67.9519 51.5979 68.0398C51.6848 67.9519 51.771 67.8633 51.8548 67.7722ZM0.428016 58.9783C0.944949 60.4218 1.85125 61.691 3.06669 62.658C3.78719 63.2307 4.79047 63.7019 6.55692 64.1814C6.78191 64.2425 7.01573 64.303 7.25907 64.363L6.5579 64.1814C5.23267 63.8217 4.33703 63.4667 3.66825 63.0701C3.55675 63.004 3.45169 62.9366 3.35184 62.8679C3.25212 62.7993 3.15765 62.7295 3.06766 62.658C2.0389 61.8396 1.23176 60.8043 0.694618 59.6306C0.645767 59.5239 0.59834 59.4164 0.553993 59.3074C0.509667 59.1984 0.467769 59.0884 0.428016 58.9773V58.9783ZM54.3792 60.9002C54.1696 61.606 53.9696 62.2451 53.7766 62.8298C54 62.1525 54.2305 61.4017 54.4778 60.5593C54.4441 60.6743 54.4123 60.7886 54.3792 60.9002ZM55.8245 57.6638C55.4675 58.9368 55.1526 60.0532 54.8587 61.0427C55.1526 60.0532 55.4675 58.9367 55.8245 57.6638ZM0.0764534 57.6433C0.0924277 57.7492 0.111172 57.8519 0.133094 57.9519C0.184295 58.1852 0.245507 58.4153 0.315711 58.6414L0.218055 58.2996C0.187644 58.1846 0.159687 58.0687 0.134071 57.9519C0.11215 57.8519 0.0928863 57.7491 0.0764534 57.6433ZM19.6155 45.2244C19.9624 43.9875 21.2673 43.1731 22.5306 43.407L36.8714 46.0652C38.1329 46.3007 38.8774 47.4939 38.5325 48.7302C38.1864 49.9672 36.8795 50.7801 35.6165 50.5476L21.2766 47.8904C20.0128 47.6561 19.2692 46.4622 19.6155 45.2244ZM34.096 22.2293C34.4424 20.9919 35.7486 20.1784 37.012 20.4119C38.2747 20.6469 39.0191 21.8407 38.6731 23.0779L37.3362 27.8572L42.219 28.7625C43.4806 28.9978 44.226 30.1911 43.8811 31.4275C43.5351 32.6645 42.2282 33.4774 40.9651 33.2449L36.0823 32.3406L34.7444 37.1228C34.3978 38.3595 33.0914 39.1732 31.8284 38.9402C30.5656 38.7055 29.8208 37.5113 30.1663 36.2742L31.5052 31.4919L26.6253 30.5877C25.3614 30.3533 24.6169 29.1595 24.9632 27.9216C25.3101 26.6846 26.6158 25.8702 27.8792 26.1043L32.7591 27.0085L34.096 22.2293ZM50.9993 16.7146C50.8323 17.296 50.7099 17.7177 50.6429 18.0554C50.5765 18.39 50.5694 18.6196 50.6126 18.8181C50.6955 19.1975 50.9025 19.5398 51.2005 19.7888C51.3566 19.919 51.5644 20.0181 51.8919 20.114C52.2222 20.2107 52.652 20.299 53.2444 20.4197L64.9554 22.8044C65.0101 22.4792 65.0411 22.2051 65.0501 21.9353C65.0799 21.0284 64.9606 20.1319 64.6975 19.283C64.4254 18.406 63.9256 17.5606 62.3636 15.0544L60.3938 11.8933C58.8317 9.38706 58.2918 8.56584 57.6243 7.93531C56.9781 7.32527 56.226 6.82357 55.3987 6.45093C55.0334 6.28652 54.6399 6.15562 54.0725 6.01441L50.9993 16.7146Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ReviewEmptyIllustrationContainer() {
  return (
    <div className="flex justify-center">
      <ReviewEmptyIllustration
        aria-hidden={true}
        className="h-18 w-auto text-token-input-placeholder-foreground"
      />
    </div>
  );
}

interface DiffTooLargeEmptyStateProps {
  className?: string;
}

function DiffTooLargeEmptyState({ className }: DiffTooLargeEmptyStateProps) {
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      illustration={<ReviewEmptyIllustrationContainer />}
      title={
        <FormattedMessage
          id="codex.review.diffTooLarge.title"
          defaultMessage="Diff too large to display"
          description="Title for review empty state when diff output exceeds size limits"
        />
      }
      description={
        <FormattedMessage
          id="codex.review.diffTooLarge.description"
          defaultMessage="Open the file to review changes directly."
          description="Description shown when review diffs exceed size limits"
        />
      }
    />
  );
}

interface ReviewNoDiffDescriptionProps {
  hasLastTurnDiff: boolean;
  showGitRepoEmptyState: boolean;
}

function ReviewNoDiffDescription({
  hasLastTurnDiff,
  showGitRepoEmptyState,
}: ReviewNoDiffDescriptionProps) {
  const reviewSource = useAtomValue(reviewSourceAtom);
  if (showGitRepoEmptyState) {
    return (
      <FormattedMessage
        id="codex.review.noDiff.gitRepoRequired.description"
        defaultMessage="Track, review, and undo changes in this project."
        description="Empty state description shown when diffing isn't available without a git repo"
      />
    );
  }
  const isLastTurn = reviewSource === "last-turn";
  const baseKind = isUncommittedReviewSource(reviewSource)
    ? "uncommitted"
    : "branch";
  if (!hasLastTurnDiff && isLastTurn) {
    return (
      <FormattedMessage
        id="codex.review.noDiff.orNoLongerAvailable"
        defaultMessage="The latest diffs are no longer available."
        description="Label indicating a code review is not available"
      />
    );
  }
  if (!hasLastTurnDiff || !isLastTurn) {
    return isLastTurn ? null : (
      <FormattedMessage
        id="codex.review.noDiff.baseDescription"
        defaultMessage="Changes in this project will appear here."
        description="Default description shown when a review has no changes"
      />
    );
  }
  if (baseKind === "uncommitted") {
    return (
      <FormattedMessage
        id="codex.review.noDiff.revertedOrCommitted"
        defaultMessage="The last turn was committed or reverted."
        description="Label indicating the last turn has either been reverted or committed"
      />
    );
  }
  return (
    <FormattedMessage
      id="codex.review.noDiff.reverted"
      defaultMessage="The last turn was reverted."
      description="Label indicating the last turn has been reverted"
    />
  );
}

interface ReviewNoDiffGitRepoActionsProps {
  actions?: React.ReactNode;
  errorMessage?: string | null;
}

function ReviewNoDiffGitRepoActions({
  actions,
  errorMessage,
}: ReviewNoDiffGitRepoActionsProps) {
  if (actions == null && errorMessage == null) return null;
  const error =
    errorMessage == null ? null : (
      <div className="text-sm break-words text-token-error-foreground">
        <FormattedMessage
          id="codex.review.noDiff.gitInit.error"
          defaultMessage={"Git init failed: {message}"}
          description="Error text shown when git initialization fails from the diff empty state"
          values={{ message: errorMessage }}
        />
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-2">
      {error}
      {actions}
    </div>
  );
}

interface ReviewNoDiffEmptyStateProps {
  hasLastTurnDiff: boolean;
  className?: string;
  actions?: React.ReactNode;
  showGitRepoEmptyState?: boolean;
  gitRepoActions?: React.ReactNode;
  gitRepoErrorMessage?: string | null;
}

function ReviewNoDiffEmptyState({
  hasLastTurnDiff,
  className,
  actions,
  showGitRepoEmptyState = false,
  gitRepoActions,
  gitRepoErrorMessage,
}: ReviewNoDiffEmptyStateProps) {
  const title = showGitRepoEmptyState ? (
    <FormattedMessage
      id="codex.review.noDiff.gitRepoRequired.title"
      defaultMessage="Create a Git repository"
      description="Empty state title shown when diffing isn't available without a git repo"
    />
  ) : (
    <FormattedMessage
      id="codex.review.noDiff"
      defaultMessage="No file changes yet"
      description="Label indicating a code review has no changes"
    />
  );
  const description = (
    <ReviewNoDiffDescription
      hasLastTurnDiff={hasLastTurnDiff}
      showGitRepoEmptyState={showGitRepoEmptyState}
    />
  );
  const resolvedActions = showGitRepoEmptyState ? (
    <ReviewNoDiffGitRepoActions
      actions={gitRepoActions}
      errorMessage={gitRepoErrorMessage}
    />
  ) : (
    actions
  );
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      illustration={<ReviewEmptyIllustrationContainer />}
      title={title}
      description={description}
      actions={resolvedActions}
    />
  );
}

interface ReviewNoDiffEmptyStateContainerProps {
  actions?: React.ReactNode;
  className?: string;
}

function ReviewNoDiffEmptyStateContainer({
  actions,
  className,
}: ReviewNoDiffEmptyStateContainerProps) {
  const cwd = useAtomValue(conversationCwdAtom);
  const hostConfig = useAtomValue(reviewHostConfigAtom);
  const lastTurnDiff = useAtomValue(reviewLastTurnDiffAtom);
  const showGitRepoEmptyState = useAtomValue(reviewShowGitRepoEmptyStateAtom);
  const [gitInitError, setGitInitError] = useState<{
    cwd: string;
    message: string;
  } | null>(null);
  const handleErrorMessage = (message: string) => {
    if (cwd != null) setGitInitError({ cwd, message });
  };
  const {
    canCreateGitRepository,
    createGitRepository,
    isCreatingGitRepository,
  } = useCreateGitRepository({
    cwd,
    hostConfig,
    onErrorMessage: handleErrorMessage,
  });
  const errorMessage =
    cwd != null && gitInitError?.cwd === cwd ? gitInitError.message : null;
  const hasLastTurnDiff = lastTurnDiff.diffText != null;
  const gitRepoActions =
    showGitRepoEmptyState && canCreateGitRepository && cwd != null ? (
      <Button
        color="secondary"
        size="toolbar"
        disabled={isCreatingGitRepository}
        onClick={() => {
          setGitInitError(null);
          createGitRepository();
        }}
      >
        {isCreatingGitRepository ? (
          <FormattedMessage
            id="codex.review.noDiff.gitInit.creating"
            defaultMessage="Creating…"
            description="Button label shown while git init is running from the diff empty state"
          />
        ) : (
          <FormattedMessage
            id="codex.review.noDiff.gitInit.createRepository"
            defaultMessage="Create git repository"
            description="Button label to create a git repository from the diff empty state"
          />
        )}
      </Button>
    ) : null;
  return (
    <ReviewNoDiffEmptyState
      className={className}
      actions={actions}
      hasLastTurnDiff={hasLastTurnDiff}
      showGitRepoEmptyState={showGitRepoEmptyState}
      gitRepoErrorMessage={errorMessage}
      gitRepoActions={gitRepoActions}
    />
  );
}

interface StageFilterEmptyStateProps {
  actions?: React.ReactNode;
  className?: string;
  stageFilter: "staged" | "unstaged";
}

function StageFilterEmptyState({
  actions,
  className,
  stageFilter,
}: StageFilterEmptyStateProps) {
  const isStaged = stageFilter === "staged";
  const title = isStaged ? (
    <FormattedMessage
      id="codex.review.stageFilter.empty.staged.title"
      defaultMessage="No staged changes"
      description="Empty state title when there are no staged changes"
    />
  ) : (
    <FormattedMessage
      id="codex.review.stageFilter.empty.unstaged.title"
      defaultMessage="No unstaged changes"
      description="Empty state title when there are no unstaged changes"
    />
  );
  const description = isStaged ? (
    <FormattedMessage
      id="codex.review.stageFilter.empty.staged.description"
      defaultMessage="Accept edits to stage them"
      description="Empty state description when there are no staged changes"
    />
  ) : (
    <FormattedMessage
      id="codex.review.stageFilter.empty.unstaged.description"
      defaultMessage="Code changes will appear here"
      description="Empty state description when there are no unstaged changes"
    />
  );
  return (
    <LargeEmptyState
      className={clsx("h-full", className)}
      title={title}
      description={description}
      actions={actions}
    />
  );
}
