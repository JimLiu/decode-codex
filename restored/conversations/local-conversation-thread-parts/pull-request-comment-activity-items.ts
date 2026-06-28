// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Shared filtering helper for pull request comment activity lists.
type PullRequestActivityItem = {
  type: string;
};

export function getPullRequestCommentActivityItems<
  ActivityItem extends PullRequestActivityItem,
>(activityItems: ActivityItem[]) {
  return activityItems.filter((item) => item.type !== "event");
}
