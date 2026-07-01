// Restored from ref/webview/assets/plugin-detail-page-B_JVFW0l.js
// Current-ref compatibility surface for plugin detail, backed by semantic helpers where restored.

import * as pluginDetailPageBundle from "../../vendor/plugin-detail-page-current-bundle";
import {
  PLUGIN_DETAIL_COPY_LINK_RESET_MS,
  PLUGIN_DETAIL_INSTALL_PROGRESS_RESET_MS,
  initPluginDetailPageMessagesChunk,
  pluginDetailPageMessages,
} from "../../plugins/plugin-detail-page-runtime/messages";
import {
  buildInstalledSkillDisplayEntries,
  collectGitMarketplaceNames,
  collectMarketplaceNames,
  filterAppsByQuery,
  filterConfiguredMarketplacesByQuery,
  filterInstalledSkillsByQuery,
  filterInstalledSkillsOutsideRecommendations,
  filterRecommendedSkillsForInstall,
  filterSkillDefinitionsByQuery,
  findInstalledSkillForRecommendedSkill,
  initPluginDirectorySearchRuntimeChunk,
  isConfiguredUserMarketplace,
  isRecommendedSkillInstalled,
  parsePluginDirectoryInitialTab,
  partitionAppsByAccessibility,
  selectResultKeysForTab,
  selectUninstalledRecommendedSkills,
  sortFeaturedAppsFirst,
  formatMarketplaceDisplayName,
} from "../../plugins/plugin-detail-page-runtime/search";

function initPluginDetailPageChunk(): void {
  pluginDetailPageBundle.n();
  initPluginDetailPageMessagesChunk();
  initPluginDirectorySearchRuntimeChunk();
}

const pluginDetailMessages = pluginDetailPageMessages;
const pluginDetailCopyLinkResetMs = PLUGIN_DETAIL_COPY_LINK_RESET_MS;
const pluginDetailInstallProgressResetMs =
  PLUGIN_DETAIL_INSTALL_PROGRESS_RESET_MS;

const pluginDetailPageDollar = filterConfiguredMarketplacesByQuery;
const pluginDetailPageA = pluginDetailPageBundle.A;
const pluginDetailPageB = pluginDetailPageBundle.B;
const pluginDetailPageC = pluginDetailPageBundle.C;
const pluginDetailPageD = pluginDetailPageBundle.D;
const pluginDetailPageE = pluginDetailPageBundle.E;
const pluginDetailPageF = pluginDetailPageBundle.F;
const pluginDetailPageG = initPluginDirectorySearchRuntimeChunk;
const pluginDetailPageH = collectMarketplaceNames;
const pluginDetailPageI = pluginDetailPageBundle.I;
const pluginDetailPageJ = isRecommendedSkillInstalled;
const pluginDetailPageK = isConfiguredUserMarketplace;
const pluginDetailPageL = pluginDetailPageBundle.L;
const pluginDetailPageM = pluginDetailPageBundle.M;
const pluginDetailPageN = pluginDetailPageBundle.N;
const pluginDetailPageO = pluginDetailPageBundle.O;
const pluginDetailPageP = pluginDetailPageBundle.P;
const pluginDetailPageQ = filterInstalledSkillsByQuery;
const pluginDetailPageR = pluginDetailPageBundle.R;
const pluginDetailPageS = pluginDetailPageBundle.S;
const _pluginDetailPageT = pluginDetailPageBundle.T;
const pluginDetailPageU = findInstalledSkillForRecommendedSkill;
const pluginDetailPageV = collectGitMarketplaceNames;
const pluginDetailPageW = formatMarketplaceDisplayName;
const pluginDetailPageX = selectResultKeysForTab;
const pluginDetailPageY = partitionAppsByAccessibility;
const pluginDetailPageZ = filterAppsByQuery;
const pluginDetailPageUnderscore = pluginDetailPageBundle._;
const pluginDetailPageT = pluginDetailPageBundle._t;
const _pluginDetailPageA = pluginDetailPageBundle.a;
const pluginDetailPageAt = parsePluginDirectoryInitialTab;
const _pluginDetailPageB = pluginDetailPageBundle.b;
const _pluginDetailPageC = pluginDetailPageBundle.c;
const pluginDetailPageCt = initPluginDirectorySearchRuntimeChunk;
const _pluginDetailPageD = pluginDetailPageBundle.d;
const pluginDetailPageDt = pluginDetailPageBundle.dt;
const pluginDetailPageEt = filterSkillDefinitionsByQuery;
const _pluginDetailPageF = pluginDetailPageBundle.f;
const pluginDetailPageFt = pluginDetailPageBundle.ft;
const _pluginDetailPageG = pluginDetailPageBundle.g;
const pluginDetailPageGt = pluginDetailPageBundle.gt;
const _pluginDetailPageH = pluginDetailPageBundle.h;
const pluginDetailPageHt = pluginDetailPageBundle.ht;
const _pluginDetailPageI = pluginDetailPageBundle.i;
const pluginDetailPageIt = filterRecommendedSkillsForInstall;
const _pluginDetailPageJ = pluginDetailPageBundle.j;
const _pluginDetailPageK = pluginDetailPageBundle.k;
const _pluginDetailPageL = pluginDetailPageBundle.l;
const pluginDetailPageLt = pluginDetailPageBundle.lt;
const _pluginDetailPageM = pluginDetailPageBundle.m;
const pluginDetailPageMt = pluginDetailPageBundle.mt;
const _pluginDetailPageN = initPluginDetailPageChunk;
const pluginDetailPageNt = sortFeaturedAppsFirst;
const _pluginDetailPageO = pluginDetailPageBundle.o;
const pluginDetailPageOt = pluginDetailPageBundle.ot;
const _pluginDetailPageP = pluginDetailPageBundle.p;
const pluginDetailPagePt = pluginDetailPageBundle.pt;
const _pluginDetailPageQ = isConfiguredUserMarketplace;
const _pluginDetailPageR = pluginDetailPageBundle.r;
const pluginDetailPageRt = selectUninstalledRecommendedSkills;
const _pluginDetailPageS = pluginDetailPageBundle.s;
const pluginDetailPageSt = pluginDetailPageBundle.st;
const __pluginDetailPageT = pluginDetailPageBundle.t;
const pluginDetailPageTt = filterInstalledSkillsOutsideRecommendations;
const _pluginDetailPageU = pluginDetailPageBundle.u;
const pluginDetailPageUt = pluginDetailPageBundle.ut;
const _pluginDetailPageV = pluginDetailPageBundle.v;
const pluginDetailPageVt = pluginDetailPageBundle.vt;
const _pluginDetailPageW = pluginDetailPageBundle.w;
const _pluginDetailPageX = pluginDetailPageBundle.x;
const _pluginDetailPageY = pluginDetailPageBundle.y;
const pluginDetailPageYt = pluginDetailPageBundle.yt;
const _pluginDetailPageZ = pluginDetailPageBundle.z;

