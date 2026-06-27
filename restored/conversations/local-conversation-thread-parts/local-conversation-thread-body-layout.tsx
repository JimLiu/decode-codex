// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Scroll layout and background-agent context wrapper for local conversation bodies.
import React, { type ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { Dt as BackgroundAgentOpenContext } from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  initThreadScrollLayoutChunk,
  ThreadScrollLayout,
} from "../../utils/thread-scroll-layout";

export type LocalConversationThreadBodyLayoutProps = {
  contentX?: unknown;
  floatingContent?: ReactNode;
  footer: ReactNode;
  hasLiveMcpAppFrame: boolean;
  initialScrollOffset: number | null;
  loadOlderConversationHistory: () => Promise<unknown> | unknown;
  onOpenBackgroundAgentFromSummary: (backgroundAgent: unknown) => void;
  onThreadScroll: (distanceFromBottomPx: number, isAtBottom: boolean) => void;
  remoteHostedPipAnchorHostId?: string;
  threadContent: ReactNode;
  threadScrollLayoutApiRef: React.Ref<unknown>;
};

export function LocalConversationThreadBodyLayout({
  contentX,
  floatingContent,
  footer,
  hasLiveMcpAppFrame,
  initialScrollOffset,
  loadOlderConversationHistory,
  onOpenBackgroundAgentFromSummary,
  onThreadScroll,
  remoteHostedPipAnchorHostId,
  threadContent,
  threadScrollLayoutApiRef,
}: LocalConversationThreadBodyLayoutProps) {
  let threadScrollLayout = (
    <ThreadScrollLayout
      ref={threadScrollLayoutApiRef}
      hasLiveMcpAppFrame={hasLiveMcpAppFrame}
      remoteHostedPIPAnchorHostId={remoteHostedPipAnchorHostId}
      contentX={contentX}
      footer={footer}
      initialOffset={initialScrollOffset}
      onScroll={onThreadScroll}
      onUserScrollToTop={loadOlderConversationHistory}
    >
      {threadContent}
    </ThreadScrollLayout>
  );

  return (
    <BackgroundAgentOpenContext.Provider
      value={onOpenBackgroundAgentFromSummary}
    >
      {threadScrollLayout}
      {floatingContent}
    </BackgroundAgentOpenContext.Provider>
  );
}

export const initLocalConversationThreadBodyLayoutChunk = once(() => {
  initThreadScrollLayoutChunk();
});
