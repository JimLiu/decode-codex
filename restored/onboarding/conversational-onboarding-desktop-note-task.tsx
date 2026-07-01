// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversational-onboarding "leave a note on my Desktop" starter task: Desktop
// folder-access request flow, write/save phase view, the host calls that request
// the Desktop root and create the note file, and the task definition consumed by
// the conversational-onboarding task registry.
import React from "react";

import { FormattedMessage, defineMessage, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";
import {
  appScopeUnderscore as createScopedAtom,
  useAppScopeValue as useScopedSignalValue,
} from "../boundaries/app-scope";
import { FolderDuotoneBlueIcon } from "../icons/folder-duotone-blue-icon";
import { DocumentLinesIcon } from "../icons/document-lines-icon";
import {
  appDisplayName,
  Button,
  ConversationalOnboardingAccessGate,
  ConversationalOnboardingArtifactCard,
  ConversationalOnboardingPermissionRequestCard,
  conversationalOnboardingActiveTaskStateSignal,
  conversationalOnboardingAllSetSignal,
  conversationalOnboardingExecutionFailedSignal,
  conversationalOnboardingIntlAtom,
  conversationalOnboardingTaskStartedSignal,
  hostBridge,
  logger,
  motion,
  openHostPath,
  prepareConversationalOnboardingExecution,
  recordConversationalOnboardingAccessCompleted,
  recordConversationalOnboardingAccessHostUnavailable,
  recordConversationalOnboardingAccessRequestFailed,
  recordConversationalOnboardingAccessRequested,
  recordConversationalOnboardingAccessStarted,
  recordConversationalOnboardingExecutionStartFailed,
  recordConversationalOnboardingExecutionStarted,
  recordConversationalOnboardingLifecycleStartFailed,
  ShimmerText,
  useScopedStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { conversationalOnboardingTaskScope } from "./conversational-onboarding-task-scope";
import {
  getConversationalOnboardingWorkflowState,
  setConversationalOnboardingPermissionStatus,
} from "./conversational-onboarding-workflow-state";
import type {
  ConversationalOnboardingPermissionStatus,
  ConversationalOnboardingWorkflowState,
} from "./conversational-onboarding-workflow-state";
import type { ConversationalOnboardingTaskBase } from "./conversational-onboarding-task-registry";
import type { ConversationalOnboardingTaskViewContext } from "./conversational-onboarding-csv-chart-task";

type DesktopNotePhase = "writing" | "saving" | "complete";

interface ScopedStore {
  get<TValue>(signal: unknown): TValue;
  set<TValue>(signal: unknown, value: TValue): void;
}

const desktopNoteCwd = "~";
const DESKTOP_NOTE_PHASE_FADE_DELAY = 2;

const desktopNoteResultPathSignal = createScopedAtom<string | null>(
  conversationalOnboardingTaskScope,
  null,
);
const desktopNotePhaseSignal = createScopedAtom<DesktopNotePhase>(
  conversationalOnboardingTaskScope,
  "complete",
);
const desktopRootPathSignal = createScopedAtom<unknown>(
  conversationalOnboardingTaskScope,
  undefined,
);
const desktopPermissionRequestingSignal = createScopedAtom<boolean>(
  conversationalOnboardingTaskScope,
  false,
);
const desktopPermissionFailedSignal = createScopedAtom<boolean>(
  conversationalOnboardingTaskScope,
  false,
);
const desktopIntroCompleteSignal = createScopedAtom<boolean>(
  conversationalOnboardingTaskScope,
  false,
);

interface DesktopNoteTaskIconProps {
  className?: string;
}

function DesktopNoteTaskIcon({
  className,
}: DesktopNoteTaskIconProps): React.ReactElement {
  return <FolderDuotoneBlueIcon className={className} />;
}

async function createDesktopNoteFile(
  store: ScopedStore,
  parentPath: unknown,
): Promise<string> {
  const onboardingHost = hostBridge.conversationalOnboarding;
  if (onboardingHost == null) {
    throw Error("Desktop note onboarding is unavailable");
  }
  prepareConversationalOnboardingExecution(store);
  const intl = store.get<IntlShape>(conversationalOnboardingIntlAtom);
  const { path } = await onboardingHost.createDesktopNote({
    content: intl.formatMessage(
      {
        id: "electron.onboarding.conversationalOnboarding.desktopNote.content",
        defaultMessage:
          "Hello from {appName}.{paragraphBreak}You ask. I can do – now directly on your computer, too.",
        description:
          "Full content of the text file created by the conversational onboarding Desktop note task. The {appName} placeholder is the visible product name. The {paragraphBreak} placeholder inserts a blank line between the greeting and the second paragraph.",
      },
      { appName: appDisplayName, paragraphBreak: "\n\n" },
    ),
    fileStem: intl.formatMessage(
      {
        id: "electron.onboarding.conversationalOnboarding.desktopNote.filename",
        defaultMessage: "Note from {appName}",
        description:
          "Filename stem for the text file created by the conversational onboarding Desktop note task. The host adds the .txt extension and a number when needed. The {appName} placeholder is the visible product name.",
      },
      { appName: appDisplayName },
    ),
    parentPath,
  });
  return path;
}

function DesktopAccessDeclinedMessage(): React.ReactElement {
  return (
    <p>
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.desktopAccessDeclined"
        defaultMessage="No problem — you can allow Desktop access later. You’re all set."
        description="Closing message when Desktop access is declined during conversational onboarding"
      />
    </p>
  );
}

interface DesktopExecutionPhaseViewProps {
  completion: string | null;
  phase: DesktopNotePhase;
  renderCompletion: (completion: string) => React.ReactElement;
  onPhaseComplete: () => void;
}

function DesktopExecutionPhaseView({
  completion,
  phase,
  renderCompletion,
  onPhaseComplete,
}: DesktopExecutionPhaseViewProps): React.ReactElement {
  const isWriting = phase === "writing";
  const status = (
    <ShimmerText>
      {isWriting ? (
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.writingNote"
          defaultMessage="Writing note"
          description="Animated status shown while the Desktop onboarding note is written"
        />
      ) : (
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.savingNoteToDesktop"
          defaultMessage="Saving to Desktop"
          description="Animated status shown while the onboarding note is saved to the Desktop"
        />
      )}
    </ShimmerText>
  );

  if (phase === "complete") {
    if (completion != null) return renderCompletion(completion);
    return (
      <div role="status" className="text-lg leading-6">
        {status}
      </div>
    );
  }

  return (
    <motion.div
      key={phase}
      animate={{ opacity: 0 }}
      role="status"
      className="text-lg leading-6"
      initial={{ opacity: 1 }}
      transition={{ delay: DESKTOP_NOTE_PHASE_FADE_DELAY, duration: 0.2 }}
      onAnimationComplete={onPhaseComplete}
    >
      {status}
    </motion.div>
  );
}

interface DesktopPermissionRequestCardProps {
  isRequesting: boolean;
  onAllow: () => void;
  onDismiss: () => void;
}

function DesktopPermissionRequestCard({
  isRequesting,
  onAllow,
  onDismiss,
}: DesktopPermissionRequestCardProps): React.ReactElement {
  const actions = (
    <>
      <Button
        color="outline"
        disabled={isRequesting}
        size="medium"
        onClick={onDismiss}
      >
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.folderPermissionNotNow"
          defaultMessage="Not now"
          description="Button that declines Desktop access during conversational onboarding"
        />
      </Button>
      <Button
        color="primary"
        disabled={isRequesting}
        size="medium"
        onClick={onAllow}
      >
        {isRequesting ? (
          <FormattedMessage
            id="electron.onboarding.conversationalOnboarding.folderPermissionRequesting"
            defaultMessage="Requesting…"
            description="Button label while conversational onboarding requests Desktop access"
          />
        ) : (
          <FormattedMessage
            id="electron.onboarding.conversationalOnboarding.folderPermissionAllow"
            defaultMessage="Allow access"
            description="Button that grants Desktop access during conversational onboarding"
          />
        )}
      </Button>
    </>
  );
  return (
    <ConversationalOnboardingPermissionRequestCard
      actions={actions}
      icon={<FolderDuotoneBlueIcon className="size-6" aria-hidden />}
      subtitle={
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.folderAccessRequested"
          defaultMessage="Folder access requested"
          description="Subtitle for the conversational onboarding Desktop access request"
        />
      }
      title={
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.desktopFolderName"
          defaultMessage="Desktop"
          description="Name of the Desktop folder requested during conversational onboarding"
        />
      }
    />
  );
}

interface DesktopNoteTaskViewProps {
  context: ConversationalOnboardingTaskViewContext;
  onChooseAnotherTask: () => void;
  onRetryTask: () => void;
}

function DesktopNoteTaskView({
  context,
  onChooseAnotherTask,
  onRetryTask,
}: DesktopNoteTaskViewProps): React.ReactElement {
  const store = useScopedStore(conversationalOnboardingTaskScope);
  const intl = useIntl();
  const workflowState =
    useScopedSignalValue<ConversationalOnboardingWorkflowState | null>(
      conversationalOnboardingActiveTaskStateSignal,
    ) ?? getConversationalOnboardingWorkflowState(store);
  const completion = useScopedSignalValue<string | null>(
    desktopNoteResultPathSignal,
  );
  const phase = useScopedSignalValue<DesktopNotePhase>(desktopNotePhaseSignal);
  const started = useScopedSignalValue<boolean>(
    conversationalOnboardingTaskStartedSignal,
  );
  const executionFailed = useScopedSignalValue<boolean>(
    conversationalOnboardingExecutionFailedSignal,
  );
  const isRequesting = useScopedSignalValue<boolean>(
    desktopPermissionRequestingSignal,
  );
  const requestFailed = useScopedSignalValue<boolean>(
    desktopPermissionFailedSignal,
  );
  const showRequest = useScopedSignalValue<boolean>(desktopIntroCompleteSignal);

  const permissionStatus: ConversationalOnboardingPermissionStatus =
    workflowState.permissionStatus === "not-requested"
      ? "pending"
      : workflowState.permissionStatus;

  const accessGate = (
    <ConversationalOnboardingAccessGate
      declinedMessage={<DesktopAccessDeclinedMessage />}
      executionFailed={executionFailed}
      intro={intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.permissionIntro",
        defaultMessage:
          "I can do that, but I’ll need access to your Desktop to put the note there. Mind allowing that?",
        description:
          "Explanation before the conversational onboarding Desktop permission request",
      })}
      permissionStatus={permissionStatus}
      request={
        <DesktopPermissionRequestCard
          isRequesting={isRequesting}
          onAllow={() => requestDesktopAccess(store)}
          onDismiss={onChooseAnotherTask}
        />
      }
      requestError={
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.folderAccessFailed"
          defaultMessage="I couldn’t access your Desktop. Check your system privacy settings, then try again."
          description="Error shown when the system denies Desktop access during conversational onboarding"
        />
      }
      requestFailed={requestFailed}
      showRequest={showRequest}
      onIntroComplete={() => store.set(desktopIntroCompleteSignal, true)}
      onRetryTask={onRetryTask}
    />
  );

  if (!started || executionFailed) return accessGate;

  const renderCompletion = (completionPath: string) => (
    <ConversationalOnboardingArtifactCard
      key={completionPath}
      completionMessage={intl.formatMessage(
        {
          id: "electron.onboarding.conversationalOnboarding.documentTaskCompleted",
          defaultMessage:
            "And just like that, we did something on your computer.{paragraphBreak}You’re all set.",
          description:
            "Final message after ChatGPT creates a document during conversational onboarding",
        },
        { paragraphBreak: "\n\n" },
      )}
      filePath={completionPath}
      icon={<DocumentLinesIcon aria-hidden className="size-6" />}
      introMessage={intl.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.desktopArtifactCompleted",
        defaultMessage:
          "Done. I dropped this note on your Desktop. Try opening it.",
        description:
          "Completion message after Codex creates the conversational onboarding Desktop note",
      })}
      typeLabel={
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.documentArtifact"
          defaultMessage="Document"
          description="File type label for the text document created during conversational onboarding"
        />
      }
      onOpen={() => {
        openHostPath({
          path: completionPath,
          cwd: desktopNoteCwd,
          hostId: context.hostId,
          target: "systemDefault",
        });
      }}
      onReveal={() => {
        openHostPath({
          path: completionPath,
          cwd: desktopNoteCwd,
          hostId: context.hostId,
          target: "fileManager",
        });
      }}
    />
  );

  const onPhaseComplete = () => {
    const nextPhase =
      store.get<DesktopNotePhase>(desktopNotePhaseSignal) === "writing"
        ? "saving"
        : "complete";
    store.set(desktopNotePhaseSignal, nextPhase);
    if (
      nextPhase === "complete" &&
      store.get<string | null>(desktopNoteResultPathSignal) != null
    ) {
      store.set(conversationalOnboardingAllSetSignal, true);
    }
  };

  return (
    <>
      {accessGate}
      <DesktopExecutionPhaseView
        completion={completion}
        phase={phase}
        renderCompletion={renderCompletion}
        onPhaseComplete={onPhaseComplete}
      />
    </>
  );
}

