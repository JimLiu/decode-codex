// Restored from ref/webview/assets/plugin-uninstall-dialog-B-C7-Phm.js
// Also matches ref/webview/assets/plugin-uninstall-dialog-B0r3acO1.js.
// Confirmation dialog for uninstalling or removing a plugin.

import type { ReactNode } from "react";
import { once } from "../runtime/commonjs-interop";
import { defineMessages, FormattedMessage } from "../vendor/react-intl";
import { Button } from "./button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "./dialog-layout";
type PluginUninstallDialogProps = {
  dialogMode?: "card" | "detail";
  isDisabling?: boolean;
  isUninstalling?: boolean;
  onConfirm: () => void;
  onDisable?: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  pluginDisplayName: ReactNode;
};
export const initPluginUninstallDialogChunk = once(() => {});
const messages = defineMessages({
  disable: {
    id: "plugins.card.uninstallConfirm.disable",
    defaultMessage: "Disable plugin",
    description: "Disable button label for the plugin remove dialog",
  },
  confirmTitle: {
    id: "plugins.card.uninstallConfirm.title",
    defaultMessage: "Uninstall {name} plugin?",
    description: "Title for the plugin uninstall confirmation dialog",
  },
  removeTitle: {
    id: "plugins.detail.removeDialog.title",
    defaultMessage: "Remove {name} plugin from Codex",
    description: "Title for the plugin remove dialog on the detail page",
  },
  confirmDescription: {
    id: "plugins.card.uninstallConfirm.description",
    defaultMessage:
      "This will uninstall the plugin, but it will not uninstall any bundled apps.",
    description: "Description for the plugin uninstall confirmation dialog",
  },
  removeDescription: {
    id: "plugins.detail.removeDialog.description",
    defaultMessage:
      "This removes the plugin from Codex. Bundled apps will remain installed.",
    description: "Description for the plugin remove dialog on the detail page",
  },
  cancel: {
    id: "plugins.card.uninstallConfirm.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for the plugin uninstall dialog",
  },
  confirm: {
    id: "plugins.card.uninstallConfirm.confirm",
    defaultMessage: "Uninstall",
    description: "Confirm button label for the plugin uninstall dialog",
  },
  removeConfirm: {
    id: "plugins.detail.removeDialog.confirm",
    defaultMessage: "Remove from Codex",
    description:
      "Confirm button label for the plugin remove dialog on the detail page",
  },
});
export function PluginUninstallDialog({
  dialogMode = "card",
  isDisabling = false,
  isUninstalling,
  onDisable,
  onConfirm,
  onOpenChange,
  open,
  pluginDisplayName,
}: PluginUninstallDialogProps) {
  const isDetailDialog = dialogMode === "detail";
  const title = (
    <FormattedMessage
      {...(isDetailDialog ? messages.removeTitle : messages.confirmTitle)}
      values={{
        name: (
          <strong
            key="plugin-name"
            className="font-semibold text-token-text-primary"
          >
            {pluginDisplayName}
          </strong>
        ),
      }}
    />
  );
  const description = (
    <FormattedMessage
      {...(isDetailDialog
        ? messages.removeDescription
        : messages.confirmDescription)}
    />
  );
  return (
    <DialogLayout
      open={open}
      contentProps={{
        "aria-describedby": undefined,
      }}
      onOpenChange={onOpenChange}
    >
      <DialogBody>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogSection>
          <DialogHeader
            title={title}
            subtitle={description}
            subtitleClassName="mt-2"
          />
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="outline" onClick={() => onOpenChange(false)}>
              <FormattedMessage {...messages.cancel} />
            </Button>
            {onDisable == null ? null : (
              <Button color="outline" loading={isDisabling} onClick={onDisable}>
                <FormattedMessage {...messages.disable} />
              </Button>
            )}
            <Button color="danger" loading={isUninstalling} onClick={onConfirm}>
              <FormattedMessage
                {...(isDetailDialog
                  ? messages.removeConfirm
                  : messages.confirm)}
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
