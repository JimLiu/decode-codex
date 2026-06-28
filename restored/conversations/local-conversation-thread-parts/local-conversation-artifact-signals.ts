// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scoped artifact signals for local conversation output resources.
import { once } from "../../runtime/commonjs-interop";
import {
  conversationModeSignal,
  conversationResumeStateSignal,
  conversationTurnCountSignal,
  conversationTurnsSignal,
  initConversationStateRuntime,
  latestConversationTurnSignal,
  projectlessOutputDirectorySignal,
} from "../../runtime/conversation-state-runtime";
import {
  featureGateSignal,
  initFeatureGateSignalRuntime,
} from "../../runtime/feature-gate-runtime";
import {
  createLocalConversationScopedSignalFamily,
  initLocalConversationScopeRuntime,
} from "./local-conversation-scope-runtime";
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
  initLocalConversationScopeRuntime();
  initConversationStateRuntime();
  initFeatureGateSignalRuntime();
  initOutputArtifactCollectorDependencies();
  historicalOutputArtifactsSignal = createLocalConversationScopedSignalFamily(
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
  mergedOutputArtifactsSignal = createLocalConversationScopedSignalFamily(
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
  localConversationOutputArtifactsSignal =
    createLocalConversationScopedSignalFamily((conversationId, { get }) =>
      get(mergedOutputArtifactsSignal, {
        conversationId,
        includeGeneratedImages: false,
      }),
    );
  localConversationSummaryArtifactsSignal =
    createLocalConversationScopedSignalFamily((conversationId, { get }) =>
      get(mergedOutputArtifactsSignal, {
        conversationId,
        includeGeneratedImages:
          get(conversationModeSignal, conversationId) === "projectless" &&
          get(featureGateSignal, "120995366"),
      }),
    );
});
