// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Browser and Computer Use PiP sections for the local conversation summary panel.
import { once } from "../../runtime/commonjs-interop";
import { useIntl } from "../../vendor/react-intl";
import type { BrowserUseSummary } from "./browser-use-summary";
import {
  BrowserUseSummarySectionContent,
  BrowserUseSummarySectionTitle,
} from "./browser-use-summary-section";
import { ComputerUsePictureInPictureRow } from "./computer-use-pip-row";
import {
  initThreadSummaryPanelChromePrimitives,
  ThreadSummaryPanelSectionCount,
} from "./thread-summary-panel-chrome-primitives";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./thread-summary-panel-section";

export type ThreadSummaryComputerUsePipSectionProps = {
  isAvailable: boolean;
  isVisible: boolean;
  onToggle: () => void;
};

export function ThreadSummaryComputerUsePipSection({
  isAvailable,
  isVisible,
  onToggle,
}: ThreadSummaryComputerUsePipSectionProps) {
  let intl = useIntl(),
    toggleLabel = isVisible
      ? intl.formatMessage({
          id: "codex.localConversation.remoteHostedPip.hide",
          defaultMessage: "Hide PiP",
          description:
            "Accessible label for hiding the Computer Use PiP stream",
        })
      : intl.formatMessage({
          id: "codex.localConversation.remoteHostedPip.show",
          defaultMessage: "Show PiP",
          description:
            "Accessible label for showing the Computer Use PiP stream",
        });

  if (!isAvailable) return null;

  return (
    <ThreadSummaryPanelSection mode="headerless" sectionKey="computer-use-pip">
      <ComputerUsePictureInPictureRow
        isVisible={isVisible}
        onToggle={onToggle}
        toggleLabel={toggleLabel}
      />
    </ThreadSummaryPanelSection>
  );
}

export type ThreadSummaryBrowserTabsSectionProps = {
  browserUseSummaries: readonly BrowserUseSummary[];
  onOpenBrowserTab: (browserTabId: string) => void;
};

export function ThreadSummaryBrowserTabsSection({
  browserUseSummaries,
  onOpenBrowserTab,
}: ThreadSummaryBrowserTabsSectionProps) {
  if (browserUseSummaries.length === 0) return null;

  return (
    <ThreadSummaryPanelSection
      sectionKey="browser-tabs"
      title={<BrowserUseSummarySectionTitle />}
      titleSuffix={
        <ThreadSummaryPanelSectionCount count={browserUseSummaries.length} />
      }
    >
      <BrowserUseSummarySectionContent
        browserUseSummaries={browserUseSummaries}
        onOpenBrowserTab={onOpenBrowserTab}
      />
    </ThreadSummaryPanelSection>
  );
}

export const initThreadSummaryBrowserSectionsChunk = once(() => {
  initThreadSummaryPanelChromePrimitives();
  initThreadSummaryPanelSectionChunk();
});
