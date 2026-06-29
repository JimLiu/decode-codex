// Restored from ref/.vite/build/main-r5HnecX_.js
// Temporary quit approval state used by updater installs and app shutdown.

type UnrefableTimer = ReturnType<typeof setTimeout> & {
  unref?: () => void;
};

export type QuitStateController = {
  allowQuitTemporarilyForUpdateInstall(options?: {
    allowWithoutPrompt?: boolean;
    skipDrainBeforeQuit?: boolean;
  }): void;
  canQuitWithoutPrompt(): boolean;
  markQuitApproved(): void;
  shouldSkipDrainBeforeQuit(): boolean;
};

export function createQuitStateController(): QuitStateController {
  let quitWithoutPromptAllowed = false;
  let resetTimer: UnrefableTimer | null = null;
  let skipDrainBeforeQuit = false;

  return {
    allowQuitTemporarilyForUpdateInstall: (options) => {
      quitWithoutPromptAllowed = options?.allowWithoutPrompt ?? true;
      skipDrainBeforeQuit = options?.skipDrainBeforeQuit ?? false;
      if (resetTimer != null) {
        clearTimeout(resetTimer);
      }
      resetTimer = setTimeout(() => {
        quitWithoutPromptAllowed = false;
        skipDrainBeforeQuit = false;
        resetTimer = null;
      }, 60_000) as UnrefableTimer;
      resetTimer.unref?.();
    },
    canQuitWithoutPrompt: () => quitWithoutPromptAllowed,
    markQuitApproved: () => {
      quitWithoutPromptAllowed = true;
    },
    shouldSkipDrainBeforeQuit: () => skipDrainBeforeQuit,
  };
}
