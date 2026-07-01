// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// AboveComposerSuggestionActions — the above-composer suggestion-action overlay.
//
// Lazy-loaded by the composer body, this surfaces (at most) a single actionable
// chip rendered into a portal target positioned above the composer input:
//   * an artifact-plugin suggestion ("Create a document / presentation /
//     spreadsheet") inferred from the live draft text, or
//   * a "Use plan mode" nudge when the draft mentions planning and plan mode is
//     available but not yet active.
//
// The owning body only supplies the portal target and the two feature flags;
// everything else (intl, the ProseMirror controller, the active conversation's
// collaboration modes, and per-view dismissals) is read from the composer
// scope. The chip exposes the `data-codex-above-composer-suggestion` /
// `data-codex-above-composer-suggestion-action` hooks the composer keymap uses
// to trigger the primary action via Shift+Tab.
import {
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
  type ComponentType,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import {
  clsx,
  composerScope,
  useActiveConversationId,
  useCollaborationModes,
  useComposerController,
  useComposerIntl,
  useScopeStore,
} from "../boundaries/onboarding-commons-externals.facade";

// ── types ───────────────────────────────────────────────────────────────────
type ArtifactPluginSuggestionKind = "document" | "presentation" | "spreadsheet";

type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};
type IntlMessageValues = Record<string, string | number | boolean>;
type IntlLike = {
  formatMessage: (
    descriptor: MessageDescriptor,
    values?: IntlMessageValues,
  ) => string;
};

type IconProps = {
  className?: string;
};

type SuggestionDefinition = {
  id: string;
  title: ReactNode;
  icon?: ComponentType<IconProps>;
  meta?: ReactNode;
  actionLabel: ReactNode;
  actionDisabled?: boolean;
  dismissOnAction?: boolean;
  layout?: "inline" | "stacked";
  onAction: () => void | Promise<void>;
  onDismiss: () => void;
};

type SetDismissedSuggestionIds = (
  update: (previousIds: string[]) => string[],
) => void;

interface ProseMirrorNode {
  textContent: string;
  type: { name: string };
  attrs: Record<string, unknown>;
  descendants: (visit: (node: ProseMirrorNode) => boolean) => void;
}

interface ArtifactPluginMentionDescriptor {
  kind: "plugin";
  name: string;
  displayName: string;
  path: string;
  description: string;
  iconSmall: string;
}

interface ComposerController {
  view: { state: { doc: ProseMirrorNode } };
  subscribe?: (listener: () => void) => () => void;
  insertMentionAtSelection: (mention: ArtifactPluginMentionDescriptor) => void;
}

// ── artifact / plan detection ───────────────────────────────────────────────
const PLAN_KEYWORD_SUGGESTION_ID = "keyword-plan-mode";
const PLAN_KEYWORD_PATTERN = /\bplan\b/i;
const ARTIFACT_ACTION_VERB_PATTERN =
  /\b(?:build|create|design|draft|generate|make|prepare|produce|write)\b/i;
const ARTIFACT_KIND_PATTERNS: Array<{
  kind: ArtifactPluginSuggestionKind;
  pattern: RegExp;
}> = [
  { kind: "document", pattern: /\b(?:doc|docs|document|documents)\b/i },
  {
    kind: "presentation",
    pattern: /\b(?:presentation|presentations|slide|slides|deck)\b/i,
  },
  {
    kind: "spreadsheet",
    pattern: /\b(?:sheet|sheets|spreadsheet|spreadsheets|excel)\b/i,
  },
];
const PLUGIN_PATH_PREFIX = "plugin://";

function getArtifactPluginSuggestionId(
  kind: ArtifactPluginSuggestionKind,
): string {
  return `keyword-artifact-${kind}`;
}

function mapPluginNameToArtifactKind(
  name: string | undefined,
): ArtifactPluginSuggestionKind | null {
  switch (name) {
    case "documents":
      return "document";
    case "presentations":
      return "presentation";
    case "spreadsheets":
      return "spreadsheet";
    default:
      return null;
  }
}

