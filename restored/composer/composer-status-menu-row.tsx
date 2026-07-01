// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer status-menu row: registers the slash commands, IDE/context status, agent-mode
// menu, quick actions (goal/plan) and skill/init-prompt suggestions shown above the input.
import React, { type ReactElement } from "react";
import {
  useContextValue,
  composerStoreContext,
  useComposerController,
  useComposerControllerSelector,
  useNavigate,
  useLocation,
  useAtomValue,
  useConversationAtomValue,
  useHostConfig,
  useConversationHost,
  usePersonalityFeature,
  useWorktreeRootPath,
  useHotkeyWindowFeatureEnabled,
  useRegisterComposerAction,
  getComposerConversationId,
  getThreadIdFromSource,
  isGoalCommandEnabled,
  isEasterEggCommandText,
  isInitPromptSuggestionEnabled,
  isWorktreePath,
  isEmbeddedComposer,
  setComposerAutoContext,
  resolveHostCwd,
  forkThreadIntoLocal,
  forkThreadIntoWorktree,
  slashCommandStateField,
  threadSourceAtom,
  threadActivityAtom,
  goalModeAtom,
  rateLimitStatusAtom,
  conversationHostAtomFamily,
  responseInProgressAtomFamily,
  projectModeAtomFamily,
  localEnvironmentSelectionsAtom,
  HotkeyWindowNewSlashCommandRegistration,
  HotkeyWindowResumeSlashCommandRegistration,
  ChatSlashCommandRegistration,
  SlashCommandPlatformGate,
  PetOverlaySlashCommandRegistration,
  ProjectSlashCommandRegistration,
  McpSlashCommandRegistration,
  MemoriesSlashCommandRegistration,
  PlanSlashCommandRegistration,
  GoalSlashCommandRegistration,
  ModelChangeWarningRegistration,
  ReasoningSlashCommandRegistration,
  CompactSlashCommandRegistration,
  InitSlashCommandRegistration,
  AutoReviewDenialsSlashCommandRegistration,
  IdeContextSlashCommandRegistration,
  ForkThreadSlashCommandRegistration,
  PersonalitySlashCommandRegistration,
  SpeedSlashCommandRegistration,
  StatusSlashCommandRegistration,
  ReviewModeSlashCommandRegistration,
  ReviewModeControllerBinding,
  SkillSlashCommandsRegistration,
} from "../boundaries/onboarding-commons-externals.facade";

type ComposerMode = "cloud" | "local" | (string & {});
type AgentMode = "guardian-approvals" | (string & {});
type IdeContextStatus = string | null;
type SkillLookupRoot = string;
type InitPromptSubmitHandler = (prompt: string) => void;

type ThreadSource =
  | { type: "local"; localConversationId: string | null }
  | { type: "cloud" }
  | null;

type ComposerEditorState = {
  getText(): string;
  view: { state: unknown };
};

export interface ComposerStatusMenuRowProps {
  agentMode: AgentMode;
  composerMode: ComposerMode;
  currentLocalExecutionCwd: string;
  currentLocalExecutionHostId: string;
  onSubmitInitPrompt: InitPromptSubmitHandler;
  resolvedCwd: string;
  setIsStatusMenuOpen: (open: boolean) => void;
  skillLookupRoots: readonly SkillLookupRoot[];
  effectiveIdeContextStatus?: IdeContextStatus;
  effectiveIsAutoContextOn?: boolean;
  isEasterEggEnabled?: boolean;
  isAeonActionAvailable?: boolean;
  isAeonActive?: boolean;
  isAeonThread?: boolean;
  onEnablePlanMode?: () => void;
  onOpenGoalEditor?: () => void;
}

function isSlashCommandActive(editor: ComposerEditorState): boolean {
  return (
    slashCommandStateField.getState(editor.view.state)?.kind === "slash-command"
  );
}

