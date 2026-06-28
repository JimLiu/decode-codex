// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Opens background-agent conversation threads as right-panel tabs.
import type { ComponentType, ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import {
  hasConversationSignal,
  initConversationStateRuntime,
} from "../../runtime/conversation-state-runtime";
import {
  initRightPanelTabsStoreChunk,
  rightPanelTabsStore,
} from "../../app-shell/thread-panel-tabs-store";
import {
  BackgroundAgentAvatar,
  initBackgroundAgentAvatarChunk,
} from "../../ui/background-agent-avatar";

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
  initConversationStateRuntime();
  initAppServerRequestRuntime();
  initRightPanelTabsStoreChunk();
  initBackgroundAgentAvatarChunk();
});
