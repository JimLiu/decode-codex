// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-connection step UI for the Electron conversational-onboarding flow: a
// permission card asking the user to connect a third-party app, the surrounding
// request/intro orchestration, and the start-error retry affordance.
import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { ConversationalOnboardingStreamingIntro } from "./conversational-onboarding-streaming-intro";
// Cross-slice UI primitives owned by sibling chunks not yet restored; imported
// here by role from the chunk boundary facade. `ConnectorLogoImage` renders a
// known third-party app logo (alias `tp`); `AppPlaceholderIcon` is the generic
// fallback glyph used while the logo is unknown (alias `Sm`).
import {
  ConnectorLogoImage,
  AppPlaceholderIcon,
} from "../boundaries/onboarding-commons-externals.facade";

type ConversationalOnboardingPermissionStatus =
  | "pending"
  | "denied"
  | "granted";

type ConversationalOnboardingAppInfo = unknown;

type AppConnectCardProps = {
  actions: ReactNode;
  icon: ReactNode;
  subtitle?: ReactNode;
  title: ReactNode;
};

function AppConnectCard({
  actions,
  icon,
  subtitle,
  title,
}: AppConnectCardProps) {
  return (
    <div className="flex w-full min-w-0 items-center gap-4 rounded-2xl border border-token-border-default bg-token-main-surface-primary p-4 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F4F4] text-token-text-secondary dark:bg-[#303030]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-lg leading-6 text-token-text-primary">
          {title}
        </div>
        {subtitle == null ? null : (
          <div className="truncate text-base leading-5 text-token-text-tertiary">
            {subtitle}
          </div>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2 [&_button]:w-fit [&_button]:px-3 [&_button]:text-lg">
        {actions}
      </div>
    </div>
  );
}

type AppConnectRequestProps = {
  declinedMessage: ReactNode;
  executionFailed: boolean;
  intro: ReactNode;
  permissionStatus: ConversationalOnboardingPermissionStatus;
  request: ReactNode;
  requestError: ReactNode;
  requestFailed: boolean;
  showRequest: boolean;
  onIntroComplete?: (() => void) | null;
  onRetryTask: () => void;
};

function AppConnectRequest({
  declinedMessage,
  executionFailed,
  intro,
  permissionStatus,
  request,
  requestError,
  requestFailed,
  showRequest,
  onIntroComplete,
  onRetryTask,
}: AppConnectRequestProps) {
  if (permissionStatus !== "pending") {
    if (executionFailed) {
      return <AppConnectStartError onRetry={onRetryTask} />;
    }
    return permissionStatus === "denied" ? <>{declinedMessage}</> : null;
  }
  return (
    <>
      <ConversationalOnboardingStreamingIntro
        animate={true}
        onComplete={onIntroComplete}
      >
        {intro}
      </ConversationalOnboardingStreamingIntro>
      {showRequest ? (
        <div className="w-full max-w-[536px]">{request}</div>
      ) : null}
      {showRequest && requestFailed ? (
        <p className="text-token-text-danger text-sm">{requestError}</p>
      ) : null}
    </>
  );
}

type AppConnectStepProps = {
  appInfo: ConversationalOnboardingAppInfo;
  appName: string | null;
  appPluginName: string;
  declinedMessage: ReactNode;
  description?: ReactNode;
  executionFailed: boolean;
  intro: ReactNode;
  isConnecting: boolean;
  isLoading: boolean;
  isReady: boolean;
  permissionStatus: ConversationalOnboardingPermissionStatus;
  requestFailed: boolean;
  showRequest: boolean;
  onCancel: () => void;
  onConnect: () => void;
  onDismiss: () => void;
  onIntroComplete?: (() => void) | null;
  onRetryTask: () => void;
};

function AppConnectStep({
  appInfo,
  appName,
  appPluginName,
  declinedMessage,
  description,
  executionFailed,
  intro,
  isConnecting,
  isLoading,
  isReady,
  permissionStatus,
  requestFailed,
  showRequest,
  onCancel,
  onConnect,
  onDismiss,
  onIntroComplete,
  onRetryTask,
}: AppConnectStepProps) {
  const request = (
    <AppConnectPermissionCard
      appInfo={appInfo}
      appName={appName}
      appPluginName={appPluginName}
      description={description}
      isConnecting={isConnecting}
      isLoading={isLoading}
      isReady={isReady}
      onCancel={onCancel}
      onConnect={onConnect}
      onDismiss={onDismiss}
    />
  );
  const requestError = (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appConnectFailed"
      defaultMessage="I couldn’t finish that connection. Try again or connect it later in Settings."
      description="Error shown when an app connection cannot finish during conversational onboarding"
    />
  );
  return (
    <AppConnectRequest
      declinedMessage={declinedMessage}
      executionFailed={executionFailed}
      intro={intro}
      permissionStatus={permissionStatus}
      request={request}
      requestError={requestError}
      requestFailed={requestFailed}
      showRequest={showRequest}
      onIntroComplete={onIntroComplete}
      onRetryTask={onRetryTask}
    />
  );
}

type AppConnectPermissionCardProps = {
  appInfo: ConversationalOnboardingAppInfo;
  appName: string | null;
  appPluginName: string;
  description?: ReactNode;
  isConnecting: boolean;
  isLoading: boolean;
  isReady: boolean;
  onCancel: () => void;
  onConnect: () => void;
  onDismiss: () => void;
};

function AppConnectPermissionCard({
  appInfo,
  appName,
  appPluginName,
  description,
  isConnecting,
  isLoading,
  isReady,
  onCancel,
  onConnect,
  onDismiss,
}: AppConnectPermissionCardProps) {
  const onSecondaryAction = isConnecting ? onCancel : onDismiss;
  const secondaryLabel = isConnecting ? (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionCancel"
      defaultMessage="Cancel"
      description="Button that cancels an app connection attempt during conversational onboarding"
    />
  ) : (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionNotNow"
      defaultMessage="Not now"
      description="Button that declines connecting an app during conversational onboarding"
    />
  );
  const secondaryButton = (
    <Button
      color="secondary"
      disabled={isLoading}
      size="medium"
      onClick={onSecondaryAction}
    >
      {secondaryLabel}
    </Button>
  );
  const primaryLabel = isLoading ? (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionLoading"
      defaultMessage="Loading…"
      description="Button label while conversational onboarding loads app connection options"
    />
  ) : isConnecting ? (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionConnecting"
      defaultMessage="Connecting…"
      description="Button label while an app connection is in progress during conversational onboarding"
    />
  ) : isReady ? (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionContinue"
      defaultMessage="Continue"
      description="Button label after reviewing an existing app connection during conversational onboarding"
    />
  ) : (
    <FormattedMessage
      id="electron.onboarding.conversationalOnboarding.appPermissionConnect"
      defaultMessage="Connect"
      description="Button that connects an app during conversational onboarding"
    />
  );
  const primaryButton = (
    <Button
      color="primary"
      disabled={isLoading}
      loading={isConnecting}
      size="medium"
      onClick={onConnect}
    >
      {primaryLabel}
    </Button>
  );
  const actions = (
    <>
      {secondaryButton}
      {primaryButton}
    </>
  );
  const fallbackIcon = <AppPlaceholderIcon className="size-6" />;
  const icon = (
    <ConnectorLogoImage
      alt=""
      appInfo={appInfo}
      className="size-6"
      fallback={fallbackIcon}
      knownAppId={appPluginName}
    />
  );
  const title =
    appName == null ? (
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.connectApp"
        defaultMessage="Connect an app"
        description="Title shown while conversational onboarding determines which app to connect"
      />
    ) : (
      <FormattedMessage
        id="electron.onboarding.conversationalOnboarding.connectNamedApp"
        defaultMessage="Connect {appName}"
        description="Title of an app connection request during conversational onboarding"
        values={{ appName }}
      />
    );
  return (
    <AppConnectCard
      actions={actions}
      icon={icon}
      subtitle={description}
      title={title}
    />
  );
}

type AppConnectStartErrorProps = {
  onRetry: () => void;
};

function AppConnectStartError({ onRetry }: AppConnectStartErrorProps) {
  return (
    <div className="flex items-center gap-3">
      <p>
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.startError"
          defaultMessage="Codex couldn’t start that task."
          description="Error shown when a conversational onboarding task cannot start"
        />
      </p>
      <Button color="primary" size="medium" onClick={onRetry}>
        <FormattedMessage
          id="electron.onboarding.conversationalOnboarding.tryAgain"
          defaultMessage="Try again"
          description="Button that retries a conversational onboarding task"
        />
      </Button>
    </div>
  );
}
