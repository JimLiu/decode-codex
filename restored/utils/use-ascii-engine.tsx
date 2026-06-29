// Restored from ref/webview/assets/use-ascii-engine-rUFCM5yi.js
// Renders generated ASCII frames to a crisp canvas and drives the login/onboarding ASCII animation.
import React from "react";
type AsciiEngineMode = "noise" | "video" | "composite";
type AsciiCanvasProps = {
  lines: string[];
  columns: number;
  rows: number;
  scale?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  autoCover?: boolean;
};
type UseAsciiEngineOptions = {
  initialMode?: AsciiEngineMode;
  initialColumns?: number;
  initialRows?: number;
  preferredVideoKeyword?: string;
};
type UseAsciiEngineResult = {
  mode: AsciiEngineMode;
  setMode: React.Dispatch<React.SetStateAction<AsciiEngineMode>>;
  asciiChars: string;
  setAsciiChars: React.Dispatch<React.SetStateAction<string>>;
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
  rows: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  lines: string[];
  showControls: boolean;
  setShowControls: React.Dispatch<React.SetStateAction<boolean>>;
};
const DEFAULT_ASCII_CHARS = "@%#*+=-:. ";
const DEFAULT_COLUMNS = 50;
const DEFAULT_ROWS = 30;
const DEFAULT_FRAME_RATE = 20;
const DEFAULT_FONT_SIZE = 12;
const DEFAULT_FONT_FAMILY = "monospace";
const ASCII_PALETTES = [
  "█▓▒░ ",
  "■□▲△●○◆◇",
  "⎺⎻⎼⎽⎾⎿",
  "o p e n a i ",
  "█▉▊▋▌▍▎▏",
  "█▓▒░-=:. ",
  "█▇▆▅▄▃▂▁",
  "C O D E X",
  "█■▲●◉○. ",
  "WMBRXVIl. ",
  "█#A*-. ",
  "●◉○· ",
] as const;
function noop() {}
function resolveCssColor(
  host: HTMLElement | null,
  value: string | undefined,
  property: "backgroundColor" | "color",
) {
  const resolveVariable = (cssValue: string) => {
    try {
      const probe = document.createElement("div");
      probe.style.display = "none";
      probe.style[property] = cssValue;
      document.body.appendChild(probe);
      const resolved = getComputedStyle(probe)[property] || "";
      probe.remove();
      return resolved;
    } catch {
      return "";
    }
  };
  if (value && value !== "") {
    if (value.trim().startsWith("var(")) {
      const resolved = resolveVariable(value);
      if (resolved) return resolved;
    }
    return value;
  }
  if (!host) return "";
  const hostStyle = getComputedStyle(host);
  let resolved =
    property === "color" ? hostStyle.color : hostStyle.backgroundColor;
  if (
    (resolved === "rgba(0, 0, 0, 0)" || resolved === "transparent") &&
    host.parentElement
  ) {
    const parentStyle = getComputedStyle(host.parentElement);
    resolved =
      property === "color" ? parentStyle.color : parentStyle.backgroundColor;
  }
  return resolved;
}
function measureCharacterCell(
  context: CanvasRenderingContext2D,
  fontSize: number,
  fontFamily: string,
) {
  context.font = `${fontSize}px ${fontFamily}`;
  const metrics = context.measureText("M");
  const width = Math.max(1, Math.round(metrics.width));
  const height = Math.max(
    1,
    Math.round(
      (metrics.actualBoundingBoxAscent || fontSize) +
        (metrics.actualBoundingBoxDescent || Math.ceil(fontSize * 0.3)),
    ),
  );
  return {
    height,
    width,
  };
}
function getCanvasScale({
  autoCover,
  columns,
  rows,
  characterHeight,
  characterWidth,
  wrapper,
}: {
  autoCover: boolean;
  columns: number;
  rows: number;
  characterHeight: number;
  characterWidth: number;
  wrapper: HTMLElement | null;
}) {
  if (!autoCover || !wrapper?.parentElement) return 1;
  try {
    const parentBounds = wrapper.parentElement.getBoundingClientRect();
    const unscaledWidth = Math.max(1, columns * characterWidth);
    const unscaledHeight = Math.max(1, rows * characterHeight);
    const coverScale = Math.max(
      parentBounds.width / unscaledWidth,
      parentBounds.height / unscaledHeight,
    );
    return Number.isFinite(coverScale) && coverScale > 0
      ? coverScale * 1.02
      : 1;
  } catch {
    return 1;
  }
}
function scheduleCanvasRedraw(redraw: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(redraw);
  });
}
function AsciiCanvas({
  lines,
  columns,
  rows,
  scale = 0.75,
  foregroundColor = "var(--color-token-checkbox-border)",
  backgroundColor = "var(--color-token-side-bar-background)",
  autoCover = false,
}: AsciiCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const lastLinesKeyRef = React.useRef("");
  const latestLinesRef = React.useRef(lines);
  const characterWidthRef = React.useRef(8);
  const characterHeightRef = React.useRef(16);
  const fontSizeRef = React.useRef(DEFAULT_FONT_SIZE);
  const fontFamilyRef = React.useRef(DEFAULT_FONT_FAMILY);
  const redrawRef = React.useRef(noop);
  const drawFrame = React.useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    canvas.style.borderRadius = autoCover ? "0px" : "10px";
    try {
      context.setTransform(1, 0, 0, 1, 0, 0);
    } catch {}
    const characterCell = measureCharacterCell(
      context,
      fontSizeRef.current,
      fontFamilyRef.current,
    );
    characterWidthRef.current = characterCell.width;
    characterHeightRef.current = characterCell.height;
    const coverScale = getCanvasScale({
      autoCover,
      columns,
      rows,
      characterHeight: characterCell.height,
      characterWidth: characterCell.width,
      wrapper,
    });
    const effectiveScale = autoCover ? coverScale : scale;
    const pixelRatio = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    const cssWidth = Math.max(
      1,
      columns * characterCell.width * effectiveScale,
    );
    const cssHeight = Math.max(1, rows * characterCell.height * effectiveScale);
    const bitmapWidth = Math.max(1, Math.round(cssWidth * pixelRatio));
    const bitmapHeight = Math.max(1, Math.round(cssHeight * pixelRatio));
    if (canvas.width !== bitmapWidth || canvas.height !== bitmapHeight) {
      canvas.width = bitmapWidth;
      canvas.height = bitmapHeight;
    }
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    if (wrapper) {
      wrapper.style.width = `${cssWidth}px`;
      wrapper.style.height = `${cssHeight}px`;
    }
    context.setTransform(
      pixelRatio * effectiveScale,
      0,
      0,
      pixelRatio * effectiveScale,
      0,
      0,
    );
    context.imageSmoothingEnabled = false;
    const drawingWidth = canvas.width / (pixelRatio * effectiveScale);
    const drawingHeight = canvas.height / (pixelRatio * effectiveScale);
    const background = resolveCssColor(
      wrapper,
      backgroundColor,
      "backgroundColor",
    );
    const foreground = resolveCssColor(wrapper, foregroundColor, "color");
    context.save();
    if (background) {
      context.fillStyle = background;
      context.fillRect(0, 0, drawingWidth, drawingHeight);
    }
    if (foreground) context.fillStyle = foreground;
    context.textBaseline = "top";
    context.font = `${fontSizeRef.current}px ${fontFamilyRef.current}`;
    const visibleRows = Math.min(rows, latestLinesRef.current.length);
    for (let rowIndex = 0; rowIndex < visibleRows; rowIndex += 1) {
      const line = latestLinesRef.current[rowIndex] ?? "";
      if (line) context.fillText(line, 0, rowIndex * characterCell.height);
    }
    context.restore();
  }, [autoCover, backgroundColor, columns, foregroundColor, rows, scale]);
  React.useEffect(() => {
    redrawRef.current = drawFrame;
  }, [drawFrame]);
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (document?.fonts?.ready?.then) await document.fonts.ready;
      } catch {}
      if (!cancelled) redrawRef.current();
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  React.useEffect(() => {
    latestLinesRef.current = lines;
    const linesKey = lines.join("\n");
    if (linesKey !== lastLinesKeyRef.current) {
      lastLinesKeyRef.current = linesKey;
      scheduleCanvasRedraw(() => redrawRef.current());
    }
  }, [lines]);
  React.useEffect(() => {
    scheduleCanvasRedraw(() => redrawRef.current());
  }, [backgroundColor, columns, foregroundColor, rows]);
  React.useEffect(() => {
    if (!autoCover) return;
    const handleResize = () => scheduleCanvasRedraw(() => redrawRef.current());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [autoCover]);
  const wrapperStyle = autoCover
    ? ({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        transformOrigin: "center",
        display: "block",
      } satisfies React.CSSProperties)
    : ({
        transform: `scale(${scale})`,
        transformOrigin: "center",
        display: "inline-block",
      } satisfies React.CSSProperties);
  return (
    <div ref={wrapperRef} style={wrapperStyle}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          imageRendering: "crisp-edges",
          borderRadius: autoCover ? 0 : 10,
        }}
      />
    </div>
  );
}
function makeNoise3D(seed: number) {
  return (columnIndex: number, rowIndex: number, time: number) => {
    const raw =
      Math.sin(
        columnIndex * 12.9898 + rowIndex * 78.233 + time * 37.719 + seed,
      ) * 43758.5453;
    const fractional = raw - Math.floor(raw);
    return fractional * 2 - 1;
  };
}
function createNoiseFrame({
  columns,
  noise3d,
  rows,
  time,
}: {
  columns: number;
  noise3d: (columnIndex: number, rowIndex: number, time: number) => number;
  rows: number;
  time: number;
}) {
  const sampleScale = 0.15;
  const frame: number[][] = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    const row: number[] = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const value =
        ((noise3d(columnIndex * sampleScale, rowIndex * sampleScale, time) +
          1) /
          2) *
        255;
      row.push(Math.round(value));
    }
    frame.push(row);
  }
  return frame;
}
function ditherFrame(frame: number[][], paletteSize: number) {
  const rows = frame.length;
  const columns = rows > 0 ? (frame[0]?.length ?? 0) : 0;
  const dithered = frame.map((row) => row.slice());
  const levels = Math.max(2, paletteSize);
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      const oldValue = dithered[rowIndex][columnIndex] ?? 0;
      const newValue =
        Math.round((oldValue / 255) * (levels - 1)) * (255 / (levels - 1));
      dithered[rowIndex][columnIndex] = newValue;
      const error = oldValue - newValue;
      if (columnIndex + 1 < columns)
        dithered[rowIndex][columnIndex + 1] += (error * 7) / 16;
      if (rowIndex + 1 < rows && columnIndex > 0)
        dithered[rowIndex + 1][columnIndex - 1] += (error * 3) / 16;
      if (rowIndex + 1 < rows)
        dithered[rowIndex + 1][columnIndex] += (error * 5) / 16;
      if (rowIndex + 1 < rows && columnIndex + 1 < columns)
        dithered[rowIndex + 1][columnIndex + 1] += error / 16;
    }
  }
  for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      dithered[rowIndex][columnIndex] = Math.max(
        0,
        Math.min(255, dithered[rowIndex][columnIndex] ?? 0),
      );
    }
  }
  return dithered;
}
function luminanceToAscii(
  frame: number[][],
  asciiChars: string,
  invert: boolean,
) {
  return frame.map((row) =>
    row
      .map((value) => {
        const normalized = invert ? 1 - value / 255 : value / 255;
        const index = Math.max(
          0,
          Math.min(
            asciiChars.length - 1,
            Math.round(normalized * (asciiChars.length - 1)),
          ),
        );
        return asciiChars[index] ?? " ";
      })
      .join(""),
  );
}
function isVideoReady(video: HTMLVideoElement | null) {
  if (!video) return false;
  const hasDimensions =
    Number.isFinite(video.videoWidth) &&
    Number.isFinite(video.videoHeight) &&
    video.videoWidth > 1 &&
    video.videoHeight > 1;
  return hasDimensions && (video.readyState ?? 0) >= 2 && !video.paused;
}
function ensureHiddenVideo(
  videoRef: React.MutableRefObject<HTMLVideoElement | null>,
) {
  if (videoRef.current) return videoRef.current;
  const video = document.createElement("video");
  video.style.display = "none";
  video.loop = true;
  video.muted = true;
  video.setAttribute("playsinline", "");
  document.body.appendChild(video);
  videoRef.current = video;
  return video;
}
function ensureSamplingCanvas({
  canvasRef,
  contextRef,
  columns,
  rows,
}: {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>;
  columns: number;
  rows: number;
}) {
  if (!canvasRef.current) {
    const canvas = document.createElement("canvas");
    canvas.style.display = "none";
    document.body.appendChild(canvas);
    canvasRef.current = canvas;
  }
  if (!contextRef.current) {
    contextRef.current = canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });
  }
  canvasRef.current.width = columns;
  canvasRef.current.height = rows;
}
function useAsciiEngine(options?: UseAsciiEngineOptions): UseAsciiEngineResult {
  const [mode, setMode] = React.useState<AsciiEngineMode>(
    options?.initialMode ?? "noise",
  );
  const [asciiChars, setAsciiChars] = React.useState(DEFAULT_ASCII_CHARS);
  const [paletteIndex, setPaletteIndex] = React.useState(0);
  const [columns, setColumns] = React.useState(
    options?.initialColumns ?? DEFAULT_COLUMNS,
  );
  const [rows, setRows] = React.useState(options?.initialRows ?? DEFAULT_ROWS);
  const [lines, setLines] = React.useState<string[]>([]);
  const [showControls, setShowControls] = React.useState(false);
  const [videoUrls, setVideoUrls] = React.useState<string[]>([]);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const samplingCanvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const samplingContextRef = React.useRef<CanvasRenderingContext2D | null>(
    null,
  );
  const currentVideoIndexRef = React.useRef(0);
  const preferredVideoKeywordRef = React.useRef(options?.preferredVideoKeyword);
  const animationFrameRef = React.useRef<number | null>(null);
  const frameTimeRef = React.useRef(0);
  const noiseTimeRef = React.useRef(0);
  const lastFrameRef = React.useRef("");
  const objectUrlRef = React.useRef<string | null>(null);
  const previousModeRef = React.useRef<AsciiEngineMode>("noise");
  const noise3d = React.useMemo(() => makeNoise3D(Date.now()), []);
  React.useEffect(() => {
    if (typeof options?.initialColumns === "number")
      setColumns(options.initialColumns);
  }, [options?.initialColumns]);
  React.useEffect(() => {
    if (typeof options?.initialRows === "number") setRows(options.initialRows);
  }, [options?.initialRows]);
  React.useEffect(() => {
    try {
      const bundledVideoMap = Object.assign({});
      setVideoUrls(Object.values(bundledVideoMap));
    } catch {
      setVideoUrls([]);
    }
  }, []);
  const createNoiseLines = React.useCallback(() => {
    const frame = ditherFrame(
      createNoiseFrame({
        columns,
        noise3d,
        rows,
        time: noiseTimeRef.current,
      }),
      asciiChars.length,
    );
    return luminanceToAscii(frame, asciiChars, true);
  }, [asciiChars, columns, noise3d, rows]);
  const drawVideoToSamplingCanvas = React.useCallback(() => {
    const video = videoRef.current;
    const canvas = samplingCanvasRef.current;
    const context = samplingContextRef.current;
    if (!video || !canvas || !context) return false;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    if (
      !Number.isFinite(videoWidth) ||
      !Number.isFinite(videoHeight) ||
      videoWidth < 2 ||
      videoHeight < 2
    )
      return false;
    const targetAspectRatio = columns / Math.max(1, (18 / 9) * rows);
    const videoAspectRatio = videoWidth / videoHeight;
    let sourceX = 0;
    let sourceY = 0;
    let sourceWidth = videoWidth;
    let sourceHeight = videoHeight;
    if (videoAspectRatio > targetAspectRatio) {
      sourceHeight = videoHeight;
      sourceWidth = Math.max(1, videoHeight * targetAspectRatio);
      sourceX = Math.max(0, (videoWidth - sourceWidth) / 2);
    } else {
      sourceWidth = videoWidth;
      sourceHeight = Math.max(1, videoWidth / targetAspectRatio);
      sourceY = Math.max(0, (videoHeight - sourceHeight) / 2);
    }
    try {
      context.drawImage(
        video,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        columns,
        rows,
      );
      return true;
    } catch {
      return false;
    }
  }, [columns, rows]);
  const readSamplingCanvasLuminance = React.useCallback(() => {
    const context = samplingContextRef.current;
    if (!context) return [];
    const pixels = context.getImageData(0, 0, columns, rows).data;
    const frame: number[][] = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
      const row: number[] = [];
      for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
        const offset = (rowIndex * columns + columnIndex) * 4;
        const red = pixels[offset] ?? 0;
        const green = pixels[offset + 1] ?? 0;
        const blue = pixels[offset + 2] ?? 0;
        row.push(Math.round(0.299 * red + 0.587 * green + 0.114 * blue));
      }
      frame.push(row);
    }
    return frame;
  }, [columns, rows]);
  const createVideoLines = React.useCallback(
    (invert: boolean) =>
      luminanceToAscii(
        ditherFrame(readSamplingCanvasLuminance(), asciiChars.length),
        asciiChars,
        invert,
      ),
    [asciiChars, readSamplingCanvasLuminance],
  );
  const createFrameLines = React.useCallback(() => {
    ensureSamplingCanvas({
      canvasRef: samplingCanvasRef,
      contextRef: samplingContextRef,
      columns,
      rows,
    });
    let nextLines: string[];
    if (mode === "video" && isVideoReady(videoRef.current)) {
      drawVideoToSamplingCanvas();
      nextLines = createVideoLines(true);
    } else if (mode === "composite") {
      const noiseLines = createNoiseLines();
      if (isVideoReady(videoRef.current) && drawVideoToSamplingCanvas()) {
        const videoLines = createVideoLines(true);
        const luminanceFrame = readSamplingCanvasLuminance();
        nextLines = noiseLines.map((line, rowIndex) =>
          Array.from(line)
            .map((noiseChar, columnIndex) =>
              (luminanceFrame[rowIndex]?.[columnIndex] ?? 0) > 110
                ? (videoLines[rowIndex]?.[columnIndex] ?? noiseChar)
                : noiseChar,
            )
            .join(""),
        );
      } else {
        nextLines = noiseLines;
      }
    } else {
      nextLines = createNoiseLines();
    }
    if (!nextLines.length || nextLines.every((line) => !line.trim())) {
      nextLines = Array.from(
        {
          length: rows,
        },
        () => "@".repeat(columns),
      );
    }
    noiseTimeRef.current += 0.03;
    return nextLines;
  }, [
    columns,
    createNoiseLines,
    createVideoLines,
    drawVideoToSamplingCanvas,
    mode,
    readSamplingCanvasLuminance,
    rows,
  ]);
  const pickPreferredVideoUrl = React.useCallback(() => {
    const preferredKeyword = preferredVideoKeywordRef.current?.toLowerCase();
    if (!preferredKeyword) return "";
    return (
      videoUrls.find((url) => url.toLowerCase().includes(preferredKeyword)) ??
      ""
    );
  }, [videoUrls]);
  const nextVideoUrl = React.useCallback(() => {
    if (!videoUrls.length) return "";
    const url =
      videoUrls[currentVideoIndexRef.current % videoUrls.length] ?? "";
    currentVideoIndexRef.current =
      (currentVideoIndexRef.current + 1) % Math.max(1, videoUrls.length);
    return url;
  }, [videoUrls]);
  const loadVideo = React.useCallback(
    async (forceNext = false) => {
      if (!videoUrls.length) return;
      const video = ensureHiddenVideo(videoRef);
      video.muted = true;
      video.loop = true;
      video.setAttribute("playsinline", "");
      const selectedUrl =
        forceNext || !video.src
          ? pickPreferredVideoUrl() || nextVideoUrl()
          : "";
      if (selectedUrl) {
        try {
          const blob = await (await fetch(selectedUrl)).blob();
          const objectUrl = URL.createObjectURL(blob);
          if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = objectUrl;
          video.src = objectUrl;
        } catch {}
      }
      try {
        if ((video.readyState ?? 0) < 2) {
          await new Promise<void>((resolve) => {
            const handleLoadedData = () => {
              video.removeEventListener("loadeddata", handleLoadedData);
              resolve();
            };
            video.addEventListener("loadeddata", handleLoadedData, {
              once: true,
            });
          });
        }
        if (video.paused) await video.play();
      } catch {}
      ensureSamplingCanvas({
        canvasRef: samplingCanvasRef,
        contextRef: samplingContextRef,
        columns,
        rows,
      });
    },
    [columns, nextVideoUrl, pickPreferredVideoUrl, rows, videoUrls.length],
  );
  const playNextVideo = React.useCallback(async () => {
    if (!videoUrls.length) return;
    currentVideoIndexRef.current =
      (currentVideoIndexRef.current + 1) % Math.max(1, videoUrls.length);
    await loadVideo(true);
  }, [loadVideo, videoUrls.length]);
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.metaKey &&
        (event.key === "/" || event.key === "?" || event.code === "Slash")
      ) {
        event.preventDefault();
        if (event.repeat) return;
        const nextMode = mode === "video" ? "noise" : "video";
        setMode(nextMode);
        if (nextMode === "video") {
          loadVideo(true);
          frameTimeRef.current = 0;
        }
        return;
      }
      if (event.metaKey && event.key === ".") {
        event.preventDefault();
        if (event.repeat) return;
        const nextPaletteIndex = (paletteIndex + 1) % ASCII_PALETTES.length;
        setPaletteIndex(nextPaletteIndex);
        setAsciiChars(ASCII_PALETTES[nextPaletteIndex]);
        return;
      }
      const requestedVideo =
        (event.metaKey && event.key.toLowerCase() === "m") ||
        (event.metaKey && event.shiftKey && event.key.toLowerCase() === "m") ||
        (event.altKey && event.key.toLowerCase() === "m");
      if (!requestedVideo) return;
      event.preventDefault();
      if (event.repeat) return;
      if (mode === "video") {
        playNextVideo();
      } else {
        setMode("video");
        loadVideo(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loadVideo, mode, paletteIndex, playNextVideo]);
  React.useEffect(() => {
    const frameInterval = 1000 / DEFAULT_FRAME_RATE;
    const tick = (timestamp: number) => {
      try {
        if (
          !document.hidden &&
          timestamp - frameTimeRef.current >= frameInterval - 1
        ) {
          const nextLines = createFrameLines();
          const nextFrame = nextLines.join("\n");
          if (nextFrame !== lastFrameRef.current) {
            lastFrameRef.current = nextFrame;
            setLines(nextLines);
          }
          frameTimeRef.current = timestamp;
        }
      } catch {
      } finally {
        animationFrameRef.current = window.requestAnimationFrame(tick);
      }
    };
    animationFrameRef.current = window.requestAnimationFrame(tick);
    const handleVisibilityChange = () => {
      if (!document.hidden) frameTimeRef.current = 0;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      if (animationFrameRef.current != null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [createFrameLines]);
  React.useEffect(() => {
    if (
      (mode === "video" || mode === "composite") &&
      previousModeRef.current !== mode
    )
      loadVideo(true);
    previousModeRef.current = mode;
  }, [loadVideo, mode]);
  React.useEffect(() => {
    if ((mode === "video" || mode === "composite") && videoUrls.length)
      loadVideo(true);
  }, [loadVideo, mode, videoUrls.length]);
  React.useEffect(
    () => () => {
      try {
        const video = videoRef.current;
        if (video) {
          if (!video.paused) video.pause();
          video.srcObject = null;
          video.remove();
        }
      } catch {}
      try {
        samplingCanvasRef.current?.remove();
      } catch {}
      if (objectUrlRef.current) {
        try {
          URL.revokeObjectURL(objectUrlRef.current);
        } catch {}
        objectUrlRef.current = null;
      }
      videoRef.current = null;
      samplingCanvasRef.current = null;
      samplingContextRef.current = null;
    },
    [],
  );
  return {
    mode,
    setMode,
    asciiChars,
    setAsciiChars,
    columns,
    setColumns,
    rows,
    setRows,
    lines,
    showControls,
    setShowControls,
  };
}
export { AsciiCanvas, useAsciiEngine };
