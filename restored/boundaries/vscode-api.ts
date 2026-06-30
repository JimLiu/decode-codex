// Restored from ref/webview/assets/vscode-api-Cp_DWew0.js
// VS Code bridge, query helpers, and logging facade for restored chunks.
import * as React from "react";

type QueryKey = readonly unknown[];
type QueryOptions<T = unknown> = {
  enabled?: boolean;
  initialData?: T;
  placeholderData?: T;
  queryFn?: () => T | Promise<T>;
  queryKey?: QueryKey;
  refetchOnWindowFocus?: boolean;
  retry?: number | boolean;
  select?: (data: T) => unknown;
  staleTime?: number;
};
type MutationOptions<TVariables = unknown, TResult = unknown> = {
  mutationFn?: (variables: TVariables) => TResult | Promise<TResult>;
  onError?: (error: unknown, variables: TVariables, context?: unknown) => void;
  onMutate?: (variables: TVariables) => unknown | Promise<unknown>;
  onSuccess?: (
    result: TResult,
    variables: TVariables,
    context?: unknown,
  ) => void;
};
type VscodeResponse<T = unknown> = {
  body: T;
  headers: Record<string, string>;
  status: number;
};
type HostMessageHandler = (message: unknown) => void;

const queryData = new Map<string, unknown>();

function keyToString(queryKey: unknown): string {
  return JSON.stringify(queryKey ?? []);
}

export class _vscodeApiC extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly errorCode?: string | null,
    readonly details?: unknown,
  ) {
    super(message);
    this.name = "VscodeApiError";
  }
}

export function initVscodeApiRuntime(): void {}

export const vscodeApiF = {
  dispatchHostMessage(message: unknown): void {
    this.postMessage(message);
  },
  dispatchMessage(type: string, payload: unknown = {}): void {
    this.postMessage({ type, ...((payload as object) ?? {}) });
  },
  postMessage(message: unknown): void {
    const acquire = (
      globalThis as {
        acquireVsCodeApi?: () => { postMessage(message: unknown): void };
      }
    ).acquireVsCodeApi;
    acquire?.().postMessage(message);
  },
};

export class VscodeHostMessageBridge {
  private static instance: VscodeHostMessageBridge | null = null;

  static getInstance(): VscodeHostMessageBridge {
    VscodeHostMessageBridge.instance ??= new VscodeHostMessageBridge();
    return VscodeHostMessageBridge.instance;
  }

