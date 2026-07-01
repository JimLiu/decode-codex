// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Fetches the post-login Statsig bootstrap payload over the host RPC bridge,
// validates it, and races the request against a hard timeout.
import { z } from "zod";
import { requestStatsigBootstrapPayload } from "../boundaries/onboarding-commons-externals.facade";

const POST_LOGIN_BOOTSTRAP_TIMEOUT_MS = 5000;

// StatsigUser custom values mirror @statsig/client-core: scalars plus string/number arrays.
const statsigUserCustomValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.string()),
  z.array(z.number()),
]);

const statsigUserSchema = z
  .object({
    userID: z.string().optional(),
    customIDs: z.record(z.string(), z.string().optional()).optional(),
    email: z.string().optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
    country: z.string().optional(),
    locale: z.string().optional(),
    appVersion: z.string().optional(),
    custom: z.record(z.string(), statsigUserCustomValueSchema).optional(),
    privateAttributes: z
      .record(z.string(), statsigUserCustomValueSchema)
      .nullable()
      .optional(),
    analyticsOnlyMetadata: z
      .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
      .optional(),
  })
  .passthrough();

const statsigBootstrapPayloadSchema = z
  .object({ user: statsigUserSchema })
  .passthrough();

export type StatsigBootstrapUser = z.infer<typeof statsigUserSchema>;

export interface PostLoginStatsigBootstrapParams {
  appSessionId: string | undefined;
  appVersion: string | undefined;
  brandName: string;
  buildFlavor: string | undefined;
  locale: string | undefined;
  stableId: string | undefined;
  systemName: string | undefined;
  systemVersion: string | undefined;
  windowType: string;
}

export interface PostLoginStatsigBootstrap {
  statsigPayload: string;
  user: StatsigBootstrapUser;
}

export async function fetchPostLoginStatsigBootstrap(
  params: PostLoginStatsigBootstrapParams,
): Promise<PostLoginStatsigBootstrap> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  try {
    const { statsigPayload } = (await Promise.race([
      requestStatsigBootstrapPayload({
        app_session_id: params.appSessionId,
        app_version: params.appVersion,
        brand_name: params.brandName,
        build_flavor: params.buildFlavor,
        locale: params.locale,
        stable_id: params.stableId,
        system_name: params.systemName,
        system_version: params.systemVersion,
        window_type: params.windowType,
      }),
      new Promise<never>((_resolve, reject) => {
        timeoutId = globalThis.setTimeout(() => {
          reject(
            new Error("Timed out while fetching post-login Statsig bootstrap"),
          );
        }, POST_LOGIN_BOOTSTRAP_TIMEOUT_MS);
      }),
    ])) as { statsigPayload: string };
    const { user } = statsigBootstrapPayloadSchema.parse(
      JSON.parse(statsigPayload),
    );
    return { statsigPayload, user };
  } finally {
    if (timeoutId != null) globalThis.clearTimeout(timeoutId);
  }
}
