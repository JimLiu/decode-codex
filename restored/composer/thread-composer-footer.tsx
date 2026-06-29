// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js
// Thread composer footer entry and context wiring.
import type { ComponentType, Context, ReactNode } from "react";
import {
  initThreadComposerContextChunk as initRawThreadComposerContextChunk,
  initThreadComposerFooterChunk as initRawThreadComposerFooterChunk,
  threadComposerContext as rawThreadComposerContext,
  ThreadComposerFooter as RawThreadComposerFooter,
} from "../vendor/appgen-library-hot-runtime";

export type ThreadComposerFooterSideConversationRequest = {
  collaborationMode: unknown;
  cwd: string | null;
  displayTitle: unknown;
  hostId: string | null;
  sourceConversationId: string;
};

export type ThreadComposerFooterProps = {
  aboveComposerContent?: ReactNode;
  aboveComposerContentLayout?: "floating" | "header";
  belowComposerContent?: (options: {
    canUseTemplateAttachments: boolean;
    onAddFileAssetAttachment: unknown;
  }) => ReactNode;
  browserConversationId?: string;
  className?: string;
  composerLayoutMode?: "multiline" | "single-line";
  composerModeAvailability?: unknown;
  defaultCwd?: string | null;
  externalFooterVariant?: "default" | "home";
  freeUpsellButton?: ReactNode;
  hideArtifactPluginSuggestions?: boolean;
  hideRunLocationDropdownOverride?: boolean;
  homeRunLocationRemoteProject?: unknown;
  hotkeyWindowHomeFooterControls?: ReactNode;
  isResponseInProgress?: boolean;
  localWorkspaceMaterialization?: unknown;
  lockedCollaborationMode?: unknown;
  onCreateSideConversation?: (
    request: ThreadComposerFooterSideConversationRequest,
  ) => Promise<unknown> | unknown;
  onLocalConversationCreated?: (conversationId: string) => void;
  onLocalSubmitError?: (() => void) | undefined;
  onLocalSubmitStart?: (() => void) | undefined;
  placeholderText?: string | undefined;
  showExternalFooter?: boolean;
  showFooterBranchWhen?: "always" | "local" | "never";
  showPlanKeywordSuggestion?: boolean;
  showWorkspaceDropdownInFooter?: boolean;
  surfaceClassName?: string;
};

initRawThreadComposerContextChunk();

export const threadComposerContext =
  rawThreadComposerContext as Context<boolean>;

export const ThreadComposerFooter =
  RawThreadComposerFooter as ComponentType<ThreadComposerFooterProps>;

export function initThreadComposerContextChunk(): void {
  initRawThreadComposerContextChunk();
}

export function initThreadComposerFooterChunk(): void {
  initRawThreadComposerFooterChunk();
  initRawThreadComposerContextChunk();
}
