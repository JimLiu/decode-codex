// Restored from ref/webview/assets/automation-shared-g-EMxEEn.js
// Semantic implementation for automation draft, seed, and payload helpers.
import { _appScopeX as createAppScopeAtom } from "../../boundaries/app-scope";
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import {
  automationScheduleI as createDefaultAutomationScheduleConfig,
  automationScheduleM as parseCronScheduleConfig,
  automationScheduleP as parseHeartbeatScheduleConfig,
  automationScheduleR as createDefaultHeartbeatScheduleConfig,
  automationScheduleT as serializeAutomationScheduleConfig,
  automationScheduleU as isAutomationScheduleConfigValid,
} from "../schedule";
type AutomationAtom<TValue> = unknown;
type AutomationKind = "cron" | "heartbeat";
type AutomationStatus = "ACTIVE" | "PAUSED" | string;
type AutomationExecutionEnvironment = "local" | "worktree" | string;
type AutomationDestination = AutomationExecutionEnvironment | "thread";
type DirectiveActionMode = "create" | "open" | "update" | null;
interface IntlShape {
  formatDate(value: Date, options?: Intl.DateTimeFormatOptions): string;
  formatMessage(
    descriptor: {
      id: string;
      defaultMessage: string;
      description?: string;
    },
    values?: Record<string, unknown>,
  ): string;
}
interface AutomationScheduleConfig {
  intervalHours?: number | null;
  intervalMinutes?: number | null;
  [key: string]: unknown;
}
interface AutomationModelSelection {
  model: string | null;
  reasoningEffort: string | null;
}
interface AutomationModelSettings extends AutomationModelSelection {
  isLoading: boolean;
}
interface AutomationRecord {
  id: string;
  kind: AutomationKind;
  name: string;
  prompt: string;
  status: AutomationStatus;
  rrule: string | null;
  cwds: string[];
  executionEnvironment: AutomationExecutionEnvironment | null;
  localEnvironmentConfigPath: string | null;
  targetThreadId: string | null;
  model: string | null;
  reasoningEffort: string | null;
}
interface AutomationDraft {
  id: string | null;
  kind: AutomationKind;
  name: string;
  prompt: string;
  status: AutomationStatus;
  cwds: string[];
  executionEnvironment: AutomationExecutionEnvironment | null;
  localEnvironmentConfigPath: string | null;
  targetThreadId: string | null;
  model: string | null;
  reasoningEffort: string | null;
  rawRrule: string | null;
  scheduleConfig: AutomationScheduleConfig;
  scheduleDirty: boolean;
}
interface AutomationDirectiveSeed {
  directiveKey: string;
  mode: "view" | string;
  id: string | null;
  kind: AutomationKind;
  name: string;
  prompt: string;
  rrule: string | null;
  cwds: string[];
  executionEnvironment: AutomationExecutionEnvironment | null;
  localEnvironmentConfigPath: string | null;
  model: string | null;
  reasoningEffort: string | null;
  targetThreadId: string | null;
  status: AutomationStatus;
}
interface CreateDraftFromSeedInput {
  seed: AutomationDirectiveSeed;
  targetAutomation: AutomationRecord | null;
  models?: unknown[] | null;
}
interface DraftValidationResult {
  trimmedName: string;
  trimmedPrompt: string;
  missingRequirements: string[];
  canSave: boolean;
}
interface ExistingAutomationPayload {
  id: string;
  kind: AutomationKind;
  name: string;
  prompt: string;
  status: AutomationStatus;
  rrule: string;
  cwds?: string[];
  executionEnvironment?: AutomationExecutionEnvironment | null;
  localEnvironmentConfigPath?: string | null;
  targetThreadId?: string | null;
  model: string | null;
  reasoningEffort: string | null;
}
interface NewAutomationPayload {
  kind: AutomationKind;
  name: string;
  prompt: string;
  rrule: string;
  cwds?: string[];
  executionEnvironment?: AutomationExecutionEnvironment | null;
  localEnvironmentConfigPath?: string | null;
  targetThreadId?: string | null;
  model: string | null;
  reasoningEffort: string | null;
}
const createAtom = createAppScopeAtom as <TValue>(
  initialValue: TValue,
) => AutomationAtom<TValue>;
const DEFAULT_CWD_TOKEN = "~";
const normalizeAutomationCwd = (cwd: string): string => cwd;
export const DEFAULT_AUTOMATION_DRAFT: AutomationDraft = {
  id: null,
  kind: "cron",
  name: "",
  prompt: "",
  status: "ACTIVE",
  cwds: [],
  executionEnvironment: "worktree",
  localEnvironmentConfigPath: null,
  targetThreadId: null,
  model: null,
  reasoningEffort: null,
  rawRrule: null,
  scheduleConfig: createDefaultAutomationScheduleConfig(),
  scheduleDirty: false,
};
export const automationDirectiveSeedAtom =
  createAtom<AutomationDirectiveSeed | null>(null);
