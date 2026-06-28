// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Chrome extension header for local conversation threads.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import { useScope, useScopedValue } from "../../runtime/app-scope-hooks";
import {
  appScopeRoot as appScope,
  initAppScopeSignalRuntime,
} from "../../runtime/app-scope-runtime";
import {
  backgroundAgentSnapshotSignal,
  getFallbackBackgroundAgentHandle,
  getSubagentSourceMetadata,
} from "./background-agent-runtime";
import {
  conversationCwdSignal,
  hasConversationSignal,
  initConversationStateRuntime,
  projectlessOutputDirectorySignal,
  subagentParentThreadIdSignal,
} from "../../runtime/conversation-state-runtime";
import { initStatsigFeatureGateRuntime } from "../../runtime/feature-gate-runtime";
import {
  getLocalConversationPath,
  initConversationRouteSourceRuntime,
  initLocalConversationNavigationRuntime,
  useNavigate,
} from "../local-conversation-route-runtime";
import {
  initPlatformContentRuntime,
  PlatformContentGate,
} from "../../runtime/platform-content-runtime";
import { conversationTitleSignal } from "./local-conversation-state";
import {
  ChromeExtensionHeader,
  initChromeExtensionHeaderChunk,
} from "../../browser/chrome-extension-header";
import {
  initThreadOverflowMenuChunk,
  ThreadOverflowMenu,
} from "../../threads/thread-overflow-menu";
import {
  BackgroundAgentAvatar,
  initBackgroundAgentAvatarChunk,
} from "../../ui/background-agent-avatar";
import { useIsBackgroundSubagentsEnabled as isBackgroundSubagentsEnabled } from "../../utils/use-is-background-subagents-enabled";

type ScopeRuntime = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
};

type VisibleTurnEntry = {
  preserveServerUserMessages?: boolean;
  requests?: readonly unknown[];
  turn: unknown;
};

type RenderConversationMarkdownForTurns = (options: {
  cwd: string | null | undefined;
  isBackgroundSubagentsEnabled: boolean;
  projectlessOutputDirectory: string | null | undefined;
  title: ReactNode;
  visibleTurnEntries: readonly VisibleTurnEntry[];
}) => Promise<string | null>;

export type ChromeExtensionConversationHeaderProps = {
  conversationId: string;
  renderLocalConversationMarkdownForTurns: RenderConversationMarkdownForTurns;
  visibleTurnEntriesSignal: unknown;
};

type BackgroundAgentDisplayNameOptions = {
  agentNickname?: string | null;
  conversationId: string;
};

export function formatBackgroundAgentDisplayName({
  agentNickname,
  conversationId,
}: BackgroundAgentDisplayNameOptions): string {
  let displayName =
    agentNickname?.trim() || getFallbackBackgroundAgentHandle(conversationId);
  return displayName.startsWith("@") ? displayName.slice(1) : displayName;
}

export function ChromeExtensionConversationHeader({
  conversationId,
  renderLocalConversationMarkdownForTurns,
  visibleTurnEntriesSignal,
}: ChromeExtensionConversationHeaderProps) {
  let scope = useScope(appScope) as ScopeRuntime,
    isBackgroundSubagentsEnabledNow = isBackgroundSubagentsEnabled(),
    parentConversationId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ) as string | null | undefined,
    backgroundAgentSnapshot = useScopedValue(
      backgroundAgentSnapshotSignal,
      conversationId,
    ),
    backgroundAgentName = formatBackgroundAgentDisplayName({
      agentNickname:
        getSubagentSourceMetadata(backgroundAgentSnapshot)?.agentNickname ??
        null,
      conversationId,
    });
  let hasConversation = useScopedValue(
      hasConversationSignal,
      conversationId,
    ) as boolean,
    title = useScopedValue(
      conversationTitleSignal,
      conversationId,
    ) as ReactNode,
    cwd = useScopedValue(conversationCwdSignal, conversationId) as
      | string
      | null
      | undefined,
    projectlessOutputDirectory = useScopedValue(
      projectlessOutputDirectorySignal,
      conversationId,
    ) as string | null | undefined,
    navigate = useNavigate(),
    getConversationMarkdown = () => {
      let { visibleTurnEntries } = scope.get<{
        visibleTurnEntries: readonly VisibleTurnEntry[];
      }>(visibleTurnEntriesSignal, {
        conversationId,
        isBackgroundSubagentsEnabled: isBackgroundSubagentsEnabledNow,
      });
      return renderLocalConversationMarkdownForTurns({
        cwd,
        isBackgroundSubagentsEnabled: isBackgroundSubagentsEnabledNow,
        projectlessOutputDirectory,
        title,
        visibleTurnEntries,
      });
    };
  if (!hasConversation) return null;
  let onBack =
    parentConversationId == null
      ? undefined
      : () => {
          navigate(getLocalConversationPath(parentConversationId));
        };
  let headerTitle =
    parentConversationId == null ? (
      title
    ) : (
      <span className="flex min-w-0 items-center gap-1">
        <span className="truncate">{title}</span>
        <span className="flex shrink-0 items-center gap-1 font-medium">
          <BackgroundAgentAvatar
            className="icon-2xs"
            seed={conversationId}
            aria-hidden={true}
          />
          <span>{backgroundAgentName}</span>
        </span>
      </span>
    );
  let trailingActions = (
    <PlatformContentGate extension={true}>
      <ThreadOverflowMenu
        conversationId={conversationId}
        getConversationMarkdown={getConversationMarkdown}
        markdownParentConversationId={parentConversationId}
        cwd={cwd}
        title={title}
        canPin={false}
        hideForkActions={true}
      />
    </PlatformContentGate>
  );
  return (
    <PlatformContentGate chromeExtension={true} extension={true}>
      <ChromeExtensionHeader
        desktopDeepLinkConversationId={conversationId}
        onBack={onBack}
        title={headerTitle}
        trailing={trailingActions}
      />
    </PlatformContentGate>
  );
}

export const initChromeExtensionConversationHeaderChunk = once(() => {
  initAppScopeSignalRuntime();
  initLocalConversationNavigationRuntime();
  initConversationStateRuntime();
  initConversationRouteSourceRuntime();
  initPlatformContentRuntime();
  initStatsigFeatureGateRuntime();
  initBackgroundAgentAvatarChunk();
  initChromeExtensionHeaderChunk();
  initThreadOverflowMenuChunk();
});