function resolveArtifactKindFromPluginPath(
  path: string,
): ArtifactPluginSuggestionKind | null {
  const normalized = path.toLowerCase().replaceAll("\\", "/");
  if (normalized.startsWith(PLUGIN_PATH_PREFIX)) {
    return mapPluginNameToArtifactKind(
      normalized.slice(PLUGIN_PATH_PREFIX.length).split("@")[0],
    );
  }
  const skillName = normalized.match(
    /(?:^|\/)skills\/([^/]+)\/skill\.md$/,
  )?.[1];
  return skillName == null ? null : mapPluginNameToArtifactKind(skillName);
}

function findExistingArtifactPluginMentionKind(
  doc: ProseMirrorNode,
): ArtifactPluginSuggestionKind | null {
  let found: ArtifactPluginSuggestionKind | null = null;
  doc.descendants((node) => {
    if (
      found != null ||
      (node.type.name !== "skillMention" && node.type.name !== "pluginMention")
    ) {
      return true;
    }
    const kind = resolveArtifactKindFromPluginPath(
      typeof node.attrs.path === "string" ? node.attrs.path : "",
    );
    if (kind != null) found = kind;
    return true;
  });
  return found;
}

function detectArtifactPluginSuggestionKind(
  doc: ProseMirrorNode,
  hideArtifactPluginSuggestions: boolean,
): ArtifactPluginSuggestionKind | null {
  if (
    hideArtifactPluginSuggestions ||
    findExistingArtifactPluginMentionKind(doc) != null
  ) {
    return null;
  }
  const text = doc.textContent;
  if (!ARTIFACT_ACTION_VERB_PATTERN.test(text)) return null;

  let matchedKind: ArtifactPluginSuggestionKind | null = null;
  for (const { kind, pattern } of ARTIFACT_KIND_PATTERNS) {
    if (!pattern.test(text)) continue;
    if (matchedKind != null) return null;
    matchedKind = kind;
  }
  return matchedKind;
}

function shouldShowPlanKeywordSuggestion({
  composerText,
  hasPlanMode,
  isPlanMode,
  isDismissed,
  showPlanKeywordSuggestion,
}: {
  composerText: string;
  hasPlanMode: boolean;
  isPlanMode: boolean;
  isDismissed: boolean;
  showPlanKeywordSuggestion: boolean;
}): boolean {
  return (
    showPlanKeywordSuggestion &&
    hasPlanMode &&
    !isPlanMode &&
    !isDismissed &&
    PLAN_KEYWORD_PATTERN.test(composerText)
  );
}

function buildPluginPath(pluginReference: string): string {
  return `${PLUGIN_PATH_PREFIX}${pluginReference}`;
}

function buildArtifactPluginMentionDescriptor(
  kind: ArtifactPluginSuggestionKind,
): ArtifactPluginMentionDescriptor {
  switch (kind) {
    case "document":
      return {
        kind: "plugin",
        name: "documents",
        displayName: "Documents",
        path: buildPluginPath("documents@openai-primary-runtime"),
        description: "",
        iconSmall: "",
      };
    case "presentation":
      return {
        kind: "plugin",
        name: "presentations",
        displayName: "Presentations",
        path: buildPluginPath("presentations@openai-primary-runtime"),
        description: "",
        iconSmall: "",
      };
    case "spreadsheet":
      return {
        kind: "plugin",
        name: "spreadsheets",
        displayName: "Spreadsheets",
        path: buildPluginPath("spreadsheets@openai-primary-runtime"),
        description: "",
        iconSmall: "",
      };
  }
}

