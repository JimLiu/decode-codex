// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scoped mutation atoms that drive AI generation of commit messages, combined
// commit + pull request messages, and pull request title/body for the local
// conversation git actions, seeding the corresponding draft atoms on success.

import {
  appStoreScope,
  createScopedMutationAtom,
  dispatchHostRequest,
  intlAtom,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  buildCommitPromptFromGit,
  buildPullRequestPromptFromGit,
  seedCommitDraftMessage,
} from "./git-action-message-prompts";
import {
  activeGitWorkflowAtom,
  commitMessageDraftAtom,
  createPullRequestBodyDraftAtom,
  createPullRequestTitleDraftAtom,
} from "./local-git-actions-scope";
import { gitActionMessages } from "./git-action-messages";

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
}

interface MutationContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
}

interface IntlController {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
}

interface ToastController {
  danger(message: string): void;
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export const generateCommitMessageMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (context: MutationContext, { scope }: { scope: ScopedStore }) => {
    const hostScope = { cwd: context.cwd, hostId: context.hostConfig.id };
    const intl = scope.get<IntlController>(intlAtom);
    const toaster = scope.get<ToastController>(toastControllerAtom);
    return {
      mutationKey: [
        "vscode",
        "generate-commit-message",
        context.cwd,
        context.hostConfig.id,
        context.conversationId,
      ],
      mutationFn: async ({ signal }: { signal?: AbortSignal } = {}) => {
        const activeWorkflow = scope.get<{
          phase: string;
          workflow: string;
        } | null>(activeGitWorkflowAtom, hostScope);
        if (activeWorkflow?.phase === "generating-commit-message") {
          return null;
        }
        const draftMessage = scope.get<string>(
          commitMessageDraftAtom,
          hostScope,
        );
        const shouldTrackPhase =
          activeWorkflow == null || activeWorkflow.workflow === "commit";
        if (shouldTrackPhase) {
          scope.set(activeGitWorkflowAtom, hostScope, {
            workflow: "commit",
            phase: "generating-commit-message",
          });
        }
        let result: { message?: string | null };
        try {
          result = await dispatchHostRequest("generate-commit-message", {
            params: {
              hostId: context.hostConfig.id,
              prompt: await buildCommitPromptFromGit(
                scope,
                context,
                draftMessage,
                signal,
              ),
              cwd: context.cwd,
            },
            signal,
          });
        } catch (error) {
          if (!signal?.aborted) {
            toaster.danger(
              intl.formatMessage(
                {
                  id: "review.commit.generate.failed",
                  defaultMessage: "Failed to generate commit message: {error}",
                  description:
                    "Toast shown when commit message generation fails",
                },
                { error: describeError(error) },
              ),
            );
          }
          return null;
        } finally {
          if (
            shouldTrackPhase &&
            scope.get<{ phase: string } | null>(
              activeGitWorkflowAtom,
              hostScope,
            )?.phase === "generating-commit-message"
          ) {
            scope.set(activeGitWorkflowAtom, hostScope, activeWorkflow);
          }
        }
        const generatedMessage = result.message?.trim() ?? "";
        if (signal?.aborted) {
          return null;
        }
        if (generatedMessage.length === 0) {
          toaster.danger(
            intl.formatMessage(gitActionMessages.commitMessageEmpty),
          );
          return null;
        }
        seedCommitDraftMessage(
          scope,
          hostScope,
          draftMessage,
          generatedMessage,
        );
        return generatedMessage;
      },
    };
  },
);

const generateCommitPullRequestMessageMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (context: MutationContext, { scope }: { scope: ScopedStore }) => {
    const hostScope = { cwd: context.cwd, hostId: context.hostConfig.id };
    const intl = scope.get<IntlController>(intlAtom);
    const toaster = scope.get<ToastController>(toastControllerAtom);
    return {
      mutationKey: [
        "vscode",
        "generate-commit-pull-request-message",
        context.cwd,
        context.hostConfig.id,
        context.conversationId,
      ],
      mutationFn: async ({
        headBranch,
        signal,
      }: { headBranch?: string; signal?: AbortSignal } = {}) => {
        const draftMessage = scope.get<string>(
          commitMessageDraftAtom,
          hostScope,
        );
        const draftTitle = scope
          .get<string>(createPullRequestTitleDraftAtom, hostScope)
          .trim();
        const draftBody = scope
          .get<string>(createPullRequestBodyDraftAtom, hostScope)
          .trim();
        const trimmedMessage = draftMessage.trim();
        if (
          trimmedMessage.length > 0 &&
          draftTitle.length > 0 &&
          draftBody.length > 0
        ) {
          return {
            body: draftBody,
            message: trimmedMessage,
            title: draftTitle,
          };
        }
        let generated: {
          message?: string | null;
          title?: string | null;
          body?: string | null;
        };
        try {
          const [commitPrompt, pullRequestPrompt] = await Promise.all([
            buildCommitPromptFromGit(scope, context, draftMessage, signal),
            buildPullRequestPromptFromGit(scope, context, {
              headBranch,
              signal,
            }),
          ]);
          if (pullRequestPrompt.trim().length === 0) {
            return null;
          }
          generated = await dispatchHostRequest(
            "generate-commit-pull-request-message",
            {
              params: {
                hostId: context.hostConfig.id,
                prompt: [
                  "Commit message context:",
                  commitPrompt,
                  "",
                  "Pull request context:",
                  pullRequestPrompt,
                ].join("\n"),
                cwd: context.cwd,
              },
              signal,
            },
          );
        } catch (error) {
          if (!signal?.aborted) {
            toaster.danger(
              intl.formatMessage(
                {
                  id: "review.commitPullRequest.generate.failed",
                  defaultMessage:
                    "Failed to generate commit and pull request messages: {error}",
                  description:
                    "Toast shown when combined commit and pull request message generation fails",
                },
                { error: describeError(error) },
              ),
            );
          }
          return null;
        }
        const message = trimmedMessage || generated.message?.trim() || "";
        const title = draftTitle || generated.title?.trim() || "";
        const body = draftBody || generated.body?.trim() || "";
        if (signal?.aborted) {
          return null;
        }
        if (message.length === 0 || title.length === 0 || body.length === 0) {
          toaster.danger(
            intl.formatMessage({
              id: "review.commitPullRequest.generate.emptyResponse",
              defaultMessage:
                "Couldn't generate commit and pull request messages",
              description:
                "Toast shown when combined commit and pull request message generation returns no result",
            }),
          );
          return null;
        }
        seedCommitDraftMessage(scope, hostScope, draftMessage, message);
        if (draftTitle.length === 0) {
          scope.set(
            createPullRequestTitleDraftAtom,
            hostScope,
            (value: string) => (value.trim().length === 0 ? title : value),
          );
        }
        if (draftBody.length === 0) {
          scope.set(
            createPullRequestBodyDraftAtom,
            hostScope,
            (value: string) => (value.trim().length === 0 ? body : value),
          );
        }
        return { body, message, title };
      },
    };
  },
);

export const generatePullRequestMessageMutationAtom = createScopedMutationAtom(
  appStoreScope,
  (context: MutationContext, { scope }: { scope: ScopedStore }) => {
    const intl = scope.get<IntlController>(intlAtom);
    const toaster = scope.get<ToastController>(toastControllerAtom);
    return {
      mutationKey: [
        "vscode",
        "generate-pull-request-message",
        context.cwd,
        context.hostConfig.id,
        context.conversationId,
      ],
      mutationFn: async ({
        body,
        headBranch,
        signal,
        title,
      }: {
        body: string;
        headBranch?: string;
        signal?: AbortSignal;
        title: string;
      }) => {
        const trimmedBody = body.trim();
        const trimmedTitle = title.trim();
        if (trimmedBody.length > 0 && trimmedTitle.length > 0) {
          return { body: trimmedBody, title: trimmedTitle };
        }
        let generated: { body?: string | null; title?: string | null };
        try {
          const pullRequestPrompt = (
            await buildPullRequestPromptFromGit(scope, context, {
              headBranch,
              signal,
            })
          ).trim();
          if (signal?.aborted) {
            return null;
          }
          if (pullRequestPrompt.length === 0) {
            toaster.danger(
              intl.formatMessage(gitActionMessages.pullRequestGenerationError),
            );
            return null;
          }
          generated = await dispatchHostRequest(
            "generate-pull-request-message",
            {
              params: {
                hostId: context.hostConfig.id,
                prompt: pullRequestPrompt,
                cwd: context.cwd,
              },
              signal,
            },
          );
        } catch {
          if (!signal?.aborted) {
            toaster.danger(
              intl.formatMessage(gitActionMessages.pullRequestGenerationError),
            );
          }
          return null;
        }
        const resolvedBody = trimmedBody || generated.body?.trim() || "";
        const resolvedTitle = trimmedTitle || generated.title?.trim() || "";
        if (signal?.aborted) {
          return null;
        }
        if (resolvedBody.length > 0 && resolvedTitle.length > 0) {
          return { body: resolvedBody, title: resolvedTitle };
        }
        toaster.danger(
          intl.formatMessage(gitActionMessages.pullRequestGenerationError),
        );
        return null;
      },
    };
  },
);
