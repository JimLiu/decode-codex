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
  $N as n,
  $P as r,
  $h as i,
  $i as a,
  $j as o,
  $p as s,
  AB as c,
  AI as l,
  AL as u,
  AN as d,
  AO as f,
  AP as p,
  AV as m,
  Ai as h,
  Aj as g,
  Al as _,
  Am as v,
  Ao as y,
  Ap as b,
  Au as x,
  BP as S,
  BV as getJsxRuntime,
  Bh as w,
  Bn as T,
  CP as E,
  DL as D,
  DM as O,
  DN as k,
  D_ as A,
  Di as j,
  Dj as M,
  Dl as N,
  Dp as P,
  Ei as F,
  Em as I,
  En as L,
  Ep as R,
  Es as z,
  Ev as ee,
  FB as B,
  Fp as V,
  Fx as te,
  GE as ne,
  G_ as re,
  Ga as ie,
  Gi as H,
  Gj as ae,
  Gu as U,
  HE as oe,
  HO as se,
  Hg as ce,
  Hh as le,
  Hi as ue,
  Hv as de,
  Hx as fe,
  IB as W,
  IL as pe,
  I_ as me,
  Io as he,
  Ip as ge,
  Ix as _e,
  JV as G,
  Ja as ve,
  Ji as ye,
  Jo as be,
  Jt as xe,
  Kg as Se,
  Ki as Ce,
  Kp as we,
  Ku as Te,
  LB as De,
  LN as Oe,
  La as ke,
  Lj as Ae,
  Ln as je,
  MB as Me,
  MP as Ne,
  MV as Pe,
  M_ as Fe,
  Mi as Ie,
  Mj as Le,
  Mu as Re,
  initLocalConversationGitSummary as ze,
  NM as Be,
  Nh as Ve,
  Nj as He,
  Np as Ue,
  Nu as We,
  Nv as Ge,
  OI as Ke,
  OL as qe,
  OM as Je,
  ON as Ye,
  OP as Xe,
  OV as Ze,
  O_ as Qe,
  Oi as $e,
  Oj as et,
  On as tt,
  Op as nt,
  Ov as rt,
  PB as K,
  PI as it,
  PO as at,
  P_ as ot,
  Pi as st,
  Pp as ct,
  Pv as lt,
  QP as ut,
  Qg as dt,
  Qi as ft,
  R as pt,
  RN as mt,
  RP as ht,
  Rf as gt,
  Rj as _t,
  Rn as vt,
  Rv as yt,
  SP as bt,
  SV as xt,
  Sc as St,
  Sf as Ct,
  Sj as wt,
  Sk as Tt,
  Sm as Et,
  TM as Dt,
  T_ as Ot,
  Tf as kt,
  Ti as At,
  Tm as jt,
  Tp as Mt,
  Ts as Nt,
  UE as Pt,
  UR as Ft,
  Uf as It,
  Ug as Lt,
  Uh as Rt,
  Up as zt,
  Uv as Bt,
  Ux as Vt,
  VE as Ht,
  VP as Ut,
  VR as Wt,
  Vi as Gt,
  Vn as Kt,
  Wa as qt,
  Wg as Jt,
  XN as Yt,
  XR as Xt,
  Xi as Zt,
  Xj as Qt,
  Xp as $t,
  YO as en,
  Ya as tn,
  Yt as nn,
  ZN as rn,
  Zi as an,
  Zu as on,
  _c as sn,
  aM as cn,
  aP as ln,
  aV as un,
  a_ as dn,
  ag as fn,
  ak as pn,
  localConversationOutputArtifactsSignal as mn,
  bA as hn,
  bF as gn,
  bM as _n,
  bP as vn,
  bR as yn,
  bV as bn,
  bc as xn,
  bk as Sn,
  cA as Cn,
  cM as wn,
  cP as Tn,
  cm as En,
  dV as Dn,
  di as On,
  dp as kn,
  eM as An,
  eP as jn,
  e_ as Mn,
  ea as Nn,
  ed as Pn,
  eg as Fn,
  en as In,
  eo as Ln,
  fV as Rn,
  fh as zn,
  fp as Bn,
  fu as Vn,
  gi as Hn,
  gm as Un,
  gp as Wn,
  hM as Gn,
  hi as Kn,
  hs as qn,
  iF as Jn,
  iO as Yn,
  ic as Xn,
  io as Zn,
  jL as Qn,
  jM as $n,
  jm as er,
  ju as tr,
  kM as nr,
  kN as rr,
  kO as ir,
  kP as ar,
  kj as or,
  ko as sr,
  lA as cr,
  lD as lr,
  lF as ur,
  lL as dr,
  lP as fr,
  lm as pr,
  mM as hr,
  mP as gr,
  mi as _r,
  mo as vr,
  mr as yr,
  ms as br,
  mv as xr,
  na as Sr,
  nm as Cr,
  ny as wr,
  oM as Tr,
  oP as Er,
  ok as Dr,
  oo as Or,
  oy as kr,
  pI as Ar,
  pM as jr,
  pP as Mr,
  ph as Nr,
  pi as Pr,
  po as Fr,
  pp as Ir,
  pu as Lr,
  pz as Rr,
  qV as q,
  qg as zr,
  qi as Br,
  qj as Vr,
  rF as Hr,
  rO as Ur,
  r_ as Wr,
  ra as Gr,
  sF as FormattedMessage,
  sm as Kr,
  tP as qr,
  ta as Jr,
  tc as Yr,
  tn as Xr,
  to as Zr,
  tp as Qr,
  ty as $r,
  uD as ei,
  uM as ti,
  uz as ni,
  vM as ri,
  vR as ii,
  va as ai,
  vm as oi,
  wM as si,
  wP as ci,
  wV as li,
  wi as ui,
  wj as di,
  wl as fi,
  wp as pi,
  xM as Y,
  xa as mi,
  xk as hi,
  yA as gi,
  yF as _i,
  yM as vi,
  yP as yi,
  yV as bi,
  yv as xi,
  zP as Si,
  zV as Ci,
  za as wi,
  zo as Ti,
} from "../boundaries/current-ref/appg-thread-shared-producer";
import {
  $i as Ei,
  A as Di,
  Ar as Oi,
  Ba as ki,
  Bo as Ai,
  Cd as ji,
  Cl as Mi,
  Cn as Ni,
  Cs as Pi,
  Dd as Fi,
  Di as Ii,
  Ds as Li,
  Ec as Ri,
  Es as zi,
  F as Bi,
  Fr as Vi,
  Ga as Hi,
  Gl as Ui,
  Ha as Wi,
  Ho as Gi,
  Il as Ki,
  Ir as qi,
  Ja as Ji,
  Jl as Yi,
  Ka as Xi,
  Kl as Zi,
  Mr as Qi,
  Od as $i,
  Oi as ea,
  On as ta,
  P as na,
  Rl as ra,
  Rr as ia,
  Sa as aa,
  Sl as oa,
  Sn as sa,
  So as ca,
  Ss as la,
  Td as ua,
  Va as da,
  Wl as fa,
  Xa as pa,
  Ya as ma,
  Yi as ha,
  Yl as ga,
  Za as _a,
  _c as va,
  _i as ya,
  _s as ba,
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
  id as Pa,
  jr as Fa,
  js as Ia,
  kc as La,
  kn as Ra,
  l as za,
  ln as Ba,
  md as Va,
  mo as Ha,
  ms as Ua,
  nc as Wa,
  nd as Ga,
  nu as Ka,
  pi as qa,
  ql as Ja,
  qo as Ya,
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
  vs as oo,
  wd as so,
  wl as co,
  wo as lo,
  ws as uo,
  x as fo,
  xl as po,
  xs as mo,
  yc as ho,
  yd as go,
  yn as _o,
  ys as vo,
  yu as yo,
} from "../boundaries/current-ref/projects-app-shared-producer";
import {
  G as bo,
  W as xo,
  dn as So,
  fn as Co,
  jn as wo,
  kn as To,
} from "../boundaries/current-ref/automations-page-producer";
import {
  O as Eo,
  k as Do,
} from "../boundaries/current-ref/worktree-new-thread-panel-producer";
import {
  $ as Oo,
  $o as ko,
  Ai as Ao,
  Bt as jo,
  Dt as Mo,
  Fi as No,
  Gt as Po,
  H as Fo,
  Ii as Io,
  Ja as Lo,
  Ko as Ro,
  Kt as zo,
  Ma as Bo,
  Na as Vo,
  Ni as Ho,
  Oi as Uo,
  Ot as Wo,
  Pi as Go,
  Q as Ko,
  Qo as qo,
  Qt as Jo,
  Vt as Yo,
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
  zt as hs,
} from "../boundaries/current-ref/pull-request-thread-actions-producer";
import {
  $c as openBrowserSummaryTab,
  $l as _s,
  $n as vs,
  Al as ys,
  Ar as bs,
  At as xs,
  Bl as Ss,
  Bn as Cs,
  Bu as ws,
  Dt as Ts,
  Du as Es,
  El as Ds,
  Eu as Os,
  Fr as ks,
  Gd as As,
  Gm as js,
  Hl as Ms,
  In as Ns,
  Ir as Ps,
  Ja as Fs,
  Jn as Ls,
  Jt as Rs,
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
  Vn as oc,
  Vu as sc,
  Wd as cc,
  Xc as lc,
  Xd as uc,
  Yd as dc,
  Yn as fc,
  Zd as pc,
  ar as mc,
  au as hc,
  cc as gc,
  cs as _c,
  ct as vc,
  er as bc,
  eu as xc,
  fl as Sc,
  gm as Cc,
  gt as wc,
  hm as Tc,
  ht as Ec,
  it as Dc,
  iu as Oc,
  jr as kc,
  jt as Ac,
  kl as jc,
  kt as Mc,
  lf as Nc,
  ls as Pc,
  lt as Fc,
  mt as Ic,
  nu as Lc,
  oa as Rc,
  os as zc,
  pt as Bc,
  qa as Vc,
  qt as Hc,
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
  Dr as al,
  Er as ol,
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
  _ as Cl,
  v as wl,
} from "../boundaries/current-ref/appgen-publication-terms-producer";
import {
  _ as Tl,
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
  initArtifactFilePreviewIconChunk as ju,
  ArtifactFilePreviewIcon as Mu,
} from "../utils/artifact-file-preview-icon";
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
  BackgroundTerminalIcon,
  clearStoppedPendingProcessRows,
  collectConversationProcessRows,
  computerUsePictureInPictureAvailableSignal,
  computerUsePictureInPictureVisibleSignal,
  getPendingBackgroundProcessRow,
  initActiveConversationProcessRowsChunk,
  initBackgroundTerminalIconChunk,
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
  b as logPullRequestViewedFromSidePanel,
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
  formatArtifactTargetLabel,
  getGeneratedImagePreviewArtifactPaths,
  getLocalConversationArtifactKey,
  isGeneratedImageArtifact,
} from "./local-conversation-thread-parts/artifact-summary";
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
import { createReviewSearchAnchorPlacement } from "./local-conversation-thread-parts/review-search-anchor-placement";
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
  BrowserUseSummarySectionContent,
  BrowserUseSummarySectionTitle,
} from "./local-conversation-thread-parts/browser-use-summary-section";
import { useBrowserUseSummaries } from "./local-conversation-thread-parts/browser-use-summary-store";
import { ComputerUsePictureInPictureRow } from "./local-conversation-thread-parts/computer-use-pip-row";
import { BackgroundTaskSectionTitle } from "./local-conversation-thread-parts/background-task-section-title";
const joinLocalEnvironmentRepoPath = M;
function useReviewSearchHighlightScheduler(delayMs: number) {
  let timeoutIdRef = reviewSearchSchedulerReactRuntime.useRef(null),
    schedule = (callback: () => void) => {
      timeoutIdRef.current ??= window.setTimeout(() => {
        timeoutIdRef.current = null;
        callback();
      }, delayMs);
    };
  let cancel = () => {
    timeoutIdRef.current != null &&
      (window.clearTimeout(timeoutIdRef.current),
      (timeoutIdRef.current = null));
  };
  return {
    schedule,
    cancel,
  };
}

var reviewSearchSchedulerModule,
  reviewSearchSchedulerReactRuntime,
  initReviewSearchHighlightScheduler = once(() => {
    reviewSearchSchedulerModule = q();
    reviewSearchSchedulerReactRuntime = toEsModule(G(), 1);
  });

function useReviewSearchHighlights(props) {
  let { containerRef, contextId } = props,
    reviewSearchRun = W(Ai),
    activeReviewSearchMatch = W(Gi),
    activeReviewSearchRun =
      reviewSearchRun?.contextId === contextId ? reviewSearchRun : null,
    activeMatchId =
      activeReviewSearchRun == null
        ? null
        : (activeReviewSearchMatch?.id ?? null),
    activeMatchElementRef = reviewSearchReactRuntime.useRef(null),
    { schedule, cancel } = useReviewSearchHighlightScheduler(
      REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS,
    ),
    applySearchHighlights = () => {
      let containerElement = containerRef.current;
      if (containerElement == null) return;
      oo(containerElement, {
        includeShadowRoots: false,
      });
      let previousActiveMatchElement = activeMatchElementRef.current;
      if (
        (previousActiveMatchElement != null &&
          (previousActiveMatchElement.classList.remove(ba),
          (activeMatchElementRef.current = null)),
        activeReviewSearchRun == null)
      )
        return;
      let matchesByContentUnitKey = Ii(activeReviewSearchRun.matches),
        elementByMatchId = new Map();
      if (
        (containerElement
          .querySelectorAll("[data-content-search-unit-key]")
          .forEach((contentUnitElement) => {
            let contentUnitKey =
              contentUnitElement.dataset.contentSearchUnitKey;
            if (contentUnitKey == null) return;
            let unitMatches = matchesByContentUnitKey.get(contentUnitKey);
            unitMatches == null ||
              unitMatches.length === 0 ||
              mo({
                target: contentUnitElement,
                query: activeReviewSearchRun.query,
                maxMatches: unitMatches.length,
                includeShadowRoots: false,
              }).matches.forEach((matchElement, index) => {
                let unitMatch = unitMatches[index];
                unitMatch != null &&
                  (Pi({
                    element: matchElement,
                    matchId: unitMatch.id,
                  }),
                  elementByMatchId.set(unitMatch.id, matchElement));
              });
          }),
        activeMatchId == null)
      )
        return;
      let activeMatchElement = elementByMatchId.get(activeMatchId);
      activeMatchElement != null &&
        (activeMatchElement.classList.add(ba),
        (activeMatchElementRef.current = activeMatchElement));
    };
  let applySearchHighlightsEffectEvent =
      reviewSearchReactRuntime.useEffectEvent(applySearchHighlights),
    observeSearchHighlightMutations = () => {
      let containerElement = containerRef.current;
      if (
        containerElement == null ||
        (applySearchHighlightsEffectEvent(),
        activeReviewSearchRun?.runId == null)
      )
        return;
      let mutationObserver = new MutationObserver((mutationRecords) => {
        uo(mutationRecords) && schedule(applySearchHighlightsEffectEvent);
      });
      return (
        mutationObserver.observe(containerElement, {
          childList: true,
          subtree: true,
          characterData: true,
        }),
        () => {
          mutationObserver.disconnect();
          cancel();
        }
      );
    };
  let activeRunId = activeReviewSearchRun?.runId,
    observeSearchHighlightMutationDeps;
  observeSearchHighlightMutationDeps = [
    activeRunId,
    activeMatchId,
    cancel,
    containerRef,
    contextId,
    schedule,
  ];
  reviewSearchReactRuntime.useEffect(
    observeSearchHighlightMutations,
    observeSearchHighlightMutationDeps,
  );
}

var reviewSearchHighlighterModule,
  reviewSearchReactRuntime,
  REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS,
  initReviewSearchHighlighter = once(() => {
    reviewSearchHighlighterModule = q();
    c();
    reviewSearchReactRuntime = toEsModule(G(), 1);
    la();
    ea();
    Qa();
    initReviewSearchHighlightScheduler();
    REVIEW_SEARCH_HIGHLIGHT_MUTATION_DELAY_MS = 80;
  });

var MAIN_THREAD_PIP_HOST_ID,
  PIP_ANCHOR_HOST_ATTRIBUTE,
  PIP_OBSTACLE_ATTRIBUTE,
  initThreadPipHostAttributes = once(() => {
    MAIN_THREAD_PIP_HOST_ID = "codex-main-thread";
    PIP_ANCHOR_HOST_ATTRIBUTE = "data-pip-anchor-host";
    PIP_OBSTACLE_ATTRIBUTE = "data-pip-obstacle";
  });

function startRemoteHostedPipHostLayoutObserver(windowZoom) {
  let sendMessageFromView = window.electronBridge?.sendMessageFromView;
  if (sendMessageFromView == null || document.body == null) return () => {};
  let normalizedWindowZoom =
      Number.isFinite(windowZoom) && windowZoom > 0 ? windowZoom : 1,
    animationFrameId = null,
    previousLayout = null,
    previousLayoutKey = null,
    resizeObserver = new ResizeObserver(scheduleLayoutMeasure),
    bodyMutationObserver = new MutationObserver((mutationRecords) => {
      mutationRecords.some(shouldRefreshPipLayoutObservers) &&
        (refreshObservedLayoutElements(), scheduleLayoutMeasure());
    }),
    layoutElementMutationObserver = new MutationObserver(scheduleLayoutMeasure);
  function publishLayoutIfChanged(layout) {
    let layoutKey = serializePipHostLayout(layout);
    if (layoutKey === previousLayoutKey) return;
    let shouldAnimate =
        previousLayout?.anchorRect != null &&
        layout.anchorRect != null &&
        arePipRectsEqual(layout.anchorRect, previousLayout.anchorRect),
      nextLayout = {
        ...layout,
        animated: shouldAnimate,
      };
    previousLayout = nextLayout;
    previousLayoutKey = layoutKey;
    sendMessageFromView({
      layout: nextLayout,
      type: "remote-hosted-pip-host-layout-changed",
    });
  }

  function publishEmptyLayout() {
    publishLayoutIfChanged({
      anchors: null,
      anchorRect: null,
      animated: false,
      hostId: MAIN_THREAD_PIP_HOST_ID,
      presentationScope: "thread",
    });
  }

  function scheduleLayoutMeasure() {
    animationFrameId ??= window.requestAnimationFrame(() => {
      animationFrameId = null;
      measureAndPublishLayout();
    });
  }

  function measureAndPublishLayout() {
    let anchorHostElement = document.querySelector(
      MAIN_THREAD_PIP_HOST_SELECTOR,
    );
    if (anchorHostElement == null) {
      publishEmptyLayout();
      return;
    }
    let hostRect = getScaledElementClientRect(
      anchorHostElement,
      normalizedWindowZoom,
    );
    if (hostRect == null) {
      publishEmptyLayout();
      return;
    }
    let obstacleRects = [];
    for (let obstacleElement of document.querySelectorAll(
      PIP_OBSTACLE_SELECTOR,
    )) {
      let obstacleRect = getScaledElementClientRect(
        obstacleElement,
        normalizedWindowZoom,
      );
      obstacleRect != null && obstacleRects.push(obstacleRect);
    }
    publishLayoutIfChanged(
      createReviewSearchAnchorPlacement({
        hostId: MAIN_THREAD_PIP_HOST_ID,
        hostRect,
        obstacleRects,
      }),
    );
  }

  function refreshObservedLayoutElements() {
    resizeObserver.disconnect();
    layoutElementMutationObserver.disconnect();
    for (let layoutElement of document.querySelectorAll(
      PIP_LAYOUT_ELEMENT_SELECTOR,
    )) {
      resizeObserver.observe(layoutElement);
      layoutElementMutationObserver.observe(layoutElement, {
        attributeFilter: ["class", "hidden", "style"],
        attributes: true,
      });
    }
  }
  return (
    bodyMutationObserver.observe(document.body, {
      attributeFilter: [PIP_ANCHOR_HOST_ATTRIBUTE, PIP_OBSTACLE_ATTRIBUTE],
      attributes: true,
      childList: true,
      subtree: true,
    }),
    window.addEventListener("resize", scheduleLayoutMeasure),
    document.addEventListener("scroll", scheduleLayoutMeasure, true),
    refreshObservedLayoutElements(),
    scheduleLayoutMeasure(),
    () => {
      animationFrameId != null && window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      bodyMutationObserver.disconnect();
      layoutElementMutationObserver.disconnect();
      window.removeEventListener("resize", scheduleLayoutMeasure);
      document.removeEventListener("scroll", scheduleLayoutMeasure, true);
      publishEmptyLayout();
    }
  );
}

function getScaledElementClientRect(element, windowZoom) {
  if (element.hidden) return null;
  let rect = element.getBoundingClientRect();
  return rect.width <= 0 || rect.height <= 0
    ? null
    : {
        height: rect.height / windowZoom,
        width: rect.width / windowZoom,
        x: rect.left / windowZoom,
        y: rect.top / windowZoom,
      };
}

function serializePipHostLayout(layout) {
  return JSON.stringify({
    anchors: layout.anchors,
    anchorRect: layout.anchorRect,
    hostId: layout.hostId,
    presentationScope: layout.presentationScope,
  });
}

function arePipRectsEqual(leftRect, rightRect) {
  return (
    leftRect.x === rightRect.x &&
    leftRect.y === rightRect.y &&
    leftRect.width === rightRect.width &&
    leftRect.height === rightRect.height
  );
}

function shouldRefreshPipLayoutObservers(mutationRecord) {
  if (mutationRecord.type === "attributes") return true;
  for (let addedNode of mutationRecord.addedNodes)
    if (nodeContainsPipLayoutElement(addedNode)) return true;
  for (let removedNode of mutationRecord.removedNodes)
    if (nodeContainsPipLayoutElement(removedNode)) return true;
  return false;
}

function nodeContainsPipLayoutElement(node) {
  return (
    node instanceof HTMLElement &&
    (node.matches(PIP_LAYOUT_ELEMENT_SELECTOR) ||
      node.querySelector(PIP_LAYOUT_ELEMENT_SELECTOR) != null)
  );
}

var MAIN_THREAD_PIP_HOST_SELECTOR,
  PIP_OBSTACLE_SELECTOR,
  PIP_LAYOUT_ELEMENT_SELECTOR,
  initThreadPipHostSelectors = once(() => {
    initThreadPipHostAttributes();
    MAIN_THREAD_PIP_HOST_SELECTOR = `[${PIP_ANCHOR_HOST_ATTRIBUTE}="${MAIN_THREAD_PIP_HOST_ID}"]`;
    PIP_OBSTACLE_SELECTOR = `[${PIP_OBSTACLE_ATTRIBUTE}]`;
    PIP_LAYOUT_ELEMENT_SELECTOR = `${MAIN_THREAD_PIP_HOST_SELECTOR},${PIP_OBSTACLE_SELECTOR}`;
  });
function ThreadFindNavigationRail(props) {
  let { enabled = true, getItems, onRevealItem } = props,
    [shouldRenderLazyRail, setShouldRenderLazyRail] =
      threadFindNavigationRailReactRuntime.useState(false),
    railFeatureEnabled = Vr("2551582477") && enabled,
    scheduleLazyRailRender,
    lazyRailEffectDeps;
  if (
    ((scheduleLazyRailRender = () => {
      if (!railFeatureEnabled || shouldRenderLazyRail) return;
      let revealNavigationRail = () => {
          setShouldRenderLazyRail(true);
        },
        requestIdleCallback = window.requestIdleCallback?.bind(window),
        cancelIdleCallback = window.cancelIdleCallback?.bind(window);
      if (requestIdleCallback && cancelIdleCallback) {
        let idleCallbackId = requestIdleCallback(revealNavigationRail, {
          timeout: 2e3,
        });
        return () => {
          cancelIdleCallback(idleCallbackId);
        };
      }
      let timeoutId = globalThis.setTimeout(revealNavigationRail, 0);
      return () => {
        globalThis.clearTimeout(timeoutId);
      };
    }),
    (lazyRailEffectDeps = [railFeatureEnabled, shouldRenderLazyRail]),
    threadFindNavigationRailReactRuntime.useEffect(
      scheduleLazyRailRender,
      lazyRailEffectDeps,
    ),
    !railFeatureEnabled || !shouldRenderLazyRail)
  )
    return null;
  let navigationItems = getItems();
  return threadFindNavigationRailJsxRuntime.jsx(
    LazyThreadUserMessageNavigationRail,
    {
      items: navigationItems,
      onRevealItem,
    },
  );
}
var threadFindNavigationRailModule,
  threadFindNavigationRailReactRuntime,
  threadFindNavigationRailJsxRuntime,
  LazyThreadUserMessageNavigationRail,
  initThreadFindNavigationRail = once(() => {
    threadFindNavigationRailModule = q();
    threadFindNavigationRailReactRuntime = toEsModule(G(), 1);
    ol();
    ae();
    threadFindNavigationRailJsxRuntime = getJsxRuntime();
    Qn();
    LazyThreadUserMessageNavigationRail = al(
      async () =>
        (
          await u(
            async () => {
              let { ThreadUserMessageNavigationRail } = await import(
                "../utils/thread-user-message-navigation-rail"
              );
              return {
                ThreadUserMessageNavigationRail,
              };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            ]),
            import.meta.url,
          )
        ).ThreadUserMessageNavigationRail,
    );
  }),
  initThreadFindNavigationRailNoopChunk = once(() => {});
