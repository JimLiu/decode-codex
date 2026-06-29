// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Dialog shown when undoing/reapplying a turn diff fails, listing the applied,
// skipped, and conflicted files plus a short git error summary.

import type { ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooterRow,
  DialogHeaderRow,
  DialogSection,
  LinkArrowIcon,
  openFileInEditor,
  useHostRequest,
  VisuallyHiddenDescription,
  VisuallyHiddenTitle,
  WarningCircleIcon,
} from "../../boundaries/onboarding-commons-externals.facade";

export type PatchAction = "undo" | "reapply";

export interface PatchActionResult {
  errorCode?: string;
  appliedPaths: string[];
  skippedPaths: string[];
  conflictedPaths: string[];
  execOutput?: { output?: string };
}

export interface PatchActionFailure {
  action: PatchAction;
  result: PatchActionResult;
}

export interface PatchFailureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  failure: PatchActionFailure | null;
  cwd: string | null;
  hostId: string;
}

export function PatchFailureDialog({
  open,
  onOpenChange,
  failure,
  cwd,
  hostId,
}: PatchFailureDialogProps) {
  if (failure == null) return null;
  const { action, result } = failure;
  const hasAnyPaths =
    result.appliedPaths.length > 0 ||
    result.skippedPaths.length > 0 ||
    result.conflictedPaths.length > 0;
  const fallbackErrorLine = firstNonEmptyTrimmedLine(result.execOutput?.output);

  const hiddenTitle = (
    <VisuallyHiddenTitle className="sr-only">
      <PatchFailureTitle action={action} result={result} />
    </VisuallyHiddenTitle>
  );
  const hiddenDescription = (
    <VisuallyHiddenDescription className="sr-only">
      <PatchFailureDescription
        action={action}
        result={result}
        hasAnyPaths={hasAnyPaths}
        fallbackErrorLine={fallbackErrorLine}
      />
    </VisuallyHiddenDescription>
  );

  const header = (
    <DialogSection>
      <DialogHeaderRow
        icon={<WarningCircleIcon className="icon-sm text-token-charts-red" />}
        iconBackgroundClassName="bg-token-charts-red/10"
        title={<PatchFailureTitle action={action} result={result} />}
      />
    </DialogSection>
  );

  const description = (
    <DialogSection>
      <div className="text-sm text-token-description-foreground">
        <PatchFailureDescription
          action={action}
          result={result}
          hasAnyPaths={hasAnyPaths}
          fallbackErrorLine={fallbackErrorLine}
        />
      </div>
    </DialogSection>
  );

  const pathDetails = hasAnyPaths ? (
    <DialogSection className="max-h-[40vh] overflow-y-auto">
      <div className="flex flex-col gap-3">
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-foreground"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchAppliedPathsHeading"
              defaultMessage="Applied cleanly ({count})"
              description="Heading for files where a patch action was applied cleanly"
              values={{ count: result.appliedPaths.length }}
            />
          }
          paths={result.appliedPaths}
        />
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-description-foreground"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchSkippedPathsHeading"
              defaultMessage="Skipped ({count})"
              description="Heading for files skipped during a patch action"
              values={{ count: result.skippedPaths.length }}
            />
          }
          paths={result.skippedPaths}
        />
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-charts-red"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchConflictedPathsHeading"
              defaultMessage="Conflicts ({count})"
              description="Heading for files with conflicts during a patch action"
              values={{ count: result.conflictedPaths.length }}
            />
          }
          paths={result.conflictedPaths}
        />
      </div>
    </DialogSection>
  ) : null;

  const footer = (
    <DialogSection>
      <DialogFooterRow>
        <Button color="primary" onClick={() => onOpenChange(false)}>
          <FormattedMessage
            id="codex.unifiedDiff.patchFailureDialogClose"
            defaultMessage="Close"
            description="Close button label for the patch action failure dialog"
          />
        </Button>
      </DialogFooterRow>
    </DialogSection>
  );

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      triggerAsChild={false}
      size="compact"
    >
      {hiddenTitle}
      {hiddenDescription}
      <DialogBody>
        {header}
        {description}
        {pathDetails}
        {footer}
      </DialogBody>
    </Dialog>
  );
}

interface PatchFailureMessageProps {
  action: PatchAction;
  result: PatchActionResult;
}

