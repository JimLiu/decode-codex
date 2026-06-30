// Restored from ref/webview/assets/use-recommended-skills-Dpf-Uwom.js
// Also matches ref/webview/assets/use-recommended-skills-CV2-DQzf.js.
import * as React from "react";
import {
  _vscodeApiO,
  _vscodeApiS,
  vscodeApiA,
  vscodeApiN,
  vscodeApiR,
  vscodeApiU,
} from "../boundaries/vscode-api";
import {
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../plugins/recommended-skill-statsig-overrides";
import { once } from "../runtime/commonjs-interop";
type RecommendedSkill = {
  id: string;
  name: string;
  repoPath?: string | null;
};
type RecommendedSkillsResponse = {
  error?: string | null;
  skills?: RecommendedSkill[];
};
type UseRecommendedSkillsOptions = {
  hostId: string;
  loadOnMount?: boolean;
};
type InstallRecommendedSkillOptions = {
  installRoot?: string | null;
  skill: RecommendedSkill;
};
export const initUseRecommendedSkillsChunk = once(() => {});
function useRecommendedSkills({
  hostId,
  loadOnMount = true,
}: UseRecommendedSkillsOptions) {
  const queryClient = vscodeApiA();
  const statsigOverrides = useRecommendedSkillStatsigOverrides();
  const queryKey = React.useMemo(
    () =>
      vscodeApiR("recommended-skills", {
        hostId,
        refresh: false,
      }),
    [hostId],
  );
  const queryParams = React.useMemo(
    () => ({
      hostId,
      refresh: false,
    }),
    [hostId],
  );
  const queryConfig = React.useMemo(
    () => ({
      enabled: loadOnMount,
      staleTime: vscodeApiU.FIVE_MINUTES,
    }),
    [loadOnMount],
  );
  const recommendedSkillsQuery = _vscodeApiO("recommended-skills", {
    params: queryParams,
    queryConfig,
  });
  const errorMessage =
    recommendedSkillsQuery.data?.error ??
    (recommendedSkillsQuery.error
      ? String(
          recommendedSkillsQuery.error.message ?? recommendedSkillsQuery.error,
        )
      : null);
  const installRecommendedSkillMutation = _vscodeApiS(
    "install-recommended-skill",
  );
  const refresh = React.useCallback(async () => {
    const refreshedSkills = await vscodeApiN("recommended-skills", {
      params: {
        hostId,
        refresh: true,
      },
    });
    queryClient.setQueryData(queryKey, refreshedSkills);
  }, [hostId, queryClient, queryKey]);
  const ensureSkillByName = React.useCallback(
    async (skillName: string) => {
      const existingSkill = findRecommendedSkill(
        recommendedSkillsQuery.data?.skills ?? [],
        skillName,
      );
      if (existingSkill) return existingSkill;
      const recommendedSkills = await vscodeApiN("recommended-skills", {
        params: {
          hostId,
          refresh: false,
        },
      });
      queryClient.setQueryData(queryKey, recommendedSkills);
      return findRecommendedSkill(recommendedSkills.skills, skillName);
    },
    [hostId, queryClient, queryKey, recommendedSkillsQuery.data?.skills],
  );
  const installSkill = React.useCallback(
    async ({ skill, installRoot = null }: InstallRecommendedSkillOptions) =>
      installRecommendedSkillMutation.mutateAsync({
        hostId,
        skillId: skill.id,
        repoPath: skill.repoPath,
        installRoot,
        skillStatsigOverride: getRecommendedSkillStatsigOverride(
          statsigOverrides,
          skill.id,
        ),
      }),
    [hostId, installRecommendedSkillMutation, statsigOverrides],
  );
  return {
    data: recommendedSkillsQuery.data as RecommendedSkillsResponse | undefined,
    errorMessage,
    isLoading: recommendedSkillsQuery.isLoading,
    refresh,
    ensureSkillByName,
    installSkill,
  };
}
function findRecommendedSkill(
  skills: RecommendedSkill[] | undefined,
  skillName: string,
) {
  const normalizedSkillName = skillName.toLowerCase();
  return (
    skills?.find((skill) => {
      const normalizedName = skill.name.toLowerCase();
      const normalizedId = skill.id.toLowerCase();
      return (
        normalizedName === normalizedSkillName ||
        normalizedId === normalizedSkillName
      );
    }) ?? null
  );
}
export { useRecommendedSkills };
