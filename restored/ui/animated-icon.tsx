// Restored from ref/webview/assets/animated-icon-56GzdVTe.js
// Animated icon component backed by lazy lottie data, SVG fallbacks, and the dotLottie runtime.
import React, {
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  type SVGProps,
} from "react";
import clsx from "clsx";
import { ClockIcon } from "../icons/clock-icon";
import { CodexIcon } from "../icons/codex-icon";
import { GlobeIcon } from "../icons/globe-icon";
import { HomepageLogoIcon } from "../icons/homepage-logo-icon";
import { TasksIcon } from "../icons/tasks-icon";
import { TerminalIcon } from "../icons/terminal-icon";
import { DropdownSearchIcon } from "./dropdown";
import { getFileIcon } from "../utils/get-file-icon";
import { useReducedMotion } from "../utils/use-reduced-motion";
import {
  DotLottieReact,
  DotLottieWorkerReact,
  setWasmUrl,
} from "../vendor/dotlottie-react";

setWasmUrl("https://cdn.openai.com/common/wasm/dotlottie-player-017-13.wasm");

type SvgIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type AnimatedIconName =
  | "analyze-image"
  | "automation"
  | "browsing"
  | "code-searching"
  | "codex-happy-small"
  | "codex-looking-around"
  | "edit-files"
  | "hello"
  | "internal-knowledge"
  | "list-files"
  | "loader"
  | "local-context"
  | "run-command"
  | "searching"
  | "to-do"
  | "web-search";
type AnimatedIconSize = "fill" | "lg" | "md" | "sm" | "xs";
type AnimatedIconRenderer = "main" | "worker";
type LottieColor = number[];
type LottieNode = {
  assets?: LottieNode[];
  c?: {
    k?: LottieColor;
  };
  h?: number;
  it?: LottieNode[];
  layers?: LottieNode[];
  shapes?: LottieNode[];
  ty?: number | string;
  w?: number;
};
type LottieData = LottieNode & Record<string, unknown>;
type RecoloredLottieData = {
  data: LottieData;
  size: {
    height: number;
    width: number;
  };
};
type DotLottieInstance = {
  setCanvas?: (canvas: OffscreenCanvas) => void;
};
type DotLottieRefCallback = (dotLottie: DotLottieInstance | null) => void;
type AnimatedIconProps = {
  animated?: boolean;
  animation?: AnimatedIconName;
  animationData?: LottieData;
  className?: string;
  color?: string;
  fallbackSvg?: SvgIconComponent;
  loop?: boolean;
  mainDotLottieRefCallback?: DotLottieRefCallback;
  matchTextColor?: boolean;
  renderer?: AnimatedIconRenderer;
  segment?: unknown;
  showFallbackWhileLoading?: boolean;
  size?: AnimatedIconSize | number;
  tokenColor?: string;
};
type AnimationDataLoader = () => Promise<LottieData>;
type ReactActivityProps = {
  children: ReactNode;
  mode: "hidden" | "visible";
};

const animationLoadersByName: Record<AnimatedIconName, AnimationDataLoader> = {
  "analyze-image": () =>
    import("../animations/analyze-image-animation").then(
      ({ analyzeImageAnimation }) => analyzeImageAnimation as LottieData,
    ),
  automation: () =>
    import("../animations/automation").then(
      ({ automation }) => automation as LottieData,
    ),
  browsing: () =>
    import("../animations/browsing-animation").then(
      ({ browsingAnimation }) => browsingAnimation as LottieData,
    ),
  "code-searching": () =>
    import("../animations/code-searching-icon").then(
      ({ codeSearchingIcon }) => codeSearchingIcon as LottieData,
    ),
  "codex-happy-small": () =>
    import("../animations/codex-happy-small").then(
      ({ codexHappySmall }) => codexHappySmall as LottieData,
    ),
  "codex-looking-around": () =>
    import("../animations/codex-looking-around").then(
      ({ codexLookingAround }) => codexLookingAround as LottieData,
    ),
  "edit-files": () =>
    import("../utils/edit-files-animation").then(
      ({ editFilesAnimation }) => editFilesAnimation as LottieData,
    ),
  hello: () =>
    import("../animations/hello").then(({ hello }) => hello as LottieData),
  "internal-knowledge": () =>
    import("../animations/internal-knowledge-icon").then(
      ({ internalKnowledgeIcon }) => internalKnowledgeIcon as LottieData,
    ),
  "list-files": () =>
    import("../animations/list-files-animation").then(
      ({ listFilesAnimation }) => listFilesAnimation as LottieData,
    ),
  loader: () =>
    import("../animations/loader").then(({ loader }) => loader as LottieData),
  "local-context": () =>
    import("../animations/local-context-animation").then(
      ({ localContextAnimation }) => localContextAnimation as LottieData,
    ),
  "run-command": () =>
    import("../utils/run-command-animation").then(
      ({ runCommandAnimation }) => runCommandAnimation as LottieData,
    ),
  searching: () =>
    import("../animations/searching-animation").then(
      ({ searchingAnimation }) => searchingAnimation as LottieData,
    ),
  "to-do": () =>
    import("../animations/to-do-animation").then(
      ({ toDoAnimation }) => toDoAnimation as LottieData,
    ),
  "web-search": () =>
    import("../animations/web-search-icon").then(
      ({ webSearchIcon }) => webSearchIcon as LottieData,
    ),
};