// Reconstruction note: the source also moves the selection to the end of the
// document and inserts a trailing space before inserting the mention (via
// ProseMirror `Selection.atEnd`). That positioning is elided here to avoid a
// direct ProseMirror dependency; the mention insertion itself is preserved.
function activateArtifactPluginMention(
  controller: ComposerController,
  kind: ArtifactPluginSuggestionKind,
): void {
  controller.insertMentionAtSelection(
    buildArtifactPluginMentionDescriptor(kind),
  );
}

function addDismissedSuggestionId(
  setDismissedSuggestionIds: SetDismissedSuggestionIds,
  suggestionId: string,
): void {
  setDismissedSuggestionIds((previousIds) =>
    previousIds.includes(suggestionId)
      ? previousIds
      : [...previousIds, suggestionId],
  );
}

// ── suggestion definitions ──────────────────────────────────────────────────
function getArtifactPluginSuggestionMetadata(
  intl: IntlLike,
  kind: ArtifactPluginSuggestionKind,
): {
  icon: ComponentType<IconProps>;
  pluginName: string;
  title: string;
} {
  switch (kind) {
    case "document":
      return {
        icon: DocumentIcon,
        pluginName: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.document.pluginName",
          defaultMessage: "Documents",
          description:
            "Documents plugin name in the above-composer artifact suggestion",
        }),
        title: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.document.title",
          defaultMessage: "Create a document",
          description:
            "Title for the above-composer Documents plugin suggestion",
        }),
      };
    case "presentation":
      return {
        icon: PresentationIcon,
        pluginName: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.presentation.pluginName",
          defaultMessage: "Presentations",
          description:
            "Presentations plugin name in the above-composer artifact suggestion",
        }),
        title: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.presentation.title",
          defaultMessage: "Create a presentation",
          description:
            "Title for the above-composer Presentations plugin suggestion",
        }),
      };
    case "spreadsheet":
      return {
        icon: SpreadsheetIcon,
        pluginName: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.spreadsheet.pluginName",
          defaultMessage: "Spreadsheets",
          description:
            "Spreadsheets plugin name in the above-composer artifact suggestion",
        }),
        title: intl.formatMessage({
          id: "composer.aboveSuggestion.artifact.spreadsheet.title",
          defaultMessage: "Create a spreadsheet",
          description:
            "Title for the above-composer Spreadsheets plugin suggestion",
        }),
      };
  }
}

function buildArtifactPluginSuggestion({
  intl,
  artifactPluginSuggestionKind,
  activateArtifactPlugin,
  setDismissedSuggestionIds,
}: {
  intl: IntlLike;
  artifactPluginSuggestionKind: ArtifactPluginSuggestionKind | null;
  activateArtifactPlugin: (
    kind: ArtifactPluginSuggestionKind,
  ) => void | Promise<void>;
  setDismissedSuggestionIds: SetDismissedSuggestionIds;
}): SuggestionDefinition | null {
  if (artifactPluginSuggestionKind == null) return null;

  const suggestionId = getArtifactPluginSuggestionId(
    artifactPluginSuggestionKind,
  );
  const { icon, pluginName, title } = getArtifactPluginSuggestionMetadata(
    intl,
    artifactPluginSuggestionKind,
  );
  return {
    id: suggestionId,
    title,
    icon,
    meta: <ShortcutHint />,
    actionLabel: intl.formatMessage(
      {
        id: "composer.aboveSuggestion.artifact.action",
        defaultMessage: "Use {pluginName}",
        description:
          "Primary button label for activating an artifact creation plugin from an above-composer suggestion",
      },
      { pluginName },
    ),
    onAction: () => activateArtifactPlugin(artifactPluginSuggestionKind),
    onDismiss: () =>
      addDismissedSuggestionId(setDismissedSuggestionIds, suggestionId),
  };
}

