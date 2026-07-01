// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zod schemas shared by the MCP app sandbox host and frame bridge.
import { z as zod } from "zod";
import { httpsUrlSchema } from "../boundaries/onboarding-commons-externals.facade";

export const environmentStatusSchema = zod
  .object({
    status: zod.literal(2),
    type: zod.literal("environment_status"),
  })
  .passthrough();

export const openExternalRequestSchema = zod.object({
  href: httpsUrlSchema({ protocol: /^https$/ }),
});
