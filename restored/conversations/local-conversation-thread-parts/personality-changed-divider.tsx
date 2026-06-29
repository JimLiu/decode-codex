// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Synthetic divider shown when the assistant personality changes (friendly / pragmatic).
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { PersonalityChangedIcon } from "../../icons/personality-changed-icon";

export interface PersonalityChangedDividerProps {
  personality: "friendly" | "pragmatic";
}

export function PersonalityChangedDivider({
  personality,
}: PersonalityChangedDividerProps) {
  const intl = useIntl();
  const personalityLabel =
    personality === "friendly"
      ? intl.formatMessage({
          id: "composer.personalitySlashCommand.label.friendly",
          defaultMessage: "Friendly",
          description: "Label for the friendly personality",
        })
      : intl.formatMessage({
          id: "composer.personalitySlashCommand.label.pragmatic",
          defaultMessage: "Pragmatic",
          description: "Label for the pragmatic personality",
        });

  return (
    <div className="text-size-chat my-2 flex items-center gap-2 text-token-text-secondary">
      <div className="flex-1 border-t border-current/20" />
      <div className="flex items-center gap-1 whitespace-nowrap">
        <PersonalityChangedIcon className="icon-xs" />
        <FormattedMessage
          id="localConversation.personalityChanged"
          defaultMessage="Switched to {personality} personality"
          description="Synthetic item shown when the personality changes."
          values={{ personality: personalityLabel }}
        />
      </div>
      <div className="flex-1 border-t border-current/20" />
    </div>
  );
}
