// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import {
  browserTabSnapshotStore,
  focusSidePanelLayout,
} from "../boundaries/onboarding-commons-externals.facade";
import { appendUserMessageToConversation } from "../conversations/local-conversation-messaging";

export {
  resolveCloudTaskType,
  buildCloudSubmitTask,
} from "./submit-cloud-task";
export type { BuildCloudSubmitTaskArgs } from "./submit-cloud-task";

interface AppScope {
  get(atom: unknown, key?: unknown): unknown;
  set(atom: unknown, key: unknown, updater: unknown): void;
}

interface PerformComposerSubmitOptions {
  followUpSubmitAction?: unknown;
  confirmedGoalReplacementDraft?: unknown;
  focusComposerAfterSubmit?: boolean;
  persistedPromptRawOverride?: string;
  promptRawOverride?: string;
  clear?: unknown;
  skipGoalReplacementConfirmation?: boolean;
  skipGoalSubmit?: boolean;
}

interface PrepareGoalSubmitArgs {
  confirmedGoalReplacementDraft: unknown;
  focusComposerAfterSubmit: boolean;
  followUpSubmitAction: unknown;
  promptRaw: string;
  skipGoalReplacementConfirmation: boolean;
}

export interface PerformComposerSubmitArgs {
  appendPromptToHistory(text: string): void;
  buildLocalContextForPrompt(text: string): Promise<unknown>;
  clearComposerUi(): void;
  clearStopTurnConfirmation(): void;
  composerController: { getText(): string; getPersistedText(): string };
  conversationId: string;
  defaultFollowUpSubmitAction: unknown;
  focusComposer(): void;
  followUp: unknown;
  handleEditedQueuedMessageSubmitted(): void;
  handleSideChatOpenError(error: unknown): void;
  handleSubmitError(error: unknown): void;
  hostId: string;
  invalidateRateLimit(): void;
  isElectron: boolean;
  isLocalModeOnRemoteHost: boolean;
  isResponseInProgress: boolean;
  isWorkspaceStatusUnavailable: boolean;
  logMessageSent(context: unknown): void;
  maybeSendQueuedSteerMessage(action: unknown): boolean;
  mentionedThreadIds: string[];
  onAccepted?(): void;
  openSideChatFromComposer(prompt: string): Promise<void>;
  options?: PerformComposerSubmitOptions;
  pause: { maybeShow(): boolean };
  prepareGoalSubmit(args: PrepareGoalSubmitArgs): Promise<unknown>;
  prompts: unknown;
  queuedMessageActions: unknown;
  remoteSshMessageAnalyticsContext: unknown;
  resetHistorySelection(): void;
  resolvedCwd: string;
  setIsSubmitting(value: boolean): void;
  shouldRestrictRemoteHostImageSize: boolean;
  showBlockedSubmitDialog(): void;
  showEmptySubmitTooltip(): void;
  submitBlockReason: string | null | undefined;
  submitButtonMode: "submit" | "stop";
  submitTarget: unknown;
}

export async function performComposerSubmit(
  args: PerformComposerSubmitArgs,
): Promise<void> {
  const {
    clearStopTurnConfirmation,
    composerController,
    handleSubmitError,
    maybeSendQueuedSteerMessage,
    options = {},
    pause,
    prepareGoalSubmit,
    setIsSubmitting,
    showBlockedSubmitDialog,
    showEmptySubmitTooltip,
    submitBlockReason,
  } = args;
  const {
    followUpSubmitAction = args.defaultFollowUpSubmitAction,
    confirmedGoalReplacementDraft,
    focusComposerAfterSubmit = false,
    promptRawOverride,
    skipGoalReplacementConfirmation = false,
    skipGoalSubmit = false,
  } = options;

  clearStopTurnConfirmation();

  if (submitBlockReason != null) {
    if (submitBlockReason === "empty-message") {
      if (maybeSendQueuedSteerMessage(followUpSubmitAction)) return;
      showEmptySubmitTooltip();
    } else {
      showBlockedSubmitDialog();
    }
    return;
  }

  if (options.clear == null && pause.maybeShow()) return;
  if (skipGoalSubmit) return;

  setIsSubmitting(true);
  try {
    await prepareGoalSubmit({
      confirmedGoalReplacementDraft,
      focusComposerAfterSubmit,
      followUpSubmitAction,
      promptRaw: promptRawOverride ?? composerController.getText(),
      skipGoalReplacementConfirmation,
    });
  } catch (submitError) {
    handleSubmitError(submitError);
  } finally {
    setIsSubmitting(false);
  }
}

export function submitDirectComment(
  scope: AppScope,
  conversationId: string | null | undefined,
  browserTabId: string,
): unknown {
  if (conversationId == null) return undefined;
  return (browserTabSnapshotStore as any)?.getForConversation?.(
    scope,
    conversationId,
    browserTabId,
  );
}

export interface OpenSideChatOptions {
  scope: AppScope;
  prompt?: string;
  onCreateSideConversation(): Promise<string | null | undefined>;
  intl?: unknown;
}

export async function openSideChat(
  options: OpenSideChatOptions,
): Promise<void> {
  const { scope, prompt = "", onCreateSideConversation } = options;
  const trimmedPrompt = prompt.trim();

  for (const placement of ["right", "bottom"] as const) {
    const panelState: any = (focusSidePanelLayout as any)?.(scope, placement);
    const activeTab: { tabId?: string } | null = panelState?.activeTab ?? null;
    const tabs: Array<{ tabId: string }> = panelState?.tabs ?? [];
    const sideChatTab =
      activeTab?.tabId?.startsWith("sidechat:") === true
        ? activeTab
        : (tabs.find((tab) => tab.tabId.startsWith("sidechat:")) ?? null);

    if (sideChatTab?.tabId == null) continue;
    const existingConversationId = sideChatTab.tabId.slice("sidechat:".length);
    if (trimmedPrompt.length > 0) {
      appendUserMessageToConversation(
        scope,
        existingConversationId,
        trimmedPrompt,
      );
    }
    return;
  }

  const newConversationId = await onCreateSideConversation();
  if (newConversationId != null && trimmedPrompt.length > 0) {
    appendUserMessageToConversation(scope, newConversationId, trimmedPrompt);
  }
}
