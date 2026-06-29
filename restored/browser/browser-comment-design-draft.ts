// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure draft/diff logic backing the browser sidebar comment + design-tweak overlay.

export type CssDeclarationEdit = {
  property: string;
  value: string;
  previousValue: string;
};

export type TextEdit = {
  value: string;
  previousValue: string;
};

export type DesignEditorState = {
  id: string;
  anchor: unknown;
  text?: TextEdit | null;
  declarations: CssDeclarationEdit[];
  draftAttribute: unknown;
  markerViewportPoint: unknown;
  provenance: CssDeclarationEdit[];
  selector: unknown;
  targetLabel: unknown;
  themeVariant: unknown;
  viewportSize: unknown;
};

export type DesignDraftGroup = {
  id: string;
  anchor: unknown;
  comment?: string;
  text?: TextEdit | null;
  declarations: CssDeclarationEdit[];
  draftAttribute: unknown;
  markerViewportPoint: unknown;
  provenance: CssDeclarationEdit[];
  selector: unknown;
  targetLabel: unknown;
  themeVariant: unknown;
  viewportSize: unknown;
  createdAt: string;
  updatedAt: string;
  status: string;
};

export type CommentDraft = {
  designDraft: DesignDraftGroup | null;
  hasCommentText: boolean;
  trimmedCommentText: string;
};

export function buildCommentDraft({
  baselineDesignGroup,
  commentText,
  designEditorState,
  isDesignSubmissionMode,
}: {
  baselineDesignGroup: DesignDraftGroup | null;
  commentText: string;
  designEditorState: DesignEditorState | null;
  isDesignSubmissionMode: boolean;
}): CommentDraft {
  const trimmedCommentText = commentText.trim();
  return {
    designDraft:
      !isDesignSubmissionMode || designEditorState == null
        ? null
        : buildDesignDraftFromEditor(
            designEditorState,
            baselineDesignGroup,
            trimmedCommentText,
          ),
    hasCommentText: trimmedCommentText.length > 0,
    trimmedCommentText,
  };
}

export function buildDesignDraftFromEditor(
  editorState: DesignEditorState,
  baseline: DesignDraftGroup | null,
  comment: string,
): DesignDraftGroup | null {
  const baselineByProperty = new Map(
    (baseline?.declarations ?? []).map((declaration) => [
      declaration.property,
      declaration,
    ]),
  );
  const declarations = editorState.declarations.flatMap((declaration) => {
    const baselineDeclaration = baselineByProperty.get(declaration.property);
    if (baselineDeclaration == null) {
      return declaration.value === declaration.previousValue
        ? []
        : [declaration];
    }
    return declaration.value === baselineDeclaration.previousValue
      ? []
      : [{ ...baselineDeclaration, value: declaration.value }];
  });
  const textEdit = diffTextEdit(editorState.text, baseline?.text);
  if (declarations.length === 0 && textEdit == null) return null;
  const now = new Date().toISOString();
  return {
    id: editorState.id,
    anchor: editorState.anchor,
    ...(comment.length === 0 ? {} : { comment }),
    text: textEdit,
    declarations,
    draftAttribute: editorState.draftAttribute,
    markerViewportPoint: editorState.markerViewportPoint,
    provenance: mergeDeclarationProvenance(
      declarations,
      editorState.provenance,
      baseline?.provenance ?? [],
    ),
    selector: editorState.selector,
    targetLabel: editorState.targetLabel,
    themeVariant: editorState.themeVariant,
    viewportSize: editorState.viewportSize,
    createdAt: baseline?.createdAt ?? now,
    updatedAt: now,
    status: baseline?.status ?? "current",
  };
}

export function areDesignDraftGroupsEqual(
  left: DesignDraftGroup | null,
  right: DesignDraftGroup | null,
): boolean {
  if (left == null || right == null) return left === right;
  if ((left.comment ?? "") !== (right.comment ?? "")) return false;
  if (!areTextEditsEqual(left.text, right.text)) return false;
  if (left.declarations.length !== right.declarations.length) return false;
  return left.declarations.every((declaration, index) => {
    const other = right.declarations[index];
    return (
      other != null &&
      declaration.property === other.property &&
      declaration.previousValue === other.previousValue &&
      declaration.value === other.value
    );
  });
}

export function areTextEditsEqual(
  left: TextEdit | null | undefined,
  right: TextEdit | null | undefined,
): boolean {
  if (left == null || right == null) return left === right;
  return (
    left.previousValue === right.previousValue && left.value === right.value
  );
}

export function diffTextEdit(
  editorText: TextEdit | null | undefined,
  baselineText: TextEdit | null | undefined,
): TextEdit | undefined | null {
  if (editorText == null) return baselineText;
  if (baselineText == null) {
    return editorText.value === editorText.previousValue
      ? undefined
      : editorText;
  }
  return editorText.value === baselineText.previousValue
    ? undefined
    : { ...baselineText, value: editorText.value };
}

export function mergeDeclarationProvenance(
  declarations: CssDeclarationEdit[],
  editorProvenance: CssDeclarationEdit[],
  baselineProvenance: CssDeclarationEdit[],
): CssDeclarationEdit[] {
  const provenanceByProperty = new Map(
    baselineProvenance.map((entry) => [entry.property, entry]),
  );
  for (const entry of editorProvenance) {
    provenanceByProperty.set(entry.property, entry);
  }
  return declarations.flatMap((declaration) => {
    const entry = provenanceByProperty.get(declaration.property);
    return entry == null ? [] : [entry];
  });
}

export function isDesignDraftActive({
  baselineDesignGroup,
  designDraft,
  designEditorState,
  isDesignEditorOpen,
}: {
  baselineDesignGroup: DesignDraftGroup | null;
  designDraft: DesignDraftGroup | null;
  designEditorState: DesignEditorState | null;
  isDesignEditorOpen: boolean;
}): boolean {
  return (
    designEditorState != null &&
    (isDesignEditorOpen || designDraft != null || baselineDesignGroup != null)
  );
}

export type ScrubValue = { value: string; unit?: string };

export function parseScrubValue(
  declarations: CssDeclarationEdit[],
  property: string,
): ScrubValue | null {
  const declaration = declarations.find((item) => item.property === property);
  if (declaration == null) return null;
  const pixelMatch = /^(-?\d+(?:\.\d+)?)px$/.exec(declaration.value.trim());
  return pixelMatch == null
    ? { value: declaration.value }
    : { unit: "px", value: pixelMatch[1] };
}
