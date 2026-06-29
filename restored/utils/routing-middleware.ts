// Restored from ref/webview/assets/routing-middleware-BMBY4FI3.js
// routing-middleware-n84m0mKl chunk restored from the Codex webview bundle.
type JsonObject = Record<string, any>;
type RoutingMatcher =
  | {
      type: "all";
    }
  | {
      type: "fql";
      ir?: string;
    };
type DropPropertiesTransformer = {
  type: "drop_properties";
  config: {
    drop: Record<string, string[]>;
  };
};
type AllowPropertiesTransformer = {
  type: "allow_properties";
  config: {
    allow: Record<string, string[]>;
  };
};
type MapPropertiesTransformer = {
  type: "map_properties";
  config: {
    map: Record<
      string,
      | {
          copy: string;
          to_string?: boolean;
        }
      | {
          move: string;
          to_string?: boolean;
        }
      | {
          set: any;
          to_string?: boolean;
        }
    >;
  };
};
type SampleEventTransformer = {
  type: "sample_event";
  config: {
    sample: {
      percent: number;
      path?: string;
    };
  };
};
type RoutingTransformer =
  | {
      type: "drop";
    }
  | {
      type: "hash_properties";
    }
  | DropPropertiesTransformer
  | AllowPropertiesTransformer
  | MapPropertiesTransformer
  | SampleEventTransformer;
