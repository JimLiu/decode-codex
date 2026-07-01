// Restored from ref/webview/assets/appgen-access-C6Cefphc.js
import { uniq } from "./uniq";
type AppgenAccessMode = string;
type AccessModeOption = {
  disabled: boolean;
  value: AppgenAccessMode;
};
type AppgenAccessGroupSource = "workspace" | "tenant" | string;
type AppgenAccessGroup = {
  id: string;
  source: AppgenAccessGroupSource;
};
type AppgenAllowedUser = {
  account_user_id: string;
  email: string | null | undefined;
};
type AppgenAccessPolicy = {
  access_mode: AppgenAccessMode;
  allowed_account_user_ids: string[];
  allowed_tenant_group_ids: string[];
  allowed_workspace_group_ids: string[];
  allowed_users: AppgenAllowedUser[];
  allowed_groups: AppgenAccessGroup[];
};
type AppgenAccessPolicyUpdate = {
  access_mode: AppgenAccessMode;
  allowed_user_emails?: string[];
  allowed_workspace_group_ids?: string[];
  allowed_tenant_group_ids?: string[];
};

export function initAppgenAccessPolicyRuntimeChunk(): void {}

export function buildAppgenAccessPolicyWithoutUser(
  accessPolicy: AppgenAccessPolicy,
  accountUserId: string | null | undefined,
): AppgenAccessPolicyUpdate {
  return {
    access_mode: accessPolicy.access_mode,
    allowed_user_emails: uniquePresentEmails(
      accessPolicy.allowed_users
        .filter((user) => user.account_user_id !== accountUserId)
        .map((user) => user.email),
    ),
  };
}
export function buildAppgenAccessPolicyWithoutGroup({
  accessGroups,
  accessPolicy,
  group,
  knownAccessGroups,
}: {
  accessGroups: AppgenAccessGroup[];
  accessPolicy: AppgenAccessPolicy;
  group: AppgenAccessGroup;
  knownAccessGroups: AppgenAccessGroup[];
}): AppgenAccessPolicyUpdate {
  return {
    access_mode: accessPolicy.access_mode,
    allowed_user_emails: uniquePresentEmails(
      accessPolicy.allowed_users.map((user) => user.email),
    ),
    ...buildGroupAccessPolicyFields({
      accessGroups,
      knownAccessGroups,
      existingGroups: accessPolicy.allowed_groups.filter(
        (allowedGroup) => allowedGroup.id !== group.id,
      ),
      removedGroups: [group],
      selectedGroups: [],
    }),
  };
}
export function summarizeAppgenAccessPolicy(
  accessPolicy: AppgenAccessPolicy | null | undefined,
): {
  accessMode: AppgenAccessMode;
  groupCount: number;
  userCount: number;
} {
  if (accessPolicy == null) {
    return {
      accessMode: "admins_only",
      groupCount: 0,
      userCount: 0,
    };
  }
  return {
    accessMode: accessPolicy.access_mode,
    groupCount:
      accessPolicy.allowed_tenant_group_ids.length +
      accessPolicy.allowed_workspace_group_ids.length,
    userCount: Math.max(accessPolicy.allowed_account_user_ids.length - 1, 0),
  };
}
export function buildAppgenAccessPolicyUpdate({
  accessGroups,
  accessMode,
  allowedUserEmails,
  canManageInvitees,
  existingGroups,
  knownAccessGroups,
  selectedGroups,
}: {
  accessGroups: AppgenAccessGroup[];
  accessMode: AppgenAccessMode;
  allowedUserEmails: Array<string | null | undefined>;
  canManageInvitees: boolean;
  existingGroups: AppgenAccessGroup[];
  knownAccessGroups: AppgenAccessGroup[];
  selectedGroups: AppgenAccessGroup[];
}): AppgenAccessPolicyUpdate {
  if (!canManageInvitees) {
    return {
      access_mode: accessMode,
    };
  }
  return {
    access_mode: accessMode,
    allowed_user_emails: uniquePresentEmails(allowedUserEmails),
    ...buildGroupAccessPolicyFields({
      accessGroups,
      knownAccessGroups,
      existingGroups,
      removedGroups: [],
      selectedGroups,
    }),
  };
}
export function getAppgenAccessModeOptions({
  availableAccessModes,
  currentAccessMode,
  isWorkspaceAccount,
}: {
  availableAccessModes?: AppgenAccessMode[] | null;
  currentAccessMode: AppgenAccessMode;
  isWorkspaceAccount: boolean;
}): AccessModeOption[] {
  const accessModes =
    availableAccessModes ??
    (isWorkspaceAccount ? ["workspace_all", "custom"] : []);
  const options = accessModes.map((value) => ({
    disabled: false,
    value,
  }));
  return accessModes.some((mode) => mode === currentAccessMode)
    ? options
    : [
        ...options,
        {
          disabled: true,
          value: currentAccessMode,
        },
      ];
}
function uniquePresentEmails(
  emails: Array<string | null | undefined>,
): string[] {
  return uniq(emails.flatMap((email) => (email == null ? [] : [email])));
}
function buildGroupAccessPolicyFields({
  accessGroups,
  knownAccessGroups,
  existingGroups,
  removedGroups,
  selectedGroups,
}: {
  accessGroups: AppgenAccessGroup[];
  knownAccessGroups: AppgenAccessGroup[];
  existingGroups: AppgenAccessGroup[];
  removedGroups: AppgenAccessGroup[];
  selectedGroups: AppgenAccessGroup[];
}): Pick<
  AppgenAccessPolicyUpdate,
  "allowed_workspace_group_ids" | "allowed_tenant_group_ids"
> {
  const groupsById = new Map(
    [...knownAccessGroups, ...accessGroups].map((group) => [group.id, group]),
  );
  const existingResolvedGroups = existingGroups.flatMap((group) => {
    const resolvedGroup = groupsById.get(group.id);
    return resolvedGroup == null ? [] : [resolvedGroup];
  });
  const removedResolvedGroups = removedGroups.flatMap((group) => {
    const resolvedGroup = groupsById.get(group.id);
    return resolvedGroup == null ? [] : [resolvedGroup];
  });
  const resultingGroups = [...existingResolvedGroups, ...selectedGroups];
  const changedGroups = [...selectedGroups, ...removedResolvedGroups];
  const touchedWorkspaceGroups = changedGroups.some(
    (group) => group.source === "workspace",
  );
  const touchedTenantGroups = changedGroups.some(
    (group) => group.source === "tenant",
  );
  return {
    ...(touchedWorkspaceGroups
      ? {
          allowed_workspace_group_ids: uniqueGroupIds(
            resultingGroups.filter((group) => group.source === "workspace"),
          ),
        }
      : {}),
    ...(touchedTenantGroups
      ? {
          allowed_tenant_group_ids: uniqueGroupIds(
            resultingGroups.filter((group) => group.source === "tenant"),
          ),
        }
      : {}),
  };
}
function uniqueGroupIds(groups: AppgenAccessGroup[]): string[] {
  return Array.from(new Set(groups.map((group) => group.id)));
}
