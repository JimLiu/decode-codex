// Restored from ref/webview/assets/local-conversation-thread-Bf38rCmF.js
// Public draft for the local conversation thread feature chunk. Key exported APIs have semantic names; internal imports still follow the current ref graph until their producers are restored.
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./thread-user-message-navigation-rail-Mi2GE36I.js",
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
  L as Ee,
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
  lz as mr,
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
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
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
  _u as xa,
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
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-KTK3czaX.js";
import {
  G as bo,
  W as xo,
  dn as So,
  fn as Co,
  jn as wo,
  kn as To,
} from "./app-initial~app-main~automations-page-bHJfYUGr.js";
import {
  O as Eo,
  k as Do,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-CQrj7g91.js";
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
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js";
import {
  $c as gs,
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
  Jd as Is,
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
  dl as yc,
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
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
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
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js";
import {
  getResizeObserverEntrySize as _l,
  initUseResizeObserverChunk as vl,
} from "../utils/use-resize-observer";
import {
  i as yl,
  r as bl,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~jv7rs281-DxRnxRkd.js";
import {
  H as xl,
  U as Sl,
  _ as Cl,
  v as wl,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js";
import {
  _ as Tl,
  g as El,
  o as Dl,
  u as Ol,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js";
import {
  n as kl,
  r as Al,
  t as jl,
} from "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~l5ab2ey0-8q2fQ40X.js";
import {
  DiffStats as Ml,
  initDiffStatsChunk as Nl,
} from "../git/git-review-primitives";
import {
  n as Pl,
  t as Fl,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~bgpm80n3-Br-I5tHC.js";
import {
  h as Il,
  m as Ll,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js";
import {
  m as Rl,
  p as zl,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-x4e4q7BN.js";
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
import {
  A as Yl,
  C as Xl,
  D as Zl,
  E as Ql,
  F as $l,
  M as eu,
  O as tu,
  P as nu,
  S as ru,
  T as iu,
  _ as au,
  a as ou,
  b as su,
  d as cu,
  f as lu,
  g as uu,
  h as du,
  i as fu,
  j as pu,
  k as mu,
  m as hu,
  n as gu,
  o as _u,
  p as vu,
  t as yu,
  w as bu,
  x as xu,
  y as Su,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js";
import {
  n as Cu,
  r as wu,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~a~hqj10sd5-DiinfLhP.js";
import {
  M as Tu,
  N as Eu,
} from "./app-initial~app-main~onboarding-page~appearance-settings~general-settings-Dkbr2b2v.js";
import {
  n as Du,
  r as Ou,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-Dg7uZJVh.js";
import { n as ku, t as Au } from "./use-git-config-value-DPgOVHFb.js";
import {
  initArtifactFilePreviewIconChunk as ju,
  ArtifactFilePreviewIcon as Mu,
} from "../utils/artifact-file-preview-icon";
import { n as Nu, t as Pu } from "./share-invite-autocomplete-DUiU0DI5.js";
import { n as Fu, t as Iu } from "./star-wM0A9s5z.js";
import {
  GitBranchSwitcher as Ru,
  initGitBranchSwitcherChunk as Lu,
} from "../git/git-branch-switcher";
import {
  a as zu,
  i as Bu,
  n as Vu,
  o as Hu,
  r as Uu,
  t as Wu,
} from "./local-remote-dropdown-BcmhHtfg.js";
import {
  a as Gu,
  i as Ku,
  n as qu,
  o as Ju,
  r as Yu,
  t as Xu,
} from "./thread-virtualizer-Cf6Pz8xO.js";
import { n as Zu, t as Qu } from "./header-CT44CGhD.js";
import { n as $u, t as ed } from "./team-DKjbhg1P.js";
import { n as td, r as nd, t as rd } from "./thread-scroll-layout-BNp7nttn.js";
import {
  n as id,
  r as ad,
  t as od,
} from "./thread-scroll-controller-context-value-Cl6S6mDJ.js";
import {
  a as sd,
  c as cd,
  d as ld,
  f as ud,
  l as dd,
  m as fd,
  o as pd,
  p as md,
  s as hd,
} from "./local-environments-utils-CkypnJBW.js";
import {
  C as gd,
  S as _d,
  _ as vd,
  a as yd,
  b as bd,
  i as xd,
  m as Sd,
  n as Cd,
  o as wd,
  p as Td,
  r as Ed,
  t as Dd,
  v as Od,
  w as kd,
  x as Ad,
} from "./pull-request-check-rows-Q1OJv6O3.js";
import {
  initOpenSideChatTabChunk as Nd,
  initThreadOverflowMenuChunk as Md,
  openSideChatTab as jd,
  ThreadOverflowMenu as Pd,
} from "../threads/thread-overflow-menu";
import { shouldShowInlineActivityForRightPanel } from "./local-conversation-thread-parts/inline-activity-panel";
import { shouldUseFullWidthRightPanelForRoute } from "./local-conversation-thread-parts/right-panel-route-state";
import { shouldShowScrollToBottomButton } from "./local-conversation-thread-parts/scroll-to-bottom-state";
function Fd(e) {
  let n = Ld.useRef(null),
    r = (t) => {
      n.current ??= window.setTimeout(() => {
        n.current = null;
        t();
      }, e);
    };
  let i = r,
    a = () => {
      n.current != null && (window.clearTimeout(n.current), (n.current = null));
    };
  let o = a;
  return {
    schedule: i,
    cancel: o,
  };
}
var Id,
  Ld,
  Rd = once(() => {
    Id = q();
    Ld = toEsModule(G(), 1);
  });
function useReviewSearchHighlights(e) {
  let { containerRef, contextId } = e,
    i = W(Ai),
    a = W(Gi),
    o = i?.contextId === contextId ? i : null,
    s = o == null ? null : (a?.id ?? null),
    c = Vd.useRef(null),
    { schedule, cancel } = Fd(Hd),
    d = () => {
      let e = containerRef.current;
      if (e == null) return;
      oo(e, {
        includeShadowRoots: false,
      });
      let t = c.current;
      if (
        (t != null && (t.classList.remove(ba), (c.current = null)), o == null)
      )
        return;
      let r = Ii(o.matches),
        i = new Map();
      if (
        (e
          .querySelectorAll("[data-content-search-unit-key]")
          .forEach((item) => {
            let t = item.dataset.contentSearchUnitKey;
            if (t == null) return;
            let n = r.get(t);
            n == null ||
              n.length === 0 ||
              mo({
                target: item,
                query: o.query,
                maxMatches: n.length,
                includeShadowRoots: false,
              }).matches.forEach((_item, index) => {
                let r = n[index];
                r != null &&
                  (Pi({
                    element: _item,
                    matchId: r.id,
                  }),
                  i.set(r.id, _item));
              });
          }),
        s == null)
      )
        return;
      let a = i.get(s);
      a != null && (a.classList.add(ba), (c.current = a));
    };
  let f = Vd.useEffectEvent(d),
    p = () => {
      let e = containerRef.current;
      if (e == null || (f(), o?.runId == null)) return;
      let t = new MutationObserver((e) => {
        uo(e) && schedule(f);
      });
      return (
        t.observe(e, {
          childList: true,
          subtree: true,
          characterData: true,
        }),
        () => {
          t.disconnect();
          cancel();
        }
      );
    };
  let m = o?.runId,
    h;
  h = [m, s, cancel, containerRef, contextId, schedule];
  Vd.useEffect(p, h);
}
var Bd,
  Vd,
  Hd,
  initReviewSearchHighlighter = once(() => {
    Bd = q();
    c();
    Vd = toEsModule(G(), 1);
    la();
    ea();
    Qa();
    Rd();
    Hd = 80;
  });
function Wd({ hostId, hostRect, obstacleRects }) {
  let r = obstacleRects.map((item) => Zd(hostRect, item));
  return {
    anchorRect: hostRect,
    anchors: hf.map((item) => Gd(item, hostRect, r)),
    animated: false,
    hostId,
    presentationScope: "thread",
  };
}
function Gd(e, t, n) {
  let r = Kd(e, t),
    i = r;
  for (let a = 0; a < df; a += 1) {
    let a = Xd(i, n);
    if (a == null) break;
    i = qd({
      alignment: e,
      hostRect: t,
      obstacle: a,
      obstacles: n,
      rect: i,
      sourceRect: r,
    });
  }
  return {
    alignment: e,
    point: Qd(e, t, i),
  };
}
function Kd(e, t) {
  switch (e) {
    case "top-left":
      return ef(cf, cf, uf);
    case "top-right":
      return ef(t.width - uf.width - cf, cf, uf);
    case "bottom-left":
      return ef(cf, t.height - uf.height - cf, uf);
    case "bottom-right":
      return ef(t.width - uf.width - cf, t.height - uf.height - cf, uf);
  }
}
function qd({ alignment, hostRect, obstacle, obstacles, rect, sourceRect }) {
  let o = Jd(alignment, rect, obstacle).map((item) => ({
      priority: item.priority,
      rect: $d(item.rect, hostRect),
    })),
    s = o[0],
    c = s == null ? 1 / 0 : Yd(s, obstacles, sourceRect);
  for (let e of o.slice(1)) {
    let t = Yd(e, obstacles, sourceRect);
    t < c && ((s = e), (c = t));
  }
  return s?.rect ?? rect;
}
function Jd(e, t, n) {
  let r = ef(t.left, n.bottom, t),
    i = ef(t.left, n.top - t.height, t),
    a = ef(n.right, t.top, t),
    o = ef(n.left - t.width, t.top, t);
  switch (e) {
    case "top-left":
      return [
        {
          priority: 0,
          rect: r,
        },
        {
          priority: 1,
          rect: a,
        },
        {
          priority: 2,
          rect: o,
        },
        {
          priority: 3,
          rect: i,
        },
      ];
    case "top-right":
      return [
        {
          priority: 0,
          rect: r,
        },
        {
          priority: 1,
          rect: o,
        },
        {
          priority: 2,
          rect: a,
        },
        {
          priority: 3,
          rect: i,
        },
      ];
    case "bottom-left":
      return [
        {
          priority: 0,
          rect: i,
        },
        {
          priority: 1,
          rect: a,
        },
        {
          priority: 2,
          rect: o,
        },
        {
          priority: 3,
          rect: r,
        },
      ];
    case "bottom-right":
      return [
        {
          priority: 0,
          rect: i,
        },
        {
          priority: 1,
          rect: o,
        },
        {
          priority: 2,
          rect: a,
        },
        {
          priority: 3,
          rect: r,
        },
      ];
  }
}
function Yd(e, t, n) {
  let r = t.reduce(
    (accumulator, current) => accumulator + nf(e.rect, current),
    0,
  );
  return (
    (r > 0 ? ff : 0) +
    r * pf +
    e.priority * mf +
    (e.rect.left - n.left) ** 2 +
    (e.rect.top - n.top) ** 2
  );
}
function Xd(e, t) {
  for (let n of t) if (nf(e, n) > 0) return n;
  return null;
}
function Zd(e, t) {
  return tf({
    bottom: t.y - e.y + t.height + lf,
    left: t.x - e.x - lf,
    right: t.x - e.x + t.width + lf,
    top: t.y - e.y - lf,
  });
}
function Qd(e, t, n) {
  switch (e) {
    case "top-left":
      return {
        x: t.x + n.left,
        y: t.y + n.top,
      };
    case "top-right":
      return {
        x: t.x + n.right,
        y: t.y + n.top,
      };
    case "bottom-left":
      return {
        x: t.x + n.left,
        y: t.y + n.bottom,
      };
    case "bottom-right":
      return {
        x: t.x + n.right,
        y: t.y + n.bottom,
      };
  }
}
function $d(e, t) {
  return ef(
    rf(e.left, cf, Math.max(cf, t.width - e.width - cf)),
    rf(e.top, cf, Math.max(cf, t.height - e.height - cf)),
    e,
  );
}
function ef(e, t, n) {
  return {
    bottom: t + n.height,
    height: n.height,
    left: e,
    right: e + n.width,
    top: t,
    width: n.width,
  };
}
function tf({ bottom, left, right, top }) {
  return {
    bottom,
    height: bottom - top,
    left,
    right,
    top,
    width: right - left,
  };
}
function nf(e, t) {
  let n = Math.min(e.right, t.right) - Math.max(e.left, t.left),
    r = Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top);
  return n <= 0 || r <= 0 ? 0 : n * r;
}
function rf(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf = once(() => {
    af = "codex-main-thread";
    of = "data-pip-anchor-host";
    sf = "data-pip-obstacle";
    cf = 24;
    lf = 12;
    uf = {
      height: 250,
      width: 250,
    };
    df = 6;
    ff = 1e9;
    pf = 1e4;
    mf = 1e6;
    hf = ["top-left", "top-right", "bottom-left", "bottom-right"];
  });
function _f(e) {
  let t = window.electronBridge?.sendMessageFromView;
  if (t == null || document.body == null) return () => {};
  let n = t,
    r = Number.isFinite(e) && e > 0 ? e : 1,
    i = null,
    a = null,
    o = null,
    s = new ResizeObserver(f),
    c = new MutationObserver((e) => {
      e.some(xf) && (m(), f());
    }),
    l = new MutationObserver(f);
  function u(e) {
    let t = yf(e);
    if (t === o) return;
    let r =
        a?.anchorRect != null &&
        e.anchorRect != null &&
        bf(e.anchorRect, a.anchorRect),
      i = {
        ...e,
        animated: r,
      };
    a = i;
    o = t;
    n({
      layout: i,
      type: "remote-hosted-pip-host-layout-changed",
    });
  }
  function d() {
    u({
      anchors: null,
      anchorRect: null,
      animated: false,
      hostId: af,
      presentationScope: "thread",
    });
  }
  function f() {
    i ??= window.requestAnimationFrame(() => {
      i = null;
      p();
    });
  }
  function p() {
    let e = document.querySelector(Cf);
    if (e == null) {
      d();
      return;
    }
    let t = vf(e, r);
    if (t == null) {
      d();
      return;
    }
    let n = [];
    for (let e of document.querySelectorAll(wf)) {
      let t = vf(e, r);
      t != null && n.push(t);
    }
    u(
      Wd({
        hostId: af,
        hostRect: t,
        obstacleRects: n,
      }),
    );
  }
  function m() {
    s.disconnect();
    l.disconnect();
    for (let e of document.querySelectorAll(Tf)) {
      s.observe(e);
      l.observe(e, {
        attributeFilter: ["class", "hidden", "style"],
        attributes: true,
      });
    }
  }
  return (
    c.observe(document.body, {
      attributeFilter: [of, sf],
      attributes: true,
      childList: true,
      subtree: true,
    }),
    window.addEventListener("resize", f),
    document.addEventListener("scroll", f, true),
    m(),
    f(),
    () => {
      i != null && window.cancelAnimationFrame(i);
      s.disconnect();
      c.disconnect();
      l.disconnect();
      window.removeEventListener("resize", f);
      document.removeEventListener("scroll", f, true);
      d();
    }
  );
}
function vf(e, t) {
  if (e.hidden) return null;
  let n = e.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0
    ? null
    : {
        height: n.height / t,
        width: n.width / t,
        x: n.left / t,
        y: n.top / t,
      };
}
function yf(e) {
  return JSON.stringify({
    anchors: e.anchors,
    anchorRect: e.anchorRect,
    hostId: e.hostId,
    presentationScope: e.presentationScope,
  });
}
function bf(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function xf(e) {
  if (e.type === "attributes") return true;
  for (let t of e.addedNodes) if (Sf(t)) return true;
  for (let t of e.removedNodes) if (Sf(t)) return true;
  return false;
}
function Sf(e) {
  return (
    e instanceof HTMLElement && (e.matches(Tf) || e.querySelector(Tf) != null)
  );
}
var Cf,
  wf,
  Tf,
  Ef = once(() => {
    gf();
    Cf = `[${of}="${af}"]`;
    wf = `[${sf}]`;
    Tf = `${Cf},${wf}`;
  });
function ThreadFindNavigationRail(e) {
  let { enabled = true, getItems, onRevealItem } = e,
    [o, s] = kf.useState(false),
    c = Vr("2551582477") && enabled,
    l,
    u;
  if (
    ((l = () => {
      if (!c || o) return;
      let e = () => {
          s(true);
        },
        t = window.requestIdleCallback?.bind(window),
        n = window.cancelIdleCallback?.bind(window);
      if (t && n) {
        let r = t(e, {
          timeout: 2e3,
        });
        return () => {
          n(r);
        };
      }
      let r = globalThis.setTimeout(e, 0);
      return () => {
        globalThis.clearTimeout(r);
      };
    }),
    (u = [c, o]),
    kf.useEffect(l, u),
    !c || !o)
  )
    return null;
  let d = getItems();
  return Af.jsx(jf, {
    items: d,
    onRevealItem,
  });
}
var Of,
  kf,
  Af,
  jf,
  initThreadFindNavigationRail = once(() => {
    Of = q();
    kf = toEsModule(G(), 1);
    ol();
    ae();
    Af = getJsxRuntime();
    Qn();
    jf = al(
      async () =>
        (
          await u(
            async () => {
              let { ThreadUserMessageNavigationRail } = await import(
                "./thread-user-message-navigation-rail-Mi2GE36I.js"
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
  Nf = once(() => {}),
  Pf,
  Ff,
  If = once(() => {
    toEsModule(G());
    Pf = getJsxRuntime();
    Ff = (e) => (
      <svg
        width={29}
        height={16}
        viewBox="0 0 29 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...e}
      >
        <path
          d="M0 14.7754C0 14.4694 0.107422 14.209 0.322266 13.9941C0.537109 13.7728 0.797526 13.6621 1.10352 13.6621H3.24219V2.07031C3.24219 1.38672 3.42773 0.872396 3.79883 0.527344C4.17643 0.175781 4.6875 0 5.33203 0H22.832C23.5156 0 24.0332 0.175781 24.3848 0.527344C24.7428 0.872396 24.9219 1.38672 24.9219 2.07031V13.6621H27.0605C27.3665 13.6621 27.627 13.7728 27.8418 13.9941C28.0566 14.209 28.1641 14.4694 28.1641 14.7754C28.1641 15.0814 28.0566 15.3418 27.8418 15.5566C27.627 15.778 27.3665 15.8887 27.0605 15.8887H1.10352C0.797526 15.8887 0.537109 15.778 0.322266 15.5566C0.107422 15.3418 0 15.0814 0 14.7754ZM4.81445 13.6621H23.3496V2.50977C23.3496 2.19727 23.2715 1.96289 23.1152 1.80664C22.959 1.65039 22.7246 1.57227 22.4121 1.57227H5.75195C5.43945 1.57227 5.20508 1.65039 5.04883 1.80664C4.89258 1.96289 4.81445 2.19727 4.81445 2.50977V13.6621Z"
          fill="currentColor"
        />
      </svg>
    );
  });
function Lf(e) {
  let { children, empty, getKey, items, listClassName, visibleItemLimit } = e,
    c = visibleItemLimit === undefined ? Hf : visibleItemLimit,
    [l, u] = Bf.useState(false);
  if (items.length === 0) return empty ?? null;
  let d = items.length > c,
    f = l ? items : items.slice(0, c);
  let p = f,
    m = items.length - p.length,
    h;
  {
    let e;
    e = (e, t) => <>{children(e, t)}</>;
    h = p.map(e);
  }
  let g = h,
    _ = listClassName == null ? g : <div className={listClassName}>{g}</div>;
  let v = d
    ? Vf.jsx(k, {
        className:
          "!px-0 !py-0 text-token-text-tertiary hover:text-token-text-secondary",
        color: "ghostMuted",
        size: "default",
        onClick: () => {
          u(Rf);
        },
        children: l ? (
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
              count: m,
            }}
          />
        ),
      })
    : null;
  return (
    <>
      {_}
      {v}
    </>
  );
}
function Rf(e) {
  return !e;
}
var zf,
  Bf,
  Vf,
  Hf,
  Uf = once(() => {
    zf = q();
    Bf = toEsModule(G(), 1);
    Jn();
    Ye();
    Vf = getJsxRuntime();
    Hf = 6;
  });
function Wf(e) {
  let { artifacts, conversationTitle = null, getImagePreviewSrc, onOpen } = e,
    s = B(Fe),
    c = ur(),
    l,
    u;
  {
    let e = artifacts.flatMap(Kf),
      r = artifacts.some(Gf);
    let a = r;
    l = new Map(
      e.map((item, index) => [item, a ? e.length - index : index + 1]),
    );
    u = artifacts
      .slice()
      .reverse()
      .flatMap((item) => {
        if (
          (item.type !== "file" && item.type !== "generated-image") ||
          Wr(item.path) !== "always"
        )
          return [];
        let t = wt(item.path),
          n = l.get(item.path),
          r =
            n == null
              ? t
              : c.formatMessage(
                  {
                    id: "codex.localConversation.artifacts.generatedImage",
                    defaultMessage: "Generated image {imageNumber}",
                    description:
                      "Label for a generated image artifact in the thread summary side panel",
                  },
                  {
                    imageNumber: n,
                  },
                ),
          a =
            n == null || conversationTitle == null
              ? r
              : c.formatMessage(
                  {
                    id: "codex.localConversation.generatedImageTabTitle",
                    defaultMessage:
                      "{conversationTitle} - Generated image {imageNumber}",
                    description:
                      "Title for a generated image preview tab, prefixed by the conversation title",
                  },
                  {
                    conversationTitle: conversationTitle,
                    imageNumber: n,
                  },
                );
        return [
          {
            alt: r,
            id: item.path,
            previewSrc: getImagePreviewSrc?.(item.path) ?? item.path,
            src: item.path,
            tabTitle: a,
          },
        ];
      });
  }
  let d = u,
    f = (
      <div className="py-1 text-base text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.artifacts.empty"
          defaultMessage="No artifacts yet"
          description="Empty state for the artifacts section in the thread summary side panel"
        />
      </div>
    );
  let p = (event) => {
    switch (event.type) {
      case "website": {
        let t = Jf(event.target);
        return (
          <Fl
            icon={<Sr className="icon-sm shrink-0" />}
            label={
              t ?? (
                <FormattedMessage
                  id="codex.localConversation.artifacts.website"
                  defaultMessage="Web preview"
                  description="Label for a website artifact in the thread summary side panel"
                />
              )
            }
            onClick={(t) => onOpen(event, t)}
            title={event.target}
          />
        );
      }
      case "google-drive":
        return (
          <Fl
            icon={
              <Bc
                className="icon-sm shrink-0"
                resourceKind={event.resourceKind}
              />
            }
            label={event.title}
            onClick={(t) => onOpen(event, t)}
            title={event.url}
          />
        );
      case "appgen-app":
        return (
          <Fl
            icon={<No className="icon-sm shrink-0" />}
            label={
              <span className="flex min-w-0 items-center gap-1">
                <span className="truncate">
                  {event.title ?? Ho(event.url) ?? event.url}
                </span>
                <In
                  className="icon-xs shrink-0 opacity-0 group-hover/summary-panel-row:opacity-100 group-focus-visible/summary-panel-row:opacity-100"
                  ExternalIcon={cc}
                  href={event.url}
                />
              </span>
            }
            labelClassName="min-w-0"
            onClick={(t) => onOpen(event, t)}
            title={event.url}
          />
        );
      case "file":
      case "generated-image": {
        let t = wt(event.path),
          n = l.get(event.path),
          r =
            n == null ? (
              t
            ) : (
              <FormattedMessage
                id="codex.localConversation.artifacts.generatedImage"
                defaultMessage={"Generated image {imageNumber}"}
                description="Label for a generated image artifact in the thread summary side panel"
                values={{
                  imageNumber: n,
                }}
              />
            );
        return (
          <Fl
            icon={
              <Mu
                getImagePreviewSrc={getImagePreviewSrc}
                iconClassName="icon-sm"
                imageClassName="size-5 rounded-sm border border-token-border"
                path={event.path}
              />
            }
            label={r}
            onClick={(t) => {
              let n = d.find((item) => item.id === event.path);
              (n != null &&
                Rs(s, {
                  alt: n.alt,
                  attachmentSrc: event.path,
                  downloadSrc: n.previewSrc,
                  generatedImages: d,
                  initialImageId: n.id,
                  referrerPolicy: "no-referrer",
                  src: n.previewSrc,
                  title: n.tabTitle,
                })) ||
                onOpen(event, t);
            }}
            title={event.path}
          />
        );
      }
    }
  };
  return (
    <Lf
      items={artifacts}
      getKey={qf}
      listClassName="-mx-2 flex max-h-[28rem] flex-col gap-0.5 overflow-y-auto px-2"
      empty={f}
    >
      {p}
    </Lf>
  );
}
function Gf(e) {
  return e.type === "generated-image";
}
function Kf(e) {
  return e.type === "generated-image" ||
    (e.type === "file" && Zf.test(wt(e.path)))
    ? [e.path]
    : [];
}
function qf(event) {
  switch (event.type) {
    case "file":
    case "generated-image":
      return event.path;
    case "google-drive":
      return `google-drive:${event.url}`;
    case "appgen-app":
      return `appgen-app:${event.projectId}`;
    case "website":
      return `website:${event.target}`;
  }
}
function Jf(e) {
  if (!yn(e)) {
    let t = wt(e);
    return t.length > 0 ? t : e.length > 0 ? e : null;
  }
  try {
    let t = new URL(e);
    return `${t.host}${t.pathname === "/" ? "" : t.pathname}${t.search}`;
  } catch {
    return e.length > 0 ? e : null;
  }
}
var Yf,
  Xf,
  Zf,
  Qf = once(() => {
    Yf = q();
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
    Uf();
    Pl();
    Xf = getJsxRuntime();
    Zf = /^ig_[a-f0-9]{32,}\.(?:avif|gif|jpeg|jpg|png|webp)$/i;
  });
function $f(e) {
  let {
      backgroundAgents,
      backgroundTerminals,
      conversationId,
      onOpenBackgroundAgent,
      onOpenTerminal,
      onStopError,
    } = e,
    c = ur(),
    [l, u] = sp.useState(null),
    d,
    f;
  {
    d = [];
    let e;
    e = backgroundAgents.filter(ep);
    f = e;
    for (let e of backgroundAgents)
      e.showInlineActivity ||
        d.push({
          backgroundAgent: e,
          type: "agent",
        });
    for (let e of backgroundTerminals)
      d.push({
        terminal: e,
        type: "terminal",
      });
  }
  let p = (e) => {
    conversationId == null ||
      l != null ||
      (u(e.id),
      Dr("clean-background-terminals", {
        conversationId,
      })
        .catch(onStopError)
        .finally(() => u(null)));
  };
  let m = p,
    h = (e) => {
      switch (e.type) {
        case "agent":
          return (
            <Fl
              icon={null}
              label={cp.jsx(ip, {
                backgroundAgent: e.backgroundAgent,
              })}
              labelClassName="min-w-0"
              trailing={
                e.backgroundAgent.diffStats == null ? null : (
                  <Ml
                    linesAdded={e.backgroundAgent.diffStats.linesAdded}
                    linesRemoved={e.backgroundAgent.diffStats.linesRemoved}
                    className="text-size-chat"
                  />
                )
              }
              trailingVisible={e.backgroundAgent.diffStats != null}
              onClick={() => onOpenBackgroundAgent(e.backgroundAgent)}
            />
          );
        case "terminal":
          return (
            <Fl
              icon={cp.jsx(ds, {
                className: "icon-sm shrink-0 text-token-text-secondary",
              })}
              label={
                <span className="truncate text-sm">
                  {e.terminal.command.length > 0 ? (
                    e.terminal.command
                  ) : (
                    <FormattedMessage
                      id="codex.localConversation.backgroundTerminals.defaultLabel"
                      defaultMessage="Background terminal"
                      description="Fallback row label for a running background terminal when the command text is unavailable"
                    />
                  )}
                </span>
              }
              actions={cp.jsx(jr, {
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
                    disabled={l != null}
                    onClick={() => m(e.terminal)}
                    aria-label={c.formatMessage({
                      id: "codex.localConversation.backgroundTerminals.stop",
                      defaultMessage: "Stop all background terminals",
                      description:
                        "Aria label for button that stops all background terminals from the thread summary panel",
                    })}
                  >
                    {l === e.terminal.id
                      ? cp.jsx(rr, {
                          className: "icon-xs",
                        })
                      : cp.jsx(js, {
                          className: "icon-xs",
                          "aria-hidden": true,
                        })}
                  </button>
                ),
              })}
              onClick={() => onOpenTerminal(e.terminal)}
            />
          );
      }
    };
  let g = (
    <Lf items={d} getKey={ap}>
      {h}
    </Lf>
  );
  let _ = g;
  return f.length > 0 ? (
    <>
      {cp.jsx(tp, {
        backgroundAgents: f,
        onOpenBackgroundAgent,
      })}
      {_}
    </>
  ) : (
    _
  );
}
function ep(e) {
  let { showInlineActivity } = e;
  return showInlineActivity;
}
function tp(e) {
  let { backgroundAgents, onOpenBackgroundAgent } = e,
    i,
    a,
    o,
    s,
    c;
  {
    c = backgroundAgents.filter(rp);
    i = backgroundAgents.filter(np);
    let e = c.length > 0 ? c.slice(0, 4) : i.slice(-4);
    s = "flex min-h-8 items-center gap-2";
    a = "flex shrink-0 items-center gap-1.5";
    let l;
    l = (e) => (
      <button
        key={e.conversationId}
        type="button"
        className="flex size-4 cursor-interaction rounded-full focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={e.displayName}
        onClick={() => onOpenBackgroundAgent(e)}
      >
        {cp.jsx(bc, {
          seed: e.conversationId,
          className: "size-4",
          "aria-hidden": true,
        })}
      </button>
    );
    o = e.map(l);
  }
  let l = <span className={a}>{o}</span>;
  let u =
    c.length > 0 ? (
      <span className="text-base whitespace-nowrap text-token-foreground">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.collapsedWorkingCount"
          defaultMessage={"{count, plural, one {# working} other {# working}}"}
          description="Number of multi-agent v2 subagents that are still working in the collapsed summary panel row"
          values={{
            count: c.length,
          }}
        />
      </span>
    ) : null;
  let d =
    i.length > 0 ? (
      <span className="text-base whitespace-nowrap text-token-text-tertiary">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.collapsedDoneCount"
          defaultMessage={"{count, plural, one {# done} other {# done}}"}
          description="Number of multi-agent v2 subagents that are done in the collapsed summary panel row"
          values={{
            count: i.length,
          }}
        />
      </span>
    ) : null;
  return (
    <div className={s}>
      {l}
      {u}
      {d}
    </div>
  );
}
function np(e) {
  let { status } = e;
  return status === "done";
}
function rp(e) {
  let { status } = e;
  return status !== "done";
}
function ip(e) {
  let { backgroundAgent } = e,
    r =
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
  let i = r,
    a = i == null,
    o = backgroundAgent.status === "active",
    s = (
      <Uo
        active={o}
        seed={backgroundAgent.conversationId}
        className="icon-sm pointer-events-none"
        aria-hidden={true}
      />
    );
  let c = (
    <span className="min-w-0 truncate">{backgroundAgent.displayName}</span>
  );
  let l =
    backgroundAgent.status === "active" ? (
      <span className="loading-shimmer-pure-text shrink-0 whitespace-nowrap text-token-description-foreground">
        <FormattedMessage
          id="codex.localConversation.backgroundAgents.activeLabel"
          defaultMessage="is working"
          description="Status label shown next to an active background subagent in the thread summary panel"
        />
      </span>
    ) : null;
  let u = (
    <span className="flex min-w-0 items-center gap-2">
      {s}
      {c}
      {l}
    </span>
  );
  return cp.jsx(jr, {
    disabled: a,
    tooltipContent: i,
    children: u,
  });
}
function ap(e) {
  switch (e.type) {
    case "agent":
      return `agent:${e.backgroundAgent.conversationId}`;
    case "terminal":
      return `terminal:${e.terminal.id}`;
  }
}
var op,
  sp,
  cp,
  lp = once(() => {
    op = q();
    sp = toEsModule(G(), 1);
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
    Uf();
    Pl();
    cp = getJsxRuntime();
  });
function up({
  actionStatesByProcessId,
  backgroundTerminals,
  conversationId,
  processSnapshotTimeMs,
  registeredRows,
}) {
  if (conversationId == null) return 0;
  let a = new Set(backgroundTerminals.map((item) => item.id)),
    o = backgroundTerminals.slice(),
    s = backgroundTerminals.length;
  for (let e of registeredRows)
    a.has(e.terminal.id) ||
      mp(o, e.terminal) ||
      (a.add(e.terminal.id), o.push(e.terminal), (s += 1));
  for (let t of actionStatesByProcessId.values())
    lu(t, null, processSnapshotTimeMs) ||
      t.row.process.conversationId !== conversationId ||
      !pp(t.row) ||
      a.has(t.row.terminal.id) ||
      mp(o, t.row.terminal) ||
      (a.add(t.row.terminal.id), o.push(t.row.terminal), (s += 1));
  return s;
}
function dp(e, t) {
  if (t.size === 0) return e;
  let n = e.slice(),
    r = [];
  for (let e of t.values())
    n.some((item) => bu(item.process, e.row.process)) ||
      !pp(e.row) ||
      r.push({
        row: e.row,
        rowIndex: e.rowIndex ?? n.length,
      });
  r.sort((e, t) => e.rowIndex - t.rowIndex);
  for (let e of r) n.splice(Math.min(e.rowIndex, n.length), 0, e.row);
  return n;
}
function fp({
  childProcesses,
  conversationCwd,
  conversationId,
  enabled,
  hostId,
  processSnapshotTimeMs,
  records,
  restoredProcesses,
}) {
  return !enabled || conversationId == null
    ? []
    : _u(
        ru(
          restoredProcesses,
          records == null || records.length === 0
            ? []
            : xu(
                records.filter(
                  (item) => item.conversationId === conversationId,
                ),
                [
                  {
                    cwd: conversationCwd,
                    hostId,
                    id: conversationId,
                    title: null,
                    turns: [],
                  },
                ],
              ),
        ),
        childProcesses,
        processSnapshotTimeMs,
      ).map((item) => ({
        ...item,
        terminal: hp(item.process),
      }));
}
function pp(e) {
  return "terminal" in e;
}
function mp(e, t) {
  return e.some(
    (item) =>
      item.id === t.id ||
      (item.command === t.command &&
        item.cwd === t.cwd &&
        item.turnId === t.turnId),
  );
}
function hp(e) {
  return {
    command: e.command,
    cwd: e.cwd,
    id: e.itemId,
    processId: e.processId,
    startedAtMs: e.startedAtMs,
    turnId: e.turnId,
  };
}
var gp = once(() => {
  Xl();
  cu();
});
function _p(e) {
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
    } = e,
    f = B(ut),
    p = Op.useRef(isVisible),
    m = W(uu),
    h = qr("child-process-kill"),
    g = qr("chat-process-register"),
    _;
  bb0: {
    if (conversationId == null) {
      let e;
      e = [];
      _ = e;
      break bb0;
    }
    let e;
    {
      let o;
      o = (e) => {
        let t = Ep({
          conversationId,
          hostId,
          terminal: e,
        });
        return {
          metrics: Su(t, childProcesses, processSnapshotTimeMs),
          process: t,
          terminal: e,
        };
      };
      e = backgroundTerminals.map(o);
    }
    _ = e;
  }
  let v = _,
    y = Cp(v, registeredRows);
  let b = y,
    x = wp(b, m, processSnapshotTimeMs);
  let C = x,
    w = dp(b, C);
  let T = w,
    E,
    D;
  E = () => {
    p.current = isVisible;
    isVisible || hu(f);
  };
  D = [isVisible, f];
  Op.useEffect(E, D);
  let O, k;
  O = () => () => {
    p.current = false;
    hu(f);
  };
  k = [f];
  Op.useEffect(O, k);
  let A = (e, t) => {
    let n = e.metrics?.pid;
    n != null &&
      (au(f, e.process.id, {
        row: e,
        rowIndex: t,
        sortRow: e,
        status: "stopping",
      }),
      h
        .mutateAsync({
          pid: n,
        })
        .then(
          (value) => {
            let { killed } = value;
            if (!killed) throw Error("Process is no longer running");
            if (p.current) {
              au(f, e.process.id, {
                row: e,
                rowIndex: t,
                sortRow: e,
                status: "stopped",
              });
              return;
            }
            vu(f, e.process.id);
          },
          () => {
            onStopError();
            vu(f, e.process.id);
          },
        ));
  };
  let j = A,
    M = (e, t) => {
      let { process } = e;
      if (process.cwd == null) return;
      let r = Date.now(),
        i = _e.addSessionForConversation(process.conversationId),
        a = {
          metrics: null,
          process: {
            ...process,
            commandExecutionStartedAtMs: r,
            itemId: i,
            osPid: null,
            processId: null,
            startedAtMs: r,
          },
          terminal: {
            ...e.terminal,
            id: i,
            processId: null,
            startedAtMs: r,
          },
        };
      au(f, process.id, {
        expiresAtMs: r + Ap,
        row: a,
        rowIndex: t,
        sortRow: e,
        status: "starting",
      });
      g.mutateAsync({
        persistIfUnmatched: true,
        record: {
          chatTitle: process.chatTitle,
          command: process.command,
          conversationId: process.conversationId,
          cwd: process.cwd,
          id: process.id,
          itemId: i,
          osPid: null,
          processId: null,
          startedAtMs: r,
          turnId: process.turnId,
          updatedAtMs: r,
        },
      }).catch(onRestartError);
      _e.create({
        conversationId: process.conversationId,
        conversationTitle: process.chatTitle,
        cwd: process.cwd,
        hostId: process.hostId,
        preserveOnOwnerDestroy: true,
        sessionId: i,
      });
      _e.runHeadlessAction(i, {
        command: process.command,
        cwd: process.cwd,
      });
    };
  let N = M,
    P = (e, t) => {
      let n = e.metrics?.pid;
      n != null &&
        (au(f, e.process.id, {
          row: e,
          rowIndex: t,
          sortRow: e,
          status: "stopping",
        }),
        h
          .mutateAsync({
            pid: n,
          })
          .then(
            (value) => {
              let { killed } = value;
              if (!killed) throw Error("Process is no longer running");
              N(e, t);
            },
            () => {
              onRestartError();
              vu(f, e.process.id);
            },
          ));
    };
  let F = P,
    I;
  {
    let e;
    e = (e, t) => {
      let n = Sp(e, ou(e, C), childProcesses != null);
      return (
        <Fl
          key={e.terminal.id}
          icon={kp.jsx(bp, {
            status: n,
          })}
          label={
            <span
              className={S(
                "block min-w-0 truncate text-sm leading-5",
                n === "starting" && "loading-shimmer-pure-text",
                (n === "stopped" || n === "not-found") &&
                  "text-token-description-foreground",
              )}
            >
              {e.terminal.command.length > 0 ? (
                e.terminal.command
              ) : (
                <FormattedMessage {...jp.defaultLabel} />
              )}
            </span>
          }
          actions={kp.jsx(vp, {
            row: e,
            rowIndex: t,
            status: n,
            onOpen,
            onRestart: F,
            onStart: N,
            onStop: j,
          })}
          actionsAlwaysFocusable={true}
          onClick={() => onOpen(e.terminal)}
        />
      );
    };
    I = T.map(e);
  }
  return I;
}
function vp(e) {
  let { onOpen, onRestart, onStart, onStop, row, rowIndex, status } = e,
    l = ur(),
    u = status === "starting",
    d = status === "stopping",
    f = status === "stopped",
    p = status === "not-found",
    m = !f && !p && row.metrics?.pid == null,
    h = row.process.cwd != null && !u && !d && !m,
    g =
      row.process.cwd == null ? (
        <FormattedMessage {...jp.restartMissingWorkspaceTooltip} />
      ) : u ? (
        <FormattedMessage {...jp.restartStartingTooltip} />
      ) : d ? (
        <FormattedMessage {...jp.restartStoppingTooltip} />
      ) : m ? (
        <FormattedMessage {...jp.restartMissingProcessTooltip} />
      ) : undefined;
  let _ = g,
    v = f || p ? jp.start : jp.restart,
    y = () => {
      if (f || p) {
        onStart(row, rowIndex);
        return;
      }
      onRestart(row, rowIndex);
    };
  let b = y,
    x = l.formatMessage(jp.actions);
  let C = S(ac, "data-[state=open]:text-token-foreground");
  let w = <Hi className="icon-2xs" />;
  let T = (
    <button type="button" aria-label={x} className={C} onClick={yp}>
      {w}
    </button>
  );
  let E = () => onOpen(row.terminal);
  let D = <FormattedMessage {...jp.openOutput} />;
  let O = (
    <Br.Item LeftIcon={ds} leftIconClassName="icon-xs" onSelect={E}>
      {D}
    </Br.Item>
  );
  let k = row.metrics?.pid == null || u || d || f,
    A =
      row.metrics?.pid == null ? (
        <FormattedMessage {...jp.stopMissingProcessTooltip} />
      ) : undefined;
  let j = row.metrics?.pid == null,
    M = () => onStop(row, rowIndex);
  let N = <FormattedMessage {...jp.stop} />;
  let P = (
    <Br.Item
      LeftIcon={js}
      leftIconClassName="icon-xs"
      disabled={k}
      tooltipText={A}
      tooltipInteractive={j}
      onSelect={M}
    >
      {N}
    </Br.Item>
  );
  let F = !h,
    I = _ != null,
    L = <FormattedMessage {...v} />;
  let R = (
    <Br.Item
      LeftIcon={cn}
      leftIconClassName="icon-xs"
      disabled={F}
      tooltipText={_}
      tooltipInteractive={I}
      onSelect={b}
    >
      {L}
    </Br.Item>
  );
  return (
    <H
      align="end"
      animateExit={false}
      contentClassName="!animate-none"
      contentWidth="xs"
      triggerButton={T}
    >
      {O}
      {P}
      {R}
    </H>
  );
}
function yp(event) {
  event.stopPropagation();
}
function bp(e) {
  let { status } = e,
    r = ur(),
    i = r.formatMessage(xp(status));
  let a = i;
  if (status === "starting") {
    let e = kp.jsx(rr, {
      className: "icon-xs text-token-charts-green",
    });
    let n;
    return (
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center"
        title={a}
        aria-label={a}
        role="img"
      >
        {e}
      </span>
    );
  }
  return kp.jsx(ds, {
    className: "icon-sm shrink-0",
    title: a,
    "aria-label": a,
    role: "img",
  });
}
function xp(e) {
  return e === "starting"
    ? jp.startingStatus
    : e === "stopping"
      ? jp.stoppingStatus
      : e === "stopped"
        ? jp.stoppedStatus
        : e === "not-found"
          ? jp.notFoundStatus
          : jp.runningStatus;
}
function Sp(e, t, n) {
  return t == null
    ? !n || e.metrics != null
      ? "running"
      : "not-found"
    : t.status;
}
function Cp(e, t) {
  if (t.length === 0) return e;
  let n = e.slice();
  for (let e of t) n.some((item) => bu(item.process, e.process)) || n.push(e);
  return n;
}
function wp(e, t, n) {
  if (t.size === 0) return t;
  let r = new Map(
      e
        .filter((item) => item.metrics != null)
        .map((item) => [item.process.id, item]),
    ),
    i = new Map();
  for (let [a, o] of t) lu(o, r.get(a) ?? Tp(e, o), n) || i.set(a, o);
  return i;
}
function Tp(e, t) {
  return (
    e.find((item) => item.metrics != null && bu(item.process, t.row.process)) ??
    null
  );
}
function Ep({ conversationId, hostId, terminal }) {
  return {
    chatTitle: null,
    command: terminal.command,
    conversationId,
    cwd: terminal.cwd,
    hostId,
    id: `${conversationId}:${terminal.turnId ?? "unknown"}:${terminal.id}`,
    itemId: terminal.id,
    osPid: null,
    processId: terminal.processId,
    source: "background-terminal",
    startedAtMs: terminal.startedAtMs,
    stopAction: "kill-child-process",
    turnId: terminal.turnId,
  };
}
var Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp = once(() => {
    Dp = q();
    Ut();
    c();
    Op = toEsModule(G(), 1);
    Jn();
    an();
    d();
    Tr();
    zs();
    ss();
    Xi();
    ic();
    Xl();
    du();
    cu();
    r();
    te();
    n();
    gp();
    Pl();
    kp = getJsxRuntime();
    Ap = 1e4;
    jp = Hr({
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
function Np(e) {
  let { browserUseSummaries, onOpen } = e,
    i;
  {
    let e;
    e = (e) => {
      let t =
          e.displayUrl == null || e.displayUrl === e.title
            ? null
            : e.displayUrl,
        n = t == null ? e.title : `${e.title} ${t}`,
        i = e.url.length === 0 ? e.title : `${e.title}\n${e.url}`;
      return (
        <Fl
          key={e.browserTabId}
          aria-label={n}
          icon={
            <span
              aria-hidden={true}
              className="icon-xs relative flex shrink-0 items-center justify-center overflow-visible"
            >
              <Ln
                alt=""
                className={S("size-full", e.isAgentWorking && "opacity-30")}
                logoUrl={e.faviconUrl}
                fallback={<Sr />}
              />
              {e.isAgentWorking ? (
                <span className="pointer-events-none absolute inset-0 z-10 flex size-full items-center justify-center">
                  <Is className="size-4" />
                </span>
              ) : null}
            </span>
          }
          label={
            e.isAgentWorking ? (
              <span className="loading-shimmer-pure-text w-full max-w-full min-w-0">
                <span className="flex min-w-0 items-baseline gap-2">
                  <span className="max-w-[60%] min-w-0 shrink truncate">
                    {e.title}
                  </span>
                  {t == null ? null : (
                    <span className="max-w-[40%] min-w-0 shrink truncate text-sm">
                      {t}
                    </span>
                  )}
                </span>
              </span>
            ) : (
              <>
                <span className="max-w-[60%] min-w-0 shrink truncate">
                  {e.title}
                </span>
                {t == null ? null : (
                  <span className="max-w-[40%] min-w-0 shrink truncate text-sm text-token-text-secondary">
                    {t}
                  </span>
                )}
              </>
            )
          }
          labelClassName={S(
            "min-w-0 flex-1",
            !e.isAgentWorking && "flex items-baseline gap-2",
          )}
          onClick={() => {
            onOpen(e);
          }}
          title={i}
        />
      );
    };
    i = browserUseSummaries.map(e);
  }
  return <div className="flex flex-col gap-1">{i}</div>;
}
var Pp,
  Fp,
  Ip = once(() => {
    Pp = q();
    Ut();
    Zr();
    Gr();
    dc();
    Pl();
    Fp = getJsxRuntime();
  });
function Lp(e, t) {
  return t?.trim() || zp(e);
}
function Rp(e) {
  return Lp(e.configPath, e.type === "success" ? e.environment.name : null);
}
function zp(e) {
  let t = or(e),
    n = t.split("/").filter(Boolean);
  return n[n.length - 1] ?? t;
}
var Bp = once(() => {
  di();
});
function Vp(e) {
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
    } = e,
    d = ur(),
    f = normalizedResolvedConfigPath == null ? si : undefined,
    p = () => {
      onSelectEnvironment(null);
    };
  let m = (
    <FormattedMessage
      id="codex.environmentSelector.noEnvironment"
      defaultMessage="No environment"
      description="No environment selected message"
    />
  );
  let h = (
    <Br.Item RightIcon={f} onSelect={p}>
      {m}
    </Br.Item>
  );
  let g = defaultEnvironment ? (
    <Br.Item
      LeftIcon={Iu}
      leftIconClassName="icon-xxs text-token-description-foreground"
      RightIcon={
        defaultEnvironmentNormalized != null &&
        defaultEnvironmentNormalized === normalizedResolvedConfigPath
          ? si
          : undefined
      }
      tooltipText={d.formatMessage({
        id: "composer.worktreeEnvironment.default",
        defaultMessage: "Default environment",
        description: "Tooltip for default local environment icon",
      })}
      onSelect={() => {
        onSelectEnvironment(defaultEnvironment.configPath);
      }}
    >
      {Rp(defaultEnvironment)}
    </Br.Item>
  ) : null;
  let _ =
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
          <span className="min-w-0 truncate">{Rp(item)}</span>
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
  let v = (
    <div className="vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-0.5 overflow-y-auto pr-1">
      {h}
      {g}
      {_}
    </div>
  );
  let y = <Zt />;
  let b = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let x = (
    <Br.Item
      LeftIcon={Gt}
      leftIconClassName="icon-sm"
      onSelect={onOpenSettings}
    >
      {b}
    </Br.Item>
  );
  return (
    <div className="flex flex-col gap-0.5 pb-1">
      {v}
      {y}
      {x}
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
function Gp(e) {
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
    } = e,
    _ = qp.useId(),
    v = Jp.jsx(j, {
      children: <F icon={headerIcon} subtitle={description} title={title} />,
    });
  let y = extraFields
    ? Jp.jsx(j, {
        children: Jp.jsx($e, {
          className: "gap-3",
          children: extraFields,
        }),
      })
    : null;
  let b = (
    <label
      className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
      htmlFor={_}
    >
      {commandLabel}
    </label>
  );
  let x = (event) => {
    onCommandChange(event.target.value);
  };
  let S = (
    <textarea
      id={_}
      className="focus-visible:ring-token-focus min-h-44 w-full resize-none rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none placeholder:text-token-input-placeholder-foreground focus-visible:ring-2"
      placeholder={commandPlaceholder}
      value={command}
      onChange={x}
    />
  );
  let C = Jp.jsx(j, {
    children: Jp.jsxs($e, {
      className: "gap-2",
      children: [b, S],
    }),
  });
  let w = Jp.jsx(k, {
    color: "primary",
    disabled: submitDisabled,
    loading: submitLoading,
    type: "submit",
    children: submitLabel,
  });
  let T = Jp.jsx(j, {
    children: (
      <At className="justify-between">
        {leftAction}
        {w}
      </At>
    ),
  });
  let E = Jp.jsxs(ui, {
    className: "gap-3",
    children: [v, y, C, T],
  });
  return (
    <form className="flex flex-col gap-0" onSubmit={onSubmit}>
      {E}
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
function Xp(e) {
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
    } = e,
    d = ur(),
    f = Ci(),
    p = qr("local-environment-config-save"),
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    A;
  {
    let e = (e) => ({
      ariaLabel: d.formatMessage(e.message),
      icon: Qp.jsx(md, {
        icon: e.value,
      }),
      value: e.value,
    });
    let o = ld.map(e),
      j = o.find((item) => item.value === action.icon) ?? o[0],
      M =
        cl(workspaceRoot) ??
        d.formatMessage({
          id: "settings.localEnvironments.environment.defaultName",
          defaultMessage: "local",
          description: "Fallback name for the local environment",
        });
    let N = M,
      P = action.name.trim();
    let F = P,
      I = action.command.trim();
    let L = I;
    v = F.length === 0 || L.length === 0 || p.isPending;
    g = `local-env-action-name-${action.id}`;
    let R;
    R = (event) => {
      if ((event.preventDefault(), v)) return;
      let t = environment.environment,
        o = {
          ...action,
          command: L,
          name: F,
        },
        l = {
          command: L,
          icon: action.icon,
          name: F,
          ...(action.platform
            ? {
                platform: action.platform,
              }
            : {}),
        },
        d = sd({
          actions: [...hd(t.actions ?? []), o],
          cleanupPlatformScripts: cd(t.cleanup),
          cleanupScript: t.cleanup?.script ?? "",
          name: t.name || N,
          setupPlatformScripts: cd(t.setup),
          setupScript: t.setup.script ?? "",
          version: t.version ?? 1,
        });
      p.mutate(
        {
          configPath,
          hostId: hostConfig.id,
          raw: d,
        },
        {
          onSuccess: () => {
            f.invalidateQueries({
              queryKey: Yt("local-environment-config", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            f.invalidateQueries({
              queryKey: Yt("local-environment", {
                configPath,
                hostId: hostConfig.id,
              }),
            });
            workspaceRoot != null &&
              f.invalidateQueries({
                queryKey: Yt("local-environments", {
                  hostId: hostConfig.id,
                  workspaceRoot,
                }),
              });
            onSaved();
            onRunAction(l);
          },
        },
      );
    };
    _ = R;
    h = Gp;
    O = action.command;
    A = (
      <FormattedMessage
        id="threadPage.runAction.setup.commandLabel"
        defaultMessage="Command to run"
        description="Label for run action command input"
      />
    );
    b = d.formatMessage({
      id: "threadPage.runAction.setup.placeholder",
      defaultMessage: "eg:\nnpm install\nnpm run",
      description: "Placeholder text for the run action command input",
    });
    x = (
      <FormattedMessage
        id="settings.localEnvironments.actions.add.description"
        defaultMessage="Create a new command to run from the toolbar."
        description="Description for adding a local environment action"
      />
    );
    E = "flex w-full flex-col gap-2";
    let z;
    z = (
      <FormattedMessage
        id="settings.localEnvironments.actions.item.name"
        defaultMessage="Name"
        description="Label for local environment action name"
      />
    );
    D = (
      <label
        className="text-xs font-medium tracking-wide text-token-text-secondary uppercase"
        htmlFor={g}
      >
        {z}
      </label>
    );
    T = "flex items-center gap-2";
    m = H;
    y = "start";
    S = "icon";
    C = Qp.jsx(k, {
      id: `local-env-action-icon-${action.id}`,
      "aria-label": j.ariaLabel,
      className: "w-12 justify-center text-sm",
      color: "secondary",
      size: "toolbar",
      children: j.icon,
    });
    let ee;
    ee = (e) => (
      <Br.Item
        key={e.value}
        tooltipText={e.ariaLabel}
        onSelect={() => {
          onUpdate({
            icon: e.value,
          });
        }}
      >
        {e.icon}
      </Br.Item>
    );
    w = o.map(ee);
  }
  let j = Qp.jsx(m, {
    align: y,
    contentWidth: S,
    triggerButton: C,
    children: w,
  });
  let M = (event) => {
    onUpdate({
      name: event.target.value,
    });
  };
  let N = (
    <div className="flex-1">
      <input
        id={g}
        className="w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-0"
        value={action.name}
        onChange={M}
      />
    </div>
  );
  let P = (
    <div className={T}>
      {j}
      {N}
    </div>
  );
  let F = (
    <div className={E}>
      {D}
      {P}
    </div>
  );
  let I = action.icon ?? "tool",
    L = Qp.jsx(md, {
      className: "icon-base text-token-foreground",
      icon: I,
    });
  let R = (
    <FormattedMessage
      id="threadPage.runAction.setup.editMore"
      defaultMessage="Environment settings"
      description="Edit more action label in run action setup popover"
    />
  );
  let z = Qp.jsx(k, {
    className: "px-0",
    color: "ghost",
    size: "toolbar",
    type: "button",
    onClick: onOpenSettings,
    children: R,
  });
  let ee = (
    <FormattedMessage
      id="settings.localEnvironments.actions.add.save"
      defaultMessage="Save"
      description="Save button label for adding a local environment action"
    />
  );
  let B = (
    <FormattedMessage
      id="settings.localEnvironments.actions.add"
      defaultMessage="Add action"
      description="Button label to add a local environment action"
    />
  );
  let V = (e) => {
    onUpdate({
      command: e,
    });
  };
  return Qp.jsx(h, {
    command: O,
    commandLabel: A,
    commandPlaceholder: b,
    description: x,
    extraFields: F,
    headerIcon: L,
    leftAction: z,
    submitDisabled: v,
    submitLabel: ee,
    submitLoading: p.isPending,
    title: B,
    onCommandChange: V,
    onSubmit: _,
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
function em(e, t) {
  return t ? (e[t] ?? []) : [];
}
function tm(e, t, n) {
  if (!t) return e;
  let r = n.trim();
  if (!r) return e;
  let i = [r, ...(e[t] ?? []).filter((item) => item !== r)];
  return {
    ...e,
    [t]: i,
  };
}
var nm,
  rm = once(() => {
    yi();
    nm = vn("local-env-recent-actions-by-key", {});
  });
type RecentLocalEnvironmentActionsByKey = Record<string, readonly unknown[]>;

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
function sm(e, t) {
  let r = B(ut),
    i = t.id,
    a = e ? D(e) : null;
  let o = a,
    s = {
      hostId: i,
      workspaceRoot: e,
    };
  let c = Oa(s),
    l = isRecentLocalEnvironmentAction(o, t.id),
    { data } = Rt(e, t, "use_local_conversation_environment"),
    d = c.environments,
    f = c.isLoading,
    p = c.isFetching,
    m = c.error != null,
    h = {
      onSuccess: (e, n) => {
        e.success &&
          data?.root &&
          eo(r, data, t, n.value, "use_local_conversation_environment");
      },
    };
  let g = w("set-config-value", t, h),
    { data: _ } = ku(
      l ? o : null,
      t,
      dr,
      "worktree",
      "use_local_conversation_environment",
    ),
    v = _ === "__none__" ? null : _,
    y = v ? or(v) : null;
  let b = y,
    x = l ? v : c.resolvedConfigPath,
    S = l ? b : (c.normalizedResolvedConfigPath ?? null),
    C = x ?? "",
    T = {
      configPath: C,
      hostId: i,
    };
  let E = x != null,
    O = {
      enabled: E,
    };
  let k = {
    params: T,
    select: lm,
    queryConfig: O,
  };
  let { data: _data = null } = jn("local-environment", k),
    M = (_data?.environment.actions ?? []).length > 0 || d.some(cm);
  let N = M,
    P = c.workspaceKey != null && (!l || data?.root != null),
    F = (e) => {
      if (l) {
        if (!data?.root) return;
        let t = e ?? "__none__";
        g.mutate({
          root: data.root,
          key: dr,
          operationSource: "use_local_conversation_environment",
          value: t,
          scope: "worktree",
        });
        return;
      }
      c.updateSelection(e);
    };
  let I = F,
    L = x ?? null,
    R = f || p;
  return {
    workspaceRoot: e,
    codexWorktree: l,
    environment: _data,
    resolvedEnvironmentConfigPath: L,
    localEnvironments: d,
    localEnvironmentsLoading: R,
    localEnvironmentsError: m,
    defaultEnvironment: c.defaultEnvironment,
    defaultEnvironmentNormalized: c.defaultEnvironmentNormalized,
    availableEnvironments: c.availableEnvironments,
    normalizedResolvedConfigPath: S,
    canChangeEnvironment: P,
    setEnvironmentSelection: I,
    hasSavedActions: N,
  };
}
function cm(e) {
  return e.type === "success"
    ? (e.environment.actions ?? []).length > 0
    : false;
}
function lm(e) {
  return e.environment.type === "success" ? e.environment : null;
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
function fm(e) {
  let {
      conversationId,
      hostConfig,
      onMenuOpenChange,
      workspaceRoot,
      onOpenChange,
      onShowTerminal,
      registerCommands,
    } = e,
    l = B(ut),
    u = ur(),
    d = ee(),
    f = rt(),
    {
      environment,
      resolvedEnvironmentConfigPath,
      localEnvironmentsLoading,
      localEnvironmentsError,
      localEnvironments: _,
      availableEnvironments,
      defaultEnvironment,
      defaultEnvironmentNormalized,
      normalizedResolvedConfigPath,
      canChangeEnvironment,
      setEnvironmentSelection,
    } = sm(workspaceRoot, hostConfig),
    w = !localEnvironmentsLoading && !localEnvironmentsError && _.length === 0,
    { data } = Rt(
      workspaceRoot,
      hostConfig,
      "local_conversation_action_compound_button",
    ),
    { data: _data } = tr(),
    [D, O] = li(nm),
    [A, j] = km.useState(false),
    M = data?.root ?? null,
    N = _data?.platform ?? null,
    P = environment?.environment.actions,
    F = P == null ? null : P.filter((item) => Dm(item, N)).map(pm),
    I = wm({
      configPath: environment?.configPath ?? null,
      relativePath: environment?.cwdRelativeToGitRoot ?? null,
      repoRoot: M,
      workspaceRoot,
    }),
    L = em(D, I),
    R = F == null ? null : L.length > 0 ? Em(F, L) : F,
    z = R?.[0] ?? null,
    V = K(ha, z?.commandId ?? aa[0]),
    te = F ?? jm,
    ne = Y((e) => {
      let { action } = e,
        r = Cm({
          relativePath: environment?.cwdRelativeToGitRoot ?? null,
          repoRoot: M,
          workspaceRoot,
        });
      if (r == null || !conversationId) {
        gr.error("Can not run action. Cwd is not set");
        return;
      }
      O(tm(D, I ?? r, action.name));
      let i = Tm({
        conversationId,
        environmentKey: I ?? r,
        runId: e.runId,
      });
      onShowTerminal(i);
      _e.runAction(i, {
        command: action.command,
        cwd: r,
        title: action.name,
      });
    }),
    re = (e) => {
      j(e);
      onMenuOpenChange?.(e);
    };
  let ie = Y(re),
    ae = () => {
      j(false);
      onMenuOpenChange?.(false);
      sc(l, hostConfig.id);
      let e = new URLSearchParams({
        workspaceRoot,
      });
      resolvedEnvironmentConfigPath != null &&
        e.set("configPath", resolvedEnvironmentConfigPath);
      f(`/settings/local-environments?${e.toString()}`);
    };
  let U = Y(ae),
    oe = () => {
      j(false);
      onMenuOpenChange?.(false);
      sc(l, hostConfig.id);
      f(
        To({
          workspaceRoot,
        }),
        {
          state: {
            hostId: hostConfig.id,
            returnTo: `${d.pathname}${d.search}${d.hash}`,
          },
        },
      );
    };
  let se = Y(oe),
    ce = () => {
      resolvedEnvironmentConfigPath == null ||
        environment == null ||
        (j(false),
        onMenuOpenChange?.(false),
        st(l, hm, {
          configPath: resolvedEnvironmentConfigPath,
          environment,
          hostConfig,
          onOpenSettings: U,
          onRunAction: (e) => {
            ne({
              action: e,
              commandId: null,
              runId: `environmentAction${(environment.environment.actions ?? []).length + 1}`,
            });
          },
          workspaceRoot,
        }));
    };
  let le = ce;
  if (
    conversationId != null &&
    environment != null &&
    resolvedEnvironmentConfigPath != null
  ) {
    let e = u.formatMessage({
      id: "settings.localEnvironments.actions.title",
      defaultMessage: "Actions",
      description: "Title for local environment actions section",
    });
    let r = e,
      a = z?.action ?? null,
      o = a
        ? u.formatMessage(
            {
              id: "threadPage.runAction.summaryRow.primaryActionTitle",
              defaultMessage: "Run: {actionName}",
              description:
                "Tooltip and accessible label for the primary run action row in the summary panel",
            },
            {
              actionName: a.name,
            },
          )
        : null,
      s = () => {
        z != null && (j(false), onMenuOpenChange?.(false), ne(z));
      },
      l = registerCommands
        ? X.jsx(bm, {
            actions: te,
            conversationId,
            onRunAction: ne,
          })
        : null,
      d = <Hi className="icon-xs" />;
    let f = (
      <button aria-label={r} className={Am} title={r} type="button">
        {d}
      </button>
    );
    let m = X.jsx(jr, {
      tooltipContent: r,
      delayOpen: true,
      children: f,
    });
    let w = (
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
              environmentName: Rp(environment),
            }}
          />
        )}
      </Br.Title>
    );
    let T = R?.map((e) =>
        X.jsx(
          _m,
          {
            actionItem: e,
            isPrimaryAction: e === z,
            onRunAction: ne,
          },
          e.action.name,
        ),
      ),
      E = (
        <FormattedMessage
          id="settings.localEnvironments.actions.add"
          defaultMessage="Add action"
          description="Button label to add a local environment action"
        />
      );
    let D = (
      <Br.Item LeftIcon={Ae} leftIconClassName="icon-sm" onSelect={le}>
        {E}
      </Br.Item>
    );
    let O = canChangeEnvironment ? (
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
          <Vp
            availableEnvironments={availableEnvironments}
            defaultEnvironment={defaultEnvironment}
            defaultEnvironmentNormalized={defaultEnvironmentNormalized}
            localEnvironments={_}
            localEnvironmentsError={localEnvironmentsError}
            localEnvironmentsLoading={localEnvironmentsLoading}
            normalizedResolvedConfigPath={normalizedResolvedConfigPath}
            onOpenSettings={U}
            onSelectEnvironment={(e) => {
              setEnvironmentSelection(e);
              j(false);
              onMenuOpenChange?.(false);
            }}
          />
        </Ce>
      </>
    ) : null;
    let k = (
      <H
        align="end"
        contentWidth="workspace"
        open={A}
        side="bottom"
        onOpenChange={ie}
        triggerButton={m}
      >
        {w}
        {T}
        {D}
        {O}
      </H>
    );
    let M =
        z != null && o != null
          ? X.jsx(jr, {
              tooltipContent: o,
              shortcut: z.commandId == null ? null : V,
              delayOpen: true,
              children: (
                <button
                  aria-label={o}
                  className={Am}
                  title={o}
                  type="button"
                  onClick={s}
                >
                  {X.jsx(md, {
                    icon: z.action.icon ?? "tool",
                  })}
                </button>
              ),
            })
          : null,
      N;
    return (
      <div className="ms-auto flex min-w-0 items-center">
        {l}
        {k}
        {M}
      </div>
    );
  }
  let ue = u.formatMessage({
    id: "threadPage.runAction.environment.create",
    defaultMessage: "Create environment",
    description: "CTA to create a local environment from a thread",
  });
  let de = ue,
    fe = u.formatMessage({
      id: "threadPage.runAction.environmentSelector.label",
      defaultMessage: "Choose environment",
      description:
        "Tooltip and aria label for the environment selector button when no environment is selected",
    });
  let W = fe,
    pe = (e) => {
      setEnvironmentSelection(e);
      j(false);
      onOpenChange?.(false);
    };
  let me = (
    <Vp
      localEnvironmentsLoading={localEnvironmentsLoading}
      localEnvironmentsError={localEnvironmentsError}
      localEnvironments={_}
      availableEnvironments={availableEnvironments}
      defaultEnvironment={defaultEnvironment}
      defaultEnvironmentNormalized={defaultEnvironmentNormalized}
      normalizedResolvedConfigPath={normalizedResolvedConfigPath}
      onSelectEnvironment={pe}
      onOpenSettings={U}
    />
  );
  let he = me,
    ge = (e) => {
      j(e);
      onOpenChange?.(e);
    };
  let G = ge,
    ve = X.jsx(qt, {
      electron: true,
      children: w
        ? X.jsx(jr, {
            tooltipContent: de,
            delayOpen: true,
            children: X.jsx(k, {
              "aria-label": de,
              className: "ms-auto",
              color: "ghost",
              disabled: !canChangeEnvironment,
              size: "icon",
              type: "button",
              onClick: se,
              children: <Ae className="icon-sm" />,
            }),
          })
        : X.jsx(mm, {
            canChangeEnvironment,
            open: A,
            title: W,
            onOpenChange: G,
            children: he,
          }),
    });
  let ye = X.jsx(qt, {
    browser: true,
    chromeExtension: true,
    extension: true,
    children: X.jsx(mm, {
      canChangeEnvironment,
      open: A,
      title: W,
      onOpenChange: G,
      children: he,
    }),
  });
  return (
    <>
      {ve}
      {ye}
    </>
  );
}
function pm(e, t) {
  let n = aa[t];
  return {
    action: e,
    commandId: n ?? null,
    runId: n ?? `environmentAction${t + 1}`,
  };
}
function mm(e) {
  let { canChangeEnvironment, children, open, title, onOpenChange } = e,
    s = !canChangeEnvironment,
    c = !canChangeEnvironment,
    l = <Gt className="icon-sm" />;
  let u = X.jsx(k, {
    "aria-label": title,
    className: "ms-auto",
    color: "ghost",
    disabled: c,
    size: "icon",
    children: l,
  });
  let d = X.jsx(jr, {
    tooltipContent: title,
    delayOpen: true,
    children: u,
  });
  return (
    <H
      align="end"
      contentWidth="workspace"
      disabled={s}
      open={open}
      side="bottom"
      triggerButton={d}
      onOpenChange={onOpenChange}
    >
      {children}
    </H>
  );
}
function hm(e) {
  let {
      configPath,
      environment,
      hostConfig,
      onClose,
      onOpenSettings,
      onRunAction,
      workspaceRoot,
    } = e,
    [l, u] = km.useState(gm),
    d = () => {
      onClose();
      onOpenSettings();
    };
  let f = (e) => {
    u((t) => ({
      ...t,
      ...e,
    }));
  };
  let p = (
    <Xp
      action={l}
      configPath={configPath}
      environment={environment}
      hostConfig={hostConfig}
      onOpenSettings={d}
      onRunAction={onRunAction}
      onSaved={onClose}
      onUpdate={f}
      workspaceRoot={workspaceRoot}
    />
  );
  return X.jsx(ai, {
    open: true,
    contentClassName:
      "!w-[379px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-4rem)] !p-0",
    onOpenChange: onClose,
    children: p,
  });
}
function gm() {
  return pd("");
}
function _m(e) {
  let { actionItem, isPrimaryAction, onRunAction } = e,
    { commandId } = actionItem;
  if (commandId == null) {
    let e;
    return X.jsx(ym, {
      actionItem,
      isPrimaryAction,
      shortcut: null,
      onRunAction,
    });
  }
  return X.jsx(vm, {
    actionItem,
    commandId,
    isPrimaryAction,
    onRunAction,
  });
}
function vm(e) {
  let { actionItem, commandId, isPrimaryAction, onRunAction } = e,
    o = K(ha, commandId);
  return X.jsx(ym, {
    actionItem,
    isPrimaryAction,
    shortcut: o,
    onRunAction,
  });
}
function ym(e) {
  let { actionItem, isPrimaryAction, shortcut, onRunAction } = e,
    { action } = actionItem,
    s = () => {
      onRunAction(actionItem);
    };
  let c = action.icon ?? "tool",
    l = (
      <Br.ItemIcon>
        {X.jsx(md, {
          icon: c,
        })}
      </Br.ItemIcon>
    );
  let u = <span className="min-w-0 flex-1 truncate">{action.name}</span>;
  let d = isPrimaryAction
    ? X.jsx(si, {
        className: "icon-xs shrink-0 text-token-description-foreground",
      })
    : null;
  let f = shortcut ? (
    <span className="shrink-0 text-xs text-token-description-foreground">
      {shortcut}
    </span>
  ) : null;
  let p = (
    <span className="flex w-full min-w-0 items-center gap-2">
      {u}
      {d}
      {f}
    </span>
  );
  return (
    <Br.Item key={action.name} onSelect={s}>
      {l}
      {p}
    </Br.Item>
  );
}
function bm(e) {
  let { actions, conversationId, onRunAction } = e,
    a = aa.map((item, index) =>
      X.jsx(
        xm,
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
  return <>{a}</>;
}
function xm(e) {
  let { actionItem, commandId, conversationId, index, onRunAction } = e,
    s = ur(),
    c = actionItem != null && conversationId != null,
    l =
      actionItem == null
        ? ""
        : s.formatMessage(
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
  let u = l,
    d = () => {
      actionItem != null && onRunAction(actionItem);
    };
  let f;
  f = {
    enabled: c,
  };
  vt(commandId, d, f);
  let p = actionItem?.action.name,
    m = actionItem?.action.command,
    h = actionItem?.action.icon,
    g = [p, m, h, commandId];
  let _ = (e) => {
    if (actionItem == null) return null;
    let { action } = actionItem;
    return X.jsx(dl, {
      value: u,
      keywords: ["environment", "action"],
      title: u,
      leftAccessory: X.jsx(md, {
        className: "icon-xs shrink-0",
        icon: action.icon ?? "tool",
      }),
      rightAccessory: <Sm commandId={commandId} />,
      onSelect: () => {
        onRunAction(actionItem);
        e();
      },
    });
  };
  let v;
  return (
    (v = {
      id: commandId,
      groupKey: "workspace",
      enabled: c,
      order: index,
      dependencies: g,
      render: _,
    }),
    $l(v),
    null
  );
}
function Sm(e) {
  let { commandId } = e,
    r = K(ha, commandId);
  return r
    ? X.jsx(ri, {
        keysLabel: r,
      })
    : null;
}
function Cm({ relativePath, repoRoot, workspaceRoot }) {
  return repoRoot && relativePath
    ? M(repoRoot, relativePath)
    : (workspaceRoot ?? repoRoot);
}
function wm({ configPath, relativePath, repoRoot, workspaceRoot }) {
  return (
    Cm({
      relativePath,
      repoRoot,
      workspaceRoot,
    }) ?? configPath
  );
}
function Tm({ conversationId, environmentKey, runId }) {
  return `environment-action:${conversationId}:${Jo(environmentKey)}:${runId}`;
}
function Em(e, t) {
  let n = new Map();
  return (
    t.forEach((item, index) => {
      n.has(item) || n.set(item, index);
    }),
    e
      .map((item, index) => ({
        actionItem: item,
        originalIndex: index,
        recentIndex: n.get(item.action.name) ?? 1 / 0,
      }))
      .sort((e, t) =>
        e.recentIndex === t.recentIndex
          ? e.originalIndex - t.originalIndex
          : e.recentIndex - t.recentIndex,
      )
      .map((item) => item.actionItem)
  );
}
function Dm(e, t) {
  let n = e.platform;
  return !n || (t !== "darwin" && t !== "linux" && t !== "win32")
    ? true
    : n === t;
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
    nu();
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
function Nm(e) {
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
    } = e,
    g = B(Fe),
    _ = K(Gm, sectionKey),
    v = K(Wm, sectionKey),
    y = autoCollapse != null && _ !== "canceled",
    b =
      !(autoCollapse === true && _ === "collapsed") && (v ?? !defaultCollapsed),
    x = W(mt),
    S = (e) => {
      g.set(Wm, sectionKey, e);
    };
  let C = S,
    w = mode === "headerless" || b || mode === "dropdown",
    T = (
      <div className="relative z-0 mt-0.5 overflow-hidden">
        <div className="flex flex-col gap-0.5 px-4">{children}</div>
      </div>
    );
  let E = T,
    D;
  D = () => ({
    collapse: () => C(false),
    expand: () => C(true),
  });
  Lm.useImperativeHandle(ref, D);
  let O, k;
  O = () => {
    if (!y) return;
    if (!autoCollapse) {
      _ === "collapsed" && g.set(Gm, sectionKey, "pending");
      return;
    }
    if (_ !== "pending") return;
    let e = window.setTimeout(() => {
      g.set(Gm, sectionKey, "collapsed");
    }, zm);
    return () => window.clearTimeout(e);
  };
  k = [autoCollapse, _, y, g, sectionKey];
  Lm.useEffect(O, k);
  let A = y
    ? () => {
        g.set(Gm, sectionKey, "canceled");
      }
    : undefined;
  let j =
    mode === "headerless" ? null : (
      <Pm
        after={
          Im.default(after)
            ? after({
                isExpanded: b,
              })
            : after
        }
        sectionOptions={sectionOptions}
        mode={mode}
        isExpanded={b}
        onChange={onChange}
        onToggle={() => {
          mode !== "dropdown" && C(!b);
        }}
        shouldUseReducedMotion={x}
        titleSuffix={titleSuffix}
      >
        {title}
      </Pm>
    );
  let M = x ? (
    w && E
  ) : (
    <Ne initial={false}>
      {w &&
        Rm.jsx(
          p.div,
          {
            initial: Hm,
            animate: Um,
            exit: Hm,
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
      onClick={A}
    >
      {j}
      {M}
    </section>
  );
}
function Pm(e) {
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
    } = e,
    d = sectionOptions != null && sectionOptions.length > 1,
    f = mode === "accordion" ? onToggle : undefined,
    p = <span className="truncate">{children}</span>;
  let m = isExpanded ? null : titleSuffix,
    h =
      (mode === "accordion" || d) &&
      Rm.jsx(ht, {
        "aria-hidden": "true",
        className: S(
          "icon-2xs shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100",
          !shouldUseReducedMotion && "transition-transform",
          isExpanded ? "opacity-0" : "opacity-100",
          isExpanded ? "rotate-0" : "-rotate-90",
        ),
      });
  let g = (
    <button
      aria-expanded={isExpanded}
      className="group/section-toggle inline-flex min-w-0 shrink-0 cursor-interaction items-center gap-1.5 rounded-md py-0.5 pr-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={f}
      type="button"
    >
      {p}
      {m}
      {h}
    </button>
  );
  let _ = g,
    v =
      mode === "dropdown" && d ? (
        <H triggerButton={_}>
          {sectionOptions?.map((e) =>
            Rm.jsx(
              ye,
              {
                onSelect: () => onChange?.(e),
                children: e,
              },
              e,
            ),
          )}
        </H>
      ) : (
        _
      );
  let y =
    after == null ? null : <div className="flex min-w-0 flex-1">{after}</div>;
  return (
    <header className="sticky top-0 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 bg-token-dropdown-background ps-4 pe-2.5 pb-0.5 text-base text-token-text-tertiary">
      {v}
      {y}
    </header>
  );
}
var Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km = once(() => {
    Fm = q();
    Ut();
    bt();
    Im = toEsModule(un(), 1);
    c();
    Lm = toEsModule(G(), 1);
    an();
    Si();
    me();
    Oe();
    a();
    $n();
    Rm = getJsxRuntime();
    zm = 3e4;
    Bm = "thread-summary-panel-section-expanded-";
    Vm = null;
    Hm = {
      height: 0,
      opacity: 0,
      marginTop: 0,
    };
    Um = {
      height: "auto",
      opacity: 1,
      marginTop: 2,
    };
    Wm = Be((e) => `${Bm}${e}`, Vm);
    Gm = bn(Fe, (e) => "pending");
  });
function qm(e) {
  let { onOpenReviewTab, diffStats, isDiffStatsLoading } = e,
    a,
    o;
  a = Ym.jsx(uc, {
    className: "icon-sm shrink-0",
  });
  o = (
    <FormattedMessage
      id="codex.localConversation.gitSummary.branchChangesLabel"
      defaultMessage="Changes"
      description="Label for the branch changes row"
    />
  );
  let s = isDiffStatsLoading ? (
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
    <Fl
      icon={a}
      label={o}
      onClick={onOpenReviewTab}
      trailing={s}
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
    Pl();
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
function Ch(e) {
  let {
    canFixFailingChecks = false,
    fixTooltipContent,
    onFixFailingChecks,
    pullRequestStatus,
  } = e;
  if (pullRequestStatus == null || pullRequestStatus.checks.length === 0)
    return null;
  let s = pullRequestStatus.checks.filter(Th);
  let c = s,
    l,
    u,
    d,
    f;
  {
    let e = (e) => pullRequestStatus.checks.filter((item) => item.status === e);
    let n = Mh.flatMap(e);
    u = vh;
    f = c.length > 0 && onFixFailingChecks != null;
    l = yh;
    d = n.map(wh);
  }
  let p = jh.jsx(l, {
    children: d,
  });
  let m =
    c.length > 0 && onFixFailingChecks != null
      ? jh.jsx(gd, {
          color: "ghostTertiary",
          disabled: !canFixFailingChecks,
          tooltipContent: fixTooltipContent,
          onClick: () => {
            onFixFailingChecks(c);
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
  let h = c.length > 0 && onFixFailingChecks != null,
    g = <Vl checks={pullRequestStatus.checks} />;
  let _ = kh(pullRequestStatus.checks, pullRequestStatus.ciStatus);
  let v = (
    <Fl
      actions={m}
      actionsVisible={h}
      icon={g}
      interactive={true}
      labelClassName="text-token-text-tertiary"
      label={_}
    />
  );
  return jh.jsx(u, {
    triggerAsChild: f,
    content: p,
    children: v,
  });
}
function wh(e, t) {
  return <Eh key={`${e.name}-${e.workflow ?? ""}-${t}`} check={e} />;
}
function Th(e) {
  return e.status === "failing";
}
function Eh(e) {
  let { check } = e,
    r = check.link,
    i = <Dh status={check.status} />;
  let a = r != null,
    o = (
      <span className="text-sm text-token-description-foreground">
        <Oh status={check.status} />
      </span>
    );
  let s =
    r == null
      ? undefined
      : (e) => {
          wi({
            event: e,
            href: r,
            initiator: "pull_request_link",
          });
        };
  return (
    <Fl
      icon={i}
      interactive={a}
      label={check.name}
      trailing={o}
      trailingVisible={true}
      onClick={s}
    />
  );
}
function Dh(e) {
  let { status } = e;
  switch (status) {
    case "failing": {
      let e;
      return jh.jsx(zc, {
        className: "icon-sm shrink-0 text-token-charts-red",
      });
    }
    case "passing": {
      let e;
      return jh.jsx(ve, {
        className: "icon-sm shrink-0 text-token-charts-green",
      });
    }
    case "pending": {
      let e;
      return <Gl className="icon-sm shrink-0 text-token-charts-yellow" />;
    }
    case "skipped":
    case "unknown": {
      let e;
      return <Ad className="icon-sm shrink-0 text-token-text-tertiary" />;
    }
  }
}
function Oh(e) {
  let { status } = e;
  switch (status) {
    case "failing": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.failed"
          defaultMessage="Failed"
          description="Status label for a failed check in the thread summary panel flyout"
        />
      );
    }
    case "passing": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.succeeded"
          defaultMessage="Succeeded"
          description="Status label for a successful check in the thread summary panel flyout"
        />
      );
    }
    case "pending": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.running"
          defaultMessage="Running"
          description="Status label for a pending check in the thread summary panel flyout"
        />
      );
    }
    case "skipped": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.gitSummary.checks.status.skipped"
          defaultMessage="Skipped"
          description="Status label for a skipped check in the thread summary panel flyout"
        />
      );
    }
    case "unknown": {
      let e;
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
function kh(e, t) {
  let n = e.filter((item) => item.status === "failing").length,
    r = e.filter((item) => item.status === "pending").length;
  if (n > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.failingChecks.count"
        defaultMessage={
          "{count, plural, one {# failing check} other {# failing checks}}"
        }
        description="Summary panel row label when pull request checks are failing"
        values={{
          count: n,
        }}
      />
    );
  if (r > 0)
    return (
      <FormattedMessage
        id="codex.localConversation.gitSummary.pendingChecks.count"
        defaultMessage={
          "{count, plural, one {# pending check} other {# pending checks}}"
        }
        description="Summary panel row label when pull request checks are pending"
        values={{
          count: r,
        }}
      />
    );
  switch (t) {
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
    _d();
    ql();
    Kc();
    Ul();
    kd();
    Sh();
    Pl();
    jh = getJsxRuntime();
    Mh = ["failing", "pending", "skipped", "unknown", "passing"];
  });
function Ph(e) {
  let { conversationId, headBranch, pullRequestStatus } = e,
    a = B(fi),
    o = K(pi, conversationId),
    s = K(ki, conversationId);
  if (pullRequestStatus == null || !pullRequestStatus.hasOpenPr) return null;
  let c = pullRequestStatus.boardItem?.baseBranch ?? null,
    l = pullRequestStatus.boardItem?.headBranch ?? headBranch,
    u = pullRequestStatus.number,
    d = pullRequestStatus.url ?? pullRequestStatus.boardItem?.url ?? null,
    f = new Set(s.map(Ih));
  let p = f,
    m;
  {
    let e;
    e = (e) => !p.has(se(e));
    m = pullRequestStatus.commentAttachments.some(e);
  }
  let h = m,
    g = pullRequestStatus.checks.some(Fh);
  let _ = g,
    v = pullRequestStatus.mergeBlocker === "conflicts",
    y = pullRequestStatus.commentAttachments.length > 0,
    b =
      _ || v || h
        ? conversationId == null
          ? "missing-conversation"
          : xc({
                currentBranch: headBranch,
                storedThreadBranch: o,
              }).hasThreadBranchMismatch
            ? "branch-mismatch"
            : null
        : null,
    x = _
      ? ch({
          baseBranch: c,
          conversationId,
          fixDisabledReason: b,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: l,
          prNumber: u,
        })
      : null;
  let S = x,
    C = v
      ? ch({
          baseBranch: c,
          conversationId,
          fixDisabledReason: b,
          hasOpenPr: pullRequestStatus.hasOpenPr,
          headBranch: l,
          prNumber: d == null ? null : u,
        })
      : null;
  let w = C,
    T = h
      ? Qm({
          baseBranch: c,
          conversationId,
          headBranch: l,
          prNumber: u,
        })
      : null;
  let E = T,
    D = () => {
      hh(
        a,
        c == null || l == null || u == null || d == null
          ? null
          : {
              baseBranch: c,
              headBranch: l,
              number: u,
              repo: pullRequestStatus.repo,
              url: d,
            },
      );
    };
  let O = D,
    k = () => {
      eh(a, {
        baseBranch: c,
        commentAttachments: pullRequestStatus.commentAttachments,
        conversationId,
        focusComposer: true,
        headBranch: l,
        number: u,
      });
    };
  let A = k,
    j = S == null,
    M =
      S == null
        ? undefined
        : Rh.jsx(ih, {
            reason: S,
          });
  let N = (e) => {
    ph(a, {
      baseBranch: c,
      checks: e,
      headBranch: l,
      number: u,
    });
  };
  let P = (
    <Ch
      canFixFailingChecks={j}
      fixTooltipContent={M}
      onFixFailingChecks={N}
      pullRequestStatus={pullRequestStatus}
    />
  );
  let F = v ? (
    <Fl
      actions={Rh.jsx(gd, {
        color: "ghostTertiary",
        disabled: w != null,
        tooltipContent:
          w == null
            ? undefined
            : Rh.jsx(ih, {
                reason: w,
              }),
        onClick: O,
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
  let I = y
    ? Rh.jsx(vh, {
        triggerAsChild: true,
        content: Rh.jsx(yh, {
          children: (
            <div className="flex flex-col gap-2 py-1">
              {pullRequestStatus.commentAttachments.map((item, index) => {
                let n =
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
                    authorAvatarUrl={n?.authorAvatarUrl}
                    authorLogin={n?.authorLogin}
                    bodyPreview={true}
                    comment={item}
                    createdAt={n?.createdAt}
                    onOpenInReview={() => {
                      Zs(a, {
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
          <Fl
            actions={
              h
                ? Rh.jsx(gd, {
                    color: "ghostTertiary",
                    disabled: E != null,
                    tooltipContent:
                      E == null
                        ? undefined
                        : Rh.jsx(rh, {
                            reason: E,
                          }),
                    onClick: A,
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
            actionsVisible={h}
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
      {P}
      {F}
      {I}
    </>
  );
}
function Fh(e) {
  return e.status === "failing";
}
function Ih(e) {
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
    kd();
    _h();
    ls();
    _();
    lc();
    Sh();
    Pl();
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
function ng(e) {
  let { data, error, fixDisabledReason, item, loading } = e,
    s = ur(),
    c = B(fi),
    l = W(qo),
    u,
    d,
    f;
  {
    d = data?.checks.filter(rg);
    let e;
    e = new Set(l.map(dh));
    u = e;
    f = d != null && d.length > 0 && d.every((_item) => u.has(dh(_item)));
  }
  let p = f,
    m =
      fixDisabledReason == null
        ? undefined
        : ag.jsx(ih, {
            reason: fixDisabledReason,
          });
  let h = m,
    g =
      d != null && d.length > 0
        ? ag.jsx(gd, {
            color: "secondary",
            ariaLabel: p
              ? s.formatMessage({
                  id: "pullRequestSidePanel.checks.removeAllAccessible",
                  defaultMessage: "Remove all",
                  description:
                    "Accessible label for removing all failing pull request checks from the chat",
                })
              : s.formatMessage({
                  id: "pullRequestSidePanel.checks.fixAllAccessible",
                  defaultMessage: "Fix all",
                  description:
                    "Accessible label for fixing all failing pull request checks",
                }),
            disabled: !p && fixDisabledReason != null,
            inset: true,
            tooltipContent: p ? undefined : h,
            onClick: () => {
              if (p) {
                fh(c, {
                  attached: false,
                  checks: d,
                });
                return;
              }
              ph(c, {
                baseBranch: item.baseBranch,
                checks: d,
                headBranch: item.headBranch,
                number: item.number,
              });
            },
            children: p ? (
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
          })
        : null;
  let _ = (
    <FormattedMessage
      id="pullRequestSidePanel.checks.title"
      defaultMessage="Checks"
      description="Checks section title in the pull request side panel"
    />
  );
  let v = <Kh action={g}>{_}</Kh>;
  let y = (
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
          <Dd
            canFix={fixDisabledReason == null}
            checks={data.checks}
            density="comfortable"
            fixTooltipContent={h}
            insetFixButtons={true}
            labelTone="primary"
            isCheckAttached={(e) => u.has(dh(e))}
            onFixCheck={(e) => {
              ph(c, {
                baseBranch: item.baseBranch,
                checks: [e],
                headBranch: item.headBranch,
                number: item.number,
              });
            }}
            onRemoveCheck={(e) => {
              fh(c, {
                attached: false,
                checks: [e],
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
      {v}
      {y}
    </details>
  );
}
function rg(e) {
  return e.status === "failing";
}
var ig,
  ag,
  og = once(() => {
    ig = q();
    c();
    Jn();
    an();
    cs();
    sh();
    kd();
    _h();
    Cd();
    _();
    Gh();
    Zh();
    tg();
    ag = getJsxRuntime();
  });
function sg(e) {
  return e.filter((item) => item.type !== "event");
}
function cg(e) {
  return ug
    .default([
      ...e.requested,
      ...e.requestedTeams,
      ...e.approved,
      ...e.changesRequested,
      ...e.commented,
    ])
    .map((item) => ({
      kind: e.requestedTeams.includes(item) ? "team" : "user",
      label: item,
      status: lg(e, item),
    }));
}
function lg(e, t) {
  return e.changesRequested.includes(t)
    ? "changes_requested"
    : e.approved.includes(t)
      ? "approved"
      : "waiting";
}
var ug,
  dg = once(() => {
    ug = toEsModule(be(), 1);
  });
function fg(e) {
  let { data, error, fixDisabledReason, item, loading } = e,
    s = ur(),
    c = B(fi),
    l = c.value.routeConversationId,
    u = K(ki, l),
    d;
  {
    let e = data == null ? null : sg(data.activityItems),
      f = data?.commentAttachments,
      p = new Set(u.map(se));
    let m = p,
      h = f != null && f.length > 0 && f.every((_item) => m.has(se(_item)));
    let g = h,
      _ =
        fixDisabledReason == null
          ? undefined
          : hg.jsx(ih, {
              reason: fixDisabledReason,
            });
    let v = _,
      y =
        f != null && f.length > 0
          ? hg.jsx(gd, {
              color: "secondary",
              ariaLabel: g
                ? s.formatMessage({
                    id: "pullRequestSidePanel.comments.removeAllAccessible",
                    defaultMessage: "Remove all",
                    description:
                      "Accessible label for removing all pull request comments from the chat",
                  })
                : s.formatMessage({
                    id: "pullRequestSidePanel.comments.fixAllAccessible",
                    defaultMessage: "Fix all",
                    description:
                      "Accessible label for fixing all pull request comments",
                  }),
              disabled: !g && fixDisabledReason != null,
              inset: true,
              tooltipContent: g ? undefined : v,
              onClick: () => {
                if (g) {
                  $m(c, {
                    attached: false,
                    commentAttachments: f,
                    conversationId: l,
                  });
                  return;
                }
                eh(c, {
                  baseBranch: item.baseBranch,
                  commentAttachments: f,
                  conversationId: l,
                  focusComposer: true,
                  headBranch: item.headBranch,
                  number: item.number,
                });
              },
              children: g ? (
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
            })
          : null;
    let b = (
      <FormattedMessage
        id="pullRequestSidePanel.comments.title"
        defaultMessage="Comments"
        description="Comments section title in the pull request side panel"
      />
    );
    let x;
    x = <Kh action={y}>{b}</Kh>;
    d = (
      <details open={true} className="group flex flex-col pb-8">
        {x}
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
          ) : e != null && e.length > 0 ? (
            <div className="flex flex-col gap-1">
              {e.map((_item) => {
                let t = pg(_item, f),
                  n = t != null && m.has(se(t));
                return (
                  <Qo
                    key={_item.id}
                    authorAvatarUrl={_item.authorAvatarUrl}
                    authorLogin={_item.authorLogin}
                    body={_item.body}
                    createdAt={_item.createdAt}
                    defaultCollapsed={true}
                    metadataAccessory={
                      t == null
                        ? null
                        : hg.jsx(gd, {
                            disabled: !n && fixDisabledReason != null,
                            inset: true,
                            tooltipContent: n ? undefined : v,
                            onClick: () => {
                              if (!n) {
                                eh(c, {
                                  baseBranch: item.baseBranch,
                                  commentAttachments: [t],
                                  conversationId: l,
                                  focusComposer: true,
                                  headBranch: item.headBranch,
                                  number: item.number,
                                });
                                return;
                              }
                              $m(c, {
                                attached: false,
                                commentAttachments: [t],
                                conversationId: l,
                              });
                            },
                            children: n ? (
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
                          })
                    }
                    metadataTooltipContent={_item.path ?? t?.position.path}
                    replies={_item.replies}
                    surface="timeline"
                    url={_item.url}
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
  return d;
}
function pg(e, t) {
  return (
    t?.find(
      (t) =>
        (e.reviewThreadId != null && t.reviewThreadId === e.reviewThreadId) ||
        (e.url != null && t.url === e.url),
    ) ?? null
  );
}
var mg,
  hg,
  gg = once(() => {
    mg = q();
    c();
    Jn();
    da();
    an();
    en();
    nh();
    sh();
    kd();
    ls();
    _();
    Gh();
    Zh();
    tg();
    dg();
    hg = getJsxRuntime();
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
function bg(e) {
  let { error, files, hasError, loading, repository } = e;
  if (hasError) {
    let e;
    return <Hh description={error} />;
  }
  if (loading || files == null) {
    let e;
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
    let e;
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
  let s;
  {
    let e;
    e = (e) => ({
      icon: (
        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
          {Sg.jsx(vg, {
            className: "icon-3xs text-token-text-tertiary",
          })}
        </span>
      ),
      id: e,
      label: e,
      trailing:
        repository == null ? null : (
          <span className="max-w-52 truncate text-sm text-token-text-tertiary">
            {repository}
          </span>
        ),
    });
    s = files.map(e);
  }
  return <Ed density="comfortable" items={s} labelTone="primary" />;
}
var xg,
  Sg,
  Cg = once(() => {
    xg = q();
    Jn();
    an();
    yg();
    xd();
    Gh();
    tg();
    Sg = getJsxRuntime();
  });
function wg(e) {
  let { error, files, fixDisabledReason, hasError, item, loading, repo } = e,
    l = B(fi),
    u = W(ko)?.url === item.url,
    d =
      fixDisabledReason == null
        ? undefined
        : Eg.jsx(ih, {
            reason: fixDisabledReason,
          });
  let f = d,
    p = !u && fixDisabledReason != null,
    m = u ? undefined : f,
    h = () => {
      if (u) {
        gh(l, null);
        return;
      }
      hh(l, {
        baseBranch: item.baseBranch,
        headBranch: item.headBranch,
        number: item.number,
        repo,
        url: item.url,
      });
    };
  let g = u ? (
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
  let _ = Eg.jsx(gd, {
    color: "secondary",
    disabled: p,
    inset: true,
    tooltipContent: m,
    onClick: h,
    children: g,
  });
  let v = (
    <FormattedMessage
      id="pullRequestSidePanel.conflicts.title"
      defaultMessage="Merge conflicts"
      description="Merge conflicts section title in the pull request side panel"
    />
  );
  let y = <Kh action={_}>{v}</Kh>;
  let b = (
    <div className="rounded-xl bg-token-main-surface-primary px-4 py-1 shadow-sm">
      {Eg.jsx(bg, {
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
      {y}
      {b}
    </details>
  );
}
var Tg,
  Eg,
  Dg = once(() => {
    Tg = q();
    c();
    Jn();
    cs();
    sh();
    kd();
    _h();
    _();
    Cg();
    Zh();
    Eg = getJsxRuntime();
  });
function Og(e) {
  let { body, error, loading } = e,
    a = (
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
      {a}
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
var kg,
  Ag,
  jg = once(() => {
    kg = q();
    Jn();
    Fo();
    us();
    Gh();
    Zh();
    tg();
    Ag = getJsxRuntime();
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
function Lg({ pendingReviewerLogins, searchResults }) {
  let n = new Set(pendingReviewerLogins.map((item) => item.toLowerCase()));
  return searchResults.filter(({ login }) => !n.has(login.toLowerCase()));
}
function Rg({
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
function zg(e, t) {
  let n = e.find(({ login }) => login.toLowerCase() === t.login.toLowerCase());
  return n == null ? [...e, t] : e.filter((item) => item !== n);
}
var Bg,
  Vg = once(() => {
    Bg = toEsModule(Sn(), 1);
  });
function Hg(e) {
  let { hostId, item, pendingReviewerLogins, repo } = e,
    o = B(ut),
    s = ur(),
    [c, l] = qg.useState(false),
    [u, d] = qg.useState(""),
    f = [];
  let [p, m] = qg.useState(f),
    h = u.trim();
  let g = h,
    _ = Lr(g, 250),
    v = {
      cwd: item.cwd,
      hostId,
      query: _,
      repo,
    };
  let { data, isError, refetch } = K(Fg, v),
    S = {
      cwd: item.cwd,
      headBranch: item.headBranch,
      hostId,
      operationSource: "pull_request_board",
    };
  let C = Sd(S),
    w = Rg({
      availableReviewers:
        data == null
          ? undefined
          : Lg({
              pendingReviewerLogins,
              searchResults: data,
            }),
      isCurrentQuery: _ === g,
      query: g,
      searchHasError: isError,
      selectedReviewers: p,
    })?.map(Gg);
  let T = w,
    E = new Set(p.map(Wg));
  let D = E,
    O = () => {
      d("");
      m([]);
      C.reset();
    };
  let A = O,
    j = () => {
      p.length !== 0 &&
        (C.reset(),
        Od(o, {
          action: "request_approvals",
          item,
          surface: "thread_side_panel",
        }),
        C.mutate(
          {
            action: "request-reviewers",
            cwd: item.cwd,
            number: item.number,
            repo,
            reviewers: p.map(Ug),
          },
          {
            onSuccess: (e) => {
              e.status === "success" &&
                (o.get(ti).success(
                  s.formatMessage(
                    {
                      id: "pullRequestSidePanel.approvals.request.successReviewers",
                      defaultMessage:
                        "{count, plural, one {Requested approval from one reviewer} other {Requested approval from # reviewers}}",
                      description:
                        "Toast shown after requesting a pull request approval",
                    },
                    {
                      count: p.length,
                    },
                  ),
                ),
                l(false),
                A());
            },
          },
        ));
    };
  let M = j,
    N = (e) => {
      l(e);
      e || A();
    };
  let P = s.formatMessage({
    id: "pullRequestSidePanel.approvals.open",
    defaultMessage: "Request reviewers",
    description:
      "Accessible label for opening the pull request reviewer picker",
  });
  let F = <Ae aria-hidden={true} className="icon-2xs" />;
  let I = (
    <Kn asChild={true}>
      {Jg.jsx(k, {
        "aria-label": P,
        color: "secondary",
        size: "iconMd",
        children: F,
      })}
    </Kn>
  );
  let L = Jg.jsx(_r, {
    className: "sr-only",
    children: (
      <FormattedMessage
        id="pullRequestSidePanel.approvals.dialog.title"
        defaultMessage="Request approvals"
        description="Title for the dialog used to request pull request approvals"
      />
    ),
  });
  let R = s.formatMessage({
    id: "pullRequestSidePanel.approvals.search.ariaLabel",
    defaultMessage: "Search GitHub users",
    description: "Accessible label for searching pull request reviewers",
  });
  let z = C.isPending,
    ee =
      g.length === 0 ? (
        <FormattedMessage
          id="pullRequestSidePanel.approvals.search.prompt"
          defaultMessage="Search by name or GitHub username"
          description="Prompt shown before searching for a pull request reviewer"
        />
      ) : isError && _ === g ? (
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
  let V = s.formatMessage({
    id: "pullRequestSidePanel.approvals.search.loading",
    defaultMessage: "Searching…",
    description: "Loading message while searching pull request reviewers",
  });
  let te = s.formatMessage({
    id: "pullRequestSidePanel.approvals.search.placeholder",
    defaultMessage: "Request review from…",
    description: "Placeholder for searching pull request reviewers",
  });
  let ne = (
    <Nn
      aria-hidden={true}
      className="icon-sm shrink-0 text-token-text-tertiary"
    />
  );
  let re = () => {
    l(false);
    A();
  };
  let ie, H;
  ie = (e) => {
    d(e);
  };
  H = (e) => {
    m((t) => zg(t, e));
  };
  let ae = (
    <Pu
      ariaLabel={R}
      disabled={z}
      emptyMessage={ee}
      loadingLabel={V}
      options={T}
      loadingSize="compact"
      placeholder={te}
      query={u}
      selectedOptionIds={D}
      variant="menu"
      leadingContent={ne}
      onEscape={re}
      onQueryChange={ie}
      onSelectOption={H}
    />
  );
  let U =
    C.data?.status === "error" || C.isError ? (
      <div className="px-2 py-1.5 text-sm" aria-live="polite">
        <span className="text-token-error-foreground">
          {C.data?.status === "error" ? C.data.error : C.error?.message}
        </span>
      </div>
    ) : null;
  let oe =
    p.length > 0 || C.isPending ? (
      <div className="grid pt-1">
        {C.isPending ? (
          <span
            aria-label={s.formatMessage({
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
            onClick: M,
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
  let se = (
    <Pr align="end">
      {L}
      {ae}
      {U}
      {oe}
    </Pr>
  );
  return (
    <On open={c} onOpenChange={N}>
      {I}
      {se}
    </On>
  );
}
function Ug(e) {
  let { login } = e;
  return login;
}
function Wg(e) {
  let { login } = e;
  return login.toLowerCase();
}
function Gg(e) {
  return {
    ...e,
    id: e.login.toLowerCase(),
    imageUrl: e.avatarUrl,
    label: e.login,
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
    Td();
    vd();
    r();
    Vn();
    Ig();
    Vg();
    Jg = getJsxRuntime();
  });
function Xg(e) {
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
    } = e,
    f = Z.jsx(sr, {
      className: "icon-sm shrink-0 text-token-text-tertiary",
    });
  let p = <span className="px-2 text-token-text-tertiary">{"→"}</span>;
  let m = (
    <span className="min-w-0 truncate">
      {item.headBranch}
      {p}
      {item.baseBranch}
    </span>
  );
  let h = (
    <Ml
      className="ms-auto shrink-0 text-sm"
      linesAdded={item.additions}
      linesRemoved={item.deletions}
    />
  );
  let g = (
    <Fl
      density="comfortable"
      icon={f}
      label={
        <>
          {m}
          {h}
        </>
      }
      labelClassName="flex min-w-0 flex-1 items-center text-token-text-tertiary"
    />
  );
  let _ = (
    <Zg data={checks} hasError={checksHaveError} loading={checksAreLoading} />
  );
  let v =
      mergeBlocker == null
        ? "ready"
        : mergeBlocker === "conflicts"
          ? "failing"
          : "in_progress",
    y = <Ws className="icon-sm shrink-0" state={v} />;
  let b = Z.jsx($g, {
    mergeBlocker,
  });
  let x = <Fl density="comfortable" icon={y} label={b} />;
  let S = comments?.reviewers ?? null,
    C = Z.jsx(e_, {
      hostId,
      item,
      repo,
      reviewers: S,
    });
  let w = (
    <Qg
      data={comments}
      hasError={commentsHaveError}
      loading={commentsAreLoading}
    />
  );
  return (
    <section className="flex flex-col border-b border-token-border pb-3">
      {g}
      {_}
      {x}
      {C}
      {w}
    </section>
  );
}
function Zg(e) {
  let { data, hasError, loading } = e;
  if (hasError) {
    let e;
    return (
      <Fl
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
    let e;
    return (
      <Fl
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
  let a = Kl(data);
  let o = Hl(data.ciStatus);
  return <Fl density="comfortable" icon={a} label={o} />;
}
function Qg(e) {
  let { data, hasError, loading } = e;
  if (hasError) {
    let e;
    return (
      <Fl
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
    let e;
    return (
      <Fl
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
  let a = <Tu className="icon-sm shrink-0 text-token-text-tertiary" />;
  let o = sg(data.activityItems);
  return (
    <Fl
      density="comfortable"
      icon={a}
      label={
        <FormattedMessage
          id="pullRequestSidePanel.overview.comments"
          defaultMessage={
            "{count, plural, =0 {No comments} one {# comment} other {# comments}}"
          }
          description="Pull request comment count in the side panel overview"
          values={{
            count: o.length,
          }}
        />
      }
    />
  );
}
function $g(e) {
  let { mergeBlocker } = e;
  switch (mergeBlocker) {
    case "conflicts": {
      let e;
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts"
          defaultMessage="Merge conflicts need to be resolved"
          description="Merge conflict status in the pull request overview"
        />
      );
    }
    case "unknown": {
      let e;
      return (
        <FormattedMessage
          id="pullRequestSidePanel.overview.conflicts.unknown"
          defaultMessage="Checking for merge conflicts"
          description="Unknown merge conflict status in the pull request overview"
        />
      );
    }
    case null: {
      let e;
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
function e_(e) {
  let { hostId, item, repo, reviewers } = e,
    o,
    s,
    c,
    l,
    u,
    d;
  {
    let e = reviewers == null ? [] : cg(reviewers),
      f = item.isAuthor && item.state !== "merged";
    o = Fl;
    u = "comfortable";
    d = <Ng className="icon-sm shrink-0 text-token-text-tertiary" />;
    s = "flex min-w-0 flex-1 items-center gap-2";
    c = (
      <span className="shrink-0">
        <FormattedMessage
          id="pullRequestSidePanel.overview.reviewers"
          defaultMessage="Reviewers"
          description="Reviewer label in the pull request overview"
        />
      </span>
    );
    l =
      reviewers != null && (e.length > 0 || f) ? (
        <span className="hide-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto overflow-y-hidden py-0.5">
          {e.map(t_)}
          {f ? (
            <span className="shrink-0">
              <Hg
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
  let f = (
    <span className={s}>
      {c}
      {l}
    </span>
  );
  return Z.jsx(o, {
    density: u,
    icon: d,
    label: f,
    labelClassName: "flex min-w-0 flex-1 items-center text-token-text-tertiary",
  });
}
function t_(e) {
  return Z.jsx(
    jr,
    {
      tooltipContent: e.label,
      children: (
        <span className="relative block size-5 shrink-0 rounded-full border border-token-bg-primary bg-token-bg-secondary">
          {e.kind === "team" ? (
            <span
              aria-label={e.label}
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
              alt={e.label}
              className="size-full rounded-full object-cover"
              src={is(e.label, 40) ?? undefined}
            />
          )}
          <span
            className={S(
              "absolute end-[-2px] bottom-[-2px] size-2 rounded-full border border-token-bg-primary",
              e.status === "approved" && "bg-token-charts-green",
              e.status === "waiting" && "bg-token-charts-yellow",
              e.status === "changes_requested" && "bg-token-charts-red",
            )}
          >
            <span className="sr-only">
              {e.status === "approved" ? (
                <FormattedMessage
                  id="pullRequestSidePanel.overview.reviewer.approved"
                  defaultMessage="Approved"
                  description="Accessible status for an approved pull request reviewer"
                />
              ) : e.status === "changes_requested" ? (
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
    `${e.kind}:${e.label}`,
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
    Pl();
    Yg();
    dg();
    Z = getJsxRuntime();
  });
function i_(e) {
  let { bodyError, bodyIsLoading, item, pullRequestBody, request } = e,
    s = B(fi),
    { data } = W(Mi),
    l = xc({
      currentBranch: data,
      storedThreadBranch: item.headBranch,
    }).hasThreadBranchMismatch
      ? "branch-mismatch"
      : null,
    u = pullRequestBody?.hasOpenPr ?? null,
    d = ch({
      baseBranch: item.baseBranch,
      conversationId: s.value.routeConversationId,
      fixDisabledReason: l,
      hasOpenPr: u,
      headBranch: item.headBranch,
      prNumber: item.number,
    });
  let f = d,
    p = {
      intervalMs: ln.ONE_MINUTE,
      staleTime: ln.ONE_MINUTE,
    };
  let m = {
    source: "pull_request_board",
    params: request,
    queryConfig: p,
  };
  let { data: _data, error, isError: _, isLoading } = jn("gh-pr-checks", m),
    y = {
      intervalMs: ln.ONE_MINUTE,
      staleTime: ln.ONE_MINUTE,
    };
  let b = {
    source: "pull_request_board",
    params: request,
    queryConfig: y,
  };
  let {
      data: __data,
      error: _error,
      isError,
      isLoading: _isLoading,
    } = jn("gh-pr-comments", b),
    T =
      pullRequestBody == null
        ? item.mergeBlocker
        : pullRequestBody.mergeBlocker,
    E = pullRequestBody?.repo ?? request.repo ?? null,
    D = {
      cwd: request.cwd,
      hostId: request.hostId,
      number: item.number,
      repo: E,
    };
  let O = T === "conflicts",
    k = {
      enabled: O,
      staleTime: ln.ONE_MINUTE,
    };
  let A = {
    source: "pull_request_board",
    params: D,
    queryConfig: k,
  };
  let {
      data: ___data,
      error: __error,
      isError: _isError,
      isLoading: __isLoading,
    } = jn("gh-pr-diff", A),
    F = _data?.status === "success" ? _data : null,
    I = __data?.status === "success" ? __data : null,
    L =
      ___data?.status === "success"
        ? yl(___data.unifiedDiff, {
            maxFiles: 20,
          }).map(a_)
        : null;
  let R = L,
    z = (
      <Xg
        hostId={request.hostId}
        item={item}
        checks={F}
        checksHaveError={_}
        checksAreLoading={isLoading}
        comments={I}
        commentsHaveError={isError}
        commentsAreLoading={_isLoading}
        mergeBlocker={T}
        repo={E}
      />
    );
  let ee = pullRequestBody?.body ?? null,
    V = <Og body={ee} error={bodyError} loading={bodyIsLoading} />;
  let te = error?.message,
    ne = s_.jsx(ng, {
      data: F,
      error: te,
      fixDisabledReason: f,
      item,
      loading: isLoading,
    });
  let re =
    T === "conflicts"
      ? s_.jsx(wg, {
          error: ___data?.status === "error" ? ___data.error : __error?.message,
          files: R,
          fixDisabledReason: f,
          hasError: _isError || ___data?.status === "error",
          item,
          loading: __isLoading,
          repo: E,
        })
      : null;
  let ie = _error?.message,
    H = s_.jsx(fg, {
      data: I,
      error: ie,
      fixDisabledReason: f,
      item,
      loading: _isLoading,
    });
  return (
    <>
      {z}
      {V}
      {ne}
      {re}
      {H}
    </>
  );
}
function a_(e) {
  return e.newPath === "/dev/null" ? e.oldPath : e.newPath;
}
var o_,
  s_,
  c_ = once(() => {
    o_ = q();
    c();
    en();
    bl();
    Yc();
    lh();
    po();
    _();
    Er();
    n();
    og();
    gg();
    Dg();
    jg();
    r_();
    s_ = getJsxRuntime();
  });
function l_(e) {
  let { hostId, item, pullRequestBody, request } = e,
    o = ur(),
    s =
      pullRequestBody == null
        ? item.state === "draft" || item.state === "merged"
          ? item.state
          : "open"
        : pullRequestBody.hasOpenPr === false
          ? "merged"
          : pullRequestBody.isDraft
            ? "draft"
            : "open",
    c = (
      <div className="truncate text-base leading-5 font-medium text-token-foreground">
        {item.title}
      </div>
    );
  let l = (
    <div className="text-sm leading-5 text-token-text-tertiary">
      {s === "draft" ? (
        <FormattedMessage
          id="pullRequestSidePanel.state.draft"
          defaultMessage="Draft"
          description="Draft pull request state shown in the side panel header"
        />
      ) : s === "merged" ? (
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
  let u = (
    <div className="flex min-w-0 flex-col">
      {c}
      {l}
    </div>
  );
  let d = o.formatMessage({
    id: "pullRequestSidePanel.openOnGitHub",
    defaultMessage: "Open pull request on GitHub",
    description:
      "Accessible label for opening a pull request from the side panel",
  });
  let f, p;
  f = (e) => {
    wi({
      event: e,
      href: item.url,
      initiator: "pull_request_link",
    });
  };
  p = <In className="icon-sm" href={item.url} />;
  let m = (
    <a
      aria-label={d}
      className="cursor-interaction rounded-lg p-1.5 text-token-foreground hover:bg-token-list-hover-background"
      href={item.url}
      rel="noreferrer"
      target="_blank"
      onClick={f}
    >
      {p}
    </a>
  );
  let h = d_.jsx(yd, {
    hostId,
    item,
    pullRequestBody,
    request,
    surface: "thread_side_panel",
    variant: "side-panel",
  });
  let g = (
    <div className="flex shrink-0 items-center gap-2">
      {m}
      {h}
    </div>
  );
  return (
    <header className="flex h-[50px] items-start justify-between gap-4">
      {u}
      {g}
    </header>
  );
}
var u_,
  d_,
  f_,
  p_ = once(() => {
    u_ = q();
    Jn();
    ke();
    Xr();
    Er();
    n();
    wd();
    c_();
    d_ = getJsxRuntime();
    f_ = function (e) {
      let { hostId, item, repo } = e,
        a = {
          cwd: item.cwd,
          headBranch: item.headBranch,
          hostId,
          number: item.number,
          repo,
        };
      let o = a,
        s = {
          intervalMs: ln.ONE_MINUTE,
          staleTime: ln.ONE_MINUTE,
        };
      let c = {
        source: "pull_request_board",
        params: o,
        queryConfig: s,
      };
      let { data, error, isLoading } = jn("gh-pr-body", c),
        f = data?.status === "success" ? data : null,
        p = d_.jsx(l_, {
          hostId,
          item,
          pullRequestBody: f,
          request: o,
        });
      let m = error?.message,
        h = d_.jsx(i_, {
          bodyError: m,
          bodyIsLoading: isLoading,
          item,
          pullRequestBody: f,
          request: o,
        });
      return (
        <div className="h-full min-h-0 overflow-y-auto bg-token-main-surface-primary">
          <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-5 pb-4">
            {p}
            {h}
          </main>
        </div>
      );
    };
  });
function m_(e, { hostId, item, repo }, i = true, a = "right") {
  let o = `pull-request:${item.url}`,
    s = no(e, o) ?? a;
  return (
    va(s).openTab(e, f_, {
      activate: i,
      defaultState: () => ({}),
      icon: h_.createElement(Ws, {
        className: "icon-xs shrink-0",
        state: item.state,
      }),
      id: o,
      props: {
        hostId,
        item,
        repo,
      },
      title: e.get(Wa).formatMessage(
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
    i && wa(e, s),
    true
  );
}
var h_,
  g_ = once(() => {
    h_ = toEsModule(G(), 1);
    Za();
    Js();
    p_();
    ho();
  });
function __(e) {
  let { conversationId, hostId, pullRequestStatus, visualState } = e,
    o = B(Fe),
    s = ur(),
    c = W(z),
    l = K(An, "1590905736"),
    { boardItem } = pullRequestStatus,
    d = l && boardItem != null,
    f = pullRequestStatus.url ?? boardItem?.url ?? null,
    p = (e) => {
      f != null &&
        (boardItem != null &&
          Od(o, {
            action: "open_in_browser",
            item: boardItem,
            surface: "thread_side_panel",
          }),
        wi({
          event: e,
          href: f,
          initiator: "pull_request_link",
        }));
    };
  let m = p,
    h = (e) => {
      if (f != null) {
        if (d) {
          bd(o, {
            item: boardItem,
            surface: "thread_side_panel",
          });
          m_(o, {
            hostId,
            item: boardItem,
            repo: pullRequestStatus.repo,
          });
          return;
        }
        m(e);
      }
    };
  let g = h,
    _ = y_(pullRequestStatus.number, pullRequestStatus.title, s);
  let v = _,
    y = (
      <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        <Ws className="icon-xs" state={visualState} tone="currentColor" />
      </span>
    );
  let b =
    f == null ? undefined : d ? (
      <a
        aria-label={s.formatMessage({
          id: "codex.localConversation.gitSummary.openPullRequestOnGitHub",
          defaultMessage: "Open pull request on GitHub",
          description:
            "Accessible label for opening a pull request on GitHub from its summary row",
        })}
        className="cursor-interaction text-token-text-tertiary hover:text-token-foreground"
        href={f}
        rel="noreferrer"
        target="_blank"
        onClick={(event) => {
          event.stopPropagation();
          m(event);
        }}
        onKeyDown={v_}
      >
        <In className="icon-xs" href={f} />
      </a>
    ) : (
      <In className="icon-xs text-token-text-tertiary" href={f} />
    );
  let x = f == null ? undefined : g,
    S = <Fl aria-label={v} icon={y} label={v} trailing={b} onClick={x} />;
  let C = S;
  if (
    conversationId == null ||
    f == null ||
    !hs({
      href: f,
      isBrowserSidebarEnabled: c,
    })
  )
    return C;
  let w = jo({
    conversationId,
    href: f,
    initiator: "side_panel_menu",
  });
  return <Eo items={w}>{C}</Eo>;
}
function v_(event) {
  event.stopPropagation();
}
function y_(e, t, n) {
  if (t != null) return t;
  let r =
    e == null
      ? n.formatMessage({
          id: "codex.localConversation.gitSummary.pullRequestFallbackNumber",
          defaultMessage: "-",
          description:
            "Fallback displayed when a pull request number is unavailable",
        })
      : `#${e}`;
  return n.formatMessage(
    {
      id: "codex.localConversation.gitSummary.pullRequestWithState",
      defaultMessage: "PR {number}",
      description: "GitHub PR row with pull request number and status",
    },
    {
      number: r,
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
    vd();
    Js();
    me();
    o();
    g_();
    Pl();
    x_ = getJsxRuntime();
  });
function C_(e) {
  let {
      conversationId,
      cwd,
      hostConfig,
      workspaceBrowserRoot,
      onCreatePullRequest,
    } = e,
    s = K(Wn, conversationId),
    c = K(pi, conversationId),
    l = s ?? workspaceBrowserRoot,
    u = ys(l, hostConfig, "local_conversation_git_summary"),
    d = {
      cwd,
      hostConfig,
    };
  let f = K(_s, d),
    p,
    m;
  p = u.data?.trim() ?? "";
  m = Bh(c, p);
  let h = m,
    g = u.isSuccess && p.length === 0,
    _ = {
      cwd,
      hostId: hostConfig.id,
    };
  let v = K(Oc, _),
    y = v?.phase ?? null,
    b = v?.workflow === "create-pr",
    x = K(ya, hostConfig.id),
    S = {
      cwd: l,
      headBranch: h,
      hostId: hostConfig.id,
      operationSource: "local_conversation_git_summary",
    };
  let C = K(qa, S);
  if (l == null || (!g && p.length === 0)) return null;
  if (g) {
    if (b && y != null && (C.type !== "success" || C.data.hasOpenPr !== true)) {
      let e = () =>
        Lc({
          cwd,
          hostId: hostConfig.id,
        });
      let n;
      return <D_ phase={y} onCancel={e} />;
    }
    let e;
    return A_.jsx(w_, {
      createPullRequestActionState: f,
      ghCliAvailability: x,
      onCreatePullRequest,
      workflowPhase: y,
    });
  }
  if (b && y != null && (C.type !== "success" || C.data.hasOpenPr !== true)) {
    let e = () =>
      Lc({
        cwd,
        hostId: hostConfig.id,
      });
    let n;
    return <D_ phase={y} onCancel={e} />;
  }
  let w = E_(x);
  let T = w;
  if (T != null) return T;
  if (C.type === "error") {
    let e;
    return (
      <Fl
        className="!text-token-text-tertiary"
        icon={<O_ />}
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
  if (C.type === "loading") {
    let e;
    return (
      <Fl
        icon={<O_ />}
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
  let E =
    f === "hidden" ? null : (
      <T_
        isCreatePullRequestEnabled={f === "enabled"}
        onCreatePullRequest={onCreatePullRequest}
        workflowPhase={y}
      />
    );
  let D = E;
  if (C.type === "not-found") return D;
  let O = C.data,
    k,
    A;
  A = Symbol.for("react.early_return_sentinel");
  bb0: {
    let e = jl({
      hasOpenPr: O.hasOpenPr,
      isDraft: O.isDraft,
      url: O.url,
    });
    if (e == null) {
      A = D;
      break bb0;
    }
    k = kl({
      canMerge: O.canMerge,
      ciStatus: O.ciStatus,
      hasMergeConflicts: O.mergeBlocker === "conflicts",
      status: e,
    });
  }
  if (A !== Symbol.for("react.early_return_sentinel")) return A;
  let j = k,
    M = A_.jsx(__, {
      conversationId,
      hostId: hostConfig.id,
      pullRequestStatus: O,
      visualState: j,
    });
  let N = (
    <Ph conversationId={conversationId} headBranch={p} pullRequestStatus={O} />
  );
  return (
    <div className="relative z-10 flex flex-col">
      {M}
      {N}
    </div>
  );
}
function w_(e) {
  let {
    createPullRequestActionState,
    ghCliAvailability,
    onCreatePullRequest,
    workflowPhase,
  } = e;
  if (createPullRequestActionState === "hidden") return null;
  let o = E_(ghCliAvailability);
  let s = o;
  if (s != null) return s;
  let c = createPullRequestActionState === "enabled";
  return (
    <T_
      isCreatePullRequestEnabled={c}
      onCreatePullRequest={onCreatePullRequest}
      workflowPhase={workflowPhase}
    />
  );
}
function T_(e) {
  let { isCreatePullRequestEnabled, onCreatePullRequest, workflowPhase } = e,
    a = workflowPhase != null || !isCreatePullRequestEnabled,
    o,
    s;
  o = <O_ />;
  s = (
    <FormattedMessage
      id="codex.localConversation.gitSummary.createPullRequest"
      defaultMessage="Create pull request"
      description="GitHub status row shown when no PR exists for the branch"
    />
  );
  return <Fl disabled={a} onClick={onCreatePullRequest} icon={o} label={s} />;
}
function E_(e) {
  switch (e) {
    case "loading":
    case "error":
      return (
        <Fl
          icon={<O_ />}
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
        <Fl
          icon={<O_ />}
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
        <Fl
          icon={<O_ />}
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
function D_(e) {
  let { phase, onCancel } = e,
    i = A_.jsx(rr, {
      className: j_,
    });
  let a = A_.jsx(nl, {
    phase,
  });
  let o = <Ms onCancel={onCancel} />;
  return <Fl icon={i} label={a} trailing={o} trailingVisible={true} />;
}
function O_() {
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
    Al();
    io();
    ka();
    Pl();
    zh();
    Vh();
    S_();
    A_ = getJsxRuntime();
    j_ = "icon-sm shrink-0 text-token-text-tertiary";
  });
function N_(e) {
  let { conversationId, onOpenChange } = e,
    i = B(fi),
    a = W(Ro),
    o = (e) => {
      $o(i, null, e);
    };
  let s = o,
    c = $i(conversationId),
    l = K(En, conversationId) ?? "local",
    u = K(Wn, conversationId),
    d = We(c.hostId),
    f = Ar(u, d);
  let p = f,
    m = Vr("1115442235"),
    h = K(Ui, conversationId),
    g =
      m &&
      Uu({
        isCompactWindow: lo(),
      }) &&
      c.cwd != null
        ? {
            conversationTitle: h,
            cwd: D(c.cwd),
            isWorktreeConversation: p,
          }
        : null;
  let _ = g,
    v = {
      isAttachedToStartedTask: true,
      existingRemoteThreadState: {
        hostId: l,
      },
    };
  let y = v,
    b = p,
    x = (
      <Wu
        composerMode={a}
        setComposerMode={s}
        conversationId={conversationId}
        footerRemoteState={y}
        side="left"
        disabled={b}
        threadHandoff={_}
        worktreeLabelOnly={b}
        triggerVariant="summary-panel"
        onOpenChange={onOpenChange}
      />
    );
  let S =
    a === "cloud" &&
    F_.jsx(qt, {
      electron: true,
      browser: true,
      children: F_.jsx(zu, {
        composerMode: a,
        conversationId,
        disabled: b,
        setComposerMode: s,
        side: "left",
      }),
    });
  return (
    <div className="relative flex w-full items-center gap-2">
      {x}
      {S}
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
    Hu();
    cs();
    Bu();
    Vu();
    Re();
    Fi();
    fa();
    _();
    Ht();
    ae();
    F_ = getJsxRuntime();
  });
function L_(e) {
  let {
      cwd,
      conversationId,
      hostConfig,
      isCodexWorktree,
      onOpenReviewTab,
      onForceShow,
      registerEnvironmentActionCommands,
      workspaceBrowserRoot,
    } = e,
    u = B(Fe),
    d = W(La),
    f = W(Ia),
    p = d.metrics,
    m = z_.useRef(null),
    h = z_.useRef(null),
    g = workspaceBrowserRoot == null ? null : qe(workspaceBrowserRoot);
  let _ = g,
    v = isCodexWorktree ? (
      <Fl
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
          m.current?.();
        }}
      />
    ) : null;
  let y = v,
    b =
      _ == null ? null : (
        <Ru
          gitRoot={_}
          hostConfig={hostConfig}
          localConversationId={conversationId}
          shouldShow={true}
          side="left"
          align="start"
          renderControl={(e) => {
            let { currentBranch, disabled, isPending, switchTooltipText } = e;
            return currentBranch == null ? (
              y
            ) : (
              <Fl
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
                          className:
                            "icon-2xs shrink-0 text-token-text-tertiary",
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
  let x = b,
    S = (e) => {
      let { isExpanded } = e;
      return (
        <span className="ms-auto flex items-center justify-end gap-0.5">
          {p && !isExpanded && (
            <Ml linesAdded={p.additions} linesRemoved={p.deletions} />
          )}
          {B_.jsx(fm, {
            conversationId,
            hostConfig,
            onMenuOpenChange: onForceShow,
            onOpenChange: onForceShow,
            onShowTerminal: (e) => {
              Li(u, e, f);
            },
            registerCommands: registerEnvironmentActionCommands,
            workspaceRoot: cwd,
          })}
        </span>
      );
    };
  let C = (
    <FormattedMessage
      id="codex.localConversation.environmentSummary.title"
      defaultMessage="Environment"
      description="Title for the thread summary side panel environment and branch details section"
    />
  );
  let w = B_.jsx(qm, {
    onOpenReviewTab,
    diffStats: p,
    isDiffStatsLoading: d.isLoading,
  });
  let T =
    conversationId == null ? null : (
      <N_ conversationId={conversationId} onOpenChange={onForceShow} />
    );
  let E = isCodexWorktree && _ != null,
    D,
    O;
  O = (e) => {
    m.current = e;
  };
  D = (e) => {
    h.current = e;
  };
  let k = B_.jsx(
    nc,
    {
      codexWorktree: isCodexWorktree,
      conversationId,
      cwd,
      hostId: hostConfig.id,
      hidePullRequestSection: true,
      hideCreatePullRequestAction: true,
      surface: "summary-panel",
      branchControlOwnsDetachedSetup: E,
      onCreateBranchActionReady: O,
      onCreatePullRequestActionReady: D,
    },
    cwd,
  );
  let A = () => {
    h.current?.();
  };
  let j = (
    <C_
      conversationId={conversationId}
      cwd={cwd}
      hostConfig={hostConfig}
      workspaceBrowserRoot={workspaceBrowserRoot}
      onCreatePullRequest={A}
    />
  );
  return (
    <Nm sectionKey="environment" after={S} title={C}>
      {w}
      {T}
      {x}
      {k}
      {j}
    </Nm>
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
    Pl();
    Km();
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
    <Fl
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
    Pl();
    W_ = getJsxRuntime();
  });
function K_(e) {
  let { sideChats, onOpen } = e,
    i = (e) => (
      <Fl
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
    <Lf items={sideChats} getKey={q_}>
      {i}
    </Lf>
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
    Uf();
    Pl();
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
function av(e) {
  let { children, shouldHideInlineImmediately, shouldShow } = e,
    a = W(mt),
    o = shouldHideInlineImmediately && "invisible",
    s = S("pointer-events-none pe-4 max-h-full min-h-0 origin-top-right", o);
  let c = shouldShow ? 1 : 0,
    l = shouldShow ? 0 : "100%",
    u = shouldShow ? 1 : 0.8,
    d = {
      opacity: c,
      translateX: l,
      scale: u,
    };
  let f =
    shouldHideInlineImmediately || a
      ? {
          duration: 0,
        }
      : {
          type: "spring",
          duration: 0.3,
          bounce: 0.01,
        };
  let m = shouldShow ? "thread-summary-panel" : undefined,
    h = shouldShow ? "pointer-events-auto" : "pointer-events-none",
    g = S("flex max-h-full min-h-0 flex-col", h);
  let _ = {
    width: 300,
  };
  let v = (
    <div data-pip-obstacle={m} className={g} style={_}>
      {children}
    </div>
  );
  return (
    <div className="pointer-events-none absolute top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) z-40">
      <div className="relative flex max-h-full">
        {dv.jsx(p.div, {
          initial: false,
          className: s,
          animate: d,
          transition: f,
          children: v,
        })}
      </div>
    </div>
  );
}
function ov(e) {
  let { children } = e,
    r = {
      width: 300,
    };
  return (
    <div
      className="flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col"
      style={r}
    >
      {children}
    </div>
  );
}
function sv(e) {
  let { children } = e;
  return (
    <div className="relative flex max-h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-token-dropdown-background pt-3 electron:elevation-prominent extension:border extension:border-token-border-default extension:shadow-md">
      <div className="flex h-fit max-h-full min-h-0 flex-col gap-3 overflow-y-auto pb-3">
        {children}
      </div>
    </div>
  );
}
function cv(e) {
  let { label, onClick, pressed, shortcut, ...rest } = e;
  let s = pressed ? "secondary" : "ghost",
    c = <Zl className="icon-sm" />;
  let l = dv.jsx(k, {
    size: "toolbar",
    color: s,
    "aria-label": label,
    "aria-pressed": pressed,
    title: label,
    onClick,
    uniform: true,
    ...rest,
    children: c,
  });
  return dv.jsx(jr, {
    tooltipContent: label,
    shortcut,
    delayOpen: true,
    children: l,
  });
}
function lv(e) {
  let { count } = e;
  if (count === 0) return null;
  return (
    <span className="text-base text-token-description-foreground opacity-50">
      {count}
    </span>
  );
}
var uv,
  dv,
  ThreadSummaryPanelChrome,
  initThreadSummaryPanelChrome = once(() => {
    uv = q();
    Ut();
    bt();
    c();
    Ye();
    Gn();
    tu();
    Oe();
    Nf();
    Km();
    dv = getJsxRuntime();
    ThreadSummaryPanelChrome = {
      Content: sv,
      HeaderButton: cv,
      PopoverContent: ov,
      Root: av,
      Section: Nm,
      SectionCount: lv,
    };
  });
function mv(e) {
  let { type } = e;
  switch (type) {
    case "subagents": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.backgroundTasks.title.subagents"
          defaultMessage="Subagents"
          description="Title for the background subagents section in the thread summary side panel"
        />
      );
    }
    case "tasks": {
      let e;
      return (
        <FormattedMessage
          id="codex.localConversation.backgroundTasks.title.tasks"
          defaultMessage="Tasks"
          description="Title for the background tasks section in the thread summary side panel"
        />
      );
    }
  }
}
var hv,
  gv,
  _v = once(() => {
    hv = q();
    Jn();
    gv = getJsxRuntime();
  });
function vv(e) {
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
    } = e,
    m = Q.jsx(ThreadSummaryPanelChrome.Content, {
      children: (
        <Sv
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
          onForceShow={yv}
        />
      ),
    });
  return Q.jsx(ThreadSummaryPanelChrome.Root, {
    shouldHideInlineImmediately,
    shouldShow,
    children: m,
  });
}
function yv() {}

type RenderableThreadNode = unknown;
type BackgroundAgentOpenHandler = (backgroundAgent: unknown) => void;

export interface LocalConversationSummaryPanelProps {
  artifacts: readonly unknown[];
  sideChats: readonly unknown[];
  toolSources: readonly unknown[];
  webSources: readonly unknown[];
  backgroundAgents: readonly unknown[];
  backgroundTerminals: readonly unknown[];
  browserUseSummaries: readonly unknown[];
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
        <Sv
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
          onForceShow={xv}
        />
      ),
    }),
  });
}
function xv() {}
function Sv(e) {
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
    } = e,
    h = B(Fe),
    g = ur(),
    _ = St() === sn,
    y = W(ra),
    b = h.value.routeKind === "local-thread" ? h.value.conversationId : null,
    x = K(Zi, b),
    S = W(z),
    C = Vr("3264431617"),
    w = W(gu),
    T = W(fu),
    E = qr("open-file"),
    O = W(oa),
    k = K(er, b),
    { data } = W(Tl),
    j = W(uu),
    M = backgroundAgents.some(Dv);
  let N = M,
    P = backgroundAgents.filter(Ev);
  let F = P,
    I = C && isVisible && b != null,
    L = {
      queryConfig: {
        enabled: I,
        intervalMs: 1e3,
      },
    };
  let { data: _data } = jn("chat-processes", L),
    ee = K(v, b),
    V = W(co),
    { data: __data } = Te(Xt.THREAD_WORKSPACE_ROOT_HINTS),
    ne = k === "projectless",
    re = b == null ? null : (__data?.[b] ?? null),
    ie = ne ? (ee ?? re) : V,
    H = !ne && O.kind === "git",
    ae = O.cwd == null ? null : D(O.cwd);
  let U = ae,
    oe = _data?.processes.some((e) => e.conversationId === b) ?? false;
  let se = oe,
    ce =
      backgroundTerminals.length > 0 ||
      restoredBackgroundProcesses.length > 0 ||
      j.size > 0 ||
      se;
  _data?.processes;
  let le = _data?.processes,
    ue = kv(backgroundTerminals, restoredBackgroundProcesses, le, j, b);
  let de = ue,
    fe = I && ce,
    pe = {
      enabled: fe,
      intervalMs: 1e3,
      structuralSharing: false,
    };
  let me = {
    queryConfig: pe,
    select: de,
  };
  let { data: ___data } = jn("child-processes", me),
    ge = ___data?.processSnapshotTimeMs ?? 0,
    _e,
    G,
    ve;
  {
    ve = C
      ? fp({
          childProcesses: ___data?.processes,
          conversationCwd: O.cwd,
          conversationId: b,
          enabled: isVisible,
          hostId: y.id,
          processSnapshotTimeMs: ge,
          records: _data?.processes,
          restoredProcesses: restoredBackgroundProcesses,
        })
      : [];
    let e;
    e =
      data == null
        ? null
        : Jl({
            automations: data.items,
            conversationId: b,
          });
    _e = e;
    G = up({
      actionStatesByProcessId: j,
      backgroundTerminals,
      conversationId: b,
      processSnapshotTimeMs: ge,
      registeredRows: ve,
    });
  }
  let ye = G,
    be = !_ && ye > 0,
    xe = g.formatMessage({
      id: "codex.localConversation.backgroundTasks.viewAllProcessesLabel",
      defaultMessage: "View all processes",
      description:
        "Accessible label for the thread summary panel action that opens the process manager",
    });
  let Se = xe,
    Ce = T
      ? g.formatMessage({
          id: "codex.localConversation.remoteHostedPip.hide",
          defaultMessage: "Hide PiP",
          description:
            "Accessible label for hiding the Computer Use PiP stream",
        })
      : g.formatMessage({
          id: "codex.localConversation.remoteHostedPip.show",
          defaultMessage: "Show PiP",
          description:
            "Accessible label for showing the Computer Use PiP stream",
        });
  let we = Ce,
    Ee = g.formatMessage({
      id: "codex.localConversation.plan.title",
      defaultMessage: "Plan",
      description: "Title for the plan section in the thread summary panel",
    });
  let De = Ee,
    Oe = (e) => {
      let { icon, path, title } = e;
      wl({
        scope: h,
        path,
        cwd: U,
        browserSidebarEnabled: S,
        hostConfig: y,
        hostId: y.id,
        icon,
        openFile: E.mutate,
        openInSidePanel: true,
        title,
      });
    };
  let ke = Y(Oe),
    Ae = (event, t) => {
      switch (event.type) {
        case "file":
        case "generated-image":
          ke({
            path: event.path,
          });
          return;
        case "google-drive":
        case "appgen-app":
          wi({
            event: t,
            href: event.url,
            originHostId: y.id,
            initiator: "mcp_app_resource",
          });
          return;
        case "website":
          if (yn(event.target)) {
            wi({
              event: t,
              href: event.target,
              initiator: "mcp_app_resource",
              originHostId: y.id,
            });
            return;
          }
          wl({
            path: event.target,
            cwd: U,
            browserSidebarEnabled: S,
            hostConfig: y,
            hostId: y.id,
            openFile: E.mutate,
          });
      }
    };
  let je = Y(Ae),
    Me = (e) => {
      ja(h, "right", e.tabId);
    };
  let Ne = Y(Me),
    Pe = (e) => {
      qi(h, e, {
        isFullScreen: true,
      });
      let t = ia(e);
      h.get(ga.tabs$).some((item) => item.tabId === t) &&
        (ga.activateTab(h, t), ma(h));
    };
  let Ie = Y(Pe),
    Le = y.kind === "local" ? Tv : undefined,
    Re = () => {
      h.get(ti).danger(
        <FormattedMessage
          id="codex.localConversation.backgroundTerminals.cleanError"
          defaultMessage="Unable to stop background terminals"
          description="Toast shown when cleaning background terminals from the thread summary panel fails"
        />,
      );
    };
  let ze = Y(Re),
    Be = () => {
      h.get(ti).danger(
        <FormattedMessage
          id="codex.localConversation.backgroundTerminals.restartError"
          defaultMessage="Unable to track restarted background terminal"
          description="Toast shown when tracking a restarted background terminal from the thread summary panel fails"
        />,
      );
    };
  let Ve = Y(Be),
    He = (e) => {
      b != null &&
        Ql({
          scope: h,
          backgroundTerminal: e,
          conversationId: b,
          fallbackTitle: g.formatMessage({
            id: "codex.localConversation.backgroundTerminalTab.title",
            defaultMessage: "Background terminal",
            description:
              "Title for a background terminal output tab when the command text is unavailable",
          }),
        });
    };
  let Ue = Y(He),
    We = _e != null && (
      <Nm
        sectionKey="automation"
        title={
          <FormattedMessage
            id="codex.localConversation.heartbeatAutomation.title"
            defaultMessage="Scheduled"
            description="Title for the active scheduled task section in the thread summary side panel"
          />
        }
      >
        <H_ automation={_e} />
      </Nm>
    );
  let Ge = !_ && H && U && (
    <L_
      cwd={U}
      conversationId={b}
      hostConfig={y}
      isCodexWorktree={O.isCodexWorktree}
      onOpenReviewTab={() => Zs(h)}
      onForceShow={onForceShow}
      registerEnvironmentActionCommands={registerEnvironmentActionCommands}
      workspaceBrowserRoot={ie}
    />
  );
  let Ke =
    plan != null && b != null ? (
      <Nm sectionKey="plan" title={De}>
        <Fl
          icon={<Ls className="icon-xs shrink-0" />}
          label={plan.title ?? De}
          labelClassName="min-w-0 truncate"
          title={plan.title ?? De}
          onClick={() => {
            tc(h, {
              content: plan.content,
              conversationId: b,
              cwd: U,
              key: plan.key,
              title: De,
            });
          }}
        />
      </Nm>
    ) : null;
  let qe = !H && (
    <Nm
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
      <Wf
        onOpen={je}
        artifacts={artifacts}
        conversationTitle={x}
        getImagePreviewSrc={Le}
      />
    </Nm>
  );
  let Je = sideChats.length > 0 && (
    <Nm
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
      <K_ sideChats={sideChats} onOpen={Ne} />
    </Nm>
  );
  let Ye = backgroundAgents.length > 0 && (
    <Nm
      autoCollapse={!N && backgroundAgents.every(wv)}
      sectionKey="background-subagents"
      title={Q.jsx(mv, {
        type: "subagents",
      })}
      titleSuffix={
        N
          ? null
          : Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
              count: F.length,
            })
      }
    >
      {Q.jsx($f, {
        backgroundAgents,
        backgroundTerminals: [],
        conversationId: b,
        onOpenBackgroundAgent,
        onOpenTerminal: Ue,
        onStopError: ze,
      })}
    </Nm>
  );
  let Xe = be && (
    <Nm
      after={
        C ? (
          <button
            type="button"
            aria-label={Se}
            className="ms-auto inline-flex size-6 cursor-interaction items-center justify-center rounded-sm text-token-text-tertiary hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            title={Se}
            onClick={Cv}
          >
            <Ec className="icon-xs" />
          </button>
        ) : null
      }
      sectionKey="background-tasks"
      title={Q.jsx(mv, {
        type: "tasks",
      })}
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: ye,
      })}
    >
      {Q.jsx(qt, {
        electron: true,
        children: Q.jsx(_p, {
          backgroundTerminals,
          childProcesses: ___data?.processes,
          conversationId: b,
          hostId: y.id,
          isVisible,
          processSnapshotTimeMs: ge,
          registeredRows: ve,
          onOpen: Ue,
          onRestartError: Ve,
          onStopError: ze,
        }),
      })}
      {backgroundTerminals.length > 0 &&
        Q.jsx(qt, {
          extension: true,
          children: Q.jsx($f, {
            backgroundAgents: [],
            backgroundTerminals,
            conversationId: b,
            onOpenBackgroundAgent,
            onOpenTerminal: Ue,
            onStopError: ze,
          }),
        })}
    </Nm>
  );
  let Ze = w && (
    <Nm mode="headerless" sectionKey="computer-use-pip">
      <Fl
        aria-label={we}
        icon={<Ff className="icon-xs shrink-0" />}
        label={
          <FormattedMessage
            id="codex.localConversation.remoteHostedPip.computerUse"
            defaultMessage="Computer Use"
            description="Label for the Computer Use PiP visibility control in the thread summary side panel"
          />
        }
        onClick={() => {
          h.set(fu, !T);
        }}
        title={we}
        trailing={<Ov isVisible={T} />}
        trailingVisible={true}
      />
    </Nm>
  );
  let Qe = browserUseSummaries.length > 0 && (
    <Nm
      sectionKey="browser-tabs"
      title={
        <FormattedMessage
          id="codex.localConversation.browserUse.title"
          defaultMessage="Browser"
          description="Title for the browser section in the thread summary side panel"
        />
      }
      titleSuffix={Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
        count: browserUseSummaries.length,
      })}
    >
      <Np
        browserUseSummaries={browserUseSummaries}
        onOpen={(e) => {
          gs(h, true, {
            browserTabId: e.browserTabId,
          });
        }}
      />
    </Nm>
  );
  let $e = (
    <FormattedMessage
      id="codex.localConversation.sources.title"
      defaultMessage="Sources"
      description="Title for the thread summary side panel sources section"
    />
  );
  let et = toolSources.length + webSources.length,
    tt = Q.jsx(ThreadSummaryPanelChrome.SectionCount, {
      count: et,
    });
  let nt = <Z_ onOpen={Ie} toolSources={toolSources} webSources={webSources} />;
  let rt = (
    <Nm sectionKey="tool-sources" title={$e} titleSuffix={tt}>
      {nt}
    </Nm>
  );
  return (
    <>
      {We}
      {Ge}
      {Ke}
      {qe}
      {Je}
      {Ye}
      {Xe}
      {Ze}
      {Qe}
      {rt}
    </>
  );
}
function Cv() {
  Kt("openProcessManager", "thread_summary_process_manager");
}
function wv(e) {
  let { status } = e;
  return status === "done";
}
function Tv(e) {
  return Wr(e) !== "always" || br(e) == null ? null : L(e);
}
function Ev(e) {
  let { showInlineActivity } = e;
  return !showInlineActivity;
}
function Dv(e) {
  let { showInlineActivity } = e;
  return showInlineActivity;
}
function Ov(e) {
  let { isVisible } = e,
    r = Q.jsx(yc, {
      "aria-hidden": "true",
      className: "size-5",
    });
  let i = isVisible ? null : (
    <Ee aria-hidden="true" className="absolute size-5" />
  );
  return (
    <span className="relative flex size-5 shrink-0 items-center justify-center text-token-text-tertiary">
      {r}
      {i}
    </span>
  );
}
function kv(e, t, n, r, i) {
  let a = null;
  return (o) => {
    let s = Date.now(),
      c = Array.from(r.values()).filter(
        (item) =>
          item.status === "starting" && item.row.process.conversationId === i,
      ),
      l = c.reduce(
        (accumulator, current) =>
          current.expiresAtMs != null && current.expiresAtMs <= s
            ? Math.max(accumulator, current.expiresAtMs)
            : accumulator,
        0,
      ),
      u = c.some((item) => item.expiresAtMs == null || item.expiresAtMs > s),
      d = o.processes.some((item) => item.ageSeconds == null)
        ? [...e, ...t, ...(n ?? [])].reduce(
            (accumulator, current) =>
              current.startedAtMs == null
                ? accumulator
                : Math.max(accumulator, current.startedAtMs + 3e3),
            0,
          )
        : 0,
      f = {
        processSnapshotTimeMs: u || d > s ? s : Math.max(l, d),
        processes: o.processes.map((item) => ({
          ...item,
          ageSeconds:
            item.ageSeconds == null ? null : Math.min(item.ageSeconds, 3),
          cpuPercent: null,
          rssKb: null,
        })),
      };
    if (a != null && jv.default(a.comparison, f)) return a.selected;
    let p = {
      processSnapshotTimeMs: s,
      processes: o.processes,
    };
    return (
      (a = {
        comparison: f,
        selected: p,
      }),
      p
    );
  };
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
    If();
    Sc();
    pt();
    fc();
    Qi();
    el();
    fa();
    qn();
    du();
    po();
    yu();
    me();
    Ki();
    xn();
    ae();
    ho();
    Ji();
    lc();
    Qf();
    lp();
    gp();
    Mp();
    Ip();
    V_();
    G_();
    X_();
    iv();
    iu();
    Pl();
    Km();
    initThreadSummaryPanelChrome();
    tt();
    _n();
    n();
    _v();
    Q = getJsxRuntime();
  });
function Nv(e) {
  let t = (e - 736) / 2;
  return t < 180 ? "overlay" : t < 400 ? "shift" : "gutter";
}
function Pv({ displayMode, isPinned, isPopoverOpen }) {
  return {
    displayMode,
    shouldHideInlineImmediately: displayMode === "overlay" && isPopoverOpen,
    shouldShow: isPinned && displayMode !== "overlay",
  };
}
function Fv({ displayMode, isPinned }) {
  return isPinned && displayMode === "shift" ? -(300 + Iv) / 2 : 0;
}
var Iv,
  Lv = once(() => {
    Nf();
    Iv = 16;
  }),
  Rv,
  pinnedSummaryPanelState,
  initPinnedSummaryPanelState = once(() => {
    c();
    r();
    Rv = {
      displayMode: "overlay",
      isPopoverOpen: false,
    };
    pinnedSummaryPanelState = bi(ut, Rv);
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
    layoutContext = Jv.useContext(so),
    fallbackTargetWidthSignal = Xe(0),
    mainContentTargetWidthSignal =
      layoutContext?.mainContentTargetWidth ?? fallbackTargetWidthSignal,
    updatePinnedPanelLayout;
  updatePinnedPanelLayout = (nextWidth: number) => {
    Gv(store, nextWidth);
  };
  ar(mainContentTargetWidthSignal, "change", updatePinnedPanelLayout);
  let syncPinnedPanelLayout = () => {
    Gv(store, mainContentTargetWidthSignal.get());
  };
  let syncLayoutDependencies;
  syncLayoutDependencies = [
    leftPanelSignal,
    rightPanelSignal,
    mainContentTargetWidthSignal,
    store,
  ];
  Jv.useLayoutEffect(syncPinnedPanelLayout, syncLayoutDependencies);
  let closePopoverOnUnmount, closePopoverDependencies;
  closePopoverOnUnmount = () => () => {
    store.set(pinnedSummaryPanelState, closePinnedSummaryPanelPopover);
  };
  closePopoverDependencies = [store];
  Jv.useLayoutEffect(closePopoverOnUnmount, closePopoverDependencies);
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
function Uv(e) {
  let n = W(Va),
    r = W(Ga),
    i = W(Pa),
    a = W(pinnedSummaryPanelState),
    o = W(mt),
    s = Jv.useContext(so),
    c = Xe(0),
    l = s?.mainContentTargetWidth ?? c,
    u = Wv({
      isPinned: n,
      mainContentTargetWidth: l.get(),
    });
  let d = Xe(u),
    f = Jv.useRef(null),
    p = d.get();
  let m = Jv.useRef(p),
    h = Jv.useRef(e),
    g = Pv({
      displayMode: a.displayMode,
      isPinned: n,
      isPopoverOpen: a.isPopoverOpen,
    });
  let _ = g,
    v,
    y;
  v = () => {
    if (h.current === e) return;
    h.current = e;
    let t = Wv({
      isPinned: n,
      mainContentTargetWidth: l.get(),
    });
    m.current = t;
    f.current?.stop();
    d.set(t);
  };
  y = [d, n, l, e];
  Jv.useLayoutEffect(v, y);
  let b;
  b = (e) => {
    let t = Wv({
      isPinned: n,
      mainContentTargetWidth: e,
    });
    m.current !== t &&
      ((m.current = t), f.current?.stop(), (f.current = Kv(d, t, o)));
  };
  ar(l, "change", b);
  let x = () => {
    let e = Wv({
      isPinned: n,
      mainContentTargetWidth: l.get(),
    });
    m.current !== e &&
      ((m.current = e), f.current?.stop(), (f.current = Kv(d, e, o)));
  };
  let S;
  S = [d, n, r, i, l, o];
  Jv.useEffect(x, S);
  let C, w;
  C = () => () => {
    f.current?.stop();
  };
  w = [];
  Jv.useEffect(C, w);
  return {
    contentShift: d,
    shouldHideInlineImmediately: _.shouldHideInlineImmediately,
    shouldShow: _.shouldShow,
  };
}
function Wv({ isPinned, mainContentTargetWidth }) {
  return Fv({
    displayMode: Nv(mainContentTargetWidth),
    isPinned,
  });
}
function Gv(e, t) {
  let n = Nv(t);
  e.set(pinnedSummaryPanelState, (e) => {
    let t = n === "overlay" && e.isPopoverOpen;
    return e.displayMode === n && e.isPopoverOpen === t
      ? e
      : {
          displayMode: n,
          isPopoverOpen: t,
        };
  });
}
function Kv(e, t, n) {
  return n ? (e.set(t), null) : E(e, t, ji);
}
var qv,
  Jv,
  initLocalConversationArtifacts = once(() => {
    qv = q();
    bt();
    c();
    Jv = toEsModule(G(), 1);
    ua();
    Xa();
    Oe();
    Lv();
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
    : su([e]).filter((item) => item.source === "restored-process");
}
var uy = once(() => {
  xs();
  Xl();
});
function dy({ browserTabId, browserSnapshot, isAgentWorking }) {
  let r = browserSnapshot?.url.trim() ?? "",
    i = py(r) ? null : _y(r),
    a =
      i == null
        ? hy(browserSnapshot?.title ?? "")
        : gy(browserSnapshot?.title ?? "", i);
  return {
    browserTabId,
    displayUrl: i,
    faviconUrl: browserSnapshot?.faviconUrl ?? null,
    isAgentWorking,
    title: a,
    url: my(r) ? "" : r,
  };
}
function fy({ browserTabId, browserSnapshot, isAgentWorking }) {
  if (browserSnapshot?.tabType !== mr.WEB) return null;
  let r = browserSnapshot.url.trim();
  if (py(r)) return null;
  let i = _y(r);
  return {
    browserTabId,
    displayUrl: i,
    faviconUrl: browserSnapshot.faviconUrl,
    isAgentWorking,
    title: gy(browserSnapshot.title, i),
    url: r,
  };
}
function py(e) {
  return e.length === 0 || e === "about:blank" || my(e);
}
function my(e) {
  return e.startsWith(vy);
}
function hy(e) {
  let t = e.trim();
  return t.length === 0 || t === "about:blank" || t.startsWith(vy) ? ni : t;
}
function gy(e, t) {
  let n = e.trim();
  return n.length === 0 ||
    n === "New tab" ||
    n === "about:blank" ||
    n.startsWith(vy)
    ? t
    : n;
}
function _y(e) {
  try {
    let { host } = new URL(e);
    return host.replace(/^www\./, "");
  } catch {
    return e.replace(/^https?:\/\//, "");
  }
}
var vy,
  yy = once(() => {
    gn();
    vy = "about:blank#codex-browser-sidebar-attach-token=";
  });
function by(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t];
    if (n != null && n.status !== "inProgress")
      for (let e = n.items.length - 1; e >= 0; --e) {
        let t = n.items[e];
        if (t == null || t.type !== "plan") continue;
        let r = t.text.match(/^#\s+(.+)$/m)?.[1]?.trim();
        return {
          content: t.text,
          key: n.turnId ?? t.id,
          title: r == null ? null : Yn(r),
        };
      }
  }
  return null;
}
var xy = once(() => {
  Ur();
});
function Sy(e, t) {
  return e.flatMap((item) => {
    if (!item.tabId.startsWith(Cy)) return [];
    let n = Rr(item.tabId.slice(9));
    return [
      {
        conversationId: n,
        isResponseInProgress: t(n),
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
function Ty(e) {
  let t = new Map();
  for (let n of e?.data ?? []) {
    let e = n.serverInfo;
    if (e == null) continue;
    let r = xl(e),
      i = e.title?.trim() || e.name.trim() || null;
    if (r == null && i == null) continue;
    let a = {
      logoUrl: r?.logoUrl ?? null,
      logoUrlDark: r?.logoDarkUrl ?? null,
      name: i,
    };
    for (let r of [n.name, e.name]) {
      let e = Ey(r);
      e.length > 0 && !t.has(e) && t.set(e, a);
    }
  }
  return t;
}
function Ey(e) {
  return e?.trim().toLowerCase() ?? "";
}
var Dy = once(() => {
  Sl();
});
function Oy(e, t, n, r) {
  let i = [],
    a = new Map(),
    o = Ty(r);
  for (let r = e.length - 1; r >= 0; --r) {
    let s = e[r];
    for (let e = s.items.length - 1; e >= 0; --e) {
      let r = s.items[e];
      if (r.type !== "mcpToolCall" || r.server === "node_repl") continue;
      let c = jy(r, t, o),
        l = Oi(r.id),
        u = n?.has(l) === true ? l : undefined,
        d = a.get(c.id);
      if (d != null) {
        d.mcpAppId == null && u != null && (d.mcpAppId = u);
        continue;
      }
      c.mcpAppId = u;
      a.set(c.id, c);
      i.push(c);
    }
  }
  return i;
}
function ky(e) {
  let t = [],
    n = new Set(),
    r = false;
  for (let i = e.length - 1; i >= 0; --i) {
    let a = e[i];
    for (let e = a.items.length - 1; e >= 0; --e) {
      let i = a.items[e];
      if (i.type !== "webSearch") continue;
      r = true;
      let o = Ay(i.action);
      o == null || n.has(o.url) || (n.add(o.url), t.push(o));
    }
  }
  return t.length === 0 && r
    ? [
        {
          type: "search",
        },
      ]
    : t;
}
function Ay(e) {
  if ((e?.type !== "openPage" && e?.type !== "findInPage") || e.url == null)
    return null;
  try {
    let t = new URL(e.url);
    return (t.protocol !== "http:" && t.protocol !== "https:") ||
      t.username !== "" ||
      t.password !== ""
      ? null
      : {
          label: `${t.host.replace(/^www\./u, "")}${t.pathname}`,
          type: "page",
          url: t.href,
        };
  } catch {
    return null;
  }
}
function jy(e, t, n) {
  let r = $r({
    apps: t,
    functionName: `${e.server}__${e.tool}`,
    serverName: e.server,
    toolName: e.tool,
  });
  if (r != null)
    return {
      id: r.id,
      name: r.name,
      pluginDisplayNames: r.pluginDisplayNames ?? [],
      logoUrl: r.logoUrl,
      logoUrlDark: r.logoUrlDark,
    };
  let i = n.get(Ey(e.server));
  return {
    id: `mcp-server:${e.server}`,
    name: i?.name ?? mn(e.server),
    pluginDisplayNames: [],
    logoUrl: i?.logoUrl ?? null,
    logoUrlDark: i?.logoUrlDark ?? null,
  };
}
var My = once(() => {
  Qi();
  wr();
  Dy();
  kr();
});
function useLocalConversationSummaryPanelModel(e) {
  let n = e === undefined ? true : e,
    r = B(Fe),
    i = r.value.routeKind === "local-thread" ? r.value.conversationId : null,
    a = Ot(r);
  let o = a,
    s = W(ra),
    c = K(I, i) ?? Hy,
    l = K(Wn, i),
    u = K(Zi, i),
    d = n ? cy(c) : [];
  let f = d,
    p = n
      ? ly(
          i == null
            ? null
            : {
                cwd: l,
                hostId: s.id,
                id: i,
                title: u,
                turns: c,
              },
        )
      : [];
  let m = p,
    h = K(oy, i),
    g = W(Vy),
    _ = W(Vi),
    v = W(re),
    y = W(ga.tabs$),
    b = W(Ja.tabs$),
    x,
    S;
  x = () =>
    o == null
      ? ""
      : Ly({
          bottomPanelTabs: b,
          conversationId: o,
          isMultiBrowserTabsGateEnabled: v,
          rightPanelTabs: y,
        });
  S = () =>
    o == null
      ? ""
      : Ly({
          bottomPanelTabs: b,
          conversationId: o,
          isMultiBrowserTabsGateEnabled: v,
          rightPanelTabs: y,
        });
  let C = By.useSyncExternalStore($a.subscribe, x, S),
    w = Iy({
      bottomPanelTabs: b,
      browserUseSummarySyncKey: C,
      conversationId: o,
      isMultiBrowserTabsGateEnabled: v,
      rightPanelTabs: y,
    });
  let T = w,
    E = c.some(Py);
  let D = E,
    O = {
      enabled: D,
      hostId: s.id,
    };
  let { data = [] } = Ti(O);
  let j = data,
    { data: _data } = K(kt, s.id),
    N = Oy(c, j, _, _data);
  let P = N,
    F = ky(c);
  let L = F,
    R = by(c);
  let z = R,
    ee = K(_c, ns() ? i : null);
  return {
    artifacts: h,
    sideChats: g,
    toolSources: P,
    webSources: L,
    backgroundAgents: ee,
    backgroundTerminals: f,
    browserUseSummaries: T,
    restoredBackgroundProcesses: m,
    plan: z,
  };
}
function Py(e) {
  return e.items.some(Fy);
}
function Fy(e) {
  return e.type === "mcpToolCall" && e.server !== "node_repl";
}
function Iy({
  bottomPanelTabs,
  browserUseSummarySyncKey,
  conversationId,
  isMultiBrowserTabsGateEnabled,
  rightPanelTabs,
}) {
  if (conversationId == null) return [];
  if (!isMultiBrowserTabsGateEnabled) {
    if (browserUseSummarySyncKey.length === 0) return [];
    let e = $a.getBrowserUseSummaryBrowserTabId(conversationId);
    if (e == null) return [];
    let r = fy({
      browserTabId: e,
      browserSnapshot: $a.getSnapshot(conversationId, e),
      isAgentWorking: $a.isBrowserUseActive(conversationId, e),
    });
    return r == null ? [] : [r];
  }
  return browserUseSummarySyncKey.length === 0
    ? []
    : Ry({
        bottomPanelTabs,
        conversationId,
        rightPanelTabs,
      }).map((item) =>
        dy({
          browserTabId: item,
          browserSnapshot: $a.getSnapshot(conversationId, item),
          isAgentWorking: $a.isBrowserUseActive(conversationId, item),
        }),
      );
}
function Ly({
  bottomPanelTabs,
  conversationId,
  isMultiBrowserTabsGateEnabled,
  rightPanelTabs,
}) {
  if (!isMultiBrowserTabsGateEnabled) {
    let e = $a.getBrowserUseSummaryBrowserTabId(conversationId),
      n = $a.getBrowserUseBrowserTabSummarySyncKey(conversationId);
    return e == null || n.length === 0
      ? ""
      : [
          n,
          e,
          $a.isBrowserUseActive(conversationId, e) ? "active" : "inactive",
        ].join("\t");
  }
  return Ry({
    bottomPanelTabs,
    conversationId,
    rightPanelTabs,
  })
    .map((item) => {
      let n = $a.getSnapshot(conversationId, item),
        r = "user";
      return (
        $a.isBrowserUseTab(conversationId, item) && (r = "inactive"),
        $a.isBrowserUseActive(conversationId, item) && (r = "active"),
        [
          item,
          r,
          n?.tabType ?? "",
          n?.title ?? "",
          n?.url ?? "",
          n?.faviconUrl ?? "",
        ].join("\t")
      );
    })
    .join("\n");
}
function Ry({ bottomPanelTabs, conversationId, rightPanelTabs }) {
  let r = [],
    i = new Set(),
    a = (e) => {
      i.has(e) || (i.add(e), r.push(e));
    };
  for (let r of [rightPanelTabs, bottomPanelTabs])
    for (let e of r) {
      let n = A(e, conversationId);
      n != null && a(n);
    }
  for (let e of xa(conversationId)) a(e);
  for (let e of $a.getConversationBrowserTabIds(conversationId))
    $a.isBrowserUseTab(conversationId, e) && a(e);
  return r;
}
var zy,
  By,
  Vy,
  Hy,
  initLocalConversationSummaryPanelSignals = once(() => {
    zy = q();
    c();
    By = toEsModule(G(), 1);
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
    yy();
    xy();
    wy();
    My();
    Vy = Dn(Fe, ({ get }) => Sy(get(ga.tabs$), (t) => get(ge, t) ?? false));
    Hy = [];
  });
function Wy(e) {
  let { conversationId, cwd } = e,
    i = K(En, conversationId),
    a = K(Qr, i);
  if (i !== "local" && a !== "connected") return null;
  return <Gy conversationId={conversationId} cwd={cwd} threadHostId={i} />;
}
function Gy(e) {
  let { conversationId, cwd, threadHostId } = e,
    o = B(ut),
    s = oe(threadHostId),
    c = i(s);
  let l = c,
    u = ur(),
    d = Ci(),
    f = K(Cs, conversationId),
    p = f.data,
    m = f.isError || p?.kind === "unavailable",
    h = {
      mutationFn: (e) =>
        ec(o, {
          conversationId,
          cwd: e,
          hostId: threadHostId,
        }),
    };
  let g = Pe(h),
    _ = () => {
      gr.info("[worktree-restore] successfully restored");
      cwd != null &&
        o.query.invalidate(
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
      d.invalidateQueries({
        queryKey: Gs(l),
      });
      d.invalidateQueries({
        queryKey: ["git", "metadata", l],
      });
      let e = _e.getSessionForConversation(conversationId);
      e != null &&
        cwd != null &&
        _e.attach({
          sessionId: e,
          conversationId,
          hostId: s.id,
          cwd,
          forceCwdSync: true,
        });
      o.get(ti).success(
        u.formatMessage({
          id: "worktreeRestoreBanner.restore.success",
          defaultMessage: "Worktree restored",
          description: "Toast shown when a missing Codex worktree is restored",
        }),
      );
    };
  let v = (e) => {
    let t = e.message;
    gr.debug("[worktree-restore] restore failed for", {
      safe: {},
      sensitive: {
        cwd: cwd ?? "unknown",
        message: t,
      },
    });
    o.get(ti).danger(
      u.formatMessage(
        {
          id: "worktreeRestoreBanner.restore.error",
          defaultMessage: "Failed to restore worktree: {message}",
          description:
            "Toast shown when restoring a missing Codex worktree fails",
        },
        {
          message: t,
        },
      ),
    );
  };
  let y = {
    onSuccess: _,
    onError: v,
  };
  let b = w("restore-worktree", s, y);
  if (p?.kind !== "restorable" && p?.kind !== "gone" && !m) return null;
  let x = m ? (
    <FormattedMessage
      id="worktreeRestoreBanner.unavailable.title"
      defaultMessage="Couldn't check worktree status"
      description="Title for banner when Codex cannot verify whether a managed worktree exists"
    />
  ) : p?.kind === "gone" ? (
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
  let S = x,
    C = m ? (
      <FormattedMessage
        id="worktreeRestoreBanner.unavailable.body"
        defaultMessage="Retry to verify this chat's working directory"
        description="Body text for banner shown when Codex cannot inspect a managed worktree"
      />
    ) : p?.kind === "gone" ? (
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
  let T = C,
    E = m ? "error" : "info",
    O = (
      <span className="min-w-0 truncate font-semibold text-token-foreground">
        {S}
      </span>
    );
  let A = (
    <span className="hidden min-w-0 truncate text-token-description-foreground sm:inline">
      {T}
    </span>
  );
  let j = (
    <span className="flex min-w-0 items-center gap-2">
      {O}
      {A}
    </span>
  );
  let M =
    m && cwd != null
      ? qy.jsx(k, {
          loading: g.isPending || f.isFetching,
          onClick: () => {
            g.mutate(cwd);
          },
          children: (
            <FormattedMessage
              id="worktreeRestoreBanner.retryCta"
              defaultMessage="Retry"
              description="Action to retry managed worktree inspection"
            />
          ),
        })
      : p?.kind === "restorable"
        ? qy.jsx(k, {
            color: "primary",
            loading: b.isPending,
            onClick: () => {
              b.mutateAsync({
                repoRoot: p.snapshot.repoRoot,
                worktreePath: p.worktreePath,
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
    type: E,
    layout: "horizontal",
    content: j,
    customCtas: M,
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
function Zy(e) {
  let {
      canForkIntoWorktree,
      isSubmitting,
      isWorktreeThread,
      onClose,
      onForkIntoLocal,
      onForkIntoWorktree,
      open,
      showWorktreeOption,
    } = e,
    u = (e) => {
      e || onClose();
    };
  let d = (
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
  let f = isWorktreeThread
    ? $y.jsx(ta, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      })
    : $y.jsx(sa, {
        className:
          "icon-xs shrink-0 opacity-75 group-hover:opacity-100 group-focus:opacity-100",
      });
  let p = isWorktreeThread ? fo.forkIntoSameWorktree : fo.forkIntoLocal,
    m = (
      <span className="text-sm font-medium electron:text-base">
        <FormattedMessage {...p} />
      </span>
    );
  let h = (
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
  let g = (
    <span className="flex min-w-0 flex-col gap-0.5">
      {m}
      {h}
    </span>
  );
  let _ = (
    <button
      type="button"
      className="group flex w-full items-center gap-3 rounded-lg px-[var(--padding-row-x)] py-2 text-left text-token-foreground outline-hidden enabled:cursor-interaction enabled:hover:bg-token-list-hover-background enabled:focus:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-50"
      disabled={isSubmitting}
      onClick={onForkIntoLocal}
    >
      {f}
      {g}
    </button>
  );
  let v = showWorktreeOption ? (
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
  let y = (
    <div className="flex flex-col gap-1">
      {_}
      {v}
    </div>
  );
  let b = (
    <FormattedMessage
      id="localConversation.forkFromOlderTurnDialog.cancel"
      defaultMessage="Cancel"
      description="Cancel button label for the older-turn fork confirmation dialog"
    />
  );
  let x = (
    <At>
      {$y.jsx(k, {
        color: "secondary",
        disabled: isSubmitting,
        onClick: onClose,
        children: b,
      })}
    </At>
  );
  let S = $y.jsxs(ui, {
    className: "gap-4",
    children: [d, y, x],
  });
  return $y.jsx(ai, {
    open,
    showDialogClose: false,
    size: "compact",
    onOpenChange: u,
    children: S,
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
    <Zy
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
function ab({ conversation, parentConversation }) {
  let n = new Set();
  for (let e of parentConversation.turns) e.turnId != null && n.add(e.turnId);
  return conversation.turns.filter((item) =>
    item.turnId != null && n.has(item.turnId)
      ? false
      : item.items.length === 0
        ? true
        : !parentConversation.turns.some(
            (_item) =>
              _item.items.length >= item.items.length &&
              item.items.every((__item, index) =>
                ob.default(__item, _item.items[index]),
              ),
          ),
  );
}
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
        await import("./conversation-markdown-BjFKV53f.js");
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
    async search(e) {
      return hb(e, getTurns());
    },
    async ensureVisible(t, r) {
      if (t.domain !== "conversation" || t.contextId !== contextId) return;
      let i = scrollAdapter.getTurnContainer(t.turnKey);
      if (i == null) {
        if (
          r?.signal?.aborted ||
          (r?.signal == null
            ? await scrollAdapter.scrollToTurn(t.turnKey)
            : await scrollAdapter.scrollToTurn(t.turnKey, {
                signal: r.signal,
              }),
          r?.signal?.aborted)
        )
          return;
        i = scrollAdapter.getTurnContainer(t.turnKey);
      }
      i != null &&
        (await Ba({
          container: i,
          matchId: vo(t),
          includeShadowRoots: false,
          signal: r?.signal,
        }));
    },
  };
}
function hb(e, t) {
  let n = e.query.trim();
  if (n.length === 0)
    return {
      domain: e.domain,
      contextId: e.contextId,
      query: n,
      matches: [],
      totalMatches: 0,
      isCapped: false,
    };
  let r = [],
    i = 0,
    a = 0,
    o = false;
  for (let s of t)
    for (let t of s.units) {
      let c = t.text;
      if (c.length === 0) continue;
      let { offsets, totalMatches, isCapped } = Na(c, n, gb - r.length);
      i += totalMatches;
      isCapped && (o = true);
      for (let { start, end } of offsets) {
        a += 1;
        r.push({
          id: `conversation:${s.turnKey}:${t.unitId}:${start}`,
          ordinal: a,
          location: {
            domain: "conversation",
            contextId: e.contextId,
            turnKey: s.turnKey,
            unitId: t.unitId,
            start,
            end,
          },
          snippet: Ua(c, start, end),
        });
      }
    }
  return {
    domain: e.domain,
    contextId: e.contextId,
    query: n,
    matches: r,
    totalMatches: i,
    isCapped: o,
  };
}
var gb,
  initConversationSearchHelpers = once(() => {
    la();
    Ea();
    Aa();
    gb = 250;
  });
function vb({
  getConversationState,
  getIsBackgroundSubagentsEnabled,
  routeContextId,
  scrollAdapter,
}) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () => {
      let n = getConversationState();
      return n == null
        ? []
        : n.turns
            .map((item, index) =>
              ze(item, [], {
                isBackgroundSubagentsEnabled: getIsBackgroundSubagentsEnabled(),
              })
                ? {
                    turnKey: yb(item.turnId, index),
                    units: bb(
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
function yb(e, t) {
  return e ?? `turn-index-${t}`;
}
function bb(e) {
  let t = [],
    n = xb.default(e, (e) => e.type === "assistant-message");
  return (
    e.forEach((item, index) => {
      if (item.type === "user-message") {
        let n = item.message.trim();
        if (n.length === 0) return;
        t.push({
          unitId: `${index}:user`,
          text: n,
        });
        return;
      }
      if (item.type !== "assistant-message" || index !== n) return;
      let i = Tt(item.content);
      i.length !== 0 &&
        t.push({
          unitId: `${index}:assistant`,
          text: i,
        });
    }),
    t
  );
}
var xb,
  Sb = once(() => {
    xb = toEsModule(hn(), 1);
    initConversationSearchHelpers();
    hi();
    Ge();
  });
function Cb({ distanceFromBottomPx, responseSpacerHeightPx, scrollHeightPx }) {
  return {
    distanceFromBottomPx,
    scrollHeightPx,
    shouldPlaceLatestTurn: distanceFromBottomPx - responseSpacerHeightPx <= wb,
  };
}
var wb,
  Tb = once(() => {
    wb = 300;
  });
function Eb({
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
    return zb;
  let c = Fb(conversationRequests),
    l =
      hasConversation && subagentParentThreadId != null
        ? ab({
            conversation: {
              turns: conversationTurns,
            },
            parentConversation: {
              turns: parentConversationTurns,
            },
          })
        : conversationTurns,
    u = new Set(
      l.flatMap((item) => (item.turnId == null ? [] : [item.turnId])),
    ),
    d = new Set(l),
    f = Db(conversationTurns);
  mergeBerryDisplayTurnsForPIA && (f = Ob(conversationTurns));
  let p = [],
    m = l.length < conversationTurns.length,
    h = false,
    g = null;
  for (let e of conversationTurns)
    !h &&
      e.items.some(
        (item) =>
          (item.type === "userMessage" && true) ||
          item.type === "steeringUserMessage",
      ) &&
      (h = true);
  for (let e of f) {
    let { turn, turnId } = e,
      i = e.physicalTurnIds.length > 0 ? Pb(e.physicalTurnIds, c) : Lb;
    ze(turn, i, {
      isBackgroundSubagentsEnabled,
    }) &&
      ((turnId != null && !e.physicalTurnIds.some((item) => u.has(item))) ||
        (turnId == null && !d.has(turn)) ||
        (p.push({
          preserveServerUserMessages,
          requests: i,
          turn,
          turnId,
          turnSearchKey: yb(turnId, e.turnIndex),
        }),
        (g = turnId)));
  }
  return {
    conversationTurns,
    hasInheritedParentTurns: m,
    hasRenderableTurns: p.length > 0,
    hasUserMessage: h,
    latestVisibleTurnId: g,
    visibleTurnEntries: p,
  };
}
function Db(e) {
  return e.map((item, index) => {
    let n = item.turnId;
    return {
      physicalTurnIds: n == null ? [] : [n],
      turn: item,
      turnId: n,
      turnIndex: index,
    };
  });
}
function Ob(e) {
  let t = new Map(),
    n = new Map(),
    r = new Map();
  for (let [i, a] of e.entries()) {
    let e = a.turnId;
    if (e == null) continue;
    let o = {
      turn: a,
      turnIndex: i,
    };
    t.set(e, o);
    let s = kb(e);
    if (s == null) continue;
    let c = n.get(s.controlTurnId);
    c ??
      ((c = {
        controlTurnId: s.controlTurnId,
        displayTurns: [],
      }),
      n.set(s.controlTurnId, c));
    c.displayTurns.push({
      displayIndex: s.displayIndex,
      ...o,
    });
    r.set(e, s.controlTurnId);
  }
  let i = new Set(),
    a = [];
  for (let [o, s] of e.entries()) {
    let e = s.turnId,
      c = e == null ? null : (r.get(e) ?? e),
      l = c == null ? null : n.get(c);
    if (l != null) {
      if (i.has(l.controlTurnId)) continue;
      i.add(l.controlTurnId);
      a.push(Ab(l, t.get(l.controlTurnId) ?? null));
      continue;
    }
    a.push({
      physicalTurnIds: e == null ? [] : [e],
      turn: s,
      turnId: e,
      turnIndex: o,
    });
  }
  return a;
}
function kb(e) {
  if (e == null) return null;
  let t = Bb.exec(e),
    n = t?.[1],
    r = t?.[2];
  if (n == null || r == null) return null;
  let i = Number(r);
  return Number.isSafeInteger(i)
    ? {
        controlTurnId: n,
        displayIndex: i,
      }
    : null;
}
function Ab(e, t) {
  let n = [...e.displayTurns].sort((e, t) => e.displayIndex - t.displayIndex),
    r = [...(t == null ? [] : [t]), ...n].sort(
      (e, t) => e.turnIndex - t.turnIndex,
    ),
    i = r.map(({ turn }) => turn),
    a = n.map(({ turn }) => turn),
    o = t?.turn ?? a[0];
  if (o == null) throw Error("Berry display turn group must contain a turn");
  return {
    physicalTurnIds: i.flatMap((item) =>
      item.turnId == null ? [] : [item.turnId],
    ),
    turn: {
      params: o.params,
      turnId: e.controlTurnId,
      turnStartedAtMs: t?.turn.turnStartedAtMs ?? Mb(i, "turnStartedAtMs"),
      durationMs: t?.turn.durationMs ?? Nb(i, "durationMs"),
      firstTurnWorkItemStartedAtMs: Mb(i, "firstTurnWorkItemStartedAtMs"),
      finalAssistantStartedAtMs: Nb(i, "finalAssistantStartedAtMs"),
      status: jb(i),
      error: i.find((item) => item.error != null)?.error ?? null,
      diff: Nb(i, "diff"),
      interruptedCommandExecutionItemIds: i.flatMap(
        (item) => item.interruptedCommandExecutionItemIds ?? [],
      ),
      hookRuns: i.flatMap((item) => item.hookRuns ?? []),
      items: [...(t?.turn.items ?? []), ...a.flatMap((item) => item.items)],
    },
    turnId: e.controlTurnId,
    turnIndex: r[0]?.turnIndex ?? 0,
  };
}
function jb(e) {
  let t = e.find((item) => item.status === "failed");
  if (t != null) return t.status;
  let n = e.find((item) => item.status === "inProgress");
  return n == null ? (e.at(-1)?.status ?? "completed") : n.status;
}
function Mb(e, t) {
  return e.find((item) => item[t] != null)?.[t] ?? null;
}
function Nb(e, t) {
  return Ib.default(e, (e) => e[t] != null)?.[t] ?? null;
}
function Pb(e, t) {
  let n = [];
  for (let r of e) n.push(...(t.get(r) ?? Lb));
  return n.length > 0 ? n : Lb;
}
function Fb(e) {
  let t = new Map();
  for (let n of e)
    switch (n.method) {
      case "item/commandExecution/requestApproval":
      case "item/fileChange/requestApproval":
      case "item/permissions/requestApproval":
      case "item/tool/requestOptionPicker":
      case "item/tool/requestUserInput":
      case "item/tool/requestSetupCodexContextPicker": {
        let e = t.get(n.params.turnId);
        if (e != null) {
          e.push(n);
          continue;
        }
        t.set(n.params.turnId, [n]);
        continue;
      }
      case "attestation/generate":
      case "account/chatgptAuthTokens/refresh":
      case "applyPatchApproval":
      case "currentTime/read":
      case "execCommandApproval":
      case "item/plan/requestImplementation":
      case "item/tool/call":
      case "mcpServer/elicitation/request":
        continue;
    }
  return t;
}
var Ib,
  Lb,
  Rb,
  zb,
  Bb,
  localConversationVisibleTurnEntriesSignal,
  initLocalConversationTurnSelectors = once(() => {
    Ib = toEsModule(gi(), 1);
    c();
    nt();
    r();
    o();
    sb();
    Ge();
    Sb();
    Lb = [];
    Rb = [];
    zb = {
      conversationTurns: Rb,
      hasInheritedParentTurns: false,
      hasRenderableTurns: false,
      hasUserMessage: false,
      latestVisibleTurnId: null,
      visibleTurnEntries: [],
    };
    Bb = /^(.*)-berry-display-(\d+)$/;
    localConversationVisibleTurnEntriesSignal = Rn(
      ut,
      ({ conversationId, isBackgroundSubagentsEnabled }, { get }) => {
        let r = get(Mt, conversationId) ?? false,
          i = get(Kr, conversationId) ?? Lb;
        get(s, conversationId);
        let a = get(pr, conversationId) ?? "needs_resume",
          o = isBackgroundSubagentsEnabled
            ? (get(oi, conversationId) ?? null)
            : null,
          c = get(An, "209459230"),
          l = c ? get(kn, conversationId) : null,
          u = c ? (o == null ? Rb : get(kn, o)) : null,
          d = l != null && u != null;
        return Eb({
          conversationRequests: i,
          mergeBerryDisplayTurnsForPIA: false,
          preserveServerUserMessages: false,
          conversationResumeState: a,
          conversationTurns: d ? l : (get(I, conversationId) ?? Rb),
          hasConversation: r,
          isBackgroundSubagentsEnabled,
          parentConversationTurns: d ? u : (get(I, o) ?? Rb),
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
function Gb({ followMode = "static" } = {}) {
  return {
    followMode,
  };
}
function Kb(e, t) {
  switch (t.type) {
    case "latest_turn_follow_content_changed":
      return t.latestTurnPhase !== "prework" || e.followMode !== "prework_watch"
        ? e
        : t.followContentOverflowPx > 0
          ? Yb(e, "prework_follow")
          : e;
    case "latest_turn_phase_changed": {
      let n = e;
      return (
        t.previousLatestTurnPhase !== "prework" &&
          t.latestTurnPhase === "prework" &&
          (n.followMode === "static" && (n = Yb(n, "prework_watch")),
          n.followMode === "user_follow" && (n = Yb(n, "prework_follow"))),
        t.previousLatestTurnPhase === "prework" &&
          t.latestTurnPhase === "final_answer" &&
          (n = Yb(
            n,
            n.followMode === "prework_follow" ? "user_follow" : "static",
          )),
        t.previousLatestTurnPhase !== "idle" &&
          t.latestTurnPhase === "idle" &&
          n.followMode !== "user_follow" &&
          (n = Yb(n, "static")),
        n
      );
    }
    case "latest_turn_placed":
      return Yb(e, "static");
    case "latest_turn_removed":
      return Yb(e, "static");
    case "scroll_distance_changed":
      return t.distanceFromBottomPx <= 24
        ? e
        : e.followMode === "prework_follow"
          ? Yb(e, "prework_watch")
          : e.followMode === "user_follow"
            ? Yb(
                e,
                t.latestTurnPhase === "prework" ? "prework_watch" : "static",
              )
            : e;
    case "scroll_to_bottom":
      return Yb(
        e,
        t.latestTurnPhase === "prework" ? "prework_follow" : "user_follow",
      );
  }
}
function qb(e) {
  return e === "static" || e === "prework_watch";
}
function Jb(e) {
  if (e.status !== "inProgress") return "idle";
  let t = false;
  for (let n of e.items)
    if (n.type === "agentMessage") {
      if (n.phase === "commentary") {
        t = true;
        continue;
      }
      return "final_answer";
    }
  return t || e.firstTurnWorkItemStartedAtMs != null
    ? "prework"
    : e.finalAssistantStartedAtMs == null
      ? "idle"
      : "final_answer";
}
function Yb(e, t) {
  return e.followMode === t
    ? e
    : {
        ...e,
        followMode: t,
      };
}
var Xb = once(() => {
  nd();
});
function Zb({ entry, latestTurnFollowContentRef }) {
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
    onSetCollapsedForTurn: _,
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
  let M = Y((e) => {
      turnId != null && _?.(turnId, e);
    }),
    N = turnId == null || _ == null ? undefined : M,
    P = ex.useMemo(
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
      fallback: (e) => (
        <Qb
          onRetry={() => {
            e.resetError();
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
          parentThreadAttachment={P}
          resolvedApps={resolvedApps}
          onEditLastTurnMessage={onEditLastTurnMessage}
          onForkTurnMessage={onForkTurnMessage}
          completedThreadGoal={completedThreadGoal}
          generatedImages={generatedImages}
          isCollapsed={isCollapsed}
          onSetCollapsed={N}
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
function Qb(e) {
  let { onRetry } = e,
    r = (
      <div className="mb-2 font-medium text-token-text-primary">
        <FormattedMessage
          id="localConversation.turnRenderError.title"
          defaultMessage="This turn couldn't render"
          description="Error message shown when an individual conversation turn fails to render"
        />
      </div>
    );
  let i = (
    <FormattedMessage
      id="localConversation.turnRenderError.retry"
      defaultMessage="Try again"
      description="Button label to retry rendering a failed conversation turn"
    />
  );
  return (
    <div className="rounded-lg border border-token-border bg-token-main-surface-primary px-4 py-3 text-sm text-token-text-secondary">
      {r}
      {tx.jsx(k, {
        color: "secondary",
        size: "default",
        onClick: onRetry,
        children: i,
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
function rx({
  entries,
  RowComponent,
  onApiChange,
  onVisibleContentReady,
  className,
  gapPx = bx,
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
  let h = ad(),
    g = nr(),
    [_, v] = _x.useState(initialRestoreState?.turnHeightsByKey ?? Cx),
    [y, b] = _x.useState(null),
    [x, C] = _x.useState(() => {
      let t = ux(getBottomScrollPaddingPx);
      return ax(
        entries,
        dx(h.getLastScrollDistanceFromBottomPx(), t),
        gapPx,
        initialRestoreState,
      );
    }),
    [w, T] = _x.useState(null),
    E = _x.useRef(null),
    D = _x.useRef(_),
    O = _x.useRef(x),
    k = _x.useRef(new Map()),
    A = _x.useRef(new Map()),
    j = _x.useRef(new Map()),
    M = _x.useRef(new Map()),
    N = _x.useRef(new Map()),
    P = _x.useRef(null),
    F = _x.useRef(null),
    I = _x.useRef(null),
    L = _x.useRef(false),
    R = _x.useMemo(
      () =>
        Xu({
          entries,
          gapPx,
          measuredHeightsByKey: _,
        }),
      [entries, gapPx, _],
    ),
    z = _x.useRef(R),
    ee = _x.useRef(null),
    B = x.renderedRange;
  if (w != null) {
    let e = Yu({
      layout: R,
      turnKey: w.turnKey,
      viewportHeightPx: x.viewportHeightPx,
    });
    e != null &&
      (B = Ku({
        distanceFromBottomPx: e,
        layout: R,
        overscanCount: Sx,
        viewportHeightPx: x.viewportHeightPx,
      }));
  } else if (!lx(x.turnKeys, R.turnKeys)) {
    let e = x.turnKeys[x.renderedRange.startIndex];
    e != null &&
      (B =
        Gu({
          anchorKey: e,
          layout: R,
          previousRange: B,
        }) ?? B);
  }
  let V = Y(() => {
      P.current ?? restoreScrollDistanceFromBottomPx?.();
    }),
    te = Y((e) => {
      e.latestTurnHeightChange != null &&
        onLatestTurnHeightChange?.(e.latestTurnHeightChange);
      e.restoreScrollDistanceFromBottom
        ? V()
        : e.scrollDistanceFromBottomPx != null &&
          h.scrollToDistanceFromBottomPx(
            e.scrollDistanceFromBottomPx,
            "instant",
          );
    }),
    ne = Y((e, t) => {
      if (P.current != null) return;
      let n = ox({
        current: O.current,
        distanceFromBottomPx: e,
        layout: R,
        viewportHeightPx: t,
      });
      n !== O.current && ((O.current = n), C(n));
    }),
    re = Y((e, t, n) => {
      if (onViewportChange == null) return;
      let r = Math.max(0, Math.min(R.totalHeightPx, R.totalHeightPx - e)),
        i = Math.max(0, r - t),
        a =
          n == null
            ? r
            : Math.max(0, Math.min(R.totalHeightPx, R.totalHeightPx - n)),
        o = Math.max(0, a - t);
      onViewportChange({
        target:
          n == null
            ? null
            : i < o
              ? {
                  originPx: o,
                  targetPx: i,
                }
              : r > a
                ? {
                    originPx: a,
                    targetPx: r,
                  }
                : null,
        viewportEndPx: r,
        viewportStartPx: i,
      });
    }),
    ie = Y((e) => {
      queueMicrotask(() => {
        E.current === e && (e.complete(), (E.current = null));
        T((t) => (t === e ? null : t));
      });
    }),
    H = Y(
      (e, t) => (
        E.current?.complete(),
        new Promise((n) => {
          let r = {
            complete: n,
            getTargetElement: t,
            turnKey: e,
          };
          E.current = r;
          T(r);
        })
      ),
    ),
    ae = Y(() => {
      let e = 0,
        t = null;
      for (let [n, r] of M.current) {
        e += r;
        (t == null ||
          t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) &&
          (t = n);
      }
      t != null &&
        onLatestTurnHeightChange?.({
          heightDeltaPx: null,
          heightPx: null,
          bottomViewportOverflowPx: mx({
            scrollElement: h.getScrollElement(),
            turnElement: t,
            windowZoom: g,
          }),
          turnElement: t,
          followContentHeightPx: e,
        });
    }),
    U = Y((t, n = true) => {
      let r = P.current,
        i = D.current,
        s = i,
        u = 0,
        d = false,
        f = null,
        p = 0,
        m = 0,
        _ = h.getLastScrollDistanceFromBottomPx(),
        y = ux(getBottomScrollPaddingPx),
        b = dx(_, y),
        x = preserveMeasuredTurnViewport
          ? null
          : (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null),
        S = r == null ? b : O.current.distanceFromBottomPx;
      for (let [e, { element: n, firstHeightPx: r, heightPx: a }] of t) {
        let t = A.current.get(e);
        if (t !== n) continue;
        let o = Math.max(1, a),
          h = i[e];
        if (h === o) continue;
        s === i &&
          (s = {
            ...i,
          });
        s[e] = o;
        let g = o - (h ?? Math.max(1, r)),
          _ = R.turnIndexByKey.get(e);
        if (_ == null) continue;
        let v = _ === R.turnKeys.length - 1;
        v && ((d = true), (u += g), (f = t));
        let y = o - (R.heightsPx[_] ?? o);
        p += y;
        let b = R.bottomOffsetsPx[_] ?? 0;
        y !== 0 &&
          b <= S &&
          (preserveMeasuredTurnViewport ||
            (getPendingRestoreScrollDistanceFromBottomPx != null && !v)) &&
          (m += y);
      }
      if (s === i) return false;
      let w = preserveMeasuredTurnViewport && fx(_, y),
        T = r?.restoreScrollDistanceFromBottom || x != null,
        E = null;
      T ||
        (E = w
          ? 0
          : m === 0
            ? (r?.scrollDistanceFromBottomPx ?? null)
            : (r?.scrollDistanceFromBottomPx ?? _) + m);
      let k = O.current.distanceFromBottomPx;
      T ? (k = x ?? k) : E != null && (k = dx(E, y));
      let j = Xu({
        entries,
        gapPx,
        measuredHeightsByKey: s,
      });
      ee.current ??= R;
      let M = ox({
          current: O.current,
          distanceFromBottomPx: k,
          layout: j,
          viewportHeightPx: O.current.viewportHeightPx,
        }),
        N = r?.latestTurnHeightChange,
        F = f ?? N?.turnElement ?? null,
        I = {
          latestTurnHeightChange:
            d || N != null
              ? {
                  heightDeltaPx: (N?.heightDeltaPx ?? 0) + u,
                  heightPx: j.heightsPx.at(-1) ?? null,
                  bottomViewportOverflowPx: mx({
                    scrollElement: h.getScrollElement(),
                    turnElement: F,
                    windowZoom: g,
                  }),
                  turnElement: F,
                  followContentHeightPx: null,
                }
              : null,
          restoreScrollDistanceFromBottom: T,
          scrollDistanceFromBottomPx: E,
          turnHeightsByKey: s,
        },
        L = () => {
          D.current = s;
          v(s);
          M !== O.current && ((O.current = M), C(M));
        };
      return (
        (P.current = I),
        preserveMeasuredTurnViewport &&
          p !== 0 &&
          m === 0 &&
          !w &&
          !T &&
          h.preserveScrollPositionForNextLayout(),
        n ? vx.flushSync(L) : L(),
        true
      );
    }),
    oe = Y(() => {
      if (I.current != null) return I.current;
      let e = false,
        t = new ResizeObserver((t) => {
          let n = N.current;
          for (let r of t) {
            let t = k.current.get(r.target);
            if (t == null) continue;
            let { height } = _l(r);
            switch (t.kind) {
              case "turn": {
                let e = n.get(t.turnKey);
                e == null || e.element !== r.target
                  ? n.set(t.turnKey, {
                      element: r.target,
                      firstHeightPx: height,
                      heightPx: height,
                    })
                  : (e.heightPx = height);
                break;
              }
              case "latest-turn-follow-content":
                M.current.set(t.element, height);
                e = true;
                break;
            }
          }
          F.current ??= window.requestAnimationFrame(() => {
            F.current = null;
            let t = N.current;
            N.current = new Map();
            let n = e;
            e = false;
            U(t);
            n && ae();
          });
        });
      return ((I.current = t), t);
    }),
    se = Y((e, t) => {
      if (t == null) return;
      k.current.set(t, {
        kind: "turn",
        turnKey: e,
      });
      A.current.set(e, t);
      j.current.set(e, t);
      let n = oe();
      return (
        n.observe(t),
        () => {
          n.unobserve(t);
          k.current.delete(t);
          j.current.get(e) === t && j.current.delete(e);
          A.current.get(e) === t && A.current.delete(e);
        }
      );
    }),
    ce = Y(() => {
      let t = entries.at(-1)?.turnKey;
      if (t == null) return;
      let n = A.current.get(t);
      if (n == null) return;
      let r = n.offsetHeight;
      r <= 0 ||
        U(
          new Map([
            [
              t,
              {
                element: n,
                firstHeightPx: r,
                heightPx: r,
              },
            ],
          ]),
          false,
        );
    }),
    le = Y((e) => {
      if (e == null) return;
      k.current.set(e, {
        element: e,
        kind: "latest-turn-follow-content",
      });
      M.current.set(e, 0);
      let t = oe();
      return (
        t.observe(e),
        () => {
          t.unobserve(e);
          k.current.delete(e);
          M.current.delete(e);
        }
      );
    });
  return (
    _x.useLayoutEffect(() => {
      let e = j.current;
      if (e.size === 0) return;
      j.current = new Map();
      let t = new Map();
      for (let [n, r] of e) {
        if (A.current.get(n) !== r) continue;
        let e = r.offsetHeight;
        e > 0 &&
          t.set(n, {
            element: r,
            firstHeightPx: e,
            heightPx: e,
          });
      }
      if (t.size > 0 && U(t, false))
        for (let [t, n] of e) A.current.get(t) === n && j.current.set(t, n);
    }),
    _x.useLayoutEffect(() => {
      latestTurnSynchronousMeasurementKey != null && ce();
    }, [latestTurnSynchronousMeasurementKey, ce]),
    _x.useLayoutEffect(() => {
      let e = P.current;
      e == null || e.turnHeightsByKey !== _ || ((P.current = null), te(e));
    }, [te, _]),
    _x.useEffect(() => {
      if (onApiChange != null)
        return (
          onApiChange({
            scrollToKey: H,
          }),
          () => {
            onApiChange(null);
          }
        );
    }, [onApiChange, H]),
    _x.useEffect(() => {
      if (
        onVisibleContentReady == null ||
        L.current ||
        y == null ||
        (entries.length > 0 && A.current.size === 0)
      )
        return;
      let t = null,
        n = window.requestAnimationFrame(() => {
          t = window.requestAnimationFrame(() => {
            L.current = true;
            V();
            onVisibleContentReady();
          });
        });
      return () => {
        window.cancelAnimationFrame(n);
        t != null && window.cancelAnimationFrame(t);
      };
    }, [entries.length, onVisibleContentReady, V, y]),
    _x.useEffect(() => {
      let e = k.current,
        t = A.current,
        n = M.current;
      return () => {
        I.current?.disconnect();
        I.current = null;
        F.current != null &&
          (window.cancelAnimationFrame(F.current), (F.current = null));
        e.clear();
        t.clear();
        j.current.clear();
        n.clear();
        P.current = null;
        E.current?.complete();
        E.current = null;
      };
    }, []),
    _x.useLayoutEffect(() => {
      if (onRestoreStateChange != null)
        return () => {
          onRestoreStateChange(
            px(D.current, O.current.turnKeys, O.current.renderedRange),
          );
        };
    }, [onRestoreStateChange]),
    _x.useLayoutEffect(() => {
      let e = h.getScrollElement();
      if (e == null) return;
      let t = () => e.clientHeight || O.current.viewportHeightPx || xx,
        n = h.addScrollListener((e) => {
          ne(dx(e, ux(getBottomScrollPaddingPx)), t());
        }),
        r = h.addUserScrollListener((e, n) => {
          re(
            dx(e, ux(getBottomScrollPaddingPx)),
            t(),
            n == null ? undefined : dx(n, ux(getBottomScrollPaddingPx)),
          );
        }),
        i = new ResizeObserver((e) => {
          let t = e[0];
          if (t == null) return;
          let { height } = _l(t);
          ne(O.current.distanceFromBottomPx, height);
          V();
        });
      return (
        i.observe(e),
        () => {
          n();
          r();
          i.disconnect();
        }
      );
    }, [getBottomScrollPaddingPx, re, V, h, ne]),
    _x.useLayoutEffect(() => {
      if (w == null) return;
      let e = h.getScrollElement();
      if (e == null) return;
      let t = N.current,
        n = new Map();
      for (let [e, r] of A.current) {
        let i = r.offsetHeight;
        if (i > 0) {
          let a = t.get(e);
          n.set(e, {
            element: r,
            firstHeightPx: a?.element === r ? a.firstHeightPx : i,
            heightPx: i,
          });
        }
      }
      if ((t.clear(), U(n, false) || P.current != null)) return;
      let r = A.current.get(w.turnKey),
        i = r == null ? null : (w.getTargetElement?.(r) ?? r),
        a =
          r == null || i == null
            ? Yu({
                layout: R,
                turnKey: w.turnKey,
                viewportHeightPx: e.clientHeight,
              })
            : hx({
                layout: R,
                targetElement: i,
                turnElement: r,
                turnKey: w.turnKey,
                viewportHeightPx: e.clientHeight,
                windowZoom: g,
              });
      if (a == null) {
        ie(w);
        return;
      }
      h.scrollToDistanceFromBottomPx(
        a + ux(getBottomScrollPaddingPx),
        "instant",
      );
      ne(a, e.clientHeight);
      ie(w);
    }, [U, R, w, h, ie, getBottomScrollPaddingPx, ne, g]),
    _x.useLayoutEffect(() => {
      if (P.current != null) return;
      let e = z.current,
        t = ee.current ?? R;
      if (
        ((ee.current = null),
        (z.current = R),
        !preserveMeasuredTurnViewport || w != null || e === t)
      )
        return;
      let n = ux(getBottomScrollPaddingPx),
        r = h.getLastScrollDistanceFromBottomPx(),
        i = dx(r, n);
      if (
        (getPendingRestoreScrollDistanceFromBottomPx?.() ?? null) != null ||
        fx(r, n)
      )
        return;
      let a = cx({
        distanceFromBottomPx: i,
        layout: e,
        measuredHeightsByKey: D.current,
        nextLayout: t,
        viewportHeightPx: O.current.viewportHeightPx,
      });
      if (a == null) return;
      let s = qu({
        anchorKey: a,
        distanceFromBottomPx: i,
        nextLayout: t,
        previousLayout: e,
      });
      s == null ||
        s === i ||
        (ne(s, O.current.viewportHeightPx),
        h.scrollToDistanceFromBottomPx(s + n, "instant"));
    }, [
      getBottomScrollPaddingPx,
      getPendingRestoreScrollDistanceFromBottomPx,
      R,
      w,
      preserveMeasuredTurnViewport,
      h,
      ne,
    ]),
    _x.useLayoutEffect(() => {
      w ??
        (ne(O.current.distanceFromBottomPx, O.current.viewportHeightPx), V());
    }, [entries.length, w, V, ne]),
    (
      <div
        ref={b}
        className={S("relative shrink-0", className)}
        style={{
          height: `${R.totalHeightPx}px`,
        }}
      >
        <div
          className="flex flex-col"
          style={{
            gap: `${gapPx}px`,
            marginTop: `${R.topOffsetsPx[B.startIndex] ?? 0}px`,
          }}
        >
          {entries.slice(B.startIndex, B.endIndex).map((item, index) => {
            let i = B.startIndex + index;
            return yx.jsx(
              wx,
              {
                entry: item,
                latestTurnFollowContentRef:
                  i === entries.length - 1 && onLatestTurnHeightChange != null
                    ? le
                    : undefined,
                RowComponent,
                constrainedHeightPx:
                  i !== entries.length - 1 &&
                  w?.turnKey !== item.turnKey &&
                  _[item.turnKey] == null
                    ? R.heightsPx[i]
                    : undefined,
                observeTurnElement: se,
              },
              item.turnKey,
            );
          })}
        </div>
      </div>
    )
  );
}
function ix(e) {
  let {
      entry,
      latestTurnFollowContentRef,
      RowComponent,
      constrainedHeightPx,
      observeTurnElement,
    } = e,
    { turnKey } = entry,
    c = (e) => observeTurnElement(turnKey, e);
  let l = Y(c),
    u =
      constrainedHeightPx == null
        ? undefined
        : {
            height: constrainedHeightPx,
            overflow: "hidden",
          };
  let d = (
    <RowComponent
      entry={entry}
      latestTurnFollowContentRef={latestTurnFollowContentRef}
    />
  );
  let f = (
    <div
      ref={l}
      className="[&_[data-virtualized-turn-content]]:[content-visibility:visible]"
      data-turn-key={turnKey}
    >
      {d}
    </div>
  );
  return <div style={u}>{f}</div>;
}
function ax(e, t, n, r) {
  let i = Xu({
      entries: e,
      gapPx: n,
      measuredHeightsByKey: r?.turnHeightsByKey ?? Cx,
    }),
    a = xx,
    o = Math.min(t, i.totalHeightPx),
    s = Ku({
      distanceFromBottomPx: o,
      layout: i,
      overscanCount: Sx,
      viewportHeightPx: a,
    });
  return {
    distanceFromBottomPx: o,
    renderedRange:
      (r?.renderedWindow == null
        ? null
        : Gu({
            anchorKey: r.renderedWindow.anchorKey,
            layout: i,
            previousRange: {
              startIndex: 0,
              endIndex: Math.min(
                r.renderedWindow.count,
                s.endIndex - s.startIndex,
              ),
            },
          })) ?? s,
    turnKeys: i.turnKeys,
    viewportHeightPx: a,
  };
}
function ox({ current, distanceFromBottomPx, layout, viewportHeightPx }) {
  let i = Math.min(distanceFromBottomPx, layout.totalHeightPx),
    a = Ku({
      distanceFromBottomPx: i,
      layout,
      overscanCount: Sx,
      viewportHeightPx,
    }),
    o = sx(current.renderedRange, a) ? current.renderedRange : a;
  return current.distanceFromBottomPx === i &&
    current.viewportHeightPx === viewportHeightPx &&
    current.renderedRange.startIndex === o.startIndex &&
    current.renderedRange.endIndex === o.endIndex &&
    lx(current.turnKeys, layout.turnKeys)
    ? current
    : {
        distanceFromBottomPx: i,
        renderedRange: o,
        turnKeys: layout.turnKeys,
        viewportHeightPx,
      };
}
function sx(e, t) {
  return e.startIndex <= t.startIndex && e.endIndex >= t.endIndex;
}
function cx({
  distanceFromBottomPx,
  layout,
  measuredHeightsByKey,
  nextLayout,
  viewportHeightPx,
}) {
  let a = Ku({
    distanceFromBottomPx,
    layout,
    overscanCount: 0,
    viewportHeightPx,
  });
  for (let e = a.startIndex; e < a.endIndex; e += 1) {
    let i = layout.turnKeys[e];
    if (
      i != null &&
      measuredHeightsByKey[i] != null &&
      nextLayout.turnIndexByKey.has(i)
    )
      return i;
  }
  return null;
}
function lx(e, t) {
  return (
    e === t ||
    (e.length === t.length && e.every((item, index) => item === t[index]))
  );
}
function ux(e) {
  return Math.max(0, e?.() ?? 0);
}
function dx(e, t) {
  return Math.max(0, e - t);
}
function fx(e, t) {
  return e <= (t > 0 ? 0 : 24);
}
function px(e, t, n) {
  let r = {};
  for (let n of t) {
    let t = e[n];
    t != null && (r[n] = t);
  }
  let i = t[n.startIndex];
  return Object.keys(r).length === 0 || i == null
    ? null
    : {
        renderedWindow: {
          anchorKey: i,
          count: n.endIndex - n.startIndex,
        },
        turnHeightsByKey: r,
      };
}
function mx({ scrollElement, turnElement, windowZoom }) {
  return scrollElement == null || turnElement == null
    ? 0
    : Je(
        turnElement.getBoundingClientRect().bottom -
          scrollElement.getBoundingClientRect().bottom,
        windowZoom,
      );
}
function hx({
  layout,
  targetElement,
  turnElement,
  turnKey,
  windowZoom,
  viewportHeightPx,
}) {
  let o = layout.turnIndexByKey.get(turnKey);
  if (o == null) return null;
  let s = turnElement.getBoundingClientRect(),
    c = targetElement.getBoundingClientRect(),
    l = Je(c.top - s.top, windowZoom),
    u = Je(c.height, windowZoom);
  return Math.max(
    0,
    (layout.bottomOffsetsPx[o] ?? 0) +
      (layout.heightsPx[o] ?? 0) -
      l -
      u / 2 -
      viewportHeightPx / 2,
  );
}
var gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
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
    bx = 12;
    xx = 800;
    Sx = 2;
    Cx = {};
    wx = _x.memo(ix);
  });
function Ex({
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
  let u = B(ut),
    d = nr(),
    f = entries.at(-1),
    m = f?.turnKey ?? null,
    h = f == null ? null : Px(f),
    g = f == null ? "idle" : Jb(f.turn),
    _ = f?.turn.status === "inProgress",
    v = u.get(Ub, conversationId),
    y = v?.latestTurn?.turnKey === m ? v.latestTurn : null,
    b = Xe(0),
    x = Xe(0),
    S = ad(),
    C = Lx.useRef(
      Gb({
        followMode: y?.followMode ?? "static",
      }),
    ),
    w = Lx.useRef(y != null && qb(y.followMode) ? y.latestTurnHeightPx : null),
    T = Lx.useRef(y?.latestTurnHeightPx ?? null),
    D = Lx.useRef(y?.latestTurnFollowContentHeightPx ?? null),
    O = Lx.useRef(false),
    k = Lx.useRef(initialScrollOffset),
    A = Lx.useRef(initialVirtualizedTurnListRestoreState),
    j = Lx.useRef(null),
    M = Lx.useRef(false),
    N = Lx.useRef(m),
    P = Lx.useRef(h),
    F = Lx.useRef(y?.latestTurnPhase ?? g),
    I = Lx.useRef(g),
    L = Lx.useRef(y?.isLatestTurnInProgress ?? _),
    R = Lx.useRef(_),
    z = Lx.useMemo(
      () => ({
        turnKey: f?.turnKey ?? null,
        yPx: x,
      }),
      [f?.turnKey, x],
    ),
    ee = Lx.useMemo(() => {
      let e = (e) => Math.max(0, e - b.get());
      return {
        ...S,
        addScrollListener: (t) =>
          S.addScrollListener((n) => {
            t(e(n));
          }),
        addUserScrollListener: (t) =>
          S.addUserScrollListener((n, r) => {
            t(e(n), r == null ? undefined : e(r));
          }),
        getLastScrollDistanceFromBottomPx: () =>
          e(S.getLastScrollDistanceFromBottomPx()),
        scrollToDistanceFromBottomPx: (e, t) => {
          S.scrollToDistanceFromBottomPx(e + b.get(), t);
        },
      };
    }, [b, S]);
  I.current = g;
  R.current = _;
  N.current = m;
  let V = Y((e, t = false) => {
      let n = C.current.followMode;
      C.current = Kb(C.current, e);
      let { followMode } = C.current;
      return (
        (t || followMode !== n) &&
          S.setFooterResizeViewportPreserveDisabled(
            R.current && qb(followMode),
          ),
        C.current
      );
    }),
    te = Y(() => {
      let { followMode } = C.current;
      S.setFooterResizeViewportPreserveDisabled(R.current && qb(followMode));
    }),
    ne = Y(() => {
      let e = k.current;
      return O.current || e == null || C.current.followMode === "prework_follow"
        ? null
        : Math.max(0, e - b.get());
    }),
    re = Y(() => {
      if (O.current) return;
      let e = k.current;
      if (e == null || C.current.followMode === "prework_follow") {
        O.current = true;
        return;
      }
      let t = S.getScrollElement();
      if (t != null) {
        if (Math.abs(Le(t) - e) <= 24) {
          O.current = true;
          return;
        }
        S.scrollToDistanceFromBottomPx(e, "instant");
        Math.abs(Le(t) - e) <= 24 && (O.current = true);
      }
    }),
    ie = Y((e) => {
      A.current = e;
      onVirtualizedTurnListRestoreStateChange(e);
    });
  Lx.useLayoutEffect(
    () => (
      te(),
      () => {
        let t = N.current,
          n = S.getScrollElement(),
          r = jx({
            distanceFromBottomPx:
              n == null ? S.getLastScrollDistanceFromBottomPx() : Le(n),
            latestTurnPhase: I.current,
            responseSpacerHeightPx: b.get(),
            scrollPaddingBottomPx: n == null ? 0 : Nx(n),
            scrollState: C.current,
          });
        u.set(Ub, conversationId, {
          distanceFromBottomPx: r.distanceFromBottomPx,
          latestTurn:
            t == null
              ? null
              : {
                  turnKey: t,
                  isLatestTurnInProgress: R.current,
                  latestTurnPhase: I.current,
                  ...r.scrollState,
                  latestTurnHeightPx: qb(r.scrollState.followMode)
                    ? T.current
                    : null,
                  latestTurnFollowContentHeightPx: D.current,
                },
          virtualizedTurnList: A.current,
        });
        S.setFooterResizeViewportPreserveDisabled(false);
      }
    ),
    [conversationId, b, u, S, te],
  );
  let H = Y(() => {
      b.stop();
      b.set(0);
      M.current = false;
    }),
    ae = Y(() => {
      O.current = true;
      x.stop();
      x.set(0);
      H();
      onResponseSpacerStateChange(null);
      S.scrollToDistanceFromBottomPx(0, "instant");
    }),
    U = Y(() => {
      if (((O.current = true), R.current)) {
        x.stop();
        x.set(0);
        H();
        V(
          {
            type: "scroll_to_bottom",
            latestTurnPhase: I.current,
          },
          true,
        );
        S.scrollToDistanceFromBottomPx(0, "instant");
        return;
      }
      if (I.current === "idle" && b.get() > 24) {
        ae();
        return;
      }
      S.scrollToBottom();
    }),
    oe = Y((e) => {
      let t = b.get(),
        n = e <= 24 ? 0 : Math.min(t, e);
      if (t - n <= 24) return;
      let r = S.getScrollElement(),
        i = r == null ? 0 : Le(r),
        o = n - t;
      x.stop();
      x.set(0);
      b.stop();
      b.set(n);
      n <= 24 && onResponseSpacerStateChange(null);
      r != null &&
        S.scrollToDistanceFromBottomPx(Math.max(0, i + o), "instant");
    }),
    se = Y((e, t) => {
      O.current = true;
      let n = b.get();
      if (e <= 24) {
        (n <= 24 || M.current) &&
          t != null &&
          t > 24 &&
          R.current &&
          (V(
            {
              type: "scroll_to_bottom",
              latestTurnPhase: I.current,
            },
            true,
          ),
          S.scrollToDistanceFromBottomPx(0, "instant"));
        return;
      }
      if (!R.current && I.current === "idle" && n > 24) {
        oe(n - e);
        return;
      }
      if (
        R.current &&
        I.current === "prework" &&
        t != null &&
        e > t &&
        n > 24 &&
        e > n
      ) {
        let t = e - n;
        x.stop();
        x.set(0);
        H();
        S.scrollToDistanceFromBottomPx(t, "instant");
        return;
      }
    });
  Lx.useLayoutEffect(() => S.addUserScrollListener(se), [se, S]);
  Lx.useLayoutEffect(() => {
    let e = S.getScrollElement(),
      t = j.current;
    if (e == null || t == null || typeof IntersectionObserver > "u") return;
    let n = new IntersectionObserver(
      (t) => {
        let n = t[t.length - 1];
        if (n == null) return;
        let r = n.intersectionRect.height;
        if (R.current) {
          M.current = Math.max(0, r - Nx(e)) <= 24;
          return;
        }
        oe(Math.min(r, b.get() - Le(e)));
      },
      {
        root: e,
        threshold: Hx,
      },
    );
    return (
      n.observe(t),
      () => {
        n.disconnect();
      }
    );
  }, [b, S, oe]);
  Lx.useLayoutEffect(() => {
    if (h == null) {
      onResponseSpacerStateChange(null);
      return;
    }
    return (
      onResponseSpacerStateChange({
        getHeightPx: () => b.get(),
        scrollToBottom: U,
      }),
      () => {
        onResponseSpacerStateChange(null);
      }
    );
  }, [h, U, onResponseSpacerStateChange, b]);
  let ce = Y(() => {
    let e = S.getScrollElement();
    if (e == null) return;
    let t = Ax({
        scrollElementHeightPx: e.clientHeight,
        scrollPaddingBottomPx: Nx(e),
      }),
      n = b.get();
    if (n <= 24) return;
    let r = Math.min(n, t);
    if (Math.abs(r - n) <= 24) return;
    let i = r - n;
    b.stop();
    b.set(r);
    r <= 24 && onResponseSpacerStateChange(null);
    let o = Le(e),
      s = Math.max(0, o + i);
    S.scrollToDistanceFromBottomPx(s, "instant");
  });
  Lx.useLayoutEffect(() => {
    let e = S.getScrollElement();
    if (e == null) return;
    ce();
    let t = null,
      n = () => {
        t ??= window.requestAnimationFrame(() => {
          t = null;
          ce();
        });
      },
      r = typeof ResizeObserver > "u" ? null : new ResizeObserver(n);
    return (
      r?.observe(e),
      window.addEventListener("resize", n, {
        passive: true,
      }),
      () => {
        r?.disconnect();
        window.removeEventListener("resize", n);
        t != null && window.cancelAnimationFrame(t);
      }
    );
  }, [ce, S]);
  let le = Y(
      ({
        heightDeltaPx,
        heightPx,
        bottomViewportOverflowPx,
        turnElement,
        followContentHeightPx,
      }) => {
        let a = S.getScrollElement(),
          o = w.current;
        if (
          (heightPx != null && ((T.current = heightPx), (w.current = null)),
          followContentHeightPx != null && (D.current = followContentHeightPx),
          o != null &&
            a != null &&
            heightPx != null &&
            Math.abs(heightPx - o) > 24)
        ) {
          let e = heightPx - o;
          k.current != null &&
            ((O.current = false), (k.current = Math.max(0, k.current + e)));
          Ox({
            allowResponseSpacerGrowth: R.current,
            distanceDeltaPx: e,
            responseSpacerHeightPx: b,
            scrollController: S,
            scrollElement: a,
          });
        }
        if (C.current.followMode === "user_follow") {
          S.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          C.current.followMode === "prework_follow" &&
          I.current === "prework"
        ) {
          S.scrollToDistanceFromBottomPx(0, "instant");
          return;
        }
        if (
          (a != null &&
            o == null &&
            heightDeltaPx != null &&
            heightDeltaPx !== 0 &&
            qb(C.current.followMode) &&
            Ox({
              allowResponseSpacerGrowth: R.current,
              distanceDeltaPx: heightDeltaPx,
              responseSpacerHeightPx: b,
              scrollController: S,
              scrollElement: a,
            }),
          C.current.followMode === "static" ||
            I.current !== "prework" ||
            C.current.followMode !== "prework_watch" ||
            b.get() <= 24 ||
            a == null ||
            turnElement == null)
        )
          return;
        let s =
            kx({
              scrollElement: a,
              turnElement,
              fallbackBottomViewportOverflowPx: bottomViewportOverflowPx,
              windowZoom: d,
            }) + (a == null ? 0 : Nx(a)),
          c = C.current,
          l = V({
            type: "latest_turn_follow_content_changed",
            followContentOverflowPx: s,
            latestTurnPhase: I.current,
          });
        c.followMode !== "prework_follow" &&
          l.followMode === "prework_follow" &&
          (x.stop(),
          x.set(0),
          H(),
          S.scrollToDistanceFromBottomPx(0, "instant"));
      },
    ),
    ue = Y((e) => {
      if (e <= 24) return;
      let t = b.get(),
        n = S.getScrollElement(),
        r = n == null ? 0 : Nx(n);
      R.current &&
        t > 24 &&
        Mx({
          distanceFromBottomPx: e,
          responseSpacerHeightPx: t,
          scrollPaddingBottomPx: r,
        }) <= 24 &&
        (M.current = true);
      V({
        type: "scroll_distance_changed",
        distanceFromBottomPx: e,
        latestTurnPhase: I.current,
      });
    });
  return (
    Lx.useLayoutEffect(() => S.addScrollListener(ue), [ue, S]),
    Lx.useLayoutEffect(() => {
      let e = P.current,
        t = F.current,
        n = L.current;
      if (((P.current = h), (F.current = g), (L.current = _), h == null)) {
        V(
          {
            type: "latest_turn_removed",
          },
          true,
        );
        x.stop();
        x.set(0);
        H();
        return;
      }
      let r = S.getScrollElement();
      if (r == null) return;
      if (e !== h) {
        let e = consumePendingLatestTurnSubmitPlacement?.() ?? null;
        if (consumePendingLatestTurnSubmitPlacement != null && e == null)
          return;
        let t = e?.shouldPlaceLatestTurn ?? true;
        if (
          (V(
            {
              type: "latest_turn_placed",
            },
            true,
          ),
          !t)
        ) {
          if ((x.stop(), x.set(0), H(), e != null)) {
            let t =
              e.scrollHeightPx == null ? 0 : r.scrollHeight - e.scrollHeightPx;
            S.scrollToDistanceFromBottomPx(
              e.distanceFromBottomPx + t,
              "instant",
            );
          }
          return;
        }
        let n = Ax({
            scrollElementHeightPx: r.clientHeight,
            scrollPaddingBottomPx: Nx(r),
          }),
          a = b.get();
        b.stop();
        M.current = false;
        x.stop();
        x.set(a);
        S.scrollToDistanceFromBottomPx(Vx, "instant");
        E(x, 0, Ux);
        a !== n && E(b, n, Ux);
      }
      let a = C.current;
      V({
        type: "latest_turn_phase_changed",
        latestTurnPhase: g,
        previousLatestTurnPhase: t,
      });
      t === "prework" &&
        g === "final_answer" &&
        a.followMode === "prework_follow" &&
        (x.stop(), x.set(0), H(), S.scrollToDistanceFromBottomPx(0, "instant"));
      n && !_ && (x.stop(), x.set(0), b.stop());
    }, [H, consumePendingLatestTurnSubmitPlacement, _, x, h, g, b, S, V]),
    (
      <>
        <Wx value={z}>
          {Rx.jsx(od, {
            value: ee,
            children: Rx.jsx(rx, {
              entries,
              initialRestoreState: initialVirtualizedTurnListRestoreState,
              latestTurnSynchronousMeasurementKey:
                synchronouslyMeasureLatestTurnUpdates
                  ? f?.turn.items.length
                  : undefined,
              onApiChange,
              onVisibleContentReady,
              onLatestTurnHeightChange: le,
              onRestoreStateChange: ie,
              getPendingRestoreScrollDistanceFromBottomPx: ne,
              restoreScrollDistanceFromBottomPx: re,
              RowComponent: Dx,
            }),
          })}
        </Wx>
        {Rx.jsx(p.div, {
          "aria-hidden": true,
          className: "shrink-0",
          ref: j,
          style: {
            height: b,
          },
        })}
      </>
    )
  );
}
function Dx(e) {
  let { entry, latestTurnFollowContentRef } = e,
    i = Lx.useContext(Wx),
    a = i?.turnKey === entry.turnKey ? i.yPx : 0,
    o = {
      y: a,
    };
  let s = (
    <Zb entry={entry} latestTurnFollowContentRef={latestTurnFollowContentRef} />
  );
  return Rx.jsx(p.div, {
    style: o,
    children: s,
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
  let o = Le(scrollElement) + distanceDeltaPx;
  allowResponseSpacerGrowth &&
    o < 0 &&
    responseSpacerHeightPx.set(responseSpacerHeightPx.get() - o);
  scrollController.scrollToDistanceFromBottomPx(Math.max(0, o), behavior);
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
function Ax({ scrollElementHeightPx, scrollPaddingBottomPx }) {
  let n = Math.max(0, scrollElementHeightPx - scrollPaddingBottomPx);
  return Math.max(0, Math.min(n * zx, n - Bx));
}
function jx({
  distanceFromBottomPx,
  latestTurnPhase,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
  scrollState,
}) {
  return Mx({
    distanceFromBottomPx,
    responseSpacerHeightPx,
    scrollPaddingBottomPx,
  }) > 24
    ? {
        distanceFromBottomPx: 0,
        scrollState: Kb(scrollState, {
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
function Mx({
  distanceFromBottomPx,
  responseSpacerHeightPx,
  scrollPaddingBottomPx,
}) {
  return Math.max(
    0,
    responseSpacerHeightPx - distanceFromBottomPx - scrollPaddingBottomPx,
  );
}
function Nx(e) {
  let t = Number.parseFloat(
    e.style.getPropertyValue("--thread-scroll-padding-bottom"),
  );
  return Number.isFinite(t) ? t : 0;
}
function Px(e) {
  let t = Fx(e);
  return t == null ? e.turnKey : `${e.turnKey}:${t}`;
}
function Fx(e) {
  for (let t = e.turn.items.length - 1; t >= 0; --t) {
    let n = e.turn.items[t];
    if (n?.type === "steeringUserMessage") return n.restoreMessage.id;
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
function Kx({
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
  resolvedApps: _,
  showInProgressFixedContent,
  visibleSubagentParentThreadId,
  visibleTurnEntries,
}) {
  let x = new Map(previousEntries.map((item) => [item.turnKey, item])),
    S = qx({
      isBackgroundSubagentsEnabled,
      previousEntries,
      projectlessOutputDirectory,
      visibleTurnEntries,
    }),
    C = Xx.default(previousEntries[0]?.generatedImages, S)
      ? previousEntries[0].generatedImages
      : S,
    w = false,
    T = [];
  if (
    (visibleTurnEntries.forEach((item, index) => {
      let E = item.turnId,
        D;
      renderMcpApps &&
        (D =
          index >= visibleTurnEntries.length - 3 ? "auto-expand" : "default");
      let O = [
        {
          conversationId,
          cwd,
          hostId,
          isCollapsed: E == null ? undefined : collapsedTurnsById[E],
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
          generatedImages: C,
          onSetCollapsedForTurn: E == null ? undefined : onSetCollapsedForTurn,
          parentThreadAttachmentSourceConversationId:
            index === 0 &&
            hasInheritedParentTurns &&
            visibleSubagentParentThreadId != null
              ? visibleSubagentParentThreadId
              : undefined,
          preserveServerUserMessages: item.preserveServerUserMessages,
          renderMcpApps: D,
          requests: item.requests,
          resolvedApps: _,
          showInProgressFixedContent:
            showInProgressFixedContent &&
            index === visibleTurnEntries.length - 1,
          turn: item.turn,
          turnId: E,
          turnKey: item.turnSearchKey,
          turnSearchKey: item.turnSearchKey,
          isBackgroundSubagentsEnabled,
        },
      ];
      for (let e of O) {
        let t = x.get(e.turnKey);
        if (t != null && Jx(t, e)) {
          T.push(t);
          continue;
        }
        w = true;
        T.push(e);
      }
    }),
    !w && previousEntries.length !== T.length && (w = true),
    !w)
  ) {
    for (let [e, t] of T.entries())
      if (previousEntries[e] !== t) {
        w = true;
        break;
      }
  }
  return w ? T : previousEntries;
}
function qx({
  isBackgroundSubagentsEnabled,
  previousEntries,
  projectlessOutputDirectory,
  visibleTurnEntries,
}) {
  let i = previousEntries[0]?.generatedImages,
    a = 0,
    o = null;
  for (let e of previousEntries)
    if (e.turnSearchKey !== o) {
      if (((o = e.turnSearchKey), visibleTurnEntries[a]?.turn !== e.turn)) {
        a = null;
        break;
      }
      a++;
    }
  let s = [],
    c = visibleTurnEntries;
  a != null &&
    a > 0 &&
    i != null &&
    ((s = i), (c = visibleTurnEntries.slice(a)));
  let l = [
    ...s,
    ...c.flatMap(({ preserveServerUserMessages, requests, turn }) => {
      if (
        !turn.items.some(
          (item) => item.type === "imageGeneration" && item.src != null,
        )
      )
        return [];
      let a = lt(turn, requests, {
          isBackgroundSubagentsEnabled,
          preserveServerUserMessages,
        }),
        { assistantItem, toolOutputItems } = Zc(a.items, a.status),
        c = ce(
          Lt({
            assistantContent: assistantItem?.content ?? null,
            projectlessOutputDirectory,
            turn: a,
          }),
        );
      return Ts({
        completedGeneratedImages: toolOutputItems.filter(
          (item) => item.src != null,
        ),
        endResourcePaths: c,
        hasPendingGeneratedImages: false,
      }).visibleCompletedGeneratedImages;
    }),
  ];
  return Xx.default(i, l) ? i : l;
}
function Jx(e, t) {
  return (
    e.conversationId === t.conversationId &&
    e.cwd === t.cwd &&
    e.hostId === t.hostId &&
    e.isCollapsed === t.isCollapsed &&
    e.isMostRecentTurn === t.isMostRecentTurn &&
    e.isReadOnly === t.isReadOnly &&
    e.totalTurnCount === t.totalTurnCount &&
    e.turnNumber === t.turnNumber &&
    e.isProjectlessConversation === t.isProjectlessConversation &&
    e.modelProvider === t.modelProvider &&
    e.onEditLastTurnMessage === t.onEditLastTurnMessage &&
    e.onForkTurnMessage === t.onForkTurnMessage &&
    e.completedThreadGoal === t.completedThreadGoal &&
    e.generatedImages === t.generatedImages &&
    e.onSetCollapsedForTurn === t.onSetCollapsedForTurn &&
    e.parentThreadAttachmentSourceConversationId ===
      t.parentThreadAttachmentSourceConversationId &&
    e.preserveServerUserMessages === t.preserveServerUserMessages &&
    e.renderMcpApps === t.renderMcpApps &&
    e.requests === t.requests &&
    e.resolvedApps === t.resolvedApps &&
    e.showInProgressFixedContent === t.showInProgressFixedContent &&
    e.turn === t.turn &&
    e.turnId === t.turnId &&
    e.turnKey === t.turnKey &&
    e.turnSearchKey === t.turnSearchKey &&
    Yx(e.transcriptBlock, t.transcriptBlock) &&
    e.includeTranscriptTurnExtras === t.includeTranscriptTurnExtras &&
    e.isBackgroundSubagentsEnabled === t.isBackgroundSubagentsEnabled
  );
}
function Yx(event, _event) {
  return event == null || _event == null
    ? event === _event
    : event.type === _event.type && event.key === _event.key;
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
function Qx({
  isConversationHistoryComplete,
  isAppgenEndCardEnabled,
  isBackgroundSubagentsEnabled,
  modelProvider,
  projectlessOutputDirectory,
  visibleTurnEntries,
}) {
  return isConversationHistoryComplete
    ? visibleTurnEntries.flatMap((item) => {
        let a = rS.get(item.turn);
        if (
          a?.isAppgenEndCardEnabled === isAppgenEndCardEnabled &&
          a.isBackgroundSubagentsEnabled === isBackgroundSubagentsEnabled &&
          a.modelProvider === modelProvider &&
          a.preserveServerUserMessages === item.preserveServerUserMessages &&
          a.projectlessOutputDirectory === projectlessOutputDirectory &&
          a.requests === item.requests &&
          a.turnSearchKey === item.turnSearchKey
        )
          return a.items;
        let o = lt(item.turn, item.requests, {
            isBackgroundSubagentsEnabled,
            preserveServerUserMessages: item.preserveServerUserMessages,
          }),
          s = o.items,
          c = new Map(),
          l = null,
          u = "";
        for (let [e, t] of s.entries())
          t.type === "user-message"
            ? (l = e)
            : t.type === "assistant-message" &&
              ((u = t.content), l != null && c.set(l, t.content));
        let d = $x({
            assistantContent: u,
            generatedImageSources: s.flatMap((_item) =>
              _item.type === "generated-image" && _item.src != null
                ? [_item.src]
                : [],
            ),
            isAppgenEndCardEnabled,
            projectlessOutputDirectory,
            turn: o,
          }),
          f = new Map(),
          p = s.flatMap((_item, index) => {
            let r = index === l ? d : tS;
            return _item.type === "user-message"
              ? [
                  {
                    getPreview: () => ({
                      outputs: r,
                      response: c.get(index) ?? "",
                    }),
                    id: Ta(item.turnSearchKey, `${index}:user`),
                    getLabel: () => _item.message.trim(),
                    isHeartbeat: _item.heartbeatTrigger != null,
                    turnKey: f.get(_item) ?? item.turnSearchKey,
                  },
                ]
              : [];
          });
        return (
          rS.set(item.turn, {
            isAppgenEndCardEnabled,
            isBackgroundSubagentsEnabled,
            items: p,
            modelProvider,
            preserveServerUserMessages: item.preserveServerUserMessages,
            projectlessOutputDirectory,
            requests: item.requests,
            turnSearchKey: item.turnSearchKey,
          }),
          p
        );
      })
    : eS;
}
function $x({
  assistantContent,
  generatedImageSources,
  isAppgenEndCardEnabled,
  projectlessOutputDirectory,
  turn,
}) {
  let a = [],
    o = new Set(),
    s = (e) => {
      let t = `${e.type}:${e.label ?? ""}`;
      o.has(t) || (o.add(t), a.push(e));
    };
  for (let t of Lt({
    assistantContent,
    isAppgenEndCardEnabled,
    projectlessOutputDirectory,
    turn,
  }))
    switch (t.type) {
      case "appgen-app":
        s({
          label: t.title,
          type: "app",
        });
        break;
      case "file":
        s({
          label: wt(t.path),
          type: "file",
        });
        break;
      case "google-drive":
        s({
          label: t.title,
          type: "google-drive",
        });
        break;
      case "website":
        s({
          label: null,
          type: "website",
        });
        break;
    }
  for (let e of turn.artifacts.editedFilePaths)
    s({
      label: wt(e),
      type: "file",
    });
  for (let e of generatedImageSources)
    s(
      Ft(e)
        ? {
            label: wt(e),
            type: "file",
          }
        : {
            label: null,
            type: "image",
          },
    );
  for (let t of Nr(assistantContent))
    switch (t.type) {
      case "commit":
        s({
          label: null,
          type: "commit",
        });
        break;
      case "create-pr":
        s({
          label: null,
          type: "pull-request",
        });
        break;
      case "create-branch":
      case "push":
      case "stage":
        break;
    }
  return a.sort((e, t) => nS[e.type] - nS[t.type]);
}
var eS,
  tS,
  nS,
  rS,
  iS = once(() => {
    gn();
    la();
    zn();
    di();
    Ge();
    Jt();
    eS = [];
    tS = [];
    nS = {
      app: 0,
      website: 0,
      "google-drive": 1,
      file: 1,
      image: 1,
      commit: 2,
      "pull-request": 2,
      review: 2,
    };
    rS = new WeakMap();
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
function dS(e) {
  let { status } = e,
    r = pS.jsx(rr, {
      className: "icon-xs",
    });
  return (
    <div
      aria-live="polite"
      className="flex items-center justify-center gap-2 px-4 py-1 text-sm text-token-text-secondary"
      role="status"
    >
      {r}
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
function useMarkConversationReadOnVisibility(e, t) {
  let r = K(R, e) ?? false,
    i = W(xo),
    a = K($t, e),
    o = K(we, e),
    s = _S.useRef(null),
    c = _S.useRef(null),
    l = _S.useRef(null),
    u = () => {
      s.current = e;
      c.current = o;
      l.current = a;
      !(!t || !r) &&
        Dr("mark-conversation-as-read", {
          conversationId: e,
        });
    };
  let d = Y(u),
    f = () => {
      d();
    };
  let p = _S.useEffectEvent(f),
    m = () => {
      if (!(!t || i !== true)) {
        if (s.current !== e) {
          p();
          return;
        }
        (c.current === o && l.current === a) || p();
      }
    };
  let h;
  return ((h = [e, t, r, i, o, a]), _S.useEffect(m, h), d);
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
function useResumeLocalConversation(e) {
  let t = B(ut),
    n = ur(),
    { activeMode } = Us(e),
    { data } = W(gt),
    a = data?.roots,
    o = K(Ir, e);
  K(En, e);
  let [s, c] = wS.useState(o),
    l = wS.useRef(null),
    u = wS.useRef(null),
    d = wS.useRef(false),
    f = wS.useRef(null),
    [p, m] = wS.useState(0),
    h = wS.useEffectEvent(async (e) => {
      try {
        c(true);
        l.current = e;
        let n = t.get(En, e);
        await Dr("maybe-resume-conversation", {
          hostId: n,
          conversationId: e,
          model: null,
          serviceTier: await Ma(t, n, activeMode?.settings.model ?? null),
          reasoningEffort: null,
          workspaceRoots: a ?? [],
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
          l.current !== e)
        )
          return;
        let i = t.get(P, e),
          a =
            i == null
              ? false
              : await Dr("get-is-conversation-archiving-for-host", {
                  hostId: i,
                  conversationId: e,
                });
        if (i == null || a || !t.get(Ir, e)) {
          d.current = false;
          return;
        }
        let o = t.get(oi, e) != null,
          s = xS(r);
        s || (f.current = e);
        SS({
          hasShownResumeError: d.current,
          isSubagentChildThread: o,
          shouldAutoRetry: s,
        }) &&
          (t.get(ti).danger(bS(n, r), {
            id: `resume-task-error-${e}`,
          }),
          (d.current = true));
        s &&
          u.current == null &&
          (u.current = setTimeout(() => {
            u.current = null;
            m((e) => e + 1);
          }, 750));
      } finally {
        l.current === e && ((l.current = null), c(false));
      }
    });
  return (
    wS.useEffect(() => {
      o ||
        ((l.current = null),
        (d.current = false),
        f.current === e && (f.current = null),
        u.current != null && (clearTimeout(u.current), (u.current = null)));
    }, [e, o]),
    wS.useEffect(() => {
      f.current = null;
    }, [e]),
    wS.useEffect(() => {
      if (e != null)
        return t.watch(({ get }) => {
          let n = get(P, e);
          n != null &&
            get(oi, e) != null &&
            fr.dispatchMessage("subagent-thread-opened", {
              hostId: n,
              conversationId: e,
            });
        });
    }, [e, t]),
    wS.useEffect(() => {
      e && o && e !== l.current && e !== f.current && h(e);
    }, [o, e, p]),
    wS.useEffect(
      () => () => {
        u.current != null && (clearTimeout(u.current), (u.current = null));
      },
      [],
    ),
    {
      isResuming: o && s,
    }
  );
}
function bS(e, t) {
  let n = CS(t);
  return n == null
    ? e.formatMessage(
        {
          id: "localTaskRow.resumeError.v2",
          defaultMessage: "Failed to resume chat{br}{error}",
          description: "Error shown when resuming a local Codex task fails",
        },
        {
          br: <br />,
          error: Wt(t),
        },
      )
    : e.formatMessage(
        {
          id: "localTaskRow.resumeConfigError",
          defaultMessage:
            "Codex can't load config.toml, so this thread can't resume.{br}Fix {location}: {detail}. After saving the file, reopen the thread.",
          description:
            "Error shown when a local Codex thread cannot resume because config.toml is invalid",
        },
        {
          br: <br />,
          location: n.location,
          detail: n.detail,
        },
      );
}
function xS(e) {
  return CS(e) == null;
}
function SS({ hasShownResumeError, isSubagentChildThread, shouldAutoRetry }) {
  return !isSubagentChildThread && (!hasShownResumeError || !shouldAutoRetry);
}
function CS(e) {
  let t = pe(e);
  return t == null
    ? null
    : {
        location:
          t.filePath == null
            ? "config.toml"
            : t.line == null || t.column == null
              ? t.filePath
              : `${t.filePath}:${t.line}:${t.column}`,
        detail: t.detail,
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
function DS(e) {
  return (
    e?.turn.items.some(
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
    <NS
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
function LocalConversationSideChatThread(e) {
  let { conversationId, lockedCollaborationMode, target } = e,
    a = B(Fe),
    o = K(Mt, conversationId),
    s = K(V, conversationId),
    c = K(En, conversationId),
    l = ot(a.value),
    u = ns();
  if (!o)
    return (
      <AS
        conversationId={conversationId}
        sourceConversationId={l}
        target={target}
      />
    );
  let d = s === true ? null : <Gc conversationId={conversationId} hostId={c} />;
  let f = Me,
    p = fi,
    m = N(conversationId, "side", l),
    h =
      s === true ? (
        <AS
          conversationId={conversationId}
          presentation="banner"
          sourceConversationId={l}
          target={target}
        />
      ) : undefined;
  let g = s === true,
    _ = s !== true,
    v = (
      <RS
        conversationId={conversationId}
        hasConversation={o}
        hostId={c}
        isResuming={false}
        showExternalFooter={false}
        footerContent={h}
        isReadOnly={g}
        lockedCollaborationMode={lockedCollaborationMode}
        showComposer={_}
        isBackgroundSubagentsEnabled={u}
      />
    );
  let y = $.jsx(f, {
    scope: p,
    value: m,
    children: v,
  });
  return (
    <>
      {d}
      {y}
    </>
  );
}
function AS(e) {
  let {
      conversationId,
      presentation = "page",
      sourceConversationId,
      target,
    } = e,
    s = B(Fe),
    c = ur(),
    l = K(Wn, sourceConversationId),
    u = K(En, sourceConversationId),
    d = K(zt, sourceConversationId),
    f = K(va(target).tabById$, `sidechat:${conversationId}`)?.title,
    [p, m] = GS.useState(false),
    h = () => {
      sourceConversationId == null ||
        p ||
        (m(true),
        jd(s, LocalConversationSideChatThread, {
          sourceConversationId,
          cwd: l,
          hostId: u,
          collaborationMode: d,
          displayTitle: f,
          intl: c,
          target,
        }).catch((error) => {
          m(false);
          gr.error("Error recreating expired side chat", {
            safe: {},
            sensitive: {
              error,
            },
          });
          s.get(ti).danger(
            c.formatMessage({
              id: "localConversation.sideChat.recreateError",
              defaultMessage: "Failed to start a new side chat",
              description:
                "Error message shown when recreating an expired side chat fails",
            }),
          );
        }));
    };
  let g = h,
    _ = (
      <FormattedMessage
        id="localConversation.sideChat.expired.title"
        defaultMessage="Side chat expired"
        description="Title shown when an ephemeral side chat can no longer be continued"
      />
    );
  let v = _,
    y = (
      <FormattedMessage
        id="localConversation.sideChat.expired.description"
        defaultMessage="This temporary side chat is no longer available; start a new side chat to continue"
        description="Description shown when an ephemeral side chat must be recreated"
      />
    );
  let b = y,
    x =
      sourceConversationId == null
        ? null
        : $.jsx(k, {
            loading: p,
            onClick: g,
            children: (
              <FormattedMessage
                id="localConversation.sideChat.expired.action"
                defaultMessage="Start new side chat"
                description="Button label to replace an expired side chat"
              />
            ),
          });
  let S = x;
  if (presentation === "banner") {
    let e;
    return $.jsx($s, {
      type: "info",
      layout: "vertical",
      title: v,
      content: b,
      customCtas: S,
    });
  }
  return $.jsx($c, {
    className: "h-full",
    spacing: "compact",
    title: v,
    description: b,
    actions: S,
  });
}
function LocalConversationMainThread(e) {
  let { conversationId } = e,
    r = B(Fe),
    i = K(Mt, conversationId),
    a = K(En, conversationId),
    o = ns(),
    { isResuming } = useResumeLocalConversation(conversationId),
    c = N(conversationId, "main", ot(r.value));
  let l = (
    <RS
      conversationId={conversationId}
      hasConversation={i}
      hostId={a}
      isResuming={isResuming}
      showExternalFooter={false}
      isBackgroundSubagentsEnabled={o}
    />
  );
  return (
    <Me scope={fi} value={c}>
      {l}
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
    a = B(Fe),
    o = K(Mt, conversationId),
    s = K(En, conversationId),
    c = ns(),
    l = N(conversationId, "main", ot(a.value));
  let u = (
    <RS
      conversationId={conversationId}
      hasConversation={o}
      header={header}
      hostId={s}
      isBackgroundSubagentsEnabled={c}
      isReadOnly={true}
      isResuming={false}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      showComposer={false}
      showExternalFooter={false}
    />
  );
  return (
    <Me scope={fi} value={l}>
      {u}
    </Me>
  );
}
function NS(e) {
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
    } = e,
    _ = B(Fe),
    v = ns(),
    { data } = W(Du),
    b = data == null || data.configuredHotkey != null,
    x = it(b);
  let S = x,
    C = K(Mt, conversationId),
    w = K(En, conversationId);
  K(Wn, conversationId);
  K(Et, conversationId);
  let T = {
    enabled: false,
    hostId: w,
  };
  let { data: _data } = Ti(T),
    D = W(go),
    O = shouldUseFullWidthRightPanelForRoute({
      conversationId,
      isRightPanelFullWidth: D,
      routeConversationId: ot(_.value),
    });
  let k = O,
    A = Uv(conversationId),
    j = useLocalConversationSummaryPanelModel(A.shouldShow),
    { isResuming } = useResumeLocalConversation(
      shouldResume ? (conversationId ?? null) : null,
    ),
    N = K(oi, conversationId),
    P = v ? N : null,
    F = ur(),
    I = rt(),
    L = GS.useRef(false),
    R = GS.useRef(null),
    z,
    ee;
  z = () => {
    P != null && (R.current = P);
  };
  ee = [P];
  GS.useEffect(z, ee);
  let V = () => {
    if (!allowMissingConversation) {
      if (C) {
        L.current = true;
        return;
      }
      if (!isResuming) {
        if (L.current) {
          let e = R.current;
          if (e != null) {
            I(LS(e), {
              replace: true,
            });
            return;
          }
          I(Fs() ? S : "/", {
            replace: true,
          });
          return;
        }
        _.get(ti).danger(
          F.formatMessage({
            id: "localConversationPage.error.toast",
            defaultMessage: "Conversation not found",
            description:
              "Error message for when the local conversation is not found",
          }),
        );
      }
    }
  };
  let te;
  te = [allowMissingConversation, C, isResuming, N, S, _, F, I];
  GS.useEffect(V, te);
  let ne = (e) => {
    Il.complete(_, "thread_switch_completed", {
      conversationId,
      turnCount: e,
    });
  };
  let re = Y(ne),
    ie = (e) => {
      BS(_, w, e, onOpenBackgroundAgent);
    };
  let H = Y(ie),
    ae = <FS conversationId={conversationId} />;
  let U = ae,
    oe = k ? undefined : A.contentShift,
    se = (e) => (
      <PS
        display={A}
        onRetry={() => {
          e.resetError();
        }}
      />
    );
  let ce = $.jsx(vv, {
    ...A,
    ...j,
    onOpenBackgroundAgent: H,
  });
  let le = $.jsx(qt, {
    browser: true,
    electron: true,
    children: $.jsx(fs, {
      name: "ThreadSummaryPanel",
      fallback: se,
      children: ce,
    }),
  });
  return (
    <RS
      key={conversationId}
      conversationId={conversationId}
      contentX={oe}
      floatingContent={le}
      hasConversation={C}
      header={U}
      hideThreadContent={k}
      hostId={w}
      isBackgroundSubagentsEnabled={v}
      isReadOnly={isReadOnly}
      isResuming={isResuming}
      lockedCollaborationMode={lockedCollaborationMode}
      onOpenBackgroundAgent={onOpenBackgroundAgent}
      composerSurfaceClassName={composerSurfaceClassName}
      footerContent={footerContent}
      onVisibleThreadContentReady={re}
      showComposer={showComposer}
      showExternalFooter={showExternalFooter}
    />
  );
}
function PS(e) {
  let { display, onRetry } = e;
  if (!display.shouldShow) return null;
  let i = {
    width: 300,
  };
  let a = (
    <div className="mb-2 font-medium text-token-text-primary">
      <FormattedMessage
        id="localConversation.summaryPanelRenderError.title"
        defaultMessage="Summary panel couldn't render"
        description="Error message shown when the conversation summary panel fails to render"
      />
    </div>
  );
  let o = (
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
            style={i}
          >
            {a}
            {$.jsx(k, {
              color: "secondary",
              size: "default",
              onClick: onRetry,
              children: o,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function FS(e) {
  let { conversationId } = e,
    r = B(ut),
    i = ns(),
    a = K(oi, conversationId),
    o = K(Un, conversationId),
    s = formatBackgroundAgentDisplayName({
      agentNickname: Cn(o)?.agentNickname ?? null,
      conversationId,
    });
  let c = s,
    u = K(Mt, conversationId),
    d = K(Zi, conversationId),
    f = K(Wn, conversationId),
    p = K(Cr, conversationId),
    m = rt(),
    h = () => {
      let { visibleTurnEntries } = r.get(
        localConversationVisibleTurnEntriesSignal,
        {
          conversationId,
          isBackgroundSubagentsEnabled: i,
        },
      );
      return renderLocalConversationMarkdownForTurns({
        cwd: f,
        isBackgroundSubagentsEnabled: i,
        projectlessOutputDirectory: p,
        title: d,
        visibleTurnEntries,
      });
    };
  let g = h;
  if (!u) return null;
  let _ =
    a == null
      ? undefined
      : () => {
          m(l(a));
        };
  let v =
    a == null ? (
      d
    ) : (
      <span className="flex min-w-0 items-center gap-1">
        <span className="truncate">{d}</span>
        <span className="flex shrink-0 items-center gap-1 font-medium">
          <Uo className="icon-2xs" seed={conversationId} aria-hidden={true} />
          <span>{c}</span>
        </span>
      </span>
    );
  let y = $.jsx(qt, {
    extension: true,
    children: (
      <Pd
        conversationId={conversationId}
        getConversationMarkdown={g}
        markdownParentConversationId={a}
        cwd={f}
        title={d}
        canPin={false}
        hideForkActions={true}
      />
    ),
  });
  return $.jsx(qt, {
    chromeExtension: true,
    extension: true,
    children: (
      <Qu
        desktopDeepLinkConversationId={conversationId}
        onBack={_}
        title={v}
        trailing={y}
      />
    ),
  });
}
function IS({
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
function LS(e) {
  return Fs() ? Ke(e) : l(e);
}
function RS(e) {
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
      showComposer: _ = true,
      showExternalFooter,
    } = e,
    S = B(Fe),
    C = K(Ue, conversationId) ?? true,
    w = K(oi, conversationId),
    T = Vr("1579719221"),
    E = Vr("3563904085"),
    D = S.get(Ub, conversationId);
  let O = D,
    k = O?.distanceFromBottomPx ?? null,
    A = O?.virtualizedTurnList ?? null,
    [j, M] = GS.useState(false),
    [N, P] = GS.useState(0),
    [F, I] = GS.useState(null),
    L = GS.useRef(null),
    [R, z] = GS.useState(null),
    ee = Yl("chatgpt.supportsNewChatKeyShortcut"),
    V = useMarkConversationReadOnVisibility(conversationId, hasConversation),
    te = async () => {
      if (C) return "stop";
      try {
        return (
          await Dr("load-older-conversation-history-page", {
            conversationId,
            dependentConversationIds: w == null ? [] : [w],
          }),
          await to(),
          (S.get(Ue, conversationId) ?? true) ? "stop" : "continue"
        );
      } catch (e) {
        let t = e;
        return (
          gr.warning("Failed to load older thread history", {
            safe: {
              conversationId,
            },
            sensitive: {
              error: t,
            },
          }),
          "stop"
        );
      }
    };
  let ne = Y(te),
    re = GS.useRef(null),
    ie = (e, t) => {
      S.set(Ub, conversationId, (t) => ({
        distanceFromBottomPx: e,
        latestTurn: T ? (t?.latestTurn ?? null) : null,
        virtualizedTurnList: t?.virtualizedTurnList ?? null,
      }));
      P(e);
      M(!t);
    };
  let H = Y(ie),
    ae = (e) => {
      S.set(Ub, conversationId, (t) => ({
        distanceFromBottomPx: t?.distanceFromBottomPx ?? 0,
        latestTurn: T ? (t?.latestTurn ?? null) : null,
        virtualizedTurnList: e,
      }));
    };
  let U = Y(ae),
    oe = shouldShowScrollToBottomButton({
      isScrollToTopEnabled: T,
      isScrolledFromBottom: j,
      responseSpacerHeightPx: F?.getHeightPx() ?? null,
      scrollDistanceFromBottomPx: N,
    });
  let se = oe,
    ce = () => {
      if (T && F != null) {
        F.scrollToBottom();
        return;
      }
      re.current?.scrollToBottom();
    };
  let le = Y(ce),
    ue = (e) => {
      let { distanceFromBottomPx, scrollHeightPx } = e;
      hideThreadContent ||
        (L.current = Cb({
          distanceFromBottomPx,
          responseSpacerHeightPx: F?.getHeightPx() ?? 0,
          scrollHeightPx,
        }));
    };
  let de = Y(ue),
    fe = () => {
      let e = L.current;
      return ((L.current = null), e);
    };
  let pe = Y(fe),
    me = () => {
      L.current = null;
    };
  let he = Y(me),
    ge,
    _e;
  ge = () => {
    hideThreadContent && he();
  };
  _e = [he, hideThreadContent];
  GS.useEffect(ge, _e);
  let G = (e) => {
    ee.current = e;
    z(e);
  };
  let ve = Y(G),
    ye = W(Fa),
    be = E && hasConversation && !hideThreadContent,
    xe = (e) => {
      BS(S, hostId, e, onOpenBackgroundAgent);
    };
  let Se = Y(xe),
    Ce = be ? $.jsx(zS, {}) : null;
  let we = be ? af : undefined,
    Te = hasConversation ? (
      _ ? (
        <HS
          conversationId={conversationId}
          hostId={hostId}
          isResuming={isResuming}
          showExternalFooter={showExternalFooter}
          composerSurfaceClassName={composerSurfaceClassName}
          showScrollToBottomButton={se}
          onScrollToBottom={le}
          onPrepareLatestTurnSubmitPlacement={de}
          onClearPendingLatestTurnSubmitPlacement={he}
          isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
          lockedCollaborationMode={lockedCollaborationMode}
          isScrollToTopEnabled={T}
        />
      ) : footerContent == null ? null : (
        <div className="px-5 pb-2">{footerContent}</div>
      )
    ) : null;
  let Ee = hideThreadContent ? null : (
    <US
      conversationId={conversationId}
      isReadOnly={isReadOnly}
      initialScrollOffset={k}
      initialVirtualizedTurnListRestoreState={A}
      isResuming={isResuming}
      isBackgroundSubagentsEnabled={isBackgroundSubagentsEnabled}
      consumePendingLatestTurnSubmitPlacement={pe}
      onVisibleThreadContentReady={onVisibleThreadContentReady}
      onResponseSpacerStateChange={I}
      onVirtualizedTurnListRestoreStateChange={U}
      showInProgressFixedContent={_}
      isScrollToTopEnabled={T}
    />
  );
  let De = $.jsx(rd, {
    ref: re,
    hasLiveMcpAppFrame: ye,
    remoteHostedPIPAnchorHostId: we,
    contentX,
    footer: Te,
    initialOffset: k,
    onScroll: H,
    onUserScrollToTop: ne,
    children: Ee,
  });
  let Oe = (
    <Mo value={Se}>
      {De}
      {floatingContent}
    </Mo>
  );
  let ke = $.jsx(ao, {});
  let Ae = (
    <Cu
      className="min-h-0"
      bodyClassName="[&_[data-thread-find-target=conversation]]:scroll-mt-24"
      containerRef={ve}
      data-vscode-context={'{"chatgpt.supportsNewChatMenu": true}'}
      onKeyDownCapture={V}
      onPointerDownCapture={V}
      onWheelCapture={V}
      header={header}
    >
      {Ce}
      {Oe}
      {ke}
    </Cu>
  );
  return $.jsx(fs, {
    name: "LocalConversationPage",
    children: $.jsx(pl, {
      value: R,
      children: Ae,
    }),
  });
}
function zS() {
  let t = nr(),
    n,
    r;
  return ((n = () => _f(t)), (r = [t]), GS.useEffect(n, r), null);
}
function BS(e, t, n, r) {
  if (r != null) {
    r(n);
    return;
  }
  n.showInlineActivity !== true &&
    openBackgroundAgentThreadTab(e, {
      backgroundAgent: n,
      hostId: t,
      TabComponent: LocalConversationMainThread,
    });
}
function VS(e) {
  let { conversationId } = e,
    r = K(Wn, conversationId);
  return <Wy conversationId={conversationId} cwd={r} />;
}
function HS({
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
  let p = B(Fe);
  GS.useContext(rl);
  ci();
  let m = K(Qr, hostId),
    h = !!K(I, conversationId)?.length,
    g = hostId !== Pt,
    _ = null;
  g &&
    (m === "connecting" || m === "restarting"
      ? (_ = "reconnecting")
      : isResuming && !h && (_ = "loading"));
  let v = K(ge, conversationId) ?? false,
    y = K(oc, conversationId);
  K(b, conversationId);
  K(s, conversationId);
  let x = K(YS, conversationId) ?? false,
    S = K(_c, isBackgroundSubagentsEnabled ? conversationId : null).some(
      ({ status }) => status === "active",
    ),
    C = isBackgroundSubagentsEnabled ? x || S || false : v || false,
    w =
      K(er, conversationId) === "projectless"
        ? {
            fallbackMode: "local",
            isAvailabilityLoading: false,
            isCloudAvailable: false,
            isLocalAvailable: true,
            isWorktreeAvailable: false,
          }
        : undefined,
    T = ur(),
    E = ad(),
    D = Y(() => {
      let e = E.getScrollElement();
      onPrepareLatestTurnSubmitPlacement({
        distanceFromBottomPx: E.getLastScrollDistanceFromBottomPx(),
        scrollHeightPx: e?.scrollHeight ?? null,
      });
      E.setFooterResizeViewportPreserveDisabled(true);
    }),
    O = Y(() => {
      onClearPendingLatestTurnSubmitPlacement();
      E.setFooterResizeViewportPreserveDisabled(false);
    }),
    k = (
      <>
        <VS conversationId={conversationId} />
        {_ == null
          ? null
          : $.jsx(dS, {
              status: _,
            })}
        {$.jsx(hl, {
          browserConversationId:
            ot(p.value) === conversationId ? (Ot(p) ?? undefined) : undefined,
          isResponseInProgress: C,
          localWorkspaceMaterialization: y,
          showFooterBranchWhen: "always",
          showExternalFooter,
          surfaceClassName: composerSurfaceClassName,
          composerModeAvailability: w,
          lockedCollaborationMode,
          placeholderText: undefined,
          onCreateSideConversation: async ({
            sourceConversationId,
            cwd,
            hostId: _hostId,
            collaborationMode,
            displayTitle,
          }) =>
            jd(p, LocalConversationSideChatThread, {
              sourceConversationId,
              cwd,
              hostId: _hostId,
              collaborationMode,
              displayTitle,
              intl: T,
            }),
          onLocalSubmitStart: isScrollToTopEnabled ? D : undefined,
          onLocalSubmitError: isScrollToTopEnabled ? O : undefined,
        })}
      </>
    );
  return (
    <div
      className="flex flex-col"
      data-thread-find-composer="true"
      onMouseDownCapture={() => {
        Da(p, "conversation", `conversation:${conversationId}`);
      }}
      onFocusCapture={() => {
        Da(p, "conversation", `conversation:${conversationId}`);
      }}
    >
      <div className="relative h-0">
        {$.jsx(zl, {
          className: "bottom-[calc(100%+6*var(--spacing))]",
          label: T.formatMessage({
            id: "localConversation.scrollToBottomButton",
            defaultMessage: "Scroll to bottom",
            description: "Label for button that scrolls to the latest message",
          }),
          onClick: onScrollToBottom,
          show: showScrollToBottomButton,
          showWorkingDots:
            isScrollToTopEnabled && showScrollToBottomButton && C,
        })}
      </div>
      <div className="flex flex-col gap-2">{k}</div>
    </div>
  );
}
function US({
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
  let m = B(Fe),
    h = rt(),
    g = Vo(),
    _ = K(Mt, conversationId),
    v = K(s, conversationId),
    y = K(Wn, conversationId),
    b = K(En, conversationId),
    x = K(pr, conversationId) ?? "needs_resume",
    S = K(Ue, conversationId) ?? false,
    C = K(ct, conversationId),
    w = K(Bn, conversationId),
    T = K(er, conversationId) === "projectless",
    E = K(Cr, conversationId),
    O = K(zt, conversationId),
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
  let F = w == null ? null : Yy(visibleTurnEntries, w.updatedAt * 1e3),
    I = Pn(conversationId),
    { data = qS } = Ti({
      hostId: b,
    }),
    R = Qt("2138468235").get("enable_mcp_apps", false),
    z = K(oi, conversationId),
    ee = isBackgroundSubagentsEnabled ? z : null,
    [V, te] = li(JS),
    { items, markRead } = Co(),
    ie = _
      ? (items.find((item) => item.threadId === conversationId) ?? null)
      : null,
    H = ie?.description ?? null,
    ae = ie?.automationId != null && H != null && H.trim().length > 0;
  GS.useEffect(() => {
    ie?.id == null || ie.readAt != null || markRead(ie.id);
  }, [ie?.id, ie?.readAt, markRead]);
  let U = ur(),
    { agentMode } = Xn({
      conversationId,
      hostId: b,
    }),
    se = y ? D(y) : null,
    ce = GS.useMemo(() => V[conversationId] ?? {}, [V, conversationId]),
    le = GS.useRef(null),
    ue = GS.useRef(conversationId),
    de = GS.useRef([]),
    fe = GS.useRef(null),
    pe = GS.useRef(null);
  ue.current !== conversationId &&
    ((ue.current = conversationId), (le.current = null));
  let me = _ && !C,
    he = ee != null,
    ge = IS({
      conversationTurns,
      hasRenderableTurns,
      isResuming,
      isSubagentThread: he,
    }),
    _e = GS.useRef(_),
    G = GS.useRef(conversationTurns),
    ve = GS.useRef(isBackgroundSubagentsEnabled);
  _e.current = _;
  G.current = conversationTurns;
  ve.current = isBackgroundSubagentsEnabled;
  let ye = W(Ya),
    be =
      conversationId == null ? "unavailable" : `conversation:${conversationId}`;
  useReviewSearchHighlights({
    containerRef: fe,
    contextId: be,
  });
  let xe = Y((e) => {
      let t = fe.current;
      t != null && zo(e, t);
    }),
    Se = GS.useCallback(
      (e) => {
        let t = fe.current;
        t !== e &&
          (t?.ownerDocument.removeEventListener("copy", xe, true),
          (fe.current = e),
          e?.ownerDocument.addEventListener("copy", xe, true));
      },
      [xe],
    ),
    Ce = Y(async (t, n) => {
      try {
        await Dr("edit-last-user-turn-for-host", {
          hostId: I.getHostId(),
          conversationId,
          turnId: t.turnId,
          message: n,
          agentMode,
          serviceTier: await Ma(m, I.getHostId(), t.params.model ?? null),
        });
      } catch (e) {
        throw (
          m.get(ti).danger(
            U.formatMessage({
              id: "localConversation.editLastMessageFailed",
              defaultMessage: "Failed to edit message",
              description:
                "Toast shown when editing the previous user message fails",
            }),
          ),
          e
        );
      }
    }),
    we = Y(async (t) => {
      if (_)
        try {
          let n = await Dr("fork-conversation-from-turn", {
            conversationId,
            targetTurnId: t,
            cwd: y,
            workspaceRoots: y == null ? undefined : [y],
            collaborationMode: O,
          });
          na(m, {
            sourceConversationId: conversationId,
            targetConversationId: n,
          });
          h(LS(n), {
            state: {
              focusComposerNonce: Date.now(),
            },
          });
        } catch (e) {
          throw (
            gr.error("Error forking conversation from turn", {
              safe: {},
              sensitive: {
                error: e,
              },
            }),
            m.get(ti).danger(U.formatMessage(fo.forkThreadError)),
            e
          );
        }
    }),
    Te = Y((t) => {
      if (!_ || t.turnId == null) return;
      if (t.turnId === latestVisibleTurnId) {
        we(t.turnId);
        return;
      }
      let n = t.turnId;
      st(m, tb, {
        conversationCwd: y,
        conversationId,
        conversationLatestCollaborationMode: O,
        hostId: b,
        onForkIntoLocal: () => we(n),
        turnId: n,
      });
    }),
    Ee = Y((t, n) => {
      te((r) =>
        vc({
          current: r,
          conversationId,
          turnId: t,
          collapsed: n,
        }),
      );
    }),
    De = Kx({
      collapsedTurnsById: ce,
      completedThreadGoal: w,
      completedThreadGoalTurnKey: F,
      conversationId,
      cwd: se,
      hasInheritedParentTurns,
      hostId: b,
      isBackgroundSubagentsEnabled,
      isProjectlessConversation: T,
      isReadOnly,
      modelProvider: v,
      projectlessOutputDirectory: E,
      onEditLastTurnMessage: !isReadOnly && me ? Ce : undefined,
      onForkTurnMessage: !isReadOnly && _ ? Te : undefined,
      onSetCollapsedForTurn: Ee,
      previousEntries: de.current,
      renderMcpApps: R,
      resolvedApps: data,
      showInProgressFixedContent,
      visibleSubagentParentThreadId: ee,
      visibleTurnEntries,
    });
  de.current = De;
  let Oe = GS.useMemo(() => {
      let e = new Map();
      for (let t of De)
        e.has(t.turnSearchKey) || e.set(t.turnSearchKey, t.turnKey);
      return e;
    }, [De]),
    ke = GS.useMemo(
      () => ({
        scrollToTurn: async (t, n) => {
          if (
            n?.signal?.aborted ||
            (ce[t] === true &&
              te((n) =>
                vc({
                  current: n,
                  conversationId,
                  turnId: t,
                  collapsed: false,
                }),
              ),
            await to(),
            n?.signal?.aborted)
          )
            return;
          let r = pe.current;
          if (r == null)
            throw Error(
              "Local conversation search scroll requested before VirtualizedTurnList API was ready",
            );
          await r.scrollToKey(Oe.get(t) ?? t);
          !n?.signal?.aborted && (await to());
        },
        getTurnContainer: (e) => {
          let t = fe.current;
          return t == null
            ? null
            : (t.querySelector(`[data-content-search-turn-key="${e}"]`) ??
                null);
        },
      }),
      [ce, conversationId, Oe, te],
    ),
    Ae = GS.useMemo(
      () =>
        vb({
          getConversationState: () =>
            _e.current
              ? {
                  turns: G.current,
                }
              : null,
          getIsBackgroundSubagentsEnabled: () => ve.current,
          routeContextId: be,
          scrollAdapter: ke,
        }),
      [ke, be],
    ),
    je = () =>
      Qx({
        isConversationHistoryComplete: S,
        isAppgenEndCardEnabled: g,
        isBackgroundSubagentsEnabled,
        modelProvider: v,
        projectlessOutputDirectory: E,
        visibleTurnEntries,
      }),
    Me = Y(async ({ id: _id, turnKey }) => {
      let n = pe.current;
      if (n == null)
        throw Error(
          "Local conversation prompt rail scroll requested before VirtualizedTurnList API was ready",
        );
      await n.scrollToKey(Oe.get(turnKey) ?? turnKey, (t) => {
        for (let n of t.querySelectorAll("[data-content-search-unit-key]"))
          if (n.dataset.contentSearchUnitKey === _id) return n;
        return null;
      });
    }),
    Ne = Y(async ({ conversationId: _conversationId, itemId, turnKey }) => {
      _conversationId === conversationId &&
        (Ks(itemId, "smooth") ||
          (te((t) =>
            vc({
              current: t,
              conversationId,
              turnId: turnKey,
              collapsed: false,
            }),
          ),
          await to(),
          !Ks(itemId, "smooth") &&
            (await ke.scrollToTurn(turnKey), await Xs(itemId, "auto"))));
    });
  GS.useEffect(
    () =>
      Hs(m, conversationId, {
        revealItem: Ne,
      }),
    [conversationId, Ne, m],
  );
  GS.useEffect(() => {
    let t = le.current,
      n = visibleTurnEntries.find((item) => item.turnId === t),
      r = new Set();
    t != null && t !== latestVisibleTurnId && !DS(n) && r.add(t);
    let i = visibleTurnEntries.at(-4);
    t != null &&
      t !== latestVisibleTurnId &&
      i?.turnId != null &&
      DS(i) &&
      r.add(i.turnId);
    r.size > 0 &&
      te((t) => {
        let n = t;
        for (let t of r)
          n = vc({
            current: n,
            conversationId,
            turnId: t,
            collapsed: true,
          });
        return n;
      });
    le.current = latestVisibleTurnId;
  }, [conversationId, latestVisibleTurnId, te, visibleTurnEntries]);
  let Pe = Y(() => {
      setTimeout(() => {
        onVisibleThreadContentReady?.(conversationTurns.length);
      });
    }),
    Ie = Y((e) => {
      pe.current = e;
    }),
    Le =
      x === "resumed" && onVisibleThreadContentReady != null ? Pe : undefined;
  return _ ? (
    he && !hasRenderableTurns ? (
      <Os fillParent={true} debugName="LocalConversationThread.subagentTurns" />
    ) : ge ? (
      <Os
        fillParent={true}
        showLogo={false}
        debugName="LocalConversationThread.resume"
      />
    ) : (
      <>
        {$.jsx(pu, {
          conversationSource: Ae,
          diffSource: ye,
          orchestrationId: Ae.contextId,
          isDefault: ot(m.value) === conversationId,
        })}
        {$.jsxs(p.div, {
          ref: Se,
          "data-thread-find-target": "conversation",
          className:
            "relative flex flex-col gap-3 electron:[--color-token-description-foreground:color-mix(in_srgb,var(--color-token-foreground)_70%,transparent)]",
          onMouseDownCapture: () => {
            Da(m, "conversation", Ae.contextId);
          },
          onFocusCapture: () => {
            Da(m, "conversation", Ae.contextId);
          },
          children: [
            <ThreadFindNavigationRail
              enabled={S}
              getItems={je}
              onRevealItem={Me}
            />,
            !hasUserMessage && ae ? (
              <Rc message={H ?? ""} sentAtMs={null} hostId={b} />
            ) : null,
            isScrollToTopEnabled ? (
              <Ex
                key={conversationId}
                conversationId={conversationId}
                entries={De}
                initialScrollOffset={initialScrollOffset}
                initialVirtualizedTurnListRestoreState={
                  initialVirtualizedTurnListRestoreState
                }
                consumePendingLatestTurnSubmitPlacement={
                  consumePendingLatestTurnSubmitPlacement
                }
                onResponseSpacerStateChange={onResponseSpacerStateChange}
                onApiChange={Ie}
                onVisibleContentReady={Le}
                onVirtualizedTurnListRestoreStateChange={
                  onVirtualizedTurnListRestoreStateChange
                }
                synchronouslyMeasureLatestTurnUpdates={false}
              />
            ) : (
              $.jsx(
                rx,
                {
                  entries: De,
                  initialRestoreState: initialVirtualizedTurnListRestoreState,
                  onApiChange: Ie,
                  onVisibleContentReady: Le,
                  onRestoreStateChange: onVirtualizedTurnListRestoreStateChange,
                  preserveMeasuredTurnViewport: true,
                  RowComponent: Zb,
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
  eu();
  Qa();
  initReviewSearchHighlighter();
  Di();
  Zu();
  Ao();
  Ou();
  Vc();
  Es();
  Ll();
  he();
  Ef();
  gf();
  r();
  _();
  me();
  Ht();
  ae();
  Qe();
  wu();
  ho();
  id();
  td();
  initThreadFindNavigationRail();
  rs();
  Nf();
  Pc();
  initLocalConversationGitSummary();
  initLocalConversationArtifacts();
  initLocalConversationSummaryPanelSignals();
  Mr();
  _n();
  mu();
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
  Sb();
  Nd();
  Tb();
  initLocalConversationTurnSelectors();
  Wb();
  Gx();
  Zx();
  nx();
  iS();
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
  YS = Rn(ut, (e, { get }) => {
    let n = get(oi, e);
    if (n == null) return get(ge, e) ?? false;
    let r = get(I, e) ?? KS,
      i = get(I, n) ?? KS;
    return (
      ab({
        conversation: {
          turns: r,
        },
        parentConversation: {
          turns: i,
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