  subscribe(type: string, handler: HostMessageHandler): () => void {
    const listener = (event: MessageEvent) => {
      const message = event.data as { type?: string } | undefined;
      if (message?.type === type) handler(message);
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }
}

export const vscodeApiD = VscodeHostMessageBridge;
export const _vscodeApiD = VscodeHostMessageBridge;

export function vscodeApiP<TMessage = unknown>(
  type: string,
  handler: (message: TMessage) => void,
  deps: React.DependencyList = [],
): void {
  React.useEffect(() => {
    return VscodeHostMessageBridge.getInstance().subscribe(type, (message) => {
      handler(message as TMessage);
    });
  }, [type, ...deps]);
}

export const vscodeApiH = {
  debug(_message: string, _context?: unknown): void {},
  error(_message: string, _context?: unknown): void {},
  info(_message: string, _context?: unknown): void {},
  warn(_message: string, _context?: unknown): void {},
};
export const vscodeLogger = vscodeApiH;
export const vscodeApiT = vscodeApiH;

export async function callCodexVscodeApi<T = unknown>(
  command: string,
  params?: unknown,
): Promise<T> {
  vscodeApiF.dispatchMessage(command, { params });
  return undefined as T;
}

export const vscodeApiN = callCodexVscodeApi;

export class vscodeApiL {
  private static instance: vscodeApiL | null = null;
  static getInstance(): vscodeApiL {
    vscodeApiL.instance ??= new vscodeApiL();
    return vscodeApiL.instance;
  }
  async get<T = unknown>(
    _url: string,
    _headers?: Record<string, string>,
  ): Promise<VscodeResponse<T>> {
    return this.emptyResponse<T>();
  }
  async post<T = unknown>(
    _url: string,
    _body?: unknown,
    _headers?: Record<string, string>,
  ): Promise<VscodeResponse<T>> {
    return this.emptyResponse<T>();
  }
  async sendRequest<T = unknown>(
    _method: string,
    _url: string,
    _options?: { body?: unknown; headers?: Record<string, string> },
  ): Promise<VscodeResponse<T>> {
    return this.emptyResponse<T>();
  }
  stream(_method: string, _url: string, _options?: unknown): string {
    return `stream:${Date.now()}`;
  }
  cancelStream(_streamId: string): void {}
  private emptyResponse<T>(): VscodeResponse<T> {
    return {
      body: { text: "" } as T,
      headers: {},
      status: 200,
    };
  }
}

export const vscodeApiU = {
  FIVE_SECONDS: 5_000,
  FIVE_MINUTES: 300_000,
  ONE_MINUTE: 60_000,
  THIRTY_SECONDS: 30_000,
};

export function _vscodeApiA<T = unknown>(
  _scope: unknown,
  command: string,
  options: QueryOptions<T> = {},
): QueryOptions<T> {
  return {
    ...options,
    queryKey: options.queryKey ?? [command],
    queryFn: options.queryFn ?? (() => callCodexVscodeApi<T>(command)),
  };
}

export const createVscodeQueryOptions = _vscodeApiA;

export function vscodeApiI<TVariables = unknown, TResult = unknown>(
  scope: unknown,
  command: string,
  buildOptions: (variables: TVariables) => QueryOptions<TResult> = () => ({}),
): (variables: TVariables) => QueryOptions<TResult> {
  return (variables: TVariables) => {
    const options = buildOptions(variables);
    return {
      ...options,
      queryKey: options.queryKey ?? [command, variables],
      queryFn:
        options.queryFn ??
        (() =>
          callCodexVscodeApi<TResult>(command, {
            params: variables,
            scope,
          })),
    };
  };
}

export function vscodeApiA(): {
  cancelQueries(options?: { queryKey?: QueryKey }): Promise<void>;
  getQueriesData<T = unknown>(options?: {
    queryKey?: QueryKey;
  }): Array<[QueryKey, T]>;
  getQueryData<T = unknown>(queryKey: QueryKey): T | undefined;
  invalidateQueries(options?: { queryKey?: QueryKey }): Promise<void>;
  removeQueries(options?: { queryKey?: QueryKey }): void;
  setQueryData<T = unknown>(queryKey: QueryKey, value: T): void;
} {
  return {
    cancelQueries: async () => {},
    getQueriesData: (options) => {
      const key = keyToString(options?.queryKey);
      return [...queryData.entries()]
        .filter(([entryKey]) => entryKey.startsWith(key.slice(0, -1)))
        .map(([entryKey, value]) => [JSON.parse(entryKey), value as never]);
    },
    getQueryData: (queryKey) => queryData.get(keyToString(queryKey)) as never,
    invalidateQueries: async () => {},
    removeQueries: (options) => {
      if (!options?.queryKey) queryData.clear();
      else queryData.delete(keyToString(options.queryKey));
    },
    setQueryData: (queryKey, value) => {
      queryData.set(keyToString(queryKey), value);
    },
  };
}

export function vscodeApiV<T = unknown>(
  options: QueryOptions<T>,
): {
  data: unknown;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
  isPending: boolean;
  refetch(): Promise<{ data: unknown }>;
} {
  const cached = options.queryKey
    ? queryData.get(keyToString(options.queryKey))
    : undefined;
  const data = cached ?? options.initialData ?? options.placeholderData;
  return {
    data:
      options.select && data !== undefined ? options.select(data as T) : data,
    error: null,
    isError: false,
    isLoading: false,
    isPending: false,
    refetch: async () => ({ data }),
  };
}

export function vscodeApiUnderscore<TVariables = unknown, TResult = unknown>(
  options: MutationOptions<TVariables, TResult>,
): {
  isPending: boolean;
  mutate(variables: TVariables): void;
  mutateAsync(variables: TVariables): Promise<TResult>;
} {
  const mutateAsync = async (variables: TVariables): Promise<TResult> => {
    const context = await options.onMutate?.(variables);
    try {
      const result = (await options.mutationFn?.(variables)) as TResult;
      options.onSuccess?.(result, variables, context);
      return result;
    } catch (error) {
      options.onError?.(error, variables, context);
      throw error;
    }
  };
  return {
    isPending: false,
    mutate: (variables) => {
      void mutateAsync(variables);
    },
    mutateAsync,
  };
}

export function vscodeApiS<TVariables = unknown, TResult = unknown>(
  commandOrOptions: string | MutationOptions<TVariables, TResult>,
  options: MutationOptions<TVariables, TResult> = {},
): ReturnType<typeof vscodeApiUnderscore<TVariables, TResult>> {
  return typeof commandOrOptions === "string"
    ? vscodeApiUnderscore({
        ...options,
        mutationFn:
          options.mutationFn ??
          ((variables: TVariables) =>
            callCodexVscodeApi<TResult>(commandOrOptions, {
              params: variables,
            })),
      })
    : vscodeApiUnderscore(commandOrOptions);
}

export const _vscodeApiS = vscodeApiS;

export function vscodeApiO<T = unknown>(
  commandOrOptions: string | QueryOptions<T>,
  options: QueryOptions<T> = {},
): ReturnType<typeof vscodeApiV<T>> {
  return typeof commandOrOptions === "string"
    ? vscodeApiV(_vscodeApiA(null, commandOrOptions, options))
    : vscodeApiV(commandOrOptions);
}

export const _vscodeApiO = vscodeApiO;
export const vscodeApiR = (...parts: unknown[]): QueryKey => parts;
