// Restored from ref/webview/assets/mention-item-Cs3Au6lU.js
// mention-item-Cs3Au6lU chunk restored from the Codex webview bundle.
// Semantic implementation for composer mention item hrefs and menu item models.
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import * as reactIntlRuntime from "../../vendor/react-intl";
import { parseDirectivesM as formatDirectiveMention } from "../../utils/parse-directives";
import { getSkillDisplayName } from "../../plugins/skill-utils";
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};
type IntlShape = {
  formatMessage(descriptor: MessageDescriptor): string;
};
type MentionKind =
  | "agent"
  | "app"
  | "chatgpt-conversation"
  | "mcp-resource"
  | "plugin"
  | "sites-project"
  | "skill"
  | "text";
type MentionBaseItem = {
  brandColor?: string;
  description?: string;
  displayName: string;
  iconSmall?: string;
  name: string;
  path: string;
};
type SkillLike = {
  description?: string;
  interface?: {
    iconSmall?: string;
    shortDescription?: string;
  };
  name: string;
  path: string;
  short_description?: string;
  shortDescription?: string;
};
type AppLike = {
  description?: string;
  id: string;
  logoUrl?: string;
  logoUrlDark?: string;
  name: string;
};
type PluginMentionLabels = {
  browserUse: string;
  computerUse: string;
};
type PluginLike = {
  interface?: {
    brandColor?: string;
  };
  id: string;
  name: string;
};
type PluginMentionSource = {
  composerIconPath?: string;
  description?: string;
  displayName?: string;
  logoPath?: string;
  plugin: PluginLike;
};
type AgentConversationSource = {
  conversationId: string;
  displayName: string;
};
type SubagentSource = {
  roleName: string;
};
type McpResourceMention = {
  resourceUri: string;
  server: string;
};
const defineMessages = reactIntlRuntime.libI as <TMessages>(
  messages: TMessages,
) => TMessages;
export const pluginMentionMessages = defineMessages({
  label: {
    id: "composer.pluginMention.browserUse.label",
    defaultMessage: "Browser",
    description:
      "Short display label for the Browser plugin in mention chips, mention menus, and settings.",
  },
  restrictedAvailabilityDescription: {
    id: "settings.browserPlugin.restrictedAvailabilityDescription",
    defaultMessage:
      "Disabled by your organization or unavailable in your region",
    description:
      "Description shown when the Browser or Google Chrome plugin is unavailable because access is restricted.",
  },
});
export const specialPluginMentionMessages = defineMessages({
  computerUse: {
    id: "composer.pluginMention.computerUse.label",
    defaultMessage: "Computer",
    description:
      "Short display label for the Computer Use plugin in mention chips and mention menus.",
  },
});
export const COMPUTER_USE_PLUGIN_NAME = "computer-use";
const APP_HREF_PREFIX = "app://";
const AGENT_HREF_PREFIX = "agent://";
const CHATGPT_CONVERSATION_HREF_PREFIX = "chatgpt-conversation://";
const MCP_RESOURCE_HREF_PREFIX = "mcp-resource://";
const PLUGIN_HREF_PREFIX = "plugin://";
const SITES_PROJECT_HREF_PREFIX = "sites-project://";
const SUBAGENT_HREF_PREFIX = "subagent://";
const THREAD_HREF_PREFIX = "thread://";
export function getMentionDescription(item: SkillLike): string | undefined {
  const interfaceDescription = item.interface?.shortDescription;
  if (interfaceDescription != null && interfaceDescription.trim().length > 0) {
    return interfaceDescription;
  }
  return item.short_description ?? item.shortDescription ?? item.description;
}
export function slugifyAppMentionName(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug === "" ? "app" : slug;
}
export function createAppMentionHref(appId: string): string {
  return `${APP_HREF_PREFIX}${appId}`;
}
export function createAgentMentionHref(conversationId: string): string {
  return `${AGENT_HREF_PREFIX}${conversationId}`;
}
export function createSubagentMentionHref(roleName: string): string {
  return `${SUBAGENT_HREF_PREFIX}${roleName}`;
}
export function createThreadMentionHref(threadId: string): string {
  return `${THREAD_HREF_PREFIX}${threadId.trim()}`;
}
export function createPluginMentionHref(pluginId: string): string {
  return `${PLUGIN_HREF_PREFIX}${pluginId.trim()}`;
}
export function createSitesProjectHref(projectId: string): string {
  return `${SITES_PROJECT_HREF_PREFIX}${encodeURIComponent(projectId.trim())}`;
}
export function createSitesProjectMentionMarkdown({
  projectId,
  title,
}: {
  projectId: string;
  title: string;
}): string {
  return formatDirectiveMention(title, createSitesProjectHref(projectId));
}
export function createMcpResourceMentionHref({
  resourceUri,
  server,
}: McpResourceMention): string {
  return `${MCP_RESOURCE_HREF_PREFIX}${encodeURIComponent(server)}/${encodeURIComponent(resourceUri)}`;
}
export function isAppMentionHref(href: string): boolean {
  return href.startsWith(APP_HREF_PREFIX);
}
export function isAgentMentionHref(href: string): boolean {
  return href.startsWith(AGENT_HREF_PREFIX);
}
export function isSubagentMentionHref(href: string): boolean {
  return href.startsWith(SUBAGENT_HREF_PREFIX);
}
export function isChatGptConversationHref(href: string): boolean {
  return href.startsWith(CHATGPT_CONVERSATION_HREF_PREFIX);
}
export function isPluginMentionHref(href: string): boolean {
  return href.startsWith(PLUGIN_HREF_PREFIX);
}
export function parseChatGptConversationId(href: string): string | null {
  if (!isChatGptConversationHref(href)) return null;
  try {
    const conversationId = decodeURIComponent(
      href.slice(CHATGPT_CONVERSATION_HREF_PREFIX.length),
    ).trim();
    return conversationId.length === 0 ? null : conversationId;
  } catch {
    return null;
  }
}
export function parsePluginMentionId(href: string): string | null {
  if (!isPluginMentionHref(href)) return null;
  const pluginId = href.slice(PLUGIN_HREF_PREFIX.length).trim();
  return pluginId.length === 0 ? null : pluginId;
}
export function parseSitesProjectId(href: string): string | null {
  if (!href.startsWith(SITES_PROJECT_HREF_PREFIX)) return null;
  try {
    const projectId = decodeURIComponent(
      href.slice(SITES_PROJECT_HREF_PREFIX.length),
    ).trim();
    return projectId.length === 0 ? null : projectId;
  } catch {
    return null;
  }
}
export function parseMcpResourceMentionHref(
  href: string,
): McpResourceMention | null {
  if (!href.startsWith(MCP_RESOURCE_HREF_PREFIX)) return null;
  const encodedResource = href.slice(MCP_RESOURCE_HREF_PREFIX.length);
  const separatorIndex = encodedResource.indexOf("/");
  if (separatorIndex === -1) return null;
  try {
    const server = decodeURIComponent(encodedResource.slice(0, separatorIndex));
    const resourceUri = decodeURIComponent(
      encodedResource.slice(separatorIndex + 1),
    );
    return server.length === 0 || resourceUri.length === 0
      ? null
      : {
          resourceUri,
          server,
        };
  } catch {
    return null;
  }
}
export function parseAgentConversationIdFromHref(href: string): unknown | null {
  if (!isAgentMentionHref(href)) return null;
  const conversationId = href.slice(AGENT_HREF_PREFIX.length).trim();
  return conversationId.length === 0
    ? null
    : sourceRuntime.srcAi(conversationId);
}
export function parseThreadIdFromHref(href: string): unknown | null {
  if (!href.startsWith(THREAD_HREF_PREFIX)) return null;
  const threadId = href.slice(THREAD_HREF_PREFIX.length).trim();
  return threadId.length === 0 ? null : sourceRuntime.srcAi(threadId);
}
export function parseSubagentRoleNameFromHref(href: string): string | null {
  if (!isSubagentMentionHref(href)) return null;
  const roleName = href.slice(SUBAGENT_HREF_PREFIX.length).trim();
  return roleName.length === 0 ? null : roleName;
}
export function getSkillOrPluginMentionKind(
  href: string,
): "app" | "plugin" | "skill" {
  return isAppMentionHref(href)
    ? "app"
    : isPluginMentionHref(href)
      ? "plugin"
      : "skill";
}
export function classifyMentionHref({
  href,
  label,
}: {
  href: string;
  label: string;
}): MentionKind {
  return isAgentMentionHref(href) ||
    isSubagentMentionHref(href) ||
    parseThreadIdFromHref(href) != null
    ? "agent"
    : isPluginMentionHref(href)
      ? "plugin"
      : parseChatGptConversationId(href) == null
        ? parseMcpResourceMentionHref(href) == null
          ? parseSitesProjectId(href) == null
            ? isAppMentionHref(href)
              ? "app"
              : label.trim().startsWith("$")
                ? "skill"
                : "text"
            : "sites-project"
          : "mcp-resource"
        : "chatgpt-conversation";
}
export function stripMentionTriggerSyntax(label: string): string {
  const trimmedLabel = label.trim();
  return (trimmedLabel.startsWith("$[") || trimmedLabel.startsWith("@[")) &&
    trimmedLabel.endsWith("]")
    ? trimmedLabel.slice(2, -1)
    : trimmedLabel.startsWith("$") || trimmedLabel.startsWith("@")
      ? trimmedLabel.slice(1)
      : trimmedLabel;
}
export function createSkillMentionBaseItem(skill: SkillLike): MentionBaseItem {
  return {
    name: skill.name,
    displayName: getSkillDisplayName(skill),
    path: skill.path,
    description: getMentionDescription(skill),
    iconSmall: skill.interface?.iconSmall ?? "",
  };
}
export function createAppMentionBaseItem(app: AppLike): MentionBaseItem {
  return {
    name: slugifyAppMentionName(app.name),
    displayName: app.name,
    path: createAppMentionHref(app.id),
    description: app.description ?? "",
    iconSmall: app.logoUrl ?? app.logoUrlDark ?? "",
  };
}
export function createPluginMentionBaseItem(
  source: PluginMentionSource,
  labels: PluginMentionLabels = getDefaultPluginMentionLabels(),
): MentionBaseItem {
  let name = source.plugin.name;
  let displayName = source.displayName ?? name;
  let normalizedName = name;
  if (name === "browser") {
    displayName = labels.browserUse;
    normalizedName = displayName;
  } else if (name === COMPUTER_USE_PLUGIN_NAME) {
    displayName = labels.computerUse;
    normalizedName = displayName;
  }
  return {
    name: normalizedName,
    displayName,
    path: createPluginMentionHref(source.plugin.id),
    description: source.description ?? "",
    iconSmall: getPluginMentionIcon(source),
    brandColor: getPluginBrandColor(source.plugin.interface),
  };
}
export function getPluginMentionIcon(source: PluginMentionSource): string {
  return source.composerIconPath ?? source.logoPath ?? "";
}
export function createSkillMentionItem(skill: SkillLike) {
  return {
    kind: "skill",
    ...createSkillMentionBaseItem(skill),
  };
}
export function createAppMentionItem(app: AppLike) {
  return {
    kind: "app",
    ...createAppMentionBaseItem(app),
  };
}
export function createPluginMentionItem(
  source: PluginMentionSource,
  labels?: PluginMentionLabels,
) {
  return {
    kind: "plugin",
    ...createPluginMentionBaseItem(source, labels),
  };
}
export function formatPluginMentionLabels(
  intl: IntlShape,
): PluginMentionLabels {
  return {
    browserUse: intl.formatMessage(pluginMentionMessages.label),
    computerUse: intl.formatMessage(specialPluginMentionMessages.computerUse),
  };
}
export function getDefaultPluginMentionLabels(): PluginMentionLabels {
  return {
    browserUse: pluginMentionMessages.label.defaultMessage,
    computerUse: specialPluginMentionMessages.computerUse.defaultMessage,
  };
}
export function getPluginBrandColor(
  pluginInterface: PluginLike["interface"] | undefined,
): string | undefined {
  const brandColor = pluginInterface?.brandColor;
  if (!(brandColor == null || brandColor.length === 0)) return brandColor;
}
export function createAgentMentionItem({
  conversationId,
  displayName,
}: AgentConversationSource) {
  const normalizedDisplayName = trimAgentMentionPrefix(displayName);
  return {
    kind: "agent",
    name: normalizedDisplayName.toLowerCase(),
    displayName: normalizedDisplayName,
    conversationId,
    path: createAgentMentionHref(conversationId),
  };
}
export function createSubagentMentionItem(source: SubagentSource) {
  return {
    kind: "agent",
    name: source.roleName,
    displayName: source.roleName,
    path: createSubagentMentionHref(source.roleName),
  };
}
export function trimAgentMentionPrefix(displayName: string): string {
  const trimmedDisplayName = displayName.trim();
  return trimmedDisplayName.startsWith("@")
    ? trimmedDisplayName.slice(1).trim()
    : trimmedDisplayName;
}
