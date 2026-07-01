// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Overlay shown over the composer surface while dragging files/images onto it.
import {
  clsx,
  PlatformGate,
} from "../boundaries/onboarding-commons-externals.facade";
import { FormattedMessage } from "../vendor/react-intl";

export interface ComposerDropOverlayProps {
  className?: string;
}

export function ComposerDropOverlay({ className }: ComposerDropOverlayProps) {
  const overlayClassName = clsx(
    "pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-token-editor-group-drop-background/60",
    className,
  );
  return (
    <div className={overlayClassName}>
      <div className="inline-flex items-center gap-1 rounded-md border border-token-border/50 bg-token-editor-group-drop-into-prompt-background px-3 py-1 text-sm text-token-editor-group-drop-into-prompt-foreground shadow">
        <PlatformGate extension>
          <FormattedMessage
            id="composer.dropOverlay.holdShift"
            defaultMessage="Hold {key} to drop"
            description="Overlay shown while dragging image without holding Shift"
            values={{
              key: (
                <span className="inline-flex items-center rounded-md border border-token-editor-group-drop-into-prompt-foreground/40 px-1.5 py-0.5 text-sm">
                  <FormattedMessage
                    id="composer.dropOverlay.shiftKey"
                    defaultMessage="Shift"
                    description="Label for Shift keycap in drag overlay"
                  />
                </span>
              ),
            }}
          />
        </PlatformGate>
        <PlatformGate electron>
          <FormattedMessage
            id="composer.dropOverlay.dropToAttach"
            defaultMessage="Drop to attach"
            description="Overlay shown while dragging a file over a drop target"
          />
        </PlatformGate>
      </div>
    </div>
  );
}
