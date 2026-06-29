// Restored from ref/webview/assets/artifact-analytics-DeyIRgFu.js
// Supersedes historical restore from ref/webview/assets/artifact-analytics-FNBRBLp1.js.
// Product analytics helpers for artifact annotation flows.
import {
  ArtifactAnnotationStartSource,
  ArtifactAnnotationSubmitMode,
  ArtifactAnnotationSubmitSource,
  ArtifactKind,
  artifactAnnotationCanceledEvent,
  artifactAnnotationSavedEvent,
  artifactAnnotationStartedEvent,
  artifactAnnotationSubmittedEvent,
  initArtifactAnalyticsEventDescriptors,
  initProductLoggerRuntime,
  logProductEvent,
} from "../runtime/artifact-analytics-runtime";
import { once } from "../runtime/commonjs-interop";
type ProductLoggerScope = {
  get(key: unknown): {
    logProductEvent(event: unknown, payload?: Record<string, unknown>): void;
  };
};
type ArtifactType = "document" | "notebook" | "pdf" | "slides" | "spreadsheet";
type ArtifactAnalyticsContext = {
  artifactTabId?: string | null;
  artifactType: ArtifactType;
  importKind?: string | null;
  threadId?: string | null;
};
type AnnotationStartSource =
  | "annotation_mode_pointer"
  | "ask_codex_button"
  | "ask_codex_shortcut";
type AnnotationSubmitMode = "direct" | "saved";
type AnnotationSubmitSource = "button" | "dictation" | "keyboard";
type AnnotationStartOptions = {
  annotationModeEnabled: boolean;
  startSource?: AnnotationStartSource | null;
};
type AnnotationSubmitOptions = {
  annotationModeEnabled: boolean;
  annotationTargetKind?: string | null;
  submitMode?: AnnotationSubmitMode | null;
  submitSource?: AnnotationSubmitSource | null;
};
export function trackArtifactAnnotationStarted(
  scope: ProductLoggerScope,
  context: ArtifactAnalyticsContext,
  { annotationModeEnabled, startSource }: AnnotationStartOptions,
): void {
  logProductEvent(scope, artifactAnnotationStartedEvent, {
    ...buildArtifactPayload(context),
    annotationModeEnabled,
    startSource: mapAnnotationStartSource(startSource),
  });
}
export function trackArtifactAnnotationCanceled(
  scope: ProductLoggerScope,
  context: ArtifactAnalyticsContext,
): void {
  logProductEvent(scope, artifactAnnotationCanceledEvent, {
    ...buildArtifactPayload(context),
  });
}
export function trackArtifactAnnotationSaved(
  scope: ProductLoggerScope,
  context: ArtifactAnalyticsContext,
): void {
  logProductEvent(scope, artifactAnnotationSavedEvent, {
    ...buildArtifactPayload(context),
  });
}
export function trackArtifactAnnotationSubmitted(
  scope: ProductLoggerScope,
  context: ArtifactAnalyticsContext,
  {
    annotationModeEnabled,
    annotationTargetKind,
    submitMode,
    submitSource,
  }: AnnotationSubmitOptions,
): void {
  logProductEvent(scope, artifactAnnotationSubmittedEvent, {
    ...buildArtifactPayload(context),
    annotationModeEnabled,
    annotationTargetKind,
    submitMode: mapAnnotationSubmitMode(submitMode),
    submitSource: mapAnnotationSubmitSource(submitSource),
  });
}
function buildArtifactPayload({
  artifactTabId,
  artifactType,
  importKind,
  threadId,
}: ArtifactAnalyticsContext): Record<string, unknown> {
  return {
    artifactKind: mapArtifactKind(artifactType),
    artifactImportKind: importKind,
    artifactTabId: artifactTabId ?? undefined,
    threadId: threadId ?? undefined,
  };
}

export const initArtifactAnalyticsChunk = once(() => {
  initProductLoggerRuntime();
  initArtifactAnalyticsEventDescriptors();
});
function mapArtifactKind(artifactType: ArtifactType): unknown {
  switch (artifactType) {
    case "document":
      return ArtifactKind.CODEX_ARTIFACT_KIND_DOCUMENT;
    case "notebook":
      return ArtifactKind.CODEX_ARTIFACT_KIND_NOTEBOOK;
    case "pdf":
      return ArtifactKind.CODEX_ARTIFACT_KIND_PDF;
    case "slides":
      return ArtifactKind.CODEX_ARTIFACT_KIND_PRESENTATION;
    case "spreadsheet":
      return ArtifactKind.CODEX_ARTIFACT_KIND_SPREADSHEET;
  }
}
function mapAnnotationStartSource(
  source?: AnnotationStartSource | null,
): unknown {
  switch (source) {
    case "annotation_mode_pointer":
      return ArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ANNOTATION_MODE_POINTER;
    case "ask_codex_button":
      return ArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_BUTTON;
    case "ask_codex_shortcut":
      return ArtifactAnnotationStartSource.CODEX_ARTIFACT_ANNOTATION_START_SOURCE_ASK_CODEX_SHORTCUT;
  }
}
function mapAnnotationSubmitMode(mode?: AnnotationSubmitMode | null): unknown {
  switch (mode) {
    case "direct":
      return ArtifactAnnotationSubmitMode.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_DIRECT;
    case "saved":
      return ArtifactAnnotationSubmitMode.CODEX_ARTIFACT_ANNOTATION_SUBMIT_MODE_SAVED;
  }
}
function mapAnnotationSubmitSource(
  source?: AnnotationSubmitSource | null,
): unknown {
  switch (source) {
    case "button":
      return ArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_BUTTON;
    case "dictation":
      return ArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_DICTATION;
    case "keyboard":
      return ArtifactAnnotationSubmitSource.CODEX_ARTIFACT_ANNOTATION_SUBMIT_SOURCE_KEYBOARD;
  }
}