const ImageFallbackIcon = getFileIcon("image.png") as SvgIconComponent;
const fallbackByAnimation: Record<AnimatedIconName, SvgIconComponent> = {
  "analyze-image": ImageFallbackIcon,
  automation: ClockIcon,
  browsing: GlobeIcon,
  "code-searching": TerminalIcon,
  "codex-happy-small": CodexIcon,
  "codex-looking-around": CodexIcon,
  "edit-files": TerminalIcon,
  hello: HomepageLogoIcon,
  "internal-knowledge": InternalKnowledgeIcon,
  "list-files": TerminalIcon,
  loader: CodexIcon,
  "local-context": DropdownSearchIcon,
  "run-command": TerminalIcon,
  searching: DropdownSearchIcon,
  "to-do": TasksIcon,
  "web-search": GlobeIcon,
};
const fallbackSizeClasses: Record<AnimatedIconSize, string> = {
  fill: "h-full w-full",
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};
const animatedSizeClasses: Record<AnimatedIconSize, string> = {
  fill: "h-full w-full",
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};
const defaultRenderConfig = {
  autoResize: true,
  freezeOnOffscreen: true,
  quality: 20,
} as const;
const resolvedColorCache = new Map<string, LottieColor | null>();
const colorSubscribers = new Set<() => void>();
let rootClassObserver: MutationObserver | null = null;
let colorCanvasContext: CanvasRenderingContext2D | null | undefined;

export function initAnimatedIconModule() {
  return undefined;
}