export const automationDirectiveDialogOpenAtom = createAtom(false);
export const automationDirectiveResultAtom = createAtom<{
  directiveKey: string;
  automationId: string;
} | null>(null);

export function initAutomationDraftRuntimeChunk(): void {}

export function initAutomationNextRunLabelChunk(): void {}

export function formatAutomationNextRunLabel({
  intl,
  nextRunAt,
  status,
}: {
  intl: IntlShape;
  nextRunAt: string | number | Date | null;
  status: AutomationStatus;
}): string {
  return status === "PAUSED"
    ? "-"
    : nextRunAt == null
      ? intl.formatMessage({
          id: "inbox.automations.nextRun.none",
          defaultMessage: "Not scheduled",
          description:
            "Fallback label when an automation does not have a next run time",
        })
      : formatRelativeAutomationRunTime({
          intl,
          timestamp: nextRunAt,
        });
}
function formatRelativeAutomationRunTime({
  intl,
  timestamp,
}: {
  intl: IntlShape;
  timestamp: string | number | Date;
}): string {
  const runDate = new Date(timestamp);
  const daysFromToday = getCalendarDayDistance(runDate, new Date());
  const runTime = intl.formatDate(runDate, {
    timeStyle: "short",
  });
  return daysFromToday === 0
    ? intl.formatMessage(
        {
          id: "inbox.automations.relativeDate.today",
          defaultMessage: "Today at {time}",
          description: "Relative next-run label for a time later today",
        },
        {
          time: runTime,
        },
      )
    : daysFromToday === 1
      ? intl.formatMessage(
          {
            id: "inbox.automations.relativeDate.tomorrow",
            defaultMessage: "Tomorrow at {time}",
            description: "Relative next-run label for a time tomorrow",
          },
          {
            time: runTime,
          },
        )
      : daysFromToday > 1 && daysFromToday < 7
        ? intl.formatMessage(
            {
              id: "inbox.automations.relativeDate.weekday",
              defaultMessage: "{weekday} at {time}",
              description: "Relative next-run label for a day later this week",
            },
            {
              weekday: intl.formatDate(runDate, {
                weekday: "long",
              }),
              time: runTime,
            },
          )
        : intl.formatDate(runDate, {
            dateStyle: "medium",
            timeStyle: "short",
          });
}
function getCalendarDayDistance(laterDate: Date, baseDate: Date): number {
  const laterDay = new Date(
    laterDate.getFullYear(),
    laterDate.getMonth(),
    laterDate.getDate(),
  );
  const baseDay = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate(),
  );
  return Math.round((laterDay.getTime() - baseDay.getTime()) / 864e5);
}
export function validateAutomationDraft(
  draft: AutomationDraft,
): DraftValidationResult {
  const trimmedName = draft.name.trim();
  const trimmedPrompt = draft.prompt.trim();
  const missingRequirements: string[] = [];
  if (trimmedName.length === 0) {
    missingRequirements.push("name");
  }
  if (trimmedPrompt.length === 0) {
    missingRequirements.push("prompt");
  }
  if (draft.kind === "heartbeat") {
    draft.targetThreadId ?? missingRequirements.push("thread");
  } else {
    if (draft.cwds.length === 0) {
      missingRequirements.push("cwd");
    }
    draft.executionEnvironment ??
      missingRequirements.push("executionEnvironment");
    draft.model ?? missingRequirements.push("model");
  }
  if (!isAutomationScheduleConfigValid(draft.scheduleConfig)) {
    missingRequirements.push("schedule");
  }
  return {
    trimmedName,
    trimmedPrompt,
    missingRequirements,
    canSave: missingRequirements.length === 0,
  };
}
export function getAutomationDraftRrule(draft: AutomationDraft): string {
  return !draft.scheduleDirty && draft.rawRrule
    ? draft.rawRrule
    : serializeAutomationScheduleConfig(draft.scheduleConfig);
}
export function applyAutomationScheduleDraft(
  draft: AutomationDraft,
  nextDraft: Pick<AutomationDraft, "name" | "prompt" | "scheduleConfig">,
): AutomationDraft {
  return {
    ...draft,
    name: nextDraft.name,
    prompt: nextDraft.prompt,
    kind: "cron",
    rawRrule: null,
    scheduleConfig: nextDraft.scheduleConfig,
    scheduleDirty: true,
  };
}
export function createAutomationSeedFromDirective({
  directiveKey,
  automation,
}: {
  directiveKey: string;
  automation: AutomationRecord;
}): AutomationDirectiveSeed {
  return {
    directiveKey,
    mode: "view",
    id: automation.id,
    kind: automation.kind,
    name: automation.name,
    prompt: automation.prompt,
    rrule: automation.rrule,
    cwds: [],
    executionEnvironment: null,
    localEnvironmentConfigPath: null,
    model: automation.model,
    reasoningEffort: automation.reasoningEffort,
    targetThreadId: automation.targetThreadId,
    status: automation.status,
  };
}
export function createAutomationDraftFromAutomation(
  automation: AutomationRecord,
  models?: unknown[] | null,
): AutomationDraft {
  const modelSelection = sourceRuntime.srcRi({
    automation,
    models: models ?? [],
  }) as AutomationModelSelection;
  const heartbeat = sourceRuntime.srcBi(automation);
  return {
    id: automation.id,
    kind: automation.kind,
    name: automation.name,
    prompt: automation.prompt,
    status: automation.status,
    cwds: heartbeat ? [] : automation.cwds,
    executionEnvironment: heartbeat
      ? null
      : sourceRuntime.srcVi(automation.executionEnvironment),
    localEnvironmentConfigPath: heartbeat
      ? null
      : automation.localEnvironmentConfigPath,
    targetThreadId: heartbeat ? automation.targetThreadId : null,
    model: heartbeat ? null : modelSelection.model,
    reasoningEffort: heartbeat ? null : modelSelection.reasoningEffort,
    rawRrule: automation.rrule,
    scheduleConfig: heartbeat
      ? parseHeartbeatScheduleConfig(automation.rrule)
      : parseCronScheduleConfig(automation.rrule),
    scheduleDirty: false,
  };
}
export function createAutomationDraftFromSeed({
  seed,
  targetAutomation,
  models,
}: CreateDraftFromSeedInput): AutomationDraft {
  const viewedAutomation = seed.mode === "view" ? targetAutomation : null;
  const rawRrule = viewedAutomation?.rrule ?? seed.rrule;
  const targetModelSelection =
    targetAutomation == null
      ? null
      : (sourceRuntime.srcRi({
          automation: targetAutomation,
          models: models ?? [],
        }) as AutomationModelSelection);
  const fallbackExecutionEnvironment =
    seed.id != null && targetAutomation == null
      ? null
      : targetAutomation != null && !sourceRuntime.srcBi(targetAutomation)
        ? sourceRuntime.srcVi(targetAutomation.executionEnvironment)
        : DEFAULT_AUTOMATION_DRAFT.executionEnvironment;
  const kind =
    targetAutomation?.kind ??
    seed.kind ??
    (seed.id != null && targetAutomation == null
      ? DEFAULT_AUTOMATION_DRAFT.kind
      : "cron");
  const targetThreadId =
    kind === "heartbeat"
      ? (seed.targetThreadId ??
        (targetAutomation != null && sourceRuntime.srcBi(targetAutomation)
          ? targetAutomation.targetThreadId
          : null))
      : null;
  return {
    id: seed.id ?? targetAutomation?.id ?? null,
    kind,
    name: viewedAutomation?.name ?? seed.name,
    prompt: viewedAutomation?.prompt ?? seed.prompt,
    status:
      viewedAutomation?.status ??
      seed.status ??
      targetAutomation?.status ??
      "ACTIVE",
    cwds:
      targetAutomation != null && !sourceRuntime.srcBi(targetAutomation)
        ? targetAutomation.cwds
        : seed.cwds.map(normalizeAutomationCwd),
    executionEnvironment:
      kind === "heartbeat"
        ? null
        : (seed.executionEnvironment ?? fallbackExecutionEnvironment),
    localEnvironmentConfigPath:
      kind === "heartbeat"
        ? null
        : (seed.localEnvironmentConfigPath ??
          (targetAutomation != null && !sourceRuntime.srcBi(targetAutomation)
            ? targetAutomation.localEnvironmentConfigPath
            : DEFAULT_AUTOMATION_DRAFT.localEnvironmentConfigPath)),
    targetThreadId,
    model:
      kind === "heartbeat"
        ? null
        : (seed.model ??
          targetModelSelection?.model ??
          DEFAULT_AUTOMATION_DRAFT.model),
    reasoningEffort:
      kind === "heartbeat"
        ? null
        : (seed.reasoningEffort ??
          targetModelSelection?.reasoningEffort ??
          DEFAULT_AUTOMATION_DRAFT.reasoningEffort),
    rawRrule,
    scheduleConfig:
      kind === "heartbeat"
        ? parseHeartbeatScheduleConfig(rawRrule)
        : parseCronScheduleConfig(rawRrule),
    scheduleDirty: false,
  };
}
export function isDefaultAutomationDraft(draft: AutomationDraft): boolean {
  return (
    draft.id == null &&
    draft.kind === "cron" &&
    draft.name === "" &&
    draft.prompt === "" &&
    draft.cwds.length === 0 &&
    draft.executionEnvironment === "worktree" &&
    draft.localEnvironmentConfigPath == null &&
    draft.targetThreadId == null &&
    draft.model == null &&
    draft.reasoningEffort == null &&
    draft.rawRrule == null &&
    draft.scheduleDirty === false
  );
}
export function setAutomationDraftKind(
  draft: AutomationDraft,
  kind: AutomationKind,
): AutomationDraft {
  const scheduleConfig =
    kind === "heartbeat" && draft.kind !== "heartbeat"
      ? createDefaultHeartbeatScheduleConfig()
      : kind === "cron" && draft.kind === "heartbeat"
        ? {
            ...draft.scheduleConfig,
            intervalHours: Math.max(
              1,
              Math.round((draft.scheduleConfig.intervalMinutes ?? 60) / 60),
            ),
            intervalMinutes: null,
          }
        : draft.scheduleConfig;
  return {
    ...draft,
    kind,
    executionEnvironment:
      kind === "cron" ? (draft.executionEnvironment ?? "worktree") : null,
    targetThreadId: kind === "heartbeat" ? draft.targetThreadId : null,
    rawRrule:
      kind === "heartbeat" && draft.kind !== "heartbeat"
        ? null
        : draft.rawRrule,
    scheduleConfig,
    scheduleDirty:
      (kind === "heartbeat" && draft.kind !== "heartbeat") ||
      (kind === "cron" && draft.kind === "heartbeat")
        ? true
        : draft.scheduleDirty,
  };
}
export function getAutomationDraftDestination(
  draft: AutomationDraft,
): AutomationDestination {
  return draft.kind === "heartbeat"
    ? "thread"
    : (draft.executionEnvironment ?? "worktree");
}
export function getAutomationDestinationOptions({
  allowThreadDestination,
}: {
  allowThreadDestination: boolean;
}): AutomationDestination[] {
  return allowThreadDestination
    ? ["local", "worktree", "thread"]
    : ["local", "worktree"];
}
export function setAutomationDraftDestination(
  draft: AutomationDraft,
  destination: AutomationDestination,
): AutomationDraft {
  return destination === "thread"
    ? setAutomationDraftKind(draft, "heartbeat")
    : {
        ...setAutomationDraftKind(draft, "cron"),
        executionEnvironment: destination,
        localEnvironmentConfigPath:
          destination === "worktree" ? draft.localEnvironmentConfigPath : null,
      };
}
export function setAutomationDraftCwds(
  draft: AutomationDraft,
  nextCwdsInput: string[],
): AutomationDraft {
  let nextCwds = nextCwdsInput;
  if (nextCwdsInput.includes(DEFAULT_CWD_TOKEN)) {
    nextCwds =
      isDefaultCwdSelection(draft.cwds) && nextCwdsInput.length > 1
        ? nextCwdsInput.filter((cwd) => cwd !== DEFAULT_CWD_TOKEN)
        : [DEFAULT_CWD_TOKEN];
  }
  const unchangedSingleCwd =
    nextCwds.length === 1 &&
    draft.cwds.length === 1 &&
    nextCwds[0] === draft.cwds[0];
  const usesDefaultCwd = isDefaultCwdSelection(nextCwds);
  return {
    ...draft,
    cwds: nextCwds,
    executionEnvironment: usesDefaultCwd ? "local" : draft.executionEnvironment,
    localEnvironmentConfigPath:
      !usesDefaultCwd && unchangedSingleCwd
        ? draft.localEnvironmentConfigPath
        : null,
  };
}
export function applyHeartbeatTargetThread({
  draft,
  threadId,
  title,
}: {
  draft: AutomationDraft;
  threadId: string;
  title: string;
}): AutomationDraft {
  return {
    ...draft,
    name: draft.name.trim().length === 0 ? title : draft.name,
    targetThreadId: threadId,
  };
}
export function isAutomationDraftUsingDefaultCwd(
  draft: AutomationDraft,
): boolean {
  return draft.kind === "cron" && isDefaultCwdSelection(draft.cwds);
}
export function applyAutomationDraftModelDefaults({
  draft,
  modelSettings,
}: {
  draft: AutomationDraft;
  modelSettings: AutomationModelSettings;
}): AutomationDraft {
  return draft.kind === "heartbeat"
    ? {
        ...draft,
        model: null,
        reasoningEffort: null,
      }
    : modelSettings.isLoading || draft.model != null
      ? draft
      : {
          ...draft,
          model: modelSettings.model,
          reasoningEffort: modelSettings.reasoningEffort,
        };
}
export function toAutomationUpdatePayload({
  draft,
  name,
  prompt,
  status,
  rrule,
}: {
  draft: AutomationDraft;
  name: string;
  prompt: string;
  status: AutomationStatus;
  rrule: string;
}): ExistingAutomationPayload {
  if (draft.id == null) {
    throw Error("Automation draft is incomplete");
  }
  if (draft.kind === "heartbeat") {
    if (draft.targetThreadId == null) {
      throw Error("Heartbeat automation draft is incomplete");
    }
    return {
      id: draft.id,
      kind: "heartbeat",
      name,
      prompt,
      status,
      targetThreadId: draft.targetThreadId,
      model: null,
      reasoningEffort: null,
      rrule,
    };
  }
  if (draft.executionEnvironment == null || draft.model == null) {
    throw Error("Cron automation draft is incomplete");
  }
  return {
    id: draft.id,
    kind: "cron",
    name,
    prompt,
    status,
    cwds: draft.cwds,
    executionEnvironment: draft.executionEnvironment,
    localEnvironmentConfigPath: draft.localEnvironmentConfigPath,
    model: draft.model,
    reasoningEffort: draft.reasoningEffort,
    rrule,
  };
}
export function toAutomationCreatePayload({
  draft,
  name,
  prompt,
  rrule,
}: {
  draft: AutomationDraft;
  name: string;
  prompt: string;
  rrule: string;
}): NewAutomationPayload {
  if (draft.kind === "heartbeat") {
    if (draft.targetThreadId == null) {
      throw Error("Heartbeat automation draft is incomplete");
    }
    return {
      kind: "heartbeat",
      name,
      prompt,
      targetThreadId: draft.targetThreadId,
      model: null,
      reasoningEffort: null,
      rrule,
    };
  }
  if (draft.executionEnvironment == null || draft.model == null) {
    throw Error("Cron automation draft is incomplete");
  }
  return {
    kind: "cron",
    name,
    prompt,
    cwds: draft.cwds,
    executionEnvironment: draft.executionEnvironment,
    localEnvironmentConfigPath: draft.localEnvironmentConfigPath,
    model: draft.model,
    reasoningEffort: draft.reasoningEffort,
    rrule,
  };
}
export function getAutomationDirectiveActionMode({
  directiveMode,
  canCreate,
  canUpdate,
  isViewMode,
  forceOpen = false,
}: {
  directiveMode: string | null;
  canCreate: boolean;
  canUpdate: boolean;
  isViewMode: boolean;
  forceOpen?: boolean;
}): DirectiveActionMode {
  return forceOpen
    ? "open"
    : directiveMode === "view"
      ? isViewMode
        ? "open"
        : null
      : canUpdate
        ? "update"
        : canCreate
          ? "create"
          : isViewMode
            ? "open"
            : null;
}
function isDefaultCwdSelection(cwds: string[]): boolean {
  return cwds.length === 1 && cwds[0] === DEFAULT_CWD_TOKEN;
}
