// Restored from ref/webview/assets/use-ascii-engine-BJ-AIEdX.js
// use-ascii-engine-BJ-AIEdX chunk restored from the Codex webview bundle.
import type React from "react";
export function isVideoReady(video: HTMLVideoElement | null) {
  if (!video) return false;
  const hasDimensions =
    Number.isFinite(video.videoWidth) &&
    Number.isFinite(video.videoHeight) &&
    video.videoWidth > 1 &&
    video.videoHeight > 1;
  return hasDimensions && (video.readyState ?? 0) >= 2 && !video.paused;
}
export function ensureHiddenVideo(
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
export function ensureSamplingCanvas({
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
