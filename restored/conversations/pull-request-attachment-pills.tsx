// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pills shown on a sent user message for attached pull request checks and merge
// conflicts (the failing-checks pill and the merge-conflict pill).
import { FormattedMessage } from "../vendor/react-intl";
import { AttachmentPill } from "../composer/user-message-attachment-pills";
import { WarningIcon } from "../icons/warning-icon";

export interface PullRequestChecksAttachmentPillProps {
  checkNames: string[];
}

export function PullRequestChecksAttachmentPill({
  checkNames,
}: PullRequestChecksAttachmentPillProps) {
  const firstCheckName = checkNames[0];
  if (firstCheckName == null) {
    return null;
  }

  const label =
    checkNames.length === 1 ? (
      firstCheckName
    ) : (
      <FormattedMessage
        id="codex.userMessage.pullRequestChecksAttachment"
        defaultMessage="{checkName} +{count} more"
        description="Pill shown on a user message for multiple attached failing pull request checks"
        values={{ checkName: firstCheckName, count: checkNames.length - 1 }}
      />
    );

  return <AttachmentPill Icon={WarningIcon}>{label}</AttachmentPill>;
}

export interface PullRequestMergeConflictAttachmentPillProps {
  pullRequestNumber?: number | null;
}

export function PullRequestMergeConflictAttachmentPill({
  pullRequestNumber,
}: PullRequestMergeConflictAttachmentPillProps) {
  return (
    <AttachmentPill Icon={WarningIcon}>
      {pullRequestNumber == null ? (
        <FormattedMessage
          id="codex.userMessage.pullRequestMergeConflictAttachmentWithoutNumber"
          defaultMessage="Merge conflicts"
          description="Pill shown on a user message for attached pull request merge conflicts without a pull request number"
        />
      ) : (
        <FormattedMessage
          id="codex.userMessage.pullRequestMergeConflictAttachment"
          defaultMessage="Merge conflicts - PR #{number}"
          description="Pill shown on a user message for attached pull request merge conflicts"
          values={{ number: pullRequestNumber }}
        />
      )}
    </AttachmentPill>
  );
}
