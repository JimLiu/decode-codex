// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Decides whether the composer renders in the compact single-line layout. In
// "auto-single-line" it collapses to single line only when there are no visible
// attachments, the editor is not multiline, voice layout is inactive, and the
// measured single-line text fits within the input width (plus a small buffer),
// unless a layout has been explicitly locked. Pure function.

/** px slack added to the measured text width before it is considered to overflow. */
const SINGLE_LINE_WIDTH_BUFFER = 32;

export type ComposerLayoutMode = "multiline" | "auto-single-line";

export interface UseComposerLayoutModeInput {
  composerLayoutMode: ComposerLayoutMode;
  hasVisibleAttachments: boolean;
  isEditorMultiline: boolean;
  isVoiceLayoutActive: boolean;
  lockedLayout: string | null;
  singleLineInputWidth: number | null;
  singleLineTextWidth: number;
}

export function useComposerLayoutMode({
  composerLayoutMode,
  hasVisibleAttachments,
  isEditorMultiline,
  isVoiceLayoutActive,
  lockedLayout,
  singleLineInputWidth,
  singleLineTextWidth,
}: UseComposerLayoutModeInput): boolean {
  switch (composerLayoutMode) {
    case "multiline":
      return false;
    case "auto-single-line":
      if (hasVisibleAttachments || isEditorMultiline || isVoiceLayoutActive) {
        return false;
      }
      if (lockedLayout == null) {
        return singleLineInputWidth == null
          ? true
          : singleLineTextWidth + SINGLE_LINE_WIDTH_BUFFER <=
              singleLineInputWidth;
      }
      return lockedLayout === "single-line";
    default:
      return false;
  }
}
