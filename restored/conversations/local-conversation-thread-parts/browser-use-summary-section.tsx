// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser-use summary section title and content for the local conversation side panel.
import { FormattedMessage } from "../../vendor/react-intl";
import type { BrowserUseSummary } from "./browser-use-summary";
import { BrowserUseSummaryList } from "./browser-use-summary-list";

export type BrowserUseSummarySectionContentProps = {
  browserUseSummaries: readonly BrowserUseSummary[];
  onOpenBrowserTab: (browserTabId: string) => void;
};

export function BrowserUseSummarySectionTitle() {
  return (
    <FormattedMessage
      id="codex.localConversation.browserUse.title"
      defaultMessage="Browser"
      description="Title for the browser section in the thread summary side panel"
    />
  );
}

export function BrowserUseSummarySectionContent({
  browserUseSummaries,
  onOpenBrowserTab,
}: BrowserUseSummarySectionContentProps) {
  return (
    <BrowserUseSummaryList
      browserUseSummaries={browserUseSummaries}
      onOpen={(browserUseSummary) => {
        onOpenBrowserTab(browserUseSummary.browserTabId);
      }}
    />
  );
}
