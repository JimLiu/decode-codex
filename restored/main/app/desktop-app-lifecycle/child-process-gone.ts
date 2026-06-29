// Restored from ref/.vite/build/main-r5HnecX_.js
// Recoverable Chromium child-process-gone detection and deduplicated logging.

import type { ChildProcessGoneDetails, StructuredLogger } from "./types";

const RECOVERABLE_CHILD_PROCESS_WARNING_DEDUPLICATION_MS = 60_000;
const recoverableChildProcessLastReportedAtByKey = new Map<string, number>();

export function isRecoverableChromiumChildProcessGone(
  details: ChildProcessGoneDetails,
): boolean {
  return (
    details.reason === "launch-failed" ||
    details.type === "GPU" ||
    (details.type === "Utility" &&
      details.serviceName === "audio.mojom.AudioService")
  );
}

export function createRecoverableChildProcessWarningKey(
  details: ChildProcessGoneDetails,
): string {
  return `${details.type}:${details.serviceName ?? details.name ?? ""}:${details.reason}`;
}

export function reportRecoverableChromiumChildProcessGone({
  details,
  lastReportedAtByKey = recoverableChildProcessLastReportedAtByKey,
  logger,
  now = Date.now(),
}: {
  details: ChildProcessGoneDetails;
  logger: StructuredLogger;
  now?: number;
  lastReportedAtByKey?: Map<string, number>;
}): void {
  const key = createRecoverableChildProcessWarningKey(details);
  const lastReportedAt = lastReportedAtByKey.get(key);
  if (
    lastReportedAt != null &&
    now - lastReportedAt < RECOVERABLE_CHILD_PROCESS_WARNING_DEDUPLICATION_MS
  ) {
    return;
  }

  lastReportedAtByKey.set(key, now);
  logger.warning("Recoverable Chromium child process gone", {
    safe: {
      exitCode: details.exitCode,
      name: details.name ?? null,
      processType: details.type,
      reason: details.reason,
      serviceName: details.serviceName ?? null,
    },
  });
}
