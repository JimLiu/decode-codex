// Restored from ref/.vite/build/comment-preload.js
// Design draft CSS serialization helpers for browser sidebar tweaks.

export type BrowserSidebarDesignStyleDeclaration = {
  property: string;
  value: string;
  previousValue: string;
};

export type BrowserSidebarDesignStyleDraft = {
  draftAttribute: string;
  declarations: BrowserSidebarDesignStyleDeclaration[];
};

export const DEFAULT_DESIGN_GROUP_ATTRIBUTE = "data-codex-browser-design-group";

export function readDesignStyleDeclarations(
  style: CSSStyleDeclaration,
  properties: readonly string[],
): BrowserSidebarDesignStyleDeclaration[] {
  return properties.map((property) => {
    const value = style.getPropertyValue(property).trim();
    return {
      property,
      value,
      previousValue: value,
    };
  });
}

export function mergeDesignStyleDeclarationValues(
  declarations: readonly BrowserSidebarDesignStyleDeclaration[],
  sourceDeclarations: readonly BrowserSidebarDesignStyleDeclaration[],
): BrowserSidebarDesignStyleDeclaration[] {
  const sourceDeclarationByProperty = new Map(
    sourceDeclarations.map((declaration) => [
      declaration.property,
      declaration,
    ]),
  );
  return declarations.map((declaration) => {
    const sourceDeclaration = sourceDeclarationByProperty.get(
      declaration.property,
    );
    return sourceDeclaration == null
      ? declaration
      : {
          ...declaration,
          previousValue: sourceDeclaration.previousValue,
          value: sourceDeclaration.value,
        };
  });
}

export function serializeDesignDraftStyles(
  drafts: readonly BrowserSidebarDesignStyleDraft[],
  designGroupAttribute: string = DEFAULT_DESIGN_GROUP_ATTRIBUTE,
): string {
  return drafts
    .flatMap((draft) =>
      serializeDesignDraftStyleRule(draft, designGroupAttribute),
    )
    .join("\n\n");
}

function serializeDesignDraftStyleRule(
  draft: BrowserSidebarDesignStyleDraft,
  designGroupAttribute: string,
): string[] {
  const changedDeclarations = draft.declarations.filter(
    (declaration) =>
      declaration.value.trim() !== declaration.previousValue.trim(),
  );
  return changedDeclarations.length === 0
    ? []
    : [
        [
          `[${designGroupAttribute}~="${escapeCssAttributeValue(
            draft.draftAttribute,
          )}"] {`,
          ...changedDeclarations.map(
            (declaration) =>
              `  ${declaration.property}: ${declaration.value} !important;`,
          ),
          "}",
        ].join("\n"),
      ];
}

function escapeCssAttributeValue(attributeValue: string): string {
  return attributeValue.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
