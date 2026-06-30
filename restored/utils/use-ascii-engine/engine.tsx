// Restored from ref/webview/assets/use-ascii-engine-BJ-AIEdX.js
// use-ascii-engine-BJ-AIEdX chunk restored from the Codex webview bundle.
import React from "react";
import {
  ASCII_PALETTES,
  DEFAULT_ASCII_CHARS,
  DEFAULT_COLUMNS,
  DEFAULT_FRAME_RATE,
  DEFAULT_ROWS,
} from "./types";
import type {
  AsciiEngineMode,
  UseAsciiEngineOptions,
  UseAsciiEngineResult,
} from "./types";
import {
  createNoiseFrame,
  ditherFrame,
  luminanceToAscii,
  makeNoise3D,
} from "./noise";
import { ensureHiddenVideo, ensureSamplingCanvas, isVideoReady } from "./video";
export function useAsciiEngine(
  options?: UseAsciiEngineOptions,
): UseAsciiEngineResult {
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