export function AnimatedIcon({
  animation,
  animationData,
  fallbackSvg,
  animated = true,
  size = "md",
  color,
  tokenColor,
  matchTextColor = true,
  loop = true,
  mainDotLottieRefCallback,
  renderer = "worker",
  segment,
  showFallbackWhileLoading = true,
  className,
}: AnimatedIconProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const offscreenCanvasRef = React.useRef<OffscreenCanvas | null>(null);
  const reduceMotion = useReducedMotion();
  const { animationDataPromise, SvgFallback } = React.useMemo(
    () =>
      resolveAnimatedIconAssets({
        animation,
        animationData,
        fallbackSvg,
      }),
    [animation, animationData, fallbackSvg],
  );
  const [loadedAnimationData, setLoadedAnimationData] =
    React.useState<LottieData | null>(null);
  const [recoloredAnimation, setRecoloredAnimation] =
    React.useState<RecoloredLottieData | null>(null);
  const resolvedColor = useResolvedLottieColor(containerRef, {
    color,
    matchTextColor,
    tokenColor,
  });
  React.useEffect(() => {
    if (!animationDataPromise) {
      setLoadedAnimationData(null);
      return;
    }
    const abortController = new AbortController();
    void animationDataPromise.then((nextAnimationData) => {
      if (!abortController.signal.aborted) {
        React.startTransition(() => {
          setLoadedAnimationData(nextAnimationData);
        });
      }
    });
    return () => {
      abortController.abort();
    };
  }, [animationDataPromise]);
  React.useEffect(() => {
    if (!loadedAnimationData) {
      setRecoloredAnimation(null);
      return;
    }
    React.startTransition(() => {
      setRecoloredAnimation(
        applyLottieColor(loadedAnimationData, resolvedColor),
      );
    });
  }, [loadedAnimationData, resolvedColor]);
  const fallbackClassName =
    typeof size === "number" ? "" : fallbackSizeClasses[size];
  const animatedClassName =
    typeof size === "number" ? "" : animatedSizeClasses[size];
  const numericSizeStyle =
    typeof size === "number"
      ? {
          height: size,
          width: size,
        }
      : undefined;
  const containerStyle = numericSizeStyle ?? {};
  const containerClassName = clsx(
    animatedClassName,
    className,
    tokenColor,
    "flex items-center justify-center",
  );
  const shouldShowFallback =
    reduceMotion ||
    !animated ||
    (showFallbackWhileLoading && !recoloredAnimation);
  let fallbackContent: ReactNode = null;
  if (!animated || shouldShowFallback) {
    if (!SvgFallback) {
      throw Error(
        "Either provide 'fallbackSvg' prop or use an 'animation' type when animated=false",
      );
    }
    fallbackContent = (
      <div
        ref={containerRef}
        className={containerClassName}
        style={containerStyle}
      >
        <SvgFallback
          className="h-full w-full"
          style={getFallbackColorStyle(color, numericSizeStyle)}
        />
      </div>
    );
    if (!animated) return fallbackContent;
  }
  if (!reduceMotion && !recoloredAnimation && !showFallbackWhileLoading) {
    return (
      <div
        ref={containerRef}
        className={containerClassName}
        style={containerStyle}
      />
    );
  }
  const dotLottieRefCallback = React.useCallback(
    (dotLottie: DotLottieInstance | null) => {
      if (
        !dotLottie ||
        !recoloredAnimation ||
        typeof OffscreenCanvas === "undefined"
      ) {
        return;
      }
      let offscreenCanvas = offscreenCanvasRef.current;
      if (!offscreenCanvas) {
        offscreenCanvas = new OffscreenCanvas(
          recoloredAnimation.size.width,
          recoloredAnimation.size.height,
        );
        offscreenCanvasRef.current = offscreenCanvas;
        const canvasContext = offscreenCanvas.getContext("2d", {
          alpha: true,
          desynchronized: true,
          willReadFrequently: false,
        });
        if (canvasContext) {
          canvasContext.imageSmoothingEnabled = true;
          canvasContext.imageSmoothingQuality = "high";
          canvasContext.globalCompositeOperation = "source-over";
        }
      }
      dotLottie.setCanvas?.(offscreenCanvas);
    },
    [recoloredAnimation],
  );
  const fallbackActivityMode = shouldShowFallback ? "visible" : "hidden";
  const animationActivityMode = shouldShowFallback ? "hidden" : "visible";
  const animationDataForRenderer = recoloredAnimation?.data ?? undefined;
  const shouldAutoplay = !reduceMotion;
  const animationContent = (
    <div
      className={clsx(fallbackClassName, "flex items-center justify-center")}
      style={numericSizeStyle}
    >
      <React.Suspense fallback={fallbackContent}>
        <AnimatedLottieRenderer
          data={animationDataForRenderer}
          dotLottieRefCallback={dotLottieRefCallback}
          mainDotLottieRefCallback={mainDotLottieRefCallback}
          loop={loop}
          renderer={renderer}
          segment={segment}
          renderConfig={defaultRenderConfig}
          autoplay={shouldAutoplay}
          className="pointer-events-none h-full w-full contain-[paint_style_layout_inline-size]"
        />
      </React.Suspense>
    </div>
  );
  return (
    <>
      <VisibilityActivity mode={fallbackActivityMode}>
        {fallbackContent}
      </VisibilityActivity>
      <VisibilityActivity mode={animationActivityMode}>
        <div
          ref={containerRef}
          className={containerClassName}
          style={containerStyle}
        >
          {animationContent}
        </div>
      </VisibilityActivity>
    </>
  );
}

function resolveAnimatedIconAssets({
  animation,
  animationData,
  fallbackSvg,
}: {
  animation?: AnimatedIconName;
  animationData?: LottieData;
  fallbackSvg?: SvgIconComponent;
}) {
  const assets: {
    animationDataPromise: Promise<LottieData> | null;
    SvgFallback: SvgIconComponent | null;
  } = {
    animationDataPromise: animationData ? Promise.resolve(animationData) : null,
    SvgFallback: fallbackSvg ?? null,
  };
  if (animation) {
    assets.animationDataPromise = animationLoadersByName[animation]();
    assets.SvgFallback = fallbackByAnimation[animation];
  }
  return assets;
}

