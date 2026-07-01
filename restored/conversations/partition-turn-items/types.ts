// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Types for partitioning turn items into renderer buckets.
export type TurnItem = {
  type: string;
  [key: string]: any;
};

export interface PartitionedTurnItems {
  userItems: TurnItem[];
  agentItems: TurnItem[];
  automationUpdateItems: TurnItem[];
  assistantItem: TurnItem | null;
  toolOutputItems: TurnItem[];
  postAssistantItems: TurnItem[];
  systemEventItem: TurnItem | null;
  unifiedDiffItem: TurnItem | null;
  remoteTaskCreatedItems: TurnItem[];
  personalityChangedItems: TurnItem[];
  forkedFromConversationItems: TurnItem[];
  modelChangedItems: TurnItem[];
  modelReroutedItems: TurnItem[];
  subagentActivityItemGroups: TurnItem[][];
  todoListItem: TurnItem | null;
  proposedPlanItem: TurnItem | null;
  planImplementationItem: TurnItem | null;
  mcpServerElicitationItems: TurnItem[];
  permissionRequestItems: TurnItem[];
  approvalItem: TurnItem | null;
  userInputItem: TurnItem | null;
}
