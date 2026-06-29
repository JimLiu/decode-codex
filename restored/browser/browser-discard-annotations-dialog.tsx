// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Confirmation dialog shown before discarding pending in-app browser annotations.

import {
  Dialog,
  DialogForm,
  DialogHeading,
  DialogBody,
  DialogTitleBlock,
  DialogSubtitle,
  DialogFooter,
} from "../boundaries/onboarding-commons-externals.facade";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";

interface DiscardBrowserAnnotationsDialogProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function DiscardBrowserAnnotationsDialog({
  onClose,
  onConfirm,
}: DiscardBrowserAnnotationsDialogProps) {
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
    onConfirm();
  };

  const title = (
    <DialogHeading className="contents">
      <FormattedMessage
        id="thread.browser.tweaks.cancelConfirmTitle"
        defaultMessage="Discard all pending annotations?"
        description="Title for the confirmation dialog shown before discarding pending in-app browser annotations"
      />
    </DialogHeading>
  );

  const header = (
    <DialogBody>
      <DialogTitleBlock
        title={title}
        subtitle={
          <DialogSubtitle className="contents">
            <FormattedMessage
              id="thread.browser.tweaks.cancelConfirmSubtitle"
              defaultMessage="All edits will be removed from the page"
              description="Subtitle for the confirmation dialog shown before discarding pending in-app browser annotations"
            />
          </DialogSubtitle>
        }
        titleSize="base"
        subtitleSize="sm"
      />
    </DialogBody>
  );

  const cancelLabel = (
    <FormattedMessage
      id="thread.browser.tweaks.cancelConfirmKeep"
      defaultMessage="Cancel"
      description="Cancel button for the confirmation dialog shown before discarding pending in-app browser annotations"
    />
  );

  const cancelButton = (
    <Button color="secondary" onClick={onClose}>
      {cancelLabel}
    </Button>
  );

  const confirmButton = (
    <Button color="danger" type="submit">
      <FormattedMessage
        id="thread.browser.tweaks.cancelConfirmClear"
        defaultMessage="Discard"
        description="Confirm button for the confirmation dialog shown before discarding pending in-app browser annotations"
      />
    </Button>
  );

  const footer = (
    <DialogBody className="pt-2">
      <DialogFooter>
        {cancelButton}
        {confirmButton}
      </DialogFooter>
    </DialogBody>
  );

  const form = (
    <DialogForm as="form" className="py-4" onSubmit={handleSubmit}>
      {header}
      {footer}
    </DialogForm>
  );

  return (
    <Dialog
      open
      onOpenChange={handleOpenChange}
      showDialogClose={false}
      size="compact"
    >
      {form}
    </Dialog>
  );
}
