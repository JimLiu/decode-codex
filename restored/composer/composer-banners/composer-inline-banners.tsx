// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
import React, { type ReactNode } from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Button,
} from "../../boundaries/onboarding-commons-externals.facade";

export function CloudModeIndicator(): null {
  return null;
}

export interface PluginContextLoaderProps {
  composerController: unknown;
  hostId: string | null;
  roots: unknown[];
}

export function PluginContextLoader({
  composerController: _composerController,
  hostId: _hostId,
  roots: _roots,
}: PluginContextLoaderProps): null {
  return null;
}

export interface SideChatPromptProps {
  enabled: boolean;
  onOpenSideChat: () => void;
}

export function SideChatPrompt({
  enabled: _enabled,
  onOpenSideChat: _onOpenSideChat,
}: SideChatPromptProps): null {
  useIntl();
  return null;
}

export interface BlockedSubmitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message?: ReactNode;
}

export function BlockedSubmitDialog({
  open,
  onOpenChange,
  message,
}: BlockedSubmitDialogProps): React.ReactElement | null {
  if (!open) return null;
  return (
    <Dialog
      open={true}
      size="compact"
      showDialogClose={false}
      onOpenChange={onOpenChange}
    >
      <DialogBody>
        <DialogHeader
          title={
            <FormattedMessage
              id="composer.blockedSubmit.title"
              defaultMessage="Unable to send message"
            />
          }
          subtitle={message}
        />
        <DialogFooter>
          <Button color="primary" onClick={() => onOpenChange(false)}>
            <FormattedMessage
              id="composer.blockedSubmit.ok"
              defaultMessage="OK"
            />
          </Button>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
}
