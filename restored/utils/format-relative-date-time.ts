// Restored from ref/webview/assets/format-relative-date-time-DLmXX0fU.js
// format-relative-date-time-DLmXX0fU chunk restored from the Codex webview bundle.
import React from "react";
import * as reactIntlRuntime from "../vendor/react-intl";
const MINUTE_MS = 60_000;
const WEEK_DAYS = 7;
const MONTH_DAYS = 30;
const YEAR_DAYS = 365;
let currentNow = new Date();
let intervalId: number | null = null;
const listeners = new Set<() => void>();
export function formatRelativeDateTime({ dateString }: { dateString: string }) {
  const now = useCurrentMinute();
  return formatCompactRelativeDateTime(dateString, now);
}
function useCurrentMinute() {
  return React.useSyncExternalStore(
    subscribeToCurrentMinute,
    getCurrentNow,
    getCurrentNow,
  );
}
function subscribeToCurrentMinute(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) startMinuteTicker();
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) stopMinuteTicker();
  };
}
function startMinuteTicker() {
  if (intervalId != null || typeof window === "undefined") return;
  updateCurrentNow();
  intervalId = window.setInterval(updateCurrentNow, MINUTE_MS);
}
function stopMinuteTicker() {
  if (intervalId == null) return;
  window.clearInterval(intervalId);
  intervalId = null;
}
function updateCurrentNow() {
  currentNow = new Date();
  for (const listener of listeners) listener();
}
function getCurrentNow() {
  return currentNow;
}
function formatCompactRelativeDateTime(dateString: string, now: Date) {
  const intl = reactIntlRuntime.libL();
  const date = new Date(dateString);
  const elapsedMinutes = minutesBetween(now, date);
  const elapsedDays = daysBetween(now, date);
  const positiveMinutes = Math.max(1, elapsedMinutes);
  if (positiveMinutes < 60) {
    return intl.formatMessage(
      {
        id: "wham.formattedRelativeDateTime.compactMinutesAgo",
        defaultMessage: "{value}m",
        description: "Compact minutes-ago format",
      },
      {
        value: positiveMinutes,
      },
    );
  }
  const elapsedHours = Math.floor(positiveMinutes / 60);
  if (elapsedHours < 24) {
    return intl.formatMessage(
      {
        id: "wham.formattedRelativeDateTime.compactHoursAgo",
        defaultMessage: "{value}h",
        description: "Compact hours-ago format",
      },
      {
        value: elapsedHours,
      },
    );
  }
  const positiveDays = Math.max(1, elapsedDays);
  if (positiveDays < WEEK_DAYS) {
    return intl.formatMessage(
      {
        id: "wham.formattedRelativeDateTime.compactDaysAgo",
        defaultMessage: "{value}d",
        description: "Compact days-ago format",
      },
      {
        value: positiveDays,
      },
    );
  }
  if (positiveDays < MONTH_DAYS) {
    return intl.formatMessage(
      {
        id: "wham.formattedRelativeDateTime.compactWeeksAgo",
        defaultMessage: "{value}w",
        description: "Compact weeks-ago format",
      },
      {
        value: Math.floor(positiveDays / WEEK_DAYS),
      },
    );
  }
  if (positiveDays < YEAR_DAYS) {
    return intl.formatMessage(
      {
        id: "wham.formattedRelativeDateTime.compactMonthsAgo",
        defaultMessage: "{value}mo",
        description: "Compact months-ago format",
      },
      {
        value: Math.floor(positiveDays / MONTH_DAYS),
      },
    );
  }
  return intl.formatMessage(
    {
      id: "wham.formattedRelativeDateTime.compactYearsAgo",
      defaultMessage: "{value}y",
      description: "Compact years-ago format",
    },
    {
      value: Math.floor(positiveDays / YEAR_DAYS),
    },
  );
}
function minutesBetween(later: Date, earlier: Date) {
  return Math.floor((later.getTime() - earlier.getTime()) / MINUTE_MS);
}
function daysBetween(later: Date, earlier: Date) {
  const laterDay = new Date(
    later.getFullYear(),
    later.getMonth(),
    later.getDate(),
  );
  const earlierDay = new Date(
    earlier.getFullYear(),
    earlier.getMonth(),
    earlier.getDate(),
  );
  return Math.round((laterDay.getTime() - earlierDay.getTime()) / 86_400_000);
}
