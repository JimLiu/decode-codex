// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Statsig SDK networkOverrideFunc: routes Statsig HTTP traffic through the host
// request bridge (IPC) instead of fetch, base64-encoding binary request bodies.
import {
  hostRequestBridge,
  HostRequestError,
  statsigBase64BodyHeaderName,
} from "../boundaries/onboarding-commons-externals.facade";

export interface StatsigNetworkRequestInit {
  method?: string;
  body?: BodyInit | ArrayBuffer | ArrayBufferView | null;
  headers?: HeadersInit;
  signal?: AbortSignal | null;
}

interface HostBridgeResponse {
  status: number;
  headers?: Record<string, string>;
  body?: unknown;
}

interface EncodedRequestBody {
  body: string | undefined;
  isBase64: boolean;
}

export async function statsigNetworkOverride(
  url: string,
  init: StatsigNetworkRequestInit,
): Promise<Response> {
  const bridge = hostRequestBridge.getInstance();
  const method = init.method ?? "GET";
  const { body, isBase64 } = await encodeStatsigRequestBody(init.body);
  const forwardedHeaders = Object.fromEntries(
    new Headers(init.headers).entries(),
  );
  const headers: Record<string, string> = {
    "content-type": "application/json",
    ...forwardedHeaders,
    ...(isBase64 ? { [statsigBase64BodyHeaderName]: "1" } : {}),
  };

  try {
    const response: HostBridgeResponse = await bridge.sendRequest(method, url, {
      body,
      headers,
      signal: init.signal ?? undefined,
    });
    if (response.status === 204) {
      return new Response(null, { status: response.status });
    }
    let responseHeaders: Headers | undefined;
    const rawHeaders = response.headers;
    if (rawHeaders && (rawHeaders as { length?: number }).length) {
      responseHeaders = new Headers();
      for (const [name, value] of Object.entries(rawHeaders)) {
        responseHeaders.set(name, value);
      }
    }
    const rawBody = response.body;
    const responseBody =
      typeof rawBody === "string"
        ? rawBody
        : rawBody == null
          ? null
          : JSON.stringify(rawBody);
    return new Response(responseBody, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    if (error instanceof HostRequestError) {
      return new Response(error.message, { status: error.status });
    }
    throw error;
  }
}

async function encodeStatsigRequestBody(
  body: StatsigNetworkRequestInit["body"],
): Promise<EncodedRequestBody> {
  if (body == null) return { body: undefined, isBase64: false };
  if (typeof body === "string") return { body, isBase64: false };
  if (body instanceof URLSearchParams) {
    return { body: body.toString(), isBase64: false };
  }
  if (typeof Blob !== "undefined" && body instanceof Blob) {
    return { body: await body.text(), isBase64: false };
  }
  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    return { body: arrayBufferToBase64(body), isBase64: true };
  }
  return {
    body:
      typeof body === "string" ? body : (JSON.stringify(body) ?? ""),
    isBase64: false,
  };
}

function arrayBufferToBase64(buffer: ArrayBuffer | ArrayBufferView): string {
  const bytes =
    buffer instanceof ArrayBuffer
      ? new Uint8Array(buffer)
      : new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  let binary = "";
  const chunkSize = 32768;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, offset + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}
