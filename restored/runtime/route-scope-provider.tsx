// Restored from ref/webview/assets/route-scope-provider-DTX8-kkG.js
// route-scope-provider-DTX8-kkG chunk restored from the Codex webview bundle.
import React, { useMemo } from "react";
import {
  appScopeA,
  appScopeR as AppScopeProvider,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";
import {
  resolvedThreadLocationIdAtom,
  routeScope,
  threadScope,
  type RouteLocation,
  type ThreadRouteScopeValue,
} from "../runtime/persisted-signal";
type RouteScopeImportStatus =
  | {
      status: "idle";
    }
  | {
      startedAtMs: number;
      status: "importing";
    }
  | {
      completedAtMs: number;
      status: "success";
    }
  | {
      completedAtMs: number;
      status: "error";
    };
type RouteScopeStore = {
  set(value: unknown, nextValue: RouteScopeImportStatus): void;
};
type RouteScopeProviderProps = {
  children: React.ReactNode;
  route: RouteLocation;
};
export const routeScopeImportStatusSignal = createAppScopeSignal(appScopeRoot, {
  status: "idle",
} satisfies RouteScopeImportStatus);
export async function runRouteScopeImport(
  routeScopeStore: RouteScopeStore,
  importRoute: () => Promise<void> | void,
): Promise<void> {
  routeScopeStore.set(routeScopeImportStatusSignal, {
    status: "importing",
    startedAtMs: Date.now(),
  });
  try {
    await importRoute();
    routeScopeStore.set(routeScopeImportStatusSignal, {
      status: "success",
      completedAtMs: Date.now(),
    });
  } catch (error) {
    routeScopeStore.set(routeScopeImportStatusSignal, {
      status: "error",
      completedAtMs: Date.now(),
    });
    throw error;
  }
}
export function RouteScopeProvider({
  children,
  route,
}: RouteScopeProviderProps): React.ReactElement {
  const clientThreadId = appScopeA(
    resolvedThreadLocationIdAtom,
    route,
  ) as string;
  const threadScopeValue = useMemo<ThreadRouteScopeValue>(
    () => ({
      clientThreadId,
    }),
    [clientThreadId],
  );
  const routeLayer = (
    <AppScopeProvider scope={routeScope} value={route}>
      {children}
    </AppScopeProvider>
  );
  return (
    <AppScopeProvider scope={threadScope} value={threadScopeValue}>
      {routeLayer}
    </AppScopeProvider>
  );
}
