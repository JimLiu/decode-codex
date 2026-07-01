// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Refresh helpers for push status and pull-request status after git workflows.

import {
  buildQueryKey,
  refreshPushStatus,
} from "../boundaries/onboarding-commons-externals.facade";
import type { ScopedStore } from "./git-workflow-runner-types";

export function refreshPushStatusAndPullRequest(
  scope: ScopedStore,
  {
    branch,
    cwd,
    hostConfig,
    operationSource,
    refetchPullRequestStatus,
  }: {
    branch?: string | null;
    cwd: string;
    hostConfig: { id: string };
    operationSource: string;
    refetchPullRequestStatus?: (() => void) | null;
  },
): void {
  refreshPushStatus(scope, { cwd, hostConfig, operationSource });
  if (refetchPullRequestStatus != null) {
    refetchPullRequestStatus();
    return;
  }
  if (branch != null) {
    scope.queryClient.invalidateQueries({
      queryKey: buildQueryKey("gh-pr-status", {
        cwd,
        headBranch: branch,
        hostId: hostConfig.id,
      }),
    });
  }
}
