// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Button } from "../../boundaries/onboarding-commons-externals.facade";

type ThreadGoalStatus = "active" | "paused" | "completed" | "cancelled";

interface ThreadGoal {
  objective: string;
  status: ThreadGoalStatus;
}

export interface ThreadGoalBannerProps {
  conversationId: string;
  goal: ThreadGoal | null;
  hostId: string | null;
  permissionOverrideThreadSettings: boolean;
}

export function ThreadGoalBanner({
  conversationId: _conversationId,
  goal,
  hostId: _hostId,
  permissionOverrideThreadSettings: _permissionOverrideThreadSettings,
}: ThreadGoalBannerProps): React.ReactElement | null {
  if (goal == null) return null;

  const isPaused = goal.status === "paused";

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-token-input-border bg-token-input-background/90 px-4 py-2 text-sm text-token-foreground">
      <div className="flex flex-1 flex-col gap-0.5 overflow-hidden">
        <p className="text-xs font-medium text-token-text-secondary">
          {isPaused ? (
            <FormattedMessage
              id="composer.threadGoal.status.paused"
              defaultMessage="Paused goal"
            />
          ) : (
            <FormattedMessage
              id="composer.threadGoal.status.active"
              defaultMessage="Active goal"
            />
          )}
        </p>
        <p className="truncate">{goal.objective}</p>
      </div>
      <div className="flex shrink-0 gap-1">
        {isPaused ? (
          <Button color="ghostActive" size="composerSm">
            <FormattedMessage
              id="composer.threadGoal.resume"
              defaultMessage="Resume"
            />
          </Button>
        ) : (
          <Button color="ghostActive" size="composerSm">
            <FormattedMessage
              id="composer.threadGoal.pause"
              defaultMessage="Pause"
            />
          </Button>
        )}
        <Button color="ghostActive" size="composerSm">
          <FormattedMessage
            id="composer.threadGoal.clear"
            defaultMessage="Clear"
          />
        </Button>
      </div>
    </div>
  );
}
