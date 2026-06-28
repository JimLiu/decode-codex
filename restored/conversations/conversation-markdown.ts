// Restored from ref/webview/assets/conversation-markdown-BjFKV53f.js
// Markdown exporter for local Codex conversations.
import {
  closeActivitySlices,
  collectRenderableAgentUnits,
  formatShellCommand,
  getTurnAgentItemGroups,
  groupClosedActivityUnits,
  initArtifactPreviewRuntime,
  initCommandMarkdownRuntime,
  initMarkdownContentRuntime,
  initMarkdownNormalizationRuntime,
  initNormalizedPathUtilities,
  initPathHelpers,
  initPersonalityChangedItems,
  initPostAssistantItemGrouping,
  initRemoteTaskCreatedItems,
  initRenderableOutputGrouping,
  isConversationItemInProgress,
  normalizeWorkspacePath,
  renderChangeAsUnifiedDiff,
  resolveProjectlessResourcePath,
  resolveRenderableAgentItems,
  rewriteMarkdownResourceLinks,
  shouldRenderCollapsedActivityDetails,
  wrapActivityUnits,
} from "../runtime/conversation-markdown-runtime";
import { once } from "../runtime/commonjs-interop";
import { conversationMarkdownFormat } from "./conversation-markdown-parts/markdown-format";
import type { PathContext } from "./conversation-markdown-parts/markdown-format";

const {
  EMPTY_PATH_CONTEXT,
  appendMarkdownSection,
  countDiffStats,
  createPathContext,
  escapeDetailsHtmlTags,
  escapeMarkdownHeading,
  formatCodeBlock,
  formatExecutionStatus,
  formatHtmlCode,
  formatInlineCode,
  formatPatchVerb,
  formatPathInline,
  formatPreviousMessageCount,
  formatReadableRelativePath,
  formatRelativePath,
  formatTodoStatus,
  formatToolCallCount,
  normalizeLineEndings,
  normalizeMessageMarkdown,
  quoteMarkdownBlock,
  renderMetadataBlock,
  renderTitledMarkdownBlock,
  stringifyJson,
  summarizeCollapsedToolActivity,
  summarizeExplorationItems,
  wrapDetails,
  wrapQuotedDetails,
} = conversationMarkdownFormat;

type AnyRecord = Record<string, any>;

export type RenderConversationMarkdownOptions = {
  cwd?: string | null;
  projectlessOutputDirectory?: string | null;
  title?: string | null;
  turns: readonly AnyRecord[];
};

type MarkdownRenderOptions = {
  escapeDetailsTags?: boolean;
  pathContext?: PathContext;
};

const initConversationMarkdownChunk = once(() => {
  initPathHelpers();
  initMarkdownNormalizationRuntime();
  initArtifactPreviewRuntime();
  initPostAssistantItemGrouping();
  initMarkdownContentRuntime();
  initRemoteTaskCreatedItems();
  initCommandMarkdownRuntime();
  initNormalizedPathUtilities();
  initPersonalityChangedItems();
  initRenderableOutputGrouping();
});

const CONVERSATION_DETAIL_LEVEL = "STEPS_PROSE";

initConversationMarkdownChunk();

export function renderConversationMarkdown({
  cwd = null,
  projectlessOutputDirectory = null,
  title,
  turns,
}: RenderConversationMarkdownOptions): string {
  const sections: string[] = [];
  const rootPathContext = createPathContext(cwd);
  sections.push(`# ${escapeMarkdownHeading(title ?? "Codex conversation")}`);
  for (const turn of turns) {
    const turnMarkdown = renderConversationTurnMarkdown(
      turn,
      cwd,
      rootPathContext,
      projectlessOutputDirectory,
    );
    if (turnMarkdown != null) sections.push(turnMarkdown);
  }
  return `${sections.join("\n\n").trimEnd()}\n`;
}

