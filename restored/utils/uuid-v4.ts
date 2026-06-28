// Restored from ref/webview/assets/v4-DPIb8GyG.js
// v4-DPIb8GyG chunk restored from the Codex webview bundle.
type RandomBytes = ArrayLike<number> & {
  [index: number]: number;
  length: number;
};

type UuidV4Options = {
  random?: RandomBytes;
  rng?: () => RandomBytes;
};

const BYTE_TO_HEX: string[] = [];
for (let index = 0; index < 256; index += 1) {
  BYTE_TO_HEX.push((index + 256).toString(16).slice(1));
}

let getRandomValues: ((bytes: Uint8Array) => Uint8Array) | undefined;
const reusableRandomBytes = new Uint8Array(16);

const nativeUuid = {
  randomUUID:
    typeof crypto !== "undefined" &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto),
};

export function uuidV4<T extends Uint8Array | number[]>(
  options?: UuidV4Options,
  buffer?: T,
  offset: number = 0,
): string | T {
  if (nativeUuid.randomUUID && !buffer && !options) {
    return nativeUuid.randomUUID();
  }

  options ||= {};
  const randomBytes = options.random ?? options.rng?.() ?? rng();
  if (randomBytes.length < 16) {
    throw Error("Random bytes length must be >= 16");
  }

  const uuidBytes = Array.from(randomBytes.slice(0, 16));
  uuidBytes[6] = (uuidBytes[6] & 0x0f) | 0x40;
  uuidBytes[8] = (uuidBytes[8] & 0x3f) | 0x80;

  if (buffer) {
    if (offset < 0 || offset + 16 > buffer.length) {
      throw RangeError(
        `UUID byte range ${offset}:${offset + 15} is out of buffer bounds`,
      );
    }
    for (let index = 0; index < 16; index += 1) {
      buffer[offset + index] = uuidBytes[index]!;
    }
    return buffer;
  }

  return stringifyUuid(uuidBytes);
}

function stringifyUuid(bytes: RandomBytes, offset = 0): string {
  return (
    BYTE_TO_HEX[bytes[offset]] +
    BYTE_TO_HEX[bytes[offset + 1]] +
    BYTE_TO_HEX[bytes[offset + 2]] +
    BYTE_TO_HEX[bytes[offset + 3]] +
    "-" +
    BYTE_TO_HEX[bytes[offset + 4]] +
    BYTE_TO_HEX[bytes[offset + 5]] +
    "-" +
    BYTE_TO_HEX[bytes[offset + 6]] +
    BYTE_TO_HEX[bytes[offset + 7]] +
    "-" +
    BYTE_TO_HEX[bytes[offset + 8]] +
    BYTE_TO_HEX[bytes[offset + 9]] +
    "-" +
    BYTE_TO_HEX[bytes[offset + 10]] +
    BYTE_TO_HEX[bytes[offset + 11]] +
    BYTE_TO_HEX[bytes[offset + 12]] +
    BYTE_TO_HEX[bytes[offset + 13]] +
    BYTE_TO_HEX[bytes[offset + 14]] +
    BYTE_TO_HEX[bytes[offset + 15]]
  ).toLowerCase();
}

function rng(): Uint8Array {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
      );
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(reusableRandomBytes);
}