export function ComposerStatusMenuRow({
  agentMode,
  composerMode,
  currentLocalExecutionCwd,
  currentLocalExecutionHostId,
  effectiveIdeContextStatus,
  effectiveIsAutoContextOn,
  isEasterEggEnabled,
  onEnablePlanMode,
  onOpenGoalEditor,
  onSubmitInitPrompt,
  resolvedCwd,
  setIsStatusMenuOpen,
  skillLookupRoots,
}: ComposerStatusMenuRowProps): ReactElement {
  const composerStore = useContextValue(composerStoreContext);
  const composerController = useComposerController();
  const navigate = useNavigate();

  const isSlashCommandOpen = useComposerControllerSelector(
    composerController,
    isSlashCommandActive,
  );
  const isExtendedGoalCommand = useComposerControllerSelector(
    composerController,
    (editor: ComposerEditorState) =>
      Boolean(isEasterEggEnabled) && isEasterEggCommandText(editor.getText()),
  );

  const threadSource = useAtomValue(threadSourceAtom) as ThreadSource;
  useAtomValue(threadActivityAtom);
  const isGoalModeActive = useAtomValue(goalModeAtom) != null;
  const goalCommandEnabled = isGoalCommandEnabled(
    composerStore.value,
    composerMode,
  );

  const conversationId = getComposerConversationId(composerStore);
  const location = useLocation();
  const { data: rateLimitData } = useAtomValue(rateLimitStatusAtom);
  const hostConfig = useHostConfig(currentLocalExecutionHostId);
  const conversationHost = useConversationHost(conversationId);
  const { isPersonalityEnabled } = usePersonalityFeature({
    hostId: conversationHost.hostId,
  });

  const conversationHostId = useConversationAtomValue(
    conversationHostAtomFamily,
    conversationId,
  );
  const isResponseInProgress =
    useConversationAtomValue(responseInProgressAtomFamily, conversationId) ??
    false;
  const isProjectlessThread =
    useConversationAtomValue(projectModeAtomFamily, conversationId) ===
    "projectless";
  const worktreeRootPath = useWorktreeRootPath();
  const isHotkeyWindowFeatureEnabled = useHotkeyWindowFeatureEnabled();
  const isHotkeyWindow = location.pathname === "/hotkey-window";
  const localEnvironmentSelectionsByWorkspace = useAtomValue(
    localEnvironmentSelectionsAtom,
  );

  const rawThreadId = getThreadIdFromSource(threadSource);
  const threadIdText = rawThreadId == null ? null : `${rawThreadId}`;

  const isWorktreeThread =
    threadSource?.type === "local" &&
    isWorktreePath(resolvedCwd, worktreeRootPath ?? undefined);
  const canForkToWorktree =
    threadSource?.type === "local" && resolvedCwd.length > 0;

  const isInitPromptEnabled = isInitPromptSuggestionEnabled({
    composerMode,
    isGoalModeActive,
    isResponseInProgress,
    resolvedCwd,
    windowType: "electron",
  });

  const forkIntoLocal = async () => {
    const newConversationId = await forkThreadIntoLocal(composerStore, {
      sourceConversationId:
        threadSource?.type === "local"
          ? threadSource.localConversationId
          : null,
      sourceWorkspaceRoot: threadSource?.type === "local" ? resolvedCwd : null,
    });
    if (newConversationId != null) navigate(`/local/${newConversationId}`);
  };
  const handleForkIntoLocal = () => {
    void forkIntoLocal();
  };
  const canRegisterFork =
    threadSource?.type === "local" && !isEmbeddedComposer();
  useRegisterComposerAction("forkThread", handleForkIntoLocal, {
    enabled: canRegisterFork,
  });

  const forkIntoWorktree = async () => {
    const newConversationId = await forkThreadIntoWorktree(composerStore, {
      localEnvironmentSelectionsByWorkspace,
      sourceConversationId:
        threadSource?.type === "local"
          ? threadSource.localConversationId
          : null,
      sourceWorkspaceRoot: threadSource?.type === "local" ? resolvedCwd : null,
    });
    if (newConversationId != null)
      navigate(`/worktree-init-v2/${newConversationId}`);
  };

  const handleAutoContextChange = (nextIsAutoContextOn: boolean) => {
    setComposerAutoContext(composerStore, nextIsAutoContextOn);
  };

  const hostCwd = resolveHostCwd(currentLocalExecutionCwd);

  const hotkeyWindowNewCommand = (
    <HotkeyWindowNewSlashCommandRegistration
      enabled={isHotkeyWindowFeatureEnabled && !isHotkeyWindow}
    />
  );
  const hotkeyWindowResumeCommand = (
    <HotkeyWindowResumeSlashCommandRegistration
      enabled={isHotkeyWindowFeatureEnabled}
    />
  );
  const chatCommand = (
    <ChatSlashCommandRegistration
      composerMode={composerMode}
      resolvedCwd={resolvedCwd}
    />
  );
  const petOverlayCommand = (
    <SlashCommandPlatformGate electron>
      <PetOverlaySlashCommandRegistration />
    </SlashCommandPlatformGate>
  );
  const projectCommand = (
    <ProjectSlashCommandRegistration resolvedCwd={resolvedCwd} />
  );
  const mcpCommand = <McpSlashCommandRegistration />;
  const memoriesCommand =
    threadSource?.type === "cloud" ? null : (
      <MemoriesSlashCommandRegistration
        key={conversationId ?? "new-conversation"}
        conversationId={conversationId}
        hostId={conversationHostId}
      />
    );
  const planCommand = (
    <PlanSlashCommandRegistration
      conversationId={conversationId}
      onEnablePlanMode={onEnablePlanMode}
    />
  );
  const goalCommand = (
    <GoalSlashCommandRegistration
      conversationId={conversationId}
      enabled={goalCommandEnabled}
      isEasterEggEnabled={isEasterEggEnabled}
      isExtendedGoalCommand={isExtendedGoalCommand}
      onOpenGoalEditor={onOpenGoalEditor}
    />
  );
  const modelChangeWarning =
    composerMode === "cloud" ? null : (
      <ModelChangeWarningRegistration conversationId={conversationId} />
    );
  const reasoningCommand =
    composerMode === "cloud" ? null : (
      <ReasoningSlashCommandRegistration conversationId={conversationId} />
    );
  const compactCommand =
    composerMode === "cloud" ? null : (
      <CompactSlashCommandRegistration
        conversationId={conversationId}
        isResponseInProgress={isResponseInProgress}
      />
    );
  const initCommand =
    composerMode === "cloud" ? null : (
      <InitSlashCommandRegistration
        cwd={resolvedCwd}
        enabled={isInitPromptEnabled}
        hostId={conversationHost.hostId}
        onSubmitInitPrompt={onSubmitInitPrompt}
      />
    );
  const autoReviewDenialsCommand =
    composerMode === "cloud" ? null : (
      <AutoReviewDenialsSlashCommandRegistration
        conversationId={conversationId}
        enabled={agentMode === "guardian-approvals"}
      />
    );
  const ideContextCommand = (
    <IdeContextSlashCommandRegistration
      isAutoContextOn={effectiveIsAutoContextOn}
      setIsAutoContextOn={handleAutoContextChange}
      ideContextStatus={effectiveIdeContextStatus}
    />
  );
  const forkThreadCommand =
    threadSource?.type === "local" && !isEmbeddedComposer() ? (
      <ForkThreadSlashCommandRegistration
        canForkToWorktree={canForkToWorktree}
        showWorktreeOption={!isProjectlessThread}
        isWorktreeThread={isWorktreeThread}
        onForkIntoLocal={forkIntoLocal}
        onForkIntoWorktree={forkIntoWorktree}
      />
    ) : null;
  const personalityCommand = isPersonalityEnabled ? (
    <PersonalitySlashCommandRegistration
      conversationId={conversationId}
      hostId={conversationHost.hostId}
    />
  ) : null;
  const speedCommand = (
    <SpeedSlashCommandRegistration
      conversationId={conversationId}
      hostId={conversationHost.hostId}
    />
  );
  const statusCommand =
    composerMode === "cloud" ? null : (
      <StatusSlashCommandRegistration
        conversationId={conversationId}
        threadId={threadIdText}
        rateLimit={rateLimitData ?? null}
        onOpenChange={setIsStatusMenuOpen}
      />
    );
  const reviewModeCommand = (
    <ReviewModeSlashCommandRegistration
      conversationId={conversationId}
      cwd={hostCwd}
      hostConfig={hostConfig}
    />
  );
  const reviewModeBinding = (
    <ReviewModeControllerBinding composerController={composerController} />
  );
  const skillCommands = isSlashCommandOpen ? (
    <SkillSlashCommandsRegistration
      cwd={resolvedCwd}
      roots={skillLookupRoots}
      hostId={currentLocalExecutionHostId}
    />
  ) : null;

  return (
    <>
      {hotkeyWindowNewCommand}
      {hotkeyWindowResumeCommand}
      {chatCommand}
      {petOverlayCommand}
      {projectCommand}
      {mcpCommand}
      {memoriesCommand}
      {planCommand}
      {goalCommand}
      {null}
      {modelChangeWarning}
      {reasoningCommand}
      {compactCommand}
      {initCommand}
      {autoReviewDenialsCommand}
      {ideContextCommand}
      {forkThreadCommand}
      {personalityCommand}
      {speedCommand}
      {statusCommand}
      {reviewModeCommand}
      {reviewModeBinding}
      {skillCommands}
    </>
  );
}
