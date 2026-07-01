// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for review diff store atoms, queries, and actions.

export type ReviewDiffFilter =
  | "staged"
  | "unstaged"
  | "branch"
  | "commit"
  | "last-turn";

export interface ReviewStore {
  get(atom: unknown, ...args: unknown[]): any;
  set(atom: unknown, ...args: unknown[]): void;
  watch(callback: (store: ReviewStore) => void): () => void;
  query: { snapshot(atom: unknown, params: unknown): any };
  queryClient: unknown;
}

export interface ComputedAtomContext {
  get: (atom: unknown, arg?: unknown) => any;
  scope: { value: any };
}

export interface GitMetadata {
  commonDir: string;
  root: string;
}

export interface QueryResult<TData = unknown> {
  data?: TData;
  dataUpdatedAt: number;
  error: unknown;
  isError: boolean;
  isFetching: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch: (options?: unknown) => Promise<unknown>;
}

export interface ReviewSummaryRequestInput {
  cwd: string | null;
  hideWhitespace: boolean;
  source: string | null;
  baseBranch: string | null;
  commitSha: string | null;
}
