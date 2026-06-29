// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derived count of unread activity surfaced on the collapsed sidebar trigger:
// unread automation runs plus any non-automation threads with pending activity.
import {
  appStoreScope,
  createScopedSelector,
  automationActivitySummarySignal,
  pendingActivityThreadsSignal,
  getAutomationThreadId,
} from "../boundaries/onboarding-commons-externals.facade";

export const sidebarUnreadActivityCountSignal = createScopedSelector(
  appStoreScope,
  ({ get }: { get: <T>(signal: unknown) => T }) => {
    const { automationThreadIds, unreadRunCount } = get<{
      automationThreadIds: Set<string>;
      unreadRunCount: number;
    }>(automationActivitySummarySignal);
    return (
      unreadRunCount +
      get<unknown[]>(pendingActivityThreadsSignal).filter((thread) => {
        const threadId = getAutomationThreadId(thread);
        return threadId == null || !automationThreadIds.has(threadId);
      }).length
    );
  },
);
