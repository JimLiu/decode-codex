// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Side-chat rows for the local conversation summary panel.
import type { Key, ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { ChatIcon as CommentBubbleIcon } from "../../icons/chat-icon";
import { SpinnerIcon } from "../../ui/spinner";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../../utils/summary-panel-row";
import {
  initSummaryPanelExpandableList,
  SummaryPanelExpandableList,
} from "./summary-panel-expandable-list";

type ThreadSummarySideChat = {
  isResponseInProgress: boolean;
  tabId: Key;
  title: ReactNode;
};

export type ThreadSummarySideChatRowsProps<
  SideChat extends ThreadSummarySideChat = ThreadSummarySideChat,
> = {
  onOpen: (sideChat: SideChat) => void;
  sideChats: readonly SideChat[];
};

export function ThreadSummarySideChatRows<
  SideChat extends ThreadSummarySideChat,
>({ onOpen, sideChats }: ThreadSummarySideChatRowsProps<SideChat>) {
  let renderSideChatRow = (sideChat: SideChat) => (
    <SummaryPanelRow
      icon={
        sideChat.isResponseInProgress ? (
          <SpinnerIcon className="icon-sm shrink-0" />
        ) : (
          <CommentBubbleIcon className="icon-sm shrink-0" />
        )
      }
      label={sideChat.title}
      onClick={() => onOpen(sideChat)}
    />
  );

  return (
    <SummaryPanelExpandableList
      items={sideChats}
      getKey={getSideChatSummaryKey}
    >
      {renderSideChatRow}
    </SummaryPanelExpandableList>
  );
}

function getSideChatSummaryKey(sideChat: ThreadSummarySideChat) {
  return sideChat.tabId;
}

export const initThreadSummarySideChatRowsChunk = once(() => {
  initSummaryPanelExpandableList();
  initSummaryPanelRowChunk();
});
