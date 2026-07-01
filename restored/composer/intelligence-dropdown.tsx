// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composer "intelligence" dropdown: model picker, reasoning-effort slider/list,
// and service-tier (speed) selection.
import React, { type ReactElement, type ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { Tooltip } from "../ui/tooltip-b";
import { CheckMdIcon } from "../icons/check-md-icon";
import {
  motion,
  PlatformGate,
  isFlyoutSubmenuDisabled,
  isVerboseModelDescriptionLocale,
  modelSupportsServiceTier,
  type ModelOption,
} from "../boundaries/automation-editor-deps.facade";
import {
  ReasoningEffortLabel,
  REASONING_EFFORT_LABELS,
} from "./reasoning-effort-label";
import { ModelLabel } from "./model-label";
import {
  getModelReasoningEffortOptions,
  resolveReasoningEffortOption,
} from "./reasoning-effort-options";
import {
  ServiceTierSpeedIcon,
  type ServiceTierIconKind,
} from "./service-tier-speed-icon";
import { renderMessageOrString } from "./render-message-or-string";
import type { MessageDescriptor } from "../vendor/react-intl";

const SLIDER_ANIMATION_DURATION = 0.3;
const SLIDER_TRANSITION = {
  duration: SLIDER_ANIMATION_DURATION,
  ease: [0.23, 1, 0.32, 1],
};
const THUMB_GLOW_TRANSITION = {
  duration: SLIDER_ANIMATION_DURATION,
  ease: "linear",
  times: [0, 0.1309, 0.6354, 1],
};
const FASTER_SMARTER_TRANSITION = {
  duration: 0.16,
  ease: [0.23, 1, 0.32, 1],
};
const THUMB_PRESS_TRANSITION = {
  duration: 0.14,
  ease: [0.23, 1, 0.32, 1],
};
const DRAG_THRESHOLD_PX = 3;

export function initIntelligenceDropdownChunk(): void {}

type IntlWithLocale = ReturnType<typeof useIntl> & { locale: string };

interface DragSelectionState {
  index: number;
  model: string;
  selectedEffort: string;
}

interface PointerState {
  startX: number;
  isDragging: boolean;
}

export interface ServiceTierOption {
  value: string | null;
  label: string | MessageDescriptor;
  description: string | MessageDescriptor;
  iconKind: ServiceTierIconKind;
}

export interface IntelligenceDropdownProps {
  align?: "start" | "center" | "end";
  disabled?: boolean;
  model: string;
  models?: ModelOption[] | null;
  modelOptionsDisabled?: boolean;
  onCloseAutoFocus?: (event: Event) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onOpenChange?: (open: boolean) => void;
  onSelectComplete?: () => void;
  onSelectModel: (model: string, reasoningEffort: string) => void;
  onSelectReasoningEffort: (reasoningEffort: string) => void;
  onSelectServiceTier?: (value: string | null) => void;
  open?: boolean;
  reasoningEffort: string;
  reasoningEffortDisabled?: boolean;
  selectedServiceTier?: string | null;
  selectedServiceTierIconKind?: ServiceTierIconKind;
  serviceTierOptions?: ServiceTierOption[];
  serviceTierOptionsLoading?: boolean;
  showReasoningEffortControls?: boolean;
  showReasoningEffortSlider?: boolean;
  triggerButton: ReactNode;
}

export function IntelligenceDropdown(
  props: IntelligenceDropdownProps,
): ReactElement {
  const {
    align,
    disabled,
    model,
    models,
    modelOptionsDisabled = false,
    onCloseAutoFocus,
    onEscapeKeyDown,
    onOpenChange,
    onSelectComplete,
    onSelectModel,
    onSelectReasoningEffort,
    onSelectServiceTier,
    open,
    reasoningEffort,
    reasoningEffortDisabled = false,
    selectedServiceTier = null,
    selectedServiceTierIconKind = null,
    serviceTierOptions = [],
    serviceTierOptionsLoading = false,
    showReasoningEffortControls = true,
    showReasoningEffortSlider = false,
    triggerButton,
  } = props;

  const reasoningOptions = getModelReasoningEffortOptions(models, model);
  const resolvedEffort =
    resolveReasoningEffortOption(reasoningEffort, reasoningOptions) ??
    reasoningEffort;
  const resolvedIndex = Math.max(
    reasoningOptions.findIndex(
      (option) => option.reasoningEffort === resolvedEffort,
    ),
    0,
  );

  const [dragSelection, setDragSelection] =
    React.useState<DragSelectionState | null>(null);
  const [pointerState, setPointerState] = React.useState<PointerState | null>(
    null,
  );
  const [isThumbHovered, setIsThumbHovered] = React.useState(false);

  if (
    dragSelection != null &&
    (dragSelection.model !== model ||
      dragSelection.selectedEffort !== resolvedEffort)
  ) {
    setDragSelection(
      pointerState != null && dragSelection.model === model
        ? { ...dragSelection, selectedEffort: resolvedEffort }
        : null,
    );
  }

  const isDragging = pointerState?.isDragging ?? false;
  const activeIndex =
    dragSelection?.model === model &&
    dragSelection.selectedEffort === resolvedEffort
      ? dragSelection.index
      : resolvedIndex;
  const activeEffort =
    reasoningOptions[activeIndex]?.reasoningEffort ?? resolvedEffort;
  const fillPercent =
    (activeIndex / Math.max(reasoningOptions.length - 1, 1)) * 100;
  const fillFraction = fillPercent / 100;
  const glowColor = `color-mix(in srgb, var(--color-token-text-link-foreground) ${100 - fillPercent}%, var(--color-token-charts-purple))`;
  const fillWidth = `calc(${fillPercent}% + ${16 - (16 * fillPercent) / 100}px)`;
  const selectedModelOption = models?.find((option) => option.model === model);
  const intl = useIntl();

  const commitEffort = (index: number, effort?: string): void => {
    const referenceEffort = effort === undefined ? resolvedEffort : effort;
    const nextEffort = reasoningOptions[index]?.reasoningEffort ?? null;
    if (nextEffort == null || nextEffort === referenceEffort) {
      setDragSelection(null);
      return;
    }
    onSelectReasoningEffort(nextEffort);
  };

  const handleOpenChange = (nextOpen: boolean): void => {
    if (!nextOpen) {
      setPointerState(null);
      setDragSelection(null);
      setIsThumbHovered(false);
    }
    onOpenChange?.(nextOpen);
  };

  const reasoningTitle = showReasoningEffortSlider ? null : (
    <Dropdown.Title>
      <FormattedMessage
        id="composer.intelligenceDropdown.title"
        defaultMessage="Reasoning"
        description="Header label for the intelligence dropdown"
      />
    </Dropdown.Title>
  );

  const reasoningControls = showReasoningEffortControls ? (
    <>
      {showReasoningEffortSlider ? (
        <div className="flex flex-col gap-1 px-2 py-1.5">
          <motion.div
            dir="ltr"
            className="flex w-full justify-between text-xs text-token-description-foreground"
            initial={false}
            animate={{ opacity: isDragging ? 0 : 1 }}
            transition={FASTER_SMARTER_TRANSITION}
          >
            <span>
              <FormattedMessage
                id="composer.intelligenceDropdown.effort.faster"
                defaultMessage="Faster"
                description="Label for the lower end of the reasoning effort slider"
              />
            </span>
            <span>
              <FormattedMessage
                id="composer.intelligenceDropdown.effort.smarter"
                defaultMessage="Smarter"
                description="Label for the higher end of the reasoning effort slider"
              />
            </span>
          </motion.div>
          <div dir="ltr" className="relative flex h-5 items-center">
            <div className="pointer-events-none absolute inset-x-0 h-4 rounded-md bg-token-foreground/5 shadow-[0_0_2px_0_rgba(0,0,0,0.18)_inset]" />
            <motion.div
              className="pointer-events-none absolute left-0 h-4 rounded-md bg-token-text-link-foreground"
              initial={false}
              animate={{ width: fillWidth }}
              transition={SLIDER_TRANSITION}
            >
              <motion.div
                className="absolute inset-0 rounded-md bg-token-charts-purple"
                initial={false}
                animate={{ opacity: fillFraction }}
                transition={SLIDER_TRANSITION}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-1.5 flex items-center justify-between">
              {reasoningOptions.map((option, index) => (
                <span
                  key={option.reasoningEffort}
                  data-reasoning-slider-rung={true}
                  className={classNames(
                    "size-1 rounded-sm",
                    index <= activeIndex
                      ? "bg-white/30"
                      : "bg-token-description-foreground/50",
                  )}
                />
              ))}
            </div>
            <input
              type="range"
              aria-label={intl.formatMessage({
                id: "composer.intelligenceDropdown.effort.sliderLabel",
                defaultMessage: "Reasoning effort",
                description:
                  "Accessible label for the reasoning effort slider in the composer",
              })}
              aria-valuetext={intl.formatMessage(
                REASONING_EFFORT_LABELS[
                  activeEffort as keyof typeof REASONING_EFFORT_LABELS
                ],
              )}
              className="peer relative left-0.5 z-20 h-5 w-[calc(100%-4px)] cursor-interaction appearance-none bg-transparent disabled:cursor-default [&::-moz-range-thumb]:size-3.5 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-4 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:mt-px [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-transparent"
              data-reasoning-slider={true}
              disabled={reasoningEffortDisabled || reasoningOptions.length < 2}
              min={0}
              max={Math.max(reasoningOptions.length - 1, 0)}
              step={1}
              value={activeIndex}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.stopPropagation();
                  onSelectComplete?.();
                  return;
                }
                let nextIndex: number;
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  nextIndex = Math.min(
                    activeIndex + 1,
                    reasoningOptions.length - 1,
                  );
                } else if (
                  event.key === "ArrowUp" ||
                  event.key === "ArrowLeft"
                ) {
                  nextIndex = Math.max(activeIndex - 1, 0);
                } else {
                  return;
                }
                event.preventDefault();
                event.stopPropagation();
                if (nextIndex !== activeIndex) {
                  setDragSelection({
                    index: nextIndex,
                    model,
                    selectedEffort: resolvedEffort,
                  });
                  commitEffort(nextIndex, activeEffort);
                }
              }}
              onPointerDown={(event) => {
                setPointerState({
                  startX: event.clientX,
                  isDragging: false,
                });
              }}
              onPointerMove={(event) => {
                if (event.pointerType === "mouse") {
                  const rect = event.currentTarget.getBoundingClientRect();
                  const inset = rect.height * 0.4;
                  const thumbX =
                    rect.left +
                    inset +
                    ((rect.width - inset * 2) * fillPercent) / 100;
                  setIsThumbHovered(
                    Math.abs(event.clientX - thumbX) <= rect.height / 2,
                  );
                }
                setPointerState((current) =>
                  current == null ||
                  current.isDragging ||
                  Math.abs(event.clientX - current.startX) < DRAG_THRESHOLD_PX
                    ? current
                    : { ...current, isDragging: true },
                );
              }}
              onPointerLeave={() => setIsThumbHovered(false)}
              onChange={(event) => {
                const nextIndex = Number(event.target.value);
                setDragSelection({
                  index: nextIndex,
                  model,
                  selectedEffort: resolvedEffort,
                });
                if (pointerState == null) {
                  setIsThumbHovered(false);
                  commitEffort(nextIndex);
                }
              }}
              onPointerUp={(event) => {
                setPointerState(null);
                commitEffort(Number(event.currentTarget.value));
              }}
              onPointerCancel={() => {
                setPointerState(null);
                setDragSelection(null);
              }}
              onBlur={(event) => {
                if (pointerState != null) {
                  commitEffort(Number(event.currentTarget.value));
                }
                setPointerState(null);
              }}
            />
            <div className="pointer-events-none absolute inset-x-2 top-1/2 h-3.5 -translate-y-1/2">
              <Tooltip
                disableHoverOpen={true}
                open={isDragging}
                sideOffset={6}
                tooltipContent={
                  <ReasoningEffortLabel
                    effort={
                      activeEffort as keyof typeof REASONING_EFFORT_LABELS
                    }
                  />
                }
              >
                <motion.span
                  className="absolute top-0 size-3.5"
                  initial={false}
                  animate={{ left: `${fillPercent}%`, x: "-50%" }}
                  transition={SLIDER_TRANSITION}
                >
                  <motion.span
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      transform: isThumbHovered ? "scale(0.94)" : "scale(1)",
                    }}
                    transition={THUMB_PRESS_TRANSITION}
                  >
                    <motion.span
                      aria-hidden={true}
                      className="absolute inset-0 rounded-[4px]"
                      initial={false}
                      animate={{ opacity: fillFraction }}
                      style={{
                        boxShadow: `0 0 6px 1px color-mix(in srgb, ${glowColor} 55%, transparent), 0 0 16px color-mix(in srgb, ${glowColor} 32%, transparent)`,
                      }}
                      transition={SLIDER_TRANSITION}
                    />
                    <motion.span
                      key={activeEffort}
                      animate={{
                        opacity: 0.84 + fillFraction * 0.16,
                        scale: [1, 0.93, 1, 1],
                      }}
                      className="absolute inset-0 rounded-[4px] border-[0.5px] border-token-border-heavy bg-token-input-background shadow-[0_0_2px_0_rgba(0,0,0,0.10)] peer-focus-visible:ring-1 peer-focus-visible:ring-token-focus-border electron:dark:bg-token-dropdown-background"
                      initial={false}
                      transition={THUMB_GLOW_TRANSITION}
                    />
                  </motion.span>
                </motion.span>
              </Tooltip>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex max-h-[250px] flex-col overflow-y-auto">
          {reasoningOptions.map((option) => (
            <Dropdown.Item
              key={option.reasoningEffort}
              data-reasoning-selected={
                option.reasoningEffort === resolvedEffort ? "true" : undefined
              }
              disabled={reasoningEffortDisabled}
              RightIcon={
                option.reasoningEffort === resolvedEffort
                  ? CheckMdIcon
                  : undefined
              }
              onSelect={() => {
                onSelectReasoningEffort(option.reasoningEffort);
                onSelectComplete?.();
              }}
            >
              <ReasoningEffortLabel
                effort={
                  option.reasoningEffort as keyof typeof REASONING_EFFORT_LABELS
                }
              />
            </Dropdown.Item>
          ))}
        </div>
      )}
      <Dropdown.Separator />
    </>
  ) : null;

  const selectedDisplayName = selectedModelOption?.displayName;
  const triggerServiceTierIconKind =
    selectedServiceTierIconKind != null &&
    modelSupportsServiceTier(selectedModelOption, selectedServiceTier)
      ? selectedServiceTierIconKind
      : null;
  const modelTriggerLabel = (
    <ModelLabel
      model={model}
      displayName={selectedDisplayName}
      serviceTierIconKind={triggerServiceTierIconKind}
    />
  );

  const modelOptionsDisabledResolved = modelOptionsDisabled || models == null;
  const modelSection = (
    <IntelligenceSubmenuItem
      label={modelTriggerLabel}
      contentClassName="min-w-[200px]"
      disabled={modelOptionsDisabledResolved}
    >
      <Dropdown.Title>
        <FormattedMessage
          id="composer.intelligenceDropdown.model.title"
          defaultMessage="Model"
          description="Header label above model options in the intelligence dropdown"
        />
      </Dropdown.Title>
      <div className="vertical-scroll-fade-mask flex max-h-[250px] flex-col overflow-y-auto">
        {models?.map((modelOption) => (
          <ModelOptionRow
            key={modelOption.model}
            modelOption={modelOption}
            selectedModel={model}
            selectedReasoningEffort={reasoningEffort}
            selectedServiceTier={selectedServiceTier}
            selectedServiceTierIconKind={selectedServiceTierIconKind}
            onSelect={(nextModel, nextEffort) => {
              onSelectModel(nextModel, nextEffort);
              if (!showReasoningEffortSlider) {
                onSelectComplete?.();
              }
            }}
          />
        ))}
      </div>
    </IntelligenceSubmenuItem>
  );

  const speedSection =
    onSelectServiceTier != null && serviceTierOptions.length > 0 ? (
      <IntelligenceSubmenuItem
        label={
          <FormattedMessage
            id="settings.agent.speed.label"
            defaultMessage="Speed"
            description="Label for the Fast mode speed setting"
          />
        }
        contentClassName="w-[233px]"
        flyoutHeader={
          <Dropdown.Title>
            <FormattedMessage
              id="composer.intelligenceDropdown.speed.title"
              defaultMessage="Speed"
              description="Header label above speed options in the intelligence dropdown"
            />
          </Dropdown.Title>
        }
      >
        {serviceTierOptions.map((option) => {
          const isSelected = option.value === selectedServiceTier;
          return (
            <Dropdown.Item
              key={option.value ?? "standard"}
              disabled={serviceTierOptionsLoading}
              subTextAllowWrap={true}
              RightIcon={isSelected ? CheckMdIcon : undefined}
              SubText={
                <span className="text-token-description-foreground">
                  {renderMessageOrString(option.description)}
                </span>
              }
              onSelect={() => {
                onSelectServiceTier(option.value);
                onSelectComplete?.();
              }}
            >
              <span className="inline-flex max-w-full min-w-0 items-center gap-1 align-middle">
                <ServiceTierSpeedIcon
                  className="icon-2xs text-token-link-foreground shrink-0"
                  iconKind={option.iconKind}
                />
                <span className="min-w-0 truncate">
                  {renderMessageOrString(option.label)}
                </span>
              </span>
            </Dropdown.Item>
          );
        })}
      </IntelligenceSubmenuItem>
    ) : null;

  return (
    <DropdownMenu
      open={open}
      onOpenChange={handleOpenChange}
      onCloseAutoFocus={onCloseAutoFocus}
      onEscapeKeyDown={onEscapeKeyDown}
      align={align}
      contentWidth="menuNarrow"
      disabled={disabled}
      triggerButton={triggerButton}
    >
      {reasoningTitle}
      {reasoningControls}
      {modelSection}
      {speedSection}
    </DropdownMenu>
  );
}

