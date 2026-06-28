// Restored from ref/webview/assets/composer-view-state-BolUCsy-.js

export type TaskTurn = {
  created_at: number;
  discarded?: boolean;
  id: string;
  input_items?: unknown[];
  previous_turn_id?: string | null;
  [key: string]: unknown;
};
export type TaskDetails = {
  current_assistant_turn?: TaskTurn | null;
  current_user_turn?: TaskTurn | null;
  [key: string]: unknown;
};
export type TaskTurnsResponse = {
  turn_mapping?: Record<
    string,
    {
      turn?: TaskTurn | null;
    } | null
  > | null;
};
export type TurnTreeNode = {
  assistantTurns: TaskTurn[];
  children: Record<string, TurnTreeNode>;
  userTurn: TaskTurn;
};
export type ActiveTurnTreeNode = {
  activeId: string | null;
  node: TurnTreeNode;
};
export type CloudComposerContext = {
  type: "cloud";
  hasAppliedCodeLocally: boolean;
  selectedTurn: TaskTurn;
  selectedTurnId: string;
  taskDetails: TaskDetails;
};
export type LocalComposerContext = {
  type: "local";
  localConversationId: string;
};
export type ComposerThreadContext =
  | CloudComposerContext
  | LocalComposerContext
  | undefined;
export type SelectedTextAttachment = {
  id: string;
  source?: unknown;
  text: string;
};
export type McpAppModelContextAttachment = {
  id: string;
  imageAttachments: unknown[];
  text?: string | null;
  [key: string]: unknown;
};
export type ComposerMode = "cloud" | "local" | "remote" | "worktree" | string;
export type ComposerViewState = {
  addedFiles: unknown[];
  aeonStartTarget: unknown | null;
  appshotContexts: unknown[];
  asyncThreadStartingState: {
    branchName: string;
    type: "branch" | "working-tree";
  };
  commentAttachments: unknown[];
  composerMode: ComposerMode;
  defaultBranchSnapshot: string | null;
  fileAttachments: unknown[];
  followUpCloudStartingState: string;
  imageAttachments: unknown[];
  isAutoContextOn: boolean;
  mcpAppModelContextAttachments: McpAppModelContextAttachment[];
  pastedTextAttachments: unknown[];
  pendingThreadGoalObjective: unknown | null;
  pullRequestChecks: unknown[];
  pullRequestMergeConflict: unknown | null;
  selectedTextAttachments: SelectedTextAttachment[];
};
export type ComposerViewStateWithPrompt = ComposerViewState & {
  prompt: string;
};
export type ComposerPromptScopeValue =
  | {
      conversationId: string;
      kind: "local";
    }
  | {
      kind: "cloud";
    }
  | {
      entrypoint?: string;
      implicitAttachment?: unknown;
      kind: "new";
    }
  | {
      kind: "other";
    };
export type ScopeStore = {
  get: (...args: unknown[]) => any;
  set: (...args: unknown[]) => void;
  value: ComposerPromptScopeValue;
  watch: (
    callback: (context: { get: (...args: unknown[]) => any }) => void,
  ) => (() => void) | void;
};
export type ComposerStateUpdater = (state: ComposerViewState) => void;
