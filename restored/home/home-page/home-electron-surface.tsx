// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Electron-only home surface wiring for diff source state.
import React, { useEffect } from "react";
import {
  currentRouteSignal,
  diffSourceSignal,
  DiffSourceDisplay,
  ElectronSurface,
  initDiffSource,
  useSignalValue,
  useStore,
} from "../../boundaries/onboarding-commons-externals.facade";

export function HomeElectronSurface() {
  const appScopeStore = useStore(currentRouteSignal);
  const diffSource = useSignalValue(diffSourceSignal);

  useEffect(() => {
    initDiffSource(appScopeStore, "diff");
  }, [appScopeStore]);

  return (
    <>
      <ElectronSurface />
      <DiffSourceDisplay diffSource={diffSource} />
    </>
  );
}
