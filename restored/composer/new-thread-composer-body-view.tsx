// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Render-only view extracted from NewThreadComposerBody so the body can focus on
// state derivation, submission orchestration, and keyboard/attachment effects.

export function NewThreadComposerBodyView({
  context,
}: {
  context: Record<string, any>;
}) {
  const {
    AboveComposerPanel,
    AboveComposerSuggestionActions,
    AboveComposerSuggestions,
    AnnouncementBanner,
    AppshotCaptureControls,
    BackgroundSubagentsPanel,
    BlockedSubmitDialog,
    CloudModeIndicator,
    Composer,
    ComposerAttachmentPills,
    ComposerContextFilesWatcher,
    ComposerDropOverlay,
    ComposerExternalFooter,
    ComposerFooterControls,
    ComposerStatusMenuRow,
    FirstBlockRateLimitBanner,
    GoalReplacementConfirmationDialog,
    GoalResumePromptDialog,
    HooksNeedingReviewBanner,
    PendingRequestItemPanel,
    PluginContextLoader,
    QueuedMessageList,
    RateLimitBanner,
    SelectedTextAction,
    SelectedTextPortal,
    SideChatPrompt,
    ThreadGoalBanner,
    WindowsSandboxError,
    WindowsSandboxSetupBanner,
    aboveComposerHeaderContent,
    activeConversationId,
    activeMessageLimitBanner,
    actions,
    addContextButton,
    addFileAssetAttachment,
    addedFiles,
    agentMode,
    atMentionAutocomplete,
    attachmentGenRef,
    attachmentsContainerRef,
    backgroundRows,
    belowComposerContent,
    buildContextualLeadingItems,
    canStopAllBackgroundThreads,
    cancelGoalReplacement,
    cancelThreadGoal,
    clsx,
    commentAttachments,
    composerController,
    composerInput,
    composerLayoutMode,
    composerMode,
    composerModeSetting,
    confirmGoalReplacement,
    contextualLeadingItems,
    createPortal,
    currentLocalExecutionCwd,
    currentLocalExecutionHostId,
    dismissMessageLimitBanner,
    dropTargetPortalTarget,
    editingMessageId,
    emptySubmitTooltipNonce,
    executionCwd,
    executionHostId,
    extensionPageSelection,
    externalFooterProps,
    externalFooterVariant,
    fileAttachments,
    firstApproval,
    firstApprovalHostId,
    getAnimationDestinationFrame,
    gitRepoRootForCwd,
    goalReplacementConfirmation,
    handleAddSelectedText,
    handleCaptureAnimationDuration,
    handleCaptureAttached,
    handleCaptureSettled,
    handleCaptureStarted,
    handleDeleteMessage,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleEditMessage,
    handlePaste,
    handleRemoveAppshotContext,
    handleRemoveFile,
    handleRemoveFileAttachment,
    handleRemoveImage,
    handleRemovePastedTextAttachment,
    handleRemovePendingFileAttachment,
    handleRemovePendingPastedTextAttachment,
    handleSendNowMessage,
    handleShowPastedTextInTextField,
    handleStop,
    hasAboveComposerTrayBorder,
    hasApprovalSurface,
    hasDropTargetPortal,
    hasError,
    hasFirstApproval,
    hasMessageContent,
    hasPendingApproval,
    hasQueuedMessages,
    hasText,
    hasVisibleAttachments,
    hideArtifactPluginSuggestions,
    hooksNeedingReview,
    hooksNeedingReviewCount,
    hotkeyWindowHomeFooterControls,
    imageCommentDraftComments,
    inputLayout,
    inputSpacing,
    intl,
    isAutoSingleLine,
    isDragActive,
    isQueueingEnabled,
    isResponseInProgress,
    isSideConversation,
    isSingleLine,
    isStopTurnConfirmationVisible,
    isStopping,
    isSubmitting,
    isUsageBannerEnabled,
    mcpAppModelContextAttachments,
    mcpManagerHostId,
    mentionItems,
    mentionedThreadIds,
    messages,
    modelLimitName,
    modelLimitResetAt,
    onCreateSideConversation,
    openBackgroundThread,
    openComposerReferencedFile,
    openFile,
    openSideChat,
    pastedTextAttachments,
    pendingApproval,
    pendingApprovalKey,
    pendingCaptures,
    pendingFileAttachments,
    pendingPastedTextAttachments,
    pendingThreadGoal,
    permissionOverrideThreadSettings,
    permissionsCwdOverride,
    permissionsHostId,
    priorConversation,
    pullRequestChecks,
    pullRequestMergeConflict,
    rateLimit,
    rateLimitWarningThreshold,
    remoteProjectPin,
    removeAllImageComments,
    requirement,
    resolvedCwd,
    resumeThreadGoal,
    retry,
    savedWorkspaceRoot,
    scope,
    selectedTextAttachments,
    selectedTextOpenSideChat,
    setAppshotContexts,
    setComments,
    setComposerStateField,
    setIsStatusMenuOpen,
    setLockedLayout,
    setPriorConversation,
    setSelectedTextAttachments,
    setShowWindowsSandboxBanner,
    setSingleLineTextMeasureRef,
    showAboveComposerTray,
    showContextSuggestions,
    showCoreRateLimitUpsell,
    showDropOverlay,
    showFooter,
    showHooksNeedingReview,
    showModelLimitBanner,
    showPlanKeywordSuggestion,
    showShiftOverlay,
    showWindowsSandboxBanner,
    showWorkspaceUsageLimitBanner,
    skillMentionAutocomplete,
    splitCommentAttachmentsBySurface,
    stopAllBackgroundThreads,
    submit,
    submitButtonMode,
    submitFollowUpApproval,
    submitInitPrompt,
    submitLocalApproval,
    suggestionRoots,
    surfaceClassName,
    threadGoal,
    visibleImageAttachments,
    voiceControls,
  } = context;

  return (
    <>
      {!hasApprovalSurface ? (
        <ComposerStatusMenuRow
          agentMode={agentMode}
          composerMode={composerMode}
          currentLocalExecutionCwd={currentLocalExecutionCwd}
          currentLocalExecutionHostId={currentLocalExecutionHostId}
          onSubmitInitPrompt={submitInitPrompt}
          resolvedCwd={resolvedCwd}
          setIsStatusMenuOpen={setIsStatusMenuOpen}
          skillLookupRoots={suggestionRoots}
        />
      ) : null}
      {!isSideConversation && !hasApprovalSurface ? (
        <SideChatPrompt
          enabled={onCreateSideConversation != null}
          onOpenSideChat={() =>
            void openSideChat({ onCreateSideConversation, scope, intl })
          }
        />
      ) : null}
      <div
        className="relative flex w-full flex-col gap-2"
        onPaste={!hasApprovalSurface ? handlePaste : undefined}
      >
        {!hasApprovalSurface &&
        dropTargetPortalTarget != null &&
        showDropOverlay
          ? createPortal(<ComposerDropOverlay />, dropTargetPortalTarget)
          : null}
        {showAboveComposerTray
          ? createPortal(
              <AboveComposerPanel
                className={clsx(hasAboveComposerTrayBorder && "-mb-px", false)}
                expandedTopTray={hotkeyWindowHomeFooterControls != null}
              >
                {hasQueuedMessages ? (
                  <QueuedMessageList
                    messages={messages}
                    editingMessageId={editingMessageId}
                    hostId={currentLocalExecutionHostId}
                    isQueueingEnabled={isQueueingEnabled}
                    onEditMessage={handleEditMessage}
                    onDeleteMessage={handleDeleteMessage}
                    onSendNowMessage={handleSendNowMessage}
                    onReorderMessages={actions.reorder}
                    onResumeInterruptedQueue={actions.resumeInterruptedSteers}
                  />
                ) : null}
                {activeConversationId != null &&
                threadGoal != null &&
                (threadGoal as { status?: string }).status !== "complete" ? (
                  <ThreadGoalBanner
                    conversationId={activeConversationId}
                    goal={threadGoal}
                    hostId={currentLocalExecutionHostId}
                    permissionOverrideThreadSettings={
                      permissionOverrideThreadSettings
                    }
                  />
                ) : null}
                {showHooksNeedingReview ? (
                  <BackgroundSubagentsPanel
                    canStopAll={canStopAllBackgroundThreads}
                    onOpenThread={(conversationId: string) => {
                      void openBackgroundThread(conversationId);
                    }}
                    onStopAll={stopAllBackgroundThreads}
                    rows={backgroundRows}
                  />
                ) : null}
                {hasError ? <WindowsSandboxError onRetry={retry} /> : null}
                {!hasError && showWindowsSandboxBanner ? (
                  <WindowsSandboxSetupBanner
                    cwd={executionCwd}
                    requirement={requirement ?? "setup"}
                    setShowWindowsSandboxBanner={setShowWindowsSandboxBanner}
                  />
                ) : null}
                {showHooksNeedingReview ? (
                  <HooksNeedingReviewBanner
                    count={hooksNeedingReviewCount}
                    hooksNeedingReview={hooksNeedingReview}
                    hostId={currentLocalExecutionHostId}
                    projectRoot={savedWorkspaceRoot}
                  />
                ) : null}
                {aboveComposerHeaderContent}
              </AboveComposerPanel>,
              dropTargetPortalTarget as Element,
            )
          : null}
        {activeMessageLimitBanner?.variant === "first_block" ? (
          <FirstBlockRateLimitBanner
            domain={activeMessageLimitBanner.domain}
            threadId={activeMessageLimitBanner.conversationId}
            turnId={activeMessageLimitBanner.turnId}
          />
        ) : activeMessageLimitBanner == null ? (
          <RateLimitBanner
            isUsageBannerEnabled={isUsageBannerEnabled}
            modelName={modelLimitName}
            resetAt={modelLimitResetAt}
            rateLimit={rateLimit}
            rateLimitWarningThreshold={rateLimitWarningThreshold}
            showModelLimit={showModelLimitBanner}
            showWorkspaceUsageLimit={showWorkspaceUsageLimitBanner}
            showUpsell={showCoreRateLimitUpsell}
          />
        ) : (
          <AnnouncementBanner
            conversationId={activeMessageLimitBanner.conversationId}
            variant={activeMessageLimitBanner.variant}
            onClose={() => dismissMessageLimitBanner(scope, remoteProjectPin)}
          />
        )}
        {showContextSuggestions ? (
          <PluginContextLoader
            composerController={composerController}
            hostId={currentLocalExecutionHostId}
            roots={suggestionRoots}
          />
        ) : null}
        {composerModeSetting === "cloud" ? <CloudModeIndicator /> : null}
        <div className="relative">
          <AboveComposerSuggestions
            contextualSuggestions={{
              backgroundAgents: mentionItems,
              excludedThreadIds:
                activeConversationId == null
                  ? mentionedThreadIds
                  : [activeConversationId],
              hostId: currentLocalExecutionHostId,
              isHomeMenu: externalFooterVariant === "home",
              leadingItems: buildContextualLeadingItems(contextualLeadingItems),
              onAddContext: atMentionAutocomplete.addMention,
              onRequestClose: atMentionAutocomplete.closeAutocomplete,
              roots: suggestionRoots,
              skillRoots: suggestionRoots,
            }}
            contextualSuggestionUi={atMentionAutocomplete.ui}
            hideSideSlashCommand={isSideConversation}
            isHomeMenu={externalFooterVariant === "home"}
            skillSuggestions={{
              autocomplete: skillMentionAutocomplete,
              cwd: resolvedCwd,
              hostId: currentLocalExecutionHostId,
              roots: suggestionRoots,
            }}
          />
          {isAutoSingleLine ? (
            <span
              ref={setSingleLineTextMeasureRef}
              className="text-size-chat pointer-events-none invisible absolute h-0 w-max max-w-none overflow-hidden whitespace-pre"
              aria-hidden
            >
              {hasText}
            </span>
          ) : null}
          <AboveComposerSuggestionActions
            hideArtifactPluginSuggestions={hideArtifactPluginSuggestions}
            showPlanKeywordSuggestion={showPlanKeywordSuggestion}
          />
          <ComposerContextFilesWatcher
            hostId={currentLocalExecutionHostId}
            roots={suggestionRoots}
          />
          {hasApprovalSurface ? (
            <div
              className={clsx("relative flex flex-col gap-2", surfaceClassName)}
            >
              {hasFirstApproval && firstApproval != null ? (
                <PendingRequestItemPanel
                  key={
                    firstApproval.pendingRequest.item.approvalRequestId ??
                    firstApproval.pendingRequest.item.callId
                  }
                  approvalQuestionActor={
                    <span className="font-medium text-token-foreground">
                      {firstApproval.mentionLabel}
                    </span>
                  }
                  conversationId={firstApproval.conversationId}
                  hostId={firstApprovalHostId}
                  pendingRequest={firstApproval.pendingRequest}
                  onSubmitLocalFollowup={(prompt: unknown, mode: unknown) =>
                    void submitFollowUpApproval(
                      firstApproval.conversationId,
                      prompt,
                      mode,
                    )
                  }
                />
              ) : null}
              {hasPendingApproval && pendingApproval != null ? (
                <PendingRequestItemPanel
                  key={pendingApprovalKey}
                  conversationId={activeConversationId}
                  hostId={mcpManagerHostId}
                  pendingRequest={pendingApproval}
                  onSubmitLocalFollowup={submitLocalApproval}
                />
              ) : null}
            </div>
          ) : (
            <Composer
              className={surfaceClassName}
              externalFooterVariant={externalFooterVariant}
              hasDropTargetPortal={hasDropTargetPortal}
              isDragActive={isDragActive}
              isSubmitting={isSubmitting}
              layout={inputLayout}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              showShiftOverlay={showShiftOverlay}
            >
              <Composer.Body>
                {isSingleLine ? null : (
                  <Composer.Attachments
                    ref={attachmentsContainerRef}
                    hasVisibleAttachments={hasVisibleAttachments}
                    spacing={inputSpacing}
                  >
                    <ComposerAttachmentPills
                      imageAttachments={visibleImageAttachments}
                      imageComments={imageCommentDraftComments}
                      pendingAppshotCaptures={pendingCaptures}
                      fileAttachments={fileAttachments}
                      pastedTextAttachments={pastedTextAttachments}
                      pendingFileAttachments={pendingFileAttachments}
                      pendingPastedTextAttachments={
                        pendingPastedTextAttachments
                      }
                      commentAttachments={commentAttachments}
                      mcpAppModelContextAttachments={
                        mcpAppModelContextAttachments
                      }
                      selectedTextAttachments={selectedTextAttachments}
                      chromeExtensionPageSelection={extensionPageSelection}
                      pullRequestChecks={pullRequestChecks}
                      pullRequestMergeConflict={pullRequestMergeConflict}
                      onRemoveImage={handleRemoveImage}
                      onRemoveAppshotContext={handleRemoveAppshotContext}
                      onRemoveFileAttachment={handleRemoveFileAttachment}
                      onRemovePastedTextAttachment={
                        handleRemovePastedTextAttachment
                      }
                      onShowPastedTextInTextField={(id: unknown) =>
                        void handleShowPastedTextInTextField(id)
                      }
                      onRemovePendingFileAttachment={
                        handleRemovePendingFileAttachment
                      }
                      onRemovePendingPastedTextAttachment={
                        handleRemovePendingPastedTextAttachment
                      }
                      onRemoveFile={handleRemoveFile}
                      onOpenFile={(descriptor: unknown, hostId?: string) =>
                        openComposerReferencedFile(
                          descriptor,
                          hostId ?? executionHostId,
                          {
                            cwd: gitRepoRootForCwd,
                            openFile: openFile.mutate,
                          },
                        )
                      }
                      addedFiles={addedFiles}
                      onRemoveAllPullRequestChecks={() =>
                        setComposerStateField("pullRequestChecks", [])
                      }
                      onRemovePullRequestMergeConflict={() =>
                        setComposerStateField("pullRequestMergeConflict", null)
                      }
                      onRemoveAllBrowserCommentAttachments={() =>
                        setComments(
                          splitCommentAttachmentsBySurface(commentAttachments)
                            .browser,
                        )
                      }
                      onRemoveAllImageComments={() =>
                        removeAllImageComments(scope)
                      }
                      onRemoveAllMcpAppModelContextAttachments={() =>
                        setComposerStateField(
                          "mcpAppModelContextAttachments",
                          [],
                        )
                      }
                      onRemoveAllSelectedTextAttachments={() =>
                        setSelectedTextAttachments([])
                      }
                      priorConversation={priorConversation}
                      onRemovePriorConversation={() =>
                        setPriorConversation(null)
                      }
                      cwd={gitRepoRootForCwd}
                      hostId={currentLocalExecutionHostId}
                      fileAttachmentHostId={executionHostId}
                    />
                  </Composer.Attachments>
                )}
                <ComposerFooterControls
                  addContextButton={addContextButton}
                  composerMode={composerMode}
                  composerInput={composerInput}
                  executionTargetHostId={executionHostId}
                  isSingleLineLayout={isSingleLine}
                  hotkeyWindowHomeFooterControls={
                    hotkeyWindowHomeFooterControls
                  }
                  hasMessageContent={hasMessageContent}
                  permissionsHostId={permissionsHostId}
                  permissionsCwdOverride={permissionsCwdOverride}
                  submitButtonMode={submitButtonMode}
                  isStopTurnConfirmationVisible={isStopTurnConfirmationVisible}
                  isResponseInProgress={isResponseInProgress}
                  isQueueingEnabled={isQueueingEnabled}
                  isSubmitting={isSubmitting}
                  isStopping={isStopping}
                  onStop={handleStop}
                  emptySubmitTooltipNonce={emptySubmitTooltipNonce}
                  handleSubmit={(options: Record<string, unknown>) =>
                    void submit({ ...options, focusComposerAfterSubmit: true })
                  }
                  voiceControls={voiceControls}
                />
                {!hasApprovalSurface ? (
                  <SelectedTextPortal electron>
                    <AppshotCaptureControls
                      executionTargetHostId={executionHostId}
                      getAnimationDestinationFrame={
                        getAnimationDestinationFrame
                      }
                      getAttachmentGen={() => attachmentGenRef.current}
                      onCaptureAnimationDuration={
                        handleCaptureAnimationDuration
                      }
                      onCaptureSettled={handleCaptureSettled}
                      onCaptureStarted={handleCaptureStarted}
                      onAddAppshotContext={(
                        context: unknown,
                        index?: number,
                      ) => {
                        const at = handleCaptureAttached(index ?? null);
                        setAppshotContexts((prev: unknown[]) => [
                          ...prev.slice(0, at),
                          context,
                          ...prev.slice(at),
                        ]);
                      }}
                      composerInput={composerController.view.dom}
                    />
                  </SelectedTextPortal>
                ) : null}
                {scope.value.kind === "new" ? null : (
                  <SelectedTextAction
                    onAddSelectedText={handleAddSelectedText}
                    onOpenSideChat={selectedTextOpenSideChat}
                  />
                )}
              </Composer.Body>
            </Composer>
          )}
        </div>
        {composerLayoutMode === "multiline" ? (
          <Composer.ExternalFooterSlot
            isVisible={showFooter}
            variant={externalFooterVariant}
          >
            <ComposerExternalFooter {...externalFooterProps} />
          </Composer.ExternalFooterSlot>
        ) : null}
        {belowComposerContent?.({
          canUseTemplateAttachments: composerMode !== "cloud" && !isSubmitting,
          onAddFileAssetAttachment: addFileAssetAttachment,
        })}
        <GoalReplacementConfirmationDialog
          confirmation={goalReplacementConfirmation}
          onClose={cancelGoalReplacement}
          onConfirm={confirmGoalReplacement}
        />
        <GoalResumePromptDialog
          goal={pendingThreadGoal}
          onCancel={() => cancelThreadGoal(scope, activeConversationId)}
          onResume={() => resumeThreadGoal(scope, activeConversationId)}
        />
        <BlockedSubmitDialog
          open={false}
          onOpenChange={setLockedLayout}
          message={undefined}
        />
      </div>
    </>
  );
}
