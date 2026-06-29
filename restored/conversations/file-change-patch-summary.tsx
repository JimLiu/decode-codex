// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// apply_patch summary: derives a per-turn status and renders one FileChangePatchRow per changed file.
import { ConversationSummaryRow } from "../boundaries/onboarding-commons-externals.facade";
import {
  FileChangePatchRow,
  type FileChange,
  type PatchChangeStatus,
} from "./local-conversation-thread-parts/file-change-patch-row";

interface AutomaticApprovalReview {
  [key: string]: unknown;
}

export interface FileChangePatchSummaryItem {
  changes: Record<string, FileChange>;
  success?: boolean | null;
  approvalRequestId?: string | null;
  grantRoot?: string | null;
  automaticApprovalReviews?: AutomaticApprovalReview[] | null;
}

export interface FileChangePatchSummaryProps {
  item: FileChangePatchSummaryItem;
  isTurnCancelled?: boolean;
  cwd: string | null;
  hostId: string | null;
}

function resolvePatchStatus(
  item: FileChangePatchSummaryItem,
  isTurnCancelled: boolean,
): PatchChangeStatus {
  if (item.success === true) return "applied";
  if (item.success === false) return "rejected";
  if (item.approvalRequestId == null) {
    return isTurnCancelled ? "stopped" : "streaming";
  }
  return "pending";
}

export function FileChangePatchSummary({
  item,
  isTurnCancelled = false,
  cwd,
  hostId,
}: FileChangePatchSummaryProps) {
  const status = resolvePatchStatus(item, isTurnCancelled);
  const entries = Object.entries(item.changes);
  if (entries.length === 0) return null;

  const rows = entries.map(([path, change]) => (
    <FileChangePatchRow
      key={path}
      path={path}
      change={change}
      status={status}
      cwd={cwd}
      hostId={hostId}
      grantRoot={item.grantRoot}
      automaticApprovalReviews={item.automaticApprovalReviews}
    />
  ));

  return (
    <ConversationSummaryRow padding="offset">
      <div className="flex flex-col gap-[var(--conversation-patch-file-gap,var(--conversation-tool-assistant-gap,8px))]">
        {rows}
      </div>
    </ConversationSummaryRow>
  );
}
