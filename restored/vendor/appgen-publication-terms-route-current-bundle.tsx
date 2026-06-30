// Restored from ref/webview/assets/appgen-publication-terms-route-CgK9B-Bt.js
// Current AppgenPublicationTermsRoute backing bundle with restored dependency imports.

import type { ReactElement, ReactNode } from "react";
import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerGLowerC as initReactCompilerRuntime } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerELowerF as useSelectedAccountQuery,
  worktreeNewThreadQueryCompatSlotUpperJLowerD as initSelectedAccountQueryRuntime,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appgenPublicationTermsDisclosureSignal as initAppgenPublicationTermsDisclosureRuntime,
  currentAppInitialSharedMember0546 as getAppgenAnnouncementAudienceForAccount,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  AppgenAnnouncementModalController,
  initAppgenAnnouncementModalRuntime,
} from "../appgen/appgen-announcement-modal";

type AppgenPublicationTermsRouteProps = {
  children: ReactNode;
};

function AppgenPublicationTermsRoute({
  children,
}: AppgenPublicationTermsRouteProps): ReactElement {
  const { data: account, isLoading } = useSelectedAccountQuery();
  const announcement = isLoading ? null : (
    <AppgenAnnouncementModalController
      audience={getAppgenAnnouncementAudienceForAccount(account)}
      showWhenUnseen
    />
  );

  return (
    <>
      {children}
      {announcement}
    </>
  );
}

rolldownRuntimeN(() => {
  initReactCompilerRuntime();
  initSelectedAccountQueryRuntime();
  initAppgenAnnouncementModalRuntime();
  initAppgenPublicationTermsDisclosureRuntime();
})();
export { AppgenPublicationTermsRoute };
