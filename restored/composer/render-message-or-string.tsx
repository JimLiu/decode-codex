// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders either a plain string or a react-intl message descriptor as JSX.
import type { ReactElement } from "react";
import { FormattedMessage, type MessageDescriptor } from "../vendor/react-intl";

export function renderMessageOrString(
  value: string | MessageDescriptor,
): ReactElement {
  return typeof value === "string" ? (
    <>{value}</>
  ) : (
    <FormattedMessage {...value} />
  );
}

export function initMessageOrStringHelpersChunk(): void {}
