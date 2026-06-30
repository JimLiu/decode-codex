// Restored from ref/webview/assets/docx-preview-panel-BsZXEpj7.js
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./docx-preview"]),
) => i.map((i) => d[i]);
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  D as n,
  E as r,
  Go as i,
  Ji as a,
  Ko as o,
  O as s,
  Vo as c,
  _ as l,
  _c as u,
  ar as d,
  gc as f,
  ir as p,
  lc as m,
  qi as h,
  v as ee,
} from "./current-app-initial-bnlvjk3w-shared-bundle";
import {
  aa as g,
  ac as _,
  bs as v,
  ic as y,
  oc as b,
  sa as x,
  ws as te,
} from "../boundaries/current-ref/current-app-initial-worktree-new-thread-orchestrator-runtime-producer";
import {
  $t as S,
  Np as ne,
  Xt as C,
  Yt as w,
  Zt as re,
  an as ie,
  gh as ae,
  hh as oe,
  in as T,
  jp as se,
  mh as ce,
  nn as le,
  on as ue,
  rn as E,
  sn as de,
  tn as fe,
} from "../boundaries/current-ref/current-app-initial-worktree-new-thread-query-runtime-producer";
import {
  Hi as D,
  Iy as O,
  Ri as pe,
  Vi as me,
  Vy as he,
  ba as k,
  ya as ge,
} from "../boundaries/current-ref/current-app-initial-remote-projects-app-shared-runtime-producer";
import {
  $u as _e,
  At as ve,
  Ct as ye,
  Dt as be,
  Et as A,
  Ft as j,
  It as M,
  Lt as xe,
  Mt as Se,
  Nt as N,
  Ot as Ce,
  Pt as P,
  Qu as we,
  St as Te,
  Tt as F,
  jt as Ee,
  nd as De,
  rd as I,
  wt as L,
} from "../boundaries/current-ref/app-main-current-producer";
import {
  c as R,
  l as Oe,
} from "../boundaries/current-ref/current-projects-index-compose-refs-producer";
import { i as ke, r as Ae, t as z } from "../boundaries/current-ref/current-artifact-analytics-producer";
import {
  a as je,
  n as B,
  r as Me,
} from "../boundaries/current-ref/current-artifact-annotation-comment-producer";
import { n as V, t as Ne } from "../boundaries/current-ref/current-artifact-preview-status-producer";
var H = e(() => {});
function Pe({ anchor: e, editorScale: t, layer: n, pageSize: r }) {
  return e.kind === `region` && e.selectionKind != null
    ? N({ editorScale: t, layer: n, pageSize: r, rect: e.rect })
    : P({
        editorScale: t,
        layer: n,
        markerPoint: e.kind === `region` ? j(e.rect) : e.point,
        pageSize: r,
      });
}
var U = e(() => {
  M();
});
function Fe(e, t) {
  let n = e.currentTarget.getBoundingClientRect();
  return n.width <= 0 || n.height <= 0
    ? null
    : {
        x: He(((e.clientX - n.left) / n.width) * t.width, 0, t.width),
        y: He(((e.clientY - n.top) / n.height) * t.height, 0, t.height),
      };
}
function W({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = t.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  let i = Ke(e);
  if (i == null) return null;
  let a = He(((i.left - r.left) / r.width) * n.width, 0, n.width),
    o = He(((i.top - r.top) / r.height) * n.height, 0, n.height),
    s = He(((i.right - r.left) / r.width) * n.width, 0, n.width),
    c = He(((i.bottom - r.top) / r.height) * n.height, 0, n.height);
  return s <= a || c <= o ? null : { x: a, y: o, width: s - a, height: c - o };
}
function Ie({ clientRects: e, pageElement: t, pageSize: n }) {
  let r = [];
  for (let i of Ue(e)) {
    let e = W({ clientRects: [i], pageElement: t, pageSize: n });
    e != null && r.push(e);
  }
  return r;
}
function G(e) {
  return e.askForEditAnchor?.point ?? Ge(e.rect);
}
function Le({ clientRects: e, pageElement: t, pageSize: n, selection: r }) {
  let i = t.getBoundingClientRect();
  if (i.width <= 0 || i.height <= 0 || e.length === 0) return null;
  let a = Ke(e);
  if (a == null) return null;
  let o = qe(r),
    s = o ? e[e.length - 1] : e[0];
  if (s == null) return null;
  let c = s.top + s.height / 2,
    l = a.top + a.height / 2,
    u = s.top - 6 - 28 >= i.top,
    d = s.bottom + 6 + 28 <= i.bottom,
    f = c > l && d ? `below` : u ? `above` : `below`;
  return {
    placement: f,
    point: Re({
      clientX: o ? s.right : s.left,
      clientY: f === `above` ? s.top : s.bottom,
      pageElement: t,
      pageSize: n,
    }),
  };
}
function Re({ clientX: e, clientY: t, pageElement: n, pageSize: r }) {
  let i = n.getBoundingClientRect();
  return {
    x: He(((e - i.left) / i.width) * r.width, 0, r.width),
    y: He(((t - i.top) / i.height) * r.height, 0, r.height),
  };
}
function ze(e) {
  return (
    Math.abs(e.clientCurrent.x - e.clientStart.x) >= 3 ||
    Math.abs(e.clientCurrent.y - e.clientStart.y) >= 3
  );
}
function Be(e, t = !1) {
  let n = Ve(e.start, e.current);
  return !t && n.width < 8 && n.height < 8
    ? { kind: `point`, point: e.current }
    : { kind: `region`, rect: n };
}
function Ve(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(e.x - t.x),
    height: Math.abs(e.y - t.y),
  };
}
function He(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ue(e) {
  let t = [],
    n = e
      .filter((e) => e.width > 0 && e.height > 0)
      .sort((e, t) => e.top - t.top || e.left - t.left);
  for (let e of n) {
    let n = t.find((t) => We(t, e));
    if (n == null) {
      t.push({
        bottom: e.bottom,
        height: e.height,
        left: e.left,
        right: e.right,
        top: e.top,
        width: e.width,
      });
      continue;
    }
    ((n.left = Math.min(n.left, e.left)),
      (n.top = Math.min(n.top, e.top)),
      (n.right = Math.max(n.right, e.right)),
      (n.bottom = Math.max(n.bottom, e.bottom)),
      (n.width = n.right - n.left),
      (n.height = n.bottom - n.top));
  }
  return t;
}
function We(e, t) {
  return (
    Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top) >=
    Math.min(e.height, t.height) * 0.5
  );
}
function Ge(e) {
  return { x: e.x + e.width / 2, y: e.y };
}
function Ke(e) {
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    i = -1 / 0;
  for (let a of e)
    a.width <= 0 ||
      a.height <= 0 ||
      ((t = Math.min(t, a.left)),
      (n = Math.min(n, a.top)),
      (r = Math.max(r, a.right)),
      (i = Math.max(i, a.bottom)));
  return !Number.isFinite(t) ||
    !Number.isFinite(n) ||
    !Number.isFinite(r) ||
    !Number.isFinite(i)
    ? null
    : { bottom: i, height: i - n, left: t, right: r, top: n, width: r - t };
}
function qe(e) {
  if (e.anchorNode == null || e.focusNode == null) return !0;
  if (e.anchorNode === e.focusNode) return e.focusOffset >= e.anchorOffset;
  let t = e.anchorNode.compareDocumentPosition(e.focusNode);
  return t === Node.DOCUMENT_POSITION_FOLLOWING
    ? !0
    : t !== Node.DOCUMENT_POSITION_PRECEDING;
}
var Je = e(() => {
  (H(), M());
});
function Ye({
  anchor: e,
  body: t,
  conversationId: n,
  pageNumber: r,
  pageSize: i,
  path: a,
  target: o,
  title: s,
}) {
  let c =
      e.kind === `region`
        ? e.rect
        : { x: e.point.x, y: e.point.y, width: 1, height: 1 },
    l =
      e.kind === `region`
        ? e.selectionKind == null
          ? j(e.rect)
          : G(e)
        : e.point;
  return {
    sessionId:
      o.mode === `edit`
        ? `docx-comment-edit:${o.commentId}`
        : e.kind === `region`
          ? [
              `docx-comment`,
              r,
              `region`,
              e.rect.x,
              e.rect.y,
              e.rect.width,
              e.rect.height,
            ].join(`:`)
          : [`docx-comment`, r, `point`, e.point.x, e.point.y].join(`:`),
    conversationId: n,
    target: o,
    anchorState: {
      anchor: {
        kind: `region`,
        pageUrl: a,
        frameUrl: null,
        title: s,
        elementPath: `docx-page-${r}`,
        point: { xPercent: i.width === 0 ? 0 : (l.x / i.width) * 100, y: l.y },
        rect: c,
        isFixed: !1,
        role: null,
        name: null,
        selector: null,
        framePath: [],
        nearbyText: null,
      },
      viewportRect: c,
      viewportPoint: l,
      viewportSize: i,
    },
    body: t,
    cwd: null,
    placementStrategy: `anchored`,
    previewAlignment: `end`,
    surfaceMode: `editor`,
  };
}
function Xe({ anchor: e, pageCount: t, pageNumber: n, pageSize: r }) {
  return e.kind === `region`
    ? e.selectionKind == null
      ? {
          target: {
            type: `document-page-region`,
            anchorPoint: j(e.rect),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
          },
        }
      : {
          contentPreview: e.contentPreview,
          target: {
            type: `document-element-selection`,
            selectionKind: e.selectionKind,
            anchorPoint: G(e),
            pageCount: t,
            pageNumber: n,
            pageSize: r,
            rect: e.rect,
            selectionRects: e.selectionRects,
            selectedText: e.selectedText,
            nearbyText: e.nearbyText,
          },
        }
    : {
        target: {
          type: `document-page-point`,
          pageCount: t,
          pageNumber: n,
          pageSize: r,
          point: e.point,
        },
      };
}
function Ze(e, t) {
  return e.kind === `region` && e.selectionKind != null
    ? `Page ${t} ${e.selectionKind}`
    : e.kind === `region`
      ? `Page ${t} region`
      : `Page ${t} point`;
}
function Qe(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageNumber
    : null;
}
function $e(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-point` ||
    t?.type === `document-page-region` ||
    t?.type === `document-element-selection`
    ? t.pageSize
    : null;
}
function et(e) {
  let t = e.localArtifactAnnotationMetadata?.target;
  return t?.type === `document-page-region`
    ? { kind: `region`, rect: t.rect }
    : t?.type === `document-element-selection`
      ? {
          kind: `region`,
          ...(t.selectionKind === `text`
            ? { askForEditAnchor: { placement: `above`, point: t.anchorPoint } }
            : {}),
          rect: t.rect,
          contentPreview: e.localArtifactAnnotationMetadata?.contentPreview,
          selectionRects: t.selectionRects,
          selectionKind: t.selectionKind,
          selectedText: t.selectedText,
          nearbyText: t.nearbyText,
        }
      : t?.type === `document-page-point`
        ? { kind: `point`, point: t.point }
        : null;
}
function tt(e) {
  return e.content.flatMap((e) => (e.content_type === `text` ? [e.text] : []))
    .join(`
`);
}
function nt(e) {
  return [
    e.position.path,
    e.position.line,
    e.localArtifactAnnotationContext?.label ?? ``,
  ].join(`:`);
}
var rt = e(() => {
  (Je(), M());
});
function it(e) {
  let t = (0, ct.c)(9),
    {
      bordered: n,
      borderWidth: r,
      paddingPx: i,
      paddingX: a,
      paddingY: o,
      pageSize: s,
      rect: c,
      testId: l,
    } = e,
    u = n === void 0 ? !1 : n,
    d = r === void 0 ? (u ? 1 : 0) : r,
    f = i === void 0 ? 0 : i,
    p = a === void 0 ? f : a,
    m = o === void 0 ? f : o,
    h;
  return (
    t[0] !== d ||
    t[1] !== u ||
    t[2] !== f ||
    t[3] !== p ||
    t[4] !== m ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
      ? ((h = (0, q.jsx)(F, {
          bordered: u,
          borderWidth: d,
          paddingPx: f,
          paddingX: p,
          paddingY: m,
          pageSize: s,
          rect: c,
          testId: l,
        })),
        (t[0] = d),
        (t[1] = u),
        (t[2] = f),
        (t[3] = p),
        (t[4] = m),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = h))
      : (h = t[8]),
    h
  );
}
function at(e) {
  let t = (0, ct.c)(39),
    {
      comment: n,
      isSelected: r,
      onEdit: i,
      onPreviewChange: a,
      zoomScale: o,
    } = e,
    s = he(),
    c,
    l,
    u,
    d,
    f,
    p;
  if (t[0] !== n || t[1] !== s) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      c = et(n);
      let e;
      if (
        (t[8] === n ? (e = t[9]) : ((e = $e(n)), (t[8] = n), (t[9] = e)),
        (d = e),
        c == null || d == null)
      ) {
        p = null;
        break bb0;
      }
      let r;
      (t[10] === n ? (r = t[11]) : ((r = nt(n)), (t[10] = n), (t[11] = r)),
        (u = r));
      let i;
      (t[12] !== n.position.line || t[13] !== s
        ? ((i = s.formatMessage(
            {
              id: `artifactDocxPreview.commentMarkerLabel`,
              defaultMessage: `Document annotation {commentNumber}`,
              description: `Accessible label for a placed DOCX annotation marker`,
            },
            { commentNumber: n.position.line },
          )),
          (t[12] = n.position.line),
          (t[13] = s),
          (t[14] = i))
        : (i = t[14]),
        (l = i),
        (f = c.kind === `region` ? j(c.rect) : c.point));
    }
    ((t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p));
  } else
    ((c = t[2]), (l = t[3]), (u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m = f,
    h;
  t[15] !== u || t[16] !== a
    ? ((h = () => a(u)), (t[15] = u), (t[16] = a), (t[17] = h))
    : (h = t[17]);
  let ee = h,
    g;
  t[18] === a ? (g = t[19]) : ((g = () => a(null)), (t[18] = a), (t[19] = g));
  let _ = g,
    v;
  t[20] !== c || t[21] !== d
    ? ((v =
        c.kind === `region`
          ? c.selectionKind == null
            ? (0, q.jsx)(be, {
                pageSize: d,
                rect: c.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, q.jsx)(K, {
                bordered: !0,
                pageSize: d,
                anchor: c,
                testId: `artifact-docx-comment-region-outline`,
              })
          : null),
      (t[20] = c),
      (t[21] = d),
      (t[22] = v))
    : (v = t[22]);
  let y;
  t[23] !== u || t[24] !== i
    ? ((y = () => i(u)), (t[23] = u), (t[24] = i), (t[25] = y))
    : (y = t[25]);
  let b;
  t[26] !== n.position.line ||
  t[27] !== l ||
  t[28] !== _ ||
  t[29] !== r ||
  t[30] !== d ||
  t[31] !== m ||
  t[32] !== ee ||
  t[33] !== y ||
  t[34] !== o
    ? ((b = (0, q.jsx)(A, {
        ariaLabel: l,
        isSelected: r,
        label: n.position.line,
        pageSize: d,
        point: m,
        testId: `artifact-docx-comment-marker`,
        zoomScale: o,
        onClick: y,
        onPreviewHide: _,
        onPreviewShow: ee,
      })),
      (t[26] = n.position.line),
      (t[27] = l),
      (t[28] = _),
      (t[29] = r),
      (t[30] = d),
      (t[31] = m),
      (t[32] = ee),
      (t[33] = y),
      (t[34] = o),
      (t[35] = b))
    : (b = t[35]);
  let x;
  return (
    t[36] !== v || t[37] !== b
      ? ((x = (0, q.jsxs)(q.Fragment, { children: [v, b] })),
        (t[36] = v),
        (t[37] = b),
        (t[38] = x))
      : (x = t[38]),
    x
  );
}
function ot(e) {
  let t = (0, ct.c)(14),
    { comment: n, layer: r } = e,
    i,
    a,
    o;
  if (t[0] !== n) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = et(n);
      if (((i = $e(n)), e == null || i == null)) {
        o = null;
        break bb0;
      }
      a = e.kind === `region` ? j(e.rect) : e.point;
    }
    ((t[0] = n), (t[1] = i), (t[2] = a), (t[3] = o));
  } else ((i = t[1]), (a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = a,
    c;
  t[4] === n ? (c = t[5]) : ((c = nt(n)), (t[4] = n), (t[5] = c));
  let l;
  t[6] === n ? (l = t[7]) : ((l = tt(n)), (t[6] = n), (t[7] = l));
  let u;
  return (
    t[8] !== r || t[9] !== i || t[10] !== s || t[11] !== c || t[12] !== l
      ? ((u = (0, q.jsx)(
          L,
          {
            body: l,
            layer: r,
            pageSize: i,
            point: s,
            testId: `artifact-docx-comment-preview`,
          },
          c,
        )),
        (t[8] = r),
        (t[9] = i),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function st(e) {
  let t = (0, ct.c)(18),
    { anchor: n, label: r, pageSize: i, zoomScale: a } = e;
  if (n.kind === `region`) {
    let e;
    t[0] !== n || t[1] !== i
      ? ((e =
          n.selectionKind == null
            ? (0, q.jsx)(be, {
                pageSize: i,
                rect: n.rect,
                testId: `artifact-docx-comment-region-outline`,
              })
            : (0, q.jsx)(K, {
                bordered: !0,
                pageSize: i,
                anchor: n,
                testId: `artifact-docx-comment-region-outline`,
              })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = e))
      : (e = t[2]);
    let o;
    t[3] === n.rect
      ? (o = t[4])
      : ((o = j(n.rect)), (t[3] = n.rect), (t[4] = o));
    let s;
    t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== a
      ? ((s = (0, q.jsx)(A, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: o,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o),
        (t[8] = a),
        (t[9] = s))
      : (s = t[9]);
    let c;
    return (
      t[10] !== e || t[11] !== s
        ? ((c = (0, q.jsxs)(q.Fragment, { children: [e, s] })),
          (t[10] = e),
          (t[11] = s),
          (t[12] = c))
        : (c = t[12]),
      c
    );
  }
  let o;
  return (
    t[13] !== n.point || t[14] !== r || t[15] !== i || t[16] !== a
      ? ((o = (0, q.jsx)(A, {
          draft: !0,
          draftTestId: `artifact-docx-comment-draft-marker`,
          label: r,
          pageSize: i,
          point: n.point,
          testId: `artifact-docx-comment-marker`,
          zoomScale: a,
        })),
        (t[13] = n.point),
        (t[14] = r),
        (t[15] = i),
        (t[16] = a),
        (t[17] = o))
      : (o = t[17]),
    o
  );
}
function K(e) {
  let t = (0, ct.c)(18),
    { bordered: n, pageSize: r, anchor: i, testId: a } = e,
    o = n === void 0 ? !1 : n;
  if (i.selectionKind === `text`) {
    let e;
    t[0] !== i.rect || t[1] !== i.selectionRects
      ? ((e =
          i.selectionRects == null || i.selectionRects.length === 0
            ? [i.rect]
            : i.selectionRects),
        (t[0] = i.rect),
        (t[1] = i.selectionRects),
        (t[2] = e))
      : (e = t[2]);
    let n = e,
      o;
    if (t[3] !== r || t[4] !== a || t[5] !== n) {
      let e;
      (t[7] !== r || t[8] !== a
        ? ((e = (e, t) =>
            (0, q.jsx)(
              it,
              { paddingX: 4, paddingY: 0, pageSize: r, rect: e, testId: a },
              `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
            )),
          (t[7] = r),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
        (o = n.map(e)),
        (t[3] = r),
        (t[4] = a),
        (t[5] = n),
        (t[6] = o));
    } else o = t[6];
    let s;
    return (
      t[10] === o
        ? (s = t[11])
        : ((s = (0, q.jsx)(q.Fragment, { children: o })),
          (t[10] = o),
          (t[11] = s)),
      s
    );
  }
  let s = o ? (i.selectionKind === `paragraph` ? 2 : 1) : 0,
    c;
  return (
    t[12] !== i.rect || t[13] !== o || t[14] !== r || t[15] !== s || t[16] !== a
      ? ((c = (0, q.jsx)(it, {
          bordered: o,
          borderWidth: s,
          paddingPx: 4,
          pageSize: r,
          rect: i.rect,
          testId: a,
        })),
        (t[12] = i.rect),
        (t[13] = o),
        (t[14] = r),
        (t[15] = s),
        (t[16] = a),
        (t[17] = c))
      : (c = t[17]),
    c
  );
}
var ct,
  q,
  lt = e(() => {
    ((ct = f()), O(), H(), rt(), Ce(), M(), (q = m()));
  });
