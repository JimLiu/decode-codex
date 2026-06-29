// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Summary row shown when a steer is accepted during an active turn.
import { FormattedMessage } from "../../vendor/react-intl";
import { ConversationSummaryRow } from "../../boundaries/onboarding-commons-externals.facade";

export function SteeredConversationSummary() {
  return (
    <ConversationSummaryRow padding="offset">
      <span className="block truncate text-token-conversation-summary-trailing">
        <FormattedMessage
          id="localConversation.steered.summary"
          defaultMessage="Steered conversation"
          description="Summary label for a steer accepted during an active turn"
        />
      </span>
    </ConversationSummaryRow>
  );
}
