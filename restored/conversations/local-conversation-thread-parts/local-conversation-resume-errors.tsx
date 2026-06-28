// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Error classification and localized messages for local conversation resume failures.
import {
  getErrorMessage,
  parseConfigLoadError,
} from "../../utils/config-load-error";

type IntlFormatter = {
  formatMessage(
    descriptor: {
      defaultMessage: string;
      description?: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ): string;
};

type ResumeConfigErrorDetails = {
  detail: string;
  location: string;
};

export function formatResumeConversationError(
  intl: IntlFormatter,
  error: unknown,
) {
  let configErrorDetails = getResumeConfigErrorDetails(error);
  return configErrorDetails == null
    ? intl.formatMessage(
        {
          id: "localTaskRow.resumeError.v2",
          defaultMessage: "Failed to resume chat{br}{error}",
          description: "Error shown when resuming a local Codex task fails",
        },
        {
          br: <br />,
          error: getErrorMessage(error),
        },
      )
    : intl.formatMessage(
        {
          id: "localTaskRow.resumeConfigError",
          defaultMessage:
            "Codex can't load config.toml, so this thread can't resume.{br}Fix {location}: {detail}. After saving the file, reopen the thread.",
          description:
            "Error shown when a local Codex thread cannot resume because config.toml is invalid",
        },
        {
          br: <br />,
          location: configErrorDetails.location,
          detail: configErrorDetails.detail,
        },
      );
}

export function shouldAutoRetryResumeError(error: unknown) {
  return getResumeConfigErrorDetails(error) == null;
}

export function shouldShowResumeErrorToast({
  hasShownResumeError,
  isSubagentChildThread,
  shouldAutoRetry,
}: {
  hasShownResumeError: boolean;
  isSubagentChildThread: boolean;
  shouldAutoRetry: boolean;
}) {
  return !isSubagentChildThread && (!hasShownResumeError || !shouldAutoRetry);
}

function getResumeConfigErrorDetails(
  error: unknown,
): ResumeConfigErrorDetails | null {
  let configError = parseConfigLoadError(error);
  return configError == null
    ? null
    : {
        location:
          configError.filePath == null
            ? "config.toml"
            : configError.line == null || configError.column == null
              ? configError.filePath
              : `${configError.filePath}:${configError.line}:${configError.column}`,
        detail: configError.detail,
      };
}
