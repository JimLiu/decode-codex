// Restored from ref/webview/assets/app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-Dacd6Pdw.js
// heartbeat-automation-permissions-CKjRbTXW chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-BdwGathX.js.
import {
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  conversationPermissionConfigSignal,
  latestTurnByConversationIdSignal,
} from "../boundaries/thread-context-inputs.facade";
import { createPersistedSignal } from "../runtime/persisted-signal";
export const heartbeatThreadPermissionsByIdSignal = createPersistedSignal(
  "heartbeat-thread-permissions-by-id",
  {},
);
function normalizeHeartbeatPermissions(value: any) {
  return value?.approvalPolicy == null ||
    value.approvalsReviewer == null ||
    value.sandboxPolicy == null
    ? null
    : {
        ...("activePermissionProfile" in value &&
        value.activePermissionProfile !== undefined
          ? {
              activePermissionProfile: value.activePermissionProfile,
            }
          : "permissions" in value && value.permissions != null
            ? {
                activePermissionProfile: {
                  id: value.permissions,
                  extends: null,
                },
              }
            : {}),
        ...("runtimeWorkspaceRoots" in value &&
        value.runtimeWorkspaceRoots != null
          ? {
              runtimeWorkspaceRoots: value.runtimeWorkspaceRoots,
            }
          : {}),
        approvalPolicy: value.approvalPolicy,
        approvalsReviewer: value.approvalsReviewer,
        sandboxPolicy: value.sandboxPolicy,
      };
}
export function getHeartbeatTurnPermissions(turn: any, config: any) {
  return (
    normalizeHeartbeatPermissions(config) ??
    (turn?.turnId == null || turn.params.collaborationMode == null
      ? null
      : normalizeHeartbeatPermissions(turn.params))
  );
}
export function resolveHeartbeatPermissions(
  turn: any,
  config: any,
  fallbackPermissions: any,
) {
  return (
    getHeartbeatTurnPermissions(turn, config) ?? fallbackPermissions ?? null
  );
}
export const serializedHeartbeatPermissionsSignal = createComputedSignalFamily(
  appScopeRoot,
  (conversationId: string, { get }: any) => {
    const permissions = getHeartbeatTurnPermissions(
      get(latestTurnByConversationIdSignal, conversationId),
      get(conversationPermissionConfigSignal, conversationId),
    );
    return permissions == null ? null : JSON.stringify(permissions);
  },
);
export function updateHeartbeatPermissionsByThreadId(
  permissionsByThreadId: Record<string, unknown>,
  threadId: string,
  permissions: unknown,
) {
  return permissions == null ||
    JSON.stringify(permissionsByThreadId[threadId]) ===
      JSON.stringify(permissions)
    ? permissionsByThreadId
    : {
        ...permissionsByThreadId,
        [threadId]: permissions,
      };
}

export function initHeartbeatPermissionsChunk(): void {}
