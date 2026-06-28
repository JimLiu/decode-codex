// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Reviewer request popover used from the pull request side-panel overview row.
import { useState, type ReactNode } from "react";
import { initPlusIcon, PlusIcon } from "../../icons/plus-icon";
import { once } from "../../runtime/commonjs-interop";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  DropdownSearchIcon as SearchIcon,
  initSearchIcon,
} from "../../ui/dropdown/search";
import { initDropdownMenuPrimitives } from "../../ui/dropdown";
import {
  initPopoverPrimitives,
  Popover as PopoverRoot,
  PopoverContent,
  PopoverTitle as ScreenReaderTitle,
  PopoverTrigger,
} from "../../ui/popover";
import { initSpinnerComponent, Spinner } from "../../ui/spinner";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import {
  createHostQuerySignal,
  initHostQueryRuntime,
  initTaskWorkspaceHostQueryRuntime,
  QUERY_DURATIONS,
  useDebouncedValue,
} from "../../runtime/host-query-runtime";
import {
  initToastSignalRuntime,
  toastSignal,
} from "../local-conversation-route-runtime";
import { initVscodeBridgeRuntime } from "../../runtime/platform-content-runtime";
import {
  initShareInviteAutocompleteChunk,
  ShareInviteAutocomplete,
} from "../../collaboration/share-invite-autocomplete";
import {
  initPullRequestAnalyticsChunk,
  initPullRequestUpdateMutationChunk,
  trackPullRequestAction,
  usePullRequestUpdateMutation,
} from "../../github/pull-request-actions";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";

type PullRequestBoardItem = {
  cwd: string;
  headBranch: string;
  number: number;
};

type ReviewerSearchResult = {
  avatarUrl?: string | null;
  login: string;
};

type ReviewerSearchOption = ReviewerSearchResult & {
  id: string;
  imageUrl?: string | null;
  label: string;
};

type PullRequestUpdateMutation = {
  data?: { status?: string; error?: string } | null;
  error?: { message?: string } | null;
  isError: boolean;
  isPending: boolean;
  mutate: (
    payload: {
      action: "request-reviewers";
      cwd: string;
      number: number;
      repo: unknown;
      reviewers: string[];
    },
    options: {
      onSuccess: (result: { status: string }) => void;
    },
  ) => void;
  reset: () => void;
};

type PullRequestReviewerRequestButtonProps = {
  hostId: string;
  item: PullRequestBoardItem;
  pendingReviewerLogins: readonly string[];
  repo: unknown;
};

type GithubUserSearchQuery = unknown;

let githubUserSearchQuery: GithubUserSearchQuery;

const initGithubUserSearchQuery = once(() => {
  initAppScopeSignalRuntime();
  initHostQueryRuntime();
  initVscodeBridgeRuntime();
  githubUserSearchQuery = createHostQuerySignal(
    appScope,
    "gh-user-search",
    (queryParams: { query: string }) => ({
      enabled: queryParams.query.length > 0,
      params: queryParams,
      retry: false,
      select: (response: {
        status: string;
        error?: string;
        users?: unknown;
      }) => {
        if (response.status === "error") throw Error(response.error);
        return response.users;
      },
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    }),
  );
});

function filterAlreadyPendingReviewers({
  pendingReviewerLogins,
  searchResults,
}: {
  pendingReviewerLogins: readonly string[];
  searchResults: ReviewerSearchResult[];
}) {
  let pendingReviewerLoginSet = new Set(
    pendingReviewerLogins.map((item) => item.toLowerCase()),
  );
  return searchResults.filter(
    ({ login }) => !pendingReviewerLoginSet.has(login.toLowerCase()),
  );
}

function getReviewerSearchMenuOptions({
  availableReviewers,
  isCurrentQuery,
  query,
  searchHasError,
  selectedReviewers,
}: {
  availableReviewers?: ReviewerSearchResult[];
  isCurrentQuery: boolean;
  query: string;
  searchHasError: boolean;
  selectedReviewers: ReviewerSearchResult[];
}) {
  if (searchHasError && isCurrentQuery) return [];
  if (query.length > 0 && !isCurrentQuery) return undefined;
  return availableReviewers == null
    ? selectedReviewers.length > 0
      ? selectedReviewers
      : query.length === 0
        ? []
        : undefined
    : uniqBy([...selectedReviewers, ...availableReviewers], ({ login }) =>
        login.toLowerCase(),
      );
}

function uniqBy<TItem>(
  items: readonly TItem[],
  getKey: (item: TItem) => string,
): TItem[] {
  let seenKeys = new Set<string>();
  return items.filter((item) => {
    let key = getKey(item);
    if (seenKeys.has(key)) return false;
    seenKeys.add(key);
    return true;
  });
}

function toggleSelectedReviewer(
  selectedReviewers: ReviewerSearchResult[],
  reviewer: ReviewerSearchResult,
) {
  let existingReviewer = selectedReviewers.find(
    ({ login }) => login.toLowerCase() === reviewer.login.toLowerCase(),
  );
  return existingReviewer == null
    ? [...selectedReviewers, reviewer]
    : selectedReviewers.filter((item) => item !== existingReviewer);
}

