// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Floating browser sidebar comment + design-tweak overlay (preview, editor, and dispatcher).
import React, {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
} from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { useIsDictationSupported } from "../utils/use-is-dictation-supported";
import { ImageAttachment } from "../image-side-panel/image-attachment";
import { useDictationKeyboard } from "../composer/use-dictation-keyboard";
import { useDictationShortcutLabel } from "../composer/composer-command-keymap";
import {
  areDesignDraftGroupsEqual,
  buildCommentDraft,
  buildDesignDraftFromEditor,
  isDesignDraftActive,
  parseScrubValue,
  type DesignDraftGroup,
  type DesignEditorState,
} from "./browser-comment-design-draft";
import {
  AtMentionAutocomplete,
  CommentSaveIcon,
  CommentSendIcon,
  ComposerEditor,
  DictationButton,
  DictationRecordingFooter,
  KeyboardShortcutHint,
  LOCAL_HOST_ID,
  ResetValueIcon,
  SkillMentionAutocomplete,
  appStoreScope,
  BrowserDesignTweaksEditor,
  createComposerController,
  dataTransferHasImages,
  designEditorPlacementHint,
  directSubmitPreferenceAtom,
  extractImageFilesFromDataTransfer,
  getLocalPathForFile,
  handleComposerSuggestionEvent,
  isBlankText,
  parseCommentPreviewSegments,
  subscribeToEditorChanges,
  toastControllerToken,
  useAtMentionController,
  useComposerControllerCleanup,
  useConnectedApps,
  useDesignAdjustEntryEnabled,
  useDictation,
  useIsMac,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
  useSkillMentionController,
  useSkills,
} from "../boundaries/onboarding-commons-externals.facade";

const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif';

const COMMENT_SURFACE_STYLE_VARS: CSSProperties = {
  "--codex-chat-font-size": "13px",
  "--composer-top-tray-background": "var(--color-token-main-surface-primary)",
  "--composer-top-tray-border": "transparent",
  "--font-sans": FONT_STACK,
  "--vscode-font-family": FONT_STACK,
  fontFamily: FONT_STACK,
} as CSSProperties;

const PROSE_CLASS = clsx(
  "text-token-text-primary min-h-0 w-full p-0 leading-normal !font-sans",
  "[&_.ProseMirror]:w-full",
  "[&_.ProseMirror]:!text-token-foreground",
  "[&_.ProseMirror]:!font-sans",
  "[&_.ProseMirror]:px-0",
  "[&_.ProseMirror]:py-0",
  "[&_.ProseMirror]:!leading-6",
  "[&_.ProseMirror_p]:!font-sans",
  "[&_.ProseMirror_p]:!leading-6",
  "[&_.ProseMirror_p_*]:!font-sans",
  "[&_.ProseMirror_span]:!font-sans",
  "!min-h-0 text-base",
  "[&_.ProseMirror]:min-h-6",
);

const INPUT_ABSOLUTE_CLASS =
  "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none";
const FOOTER_CLASS =
  "absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none";
const TOP_TRAY_CLASS =
  "pointer-events-none absolute inset-x-0 top-0 flex flex-col justify-end pb-2";
const CARD_AREA_CLASS =
  "pointer-events-none absolute inset-x-0 flex flex-col overflow-visible bg-transparent";
const MEASURE_SPAN_CLASS =
  "pointer-events-none absolute top-0 left-0 whitespace-pre text-base leading-normal font-sans opacity-0";
const PREVIEW_INNER_CLASS =
  "box-border flex h-full w-fit max-w-full overflow-hidden rounded-[22px] bg-token-dropdown-background px-4 shadow-md ring-1 ring-token-border-light";
const PREVIEW_TEXT_CLASS =
  "min-w-0 max-w-full text-base leading-6 font-sans text-token-foreground";
const MENTION_CLASS = "font-semibold";
const INPUT_MAX_HEIGHT_180 = "!max-h-[180px] overflow-y-auto";
const INPUT_MAX_HEIGHT_FULL = "!max-h-full overflow-y-auto";
const ATTACHMENT_ROW_TOP_3 = "top-3";
const ATTACHMENT_ROW_TOP_24 = "top-24";
const ATTACHMENT_TOP_PADDING = "pt-24";
const INPUT_RIGHT_PADDING_52 = "pr-[52px]";
const DESIGN_PROMPT_EXPANDED = "max-h-[84px] min-h-[48px] overflow-hidden";
const DESIGN_PROMPT_SCROLL = "!h-auto !max-h-[84px] overflow-y-auto pb-2";
const DESIGN_STACK_CLASS = "flex min-h-0 flex-col px-4 pb-12";

const SUBMIT_BUTTON_WIDTH = 28;
const INPUT_RIGHT_INSET = 8;
const DESIGN_TOGGLE_WIDTH = 32;
const INPUT_LEFT_INSET = 16;
const INPUT_GAP = 8;
const COMPOSER_EXPAND_THRESHOLD = 12;
const COMPOSER_EXPAND_FALLBACK_LENGTH = 40;
const DESIGN_PROMPT_EXPAND_THRESHOLD = 4;
const DRAG_MARGIN = 8;
const ADJUST_HINT_DURATION_MS = 90;
const SCRUB_HIDE_DELAY_MS = 150;

type AttachedImage = {
  dataUrl: string;
  filename?: string;
  localPath?: string;
};

type CommentTarget = {
  mode: "create" | "edit" | "design";
  commentId?: string;
};

export type BrowserCommentSession = {
  sessionId: string;
  surfaceMode: "preview" | "editor";
  body: string;
  attachedImages?: AttachedImage[];
  designChange?: DesignDraftGroup | null;
  designEditorState?: DesignEditorState | null;
  previewAlignment?: "start" | "end" | "center";
  target: CommentTarget;
  cwd?: string | null;
};

type SubmitPayload = {
  body: string;
  submitSource: string;
  attachedImages?: AttachedImage[];
  designChange?: DesignDraftGroup | null;
};

export type BrowserSidebarCommentOverlayProps = {
  allowImageAttachments?: boolean;
  allowDirectSubmit?: boolean;
  defaultCreateSubmitMode?: "saved" | "direct";
  defaultDesignEditorOpen?: boolean;
  defaultExpandedSpacingGroups?: unknown;
  inputAriaLabel?: string;
  placeholder?: string;
  session: BrowserCommentSession;
  showAdjustEntry?: boolean;
  windowHeight: number;
  keyboardEventTarget?: Window | null;
  onSubmit: (payload: SubmitPayload) => void;
  onDirectSubmit: (payload: SubmitPayload) => void;
  onDesignChangeDelete?: (groupId: string) => void;
  onDesignChangeUpdate?: (group: DesignDraftGroup | null) => void;
  onDesignScrubPropertyChange?: (property: string | null) => void;
  onTweaksEditorOpenChange?: (open: boolean) => void;
  onDelete: (commentId: string) => void;
  onCancel: () => void;
  onEscape: () => void;
  onMounted: (
    sessionId: string,
    size: { width: number; height: number },
    placementHint?: unknown,
  ) => void;
  onBodyChange?: (body: string) => void;
  onAttachmentPreviewOpenChange?: (open: boolean) => void;
  onLightDismissibilityChange: (isLightDismissible: boolean) => void;
};

export function BrowserSidebarCommentOverlay({
  allowImageAttachments = true,
  allowDirectSubmit = true,
  defaultCreateSubmitMode = "saved",
  defaultDesignEditorOpen = false,
  defaultExpandedSpacingGroups,
  inputAriaLabel,
  placeholder,
  session,
  showAdjustEntry = true,
  windowHeight,
  keyboardEventTarget,
  onSubmit,
  onDirectSubmit,
  onDesignChangeDelete,
  onDesignChangeUpdate,
  onDesignScrubPropertyChange,
  onTweaksEditorOpenChange,
  onDelete,
  onCancel,
  onEscape,
  onMounted,
  onBodyChange,
  onAttachmentPreviewOpenChange,
  onLightDismissibilityChange,
}: BrowserSidebarCommentOverlayProps) {
  if (session.surfaceMode === "preview") {
    return (
      <BrowserCommentPreview
        session={session}
        showAdjustEntry={showAdjustEntry}
        windowHeight={windowHeight}
        onMounted={onMounted}
      />
    );
  }
  return (
    <BrowserCommentEditor
      session={session}
      defaultDesignEditorOpen={defaultDesignEditorOpen}
      defaultExpandedSpacingGroups={defaultExpandedSpacingGroups}
      showAdjustEntry={showAdjustEntry}
      windowHeight={windowHeight}
      keyboardEventTarget={keyboardEventTarget}
      onSubmit={onSubmit}
      onDirectSubmit={onDirectSubmit}
      onDesignChangeDelete={onDesignChangeDelete}
      onDesignChangeUpdate={onDesignChangeUpdate}
      onDesignScrubPropertyChange={onDesignScrubPropertyChange}
      onTweaksEditorOpenChange={onTweaksEditorOpenChange}
      onDelete={onDelete}
      onCancel={onCancel}
      onEscape={onEscape}
      onMounted={onMounted}
      onBodyChange={onBodyChange}
      onAttachmentPreviewOpenChange={onAttachmentPreviewOpenChange}
      onLightDismissibilityChange={onLightDismissibilityChange}
      allowImageAttachments={allowImageAttachments}
      allowDirectSubmit={allowDirectSubmit}
      defaultCreateSubmitMode={defaultCreateSubmitMode}
      inputAriaLabel={inputAriaLabel}
      placeholder={placeholder}
    />
  );
}