async function requestDesktopAccess(store: ScopedStore): Promise<void> {
  if (hostBridge.conversationalOnboarding == null) {
    store.set(desktopPermissionFailedSignal, true);
    recordConversationalOnboardingAccessHostUnavailable(store, "desktop_note");
    return;
  }
  store.set(desktopPermissionRequestingSignal, true);
  store.set(desktopPermissionFailedSignal, false);
  setConversationalOnboardingPermissionStatus(store, "pending");
  recordConversationalOnboardingAccessRequested(store, "desktop_note");
  try {
    const rootPath =
      await hostBridge.conversationalOnboarding.requestDesktopRoot();
    const state = getConversationalOnboardingWorkflowState(store);
    if (
      state.selectedTask !== "desktop_note" ||
      state.permissionStatus !== "pending"
    ) {
      return;
    }
    store.set(desktopRootPathSignal, rootPath);
    setConversationalOnboardingPermissionStatus(store, "allowed");
    recordConversationalOnboardingAccessCompleted(store, "desktop_note");
    createAndSaveDesktopNote(store, rootPath);
  } catch {
    const state = getConversationalOnboardingWorkflowState(store);
    if (
      state.selectedTask === "desktop_note" &&
      state.permissionStatus === "pending"
    ) {
      recordConversationalOnboardingAccessRequestFailed(store, "desktop_note");
      store.set(desktopPermissionFailedSignal, true);
    }
  } finally {
    if (
      getConversationalOnboardingWorkflowState(store).selectedTask ===
      "desktop_note"
    ) {
      store.set(desktopPermissionRequestingSignal, false);
    }
  }
}