export function PatchFailureTitle({
  action,
  result,
}: PatchFailureMessageProps) {
  if (result.errorCode === "not-git-repo") {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchNotGitRepo"
        defaultMessage="Undo requires a Git repository"
        description="Dialog title shown when trying to undo a diff outside a Git repository"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchNotGitRepo"
        defaultMessage="Reapply requires a Git repository"
        description="Dialog title shown when trying to reapply a diff outside a Git repository"
      />
    );
  }
  if (result.appliedPaths.length > 0) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchPartial"
        defaultMessage="Some changes reverted"
        description="Dialog title shown when reverting a diff partially succeeds"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchPartial"
        defaultMessage="Some changes reapplied"
        description="Dialog title shown when reapplying a diff partially succeeds"
      />
    );
  }
  if (result.skippedPaths.length > 0 && result.conflictedPaths.length === 0) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchNoChanges"
        defaultMessage="No changes reverted"
        description="Dialog title shown when reverting a diff made no changes"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchNoChanges"
        defaultMessage="No changes reapplied"
        description="Dialog title shown when reapplying a diff made no changes"
      />
    );
  }
  return action === "undo" ? (
    <FormattedMessage
      id="codex.unifiedDiff.revertPatchError"
      defaultMessage="Failed to revert changes"
      description="Dialog title shown when reverting a diff fails"
    />
  ) : (
    <FormattedMessage
      id="codex.unifiedDiff.reapplyPatchError"
      defaultMessage="Failed to reapply changes"
      description="Dialog title shown when reapplying a diff fails"
    />
  );
}

interface PatchFailureDescriptionProps extends PatchFailureMessageProps {
  hasAnyPaths: boolean;
  fallbackErrorLine: string | null;
}

export function PatchFailureDescription({
  action,
  result,
  hasAnyPaths,
  fallbackErrorLine,
}: PatchFailureDescriptionProps) {
  if (result.errorCode === "not-git-repo") {
    return (
      <FormattedMessage
        id="codex.unifiedDiff.patchNotGitRepoDescription"
        defaultMessage="This action only works when running in a Git repository."
        description="Dialog description shown when patch apply/revert is attempted outside a Git repository"
      />
    );
  }
  if (hasAnyPaths) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.patchFailureDetailsIntroRevert"
        defaultMessage="There were issues reverting some files"
        description="Intro text for the patch action failure dialog when file details are available"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.patchFailureDetailsIntroReapply"
        defaultMessage="There were issues reapplying some files"
        description="Intro text for the patch action failure dialog when file details are available"
      />
    );
  }
  if (fallbackErrorLine) {
    return (
      <FormattedMessage
        id="codex.unifiedDiff.patchErrorOutputSummary"
        defaultMessage="Git apply error: {message}"
        description="Dialog details showing a short git apply error line when file-level patch details are unavailable"
        values={{ message: fallbackErrorLine }}
      />
    );
  }
  return (
    <FormattedMessage
      id="codex.unifiedDiff.patchFailureNoDetails"
      defaultMessage="No file details were returned for this patch action."
      description="Fallback dialog text when patch action fails without file details"
    />
  );
}

interface PatchPathGroupProps {
  toneClassName: string;
  heading: ReactNode;
  paths: string[];
  cwd: string | null;
  hostId: string;
}

export function PatchPathGroup({
  toneClassName,
  heading,
  paths,
  cwd,
  hostId,
}: PatchPathGroupProps) {
  const openFile = useHostRequest("open-file");
  if (paths.length === 0) return null;
  return (
    <div className="flex flex-col gap-1">
      <div className={classNames("text-sm font-medium", toneClassName)}>
        {heading}
      </div>
      <ul className="flex flex-col gap-0.5 text-sm">
        {paths.map((path) => (
          <li key={path}>
            <button
              type="button"
              className="group w-full cursor-interaction rounded px-1 py-0.5 text-left focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
              title={path}
              onClick={() => {
                openFileInEditor({
                  path,
                  cwd,
                  hostId,
                  openFile: openFile.mutate,
                });
              }}
            >
              <span className="flex items-center gap-1">
                <span className="group-hover:text-token-link-foreground group-focus-visible:text-token-link-foreground min-w-0 truncate transition-colors">
                  {path}
                </span>
                <LinkArrowIcon className="text-token-link-foreground icon-2xs hidden shrink-0 group-hover:block group-focus-visible:block" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function firstNonEmptyTrimmedLine(
  output: string | undefined | null,
): string | null {
  if (!output) return null;
  const line = output
    .split(/\r?\n/)
    .map((item) => item.trim())
    .find((item) => item.length > 0);
  return line ? (line.length <= 180 ? line : `${line.slice(0, 179)}…`) : null;
}
