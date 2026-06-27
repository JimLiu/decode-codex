// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// App-shell source registration for the visible local conversation content.
import { once } from "../../runtime/commonjs-interop";
import { P_ as getLocalThreadConversationIdFromRoute } from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  initThreadAppShellSourcesChunk,
  ThreadAppShellSourceRegistration,
} from "../../app-shell/thread-background-processes";

type ConversationSource = {
  contextId: string;
};

export type LocalConversationAppShellSourceRegistrationProps = {
  conversationId: string;
  conversationSource: ConversationSource;
  diffSource: unknown;
  routeScopeValue: unknown;
};

export function LocalConversationAppShellSourceRegistration({
  conversationId,
  conversationSource,
  diffSource,
  routeScopeValue,
}: LocalConversationAppShellSourceRegistrationProps) {
  return (
    <ThreadAppShellSourceRegistration
      conversationSource={conversationSource}
      diffSource={diffSource}
      orchestrationId={conversationSource.contextId}
      isDefault={
        getLocalThreadConversationIdFromRoute(routeScopeValue) === conversationId
      }
    />
  );
}

export const initLocalConversationAppShellSourceRegistrationChunk = once(() => {
  initThreadAppShellSourcesChunk();
});
