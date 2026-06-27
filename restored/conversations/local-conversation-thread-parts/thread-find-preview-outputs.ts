// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Prompt-rail preview output collection for local conversation thread find.
import {
  ph as parseGitActionDirectives,
  Sj as getPathBasename,
  Ug as collectAssistantOutputArtifacts,
  UR as isAbsoluteOrWindowsPath,
} from "../../boundaries/current-ref/appg-thread-shared-producer";

type ThreadFindPreviewOutputType =
  | "app"
  | "commit"
  | "file"
  | "google-drive"
  | "image"
  | "pull-request"
  | "review"
  | "website";

export type ThreadFindPreviewOutput = {
  label?: string | null;
  type: ThreadFindPreviewOutputType;
};

type ThreadFindPreviewTurn = {
  artifacts: {
    editedFilePaths: readonly string[];
  };
};

export type ThreadFindPreviewOutputsOptions = {
  assistantContent: string | null;
  generatedImageSources: readonly string[];
  isAppgenEndCardEnabled: boolean;
  projectlessOutputDirectory: string | null;
  turn: ThreadFindPreviewTurn;
};

const THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER: Record<
  ThreadFindPreviewOutputType,
  number
> = {
  app: 0,
  website: 0,
  "google-drive": 1,
  file: 1,
  image: 1,
  commit: 2,
  "pull-request": 2,
  review: 2,
};

export const EMPTY_THREAD_FIND_PREVIEW_OUTPUTS: ThreadFindPreviewOutput[] = [];

export function buildThreadFindPreviewOutputs({
  assistantContent,
  generatedImageSources,
  isAppgenEndCardEnabled,
  projectlessOutputDirectory,
  turn,
}: ThreadFindPreviewOutputsOptions): ThreadFindPreviewOutput[] {
  let previewOutputs: ThreadFindPreviewOutput[] = [],
    seenPreviewKeys = new Set<string>(),
    addPreviewOutput = (previewOutput: ThreadFindPreviewOutput) => {
      let previewKey = `${previewOutput.type}:${previewOutput.label ?? ""}`;
      seenPreviewKeys.has(previewKey) ||
        (seenPreviewKeys.add(previewKey), previewOutputs.push(previewOutput));
    };

  for (let resource of collectAssistantOutputArtifacts({
    assistantContent,
    isAppgenEndCardEnabled,
    projectlessOutputDirectory,
    turn,
  }))
    switch (resource.type) {
      case "appgen-app":
        addPreviewOutput({
          label: resource.title,
          type: "app",
        });
        break;
      case "file":
        addPreviewOutput({
          label: getPathBasename(resource.path),
          type: "file",
        });
        break;
      case "google-drive":
        addPreviewOutput({
          label: resource.title,
          type: "google-drive",
        });
        break;
      case "website":
        addPreviewOutput({
          label: null,
          type: "website",
        });
        break;
    }

  for (let editedFilePath of turn.artifacts.editedFilePaths)
    addPreviewOutput({
      label: getPathBasename(editedFilePath),
      type: "file",
    });

  for (let generatedImageSource of generatedImageSources)
    addPreviewOutput(
      isAbsoluteOrWindowsPath(generatedImageSource)
        ? {
            label: getPathBasename(generatedImageSource),
            type: "file",
          }
        : {
            label: null,
            type: "image",
          },
    );

  for (let commandReference of parseGitActionDirectives(assistantContent))
    switch (commandReference.type) {
      case "commit":
        addPreviewOutput({
          label: null,
          type: "commit",
        });
        break;
      case "create-pr":
        addPreviewOutput({
          label: null,
          type: "pull-request",
        });
        break;
      case "create-branch":
      case "push":
      case "stage":
        break;
    }

  return previewOutputs.sort(
    (leftOutput, rightOutput) =>
      THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER[leftOutput.type] -
      THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER[rightOutput.type],
  );
}