type BrowserCommentPreviewProps = {
  session: BrowserCommentSession;
  showAdjustEntry: boolean;
  windowHeight: number;
  onMounted: BrowserSidebarCommentOverlayProps["onMounted"];
};

function BrowserCommentPreview({
  session,
  showAdjustEntry,
  windowHeight,
  onMounted,
}: BrowserCommentPreviewProps) {
  const intl = useIntl();
  const previewText = resolvePreviewText(session);
  const designChange = showAdjustEntry ? (session.designChange ?? null) : null;
  const hasDesignChange = designChange != null;
  const fallbackText =
    previewText.length > 0
      ? previewText
      : hasDesignChange
        ? intl.formatMessage(
            {
              id: "browserSidebarCommentOverlay.previewTweaksCount",
              defaultMessage:
                "{count, plural, one {# adjustment} other {# adjustments}}",
              description:
                "Fallback preview text for a browser sidebar annotation that only includes design adjustments",
            },
            { count: countDesignAdjustments(designChange) },
          )
        : "";
  const isMultiline = /\r?\n/.test(fallbackText);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const lastSizeRef = useRef<{ width: number; height: number } | null>(null);

  const measure = () => {
    const node = measureRef.current;
    if (node == null) return;
    const rect = node.getBoundingClientRect();
    const size = {
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    };
    const last = lastSizeRef.current;
    if (last?.width === size.width && last?.height === size.height) return;
    lastSizeRef.current = size;
    onMounted(session.sessionId, size);
  };
  useLayoutEffect(measure, [
    onMounted,
    fallbackText,
    session.sessionId,
    hasDesignChange,
    windowHeight,
  ]);

  const tweakIcon = hasDesignChange ? (
    <span
      aria-hidden="true"
      data-testid="annotation-comment-preview-tweak-icon"
      className="flex shrink-0 items-center justify-center pt-0.5 text-token-description-foreground"
    >
      <DesignAdjustIcon className="icon-sm" />
    </span>
  ) : null;

  return (
    <div
      className="pointer-events-none flex h-full w-full overflow-visible bg-transparent text-token-foreground"
      style={COMMENT_SURFACE_STYLE_VARS}
    >
      <div
        className={clsx(
          "flex h-full w-full",
          previewAlignmentClass(session.previewAlignment),
        )}
      >
        <div
          ref={measureRef}
          className={clsx(
            PREVIEW_INNER_CLASS,
            isMultiline ? "items-start py-2" : "items-center",
          )}
          style={{ height: windowHeight }}
        >
          <div
            className={clsx(
              "flex min-w-0 gap-2",
              isMultiline ? "items-start" : "items-center",
            )}
          >
            {tweakIcon}
            <div
              className={clsx(
                PREVIEW_TEXT_CLASS,
                isMultiline
                  ? "overflow-hidden whitespace-pre-wrap break-words"
                  : "overflow-hidden text-ellipsis whitespace-nowrap",
              )}
              style={{ fontSize: "var(--codex-chat-font-size)" }}
            >
              {previewText.length > 0
                ? renderPreviewSegments(previewText)
                : fallbackText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type BrowserCommentEditorProps = {
  session: BrowserCommentSession;
  windowHeight: number;
  defaultDesignEditorOpen?: boolean;
  defaultExpandedSpacingGroups?: unknown;
  showAdjustEntry?: boolean;
  keyboardEventTarget?: Window | null;
  onSubmit: (payload: SubmitPayload) => void;
  onDirectSubmit: (payload: SubmitPayload) => void;
  onDesignChangeDelete?: (groupId: string) => void;
  onDesignChangeUpdate?: (group: DesignDraftGroup | null) => void;
  onDesignScrubPropertyChange?: (property: string | null) => void;
  onTweaksEditorOpenChange?: (open: boolean) => void;
  onDelete: (commentId: string) => void;
  onCancel: () => void;
  onEscape: () => void;
  onMounted: BrowserSidebarCommentOverlayProps["onMounted"];
  onBodyChange?: (body: string) => void;
  onAttachmentPreviewOpenChange?: (open: boolean) => void;
  onLightDismissibilityChange: (isLightDismissible: boolean) => void;
  allowImageAttachments?: boolean;
  allowDirectSubmit?: boolean;
  defaultCreateSubmitMode?: "saved" | "direct";
  inputAriaLabel?: string;
  placeholder?: string;
};

type ScrubCloneRow = {
  controlRect: { height: number; left: number; top: number; width: number };
  label: string;
  labelRect: { height: number; left: number; top: number; width: number };
  property: string;
  resetRect?: { height: number; left: number; top: number; width: number };
};

type ScrubClone = {
  rect: { height: number; left: number; top: number; width: number };
  rows: ScrubCloneRow[];
};

function BrowserCommentEditor({
  session,
  windowHeight,
  defaultDesignEditorOpen = false,
  defaultExpandedSpacingGroups,
  showAdjustEntry = true,
  keyboardEventTarget,
  onSubmit,
  onDirectSubmit,
  onDesignChangeDelete,
  onDesignChangeUpdate,
  onDesignScrubPropertyChange,
  onTweaksEditorOpenChange,
  onDelete,
  onCancel,
  onEscape,
  onMounted,
  onBodyChange,
  onAttachmentPreviewOpenChange,
  onLightDismissibilityChange,
  allowImageAttachments = true,
  allowDirectSubmit,
  defaultCreateSubmitMode,
  inputAriaLabel,
  placeholder,
}: BrowserCommentEditorProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const initialBodyText = resolvePreviewText(session);
  const baselineFromSession = showAdjustEntry
    ? resolveBaselineDesignGroup(session)
    : null;
  const composer = useMemo(() => createComposerController(), []);
  useComposerControllerCleanup(
    useCallback(() => {
      if (!composer.view.isDestroyed) composer.destroy();
    }, [composer]),
  );

  const [bodyText, setBodyText] = useState(initialBodyText);
  const [attachedImages, setAttachedImages] = useState<AttachedImage[]>(
    () => session.attachedImages ?? [],
  );
  const [designEditorState, setDesignEditorState] =
    useState<DesignEditorState | null>(() =>
      showAdjustEntry
        ? (session.designEditorState ?? baselineFromSession ?? null)
        : null,
    );
  const baselineDesignGroupRef = useRef<DesignDraftGroup | null>(
    baselineFromSession ?? null,
  );
  const [isDesignEditorOpen, setIsDesignEditorOpen] = useState(
    () =>
      designEditorState != null &&
      (defaultDesignEditorOpen ||
        session.target.mode === "design" ||
        baselineFromSession != null),
  );
  const activeDesignEditorState = showAdjustEntry ? designEditorState : null;
  const isDesignEditorVisible = showAdjustEntry && isDesignEditorOpen;

  const [isAdjustEntryAnimating, setIsAdjustEntryAnimating] = useState(false);
  const [showAdjustHint, setShowAdjustHint] = useState(false);
  const [isComposerOverflowing, setIsComposerOverflowing] = useState(false);
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);
  const [scrubClone, setScrubClone] = useState<ScrubClone | null>(null);
  const [isCardHiddenForScrub, setIsCardHiddenForScrub] = useState(false);
  const [, setIsAttachmentPreviewOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const isAttachmentPreviewOpenRef = useRef(false);

  const handlePreviewOpenChange = (open: boolean) => {
    isAttachmentPreviewOpenRef.current = open;
    setIsAttachmentPreviewOpen(open);
    onAttachmentPreviewOpenChange?.(open);
  };
  const focusComposer = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    composer.focus();
  };
  const [isDragOver, setIsDragOver] = useState(false);
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  const directSubmitPreference = useScopedValue(directSubmitPreferenceAtom);

  const bodyTextRef = useRef(initialBodyText);
  const attachedImagesRef = useRef<AttachedImage[]>(
    session.attachedImages ?? [],
  );
  const scrubContainerRef = useRef<HTMLDivElement | null>(null);
  const activeDesignEditorStateRef = useRef(activeDesignEditorState);
  activeDesignEditorStateRef.current = activeDesignEditorState;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const promptShellRef = useRef<HTMLDivElement | null>(null);
  const measureSpanRef = useRef<HTMLSpanElement | null>(null);
  const appliedSessionIdRef = useRef<string | null>(null);
  const mountedSessionIdRef = useRef<string | null>(null);
  const lastMountedSizeRef = useRef<{ width: number; height: number } | null>(
    null,
  );
  const dragEnterCountRef = useRef(0);
  const adjustHintTimeoutRef = useRef<number | null>(null);
  const scrubHideTimeoutRef = useRef<number | null>(null);
  const dragStateRef = useRef<{
    baseLeft: number;
    baseTop: number;
    cardHeight: number;
    cardWidth: number;
    offsetX: number;
    offsetY: number;
    pointerId: number;
    startClientX: number;
    startClientY: number;
    viewportHeight: number;
    viewportWidth: number;
  } | null>(null);

  const { data: workspaceRootOptions } = useScopedQuery(
    "workspace-root-options",
    {
      params: { hostId: LOCAL_HOST_ID },
    },
  );
  const workspaceRoots = useMemo<string[] | undefined>(() => {
    if (workspaceRootOptions?.roots.length) return workspaceRootOptions.roots;
    if (session.cwd != null) return [session.cwd];
    return undefined;
  }, [session.cwd, workspaceRootOptions?.roots]);

  const atMention = useAtMentionController(composer);
  const skillMention = useSkillMentionController(composer);
  let activeMentionKind: "at" | "skill" | null = null;
  if (atMention.ui?.active === true) activeMentionKind = "at";
  else if (skillMention.ui?.active === true) activeMentionKind = "skill";

  const adjustEntryEnabled = useDesignAdjustEntryEnabled({
    canEditDesign: activeDesignEditorState != null,
    showAdjustEntry,
  });
  const isDesignSubmissionMode =
    isDesignEditorVisible && activeDesignEditorState != null;
  const isExpandedComposer =
    session.target.mode === "edit" ||
    isComposerOverflowing ||
    isDesignEditorVisible;
  const isEditMode = session.target.mode === "edit" && !isDesignEditorVisible;

  const { hasCommentText } = buildCommentDraft({
    baselineDesignGroup: baselineDesignGroupRef.current,
    commentText: bodyText,
    designEditorState: activeDesignEditorState,
    isDesignSubmissionMode,
  });
  const { designDraft } = buildCommentDraft({
    baselineDesignGroup: baselineDesignGroupRef.current,
    commentText: bodyText,
    designEditorState: activeDesignEditorState,
    isDesignSubmissionMode: activeDesignEditorState != null,
  });
  const isDesignDraftActiveState = isDesignDraftActive({
    baselineDesignGroup: baselineDesignGroupRef.current,
    designDraft,
    designEditorState: activeDesignEditorState,
    isDesignEditorOpen: isDesignEditorVisible,
  });

  const dictationAvailability = useIsDictationSupported(LOCAL_HOST_ID);
  const isDictationEnabled = dictationAvailability === true;
  const {
    isDictating,
    isTranscribing,
    canRetryDictation,
    recordingDurationMs,
    retryDictation,
    waveformCanvasRef,
    startDictation,
    stopDictation,
  } = useDictation({
    enabled: isDictationEnabled,
    getSurroundingText: () => composer.getText(),
    onTranscriptInsert: (text: string) => {
      if (!composer.view.isDestroyed) composer.appendText(text);
    },
    onTranscriptSend: (text: string) => {
      if (composer.view.isDestroyed) return;
      composer.appendText(text);
      const trimmed = composer.getText().trim();
      if (trimmed.length === 0) return;
      const payload: SubmitPayload = {
        body: trimmed,
        submitSource: "dictation",
        ...(attachedImagesRef.current.length === 0
          ? {}
          : { attachedImages: attachedImagesRef.current }),
      };
      if (
        session.target.mode === "create" &&
        defaultCreateSubmitMode === "direct"
      ) {
        onDirectSubmit(payload);
        return;
      }
      onSubmit(payload);
    },
    onStartError: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.startError",
          defaultMessage: "Unable to start dictation",
          description: "Toast text shown when dictation could not be started",
        }),
      );
    },
    onTranscribeError: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.transcribeError",
          defaultMessage: "Unable to transcribe audio",
          description:
            "Toast text shown when dictation audio transcription fails",
        }),
      );
    },
    onUnsupported: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.unsupported",
          defaultMessage: "Dictation is not available on this device",
          description:
            "Toast text shown when dictation is not supported on the current device",
        }),
      );
    },
  });

  const hasAttachments = allowImageAttachments && attachedImages.length > 0;
  const showFooterRow = isExpandedComposer || isDictating || hasAttachments;
  const canShowAdjustHint =
    session.target.mode !== "edit" && !isComposerOverflowing && !hasAttachments;
  const isTallLayout =
    session.target.mode !== "edit" &&
    !isDesignEditorVisible &&
    (isExpandedComposer || hasAttachments);
  const isTallButNotExpanded = isTallLayout && !isExpandedComposer;
  const cardHeight = showFooterRow ? 120 : 44;
  const topTrayHeight = Math.min(Math.max(windowHeight - 120, 0), 88);
  const connectedApps = useConnectedApps();
  const { skills } = useSkills(workspaceRoots);

  const notifyLightDismissibility = useCallback(
    (
      text: string,
      images: AttachedImage[],
      designState: DesignEditorState | null = activeDesignEditorStateRef.current,
    ) => {
      onLightDismissibilityChange(
        computeLightDismissibility(
          session.target.mode,
          initialBodyText,
          text,
          session.attachedImages ?? [],
          images,
          baselineDesignGroupRef.current,
          designState,
        ),
      );
    },
    [
      onLightDismissibilityChange,
      session.attachedImages,
      initialBodyText,
      session.target.mode,
    ],
  );

  const updatePromptExpanded = useCallback(
    (text: string, promptShell = promptShellRef.current) => {
      const expanded =
        isDesignEditorVisible &&
        shouldExpandDesignPrompt(text, measureSpanRef.current, promptShell);
      setIsPromptExpanded((previous) =>
        previous === expanded ? previous : expanded,
      );
    },
    [isDesignEditorVisible],
  );

  const setPromptShellRef = useCallback(
    (node: HTMLDivElement | null) => {
      promptShellRef.current = node;
      if (node == null) {
        setIsPromptExpanded(false);
        return;
      }
      updatePromptExpanded(bodyTextRef.current, node);
    },
    [updatePromptExpanded],
  );

  const handleEditorChange = useCallback(() => {
    const text = composer.getText();
    if (bodyTextRef.current === text) return;
    bodyTextRef.current = text;
    setBodyText(text);
    onBodyChange?.(text);
    setIsComposerOverflowing(
      session.target.mode !== "edit" &&
        shouldExpandComposer(
          text,
          composer.view.state.doc.childCount > 1,
          measureSpanRef.current,
          cardRef.current,
        ),
    );
    updatePromptExpanded(text);
    notifyLightDismissibility(text, attachedImagesRef.current);
    const designState = activeDesignEditorStateRef.current;
    if (isDesignSubmissionMode && designState != null) {
      onDesignChangeUpdate?.(
        buildDesignDraftFromEditor(
          designState,
          baselineDesignGroupRef.current,
          text.trim(),
        ),
      );
    }
  }, [
    composer,
    isDesignSubmissionMode,
    onBodyChange,
    onDesignChangeUpdate,
    session.target.mode,
    updatePromptExpanded,
    notifyLightDismissibility,
  ]);
  useEffect(
    () => subscribeToEditorChanges(composer.view, handleEditorChange),
    [composer, handleEditorChange],
  );
  useEffect(() => {
    composer.syncMentionMetadata({ skills, apps: connectedApps });
  }, [connectedApps, skills, composer]);

  useLayoutEffect(() => {
    if (appliedSessionIdRef.current === session.sessionId) return;
    appliedSessionIdRef.current = session.sessionId;
    const images = session.attachedImages ?? [];
    composer.setPromptText(initialBodyText);
    bodyTextRef.current = initialBodyText;
    attachedImagesRef.current = images;
    onBodyChange?.(initialBodyText);
    setBodyText(initialBodyText);
    setAttachedImages(images);
    setShowAdjustHint(false);
    setIsAdjustEntryAnimating(false);
    mountedSessionIdRef.current = null;
    lastMountedSizeRef.current = null;
    setIsComposerOverflowing(
      session.target.mode !== "edit" &&
        shouldExpandComposer(
          initialBodyText,
          composer.view.state.doc.childCount > 1,
          measureSpanRef.current,
          cardRef.current,
        ),
    );
    notifyLightDismissibility(initialBodyText, images);
  }, [
    composer,
    session.attachedImages,
    initialBodyText,
    session.sessionId,
    session.target.mode,
    onBodyChange,
    notifyLightDismissibility,
  ]);

  useLayoutEffect(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect == null) return;
    const size = {
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    };
    const last = lastMountedSizeRef.current;
    if (
      mountedSessionIdRef.current === session.sessionId &&
      last?.width === size.width &&
      last?.height === size.height
    ) {
      return;
    }
    mountedSessionIdRef.current = session.sessionId;
    lastMountedSizeRef.current = size;
    onMounted(
      session.sessionId,
      size,
      isDesignEditorVisible ? designEditorPlacementHint : undefined,
    );
  }, [
    attachedImages,
    bodyText,
    isDesignEditorVisible,
    isComposerOverflowing,
    isPromptExpanded,
    onMounted,
    session.sessionId,
    cardHeight,
    windowHeight,
  ]);

  useEffect(
    () => () => {
      if (adjustHintTimeoutRef.current != null) {
        globalThis.clearTimeout(adjustHintTimeoutRef.current);
      }
      if (scrubHideTimeoutRef.current != null) {
        globalThis.clearTimeout(scrubHideTimeoutRef.current);
      }
    },
    [],
  );

  const refocusComposer = React.useEffectEvent(() => {
    if (isAttachmentPreviewOpenRef.current) return;
    const dom = composer.view.dom;
    const activeElement = dom.ownerDocument.activeElement;
    const form = dom.closest("form");
    if (
      !(
        activeElement != null &&
        form?.contains(activeElement) &&
        !dom.contains(activeElement)
      )
    ) {
      composer.focus();
    }
  });
  useEffect(() => {
    if (keyboardEventTarget == null) return;
    const onFocus = () => {
      keyboardEventTarget.requestAnimationFrame(() => {
        refocusComposer();
      });
    };
    keyboardEventTarget.addEventListener("focus", onFocus);
    if (keyboardEventTarget.document.hasFocus()) onFocus();
    return () => {
      keyboardEventTarget.removeEventListener("focus", onFocus);
    };
  }, [keyboardEventTarget]);

  const commentLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.comment",
    defaultMessage: "Comment",
    description: "Primary action for creating a new browser comment",
  });
  const addTweaksLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.addTweaks",
    defaultMessage: "Add",
    description: "Primary action for adding browser tweaks",
  });
  const deleteLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.delete",
    defaultMessage: "Delete",
    description: "Delete action for the browser comment overlay",
  });
  const adjustLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.tweak",
    defaultMessage: "Adjust",
    description:
      "Accessible label for opening browser design adjustment controls from the comment editor",
  });
  const placeholderText =
    placeholder ??
    (isDesignSubmissionMode
      ? intl.formatMessage({
          id: "browserSidebarCommentOverlay.tweaksPlaceholder",
          defaultMessage: "Describe these changes...",
          description:
            "Placeholder text for the browser tweaks editor comment field",
        })
      : intl.formatMessage({
          id: "browserSidebarCommentOverlay.placeholder",
          defaultMessage: "Add a comment…",
          description: "Placeholder text for the browser comment editor",
        }));

  const existingCommentId =
    session.target.mode === "edit" ? (session.target.commentId ?? null) : null;
  const isDictationDefaultOn =
    dictationAvailability == null || dictationAvailability;
  const canSubmitEmpty =
    existingCommentId == null &&
    !isExpandedComposer &&
    !hasCommentText &&
    dictationAvailability == null;
  const showDictationStart =
    !isDictating &&
    (isDictationDefaultOn || canSubmitEmpty) &&
    (isExpandedComposer || !hasCommentText);
  const showSubmitButton =
    !canSubmitEmpty &&
    !isDictating &&
    (isExpandedComposer || hasCommentText || !isDictationEnabled);
  const canSubmit = isDesignDraftActiveState
    ? baselineDesignGroupRef.current == null
      ? designDraft != null || hasCommentText
      : !areDesignDraftGroupsEqual(designDraft, baselineDesignGroupRef.current)
    : hasCommentText;
  const dictationShortcutLabel = useDictationShortcutLabel();
  const isMac = useIsMac();
  const tooltipPortalContainer = keyboardEventTarget?.document.body ?? null;
  const shouldDirectSubmit =
    existingCommentId == null &&
    allowDirectSubmit &&
    isComposerFocused &&
    directSubmitPreference;
  const enterLabel = isMac ? "⏎" : "Enter";
  const cmdEnterLabel = isMac ? "⌘⏎" : "Ctrl+Enter";
  const submitMode = isDesignDraftActiveState
    ? "saved"
    : allowDirectSubmit
      ? defaultCreateSubmitMode
      : "saved";
  const isDirectIconState =
    submitMode === "direct" ? !shouldDirectSubmit : shouldDirectSubmit;
  const queuedBaseline =
    baselineDesignGroupRef.current?.status === "queued"
      ? baselineDesignGroupRef.current
      : null;
  const showFooterActions =
    existingCommentId != null ||
    isDesignEditorVisible ||
    queuedBaseline != null;
  const footerActionsVisible =
    isExpandedComposer && !isDictating && showFooterActions;
  const scrubCloneRows =
    scrubClone == null || designEditorState == null
      ? null
      : scrubClone.rows.flatMap((row) => {
          const value = parseScrubValue(
            designEditorState.declarations,
            row.property,
          );
          return value == null ? [] : [{ row, value }];
        });

  const readImageFile = useCallback(
    (file: File) =>
      new Promise<AttachedImage | null>((resolve) => {
        const reader = new FileReader();
        const filename = file.name.trim().length > 0 ? file.name : undefined;
        const electronBridge = (
          window as unknown as {
            electronBridge?: { getPathForFile?: (file: File) => string | null };
          }
        ).electronBridge;
        const localPath =
          getLocalPathForFile(file, electronBridge?.getPathForFile) ??
          undefined;
        reader.onload = (event) => {
          const result = event.target?.result;
          if (typeof result !== "string") {
            resolve(null);
            return;
          }
          resolve({ dataUrl: result, filename, localPath });
        };
        reader.onerror = () => {
          resolve(null);
        };
        reader.readAsDataURL(file);
      }),
    [],
  );

  const handleAddImages = useCallback(
    (files: File[]) => {
      if (!allowImageAttachments) return;
      Promise.all(files.map((file) => readImageFile(file))).then((results) => {
        const valid = results.filter(
          (item): item is AttachedImage => item != null,
        );
        if (valid.length === 0) return;
        const next = [...attachedImagesRef.current, ...valid];
        attachedImagesRef.current = next;
        setAttachedImages(next);
        notifyLightDismissibility(bodyTextRef.current, next);
      });
    },
    [allowImageAttachments, readImageFile, notifyLightDismissibility],
  );

  const submitComment = (source = "button") => {
    const text = composer.getText();
    const draft = buildCommentDraft({
      baselineDesignGroup: baselineDesignGroupRef.current,
      commentText: text,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignSubmissionMode: activeDesignEditorStateRef.current != null,
    });
    const designActive = isDesignDraftActive({
      baselineDesignGroup: baselineDesignGroupRef.current,
      designDraft: draft.designDraft,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignEditorOpen: isDesignEditorVisible,
    });
    if (draft.designDraft == null && !draft.hasCommentText) {
      if (designActive && baselineDesignGroupRef.current != null) {
        onDesignChangeDelete?.(baselineDesignGroupRef.current.id);
      }
      return;
    }
    onSubmit({
      body: draft.trimmedCommentText,
      submitSource: source,
      ...(!allowImageAttachments || attachedImagesRef.current.length === 0
        ? {}
        : { attachedImages: attachedImagesRef.current }),
      ...(designActive ? { designChange: draft.designDraft } : {}),
    });
  };

  const submitDirect = (source = "button") => {
    const text = composer.getText();
    const draft = buildCommentDraft({
      baselineDesignGroup: baselineDesignGroupRef.current,
      commentText: text,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignSubmissionMode: activeDesignEditorStateRef.current != null,
    });
    const designActive = isDesignDraftActive({
      baselineDesignGroup: baselineDesignGroupRef.current,
      designDraft: draft.designDraft,
      designEditorState: activeDesignEditorStateRef.current,
      isDesignEditorOpen: isDesignEditorVisible,
    });
    if (!designActive && draft.hasCommentText) {
      onDirectSubmit({
        body: draft.trimmedCommentText,
        submitSource: source,
        ...(!allowImageAttachments || attachedImagesRef.current.length === 0
          ? {}
          : { attachedImages: attachedImagesRef.current }),
      });
    }
  };

  const primarySubmit = submitMode === "direct" ? submitDirect : submitComment;
  const secondarySubmit =
    submitMode === "direct" ? submitComment : submitDirect;

  useEffect(() => {
    if (!allowImageAttachments) return;
    const handler = (files: File[]) => {
      handleAddImages(files);
    };
    composer.addPastedImagesHandler(handler);
    return () => {
      composer.removePastedImagesHandler(handler);
    };
  }, [handleAddImages, allowImageAttachments, composer]);

  useDictationKeyboard({
    enabled: isDictationEnabled && existingCommentId == null,
    isDictating,
    isTranscribing,
    startDictation,
    stopDictation,
    keyboardEventTarget,
    shouldHandleDictation: () => isComposerFocused,
  });

  useEffect(() => {
    if (keyboardEventTarget == null || existingCommentId != null) return;
    const updateFocus = () => {
      const active = keyboardEventTarget.document.activeElement;
      setIsComposerFocused(
        active != null && composer.view.dom.contains(active),
      );
    };
    const onFocusChange = () => {
      keyboardEventTarget.requestAnimationFrame(updateFocus);
    };
    const onBlur = () => {
      setIsComposerFocused(false);
    };
    updateFocus();
    keyboardEventTarget.document.addEventListener("focusin", onFocusChange);
    keyboardEventTarget.document.addEventListener("focusout", onFocusChange);
    keyboardEventTarget.addEventListener("blur", onBlur);
    return () => {
      keyboardEventTarget.document.removeEventListener(
        "focusin",
        onFocusChange,
      );
      keyboardEventTarget.document.removeEventListener(
        "focusout",
        onFocusChange,
      );
      keyboardEventTarget.removeEventListener("blur", onBlur);
    };
  }, [composer, existingCommentId, keyboardEventTarget]);

  const handleKeyDownCapture = (
    event: React.KeyboardEvent<HTMLFormElement>,
  ) => {
    const view = event.currentTarget.ownerDocument.defaultView;
    const designInput =
      view != null &&
      (event.target instanceof view.HTMLInputElement ||
        event.target instanceof view.HTMLTextAreaElement) &&
      event.target.dataset.browserSidebarDesignContentInput === "true"
        ? event.target
        : null;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      if (designInput) {
        designInput.blur();
        return;
      }
      onEscape();
      return;
    }
    if (
      isDesignSubmissionMode &&
      event.key === "Enter" &&
      !event.altKey &&
      !event.shiftKey &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const dom = composer.view.dom;
    const domView = dom.ownerDocument.defaultView;
    const targetInComposer =
      domView != null &&
      event.target instanceof domView.Node &&
      dom.contains(event.target);
    if (
      existingCommentId == null &&
      !isDesignSubmissionMode &&
      (isComposerFocused || targetInComposer) &&
      event.key === "Enter" &&
      !event.altKey &&
      !event.shiftKey &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      event.stopPropagation();
      if (!allowDirectSubmit) {
        submitComment("keyboard");
        return;
      }
      secondarySubmit("keyboard");
    }
  };

  const handleFormMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const dom = composer.view.dom;
    const view = dom.ownerDocument.defaultView;
    if (
      view != null &&
      event.target instanceof view.Node &&
      !dom.contains(event.target)
    ) {
      event.preventDefault();
      dom.focus();
    }
  };

  const resetDragCounter = () => {
    dragEnterCountRef.current = 0;
    setIsDragOver(false);
  };
  const clearAdjustHintTimeout = () => {
    if (adjustHintTimeoutRef.current != null) {
      globalThis.clearTimeout(adjustHintTimeoutRef.current);
      adjustHintTimeoutRef.current = null;
    }
  };
  const clearScrubHideTimeout = () => {
    if (scrubHideTimeoutRef.current != null) {
      globalThis.clearTimeout(scrubHideTimeoutRef.current);
      scrubHideTimeoutRef.current = null;
    }
  };
  const openDesignEditor = () => {
    if (!showAdjustEntry) return;
    clearAdjustHintTimeout();
    setShowAdjustHint(false);
    setIsDesignEditorOpen(true);
    onTweaksEditorOpenChange?.(true);
  };
  const closeDesignEditor = () => {
    clearAdjustHintTimeout();
    setIsDesignEditorOpen(false);
    setIsPromptExpanded(false);
    onTweaksEditorOpenChange?.(false);
    setIsAdjustEntryAnimating(false);
    if (!canShowAdjustHint) {
      setShowAdjustHint(false);
      return;
    }
    setShowAdjustHint(true);
    adjustHintTimeoutRef.current = globalThis.setTimeout(() => {
      setShowAdjustHint(false);
      adjustHintTimeoutRef.current = null;
    }, ADJUST_HINT_DURATION_MS);
  };
  const toggleDesignEditor = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDesignEditorVisible) {
      closeDesignEditor();
      return;
    }
    if (isAdjustEntryAnimating || showAdjustHint) return;
    clearAdjustHintTimeout();
    setShowAdjustHint(false);
    const view = event.currentTarget.ownerDocument.defaultView;
    if (
      typeof view?.matchMedia === "function" &&
      view.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      openDesignEditor();
      return;
    }
    setIsAdjustEntryAnimating(true);
    openDesignEditor();
    globalThis.setTimeout(() => {
      setIsAdjustEntryAnimating(false);
    }, ADJUST_HINT_DURATION_MS);
  };

  const handleDesignEditorUpdate = (state: DesignEditorState) => {
    const draft = buildDesignDraftFromEditor(
      state,
      baselineDesignGroupRef.current,
      bodyTextRef.current.trim(),
    );
    activeDesignEditorStateRef.current = state;
    setDesignEditorState(state);
    notifyLightDismissibility(
      bodyTextRef.current,
      attachedImagesRef.current,
      state,
    );
    onDesignChangeUpdate?.(draft);
  };

  const handleScrubActiveChange = (
    property: string | null,
    element: HTMLElement | null,
  ) => {
    onDesignScrubPropertyChange?.(property);
    const containerRect = scrubContainerRef.current?.getBoundingClientRect();
    if (property == null) {
      clearScrubHideTimeout();
      setIsCardHiddenForScrub(false);
      scrubHideTimeoutRef.current = globalThis.setTimeout(() => {
        setScrubClone(null);
        scrubHideTimeoutRef.current = null;
      }, SCRUB_HIDE_DELAY_MS);
      return;
    }
    clearScrubHideTimeout();
    if (element == null || containerRect == null) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const valueCell = element.closest<HTMLElement>(
      "[data-browser-sidebar-design-scrub-value-cell]",
    );
    if (valueCell == null) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const peerProperty =
      valueCell.dataset.browserSidebarDesignScrubPeerProperty;
    const peerCell =
      peerProperty == null
        ? null
        : (Array.from(
            cardRef.current?.querySelectorAll<HTMLElement>(
              "[data-browser-sidebar-design-scrub-property]",
            ) ?? [],
          ).find(
            (node) =>
              node.dataset.browserSidebarDesignScrubProperty === peerProperty,
          ) ?? null);
    const cells =
      peerCell == null || peerCell === valueCell
        ? [valueCell]
        : [valueCell, peerCell];
    const measuredRows = cells.flatMap((cell) => {
      const labelNode =
        cell.parentElement?.querySelector<HTMLElement>(
          "[data-browser-sidebar-design-scrub-label]",
        ) ?? null;
      const controlNode = cell.querySelector("input")?.parentElement ?? null;
      const resetNode = cell.querySelector("button");
      const cellProperty =
        cell.dataset.browserSidebarDesignScrubProperty ?? property;
      const labelRect = labelNode?.getBoundingClientRect();
      const controlRect = controlNode?.getBoundingClientRect();
      const resetRect = resetNode?.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      const label =
        (cell === valueCell
          ? element.getAttribute("aria-label")?.trim()
          : null) ??
        labelNode?.dataset.browserSidebarDesignScrubCloneLabel ??
        labelNode?.textContent?.trim();
      if (
        labelRect == null ||
        controlRect == null ||
        label == null ||
        label.length === 0
      ) {
        return [];
      }
      return [
        {
          controlRect,
          label,
          labelRect,
          property: cellProperty,
          resetRect,
          rowBottom: Math.max(
            labelRect.bottom,
            cellRect.bottom,
            resetRect?.bottom ?? -Infinity,
          ),
          rowLeft: Math.min(
            labelRect.left,
            cellRect.left,
            resetRect?.left ?? Infinity,
          ),
          rowRight: Math.max(
            labelRect.right,
            cellRect.right,
            resetRect?.right ?? -Infinity,
          ),
          rowTop: Math.min(
            labelRect.top,
            cellRect.top,
            resetRect?.top ?? Infinity,
          ),
        },
      ];
    });
    if (measuredRows.length !== cells.length) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const left = Math.min(...measuredRows.map((row) => row.rowLeft));
    const right = Math.max(...measuredRows.map((row) => row.rowRight));
    const top = Math.min(...measuredRows.map((row) => row.rowTop));
    const bottom = Math.max(...measuredRows.map((row) => row.rowBottom));
    setIsCardHiddenForScrub(true);
    setScrubClone({
      rect: {
        height: bottom - top,
        left: left - containerRect.left,
        top: top - containerRect.top,
        width: right - left,
      },
      rows: measuredRows.map((row) => ({
        controlRect: {
          height: row.controlRect.height,
          left: row.controlRect.left - left,
          top: row.controlRect.top - top,
          width: row.controlRect.width,
        },
        label: row.label,
        labelRect: {
          height: row.labelRect.height,
          left: row.labelRect.left - left,
          top: row.labelRect.top - top,
          width: row.labelRect.width,
        },
        property: row.property,
        resetRect:
          row.resetRect == null
            ? undefined
            : {
                height: row.resetRect.height,
                left: row.resetRect.left - left,
                top: row.resetRect.top - top,
                width: row.resetRect.width,
              },
      })),
    });
  };

  const handleSuggestion = (event: unknown) => {
    handleComposerSuggestionEvent(event, {
      onAtMention: atMention.handleMentionEvent,
      onSkillMention: skillMention.handleMentionEvent,
    });
  };

  const handleCardPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (
      !isDesignEditorVisible ||
      !event.isPrimary ||
      event.button !== 0 ||
      cardRef.current == null ||
      !isDraggableTarget(event)
    ) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const view = event.currentTarget.ownerDocument.defaultView;
    dragStateRef.current = {
      baseLeft: rect.left - dragOffset.x,
      baseTop: rect.top - dragOffset.y,
      cardHeight: rect.height,
      cardWidth: rect.width,
      offsetX: dragOffset.x,
      offsetY: dragOffset.y,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      viewportHeight: view?.innerHeight ?? Infinity,
      viewportWidth: view?.innerWidth ?? Infinity,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handleCardPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragStateRef.current;
    if (drag == null || drag.pointerId !== event.pointerId) return;
    const nextX = drag.offsetX + event.clientX - drag.startClientX;
    const nextY = drag.offsetY + event.clientY - drag.startClientY;
    const minX = DRAG_MARGIN - drag.baseLeft;
    const maxX =
      drag.viewportWidth - drag.cardWidth - DRAG_MARGIN - drag.baseLeft;
    const minY = DRAG_MARGIN - drag.baseTop;
    const maxY =
      drag.viewportHeight - drag.cardHeight - DRAG_MARGIN - drag.baseTop;
    event.preventDefault();
    setDragOffset({
      x: maxX < minX ? nextX : Math.min(Math.max(nextX, minX), maxX),
      y: maxY < minY ? nextY : Math.min(Math.max(nextY, minY), maxY),
    });
  };
  const handleCardPointerEnd = (event: React.PointerEvent<HTMLElement>) => {
    if (dragStateRef.current?.pointerId === event.pointerId) {
      dragStateRef.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const adjustToggle = adjustEntryEnabled ? (
    <Button
      aria-label={adjustLabel}
      data-browser-sidebar-design-editor-toggle={true}
      className="absolute top-2 left-3 z-10"
      color={isDesignEditorVisible ? "secondary" : "ghost"}
      size="composer"
      title={adjustLabel}
      type="button"
      uniform
      onClick={toggleDesignEditor}
    >
      <span
        data-browser-sidebar-design-editor-entry-enter={
          !isDesignEditorVisible && showAdjustHint ? "" : undefined
        }
        className="flex items-center justify-center"
      >
        <DesignAdjustIcon
          className={clsx(
            "icon-sm origin-center",
            !isDesignEditorVisible &&
              (showAdjustHint
                ? "browser-sidebar-design-editor-entry-enter"
                : clsx(
                    "transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
                    isAdjustEntryAnimating
                      ? "-translate-x-1 -rotate-12 scale-[0.82] opacity-0"
                      : "translate-x-0 rotate-0 scale-100 opacity-100",
                  )),
          )}
        />
      </span>
    </Button>
  ) : null;

  const attachmentRow = hasAttachments ? (
    <div
      data-browser-comment-editor-attachment-row={true}
      className={clsx(
        "absolute right-3 flex gap-1.5 overflow-x-auto pb-1",
        ATTACHMENT_ROW_TOP_3,
        adjustEntryEnabled ? "left-12" : "left-3",
      )}
    >
      {attachedImages.map((image, index) => (
        <ImageAttachment
          key={`${image.filename ?? "image"}-${index}`}
          src={image.dataUrl}
          filename={image.filename}
          previewPortalContainer={keyboardEventTarget?.document.body ?? null}
          onPreviewCloseAutoFocus={focusComposer}
          onPreviewOpenChange={handlePreviewOpenChange}
          onRemove={() => {
            const next = attachedImagesRef.current.filter(
              (_item, itemIndex) => itemIndex !== index,
            );
            attachedImagesRef.current = next;
            setAttachedImages(next);
            notifyLightDismissibility(bodyTextRef.current, next);
          }}
        />
      ))}
    </div>
  ) : null;

  const composerBody =
    isDesignEditorVisible && activeDesignEditorState != null ? (
      <div
        data-browser-comment-design-editor-stack={true}
        className={clsx(
          DESIGN_STACK_CLASS,
          hasAttachments ? ATTACHMENT_TOP_PADDING : "pt-2",
          isPromptExpanded ? "gap-0" : "gap-2",
        )}
        onPointerCancel={handleCardPointerEnd}
        onPointerDown={handleCardPointerDown}
        onPointerMove={handleCardPointerMove}
        onPointerUp={handleCardPointerEnd}
      >
        <div
          ref={setPromptShellRef}
          data-browser-comment-design-prompt-shell={true}
          className={clsx(
            "translate-y-0.5 transition-[height,min-height,max-height] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
            adjustEntryEnabled && "ml-8",
            isPromptExpanded
              ? DESIGN_PROMPT_EXPANDED
              : "h-7 min-h-0 overflow-hidden",
          )}
        >
          <div className={clsx("min-h-0", !isPromptExpanded && "h-full")}>
            <ComposerEditor
              className={clsx(
                PROSE_CLASS,
                isPromptExpanded && DESIGN_PROMPT_SCROLL,
                !isPromptExpanded &&
                  "!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap",
              )}
              composerController={composer}
              ariaLabel={inputAriaLabel}
              minHeight="1.5rem"
              placeholder={placeholderText}
              onSuggestionHandler={handleSuggestion}
              onSubmit={() => primarySubmit("keyboard")}
            />
          </div>
        </div>
        <BrowserDesignTweaksEditor
          key={activeDesignEditorState.id}
          defaultExpandedSpacingGroups={defaultExpandedSpacingGroups}
          dropdownPortalContainer={keyboardEventTarget?.document.body ?? null}
          editorState={activeDesignEditorState}
          isEditable
          onDragHandlePointerCancel={handleCardPointerEnd}
          onDragHandlePointerDown={handleCardPointerDown}
          onDragHandlePointerMove={handleCardPointerMove}
          onDragHandlePointerUp={handleCardPointerEnd}
          onScrubActiveChange={handleScrubActiveChange}
          onUpdate={handleDesignEditorUpdate}
        />
      </div>
    ) : (
      <div
        data-browser-comment-editor-input-shell={true}
        className={clsx(
          isTallLayout
            ? clsx(
                "min-w-0",
                isExpandedComposer ? "pb-[52px]" : "pb-2",
                adjustEntryEnabled && !isAdjustEntryAnimating
                  ? isTallButNotExpanded
                    ? clsx("pl-12", INPUT_RIGHT_PADDING_52)
                    : "pl-12 pr-4"
                  : isTallButNotExpanded
                    ? clsx("pl-4", INPUT_RIGHT_PADDING_52)
                    : "px-4",
                hasAttachments ? ATTACHMENT_TOP_PADDING : "pt-2",
              )
            : clsx(
                INPUT_ABSOLUTE_CLASS,
                adjustEntryEnabled && !isAdjustEntryAnimating
                  ? "left-12"
                  : "left-4",
                hasAttachments ? ATTACHMENT_ROW_TOP_24 : "top-2",
                showFooterRow
                  ? adjustEntryEnabled && !isAdjustEntryAnimating
                    ? "bottom-[52px] w-[calc(100%-64px)]"
                    : "bottom-[52px] w-[calc(100%-32px)]"
                  : adjustEntryEnabled && !isAdjustEntryAnimating
                    ? "bottom-2 w-[calc(100%-92px)]"
                    : "bottom-2 w-[calc(100%-60px)]",
              ),
        )}
        onMouseDown={handleFormMouseDown}
      >
        <div
          className={clsx(
            isTallLayout
              ? "min-h-0 translate-y-0.5"
              : "h-full min-h-0 translate-y-0.5",
          )}
        >
          <ComposerEditor
            className={clsx(
              PROSE_CLASS,
              isTallLayout && INPUT_MAX_HEIGHT_180,
              isEditMode && INPUT_MAX_HEIGHT_FULL,
              !isExpandedComposer &&
                !hasAttachments &&
                "!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap",
            )}
            composerController={composer}
            ariaLabel={inputAriaLabel}
            minHeight="1.5rem"
            placeholder={placeholderText}
            onSuggestionHandler={handleSuggestion}
            onSubmit={
              existingCommentId == null
                ? () => primarySubmit("keyboard")
                : () => submitComment("keyboard")
            }
          />
        </div>
      </div>
    );

  const footerActions = (
    <div
      data-browser-comment-editor-footer-actions={true}
      aria-hidden={!footerActionsVisible}
      className={clsx(
        FOOTER_CLASS,
        existingCommentId == null ? "justify-start gap-1.5" : "justify-between",
        footerActionsVisible
          ? "scale-100 opacity-100"
          : "invisible pointer-events-none scale-95 opacity-0",
      )}
    >
      {existingCommentId == null ? (
        queuedBaseline != null && onDesignChangeDelete != null ? (
          <Button
            aria-label={deleteLabel}
            color="ghostMuted"
            size="composer"
            onClick={() => {
              onDesignChangeDelete(queuedBaseline.id);
            }}
            uniform
          >
            <CommentDeleteIcon className="icon-sm" />
          </Button>
        ) : null
      ) : (
        <Button
          aria-label={deleteLabel}
          color="ghostMuted"
          size="composer"
          onClick={() => {
            onDelete(existingCommentId);
          }}
          uniform
        >
          <CommentDeleteIcon className="icon-sm" />
        </Button>
      )}
      <div className="flex items-center gap-1.5">
        {showFooterActions ? (
          <Button
            color="outline"
            size="composer"
            tabIndex={footerActionsVisible ? undefined : -1}
            onClick={() => {
              onCancel();
            }}
          >
            <FormattedMessage
              id="browserSidebarCommentOverlay.cancel"
              defaultMessage="Cancel"
              description="Cancel action for the browser comment overlay"
            />
          </Button>
        ) : null}
        {existingCommentId == null ? null : (
          <Button
            color="primary"
            disabled={!canSubmit}
            size="composer"
            type="submit"
          >
            <FormattedMessage
              id="browserSidebarCommentOverlay.save"
              defaultMessage="Save"
              description="Primary action for editing an existing browser comment"
            />
          </Button>
        )}
      </div>
    </div>
  );

  const submitControls =
    existingCommentId == null ? (
      <div className="absolute right-2 bottom-2 flex items-center gap-2">
        {showDictationStart ? (
          <DictationButton
            isVisible={isDictationDefaultOn}
            isTranscribing={isTranscribing}
            canRetryDictation={canRetryDictation}
            disabled={canSubmitEmpty}
            retryDictation={retryDictation}
            shortcutLabel={dictationShortcutLabel}
            startDictation={startDictation}
            stopDictation={stopDictation}
            tooltipPortalContainer={tooltipPortalContainer}
          />
        ) : null}
        {showSubmitButton ? (
          isDesignSubmissionMode ? (
            <Button
              aria-label={addTweaksLabel}
              color="primary"
              data-browser-comment-submit={true}
              size="composer"
              disabled={!canSubmit}
              type="button"
              uniform
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={() => {
                submitComment("button");
              }}
            >
              <CommentSendIcon className="icon-sm" />
            </Button>
          ) : (
            <Tooltip
              side="top"
              sideOffset={4}
              portalContainer={tooltipPortalContainer}
              tooltipContent={
                <div className="space-y-1">
                  <ShortcutTooltipRow keysLabel={enterLabel}>
                    {submitMode === "direct" ? (
                      <SendTooltipLabel />
                    ) : (
                      <AddTooltipLabel />
                    )}
                  </ShortcutTooltipRow>
                  {allowDirectSubmit ? (
                    <ShortcutTooltipRow keysLabel={cmdEnterLabel}>
                      {submitMode === "direct" ? (
                        <AddTooltipLabel />
                      ) : (
                        <SendTooltipLabel />
                      )}
                    </ShortcutTooltipRow>
                  ) : null}
                </div>
              }
            >
              <Button
                aria-label={commentLabel}
                color="primary"
                data-browser-comment-submit={true}
                size="composer"
                disabled={!canSubmit}
                type="button"
                uniform
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={() => {
                  if (shouldDirectSubmit) {
                    secondarySubmit("button");
                    return;
                  }
                  primarySubmit("button");
                }}
              >
                {isDirectIconState ? (
                  <CommentSaveIcon className="icon-sm" />
                ) : (
                  <CommentSendIcon className="icon-sm" />
                )}
              </Button>
            </Tooltip>
          )
        ) : null}
      </div>
    ) : null;

  const scrubCloneOverlay =
    scrubClone != null &&
    scrubCloneRows != null &&
    scrubCloneRows.length === scrubClone.rows.length ? (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-20"
        data-browser-comment-design-scrub-clone={true}
        style={{
          height: scrubClone.rect.height,
          left: scrubClone.rect.left,
          top: scrubClone.rect.top,
          width: scrubClone.rect.width,
        }}
      >
        <span className="absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-token-dropdown-background shadow-md ring-1 ring-token-border-light" />
        {scrubCloneRows.map(({ row, value }) => (
          <Fragment key={row.property}>
            <span
              className="absolute flex min-w-0 items-center text-sm text-token-text-secondary"
              style={{
                height: row.labelRect.height,
                left: row.labelRect.left,
                top: row.labelRect.top,
                width: row.labelRect.width,
              }}
            >
              <span className="min-w-0 truncate">{row.label}</span>
            </span>
            {row.resetRect == null ? null : (
              <span
                className="absolute flex items-center justify-center text-token-text-secondary"
                style={{
                  height: row.resetRect.height,
                  left: row.resetRect.left,
                  top: row.resetRect.top,
                  width: row.resetRect.width,
                }}
              >
                <ResetValueIcon className="icon-2xs" />
              </span>
            )}
            <span
              className="absolute flex min-w-0 items-center gap-1 rounded-lg border border-token-focus-border bg-token-input-background px-3 text-token-input-foreground shadow-sm ring-1 ring-token-focus-border"
              style={{
                height: row.controlRect.height,
                left: row.controlRect.left,
                top: row.controlRect.top,
                width: row.controlRect.width,
              }}
            >
              <span className="min-w-0 flex-1 truncate text-left font-mono text-xs text-token-input-foreground">
                {value.value}
              </span>
              {value.unit == null ? null : (
                <span className="shrink-0 font-mono text-xs text-token-text-tertiary">
                  {value.unit}
                </span>
              )}
            </span>
          </Fragment>
        ))}
      </div>
    ) : null;

  return (
    <form
      className="pointer-events-none relative h-full w-full overflow-visible bg-transparent text-token-foreground"
      style={COMMENT_SURFACE_STYLE_VARS}
      onKeyDownCapture={handleKeyDownCapture}
      onSubmit={(event) => {
        event.preventDefault();
        if (existingCommentId == null) {
          primarySubmit("button");
          return;
        }
        submitComment("button");
      }}
    >
      <div className={TOP_TRAY_CLASS} style={{ height: topTrayHeight }}>
        {activeMentionKind != null && topTrayHeight > 0 ? (
          <div className="pointer-events-auto max-h-full w-full">
            {activeMentionKind === "at" ? (
              <AtMentionAutocomplete
                className="max-h-full w-full"
                chromeVariant="default"
                hostId={LOCAL_HOST_ID}
                keyboardEventTarget={keyboardEventTarget}
                onAddContext={atMention.addMention}
                onRequestClose={atMention.closeAutocomplete}
                onUpdateSelectedMention={atMention.setSelectedMention}
                query={atMention.ui?.query ?? ""}
                roots={workspaceRoots ?? []}
                skillRoots={workspaceRoots}
                source={atMention.ui?.source ?? null}
              />
            ) : null}
            {activeMentionKind === "skill" ? (
              <SkillMentionAutocomplete
                className="max-h-full w-full"
                query={skillMention.ui?.query ?? ""}
                keyboardEventTarget={keyboardEventTarget}
                onUpdateSelectedMention={skillMention.setSelectedMention}
                onAddMention={skillMention.addMention}
                onRequestClose={skillMention.closeAutocomplete}
                cwd={session.cwd ?? undefined}
                roots={workspaceRoots}
                chromeVariant="default"
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div
        ref={scrubContainerRef}
        className={CARD_AREA_CLASS}
        style={{
          top: topTrayHeight,
          height: isDesignEditorVisible || isTallLayout ? undefined : 120,
        }}
      >
        <CommentOverlaySurface
          ref={cardRef}
          data-browser-comment-editor-surface={true}
          className={clsx(
            "relative",
            isDesignEditorVisible
              ? "w-[344px] max-w-full"
              : "w-[294px] max-w-full",
            isDragOver && "bg-token-menu-background ring-token-focus-border",
            isCardHiddenForScrub
              ? "opacity-0 duration-[300ms]"
              : "duration-[150ms]",
          )}
          style={
            isDesignEditorVisible || isTallLayout
              ? {
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0px)`,
                }
              : {
                  height: cardHeight,
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0px)`,
                }
          }
          onDragEnter={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              event.dataTransfer.dropEffect = "copy";
              dragEnterCountRef.current += 1;
              setIsDragOver(true);
            }
          }}
          onDragOver={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              event.dataTransfer.dropEffect = "copy";
              if (!isDragOver) setIsDragOver(true);
            }
          }}
          onDragLeave={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              dragEnterCountRef.current = Math.max(
                0,
                dragEnterCountRef.current - 1,
              );
              if (dragEnterCountRef.current === 0) setIsDragOver(false);
            }
          }}
          onDrop={(event) => {
            if (
              !allowImageAttachments ||
              !dataTransferHasImages(event.dataTransfer)
            ) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            const files = extractImageFilesFromDataTransfer(event.dataTransfer);
            if (files.length > 0) handleAddImages(files);
            resetDragCounter();
          }}
        >
          {adjustToggle}
          {attachmentRow}
          {composerBody}
          <span
            ref={measureSpanRef}
            aria-hidden="true"
            className={MEASURE_SPAN_CLASS}
            style={{ fontSize: "var(--codex-chat-font-size)" }}
          >
            {bodyText}
          </span>
          {isDesignEditorVisible ? (
            <div
              data-browser-sidebar-design-footer-divider={true}
              className="pointer-events-none absolute inset-x-0 bottom-12 border-t border-token-border/60"
            />
          ) : null}
          {footerActions}
          {existingCommentId == null && isDictating ? (
            <div className="absolute right-0 bottom-2 left-0">
              <DictationRecordingFooter
                isTranscribing={isTranscribing}
                recordingDurationMs={recordingDurationMs}
                waveformCanvasRef={waveformCanvasRef}
                stopDictation={stopDictation}
                leadingAccessory={null}
                noBottomMargin
                tooltipPortalContainer={tooltipPortalContainer}
              />
            </div>
          ) : null}
          {submitControls}
        </CommentOverlaySurface>
        {scrubCloneOverlay}
      </div>
    </form>
  );
}

type CommentOverlaySurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

function CommentOverlaySurface({
  className,
  style,
  ref,
  ...rest
}: CommentOverlaySurfaceProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={clsx(
        "pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
        className,
      )}
      style={{ ...COMMENT_SURFACE_STYLE_VARS, ...style }}
    />
  );
}

type ShortcutTooltipRowProps = {
  children: React.ReactNode;
  keysLabel: string;
};

function ShortcutTooltipRow({ children, keysLabel }: ShortcutTooltipRowProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-token-foreground">{children}</span>
      <KeyboardShortcutHint keysLabel={keysLabel} />
    </div>
  );
}

function AddTooltipLabel() {
  return (
    <FormattedMessage
      id="browserSidebarCommentOverlay.add.tooltip"
      defaultMessage="Add"
      description="Action label shown in the browser comment submit tooltip for saving a pending comment"
    />
  );
}

function SendTooltipLabel() {
  return (
    <FormattedMessage
      id="browserSidebarCommentOverlay.send.tooltip"
      defaultMessage="Send"
      description="Action label shown in the browser comment submit tooltip for sending a comment"
    />
  );
}

function resolvePreviewText(session: BrowserCommentSession): string {
  return session.body.length > 0
    ? session.body
    : (session.designChange?.comment ?? "");
}

