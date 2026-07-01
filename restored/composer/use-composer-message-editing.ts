// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Editing / deleting / send-now handling for queued follow-up messages. Editing a
// queued message removes it from the queue, restores its full attachment context
// into the composer, and remembers its position so a re-submit is re-inserted in
// place. Also exposes the id of the message currently being edited.
import { useState } from "react";

import {
  PASTED_TEXT_CHARACTER_THRESHOLD,
  cloneComposerAttachmentList,
  collectGeneratedPastedTextPaths,
  composerPastedTextAttachmentsAtom,
  composerScope,
  discardMessageAttachments,
  discardPastedTextAttachments,
  hydratePastedTextAttachments,
  isPromptDraftTextValue,
  reportComposerMessageSendResult,
  sendQueuedMessageNow,
  setComposerScopedField,
  useAtomValue,
  useComposerEditorController,
  useScopeStore,
} from "../boundaries/onboarding-commons-externals.facade";

interface QueuedMessageContext {
  fileAttachments: Array<{ path: string }>;
  pastedTextAttachments?: unknown[];
  generatedPastedTextAttachmentPaths?: unknown;
  imageAttachments?: unknown[];
  imageCommentDraft?: unknown;
  appshotContexts?: unknown[];
  addedFiles?: unknown[];
  commentAttachments?: unknown[];
  mcpAppModelContextAttachments?: unknown[];
  selectedTextAttachments?: unknown[];
  pullRequestChecks?: unknown[];
  pullRequestMergeConflict?: unknown;
  priorConversation?: unknown;
}

interface QueuedMessage {
  id: string;
  text: string;
  context: QueuedMessageContext;
}

interface QueuedFollowUps {
  messages: QueuedMessage[];
  actions: {
    remove: (messageId: string) => void;
    reorder: (orderedIds: string[]) => void;
    update: (...args: unknown[]) => unknown;
  };
}

interface EditingMessagePosition {
  messageId: string;
  previousMessageId: string | null;
  nextMessageId: string | null;
}

/** Derive pasted-text attachment descriptors for generated file attachments. */
function derivePastedTextAttachmentsFromFiles(
  fileAttachments: Array<{ path: string }>,
  generatedPaths: Set<string>,
  hostId: string,
): unknown[] {
  return fileAttachments
    .filter((item) => generatedPaths.has(item.path))
    .map((item) => ({
      characterCount: PASTED_TEXT_CHARACTER_THRESHOLD + 1,
      file: item,
      hostId,
      preview: "",
    }));
}

export interface UseComposerMessageEditingInput {
  conversationId: string | null;
  executionHostId: string;
  focusComposer: () => void;
  incrementAttachmentGeneration: () => void;
  onSubmitLocal: (...args: unknown[]) => unknown;
  queuedFollowUps: QueuedFollowUps;
  remoteSshMessageAnalyticsContext: unknown;
  setComments: (comments: unknown[]) => void;
  setPriorConversation: (priorConversation: unknown) => void;
}

interface MessageEditingActionsInput extends UseComposerMessageEditingInput {
  editingMessagePosition: EditingMessagePosition | null;
  pastedTextAttachments: unknown[];
  setComposerStateField: (field: string, value: unknown) => void;
  setEditingMessagePosition: (position: EditingMessagePosition | null) => void;
  setPromptText: (text: unknown) => void;
  setText: (text: string) => void;
}

export interface ComposerMessageEditingActions {
  handleDeleteMessage: (messageId: string) => void;
  handleEditMessage: (messageId: string) => void;
  handleEditedMessageSubmitted: (messageId: string | null) => void;
  handleSendNowMessage: (messageId: string) => void;
}