interface IntelligenceSubmenuItemProps {
  label: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  contentClassName?: string;
  flyoutHeader?: ReactNode;
}

function IntelligenceSubmenuItem({
  label,
  children,
  disabled,
  contentClassName,
  flyoutHeader,
}: IntelligenceSubmenuItemProps): ReactElement {
  const submenu = (
    <Dropdown.SubmenuItem
      trigger={<Dropdown.Item disabled={disabled}>{label}</Dropdown.Item>}
    >
      {children}
    </Dropdown.SubmenuItem>
  );

  if (isFlyoutSubmenuDisabled()) {
    return submenu;
  }

  return (
    <>
      <PlatformGate chromeExtension extension>
        {submenu}
      </PlatformGate>
      <PlatformGate browser electron>
        <Dropdown.FlyoutSubmenuItem
          label={label}
          contentClassName={contentClassName}
          disabled={disabled}
        >
          {flyoutHeader}
          {children}
        </Dropdown.FlyoutSubmenuItem>
      </PlatformGate>
    </>
  );
}

interface ModelOptionRowProps {
  modelOption: ModelOption;
  selectedModel: string;
  selectedReasoningEffort: string;
  selectedServiceTier: string | null;
  selectedServiceTierIconKind: ServiceTierIconKind;
  onSelect: (model: string, reasoningEffort: string) => void;
}