function resolveBaselineDesignGroup(
  session: BrowserCommentSession,
): DesignDraftGroup | null {
  if (session.designChange == null) return null;
  return session.designChange.comment != null ||
    session.body.trim().length === 0
    ? session.designChange
    : { ...session.designChange, comment: session.body };
}

function countDesignAdjustments(designChange: DesignDraftGroup): number {
  return Math.max(
    designChange.declarations.length + (designChange.text == null ? 0 : 1),
    1,
  );
}

function renderPreviewSegments(text: string): React.ReactNode {
  return parseCommentPreviewSegments(text).map(
    (
      segment:
        | { type: "text"; text: string }
        | { type: "mention"; label: string },
      index: number,
    ) => {
      switch (segment.type) {
        case "text":
          return segment.text;
        case "mention":
          return (
            <strong
              key={`comment-preview-mention-${index}`}
              className={MENTION_CLASS}
            >
              {segment.label}
            </strong>
          );
      }
    },
  );
}

function previewAlignmentClass(
  alignment: BrowserCommentSession["previewAlignment"],
): string | undefined {
  switch (alignment) {
    case "start":
      return "justify-start";
    case "end":
      return "justify-end";
    case "center":
      return "justify-center";
    default:
      return undefined;
  }
}

function computeLightDismissibility(
  mode: CommentTarget["mode"],
  initialBody: string,
  text: string,
  initialImages: AttachedImage[],
  images: AttachedImage[],
  baseline: DesignDraftGroup | null,
  designState: DesignEditorState | null,
): boolean {
  const trimmed = text.trim();
  const designUnchanged = isDesignUnchanged(trimmed, baseline, designState);
  switch (mode) {
    case "create":
      return isBlankText(text) && images.length === 0 && designUnchanged;
    case "edit":
      return (
        trimmed === initialBody.trim() &&
        areAttachmentsEqual(initialImages, images) &&
        designUnchanged
      );
    case "design":
      return baseline == null
        ? trimmed.length === 0 && designUnchanged
        : designUnchanged;
  }
}