function buildPlanKeywordSuggestion({
  intl,
  shouldShowPlanSuggestion,
  setSelectedCollaborationMode,
  setDismissedSuggestionIds,
}: {
  intl: IntlLike;
  shouldShowPlanSuggestion: boolean;
  setSelectedCollaborationMode: (mode: "plan") => void;
  setDismissedSuggestionIds: SetDismissedSuggestionIds;
}): SuggestionDefinition | null {
  if (!shouldShowPlanSuggestion) return null;

  return {
    id: PLAN_KEYWORD_SUGGESTION_ID,
    title: intl.formatMessage({
      id: "composer.aboveSuggestion.plan.title",
      defaultMessage: "Create a plan",
      description: "Title for the above-composer plan keyword suggestion",
    }),
    icon: PlanIcon,
    meta: <ShortcutHint />,
    actionLabel: intl.formatMessage({
      id: "composer.aboveSuggestion.plan.action",
      defaultMessage: "Use plan mode",
      description:
        "Primary button label for enabling plan mode from the above-composer suggestion",
    }),
    onAction: () => {
      setSelectedCollaborationMode("plan");
    },
    onDismiss: () =>
      addDismissedSuggestionId(
        setDismissedSuggestionIds,
        PLAN_KEYWORD_SUGGESTION_ID,
      ),
  };
}

function chooseAboveComposerSuggestion({
  intl,
  artifactPluginSuggestionKind,
  activateArtifactPlugin,
  shouldShowPlanSuggestion,
  setSelectedCollaborationMode,
  setDismissedSuggestionIds,
}: {
  intl: IntlLike;
  artifactPluginSuggestionKind: ArtifactPluginSuggestionKind | null;
  activateArtifactPlugin: (
    kind: ArtifactPluginSuggestionKind,
  ) => void | Promise<void>;
  shouldShowPlanSuggestion: boolean;
  setSelectedCollaborationMode: (mode: "plan") => void;
  setDismissedSuggestionIds: SetDismissedSuggestionIds;
}): SuggestionDefinition | null {
  return (
    buildArtifactPluginSuggestion({
      intl,
      artifactPluginSuggestionKind,
      activateArtifactPlugin,
      setDismissedSuggestionIds,
    }) ??
    buildPlanKeywordSuggestion({
      intl,
      shouldShowPlanSuggestion,
      setSelectedCollaborationMode,
      setDismissedSuggestionIds,
    })
  );
}

// ── presentational pieces ───────────────────────────────────────────────────
function ShortcutHint(): ReactNode {
  return (
    <span className="pointer-events-none inline-flex h-auto rounded-md px-1 py-0.5 text-xs leading-none">
      Shift + Tab
    </span>
  );
}

function SuggestionShell({
  actions,
  icon,
  layout = "inline",
  meta,
  suggestionId,
  title,
}: {
  actions: ReactNode;
  icon?: ReactNode;
  layout?: "inline" | "stacked";
  meta?: ReactNode;
  suggestionId: string;
  title: ReactNode;
}) {
  const isStacked = layout === "stacked";
  const iconElement =
    icon == null ? null : (
      <span className="flex items-center justify-center text-token-foreground">
        {icon}
      </span>
    );
  const metaElement =
    meta == null ? null : (
      <span
        className={clsx(
          "text-sm text-token-description-foreground",
          isStacked ? "leading-4" : "hidden leading-none @[500px]:inline",
        )}
      >
        {meta}
      </span>
    );

  return (
    <div className="pointer-events-auto flex w-full max-w-full justify-center">
      <div
        className={clsx(
          "relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm",
          isStacked ? "py-2" : "py-1.5",
        )}
        data-codex-above-composer-suggestion={suggestionId}
      >
        <div
          className={clsx(
            "flex min-w-0 flex-1 gap-2",
            isStacked ? "items-start" : "items-center",
          )}
        >
          {iconElement}
          <div
            className={clsx(
              "min-w-0 flex-1",
              isStacked
                ? "flex flex-col gap-1 text-sm"
                : "flex items-center gap-2",
            )}
          >
            <span
              className={clsx(
                "text-sm font-medium text-token-foreground",
                isStacked
                  ? "min-w-0 leading-5 break-words"
                  : "truncate leading-[18px]",
              )}
            >
              {title}
            </span>
            {metaElement}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">{actions}</div>
      </div>
    </div>
  );
}