function ModelOptionRow({
  modelOption,
  selectedModel,
  selectedReasoningEffort,
  selectedServiceTier,
  selectedServiceTierIconKind,
  onSelect,
}: ModelOptionRowProps): ReactElement {
  const { locale } = useIntl() as IntlWithLocale;
  const {
    model,
    displayName,
    description,
    supportedReasoningEfforts,
    defaultReasoningEffort,
  } = modelOption;

  const isSelected = model === selectedModel;
  const tooltipText = isVerboseModelDescriptionLocale(locale)
    ? description.replace(/\.$/u, "")
    : undefined;

  const serviceTierIconKind =
    selectedServiceTierIconKind != null &&
    modelSupportsServiceTier(modelOption, selectedServiceTier)
      ? selectedServiceTierIconKind
      : null;

  return (
    <Dropdown.Item
      data-model-selected={isSelected ? "true" : undefined}
      RightIcon={isSelected ? CheckMdIcon : undefined}
      tooltipText={tooltipText}
      onSelect={() =>
        onSelect(
          model,
          supportedReasoningEfforts.find(
            (option) => option.reasoningEffort === selectedReasoningEffort,
          )?.reasoningEffort ?? defaultReasoningEffort,
        )
      }
    >
      <ModelLabel
        model={model}
        displayName={displayName}
        serviceTierIconKind={serviceTierIconKind}
      />
    </Dropdown.Item>
  );
}
