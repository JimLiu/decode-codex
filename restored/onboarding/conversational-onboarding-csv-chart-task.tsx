// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversational-onboarding "turn this example CSV into a chart" starter task:
// the bundled-CSV selection attachment, task/phase view components, the host
// call that renders the sample chart PNG, and the task definition consumed by
// the conversational-onboarding task registry.
import React from "react";

import { FormattedMessage, defineMessage, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";
import {
  appScopeUnderscore as createScopedAtom,
  useAppScopeValue as useScopedSignalValue,
} from "../boundaries/app-scope";
import {
  Button,
  ConversationalOnboardingArtifactCard,
  CsvFileDarkIcon,
  CsvFileLightIcon,
  GeneratingChartIcon,
  ReadingFileIcon,
  conversationalOnboardingAllSetSignal,
  conversationalOnboardingExecutionFailedSignal,
  conversationalOnboardingIntlAtom,
  conversationalOnboardingTaskStartedSignal,
  expandTildePath,
  getFileTypeIconForName,
  hostBridge,
  logger,
  motion,
  openHostPath,
  prepareConversationalOnboardingExecution,
  prepareProjectlessConversation,
  recordConversationalOnboardingExecutionStartFailed,
  recordConversationalOnboardingExecutionStarted,
  recordConversationalOnboardingLifecycleStartFailed,
  ShimmerText,
  toFilePreviewUrl,
  useIsDarkMode,
  useScopedStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { conversationalOnboardingTaskScope } from "./conversational-onboarding-task-scope";
import { getConversationalOnboardingWorkflowState } from "./conversational-onboarding-workflow-state";
import type { ConversationalOnboardingTaskBase } from "./conversational-onboarding-task-registry";
import { renderConversationalOnboardingSampleChartToPng } from "./conversational-onboarding-sample-chart";

type CsvExecutionPhase =
  | "reading"
  | "generating"
  | "minimum-generation-elapsed";

export interface ConversationalOnboardingTaskViewContext {
  hostId: string;
  projectRoot: unknown;
}

interface ScopedStore {
  get<TValue>(signal: unknown): TValue;
  set<TValue>(signal: unknown, value: TValue): void;
}

const csvChartCwd = expandTildePath("~");
const CSV_THINKING_FADE_DELAY = 2;
const CSV_PHASE_FADE_DELAY = 2;

const csvChartResultPathSignal = createScopedAtom<string | null>(
  conversationalOnboardingTaskScope,
  null,
);
const csvThinkingDismissedSignal = createScopedAtom<boolean>(
  conversationalOnboardingTaskScope,
  true,
);
const csvExecutionPhaseSignal = createScopedAtom<CsvExecutionPhase>(
  conversationalOnboardingTaskScope,
  "minimum-generation-elapsed",
);

function CsvChartSelectionAttachment(): React.ReactElement {
  const intl = useIntl();
  const fileStem = intl.formatMessage({
    id: "electron.onboarding.conversationalOnboarding.sampleCsv.filename",
    defaultMessage: "SnapDock Sales Orders",
    description:
      "Filename stem shown for the sample CSV attachment during conversational onboarding. The component adds the .csv extension.",
  });
  const filename = `${fileStem}.csv`;
  const FileIcon = getFileTypeIconForName(filename);
  return (
    <div className="flex w-full justify-end">
      <span className="flex items-center gap-2 rounded-3xl border border-token-border-default bg-token-main-surface-primary px-3 py-2">
        <FileIcon className="size-6" />
        {filename}
      </span>
    </div>
  );
}

interface CsvChartTaskIconProps {
  className?: string;
}

function CsvChartTaskIcon({
  className,
}: CsvChartTaskIconProps): React.ReactElement {
  const Icon = useIsDarkMode() === true ? CsvFileDarkIcon : CsvFileLightIcon;
  return <Icon className={className} />;
}

async function createConversationalOnboardingCsvChart(
  store: ScopedStore,
  csvFile: unknown,
): Promise<string> {
  const onboardingHost = hostBridge.conversationalOnboarding;
  if (onboardingHost == null)
    throw Error("CSV chart onboarding is unavailable");
  prepareConversationalOnboardingExecution(store);
  const conversation = await prepareProjectlessConversation([csvFile], {
    prompt: "",
  });
  if (conversation.projectlessOutputDirectory == null) {
    throw Error("No projectless output directory found");
  }
  const intl = store.get<IntlShape>(conversationalOnboardingIntlAtom);
  const { path } = await onboardingHost.createSampleChart({
    bytes: await renderConversationalOnboardingSampleChartToPng(intl),
    fileStem: intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.sampleChart.filename",
      defaultMessage: "SnapDock Monthly Sales Chart",
      description:
        "Filename stem for the PNG chart created from the bundled sample CSV during conversational onboarding. The host adds the .png extension. Short filename.",
    }),
    parentPath: conversation.projectlessOutputDirectory,
  });
  return path;
}

interface CsvStartErrorViewProps {
  onRetry: () => void;
}