function ut({ pageElement: e, pageSize: t }) {
  let n = e.ownerDocument.getSelection();
  if (n == null || n.isCollapsed || n.rangeCount === 0 || !bt(n, e))
    return null;
  let r = Ct(n.toString());
  if (r.length === 0) return null;
  let i = n.getRangeAt(0);
  if (!e.contains(i.commonAncestorContainer)) return null;
  let a = Array.from(i.getClientRects()),
    o = W({ clientRects: a, pageElement: e, pageSize: t });
  if (o == null) return null;
  let s = Ie({ clientRects: a, pageElement: e, pageSize: t });
  return {
    askForEditAnchor:
      Le({ clientRects: a, pageElement: e, pageSize: t, selection: n }) ??
      void 0,
    contentPreview: { type: `text`, text: r },
    kind: `region`,
    rect: o,
    ...(s.length <= 1 ? {} : { selectionRects: s }),
    selectedText: r,
    selectionKind: `text`,
  };
}
function dt({
  clientX: e,
  clientY: t,
  includePreviewMetadata: n,
  layerElement: r,
  pageElement: i,
  pageSize: a,
  selectionKindFilter: o,
}) {
  let s = (i.ownerDocument.elementsFromPoint?.(e, t) ?? []).find(
    (e) => e !== r && !r.contains(e) && i.contains(e),
  );
  return s == null
    ? null
    : ft({
        includePreviewMetadata: n,
        pageElement: i,
        pageSize: a,
        selectionKindFilter: o,
        target: s,
      });
}
function ft({
  includePreviewMetadata: e,
  pageElement: t,
  pageSize: n,
  selectionKindFilter: r,
  target: i,
}) {
  let a = pt(i, t);
  if (a == null || (r != null && !r(a.selectionKind))) return null;
  let o = W({
    clientRects: [a.element.getBoundingClientRect()],
    pageElement: t,
    pageSize: n,
  });
  if (o == null) return null;
  let s = e ? xt(a.element) : ``,
    c = e
      ? mt({
          element: a.element,
          nearbyText: s,
          selectionKind: a.selectionKind,
        })
      : null;
  return {
    askForEditAnchor:
      a.selectionKind === `image` || a.selectionKind === `drawing`
        ? {
            alignment: `end`,
            placement: `below`,
            point: { x: o.x + o.width, y: o.y + o.height },
          }
        : void 0,
    contentPreview: c ?? void 0,
    kind: `region`,
    rect: o,
    selectionKind: a.selectionKind,
    ...(s.length === 0 ? {} : { nearbyText: s }),
  };
}
function pt(e, t) {
  let n = vt(e, t, (e) => e.matches(`img`));
  if (n != null) return { element: n, selectionKind: `image` };
  let r = vt(e, t, yt);
  if (r != null) return { element: r, selectionKind: `drawing` };
  let i = vt(e, t, (e) => e.matches(`table`));
  if (i != null) return { element: i, selectionKind: `table` };
  let a = vt(e, t, (e) => e.matches(`p`));
  return a == null ? null : { element: a, selectionKind: `paragraph` };
}
function mt({ element: e, nearbyText: t, selectionKind: n }) {
  if (n === `image` || n === `drawing`) {
    let t = ht(e);
    if (t != null) return t;
  }
  return t.length === 0 ? null : { type: `text`, text: t };
}
function ht(e) {
  let t = gt(e);
  if (t != null) {
    let e =
      t.currentSrc.trim() || t.getAttribute(`src`)?.trim() || t.src.trim();
    if (e) {
      let n = t.alt.trim();
      return { type: `image`, src: e, ...(n.length === 0 ? {} : { alt: n }) };
    }
  }
  let n = _t(e);
  return n == null
    ? null
    : {
        type: `image`,
        src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(n))}`,
      };
}
function gt(e) {
  return e instanceof HTMLImageElement ? e : e.querySelector(`img`);
}
function _t(e) {
  return e instanceof SVGSVGElement ? e : e.querySelector(`svg`);
}
function vt(e, t, n) {
  let r = e;
  for (; r != null && r !== t; ) {
    if (n(r)) return r;
    r = r.parentElement;
  }
  return null;
}
function yt(e) {
  return (
    e.matches(`svg`) ||
    (e instanceof HTMLElement &&
      e.tagName === `DIV` &&
      e.style.display === `inline-block` &&
      e.style.position === `relative` &&
      e.querySelector(`img, svg`) != null)
  );
}
function bt(e, t) {
  return (
    e.anchorNode != null &&
    e.focusNode != null &&
    t.contains(e.anchorNode) &&
    t.contains(e.focusNode)
  );
}
function xt(e) {
  let t = [];
  return (St(e, t), Ct(t.join(` `)));
}
function St(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    let n = Ct(e.textContent ?? ``);
    n.length > 0 && t.push(n);
    return;
  }
  for (let n of e.childNodes) St(n, t);
}
function Ct(e) {
  return e.replace(/\s+/g, ` `).trim().slice(0, 500);
}
var wt = e(() => {
  (H(), Je());
});
function Tt(e) {
  let t = (0, Ot.c)(244),
    {
      comments: n,
      conversationId: i,
      isCommentMode: a,
      nextCommentNumber: s,
      onCommentsChange: c,
      onTouchCancel: l,
      onTouchEnd: u,
      onTouchMove: d,
      onTouchStart: f,
      onWheel: p,
      pageCount: m,
      pageNumber: g,
      pageSize: _,
      path: v,
      tabId: y,
      threadId: b,
      title: x,
      zoomScale: te,
    } = e,
    S = te === void 0 ? 1 : te,
    ne = o(r),
    C = he(),
    [w, re] = (0, J.useState)(null),
    ie = (0, J.useRef)(null),
    ae = (0, J.useRef)(null),
    oe = (0, J.useRef)(!1),
    [T, se] = (0, J.useState)(null),
    [le, ue] = (0, J.useState)(null),
    [E, de] = (0, J.useState)(null),
    [fe, D] = (0, J.useState)(null),
    O = 1 / (Math.max(S, 2 ** -52) / 0.9),
    [pe, me] = (0, J.useState)(``),
    [k, ge] = (0, J.useState)(null),
    [A, j] = (0, J.useState)(null),
    [M, N] = (0, J.useState)(null),
    [Ce, P] = (0, J.useState)(!1),
    we;
  if (t[0] !== n || t[1] !== g || t[2] !== v) {
    let e;
    (t[4] !== g || t[5] !== v
      ? ((e = (e) =>
          e.localArtifactAnnotationContext?.path === v && Qe(e) === g),
        (t[4] = g),
        (t[5] = v),
        (t[6] = e))
      : (e = t[6]),
      (we = n.filter(e)),
      (t[0] = n),
      (t[1] = g),
      (t[2] = v),
      (t[3] = we));
  } else we = t[3];
  let F = we,
    I;
  t[7] !== F || t[8] !== M
    ? ((I = M == null ? null : (F.find((e) => nt(e) === M) ?? null)),
      (t[7] = F),
      (t[8] = M),
      (t[9] = I))
    : (I = t[9]);
  let L = I,
    R,
    Oe,
    z,
    je;
  t[10] !== F || t[11] !== T || t[12] !== le || t[13] !== A || t[14] !== _
    ? ((z = A == null ? null : (F.find((e) => nt(e) === A) ?? null)),
      (Oe = z == null ? null : et(z)),
      (R = T ?? Oe),
      (je = T == null ? ((z == null ? null : ($e(z) ?? _)) ?? _) : (le ?? _)),
      (t[10] = F),
      (t[11] = T),
      (t[12] = le),
      (t[13] = A),
      (t[14] = _),
      (t[15] = R),
      (t[16] = Oe),
      (t[17] = z),
      (t[18] = je))
    : ((R = t[15]), (Oe = t[16]), (z = t[17]), (je = t[18]));
  let B = je,
    Me;
  bb0: {
    if (T != null) {
      let e;
      (t[19] !== B ||
      t[20] !== i ||
      t[21] !== T ||
      t[22] !== pe ||
      t[23] !== g ||
      t[24] !== v ||
      t[25] !== x
        ? ((e = Ye({
            anchor: T,
            body: pe,
            conversationId: i,
            pageNumber: g,
            pageSize: B,
            path: v,
            target: { mode: `create` },
            title: x,
          })),
          (t[19] = B),
          (t[20] = i),
          (t[21] = T),
          (t[22] = pe),
          (t[23] = g),
          (t[24] = v),
          (t[25] = x),
          (t[26] = e))
        : (e = t[26]),
        (Me = e));
      break bb0;
    }
    if (Oe == null || z == null || A == null) {
      Me = null;
      break bb0;
    }
    let e;
    (t[27] !== B ||
    t[28] !== i ||
    t[29] !== Oe ||
    t[30] !== z ||
    t[31] !== A ||
    t[32] !== g ||
    t[33] !== v ||
    t[34] !== x
      ? ((e = Ye({
          anchor: Oe,
          body: tt(z),
          conversationId: i,
          pageNumber: g,
          pageSize: B,
          path: v,
          target: { mode: `edit`, commentId: A },
          title: x,
        })),
        (t[27] = B),
        (t[28] = i),
        (t[29] = Oe),
        (t[30] = z),
        (t[31] = A),
        (t[32] = g),
        (t[33] = v),
        (t[34] = x),
        (t[35] = e))
      : (e = t[35]),
      (Me = e));
  }
  let V = Me,
    Ne;
  t[36] !== R || t[37] !== B || t[38] !== O || t[39] !== w
    ? ((Ne =
        R == null
          ? null
          : Pe({ anchor: R, editorScale: O, layer: w, pageSize: B })),
      (t[36] = R),
      (t[37] = B),
      (t[38] = O),
      (t[39] = w),
      (t[40] = Ne))
    : (Ne = t[40]);
  let H = Ne,
    U = R != null,
    W;
  t[41] === C
    ? (W = t[42])
    : ((W = C.formatMessage({
        id: `artifactDocxPreview.commentInput`,
        defaultMessage: `Document annotation comment`,
        description: `Aria label for the DOCX annotation comment input`,
      })),
      (t[41] = C),
      (t[42] = W));
  let Ie = W,
    G;
  t[43] === C
    ? (G = t[44])
    : ((G = C.formatMessage({
        id: `artifactAnnotationComment.placeholder`,
        defaultMessage: `Describe a change or ask a question`,
        description: `Placeholder text for an artifact annotation comment editor`,
      })),
      (t[43] = C),
      (t[44] = G));
  let Le = G,
    Re;
  t[45] === C
    ? (Re = t[46])
    : ((Re = C.formatMessage({
        id: `artifactDocxPreview.askCodex`,
        defaultMessage: `Ask Codex`,
        description: `Button label for starting a contextual DOCX annotation from the selected document element`,
      })),
      (t[45] = C),
      (t[46] = Re));
  let He = Re,
    Ue;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        (se(null), ue(null), de(null), D(null), me(``), j(null), P(!1));
      }),
      (t[47] = Ue))
    : (Ue = t[47]);
  let We = Ue,
    Ge;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (e) => {
        (me(e), P(!1));
      }),
      (t[48] = Ge))
    : (Ge = t[48]);
  let Ke = Ge,
    qe;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = () => {
        typeof window > `u` ||
          _e({
            animationFrameRef: ae,
            animationWindow: window,
            editorWrapper: ie.current,
          });
      }),
      (t[49] = qe))
    : (qe = t[49]);
  let Je = qe,
    rt;
  t[50] !== V || t[51] !== pe || t[52] !== Ce
    ? ((rt = () =>
        V == null
          ? !1
          : V.target.mode === `create` && pe.trim().length > 0
            ? Ce
              ? (We(), !0)
              : (P(!0), Je(), !1)
            : (We(), !0)),
      (t[50] = V),
      (t[51] = pe),
      (t[52] = Ce),
      (t[53] = rt))
    : (rt = t[53]);
  let K = rt,
    ct;
  t[54] !== R || t[55] !== B || t[56] !== O || t[57] !== w
    ? ((ct = () => {
        if (R == null) return;
        let e = Pe({ anchor: R, editorScale: O, layer: w, pageSize: B });
        e != null && Se(ie.current, e);
      }),
      (t[54] = R),
      (t[55] = B),
      (t[56] = O),
      (t[57] = w),
      (t[58] = ct))
    : (ct = t[58]);
  let q = (0, J.useEffectEvent)(ct),
    lt;
  t[59] !== q || t[60] !== U || t[61] !== w
    ? ((lt = () => {
        if (!U || w == null) return;
        let e = w.ownerDocument,
          t = e.defaultView,
          n = () => {
            q();
          };
        (e.addEventListener(`scroll`, n, { capture: !0 }),
          t?.addEventListener(`resize`, n));
        let r = typeof ResizeObserver > `u` ? null : new ResizeObserver(n);
        return (
          r?.observe(w),
          n(),
          () => {
            (e.removeEventListener(`scroll`, n, { capture: !0 }),
              t?.removeEventListener(`resize`, n),
              r?.disconnect());
          }
        );
      }),
      (t[59] = q),
      (t[60] = U),
      (t[61] = w),
      (t[62] = lt))
    : (lt = t[62]);
  let ft;
  (t[63] !== B.height ||
  t[64] !== B.width ||
  t[65] !== O ||
  t[66] !== U ||
  t[67] !== w
    ? ((ft = [B.height, B.width, O, U, w]),
      (t[63] = B.height),
      (t[64] = B.width),
      (t[65] = O),
      (t[66] = U),
      (t[67] = w),
      (t[68] = ft))
    : (ft = t[68]),
    (0, J.useEffect)(lt, ft));
  let pt;
  t[69] !== w?.ownerDocument || t[70] !== K
    ? ((pt = (e) => {
        let t = e.target;
        (t instanceof Node && ie.current?.contains(t)) ||
          (e.preventDefault(),
          e.stopPropagation(),
          K() &&
            (t instanceof Node ? t.ownerDocument : w?.ownerDocument)
              ?.getSelection()
              ?.removeAllRanges());
      }),
      (t[69] = w?.ownerDocument),
      (t[70] = K),
      (t[71] = pt))
    : (pt = t[71]);
  let mt = (0, J.useEffectEvent)(pt),
    ht;
  t[72] !== V?.target.mode || t[73] !== mt || t[74] !== a || t[75] !== w
    ? ((ht = () => {
        if (a || V?.target.mode !== `create` || w == null) return;
        let e = w.ownerDocument,
          t = (e) => {
            mt(e);
          };
        return (
          e.addEventListener(`pointerdown`, t, { capture: !0 }),
          () => {
            e.removeEventListener(`pointerdown`, t, { capture: !0 });
          }
        );
      }),
      (t[72] = V?.target.mode),
      (t[73] = mt),
      (t[74] = a),
      (t[75] = w),
      (t[76] = ht))
    : (ht = t[76]);
  let gt = V?.target.mode,
    _t;
  (t[77] !== a || t[78] !== w || t[79] !== gt
    ? ((_t = [gt, a, w]), (t[77] = a), (t[78] = w), (t[79] = gt), (t[80] = _t))
    : (_t = t[80]),
    (0, J.useEffect)(ht, _t));
  let vt;
  t[81] !== T ||
  t[82] !== A ||
  t[83] !== a ||
  t[84] !== w ||
  t[85] !== _ ||
  t[86] !== K
    ? ((vt = () => {
        if (a || w == null) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = ut({ pageElement: e, pageSize: _ });
        if (t == null) {
          de(null);
          return;
        }
        ((T != null || A != null) && !K()) ||
          (de(t), se(null), ue(null), me(``), j(null), N(null), P(!1));
      }),
      (t[81] = T),
      (t[82] = A),
      (t[83] = a),
      (t[84] = w),
      (t[85] = _),
      (t[86] = K),
      (t[87] = vt))
    : (vt = t[87]);
  let yt = (0, J.useEffectEvent)(vt),
    bt;
  t[88] !== a || t[89] !== w || t[90] !== yt
    ? ((bt = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = () => {
          yt();
        };
        return (
          e.addEventListener(`mouseup`, t),
          e.addEventListener(`keyup`, t),
          () => {
            (e.removeEventListener(`mouseup`, t),
              e.removeEventListener(`keyup`, t));
          }
        );
      }),
      (t[88] = a),
      (t[89] = w),
      (t[90] = yt),
      (t[91] = bt))
    : (bt = t[91]);
  let xt;
  (t[92] !== a || t[93] !== w
    ? ((xt = [a, w]), (t[92] = a), (t[93] = w), (t[94] = xt))
    : (xt = t[94]),
    (0, J.useEffect)(bt, xt));
  let St;
  t[95] !== T ||
  t[96] !== A ||
  t[97] !== a ||
  t[98] !== w ||
  t[99] !== _ ||
  t[100] !== K
    ? ((St = (e) => {
        if (a || w == null || e.defaultPrevented) return;
        let t = e.target;
        if (t instanceof Node && w.contains(t)) return;
        let n = w.parentElement;
        if (n == null) return;
        let r = dt({
          clientX: e.clientX,
          clientY: e.clientY,
          includePreviewMetadata: !0,
          layerElement: w,
          pageElement: n,
          pageSize: _,
          selectionKindFilter: Dt,
        });
        r != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          !((T != null || A != null) && !K()) &&
            (n.ownerDocument.getSelection()?.removeAllRanges(),
            de(r),
            se(null),
            ue(null),
            me(``),
            j(null),
            N(null),
            P(!1)));
      }),
      (t[95] = T),
      (t[96] = A),
      (t[97] = a),
      (t[98] = w),
      (t[99] = _),
      (t[100] = K),
      (t[101] = St))
    : (St = t[101]);
  let Ct = (0, J.useEffectEvent)(St),
    wt;
  t[102] !== a || t[103] !== w || t[104] !== Ct
    ? ((wt = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = (e) => {
          Ct(e);
        };
        return (
          e.addEventListener(`click`, t),
          () => {
            e.removeEventListener(`click`, t);
          }
        );
      }),
      (t[102] = a),
      (t[103] = w),
      (t[104] = Ct),
      (t[105] = wt))
    : (wt = t[105]);
  let Tt;
  (t[106] !== a || t[107] !== w
    ? ((Tt = [a, w]), (t[106] = a), (t[107] = w), (t[108] = Tt))
    : (Tt = t[108]),
    (0, J.useEffect)(wt, Tt));
  let At;
  t[109] !== a || t[110] !== w || t[111] !== _
    ? ((At = (e, t, n) => {
        if (!a || w == null) return null;
        let r = w.parentElement;
        return r == null
          ? null
          : dt({
              clientX: e,
              clientY: t,
              includePreviewMetadata: n,
              layerElement: w,
              pageElement: r,
              pageSize: _,
            });
      }),
      (t[109] = a),
      (t[110] = w),
      (t[111] = _),
      (t[112] = At))
    : (At = t[112]);
  let jt = At,
    Mt;
  t[113] !== a || t[114] !== _ || t[115] !== ne || t[116] !== y || t[117] !== b
    ? ((Mt = (e, t) => {
        (Ae(
          ne,
          {
            artifactTabId: y,
            artifactType: `document`,
            importKind: `docx`,
            threadId: b,
          },
          { annotationModeEnabled: a, startSource: t },
        ),
          se(e),
          ue(_),
          de(null),
          D(null),
          me(``),
          j(null),
          N(null),
          P(!1));
      }),
      (t[113] = a),
      (t[114] = _),
      (t[115] = ne),
      (t[116] = y),
      (t[117] = b),
      (t[118] = Mt))
    : (Mt = t[118]);
  let X = Mt,
    Nt;
  t[119] !== T || t[120] !== A || t[121] !== X || t[122] !== _ || t[123] !== E
    ? ((Nt = (e, t) => {
        if (T != null || A != null || !xe(e)) return;
        let n =
          ut({ pageElement: t, pageSize: _ }) ??
          (E?.selectionKind === `text` ? null : E);
        n != null &&
          (e.preventDefault(), e.stopPropagation(), X(n, `ask_codex_shortcut`));
      }),
      (t[119] = T),
      (t[120] = A),
      (t[121] = X),
      (t[122] = _),
      (t[123] = E),
      (t[124] = Nt))
    : (Nt = t[124]);
  let Pt = (0, J.useEffectEvent)(Nt),
    Ft;
  t[125] !== a || t[126] !== w || t[127] !== Pt
    ? ((Ft = () => {
        if (w == null || a) return;
        let e = w.parentElement;
        if (e == null) return;
        let t = (t) => {
          Pt(t, e);
        };
        return (
          e.ownerDocument.addEventListener(`keydown`, t, { capture: !0 }),
          () => {
            e.ownerDocument.removeEventListener(`keydown`, t, { capture: !0 });
          }
        );
      }),
      (t[125] = a),
      (t[126] = w),
      (t[127] = Pt),
      (t[128] = Ft))
    : (Ft = t[128]);
  let It;
  (t[129] !== a || t[130] !== w
    ? ((It = [a, w]), (t[129] = a), (t[130] = w), (t[131] = It))
    : (It = t[131]),
    (0, J.useEffect)(Ft, It));
  let Lt;
  t[132] !== T || t[133] !== A || t[134] !== X || t[135] !== K
    ? ((Lt = (e) => {
        ((T != null || A != null) && !K()) || X(e, `annotation_mode_pointer`);
      }),
      (t[132] = T),
      (t[133] = A),
      (t[134] = X),
      (t[135] = K),
      (t[136] = Lt))
    : (Lt = t[136]);
  let Rt = Lt,
    zt;
  t[137] !== a || t[138] !== _
    ? ((zt = (e) => {
        if (!a || !e.isPrimary || e.pointerType === `touch` || e.button !== 0)
          return;
        let t = Fe(e, _);
        t != null &&
          ((oe.current = !1),
          e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.setPointerCapture(e.pointerId),
          de(null),
          D(null),
          N(null),
          ge({
            pointerId: e.pointerId,
            start: t,
            current: t,
            clientStart: { x: e.clientX, y: e.clientY },
            clientCurrent: { x: e.clientX, y: e.clientY },
          }));
      }),
      (t[137] = a),
      (t[138] = _),
      (t[139] = zt))
    : (zt = t[139]);
  let Bt = zt,
    Vt;
  t[140] !== T || t[141] !== k || t[142] !== A || t[143] !== jt || t[144] !== _
    ? ((Vt = (e) => {
        if (k == null) {
          if (T != null || A != null) {
            D(null);
            return;
          }
          D(jt(e.clientX, e.clientY, !1));
          return;
        }
        if (e.pointerId !== k.pointerId) return;
        let t = Fe(e, _);
        t != null &&
          (e.preventDefault(),
          e.stopPropagation(),
          ge((n) =>
            n == null || n.pointerId !== e.pointerId
              ? n
              : {
                  ...n,
                  current: t,
                  clientCurrent: { x: e.clientX, y: e.clientY },
                },
          ));
      }),
      (t[140] = T),
      (t[141] = k),
      (t[142] = A),
      (t[143] = jt),
      (t[144] = _),
      (t[145] = Vt))
    : (Vt = t[145]);
  let Ht = Vt,
    Ut;
  t[146] !== T ||
  t[147] !== k ||
  t[148] !== jt ||
  t[149] !== Rt ||
  t[150] !== X ||
  t[151] !== _ ||
  t[152] !== K
    ? ((Ut = (e) => {
        if (k == null || e.pointerId !== k.pointerId) return;
        let t = Fe(e, _) ?? k.current;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.hasPointerCapture(e.pointerId) &&
            e.currentTarget.releasePointerCapture(e.pointerId));
        let n = {
            ...k,
            current: t,
            clientCurrent: { x: e.clientX, y: e.clientY },
          },
          r = ze(n),
          i = Be(n, r);
        if (((oe.current = r), !r)) {
          let t = jt(e.clientX, e.clientY, !0);
          if (t != null) {
            ((oe.current = !0), ge(null), Rt(t));
            return;
          }
        }
        if (T != null && i.kind === `point`) {
          (K(), ge(null));
          return;
        }
        (X(i, `annotation_mode_pointer`), ge(null));
      }),
      (t[146] = T),
      (t[147] = k),
      (t[148] = jt),
      (t[149] = Rt),
      (t[150] = X),
      (t[151] = _),
      (t[152] = K),
      (t[153] = Ut))
    : (Ut = t[153]);
  let Wt = Ut,
    Z;
  t[154] !== jt || t[155] !== Rt
    ? ((Z = (e) => {
        if (oe.current) {
          ((oe.current = !1), e.preventDefault(), e.stopPropagation());
          return;
        }
        let t = jt(e.clientX, e.clientY, !0);
        t != null && (e.preventDefault(), e.stopPropagation(), Rt(t));
      }),
      (t[154] = jt),
      (t[155] = Rt),
      (t[156] = Z))
    : (Z = t[156]);
  let Gt = Z,
    Q;
  t[157] !== i ||
  t[158] !== T ||
  t[159] !== le ||
  t[160] !== A ||
  t[161] !== a ||
  t[162] !== s ||
  t[163] !== c ||
  t[164] !== m ||
  t[165] !== g ||
  t[166] !== _ ||
  t[167] !== v ||
  t[168] !== ne ||
  t[169] !== y ||
  t[170] !== b ||
  t[171] !== x
    ? ((Q = (e, t) => {
        let { submitDirectly: n } = t === void 0 ? {} : t,
          r = n === void 0 ? !1 : n,
          o = e.body.trim();
        if (A != null) {
          if (o.length === 0) return;
          (c((e) =>
            e.map((e) =>
              nt(e) === A
                ? { ...e, content: [{ content_type: `text`, text: o }] }
                : e,
            ),
          ),
            We());
          return;
        }
        if (T == null || o.length === 0) return;
        let l = Xe({
            anchor: T,
            pageCount: m,
            pageNumber: g,
            pageSize: le ?? _,
          }),
          u = h({
            artifactKind: `document`,
            body: o,
            label: Ze(T, g),
            line: s,
            metadata: l,
            path: v,
            title: x,
          });
        (ke(
          ne,
          {
            artifactTabId: y,
            artifactType: `document`,
            importKind: `docx`,
            threadId: b,
          },
          {
            annotationModeEnabled: a,
            annotationTargetKind: l.target.type,
            submitMode: r ? `direct` : `saved`,
            submitSource: e.submitSource,
          },
        ),
          r
            ? ee.dispatchHostMessage({
                type: `artifact-direct-comment`,
                body: o,
                comment: u,
                conversationId: i,
                sessionId: crypto.randomUUID(),
              })
            : c((e) => [...e, u]),
          We());
      }),
      (t[157] = i),
      (t[158] = T),
      (t[159] = le),
      (t[160] = A),
      (t[161] = a),
      (t[162] = s),
      (t[163] = c),
      (t[164] = m),
      (t[165] = g),
      (t[166] = _),
      (t[167] = v),
      (t[168] = ne),
      (t[169] = y),
      (t[170] = b),
      (t[171] = x),
      (t[172] = Q))
    : (Q = t[172]);
  let $ = Q,
    Kt = a ? `pointer-events-auto` : `pointer-events-none`,
    qt;
  t[173] === Kt
    ? (qt = t[174])
    : ((qt = ce(`absolute inset-0 z-[3]`, Kt)), (t[173] = Kt), (t[174] = qt));
  let Jt;
  t[175] === a
    ? (Jt = t[176])
    : ((Jt = a ? { cursor: ve } : void 0), (t[175] = a), (t[176] = Jt));
  let Yt, Xt;
  t[177] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = () => {
        (ge(null), D(null));
      }),
      (Xt = () => D(null)),
      (t[177] = Yt),
      (t[178] = Xt))
    : ((Yt = t[177]), (Xt = t[178]));
  let Zt;
  if (t[179] !== F || t[180] !== A || t[181] !== S) {
    let e;
    (t[183] !== A || t[184] !== S
      ? ((e = (e) =>
          (0, Y.jsx)(
            at,
            {
              comment: e,
              isSelected: nt(e) === A,
              onEdit: (e) => {
                (se(null), ue(null), me(``), P(!1), N(null), D(null), j(e));
              },
              onPreviewChange: N,
              zoomScale: S,
            },
            nt(e),
          )),
        (t[183] = A),
        (t[184] = S),
        (t[185] = e))
      : (e = t[185]),
      (Zt = F.map(e)),
      (t[179] = F),
      (t[180] = A),
      (t[181] = S),
      (t[182] = Zt));
  } else Zt = t[182];
  let Qt;
  t[186] !== A || t[187] !== L || t[188] !== w
    ? ((Qt =
        L == null || A != null
          ? null
          : (0, Y.jsx)(ot, { comment: L, layer: w })),
      (t[186] = A),
      (t[187] = L),
      (t[188] = w),
      (t[189] = Qt))
    : (Qt = t[189]);
  let $t;
  t[190] !== T || t[191] !== A || t[192] !== fe || t[193] !== _
    ? (($t =
        fe != null && T == null && A == null
          ? (0, Y.jsx)(it, {
              paddingPx: 4,
              pageSize: _,
              rect: fe.rect,
              testId: `artifact-docx-element-hover-highlight`,
            })
          : null),
      (t[190] = T),
      (t[191] = A),
      (t[192] = fe),
      (t[193] = _),
      (t[194] = $t))
    : ($t = t[194]);
  let en;
  t[195] !== He ||
  t[196] !== T ||
  t[197] !== X ||
  t[198] !== _ ||
  t[199] !== E ||
  t[200] !== S
    ? ((en =
        E != null && T == null
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                E.selectionKind === `text`
                  ? null
                  : (0, Y.jsx)(it, {
                      bordered: !0,
                      paddingPx: 4,
                      pageSize: _,
                      rect: E.rect,
                      testId: `artifact-docx-selection-outline`,
                    }),
                (0, Y.jsx)(ye, {
                  anchor: E.askForEditAnchor,
                  label: He,
                  pageSize: _,
                  rect: E.rect,
                  testId: `artifact-docx-ask-for-edit-button`,
                  zoomScale: S,
                  onClick: () => X(E, `ask_codex_button`),
                }),
              ],
            })
          : null),
      (t[195] = He),
      (t[196] = T),
      (t[197] = X),
      (t[198] = _),
      (t[199] = E),
      (t[200] = S),
      (t[201] = en))
    : (en = t[201]);
  let tn;
  t[202] !== k || t[203] !== _
    ? ((tn =
        k == null
          ? null
          : (0, Y.jsx)(be, {
              pageSize: _,
              rect: Ve(k.start, k.current),
              testId: `artifact-docx-comment-region-outline`,
            })),
      (t[202] = k),
      (t[203] = _),
      (t[204] = tn))
    : (tn = t[204]);
  let nn;
  t[205] !== T || t[206] !== le || t[207] !== s || t[208] !== _ || t[209] !== S
    ? ((nn =
        T == null
          ? null
          : (0, Y.jsx)(st, {
              anchor: T,
              label: s,
              pageSize: le ?? _,
              zoomScale: S,
            })),
      (t[205] = T),
      (t[206] = le),
      (t[207] = s),
      (t[208] = _),
      (t[209] = S),
      (t[210] = nn))
    : (nn = t[210]);
  let rn;
  t[211] !== R ||
  t[212] !== H ||
  t[213] !== V ||
  t[214] !== Ie ||
  t[215] !== Le ||
  t[216] !== O ||
  t[217] !== $ ||
  t[218] !== c ||
  t[219] !== l ||
  t[220] !== u ||
  t[221] !== d ||
  t[222] !== f ||
  t[223] !== p
    ? ((rn =
        R == null || H == null || V == null
          ? null
          : (0, Y.jsx)(`div`, {
              ref: ie,
              className: Te,
              style: {
                scale: `${O}`,
                transformOrigin: `top left`,
                left: H.x,
                top: H.y,
                height: Ee,
                width: 294,
              },
              onPointerDown: Et,
              onTouchCancel: (e) => {
                (e.stopPropagation(), l?.());
              },
              onTouchEnd: (e) => {
                (e.stopPropagation(), u?.());
              },
              onTouchMove: (e) => {
                (e.stopPropagation(), d?.(e));
              },
              onTouchStart: (e) => {
                (e.stopPropagation(), f?.(e));
              },
              onWheel: (e) => {
                (e.stopPropagation(), p?.(e));
              },
              children: (0, Y.jsx)(
                De,
                {
                  allowImageAttachments: !1,
                  defaultCreateSubmitMode: `direct`,
                  inputAriaLabel: Ie,
                  keyboardEventTarget: typeof window > `u` ? void 0 : window,
                  placeholder: Le,
                  session: V,
                  windowHeight: Ee,
                  onCancel: We,
                  onDelete: (e) => {
                    (c((t) => t.filter((t) => nt(t) !== e)), We());
                  },
                  onEscape: We,
                  onBodyChange: V.target.mode === `create` ? Ke : void 0,
                  onLightDismissibilityChange: kt,
                  onMounted: kt,
                  onDirectSubmit: (e) => {
                    $(e, { submitDirectly: !0 });
                  },
                  onSubmit: $,
                },
                V.sessionId,
              ),
            })),
      (t[211] = R),
      (t[212] = H),
      (t[213] = V),
      (t[214] = Ie),
      (t[215] = Le),
      (t[216] = O),
      (t[217] = $),
      (t[218] = c),
      (t[219] = l),
      (t[220] = u),
      (t[221] = d),
      (t[222] = f),
      (t[223] = p),
      (t[224] = rn))
    : (rn = t[224]);
  let an;
  return (
    t[225] !== Gt ||
    t[226] !== Bt ||
    t[227] !== Ht ||
    t[228] !== Wt ||
    t[229] !== l ||
    t[230] !== u ||
    t[231] !== d ||
    t[232] !== f ||
    t[233] !== p ||
    t[234] !== qt ||
    t[235] !== Jt ||
    t[236] !== Zt ||
    t[237] !== Qt ||
    t[238] !== $t ||
    t[239] !== en ||
    t[240] !== tn ||
    t[241] !== nn ||
    t[242] !== rn
      ? ((an = (0, Y.jsxs)(`div`, {
          ref: re,
          className: qt,
          "data-testid": `artifact-docx-comment-layer`,
          style: Jt,
          onPointerDown: Bt,
          onPointerMove: Ht,
          onPointerUp: Wt,
          onPointerCancel: Yt,
          onPointerLeave: Xt,
          onClick: Gt,
          onTouchCancel: l,
          onTouchEnd: u,
          onTouchMove: d,
          onTouchStart: f,
          onWheel: p,
          children: [Zt, Qt, $t, en, tn, nn, rn],
        })),
        (t[225] = Gt),
        (t[226] = Bt),
        (t[227] = Ht),
        (t[228] = Wt),
        (t[229] = l),
        (t[230] = u),
        (t[231] = d),
        (t[232] = f),
        (t[233] = p),
        (t[234] = qt),
        (t[235] = Jt),
        (t[236] = Zt),
        (t[237] = Qt),
        (t[238] = $t),
        (t[239] = en),
        (t[240] = tn),
        (t[241] = nn),
        (t[242] = rn),
        (t[243] = an))
      : (an = t[243]),
    an
  );
}
function Et(e) {
  return e.stopPropagation();
}
function Dt(e) {
  return e === `image` || e === `drawing`;
}
var Ot,
  J,
  Y,
  kt,
  At = e(() => {
    ((Ot = f()),
      oe(),
      c(),
      s(),
      (J = t(u(), 1)),
      O(),
      we(),
      I(),
      l(),
      n(),
      z(),
      H(),
      U(),
      Je(),
      rt(),
      lt(),
      wt(),
      Ce(),
      M(),
      (Y = m()),
      (kt = () => {}));
  });
function jt(e) {
  let t = (0, Wt.c)(82),
    {
      bytes: n,
      chromeMode: r,
      disableAnnotations: a,
      disableFileActions: s,
      hostId: c,
      onBeforeOpen: l,
      path: u,
      ref: d,
      tabId: f,
      title: p,
    } = e,
    m = r === void 0 ? `default` : r,
    h = a === void 0 ? !1 : a,
    ee = s === void 0 ? !1 : s,
    g = o(pe),
    _ = (0, Z.use)(Zt),
    v = ne(),
    x = (0, Z.useRef)(null),
    te = (0, Z.useRef)(null),
    ie;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => {
        te.current != null &&
          (window.cancelAnimationFrame(te.current), (te.current = null));
      }),
      (t[0] = ie))
    : (ie = t[0]);
  let ae = ie,
    oe;
  t[1] === v
    ? (oe = t[2])
    : ((oe = (e) => {
        let t = x.current;
        t != null && zt(e, t, te, v) && (x.current = null);
      }),
      (t[1] = v),
      (t[2] = oe));
  let T = oe,
    se;
  t[3] !== n || t[4] !== _ || t[5] !== T
    ? ((se = { bytes: n, onPagesRendered: T, renderAsync: _ }),
      (t[3] = n),
      (t[4] = _),
      (t[5] = T),
      (t[6] = se))
    : (se = t[6]);
  let {
      bodyContainerElementRef: ce,
      bodyContainerRef: ue,
      loadState: E,
      pageElements: de,
      styleContainerRef: fe,
      totalPages: D,
    } = X(se),
    O;
  t[7] === g.value
    ? (O = t[8])
    : ((O = me(g.value)), (t[7] = g.value), (t[8] = O));
  let he = O,
    k;
  t[9] === he
    ? (k = t[10])
    : ((k = he ?? ge({ entrypoint: `home` })), (t[9] = he), (t[10] = k));
  let _e = k,
    ve = i(y, _e),
    ye;
  t[11] !== _e || t[12] !== g
    ? ((ye = (e) => {
        b(g, _e, e);
      }),
      (t[11] = _e),
      (t[12] = g),
      (t[13] = ye))
    : (ye = t[13]);
  let be = ye,
    A,
    j;
  t[14] !== ve || t[15] !== u
    ? ((A = B(ve, u).filter(Mt)),
      (j = Me(A)),
      (t[14] = ve),
      (t[15] = u),
      (t[16] = A),
      (t[17] = j))
    : ((A = t[16]), (j = t[17]));
  let M = j,
    {
      handleTouchCancel: xe,
      handleTouchEnd: Se,
      handleTouchMove: N,
      handleTouchStart: Ce,
      handleWheel: P,
      fitToWidth: we,
      isZoomToFitSelected: Te,
      previewStyle: F,
      resizeRef: Ee,
      setZoomPercent: De,
      zoomPercent: I,
    } = Nt(ce),
    L = E === `ready`,
    R;
  t[18] !== ce || t[19] !== v
    ? ((R = (e) => {
        let t = ce.current;
        if (t == null || !zt(t, e, te, v)) {
          x.current = e;
          return;
        }
        x.current = null;
      }),
      (t[18] = ce),
      (t[19] = v),
      (t[20] = R))
    : (R = t[20]);
  let ke = R,
    Ae,
    z;
  (t[21] === ke
    ? ((Ae = t[22]), (z = t[23]))
    : ((Ae = () => ({ navigateToPage: ke })),
      (z = [ke]),
      (t[21] = ke),
      (t[22] = Ae),
      (t[23] = z)),
    (0, Z.useImperativeHandle)(d, Ae, z));
  let je, Ne;
  (t[24] !== u || t[25] !== be
    ? ((je = () => () => {
        (ae(),
          be((e) => {
            let t = e.filter((e) => !Ht(e, u));
            return t.length === e.length ? e : t;
          }));
      }),
      (Ne = [ae, u, be]),
      (t[24] = u),
      (t[25] = be),
      (t[26] = je),
      (t[27] = Ne))
    : ((je = t[26]), (Ne = t[27])),
    (0, Z.useEffect)(je, Ne));
  let H;
  t[28] === fe
    ? (H = t[29])
    : ((H = (0, Q.jsx)(`div`, {
        ref: fe,
        "aria-hidden": !0,
        className: `hidden`,
      })),
      (t[28] = fe),
      (t[29] = H));
  let Pe;
  t[30] !== m ||
  t[31] !== ee ||
  t[32] !== we ||
  t[33] !== c ||
  t[34] !== L ||
  t[35] !== Te ||
  t[36] !== l ||
  t[37] !== u ||
  t[38] !== De ||
  t[39] !== p ||
  t[40] !== I
    ? ((Pe = L
        ? (0, Q.jsx)(C, {
            artifactType: `DOC`,
            hideMetadata: m === `standalone`,
            title: It(p),
            centerContent: null,
            rightContent: (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, Q.jsx)(S, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: I,
                  zoomOptions: le,
                  onZoomPercentChange: De,
                  fitOption: { selected: Te, onSelect: we },
                }),
                m === `default` && !ee
                  ? (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(w, { hostId: c, path: u }),
                        (0, Q.jsx)(re, {
                          hostId: c,
                          onBeforeOpen: l,
                          path: u,
                          showLabel: !0,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[30] = m),
      (t[31] = ee),
      (t[32] = we),
      (t[33] = c),
      (t[34] = L),
      (t[35] = Te),
      (t[36] = l),
      (t[37] = u),
      (t[38] = De),
      (t[39] = p),
      (t[40] = I),
      (t[41] = Pe))
    : (Pe = t[41]);
  let U;
  t[42] !== ue || t[43] !== Ee
    ? ((U = Oe(ue, Ee)), (t[42] = ue), (t[43] = Ee), (t[44] = U))
    : (U = t[44]);
  let Fe = L ? Kt : `hidden`,
    W;
  t[45] !== xe ||
  t[46] !== Se ||
  t[47] !== N ||
  t[48] !== Ce ||
  t[49] !== P ||
  t[50] !== F ||
  t[51] !== U ||
  t[52] !== Fe ||
  t[53] !== p
    ? ((W = (0, Q.jsx)(`div`, {
        ref: U,
        "aria-label": p,
        className: Fe,
        "data-testid": `docx-preview-panel`,
        onTouchCancel: xe,
        onTouchEnd: Se,
        onTouchMove: N,
        onTouchStart: Ce,
        onWheel: P,
        style: F,
      })),
      (t[45] = xe),
      (t[46] = Se),
      (t[47] = N),
      (t[48] = Ce),
      (t[49] = P),
      (t[50] = F),
      (t[51] = U),
      (t[52] = Fe),
      (t[53] = p),
      (t[54] = W))
    : (W = t[54]);
  let Ie;
  t[55] !== _e ||
  t[56] !== h ||
  t[57] !== A ||
  t[58] !== xe ||
  t[59] !== Se ||
  t[60] !== N ||
  t[61] !== Ce ||
  t[62] !== P ||
  t[63] !== L ||
  t[64] !== M ||
  t[65] !== de ||
  t[66] !== u ||
  t[67] !== be ||
  t[68] !== f ||
  t[69] !== he ||
  t[70] !== p ||
  t[71] !== D ||
  t[72] !== I
    ? ((Ie =
        L && !h
          ? de.map((e, t) => {
              let n = t + 1;
              return (0, Gt.createPortal)(
                (0, Q.jsx)(Tt, {
                  comments: A,
                  conversationId: _e,
                  isCommentMode: !1,
                  nextCommentNumber: M,
                  onCommentsChange: be,
                  onTouchCancel: xe,
                  onTouchEnd: Se,
                  onTouchMove: N,
                  onTouchStart: Ce,
                  onWheel: P,
                  pageCount: D,
                  pageNumber: n,
                  pageSize: Vt(e, I),
                  path: u,
                  tabId: f,
                  threadId: he,
                  title: p,
                  zoomScale: I / 100,
                }),
                e,
                `${u}:${n}:browse`,
              );
            })
          : null),
      (t[55] = _e),
      (t[56] = h),
      (t[57] = A),
      (t[58] = xe),
      (t[59] = Se),
      (t[60] = N),
      (t[61] = Ce),
      (t[62] = P),
      (t[63] = L),
      (t[64] = M),
      (t[65] = de),
      (t[66] = u),
      (t[67] = be),
      (t[68] = f),
      (t[69] = he),
      (t[70] = p),
      (t[71] = D),
      (t[72] = I),
      (t[73] = Ie))
    : (Ie = t[73]);
  let G;
  t[74] === E ? (G = t[75]) : ((G = V(E)), (t[74] = E), (t[75] = G));
  let Le;
  return (
    t[76] !== H || t[77] !== Pe || t[78] !== W || t[79] !== Ie || t[80] !== G
      ? ((Le = (0, Q.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [H, Pe, W, Ie, G],
        })),
        (t[76] = H),
        (t[77] = Pe),
        (t[78] = W),
        (t[79] = Ie),
        (t[80] = G),
        (t[81] = Le))
      : (Le = t[81]),
    Le
  );
}
function Mt(e) {
  return e.localArtifactAnnotationContext?.artifactKind === `document`;
}
function X(e) {
  let t = (0, Wt.c)(17),
    { bytes: n, onPagesRendered: r, renderAsync: i } = e,
    a = (0, Z.useRef)(null),
    o = (0, Z.useRef)(null),
    s = (0, Z.useRef)(0),
    c = (0, Z.useRef)(!1),
    [l, u] = (0, Z.useState)(i == null ? `error` : `loading`),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = []), (t[0] = d))
    : (d = t[0]);
  let [f, p] = (0, Z.useState)(d),
    [m, h] = (0, Z.useState)(0),
    ee;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = () => {
        let e = a.current,
          t = o.current;
        e == null ||
          t == null ||
          (Ft({ bodyContainer: e, styleContainer: t }), p([]), h(0));
      }),
      (t[1] = ee))
    : (ee = t[1]);
  let g = ee,
    _;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((_ = () => {
        let e = a.current,
          t = o.current;
        if (e == null || t == null || c.current) return;
        if (((c.current = !0), g(), i == null)) {
          u(`error`);
          return;
        }
        let l = s.current + 1;
        ((s.current = l),
          u(`loading`),
          Pt({
            bytes: n,
            bodyContainer: e,
            renderAsync: i,
            styleContainer: t,
          }).then((n) => {
            if (s.current !== l) return;
            if (!n) {
              (Ft({ bodyContainer: e, styleContainer: t }), u(`error`));
              return;
            }
            let i = Rt(e);
            (p(i), h(Math.max(i.length, 1)), u(`ready`), r(e));
          }));
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        ((s.current += 1), (c.current = !1), g());
      }),
      (t[6] = y))
    : (y = t[6]);
  let b = y,
    x;
  t[7] === v
    ? (x = t[8])
    : ((x = (e) => {
        if (e == null) {
          (b(), (a.current = null));
          return;
        }
        ((a.current = e), v());
      }),
      (t[7] = v),
      (t[8] = x));
  let te = x,
    S;
  t[9] === v
    ? (S = t[10])
    : ((S = (e) => {
        if (e == null) {
          (b(), (o.current = null));
          return;
        }
        ((o.current = e), v());
      }),
      (t[9] = v),
      (t[10] = S));
  let ne = S,
    C;
  return (
    t[11] !== l || t[12] !== f || t[13] !== te || t[14] !== ne || t[15] !== m
      ? ((C = {
          bodyContainerElementRef: a,
          bodyContainerRef: te,
          loadState: l,
          pageElements: f,
          styleContainerRef: ne,
          totalPages: m,
        }),
        (t[11] = l),
        (t[12] = f),
        (t[13] = te),
        (t[14] = ne),
        (t[15] = m),
        (t[16] = C))
      : (C = t[16]),
    C
  );
}
function Nt(e) {
  let t = (0, Z.useRef)(null),
    [n, r] = (0, Z.useState)(null),
    [i, a] = (0, Z.useState)({ kind: `fit-width` }),
    o =
      i.kind === `fit-width`
        ? (Lt({
            bodyContainer: e.current,
            bodyContainerWidth: n,
            zoomPercent: Jt,
          }) ?? Jt)
        : i.zoomPercent,
    s = x((e) => {
      let t = Math.floor(e.contentRect.width);
      r((e) => (e === t ? e : t));
    }),
    c = () => {
      t.current = null;
    },
    l = (e) => {
      a({ kind: `percentage`, zoomPercent: E(e) });
    };
  return {
    fitToWidth: () => {
      let t = i.kind === `fit-width` ? null : Bt(e.current);
      Lt({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: o }) !=
        null &&
        (a({ kind: `fit-width` }),
        t != null &&
          window.requestAnimationFrame(() => {
            t.scrollIntoView({ block: `center`, inline: `center` });
          }));
    },
    handleTouchCancel: c,
    handleTouchEnd: c,
    handleTouchMove: (e) => {
      let n = t.current;
      if (e.touches.length !== 2 || n == null) return;
      e.preventDefault();
      let r = ue(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.touches[1].clientX,
        e.touches[1].clientY,
      );
      r <= 0 ||
        n.distance <= 0 ||
        a({
          kind: `percentage`,
          zoomPercent: T({
            initialDistance: n.distance,
            initialZoomPercent: n.zoomPercent,
            nextDistance: r,
          }),
        });
    },
    handleTouchStart: (e) => {
      if (e.touches.length !== 2) {
        c();
        return;
      }
      (e.preventDefault(),
        (t.current = {
          distance: ue(
            e.touches[0].clientX,
            e.touches[0].clientY,
            e.touches[1].clientX,
            e.touches[1].clientY,
          ),
          zoomPercent: o,
        }));
    },
    handleWheel: (e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        a((t) => ({
          kind: `percentage`,
          zoomPercent: ie(
            t.kind === `percentage` ? t.zoomPercent : o,
            e.deltaY,
          ),
        })));
    },
    isZoomToFitSelected: i.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${o / 100}` },
    resizeRef: s,
    setZoomPercent: l,
    zoomPercent: o,
  };
}
async function Pt({
  bytes: e,
  bodyContainer: t,
  renderAsync: n,
  styleContainer: r,
}) {
  try {
    return (
      await n(e, t, r, { className: $, renderAltChunks: !1, useBase64URL: !0 }),
      Ut(r),
      !0
    );
  } catch {
    return !1;
  }
}
function Ft({ bodyContainer: e, styleContainer: t }) {
  (e.replaceChildren(), t.replaceChildren());
}
function It(e) {
  return e.replace(/\.docx$/i, ``);
}
function Lt({ bodyContainer: e, bodyContainerWidth: t, zoomPercent: n }) {
  if (e == null) return null;
  let r = e.querySelector(Xt);
  if (r == null) return null;
  let i = r.parentElement ?? e,
    a = window.getComputedStyle(i),
    o = Number.parseFloat(a.paddingLeft) + Number.parseFloat(a.paddingRight),
    s = Math.max(
      1,
      ((t ?? i.clientWidth) || e.clientWidth) - (Number.isFinite(o) ? o : 0),
    ),
    c = Number.parseFloat(window.getComputedStyle(r).width),
    l =
      c > 0 ? c : r.getBoundingClientRect().width / Math.max(n / 100, 2 ** -52);
  return !Number.isFinite(l) || l <= 0 ? null : E(Math.round((s / l) * 100));
}
function Rt(e) {
  return Array.from(e.querySelectorAll(Xt));
}
function zt(e, t, n, r) {
  if (!Number.isInteger(t) || t < 1) return !1;
  let i = Rt(e)[t - 1];
  if (i == null) return !1;
  n.current != null &&
    (window.cancelAnimationFrame(n.current), (n.current = null));
  let a = Yt,
    o = () => {
      let t = e.getBoundingClientRect(),
        s = i.getBoundingClientRect(),
        c = e.scrollTop + (s.top - t.top) / Math.max(r, 2 ** -52);
      if ((e.scrollTo({ top: c }), --a, a > 0)) {
        n.current = window.requestAnimationFrame(o);
        return;
      }
      n.current = null;
    };
  return ((n.current = window.requestAnimationFrame(o)), !0);
}
function Bt(e) {
  if (e == null) return null;
  let t = Rt(e);
  if (t.length === 0) return null;
  let n = e.getBoundingClientRect(),
    r = n.top + n.height / 2,
    i = t[0],
    a = 1 / 0;
  for (let e of t) {
    let t = e.getBoundingClientRect(),
      n = t.top + t.height / 2,
      o = Math.abs(n - r);
    o < a && ((i = e), (a = o));
  }
  return i;
}
function Vt(e, t) {
  let n = window.getComputedStyle(e),
    r = Number.parseFloat(n.width),
    i = Number.parseFloat(n.height),
    a = e.getBoundingClientRect(),
    o = Math.max(t / 100, 2 ** -52);
  return {
    height: Number.isFinite(i) && i > 0 ? i : a.height / o,
    width: Number.isFinite(r) && r > 0 ? r : a.width / o,
  };
}
function Ht(e, t) {
  return (
    a(e) &&
    e.localArtifactAnnotationContext?.artifactKind === `document` &&
    e.localArtifactAnnotationContext.path === t
  );
}
function Ut(e) {
  let t = document.createElement(`style`);
  ((t.textContent = qt), e.appendChild(t));
}
var Wt, Z, Gt, Q, $, Kt, qt, Jt, Yt, Xt, Zt;
e(() => {
  ((Wt = f()),
    c(),
    s(),
    (Z = t(u(), 1)),
    (Gt = t(ae(), 1)),
    se(),
    _(),
    k(),
    g(),
    D(),
    te(),
    R(),
    je(),
    fe(),
    Ne(),
    de(),
    At(),
    (Q = m()),
    d(),
    ($ = `codex-docx-preview`),
    (Kt = `h-full min-h-0 overflow-auto bg-token-side-bar-background overscroll-contain`),
    (qt = `
  .${$}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${v};
    background: var(--color-token-side-bar-background) !important;
  }

  .${$}-wrapper > section.${$} {
    margin: 0 !important;
    border: 1px solid var(--color-token-border-default);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
    position: relative;
    overflow: hidden;
  }

  :root:where(
    [data-codex-window-type="browser"],
    [data-codex-window-type="chrome-extension"],
    [data-codex-window-type="electron"]
  ) .${$}-wrapper > section.${$} {
    border-color: transparent;
    box-shadow: var(--elevation-prominent);
  }

  .${$} [data-paged-annotation-ask-for-edit="true"],
  .${$} [data-paged-annotation-ask-for-edit="true"] * {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif !important;
    font-size: 12px !important;
    letter-spacing: -0.3px !important;
    line-height: 18px !important;
    white-space: nowrap !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-label="true"] {
    font-weight: 400 !important;
  }

  .${$} [data-paged-annotation-ask-for-edit-shortcut="true"] {
    font-weight: 500 !important;
  }
`),
    (Jt = 75),
    (Yt = 12),
    (Xt = `section.${$}`),
    (Zt = p(
      async () => {
        let { renderAsync: e } = await import(`./docx-preview`);
        return { renderAsync: e };
      },
      __vite__mapDeps([0]),
      import.meta.url,
    ).then(
      ({ renderAsync: e }) => e,
      () => null,
    )));
})();
export { jt as DocxPreviewPanel };
