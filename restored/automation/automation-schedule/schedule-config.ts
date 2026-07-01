// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Form config defaults, parsing, validation, and serialization for automation schedules.

import {
  AUTOMATION_BUSINESS_DAYS,
  AUTOMATION_WEEKDAYS,
  type AutomationScheduleConfig,
  type AutomationScheduleMode,
} from "./types";
import {
  DEFAULT_AUTOMATION_TIME,
  normalizeIntervalHours,
  normalizeIntervalMinutes,
  parseAutomationTime,
} from "./schedule-time";
import {
  firstAutomationWeekday,
  getHeartbeatIntervalMinutes,
  inferScheduleMode,
  parseAutomationRrule,
  serializeHourlyRrule,
  serializeMinutelyRrule,
  serializeWeeklyRrule,
} from "./rrule-parser";

export function initAutomationScheduleConfigChunk(): void {}

export function getDefaultCronScheduleConfig(): AutomationScheduleConfig {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: [...AUTOMATION_WEEKDAYS],
    time: DEFAULT_AUTOMATION_TIME,
    customRrule: "",
  };
}

export function getDefaultHeartbeatScheduleConfig(): AutomationScheduleConfig {
  return {
    ...getDefaultCronScheduleConfig(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    customRrule: "",
  };
}

export function parseCronScheduleConfig(
  rrule: string,
): AutomationScheduleConfig {
  const defaultConfig = getDefaultCronScheduleConfig();
  const parsed = parseAutomationRrule(rrule);

  if (!parsed) return defaultConfig;

  const mode = inferScheduleMode(parsed);
  return {
    ...defaultConfig,
    mode,
    intervalHours: parsed.interval,
    intervalMinutes: null,
    weekdays: parsed.weekdays,
    time: parsed.time,
    customRrule: mode === "custom" ? parsed.rruleText : "",
  };
}

export function parseHeartbeatScheduleConfig(
  rrule: string,
): AutomationScheduleConfig {
  const defaultConfig = getDefaultHeartbeatScheduleConfig();
  const parsed = parseAutomationRrule(rrule);

  if (!parsed) return defaultConfig;

  const intervalMinutes = getHeartbeatIntervalMinutes(parsed);
  if (intervalMinutes == null) {
    const mode = inferScheduleMode(parsed);
    if (mode === "daily" || mode === "weekdays" || mode === "weekly") {
      return {
        ...defaultConfig,
        mode,
        weekdays: parsed.weekdays,
        time: parsed.time,
      };
    }

    return mode === "custom"
      ? {
          ...defaultConfig,
          mode,
          customRrule: parsed.rruleText,
        }
      : defaultConfig;
  }

  return {
    ...defaultConfig,
    intervalHours: Math.max(1, Math.round(intervalMinutes / 60)),
    intervalMinutes,
  };
}

export function serializeAutomationScheduleConfig(
  config: AutomationScheduleConfig,
): string {
  switch (config.mode) {
    case "hourly":
      return config.intervalMinutes == null
        ? serializeHourlyRrule(config.intervalHours)
        : serializeMinutelyRrule(config.intervalMinutes);
    case "daily":
      return serializeWeeklyRrule({
        time: config.time,
        weekdays: [...AUTOMATION_WEEKDAYS],
      });
    case "weekdays":
      return serializeWeeklyRrule({
        time: config.time,
        weekdays: [...AUTOMATION_BUSINESS_DAYS],
      });
    case "weekly":
      return serializeWeeklyRrule({
        time: config.time,
        weekdays: [firstAutomationWeekday(config.weekdays)],
      });
    case "custom":
      return config.customRrule.trim();
  }
}

export function isAutomationScheduleConfigValid(
  config: AutomationScheduleConfig,
): boolean {
  switch (config.mode) {
    case "hourly":
      return config.intervalMinutes == null
        ? normalizeIntervalHours(config.intervalHours) != null
        : normalizeIntervalMinutes(config.intervalMinutes) != null;
    case "daily":
    case "weekdays":
    case "weekly":
      return parseAutomationTime(config.time) != null;
    case "custom":
      return parseAutomationRrule(config.customRrule.trim()) != null;
  }
}

export function changeAutomationScheduleMode(
  config: AutomationScheduleConfig,
  mode: AutomationScheduleMode,
): AutomationScheduleConfig {
  if (mode === "custom") {
    return {
      ...config,
      mode,
      customRrule:
        config.mode === "custom" && config.customRrule.trim()
          ? config.customRrule
          : serializeAutomationScheduleConfig(config),
    };
  }

  if (mode === "hourly") {
    return {
      ...config,
      mode,
      intervalHours:
        config.mode === "hourly"
          ? (normalizeIntervalHours(config.intervalHours) ?? 1)
          : 1,
      intervalMinutes:
        config.intervalMinutes == null
          ? null
          : (normalizeIntervalMinutes(config.intervalMinutes) ?? 30),
    };
  }

  if (mode === "daily") {
    return {
      ...config,
      mode,
      weekdays: [...AUTOMATION_WEEKDAYS],
    };
  }

  if (mode === "weekdays") {
    return {
      ...config,
      mode,
      weekdays: [...AUTOMATION_BUSINESS_DAYS],
    };
  }

  return {
    ...config,
    mode,
    weekdays: [firstAutomationWeekday(config.weekdays)],
  };
}
