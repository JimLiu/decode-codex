// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Entry-thread UI components and side-panel helpers used by local conversation routes.
import type { ComponentType } from "react";
import { _c as getSidePanelTargetStoreRaw } from "../../vendor/projects-app-shared-runtime";
import {
  Eu as EmptyConversationStateRaw,
  Ql as initSummaryPanelBannerChunkRaw,
  Qn as SummaryPanelBannerRaw,
  Xc as initEmptyPageStateChunkRaw,
  oa as AutomationDescriptionRaw,
  sc as SideChatHeaderRaw,
  st as initSideChatHeaderChunkRaw,
  wu as EmptyPageStateRaw,
} from "../../vendor/profile-page-runtime";

export type SidePanelTargetStore = {
  tabById$: unknown;
};

export const EmptyConversationState =
  EmptyConversationStateRaw as ComponentType<Record<string, unknown>>;
export const SummaryPanelBanner = SummaryPanelBannerRaw as ComponentType<
  Record<string, unknown>
>;
export const AutomationDescription = AutomationDescriptionRaw as ComponentType<
  Record<string, unknown>
>;
export const SideChatHeader = SideChatHeaderRaw as ComponentType<
  Record<string, unknown>
>;
export const EmptyPageState = EmptyPageStateRaw as ComponentType<
  Record<string, unknown>
>;

export function getSidePanelTargetStore(target: unknown): SidePanelTargetStore {
  return getSidePanelTargetStoreRaw(target) as SidePanelTargetStore;
}

export function initLocalConversationThreadEntryRuntime(): void {
  initSideChatHeaderChunkRaw();
  initSummaryPanelBannerChunkRaw();
  initEmptyPageStateChunkRaw();
}
