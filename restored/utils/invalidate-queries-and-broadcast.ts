// Restored from ref/webview/assets/invalidate-queries-and-broadcast-DTx8Xm8g.js
// invalidate-queries-and-broadcast-DTx8Xm8g chunk restored from the Codex webview bundle.
import { vscodeApiA, vscodeApiF } from "../boundaries/vscode-api";
export type QueryKey = readonly unknown[];
export type QueryClientLike = {
  invalidateQueries: (options: { queryKey: QueryKey }) => Promise<unknown>;
};
async function invalidateQueriesAndBroadcastKey(
  queryClient: QueryClientLike,
  queryKey: QueryKey,
): Promise<void> {
  await queryClient.invalidateQueries({
    queryKey,
  });
  vscodeApiF.dispatchMessage("query-cache-invalidate", {
    queryKey: [...queryKey],
  });
}
export function invalidateQueriesAndBroadcast(): (
  queryKey: QueryKey,
) => Promise<void> {
  const queryClient = vscodeApiA() as QueryClientLike;
  return async (queryKey: QueryKey) => {
    await invalidateQueriesAndBroadcastKey(queryClient, queryKey);
  };
}