function AnimatedLottieRenderer({
  dotLottieRefCallback,
  mainDotLottieRefCallback,
  renderer,
  ...dotLottieProps
}: {
  dotLottieRefCallback: DotLottieRefCallback;
  mainDotLottieRefCallback?: DotLottieRefCallback;
  renderer: AnimatedIconRenderer;
  [prop: string]: unknown;
}) {
  const DotLottieComponent =
    renderer === "main" ? DotLottieReact : DotLottieWorkerReact;
  return (
    <DotLottieComponent
      {...dotLottieProps}
      dotLottieRefCallback={
        renderer === "main" ? mainDotLottieRefCallback : dotLottieRefCallback
      }
    />
  );
}

function VisibilityActivity({ children, mode }: ReactActivityProps) {
  const Activity = (
    React as typeof React & {
      Activity?: ComponentType<ReactActivityProps>;
    }
  ).Activity;
  if (Activity) return <Activity mode={mode}>{children}</Activity>;
  return mode === "visible" ? <>{children}</> : null;
}

function useResolvedLottieColor(
  containerRef: React.RefObject<HTMLElement | null>,
  {
    color,
    tokenColor,
    matchTextColor,
  }: {
    color?: string;
    matchTextColor: boolean;
    tokenColor?: string;
  },
) {
  const [resolvedColor, setResolvedColor] = React.useState<LottieColor | null>(
    null,
  );
  React.useEffect(() => {
    const setColor = (nextColor: LottieColor | null) => {
      setResolvedColor((currentColor) =>
        currentColor?.join(",") === nextColor?.join(",")
          ? currentColor
          : nextColor,
      );
    };
    if (color) {
      return subscribeToRootColorChanges(() => {
        setColor(resolveCssColor("color", color));
      });
    }
    if (tokenColor) {
      return subscribeToRootColorChanges(() => {
        setColor(resolveCssColor("tokenColor", tokenColor));
      });
    }
    if (!matchTextColor || !containerRef.current) {
      setColor(null);
      return;
    }
    const updateFromElement = () => {
      setColor(
        containerRef.current ? readComputedColor(containerRef.current) : null,
      );
    };
    const unsubscribe = subscribeToRootColorChanges(updateFromElement);
    const elementObserver = new MutationObserver(updateFromElement);
    elementObserver.observe(containerRef.current, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
    return () => {
      unsubscribe();
      elementObserver.disconnect();
    };
  }, [color, containerRef, matchTextColor, tokenColor]);
  return resolvedColor;
}

function readComputedColor(element: HTMLElement): LottieColor | null {
  const computedColor = getComputedStyle(element).color;
  if (!computedColor) return null;
  if (colorCanvasContext === undefined) {
    const colorCanvas = document.createElement("canvas");
    colorCanvas.width = 1;
    colorCanvas.height = 1;
    colorCanvasContext = colorCanvas.getContext("2d", {
      willReadFrequently: true,
    });
  }
  if (!colorCanvasContext) return null;
  colorCanvasContext.clearRect(0, 0, 1, 1);
  colorCanvasContext.fillStyle = computedColor;
  colorCanvasContext.fillRect(0, 0, 1, 1);
  return Array.from(
    colorCanvasContext.getImageData(0, 0, 1, 1).data,
    (value) => value / 255,
  );
}

function resolveCssColor(mode: "color" | "tokenColor", value: string) {
  const cacheKey = `${mode}:${value}`;
  const cachedValue = resolvedColorCache.get(cacheKey);
  if (cachedValue !== undefined) return cachedValue;
  const probe = document.createElement("div");
  if (mode === "color") probe.style.color = value;
  if (mode === "tokenColor") probe.className = value;
  document.body.appendChild(probe);
  const resolvedValue = readComputedColor(probe);
  probe.remove();
  resolvedColorCache.set(cacheKey, resolvedValue);
  return resolvedValue;
}

function subscribeToRootColorChanges(callback: () => void) {
  colorSubscribers.add(callback);
  if (!rootClassObserver) {
    rootClassObserver = new MutationObserver(() => {
      resolvedColorCache.clear();
      colorSubscribers.forEach((subscriber) => subscriber());
    });
    rootClassObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    });
  }
  callback();
  return () => {
    colorSubscribers.delete(callback);
    if (colorSubscribers.size === 0) {
      rootClassObserver?.disconnect();
      rootClassObserver = null;
      resolvedColorCache.clear();
    }
  };
}