function AboveComposerSuggestionChip({
  intl,
  suggestion,
}: {
  intl: IntlLike;
  suggestion: SuggestionDefinition;
}) {
  const [isActionPending, setIsActionPending] = useState(false);
  const Icon = suggestion.icon;
  const iconElement = Icon ? <Icon className="icon-xs shrink-0" /> : null;
  const isActionDisabled =
    suggestion.actionDisabled === true || isActionPending;
  const dismissOnAction = suggestion.dismissOnAction !== false;
  const dismissLabel = intl.formatMessage({
    id: "composer.aboveSuggestion.dismiss",
    defaultMessage: "Dismiss suggestion",
    description: "Aria label for dismissing an above-composer suggestion",
  });

  const handleActionClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isActionDisabled) return;

    try {
      const actionResult = suggestion.onAction();
      if (actionResult != null && typeof actionResult.then === "function") {
        setIsActionPending(true);
        actionResult
          .then(() => {
            if (dismissOnAction) suggestion.onDismiss();
          })
          .catch(ignoreActionError)
          .finally(() => {
            setIsActionPending(false);
          });
        return;
      }
    } catch {
      return;
    }

    if (dismissOnAction) suggestion.onDismiss();
  };

  const handleDismissClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    suggestion.onDismiss();
  };

  const actions = (
    <>
      <button
        type="button"
        className="no-drag rounded-full px-2.5 py-1 text-sm font-medium text-token-foreground hover:bg-token-list-hover-background disabled:cursor-default disabled:opacity-50"
        data-codex-above-composer-suggestion-action
        disabled={isActionDisabled}
        aria-busy={isActionPending}
        onClick={handleActionClick}
      >
        {suggestion.actionLabel}
      </button>
      <button
        type="button"
        className="no-drag flex size-[22px] shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground select-none hover:bg-token-list-hover-background focus:outline-none"
        aria-label={dismissLabel}
        onClick={handleDismissClick}
      >
        <DismissIcon className="icon-xs" />
      </button>
    </>
  );

  return (
    <SuggestionShell
      actions={actions}
      icon={iconElement}
      layout={suggestion.layout}
      meta={suggestion.meta}
      suggestionId={suggestion.id}
      title={suggestion.title}
    />
  );
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 1.75h5.25L12 4.5v9.75H4V1.75Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
      <path d="M9.25 1.75V4.5H12" stroke="currentColor" strokeWidth={1.25} />
      <path
        d="M5.75 7h4.5M5.75 9.25h4.5M5.75 11.5h3"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

function PresentationIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.25 2.75h11.5v7.5H2.25v-7.5Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
      <path
        d="M8 10.25v3M5.75 13.25h4.5M5.25 5.5h5.5M5.25 7.5h3"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpreadsheetIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.75 2.75h10.5v10.5H2.75V2.75Z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
      <path
        d="M2.75 6.25h10.5M2.75 9.75h10.5M6.25 2.75v10.5M9.75 2.75v10.5"
        stroke="currentColor"
        strokeWidth={1.25}
      />
    </svg>
  );
}

function PlanIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.25 3.5h7.5M4.25 8h7.5M4.25 12.5h4.5"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M2.25 3.5h.01M2.25 8h.01M2.25 12.5h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function DismissIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.75 4.75 11.25 11.25M11.25 4.75 4.75 11.25"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ignoreActionError(): void {}

function noop(): void {}

