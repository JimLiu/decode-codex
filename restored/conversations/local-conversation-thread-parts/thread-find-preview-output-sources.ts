// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Source helpers for prompt-rail preview outputs in thread find.
import {
  getPathBasename,
  isAbsoluteOrWindowsPath,
  parseGitActionDirectives,
  type GitActionDirective,
} from "./conversation-content-runtime";
import { collectLocalAssistantOutputArtifacts } from "./local-conversation-artifact-runtime";

type AssistantOutputArtifact =
  | {
      path: string;
      type: "file";
    }
  | {
      title: string | null;
      type: "appgen-app" | "google-drive";
    }
  | {
      type: "website";
    };

type AssistantOutputArtifactsOptions = {
  assistantContent: string | null;
  isAppgenEndCardEnabled: boolean;
  projectlessOutputDirectory: string | null;
  turn: unknown;
};

export function collectThreadFindAssistantOutputArtifacts(
  options: AssistantOutputArtifactsOptions,
): AssistantOutputArtifact[] {
  return collectLocalAssistantOutputArtifacts<AssistantOutputArtifact>(options);
}

export function getPreviewPathBasename(path: string): string {
  return getPathBasename(path);
}

export function isAbsoluteGeneratedImagePath(path: string): boolean {
  return isAbsoluteOrWindowsPath(path);
}

export function parseThreadFindGitActionDirectives(
  assistantContent: string | null,
): GitActionDirective[] {
  return parseGitActionDirectives(assistantContent);
}