function SummaryPanelExpandableList(props) {
  let { children, empty, getKey, items, listClassName, visibleItemLimit } =
      props,
    maxVisibleItems =
      visibleItemLimit === undefined
        ? DEFAULT_SUMMARY_PANEL_VISIBLE_ITEM_LIMIT
        : visibleItemLimit,
    [isExpanded, setIsExpanded] =
      summaryPanelExpandableListReactRuntime.useState(false);
  if (items.length === 0) return empty ?? null;
  let hasHiddenItems = items.length > maxVisibleItems,
    visibleItems = isExpanded ? items : items.slice(0, maxVisibleItems);
  let hiddenItemCount = items.length - visibleItems.length,
    renderedItems;
  {
    let renderVisibleItem;
    renderVisibleItem = (item, index) => <>{children(item, index)}</>;
    renderedItems = visibleItems.map(renderVisibleItem);
  }
  let listNode =
    listClassName == null ? (
      renderedItems
    ) : (
      <div className={listClassName}>{renderedItems}</div>
    );
  let toggleButton = hasHiddenItems
    ? summaryPanelExpandableListJsxRuntime.jsx(k, {
        className:
          "!px-0 !py-0 text-token-text-tertiary hover:text-token-text-secondary",
        color: "ghostMuted",
        size: "default",
        onClick: () => {
          setIsExpanded(toggleSummaryPanelExpandableListExpanded);
        },
        children: isExpanded ? (
          <FormattedMessage
            id="codex.localConversation.summaryPanelExpandableList.showLess"
            defaultMessage="Show less"
            description="Button label that collapses a long list in the conversation summary panel"
          />
        ) : (
          <FormattedMessage
            id="codex.localConversation.summaryPanelExpandableList.showMore"
            defaultMessage={"Show {count, number} more"}
            description="Button label that expands a long list in the conversation summary panel"
            values={{
              count: hiddenItemCount,
            }}
          />
        ),
      })
    : null;
  return (
    <>
      {listNode}
      {toggleButton}
    </>
  );
}

function toggleSummaryPanelExpandableListExpanded(isExpanded) {
  return !isExpanded;
}

var summaryPanelExpandableListModule,
  summaryPanelExpandableListReactRuntime,
  summaryPanelExpandableListJsxRuntime,
  DEFAULT_SUMMARY_PANEL_VISIBLE_ITEM_LIMIT,
  initSummaryPanelExpandableList = once(() => {
    summaryPanelExpandableListModule = q();
    summaryPanelExpandableListReactRuntime = toEsModule(G(), 1);
    Jn();
    Ye();
    summaryPanelExpandableListJsxRuntime = getJsxRuntime();
    DEFAULT_SUMMARY_PANEL_VISIBLE_ITEM_LIMIT = 6;
  });
function SummaryPanelArtifactsList(props) {
  let {
      artifacts,
      conversationTitle = null,
      getImagePreviewSrc,
      onOpen,
    } = props,
    scope = B(Fe),
    intl = ur(),
    generatedImageNumberByPath,
    generatedImagePreviews;
  {
    let generatedImageArtifactPaths = artifacts.flatMap((artifact) =>
        getGeneratedImagePreviewArtifactPaths(artifact, wt),
      ),
      hasGeneratedImageArtifacts = artifacts.some(isGeneratedImageArtifact);
    generatedImageNumberByPath = new Map(
      generatedImageArtifactPaths.map((path, index) => [
        path,
        hasGeneratedImageArtifacts
          ? generatedImageArtifactPaths.length - index
          : index + 1,
      ]),
    );
    generatedImagePreviews = artifacts
      .slice()
      .reverse()
      .flatMap((artifact) => {
        if (
          (artifact.type !== "file" && artifact.type !== "generated-image") ||
          Wr(artifact.path) !== "always"
        )
          return [];
        let fileName = wt(artifact.path),
          imageNumber = generatedImageNumberByPath.get(artifact.path),
          previewAlt =
            imageNumber == null
              ? fileName
              : intl.formatMessage(
                  {
                    id: "codex.localConversation.artifacts.generatedImage",
                    defaultMessage: "Generated image {imageNumber}",
                    description:
                      "Label for a generated image artifact in the thread summary side panel",
                  },
                  {
                    imageNumber,
                  },
                ),
          tabTitle =
            imageNumber == null || conversationTitle == null
              ? previewAlt
              : intl.formatMessage(
                  {
                    id: "codex.localConversation.generatedImageTabTitle",
                    defaultMessage:
                      "{conversationTitle} - Generated image {imageNumber}",
                    description:
                      "Title for a generated image preview tab, prefixed by the conversation title",
                  },
                  {
                    conversationTitle: conversationTitle,
                    imageNumber,
                  },
                );
        return [
          {
            alt: previewAlt,
            id: artifact.path,
            previewSrc: getImagePreviewSrc?.(artifact.path) ?? artifact.path,
            src: artifact.path,
            tabTitle,
          },
        ];
      });
  }
  let generatedImagePreviewItems = generatedImagePreviews,
    emptyArtifactsNode = (
      <div className="py-1 text-base text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.artifacts.empty"
          defaultMessage="No artifacts yet"
          description="Empty state for the artifacts section in the thread summary side panel"
        />
      </div>
    );
  let renderArtifactRow = (artifact) => {
    switch (artifact.type) {
      case "website": {
        let targetLabel = formatArtifactTargetLabel(artifact.target, yn, wt);
        return (
          <SummaryPanelRow
            icon={<Sr className="icon-sm shrink-0" />}
            label={
              targetLabel ?? (
                <FormattedMessage
                  id="codex.localConversation.artifacts.website"
                  defaultMessage="Web preview"
                  description="Label for a website artifact in the thread summary side panel"
                />
              )
            }
            onClick={(event) => onOpen(artifact, event)}
            title={artifact.target}
          />
        );
      }
      case "google-drive":
        return (
          <SummaryPanelRow
            icon={
              <Bc
                className="icon-sm shrink-0"
                resourceKind={artifact.resourceKind}
              />
            }
            label={artifact.title}
            onClick={(event) => onOpen(artifact, event)}
            title={artifact.url}
          />
        );
      case "appgen-app":
        return (
          <SummaryPanelRow
            icon={<No className="icon-sm shrink-0" />}
            label={
              <span className="flex min-w-0 items-center gap-1">
                <span className="truncate">
                  {artifact.title ?? Ho(artifact.url) ?? artifact.url}
                </span>
                <In
                  className="icon-xs shrink-0 opacity-0 group-hover/summary-panel-row:opacity-100 group-focus-visible/summary-panel-row:opacity-100"
                  ExternalIcon={cc}
                  href={artifact.url}
                />
              </span>
            }
            labelClassName="min-w-0"
            onClick={(event) => onOpen(artifact, event)}
            title={artifact.url}
          />
        );
      case "file":
      case "generated-image": {
        let fileName = wt(artifact.path),
          imageNumber = generatedImageNumberByPath.get(artifact.path),
          label =
            imageNumber == null ? (
              fileName
            ) : (
              <FormattedMessage
                id="codex.localConversation.artifacts.generatedImage"
                defaultMessage={"Generated image {imageNumber}"}
                description="Label for a generated image artifact in the thread summary side panel"
                values={{
                  imageNumber,
                }}
              />
            );
        return (
          <SummaryPanelRow
            icon={
              <Mu
                getImagePreviewSrc={getImagePreviewSrc}
                iconClassName="icon-sm"
                imageClassName="size-5 rounded-sm border border-token-border"
                path={artifact.path}
              />
            }
            label={label}
            onClick={(event) => {
              let previewItem = generatedImagePreviewItems.find(
                (item) => item.id === artifact.path,
              );
              (previewItem != null &&
                Rs(scope, {
                  alt: previewItem.alt,
                  attachmentSrc: artifact.path,
                  downloadSrc: previewItem.previewSrc,
                  generatedImages: generatedImagePreviewItems,
                  initialImageId: previewItem.id,
                  referrerPolicy: "no-referrer",
                  src: previewItem.previewSrc,
                  title: previewItem.tabTitle,
                })) ||
                onOpen(artifact, event);
            }}
            title={artifact.path}
          />
        );
      }
    }
  };
  return (
    <SummaryPanelExpandableList
      items={artifacts}
      getKey={getLocalConversationArtifactKey}
      listClassName="-mx-2 flex max-h-[28rem] flex-col gap-0.5 overflow-y-auto px-2"
      empty={emptyArtifactsNode}
    >
      {renderArtifactRow}
    </SummaryPanelExpandableList>
  );
}

var summaryPanelArtifactsModule,
  summaryPanelArtifactsJsxRuntime,
  initSummaryPanelArtifactsListChunk = once(() => {
    summaryPanelArtifactsModule = q();
    c();
    gn();
    Jn();
    Go();
    ju();
    Xr();
    Hc();
    dn();
    As();
    Gr();
    Io();
    Ic();
    me();
    di();
    initSummaryPanelExpandableList();
    initSummaryPanelRowChunk();
    summaryPanelArtifactsJsxRuntime = getJsxRuntime();
  });
