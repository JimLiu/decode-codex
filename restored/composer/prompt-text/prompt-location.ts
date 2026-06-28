// Restored from ref/webview/assets/prompt-text-BpPEyD-S.js
// prompt-text-BpPEyD-S chunk restored from the Codex webview bundle.
import { _appScopeH as createScopedScope } from "../../boundaries/app-scope";
import {
  getDraftThreadLocationIdForEntrypoint,
  getLocalConversationId,
  routeScope,
  type RouteLocation,
} from "../../runtime/persisted-signal";
import type { LibraryPreviewAttachment, PromptLocation } from "./types";
export const composerPromptScope = createScopedScope("ComposerScope", {
  key: getPromptLocationKey,
  parent: routeScope,
  retain: {
    max: 100,
  },
});
export function getPromptLocationKey(promptLocation: PromptLocation): string {
  switch (promptLocation.kind) {
    case "new":
      switch (promptLocation.entrypoint) {
        case "home":
        case "panel":
          return getDraftThreadLocationIdForEntrypoint({
            entrypoint: promptLocation.entrypoint,
          });
        case "library-preview":
          switch (promptLocation.implicitAttachment.kind) {
            case "file":
              return `library-preview:${promptLocation.implicitAttachment.file.fsPath || promptLocation.implicitAttachment.file.path}`;
            case "image":
              return `library-preview:${promptLocation.implicitAttachment.image.localPath ?? promptLocation.implicitAttachment.image.src}`;
          }
      }
    case "local":
      return `local:${promptLocation.conversationId}`;
    case "cloud":
      return `cloud:${promptLocation.taskId}`;
    case "other":
      return "other";
  }
}
export function createLibraryPreviewPromptLocation(
  implicitAttachment: LibraryPreviewAttachment,
): PromptLocation {
  return {
    entrypoint: "library-preview",
    implicitAttachment,
    kind: "new",
    routeConversationId: null,
  };
}
export function createLocalPromptLocation(
  conversationId: string,
  placement: string = "main",
  routeConversationId: string = conversationId,
): PromptLocation {
  return {
    conversationId,
    kind: "local",
    placement,
    routeConversationId,
  };
}
export function createPromptLocationFromRoute(
  routeLocation: RouteLocation,
): PromptLocation {
  const routeConversationId = getLocalConversationId(routeLocation);
  switch (routeLocation.routeKind) {
    case "home":
      return {
        entrypoint: "home",
        kind: "new",
        routeConversationId,
      };
    case "new-thread-panel":
      return {
        entrypoint: "panel",
        kind: "new",
        routeConversationId,
      };
    case "local-thread":
      return createLocalPromptLocation(routeLocation.conversationId);
    case "remote-thread":
      return {
        kind: "cloud",
        routeConversationId,
        taskId: routeLocation.taskId,
      };
    case "chatgpt-thread":
    case "other":
      return {
        kind: "other",
        routeConversationId,
      };
  }
}