const initReviewerSearchUniqByModule = once(() => {});

export function RequestPullRequestReviewersButton({
  hostId,
  item,
  pendingReviewerLogins,
  repo,
}: PullRequestReviewerRequestButtonProps) {
  let scope = useScope(appScope),
    intl = useIntl(),
    [open, setOpen] = useState(false),
    [query, setQuery] = useState(""),
    [selectedReviewers, setSelectedReviewers] = useState<
      ReviewerSearchResult[]
    >([]);
  let currentQuery = query.trim(),
    debouncedQuery = useDebouncedValue(currentQuery, 250),
    searchParams = {
      cwd: item.cwd,
      hostId,
      query: debouncedQuery,
      repo,
    };
  let { data, isError, refetch } = useScopedValue(
      githubUserSearchQuery,
      searchParams,
    ) as {
      data?: ReviewerSearchResult[];
      isError: boolean;
      refetch: () => void;
    },
    updateMutationParams = {
      cwd: item.cwd,
      headBranch: item.headBranch,
      hostId,
      operationSource: "pull_request_board",
    };
  let updatePullRequestMutation = usePullRequestUpdateMutation(
      updateMutationParams,
    ) as PullRequestUpdateMutation,
    reviewerOptions = getReviewerSearchMenuOptions({
      availableReviewers:
        data == null
          ? undefined
          : filterAlreadyPendingReviewers({
              pendingReviewerLogins,
              searchResults: data,
            }),
      isCurrentQuery: debouncedQuery === currentQuery,
      query: currentQuery,
      searchHasError: isError,
      selectedReviewers,
    })?.map(toReviewerSearchOption);
  let selectedOptionIds = new Set(selectedReviewers.map(getReviewerOptionId)),
    clearReviewerPicker = () => {
      setQuery("");
      setSelectedReviewers([]);
      updatePullRequestMutation.reset();
    },
    requestSelectedReviewers = () => {
      if (selectedReviewers.length === 0) return;
      updatePullRequestMutation.reset();
      trackPullRequestAction(scope, {
        action: "request_approvals",
        item,
        surface: "thread_side_panel",
      });
      updatePullRequestMutation.mutate(
        {
          action: "request-reviewers",
          cwd: item.cwd,
          number: item.number,
          repo,
          reviewers: selectedReviewers.map(getReviewerLogin),
        },
        {
          onSuccess: (result) => {
            if (result.status !== "success") return;
            scope.get(toastSignal).success(
              intl.formatMessage(
                {
                  id: "pullRequestSidePanel.approvals.request.successReviewers",
                  defaultMessage:
                    "{count, plural, one {Requested approval from one reviewer} other {Requested approval from # reviewers}}",
                  description:
                    "Toast shown after requesting a pull request approval",
                },
                {
                  count: selectedReviewers.length,
                },
              ),
            );
            setOpen(false);
            clearReviewerPicker();
          },
        },
      );
    };
  let handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) clearReviewerPicker();
  };
  let triggerLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.open",
    defaultMessage: "Request reviewers",
    description:
      "Accessible label for opening the pull request reviewer picker",
  });
  let triggerButton = (
    <PopoverTrigger asChild={true}>
      <Button aria-label={triggerLabel} color="secondary" size="iconMd">
        <PlusIcon aria-hidden={true} className="icon-2xs" />
      </Button>
    </PopoverTrigger>
  );
  let requestPending = updatePullRequestMutation.isPending,
    reviewerSearchMenu = (
      <ShareInviteAutocomplete
        ariaLabel={intl.formatMessage({
          id: "pullRequestSidePanel.approvals.search.ariaLabel",
          defaultMessage: "Search GitHub users",
          description: "Accessible label for searching pull request reviewers",
        })}
        disabled={requestPending}
        emptyMessage={getReviewerSearchEmptyMessage({
          currentQuery,
          debouncedQuery,
          isError,
          onRetry: refetch,
        })}
        loadingLabel={intl.formatMessage({
          id: "pullRequestSidePanel.approvals.search.loading",
          defaultMessage: "Searching…",
          description: "Loading message while searching pull request reviewers",
        })}
        options={reviewerOptions}
        loadingSize="compact"
        placeholder={intl.formatMessage({
          id: "pullRequestSidePanel.approvals.search.placeholder",
          defaultMessage: "Request review from…",
          description: "Placeholder for searching pull request reviewers",
        })}
        query={query}
        selectedOptionIds={selectedOptionIds}
        variant="menu"
        leadingContent={
          <SearchIcon
            aria-hidden={true}
            className="icon-sm shrink-0 text-token-text-tertiary"
          />
        }
        onEscape={() => {
          setOpen(false);
          clearReviewerPicker();
        }}
        onQueryChange={setQuery}
        onSelectOption={(reviewer: ReviewerSearchResult) => {
          setSelectedReviewers((currentReviewers) =>
            toggleSelectedReviewer(currentReviewers, reviewer),
          );
        }}
      />
    );
  let popoverContent = (
    <PopoverContent align="end">
      <ScreenReaderTitle className="sr-only">
        <FormattedMessage
          id="pullRequestSidePanel.approvals.dialog.title"
          defaultMessage="Request approvals"
          description="Title for the dialog used to request pull request approvals"
        />
      </ScreenReaderTitle>
      {reviewerSearchMenu}
      {getRequestReviewersErrorMessage(updatePullRequestMutation)}
      {getRequestReviewersFooter({
        intl,
        requestPending,
        selectedReviewers,
        onRequestReviewers: requestSelectedReviewers,
      })}
    </PopoverContent>
  );
  return (
    <PopoverRoot open={open} onOpenChange={handleOpenChange}>
      {triggerButton}
      {popoverContent}
    </PopoverRoot>
  );
}

