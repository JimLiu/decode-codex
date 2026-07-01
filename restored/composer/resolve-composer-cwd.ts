// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Working-directory resolvers for the composer. `resolveComposerCwd` derives the
// effective cwd for a new/attached thread from the layered prefill / project /
// workspace sources; `resolveComposerWorkspaceRoot` derives the suggestion-root
// list used for @-mention/skill lookup based on whether the thread is projectless.
import { isCodexHomeDirectory } from "../boundaries/onboarding-commons-externals.facade";

/** Sentinel cwd meaning "no project / projectless thread". */
export const PROJECTLESS_CWD = "~";
/** Sentinel cwd meaning "filesystem root / unset". */
export const ROOT_CWD = "/";

export interface ResolveComposerCwdInput {
  sharedPrefillCwd: string | null;
  locationPrefillCwd: string | null;
  localConversationCwd: string | null;
  selectedRemoteProjectPath: string | null;
  defaultCwd: string | null | undefined;
  workspaceRoots: string[];
  activeWorkspaceRoot: string | null;
  codexHome: string | null;
  canUseProjectlessThreads: boolean;
}

/**
 * Resolve the composer cwd by walking the priority chain: an explicit shared
 * prefill, the location-state prefill, the per-conversation override, the pinned
 * remote project path, the caller default, then the first workspace root that is
 * the user's Codex home. Falls back to the active workspace root (unless it is
 * the filesystem root) or, when projectless threads are allowed, the "~"
 * sentinel; otherwise "/".
 */
export function resolveComposerCwd({
  sharedPrefillCwd,
  locationPrefillCwd,
  localConversationCwd,
  selectedRemoteProjectPath,
  defaultCwd,
  workspaceRoots,
  activeWorkspaceRoot,
  codexHome,
  canUseProjectlessThreads,
}: ResolveComposerCwdInput): string {
  return (
    sharedPrefillCwd ||
    locationPrefillCwd ||
    localConversationCwd ||
    selectedRemoteProjectPath ||
    defaultCwd ||
    workspaceRoots.find((root) =>
      isCodexHomeDirectory(root, codexHome ?? undefined),
    ) ||
    (activeWorkspaceRoot && activeWorkspaceRoot !== ROOT_CWD
      ? activeWorkspaceRoot
      : canUseProjectlessThreads
        ? PROJECTLESS_CWD
        : ROOT_CWD)
  );
}

export interface ResolveComposerWorkspaceRootInput {
  isProjectlessComposerCwd: boolean;
  isProjectlessConversation: boolean;
  projectlessWorkspaceRoot: string | null | undefined;
  resolvedCwd: string;
  workspaceRootPaths: string[];
}

/**
 * Resolve the workspace-root list used for @-mention / skill suggestion lookup.
 * A projectless composer/thread resolves to the projectless workspace root (or an
 * empty list while it is still loading); otherwise the single resolved cwd.
 */
export function resolveComposerWorkspaceRoot({
  isProjectlessComposerCwd,
  isProjectlessConversation,
  projectlessWorkspaceRoot,
  resolvedCwd,
}: ResolveComposerWorkspaceRootInput): string[] {
  if (isProjectlessComposerCwd || isProjectlessConversation) {
    return projectlessWorkspaceRoot == null ? [] : [projectlessWorkspaceRoot];
  }
  return [resolvedCwd];
}