function isDesignUnchanged(
  trimmedText: string,
  baseline: DesignDraftGroup | null,
  designState: DesignEditorState | null,
): boolean {
  if (designState == null) return baseline == null;
  const draft = buildDesignDraftFromEditor(designState, baseline, trimmedText);
  return baseline == null
    ? draft == null
    : areDesignDraftGroupsEqual(draft, baseline);
}

function areAttachmentsEqual(
  left: AttachedImage[],
  right: AttachedImage[],
): boolean {
  return left.length === right.length
    ? left.every((item, index) => {
        const other = right[index];
        return (
          other != null &&
          item.dataUrl === other.dataUrl &&
          item.filename === other.filename &&
          item.localPath === other.localPath
        );
      })
    : false;
}

function shouldExpandComposer(
  text: string,
  isMultiNode: boolean,
  measureSpan: HTMLSpanElement | null,
  card: HTMLElement | null,
): boolean {
  const trimmed = text.trim();
  if (trimmed.length === 0) return false;
  if (isMultiNode) return true;
  const availableWidth = computeAvailableInputWidth(card);
  const textWidth = measureTextWidth(text, measureSpan);
  return availableWidth == null || textWidth == null
    ? trimmed.length >= COMPOSER_EXPAND_FALLBACK_LENGTH
    : textWidth + COMPOSER_EXPAND_THRESHOLD > availableWidth;
}

