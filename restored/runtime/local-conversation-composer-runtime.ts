// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Local conversation composer bridge and host connection signals.
import type { ComponentType, Context } from "react";
import {
  UE as LOCAL_HOST_ID,
  tp as hostConnectionStatusSignal,
  wP as initLocalConversationComposerBridge,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  Vn as localWorkspaceMaterializationSignal,
  cs as backgroundAgentsSignal,
} from "../boundaries/current-ref/profile-page-producer";
import {
  $ as threadComposerContextRaw,
  et as initThreadComposerFooterChunkRaw,
  t as ThreadComposerFooterRaw,
} from "../boundaries/current-ref/appgen-library-hot-producer";

export type ThreadComposerFooterSideConversationRequest = {
  collaborationMode: unknown;
  cwd: string | null;
  displayTitle: unknown;
  hostId: string | null;
  sourceConversationId: string;
};

export type ThreadComposerFooterProps = {
  browserConversationId?: string;
  composerModeAvailability?: unknown;
  isResponseInProgress?: boolean;
  localWorkspaceMaterialization?: unknown;
  lockedCollaborationMode?: unknown;
  onCreateSideConversation?: (
    request: ThreadComposerFooterSideConversationRequest,
  ) => Promise<unknown> | unknown;
  onLocalSubmitError?: (() => void) | undefined;
  onLocalSubmitStart?: (() => void) | undefined;
  placeholderText?: string | undefined;
  showExternalFooter?: boolean;
  showFooterBranchWhen?: string;
  surfaceClassName?: string;
};

export const threadComposerContext =
  threadComposerContextRaw as Context<unknown>;
export const ThreadComposerFooter =
  ThreadComposerFooterRaw as ComponentType<ThreadComposerFooterProps>;

export {
  backgroundAgentsSignal,
  hostConnectionStatusSignal,
  LOCAL_HOST_ID,
  localWorkspaceMaterializationSignal,
};

export function initLocalConversationComposerRuntime(): void {
  initLocalConversationComposerBridge();
}

export function initThreadComposerFooterRuntime(): void {
  initThreadComposerFooterChunkRaw();
}