async function createAndSaveDesktopNote(
  store: ScopedStore,
  parentPath: unknown,
): Promise<void> {
  store.set(conversationalOnboardingTaskStartedSignal, true);
  store.set(conversationalOnboardingExecutionFailedSignal, false);
  recordConversationalOnboardingExecutionStarted(store, "desktop_note");
  try {
    const path = await createDesktopNoteFile(store, parentPath);
    store.set(desktopNoteResultPathSignal, path);
    if (store.get<DesktopNotePhase>(desktopNotePhaseSignal) === "complete") {
      store.set(conversationalOnboardingAllSetSignal, true);
    }
  } catch (error) {
    logger.error("Failed to create conversational onboarding Desktop note", {
      safe: {},
      sensitive: { error },
    });
    recordConversationalOnboardingExecutionStartFailed(store, "desktop_note");
    recordConversationalOnboardingLifecycleStartFailed(store, "desktop_note");
    store.set(conversationalOnboardingExecutionFailedSignal, true);
  }
}

function resetDesktopNoteTask(store: ScopedStore): void {
  store.set(desktopNoteResultPathSignal, null);
  store.set(desktopNotePhaseSignal, "complete");
  store.set(desktopRootPathSignal, undefined);
  store.set(desktopPermissionRequestingSignal, false);
  store.set(desktopPermissionFailedSignal, false);
  store.set(desktopIntroCompleteSignal, false);
}

