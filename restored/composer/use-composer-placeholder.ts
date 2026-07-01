// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Selects the composer input placeholder message for the current mode/follow-up
// state (goal mode, plan mode, an explicit override, new local/cloud task, or a
// follow-up variant). Pure function — returns the formatted placeholder string.

export type ComposerMode = "local" | "worktree" | "cloud";

interface FormatMessageDescriptor {
  id: string;
  defaultMessage: string;
  description?: string;
}

interface ComposerIntl {
  formatMessage: (descriptor: FormatMessageDescriptor) => string;
}

export interface UseComposerPlaceholderInput {
  intl: ComposerIntl;
  followUpType: "local" | "cloud" | undefined;
  composerMode: ComposerMode;
  cloudStartingState: string | null | undefined;
  isBackgroundSubagentsPanelVisible?: boolean;
  isGoalModeActive: boolean;
  isPlanModeActive: boolean;
  placeholderText: string | null | undefined;
}

export function useComposerPlaceholder({
  intl,
  followUpType,
  composerMode,
  cloudStartingState,
  isBackgroundSubagentsPanelVisible = false,
  isGoalModeActive,
  isPlanModeActive,
  placeholderText,
}: UseComposerPlaceholderInput): string {
  if (isGoalModeActive) {
    return intl.formatMessage({
      id: "composer.placeholder.goal",
      defaultMessage:
        "Describe your goal, define measurable outcomes for best results",
      description:
        "Composer placeholder text when the user is setting a Codex thread goal",
    });
  }
  if (isPlanModeActive) {
    return intl.formatMessage({
      id: "composer.placeholder.plan",
      defaultMessage: "Describe your task to generate a plan...",
      description: "Composer placeholder text when Plan mode is selected",
    });
  }
  if (placeholderText != null) return placeholderText;

  switch (followUpType) {
    case undefined:
      return composerMode === "cloud"
        ? intl.formatMessage({
            id: "composer.placeholder.newTask.cloud",
            defaultMessage: "Ask Codex to do anything in the cloud",
            description: "Composer placeholder text for new Codex Cloud task",
          })
        : intl.formatMessage({
            id: "composer.placeholder.newTask.locally.v2",
            defaultMessage:
              "Ask Codex anything. @ to use plugins or mention files",
            description:
              "Placeholder text for Codex input composer, telling the user they can ask Codex to do anything",
          });
    case "cloud":
      return composerMode === "local"
        ? intl.formatMessage({
            id: "composer.placeholder.cloudFollowUp.local",
            defaultMessage:
              "Create a new local task that references this cloud task",
            description:
              "Placeholder text in the Codex input composer when following up on a Codex Cloud task locally",
          })
        : cloudStartingState === "working-tree"
          ? intl.formatMessage({
              id: "composer.placeholder.cloudFollowUp.workingTree",
              defaultMessage:
                "Create a new cloud task that includes your current code and will reference this task",
              description:
                "Placeholder text in the Codex input composer when starting a new cloud Codex task that includes the users changes and will reference a previous cloud task",
            })
          : intl.formatMessage({
              id: "composer.placeholder.cloudFollowUp.directFollowUp",
              defaultMessage: "Follow-up to this cloud task",
              description:
                "Placeholder text in the Codex input composer when following up to a cloud Codex task",
            });
    case "local":
      if (composerMode === "cloud") {
        return intl.formatMessage({
          id: "composer.placeholder.localFollowUp.cloud",
          defaultMessage: "Follow-up in a new cloud task",
          description:
            "Placeholder text in the Codex input composer when in cloud mode",
        });
      }
      return isBackgroundSubagentsPanelVisible
        ? intl.formatMessage({
            id: "composer.placeholder.localFollowUp.locallyWithAgents",
            defaultMessage: "Ask for follow up changes or @ to tag an agent",
            description:
              "Placeholder text in the Codex input composer when in local mode with visible background agents",
          })
        : intl.formatMessage({
            id: "composer.placeholder.localFollowUp.locally",
            defaultMessage: "Ask for follow-up changes",
            description:
              "Placeholder text in the Codex input composer when in local mode",
          });
    default:
      return "";
  }
}
