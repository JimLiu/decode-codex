// Restored from ref/webview/assets/first-run-Dv_mcmnN.js
// first-run-Db14L1Gy chunk restored from the Codex webview bundle.
import React from "react";
import type { ComponentType, SVGProps } from "react";
import { AnimatePresence, m, MotionConfig } from "framer-motion";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import { ta as setGlobalStateValue } from "../boundaries/thread-context-inputs.facade";
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { CheckMdIcon } from "../icons/check-md-icon";
import { ArrowUpIcon } from "../icons/arrow-up-icon";
import { PlusIcon } from "../icons/plus-icon";
import { useNavigate } from "../vendor/react-router";
import { useAuth } from "../auth/use-auth";
import { GithubMarkIcon } from "../icons/github-mark-icon";
import { InfoIcon } from "../icons/info-icon";
import { OpenaiBlossomIcon } from "../icons/openai-blossom-icon";
import { CODEX_IDE_DOCS_URL } from "../utils/links-bd-mmkun-d";
import { CodeSnippet } from "../ui/code-snippet";
import { SendToCloudIcon } from "../icons/send-to-cloud-icon";
import { useNux } from "../app-shell/nux-state";
import { RobotIcon } from "../icons/robot-icon";
import { AsciiCanvas, useAsciiEngine } from "../utils/use-ascii-engine";
type FirstRunStep = 0 | 1 | 2 | 3;
type SlideVariant = "intro" | "cloud" | "todo";
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay: 0.01,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0,
    },
  },
};
const slideTransition = {
  type: "spring",
  duration: 0.6,
  bounce: 0,
};
const asciiMaskStyle: React.CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)",
  maskImage:
    "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  opacity: 0.15,
};
export function FirstRunPage() {
  const appScope = useAppScope(appScopeRoot);
  const nux = useNux();
  const { authMethod } = useAuth();
  const hasCloudAccess = authMethod === "chatgpt";
  const isUsingCopilotAuth = authMethod === "copilot";
  const navigate = useNavigate();
  const initialStep = resolveInitialStep(nux, hasCloudAccess);
  const acceptFirstRun = async () => {
    await setGlobalStateValue(appScope, globalSettingKeys.NUX_2025_09_15, true);
    if (nux === "2025-09-15-full-chatgpt-auth") {
      await setGlobalStateValue(
        appScope,
        globalSettingKeys.NUX_2025_09_15_FULL_CHATGPT_AUTH_VIEWED,
        true,
      );
    } else if (nux === "2025-09-15-apikey-auth") {
      await setGlobalStateValue(
        appScope,
        globalSettingKeys.NUX_2025_09_15_APIKEY_AUTH_VIEWED,
        true,
      );
    }
    navigate("/");
  };
  return (
    <FirstRunCarousel
      hasCloudAccess={hasCloudAccess}
      initialStep={initialStep}
      isUsingCopilotAuth={isUsingCopilotAuth}
      onAccept={acceptFirstRun}
    />
  );
}
function FirstRunCarousel({
  initialStep,
  onAccept,
  hasCloudAccess,
  isUsingCopilotAuth,
}: {
  hasCloudAccess: boolean;
  initialStep: FirstRunStep;
  isUsingCopilotAuth: boolean;
  onAccept: () => void;
}) {
  const [step, setStep] = React.useState<FirstRunStep>(initialStep);
  const isWideViewport = useIsViewportWiderThan(560);
  const { columns, rows, lines } = useAsciiEngine({
    initialColumns: 130,
    initialRows: 100,
    initialMode: "composite",
    preferredVideoKeyword: "blossom",
  });
  const [isAccepting, setIsAccepting] = React.useState(false);
  const slideVariant = getSlideVariant(step);
  const handleBack = () => {
    setStep(previousFirstRunStep);
  };
  const handleContinue = () => {
    if (step === 3) {
      setIsAccepting(true);
      return;
    }
    setStep(nextFirstRunStep);
  };
  const handleCopyExitComplete = () => {
    if (isAccepting) {
      setIsAccepting(false);
      onAccept();
    }
  };
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-token-side-bar-background px-4 electron:!bg-transparent">
      <div
        className="pointer-events-none absolute inset-0 -ml-6"
        style={asciiMaskStyle}
      >
        <AsciiCanvas
          autoCover={true}
          columns={columns}
          lines={lines}
          rows={rows}
          scale={0.95}
        />
      </div>
      <MotionConfig transition={slideTransition}>
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="relative h-full w-full">
            <AnimatePresence initial={false} mode="wait">
              {slideVariant ? (
                <m.div
                  key={`slide-${step}`}
                  animate="active"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(max-height:500px)]:hidden"
                  exit="exit"
                  initial="initial"
                  variants={fadeVariants}
                >
                  <FirstRunSlidePreview
                    isWideViewport={isWideViewport}
                    variant={slideVariant}
                  />
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 z-20 w-full max-w-lg -translate-x-1/2 px-6">
          <div className="mb-2 flex items-center justify-center">
            <h1 className="mx-auto w-full max-w-sm text-center text-base leading-tight font-medium text-token-foreground">
              <AnimatePresence initial={false} mode="wait">
                {renderStepTitle(step) ? (
                  <m.span
                    key={`title-${step}`}
                    animate="active"
                    exit="exit"
                    initial="initial"
                    variants={fadeVariants}
                  >
                    {renderStepTitle(step)}
                  </m.span>
                ) : null}
              </AnimatePresence>
            </h1>
          </div>
          <div className="flex justify-center px-2">
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={handleCopyExitComplete}
            >
              {!(step === 3 && isAccepting) ? (
                <m.div
                  key={`copy-${step}`}
                  animate="active"
                  exit="exit"
                  initial="initial"
                  variants={fadeVariants}
                >
                  <StepCopy
                    isUsingCopilotAuth={isUsingCopilotAuth}
                    step={step}
                  />
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="mt-10 mb-0 px-2">
            <div className="mx-auto flex w-full max-w-[400px] items-center justify-between gap-2">
              {hasCloudAccess ? (
                <Button
                  color="outline"
                  disabled={step === 0}
                  onClick={handleBack}
                  size="large"
                  type="button"
                >
                  <FormattedMessage
                    defaultMessage="Back"
                    description="Button text to go to previous step"
                    id="codex.legal.backButton"
                  />
                </Button>
              ) : null}
              <Button onClick={handleContinue} size="large" type="button">
                {hasCloudAccess ? (
                  <FormattedMessage
                    defaultMessage="Next"
                    description="Button text to proceed to next step or finish"
                    id="codex.legal.continueButton"
                  />
                ) : (
                  <FormattedMessage
                    defaultMessage="Continue"
                    description="Button text when using API key auth to accept legal disclaimers"
                    id="codex.legal.continue.apikey"
                  />
                )}
              </Button>
            </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
}
function StepCopy({
  step,
  isUsingCopilotAuth,
}: {
  isUsingCopilotAuth: boolean;
  step: FirstRunStep;
}) {
  if (step === 3) {
    return (
      <ul className="mt-3 space-y-4 overflow-y-auto">
        <LegalListItem
          Icon={RobotIcon}
          title={
            <FormattedMessage
              defaultMessage="Decide how much autonomy you want to grant"
              description="Title for autonomy decision info"
              id="codex.legal.autonomy.title"
            />
          }
        >
          <FormattedMessage
            defaultMessage="For more details, see the {link}"
            description="Details directing users to Codex documentation"
            id="codex.legal.autonomy.details"
            values={{
              link: (
                <a
                  className="!text-token-description-foreground underline hover:no-underline"
                  href={CODEX_IDE_DOCS_URL}
                  onClick={preventLinkNavigation}
                >
                  <FormattedMessage
                    defaultMessage="Codex docs"
                    description="Link text to Codex docs"
                    id="codex.legal.autonomy.details.link"
                  />
                </a>
              ),
            }}
          />
        </LegalListItem>
        <LegalListItem
          Icon={InfoIcon}
          title={
            <FormattedMessage
              defaultMessage="Codex can make mistakes"
              description="Warning title about Codex fallibility"
              id="codex.legal.mistakes.title"
            />
          }
        >
          <FormattedMessage
            defaultMessage="Review the code it writes and commands it runs"
            description="Instruction to review generated code and executed commands"
            id="codex.legal.mistakes.review"
          />
        </LegalListItem>
        <AccountLegalListItem isUsingCopilotAuth={isUsingCopilotAuth} />
      </ul>
    );
  }
  return (
    <div className="mx-auto w-full max-w-sm text-center text-base text-token-description-foreground">
      {renderStepSubtitle(step)}
    </div>
  );
}
function FirstRunSlidePreview({
  variant,
  isWideViewport,
}: {
  isWideViewport: boolean;
  variant: SlideVariant;
}) {
  const width = isWideViewport ? 560 : 320;
  const height = isWideViewport ? 320 : 240;
  return (
    <div
      aria-hidden={true}
      style={{
        width,
        height,
      }}
    >
      {variant === "intro" ? (
        <IntroSlidePreview />
      ) : variant === "cloud" ? (
        <CloudSlidePreview />
      ) : (
        <TodoSlidePreview />
      )}
    </div>
  );
}
function IntroSlidePreview() {
  return (
    <div className="relative flex flex-1 flex-col gap-4 overflow-y-auto rounded-2xl border border-token-border bg-token-dropdown-background p-2 shadow-2xl">
      <div className="text-md pt-2 pl-2 text-token-description-foreground opacity-40">
        <FormattedMessage
          defaultMessage="Ask Codex to do anything"
          description="Message shown in the Codex onboarding slide to educate users that they can ask Codex to do anything"
          id="composer.placeholder.newTask.doAnything"
        />
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="flex w-full min-w-0 flex-nowrap items-center justify-start gap-[5px]">
          <PlusIcon
            className="size-token-button-composer rounded-full border border-token-border p-1"
            color="ghost"
            onClick={noop}
          />
        </div>
        <div className="flex h-[32px] w-[34px] items-center justify-center rounded-full bg-token-foreground p-0">
          <ArrowUpIcon className="text-token-dropdown-background" />
        </div>
      </div>
    </div>
  );
}
function CloudSlidePreview() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-token-border bg-token-dropdown-background px-4 py-4 shadow-2xl">
      <SendToCloudIcon className="size-8" />
      <CloudTaskRow
        icon={<Spinner className="size-4" />}
        meta={
          <FormattedMessage
            defaultMessage={"openai/agi \u00b7 Oct 12"}
            description="Sample repository and date metadata for the first cloud onboarding task"
            id="codex.legal.cloud.taskOne.meta"
          />
        }
        title={
          <FormattedMessage
            defaultMessage="Explain repository to a new designer"
            description="Sample task title shown on the cloud onboarding slide"
            id="codex.legal.cloud.taskOne.title"
          />
        }
      />
      <CloudTaskRow
        icon={<CheckMdIcon className="size-4" />}
        meta={
          <FormattedMessage
            defaultMessage={"openai/agi \u00b7 Oct 9"}
            description="Sample repository and date metadata for the second cloud onboarding task"
            id="codex.legal.cloud.taskTwo.meta"
          />
        }
        stats={
          <>
            <span className="text-green-500">
              <FormattedMessage
                defaultMessage="+2"
                description="Sample positive stat associated with a cloud task"
                id="codex.legal.cloud.taskTwo.stats.positive"
              />
            </span>
            <span className="text-red-500">
              <FormattedMessage
                defaultMessage="-20"
                description="Sample negative stat associated with a cloud task"
                id="codex.legal.cloud.taskTwo.stats.negative"
              />
            </span>
          </>
        }
        title={
          <FormattedMessage
            defaultMessage="Fix an onboarding bug"
            description="Sample completed task title on the cloud onboarding slide"
            id="codex.legal.cloud.taskTwo.title"
          />
        }
      />
      <CloudTaskRow
        icon={<CheckMdIcon className="size-4" />}
        meta={
          <FormattedMessage
            defaultMessage={"openai/codex \u00b7 Oct 8"}
            description="Sample repository and date metadata for the third cloud onboarding task"
            id="codex.legal.cloud.taskThree.meta"
          />
        }
        stats={
          <>
            <span className="text-green-500">
              <FormattedMessage
                defaultMessage="+249"
                description="Sample positive stat associated with the third cloud task"
                id="codex.legal.cloud.taskThree.stats.positive"
              />
            </span>
            <span className="text-red-500">
              <FormattedMessage
                defaultMessage="-123"
                description="Sample negative stat associated with the third cloud task"
                id="codex.legal.cloud.taskThree.stats.negative"
              />
            </span>
          </>
        }
        title={
          <FormattedMessage
            defaultMessage="Create a darkmode theme"
            description="Sample completed task title for the third cloud onboarding example"
            id="codex.legal.cloud.taskThree.title"
          />
        }
      />
    </div>
  );
}
function CloudTaskRow({
  icon,
  title,
  meta,
  stats,
}: {
  icon: React.ReactNode;
  meta: React.ReactNode;
  stats?: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      {icon}
      <div className="flex flex-1 flex-col text-token-foreground">
        <div className="flex-1 text-sm font-medium">{title}</div>
        <div className="text-sm font-medium opacity-50">{meta}</div>
      </div>
      {stats ? (
        <div className="flex items-center gap-2 text-sm font-medium">
          {stats}
        </div>
      ) : null}
    </div>
  );
}
function TodoSlidePreview() {
  return (
    <div className="relative rounded-xl border-token-border bg-token-dropdown-background p-2 font-mono shadow-xl">
      <CodeSnippet
        codeContainerClassName="pointer-events-none"
        content={
          'import mongoose, { Schema } from "mongoose";\nexport const collection = "Product";'
        }
        language="typescript"
        showActionBar={false}
        showStickyRightContent={false}
        wrapperClassName="pointer-events-none w-full"
      />
      <div className="relative rounded-xl border-token-border bg-token-dropdown-background p-2 pb-2.5 font-mono">
        <span className="text-mono pointer-events-none px-2 py-1 text-xs tracking-[0.2em] text-token-description-foreground uppercase">
          <FormattedMessage
            defaultMessage="// TODO: implement schema"
            description="Example TODO comment shown during onboarding"
            id="codex.legal.todo.heading"
          />
        </span>
      </div>
      <CodeSnippet
        codeContainerClassName="pointer-events-none"
        content={
          "const schema = new Schema(\n  {\n    name: {\n      type: String,\n      required: true,\n      trim: true,\n    },\n    description: {"
        }
        language="typescript"
        shouldWrapCode={true}
        showActionBar={false}
        showStickyRightContent={false}
        wrapperClassName="pointer-events-none w-full"
      />
    </div>
  );
}
function AccountLegalListItem({
  isUsingCopilotAuth,
}: {
  isUsingCopilotAuth: boolean;
}) {
  if (isUsingCopilotAuth) {
    return (
      <LegalListItem
        Icon={GithubMarkIcon}
        title={
          <FormattedMessage
            defaultMessage="Powered by GitHub Copilot"
            description="Statement that Codex uses user's Copilot account"
            id="codex.legal.copilot.title"
          />
        }
      >
        <FormattedMessage
          defaultMessage="Uses your Copilot plan for all model calls, billing, and rate limits. Codex extension usage is subject to both {oaiTos} and {gitHubTos}."
          description="Details about using Copilot subscription and training data preferences"
          id="codex.legal.copilot.details"
          values={{
            oaiTos: (
              <a
                className="!text-token-description-foreground underline hover:no-underline"
                href="https://openai.com/policies/row-terms-of-use/"
                onClick={preventLinkNavigation}
              >
                <FormattedMessage
                  defaultMessage="OpenAI Codex terms of service"
                  description="Link to OpenAI Codex terms of service from Copilot NUX"
                  id="codex.legal.copilot.oaiTosLink"
                />
              </a>
            ),
            gitHubTos: (
              <a
                className="!text-token-description-foreground underline hover:no-underline"
                href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
                onClick={preventLinkNavigation}
              >
                <FormattedMessage
                  defaultMessage="GitHub Terms of Service"
                  description="Link to GitHub Terms of Service from Copilot NUX"
                  id="codex.legal.copilot.gitHubTosLink"
                />
              </a>
            ),
          }}
        />
      </LegalListItem>
    );
  }
  return (
    <LegalListItem
      Icon={OpenaiBlossomIcon}
      title={
        <FormattedMessage
          defaultMessage="Powered by your ChatGPT account"
          description="Statement that Codex uses user's ChatGPT account"
          id="codex.legal.powered.title"
        />
      }
    >
      <FormattedMessage
        defaultMessage={"Uses your plan's rate limits and {link}"}
        description="Details about using plan rate limits and training data preferences"
        id="codex.legal.powered.details"
        values={{
          link: (
            <a
              className="!text-token-description-foreground underline hover:no-underline"
              href="https://chatgpt.com/#settings/DataControls"
              onClick={preventLinkNavigation}
            >
              <FormattedMessage
                defaultMessage="training data preferences"
                description="Link text to training data preferences settings"
                id="codex.legal.powered.details.link"
              />
            </a>
          ),
        }}
      />
    </LegalListItem>
  );
}
function LegalListItem({
  Icon,
  title,
  children,
}: {
  children: React.ReactNode;
  Icon: IconComponent;
  title: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon className="icon-base mt-0.5 shrink-0 opacity-80" />
      <div className="text-sm">
        <span className="block text-sm font-medium">{title}</span>
        <span className="block text-base text-token-description-foreground">
          {children}
        </span>
      </div>
    </li>
  );
}
function renderStepTitle(step: FirstRunStep) {
  if (step === 0) {
    return (
      <FormattedMessage
        defaultMessage="Codex in your IDE"
        description="Heading for step 1 intro"
        id="codex.legal.step.intro.title"
      />
    );
  }
  if (step === 1) {
    return (
      <FormattedMessage
        defaultMessage="Hand off to Codex in the cloud"
        description="Heading for step 2 cloud"
        id="codex.legal.step.cloud.title"
      />
    );
  }
  if (step === 2) {
    return (
      <FormattedMessage
        defaultMessage="Turn TODOs into Codex tasks"
        description="Heading for step 3 todo"
        id="codex.legal.step.todo.title"
      />
    );
  }
  return null;
}
function renderStepSubtitle(step: FirstRunStep) {
  if (step === 0) {
    return (
      <FormattedMessage
        defaultMessage="Codex navigates, edits, runs commands, and executes tests directly in your repo. Powered by your ChatGPT account."
        description="Subtitle for step 1 intro"
        id="codex.legal.step.intro.subtitle"
      />
    );
  }
  if (step === 1) {
    return (
      <FormattedMessage
        defaultMessage="Send tasks to Codex to run in the background so you can stay focused and move faster."
        description="Subtitle for step 2 cloud"
        id="codex.legal.step.cloud.subtitle"
      />
    );
  }
  if (step === 2) {
    return (
      <FormattedMessage
        defaultMessage="Write a TODO comment and convert it into a Codex task with a single click."
        description="Subtitle for step 3 todo"
        id="codex.legal.step.todo.subtitle"
      />
    );
  }
  return null;
}
function resolveInitialStep(
  nux: ReturnType<typeof useNux>,
  hasCloudAccess: boolean,
): FirstRunStep {
  switch (nux) {
    case "2025-09-15-full-chatgpt-auth":
      return 0;
    case "2025-09-15-apikey-auth":
      return 3;
    case "none":
    case undefined:
      return hasCloudAccess ? 0 : 3;
  }
}
function getSlideVariant(step: FirstRunStep): SlideVariant | null {
  if (step === 0) return "intro";
  if (step === 1) return "cloud";
  if (step === 2) return "todo";
  return null;
}
function nextFirstRunStep(step: FirstRunStep): FirstRunStep {
  return Math.min(3, step + 1) as FirstRunStep;
}
function previousFirstRunStep(step: FirstRunStep): FirstRunStep {
  return Math.max(0, step - 1) as FirstRunStep;
}
function preventLinkNavigation(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}
function noop() {}
function useIsViewportWiderThan(width: number) {
  const isWideEnough = () => window.innerWidth > width;
  const [matches, setMatches] = React.useState(isWideEnough);
  React.useEffect(() => {
    const updateMatch = () => {
      setMatches(window.innerWidth > width);
    };
    window.addEventListener("resize", updateMatch);
    updateMatch();
    return () => {
      window.removeEventListener("resize", updateMatch);
    };
  }, [width]);
  return matches;
}
