// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Scoped artifact signals for local conversation output resources.
import { once } from "../../runtime/commonjs-interop";
import {
  $P as initAppScope,
  $j as initStatsigGateSignals,
  AB as initScopeRuntime,
  Em as conversationTurnsSignal,
  Op as initConversationStateSelectors,
  QP as appScope,
  Tm as conversationTurnCountSignal,
  Xp as latestConversationTurnSignal,
  eM as featureGateSignal,
  fV as createScopedSignalFamily,
  jm as conversationModeSignal,
  lm as conversationResumeStateSignal,
  nm as projectlessOutputDirectorySignal,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  collectLocalConversationOutputArtifacts,
  initOutputArtifactCollectorDependencies,
  mergeUniqueOutputArtifacts,
} from "./local-conversation-output-artifacts";

let historicalOutputArtifactsSignal;
let mergedOutputArtifactsSignal;
export let localConversationOutputArtifactsSignal;
export let localConversationSummaryArtifactsSignal;

export const initLocalConversationArtifactSignals = once(() => {
  initScopeRuntime();
  initConversationStateSelectors();
  initAppScope();
  initStatsigGateSignals();
  initOutputArtifactCollectorDependencies();
  historicalOutputArtifactsSignal = createScopedSignalFamily(
    appScope,
    ({ conversationId, includeGeneratedImages }, { get }) => {
      get(conversationResumeStateSignal, conversationId);
      get(conversationTurnCountSignal, conversationId);
      let turns = get(conversationTurnsSignal, conversationId);
      return turns == null
        ? []
        : collectLocalConversationOutputArtifacts(turns.slice(0, -1), {
            includeGeneratedImages,
            projectlessOutputDirectory: get(
              projectlessOutputDirectorySignal,
              conversationId,
            ),
          });
    },
  );
  mergedOutputArtifactsSignal = createScopedSignalFamily(
    appScope,
    ({ conversationId, includeGeneratedImages }, { get }) => {
      let currentTurn = get(latestConversationTurnSignal, conversationId);
      return mergeUniqueOutputArtifacts([
        currentTurn == null
          ? []
          : collectLocalConversationOutputArtifacts([currentTurn], {
              includeGeneratedImages,
              projectlessOutputDirectory: get(
                projectlessOutputDirectorySignal,
                conversationId,
              ),
            }),
        get(historicalOutputArtifactsSignal, {
          conversationId,
          includeGeneratedImages,
        }),
      ]);
    },
  );
  localConversationOutputArtifactsSignal = createScopedSignalFamily(
    appScope,
    (conversationId, { get }) =>
      get(mergedOutputArtifactsSignal, {
        conversationId,
        includeGeneratedImages: false,
      }),
  );
  localConversationSummaryArtifactsSignal = createScopedSignalFamily(
    appScope,
    (conversationId, { get }) =>
      get(mergedOutputArtifactsSignal, {
        conversationId,
        includeGeneratedImages:
          get(conversationModeSignal, conversationId) === "projectless" &&
          get(featureGateSignal, "120995366"),
      }),
  );
});
