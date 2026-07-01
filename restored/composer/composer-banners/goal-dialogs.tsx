// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Button,
} from "../../boundaries/onboarding-commons-externals.facade";

interface GoalDraft {
  objective: string;
}

interface GoalReplacementConfirmation {
  draft: GoalDraft;
}

export interface GoalReplacementConfirmationDialogProps {
  confirmation: GoalReplacementConfirmation | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function GoalReplacementConfirmationDialog({
  confirmation,
  onClose,
  onConfirm,
}: GoalReplacementConfirmationDialogProps): React.ReactElement | null {
  if (confirmation == null) return null;
  return (
    <Dialog
      open={true}
      size="compact"
      showDialogClose={false}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogBody
        as="form"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          onConfirm();
        }}
      >
        <DialogHeader
          title={
            <FormattedMessage
              id="composer.threadGoal.replaceConfirmation.title"
              defaultMessage="Replace current goal?"
            />
          }
          subtitle={
            <FormattedMessage
              id="composer.threadGoal.replaceConfirmation.subtitle"
              defaultMessage="This will keep the thread but replace the saved goal with your current composer text"
            />
          }
        />
        <div className="line-clamp-4 rounded-lg bg-token-bg-secondary px-3 py-2 text-sm text-token-foreground">
          {confirmation.draft.objective}
        </div>
        <DialogFooter>
          <Button type="button" color="secondary" onClick={onClose}>
            <FormattedMessage
              id="composer.threadGoal.replaceConfirmation.cancel"
              defaultMessage="Cancel"
            />
          </Button>
          <Button type="submit" color="primary">
            <FormattedMessage
              id="composer.threadGoal.replaceConfirmation.confirm"
              defaultMessage="Replace goal"
            />
          </Button>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
}

interface ThreadGoal {
  objective: string;
  status: string;
}

export interface GoalResumePromptDialogProps {
  goal: ThreadGoal | null;
  onCancel: () => void;
  onResume: () => void;
}

export function GoalResumePromptDialog({
  goal,
  onCancel,
  onResume,
}: GoalResumePromptDialogProps): React.ReactElement | null {
  if (goal == null) return null;
  const isPaused = goal.status === "paused";
  const title = isPaused ? (
    <FormattedMessage
      id="composer.threadGoal.resume.titlePaused"
      defaultMessage="Resume paused goal?"
    />
  ) : (
    <FormattedMessage
      id="composer.threadGoal.resume.title"
      defaultMessage="Resume goal?"
    />
  );
  return (
    <Dialog
      open={true}
      size="compact"
      showDialogClose={false}
      onOpenChange={(open) => {
        if (!open) onCancel();
      }}
    >
      <DialogBody
        as="form"
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          onResume();
        }}
      >
        <DialogHeader
          title={title}
          subtitle={
            <FormattedMessage
              id="composer.threadGoal.resume.subtitle"
              defaultMessage="Codex will keep working toward this goal when the thread is idle"
            />
          }
        />
        <div className="line-clamp-4 rounded-lg bg-token-bg-secondary px-3 py-2 text-sm text-token-foreground">
          {goal.objective}
        </div>
        <DialogFooter>
          <Button type="button" color="secondary" onClick={onCancel}>
            {isPaused ? (
              <FormattedMessage
                id="composer.threadGoal.resume.cancelPaused"
                defaultMessage="Keep paused"
              />
            ) : (
              <FormattedMessage
                id="composer.threadGoal.resume.cancel"
                defaultMessage="Not now"
              />
            )}
          </Button>
          <Button type="submit" color="primary">
            <FormattedMessage
              id="composer.threadGoal.resume.confirm"
              defaultMessage="Resume goal"
            />
          </Button>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
}
