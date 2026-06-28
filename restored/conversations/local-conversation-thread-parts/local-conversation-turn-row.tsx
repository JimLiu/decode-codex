// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation turn row renderer and per-turn error fallback.
import React from "react";
import { once } from "../../runtime/commonjs-interop";
import { useStableCallback } from "../../utils/use-stable-callback";
import {
  AB as initScopeRuntime,
  DN as Button,
  FB as useScope,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  ON as initButtonComponentPrimitives,
  bM as initKeyboardShortcutLabel,
  iF as initIntlRuntime,
  sF as FormattedMessage,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  Ja as initTurnErrorBoundarySupport,
  qa as ErrorBoundary,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  it as initConversationTurnRendererChunk,
  rt as ConversationTurnRenderer,
} from "../../boundaries/current-ref/profile-page-producer";
import { initThreadScrollLayoutStyleChunk } from "../../utils/thread-scroll-layout";

type LocalConversationTurnRowEntry = {
  completedThreadGoal?: unknown;
  conversationId: string;
  cwd: string | null;
  generatedImages?: unknown;
  hostId: string | null;
  includeTranscriptTurnExtras?: unknown;
  isBackgroundSubagentsEnabled: boolean;
  isCollapsed?: boolean;
  isMostRecentTurn: boolean;
  isProjectlessConversation: boolean;
  isReadOnly: boolean;
  modelProvider: unknown;
  onEditLastTurnMessage?: unknown;
  onForkTurnMessage?: unknown;
  onSetCollapsedForTurn?: (turnId: string, collapsed: boolean) => void;
  parentThreadAttachmentSourceConversationId?: string;
  preserveServerUserMessages?: boolean;
  projectlessOutputDirectory: string | null;
  renderMcpApps?: unknown;
  requests: readonly unknown[];
  resolvedApps: unknown;
  showInProgressFixedContent: boolean;
  totalTurnCount: number;
  transcriptBlock?: unknown;
  turn: unknown;
  turnId?: string | null;
  turnKey: string;
  turnNumber: number;
  turnSearchKey: string;
  turnState?: unknown;
};

export type LocalConversationTurnRowProps = {
  entry: LocalConversationTurnRowEntry;
  latestTurnFollowContentRef?: unknown;
};

export function LocalConversationTurnRow({
  entry,
  latestTurnFollowContentRef,
}: LocalConversationTurnRowProps) {
  let {
    conversationId,
    cwd,
    hostId,
    isCollapsed,
    isMostRecentTurn,
    isReadOnly,
    totalTurnCount,
    turnNumber,
    isProjectlessConversation,
    modelProvider,
    projectlessOutputDirectory,
    onEditLastTurnMessage,
    onForkTurnMessage,
    completedThreadGoal,
    generatedImages,
    onSetCollapsedForTurn,
    parentThreadAttachmentSourceConversationId,
    preserveServerUserMessages,
    renderMcpApps,
    requests,
    resolvedApps,
    showInProgressFixedContent,
    turn,
    turnState,
    turnId,
    turnKey,
    turnSearchKey,
    isBackgroundSubagentsEnabled,
    transcriptBlock,
    includeTranscriptTurnExtras,
  } = entry;

  useScope(localConversationRouteScope);

  let handleCollapsedChange = useStableCallback((collapsed: boolean) => {
      if (turnId != null) onSetCollapsedForTurn?.(turnId, collapsed);
    }),
    onSetCollapsed =
      turnId == null || onSetCollapsedForTurn == null
        ? undefined
        : handleCollapsedChange,
    parentThreadAttachment = React.useMemo(
      () =>
        parentThreadAttachmentSourceConversationId == null
          ? undefined
          : {
              sourceConversationId: parentThreadAttachmentSourceConversationId,
            },
      [parentThreadAttachmentSourceConversationId],
    );

  useStableCallback(() => {});

  return (
    <ErrorBoundary
      name="LocalConversationTurn"
      resetKey={turnKey}
      fallback={(errorBoundary: { resetError(): void }) => (
        <LocalConversationTurnErrorFallback
          onRetry={() => {
            errorBoundary.resetError();
          }}
        />
      )}
    >
      <ConversationTurnRenderer
        conversationId={conversationId}
        hostId={hostId}
        turnSearchKey={turnSearchKey}
        turn={turn}
        turnState={turnState}
        turnRequests={requests}
        preserveServerUserMessages={preserveServerUserMessages}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
        cwd={cwd}
        isMostRecentTurn={isMostRecentTurn}
        isReadOnly={isReadOnly}
        totalTurnCount={totalTurnCount}
        turnNumber={turnNumber}
        isProjectlessConversation={isProjectlessConversation}
        modelProvider={modelProvider}
        projectlessOutputDirectory={projectlessOutputDirectory}
        parentThreadAttachment={parentThreadAttachment}
        resolvedApps={resolvedApps}
        onEditLastTurnMessage={onEditLastTurnMessage}
        onForkTurnMessage={onForkTurnMessage}
        completedThreadGoal={completedThreadGoal}
        generatedImages={generatedImages}
        isCollapsed={isCollapsed}
        onSetCollapsed={onSetCollapsed}
        renderMcpApps={renderMcpApps}
        showInProgressFixedContent={showInProgressFixedContent}
        deferOffscreenDiffRendering={true}
        transcriptBlock={transcriptBlock}
        includeTranscriptTurnExtras={includeTranscriptTurnExtras}
        latestTurnFollowContentRef={latestTurnFollowContentRef}
        onOpenAeonDetails={undefined}
      />
    </ErrorBoundary>
  );
}

function LocalConversationTurnErrorFallback({
  onRetry,
}: {
  onRetry: () => void;
}) {
  let titleNode = (
      <div className="mb-2 font-medium text-token-text-primary">
        <FormattedMessage
          id="localConversation.turnRenderError.title"
          defaultMessage="This turn couldn't render"
          description="Error message shown when an individual conversation turn fails to render"
        />
      </div>
    ),
    retryLabel = (
      <FormattedMessage
        id="localConversation.turnRenderError.retry"
        defaultMessage="Try again"
        description="Button label to retry rendering a failed conversation turn"
      />
    );

  return (
    <div className="rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary">
      {titleNode}
      <Button color="secondary" size="default" onClick={onRetry}>
        {retryLabel}
      </Button>
    </div>
  );
}

export const initLocalConversationTurnRowDependencies = once(() => {
  initThreadScrollLayoutStyleChunk();
});

export const initLocalConversationTurnRowChunk = once(() => {
  initScopeRuntime();
  initIntlRuntime();
  initButtonComponentPrimitives();
  initTurnErrorBoundarySupport();
  initRouteScope();
  initKeyboardShortcutLabel();
  initConversationTurnRendererChunk();
});