function applyLottieColor(
  animationData: LottieData,
  color: LottieColor | null,
): RecoloredLottieData {
  if (!color) {
    return {
      size: {
        height: 100,
        width: 100,
      },
      data: animationData,
    };
  }
  const clonedData = structuredClone(animationData) as LottieData;
  const size =
    clonedData.w && clonedData.h
      ? {
          width: clonedData.w,
          height: clonedData.h,
        }
      : {
          width: 100,
          height: 100,
        };
  function recolorShape(node: LottieNode) {
    if ((node.ty === "fl" || node.ty === "st") && node.c?.k) {
      node.c.k = color;
    }
    node.it?.forEach(recolorShape);
  }
  function visitNode(node: LottieNode) {
    if (node.ty === 4) node.shapes?.forEach(recolorShape);
    node.layers?.forEach(visitNode);
  }
  visitNode(clonedData);
  clonedData.assets?.forEach(visitNode);
  return {
    size,
    data: clonedData,
  };
}

function getFallbackColorStyle(
  color: string | undefined,
  numericSizeStyle: CSSProperties | undefined,
) {
  const fallbackStyle: CSSProperties = {
    ...numericSizeStyle,
  };
  if (color) {
    fallbackStyle.filter =
      color === "white" ? "brightness(0) invert(1)" : `hue-rotate(${color})`;
  }
  return Object.keys(fallbackStyle).length > 0 ? fallbackStyle : undefined;
}

function InternalKnowledgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.74709 9.4286C4.09594 9.54326 4.47122 9.35358 4.58596 9.00478C5.08292 7.49281 6.19702 6.25947 7.62893 5.60243C8.06385 6.47457 8.96218 7.07502 10.003 7.07509C11.4688 7.07509 12.6572 5.88666 12.6572 4.42079C12.6572 2.9549 11.4688 1.76649 10.003 1.76649C8.58666 1.76659 7.43205 2.87614 7.35549 4.27333C5.45427 5.04691 3.9686 6.62635 3.32326 8.58974C3.20868 8.9386 3.39823 9.31394 3.74709 9.4286ZM11.3272 4.42079C11.3272 3.68944 10.7343 3.09657 10.003 3.09657C9.27168 3.09667 8.67873 3.6895 8.67873 4.42079C8.67875 5.15207 9.2717 5.74491 10.003 5.74501C10.7343 5.74501 11.3272 5.15213 11.3272 4.42079Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4619 7.23427C15.2394 8.2087 15.7041 9.4424 15.7041 10.786C15.7041 10.9669 15.6951 11.1459 15.6787 11.3222C14.7046 11.2611 13.734 11.7399 13.2129 12.6425C12.4802 13.9118 12.9144 15.5346 14.1836 16.2675C15.453 17.0003 17.0767 16.5651 17.8096 15.2958C18.5164 14.0711 18.1344 12.5197 16.9668 11.7538C17.0104 11.4372 17.0332 11.114 17.0332 10.786C17.0332 9.13002 16.4602 7.6065 15.502 6.40517L15.3057 6.16982L15.2071 6.07704C14.9612 5.8895 14.6094 5.89431 14.3672 6.10536C14.1251 6.31651 14.0723 6.66436 14.2246 6.93349L14.3028 7.04286L14.4619 7.23427ZM16.1729 12.8222C15.5397 12.4566 14.7299 12.6743 14.3643 13.3075C13.999 13.9406 14.2158 14.7495 14.8487 15.1151C15.4819 15.4807 16.2917 15.264 16.6572 14.6308C17.0227 13.9976 16.806 13.1877 16.1729 12.8222Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.78713 12.6425C6.05428 11.3731 4.43147 10.9379 3.16213 11.6708C1.89304 12.4036 1.45791 14.0266 2.19045 15.2958C2.89893 16.5229 4.438 16.9667 5.68654 16.3329C6.87794 17.2613 8.37572 17.8172 10.003 17.8173C10.4526 17.8173 10.8932 17.7743 11.3203 17.6933C11.6812 17.6248 11.9181 17.2767 11.8496 16.9159C11.781 16.5553 11.433 16.3182 11.0723 16.3866C10.7265 16.4522 10.3689 16.4872 10.003 16.4872C8.77108 16.4872 7.63223 16.0956 6.70022 15.4315C7.23668 14.6191 7.30697 13.5429 6.78713 12.6425ZM5.63576 13.3075C5.27019 12.6743 4.46037 12.4566 3.82717 12.8222C3.19401 13.1877 2.97733 13.9976 3.3428 14.6308C3.70838 15.264 4.51818 15.4807 5.15139 15.1151C5.78423 14.7495 6.00103 13.9406 5.63576 13.3075Z"
      />
    </svg>
  );
}
