// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Plan summary card public props and item types.
type PlanSummaryItem = {
  completed: boolean;
  content: string;
};

export type PlanSummaryCardProps = {
  item: PlanSummaryItem;
  conversationId: string;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
  defaultCollapsed?: boolean;
  hasArtifacts?: boolean;
  reportEntityType?: string;
  showOpenButton?: boolean;
  turnId?: string | null;
  isThreadPreview?: boolean;
  isThreadPreviewCollapsed?: boolean;
  onOpenInSidePanel?: () => void;
};
