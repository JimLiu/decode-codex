// Restored from ref/webview/assets/ambient-suggestions-connected-apps-consent-DQKvmN_n.js
// Ambient suggestion connected-app consent signals and filtering helpers.
import { createPersistedSignal } from "../runtime/persisted-signal";

type ConnectedAppSuggestion = {
  isAccessible: boolean;
  isEnabled: boolean;
};

const HAS_SEEN_CONNECTED_APPS_CONSENT_KEY =
  "has-seen-ambient-suggestions-connected-apps-consent";
const HAS_DISMISSED_CONNECT_APPS_ROW_KEY =
  "has-dismissed-ambient-suggestions-connect-apps-row";

export const hasSeenAmbientSuggestionsConnectedAppsConsentSignal =
  createPersistedSignal(HAS_SEEN_CONNECTED_APPS_CONSENT_KEY, false);

export const hasDismissedAmbientSuggestionsConnectAppsRowSignal =
  createPersistedSignal(HAS_DISMISSED_CONNECT_APPS_ROW_KEY, false);

export function filterAccessibleEnabledAmbientSuggestionApps<
  TSuggestion extends ConnectedAppSuggestion,
>(suggestions: readonly TSuggestion[]): TSuggestion[] {
  return suggestions.filter(
    (suggestion) => suggestion.isAccessible && suggestion.isEnabled,
  );
}

function initAmbientSuggestionsConnectedAppsConsentChunk() {}

export { initAmbientSuggestionsConnectedAppsConsentChunk };
