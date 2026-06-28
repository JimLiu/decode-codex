// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Summary panel shell and exported popover content for the local conversation thread.
import { once } from "../../runtime/commonjs-interop";
import {
  BranchChangesSummaryRow,
  LocalConversationGitSummary,
} from "./local-conversation-git-summary";
import { LocalConversationEnvironmentActionControls } from "./local-environment-action-controls";
import type { BrowserUseSummary } from "./browser-use-summary";
import { initThreadFindNavigationRailNoopChunk } from "./review-search-highlights";
import {
  initThreadSummaryPanelChromePrimitives,
  ThreadSummaryPanelContent,
  ThreadSummaryPanelHeaderButton,
  ThreadSummaryPanelPopoverContent,
  ThreadSummaryPanelRoot,
  ThreadSummaryPanelSectionCount,
} from "./thread-summary-panel-chrome-primitives";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./thread-summary-panel-section";
import { ThreadSummaryPanelSections } from "./thread-summary-panel-sections";

type RenderableThreadNode = unknown;
type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;

type ThreadSummaryPanelChromeApi = {
  Content: typeof ThreadSummaryPanelContent;
  HeaderButton: typeof ThreadSummaryPanelHeaderButton;
  PopoverContent: typeof ThreadSummaryPanelPopoverContent;
  Root: typeof ThreadSummaryPanelRoot;
  Section: typeof ThreadSummaryPanelSection;
  SectionCount: typeof ThreadSummaryPanelSectionCount;
};

export let ThreadSummaryPanelChrome: ThreadSummaryPanelChromeApi;

export type FloatingLocalConversationSummaryPanelProps = {
  artifacts: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly BrowserUseSummary[];
  restoredBackgroundProcesses: readonly unknown[];
  plan: unknown;
  shouldHideInlineImmediately?: boolean;
  shouldShow: boolean;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
};

export type LocalConversationSummaryPanelProps = {
  artifacts: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly BrowserUseSummary[];
  restoredBackgroundProcesses: readonly unknown[];
  plan: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
};

export function FloatingLocalConversationSummaryPanel({
  artifacts,
  sideChats,
  toolSources,
  webSources,
  backgroundAgents,
  backgroundTerminals,
  browserUseSummaries,
  restoredBackgroundProcesses,
  plan,
  shouldHideInlineImmediately,
  shouldShow,
  onOpenBackgroundAgent,
}: FloatingLocalConversationSummaryPanelProps) {
  return (
    <ThreadSummaryPanelChrome.Root
      shouldHideInlineImmediately={shouldHideInlineImmediately}
      shouldShow={shouldShow}
    >
      <ThreadSummaryPanelChrome.Content>
        <ThreadSummaryPanelSections
          artifacts={artifacts}
          sideChats={sideChats}
          toolSources={toolSources}
          webSources={webSources}
          isVisible={shouldShow}
          backgroundAgents={backgroundAgents}
          backgroundTerminals={backgroundTerminals}
          browserUseSummaries={browserUseSummaries}
          restoredBackgroundProcesses={restoredBackgroundProcesses}
          plan={plan}
          registerEnvironmentActionCommands={true}
          BranchChangesSummaryRowComponent={BranchChangesSummaryRow}
          EnvironmentActionControlsComponent={
            LocalConversationEnvironmentActionControls
          }
          GitSummaryComponent={LocalConversationGitSummary}
          onOpenBackgroundAgent={onOpenBackgroundAgent}
          onForceShow={noopForceShowFloatingSummaryPanel}
        />
      </ThreadSummaryPanelChrome.Content>
    </ThreadSummaryPanelChrome.Root>
  );
}

function noopForceShowFloatingSummaryPanel() {}

export function LocalConversationSummaryPanel({
  artifacts,
  sideChats,
  toolSources,
  webSources,
  backgroundAgents,
  backgroundTerminals,
  browserUseSummaries,
  restoredBackgroundProcesses,
  plan,
  onOpenBackgroundAgent,
}: LocalConversationSummaryPanelProps) {
  return (
    <ThreadSummaryPanelChrome.PopoverContent>
      <ThreadSummaryPanelChrome.Content>
        <ThreadSummaryPanelSections
          artifacts={artifacts}
          sideChats={sideChats}
          toolSources={toolSources}
          webSources={webSources}
          isVisible={true}
          backgroundAgents={backgroundAgents}
          backgroundTerminals={backgroundTerminals}
          browserUseSummaries={browserUseSummaries}
          restoredBackgroundProcesses={restoredBackgroundProcesses}
          plan={plan}
          registerEnvironmentActionCommands={false}
          BranchChangesSummaryRowComponent={BranchChangesSummaryRow}
          EnvironmentActionControlsComponent={
            LocalConversationEnvironmentActionControls
          }
          GitSummaryComponent={LocalConversationGitSummary}
          onOpenBackgroundAgent={onOpenBackgroundAgent}
          onForceShow={noopForceShowPopoverSummaryPanel}
        />
      </ThreadSummaryPanelChrome.Content>
    </ThreadSummaryPanelChrome.PopoverContent>
  );
}

function noopForceShowPopoverSummaryPanel() {}

export const initThreadSummaryPanelChrome = once(() => {
  initThreadSummaryPanelChromePrimitives();
  initThreadFindNavigationRailNoopChunk();
  initThreadSummaryPanelSectionChunk();
  ThreadSummaryPanelChrome = {
    Content: ThreadSummaryPanelContent,
    HeaderButton: ThreadSummaryPanelHeaderButton,
    PopoverContent: ThreadSummaryPanelPopoverContent,
    Root: ThreadSummaryPanelRoot,
    Section: ThreadSummaryPanelSection,
    SectionCount: ThreadSummaryPanelSectionCount,
  };
});

export const initLocalConversationGitSummary = once(() => {
  (
    LocalConversationGitSummary as typeof LocalConversationGitSummary & {
      initChunk: () => void;
    }
  ).initChunk();
  initThreadSummaryPanelChrome();
  ThreadSummaryPanelSections.initChunk();
});
