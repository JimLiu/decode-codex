// Restored from ref/webview/assets/header-CT44CGhD.js
// Shared types for the Chrome extension side-panel header.
import type { ReactNode } from "react";
import type {
  CloudEnvironmentRecord,
  TaskRecord,
} from "../runtime/codex-api/types";
import type { PendingWorktree } from "../threads/pending-worktree-store/types";

export type ChromeExtensionHeaderProps = {
  className?: string;
  desktopDeepLinkConversationId?: string | null;
  onBack?: () => void;
  title?: ReactNode;
  trailing?: ReactNode;
};

export type QueryResult<TData> = {
  data?: TData;
  error?: unknown;
  isError?: boolean;
  isLoading?: boolean;
  isPending?: boolean;
  refetch: () => unknown;
};

export type ChromeRuntime = {
  getManifest?: () => {
    version?: string;
  };
  getURL?: (path: string) => string;
};

export type ChromeGlobal = typeof globalThis & {
  chrome?: {
    runtime?: ChromeRuntime;
  };
};

export type HeaderCloudTask = TaskRecord & {
  created_at?: number | null;
  has_unread_turn?: boolean | null;
  id?: string;
  task_id?: string;
  title?: string | null;
  updated_at?: number | null;
};

export type LocalConversation = {
  createdAt: number;
  cwd?: string | null;
  hasUnreadTurn?: boolean | null;
  hostId?: string | null;
  id: string;
  name?: string | null;
  recencyAt?: number | null;
  title?: string | null;
  updatedAt: number;
  [key: string]: unknown;
};

export type RecentTask =
  | {
      at: number;
      key: string;
      kind: "remote";
      task: HeaderCloudTask;
    }
  | {
      at: number;
      conversation: LocalConversation;
      key: string;
      kind: "local";
    }
  | {
      at: number;
      key: string;
      kind: "pending-worktree";
      pendingWorktree: PendingWorktree;
    };

export type RecentTaskFilter = "recent" | "cloud" | "local";

export type HeaderEnvironment = CloudEnvironmentRecord;
