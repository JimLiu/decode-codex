// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Subscribes to the user's custom prompt (slash-command) library. Keeps a shared
// atom in sync with the "custom-prompts-updated" app event and returns the
// current prompt list for use by the composer submit / suggestion pipeline.
import {
  customPromptsAtom,
  useAppEvent,
  useAtomValue,
  useSetAtom,
} from "../boundaries/onboarding-commons-externals.facade";

export function useComposerPrompts(): unknown[] {
  const setCustomPrompts = useSetAtom(customPromptsAtom);
  useAppEvent(
    "custom-prompts-updated",
    (event: { prompts: unknown[] }) => {
      setCustomPrompts(event.prompts);
    },
    [setCustomPrompts],
  );
  return useAtomValue(customPromptsAtom);
}
