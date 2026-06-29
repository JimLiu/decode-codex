// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Activity-stream renderer for the handoff_thread tool call: shows the live
// handoff status/title from the operation store (falling back to the parsed
// tool result) and, in the expanded row variant, the per-step progress list
// (localConversation domain).
import type { ReactNode } from "react";
import { z } from "zod";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import {
  AnimatedActivityLabel,
  CollapsibleToolActivity,
  CodexThreadToolIcon,
  useAtomFamilyValue,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  handoffOperationStatusStore,
  isTerminalHandoffOperationStatus,
} from "./handoff-operation-status-store";
import { ThreadHandoffStepRow } from "../ui/thread-handoff-step-row";

type ToolCallContentItem = { type: string; text?: string };

type HandoffToolCallItem = {
  callId: string;
  completed: boolean;
  success?: boolean;
  contentItems?: ToolCallContentItem[] | null;
};

type HandoffToolCallVariant = "row" | "summary-text" | "trailing";

const handoffResultSchema = z.object({
  destinationHostDisplayName: z.string().min(1),
  operationId: z.string().min(1),
  status: z.enum(["queued", "running", "success", "warning", "error"]),
  threadTitle: z.string().min(1),
});

type HandoffResult = z.infer<typeof handoffResultSchema>;

function parseHandoffResult(
  contentItems: ToolCallContentItem[] | null,
): HandoffResult | null {
  const text = contentItems?.find((item) => item.type === "inputText")?.text;
  if (text == null) return null;
  try {
    const parsed = handoffResultSchema.safeParse(JSON.parse(text));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

type HandoffSummaryLabelProps = {
  completed: boolean;
  destinationHostDisplayName: string | null;
  success: boolean | undefined;
  threadTitle: string | null;
};

function HandoffSummaryLabel({
  completed,
  destinationHostDisplayName,
  success,
  threadTitle,
}: HandoffSummaryLabelProps): ReactNode {
  if (threadTitle == null || destinationHostDisplayName == null) {
    if (!completed) {
      return (
        <FormattedMessage
          id="localConversation.appControlToolCall.threadsHandoff.active"
          defaultMessage="Handing off thread"
          description="In-progress label for handing off a Codex thread when its title or destination host is unavailable"
        />
      );
    }
    if (success === false) {
      return (
        <FormattedMessage
          id="localConversation.appControlToolCall.threadsHandoff.failed"
          defaultMessage="Failed to hand off thread"
          description="Failed label for handing off a Codex thread when its title or destination host is unavailable"
        />
      );
    }
    return (
      <FormattedMessage
        id="localConversation.appControlToolCall.threadsHandoff.completed"
        defaultMessage="Handed off thread"
        description="Completed label for handing off a Codex thread when its title or destination host is unavailable"
      />
    );
  }
  if (!completed) {
    return (
      <FormattedMessage
        id="localConversation.appControlToolCall.threadsHandoffToHost.active"
        defaultMessage="Handing off {threadTitle} to {destinationHostDisplayName}"
        description="In-progress label for handing off a Codex thread to a host"
        values={{ destinationHostDisplayName, threadTitle }}
      />
    );
  }
  if (success === false) {
    return (
      <FormattedMessage
        id="localConversation.appControlToolCall.threadsHandoffToHost.failed"
        defaultMessage="Failed to hand off {threadTitle} to {destinationHostDisplayName}"
        description="Failed label for handing off a Codex thread to a host"
        values={{ destinationHostDisplayName, threadTitle }}
      />
    );
  }
  return (
    <FormattedMessage
      id="localConversation.appControlToolCall.threadsHandoffToHost.completed"
      defaultMessage="Handed off {threadTitle} to {destinationHostDisplayName}"
      description="Completed label for handing off a Codex thread to a host"
      values={{ destinationHostDisplayName, threadTitle }}
    />
  );
}

type ThreadHandoffToolCallProps = {
  item: HandoffToolCallItem;
  variant: HandoffToolCallVariant;
};

export function ThreadHandoffToolCall({
  item,
  variant,
}: ThreadHandoffToolCallProps): ReactNode {
  const parsedResult =
    item.completed && item.success === true
      ? parseHandoffResult(item.contentItems ?? null)
      : null;
  const liveStatus = useAtomFamilyValue(
    handoffOperationStatusStore,
    parsedResult?.operationId ?? item.callId,
  );

  const threadTitle =
    liveStatus?.threadTitle ?? parsedResult?.threadTitle ?? null;
  const destinationHostDisplayName =
    liveStatus?.destinationHostDisplayName ??
    parsedResult?.destinationHostDisplayName ??
    null;
  const completed =
    liveStatus == null
      ? parsedResult == null
        ? item.completed
        : isTerminalHandoffOperationStatus(parsedResult.status)
      : isTerminalHandoffOperationStatus(liveStatus.status);
  const success =
    liveStatus == null
      ? item.success
      : liveStatus.status === "error"
        ? false
        : liveStatus.status === "success" || liveStatus.status === "warning";

  let overallStatus: "running" | "failed" | "completed" = "running";
  if (completed) {
    overallStatus = success === false ? "failed" : "completed";
  }

  const summary = (
    <HandoffSummaryLabel
      completed={completed}
      destinationHostDisplayName={destinationHostDisplayName}
      success={success}
      threadTitle={threadTitle}
    />
  );

  if (variant !== "row") {
    return (
      <span
        className={clsx(
          "text-size-chat min-w-0 items-center",
          variant === "summary-text" ? "inline" : "flex gap-2",
          "text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground",
        )}
      >
        {variant === "summary-text" ? null : (
          <CodexThreadToolIcon className="icon-xs shrink-0 text-token-text-secondary" />
        )}
        <AnimatedActivityLabel
          active={!completed}
          className={clsx(variant !== "summary-text" && "min-w-0 truncate")}
        >
          {summary}
        </AnimatedActivityLabel>
      </span>
    );
  }

  const steps =
    liveStatus != null && liveStatus.steps.length > 0
      ? liveStatus.steps.map((step) => (
          <ThreadHandoffStepRow
            key={step.id}
            compact={true}
            direction={liveStatus.direction}
            localBranch={liveStatus.localBranch}
            sourceBranch={liveStatus.sourceBranch}
            step={step}
            worktreeBranch={liveStatus.worktreeBranch}
          />
        ))
      : null;

  return (
    <CollapsibleToolActivity
      icon={
        <CodexThreadToolIcon className="icon-xs shrink-0 text-token-text-secondary" />
      }
      status={overallStatus}
      summary={summary}
    >
      {steps}
    </CollapsibleToolActivity>
  );
}
