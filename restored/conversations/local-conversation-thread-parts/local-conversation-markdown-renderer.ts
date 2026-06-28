// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Render visible local conversation turns into markdown for export and extension menus.
import { once } from "../../runtime/commonjs-interop";
import {
  initDynamicModulePreloadRuntime,
  preloadDynamicImport,
} from "../../runtime/dynamic-module-preload";
import {
  initLocalConversationArtifactRuntime,
  renderLocalConversationTurn,
} from "./local-conversation-artifact-runtime";

const CONVERSATION_MARKDOWN_PRELOAD_DEPENDENCIES = [
  "../../threads/thread-user-message-navigation-rail",
  "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js",
  "./rolldown-runtime-Czos8NxU.js",
  "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-Dlqz5rpw.css",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js",
  "./app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211-6533k2dw.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js",
  "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb-B27VQcu6.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-WQSs2b8C.css",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-Cm9kT9_E.css",
  "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js",
  "./app-initial~app-main~home-ambient-suggestions-content-CGzLiN5i.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-CaqfCcJP.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-BI3OQbB8.css",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~l5ab2ey0-8q2fQ40X.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62-JuRN2k_O.js",
  "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~lxml58r4-kB1QbLtZ.js",
  "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~hngpswmm-DIEMgkYM.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-DpdAZZiY.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-BhOGlSiR.css",
  "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~bgpm80n3-Br-I5tHC.js",
  "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ozpabocf-B_lr_-Fk.js",
  "./app-initial~app-main~onboarding-page~profile-XXCan5-r.css",
  "./thread-scroll-controller-context-value-Cl6S6mDJ.js",
  "./thread-user-message-navigation-rail-CX3TkeeC.css",
  "./conversation-markdown-BjFKV53f.js",
] as const;

type VisibleTurnEntry = {
  preserveServerUserMessages?: boolean;
  requests?: readonly unknown[];
  turn: unknown;
};

export type RenderLocalConversationMarkdownOptions = {
  cwd: string | null | undefined;
  isBackgroundSubagentsEnabled: boolean;
  projectlessOutputDirectory: string | null | undefined;
  title: unknown;
  visibleTurnEntries: readonly VisibleTurnEntry[];
};

export async function renderLocalConversationMarkdownForTurns({
  cwd,
  isBackgroundSubagentsEnabled,
  projectlessOutputDirectory,
  title,
  visibleTurnEntries,
}: RenderLocalConversationMarkdownOptions): Promise<string | null> {
  let renderableTurns = visibleTurnEntries.map(
    ({ preserveServerUserMessages, requests, turn }) =>
      renderLocalConversationTurn(turn, requests, {
        isBackgroundSubagentsEnabled,
        preserveServerUserMessages,
      }),
  );
  if (renderableTurns.length === 0) return null;
  let { renderConversationMarkdown } = await preloadDynamicImport(
    async () => {
      let { renderConversationMarkdown: renderConversationMarkdownModule } =
        await import("../conversation-markdown");
      return {
        renderConversationMarkdown: renderConversationMarkdownModule,
      };
    },
    getConversationMarkdownPreloadDependencies([
      30, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27,
    ]),
    import.meta.url,
  );
  return renderConversationMarkdown({
    cwd,
    projectlessOutputDirectory,
    title,
    turns: renderableTurns,
  });
}

export const initConversationMarkdownRenderer = once(() => {
  initLocalConversationArtifactRuntime();
  initDynamicModulePreloadRuntime();
});

function getConversationMarkdownPreloadDependencies(
  dependencyIndexes: readonly number[],
) {
  return dependencyIndexes.map(
    (dependencyIndex) =>
      CONVERSATION_MARKDOWN_PRELOAD_DEPENDENCIES[dependencyIndex],
  );
}
