// Restored from ref/webview/assets/prompt-text-BpPEyD-S.js
// prompt-text-BpPEyD-S chunk restored from the Codex webview bundle.
import {
  _parseDirectivesA as formatMentionDisplayName,
  parseDirectivesG as decodePromptLinkLabel,
  parseDirectivesUnderscore as decodePromptLinkPath,
} from "../../utils/parse-directives";
import {
  classifyMentionHref,
  parseAgentConversationIdFromHref,
  parseChatGptConversationId,
  parseMcpResourceMentionHref,
  parseSubagentRoleNameFromHref,
  slugifyAppMentionName,
  slugifyAppMentionNameAlias,
  stripMentionTriggerSyntax,
} from "../mention-item";
import {
  createRichLinkFromDisplayText,
  normalizeRichLinkHref,
} from "../../ui/rich-link-g-oum-tm-pc";
import {
  CODEX_TEXT_LINK_PREFIX,
  createFallbackMarkdownText,
  possibleUrlPattern,
} from "./link-utils";
import type {
  ParsePromptTextLineOptions,
  PlainTextToDocOptions,
  PromptTextSchema,
  PromptTextToDocOptions,
} from "./types";
export function plainTextToDoc({
  schema,
  text,
}: PlainTextToDocOptions): unknown {
  const paragraphNode = schema.nodes.paragraph;
  const docNode = schema.nodes.doc;
  if (!paragraphNode || !docNode) {
    throw Error("plainTextToDoc requires doc+paragraph nodes");
  }
  const paragraphs = text
    .split("\n")
    .map((line) =>
      paragraphNode.create(null, line === "" ? null : schema.text(line)),
    );
  return docNode.create(
    null,
    paragraphs.length ? paragraphs : [paragraphNode.create()],
  );
}
function parsePromptTextLine(
  schema: PromptTextSchema,
  line: string,
  {
    restoreMarkdownLinksAsTextLinks = false,
    restorePathLinksAsFileMentions = true,
  }: ParsePromptTextLineOptions = {},
): unknown[] | null {
  const skillMentionNode = schema.nodes.skillMention;
  const appMentionNode = schema.nodes.appMention;
  const pluginMentionNode = schema.nodes.pluginMention;
  const atMentionNode = schema.nodes.atMention;
  const agentMentionNode = schema.nodes.agentMention;
  const resourceMentionNode = schema.nodes.resourceMention;
  const chatGptConversationMentionNode =
    schema.nodes.chatGptConversationMention;
  const sitesProjectMentionNode = schema.nodes.sitesProjectMention;
  const richLinkNode = schema.nodes.richLink;
  const nodes: unknown[] = [];
  let searchIndex = 0;
  let textStartIndex = 0;
  const pushTextUntil = (endIndex: number) => {
    if (endIndex > textStartIndex) {
      nodes.push(schema.text(line.slice(textStartIndex, endIndex)));
    }
  };
  for (; searchIndex < line.length; ) {
    const labelStart = line.indexOf("[", searchIndex);
    if (labelStart === -1) break;
    let labelEnd = labelStart + 1;
    for (; labelEnd < line.length; ) {
      const char = line[labelEnd];
      const nextChar = line[labelEnd + 1];
      if (
        char === "\\" &&
        (nextChar === "\\" || (nextChar === "]" && line[labelEnd + 2] !== "("))
      ) {
        labelEnd += 2;
        continue;
      }
      if (char === "]") break;
      labelEnd += 1;
    }
    if (labelEnd >= line.length) break;
    if (line[labelEnd + 1] !== "(") {
      searchIndex = labelEnd + 1;
      continue;
    }
    let hrefEnd = labelEnd + 2;
    let rawHref = "";
    let foundHrefEnd = false;
    for (; hrefEnd < line.length; ) {
      const char = line[hrefEnd];
      if (char === "\\") {
        const nextChar = line[hrefEnd + 1];
        if (nextChar) {
          rawHref += `\\${nextChar}`;
          hrefEnd += 2;
          continue;
        }
      }
      if (char === ")") {
        foundHrefEnd = true;
        break;
      }
      rawHref += char;
      hrefEnd += 1;
    }
    if (!foundHrefEnd) break;
    const rawLabel = line.slice(labelStart + 1, labelEnd);
    const label = decodePromptLinkLabel(rawLabel);
    const isTextLink = rawHref.startsWith(CODEX_TEXT_LINK_PREFIX);
    const href = decodePromptLinkPath(
      isTextLink ? rawHref.slice(CODEX_TEXT_LINK_PREFIX.length) : rawHref,
    );
    const normalizedMarkdownHref =
      isTextLink || restoreMarkdownLinksAsTextLinks
        ? normalizeRichLinkHref(href)
        : null;
    pushTextUntil(labelStart);
    pushRestoredPromptLinkNode({
      agentMentionNode,
      appMentionNode,
      atMentionNode,
      chatGptConversationMentionNode,
      href,
      isTextLink,
      label,
      nodes,
      normalizedMarkdownHref,
      pluginMentionNode,
      rawHref,
      rawLabel,
      resourceMentionNode,
      restorePathLinksAsFileMentions,
      richLinkNode,
      schema,
      sitesProjectMentionNode,
      skillMentionNode,
    });
    textStartIndex = hrefEnd + 1;
    searchIndex = textStartIndex;
  }
  pushTextUntil(line.length);
  return nodes.length ? nodes : null;
}
function pushRestoredPromptLinkNode({
  agentMentionNode,
  appMentionNode,
  atMentionNode,
  chatGptConversationMentionNode,
  href,
  isTextLink,
  label,
  nodes,
  normalizedMarkdownHref,
  pluginMentionNode,
  rawHref,
  rawLabel,
  resourceMentionNode,
  restorePathLinksAsFileMentions,
  richLinkNode,
  schema,
  sitesProjectMentionNode,
  skillMentionNode,
}: {
  agentMentionNode: PromptTextSchema["nodes"]["agentMention"];
  appMentionNode: PromptTextSchema["nodes"]["appMention"];
  atMentionNode: PromptTextSchema["nodes"]["atMention"];
  chatGptConversationMentionNode: PromptTextSchema["nodes"]["chatGptConversationMention"];
  href: string;
  isTextLink: boolean;
  label: string;
  nodes: unknown[];
  normalizedMarkdownHref: string | null;
  pluginMentionNode: PromptTextSchema["nodes"]["pluginMention"];
  rawHref: string;
  rawLabel: string;
  resourceMentionNode: PromptTextSchema["nodes"]["resourceMention"];
  restorePathLinksAsFileMentions: boolean;
  richLinkNode: PromptTextSchema["nodes"]["richLink"];
  schema: PromptTextSchema;
  sitesProjectMentionNode: PromptTextSchema["nodes"]["sitesProjectMention"];
  skillMentionNode: PromptTextSchema["nodes"]["skillMention"];
}): void {
  const mentionKind = classifyMentionHref({
    href,
    label,
  });
  const richLink = createRichLinkFromDisplayText({
    displayText: label,
    href,
  });
  const mentionName = stripMentionTriggerSyntax(label);
  if (pluginMentionNode && mentionKind === "plugin") {
    nodes.push(
      pluginMentionNode.create({
        description: "",
        displayName: mentionName,
        iconSmall: "",
        name: mentionName,
        path: href,
      }),
    );
    return;
  }
  if (mentionKind === "app" || mentionKind === "skill") {
    const displayName = label.startsWith("$") ? mentionName : label;
    if (mentionKind === "app" && appMentionNode) {
      nodes.push(
        appMentionNode.create({
          description: "",
          displayName,
          iconSmall: "",
          name: slugifyAppMentionNameAlias(displayName),
          path: href,
        }),
      );
      return;
    }
    if (mentionKind === "skill" && skillMentionNode) {
      nodes.push(
        skillMentionNode.create({
          description: "",
          displayName: formatMentionDisplayName(displayName),
          iconSmall: "",
          name: displayName,
          path: href,
        }),
      );
      return;
    }
    nodes.push(createFallbackMarkdownText(schema, rawLabel, rawHref));
    return;
  }
  if (mentionKind === "agent" && agentMentionNode) {
    const displayName = label.startsWith("@") ? label.slice(1) : label;
    const conversationId = parseAgentConversationIdFromHref(href);
    const roleName = parseSubagentRoleNameFromHref(href);
    const slugName = slugifyAppMentionName(href);
    if (conversationId != null || roleName != null || slugName != null) {
      nodes.push(
        agentMentionNode.create({
          conversationId,
          displayName,
          name: displayName,
          path: href,
        }),
      );
    } else {
      nodes.push(createFallbackMarkdownText(schema, rawLabel, rawHref));
    }
    return;
  }
  if (mentionKind === "mcp-resource" && resourceMentionNode) {
    const resource = parseMcpResourceMentionHref(href);
    nodes.push(
      resource == null
        ? createFallbackMarkdownText(schema, rawLabel, rawHref)
        : resourceMentionNode.create({
            ...resource,
            title: label,
          }),
    );
    return;
  }
  if (
    mentionKind === "chatgpt-conversation" &&
    chatGptConversationMentionNode
  ) {
    const conversationId = parseChatGptConversationId(href);
    nodes.push(
      conversationId == null
        ? createFallbackMarkdownText(schema, rawLabel, rawHref)
        : chatGptConversationMentionNode.create({
            conversationId,
            path: href,
            title: label,
          }),
    );
    return;
  }
  if (mentionKind === "sites-project" && sitesProjectMentionNode) {
    nodes.push(
      sitesProjectMentionNode.create({
        path: href,
        title: label,
      }),
    );
    return;
  }
  if (isTextLink && normalizedMarkdownHref != null && schema.marks.link) {
    nodes.push(
      schema.text(label, [
        schema.marks.link.create({
          href: normalizedMarkdownHref,
        }),
      ]),
    );
  } else if (richLinkNode && richLink != null) {
    nodes.push(richLinkNode.create(richLink));
  } else if (normalizedMarkdownHref != null && schema.marks.link) {
    nodes.push(
      schema.text(label, [
        schema.marks.link.create({
          href: normalizedMarkdownHref,
        }),
      ]),
    );
  } else if (possibleUrlPattern.test(href)) {
    nodes.push(createFallbackMarkdownText(schema, rawLabel, rawHref));
  } else if (restorePathLinksAsFileMentions && atMentionNode) {
    nodes.push(
      atMentionNode.create({
        fsPath: href,
        label,
        path: href,
      }),
    );
  } else {
    nodes.push(createFallbackMarkdownText(schema, rawLabel, rawHref));
  }
}
export function promptTextToDoc({
  schema,
  text,
  restoreMarkdownLinksAsTextLinks = false,
  restorePathLinksAsFileMentions = true,
}: PromptTextToDocOptions): unknown {
  const paragraphNode = schema.nodes.paragraph;
  const docNode = schema.nodes.doc;
  if (!paragraphNode || !docNode) {
    throw Error("promptTextToDoc requires doc+paragraph nodes");
  }
  const paragraphs = text.split("\n").map((line) =>
    paragraphNode.create(
      null,
      parsePromptTextLine(schema, line, {
        restoreMarkdownLinksAsTextLinks,
        restorePathLinksAsFileMentions,
      }),
    ),
  );
  return docNode.create(
    null,
    paragraphs.length ? paragraphs : [paragraphNode.create()],
  );
}
