// Restored from ref/webview/assets/chunk-ABZYJK2D-Ugtemmk_.js
// ChunkABZYJK2D chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  chunkABZYJK2DParam75,
  chunkABZYJK2DParam76 = __vite__mapDeps,
  chunkABZYJK2DParam77 = chunkABZYJK2DParam76.f ||
    (chunkABZYJK2DParam76.f = [
      "../utils/katex",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj-DZ7tupb9.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~g5252vxb-CZkpVhg2.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-zz_Wr7F0.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-sS9Dm_y9.css",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~chrf619l-Bf5oWcQG.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-9F1MU8ql.css",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~dg864qec-ISZMeMHq.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-czZPzzcM.css",
    ]),
) => chunkABZYJK2DParam75.map((item) => chunkABZYJK2DParam77[item]);
import { PreloadHelper } from "../utils/preload-helper";
import {
  chunkAGHRB4JFI,
  chunkAGHRB4JFN,
  chunkAGHRB4JFR,
  chunkAGHRB4JFT,
} from "./dompurify";
import {
  invertI,
  invertN,
  invertO,
  invertR,
  invertS,
  invertT,
} from "./color-convert";
var {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor,
  } = Object,
  { freeze, seal, create } = Object,
  { apply, construct } = typeof Reflect < "u" && Reflect;
freeze ||= function (chunkABZYJK2DParam142) {
  return chunkABZYJK2DParam142;
};
seal ||= function (chunkABZYJK2DParam140) {
  return chunkABZYJK2DParam140;
};
apply ||= function (chunkABZYJK2DParam85, chunkABZYJK2DParam86) {
  var chunkABZYJK2DValue263 = [...arguments].slice(2);
  return chunkABZYJK2DParam85.apply(
    chunkABZYJK2DParam86,
    chunkABZYJK2DValue263,
  );
};
construct ||= function (chunkABZYJK2DParam111) {
  return new chunkABZYJK2DParam111(...[...arguments].slice(1));
};
var chunkABZYJK2DValue1 = chunkABZYJK2DHelper1(Array.prototype.forEach),
  chunkABZYJK2DValue2 = chunkABZYJK2DHelper1(Array.prototype.lastIndexOf),
  chunkABZYJK2DValue3 = chunkABZYJK2DHelper1(Array.prototype.pop),
  chunkABZYJK2DValue4 = chunkABZYJK2DHelper1(Array.prototype.push),
  chunkABZYJK2DValue5 = chunkABZYJK2DHelper1(Array.prototype.splice),
  chunkABZYJK2DValue6 = chunkABZYJK2DHelper1(String.prototype.toLowerCase),
  chunkABZYJK2DValue7 = chunkABZYJK2DHelper1(String.prototype.toString),
  chunkABZYJK2DValue8 = chunkABZYJK2DHelper1(String.prototype.match),
  chunkABZYJK2DValue9 = chunkABZYJK2DHelper1(String.prototype.replace),
  chunkABZYJK2DValue10 = chunkABZYJK2DHelper1(String.prototype.indexOf),
  chunkABZYJK2DValue11 = chunkABZYJK2DHelper1(String.prototype.trim),
  chunkABZYJK2DValue12 = chunkABZYJK2DHelper1(Object.prototype.hasOwnProperty),
  chunkABZYJK2DValue13 = chunkABZYJK2DHelper1(RegExp.prototype.test),
  _e = chunkABZYJK2DHelper2(TypeError);
function chunkABZYJK2DHelper1(chunkABZYJK2DParam71) {
  return function (chunkABZYJK2DParam74) {
    chunkABZYJK2DParam74 instanceof RegExp &&
      (chunkABZYJK2DParam74.lastIndex = 0);
    var chunkABZYJK2DValue248 = [...arguments].slice(1);
    return apply(
      chunkABZYJK2DParam71,
      chunkABZYJK2DParam74,
      chunkABZYJK2DValue248,
    );
  };
}
function chunkABZYJK2DHelper2(chunkABZYJK2DParam87) {
  return function () {
    return construct(chunkABZYJK2DParam87, [...arguments]);
  };
}
function chunkABZYJK2DHelper3(chunkABZYJK2DParam36, chunkABZYJK2DParam37) {
  let chunkABZYJK2DValue200 =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : chunkABZYJK2DValue6;
  setPrototypeOf && setPrototypeOf(chunkABZYJK2DParam36, null);
  let chunkABZYJK2DValue201 = chunkABZYJK2DParam37.length;
  for (; chunkABZYJK2DValue201--; ) {
    let chunkABZYJK2DValue238 = chunkABZYJK2DParam37[chunkABZYJK2DValue201];
    if (typeof chunkABZYJK2DValue238 == "string") {
      let chunkABZYJK2DValue266 = chunkABZYJK2DValue200(chunkABZYJK2DValue238);
      chunkABZYJK2DValue266 !== chunkABZYJK2DValue238 &&
        (isFrozen(chunkABZYJK2DParam37) ||
          (chunkABZYJK2DParam37[chunkABZYJK2DValue201] = chunkABZYJK2DValue266),
        (chunkABZYJK2DValue238 = chunkABZYJK2DValue266));
    }
    chunkABZYJK2DParam36[chunkABZYJK2DValue238] = true;
  }
  return chunkABZYJK2DParam36;
}
function chunkABZYJK2DHelper4(chunkABZYJK2DParam80) {
  for (
    let chunkABZYJK2DValue274 = 0;
    chunkABZYJK2DValue274 < chunkABZYJK2DParam80.length;
    chunkABZYJK2DValue274++
  )
    chunkABZYJK2DValue12(chunkABZYJK2DParam80, chunkABZYJK2DValue274) ||
      (chunkABZYJK2DParam80[chunkABZYJK2DValue274] = null);
  return chunkABZYJK2DParam80;
}
function chunkABZYJK2DHelper5(chunkABZYJK2DParam50) {
  let chunkABZYJK2DValue216 = create(null);
  for (let [chunkABZYJK2DValue227, chunkABZYJK2DValue228] of entries(
    chunkABZYJK2DParam50,
  ))
    chunkABZYJK2DValue12(chunkABZYJK2DParam50, chunkABZYJK2DValue227) &&
      (Array.isArray(chunkABZYJK2DValue228)
        ? (chunkABZYJK2DValue216[chunkABZYJK2DValue227] = chunkABZYJK2DHelper4(
            chunkABZYJK2DValue228,
          ))
        : chunkABZYJK2DValue228 &&
            typeof chunkABZYJK2DValue228 == "object" &&
            chunkABZYJK2DValue228.constructor === Object
          ? (chunkABZYJK2DValue216[chunkABZYJK2DValue227] =
              chunkABZYJK2DHelper5(chunkABZYJK2DValue228))
          : (chunkABZYJK2DValue216[chunkABZYJK2DValue227] =
              chunkABZYJK2DValue228));
  return chunkABZYJK2DValue216;
}
function chunkABZYJK2DHelper6(chunkABZYJK2DParam51, chunkABZYJK2DParam52) {
  for (; chunkABZYJK2DParam51 !== null; ) {
    let chunkABZYJK2DValue235 = getOwnPropertyDescriptor(
      chunkABZYJK2DParam51,
      chunkABZYJK2DParam52,
    );
    if (chunkABZYJK2DValue235) {
      if (chunkABZYJK2DValue235.get)
        return chunkABZYJK2DHelper1(chunkABZYJK2DValue235.get);
      if (typeof chunkABZYJK2DValue235.value == "function")
        return chunkABZYJK2DHelper1(chunkABZYJK2DValue235.value);
    }
    chunkABZYJK2DParam51 = getPrototypeOf(chunkABZYJK2DParam51);
  }
  function chunkABZYJK2DHelper10() {
    return null;
  }
  return chunkABZYJK2DHelper10;
}
var be = freeze(
    "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue14 = freeze(
    "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue15 = freeze([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  chunkABZYJK2DValue16 = freeze([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  chunkABZYJK2DValue17 = freeze(
    "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue18 = freeze([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  chunkABZYJK2DValue19 = freeze(["#text"]),
  chunkABZYJK2DValue20 = freeze(
    "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue21 = freeze(
    "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue22 = freeze(
    "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(
      ".",
    ),
  ),
  chunkABZYJK2DValue23 = freeze([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink",
  ]),
  chunkABZYJK2DValue24 = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  chunkABZYJK2DValue25 = seal(/<%[\w\W]*|[\w\W]*%>/gm),
  chunkABZYJK2DValue26 = seal(/\$\{[\w\W]*/gm),
  chunkABZYJK2DValue27 = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  chunkABZYJK2DValue28 = seal(/^aria-[\-\w]+$/),
  chunkABZYJK2DValue29 = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ),
  chunkABZYJK2DValue30 = seal(/^(?:\w+script|data):/i),
  chunkABZYJK2DValue31 = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g,
  ),
  chunkABZYJK2DValue32 = seal(/^html$/i),
  chunkABZYJK2DValue33 = seal(/^[a-z][.\w]*(-[.\w]+)+$/i),
  chunkABZYJK2DValue34 = Object.freeze({
    __proto__: null,
    ARIA_ATTR: chunkABZYJK2DValue28,
    ATTR_WHITESPACE: chunkABZYJK2DValue31,
    CUSTOM_ELEMENT: chunkABZYJK2DValue33,
    DATA_ATTR: chunkABZYJK2DValue27,
    DOCTYPE_NAME: chunkABZYJK2DValue32,
    ERB_EXPR: chunkABZYJK2DValue25,
    IS_ALLOWED_URI: chunkABZYJK2DValue29,
    IS_SCRIPT_OR_DATA: chunkABZYJK2DValue30,
    MUSTACHE_EXPR: chunkABZYJK2DValue24,
    TMPLIT_EXPR: chunkABZYJK2DValue26,
  }),
  chunkABZYJK2DValue35 = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
  },
  chunkABZYJK2DValue36 = function () {
    return typeof window > "u" ? null : window;
  },
  chunkABZYJK2DValue37 = function (chunkABZYJK2DParam18, chunkABZYJK2DParam19) {
    if (
      typeof chunkABZYJK2DParam18 != "object" ||
      typeof chunkABZYJK2DParam18.createPolicy != "function"
    )
      return null;
    let chunkABZYJK2DValue176 = null;
    chunkABZYJK2DParam19 &&
      chunkABZYJK2DParam19.hasAttribute("data-tt-policy-suffix") &&
      (chunkABZYJK2DValue176 = chunkABZYJK2DParam19.getAttribute(
        "data-tt-policy-suffix",
      ));
    let chunkABZYJK2DValue178 =
      "dompurify" + (chunkABZYJK2DValue176 ? "#" + chunkABZYJK2DValue176 : "");
    try {
      return chunkABZYJK2DParam18.createPolicy(chunkABZYJK2DValue178, {
        createHTML(chunkABZYJK2DParam129) {
          return chunkABZYJK2DParam129;
        },
        createScriptURL(chunkABZYJK2DParam125) {
          return chunkABZYJK2DParam125;
        },
      });
    } catch {
      return (
        console.warn(
          "TrustedTypes policy " +
            chunkABZYJK2DValue178 +
            " could not be created.",
        ),
        null
      );
    }
  },
  chunkABZYJK2DValue38 = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  };
