// Restored from ref/.vite/build/trace-recording-upload-DPG3eKCS.js
// trace-recording-upload-DPG3eKCS chunk restored from the Codex Electron main bundle.
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { promisify } from "node:util";
import * as zlib from "node:zlib";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  createFeedbackDesktopLogArchive,
  removeFeedbackDesktopLogArchive,
} from "../feedback/desktop-log-archive";
type TraceCorrelation = {
  conversationId?: string | null;
  hostId?: string | null;
  windowId?: string | number | null;
};
type RuntimeHealth = {
  gpuVendor?: string | null;
  gpuRenderer?: string | null;
  hardwareAccelerationEnabled?: boolean;
};
type UploadFeedbackRequest = {
  classification: "trace-recording";
  reason: string;
  threadId: string | null;
  includeLogs: boolean;
  extraLogFiles: string[];
  tags: Record<string, string | undefined>;
};
type UploadTraceRecordingOptions = {
  tracePath: string;
  buildFlavor: string;
  buildNumber?: string | null;
  appVersion: string;
  traceRecordingNote?: string | null;
  recordingDurationMs?: number | null;
  correlation?: TraceCorrelation | null;
  runtimeHealth?: RuntimeHealth | null;
  uploadFeedback(request: UploadFeedbackRequest): Promise<{
    threadId: string;
  }>;
};
type StructuredLogger = {
  warning(message: string, details?: unknown): void;
};
type LoggerFactory = (scope: string) => () => StructuredLogger;
const DEFAULT_TRACE_REASON = "Desktop content trace recording";
const gzip = promisify(zlib.gzip);
const createScopedLogger =
  sharedRuntime.createLazyScopedStructuredLogger as LoggerFactory;
const logger = createScopedLogger("content-tracing");
async function uploadTraceRecording({
  tracePath,
  buildFlavor,
  buildNumber,
  appVersion,
  traceRecordingNote,
  recordingDurationMs,
  correlation,
  runtimeHealth,
  uploadFeedback,
}: UploadTraceRecordingOptions): Promise<string> {
  const gzipPath = `${tracePath}.gz`;
  const metadataPath = `${tracePath}.metadata.json`;
  const note = traceRecordingNote?.trim() || null;
  let logArchiveId: string | null = null;
  try {
    const traceBytes = await fs.readFile(tracePath);
    const gzippedTrace = await gzip(traceBytes);
    await Promise.all([
      fs.writeFile(gzipPath, gzippedTrace),
      fs.writeFile(
        metadataPath,
        JSON.stringify(
          {
            classification: "trace-recording",
            description: note,
            recordingDurationMs: recordingDurationMs ?? null,
            correlation: correlation ?? null,
            runtimeHealth: runtimeHealth ?? null,
            trace: {
              filename: path.basename(tracePath),
              sizeBytes: traceBytes.byteLength,
              gzipSizeBytes: gzippedTrace.byteLength,
            },
          },
          null,
          2,
        ),
      ),
    ]);
    const logArchive = await createFeedbackDesktopLogArchive();
    logArchiveId = logArchive?.archiveId ?? null;
    const uploadResult = await uploadFeedback({
      classification: "trace-recording",
      reason: note ?? DEFAULT_TRACE_REASON,
      threadId: correlation?.conversationId ?? null,
      includeLogs: true,
      extraLogFiles: [
        gzipPath,
        metadataPath,
        ...(logArchive == null ? [] : [logArchive.archivePath]),
      ],
      tags: {
        app_version: appVersion,
        app_build: buildNumber ?? undefined,
        buildFlavor,
        trace_recording: "content-trace",
        trace_filename: path.basename(gzipPath),
        platform: process.platform,
        recording_duration_ms:
          recordingDurationMs == null ? undefined : String(recordingDurationMs),
        host_id: correlation?.hostId ?? undefined,
        window_id:
          correlation?.windowId == null
            ? undefined
            : String(correlation.windowId),
        gpu_vendor: runtimeHealth?.gpuVendor ?? undefined,
        gpu_renderer: runtimeHealth?.gpuRenderer ?? undefined,
        hardware_acceleration:
          runtimeHealth == null
            ? undefined
            : runtimeHealth.hardwareAccelerationEnabled
              ? "enabled"
              : "disabled",
      },
    });
    return uploadResult.threadId;
  } finally {
    await Promise.all([
      removeTemporaryFile(gzipPath),
      removeTemporaryFile(metadataPath),
      ...(logArchiveId == null
        ? []
        : [removeFeedbackDesktopLogArchive(logArchiveId)]),
    ]);
  }
}
async function removeTemporaryFile(filePath: string): Promise<void> {
  try {
    await fs.rm(filePath, {
      force: true,
    });
  } catch (error) {
    logger().warning("Failed to remove temporary trace upload file.", {
      safe: {},
      sensitive: {
        error,
        path: filePath,
      },
    });
  }
}
export { uploadTraceRecording };