function ThreadSummaryBackgroundActivityRows(props) {
  let {
      backgroundAgents,
      backgroundTerminals,
      conversationId,
      onOpenBackgroundAgent,
      onOpenTerminal,
      onStopError,
    } = props,
    intl = ur(),
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
      Dr("clean-background-terminals", {
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
              actions={threadSummaryBackgroundActivityJsxRuntime.jsx(jr, {
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
                      ? threadSummaryBackgroundActivityJsxRuntime.jsx(rr, {
                          className: "icon-xs",
                        })
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
  return threadSummaryBackgroundActivityJsxRuntime.jsx(jr, {
    disabled: tooltipIsDisabled,
    tooltipContent,
    children: label,
  });
}
var threadSummaryBackgroundActivityModule,
  threadSummaryBackgroundActivityReactRuntime,
  threadSummaryBackgroundActivityJsxRuntime,
  initThreadSummaryBackgroundActivityRowsChunk = once(() => {
    threadSummaryBackgroundActivityModule = q();
    threadSummaryBackgroundActivityReactRuntime = toEsModule(G(), 1);
    Jn();
    pn();
    d();
    Gn();
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
    scope = B(ut),
    isVisibleRef = backgroundTerminalSummaryRowsReactRuntime.useRef(isVisible),
    pendingProcessRows = W(pendingBackgroundProcessRowsSignal),
    killChildProcessMutation = qr("child-process-kill"),
    registerProcessMutation = qr("chat-process-register");
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
      sessionId = _e.addSessionForConversation(process.conversationId),
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
    _e.create({
      conversationId: process.conversationId,
      conversationTitle: process.chatTitle,
      cwd: process.cwd,
      hostId: process.hostId,
      preserveOnOwnerDestroy: true,
      sessionId,
    });
    _e.runHeadlessAction(sessionId, {
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
            className={S(
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
    intl = ur(),
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
  let triggerClassName = S(ac, "data-[state=open]:text-token-foreground");
  let triggerIcon = <Hi className="icon-2xs" />;
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
    <Br.Item
      LeftIcon={ds}
      leftIconClassName="icon-xs"
      onSelect={handleOpenOutput}
    >
      {openOutputLabel}
    </Br.Item>
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
    <Br.Item
      LeftIcon={js}
      leftIconClassName="icon-xs"
      disabled={isStopDisabled}
      tooltipText={stopTooltip}
      tooltipInteractive={isStopTooltipInteractive}
      onSelect={handleStop}
    >
      {stopLabel}
    </Br.Item>
  );
  let isStartOrRestartDisabled = !canStartOrRestart,
    isRestartTooltipInteractive = restartTooltip != null,
    startOrRestartLabel = (
      <FormattedMessage {...startOrRestartMessageDescriptor} />
    );
  let startOrRestartItem = (
    <Br.Item
      LeftIcon={cn}
      leftIconClassName="icon-xs"
      disabled={isStartOrRestartDisabled}
      tooltipText={restartTooltip}
      tooltipInteractive={isRestartTooltipInteractive}
      onSelect={handleStartOrRestart}
    >
      {startOrRestartLabel}
    </Br.Item>
  );
  return (
    <H
      align="end"
      animateExit={false}
      contentClassName="!animate-none"
      contentWidth="xs"
      triggerButton={triggerButton}
    >
      {openOutputItem}
      {stopItem}
      {startOrRestartItem}
    </H>
  );
}
function stopBackgroundTerminalActionTriggerPropagation(event) {
  event.stopPropagation();
}
function BackgroundTerminalStatusIcon(props) {
  let { status } = props,
    intl = ur(),
    statusLabel = intl.formatMessage(
      getBackgroundTerminalStatusMessageDescriptor(status),
    );
  if (status === "starting") {
    let startingIcon = backgroundTerminalSummaryRowsJsxRuntime.jsx(rr, {
      className: "icon-xs text-token-charts-green",
    });
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
    backgroundTerminalSummaryRowsModule = q();
    Ut();
    c();
    backgroundTerminalSummaryRowsReactRuntime = toEsModule(G(), 1);
    Jn();
    an();
    d();
    Tr();
    zs();
    ss();
    Xi();
    ic();
    initActiveConversationProcessRowsChunk();
    initPendingBackgroundProcessRowsChunk();
    initProcessMetricHelpersChunk();
    r();
    te();
    n();
    initBackgroundTerminalSummaryRowsSupportChunk();
    initSummaryPanelRowChunk();
    backgroundTerminalSummaryRowsJsxRuntime = getJsxRuntime();
    BACKGROUND_TERMINAL_STARTING_ROW_TTL_MS = 1e4;
    backgroundTerminalMessages = Hr({
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
var Bp = once(() => {
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
    intl = ur(),
    noEnvironmentCheckIcon =
      normalizedResolvedConfigPath == null ? si : undefined,
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
    <Br.Item
      RightIcon={noEnvironmentCheckIcon}
      onSelect={clearEnvironmentSelection}
    >
      {noEnvironmentLabel}
    </Br.Item>
  );
  let defaultEnvironmentItem = defaultEnvironment ? (
    <Br.Item
      LeftIcon={Iu}
      leftIconClassName="icon-xxs text-token-description-foreground"
      RightIcon={
        defaultEnvironmentNormalized != null &&
        defaultEnvironmentNormalized === normalizedResolvedConfigPath
          ? si
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
    </Br.Item>
  ) : null;
  let environmentItems =
    localEnvironmentsLoading && localEnvironments.length === 0 ? (
      <div className="flex items-center justify-center py-3">
        {Up.jsx(rr, {
          className: "icon-xxs",
        })}
      </div>
    ) : localEnvironmentsError ? (
      <Br.Message compact={true} tone="error">
        <FormattedMessage
          id="composer.worktreeEnvironment.error"
          defaultMessage="Error loading environments"
          description="Error state for worktree environment dropdown"
        />
      </Br.Message>
    ) : availableEnvironments.length > 0 ? (
      availableEnvironments.map((item) => (
        <Br.Item
          key={item.configPath}
          RightIcon={
            normalizedResolvedConfigPath != null &&
            or(item.configPath) === normalizedResolvedConfigPath
              ? si
              : undefined
          }
          onSelect={() => {
            onSelectEnvironment(item.configPath);
          }}
        >
          <span className="min-w-0 truncate">
            {getLocalEnvironmentResultDisplayName(item)}
          </span>
        </Br.Item>
      ))
    ) : localEnvironments.length === 0 ? (
      <Br.Message compact={true}>
        <FormattedMessage
          id="codex.environments.noEnvironmentsFound"
          defaultMessage="No environments found"
          description="Message shown when no Codex environments were found"
        />
      </Br.Message>
    ) : null;
  let environmentList = (
    <div className="vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-0.5 overflow-y-auto pr-1">
      {noEnvironmentItem}
      {defaultEnvironmentItem}
      {environmentItems}
    </div>
  );
  let separator = <Zt />;
  let settingsLabel = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let settingsItem = (
    <Br.Item
      LeftIcon={Gt}
      leftIconClassName="icon-sm"
      onSelect={onOpenSettings}
    >
      {settingsLabel}
    </Br.Item>
  );
  return (
    <div className="flex flex-col gap-0.5 pb-1">
      {environmentList}
      {separator}
      {settingsItem}
    </div>
  );
}
var Hp,
  Up,
  Wp = once(() => {
    Hp = q();
    Jn();
    an();
    d();
    Dt();
    ue();
    Fu();
    Bp();
    di();
    Up = getJsxRuntime();
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
    commandInputId = qp.useId(),
    headerSection = Jp.jsx(j, {
      children: <F icon={headerIcon} subtitle={description} title={title} />,
    });
  let extraFieldsSection = extraFields
    ? Jp.jsx(j, {
        children: Jp.jsx($e, {
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
  let commandFieldSection = Jp.jsx(j, {
    children: Jp.jsxs($e, {
      className: "gap-2",
      children: [commandLabelNode, commandTextarea],
    }),
  });
  let submitButton = Jp.jsx(k, {
    color: "primary",
    disabled: submitDisabled,
    loading: submitLoading,
    type: "submit",
    children: submitLabel,
  });
  let footerSection = Jp.jsx(j, {
    children: (
      <At className="justify-between">
        {leftAction}
        {submitButton}
      </At>
    ),
  });
  let formContent = Jp.jsxs(ui, {
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
var Kp,
  qp,
  Jp,
  Yp = once(() => {
    Kp = q();
    qp = toEsModule(G(), 1);
    Ye();
    h();
    Jp = getJsxRuntime();
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
    intl = ur(),
    queryClient = Ci(),
    saveConfigMutation = qr("local-environment-config-save"),
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
      icon: Qp.jsx(md, {
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
              queryKey: Yt("local-environment-config", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            queryClient.invalidateQueries({
              queryKey: Yt("local-environment", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            workspaceRoot != null &&
              queryClient.invalidateQueries({
                queryKey: Yt("local-environments", {
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
    DropdownComponent = H;
    iconDropdownAlign = "start";
    iconDropdownContentWidth = "icon";
    iconDropdownTriggerButton = Qp.jsx(k, {
      id: `local-env-action-icon-${action.id}`,
      "aria-label": selectedIconOption.ariaLabel,
      className: "w-12 justify-center text-sm",
      color: "secondary",
      size: "toolbar",
      children: selectedIconOption.icon,
    });
    let renderIconOption;
    renderIconOption = (iconOption) => (
      <Br.Item
        key={iconOption.value}
        tooltipText={iconOption.ariaLabel}
        onSelect={() => {
          onUpdate({
            icon: iconOption.value,
          });
        }}
      >
        {iconOption.icon}
      </Br.Item>
    );
    iconMenuItems = iconOptions.map(renderIconOption);
  }
  let iconDropdown = Qp.jsx(DropdownComponent, {
    align: iconDropdownAlign,
    contentWidth: iconDropdownContentWidth,
    triggerButton: iconDropdownTriggerButton,
    children: iconMenuItems,
  });
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
    headerIcon = Qp.jsx(md, {
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
  let settingsButton = Qp.jsx(k, {
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
  return Qp.jsx(SetupFormComponent, {
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
var Zp,
  Qp,
  $p = once(() => {
    Zp = q();
    m();
    Jn();
    Ye();
    an();
    fd();
    ud();
    dd();
    gl();
    n();
    Yp();
    Qp = getJsxRuntime();
  });
var nm,
  rm = once(() => {
    yi();
    nm = vn("local-env-recent-actions-by-key", {});
  });
function isRecentLocalEnvironmentAction(
  recentActionsByKey: RecentLocalEnvironmentActionsByKey | null | undefined,
  hostId: string,
): boolean {
  let environmentKey = We(hostId);
  return recentActionsByKey != null && Ar(recentActionsByKey, environmentKey);
}
var am,
  initLocalEnvironmentRecentActions = once(() => {
    am = q();
    gn();
    Re();
  });
function useLocalConversationEnvironmentState(workspaceRoot, hostConfig) {
  let scope = B(ut),
    hostId = hostConfig.id,
    workspaceEnvironmentKey = workspaceRoot ? D(workspaceRoot) : null;
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
    { data } = Rt(
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
  let setConfigValueMutation = w(
      "set-config-value",
      hostConfig,
      setConfigMutationOptions,
    ),
    { data: selectedEnvironmentConfigValue } = ku(
      isCodexWorktree ? recentEnvironmentKey : null,
      hostConfig,
      dr,
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
  let { data: _data = null } = jn("local-environment", environmentQueryOptions),
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
          key: dr,
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
var um,
  dm = once(() => {
    um = q();
    c();
    gn();
    Ve();
    Au();
    le();
    za();
    r();
    di();
    n();
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
    scope = B(ut),
    intl = ur(),
    location = ee(),
    navigate = rt(),
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
    { data } = Rt(
      workspaceRoot,
      hostConfig,
      "local_conversation_action_compound_button",
    ),
    { data: _data } = tr(),
    [recentActionsByKey, setRecentActionsByKey] = li(nm),
    [isMenuOpen, setMenuOpen] = km.useState(false),
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
    primaryShortcut = K(ha, primaryActionItem?.commandId ?? aa[0]),
    commandActionItems = actionItems ?? jm,
    runEnvironmentAction = Y((actionRunRequest) => {
      let { action } = actionRunRequest,
        actionCwd = resolveLocalEnvironmentActionCwd({
          joinPath: joinLocalEnvironmentRepoPath,
          relativePath: environment?.cwdRelativeToGitRoot ?? null,
          repoRoot: repoRoot,
          workspaceRoot,
        });
      if (actionCwd == null || !conversationId) {
        gr.error("Can not run action. Cwd is not set");
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
      _e.runAction(runId, {
        command: action.command,
        cwd: actionCwd,
        title: action.name,
      });
    }),
    setMenuOpenAndNotify = (open) => {
      setMenuOpen(open);
      onMenuOpenChange?.(open);
    };
  let handleMenuOpenChange = Y(setMenuOpenAndNotify),
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
  let openSettings = Y(openEnvironmentSettings),
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
  let createEnvironment = Y(openCreateEnvironmentPage),
    openAddActionPopover = () => {
      resolvedEnvironmentConfigPath == null ||
        environment == null ||
        (setMenuOpen(false),
        onMenuOpenChange?.(false),
        st(scope, AddLocalEnvironmentActionPopoverContent, {
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
        ? X.jsx(RegisterLocalEnvironmentActionCommands, {
            actions: commandActionItems,
            conversationId,
            onRunAction: runEnvironmentAction,
          })
        : null,
      actionsIcon = <Hi className="icon-xs" />;
    let actionsButton = (
      <button
        aria-label={actionsTitle}
        className={Am}
        title={actionsTitle}
        type="button"
      >
        {actionsIcon}
      </button>
    );
    let actionsTriggerButton = X.jsx(jr, {
      tooltipContent: actionsTitle,
      delayOpen: true,
      children: actionsButton,
    });
    let menuTitle = (
      <Br.Title>
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
      </Br.Title>
    );
    let actionMenuItems = sortedActionItems?.map((actionItem) =>
        X.jsx(
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
      <Br.Item
        LeftIcon={Ae}
        leftIconClassName="icon-sm"
        onSelect={openAddAction}
      >
        {addActionLabel}
      </Br.Item>
    );
    let changeEnvironmentMenu = canChangeEnvironment ? (
      <>
        <Zt />
        <Ce
          trigger={
            <Br.Item LeftIcon={Gt} leftIconClassName="icon-sm">
              <FormattedMessage
                id="threadPage.runAction.changeEnvironment"
                defaultMessage="Change environment"
                description="Menu item to change the active local environment"
              />
            </Br.Item>
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
        </Ce>
      </>
    ) : null;
    let actionsDropdown = (
      <H
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
      </H>
    );
    let primaryActionButton =
      primaryActionItem != null && primaryActionTitle != null
        ? X.jsx(jr, {
            tooltipContent: primaryActionTitle,
            shortcut:
              primaryActionItem.commandId == null ? null : primaryShortcut,
            delayOpen: true,
            children: (
              <button
                aria-label={primaryActionTitle}
                className={Am}
                title={primaryActionTitle}
                type="button"
                onClick={runPrimaryAction}
              >
                {X.jsx(md, {
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
    electronEnvironmentControls = X.jsx(qt, {
      electron: true,
      children: hasNoLocalEnvironments
        ? X.jsx(jr, {
            tooltipContent: createEnvironmentLabel,
            delayOpen: true,
            children: X.jsx(k, {
              "aria-label": createEnvironmentLabel,
              className: "ms-auto",
              color: "ghost",
              disabled: !canChangeEnvironment,
              size: "icon",
              type: "button",
              onClick: createEnvironment,
              children: <Ae className="icon-sm" />,
            }),
          })
        : X.jsx(LocalEnvironmentSelectorDropdown, {
            canChangeEnvironment,
            open: isMenuOpen,
            title: environmentSelectorTitle,
            onOpenChange: handleSelectorOpenChange,
            children: selectorContent,
          }),
    });
  let browserEnvironmentControls = X.jsx(qt, {
    browser: true,
    chromeExtension: true,
    extension: true,
    children: X.jsx(LocalEnvironmentSelectorDropdown, {
      canChangeEnvironment,
      open: isMenuOpen,
      title: environmentSelectorTitle,
      onOpenChange: handleSelectorOpenChange,
      children: selectorContent,
    }),
  });
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
    triggerIcon = <Gt className="icon-sm" />;
  let triggerButton = X.jsx(k, {
    "aria-label": title,
    className: "ms-auto",
    color: "ghost",
    disabled: triggerDisabled,
    size: "icon",
    children: triggerIcon,
  });
  let tooltipTrigger = X.jsx(jr, {
    tooltipContent: title,
    delayOpen: true,
    children: triggerButton,
  });
  return (
    <H
      align="end"
      contentWidth="workspace"
      disabled={isDisabled}
      open={open}
      side="bottom"
      triggerButton={tooltipTrigger}
      onOpenChange={onOpenChange}
    >
      {children}
    </H>
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
    [draftAction, setDraftAction] = km.useState(
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
  return X.jsx(ai, {
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
    return X.jsx(LocalEnvironmentActionMenuRow, {
      actionItem,
      isPrimaryAction,
      shortcut: null,
      onRunAction,
    });
  }
  return X.jsx(LocalEnvironmentActionMenuItemWithShortcut, {
    actionItem,
    commandId,
    isPrimaryAction,
    onRunAction,
  });
}
function LocalEnvironmentActionMenuItemWithShortcut(props) {
  let { actionItem, commandId, isPrimaryAction, onRunAction } = props,
    shortcut = K(ha, commandId);
  return X.jsx(LocalEnvironmentActionMenuRow, {
    actionItem,
    isPrimaryAction,
    shortcut: shortcut,
    onRunAction,
  });
}
function LocalEnvironmentActionMenuRow(props) {
  let { actionItem, isPrimaryAction, shortcut, onRunAction } = props,
    { action } = actionItem,
    handleSelect = () => {
      onRunAction(actionItem);
    };
  let iconName = action.icon ?? "tool",
    iconNode = (
      <Br.ItemIcon>
        {X.jsx(md, {
          icon: iconName,
        })}
      </Br.ItemIcon>
    );
  let labelNode = (
    <span className="min-w-0 flex-1 truncate">{action.name}</span>
  );
  let primaryMarker = isPrimaryAction
    ? X.jsx(si, {
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
    <Br.Item key={action.name} onSelect={handleSelect}>
      {iconNode}
      {contentNode}
    </Br.Item>
  );
}
function RegisterLocalEnvironmentActionCommands(props) {
  let { actions, conversationId, onRunAction } = props,
    registeredCommandItems = aa.map((item, index) =>
      X.jsx(
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
    intl = ur(),
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
  vt(commandId, runAction, commandConfig);
  let actionName = actionItem?.action.name,
    actionCommand = actionItem?.action.command,
    actionIcon = actionItem?.action.icon,
    dependencies = [actionName, actionCommand, actionIcon, commandId];
  let renderCommandItem = (closeMenu) => {
    if (actionItem == null) return null;
    let { action } = actionItem;
    return X.jsx(dl, {
      value: title,
      keywords: ["environment", "action"],
      title: title,
      leftAccessory: X.jsx(md, {
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
    shortcut = K(ha, commandId);
  return shortcut
    ? X.jsx(ri, {
        keysLabel: shortcut,
      })
    : null;
}
var Om,
  km,
  X,
  Am,
  jm,
  Mm = once(() => {
    Om = q();
    Ca();
    xt();
    c();
    km = toEsModule(G(), 1);
    Jn();
    xr();
    Ei();
    initThreadSidePanelTabRegistryChunk();
    je();
    Ye();
    mi();
    an();
    vi();
    Ie();
    Gn();
    ie();
    il();
    le();
    x();
    Dt();
    _t();
    ue();
    Xi();
    Bp();
    Wp();
    $p();
    rm();
    dm();
    r();
    fd();
    wo();
    dd();
    ws();
    te();
    es();
    Mr();
    di();
    _n();
    X = getJsxRuntime();
    Am =
      "flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center rounded-sm border-0 bg-transparent p-0 text-token-text-tertiary hover:bg-token-list-hover-background data-[state=open]:bg-token-list-hover-background";
    jm = [];
  });
function ThreadSummaryPanelSection(props) {
  let {
      autoCollapse,
      sectionKey,
      after,
      children,
      mode = "accordion",
      ref,
      sectionOptions,
      defaultCollapsed = false,
      title,
      titleSuffix,
      onChange,
    } = props,
    scope = B(Fe),
    autoCollapseState = K(
      threadSummaryPanelSectionAutoCollapseState,
      sectionKey,
    ),
    persistedIsExpanded = K(threadSummaryPanelSectionExpandedState, sectionKey),
    shouldHandleAutoCollapse =
      autoCollapse != null && autoCollapseState !== "canceled",
    isExpanded =
      !(autoCollapse === true && autoCollapseState === "collapsed") &&
      (persistedIsExpanded ?? !defaultCollapsed),
    shouldUseReducedMotion = W(mt),
    setIsExpanded = (nextIsExpanded) => {
      scope.set(
        threadSummaryPanelSectionExpandedState,
        sectionKey,
        nextIsExpanded,
      );
    };
  let shouldRenderContent =
      mode === "headerless" || isExpanded || mode === "dropdown",
    staticContent = (
      <div className="relative z-0 mt-0.5 overflow-hidden">
        <div className="flex flex-col gap-0.5 px-4">{children}</div>
      </div>
    );
  let createImperativeHandle = () => ({
    collapse: () => setIsExpanded(false),
    expand: () => setIsExpanded(true),
  });
  threadSummaryPanelSectionReactRuntime.useImperativeHandle(
    ref,
    createImperativeHandle,
  );
  let syncAutoCollapseState = () => {
    if (!shouldHandleAutoCollapse) return;
    if (!autoCollapse) {
      autoCollapseState === "collapsed" &&
        scope.set(
          threadSummaryPanelSectionAutoCollapseState,
          sectionKey,
          "pending",
        );
      return;
    }
    if (autoCollapseState !== "pending") return;
    let timeoutId = window.setTimeout(() => {
      scope.set(
        threadSummaryPanelSectionAutoCollapseState,
        sectionKey,
        "collapsed",
      );
    }, THREAD_SUMMARY_PANEL_SECTION_AUTO_COLLAPSE_DELAY_MS);
    return () => window.clearTimeout(timeoutId);
  };
  let autoCollapseEffectDeps = [
    autoCollapse,
    autoCollapseState,
    shouldHandleAutoCollapse,
    scope,
    sectionKey,
  ];
  threadSummaryPanelSectionReactRuntime.useEffect(
    syncAutoCollapseState,
    autoCollapseEffectDeps,
  );
  let cancelAutoCollapse = shouldHandleAutoCollapse
    ? () => {
        scope.set(
          threadSummaryPanelSectionAutoCollapseState,
          sectionKey,
          "canceled",
        );
      }
    : undefined;
  let sectionHeader =
    mode === "headerless" ? null : (
      <ThreadSummaryPanelSectionHeader
        after={
          isFunctionModule.default(after)
            ? after({
                isExpanded,
              })
            : after
        }
        sectionOptions={sectionOptions}
        mode={mode}
        isExpanded={isExpanded}
        onChange={onChange}
        onToggle={() => {
          mode !== "dropdown" && setIsExpanded(!isExpanded);
        }}
        shouldUseReducedMotion={shouldUseReducedMotion}
        titleSuffix={titleSuffix}
      >
        {title}
      </ThreadSummaryPanelSectionHeader>
    );
  let sectionContent = shouldUseReducedMotion ? (
    shouldRenderContent && staticContent
  ) : (
    <Ne initial={false}>
      {shouldRenderContent &&
        threadSummaryPanelSectionJsxRuntime.jsx(
          p.div,
          {
            initial: collapsedSectionMotionState,
            animate: expandedSectionMotionState,
            exit: collapsedSectionMotionState,
            transition: ft,
            className: "relative z-0 overflow-hidden",
            children: (
              <div className="flex flex-col gap-0.5 px-4">{children}</div>
            ),
          },
          "content",
        )}
    </Ne>
  );
  return (
    <section
      className="relative z-0 flex flex-col pb-3 after:absolute after:inset-x-4 after:bottom-0 after:h-[0.5px] after:bg-token-border-default after:content-[''] last:pb-0 last:after:hidden"
      onClick={cancelAutoCollapse}
    >
      {sectionHeader}
      {sectionContent}
    </section>
  );
}

function ThreadSummaryPanelSectionHeader(props) {
  let {
      mode,
      sectionOptions,
      after,
      children,
      isExpanded,
      onToggle,
      onChange,
      shouldUseReducedMotion,
      titleSuffix,
    } = props,
    hasMultipleSectionOptions =
      sectionOptions != null && sectionOptions.length > 1,
    toggleHandler = mode === "accordion" ? onToggle : undefined,
    titleNode = <span className="truncate">{children}</span>;
  let collapsedTitleSuffix = isExpanded ? null : titleSuffix,
    chevronIcon =
      (mode === "accordion" || hasMultipleSectionOptions) &&
      threadSummaryPanelSectionJsxRuntime.jsx(ht, {
        "aria-hidden": "true",
        className: S(
          "icon-2xs shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100",
          !shouldUseReducedMotion && "transition-transform",
          isExpanded ? "opacity-0" : "opacity-100",
          isExpanded ? "rotate-0" : "-rotate-90",
        ),
      });
  let toggleButton = (
    <button
      aria-expanded={isExpanded}
      className="group/section-toggle inline-flex min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-md py-0.5 pr-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={toggleHandler}
      type="button"
    >
      {titleNode}
      {collapsedTitleSuffix}
      {chevronIcon}
    </button>
  );
  let headerControl =
    mode === "dropdown" && hasMultipleSectionOptions ? (
      <H triggerButton={toggleButton}>
        {sectionOptions?.map((option) =>
          threadSummaryPanelSectionJsxRuntime.jsx(
            ye,
            {
              onSelect: () => onChange?.(option),
              children: option,
            },
            option,
          ),
        )}
      </H>
    ) : (
      toggleButton
    );
  let afterNode =
    after == null ? null : <div className="flex min-w-0 flex-1">{after}</div>;
  return (
    <header className="sticky top-0 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 bg-token-dropdown-background ps-4 pe-2.5 pb-0.5 text-base text-token-text-tertiary">
      {headerControl}
      {afterNode}
    </header>
  );
}

var threadSummaryPanelSectionModule,
  isFunctionModule,
  threadSummaryPanelSectionReactRuntime,
  threadSummaryPanelSectionJsxRuntime,
  THREAD_SUMMARY_PANEL_SECTION_AUTO_COLLAPSE_DELAY_MS,
  THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE_PREFIX,
  DEFAULT_THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE,
  collapsedSectionMotionState,
  expandedSectionMotionState,
  threadSummaryPanelSectionExpandedState,
  threadSummaryPanelSectionAutoCollapseState,
  initThreadSummaryPanelSectionChunk = once(() => {
    threadSummaryPanelSectionModule = q();
    Ut();
    bt();
    isFunctionModule = toEsModule(un(), 1);
    c();
    threadSummaryPanelSectionReactRuntime = toEsModule(G(), 1);
    an();
    Si();
    me();
    Oe();
    a();
    $n();
    threadSummaryPanelSectionJsxRuntime = getJsxRuntime();
    THREAD_SUMMARY_PANEL_SECTION_AUTO_COLLAPSE_DELAY_MS = 3e4;
    THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE_PREFIX =
      "thread-summary-panel-section-expanded-";
    DEFAULT_THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE = null;
    collapsedSectionMotionState = {
      height: 0,
      opacity: 0,
      marginTop: 0,
    };
    expandedSectionMotionState = {
      height: "auto",
      opacity: 1,
      marginTop: 2,
    };
    threadSummaryPanelSectionExpandedState = Be(
      (sectionKey) =>
        `${THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE_PREFIX}${sectionKey}`,
      DEFAULT_THREAD_SUMMARY_PANEL_SECTION_EXPANDED_STATE,
    );
    threadSummaryPanelSectionAutoCollapseState = bn(Fe, () => "pending");
  });
function BranchChangesSummaryRow(props) {
  let { onOpenReviewTab, diffStats, isDiffStatsLoading } = props,
    branchIcon = Ym.jsx(uc, {
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
    Ym.jsx(rr, {
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
var Jm,
  Ym,
  Xm = once(() => {
    Jm = q();
    Jn();
    d();
    Nl();
    pc();
    initSummaryPanelRowChunk();
    Ym = getJsxRuntime();
  });
function Zm({ baseBranch, headBranch, number }) {
  return [
    "## Pull request comments:",
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and address the attached outstanding PR comments with the smallest safe changes.`,
    "Start from the attached unresolved review threads and comments.",
    "Address every actionable comment without asking the user which ones to handle.",
    "If a comment needs clarification, is already outdated, or should not be changed, explain that clearly instead of guessing.",
    ir,
    "Address all actionable attached PR feedback.",
  ].join("\n");
}
function Qm({ baseBranch, conversationId, headBranch, prNumber }) {
  return (
    (conversationId == null ? "missing-conversation" : null) ??
    (baseBranch == null || headBranch == null ? "missing-pr-info" : null) ??
    (prNumber == null ? "missing-pr-info" : null)
  );
}
function $m(e, { attached, commentAttachments, conversationId }) {
  return conversationId == null || commentAttachments.length === 0
    ? false
    : (Wi(e, conversationId, (e) => {
        if (attached) return th(e, commentAttachments);
        let r = new Set(commentAttachments.map(se)),
          i = e.filter((item) => !r.has(se(item)));
        return i.length === e.length ? e : i;
      }),
      true);
}
function eh(
  e,
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
    : ($m(e, {
        attached: true,
        commentAttachments,
        conversationId,
      }),
      as(
        e,
        Zm({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      focusComposer && ts(),
      true);
}
function th(e, t) {
  let n = [...e],
    r = new Set(e.map(se)),
    i = false;
  for (let e of t) {
    let t = se(e);
    r.has(t) || (r.add(t), n.push(e), (i = true));
  }
  return i ? n : e;
}
var nh = once(() => {
  da();
  cs();
  Zo();
  en();
  at();
});
function rh(e) {
  let { reason } = e;
  if (reason == null) return null;
  switch (reason) {
    case "missing-conversation": {
      let e;
      return (
        <FormattedMessage
          id="localConversation.pullRequest.comments.missingConversation"
          defaultMessage="Addressing PR comments is only available in an active chat"
          description="Tooltip shown when the PR comments action is disabled because there is no active conversation"
        />
      );
    }
    case "missing-pr-info": {
      let e;
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
function ih(e) {
  let { reason } = e;
  if (reason == null) return null;
  switch (reason) {
    case "branch-mismatch": {
      let e;
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.branchMismatch"
          defaultMessage="Switch back to the chat branch to use Fix"
          description="Tooltip shown when Fix is disabled because the checked out branch differs from the thread branch"
        />
      );
    }
    case "closed-pr": {
      let e;
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.closedPullRequest"
          defaultMessage="Fix is only available for open pull requests"
          description="Tooltip shown when Fix is disabled because the pull request is closed"
        />
      );
    }
    case "missing-branch-info": {
      let e;
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingBranchInfo"
          defaultMessage="Fix requires both the head and base branch"
          description="Tooltip shown when Fix is disabled because the pull request branch metadata is unavailable"
        />
      );
    }
    case "missing-pr-info": {
      let e;
      return (
        <FormattedMessage
          id="localConversation.pullRequest.fix.missingPullRequestInfo"
          defaultMessage="Failed to parse the pull request info needed for Fix"
          description="Tooltip shown when Fix is disabled because required pull request information is unavailable"
        />
      );
    }
    case "missing-conversation": {
      let e;
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
var ah,
  oh,
  sh = once(() => {
    ah = q();
    Jn();
    oh = getJsxRuntime();
  });
function ch({
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
var lh = once(() => {});
function uh({ baseBranch, headBranch, number }) {
  return [
    f,
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
    ir,
    "Use gh to inspect the failing CI and make the smallest safe fix. Once everything is fixed, commit and push it.",
  ].join("\n");
}
function dh(e) {
  return e.link ?? `${e.workflow ?? ""}:${e.name}`;
}
function fh(e, { attached, checks }) {
  let r = checks.filter((item) => item.status === "failing");
  return r.length === 0
    ? false
    : (ms(e, (e) => {
        if (!attached) {
          let t = new Set(r.map(dh));
          e.pullRequestChecks = e.pullRequestChecks.filter(
            (item) => !t.has(dh(item)),
          );
          return;
        }
        let n = new Set(e.pullRequestChecks.map(dh));
        e.pullRequestChecks.push(...r.filter((item) => !n.has(dh(item))));
      }),
      true);
}
function ph(e, { baseBranch, checks, headBranch, number }) {
  return baseBranch == null ||
    headBranch == null ||
    number == null ||
    !fh(e, {
      attached: true,
      checks,
    })
    ? false
    : (as(
        e,
        uh({
          baseBranch,
          headBranch,
          number,
        }),
      ),
      ts(),
      true);
}
function mh({ baseBranch, headBranch, number }) {
  return [
    f,
    `Review ${`PR ${number}`}${` (${headBranch} -> ${baseBranch})`} and resolve the attached merge conflict blocker with the smallest safe changes.`,
    "Start from the attached merge conflict context. Then use `gh pr view` and local git state to confirm the current merge blocker before changing code.",
    "Fetch the latest base branch, merge or rebase as appropriate for this repository, resolve the conflicts, and avoid unrelated refactors.",
    "After resolving conflicts, run the narrowest relevant verification, commit and push the resolution, and summarize the conflict and result.",
    ir,
    "Resolve the PR merge conflicts, then commit and push the fix.",
  ].join("\n");
}
function hh(e, t) {
  return t == null
    ? false
    : (as(
        e,
        mh({
          baseBranch: t.baseBranch,
          headBranch: t.headBranch,
          number: t.number,
        }),
      ),
      gh(e, t),
      ts(),
      true);
}
function gh(e, t) {
  ms(e, (e) => {
    e.pullRequestMergeConflict = t;
  });
}
var _h = once(() => {
  cs();
  Zo();
  at();
});
function vh(e) {
  let { children, content, triggerAsChild = false } = e,
    o = xh.jsx(hr, {
      children: content,
    });
  let s = xh.jsx(hr, {
    children,
  });
  return xh.jsx(jr, {
    align: "start",
    className: "w-full border-0 bg-transparent p-0 text-left",
    delayDuration: 0,
    interactive: true,
    side: "right",
    sideOffset: 4,
    variant: "rich",
    tooltipContent: o,
    tooltipMaxWidth:
      "min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
    triggerAsChild: triggerAsChild,
    children: s,
  });
}
function yh(e) {
  let { children } = e,
    r =
      children == null ? null : (
        <div className="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto px-3">
          {children}
        </div>
      );
  return (
    <div className="flex max-h-96 min-h-0 w-96 max-w-full flex-1 flex-col overflow-hidden rounded-xl py-1">
      {r}
    </div>
  );
}
var bh,
  xh,
  Sh = once(() => {
    bh = q();
    Gn();
    xh = getJsxRuntime();
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
    orderedChecks = Mh.flatMap(getChecksByStatus),
    checkRows = orderedChecks.map(PullRequestCheckFlyoutRowItem);
  let popoverContent = jh.jsx(yh, {
    children: checkRows,
  });
  let fixFailingChecksAction = hasFixableFailingChecks
    ? jh.jsx(PullRequestInlineActionButton, {
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
  return jh.jsx(vh, {
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
          wi({
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
      return jh.jsx(zc, {
        className: "icon-sm shrink-0 text-token-charts-red",
      });
    }
    case "passing": {
      return jh.jsx(ve, {
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
var Ah,
  jh,
  Mh,
  Nh = once(() => {
    Ah = q();
    Jn();
    ke();
    tn();
    initPullRequestCheckStatusIconChunk();
    ql();
    Kc();
    Ul();
    initPullRequestInlineActionButtonChunk();
    Sh();
    initSummaryPanelRowChunk();
    jh = getJsxRuntime();
    Mh = ["failing", "pending", "skipped", "unknown", "passing"];
  });
function PullRequestStatusDetailRows(props) {
  let { conversationId, headBranch, pullRequestStatus } = props,
    scope = B(fi),
    storedThreadBranch = K(pi, conversationId),
    reviewCommentAttachments = K(ki, conversationId);
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
      !reviewCommentKeySet.has(se(commentAttachment));
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
      ? ch({
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
      ? ch({
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
      ? Qm({
          baseBranch: baseBranch,
          conversationId,
          headBranch: pullRequestHeadBranch,
          prNumber: pullRequestNumber,
        })
      : null;
  let reviewCommentsFixDisabledReason = commentsFixDisabledReason,
    openMergeConflictsFix = () => {
      hh(
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
      eh(scope, {
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
        : Rh.jsx(ih, {
            reason: checksFixDisabledReason,
          });
  let handleFixFailingChecks = (checks) => {
    ph(scope, {
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
      actions={Rh.jsx(PullRequestInlineActionButton, {
        color: "ghostTertiary",
        disabled: conflictFixDisabledReason != null,
        tooltipContent:
          conflictFixDisabledReason == null
            ? undefined
            : Rh.jsx(ih, {
                reason: conflictFixDisabledReason,
              }),
        onClick: handleFixMergeConflicts,
        children: (
          <FormattedMessage
            id="codex.localConversation.gitSummary.fixMergeConflicts"
            defaultMessage="Fix"
            description="Summary panel row action label for resolving pull request merge conflicts"
          />
        ),
      })}
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
    ? Rh.jsx(vh, {
        triggerAsChild: true,
        content: Rh.jsx(yh, {
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
        }),
        children: (
          <SummaryPanelRow
            actions={
              hasNewCommentAttachments
                ? Rh.jsx(PullRequestInlineActionButton, {
                    color: "ghostTertiary",
                    disabled: reviewCommentsFixDisabledReason != null,
                    tooltipContent:
                      reviewCommentsFixDisabledReason == null
                        ? undefined
                        : Rh.jsx(rh, {
                            reason: reviewCommentsFixDisabledReason,
                          }),
                    onClick: handleFixReviewComments,
                    children: (
                      <FormattedMessage
                        id="codex.localConversation.gitSummary.fixComments"
                        defaultMessage="Fix"
                        description="Summary panel row action label for fixing pull request comments"
                      />
                    ),
                  })
                : undefined
            }
            actionsVisible={hasNewCommentAttachments}
            icon={
              <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                <Ko className="icon-xs text-token-text-tertiary" />
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
function isFailingPullRequestCheckStatus(e) {
  return e.status === "failing";
}
function getReviewCommentAttachmentKey(e) {
  return se(e);
}
var Lh,
  Rh,
  zh = once(() => {
    Lh = q();
    c();
    Jn();
    nt();
    da();
    en();
    Oo();
    tl();
    Yc();
    nh();
    sh();
    lh();
    initPullRequestInlineActionButtonChunk();
    _h();
    ls();
    _();
    lc();
    Sh();
    initSummaryPanelRowChunk();
    Nh();
    Rh = getJsxRuntime();
  });
function Bh(e, t) {
  return e?.trim() || t;
}
var Vh = once(() => {});
function Hh(e) {
  let { description } = e,
    r = description ?? (
      <FormattedMessage
        id="pullRequestSidePanel.error.description"
        defaultMessage="Couldn’t load this pull request section"
        description="Fallback error description for pull request sections"
      />
    );
  return <div className="px-2 py-3 text-base text-token-charts-red">{r}</div>;
}
var Uh,
  Wh,
  Gh = once(() => {
    Uh = q();
    Jn();
    Wh = getJsxRuntime();
  });
function Kh(e) {
  let { action, children } = e,
    i = Xh.jsx(ht, {
      className: "icon-2xs rotate-180 transition-transform group-open:rotate-0",
    });
  let a = (
    <span className="flex min-w-0 items-center gap-1">
      {children}
      {i}
    </span>
  );
  let o =
    action == null ? null : (
      <span className="flex shrink-0" onClick={Jh} onKeyDown={qh}>
        {action}
      </span>
    );
  return (
    <summary className="flex min-h-9 cursor-interaction list-none items-center justify-between gap-2 text-base text-token-text-tertiary marker:hidden">
      {a}
      {o}
    </summary>
  );
}
function qh(event) {
  event.stopPropagation();
}
function Jh(event) {
  event.preventDefault();
  event.stopPropagation();
}
var Yh,
  Xh,
  Zh = once(() => {
    Yh = q();
    Si();
    Xh = getJsxRuntime();
  });
function Qh(e) {
  let { label } = e,
    r = eg.jsx(rr, {
      className: "icon-sm",
    });
  return (
    <div
      aria-busy="true"
      className="flex min-h-16 items-center justify-center text-token-text-tertiary"
    >
      {r}
      <span className="sr-only">{label}</span>
    </div>
  );
}
var $h,
  eg,
  tg = once(() => {
    $h = q();
    d();
    eg = getJsxRuntime();
  });
function PullRequestSidePanelChecksSection(props) {
  let { data, error, fixDisabledReason, item, loading } = props,
    intl = ur(),
    scope = B(fi),
    attachedChecks = W(qo),
    failingChecks = data?.checks.filter(isFailingPullRequestCheck),
    attachedCheckKeys = new Set(attachedChecks.map(dh)),
    allFailingChecksAttached =
      failingChecks != null &&
      failingChecks.length > 0 &&
      failingChecks.every((check) => attachedCheckKeys.has(dh(check)));
  let fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestChecksSectionJsxRuntime.jsx(ih, {
            reason: fixDisabledReason,
          }),
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
                  fh(scope, {
                    attached: false,
                    checks: failingChecks,
                  });
                  return;
                }
                ph(scope, {
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
  let header = <Kh action={headerAction}>{title}</Kh>;
  let body = (
    <div className="rounded-xl bg-token-main-surface-primary py-1 ps-4 shadow-sm">
      {error == null ? (
        loading || data == null ? (
          <Qh
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
            isCheckAttached={(check) => attachedCheckKeys.has(dh(check))}
            onFixCheck={(check) => {
              ph(scope, {
                baseBranch: item.baseBranch,
                checks: [check],
                headBranch: item.headBranch,
                number: item.number,
              });
            }}
            onRemoveCheck={(check) => {
              fh(scope, {
                attached: false,
                checks: [check],
              });
            }}
          />
        ) : (
          <Br.Message compact={true}>
            <FormattedMessage
              id="pullRequestSidePanel.checks.empty"
              defaultMessage="No checks reported"
              description="Empty pull request checks list"
            />
          </Br.Message>
        )
      ) : (
        <Hh description={error} />
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
    pullRequestChecksSectionModule = q();
    c();
    Jn();
    an();
    cs();
    sh();
    initPullRequestInlineActionButtonChunk();
    _h();
    initPullRequestCheckRowsChunk();
    _();
    Gh();
    Zh();
    tg();
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
    intl = ur(),
    scope = B(fi),
    conversationId = scope.value.routeConversationId,
    attachedCommentAttachments = K(ki, conversationId),
    content;
  {
    let commentActivityItems =
        data == null
          ? null
          : getPullRequestCommentActivityItems(data.activityItems),
      commentAttachments = data?.commentAttachments,
      attachedCommentAttachmentKeys = new Set(
        attachedCommentAttachments.map(se),
      );
    let allCommentsAttached =
        commentAttachments != null &&
        commentAttachments.length > 0 &&
        commentAttachments.every((attachment) =>
          attachedCommentAttachmentKeys.has(se(attachment)),
        ),
      fixDisabledTooltip =
        fixDisabledReason == null
          ? undefined
          : pullRequestCommentsSectionJsxRuntime.jsx(ih, {
              reason: fixDisabledReason,
            });
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
                  $m(scope, {
                    attached: false,
                    commentAttachments,
                    conversationId,
                  });
                  return;
                }
                eh(scope, {
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
    header = <Kh action={headerAction}>{title}</Kh>;
    content = (
      <details open={true} className="group flex flex-col pb-8">
        {header}
        {error == null ? (
          loading || data == null ? (
            <Qh
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
                    attachedCommentAttachmentKeys.has(se(commentAttachment));
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
                                  eh(scope, {
                                    baseBranch: item.baseBranch,
                                    commentAttachments: [commentAttachment],
                                    conversationId,
                                    focusComposer: true,
                                    headBranch: item.headBranch,
                                    number: item.number,
                                  });
                                  return;
                                }
                                $m(scope, {
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
            <Br.Message compact={true}>
              <FormattedMessage
                id="pullRequestSidePanel.comments.empty"
                defaultMessage="No comments"
                description="Empty pull request comments list"
              />
            </Br.Message>
          )
        ) : (
          <Hh description={error} />
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
    pullRequestCommentsSectionModule = q();
    c();
    Jn();
    da();
    an();
    en();
    nh();
    sh();
    initPullRequestInlineActionButtonChunk();
    ls();
    _();
    Gh();
    Zh();
    tg();
    initPullRequestReviewerBadgeModelsChunk();
    pullRequestCommentsSectionJsxRuntime = getJsxRuntime();
  }),
  _g,
  vg,
  yg = once(() => {
    toEsModule(G());
    _g = getJsxRuntime();
    vg = (e) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 20 20"
        {...e}
      >
        <path d="M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Z" />
      </svg>
    );
  });
function PullRequestConflictFileRows(props) {
  let { error, files, hasError, loading, repository } = props;
  if (hasError) {
    return <Hh description={error} />;
  }
  if (loading || files == null) {
    return (
      <Qh
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
      <Br.Message compact={true}>
        <FormattedMessage
          id="pullRequestSidePanel.conflicts.empty"
          defaultMessage="No changed files reported"
          description="Empty merge conflict file list"
        />
      </Br.Message>
    );
  }
  let rows;
  {
    let toConflictFileRow = (filePath) => ({
      icon: (
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          {pullRequestConflictFileRowsJsxRuntime.jsx(vg, {
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
    pullRequestConflictFileRowsModule = q();
    Jn();
    an();
    yg();
    initPullRequestMetadataRowsChunk();
    Gh();
    tg();
    pullRequestConflictFileRowsJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelConflictsSection(props) {
  let { error, files, fixDisabledReason, hasError, item, loading, repo } =
      props,
    scope = B(fi),
    conflictsAreAttached = W(ko)?.url === item.url,
    fixDisabledTooltip =
      fixDisabledReason == null
        ? undefined
        : pullRequestConflictsSectionJsxRuntime.jsx(ih, {
            reason: fixDisabledReason,
          });
  let actionDisabled = !conflictsAreAttached && fixDisabledReason != null,
    actionTooltip = conflictsAreAttached ? undefined : fixDisabledTooltip,
    handleToggleConflictsFix = () => {
      if (conflictsAreAttached) {
        gh(scope, null);
        return;
      }
      hh(scope, {
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
  let header = <Kh action={headerAction}>{title}</Kh>;
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
    pullRequestConflictsSectionModule = q();
    c();
    Jn();
    cs();
    sh();
    initPullRequestInlineActionButtonChunk();
    _h();
    _();
    initPullRequestConflictFileRowsChunk();
    Zh();
    pullRequestConflictsSectionJsxRuntime = getJsxRuntime();
  });
function PullRequestSidePanelDescriptionSection(props) {
  let { body, error, loading } = props,
    header = (
      <Kh>
        <FormattedMessage
          id="pullRequestSidePanel.description.title"
          defaultMessage="Description"
          description="Pull request description section title"
        />
      </Kh>
    );
  return (
    <details open={true} className="group flex flex-col">
      {header}
      <div className="group-open:pt-2">
        {error == null ? (
          loading || body == null ? (
            <Qh
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
          <Hh description={error} />
        )}
      </div>
    </details>
  );
}
var pullRequestDescriptionSectionModule,
  pullRequestDescriptionSectionJsxRuntime,
  initPullRequestSidePanelDescriptionSectionChunk = once(() => {
    pullRequestDescriptionSectionModule = q();
    Jn();
    Fo();
    us();
    Gh();
    Zh();
    tg();
    pullRequestDescriptionSectionJsxRuntime = getJsxRuntime();
  }),
  Mg,
  Ng,
  Pg = once(() => {
    toEsModule(G());
    Mg = getJsxRuntime();
    Ng = (e) => (
      <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
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
  Fg,
  Ig = once(() => {
    r();
    Er();
    n();
    Fg = rn(ut, "gh-user-search", (e) => ({
      enabled: e.query.length > 0,
      params: e,
      retry: false,
      select: (e) => {
        if (e.status === "error") throw Error(e.error);
        return e.users;
      },
      staleTime: ln.ONE_MINUTE,
    }));
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
      : Bg.default([...selectedReviewers, ...availableReviewers], ({ login }) =>
          login.toLowerCase(),
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
var Bg,
  Vg = once(() => {
    Bg = toEsModule(Sn(), 1);
  });
function RequestPullRequestReviewersButton(props) {
  let { hostId, item, pendingReviewerLogins, repo } = props,
    scope = B(ut),
    intl = ur(),
    [open, setOpen] = qg.useState(false),
    [query, setQuery] = qg.useState(""),
    emptySelectedReviewers = [];
  let [selectedReviewers, setSelectedReviewers] = qg.useState(
      emptySelectedReviewers,
    ),
    trimmedQuery = query.trim();
  let currentQuery = trimmedQuery,
    debouncedQuery = Lr(currentQuery, 250),
    searchParams = {
      cwd: item.cwd,
      hostId,
      query: debouncedQuery,
      repo,
    };
  let { data, isError, refetch } = K(Fg, searchParams),
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
                (scope.get(ti).success(
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
  let triggerIcon = <Ae aria-hidden={true} className="icon-2xs" />;
  let triggerButton = (
    <Kn asChild={true}>
      {Jg.jsx(k, {
        "aria-label": triggerLabel,
        color: "secondary",
        size: "iconMd",
        children: triggerIcon,
      })}
    </Kn>
  );
  let dialogTitle = Jg.jsx(_r, {
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
          {Jg.jsx(k, {
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
    <Nn
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
            {Jg.jsx(rr, {
              className: "icon-2xs",
            })}
          </span>
        ) : (
          Jg.jsx(k, {
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
    <Pr align="end">
      {dialogTitle}
      {reviewerSearchMenu}
      {requestErrorMessage}
      {requestFooter}
    </Pr>
  );
  return (
    <On open={open} onOpenChange={handleOpenChange}>
      {triggerButton}
      {popoverContent}
    </On>
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
var Kg,
  qg,
  Jg,
  Yg = once(() => {
    Kg = q();
    c();
    qg = toEsModule(G(), 1);
    Jn();
    Ye();
    Hn();
    Nu();
    d();
    wn();
    _t();
    Jr();
    initPullRequestUpdateMutationChunk();
    initPullRequestAnalyticsChunk();
    r();
    Vn();
    Ig();
    Vg();
    Jg = getJsxRuntime();
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
    branchIcon = Z.jsx(sr, {
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
  let mergeStatusLabel = Z.jsx(PullRequestOverviewMergeStatusLabel, {
    mergeBlocker,
  });
  let mergeStatusRow = (
    <SummaryPanelRow
      density="comfortable"
      icon={mergeStatusIcon}
      label={mergeStatusLabel}
    />
  );
  let reviewers = comments?.reviewers ?? null,
    reviewersRow = Z.jsx(PullRequestOverviewReviewersRow, {
      hostId,
      item,
      repo,
      reviewers,
    });
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
        icon={Z.jsx(zc, {
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
        icon={Z.jsx(rr, {
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
        icon={Z.jsx(zc, {
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
        icon={Z.jsx(rr, {
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
    icon = <Ng className="icon-sm shrink-0 text-token-text-tertiary" />;
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
  return Z.jsx(rowComponent, {
    density,
    icon,
    label,
    labelClassName: "flex min-w-0 flex-1 items-center text-token-text-tertiary",
  });
}
function renderPullRequestOverviewReviewerBadge(reviewer) {
  return Z.jsx(
    jr,
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
              {Z.jsx(ed, {
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
            className={S(
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
var n_,
  Z,
  r_ = once(() => {
    n_ = q();
    Ut();
    Jn();
    d();
    Gn();
    Nl();
    y();
    Eu();
    Pg();
    $u();
    Kc();
    Bl();
    Js();
    ps();
    initSummaryPanelRowChunk();
    Yg();
    initPullRequestReviewerBadgeModelsChunk();
    Z = getJsxRuntime();
  });
function PullRequestSidePanelDetails(props) {
  let { bodyError, bodyIsLoading, item, pullRequestBody, request } = props,
    scope = B(fi),
    { data } = W(Mi),
    fixDisabledReason = xc({
      currentBranch: data,
      storedThreadBranch: item.headBranch,
    }).hasThreadBranchMismatch
      ? "branch-mismatch"
      : null,
    hasOpenPullRequest = pullRequestBody?.hasOpenPr ?? null,
    mergeFixDisabledReason = ch({
      baseBranch: item.baseBranch,
      conversationId: scope.value.routeConversationId,
      fixDisabledReason,
      hasOpenPr: hasOpenPullRequest,
      headBranch: item.headBranch,
      prNumber: item.number,
    });
  let checksQueryConfig = {
    intervalMs: ln.ONE_MINUTE,
    staleTime: ln.ONE_MINUTE,
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
    } = jn("gh-pr-checks", checksQueryOptions),
    commentsQueryConfig = {
      intervalMs: ln.ONE_MINUTE,
      staleTime: ln.ONE_MINUTE,
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
    } = jn("gh-pr-comments", commentsQueryOptions),
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
      staleTime: ln.ONE_MINUTE,
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
    } = jn("gh-pr-diff", diffQueryOptions),
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
    pullRequestSidePanelDetailsModule = q();
    c();
    en();
    bl();
    Yc();
    lh();
    po();
    _();
    Er();
    n();
    initPullRequestSidePanelChecksSectionChunk();
    initPullRequestSidePanelCommentsSectionChunk();
    initPullRequestSidePanelConflictsSectionChunk();
    initPullRequestSidePanelDescriptionSectionChunk();
    r_();
    pullRequestSidePanelDetailsJsxRuntime = getJsxRuntime();
  });

function PullRequestSidePanelHeader(props) {
  let { hostId, item, pullRequestBody, request } = props,
    intl = ur(),
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
    wi({
      event,
      href: item.url,
      initiator: "pull_request_link",
    });
  };
  let externalIcon = <In className="icon-sm" href={item.url} />;
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
    pullRequestSidePanelTabModule = q();
    Jn();
    ke();
    Xr();
    Er();
    n();
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
        intervalMs: ln.ONE_MINUTE,
        staleTime: ln.ONE_MINUTE,
      };
      let bodyQueryOptions = {
        source: "pull_request_board",
        params: request,
        queryConfig: bodyQueryConfig,
      };
      let { data, error, isLoading } = jn("gh-pr-body", bodyQueryOptions),
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
    pullRequestSidePanelTabReactRuntime = toEsModule(G(), 1);
    Za();
    Js();
    initPullRequestSidePanelTabChunk();
    ho();
  });
function PullRequestSummaryRow(props) {
  let { conversationId, hostId, pullRequestStatus, visualState } = props,
    scope = B(Fe),
    intl = ur(),
    isBrowserSidebarEnabled = W(z),
    canOpenInSidePanel = K(An, "1590905736"),
    { boardItem } = pullRequestStatus,
    shouldOpenInSidePanel = canOpenInSidePanel && boardItem != null,
    pullRequestUrl = pullRequestStatus.url ?? boardItem?.url ?? null,
    openInBrowser = (event) => {
      pullRequestUrl != null &&
        (boardItem != null &&
          trackPullRequestAction(scope, {
            action: "open_in_browser",
            item: boardItem,
            surface: "thread_side_panel",
          }),
        wi({
          event: event,
          href: pullRequestUrl,
          initiator: "pull_request_link",
        }));
    };
  let handleOpenInBrowser = openInBrowser,
    openPullRequest = (event) => {
      if (pullRequestUrl != null) {
        if (shouldOpenInSidePanel) {
          logPullRequestViewedFromSidePanel(scope, {
            item: boardItem,
            surface: "thread_side_panel",
          });
          openPullRequestSidePanelTab(scope, {
            hostId,
            item: boardItem,
            repo: pullRequestStatus.repo,
          });
          return;
        }
        handleOpenInBrowser(event);
      }
    };
  let handleOpenPullRequest = openPullRequest,
    summaryTitle = formatPullRequestSummaryTitle(
      pullRequestStatus.number,
      pullRequestStatus.title,
      intl,
    );
  let rowLabel = summaryTitle,
    statusIcon = (
      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <Ws className="icon-xs" state={visualState} tone="currentColor" />
      </span>
    );
  let externalLinkTrailingIcon =
    pullRequestUrl == null ? undefined : shouldOpenInSidePanel ? (
      <a
        aria-label={intl.formatMessage({
          id: "codex.localConversation.gitSummary.openPullRequestOnGitHub",
          defaultMessage: "Open pull request on GitHub",
          description:
            "Accessible label for opening a pull request on GitHub from its summary row",
        })}
        className="cursor-interaction text-token-text-tertiary hover:text-token-foreground"
        href={pullRequestUrl}
        rel="noreferrer"
        target="_blank"
        onClick={(event) => {
          event.stopPropagation();
          handleOpenInBrowser(event);
        }}
        onKeyDown={stopPullRequestSummaryLinkPropagation}
      >
        <In className="icon-xs" href={pullRequestUrl} />
      </a>
    ) : (
      <In className="icon-xs text-token-text-tertiary" href={pullRequestUrl} />
    );
  let rowClickHandler =
      pullRequestUrl == null ? undefined : handleOpenPullRequest,
    summaryRow = (
      <SummaryPanelRow
        aria-label={rowLabel}
        icon={statusIcon}
        label={rowLabel}
        trailing={externalLinkTrailingIcon}
        onClick={rowClickHandler}
      />
    );
  let rowNode = summaryRow;
  if (
    conversationId == null ||
    pullRequestUrl == null ||
    !hs({
      href: pullRequestUrl,
      isBrowserSidebarEnabled: isBrowserSidebarEnabled,
    })
  )
    return rowNode;
  let browserSidebarItems = jo({
    conversationId,
    href: pullRequestUrl,
    initiator: "side_panel_menu",
  });
  return <Eo items={browserSidebarItems}>{rowNode}</Eo>;
}
function stopPullRequestSummaryLinkPropagation(event) {
  event.stopPropagation();
}
function formatPullRequestSummaryTitle(number, title, intl) {
  if (title != null) return title;
  let fallbackNumber =
    number == null
      ? intl.formatMessage({
          id: "codex.localConversation.gitSummary.pullRequestFallbackNumber",
          defaultMessage: "-",
          description:
            "Fallback displayed when a pull request number is unavailable",
        })
      : `#${number}`;
  return intl.formatMessage(
    {
      id: "codex.localConversation.gitSummary.pullRequestWithState",
      defaultMessage: "PR {number}",
      description: "GitHub PR row with pull request number and status",
    },
    {
      number: fallbackNumber,
    },
  );
}
var b_,
  x_,
  S_ = once(() => {
    b_ = q();
    c();
    Jn();
    Nt();
    Do();
    Yo();
    ke();
    Xr();
    initPullRequestAnalyticsChunk();
    Js();
    me();
    o();
    initPullRequestSidePanelOpenerChunk();
    initSummaryPanelRowChunk();
    x_ = getJsxRuntime();
  });
function LocalConversationGitSummary(props) {
  let {
      conversationId,
      cwd,
      hostConfig,
      workspaceBrowserRoot,
      onCreatePullRequest,
    } = props,
    threadWorkspaceBrowserRoot = K(Wn, conversationId),
    storedThreadBranch = K(pi, conversationId),
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
  let createPullRequestActionState = K(_s, createPullRequestActionParams),
    headBranchName = headBranchQuery.data?.trim() ?? "",
    normalizedHeadBranchName = Bh(storedThreadBranch, headBranchName);
  let headBranch = normalizedHeadBranchName,
    hasEmptyHeadBranch =
      headBranchQuery.isSuccess && headBranchName.length === 0,
    workflowParams = {
      cwd,
      hostId: hostConfig.id,
    };
  let activeWorkflow = K(Oc, workflowParams),
    workflowPhase = activeWorkflow?.phase ?? null,
    isCreatePrWorkflow = activeWorkflow?.workflow === "create-pr",
    ghCliAvailability = K(ya, hostConfig.id),
    pullRequestStatusParams = {
      cwd: workspaceRoot,
      headBranch: headBranch,
      hostId: hostConfig.id,
      operationSource: "local_conversation_git_summary",
    };
  let pullRequestStatusQuery = K(qa, pullRequestStatusParams);
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
    return A_.jsx(CreatePullRequestSummaryAction, {
      createPullRequestActionState: createPullRequestActionState,
      ghCliAvailability: ghCliAvailability,
      onCreatePullRequest,
      workflowPhase: workflowPhase,
    });
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
    pullRequestSummaryRow = A_.jsx(PullRequestSummaryRow, {
      conversationId,
      hostId: hostConfig.id,
      pullRequestStatus: pullRequestStatus,
      visualState: mergeVisualState,
    });
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
    spinnerIcon = A_.jsx(rr, {
      className: j_,
    });
  let phaseLabel = A_.jsx(nl, {
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
  return <Fr className={j_} />;
}
var k_,
  A_,
  j_,
  M_ = once(() => {
    k_ = q();
    c();
    Jn();
    nt();
    d();
    jc();
    vr();
    hc();
    ic();
    Qs();
    Ss();
    initPullRequestVisualStateChunk();
    io();
    ka();
    initSummaryPanelRowChunk();
    zh();
    Vh();
    S_();
    A_ = getJsxRuntime();
    j_ = "icon-sm shrink-0 text-token-text-tertiary";
  });
function ThreadSummaryEnvironmentModeControls(props) {
  let { conversationId, onOpenChange } = props,
    scope = B(fi),
    composerMode = W(Ro),
    setComposerMode = (nextMode) => {
      $o(scope, null, nextMode);
    };
  let conversationRemoteState = $i(conversationId),
    threadHostId = K(En, conversationId) ?? "local",
    conversationCwd = K(Wn, conversationId),
    remoteHostConfig = We(conversationRemoteState.hostId),
    isWorktreeConversation = Ar(conversationCwd, remoteHostConfig);
  let isThreadHandoffSummaryEnabled = Vr("1115442235"),
    conversationTitle = K(Ui, conversationId),
    threadHandoff =
      isThreadHandoffSummaryEnabled &&
      shouldShowThreadHandoffInSummary({
        isCompactWindow: lo(),
      }) &&
      conversationRemoteState.cwd != null
        ? {
            conversationTitle,
            cwd: D(conversationRemoteState.cwd),
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
    F_.jsx(qt, {
      electron: true,
      browser: true,
      children: F_.jsx(CloudEnvironmentDropdown, {
        composerMode,
        conversationId,
        disabled: isWorktreeConversation,
        setComposerMode,
        side: "left",
      }),
    });
  return (
    <div className="relative flex w-full items-center gap-2">
      {localRemoteDropdown}
      {cloudEnvironmentDropdown}
    </div>
  );
}
var P_,
  F_,
  I_ = once(() => {
    P_ = q();
    c();
    gn();
    nt();
    ca();
    ie();
    initCloudEnvironmentDropdownChunk();
    cs();
    initThreadHandoffHelpersChunk();
    initLocalRemoteDropdownChunk();
    Re();
    Fi();
    fa();
    _();
    Ht();
    ae();
    F_ = getJsxRuntime();
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
    routeScope = B(Fe),
    diffStatsQuery = W(La),
    environmentTerminalController = W(Ia),
    diffStats = diffStatsQuery.metrics,
    createBranchActionRef = z_.useRef(null),
    createPullRequestActionRef = z_.useRef(null),
    workspaceGitRoot =
      workspaceBrowserRoot == null ? null : qe(workspaceBrowserRoot);
  let emptyBranchControlRow = isCodexWorktree ? (
    <SummaryPanelRow
      icon={B_.jsx(sr, {
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
              icon={B_.jsx(sr, {
                className: "icon-sm shrink-0",
              })}
              label={
                <span className="flex min-w-0 items-center gap-1 text-token-foreground">
                  <span className="min-w-0 truncate">{currentBranch}</span>
                  {disabled
                    ? null
                    : B_.jsx(ht, {
                        className: "icon-2xs shrink-0 text-token-text-tertiary",
                      })}
                </span>
              }
              labelClassName="flex min-w-0 items-center"
              title={switchTooltipText}
              trailing={
                isPending
                  ? B_.jsx(rr, {
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
        {B_.jsx(LocalConversationEnvironmentActionControls, {
          conversationId,
          hostConfig,
          onMenuOpenChange: onForceShow,
          onOpenChange: onForceShow,
          onShowTerminal: (terminalId) => {
            Li(routeScope, terminalId, environmentTerminalController);
          },
          registerCommands: registerEnvironmentActionCommands,
          workspaceRoot: cwd,
        })}
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
  let branchChangesRow = B_.jsx(BranchChangesSummaryRow, {
    onOpenReviewTab,
    diffStats,
    isDiffStatsLoading: diffStatsQuery.isLoading,
  });
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
  let pullRequestControls = B_.jsx(
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
var R_,
  z_,
  B_,
  V_ = once(() => {
    R_ = q();
    c();
    gn();
    z_ = toEsModule(G(), 1);
    Jn();
    d();
    Nl();
    y();
    Si();
    Lu();
    Ds();
    Ri();
    me();
    zi();
    Mm();
    initSummaryPanelRowChunk();
    initThreadSummaryPanelSectionChunk();
    Xm();
    M_();
    I_();
    B_ = getJsxRuntime();
  });
function H_(e) {
  let { automation } = e,
    r = ur(),
    i = B(Fe),
    a;
  {
    let e = ks({
      intl: r,
      nextRunAt: automation.nextRunAt,
      status: automation.status,
    });
    a = r.formatMessage(
      {
        id: "codex.localConversation.heartbeatAutomation.nextRun",
        defaultMessage: "Next run: {nextRunLabel}",
        description:
          "Tooltip shown on the heartbeat automation row in the thread summary panel",
      },
      {
        nextRunLabel: e,
      },
    );
  }
  let o = a,
    s = Dl({
      rrule: automation.rrule,
      intl: r,
      fallbackMessage: r.formatMessage({
        id: "settings.automations.rruleSummaryFallback",
        defaultMessage: "Custom schedule",
        description: "Fallback label when RRULE summary cannot be generated",
      }),
    });
  let c = s,
    l = r.formatMessage({
      id: "codex.localConversation.heartbeatAutomation.open",
      defaultMessage: "Open scheduled task",
      description:
        "Accessible label for opening the active scheduled task from the thread summary panel",
    });
  let u = <Tc className="icon-xs shrink-0" />;
  let d = <span className="min-w-0 flex-1 truncate">{automation.name}</span>;
  let f =
    c == null ? null : (
      <span className="text-size-chat max-w-48 shrink-0 truncate text-token-text-secondary">
        {c}
      </span>
    );
  let p = (
    <>
      {d}
      {f}
    </>
  );
  let m = () => {
    kc({
      scope: i,
      automationId: automation.id,
      title: automation.name,
    });
  };
  return (
    <SummaryPanelRow
      aria-label={l}
      icon={u}
      label={p}
      labelClassName="flex min-w-0 flex-1 items-baseline gap-2"
      onClick={m}
      title={o}
    />
  );
}
var U_,
  W_,
  G_ = once(() => {
    U_ = q();
    c();
    Jn();
    Ol();
    Ps();
    bs();
    Cc();
    me();
    initSummaryPanelRowChunk();
    W_ = getJsxRuntime();
  });
function K_(e) {
  let { sideChats, onOpen } = e,
    i = (e) => (
      <SummaryPanelRow
        icon={
          e.isResponseInProgress ? (
            Y_.jsx(rr, {
              className: "icon-sm shrink-0",
            })
          ) : (
            <Ko className="icon-sm shrink-0" />
          )
        }
        label={e.title}
        onClick={() => onOpen(e)}
      />
    );
  return (
    <SummaryPanelExpandableList items={sideChats} getKey={q_}>
      {i}
    </SummaryPanelExpandableList>
  );
}
function q_(e) {
  return e.tabId;
}
var J_,
  Y_,
  X_ = once(() => {
    J_ = q();
    d();
    Oo();
    initSummaryPanelExpandableList();
    initSummaryPanelRowChunk();
    Y_ = getJsxRuntime();
  });
function Z_(e) {
  let { onOpen, toolSources, webSources } = e,
    a = [];
  for (let e of toolSources)
    a.push({
      source: e,
      type: "tool",
    });
  for (let e of webSources)
    a.push({
      source: e,
      type: "web",
    });
  let o = ur(),
    s = o.formatMessage({
      id: "codex.localConversation.sources.title",
      defaultMessage: "Sources",
      description: "Title for the thread summary side panel sources section",
    });
  let c = s,
    l = o.formatMessage({
      id: "codex.localConversation.sources.webSearch",
      defaultMessage: "Web search",
      description:
        "Label for web search in the thread summary side panel sources section",
    });
  let u = l;
  if (a.length === 0) {
    let e;
    return (
      <div className="py-1 text-base text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.sources.empty"
          defaultMessage="No sources yet"
          description="Empty state for the sources section in the thread summary side panel"
        />
      </div>
    );
  }
  let d = (e) => {
    let t =
      e.type === "tool"
        ? $_(e.source)
        : e.source.type === "page"
          ? e.source.label
          : u;
    return (
      <li key={tv(e)} className="flex">
        {rv.jsx(jr, {
          tooltipContent: t,
          side: "left",
          children: <Q_ label={t} onOpen={onOpen} source={e} />,
        })}
      </li>
    );
  };
  let f = a.map(d);
  return (
    <ul aria-label={c} className="-ml-1 flex flex-wrap gap-0.5">
      {f}
    </ul>
  );
}
function Q_(e) {
  let { label, onOpen, source } = e,
    a,
    o,
    s;
  bb0: switch (source.type) {
    case "tool": {
      let e = ev(source.source);
      let r = e;
      o = source.source.mcpAppId;
      let s =
        r == null
          ? rv.jsx(xe, {
              className: "icon-xs shrink-0",
            })
          : rv.jsx(r, {
              "aria-hidden": true,
              className: "icon-xs shrink-0",
            });
      let c;
      c = (
        <Ln
          alt={label}
          className="icon-xs shrink-0 object-contain"
          fallback={s}
          logoDarkUrl={source.source.logoUrlDark}
          logoUrl={source.source.logoUrl}
        />
      );
      a = c;
      break bb0;
    }
    case "web": {
      s = source.source.type === "page" ? source.source.url : undefined;
      let e;
      e = <Sr aria-hidden={true} className="icon-xs shrink-0" />;
      a = e;
    }
  }
  if ((o != null && onOpen != null) || s != null) {
    let e = (e) => {
      s == null
        ? o != null && onOpen?.(o)
        : wi({
            event: e,
            href: s,
            initiator: "markdown_link_click",
          });
    };
    let i;
    return (
      <button
        aria-label={label}
        className="flex size-6 shrink-0 cursor-interaction items-center justify-center rounded-sm text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-foreground"
        type="button"
        onClick={e}
      >
        {a}
      </button>
    );
  }
  return (
    <span
      aria-label={label}
      className="flex size-6 shrink-0 items-center justify-center rounded-sm text-token-text-secondary"
      role="img"
    >
      {a}
    </span>
  );
}
function $_(e) {
  return e.name.trim().length > 0
    ? e.name
    : e.pluginDisplayNames.length > 0
      ? e.pluginDisplayNames.join(", ")
      : e.name;
}
function ev(e) {
  for (let t of [e.id, e.name, ...e.pluginDisplayNames]) {
    let e = Zn(t);
    if (e != null) return e;
  }
  return null;
}
function tv(e) {
  switch (e.type) {
    case "tool":
      return e.source.id;
    case "web":
      return e.source.type === "page" ? e.source.url : "web-search";
  }
}
var nv,
  rv,
  iv = once(() => {
    nv = q();
    Jn();
    Or();
    Zr();
    ke();
    Gn();
    nn();
    Gr();
    rv = getJsxRuntime();
  });
function ThreadSummaryPanelRoot(props) {
  let { children, shouldHideInlineImmediately, shouldShow } = props,
    animationsDisabled = W(mt),
    invisibleClassName = shouldHideInlineImmediately && "invisible",
    motionContainerClassName = S(
      "pointer-events-none pe-4 max-h-full min-h-0 origin-top-right",
      invisibleClassName,
    );
  let targetOpacity = shouldShow ? 1 : 0,
    targetTranslateX = shouldShow ? 0 : "100%",
    targetScale = shouldShow ? 1 : 0.8,
    animateState = {
      opacity: targetOpacity,
      translateX: targetTranslateX,
      scale: targetScale,
    };
  let transitionConfig =
    shouldHideInlineImmediately || animationsDisabled
      ? {
          duration: 0,
        }
      : {
          type: "spring",
          duration: 0.3,
          bounce: 0.01,
        };
  let pipObstacleId = shouldShow ? "thread-summary-panel" : undefined,
    pointerEventsClassName = shouldShow
      ? "pointer-events-auto"
      : "pointer-events-none",
    panelClassName = S(
      "flex max-h-full min-h-0 flex-col",
      pointerEventsClassName,
    );
  let panelStyle = {
    width: 300,
  };
  let panelBody = (
    <div
      data-pip-obstacle={pipObstacleId}
      className={panelClassName}
      style={panelStyle}
    >
      {children}
    </div>
  );
  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        {threadSummaryPanelJsxRuntime.jsx(p.div, {
          initial: false,
          className: motionContainerClassName,
          animate: animateState,
          transition: transitionConfig,
          children: panelBody,
        })}
      </div>
    </div>
  );
}
function ThreadSummaryPanelPopoverContent(props) {
  let { children } = props,
    popoverStyle = {
      width: 300,
    };
  return (
    <div
      className="flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col"
      style={popoverStyle}
    >
      {children}
    </div>
  );
}
function ThreadSummaryPanelContent(props) {
  let { children } = props;
  return (
    <div className="relative flex max-h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-token-dropdown-background pt-3 electron:elevation-prominent extension:border extension:border-token-border-default extension:shadow-md">
      <div className="flex h-fit max-h-full min-h-0 flex-col gap-3 overflow-y-auto pb-3">
        {children}
      </div>
    </div>
  );
}
function ThreadSummaryPanelHeaderButton(props) {
  let { label, onClick, pressed, shortcut, ...rest } = props;
  let buttonColor = pressed ? "secondary" : "ghost",
    iconNode = <BackgroundTerminalIcon className="icon-sm" />;
  let buttonNode = threadSummaryPanelJsxRuntime.jsx(k, {
    size: "toolbar",
    color: buttonColor,
    "aria-label": label,
    "aria-pressed": pressed,
    title: label,
    onClick,
    uniform: true,
    ...rest,
    children: iconNode,
  });
  return threadSummaryPanelJsxRuntime.jsx(jr, {
    tooltipContent: label,
    shortcut,
    delayOpen: true,
    children: buttonNode,
  });
}
function ThreadSummaryPanelSectionCount({ count }) {
  if (count === 0) return null;
  return (
    <span className="text-base text-token-description-foreground opacity-50">
      {count}
    </span>
  );
}
var threadSummaryPanelReactRuntime,
  threadSummaryPanelJsxRuntime,
  ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome = once(() => {
    threadSummaryPanelReactRuntime = q();
    Ut();
    bt();
    c();
    Ye();
    Gn();
    initBackgroundTerminalIconChunk();
    Oe();
    initThreadFindNavigationRailNoopChunk();
    initThreadSummaryPanelSectionChunk();
    threadSummaryPanelJsxRuntime = getJsxRuntime();
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
    contentNode = Q.jsx(ThreadSummaryPanelChrome.Content, {
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
    });
  return Q.jsx(ThreadSummaryPanelChrome.Root, {
    shouldHideInlineImmediately,
    shouldShow,
    children: contentNode,
  });
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
  return Q.jsx(ThreadSummaryPanelChrome.PopoverContent, {
    children: Q.jsx(ThreadSummaryPanelChrome.Content, {
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
    }),
  });
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
    scope = B(Fe),
    intl = ur(),
    isElectronRuntime = St() === sn,
    hostConfig = W(ra),
    conversationId =
      scope.value.routeKind === "local-thread"
        ? scope.value.conversationId
        : null,
    conversationTitle = K(Zi, conversationId),
    isBrowserSidebarEnabled = W(z),
    isBackgroundProcessTrackingEnabled = Vr("3264431617"),
    isComputerUsePipAvailable = W(computerUsePictureInPictureAvailableSignal),
    isComputerUsePipVisible = W(computerUsePictureInPictureVisibleSignal),
    openFileMutation = qr("open-file"),
    workspaceRouteState = W(oa),
    conversationMode = K(er, conversationId),
    { data: automationData } = W(Tl),
    pendingBackgroundProcessRows = W(pendingBackgroundProcessRowsSignal),
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
  let { data: chatProcessesData } = jn(
      "chat-processes",
      chatProcessesQueryOptions,
    ),
    conversationWorkspaceRoot = K(v, conversationId),
    currentWorkspaceRoot = W(co),
    { data: threadWorkspaceRootHints } = Te(Xt.THREAD_WORKSPACE_ROOT_HINTS),
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
      workspaceRouteState.cwd == null ? null : D(workspaceRouteState.cwd);
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
        isEqual: jv.default,
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
  let { data: childProcessesData } = jn(
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
  let computerUsePipToggleLabel = isComputerUsePipVisible
    ? intl.formatMessage({
        id: "codex.localConversation.remoteHostedPip.hide",
        defaultMessage: "Hide PiP",
        description: "Accessible label for hiding the Computer Use PiP stream",
      })
    : intl.formatMessage({
        id: "codex.localConversation.remoteHostedPip.show",
        defaultMessage: "Show PiP",
        description: "Accessible label for showing the Computer Use PiP stream",
      });
  let planSectionTitle = intl.formatMessage({
    id: "codex.localConversation.plan.title",
    defaultMessage: "Plan",
    description: "Title for the plan section in the thread summary panel",
  });
  let openOutputArtifact = (artifact) => {
    let { icon, path, title } = artifact;
    wl({
      scope,
      path,
      cwd: activeCwd,
      browserSidebarEnabled: isBrowserSidebarEnabled,
      hostConfig,
      hostId: hostConfig.id,
      icon,
      openFile: openFileMutation.mutate,
      openInSidePanel: true,
      title,
    });
  };
  let onOpenOutputArtifact = Y(openOutputArtifact),
    handleOpenOutput = (resource, browserEvent) => {
      switch (resource.type) {
        case "file":
        case "generated-image":
          onOpenOutputArtifact({
            path: resource.path,
          });
          return;
        case "google-drive":
        case "appgen-app":
          wi({
            event: browserEvent,
            href: resource.url,
            originHostId: hostConfig.id,
            initiator: "mcp_app_resource",
          });
          return;
        case "website":
          if (yn(resource.target)) {
            wi({
              event: browserEvent,
              href: resource.target,
              initiator: "mcp_app_resource",
              originHostId: hostConfig.id,
            });
            return;
          }
          wl({
            path: resource.target,
            cwd: activeCwd,
            browserSidebarEnabled: isBrowserSidebarEnabled,
            hostConfig,
            hostId: hostConfig.id,
            openFile: openFileMutation.mutate,
          });
      }
    };
  let onOpenOutput = Y(handleOpenOutput),
    handleOpenSideChat = (sideChat) => {
      ja(scope, "right", sideChat.tabId);
    };
  let onOpenSideChat = Y(handleOpenSideChat),
    handleOpenSource = (source) => {
      qi(scope, source, {
        isFullScreen: true,
      });
      let tabId = ia(source);
      scope.get(ga.tabs$).some((item) => item.tabId === tabId) &&
        (ga.activateTab(scope, tabId), ma(scope));
    };
  let onOpenSource = Y(handleOpenSource),
    getImagePreviewSrc =
      hostConfig.kind === "local" ? getGeneratedImagePreviewSrc : undefined,
    showStopBackgroundTerminalError = () => {
      scope
        .get(ti)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.cleanError"
            defaultMessage="Unable to stop background terminals"
            description="Toast shown when cleaning background terminals from the thread summary panel fails"
          />,
        );
    };
  let onStopBackgroundTerminalError = Y(showStopBackgroundTerminalError),
    showRestartBackgroundTerminalError = () => {
      scope
        .get(ti)
        .danger(
          <FormattedMessage
            id="codex.localConversation.backgroundTerminals.restartError"
            defaultMessage="Unable to track restarted background terminal"
            description="Toast shown when tracking a restarted background terminal from the thread summary panel fails"
          />,
        );
    };
  let onRestartBackgroundTerminalError = Y(showRestartBackgroundTerminalError),
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
  let onOpenBackgroundTerminal = Y(handleOpenBackgroundTerminal),
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
        <H_ automation={matchingAutomation} />
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
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: artifacts.length,
      })}
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
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: sideChats.length,
      })}
    >
      <K_ sideChats={sideChats} onOpen={onOpenSideChat} />
    </ThreadSummaryPanelSection>
  );
  let backgroundAgentsSection = backgroundAgents.length > 0 && (
    <ThreadSummaryPanelSection
      autoCollapse={
        !hasInlineBackgroundAgent &&
        backgroundAgents.every(isDoneBackgroundAgent)
      }
      sectionKey="background-subagents"
      title={Q.jsx(BackgroundTaskSectionTitle, {
        type: "subagents",
      })}
      titleSuffix={
        hasInlineBackgroundAgent
          ? null
          : Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
              count: hiddenBackgroundAgents.length,
            })
      }
    >
      {Q.jsx(ThreadSummaryBackgroundActivityRows, {
        backgroundAgents,
        backgroundTerminals: [],
        conversationId,
        onOpenBackgroundAgent,
        onOpenTerminal: onOpenBackgroundTerminal,
        onStopError: onStopBackgroundTerminalError,
      })}
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
      title={Q.jsx(BackgroundTaskSectionTitle, {
        type: "tasks",
      })}
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: backgroundTaskCount,
      })}
    >
      {Q.jsx(qt, {
        electron: true,
        children: Q.jsx(BackgroundTerminalSummaryRows, {
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
        }),
      })}
      {backgroundTerminals.length > 0 &&
        Q.jsx(qt, {
          extension: true,
          children: Q.jsx(ThreadSummaryBackgroundActivityRows, {
            backgroundAgents: [],
            backgroundTerminals,
            conversationId,
            onOpenBackgroundAgent,
            onOpenTerminal: onOpenBackgroundTerminal,
            onStopError: onStopBackgroundTerminalError,
          }),
        })}
    </ThreadSummaryPanelSection>
  );
  let computerUsePipSection = isComputerUsePipAvailable && (
    <ThreadSummaryPanelSection mode="headerless" sectionKey="computer-use-pip">
      <ComputerUsePictureInPictureRow
        isVisible={isComputerUsePipVisible}
        onToggle={() => {
          scope.set(
            computerUsePictureInPictureVisibleSignal,
            !isComputerUsePipVisible,
          );
        }}
        toggleLabel={computerUsePipToggleLabel}
      />
    </ThreadSummaryPanelSection>
  );
  let browserTabsSection = browserUseSummaries.length > 0 && (
    <ThreadSummaryPanelSection
      sectionKey="browser-tabs"
      title={<BrowserUseSummarySectionTitle />}
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: browserUseSummaries.length,
      })}
    >
      <BrowserUseSummarySectionContent
        browserUseSummaries={browserUseSummaries}
        onOpenBrowserTab={(browserTabId) => {
          openBrowserSummaryTab(scope, true, {
            browserTabId,
          });
        }}
      />
    </ThreadSummaryPanelSection>
  );
  let sourcesTitle = (
    <FormattedMessage
      id="codex.localConversation.sources.title"
      defaultMessage="Sources"
      description="Title for the thread summary side panel sources section"
    />
  );
  let sourceCount = toolSources.length + webSources.length,
    sourceCountSuffix = Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
      count: sourceCount,
    });
  let sourcesContent = (
    <Z_
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
  Kt("openProcessManager", "thread_summary_process_manager");
}
function getGeneratedImagePreviewSrc(generatedImage) {
  return Wr(generatedImage) !== "always" || br(generatedImage) == null
    ? null
    : L(generatedImage);
}
var Av,
  jv,
  Q,
  initLocalConversationGitSummary = once(() => {
    Av = q();
    jv = toEsModule(De(), 1);
    c();
    gn();
    Jn();
    nt();
    El();
    Wl();
    Nt();
    T();
    Yi();
    ke();
    wn();
    ie();
    dn();
    Cl();
    U();
    wc();
    Sc();
    pt();
    fc();
    Qi();
    el();
    fa();
    qn();
    initPendingBackgroundProcessRowsChunk();
    po();
    initThreadSummaryPanelSignalsChunk();
    me();
    Ki();
    xn();
    ae();
    ho();
    Ji();
    lc();
    initSummaryPanelArtifactsListChunk();
    initThreadSummaryBackgroundActivityRowsChunk();
    initBackgroundTerminalSummaryRowsSupportChunk();
    initBackgroundTerminalSummaryRowsChunk();
    V_();
    G_();
    X_();
    iv();
    initBackgroundTerminalSidePanelTabChunk();
    initSummaryPanelRowChunk();
    initThreadSummaryPanelSectionChunk();
    initThreadSummaryPanelChrome();
    tt();
    _n();
    n();
    Q = getJsxRuntime();
  });
function getPinnedSummaryPanelDisplayMode(
  mainContentTargetWidth: number,
): PinnedSummaryPanelState["displayMode"] {
  let sideGutterWidth = (mainContentTargetWidth - 736) / 2;
  return sideGutterWidth < 180
    ? "overlay"
    : sideGutterWidth < 400
      ? "shift"
      : "gutter";
}

function getPinnedSummaryPanelVisibility({
  displayMode,
  isPinned,
  isPopoverOpen,
}: {
  displayMode: PinnedSummaryPanelState["displayMode"];
  isPinned: boolean;
  isPopoverOpen: boolean;
}) {
  return {
    displayMode,
    shouldHideInlineImmediately: displayMode === "overlay" && isPopoverOpen,
    shouldShow: isPinned && displayMode !== "overlay",
  };
}

function getPinnedSummaryPanelContentShift({
  displayMode,
  isPinned,
}: {
  displayMode: PinnedSummaryPanelState["displayMode"];
  isPinned: boolean;
}) {
  return isPinned && displayMode === "shift"
    ? -(300 + PINNED_SUMMARY_PANEL_GAP_PX) / 2
    : 0;
}

var PINNED_SUMMARY_PANEL_GAP_PX,
  initPinnedSummaryPanelContentShiftConstants = once(() => {
    initThreadFindNavigationRailNoopChunk();
    PINNED_SUMMARY_PANEL_GAP_PX = 16;
  }),
  DEFAULT_PINNED_SUMMARY_PANEL_STATE,
  pinnedSummaryPanelState,
  initPinnedSummaryPanelState = once(() => {
    c();
    r();
    DEFAULT_PINNED_SUMMARY_PANEL_STATE = {
      displayMode: "overlay",
      isPopoverOpen: false,
    };
    pinnedSummaryPanelState = bi(ut, DEFAULT_PINNED_SUMMARY_PANEL_STATE);
  });
interface PinnedSummaryPanelState {
  displayMode: "overlay" | "shift" | "gutter";
  isPopoverOpen: boolean;
}
export interface PinnedSummaryPanelLayoutStore {
  set: (
    atom: typeof pinnedSummaryPanelState,
    updater: (state: PinnedSummaryPanelState) => PinnedSummaryPanelState,
  ) => void;
}
export function usePinnedSummaryPanelLayout(
  store: PinnedSummaryPanelLayoutStore,
): void {
  let leftPanelSignal = W(Ga),
    rightPanelSignal = W(Pa),
    layoutContext = localConversationArtifactsReactRuntime.useContext(so),
    fallbackTargetWidthSignal = Xe(0),
    mainContentTargetWidthSignal =
      layoutContext?.mainContentTargetWidth ?? fallbackTargetWidthSignal,
    updatePinnedPanelLayout;
  updatePinnedPanelLayout = (nextWidth: number) => {
    syncPinnedSummaryPanelStateForWidth(store, nextWidth);
  };
  ar(mainContentTargetWidthSignal, "change", updatePinnedPanelLayout);
  let syncPinnedPanelLayout = () => {
    syncPinnedSummaryPanelStateForWidth(
      store,
      mainContentTargetWidthSignal.get(),
    );
  };
  let syncLayoutDependencies;
  syncLayoutDependencies = [
    leftPanelSignal,
    rightPanelSignal,
    mainContentTargetWidthSignal,
    store,
  ];
  localConversationArtifactsReactRuntime.useLayoutEffect(
    syncPinnedPanelLayout,
    syncLayoutDependencies,
  );
  let closePopoverOnUnmount, closePopoverDependencies;
  closePopoverOnUnmount = () => () => {
    store.set(pinnedSummaryPanelState, closePinnedSummaryPanelPopover);
  };
  closePopoverDependencies = [store];
  localConversationArtifactsReactRuntime.useLayoutEffect(
    closePopoverOnUnmount,
    closePopoverDependencies,
  );
}
function closePinnedSummaryPanelPopover(
  state: PinnedSummaryPanelState,
): PinnedSummaryPanelState {
  return state.isPopoverOpen
    ? {
        ...state,
        isPopoverOpen: false,
      }
    : state;
}
function usePinnedSummaryPanelDisplay(conversationId: unknown) {
  let isPinned = W(Va),
    leftPanelState = W(Ga),
    rightPanelState = W(Pa),
    pinnedPanelState = W(pinnedSummaryPanelState),
    animationsDisabled = W(mt),
    layoutContext = localConversationArtifactsReactRuntime.useContext(so),
    fallbackTargetWidthSignal = Xe(0),
    mainContentTargetWidthSignal =
      layoutContext?.mainContentTargetWidth ?? fallbackTargetWidthSignal,
    initialContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
  let contentShiftSignal = Xe(initialContentShift),
    contentShiftAnimationRef =
      localConversationArtifactsReactRuntime.useRef(null),
    currentContentShift = contentShiftSignal.get();
  let targetContentShiftRef =
      localConversationArtifactsReactRuntime.useRef(currentContentShift),
    conversationIdRef =
      localConversationArtifactsReactRuntime.useRef(conversationId),
    visibility = getPinnedSummaryPanelVisibility({
      displayMode: pinnedPanelState.displayMode,
      isPinned,
      isPopoverOpen: pinnedPanelState.isPopoverOpen,
    });
  let resetShiftAfterConversationChange = () => {
    if (conversationIdRef.current === conversationId) return;
    conversationIdRef.current = conversationId;
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftSignal.set(nextContentShift);
  };
  let resetShiftAfterConversationChangeDeps = [
    contentShiftSignal,
    isPinned,
    mainContentTargetWidthSignal,
    conversationId,
  ];
  localConversationArtifactsReactRuntime.useLayoutEffect(
    resetShiftAfterConversationChange,
    resetShiftAfterConversationChangeDeps,
  );
  let syncShiftForTargetWidth = (nextMainContentTargetWidth) => {
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: nextMainContentTargetWidth,
    });
    if (targetContentShiftRef.current === nextContentShift) return;
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftAnimationRef.current =
      setOrAnimatePinnedSummaryPanelContentShift(
        contentShiftSignal,
        nextContentShift,
        animationsDisabled,
      );
  };
  ar(mainContentTargetWidthSignal, "change", syncShiftForTargetWidth);
  let syncAnimatedContentShift = () => {
    let nextContentShift = getTargetPinnedSummaryPanelContentShift({
      isPinned,
      mainContentTargetWidth: mainContentTargetWidthSignal.get(),
    });
    if (targetContentShiftRef.current === nextContentShift) return;
    targetContentShiftRef.current = nextContentShift;
    contentShiftAnimationRef.current?.stop();
    contentShiftAnimationRef.current =
      setOrAnimatePinnedSummaryPanelContentShift(
        contentShiftSignal,
        nextContentShift,
        animationsDisabled,
      );
  };
  let syncAnimatedContentShiftDeps = [
    contentShiftSignal,
    isPinned,
    leftPanelState,
    rightPanelState,
    mainContentTargetWidthSignal,
    animationsDisabled,
  ];
  localConversationArtifactsReactRuntime.useEffect(
    syncAnimatedContentShift,
    syncAnimatedContentShiftDeps,
  );
  let stopShiftAnimationOnUnmount = () => () => {
    contentShiftAnimationRef.current?.stop();
  };
  localConversationArtifactsReactRuntime.useEffect(
    stopShiftAnimationOnUnmount,
    [],
  );
  return {
    contentShift: contentShiftSignal,
    shouldHideInlineImmediately: visibility.shouldHideInlineImmediately,
    shouldShow: visibility.shouldShow,
  };
}

function getTargetPinnedSummaryPanelContentShift({
  isPinned,
  mainContentTargetWidth,
}) {
  return getPinnedSummaryPanelContentShift({
    displayMode: getPinnedSummaryPanelDisplayMode(mainContentTargetWidth),
    isPinned,
  });
}

function syncPinnedSummaryPanelStateForWidth(
  store: PinnedSummaryPanelLayoutStore,
  mainContentTargetWidth: number,
) {
  let displayMode = getPinnedSummaryPanelDisplayMode(mainContentTargetWidth);
  store.set(pinnedSummaryPanelState, (state) => {
    let shouldKeepPopoverOpen =
      displayMode === "overlay" && state.isPopoverOpen;
    return state.displayMode === displayMode &&
      state.isPopoverOpen === shouldKeepPopoverOpen
      ? state
      : {
          displayMode,
          isPopoverOpen: shouldKeepPopoverOpen,
        };
  });
}

function setOrAnimatePinnedSummaryPanelContentShift(
  contentShiftSignal,
  nextContentShift,
  animationsDisabled,
) {
  return animationsDisabled
    ? (contentShiftSignal.set(nextContentShift), null)
    : E(contentShiftSignal, nextContentShift, ji);
}

var localConversationArtifactsModule,
  localConversationArtifactsReactRuntime,
  initLocalConversationArtifacts = once(() => {
    localConversationArtifactsModule = q();
    bt();
    c();
    localConversationArtifactsReactRuntime = toEsModule(G(), 1);
    ua();
    Xa();
    Oe();
    initPinnedSummaryPanelContentShiftConstants();
    initPinnedSummaryPanelState();
  });
function Xv(
  e,
  { includeGeneratedImages = false, projectlessOutputDirectory = null } = {},
) {
  let r = [];
  for (let i = e.length - 1; i >= 0; --i)
    r.push(Qv(e[i], projectlessOutputDirectory, includeGeneratedImages));
  return Zv(r);
}
function Zv(e) {
  let t = [],
    n = new Map();
  for (let r of e)
    for (let e of r) {
      let r = ty(e),
        i = n.get(r);
      if (i != null) {
        let n = t[i];
        n?.type === "file" &&
          e.type === "generated-image" &&
          (t[i] = {
            ...n,
            type: "generated-image",
          });
        continue;
      }
      n.set(r, t.length);
      t.push(e);
    }
  return t;
}
function Qv(e, t, n) {
  let r = ei(e.status),
    i = de(e),
    a = e.params.cwd == null ? null : D(e.params.cwd);
  return ey({
    assistantContent: r === "complete" ? $v(e) : null,
    cwd: a,
    includeGeneratedImages: n,
    projectlessOutputDirectory: t,
    status: r,
    turn: e,
    turnArtifacts: i,
  });
}
function $v(e) {
  for (let t = e.items.length - 1; t >= 0; --t) {
    let n = e.items[t];
    if (n?.type === "agentMessage") return n.text;
  }
  return null;
}
function ey({
  assistantContent,
  cwd,
  includeGeneratedImages,
  projectlessOutputDirectory,
  status,
  turn,
  turnArtifacts,
}) {
  let s = [],
    c = new Map(),
    l = (e) => {
      let t = ty(e),
        n = c.get(t);
      if (n == null) {
        c.set(t, s.length);
        s.push(e);
        return;
      }
      (s[n]?.type === "file" || s[n]?.type === "generated-image") &&
        (e.type === "website" || e.type === "generated-image") &&
        (s[n] = e);
    };
  for (let e of turnArtifacts.referencedFilePaths)
    Mn(e) &&
      zr({
        cwd,
        projectlessOutputDirectory,
        resourcePath: e,
      }) &&
      l({
        type: "file",
        path: cwd == null ? e : g(cwd, e),
      });
  let u = includeGeneratedImages ? turn.items.slice().reverse() : turn.items;
  for (let e of u)
    e?.type === "imageGeneration" &&
      e.src != null &&
      Mn(e.src) &&
      (includeGeneratedImages ||
        zr({
          cwd,
          projectlessOutputDirectory,
          resourcePath: e.src,
        })) &&
      l({
        type: includeGeneratedImages ? "generated-image" : "file",
        path: cwd == null ? e.src : g(cwd, e.src),
      });
  if (status !== "complete") return s;
  let d = Lt({
    assistantContent,
    isAppgenEndCardEnabled: true,
    projectlessOutputDirectory,
    turn: {
      artifacts: turnArtifacts,
      collaborationMode: turn.params.collaborationMode ?? null,
      cwd,
      items: lt(turn, []).items,
      status,
    },
  });
  for (let e of d)
    switch (e.type) {
      case "file":
        l({
          type: "file",
          path: cwd == null ? e.path : g(cwd, e.path),
        });
        break;
      case "google-drive":
      case "appgen-app":
        l(e);
        break;
      case "website":
        l({
          type: "website",
          target: yn(e.target) || cwd == null ? e.target : g(cwd, e.target),
        });
        break;
    }
  return s;
}
function ty(event) {
  switch (event.type) {
    case "file":
    case "generated-image":
      return `path:${et(event.path)}`;
    case "google-drive":
      return `google-drive:${event.url}`;
    case "appgen-app":
      return `appgen-app:${event.projectId}`;
    case "website":
      return yn(event.target)
        ? `url:${ii(event.target)}`
        : `path:${et(event.target)}`;
  }
}
var ny = once(() => {
    gn();
    dt();
    Bt();
    lr();
    Ge();
    Jt();
    Se();
    di();
  }),
  ry,
  iy,
  localConversationOutputArtifactsSignal,
  oy,
  initLocalConversationArtifactSignals = once(() => {
    c();
    nt();
    r();
    o();
    ny();
    ry = Rn(ut, ({ conversationId, includeGeneratedImages }, { get }) => {
      get(pr, conversationId);
      get(jt, conversationId);
      let r = get(I, conversationId);
      return r == null
        ? []
        : Xv(r.slice(0, -1), {
            includeGeneratedImages,
            projectlessOutputDirectory: get(Cr, conversationId),
          });
    });
    iy = Rn(ut, ({ conversationId, includeGeneratedImages }, { get }) => {
      let r = get($t, conversationId);
      return Zv([
        r == null
          ? []
          : Xv([r], {
              includeGeneratedImages,
              projectlessOutputDirectory: get(Cr, conversationId),
            }),
        get(ry, {
          conversationId,
          includeGeneratedImages,
        }),
      ]);
    });
    localConversationOutputArtifactsSignal = Rn(ut, (e, { get }) =>
      get(iy, {
        conversationId: e,
        includeGeneratedImages: false,
      }),
    );
    oy = Rn(ut, (e, { get }) =>
      get(iy, {
        conversationId: e,
        includeGeneratedImages:
          get(er, e) === "projectless" && get(An, "120995366"),
      }),
    );
  });
function cy(e) {
  let t = e.length - 1,
    n = [];
  for (let r = t; r >= 0; --r) {
    let i = e[r];
    if (i != null && !(r === t && i.status === "inProgress")) {
      for (let e of i.items ?? [])
        if (
          e != null &&
          e.type === "commandExecution" &&
          e.status === "inProgress" &&
          !i.interruptedCommandExecutionItemIds?.includes(e.id)
        ) {
          let t = Mc(e);
          n.push({
            id: e.id,
            command: t,
            cwd: e.cwd ?? null,
            processId: e.processId,
            startedAtMs:
              i.commandExecutionStartedAtMsById?.[e.id] ??
              i.firstTurnWorkItemStartedAtMs ??
              i.turnStartedAtMs ??
              null,
            turnId: i.turnId,
          });
        }
    }
  }
  return n;
}
function ly(e) {
  return e == null
    ? []
    : collectConversationProcessRows([e]).filter(
        (item) => item.source === "restored-process",
      );
}
var uy = once(() => {
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
          title: headingTitle == null ? null : Yn(headingTitle),
        };
      }
  }
  return null;
}
var xy = once(() => {
  Ur();
});
function collectSideChatTabSummaries(tabs, isConversationResponseInProgress) {
  return tabs.flatMap((item) => {
    if (!item.tabId.startsWith(Cy)) return [];
    let conversationId = Rr(item.tabId.slice(9));
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
var Cy,
  wy = once(() => {
    gn();
    Cy = "sidechat:";
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
var Dy = once(() => {
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
        mcpAppId = Oi(item.id),
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
function collectConversationWebSources(turns) {
  let webSources = [],
    seenUrls = new Set(),
    sawWebSearch = false;
  for (let turnIndex = turns.length - 1; turnIndex >= 0; --turnIndex) {
    let turn = turns[turnIndex];
    for (let itemIndex = turn.items.length - 1; itemIndex >= 0; --itemIndex) {
      let item = turn.items[itemIndex];
      if (item.type !== "webSearch") continue;
      sawWebSearch = true;
      let webSource = getWebSourceFromBrowserAction(item.action);
      webSource == null ||
        seenUrls.has(webSource.url) ||
        (seenUrls.add(webSource.url), webSources.push(webSource));
    }
  }
  return webSources.length === 0 && sawWebSearch
    ? [
        {
          type: "search",
        },
      ]
    : webSources;
}
function getWebSourceFromBrowserAction(action) {
  if (
    (action?.type !== "openPage" && action?.type !== "findInPage") ||
    action.url == null
  )
    return null;
  try {
    let url = new URL(action.url);
    return (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username !== "" ||
      url.password !== ""
      ? null
      : {
          label: `${url.host.replace(/^www\./u, "")}${url.pathname}`,
          type: "page",
          url: url.href,
        };
  } catch {
    return null;
  }
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
    name: serverMetadata?.name ?? mn(item.server),
    pluginDisplayNames: [],
    logoUrl: serverMetadata?.logoUrl ?? null,
    logoUrlDark: serverMetadata?.logoUrlDark ?? null,
  };
}
var My = once(() => {
  Qi();
  wr();
  Dy();
  kr();
});
function useLocalConversationSummaryPanelModel(
  includeBackgroundActivity = true,
) {
  let routeSnapshot = B(Fe),
    conversationId =
      routeSnapshot.value.routeKind === "local-thread"
        ? routeSnapshot.value.conversationId
        : null,
    browserSummaryConversationId = Ot(routeSnapshot);
  let host = W(ra),
    turns = K(I, conversationId) ?? Hy,
    cwd = K(Wn, conversationId),
    title = K(Zi, conversationId),
    backgroundTerminals = includeBackgroundActivity ? cy(turns) : [],
    restoredBackgroundProcesses = includeBackgroundActivity
      ? ly(
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
  let artifacts = K(oy, conversationId),
    sideChats = W(Vy),
    installedMcpAppIds = W(Vi),
    isMultiBrowserTabsGateEnabled = W(re),
    rightPanelTabs = W(ga.tabs$),
    bottomPanelTabs = W(Ja.tabs$),
    browserUseSummaries = useBrowserUseSummaries({
      blankTitle: ni,
      bottomPanelTabs,
      conversationId: browserSummaryConversationId,
      isMultiBrowserTabsGateEnabled,
      rightPanelTabs,
    });
  let hasExternalMcpToolCalls = turns.some(turnHasExternalMcpToolCall),
    mcpAppsQueryInput = {
      enabled: hasExternalMcpToolCalls,
      hostId: host.id,
    };
  let { data: apps = [] } = Ti(mcpAppsQueryInput),
    { data: mcpServersQuery } = K(kt, host.id),
    toolSources = collectConversationMcpToolSources(
      turns,
      apps,
      installedMcpAppIds,
      mcpServersQuery,
    ),
    webSources = collectConversationWebSources(turns),
    plan = getLatestCompletedTurnPlanSummary(turns),
    backgroundAgents = K(_c, ns() ? conversationId : null);
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
var zy,
  Vy,
  Hy,
  initLocalConversationSummaryPanelSignals = once(() => {
    zy = q();
    c();
    nt();
    Nt();
    Ka();
    yo();
    Yi();
    Ao();
    Qi();
    fa();
    he();
    Ct();
    me();
    Ki();
    Qe();
    initLocalConversationArtifactSignals();
    Pc();
    uy();
    xy();
    wy();
    My();
    Vy = Dn(Fe, ({ get }) =>
      collectSideChatTabSummaries(get(ga.tabs$), (t) => get(ge, t) ?? false),
    );
    Hy = [];
  });
function ConnectedLocalWorktreeRestoreBanner(props) {
  let { conversationId, cwd } = props,
    threadHostId = K(En, conversationId),
    hostConnectionStatus = K(Qr, threadHostId);
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
    scope = B(ut),
    host = oe(threadHostId),
    hostKey = i(host);
  let worktreeQueryKey = hostKey,
    intl = ur(),
    queryClient = Ci(),
    worktreeStatusQuery = K(Cs, conversationId),
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
  let checkWorktreeMutation = Pe(checkWorktreeMutationOptions),
    handleRestoreSuccess = () => {
      gr.info("[worktree-restore] successfully restored");
      cwd != null &&
        scope.query.invalidate(
          Bs,
          {
            conversationId,
            cwd: D(cwd),
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
      let sessionId = _e.getSessionForConversation(conversationId);
      sessionId != null &&
        cwd != null &&
        _e.attach({
          sessionId: sessionId,
          conversationId,
          hostId: host.id,
          cwd,
          forceCwdSync: true,
        });
      scope.get(ti).success(
        intl.formatMessage({
          id: "worktreeRestoreBanner.restore.success",
          defaultMessage: "Worktree restored",
          description: "Toast shown when a missing Codex worktree is restored",
        }),
      );
    };
  let handleRestoreError = (error) => {
    let message = error.message;
    gr.debug("[worktree-restore] restore failed for", {
      safe: {},
      sensitive: {
        cwd: cwd ?? "unknown",
        message: message,
      },
    });
    scope.get(ti).danger(
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
  let restoreWorktreeMutation = w(
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
      ? qy.jsx(k, {
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
        ? qy.jsx(k, {
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
  return qy.jsx($s, {
    type: bannerType,
    layout: "horizontal",
    content: content,
    customCtas: customCtas,
  });
}
var Ky,
  qy,
  Jy = once(() => {
    Ky = q();
    m();
    c();
    gn();
    Jn();
    nt();
    vs();
    Ye();
    wn();
    Ve();
    fn();
    Fn();
    r();
    ne();
    Ht();
    te();
    Mr();
    Ns();
    Ys();
    qy = getJsxRuntime();
  });
function Yy(e, t) {
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (!(r.turn.turnStartedAtMs != null && r.turn.turnStartedAtMs > t))
      return r.turn.status === "completed" ? r.turnSearchKey : null;
  }
  return null;
}
var Xy = once(() => {});
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
    <F
      icon={$y.jsx(sr, {
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
    ? $y.jsx(ta, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      })
    : $y.jsx(sa, {
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
      {$y.jsx(ta, {
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
    <At>
      {$y.jsx(k, {
        color: "secondary",
        disabled: isSubmitting,
        onClick: onClose,
        children: cancelLabel,
      })}
    </At>
  );
  let dialogBody = $y.jsxs(ui, {
    className: "gap-4",
    children: [dialogHeader, forkOptions, cancelAction],
  });
  return $y.jsx(ai, {
    open,
    showDialogClose: false,
    size: "compact",
    onOpenChange: handleOpenChange,
    children: dialogBody,
  });
}
var Qy,
  $y,
  eb = once(() => {
    Qy = q();
    Jn();
    Ye();
    mi();
    h();
    y();
    Ni();
    Ra();
    Sa();
    $y = getJsxRuntime();
  });
function tb({
  conversationCwd,
  conversationId,
  conversationLatestCollaborationMode,
  hostId,
  onClose,
  onForkIntoLocal,
  turnId,
}) {
  let s = B(ut),
    c = ur(),
    l = rt(),
    [u, d] = nb.useState(false),
    f = isRecentLocalEnvironmentAction(
      conversationCwd ? D(conversationCwd) : null,
      hostId,
    ),
    { gitRoot } = ml(conversationCwd, {
      enabled: conversationCwd != null,
      hostId,
      source: "local_conversation_thread",
    }),
    m = gitRoot != null && true,
    { resolvedConfigPath } = Oa({
      hostId,
      workspaceRoot: conversationCwd,
    }),
    g = () => {
      u || onClose();
    },
    _ = async () => {
      d(true);
      try {
        await onForkIntoLocal();
        onClose();
      } finally {
        d(false);
      }
    },
    v = async () => {
      if (!m || conversationCwd == null) {
        s.get(ti).danger(c.formatMessage(fo.forkThreadRequiresGitRepo));
        return;
      }
      d(true);
      try {
        let a = pa({
          hostId,
          label: c.formatMessage(fo.forkPendingWorktreeTitle),
          sourceWorkspaceRoot: conversationCwd,
          startingState: {
            type: "working-tree",
          },
          localEnvironmentConfigPath: resolvedConfigPath,
          launchMode: "fork-conversation",
          prompt: c.formatMessage(fo.forkPendingWorktreePrompt),
          startConversationParamsInput: null,
          sourceConversationId: conversationId,
          sourceCollaborationMode: conversationLatestCollaborationMode,
          targetTurnId: turnId,
        });
        Bi(s, {
          pendingWorktreeId: a,
          sourceConversationId: conversationId,
          sourceWorkspaceRoot: conversationCwd,
        });
        onClose();
        l(`/worktree-init-v2/${a}`);
      } catch (e) {
        throw (
          gr.error("Error creating worktree fork from turn", {
            safe: {},
            sensitive: {
              error: e,
            },
          }),
          s.get(ti).danger(c.formatMessage(fo.forkThreadError)),
          e
        );
      } finally {
        d(false);
      }
    };
  return (
    <ForkFromOlderTurnDialog
      canForkIntoWorktree={m}
      isSubmitting={u}
      isWorktreeThread={f}
      open={true}
      onClose={g}
      onForkIntoLocal={() => {
        _();
      }}
      onForkIntoWorktree={() => {
        v();
      }}
      showWorktreeOption={m}
    />
  );
}
var nb,
  rb,
  ib = once(() => {
    c();
    gn();
    nb = toEsModule(G(), 1);
    Jn();
    xr();
    wn();
    Di();
    r();
    sl();
    Mr();
    _a();
    eb();
    za();
    Sa();
    initLocalEnvironmentRecentActions();
    rb = getJsxRuntime();
  });
var ob,
  sb = once(() => {
    ob = toEsModule(De(), 1);
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
  let { renderConversationMarkdown } = await u(
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
  Ge();
  Qn();
});
interface BackgroundAgentDisplayNameOptions {
  agentNickname?: string | null;
  conversationId: string;
}
function formatBackgroundAgentDisplayName({
  agentNickname,
  conversationId,
}: BackgroundAgentDisplayNameOptions): string {
  let displayName = agentNickname?.trim() || fe(conversationId);
  return displayName.startsWith("@") ? displayName.slice(1) : displayName;
}
var initThreadScrollState = once(() => {
  Vt();
});
var pb = once(() => {
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
              ze(item, [], {
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
    latestAssistantMessageIndex = xb.default(
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
      let assistantText = Tt(item.content);
      assistantText.length !== 0 &&
        units.push({
          unitId: `${index}:assistant`,
          text: assistantText,
        });
    }),
    units
  );
}
var xb,
  initConversationSearchUnitExtractor = once(() => {
    xb = toEsModule(hn(), 1);
    initConversationSearchHelpers();
    hi();
    Ge();
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
            areTurnItemsEqual: ob.default,
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
    ze(turn, requests, {
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
    findLastModule = toEsModule(gi(), 1);
    c();
    nt();
    r();
    o();
    sb();
    Ge();
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
    localConversationVisibleTurnEntriesSignal = Rn(
      ut,
      ({ conversationId, isBackgroundSubagentsEnabled }, { get }) => {
        let r = get(Mt, conversationId) ?? false,
          i = get(Kr, conversationId) ?? EMPTY_CONVERSATION_REQUESTS;
        get(s, conversationId);
        let a = get(pr, conversationId) ?? "needs_resume",
          o = isBackgroundSubagentsEnabled
            ? (get(oi, conversationId) ?? null)
            : null,
          c = get(An, "209459230"),
          l = c ? get(kn, conversationId) : null,
          u = c ? (o == null ? EMPTY_CONVERSATION_TURNS : get(kn, o)) : null,
          d = l != null && u != null;
        return buildLocalConversationVisibleTurnEntries({
          conversationRequests: i,
          mergeBerryDisplayTurnsForPIA: false,
          preserveServerUserMessages: false,
          conversationResumeState: a,
          conversationTurns: d
            ? l
            : (get(I, conversationId) ?? EMPTY_CONVERSATION_TURNS),
          hasConversation: r,
          isBackgroundSubagentsEnabled,
          parentConversationTurns: d
            ? u
            : (get(I, o) ?? EMPTY_CONVERSATION_TURNS),
          subagentParentThreadId: o,
        });
      },
    );
  }),
  Ub,
  Wb = once(() => {
    c();
    r();
    Ub = bn(ut, (e) => null);
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
var Xb = once(() => {
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
  B(Fe);
  let handleCollapsedChange = Y((collapsed) => {
      turnId != null && onSetCollapsedForTurn?.(turnId, collapsed);
    }),
    onSetCollapsed =
      turnId == null || onSetCollapsedForTurn == null
        ? undefined
        : handleCollapsedChange,
    parentThreadAttachment = ex.useMemo(
      () =>
        parentThreadAttachmentSourceConversationId == null
          ? undefined
          : {
              sourceConversationId: parentThreadAttachmentSourceConversationId,
            },
      [parentThreadAttachmentSourceConversationId],
    );
  return (
    Y(() => {}),
    tx.jsx(fs, {
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
      {tx.jsx(k, {
        color: "secondary",
        size: "default",
        onClick: onRetry,
        children: retryLabel,
      })}
    </div>
  );
}
var $b,
  ex,
  tx,
  nx = once(() => {
    $b = q();
    c();
    ex = toEsModule(G(), 1);
    Jn();
    Ye();
    Lo();
    me();
    _n();
    Dc();
    tx = getJsxRuntime();
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
    windowZoom = nr(),
    [measuredHeightsByKey, setMeasuredHeightsByKey] = _x.useState(
      initialRestoreState?.turnHeightsByKey ?? emptyTurnHeightsByKey,
    ),
    [rootElement, setRootElement] = _x.useState(null),
    [viewportState, setViewportState] = _x.useState(() => {
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
    [pendingScrollRequest, setPendingScrollRequest] = _x.useState(null),
    pendingScrollRequestRef = _x.useRef(null),
    measuredHeightsByKeyRef = _x.useRef(measuredHeightsByKey),
    viewportStateRef = _x.useRef(viewportState),
    observedElementMetadataRef = _x.useRef(new Map()),
    turnElementByKeyRef = _x.useRef(new Map()),
    pendingInitialMeasureElementsRef = _x.useRef(new Map()),
    latestTurnFollowContentHeightsRef = _x.useRef(new Map()),
    pendingResizeMeasurementsRef = _x.useRef(new Map()),
    pendingMeasurementCommitRef = _x.useRef(null),
    resizeFrameRef = _x.useRef(null),
    resizeObserverRef = _x.useRef(null),
    visibleContentReadyRef = _x.useRef(false),
    virtualLayout = _x.useMemo(
      () =>
        Xu({
          entries,
          gapPx,
          measuredHeightsByKey: measuredHeightsByKey,
        }),
      [entries, gapPx, measuredHeightsByKey],
    ),
    virtualLayoutRef = _x.useRef(virtualLayout),
    previousLayoutRef = _x.useRef(null),
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
  let restoreScrollDistanceFromBottom = Y(() => {
      pendingMeasurementCommitRef.current ??
        restoreScrollDistanceFromBottomPx?.();
    }),
    applyPendingMeasurementCommit = Y((pendingCommit) => {
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
    syncViewportState = Y((distanceFromBottomPx, viewportHeightPx) => {
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
    }),
    notifyViewportChange = Y(
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
    finishPendingScrollRequest = Y((request) => {
      queueMicrotask(() => {
        pendingScrollRequestRef.current === request &&
          (request.complete(), (pendingScrollRequestRef.current = null));
        setPendingScrollRequest((currentRequest) =>
          currentRequest === request ? null : currentRequest,
        );
      });
    }),
    scrollToKey = Y(
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
    publishLatestTurnFollowContentHeight = Y(() => {
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
    applyMeasuredTurnHeights = Y((measurementsByTurnKey, flushSync = true) => {
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
            measuredHeightPx - (previousHeightPx ?? Math.max(1, firstHeightPx)),
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
        let turnBottomOffsetPx = virtualLayout.bottomOffsetsPx[turnIndex] ?? 0;
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
                  bottomViewportOverflowPx: measureTurnBottomViewportOverflow({
                    scrollElement: scrollController.getScrollElement(),
                    turnElement: measuredLatestTurnElement,
                    windowZoom: windowZoom,
                  }),
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
          ? vx.flushSync(commitMeasuredHeights)
          : commitMeasuredHeights(),
        true
      );
    }),
    getResizeObserver = Y(() => {
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
    observeTurnElement = Y((turnKey, element) => {
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
    measureLatestTurnHeight = Y(() => {
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
    observeLatestTurnFollowContent = Y((element) => {
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
    _x.useLayoutEffect(() => {
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
    _x.useLayoutEffect(() => {
      latestTurnSynchronousMeasurementKey != null && measureLatestTurnHeight();
    }, [latestTurnSynchronousMeasurementKey, measureLatestTurnHeight]),
    _x.useLayoutEffect(() => {
      let pendingCommit = pendingMeasurementCommitRef.current;
      pendingCommit == null ||
        pendingCommit.turnHeightsByKey !== measuredHeightsByKey ||
        ((pendingMeasurementCommitRef.current = null),
        applyPendingMeasurementCommit(pendingCommit));
    }, [applyPendingMeasurementCommit, measuredHeightsByKey]),
    _x.useEffect(() => {
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
    _x.useEffect(() => {
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
    _x.useEffect(() => {
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
    _x.useLayoutEffect(() => {
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
    _x.useLayoutEffect(() => {
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
    _x.useLayoutEffect(() => {
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
    _x.useLayoutEffect(() => {
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
    _x.useLayoutEffect(() => {
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
        className={S("relative shrink-0", className)}
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
              return yx.jsx(
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
  let observedElementRef = Y(setObservedElement),
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
    : Je(
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
    targetOffsetFromTurnTop = Je(targetRect.top - turnRect.top, windowZoom),
    targetHeight = Je(targetRect.height, windowZoom);
  return Math.max(
    0,
    (layout.bottomOffsetsPx[turnIndex] ?? 0) +
      (layout.heightsPx[turnIndex] ?? 0) -
      targetOffsetFromTurnTop -
      targetHeight / 2 -
      viewportHeightPx / 2,
  );
}
var gx,
  _x,
  vx,
  yx,
  defaultVirtualTurnGapPx,
  defaultVirtualViewportHeightPx,
  virtualTurnOverscanCount,
  emptyTurnHeightsByKey,
  MemoizedVirtualizedTurnItem,
  Tx = once(() => {
    gx = q();
    Ut();
    _x = toEsModule(G(), 1);
    vx = toEsModule(_i(), 1);
    O();
    vl();
    nd();
    id();
    _n();
    Ju();
    yx = getJsxRuntime();
    defaultVirtualTurnGapPx = 12;
    defaultVirtualViewportHeightPx = 800;
    virtualTurnOverscanCount = 2;
    emptyTurnHeightsByKey = {};
    MemoizedVirtualizedTurnItem = _x.memo(VirtualizedTurnItem);
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
  let scope = B(ut),
    windowZoom = nr(),
    latestEntry = entries.at(-1),
    latestTurnKey = latestEntry?.turnKey ?? null,
    latestTurnIdentityKey =
      latestEntry == null ? null : getLatestTurnIdentityKey(latestEntry),
    latestTurnPhase =
      latestEntry == null ? "idle" : getLatestTurnPhase(latestEntry.turn),
    isLatestTurnInProgress = latestEntry?.turn.status === "inProgress",
    savedScrollState = scope.get(Ub, conversationId),
    savedLatestTurnState =
      savedScrollState?.latestTurn?.turnKey === latestTurnKey
        ? savedScrollState.latestTurn
        : null,
    responseSpacerHeightPx = Xe(0),
    latestTurnOffsetY = Xe(0),
    scrollController = ad(),
    scrollStateRef = Lx.useRef(
      createLatestTurnScrollState({
        followMode: savedLatestTurnState?.followMode ?? "static",
      }),
    ),
    restoredPassiveLatestTurnHeightRef = Lx.useRef(
      savedLatestTurnState != null &&
        isPassiveLatestTurnFollowMode(savedLatestTurnState.followMode)
        ? savedLatestTurnState.latestTurnHeightPx
        : null,
    ),
    latestTurnHeightRef = Lx.useRef(
      savedLatestTurnState?.latestTurnHeightPx ?? null,
    ),
    latestTurnFollowContentHeightRef = Lx.useRef(
      savedLatestTurnState?.latestTurnFollowContentHeightPx ?? null,
    ),
    hasRestoredInitialScrollRef = Lx.useRef(false),
    initialScrollOffsetRef = Lx.useRef(initialScrollOffset),
    restoreStateRef = Lx.useRef(initialVirtualizedTurnListRestoreState),
    responseSpacerElementRef = Lx.useRef(null),
    isResponseSpacerAtViewportBottomRef = Lx.useRef(false),
    latestTurnKeyRef = Lx.useRef(latestTurnKey),
    latestTurnIdentityKeyRef = Lx.useRef(latestTurnIdentityKey),
    previousLatestTurnPhaseRef = Lx.useRef(
      savedLatestTurnState?.latestTurnPhase ?? latestTurnPhase,
    ),
    latestTurnPhaseRef = Lx.useRef(latestTurnPhase),
    wasLatestTurnInProgressRef = Lx.useRef(
      savedLatestTurnState?.isLatestTurnInProgress ?? isLatestTurnInProgress,
    ),
    latestTurnInProgressRef = Lx.useRef(isLatestTurnInProgress),
    latestTurnMotionContext = Lx.useMemo(
      () => ({
        turnKey: latestEntry?.turnKey ?? null,
        yPx: latestTurnOffsetY,
      }),
      [latestEntry?.turnKey, latestTurnOffsetY],
    ),
    responseSpacerAdjustedScrollController = Lx.useMemo(() => {
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
  let dispatchScrollStateEvent = Y((event, forceSync = false) => {
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
    }),
    syncFooterResizePreserveDisabled = Y(() => {
      let { followMode } = scrollStateRef.current;
      scrollController.setFooterResizeViewportPreserveDisabled(
        latestTurnInProgressRef.current &&
          isPassiveLatestTurnFollowMode(followMode),
      );
    }),
    getPendingInitialRestoreDistanceFromBottom = Y(() => {
      let initialScrollOffsetPx = initialScrollOffsetRef.current;
      return hasRestoredInitialScrollRef.current ||
        initialScrollOffsetPx == null ||
        scrollStateRef.current.followMode === "prework_follow"
        ? null
        : Math.max(0, initialScrollOffsetPx - responseSpacerHeightPx.get());
    }),
    restoreInitialScrollOffset = Y(() => {
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
        if (Math.abs(Le(scrollElement) - initialScrollOffsetPx) <= 24) {
          hasRestoredInitialScrollRef.current = true;
          return;
        }
        scrollController.scrollToDistanceFromBottomPx(
          initialScrollOffsetPx,
          "instant",
        );
        Math.abs(Le(scrollElement) - initialScrollOffsetPx) <= 24 &&
          (hasRestoredInitialScrollRef.current = true);
      }
    }),
    handleRestoreStateChange = Y((restoreState) => {
      restoreStateRef.current = restoreState;
      onVirtualizedTurnListRestoreStateChange(restoreState);
    });
  Lx.useLayoutEffect(
    () => (
      syncFooterResizePreserveDisabled(),
      () => {
        let persistedLatestTurnKey = latestTurnKeyRef.current,
          scrollElement = scrollController.getScrollElement(),
          persistedScrollSnapshot = createPersistedScrollStateSnapshot({
            distanceFromBottomPx:
              scrollElement == null
                ? scrollController.getLastScrollDistanceFromBottomPx()
                : Le(scrollElement),
            latestTurnPhase: latestTurnPhaseRef.current,
            responseSpacerHeightPx: responseSpacerHeightPx.get(),
            scrollPaddingBottomPx:
              scrollElement == null
                ? 0
                : getThreadScrollPaddingBottomPx(scrollElement),
            scrollState: scrollStateRef.current,
          });
        scope.set(Ub, conversationId, {
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
  let clearResponseSpacer = Y(() => {
      responseSpacerHeightPx.stop();
      responseSpacerHeightPx.set(0);
      isResponseSpacerAtViewportBottomRef.current = false;
    }),
    scrollToBottomAndClearSpacer = Y(() => {
      hasRestoredInitialScrollRef.current = true;
      latestTurnOffsetY.stop();
      latestTurnOffsetY.set(0);
      clearResponseSpacer();
      onResponseSpacerStateChange(null);
      scrollController.scrollToDistanceFromBottomPx(0, "instant");
    }),
    scrollToLatestTurnBottom = Y(() => {
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
    shrinkResponseSpacerToDistance = Y((targetDistanceFromBottomPx) => {
      let currentSpacerHeightPx = responseSpacerHeightPx.get(),
        nextSpacerHeightPx =
          targetDistanceFromBottomPx <= 24
            ? 0
            : Math.min(currentSpacerHeightPx, targetDistanceFromBottomPx);
      if (currentSpacerHeightPx - nextSpacerHeightPx <= 24) return;
      let scrollElement = scrollController.getScrollElement(),
        currentDistanceFromBottomPx =
          scrollElement == null ? 0 : Le(scrollElement),
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
    }),
    handleUserScroll = Y(
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
  Lx.useLayoutEffect(
    () => scrollController.addUserScrollListener(handleUserScroll),
    [handleUserScroll, scrollController],
  );
  Lx.useLayoutEffect(() => {
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
            responseSpacerHeightPx.get() - Le(scrollElement),
          ),
        );
      },
      {
        root: scrollElement,
        threshold: Hx,
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
  Lx.useLayoutEffect(() => {
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
  let clampResponseSpacerToViewport = Y(() => {
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
    let currentDistanceFromBottomPx = Le(scrollElement),
      nextDistanceFromBottomPx = Math.max(
        0,
        currentDistanceFromBottomPx + spacerHeightDeltaPx,
      );
    scrollController.scrollToDistanceFromBottomPx(
      nextDistanceFromBottomPx,
      "instant",
    );
  });
  Lx.useLayoutEffect(() => {
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
  let handleLatestTurnHeightChange = Y(
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
          Ox({
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
            Ox({
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
            kx({
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
    handleScrollDistanceChanged = Y((distanceFromBottomPx) => {
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
    Lx.useLayoutEffect(
      () => scrollController.addScrollListener(handleScrollDistanceChanged),
      [handleScrollDistanceChanged, scrollController],
    ),
    Lx.useLayoutEffect(() => {
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
        scrollController.scrollToDistanceFromBottomPx(Vx, "instant");
        E(latestTurnOffsetY, 0, Ux);
        currentSpacerHeightPx !== maxSpacerHeightPx &&
          E(responseSpacerHeightPx, maxSpacerHeightPx, Ux);
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
        <Wx value={latestTurnMotionContext}>
          {Rx.jsx(od, {
            value: responseSpacerAdjustedScrollController,
            children: Rx.jsx(VirtualizedTurnList, {
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
        </Wx>
        {Rx.jsx(p.div, {
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
    latestTurnMotionContext = Lx.useContext(Wx),
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
  return Rx.jsx(p.div, {
    style: rowStyle,
    children: rowNode,
  });
}
function Ox({
  allowResponseSpacerGrowth,
  behavior = "instant",
  distanceDeltaPx,
  responseSpacerHeightPx,
  scrollController,
  scrollElement,
}) {
  let nextDistanceFromBottomPx = Le(scrollElement) + distanceDeltaPx;
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
function kx({
  scrollElement,
  turnElement,
  fallbackBottomViewportOverflowPx,
  windowZoom,
}) {
  return scrollElement == null || turnElement == null
    ? fallbackBottomViewportOverflowPx
    : Je(
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
    Math.min(availableViewportHeightPx * zx, availableViewportHeightPx - Bx),
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
var Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx = once(() => {
    Ix = q();
    bt();
    c();
    Lx = toEsModule(G(), 1);
    O();
    r();
    nd();
    id();
    He();
    _n();
    Wb();
    Xb();
    nx();
    Tx();
    Rx = getJsxRuntime();
    zx = 0.6666666666666666;
    Bx = 240;
    Vx = 1;
    Hx = Array.from(
      {
        length: 101,
      },
      (e, t) => t / 100,
    );
    Ux = {
      type: "spring",
      bounce: 0,
      duration: 0.5,
    };
    Wx = Lx.createContext(null);
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
    stableGeneratedImages = Xx.default(
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
          endResourcePaths = ce(
            Lt({
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
  return Xx.default(previousGeneratedImages, generatedImages)
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
var Xx,
  Zx = once(() => {
    toEsModule(yr(), 1);
    Xx = toEsModule(De(), 1);
    qs();
    Ge();
    Jt();
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
function buildThreadFindPreviewOutputs({
  assistantContent,
  generatedImageSources,
  isAppgenEndCardEnabled,
  projectlessOutputDirectory,
  turn,
}) {
  let previewOutputs = [],
    seenPreviewKeys = new Set(),
    addPreviewOutput = (previewOutput) => {
      let previewKey = `${previewOutput.type}:${previewOutput.label ?? ""}`;
      seenPreviewKeys.has(previewKey) ||
        (seenPreviewKeys.add(previewKey), previewOutputs.push(previewOutput));
    };
  for (let resource of Lt({
    assistantContent,
    isAppgenEndCardEnabled,
    projectlessOutputDirectory,
    turn,
  }))
    switch (resource.type) {
      case "appgen-app":
        addPreviewOutput({
          label: resource.title,
          type: "app",
        });
        break;
      case "file":
        addPreviewOutput({
          label: wt(resource.path),
          type: "file",
        });
        break;
      case "google-drive":
        addPreviewOutput({
          label: resource.title,
          type: "google-drive",
        });
        break;
      case "website":
        addPreviewOutput({
          label: null,
          type: "website",
        });
        break;
    }
  for (let editedFilePath of turn.artifacts.editedFilePaths)
    addPreviewOutput({
      label: wt(editedFilePath),
      type: "file",
    });
  for (let generatedImageSource of generatedImageSources)
    addPreviewOutput(
      Ft(generatedImageSource)
        ? {
            label: wt(generatedImageSource),
            type: "file",
          }
        : {
            label: null,
            type: "image",
          },
    );
  for (let commandReference of Nr(assistantContent))
    switch (commandReference.type) {
      case "commit":
        addPreviewOutput({
          label: null,
          type: "commit",
        });
        break;
      case "create-pr":
        addPreviewOutput({
          label: null,
          type: "pull-request",
        });
        break;
      case "create-branch":
      case "push":
      case "stage":
        break;
    }
  return previewOutputs.sort(
    (leftOutput, rightOutput) =>
      THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER[leftOutput.type] -
      THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER[rightOutput.type],
  );
}
var EMPTY_THREAD_FIND_ITEMS,
  EMPTY_THREAD_FIND_PREVIEW_OUTPUTS,
  THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER,
  threadFindItemsCache,
  initThreadFindItemsBuilder = once(() => {
    gn();
    la();
    zn();
    di();
    Ge();
    Jt();
    EMPTY_THREAD_FIND_ITEMS = [];
    EMPTY_THREAD_FIND_PREVIEW_OUTPUTS = [];
    THREAD_FIND_PREVIEW_OUTPUT_SORT_ORDER = {
      app: 0,
      website: 0,
      "google-drive": 1,
      file: 1,
      image: 1,
      commit: 2,
      "pull-request": 2,
      review: 2,
    };
    threadFindItemsCache = new WeakMap();
  });
var initBackgroundAgentThreadTab = once(() => {});
async function openBackgroundAgentThreadTab(
  e,
  { backgroundAgent, hostId, TabComponent },
) {
  e.get(Mt, backgroundAgent.conversationId) ||
    (await Dr("hydrate-background-threads", {
      hostId,
      threadIds: [backgroundAgent.conversationId],
    }));
  e.get(Mt, backgroundAgent.conversationId) &&
    ga.openTab(e, TabComponent, {
      icon: <Uo className="icon-sm" seed={backgroundAgent.conversationId} />,
      props: {
        conversationId: backgroundAgent.conversationId,
      },
      id: `background-agent:${backgroundAgent.conversationId}`,
      title: backgroundAgent.displayName,
    });
}
var lS,
  initBackgroundAgentThreadTabs = once(() => {
    nt();
    pn();
    Yi();
    rs();
    lS = getJsxRuntime();
  });
function LocalConversationConnectionStatus(props) {
  let { status } = props,
    spinnerIcon = pS.jsx(rr, {
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
var fS,
  pS,
  mS = once(() => {
    fS = q();
    Jn();
    d();
    pS = getJsxRuntime();
  });
function useMarkConversationReadOnVisibility(conversationId, hasConversation) {
  let isUnread = K(R, conversationId) ?? false,
    isWindowVisible = W(xo),
    conversationReadMarker = K($t, conversationId),
    conversationReadState = K(we, conversationId),
    lastMarkedConversationIdRef = _S.useRef(null),
    lastConversationReadStateRef = _S.useRef(null),
    lastConversationReadMarkerRef = _S.useRef(null),
    markConversationRead = () => {
      lastMarkedConversationIdRef.current = conversationId;
      lastConversationReadStateRef.current = conversationReadState;
      lastConversationReadMarkerRef.current = conversationReadMarker;
      !(!hasConversation || !isUnread) &&
        Dr("mark-conversation-as-read", {
          conversationId,
        });
    };
  let markConversationReadEvent = Y(markConversationRead),
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
var gS,
  _S,
  initMarkConversationReadEffect = once(() => {
    gS = q();
    c();
    _S = toEsModule(G(), 1);
    nt();
    pn();
    bo();
    _n();
  });
function useResumeLocalConversation(conversationId) {
  let scope = B(ut),
    intl = ur(),
    { activeMode } = Us(conversationId),
    { data } = W(gt),
    workspaceRoots = data?.roots,
    shouldResumeConversation = K(Ir, conversationId);
  K(En, conversationId);
  let [isResuming, setIsResuming] = wS.useState(shouldResumeConversation),
    activeResumeConversationIdRef = wS.useRef(null),
    retryTimerRef = wS.useRef(null),
    hasShownResumeErrorRef = wS.useRef(false),
    blockedAutoRetryConversationIdRef = wS.useRef(null),
    [retryTick, setRetryTick] = wS.useState(0),
    resumeConversation = wS.useEffectEvent(async (e) => {
      try {
        setIsResuming(true);
        activeResumeConversationIdRef.current = e;
        let n = scope.get(En, e);
        await Dr("maybe-resume-conversation", {
          hostId: n,
          conversationId: e,
          model: null,
          serviceTier: await Ma(scope, n, activeMode?.settings.model ?? null),
          reasoningEffort: null,
          workspaceRoots: workspaceRoots ?? [],
          collaborationMode: activeMode,
          showThreadGoalResumeConfirmation: false,
        });
      } catch (r) {
        if (
          (gr.error("Failed to resume conversation", {
            safe: {},
            sensitive: {
              conversationId: e,
              error: r,
            },
          }),
          activeResumeConversationIdRef.current !== e)
        )
          return;
        let i = scope.get(P, e),
          a =
            i == null
              ? false
              : await Dr("get-is-conversation-archiving-for-host", {
                  hostId: i,
                  conversationId: e,
                });
        if (i == null || a || !scope.get(Ir, e)) {
          hasShownResumeErrorRef.current = false;
          return;
        }
        let o = scope.get(oi, e) != null,
          s = shouldAutoRetryResumeError(r);
        s || (blockedAutoRetryConversationIdRef.current = e);
        shouldShowResumeErrorToast({
          hasShownResumeError: hasShownResumeErrorRef.current,
          isSubagentChildThread: o,
          shouldAutoRetry: s,
        }) &&
          (scope.get(ti).danger(formatResumeConversationError(intl, r), {
            id: `resume-task-error-${e}`,
          }),
          (hasShownResumeErrorRef.current = true));
        s &&
          retryTimerRef.current == null &&
          (retryTimerRef.current = setTimeout(() => {
            retryTimerRef.current = null;
            setRetryTick((e) => e + 1);
          }, 750));
      } finally {
        activeResumeConversationIdRef.current === e &&
          ((activeResumeConversationIdRef.current = null),
          setIsResuming(false));
      }
    });
  return (
    wS.useEffect(() => {
      shouldResumeConversation ||
        ((activeResumeConversationIdRef.current = null),
        (hasShownResumeErrorRef.current = false),
        blockedAutoRetryConversationIdRef.current === conversationId &&
          (blockedAutoRetryConversationIdRef.current = null),
        retryTimerRef.current != null &&
          (clearTimeout(retryTimerRef.current),
          (retryTimerRef.current = null)));
    }, [conversationId, shouldResumeConversation]),
    wS.useEffect(() => {
      blockedAutoRetryConversationIdRef.current = null;
    }, [conversationId]),
    wS.useEffect(() => {
      if (conversationId != null)
        return scope.watch(({ get }) => {
          let n = get(P, conversationId);
          n != null &&
            get(oi, conversationId) != null &&
            fr.dispatchMessage("subagent-thread-opened", {
              hostId: n,
              conversationId: conversationId,
            });
        });
    }, [conversationId, scope]),
    wS.useEffect(() => {
      conversationId &&
        shouldResumeConversation &&
        conversationId !== activeResumeConversationIdRef.current &&
        conversationId !== blockedAutoRetryConversationIdRef.current &&
        resumeConversation(conversationId);
    }, [shouldResumeConversation, conversationId, retryTick]),
    wS.useEffect(
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
          error: Wt(error),
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
  let configError = pe(error);
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
var wS,
  TS,
  initLocalConversationThreadRoute = once(() => {
    c();
    gn();
    wS = toEsModule(G(), 1);
    Jn();
    nt();
    pn();
    Ha();
    wn();
    Vs();
    Tn();
    r();
    It();
    Ht();
    Mr();
    TS = getJsxRuntime();
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
    return $.jsx(xi, {
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
    scope = B(Fe),
    hasConversation = K(Mt, conversationId),
    isExpiredSideChat = K(V, conversationId),
    hostId = K(En, conversationId),
    sourceConversationId = ot(scope.value),
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
  let threadScopeKey = N(conversationId, "side", sourceConversationId),
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
      <Me scope={fi} value={threadScopeKey}>
        {threadFrame}
      </Me>
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
    scope = B(Fe),
    intl = ur(),
    sourceCwd = K(Wn, sourceConversationId),
    sourceHostId = K(En, sourceConversationId),
    sourceCollaborationMode = K(zt, sourceConversationId),
    displayTitle = K(va(target).tabById$, `sidechat:${conversationId}`)?.title,
    [isRecreatingSideChat, setIsRecreatingSideChat] = GS.useState(false),
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
          gr.error("Error recreating expired side chat", {
            safe: {},
            sensitive: {
              error,
            },
          });
          scope.get(ti).danger(
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
        : $.jsx(k, {
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
    return $.jsx($s, {
      type: "info",
      layout: "vertical",
      title: expiredTitle,
      content: expiredDescription,
      customCtas: actionButton,
    });
  }
  return $.jsx($c, {
    className: "h-full",
    spacing: "compact",
    title: expiredTitle,
    description: expiredDescription,
    actions: actionButton,
  });
}
function LocalConversationMainThread(props) {
  let { conversationId } = props,
    scope = B(Fe),
    hasConversation = K(Mt, conversationId),
    hostId = K(En, conversationId),
    isBackgroundSubagentsEnabled = ns(),
    { isResuming } = useResumeLocalConversation(conversationId),
    threadScopeKey = N(conversationId, "main", ot(scope.value));
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
    <Me scope={fi} value={threadScopeKey}>
      {threadFrame}
    </Me>
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
    scope = B(Fe),
    hasConversation = K(Mt, conversationId),
    hostId = K(En, conversationId),
    isBackgroundSubagentsEnabled = ns(),
    threadScopeKey = N(conversationId, "main", ot(scope.value));
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
    <Me scope={fi} value={threadScopeKey}>
      {threadFrame}
    </Me>
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
    scope = B(Fe),
    isBackgroundSubagentsEnabled = ns(),
    { data } = W(launcherHotkeyStateQuery),
    hasConfiguredLauncherHotkey = data == null || data.configuredHotkey != null,
    launcherFallbackPath = it(hasConfiguredLauncherHotkey),
    hasConversation = K(Mt, conversationId),
    hostId = K(En, conversationId);
  K(Wn, conversationId);
  K(Et, conversationId);
  let resolvedAppsQueryOptions = {
    enabled: false,
    hostId,
  };
  Ti(resolvedAppsQueryOptions);
  let isRightPanelFullWidth = W(go),
    hideThreadContent = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth,
      routeConversationId: ot(scope.value),
    });
  let summaryPanelDisplay = usePinnedSummaryPanelDisplay(conversationId),
    summaryPanelModel = useLocalConversationSummaryPanelModel(
      summaryPanelDisplay.shouldShow,
    ),
    { isResuming } = useResumeLocalConversation(
      shouldResume ? (conversationId ?? null) : null,
    ),
    subagentParentThreadId = K(oi, conversationId),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null,
    intl = ur(),
    navigate = rt(),
    hasSeenConversationRef = GS.useRef(false),
    lastSubagentParentThreadIdRef = GS.useRef(null),
    rememberSubagentParentThreadId,
    rememberSubagentParentThreadIdDeps;
  rememberSubagentParentThreadId = () => {
    visibleSubagentParentThreadId != null &&
      (lastSubagentParentThreadIdRef.current = visibleSubagentParentThreadId);
  };
  rememberSubagentParentThreadIdDeps = [visibleSubagentParentThreadId];
  GS.useEffect(
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
        scope.get(ti).danger(
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
  GS.useEffect(handleMissingConversation, missingConversationEffectDeps);
  let handleVisibleThreadContentReady = (turnCount) => {
    threadSwitchTimingTracker.complete(scope, "thread_switch_completed", {
      conversationId,
      turnCount,
    });
  };
  let onVisibleThreadContentReady = Y(handleVisibleThreadContentReady),
    handleOpenBackgroundAgent = (backgroundAgent) => {
      openBackgroundAgentFromThread(
        scope,
        hostId,
        backgroundAgent,
        onOpenBackgroundAgent,
      );
    };
  let onOpenBackgroundAgentFromSummary = Y(handleOpenBackgroundAgent),
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
  let summaryPanel = $.jsx(FloatingLocalConversationSummaryPanel, {
    ...summaryPanelDisplay,
    ...summaryPanelModel,
    onOpenBackgroundAgent: onOpenBackgroundAgentFromSummary,
  });
  let floatingSummaryPanel = $.jsx(qt, {
    browser: true,
    electron: true,
    children: $.jsx(fs, {
      name: "ThreadSummaryPanel",
      fallback: renderSummaryPanelErrorFallback,
      children: summaryPanel,
    }),
  });
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
            {$.jsx(k, {
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
    scope = B(ut),
    isBackgroundSubagentsEnabled = ns(),
    parentConversationId = K(oi, conversationId),
    backgroundAgentSnapshot = K(Un, conversationId),
    backgroundAgentName = formatBackgroundAgentDisplayName({
      agentNickname: Cn(backgroundAgentSnapshot)?.agentNickname ?? null,
      conversationId,
    });
  let hasConversation = K(Mt, conversationId),
    title = K(Zi, conversationId),
    cwd = K(Wn, conversationId),
    projectlessOutputDirectory = K(Cr, conversationId),
    navigate = rt(),
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
          navigate(l(parentConversationId));
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
  let trailingActions = $.jsx(qt, {
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
  });
  return $.jsx(qt, {
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
  return Fs() ? Ke(conversationId) : l(conversationId);
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
    scope = B(Fe),
    isConversationHistoryComplete = K(Ue, conversationId) ?? true,
    visibleSubagentParentThreadId = K(oi, conversationId),
    isScrollToTopEnabled = Vr("1579719221"),
    shouldShowSummaryPanelObstacles = Vr("3563904085"),
    savedThreadScrollState = scope.get(Ub, conversationId);
  let savedScrollState = savedThreadScrollState,
    initialScrollOffset = savedScrollState?.distanceFromBottomPx ?? null,
    initialVirtualizedTurnListRestoreState =
      savedScrollState?.virtualizedTurnList ?? null,
    [isScrolledFromBottom, setIsScrolledFromBottom] = GS.useState(false),
    [scrollDistanceFromBottomPx, setScrollDistanceFromBottomPx] =
      GS.useState(0),
    [responseSpacerState, setResponseSpacerState] = GS.useState(null),
    latestTurnSubmitPlacementRef = GS.useRef(null),
    [threadLayoutContainer, setThreadLayoutContainer] = GS.useState(null),
    newChatShortcutRef = useNullAppShellRef(
      "chatgpt.supportsNewChatKeyShortcut",
    ),
    markConversationReadOnThreadInteraction =
      useMarkConversationReadOnVisibility(conversationId, hasConversation),
    loadOlderConversationHistoryPage = async () => {
      if (isConversationHistoryComplete) return "stop";
      try {
        return (
          await Dr("load-older-conversation-history-page", {
            conversationId,
            dependentConversationIds:
              visibleSubagentParentThreadId == null
                ? []
                : [visibleSubagentParentThreadId],
          }),
          await to(),
          (scope.get(Ue, conversationId) ?? true) ? "stop" : "continue"
        );
      } catch (error) {
        let loadError = error;
        return (
          gr.warning("Failed to load older thread history", {
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
  let loadOlderConversationHistory = Y(loadOlderConversationHistoryPage),
    threadScrollLayoutApiRef = GS.useRef(null),
    handleThreadScroll = (distanceFromBottomPx, isAtBottom) => {
      scope.set(Ub, conversationId, (previousScrollState) => ({
        distanceFromBottomPx,
        latestTurn: isScrollToTopEnabled
          ? (previousScrollState?.latestTurn ?? null)
          : null,
        virtualizedTurnList: previousScrollState?.virtualizedTurnList ?? null,
      }));
      setScrollDistanceFromBottomPx(distanceFromBottomPx);
      setIsScrolledFromBottom(!isAtBottom);
    };
  let onThreadScroll = Y(handleThreadScroll),
    handleVirtualizedTurnListRestoreStateChange = (
      virtualizedTurnListRestoreState,
    ) => {
      scope.set(Ub, conversationId, (previousScrollState) => ({
        distanceFromBottomPx: previousScrollState?.distanceFromBottomPx ?? 0,
        latestTurn: isScrollToTopEnabled
          ? (previousScrollState?.latestTurn ?? null)
          : null,
        virtualizedTurnList: virtualizedTurnListRestoreState,
      }));
    };
  let onVirtualizedTurnListRestoreStateChange = Y(
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
  let onScrollToBottom = Y(scrollToBottom),
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
  let onPrepareLatestTurnSubmitPlacement = Y(prepareLatestTurnSubmitPlacement),
    consumePendingLatestTurnSubmitPlacement = () => {
      let placementSnapshot = latestTurnSubmitPlacementRef.current;
      return ((latestTurnSubmitPlacementRef.current = null), placementSnapshot);
    };
  let onConsumePendingLatestTurnSubmitPlacement = Y(
      consumePendingLatestTurnSubmitPlacement,
    ),
    clearPendingLatestTurnSubmitPlacement = () => {
      latestTurnSubmitPlacementRef.current = null;
    };
  let onClearPendingLatestTurnSubmitPlacement = Y(
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
  GS.useEffect(clearPlacementWhenThreadHidden, clearPlacementEffectDeps);
  let handleThreadLayoutContainerRef = (containerElement) => {
    newChatShortcutRef.current = containerElement;
    setThreadLayoutContainer(containerElement);
  };
  let threadLayoutContainerRef = Y(handleThreadLayoutContainerRef),
    hasLiveMcpAppFrame = W(Fa),
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
  let onOpenBackgroundAgentFromSummary = Y(handleOpenBackgroundAgent),
    summaryPanelObstaclesEffect = shouldMountSummaryPanelObstacles
      ? $.jsx(RefreshSummaryPanelObstaclesEffect, {})
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
  let threadScrollLayout = $.jsx(rd, {
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
  let appShellOverlayOutlet = $.jsx(ao, {});
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
  return $.jsx(fs, {
    name: "LocalConversationPage",
    children: $.jsx(pl, {
      value: threadLayoutContainer,
      children: threadLayout,
    }),
  });
}
function RefreshSummaryPanelObstaclesEffect() {
  let windowZoom = nr(),
    refreshObstacles,
    refreshObstaclesEffectDeps;
  return (
    (refreshObstacles = () =>
      startRemoteHostedPipHostLayoutObserver(windowZoom)),
    (refreshObstaclesEffectDeps = [windowZoom]),
    GS.useEffect(refreshObstacles, refreshObstaclesEffectDeps),
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
    cwd = K(Wn, conversationId);
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
  let scope = B(Fe);
  GS.useContext(rl);
  ci();
  let hostConnectionStatus = K(Qr, hostId),
    hasConversationTurns = !!K(I, conversationId)?.length,
    isRemoteHost = hostId !== Pt,
    footerConnectionStatus = null;
  isRemoteHost &&
    (hostConnectionStatus === "connecting" ||
    hostConnectionStatus === "restarting"
      ? (footerConnectionStatus = "reconnecting")
      : isResuming &&
        !hasConversationTurns &&
        (footerConnectionStatus = "loading"));
  let localResponseInProgress = K(ge, conversationId) ?? false,
    localWorkspaceMaterialization = K(oc, conversationId);
  K(b, conversationId);
  K(s, conversationId);
  let subagentResponseInProgress = K(YS, conversationId) ?? false,
    hasActiveSubagent = K(
      _c,
      isBackgroundSubagentsEnabled ? conversationId : null,
    ).some(({ status }) => status === "active"),
    isResponseInProgress = isBackgroundSubagentsEnabled
      ? subagentResponseInProgress || hasActiveSubagent || false
      : localResponseInProgress || false,
    composerModeAvailability =
      K(er, conversationId) === "projectless"
        ? {
            fallbackMode: "local",
            isAvailabilityLoading: false,
            isCloudAvailable: false,
            isLocalAvailable: true,
            isWorktreeAvailable: false,
          }
        : undefined,
    intl = ur(),
    scrollController = ad(),
    handleLocalSubmitStart = Y(() => {
      let scrollElement = scrollController.getScrollElement();
      onPrepareLatestTurnSubmitPlacement({
        distanceFromBottomPx:
          scrollController.getLastScrollDistanceFromBottomPx(),
        scrollHeightPx: scrollElement?.scrollHeight ?? null,
      });
      scrollController.setFooterResizeViewportPreserveDisabled(true);
    }),
    handleLocalSubmitError = Y(() => {
      onClearPendingLatestTurnSubmitPlacement();
      scrollController.setFooterResizeViewportPreserveDisabled(false);
    }),
    footer = (
      <>
        <ComposerWorkspaceDirectoryTree conversationId={conversationId} />
        {footerConnectionStatus == null
          ? null
          : $.jsx(LocalConversationConnectionStatus, {
              status: footerConnectionStatus,
            })}
        {$.jsx(hl, {
          browserConversationId:
            ot(scope.value) === conversationId
              ? (Ot(scope) ?? undefined)
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
        {$.jsx(zl, {
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
  let scope = B(Fe),
    navigate = rt(),
    isAppgenEndCardEnabled = Vo(),
    hasConversation = K(Mt, conversationId),
    modelProvider = K(s, conversationId),
    cwd = K(Wn, conversationId),
    hostId = K(En, conversationId),
    conversationResumeState = K(pr, conversationId) ?? "needs_resume",
    isConversationHistoryComplete = K(Ue, conversationId) ?? false,
    isResponseInProgress = K(ct, conversationId),
    completedThreadGoal = K(Bn, conversationId),
    isProjectlessConversation = K(er, conversationId) === "projectless",
    projectlessOutputDirectory = K(Cr, conversationId),
    collaborationMode = K(zt, conversationId),
    {
      conversationTurns,
      hasInheritedParentTurns,
      hasRenderableTurns,
      hasUserMessage,
      latestVisibleTurnId,
      visibleTurnEntries,
    } = K(localConversationVisibleTurnEntriesSignal, {
      conversationId,
      isBackgroundSubagentsEnabled,
    });
  visibleTurnEntries.at(-1)?.turn;
  let completedThreadGoalTurnKey =
      completedThreadGoal == null
        ? null
        : Yy(visibleTurnEntries, completedThreadGoal.updatedAt * 1e3),
    conversationHostApi = Pn(conversationId),
    { data: resolvedApps = qS } = Ti({
      hostId,
    }),
    renderMcpApps = Qt("2138468235").get("enable_mcp_apps", false),
    subagentParentThreadId = K(oi, conversationId),
    visibleSubagentParentThreadId = isBackgroundSubagentsEnabled
      ? subagentParentThreadId
      : null,
    [collapsedTurnsByConversationId, setCollapsedTurnsByConversationId] =
      li(JS),
    { items, markRead } = Co(),
    matchingAutomationItem = hasConversation
      ? (items.find((item) => item.threadId === conversationId) ?? null)
      : null,
    automationDescription = matchingAutomationItem?.description ?? null,
    shouldShowAutomationDescription =
      matchingAutomationItem?.automationId != null &&
      automationDescription != null &&
      automationDescription.trim().length > 0;
  GS.useEffect(() => {
    matchingAutomationItem?.id == null ||
      matchingAutomationItem.readAt != null ||
      markRead(matchingAutomationItem.id);
  }, [matchingAutomationItem?.id, matchingAutomationItem?.readAt, markRead]);
  let intl = ur(),
    { agentMode } = Xn({
      conversationId,
      hostId,
    }),
    resolvedCwd = cwd ? D(cwd) : null,
    collapsedTurnsById = GS.useMemo(
      () => collapsedTurnsByConversationId[conversationId] ?? {},
      [collapsedTurnsByConversationId, conversationId],
    ),
    lastLatestVisibleTurnIdRef = GS.useRef(null),
    currentConversationIdRef = GS.useRef(conversationId),
    previousTurnEntriesRef = GS.useRef([]),
    contentContainerRef = GS.useRef(null),
    virtualizedTurnListApiRef = GS.useRef(null);
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
    hasConversationRef = GS.useRef(hasConversation),
    conversationTurnsRef = GS.useRef(conversationTurns),
    isBackgroundSubagentsEnabledRef = GS.useRef(isBackgroundSubagentsEnabled);
  hasConversationRef.current = hasConversation;
  conversationTurnsRef.current = conversationTurns;
  isBackgroundSubagentsEnabledRef.current = isBackgroundSubagentsEnabled;
  let diffSource = W(Ya),
    routeContextId =
      conversationId == null ? "unavailable" : `conversation:${conversationId}`;
  useReviewSearchHighlights({
    containerRef: contentContainerRef,
    contextId: routeContextId,
  });
  let handleCopyCapture = Y((event) => {
      let containerElement = contentContainerRef.current;
      containerElement != null && zo(event, containerElement);
    }),
    setContentContainerRef = GS.useCallback(
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
    editLastTurnMessage = Y(async (turnEntry, message) => {
      try {
        await Dr("edit-last-user-turn-for-host", {
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
          scope.get(ti).danger(
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
    forkConversationFromTurn = Y(async (targetTurnId) => {
      if (hasConversation)
        try {
          let forkedConversationId = await Dr("fork-conversation-from-turn", {
            conversationId,
            targetTurnId,
            cwd,
            workspaceRoots: cwd == null ? undefined : [cwd],
            collaborationMode,
          });
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
            gr.error("Error forking conversation from turn", {
              safe: {},
              sensitive: {
                error,
              },
            }),
            scope.get(ti).danger(intl.formatMessage(fo.forkThreadError)),
            error
          );
        }
    }),
    handleForkTurnMessage = Y((turnEntry) => {
      if (!hasConversation || turnEntry.turnId == null) return;
      if (turnEntry.turnId === latestVisibleTurnId) {
        forkConversationFromTurn(turnEntry.turnId);
        return;
      }
      let turnIdForFork = turnEntry.turnId;
      st(scope, tb, {
        conversationCwd: cwd,
        conversationId,
        conversationLatestCollaborationMode: collaborationMode,
        hostId,
        onForkIntoLocal: () => forkConversationFromTurn(turnIdForFork),
        turnId: turnIdForFork,
      });
    }),
    setTurnCollapsed = Y((turnId, collapsed) => {
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
  let turnKeyBySearchKey = GS.useMemo(() => {
      let turnKeyMap = new Map();
      for (let entry of turnListEntries)
        turnKeyMap.has(entry.turnSearchKey) ||
          turnKeyMap.set(entry.turnSearchKey, entry.turnKey);
      return turnKeyMap;
    }, [turnListEntries]),
    searchScrollAdapter = GS.useMemo(
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
    conversationSource = GS.useMemo(
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
    revealThreadFindItem = Y(async ({ id: contentUnitId, turnKey }) => {
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
    }),
    revealContentSearchItem = Y(
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
  GS.useEffect(
    () =>
      Hs(scope, conversationId, {
        revealItem: revealContentSearchItem,
      }),
    [conversationId, revealContentSearchItem, scope],
  );
  GS.useEffect(() => {
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
  let notifyVisibleContentReady = Y(() => {
      setTimeout(() => {
        onVisibleThreadContentReady?.(conversationTurns.length);
      });
    }),
    handleVirtualizedTurnListApiChange = Y((virtualizedTurnListApi) => {
      virtualizedTurnListApiRef.current = virtualizedTurnListApi;
    }),
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
        {$.jsx(ThreadAppShellSourceRegistration, {
          conversationSource,
          diffSource,
          orchestrationId: conversationSource.contextId,
          isDefault: ot(scope.value) === conversationId,
        })}
        {$.jsxs(p.div, {
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
              $.jsx(
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
var WS, GS, $, KS, qS, JS, YS;
export const initLocalConversationThreadChunk = once(() => {
  WS = q();
  bt();
  xt();
  toEsModule(gi(), 1);
  c();
  gn();
  GS = toEsModule(G(), 1);
  Jn();
  xr();
  gc();
  on();
  nt();
  pn();
  cr();
  Ha();
  O();
  Bo();
  So();
  ro();
  vs();
  Ye();
  Lo();
  rc();
  Po();
  Ie();
  Rl();
  wn();
  Wc();
  ie();
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
  he();
  initThreadPipHostSelectors();
  initThreadPipHostAttributes();
  r();
  _();
  me();
  Ht();
  ae();
  Qe();
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
  Mr();
  _n();
  initThreadNullRefChunk();
  Ns();
  Jy();
  Xy();
  ib();
  sb();
  initConversationMarkdownRenderer();
  initThreadScrollState();
  Qi();
  _o();
  mc();
  yt();
  Wo();
  Ac();
  pb();
  initConversationSearchUnitExtractor();
  Nd();
  initLocalConversationTurnSelectors();
  Wb();
  Gx();
  Zx();
  nx();
  initThreadFindItemsBuilder();
  initBackgroundAgentThreadTab();
  fa();
  initBackgroundAgentThreadTabs();
  ll();
  Sa();
  mS();
  Md();
  qc();
  initMarkConversationReadEffect();
  initLocalConversationThreadRoute();
  Tx();
  $ = getJsxRuntime();
  KS = [];
  qS = [];
  JS = Ze({});
  YS = Rn(ut, (conversationId, { get }) => {
    let parentConversationId = get(oi, conversationId);
    if (parentConversationId == null) return get(ge, conversationId) ?? false;
    let conversationTurns = get(I, conversationId) ?? KS,
      parentConversationTurns = get(I, parentConversationId) ?? KS;
    return (
      getConversationTurnsNotInParent({
        areTurnItemsEqual: ob.default,
        conversation: {
          turns: conversationTurns,
        },
        parentConversation: {
          turns: parentConversationTurns,
        },
      }).at(-1)?.status === "inProgress"
    );
  });
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
