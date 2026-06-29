// Restored from ref/webview/assets/app-CAW031s_.js
// app-CAW031s_ chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { _appScopeN as AppScopeQueryClientProvider } from "../../boundaries/app-scope";
import { vscodeApiA as useQueryClient } from "../../boundaries/vscode-api";
export type QueryClientScopeProviderProps = {
  children: ReactNode;
};
export function QueryClientScopeProvider({
  children,
}: QueryClientScopeProviderProps) {
  const queryClient = useQueryClient();
  return (
    <AppScopeQueryClientProvider queryClient={queryClient}>
      {children}
    </AppScopeQueryClientProvider>
  );
}

export function initQueryClientScopeProviderChunk(): void {}
