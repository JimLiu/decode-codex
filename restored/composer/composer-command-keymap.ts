// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Jotai-scoped atoms + hooks that resolve command accelerators (incl. the dictation shortcut label).
import {
  appStoreScope,
  assertKnownCommandId,
  createParametricAtom,
  createScopedAtom,
  createScopedQueryAtom,
  DURATIONS,
  formatKeyboardShortcut,
  platformAtom,
  resolveCommandBindings,
  useScopedAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";

export const THREAD_COMMAND_IDS = [
  "thread1",
  "thread2",
  "thread3",
  "thread4",
  "thread5",
  "thread6",
  "thread7",
  "thread8",
  "thread9",
] as const;

export const commandKeymapStateAtom = createScopedQueryAtom(
  appStoreScope,
  "codex-command-keymap-state",
  { enabled: true, staleTime: DURATIONS.ONE_MINUTE },
);

export const commandAcceleratorsAtom = createParametricAtom(
  appStoreScope,
  (
    commandId: string,
    { get }: { get: (atom: unknown, param?: unknown) => any },
  ) => {
    assertKnownCommandId(commandId);
    const platform = get(platformAtom);
    return [
      ...resolveCommandBindings({
        commandId,
        keymapState: get(commandKeymapStateAtom).data,
        isMacOS: platform === "macOS",
      }),
    ];
  },
);

export const primaryCommandAcceleratorAtom = createParametricAtom(
  appStoreScope,
  (
    commandId: string,
    { get }: { get: (atom: unknown, param?: unknown) => any },
  ) => get(commandAcceleratorsAtom, commandId)[0] ?? null,
);

export const commandAcceleratorLabelsAtom = createParametricAtom(
  appStoreScope,
  (
    commandId: string,
    { get }: { get: (atom: unknown, param?: unknown) => any },
  ) => {
    const platform = get(platformAtom);
    return get(commandAcceleratorsAtom, commandId).map((accelerator: string) =>
      formatKeyboardShortcut(
        accelerator,
        platform === "macOS",
        platform === "linux",
      ),
    );
  },
);

export const primaryCommandAcceleratorLabelAtom = createParametricAtom(
  appStoreScope,
  (
    commandId: string,
    { get }: { get: (atom: unknown, param?: unknown) => any },
  ) => get(commandAcceleratorLabelsAtom, commandId)[0] ?? null,
);

export const threadShortcutLabelsAtom = createScopedAtom(
  appStoreScope,
  ({ get }: { get: (atom: unknown, param?: unknown) => any }) =>
    THREAD_COMMAND_IDS.map((commandId) =>
      get(primaryCommandAcceleratorLabelAtom, commandId),
    ),
);

export const commandHasBindingAtom = createParametricAtom(
  appStoreScope,
  (
    commandId: string,
    { get }: { get: (atom: unknown, param?: unknown) => any },
  ) =>
    get(commandKeymapStateAtom).data?.bindings.some(
      (binding: { command: string }) => binding.command === commandId,
    ) === true,
);

export function useDictationCommandAccelerator(): string | null {
  return useScopedAtomValue(
    primaryCommandAcceleratorAtom,
    "composer.startDictation",
  );
}

export function useDictationShortcutLabel(): string | null {
  const accelerator = useDictationCommandAccelerator();
  if (accelerator == null) return null;
  return formatKeyboardShortcut(accelerator);
}