function shouldExpandDesignPrompt(
  text: string,
  measureSpan: HTMLSpanElement | null,
  promptShell: HTMLElement | null,
): boolean {
  if (text.trim().length === 0) return false;
  if (/\r?\n/.test(text)) return true;
  const shellWidth = measureControlWidth(promptShell);
  const textWidth = measureTextWidth(text, measureSpan);
  return shellWidth == null || textWidth == null
    ? false
    : textWidth + DESIGN_PROMPT_EXPAND_THRESHOLD > shellWidth;
}

function computeAvailableInputWidth(card: HTMLElement | null): number | null {
  if (card == null) return null;
  const rect = card.getBoundingClientRect();
  if (rect.width === 0) return null;
  const submitWidth =
    card.querySelector("[data-browser-comment-submit]")?.getBoundingClientRect()
      .width ?? SUBMIT_BUTTON_WIDTH;
  const toggleWidth =
    card.querySelector("[data-browser-sidebar-design-editor-toggle]") == null
      ? 0
      : DESIGN_TOGGLE_WIDTH;
  return (
    rect.width -
    INPUT_LEFT_INSET -
    INPUT_GAP -
    toggleWidth -
    submitWidth -
    INPUT_RIGHT_INSET
  );
}

function measureControlWidth(node: HTMLElement | null): number | null {
  if (node == null) return null;
  const rect = node.getBoundingClientRect();
  return rect.width === 0 ? null : rect.width;
}

