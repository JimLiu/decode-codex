// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// ThreadLayout shell for local conversation pages and app-shell outlets.
import React, { type ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { ErrorBoundary } from "../../runtime/error-boundary";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  AppShellElementContext,
  AppShellOverlayOutlet,
} from "../../app-shell/mcp-app-frame";
import {
  initThreadNullRefChunk,
  useNullAppShellRef,
} from "../../app-shell/thread-background-processes";
import {
  initThreadLayoutChunk,
  ThreadLayout,
} from "../../threads/thread-layout";

export type LocalConversationThreadLayoutShellProps = {
  header: ReactNode;
  markConversationReadOnThreadInteraction: () => void;
  summaryPanelObstaclesEffect: ReactNode;
  threadBody: ReactNode;
};

export function LocalConversationThreadLayoutShell({
  header,
  markConversationReadOnThreadInteraction,
  summaryPanelObstaclesEffect,
  threadBody,
}: LocalConversationThreadLayoutShellProps) {
  let [threadLayoutContainer, setThreadLayoutContainer] =
      React.useState<HTMLElement | null>(null),
    newChatShortcutRef = useNullAppShellRef<HTMLElement>(
      "chatgpt.supportsNewChatKeyShortcut",
    ),
    handleThreadLayoutContainerRef = (containerElement: HTMLElement | null) => {
      newChatShortcutRef.current = containerElement;
      setThreadLayoutContainer(containerElement);
    },
    threadLayoutContainerRef = useStableCallback(
      handleThreadLayoutContainerRef,
    );

  let threadLayout = (
    <ThreadLayout
      className="min-h-0"
      bodyClassName="[&_[data-thread-find-target=conversation]]:scroll-mt-24"
      containerRef={threadLayoutContainerRef}
      data-vscode-context={'{"chatgpt.supportsNewChatMenu": true}'}
      onKeyDownCapture={markConversationReadOnThreadInteraction}
      onPointerDownCapture={markConversationReadOnThreadInteraction}
      onWheelCapture={markConversationReadOnThreadInteraction}
      header={header}
    >
      {summaryPanelObstaclesEffect}
      {threadBody}
      <AppShellOverlayOutlet />
    </ThreadLayout>
  );

  return (
    <ErrorBoundary name="LocalConversationPage">
      <AppShellElementContext.Provider value={threadLayoutContainer}>
        {threadLayout}
      </AppShellElementContext.Provider>
    </ErrorBoundary>
  );
}

export const initLocalConversationThreadLayoutShellChunk = once(() => {
  initThreadNullRefChunk();
  initThreadLayoutChunk();
});