function CsvStartErrorView({
  onRetry,
}: CsvStartErrorViewProps): React.ReactElement {
  return (
    <div className="flex items-center gap-3">
      <p>
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.startError"
          defaultMessage="Codex couldn’t start that task."
          description="Error shown when a conversational onboarding task cannot start"
        />
      </p>
      <Button color="primary" size="medium" onClick={onRetry}>
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.tryAgain"
          defaultMessage="Try again"
          description="Button that retries a conversational onboarding task"
        />
      </Button>
    </div>
  );
}

interface CsvThinkingPlaceholderProps {
  onComplete: () => void;
}

function CsvThinkingPlaceholder({
  onComplete,
}: CsvThinkingPlaceholderProps): React.ReactElement {
  return (
    <motion.div
      animate={{ opacity: 0 }}
      className="text-lg leading-6"
      initial={{ opacity: 1 }}
      transition={{ delay: CSV_THINKING_FADE_DELAY, duration: 0.2 }}
      onAnimationComplete={onComplete}
    >
      <ShimmerText>
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.csvExecutionThinking"
          defaultMessage="Thinking"
          description="Animated thinking label shown before the example CSV onboarding thread starts"
        />
      </ShimmerText>
    </motion.div>
  );
}

interface CsvExecutionPhaseViewProps {
  completion: string | null;
  phase: CsvExecutionPhase;
  renderCompletion: (completion: string) => React.ReactElement;
  onPhaseComplete: () => void;
}

function CsvExecutionPhaseView({
  completion,
  phase,
  renderCompletion,
  onPhaseComplete,
}: CsvExecutionPhaseViewProps): React.ReactElement {
  const isReading = phase === "reading";
  const PhaseIcon = isReading ? ReadingFileIcon : GeneratingChartIcon;
  const content = (
    <>
      <PhaseIcon
        aria-hidden
        className="size-6 shrink-0 text-[color-mix(in_srgb,var(--color-token-description-foreground)_55%,transparent)] dark:text-[color-mix(in_srgb,var(--color-token-description-foreground)_45%,transparent)]"
      />
      <ShimmerText>
        {isReading ? (
          <FormattedMessage
            id="electron.onboarding.conversationalOnboarding.readingCsv"
            defaultMessage="Reading CSV file"
            description="Status shown while Codex reads the example CSV during conversational onboarding"
          />
        ) : (
          <FormattedMessage
            id="electron.onboarding.conversationalOnboarding.generatingChart"
            defaultMessage="Generating chart"
            description="Status shown while Codex generates a chart from the example CSV during conversational onboarding"
          />
        )}
      </ShimmerText>
    </>
  );

  if (phase === "minimum-generation-elapsed") {
    if (completion != null) return renderCompletion(completion);
    return (
      <div role="status" className="flex items-center gap-2 text-lg leading-6">
        {content}
      </div>
    );
  }

  return (
    <motion.div
      key={phase}
      animate={{ opacity: 0 }}
      role="status"
      className="flex items-center gap-2 text-lg leading-6"
      initial={{ opacity: 1 }}
      transition={{ delay: CSV_PHASE_FADE_DELAY, duration: 0.2 }}
      onAnimationComplete={onPhaseComplete}
    >
      {content}
    </motion.div>
  );
}

interface CsvChartTaskViewProps {
  context: ConversationalOnboardingTaskViewContext;
  onRetryTask: () => void;
}

