// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public entry point for the local-conversation git actions surface. Resolves the
// host config for the conversation, decides whether git queries can run, and
// provides the shared scope consumed by the git-actions content component.
import {
  conversationHostIdAtom,
  gitCliAvailabilityQueryAtom,
  LocalConversationGitActionsContent,
  localConversationGitActionsScope,
  ScopedContextProvider,
  useHostConfig,
  useScopedValue,
} from "../boundaries/onboarding-commons-externals.facade";

type GitActionsSurface = "summary-panel" | "review-toolbar";

interface LocalConversationGitActionsProps {
  conversationId?: string | null;
  cwd: string;
  hostId?: string | null;
  codexWorktree?: unknown;
  surface: GitActionsSurface;
  hidePullRequestSection?: boolean;
  hideCreatePullRequestAction?: boolean;
  branchControlOwnsDetachedSetup?: boolean;
  reviewToolbarCompact?: boolean;
  onCreateBranchActionReady?: (createBranch: () => void) => void;
  onCreatePullRequestActionReady?: (createPullRequest: () => void) => void;
}

function LocalConversationGitActions({
  conversationId = null,
  cwd,
  hostId,
  codexWorktree,
  surface,
  hidePullRequestSection = false,
  hideCreatePullRequestAction = false,
  branchControlOwnsDetachedSetup = false,
  reviewToolbarCompact = false,
  onCreateBranchActionReady,
  onCreatePullRequestActionReady,
}: LocalConversationGitActionsProps) {
  const conversationHostId = useScopedValue(
    conversationHostIdAtom,
    conversationId,
  );
  const hostConfig = useHostConfig(hostId ?? conversationHostId);
  const gitAvailability = useScopedValue(gitCliAvailabilityQueryAtom, {
    hostConfig,
    operationSource: "local_conversation_git_actions",
  });
  const deferGitQueries = gitAvailability.data?.available !== true;

  const scopeValue = {
    codexWorktree,
    conversationId,
    cwd,
    hostId: hostConfig.id,
  };

  return (
    <ScopedContextProvider
      scope={localConversationGitActionsScope}
      value={scopeValue}
    >
      <LocalConversationGitActionsContent
        deferGitQueries={deferGitQueries}
        hideCreatePullRequestAction={hideCreatePullRequestAction}
        hidePullRequestSection={hidePullRequestSection}
        reviewToolbarCompact={reviewToolbarCompact}
        surface={surface}
        branchControlOwnsDetachedSetup={branchControlOwnsDetachedSetup}
        onCreateBranchActionReady={onCreateBranchActionReady}
        onCreatePullRequestActionReady={onCreatePullRequestActionReady}
      />
    </ScopedContextProvider>
  );
}

export { LocalConversationGitActions };
export type { LocalConversationGitActionsProps, GitActionsSurface };
