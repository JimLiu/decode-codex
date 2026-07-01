// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds and sends the composer turn used when the user asks to resize an image.
import { startComposerTurn } from "./start-composer-turn";
import {
  conversationManagerAtom,
  generateId,
  getConversationManager,
} from "../boundaries/onboarding-commons-externals.facade";

interface ComposerScope {
  get(atom: unknown): any;
}

interface ConversationManager {
  getHostId(): string;
  requestClient: unknown;
}

interface ResizePromptContext {
  prompt: string;
  addedFiles: never[];
  fileAttachments: never[];
  ideContext: null;
  inAppBrowserContext: null;
  imageAttachments: Array<{ id: string; src: string }>;
  selectedTextAttachments: never[];
  pullRequestChecks: never[];
  pullRequestMergeConflict: null;
}

function buildResizeContext({
  attachmentSrc,
  prompt,
}: {
  attachmentSrc: string;
  prompt: string;
}): ResizePromptContext {
  return {
    prompt,
    addedFiles: [],
    fileAttachments: [],
    ideContext: null,
    inAppBrowserContext: null,
    imageAttachments: [{ id: generateId(), src: attachmentSrc }],
    selectedTextAttachments: [],
    pullRequestChecks: [],
    pullRequestMergeConflict: null,
  };
}

export interface SendResizePromptArgs {
  scope: ComposerScope;
  conversationId: string;
  hostId: string;
  attachmentSrc: string;
  cwd: string;
  agentMode: unknown;
  permissionProfileId: string | null;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  prompt: string;
}

export async function sendResizePrompt({
  scope,
  conversationId,
  hostId,
  attachmentSrc,
  cwd,
  agentMode,
  permissionProfileId,
  serviceTier,
  shouldSendPermissionOverrides,
  activeCollaborationMode,
  prompt,
}: SendResizePromptArgs): Promise<void> {
  await startComposerTurn({
    scope,
    manager:
      getConversationManager(scope, conversationId) ??
      (scope.get(conversationManagerAtom) as ConversationManager),
    hostId,
    context: buildResizeContext({ attachmentSrc, prompt }),
    targetConversationId: conversationId,
    cwd,
    agentMode,
    permissionProfileId,
    serviceTier,
    shouldSendPermissionOverrides,
    activeCollaborationMode,
  });
}