function CsvChartTaskView({
  context,
  onRetryTask,
}: CsvChartTaskViewProps): React.ReactElement | null {
  const store = useScopedStore(conversationalOnboardingTaskScope);
  const intl = useIntl();
  const resultPath = useScopedSignalValue<string | null>(
    csvChartResultPathSignal,
  );
  const thinkingDismissed = useScopedSignalValue<boolean>(
    csvThinkingDismissedSignal,
  );
  const phase = useScopedSignalValue<CsvExecutionPhase>(
    csvExecutionPhaseSignal,
  );
  const started = useScopedSignalValue<boolean>(
    conversationalOnboardingTaskStartedSignal,
  );

  if (
    useScopedSignalValue<boolean>(conversationalOnboardingExecutionFailedSignal)
  ) {
    return <CsvStartErrorView onRetry={onRetryTask} />;
  }
  if (!started) return null;
  if (!thinkingDismissed) {
    return (
      <CsvThinkingPlaceholder
        onComplete={() => store.set(csvThinkingDismissedSignal, true)}
      />
    );
  }

  const renderCompletion = (completionPath: string) => {
    const FileIcon = getFileTypeIconForName(completionPath);
    return (
      <ConversationalOnboardingArtifactCard
        key={completionPath}
        completionMessage={intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.csvTaskCompleted",
          defaultMessage:
            "That’s our first task done. I can also drop it into a presentation, organize your spreadsheets, build a report, and more. You’re all set.",
          description:
            "Final message after ChatGPT creates a chart during conversational onboarding",
        })}
        filePath={completionPath}
        icon={<FileIcon className="size-6" />}
        introMessage={intl.formatMessage({
          id: "electron.onboarding.conversationalOnboarding.csvArtifactCompleted",
          defaultMessage:
            "Done. I turned the CSV into a chart and saved it to your computer.",
          description:
            "Completion message after Codex creates a chart from the selected CSV during conversational onboarding",
        })}
        preview={
          <img
            alt={intl.formatMessage({
              id: "electron.onboarding.conversationalOnboarding.csvChartPreview",
              defaultMessage: "Preview of the chart created from your CSV",
              description:
                "Accessible description for the generated CSV chart preview during onboarding",
            })}
            className="max-h-[220px] w-fit max-w-full rounded-xl border border-token-border object-contain"
            src={toFilePreviewUrl(completionPath)}
          />
        }
        typeLabel={
          <FormattedMessage
            id="electron.onboarding.conversationalOnboarding.imageArtifact"
            defaultMessage="Image"
            description="File type label for the chart image created during conversational onboarding"
          />
        }
        onOpen={() => {
          openHostPath({
            path: completionPath,
            cwd: csvChartCwd,
            hostId: context.hostId,
            target: "systemDefault",
          });
        }}
        onReveal={() => {
          openHostPath({
            path: completionPath,
            cwd: csvChartCwd,
            hostId: context.hostId,
            target: "fileManager",
          });
        }}
      />
    );
  };

  const onPhaseComplete = () => {
    const nextPhase =
      store.get<CsvExecutionPhase>(csvExecutionPhaseSignal) === "reading"
        ? "generating"
        : "minimum-generation-elapsed";
    store.set(csvExecutionPhaseSignal, nextPhase);
    if (
      nextPhase === "minimum-generation-elapsed" &&
      store.get<string | null>(csvChartResultPathSignal) != null
    ) {
      store.set(conversationalOnboardingAllSetSignal, true);
    }
  };

  return (
    <CsvExecutionPhaseView
      completion={resultPath}
      phase={phase}
      renderCompletion={renderCompletion}
      onPhaseComplete={onPhaseComplete}
    />
  );
}

function startCsvChartTask(
  store: ScopedStore,
  _plugin: unknown,
  context: ConversationalOnboardingTaskViewContext,
): void {
  if (
    getConversationalOnboardingWorkflowState(store).selectedTask !== "csv_chart"
  ) {
    return;
  }
  store.set(conversationalOnboardingTaskStartedSignal, true);
  store.set(conversationalOnboardingExecutionFailedSignal, false);
  recordConversationalOnboardingExecutionStarted(store, "csv_chart");
  createConversationalOnboardingCsvChart(store, context.projectRoot)
    .then((path) => {
      store.set(csvChartResultPathSignal, path);
      if (
        store.get<CsvExecutionPhase>(csvExecutionPhaseSignal) ===
        "minimum-generation-elapsed"
      ) {
        store.set(conversationalOnboardingAllSetSignal, true);
      }
    })
    .catch((error) => {
      logger.error("Failed to create conversational onboarding CSV chart", {
        safe: {},
        sensitive: { error },
      });
      recordConversationalOnboardingExecutionStartFailed(store, "csv_chart");
      recordConversationalOnboardingLifecycleStartFailed(store, "csv_chart");
      store.set(conversationalOnboardingExecutionFailedSignal, true);
    });
}

function resetCsvChartTask(store: ScopedStore): void {
  store.set(csvChartResultPathSignal, null);
  store.set(csvThinkingDismissedSignal, true);
  store.set(csvExecutionPhaseSignal, "minimum-generation-elapsed");
}

const csvChartTaskDefinition: ConversationalOnboardingTaskBase = {
  getDeclinedRetryPrompt(intl: IntlShape) {
    return intl.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.csvTaskDeclinedRetry",
      defaultMessage:
        "Got it. We can skip the CSV for now. Want to try another quick example?",
      description:
        "Message shown after declining the CSV conversational onboarding task",
    });
  },
  option: {
    Icon: CsvChartTaskIcon,
    SelectionAttachment: CsvChartSelectionAttachment,
    label: defineMessage({
      id: "electron.onboarding.conversationalOnboarding.taskPicker.csvChart",
      defaultMessage: "Turn this example CSV into a chart",
      description:
        "Conversational onboarding starter task that charts the bundled example CSV",
    }),
  },
  prepare(store: ScopedStore) {
    store.set(csvThinkingDismissedSignal, false);
    store.set(csvExecutionPhaseSignal, "reading");
  },
  reset: resetCsvChartTask,
  retry(
    store: ScopedStore,
    plugin: unknown,
    context: ConversationalOnboardingTaskViewContext,
  ) {
    resetCsvChartTask(store);
    store.set(csvThinkingDismissedSignal, false);
    store.set(csvExecutionPhaseSignal, "reading");
    startCsvChartTask(store, plugin, context);
  },
  start: startCsvChartTask,
  View: CsvChartTaskView,
};

export const csvChartTask: ConversationalOnboardingTaskBase =
  csvChartTaskDefinition;
