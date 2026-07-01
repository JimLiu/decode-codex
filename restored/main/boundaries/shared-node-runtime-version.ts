// Restored from ref/.vite/build/src-CoIhwwHr.js
// Owl feature names and build-version conversion helpers.

export const owlFeatureNames = [
  "OwlAutofillAndPasswords",
  "OwlAuth",
  "OwlDownloads",
  "OwlExtensions",
  "OwlHistory",
  "OwlOpenAIGoLinks",
  "OwlPermissions",
  "OwlPrinting",
  "OwlWebViewEnhancements",
];

const semanticVersionPattern =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?<suffix>(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)$/;

export function dateFromDateEncodedBuildVersion(version: string): Date | null {
  let parsed;
  try {
    parsed = parseSemanticVersion(version).version;
  } catch {
    return null;
  }
  if (!isDateEncodedBuildVersion(parsed)) return null;
  const monthDay = parseMonthDay(String(parsed.minor));
  if (monthDay == null) return null;
  const patch = String(parsed.patch);
  const dayOffset = Number(patch.slice(0, -4));
  const hour = Number(patch.slice(-4, -2));
  const minute = Number(patch.slice(-2));
  if (
    !Number.isInteger(dayOffset) ||
    !Number.isInteger(hour) ||
    !Number.isInteger(minute) ||
    dayOffset < 1 ||
    hour > 23 ||
    minute > 59
  ) {
    return null;
  }
  return new Date(
    Date.UTC(
      2000 + parsed.major,
      monthDay.month - 1,
      monthDay.day + dayOffset - 1,
      hour + 8,
      minute,
    ),
  );
}

export function windowsVersionFromBuildVersion(version: string): string {
  const parsed = parseSemanticVersion(version);
  if (!isDateEncodedBuildVersion(parsed.version)) {
    return `${formatVersion(parsed.version)}.0`;
  }
  const patch = String(parsed.version.patch);
  const dayOffset = Number(patch.slice(0, -4));
  const hour = Number(patch.slice(-4, -2));
  const minute = Number(patch.slice(-2));
  const windowsRevision = (dayOffset - 1) * 1440 + hour * 60 + minute;
  return `${parsed.version.major}.${parsed.version.minor}.${windowsRevision}.0`;
}

function parseSemanticVersion(version: string): {
  suffix: string;
  version: { major: number; minor: number; patch: number };
} {
  const match = semanticVersionPattern.exec(version);
  if (match?.groups == null)
    throw Error(`Invalid semantic version: ${version}`);
  return {
    suffix: match.groups.suffix,
    version: {
      major: Number(match.groups.major),
      minor: Number(match.groups.minor),
      patch: Number(match.groups.patch),
    },
  };
}

function formatVersion(version: {
  major: number;
  minor: number;
  patch: number;
}): string {
  return `${version.major}.${version.minor}.${version.patch}`;
}

function isDateEncodedBuildVersion(version: {
  major: number;
  minor: number;
  patch: number;
}): boolean {
  return (
    version.patch >= 10000 &&
    isValidMonthDay(version.major, String(version.minor))
  );
}

function isValidMonthDay(yearOffset: number, value: string): boolean {
  const monthDay = parseMonthDay(value);
  if (monthDay == null) return false;
  const year = 2000 + yearOffset;
  const daysInMonth = new Date(Date.UTC(year, monthDay.month, 0)).getUTCDate();
  return monthDay.day <= daysInMonth;
}

function parseMonthDay(value: string): { day: number; month: number } | null {
  if (!/^[0-9]{3,4}$/.test(value)) return null;
  const monthText = value.length === 3 ? value.slice(0, 1) : value.slice(0, 2);
  const dayText = value.length === 3 ? value.slice(1) : value.slice(2);
  const month = Number(monthText);
  const day = Number(dayText);
  return month < 1 || month > 12 || day < 1 || day > 31 ? null : { day, month };
}

export function colorNumberForDeviceStatus(status: string): number | undefined {
  switch (status) {
    case "working":
      return 3166206;
    case "unread":
      return 65356;
    case "idle":
      return 16777215;
    case "awaiting-approval":
    case "awaiting-response":
      return 16739584;
    case "error":
      return 16711731;
    case "off":
      return 0;
    default:
      return undefined;
  }
}
