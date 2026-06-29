// Restored from ref/webview/assets/mermaid-diagram-ipLA6Do3.js
// mermaid-diagram-ClGkKF0e chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { CollapseIcon } from "../icons/collapse-icon";
import { ExpandIcon } from "../icons/expand-icon";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";
import { Tooltip } from "../ui/tooltip-b";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import { MermaidCore } from "../vendor/mermaid-core";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
type MermaidDiagramRendererProps = {
  code: string;
  isCodeFenceOpen: boolean;
  isDark: boolean;
  isVisible: boolean;
  onError: (renderKey: string) => void;
  onRendered: (renderKey: string, height: number) => void;
  renderKey: string;
};
type MermaidRenderResult = {
  bindFunctions?: (container: Element) => void;
  svg: string;
};
type MermaidApi = {
  initialize: (config: Record<string, unknown>) => void;
  render: (
    id: string,
    text: string,
    container?: Element,
  ) => Promise<MermaidRenderResult>;
};
const mermaid = MermaidCore as MermaidApi;
const FRONT_MATTER_PATTERN = /%%\{[\s\S]*?\}%%/g;
const SECURITY_LEVEL_PATTERN = /securityLevel\s*:/i;
const CLICK_DIRECTIVE_PATTERN = /^\s*click\s+.*$/gim;
const DIAGRAM_KIND_ALIASES: Record<string, string> = {
  classdiagram: "class",
  entityrelationshipdiagram: "entityRelationship",
  erdiagram: "entityRelationship",
  gitgraph: "gitgraph",
  gitgraphbeta: "gitgraph",
  journey: "journey",
  kanban: "kanban",
  packet: "packet",
  pie: "pie",
  sequencediagram: "sequence",
  statediagram: "state",
  userjourney: "journey",
  xychart: "xychart",
};
const LIGHT_THEME_VARIABLES = {
  background: "rgb(255, 255, 255)",
  clusterBkg: "rgba(0, 0, 0, 0.04)",
  edgeLabelBackground: "rgb(255, 255, 255)",
  lineColor: "rgba(17, 24, 28, 0.7)",
  mainBkg: "rgb(255, 255, 255)",
  noteBkgColor: "rgba(0, 0, 0, 0.04)",
  noteBorderColor: "rgba(17, 24, 28, 0.14)",
  noteTextColor: "rgb(17, 24, 28)",
  primaryBorderColor: "rgba(17, 24, 28, 0.12)",
  primaryColor: "rgb(255, 255, 255)",
  primaryTextColor: "rgb(17, 24, 28)",
  secondaryColor: "rgba(0, 0, 0, 0.04)",
  secondaryTextColor: "rgba(17, 24, 28, 0.7)",
  tertiaryColor: "rgba(0, 0, 0, 0.04)",
  tertiaryTextColor: "rgba(17, 24, 28, 0.55)",
  textColor: "rgb(17, 24, 28)",
};
const DARK_THEME_VARIABLES = {
  background: "rgb(10, 10, 10)",
  clusterBkg: "rgba(255, 255, 255, 0.06)",
  edgeLabelBackground: "rgb(10, 10, 10)",
  lineColor: "rgba(255, 255, 255, 0.72)",
  mainBkg: "rgba(255, 255, 255, 0.08)",
  noteBkgColor: "rgba(255, 255, 255, 0.08)",
  noteBorderColor: "rgba(255, 255, 255, 0.18)",
  noteTextColor: "rgb(255, 255, 255)",
  primaryBorderColor: "rgba(255, 255, 255, 0.16)",
  primaryColor: "rgba(255, 255, 255, 0.08)",
  primaryTextColor: "rgb(255, 255, 255)",
  secondaryColor: "rgba(255, 255, 255, 0.04)",
  secondaryTextColor: "rgba(255, 255, 255, 0.72)",
  tertiaryColor: "rgba(255, 255, 255, 0.06)",
  tertiaryTextColor: "rgba(255, 255, 255, 0.6)",
  textColor: "rgb(255, 255, 255)",
};
export function MermaidDiagramRenderer({
  code,
  isCodeFenceOpen,
  isDark,
  isVisible,
  onError,
  onRendered,
  renderKey,
}: MermaidDiagramRendererProps) {
  const intl = useIntl();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const renderCountRef = React.useRef(0);
  const [showActualSize, setShowActualSize] = React.useState(false);
  const reactId = React.useId();
  const mermaidId = React.useMemo(
    () => `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`,
    [reactId],
  );
  const sanitizedCode = React.useMemo(
    () => sanitizeMermaidSource(code),
    [code],
  );
  const diagramKind = React.useMemo(
    () => (sanitizedCode == null ? null : detectDiagramKind(sanitizedCode)),
    [sanitizedCode],
  );
  const copyText = React.useMemo(
    () => ["```mermaid", code, "```"].join("\n"),
    [code],
  );
  const toggleSizeLabel = showActualSize
    ? intl.formatMessage({
        id: "mermaidDiagram.fitToWidth",
        defaultMessage: "Fit diagram to width",
        description:
          "Accessible label for fitting a Mermaid diagram to the available width",
      })
    : intl.formatMessage({
        id: "mermaidDiagram.viewActualSize",
        defaultMessage: "View actual size",
        description:
          "Accessible label for showing a Mermaid diagram at its rendered size",
      });
  React.useEffect(() => {
    const svg = containerRef.current?.querySelector("svg");
    if (svg != null) applySvgSizeMode(svg, showActualSize);
  }, [showActualSize]);
  React.useEffect(() => {
    if (typeof window === "undefined" || isCodeFenceOpen) return;
    const container = containerRef.current;
    if (container == null) return;
    if (sanitizedCode == null || sanitizedCode.length === 0) {
      clearMermaidContainer(container);
      onError(renderKey);
      return;
    }
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    const updateRenderedHeight = () => {
      onRendered(renderKey, container.offsetHeight || 240);
    };
    void (async () => {
      try {
        initializeMermaid(container, isDark);
        renderCountRef.current += 1;
        const result = await mermaid.render(
          `${mermaidId}-${renderCountRef.current}`,
          sanitizedCode,
        );
        if (cancelled) return;
        const template = container.ownerDocument.createElement("template");
        template.innerHTML = result.svg;
        const svg = template.content.querySelector("svg");
        if (svg == null) throw Error("Mermaid returned no SVG");
        if (isDark) adjustDarkSvgFills(svg, container);
        applySvgSizeMode(svg, showActualSize);
        container.replaceChildren(svg);
        container.setAttribute("data-mermaid-theme", "base");
        if (diagramKind == null) {
          container.removeAttribute("data-mermaid-diagram");
        } else {
          container.setAttribute("data-mermaid-diagram", diagramKind);
        }
        result.bindFunctions?.(container);
        updateRenderedHeight();
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(updateRenderedHeight);
          resizeObserver.observe(container);
        }
      } catch {
        if (cancelled) return;
        clearMermaidContainer(container);
        onError(renderKey);
      }
    })();
    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
    };
  }, [
    diagramKind,
    isCodeFenceOpen,
    isDark,
    mermaidId,
    onError,
    onRendered,
    renderKey,
    sanitizedCode,
    showActualSize,
  ]);
  const handleCopy = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      void copyToClipboard(copyText, event);
    },
    [copyText],
  );
  return (
    <div
      className="relative"
      data-markdown-copy="code-block"
      data-markdown-copy-text={copyText}
    >
      {isVisible ? (
        <div
          className="absolute top-2 right-2 z-10 flex gap-1"
          data-markdown-copy="exclude"
        >
          <Tooltip tooltipContent={toggleSizeLabel} delayOpen>
            <Button
              aria-label={toggleSizeLabel}
              aria-pressed={showActualSize}
              color={showActualSize ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setShowActualSize((value) => !value)}
            >
              {showActualSize ? (
                <CollapseIcon className="icon-2xs" />
              ) : (
                <ExpandIcon className="icon-2xs" />
              )}
            </Button>
          </Tooltip>
          <CopyButton
            iconClassName="icon-2xs"
            iconOnly
            buttonText={intl.formatMessage({
              id: "mermaidDiagram.copySource",
              defaultMessage: "Copy mermaid",
              description:
                "Tooltip label for the copy button on rendered mermaid diagrams",
            })}
            onCopy={handleCopy}
          />
        </div>
      ) : null}
      <div
        ref={containerRef}
        className={clsx(
          "relative px-4 py-3 [&>svg]:h-auto [&>svg]:text-left",
          !isVisible && "invisible",
          showActualSize
            ? "max-h-[var(--markdown-wide-block-max-height)] overflow-auto"
            : "overflow-x-auto",
        )}
        aria-hidden={!isVisible || undefined}
        aria-label={
          isVisible
            ? intl.formatMessage({
                id: "mermaidDiagram.ariaLabel",
                defaultMessage: "Mermaid diagram",
                description: "ARIA label for rendered mermaid diagrams",
              })
            : undefined
        }
        role={isVisible ? "img" : undefined}
      />
      {isVisible ? (
        <>
          <span className="sr-only">
            <FormattedMessage
              id="mermaidDiagram.originalCode"
              defaultMessage="Mermaid source code"
              description="Screen reader label for the hidden mermaid source code."
            />
          </span>
          <pre className="sr-only whitespace-pre-wrap">{code}</pre>
        </>
      ) : null}
    </div>
  );
}
function sanitizeMermaidSource(source: string): string | null {
  let containsSecurityOverride = false;
  const withoutFrontMatter = source.replace(FRONT_MATTER_PATTERN, (block) => {
    if (SECURITY_LEVEL_PATTERN.test(block)) containsSecurityOverride = true;
    return "";
  });
  if (containsSecurityOverride) return null;
  return withoutFrontMatter
    .replace(CLICK_DIRECTIVE_PATTERN, "")
    .replaceAll("\\n", "<br/>");
}
function detectDiagramKind(source: string): string | null {
  const firstToken = source
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !line.startsWith("%%"))[0]
    ?.split(/\s+/)[0];
  return firstToken == null
    ? null
    : (DIAGRAM_KIND_ALIASES[firstToken.replace(/[-_]/g, "").toLowerCase()] ??
        null);
}
function initializeMermaid(container: HTMLElement, isDark: boolean) {
  mermaid.initialize({
    darkMode: isDark,
    deterministicIDSeed: "codex-mermaid",
    deterministicIds: true,
    flowchart: {
      htmlLabels: false,
    },
    fontFamily: resolveFontFamily(container),
    htmlLabels: false,
    securityLevel: "strict",
    startOnLoad: false,
    suppressErrorRendering: true,
    theme: "base",
    themeVariables: createThemeVariables(container, isDark),
  });
}
function createThemeVariables(container: HTMLElement, isDark: boolean) {
  const baseTheme = isDark ? DARK_THEME_VARIABLES : LIGHT_THEME_VARIABLES;
  const primaryColor = readCssColor(
    container,
    "backgroundColor",
    "var(--color-background-elevated-primary)",
    baseTheme.primaryColor,
  );
  const secondaryColor = readCssColor(
    container,
    "backgroundColor",
    "var(--color-background-elevated-secondary)",
    baseTheme.secondaryColor,
  );
  const tertiaryColor = readCssColor(
    container,
    "backgroundColor",
    "var(--color-token-text-code-block-background)",
    baseTheme.tertiaryColor,
  );
  const background = readCssColor(
    container,
    "backgroundColor",
    "var(--color-token-main-surface-primary)",
    baseTheme.background,
  );
  const edgeLabelBackground = readCssColor(
    container,
    "backgroundColor",
    "var(--color-background-editor-opaque)",
    baseTheme.edgeLabelBackground,
  );
  const textColor = readCssColor(
    container,
    "color",
    "var(--color-token-foreground)",
    baseTheme.textColor,
  );
  const secondaryTextColor = readCssColor(
    container,
    "color",
    "var(--color-token-description-foreground)",
    baseTheme.secondaryTextColor,
  );
  const tertiaryTextColor = readCssColor(
    container,
    "color",
    "var(--color-text-foreground-tertiary)",
    baseTheme.tertiaryTextColor,
  );
  const primaryBorderColor = readCssBorderColor(
    container,
    "var(--color-token-input-border)",
    baseTheme.primaryBorderColor,
  );
  const lineColor = readCssColor(
    container,
    "color",
    "var(--color-token-description-foreground)",
    baseTheme.lineColor,
  );
  const themeVariables = {
    actorBorder: lineColor,
    actorBkg: primaryColor,
    actorLineColor: lineColor,
    actorTextColor: textColor,
    activationBkgColor: secondaryColor,
    activationBorderColor: lineColor,
    background,
    clusterBkg: secondaryColor,
    clusterBorder: primaryBorderColor,
    defaultLinkColor: lineColor,
    edgeLabelBackground,
    labelBackgroundColor: edgeLabelBackground,
    labelBoxBkgColor: primaryColor,
    labelBoxBorderColor: primaryBorderColor,
    labelTextColor: textColor,
    lineColor,
    loopTextColor: textColor,
    mainBkg: primaryColor,
    nodeBorder: primaryBorderColor,
    noteBkgColor: secondaryColor,
    noteBorderColor: primaryBorderColor,
    noteTextColor: textColor,
    primaryBorderColor,
    primaryColor,
    primaryTextColor: textColor,
    relationColor: lineColor,
    relationLabelBackground: edgeLabelBackground,
    relationLabelColor: textColor,
    secondaryBorderColor: primaryBorderColor,
    secondaryColor,
    secondaryTextColor,
    sequenceNumberColor: textColor,
    signalColor: lineColor,
    signalTextColor: textColor,
    tertiaryBorderColor: primaryBorderColor,
    tertiaryColor,
    tertiaryTextColor,
    textColor,
    titleColor: textColor,
  };
  if (!isDark) return themeVariables;
  const criticalTaskColor = readCssColor(
    container,
    "backgroundColor",
    "var(--color-background-status-error)",
    "#3b1b1d",
  );
  const criticalTaskBorderColor = readCssBorderColor(
    container,
    "var(--color-border-error)",
    "#b95b64",
  );
  return {
    ...themeVariables,
    activeTaskBkgColor: tertiaryColor,
    activeTaskBorderColor: primaryBorderColor,
    altSectionBkgColor: background,
    attributeBackgroundColorEven: secondaryColor,
    attributeBackgroundColorOdd: primaryColor,
    branchLabelColor: textColor,
    critBkgColor: criticalTaskColor,
    critBorderColor: criticalTaskBorderColor,
    darkMode: true,
    doneTaskBkgColor: secondaryColor,
    doneTaskBorderColor: primaryBorderColor,
    excludeBkgColor: tertiaryColor,
    gridColor: primaryBorderColor,
    radar: {
      axisColor: lineColor,
      graticuleColor: primaryBorderColor,
    },
    taskTextClickableColor: textColor,
    taskTextColor: textColor,
    taskTextDarkColor: textColor,
    taskTextLightColor: textColor,
    taskTextOutsideColor: textColor,
    todayLineColor: criticalTaskBorderColor,
    vertLineColor: primaryBorderColor,
  };
}
function resolveFontFamily(container: HTMLElement): string {
  const probe = container.ownerDocument.createElement("div");
  probe.style.fontFamily = "var(--font-sans)";
  probe.setAttribute("aria-hidden", "true");
  appendHiddenProbe(container, probe);
  const fontFamily =
    container.ownerDocument.defaultView
      ?.getComputedStyle(probe)
      .fontFamily.trim() ?? "";
  probe.remove();
  return fontFamily.length > 0
    ? fontFamily
    : '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
}
function readCssBorderColor(
  container: HTMLElement,
  cssColor: string,
  fallback: string,
): string {
  const probe = container.ownerDocument.createElement("div");
  probe.style.borderTopStyle = "solid";
  probe.style.borderTopWidth = "1px";
  probe.style.borderTopColor = cssColor;
  return readProbeColor(container, probe, "borderTopColor", fallback);
}
function readCssColor(
  container: HTMLElement,
  property: "backgroundColor" | "color",
  cssColor: string,
  fallback: string,
): string {
  const probe = container.ownerDocument.createElement("div");
  probe.style[property] = cssColor;
  return readProbeColor(container, probe, property, fallback);
}
function readProbeColor(
  container: HTMLElement,
  probe: HTMLElement,
  property: "backgroundColor" | "borderTopColor" | "color",
  fallback: string,
): string {
  appendHiddenProbe(container, probe);
  const value =
    container.ownerDocument.defaultView
      ?.getComputedStyle(probe)
      [property].trim() ?? "";
  probe.remove();
  return value.length > 0 ? value : fallback;
}
function appendHiddenProbe(container: HTMLElement, probe: HTMLElement) {
  probe.style.opacity = "0";
  probe.style.pointerEvents = "none";
  probe.style.position = "absolute";
  probe.style.inset = "0";
  probe.style.width = "0";
  probe.style.height = "0";
  container.appendChild(probe);
}
function adjustDarkSvgFills(svg: SVGSVGElement, container: HTMLElement) {
  const labelContainers = svg.querySelectorAll<SVGElement>(
    '.node > .label-container[style*="fill"], .node > .label-container.outer-path > path[style*="fill"]',
  );
  if (labelContainers.length === 0) return;
  const css = container.ownerDocument.defaultView?.CSS;
  if (css == null) return;
  const surfaceColor = readCssColor(
    container,
    "backgroundColor",
    "var(--color-token-main-surface-primary)",
    DARK_THEME_VARIABLES.background,
  );
  const textColor = readCssColor(
    container,
    "color",
    "var(--color-token-foreground)",
    DARK_THEME_VARIABLES.textColor,
  );
  for (const labelContainer of labelContainers) {
    const fillColor = labelContainer.style.getPropertyValue("fill");
    if (!css.supports("color", fillColor)) continue;
    if (fillColor.trim().toLowerCase() !== "transparent") {
      labelContainer.style.setProperty(
        "fill",
        `color-mix(in oklab, ${fillColor} 22%, ${surfaceColor})`,
        "important",
      );
    }
    labelContainer
      .closest(".node")
      ?.querySelectorAll<SVGElement>("text, tspan")
      .forEach((textNode) => {
        textNode.style.setProperty("fill", textColor, "important");
      });
  }
}
function applySvgSizeMode(svg: SVGSVGElement, showActualSize: boolean) {
  svg.style.height = "auto";
  if (showActualSize) {
    svg.style.maxWidth = "none";
    svg.style.maxHeight = "none";
    svg.style.width =
      svg.viewBox.baseVal.width > 0 ? `${svg.viewBox.baseVal.width}px` : "auto";
    return;
  }
  svg.style.maxWidth = "100%";
  svg.style.maxHeight = "var(--markdown-wide-block-max-height)";
  svg.style.width =
    svg.viewBox.baseVal.width > 0 ? `${svg.viewBox.baseVal.width}px` : "100%";
}
function clearMermaidContainer(container: HTMLElement) {
  container.replaceChildren();
  container.removeAttribute("data-mermaid-diagram");
  container.removeAttribute("data-mermaid-theme");
}
