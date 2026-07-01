// Restored from ref/.vite/build/src-CoIhwwHr.js
// Environment cleanup helpers shared by Node subprocess launchers.

const crashReporterEnv = new Set([
  "BREAKPAD_DUMP_LOCATION",
  "CHROME_CRASHPAD_PIPE_NAME",
  "CRASHPAD_HANDLER_PID",
  "ELECTRON_CRASH_REPORTER_PROCESS_TYPE",
]);

export function removeCrashReporterEnv<
  T extends Record<string, string | undefined>,
>(env: T): T {
  const cloned = { ...env };
  for (const key of Object.keys(cloned)) {
    if (crashReporterEnv.has(key.toUpperCase())) delete cloned[key];
  }
  return cloned;
}