function measureTextWidth(
  text: string,
  span: HTMLSpanElement | null,
): number | null {
  if (span == null) return null;
  span.textContent = text;
  return span.getBoundingClientRect().width;
}

function isDraggableTarget(event: React.PointerEvent<HTMLElement>): boolean {
  const target = event.target;
  const view = event.currentTarget.ownerDocument.defaultView;
  if (view == null || !(target instanceof view.Element)) return false;
  return (
    target.closest(
      [
        "a",
        "button",
        "input",
        "select",
        "textarea",
        "[contenteditable='true']",
        "[data-browser-sidebar-design-no-drag]",
        "[role='button']",
        "[role='combobox']",
        "[role='menuitem']",
      ].join(","),
    ) == null
  );
}

function DesignAdjustIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.9165 11.0012C9.43621 11.0012 10.7056 12.0728 11.0112 13.5012H16.6665L16.8013 13.5149C17.104 13.577 17.3314 13.8452 17.3315 14.1663C17.3315 14.4874 17.1041 14.7554 16.8013 14.8176L16.6665 14.8313H11.0112C10.7058 16.2601 9.43643 17.3313 7.9165 17.3313C6.39667 17.3311 5.12714 16.26 4.82178 14.8313H3.3335C2.96623 14.8313 2.66846 14.5335 2.66846 14.1663C2.66863 13.7991 2.96634 13.5012 3.3335 13.5012H4.82178C5.12738 12.0728 6.3969 11.0014 7.9165 11.0012ZM7.9165 12.3313C6.90332 12.3315 6.08172 13.1531 6.08154 14.1663C6.08154 15.1796 6.90321 16.001 7.9165 16.0012C8.92995 16.0012 9.75146 15.1797 9.75146 14.1663C9.75129 13.153 8.92984 12.3313 7.9165 12.3313ZM12.0835 2.66821C13.6033 2.66821 14.8727 3.73958 15.1782 5.16821H16.6665L16.8013 5.18188C17.1041 5.24406 17.3315 5.51204 17.3315 5.83325C17.3315 6.15446 17.1041 6.42245 16.8013 6.48462L16.6665 6.49829H15.1782C14.8727 7.92693 13.6033 8.99829 12.0835 8.99829C10.5637 8.99829 9.2943 7.92693 8.98877 6.49829H3.3335C2.96623 6.49829 2.66846 6.20052 2.66846 5.83325C2.66846 5.46598 2.96623 5.16821 3.3335 5.16821H8.98877C9.2943 3.73958 10.5637 2.66821 12.0835 2.66821ZM12.0835 3.99829C11.0701 3.99829 10.2485 4.81981 10.2485 5.83325C10.2485 6.84669 11.0701 7.66821 12.0835 7.66821C13.0969 7.66821 13.9185 6.84669 13.9185 5.83325C13.9185 4.81981 13.0969 3.99829 12.0835 3.99829Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CommentDeleteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.6299 1.33496C12.0335 1.33496 13.2695 2.25996 13.666 3.60645L13.8809 4.33496H17L17.1338 4.34863C17.4369 4.41057 17.665 4.67858 17.665 5C17.665 5.32142 17.4369 5.58943 17.1338 5.65137L17 5.66504H16.6543L15.8574 14.9912C15.7177 16.629 14.3478 17.8877 12.7041 17.8877H7.2959C5.75502 17.8877 4.45439 16.7815 4.18262 15.2939L4.14258 14.9912L3.34668 5.66504H3C2.63273 5.66504 2.33496 5.36727 2.33496 5C2.33496 4.63273 2.63273 4.33496 3 4.33496H6.11914L6.33398 3.60645L6.41797 3.3584C6.88565 2.14747 8.05427 1.33496 9.37012 1.33496H10.6299ZM5.46777 14.8779L5.49121 15.0537C5.64881 15.9161 6.40256 16.5576 7.2959 16.5576H12.7041C13.6571 16.5576 14.4512 15.8275 14.5322 14.8779L15.3193 5.66504H4.68164L5.46777 14.8779ZM7.66797 12.8271V8.66016C7.66797 8.29299 7.96588 7.99528 8.33301 7.99512C8.70028 7.99512 8.99805 8.29289 8.99805 8.66016V12.8271C8.99779 13.1942 8.70012 13.4912 8.33301 13.4912C7.96604 13.491 7.66823 13.1941 7.66797 12.8271ZM11.002 12.8271V8.66016C11.002 8.29289 11.2997 7.99512 11.667 7.99512C12.0341 7.9953 12.332 8.293 12.332 8.66016V12.8271C12.3318 13.1941 12.0339 13.491 11.667 13.4912C11.2999 13.4912 11.0022 13.1942 11.002 12.8271ZM9.37012 2.66504C8.60726 2.66504 7.92938 3.13589 7.6582 3.83789L7.60938 3.98145L7.50586 4.33496H12.4941L12.3906 3.98145C12.1607 3.20084 11.4437 2.66504 10.6299 2.66504H9.37012Z" />
    </svg>
  );
}