// Reconstruction note: the source subscribes to the composer controller via a
// dedicated selector hook (`Pt`) exported from a sibling chunk. Reconstructed
// here on top of `useSyncExternalStore`; the controller's `subscribe` is used
// when present, so the chip re-derives its suggestion as the draft changes.
function useComposerControllerSelector<Selected>(
  controller: ComposerController,
  selector: (controller: ComposerController) => Selected,
): Selected {
  const subscribe = useCallback(
    (onStoreChange: () => void) =>
      controller.subscribe?.(onStoreChange) ?? noop,
    [controller],
  );
  const getSnapshot = () => selector(controller);
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

// ── public component ────────────────────────────────────────────────────────
export interface AboveComposerSuggestionActionsProps {
  portalTarget?: Element | DocumentFragment | null;
  hideArtifactPluginSuggestions?: boolean;
  showPlanKeywordSuggestion?: boolean;
}

export function AboveComposerSuggestionActions({
  portalTarget,
  hideArtifactPluginSuggestions = false,
  showPlanKeywordSuggestion = false,
}: AboveComposerSuggestionActionsProps) {
  if (portalTarget == null) return null;
  return (
    <AboveComposerSuggestionActionsContent
      portalTarget={portalTarget}
      hideArtifactPluginSuggestions={hideArtifactPluginSuggestions}
      showPlanKeywordSuggestion={showPlanKeywordSuggestion}
    />
  );
}

function AboveComposerSuggestionActionsContent({
  portalTarget,
  hideArtifactPluginSuggestions,
  showPlanKeywordSuggestion,
}: {
  portalTarget: Element | DocumentFragment;
  hideArtifactPluginSuggestions: boolean;
  showPlanKeywordSuggestion: boolean;
}) {
  const scopeStore = useScopeStore(composerScope);
  const intl: IntlLike = useComposerIntl();
  const composerController: ComposerController =
    useComposerController(composerScope);
  const activeConversationId = useActiveConversationId(scopeStore);
  const { activeMode, modes, setSelectedMode } =
    useCollaborationModes(activeConversationId);
  const hasPlanMode = modes.some(
    (mode: { mode: string }) => mode.mode === "plan",
  );
  const isPlanMode = activeMode.mode === "plan";

  // Reconstruction note: the source persists dismissals per composer view via a
  // scoped Jotai atom family keyed by conversation id; reduced here to local
  // component state (dismissals reset when the overlay unmounts).
  const [dismissedSuggestionIds, setDismissedSuggestionIds] = useState<
    string[]
  >([]);
  const dismissedSuggestionIdSet = useMemo(
    () => new Set(dismissedSuggestionIds),
    [dismissedSuggestionIds],
  );

  const detectedArtifactKind = useComposerControllerSelector(
    composerController,
    (controller) =>
      detectArtifactPluginSuggestionKind(
        controller.view.state.doc,
        hideArtifactPluginSuggestions,
      ),
  );
  const artifactPluginSuggestionKind =
    detectedArtifactKind != null &&
    !dismissedSuggestionIdSet.has(
      getArtifactPluginSuggestionId(detectedArtifactKind),
    )
      ? detectedArtifactKind
      : null;

  const shouldShowPlanSuggestion = useComposerControllerSelector(
    composerController,
    (controller) =>
      shouldShowPlanKeywordSuggestion({
        composerText: controller.view.state.doc.textContent,
        hasPlanMode,
        isPlanMode,
        isDismissed: dismissedSuggestionIdSet.has(PLAN_KEYWORD_SUGGESTION_ID),
        showPlanKeywordSuggestion,
      }),
  );

  const activateArtifactPlugin = useCallback(
    (kind: ArtifactPluginSuggestionKind) =>
      activateArtifactPluginMention(composerController, kind),
    [composerController],
  );

  const suggestion = chooseAboveComposerSuggestion({
    intl,
    artifactPluginSuggestionKind,
    activateArtifactPlugin,
    shouldShowPlanSuggestion,
    setSelectedCollaborationMode: setSelectedMode,
    setDismissedSuggestionIds,
  });

  if (suggestion == null) return null;

  return createPortal(
    <AboveComposerSuggestionChip
      key={suggestion.id}
      intl={intl}
      suggestion={suggestion}
    />,
    portalTarget,
  );
}