export const desktopNoteTask: ConversationalOnboardingTaskBase = {
  getDeclinedRetryPrompt(intl: IntlShape) {
    return intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.desktopTaskDeclinedRetry",
      defaultMessage:
        "Got it. I won’t leave a note on your Desktop. Want to try another quick example?",
      description:
        "Message shown after declining the Desktop note conversational onboarding task",
    });
  },
  option: {
    Icon: DesktopNoteTaskIcon,
    label: defineMessage({
      id: "electron.onboarding.conversationalOnboarding.taskPicker.desktopNote",
      defaultMessage: "Leave a note on my Desktop",
      description:
        "Conversational onboarding starter task that creates a Desktop note",
    }),
  },
  prepare(store: ScopedStore) {
    store.set(desktopNotePhaseSignal, "writing");
    recordConversationalOnboardingAccessStarted(store, "desktop_note");
  },
  reset: resetDesktopNoteTask,
  retry(store: ScopedStore) {
    store.set(desktopNoteResultPathSignal, null);
    store.set(desktopNotePhaseSignal, "writing");
    store.set(conversationalOnboardingAllSetSignal, false);
    store.set(conversationalOnboardingExecutionFailedSignal, false);
    const rootPath = store.get<unknown>(desktopRootPathSignal);
    if (rootPath == null) {
      requestDesktopAccess(store);
    } else {
      createAndSaveDesktopNote(store, rootPath);
    }
  },
  View: DesktopNoteTaskView,
};
