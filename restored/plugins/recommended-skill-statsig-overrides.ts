// Restored from ref/webview/assets/recommended-skill-statsig-overrides-D2T8Gp66.js
// Also matches ref/webview/assets/recommended-skill-statsig-overrides-B_jnuULm.js and ref/webview/assets/recommended-skill-statsig-overrides-fCzT8bPX.js.
// Also matches ref/webview/assets/recommended-skill-statsig-overrides-CaQK62gR.js.
import * as React from "react";
import { useDynamicConfig } from "@statsig/react-bindings";
import * as zodRuntime from "../boundaries/src-l0hb-mz-p";
import { once } from "../runtime/commonjs-interop";
type RecommendedSkillStatsigOverrides = Record<string, string>;
const RECOMMENDED_SKILL_OVERRIDES_CONFIG_ID = "1852350085";
const nonEmptySkillMarkdownSchema = zodRuntime
  .srcAa()
  .refine((value: string) => value.trim().length > 0);
const recommendedSkillOverridesSchema = zodRuntime
  .srcTa({
    skill_markdown_by_id: zodRuntime
      .srcOa(zodRuntime.srcAa(), zodRuntime._srcMa())
      .optional(),
  })
  .catch({
    skill_markdown_by_id: {},
  });
export const initRecommendedSkillStatsigOverridesChunk = once(() => {});
function parseRecommendedSkillStatsigOverrides(
  value: unknown,
): RecommendedSkillStatsigOverrides {
  const overrides: RecommendedSkillStatsigOverrides = {};
  const parsedConfig = recommendedSkillOverridesSchema.parse(value);
  for (const [skillId, markdown] of Object.entries(
    parsedConfig.skill_markdown_by_id ?? {},
  )) {
    const parsedMarkdown = nonEmptySkillMarkdownSchema.safeParse(markdown);
    if (parsedMarkdown.success) {
      overrides[skillId] = parsedMarkdown.data;
    }
  }
  return overrides;
}
function useRecommendedSkillStatsigOverrides() {
  const { value } = useDynamicConfig(RECOMMENDED_SKILL_OVERRIDES_CONFIG_ID);
  return React.useMemo(
    () => parseRecommendedSkillStatsigOverrides(value),
    [value],
  );
}
function getRecommendedSkillStatsigOverride(
  overrides: RecommendedSkillStatsigOverrides,
  skillId: string,
) {
  return overrides[skillId];
}
export {
  useRecommendedSkillStatsigOverrides,
  getRecommendedSkillStatsigOverride,
};
