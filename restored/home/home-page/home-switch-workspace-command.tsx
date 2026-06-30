// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Command-menu registration for switching the active home workspace.
import React, { useCallback, type ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { useNavigate } from "../../conversations/local-conversation-route-runtime";
import {
  CommandMenuGroup,
  CommandMenuItem,
  currentRouteSignal,
  navigateToProject,
  useCommandMenuRegistration,
  useSignalValue,
  useStore,
  workspaceGroupsSignal,
} from "../../boundaries/onboarding-commons-externals.facade";

interface HomeWorkspaceGroup {
  projectId: string;
  label?: string | null;
  [key: string]: unknown;
}

function getProjectKey(group: HomeWorkspaceGroup) {
  return `${group.projectId}:${group.label}`;
}

export function HomeSwitchWorkspaceCommand() {
  const appScopeStore = useStore(currentRouteSignal);
  const navigate = useNavigate();
  const groups = useSignalValue(workspaceGroupsSignal) as HomeWorkspaceGroup[];
  const dependencyKey = groups.map(getProjectKey).join("|");
  const render = useCallback(
    (close: () => void): ReactNode =>
      groups.length === 0 ? null : (
        <CommandMenuGroup
          heading={
            <span className="block px-2 pt-2 text-sm text-token-description-foreground">
              <FormattedMessage
                id="codex.commandMenu.switchWorkspace"
                defaultMessage="Switch project"
                description="Command group label in the command menu for switching the active workspace on the home page"
              />
            </span>
          }
          className="flex flex-col"
          style={{ gap: "var(--spacing)" }}
          key="group-switch-workspace"
        >
          {groups.map((group) => (
            <CommandMenuItem
              key={group.projectId}
              value={group.label ?? ""}
              title={group.label ?? ""}
              onSelect={() => {
                navigateToProject(appScopeStore, navigate, group);
                close();
              }}
            />
          ))}
        </CommandMenuGroup>
      ),
    [appScopeStore, navigate, groups],
  );

  useCommandMenuRegistration({
    id: "home-switch-workspace",
    order: 1000,
    enabled: groups.length > 0,
    dependencies: [dependencyKey],
    render,
  });

  return null;
}