function renderConversationTurnMarkdown(
  turn: AnyRecord,
  rootCwd: string | null,
  rootPathContext: PathContext,
  projectlessOutputDirectory: string | null,
): string | null {
  const leadingSections: string[] = [];
  const turnPathContext =
    turn.cwd == null ? rootPathContext : createPathContext(turn.cwd);
  const resolveProjectlessPath =
    projectlessOutputDirectory == null
      ? undefined
      : (resourcePath: string) =>
          resolveProjectlessResourcePath({
            cwd:
              turn.cwd ??
              (rootCwd == null ? null : normalizeWorkspacePath(rootCwd)),
            projectlessOutputDirectory,
            resourcePath,
          });
  const groupedTurnItems = getTurnAgentItemGroups(
    resolveProjectlessPath == null
      ? turn.items
      : turn.items.map((item: AnyRecord) =>
          item.type === "assistant-message"
            ? {
                ...item,
                content: rewriteMarkdownResourceLinks(
                  item.content,
                  resolveProjectlessPath,
                ),
              }
            : item,
        ),
    turn.status,
  );
  const {
    userItems,
    assistantItem,
    agentItems,
    automationUpdateItems,
    toolOutputItems,
    postAssistantItems,
    systemEventItem,
    remoteTaskCreatedItems,
    personalityChangedItems,
    forkedFromConversationItems,
    modelChangedItems,
    modelReroutedItems,
    todoListItem,
    proposedPlanItem,
    planImplementationItem,
    mcpServerElicitationItems,
    permissionRequestItems,
    approvalItem,
    userInputItem,
  } = groupedTurnItems;

  for (const item of modelChangedItems) {
    appendMarkdownSection(
      leadingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  for (const item of userItems) {
    appendMarkdownSection(
      leadingSections,
      renderUserMessageWithContext(item, turnPathContext),
    );
  }
  for (const item of modelReroutedItems) {
    appendMarkdownSection(
      leadingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }

  const trailingSections: string[] = [];
  const { renderableAgentItems } = resolveRenderableAgentItems({
    agentItems,
    isTurnInProgress: turn.status === "in_progress",
    isAnyNonAgentItemInProgress:
      isConversationItemInProgress(assistantItem) ||
      isConversationItemInProgress(proposedPlanItem),
  });
  const closedActivityUnits = groupClosedActivityUnits({
    units: wrapActivityUnits({
      units: closeActivitySlices({
        units: collectRenderableAgentUnits(renderableAgentItems),
        isActivitySliceClosed: assistantItem != null,
        conversationDetailLevel: CONVERSATION_DETAIL_LEVEL,
      }),
    }),
    isActivitySliceClosed: assistantItem != null,
  });

  for (const item of closedActivityUnits) {
    appendMarkdownSection(
      trailingSections,
      renderAgentActivityUnit(item, turnPathContext),
    );
  }
  for (const item of automationUpdateItems) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  if (systemEventItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(systemEventItem, turnPathContext),
    );
  }
  for (const item of toolOutputItems) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  for (const item of postAssistantItems) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  if (todoListItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(todoListItem, turnPathContext),
    );
  }
  if (proposedPlanItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(proposedPlanItem, turnPathContext),
    );
  }
  if (planImplementationItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(planImplementationItem, turnPathContext),
    );
  }
  for (const item of mcpServerElicitationItems) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  for (const item of permissionRequestItems) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  if (approvalItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(approvalItem, turnPathContext),
    );
  }
  if (userInputItem != null) {
    appendMarkdownSection(
      trailingSections,
      renderConversationItemMarkdown(userInputItem, turnPathContext),
    );
  }
  if (trailingSections.length > 0) {
    leadingSections.push(
      wrapQuotedDetails(
        formatPreviousMessageCount(trailingSections.length),
        trailingSections.join("\n\n"),
      ),
    );
  }
  if (assistantItem != null) {
    appendMarkdownSection(
      leadingSections,
      renderAssistantMessage(assistantItem, { pathContext: turnPathContext }),
    );
  }
  for (const item of remoteTaskCreatedItems) {
    appendMarkdownSection(
      leadingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  for (const item of personalityChangedItems) {
    appendMarkdownSection(
      leadingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  for (const item of forkedFromConversationItems) {
    appendMarkdownSection(
      leadingSections,
      renderConversationItemMarkdown(item, turnPathContext),
    );
  }
  return leadingSections.length === 0 ? null : leadingSections.join("\n\n");
}

function renderConversationItemMarkdown(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  switch (item.type) {
    case "user-message":
      return renderUserMessage(item, {
        escapeDetailsTags: true,
        pathContext,
      });
    case "assistant-message":
      return renderAssistantMessage(item, {
        escapeDetailsTags: true,
        pathContext,
      });
    case "reasoning":
      return null;
    case "proposed-plan":
      return renderTitledMarkdownBlock("Plan", item.content);
    case "todo-list":
      return renderTodoList(item);
    case "exec":
      return renderExecItem(item);
    case "patch":
      return renderPatchItem(item);
    case "turn-diff":
      return renderTurnDiff(item);
    case "web-search":
      return `Searched the web for ${formatInlineCode(item.query)}`;
    case "generated-image":
      return renderGeneratedImage(item.src, item.status);
    case "userInput":
      return renderMetadataBlock(
        item.completed ? "User input request" : "User input requested",
        item.questions.map((question: AnyRecord) => `- ${question.question}`),
      );
    case "user-input-response":
      return renderMetadataBlock(
        "User input response",
        item.questionsAndAnswers.flatMap((questionAndAnswer: AnyRecord) => [
          `- ${questionAndAnswer.question}`,
          ...questionAndAnswer.answers.map((answer: string) => `  - ${answer}`),
        ]),
      );
    case "mcp-server-elicitation":
      return renderMetadataBlock("MCP server elicitation", [
        item.completed ? "Status: completed" : "Status: pending",
        `Action: ${item.action ?? "none"}`,
      ]);
    case "permission-request":
      return renderMetadataBlock("Permission request", [
        item.completed ? "Status: completed" : "Status: pending",
        `Reason: ${item.reason ?? "Not provided"}`,
        `Response: ${item.response == null ? "none" : "granted"}`,
      ]);
    case "mcp-tool-call":
      return renderMcpToolCall(item);
    case "automation-update":
      return renderMetadataBlock("Scheduled task update", [
        `Mode: ${item.result?.mode ?? "pending"}`,
        `Automation ID: ${item.result?.automationId ?? "pending"}`,
      ]);
    case "dynamic-tool-call":
      return renderMetadataBlock("Tool call", [
        `Tool: ${item.tool}`,
        item.completed ? "Status: completed" : "Status: running",
      ]);
    case "worktree-init":
      return renderMetadataBlock("Worktree initialization", [
        "Worktree: created",
        item.setup == null ? null : `Environment setup: ${item.setup.outcome}`,
      ]);
    case "automatic-approval-review":
      return renderAutomaticApprovalReview(item);
    case "multi-agent-action":
      return renderMetadataBlock("Subagent action", [
        `Action: ${item.action}`,
        `Status: ${item.status}`,
        `Receiver threads: ${item.receiverThreads.length}`,
        item.prompt == null ? null : `Prompt: ${item.prompt}`,
      ]);
    case "subagent-activity":
      return null;
    case "plan-implementation":
      return renderMetadataBlock("Plan implementation", [
        item.isCompleted ? "Status: completed" : "Status: running",
        item.planContent,
      ]);
    case "remote-task-created":
      return renderMetadataBlock("Remote task created", [
        `Task ID: ${item.taskId}`,
      ]);
    case "context-compaction":
      return renderMetadataBlock("Context compaction", [
        `Source: ${item.source}`,
        item.completed ? "Status: completed" : "Status: running",
      ]);
    case "personality-changed":
      return renderMetadataBlock("Personality changed", [
        `Personality: ${item.personality}`,
      ]);
    case "forked-from-conversation":
      return renderMetadataBlock("Forked conversation", [
        `Source conversation: ${item.sourceConversationId}`,
      ]);
    case "model-changed":
      return renderMetadataBlock("Model changed", [
        `${item.fromModel} -> ${item.toModel}`,
      ]);
    case "model-rerouted":
      return renderMetadataBlock("Model rerouted", [
        `${item.fromModel} -> ${item.toModel}`,
        `Reason: ${item.reason}`,
      ]);
    case "auto-review-interruption-warning":
      return null;
    case "system-error":
      return renderTitledMarkdownBlock("System error", item.content);
    case "stream-error":
      return renderMetadataBlock("Stream error", [
        item.content,
        item.additionalDetails,
      ]);
    case "realtime-transcript":
      return renderMetadataBlock(
        "Realtime transcript",
        item.entries.map(({ role, text }: AnyRecord) => `${role}: ${text}`),
      );
    case "steered":
    case "worked-for":
      return null;
    default:
      return null;
  }
}

function renderUserMessage(
  item: AnyRecord,
  {
    escapeDetailsTags = false,
    pathContext = EMPTY_PATH_CONTEXT,
  }: MarkdownRenderOptions = {},
): string | null {
  const sections: string[] = [];
  const message = normalizeMessageMarkdown(item.message, pathContext).trim();
  if (message.length > 0) sections.push(message);
  const contextLines = collectUserContextLines(item, pathContext);
  if (contextLines.length > 0) {
    sections.push(renderMetadataBlock("User context", contextLines));
  }
  if (sections.length === 0) return null;
  const rendered = sections.join("\n\n");
  return escapeDetailsTags ? escapeDetailsHtmlTags(rendered) : rendered;
}

function renderUserMessageWithContext(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  const rendered = renderUserMessage(item, { pathContext });
  return rendered == null ? null : quoteMarkdownBlock(rendered);
}

function collectUserContextLines(
  item: AnyRecord,
  pathContext: PathContext,
): string[] {
  const lines: string[] = [];
  if (item.attachments.length > 0) {
    lines.push("Attachments:");
    for (const attachment of item.attachments) {
      lines.push(
        `- ${attachment.label}: ${formatPathInline(attachment.path, pathContext)}`,
      );
    }
  }
  if (item.images.length > 0) {
    lines.push("Images:");
    for (const imagePath of item.images) {
      lines.push(`- ${formatPathInline(imagePath, pathContext)}`);
    }
  }
  if (item.comments != null && item.comments.length > 0) {
    lines.push("Comments:");
    for (const comment of item.comments) {
      const lineRange =
        comment.lineRange == null
          ? ""
          : ` ${formatInlineCode(comment.lineRange)}`;
      lines.push(
        `- ${formatRelativePath(comment.path, pathContext)}${lineRange}: ${normalizeLineEndings(comment.body).replaceAll("\n", " ")}`,
      );
    }
  }
  if (item.referencesPriorConversation)
    lines.push("Referenced prior conversation");
  if (item.reviewMode) lines.push("Mode: code review");
  if (item.pullRequestFixMode) lines.push("Mode: pull request fix");
  if (item.autoResolveSync) lines.push("Mode: auto resolve merge");
  if (
    item.pullRequestCheckNames != null &&
    item.pullRequestCheckNames.length > 0
  ) {
    lines.push(`Pull request checks: ${item.pullRequestCheckNames.join(", ")}`);
  }
  if (item.pullRequestMergeConflictNumber !== undefined) {
    lines.push(
      item.pullRequestMergeConflictNumber == null
        ? "Pull request merge conflict"
        : `Pull request merge conflict: #${item.pullRequestMergeConflictNumber}`,
    );
  }
  return lines;
}

function renderAssistantMessage(
  item: AnyRecord,
  {
    escapeDetailsTags = false,
    pathContext = EMPTY_PATH_CONTEXT,
  }: MarkdownRenderOptions = {},
): string | null {
  const content = normalizeMessageMarkdown(item.content, pathContext).trim();
  if (content.length === 0) return null;
  return escapeDetailsTags ? escapeDetailsHtmlTags(content) : content;
}

function renderExecItem(item: AnyRecord): string {
  const sections: string[] = [];
  const command = formatShellCommand(item.cmd);
  sections.push(formatCodeBlock("bash", `$ ${command}`));
  const aggregatedOutput = item.output?.aggregatedOutput;
  if (aggregatedOutput != null) {
    const output = normalizeLineEndings(aggregatedOutput);
    if (output.trim().length > 0)
      sections.push(formatCodeBlock("text", output));
  }
  sections.push(formatExecutionStatus(item));
  appendMarkdownSection(
    sections,
    renderAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  return wrapDetails(`Ran ${formatHtmlCode(command)}`, sections.join("\n\n"));
}

function renderPatchItem(item: AnyRecord): string | null {
  const sections = Object.entries(item.changes).flatMap(([path, change]) => {
    const unifiedDiff = renderChangeAsUnifiedDiff(path, change);
    if (unifiedDiff == null || unifiedDiff.trim().length === 0) return [];
    const diffStats = countDiffStats(unifiedDiff);
    return [
      wrapDetails(
        `${formatPatchVerb((change as AnyRecord).type)} ${formatHtmlCode(path)} +${diffStats.additions} -${diffStats.deletions}`,
        formatCodeBlock("diff", unifiedDiff),
      ),
    ];
  });
  appendMarkdownSection(
    sections,
    renderAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  return sections.length === 0 ? null : sections.join("\n");
}

function renderTurnDiff(item: AnyRecord): string {
  return wrapDetails("Diff", formatCodeBlock("diff", item.unifiedDiff));
}

function renderTodoList(item: AnyRecord): string {
  const sections: string[] = [];
  if (item.explanation != null && item.explanation.trim().length > 0) {
    sections.push(escapeDetailsHtmlTags(item.explanation).trim());
  }
  sections.push(
    item.plan
      .map(
        (planItem: AnyRecord) =>
          `- [${formatTodoStatus(planItem.status)}] ${escapeDetailsHtmlTags(planItem.step)}`,
      )
      .join("\n"),
  );
  return wrapDetails("Plan", sections.join("\n\n"));
}

function renderMcpToolCall(item: AnyRecord): string {
  const sections: string[] = [];
  sections.push(
    `MCP tool call\n\n${escapeDetailsHtmlTags(
      `${item.invocation.server}.${item.invocation.tool}`,
    )}`,
  );
  sections.push(
    formatCodeBlock("json", stringifyJson(item.invocation.arguments)),
  );
  appendMarkdownSection(
    sections,
    renderAutomaticApprovalReviews(item.automaticApprovalReviews),
  );
  if (item.result == null) {
    sections.push(item.completed ? "Result: none" : "Status: running");
    return sections.join("\n\n");
  }
  if (item.result.type === "error") {
    sections.push(escapeDetailsHtmlTags(`Error: ${item.result.error}`));
    return sections.join("\n\n");
  }
  const textContent = item.result.content
    .map(renderMcpContentBlock)
    .filter((content: string) => content.length > 0)
    .join("\n\n");
  if (textContent.length > 0) sections.push(textContent);
  if (item.result.structuredContent != null) {
    sections.push(
      formatCodeBlock("json", stringifyJson(item.result.structuredContent)),
    );
  }
  return sections.join("\n\n");
}

function renderMcpContentBlock(content: AnyRecord): string {
  switch (content.type) {
    case "text":
      return formatCodeBlock("text", content.text);
    case "image":
      return escapeDetailsHtmlTags(`Image output: ${content.mimeType}`);
    case "audio":
      return escapeDetailsHtmlTags(`Audio output: ${content.mimeType}`);
    case "resource_link":
      return escapeDetailsHtmlTags(
        `Resource: ${content.title ?? content.name ?? content.uri} (${content.uri})`,
      );
    case "embedded_resource": {
      const title =
        content.resource.title ?? content.resource.name ?? content.resource.uri;
      return content.resource.text != null &&
        content.resource.text.trim().length > 0
        ? `${escapeDetailsHtmlTags(`Resource: ${title}`)}\n\n${formatCodeBlock(
            "text",
            content.resource.text,
          )}`
        : escapeDetailsHtmlTags(`Resource: ${title}`);
    }
    case "unknown":
      return formatCodeBlock("json", stringifyJson(content.raw));
    default:
      return "";
  }
}

function renderAutomaticApprovalReview(item: AnyRecord): string {
  return renderMetadataBlock("Auto-review", [
    `Status: ${item.status}`,
    item.riskLevel == null ? null : `Risk: ${item.riskLevel}`,
    item.rationale == null ? null : `Rationale: ${item.rationale}`,
  ]);
}

function renderAutomaticApprovalReviews(
  items: readonly AnyRecord[] | null | undefined,
): string | null {
  return items == null
    ? null
    : items.map(renderAutomaticApprovalReview).join("\n\n");
}

function renderGeneratedImage(
  src: string | null | undefined,
  status: string,
): string {
  return src == null
    ? renderMetadataBlock("Generated image", [`Status: ${status}`])
    : `Generated image\n\n![Generated image](${src})`;
}

function renderAgentActivityUnit(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  if (item.kind === "collapsed-tool-activity") {
    const summary = summarizeCollapsedToolActivity(item.summary);
    if (
      !shouldRenderCollapsedActivityDetails(
        CONVERSATION_DETAIL_LEVEL,
        item.units,
      )
    ) {
      const lines = item.units
        .flatMap((unit: AnyRecord) => summarizeActivityUnit(unit, pathContext))
        .map((line: string) => `- ${line}`);
      return lines.length === 0
        ? summary
        : wrapDetails(summary, lines.join("\n"));
    }
    if (item.units.length === 1) {
      const singleUnit = item.units[0];
      if (
        singleUnit?.kind === "entry" &&
        singleUnit.entry.kind === "exploration"
      ) {
        return renderActivityEntry(singleUnit, pathContext);
      }
    }
    return wrapDetails(
      summary,
      item.units
        .map((unit: AnyRecord) =>
          renderCollapsedActivityEntry(unit, pathContext),
        )
        .filter((content: string | null) => content != null)
        .join("\n\n"),
    );
  }
  return item.kind === "pending-mcp-tool-calls"
    ? wrapDetails(
        formatToolCallCount(item.items.length),
        item.items.map(renderMcpToolCall).join("\n\n"),
      )
    : item.kind === "dynamic-tool-call-group"
      ? wrapDetails(
          formatToolCallCount(item.items.length),
          item.items
            .map((toolItem: AnyRecord) =>
              renderConversationItemMarkdown(toolItem, pathContext),
            )
            .join("\n\n"),
        )
      : renderActivityEntry(item, pathContext);
}

function renderCollapsedActivityEntry(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  return item.kind === "entry" &&
    item.entry.kind === "item" &&
    (item.entry.item.type === "exec" || item.entry.item.type === "patch")
    ? renderToolActivityBulletList(item, pathContext)
    : renderActivityEntry(item, pathContext);
}

function renderToolActivityBulletList(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  const lines = summarizeActivityUnit(item, pathContext);
  return lines.length === 0
    ? null
    : lines.map((line) => `- ${line}`).join("\n");
}

function summarizeActivityUnit(
  item: AnyRecord,
  pathContext: PathContext,
): string[] {
  if (item.kind !== "entry" || item.entry.kind !== "item") return [];
  return item.entry.item.type === "exec"
    ? [
        `Ran ${formatInlineCode(getParsedCommandLabel(item.entry.item))}`,
        ...formatApprovalReviewLines(item.entry.item.automaticApprovalReviews),
      ]
    : item.entry.item.type === "patch"
      ? [
          ...summarizePatchChanges(item.entry.item, pathContext),
          ...formatApprovalReviewLines(
            item.entry.item.automaticApprovalReviews,
          ),
        ]
      : [];
}

function formatApprovalReviewLines(
  items: readonly AnyRecord[] | null | undefined,
): string[] {
  return items == null
    ? []
    : items.flatMap((item) => [
        `Auto-review: ${item.status}`,
        ...(item.riskLevel == null
          ? []
          : [`Auto-review risk: ${item.riskLevel}`]),
        ...(item.rationale == null
          ? []
          : [
              `Auto-review rationale: ${escapeDetailsHtmlTags(item.rationale)}`,
            ]),
      ]);
}

function getParsedCommandLabel(item: AnyRecord): string {
  const parsedCommand = item.parsedCmd.cmd.trim();
  return parsedCommand.length === 0
    ? formatShellCommand(item.cmd)
    : parsedCommand;
}

function summarizePatchChanges(
  item: AnyRecord,
  pathContext: PathContext,
): string[] {
  const grantPathContext =
    item.grantRoot == null ? pathContext : createPathContext(item.grantRoot);
  return Object.entries(item.changes).flatMap(([path, change]) => {
    const unifiedDiff = renderChangeAsUnifiedDiff(path, change);
    if (unifiedDiff == null || unifiedDiff.trim().length === 0) return [];
    const diffStats = countDiffStats(unifiedDiff);
    return [
      `${formatPatchActivityVerb((change as AnyRecord).type)} ${formatReadableRelativePath(path, grantPathContext)} (+${diffStats.additions} -${diffStats.deletions})`,
    ];
  });
}

function formatPatchActivityVerb(changeType: string): string {
  switch (changeType) {
    case "add":
    case "update":
      return "Wrote";
    case "delete":
      return "Deleted";
    default:
      return "Changed";
  }
}

function renderActivityEntry(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  if (item.kind === "web-search-group") {
    return wrapDetails(
      "Searched the web",
      item.items
        .map(
          (searchItem: AnyRecord) =>
            `- Searched the web for ${formatInlineCode(searchItem.query)}`,
        )
        .join("\n"),
    );
  }
  if (item.kind === "multi-agent-group") {
    const firstItem = item.items[0];
    return renderMetadataBlock("Subagent action", [
      firstItem == null ? null : `Action: ${firstItem.action}`,
      firstItem == null ? null : `Status: ${firstItem.status}`,
      `Receiver threads: ${item.items.length}`,
    ]);
  }
  return item.entry.kind === "exploration"
    ? renderExplorationActivity(item.entry, pathContext)
    : renderConversationItemMarkdown(item.entry.item, pathContext);
}

function renderExplorationActivity(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  const lines = item.items
    .map((explorationItem: AnyRecord) =>
      summarizeExplorationExec(explorationItem, pathContext),
    )
    .filter((line: string | null) => line != null)
    .map((line: string) => `- ${line}`);
  return lines.length === 0
    ? null
    : wrapDetails(summarizeExplorationItems(item.items), lines.join("\n"));
}

function summarizeExplorationExec(
  item: AnyRecord,
  pathContext: PathContext,
): string | null {
  if (item.type !== "exec") return null;
  const parsedCommand = item.parsedCmd;
  const itemPathContext =
    item.cwd == null ? pathContext : createPathContext(item.cwd);
  switch (parsedCommand.type) {
    case "read":
      return `Read ${formatPathInline(parsedCommand.path ?? parsedCommand.name, itemPathContext)}`;
    case "search":
      return parsedCommand.query != null && parsedCommand.path != null
        ? `Searched for ${formatInlineCode(parsedCommand.query)} in ${formatPathInline(
            parsedCommand.path,
            itemPathContext,
          )}`
        : parsedCommand.query == null
          ? "Searched for files"
          : `Searched for ${formatInlineCode(parsedCommand.query)}`;
    case "list_files":
      return parsedCommand.path == null
        ? "Listed files"
        : `Listed files in ${formatPathInline(parsedCommand.path, itemPathContext)}`;
    case "format":
    case "test":
    case "lint":
    case "noop":
    case "unknown":
      return formatInlineCode(parsedCommand.cmd);
    default:
      return formatInlineCode(parsedCommand.cmd);
  }
}
