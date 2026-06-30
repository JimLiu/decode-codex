// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Home new-chat route shell and scoped context wrapper.
import React, { type ReactNode } from "react";
import {
  ScopedContextProvider,
  useNullAppShellRef,
} from "../../boundaries/onboarding-commons-externals.facade";
import { HomeElectronSurface } from "./home-electron-surface";
import { HomePageBody } from "./home-page-body";

export interface HomeNewChatPageProps {
  announcementStorybookOverride?: ReactNode;
  routeProjectId?: string | null;
}

export function HomeNewChatPage({
  announcementStorybookOverride,
  routeProjectId = null,
}: HomeNewChatPageProps) {
  const newChatRef = useNullAppShellRef("chatgpt.supportsNewChatKeyShortcut");

  return (
    <ScopedContextProvider>
      <div
        className="flex h-full flex-col"
        data-vscode-context='{"chatgpt.supportsNewChatMenu": true}'
        tabIndex={0}
        ref={newChatRef}
      >
        <HomeElectronSurface />
        <HomePageBody
          announcementStorybookOverride={announcementStorybookOverride}
          routeProjectId={routeProjectId}
        />
      </div>
    </ScopedContextProvider>
  );
}
