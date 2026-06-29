// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Shared types for Git host query helpers.
import type { QueryOptions } from "../query-client/react-query-runtime";

export type HostConfigWithId = {
  id: string;
  [key: string]: unknown;
};

export type GitMetadata = {
  commonDir: string;
  root: string;
};

export type GitQueryOptions<TData = unknown, TResult = TData> = QueryOptions<
  TData,
  TResult
> & {
  gcTime?: number;
  networkMode?: string;
  refetchOnWindowFocus?: boolean | "always";
  watchForGitInit?: boolean;
};

export type GitChangeType =
  | "config"
  | "head"
  | "synced-branch"
  | "working-tree";
