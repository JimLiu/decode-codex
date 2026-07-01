// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Follow-up confirmation dialog wrapper for MCP app frames.

import {
  FollowUpConfirmationDialog,
  useComposerMessageSetter,
} from "../boundaries/onboarding-commons-externals.facade";

export interface McpAppFollowUpConfirmationProps {
  conversationId: string;
  onCancel: () => void;
  onConfirm: (result: unknown) => void;
  prompt: string;
  title?: string;
}

export function McpAppFollowUpConfirmation({
  conversationId,
  onCancel,
  onConfirm,
  prompt,
  title,
}: McpAppFollowUpConfirmationProps) {
  const { enqueue } = useComposerMessageSetter(conversationId).actions;
  const handleConfirmCurrentThread = (text: string) => {
    onConfirm({ enqueue, prompt: text, type: "current-thread" });
  };
  return (
    <FollowUpConfirmationDialog
      confirmation={{
        onCancel,
        onConfirmCurrentThread: handleConfirmCurrentThread,
        onConfirmNewThread: onConfirm,
        prompt,
        title,
      }}
    />
  );
}
