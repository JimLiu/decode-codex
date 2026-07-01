// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derives the selectable reasoning-effort options for a model and resolves the
// effective effort given the currently selected one.
import { isReasoningEffort } from "../utils/models-and-reasoning-efforts";
import { REASONING_EFFORTS } from "../utils/models-and-reasoning-efforts";
import {
  coerceReasoningEffort,
  type ModelOption,
  type ReasoningEffortOption,
} from "../boundaries/automation-editor-deps.facade";

export function initReasoningEffortOptionsChunk(): void {}

export function getModelReasoningEffortOptions(
  models: ModelOption[] | null | undefined,
  selectedModel: string | null | undefined,
): ReasoningEffortOption[] {
  const model = models?.find((candidate) => candidate.model === selectedModel);
  if (model == null) {
    return REASONING_EFFORTS.map((reasoningEffort) => ({
      description: "",
      reasoningEffort,
    }));
  }
  return model.supportedReasoningEfforts.filter((option) =>
    isReasoningEffort(option.reasoningEffort),
  );
}

export function resolveReasoningEffortOption(
  reasoningEffort: string,
  options: ReasoningEffortOption[],
): string | null {
  return isReasoningEffort(reasoningEffort) &&
    options.some((option) => option.reasoningEffort === reasoningEffort)
    ? reasoningEffort
    : coerceReasoningEffort(
        reasoningEffort,
        options.map((option) => option.reasoningEffort),
      );
}

export function stepReasoningEffortOption(
  reasoningEffort: string,
  options: ReasoningEffortOption[],
  direction: "increase" | "decrease",
): string {
  const currentIndex = options.findIndex(
    (option) => option.reasoningEffort === reasoningEffort,
  );
  const nextIndex =
    direction === "increase"
      ? Math.min(currentIndex + 1, options.length - 1)
      : Math.max(currentIndex - 1, 0);
  return options[nextIndex]?.reasoningEffort ?? reasoningEffort;
}

export function cycleReasoningEffortOption(
  reasoningEffort: string,
  options: ReasoningEffortOption[],
): string {
  const currentIndex = options.findIndex(
    (option) => option.reasoningEffort === reasoningEffort,
  );
  return (
    options[currentIndex === options.length - 1 ? 0 : currentIndex + 1]
      ?.reasoningEffort ?? reasoningEffort
  );
}
