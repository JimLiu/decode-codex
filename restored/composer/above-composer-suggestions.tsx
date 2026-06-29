// Restored from ref/webview/assets/above-composer-suggestions-B2GDwQ90.js
// Above-composer suggestion chips from the Codex webview bundle.
import React, {
  useMemo,
  useState,
  type ComponentType,
  type Dispatch,
  type MouseEvent,
  type ReactNode,
  type SetStateAction,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

type ArtifactPluginSuggestionKind = "document" | "presentation" | "spreadsheet";
type CollaborationMode = "plan" | (string & {});
type CollaborationModeDescriptor =
  | CollaborationMode
  | { mode: CollaborationMode };
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
type DismissedSuggestionIdsSetter = Dispatch<SetStateAction<string[]>>;

export type AboveComposerSuggestionsProps = {
  portalTarget?: Element | DocumentFragment | null;
  hideArtifactPluginSuggestions?: boolean;
  showPlanKeywordSuggestion?: boolean;
  composerText?: string;
  hasExistingArtifactPluginMention?: boolean;
  artifactPluginSuggestionKind?: ArtifactPluginSuggestionKind | null;
  activeCollaborationMode?: CollaborationModeDescriptor | null;
  collaborationModes?: readonly CollaborationModeDescriptor[];
  hasPlanMode?: boolean;
  dismissedSuggestionIds?: readonly string[];
  setDismissedSuggestionIds?: DismissedSuggestionIdsSetter;
  intl?: IntlLike;
  activateArtifactPlugin?: (
    kind: ArtifactPluginSuggestionKind,
  ) => void | Promise<void>;
  setSelectedCollaborationMode?: (mode: "plan") => void;
  className?: string;
};

const PLAN_KEYWORD_SUGGESTION_ID = "keyword-plan-mode";
const PLAN_KEYWORD_PATTERN = /\bplan\b/i;
const ARTIFACT_ACTION_VERB_PATTERN =
  /\b(?:build|create|design|draft|generate|make|prepare|produce|write)\b/i;
const ARTIFACT_KIND_PATTERNS: Array<{
  kind: ArtifactPluginSuggestionKind;
  pattern: RegExp;
}> = [
  {
    kind: "document",
    pattern: /\b(?:doc|docs|document|documents)\b/i,
  },
  {
    kind: "presentation",
    pattern: /\b(?:presentation|presentations|slide|slides|deck)\b/i,
  },
  {
    kind: "spreadsheet",
    pattern: /\b(?:sheet|sheets|spreadsheet|spreadsheets|excel)\b/i,
  },
];

const defaultIntl: IntlLike = {
  formatMessage(descriptor: MessageDescriptor, values?: IntlMessageValues) {
    if (values == null) return descriptor.defaultMessage;
    return descriptor.defaultMessage.replace(
      /\{(\w+)\}/g,
      (placeholder: string, key: string) => {
        const value = values[key];
        return value == null ? placeholder : String(value);
      },
    );
  },
};

function formatMessage(
  intl: IntlLike,
  descriptor: MessageDescriptor,
  values?: IntlMessageValues,
): string {
  return intl.formatMessage(descriptor, values);
}

function getModeName(mode: CollaborationModeDescriptor): CollaborationMode {
  return typeof mode === "string" ? mode : mode.mode;
}

function hasPlanCollaborationMode(
  modes: readonly CollaborationModeDescriptor[],
): boolean {
  return modes.some((mode) => getModeName(mode) === "plan");
}

function getArtifactPluginSuggestionId(
  kind: ArtifactPluginSuggestionKind,
): string {
  return `keyword-artifact-${kind}`;
}

function detectArtifactPluginSuggestionKind({
  composerText,
  hasExistingArtifactPluginMention = false,
  hideArtifactPluginSuggestions = false,
}: {
  composerText: string;
  hasExistingArtifactPluginMention?: boolean;
  hideArtifactPluginSuggestions?: boolean;
}): ArtifactPluginSuggestionKind | null {
  if (
    hideArtifactPluginSuggestions ||
    hasExistingArtifactPluginMention ||
    !ARTIFACT_ACTION_VERB_PATTERN.test(composerText)
  ) {
    return null;
  }

  let matchedKind: ArtifactPluginSuggestionKind | null = null;
  for (const { kind, pattern } of ARTIFACT_KIND_PATTERNS) {
    if (!pattern.test(composerText)) continue;
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
  showPlanKeywordSuggestion?: boolean;
}): boolean {
  return (
    showPlanKeywordSuggestion === true &&
    hasPlanMode &&
    !isPlanMode &&
    !isDismissed &&
    PLAN_KEYWORD_PATTERN.test(composerText)
  );
}

function addDismissedSuggestionId(
  setDismissedSuggestionIds: DismissedSuggestionIdsSetter,
  suggestionId: string,
): void {
  setDismissedSuggestionIds((previousIds) =>
    previousIds.includes(suggestionId)
      ? previousIds
      : [...previousIds, suggestionId],
  );
}

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
        pluginName: formatMessage(intl, {
          id: "composer.aboveSuggestion.artifact.document.pluginName",
          defaultMessage: "Documents",
          description:
            "Documents plugin name in the above-composer artifact suggestion",
        }),
        title: formatMessage(intl, {
          id: "composer.aboveSuggestion.artifact.document.title",
          defaultMessage: "Create a document",
          description:
            "Title for the above-composer Documents plugin suggestion",
        }),
      };
    case "presentation":
      return {
        icon: PresentationIcon,
        pluginName: formatMessage(intl, {
          id: "composer.aboveSuggestion.artifact.presentation.pluginName",
          defaultMessage: "Presentations",
          description:
            "Presentations plugin name in the above-composer artifact suggestion",
        }),
        title: formatMessage(intl, {
          id: "composer.aboveSuggestion.artifact.presentation.title",
          defaultMessage: "Create a presentation",
          description:
            "Title for the above-composer Presentations plugin suggestion",
        }),
      };
    case "spreadsheet":
      return {
        icon: SpreadsheetIcon,
        pluginName: formatMessage(intl, {
          id: "composer.aboveSuggestion.artifact.spreadsheet.pluginName",
          defaultMessage: "Spreadsheets",
          description:
            "Spreadsheets plugin name in the above-composer artifact suggestion",
        }),
        title: formatMessage(intl, {
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
  setDismissedSuggestionIds: DismissedSuggestionIdsSetter;
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
    actionLabel: formatMessage(
      intl,
      {
        id: "composer.aboveSuggestion.artifact.action",
        defaultMessage: "Use {pluginName}",
        description:
          "Primary button label for activating an artifact creation plugin from an above-composer suggestion",
      },
      {
        pluginName,
      },
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
  setDismissedSuggestionIds: DismissedSuggestionIdsSetter;
}): SuggestionDefinition | null {
  if (!shouldShowPlanSuggestion) return null;

  return {
    id: PLAN_KEYWORD_SUGGESTION_ID,
    title: formatMessage(intl, {
      id: "composer.aboveSuggestion.plan.title",
      defaultMessage: "Create a plan",
      description: "Title for the above-composer plan keyword suggestion",
    }),
    icon: PlanIcon,
    meta: <ShortcutHint />,
    actionLabel: formatMessage(intl, {
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
  setDismissedSuggestionIds: DismissedSuggestionIdsSetter;
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

function SuggestionShell({
  actions,
  className,
  icon,
  layout = "inline",
  meta,
  suggestionId,
  title,
}: {
  actions: ReactNode;
  className?: string;
  icon?: ReactNode;
  layout?: "inline" | "stacked";
  meta?: ReactNode;
  suggestionId: string;
  title: ReactNode;
}) {
  const isStacked = layout === "stacked";
  const verticalPadding = isStacked ? "py-2" : "py-1.5";
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
    <div
      className={clsx(
        "pointer-events-auto flex w-full max-w-full justify-center",
        className,
      )}
    >
      <div
        className={clsx(
          "relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm",
          verticalPadding,
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
  className,
  intl,
  suggestion,
}: {
  className?: string;
  intl: IntlLike;
  suggestion: SuggestionDefinition;
}) {
  const [isActionPending, setIsActionPending] = useState(false);
  const Icon = suggestion.icon;
  const iconElement = Icon ? <Icon className="icon-xs shrink-0" /> : null;
  const isActionDisabled =
    suggestion.actionDisabled === true || isActionPending;
  const dismissOnAction = suggestion.dismissOnAction !== false;
  const dismissLabel = formatMessage(intl, {
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
      className={className}
      icon={iconElement}
      layout={suggestion.layout}
      meta={suggestion.meta}
      suggestionId={suggestion.id}
      title={suggestion.title}
    />
  );
}

function ShortcutHint() {
  return (
    <span className="pointer-events-none inline-flex h-auto rounded-md px-1 py-0.5 text-xs leading-none">
      Shift + Tab
    </span>
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

export function AboveComposerSuggestions({
  portalTarget,
  hideArtifactPluginSuggestions = false,
  showPlanKeywordSuggestion = false,
  composerText = "",
  hasExistingArtifactPluginMention = false,
  artifactPluginSuggestionKind,
  activeCollaborationMode = "default",
  collaborationModes = [],
  hasPlanMode,
  dismissedSuggestionIds,
  setDismissedSuggestionIds,
  intl = defaultIntl,
  activateArtifactPlugin = ignoreArtifactPluginActivation,
  setSelectedCollaborationMode = ignorePlanModeSelection,
  className,
}: AboveComposerSuggestionsProps) {
  const [localDismissedSuggestionIds, setLocalDismissedSuggestionIds] =
    useState<string[]>([]);
  const effectiveDismissedSuggestionIds =
    dismissedSuggestionIds ?? localDismissedSuggestionIds;
  const writeDismissedSuggestionIds =
    setDismissedSuggestionIds ?? setLocalDismissedSuggestionIds;
  const dismissedSuggestionIdSet = useMemo(
    () => new Set(effectiveDismissedSuggestionIds),
    [effectiveDismissedSuggestionIds],
  );

  if (portalTarget == null) return null;

  const detectedArtifactKind =
    artifactPluginSuggestionKind === undefined
      ? detectArtifactPluginSuggestionKind({
          composerText,
          hasExistingArtifactPluginMention,
          hideArtifactPluginSuggestions,
        })
      : artifactPluginSuggestionKind;
  const artifactKind =
    detectedArtifactKind != null &&
    !dismissedSuggestionIdSet.has(
      getArtifactPluginSuggestionId(detectedArtifactKind),
    )
      ? detectedArtifactKind
      : null;
  const activeModeName = getModeName(activeCollaborationMode);
  const canUsePlanMode =
    hasPlanMode ?? hasPlanCollaborationMode(collaborationModes);
  const shouldShowPlanSuggestion = shouldShowPlanKeywordSuggestion({
    composerText,
    hasPlanMode: canUsePlanMode,
    isPlanMode: activeModeName === "plan",
    isDismissed: dismissedSuggestionIdSet.has(PLAN_KEYWORD_SUGGESTION_ID),
    showPlanKeywordSuggestion,
  });
  const suggestion = chooseAboveComposerSuggestion({
    intl,
    artifactPluginSuggestionKind: artifactKind,
    activateArtifactPlugin,
    shouldShowPlanSuggestion,
    setSelectedCollaborationMode,
    setDismissedSuggestionIds: writeDismissedSuggestionIds,
  });

  if (suggestion == null) return null;

  return createPortal(
    <AboveComposerSuggestionChip
      className={className}
      intl={intl}
      suggestion={suggestion}
    />,
    portalTarget,
    suggestion.id,
  );
}

function ignoreArtifactPluginActivation(): void {}

function ignorePlanModeSelection(): void {}
