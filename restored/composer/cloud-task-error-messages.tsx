// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toast message builders for Codex task and cloud-task creation failures.

import type { ReactNode } from "react";
import type { IntlShape } from "../vendor/react-intl";
import {
  errorToString,
  parseCodexError,
} from "../boundaries/onboarding-commons-externals.facade";

const MISSING_GITHUB_CONNECTOR_LINK = "missing_github_connector_link";

export function getCloudTaskErrorToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  const parsed = error instanceof Error ? parseCodexError(error) : null;
  return parsed?.type === MISSING_GITHUB_CONNECTOR_LINK
    ? intl.formatMessage({
        id: "composer.cloudTaskError.missingGithubConnectorLink",
        defaultMessage:
          "No GitHub connection. Reconnect your GitHub account in Plugins",
        description:
          "Toast shown when creating a task fails because the user must reconnect GitHub from Plugins",
      })
    : intl.formatMessage(
        {
          id: "composer.cloudTaskError.v2",
          defaultMessage: "Error creating task{br}{error}",
          description: "Toast shown when we fail to create a Codex task",
        },
        {
          br: <br key="task-creation-error-break" />,
          error: parsed?.message ?? errorToString(error),
        },
      );
}

export function getCloudTaskCreationErrorToastMessage(
  error: unknown,
  intl: IntlShape,
): ReactNode {
  const parsed = error instanceof Error ? parseCodexError(error) : null;
  return parsed?.type === MISSING_GITHUB_CONNECTOR_LINK
    ? intl.formatMessage({
        id: "composer.cloudTaskCreationError.missingGithubConnectorLink",
        defaultMessage:
          "No GitHub connection. Reconnect your GitHub account in Plugins",
        description:
          "Toast shown when creating a cloud task fails because the user must reconnect GitHub from Plugins",
      })
    : intl.formatMessage(
        {
          id: "composer.cloudTaskCreationError.v2",
          defaultMessage: "Error creating cloud task{br}{error}",
          description: "Toast text shown when we failed to create a cloud task",
        },
        {
          br: <br key="cloud-task-creation-error-break" />,
          error: parsed?.message ?? errorToString(error),
        },
      );
}
