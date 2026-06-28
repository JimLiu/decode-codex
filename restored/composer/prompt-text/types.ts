// Restored from ref/webview/assets/prompt-text-BpPEyD-S.js
// prompt-text-BpPEyD-S chunk restored from the Codex webview bundle.
export type ProseMirrorNodeType = {
  create(attrs?: unknown, content?: unknown): unknown;
};
export type ProseMirrorMarkType = {
  create(attrs?: unknown): unknown;
};
export type PromptTextSchema = {
  nodes: {
    appMention?: ProseMirrorNodeType;
    agentMention?: ProseMirrorNodeType;
    atMention?: ProseMirrorNodeType;
    chatGptConversationMention?: ProseMirrorNodeType;
    doc?: ProseMirrorNodeType;
    paragraph?: ProseMirrorNodeType;
    pluginMention?: ProseMirrorNodeType;
    resourceMention?: ProseMirrorNodeType;
    richLink?: ProseMirrorNodeType;
    sitesProjectMention?: ProseMirrorNodeType;
    skillMention?: ProseMirrorNodeType;
  };
  marks: {
    link?: ProseMirrorMarkType;
  };
  text(text: string, marks?: unknown[]): unknown;
};
export type LibraryPreviewAttachment =
  | {
      kind: "file";
      file: {
        fsPath?: string | null;
        path: string;
      };
    }
  | {
      kind: "image";
      image: {
        localPath?: string | null;
        src: string;
      };
    };
export type NewPromptLocation =
  | {
      entrypoint: "home" | "panel";
      kind: "new";
      routeConversationId: string | null;
    }
  | {
      entrypoint: "library-preview";
      implicitAttachment: LibraryPreviewAttachment;
      kind: "new";
      routeConversationId: null;
    };
export type LocalPromptLocation = {
  conversationId: string;
  kind: "local";
  placement: string;
  routeConversationId: string;
};
export type CloudPromptLocation = {
  kind: "cloud";
  routeConversationId: string | null;
  taskId: string;
};
export type OtherPromptLocation = {
  kind: "other";
  routeConversationId: string | null;
};
export type PromptLocation =
  | CloudPromptLocation
  | LocalPromptLocation
  | NewPromptLocation
  | OtherPromptLocation;
export type PromptTextToDocOptions = {
  restoreMarkdownLinksAsTextLinks?: boolean;
  restorePathLinksAsFileMentions?: boolean;
  schema: PromptTextSchema;
  text: string;
};
export type PlainTextToDocOptions = {
  schema: PromptTextSchema;
  text: string;
};
export type ParsePromptTextLineOptions = {
  restoreMarkdownLinksAsTextLinks?: boolean;
  restorePathLinksAsFileMentions?: boolean;
};
export type ParsedMarkdownPromptLink = {
  end: number;
  label: string;
  path: string;
  start: number;
};