function buildComposerMessageEditingActions({
  conversationId,
  editingMessagePosition,
  executionHostId,
  focusComposer,
  incrementAttachmentGeneration,
  onSubmitLocal,
  pastedTextAttachments,
  queuedFollowUps,
  remoteSshMessageAnalyticsContext,
  setComments,
  setComposerStateField,
  setEditingMessagePosition,
  setPromptText,
  setPriorConversation,
  setText,
}: MessageEditingActionsInput): ComposerMessageEditingActions {
  const queuedMessages = queuedFollowUps.messages;
  const removeQueuedMessage = queuedFollowUps.actions.remove;
  const reorderQueuedMessages = queuedFollowUps.actions.reorder;
  const updateQueuedMessage = queuedFollowUps.actions.update;

  return {
    handleDeleteMessage: (messageId) => {
      const message = queuedMessages.find((item) => item.id === messageId);
      if (message != null) {
        discardMessageAttachments(
          executionHostId,
          message.context.fileAttachments,
          message.context.pastedTextAttachments ?? [],
        );
      }
      removeQueuedMessage(messageId);
    },
    handleEditMessage: (messageId) => {
      const index = queuedMessages.findIndex((item) => item.id === messageId);
      const message = queuedMessages[index];
      if (message == null) return;
      incrementAttachmentGeneration();
      discardPastedTextAttachments(executionHostId, pastedTextAttachments);
      removeQueuedMessage(messageId);
      setEditingMessagePosition({
        messageId,
        previousMessageId: queuedMessages[index - 1]?.id ?? null,
        nextMessageId: queuedMessages[index + 1]?.id ?? null,
      });
      if (isPromptDraftTextValue(message.text)) setPromptText(message.text);
      else setText(message.text);
      const generatedPaths = new Set<string>(
        collectGeneratedPastedTextPaths(
          message.context.fileAttachments,
          message.context.generatedPastedTextAttachmentPaths,
        ),
      );
      const restoredPastedTextAttachments =
        message.context.pastedTextAttachments ??
        derivePastedTextAttachmentsFromFiles(
          message.context.fileAttachments,
          generatedPaths,
          executionHostId,
        );
      setComposerStateField(
        "imageAttachments",
        message.context.imageAttachments,
      );
      setComposerStateField(
        "imageCommentDraft",
        message.context.imageCommentDraft ?? null,
      );
      setComposerStateField(
        "appshotContexts",
        message.context.appshotContexts ?? [],
      );
      setComposerStateField(
        "fileAttachments",
        cloneComposerAttachmentList(
          message.context.fileAttachments.filter(
            (item) => !generatedPaths.has(item.path),
          ),
        ),
      );
      setComposerStateField(
        "pastedTextAttachments",
        hydratePastedTextAttachments(
          restoredPastedTextAttachments,
          executionHostId,
        ),
      );
      setComposerStateField(
        "addedFiles",
        cloneComposerAttachmentList(message.context.addedFiles),
      );
      setComments(message.context.commentAttachments ?? []);
      setComposerStateField(
        "mcpAppModelContextAttachments",
        message.context.mcpAppModelContextAttachments ?? [],
      );
      setComposerStateField(
        "selectedTextAttachments",
        message.context.selectedTextAttachments ?? [],
      );
      setComposerStateField(
        "pullRequestChecks",
        message.context.pullRequestChecks ?? [],
      );
      setComposerStateField(
        "pullRequestMergeConflict",
        message.context.pullRequestMergeConflict ?? null,
      );
      setPriorConversation(message.context.priorConversation ?? null);
      focusComposer();
    },
    handleEditedMessageSubmitted: (submittedMessageId) => {
      if (editingMessagePosition == null) return;
      if (submittedMessageId != null) {
        const orderedIds = queuedMessages
          .map((item) => item.id)
          .filter((id) => id !== submittedMessageId);
        const nextIndex =
          editingMessagePosition.nextMessageId == null
            ? -1
            : orderedIds.indexOf(editingMessagePosition.nextMessageId);
        const previousIndex =
          editingMessagePosition.previousMessageId == null
            ? -1
            : orderedIds.indexOf(editingMessagePosition.previousMessageId);
        let insertIndex = orderedIds.length;
        if (nextIndex === -1) {
          if (previousIndex !== -1) insertIndex = previousIndex + 1;
        } else {
          insertIndex = nextIndex;
        }
        orderedIds.splice(insertIndex, 0, submittedMessageId);
        reorderQueuedMessages(orderedIds);
      }
      setEditingMessagePosition(null);
    },
    handleSendNowMessage: (messageId) => {
      sendQueuedMessageNow({
        conversationId,
        executionHostId,
        messageId,
        queuedMessages,
        removeQueuedMessage,
        updateQueuedMessage,
        onSendResult: (result: unknown, sendResult: { turnId?: string }) => {
          reportComposerMessageSendResult(
            remoteSshMessageAnalyticsContext,
            result,
            { turnId: sendResult?.turnId },
          );
        },
        onSubmitLocal,
      });
    },
  };
}

export interface ComposerMessageEditing extends ComposerMessageEditingActions {
  editingMessageId: string | null;
}

export function useComposerMessageEditing({
  conversationId,
  executionHostId,
  focusComposer,
  incrementAttachmentGeneration,
  onSubmitLocal,
  queuedFollowUps,
  remoteSshMessageAnalyticsContext,
  setComments,
  setPriorConversation,
}: UseComposerMessageEditingInput): ComposerMessageEditing {
  const scope = useScopeStore(composerScope);
  const editorController = useComposerEditorController();
  const pastedTextAttachments = useAtomValue(composerPastedTextAttachmentsAtom);
  const [editingMessagePosition, setEditingMessagePosition] =
    useState<EditingMessagePosition | null>(null);
  const editingMessageId = editingMessagePosition?.messageId ?? null;

  const setComposerStateField = (field: string, value: unknown) => {
    setComposerScopedField(scope, field, value);
  };

  const actions = buildComposerMessageEditingActions({
    conversationId,
    editingMessagePosition,
    executionHostId,
    focusComposer,
    incrementAttachmentGeneration,
    onSubmitLocal,
    pastedTextAttachments,
    queuedFollowUps,
    remoteSshMessageAnalyticsContext,
    setComments,
    setComposerStateField,
    setEditingMessagePosition,
    setPromptText: (text) => {
      editorController.setPromptText(text);
    },
    setPriorConversation,
    setText: (text) => {
      editorController.setText(text);
    },
  });

  return { editingMessageId, ...actions };
}
