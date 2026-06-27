// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Opens background-agent conversation threads as right-panel tabs.
import type { ComponentType, ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  Op as initConversationStateSelectors,
  Tp as hasConversationSignal,
  ak as initAppServerRequestBridge,
  ok as sendAppServerRequest,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  Jl as initRightPanelTabsStoreChunk,
  Yl as rightPanelTabsStore,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  Oi as BackgroundAgentAvatar,
  ki as initBackgroundAgentAvatarChunk,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";

type BackgroundAgentThreadScope = {
  get<Value = unknown>(signal: unknown, key?: unknown): Value;
};

type BackgroundAgentThread = {
  conversationId: string;
  displayName: ReactNode;
};

type LocalConversationTabProps = {
  conversationId: string;
};

export type OpenBackgroundAgentThreadTabOptions = {
  backgroundAgent: BackgroundAgentThread;
  hostId: string;
  TabComponent: ComponentType<LocalConversationTabProps>;
};

export const initBackgroundAgentThreadTab = once(() => {});

export async function openBackgroundAgentThreadTab(
  scope: BackgroundAgentThreadScope,
  {
    backgroundAgent,
    hostId,
    TabComponent,
  }: OpenBackgroundAgentThreadTabOptions,
) {
  let { conversationId } = backgroundAgent;
  if (!scope.get<boolean>(hasConversationSignal, conversationId)) {
    await sendAppServerRequest("hydrate-background-threads", {
      hostId,
      threadIds: [conversationId],
    });
  }
  if (scope.get<boolean>(hasConversationSignal, conversationId)) {
    rightPanelTabsStore.openTab(scope, TabComponent, {
      icon: <BackgroundAgentAvatar className="icon-sm" seed={conversationId} />,
      props: {
        conversationId,
      },
      id: `background-agent:${conversationId}`,
      title: backgroundAgent.displayName,
    });
  }
}

export const initBackgroundAgentThreadTabs = once(() => {
  initConversationStateSelectors();
  initAppServerRequestBridge();
  initRightPanelTabsStoreChunk();
  initBackgroundAgentAvatarChunk();
});