export type RoutingRule = {
  destinationName?: string;
  matchers: RoutingMatcher[];
  transformers: RoutingTransformer[];
};
export type RoutingMiddlewarePayload = {
  obj: JsonObject | null;
};
export type RoutingMiddlewareContext = {
  payload: RoutingMiddlewarePayload;
  integration: string;
  next: (payload: RoutingMiddlewarePayload | null) => void;
};
class RoutingRuleStore {
  constructor(private readonly rules: RoutingRule[] = []) {}
  getRulesByDestinationName(destinationName: string): RoutingRule[] {
    return this.rules.filter(
      (rule) =>
        rule.destinationName === destinationName ||
        rule.destinationName === undefined,
    );
  }
}
function getPath(value: any, keyPath: string | string[], fallback?: any): any {
  const segments = Array.isArray(keyPath) ? keyPath : keyPath.split(".");
  let current = value;
  for (const segment of segments) {
    current = current ? current[segment] : fallback;
  }
  return current === fallback ? fallback : current;
}
function setPath(target: JsonObject, keyPath: string | string[], value: any) {
  const segments = Array.isArray(keyPath) ? keyPath : keyPath.split(".");
  let current: any = target;
  for (let index = 0; index < segments.length; index++) {
    const segment = segments[index];
    if (
      segment === "__proto__" ||
      segment === "constructor" ||
      segment === "prototype"
    ) {
      return;
    }
    if (index === segments.length - 1) {
      current[segment] = value;
      return;
    }
    const nextSegment = segments[index + 1];
    const existing = current[segment];
    current[segment] =
      existing && typeof existing === "object"
        ? existing
        : Number.isNaN(Number(nextSegment)) || String(nextSegment).includes(".")
          ? {}
          : [];
    current = current[segment];
  }
}
function unsetPath(target: JsonObject, keyPath: string): boolean {
  if (!getPath(target, keyPath)) return true;
  const segments = keyPath.split(".");
  let property = segments.pop();
  while (segments.length && segments[segments.length - 1].endsWith("\\")) {
    property = `${segments.pop()!.slice(0, -1)}.${property}`;
  }
  let parent: any = target;
  for (const segment of segments) parent = parent[segment];
  return delete parent[property!];
}
function expressionValue(expression: any, event: JsonObject): any {
  if (Array.isArray(expression)) return expression;
  if (typeof expression === "object" && expression !== null) {
    return expression.value;
  }
  return getPath(event, expression);
}
function isNestedExpression(expression: any): boolean {
  return (
    Array.isArray(expression) &&
    (((expression[0] === "lowercase" ||
      expression[0] === "length" ||
      expression[0] === "typeof") &&
      expression.length === 2) ||
      ((expression[0] === "contains" || expression[0] === "match") &&
        expression.length === 3))
  );
}
function compareValues(
  left: any,
  right: any,
  operator: string,
  event: JsonObject,
) {
  if (isNestedExpression(left)) left = evaluateFql(left, event);
  if (isNestedExpression(right)) right = evaluateFql(right, event);
  if (typeof left === "object" && typeof right === "object") {
    left = JSON.stringify(left);
    right = JSON.stringify(right);
  }
  switch (operator) {
    case "=":
      return left === right;
    case "!=":
      return left !== right;
    default:
      throw new Error(`Invalid operator in compareItems: ${operator}`);
  }
}
function compareNumbers(
  left: any,
  right: any,
  operator: string,
  event: JsonObject,
) {
  if (isNestedExpression(left)) left = evaluateFql(left, event);
  if (isNestedExpression(right)) right = evaluateFql(right, event);
  if (typeof left !== "number" || typeof right !== "number") return false;
  switch (operator) {
    case "<=":
      return left <= right;
    case ">=":
      return left >= right;
    case "<":
      return left < right;
    case ">":
      return left > right;
    default:
      throw new Error(`Invalid operator in compareNumbers: ${operator}`);
  }
}
function splitGlobChunk(pattern: string) {
  let inCharacterClass = false;
  let index = 0;
  for (; index < pattern.length; index++) {
    switch (pattern[index]) {
      case "\\":
        if (index + 1 < pattern.length) index++;
        break;
      case "[":
        inCharacterClass = true;
        break;
      case "]":
        inCharacterClass = false;
        break;
      case "*":
        if (!inCharacterClass) {
          return {
            chunk: pattern.slice(0, index),
            pattern: pattern.slice(index),
          };
        }
        break;
    }
  }
  return {
    chunk: pattern,
    pattern: "",
  };
}
function readGlobChar(chunk: string) {
  if (
    chunk.length === 0 ||
    chunk[0] === "-" ||
    chunk[0] === "]" ||
    (chunk[0] === "\\" && chunk.slice(1).length === 0)
  ) {
    return {
      char: "",
      newChunk: "",
      err: true,
    };
  }
  if (chunk[0] === "\\") chunk = chunk.slice(1);
  return {
    char: chunk[0],
    newChunk: chunk.slice(1),
    err: chunk.slice(1).length === 0,
  };
}
function matchGlobChunk(chunk: string, text: string) {
  const result = {
    t: "",
    ok: false,
    err: false,
  };
  while (chunk.length > 0) {
    if (text.length === 0) return result;
    switch (chunk[0]) {
      case "[": {
        const currentChar = text[0];
        text = text.slice(1);
        let positive = true;
        chunk = chunk.slice(1);
        if (chunk.length > 0 && chunk[0] === "^") {
          positive = false;
          chunk = chunk.slice(1);
        }
        let matched = false;
        let count = 0;
        for (;;) {
          if (chunk.length > 0 && chunk[0] === "]" && count > 0) {
            chunk = chunk.slice(1);
            break;
          }
          let { char: start, newChunk, err } = readGlobChar(chunk);
          chunk = newChunk;
          let end = start;
          if (!err && chunk[0] === "-") {
            const next = readGlobChar(chunk.slice(1));
            end = next.char;
            chunk = next.newChunk;
            err = next.err;
          }
          if (err) return result;
          if (start <= currentChar && currentChar <= end) matched = true;
          count++;
        }
        if (matched !== positive) return result;
        break;
      }
      case "?":
        text = text.slice(1);
        chunk = chunk.slice(1);
        break;
      case "\\":
        chunk = chunk.slice(1);
        if (chunk.length === 0)
          return {
            ...result,
            err: true,
          };
      default:
        if (chunk[0] !== text[0]) return result;
        text = text.slice(1);
        chunk = chunk.slice(1);
    }
  }
  return {
    t: text,
    ok: true,
    err: false,
  };
}
function matchGlob(pattern: string, text: string): boolean {
  let previousResult: ReturnType<typeof matchGlobChunk> | undefined;
  outer: while (pattern.length > 0) {
    let star = false;
    while (pattern.length > 0 && pattern[0] === "*") {
      pattern = pattern.slice(1);
      star = true;
    }
    const chunkInfo = splitGlobChunk(pattern);
    const chunk = chunkInfo.chunk;
    pattern = chunkInfo.pattern;
    if (star && chunk === "") return true;
    let result = matchGlobChunk(chunk, text);
    if (result.err) return false;
    if (!result.ok || !(result.t.length === 0 || pattern.length > 0)) {
      if (star) {
        for (let index = 0; index < text.length; index++) {
          result = matchGlobChunk(chunk, text.slice(index + 1));
          if (result.err) return false;
          if (result.ok) {
            if (pattern.length === 0 && result.t.length > 0) continue;
            text = result.t;
            previousResult = result;
            continue outer;
          }
        }
      }
      return false;
    }
    previousResult = result;
    text = result.t;
  }
  return (previousResult?.t ?? text).length === 0;
}
function evaluateFql(expression: any, event: JsonObject): any {
  if (!Array.isArray(expression))
    return expressionValue(expression, event) === true;
  const operator = expression[0];
  switch (operator) {
    case "!":
      return !evaluateFql(expression[1], event);
    case "or":
      return expression.slice(1).some((item: any) => evaluateFql(item, event));
    case "and":
      return expression.slice(1).every((item: any) => evaluateFql(item, event));
    case "=":
    case "!=":
      return compareValues(
        expressionValue(expression[1], event),
        expressionValue(expression[2], event),
        operator,
        event,
      );
    case "<=":
    case "<":
    case ">":
    case ">=":
      return compareNumbers(
        expressionValue(expression[1], event),
        expressionValue(expression[2], event),
        operator,
        event,
      );
    case "in":
      return (
        expressionValue(expression[2], event).find(
          (item: any) =>
            expressionValue(item, event) ===
            expressionValue(expression[1], event),
        ) !== undefined
      );
    case "contains": {
      const value = expressionValue(expression[1], event);
      const needle = expressionValue(expression[2], event);
      return (
        typeof value === "string" &&
        typeof needle === "string" &&
        value.includes(needle)
      );
    }
    case "match": {
      const value = expressionValue(expression[1], event);
      const pattern = expressionValue(expression[2], event);
      return (
        typeof value === "string" &&
        typeof pattern === "string" &&
        matchGlob(pattern, value)
      );
    }
    case "lowercase": {
      const value = expressionValue(expression[1], event);
      return typeof value === "string" ? value.toLowerCase() : null;
    }
    case "typeof":
      return typeof expressionValue(expression[1], event);
    case "length": {
      const value = expressionValue(expression[1], event);
      return value === null
        ? 0
        : Array.isArray(value) || typeof value === "string"
          ? value.length
          : Number.NaN;
    }
    default:
      throw new Error(`FQL IR could not evaluate for token: ${operator}`);
  }
}
function matches(event: JsonObject, matcher: RoutingMatcher): boolean {
  if (!matcher) throw new Error("No matcher supplied!");
  switch (matcher.type) {
    case "all":
      return true;
    case "fql": {
      if (!matcher.ir) return false;
      let ir: any;
      try {
        ir = JSON.parse(matcher.ir);
      } catch (error) {
        throw new Error(
          `Failed to JSON.parse FQL intermediate representation "${matcher.ir}": ${error}`,
        );
      }
      const result = evaluateFql(ir, event);
      return typeof result === "boolean" && result;
    }
    default:
      throw new Error(
        `Matcher of type ${
          (
            matcher as {
              type: string;
            }
          ).type
        } unsupported.`,
      );
  }
}
function visitPropertyTargets(
  event: JsonObject,
  paths: Record<string, string[]>,
  visitor: (target: JsonObject, properties: string[]) => void,
) {
  Object.entries(paths).forEach(([keyPath, properties]) => {
    const visit = (target: any) => {
      if (typeof target === "object" && target) visitor(target, properties);
    };
    const target = keyPath === "" ? event : getPath(event, keyPath);
    Array.isArray(target) ? target.forEach(visit) : visit(target);
  });
}
function dropProperties(
  event: JsonObject,
  transformer: DropPropertiesTransformer,
) {
  visitPropertyTargets(event, transformer.config.drop, (target, properties) => {
    properties.forEach((property) => delete target[property]);
  });
}
function allowProperties(
  event: JsonObject,
  transformer: AllowPropertiesTransformer,
) {
  visitPropertyTargets(
    event,
    transformer.config.allow,
    (target, properties) => {
      Object.keys(target).forEach((property) => {
        if (!properties.includes(property)) delete target[property];
      });
    },
  );
}
function mapProperties(
  event: JsonObject,
  transformer: MapPropertiesTransformer,
) {
  const snapshot = JSON.parse(JSON.stringify(event));
  for (const [targetPath, mapping] of Object.entries(transformer.config.map)) {
    const parentPath = targetPath.split(".");
    let parent: any;
    if (parentPath.length > 1) {
      parentPath.pop();
      parent = getPath(snapshot, parentPath.join("."));
    } else {
      parent = event;
    }
    if (typeof parent !== "object") continue;
    if ("copy" in mapping) {
      const value = getPath(snapshot, mapping.copy);
      if (value !== undefined) setPath(event, targetPath, value);
    } else if ("move" in mapping) {
      const value = getPath(snapshot, mapping.move);
      if (value !== undefined) setPath(event, targetPath, value);
      unsetPath(event, mapping.move);
    } else if ("set" in mapping) {
      setPath(event, targetPath, mapping.set);
    }
    if (mapping.to_string) {
      const currentValue = getPath(event, targetPath);
      if (
        typeof currentValue === "string" ||
        (typeof currentValue === "object" && currentValue)
      ) {
        continue;
      }
      setPath(
        event,
        targetPath,
        currentValue === undefined ? "undefined" : JSON.stringify(currentValue),
      );
    }
  }
}
function md5(input: string): string {
  const table: number[] = [];
  for (let index = 0; index < 64; ) {
    table[index] = (4294967296 * Math.sin(++index % Math.PI)) | 0;
  }
  let first = 1732584193;
  let second = 4023233417;
  let third = ~first;
  let fourth = ~second;
  const words: number[] = [];
  const encoded = unescape(encodeURI(input)) + "\x80";
  let length = encoded.length;
  let blockCount = ((--length / 4 + 2) | 15) as number;
  words[--blockCount] = 8 * length;
  while (length >= 0) {
    words[length >> 2] |= encoded.charCodeAt(length) << (8 * length--);
  }
  for (let block = 0; block < blockCount; block += 16) {
    let state = [first, second, third, fourth];
    let index = 0;
    while (index < 64) {
      const last = state[3];
      const group = index >> 4;
      const roundValue =
        state[0] +
        [
          (first & second) | (~first & last),
          (last & first) | (~last & second),
          first ^ second ^ last,
          second ^ (first | ~last),
        ][group] +
        table[index] +
        ~~words[
          block | ([index, 5 * index + 1, 3 * index + 5, 7 * index][group] & 15)
        ];
      const shift = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][
        4 * group + (index++ % 4)
      ];
      state = [
        last,
        first + ((roundValue << shift) | (roundValue >>> -shift)),
        first,
        second,
      ];
      first = state[1] | 0;
      second = state[2];
    }
    for (let index = 4; index; ) {
      [first, second, third, fourth][--index] += state[index];
    }
  }
  const state = [first, second, third, fourth];
  let hex = "";
  for (let index = 0; index < 32; ) {
    hex += ((state[index >> 3] >> (4 * (1 ^ index++))) & 15).toString(16);
  }
  return hex;
}
function hexToBits(hex: string, target: number[]) {
  for (let index = 0; index < 8; index++) {
    let value = Number.parseInt(hex[index], 16);
    for (let mask = 128; mask >= 1; mask /= 2) {
      if (value - mask >= 0) {
        value -= mask;
        target.push(1);
      } else {
        target.push(0);
      }
    }
  }
}
function hashFraction(value: any): number {
  const hash = md5(JSON.stringify(value));
  const bits: number[] = [];
  hexToBits(hash.slice(0, 8), bits);
  let leadingZeroes = 0;
  for (; leadingZeroes < 64 && bits[leadingZeroes] !== 1; leadingZeroes++) {}
  if (leadingZeroes !== 0) {
    const nextBits: number[] = [];
    hexToBits(hash.slice(9, 16), nextBits);
    bits.splice(0, leadingZeroes);
    nextBits.splice(64 - leadingZeroes);
    bits.push(...nextBits);
  }
  bits[63] = bits[63] === 0 ? 1 : 0;
  return Number.parseInt(bits.join(""), 2) / Number.MAX_SAFE_INTEGER;
}
function shouldSample(
  event: JsonObject,
  transformer: SampleEventTransformer,
): boolean {
  const { sample } = transformer.config;
  if (sample.percent <= 0) return false;
  if (sample.percent >= 1) return true;
  if (!sample.path) return Math.random() <= sample.percent;
  return hashFraction(getPath(event, sample.path)) < sample.percent;
}
function transform(event: JsonObject, transformers: RoutingTransformer[]) {
  let transformed: JsonObject | null = event;
  for (const transformer of transformers) {
    switch (transformer.type) {
      case "drop":
        return null;
      case "drop_properties":
        dropProperties(transformed, transformer);
        break;
      case "allow_properties":
        allowProperties(transformed, transformer);
        break;
      case "sample_event":
        if (shouldSample(transformed, transformer)) break;
        return null;
      case "map_properties":
        mapProperties(transformed, transformer);
        break;
      case "hash_properties":
        break;
      default:
        throw new Error(
          `Transformer of type "${
            (
              transformer as {
                type: string;
              }
            ).type
          }" is unsupported.`,
        );
    }
  }
  return transformed;
}
export function tsubMiddleware(rules: RoutingRule[]) {
  return ({ payload, integration, next }: RoutingMiddlewareContext): void => {
    new RoutingRuleStore(rules)
      .getRulesByDestinationName(integration)
      .forEach((rule) => {
        for (let index = 0; index < rule.matchers.length; index++) {
          if (payload.obj && matches(payload.obj, rule.matchers[index])) {
            payload.obj = transform(payload.obj, rule.transformers);
            if (payload.obj === null) return next(null);
          }
        }
      });
    next(payload);
  };
}
