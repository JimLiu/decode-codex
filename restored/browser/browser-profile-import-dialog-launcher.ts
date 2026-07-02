// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Opens the browser profile import dialog as a lazily-loaded modal.
import * as React from "react";
import { openModalControllerModal } from "../ui/modal-controller-state";

type ModalStore = Parameters<typeof openModalControllerModal>[0];

export type BrowserProfileImportService = {
  importBrowserProfile(options: unknown): Promise<unknown>;
  listImportableBrowserProfiles(): Promise<unknown[]>;
};

const BrowserProfileImportDialogModalLazy = React.lazy(async () => ({
  default: (await import("../ui/browser-profile-import-dialog"))
    .BrowserProfileImportDialogModal,
}));

export function initBrowserProfileImportDialogLauncherChunk(): void {
  void BrowserProfileImportDialogModalLazy;
}

export function openBrowserProfileImportDialog(
  store: ModalStore,
  service: BrowserProfileImportService | null | undefined,
): boolean {
  if (service == null) {
    return false;
  }
  openModalControllerModal(store, BrowserProfileImportDialogModalLazy, {
    service,
  });
  return true;
}