function chunkABZYJK2DHelper7() {
  let chunkABZYJK2DValue95 =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : chunkABZYJK2DValue36(),
    chunkABZYJK2DValue96 = (chunkABZYJK2DParam152) =>
      chunkABZYJK2DHelper7(chunkABZYJK2DParam152);
  if (
    ((chunkABZYJK2DValue96.version = "3.3.0"),
    (chunkABZYJK2DValue96.removed = []),
    !chunkABZYJK2DValue95 ||
      !chunkABZYJK2DValue95.document ||
      chunkABZYJK2DValue95.document.nodeType !==
        chunkABZYJK2DValue35.document ||
      !chunkABZYJK2DValue95.Element)
  )
    return ((chunkABZYJK2DValue96.isSupported = false), chunkABZYJK2DValue96);
  let { document } = chunkABZYJK2DValue95,
    chunkABZYJK2DValue97 = document,
    chunkABZYJK2DValue98 = chunkABZYJK2DValue97.currentScript,
    {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = chunkABZYJK2DValue95.NamedNodeMap ||
        chunkABZYJK2DValue95.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes,
    } = chunkABZYJK2DValue95,
    chunkABZYJK2DValue99 = Element.prototype,
    chunkABZYJK2DValue100 = chunkABZYJK2DHelper6(
      chunkABZYJK2DValue99,
      "cloneNode",
    ),
    chunkABZYJK2DValue101 = chunkABZYJK2DHelper6(
      chunkABZYJK2DValue99,
      "remove",
    ),
    chunkABZYJK2DValue102 = chunkABZYJK2DHelper6(
      chunkABZYJK2DValue99,
      "nextSibling",
    ),
    chunkABZYJK2DValue103 = chunkABZYJK2DHelper6(
      chunkABZYJK2DValue99,
      "childNodes",
    ),
    chunkABZYJK2DValue104 = chunkABZYJK2DHelper6(
      chunkABZYJK2DValue99,
      "parentNode",
    );
  if (typeof HTMLTemplateElement == "function") {
    let chunkABZYJK2DValue250 = document.createElement("template");
    chunkABZYJK2DValue250.content &&
      chunkABZYJK2DValue250.content.ownerDocument &&
      (document = chunkABZYJK2DValue250.content.ownerDocument);
  }
  let chunkABZYJK2DValue105,
    chunkABZYJK2DValue106 = "",
    {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName,
    } = document,
    { importNode } = chunkABZYJK2DValue97,
    chunkABZYJK2DValue107 = chunkABZYJK2DValue38();
  chunkABZYJK2DValue96.isSupported =
    typeof entries == "function" &&
    typeof chunkABZYJK2DValue104 == "function" &&
    implementation &&
    implementation.createHTMLDocument !== undefined;
  let {
      MUSTACHE_EXPR,
      ERB_EXPR: __chunkABZYJK2DX,
      TMPLIT_EXPR: __chunkABZYJK2DG,
      DATA_ATTR: __chunkABZYJK2DM,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA: __chunkABZYJK2DT,
      ATTR_WHITESPACE: __chunkABZYJK2DP,
      CUSTOM_ELEMENT: __chunkABZYJK2DF,
    } = chunkABZYJK2DValue34,
    { IS_ALLOWED_URI: ___chunkABZYJK2DM } = chunkABZYJK2DValue34,
    chunkABZYJK2DValue108 = null,
    __chunkABZYJK2DS = chunkABZYJK2DHelper3({}, [
      ...be,
      ...chunkABZYJK2DValue14,
      ...chunkABZYJK2DValue15,
      ...chunkABZYJK2DValue17,
      ...chunkABZYJK2DValue19,
    ]),
    chunkABZYJK2DValue109 = null,
    __chunkABZYJK2DR = chunkABZYJK2DHelper3({}, [
      ...chunkABZYJK2DValue20,
      ...chunkABZYJK2DValue21,
      ...chunkABZYJK2DValue22,
      ...chunkABZYJK2DValue23,
    ]),
    chunkABZYJK2DValue110 = Object.seal(
      create(null, {
        tagNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        attributeNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: false,
        },
      }),
    ),
    chunkABZYJK2DValue111 = null,
    chunkABZYJK2DValue112 = null,
    chunkABZYJK2DValue113 = Object.seal(
      create(null, {
        tagCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        attributeCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
      }),
    ),
    chunkABZYJK2DValue114 = true,
    $e = true,
    chunkABZYJK2DValue115 = false,
    chunkABZYJK2DValue116 = true,
    ___chunkABZYJK2DT = false,
    chunkABZYJK2DValue117 = true,
    chunkABZYJK2DValue118 = false,
    chunkABZYJK2DValue119 = false,
    __chunkABZYJK2DJ = false,
    chunkABZYJK2DValue120 = false,
    chunkABZYJK2DValue121 = false,
    chunkABZYJK2DValue122 = false,
    chunkABZYJK2DValue123 = true,
    __chunkABZYJK2DD = false,
    ___chunkABZYJK2DF = true,
    chunkABZYJK2DValue124 = false,
    __chunkABZYJK2DL = {},
    chunkABZYJK2DValue125 = null,
    chunkABZYJK2DValue126 = chunkABZYJK2DHelper3({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]),
    chunkABZYJK2DValue127 = null,
    chunkABZYJK2DValue128 = chunkABZYJK2DHelper3({}, [
      "audio",
      "video",
      "img",
      "source",
      "image",
      "track",
    ]),
    chunkABZYJK2DValue129 = null,
    __chunkABZYJK2DW = chunkABZYJK2DHelper3({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    __chunkABZYJK2DV = "http://www.w3.org/1999/xhtml",
    ___chunkABZYJK2DY = false,
    chunkABZYJK2DValue130 = null,
    __chunkABZYJK2DN = chunkABZYJK2DHelper3(
      {},
      [
        "http://www.w3.org/1998/Math/MathML",
        "http://www.w3.org/2000/svg",
        "http://www.w3.org/1999/xhtml",
      ],
      chunkABZYJK2DValue7,
    ),
    ___chunkABZYJK2DP = chunkABZYJK2DHelper3({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
    ]),
    chunkABZYJK2DValue131 = chunkABZYJK2DHelper3({}, ["annotation-xml"]),
    chunkABZYJK2DValue132 = chunkABZYJK2DHelper3({}, [
      "title",
      "style",
      "font",
      "a",
      "script",
    ]),
    chunkABZYJK2DValue133 = null,
    chunkABZYJK2DValue134 = ["application/xhtml+xml", "text/html"],
    ___chunkABZYJK2DD = null,
    __chunkABZYJK2DK = null,
    _t = document.createElement("form"),
    chunkABZYJK2DValue135 = function (chunkABZYJK2DParam89) {
      return (
        chunkABZYJK2DParam89 instanceof RegExp ||
        chunkABZYJK2DParam89 instanceof Function
      );
    },
    chunkABZYJK2DValue136 = function () {
      let chunkABZYJK2DValue149 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!(__chunkABZYJK2DK && __chunkABZYJK2DK === chunkABZYJK2DValue149)) {
        if (
          ((!chunkABZYJK2DValue149 ||
            typeof chunkABZYJK2DValue149 != "object") &&
            (chunkABZYJK2DValue149 = {}),
          (chunkABZYJK2DValue149 = chunkABZYJK2DHelper5(chunkABZYJK2DValue149)),
          (chunkABZYJK2DValue133 =
            chunkABZYJK2DValue134.indexOf(
              chunkABZYJK2DValue149.PARSER_MEDIA_TYPE,
            ) === -1
              ? "text/html"
              : chunkABZYJK2DValue149.PARSER_MEDIA_TYPE),
          (___chunkABZYJK2DD =
            chunkABZYJK2DValue133 === "application/xhtml+xml"
              ? chunkABZYJK2DValue7
              : chunkABZYJK2DValue6),
          (chunkABZYJK2DValue108 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "ALLOWED_TAGS",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.ALLOWED_TAGS,
                ___chunkABZYJK2DD,
              )
            : __chunkABZYJK2DS),
          (chunkABZYJK2DValue109 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "ALLOWED_ATTR",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.ALLOWED_ATTR,
                ___chunkABZYJK2DD,
              )
            : __chunkABZYJK2DR),
          (chunkABZYJK2DValue130 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "ALLOWED_NAMESPACES",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.ALLOWED_NAMESPACES,
                chunkABZYJK2DValue7,
              )
            : __chunkABZYJK2DN),
          (chunkABZYJK2DValue129 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "ADD_URI_SAFE_ATTR",
          )
            ? chunkABZYJK2DHelper3(
                chunkABZYJK2DHelper5(__chunkABZYJK2DW),
                chunkABZYJK2DValue149.ADD_URI_SAFE_ATTR,
                ___chunkABZYJK2DD,
              )
            : __chunkABZYJK2DW),
          (chunkABZYJK2DValue127 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "ADD_DATA_URI_TAGS",
          )
            ? chunkABZYJK2DHelper3(
                chunkABZYJK2DHelper5(chunkABZYJK2DValue128),
                chunkABZYJK2DValue149.ADD_DATA_URI_TAGS,
                ___chunkABZYJK2DD,
              )
            : chunkABZYJK2DValue128),
          (chunkABZYJK2DValue125 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "FORBID_CONTENTS",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.FORBID_CONTENTS,
                ___chunkABZYJK2DD,
              )
            : chunkABZYJK2DValue126),
          (chunkABZYJK2DValue111 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "FORBID_TAGS",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.FORBID_TAGS,
                ___chunkABZYJK2DD,
              )
            : chunkABZYJK2DHelper5({})),
          (chunkABZYJK2DValue112 = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "FORBID_ATTR",
          )
            ? chunkABZYJK2DHelper3(
                {},
                chunkABZYJK2DValue149.FORBID_ATTR,
                ___chunkABZYJK2DD,
              )
            : chunkABZYJK2DHelper5({})),
          (__chunkABZYJK2DL = chunkABZYJK2DValue12(
            chunkABZYJK2DValue149,
            "USE_PROFILES",
          )
            ? chunkABZYJK2DValue149.USE_PROFILES
            : false),
          (chunkABZYJK2DValue114 =
            chunkABZYJK2DValue149.ALLOW_ARIA_ATTR !== false),
          ($e = chunkABZYJK2DValue149.ALLOW_DATA_ATTR !== false),
          (chunkABZYJK2DValue115 =
            chunkABZYJK2DValue149.ALLOW_UNKNOWN_PROTOCOLS || false),
          (chunkABZYJK2DValue116 =
            chunkABZYJK2DValue149.ALLOW_SELF_CLOSE_IN_ATTR !== false),
          (___chunkABZYJK2DT =
            chunkABZYJK2DValue149.SAFE_FOR_TEMPLATES || false),
          (chunkABZYJK2DValue117 =
            chunkABZYJK2DValue149.SAFE_FOR_XML !== false),
          (chunkABZYJK2DValue118 =
            chunkABZYJK2DValue149.WHOLE_DOCUMENT || false),
          (chunkABZYJK2DValue120 = chunkABZYJK2DValue149.RETURN_DOM || false),
          (chunkABZYJK2DValue121 =
            chunkABZYJK2DValue149.RETURN_DOM_FRAGMENT || false),
          (chunkABZYJK2DValue122 =
            chunkABZYJK2DValue149.RETURN_TRUSTED_TYPE || false),
          (__chunkABZYJK2DJ = chunkABZYJK2DValue149.FORCE_BODY || false),
          (chunkABZYJK2DValue123 =
            chunkABZYJK2DValue149.SANITIZE_DOM !== false),
          (__chunkABZYJK2DD =
            chunkABZYJK2DValue149.SANITIZE_NAMED_PROPS || false),
          (___chunkABZYJK2DF = chunkABZYJK2DValue149.KEEP_CONTENT !== false),
          (chunkABZYJK2DValue124 = chunkABZYJK2DValue149.IN_PLACE || false),
          (___chunkABZYJK2DM =
            chunkABZYJK2DValue149.ALLOWED_URI_REGEXP || chunkABZYJK2DValue29),
          (__chunkABZYJK2DV =
            chunkABZYJK2DValue149.NAMESPACE || "http://www.w3.org/1999/xhtml"),
          (___chunkABZYJK2DP =
            chunkABZYJK2DValue149.MATHML_TEXT_INTEGRATION_POINTS ||
            ___chunkABZYJK2DP),
          (chunkABZYJK2DValue131 =
            chunkABZYJK2DValue149.HTML_INTEGRATION_POINTS ||
            chunkABZYJK2DValue131),
          (chunkABZYJK2DValue110 =
            chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING || {}),
          chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING &&
            chunkABZYJK2DValue135(
              chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING.tagNameCheck,
            ) &&
            (chunkABZYJK2DValue110.tagNameCheck =
              chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING &&
            chunkABZYJK2DValue135(
              chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING.attributeNameCheck,
            ) &&
            (chunkABZYJK2DValue110.attributeNameCheck =
              chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING &&
            typeof chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING
              .allowCustomizedBuiltInElements == "boolean" &&
            (chunkABZYJK2DValue110.allowCustomizedBuiltInElements =
              chunkABZYJK2DValue149.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          ___chunkABZYJK2DT && ($e = false),
          chunkABZYJK2DValue121 && (chunkABZYJK2DValue120 = true),
          __chunkABZYJK2DL &&
            ((chunkABZYJK2DValue108 = chunkABZYJK2DHelper3(
              {},
              chunkABZYJK2DValue19,
            )),
            (chunkABZYJK2DValue109 = []),
            __chunkABZYJK2DL.html === true &&
              (chunkABZYJK2DHelper3(chunkABZYJK2DValue108, be),
              chunkABZYJK2DHelper3(
                chunkABZYJK2DValue109,
                chunkABZYJK2DValue20,
              )),
            __chunkABZYJK2DL.svg === true &&
              (chunkABZYJK2DHelper3(
                chunkABZYJK2DValue108,
                chunkABZYJK2DValue14,
              ),
              chunkABZYJK2DHelper3(chunkABZYJK2DValue109, chunkABZYJK2DValue21),
              chunkABZYJK2DHelper3(
                chunkABZYJK2DValue109,
                chunkABZYJK2DValue23,
              )),
            __chunkABZYJK2DL.svgFilters === true &&
              (chunkABZYJK2DHelper3(
                chunkABZYJK2DValue108,
                chunkABZYJK2DValue15,
              ),
              chunkABZYJK2DHelper3(chunkABZYJK2DValue109, chunkABZYJK2DValue21),
              chunkABZYJK2DHelper3(
                chunkABZYJK2DValue109,
                chunkABZYJK2DValue23,
              )),
            __chunkABZYJK2DL.mathMl === true &&
              (chunkABZYJK2DHelper3(
                chunkABZYJK2DValue108,
                chunkABZYJK2DValue17,
              ),
              chunkABZYJK2DHelper3(chunkABZYJK2DValue109, chunkABZYJK2DValue22),
              chunkABZYJK2DHelper3(
                chunkABZYJK2DValue109,
                chunkABZYJK2DValue23,
              ))),
          chunkABZYJK2DValue149.ADD_TAGS &&
            (typeof chunkABZYJK2DValue149.ADD_TAGS == "function"
              ? (chunkABZYJK2DValue113.tagCheck =
                  chunkABZYJK2DValue149.ADD_TAGS)
              : (chunkABZYJK2DValue108 === __chunkABZYJK2DS &&
                  (chunkABZYJK2DValue108 = chunkABZYJK2DHelper5(
                    chunkABZYJK2DValue108,
                  )),
                chunkABZYJK2DHelper3(
                  chunkABZYJK2DValue108,
                  chunkABZYJK2DValue149.ADD_TAGS,
                  ___chunkABZYJK2DD,
                ))),
          chunkABZYJK2DValue149.ADD_ATTR &&
            (typeof chunkABZYJK2DValue149.ADD_ATTR == "function"
              ? (chunkABZYJK2DValue113.attributeCheck =
                  chunkABZYJK2DValue149.ADD_ATTR)
              : (chunkABZYJK2DValue109 === __chunkABZYJK2DR &&
                  (chunkABZYJK2DValue109 = chunkABZYJK2DHelper5(
                    chunkABZYJK2DValue109,
                  )),
                chunkABZYJK2DHelper3(
                  chunkABZYJK2DValue109,
                  chunkABZYJK2DValue149.ADD_ATTR,
                  ___chunkABZYJK2DD,
                ))),
          chunkABZYJK2DValue149.ADD_URI_SAFE_ATTR &&
            chunkABZYJK2DHelper3(
              chunkABZYJK2DValue129,
              chunkABZYJK2DValue149.ADD_URI_SAFE_ATTR,
              ___chunkABZYJK2DD,
            ),
          chunkABZYJK2DValue149.FORBID_CONTENTS &&
            (chunkABZYJK2DValue125 === chunkABZYJK2DValue126 &&
              (chunkABZYJK2DValue125 = chunkABZYJK2DHelper5(
                chunkABZYJK2DValue125,
              )),
            chunkABZYJK2DHelper3(
              chunkABZYJK2DValue125,
              chunkABZYJK2DValue149.FORBID_CONTENTS,
              ___chunkABZYJK2DD,
            )),
          ___chunkABZYJK2DF && (chunkABZYJK2DValue108["#text"] = true),
          chunkABZYJK2DValue118 &&
            chunkABZYJK2DHelper3(chunkABZYJK2DValue108, [
              "html",
              "head",
              "body",
            ]),
          chunkABZYJK2DValue108.table &&
            (chunkABZYJK2DHelper3(chunkABZYJK2DValue108, ["tbody"]),
            delete chunkABZYJK2DValue111.tbody),
          chunkABZYJK2DValue149.TRUSTED_TYPES_POLICY)
        ) {
          if (
            typeof chunkABZYJK2DValue149.TRUSTED_TYPES_POLICY.createHTML !=
            "function"
          )
            throw _e(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
            );
          if (
            typeof chunkABZYJK2DValue149.TRUSTED_TYPES_POLICY.createScriptURL !=
            "function"
          )
            throw _e(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
            );
          chunkABZYJK2DValue105 = chunkABZYJK2DValue149.TRUSTED_TYPES_POLICY;
          chunkABZYJK2DValue106 = chunkABZYJK2DValue105.createHTML("");
        } else {
          chunkABZYJK2DValue105 === undefined &&
            (chunkABZYJK2DValue105 = chunkABZYJK2DValue37(
              trustedTypes,
              chunkABZYJK2DValue98,
            ));
          chunkABZYJK2DValue105 !== null &&
            typeof chunkABZYJK2DValue106 == "string" &&
            (chunkABZYJK2DValue106 = chunkABZYJK2DValue105.createHTML(""));
        }
        freeze && freeze(chunkABZYJK2DValue149);
        __chunkABZYJK2DK = chunkABZYJK2DValue149;
      }
    },
    chunkABZYJK2DValue137 = chunkABZYJK2DHelper3({}, [
      ...chunkABZYJK2DValue14,
      ...chunkABZYJK2DValue15,
      ...chunkABZYJK2DValue16,
    ]),
    chunkABZYJK2DValue138 = chunkABZYJK2DHelper3({}, [
      ...chunkABZYJK2DValue17,
      ...chunkABZYJK2DValue18,
    ]),
    __chunkABZYJK2DI = function (chunkABZYJK2DParam16) {
      let chunkABZYJK2DValue171 = chunkABZYJK2DValue104(chunkABZYJK2DParam16);
      (!chunkABZYJK2DValue171 || !chunkABZYJK2DValue171.tagName) &&
        (chunkABZYJK2DValue171 = {
          namespaceURI: __chunkABZYJK2DV,
          tagName: "template",
        });
      let chunkABZYJK2DValue172 = chunkABZYJK2DValue6(
          chunkABZYJK2DParam16.tagName,
        ),
        chunkABZYJK2DValue173 = chunkABZYJK2DValue6(
          chunkABZYJK2DValue171.tagName,
        );
      return chunkABZYJK2DValue130[chunkABZYJK2DParam16.namespaceURI]
        ? chunkABZYJK2DParam16.namespaceURI === "http://www.w3.org/2000/svg"
          ? chunkABZYJK2DValue171.namespaceURI ===
            "http://www.w3.org/1999/xhtml"
            ? chunkABZYJK2DValue172 === "svg"
            : chunkABZYJK2DValue171.namespaceURI ===
                "http://www.w3.org/1998/Math/MathML"
              ? chunkABZYJK2DValue172 === "svg" &&
                (chunkABZYJK2DValue173 === "annotation-xml" ||
                  ___chunkABZYJK2DP[chunkABZYJK2DValue173])
              : !!chunkABZYJK2DValue137[chunkABZYJK2DValue172]
          : chunkABZYJK2DParam16.namespaceURI ===
              "http://www.w3.org/1998/Math/MathML"
            ? chunkABZYJK2DValue171.namespaceURI ===
              "http://www.w3.org/1999/xhtml"
              ? chunkABZYJK2DValue172 === "math"
              : chunkABZYJK2DValue171.namespaceURI ===
                  "http://www.w3.org/2000/svg"
                ? chunkABZYJK2DValue172 === "math" &&
                  chunkABZYJK2DValue131[chunkABZYJK2DValue173]
                : !!chunkABZYJK2DValue138[chunkABZYJK2DValue172]
            : chunkABZYJK2DParam16.namespaceURI ===
                "http://www.w3.org/1999/xhtml"
              ? (chunkABZYJK2DValue171.namespaceURI ===
                  "http://www.w3.org/2000/svg" &&
                  !chunkABZYJK2DValue131[chunkABZYJK2DValue173]) ||
                (chunkABZYJK2DValue171.namespaceURI ===
                  "http://www.w3.org/1998/Math/MathML" &&
                  !___chunkABZYJK2DP[chunkABZYJK2DValue173])
                ? false
                : !chunkABZYJK2DValue138[chunkABZYJK2DValue172] &&
                  (chunkABZYJK2DValue132[chunkABZYJK2DValue172] ||
                    !chunkABZYJK2DValue137[chunkABZYJK2DValue172])
              : !!(
                  chunkABZYJK2DValue133 === "application/xhtml+xml" &&
                  chunkABZYJK2DValue130[chunkABZYJK2DParam16.namespaceURI]
                )
        : false;
    },
    chunkABZYJK2DValue139 = function (chunkABZYJK2DParam72) {
      chunkABZYJK2DValue4(chunkABZYJK2DValue96.removed, {
        element: chunkABZYJK2DParam72,
      });
      try {
        chunkABZYJK2DValue104(chunkABZYJK2DParam72).removeChild(
          chunkABZYJK2DParam72,
        );
      } catch {
        chunkABZYJK2DValue101(chunkABZYJK2DParam72);
      }
    },
    chunkABZYJK2DValue140 = function (
      chunkABZYJK2DParam29,
      chunkABZYJK2DParam30,
    ) {
      try {
        chunkABZYJK2DValue4(chunkABZYJK2DValue96.removed, {
          attribute:
            chunkABZYJK2DParam30.getAttributeNode(chunkABZYJK2DParam29),
          from: chunkABZYJK2DParam30,
        });
      } catch {
        chunkABZYJK2DValue4(chunkABZYJK2DValue96.removed, {
          attribute: null,
          from: chunkABZYJK2DParam30,
        });
      }
      if (
        (chunkABZYJK2DParam30.removeAttribute(chunkABZYJK2DParam29),
        chunkABZYJK2DParam29 === "is")
      )
        if (chunkABZYJK2DValue120 || chunkABZYJK2DValue121)
          try {
            chunkABZYJK2DValue139(chunkABZYJK2DParam30);
          } catch {}
        else
          try {
            chunkABZYJK2DParam30.setAttribute(chunkABZYJK2DParam29, "");
          } catch {}
    },
    chunkABZYJK2DValue141 = function (chunkABZYJK2DParam15) {
      let chunkABZYJK2DValue167 = null,
        chunkABZYJK2DValue168 = null;
      if (__chunkABZYJK2DJ)
        chunkABZYJK2DParam15 = "<remove></remove>" + chunkABZYJK2DParam15;
      else {
        let chunkABZYJK2DValue269 = chunkABZYJK2DValue8(
          chunkABZYJK2DParam15,
          /^[\r\n\t ]+/,
        );
        chunkABZYJK2DValue168 =
          chunkABZYJK2DValue269 && chunkABZYJK2DValue269[0];
      }
      chunkABZYJK2DValue133 === "application/xhtml+xml" &&
        __chunkABZYJK2DV === "http://www.w3.org/1999/xhtml" &&
        (chunkABZYJK2DParam15 =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          chunkABZYJK2DParam15 +
          "</body></html>");
      let chunkABZYJK2DValue169 = chunkABZYJK2DValue105
        ? chunkABZYJK2DValue105.createHTML(chunkABZYJK2DParam15)
        : chunkABZYJK2DParam15;
      if (__chunkABZYJK2DV === "http://www.w3.org/1999/xhtml")
        try {
          chunkABZYJK2DValue167 = new DOMParser().parseFromString(
            chunkABZYJK2DValue169,
            chunkABZYJK2DValue133,
          );
        } catch {}
      if (!chunkABZYJK2DValue167 || !chunkABZYJK2DValue167.documentElement) {
        chunkABZYJK2DValue167 = implementation.createDocument(
          __chunkABZYJK2DV,
          "template",
          null,
        );
        try {
          chunkABZYJK2DValue167.documentElement.innerHTML = ___chunkABZYJK2DY
            ? chunkABZYJK2DValue106
            : chunkABZYJK2DValue169;
        } catch {}
      }
      let chunkABZYJK2DValue170 =
        chunkABZYJK2DValue167.body || chunkABZYJK2DValue167.documentElement;
      return (
        chunkABZYJK2DParam15 &&
          chunkABZYJK2DValue168 &&
          chunkABZYJK2DValue170.insertBefore(
            document.createTextNode(chunkABZYJK2DValue168),
            chunkABZYJK2DValue170.childNodes[0] || null,
          ),
        __chunkABZYJK2DV === "http://www.w3.org/1999/xhtml"
          ? getElementsByTagName.call(
              chunkABZYJK2DValue167,
              chunkABZYJK2DValue118 ? "html" : "body",
            )[0]
          : chunkABZYJK2DValue118
            ? chunkABZYJK2DValue167.documentElement
            : chunkABZYJK2DValue170
      );
    },
    chunkABZYJK2DValue142 = function (chunkABZYJK2DParam48) {
      return createNodeIterator.call(
        chunkABZYJK2DParam48.ownerDocument || chunkABZYJK2DParam48,
        chunkABZYJK2DParam48,
        NodeFilter.SHOW_ELEMENT |
          NodeFilter.SHOW_COMMENT |
          NodeFilter.SHOW_TEXT |
          NodeFilter.SHOW_PROCESSING_INSTRUCTION |
          NodeFilter.SHOW_CDATA_SECTION,
        null,
      );
    },
    chunkABZYJK2DValue143 = function (chunkABZYJK2DParam20) {
      return (
        chunkABZYJK2DParam20 instanceof HTMLFormElement &&
        (typeof chunkABZYJK2DParam20.nodeName != "string" ||
          typeof chunkABZYJK2DParam20.textContent != "string" ||
          typeof chunkABZYJK2DParam20.removeChild != "function" ||
          !(chunkABZYJK2DParam20.attributes instanceof NamedNodeMap) ||
          typeof chunkABZYJK2DParam20.removeAttribute != "function" ||
          typeof chunkABZYJK2DParam20.setAttribute != "function" ||
          typeof chunkABZYJK2DParam20.namespaceURI != "string" ||
          typeof chunkABZYJK2DParam20.insertBefore != "function" ||
          typeof chunkABZYJK2DParam20.hasChildNodes != "function")
      );
    },
    _chunkABZYJK2DE = function (chunkABZYJK2DParam95) {
      return typeof Node == "function" && chunkABZYJK2DParam95 instanceof Node;
    };
  function __chunkABZYJK2DH(
    chunkABZYJK2DParam90,
    chunkABZYJK2DParam91,
    chunkABZYJK2DParam92,
  ) {
    chunkABZYJK2DValue1(chunkABZYJK2DParam90, (chunkABZYJK2DParam133) => {
      chunkABZYJK2DParam133.call(
        chunkABZYJK2DValue96,
        chunkABZYJK2DParam91,
        chunkABZYJK2DParam92,
        __chunkABZYJK2DK,
      );
    });
  }
  let chunkABZYJK2DValue144 = function (chunkABZYJK2DParam3) {
      let chunkABZYJK2DValue159 = null;
      if (
        (__chunkABZYJK2DH(
          chunkABZYJK2DValue107.beforeSanitizeElements,
          chunkABZYJK2DParam3,
          null,
        ),
        chunkABZYJK2DValue143(chunkABZYJK2DParam3))
      )
        return (chunkABZYJK2DValue139(chunkABZYJK2DParam3), true);
      let chunkABZYJK2DValue160 = ___chunkABZYJK2DD(
        chunkABZYJK2DParam3.nodeName,
      );
      if (
        (__chunkABZYJK2DH(
          chunkABZYJK2DValue107.uponSanitizeElement,
          chunkABZYJK2DParam3,
          {
            tagName: chunkABZYJK2DValue160,
            allowedTags: chunkABZYJK2DValue108,
          },
        ),
        (chunkABZYJK2DValue117 &&
          chunkABZYJK2DParam3.hasChildNodes() &&
          !_chunkABZYJK2DE(chunkABZYJK2DParam3.firstElementChild) &&
          chunkABZYJK2DValue13(/<[/\w!]/g, chunkABZYJK2DParam3.innerHTML) &&
          chunkABZYJK2DValue13(/<[/\w!]/g, chunkABZYJK2DParam3.textContent)) ||
          chunkABZYJK2DParam3.nodeType ===
            chunkABZYJK2DValue35.progressingInstruction ||
          (chunkABZYJK2DValue117 &&
            chunkABZYJK2DParam3.nodeType === chunkABZYJK2DValue35.comment &&
            chunkABZYJK2DValue13(/<[/\w]/g, chunkABZYJK2DParam3.data)))
      )
        return (chunkABZYJK2DValue139(chunkABZYJK2DParam3), true);
      if (
        !(
          chunkABZYJK2DValue113.tagCheck instanceof Function &&
          chunkABZYJK2DValue113.tagCheck(chunkABZYJK2DValue160)
        ) &&
        (!chunkABZYJK2DValue108[chunkABZYJK2DValue160] ||
          chunkABZYJK2DValue111[chunkABZYJK2DValue160])
      ) {
        if (
          !chunkABZYJK2DValue111[chunkABZYJK2DValue160] &&
          __chunkABZYJK2DA(chunkABZYJK2DValue160) &&
          ((chunkABZYJK2DValue110.tagNameCheck instanceof RegExp &&
            chunkABZYJK2DValue13(
              chunkABZYJK2DValue110.tagNameCheck,
              chunkABZYJK2DValue160,
            )) ||
            (chunkABZYJK2DValue110.tagNameCheck instanceof Function &&
              chunkABZYJK2DValue110.tagNameCheck(chunkABZYJK2DValue160)))
        )
          return false;
        if (
          ___chunkABZYJK2DF &&
          !chunkABZYJK2DValue125[chunkABZYJK2DValue160]
        ) {
          let chunkABZYJK2DValue194 =
              chunkABZYJK2DValue104(chunkABZYJK2DParam3) ||
              chunkABZYJK2DParam3.parentNode,
            chunkABZYJK2DValue195 =
              chunkABZYJK2DValue103(chunkABZYJK2DParam3) ||
              chunkABZYJK2DParam3.childNodes;
          if (chunkABZYJK2DValue195 && chunkABZYJK2DValue194) {
            let chunkABZYJK2DValue218 = chunkABZYJK2DValue195.length;
            for (
              let chunkABZYJK2DValue229 = chunkABZYJK2DValue218 - 1;
              chunkABZYJK2DValue229 >= 0;
              --chunkABZYJK2DValue229
            ) {
              let chunkABZYJK2DValue232 = chunkABZYJK2DValue100(
                chunkABZYJK2DValue195[chunkABZYJK2DValue229],
                true,
              );
              chunkABZYJK2DValue232.__removalCount =
                (chunkABZYJK2DParam3.__removalCount || 0) + 1;
              chunkABZYJK2DValue194.insertBefore(
                chunkABZYJK2DValue232,
                chunkABZYJK2DValue102(chunkABZYJK2DParam3),
              );
            }
          }
        }
        return (chunkABZYJK2DValue139(chunkABZYJK2DParam3), true);
      }
      return (chunkABZYJK2DParam3 instanceof Element &&
        !__chunkABZYJK2DI(chunkABZYJK2DParam3)) ||
        ((chunkABZYJK2DValue160 === "noscript" ||
          chunkABZYJK2DValue160 === "noembed" ||
          chunkABZYJK2DValue160 === "noframes") &&
          chunkABZYJK2DValue13(
            /<\/no(script|embed|frames)/i,
            chunkABZYJK2DParam3.innerHTML,
          ))
        ? (chunkABZYJK2DValue139(chunkABZYJK2DParam3), true)
        : (___chunkABZYJK2DT &&
            chunkABZYJK2DParam3.nodeType === chunkABZYJK2DValue35.text &&
            ((chunkABZYJK2DValue159 = chunkABZYJK2DParam3.textContent),
            chunkABZYJK2DValue1(
              [MUSTACHE_EXPR, __chunkABZYJK2DX, __chunkABZYJK2DG],
              (chunkABZYJK2DParam118) => {
                chunkABZYJK2DValue159 = chunkABZYJK2DValue9(
                  chunkABZYJK2DValue159,
                  chunkABZYJK2DParam118,
                  " ",
                );
              },
            ),
            chunkABZYJK2DParam3.textContent !== chunkABZYJK2DValue159 &&
              (chunkABZYJK2DValue4(chunkABZYJK2DValue96.removed, {
                element: chunkABZYJK2DParam3.cloneNode(),
              }),
              (chunkABZYJK2DParam3.textContent = chunkABZYJK2DValue159))),
          __chunkABZYJK2DH(
            chunkABZYJK2DValue107.afterSanitizeElements,
            chunkABZYJK2DParam3,
            null,
          ),
          false);
    },
    chunkABZYJK2DValue145 = function (
      chunkABZYJK2DParam7,
      chunkABZYJK2DParam8,
      chunkABZYJK2DParam9,
    ) {
      if (
        chunkABZYJK2DValue123 &&
        (chunkABZYJK2DParam8 === "id" || chunkABZYJK2DParam8 === "name") &&
        (chunkABZYJK2DParam9 in document || chunkABZYJK2DParam9 in _t)
      )
        return false;
      if (
        !(
          $e &&
          !chunkABZYJK2DValue112[chunkABZYJK2DParam8] &&
          chunkABZYJK2DValue13(__chunkABZYJK2DM, chunkABZYJK2DParam8)
        ) &&
        !(
          chunkABZYJK2DValue114 &&
          chunkABZYJK2DValue13(ARIA_ATTR, chunkABZYJK2DParam8)
        ) &&
        !(
          chunkABZYJK2DValue113.attributeCheck instanceof Function &&
          chunkABZYJK2DValue113.attributeCheck(
            chunkABZYJK2DParam8,
            chunkABZYJK2DParam7,
          )
        )
      ) {
        if (
          !chunkABZYJK2DValue109[chunkABZYJK2DParam8] ||
          chunkABZYJK2DValue112[chunkABZYJK2DParam8]
        ) {
          if (
            !(
              (__chunkABZYJK2DA(chunkABZYJK2DParam7) &&
                ((chunkABZYJK2DValue110.tagNameCheck instanceof RegExp &&
                  chunkABZYJK2DValue13(
                    chunkABZYJK2DValue110.tagNameCheck,
                    chunkABZYJK2DParam7,
                  )) ||
                  (chunkABZYJK2DValue110.tagNameCheck instanceof Function &&
                    chunkABZYJK2DValue110.tagNameCheck(chunkABZYJK2DParam7))) &&
                ((chunkABZYJK2DValue110.attributeNameCheck instanceof RegExp &&
                  chunkABZYJK2DValue13(
                    chunkABZYJK2DValue110.attributeNameCheck,
                    chunkABZYJK2DParam8,
                  )) ||
                  (chunkABZYJK2DValue110.attributeNameCheck instanceof
                    Function &&
                    chunkABZYJK2DValue110.attributeNameCheck(
                      chunkABZYJK2DParam8,
                      chunkABZYJK2DParam7,
                    )))) ||
              (chunkABZYJK2DParam8 === "is" &&
                chunkABZYJK2DValue110.allowCustomizedBuiltInElements &&
                ((chunkABZYJK2DValue110.tagNameCheck instanceof RegExp &&
                  chunkABZYJK2DValue13(
                    chunkABZYJK2DValue110.tagNameCheck,
                    chunkABZYJK2DParam9,
                  )) ||
                  (chunkABZYJK2DValue110.tagNameCheck instanceof Function &&
                    chunkABZYJK2DValue110.tagNameCheck(chunkABZYJK2DParam9))))
            )
          )
            return false;
        } else if (
          !chunkABZYJK2DValue129[chunkABZYJK2DParam8] &&
          !chunkABZYJK2DValue13(
            ___chunkABZYJK2DM,
            chunkABZYJK2DValue9(chunkABZYJK2DParam9, __chunkABZYJK2DP, ""),
          ) &&
          !(
            (chunkABZYJK2DParam8 === "src" ||
              chunkABZYJK2DParam8 === "xlink:href" ||
              chunkABZYJK2DParam8 === "href") &&
            chunkABZYJK2DParam7 !== "script" &&
            chunkABZYJK2DValue10(chunkABZYJK2DParam9, "data:") === 0 &&
            chunkABZYJK2DValue127[chunkABZYJK2DParam7]
          ) &&
          !(
            chunkABZYJK2DValue115 &&
            !chunkABZYJK2DValue13(
              __chunkABZYJK2DT,
              chunkABZYJK2DValue9(chunkABZYJK2DParam9, __chunkABZYJK2DP, ""),
            )
          ) &&
          chunkABZYJK2DParam9
        )
          return false;
      }
      return true;
    },
    __chunkABZYJK2DA = function (chunkABZYJK2DParam101) {
      return (
        chunkABZYJK2DParam101 !== "annotation-xml" &&
        chunkABZYJK2DValue8(chunkABZYJK2DParam101, __chunkABZYJK2DF)
      );
    },
    chunkABZYJK2DValue146 = function (chunkABZYJK2DParam2) {
      __chunkABZYJK2DH(
        chunkABZYJK2DValue107.beforeSanitizeAttributes,
        chunkABZYJK2DParam2,
        null,
      );
      let { attributes } = chunkABZYJK2DParam2;
      if (!attributes || chunkABZYJK2DValue143(chunkABZYJK2DParam2)) return;
      let chunkABZYJK2DValue157 = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: chunkABZYJK2DValue109,
          forceKeepAttr: undefined,
        },
        chunkABZYJK2DValue158 = attributes.length;
      for (; chunkABZYJK2DValue158--; ) {
        let { name, namespaceURI, value } = attributes[chunkABZYJK2DValue158],
          chunkABZYJK2DValue161 = ___chunkABZYJK2DD(name),
          chunkABZYJK2DValue162 = value,
          chunkABZYJK2DValue163 =
            name === "value"
              ? chunkABZYJK2DValue162
              : chunkABZYJK2DValue11(chunkABZYJK2DValue162);
        if (
          ((chunkABZYJK2DValue157.attrName = chunkABZYJK2DValue161),
          (chunkABZYJK2DValue157.attrValue = chunkABZYJK2DValue163),
          (chunkABZYJK2DValue157.keepAttr = true),
          (chunkABZYJK2DValue157.forceKeepAttr = undefined),
          __chunkABZYJK2DH(
            chunkABZYJK2DValue107.uponSanitizeAttribute,
            chunkABZYJK2DParam2,
            chunkABZYJK2DValue157,
          ),
          (chunkABZYJK2DValue163 = chunkABZYJK2DValue157.attrValue),
          __chunkABZYJK2DD &&
            (chunkABZYJK2DValue161 === "id" ||
              chunkABZYJK2DValue161 === "name") &&
            (chunkABZYJK2DValue140(name, chunkABZYJK2DParam2),
            (chunkABZYJK2DValue163 = "user-content-" + chunkABZYJK2DValue163)),
          chunkABZYJK2DValue117 &&
            chunkABZYJK2DValue13(
              /((--!?|])>)|<\/(style|title|textarea)/i,
              chunkABZYJK2DValue163,
            ))
        ) {
          chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          continue;
        }
        if (
          chunkABZYJK2DValue161 === "attributename" &&
          chunkABZYJK2DValue8(chunkABZYJK2DValue163, "href")
        ) {
          chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          continue;
        }
        if (chunkABZYJK2DValue157.forceKeepAttr) continue;
        if (!chunkABZYJK2DValue157.keepAttr) {
          chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          continue;
        }
        if (
          !chunkABZYJK2DValue116 &&
          chunkABZYJK2DValue13(/\/>/i, chunkABZYJK2DValue163)
        ) {
          chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          continue;
        }
        ___chunkABZYJK2DT &&
          chunkABZYJK2DValue1(
            [MUSTACHE_EXPR, __chunkABZYJK2DX, __chunkABZYJK2DG],
            (chunkABZYJK2DParam119) => {
              chunkABZYJK2DValue163 = chunkABZYJK2DValue9(
                chunkABZYJK2DValue163,
                chunkABZYJK2DParam119,
                " ",
              );
            },
          );
        let chunkABZYJK2DValue164 = ___chunkABZYJK2DD(
          chunkABZYJK2DParam2.nodeName,
        );
        if (
          !chunkABZYJK2DValue145(
            chunkABZYJK2DValue164,
            chunkABZYJK2DValue161,
            chunkABZYJK2DValue163,
          )
        ) {
          chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          continue;
        }
        if (
          chunkABZYJK2DValue105 &&
          typeof trustedTypes == "object" &&
          typeof trustedTypes.getAttributeType == "function" &&
          !namespaceURI
        )
          switch (
            trustedTypes.getAttributeType(
              chunkABZYJK2DValue164,
              chunkABZYJK2DValue161,
            )
          ) {
            case "TrustedHTML":
              chunkABZYJK2DValue163 = chunkABZYJK2DValue105.createHTML(
                chunkABZYJK2DValue163,
              );
              break;
            case "TrustedScriptURL":
              chunkABZYJK2DValue163 = chunkABZYJK2DValue105.createScriptURL(
                chunkABZYJK2DValue163,
              );
              break;
          }
        if (chunkABZYJK2DValue163 !== chunkABZYJK2DValue162)
          try {
            namespaceURI
              ? chunkABZYJK2DParam2.setAttributeNS(
                  namespaceURI,
                  name,
                  chunkABZYJK2DValue163,
                )
              : chunkABZYJK2DParam2.setAttribute(name, chunkABZYJK2DValue163);
            chunkABZYJK2DValue143(chunkABZYJK2DParam2)
              ? chunkABZYJK2DValue139(chunkABZYJK2DParam2)
              : chunkABZYJK2DValue3(chunkABZYJK2DValue96.removed);
          } catch {
            chunkABZYJK2DValue140(name, chunkABZYJK2DParam2);
          }
      }
      __chunkABZYJK2DH(
        chunkABZYJK2DValue107.afterSanitizeAttributes,
        chunkABZYJK2DParam2,
        null,
      );
    },
    chunkABZYJK2DValue147 = function chunkABZYJK2DHelper9(
      chunkABZYJK2DParam40,
    ) {
      let chunkABZYJK2DValue202 = null,
        chunkABZYJK2DValue203 = chunkABZYJK2DValue142(chunkABZYJK2DParam40);
      for (
        __chunkABZYJK2DH(
          chunkABZYJK2DValue107.beforeSanitizeShadowDOM,
          chunkABZYJK2DParam40,
          null,
        );
        (chunkABZYJK2DValue202 = chunkABZYJK2DValue203.nextNode());

      ) {
        __chunkABZYJK2DH(
          chunkABZYJK2DValue107.uponSanitizeShadowNode,
          chunkABZYJK2DValue202,
          null,
        );
        chunkABZYJK2DValue144(chunkABZYJK2DValue202);
        chunkABZYJK2DValue146(chunkABZYJK2DValue202);
        chunkABZYJK2DValue202.content instanceof DocumentFragment &&
          chunkABZYJK2DHelper9(chunkABZYJK2DValue202.content);
      }
      __chunkABZYJK2DH(
        chunkABZYJK2DValue107.afterSanitizeShadowDOM,
        chunkABZYJK2DParam40,
        null,
      );
    };
  return (
    (chunkABZYJK2DValue96.sanitize = function (chunkABZYJK2DParam1) {
      let chunkABZYJK2DValue150 =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
        chunkABZYJK2DValue151 = null,
        chunkABZYJK2DValue152 = null,
        chunkABZYJK2DValue153 = null,
        chunkABZYJK2DValue154 = null;
      if (
        ((___chunkABZYJK2DY = !chunkABZYJK2DParam1),
        ___chunkABZYJK2DY && (chunkABZYJK2DParam1 = "<!-->"),
        typeof chunkABZYJK2DParam1 != "string" &&
          !_chunkABZYJK2DE(chunkABZYJK2DParam1))
      )
        if (typeof chunkABZYJK2DParam1.toString == "function") {
          if (
            ((chunkABZYJK2DParam1 = chunkABZYJK2DParam1.toString()),
            typeof chunkABZYJK2DParam1 != "string")
          )
            throw _e("dirty is not a string, aborting");
        } else throw _e("toString is not a function");
      if (!chunkABZYJK2DValue96.isSupported) return chunkABZYJK2DParam1;
      if (
        (chunkABZYJK2DValue119 || chunkABZYJK2DValue136(chunkABZYJK2DValue150),
        (chunkABZYJK2DValue96.removed = []),
        typeof chunkABZYJK2DParam1 == "string" &&
          (chunkABZYJK2DValue124 = false),
        chunkABZYJK2DValue124)
      ) {
        if (chunkABZYJK2DParam1.nodeName) {
          let chunkABZYJK2DValue234 = ___chunkABZYJK2DD(
            chunkABZYJK2DParam1.nodeName,
          );
          if (
            !chunkABZYJK2DValue108[chunkABZYJK2DValue234] ||
            chunkABZYJK2DValue111[chunkABZYJK2DValue234]
          )
            throw _e("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (chunkABZYJK2DParam1 instanceof Node) {
        chunkABZYJK2DValue151 = chunkABZYJK2DValue141("<!---->");
        chunkABZYJK2DValue152 = chunkABZYJK2DValue151.ownerDocument.importNode(
          chunkABZYJK2DParam1,
          true,
        );
        (chunkABZYJK2DValue152.nodeType === chunkABZYJK2DValue35.element &&
          chunkABZYJK2DValue152.nodeName === "BODY") ||
        chunkABZYJK2DValue152.nodeName === "HTML"
          ? (chunkABZYJK2DValue151 = chunkABZYJK2DValue152)
          : chunkABZYJK2DValue151.appendChild(chunkABZYJK2DValue152);
      } else {
        if (
          !chunkABZYJK2DValue120 &&
          !___chunkABZYJK2DT &&
          !chunkABZYJK2DValue118 &&
          chunkABZYJK2DParam1.indexOf("<") === -1
        )
          return chunkABZYJK2DValue105 && chunkABZYJK2DValue122
            ? chunkABZYJK2DValue105.createHTML(chunkABZYJK2DParam1)
            : chunkABZYJK2DParam1;
        if (
          ((chunkABZYJK2DValue151 = chunkABZYJK2DValue141(chunkABZYJK2DParam1)),
          !chunkABZYJK2DValue151)
        )
          return chunkABZYJK2DValue120
            ? null
            : chunkABZYJK2DValue122
              ? chunkABZYJK2DValue106
              : "";
      }
      chunkABZYJK2DValue151 &&
        __chunkABZYJK2DJ &&
        chunkABZYJK2DValue139(chunkABZYJK2DValue151.firstChild);
      let chunkABZYJK2DValue155 = chunkABZYJK2DValue142(
        chunkABZYJK2DValue124 ? chunkABZYJK2DParam1 : chunkABZYJK2DValue151,
      );
      for (; (chunkABZYJK2DValue153 = chunkABZYJK2DValue155.nextNode()); ) {
        chunkABZYJK2DValue144(chunkABZYJK2DValue153);
        chunkABZYJK2DValue146(chunkABZYJK2DValue153);
        chunkABZYJK2DValue153.content instanceof DocumentFragment &&
          chunkABZYJK2DValue147(chunkABZYJK2DValue153.content);
      }
      if (chunkABZYJK2DValue124) return chunkABZYJK2DParam1;
      if (chunkABZYJK2DValue120) {
        if (chunkABZYJK2DValue121)
          for (
            chunkABZYJK2DValue154 = createDocumentFragment.call(
              chunkABZYJK2DValue151.ownerDocument,
            );
            chunkABZYJK2DValue151.firstChild;

          )
            chunkABZYJK2DValue154.appendChild(chunkABZYJK2DValue151.firstChild);
        else chunkABZYJK2DValue154 = chunkABZYJK2DValue151;
        return (
          (chunkABZYJK2DValue109.shadowroot ||
            chunkABZYJK2DValue109.shadowrootmode) &&
            (chunkABZYJK2DValue154 = importNode.call(
              chunkABZYJK2DValue97,
              chunkABZYJK2DValue154,
              true,
            )),
          chunkABZYJK2DValue154
        );
      }
      let chunkABZYJK2DValue156 = chunkABZYJK2DValue118
        ? chunkABZYJK2DValue151.outerHTML
        : chunkABZYJK2DValue151.innerHTML;
      return (
        chunkABZYJK2DValue118 &&
          chunkABZYJK2DValue108["!doctype"] &&
          chunkABZYJK2DValue151.ownerDocument &&
          chunkABZYJK2DValue151.ownerDocument.doctype &&
          chunkABZYJK2DValue151.ownerDocument.doctype.name &&
          chunkABZYJK2DValue13(
            chunkABZYJK2DValue32,
            chunkABZYJK2DValue151.ownerDocument.doctype.name,
          ) &&
          (chunkABZYJK2DValue156 =
            "<!DOCTYPE " +
            chunkABZYJK2DValue151.ownerDocument.doctype.name +
            ">\n" +
            chunkABZYJK2DValue156),
        ___chunkABZYJK2DT &&
          chunkABZYJK2DValue1(
            [MUSTACHE_EXPR, __chunkABZYJK2DX, __chunkABZYJK2DG],
            (chunkABZYJK2DParam120) => {
              chunkABZYJK2DValue156 = chunkABZYJK2DValue9(
                chunkABZYJK2DValue156,
                chunkABZYJK2DParam120,
                " ",
              );
            },
          ),
        chunkABZYJK2DValue105 && chunkABZYJK2DValue122
          ? chunkABZYJK2DValue105.createHTML(chunkABZYJK2DValue156)
          : chunkABZYJK2DValue156
      );
    }),
    (chunkABZYJK2DValue96.setConfig = function () {
      chunkABZYJK2DValue136(
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      );
      chunkABZYJK2DValue119 = true;
    }),
    (chunkABZYJK2DValue96.clearConfig = function () {
      __chunkABZYJK2DK = null;
      chunkABZYJK2DValue119 = false;
    }),
    (chunkABZYJK2DValue96.isValidAttribute = function (
      chunkABZYJK2DParam96,
      chunkABZYJK2DParam97,
      chunkABZYJK2DParam98,
    ) {
      return (
        __chunkABZYJK2DK || chunkABZYJK2DValue136({}),
        chunkABZYJK2DValue145(
          ___chunkABZYJK2DD(chunkABZYJK2DParam96),
          ___chunkABZYJK2DD(chunkABZYJK2DParam97),
          chunkABZYJK2DParam98,
        )
      );
    }),
    (chunkABZYJK2DValue96.addHook = function (
      chunkABZYJK2DParam103,
      chunkABZYJK2DParam104,
    ) {
      typeof chunkABZYJK2DParam104 == "function" &&
        chunkABZYJK2DValue4(
          chunkABZYJK2DValue107[chunkABZYJK2DParam103],
          chunkABZYJK2DParam104,
        );
    }),
    (chunkABZYJK2DValue96.removeHook = function (
      chunkABZYJK2DParam69,
      chunkABZYJK2DParam70,
    ) {
      if (chunkABZYJK2DParam70 !== undefined) {
        let chunkABZYJK2DValue258 = chunkABZYJK2DValue2(
          chunkABZYJK2DValue107[chunkABZYJK2DParam69],
          chunkABZYJK2DParam70,
        );
        return chunkABZYJK2DValue258 === -1
          ? undefined
          : chunkABZYJK2DValue5(
              chunkABZYJK2DValue107[chunkABZYJK2DParam69],
              chunkABZYJK2DValue258,
              1,
            )[0];
      }
      return chunkABZYJK2DValue3(chunkABZYJK2DValue107[chunkABZYJK2DParam69]);
    }),
    (chunkABZYJK2DValue96.removeHooks = function (chunkABZYJK2DParam134) {
      chunkABZYJK2DValue107[chunkABZYJK2DParam134] = [];
    }),
    (chunkABZYJK2DValue96.removeAllHooks = function () {
      chunkABZYJK2DValue107 = chunkABZYJK2DValue38();
    }),
    chunkABZYJK2DValue96
  );
}
var chunkABZYJK2DX = chunkABZYJK2DHelper7(),
  chunkABZYJK2DG = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,
  chunkABZYJK2DM =
    /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,
  chunkABZYJK2DValue39 = /\s*%%.*\n/gm,
  chunkABZYJK2DT = class extends Error {
    static {
      chunkAGHRB4JFN(this, "UnknownDiagramError");
    }
    constructor(chunkABZYJK2DParam94) {
      super(chunkABZYJK2DParam94);
      this.name = "UnknownDiagramError";
    }
  },
  chunkABZYJK2DP = {},
  chunkABZYJK2DValue40 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam57, chunkABZYJK2DParam58, chunkABZYJK2DParam59) => {
      chunkABZYJK2DP[chunkABZYJK2DParam57] &&
        chunkAGHRB4JFR.warn(
          `Detector with key ${chunkABZYJK2DParam57} already exists. Overwriting.`,
        );
      chunkABZYJK2DP[chunkABZYJK2DParam57] = {
        detector: chunkABZYJK2DParam58,
        loader: chunkABZYJK2DParam59,
      };
      chunkAGHRB4JFR.debug(
        `Detector with key ${chunkABZYJK2DParam57} added${chunkABZYJK2DParam59 ? " with loader" : ""}`,
      );
    },
    "addDetector",
  ),
  chunkABZYJK2DValue41 = chunkAGHRB4JFN(
    (
      chunkABZYJK2DParam13,
      chunkABZYJK2DParam14,
      { depth = 2, clobber = false } = {},
    ) => {
      let chunkABZYJK2DValue166 = {
        depth,
        clobber,
      };
      return Array.isArray(chunkABZYJK2DParam14) &&
        !Array.isArray(chunkABZYJK2DParam13)
        ? (chunkABZYJK2DParam14.forEach((item) =>
            chunkABZYJK2DValue41(
              chunkABZYJK2DParam13,
              item,
              chunkABZYJK2DValue166,
            ),
          ),
          chunkABZYJK2DParam13)
        : Array.isArray(chunkABZYJK2DParam14) &&
            Array.isArray(chunkABZYJK2DParam13)
          ? (chunkABZYJK2DParam14.forEach((item) => {
              chunkABZYJK2DParam13.includes(item) ||
                chunkABZYJK2DParam13.push(item);
            }),
            chunkABZYJK2DParam13)
          : chunkABZYJK2DParam13 === undefined || depth <= 0
            ? typeof chunkABZYJK2DParam13 == "object" &&
              chunkABZYJK2DParam13 &&
              typeof chunkABZYJK2DParam14 == "object"
              ? Object.assign(chunkABZYJK2DParam13, chunkABZYJK2DParam14)
              : chunkABZYJK2DParam14
            : (chunkABZYJK2DParam14 !== undefined &&
                typeof chunkABZYJK2DParam13 == "object" &&
                typeof chunkABZYJK2DParam14 == "object" &&
                Object.keys(chunkABZYJK2DParam14).forEach((item) => {
                  typeof chunkABZYJK2DParam14[item] == "object" &&
                  (chunkABZYJK2DParam13[item] === undefined ||
                    typeof chunkABZYJK2DParam13[item] == "object")
                    ? (chunkABZYJK2DParam13[item] === undefined &&
                        (chunkABZYJK2DParam13[item] = Array.isArray(
                          chunkABZYJK2DParam14[item],
                        )
                          ? []
                          : {}),
                      (chunkABZYJK2DParam13[item] = chunkABZYJK2DValue41(
                        chunkABZYJK2DParam13[item],
                        chunkABZYJK2DParam14[item],
                        {
                          depth: depth - 1,
                          clobber,
                        },
                      )))
                    : (clobber ||
                        (typeof chunkABZYJK2DParam13[item] != "object" &&
                          typeof chunkABZYJK2DParam14[item] != "object")) &&
                      (chunkABZYJK2DParam13[item] = chunkABZYJK2DParam14[item]);
                }),
              chunkABZYJK2DParam13);
    },
    "assignWithDepth",
  ),
  chunkABZYJK2DR = chunkABZYJK2DValue41,
  chunkABZYJK2DValue44 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam105, chunkABZYJK2DParam106) =>
      chunkABZYJK2DParam106
        ? invertN(chunkABZYJK2DParam105, {
            s: -40,
            l: 10,
          })
        : invertN(chunkABZYJK2DParam105, {
            s: -40,
            l: -10,
          }),
    "mkBorder",
  ),
  chunkABZYJK2DValue45 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#fff4dd";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
    }
    updateColors() {
      if (
        ((this.primaryTextColor =
          this.primaryTextColor || (this.darkMode ? "#eee" : "#333")),
        (this.secondaryColor =
          this.secondaryColor ||
          invertN(this.primaryColor, {
            h: -120,
          })),
        (this.tertiaryColor =
          this.tertiaryColor ||
          invertN(this.primaryColor, {
            h: 180,
            l: 5,
          })),
        (this.primaryBorderColor =
          this.primaryBorderColor ||
          chunkABZYJK2DValue44(this.primaryColor, this.darkMode)),
        (this.secondaryBorderColor =
          this.secondaryBorderColor ||
          chunkABZYJK2DValue44(this.secondaryColor, this.darkMode)),
        (this.tertiaryBorderColor =
          this.tertiaryBorderColor ||
          chunkABZYJK2DValue44(this.tertiaryColor, this.darkMode)),
        (this.noteBorderColor =
          this.noteBorderColor ||
          chunkABZYJK2DValue44(this.noteBkgColor, this.darkMode)),
        (this.noteBkgColor = this.noteBkgColor || "#fff5ad"),
        (this.noteTextColor = this.noteTextColor || "#333"),
        (this.secondaryTextColor =
          this.secondaryTextColor || invertT(this.secondaryColor)),
        (this.tertiaryTextColor =
          this.tertiaryTextColor || invertT(this.tertiaryColor)),
        (this.lineColor = this.lineColor || invertT(this.background)),
        (this.arrowheadColor = this.arrowheadColor || invertT(this.background)),
        (this.textColor = this.textColor || this.primaryTextColor),
        (this.border2 = this.border2 || this.tertiaryBorderColor),
        (this.nodeBkg = this.nodeBkg || this.primaryColor),
        (this.mainBkg = this.mainBkg || this.primaryColor),
        (this.nodeBorder = this.nodeBorder || this.primaryBorderColor),
        (this.clusterBkg = this.clusterBkg || this.tertiaryColor),
        (this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor),
        (this.defaultLinkColor = this.defaultLinkColor || this.lineColor),
        (this.titleColor = this.titleColor || this.tertiaryTextColor),
        (this.edgeLabelBackground =
          this.edgeLabelBackground ||
          (this.darkMode
            ? invertR(this.secondaryColor, 30)
            : this.secondaryColor)),
        (this.nodeTextColor = this.nodeTextColor || this.primaryTextColor),
        (this.actorBorder = this.actorBorder || this.primaryBorderColor),
        (this.actorBkg = this.actorBkg || this.mainBkg),
        (this.actorTextColor = this.actorTextColor || this.primaryTextColor),
        (this.actorLineColor = this.actorLineColor || this.actorBorder),
        (this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg),
        (this.signalColor = this.signalColor || this.textColor),
        (this.signalTextColor = this.signalTextColor || this.textColor),
        (this.labelBoxBorderColor =
          this.labelBoxBorderColor || this.actorBorder),
        (this.labelTextColor = this.labelTextColor || this.actorTextColor),
        (this.loopTextColor = this.loopTextColor || this.actorTextColor),
        (this.activationBorderColor =
          this.activationBorderColor || invertR(this.secondaryColor, 10)),
        (this.activationBkgColor =
          this.activationBkgColor || this.secondaryColor),
        (this.sequenceNumberColor =
          this.sequenceNumberColor || invertT(this.lineColor)),
        (this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor),
        (this.altSectionBkgColor = this.altSectionBkgColor || "white"),
        (this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor),
        (this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor),
        (this.excludeBkgColor = this.excludeBkgColor || "#eeeeee"),
        (this.taskBorderColor =
          this.taskBorderColor || this.primaryBorderColor),
        (this.taskBkgColor = this.taskBkgColor || this.primaryColor),
        (this.activeTaskBorderColor =
          this.activeTaskBorderColor || this.primaryColor),
        (this.activeTaskBkgColor =
          this.activeTaskBkgColor || invertI(this.primaryColor, 23)),
        (this.gridColor = this.gridColor || "lightgrey"),
        (this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey"),
        (this.doneTaskBorderColor = this.doneTaskBorderColor || "grey"),
        (this.critBorderColor = this.critBorderColor || "#ff8888"),
        (this.critBkgColor = this.critBkgColor || "red"),
        (this.todayLineColor = this.todayLineColor || "red"),
        (this.vertLineColor = this.vertLineColor || "navy"),
        (this.taskTextColor = this.taskTextColor || this.textColor),
        (this.taskTextOutsideColor =
          this.taskTextOutsideColor || this.textColor),
        (this.taskTextLightColor = this.taskTextLightColor || this.textColor),
        (this.taskTextColor = this.taskTextColor || this.primaryTextColor),
        (this.taskTextDarkColor = this.taskTextDarkColor || this.textColor),
        (this.taskTextClickableColor =
          this.taskTextClickableColor || "#003163"),
        (this.personBorder = this.personBorder || this.primaryBorderColor),
        (this.personBkg = this.personBkg || this.mainBkg),
        this.darkMode
          ? ((this.rowOdd =
              this.rowOdd || invertR(this.mainBkg, 5) || "#ffffff"),
            (this.rowEven = this.rowEven || invertR(this.mainBkg, 10)))
          : ((this.rowOdd =
              this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff"),
            (this.rowEven = this.rowEven || invertI(this.mainBkg, 5))),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.transitionLabelColor =
          this.transitionLabelColor || this.textColor),
        (this.stateLabelColor =
          this.stateLabelColor || this.stateBkg || this.primaryTextColor),
        (this.stateBkg = this.stateBkg || this.mainBkg),
        (this.labelBackgroundColor =
          this.labelBackgroundColor || this.stateBkg),
        (this.compositeBackground =
          this.compositeBackground || this.background || this.tertiaryColor),
        (this.altBackground = this.altBackground || this.tertiaryColor),
        (this.compositeTitleBackground =
          this.compositeTitleBackground || this.mainBkg),
        (this.compositeBorder = this.compositeBorder || this.nodeBorder),
        (this.innerEndBackground = this.nodeBorder),
        (this.errorBkgColor = this.errorBkgColor || this.tertiaryColor),
        (this.errorTextColor = this.errorTextColor || this.tertiaryTextColor),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.specialStateColor = this.lineColor),
        (this.cScale0 = this.cScale0 || this.primaryColor),
        (this.cScale1 = this.cScale1 || this.secondaryColor),
        (this.cScale2 = this.cScale2 || this.tertiaryColor),
        (this.cScale3 =
          this.cScale3 ||
          invertN(this.primaryColor, {
            h: 30,
          })),
        (this.cScale4 =
          this.cScale4 ||
          invertN(this.primaryColor, {
            h: 60,
          })),
        (this.cScale5 =
          this.cScale5 ||
          invertN(this.primaryColor, {
            h: 90,
          })),
        (this.cScale6 =
          this.cScale6 ||
          invertN(this.primaryColor, {
            h: 120,
          })),
        (this.cScale7 =
          this.cScale7 ||
          invertN(this.primaryColor, {
            h: 150,
          })),
        (this.cScale8 =
          this.cScale8 ||
          invertN(this.primaryColor, {
            h: 210,
            l: 150,
          })),
        (this.cScale9 =
          this.cScale9 ||
          invertN(this.primaryColor, {
            h: 270,
          })),
        (this.cScale10 =
          this.cScale10 ||
          invertN(this.primaryColor, {
            h: 300,
          })),
        (this.cScale11 =
          this.cScale11 ||
          invertN(this.primaryColor, {
            h: 330,
          })),
        this.darkMode)
      )
        for (
          let chunkABZYJK2DValue253 = 0;
          chunkABZYJK2DValue253 < this.THEME_COLOR_LIMIT;
          chunkABZYJK2DValue253++
        )
          this["cScale" + chunkABZYJK2DValue253] = invertR(
            this["cScale" + chunkABZYJK2DValue253],
            75,
          );
      else
        for (
          let chunkABZYJK2DValue254 = 0;
          chunkABZYJK2DValue254 < this.THEME_COLOR_LIMIT;
          chunkABZYJK2DValue254++
        )
          this["cScale" + chunkABZYJK2DValue254] = invertR(
            this["cScale" + chunkABZYJK2DValue254],
            25,
          );
      for (
        let chunkABZYJK2DValue245 = 0;
        chunkABZYJK2DValue245 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue245++
      )
        this["cScaleInv" + chunkABZYJK2DValue245] =
          this["cScaleInv" + chunkABZYJK2DValue245] ||
          invertT(this["cScale" + chunkABZYJK2DValue245]);
      for (
        let chunkABZYJK2DValue212 = 0;
        chunkABZYJK2DValue212 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue212++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkABZYJK2DValue212] =
              this["cScalePeer" + chunkABZYJK2DValue212] ||
              invertI(this["cScale" + chunkABZYJK2DValue212], 10))
          : (this["cScalePeer" + chunkABZYJK2DValue212] =
              this["cScalePeer" + chunkABZYJK2DValue212] ||
              invertR(this["cScale" + chunkABZYJK2DValue212], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkABZYJK2DValue241 = 0;
        chunkABZYJK2DValue241 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue241++
      )
        this["cScaleLabel" + chunkABZYJK2DValue241] =
          this["cScaleLabel" + chunkABZYJK2DValue241] || this.scaleLabelColor;
      let chunkABZYJK2DValue148 = this.darkMode ? -4 : -1;
      for (
        let chunkABZYJK2DValue204 = 0;
        chunkABZYJK2DValue204 < 5;
        chunkABZYJK2DValue204++
      ) {
        this["surface" + chunkABZYJK2DValue204] =
          this["surface" + chunkABZYJK2DValue204] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkABZYJK2DValue148 * (5 + chunkABZYJK2DValue204 * 3),
          });
        this["surfacePeer" + chunkABZYJK2DValue204] =
          this["surfacePeer" + chunkABZYJK2DValue204] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkABZYJK2DValue148 * (8 + chunkABZYJK2DValue204 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 =
        this.fillType2 ||
        invertN(this.primaryColor, {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN(this.secondaryColor, {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN(this.primaryColor, {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN(this.secondaryColor, {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN(this.primaryColor, {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN(this.secondaryColor, {
          h: 128,
        });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.archEdgeColor = this.archEdgeColor || "#777";
      this.archEdgeArrowColor = this.archEdgeArrowColor || "#777";
      this.archEdgeWidth = this.archEdgeWidth || "3";
      this.archGroupBorderColor = this.archGroupBorderColor || "#000";
      this.archGroupBorderWidth = this.archGroupBorderWidth || "2px";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkABZYJK2DParam41) {
      if (typeof chunkABZYJK2DParam41 != "object") {
        this.updateColors();
        return;
      }
      let chunkABZYJK2DValue207 = Object.keys(chunkABZYJK2DParam41);
      chunkABZYJK2DValue207.forEach((item) => {
        this[item] = chunkABZYJK2DParam41[item];
      });
      this.updateColors();
      chunkABZYJK2DValue207.forEach((item) => {
        this[item] = chunkABZYJK2DParam41[item];
      });
    }
  },
  chunkABZYJK2DValue46 = chunkAGHRB4JFN((chunkABZYJK2DParam110) => {
    let chunkABZYJK2DValue273 = new chunkABZYJK2DValue45();
    return (
      chunkABZYJK2DValue273.calculate(chunkABZYJK2DParam110),
      chunkABZYJK2DValue273
    );
  }, "getThemeVariables"),
  $e = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = invertI(this.primaryColor, 16);
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = invertT(this.background);
      this.secondaryBorderColor = chunkABZYJK2DValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkABZYJK2DValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.mainBkg = "#1f2020";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = invertI(invertT("#323D47"), 10);
      this.lineColor = "calculated";
      this.border1 = "#ccc";
      this.border2 = invertS(255, 255, 255, 0.25);
      this.arrowheadColor = "calculated";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.labelBackground = "#181818";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#F9FFFE";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "calculated";
      this.activationBkgColor = "calculated";
      this.sequenceNumberColor = "black";
      this.sectionBkgColor = invertR("#EAE8D9", 30);
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "#EAE8D9";
      this.excludeBkgColor = invertR(this.sectionBkgColor, 10);
      this.taskBorderColor = invertS(255, 255, 255, 70);
      this.taskBkgColor = "calculated";
      this.taskTextColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = invertS(255, 255, 255, 50);
      this.activeTaskBkgColor = "#81B1DB";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#E83737";
      this.critBkgColor = "#E83737";
      this.taskTextDarkColor = "calculated";
      this.todayLineColor = "#DB5757";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 5) || "#ffffff";
      this.rowEven = this.rowEven || invertR(this.mainBkg, 10);
      this.labelColor = "calculated";
      this.errorBkgColor = "#a44141";
      this.errorTextColor = "#ddd";
    }
    updateColors() {
      this.secondBkg = invertI(this.mainBkg, 16);
      this.lineColor = this.mainContrastColor;
      this.arrowheadColor = this.mainContrastColor;
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.edgeLabelBackground = invertI(this.labelBackground, 25);
      this.actorBorder = this.border1;
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.mainContrastColor;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.mainContrastColor;
      this.signalTextColor = this.mainContrastColor;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.mainContrastColor;
      this.loopTextColor = this.mainContrastColor;
      this.noteBorderColor = this.secondaryBorderColor;
      this.noteBkgColor = this.secondBkg;
      this.noteTextColor = this.secondaryTextColor;
      this.activationBorderColor = this.border1;
      this.activationBkgColor = this.secondBkg;
      this.altSectionBkgColor = this.background;
      this.taskBkgColor = invertI(this.mainBkg, 23);
      this.taskTextColor = this.darkTextColor;
      this.taskTextLightColor = this.mainContrastColor;
      this.taskTextOutsideColor = this.taskTextLightColor;
      this.gridColor = this.mainContrastColor;
      this.doneTaskBkgColor = this.mainContrastColor;
      this.taskTextDarkColor = this.darkTextColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#555";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#f4f4f4";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.cScale1 = this.cScale1 || "#0b0000";
      this.cScale2 = this.cScale2 || "#4d1037";
      this.cScale3 = this.cScale3 || "#3f5258";
      this.cScale4 = this.cScale4 || "#4f2f1b";
      this.cScale5 = this.cScale5 || "#6e0a0a";
      this.cScale6 = this.cScale6 || "#3b0048";
      this.cScale7 = this.cScale7 || "#995a01";
      this.cScale8 = this.cScale8 || "#154706";
      this.cScale9 = this.cScale9 || "#161722";
      this.cScale10 = this.cScale10 || "#00296f";
      this.cScale11 = this.cScale11 || "#01629c";
      this.cScale12 = this.cScale12 || "#010029";
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      for (
        let chunkABZYJK2DValue246 = 0;
        chunkABZYJK2DValue246 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue246++
      )
        this["cScaleInv" + chunkABZYJK2DValue246] =
          this["cScaleInv" + chunkABZYJK2DValue246] ||
          invertT(this["cScale" + chunkABZYJK2DValue246]);
      for (
        let chunkABZYJK2DValue239 = 0;
        chunkABZYJK2DValue239 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue239++
      )
        this["cScalePeer" + chunkABZYJK2DValue239] =
          this["cScalePeer" + chunkABZYJK2DValue239] ||
          invertI(this["cScale" + chunkABZYJK2DValue239], 10);
      for (
        let chunkABZYJK2DValue205 = 0;
        chunkABZYJK2DValue205 < 5;
        chunkABZYJK2DValue205++
      ) {
        this["surface" + chunkABZYJK2DValue205] =
          this["surface" + chunkABZYJK2DValue205] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-10 + chunkABZYJK2DValue205 * 4),
          });
        this["surfacePeer" + chunkABZYJK2DValue205] =
          this["surfacePeer" + chunkABZYJK2DValue205] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-7 + chunkABZYJK2DValue205 * 4),
          });
      }
      this.scaleLabelColor =
        this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (
        let chunkABZYJK2DValue242 = 0;
        chunkABZYJK2DValue242 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue242++
      )
        this["cScaleLabel" + chunkABZYJK2DValue242] =
          this["cScaleLabel" + chunkABZYJK2DValue242] || this.scaleLabelColor;
      for (
        let chunkABZYJK2DValue256 = 0;
        chunkABZYJK2DValue256 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue256++
      )
        this["pie" + chunkABZYJK2DValue256] =
          this["cScale" + chunkABZYJK2DValue256];
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22",
      };
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.background,
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.classText = this.primaryTextColor;
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = invertI(this.secondaryColor, 20);
      this.git1 = invertI(this.pie2 || this.secondaryColor, 20);
      this.git2 = invertI(this.pie3 || this.tertiaryColor, 20);
      this.git3 = invertI(
        this.pie4 ||
          invertN(this.primaryColor, {
            h: -30,
          }),
        20,
      );
      this.git4 = invertI(
        this.pie5 ||
          invertN(this.primaryColor, {
            h: -60,
          }),
        20,
      );
      this.git5 = invertI(
        this.pie6 ||
          invertN(this.primaryColor, {
            h: -90,
          }),
        10,
      );
      this.git6 = invertI(
        this.pie7 ||
          invertN(this.primaryColor, {
            h: 60,
          }),
        10,
      );
      this.git7 = invertI(
        this.pie8 ||
          invertN(this.primaryColor, {
            h: 120,
          }),
        20,
      );
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || invertI(this.background, 12);
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || invertI(this.background, 2);
      this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(chunkABZYJK2DParam42) {
      if (typeof chunkABZYJK2DParam42 != "object") {
        this.updateColors();
        return;
      }
      let chunkABZYJK2DValue208 = Object.keys(chunkABZYJK2DParam42);
      chunkABZYJK2DValue208.forEach((item) => {
        this[item] = chunkABZYJK2DParam42[item];
      });
      this.updateColors();
      chunkABZYJK2DValue208.forEach((item) => {
        this[item] = chunkABZYJK2DParam42[item];
      });
    }
  },
  chunkABZYJK2DValue47 = chunkAGHRB4JFN((chunkABZYJK2DParam107) => {
    let chunkABZYJK2DValue270 = new $e();
    return (
      chunkABZYJK2DValue270.calculate(chunkABZYJK2DParam107),
      chunkABZYJK2DValue270
    );
  }, "getThemeVariables"),
  chunkABZYJK2DValue48 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#ECECFF";
      this.secondaryColor = invertN(this.primaryColor, {
        h: 120,
      });
      this.secondaryColor = "#ffffde";
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = chunkABZYJK2DValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkABZYJK2DValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkABZYJK2DValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.background = "white";
      this.mainBkg = "#ECECFF";
      this.secondBkg = "#ffffde";
      this.lineColor = "#333333";
      this.border1 = "#9370DB";
      this.border2 = "#aaaa33";
      this.arrowheadColor = "#333333";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.labelBackground = "rgba(232,232,232, 0.8)";
      this.textColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.taskTextClickableColor = "calculated";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.sectionBkgColor = invertS(102, 102, 255, 0.49);
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#fff400";
      this.taskBorderColor = "#534fbc";
      this.taskBkgColor = "#8a90dd";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "#534fbc";
      this.activeTaskBkgColor = "#bfc7ff";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "navy";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = "calculated";
      this.rowEven = "calculated";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
      this.updateColors();
    }
    updateColors() {
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      this.cScalePeer1 = this.cScalePeer1 || invertR(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || invertR(this.tertiaryColor, 40);
      for (
        let chunkABZYJK2DValue223 = 0;
        chunkABZYJK2DValue223 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue223++
      ) {
        this["cScale" + chunkABZYJK2DValue223] = invertR(
          this["cScale" + chunkABZYJK2DValue223],
          10,
        );
        this["cScalePeer" + chunkABZYJK2DValue223] =
          this["cScalePeer" + chunkABZYJK2DValue223] ||
          invertR(this["cScale" + chunkABZYJK2DValue223], 25);
      }
      for (
        let chunkABZYJK2DValue236 = 0;
        chunkABZYJK2DValue236 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue236++
      )
        this["cScaleInv" + chunkABZYJK2DValue236] =
          this["cScaleInv" + chunkABZYJK2DValue236] ||
          invertN(this["cScale" + chunkABZYJK2DValue236], {
            h: 180,
          });
      for (
        let chunkABZYJK2DValue214 = 0;
        chunkABZYJK2DValue214 < 5;
        chunkABZYJK2DValue214++
      ) {
        this["surface" + chunkABZYJK2DValue214] =
          this["surface" + chunkABZYJK2DValue214] ||
          invertN(this.mainBkg, {
            h: 30,
            l: -(5 + chunkABZYJK2DValue214 * 5),
          });
        this["surfacePeer" + chunkABZYJK2DValue214] =
          this["surfacePeer" + chunkABZYJK2DValue214] ||
          invertN(this.mainBkg, {
            h: 30,
            l: -(7 + chunkABZYJK2DValue214 * 5),
          });
      }
      if (
        ((this.scaleLabelColor =
          this.scaleLabelColor !== "calculated" && this.scaleLabelColor
            ? this.scaleLabelColor
            : this.labelTextColor),
        this.labelTextColor !== "calculated")
      ) {
        this.cScaleLabel0 = this.cScaleLabel0 || invertT(this.labelTextColor);
        this.cScaleLabel3 = this.cScaleLabel3 || invertT(this.labelTextColor);
        for (
          let chunkABZYJK2DValue240 = 0;
          chunkABZYJK2DValue240 < this.THEME_COLOR_LIMIT;
          chunkABZYJK2DValue240++
        )
          this["cScaleLabel" + chunkABZYJK2DValue240] =
            this["cScaleLabel" + chunkABZYJK2DValue240] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.textColor;
      this.edgeLabelBackground = this.labelBackground;
      this.actorBorder = invertI(this.border1, 23);
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.signalColor = this.textColor;
      this.signalTextColor = this.textColor;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || invertI(this.primaryColor, 75) || "#ffffff";
      this.rowEven = this.rowEven || invertI(this.primaryColor, 1);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 =
        this.pie3 ||
        invertN(this.tertiaryColor, {
          l: -40,
        });
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -20,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -40,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -40,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -40,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -90,
          l: -40,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -30,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.labelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertR(invertT(this.git0), 25);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkABZYJK2DParam26) {
      if (
        (Object.keys(this).forEach((item) => {
          this[item] === "calculated" && (this[item] = undefined);
        }),
        typeof chunkABZYJK2DParam26 != "object")
      ) {
        this.updateColors();
        return;
      }
      let chunkABZYJK2DValue191 = Object.keys(chunkABZYJK2DParam26);
      chunkABZYJK2DValue191.forEach((item) => {
        this[item] = chunkABZYJK2DParam26[item];
      });
      this.updateColors();
      chunkABZYJK2DValue191.forEach((item) => {
        this[item] = chunkABZYJK2DParam26[item];
      });
    }
  },
  _chunkABZYJK2DT = chunkAGHRB4JFN((chunkABZYJK2DParam108) => {
    let chunkABZYJK2DValue271 = new chunkABZYJK2DValue48();
    return (
      chunkABZYJK2DValue271.calculate(chunkABZYJK2DParam108),
      chunkABZYJK2DValue271
    );
  }, "getThemeVariables"),
  chunkABZYJK2DValue49 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#cde498";
      this.secondaryColor = "#cdffb2";
      this.background = "white";
      this.mainBkg = "#cde498";
      this.secondBkg = "#cdffb2";
      this.lineColor = "green";
      this.border1 = "#13540c";
      this.border2 = "#6eaa49";
      this.arrowheadColor = "green";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.tertiaryColor = invertI("#cde498", 10);
      this.primaryBorderColor = chunkABZYJK2DValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkABZYJK2DValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkABZYJK2DValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.primaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#333";
      this.edgeLabelBackground = "#e8e8e8";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "#333";
      this.signalTextColor = "#333";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "#326932";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "#6eaa49";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#6eaa49";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "#487e3a";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
    }
    updateColors() {
      this.actorBorder = invertR(this.mainBkg, 20);
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      this.cScalePeer1 = this.cScalePeer1 || invertR(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || invertR(this.tertiaryColor, 40);
      for (
        let chunkABZYJK2DValue224 = 0;
        chunkABZYJK2DValue224 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue224++
      ) {
        this["cScale" + chunkABZYJK2DValue224] = invertR(
          this["cScale" + chunkABZYJK2DValue224],
          10,
        );
        this["cScalePeer" + chunkABZYJK2DValue224] =
          this["cScalePeer" + chunkABZYJK2DValue224] ||
          invertR(this["cScale" + chunkABZYJK2DValue224], 25);
      }
      for (
        let chunkABZYJK2DValue237 = 0;
        chunkABZYJK2DValue237 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue237++
      )
        this["cScaleInv" + chunkABZYJK2DValue237] =
          this["cScaleInv" + chunkABZYJK2DValue237] ||
          invertN(this["cScale" + chunkABZYJK2DValue237], {
            h: 180,
          });
      this.scaleLabelColor =
        this.scaleLabelColor !== "calculated" && this.scaleLabelColor
          ? this.scaleLabelColor
          : this.labelTextColor;
      for (
        let chunkABZYJK2DValue243 = 0;
        chunkABZYJK2DValue243 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue243++
      )
        this["cScaleLabel" + chunkABZYJK2DValue243] =
          this["cScaleLabel" + chunkABZYJK2DValue243] || this.scaleLabelColor;
      for (
        let chunkABZYJK2DValue206 = 0;
        chunkABZYJK2DValue206 < 5;
        chunkABZYJK2DValue206++
      ) {
        this["surface" + chunkABZYJK2DValue206] =
          this["surface" + chunkABZYJK2DValue206] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(5 + chunkABZYJK2DValue206 * 5),
          });
        this["surfacePeer" + chunkABZYJK2DValue206] =
          this["surfacePeer" + chunkABZYJK2DValue206] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(8 + chunkABZYJK2DValue206 * 5),
          });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.taskBorderColor = this.border1;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || invertI(this.mainBkg, 20);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -30,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          h: 40,
          l: -40,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -50,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -50,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -50,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg,
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkABZYJK2DParam43) {
      if (typeof chunkABZYJK2DParam43 != "object") {
        this.updateColors();
        return;
      }
      let chunkABZYJK2DValue209 = Object.keys(chunkABZYJK2DParam43);
      chunkABZYJK2DValue209.forEach((item) => {
        this[item] = chunkABZYJK2DParam43[item];
      });
      this.updateColors();
      chunkABZYJK2DValue209.forEach((item) => {
        this[item] = chunkABZYJK2DParam43[item];
      });
    }
  },
  chunkABZYJK2DValue50 = chunkAGHRB4JFN((chunkABZYJK2DParam109) => {
    let chunkABZYJK2DValue272 = new chunkABZYJK2DValue49();
    return (
      chunkABZYJK2DValue272.calculate(chunkABZYJK2DParam109),
      chunkABZYJK2DValue272
    );
  }, "getThemeVariables"),
  chunkABZYJK2DValue51 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.primaryColor = "#eee";
      this.contrast = "#707070";
      this.secondaryColor = invertI(this.contrast, 55);
      this.background = "#ffffff";
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = chunkABZYJK2DValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkABZYJK2DValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkABZYJK2DValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.mainBkg = "#eee";
      this.secondBkg = "calculated";
      this.lineColor = "#666";
      this.border1 = "#999";
      this.border2 = "calculated";
      this.note = "#ffa";
      this.text = "#333";
      this.critical = "#d42";
      this.done = "#bbb";
      this.arrowheadColor = "#333333";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.THEME_COLOR_LIMIT = 12;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "white";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = this.actorBorder;
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "calculated";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.critBorderColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || "#f4f4f4";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
    }
    updateColors() {
      this.secondBkg = invertI(this.contrast, 55);
      this.border2 = this.contrast;
      this.actorBorder = invertI(this.border1, 23);
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.text;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.text;
      this.signalTextColor = this.text;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.text;
      this.loopTextColor = this.text;
      this.noteBorderColor = "#999";
      this.noteBkgColor = "#666";
      this.noteTextColor = "#fff";
      this.cScale0 = this.cScale0 || "#555";
      this.cScale1 = this.cScale1 || "#F4F4F4";
      this.cScale2 = this.cScale2 || "#555";
      this.cScale3 = this.cScale3 || "#BBB";
      this.cScale4 = this.cScale4 || "#777";
      this.cScale5 = this.cScale5 || "#999";
      this.cScale6 = this.cScale6 || "#DDD";
      this.cScale7 = this.cScale7 || "#FFF";
      this.cScale8 = this.cScale8 || "#DDD";
      this.cScale9 = this.cScale9 || "#BBB";
      this.cScale10 = this.cScale10 || "#999";
      this.cScale11 = this.cScale11 || "#777";
      for (
        let chunkABZYJK2DValue247 = 0;
        chunkABZYJK2DValue247 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue247++
      )
        this["cScaleInv" + chunkABZYJK2DValue247] =
          this["cScaleInv" + chunkABZYJK2DValue247] ||
          invertT(this["cScale" + chunkABZYJK2DValue247]);
      for (
        let chunkABZYJK2DValue213 = 0;
        chunkABZYJK2DValue213 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue213++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkABZYJK2DValue213] =
              this["cScalePeer" + chunkABZYJK2DValue213] ||
              invertI(this["cScale" + chunkABZYJK2DValue213], 10))
          : (this["cScalePeer" + chunkABZYJK2DValue213] =
              this["cScalePeer" + chunkABZYJK2DValue213] ||
              invertR(this["cScale" + chunkABZYJK2DValue213], 10));
      this.scaleLabelColor =
        this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1;
      this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (
        let chunkABZYJK2DValue244 = 0;
        chunkABZYJK2DValue244 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue244++
      )
        this["cScaleLabel" + chunkABZYJK2DValue244] =
          this["cScaleLabel" + chunkABZYJK2DValue244] || this.scaleLabelColor;
      for (
        let chunkABZYJK2DValue219 = 0;
        chunkABZYJK2DValue219 < 5;
        chunkABZYJK2DValue219++
      ) {
        this["surface" + chunkABZYJK2DValue219] =
          this["surface" + chunkABZYJK2DValue219] ||
          invertN(this.mainBkg, {
            l: -(5 + chunkABZYJK2DValue219 * 5),
          });
        this["surfacePeer" + chunkABZYJK2DValue219] =
          this["surfacePeer" + chunkABZYJK2DValue219] ||
          invertN(this.mainBkg, {
            l: -(8 + chunkABZYJK2DValue219 * 5),
          });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.text;
      this.sectionBkgColor = invertI(this.contrast, 30);
      this.sectionBkgColor2 = invertI(this.contrast, 30);
      this.taskBorderColor = invertR(this.contrast, 10);
      this.taskBkgColor = this.contrast;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = this.text;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.gridColor = invertI(this.border1, 30);
      this.doneTaskBkgColor = this.done;
      this.doneTaskBorderColor = this.lineColor;
      this.critBkgColor = this.critical;
      this.critBorderColor = invertR(this.critBkgColor, 10);
      this.todayLineColor = this.critBkgColor;
      this.vertLineColor = this.critBkgColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || "#000";
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f4f4f4";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.stateBorder = this.stateBorder || "#000";
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#222";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      for (
        let chunkABZYJK2DValue257 = 0;
        chunkABZYJK2DValue257 < this.THEME_COLOR_LIMIT;
        chunkABZYJK2DValue257++
      )
        this["pie" + chunkABZYJK2DValue257] =
          this["cScale" + chunkABZYJK2DValue257];
      this.pie12 = this.pie0;
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0",
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = invertR(this.pie1, 25) || this.primaryColor;
      this.git1 = this.pie2 || this.secondaryColor;
      this.git2 = this.pie3 || this.tertiaryColor;
      this.git3 =
        this.pie4 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.pie5 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.pie6 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
      this.gitBranchLabel0 = this.branchLabelColor;
      this.gitBranchLabel1 = "white";
      this.gitBranchLabel2 = this.branchLabelColor;
      this.gitBranchLabel3 = "white";
      this.gitBranchLabel4 = this.branchLabelColor;
      this.gitBranchLabel5 = this.branchLabelColor;
      this.gitBranchLabel6 = this.branchLabelColor;
      this.gitBranchLabel7 = this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkABZYJK2DParam44) {
      if (typeof chunkABZYJK2DParam44 != "object") {
        this.updateColors();
        return;
      }
      let chunkABZYJK2DValue210 = Object.keys(chunkABZYJK2DParam44);
      chunkABZYJK2DValue210.forEach((item) => {
        this[item] = chunkABZYJK2DParam44[item];
      });
      this.updateColors();
      chunkABZYJK2DValue210.forEach((item) => {
        this[item] = chunkABZYJK2DParam44[item];
      });
    }
  },
  chunkABZYJK2DJ = {
    base: {
      getThemeVariables: chunkABZYJK2DValue46,
    },
    dark: {
      getThemeVariables: chunkABZYJK2DValue47,
    },
    default: {
      getThemeVariables: _chunkABZYJK2DT,
    },
    forest: {
      getThemeVariables: chunkABZYJK2DValue50,
    },
    neutral: {
      getThemeVariables: chunkAGHRB4JFN((chunkABZYJK2DParam93) => {
        let chunkABZYJK2DValue264 = new chunkABZYJK2DValue51();
        return (
          chunkABZYJK2DValue264.calculate(chunkABZYJK2DParam93),
          chunkABZYJK2DValue264
        );
      }, "getThemeVariables"),
    },
  },
  chunkABZYJK2DValue52 = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0,
      },
      diagramPadding: 8,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: "basis",
      padding: 15,
      defaultRenderer: "dagre-wrapper",
      wrappingWidth: 200,
      inheritDir: false,
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: '"Open Sans", sans-serif',
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      noteFontWeight: 400,
      noteAlign: "center",
      messageFontSize: 16,
      messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20,
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
      topAxis: false,
      displayMode: "",
      weekday: "sunday",
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      maxLabelWidth: 360,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0",
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B",
      ],
      sectionColours: ["#fff"],
      titleColor: "",
      titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      titleFontSize: "4ex",
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: "dagre-wrapper",
      htmlLabels: false,
      hideEmptyMembersBox: false,
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: "20",
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: "dagre-wrapper",
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: "TB",
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      nodeSpacing: 140,
      rankSpacing: 80,
      stroke: "gray",
      fill: "honeydew",
      fontSize: 12,
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75,
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: "top",
      yAxisPosition: "left",
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2,
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showDataLabel: false,
      showTitle: true,
      xAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2,
      },
      yAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2,
      },
      chartOrientation: "vertical",
      plotReservedSpacePercent: 50,
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: "#f9f9f9",
      text_color: "#333",
      rect_border_size: "0.5px",
      rect_border_color: "#bbb",
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20,
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200,
      layoutAlgorithm: "cose-bilkent",
    },
    kanban: {
      useMaxWidth: true,
      padding: 8,
      sectionWidth: 200,
      ticketBaseUrl: "",
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0",
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B",
      ],
      sectionColours: ["#fff"],
      disableMulticolor: false,
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0,
      },
      mainBranchName: "main",
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false,
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: '"Open Sans", sans-serif',
      personFontWeight: "normal",
      external_personFontSize: 14,
      external_personFontFamily: '"Open Sans", sans-serif',
      external_personFontWeight: "normal",
      systemFontSize: 14,
      systemFontFamily: '"Open Sans", sans-serif',
      systemFontWeight: "normal",
      external_systemFontSize: 14,
      external_systemFontFamily: '"Open Sans", sans-serif',
      external_systemFontWeight: "normal",
      system_dbFontSize: 14,
      system_dbFontFamily: '"Open Sans", sans-serif',
      system_dbFontWeight: "normal",
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: '"Open Sans", sans-serif',
      external_system_dbFontWeight: "normal",
      system_queueFontSize: 14,
      system_queueFontFamily: '"Open Sans", sans-serif',
      system_queueFontWeight: "normal",
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: '"Open Sans", sans-serif',
      external_system_queueFontWeight: "normal",
      boundaryFontSize: 14,
      boundaryFontFamily: '"Open Sans", sans-serif',
      boundaryFontWeight: "normal",
      messageFontSize: 12,
      messageFontFamily: '"Open Sans", sans-serif',
      messageFontWeight: "normal",
      containerFontSize: 14,
      containerFontFamily: '"Open Sans", sans-serif',
      containerFontWeight: "normal",
      external_containerFontSize: 14,
      external_containerFontFamily: '"Open Sans", sans-serif',
      external_containerFontWeight: "normal",
      container_dbFontSize: 14,
      container_dbFontFamily: '"Open Sans", sans-serif',
      container_dbFontWeight: "normal",
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: '"Open Sans", sans-serif',
      external_container_dbFontWeight: "normal",
      container_queueFontSize: 14,
      container_queueFontFamily: '"Open Sans", sans-serif',
      container_queueFontWeight: "normal",
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: '"Open Sans", sans-serif',
      external_container_queueFontWeight: "normal",
      componentFontSize: 14,
      componentFontFamily: '"Open Sans", sans-serif',
      componentFontWeight: "normal",
      external_componentFontSize: 14,
      external_componentFontFamily: '"Open Sans", sans-serif',
      external_componentFontWeight: "normal",
      component_dbFontSize: 14,
      component_dbFontFamily: '"Open Sans", sans-serif',
      component_dbFontWeight: "normal",
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: '"Open Sans", sans-serif',
      external_component_dbFontWeight: "normal",
      component_queueFontSize: 14,
      component_queueFontFamily: '"Open Sans", sans-serif',
      component_queueFontWeight: "normal",
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: '"Open Sans", sans-serif',
      external_component_queueFontWeight: "normal",
      wrap: true,
      wrapPadding: 10,
      person_bg_color: "#08427B",
      person_border_color: "#073B6F",
      external_person_bg_color: "#686868",
      external_person_border_color: "#8A8A8A",
      system_bg_color: "#1168BD",
      system_border_color: "#3C7FC0",
      system_db_bg_color: "#1168BD",
      system_db_border_color: "#3C7FC0",
      system_queue_bg_color: "#1168BD",
      system_queue_border_color: "#3C7FC0",
      external_system_bg_color: "#999999",
      external_system_border_color: "#8A8A8A",
      external_system_db_bg_color: "#999999",
      external_system_db_border_color: "#8A8A8A",
      external_system_queue_bg_color: "#999999",
      external_system_queue_border_color: "#8A8A8A",
      container_bg_color: "#438DD5",
      container_border_color: "#3C7FC0",
      container_db_bg_color: "#438DD5",
      container_db_border_color: "#3C7FC0",
      container_queue_bg_color: "#438DD5",
      container_queue_border_color: "#3C7FC0",
      external_container_bg_color: "#B3B3B3",
      external_container_border_color: "#A6A6A6",
      external_container_db_bg_color: "#B3B3B3",
      external_container_db_border_color: "#A6A6A6",
      external_container_queue_bg_color: "#B3B3B3",
      external_container_queue_border_color: "#A6A6A6",
      component_bg_color: "#85BBF0",
      component_border_color: "#78A8D8",
      component_db_bg_color: "#85BBF0",
      component_db_border_color: "#78A8D8",
      component_queue_bg_color: "#85BBF0",
      component_queue_border_color: "#78A8D8",
      external_component_bg_color: "#CCCCCC",
      external_component_border_color: "#BFBFBF",
      external_component_db_bg_color: "#CCCCCC",
      external_component_db_border_color: "#BFBFBF",
      external_component_queue_bg_color: "#CCCCCC",
      external_component_queue_border_color: "#BFBFBF",
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: "gradient",
      nodeAlignment: "justify",
      showValues: true,
      prefix: "",
      suffix: "",
    },
    block: {
      useMaxWidth: true,
      padding: 8,
    },
    packet: {
      useMaxWidth: true,
      rowHeight: 32,
      bitWidth: 32,
      bitsPerRow: 32,
      showBits: true,
      paddingX: 5,
      paddingY: 5,
    },
    architecture: {
      useMaxWidth: true,
      padding: 40,
      iconSize: 80,
      fontSize: 16,
    },
    radar: {
      useMaxWidth: true,
      width: 600,
      height: 600,
      marginTop: 50,
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
      axisScaleFactor: 1,
      axisLabelFactor: 1.05,
      curveTension: 0.17,
    },
    theme: "default",
    look: "classic",
    handDrawnSeed: 0,
    layout: "dagre",
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
      "secure",
      "securityLevel",
      "startOnLoad",
      "maxTextSize",
      "suppressErrorRendering",
      "maxEdges",
    ],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false,
  },
  chunkABZYJK2DValue53 = {
    ...chunkABZYJK2DValue52,
    deterministicIDSeed: undefined,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF",
      forceNodeModelOrder: false,
      considerModelOrder: "NODES_AND_EDGES",
    },
    themeCSS: undefined,
    themeVariables: chunkABZYJK2DJ.default.getThemeVariables(),
    sequence: {
      ...chunkABZYJK2DValue52.sequence,
      messageFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight,
        };
      }, "messageFont"),
      noteFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight,
        };
      }, "noteFont"),
      actorFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight,
        };
      }, "actorFont"),
    },
    class: {
      hideEmptyMembersBox: false,
    },
    gantt: {
      ...chunkABZYJK2DValue52.gantt,
      tickInterval: undefined,
      useWidth: undefined,
    },
    c4: {
      ...chunkABZYJK2DValue52.c4,
      useWidth: undefined,
      personFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight,
        };
      }, "personFont"),
      flowchart: {
        ...chunkABZYJK2DValue52.flowchart,
        inheritDir: false,
      },
      external_personFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight,
        };
      }, "external_personFont"),
      systemFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight,
        };
      }, "systemFont"),
      external_systemFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight,
        };
      }, "external_systemFont"),
      system_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight,
        };
      }, "system_dbFont"),
      external_system_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight,
        };
      }, "external_system_dbFont"),
      system_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight,
        };
      }, "system_queueFont"),
      external_system_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight,
        };
      }, "external_system_queueFont"),
      containerFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight,
        };
      }, "containerFont"),
      external_containerFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight,
        };
      }, "external_containerFont"),
      container_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight,
        };
      }, "container_dbFont"),
      external_container_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight,
        };
      }, "external_container_dbFont"),
      container_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight,
        };
      }, "container_queueFont"),
      external_container_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight,
        };
      }, "external_container_queueFont"),
      componentFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight,
        };
      }, "componentFont"),
      external_componentFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight,
        };
      }, "external_componentFont"),
      component_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight,
        };
      }, "component_dbFont"),
      external_component_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight,
        };
      }, "external_component_dbFont"),
      component_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight,
        };
      }, "component_queueFont"),
      external_component_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight,
        };
      }, "external_component_queueFont"),
      boundaryFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight,
        };
      }, "boundaryFont"),
      messageFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight,
        };
      }, "messageFont"),
    },
    pie: {
      ...chunkABZYJK2DValue52.pie,
      useWidth: 984,
    },
    xyChart: {
      ...chunkABZYJK2DValue52.xyChart,
      useWidth: undefined,
    },
    requirement: {
      ...chunkABZYJK2DValue52.requirement,
      useWidth: undefined,
    },
    packet: {
      ...chunkABZYJK2DValue52.packet,
    },
    radar: {
      ...chunkABZYJK2DValue52.radar,
    },
    treemap: {
      useMaxWidth: true,
      padding: 10,
      diagramPadding: 8,
      showValues: true,
      nodeWidth: 100,
      nodeHeight: 40,
      borderWidth: 1,
      valueFontSize: 12,
      labelFontSize: 14,
      valueFormat: ",",
    },
  },
  chunkABZYJK2DValue54 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam46, chunkABZYJK2DParam47 = "") =>
      Object.keys(chunkABZYJK2DParam46).reduce(
        (accumulator, current) =>
          Array.isArray(chunkABZYJK2DParam46[current])
            ? accumulator
            : typeof chunkABZYJK2DParam46[current] == "object" &&
                chunkABZYJK2DParam46[current] !== null
              ? [
                  ...accumulator,
                  chunkABZYJK2DParam47 + current,
                  ...chunkABZYJK2DValue54(chunkABZYJK2DParam46[current], ""),
                ]
              : [...accumulator, chunkABZYJK2DParam47 + current],
        [],
      ),
    "keyify",
  ),
  chunkABZYJK2DValue55 = new Set(
    chunkABZYJK2DValue54(chunkABZYJK2DValue53, ""),
  ),
  chunkABZYJK2DD = chunkABZYJK2DValue53,
  _chunkABZYJK2DF = chunkAGHRB4JFN((chunkABZYJK2DParam12) => {
    if (
      (chunkAGHRB4JFR.debug(
        "sanitizeDirective called with",
        chunkABZYJK2DParam12,
      ),
      !(typeof chunkABZYJK2DParam12 != "object" || !chunkABZYJK2DParam12))
    ) {
      if (Array.isArray(chunkABZYJK2DParam12)) {
        chunkABZYJK2DParam12.forEach((item) => _chunkABZYJK2DF(item));
        return;
      }
      for (let chunkABZYJK2DValue175 of Object.keys(chunkABZYJK2DParam12)) {
        if (
          (chunkAGHRB4JFR.debug("Checking key", chunkABZYJK2DValue175),
          chunkABZYJK2DValue175.startsWith("__") ||
            chunkABZYJK2DValue175.includes("proto") ||
            chunkABZYJK2DValue175.includes("constr") ||
            !chunkABZYJK2DValue55.has(chunkABZYJK2DValue175) ||
            chunkABZYJK2DParam12[chunkABZYJK2DValue175] == null)
        ) {
          chunkAGHRB4JFR.debug(
            "sanitize deleting key: ",
            chunkABZYJK2DValue175,
          );
          delete chunkABZYJK2DParam12[chunkABZYJK2DValue175];
          continue;
        }
        if (typeof chunkABZYJK2DParam12[chunkABZYJK2DValue175] == "object") {
          chunkAGHRB4JFR.debug("sanitizing object", chunkABZYJK2DValue175);
          _chunkABZYJK2DF(chunkABZYJK2DParam12[chunkABZYJK2DValue175]);
          continue;
        }
        for (let chunkABZYJK2DValue233 of [
          "themeCSS",
          "fontFamily",
          "altFontFamily",
        ])
          chunkABZYJK2DValue175.includes(chunkABZYJK2DValue233) &&
            (chunkAGHRB4JFR.debug(
              "sanitizing css option",
              chunkABZYJK2DValue175,
            ),
            (chunkABZYJK2DParam12[chunkABZYJK2DValue175] = chunkABZYJK2DValue56(
              chunkABZYJK2DParam12[chunkABZYJK2DValue175],
            )));
      }
      if (chunkABZYJK2DParam12.themeVariables)
        for (let chunkABZYJK2DValue225 of Object.keys(
          chunkABZYJK2DParam12.themeVariables,
        )) {
          let chunkABZYJK2DValue231 =
            chunkABZYJK2DParam12.themeVariables[chunkABZYJK2DValue225];
          chunkABZYJK2DValue231?.match &&
            !chunkABZYJK2DValue231.match(/^[\d "#%(),.;A-Za-z]+$/) &&
            (chunkABZYJK2DParam12.themeVariables[chunkABZYJK2DValue225] = "");
        }
      chunkAGHRB4JFR.debug("After sanitization", chunkABZYJK2DParam12);
    }
  }, "sanitizeDirective"),
  chunkABZYJK2DValue56 = chunkAGHRB4JFN((chunkABZYJK2DParam53) => {
    let chunkABZYJK2DValue220 = 0,
      chunkABZYJK2DValue221 = 0;
    for (let chunkABZYJK2DValue249 of chunkABZYJK2DParam53) {
      if (chunkABZYJK2DValue220 < chunkABZYJK2DValue221)
        return "{ /* ERROR: Unbalanced CSS */ }";
      chunkABZYJK2DValue249 === "{"
        ? chunkABZYJK2DValue220++
        : chunkABZYJK2DValue249 === "}" && chunkABZYJK2DValue221++;
    }
    return chunkABZYJK2DValue220 === chunkABZYJK2DValue221
      ? chunkABZYJK2DParam53
      : "{ /* ERROR: Unbalanced CSS */ }";
  }, "sanitizeCss"),
  chunkABZYJK2DL = Object.freeze(chunkABZYJK2DD),
  chunkABZYJK2DValue57 = chunkABZYJK2DR({}, chunkABZYJK2DL),
  chunkABZYJK2DValue58,
  chunkABZYJK2DValue59 = [],
  chunkABZYJK2DValue60 = chunkABZYJK2DR({}, chunkABZYJK2DL),
  chunkABZYJK2DValue61 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam33, chunkABZYJK2DParam34) => {
      let chunkABZYJK2DValue196 = chunkABZYJK2DR({}, chunkABZYJK2DParam33),
        chunkABZYJK2DValue197 = {};
      for (let chunkABZYJK2DValue275 of chunkABZYJK2DParam34) {
        chunkABZYJK2DValue62(chunkABZYJK2DValue275);
        chunkABZYJK2DValue197 = chunkABZYJK2DR(
          chunkABZYJK2DValue197,
          chunkABZYJK2DValue275,
        );
      }
      if (
        ((chunkABZYJK2DValue196 = chunkABZYJK2DR(
          chunkABZYJK2DValue196,
          chunkABZYJK2DValue197,
        )),
        chunkABZYJK2DValue197.theme &&
          chunkABZYJK2DValue197.theme in chunkABZYJK2DJ)
      ) {
        let chunkABZYJK2DValue230 = chunkABZYJK2DR(
          chunkABZYJK2DR({}, chunkABZYJK2DValue58).themeVariables || {},
          chunkABZYJK2DValue197.themeVariables,
        );
        chunkABZYJK2DValue196.theme &&
          chunkABZYJK2DValue196.theme in chunkABZYJK2DJ &&
          (chunkABZYJK2DValue196.themeVariables = chunkABZYJK2DJ[
            chunkABZYJK2DValue196.theme
          ].getThemeVariables(chunkABZYJK2DValue230));
      }
      return (
        (chunkABZYJK2DValue60 = chunkABZYJK2DValue196),
        chunkABZYJK2DValue66(chunkABZYJK2DValue60),
        chunkABZYJK2DValue60
      );
    },
    "updateCurrentConfig",
  ),
  chunkABZYJK2DV = chunkAGHRB4JFN(
    (chunkABZYJK2DParam143) => (
      chunkABZYJK2DValue66(chunkABZYJK2DParam143),
      chunkABZYJK2DR(chunkABZYJK2DValue60, chunkABZYJK2DParam143),
      _chunkABZYJK2DY()
    ),
    "setConfig",
  ),
  _chunkABZYJK2DY = chunkAGHRB4JFN(
    () => chunkABZYJK2DR({}, chunkABZYJK2DValue60),
    "getConfig",
  ),
  chunkABZYJK2DValue62 = chunkAGHRB4JFN((chunkABZYJK2DParam17) => {
    chunkABZYJK2DParam17 &&
      (["secure", ...(chunkABZYJK2DValue57.secure ?? [])].forEach((item) => {
        Object.hasOwn(chunkABZYJK2DParam17, item) &&
          (chunkAGHRB4JFR.debug(
            `Denied attempt to modify a secure key ${item}`,
            chunkABZYJK2DParam17[item],
          ),
          delete chunkABZYJK2DParam17[item]);
      }),
      Object.keys(chunkABZYJK2DParam17).forEach((item) => {
        item.startsWith("__") && delete chunkABZYJK2DParam17[item];
      }),
      Object.keys(chunkABZYJK2DParam17).forEach((item) => {
        typeof chunkABZYJK2DParam17[item] == "string" &&
          (chunkABZYJK2DParam17[item].includes("<") ||
            chunkABZYJK2DParam17[item].includes(">") ||
            chunkABZYJK2DParam17[item].includes("url(data:")) &&
          delete chunkABZYJK2DParam17[item];
        typeof chunkABZYJK2DParam17[item] == "object" &&
          chunkABZYJK2DValue62(chunkABZYJK2DParam17[item]);
      }));
  }, "sanitize"),
  chunkABZYJK2DValue63 = {
    LAZY_LOAD_DEPRECATED:
      "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  },
  chunkABZYJK2DValue64 = {},
  chunkABZYJK2DValue65 = chunkAGHRB4JFN((chunkABZYJK2DParam117) => {
    chunkABZYJK2DValue64[chunkABZYJK2DParam117] ||
      (chunkAGHRB4JFR.warn(chunkABZYJK2DValue63[chunkABZYJK2DParam117]),
      (chunkABZYJK2DValue64[chunkABZYJK2DParam117] = true));
  }, "issueWarning"),
  chunkABZYJK2DValue66 = chunkAGHRB4JFN((chunkABZYJK2DParam78) => {
    chunkABZYJK2DParam78 &&
      (chunkABZYJK2DParam78.lazyLoadedDiagrams ||
        chunkABZYJK2DParam78.loadExternalDiagramsAtStartup) &&
      chunkABZYJK2DValue65("LAZY_LOAD_DEPRECATED");
  }, "checkConfig"),
  chunkABZYJK2DK = /<br\s*\/?>/gi,
  _t = chunkAGHRB4JFN(
    (chunkABZYJK2DParam113) =>
      chunkABZYJK2DParam113
        ? chunkABZYJK2DValue74(chunkABZYJK2DParam113)
            .replace(/\\n/g, "#br#")
            .split("#br#")
        : [""],
    "getRows",
  ),
  chunkABZYJK2DValue67 = (() => {
    let chunkABZYJK2DValue265 = false;
    return () => {
      chunkABZYJK2DValue265 ||= (chunkABZYJK2DHelper8(), true);
    };
  })();
export const _chunkABZYJK2DW = chunkAGHRB4JFN(
  () => chunkABZYJK2DR({}, chunkABZYJK2DValue57),
  "getSiteConfig",
);
export const chunkABZYJK2DN = chunkAGHRB4JFN((chunkABZYJK2DParam63) => {
  _chunkABZYJK2DF(chunkABZYJK2DParam63);
  chunkABZYJK2DParam63.fontFamily &&
    !chunkABZYJK2DParam63.themeVariables?.fontFamily &&
    (chunkABZYJK2DParam63.themeVariables = {
      ...chunkABZYJK2DParam63.themeVariables,
      fontFamily: chunkABZYJK2DParam63.fontFamily,
    });
  chunkABZYJK2DValue59.push(chunkABZYJK2DParam63);
  chunkABZYJK2DValue61(chunkABZYJK2DValue57, chunkABZYJK2DValue59);
}, "addDirective");
export const chunkABZYJK2DF = chunkAGHRB4JFN(function (
  chunkABZYJK2DParam38,
  chunkABZYJK2DParam39,
) {
  chunkABZYJK2DParam38 = chunkABZYJK2DParam38
    .replace(chunkABZYJK2DG, "")
    .replace(chunkABZYJK2DM, "")
    .replace(chunkABZYJK2DValue39, "\n");
  for (let [
    chunkABZYJK2DValue267,
    { detector: chunkABZYJK2DValue268 },
  ] of Object.entries(chunkABZYJK2DP))
    if (chunkABZYJK2DValue268(chunkABZYJK2DParam38, chunkABZYJK2DParam39))
      return chunkABZYJK2DValue267;
  throw new chunkABZYJK2DT(
    `No diagram type detected matching given configuration for text: ${chunkABZYJK2DParam38}`,
  );
}, "detectType");
export const chunkABZYJK2DY = chunkAGHRB4JFN(
  (chunkABZYJK2DParam138) => (
    (chunkABZYJK2DValue57 = chunkABZYJK2DR(
      chunkABZYJK2DValue57,
      chunkABZYJK2DParam138,
    )),
    chunkABZYJK2DValue61(chunkABZYJK2DValue57, chunkABZYJK2DValue59),
    chunkABZYJK2DValue57
  ),
  "updateSiteConfig",
);
export const chunkABZYJK2DW = chunkAGHRB4JFN(
  (chunkABZYJK2DParam64) => (
    (chunkABZYJK2DValue57 = chunkABZYJK2DR({}, chunkABZYJK2DL)),
    (chunkABZYJK2DValue57 = chunkABZYJK2DR(
      chunkABZYJK2DValue57,
      chunkABZYJK2DParam64,
    )),
    chunkABZYJK2DParam64.theme &&
      chunkABZYJK2DJ[chunkABZYJK2DParam64.theme] &&
      (chunkABZYJK2DValue57.themeVariables = chunkABZYJK2DJ[
        chunkABZYJK2DParam64.theme
      ].getThemeVariables(chunkABZYJK2DParam64.themeVariables)),
    chunkABZYJK2DValue61(chunkABZYJK2DValue57, chunkABZYJK2DValue59),
    chunkABZYJK2DValue57
  ),
  "setSiteConfig",
);
export const chunkABZYJK2DS = chunkAGHRB4JFN(
  (chunkABZYJK2DParam147) => chunkABZYJK2DP[chunkABZYJK2DParam147].loader,
  "getDiagramLoader",
);
export const _chunkABZYJK2DR = chunkAGHRB4JFN((chunkABZYJK2DParam141) => {
  chunkABZYJK2DValue58 = chunkABZYJK2DR({}, chunkABZYJK2DParam141);
}, "saveConfigFromInitialize");
export const _chunkABZYJK2DZ = _chunkABZYJK2DR;
export const _chunkABZYJK2DP = chunkAGHRB4JFN(
  (chunkABZYJK2DParam132 = chunkABZYJK2DValue57) => {
    chunkABZYJK2DValue59 = [];
    chunkABZYJK2DValue61(chunkABZYJK2DParam132, chunkABZYJK2DValue59);
  },
  "reset",
);
export const _chunkABZYJK2DM = chunkAGHRB4JFN((...chunkABZYJK2DParam88) => {
  for (let { id, detector, loader } of chunkABZYJK2DParam88)
    chunkABZYJK2DValue40(id, detector, loader);
}, "registerLazyLoadedDiagrams");
export const _chunkABZYJK2DD = chunkAGHRB4JFN(() => {
  let chunkABZYJK2DValue255 = {};
  chunkABZYJK2DValue58 &&
    (chunkABZYJK2DValue255 = chunkABZYJK2DR(
      chunkABZYJK2DValue255,
      chunkABZYJK2DValue58,
    ));
  for (let chunkABZYJK2DValue277 of chunkABZYJK2DValue59)
    chunkABZYJK2DValue255 = chunkABZYJK2DR(
      chunkABZYJK2DValue255,
      chunkABZYJK2DValue277,
    );
  return chunkABZYJK2DValue255;
}, "getUserDefinedConfig");
function chunkABZYJK2DHelper8() {
  chunkABZYJK2DX.addHook("beforeSanitizeAttributes", (chunkABZYJK2DParam73) => {
    chunkABZYJK2DParam73.tagName === "A" &&
      chunkABZYJK2DParam73.hasAttribute("target") &&
      chunkABZYJK2DParam73.setAttribute(
        "data-temp-href-target",
        chunkABZYJK2DParam73.getAttribute("target") ?? "",
      );
  });
  chunkABZYJK2DX.addHook("afterSanitizeAttributes", (chunkABZYJK2DParam49) => {
    chunkABZYJK2DParam49.tagName === "A" &&
      chunkABZYJK2DParam49.hasAttribute("data-temp-href-target") &&
      (chunkABZYJK2DParam49.setAttribute(
        "target",
        chunkABZYJK2DParam49.getAttribute("data-temp-href-target") ?? "",
      ),
      chunkABZYJK2DParam49.removeAttribute("data-temp-href-target"),
      chunkABZYJK2DParam49.getAttribute("target") === "_blank" &&
        chunkABZYJK2DParam49.setAttribute("rel", "noopener"));
  });
}
chunkAGHRB4JFN(chunkABZYJK2DHelper8, "setupDompurifyHooks");
var chunkABZYJK2DValue68 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam144) => (
      chunkABZYJK2DValue67(),
      chunkABZYJK2DX.sanitize(chunkABZYJK2DParam144)
    ),
    "removeScript",
  ),
  chunkABZYJK2DValue69 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam31, chunkABZYJK2DParam32) => {
      if (chunkABZYJK2DParam32.flowchart?.htmlLabels !== false) {
        let chunkABZYJK2DValue211 = chunkABZYJK2DParam32.securityLevel;
        chunkABZYJK2DValue211 === "antiscript" ||
        chunkABZYJK2DValue211 === "strict"
          ? (chunkABZYJK2DParam31 = chunkABZYJK2DValue68(chunkABZYJK2DParam31))
          : chunkABZYJK2DValue211 !== "loose" &&
            ((chunkABZYJK2DParam31 =
              chunkABZYJK2DValue74(chunkABZYJK2DParam31)),
            (chunkABZYJK2DParam31 = chunkABZYJK2DParam31
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")),
            (chunkABZYJK2DParam31 = chunkABZYJK2DParam31.replace(
              /=/g,
              "&equals;",
            )),
            (chunkABZYJK2DParam31 =
              chunkABZYJK2DValue73(chunkABZYJK2DParam31)));
      }
      return chunkABZYJK2DParam31;
    },
    "sanitizeMore",
  ),
  chunkABZYJK2DI = chunkAGHRB4JFN(
    (chunkABZYJK2DParam65, chunkABZYJK2DParam66) =>
      chunkABZYJK2DParam65 &&
      ((chunkABZYJK2DParam65 = chunkABZYJK2DParam66.dompurifyConfig
        ? chunkABZYJK2DX
            .sanitize(
              chunkABZYJK2DValue69(chunkABZYJK2DParam65, chunkABZYJK2DParam66),
              chunkABZYJK2DParam66.dompurifyConfig,
            )
            .toString()
        : chunkABZYJK2DX
            .sanitize(
              chunkABZYJK2DValue69(chunkABZYJK2DParam65, chunkABZYJK2DParam66),
              {
                FORBID_TAGS: ["style"],
              },
            )
            .toString()),
      chunkABZYJK2DParam65),
    "sanitizeText",
  ),
  chunkABZYJK2DValue70 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam99, chunkABZYJK2DParam100) =>
      typeof chunkABZYJK2DParam99 == "string"
        ? chunkABZYJK2DI(chunkABZYJK2DParam99, chunkABZYJK2DParam100)
        : chunkABZYJK2DParam99
            .flat()
            .map((item) => chunkABZYJK2DI(item, chunkABZYJK2DParam100)),
    "sanitizeTextOrArray",
  ),
  chunkABZYJK2DValue71 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam150) => chunkABZYJK2DK.test(chunkABZYJK2DParam150),
    "hasBreaks",
  ),
  chunkABZYJK2DValue72 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam148) => chunkABZYJK2DParam148.split(chunkABZYJK2DK),
    "splitBreaks",
  ),
  chunkABZYJK2DValue73 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam139) => chunkABZYJK2DParam139.replace(/#br#/g, "<br/>"),
    "placeholderToBreak",
  ),
  chunkABZYJK2DValue74 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam146) =>
      chunkABZYJK2DParam146.replace(chunkABZYJK2DK, "#br#"),
    "breakToPlaceholder",
  ),
  chunkABZYJK2DE = chunkAGHRB4JFN((chunkABZYJK2DParam45) => {
    let chunkABZYJK2DValue215 = "";
    return (
      chunkABZYJK2DParam45 &&
        ((chunkABZYJK2DValue215 =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          window.location.search),
        (chunkABZYJK2DValue215 = CSS.escape(chunkABZYJK2DValue215))),
      chunkABZYJK2DValue215
    );
  }, "getUrl"),
  chunkABZYJK2DH = chunkAGHRB4JFN(
    (chunkABZYJK2DParam79) =>
      !(
        chunkABZYJK2DParam79 === false ||
        ["false", "null", "0"].includes(
          String(chunkABZYJK2DParam79).trim().toLowerCase(),
        )
      ),
    "evaluate",
  ),
  chunkABZYJK2DValue75 = chunkAGHRB4JFN(function (...chunkABZYJK2DParam83) {
    let chunkABZYJK2DValue261 = chunkABZYJK2DParam83.filter(
      (item) => !isNaN(item),
    );
    return Math.max(...chunkABZYJK2DValue261);
  }, "getMax"),
  chunkABZYJK2DValue76 = chunkAGHRB4JFN(function (...chunkABZYJK2DParam84) {
    let chunkABZYJK2DValue262 = chunkABZYJK2DParam84.filter(
      (item) => !isNaN(item),
    );
    return Math.min(...chunkABZYJK2DValue262);
  }, "getMin"),
  chunkABZYJK2DValue77 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam130, chunkABZYJK2DParam131) =>
      Math.max(
        0,
        chunkABZYJK2DParam130.split(chunkABZYJK2DParam131).length - 1,
      ),
    "countOccurrence",
  ),
  chunkABZYJK2DValue78 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam81, chunkABZYJK2DParam82) => {
      let chunkABZYJK2DValue259 = chunkABZYJK2DValue77(
          chunkABZYJK2DParam81,
          "~",
        ),
        chunkABZYJK2DValue260 = chunkABZYJK2DValue77(chunkABZYJK2DParam82, "~");
      return chunkABZYJK2DValue259 === 1 && chunkABZYJK2DValue260 === 1;
    },
    "shouldCombineSets",
  ),
  chunkABZYJK2DValue79 = chunkAGHRB4JFN((chunkABZYJK2DParam25) => {
    let chunkABZYJK2DValue186 = chunkABZYJK2DValue77(chunkABZYJK2DParam25, "~"),
      chunkABZYJK2DValue187 = false;
    if (chunkABZYJK2DValue186 <= 1) return chunkABZYJK2DParam25;
    chunkABZYJK2DValue186 % 2 != 0 &&
      chunkABZYJK2DParam25.startsWith("~") &&
      ((chunkABZYJK2DParam25 = chunkABZYJK2DParam25.substring(1)),
      (chunkABZYJK2DValue187 = true));
    let chunkABZYJK2DValue188 = [...chunkABZYJK2DParam25],
      chunkABZYJK2DValue189 = chunkABZYJK2DValue188.indexOf("~"),
      chunkABZYJK2DValue190 = chunkABZYJK2DValue188.lastIndexOf("~");
    for (
      ;
      chunkABZYJK2DValue189 !== -1 &&
      chunkABZYJK2DValue190 !== -1 &&
      chunkABZYJK2DValue189 !== chunkABZYJK2DValue190;

    ) {
      chunkABZYJK2DValue188[chunkABZYJK2DValue189] = "<";
      chunkABZYJK2DValue188[chunkABZYJK2DValue190] = ">";
      chunkABZYJK2DValue189 = chunkABZYJK2DValue188.indexOf("~");
      chunkABZYJK2DValue190 = chunkABZYJK2DValue188.lastIndexOf("~");
    }
    return (
      chunkABZYJK2DValue187 && chunkABZYJK2DValue188.unshift("~"),
      chunkABZYJK2DValue188.join("")
    );
  }, "processSet"),
  chunkABZYJK2DValue80 = chunkAGHRB4JFN(
    () => window.MathMLElement !== undefined,
    "isMathMLSupported",
  ),
  chunkABZYJK2DValue81 = /\$\$(.*)\$\$/g,
  chunkABZYJK2DO = chunkAGHRB4JFN(
    (chunkABZYJK2DParam135) =>
      (chunkABZYJK2DParam135.match(chunkABZYJK2DValue81)?.length ?? 0) > 0,
    "hasKatex",
  ),
  chunkABZYJK2DValue82 = chunkAGHRB4JFN(
    async (chunkABZYJK2DParam10, chunkABZYJK2DParam11) => {
      if (!chunkABZYJK2DO(chunkABZYJK2DParam10)) return chunkABZYJK2DParam10;
      if (
        !(
          chunkABZYJK2DValue80() ||
          chunkABZYJK2DParam11.legacyMathML ||
          chunkABZYJK2DParam11.forceLegacyMathML
        )
      )
        return chunkABZYJK2DParam10.replace(
          chunkABZYJK2DValue81,
          "MathML is unsupported in this environment.",
        );
      {
        let { default: _default } = await PreloadHelper(
            async () => {
              let { default: __default } = await import("../utils/katex");
              return {
                default: __default,
              };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            ]),
            import.meta.url,
          ),
          chunkABZYJK2DValue174 =
            chunkABZYJK2DParam11.forceLegacyMathML ||
            (!chunkABZYJK2DValue80() && chunkABZYJK2DParam11.legacyMathML)
              ? "htmlAndMathml"
              : "mathml";
        return chunkABZYJK2DParam10
          .split(chunkABZYJK2DK)
          .map((item) =>
            chunkABZYJK2DO(item)
              ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${item}</div>`
              : `<div>${item}</div>`,
          )
          .join("")
          .replace(
            chunkABZYJK2DValue81,
            (chunkABZYJK2DParam67, chunkABZYJK2DParam68) =>
              _default
                .renderToString(chunkABZYJK2DParam68, {
                  throwOnError: true,
                  displayMode: true,
                  output: chunkABZYJK2DValue174,
                })
                .replace(/\n/g, " ")
                .replace(/<annotation.*<\/annotation>/g, ""),
          );
      }
      return chunkABZYJK2DParam10.replace(
        chunkABZYJK2DValue81,
        "Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.",
      );
    },
    "renderKatexUnsanitized",
  ),
  _chunkABZYJK2DN = chunkAGHRB4JFN(
    async (chunkABZYJK2DParam136, chunkABZYJK2DParam137) =>
      chunkABZYJK2DI(
        await chunkABZYJK2DValue82(
          chunkABZYJK2DParam136,
          chunkABZYJK2DParam137,
        ),
        chunkABZYJK2DParam137,
      ),
    "renderKatexSanitized",
  ),
  chunkABZYJK2DValue83 = chunkAGHRB4JFN(function (
    chunkABZYJK2DParam114,
    chunkABZYJK2DParam115,
  ) {
    for (let chunkABZYJK2DValue276 of chunkABZYJK2DParam115)
      chunkABZYJK2DParam114.attr(
        chunkABZYJK2DValue276[0],
        chunkABZYJK2DValue276[1],
      );
  }, "d3Attrs"),
  chunkABZYJK2DValue84 = chunkAGHRB4JFN(function (
    chunkABZYJK2DParam60,
    chunkABZYJK2DParam61,
    chunkABZYJK2DParam62,
  ) {
    let chunkABZYJK2DValue226 = new Map();
    return (
      chunkABZYJK2DParam62
        ? (chunkABZYJK2DValue226.set("width", "100%"),
          chunkABZYJK2DValue226.set(
            "style",
            `max-width: ${chunkABZYJK2DParam61}px;`,
          ))
        : (chunkABZYJK2DValue226.set("height", chunkABZYJK2DParam60),
          chunkABZYJK2DValue226.set("width", chunkABZYJK2DParam61)),
      chunkABZYJK2DValue226
    );
  }, "calculateSvgSizeAttrs"),
  chunkABZYJK2DC = chunkAGHRB4JFN(function (
    chunkABZYJK2DParam121,
    chunkABZYJK2DParam122,
    chunkABZYJK2DParam123,
    chunkABZYJK2DParam124,
  ) {
    chunkABZYJK2DValue83(
      chunkABZYJK2DParam121,
      chunkABZYJK2DValue84(
        chunkABZYJK2DParam122,
        chunkABZYJK2DParam123,
        chunkABZYJK2DParam124,
      ),
    );
  }, "configureSvgSize"),
  _chunkABZYJK2DG = chunkAGHRB4JFN(function (
    chunkABZYJK2DParam21,
    chunkABZYJK2DParam22,
    chunkABZYJK2DParam23,
    chunkABZYJK2DParam24,
  ) {
    let chunkABZYJK2DValue180 = chunkABZYJK2DParam22.node().getBBox(),
      chunkABZYJK2DValue181 = chunkABZYJK2DValue180.width,
      chunkABZYJK2DValue182 = chunkABZYJK2DValue180.height;
    chunkAGHRB4JFR.info(
      `SVG bounds: ${chunkABZYJK2DValue181}x${chunkABZYJK2DValue182}`,
      chunkABZYJK2DValue180,
    );
    let chunkABZYJK2DValue183 = 0,
      chunkABZYJK2DValue184 = 0;
    chunkAGHRB4JFR.info(
      `Graph bounds: ${chunkABZYJK2DValue183}x${chunkABZYJK2DValue184}`,
      chunkABZYJK2DParam21,
    );
    chunkABZYJK2DValue183 = chunkABZYJK2DValue181 + chunkABZYJK2DParam23 * 2;
    chunkABZYJK2DValue184 = chunkABZYJK2DValue182 + chunkABZYJK2DParam23 * 2;
    chunkAGHRB4JFR.info(
      `Calculated bounds: ${chunkABZYJK2DValue183}x${chunkABZYJK2DValue184}`,
    );
    chunkABZYJK2DC(
      chunkABZYJK2DParam22,
      chunkABZYJK2DValue184,
      chunkABZYJK2DValue183,
      chunkABZYJK2DParam24,
    );
    let chunkABZYJK2DValue185 = `${chunkABZYJK2DValue180.x - chunkABZYJK2DParam23} ${chunkABZYJK2DValue180.y - chunkABZYJK2DParam23} ${chunkABZYJK2DValue180.width + 2 * chunkABZYJK2DParam23} ${chunkABZYJK2DValue180.height + 2 * chunkABZYJK2DParam23}`;
    chunkABZYJK2DParam22.attr("viewBox", chunkABZYJK2DValue185);
  }, "setupGraphViewbox"),
  chunkABZYJK2DValue85 = {},
  chunkABZYJK2DValue86 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam4, chunkABZYJK2DParam5, chunkABZYJK2DParam6) => {
      let chunkABZYJK2DValue165 = "";
      return (
        chunkABZYJK2DParam4 in chunkABZYJK2DValue85 &&
        chunkABZYJK2DValue85[chunkABZYJK2DParam4]
          ? (chunkABZYJK2DValue165 =
              chunkABZYJK2DValue85[chunkABZYJK2DParam4](chunkABZYJK2DParam6))
          : chunkAGHRB4JFR.warn(`No theme found for ${chunkABZYJK2DParam4}`),
        ` & {
    font-family: ${chunkABZYJK2DParam6.fontFamily};
    font-size: ${chunkABZYJK2DParam6.fontSize};
    fill: ${chunkABZYJK2DParam6.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${chunkABZYJK2DParam6.errorBkgColor};
  }
  & .error-text {
    fill: ${chunkABZYJK2DParam6.errorTextColor};
    stroke: ${chunkABZYJK2DParam6.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 1px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${chunkABZYJK2DParam6.lineColor};
    stroke: ${chunkABZYJK2DParam6.lineColor};
  }
  & .marker.cross {
    stroke: ${chunkABZYJK2DParam6.lineColor};
  }

  & svg {
    font-family: ${chunkABZYJK2DParam6.fontFamily};
    font-size: ${chunkABZYJK2DParam6.fontSize};
  }
   & p {
    margin: 0
   }

  ${chunkABZYJK2DValue165}

  ${chunkABZYJK2DParam5}
`
      );
    },
    "getStyles",
  ),
  chunkABZYJK2DValue87 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam127, chunkABZYJK2DParam128) => {
      chunkABZYJK2DParam128 !== undefined &&
        (chunkABZYJK2DValue85[chunkABZYJK2DParam127] = chunkABZYJK2DParam128);
    },
    "addStylesForDiagram",
  ),
  _chunkABZYJK2DO = {};
export const _chunkABZYJK2DS = {
  getRows: _t,
  sanitizeText: chunkABZYJK2DI,
  sanitizeTextOrArray: chunkABZYJK2DValue70,
  hasBreaks: chunkABZYJK2DValue71,
  splitBreaks: chunkABZYJK2DValue72,
  lineBreakRegex: chunkABZYJK2DK,
  removeScript: chunkABZYJK2DValue68,
  getUrl: chunkABZYJK2DE,
  evaluate: chunkABZYJK2DH,
  getMax: chunkABZYJK2DValue75,
  getMin: chunkABZYJK2DValue76,
};
export const chunkABZYJK2DQ = chunkABZYJK2DValue86;
export const _chunkABZYJK2DI = chunkAGHRB4JFN(
  async (chunkABZYJK2DParam27, chunkABZYJK2DParam28) => {
    let chunkABZYJK2DValue192 = document.createElement("div");
    chunkABZYJK2DValue192.innerHTML = await _chunkABZYJK2DN(
      chunkABZYJK2DParam27,
      chunkABZYJK2DParam28,
    );
    chunkABZYJK2DValue192.id = "katex-temp";
    chunkABZYJK2DValue192.style.visibility = "hidden";
    chunkABZYJK2DValue192.style.position = "absolute";
    chunkABZYJK2DValue192.style.top = "0";
    document
      .querySelector("body")
      ?.insertAdjacentElement("beforeend", chunkABZYJK2DValue192);
    let chunkABZYJK2DValue193 = {
      width: chunkABZYJK2DValue192.clientWidth,
      height: chunkABZYJK2DValue192.clientHeight,
    };
    return (chunkABZYJK2DValue192.remove(), chunkABZYJK2DValue193);
  },
  "calculateMathMLDimensions",
);
export const chunkABZYJK2DA = chunkAGHRB4JFN(function (chunkABZYJK2DParam35) {
  let chunkABZYJK2DValue198 = chunkABZYJK2DParam35.split(/(,)/),
    chunkABZYJK2DValue199 = [];
  for (
    let chunkABZYJK2DValue217 = 0;
    chunkABZYJK2DValue217 < chunkABZYJK2DValue198.length;
    chunkABZYJK2DValue217++
  ) {
    let chunkABZYJK2DValue222 = chunkABZYJK2DValue198[chunkABZYJK2DValue217];
    if (
      chunkABZYJK2DValue222 === "," &&
      chunkABZYJK2DValue217 > 0 &&
      chunkABZYJK2DValue217 + 1 < chunkABZYJK2DValue198.length
    ) {
      let chunkABZYJK2DValue251 =
          chunkABZYJK2DValue198[chunkABZYJK2DValue217 - 1],
        chunkABZYJK2DValue252 =
          chunkABZYJK2DValue198[chunkABZYJK2DValue217 + 1];
      chunkABZYJK2DValue78(chunkABZYJK2DValue251, chunkABZYJK2DValue252) &&
        ((chunkABZYJK2DValue222 =
          chunkABZYJK2DValue251 + "," + chunkABZYJK2DValue252),
        chunkABZYJK2DValue217++,
        chunkABZYJK2DValue199.pop());
    }
    chunkABZYJK2DValue199.push(chunkABZYJK2DValue79(chunkABZYJK2DValue222));
  }
  return chunkABZYJK2DValue199.join("");
}, "parseGenericTypes");
chunkAGHRB4JFT(_chunkABZYJK2DO, {
  clear: () => _chunkABZYJK2DA,
  getAccDescription: () => chunkABZYJK2DUnderscore,
  getAccTitle: () => _chunkABZYJK2DV,
  getDiagramTitle: () => _chunkABZYJK2DC,
  setAccDescription: () => chunkABZYJK2DZ,
  setAccTitle: () => chunkABZYJK2DB,
  setDiagramTitle: () => chunkABZYJK2DU,
});
var chunkABZYJK2DValue88 = "",
  chunkABZYJK2DValue89 = "",
  chunkABZYJK2DValue90 = "",
  chunkABZYJK2DValue91 = chunkAGHRB4JFN(
    (chunkABZYJK2DParam151) =>
      chunkABZYJK2DI(chunkABZYJK2DParam151, _chunkABZYJK2DY()),
    "sanitizeText",
  ),
  _chunkABZYJK2DA = chunkAGHRB4JFN(() => {
    chunkABZYJK2DValue88 = "";
    chunkABZYJK2DValue90 = "";
    chunkABZYJK2DValue89 = "";
  }, "clear"),
  chunkABZYJK2DB = chunkAGHRB4JFN((chunkABZYJK2DParam126) => {
    chunkABZYJK2DValue88 = chunkABZYJK2DValue91(chunkABZYJK2DParam126).replace(
      /^\s+/g,
      "",
    );
  }, "setAccTitle"),
  _chunkABZYJK2DV = chunkAGHRB4JFN(() => chunkABZYJK2DValue88, "getAccTitle"),
  chunkABZYJK2DZ = chunkAGHRB4JFN((chunkABZYJK2DParam102) => {
    chunkABZYJK2DValue90 = chunkABZYJK2DValue91(chunkABZYJK2DParam102).replace(
      /\n\s+/g,
      "\n",
    );
  }, "setAccDescription"),
  chunkABZYJK2DUnderscore = chunkAGHRB4JFN(
    () => chunkABZYJK2DValue90,
    "getAccDescription",
  ),
  chunkABZYJK2DU = chunkAGHRB4JFN((chunkABZYJK2DParam145) => {
    chunkABZYJK2DValue89 = chunkABZYJK2DValue91(chunkABZYJK2DParam145);
  }, "setDiagramTitle"),
  _chunkABZYJK2DC = chunkAGHRB4JFN(
    () => chunkABZYJK2DValue89,
    "getDiagramTitle",
  ),
  on = chunkAGHRB4JFR,
  chunkABZYJK2DValue92 = chunkAGHRB4JFI,
  _chunkABZYJK2DB = _chunkABZYJK2DY,
  _chunkABZYJK2DL = chunkAGHRB4JFN(
    (chunkABZYJK2DParam149) =>
      chunkABZYJK2DI(chunkABZYJK2DParam149, _chunkABZYJK2DB()),
    "sanitizeText",
  ),
  _chunkABZYJK2DK = _chunkABZYJK2DG,
  chunkABZYJK2DValue93 = chunkAGHRB4JFN(() => _chunkABZYJK2DO, "getCommonDb"),
  chunkABZYJK2DValue94 = {},
  _n = class extends Error {
    static {
      chunkAGHRB4JFN(this, "DiagramNotFoundError");
    }
    constructor(chunkABZYJK2DParam116) {
      super(`Diagram ${chunkABZYJK2DParam116} not found.`);
    }
  };
export const _chunkABZYJK2DX = chunkAGHRB4JFN((chunkABZYJK2DParam112) => {
  if (chunkABZYJK2DParam112 in chunkABZYJK2DValue94)
    return chunkABZYJK2DValue94[chunkABZYJK2DParam112];
  throw new _n(chunkABZYJK2DParam112);
}, "getDiagram");
export const _chunkABZYJK2DU = chunkABZYJK2DL;
export const _chunkABZYJK2DJ = chunkAGHRB4JFN(
  (chunkABZYJK2DParam54, chunkABZYJK2DParam55, chunkABZYJK2DParam56) => {
    chunkABZYJK2DValue94[chunkABZYJK2DParam54] &&
      on.warn(
        `Diagram with id ${chunkABZYJK2DParam54} already registered. Overwriting.`,
      );
    chunkABZYJK2DValue94[chunkABZYJK2DParam54] = chunkABZYJK2DParam55;
    chunkABZYJK2DParam56 &&
      chunkABZYJK2DValue40(chunkABZYJK2DParam54, chunkABZYJK2DParam56);
    chunkABZYJK2DValue87(chunkABZYJK2DParam54, chunkABZYJK2DParam55.styles);
    chunkABZYJK2DParam55.injectUtils?.(
      on,
      chunkABZYJK2DValue92,
      _chunkABZYJK2DB,
      _chunkABZYJK2DL,
      _chunkABZYJK2DK,
      chunkABZYJK2DValue93(),
      () => {},
    );
  },
  "registerDiagram",
);
export const _chunkABZYJK2DH = chunkABZYJK2DV;
export const _chunkABZYJK2DQ = _chunkABZYJK2DK;
export {
  chunkABZYJK2DB,
  _chunkABZYJK2DC,
  chunkABZYJK2DE,
  _chunkABZYJK2DF,
  _chunkABZYJK2DG,
  chunkABZYJK2DI,
  chunkABZYJK2DJ,
  _chunkABZYJK2DK,
  _chunkABZYJK2DL,
  _chunkABZYJK2DN,
  chunkABZYJK2DO,
  _chunkABZYJK2DT,
  chunkABZYJK2DU,
  chunkABZYJK2DV,
  chunkABZYJK2DX,
  chunkABZYJK2DUnderscore,
  _chunkABZYJK2DA,
  _chunkABZYJK2DB,
  chunkABZYJK2DC,
  chunkABZYJK2DD,
  chunkABZYJK2DG,
  chunkABZYJK2DH,
  chunkABZYJK2DK,
  chunkABZYJK2DL,
  chunkABZYJK2DM,
  _chunkABZYJK2DO,
  chunkABZYJK2DP,
  chunkABZYJK2DR,
  chunkABZYJK2DT,
  _chunkABZYJK2DV,
  _chunkABZYJK2DY,
  chunkABZYJK2DZ,
};
