// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local-environment action item, path, and run-id helpers.

export interface LocalEnvironmentActionLike {
  name: string;
  platform?: string | null;
}

export interface LocalEnvironmentActionItem<
  Action extends LocalEnvironmentActionLike = LocalEnvironmentActionLike,
> {
  action: Action;
  commandId: string | null;
  runId: string;
}

export interface LocalEnvironmentActionPathOptions {
  relativePath: string | null | undefined;
  repoRoot: string | null | undefined;
  workspaceRoot: string | null | undefined;
  joinPath: (repoRoot: string, relativePath: string) => string;
}

export interface LocalEnvironmentActionKeyOptions
  extends LocalEnvironmentActionPathOptions {
  configPath: string | null | undefined;
}

export interface LocalEnvironmentActionRunIdOptions {
  conversationId: string;
  encodeEnvironmentKey: (environmentKey: string) => string;
  environmentKey: string;
  runId: string;
}

export function encodeLocalEnvironmentActionKey(
  environmentKey: string,
): string {
  let hash = 5381;
  for (let index = 0; index < environmentKey.length; index += 1) {
    hash = (hash * 33 + environmentKey.charCodeAt(index)) % 4294967296;
  }
  return hash.toString(36);
}

function isSupportedLocalEnvironmentPlatform(
  platform: string | null | undefined,
): boolean {
  return platform === "darwin" || platform === "linux" || platform === "win32";
}

export function shouldShowLocalEnvironmentActionForPlatform(
  action: LocalEnvironmentActionLike,
  currentPlatform: string | null | undefined,
): boolean {
  let actionPlatform = action.platform;
  return !actionPlatform ||
    !isSupportedLocalEnvironmentPlatform(currentPlatform)
    ? true
    : actionPlatform === currentPlatform;
}

export function createLocalEnvironmentActionItem<
  Action extends LocalEnvironmentActionLike,
>(
  action: Action,
  actionIndex: number,
  commandIds: readonly string[],
): LocalEnvironmentActionItem<Action> {
  let commandId = commandIds[actionIndex];
  return {
    action,
    commandId: commandId ?? null,
    runId: commandId ?? `environmentAction${actionIndex + 1}`,
  };
}

export function getLocalEnvironmentActionItems<
  Action extends LocalEnvironmentActionLike,
>(
  actions: readonly Action[] | null | undefined,
  currentPlatform: string | null | undefined,
  commandIds: readonly string[],
): LocalEnvironmentActionItem<Action>[] | null {
  return actions == null
    ? null
    : actions
        .filter((action) =>
          shouldShowLocalEnvironmentActionForPlatform(action, currentPlatform),
        )
        .map((action, actionIndex) =>
          createLocalEnvironmentActionItem(action, actionIndex, commandIds),
        );
}

export function resolveLocalEnvironmentActionCwd({
  joinPath,
  relativePath,
  repoRoot,
  workspaceRoot,
}: LocalEnvironmentActionPathOptions): string | null | undefined {
  return repoRoot && relativePath
    ? joinPath(repoRoot, relativePath)
    : (workspaceRoot ?? repoRoot);
}

export function resolveLocalEnvironmentActionKey({
  configPath,
  joinPath,
  relativePath,
  repoRoot,
  workspaceRoot,
}: LocalEnvironmentActionKeyOptions): string | null | undefined {
  return (
    resolveLocalEnvironmentActionCwd({
      joinPath,
      relativePath,
      repoRoot,
      workspaceRoot,
    }) ?? configPath
  );
}

export function createLocalEnvironmentActionRunId({
  conversationId,
  encodeEnvironmentKey,
  environmentKey,
  runId,
}: LocalEnvironmentActionRunIdOptions): string {
  return `environment-action:${conversationId}:${encodeEnvironmentKey(environmentKey)}:${runId}`;
}

export function sortLocalEnvironmentActionItemsByRecentActionNames<
  ActionItem extends LocalEnvironmentActionItem,
>(
  actionItems: readonly ActionItem[],
  recentActionNames: readonly string[],
): ActionItem[] {
  let recentActionIndexByName = new Map<string, number>();
  recentActionNames.forEach((actionName, recentActionIndex) => {
    if (!recentActionIndexByName.has(actionName))
      recentActionIndexByName.set(actionName, recentActionIndex);
  });
  return actionItems
    .map((actionItem, originalIndex) => ({
      actionItem,
      originalIndex,
      recentIndex:
        recentActionIndexByName.get(actionItem.action.name) ??
        Number.POSITIVE_INFINITY,
    }))
    .sort((leftActionItem, rightActionItem) =>
      leftActionItem.recentIndex === rightActionItem.recentIndex
        ? leftActionItem.originalIndex - rightActionItem.originalIndex
        : leftActionItem.recentIndex - rightActionItem.recentIndex,
    )
    .map(({ actionItem }) => actionItem);
}
