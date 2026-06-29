// Restored from ref/.vite/build/main-r5HnecX_.js
// Version and release-date formatting used by the native About dialog.

type SemanticVersionParts = {
  major: number;
  minor: number;
  patch: number;
};

type ParsedSemanticVersion = {
  suffix: string;
  version: SemanticVersionParts;
};

type MonthDay = {
  day: number;
  month: number;
};

const SEMVER_PATTERN =
  /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?<suffix>(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?)$/;

export function formatReleaseDateFromVersion(version: string): string | null {
  const releaseDate = parseReleaseDateFromVersion(version);
  return releaseDate == null
    ? null
    : new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
        releaseDate,
      );
}

export function parseReleaseDateFromVersion(version: string): Date | null {
  let semanticVersion: SemanticVersionParts;
  try {
    semanticVersion = parseSemanticVersion(version).version;
  } catch {
    return null;
  }

  if (!isReleaseDateEncodedVersion(semanticVersion)) return null;
  const releaseMonthDay = parseEncodedBuildMonthDay(
    String(semanticVersion.minor),
  );
  if (releaseMonthDay == null) return null;

  const patchText = String(semanticVersion.patch);
  const dayOffset = Number(patchText.slice(0, -4));
  const timeCode = patchText.slice(-4);
  const utcHour = Number(timeCode.slice(0, 2));
  const utcMinute = Number(timeCode.slice(2));
  if (
    !Number.isInteger(dayOffset) ||
    !Number.isInteger(utcHour) ||
    !Number.isInteger(utcMinute) ||
    dayOffset < 1 ||
    utcHour > 23 ||
    utcMinute > 59
  ) {
    return null;
  }

  return new Date(
    Date.UTC(
      2000 + semanticVersion.major,
      releaseMonthDay.month - 1,
      releaseMonthDay.day + dayOffset - 1,
      utcHour + 8,
      utcMinute,
    ),
  );
}

function parseSemanticVersion(version: string): ParsedSemanticVersion {
  const match = SEMVER_PATTERN.exec(version);
  if (match?.groups == null) {
    throw Error(`Invalid semantic version: ${version}`);
  }
  return {
    suffix: match.groups.suffix,
    version: {
      major: Number(match.groups.major),
      minor: Number(match.groups.minor),
      patch: Number(match.groups.patch),
    },
  };
}

function isReleaseDateEncodedVersion(version: SemanticVersionParts): boolean {
  return (
    version.patch >= 10_000 &&
    isValidEncodedBuildMonthDay(version.major, String(version.minor))
  );
}

function isValidEncodedBuildMonthDay(
  majorVersion: number,
  monthDayText: string,
): boolean {
  const monthDay = parseEncodedBuildMonthDay(monthDayText);
  if (monthDay == null) return false;
  const daysInMonth = new Date(
    Date.UTC(2000 + majorVersion, monthDay.month, 0),
  ).getUTCDate();
  return monthDay.day <= daysInMonth;
}

function parseEncodedBuildMonthDay(value: string): MonthDay | null {
  if (!/^[0-9]{3,4}$/.test(value)) return null;
  const monthText = value.length === 3 ? value.slice(0, 1) : value.slice(0, 2);
  const dayText = value.length === 3 ? value.slice(1) : value.slice(2);
  const month = Number(monthText);
  const day = Number(dayText);
  return month < 1 || month > 12 || day < 1 || day > 31 ? null : { day, month };
}
