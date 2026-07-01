// Restored from ref/.vite/build/src-CoIhwwHr.js
// Lightweight TOML parser used by the shared-node runtime facade.

export function parseTomlConfig(text: string): Record<string, unknown> {
  const root: Record<string, unknown> = {};
  let current = root;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = stripTomlComment(rawLine).trim();
    if (!line) continue;
    if (line.startsWith("[") && line.endsWith("]")) {
      const tablePath = line.slice(1, -1).trim();
      current = ensureTomlObjectPath(root, splitTomlKey(tablePath));
      continue;
    }
    const equalsIndex = findTomlEquals(line);
    if (equalsIndex < 0) continue;
    const keyPath = splitTomlKey(line.slice(0, equalsIndex).trim());
    const value = parseTomlValue(line.slice(equalsIndex + 1).trim());
    setTomlPath(current, keyPath, value);
  }
  return root;
}

function stripTomlComment(line: string): string {
  let quote: '"' | "'" | null = null;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "#" && quote == null) return line.slice(0, index);
  }
  return line;
}

function findTomlEquals(line: string): number {
  let quote: '"' | "'" | null = null;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "=" && quote == null) return index;
  }
  return -1;
}

function splitTomlKey(key: string): string[] {
  return key
    .split(".")
    .map((part) => part.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function ensureTomlObjectPath(
  root: Record<string, unknown>,
  keyPath: string[],
): Record<string, unknown> {
  let current = root;
  for (const key of keyPath) {
    const next = current[key];
    if (typeof next === "object" && next != null && !Array.isArray(next)) {
      current = next as Record<string, unknown>;
      continue;
    }
    const created: Record<string, unknown> = {};
    current[key] = created;
    current = created;
  }
  return current;
}

function setTomlPath(
  root: Record<string, unknown>,
  keyPath: string[],
  value: unknown,
): void {
  if (keyPath.length === 0) return;
  const parent = ensureTomlObjectPath(root, keyPath.slice(0, -1));
  parent[keyPath[keyPath.length - 1]] = value;
}

function parseTomlValue(value: string): unknown {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value.startsWith('"') && value.endsWith('"')) {
    return JSON.parse(value);
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1);
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    return parseTomlArray(value.slice(1, -1));
  }
  if (/^[+-]?\d+$/.test(value)) return Number.parseInt(value, 10);
  if (/^[+-]?\d+\.\d+$/.test(value)) return Number.parseFloat(value);
  return value;
}

function parseTomlArray(value: string): unknown[] {
  const items: string[] = [];
  let quote: '"' | "'" | null = null;
  let start = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === "\\" && quote === '"') {
      index += 1;
      continue;
    }
    if ((char === '"' || char === "'") && quote == null) {
      quote = char;
      continue;
    }
    if (char === quote) {
      quote = null;
      continue;
    }
    if (char === "," && quote == null) {
      items.push(value.slice(start, index).trim());
      start = index + 1;
    }
  }
  const tail = value.slice(start).trim();
  if (tail) items.push(tail);
  return items.map(parseTomlValue);
}
