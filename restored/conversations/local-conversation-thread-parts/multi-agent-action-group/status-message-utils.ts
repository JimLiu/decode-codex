// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Utilities for status-keyed multi-agent action message groups.

import type { StatusMessageGroup } from "./types";

export function pickStatusMessages(
  map: StatusMessageGroup,
): StatusMessageGroup {
  return {
    inProgress: map.inProgress,
    completed: map.completed,
    failed: map.failed,
  };
}
