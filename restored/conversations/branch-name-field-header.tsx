// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Header row for the branch-name input in the worktree/sync setup modal, with an
// optional shortcut to configure the branch prefix in git settings.
import { FormattedMessage } from "../vendor/react-intl";
import { useNavigate } from "../vendor/react-router";

interface BranchNameFieldHeaderProps {
  showSetPrefix?: boolean;
}

function BranchNameFieldHeader({
  showSetPrefix = true,
}: BranchNameFieldHeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-token-foreground">
        <FormattedMessage
          id="localConversation.syncSetup.branchName"
          defaultMessage="Branch name"
          description="Title for the branch name input in the sync setup modal"
        />
      </span>
      {showSetPrefix ? (
        <button
          type="button"
          className="text-sm text-token-description-foreground hover:text-token-foreground"
          onClick={() => {
            navigate("/settings/git-settings");
          }}
        >
          <FormattedMessage
            id="localConversation.syncSetup.setPrefix"
            defaultMessage="Set prefix"
            description="Label for branch prefix configuration"
          />
        </button>
      ) : null}
    </div>
  );
}

export { BranchNameFieldHeader };
export type { BranchNameFieldHeaderProps };
