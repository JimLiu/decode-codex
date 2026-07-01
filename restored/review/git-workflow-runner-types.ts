// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for local conversation git workflow runners.

export interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
  queryClient: { invalidateQueries(filters: { queryKey: unknown }): void };
}

export interface IntlController {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
}

export interface ToastController {
  danger(message: string): void;
  success(message: string): void;
}

export interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
  codexWorktree?: boolean;
  operationSource: string;
}

export interface MutationResult {
  status: string;
  error?: string;
  errorType?: string;
  execOutput?: { command?: string | null; output?: string | null } | null;
  branch?: string;
  url?: string | null;
}