export {
  __pluginDetailPageT,
  _pluginDetailPageA,
  _pluginDetailPageB,
  _pluginDetailPageC,
  _pluginDetailPageD,
  _pluginDetailPageF,
  _pluginDetailPageG,
  _pluginDetailPageH,
  _pluginDetailPageI,
  _pluginDetailPageJ,
  _pluginDetailPageK,
  _pluginDetailPageL,
  _pluginDetailPageM,
  _pluginDetailPageN,
  _pluginDetailPageO,
  _pluginDetailPageP,
  _pluginDetailPageQ,
  _pluginDetailPageR,
  _pluginDetailPageS,
  _pluginDetailPageT,
  _pluginDetailPageU,
  _pluginDetailPageV,
  _pluginDetailPageW,
  _pluginDetailPageX,
  _pluginDetailPageY,
  _pluginDetailPageZ,
  pluginDetailCopyLinkResetMs,
  pluginDetailInstallProgressResetMs,
  pluginDetailMessages,
  pluginDetailPageAt,
  pluginDetailPageA,
  pluginDetailPageB,
  pluginDetailPageC,
  pluginDetailPageCt,
  pluginDetailPageD,
  pluginDetailPageDollar,
  pluginDetailPageDt,
  pluginDetailPageE,
  pluginDetailPageEt,
  pluginDetailPageF,
  pluginDetailPageFt,
  pluginDetailPageG,
  pluginDetailPageGt,
  pluginDetailPageH,
  pluginDetailPageHt,
  pluginDetailPageI,
  pluginDetailPageIt,
  pluginDetailPageJ,
  pluginDetailPageK,
  pluginDetailPageL,
  pluginDetailPageLt,
  pluginDetailPageM,
  pluginDetailPageMt,
  pluginDetailPageN,
  pluginDetailPageNt,
  pluginDetailPageO,
  pluginDetailPageOt,
  pluginDetailPageP,
  pluginDetailPagePt,
  pluginDetailPageQ,
  pluginDetailPageR,
  pluginDetailPageRt,
  pluginDetailPageS,
  pluginDetailPageSt,
  pluginDetailPageT,
  pluginDetailPageTt,
  pluginDetailPageU,
  pluginDetailPageUnderscore,
  pluginDetailPageUt,
  pluginDetailPageV,
  pluginDetailPageVt,
  pluginDetailPageW,
  pluginDetailPageX,
  pluginDetailPageY,
  pluginDetailPageYt,
  pluginDetailPageZ,
};
