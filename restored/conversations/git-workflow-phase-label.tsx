// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render the localized label for the current git workflow phase (commit / create PR).

import { FormattedMessage } from "../vendor/react-intl";
import { getGitWorkflowPhaseMessageDescriptor } from "../boundaries/onboarding-commons-externals.facade";

export type GitWorkflowPhase =
  | "generating-commit-message"
  | "generating-pr-message"
  | "creating-branch"
  | "committing"
  | "pushing"
  | "creating-pr";

export interface GitWorkflowPhaseLabelProps {
  phase: GitWorkflowPhase;
}

export function GitWorkflowPhaseLabel({ phase }: GitWorkflowPhaseLabelProps) {
  const descriptor = getGitWorkflowPhaseMessageDescriptor(phase);
  return <FormattedMessage {...descriptor} />;
}
