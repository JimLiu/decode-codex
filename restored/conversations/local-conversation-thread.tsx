// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Public draft for the local conversation thread feature chunk. Key exported APIs have semantic names; unresolved current-ref producer imports are isolated under boundaries/current-ref until those chunks are deep-restored.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../utils/thread-user-message-navigation-rail",
      "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-Dlqz5rpw.css",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js",
      "./app-initial~app-main~worktree-init-v2-page~page~remote-conversation-page~pull-requests-page~iwrno211-6533k2dw.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~kyb0i2zb-B27VQcu6.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-WQSs2b8C.css",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-Cm9kT9_E.css",
      "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js",
      "./app-initial~app-main~home-ambient-suggestions-content-CGzLiN5i.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~d8kqmdjz-CVODqLRv.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-CaqfCcJP.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~o4yhvtva-BI3OQbB8.css",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~l5ab2ey0-8q2fQ40X.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62-JuRN2k_O.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~lxml58r4-kB1QbLtZ.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~hngpswmm-DIEMgkYM.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-DpdAZZiY.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~plan-su~hu7x0wyd-BhOGlSiR.css",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~bgpm80n3-Br-I5tHC.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ozpabocf-B_lr_-Fk.js",
      "./app-initial~app-main~onboarding-page~profile-XXCan5-r.css",
      "./thread-scroll-controller-context-value-Cl6S6mDJ.js",
      "./thread-user-message-navigation-rail-CX3TkeeC.css",
      "./conversation-markdown-BjFKV53f.js",
    ]),
) => i.map((item) => d[item]);
import { once, toEsModule } from "../runtime/commonjs-interop";
import {
  $N as initVscodeApiBridge,
  $P as initAppScope,
  $h as getHostConfigKey,
  $j as initStatsigGateSignals,
  $p as modelProviderSignal,
  AB as initScopeRuntime,
  AI as getLocalConversationPath,
  AL as preloadDynamicImport,
  AN as initSpinnerComponent,
  AO as PULL_REQUEST_FIX_PROMPT_PREAMBLE,
  AP as motion,
  AV as initReactQueryRuntime,
  Ai as initDialogLayoutComponents,
  Al as initComposerScope,
  Am as conversationWorkspaceRootSignal,
  Ao as initGitBranchIcon,
  Ap as needsResumeActiveThreadSignal,
  Au as initOsInfoQuery,
  BP as classNames,
  BV as getJsxRuntime,
  Bh as useHostMutation,
  Bn as initGlobalCommandHandlers,
  CP as animateSignalValue,
  DL as normalizeWorkspacePath,
  DM as initWindowZoomContext,
  DN as Button,
  Di as DialogSection,
  Dj as joinPath,
  Dl as createLocalConversationRouteTarget,
  Dp as conversationRemoteHostIdSignal,
  Ei as DialogHeader,
  Em as conversationTurnsSignal,
  Ep as conversationUnreadSignal,
  Es as browserSidebarEnabledSignal,
  Ev as useLocation,
  FB as useScope,
  Fp as expiredSideChatSignal,
  Fx as initEnvironmentTerminalController,
  GE as initLocalHostConstants,
  Ga as initElectronPlatformContent,
  Gi as DropdownMenu,
  Gj as initStatsigFeatureGateHooks,
  Gu as initGlobalStateQueryRuntime,
  HE as useHostConfigById,
  HO as getReviewCommentAttachmentKeyValue,
  Hg as collectEndResourcePaths,
  Hh as initGitQueryKeyHelpers,
  Hi as initSettingsGearIcon,
  Hx as getFallbackBackgroundAgentHandle,
  IB as useSignalValue,
  IL as parseConfigLoadError,
  I_ as initRouteScope,
  Io as initConnectorAppsListQuery,
  Ip as localResponseInProgressSignal,
  Ix as environmentTerminalControllerService,
  JV as loadReactModule,
  Ja as CheckCircleIcon,
  Jo as be,
  Ki as DropdownMenuSubmenu,
  Kp as conversationReadStateSignal,
  Ku as useGlobalStateQuery,
  LB as loadIsEqualModule,
  LN as initReducedMotionPreference,
  La as initExternalUrlHelpers,
  Lj as PlusIcon,
  Ln as initKeyboardModifierState,
  MB as ScopeValueProvider,
  MV as useMutation,
  M_ as localConversationRouteScope,
  Mi as initModalRegistrySignal,
  Mj as getScrollDistanceFromBottomPx,
  Mu as initHostCodexHomeQuery,
  initLocalConversationGitSummary as isRenderableConversationTurn,
  Nh as initGitBranchQueryRuntime,
  Nj as initReverseScrollUtilities,
  Np as conversationHistoryCompleteSignal,
  Nu as getHostCodexHome,
  Nv as initConversationArtifactRuntime,
  OI as getHotkeyWindowThreadPath,
  OL as normalizeWorkspaceBrowserRoot,
  OM as scaleCssPxByWindowZoom,
  ON as initButtonComponentPrimitives,
  OP as createMotionSignal,
  OV as createAtomSignal,
  O_ as initConversationRouteSourceHelpers,
  Oi as $e,
  Op as initConversationStateSelectors,
  Ov as useNavigate,
  PB as useScopedValue,
  PI as getHotkeyWindowFallbackPath,
  PO as at,
  P_ as getLocalThreadConversationIdFromRoute,
  Pi as openScopedModal,
  Pp as responseInProgressSignal,
  Pv as lt,
  QP as appScope,
  R as initSlashIcon,
  RP as ChevronIcon,
  Rf as workspaceRootsSignal,
  Rj as _t,
  Rn as useCommandRegistration,
  Rv as initMarkdownUtilityNoop,
  SP as initMotionRuntime,
  SV as initQueryRuntime,
  Sc as useConversationDetailMode,
  Sf as initConfigQueryRuntime,
  Sk as normalizeMarkdownPlainText,
  Sm as threadSourceSignal,
  TM as initCheckmarkIcon,
  T_ as getRouteConversationId,
  Tf as mcpServersQuerySignal,
  Ti as DialogFooterActions,
  Tp as hasConversationSignal,
  Ts as initBrowserFeatureAvailabilitySignals,
  UE as LOCAL_HOST_ID,
  Uf as initHostWorkspaceQueries,
  Ug as collectAssistantOutputArtifacts,
  Uh as useGitAvailabilityQuery,
  Up as conversationCollaborationModeSignal,
  Uv as initMarkdownArtifactHelpers,
  Ux as initAgentMentionMap,
  VE as initHostConfigHelpers,
  VP as initClassNameRuntime,
  VR as getErrorMessage,
  Vi as SettingsGearIcon,
  Vn as dispatchGlobalCommand,
  Wa as PlatformContentGate,
  Wg as initMarkdownResourceHelpers,
  XN as createQueryKey,
  XR as GLOBAL_STATE_KEYS,
  Xi as MenuSeparator,
  Xj as useStatsigLayer,
  Xp as latestConversationTurnSignal,
  YO as initPullRequestReviewCommentHelpers,
  Ya as initCheckCircleFilledIcon,
  ZN as createHostQuerySignal,
  Zi as initDropdownMenuPrimitives,
  Zu as on,
  _c as CONVERSATION_DETAIL_STEPS_PROSE,
  aM as RefreshIcon,
  aP as QUERY_DURATIONS,
  a_ as initFileTypeDetectionHelpers,
  ag as fn,
  ak as initAppServerRequestBridge,
  ay as formatIdentifierTitle,
  bA as loadFindLastIndexModule,
  bF as initPathHelpers,
  bM as initKeyboardShortcutLabel,
  bP as createPersistedSignal,
  bV as createScopedSignal,
  bc as initConversationDetailModeConstants,
  bk as loadUniqByModule,
  cA as getSubagentSourceMetadata,
  cM as initToastRuntime,
  cP as initVscodeMessageBridge,
  cm as conversationHostIdSignal,
  dV as createDerivedSignal,
  di as PopoverRoot,
  dp as berryDisplayConversationTurnsSignal,
  eM as featureGateSignal,
  eP as useHostQuery,
  ea as SearchIcon,
  ed as useConversationHostApi,
  eg as Fn,
  en as ExternalLinkIcon,
  fV as createScopedSignalFamily,
  fh as initGitActionDirectiveRuntime,
  fp as completedThreadGoalSignal,
  fu as initTaskWorkspaceQueryRuntime,
  gi as initPopoverPrimitives,
  gm as backgroundAgentSnapshotSignal,
  gp as conversationCwdSignal,
  hM as initTooltipPrimitives,
  hi as PopoverTrigger,
  hs as initLocalImageInliningHelpers,
  iF as initIntlRuntime,
  iO as formatConversationTitleText,
  ic as useConversationAgentMode,
  jL as initModulePreloadRuntime,
  jM as $n,
  jm as conversationModeSignal,
  ju as useOsInfo,
  kM as useWindowZoom,
  kN as SpinnerIcon,
  kO as MY_REQUEST_PROMPT_HEADER,
  kj as or,
  ko as GitBranchIcon,
  lA as cr,
  lD as lr,
  lF as useIntl,
  lL as LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
  lP as vscodeMessageBridge,
  lm as conversationResumeStateSignal,
  mM as TooltipProvider,
  mP as logger,
  mi as _r,
  mo as initGitHubIcon,
  mr as loadGroupByModule,
  mv as xr,
  nm as projectlessOutputDirectorySignal,
  ny as initAppToolSourceMatcherCache,
  oM as initRefreshIcon,
  oP as initQueryDurationConstants,
  ok as sendAppServerRequest,
  oy as initIdentifierTitleFormatter,
  pI as isPathInCodexWorktree,
  pM as Tooltip,
  pP as initLoggerRuntime,
  pi as PopoverContent,
  po as GitHubIcon,
  pp as shouldResumeConversationSignal,
  pu as useDebouncedValue,
  pz as toConversationId,
  qV as getChunkModuleExports,
  qi as MenuChrome,
  qj as useStatsigGate,
  rF as defineMessages,
  rO as Ur,
  sF as FormattedMessage,
  sm as conversationRequestsSignal,
  tP as useAppServerMutation,
  ta as initSearchIcon,
  tc as Yr,
  tn as Xr,
  tp as hostConnectionStatusSignal,
  ty as $r,
  uM as toastSignal,
  vM as KeyboardShortcutKeycap,
  va as AppDialog,
  vm as subagentParentThreadIdSignal,
  wM as CheckIcon,
  wP as ci,
  wV as useSignalState,
  wi as DialogBody,
  wj as di,
  wl as composerScope,
  wp as storedThreadBranchSignal,
  xM as useStableCallback,
  xa as initAppDialog,
  xk as hi,
  yA as loadFindLastModule,
  yF as loadReactDomModule,
  yM as initKeyboardShortcutKeycap,
  yP as yi,
  yV as createSignal,
  yv as Navigate,
  zP as initChevronDownIcon,
  zV as useQueryClient,
  za as openInBrowserFromEvent,
  zo as useAppsQuery,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  $i as Ei,
  A as Di,
  Ar as parseMcpAppIdFromToolCallId,
  Ba as pullRequestReviewCommentAttachmentsSignal,
  Cl as pullRequestCurrentBranchSignal,
  Cn as Ni,
  Dd as Fi,
  Ds as openEnvironmentTerminalSession,
  Ec as Ri,
  Es as zi,
  F as recordPendingWorktreeForkSourceState,
  Fr as installedMcpAppIdsSignal,
  Ga as MoreHorizontalIcon,
  Gl as conversationDisplayTitleSignal,
  Ha as updatePullRequestReviewCommentAttachments,
  Il as Ki,
  Ir as setThreadSourceFrameState,
  Ja as Ji,
  Jl as Yi,
  Ka as initMoreHorizontalIcon,
  Kl as conversationTitleSignal,
  Mr as Qi,
  Od as $i,
  On as ta,
  P as na,
  Rl as hostConfigSignal,
  Rr as ia,
  Sa as aa,
  Sl as workspaceRouteStateSignal,
  Sn as sa,
  So as ca,
  Ss as la,
  Td as ua,
  Va as da,
  Wl as fa,
  Xa as pa,
  Ya as ma,
  Yi as localEnvironmentActionShortcutSignal,
  Yl as rightPanelTabsStore,
  Za as _a,
  _c as va,
  _i as githubCliAvailabilitySignal,
  b as Sa,
  ba as Ca,
  bc as wa,
  bs as Ta,
  cn as Ea,
  cs as Da,
  d as Oa,
  gi as ka,
  gs as Aa,
  hc as ja,
  ho as Ma,
  hs as Na,
  jr as liveMcpAppFrameSignal,
  js as environmentTerminalControllerSignal,
  kc as diffStatsSignal,
  kn as Ra,
  l as za,
  ln as Ba,
  mo as Ha,
  ms as Ua,
  nc as Wa,
  nu as Ka,
  pi as pullRequestStatusQuerySignal,
  ql as bottomPanelTabsStore,
  qo as diffSourceSignal,
  sd as Xa,
  tc as Za,
  ts as Qa,
  tu as $a,
  u as eo,
  un as to,
  vc as no,
  vd as ro,
  vi as io,
  vn as ao,
  wl as currentWorkspaceRootSignal,
  wo as lo,
  x as fo,
  xl as po,
  yc as ho,
  yd as rightPanelFullWidthSignal,
  yn as _o,
  ys as vo,
  yu as yo,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  G as bo,
  W as windowVisibleSignal,
  dn as So,
  fn as Co,
  jn as wo,
  kn as To,
} from "../boundaries/current-ref/automations-page-producer";
import {
  $ as Oo,
  $o as pullRequestMergeConflictAttachmentSignal,
  Ai as Ao,
  Dt as Mo,
  Gt as Po,
  H as Fo,
  Ja as Lo,
  Ko as composerModeSignal,
  Kt as zo,
  Ma as Bo,
  Na as Vo,
  Oi as Uo,
  Ot as Wo,
  Q as CommentBubbleIcon,
  Qo as attachedPullRequestChecksSignal,
  Qt as Jo,
  W as Xo,
  _o as Zo,
  a as Qo,
  as as $o,
  en as es,
  ho as ts,
  ji as ns,
  ki as rs,
  l as is,
  ls as as,
  m as os,
  mo as ss,
  ns as cs,
  o as ls,
  p as us,
  po as ds,
  qa as fs,
  u as ps,
  us as ms,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  $c as openBrowserSummaryTab,
  $l as createPullRequestActionStateSignal,
  $n as vs,
  Al as ys,
  Ar as bs,
  At as xs,
  Bl as Ss,
  Bn as worktreeStatusQuerySignal,
  Bu as ws,
  Dt as Ts,
  Du as Es,
  El as Ds,
  Eu as Os,
  Fr as ks,
  Gm as js,
  Hl as Ms,
  In as Ns,
  Ir as Ps,
  Ja as Fs,
  Jn as Ls,
  Km as zs,
  Ln as Bs,
  initThreadFindNavigationRail as Vs,
  Mt as Hs,
  Nf as Us,
  Nl as Ws,
  No as Gs,
  Nt as Ks,
  Ot as qs,
  Pl as Js,
  Po as Ys,
  Pt as Xs,
  Qc as Zs,
  Ql as Qs,
  Qn as $s,
  Rn as ec,
  St as tc,
  Tl as nc,
  Tu as rc,
  Ul as ic,
  Vl as ac,
  Vn as localWorkspaceMaterializationSignal,
  Vu as sc,
  Xc as lc,
  Xd as uc,
  Yd as dc,
  Yn as fc,
  Zd as pc,
  ar as mc,
  au as hc,
  cc as gc,
  cs as backgroundAgentsSignal,
  ct as vc,
  er as bc,
  eu as xc,
  fl as Sc,
  gm as Cc,
  gt as wc,
  hm as Tc,
  ht as Ec,
  it as Dc,
  iu as activeWorkflowSignal,
  jr as kc,
  jt as Ac,
  kl as jc,
  kt as Mc,
  lf as Nc,
  ls as Pc,
  lt as Fc,
  nu as Lc,
  oa as Rc,
  os as zc,
  qa as Vc,
  rt as Uc,
  sa as Wc,
  sc as Gc,
  ss as Kc,
  st as qc,
  tr as Jc,
  tu as Yc,
  uf as Xc,
  ut as Zc,
  vc as Qc,
  wu as $c,
  xt as el,
  yc as tl,
  zl as nl,
} from "../boundaries/current-ref/profile-page-producer";
import {
  $ as rl,
  A as il,
  at as sl,
  en as cl,
  et as ll,
  it as ul,
  k as dl,
  n as fl,
  rt as pl,
  st as ml,
  t as hl,
  tn as gl,
} from "../boundaries/current-ref/appgen-library-hot-producer";
import {
  getResizeObserverEntrySize as _l,
  initUseResizeObserverChunk as vl,
} from "../utils/use-resize-observer";
import {
  i as yl,
  r as bl,
} from "../boundaries/current-ref/thread-hotkey-shell-producer";
import {
  H as xl,
  U as Sl,
} from "../boundaries/current-ref/appgen-publication-terms-producer";
import {
  _ as automationDataSignal,
  g as El,
  o as Dl,
  u as Ol,
} from "../boundaries/current-ref/projects-pull-requests-producer";
import {
  getPullRequestMergeVisualState,
  getPullRequestVisualState,
  initPullRequestVisualStateChunk,
} from "../utils/pull-request-visual-state";
import {
  DiffStats as Ml,
  initDiffStatsChunk as Nl,
} from "../git/git-review-primitives";
import {
  initSummaryPanelRowChunk,
  SummaryPanelRow,
} from "../utils/summary-panel-row";
import {
  initThreadSwitchTimingTrackerChunk,
  threadSwitchTimingTracker,
} from "../automation/heartbeat-automation-eligibility";
import {
  m as Rl,
  p as zl,
} from "../boundaries/current-ref/pets-general-settings-producer";
import {
  getAttachedHeartbeatAutomationForThread as Jl,
  HeartbeatAutomationCheckRing as Vl,
  HeartbeatAutomationIcon as Gl,
  initAttachedHeartbeatAutomationLookupChunk as Wl,
  initHeartbeatAutomationCheckRingChunk as Ul,
  initHeartbeatAutomationIconChunk as ql,
  initPullRequestChecksStatusLabelChunk as Bl,
  PullRequestChecksSummary as Kl,
  pullRequestChecksStatusLabel as Hl,
} from "../github/pull-request-checks-summary";
import { initThreadLayoutChunk, ThreadLayout } from "../utils/thread-layout";
import {
  M as Tu,
  N as Eu,
} from "../boundaries/current-ref/onboarding-general-settings-producer";
import {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
} from "../features/hotkey-window-state";
import {
  initUseGitConfigValueChunk as Au,
  useGitConfigValue as ku,
} from "../utils/use-git-config-value";
import {
  initShareInviteAutocompleteChunk as Nu,
  ShareInviteAutocomplete as Pu,
} from "../collaboration/share-invite-autocomplete";
import { initStarIconChunk as Fu, StarIcon as Iu } from "../icons/star-icon";
import {
  GitBranchSwitcher as Ru,
  initGitBranchSwitcherChunk as Lu,
} from "../git/git-branch-switcher";
import {
  clearStoppedPendingProcessRows,
  collectConversationProcessRows,
  computerUsePictureInPictureAvailableSignal,
  computerUsePictureInPictureVisibleSignal,
  getPendingBackgroundProcessRow,
  initActiveConversationProcessRowsChunk,
  initBackgroundTerminalSidePanelTabChunk,
  initPendingBackgroundProcessRowsChunk,
  initProcessMetricHelpersChunk,
  initThreadAppShellSourcesChunk,
  initThreadNullRefChunk,
  initThreadSidePanelTabRegistryChunk,
  initThreadSummaryPanelSignalsChunk,
  isPendingProcessRowExpired,
  isSameProcessRow,
  matchProcessMetrics,
  mergeProcessRows,
  openBackgroundTerminalSidePanelTab,
  pendingBackgroundProcessRowsSignal,
  registerThreadSidePanelTab,
  removePendingBackgroundProcessRow,
  restoreRegisteredProcessRows,
  selectRunningProcessRows,
  setPendingBackgroundProcessRow,
  ThreadAppShellSourceRegistration,
  useNullAppShellRef,
} from "../app-shell/thread-background-processes";
import {
  a as CloudEnvironmentDropdown,
  i as initThreadHandoffHelpersChunk,
  n as initLocalRemoteDropdownChunk,
  o as initCloudEnvironmentDropdownChunk,
  r as shouldShowThreadHandoffInSummary,
  t as LocalRemoteDropdown,
} from "../boundaries/current-ref/local-remote-dropdown-producer";
import {
  buildThreadVirtualizerLayout as Xu,
  getDistanceFromBottomForCenteredTurn as Yu,
  getDistanceFromBottomForPreservedAnchor as qu,
  getRangeAnchoredAtTurn as Gu,
  getVisibleThreadRange as Ku,
  initThreadVirtualizerChunk as Ju,
} from "../threads/thread-virtualizer";
import {
  ChromeExtensionHeader,
  initChromeExtensionHeaderChunk,
} from "../browser/chrome-extension-header";
import { initTeamIconChunk as $u, TeamIcon as ed } from "../icons/team-icon";
import {
  initThreadScrollLayoutChunk as td,
  initThreadScrollLayoutStyleChunk as nd,
  ThreadScrollLayout as rd,
} from "../utils/thread-scroll-layout";
import {
  initThreadScrollControllerContextChunk as id,
  threadScrollControllerContext as od,
  useThreadScrollController as ad,
} from "../utils/thread-scroll-controller-context";
import {
  cloneLocalEnvironmentActions as hd,
  createLocalEnvironmentAction as pd,
  initLocalEnvironmentActionIconChunk as fd,
  initLocalEnvironmentActionIconOptionsChunk as ud,
  initLocalEnvironmentDefaultsChunk as dd,
  LocalEnvironmentActionIcon as md,
  LOCAL_ENVIRONMENT_ACTION_ICON_OPTIONS as ld,
  normalizePlatformScripts as cd,
  serializeLocalEnvironmentConfig as sd,
} from "../environments/local-environments-utils";
import {
  C as PullRequestInlineActionButton,
  S as initPullRequestCheckStatusIconChunk,
  _ as initPullRequestAnalyticsChunk,
  a as PullRequestMergeActions,
  i as initPullRequestMetadataRowsChunk,
  m as usePullRequestUpdateMutation,
  n as initPullRequestCheckRowsChunk,
  o as initPullRequestMergeActionsChunk,
  p as initPullRequestUpdateMutationChunk,
  r as PullRequestMetadataRows,
  t as PullRequestCheckRows,
  v as trackPullRequestAction,
  w as initPullRequestInlineActionButtonChunk,
  x as PullRequestUnknownCheckIcon,
} from "../boundaries/current-ref/pull-request-check-rows-producer";
import {
  initOpenSideChatTabChunk as Nd,
  initThreadOverflowMenuChunk as Md,
  openSideChatTab as jd,
  ThreadOverflowMenu as Pd,
} from "../threads/thread-overflow-menu";
import {
  createBackgroundSummaryItems,
  getBackgroundSummaryItemKey,
  getInlineActivityBackgroundAgents,
  isDoneBackgroundAgent,
  isWorkingBackgroundAgent,
  shouldHideInlineBackgroundAgent,
  shouldShowInlineBackgroundAgent,
} from "./local-conversation-thread-parts/background-summary";
import {
  appendRegisteredBackgroundTerminalRows,
  insertBackgroundTerminalActionRows,
  pruneSettledBackgroundTerminalActionStates,
  resolveBackgroundTerminalStatus,
} from "./local-conversation-thread-parts/background-terminal-state";
import {
  createBackgroundTerminalCurrentRows,
  createBackgroundTerminalRestartRecord,
  createStartingBackgroundTerminalRow,
} from "./local-conversation-thread-parts/background-terminal-current-rows";
import { createBackgroundTerminalProcessSnapshotSelector } from "./local-conversation-thread-parts/background-terminal-process-snapshot";
import { createRestoredBackgroundTerminalRows } from "./local-conversation-thread-parts/background-terminal-restored-rows";
import { countBackgroundTerminalSummaryRows } from "./local-conversation-thread-parts/background-terminal-summary-count";
import { shouldShowInlineActivityForRightPanel } from "./local-conversation-thread-parts/inline-activity-panel";
import { createLatestTurnSubmitPlacementSnapshot } from "./local-conversation-thread-parts/latest-turn-submit-placement";
import {
  createLocalEnvironmentActionRunId,
  getLocalEnvironmentActionItems,
  resolveLocalEnvironmentActionCwd,
  resolveLocalEnvironmentActionKey,
  sortLocalEnvironmentActionItemsByRecentActionNames,
} from "./local-conversation-thread-parts/local-environment-action-items";
import {
  getRecentLocalEnvironmentActions,
  prependRecentLocalEnvironmentAction,
  type RecentLocalEnvironmentActionsByKey,
} from "./local-conversation-thread-parts/local-environment-recent-actions";
import { getConversationTurnsNotInParent } from "./local-conversation-thread-parts/parent-conversation-turns";
import {
  MAIN_THREAD_PIP_HOST_ID,
  startRemoteHostedPipHostLayoutObserver,
} from "./local-conversation-thread-parts/pip-host-layout-observer";
import {
  initPinnedSummaryPanelState,
  pinnedSummaryPanelState,
  usePinnedSummaryPanelDisplay,
  usePinnedSummaryPanelLayout,
} from "./local-conversation-thread-parts/pinned-summary-panel-layout";
export type { PinnedSummaryPanelLayoutStore } from "./local-conversation-thread-parts/pinned-summary-panel-layout";
import { shouldUseFullWidthRightPanelForRoute } from "./local-conversation-thread-parts/right-panel-route-state";
import { shouldShowScrollToBottomButton } from "./local-conversation-thread-parts/scroll-to-bottom-state";
import {
  collectConversationRequestsForTurnIds,
  createPhysicalTurnEntries,
  groupConversationRequestsByTurnId,
  parseBerryDisplayTurnId,
} from "./local-conversation-thread-parts/turn-request-index";
import { getLocalConversationTurnSearchKey } from "./local-conversation-thread-parts/turn-search-key";
import type { BrowserUseSummary } from "./local-conversation-thread-parts/browser-use-summary";
import {
  initThreadSummaryBrowserSectionsChunk,
  ThreadSummaryBrowserTabsSection,
  ThreadSummaryComputerUsePipSection,
} from "./local-conversation-thread-parts/thread-summary-browser-sections";
import {
  initThreadSummaryBrowserUseModelChunk,
  useThreadSummaryBrowserUseSummaries,
} from "./local-conversation-thread-parts/thread-summary-browser-use-model";
import {
  initThreadSummaryOutputOpenHandlersChunk,
  useThreadSummaryOutputOpenHandlers,
} from "./local-conversation-thread-parts/thread-summary-output-open-handlers";
import {
  initSummaryPanelArtifactsListChunk,
  SummaryPanelArtifactsList,
} from "./local-conversation-thread-parts/summary-panel-artifacts-list";
import {
  initLocalConversationArtifactSignals,
  localConversationOutputArtifactsSignal,
  localConversationSummaryArtifactsSignal,
} from "./local-conversation-thread-parts/local-conversation-artifact-signals";
import { BackgroundTaskSectionTitle } from "./local-conversation-thread-parts/background-task-section-title";
import {
  initReviewSearchHighlighter,
  initThreadFindNavigationRail,
  initThreadFindNavigationRailNoopChunk,
  ThreadFindNavigationRail,
  useReviewSearchHighlights,
} from "./local-conversation-thread-parts/review-search-highlights";
import {
  buildThreadFindPreviewOutputs,
  EMPTY_THREAD_FIND_PREVIEW_OUTPUTS,
} from "./local-conversation-thread-parts/thread-find-preview-outputs";
import {
  initSummaryPanelExpandableList,
  SummaryPanelExpandableList,
} from "./local-conversation-thread-parts/summary-panel-expandable-list";
import {
  initThreadSummarySideChatRowsChunk,
  ThreadSummarySideChatRows,
} from "./local-conversation-thread-parts/thread-summary-side-chat-rows";
import {
  initPullRequestSummaryRowChunk,
  PullRequestSummaryRow,
} from "./local-conversation-thread-parts/pull-request-summary-row";
import {
  initThreadSummarySourceRowsChunk,
  ThreadSummarySourceRows,
} from "./local-conversation-thread-parts/thread-summary-source-rows";
import {
  collectConversationWebSources,
  initThreadSummaryWebSourcesChunk,
} from "./local-conversation-thread-parts/thread-summary-web-sources";
import {
  initThreadSummaryPanelChromePrimitives,
  ThreadSummaryPanelContent,
  ThreadSummaryPanelHeaderButton,
  ThreadSummaryPanelPopoverContent,
  ThreadSummaryPanelRoot,
  ThreadSummaryPanelSectionCount,
} from "./local-conversation-thread-parts/thread-summary-panel-chrome-primitives";
import {
  initThreadSummaryPanelSectionChunk,
  ThreadSummaryPanelSection,
} from "./local-conversation-thread-parts/thread-summary-panel-section";
const joinLocalEnvironmentRepoPath = joinPath;
function ThreadSummaryBackgroundActivityRows(props) {
  let {
      backgroundAgents,
      backgroundTerminals,
      conversationId,
      onOpenBackgroundAgent,
      onOpenTerminal,
      onStopError,
    } = props,
    intl = useIntl(),
    [stoppingTerminalId, setStoppingTerminalId] =
      threadSummaryBackgroundActivityReactRuntime.useState(null),
    backgroundSummaryItems,
    inlineActivityBackgroundAgents;
  {
    inlineActivityBackgroundAgents =
      getInlineActivityBackgroundAgents(backgroundAgents);
    backgroundSummaryItems = createBackgroundSummaryItems(
      backgroundAgents,
      backgroundTerminals,
    );
  }
  let stopAllBackgroundTerminals = (terminal) => {
    conversationId == null ||
      stoppingTerminalId != null ||
      (setStoppingTerminalId(terminal.id),
      sendAppServerRequest("clean-background-terminals", {
        conversationId,
      })
        .catch(onStopError)
        .finally(() => setStoppingTerminalId(null)));
  };
  let handleStopAllBackgroundTerminals = stopAllBackgroundTerminals,
    renderBackgroundSummaryItem = (item) => {
      switch (item.type) {
        case "agent":
          return (
            <SummaryPanelRow
              icon={null}
              label={threadSummaryBackgroundActivityJsxRuntime.jsx(
                BackgroundAgentSummaryLabel,
                {
                  backgroundAgent: item.backgroundAgent,
                },
              )}
              labelClassName="min-w-0"
              trailing={
                item.backgroundAgent.diffStats == null ? null : (
                  <Ml
                    linesAdded={item.backgroundAgent.diffStats.linesAdded}
                    linesRemoved={item.backgroundAgent.diffStats.linesRemoved}
                    className="text-size-chat"
                  />
                )
              }
              trailingVisible={item.backgroundAgent.diffStats != null}
              onClick={() => onOpenBackgroundAgent(item.backgroundAgent)}
            />
          );
        case "terminal":
          return (
            <SummaryPanelRow
              icon={threadSummaryBackgroundActivityJsxRuntime.jsx(ds, {
                className: "icon-sm shrink-0 text-token-text-secondary",
              })}
              label={
                <span className="truncate text-sm">
                  {item.terminal.command.length > 0 ? (
                    item.terminal.command
                  ) : (
                    <FormattedMessage
                      id="codex.localConversation.backgroundTerminals.defaultLabel"
                      defaultMessage="Background terminal"
                      description="Fallback row label for a running background terminal when the command text is unavailable"
                    />
                  )}
                </span>
              }
              actions={threadSummaryBackgroundActivityJsxRuntime.jsx(Tooltip, {
                side: "top",
                tooltipContent: (
                  <FormattedMessage
                    id="codex.localConversation.backgroundTerminals.stopTooltip"
                    defaultMessage="Stop all background terminals"
                    description="Tooltip for button that stops all background terminals from the thread summary panel"
                  />
                ),
                children: (
                  <button
                    type="button"
                    className="flex size-4 shrink-0 cursor-interaction items-center justify-center border-0 bg-transparent p-0 text-token-text-tertiary hover:text-token-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={stoppingTerminalId != null}
                    onClick={() =>
                      handleStopAllBackgroundTerminals(item.terminal)
                    }
                    aria-label={intl.formatMessage({
                      id: "codex.localConversation.backgroundTerminals.stop",
                      defaultMessage: "Stop all background terminals",
                      description:
                        "Aria label for button that stops all background terminals from the thread summary panel",
                    })}
                  >
                    {stoppingTerminalId === item.terminal.id
                      ? threadSummaryBackgroundActivityJsxRuntime.jsx(
                          SpinnerIcon,
                          {
                            className: "icon-xs",
                          },
                        )
                      : threadSummaryBackgroundActivityJsxRuntime.jsx(js, {
                          className: "icon-xs",
                          "aria-hidden": true,
                        })}
                  </button>
                ),
              })}
              onClick={() => onOpenTerminal(item.terminal)}
            />
          );
      }
    };
  let backgroundSummaryRows = (
    <SummaryPanelExpandableList
      items={backgroundSummaryItems}
      getKey={getBackgroundSummaryItemKey}
    >
      {renderBackgroundSummaryItem}
    </SummaryPanelExpandableList>
  );
  let rows = backgroundSummaryRows;
  return inlineActivityBackgroundAgents.length > 0 ? (
    <>
      {threadSummaryBackgroundActivityJsxRuntime.jsx(
        BackgroundAgentCollapsedSummaryRow,
        {
          backgroundAgents: inlineActivityBackgroundAgents,
          onOpenBackgroundAgent,
        },
      )}
      {rows}
    </>
  ) : (
    rows
  );
}
function BackgroundAgentCollapsedSummaryRow(props) {
  let { backgroundAgents, onOpenBackgroundAgent } = props,
    doneBackgroundAgents,
    avatarListClassName,
    agentAvatarButtons,
    containerClassName,
    workingBackgroundAgents;
  {
    workingBackgroundAgents = backgroundAgents.filter(isWorkingBackgroundAgent);
    doneBackgroundAgents = backgroundAgents.filter(isDoneBackgroundAgent);
    let visibleBackgroundAgents =
      workingBackgroundAgents.length > 0
        ? workingBackgroundAgents.slice(0, 4)
        : doneBackgroundAgents.slice(-4);
    containerClassName = "flex min-h-8 items-center gap-2";
    avatarListClassName = "flex shrink-0 items-center gap-1.5";
    let renderAgentAvatarButton;
    renderAgentAvatarButton = (backgroundAgent) => (
      <button
        key={backgroundAgent.conversationId}
        type="button"
        className="flex size-4 cursor-interaction rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={backgroundAgent.displayName}
        onClick={() => onOpenBackgroundAgent(backgroundAgent)}
      >
        {threadSummaryBackgroundActivityJsxRuntime.jsx(bc, {
          seed: backgroundAgent.conversationId,
          className: "size-4",
          "aria-hidden": true,
        })}
      </button>
    );
    agentAvatarButtons = visibleBackgroundAgents.map(renderAgentAvatarButton);
  }
  let avatarList = (
    <span className={avatarListClassName}>{agentAvatarButtons}</span>
  );
  let workingCountLabel =
    workingBackgroundAgents.length > 0 ? (
      <span className="text-base whitespace-nowrap text-token-foreground">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.collapsedWorkingCount"
          defaultMessage={"{count, plural, one {# working} other {# working}}"}
          description="Number of multi-agent v2 subagents that are still working in the collapsed summary panel row"
          values={{
            count: workingBackgroundAgents.length,
          }}
        />
      </span>
    ) : null;
  let doneCountLabel =
    doneBackgroundAgents.length > 0 ? (
      <span className="text-base whitespace-nowrap text-token-text-tertiary">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.collapsedDoneCount"
          defaultMessage={"{count, plural, one {# done} other {# done}}"}
          description="Number of multi-agent v2 subagents that are done in the collapsed summary panel row"
          values={{
            count: doneBackgroundAgents.length,
          }}
        />
      </span>
    ) : null;
  return (
    <div className={containerClassName}>
      {avatarList}
      {workingCountLabel}
      {doneCountLabel}
    </div>
  );
}
function BackgroundAgentSummaryLabel(props) {
  let { backgroundAgent } = props,
    tooltipContent =
      backgroundAgent.agentRole == null &&
      backgroundAgent.spawnModel == null ? null : (
        <span className="flex flex-col gap-0.5">
          {backgroundAgent.agentRole == null ? null : (
            <span>{backgroundAgent.agentRole}</span>
          )}
          {backgroundAgent.spawnModel == null ? null : (
            <span>
              <FormattedMessage
                id="codex.localConversation.backgroundAgents.modelTooltip"
                defaultMessage={"Uses {model}"}
                description="Tooltip line that shows the model used by a background subagent."
                values={{
                  model: Nc(backgroundAgent.spawnModel),
                }}
              />
            </span>
          )}
        </span>
      );
  let tooltipIsDisabled = tooltipContent == null,
    isActive = backgroundAgent.status === "active",
    avatarIcon = (
      <Uo
        active={isActive}
        seed={backgroundAgent.conversationId}
        className="icon-sm pointer-events-none"
        aria-hidden={true}
      />
    );
  let displayName = (
    <span className="min-w-0 truncate">{backgroundAgent.displayName}</span>
  );
  let activeStatusLabel =
    backgroundAgent.status === "active" ? (
      <span className="loading-shimmer-pure-text shrink-0 whitespace-nowrap text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.activeLabel"
          defaultMessage="is working"
          description="Status label shown next to an active background subagent in the thread summary panel"
        />
      </span>
    ) : null;
  let label = (
    <span className="flex min-w-0 items-center gap-2">
      {avatarIcon}
      {displayName}
      {activeStatusLabel}
    </span>
  );
  return threadSummaryBackgroundActivityJsxRuntime.jsx(Tooltip, {
    disabled: tooltipIsDisabled,
    tooltipContent,
    children: label,
  });
}
var threadSummaryBackgroundActivityModule,
  threadSummaryBackgroundActivityReactRuntime,
  threadSummaryBackgroundActivityJsxRuntime,
  initThreadSummaryBackgroundActivityRowsChunk = once(() => {
    threadSummaryBackgroundActivityModule = getChunkModuleExports();
    threadSummaryBackgroundActivityReactRuntime = toEsModule(
      loadReactModule(),
      1,
    );
    initIntlRuntime();
    initAppServerRequestBridge();
    initSpinnerComponent();
    initTooltipPrimitives();
    Nl();
    zs();
    ss();
    Xc();
    rs();
    Jc();
    initSummaryPanelExpandableList();
    initSummaryPanelRowChunk();
    threadSummaryBackgroundActivityJsxRuntime = getJsxRuntime();
  });
var initBackgroundTerminalSummaryRowsSupportChunk = once(() => {
  initActiveConversationProcessRowsChunk();
  initProcessMetricHelpersChunk();
});
function BackgroundTerminalSummaryRows(props) {
  let {
      backgroundTerminals,
      childProcesses,
      conversationId,
      hostId,
      isVisible,
      processSnapshotTimeMs,
      registeredRows,
      onRestartError,
      onStopError,
      onOpen,
    } = props,
    scope = useScope(appScope),
    isVisibleRef = backgroundTerminalSummaryRowsReactRuntime.useRef(isVisible),
    pendingProcessRows = useSignalValue(pendingBackgroundProcessRowsSignal),
    killChildProcessMutation = useAppServerMutation("child-process-kill"),
    registerProcessMutation = useAppServerMutation("chat-process-register");
  let currentRows = createBackgroundTerminalCurrentRows({
      backgroundTerminals,
      childProcesses,
      conversationId,
      hostId,
      processSnapshotTimeMs,
      resolveProcessMetrics: matchProcessMetrics,
    }),
    processRows = appendRegisteredBackgroundTerminalRows(
      currentRows,
      registeredRows,
      isSameProcessRow,
    ),
    pendingRowsByProcessId = pruneSettledBackgroundTerminalActionStates(
      processRows,
      pendingProcessRows,
      processSnapshotTimeMs,
      isPendingProcessRowExpired,
      isSameProcessRow,
    ),
    summaryRows = insertBackgroundTerminalActionRows(
      processRows,
      pendingRowsByProcessId,
      isSameProcessRow,
    );
  backgroundTerminalSummaryRowsReactRuntime.useEffect(() => {
    isVisibleRef.current = isVisible;
    isVisible || clearStoppedPendingProcessRows(scope);
  }, [isVisible, scope]);
  backgroundTerminalSummaryRowsReactRuntime.useEffect(
    () => () => {
      isVisibleRef.current = false;
      clearStoppedPendingProcessRows(scope);
    },
    [scope],
  );
  let stopBackgroundTerminal = (row, rowIndex) => {
    let pid = row.metrics?.pid;
    pid != null &&
      (setPendingBackgroundProcessRow(scope, row.process.id, {
        row,
        rowIndex,
        sortRow: row,
        status: "stopping",
      }),
      killChildProcessMutation
        .mutateAsync({
          pid,
        })
        .then(
          (value) => {
            let { killed } = value;
            if (!killed) throw Error("Process is no longer running");
            if (isVisibleRef.current) {
              setPendingBackgroundProcessRow(scope, row.process.id, {
                row,
                rowIndex,
                sortRow: row,
                status: "stopped",
              });
              return;
            }
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
          () => {
            onStopError();
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
        ));
  };
  let startBackgroundTerminal = (row, rowIndex) => {
    let { process } = row;
    if (process.cwd == null) return;
    let startedAtMs = Date.now(),
      sessionId =
        environmentTerminalControllerService.addSessionForConversation(
          process.conversationId,
        ),
      startingRow = createStartingBackgroundTerminalRow(
        row,
        sessionId,
        startedAtMs,
      );
    setPendingBackgroundProcessRow(scope, process.id, {
      expiresAtMs: startedAtMs + BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS,
      row: startingRow,
      rowIndex,
      sortRow: row,
      status: "starting",
    });
    registerProcessMutation
      .mutateAsync({
        persistIfUnmatched: true,
        record: createBackgroundTerminalRestartRecord(
          process,
          sessionId,
          startedAtMs,
        ),
      })
      .catch(onRestartError);
    environmentTerminalControllerService.create({
      conversationId: process.conversationId,
      conversationTitle: process.chatTitle,
      cwd: process.cwd,
      hostId: process.hostId,
      preserveOnOwnerDestroy: true,
      sessionId,
    });
    environmentTerminalControllerService.runHeadlessAction(sessionId, {
      command: process.command,
      cwd: process.cwd,
    });
  };
  let restartBackgroundTerminal = (row, rowIndex) => {
    let pid = row.metrics?.pid;
    pid != null &&
      (setPendingBackgroundProcessRow(scope, row.process.id, {
        row,
        rowIndex,
        sortRow: row,
        status: "stopping",
      }),
      killChildProcessMutation
        .mutateAsync({
          pid,
        })
        .then(
          (value) => {
            let { killed } = value;
            if (!killed) throw Error("Process is no longer running");
            startBackgroundTerminal(row, rowIndex);
          },
          () => {
            onRestartError();
            removePendingBackgroundProcessRow(scope, row.process.id);
          },
        ));
  };
  return summaryRows.map((row, rowIndex) => {
    let status = resolveBackgroundTerminalStatus(
      row,
      getPendingBackgroundProcessRow(row, pendingRowsByProcessId),
      childProcesses != null,
    );
    return (
      <SummaryPanelRow
        key={row.terminal.id}
        icon={backgroundTerminalSummaryRowsJsxRuntime.jsx(
          BackgroundTerminalStatusIcon,
          {
            status,
          },
        )}
        label={
          <span
            className={classNames(
              "block min-w-0 truncate text-sm leading-5",
              status === "starting" && "loading-shimmer-pure-text",
              (status === "stopped" || status === "not-found") &&
                "text-token-description-foreground",
            )}
          >
            {row.terminal.command.length > 0 ? (
              row.terminal.command
            ) : (
              <FormattedMessage {...backgroundTerminalMessages.defaultLabel} />
            )}
          </span>
        }
        actions={backgroundTerminalSummaryRowsJsxRuntime.jsx(
          BackgroundTerminalRowActionMenu,
          {
            row,
            rowIndex,
            status,
            onOpen,
            onRestart: restartBackgroundTerminal,
            onStart: startBackgroundTerminal,
            onStop: stopBackgroundTerminal,
          },
        )}
        actionsAlwaysFocusable={true}
        onClick={() => onOpen(row.terminal)}
      />
    );
  });
}
function BackgroundTerminalRowActionMenu(props) {
  let { onOpen, onRestart, onStart, onStop, row, rowIndex, status } = props,
    intl = useIntl(),
    isStarting = status === "starting",
    isStopping = status === "stopping",
    isStopped = status === "stopped",
    isNotFound = status === "not-found",
    isMissingLiveProcess =
      !isStopped && !isNotFound && row.metrics?.pid == null,
    canStartOrRestart =
      row.process.cwd != null &&
      !isStarting &&
      !isStopping &&
      !isMissingLiveProcess,
    restartTooltip =
      row.process.cwd == null ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartMissingWorkspaceTooltip}
        />
      ) : isStarting ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartStartingTooltip}
        />
      ) : isStopping ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartStoppingTooltip}
        />
      ) : isMissingLiveProcess ? (
        <FormattedMessage
          {...backgroundTerminalMessages.restartMissingProcessTooltip}
        />
      ) : undefined;
  let startOrRestartMessageDescriptor =
      isStopped || isNotFound
        ? backgroundTerminalMessages.start
        : backgroundTerminalMessages.restart,
    handleStartOrRestart = () => {
      if (isStopped || isNotFound) {
        onStart(row, rowIndex);
        return;
      }
      onRestart(row, rowIndex);
    };
  let actionsLabel = intl.formatMessage(backgroundTerminalMessages.actions);
  let triggerClassName = classNames(
    ac,
    "data-[state=open]:text-token-foreground",
  );
  let triggerIcon = <MoreHorizontalIcon className="icon-2xs" />;
  let triggerButton = (
    <button
      type="button"
      aria-label={actionsLabel}
      className={triggerClassName}
      onClick={stopBackgroundTerminalActionTriggerPropagation}
    >
      {triggerIcon}
    </button>
  );
  let handleOpenOutput = () => onOpen(row.terminal);
  let openOutputLabel = (
    <FormattedMessage {...backgroundTerminalMessages.openOutput} />
  );
  let openOutputItem = (
    <MenuChrome.Item
      LeftIcon={ds}
      leftIconClassName="icon-xs"
      onSelect={handleOpenOutput}
    >
      {openOutputLabel}
    </MenuChrome.Item>
  );
  let isStopDisabled =
      row.metrics?.pid == null || isStarting || isStopping || isStopped,
    stopTooltip =
      row.metrics?.pid == null ? (
        <FormattedMessage
          {...backgroundTerminalMessages.stopMissingProcessTooltip}
        />
      ) : undefined;
  let isStopTooltipInteractive = row.metrics?.pid == null,
    handleStop = () => onStop(row, rowIndex);
  let stopLabel = <FormattedMessage {...backgroundTerminalMessages.stop} />;
  let stopItem = (
    <MenuChrome.Item
      LeftIcon={js}
      leftIconClassName="icon-xs"
      disabled={isStopDisabled}
      tooltipText={stopTooltip}
      tooltipInteractive={isStopTooltipInteractive}
      onSelect={handleStop}
    >
      {stopLabel}
    </MenuChrome.Item>
  );
  let isStartOrRestartDisabled = !canStartOrRestart,
    isRestartTooltipInteractive = restartTooltip != null,
    startOrRestartLabel = (
      <FormattedMessage {...startOrRestartMessageDescriptor} />
    );
  let startOrRestartItem = (
    <MenuChrome.Item
      LeftIcon={RefreshIcon}
      leftIconClassName="icon-xs"
      disabled={isStartOrRestartDisabled}
      tooltipText={restartTooltip}
      tooltipInteractive={isRestartTooltipInteractive}
      onSelect={handleStartOrRestart}
    >
      {startOrRestartLabel}
    </MenuChrome.Item>
  );
  return (
    <DropdownMenu
      align="end"
      animateExit={false}
      contentClassName="!animate-none"
      contentWidth="xs"
      triggerButton={triggerButton}
    >
      {openOutputItem}
      {stopItem}
      {startOrRestartItem}
    </DropdownMenu>
  );
}
function stopBackgroundTerminalActionTriggerPropagation(event) {
  event.stopPropagation();
}
function BackgroundTerminalStatusIcon(props) {
  let { status } = props,
    intl = useIntl(),
    statusLabel = intl.formatMessage(
      getBackgroundTerminalStatusMessageDescriptor(status),
    );
  if (status === "starting") {
    let startingIcon = backgroundTerminalSummaryRowsJsxRuntime.jsx(
      SpinnerIcon,
      {
        className: "icon-xs text-token-charts-green",
      },
    );
    return (
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center"
        title={statusLabel}
        aria-label={statusLabel}
        role="img"
      >
        {startingIcon}
      </span>
    );
  }
  return backgroundTerminalSummaryRowsJsxRuntime.jsx(ds, {
    className: "icon-sm shrink-0",
    title: statusLabel,
    "aria-label": statusLabel,
    role: "img",
  });
}
function getBackgroundTerminalStatusMessageDescriptor(status) {
  return status === "starting"
    ? backgroundTerminalMessages.startingStatus
    : status === "stopping"
      ? backgroundTerminalMessages.stoppingStatus
      : status === "stopped"
        ? backgroundTerminalMessages.stoppedStatus
        : status === "not-found"
          ? backgroundTerminalMessages.notFoundStatus
          : backgroundTerminalMessages.runningStatus;
}
var backgroundTerminalSummaryRowsModule,
  backgroundTerminalSummaryRowsReactRuntime,
  backgroundTerminalSummaryRowsJsxRuntime,
  BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS,
  backgroundTerminalMessages,
  initBackgroundTerminalSummaryRowsChunk = once(() => {
    backgroundTerminalSummaryRowsModule = getChunkModuleExports();
    initClassNameRuntime();
    initScopeRuntime();
    backgroundTerminalSummaryRowsReactRuntime = toEsModule(
      loadReactModule(),
      1,
    );
    initIntlRuntime();
    initDropdownMenuPrimitives();
    initSpinnerComponent();
    initRefreshIcon();
    zs();
    ss();
    initMoreHorizontalIcon();
    ic();
    initActiveConversationProcessRowsChunk();
    initPendingBackgroundProcessRowsChunk();
    initProcessMetricHelpersChunk();
    initAppScope();
    initEnvironmentTerminalController();
    initVscodeApiBridge();
    initBackgroundTerminalSummaryRowsSupportChunk();
    initSummaryPanelRowChunk();
    backgroundTerminalSummaryRowsJsxRuntime = getJsxRuntime();
    BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS = 1e4;
    backgroundTerminalMessages = defineMessages({
      actions: {
        id: "codex.localConversation.backgroundTerminals.actions",
        defaultMessage: "Background terminal actions",
        description:
          "Accessible label for the background terminal row actions menu in the thread summary panel",
      },
      defaultLabel: {
        id: "codex.localConversation.backgroundTerminals.defaultLabel",
        defaultMessage: "Background terminal",
        description:
          "Fallback row label for a running background terminal when the command text is unavailable",
      },
      notFoundStatus: {
        id: "codex.localConversation.backgroundTerminals.notFoundStatus",
        defaultMessage: "Not found",
        description:
          "Status shown when a background terminal row no longer maps to a live process",
      },
      openOutput: {
        id: "codex.localConversation.backgroundTerminals.openOutput",
        defaultMessage: "Open output",
        description:
          "Menu item that opens the background terminal output from the thread summary panel",
      },
      start: {
        id: "codex.localConversation.backgroundTerminals.start",
        defaultMessage: "Start",
        description:
          "Menu item that starts a stopped background terminal from the thread summary panel",
      },
      restart: {
        id: "codex.localConversation.backgroundTerminals.restart",
        defaultMessage: "Restart",
        description:
          "Menu item that restarts a background terminal from the thread summary panel",
      },
      restartMissingProcessTooltip: {
        id: "codex.localConversation.backgroundTerminals.restartMissingProcessTooltip",
        defaultMessage: "Restart needs a live process id",
        description:
          "Tooltip explaining why a background terminal cannot restart because it has no live process id",
      },
      restartMissingWorkspaceTooltip: {
        id: "codex.localConversation.backgroundTerminals.restartMissingWorkspaceTooltip",
        defaultMessage: "This task needs a workspace",
        description:
          "Tooltip explaining why a background terminal cannot be started from the thread summary panel",
      },
      restartStartingTooltip: {
        id: "codex.localConversation.backgroundTerminals.restartStartingTooltip",
        defaultMessage: "This task is already starting",
        description:
          "Tooltip explaining why a starting background terminal cannot be restarted from the thread summary panel",
      },
      restartStoppingTooltip: {
        id: "codex.localConversation.backgroundTerminals.restartStoppingTooltip",
        defaultMessage: "This task is stopping",
        description:
          "Tooltip explaining why a background terminal cannot restart while stopping",
      },
      runningStatus: {
        id: "codex.localConversation.backgroundTerminals.runningStatus",
        defaultMessage: "Running",
        description:
          "Status shown for a running background terminal in the thread summary panel",
      },
      startingStatus: {
        id: "codex.localConversation.backgroundTerminals.startingStatus",
        defaultMessage: "Starting…",
        description:
          "Status shown while a background terminal is starting from the thread summary panel",
      },
      stoppedStatus: {
        id: "codex.localConversation.backgroundTerminals.stoppedStatus",
        defaultMessage: "Stopped",
        description:
          "Status shown for a stopped background terminal in the thread summary panel",
      },
      stoppingStatus: {
        id: "codex.localConversation.backgroundTerminals.stoppingStatus",
        defaultMessage: "Stopping…",
        description:
          "Status shown while a background terminal is stopping from the thread summary panel",
      },
      stop: {
        id: "codex.localConversation.backgroundTerminals.stopTask",
        defaultMessage: "Stop",
        description:
          "Menu item that stops a background terminal from the thread summary panel",
      },
      stopMissingProcessTooltip: {
        id: "codex.localConversation.backgroundTerminals.stopMissingProcessTooltip",
        defaultMessage: "No running process was found for this task",
        description:
          "Tooltip explaining why a background terminal cannot be stopped from the thread summary panel",
      },
    });
  });
function getLocalEnvironmentDisplayName(configPath, environmentName) {
  return environmentName?.trim() || getConfigPathDisplayName(configPath);
}
function getLocalEnvironmentResultDisplayName(environmentResult) {
  return getLocalEnvironmentDisplayName(
    environmentResult.configPath,
    environmentResult.type === "success"
      ? environmentResult.environment.name
      : null,
  );
}
function getConfigPathDisplayName(configPath) {
  let normalizedConfigPath = or(configPath),
    pathParts = normalizedConfigPath.split("/").filter(Boolean);
  return pathParts[pathParts.length - 1] ?? normalizedConfigPath;
}
var initLocalEnvironmentDisplayNameHelpers = once(() => {
  di();
});
function LocalEnvironmentSelectorContent(props) {
  let {
      localEnvironmentsLoading,
      localEnvironmentsError,
      localEnvironments,
      availableEnvironments,
      defaultEnvironment,
      defaultEnvironmentNormalized,
      normalizedResolvedConfigPath,
      onSelectEnvironment,
      onOpenSettings,
    } = props,
    intl = useIntl(),
    noEnvironmentCheckIcon =
      normalizedResolvedConfigPath == null ? CheckIcon : undefined,
    clearEnvironmentSelection = () => {
      onSelectEnvironment(null);
    };
  let noEnvironmentLabel = (
    <FormattedMessage
      id="codex.environmentSelector.noEnvironment"
      defaultMessage="No environment"
      description="No environment selected message"
    />
  );
  let noEnvironmentItem = (
    <MenuChrome.Item
      RightIcon={noEnvironmentCheckIcon}
      onSelect={clearEnvironmentSelection}
    >
      {noEnvironmentLabel}
    </MenuChrome.Item>
  );
  let defaultEnvironmentItem = defaultEnvironment ? (
    <MenuChrome.Item
      LeftIcon={Iu}
      leftIconClassName="icon-xxs text-token-description-foreground"
      RightIcon={
        defaultEnvironmentNormalized != null &&
        defaultEnvironmentNormalized === normalizedResolvedConfigPath
          ? CheckIcon
          : undefined
      }
      tooltipText={intl.formatMessage({
        id: "composer.worktreeEnvironment.default",
        defaultMessage: "Default environment",
        description: "Tooltip for default local environment icon",
      })}
      onSelect={() => {
        onSelectEnvironment(defaultEnvironment.configPath);
      }}
    >
      {getLocalEnvironmentResultDisplayName(defaultEnvironment)}
    </MenuChrome.Item>
  ) : null;
  let environmentItems =
    localEnvironmentsLoading && localEnvironments.length === 0 ? (
      <div className="flex items-center justify-center py-3">
        {localEnvironmentSelectorContentJsxRuntime.jsx(SpinnerIcon, {
          className: "icon-xxs",
        })}
      </div>
    ) : localEnvironmentsError ? (
      <MenuChrome.Message compact={true} tone="error">
        <FormattedMessage
          id="composer.worktreeEnvironment.error"
          defaultMessage="Error loading environments"
          description="Error state for worktree environment dropdown"
        />
      </MenuChrome.Message>
    ) : availableEnvironments.length > 0 ? (
      availableEnvironments.map((item) => (
        <MenuChrome.Item
          key={item.configPath}
          RightIcon={
            normalizedResolvedConfigPath != null &&
            or(item.configPath) === normalizedResolvedConfigPath
              ? CheckIcon
              : undefined
          }
          onSelect={() => {
            onSelectEnvironment(item.configPath);
          }}
        >
          <span className="min-w-0 truncate">
            {getLocalEnvironmentResultDisplayName(item)}
          </span>
        </MenuChrome.Item>
      ))
    ) : localEnvironments.length === 0 ? (
      <MenuChrome.Message compact={true}>
        <FormattedMessage
          id="codex.environments.noEnvironmentsFound"
          defaultMessage="No environments found"
          description="Message shown when no Codex environments were found"
        />
      </MenuChrome.Message>
    ) : null;
  let environmentList = (
    <div className="vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-0.5 overflow-y-auto pr-1">
      {noEnvironmentItem}
      {defaultEnvironmentItem}
      {environmentItems}
    </div>
  );
  let separator = <MenuSeparator />;
  let settingsLabel = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let settingsItem = (
    <MenuChrome.Item
      LeftIcon={SettingsGearIcon}
      leftIconClassName="icon-sm"
      onSelect={onOpenSettings}
    >
      {settingsLabel}
    </MenuChrome.Item>
  );
  return (
    <div className="flex flex-col gap-0.5 pb-1">
      {environmentList}
      {separator}
      {settingsItem}
    </div>
  );
}
var localEnvironmentSelectorContentModule,
  localEnvironmentSelectorContentJsxRuntime,
  initLocalEnvironmentSelectorContentChunk = once(() => {
    localEnvironmentSelectorContentModule = getChunkModuleExports();
    initIntlRuntime();
    initDropdownMenuPrimitives();
    initSpinnerComponent();
    initCheckmarkIcon();
    initSettingsGearIcon();
    Fu();
    initLocalEnvironmentDisplayNameHelpers();
    di();
    localEnvironmentSelectorContentJsxRuntime = getJsxRuntime();
  });
function LocalEnvironmentActionSetupForm(props) {
  let {
      headerIcon,
      title,
      description,
      commandLabel,
      command,
      onCommandChange,
      commandPlaceholder,
      extraFields,
      leftAction,
      submitLabel,
      submitDisabled = false,
      submitLoading = false,
      onSubmit,
    } = props,
    commandInputId = localEnvironmentActionSetupFormReactRuntime.useId(),
    headerSection = localEnvironmentActionSetupFormJsxRuntime.jsx(
      DialogSection,
      {
        children: (
          <DialogHeader
            icon={headerIcon}
            subtitle={description}
            title={title}
          />
        ),
      },
    );
  let extraFieldsSection = extraFields
    ? localEnvironmentActionSetupFormJsxRuntime.jsx(DialogSection, {
        children: localEnvironmentActionSetupFormJsxRuntime.jsx($e, {
          className: "gap-3",
          children: extraFields,
        }),
      })
    : null;
  let commandLabelNode = (
    <label
      className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
      htmlFor={commandInputId}
    >
      {commandLabel}
    </label>
  );
  let handleCommandInputChange = (event) => {
    onCommandChange(event.target.value);
  };
  let commandTextarea = (
    <textarea
      id={commandInputId}
      className="focus-visible:ring-token-focus min-h-44 w-full resize-none rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none placeholder:text-token-input-placeholder-foreground focus-visible:ring-2"
      placeholder={commandPlaceholder}
      value={command}
      onChange={handleCommandInputChange}
    />
  );
  let commandFieldSection = localEnvironmentActionSetupFormJsxRuntime.jsx(
    DialogSection,
    {
      children: localEnvironmentActionSetupFormJsxRuntime.jsxs($e, {
        className: "gap-2",
        children: [commandLabelNode, commandTextarea],
      }),
    },
  );
  let submitButton = localEnvironmentActionSetupFormJsxRuntime.jsx(Button, {
    color: "primary",
    disabled: submitDisabled,
    loading: submitLoading,
    type: "submit",
    children: submitLabel,
  });
  let footerSection = localEnvironmentActionSetupFormJsxRuntime.jsx(
    DialogSection,
    {
      children: (
        <DialogFooterActions className="justify-between">
          {leftAction}
          {submitButton}
        </DialogFooterActions>
      ),
    },
  );
  let formContent = localEnvironmentActionSetupFormJsxRuntime.jsxs(DialogBody, {
    className: "gap-3",
    children: [
      headerSection,
      extraFieldsSection,
      commandFieldSection,
      footerSection,
    ],
  });
  return (
    <form className="flex flex-col gap-0" onSubmit={onSubmit}>
      {formContent}
    </form>
  );
}
var localEnvironmentActionSetupFormModule,
  localEnvironmentActionSetupFormReactRuntime,
  localEnvironmentActionSetupFormJsxRuntime,
  initLocalEnvironmentActionSetupFormChunk = once(() => {
    localEnvironmentActionSetupFormModule = getChunkModuleExports();
    localEnvironmentActionSetupFormReactRuntime = toEsModule(
      loadReactModule(),
      1,
    );
    initButtonComponentPrimitives();
    initDialogLayoutComponents();
    localEnvironmentActionSetupFormJsxRuntime = getJsxRuntime();
  });
function AddLocalEnvironmentActionForm(props) {
  let {
      action,
      configPath,
      environment,
      hostConfig,
      onOpenSettings,
      onRunAction,
      onSaved,
      onUpdate,
      workspaceRoot,
    } = props,
    intl = useIntl(),
    queryClient = useQueryClient(),
    saveConfigMutation = useAppServerMutation("local-environment-config-save"),
    DropdownComponent,
    SetupFormComponent,
    nameInputId,
    handleSubmit,
    submitDisabled,
    iconDropdownAlign,
    commandPlaceholder,
    descriptionNode,
    iconDropdownContentWidth,
    iconDropdownTriggerButton,
    iconMenuItems,
    nameRowClassName,
    nameFieldClassName,
    nameLabelNode,
    commandValue,
    commandLabelNode;
  {
    let createIconOption = (iconOptionConfig) => ({
      ariaLabel: intl.formatMessage(iconOptionConfig.message),
      icon: addLocalEnvironmentActionFormJsxRuntime.jsx(md, {
        icon: iconOptionConfig.value,
      }),
      value: iconOptionConfig.value,
    });
    let iconOptions = ld.map(createIconOption),
      selectedIconOption =
        iconOptions.find((item) => item.value === action.icon) ??
        iconOptions[0],
      defaultEnvironmentName =
        cl(workspaceRoot) ??
        intl.formatMessage({
          id: "settings.localEnvironments.environment.defaultName",
          defaultMessage: "local",
          description: "Fallback name for the local environment",
        });
    let environmentName = defaultEnvironmentName,
      trimmedActionName = action.name.trim();
    let savedActionName = trimmedActionName,
      trimmedCommand = action.command.trim();
    let savedCommand = trimmedCommand;
    submitDisabled =
      savedActionName.length === 0 ||
      savedCommand.length === 0 ||
      saveConfigMutation.isPending;
    nameInputId = `local-env-action-name-${action.id}`;
    let submitNewAction;
    submitNewAction = (event) => {
      if ((event.preventDefault(), submitDisabled)) return;
      let currentEnvironment = environment.environment,
        savedAction = {
          ...action,
          command: savedCommand,
          name: savedActionName,
        },
        runActionPayload = {
          command: savedCommand,
          icon: action.icon,
          name: savedActionName,
          ...(action.platform
            ? {
                platform: action.platform,
              }
            : {}),
        },
        rawEnvironmentConfig = sd({
          actions: [...hd(currentEnvironment.actions ?? []), savedAction],
          cleanupPlatformScripts: cd(currentEnvironment.cleanup),
          cleanupScript: currentEnvironment.cleanup?.script ?? "",
          name: currentEnvironment.name || environmentName,
          setupPlatformScripts: cd(currentEnvironment.setup),
          setupScript: currentEnvironment.setup.script ?? "",
          version: currentEnvironment.version ?? 1,
        });
      saveConfigMutation.mutate(
        {
          configPath,
          hostId: hostConfig.id,
          raw: rawEnvironmentConfig,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: createQueryKey("local-environment-config", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            queryClient.invalidateQueries({
              queryKey: createQueryKey("local-environment", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            workspaceRoot != null &&
              queryClient.invalidateQueries({
                queryKey: createQueryKey("local-environments", {
                  hostId: hostConfig.id,
                  workspaceRoot,
                }),
              });
            onSaved();
            onRunAction(runActionPayload);
          },
        },
      );
    };
    handleSubmit = submitNewAction;
    SetupFormComponent = LocalEnvironmentActionSetupForm;
    commandValue = action.command;
    commandLabelNode = (
      <FormattedMessage
        id="threadPage.runAction.setup.commandLabel"
        defaultMessage="Command to run"
        description="Label for run action command input"
      />
    );
    commandPlaceholder = intl.formatMessage({
      id: "threadPage.runAction.setup.placeholder",
      defaultMessage: "eg:\nnpm install\nnpm run",
      description: "Placeholder text for the run action command input",
    });
    descriptionNode = (
      <FormattedMessage
        id="settings.localEnvironments.actions.add.description"
        defaultMessage="Create a new command to run from the toolbar."
        description="Description for adding a local environment action"
      />
    );
    nameFieldClassName = "flex w-full flex-col gap-2";
    let nameLabelText;
    nameLabelText = (
      <FormattedMessage
        id="settings.localEnvironments.actions.item.name"
        defaultMessage="Name"
        description="Label for local environment action name"
      />
    );
    nameLabelNode = (
      <label
        className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
        htmlFor={nameInputId}
      >
        {nameLabelText}
      </label>
    );
    nameRowClassName = "flex items-center gap-2";
    DropdownComponent = DropdownMenu;
    iconDropdownAlign = "start";
    iconDropdownContentWidth = "icon";
    iconDropdownTriggerButton = addLocalEnvironmentActionFormJsxRuntime.jsx(
      Button,
      {
        id: `local-env-action-icon-${action.id}`,
        "aria-label": selectedIconOption.ariaLabel,
        className: "w-12 justify-center text-sm",
        color: "secondary",
        size: "toolbar",
        children: selectedIconOption.icon,
      },
    );
    let renderIconOption;
    renderIconOption = (iconOption) => (
      <MenuChrome.Item
        key={iconOption.value}
        tooltipText={iconOption.ariaLabel}
        onSelect={() => {
          onUpdate({
            icon: iconOption.value,
          });
        }}
      >
        {iconOption.icon}
      </MenuChrome.Item>
    );
    iconMenuItems = iconOptions.map(renderIconOption);
  }
  let iconDropdown = addLocalEnvironmentActionFormJsxRuntime.jsx(
    DropdownComponent,
    {
      align: iconDropdownAlign,
      contentWidth: iconDropdownContentWidth,
      triggerButton: iconDropdownTriggerButton,
      children: iconMenuItems,
    },
  );
  let handleNameChange = (event) => {
    onUpdate({
      name: event.target.value,
    });
  };
  let nameInputField = (
    <div className="flex-1">
      <input
        id={nameInputId}
        className="w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-0"
        value={action.name}
        onChange={handleNameChange}
      />
    </div>
  );
  let nameEditorRow = (
    <div className={nameRowClassName}>
      {iconDropdown}
      {nameInputField}
    </div>
  );
  let extraFields = (
    <div className={nameFieldClassName}>
      {nameLabelNode}
      {nameEditorRow}
    </div>
  );
  let headerIconName = action.icon ?? "tool",
    headerIcon = addLocalEnvironmentActionFormJsxRuntime.jsx(md, {
      className: "icon-base text-token-foreground",
      icon: headerIconName,
    });
  let settingsLabel = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let settingsButton = addLocalEnvironmentActionFormJsxRuntime.jsx(Button, {
    className: "px-0",
    color: "ghost",
    size: "toolbar",
    type: "button",
    onClick: onOpenSettings,
    children: settingsLabel,
  });
  let saveLabel = (
    <FormattedMessage
      id="settings.localEnvironments.actions.add.save"
      defaultMessage="Save"
      description="Save button label for adding a local environment action"
    />
  );
  let titleNode = (
    <FormattedMessage
      id="settings.localEnvironments.actions.add"
      defaultMessage="Add action"
      description="Button label to add a local environment action"
    />
  );
  let handleCommandChange = (command) => {
    onUpdate({
      command: command,
    });
  };
  return addLocalEnvironmentActionFormJsxRuntime.jsx(SetupFormComponent, {
    command: commandValue,
    commandLabel: commandLabelNode,
    commandPlaceholder: commandPlaceholder,
    description: descriptionNode,
    extraFields: extraFields,
    headerIcon: headerIcon,
    leftAction: settingsButton,
    submitDisabled: submitDisabled,
    submitLabel: saveLabel,
    submitLoading: saveConfigMutation.isPending,
    title: titleNode,
    onCommandChange: handleCommandChange,
    onSubmit: handleSubmit,
  });
}
var addLocalEnvironmentActionFormModule,
  addLocalEnvironmentActionFormJsxRuntime,
  initAddLocalEnvironmentActionFormChunk = once(() => {
    addLocalEnvironmentActionFormModule = getChunkModuleExports();
    initReactQueryRuntime();
    initIntlRuntime();
    initButtonComponentPrimitives();
    initDropdownMenuPrimitives();
    fd();
    ud();
    dd();
    gl();
    initVscodeApiBridge();
    initLocalEnvironmentActionSetupFormChunk();
    addLocalEnvironmentActionFormJsxRuntime = getJsxRuntime();
  });
var recentLocalEnvironmentActionsByKeySignal,
  initRecentLocalEnvironmentActionsSignal = once(() => {
    yi();
    recentLocalEnvironmentActionsByKeySignal = createPersistedSignal(
      "local-env-recent-actions-by-key",
      {},
    );
  });
function isRecentLocalEnvironmentAction(
  recentActionsByKey: RecentLocalEnvironmentActionsByKey | null | undefined,
  hostId: string,
): boolean {
  let environmentKey = getHostCodexHome(hostId);
  return (
    recentActionsByKey != null &&
    isPathInCodexWorktree(recentActionsByKey, environmentKey)
  );
}
var localEnvironmentRecentActionsModule,
  initLocalEnvironmentRecentActions = once(() => {
    localEnvironmentRecentActionsModule = getChunkModuleExports();
    initPathHelpers();
    initHostCodexHomeQuery();
  });
function useLocalConversationEnvironmentState(workspaceRoot, hostConfig) {
  let scope = useScope(appScope),
    hostId = hostConfig.id,
    workspaceEnvironmentKey = workspaceRoot
      ? normalizeWorkspacePath(workspaceRoot)
      : null;
  let recentEnvironmentKey = workspaceEnvironmentKey,
    localEnvironmentParams = {
      hostId: hostId,
      workspaceRoot: workspaceRoot,
    };
  let localEnvironmentState = Oa(localEnvironmentParams),
    isCodexWorktree = isRecentLocalEnvironmentAction(
      recentEnvironmentKey,
      hostConfig.id,
    ),
    { data } = useGitAvailabilityQuery(
      workspaceRoot,
      hostConfig,
      "use_local_conversation_environment",
    ),
    localEnvironments = localEnvironmentState.environments,
    localEnvironmentsLoading = localEnvironmentState.isLoading,
    localEnvironmentsFetching = localEnvironmentState.isFetching,
    localEnvironmentsError = localEnvironmentState.error != null,
    setConfigMutationOptions = {
      onSuccess: (result, variables) => {
        result.success &&
          data?.root &&
          eo(
            scope,
            data,
            hostConfig,
            variables.value,
            "use_local_conversation_environment",
          );
      },
    };
  let setConfigValueMutation = useHostMutation(
      "set-config-value",
      hostConfig,
      setConfigMutationOptions,
    ),
    { data: selectedEnvironmentConfigValue } = ku(
      isCodexWorktree ? recentEnvironmentKey : null,
      hostConfig,
      LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
      "worktree",
      "use_local_conversation_environment",
    ),
    selectedConfigPath =
      selectedEnvironmentConfigValue === "__none__"
        ? null
        : selectedEnvironmentConfigValue,
    normalizedSelectedConfigPath = selectedConfigPath
      ? or(selectedConfigPath)
      : null;
  let selectedNormalizedConfigPath = normalizedSelectedConfigPath,
    resolvedConfigPath = isCodexWorktree
      ? selectedConfigPath
      : localEnvironmentState.resolvedConfigPath,
    normalizedResolvedConfigPath = isCodexWorktree
      ? selectedNormalizedConfigPath
      : (localEnvironmentState.normalizedResolvedConfigPath ?? null),
    queryConfigPath = resolvedConfigPath ?? "",
    environmentQueryParams = {
      configPath: queryConfigPath,
      hostId: hostId,
    };
  let isEnvironmentQueryEnabled = resolvedConfigPath != null,
    environmentQueryConfig = {
      enabled: isEnvironmentQueryEnabled,
    };
  let environmentQueryOptions = {
    params: environmentQueryParams,
    select: selectSuccessfulLocalEnvironment,
    queryConfig: environmentQueryConfig,
  };
  let { data: _data = null } = useHostQuery(
      "local-environment",
      environmentQueryOptions,
    ),
    hasSavedActions =
      (_data?.environment.actions ?? []).length > 0 ||
      localEnvironments.some(hasSuccessfulLocalEnvironmentActions);
  let hasAnySavedActions = hasSavedActions,
    canChangeEnvironment =
      localEnvironmentState.workspaceKey != null &&
      (!isCodexWorktree || data?.root != null),
    selectEnvironment = (configPath) => {
      if (isCodexWorktree) {
        if (!data?.root) return;
        let storedValue = configPath ?? "__none__";
        setConfigValueMutation.mutate({
          root: data.root,
          key: LOCAL_ENVIRONMENT_CONFIG_PATH_SETTING_KEY,
          operationSource: "use_local_conversation_environment",
          value: storedValue,
          scope: "worktree",
        });
        return;
      }
      localEnvironmentState.updateSelection(configPath);
    };
  let setEnvironmentSelection = selectEnvironment,
    resolvedEnvironmentConfigPath = resolvedConfigPath ?? null,
    isLocalEnvironmentsLoading =
      localEnvironmentsLoading || localEnvironmentsFetching;
  return {
    workspaceRoot: workspaceRoot,
    codexWorktree: isCodexWorktree,
    environment: _data,
    resolvedEnvironmentConfigPath: resolvedEnvironmentConfigPath,
    localEnvironments: localEnvironments,
    localEnvironmentsLoading: isLocalEnvironmentsLoading,
    localEnvironmentsError: localEnvironmentsError,
    defaultEnvironment: localEnvironmentState.defaultEnvironment,
    defaultEnvironmentNormalized:
      localEnvironmentState.defaultEnvironmentNormalized,
    availableEnvironments: localEnvironmentState.availableEnvironments,
    normalizedResolvedConfigPath: normalizedResolvedConfigPath,
    canChangeEnvironment: canChangeEnvironment,
    setEnvironmentSelection: setEnvironmentSelection,
    hasSavedActions: hasAnySavedActions,
  };
}
function hasSuccessfulLocalEnvironmentActions(environmentResult) {
  return environmentResult.type === "success"
    ? (environmentResult.environment.actions ?? []).length > 0
    : false;
}
function selectSuccessfulLocalEnvironment(environmentResponse) {
  return environmentResponse.environment.type === "success"
    ? environmentResponse.environment
    : null;
}
var localConversationEnvironmentStateModule,
  initLocalConversationEnvironmentStateChunk = once(() => {
    localConversationEnvironmentStateModule = getChunkModuleExports();
    initScopeRuntime();
    initPathHelpers();
    initGitBranchQueryRuntime();
    Au();
    initGitQueryKeyHelpers();
    za();
    initAppScope();
    di();
    initVscodeApiBridge();
    initLocalEnvironmentRecentActions();
  });
function LocalConversationEnvironmentActionControls(props) {
  let {
      conversationId,
      hostConfig,
      onMenuOpenChange,
      workspaceRoot,
      onOpenChange,
      onShowTerminal,
      registerCommands,
    } = props,
    scope = useScope(appScope),
    intl = useIntl(),
    location = useLocation(),
    navigate = useNavigate(),
    {
      environment,
      resolvedEnvironmentConfigPath,
      localEnvironmentsLoading,
      localEnvironmentsError,
      localEnvironments: localEnvironments,
      availableEnvironments,
      defaultEnvironment,
      defaultEnvironmentNormalized,
      normalizedResolvedConfigPath,
      canChangeEnvironment,
      setEnvironmentSelection,
    } = useLocalConversationEnvironmentState(workspaceRoot, hostConfig),
    hasNoLocalEnvironments =
      !localEnvironmentsLoading &&
      !localEnvironmentsError &&
      localEnvironments.length === 0,
    { data } = useGitAvailabilityQuery(
      workspaceRoot,
      hostConfig,
      "local_conversation_action_compound_button",
    ),
    { data: _data } = useOsInfo(),
    [recentActionsByKey, setRecentActionsByKey] = useSignalState(
      recentLocalEnvironmentActionsByKeySignal,
    ),
    [isMenuOpen, setMenuOpen] =
      localEnvironmentActionControlsReactRuntime.useState(false),
    repoRoot = data?.root ?? null,
    platform = _data?.platform ?? null,
    environmentActions = environment?.environment.actions,
    actionItems = getLocalEnvironmentActionItems(
      environmentActions,
      platform,
      aa,
    ),
    environmentActionKey = resolveLocalEnvironmentActionKey({
      configPath: environment?.configPath ?? null,
      joinPath: joinLocalEnvironmentRepoPath,
      relativePath: environment?.cwdRelativeToGitRoot ?? null,
      repoRoot: repoRoot,
      workspaceRoot,
    }),
    recentActionNames = getRecentLocalEnvironmentActions(
      recentActionsByKey,
      environmentActionKey,
    ),
    sortedActionItems =
      actionItems == null
        ? null
        : recentActionNames.length > 0
          ? sortLocalEnvironmentActionItemsByRecentActionNames(
              actionItems,
              recentActionNames,
            )
          : actionItems,
    primaryActionItem = sortedActionItems?.[0] ?? null,
    primaryShortcut = useScopedValue(
      localEnvironmentActionShortcutSignal,
      primaryActionItem?.commandId ?? aa[0],
    ),
    commandActionItems = actionItems ?? EMPTY_LOCAL_ENVIRONMENT_ACTION_ITEMS,
    runEnvironmentAction = useStableCallback((actionRunRequest) => {
      let { action } = actionRunRequest,
        actionCwd = resolveLocalEnvironmentActionCwd({
          joinPath: joinLocalEnvironmentRepoPath,
          relativePath: environment?.cwdRelativeToGitRoot ?? null,
          repoRoot: repoRoot,
          workspaceRoot,
        });
      if (actionCwd == null || !conversationId) {
        logger.error("Can not run action. Cwd is not set");
        return;
      }
      setRecentActionsByKey(
        prependRecentLocalEnvironmentAction(
          recentActionsByKey,
          environmentActionKey ?? actionCwd,
          action.name,
        ),
      );
      let runId = createLocalEnvironmentActionRunId({
        conversationId,
        encodeEnvironmentKey: Jo,
        environmentKey: environmentActionKey ?? actionCwd,
        runId: actionRunRequest.runId,
      });
      onShowTerminal(runId);
      environmentTerminalControllerService.runAction(runId, {
        command: action.command,
        cwd: actionCwd,
        title: action.name,
      });
    }),
    setMenuOpenAndNotify = (open) => {
      setMenuOpen(open);
      onMenuOpenChange?.(open);
    };
  let handleMenuOpenChange = useStableCallback(setMenuOpenAndNotify),
    openEnvironmentSettings = () => {
      setMenuOpen(false);
      onMenuOpenChange?.(false);
      sc(scope, hostConfig.id);
      let searchParams = new URLSearchParams({
        workspaceRoot,
      });
      resolvedEnvironmentConfigPath != null &&
        searchParams.set("configPath", resolvedEnvironmentConfigPath);
      navigate(`/settings/local-environments?${searchParams.toString()}`);
    };
  let openSettings = useStableCallback(openEnvironmentSettings),
    openCreateEnvironmentPage = () => {
      setMenuOpen(false);
      onMenuOpenChange?.(false);
      sc(scope, hostConfig.id);
      navigate(
        To({
          workspaceRoot,
        }),
        {
          state: {
            hostId: hostConfig.id,
            returnTo: `${location.pathname}${location.search}${location.hash}`,
          },
        },
      );
    };
  let createEnvironment = useStableCallback(openCreateEnvironmentPage),
    openAddActionPopover = () => {
      resolvedEnvironmentConfigPath == null ||
        environment == null ||
        (setMenuOpen(false),
        onMenuOpenChange?.(false),
        openScopedModal(scope, AddLocalEnvironmentActionPopoverContent, {
          configPath: resolvedEnvironmentConfigPath,
          environment,
          hostConfig,
          onOpenSettings: openSettings,
          onRunAction: (action) => {
            runEnvironmentAction({
              action: action,
              commandId: null,
              runId: `environmentAction${(environment.environment.actions ?? []).length + 1}`,
            });
          },
          workspaceRoot,
        }));
    };
  let openAddAction = openAddActionPopover;
  if (
    conversationId != null &&
    environment != null &&
    resolvedEnvironmentConfigPath != null
  ) {
    let actionsTitleText = intl.formatMessage({
      id: "settings.localEnvironments.actions.title",
      defaultMessage: "Actions",
      description: "Title for local environment actions section",
    });
    let actionsTitle = actionsTitleText,
      primaryAction = primaryActionItem?.action ?? null,
      primaryActionTitle = primaryAction
        ? intl.formatMessage(
            {
              id: "threadPage.runAction.summaryRow.primaryActionTitle",
              defaultMessage: "Run: {actionName}",
              description:
                "Tooltip and accessible label for the primary run action row in the summary panel",
            },
            {
              actionName: primaryAction.name,
            },
          )
        : null,
      runPrimaryAction = () => {
        primaryActionItem != null &&
          (setMenuOpen(false),
          onMenuOpenChange?.(false),
          runEnvironmentAction(primaryActionItem));
      },
      commandRegistration = registerCommands
        ? localEnvironmentActionControlsJsxRuntime.jsx(
            RegisterLocalEnvironmentActionCommands,
            {
              actions: commandActionItems,
              conversationId,
              onRunAction: runEnvironmentAction,
            },
          )
        : null,
      actionsIcon = <MoreHorizontalIcon className="icon-xs" />;
    let actionsButton = (
      <button
        aria-label={actionsTitle}
        className={localEnvironmentActionIconButtonClassName}
        title={actionsTitle}
        type="button"
      >
        {actionsIcon}
      </button>
    );
    let actionsTriggerButton = localEnvironmentActionControlsJsxRuntime.jsx(
      Tooltip,
      {
        tooltipContent: actionsTitle,
        delayOpen: true,
        children: actionsButton,
      },
    );
    let menuTitle = (
      <MenuChrome.Title>
        {environment == null ? (
          <FormattedMessage
            id="settings.localEnvironments.actions.title"
            defaultMessage="Actions"
            description="Title for local environment actions section"
          />
        ) : (
          <FormattedMessage
            id="threadPage.runAction.dropdown.titleWithEnvironment"
            defaultMessage={"{environmentName} actions"}
            description="Title for the run action dropdown when an environment is selected"
            values={{
              environmentName:
                getLocalEnvironmentResultDisplayName(environment),
            }}
          />
        )}
      </MenuChrome.Title>
    );
    let actionMenuItems = sortedActionItems?.map((actionItem) =>
        localEnvironmentActionControlsJsxRuntime.jsx(
          LocalEnvironmentActionMenuItem,
          {
            actionItem: actionItem,
            isPrimaryAction: actionItem === primaryActionItem,
            onRunAction: runEnvironmentAction,
          },
          actionItem.action.name,
        ),
      ),
      addActionLabel = (
        <FormattedMessage
          id="settings.localEnvironments.actions.add"
          defaultMessage="Add action"
          description="Button label to add a local environment action"
        />
      );
    let addActionItem = (
      <MenuChrome.Item
        LeftIcon={PlusIcon}
        leftIconClassName="icon-sm"
        onSelect={openAddAction}
      >
        {addActionLabel}
      </MenuChrome.Item>
    );
    let changeEnvironmentMenu = canChangeEnvironment ? (
      <>
        <MenuSeparator />
        <DropdownMenuSubmenu
          trigger={
            <MenuChrome.Item
              LeftIcon={SettingsGearIcon}
              leftIconClassName="icon-sm"
            >
              <FormattedMessage
                id="threadPage.runAction.changeEnvironment"
                defaultMessage="Change environment"
                description="Menu item to change the active local environment"
              />
            </MenuChrome.Item>
          }
        >
          <LocalEnvironmentSelectorContent
            availableEnvironments={availableEnvironments}
            defaultEnvironment={defaultEnvironment}
            defaultEnvironmentNormalized={defaultEnvironmentNormalized}
            localEnvironments={localEnvironments}
            localEnvironmentsError={localEnvironmentsError}
            localEnvironmentsLoading={localEnvironmentsLoading}
            normalizedResolvedConfigPath={normalizedResolvedConfigPath}
            onOpenSettings={openSettings}
            onSelectEnvironment={(configPath) => {
              setEnvironmentSelection(configPath);
              setMenuOpen(false);
              onMenuOpenChange?.(false);
            }}
          />
        </DropdownMenuSubmenu>
      </>
    ) : null;
    let actionsDropdown = (
      <DropdownMenu
        align="end"
        contentWidth="workspace"
        open={isMenuOpen}
        side="bottom"
        onOpenChange={handleMenuOpenChange}
        triggerButton={actionsTriggerButton}
      >
        {menuTitle}
        {actionMenuItems}
        {addActionItem}
        {changeEnvironmentMenu}
      </DropdownMenu>
    );
    let primaryActionButton =
      primaryActionItem != null && primaryActionTitle != null
        ? localEnvironmentActionControlsJsxRuntime.jsx(Tooltip, {
            tooltipContent: primaryActionTitle,
            shortcut:
              primaryActionItem.commandId == null ? null : primaryShortcut,
            delayOpen: true,
            children: (
              <button
                aria-label={primaryActionTitle}
                className={localEnvironmentActionIconButtonClassName}
                title={primaryActionTitle}
                type="button"
                onClick={runPrimaryAction}
              >
                {localEnvironmentActionControlsJsxRuntime.jsx(md, {
                  icon: primaryActionItem.action.icon ?? "tool",
                })}
              </button>
            ),
          })
        : null;
    return (
      <div className="ms-auto flex min-w-0 items-center">
        {commandRegistration}
        {actionsDropdown}
        {primaryActionButton}
      </div>
    );
  }
  let createEnvironmentLabel = intl.formatMessage({
    id: "threadPage.runAction.environment.create",
    defaultMessage: "Create environment",
    description: "CTA to create a local environment from a thread",
  });
  let environmentSelectorLabel = intl.formatMessage({
    id: "threadPage.runAction.environmentSelector.label",
    defaultMessage: "Choose environment",
    description:
      "Tooltip and aria label for the environment selector button when no environment is selected",
  });
  let environmentSelectorTitle = environmentSelectorLabel,
    handleEnvironmentSelect = (configPath) => {
      setEnvironmentSelection(configPath);
      setMenuOpen(false);
      onOpenChange?.(false);
    };
  let environmentSelectorContent = (
    <LocalEnvironmentSelectorContent
      localEnvironmentsLoading={localEnvironmentsLoading}
      localEnvironmentsError={localEnvironmentsError}
      localEnvironments={localEnvironments}
      availableEnvironments={availableEnvironments}
      defaultEnvironment={defaultEnvironment}
      defaultEnvironmentNormalized={defaultEnvironmentNormalized}
      normalizedResolvedConfigPath={normalizedResolvedConfigPath}
      onSelectEnvironment={handleEnvironmentSelect}
      onOpenSettings={openSettings}
    />
  );
  let selectorContent = environmentSelectorContent,
    handleSelectorOpenChangeRaw = (open) => {
      setMenuOpen(open);
      onOpenChange?.(open);
    };
  let handleSelectorOpenChange = handleSelectorOpenChangeRaw,
    electronEnvironmentControls = localEnvironmentActionControlsJsxRuntime.jsx(
      PlatformContentGate,
      {
        electron: true,
        children: hasNoLocalEnvironments
          ? localEnvironmentActionControlsJsxRuntime.jsx(Tooltip, {
              tooltipContent: createEnvironmentLabel,
              delayOpen: true,
              children: localEnvironmentActionControlsJsxRuntime.jsx(Button, {
                "aria-label": createEnvironmentLabel,
                className: "ms-auto",
                color: "ghost",
                disabled: !canChangeEnvironment,
                size: "icon",
                type: "button",
                onClick: createEnvironment,
                children: <PlusIcon className="icon-sm" />,
              }),
            })
          : localEnvironmentActionControlsJsxRuntime.jsx(
              LocalEnvironmentSelectorDropdown,
              {
                canChangeEnvironment,
                open: isMenuOpen,
                title: environmentSelectorTitle,
                onOpenChange: handleSelectorOpenChange,
                children: selectorContent,
              },
            ),
      },
    );
  let browserEnvironmentControls = localEnvironmentActionControlsJsxRuntime.jsx(
    PlatformContentGate,
    {
      browser: true,
      chromeExtension: true,
      extension: true,
      children: localEnvironmentActionControlsJsxRuntime.jsx(
        LocalEnvironmentSelectorDropdown,
        {
          canChangeEnvironment,
          open: isMenuOpen,
          title: environmentSelectorTitle,
          onOpenChange: handleSelectorOpenChange,
          children: selectorContent,
        },
      ),
    },
  );
  return (
    <>
      {electronEnvironmentControls}
      {browserEnvironmentControls}
    </>
  );
}
function LocalEnvironmentSelectorDropdown(props) {
  let { canChangeEnvironment, children, open, title, onOpenChange } = props,
    isDisabled = !canChangeEnvironment,
    triggerDisabled = !canChangeEnvironment,
    triggerIcon = <SettingsGearIcon className="icon-sm" />;
  let triggerButton = localEnvironmentActionControlsJsxRuntime.jsx(Button, {
    "aria-label": title,
    className: "ms-auto",
    color: "ghost",
    disabled: triggerDisabled,
    size: "icon",
    children: triggerIcon,
  });
  let tooltipTrigger = localEnvironmentActionControlsJsxRuntime.jsx(Tooltip, {
    tooltipContent: title,
    delayOpen: true,
    children: triggerButton,
  });
  return (
    <DropdownMenu
      align="end"
      contentWidth="workspace"
      disabled={isDisabled}
      open={open}
      side="bottom"
      triggerButton={tooltipTrigger}
      onOpenChange={onOpenChange}
    >
      {children}
    </DropdownMenu>
  );
}
function AddLocalEnvironmentActionPopoverContent(props) {
  let {
      configPath,
      environment,
      hostConfig,
      onClose,
      onOpenSettings,
      onRunAction,
      workspaceRoot,
    } = props,
    [draftAction, setDraftAction] =
      localEnvironmentActionControlsReactRuntime.useState(
        createEmptyLocalEnvironmentActionDraft,
      ),
    openSettingsAndClose = () => {
      onClose();
      onOpenSettings();
    };
  let updateDraftAction = (patch) => {
    setDraftAction((currentDraft) => ({
      ...currentDraft,
      ...patch,
    }));
  };
  let formNode = (
    <AddLocalEnvironmentActionForm
      action={draftAction}
      configPath={configPath}
      environment={environment}
      hostConfig={hostConfig}
      onOpenSettings={openSettingsAndClose}
      onRunAction={onRunAction}
      onSaved={onClose}
      onUpdate={updateDraftAction}
      workspaceRoot={workspaceRoot}
    />
  );
  return localEnvironmentActionControlsJsxRuntime.jsx(AppDialog, {
    open: true,
    contentClassName:
      "!w-[379px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)] !p-0",
    onOpenChange: onClose,
    children: formNode,
  });
}
function createEmptyLocalEnvironmentActionDraft() {
  return pd("");
}
function LocalEnvironmentActionMenuItem(props) {
  let { actionItem, isPrimaryAction, onRunAction } = props,
    { commandId } = actionItem;
  if (commandId == null) {
    return localEnvironmentActionControlsJsxRuntime.jsx(
      LocalEnvironmentActionMenuRow,
      {
        actionItem,
        isPrimaryAction,
        shortcut: null,
        onRunAction,
      },
    );
  }
  return localEnvironmentActionControlsJsxRuntime.jsx(
    LocalEnvironmentActionMenuItemWithShortcut,
    {
      actionItem,
      commandId,
      isPrimaryAction,
      onRunAction,
    },
  );
}
function LocalEnvironmentActionMenuItemWithShortcut(props) {
  let { actionItem, commandId, isPrimaryAction, onRunAction } = props,
    shortcut = useScopedValue(localEnvironmentActionShortcutSignal, commandId);
  return localEnvironmentActionControlsJsxRuntime.jsx(
    LocalEnvironmentActionMenuRow,
    {
      actionItem,
      isPrimaryAction,
      shortcut: shortcut,
      onRunAction,
    },
  );
}
function LocalEnvironmentActionMenuRow(props) {
  let { actionItem, isPrimaryAction, shortcut, onRunAction } = props,
    { action } = actionItem,
    handleSelect = () => {
      onRunAction(actionItem);
    };
  let iconName = action.icon ?? "tool",
    iconNode = (
      <MenuChrome.ItemIcon>
        {localEnvironmentActionControlsJsxRuntime.jsx(md, {
          icon: iconName,
        })}
      </MenuChrome.ItemIcon>
    );
  let labelNode = (
    <span className="min-w-0 flex-1 truncate">{action.name}</span>
  );
  let primaryMarker = isPrimaryAction
    ? localEnvironmentActionControlsJsxRuntime.jsx(CheckIcon, {
        className: "icon-xs shrink-0 text-token-description-foreground",
      })
    : null;
  let shortcutNode = shortcut ? (
    <span className="shrink-0 text-xs text-token-description-foreground">
      {shortcut}
    </span>
  ) : null;
  let contentNode = (
    <span className="flex w-full min-w-0 items-center gap-2">
      {labelNode}
      {primaryMarker}
      {shortcutNode}
    </span>
  );
  return (
    <MenuChrome.Item key={action.name} onSelect={handleSelect}>
      {iconNode}
      {contentNode}
    </MenuChrome.Item>
  );
}
function RegisterLocalEnvironmentActionCommands(props) {
  let { actions, conversationId, onRunAction } = props,
    registeredCommandItems = aa.map((item, index) =>
      localEnvironmentActionControlsJsxRuntime.jsx(
        RegisterLocalEnvironmentActionCommand,
        {
          actionItem: actions[index],
          commandId: item,
          conversationId,
          index,
          onRunAction,
        },
        item,
      ),
    );
  return <>{registeredCommandItems}</>;
}
function RegisterLocalEnvironmentActionCommand(props) {
  let { actionItem, commandId, conversationId, index, onRunAction } = props,
    intl = useIntl(),
    enabled = actionItem != null && conversationId != null,
    commandTitle =
      actionItem == null
        ? ""
        : intl.formatMessage(
            {
              id: "threadPage.runAction.commandMenu.title",
              defaultMessage: "Run: {actionName}",
              description:
                "Command menu item title for a local environment action",
            },
            {
              actionName: actionItem.action.name,
            },
          );
  let title = commandTitle,
    runAction = () => {
      actionItem != null && onRunAction(actionItem);
    };
  let commandConfig;
  commandConfig = {
    enabled: enabled,
  };
  useCommandRegistration(commandId, runAction, commandConfig);
  let actionName = actionItem?.action.name,
    actionCommand = actionItem?.action.command,
    actionIcon = actionItem?.action.icon,
    dependencies = [actionName, actionCommand, actionIcon, commandId];
  let renderCommandItem = (closeMenu) => {
    if (actionItem == null) return null;
    let { action } = actionItem;
    return localEnvironmentActionControlsJsxRuntime.jsx(dl, {
      value: title,
      keywords: ["environment", "action"],
      title: title,
      leftAccessory: localEnvironmentActionControlsJsxRuntime.jsx(md, {
        className: "icon-xs shrink-0",
        icon: action.icon ?? "tool",
      }),
      rightAccessory: (
        <LocalEnvironmentActionShortcutBadge commandId={commandId} />
      ),
      onSelect: () => {
        onRunAction(actionItem);
        closeMenu();
      },
    });
  };
  let registration;
  return (
    (registration = {
      id: commandId,
      groupKey: "workspace",
      enabled: enabled,
      order: index,
      dependencies: dependencies,
      render: renderCommandItem,
    }),
    registerThreadSidePanelTab(registration),
    null
  );
}
function LocalEnvironmentActionShortcutBadge(props) {
  let { commandId } = props,
    shortcut = useScopedValue(localEnvironmentActionShortcutSignal, commandId);
  return shortcut
    ? localEnvironmentActionControlsJsxRuntime.jsx(KeyboardShortcutKeycap, {
        keysLabel: shortcut,
      })
    : null;
}
var localEnvironmentActionControlsModule,
  localEnvironmentActionControlsReactRuntime,
  localEnvironmentActionControlsJsxRuntime,
  localEnvironmentActionIconButtonClassName,
  EMPTY_LOCAL_ENVIRONMENT_ACTION_ITEMS,
  initLocalEnvironmentActionControlsChunk = once(() => {
    localEnvironmentActionControlsModule = getChunkModuleExports();
    Ca();
    initQueryRuntime();
    initScopeRuntime();
    localEnvironmentActionControlsReactRuntime = toEsModule(
      loadReactModule(),
      1,
    );
    initIntlRuntime();
    xr();
    Ei();
    initThreadSidePanelTabRegistryChunk();
    initKeyboardModifierState();
    initButtonComponentPrimitives();
    initAppDialog();
    initDropdownMenuPrimitives();
    initKeyboardShortcutKeycap();
    initModalRegistrySignal();
    initTooltipPrimitives();
    initElectronPlatformContent();
    il();
    initGitQueryKeyHelpers();
    initOsInfoQuery();
    initCheckmarkIcon();
    _t();
    initSettingsGearIcon();
    initMoreHorizontalIcon();
    initLocalEnvironmentDisplayNameHelpers();
    initLocalEnvironmentSelectorContentChunk();
    initAddLocalEnvironmentActionFormChunk();
    initRecentLocalEnvironmentActionsSignal();
    initLocalConversationEnvironmentStateChunk();
    initAppScope();
    fd();
    wo();
    dd();
    ws();
    initEnvironmentTerminalController();
    es();
    initLoggerRuntime();
    di();
    initKeyboardShortcutLabel();
    localEnvironmentActionControlsJsxRuntime = getJsxRuntime();
    localEnvironmentActionIconButtonClassName =
      "flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center rounded-sm border-0 bg-transparent p-0 text-token-text-tertiary hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background";
    EMPTY_LOCAL_ENVIRONMENT_ACTION_ITEMS = [];
  });
function BranchChangesSummaryRow(props) {
  let { onOpenReviewTab, diffStats, isDiffStatsLoading } = props,
    branchIcon = branchChangesSummaryRowJsxRuntime.jsx(uc, {
      className: "icon-sm shrink-0",
    }),
    changesLabel = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.branchChangesLabel"
        defaultMessage="Changes"
        description="Label for the branch changes row"
      />
    );
  let trailingDiffStats = isDiffStatsLoading ? (
    branchChangesSummaryRowJsxRuntime.jsx(SpinnerIcon, {
      className: "icon-xs text-token-text-tertiary",
    })
  ) : diffStats == null ? null : (
    <Ml
      className="text-size-chat shrink-0"
      linesAdded={diffStats.additions}
      linesRemoved={diffStats.deletions}
    />
  );
  return (
    <SummaryPanelRow
      icon={branchIcon}
      label={changesLabel}
      onClick={onOpenReviewTab}
      trailing={trailingDiffStats}
      trailingVisible={true}
    />
  );
}
var branchChangesSummaryRowModule,
  branchChangesSummaryRowJsxRuntime,
  initBranchChangesSummaryRowChunk = once(() => {
    branchChangesSummaryRowModule = getChunkModuleExports();
    initIntlRuntime();
    initSpinnerComponent();
    Nl();
    pc();
    initSummaryPanelRowChunk();
    branchChangesSummaryRowJsxRuntime = getJsxRuntime();
  });
function buildPullRequestCommentsFixPrompt({ baseBranch, headBranch, number }) {
  return [
    "## Pull request comments:",
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and address the attached outstanding PR comments with the smallest safe changes.`,
    "Start from the attached unresolved review threads and comments.",
    "Address every actionable comment without asking the user which ones to handle.",
    "If a comment needs clarification, is already outdated, or should not be changed, explain that clearly instead of guessing.",
    MY_REQUEST_PROMPT_HEADER,
    "Address all actionable attached PR feedback.",
  ].join("\n");
}
function getPullRequestCommentsFixDisabledReason({
  baseBranch,
  conversationId,
  headBranch,
  prNumber,
}) {
  return (
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-pr-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
function setPullRequestCommentsAttached(
  scope,
  { attached, commentAttachments, conversationId },
) {
  return conversationId == null || commentAttachments.length === 0
    ? false
    : (updatePullRequestReviewCommentAttachments(
        scope,
        conversationId,
        (currentAttachments) => {
          if (attached)
            return appendMissingReviewCommentAttachments(
              currentAttachments,
              commentAttachments,
            );
          let removedAttachmentKeys = new Set(
              commentAttachments.map(getReviewCommentAttachmentKeyValue),
            ),
            nextAttachments = currentAttachments.filter(
              (item) =>
                !removedAttachmentKeys.has(
                  getReviewCommentAttachmentKeyValue(item),
                ),
            );
          return nextAttachments.length === currentAttachments.length
            ? currentAttachments
            : nextAttachments;
        },
      ),
      true);
}
function attachPullRequestCommentsAndPromptFix(
  scope,
  {
    baseBranch,
    commentAttachments,
    conversationId,
    focusComposer,
    headBranch,
    number,
  },
) {
  return baseBranch == null ||
    conversationId == null ||
    headBranch == null ||
    number == null ||
    commentAttachments.length === 0
    ? false
    : (setPullRequestCommentsAttached(scope, {
        attached: true,
        commentAttachments,
        conversationId,
      }),
      as(
        scope,
        buildPullRequestCommentsFixPrompt({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      focusComposer && ts(),
      true);
}
function appendMissingReviewCommentAttachments(
  currentAttachments,
  attachmentsToAdd,
) {
  let nextAttachments = [...currentAttachments],
    existingAttachmentKeys = new Set(
      currentAttachments.map(getReviewCommentAttachmentKeyValue),
    ),
    didAppend = false;
  for (let attachment of attachmentsToAdd) {
    let attachmentKey = getReviewCommentAttachmentKeyValue(attachment);
    existingAttachmentKeys.has(attachmentKey) ||
      (existingAttachmentKeys.add(attachmentKey),
      nextAttachments.push(attachment),
      (didAppend = true));
  }
  return didAppend ? nextAttachments : currentAttachments;
}
var initPullRequestCommentFixHelpersChunk = once(() => {
  da();
  cs();
  Zo();
  initPullRequestReviewCommentHelpers();
  at();
});
function PullRequestCommentsFixDisabledTooltip(props) {
  let { reason } = props;
  if (reason == null) return null;
  switch (reason) {
    case "missing-conversation": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingConversation"
          defaultMessage="Addressing PR comments is only available in an active chat"
          description="Tooltip shown when the PR comments action is disabled because there is no active conversation"
        />
      );
    }
    case "missing-pr-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed to address comments"
          description="Tooltip shown when the PR comments action is disabled because required pull request information is unavailable"
        />
      );
    }
  }
}
function PullRequestFixDisabledTooltip(props) {
  let { reason } = props;
  if (reason == null) return null;
  switch (reason) {
    case "branch-mismatch": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.branchMismatch"
          defaultMessage="Switch back to the chat branch to use Fix"
          description="Tooltip shown when Fix is disabled because the checked out branch differs from the thread branch"
        />
      );
    }
    case "closed-pr": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.closedPullRequest"
          defaultMessage="Fix is only available for open pull requests"
          description="Tooltip shown when Fix is disabled because the pull request is closed"
        />
      );
    }
    case "missing-branch-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingBranchInfo"
          defaultMessage="Fix requires both the head and base branch"
          description="Tooltip shown when Fix is disabled because the pull request branch metadata is unavailable"
        />
      );
    }
    case "missing-pr-info": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed for Fix"
          description="Tooltip shown when Fix is disabled because required pull request information is unavailable"
        />
      );
    }
    case "missing-conversation": {
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingConversation"
          defaultMessage="Fix is only available in an active chat"
          description="Tooltip shown when Fix is disabled because there is no active conversation"
        />
      );
    }
  }
}
var pullRequestFixDisabledTooltipModule,
  pullRequestFixDisabledTooltipJsxRuntime,
  initPullRequestFixDisabledTooltipChunk = once(() => {
    pullRequestFixDisabledTooltipModule = getChunkModuleExports();
    initIntlRuntime();
    pullRequestFixDisabledTooltipJsxRuntime = getJsxRuntime();
  });
function getPullRequestFixDisabledReason({
  baseBranch,
  conversationId,
  fixDisabledReason,
  hasOpenPr,
  headBranch,
  prNumber,
}) {
  return (
    (hasOpenPr === false ? "closed-pr" : fixDisabledReason) ??
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-branch-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
var initPullRequestFailingChecksPromptChunk = once(() => {});
function buildPullRequestFailingChecksFixPrompt({
  baseBranch,
  headBranch,
  number,
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and make the smallest safe fix for the attached failing CI.`,
    "Start from the attached failing-check context. Then use `gh` to inspect the latest runs, annotations, and logs for those failures before changing code.",
    "Treat `gh` as the primary source of truth for workflow runs, job logs, annotations, and links to any external CI.",
    "Resolve the PR with `gh pr view` or `gh pr checks` and inspect failing GitHub Actions runs with `gh run view`, including logs.",
    "If `gh pr checks` rejects a requested JSON field, retry with the available fields instead of guessing.",
    "If a GitHub Actions run log is incomplete because the run is still in progress, fall back to the per-job logs that GitHub exposes.",
    "If the failure can be diagnosed from GitHub, fix it directly.",
    "If the failure requires external CI logs (for example Buildkite):",
    "- first use `gh` to locate the external run or job URL and linked details",
    "- then check whether any installed skills or tools can access that CI system",
    "- then check whether the required credentials, permissions, tokens, or MCP or tool access are actually available",
    "- if anything is missing, stop and tell the user exactly what is missing and exactly what they can provide to unblock you",
    "- otherwise fetch the external logs, diagnose the issue, and make the smallest safe fix",
    "Do not guess without logs. Do not do unrelated refactors. Be explicit if blocked. After fixing, run the narrowest relevant verification, commit and push the fix, and summarize the root cause, fix, and result.",
    MY_REQUEST_PROMPT_HEADER,
    "Use gh to inspect the failing CI and make the smallest safe fix. Once everything is fixed, commit and push it.",
  ].join("\n");
}
function getPullRequestCheckAttachmentKey(check) {
  return check.link ?? `${check.workflow ?? ""}:${check.name}`;
}
function setPullRequestFailingChecksAttached(scope, { attached, checks }) {
  let failingChecks = checks.filter((item) => item.status === "failing");
  return failingChecks.length === 0
    ? false
    : (ms(scope, (pullRequestContext) => {
        if (!attached) {
          let failingCheckKeys = new Set(
            failingChecks.map(getPullRequestCheckAttachmentKey),
          );
          pullRequestContext.pullRequestChecks =
            pullRequestContext.pullRequestChecks.filter(
              (item) =>
                !failingCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
            );
          return;
        }
        let attachedCheckKeys = new Set(
          pullRequestContext.pullRequestChecks.map(
            getPullRequestCheckAttachmentKey,
          ),
        );
        pullRequestContext.pullRequestChecks.push(
          ...failingChecks.filter(
            (item) =>
              !attachedCheckKeys.has(getPullRequestCheckAttachmentKey(item)),
          ),
        );
      }),
      true);
}
function attachFailingPullRequestChecksAndPromptFix(
  scope,
  { baseBranch, checks, headBranch, number },
) {
  return baseBranch == null ||
    headBranch == null ||
    number == null ||
    !setPullRequestFailingChecksAttached(scope, {
      attached: true,
      checks,
    })
    ? false
    : (as(
        scope,
        buildPullRequestFailingChecksFixPrompt({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      ts(),
      true);
}
function buildPullRequestMergeConflictFixPrompt({
  baseBranch,
  headBranch,
  number,
}) {
  return [
    PULL_REQUEST_FIX_PROMPT_PREAMBLE,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and resolve the attached merge conflict blocker with the smallest safe changes.`,
    "Start from the attached merge conflict context. Then use `gh pr view` and local git state to confirm the current merge blocker before changing code.",
    "Fetch the latest base branch, merge or rebase as appropriate for this repository, resolve the conflicts, and avoid unrelated refactors.",
    "After resolving conflicts, run the narrowest relevant verification, commit and push the resolution, and summarize the conflict and result.",
    MY_REQUEST_PROMPT_HEADER,
    "Resolve the PR merge conflicts, then commit and push the fix.",
  ].join("\n");
}
function attachPullRequestMergeConflictAndPromptFix(scope, mergeConflict) {
  return mergeConflict == null
    ? false
    : (as(
        scope,
        buildPullRequestMergeConflictFixPrompt({
          baseBranch: mergeConflict.baseBranch,
          headBranch: mergeConflict.headBranch,
          number: mergeConflict.number,
        }),
      ),
      setPullRequestMergeConflictAttachment(scope, mergeConflict),
      ts(),
      true);
}
function setPullRequestMergeConflictAttachment(scope, mergeConflict) {
  ms(scope, (pullRequestContext) => {
    pullRequestContext.pullRequestMergeConflict = mergeConflict;
  });
}
var initPullRequestFixActionHelpersChunk = once(() => {
  cs();
  Zo();
  at();
});
function PullRequestRichTooltip(props) {
  let { children, content, triggerAsChild = false } = props,
    tooltipContent = pullRequestRichTooltipJsxRuntime.jsx(TooltipProvider, {
      children: content,
    });
  let triggerContent = pullRequestRichTooltipJsxRuntime.jsx(TooltipProvider, {
    children,
  });
  return pullRequestRichTooltipJsxRuntime.jsx(Tooltip, {
    align: "start",
    className: "w-full border-0 bg-transparent p-0 text-left",
    delayDuration: 0,
    interactive: true,
    side: "right",
    sideOffset: 4,
    variant: "rich",
    tooltipContent: tooltipContent,
    tooltipMaxWidth:
      "min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
    triggerAsChild: triggerAsChild,
    children: triggerContent,
  });
}
function PullRequestFlyoutContent(props) {
  let { children } = props,
    body =
      children == null ? null : (
        <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3">
          {children}
        </div>
      );
  return (
    <div className="flex max-h-96 min-h-0 w-96 max-w-full flex-1 flex-col overflow-hidden rounded-xl py-1">
      {body}
    </div>
  );
}
var pullRequestRichTooltipModule,
  pullRequestRichTooltipJsxRuntime,
  initPullRequestRichTooltipChunk = once(() => {
    pullRequestRichTooltipModule = getChunkModuleExports();
    initTooltipPrimitives();
    pullRequestRichTooltipJsxRuntime = getJsxRuntime();
  });
function PullRequestChecksSummaryRow(props) {
  let {
    canFixFailingChecks = false,
    fixTooltipContent,
    onFixFailingChecks,
    pullRequestStatus,
  } = props;
  if (pullRequestStatus == null || pullRequestStatus.checks.length === 0)
    return null;
  let failingChecks = pullRequestStatus.checks.filter(
    isFailingPullRequestCheck,
  );
  let checksToFix = failingChecks,
    hasFixableFailingChecks =
      checksToFix.length > 0 && onFixFailingChecks != null,
    getChecksByStatus = (status) =>
      pullRequestStatus.checks.filter((item) => item.status === status),
    orderedChecks = PULL_REQUEST_CHECK_STATUS_ORDER.flatMap(getChecksByStatus),
    checkRows = orderedChecks.map(PullRequestCheckFlyoutRowItem);
  let popoverContent = pullRequestStatusDetailRowsJsxRuntime.jsx(
    PullRequestFlyoutContent,
    {
      children: checkRows,
    },
  );
  let fixFailingChecksAction = hasFixableFailingChecks
    ? pullRequestStatusDetailRowsJsxRuntime.jsx(PullRequestInlineActionButton, {
        color: "ghostTertiary",
        disabled: !canFixFailingChecks,
        tooltipContent: fixTooltipContent,
        onClick: () => {
          onFixFailingChecks(checksToFix);
        },
        children: (
          <FormattedMessage
            id="codex.localConversation.gitSummary.fixFailingChecks"
            defaultMessage="Fix"
            description="Summary panel row action label for fixing failing pull request checks"
          />
        ),
      })
    : undefined;
  let actionsVisible = hasFixableFailingChecks,
    checksIcon = <Vl checks={pullRequestStatus.checks} />;
  let checksLabel = getPullRequestChecksSummaryLabel(
    pullRequestStatus.checks,
    pullRequestStatus.ciStatus,
  );
  let summaryRow = (
    <SummaryPanelRow
      actions={fixFailingChecksAction}
      actionsVisible={actionsVisible}
      icon={checksIcon}
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={checksLabel}
    />
  );
  return pullRequestStatusDetailRowsJsxRuntime.jsx(PullRequestRichTooltip, {
    triggerAsChild: hasFixableFailingChecks,
    content: popoverContent,
    children: summaryRow,
  });
}
function PullRequestCheckFlyoutRowItem(check, index) {
  return (
    <PullRequestCheckFlyoutRow
      key={`${check.name}-${check.workflow ?? ""}-${index}`}
      check={check}
    />
  );
}
function isFailingPullRequestCheck(check) {
  return check.status === "failing";
}
function PullRequestCheckFlyoutRow(props) {
  let { check } = props,
    checkLink = check.link,
    statusIcon = <PullRequestCheckStatusIcon status={check.status} />;
  let isInteractive = checkLink != null,
    statusLabel = (
      <span className="text-sm text-token-description-foreground">
        <PullRequestCheckStatusLabel status={check.status} />
      </span>
    );
  let handleClick =
    checkLink == null
      ? undefined
      : (event) => {
          openInBrowserFromEvent({
            event: event,
            href: checkLink,
            initiator: "pull_request_link",
          });
        };
  return (
    <SummaryPanelRow
      icon={statusIcon}
      interactive={isInteractive}
      label={check.name}
      trailing={statusLabel}
      trailingVisible={true}
      onClick={handleClick}
    />
  );
}
function PullRequestCheckStatusIcon(props) {
  let { status } = props;
  switch (status) {
    case "failing": {
      return pullRequestStatusDetailRowsJsxRuntime.jsx(zc, {
        className: "icon-sm shrink-0 text-token-charts-red",
      });
    }
    case "passing": {
      return pullRequestStatusDetailRowsJsxRuntime.jsx(CheckCircleIcon, {
        className: "icon-sm shrink-0 text-token-charts-green",
      });
    }
    case "pending": {
      return <Gl className="icon-sm shrink-0 text-token-charts-yellow" />;
    }
    case "skipped":
    case "unknown": {
      return (
        <PullRequestUnknownCheckIcon className="icon-sm shrink-0 text-token-text-tertiary" />
      );
    }
  }
}
function PullRequestCheckStatusLabel(props) {
  let { status } = props;
  switch (status) {
    case "failing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.failed"
          defaultMessage="Failed"
          description="Status label for a failed check in the thread summary panel flyout"
        />
      );
    }
    case "passing": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.succeeded"
          defaultMessage="Succeeded"
          description="Status label for a successful check in the thread summary panel flyout"
        />
      );
    }
    case "pending": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.running"
          defaultMessage="Running"
          description="Status label for a pending check in the thread summary panel flyout"
        />
      );
    }
    case "skipped": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.skipped"
          defaultMessage="Skipped"
          description="Status label for a skipped check in the thread summary panel flyout"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.unknown"
          defaultMessage="Unknown"
          description="Status label for an unknown check in the thread summary panel flyout"
        />
      );
    }
  }
}
function getPullRequestChecksSummaryLabel(checks, ciStatus) {
  let failingCheckCount = checks.filter(
      (item) => item.status === "failing",
    ).length,
    pendingCheckCount = checks.filter(
      (item) => item.status === "pending",
    ).length;
  if (failingCheckCount > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.failingChecks.count"
        defaultMessage={
          "{count, plural, one {# failing check} other {# failing checks}}"
        }
        description="Summary panel row label when pull request checks are failing"
        values={{
          count: failingCheckCount,
        }}
      />
    );
  if (pendingCheckCount > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.pendingChecks.count"
        defaultMessage={
          "{count, plural, one {# pending check} other {# pending checks}}"
        }
        description="Summary panel row label when pull request checks are pending"
        values={{
          count: pendingCheckCount,
        }}
      />
    );
  switch (ciStatus) {
    case "passing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksSuccessful"
          defaultMessage="Checks successful"
          description="Summary panel row label when all pull request checks have completed successfully"
        />
      );
    case "none":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.noChecks"
          defaultMessage="No CI checks"
          description="Summary panel row label when the pull request has no checks"
        />
      );
    case "failing":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checksFailing"
          defaultMessage="Checks failing"
          description="Summary panel row label when pull request checks failed without individual failure details"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.pendingChecks"
          defaultMessage="Pending checks"
          description="Summary panel row label when pull request checks are pending without individual pending details"
        />
      );
  }
}
var pullRequestStatusDetailRowsModule,
  pullRequestStatusDetailRowsJsxRuntime,
  PULL_REQUEST_CHECK_STATUS_ORDER,
  initPullRequestStatusDetailRowsChunk = once(() => {
    pullRequestStatusDetailRowsModule = getChunkModuleExports();
    initIntlRuntime();
    initExternalUrlHelpers();
    initCheckCircleFilledIcon();
    initPullRequestCheckStatusIconChunk();
    ql();
    Kc();
    Ul();
    initPullRequestInlineActionButtonChunk();
    initPullRequestRichTooltipChunk();
    initSummaryPanelRowChunk();
    pullRequestStatusDetailRowsJsxRuntime = getJsxRuntime();
    PULL_REQUEST_CHECK_STATUS_ORDER = [
      "failing",
      "pending",
      "skipped",
      "unknown",
      "passing",
    ];
  });
function PullRequestStatusDetailRows(props) {
  let { conversationId, headBranch, pullRequestStatus } = props,
    scope = useScope(composerScope),
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ),
    reviewCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    );
  if (pullRequestStatus == null || !pullRequestStatus.hasOpenPr) return null;
  let baseBranch = pullRequestStatus.boardItem?.baseBranch ?? null,
    pullRequestHeadBranch =
      pullRequestStatus.boardItem?.headBranch ?? headBranch,
    pullRequestNumber = pullRequestStatus.number,
    pullRequestUrl =
      pullRequestStatus.url ?? pullRequestStatus.boardItem?.url ?? null,
    existingReviewCommentKeySet = new Set(
      reviewCommentAttachments.map(getReviewCommentAttachmentKey),
    );
  let reviewCommentKeySet = existingReviewCommentKeySet,
    hasUnresolvedReviewComments;
  {
    let isNewCommentAttachment;
    isNewCommentAttachment = (commentAttachment) =>
      !reviewCommentKeySet.has(
        getReviewCommentAttachmentKeyValue(commentAttachment),
      );
    hasUnresolvedReviewComments = pullRequestStatus.commentAttachments.some(
      isNewCommentAttachment,
    );
  }
  let hasNewCommentAttachments = hasUnresolvedReviewComments,
    hasFailingChecks = pullRequestStatus.checks.some(
      isFailingPullRequestCheckStatus,
    );
  let canShowFailingChecksFix = hasFailingChecks,
    hasMergeConflicts = pullRequestStatus.mergeBlocker === "conflicts",
    hasCommentAttachments = pullRequestStatus.commentAttachments.length > 0,
    fixDisabledReason =
      canShowFailingChecksFix || hasMergeConflicts || hasNewCommentAttachments
        ? conversationId == null
          ? "missing-conversation"
          : xc({
                currentBranch: headBranch,
                storedThreadBranch: storedThreadBranch,
              }).hasThreadBranchMismatch
            ? "branch-mismatch"
            : null
        : null,
    failingChecksFixDisabledReason = canShowFailingChecksFix
      ? getPullRequestFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          fixDisabledReason: fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let checksFixDisabledReason = failingChecksFixDisabledReason,
    mergeConflictFixDisabledReason = hasMergeConflicts
      ? getPullRequestFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          fixDisabledReason: fixDisabledReason,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestUrl == null ? null : pullRequestNumber,
        })
      : null;
  let conflictFixDisabledReason = mergeConflictFixDisabledReason,
    commentsFixDisabledReason = hasNewCommentAttachments
      ? getPullRequestCommentsFixDisabledReason({
          baseBranch: baseBranch,
          conversationId,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let reviewCommentsFixDisabledReason = commentsFixDisabledReason,
    openMergeConflictsFix = () => {
      attachPullRequestMergeConflictAndPromptFix(
        scope,
        baseBranch == null ||
          pullRequestHeadBranch == null ||
          pullRequestNumber == null ||
          pullRequestUrl == null
          ? null
          : {
              baseBranch: baseBranch,
              headBranch: pullRequestHeadBranch,
              number: pullRequestNumber,
              repo: pullRequestStatus.repo,
              url: pullRequestUrl,
            },
      );
    };
  let handleFixMergeConflicts = openMergeConflictsFix,
    openReviewCommentsFix = () => {
      attachPullRequestCommentsAndPromptFix(scope, {
        baseBranch: baseBranch,
        commentAttachments: pullRequestStatus.commentAttachments,
        conversationId,
        focusComposer: true,
        headBranch: pullRequestHeadBranch,
        number: pullRequestNumber,
      });
    };
  let handleFixReviewComments = openReviewCommentsFix,
    canFixFailingChecks = checksFixDisabledReason == null,
    failingChecksTooltipContent =
      checksFixDisabledReason == null
        ? undefined
        : pullRequestSummaryRowsJsxRuntime.jsx(PullRequestFixDisabledTooltip, {
            reason: checksFixDisabledReason,
          });
  let handleFixFailingChecks = (checks) => {
    attachFailingPullRequestChecksAndPromptFix(scope, {
      baseBranch: baseBranch,
      checks: checks,
      headBranch: pullRequestHeadBranch,
      number: pullRequestNumber,
    });
  };
  let checksRow = (
    <PullRequestChecksSummaryRow
      canFixFailingChecks={canFixFailingChecks}
      fixTooltipContent={failingChecksTooltipContent}
      onFixFailingChecks={handleFixFailingChecks}
      pullRequestStatus={pullRequestStatus}
    />
  );
  let mergeConflictsRow = hasMergeConflicts ? (
    <SummaryPanelRow
      actions={pullRequestSummaryRowsJsxRuntime.jsx(
        PullRequestInlineActionButton,
        {
          color: "ghostTertiary",
          disabled: conflictFixDisabledReason != null,
          tooltipContent:
            conflictFixDisabledReason == null
              ? undefined
              : pullRequestSummaryRowsJsxRuntime.jsx(
                  PullRequestFixDisabledTooltip,
                  {
                    reason: conflictFixDisabledReason,
                  },
                ),
          onClick: handleFixMergeConflicts,
          children: (
            <FormattedMessage
              id="codex.localConversation.gitSummary.fixMergeConflicts"
              defaultMessage="Fix"
              description="Summary panel row action label for resolving pull request merge conflicts"
            />
          ),
        },
      )}
      actionsVisible={true}
      icon={
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          <Qc className="icon-xs text-token-charts-red" />
        </span>
      }
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={
        <FormattedMessage
          id="codex.localConversation.gitSummary.mergeConflicts"
          defaultMessage="Merge conflicts"
          description="Summary panel row label when the pull request has merge conflicts"
        />
      }
    />
  ) : null;
  let commentsRow = hasCommentAttachments
    ? pullRequestSummaryRowsJsxRuntime.jsx(PullRequestRichTooltip, {
        triggerAsChild: true,
        content: pullRequestSummaryRowsJsxRuntime.jsx(
          PullRequestFlyoutContent,
          {
            children: (
              <div className="flex flex-col gap-2 py-1">
                {pullRequestStatus.commentAttachments.map((item, index) => {
                  let activityItem =
                    item.reviewThreadId == null
                      ? null
                      : pullRequestStatus.activityItems.find(
                          (_item) =>
                            _item.type === "review_comment" &&
                            _item.reviewThreadId === item.reviewThreadId,
                        );
                  return (
                    <Qo
                      key={`${item.url ?? ""}-${index}`}
                      authorAvatarUrl={activityItem?.authorAvatarUrl}
                      authorLogin={activityItem?.authorLogin}
                      bodyPreview={true}
                      comment={item}
                      createdAt={activityItem?.createdAt}
                      onOpenInReview={() => {
                        Zs(scope, {
                          comment: item,
                        });
                      }}
                      url={item.url ?? null}
                    />
                  );
                })}
              </div>
            ),
          },
        ),
        children: (
          <SummaryPanelRow
            actions={
              hasNewCommentAttachments
                ? pullRequestSummaryRowsJsxRuntime.jsx(
                    PullRequestInlineActionButton,
                    {
                      color: "ghostTertiary",
                      disabled: reviewCommentsFixDisabledReason != null,
                      tooltipContent:
                        reviewCommentsFixDisabledReason == null
                          ? undefined
                          : pullRequestSummaryRowsJsxRuntime.jsx(
                              PullRequestCommentsFixDisabledTooltip,
                              {
                                reason: reviewCommentsFixDisabledReason,
                              },
                            ),
                      onClick: handleFixReviewComments,
                      children: (
                        <FormattedMessage
                          id="codex.localConversation.gitSummary.fixComments"
                          defaultMessage="Fix"
                          description="Summary panel row action label for fixing pull request comments"
                        />
                      ),
                    },
                  )
                : undefined
            }
            actionsVisible={hasNewCommentAttachments}
            icon={
              <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                <CommentBubbleIcon className="icon-xs text-token-text-tertiary" />
              </span>
            }
            interactive={true}
            labelClassName="text-token-text-tertiary"
            label={
              <FormattedMessage
                id="codex.localConversation.gitSummary.comments.count"
                defaultMessage={
                  "{count, plural, one {# comment} other {# comments}}"
                }
                description="Summary panel row label for pull request comments"
                values={{
                  count: pullRequestStatus.commentAttachments.length,
                }}
              />
            }
          />
        ),
      })
    : null;
  return (
    <>
      {checksRow}
      {mergeConflictsRow}
      {commentsRow}
    </>
  );
}
function isFailingPullRequestCheckStatus(check) {
  return check.status === "failing";
}
function getReviewCommentAttachmentKey(commentAttachment) {
  return getReviewCommentAttachmentKeyValue(commentAttachment);
}
var pullRequestSummaryRowsModule,
  pullRequestSummaryRowsJsxRuntime,
  initPullRequestSummaryRowsChunk = once(() => {
    pullRequestSummaryRowsModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initConversationStateSelectors();
    da();
    initPullRequestReviewCommentHelpers();
    Oo();
    tl();
    Yc();
    initPullRequestCommentFixHelpersChunk();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestFailingChecksPromptChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    ls();
    initComposerScope();
    lc();
    initPullRequestRichTooltipChunk();
    initSummaryPanelRowChunk();
    initPullRequestStatusDetailRowsChunk();
    pullRequestSummaryRowsJsxRuntime = getJsxRuntime();
  });
function getPullRequestTitleOrFallback(title, fallbackTitle) {
  return title?.trim() || fallbackTitle;
}
var initPullRequestTitleFallbackChunk = once(() => {});
function PullRequestSidePanelErrorMessage(props) {
  let { description } = props,
    errorDescription = description ?? (
      <FormattedMessage
        id="pullRequestSidePanel.error.description"
        defaultMessage="Couldn’t load this pull request section"
        description="Fallback error description for pull request sections"
      />
    );
  return (
    <div className="px-2 py-3 text-base text-token-charts-red">
      {errorDescription}
    </div>
  );
}
var pullRequestSidePanelErrorMessageModule,
  pullRequestSidePanelErrorMessageJsxRuntime,
  initPullRequestSidePanelErrorMessageChunk = once(() => {
    pullRequestSidePanelErrorMessageModule = getChunkModuleExports();
    initIntlRuntime();
    pullRequestSidePanelErrorMessageJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelDetailsSummary(props) {
  let { action, children } = props,
    chevronIcon = pullRequestSidePanelDetailsSummaryJsxRuntime.jsx(
      ChevronIcon,
      {
        className:
          "icon-2xs rotate-180 transition-transform group-open:rotate-0",
      },
    );
  let titleNode = (
    <span className="flex min-w-0 items-center gap-1">
      {children}
      {chevronIcon}
    </span>
  );
  let actionNode =
    action == null ? null : (
      <span
        className="flex shrink-0"
        onClick={stopDetailsSummaryActionClick}
        onKeyDown={stopDetailsSummaryActionKeyDown}
      >
        {action}
      </span>
    );
  return (
    <summary className="flex min-h-9 cursor-interaction list-none items-center justify-between gap-2 text-base text-token-text-tertiary marker:hidden">
      {titleNode}
      {actionNode}
    </summary>
  );
}
function stopDetailsSummaryActionKeyDown(event) {
  event.stopPropagation();
}
function stopDetailsSummaryActionClick(event) {
  event.preventDefault();
  event.stopPropagation();
}
var pullRequestSidePanelDetailsSummaryModule,
  pullRequestSidePanelDetailsSummaryJsxRuntime,
  initPullRequestSidePanelDetailsSummaryChunk = once(() => {
    pullRequestSidePanelDetailsSummaryModule = getChunkModuleExports();
    initChevronDownIcon();
    pullRequestSidePanelDetailsSummaryJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelLoadingState(props) {
  let { label } = props,
    spinnerIcon = pullRequestSidePanelLoadingStateJsxRuntime.jsx(SpinnerIcon, {
      className: "icon-sm",
    });
  return (
    <div
      aria-busy="true"
      className="flex min-h-16 items-center justify-center text-token-text-tertiary"
    >
      {spinnerIcon}
      <span className="sr-only">{label}</span>
    </div>
  );
}
var pullRequestSidePanelLoadingStateModule,
  pullRequestSidePanelLoadingStateJsxRuntime,
  initPullRequestSidePanelLoadingStateChunk = once(() => {
    pullRequestSidePanelLoadingStateModule = getChunkModuleExports();
    initSpinnerComponent();
    pullRequestSidePanelLoadingStateJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelChecksSection(props) {
  let { data, error, fixDisabledReason, item, loading } = props,
    intl = useIntl(),
    scope = useScope(composerScope),
    attachedChecks = useSignalValue(attachedPullRequestChecksSignal),
    failingChecks = data?.checks.filter(isFailingPullRequestCheck),
    attachedCheckKeys = new Set(
      attachedChecks.map(getPullRequestCheckAttachmentKey),
    ),
    allFailingChecksAttached =
      failingChecks != null &&
      failingChecks.length > 0 &&
      failingChecks.every((check) =>
        attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check)),
      );
  let fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestChecksSectionJsxRuntime.jsx(
            PullRequestFixDisabledTooltip,
            {
              reason: fixDisabledReason,
            },
          ),
    headerAction =
      failingChecks != null && failingChecks.length > 0
        ? pullRequestChecksSectionJsxRuntime.jsx(
            PullRequestInlineActionButton,
            {
              color: "secondary",
              ariaLabel: allFailingChecksAttached
                ? intl.formatMessage({
                    id: "pullRequestSidePanel.checks.removeAllAccessible",
                    defaultMessage: "Remove all",
                    description:
                      "Accessible label for removing all failing pull request checks from the chat",
                  })
                : intl.formatMessage({
                    id: "pullRequestSidePanel.checks.fixAllAccessible",
                    defaultMessage: "Fix all",
                    description:
                      "Accessible label for fixing all failing pull request checks",
                  }),
              disabled: !allFailingChecksAttached && fixDisabledReason != null,
              inset: true,
              tooltipContent: allFailingChecksAttached
                ? undefined
                : fixDisabledTooltip,
              onClick: () => {
                if (allFailingChecksAttached) {
                  setPullRequestFailingChecksAttached(scope, {
                    attached: false,
                    checks: failingChecks,
                  });
                  return;
                }
                attachFailingPullRequestChecksAndPromptFix(scope, {
                  baseBranch: item.baseBranch,
                  checks: failingChecks,
                  headBranch: item.headBranch,
                  number: item.number,
                });
              },
              children: allFailingChecksAttached ? (
                <FormattedMessage
                  id="pullRequestSidePanel.checks.removeAll"
                  defaultMessage="Remove"
                  description="Button label for removing all failing pull request checks from the chat"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.checks.fixAll"
                  defaultMessage="Fix"
                  description="Button label for fixing all failing pull request checks"
                />
              ),
            },
          )
        : null;
  let title = (
    <FormattedMessage
      id="pullRequestSidePanel.checks.title"
      defaultMessage="Checks"
      description="Checks section title in the pull request side panel"
    />
  );
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      {title}
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary py-1 ps-4 shadow-sm">
      {error == null ? (
        loading || data == null ? (
          <PullRequestSidePanelLoadingState
            label={
              <FormattedMessage
                id="pullRequestSidePanel.checks.loading"
                defaultMessage="Loading checks"
                description="Loading label for pull request checks"
              />
            }
          />
        ) : data.checks.length > 0 ? (
          <PullRequestCheckRows
            canFix={fixDisabledReason == null}
            checks={data.checks}
            density="comfortable"
            fixTooltipContent={fixDisabledTooltip}
            insetFixButtons={true}
            labelTone="primary"
            isCheckAttached={(check) =>
              attachedCheckKeys.has(getPullRequestCheckAttachmentKey(check))
            }
            onFixCheck={(check) => {
              attachFailingPullRequestChecksAndPromptFix(scope, {
                baseBranch: item.baseBranch,
                checks: [check],
                headBranch: item.headBranch,
                number: item.number,
              });
            }}
            onRemoveCheck={(check) => {
              setPullRequestFailingChecksAttached(scope, {
                attached: false,
                checks: [check],
              });
            }}
          />
        ) : (
          <MenuChrome.Message compact={true}>
            <FormattedMessage
              id="pullRequestSidePanel.checks.empty"
              defaultMessage="No checks reported"
              description="Empty pull request checks list"
            />
          </MenuChrome.Message>
        )
      ) : (
        <PullRequestSidePanelErrorMessage description={error} />
      )}
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-1">
      {header}
      {body}
    </details>
  );
}
function isFailingPullRequestCheck(check) {
  return check.status === "failing";
}
var pullRequestChecksSectionModule,
  pullRequestChecksSectionJsxRuntime,
  initPullRequestSidePanelChecksSectionChunk = once(() => {
    pullRequestChecksSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initDropdownMenuPrimitives();
    cs();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    initPullRequestCheckRowsChunk();
    initComposerScope();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    pullRequestChecksSectionJsxRuntime = getJsxRuntime();
  });
function getPullRequestCommentActivityItems(activityItems) {
  return activityItems.filter((item) => item.type !== "event");
}
function getPullRequestReviewerBadgeModels(reviewers) {
  return pullRequestReviewerBadgeUniqBy
    .default([
      ...reviewers.requested,
      ...reviewers.requestedTeams,
      ...reviewers.approved,
      ...reviewers.changesRequested,
      ...reviewers.commented,
    ])
    .map((item) => ({
      kind: reviewers.requestedTeams.includes(item) ? "team" : "user",
      label: item,
      status: getPullRequestReviewerStatus(reviewers, item),
    }));
}
function getPullRequestReviewerStatus(reviewers, login) {
  return reviewers.changesRequested.includes(login)
    ? "changes_requested"
    : reviewers.approved.includes(login)
      ? "approved"
      : "waiting";
}
var pullRequestReviewerBadgeUniqBy,
  initPullRequestReviewerBadgeModelsChunk = once(() => {
    pullRequestReviewerBadgeUniqBy = toEsModule(be(), 1);
  });
function PullRequestSidePanelCommentsSection(props) {
  let { data, error, fixDisabledReason, item, loading } = props,
    intl = useIntl(),
    scope = useScope(composerScope),
    conversationId = scope.value.routeConversationId,
    attachedCommentAttachments = useScopedValue(
      pullRequestReviewCommentAttachmentsSignal,
      conversationId,
    ),
    content;
  {
    let commentActivityItems =
        data == null
          ? null
          : getPullRequestCommentActivityItems(data.activityItems),
      commentAttachments = data?.commentAttachments,
      attachedCommentAttachmentKeys = new Set(
        attachedCommentAttachments.map(getReviewCommentAttachmentKeyValue),
      );
    let allCommentsAttached =
        commentAttachments != null &&
        commentAttachments.length > 0 &&
        commentAttachments.every((attachment) =>
          attachedCommentAttachmentKeys.has(
            getReviewCommentAttachmentKeyValue(attachment),
          ),
        ),
      fixDisabledTooltip =
        fixDisabledReason == null
          ? undefined
          : pullRequestCommentsSectionJsxRuntime.jsx(
              PullRequestFixDisabledTooltip,
              {
                reason: fixDisabledReason,
              },
            );
    let headerAction =
      commentAttachments != null && commentAttachments.length > 0
        ? pullRequestCommentsSectionJsxRuntime.jsx(
            PullRequestInlineActionButton,
            {
              color: "secondary",
              ariaLabel: allCommentsAttached
                ? intl.formatMessage({
                    id: "pullRequestSidePanel.comments.removeAllAccessible",
                    defaultMessage: "Remove all",
                    description:
                      "Accessible label for removing all pull request comments from the chat",
                  })
                : intl.formatMessage({
                    id: "pullRequestSidePanel.comments.fixAllAccessible",
                    defaultMessage: "Fix all",
                    description:
                      "Accessible label for fixing all pull request comments",
                  }),
              disabled: !allCommentsAttached && fixDisabledReason != null,
              inset: true,
              tooltipContent: allCommentsAttached
                ? undefined
                : fixDisabledTooltip,
              onClick: () => {
                if (allCommentsAttached) {
                  setPullRequestCommentsAttached(scope, {
                    attached: false,
                    commentAttachments,
                    conversationId,
                  });
                  return;
                }
                attachPullRequestCommentsAndPromptFix(scope, {
                  baseBranch: item.baseBranch,
                  commentAttachments,
                  conversationId,
                  focusComposer: true,
                  headBranch: item.headBranch,
                  number: item.number,
                });
              },
              children: allCommentsAttached ? (
                <FormattedMessage
                  id="pullRequestSidePanel.comments.removeAll"
                  defaultMessage="Remove"
                  description="Button label for removing all pull request comments from the chat"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.comments.fixAll"
                  defaultMessage="Fix"
                  description="Button label for fixing all pull request comments"
                />
              ),
            },
          )
        : null;
    let title = (
      <FormattedMessage
        id="pullRequestSidePanel.comments.title"
        defaultMessage="Comments"
        description="Comments section title in the pull request side panel"
      />
    );
    let header;
    header = (
      <PullRequestSidePanelDetailsSummary action={headerAction}>
        {title}
      </PullRequestSidePanelDetailsSummary>
    );
    content = (
      <details open={true} className="group flex flex-col pb-8">
        {header}
        {error == null ? (
          loading || data == null ? (
            <PullRequestSidePanelLoadingState
              label={
                <FormattedMessage
                  id="pullRequestSidePanel.comments.loading"
                  defaultMessage="Loading comments"
                  description="Loading label for pull request comments"
                />
              }
            />
          ) : commentActivityItems != null &&
            commentActivityItems.length > 0 ? (
            <div className="flex flex-col gap-1">
              {commentActivityItems.map((activityItem) => {
                let commentAttachment = findCommentAttachmentForActivityItem(
                    activityItem,
                    commentAttachments,
                  ),
                  commentIsAttached =
                    commentAttachment != null &&
                    attachedCommentAttachmentKeys.has(
                      getReviewCommentAttachmentKeyValue(commentAttachment),
                    );
                return (
                  <Qo
                    key={activityItem.id}
                    authorAvatarUrl={activityItem.authorAvatarUrl}
                    authorLogin={activityItem.authorLogin}
                    body={activityItem.body}
                    createdAt={activityItem.createdAt}
                    defaultCollapsed={true}
                    metadataAccessory={
                      commentAttachment == null
                        ? null
                        : pullRequestCommentsSectionJsxRuntime.jsx(
                            PullRequestInlineActionButton,
                            {
                              disabled:
                                !commentIsAttached && fixDisabledReason != null,
                              inset: true,
                              tooltipContent: commentIsAttached
                                ? undefined
                                : fixDisabledTooltip,
                              onClick: () => {
                                if (!commentIsAttached) {
                                  attachPullRequestCommentsAndPromptFix(scope, {
                                    baseBranch: item.baseBranch,
                                    commentAttachments: [commentAttachment],
                                    conversationId,
                                    focusComposer: true,
                                    headBranch: item.headBranch,
                                    number: item.number,
                                  });
                                  return;
                                }
                                setPullRequestCommentsAttached(scope, {
                                  attached: false,
                                  commentAttachments: [commentAttachment],
                                  conversationId,
                                });
                              },
                              children: commentIsAttached ? (
                                <FormattedMessage
                                  id="pullRequestSidePanel.comments.removeFromChat"
                                  defaultMessage="Remove"
                                  description="Button label for removing a pull request comment from the chat"
                                />
                              ) : (
                                <FormattedMessage
                                  id="pullRequestSidePanel.comments.fixComment"
                                  defaultMessage="Fix"
                                  description="Button label for fixing an individual pull request comment"
                                />
                              ),
                            },
                          )
                    }
                    metadataTooltipContent={
                      activityItem.path ?? commentAttachment?.position.path
                    }
                    replies={activityItem.replies}
                    surface="timeline"
                    url={activityItem.url}
                  />
                );
              })}
            </div>
          ) : (
            <MenuChrome.Message compact={true}>
              <FormattedMessage
                id="pullRequestSidePanel.comments.empty"
                defaultMessage="No comments"
                description="Empty pull request comments list"
              />
            </MenuChrome.Message>
          )
        ) : (
          <PullRequestSidePanelErrorMessage description={error} />
        )}
      </details>
    );
  }
  return content;
}
function findCommentAttachmentForActivityItem(
  activityItem,
  commentAttachments,
) {
  return (
    commentAttachments?.find(
      (attachment) =>
        (activityItem.reviewThreadId != null &&
          attachment.reviewThreadId === activityItem.reviewThreadId) ||
        (activityItem.url != null && attachment.url === activityItem.url),
    ) ?? null
  );
}
var pullRequestCommentsSectionModule,
  pullRequestCommentsSectionJsxRuntime,
  initPullRequestSidePanelCommentsSectionChunk = once(() => {
    pullRequestCommentsSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    da();
    initDropdownMenuPrimitives();
    initPullRequestReviewCommentHelpers();
    initPullRequestCommentFixHelpersChunk();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    ls();
    initComposerScope();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    initPullRequestReviewerBadgeModelsChunk();
    pullRequestCommentsSectionJsxRuntime = getJsxRuntime();
  }),
  mergeConflictFileIconJsxRuntime,
  MergeConflictFileIcon,
  initMergeConflictFileIconChunk = once(() => {
    toEsModule(loadReactModule());
    mergeConflictFileIconJsxRuntime = getJsxRuntime();
    MergeConflictFileIcon = (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 20 20"
        {...props}
      >
        <path d="M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Z" />
      </svg>
    );
  });
function PullRequestConflictFileRows(props) {
  let { error, files, hasError, loading, repository } = props;
  if (hasError) {
    return <PullRequestSidePanelErrorMessage description={error} />;
  }
  if (loading || files == null) {
    return (
      <PullRequestSidePanelLoadingState
        label={
          <FormattedMessage
            id="pullRequestSidePanel.conflicts.loading"
            defaultMessage="Loading changed files"
            description="Loading label for merge conflict files"
          />
        }
      />
    );
  }
  if (files.length === 0) {
    return (
      <MenuChrome.Message compact={true}>
        <FormattedMessage
          id="pullRequestSidePanel.conflicts.empty"
          defaultMessage="No changed files reported"
          description="Empty merge conflict file list"
        />
      </MenuChrome.Message>
    );
  }
  let rows;
  {
    let toConflictFileRow = (filePath) => ({
      icon: (
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          {pullRequestConflictFileRowsJsxRuntime.jsx(MergeConflictFileIcon, {
            className: "icon-3xs text-token-text-tertiary",
          })}
        </span>
      ),
      id: filePath,
      label: filePath,
      trailing:
        repository == null ? null : (
          <span className="max-w-52 truncate text-sm text-token-text-tertiary">
            {repository}
          </span>
        ),
    });
    rows = files.map(toConflictFileRow);
  }
  return (
    <PullRequestMetadataRows
      density="comfortable"
      items={rows}
      labelTone="primary"
    />
  );
}
var pullRequestConflictFileRowsModule,
  pullRequestConflictFileRowsJsxRuntime,
  initPullRequestConflictFileRowsChunk = once(() => {
    pullRequestConflictFileRowsModule = getChunkModuleExports();
    initIntlRuntime();
    initDropdownMenuPrimitives();
    initMergeConflictFileIconChunk();
    initPullRequestMetadataRowsChunk();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelLoadingStateChunk();
    pullRequestConflictFileRowsJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelConflictsSection(props) {
  let { error, files, fixDisabledReason, hasError, item, loading, repo } =
      props,
    scope = useScope(composerScope),
    conflictsAreAttached =
      useSignalValue(pullRequestMergeConflictAttachmentSignal)?.url ===
      item.url,
    fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestConflictsSectionJsxRuntime.jsx(
            PullRequestFixDisabledTooltip,
            {
              reason: fixDisabledReason,
            },
          );
  let actionDisabled = !conflictsAreAttached && fixDisabledReason != null,
    actionTooltip = conflictsAreAttached ? undefined : fixDisabledTooltip,
    handleToggleConflictsFix = () => {
      if (conflictsAreAttached) {
        setPullRequestMergeConflictAttachment(scope, null);
        return;
      }
      attachPullRequestMergeConflictAndPromptFix(scope, {
        baseBranch: item.baseBranch,
        headBranch: item.headBranch,
        number: item.number,
        repo,
        url: item.url,
      });
    };
  let actionLabel = conflictsAreAttached ? (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.remove"
      defaultMessage="Remove"
      description="Button label for removing pull request merge conflicts from the chat"
    />
  ) : (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.fix"
      defaultMessage="Fix"
      description="Button label for fixing pull request merge conflicts"
    />
  );
  let headerAction = pullRequestConflictsSectionJsxRuntime.jsx(
    PullRequestInlineActionButton,
    {
      color: "secondary",
      disabled: actionDisabled,
      inset: true,
      tooltipContent: actionTooltip,
      onClick: handleToggleConflictsFix,
      children: actionLabel,
    },
  );
  let title = (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.title"
      defaultMessage="Merge conflicts"
      description="Merge conflicts section title in the pull request side panel"
    />
  );
  let header = (
    <PullRequestSidePanelDetailsSummary action={headerAction}>
      {title}
    </PullRequestSidePanelDetailsSummary>
  );
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary px-4 py-1 shadow-sm">
      {pullRequestConflictsSectionJsxRuntime.jsx(PullRequestConflictFileRows, {
        error,
        files,
        hasError,
        loading,
        repository: repo,
      })}
    </div>
  );
  return (
    <details open={true} className="group flex flex-col gap-2">
      {header}
      {body}
    </details>
  );
}
var pullRequestConflictsSectionModule,
  pullRequestConflictsSectionJsxRuntime,
  initPullRequestSidePanelConflictsSectionChunk = once(() => {
    pullRequestConflictsSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    cs();
    initPullRequestFixDisabledTooltipChunk();
    initPullRequestInlineActionButtonChunk();
    initPullRequestFixActionHelpersChunk();
    initComposerScope();
    initPullRequestConflictFileRowsChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    pullRequestConflictsSectionJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelDescriptionSection(props) {
  let { body, error, loading } = props,
    header = (
      <PullRequestSidePanelDetailsSummary>
        <FormattedMessage
          id="pullRequestSidePanel.description.title"
          defaultMessage="Description"
          description="Pull request description section title"
        />
      </PullRequestSidePanelDetailsSummary>
    );
  return (
    <details open={true} className="group flex flex-col">
      {header}
      <div className="group-open:pt-2">
        {error == null ? (
          loading || body == null ? (
            <PullRequestSidePanelLoadingState
              label={
                <FormattedMessage
                  id="pullRequestSidePanel.description.loading"
                  defaultMessage="Loading description"
                  description="Loading label for the pull request description"
                />
              }
            />
          ) : body.trim().length > 0 ? (
            <Xo
              allowBasicHtml={true}
              className="text-base text-token-foreground [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_li]:leading-5 [&_p]:leading-5"
              cwd={null}
            >
              {os(body)}
            </Xo>
          ) : (
            <p className="py-2 text-base text-token-text-tertiary">
              <FormattedMessage
                id="pullRequestSidePanel.description.empty"
                defaultMessage="No description provided"
                description="Empty pull request description in the side panel"
              />
            </p>
          )
        ) : (
          <PullRequestSidePanelErrorMessage description={error} />
        )}
      </div>
    </details>
  );
}
var pullRequestDescriptionSectionModule,
  pullRequestDescriptionSectionJsxRuntime,
  initPullRequestSidePanelDescriptionSectionChunk = once(() => {
    pullRequestDescriptionSectionModule = getChunkModuleExports();
    initIntlRuntime();
    Fo();
    us();
    initPullRequestSidePanelErrorMessageChunk();
    initPullRequestSidePanelDetailsSummaryChunk();
    initPullRequestSidePanelLoadingStateChunk();
    pullRequestDescriptionSectionJsxRuntime = getJsxRuntime();
  }),
  pullRequestReviewerPlaceholderIconJsxRuntime,
  PullRequestReviewerPlaceholderIcon,
  initPullRequestReviewerPlaceholderIconChunk = once(() => {
    toEsModule(loadReactModule());
    pullRequestReviewerPlaceholderIconJsxRuntime = getJsxRuntime();
    PullRequestReviewerPlaceholderIcon = (props) => (
      <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4 2.63049C14.7714 2.63049 18.3151 6.1742 18.3151 10.5455C18.3151 14.9169 14.7714 18.4606 10.4 18.4606C6.02869 18.4606 2.48499 14.9169 2.48499 10.5455C2.48499 6.1742 6.02869 2.63049 10.4 2.63049ZM10.4 13.0455C8.52826 13.0455 6.84344 13.846 5.66858 15.1227C6.86576 16.36 8.54237 17.1305 10.4 17.1305C12.2574 17.1305 13.9333 16.3597 15.1305 15.1227C13.9557 13.8461 12.2716 13.0457 10.4 13.0455ZM10.4 6.37854C9.01942 6.37854 7.9002 7.49798 7.90002 8.87854C7.90002 10.2593 9.01931 11.3785 10.4 11.3785C11.7807 11.3785 12.9 10.2592 12.9 8.87854C12.8998 7.49799 11.7806 6.37855 10.4 6.37854Z"
          fill="currentColor"
        />
      </svg>
    );
  }),
  githubUserSearchQuery,
  initGithubUserSearchQuery = once(() => {
    initAppScope();
    initQueryDurationConstants();
    initVscodeApiBridge();
    githubUserSearchQuery = createHostQuerySignal(
      appScope,
      "gh-user-search",
      (queryParams) => ({
        enabled: queryParams.query.length > 0,
        params: queryParams,
        retry: false,
        select: (response) => {
          if (response.status === "error") throw Error(response.error);
          return response.users;
        },
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      }),
    );
  });
function filterAlreadyPendingReviewers({
  pendingReviewerLogins,
  searchResults,
}) {
  let pendingReviewerLoginSet = new Set(
    pendingReviewerLogins.map((item) => item.toLowerCase()),
  );
  return searchResults.filter(
    ({ login }) => !pendingReviewerLoginSet.has(login.toLowerCase()),
  );
}
function getReviewerSearchMenuOptions({
  availableReviewers,
  isCurrentQuery,
  query,
  searchHasError,
  selectedReviewers,
}) {
  if (searchHasError && isCurrentQuery) return [];
  if (!(query.length > 0 && !isCurrentQuery))
    return availableReviewers == null
      ? selectedReviewers.length > 0
        ? selectedReviewers
        : query.length === 0
          ? []
          : undefined
      : uniqByModule.default(
          [...selectedReviewers, ...availableReviewers],
          ({ login }) => login.toLowerCase(),
        );
}
function toggleSelectedReviewer(selectedReviewers, reviewer) {
  let existingReviewer = selectedReviewers.find(
    ({ login }) => login.toLowerCase() === reviewer.login.toLowerCase(),
  );
  return existingReviewer == null
    ? [...selectedReviewers, reviewer]
    : selectedReviewers.filter((item) => item !== existingReviewer);
}
var uniqByModule,
  initReviewerSearchUniqByModule = once(() => {
    uniqByModule = toEsModule(loadUniqByModule(), 1);
  });
function RequestPullRequestReviewersButton(props) {
  let { hostId, item, pendingReviewerLogins, repo } = props,
    scope = useScope(appScope),
    intl = useIntl(),
    [open, setOpen] = requestPullRequestReviewersReactRuntime.useState(false),
    [query, setQuery] = requestPullRequestReviewersReactRuntime.useState(""),
    emptySelectedReviewers = [];
  let [selectedReviewers, setSelectedReviewers] =
      requestPullRequestReviewersReactRuntime.useState(emptySelectedReviewers),
    trimmedQuery = query.trim();
  let currentQuery = trimmedQuery,
    debouncedQuery = useDebouncedValue(currentQuery, 250),
    searchParams = {
      cwd: item.cwd,
      hostId,
      query: debouncedQuery,
      repo,
    };
  let { data, isError, refetch } = useScopedValue(
      githubUserSearchQuery,
      searchParams,
    ),
    updateMutationParams = {
      cwd: item.cwd,
      headBranch: item.headBranch,
      hostId,
      operationSource: "pull_request_board",
    };
  let updatePullRequestMutation =
      usePullRequestUpdateMutation(updateMutationParams),
    reviewerOptions = getReviewerSearchMenuOptions({
      availableReviewers:
        data == null
          ? undefined
          : filterAlreadyPendingReviewers({
              pendingReviewerLogins,
              searchResults: data,
            }),
      isCurrentQuery: debouncedQuery === currentQuery,
      query: currentQuery,
      searchHasError: isError,
      selectedReviewers: selectedReviewers,
    })?.map(toReviewerSearchOption);
  let menuOptions = reviewerOptions,
    selectedOptionIdsSet = new Set(selectedReviewers.map(getReviewerOptionId));
  let selectedOptionIds = selectedOptionIdsSet,
    resetReviewerPicker = () => {
      setQuery("");
      setSelectedReviewers([]);
      updatePullRequestMutation.reset();
    };
  let clearReviewerPicker = resetReviewerPicker,
    requestSelectedReviewers = () => {
      selectedReviewers.length !== 0 &&
        (updatePullRequestMutation.reset(),
        trackPullRequestAction(scope, {
          action: "request_approvals",
          item,
          surface: "thread_side_panel",
        }),
        updatePullRequestMutation.mutate(
          {
            action: "request-reviewers",
            cwd: item.cwd,
            number: item.number,
            repo,
            reviewers: selectedReviewers.map(getReviewerLogin),
          },
          {
            onSuccess: (result) => {
              result.status === "success" &&
                (scope.get(toastSignal).success(
                  intl.formatMessage(
                    {
                      id: "pullRequestSidePanel.approvals.request.successReviewers",
                      defaultMessage:
                        "{count, plural, one {Requested approval from one reviewer} other {Requested approval from # reviewers}}",
                      description:
                        "Toast shown after requesting a pull request approval",
                    },
                    {
                      count: selectedReviewers.length,
                    },
                  ),
                ),
                setOpen(false),
                clearReviewerPicker());
            },
          },
        ));
    };
  let handleRequestReviewers = requestSelectedReviewers,
    handleOpenChange = (nextOpen) => {
      setOpen(nextOpen);
      nextOpen || clearReviewerPicker();
    };
  let triggerLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.open",
    defaultMessage: "Request reviewers",
    description:
      "Accessible label for opening the pull request reviewer picker",
  });
  let triggerIcon = <PlusIcon aria-hidden={true} className="icon-2xs" />;
  let triggerButton = (
    <PopoverTrigger asChild={true}>
      {requestPullRequestReviewersJsxRuntime.jsx(Button, {
        "aria-label": triggerLabel,
        color: "secondary",
        size: "iconMd",
        children: triggerIcon,
      })}
    </PopoverTrigger>
  );
  let dialogTitle = requestPullRequestReviewersJsxRuntime.jsx(_r, {
    className: "sr-only",
    children: (
      <FormattedMessage
        id="pullRequestSidePanel.approvals.dialog.title"
        defaultMessage="Request approvals"
        description="Title for the dialog used to request pull request approvals"
      />
    ),
  });
  let searchAriaLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.ariaLabel",
    defaultMessage: "Search GitHub users",
    description: "Accessible label for searching pull request reviewers",
  });
  let requestPending = updatePullRequestMutation.isPending,
    emptyMessage =
      currentQuery.length === 0 ? (
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.prompt"
          defaultMessage="Search by name or GitHub username"
          description="Prompt shown before searching for a pull request reviewer"
        />
      ) : isError && debouncedQuery === currentQuery ? (
        <span className="flex items-center justify-between gap-3 text-token-error-foreground">
          <FormattedMessage
            id="pullRequestSidePanel.approvals.search.error"
            defaultMessage="Couldn’t search GitHub users"
            description="Error shown when pull request reviewer search fails"
          />
          {requestPullRequestReviewersJsxRuntime.jsx(Button, {
            color: "outline",
            size: "default",
            type: "button",
            onClick: () => {
              refetch();
            },
            children: (
              <FormattedMessage
                id="pullRequestSidePanel.approvals.search.retry"
                defaultMessage="Retry"
                description="Retry button for pull request reviewer search"
              />
            ),
          })}
        </span>
      ) : (
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.empty"
          defaultMessage="No users found"
          description="Empty state for pull request reviewer search"
        />
      );
  let loadingLabel = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.loading",
    defaultMessage: "Searching…",
    description: "Loading message while searching pull request reviewers",
  });
  let placeholder = intl.formatMessage({
    id: "pullRequestSidePanel.approvals.search.placeholder",
    defaultMessage: "Request review from…",
    description: "Placeholder for searching pull request reviewers",
  });
  let leadingSearchIcon = (
    <SearchIcon
      aria-hidden={true}
      className="icon-sm shrink-0 text-token-text-tertiary"
    />
  );
  let closePicker = () => {
    setOpen(false);
    clearReviewerPicker();
  };
  let handleQueryChange, handleOptionSelect;
  handleQueryChange = (nextQuery) => {
    setQuery(nextQuery);
  };
  handleOptionSelect = (reviewer) => {
    setSelectedReviewers((currentReviewers) =>
      toggleSelectedReviewer(currentReviewers, reviewer),
    );
  };
  let reviewerSearchMenu = (
    <Pu
      ariaLabel={searchAriaLabel}
      disabled={requestPending}
      emptyMessage={emptyMessage}
      loadingLabel={loadingLabel}
      options={menuOptions}
      loadingSize="compact"
      placeholder={placeholder}
      query={query}
      selectedOptionIds={selectedOptionIds}
      variant="menu"
      leadingContent={leadingSearchIcon}
      onEscape={closePicker}
      onQueryChange={handleQueryChange}
      onSelectOption={handleOptionSelect}
    />
  );
  let requestErrorMessage =
    updatePullRequestMutation.data?.status === "error" ||
    updatePullRequestMutation.isError ? (
      <div className="px-2 py-1.5 text-sm" aria-live="polite">
        <span className="text-token-error-foreground">
          {updatePullRequestMutation.data?.status === "error"
            ? updatePullRequestMutation.data.error
            : updatePullRequestMutation.error?.message}
        </span>
      </div>
    ) : null;
  let requestFooter =
    selectedReviewers.length > 0 || updatePullRequestMutation.isPending ? (
      <div className="grid pt-1">
        {updatePullRequestMutation.isPending ? (
          <span
            aria-label={intl.formatMessage({
              id: "pullRequestSidePanel.approvals.request.pending",
              defaultMessage: "Requesting approval…",
              description:
                "Loading message while requesting pull request approval",
            })}
            className="flex items-center justify-center py-2"
            role="status"
          >
            {requestPullRequestReviewersJsxRuntime.jsx(SpinnerIcon, {
              className: "icon-2xs",
            })}
          </span>
        ) : (
          requestPullRequestReviewersJsxRuntime.jsx(Button, {
            color: "secondary",
            size: "toolbar",
            onClick: handleRequestReviewers,
            children: (
              <span className="mx-auto">
                <FormattedMessage
                  id="pullRequestSidePanel.approvals.request"
                  defaultMessage="Request"
                  description="Button label for requesting pull request approval"
                />
              </span>
            ),
          })
        )}
      </div>
    ) : null;
  let popoverContent = (
    <PopoverContent align="end">
      {dialogTitle}
      {reviewerSearchMenu}
      {requestErrorMessage}
      {requestFooter}
    </PopoverContent>
  );
  return (
    <PopoverRoot open={open} onOpenChange={handleOpenChange}>
      {triggerButton}
      {popoverContent}
    </PopoverRoot>
  );
}
function getReviewerLogin(reviewer) {
  let { login } = reviewer;
  return login;
}
function getReviewerOptionId(reviewer) {
  let { login } = reviewer;
  return login.toLowerCase();
}
function toReviewerSearchOption(reviewer) {
  return {
    ...reviewer,
    id: reviewer.login.toLowerCase(),
    imageUrl: reviewer.avatarUrl,
    label: reviewer.login,
  };
}
var requestPullRequestReviewersModule,
  requestPullRequestReviewersReactRuntime,
  requestPullRequestReviewersJsxRuntime,
  initRequestPullRequestReviewersButtonChunk = once(() => {
    requestPullRequestReviewersModule = getChunkModuleExports();
    initScopeRuntime();
    requestPullRequestReviewersReactRuntime = toEsModule(loadReactModule(), 1);
    initIntlRuntime();
    initButtonComponentPrimitives();
    initPopoverPrimitives();
    Nu();
    initSpinnerComponent();
    initToastRuntime();
    _t();
    initSearchIcon();
    initPullRequestUpdateMutationChunk();
    initPullRequestAnalyticsChunk();
    initAppScope();
    initTaskWorkspaceQueryRuntime();
    initGithubUserSearchQuery();
    initReviewerSearchUniqByModule();
    requestPullRequestReviewersJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelOverviewSection(props) {
  let {
      checks,
      checksAreLoading,
      checksHaveError,
      comments,
      commentsAreLoading,
      commentsHaveError,
      item,
      hostId,
      mergeBlocker,
      repo,
    } = props,
    branchIcon = pullRequestOverviewSectionJsxRuntime.jsx(GitBranchIcon, {
      className: "icon-sm shrink-0 text-token-text-tertiary",
    });
  let branchArrow = (
    <span className="px-2 text-token-text-tertiary">{"→"}</span>
  );
  let branchLabel = (
    <span className="min-w-0 truncate">
      {item.headBranch}
      {branchArrow}
      {item.baseBranch}
    </span>
  );
  let diffStats = (
    <Ml
      className="ms-auto shrink-0 text-sm"
      linesAdded={item.additions}
      linesRemoved={item.deletions}
    />
  );
  let branchRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={branchIcon}
      label={
        <>
          {branchLabel}
          {diffStats}
        </>
      }
      labelClassName="flex min-w-0 flex-1 items-center text-token-text-tertiary"
    />
  );
  let checksRow = (
    <PullRequestOverviewChecksRow
      data={checks}
      hasError={checksHaveError}
      loading={checksAreLoading}
    />
  );
  let mergeStatusState =
      mergeBlocker == null
        ? "ready"
        : mergeBlocker === "conflicts"
          ? "failing"
          : "in_progress",
    mergeStatusIcon = (
      <Ws className="icon-sm shrink-0" state={mergeStatusState} />
    );
  let mergeStatusLabel = pullRequestOverviewSectionJsxRuntime.jsx(
    PullRequestOverviewMergeStatusLabel,
    {
      mergeBlocker,
    },
  );
  let mergeStatusRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={mergeStatusIcon}
      label={mergeStatusLabel}
    />
  );
  let reviewers = comments?.reviewers ?? null,
    reviewersRow = pullRequestOverviewSectionJsxRuntime.jsx(
      PullRequestOverviewReviewersRow,
      {
        hostId,
        item,
        repo,
        reviewers,
      },
    );
  let commentsRow = (
    <PullRequestOverviewCommentsRow
      data={comments}
      hasError={commentsHaveError}
      loading={commentsAreLoading}
    />
  );
  return (
    <section className="flex flex-col border-b border-token-border pb-3">
      {branchRow}
      {checksRow}
      {mergeStatusRow}
      {reviewersRow}
      {commentsRow}
    </section>
  );
}
function PullRequestOverviewChecksRow(props) {
  let { data, hasError, loading } = props;
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(zc, {
          className: "icon-sm shrink-0 text-token-charts-red",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.error"
            defaultMessage="Couldn’t load checks"
            description="Checks error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(SpinnerIcon, {
          className: "icon-sm shrink-0",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.checks.loading"
            defaultMessage="Loading checks"
            description="Loading checks label in the pull request overview"
          />
        }
      />
    );
  }
  let checksStatusIcon = Kl(data);
  let checksStatusLabel = Hl(data.ciStatus);
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={checksStatusIcon}
      label={checksStatusLabel}
    />
  );
}
function PullRequestOverviewCommentsRow(props) {
  let { data, hasError, loading } = props;
  if (hasError) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(zc, {
          className: "icon-sm shrink-0 text-token-charts-red",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.error"
            defaultMessage="Couldn’t load comments"
            description="Comments error label in the pull request overview"
          />
        }
      />
    );
  }
  if (loading || data == null) {
    return (
      <SummaryPanelRow
        density="comfortable"
        icon={pullRequestOverviewSectionJsxRuntime.jsx(SpinnerIcon, {
          className: "icon-sm shrink-0",
        })}
        label={
          <FormattedMessage
            id="pullRequestSidePanel.overview.comments.loading"
            defaultMessage="Loading comments"
            description="Loading comments label in the pull request overview"
          />
        }
      />
    );
  }
  let commentsIcon = (
    <Tu className="icon-sm shrink-0 text-token-text-tertiary" />
  );
  let commentActivityItems = getPullRequestCommentActivityItems(
    data.activityItems,
  );
  return (
    <SummaryPanelRow
      density="comfortable"
      icon={commentsIcon}
      label={
        <FormattedMessage
          id="pullRequestSidePanel.overview.comments"
          defaultMessage={
            "{count, plural, =0 {No comments} one {# comment} other {# comments}}"
          }
          description="Pull request comment count in the side panel overview"
          values={{
            count: commentActivityItems.length,
          }}
        />
      }
    />
  );
}
function PullRequestOverviewMergeStatusLabel(props) {
  let { mergeBlocker } = props;
  switch (mergeBlocker) {
    case "conflicts": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts"
          defaultMessage="Merge conflicts need to be resolved"
          description="Merge conflict status in the pull request overview"
        />
      );
    }
    case "unknown": {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.unknown"
          defaultMessage="Checking for merge conflicts"
          description="Unknown merge conflict status in the pull request overview"
        />
      );
    }
    case null: {
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.none"
          defaultMessage="No merge conflicts"
          description="Clean merge status in the pull request overview"
        />
      );
    }
  }
}
function PullRequestOverviewReviewersRow(props) {
  let { hostId, item, repo, reviewers } = props,
    rowComponent,
    labelClassName,
    labelPrefix,
    reviewerBadges,
    density,
    icon;
  {
    let reviewerBadgeModels =
        reviewers == null ? [] : getPullRequestReviewerBadgeModels(reviewers),
      canRequestReviewers = item.isAuthor && item.state !== "merged";
    rowComponent = SummaryPanelRow;
    density = "comfortable";
    icon = (
      <PullRequestReviewerPlaceholderIcon className="icon-sm shrink-0 text-token-text-tertiary" />
    );
    labelClassName = "flex min-w-0 flex-1 items-center gap-2";
    labelPrefix = (
      <span className="shrink-0">
        <FormattedMessage
          id="pullRequestSidePanel.overview.reviewers"
          defaultMessage="Reviewers"
          description="Reviewer label in the pull request overview"
        />
      </span>
    );
    reviewerBadges =
      reviewers != null &&
      (reviewerBadgeModels.length > 0 || canRequestReviewers) ? (
        <span className="hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5">
          {reviewerBadgeModels.map(renderPullRequestOverviewReviewerBadge)}
          {canRequestReviewers ? (
            <span className="shrink-0">
              <RequestPullRequestReviewersButton
                hostId={hostId}
                item={item}
                pendingReviewerLogins={reviewers.requested}
                repo={repo}
              />
            </span>
          ) : null}
        </span>
      ) : null;
  }
  let label = (
    <span className={labelClassName}>
      {labelPrefix}
      {reviewerBadges}
    </span>
  );
  return pullRequestOverviewSectionJsxRuntime.jsx(rowComponent, {
    density,
    icon,
    label,
    labelClassName: "flex min-w-0 flex-1 items-center text-token-text-tertiary",
  });
}
function renderPullRequestOverviewReviewerBadge(reviewer) {
  return pullRequestOverviewSectionJsxRuntime.jsx(
    Tooltip,
    {
      tooltipContent: reviewer.label,
      children: (
        <span className="relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary">
          {reviewer.kind === "team" ? (
            <span
              aria-label={reviewer.label}
              className="flex size-full items-center justify-center text-token-text-secondary"
              role="img"
            >
              {pullRequestOverviewSectionJsxRuntime.jsx(ed, {
                "aria-hidden": true,
                className: "icon-xs",
              })}
            </span>
          ) : (
            <img
              alt={reviewer.label}
              className="size-full rounded-full object-cover"
              src={is(reviewer.label, 40) ?? undefined}
            />
          )}
          <span
            className={classNames(
              "absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary",
              reviewer.status === "approved" && "bg-token-charts-green",
              reviewer.status === "waiting" && "bg-token-charts-yellow",
              reviewer.status === "changes_requested" && "bg-token-charts-red",
            )}
          >
            <span className="sr-only">
              {reviewer.status === "approved" ? (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.approved"
                  defaultMessage="Approved"
                  description="Accessible status for an approved pull request reviewer"
                />
              ) : reviewer.status === "changes_requested" ? (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.changesRequested"
                  defaultMessage="Requested changes"
                  description="Accessible status for a pull request reviewer who requested changes"
                />
              ) : (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.waiting"
                  defaultMessage="Waiting for review"
                  description="Accessible status for a pull request reviewer whose review is pending"
                />
              )}
            </span>
          </span>
        </span>
      ),
    },
    `${reviewer.kind}:${reviewer.label}`,
  );
}
var pullRequestOverviewSectionModule,
  pullRequestOverviewSectionJsxRuntime,
  initPullRequestSidePanelOverviewSectionChunk = once(() => {
    pullRequestOverviewSectionModule = getChunkModuleExports();
    initClassNameRuntime();
    initIntlRuntime();
    initSpinnerComponent();
    initTooltipPrimitives();
    Nl();
    initGitBranchIcon();
    Eu();
    initPullRequestReviewerPlaceholderIconChunk();
    $u();
    Kc();
    Bl();
    Js();
    ps();
    initSummaryPanelRowChunk();
    initRequestPullRequestReviewersButtonChunk();
    initPullRequestReviewerBadgeModelsChunk();
    pullRequestOverviewSectionJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelDetails(props) {
  let { bodyError, bodyIsLoading, item, pullRequestBody, request } = props,
    scope = useScope(composerScope),
    { data } = useSignalValue(pullRequestCurrentBranchSignal),
    fixDisabledReason = xc({
      currentBranch: data,
      storedThreadBranch: item.headBranch,
    }).hasThreadBranchMismatch
      ? "branch-mismatch"
      : null,
    hasOpenPullRequest = pullRequestBody?.hasOpenPr ?? null,
    mergeFixDisabledReason = getPullRequestFixDisabledReason({
      baseBranch: item.baseBranch,
      conversationId: scope.value.routeConversationId,
      fixDisabledReason,
      hasOpenPr: hasOpenPullRequest,
      headBranch: item.headBranch,
      prNumber: item.number,
    });
  let checksQueryConfig = {
    intervalMs: QUERY_DURATIONS.ONE_MINUTE,
    staleTime: QUERY_DURATIONS.ONE_MINUTE,
  };
  let checksQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: checksQueryConfig,
  };
  let {
      data: checksResult,
      error: checksError,
      isError: checksHaveError,
      isLoading: checksAreLoading,
    } = useHostQuery("gh-pr-checks", checksQueryOptions),
    commentsQueryConfig = {
      intervalMs: QUERY_DURATIONS.ONE_MINUTE,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    };
  let commentsQueryOptions = {
    source: "pull_request_board",
    params: request,
    queryConfig: commentsQueryConfig,
  };
  let {
      data: commentsResult,
      error: commentsError,
      isError: commentsHaveError,
      isLoading: commentsAreLoading,
    } = useHostQuery("gh-pr-comments", commentsQueryOptions),
    mergeBlocker =
      pullRequestBody == null
        ? item.mergeBlocker
        : pullRequestBody.mergeBlocker,
    repo = pullRequestBody?.repo ?? request.repo ?? null,
    diffRequest = {
      cwd: request.cwd,
      hostId: request.hostId,
      number: item.number,
      repo,
    };
  let shouldLoadConflictDiff = mergeBlocker === "conflicts",
    diffQueryConfig = {
      enabled: shouldLoadConflictDiff,
      staleTime: QUERY_DURATIONS.ONE_MINUTE,
    };
  let diffQueryOptions = {
    source: "pull_request_board",
    params: diffRequest,
    queryConfig: diffQueryConfig,
  };
  let {
      data: diffResult,
      error: diffError,
      isError: diffHaveError,
      isLoading: diffIsLoading,
    } = useHostQuery("gh-pr-diff", diffQueryOptions),
    checksData = checksResult?.status === "success" ? checksResult : null,
    commentsData = commentsResult?.status === "success" ? commentsResult : null,
    conflictFilePaths =
      diffResult?.status === "success"
        ? yl(diffResult.unifiedDiff, {
            maxFiles: 20,
          }).map(getPullRequestDiffFileDisplayPath)
        : null;
  let overviewSection = (
    <PullRequestSidePanelOverviewSection
      hostId={request.hostId}
      item={item}
      checks={checksData}
      checksHaveError={checksHaveError}
      checksAreLoading={checksAreLoading}
      comments={commentsData}
      commentsHaveError={commentsHaveError}
      commentsAreLoading={commentsAreLoading}
      mergeBlocker={mergeBlocker}
      repo={repo}
    />
  );
  let pullRequestBodyText = pullRequestBody?.body ?? null,
    bodySection = (
      <PullRequestSidePanelDescriptionSection
        body={pullRequestBodyText}
        error={bodyError}
        loading={bodyIsLoading}
      />
    );
  let checksErrorMessage = checksError?.message,
    checksSection = pullRequestSidePanelDetailsJsxRuntime.jsx(
      PullRequestSidePanelChecksSection,
      {
        data: checksData,
        error: checksErrorMessage,
        fixDisabledReason: mergeFixDisabledReason,
        item,
        loading: checksAreLoading,
      },
    );
  let conflictSection =
    mergeBlocker === "conflicts"
      ? pullRequestSidePanelDetailsJsxRuntime.jsx(
          PullRequestSidePanelConflictsSection,
          {
            error:
              diffResult?.status === "error"
                ? diffResult.error
                : diffError?.message,
            files: conflictFilePaths,
            fixDisabledReason: mergeFixDisabledReason,
            hasError: diffHaveError || diffResult?.status === "error",
            item,
            loading: diffIsLoading,
            repo,
          },
        )
      : null;
  let commentsErrorMessage = commentsError?.message,
    commentsSection = pullRequestSidePanelDetailsJsxRuntime.jsx(
      PullRequestSidePanelCommentsSection,
      {
        data: commentsData,
        error: commentsErrorMessage,
        fixDisabledReason: mergeFixDisabledReason,
        item,
        loading: commentsAreLoading,
      },
    );
  return (
    <>
      {overviewSection}
      {bodySection}
      {checksSection}
      {conflictSection}
      {commentsSection}
    </>
  );
}

function getPullRequestDiffFileDisplayPath(diffFile) {
  return diffFile.newPath === "/dev/null" ? diffFile.oldPath : diffFile.newPath;
}

var pullRequestSidePanelDetailsModule,
  pullRequestSidePanelDetailsJsxRuntime,
  initPullRequestSidePanelDetailsChunk = once(() => {
    pullRequestSidePanelDetailsModule = getChunkModuleExports();
    initScopeRuntime();
    initPullRequestReviewCommentHelpers();
    bl();
    Yc();
    initPullRequestFailingChecksPromptChunk();
    po();
    initComposerScope();
    initQueryDurationConstants();
    initVscodeApiBridge();
    initPullRequestSidePanelChecksSectionChunk();
    initPullRequestSidePanelCommentsSectionChunk();
    initPullRequestSidePanelConflictsSectionChunk();
    initPullRequestSidePanelDescriptionSectionChunk();
    initPullRequestSidePanelOverviewSectionChunk();
    pullRequestSidePanelDetailsJsxRuntime = getJsxRuntime();
  });

function PullRequestSidePanelHeader(props) {
  let { hostId, item, pullRequestBody, request } = props,
    intl = useIntl(),
    pullRequestState =
      pullRequestBody == null
        ? item.state === "draft" || item.state === "merged"
          ? item.state
          : "open"
        : pullRequestBody.hasOpenPr === false
          ? "merged"
          : pullRequestBody.isDraft
            ? "draft"
            : "open",
    titleNode = (
      <div className="truncate text-base leading-5 font-medium text-token-foreground">
        {item.title}
      </div>
    );
  let stateNode = (
    <div className="text-sm leading-5 text-token-text-tertiary">
      {pullRequestState === "draft" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.draft"
          defaultMessage="Draft"
          description="Draft pull request state shown in the side panel header"
        />
      ) : pullRequestState === "merged" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.merged"
          defaultMessage="Merged"
          description="Merged pull request state shown in the side panel header"
        />
      ) : (
        <FormattedMessage
          id="pullRequestSidePanel.state.open"
          defaultMessage="Open"
          description="Open pull request state shown in the side panel header"
        />
      )}
    </div>
  );
  let titleBlock = (
    <div className="flex min-w-0 flex-col">
      {titleNode}
      {stateNode}
    </div>
  );
  let openPullRequestLabel = intl.formatMessage({
    id: "pullRequestSidePanel.openOnGitHub",
    defaultMessage: "Open pull request on GitHub",
    description:
      "Accessible label for opening a pull request from the side panel",
  });
  let trackOpenOnGitHub = (event) => {
    openInBrowserFromEvent({
      event,
      href: item.url,
      initiator: "pull_request_link",
    });
  };
  let externalIcon = <ExternalLinkIcon className="icon-sm" href={item.url} />;
  let githubLink = (
    <a
      aria-label={openPullRequestLabel}
      className="cursor-interaction rounded-lg p-1.5 text-token-foreground hover:bg-token-list-hover-background"
      href={item.url}
      rel="noreferrer"
      target="_blank"
      onClick={trackOpenOnGitHub}
    >
      {externalIcon}
    </a>
  );
  let mergeActions = pullRequestSidePanelTabJsxRuntime.jsx(
    PullRequestMergeActions,
    {
      hostId,
      item,
      pullRequestBody,
      request,
      surface: "thread_side_panel",
      variant: "side-panel",
    },
  );
  let actionGroup = (
    <div className="flex shrink-0 items-center gap-2">
      {githubLink}
      {mergeActions}
    </div>
  );
  return (
    <header className="flex h-[50px] items-start justify-between gap-4">
      {titleBlock}
      {actionGroup}
    </header>
  );
}

var pullRequestSidePanelTabModule,
  pullRequestSidePanelTabJsxRuntime,
  PullRequestSidePanelTabContent,
  initPullRequestSidePanelTabChunk = once(() => {
    pullRequestSidePanelTabModule = getChunkModuleExports();
    initIntlRuntime();
    initExternalUrlHelpers();
    Xr();
    initQueryDurationConstants();
    initVscodeApiBridge();
    initPullRequestMergeActionsChunk();
    initPullRequestSidePanelDetailsChunk();
    pullRequestSidePanelTabJsxRuntime = getJsxRuntime();
    PullRequestSidePanelTabContent = function (props) {
      let { hostId, item, repo } = props,
        request = {
          cwd: item.cwd,
          headBranch: item.headBranch,
          hostId,
          number: item.number,
          repo,
        };
      let bodyQueryConfig = {
        intervalMs: QUERY_DURATIONS.ONE_MINUTE,
        staleTime: QUERY_DURATIONS.ONE_MINUTE,
      };
      let bodyQueryOptions = {
        source: "pull_request_board",
        params: request,
        queryConfig: bodyQueryConfig,
      };
      let { data, error, isLoading } = useHostQuery(
          "gh-pr-body",
          bodyQueryOptions,
        ),
        pullRequestBody = data?.status === "success" ? data : null,
        headerNode = pullRequestSidePanelTabJsxRuntime.jsx(
          PullRequestSidePanelHeader,
          {
            hostId,
            item,
            pullRequestBody,
            request,
          },
        );
      let bodyError = error?.message,
        detailsNode = pullRequestSidePanelTabJsxRuntime.jsx(
          PullRequestSidePanelDetails,
          {
            bodyError,
            bodyIsLoading: isLoading,
            item,
            pullRequestBody,
            request,
          },
        );
      return (
        <div className="h-full min-h-0 overflow-y-auto bg-token-main-surface-primary">
          <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5 pb-4">
            {headerNode}
            {detailsNode}
          </main>
        </div>
      );
    };
  });

function openPullRequestSidePanelTab(
  scope,
  { hostId, item, repo },
  activate = true,
  fallbackPosition = "right",
) {
  let tabId = `pull-request:${item.url}`,
    targetPosition = no(scope, tabId) ?? fallbackPosition;
  return (
    va(targetPosition).openTab(scope, PullRequestSidePanelTabContent, {
      activate,
      defaultState: () => ({}),
      icon: pullRequestSidePanelTabReactRuntime.createElement(Ws, {
        className: "icon-xs shrink-0",
        state: item.state,
      }),
      id: tabId,
      props: {
        hostId,
        item,
        repo,
      },
      title: scope.get(Wa).formatMessage(
        {
          id: "thread.sidePanel.pullRequestTab.title",
          defaultMessage: "PR #{number}",
          description: "Title for a pull request side-panel tab",
        },
        {
          number: item.number,
        },
      ),
      tooltip: item.title,
    }),
    activate && wa(scope, targetPosition),
    true
  );
}

var pullRequestSidePanelTabReactRuntime,
  initPullRequestSidePanelOpenerChunk = once(() => {
    pullRequestSidePanelTabReactRuntime = toEsModule(loadReactModule(), 1);
    Za();
    Js();
    initPullRequestSidePanelTabChunk();
    ho();
  });
function LocalConversationGitSummary(props) {
  let {
      conversationId,
      cwd,
      hostConfig,
      workspaceBrowserRoot,
      onCreatePullRequest,
    } = props,
    scope = useScope(localConversationRouteScope),
    threadWorkspaceBrowserRoot = useScopedValue(
      conversationCwdSignal,
      conversationId,
    ),
    storedThreadBranch = useScopedValue(
      storedThreadBranchSignal,
      conversationId,
    ),
    workspaceRoot = threadWorkspaceBrowserRoot ?? workspaceBrowserRoot,
    headBranchQuery = ys(
      workspaceRoot,
      hostConfig,
      "local_conversation_git_summary",
    ),
    createPullRequestActionParams = {
      cwd,
      hostConfig,
    };
  let createPullRequestActionState = useScopedValue(
      createPullRequestActionStateSignal,
      createPullRequestActionParams,
    ),
    headBranchName = headBranchQuery.data?.trim() ?? "",
    normalizedHeadBranchName = getPullRequestTitleOrFallback(
      storedThreadBranch,
      headBranchName,
    );
  let headBranch = normalizedHeadBranchName,
    hasEmptyHeadBranch =
      headBranchQuery.isSuccess && headBranchName.length === 0,
    workflowParams = {
      cwd,
      hostId: hostConfig.id,
    };
  let activeWorkflow = useScopedValue(activeWorkflowSignal, workflowParams),
    workflowPhase = activeWorkflow?.phase ?? null,
    isCreatePrWorkflow = activeWorkflow?.workflow === "create-pr",
    ghCliAvailability = useScopedValue(
      githubCliAvailabilitySignal,
      hostConfig.id,
    ),
    pullRequestStatusParams = {
      cwd: workspaceRoot,
      headBranch: headBranch,
      hostId: hostConfig.id,
      operationSource: "local_conversation_git_summary",
    };
  let pullRequestStatusQuery = useScopedValue(
    pullRequestStatusQuerySignal,
    pullRequestStatusParams,
  );
  if (
    workspaceRoot == null ||
    (!hasEmptyHeadBranch && headBranchName.length === 0)
  )
    return null;
  if (hasEmptyHeadBranch) {
    if (
      isCreatePrWorkflow &&
      workflowPhase != null &&
      (pullRequestStatusQuery.type !== "success" ||
        pullRequestStatusQuery.data.hasOpenPr !== true)
    ) {
      let cancelCreatePullRequest = () =>
        Lc({
          cwd,
          hostId: hostConfig.id,
        });
      return (
        <CreatePullRequestProgressSummaryRow
          phase={workflowPhase}
          onCancel={cancelCreatePullRequest}
        />
      );
    }
    return localConversationGitSummaryJsxRuntime.jsx(
      CreatePullRequestSummaryAction,
      {
        createPullRequestActionState: createPullRequestActionState,
        ghCliAvailability: ghCliAvailability,
        onCreatePullRequest,
        workflowPhase: workflowPhase,
      },
    );
  }
  if (
    isCreatePrWorkflow &&
    workflowPhase != null &&
    (pullRequestStatusQuery.type !== "success" ||
      pullRequestStatusQuery.data.hasOpenPr !== true)
  ) {
    let cancelCreatePullRequest = () =>
      Lc({
        cwd,
        hostId: hostConfig.id,
      });
    return (
      <CreatePullRequestProgressSummaryRow
        phase={workflowPhase}
        onCancel={cancelCreatePullRequest}
      />
    );
  }
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  if (pullRequestStatusQuery.type === "error") {
    return (
      <SummaryPanelRow
        className="!text-token-text-tertiary"
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.pullRequestUnavailable"
            defaultMessage="Pull request status unavailable"
            description="GitHub status row shown when PR status cannot be loaded"
          />
        }
      />
    );
  }
  if (pullRequestStatusQuery.type === "loading") {
    return (
      <SummaryPanelRow
        icon={<GithubStatusPlaceholderIcon />}
        label={
          <FormattedMessage
            id="codex.localConversation.gitSummary.checkingPullRequest"
            defaultMessage="Checking pull request"
            description="GitHub status row shown while loading PR data"
          />
        }
      />
    );
  }
  let createPullRequestRow =
    createPullRequestActionState === "hidden" ? null : (
      <CreatePullRequestSummaryRow
        isCreatePullRequestEnabled={createPullRequestActionState === "enabled"}
        onCreatePullRequest={onCreatePullRequest}
        workflowPhase={workflowPhase}
      />
    );
  let fallbackRow = createPullRequestRow;
  if (pullRequestStatusQuery.type === "not-found") return fallbackRow;
  let pullRequestStatus = pullRequestStatusQuery.data,
    visualState = getPullRequestVisualState({
      hasOpenPr: pullRequestStatus.hasOpenPr,
      isDraft: pullRequestStatus.isDraft,
      url: pullRequestStatus.url,
    });
  if (visualState == null) return fallbackRow;
  let mergeVisualState = getPullRequestMergeVisualState({
      canMerge: pullRequestStatus.canMerge,
      ciStatus: pullRequestStatus.ciStatus,
      hasMergeConflicts: pullRequestStatus.mergeBlocker === "conflicts",
      status: visualState,
    }),
    pullRequestSummaryRow = localConversationGitSummaryJsxRuntime.jsx(
      PullRequestSummaryRow,
      {
        conversationId,
        hostId: hostConfig.id,
        onOpenSidePanel: ({ hostId, item, repo }) => {
          openPullRequestSidePanelTab(scope, {
            hostId,
            item,
            repo,
          });
        },
        pullRequestStatus: pullRequestStatus,
        visualState: mergeVisualState,
      },
    );
  let detailRows = (
    <PullRequestStatusDetailRows
      conversationId={conversationId}
      headBranch={headBranchName}
      pullRequestStatus={pullRequestStatus}
    />
  );
  return (
    <div className="relative z-10 flex flex-col">
      {pullRequestSummaryRow}
      {detailRows}
    </div>
  );
}
function CreatePullRequestSummaryAction(props) {
  let {
    createPullRequestActionState,
    ghCliAvailability,
    onCreatePullRequest,
    workflowPhase,
  } = props;
  if (createPullRequestActionState === "hidden") return null;
  let ghCliStatusRow = getGithubCliStatusSummaryRow(ghCliAvailability);
  if (ghCliStatusRow != null) return ghCliStatusRow;
  let isCreatePullRequestEnabled = createPullRequestActionState === "enabled";
  return (
    <CreatePullRequestSummaryRow
      isCreatePullRequestEnabled={isCreatePullRequestEnabled}
      onCreatePullRequest={onCreatePullRequest}
      workflowPhase={workflowPhase}
    />
  );
}
function CreatePullRequestSummaryRow(props) {
  let { isCreatePullRequestEnabled, onCreatePullRequest, workflowPhase } =
      props,
    isDisabled = workflowPhase != null || !isCreatePullRequestEnabled,
    icon = <GithubStatusPlaceholderIcon />,
    label = (
      <FormattedMessage
        id="codex.localConversation.gitSummary.createPullRequest"
        defaultMessage="Create pull request"
        description="GitHub status row shown when no PR exists for the branch"
      />
    );
  return (
    <SummaryPanelRow
      disabled={isDisabled}
      onClick={onCreatePullRequest}
      icon={icon}
      label={label}
    />
  );
}
function getGithubCliStatusSummaryRow(ghCliAvailability) {
  switch (ghCliAvailability) {
    case "loading":
    case "error":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.checkingPullRequest"
              defaultMessage="Checking pull request"
              description="GitHub status row shown while loading PR data"
            />
          }
        />
      );
    case "missing":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliUnavailable"
              defaultMessage="GitHub CLI unavailable"
              description="GitHub status row shown when gh is not installed"
            />
          }
        />
      );
    case "unauthenticated":
      return (
        <SummaryPanelRow
          icon={<GithubStatusPlaceholderIcon />}
          label={
            <FormattedMessage
              id="codex.localConversation.gitSummary.githubCliSignedOut"
              defaultMessage="GitHub CLI not authenticated"
              description="GitHub status row shown when gh is not authenticated"
            />
          }
        />
      );
    case "available":
      return null;
  }
}
function CreatePullRequestProgressSummaryRow(props) {
  let { phase, onCancel } = props,
    spinnerIcon = localConversationGitSummaryJsxRuntime.jsx(SpinnerIcon, {
      className: GITHUB_STATUS_ICON_CLASS_NAME,
    });
  let phaseLabel = localConversationGitSummaryJsxRuntime.jsx(nl, {
    phase,
  });
  let cancelButton = <Ms onCancel={onCancel} />;
  return (
    <SummaryPanelRow
      icon={spinnerIcon}
      label={phaseLabel}
      trailing={cancelButton}
      trailingVisible={true}
    />
  );
}
function GithubStatusPlaceholderIcon() {
  return <GitHubIcon className={GITHUB_STATUS_ICON_CLASS_NAME} />;
}
var localConversationGitSummaryModule,
  localConversationGitSummaryJsxRuntime,
  GITHUB_STATUS_ICON_CLASS_NAME,
  initLocalConversationGitSummaryChunk = once(() => {
    localConversationGitSummaryModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    initConversationStateSelectors();
    initSpinnerComponent();
    jc();
    initGitHubIcon();
    hc();
    ic();
    Qs();
    Ss();
    initPullRequestVisualStateChunk();
    io();
    ka();
    initSummaryPanelRowChunk();
    initPullRequestSummaryRowsChunk();
    initPullRequestTitleFallbackChunk();
    initPullRequestSummaryRowChunk();
    initPullRequestSidePanelOpenerChunk();
    localConversationGitSummaryJsxRuntime = getJsxRuntime();
    GITHUB_STATUS_ICON_CLASS_NAME = "icon-sm shrink-0 text-token-text-tertiary";
  });
function ThreadSummaryEnvironmentModeControls(props) {
  let { conversationId, onOpenChange } = props,
    scope = useScope(composerScope),
    composerMode = useSignalValue(composerModeSignal),
    setComposerMode = (nextMode) => {
      $o(scope, null, nextMode);
    };
  let conversationRemoteState = $i(conversationId),
    threadHostId =
      useScopedValue(conversationHostIdSignal, conversationId) ?? "local",
    conversationCwd = useScopedValue(conversationCwdSignal, conversationId),
    remoteCodexHome = getHostCodexHome(conversationRemoteState.hostId),
    isWorktreeConversation = isPathInCodexWorktree(
      conversationCwd,
      remoteCodexHome,
    );
  let isThreadHandoffSummaryEnabled = useStatsigGate("1115442235"),
    conversationTitle = useScopedValue(
      conversationDisplayTitleSignal,
      conversationId,
    ),
    threadHandoff =
      isThreadHandoffSummaryEnabled &&
      shouldShowThreadHandoffInSummary({
        isCompactWindow: lo(),
      }) &&
      conversationRemoteState.cwd != null
        ? {
            conversationTitle,
            cwd: normalizeWorkspacePath(conversationRemoteState.cwd),
            isWorktreeConversation,
          }
        : null;
  let footerRemoteState = {
    isAttachedToStartedTask: true,
    existingRemoteThreadState: {
      hostId: threadHostId,
    },
  };
  let localRemoteDropdown = (
    <LocalRemoteDropdown
      composerMode={composerMode}
      setComposerMode={setComposerMode}
      conversationId={conversationId}
      footerRemoteState={footerRemoteState}
      side="left"
      disabled={isWorktreeConversation}
      threadHandoff={threadHandoff}
      worktreeLabelOnly={isWorktreeConversation}
      triggerVariant="summary-panel"
      onOpenChange={onOpenChange}
    />
  );
  let cloudEnvironmentDropdown =
    composerMode === "cloud" &&
    threadSummaryEnvironmentModeControlsJsxRuntime.jsx(PlatformContentGate, {
      electron: true,
      browser: true,
      children: threadSummaryEnvironmentModeControlsJsxRuntime.jsx(
        CloudEnvironmentDropdown,
        {
          composerMode,
          conversationId,
          disabled: isWorktreeConversation,
          setComposerMode,
          side: "left",
        },
      ),
    });
  return (
    <div className="relative flex w-full items-center gap-2">
      {localRemoteDropdown}
      {cloudEnvironmentDropdown}
    </div>
  );
}
var threadSummaryEnvironmentModeControlsModule,
  threadSummaryEnvironmentModeControlsJsxRuntime,
  initThreadSummaryEnvironmentModeControlsChunk = once(() => {
    threadSummaryEnvironmentModeControlsModule = getChunkModuleExports();
    initScopeRuntime();
    initPathHelpers();
    initConversationStateSelectors();
    ca();
    initElectronPlatformContent();
    initCloudEnvironmentDropdownChunk();
    cs();
    initThreadHandoffHelpersChunk();
    initLocalRemoteDropdownChunk();
    initHostCodexHomeQuery();
    Fi();
    fa();
    initComposerScope();
    initHostConfigHelpers();
    initStatsigFeatureGateHooks();
    threadSummaryEnvironmentModeControlsJsxRuntime = getJsxRuntime();
  });
function ThreadSummaryEnvironmentSection(props) {
  let {
      cwd,
      conversationId,
      hostConfig,
      isCodexWorktree,
      onOpenReviewTab,
      onForceShow,
      registerEnvironmentActionCommands,
      workspaceBrowserRoot,
    } = props,
    routeScope = useScope(localConversationRouteScope),
    diffStatsQuery = useSignalValue(diffStatsSignal),
    environmentTerminalController = useSignalValue(
      environmentTerminalControllerSignal,
    ),
    diffStats = diffStatsQuery.metrics,
    createBranchActionRef =
      threadSummaryEnvironmentSectionReactRuntime.useRef(null),
    createPullRequestActionRef =
      threadSummaryEnvironmentSectionReactRuntime.useRef(null),
    workspaceGitRoot =
      workspaceBrowserRoot == null
        ? null
        : normalizeWorkspaceBrowserRoot(workspaceBrowserRoot);
  let emptyBranchControlRow = isCodexWorktree ? (
    <SummaryPanelRow
      icon={threadSummaryEnvironmentSectionJsxRuntime.jsx(GitBranchIcon, {
        className: "icon-sm shrink-0",
      })}
      label={
        <FormattedMessage
          id="localConversation.gitActions.createBranch"
          defaultMessage="Create branch"
          description="Label for the create branch action in the git actions dropdown"
        />
      }
      onClick={() => {
        createBranchActionRef.current?.();
      }}
    />
  ) : null;
  let branchControlRow =
    workspaceGitRoot == null ? null : (
      <Ru
        gitRoot={workspaceGitRoot}
        hostConfig={hostConfig}
        localConversationId={conversationId}
        shouldShow={true}
        side="left"
        align="start"
        renderControl={(controlState) => {
          let { currentBranch, disabled, isPending, switchTooltipText } =
            controlState;
          return currentBranch == null ? (
            emptyBranchControlRow
          ) : (
            <SummaryPanelRow
              disabled={disabled}
              icon={threadSummaryEnvironmentSectionJsxRuntime.jsx(
                GitBranchIcon,
                {
                  className: "icon-sm shrink-0",
                },
              )}
              label={
                <span className="flex min-w-0 items-center gap-1 text-token-foreground">
                  <span className="min-w-0 truncate">{currentBranch}</span>
                  {disabled
                    ? null
                    : threadSummaryEnvironmentSectionJsxRuntime.jsx(
                        ChevronIcon,
                        {
                          className:
                            "icon-2xs shrink-0 text-token-text-tertiary",
                        },
                      )}
                </span>
              }
              labelClassName="flex min-w-0 items-center"
              title={switchTooltipText}
              trailing={
                isPending
                  ? threadSummaryEnvironmentSectionJsxRuntime.jsx(SpinnerIcon, {
                      className: "icon-xs text-token-text-tertiary",
                    })
                  : null
              }
              trailingVisible={isPending}
            />
          );
        }}
        onOpenChange={onForceShow}
      />
    );
  let renderSectionActions = (summaryState) => {
    let { isExpanded } = summaryState;
    return (
      <span className="ms-auto flex items-center justify-end gap-0.5">
        {diffStats && !isExpanded && (
          <Ml
            linesAdded={diffStats.additions}
            linesRemoved={diffStats.deletions}
          />
        )}
        {threadSummaryEnvironmentSectionJsxRuntime.jsx(
          LocalConversationEnvironmentActionControls,
          {
            conversationId,
            hostConfig,
            onMenuOpenChange: onForceShow,
            onOpenChange: onForceShow,
            onShowTerminal: (terminalId) => {
              openEnvironmentTerminalSession(
                routeScope,
                terminalId,
                environmentTerminalController,
              );
            },
            registerCommands: registerEnvironmentActionCommands,
            workspaceRoot: cwd,
          },
        )}
      </span>
    );
  };
  let sectionTitle = (
    <FormattedMessage
      id="codex.localConversation.environmentSummary.title"
      defaultMessage="Environment"
      description="Title for the thread summary side panel environment and branch details section"
    />
  );
  let branchChangesRow = threadSummaryEnvironmentSectionJsxRuntime.jsx(
    BranchChangesSummaryRow,
    {
      onOpenReviewTab,
      diffStats,
      isDiffStatsLoading: diffStatsQuery.isLoading,
    },
  );
  let environmentModeControls =
    conversationId == null ? null : (
      <ThreadSummaryEnvironmentModeControls
        conversationId={conversationId}
        onOpenChange={onForceShow}
      />
    );
  let branchControlOwnsDetachedSetup =
      isCodexWorktree && workspaceGitRoot != null,
    handleCreatePullRequestActionReady,
    handleCreateBranchActionReady;
  handleCreateBranchActionReady = (action) => {
    createBranchActionRef.current = action;
  };
  handleCreatePullRequestActionReady = (action) => {
    createPullRequestActionRef.current = action;
  };
  let pullRequestControls = threadSummaryEnvironmentSectionJsxRuntime.jsx(
    nc,
    {
      codexWorktree: isCodexWorktree,
      conversationId,
      cwd,
      hostId: hostConfig.id,
      hidePullRequestSection: true,
      hideCreatePullRequestAction: true,
      surface: "summary-panel",
      branchControlOwnsDetachedSetup,
      onCreateBranchActionReady: handleCreateBranchActionReady,
      onCreatePullRequestActionReady: handleCreatePullRequestActionReady,
    },
    cwd,
  );
  let handleCreatePullRequest = () => {
    createPullRequestActionRef.current?.();
  };
  let gitSummary = (
    <LocalConversationGitSummary
      conversationId={conversationId}
      cwd={cwd}
      hostConfig={hostConfig}
      workspaceBrowserRoot={workspaceBrowserRoot}
      onCreatePullRequest={handleCreatePullRequest}
    />
  );
  return (
    <ThreadSummaryPanelSection
      sectionKey="environment"
      after={renderSectionActions}
      title={sectionTitle}
    >
      {branchChangesRow}
      {environmentModeControls}
      {branchControlRow}
      {pullRequestControls}
      {gitSummary}
    </ThreadSummaryPanelSection>
  );
}
var threadSummaryEnvironmentSectionModule,
  threadSummaryEnvironmentSectionReactRuntime,
  threadSummaryEnvironmentSectionJsxRuntime,
  initThreadSummaryEnvironmentSectionChunk = once(() => {
    threadSummaryEnvironmentSectionModule = getChunkModuleExports();
    initScopeRuntime();
    initPathHelpers();
    threadSummaryEnvironmentSectionReactRuntime = toEsModule(
      loadReactModule(),
      1,
    );
    initIntlRuntime();
    initSpinnerComponent();
    Nl();
    initGitBranchIcon();
    initChevronDownIcon();
    Lu();
    Ds();
    Ri();
    initRouteScope();
    zi();
    initLocalEnvironmentActionControlsChunk();
    initSummaryPanelRowChunk();
    initThreadSummaryPanelSectionChunk();
    initBranchChangesSummaryRowChunk();
    initLocalConversationGitSummaryChunk();
    initThreadSummaryEnvironmentModeControlsChunk();
    threadSummaryEnvironmentSectionJsxRuntime = getJsxRuntime();
  });
function ThreadSummaryAutomationRow(props) {
  let { automation } = props,
    intl = useIntl(),
    scope = useScope(localConversationRouteScope),
    nextRunTooltip;
  {
    let nextRunLabel = ks({
      intl,
      nextRunAt: automation.nextRunAt,
      status: automation.status,
    });
    nextRunTooltip = intl.formatMessage(
      {
        id: "codex.localConversation.heartbeatAutomation.nextRun",
        defaultMessage: "Next run: {nextRunLabel}",
        description:
          "Tooltip shown on the heartbeat automation row in the thread summary panel",
      },
      {
        nextRunLabel,
      },
    );
  }
  let rowTitle = nextRunTooltip,
    scheduleSummary = Dl({
      rrule: automation.rrule,
      intl,
      fallbackMessage: intl.formatMessage({
        id: "settings.automations.rruleSummaryFallback",
        defaultMessage: "Custom schedule",
        description: "Fallback label when RRULE summary cannot be generated",
      }),
    });
  let rowAriaLabel = intl.formatMessage({
    id: "codex.localConversation.heartbeatAutomation.open",
    defaultMessage: "Open scheduled task",
    description:
      "Accessible label for opening the active scheduled task from the thread summary panel",
  });
  let rowIcon = <Tc className="icon-xs shrink-0" />;
  let nameNode = (
    <span className="min-w-0 flex-1 truncate">{automation.name}</span>
  );
  let scheduleNode =
    scheduleSummary == null ? null : (
      <span className="text-size-chat max-w-48 shrink-0 truncate text-token-text-secondary">
        {scheduleSummary}
      </span>
    );
  let label = (
    <>
      {nameNode}
      {scheduleNode}
    </>
  );
  let openAutomation = () => {
    kc({
      scope,
      automationId: automation.id,
      title: automation.name,
    });
  };
  return (
    <SummaryPanelRow
      aria-label={rowAriaLabel}
      icon={rowIcon}
      label={label}
      labelClassName="flex min-w-0 flex-1 items-baseline gap-2"
      onClick={openAutomation}
      title={rowTitle}
    />
  );
}
var threadSummaryAutomationRowModule,
  threadSummaryAutomationRowJsxRuntime,
  initThreadSummaryAutomationRowChunk = once(() => {
    threadSummaryAutomationRowModule = getChunkModuleExports();
    initScopeRuntime();
    initIntlRuntime();
    Ol();
    Ps();
    bs();
    Cc();
    initRouteScope();
    initSummaryPanelRowChunk();
    threadSummaryAutomationRowJsxRuntime = getJsxRuntime();
  });
var ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome = once(() => {
    initThreadSummaryPanelChromePrimitives();
    initThreadFindNavigationRailNoopChunk();
    initThreadSummaryPanelSectionChunk();
    ThreadSummaryPanelChrome = {
      Content: ThreadSummaryPanelContent,
      HeaderButton: ThreadSummaryPanelHeaderButton,
      PopoverContent: ThreadSummaryPanelPopoverContent,
      Root: ThreadSummaryPanelRoot,
      Section: ThreadSummaryPanelSection,
      SectionCount: ThreadSummaryPanelSectionCount,
    };
  });
function FloatingLocalConversationSummaryPanel(props) {
  let {
      artifacts,
      sideChats,
      toolSources,
      webSources,
      backgroundAgents,
      backgroundTerminals,
      browserUseSummaries,
      restoredBackgroundProcesses,
      plan,
      shouldHideInlineImmediately,
      shouldShow,
      onOpenBackgroundAgent,
    } = props,
    contentNode = localConversationSummaryPanelJsxRuntime.jsx(
      ThreadSummaryPanelChrome.Content,
      {
        children: (
          <ThreadSummaryPanelSections
            artifacts={artifacts}
            sideChats={sideChats}
            toolSources={toolSources}
            webSources={webSources}
            isVisible={shouldShow}
            backgroundAgents={backgroundAgents}
            backgroundTerminals={backgroundTerminals}
            browserUseSummaries={browserUseSummaries}
            restoredBackgroundProcesses={restoredBackgroundProcesses}
            plan={plan}
            registerEnvironmentActionCommands={true}
            onOpenBackgroundAgent={onOpenBackgroundAgent}
            onForceShow={noopForceShowFloatingSummaryPanel}
          />
        ),
      },
    );
  return localConversationSummaryPanelJsxRuntime.jsx(
    ThreadSummaryPanelChrome.Root,
    {
      shouldHideInlineImmediately,
      shouldShow,
      children: contentNode,
    },
  );
}
function noopForceShowFloatingSummaryPanel() {}
type RenderableThreadNode = unknown;
type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;
export interface LocalConversationSummaryPanelProps {
  artifacts: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly BrowserUseSummary[];
  restoredBackgroundProcesses: readonly unknown[];
  plan: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}
export function LocalConversationSummaryPanel(
  props: LocalConversationSummaryPanelProps,
) {
  let {
    artifacts,
    sideChats,
    toolSources,
    webSources,
    backgroundAgents,
    backgroundTerminals,
    browserUseSummaries,
    restoredBackgroundProcesses,
    plan,
    onOpenBackgroundAgent,
  } = props;
  return localConversationSummaryPanelJsxRuntime.jsx(
    ThreadSummaryPanelChrome.PopoverContent,
    {
      children: localConversationSummaryPanelJsxRuntime.jsx(
        ThreadSummaryPanelChrome.Content,
        {
          children: (
            <ThreadSummaryPanelSections
              artifacts={artifacts}
              sideChats={sideChats}
              toolSources={toolSources}
              webSources={webSources}
              isVisible={true}
              backgroundAgents={backgroundAgents}
              backgroundTerminals={backgroundTerminals}
              browserUseSummaries={browserUseSummaries}
              restoredBackgroundProcesses={restoredBackgroundProcesses}
              plan={plan}
              registerEnvironmentActionCommands={false}
              onOpenBackgroundAgent={onOpenBackgroundAgent}
              onForceShow={noopForceShowPopoverSummaryPanel}
            />
          ),
        },
      ),
    },
  );
}
function noopForceShowPopoverSummaryPanel() {}
function ThreadSummaryPanelSections(props) {
  let {
      onForceShow,
      artifacts,
      sideChats,
      toolSources,
      webSources,
      isVisible,
      backgroundAgents,
      backgroundTerminals,
      browserUseSummaries,
      restoredBackgroundProcesses,
      plan,
      registerEnvironmentActionCommands,
      onOpenBackgroundAgent,
    } = props,
    scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    isElectronRuntime =
      useConversationDetailMode() === CONVERSATION_DETAIL_STEPS_PROSE,
    hostConfig = useSignalValue(hostConfigSignal),
    conversationId =
      scope.value.routeKind === "local-thread"
        ? scope.value.conversationId
        : null,
    conversationTitle = useScopedValue(conversationTitleSignal, conversationId),
    isBrowserSidebarEnabled = useSignalValue(browserSidebarEnabledSignal),
    isBackgroundProcessTrackingEnabled = useStatsigGate("3264431617"),
    isComputerUsePipAvailable = useSignalValue(
      computerUsePictureInPictureAvailableSignal,
    ),
    isComputerUsePipVisible = useSignalValue(
      computerUsePictureInPictureVisibleSignal,
    ),
    openFileMutation = useAppServerMutation("open-file"),
    workspaceRouteState = useSignalValue(workspaceRouteStateSignal),
    conversationMode = useScopedValue(conversationModeSignal, conversationId),
    { data: automationData } = useSignalValue(automationDataSignal),
    pendingBackgroundProcessRows = useSignalValue(
      pendingBackgroundProcessRowsSignal,
    ),
    hasInlineBackgroundAgent = backgroundAgents.some(
      shouldShowInlineBackgroundAgent,
    );
  let hiddenBackgroundAgents = backgroundAgents.filter(
      shouldHideInlineBackgroundAgent,
    ),
    shouldPollChatProcesses =
      isBackgroundProcessTrackingEnabled && isVisible && conversationId != null,
    chatProcessesQueryOptions = {
      queryConfig: {
        enabled: shouldPollChatProcesses,
        intervalMs: 1e3,
      },
    };
  let { data: chatProcessesData } = useHostQuery(
      "chat-processes",
      chatProcessesQueryOptions,
    ),
    conversationWorkspaceRoot = useScopedValue(
      conversationWorkspaceRootSignal,
      conversationId,
    ),
    currentWorkspaceRoot = useSignalValue(currentWorkspaceRootSignal),
    { data: threadWorkspaceRootHints } = useGlobalStateQuery(
      GLOBAL_STATE_KEYS.THREAD_WORKSPACE_ROOT_HINTS,
    ),
    isProjectlessConversation = conversationMode === "projectless",
    threadWorkspaceRootHint =
      conversationId == null
        ? null
        : (threadWorkspaceRootHints?.[conversationId] ?? null),
    workspaceBrowserRoot = isProjectlessConversation
      ? (conversationWorkspaceRoot ?? threadWorkspaceRootHint)
      : currentWorkspaceRoot,
    isGitWorkspace =
      !isProjectlessConversation && workspaceRouteState.kind === "git",
    resolvedWorkspaceCwd =
      workspaceRouteState.cwd == null
        ? null
        : normalizeWorkspacePath(workspaceRouteState.cwd);
  let activeCwd = resolvedWorkspaceCwd,
    hasTrackedConversationProcesses =
      chatProcessesData?.processes.some(
        (processRecord) => processRecord.conversationId === conversationId,
      ) ?? false;
  let hasBackgroundTaskSources =
    backgroundTerminals.length > 0 ||
    restoredBackgroundProcesses.length > 0 ||
    pendingBackgroundProcessRows.size > 0 ||
    hasTrackedConversationProcesses;
  chatProcessesData?.processes;
  let chatProcessRecords = chatProcessesData?.processes,
    backgroundProcessSnapshotSelector =
      createBackgroundTerminalProcessSnapshotSelector({
        actionStatesByProcessId: pendingBackgroundProcessRows,
        backgroundTerminals,
        conversationId,
        isEqual: isEqualModule.default,
        persistedProcesses: chatProcessRecords,
        restoredProcesses: restoredBackgroundProcesses,
      });
  let shouldPollChildProcesses =
      shouldPollChatProcesses && hasBackgroundTaskSources,
    childProcessesQueryConfig = {
      enabled: shouldPollChildProcesses,
      intervalMs: 1e3,
      structuralSharing: false,
    };
  let childProcessesQueryOptions = {
    queryConfig: childProcessesQueryConfig,
    select: backgroundProcessSnapshotSelector,
  };
  let { data: childProcessesData } = useHostQuery(
      "child-processes",
      childProcessesQueryOptions,
    ),
    processSnapshotTimeMs = childProcessesData?.processSnapshotTimeMs ?? 0,
    matchingAutomation,
    backgroundTaskCount,
    backgroundTerminalRows;
  {
    backgroundTerminalRows = isBackgroundProcessTrackingEnabled
      ? createRestoredBackgroundTerminalRows({
          attachChildProcessMetrics: selectRunningProcessRows,
          childProcesses: childProcessesData?.processes,
          conversationCwd: workspaceRouteState.cwd,
          conversationId,
          createConversationProcessRecords: restoreRegisteredProcessRows,
          enabled: isVisible,
          hostId: hostConfig.id,
          mergeRestoredProcesses: mergeProcessRows,
          processSnapshotTimeMs,
          records: chatProcessesData?.processes,
          restoredProcesses: restoredBackgroundProcesses,
        })
      : [];
    matchingAutomation =
      automationData == null
        ? null
        : Jl({
            automations: automationData.items,
            conversationId,
          });
    backgroundTaskCount = countBackgroundTerminalSummaryRows({
      actionStatesByProcessId: pendingBackgroundProcessRows,
      backgroundTerminals,
      conversationId,
      isSettledActionState: isPendingProcessRowExpired,
      processSnapshotTimeMs,
      registeredRows: backgroundTerminalRows,
    });
  }
  let showBackgroundTasksSection =
      !isElectronRuntime && backgroundTaskCount > 0,
    viewAllProcessesLabel = intl.formatMessage({
      id: "codex.localConversation.backgroundTasks.viewAllProcessesLabel",
      defaultMessage: "View all processes",
      description:
        "Accessible label for the thread summary panel action that opens the process manager",
    });
  let planSectionTitle = intl.formatMessage({
    id: "codex.localConversation.plan.title",
    defaultMessage: "Plan",
    description: "Title for the plan section in the thread summary panel",
  });
  let { getImagePreviewSrc, onOpenOutput } = useThreadSummaryOutputOpenHandlers(
      {
        browserSidebarEnabled: isBrowserSidebarEnabled,
        cwd: activeCwd,
        hostConfig,
        openFile: openFileMutation.mutate,
        scope,
      },
    ),
    handleOpenSideChat = (sideChat) => {
      ja(scope, "right", sideChat.tabId);
    };
  let onOpenSideChat = useStableCallback(handleOpenSideChat),
    handleOpenSource = (source) => {
      setThreadSourceFrameState(scope, source, {
        isFullScreen: true,
      });
      let tabId = ia(source);
      scope
        .get(rightPanelTabsStore.tabs$)
        .some((item) => item.tabId === tabId) &&
        (rightPanelTabsStore.activateTab(scope, tabId), ma(scope));
    };
  let onOpenSource = useStableCallback(handleOpenSource),
    showStopBackgroundTerminalError = () => {
      scope
        .get(toastSignal)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.cleanError"
            defaultMessage="Unable to stop background terminals"
            description="Toast shown when cleaning background terminals from the thread summary panel fails"
          />,
        );
    };
  let onStopBackgroundTerminalError = useStableCallback(
      showStopBackgroundTerminalError,
    ),
    showRestartBackgroundTerminalError = () => {
      scope
        .get(toastSignal)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.restartError"
            defaultMessage="Unable to track restarted background terminal"
            description="Toast shown when tracking a restarted background terminal from the thread summary panel fails"
          />,
        );
    };
  let onRestartBackgroundTerminalError = useStableCallback(
      showRestartBackgroundTerminalError,
    ),
    handleOpenBackgroundTerminal = (backgroundTerminal) => {
      conversationId != null &&
        openBackgroundTerminalSidePanelTab({
          scope,
          backgroundTerminal,
          conversationId,
          fallbackTitle: intl.formatMessage({
            id: "codex.localConversation.backgroundTerminalTab.title",
            defaultMessage: "Background terminal",
            description:
              "Title for a background terminal output tab when the command text is unavailable",
          }),
        });
    };
  let onOpenBackgroundTerminal = useStableCallback(
      handleOpenBackgroundTerminal,
    ),
    automationSection = matchingAutomation != null && (
      <ThreadSummaryPanelSection
        sectionKey="automation"
        title={
          <FormattedMessage
            id="codex.localConversation.heartbeatAutomation.title"
            defaultMessage="Scheduled"
            description="Title for the active scheduled task section in the thread summary side panel"
          />
        }
      >
        <ThreadSummaryAutomationRow automation={matchingAutomation} />
      </ThreadSummaryPanelSection>
    );
  let gitSummarySection = !isElectronRuntime && isGitWorkspace && activeCwd && (
    <ThreadSummaryEnvironmentSection
      cwd={activeCwd}
      conversationId={conversationId}
      hostConfig={hostConfig}
      isCodexWorktree={workspaceRouteState.isCodexWorktree}
      onOpenReviewTab={() => Zs(scope)}
      onForceShow={onForceShow}
      registerEnvironmentActionCommands={registerEnvironmentActionCommands}
      workspaceBrowserRoot={workspaceBrowserRoot}
    />
  );
  let planSection =
    plan != null && conversationId != null ? (
      <ThreadSummaryPanelSection sectionKey="plan" title={planSectionTitle}>
        <SummaryPanelRow
          icon={<Ls className="icon-xs shrink-0" />}
          label={plan.title ?? planSectionTitle}
          labelClassName="min-w-0 truncate"
          title={plan.title ?? planSectionTitle}
          onClick={() => {
            tc(scope, {
              content: plan.content,
              conversationId,
              cwd: activeCwd,
              key: plan.key,
              title: planSectionTitle,
            });
          }}
        />
      </ThreadSummaryPanelSection>
    ) : null;
  let outputsSection = !isGitWorkspace && (
    <ThreadSummaryPanelSection
      sectionKey="artifacts"
      title={
        <FormattedMessage
          id="codex.localConversation.outputs.title"
          defaultMessage="Outputs"
          description="Title for the outputs section in the local conversation summary panel"
        />
      }
      titleSuffix={localConversationSummaryPanelJsxRuntime.jsx(
        ThreadSummaryPanelChrome.SectionCount,
        {
          count: artifacts.length,
        },
      )}
    >
      <SummaryPanelArtifactsList
        onOpen={onOpenOutput}
        artifacts={artifacts}
        conversationTitle={conversationTitle}
        getImagePreviewSrc={getImagePreviewSrc}
      />
    </ThreadSummaryPanelSection>
  );
  let sideChatsSection = sideChats.length > 0 && (
    <ThreadSummaryPanelSection
      sectionKey="side-chats"
      title={
        <FormattedMessage
          id="codex.localConversation.sideChats.title"
          defaultMessage="Side chats"
          description="Title for the side chats section in the thread summary side panel"
        />
      }
      titleSuffix={localConversationSummaryPanelJsxRuntime.jsx(
        ThreadSummaryPanelChrome.SectionCount,
        {
          count: sideChats.length,
        },
      )}
    >
      <ThreadSummarySideChatRows
        sideChats={sideChats}
        onOpen={onOpenSideChat}
      />
    </ThreadSummaryPanelSection>
  );
  let backgroundAgentsSection = backgroundAgents.length > 0 && (
    <ThreadSummaryPanelSection
      autoCollapse={
        !hasInlineBackgroundAgent &&
        backgroundAgents.every(isDoneBackgroundAgent)
      }
      sectionKey="background-subagents"
      title={localConversationSummaryPanelJsxRuntime.jsx(
        BackgroundTaskSectionTitle,
        {
          type: "subagents",
        },
      )}
      titleSuffix={
        hasInlineBackgroundAgent
          ? null
          : localConversationSummaryPanelJsxRuntime.jsx(
              ThreadSummaryPanelChrome.SectionCount,
              {
                count: hiddenBackgroundAgents.length,
              },
            )
      }
    >
      {localConversationSummaryPanelJsxRuntime.jsx(
        ThreadSummaryBackgroundActivityRows,
        {
          backgroundAgents,
          backgroundTerminals: [],
          conversationId,
          onOpenBackgroundAgent,
          onOpenTerminal: onOpenBackgroundTerminal,
          onStopError: onStopBackgroundTerminalError,
        },
      )}
    </ThreadSummaryPanelSection>
  );
  let backgroundTasksSection = showBackgroundTasksSection && (
    <ThreadSummaryPanelSection
      after={
        isBackgroundProcessTrackingEnabled ? (
          <button
            type="button"
            aria-label={viewAllProcessesLabel}
            className="ms-auto inline-flex size-6 cursor-interaction items-center justify-center rounded-sm text-token-text-tertiary hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            title={viewAllProcessesLabel}
            onClick={openThreadSummaryProcessManager}
          >
            <Ec className="icon-xs" />
          </button>
        ) : null
      }
      sectionKey="background-tasks"
      title={localConversationSummaryPanelJsxRuntime.jsx(
        BackgroundTaskSectionTitle,
        {
          type: "tasks",
        },
      )}
      titleSuffix={localConversationSummaryPanelJsxRuntime.jsx(
        ThreadSummaryPanelChrome.SectionCount,
        {
          count: backgroundTaskCount,
        },
      )}
    >
      {localConversationSummaryPanelJsxRuntime.jsx(PlatformContentGate, {
        electron: true,
        children: localConversationSummaryPanelJsxRuntime.jsx(
          BackgroundTerminalSummaryRows,
          {
            backgroundTerminals,
            childProcesses: childProcessesData?.processes,
            conversationId,
            hostId: hostConfig.id,
            isVisible,
            processSnapshotTimeMs,
            registeredRows: backgroundTerminalRows,
            onOpen: onOpenBackgroundTerminal,
            onRestartError: onRestartBackgroundTerminalError,
            onStopError: onStopBackgroundTerminalError,
          },
        ),
      })}
      {backgroundTerminals.length > 0 &&
        localConversationSummaryPanelJsxRuntime.jsx(PlatformContentGate, {
          extension: true,
          children: localConversationSummaryPanelJsxRuntime.jsx(
            ThreadSummaryBackgroundActivityRows,
            {
              backgroundAgents: [],
              backgroundTerminals,
              conversationId,
              onOpenBackgroundAgent,
              onOpenTerminal: onOpenBackgroundTerminal,
              onStopError: onStopBackgroundTerminalError,
            },
          ),
        })}
    </ThreadSummaryPanelSection>
  );
  let computerUsePipSection = (
    <ThreadSummaryComputerUsePipSection
      isAvailable={isComputerUsePipAvailable}
      isVisible={isComputerUsePipVisible}
      onToggle={() => {
        scope.set(
          computerUsePictureInPictureVisibleSignal,
          !isComputerUsePipVisible,
        );
      }}
    />
  );
  let browserTabsSection = (
    <ThreadSummaryBrowserTabsSection
      browserUseSummaries={browserUseSummaries}
      onOpenBrowserTab={(browserTabId) => {
        openBrowserSummaryTab(scope, true, {
          browserTabId,
        });
      }}
    />
  );
  let sourcesTitle = (
    <FormattedMessage
      id="codex.localConversation.sources.title"
      defaultMessage="Sources"
      description="Title for the thread summary side panel sources section"
    />
  );
  let sourceCount = toolSources.length + webSources.length,
    sourceCountSuffix = localConversationSummaryPanelJsxRuntime.jsx(
      ThreadSummaryPanelChrome.SectionCount,
      {
        count: sourceCount,
      },
    );
  let sourcesContent = (
    <ThreadSummarySourceRows
      onOpen={onOpenSource}
      toolSources={toolSources}
      webSources={webSources}
    />
  );
  let sourcesSection = (
    <ThreadSummaryPanelSection
      sectionKey="tool-sources"
      title={sourcesTitle}
      titleSuffix={sourceCountSuffix}
    >
      {sourcesContent}
    </ThreadSummaryPanelSection>
  );
  return (
    <>
      {automationSection}
      {gitSummarySection}
      {planSection}
      {outputsSection}
      {sideChatsSection}
      {backgroundAgentsSection}
      {backgroundTasksSection}
      {computerUsePipSection}
      {browserTabsSection}
      {sourcesSection}
    </>
  );
}
function openThreadSummaryProcessManager() {
  dispatchGlobalCommand("openProcessManager", "thread_summary_process_manager");
}
var localConversationSummaryPanelModule,
  isEqualModule,
  localConversationSummaryPanelJsxRuntime,
  initLocalConversationGitSummary = once(() => {
    localConversationSummaryPanelModule = getChunkModuleExports();
    isEqualModule = toEsModule(loadIsEqualModule(), 1);
    initScopeRuntime();
    initPathHelpers();
    initIntlRuntime();
    initConversationStateSelectors();
    El();
    Wl();
    initBrowserFeatureAvailabilitySignals();
    initGlobalCommandHandlers();
    Yi();
    initExternalUrlHelpers();
    initToastRuntime();
    initElectronPlatformContent();
    initFileTypeDetectionHelpers();
    initGlobalStateQueryRuntime();
    wc();
    Sc();
    initSlashIcon();
    fc();
    Qi();
    el();
    fa();
    initLocalImageInliningHelpers();
    initPendingBackgroundProcessRowsChunk();
    po();
    initThreadSummaryPanelSignalsChunk();
    initRouteScope();
    Ki();
    initConversationDetailModeConstants();
    initStatsigFeatureGateHooks();
    ho();
    Ji();
    lc();
    initSummaryPanelArtifactsListChunk();
    initThreadSummaryBackgroundActivityRowsChunk();
    initBackgroundTerminalSummaryRowsSupportChunk();
    initBackgroundTerminalSummaryRowsChunk();
    initThreadSummaryEnvironmentSectionChunk();
    initThreadSummaryAutomationRowChunk();
    initThreadSummarySideChatRowsChunk();
    initThreadSummarySourceRowsChunk();
    initThreadSummaryBrowserSectionsChunk();
    initThreadSummaryOutputOpenHandlersChunk();
    initBackgroundTerminalSidePanelTabChunk();
    initSummaryPanelRowChunk();
    initThreadSummaryPanelSectionChunk();
    initThreadSummaryPanelChrome();
    initKeyboardShortcutLabel();
    initVscodeApiBridge();
    localConversationSummaryPanelJsxRuntime = getJsxRuntime();
  });
var localConversationArtifactsModule,
  initLocalConversationArtifacts = once(() => {
    localConversationArtifactsModule = getChunkModuleExports();
    initMotionRuntime();
    initScopeRuntime();
    ua();
    Xa();
    initReducedMotionPreference();
    initPinnedSummaryPanelState();
  });
function collectBackgroundTerminalRowsFromTurns(turns) {
  let latestTurnIndex = turns.length - 1,
    backgroundTerminalRows = [];
  for (let turnIndex = latestTurnIndex; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    if (
      turn != null &&
      !(turnIndex === latestTurnIndex && turn.status === "inProgress")
    ) {
      for (let item of turn.items ?? [])
        if (
          item != null &&
          item.type === "commandExecution" &&
          item.status === "inProgress" &&
          !turn.interruptedCommandExecutionItemIds?.includes(item.id)
        ) {
          let command = Mc(item);
          backgroundTerminalRows.push({
            id: item.id,
            command,
            cwd: item.cwd ?? null,
            processId: item.processId,
            startedAtMs:
              turn.commandExecutionStartedAtMsById?.[item.id] ??
              turn.firstTurnWorkItemStartedAtMs ??
              turn.turnStartedAtMs ??
              null,
            turnId: turn.turnId,
          });
        }
    }
  }
  return backgroundTerminalRows;
}
function collectRestoredBackgroundProcessRows(conversation) {
  return conversation == null
    ? []
    : collectConversationProcessRows([conversation]).filter(
        (item) => item.source === "restored-process",
      );
}
var initRestoredProcessRowsCollector = once(() => {
  xs();
  initActiveConversationProcessRowsChunk();
});
function getLatestCompletedTurnPlanSummary(turns) {
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    if (turn != null && turn.status !== "inProgress")
      for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
        let item = turn.items[itemIndex];
        if (item == null || item.type !== "plan") continue;
        let headingTitle = item.text.match(/^#\s+(.+)$/m)?.[1]?.trim();
        return {
          content: item.text,
          key: turn.turnId ?? item.id,
          title:
            headingTitle == null
              ? null
              : formatConversationTitleText(headingTitle),
        };
      }
  }
  return null;
}
var initLatestCompletedPlanSummaryHelpers = once(() => {
  Ur();
});
function collectSideChatTabSummaries(tabs, isConversationResponseInProgress) {
  return tabs.flatMap((item) => {
    if (!item.tabId.startsWith(SIDE_CHAT_TAB_ID_PREFIX)) return [];
    let conversationId = toConversationId(
      item.tabId.slice(SIDE_CHAT_TAB_ID_PREFIX.length),
    );
    return [
      {
        conversationId: conversationId,
        isResponseInProgress: isConversationResponseInProgress(conversationId),
        tabId: item.tabId,
        title: item.title,
      },
    ];
  });
}
var SIDE_CHAT_TAB_ID_PREFIX,
  initSideChatTabSummaryHelpers = once(() => {
    initPathHelpers();
    SIDE_CHAT_TAB_ID_PREFIX = "sidechat:";
  });
function buildMcpServerMetadataByName(mcpServersQuery) {
  let metadataByName = new Map();
  for (let serverRegistration of mcpServersQuery?.data ?? []) {
    let serverInfo = serverRegistration.serverInfo;
    if (serverInfo == null) continue;
    let serverLogo = xl(serverInfo),
      displayName = serverInfo.title?.trim() || serverInfo.name.trim() || null;
    if (serverLogo == null && displayName == null) continue;
    let metadata = {
      logoUrl: serverLogo?.logoUrl ?? null,
      logoUrlDark: serverLogo?.logoDarkUrl ?? null,
      name: displayName,
    };
    for (let serverName of [serverRegistration.name, serverInfo.name]) {
      let lookupKey = normalizeMcpServerLookupKey(serverName);
      lookupKey.length > 0 &&
        !metadataByName.has(lookupKey) &&
        metadataByName.set(lookupKey, metadata);
    }
  }
  return metadataByName;
}
function normalizeMcpServerLookupKey(serverName) {
  return serverName?.trim().toLowerCase() ?? "";
}
var initMcpToolSourceMetadataHelpers = once(() => {
  Sl();
});
function collectConversationMcpToolSources(
  turns,
  apps,
  installedMcpAppIds,
  mcpServersQuery,
) {
  let toolSources = [],
    toolSourcesById = new Map(),
    serverMetadataByName = buildMcpServerMetadataByName(mcpServersQuery);
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
      let item = turn.items[itemIndex];
      if (item.type !== "mcpToolCall" || item.server === "node_repl") continue;
      let toolSource = getMcpToolSourceSummary(
          item,
          apps,
          serverMetadataByName,
        ),
        mcpAppId = parseMcpAppIdFromToolCallId(item.id),
        installedMcpAppId =
          installedMcpAppIds?.has(mcpAppId) === true ? mcpAppId : undefined,
        existingToolSource = toolSourcesById.get(toolSource.id);
      if (existingToolSource != null) {
        existingToolSource.mcpAppId == null &&
          installedMcpAppId != null &&
          (existingToolSource.mcpAppId = installedMcpAppId);
        continue;
      }
      toolSource.mcpAppId = installedMcpAppId;
      toolSourcesById.set(toolSource.id, toolSource);
      toolSources.push(toolSource);
    }
  }
  return toolSources;
}
function getMcpToolSourceSummary(item, apps, serverMetadataByName) {
  let appToolSource = $r({
    apps: apps,
    functionName: `${item.server}__${item.tool}`,
    serverName: item.server,
    toolName: item.tool,
  });
  if (appToolSource != null)
    return {
      id: appToolSource.id,
      name: appToolSource.name,
      pluginDisplayNames: appToolSource.pluginDisplayNames ?? [],
      logoUrl: appToolSource.logoUrl,
      logoUrlDark: appToolSource.logoUrlDark,
    };
  let serverMetadata = serverMetadataByName.get(
    normalizeMcpServerLookupKey(item.server),
  );
  return {
    id: `mcp-server:${item.server}`,
    name: serverMetadata?.name ?? formatIdentifierTitle(item.server),
    pluginDisplayNames: [],
    logoUrl: serverMetadata?.logoUrl ?? null,
    logoUrlDark: serverMetadata?.logoUrlDark ?? null,
  };
}
var initLocalConversationSummaryPanelModelDependencies = once(() => {
  Qi();
  initAppToolSourceMatcherCache();
  initMcpToolSourceMetadataHelpers();
  initIdentifierTitleFormatter();
  initThreadSummaryWebSourcesChunk();
  initThreadSummaryBrowserUseModelChunk();
});
function useLocalConversationSummaryPanelModel(
  includeBackgroundActivity = true,
) {
  let routeSnapshot = useScope(localConversationRouteScope),
    conversationId =
      routeSnapshot.value.routeKind === "local-thread"
        ? routeSnapshot.value.conversationId
        : null;
  let host = useSignalValue(hostConfigSignal),
    turns =
      useScopedValue(conversationTurnsSignal, conversationId) ??
      EMPTY_SUMMARY_PANEL_TURNS,
    cwd = useScopedValue(conversationCwdSignal, conversationId),
    title = useScopedValue(conversationTitleSignal, conversationId),
    backgroundTerminals = includeBackgroundActivity
      ? collectBackgroundTerminalRowsFromTurns(turns)
      : [],
    restoredBackgroundProcesses = includeBackgroundActivity
      ? collectRestoredBackgroundProcessRows(
          conversationId == null
            ? null
            : {
                cwd,
                hostId: host.id,
                id: conversationId,
                title,
                turns,
              },
        )
      : [];
  let artifacts = useScopedValue(
      localConversationSummaryArtifactsSignal,
      conversationId,
    ),
    sideChats = useSignalValue(localConversationSideChatSummariesSignal),
    installedMcpAppIds = useSignalValue(installedMcpAppIdsSignal),
    browserUseSummaries = useThreadSummaryBrowserUseSummaries(routeSnapshot);
  let hasExternalMcpToolCalls = turns.some(turnHasExternalMcpToolCall),
    mcpAppsQueryInput = {
      enabled: hasExternalMcpToolCalls,
      hostId: host.id,
    };
  let { data: apps = [] } = useAppsQuery(mcpAppsQueryInput),
    { data: mcpServersQuery } = useScopedValue(mcpServersQuerySignal, host.id),
    toolSources = collectConversationMcpToolSources(
      turns,
      apps,
      installedMcpAppIds,
      mcpServersQuery,
    ),
    webSources = collectConversationWebSources(turns),
    plan = getLatestCompletedTurnPlanSummary(turns),
    backgroundAgents = useScopedValue(
      backgroundAgentsSignal,
      ns() ? conversationId : null,
    );
  return {
    artifacts,
    sideChats,
    toolSources,
    webSources,
    backgroundAgents,
    backgroundTerminals,
    browserUseSummaries,
    restoredBackgroundProcesses,
    plan,
  };
}
function turnHasExternalMcpToolCall(turn) {
  return turn.items.some(isExternalMcpToolCallItem);
}
function isExternalMcpToolCallItem(item) {
  return item.type === "mcpToolCall" && item.server !== "node_repl";
}
var localConversationSummaryPanelSignalsModule,
  localConversationSideChatSummariesSignal,
  EMPTY_SUMMARY_PANEL_TURNS,
  initLocalConversationSummaryPanelSignals = once(() => {
    localConversationSummaryPanelSignalsModule = getChunkModuleExports();
    initScopeRuntime();
    initConversationStateSelectors();
    initBrowserFeatureAvailabilitySignals();
    Ka();
    yo();
    Yi();
    Ao();
    Qi();
    fa();
    initConnectorAppsListQuery();
    initConfigQueryRuntime();
    initRouteScope();
    Ki();
    initConversationRouteSourceHelpers();
    initLocalConversationArtifactSignals();
    Pc();
    initRestoredProcessRowsCollector();
    initLatestCompletedPlanSummaryHelpers();
    initSideChatTabSummaryHelpers();
    initLocalConversationSummaryPanelModelDependencies();
    localConversationSideChatSummariesSignal = createDerivedSignal(
      localConversationRouteScope,
      ({ get }) =>
        collectSideChatTabSummaries(
          get(rightPanelTabsStore.tabs$),
          (t) => get(localResponseInProgressSignal, t) ?? false,
        ),
    );
    EMPTY_SUMMARY_PANEL_TURNS = [];
  });
function ConnectedLocalWorktreeRestoreBanner(props) {
  let { conversationId, cwd } = props,
    threadHostId = useScopedValue(conversationHostIdSignal, conversationId),
    hostConnectionStatus = useScopedValue(
      hostConnectionStatusSignal,
      threadHostId,
    );
  if (threadHostId !== "local" && hostConnectionStatus !== "connected")
    return null;
  return (
    <WorktreeRestoreBanner
      conversationId={conversationId}
      cwd={cwd}
      threadHostId={threadHostId}
    />
  );
}
function WorktreeRestoreBanner(props) {
  let { conversationId, cwd, threadHostId } = props,
    scope = useScope(appScope),
    host = useHostConfigById(threadHostId),
    hostKey = getHostConfigKey(host);
  let worktreeQueryKey = hostKey,
    intl = useIntl(),
    queryClient = useQueryClient(),
    worktreeStatusQuery = useScopedValue(
      worktreeStatusQuerySignal,
      conversationId,
    ),
    worktreeStatus = worktreeStatusQuery.data,
    isWorktreeStatusUnavailable =
      worktreeStatusQuery.isError || worktreeStatus?.kind === "unavailable",
    checkWorktreeMutationOptions = {
      mutationFn: (nextCwd) =>
        ec(scope, {
          conversationId,
          cwd: nextCwd,
          hostId: threadHostId,
        }),
    };
  let checkWorktreeMutation = useMutation(checkWorktreeMutationOptions),
    handleRestoreSuccess = () => {
      logger.info("[worktree-restore] successfully restored");
      cwd != null &&
        scope.query.invalidate(
          Bs,
          {
            conversationId,
            cwd: normalizeWorkspacePath(cwd),
            hostId: threadHostId,
          },
          {
            exact: true,
          },
        );
      queryClient.invalidateQueries({
        queryKey: Gs(worktreeQueryKey),
      });
      queryClient.invalidateQueries({
        queryKey: ["git", "metadata", worktreeQueryKey],
      });
      let sessionId =
        environmentTerminalControllerService.getSessionForConversation(
          conversationId,
        );
      sessionId != null &&
        cwd != null &&
        environmentTerminalControllerService.attach({
          sessionId: sessionId,
          conversationId,
          hostId: host.id,
          cwd,
          forceCwdSync: true,
        });
      scope.get(toastSignal).success(
        intl.formatMessage({
          id: "worktreeRestoreBanner.restore.success",
          defaultMessage: "Worktree restored",
          description: "Toast shown when a missing Codex worktree is restored",
        }),
      );
    };
  let handleRestoreError = (error) => {
    let message = error.message;
    logger.debug("[worktree-restore] restore failed for", {
      safe: {},
      sensitive: {
        cwd: cwd ?? "unknown",
        message: message,
      },
    });
    scope.get(toastSignal).danger(
      intl.formatMessage(
        {
          id: "worktreeRestoreBanner.restore.error",
          defaultMessage: "Failed to restore worktree: {message}",
          description:
            "Toast shown when restoring a missing Codex worktree fails",
        },
        {
          message: message,
        },
      ),
    );
  };
  let restoreMutationOptions = {
    onSuccess: handleRestoreSuccess,
    onError: handleRestoreError,
  };
  let restoreWorktreeMutation = useHostMutation(
    "restore-worktree",
    host,
    restoreMutationOptions,
  );
  if (
    worktreeStatus?.kind !== "restorable" &&
    worktreeStatus?.kind !== "gone" &&
    !isWorktreeStatusUnavailable
  )
    return null;
  let title = isWorktreeStatusUnavailable ? (
    <FormattedMessage
      id="worktreeRestoreBanner.unavailable.title"
      defaultMessage="Couldn't check worktree status"
      description="Title for banner when Codex cannot verify whether a managed worktree exists"
    />
  ) : worktreeStatus?.kind === "gone" ? (
    <FormattedMessage
      id="worktreeRestoreBanner.missing.title"
      defaultMessage="Current working directory missing"
      description="Title for banner when the current working directory is missing and no snapshot exists"
    />
  ) : (
    <FormattedMessage
      id="worktreeRestoreBanner.title"
      defaultMessage="Worktree cleaned up"
      description="Title for banner when a Codex worktree was pruned but can be restored"
    />
  );
  let bannerTitle = title,
    body = isWorktreeStatusUnavailable ? (
      <FormattedMessage
        id="worktreeRestoreBanner.unavailable.body"
        defaultMessage="Retry to verify this chat's working directory"
        description="Body text for banner shown when Codex cannot inspect a managed worktree"
      />
    ) : worktreeStatus?.kind === "gone" ? (
      <FormattedMessage
        id="worktreeRestoreBanner.missing.body"
        defaultMessage="This chat's working directory no longer exists"
        description="Body text for banner shown when the current working directory is missing and no snapshot exists"
      />
    ) : (
      <FormattedMessage
        id="worktreeRestoreBanner.body"
        defaultMessage="This chat's worktree was removed to save disk space"
        description="Body text for banner that offers to restore a missing worktree snapshot"
      />
    );
  let bannerBody = body,
    bannerType = isWorktreeStatusUnavailable ? "error" : "info",
    titleNode = (
      <span className="min-w-0 truncate font-semibold text-token-foreground">
        {bannerTitle}
      </span>
    );
  let bodyNode = (
    <span className="hidden min-w-0 truncate text-token-description-foreground sm:inline">
      {bannerBody}
    </span>
  );
  let content = (
    <span className="flex min-w-0 items-center gap-2">
      {titleNode}
      {bodyNode}
    </span>
  );
  let customCtas =
    isWorktreeStatusUnavailable && cwd != null
      ? worktreeRestoreBannerJsxRuntime.jsx(Button, {
          loading:
            checkWorktreeMutation.isPending || worktreeStatusQuery.isFetching,
          onClick: () => {
            checkWorktreeMutation.mutate(cwd);
          },
          children: (
            <FormattedMessage
              id="worktreeRestoreBanner.retryCta"
              defaultMessage="Retry"
              description="Action to retry managed worktree inspection"
            />
          ),
        })
      : worktreeStatus?.kind === "restorable"
        ? worktreeRestoreBannerJsxRuntime.jsx(Button, {
            color: "primary",
            loading: restoreWorktreeMutation.isPending,
            onClick: () => {
              restoreWorktreeMutation.mutateAsync({
                repoRoot: worktreeStatus.snapshot.repoRoot,
                worktreePath: worktreeStatus.worktreePath,
                conversationId,
                operationSource: "worktree_restore_banner",
              });
            },
            children: (
              <FormattedMessage
                id="worktreeRestoreBanner.restoreCta"
                defaultMessage="Restore worktree"
                description="Primary call to action for restoring a missing worktree snapshot"
              />
            ),
          })
        : null;
  return worktreeRestoreBannerJsxRuntime.jsx($s, {
    type: bannerType,
    layout: "horizontal",
    content: content,
    customCtas: customCtas,
  });
}
var worktreeRestoreBannerModule,
  worktreeRestoreBannerJsxRuntime,
  initWorktreeRestoreBannerChunk = once(() => {
    worktreeRestoreBannerModule = getChunkModuleExports();
    initReactQueryRuntime();
    initScopeRuntime();
    initPathHelpers();
    initIntlRuntime();
    initConversationStateSelectors();
    vs();
    initButtonComponentPrimitives();
    initToastRuntime();
    initGitBranchQueryRuntime();
    fn();
    Fn();
    initAppScope();
    initLocalHostConstants();
    initHostConfigHelpers();
    initEnvironmentTerminalController();
    initLoggerRuntime();
    Ns();
    Ys();
    worktreeRestoreBannerJsxRuntime = getJsxRuntime();
  });
function findCompletedTurnSearchKeyAtOrBefore(visibleTurnEntries, timestampMs) {
  for (
    let entryIndex = visibleTurnEntries.length - 1;
    entryIndex >= 0;
    --entryIndex
  ) {
    let visibleTurnEntry = visibleTurnEntries[entryIndex];
    if (
      !(
        visibleTurnEntry.turn.turnStartedAtMs != null &&
        visibleTurnEntry.turn.turnStartedAtMs > timestampMs
      )
    )
      return visibleTurnEntry.turn.status === "completed"
        ? visibleTurnEntry.turnSearchKey
        : null;
  }
  return null;
}
var initOlderTurnForkDialogStatics = once(() => {});
function ForkFromOlderTurnDialog(props) {
  let {
      canForkIntoWorktree,
      isSubmitting,
      isWorktreeThread,
      onClose,
      onForkIntoLocal,
      onForkIntoWorktree,
      open,
      showWorktreeOption,
    } = props,
    handleOpenChange = (nextOpen) => {
      nextOpen || onClose();
    };
  let dialogHeader = (
    <DialogHeader
      icon={olderTurnForkDialogJsxRuntime.jsx(GitBranchIcon, {
        className: "icon-sm text-token-foreground",
      })}
      title={
        <FormattedMessage
          id="localConversation.forkFromOlderTurnDialog.title"
          defaultMessage="Fork from earlier message?"
          description="Title for the confirmation dialog shown when forking from a non-latest user message"
        />
      }
      subtitle={
        <FormattedMessage
          id="localConversation.forkFromOlderTurnDialog.subtitle"
          defaultMessage="This keeps your current files and worktree state as-is. If later turns changed the filesystem, the new fork may not match what is currently on disk."
          description="Subtitle for the confirmation dialog shown when forking from a non-latest user message"
        />
      }
    />
  );
  let localForkIcon = isWorktreeThread
    ? olderTurnForkDialogJsxRuntime.jsx(ta, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      })
    : olderTurnForkDialogJsxRuntime.jsx(sa, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      });
  let localForkMessageDescriptor = isWorktreeThread
      ? fo.forkIntoSameWorktree
      : fo.forkIntoLocal,
    localForkTitle = (
      <span className="text-sm font-medium electron:text-base">
        <FormattedMessage {...localForkMessageDescriptor} />
      </span>
    );
  let localForkDescription = (
    <span className="text-xs whitespace-normal text-token-description-foreground">
      {isWorktreeThread ? (
        <FormattedMessage
          id="localConversation.forkFromOlderTurnDialog.local.sameWorktreeDescription"
          defaultMessage="Continue from this message in the same worktree"
          description="Description for forking an older message within the same worktree"
        />
      ) : (
        <FormattedMessage
          id="localConversation.forkFromOlderTurnDialog.local.description"
          defaultMessage="Continue from this message in a new local chat"
          description="Description for forking an older message locally"
        />
      )}
    </span>
  );
  let localForkLabel = (
    <span className="flex min-w-0 flex-col gap-0.5">
      {localForkTitle}
      {localForkDescription}
    </span>
  );
  let localForkButton = (
    <button
      type="button"
      className="group flex w-full items-center gap-3 rounded-lg px-[var(--padding-row-x)] py-2 text-left text-token-foreground outline-hidden enabled:cursor-interaction enabled:hover:bg-token-list-hover-background enabled:focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isSubmitting}
      onClick={onForkIntoLocal}
    >
      {localForkIcon}
      {localForkLabel}
    </button>
  );
  let worktreeForkButton = showWorktreeOption ? (
    <button
      type="button"
      className="group flex w-full items-center gap-3 rounded-lg px-[var(--padding-row-x)] py-2 text-left text-token-foreground outline-hidden enabled:cursor-interaction enabled:hover:bg-token-list-hover-background enabled:focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isSubmitting || !canForkIntoWorktree}
      onClick={onForkIntoWorktree}
    >
      {olderTurnForkDialogJsxRuntime.jsx(ta, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      })}
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="text-sm font-medium electron:text-base">
          <FormattedMessage {...fo.forkIntoWorktree} />
        </span>
        <span className="text-xs whitespace-normal text-token-description-foreground">
          {canForkIntoWorktree ? (
            <FormattedMessage
              id="localConversation.forkFromOlderTurnDialog.worktree.description"
              defaultMessage="Continue from this message in a new worktree"
              description="Description for forking an older message into a new worktree"
            />
          ) : (
            <FormattedMessage {...fo.forkThreadRequiresGitRepo} />
          )}
        </span>
      </span>
    </button>
  ) : null;
  let forkOptions = (
    <div className="flex flex-col gap-1">
      {localForkButton}
      {worktreeForkButton}
    </div>
  );
  let cancelLabel = (
    <FormattedMessage
      id="localConversation.forkFromOlderTurnDialog.cancel"
      defaultMessage="Cancel"
      description="Cancel button label for the older-turn fork confirmation dialog"
    />
  );
  let cancelAction = (
    <DialogFooterActions>
      {olderTurnForkDialogJsxRuntime.jsx(Button, {
        color: "secondary",
        disabled: isSubmitting,
        onClick: onClose,
        children: cancelLabel,
      })}
    </DialogFooterActions>
  );
  let dialogBody = olderTurnForkDialogJsxRuntime.jsxs(DialogBody, {
    className: "gap-4",
    children: [dialogHeader, forkOptions, cancelAction],
  });
  return olderTurnForkDialogJsxRuntime.jsx(AppDialog, {
    open,
    showDialogClose: false,
    size: "compact",
    onOpenChange: handleOpenChange,
    children: dialogBody,
  });
}
var olderTurnForkDialogModule,
  olderTurnForkDialogJsxRuntime,
  initOlderTurnForkDialogChunk = once(() => {
    olderTurnForkDialogModule = getChunkModuleExports();
    initIntlRuntime();
    initButtonComponentPrimitives();
    initAppDialog();
    initDialogLayoutComponents();
    initGitBranchIcon();
    Ni();
    Ra();
    Sa();
    olderTurnForkDialogJsxRuntime = getJsxRuntime();
  });
function ForkFromOlderTurnDialogController({
  conversationCwd,
  conversationId,
  conversationLatestCollaborationMode,
  hostId,
  onClose,
  onForkIntoLocal,
  turnId,
}) {
  let scope = useScope(appScope),
    intl = useIntl(),
    navigate = useNavigate(),
    [isSubmitting, setIsSubmitting] =
      olderTurnForkDialogReactRuntime.useState(false),
    isWorktreeThread = isRecentLocalEnvironmentAction(
      conversationCwd ? normalizeWorkspacePath(conversationCwd) : null,
      hostId,
    ),
    { gitRoot } = ml(conversationCwd, {
      enabled: conversationCwd != null,
      hostId,
      source: "local_conversation_thread",
    }),
    canForkIntoWorktree = gitRoot != null && true,
    { resolvedConfigPath } = Oa({
      hostId,
      workspaceRoot: conversationCwd,
    }),
    closeIfIdle = () => {
      isSubmitting || onClose();
    },
    forkIntoLocal = async () => {
      setIsSubmitting(true);
      try {
        await onForkIntoLocal();
        onClose();
      } finally {
        setIsSubmitting(false);
      }
    },
    forkIntoWorktree = async () => {
      if (!canForkIntoWorktree || conversationCwd == null) {
        scope
          .get(toastSignal)
          .danger(intl.formatMessage(fo.forkThreadRequiresGitRepo));
        return;
      }
      setIsSubmitting(true);
      try {
        let pendingWorktreeId = pa({
          hostId,
          label: intl.formatMessage(fo.forkPendingWorktreeTitle),
          sourceWorkspaceRoot: conversationCwd,
          startingState: {
            type: "working-tree",
          },
          localEnvironmentConfigPath: resolvedConfigPath,
          launchMode: "fork-conversation",
          prompt: intl.formatMessage(fo.forkPendingWorktreePrompt),
          startConversationParamsInput: null,
          sourceConversationId: conversationId,
          sourceCollaborationMode: conversationLatestCollaborationMode,
          targetTurnId: turnId,
        });
        recordPendingWorktreeForkSourceState(scope, {
          pendingWorktreeId,
          sourceConversationId: conversationId,
          sourceWorkspaceRoot: conversationCwd,
        });
        onClose();
        navigate(`/worktree-init-v2/${pendingWorktreeId}`);
      } catch (error) {
        throw (
          logger.error("Error creating worktree fork from turn", {
            safe: {},
            sensitive: {
              error,
            },
          }),
          scope.get(toastSignal).danger(intl.formatMessage(fo.forkThreadError)),
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    };
  return (
    <ForkFromOlderTurnDialog
      canForkIntoWorktree={canForkIntoWorktree}
      isSubmitting={isSubmitting}
      isWorktreeThread={isWorktreeThread}
      open={true}
      onClose={closeIfIdle}
      onForkIntoLocal={() => {
        forkIntoLocal();
      }}
      onForkIntoWorktree={() => {
        forkIntoWorktree();
      }}
      showWorktreeOption={canForkIntoWorktree}
    />
  );
}
var olderTurnForkDialogReactRuntime,
  forkDialogControllerJsxRuntime,
  initForkFromOlderTurnDialogControllerChunk = once(() => {
    initScopeRuntime();
    initPathHelpers();
    olderTurnForkDialogReactRuntime = toEsModule(loadReactModule(), 1);
    initIntlRuntime();
    xr();
    initToastRuntime();
    Di();
    initAppScope();
    sl();
    initLoggerRuntime();
    _a();
    initOlderTurnForkDialogChunk();
    za();
    Sa();
    initLocalEnvironmentRecentActions();
    forkDialogControllerJsxRuntime = getJsxRuntime();
  });
var deepEqualModule,
  initDeepEqualModule = once(() => {
    deepEqualModule = toEsModule(loadIsEqualModule(), 1);
  });
async function renderLocalConversationMarkdownForTurns({
  cwd,
  isBackgroundSubagentsEnabled,
  projectlessOutputDirectory,
  title,
  visibleTurnEntries,
}) {
  let a = visibleTurnEntries.map(
    ({ preserveServerUserMessages, requests, turn }) =>
      lt(turn, requests, {
        isBackgroundSubagentsEnabled,
        preserveServerUserMessages,
      }),
  );
  if (a.length === 0) return null;
  let { renderConversationMarkdown } = await preloadDynamicImport(
    async () => {
      let { renderConversationMarkdown: _renderConversationMarkdown } =
        await import(
          "../boundaries/current-ref/conversation-markdown-producer"
        );
      return {
        renderConversationMarkdown: _renderConversationMarkdown,
      };
    },
    __vite__mapDeps([
      30, 1, 2, 3, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27,
    ]),
    import.meta.url,
  );
  return renderConversationMarkdown({
    cwd,
    projectlessOutputDirectory,
    title,
    turns: a,
  });
}
var initConversationMarkdownRenderer = once(() => {
  initConversationArtifactRuntime();
  initModulePreloadRuntime();
});
interface BackgroundAgentDisplayNameOptions {
  agentNickname?: string | null;
  conversationId: string;
}
function formatBackgroundAgentDisplayName({
  agentNickname,
  conversationId,
}: BackgroundAgentDisplayNameOptions): string {
  let displayName =
    agentNickname?.trim() || getFallbackBackgroundAgentHandle(conversationId);
  return displayName.startsWith("@") ? displayName.slice(1) : displayName;
}
var initThreadScrollState = once(() => {
  initAgentMentionMap();
});
var initLocalConversationSearchAdapterChunk = once(() => {
  nd();
});
function createLocalConversationSearchAdapter({
  contextId,
  getTurns,
  scrollAdapter,
}) {
  return {
    domain: "conversation",
    contextId,
    async search(searchRequest) {
      return searchConversationTurns(searchRequest, getTurns());
    },
    async ensureVisible(location, options) {
      if (
        location.domain !== "conversation" ||
        location.contextId !== contextId
      )
        return;
      let turnContainer = scrollAdapter.getTurnContainer(location.turnKey);
      if (turnContainer == null) {
        if (
          options?.signal?.aborted ||
          (options?.signal == null
            ? await scrollAdapter.scrollToTurn(location.turnKey)
            : await scrollAdapter.scrollToTurn(location.turnKey, {
                signal: options.signal,
              }),
          options?.signal?.aborted)
        )
          return;
        turnContainer = scrollAdapter.getTurnContainer(location.turnKey);
      }
      turnContainer != null &&
        (await Ba({
          container: turnContainer,
          matchId: vo(location),
          includeShadowRoots: false,
          signal: options?.signal,
        }));
    },
  };
}
function searchConversationTurns(searchRequest, searchableTurns) {
  let query = searchRequest.query.trim();
  if (query.length === 0)
    return {
      domain: searchRequest.domain,
      contextId: searchRequest.contextId,
      query,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  let matches = [],
    totalMatchCount = 0,
    matchOrdinal = 0,
    isCapped = false;
  for (let searchableTurn of searchableTurns)
    for (let unit of searchableTurn.units) {
      let unitText = unit.text;
      if (unitText.length === 0) continue;
      let {
        offsets,
        totalMatches,
        isCapped: matchSearchIsCapped,
      } = Na(unitText, query, MAX_CONVERSATION_SEARCH_MATCHES - matches.length);
      totalMatchCount += totalMatches;
      matchSearchIsCapped && (isCapped = true);
      for (let { start, end } of offsets) {
        matchOrdinal += 1;
        matches.push({
          id: `conversation:${searchableTurn.turnKey}:${unit.unitId}:${start}`,
          ordinal: matchOrdinal,
          location: {
            domain: "conversation",
            contextId: searchRequest.contextId,
            turnKey: searchableTurn.turnKey,
            unitId: unit.unitId,
            start,
            end,
          },
          snippet: Ua(unitText, start, end),
        });
      }
    }
  return {
    domain: searchRequest.domain,
    contextId: searchRequest.contextId,
    query,
    matches,
    totalMatches: totalMatchCount,
    isCapped,
  };
}
var MAX_CONVERSATION_SEARCH_MATCHES,
  initConversationSearchHelpers = once(() => {
    la();
    Ea();
    Aa();
    MAX_CONVERSATION_SEARCH_MATCHES = 250;
  });
function createLocalConversationSearchSource({
  getConversationState,
  getIsBackgroundSubagentsEnabled,
  routeContextId,
  scrollAdapter,
}) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () => {
      let conversationState = getConversationState();
      return conversationState == null
        ? []
        : conversationState.turns
            .map((item, index) =>
              isRenderableConversationTurn(item, [], {
                isBackgroundSubagentsEnabled: getIsBackgroundSubagentsEnabled(),
              })
                ? {
                    turnKey: getLocalConversationTurnSearchKey(
                      item.turnId,
                      index,
                    ),
                    units: extractConversationSearchUnits(
                      lt(item, [], {
                        isBackgroundSubagentsEnabled:
                          getIsBackgroundSubagentsEnabled(),
                      }).items,
                    ),
                  }
                : null,
            )
            .filter((item) => item != null);
    },
    scrollAdapter,
  });
}
function extractConversationSearchUnits(items) {
  let units = [],
    latestAssistantMessageIndex = findLastIndexModule.default(
      items,
      (item) => item.type === "assistant-message",
    );
  return (
    items.forEach((item, index) => {
      if (item.type === "user-message") {
        let messageText = item.message.trim();
        if (messageText.length === 0) return;
        units.push({
          unitId: `${index}:user`,
          text: messageText,
        });
        return;
      }
      if (
        item.type !== "assistant-message" ||
        index !== latestAssistantMessageIndex
      )
        return;
      let assistantText = normalizeMarkdownPlainText(item.content);
      assistantText.length !== 0 &&
        units.push({
          unitId: `${index}:assistant`,
          text: assistantText,
        });
    }),
    units
  );
}
var findLastIndexModule,
  initConversationSearchUnitExtractor = once(() => {
    findLastIndexModule = toEsModule(loadFindLastIndexModule(), 1);
    initConversationSearchHelpers();
    hi();
    initConversationArtifactRuntime();
  });
function buildLocalConversationVisibleTurnEntries({
  conversationRequests,
  mergeBerryDisplayTurnsForPIA = false,
  preserveServerUserMessages = false,
  conversationTurns,
  hasConversation,
  isBackgroundSubagentsEnabled,
  parentConversationTurns,
  subagentParentThreadId,
}) {
  if (conversationTurns.length === 0 && conversationRequests.length === 0)
    return EMPTY_VISIBLE_TURN_ENTRIES;
  let requestsByTurnId =
      groupConversationRequestsByTurnId(conversationRequests),
    visibleConversationTurns =
      hasConversation && subagentParentThreadId != null
        ? getConversationTurnsNotInParent({
            areTurnItemsEqual: deepEqualModule.default,
            conversation: {
              turns: conversationTurns,
            },
            parentConversation: {
              turns: parentConversationTurns,
            },
          })
        : conversationTurns,
    visibleTurnIds = new Set(
      visibleConversationTurns.flatMap((item) =>
        item.turnId == null ? [] : [item.turnId],
      ),
    ),
    visibleTurnsSet = new Set(visibleConversationTurns),
    physicalTurnEntries = createPhysicalTurnEntries(conversationTurns);
  mergeBerryDisplayTurnsForPIA &&
    (physicalTurnEntries =
      mergeBerryDisplayPhysicalTurnEntries(conversationTurns));
  let visibleTurnEntries = [],
    hasInheritedParentTurns =
      visibleConversationTurns.length < conversationTurns.length,
    hasUserMessage = false,
    latestVisibleTurnId = null;
  for (let conversationTurn of conversationTurns)
    !hasUserMessage &&
      conversationTurn.items.some(
        (item) =>
          (item.type === "userMessage" && true) ||
          item.type === "steeringUserMessage",
      ) &&
      (hasUserMessage = true);
  for (let physicalTurnEntry of physicalTurnEntries) {
    let { turn, turnId } = physicalTurnEntry,
      requests =
        physicalTurnEntry.physicalTurnIds.length > 0
          ? collectConversationRequestsForTurnIds(
              physicalTurnEntry.physicalTurnIds,
              requestsByTurnId,
              EMPTY_CONVERSATION_REQUESTS,
            )
          : EMPTY_CONVERSATION_REQUESTS;
    isRenderableConversationTurn(turn, requests, {
      isBackgroundSubagentsEnabled,
    }) &&
      ((turnId != null &&
        !physicalTurnEntry.physicalTurnIds.some((item) =>
          visibleTurnIds.has(item),
        )) ||
        (turnId == null && !visibleTurnsSet.has(turn)) ||
        (visibleTurnEntries.push({
          preserveServerUserMessages,
          requests,
          turn,
          turnId,
          turnSearchKey: getLocalConversationTurnSearchKey(
            turnId,
            physicalTurnEntry.turnIndex,
          ),
        }),
        (latestVisibleTurnId = turnId)));
  }
  return {
    conversationTurns,
    hasInheritedParentTurns,
    hasRenderableTurns: visibleTurnEntries.length > 0,
    hasUserMessage,
    latestVisibleTurnId,
    visibleTurnEntries,
  };
}
function mergeBerryDisplayPhysicalTurnEntries(conversationTurns) {
  let physicalTurnById = new Map(),
    displayGroupByControlTurnId = new Map(),
    controlTurnIdByDisplayTurnId = new Map();
  for (let [turnIndex, turn] of conversationTurns.entries()) {
    let turnId = turn.turnId;
    if (turnId == null) continue;
    let physicalTurnEntry = {
      turn,
      turnIndex,
    };
    physicalTurnById.set(turnId, physicalTurnEntry);
    let berryDisplayTurnId = parseBerryDisplayTurnId(turnId);
    if (berryDisplayTurnId == null) continue;
    let displayGroup = displayGroupByControlTurnId.get(
      berryDisplayTurnId.controlTurnId,
    );
    displayGroup ??
      ((displayGroup = {
        controlTurnId: berryDisplayTurnId.controlTurnId,
        displayTurns: [],
      }),
      displayGroupByControlTurnId.set(
        berryDisplayTurnId.controlTurnId,
        displayGroup,
      ));
    displayGroup.displayTurns.push({
      displayIndex: berryDisplayTurnId.displayIndex,
      ...physicalTurnEntry,
    });
    controlTurnIdByDisplayTurnId.set(turnId, berryDisplayTurnId.controlTurnId);
  }
  let emittedControlTurnIds = new Set(),
    physicalTurnEntries = [];
  for (let [turnIndex, turn] of conversationTurns.entries()) {
    let turnId = turn.turnId,
      controlTurnId =
        turnId == null
          ? null
          : (controlTurnIdByDisplayTurnId.get(turnId) ?? turnId),
      displayGroup =
        controlTurnId == null
          ? null
          : displayGroupByControlTurnId.get(controlTurnId);
    if (displayGroup != null) {
      if (emittedControlTurnIds.has(displayGroup.controlTurnId)) continue;
      emittedControlTurnIds.add(displayGroup.controlTurnId);
      physicalTurnEntries.push(
        createBerryDisplayTurnEntry(
          displayGroup,
          physicalTurnById.get(displayGroup.controlTurnId) ?? null,
        ),
      );
      continue;
    }
    physicalTurnEntries.push({
      physicalTurnIds: turnId == null ? [] : [turnId],
      turn,
      turnId,
      turnIndex,
    });
  }
  return physicalTurnEntries;
}
function createBerryDisplayTurnEntry(displayTurnGroup, controlTurnEntry) {
  let sortedDisplayTurns = [...displayTurnGroup.displayTurns].sort(
      (leftDisplayTurn, rightDisplayTurn) =>
        leftDisplayTurn.displayIndex - rightDisplayTurn.displayIndex,
    ),
    mergedTurnEntries = [
      ...(controlTurnEntry == null ? [] : [controlTurnEntry]),
      ...sortedDisplayTurns,
    ].sort(
      (leftTurnEntry, rightTurnEntry) =>
        leftTurnEntry.turnIndex - rightTurnEntry.turnIndex,
    ),
    mergedTurns = mergedTurnEntries.map(({ turn }) => turn),
    displayTurns = sortedDisplayTurns.map(({ turn }) => turn),
    baseTurn = controlTurnEntry?.turn ?? displayTurns[0];
  if (baseTurn == null)
    throw Error("Berry display turn group must contain a turn");
  return {
    physicalTurnIds: mergedTurns.flatMap((item) =>
      item.turnId == null ? [] : [item.turnId],
    ),
    turn: {
      params: baseTurn.params,
      turnId: displayTurnGroup.controlTurnId,
      turnStartedAtMs:
        controlTurnEntry?.turn.turnStartedAtMs ??
        getFirstDefinedTurnField(mergedTurns, "turnStartedAtMs"),
      durationMs:
        controlTurnEntry?.turn.durationMs ??
        getLastDefinedTurnField(mergedTurns, "durationMs"),
      firstTurnWorkItemStartedAtMs: getFirstDefinedTurnField(
        mergedTurns,
        "firstTurnWorkItemStartedAtMs",
      ),
      finalAssistantStartedAtMs: getLastDefinedTurnField(
        mergedTurns,
        "finalAssistantStartedAtMs",
      ),
      status: getMergedTurnStatus(mergedTurns),
      error: mergedTurns.find((item) => item.error != null)?.error ?? null,
      diff: getLastDefinedTurnField(mergedTurns, "diff"),
      interruptedCommandExecutionItemIds: mergedTurns.flatMap(
        (item) => item.interruptedCommandExecutionItemIds ?? [],
      ),
      hookRuns: mergedTurns.flatMap((item) => item.hookRuns ?? []),
      items: [
        ...(controlTurnEntry?.turn.items ?? []),
        ...displayTurns.flatMap((item) => item.items),
      ],
    },
    turnId: displayTurnGroup.controlTurnId,
    turnIndex: mergedTurnEntries[0]?.turnIndex ?? 0,
  };
}
function getMergedTurnStatus(turns) {
  let failedTurn = turns.find((item) => item.status === "failed");
  if (failedTurn != null) return failedTurn.status;
  let inProgressTurn = turns.find((item) => item.status === "inProgress");
  return inProgressTurn == null
    ? (turns.at(-1)?.status ?? "completed")
    : inProgressTurn.status;
}
function getFirstDefinedTurnField(turns, fieldName) {
  return turns.find((item) => item[fieldName] != null)?.[fieldName] ?? null;
}
function getLastDefinedTurnField(turns, fieldName) {
  return (
    findLastModule.default(turns, (turn) => turn[fieldName] != null)?.[
      fieldName
    ] ?? null
  );
}
var findLastModule,
  EMPTY_CONVERSATION_REQUESTS,
  EMPTY_CONVERSATION_TURNS,
  EMPTY_VISIBLE_TURN_ENTRIES,
  localConversationVisibleTurnEntriesSignal,
  initLocalConversationTurnSelectors = once(() => {
    findLastModule = toEsModule(loadFindLastModule(), 1);
    initScopeRuntime();
    initConversationStateSelectors();
    initAppScope();
    initStatsigGateSignals();
    initDeepEqualModule();
    initConversationArtifactRuntime();
    initConversationSearchUnitExtractor();
    EMPTY_CONVERSATION_REQUESTS = [];
    EMPTY_CONVERSATION_TURNS = [];
    EMPTY_VISIBLE_TURN_ENTRIES = {
      conversationTurns: EMPTY_CONVERSATION_TURNS,
      hasInheritedParentTurns: false,
      hasRenderableTurns: false,
      hasUserMessage: false,
      latestVisibleTurnId: null,
      visibleTurnEntries: [],
    };
    localConversationVisibleTurnEntriesSignal = createScopedSignalFamily(
      appScope,
      ({ conversationId, isBackgroundSubagentsEnabled }, { get }) => {
        let hasConversation =
            get(hasConversationSignal, conversationId) ?? false,
          conversationRequests =
            get(conversationRequestsSignal, conversationId) ??
            EMPTY_CONVERSATION_REQUESTS;
        get(modelProviderSignal, conversationId);
        let conversationResumeState =
            get(conversationResumeStateSignal, conversationId) ??
            "needs_resume",
          subagentParentThreadId = isBackgroundSubagentsEnabled
            ? (get(subagentParentThreadIdSignal, conversationId) ?? null)
            : null,
          isBerryDisplayMergeEnabled = get(featureGateSignal, "209459230"),
          berryDisplayConversationTurns = isBerryDisplayMergeEnabled
            ? get(berryDisplayConversationTurnsSignal, conversationId)
            : null,
          parentBerryDisplayConversationTurns = isBerryDisplayMergeEnabled
            ? subagentParentThreadId == null
              ? EMPTY_CONVERSATION_TURNS
              : get(berryDisplayConversationTurnsSignal, subagentParentThreadId)
            : null,
          shouldUseBerryDisplayTurns =
            berryDisplayConversationTurns != null &&
            parentBerryDisplayConversationTurns != null;
        return buildLocalConversationVisibleTurnEntries({
          conversationRequests,
          mergeBerryDisplayTurnsForPIA: false,
          preserveServerUserMessages: false,
          conversationResumeState,
          conversationTurns: shouldUseBerryDisplayTurns
            ? berryDisplayConversationTurns
            : (get(conversationTurnsSignal, conversationId) ??
              EMPTY_CONVERSATION_TURNS),
          hasConversation,
          isBackgroundSubagentsEnabled,
          parentConversationTurns: shouldUseBerryDisplayTurns
            ? parentBerryDisplayConversationTurns
            : (get(conversationTurnsSignal, subagentParentThreadId) ??
              EMPTY_CONVERSATION_TURNS),
          subagentParentThreadId,
        });
      },
    );
  }),
  threadScrollStateSignal,
  initThreadScrollStateSignal = once(() => {
    initScopeRuntime();
    initAppScope();
    threadScrollStateSignal = createScopedSignal(
      appScope,
      (_conversationId) => null,
    );
  });
function createLatestTurnScrollState({ followMode = "static" } = {}) {
  return {
    followMode,
  };
}
function reduceLatestTurnScrollState(scrollState, event) {
  switch (event.type) {
    case "latest_turn_follow_content_changed":
      return event.latestTurnPhase !== "prework" ||
        scrollState.followMode !== "prework_watch"
        ? scrollState
        : event.followContentOverflowPx > 0
          ? setLatestTurnFollowMode(scrollState, "prework_follow")
          : scrollState;
    case "latest_turn_phase_changed": {
      let nextScrollState = scrollState;
      return (
        event.previousLatestTurnPhase !== "prework" &&
          event.latestTurnPhase === "prework" &&
          (nextScrollState.followMode === "static" &&
            (nextScrollState = setLatestTurnFollowMode(
              nextScrollState,
              "prework_watch",
            )),
          nextScrollState.followMode === "user_follow" &&
            (nextScrollState = setLatestTurnFollowMode(
              nextScrollState,
              "prework_follow",
            ))),
        event.previousLatestTurnPhase === "prework" &&
          event.latestTurnPhase === "final_answer" &&
          (nextScrollState = setLatestTurnFollowMode(
            nextScrollState,
            nextScrollState.followMode === "prework_follow"
              ? "user_follow"
              : "static",
          )),
        event.previousLatestTurnPhase !== "idle" &&
          event.latestTurnPhase === "idle" &&
          nextScrollState.followMode !== "user_follow" &&
          (nextScrollState = setLatestTurnFollowMode(
            nextScrollState,
            "static",
          )),
        nextScrollState
      );
    }
    case "latest_turn_placed":
      return setLatestTurnFollowMode(scrollState, "static");
    case "latest_turn_removed":
      return setLatestTurnFollowMode(scrollState, "static");
    case "scroll_distance_changed":
      return event.distanceFromBottomPx <= 24
        ? scrollState
        : scrollState.followMode === "prework_follow"
          ? setLatestTurnFollowMode(scrollState, "prework_watch")
          : scrollState.followMode === "user_follow"
            ? setLatestTurnFollowMode(
                scrollState,
                event.latestTurnPhase === "prework"
                  ? "prework_watch"
                  : "static",
              )
            : scrollState;
    case "scroll_to_bottom":
      return setLatestTurnFollowMode(
        scrollState,
        event.latestTurnPhase === "prework" ? "prework_follow" : "user_follow",
      );
  }
}
function isPassiveLatestTurnFollowMode(followMode) {
  return followMode === "static" || followMode === "prework_watch";
}
function getLatestTurnPhase(turn) {
  if (turn.status !== "inProgress") return "idle";
  let sawCommentaryAgentMessage = false;
  for (let turnItem of turn.items)
    if (turnItem.type === "agentMessage") {
      if (turnItem.phase === "commentary") {
        sawCommentaryAgentMessage = true;
        continue;
      }
      return "final_answer";
    }
  return sawCommentaryAgentMessage || turn.firstTurnWorkItemStartedAtMs != null
    ? "prework"
    : turn.finalAssistantStartedAtMs == null
      ? "idle"
      : "final_answer";
}
function setLatestTurnFollowMode(scrollState, followMode) {
  return scrollState.followMode === followMode
    ? scrollState
    : {
        ...scrollState,
        followMode,
      };
}
var initLocalConversationTurnRowDependencies = once(() => {
  nd();
});
function LocalConversationTurnRow({ entry, latestTurnFollowContentRef }) {
  let {
    conversationId,
    cwd,
    hostId,
    isCollapsed,
    isMostRecentTurn,
    isReadOnly,
    totalTurnCount,
    turnNumber,
    isProjectlessConversation,
    modelProvider,
    projectlessOutputDirectory,
    onEditLastTurnMessage,
    onForkTurnMessage,
    completedThreadGoal,
    generatedImages,
    onSetCollapsedForTurn,
    parentThreadAttachmentSourceConversationId,
    preserveServerUserMessages,
    renderMcpApps,
    requests,
    resolvedApps,
    showInProgressFixedContent,
    turn,
    turnState,
    turnId,
    turnKey,
    turnSearchKey,
    isBackgroundSubagentsEnabled,
    transcriptBlock,
    includeTranscriptTurnExtras,
  } = entry;
  useScope(localConversationRouteScope);
  let handleCollapsedChange = useStableCallback((collapsed) => {
      turnId != null && onSetCollapsedForTurn?.(turnId, collapsed);
    }),
    onSetCollapsed =
      turnId == null || onSetCollapsedForTurn == null
        ? undefined
        : handleCollapsedChange,
    parentThreadAttachment = localConversationTurnRowReactRuntime.useMemo(
      () =>
        parentThreadAttachmentSourceConversationId == null
          ? undefined
          : {
              sourceConversationId: parentThreadAttachmentSourceConversationId,
            },
      [parentThreadAttachmentSourceConversationId],
    );
  return (
    useStableCallback(() => {}),
    localConversationTurnRowJsxRuntime.jsx(fs, {
      name: "LocalConversationTurn",
      resetKey: turnKey,
      fallback: (errorBoundary) => (
        <LocalConversationTurnErrorFallback
          onRetry={() => {
            errorBoundary.resetError();
          }}
        />
      ),
      children: (
        <Uc
          conversationId={conversationId}
          hostId={hostId}
          turnSearchKey={turnSearchKey}
          turn={turn}
          turnState={turnState}
          turnRequests={requests}
          preserveServerUserMessages={preserveServerUserMessages}
          isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
          cwd={cwd}
          isMostRecentTurn={isMostRecentTurn}
          isReadOnly={isReadOnly}
          totalTurnCount={totalTurnCount}
          turnNumber={turnNumber}
          isProjectlessConversation={isProjectlessConversation}
          modelProvider={modelProvider}
          projectlessOutputDirectory={projectlessOutputDirectory}
          parentThreadAttachment={parentThreadAttachment}
          resolvedApps={resolvedApps}
          onEditLastTurnMessage={onEditLastTurnMessage}
          onForkTurnMessage={onForkTurnMessage}
          completedThreadGoal={completedThreadGoal}
          generatedImages={generatedImages}
          isCollapsed={isCollapsed}
          onSetCollapsed={onSetCollapsed}
          renderMcpApps={renderMcpApps}
          showInProgressFixedContent={showInProgressFixedContent}
          deferOffscreenDiffRendering={true}
          transcriptBlock={transcriptBlock}
          includeTranscriptTurnExtras={includeTranscriptTurnExtras}
          latestTurnFollowContentRef={latestTurnFollowContentRef}
          onOpenAeonDetails={undefined}
        />
      ),
    })
  );
}
function LocalConversationTurnErrorFallback(props) {
  let { onRetry } = props,
    titleNode = (
      <div className="mb-2 font-medium text-token-text-primary">
        <FormattedMessage
          id="localConversation.turnRenderError.title"
          defaultMessage="This turn couldn't render"
          description="Error message shown when an individual conversation turn fails to render"
        />
      </div>
    );
  let retryLabel = (
    <FormattedMessage
      id="localConversation.turnRenderError.retry"
      defaultMessage="Try again"
      description="Button label to retry rendering a failed conversation turn"
    />
  );
  return (
    <div className="rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary">
      {titleNode}
      {localConversationTurnRowJsxRuntime.jsx(Button, {
        color: "secondary",
        size: "default",
        onClick: onRetry,
        children: retryLabel,
      })}
    </div>
  );
}
var localConversationTurnRowModule,
  localConversationTurnRowReactRuntime,
  localConversationTurnRowJsxRuntime,
  initLocalConversationTurnRowChunk = once(() => {
    localConversationTurnRowModule = getChunkModuleExports();
    initScopeRuntime();
    localConversationTurnRowReactRuntime = toEsModule(loadReactModule(), 1);
    initIntlRuntime();
    initButtonComponentPrimitives();
    Lo();
    initRouteScope();
    initKeyboardShortcutLabel();
    Dc();
    localConversationTurnRowJsxRuntime = getJsxRuntime();
  });
function VirtualizedTurnList({
  entries,
  RowComponent,
  onApiChange,
  onVisibleContentReady,
  className,
  gapPx = defaultVirtualTurnGapPx,
  getBottomScrollPaddingPx,
  onLatestTurnHeightChange,
  preserveMeasuredTurnViewport = false,
  getPendingRestoreScrollDistanceFromBottomPx,
  restoreScrollDistanceFromBottomPx,
  initialRestoreState,
  onRestoreStateChange,
  onViewportChange,
  latestTurnSynchronousMeasurementKey,
}) {
  let scrollController = ad(),
    windowZoom = useWindowZoom(),
    [measuredHeightsByKey, setMeasuredHeightsByKey] =
      virtualizedTurnListReactRuntime.useState(
        initialRestoreState?.turnHeightsByKey ?? emptyTurnHeightsByKey,
      ),
    [rootElement, setRootElement] =
      virtualizedTurnListReactRuntime.useState(null),
    [viewportState, setViewportState] =
      virtualizedTurnListReactRuntime.useState(() => {
        let bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
          getBottomScrollPaddingPx,
        );
        return createInitialVirtualizedTurnListState(
          entries,
          subtractBottomScrollPaddingPx(
            scrollController.getLastScrollDistanceFromBottomPx(),
            bottomScrollPaddingPx,
          ),
          gapPx,
          initialRestoreState,
        );
      }),
    [pendingScrollRequest, setPendingScrollRequest] =
      virtualizedTurnListReactRuntime.useState(null),
    pendingScrollRequestRef = virtualizedTurnListReactRuntime.useRef(null),
    measuredHeightsByKeyRef =
      virtualizedTurnListReactRuntime.useRef(measuredHeightsByKey),
    viewportStateRef = virtualizedTurnListReactRuntime.useRef(viewportState),
    observedElementMetadataRef = virtualizedTurnListReactRuntime.useRef(
      new Map(),
    ),
    turnElementByKeyRef = virtualizedTurnListReactRuntime.useRef(new Map()),
    pendingInitialMeasureElementsRef = virtualizedTurnListReactRuntime.useRef(
      new Map(),
    ),
    latestTurnFollowContentHeightsRef = virtualizedTurnListReactRuntime.useRef(
      new Map(),
    ),
    pendingResizeMeasurementsRef = virtualizedTurnListReactRuntime.useRef(
      new Map(),
    ),
    pendingMeasurementCommitRef = virtualizedTurnListReactRuntime.useRef(null),
    resizeFrameRef = virtualizedTurnListReactRuntime.useRef(null),
    resizeObserverRef = virtualizedTurnListReactRuntime.useRef(null),
    visibleContentReadyRef = virtualizedTurnListReactRuntime.useRef(false),
    virtualLayout = virtualizedTurnListReactRuntime.useMemo(
      () =>
        Xu({
          entries,
          gapPx,
          measuredHeightsByKey: measuredHeightsByKey,
        }),
      [entries, gapPx, measuredHeightsByKey],
    ),
    virtualLayoutRef = virtualizedTurnListReactRuntime.useRef(virtualLayout),
    previousLayoutRef = virtualizedTurnListReactRuntime.useRef(null),
    renderedRange = viewportState.renderedRange;
  if (pendingScrollRequest != null) {
    let pendingScrollDistanceFromBottomPx = Yu({
      layout: virtualLayout,
      turnKey: pendingScrollRequest.turnKey,
      viewportHeightPx: viewportState.viewportHeightPx,
    });
    pendingScrollDistanceFromBottomPx != null &&
      (renderedRange = Ku({
        distanceFromBottomPx: pendingScrollDistanceFromBottomPx,
        layout: virtualLayout,
        overscanCount: virtualTurnOverscanCount,
        viewportHeightPx: viewportState.viewportHeightPx,
      }));
  } else if (
    !areTurnKeyArraysEqual(viewportState.turnKeys, virtualLayout.turnKeys)
  ) {
    let anchorTurnKey =
      viewportState.turnKeys[viewportState.renderedRange.startIndex];
    anchorTurnKey != null &&
      (renderedRange =
        Gu({
          anchorKey: anchorTurnKey,
          layout: virtualLayout,
          previousRange: renderedRange,
        }) ?? renderedRange);
  }
  let restoreScrollDistanceFromBottom = useStableCallback(() => {
      pendingMeasurementCommitRef.current ??
        restoreScrollDistanceFromBottomPx?.();
    }),
    applyPendingMeasurementCommit = useStableCallback((pendingCommit) => {
      pendingCommit.latestTurnHeightChange != null &&
        onLatestTurnHeightChange?.(pendingCommit.latestTurnHeightChange);
      pendingCommit.restoreScrollDistanceFromBottom
        ? restoreScrollDistanceFromBottom()
        : pendingCommit.scrollDistanceFromBottomPx != null &&
          scrollController.scrollToDistanceFromBottomPx(
            pendingCommit.scrollDistanceFromBottomPx,
            "instant",
          );
    }),
    syncViewportState = useStableCallback(
      (distanceFromBottomPx, viewportHeightPx) => {
        if (pendingMeasurementCommitRef.current != null) return;
        let nextViewportState = updateVirtualizedTurnListViewportState({
          current: viewportStateRef.current,
          distanceFromBottomPx: distanceFromBottomPx,
          layout: virtualLayout,
          viewportHeightPx: viewportHeightPx,
        });
        nextViewportState !== viewportStateRef.current &&
          ((viewportStateRef.current = nextViewportState),
          setViewportState(nextViewportState));
      },
    ),
    notifyViewportChange = useStableCallback(
      (
        distanceFromBottomPx,
        viewportHeightPx,
        previousDistanceFromBottomPx,
      ) => {
        if (onViewportChange == null) return;
        let viewportEndPx = Math.max(
            0,
            Math.min(
              virtualLayout.totalHeightPx,
              virtualLayout.totalHeightPx - distanceFromBottomPx,
            ),
          ),
          viewportStartPx = Math.max(0, viewportEndPx - viewportHeightPx),
          previousViewportEndPx =
            previousDistanceFromBottomPx == null
              ? viewportEndPx
              : Math.max(
                  0,
                  Math.min(
                    virtualLayout.totalHeightPx,
                    virtualLayout.totalHeightPx - previousDistanceFromBottomPx,
                  ),
                ),
          previousViewportStartPx = Math.max(
            0,
            previousViewportEndPx - viewportHeightPx,
          );
        onViewportChange({
          target:
            previousDistanceFromBottomPx == null
              ? null
              : viewportStartPx < previousViewportStartPx
                ? {
                    originPx: previousViewportStartPx,
                    targetPx: viewportStartPx,
                  }
                : viewportEndPx > previousViewportEndPx
                  ? {
                      originPx: previousViewportEndPx,
                      targetPx: viewportEndPx,
                    }
                  : null,
          viewportEndPx: viewportEndPx,
          viewportStartPx: viewportStartPx,
        });
      },
    ),
    finishPendingScrollRequest = useStableCallback((request) => {
      queueMicrotask(() => {
        pendingScrollRequestRef.current === request &&
          (request.complete(), (pendingScrollRequestRef.current = null));
        setPendingScrollRequest((currentRequest) =>
          currentRequest === request ? null : currentRequest,
        );
      });
    }),
    scrollToKey = useStableCallback(
      (turnKey, getTargetElement) => (
        pendingScrollRequestRef.current?.complete(),
        new Promise((complete) => {
          let request = {
            complete: complete,
            getTargetElement: getTargetElement,
            turnKey: turnKey,
          };
          pendingScrollRequestRef.current = request;
          setPendingScrollRequest(request);
        })
      ),
    ),
    publishLatestTurnFollowContentHeight = useStableCallback(() => {
      let followContentHeightPx = 0,
        lastFollowContentElement = null;
      for (let [
        followContentElement,
        heightPx,
      ] of latestTurnFollowContentHeightsRef.current) {
        followContentHeightPx += heightPx;
        (lastFollowContentElement == null ||
          lastFollowContentElement.compareDocumentPosition(
            followContentElement,
          ) === Node.DOCUMENT_POSITION_FOLLOWING) &&
          (lastFollowContentElement = followContentElement);
      }
      lastFollowContentElement != null &&
        onLatestTurnHeightChange?.({
          heightDeltaPx: null,
          heightPx: null,
          bottomViewportOverflowPx: measureTurnBottomViewportOverflow({
            scrollElement: scrollController.getScrollElement(),
            turnElement: lastFollowContentElement,
            windowZoom: windowZoom,
          }),
          turnElement: lastFollowContentElement,
          followContentHeightPx,
        });
    }),
    applyMeasuredTurnHeights = useStableCallback(
      (measurementsByTurnKey, flushSync = true) => {
        let pendingCommit = pendingMeasurementCommitRef.current,
          currentHeightsByKey = measuredHeightsByKeyRef.current,
          nextHeightsByKey = currentHeightsByKey,
          latestTurnHeightDeltaPx = 0,
          didLatestTurnHeightChange = false,
          latestTurnElement = null,
          totalLayoutHeightDeltaPx = 0,
          preservedDistanceDeltaPx = 0,
          rawDistanceFromBottomPx =
            scrollController.getLastScrollDistanceFromBottomPx(),
          bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
            getBottomScrollPaddingPx,
          ),
          paddedDistanceFromBottomPx = subtractBottomScrollPaddingPx(
            rawDistanceFromBottomPx,
            bottomScrollPaddingPx,
          ),
          pendingRestoreDistanceFromBottomPx = preserveMeasuredTurnViewport
            ? null
            : (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null),
          viewportDistanceFromBottomPx =
            pendingCommit == null
              ? paddedDistanceFromBottomPx
              : viewportStateRef.current.distanceFromBottomPx;
        for (let [
          turnKey,
          { element, firstHeightPx, heightPx },
        ] of measurementsByTurnKey) {
          let currentElement = turnElementByKeyRef.current.get(turnKey);
          if (currentElement !== element) continue;
          let measuredHeightPx = Math.max(1, heightPx),
            previousHeightPx = currentHeightsByKey[turnKey];
          if (previousHeightPx === measuredHeightPx) continue;
          nextHeightsByKey === currentHeightsByKey &&
            (nextHeightsByKey = {
              ...currentHeightsByKey,
            });
          nextHeightsByKey[turnKey] = measuredHeightPx;
          let heightDeltaPx =
              measuredHeightPx -
              (previousHeightPx ?? Math.max(1, firstHeightPx)),
            turnIndex = virtualLayout.turnIndexByKey.get(turnKey);
          if (turnIndex == null) continue;
          let isLatestTurn = turnIndex === virtualLayout.turnKeys.length - 1;
          isLatestTurn &&
            ((didLatestTurnHeightChange = true),
            (latestTurnHeightDeltaPx += heightDeltaPx),
            (latestTurnElement = currentElement));
          let layoutHeightDeltaPx =
            measuredHeightPx -
            (virtualLayout.heightsPx[turnIndex] ?? measuredHeightPx);
          totalLayoutHeightDeltaPx += layoutHeightDeltaPx;
          let turnBottomOffsetPx =
            virtualLayout.bottomOffsetsPx[turnIndex] ?? 0;
          layoutHeightDeltaPx !== 0 &&
            turnBottomOffsetPx <= viewportDistanceFromBottomPx &&
            (preserveMeasuredTurnViewport ||
              (getPendingRestoreScrollDistanceFromBottomPx != null &&
                !isLatestTurn)) &&
            (preservedDistanceDeltaPx += layoutHeightDeltaPx);
        }
        if (nextHeightsByKey === currentHeightsByKey) return false;
        let isAtBottom =
            preserveMeasuredTurnViewport &&
            isAtBottomAfterPadding(
              rawDistanceFromBottomPx,
              bottomScrollPaddingPx,
            ),
          shouldRestoreScrollDistance =
            pendingCommit?.restoreScrollDistanceFromBottom ||
            pendingRestoreDistanceFromBottomPx != null,
          nextScrollDistanceFromBottomPx = null;
        shouldRestoreScrollDistance ||
          (nextScrollDistanceFromBottomPx = isAtBottom
            ? 0
            : preservedDistanceDeltaPx === 0
              ? (pendingCommit?.scrollDistanceFromBottomPx ?? null)
              : (pendingCommit?.scrollDistanceFromBottomPx ??
                  rawDistanceFromBottomPx) + preservedDistanceDeltaPx);
        let nextViewportDistanceFromBottomPx =
          viewportStateRef.current.distanceFromBottomPx;
        shouldRestoreScrollDistance
          ? (nextViewportDistanceFromBottomPx =
              pendingRestoreDistanceFromBottomPx ??
              nextViewportDistanceFromBottomPx)
          : nextScrollDistanceFromBottomPx != null &&
            (nextViewportDistanceFromBottomPx = subtractBottomScrollPaddingPx(
              nextScrollDistanceFromBottomPx,
              bottomScrollPaddingPx,
            ));
        let nextVirtualLayout = Xu({
          entries,
          gapPx,
          measuredHeightsByKey: nextHeightsByKey,
        });
        previousLayoutRef.current ??= virtualLayout;
        let nextViewportState = updateVirtualizedTurnListViewportState({
            current: viewportStateRef.current,
            distanceFromBottomPx: nextViewportDistanceFromBottomPx,
            layout: nextVirtualLayout,
            viewportHeightPx: viewportStateRef.current.viewportHeightPx,
          }),
          pendingLatestTurnHeightChange = pendingCommit?.latestTurnHeightChange,
          measuredLatestTurnElement =
            latestTurnElement ??
            pendingLatestTurnHeightChange?.turnElement ??
            null,
          measurementCommit = {
            latestTurnHeightChange:
              didLatestTurnHeightChange || pendingLatestTurnHeightChange != null
                ? {
                    heightDeltaPx:
                      (pendingLatestTurnHeightChange?.heightDeltaPx ?? 0) +
                      latestTurnHeightDeltaPx,
                    heightPx: nextVirtualLayout.heightsPx.at(-1) ?? null,
                    bottomViewportOverflowPx: measureTurnBottomViewportOverflow(
                      {
                        scrollElement: scrollController.getScrollElement(),
                        turnElement: measuredLatestTurnElement,
                        windowZoom: windowZoom,
                      },
                    ),
                    turnElement: measuredLatestTurnElement,
                    followContentHeightPx: null,
                  }
                : null,
            restoreScrollDistanceFromBottom: shouldRestoreScrollDistance,
            scrollDistanceFromBottomPx: nextScrollDistanceFromBottomPx,
            turnHeightsByKey: nextHeightsByKey,
          },
          commitMeasuredHeights = () => {
            measuredHeightsByKeyRef.current = nextHeightsByKey;
            setMeasuredHeightsByKey(nextHeightsByKey);
            nextViewportState !== viewportStateRef.current &&
              ((viewportStateRef.current = nextViewportState),
              setViewportState(nextViewportState));
          };
        return (
          (pendingMeasurementCommitRef.current = measurementCommit),
          preserveMeasuredTurnViewport &&
            totalLayoutHeightDeltaPx !== 0 &&
            preservedDistanceDeltaPx === 0 &&
            !isAtBottom &&
            !shouldRestoreScrollDistance &&
            scrollController.preserveScrollPositionForNextLayout(),
          flushSync
            ? reactDomModule.flushSync(commitMeasuredHeights)
            : commitMeasuredHeights(),
          true
        );
      },
    ),
    getResizeObserver = useStableCallback(() => {
      if (resizeObserverRef.current != null) return resizeObserverRef.current;
      let didLatestFollowContentResize = false,
        resizeObserver = new ResizeObserver((resizeEntries) => {
          let pendingMeasurementsByTurnKey =
            pendingResizeMeasurementsRef.current;
          for (let resizeEntry of resizeEntries) {
            let metadata = observedElementMetadataRef.current.get(
              resizeEntry.target,
            );
            if (metadata == null) continue;
            let { height } = _l(resizeEntry);
            switch (metadata.kind) {
              case "turn": {
                let pendingTurnMeasurement = pendingMeasurementsByTurnKey.get(
                  metadata.turnKey,
                );
                pendingTurnMeasurement == null ||
                pendingTurnMeasurement.element !== resizeEntry.target
                  ? pendingMeasurementsByTurnKey.set(metadata.turnKey, {
                      element: resizeEntry.target,
                      firstHeightPx: height,
                      heightPx: height,
                    })
                  : (pendingTurnMeasurement.heightPx = height);
                break;
              }
              case "latest-turn-follow-content":
                latestTurnFollowContentHeightsRef.current.set(
                  metadata.element,
                  height,
                );
                didLatestFollowContentResize = true;
                break;
            }
          }
          resizeFrameRef.current ??= window.requestAnimationFrame(() => {
            resizeFrameRef.current = null;
            let measurementsByTurnKey = pendingResizeMeasurementsRef.current;
            pendingResizeMeasurementsRef.current = new Map();
            let didFollowContentResize = didLatestFollowContentResize;
            didLatestFollowContentResize = false;
            applyMeasuredTurnHeights(measurementsByTurnKey);
            didFollowContentResize && publishLatestTurnFollowContentHeight();
          });
        });
      return ((resizeObserverRef.current = resizeObserver), resizeObserver);
    }),
    observeTurnElement = useStableCallback((turnKey, element) => {
      if (element == null) return;
      observedElementMetadataRef.current.set(element, {
        kind: "turn",
        turnKey: turnKey,
      });
      turnElementByKeyRef.current.set(turnKey, element);
      pendingInitialMeasureElementsRef.current.set(turnKey, element);
      let resizeObserver = getResizeObserver();
      return (
        resizeObserver.observe(element),
        () => {
          resizeObserver.unobserve(element);
          observedElementMetadataRef.current.delete(element);
          pendingInitialMeasureElementsRef.current.get(turnKey) === element &&
            pendingInitialMeasureElementsRef.current.delete(turnKey);
          turnElementByKeyRef.current.get(turnKey) === element &&
            turnElementByKeyRef.current.delete(turnKey);
        }
      );
    }),
    measureLatestTurnHeight = useStableCallback(() => {
      let latestTurnKey = entries.at(-1)?.turnKey;
      if (latestTurnKey == null) return;
      let latestTurnElement = turnElementByKeyRef.current.get(latestTurnKey);
      if (latestTurnElement == null) return;
      let latestTurnHeightPx = latestTurnElement.offsetHeight;
      latestTurnHeightPx <= 0 ||
        applyMeasuredTurnHeights(
          new Map([
            [
              latestTurnKey,
              {
                element: latestTurnElement,
                firstHeightPx: latestTurnHeightPx,
                heightPx: latestTurnHeightPx,
              },
            ],
          ]),
          false,
        );
    }),
    observeLatestTurnFollowContent = useStableCallback((element) => {
      if (element == null) return;
      observedElementMetadataRef.current.set(element, {
        element: element,
        kind: "latest-turn-follow-content",
      });
      latestTurnFollowContentHeightsRef.current.set(element, 0);
      let resizeObserver = getResizeObserver();
      return (
        resizeObserver.observe(element),
        () => {
          resizeObserver.unobserve(element);
          observedElementMetadataRef.current.delete(element);
          latestTurnFollowContentHeightsRef.current.delete(element);
        }
      );
    });
  return (
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      let pendingInitialElements = pendingInitialMeasureElementsRef.current;
      if (pendingInitialElements.size === 0) return;
      pendingInitialMeasureElementsRef.current = new Map();
      let measurementsByTurnKey = new Map();
      for (let [turnKey, element] of pendingInitialElements) {
        if (turnElementByKeyRef.current.get(turnKey) !== element) continue;
        let heightPx = element.offsetHeight;
        heightPx > 0 &&
          measurementsByTurnKey.set(turnKey, {
            element: element,
            firstHeightPx: heightPx,
            heightPx: heightPx,
          });
      }
      if (
        measurementsByTurnKey.size > 0 &&
        applyMeasuredTurnHeights(measurementsByTurnKey, false)
      )
        for (let [turnKey, element] of pendingInitialElements)
          turnElementByKeyRef.current.get(turnKey) === element &&
            pendingInitialMeasureElementsRef.current.set(turnKey, element);
    }),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      latestTurnSynchronousMeasurementKey != null && measureLatestTurnHeight();
    }, [latestTurnSynchronousMeasurementKey, measureLatestTurnHeight]),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      let pendingCommit = pendingMeasurementCommitRef.current;
      pendingCommit == null ||
        pendingCommit.turnHeightsByKey !== measuredHeightsByKey ||
        ((pendingMeasurementCommitRef.current = null),
        applyPendingMeasurementCommit(pendingCommit));
    }, [applyPendingMeasurementCommit, measuredHeightsByKey]),
    virtualizedTurnListReactRuntime.useEffect(() => {
      if (onApiChange != null)
        return (
          onApiChange({
            scrollToKey: scrollToKey,
          }),
          () => {
            onApiChange(null);
          }
        );
    }, [onApiChange, scrollToKey]),
    virtualizedTurnListReactRuntime.useEffect(() => {
      if (
        onVisibleContentReady == null ||
        visibleContentReadyRef.current ||
        rootElement == null ||
        (entries.length > 0 && turnElementByKeyRef.current.size === 0)
      )
        return;
      let secondFrameId = null,
        firstFrameId = window.requestAnimationFrame(() => {
          secondFrameId = window.requestAnimationFrame(() => {
            visibleContentReadyRef.current = true;
            restoreScrollDistanceFromBottom();
            onVisibleContentReady();
          });
        });
      return () => {
        window.cancelAnimationFrame(firstFrameId);
        secondFrameId != null && window.cancelAnimationFrame(secondFrameId);
      };
    }, [
      entries.length,
      onVisibleContentReady,
      restoreScrollDistanceFromBottom,
      rootElement,
    ]),
    virtualizedTurnListReactRuntime.useEffect(() => {
      let observedMetadata = observedElementMetadataRef.current,
        turnElements = turnElementByKeyRef.current,
        followContentHeights = latestTurnFollowContentHeightsRef.current;
      return () => {
        resizeObserverRef.current?.disconnect();
        resizeObserverRef.current = null;
        resizeFrameRef.current != null &&
          (window.cancelAnimationFrame(resizeFrameRef.current),
          (resizeFrameRef.current = null));
        observedMetadata.clear();
        turnElements.clear();
        pendingInitialMeasureElementsRef.current.clear();
        followContentHeights.clear();
        pendingMeasurementCommitRef.current = null;
        pendingScrollRequestRef.current?.complete();
        pendingScrollRequestRef.current = null;
      };
    }, []),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      if (onRestoreStateChange != null)
        return () => {
          onRestoreStateChange(
            createVirtualizedTurnListRestoreState(
              measuredHeightsByKeyRef.current,
              viewportStateRef.current.turnKeys,
              viewportStateRef.current.renderedRange,
            ),
          );
        };
    }, [onRestoreStateChange]),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      let scrollElement = scrollController.getScrollElement();
      if (scrollElement == null) return;
      let getViewportHeightPx = () =>
          scrollElement.clientHeight ||
          viewportStateRef.current.viewportHeightPx ||
          defaultVirtualViewportHeightPx,
        removeScrollListener = scrollController.addScrollListener(
          (distanceFromBottomPx) => {
            syncViewportState(
              subtractBottomScrollPaddingPx(
                distanceFromBottomPx,
                getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
              ),
              getViewportHeightPx(),
            );
          },
        ),
        removeUserScrollListener = scrollController.addUserScrollListener(
          (distanceFromBottomPx, previousDistanceFromBottomPx) => {
            notifyViewportChange(
              subtractBottomScrollPaddingPx(
                distanceFromBottomPx,
                getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
              ),
              getViewportHeightPx(),
              previousDistanceFromBottomPx == null
                ? undefined
                : subtractBottomScrollPaddingPx(
                    previousDistanceFromBottomPx,
                    getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
                  ),
            );
          },
        ),
        resizeObserver = new ResizeObserver((resizeEntries) => {
          let resizeEntry = resizeEntries[0];
          if (resizeEntry == null) return;
          let { height } = _l(resizeEntry);
          syncViewportState(
            viewportStateRef.current.distanceFromBottomPx,
            height,
          );
          restoreScrollDistanceFromBottom();
        });
      return (
        resizeObserver.observe(scrollElement),
        () => {
          removeScrollListener();
          removeUserScrollListener();
          resizeObserver.disconnect();
        }
      );
    }, [
      getBottomScrollPaddingPx,
      notifyViewportChange,
      restoreScrollDistanceFromBottom,
      scrollController,
      syncViewportState,
    ]),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      if (pendingScrollRequest == null) return;
      let scrollElement = scrollController.getScrollElement();
      if (scrollElement == null) return;
      let pendingMeasurementsByTurnKey = pendingResizeMeasurementsRef.current,
        measurementsByTurnKey = new Map();
      for (let [turnKey, element] of turnElementByKeyRef.current) {
        let heightPx = element.offsetHeight;
        if (heightPx > 0) {
          let pendingMeasurement = pendingMeasurementsByTurnKey.get(turnKey);
          measurementsByTurnKey.set(turnKey, {
            element: element,
            firstHeightPx:
              pendingMeasurement?.element === element
                ? pendingMeasurement.firstHeightPx
                : heightPx,
            heightPx: heightPx,
          });
        }
      }
      if (
        (pendingMeasurementsByTurnKey.clear(),
        applyMeasuredTurnHeights(measurementsByTurnKey, false) ||
          pendingMeasurementCommitRef.current != null)
      )
        return;
      let turnElement = turnElementByKeyRef.current.get(
          pendingScrollRequest.turnKey,
        ),
        targetElement =
          turnElement == null
            ? null
            : (pendingScrollRequest.getTargetElement?.(turnElement) ??
              turnElement),
        targetDistanceFromBottomPx =
          turnElement == null || targetElement == null
            ? Yu({
                layout: virtualLayout,
                turnKey: pendingScrollRequest.turnKey,
                viewportHeightPx: scrollElement.clientHeight,
              })
            : getDistanceFromBottomForTargetElement({
                layout: virtualLayout,
                targetElement: targetElement,
                turnElement: turnElement,
                turnKey: pendingScrollRequest.turnKey,
                viewportHeightPx: scrollElement.clientHeight,
                windowZoom: windowZoom,
              });
      if (targetDistanceFromBottomPx == null) {
        finishPendingScrollRequest(pendingScrollRequest);
        return;
      }
      scrollController.scrollToDistanceFromBottomPx(
        targetDistanceFromBottomPx +
          getBottomScrollPaddingPxValue(getBottomScrollPaddingPx),
        "instant",
      );
      syncViewportState(targetDistanceFromBottomPx, scrollElement.clientHeight);
      finishPendingScrollRequest(pendingScrollRequest);
    }, [
      applyMeasuredTurnHeights,
      virtualLayout,
      pendingScrollRequest,
      scrollController,
      finishPendingScrollRequest,
      getBottomScrollPaddingPx,
      syncViewportState,
      windowZoom,
    ]),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      if (pendingMeasurementCommitRef.current != null) return;
      let previousVirtualLayout = virtualLayoutRef.current,
        nextVirtualLayout = previousLayoutRef.current ?? virtualLayout;
      if (
        ((previousLayoutRef.current = null),
        (virtualLayoutRef.current = virtualLayout),
        !preserveMeasuredTurnViewport ||
          pendingScrollRequest != null ||
          previousVirtualLayout === nextVirtualLayout)
      )
        return;
      let bottomScrollPaddingPx = getBottomScrollPaddingPxValue(
          getBottomScrollPaddingPx,
        ),
        rawDistanceFromBottomPx =
          scrollController.getLastScrollDistanceFromBottomPx(),
        distanceFromBottomPx = subtractBottomScrollPaddingPx(
          rawDistanceFromBottomPx,
          bottomScrollPaddingPx,
        );
      if (
        (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null) != null ||
        isAtBottomAfterPadding(rawDistanceFromBottomPx, bottomScrollPaddingPx)
      )
        return;
      let anchorKey = findMeasuredAnchorKeyForViewportPreservation({
        distanceFromBottomPx: distanceFromBottomPx,
        layout: previousVirtualLayout,
        measuredHeightsByKey: measuredHeightsByKeyRef.current,
        nextLayout: nextVirtualLayout,
        viewportHeightPx: viewportStateRef.current.viewportHeightPx,
      });
      if (anchorKey == null) return;
      let adjustedDistanceFromBottomPx = qu({
        anchorKey: anchorKey,
        distanceFromBottomPx: distanceFromBottomPx,
        nextLayout: nextVirtualLayout,
        previousLayout: previousVirtualLayout,
      });
      adjustedDistanceFromBottomPx == null ||
        adjustedDistanceFromBottomPx === distanceFromBottomPx ||
        (syncViewportState(
          adjustedDistanceFromBottomPx,
          viewportStateRef.current.viewportHeightPx,
        ),
        scrollController.scrollToDistanceFromBottomPx(
          adjustedDistanceFromBottomPx + bottomScrollPaddingPx,
          "instant",
        ));
    }, [
      getBottomScrollPaddingPx,
      getPendingRestoreScrollDistanceFromBottomPx,
      virtualLayout,
      pendingScrollRequest,
      preserveMeasuredTurnViewport,
      scrollController,
      syncViewportState,
    ]),
    virtualizedTurnListReactRuntime.useLayoutEffect(() => {
      pendingScrollRequest ??
        (syncViewportState(
          viewportStateRef.current.distanceFromBottomPx,
          viewportStateRef.current.viewportHeightPx,
        ),
        restoreScrollDistanceFromBottom());
    }, [
      entries.length,
      pendingScrollRequest,
      restoreScrollDistanceFromBottom,
      syncViewportState,
    ]),
    (
      <div
        ref={setRootElement}
        className={classNames("relative shrink-0", className)}
        style={{
          height: `${virtualLayout.totalHeightPx}px`,
        }}
      >
        <div
          className="flex flex-col"
          style={{
            gap: `${gapPx}px`,
            marginTop: `${virtualLayout.topOffsetsPx[renderedRange.startIndex] ?? 0}px`,
          }}
        >
          {entries
            .slice(renderedRange.startIndex, renderedRange.endIndex)
            .map((item, index) => {
              let itemIndex = renderedRange.startIndex + index;
              return virtualizedTurnListJsxRuntime.jsx(
                MemoizedVirtualizedTurnItem,
                {
                  entry: item,
                  latestTurnFollowContentRef:
                    itemIndex === entries.length - 1 &&
                    onLatestTurnHeightChange != null
                      ? observeLatestTurnFollowContent
                      : undefined,
                  RowComponent,
                  constrainedHeightPx:
                    itemIndex !== entries.length - 1 &&
                    pendingScrollRequest?.turnKey !== item.turnKey &&
                    measuredHeightsByKey[item.turnKey] == null
                      ? virtualLayout.heightsPx[itemIndex]
                      : undefined,
                  observeTurnElement: observeTurnElement,
                },
                item.turnKey,
              );
            })}
        </div>
      </div>
    )
  );
}
function VirtualizedTurnItem(props) {
  let {
      entry,
      latestTurnFollowContentRef,
      RowComponent,
      constrainedHeightPx,
      observeTurnElement,
    } = props,
    { turnKey } = entry,
    setObservedElement = (element) => observeTurnElement(turnKey, element);
  let observedElementRef = useStableCallback(setObservedElement),
    constrainedStyle =
      constrainedHeightPx == null
        ? undefined
        : {
            height: constrainedHeightPx,
            overflow: "hidden",
          };
  let rowNode = (
    <RowComponent
      entry={entry}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
  let observedRowNode = (
    <div
      ref={observedElementRef}
      className="[&_[data-virtualized-turn-content]]:[content-visibility:visible]"
      data-turn-key={turnKey}
    >
      {rowNode}
    </div>
  );
  return <div style={constrainedStyle}>{observedRowNode}</div>;
}
function createInitialVirtualizedTurnListState(
  entries,
  distanceFromBottomPx,
  gapPx,
  initialRestoreState,
) {
  let layout = Xu({
      entries,
      gapPx,
      measuredHeightsByKey:
        initialRestoreState?.turnHeightsByKey ?? emptyTurnHeightsByKey,
    }),
    viewportHeightPx = defaultVirtualViewportHeightPx,
    initialDistanceFromBottomPx = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    defaultRenderedRange = Ku({
      distanceFromBottomPx: initialDistanceFromBottomPx,
      layout,
      overscanCount: virtualTurnOverscanCount,
      viewportHeightPx,
    });
  return {
    distanceFromBottomPx: initialDistanceFromBottomPx,
    renderedRange:
      (initialRestoreState?.renderedWindow == null
        ? null
        : Gu({
            anchorKey: initialRestoreState.renderedWindow.anchorKey,
            layout,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                initialRestoreState.renderedWindow.count,
                defaultRenderedRange.endIndex - defaultRenderedRange.startIndex,
              ),
            },
          })) ?? defaultRenderedRange,
    turnKeys: layout.turnKeys,
    viewportHeightPx,
  };
}
function updateVirtualizedTurnListViewportState({
  current,
  distanceFromBottomPx,
  layout,
  viewportHeightPx,
}) {
  let clampedDistanceFromBottomPx = Math.min(
      distanceFromBottomPx,
      layout.totalHeightPx,
    ),
    nextRenderedRange = Ku({
      distanceFromBottomPx: clampedDistanceFromBottomPx,
      layout,
      overscanCount: virtualTurnOverscanCount,
      viewportHeightPx,
    }),
    renderedRange = rangeContainsRange(current.renderedRange, nextRenderedRange)
      ? current.renderedRange
      : nextRenderedRange;
  return current.distanceFromBottomPx === clampedDistanceFromBottomPx &&
    current.viewportHeightPx === viewportHeightPx &&
    current.renderedRange.startIndex === renderedRange.startIndex &&
    current.renderedRange.endIndex === renderedRange.endIndex &&
    areTurnKeyArraysEqual(current.turnKeys, layout.turnKeys)
    ? current
    : {
        distanceFromBottomPx: clampedDistanceFromBottomPx,
        renderedRange,
        turnKeys: layout.turnKeys,
        viewportHeightPx,
      };
}
function rangeContainsRange(outerRange, innerRange) {
  return (
    outerRange.startIndex <= innerRange.startIndex &&
    outerRange.endIndex >= innerRange.endIndex
  );
}
function findMeasuredAnchorKeyForViewportPreservation({
  distanceFromBottomPx,
  layout,
  measuredHeightsByKey,
  nextLayout,
  viewportHeightPx,
}) {
  let visibleRange = Ku({
    distanceFromBottomPx,
    layout,
    overscanCount: 0,
    viewportHeightPx,
  });
  for (
    let turnIndex = visibleRange.startIndex;
    turnIndex < visibleRange.endIndex;
    turnIndex += 1
  ) {
    let turnKey = layout.turnKeys[turnIndex];
    if (
      turnKey != null &&
      measuredHeightsByKey[turnKey] != null &&
      nextLayout.turnIndexByKey.has(turnKey)
    )
      return turnKey;
  }
  return null;
}
function areTurnKeyArraysEqual(leftTurnKeys, rightTurnKeys) {
  return (
    leftTurnKeys === rightTurnKeys ||
    (leftTurnKeys.length === rightTurnKeys.length &&
      leftTurnKeys.every((item, index) => item === rightTurnKeys[index]))
  );
}
function getBottomScrollPaddingPxValue(getBottomScrollPaddingPx) {
  return Math.max(0, getBottomScrollPaddingPx?.() ?? 0);
}
function subtractBottomScrollPaddingPx(
  distanceFromBottomPx,
  bottomScrollPaddingPx,
) {
  return Math.max(0, distanceFromBottomPx - bottomScrollPaddingPx);
}
function isAtBottomAfterPadding(distanceFromBottomPx, bottomScrollPaddingPx) {
  return distanceFromBottomPx <= (bottomScrollPaddingPx > 0 ? 0 : 24);
}
function createVirtualizedTurnListRestoreState(
  measuredHeightsByKey,
  turnKeys,
  renderedRange,
) {
  let restoreHeightsByKey = {};
  for (let turnKey of turnKeys) {
    let heightPx = measuredHeightsByKey[turnKey];
    heightPx != null && (restoreHeightsByKey[turnKey] = heightPx);
  }
  let anchorKey = turnKeys[renderedRange.startIndex];
  return Object.keys(restoreHeightsByKey).length === 0 || anchorKey == null
    ? null
    : {
        renderedWindow: {
          anchorKey,
          count: renderedRange.endIndex - renderedRange.startIndex,
        },
        turnHeightsByKey: restoreHeightsByKey,
      };
}
function measureTurnBottomViewportOverflow({
  scrollElement,
  turnElement,
  windowZoom,
}) {
  return scrollElement == null || turnElement == null
    ? 0
    : scaleCssPxByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}
function getDistanceFromBottomForTargetElement({
  layout,
  targetElement,
  turnElement,
  turnKey,
  windowZoom,
  viewportHeightPx,
}) {
  let turnIndex = layout.turnIndexByKey.get(turnKey);
  if (turnIndex == null) return null;
  let turnRect = turnElement.getBoundingClientRect(),
    targetRect = targetElement.getBoundingClientRect(),
    targetOffsetFromTurnTop = scaleCssPxByWindowZoom(
      targetRect.top - turnRect.top,
      windowZoom,
    ),
    targetHeight = scaleCssPxByWindowZoom(targetRect.height, windowZoom);
  return Math.max(
    0,
    (layout.bottomOffsetsPx[turnIndex] ?? 0) +
      (layout.heightsPx[turnIndex] ?? 0) -
      targetOffsetFromTurnTop -
      targetHeight / 2 -
      viewportHeightPx / 2,
  );
}
var virtualizedTurnListModule,
  virtualizedTurnListReactRuntime,
  reactDomModule,
  virtualizedTurnListJsxRuntime,
  defaultVirtualTurnGapPx,
  defaultVirtualViewportHeightPx,
  virtualTurnOverscanCount,
  emptyTurnHeightsByKey,
  MemoizedVirtualizedTurnItem,
  initVirtualizedTurnListChunk = once(() => {
    virtualizedTurnListModule = getChunkModuleExports();
    initClassNameRuntime();
    virtualizedTurnListReactRuntime = toEsModule(loadReactModule(), 1);
    reactDomModule = toEsModule(loadReactDomModule(), 1);
    initWindowZoomContext();
    vl();
    nd();
    id();
    initKeyboardShortcutLabel();
    Ju();
    virtualizedTurnListJsxRuntime = getJsxRuntime();
    defaultVirtualTurnGapPx = 12;
    defaultVirtualViewportHeightPx = 800;
    virtualTurnOverscanCount = 2;
    emptyTurnHeightsByKey = {};
    MemoizedVirtualizedTurnItem =
      virtualizedTurnListReactRuntime.memo(VirtualizedTurnItem);
  });
function LocalConversationAutoFollowVirtualizedTurnList({
  conversationId,
  entries,
  initialScrollOffset,
  initialVirtualizedTurnListRestoreState,
  consumePendingLatestTurnSubmitPlacement,
  onResponseSpacerStateChange,
  onApiChange,
  onVisibleContentReady,
  onVirtualizedTurnListRestoreStateChange,
  synchronouslyMeasureLatestTurnUpdates = false,
}) {
  let scope = useScope(appScope),
    windowZoom = useWindowZoom(),
    latestEntry = entries.at(-1),
    latestTurnKey = latestEntry?.turnKey ?? null,
    latestTurnIdentityKey =
      latestEntry == null ? null : getLatestTurnIdentityKey(latestEntry),
    latestTurnPhase =
      latestEntry == null ? "idle" : getLatestTurnPhase(latestEntry.turn),
    isLatestTurnInProgress = latestEntry?.turn.status === "inProgress",
    savedScrollState = scope.get(threadScrollStateSignal, conversationId),
    savedLatestTurnState =
      savedScrollState?.latestTurn?.turnKey === latestTurnKey
        ? savedScrollState.latestTurn
        : null,
    responseSpacerHeightPx = createMotionSignal(0),
    latestTurnOffsetY = createMotionSignal(0),
    scrollController = ad(),
    scrollStateRef = autoFollowTurnListReactRuntime.useRef(
      createLatestTurnScrollState({
        followMode: savedLatestTurnState?.followMode ?? "static",
      }),
    ),
    restoredPassiveLatestTurnHeightRef = autoFollowTurnListReactRuntime.useRef(
      savedLatestTurnState != null &&
        isPassiveLatestTurnFollowMode(savedLatestTurnState.followMode)
        ? savedLatestTurnState.latestTurnHeightPx
        : null,
    ),
    latestTurnHeightRef = autoFollowTurnListReactRuntime.useRef(
      savedLatestTurnState?.latestTurnHeightPx ?? null,
    ),
    latestTurnFollowContentHeightRef = autoFollowTurnListReactRuntime.useRef(
      savedLatestTurnState?.latestTurnFollowContentHeightPx ?? null,
    ),
    hasRestoredInitialScrollRef = autoFollowTurnListReactRuntime.useRef(false),
    initialScrollOffsetRef =
      autoFollowTurnListReactRuntime.useRef(initialScrollOffset),
    restoreStateRef = autoFollowTurnListReactRuntime.useRef(
      initialVirtualizedTurnListRestoreState,
    ),
    responseSpacerElementRef = autoFollowTurnListReactRuntime.useRef(null),
    isResponseSpacerAtViewportBottomRef =
      autoFollowTurnListReactRuntime.useRef(false),
    latestTurnKeyRef = autoFollowTurnListReactRuntime.useRef(latestTurnKey),
    latestTurnIdentityKeyRef = autoFollowTurnListReactRuntime.useRef(
      latestTurnIdentityKey,
    ),
    previousLatestTurnPhaseRef = autoFollowTurnListReactRuntime.useRef(
      savedLatestTurnState?.latestTurnPhase ?? latestTurnPhase,
    ),
    latestTurnPhaseRef = autoFollowTurnListReactRuntime.useRef(latestTurnPhase),
    wasLatestTurnInProgressRef = autoFollowTurnListReactRuntime.useRef(
      savedLatestTurnState?.isLatestTurnInProgress ?? isLatestTurnInProgress,
    ),
    latestTurnInProgressRef = autoFollowTurnListReactRuntime.useRef(
      isLatestTurnInProgress,
    ),
    latestTurnMotionContext = autoFollowTurnListReactRuntime.useMemo(
      () => ({
        turnKey: latestEntry?.turnKey ?? null,
        yPx: latestTurnOffsetY,
      }),
      [latestEntry?.turnKey, latestTurnOffsetY],
    ),
    responseSpacerAdjustedScrollController =
      autoFollowTurnListReactRuntime.useMemo(() => {
        let toSpacerAdjustedDistance = (distanceFromBottomPx) =>
          Math.max(0, distanceFromBottomPx - responseSpacerHeightPx.get());
        return {
          ...scrollController,
          addScrollListener: (listener) =>
            scrollController.addScrollListener((distanceFromBottomPx) => {
              listener(toSpacerAdjustedDistance(distanceFromBottomPx));
            }),
          addUserScrollListener: (listener) =>
            scrollController.addUserScrollListener(
              (distanceFromBottomPx, previousDistanceFromBottomPx) => {
                listener(
                  toSpacerAdjustedDistance(distanceFromBottomPx),
                  previousDistanceFromBottomPx == null
                    ? undefined
                    : toSpacerAdjustedDistance(previousDistanceFromBottomPx),
                );
              },
            ),
          getLastScrollDistanceFromBottomPx: () =>
            toSpacerAdjustedDistance(
              scrollController.getLastScrollDistanceFromBottomPx(),
            ),
          scrollToDistanceFromBottomPx: (distanceFromBottomPx, behavior) => {
            scrollController.scrollToDistanceFromBottomPx(
              distanceFromBottomPx + responseSpacerHeightPx.get(),
              behavior,
            );
          },
        };
      }, [responseSpacerHeightPx, scrollController]);
  latestTurnPhaseRef.current = latestTurnPhase;
  latestTurnInProgressRef.current = isLatestTurnInProgress;
  latestTurnKeyRef.current = latestTurnKey;
  let dispatchScrollStateEvent = useStableCallback(
      (event, forceSync = false) => {
        let previousFollowMode = scrollStateRef.current.followMode;
        scrollStateRef.current = reduceLatestTurnScrollState(
          scrollStateRef.current,
          event,
        );
        let { followMode } = scrollStateRef.current;
        return (
          (forceSync || followMode !== previousFollowMode) &&
            scrollController.setFooterResizeViewportPreserveDisabled(
              latestTurnInProgressRef.current &&
                isPassiveLatestTurnFollowMode(followMode),
            ),
          scrollStateRef.current
        );
      },
    ),
    syncFooterResizePreserveDisabled = useStableCallback(() => {
      let { followMode } = scrollStateRef.current;
      scrollController.setFooterResizeViewportPreserveDisabled(
        latestTurnInProgressRef.current &&
          isPassiveLatestTurnFollowMode(followMode),
      );
    }),
    getPendingInitialRestoreDistanceFromBottom = useStableCallback(() => {
      let initialScrollOffsetPx = initialScrollOffsetRef.current;
      return hasRestoredInitialScrollRef.current ||
        initialScrollOffsetPx == null ||
        scrollStateRef.current.followMode === "prework_follow"
        ? null
        : Math.max(0, initialScrollOffsetPx - responseSpacerHeightPx.get());
    }),
    restoreInitialScrollOffset = useStableCallback(() => {
      if (hasRestoredInitialScrollRef.current) return;
      let initialScrollOffsetPx = initialScrollOffsetRef.current;
      if (
        initialScrollOffsetPx == null ||
        scrollStateRef.current.followMode === "prework_follow"
      ) {
        hasRestoredInitialScrollRef.current = true;
        return;
      }
      let scrollElement = scrollController.getScrollElement();
      if (scrollElement != null) {
        if (
          Math.abs(
            getScrollDistanceFromBottomPx(scrollElement) -
              initialScrollOffsetPx,
          ) <= 24
        ) {
          hasRestoredInitialScrollRef.current = true;
          return;
        }
        scrollController.scrollToDistanceFromBottomPx(
          initialScrollOffsetPx,
          "instant",
        );
        Math.abs(
          getScrollDistanceFromBottomPx(scrollElement) - initialScrollOffsetPx,
        ) <= 24 && (hasRestoredInitialScrollRef.current = true);
      }
    }),
    handleRestoreStateChange = useStableCallback((restoreState) => {
      restoreStateRef.current = restoreState;
      onVirtualizedTurnListRestoreStateChange(restoreState);
    });
  autoFollowTurnListReactRuntime.useLayoutEffect(
    () => (
      syncFooterResizePreserveDisabled(),
      () => {
        let persistedLatestTurnKey = latestTurnKeyRef.current,
          scrollElement = scrollController.getScrollElement(),
          persistedScrollSnapshot = createPersistedScrollStateSnapshot({
            distanceFromBottomPx:
              scrollElement == null
                ? scrollController.getLastScrollDistanceFromBottomPx()
                : getScrollDistanceFromBottomPx(scrollElement),
            latestTurnPhase: latestTurnPhaseRef.current,
            responseSpacerHeightPx: responseSpacerHeightPx.get(),
            scrollPaddingBottomPx:
              scrollElement == null
                ? 0
                : getThreadScrollPaddingBottomPx(scrollElement),
            scrollState: scrollStateRef.current,
          });
        scope.set(threadScrollStateSignal, conversationId, {
          distanceFromBottomPx: persistedScrollSnapshot.distanceFromBottomPx,
          latestTurn:
            persistedLatestTurnKey == null
              ? null
              : {
                  turnKey: persistedLatestTurnKey,
                  isLatestTurnInProgress: latestTurnInProgressRef.current,
                  latestTurnPhase: latestTurnPhaseRef.current,
                  ...persistedScrollSnapshot.scrollState,
                  latestTurnHeightPx: isPassiveLatestTurnFollowMode(
                    persistedScrollSnapshot.scrollState.followMode,
                  )
                    ? latestTurnHeightRef.current
                    : null,
                  latestTurnFollowContentHeightPx:
                    latestTurnFollowContentHeightRef.current,
                },
          virtualizedTurnList: restoreStateRef.current,
        });
        scrollController.setFooterResizeViewportPreserveDisabled(false);
      }
    ),
    [
      conversationId,
      responseSpacerHeightPx,
      scope,
      scrollController,
      syncFooterResizePreserveDisabled,
    ],
  );
  let clearResponseSpacer = useStableCallback(() => {
      responseSpacerHeightPx.stop();
      responseSpacerHeightPx.set(0);
      isResponseSpacerAtViewportBottomRef.current = false;
    }),
    scrollToBottomAndClearSpacer = useStableCallback(() => {
      hasRestoredInitialScrollRef.current = true;
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      clearResponseSpacer();
      onResponseSpacerStateChange(null);
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
    }),
    scrollToLatestTurnBottom = useStableCallback(() => {
      if (
        ((hasRestoredInitialScrollRef.current = true),
        latestTurnInProgressRef.current)
      ) {
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        clearResponseSpacer();
        dispatchScrollStateEvent(
          {
            type: "scroll_to_bottom",
            latestTurnPhase: latestTurnPhaseRef.current,
          },
          true,
        );
        scrollController.scrollToDistanceFromBottomPx(0, "instant");
        return;
      }
      if (
        latestTurnPhaseRef.current === "idle" &&
        responseSpacerHeightPx.get() > 24
      ) {
        scrollToBottomAndClearSpacer();
        return;
      }
      scrollController.scrollToBottom();
    }),
    shrinkResponseSpacerToDistance = useStableCallback(
      (targetDistanceFromBottomPx) => {
        let currentSpacerHeightPx = responseSpacerHeightPx.get(),
          nextSpacerHeightPx =
            targetDistanceFromBottomPx <= 24
              ? 0
              : Math.min(currentSpacerHeightPx, targetDistanceFromBottomPx);
        if (currentSpacerHeightPx - nextSpacerHeightPx <= 24) return;
        let scrollElement = scrollController.getScrollElement(),
          currentDistanceFromBottomPx =
            scrollElement == null
              ? 0
              : getScrollDistanceFromBottomPx(scrollElement),
          spacerHeightDeltaPx = nextSpacerHeightPx - currentSpacerHeightPx;
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        responseSpacerHeightPx.stop();
        responseSpacerHeightPx.set(nextSpacerHeightPx);
        nextSpacerHeightPx <= 24 && onResponseSpacerStateChange(null);
        scrollElement != null &&
          scrollController.scrollToDistanceFromBottomPx(
            Math.max(0, currentDistanceFromBottomPx + spacerHeightDeltaPx),
            "instant",
          );
      },
    ),
    handleUserScroll = useStableCallback(
      (distanceFromBottomPx, previousDistanceFromBottomPx) => {
        hasRestoredInitialScrollRef.current = true;
        let currentSpacerHeightPx = responseSpacerHeightPx.get();
        if (distanceFromBottomPx <= 24) {
          (currentSpacerHeightPx <= 24 ||
            isResponseSpacerAtViewportBottomRef.current) &&
            previousDistanceFromBottomPx != null &&
            previousDistanceFromBottomPx > 24 &&
            latestTurnInProgressRef.current &&
            (dispatchScrollStateEvent(
              {
                type: "scroll_to_bottom",
                latestTurnPhase: latestTurnPhaseRef.current,
              },
              true,
            ),
            scrollController.scrollToDistanceFromBottomPx(0, "instant"));
          return;
        }
        if (
          !latestTurnInProgressRef.current &&
          latestTurnPhaseRef.current === "idle" &&
          currentSpacerHeightPx > 24
        ) {
          shrinkResponseSpacerToDistance(
            currentSpacerHeightPx - distanceFromBottomPx,
          );
          return;
        }
        if (
          latestTurnInProgressRef.current &&
          latestTurnPhaseRef.current === "prework" &&
          previousDistanceFromBottomPx != null &&
          distanceFromBottomPx > previousDistanceFromBottomPx &&
          currentSpacerHeightPx > 24 &&
          distanceFromBottomPx > currentSpacerHeightPx
        ) {
          let distanceAfterSpacerPx =
            distanceFromBottomPx - currentSpacerHeightPx;
          latestTurnOffsetY.stop();
          latestTurnOffsetY.set(0);
          clearResponseSpacer();
          scrollController.scrollToDistanceFromBottomPx(
            distanceAfterSpacerPx,
            "instant",
          );
          return;
        }
      },
    );
  autoFollowTurnListReactRuntime.useLayoutEffect(
    () => scrollController.addUserScrollListener(handleUserScroll),
    [handleUserScroll, scrollController],
  );
  autoFollowTurnListReactRuntime.useLayoutEffect(() => {
    let scrollElement = scrollController.getScrollElement(),
      responseSpacerElement = responseSpacerElementRef.current;
    if (
      scrollElement == null ||
      responseSpacerElement == null ||
      typeof IntersectionObserver > "u"
    )
      return;
    let intersectionObserver = new IntersectionObserver(
      (intersectionEntries) => {
        let lastIntersectionEntry =
          intersectionEntries[intersectionEntries.length - 1];
        if (lastIntersectionEntry == null) return;
        let intersectionHeightPx =
          lastIntersectionEntry.intersectionRect.height;
        if (latestTurnInProgressRef.current) {
          isResponseSpacerAtViewportBottomRef.current =
            Math.max(
              0,
              intersectionHeightPx -
                getThreadScrollPaddingBottomPx(scrollElement),
            ) <= 24;
          return;
        }
        shrinkResponseSpacerToDistance(
          Math.min(
            intersectionHeightPx,
            responseSpacerHeightPx.get() -
              getScrollDistanceFromBottomPx(scrollElement),
          ),
        );
      },
      {
        root: scrollElement,
        threshold: responseSpacerIntersectionThresholds,
      },
    );
    return (
      intersectionObserver.observe(responseSpacerElement),
      () => {
        intersectionObserver.disconnect();
      }
    );
  }, [
    responseSpacerHeightPx,
    scrollController,
    shrinkResponseSpacerToDistance,
  ]);
  autoFollowTurnListReactRuntime.useLayoutEffect(() => {
    if (latestTurnIdentityKey == null) {
      onResponseSpacerStateChange(null);
      return;
    }
    return (
      onResponseSpacerStateChange({
        getHeightPx: () => responseSpacerHeightPx.get(),
        scrollToBottom: scrollToLatestTurnBottom,
      }),
      () => {
        onResponseSpacerStateChange(null);
      }
    );
  }, [
    latestTurnIdentityKey,
    scrollToLatestTurnBottom,
    onResponseSpacerStateChange,
    responseSpacerHeightPx,
  ]);
  let clampResponseSpacerToViewport = useStableCallback(() => {
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    let maxSpacerHeightPx = getMaxResponseSpacerHeightPx({
        scrollElementHeightPx: scrollElement.clientHeight,
        scrollPaddingBottomPx: getThreadScrollPaddingBottomPx(scrollElement),
      }),
      currentSpacerHeightPx = responseSpacerHeightPx.get();
    if (currentSpacerHeightPx <= 24) return;
    let nextSpacerHeightPx = Math.min(currentSpacerHeightPx, maxSpacerHeightPx);
    if (Math.abs(nextSpacerHeightPx - currentSpacerHeightPx) <= 24) return;
    let spacerHeightDeltaPx = nextSpacerHeightPx - currentSpacerHeightPx;
    responseSpacerHeightPx.stop();
    responseSpacerHeightPx.set(nextSpacerHeightPx);
    nextSpacerHeightPx <= 24 && onResponseSpacerStateChange(null);
    let currentDistanceFromBottomPx =
        getScrollDistanceFromBottomPx(scrollElement),
      nextDistanceFromBottomPx = Math.max(
        0,
        currentDistanceFromBottomPx + spacerHeightDeltaPx,
      );
    scrollController.scrollToDistanceFromBottomPx(
      nextDistanceFromBottomPx,
      "instant",
    );
  });
  autoFollowTurnListReactRuntime.useLayoutEffect(() => {
    let scrollElement = scrollController.getScrollElement();
    if (scrollElement == null) return;
    clampResponseSpacerToViewport();
    let resizeFrameId = null,
      scheduleClampResponseSpacer = () => {
        resizeFrameId ??= window.requestAnimationFrame(() => {
          resizeFrameId = null;
          clampResponseSpacerToViewport();
        });
      },
      resizeObserver =
        typeof ResizeObserver > "u"
          ? null
          : new ResizeObserver(scheduleClampResponseSpacer);
    return (
      resizeObserver?.observe(scrollElement),
      window.addEventListener("resize", scheduleClampResponseSpacer, {
        passive: true,
      }),
      () => {
        resizeObserver?.disconnect();
        window.removeEventListener("resize", scheduleClampResponseSpacer);
        resizeFrameId != null && window.cancelAnimationFrame(resizeFrameId);
      }
    );
  }, [clampResponseSpacerToViewport, scrollController]);
  let handleLatestTurnHeightChange = useStableCallback(
      ({
        heightDeltaPx,
        heightPx,
        bottomViewportOverflowPx,
        turnElement,
        followContentHeightPx,
      }) => {
        let scrollElement = scrollController.getScrollElement(),
          restoredPassiveHeightPx = restoredPassiveLatestTurnHeightRef.current;
        if (
          (heightPx != null &&
            ((latestTurnHeightRef.current = heightPx),
            (restoredPassiveLatestTurnHeightRef.current = null)),
          followContentHeightPx != null &&
            (latestTurnFollowContentHeightRef.current = followContentHeightPx),
          restoredPassiveHeightPx != null &&
            scrollElement != null &&
            heightPx != null &&
            Math.abs(heightPx - restoredPassiveHeightPx) > 24)
        ) {
          let restoredHeightDeltaPx = heightPx - restoredPassiveHeightPx;
          initialScrollOffsetRef.current != null &&
            ((hasRestoredInitialScrollRef.current = false),
            (initialScrollOffsetRef.current = Math.max(
              0,
              initialScrollOffsetRef.current + restoredHeightDeltaPx,
            )));
          adjustScrollForLatestTurnHeightDelta({
            allowResponseSpacerGrowth: latestTurnInProgressRef.current,
            distanceDeltaPx: restoredHeightDeltaPx,
            responseSpacerHeightPx: responseSpacerHeightPx,
            scrollController: scrollController,
            scrollElement: scrollElement,
          });
        }
        if (scrollStateRef.current.followMode === "user_follow") {
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          scrollStateRef.current.followMode === "prework_follow" &&
          latestTurnPhaseRef.current === "prework"
        ) {
          scrollController.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          (scrollElement != null &&
            restoredPassiveHeightPx == null &&
            heightDeltaPx != null &&
            heightDeltaPx !== 0 &&
            isPassiveLatestTurnFollowMode(scrollStateRef.current.followMode) &&
            adjustScrollForLatestTurnHeightDelta({
              allowResponseSpacerGrowth: latestTurnInProgressRef.current,
              distanceDeltaPx: heightDeltaPx,
              responseSpacerHeightPx: responseSpacerHeightPx,
              scrollController: scrollController,
              scrollElement: scrollElement,
            }),
          scrollStateRef.current.followMode === "static" ||
            latestTurnPhaseRef.current !== "prework" ||
            scrollStateRef.current.followMode !== "prework_watch" ||
            responseSpacerHeightPx.get() <= 24 ||
            scrollElement == null ||
            turnElement == null)
        )
          return;
        let followContentOverflowPx =
            measureLatestTurnFollowContentOverflow({
              scrollElement: scrollElement,
              turnElement,
              fallbackBottomViewportOverflowPx: bottomViewportOverflowPx,
              windowZoom: windowZoom,
            }) +
            (scrollElement == null
              ? 0
              : getThreadScrollPaddingBottomPx(scrollElement)),
          previousScrollState = scrollStateRef.current,
          nextScrollState = dispatchScrollStateEvent({
            type: "latest_turn_follow_content_changed",
            followContentOverflowPx: followContentOverflowPx,
            latestTurnPhase: latestTurnPhaseRef.current,
          });
        previousScrollState.followMode !== "prework_follow" &&
          nextScrollState.followMode === "prework_follow" &&
          (latestTurnOffsetY.stop(),
          latestTurnOffsetY.set(0),
          clearResponseSpacer(),
          scrollController.scrollToDistanceFromBottomPx(0, "instant"));
      },
    ),
    handleScrollDistanceChanged = useStableCallback((distanceFromBottomPx) => {
      if (distanceFromBottomPx <= 24) return;
      let currentSpacerHeightPx = responseSpacerHeightPx.get(),
        scrollElement = scrollController.getScrollElement(),
        scrollPaddingBottomPx =
          scrollElement == null
            ? 0
            : getThreadScrollPaddingBottomPx(scrollElement);
      latestTurnInProgressRef.current &&
        currentSpacerHeightPx > 24 &&
        getResponseSpacerOverflowPx({
          distanceFromBottomPx: distanceFromBottomPx,
          responseSpacerHeightPx: currentSpacerHeightPx,
          scrollPaddingBottomPx: scrollPaddingBottomPx,
        }) <= 24 &&
        (isResponseSpacerAtViewportBottomRef.current = true);
      dispatchScrollStateEvent({
        type: "scroll_distance_changed",
        distanceFromBottomPx: distanceFromBottomPx,
        latestTurnPhase: latestTurnPhaseRef.current,
      });
    });
  return (
    autoFollowTurnListReactRuntime.useLayoutEffect(
      () => scrollController.addScrollListener(handleScrollDistanceChanged),
      [handleScrollDistanceChanged, scrollController],
    ),
    autoFollowTurnListReactRuntime.useLayoutEffect(() => {
      let previousLatestTurnIdentityKey = latestTurnIdentityKeyRef.current,
        previousLatestTurnPhase = previousLatestTurnPhaseRef.current,
        wasLatestTurnInProgress = wasLatestTurnInProgressRef.current;
      if (
        ((latestTurnIdentityKeyRef.current = latestTurnIdentityKey),
        (previousLatestTurnPhaseRef.current = latestTurnPhase),
        (wasLatestTurnInProgressRef.current = isLatestTurnInProgress),
        latestTurnIdentityKey == null)
      ) {
        dispatchScrollStateEvent(
          {
            type: "latest_turn_removed",
          },
          true,
        );
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(0);
        clearResponseSpacer();
        return;
      }
      let scrollElement = scrollController.getScrollElement();
      if (scrollElement == null) return;
      if (previousLatestTurnIdentityKey !== latestTurnIdentityKey) {
        let submitPlacement =
          consumePendingLatestTurnSubmitPlacement?.() ?? null;
        if (
          consumePendingLatestTurnSubmitPlacement != null &&
          submitPlacement == null
        )
          return;
        let shouldPlaceLatestTurn =
          submitPlacement?.shouldPlaceLatestTurn ?? true;
        if (
          (dispatchScrollStateEvent(
            {
              type: "latest_turn_placed",
            },
            true,
          ),
          !shouldPlaceLatestTurn)
        ) {
          if (
            (latestTurnOffsetY.stop(),
            latestTurnOffsetY.set(0),
            clearResponseSpacer(),
            submitPlacement != null)
          ) {
            let scrollHeightDeltaPx =
              submitPlacement.scrollHeightPx == null
                ? 0
                : scrollElement.scrollHeight - submitPlacement.scrollHeightPx;
            scrollController.scrollToDistanceFromBottomPx(
              submitPlacement.distanceFromBottomPx + scrollHeightDeltaPx,
              "instant",
            );
          }
          return;
        }
        let maxSpacerHeightPx = getMaxResponseSpacerHeightPx({
            scrollElementHeightPx: scrollElement.clientHeight,
            scrollPaddingBottomPx:
              getThreadScrollPaddingBottomPx(scrollElement),
          }),
          currentSpacerHeightPx = responseSpacerHeightPx.get();
        responseSpacerHeightPx.stop();
        isResponseSpacerAtViewportBottomRef.current = false;
        latestTurnOffsetY.stop();
        latestTurnOffsetY.set(currentSpacerHeightPx);
        scrollController.scrollToDistanceFromBottomPx(
          latestTurnPlacementDistancePx,
          "instant",
        );
        animateSignalValue(
          latestTurnOffsetY,
          0,
          responseSpacerSpringTransition,
        );
        currentSpacerHeightPx !== maxSpacerHeightPx &&
          animateSignalValue(
            responseSpacerHeightPx,
            maxSpacerHeightPx,
            responseSpacerSpringTransition,
          );
      }
      let previousScrollState = scrollStateRef.current;
      dispatchScrollStateEvent({
        type: "latest_turn_phase_changed",
        latestTurnPhase: latestTurnPhase,
        previousLatestTurnPhase: previousLatestTurnPhase,
      });
      previousLatestTurnPhase === "prework" &&
        latestTurnPhase === "final_answer" &&
        previousScrollState.followMode === "prework_follow" &&
        (latestTurnOffsetY.stop(),
        latestTurnOffsetY.set(0),
        clearResponseSpacer(),
        scrollController.scrollToDistanceFromBottomPx(0, "instant"));
      wasLatestTurnInProgress &&
        !isLatestTurnInProgress &&
        (latestTurnOffsetY.stop(),
        latestTurnOffsetY.set(0),
        responseSpacerHeightPx.stop());
    }, [
      clearResponseSpacer,
      consumePendingLatestTurnSubmitPlacement,
      isLatestTurnInProgress,
      latestTurnOffsetY,
      latestTurnIdentityKey,
      latestTurnPhase,
      responseSpacerHeightPx,
      scrollController,
      dispatchScrollStateEvent,
    ]),
    (
      <>
        <LatestTurnMotionContext value={latestTurnMotionContext}>
          {autoFollowTurnListJsxRuntime.jsx(od, {
            value: responseSpacerAdjustedScrollController,
            children: autoFollowTurnListJsxRuntime.jsx(VirtualizedTurnList, {
              entries,
              initialRestoreState: initialVirtualizedTurnListRestoreState,
              latestTurnSynchronousMeasurementKey:
                synchronouslyMeasureLatestTurnUpdates
                  ? latestEntry?.turn.items.length
                  : undefined,
              onApiChange,
              onVisibleContentReady,
              onLatestTurnHeightChange: handleLatestTurnHeightChange,
              onRestoreStateChange: handleRestoreStateChange,
              getPendingRestoreScrollDistanceFromBottomPx:
                getPendingInitialRestoreDistanceFromBottom,
              restoreScrollDistanceFromBottomPx: restoreInitialScrollOffset,
              RowComponent: LatestTurnAnimatedRow,
            }),
          })}
        </LatestTurnMotionContext>
        {autoFollowTurnListJsxRuntime.jsx(motion.div, {
          "aria-hidden": true,
          className: "shrink-0",
          ref: responseSpacerElementRef,
          style: {
            height: responseSpacerHeightPx,
          },
        })}
      </>
    )
  );
}
function LatestTurnAnimatedRow(props) {
  let { entry, latestTurnFollowContentRef } = props,
    latestTurnMotionContext = autoFollowTurnListReactRuntime.useContext(
      LatestTurnMotionContext,
    ),
    latestTurnY =
      latestTurnMotionContext?.turnKey === entry.turnKey
        ? latestTurnMotionContext.yPx
        : 0,
    rowStyle = {
      y: latestTurnY,
    };
  let rowNode = (
    <LocalConversationTurnRow
      entry={entry}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
  return autoFollowTurnListJsxRuntime.jsx(motion.div, {
    style: rowStyle,
    children: rowNode,
  });
}
function adjustScrollForLatestTurnHeightDelta({
  allowResponseSpacerGrowth,
  behavior = "instant",
  distanceDeltaPx,
  responseSpacerHeightPx,
  scrollController,
  scrollElement,
}) {
  let nextDistanceFromBottomPx =
    getScrollDistanceFromBottomPx(scrollElement) + distanceDeltaPx;
  allowResponseSpacerGrowth &&
    nextDistanceFromBottomPx < 0 &&
    responseSpacerHeightPx.set(
      responseSpacerHeightPx.get() - nextDistanceFromBottomPx,
    );
  scrollController.scrollToDistanceFromBottomPx(
    Math.max(0, nextDistanceFromBottomPx),
    behavior,
  );
}
function measureLatestTurnFollowContentOverflow({
  scrollElement,
  turnElement,
  fallbackBottomViewportOverflowPx,
  windowZoom,
}) {
  return scrollElement == null || turnElement == null
    ? fallbackBottomViewportOverflowPx
    : scaleCssPxByWindowZoom(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}
function getMaxResponseSpacerHeightPx({
  scrollElementHeightPx,
  scrollPaddingBottomPx,
}) {
  let availableViewportHeightPx = Math.max(
    0,
    scrollElementHeightPx - scrollPaddingBottomPx,
  );
  return Math.max(
    0,
    Math.min(
      availableViewportHeightPx * maxResponseSpacerViewportRatio,
      availableViewportHeightPx - responseSpacerViewportReservePx,
    ),
  );
}
function createPersistedScrollStateSnapshot({
  distanceFromBottomPx,
  latestTurnPhase,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
  scrollState,
}) {
  return getResponseSpacerOverflowPx({
    distanceFromBottomPx,
    responseSpacerHeightPx,
    scrollPaddingBottomPx,
  }) > 24
    ? {
        distanceFromBottomPx: 0,
        scrollState: reduceLatestTurnScrollState(scrollState, {
          type: "scroll_to_bottom",
          latestTurnPhase,
        }),
      }
    : {
        distanceFromBottomPx: Math.max(
          0,
          distanceFromBottomPx - responseSpacerHeightPx,
        ),
        scrollState,
      };
}
function getResponseSpacerOverflowPx({
  distanceFromBottomPx,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
}) {
  return Math.max(
    0,
    responseSpacerHeightPx - distanceFromBottomPx - scrollPaddingBottomPx,
  );
}
function getThreadScrollPaddingBottomPx(scrollElement) {
  let scrollPaddingBottomPx = Number.parseFloat(
    scrollElement.style.getPropertyValue("--thread-scroll-padding-bottom"),
  );
  return Number.isFinite(scrollPaddingBottomPx) ? scrollPaddingBottomPx : 0;
}
function getLatestTurnIdentityKey(entry) {
  let restoreMessageId = getLatestSteeringRestoreMessageId(entry);
  return restoreMessageId == null
    ? entry.turnKey
    : `${entry.turnKey}:${restoreMessageId}`;
}
function getLatestSteeringRestoreMessageId(entry) {
  for (
    let itemIndex = entry.turn.items.length - 1;
    itemIndex >= 0;
    --itemIndex
  ) {
    let turnItem = entry.turn.items[itemIndex];
    if (turnItem?.type === "steeringUserMessage")
      return turnItem.restoreMessage.id;
  }
  return null;
}
var autoFollowVirtualizedTurnListModule,
  autoFollowTurnListReactRuntime,
  autoFollowTurnListJsxRuntime,
  maxResponseSpacerViewportRatio,
  responseSpacerViewportReservePx,
  latestTurnPlacementDistancePx,
  responseSpacerIntersectionThresholds,
  responseSpacerSpringTransition,
  LatestTurnMotionContext,
  initAutoFollowVirtualizedTurnListChunk = once(() => {
    autoFollowVirtualizedTurnListModule = getChunkModuleExports();
    initMotionRuntime();
    initScopeRuntime();
    autoFollowTurnListReactRuntime = toEsModule(loadReactModule(), 1);
    initWindowZoomContext();
    initAppScope();
    nd();
    id();
    initReverseScrollUtilities();
    initKeyboardShortcutLabel();
    initThreadScrollStateSignal();
    initLocalConversationTurnRowDependencies();
    initLocalConversationTurnRowChunk();
    initVirtualizedTurnListChunk();
    autoFollowTurnListJsxRuntime = getJsxRuntime();
    maxResponseSpacerViewportRatio = 0.6666666666666666;
    responseSpacerViewportReservePx = 240;
    latestTurnPlacementDistancePx = 1;
    responseSpacerIntersectionThresholds = Array.from(
      {
        length: 101,
      },
      (_unused, index) => index / 100,
    );
    responseSpacerSpringTransition = {
      type: "spring",
      bounce: 0,
      duration: 0.5,
    };
    LatestTurnMotionContext =
      autoFollowTurnListReactRuntime.createContext(null);
  });
function buildLocalConversationTurnListEntries({
  collapsedTurnsById,
  completedThreadGoal,
  completedThreadGoalTurnKey,
  conversationId,
  cwd,
  hasInheritedParentTurns,
  hostId,
  isBackgroundSubagentsEnabled,
  isProjectlessConversation,
  isReadOnly,
  modelProvider,
  projectlessOutputDirectory = null,
  onEditLastTurnMessage,
  onForkTurnMessage,
  onSetCollapsedForTurn,
  previousEntries,
  renderMcpApps,
  resolvedApps,
  showInProgressFixedContent,
  visibleSubagentParentThreadId,
  visibleTurnEntries,
}) {
  let previousEntriesByTurnKey = new Map(
      previousEntries.map((item) => [item.turnKey, item]),
    ),
    generatedImagesForVisibleEntries = collectGeneratedImagesForVisibleTurns({
      isBackgroundSubagentsEnabled,
      previousEntries,
      projectlessOutputDirectory,
      visibleTurnEntries,
    }),
    stableGeneratedImages = turnListEntryDeepEqualModule.default(
      previousEntries[0]?.generatedImages,
      generatedImagesForVisibleEntries,
    )
      ? previousEntries[0].generatedImages
      : generatedImagesForVisibleEntries,
    didEntriesChange = false,
    nextEntries = [];
  if (
    (visibleTurnEntries.forEach((item, index) => {
      let turnId = item.turnId,
        renderMcpAppsMode;
      renderMcpApps &&
        (renderMcpAppsMode =
          index >= visibleTurnEntries.length - 3 ? "auto-expand" : "default");
      let candidateEntries = [
        {
          conversationId,
          cwd,
          hostId,
          isCollapsed: turnId == null ? undefined : collapsedTurnsById[turnId],
          isMostRecentTurn: index === visibleTurnEntries.length - 1,
          isReadOnly,
          totalTurnCount: visibleTurnEntries.length,
          turnNumber: index + 1,
          isProjectlessConversation,
          modelProvider,
          projectlessOutputDirectory,
          onEditLastTurnMessage,
          onForkTurnMessage,
          completedThreadGoal:
            completedThreadGoalTurnKey === item.turnSearchKey
              ? completedThreadGoal
              : null,
          generatedImages: stableGeneratedImages,
          onSetCollapsedForTurn:
            turnId == null ? undefined : onSetCollapsedForTurn,
          parentThreadAttachmentSourceConversationId:
            index === 0 &&
            hasInheritedParentTurns &&
            visibleSubagentParentThreadId != null
              ? visibleSubagentParentThreadId
              : undefined,
          preserveServerUserMessages: item.preserveServerUserMessages,
          renderMcpApps: renderMcpAppsMode,
          requests: item.requests,
          resolvedApps,
          showInProgressFixedContent:
            showInProgressFixedContent &&
            index === visibleTurnEntries.length - 1,
          turn: item.turn,
          turnId,
          turnKey: item.turnSearchKey,
          turnSearchKey: item.turnSearchKey,
          isBackgroundSubagentsEnabled,
        },
      ];
      for (let candidateEntry of candidateEntries) {
        let previousEntry = previousEntriesByTurnKey.get(
          candidateEntry.turnKey,
        );
        if (
          previousEntry != null &&
          areTurnListEntriesEquivalent(previousEntry, candidateEntry)
        ) {
          nextEntries.push(previousEntry);
          continue;
        }
        didEntriesChange = true;
        nextEntries.push(candidateEntry);
      }
    }),
    !didEntriesChange &&
      previousEntries.length !== nextEntries.length &&
      (didEntriesChange = true),
    !didEntriesChange)
  ) {
    for (let [entryIndex, candidateEntry] of nextEntries.entries())
      if (previousEntries[entryIndex] !== candidateEntry) {
        didEntriesChange = true;
        break;
      }
  }
  return didEntriesChange ? nextEntries : previousEntries;
}
function collectGeneratedImagesForVisibleTurns({
  isBackgroundSubagentsEnabled,
  previousEntries,
  projectlessOutputDirectory,
  visibleTurnEntries,
}) {
  let previousGeneratedImages = previousEntries[0]?.generatedImages,
    matchingEntryCount = 0,
    lastMatchedTurnSearchKey = null;
  for (let previousEntry of previousEntries)
    if (previousEntry.turnSearchKey !== lastMatchedTurnSearchKey) {
      if (
        ((lastMatchedTurnSearchKey = previousEntry.turnSearchKey),
        visibleTurnEntries[matchingEntryCount]?.turn !== previousEntry.turn)
      ) {
        matchingEntryCount = null;
        break;
      }
      matchingEntryCount++;
    }
  let reusedGeneratedImages = [],
    entriesNeedingImageScan = visibleTurnEntries;
  matchingEntryCount != null &&
    matchingEntryCount > 0 &&
    previousGeneratedImages != null &&
    ((reusedGeneratedImages = previousGeneratedImages),
    (entriesNeedingImageScan = visibleTurnEntries.slice(matchingEntryCount)));
  let generatedImages = [
    ...reusedGeneratedImages,
    ...entriesNeedingImageScan.flatMap(
      ({ preserveServerUserMessages, requests, turn }) => {
        if (
          !turn.items.some(
            (item) => item.type === "imageGeneration" && item.src != null,
          )
        )
          return [];
        let renderedTurn = lt(turn, requests, {
            isBackgroundSubagentsEnabled,
            preserveServerUserMessages,
          }),
          { assistantItem, toolOutputItems } = Zc(
            renderedTurn.items,
            renderedTurn.status,
          ),
          endResourcePaths = collectEndResourcePaths(
            collectAssistantOutputArtifacts({
              assistantContent: assistantItem?.content ?? null,
              projectlessOutputDirectory,
              turn: renderedTurn,
            }),
          );
        return Ts({
          completedGeneratedImages: toolOutputItems.filter(
            (item) => item.src != null,
          ),
          endResourcePaths,
          hasPendingGeneratedImages: false,
        }).visibleCompletedGeneratedImages;
      },
    ),
  ];
  return turnListEntryDeepEqualModule.default(
    previousGeneratedImages,
    generatedImages,
  )
    ? previousGeneratedImages
    : generatedImages;
}
function areTurnListEntriesEquivalent(previousEntry, nextEntry) {
  return (
    previousEntry.conversationId === nextEntry.conversationId &&
    previousEntry.cwd === nextEntry.cwd &&
    previousEntry.hostId === nextEntry.hostId &&
    previousEntry.isCollapsed === nextEntry.isCollapsed &&
    previousEntry.isMostRecentTurn === nextEntry.isMostRecentTurn &&
    previousEntry.isReadOnly === nextEntry.isReadOnly &&
    previousEntry.totalTurnCount === nextEntry.totalTurnCount &&
    previousEntry.turnNumber === nextEntry.turnNumber &&
    previousEntry.isProjectlessConversation ===
      nextEntry.isProjectlessConversation &&
    previousEntry.modelProvider === nextEntry.modelProvider &&
    previousEntry.onEditLastTurnMessage === nextEntry.onEditLastTurnMessage &&
    previousEntry.onForkTurnMessage === nextEntry.onForkTurnMessage &&
    previousEntry.completedThreadGoal === nextEntry.completedThreadGoal &&
    previousEntry.generatedImages === nextEntry.generatedImages &&
    previousEntry.onSetCollapsedForTurn === nextEntry.onSetCollapsedForTurn &&
    previousEntry.parentThreadAttachmentSourceConversationId ===
      nextEntry.parentThreadAttachmentSourceConversationId &&
    previousEntry.preserveServerUserMessages ===
      nextEntry.preserveServerUserMessages &&
    previousEntry.renderMcpApps === nextEntry.renderMcpApps &&
    previousEntry.requests === nextEntry.requests &&
    previousEntry.resolvedApps === nextEntry.resolvedApps &&
    previousEntry.showInProgressFixedContent ===
      nextEntry.showInProgressFixedContent &&
    previousEntry.turn === nextEntry.turn &&
    previousEntry.turnId === nextEntry.turnId &&
    previousEntry.turnKey === nextEntry.turnKey &&
    previousEntry.turnSearchKey === nextEntry.turnSearchKey &&
    areTranscriptBlocksEquivalent(
      previousEntry.transcriptBlock,
      nextEntry.transcriptBlock,
    ) &&
    previousEntry.includeTranscriptTurnExtras ===
      nextEntry.includeTranscriptTurnExtras &&
    previousEntry.isBackgroundSubagentsEnabled ===
      nextEntry.isBackgroundSubagentsEnabled
  );
}
function areTranscriptBlocksEquivalent(
  previousTranscriptBlock,
  nextTranscriptBlock,
) {
  return previousTranscriptBlock == null || nextTranscriptBlock == null
    ? previousTranscriptBlock === nextTranscriptBlock
    : previousTranscriptBlock.type === nextTranscriptBlock.type &&
        previousTranscriptBlock.key === nextTranscriptBlock.key;
}
var turnListEntryDeepEqualModule,
  initTurnListEntryComparisonChunk = once(() => {
    toEsModule(loadGroupByModule(), 1);
    turnListEntryDeepEqualModule = toEsModule(loadIsEqualModule(), 1);
    qs();
    initConversationArtifactRuntime();
    initMarkdownResourceHelpers();
    Fc();
  });
function buildThreadFindItemsForVisibleTurns({
  isConversationHistoryComplete,
  isAppgenEndCardEnabled,
  isBackgroundSubagentsEnabled,
  modelProvider,
  projectlessOutputDirectory,
  visibleTurnEntries,
}) {
  return isConversationHistoryComplete
    ? visibleTurnEntries.flatMap((item) => {
        let cachedThreadFindItems = threadFindItemsCache.get(item.turn);
        if (
          cachedThreadFindItems?.isAppgenEndCardEnabled ===
            isAppgenEndCardEnabled &&
          cachedThreadFindItems.isBackgroundSubagentsEnabled ===
            isBackgroundSubagentsEnabled &&
          cachedThreadFindItems.modelProvider === modelProvider &&
          cachedThreadFindItems.preserveServerUserMessages ===
            item.preserveServerUserMessages &&
          cachedThreadFindItems.projectlessOutputDirectory ===
            projectlessOutputDirectory &&
          cachedThreadFindItems.requests === item.requests &&
          cachedThreadFindItems.turnSearchKey === item.turnSearchKey
        )
          return cachedThreadFindItems.items;
        let renderedTurn = lt(item.turn, item.requests, {
            isBackgroundSubagentsEnabled,
            preserveServerUserMessages: item.preserveServerUserMessages,
          }),
          renderedItems = renderedTurn.items,
          assistantResponseByUserItemIndex = new Map(),
          latestUserMessageIndex = null,
          latestAssistantContent = "";
        for (let [itemIndex, renderedItem] of renderedItems.entries())
          renderedItem.type === "user-message"
            ? (latestUserMessageIndex = itemIndex)
            : renderedItem.type === "assistant-message" &&
              ((latestAssistantContent = renderedItem.content),
              latestUserMessageIndex != null &&
                assistantResponseByUserItemIndex.set(
                  latestUserMessageIndex,
                  renderedItem.content,
                ));
        let previewOutputs = buildThreadFindPreviewOutputs({
            assistantContent: latestAssistantContent,
            generatedImageSources: renderedItems.flatMap((renderedItem) =>
              renderedItem.type === "generated-image" &&
              renderedItem.src != null
                ? [renderedItem.src]
                : [],
            ),
            isAppgenEndCardEnabled,
            projectlessOutputDirectory,
            turn: renderedTurn,
          }),
          turnKeyByItem = new Map(),
          threadFindItems = renderedItems.flatMap((renderedItem, index) => {
            let previewOutputsForItem =
              index === latestUserMessageIndex
                ? previewOutputs
                : EMPTY_THREAD_FIND_PREVIEW_OUTPUTS;
            return renderedItem.type === "user-message"
              ? [
                  {
                    getPreview: () => ({
                      outputs: previewOutputsForItem,
                      response:
                        assistantResponseByUserItemIndex.get(index) ?? "",
                    }),
                    id: Ta(item.turnSearchKey, `${index}:user`),
                    getLabel: () => renderedItem.message.trim(),
                    isHeartbeat: renderedItem.heartbeatTrigger != null,
                    turnKey:
                      turnKeyByItem.get(renderedItem) ?? item.turnSearchKey,
                  },
                ]
              : [];
          });
        return (
          threadFindItemsCache.set(item.turn, {
            isAppgenEndCardEnabled,
            isBackgroundSubagentsEnabled,
            items: threadFindItems,
            modelProvider,
            preserveServerUserMessages: item.preserveServerUserMessages,
            projectlessOutputDirectory,
            requests: item.requests,
            turnSearchKey: item.turnSearchKey,
          }),
          threadFindItems
        );
      })
    : EMPTY_THREAD_FIND_ITEMS;
}
var EMPTY_THREAD_FIND_ITEMS,
  threadFindItemsCache,
  initThreadFindItemsBuilder = once(() => {
    initPathHelpers();
    la();
    initGitActionDirectiveRuntime();
    di();
    initConversationArtifactRuntime();
    initMarkdownResourceHelpers();
    EMPTY_THREAD_FIND_ITEMS = [];
    threadFindItemsCache = new WeakMap();
  });
var initBackgroundAgentThreadTab = once(() => {});
async function openBackgroundAgentThreadTab(
  e,
  { backgroundAgent, hostId, TabComponent },
) {
  e.get(hasConversationSignal, backgroundAgent.conversationId) ||
    (await sendAppServerRequest("hydrate-background-threads", {
      hostId,
      threadIds: [backgroundAgent.conversationId],
    }));
  e.get(hasConversationSignal, backgroundAgent.conversationId) &&
    rightPanelTabsStore.openTab(e, TabComponent, {
      icon: <Uo className="icon-sm" seed={backgroundAgent.conversationId} />,
      props: {
        conversationId: backgroundAgent.conversationId,
      },
      id: `background-agent:${backgroundAgent.conversationId}`,
      title: backgroundAgent.displayName,
    });
}
var backgroundAgentThreadTabsJsxRuntime,
  initBackgroundAgentThreadTabs = once(() => {
    initConversationStateSelectors();
    initAppServerRequestBridge();
    Yi();
    rs();
    backgroundAgentThreadTabsJsxRuntime = getJsxRuntime();
  });
function LocalConversationConnectionStatus(props) {
  let { status } = props,
    spinnerIcon = localConversationConnectionStatusJsxRuntime.jsx(SpinnerIcon, {
      className: "icon-xs",
    });
  return (
    <div
      aria-live="polite"
      className="flex items-center justify-center gap-2 px-4 py-1 text-sm text-token-text-secondary"
      role="status"
    >
      {spinnerIcon}
      {status === "loading" ? (
        <FormattedMessage
          id="localConversation.loadingThread"
          defaultMessage="Loading thread…"
          description="Status shown above the composer while loading a thread"
        />
      ) : (
        <FormattedMessage
          id="localConversation.reconnectingToCodex"
          defaultMessage="Reconnecting to Codex…"
          description="Status shown above the composer while reconnecting to the Codex app server"
        />
      )}
    </div>
  );
}
var localConversationConnectionStatusModule,
  localConversationConnectionStatusJsxRuntime,
  initLocalConversationConnectionStatusChunk = once(() => {
    localConversationConnectionStatusModule = getChunkModuleExports();
    initIntlRuntime();
    initSpinnerComponent();
    localConversationConnectionStatusJsxRuntime = getJsxRuntime();
  });
function useMarkConversationReadOnVisibility(conversationId, hasConversation) {
  let isUnread =
      useScopedValue(conversationUnreadSignal, conversationId) ?? false,
    isWindowVisible = useSignalValue(windowVisibleSignal),
    conversationReadMarker = useScopedValue(
      latestConversationTurnSignal,
      conversationId,
    ),
    conversationReadState = useScopedValue(
      conversationReadStateSignal,
      conversationId,
    ),
    lastMarkedConversationIdRef = _S.useRef(null),
    lastConversationReadStateRef = _S.useRef(null),
    lastConversationReadMarkerRef = _S.useRef(null),
    markConversationRead = () => {
      lastMarkedConversationIdRef.current = conversationId;
      lastConversationReadStateRef.current = conversationReadState;
      lastConversationReadMarkerRef.current = conversationReadMarker;
      !(!hasConversation || !isUnread) &&
        sendAppServerRequest("mark-conversation-as-read", {
          conversationId,
        });
    };
  let markConversationReadEvent = useStableCallback(markConversationRead),
    markConversationReadHandler = () => {
      markConversationReadEvent();
    };
  let markConversationReadEffectEvent = _S.useEffectEvent(
      markConversationReadHandler,
    ),
    markVisibleConversationReadEffect = () => {
      if (!(!hasConversation || isWindowVisible !== true)) {
        if (lastMarkedConversationIdRef.current !== conversationId) {
          markConversationReadEffectEvent();
          return;
        }
        (lastConversationReadStateRef.current === conversationReadState &&
          lastConversationReadMarkerRef.current === conversationReadMarker) ||
          markConversationReadEffectEvent();
      }
    };
  let markReadEffectDeps;
  return (
    (markReadEffectDeps = [
      conversationId,
      hasConversation,
      isUnread,
      isWindowVisible,
      conversationReadState,
      conversationReadMarker,
    ]),
    _S.useEffect(markVisibleConversationReadEffect, markReadEffectDeps),
    markConversationReadEvent
  );
}
var markConversationReadEffectModule,
  _S,
  initMarkConversationReadEffect = once(() => {
    markConversationReadEffectModule = getChunkModuleExports();
    initScopeRuntime();
    _S = toEsModule(loadReactModule(), 1);
    initConversationStateSelectors();
    initAppServerRequestBridge();
    bo();
    initKeyboardShortcutLabel();
  });
function useResumeLocalConversation(conversationId) {
  let scope = useScope(appScope),
    intl = useIntl(),
    { activeMode } = Us(conversationId),
    { data } = useSignalValue(workspaceRootsSignal),
    workspaceRoots = data?.roots,
    shouldResumeConversation = useScopedValue(
      shouldResumeConversationSignal,
      conversationId,
    );
  useScopedValue(conversationHostIdSignal, conversationId);
  let [isResuming, setIsResuming] =
      localConversationThreadRouteReactRuntime.useState(
        shouldResumeConversation,
      ),
    activeResumeConversationIdRef =
      localConversationThreadRouteReactRuntime.useRef(null),
    retryTimerRef = localConversationThreadRouteReactRuntime.useRef(null),
    hasShownResumeErrorRef =
      localConversationThreadRouteReactRuntime.useRef(false),
    blockedAutoRetryConversationIdRef =
      localConversationThreadRouteReactRuntime.useRef(null),
    [retryTick, setRetryTick] =
      localConversationThreadRouteReactRuntime.useState(0),
    resumeConversation =
      localConversationThreadRouteReactRuntime.useEffectEvent(
        async (resumeConversationId) => {
          try {
            setIsResuming(true);
            activeResumeConversationIdRef.current = resumeConversationId;
            let resumeHostId = scope.get(
              conversationHostIdSignal,
              resumeConversationId,
            );
            await sendAppServerRequest("maybe-resume-conversation", {
              hostId: resumeHostId,
              conversationId: resumeConversationId,
              model: null,
              serviceTier: await Ma(
                scope,
                resumeHostId,
                activeMode?.settings.model ?? null,
              ),
              reasoningEffort: null,
              workspaceRoots: workspaceRoots ?? [],
              collaborationMode: activeMode,
              showThreadGoalResumeConfirmation: false,
            });
          } catch (error) {
            if (
              (logger.error("Failed to resume conversation", {
                safe: {},
                sensitive: {
                  conversationId: resumeConversationId,
                  error,
                },
              }),
              activeResumeConversationIdRef.current !== resumeConversationId)
            )
              return;
            let hostId = scope.get(
                conversationRemoteHostIdSignal,
                resumeConversationId,
              ),
              isArchiving =
                hostId == null
                  ? false
                  : await sendAppServerRequest(
                      "get-is-conversation-archiving-for-host",
                      {
                        hostId,
                        conversationId: resumeConversationId,
                      },
                    );
            if (
              hostId == null ||
              isArchiving ||
              !scope.get(shouldResumeConversationSignal, resumeConversationId)
            ) {
              hasShownResumeErrorRef.current = false;
              return;
            }
            let isSubagentChildThread =
                scope.get(subagentParentThreadIdSignal, resumeConversationId) !=
                null,
              shouldAutoRetry = shouldAutoRetryResumeError(error);
            shouldAutoRetry ||
              (blockedAutoRetryConversationIdRef.current =
                resumeConversationId);
            shouldShowResumeErrorToast({
              hasShownResumeError: hasShownResumeErrorRef.current,
              isSubagentChildThread,
              shouldAutoRetry,
            }) &&
              (scope
                .get(toastSignal)
                .danger(formatResumeConversationError(intl, error), {
                  id: `resume-task-error-${resumeConversationId}`,
                }),
              (hasShownResumeErrorRef.current = true));
            shouldAutoRetry &&
              retryTimerRef.current == null &&
              (retryTimerRef.current = setTimeout(() => {
                retryTimerRef.current = null;
                setRetryTick((currentRetryTick) => currentRetryTick + 1);
              }, 750));
          } finally {
            activeResumeConversationIdRef.current === resumeConversationId &&
              ((activeResumeConversationIdRef.current = null),
              setIsResuming(false));
          }
        },
      );
  return (
    localConversationThreadRouteReactRuntime.useEffect(() => {
      shouldResumeConversation ||
        ((activeResumeConversationIdRef.current = null),
        (hasShownResumeErrorRef.current = false),
        blockedAutoRetryConversationIdRef.current === conversationId &&
          (blockedAutoRetryConversationIdRef.current = null),
        retryTimerRef.current != null &&
          (clearTimeout(retryTimerRef.current),
          (retryTimerRef.current = null)));
    }, [conversationId, shouldResumeConversation]),
    localConversationThreadRouteReactRuntime.useEffect(() => {
      blockedAutoRetryConversationIdRef.current = null;
    }, [conversationId]),
    localConversationThreadRouteReactRuntime.useEffect(() => {
      if (conversationId != null)
        return scope.watch(({ get }) => {
          let hostId = get(conversationRemoteHostIdSignal, conversationId);
          hostId != null &&
            get(subagentParentThreadIdSignal, conversationId) != null &&
            vscodeMessageBridge.dispatchMessage("subagent-thread-opened", {
              hostId,
              conversationId: conversationId,
            });
        });
    }, [conversationId, scope]),
    localConversationThreadRouteReactRuntime.useEffect(() => {
      conversationId &&
        shouldResumeConversation &&
        conversationId !== activeResumeConversationIdRef.current &&
        conversationId !== blockedAutoRetryConversationIdRef.current &&
        resumeConversation(conversationId);
    }, [shouldResumeConversation, conversationId, retryTick]),
    localConversationThreadRouteReactRuntime.useEffect(
      () => () => {
        retryTimerRef.current != null &&
          (clearTimeout(retryTimerRef.current), (retryTimerRef.current = null));
      },
      [],
    ),
    {
      isResuming: shouldResumeConversation && isResuming,
    }
  );
}
function formatResumeConversationError(intl, error) {
  let configErrorDetails = getResumeConfigErrorDetails(error);
  return configErrorDetails == null
    ? intl.formatMessage(
        {
          id: "localTaskRow.resumeError.v2",
          defaultMessage: "Failed to resume chat{br}{error}",
          description: "Error shown when resuming a local Codex task fails",
        },
        {
          br: <br />,
          error: getErrorMessage(error),
        },
      )
    : intl.formatMessage(
        {
          id: "localTaskRow.resumeConfigError",
          defaultMessage:
            "Codex can't load config.toml, so this thread can't resume.{br}Fix {location}: {detail}. After saving the file, reopen the thread.",
          description:
            "Error shown when a local Codex thread cannot resume because config.toml is invalid",
        },
        {
          br: <br />,
          location: configErrorDetails.location,
          detail: configErrorDetails.detail,
        },
      );
}
function shouldAutoRetryResumeError(error) {
  return getResumeConfigErrorDetails(error) == null;
}
function shouldShowResumeErrorToast({
  hasShownResumeError,
  isSubagentChildThread,
  shouldAutoRetry,
}) {
  return !isSubagentChildThread && (!hasShownResumeError || !shouldAutoRetry);
}
function getResumeConfigErrorDetails(error) {
  let configError = parseConfigLoadError(error);
  return configError == null
    ? null
    : {
        location:
          configError.filePath == null
            ? "config.toml"
            : configError.line == null || configError.column == null
              ? configError.filePath
              : `${configError.filePath}:${configError.line}:${configError.column}`,
        detail: configError.detail,
      };
}
var localConversationThreadRouteReactRuntime,
  localConversationThreadRouteJsxRuntime,
  initLocalConversationThreadRoute = once(() => {
    initScopeRuntime();
    initPathHelpers();
    localConversationThreadRouteReactRuntime = toEsModule(loadReactModule(), 1);
    initIntlRuntime();
    initConversationStateSelectors();
    initAppServerRequestBridge();
    Ha();
    initToastRuntime();
    Vs();
    initVscodeMessageBridge();
    initAppScope();
    initHostWorkspaceQueries();
    initHostConfigHelpers();
    initLoggerRuntime();
    localConversationThreadRouteJsxRuntime = getJsxRuntime();
  });
function turnHasMcpAppResource(entry) {
  return (
    entry?.turn.items.some(
      (e) => e.type === "mcpToolCall" && e.mcpAppResourceUri != null,
    ) === true
  );
}
export interface LocalConversationThreadProps {
  conversationId?: string | null;
  shouldResume?: boolean;
  allowMissingConversation?: boolean;
  showExternalFooter?: boolean;
  composerSurfaceClassName?: string;
  footerContent?: RenderableThreadNode;
  isReadOnly?: boolean;
  showComposer?: boolean;
  lockedCollaborationMode?: unknown;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}
export function LocalConversationThread(props: LocalConversationThreadProps) {
  let {
    conversationId,
    shouldResume = true,
    allowMissingConversation = false,
    showExternalFooter = true,
    composerSurfaceClassName,
    footerContent,
    isReadOnly = false,
    showComposer = true,
    lockedCollaborationMode,
    onOpenBackgroundAgent,
  } = props;
  if (!conversationId) {
    let e;
    return localConversationThreadJsxRuntime.jsx(Navigate, {
      to: "/",
    });
  }
  return (
    <LocalConversationThreadRoute
      conversationId={conversationId}
      shouldResume={shouldResume}
      allowMissingConversation={allowMissingConversation}
      showExternalFooter={showExternalFooter}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      isReadOnly={isReadOnly}
      showComposer={showComposer}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
    />
  );
}
function LocalConversationSideChatThread(props) {
  let { conversationId, lockedCollaborationMode, target } = props,
    scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    isExpiredSideChat = useScopedValue(expiredSideChatSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    sourceConversationId = getLocalThreadConversationIdFromRoute(scope.value),
    isBackgroundSubagentsEnabled = ns();
  if (!hasConversation)
    return (
      <ExpiredSideChatState
        conversationId={conversationId}
        sourceConversationId={sourceConversationId}
        target={target}
      />
    );
  let sideChatHeader =
    isExpiredSideChat === true ? null : (
      <Gc conversationId={conversationId} hostId={hostId} />
    );
  let threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "side",
      sourceConversationId,
    ),
    expiredSideChatBanner =
      isExpiredSideChat === true ? (
        <ExpiredSideChatState
          conversationId={conversationId}
          presentation="banner"
          sourceConversationId={sourceConversationId}
          target={target}
        />
      ) : undefined;
  let isReadOnly = isExpiredSideChat === true,
    showComposer = isExpiredSideChat !== true,
    threadFrame = (
      <LocalConversationThreadFrame
        conversationId={conversationId}
        hasConversation={hasConversation}
        hostId={hostId}
        isResuming={false}
        showExternalFooter={false}
        footerContent={expiredSideChatBanner}
        isReadOnly={isReadOnly}
        lockedCollaborationMode={lockedCollaborationMode}
        showComposer={showComposer}
        isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      />
    );
  return (
    <>
      {sideChatHeader}
      <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
        {threadFrame}
      </ScopeValueProvider>
    </>
  );
}
function ExpiredSideChatState(props) {
  let {
      conversationId,
      presentation = "page",
      sourceConversationId,
      target,
    } = props,
    scope = useScope(localConversationRouteScope),
    intl = useIntl(),
    sourceCwd = useScopedValue(conversationCwdSignal, sourceConversationId),
    sourceHostId = useScopedValue(
      conversationHostIdSignal,
      sourceConversationId,
    ),
    sourceCollaborationMode = useScopedValue(
      conversationCollaborationModeSignal,
      sourceConversationId,
    ),
    displayTitle = useScopedValue(
      va(target).tabById$,
      `sidechat:${conversationId}`,
    )?.title,
    [isRecreatingSideChat, setIsRecreatingSideChat] =
      localConversationThreadReactRuntime.useState(false),
    recreateSideChat = () => {
      sourceConversationId == null ||
        isRecreatingSideChat ||
        (setIsRecreatingSideChat(true),
        jd(scope, LocalConversationSideChatThread, {
          sourceConversationId,
          cwd: sourceCwd,
          hostId: sourceHostId,
          collaborationMode: sourceCollaborationMode,
          displayTitle,
          intl,
          target,
        }).catch((error) => {
          setIsRecreatingSideChat(false);
          logger.error("Error recreating expired side chat", {
            safe: {},
            sensitive: {
              error,
            },
          });
          scope.get(toastSignal).danger(
            intl.formatMessage({
              id: "localConversation.sideChat.recreateError",
              defaultMessage: "Failed to start a new side chat",
              description:
                "Error message shown when recreating an expired side chat fails",
            }),
          );
        }));
    };
  let expiredTitle = (
      <FormattedMessage
        id="localConversation.sideChat.expired.title"
        defaultMessage="Side chat expired"
        description="Title shown when an ephemeral side chat can no longer be continued"
      />
    ),
    expiredDescription = (
      <FormattedMessage
        id="localConversation.sideChat.expired.description"
        defaultMessage="This temporary side chat is no longer available; start a new side chat to continue"
        description="Description shown when an ephemeral side chat must be recreated"
      />
    ),
    actionButton =
      sourceConversationId == null
        ? null
        : localConversationThreadJsxRuntime.jsx(Button, {
            loading: isRecreatingSideChat,
            onClick: recreateSideChat,
            children: (
              <FormattedMessage
                id="localConversation.sideChat.expired.action"
                defaultMessage="Start new side chat"
                description="Button label to replace an expired side chat"
              />
            ),
          });
  if (presentation === "banner") {
    return localConversationThreadJsxRuntime.jsx($s, {
      type: "info",
      layout: "vertical",
      title: expiredTitle,
      content: expiredDescription,
      customCtas: actionButton,
    });
  }
  return localConversationThreadJsxRuntime.jsx($c, {
    className: "h-full",
    spacing: "compact",
    title: expiredTitle,
    description: expiredDescription,
    actions: actionButton,
  });
}
function LocalConversationMainThread(props) {
  let { conversationId } = props,
    scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = ns(),
    { isResuming } = useResumeLocalConversation(conversationId),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      conversationId={conversationId}
      hasConversation={hasConversation}
      hostId={hostId}
      isResuming={isResuming}
      showExternalFooter={false}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
    />
  );
  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}
export interface LocalConversationSummaryThreadProps {
  conversationId: string;
  header?: RenderableThreadNode;
  onOpenBackgroundAgent?: BackgroundAgentOpenHandler;
}
export function LocalConversationSummaryThread(
  props: LocalConversationSummaryThreadProps,
) {
  let { conversationId, header, onOpenBackgroundAgent } = props,
    scope = useScope(localConversationRouteScope),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    isBackgroundSubagentsEnabled = ns(),
    threadRouteTarget = createLocalConversationRouteTarget(
      conversationId,
      "main",
      getLocalThreadConversationIdFromRoute(scope.value),
    );
  let threadFrame = (
    <LocalConversationThreadFrame
      conversationId={conversationId}
      hasConversation={hasConversation}
      header={header}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={true}
      isResuming={false}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      showComposer={false}
      showExternalFooter={false}
    />
  );
  return (
    <ScopeValueProvider scope={composerScope} value={threadRouteTarget}>
      {threadFrame}
    </ScopeValueProvider>
  );
}
function LocalConversationThreadRoute(props) {
  let {
      conversationId,
      shouldResume = true,
      allowMissingConversation = false,
      showExternalFooter = true,
      composerSurfaceClassName,
      footerContent,
      isReadOnly = false,
      showComposer = true,
      lockedCollaborationMode,
      onOpenBackgroundAgent,
    } = props,
    scope = useScope(localConversationRouteScope),
    isBackgroundSubagentsEnabled = ns(),
    { data } = useSignalValue(launcherHotkeyStateQuery),
    hasConfiguredLauncherHotkey = data == null || data.configuredHotkey != null,
    launcherFallbackPath = getHotkeyWindowFallbackPath(
      hasConfiguredLauncherHotkey,
    ),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId);
  useScopedValue(conversationCwdSignal, conversationId);
  useScopedValue(threadSourceSignal, conversationId);
  let resolvedAppsQueryOptions = {
    enabled: false,
    hostId,
  };
  useAppsQuery(resolvedAppsQueryOptions);
  let isRightPanelFullWidth = useSignalValue(rightPanelFullWidthSignal),
    hideThreadContent = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth,
      routeConversationId: getLocalThreadConversationIdFromRoute(scope.value),
    });
  let summaryPanelDisplay = usePinnedSummaryPanelDisplay(conversationId),
    summaryPanelModel = useLocalConversationSummaryPanelModel(
      summaryPanelDisplay.shouldShow,
    ),
    { isResuming } = useResumeLocalConversation(
      shouldResume ? (conversationId ?? null) : null,
    ),
    subagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null,
    intl = useIntl(),
    navigate = useNavigate(),
    hasSeenConversationRef = localConversationThreadReactRuntime.useRef(false),
    lastSubagentParentThreadIdRef =
      localConversationThreadReactRuntime.useRef(null),
    rememberSubagentParentThreadId,
    rememberSubagentParentThreadIdDeps;
  rememberSubagentParentThreadId = () => {
    visibleSubagentParentThreadId != null &&
      (lastSubagentParentThreadIdRef.current = visibleSubagentParentThreadId);
  };
  rememberSubagentParentThreadIdDeps = [visibleSubagentParentThreadId];
  localConversationThreadReactRuntime.useEffect(
    rememberSubagentParentThreadId,
    rememberSubagentParentThreadIdDeps,
  );
  let handleMissingConversation = () => {
    if (!allowMissingConversation) {
      if (hasConversation) {
        hasSeenConversationRef.current = true;
        return;
      }
      if (!isResuming) {
        if (hasSeenConversationRef.current) {
          let lastSubagentParentThreadId =
            lastSubagentParentThreadIdRef.current;
          if (lastSubagentParentThreadId != null) {
            navigate(
              getConversationNavigationPath(lastSubagentParentThreadId),
              {
                replace: true,
              },
            );
            return;
          }
          navigate(Fs() ? launcherFallbackPath : "/", {
            replace: true,
          });
          return;
        }
        scope.get(toastSignal).danger(
          intl.formatMessage({
            id: "localConversationPage.error.toast",
            defaultMessage: "Conversation not found",
            description:
              "Error message for when the local conversation is not found",
          }),
        );
      }
    }
  };
  let missingConversationEffectDeps;
  missingConversationEffectDeps = [
    allowMissingConversation,
    hasConversation,
    isResuming,
    subagentParentThreadId,
    launcherFallbackPath,
    scope,
    intl,
    navigate,
  ];
  localConversationThreadReactRuntime.useEffect(
    handleMissingConversation,
    missingConversationEffectDeps,
  );
  let handleVisibleThreadContentReady = (turnCount) => {
    threadSwitchTimingTracker.complete(scope, "thread_switch_completed", {
      conversationId,
      turnCount,
    });
  };
  let onVisibleThreadContentReady = useStableCallback(
      handleVisibleThreadContentReady,
    ),
    handleOpenBackgroundAgent = (backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
      );
    };
  let onOpenBackgroundAgentFromSummary = useStableCallback(
      handleOpenBackgroundAgent,
    ),
    headerContent = (
      <ChromeExtensionConversationHeader conversationId={conversationId} />
    ),
    contentX = hideThreadContent ? undefined : summaryPanelDisplay.contentShift,
    renderSummaryPanelErrorFallback = (errorBoundary) => (
      <SummaryPanelErrorFallback
        display={summaryPanelDisplay}
        onRetry={() => {
          errorBoundary.resetError();
        }}
      />
    );
  let summaryPanel = localConversationThreadJsxRuntime.jsx(
    FloatingLocalConversationSummaryPanel,
    {
      ...summaryPanelDisplay,
      ...summaryPanelModel,
      onOpenBackgroundAgent: onOpenBackgroundAgentFromSummary,
    },
  );
  let floatingSummaryPanel = localConversationThreadJsxRuntime.jsx(
    PlatformContentGate,
    {
      browser: true,
      electron: true,
      children: localConversationThreadJsxRuntime.jsx(fs, {
        name: "ThreadSummaryPanel",
        fallback: renderSummaryPanelErrorFallback,
        children: summaryPanel,
      }),
    },
  );
  return (
    <LocalConversationThreadFrame
      key={conversationId}
      conversationId={conversationId}
      contentX={contentX}
      floatingContent={floatingSummaryPanel}
      hasConversation={hasConversation}
      header={headerContent}
      hideThreadContent={hideThreadContent}
      hostId={hostId}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      isReadOnly={isReadOnly}
      isResuming={isResuming}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      showComposer={showComposer}
      showExternalFooter={showExternalFooter}
    />
  );
}
function SummaryPanelErrorFallback(props) {
  let { display, onRetry } = props;
  if (!display.shouldShow) return null;
  let panelStyle = {
    width: 300,
  };
  let title = (
    <div className="mb-2 font-medium text-token-text-primary">
      <FormattedMessage
        id="localConversation.summaryPanelRenderError.title"
        defaultMessage="Summary panel couldn't render"
        description="Error message shown when the conversation summary panel fails to render"
      />
    </div>
  );
  let retryLabel = (
    <FormattedMessage
      id="localConversation.summaryPanelRenderError.retry"
      defaultMessage="Try again"
      description="Button label to retry rendering the conversation summary panel"
    />
  );
  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        <div className="max-h-full min-h-0 pe-4">
          <div
            data-pip-obstacle="thread-summary-panel"
            className="pointer-events-auto rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary shadow-lg"
            style={panelStyle}
          >
            {title}
            {localConversationThreadJsxRuntime.jsx(Button, {
              color: "secondary",
              size: "default",
              onClick: onRetry,
              children: retryLabel,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function ChromeExtensionConversationHeader(props) {
  let { conversationId } = props,
    scope = useScope(appScope),
    isBackgroundSubagentsEnabled = ns(),
    parentConversationId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    backgroundAgentSnapshot = useScopedValue(
      backgroundAgentSnapshotSignal,
      conversationId,
    ),
    backgroundAgentName = formatBackgroundAgentDisplayName({
      agentNickname:
        getSubagentSourceMetadata(backgroundAgentSnapshot)?.agentNickname ??
        null,
      conversationId,
    });
  let hasConversation = useScopedValue(hasConversationSignal, conversationId),
    title = useScopedValue(conversationTitleSignal, conversationId),
    cwd = useScopedValue(conversationCwdSignal, conversationId),
    projectlessOutputDirectory = useScopedValue(
      projectlessOutputDirectorySignal,
      conversationId,
    ),
    navigate = useNavigate(),
    getConversationMarkdown = () => {
      let { visibleTurnEntries } = scope.get(
        localConversationVisibleTurnEntriesSignal,
        {
          conversationId,
          isBackgroundSubagentsEnabled,
        },
      );
      return renderLocalConversationMarkdownForTurns({
        cwd,
        isBackgroundSubagentsEnabled,
        projectlessOutputDirectory,
        title,
        visibleTurnEntries,
      });
    };
  if (!hasConversation) return null;
  let onBack =
    parentConversationId == null
      ? undefined
      : () => {
          navigate(getLocalConversationPath(parentConversationId));
        };
  let headerTitle =
    parentConversationId == null ? (
      title
    ) : (
      <span className="flex min-w-0 items-center gap-1">
        <span className="truncate">{title}</span>
        <span className="flex shrink-0 items-center gap-1 font-medium">
          <Uo className="icon-2xs" seed={conversationId} aria-hidden={true} />
          <span>{backgroundAgentName}</span>
        </span>
      </span>
    );
  let trailingActions = localConversationThreadJsxRuntime.jsx(
    PlatformContentGate,
    {
      extension: true,
      children: (
        <Pd
          conversationId={conversationId}
          getConversationMarkdown={getConversationMarkdown}
          markdownParentConversationId={parentConversationId}
          cwd={cwd}
          title={title}
          canPin={false}
          hideForkActions={true}
        />
      ),
    },
  );
  return localConversationThreadJsxRuntime.jsx(PlatformContentGate, {
    chromeExtension: true,
    extension: true,
    children: (
      <ChromeExtensionHeader
        desktopDeepLinkConversationId={conversationId}
        onBack={onBack}
        title={headerTitle}
        trailing={trailingActions}
      />
    ),
  });
}
function shouldShowEmptyResumingThreadState({
  conversationTurns,
  hasRenderableTurns,
  isResuming,
  isSubagentThread,
}) {
  return (
    !isSubagentThread &&
    isResuming &&
    (!hasRenderableTurns ||
      (conversationTurns.length === 1 &&
        conversationTurns[0]?.turnId == null &&
        conversationTurns[0]?.status === "completed" &&
        conversationTurns[0]?.error == null &&
        conversationTurns[0]?.items.length === 0))
  );
}
function getConversationNavigationPath(conversationId) {
  return Fs()
    ? getHotkeyWindowThreadPath(conversationId)
    : getLocalConversationPath(conversationId);
}
function LocalConversationThreadFrame(props) {
  let {
      conversationId,
      contentX,
      floatingContent,
      hasConversation,
      header,
      hideThreadContent = false,
      hostId,
      isBackgroundSubagentsEnabled,
      isReadOnly = false,
      isResuming,
      lockedCollaborationMode,
      composerSurfaceClassName,
      footerContent,
      onVisibleThreadContentReady,
      onOpenBackgroundAgent,
      showComposer = true,
      showExternalFooter,
    } = props,
    scope = useScope(localConversationRouteScope),
    isConversationHistoryComplete =
      useScopedValue(conversationHistoryCompleteSignal, conversationId) ?? true,
    visibleSubagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    isScrollToTopEnabled = useStatsigGate("1579719221"),
    shouldShowSummaryPanelObstacles = useStatsigGate("3563904085"),
    savedThreadScrollState = scope.get(threadScrollStateSignal, conversationId);
  let savedScrollState = savedThreadScrollState,
    initialScrollOffset = savedScrollState?.distanceFromBottomPx ?? null,
    initialVirtualizedTurnListRestoreState =
      savedScrollState?.virtualizedTurnList ?? null,
    [isScrolledFromBottom, setIsScrolledFromBottom] =
      localConversationThreadReactRuntime.useState(false),
    [scrollDistanceFromBottomPx, setScrollDistanceFromBottomPx] =
      localConversationThreadReactRuntime.useState(0),
    [responseSpacerState, setResponseSpacerState] =
      localConversationThreadReactRuntime.useState(null),
    latestTurnSubmitPlacementRef =
      localConversationThreadReactRuntime.useRef(null),
    [threadLayoutContainer, setThreadLayoutContainer] =
      localConversationThreadReactRuntime.useState(null),
    newChatShortcutRef = useNullAppShellRef(
      "chatgpt.supportsNewChatKeyShortcut",
    ),
    markConversationReadOnThreadInteraction =
      useMarkConversationReadOnVisibility(conversationId, hasConversation),
    loadOlderConversationHistoryPage = async () => {
      if (isConversationHistoryComplete) return "stop";
      try {
        return (
          await sendAppServerRequest("load-older-conversation-history-page", {
            conversationId,
            dependentConversationIds:
              visibleSubagentParentThreadId == null
                ? []
                : [visibleSubagentParentThreadId],
          }),
          await to(),
          (scope.get(conversationHistoryCompleteSignal, conversationId) ?? true)
            ? "stop"
            : "continue"
        );
      } catch (error) {
        let loadError = error;
        return (
          logger.warning("Failed to load older thread history", {
            safe: {
              conversationId,
            },
            sensitive: {
              error: loadError,
            },
          }),
          "stop"
        );
      }
    };
  let loadOlderConversationHistory = useStableCallback(
      loadOlderConversationHistoryPage,
    ),
    threadScrollLayoutApiRef = localConversationThreadReactRuntime.useRef(null),
    handleThreadScroll = (distanceFromBottomPx, isAtBottom) => {
      scope.set(
        threadScrollStateSignal,
        conversationId,
        (previousScrollState) => ({
          distanceFromBottomPx,
          latestTurn: isScrollToTopEnabled
            ? (previousScrollState?.latestTurn ?? null)
            : null,
          virtualizedTurnList: previousScrollState?.virtualizedTurnList ?? null,
        }),
      );
      setScrollDistanceFromBottomPx(distanceFromBottomPx);
      setIsScrolledFromBottom(!isAtBottom);
    };
  let onThreadScroll = useStableCallback(handleThreadScroll),
    handleVirtualizedTurnListRestoreStateChange = (
      virtualizedTurnListRestoreState,
    ) => {
      scope.set(
        threadScrollStateSignal,
        conversationId,
        (previousScrollState) => ({
          distanceFromBottomPx: previousScrollState?.distanceFromBottomPx ?? 0,
          latestTurn: isScrollToTopEnabled
            ? (previousScrollState?.latestTurn ?? null)
            : null,
          virtualizedTurnList: virtualizedTurnListRestoreState,
        }),
      );
    };
  let onVirtualizedTurnListRestoreStateChange = useStableCallback(
      handleVirtualizedTurnListRestoreStateChange,
    ),
    shouldShowScrollToBottomButtonNow = shouldShowScrollToBottomButton({
      isScrollToTopEnabled: isScrollToTopEnabled,
      isScrolledFromBottom: isScrolledFromBottom,
      responseSpacerHeightPx: responseSpacerState?.getHeightPx() ?? null,
      scrollDistanceFromBottomPx: scrollDistanceFromBottomPx,
    });
  let showScrollToBottomButton = shouldShowScrollToBottomButtonNow,
    scrollToBottom = () => {
      if (isScrollToTopEnabled && responseSpacerState != null) {
        responseSpacerState.scrollToBottom();
        return;
      }
      threadScrollLayoutApiRef.current?.scrollToBottom();
    };
  let onScrollToBottom = useStableCallback(scrollToBottom),
    prepareLatestTurnSubmitPlacement = (placement) => {
      let { distanceFromBottomPx, scrollHeightPx } = placement;
      hideThreadContent ||
        (latestTurnSubmitPlacementRef.current =
          createLatestTurnSubmitPlacementSnapshot({
            distanceFromBottomPx,
            responseSpacerHeightPx: responseSpacerState?.getHeightPx() ?? 0,
            scrollHeightPx,
          }));
    };
  let onPrepareLatestTurnSubmitPlacement = useStableCallback(
      prepareLatestTurnSubmitPlacement,
    ),
    consumePendingLatestTurnSubmitPlacement = () => {
      let placementSnapshot = latestTurnSubmitPlacementRef.current;
      return ((latestTurnSubmitPlacementRef.current = null), placementSnapshot);
    };
  let onConsumePendingLatestTurnSubmitPlacement = useStableCallback(
      consumePendingLatestTurnSubmitPlacement,
    ),
    clearPendingLatestTurnSubmitPlacement = () => {
      latestTurnSubmitPlacementRef.current = null;
    };
  let onClearPendingLatestTurnSubmitPlacement = useStableCallback(
      clearPendingLatestTurnSubmitPlacement,
    ),
    clearPlacementWhenThreadHidden,
    clearPlacementEffectDeps;
  clearPlacementWhenThreadHidden = () => {
    hideThreadContent && onClearPendingLatestTurnSubmitPlacement();
  };
  clearPlacementEffectDeps = [
    onClearPendingLatestTurnSubmitPlacement,
    hideThreadContent,
  ];
  localConversationThreadReactRuntime.useEffect(
    clearPlacementWhenThreadHidden,
    clearPlacementEffectDeps,
  );
  let handleThreadLayoutContainerRef = (containerElement) => {
    newChatShortcutRef.current = containerElement;
    setThreadLayoutContainer(containerElement);
  };
  let threadLayoutContainerRef = useStableCallback(
      handleThreadLayoutContainerRef,
    ),
    hasLiveMcpAppFrame = useSignalValue(liveMcpAppFrameSignal),
    shouldMountSummaryPanelObstacles =
      shouldShowSummaryPanelObstacles && hasConversation && !hideThreadContent,
    handleOpenBackgroundAgent = (backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
      );
    };
  let onOpenBackgroundAgentFromSummary = useStableCallback(
      handleOpenBackgroundAgent,
    ),
    summaryPanelObstaclesEffect = shouldMountSummaryPanelObstacles
      ? localConversationThreadJsxRuntime.jsx(
          RefreshSummaryPanelObstaclesEffect,
          {},
        )
      : null;
  let remoteHostedPipAnchorHostId = shouldMountSummaryPanelObstacles
      ? MAIN_THREAD_PIP_HOST_ID
      : undefined,
    footer = hasConversation ? (
      showComposer ? (
        <LocalConversationComposerFooter
          conversationId={conversationId}
          hostId={hostId}
          isResuming={isResuming}
          showExternalFooter={showExternalFooter}
          composerSurfaceClassName={composerSurfaceClassName}
          showScrollToBottomButton={showScrollToBottomButton}
          onScrollToBottom={onScrollToBottom}
          onPrepareLatestTurnSubmitPlacement={
            onPrepareLatestTurnSubmitPlacement
          }
          onClearPendingLatestTurnSubmitPlacement={
            onClearPendingLatestTurnSubmitPlacement
          }
          isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
          lockedCollaborationMode={lockedCollaborationMode}
          isScrollToTopEnabled={isScrollToTopEnabled}
        />
      ) : footerContent == null ? null : (
        <div className="px-5 pb-2">{footerContent}</div>
      )
    ) : null;
  let threadContent = hideThreadContent ? null : (
    <LocalConversationThreadContent
      conversationId={conversationId}
      isReadOnly={isReadOnly}
      initialScrollOffset={initialScrollOffset}
      initialVirtualizedTurnListRestoreState={
        initialVirtualizedTurnListRestoreState
      }
      isResuming={isResuming}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      consumePendingLatestTurnSubmitPlacement={
        onConsumePendingLatestTurnSubmitPlacement
      }
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      onResponseSpacerStateChange={setResponseSpacerState}
      onVirtualizedTurnListRestoreStateChange={
        onVirtualizedTurnListRestoreStateChange
      }
      showInProgressFixedContent={showComposer}
      isScrollToTopEnabled={isScrollToTopEnabled}
    />
  );
  let threadScrollLayout = localConversationThreadJsxRuntime.jsx(rd, {
    ref: threadScrollLayoutApiRef,
    hasLiveMcpAppFrame,
    remoteHostedPIPAnchorHostId: remoteHostedPipAnchorHostId,
    contentX,
    footer,
    initialOffset: initialScrollOffset,
    onScroll: onThreadScroll,
    onUserScrollToTop: loadOlderConversationHistory,
    children: threadContent,
  });
  let threadBody = (
    <Mo value={onOpenBackgroundAgentFromSummary}>
      {threadScrollLayout}
      {floatingContent}
    </Mo>
  );
  let appShellOverlayOutlet = localConversationThreadJsxRuntime.jsx(ao, {});
  let threadLayout = (
    <ThreadLayout
      className="min-h-0"
      bodyClassName="[&_[data-thread-find-target=conversation]]:scroll-mt-24"
      containerRef={threadLayoutContainerRef}
      data-vscode-context={'{"chatgpt.supportsNewChatMenu": true}'}
      onKeyDownCapture={markConversationReadOnThreadInteraction}
      onPointerDownCapture={markConversationReadOnThreadInteraction}
      onWheelCapture={markConversationReadOnThreadInteraction}
      header={header}
    >
      {summaryPanelObstaclesEffect}
      {threadBody}
      {appShellOverlayOutlet}
    </ThreadLayout>
  );
  return localConversationThreadJsxRuntime.jsx(fs, {
    name: "LocalConversationPage",
    children: localConversationThreadJsxRuntime.jsx(pl, {
      value: threadLayoutContainer,
      children: threadLayout,
    }),
  });
}
function RefreshSummaryPanelObstaclesEffect() {
  let windowZoom = useWindowZoom(),
    refreshObstacles,
    refreshObstaclesEffectDeps;
  return (
    (refreshObstacles = () =>
      startRemoteHostedPipHostLayoutObserver(windowZoom)),
    (refreshObstaclesEffectDeps = [windowZoom]),
    localConversationThreadReactRuntime.useEffect(
      refreshObstacles,
      refreshObstaclesEffectDeps,
    ),
    null
  );
}
function openBackgroundAgentFromThread(
  scope,
  hostId,
  backgroundAgent,
  onOpenBackgroundAgent,
) {
  if (onOpenBackgroundAgent != null) {
    onOpenBackgroundAgent(backgroundAgent);
    return;
  }
  backgroundAgent.showInlineActivity !== true &&
    openBackgroundAgentThreadTab(scope, {
      backgroundAgent,
      hostId,
      TabComponent: LocalConversationMainThread,
    });
}
function ComposerWorkspaceDirectoryTree(props) {
  let { conversationId } = props,
    cwd = useScopedValue(conversationCwdSignal, conversationId);
  return (
    <ConnectedLocalWorktreeRestoreBanner
      conversationId={conversationId}
      cwd={cwd}
    />
  );
}
function LocalConversationComposerFooter({
  conversationId,
  hostId,
  isResuming,
  showExternalFooter,
  composerSurfaceClassName,
  showScrollToBottomButton,
  onScrollToBottom,
  onPrepareLatestTurnSubmitPlacement,
  onClearPendingLatestTurnSubmitPlacement,
  isBackgroundSubagentsEnabled,
  lockedCollaborationMode,
  isScrollToTopEnabled,
}) {
  let scope = useScope(localConversationRouteScope);
  localConversationThreadReactRuntime.useContext(rl);
  ci();
  let hostConnectionStatus = useScopedValue(hostConnectionStatusSignal, hostId),
    hasConversationTurns = !!useScopedValue(
      conversationTurnsSignal,
      conversationId,
    )?.length,
    isRemoteHost = hostId !== LOCAL_HOST_ID,
    footerConnectionStatus = null;
  isRemoteHost &&
    (hostConnectionStatus === "connecting" ||
    hostConnectionStatus === "restarting"
      ? (footerConnectionStatus = "reconnecting")
      : isResuming &&
        !hasConversationTurns &&
        (footerConnectionStatus = "loading"));
  let localResponseInProgress =
      useScopedValue(localResponseInProgressSignal, conversationId) ?? false,
    localWorkspaceMaterialization = useScopedValue(
      localWorkspaceMaterializationSignal,
      conversationId,
    );
  useScopedValue(needsResumeActiveThreadSignal, conversationId);
  useScopedValue(modelProviderSignal, conversationId);
  let subagentResponseInProgress =
      useScopedValue(subagentResponseInProgressSignal, conversationId) ?? false,
    hasActiveSubagent = useScopedValue(
      backgroundAgentsSignal,
      isBackgroundSubagentsEnabled ? conversationId : null,
    ).some(({ status }) => status === "active"),
    isResponseInProgress = isBackgroundSubagentsEnabled
      ? subagentResponseInProgress || hasActiveSubagent || false
      : localResponseInProgress || false,
    composerModeAvailability =
      useScopedValue(conversationModeSignal, conversationId) === "projectless"
        ? {
            fallbackMode: "local",
            isAvailabilityLoading: false,
            isCloudAvailable: false,
            isLocalAvailable: true,
            isWorktreeAvailable: false,
          }
        : undefined,
    intl = useIntl(),
    scrollController = ad(),
    handleLocalSubmitStart = useStableCallback(() => {
      let scrollElement = scrollController.getScrollElement();
      onPrepareLatestTurnSubmitPlacement({
        distanceFromBottomPx:
          scrollController.getLastScrollDistanceFromBottomPx(),
        scrollHeightPx: scrollElement?.scrollHeight ?? null,
      });
      scrollController.setFooterResizeViewportPreserveDisabled(true);
    }),
    handleLocalSubmitError = useStableCallback(() => {
      onClearPendingLatestTurnSubmitPlacement();
      scrollController.setFooterResizeViewportPreserveDisabled(false);
    }),
    footer = (
      <>
        <ComposerWorkspaceDirectoryTree conversationId={conversationId} />
        {footerConnectionStatus == null
          ? null
          : localConversationThreadJsxRuntime.jsx(
              LocalConversationConnectionStatus,
              {
                status: footerConnectionStatus,
              },
            )}
        {localConversationThreadJsxRuntime.jsx(hl, {
          browserConversationId:
            getLocalThreadConversationIdFromRoute(scope.value) ===
            conversationId
              ? (getRouteConversationId(scope) ?? undefined)
              : undefined,
          isResponseInProgress,
          localWorkspaceMaterialization,
          showFooterBranchWhen: "always",
          showExternalFooter,
          surfaceClassName: composerSurfaceClassName,
          composerModeAvailability,
          lockedCollaborationMode,
          placeholderText: undefined,
          onCreateSideConversation: async ({
            sourceConversationId,
            cwd,
            hostId: _hostId,
            collaborationMode,
            displayTitle,
          }) =>
            jd(scope, LocalConversationSideChatThread, {
              sourceConversationId,
              cwd,
              hostId: _hostId,
              collaborationMode,
              displayTitle,
              intl,
            }),
          onLocalSubmitStart: isScrollToTopEnabled
            ? handleLocalSubmitStart
            : undefined,
          onLocalSubmitError: isScrollToTopEnabled
            ? handleLocalSubmitError
            : undefined,
        })}
      </>
    );
  return (
    <div
      className="flex flex-col"
      data-thread-find-composer="true"
      onMouseDownCapture={() => {
        Da(scope, "conversation", `conversation:${conversationId}`);
      }}
      onFocusCapture={() => {
        Da(scope, "conversation", `conversation:${conversationId}`);
      }}
    >
      <div className="relative h-0">
        {localConversationThreadJsxRuntime.jsx(zl, {
          className: "bottom-[calc(100%+6*var(--spacing))]",
          label: intl.formatMessage({
            id: "localConversation.scrollToBottomButton",
            defaultMessage: "Scroll to bottom",
            description: "Label for button that scrolls to the latest message",
          }),
          onClick: onScrollToBottom,
          show: showScrollToBottomButton,
          showWorkingDots:
            isScrollToTopEnabled &&
            showScrollToBottomButton &&
            isResponseInProgress,
        })}
      </div>
      <div className="flex flex-col gap-2">{footer}</div>
    </div>
  );
}
function LocalConversationThreadContent({
  conversationId,
  isReadOnly,
  initialScrollOffset,
  initialVirtualizedTurnListRestoreState,
  isResuming,
  isBackgroundSubagentsEnabled,
  consumePendingLatestTurnSubmitPlacement,
  onVisibleThreadContentReady,
  onResponseSpacerStateChange,
  onVirtualizedTurnListRestoreStateChange,
  showInProgressFixedContent,
  isScrollToTopEnabled,
}) {
  let scope = useScope(localConversationRouteScope),
    navigate = useNavigate(),
    isAppgenEndCardEnabled = Vo(),
    hasConversation = useScopedValue(hasConversationSignal, conversationId),
    modelProvider = useScopedValue(modelProviderSignal, conversationId),
    cwd = useScopedValue(conversationCwdSignal, conversationId),
    hostId = useScopedValue(conversationHostIdSignal, conversationId),
    conversationResumeState =
      useScopedValue(conversationResumeStateSignal, conversationId) ??
      "needs_resume",
    isConversationHistoryComplete =
      useScopedValue(conversationHistoryCompleteSignal, conversationId) ??
      false,
    isResponseInProgress = useScopedValue(
      responseInProgressSignal,
      conversationId,
    ),
    completedThreadGoal = useScopedValue(
      completedThreadGoalSignal,
      conversationId,
    ),
    isProjectlessConversation =
      useScopedValue(conversationModeSignal, conversationId) === "projectless",
    projectlessOutputDirectory = useScopedValue(
      projectlessOutputDirectorySignal,
      conversationId,
    ),
    collaborationMode = useScopedValue(
      conversationCollaborationModeSignal,
      conversationId,
    ),
    {
      conversationTurns,
      hasInheritedParentTurns,
      hasRenderableTurns,
      hasUserMessage,
      latestVisibleTurnId,
      visibleTurnEntries,
    } = useScopedValue(localConversationVisibleTurnEntriesSignal, {
      conversationId,
      isBackgroundSubagentsEnabled,
    });
  visibleTurnEntries.at(-1)?.turn;
  let completedThreadGoalTurnKey =
      completedThreadGoal == null
        ? null
        : findCompletedTurnSearchKeyAtOrBefore(
            visibleTurnEntries,
            completedThreadGoal.updatedAt * 1e3,
          ),
    conversationHostApi = useConversationHostApi(conversationId),
    { data: resolvedApps = EMPTY_RESOLVED_APPS } = useAppsQuery({
      hostId,
    }),
    renderMcpApps = useStatsigLayer("2138468235").get("enable_mcp_apps", false),
    subagentParentThreadId = useScopedValue(
      subagentParentThreadIdSignal,
      conversationId,
    ),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null,
    [collapsedTurnsByConversationId, setCollapsedTurnsByConversationId] =
      useSignalState(collapsedTurnsByConversationSignal),
    { items, markRead } = Co(),
    matchingAutomationItem = hasConversation
      ? (items.find((item) => item.threadId === conversationId) ?? null)
      : null,
    automationDescription = matchingAutomationItem?.description ?? null,
    shouldShowAutomationDescription =
      matchingAutomationItem?.automationId != null &&
      automationDescription != null &&
      automationDescription.trim().length > 0;
  localConversationThreadReactRuntime.useEffect(() => {
    matchingAutomationItem?.id == null ||
      matchingAutomationItem.readAt != null ||
      markRead(matchingAutomationItem.id);
  }, [matchingAutomationItem?.id, matchingAutomationItem?.readAt, markRead]);
  let intl = useIntl(),
    { agentMode } = useConversationAgentMode({
      conversationId,
      hostId,
    }),
    resolvedCwd = cwd ? normalizeWorkspacePath(cwd) : null,
    collapsedTurnsById = localConversationThreadReactRuntime.useMemo(
      () => collapsedTurnsByConversationId[conversationId] ?? {},
      [collapsedTurnsByConversationId, conversationId],
    ),
    lastLatestVisibleTurnIdRef =
      localConversationThreadReactRuntime.useRef(null),
    currentConversationIdRef =
      localConversationThreadReactRuntime.useRef(conversationId),
    previousTurnEntriesRef = localConversationThreadReactRuntime.useRef([]),
    contentContainerRef = localConversationThreadReactRuntime.useRef(null),
    virtualizedTurnListApiRef =
      localConversationThreadReactRuntime.useRef(null);
  currentConversationIdRef.current !== conversationId &&
    ((currentConversationIdRef.current = conversationId),
    (lastLatestVisibleTurnIdRef.current = null));
  let canEditLastTurnMessage = hasConversation && !isResponseInProgress,
    isSubagentThread = visibleSubagentParentThreadId != null,
    showEmptyResumingState = shouldShowEmptyResumingThreadState({
      conversationTurns,
      hasRenderableTurns,
      isResuming,
      isSubagentThread,
    }),
    hasConversationRef =
      localConversationThreadReactRuntime.useRef(hasConversation),
    conversationTurnsRef =
      localConversationThreadReactRuntime.useRef(conversationTurns),
    isBackgroundSubagentsEnabledRef =
      localConversationThreadReactRuntime.useRef(isBackgroundSubagentsEnabled);
  hasConversationRef.current = hasConversation;
  conversationTurnsRef.current = conversationTurns;
  isBackgroundSubagentsEnabledRef.current = isBackgroundSubagentsEnabled;
  let diffSource = useSignalValue(diffSourceSignal),
    routeContextId =
      conversationId == null ? "unavailable" : `conversation:${conversationId}`;
  useReviewSearchHighlights({
    containerRef: contentContainerRef,
    contextId: routeContextId,
  });
  let handleCopyCapture = useStableCallback((event) => {
      let containerElement = contentContainerRef.current;
      containerElement != null && zo(event, containerElement);
    }),
    setContentContainerRef = localConversationThreadReactRuntime.useCallback(
      (nextContainer) => {
        let previousContainer = contentContainerRef.current;
        previousContainer !== nextContainer &&
          (previousContainer?.ownerDocument.removeEventListener(
            "copy",
            handleCopyCapture,
            true,
          ),
          (contentContainerRef.current = nextContainer),
          nextContainer?.ownerDocument.addEventListener(
            "copy",
            handleCopyCapture,
            true,
          ));
      },
      [handleCopyCapture],
    ),
    editLastTurnMessage = useStableCallback(async (turnEntry, message) => {
      try {
        await sendAppServerRequest("edit-last-user-turn-for-host", {
          hostId: conversationHostApi.getHostId(),
          conversationId,
          turnId: turnEntry.turnId,
          message,
          agentMode,
          serviceTier: await Ma(
            scope,
            conversationHostApi.getHostId(),
            turnEntry.params.model ?? null,
          ),
        });
      } catch (error) {
        throw (
          scope.get(toastSignal).danger(
            intl.formatMessage({
              id: "localConversation.editLastMessageFailed",
              defaultMessage: "Failed to edit message",
              description:
                "Toast shown when editing the previous user message fails",
            }),
          ),
          error
        );
      }
    }),
    forkConversationFromTurn = useStableCallback(async (targetTurnId) => {
      if (hasConversation)
        try {
          let forkedConversationId = await sendAppServerRequest(
            "fork-conversation-from-turn",
            {
              conversationId,
              targetTurnId,
              cwd,
              workspaceRoots: cwd == null ? undefined : [cwd],
              collaborationMode,
            },
          );
          na(scope, {
            sourceConversationId: conversationId,
            targetConversationId: forkedConversationId,
          });
          navigate(getConversationNavigationPath(forkedConversationId), {
            state: {
              focusComposerNonce: Date.now(),
            },
          });
        } catch (error) {
          throw (
            logger.error("Error forking conversation from turn", {
              safe: {},
              sensitive: {
                error,
              },
            }),
            scope
              .get(toastSignal)
              .danger(intl.formatMessage(fo.forkThreadError)),
            error
          );
        }
    }),
    handleForkTurnMessage = useStableCallback((turnEntry) => {
      if (!hasConversation || turnEntry.turnId == null) return;
      if (turnEntry.turnId === latestVisibleTurnId) {
        forkConversationFromTurn(turnEntry.turnId);
        return;
      }
      let turnIdForFork = turnEntry.turnId;
      openScopedModal(scope, ForkFromOlderTurnDialogController, {
        conversationCwd: cwd,
        conversationId,
        conversationLatestCollaborationMode: collaborationMode,
        hostId,
        onForkIntoLocal: () => forkConversationFromTurn(turnIdForFork),
        turnId: turnIdForFork,
      });
    }),
    setTurnCollapsed = useStableCallback((turnId, collapsed) => {
      setCollapsedTurnsByConversationId((currentCollapsedTurns) =>
        vc({
          current: currentCollapsedTurns,
          conversationId,
          turnId,
          collapsed,
        }),
      );
    }),
    turnListEntries = buildLocalConversationTurnListEntries({
      collapsedTurnsById,
      completedThreadGoal,
      completedThreadGoalTurnKey,
      conversationId,
      cwd: resolvedCwd,
      hasInheritedParentTurns,
      hostId,
      isBackgroundSubagentsEnabled,
      isProjectlessConversation,
      isReadOnly,
      modelProvider,
      projectlessOutputDirectory,
      onEditLastTurnMessage:
        !isReadOnly && canEditLastTurnMessage ? editLastTurnMessage : undefined,
      onForkTurnMessage:
        !isReadOnly && hasConversation ? handleForkTurnMessage : undefined,
      onSetCollapsedForTurn: setTurnCollapsed,
      previousEntries: previousTurnEntriesRef.current,
      renderMcpApps,
      resolvedApps,
      showInProgressFixedContent,
      visibleSubagentParentThreadId,
      visibleTurnEntries,
    });
  previousTurnEntriesRef.current = turnListEntries;
  let turnKeyBySearchKey = localConversationThreadReactRuntime.useMemo(() => {
      let turnKeyMap = new Map();
      for (let entry of turnListEntries)
        turnKeyMap.has(entry.turnSearchKey) ||
          turnKeyMap.set(entry.turnSearchKey, entry.turnKey);
      return turnKeyMap;
    }, [turnListEntries]),
    searchScrollAdapter = localConversationThreadReactRuntime.useMemo(
      () => ({
        scrollToTurn: async (turnKey, options) => {
          if (
            options?.signal?.aborted ||
            (collapsedTurnsById[turnKey] === true &&
              setCollapsedTurnsByConversationId((currentCollapsedTurns) =>
                vc({
                  current: currentCollapsedTurns,
                  conversationId,
                  turnId: turnKey,
                  collapsed: false,
                }),
              ),
            await to(),
            options?.signal?.aborted)
          )
            return;
          let virtualizedTurnListApi = virtualizedTurnListApiRef.current;
          if (virtualizedTurnListApi == null)
            throw Error(
              "Local conversation search scroll requested before VirtualizedTurnList API was ready",
            );
          await virtualizedTurnListApi.scrollToKey(
            turnKeyBySearchKey.get(turnKey) ?? turnKey,
          );
          !options?.signal?.aborted && (await to());
        },
        getTurnContainer: (turnSearchKey) => {
          let containerElement = contentContainerRef.current;
          return containerElement == null
            ? null
            : (containerElement.querySelector(
                `[data-content-search-turn-key="${turnSearchKey}"]`,
              ) ?? null);
        },
      }),
      [
        collapsedTurnsById,
        conversationId,
        turnKeyBySearchKey,
        setCollapsedTurnsByConversationId,
      ],
    ),
    conversationSource = localConversationThreadReactRuntime.useMemo(
      () =>
        createLocalConversationSearchSource({
          getConversationState: () =>
            hasConversationRef.current
              ? {
                  turns: conversationTurnsRef.current,
                }
              : null,
          getIsBackgroundSubagentsEnabled: () =>
            isBackgroundSubagentsEnabledRef.current,
          routeContextId,
          scrollAdapter: searchScrollAdapter,
        }),
      [searchScrollAdapter, routeContextId],
    ),
    getThreadFindItems = () =>
      buildThreadFindItemsForVisibleTurns({
        isConversationHistoryComplete,
        isAppgenEndCardEnabled,
        isBackgroundSubagentsEnabled,
        modelProvider,
        projectlessOutputDirectory,
        visibleTurnEntries,
      }),
    revealThreadFindItem = useStableCallback(
      async ({ id: contentUnitId, turnKey }) => {
        let virtualizedTurnListApi = virtualizedTurnListApiRef.current;
        if (virtualizedTurnListApi == null)
          throw Error(
            "Local conversation prompt rail scroll requested before VirtualizedTurnList API was ready",
          );
        await virtualizedTurnListApi.scrollToKey(
          turnKeyBySearchKey.get(turnKey) ?? turnKey,
          (turnContainer) => {
            for (let contentUnit of turnContainer.querySelectorAll(
              "[data-content-search-unit-key]",
            ))
              if (contentUnit.dataset.contentSearchUnitKey === contentUnitId)
                return contentUnit;
            return null;
          },
        );
      },
    ),
    revealContentSearchItem = useStableCallback(
      async ({ conversationId: _conversationId, itemId, turnKey }) => {
        _conversationId === conversationId &&
          (Ks(itemId, "smooth") ||
            (setCollapsedTurnsByConversationId((currentCollapsedTurns) =>
              vc({
                current: currentCollapsedTurns,
                conversationId,
                turnId: turnKey,
                collapsed: false,
              }),
            ),
            await to(),
            !Ks(itemId, "smooth") &&
              (await searchScrollAdapter.scrollToTurn(turnKey),
              await Xs(itemId, "auto"))));
      },
    );
  localConversationThreadReactRuntime.useEffect(
    () =>
      Hs(scope, conversationId, {
        revealItem: revealContentSearchItem,
      }),
    [conversationId, revealContentSearchItem, scope],
  );
  localConversationThreadReactRuntime.useEffect(() => {
    let previousLatestVisibleTurnId = lastLatestVisibleTurnIdRef.current,
      previousLatestVisibleEntry = visibleTurnEntries.find(
        (item) => item.turnId === previousLatestVisibleTurnId,
      ),
      turnIdsToCollapse = new Set();
    previousLatestVisibleTurnId != null &&
      previousLatestVisibleTurnId !== latestVisibleTurnId &&
      !turnHasMcpAppResource(previousLatestVisibleEntry) &&
      turnIdsToCollapse.add(previousLatestVisibleTurnId);
    let fourthFromLatestEntry = visibleTurnEntries.at(-4);
    previousLatestVisibleTurnId != null &&
      previousLatestVisibleTurnId !== latestVisibleTurnId &&
      fourthFromLatestEntry?.turnId != null &&
      turnHasMcpAppResource(fourthFromLatestEntry) &&
      turnIdsToCollapse.add(fourthFromLatestEntry.turnId);
    turnIdsToCollapse.size > 0 &&
      setCollapsedTurnsByConversationId((currentCollapsedTurns) => {
        let nextCollapsedTurns = currentCollapsedTurns;
        for (let turnId of turnIdsToCollapse)
          nextCollapsedTurns = vc({
            current: nextCollapsedTurns,
            conversationId,
            turnId,
            collapsed: true,
          });
        return nextCollapsedTurns;
      });
    lastLatestVisibleTurnIdRef.current = latestVisibleTurnId;
  }, [
    conversationId,
    latestVisibleTurnId,
    setCollapsedTurnsByConversationId,
    visibleTurnEntries,
  ]);
  let notifyVisibleContentReady = useStableCallback(() => {
      setTimeout(() => {
        onVisibleThreadContentReady?.(conversationTurns.length);
      });
    }),
    handleVirtualizedTurnListApiChange = useStableCallback(
      (virtualizedTurnListApi) => {
        virtualizedTurnListApiRef.current = virtualizedTurnListApi;
      },
    ),
    visibleContentReadyHandler =
      conversationResumeState === "resumed" &&
      onVisibleThreadContentReady != null
        ? notifyVisibleContentReady
        : undefined;
  return hasConversation ? (
    isSubagentThread && !hasRenderableTurns ? (
      <Os fillParent={true} debugName="LocalConversationThread.subagentTurns" />
    ) : showEmptyResumingState ? (
      <Os
        fillParent={true}
        showLogo={false}
        debugName="LocalConversationThread.resume"
      />
    ) : (
      <>
        {localConversationThreadJsxRuntime.jsx(
          ThreadAppShellSourceRegistration,
          {
            conversationSource,
            diffSource,
            orchestrationId: conversationSource.contextId,
            isDefault:
              getLocalThreadConversationIdFromRoute(scope.value) ===
              conversationId,
          },
        )}
        {localConversationThreadJsxRuntime.jsxs(motion.div, {
          ref: setContentContainerRef,
          "data-thread-find-target": "conversation",
          className:
            "relative flex flex-col gap-3 electron:[--color-token-description-foreground:color-mix(in_srgb,var(--color-token-foreground)_70%,transparent)]",
          onMouseDownCapture: () => {
            Da(scope, "conversation", conversationSource.contextId);
          },
          onFocusCapture: () => {
            Da(scope, "conversation", conversationSource.contextId);
          },
          children: [
            <ThreadFindNavigationRail
              enabled={isConversationHistoryComplete}
              getItems={getThreadFindItems}
              onRevealItem={revealThreadFindItem}
            />,
            !hasUserMessage && shouldShowAutomationDescription ? (
              <Rc
                message={automationDescription ?? ""}
                sentAtMs={null}
                hostId={hostId}
              />
            ) : null,
            isScrollToTopEnabled ? (
              <LocalConversationAutoFollowVirtualizedTurnList
                key={conversationId}
                conversationId={conversationId}
                entries={turnListEntries}
                initialScrollOffset={initialScrollOffset}
                initialVirtualizedTurnListRestoreState={
                  initialVirtualizedTurnListRestoreState
                }
                consumePendingLatestTurnSubmitPlacement={
                  consumePendingLatestTurnSubmitPlacement
                }
                onResponseSpacerStateChange={onResponseSpacerStateChange}
                onApiChange={handleVirtualizedTurnListApiChange}
                onVisibleContentReady={visibleContentReadyHandler}
                onVirtualizedTurnListRestoreStateChange={
                  onVirtualizedTurnListRestoreStateChange
                }
                synchronouslyMeasureLatestTurnUpdates={false}
              />
            ) : (
              localConversationThreadJsxRuntime.jsx(
                VirtualizedTurnList,
                {
                  entries: turnListEntries,
                  initialRestoreState: initialVirtualizedTurnListRestoreState,
                  onApiChange: handleVirtualizedTurnListApiChange,
                  onVisibleContentReady: visibleContentReadyHandler,
                  onRestoreStateChange: onVirtualizedTurnListRestoreStateChange,
                  preserveMeasuredTurnViewport: true,
                  RowComponent: LocalConversationTurnRow,
                },
                conversationId,
              )
            ),
          ],
        })}
        {null}
        {null}
      </>
    )
  ) : (
    <Os fillParent={true} debugName="LocalConversationThread.state" />
  );
}
var localConversationThreadModule,
  localConversationThreadReactRuntime,
  localConversationThreadJsxRuntime,
  EMPTY_THREAD_TURNS,
  EMPTY_RESOLVED_APPS,
  collapsedTurnsByConversationSignal,
  subagentResponseInProgressSignal;
export const initLocalConversationThreadChunk = once(() => {
  localConversationThreadModule = getChunkModuleExports();
  initMotionRuntime();
  initQueryRuntime();
  toEsModule(loadFindLastModule(), 1);
  initScopeRuntime();
  initPathHelpers();
  localConversationThreadReactRuntime = toEsModule(loadReactModule(), 1);
  initIntlRuntime();
  xr();
  gc();
  on();
  initConversationStateSelectors();
  initAppServerRequestBridge();
  cr();
  Ha();
  initWindowZoomContext();
  Bo();
  So();
  ro();
  vs();
  initButtonComponentPrimitives();
  Lo();
  rc();
  Po();
  initModalRegistrySignal();
  Rl();
  initToastRuntime();
  Wc();
  initElectronPlatformContent();
  fl();
  ul();
  Yr();
  Ea();
  initThreadAppShellSourcesChunk();
  Qa();
  initReviewSearchHighlighter();
  Di();
  initChromeExtensionHeaderChunk();
  Ao();
  initLauncherHotkeyStateChunk();
  Vc();
  Es();
  initThreadSwitchTimingTrackerChunk();
  initConnectorAppsListQuery();
  initAppScope();
  initComposerScope();
  initRouteScope();
  initHostConfigHelpers();
  initStatsigFeatureGateHooks();
  initConversationRouteSourceHelpers();
  initThreadLayoutChunk();
  ho();
  id();
  td();
  initThreadFindNavigationRail();
  rs();
  initThreadFindNavigationRailNoopChunk();
  Pc();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  initLoggerRuntime();
  initKeyboardShortcutLabel();
  initThreadNullRefChunk();
  Ns();
  initWorktreeRestoreBannerChunk();
  initOlderTurnForkDialogStatics();
  initForkFromOlderTurnDialogControllerChunk();
  initDeepEqualModule();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  Qi();
  _o();
  mc();
  initMarkdownUtilityNoop();
  Wo();
  Ac();
  initLocalConversationSearchAdapterChunk();
  initConversationSearchUnitExtractor();
  Nd();
  initLocalConversationTurnSelectors();
  initThreadScrollStateSignal();
  initAutoFollowVirtualizedTurnListChunk();
  initTurnListEntryComparisonChunk();
  initLocalConversationTurnRowChunk();
  initThreadFindItemsBuilder();
  initBackgroundAgentThreadTab();
  fa();
  initBackgroundAgentThreadTabs();
  ll();
  Sa();
  initLocalConversationConnectionStatusChunk();
  Md();
  qc();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  initVirtualizedTurnListChunk();
  localConversationThreadJsxRuntime = getJsxRuntime();
  EMPTY_THREAD_TURNS = [];
  EMPTY_RESOLVED_APPS = [];
  collapsedTurnsByConversationSignal = createAtomSignal({});
  subagentResponseInProgressSignal = createScopedSignalFamily(
    appScope,
    (conversationId, { get }) => {
      let parentConversationId = get(
        subagentParentThreadIdSignal,
        conversationId,
      );
      if (parentConversationId == null)
        return get(localResponseInProgressSignal, conversationId) ?? false;
      let conversationTurns =
          get(conversationTurnsSignal, conversationId) ?? EMPTY_THREAD_TURNS,
        parentConversationTurns =
          get(conversationTurnsSignal, parentConversationId) ??
          EMPTY_THREAD_TURNS;
      return (
        getConversationTurnsNotInParent({
          areTurnItemsEqual: deepEqualModule.default,
          conversation: {
            turns: conversationTurns,
          },
          parentConversation: {
            turns: parentConversationTurns,
          },
        }).at(-1)?.status === "inProgress"
      );
    },
  );
});
export {
  useLocalConversationSummaryPanelModel,
  initLocalConversationArtifacts,
  isRecentLocalEnvironmentAction,
  ThreadFindNavigationRail,
  initThreadFindNavigationRail,
  ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome,
  initPinnedSummaryPanelState,
  initLocalEnvironmentRecentActions,
  initReviewSearchHighlighter,
  initLocalConversationSummaryPanelSignals,
  initLocalConversationArtifactSignals,
  initConversationSearchHelpers,
  renderLocalConversationMarkdownForTurns,
  initMarkConversationReadEffect,
  openBackgroundAgentThreadTab,
  createLocalConversationSearchAdapter,
  localConversationVisibleTurnEntriesSignal,
  initLocalConversationGitSummary,
  pinnedSummaryPanelState,
  useMarkConversationReadOnVisibility,
  initLocalConversationTurnSelectors,
  initLocalConversationThreadRoute,
  initBackgroundAgentThreadTab,
  LocalConversationSideChatThread,
  useResumeLocalConversation,
  LocalConversationMainThread,
  initBackgroundAgentThreadTabs,
  formatBackgroundAgentDisplayName,
  localConversationOutputArtifactsSignal,
  initConversationMarkdownRenderer,
  initThreadScrollState,
  useReviewSearchHighlights,
};
