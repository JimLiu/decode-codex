// Restored from ref/.vite/build/main-r5HnecX_.js
// Shared worker main-RPC parameter validation helpers.

export function requireStringParam(
  params: Record<string, unknown>,
  key: string,
): string {
  const value = params[key];
  if (typeof value !== "string") {
    throw Error(`Worker main RPC param '${key}' must be a string`);
  }
  return value;
}
