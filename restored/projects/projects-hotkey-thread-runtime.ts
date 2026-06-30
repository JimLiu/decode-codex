// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-zz_Wr7F0.js
// Current facade for dialog layout and thread sidebar helpers shared by projects, remote conversation, and hotkey-window thread chunks.

export {
  DIALOG_FOOTER_BUTTON_CLASS,
  DIALOG_OVERLAY_CLASS_NAME,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogSection,
  DialogTitle,
  FieldStack,
  FormRow,
  initAppDialog,
  initDialogLayoutComponents,
} from "../ui/dialog-layout";

export { WithWindow } from "../utils/with-window";

export {
  ArchiveThreadConfirmDialog,
  createPinThreadMenuItem,
  getThreadPinButtonSlots,
  heartbeatAutomationEligibilitySignal,
  initArchiveThreadConfirmDialogChunk,
  initHeartbeatAutomationEligibilityChunk,
  initOpenThreadInNewWindowChunk,
  initThreadPinControlsChunk,
  initThreadPinIconChunk,
  initThreadSwitchTimingTrackerChunk,
  pinThreadMessage,
  threadSwitchTimingTracker,
  ThreadPinButton,
  ThreadPinIcon,
  unpinThreadMessage,
  useOpenThreadInNewWindow,
} from "../automation/heartbeat-automation-eligibility";

export function initWithWindowRuntimeChunk(): void {}

export function initDialogLayoutSectionsChunk(): void {}