function getReviewerSearchEmptyMessage({
  currentQuery,
  debouncedQuery,
  isError,
  onRetry,
}: {
  currentQuery: string;
  debouncedQuery: string;
  isError: boolean;
  onRetry: () => void;
}) {
  if (currentQuery.length === 0) {
    return (
      <FormattedMessage
        id="pullRequestSidePanel.approvals.search.prompt"
        defaultMessage="Search by name or GitHub username"
        description="Prompt shown before searching for a pull request reviewer"
      />
    );
  }
  if (isError && debouncedQuery === currentQuery) {
    return (
      <span className="flex items-center justify-between gap-3 text-token-error-foreground">
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.error"
          defaultMessage="Couldn’t search GitHub users"
          description="Error shown when pull request reviewer search fails"
        />
        <Button color="outline" size="default" type="button" onClick={onRetry}>
          <FormattedMessage
            id="pullRequestSidePanel.approvals.search.retry"
            defaultMessage="Retry"
            description="Retry button for pull request reviewer search"
          />
        </Button>
      </span>
    );
  }
  return (
    <FormattedMessage
      id="pullRequestSidePanel.approvals.search.empty"
      defaultMessage="No users found"
      description="Empty state for pull request reviewer search"
    />
  );
}

function getRequestReviewersErrorMessage(
  updatePullRequestMutation: PullRequestUpdateMutation,
) {
  if (
    updatePullRequestMutation.data?.status !== "error" &&
    !updatePullRequestMutation.isError
  ) {
    return null;
  }
  return (
    <div className="px-2 py-1.5 text-sm" aria-live="polite">
      <span className="text-token-error-foreground">
        {updatePullRequestMutation.data?.status === "error"
          ? updatePullRequestMutation.data.error
          : updatePullRequestMutation.error?.message}
      </span>
    </div>
  );
}

function getRequestReviewersFooter({
  intl,
  requestPending,
  selectedReviewers,
  onRequestReviewers,
}: {
  intl: ReturnType<typeof useIntl>;
  requestPending: boolean;
  selectedReviewers: ReviewerSearchResult[];
  onRequestReviewers: () => void;
}) {
  if (selectedReviewers.length === 0 && !requestPending) return null;
  return (
    <div className="grid pt-1">
      {requestPending ? (
        <span
          aria-label={intl.formatMessage({
            id: "pullRequestSidePanel.approvals.request.pending",
            defaultMessage: "Requesting approval…",
            description:
              "Loading message while requesting pull request approval",
          })}
          className="flex items-center justify-center py-2"
          role="status"
        >
          <Spinner className="icon-2xs" />
        </span>
      ) : (
        <Button color="secondary" size="toolbar" onClick={onRequestReviewers}>
          <span className="mx-auto">
            <FormattedMessage
              id="pullRequestSidePanel.approvals.request"
              defaultMessage="Request"
              description="Button label for requesting pull request approval"
            />
          </span>
        </Button>
      )}
    </div>
  );
}

function getReviewerLogin(reviewer: ReviewerSearchResult) {
  return reviewer.login;
}

function getReviewerOptionId(reviewer: ReviewerSearchResult) {
  return reviewer.login.toLowerCase();
}

function toReviewerSearchOption(
  reviewer: ReviewerSearchResult,
): ReviewerSearchOption {
  return {
    ...reviewer,
    id: reviewer.login.toLowerCase(),
    imageUrl: reviewer.avatarUrl,
    label: reviewer.login,
  };
}

export const initRequestPullRequestReviewersButtonChunk = once(() => {
  initAppScopeSignalRuntime();
  initIntlRuntime();
  initButtonComponentPrimitives();
  initDropdownMenuPrimitives();
  initPopoverPrimitives();
  initShareInviteAutocompleteChunk();
  initSpinnerComponent();
  initToastSignalRuntime();
  initPlusIcon();
  initSearchIcon();
  initPullRequestUpdateMutationChunk();
  initPullRequestAnalyticsChunk();
  initTaskWorkspaceHostQueryRuntime();
  initGithubUserSearchQuery();
  initReviewerSearchUniqByModule();
});
