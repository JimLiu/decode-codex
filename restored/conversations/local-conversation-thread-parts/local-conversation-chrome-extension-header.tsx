// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Chrome extension header for local conversation threads.
import type { ReactNode } from "react";
import { once } from "../../runtime/commonjs-interop";
import {
  $P as initAppScope,
  AB as initScopeRuntime,
  AI as getLocalConversationPath,
  FB as useScope,
  Ga as initElectronPlatformContent,
  Hx as getFallbackBackgroundAgentHandle,
  I_ as initRouteScope,
  O_ as initConversationRouteSourceHelpers,
  Op as initConversationStateSelectors,
  Ov as useNavigate,
  PB as useScopedValue,
  QP as appScope,
  Tp as hasConversationSignal,
  Wa as PlatformContentGate,
  bF as initPathHelpers,
  cA as getSubagentSourceMetadata,
  gm as backgroundAgentSnapshotSignal,
  gp as conversationCwdSignal,
  nm as projectlessOutputDirectorySignal,
  vm as subagentParentThreadIdSignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import { Kl as conversationTitleSignal } from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  Ai as initPullRequestConversationHelpers,
  Oi as BackgroundAgentAvatar,
  ji as isBackgroundSubagentsEnabled,
  ki as initBackgroundAgentAvatarChunk,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  ChromeExtensionHeader,
  initChromeExtensionHeaderChunk,
} from "../../browser/chrome-extension-header";
import {
  initThreadOverflowMenuChunk,
  ThreadOverflowMenu,
} from "../../threads/thread-overflow-menu";

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
  initScopeRuntime();
  initPathHelpers();
  initConversationStateSelectors();
  initConversationRouteSourceHelpers();
  initRouteScope();
  initAppScope();
  initElectronPlatformContent();
  initPullRequestConversationHelpers();
  initBackgroundAgentAvatarChunk();
  initChromeExtensionHeaderChunk();
  initThreadOverflowMenuChunk();
});
