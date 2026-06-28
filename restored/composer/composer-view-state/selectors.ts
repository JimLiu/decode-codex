// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js
import { appScopeC as createScopedComputedAtom } from "../../boundaries/app-scope";
import { composerPromptScope } from "../prompt-text";
import {
  baseComposerViewState,
  composerViewStateWithPromptState,
  promptTextState,
} from "./prompt-drafts";
import type { ComposerViewState } from "./types";
const selectComposerViewState = <T>(
  selector: (state: ComposerViewState) => T,
) =>
  createScopedComputedAtom(
    composerPromptScope,
    ({ get }: { get: (...args: unknown[]) => any }) =>
      selector(get(baseComposerViewState) as ComposerViewState),
  );
export const pullRequestChecksState = selectComposerViewState(
  (state) => state.pullRequestChecks,
);
export const composerStateWithPromptState = composerViewStateWithPromptState;
export const pendingThreadGoalObjectiveState = selectComposerViewState(
  (state) => state.pendingThreadGoalObjective,
);
export const defaultBranchSnapshotState = selectComposerViewState(
  (state) => state.defaultBranchSnapshot,
);
export const appshotContextsState = selectComposerViewState(
  (state) => state.appshotContexts,
);
export const imageAttachmentsState = selectComposerViewState(
  (state) => state.imageAttachments,
);
export const aeonStartTargetState = selectComposerViewState(
  (state) => state.aeonStartTarget,
);
export const isAutoContextOnState = selectComposerViewState(
  (state) => state.isAutoContextOn,
);
export const commentAttachmentsState = selectComposerViewState(
  (state) => state.commentAttachments,
);
export const mcpAppModelContextAttachmentsState = selectComposerViewState(
  (state) => state.mcpAppModelContextAttachments,
);
export const composerModeState = selectComposerViewState(
  (state) => state.composerMode,
);
export const followUpCloudStartingState = selectComposerViewState(
  (state) => state.followUpCloudStartingState,
);
export const fileAttachmentsState = selectComposerViewState(
  (state) => state.fileAttachments,
);
export const asyncThreadStartingState = selectComposerViewState(
  (state) => state.asyncThreadStartingState,
);
export const promptHasRestorableLinksState = createScopedComputedAtom(
  composerPromptScope,
  ({ get }: { get: (...args: unknown[]) => any }) =>
    Boolean((get(promptTextState) as string).trim()),
);
export const addedFilesState = selectComposerViewState(
  (state) => state.addedFiles,
);
export const pastedTextAttachmentsState = selectComposerViewState(
  (state) => state.pastedTextAttachments,
);
export const pullRequestMergeConflictState = selectComposerViewState(
  (state) => state.pullRequestMergeConflict,
);
export const selectedTextAttachmentsState = selectComposerViewState(
  (state) => state.selectedTextAttachments,
);
