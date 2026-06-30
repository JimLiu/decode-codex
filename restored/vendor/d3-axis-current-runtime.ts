// Restored from ref/webview/assets/src-CTe_6Jg1.js
// Current D3 axis/selection runtime restored from the Codex webview bundle.
import { once as rolldownRuntimeN } from "../runtime/commonjs-interop";
import {
  initD3ScaleSequentialRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyB,
  d3InterpolateString as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyGt,
  initD3ColorRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyJt,
  d3InterpolateNumber as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyKt,
  initD3ArrayScaleRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyMt,
  d3InterpolateTransformCss as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyUt,
  initD3ScaleTimeRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyV,
  initD3InterpolateRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyVt,
  d3InterpolateTransformSvg as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyWt,
  initD3FormatRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyXt,
  d3Color as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyYt,
  d3InterpolateTransformCssFactory as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyQt,
  initD3ColorConvertersRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyRt,
  initMermaidDiagramDefinitionRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyT,
  initD3TimeFormatRuntime as appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyTt,
} from "../runtime/current-app-initial/diagram-definition-runtime";
import {
  initD3ColorSchemesChunk as srcO,
  initD3HierarchyChunk as srcT,
} from "./d3-hierarchy";
function srcHelper1(srcParam331) {
  return srcParam331;
}
var srcValue1 = rolldownRuntimeN(() => {});
function srcHelper2(srcParam316) {
  return `translate(` + srcParam316 + `,0)`;
}
function srcHelper3(srcParam317) {
  return `translate(0,` + srcParam317 + `)`;
}
function srcHelper4(srcParam325) {
  return (srcParam333) => +srcParam325(srcParam333);
}
function srcHelper5(srcParam170, srcParam171) {
  return (
    (srcParam171 = Math.max(0, srcParam170.bandwidth() - srcParam171 * 2) / 2),
    srcParam170.round() && (srcParam171 = Math.round(srcParam171)),
    (srcParam332) => +srcParam170(srcParam332) + srcParam171
  );
}
function srcHelper6() {
  return !this.__axis;
}
function srcHelper7(srcParam1, srcParam2) {
  var srcValue125 = [],
    srcValue126 = null,
    srcValue127 = null,
    srcValue128 = 6,
    srcValue129 = 6,
    srcValue130 = 3,
    srcValue131 = typeof window < `u` && window.devicePixelRatio > 1 ? 0 : 0.5,
    srcValue132 = srcParam1 === srcValue2 || srcParam1 === srcValue5 ? -1 : 1,
    srcValue133 =
      srcParam1 === srcValue5 || srcParam1 === srcValue3 ? `x` : `y`,
    srcValue134 =
      srcParam1 === srcValue2 || srcParam1 === srcValue4
        ? srcHelper2
        : srcHelper3;
  function srcHelper184(srcParam3) {
    var srcValue135 =
        srcValue126 ??
        (srcParam2.ticks
          ? srcParam2.ticks.apply(srcParam2, srcValue125)
          : srcParam2.domain()),
      srcValue136 =
        srcValue127 ??
        (srcParam2.tickFormat
          ? srcParam2.tickFormat.apply(srcParam2, srcValue125)
          : srcHelper1),
      srcValue137 = Math.max(srcValue128, 0) + srcValue130,
      srcValue138 = srcParam2.range(),
      srcValue139 = +srcValue138[0] + srcValue131,
      srcValue140 = +srcValue138[srcValue138.length - 1] + srcValue131,
      srcValue141 = (srcParam2.bandwidth ? srcHelper5 : srcHelper4)(
        srcParam2.copy(),
        srcValue131,
      ),
      srcValue142 = srcParam3.selection ? srcParam3.selection() : srcParam3,
      srcValue143 = srcValue142.selectAll(`.domain`).data([null]),
      _srcI = srcValue142
        .selectAll(`.tick`)
        .data(srcValue135, srcParam2)
        .order(),
      _srcR = _srcI.exit(),
      srcValue144 = _srcI.enter().append(`g`).attr(`class`, `tick`),
      srcValue145 = _srcI.select(`line`),
      srcValue146 = _srcI.select(`text`);
    ((srcValue143 = srcValue143.merge(
      srcValue143
        .enter()
        .insert(`path`, `.tick`)
        .attr(`class`, `domain`)
        .attr(`stroke`, `currentColor`),
    )),
      (_srcI = _srcI.merge(srcValue144)),
      (srcValue145 = srcValue145.merge(
        srcValue144
          .append(`line`)
          .attr(`stroke`, `currentColor`)
          .attr(srcValue133 + `2`, srcValue132 * srcValue128),
      )),
      (srcValue146 = srcValue146.merge(
        srcValue144
          .append(`text`)
          .attr(`fill`, `currentColor`)
          .attr(srcValue133, srcValue132 * srcValue137)
          .attr(
            `dy`,
            srcParam1 === srcValue2
              ? `0em`
              : srcParam1 === srcValue4
                ? `0.71em`
                : `0.32em`,
          ),
      )),
      srcParam3 !== srcValue142 &&
        ((srcValue143 = srcValue143.transition(srcParam3)),
        (_srcI = _srcI.transition(srcParam3)),
        (srcValue145 = srcValue145.transition(srcParam3)),
        (srcValue146 = srcValue146.transition(srcParam3)),
        (_srcR = _srcR
          .transition(srcParam3)
          .attr(`opacity`, srcValue6)
          .attr(`transform`, function (srcParam174) {
            return isFinite((srcParam174 = srcValue141(srcParam174)))
              ? srcValue134(srcParam174 + srcValue131)
              : this.getAttribute(`transform`);
          })),
        srcValue144
          .attr(`opacity`, srcValue6)
          .attr(`transform`, function (srcParam180) {
            var srcValue507 = this.parentNode.__axis;
            return srcValue134(
              (srcValue507 && isFinite((srcValue507 = srcValue507(srcParam180)))
                ? srcValue507
                : srcValue141(srcParam180)) + srcValue131,
            );
          })),
      _srcR.remove(),
      srcValue143.attr(
        `d`,
        srcParam1 === srcValue5 || srcParam1 === srcValue3
          ? srcValue129
            ? `M` +
              srcValue132 * srcValue129 +
              `,` +
              srcValue139 +
              `H` +
              srcValue131 +
              `V` +
              srcValue140 +
              `H` +
              srcValue132 * srcValue129
            : `M` + srcValue131 + `,` + srcValue139 + `V` + srcValue140
          : srcValue129
            ? `M` +
              srcValue139 +
              `,` +
              srcValue132 * srcValue129 +
              `V` +
              srcValue131 +
              `H` +
              srcValue140 +
              `V` +
              srcValue132 * srcValue129
            : `M` + srcValue139 + `,` + srcValue131 + `H` + srcValue140,
      ),
      _srcI.attr(`opacity`, 1).attr(`transform`, function (srcParam320) {
        return srcValue134(srcValue141(srcParam320) + srcValue131);
      }),
      srcValue145.attr(srcValue133 + `2`, srcValue132 * srcValue128),
      srcValue146
        .attr(srcValue133, srcValue132 * srcValue137)
        .text(srcValue136),
      srcValue142
        .filter(srcHelper6)
        .attr(`fill`, `none`)
        .attr(`font-size`, 10)
        .attr(`font-family`, `sans-serif`)
        .attr(
          `text-anchor`,
          srcParam1 === srcValue3
            ? `start`
            : srcParam1 === srcValue5
              ? `end`
              : `middle`,
        ),
      srcValue142.each(function () {
        this.__axis = srcValue141;
      }));
  }
  return (
    (srcHelper184.scale = function (srcParam288) {
      return arguments.length
        ? ((srcParam2 = srcParam288), srcHelper184)
        : srcParam2;
    }),
    (srcHelper184.ticks = function () {
      return ((srcValue125 = Array.from(arguments)), srcHelper184);
    }),
    (srcHelper184.tickArguments = function (srcParam186) {
      return arguments.length
        ? ((srcValue125 = srcParam186 == null ? [] : Array.from(srcParam186)),
          srcHelper184)
        : srcValue125.slice();
    }),
    (srcHelper184.tickValues = function (srcParam181) {
      return arguments.length
        ? ((srcValue126 = srcParam181 == null ? null : Array.from(srcParam181)),
          srcHelper184)
        : srcValue126 && srcValue126.slice();
    }),
    (srcHelper184.tickFormat = function (srcParam289) {
      return arguments.length
        ? ((srcValue127 = srcParam289), srcHelper184)
        : srcValue127;
    }),
    (srcHelper184.tickSize = function (srcParam271) {
      return arguments.length
        ? ((srcValue128 = srcValue129 = +srcParam271), srcHelper184)
        : srcValue128;
    }),
    (srcHelper184.tickSizeInner = function (srcParam283) {
      return arguments.length
        ? ((srcValue128 = +srcParam283), srcHelper184)
        : srcValue128;
    }),
    (srcHelper184.tickSizeOuter = function (srcParam284) {
      return arguments.length
        ? ((srcValue129 = +srcParam284), srcHelper184)
        : srcValue129;
    }),
    (srcHelper184.tickPadding = function (srcParam285) {
      return arguments.length
        ? ((srcValue130 = +srcParam285), srcHelper184)
        : srcValue130;
    }),
    (srcHelper184.offset = function (srcParam286) {
      return arguments.length
        ? ((srcValue131 = +srcParam286), srcHelper184)
        : srcValue131;
    }),
    srcHelper184
  );
}
function srcI(srcParam329) {
  return srcHelper7(srcValue2, srcParam329);
}
function srcR(srcParam328) {
  return srcHelper7(srcValue4, srcParam328);
}
var srcValue2,
  srcValue3,
  srcValue4,
  srcValue5,
  srcValue6,
  srcValue7 = rolldownRuntimeN(() => {
    (srcValue1(),
      (srcValue2 = 1),
      (srcValue3 = 2),
      (srcValue4 = 3),
      (srcValue5 = 4),
      (srcValue6 = 1e-6));
  }),
  srcValue8 = rolldownRuntimeN(() => {
    srcValue7();
  });
function srcHelper8() {
  for (
    var srcValue423 = 0,
      srcValue424 = arguments.length,
      srcValue425 = {},
      srcValue426;
    srcValue423 < srcValue424;
    ++srcValue423
  ) {
    if (
      !(srcValue426 = arguments[srcValue423] + ``) ||
      srcValue426 in srcValue425 ||
      /[\s.]/.test(srcValue426)
    )
      throw Error(`illegal type: ` + srcValue426);
    srcValue425[srcValue426] = [];
  }
  return new srcHelper9(srcValue425);
}
function srcHelper9(srcParam330) {
  this._ = srcParam330;
}
function srcHelper10(srcParam56, srcParam57) {
  return srcParam56
    .trim()
    .split(/^|\s+/)
    .map(function (item) {
      var srcValue407 = ``,
        srcValue408 = item.indexOf(`.`);
      if (
        (srcValue408 >= 0 &&
          ((srcValue407 = item.slice(srcValue408 + 1)),
          (item = item.slice(0, srcValue408))),
        item && !srcParam57.hasOwnProperty(item))
      )
        throw Error(`unknown type: ` + item);
      return {
        type: item,
        name: srcValue407,
      };
    });
}
function srcHelper11(srcParam193, srcParam194) {
  for (
    var srcValue519 = 0, srcValue520 = srcParam193.length, srcValue521;
    srcValue519 < srcValue520;
    ++srcValue519
  )
    if ((srcValue521 = srcParam193[srcValue519]).name === srcParam194)
      return srcValue521.value;
}
function srcHelper12(srcParam96, srcParam97, srcParam98) {
  for (
    var srcValue415 = 0, srcValue416 = srcParam96.length;
    srcValue415 < srcValue416;
    ++srcValue415
  )
    if (srcParam96[srcValue415].name === srcParam97) {
      ((srcParam96[srcValue415] = srcValue9),
        (srcParam96 = srcParam96
          .slice(0, srcValue415)
          .concat(srcParam96.slice(srcValue415 + 1))));
      break;
    }
  return (
    srcParam98 != null &&
      srcParam96.push({
        name: srcParam97,
        value: srcParam98,
      }),
    srcParam96
  );
}
var srcValue9,
  srcValue10 = rolldownRuntimeN(() => {
    ((srcValue9 = {
      value: () => {},
    }),
      (srcHelper9.prototype = srcHelper8.prototype =
        {
          constructor: srcHelper9,
          on: function (srcParam10, srcParam11) {
            var srcValue172 = this._,
              srcValue173 = srcHelper10(srcParam10 + ``, srcValue172),
              srcValue174,
              srcValue175 = -1,
              srcValue176 = srcValue173.length;
            if (arguments.length < 2) {
              for (; ++srcValue175 < srcValue176; )
                if (
                  (srcValue174 = (srcParam10 = srcValue173[srcValue175])
                    .type) &&
                  (srcValue174 = srcHelper11(
                    srcValue172[srcValue174],
                    srcParam10.name,
                  ))
                )
                  return srcValue174;
              return;
            }
            if (srcParam11 != null && typeof srcParam11 != `function`)
              throw Error(`invalid callback: ` + srcParam11);
            for (; ++srcValue175 < srcValue176; )
              if ((srcValue174 = (srcParam10 = srcValue173[srcValue175]).type))
                srcValue172[srcValue174] = srcHelper12(
                  srcValue172[srcValue174],
                  srcParam10.name,
                  srcParam11,
                );
              else if (srcParam11 == null)
                for (srcValue174 in srcValue172)
                  srcValue172[srcValue174] = srcHelper12(
                    srcValue172[srcValue174],
                    srcParam10.name,
                    null,
                  );
            return this;
          },
          copy: function () {
            var srcValue496 = {},
              srcValue497 = this._;
            for (var srcValue498 in srcValue497)
              srcValue496[srcValue498] = srcValue497[srcValue498].slice();
            return new srcHelper9(srcValue496);
          },
          call: function (srcParam48, srcParam49) {
            if ((srcValue312 = arguments.length - 2) > 0)
              for (
                var srcValue310 = Array(srcValue312),
                  srcValue311 = 0,
                  srcValue312,
                  srcValue313;
                srcValue311 < srcValue312;
                ++srcValue311
              )
                srcValue310[srcValue311] = arguments[srcValue311 + 2];
            if (!this._.hasOwnProperty(srcParam48))
              throw Error(`unknown type: ` + srcParam48);
            for (
              srcValue313 = this._[srcParam48],
                srcValue311 = 0,
                srcValue312 = srcValue313.length;
              srcValue311 < srcValue312;
              ++srcValue311
            )
              srcValue313[srcValue311].value.apply(srcParam49, srcValue310);
          },
          apply: function (srcParam111, srcParam112, srcParam113) {
            if (!this._.hasOwnProperty(srcParam111))
              throw Error(`unknown type: ` + srcParam111);
            for (
              var srcValue436 = this._[srcParam111],
                srcValue437 = 0,
                srcValue438 = srcValue436.length;
              srcValue437 < srcValue438;
              ++srcValue437
            )
              srcValue436[srcValue437].value.apply(srcParam112, srcParam113);
          },
        }));
  }),
  srcValue11 = rolldownRuntimeN(() => {
    srcValue10();
  }),
  srcValue12,
  srcValue13,
  srcValue14 = rolldownRuntimeN(() => {
    ((srcValue12 = `http://www.w3.org/1999/xhtml`),
      (srcValue13 = {
        svg: `http://www.w3.org/2000/svg`,
        xhtml: srcValue12,
        xlink: `http://www.w3.org/1999/xlink`,
        xml: `http://www.w3.org/XML/1998/namespace`,
        xmlns: `http://www.w3.org/2000/xmlns/`,
      }));
  });
function srcHelper13(srcParam114) {
  var srcValue439 = (srcParam114 += ``),
    srcValue440 = srcValue439.indexOf(`:`);
  return (
    srcValue440 >= 0 &&
      (srcValue439 = srcParam114.slice(0, srcValue440)) !== `xmlns` &&
      (srcParam114 = srcParam114.slice(srcValue440 + 1)),
    srcValue13.hasOwnProperty(srcValue439)
      ? {
          space: srcValue13[srcValue439],
          local: srcParam114,
        }
      : srcParam114
  );
}
var srcValue15 = rolldownRuntimeN(() => {
  srcValue14();
});
function _e(srcParam80) {
  return function () {
    var srcValue409 = this.ownerDocument,
      srcValue410 = this.namespaceURI;
    return srcValue410 === `http://www.w3.org/1999/xhtml` &&
      srcValue409.documentElement.namespaceURI ===
        `http://www.w3.org/1999/xhtml`
      ? srcValue409.createElement(srcParam80)
      : srcValue409.createElementNS(srcValue410, srcParam80);
  };
}
function srcHelper14(srcParam201) {
  return function () {
    return this.ownerDocument.createElementNS(
      srcParam201.space,
      srcParam201.local,
    );
  };
}
function srcHelper15(srcParam295) {
  var srcValue545 = srcHelper13(srcParam295);
  return (srcValue545.local ? srcHelper14 : _e)(srcValue545);
}
var be = rolldownRuntimeN(() => {
  (srcValue15(), srcValue14());
});
function srcHelper16() {}
function srcHelper17(srcParam197) {
  return srcParam197 == null
    ? srcHelper16
    : function () {
        return this.querySelector(srcParam197);
      };
}
var srcValue16 = rolldownRuntimeN(() => {});
function srcHelper18(srcParam31) {
  typeof srcParam31 != `function` && (srcParam31 = srcHelper17(srcParam31));
  for (
    var srcValue273 = this._groups,
      srcValue274 = srcValue273.length,
      srcValue275 = Array(srcValue274),
      srcValue276 = 0;
    srcValue276 < srcValue274;
    ++srcValue276
  )
    for (
      var srcValue277 = srcValue273[srcValue276],
        srcValue278 = srcValue277.length,
        srcValue279 = (srcValue275[srcValue276] = Array(srcValue278)),
        srcValue280,
        srcValue281,
        srcValue282 = 0;
      srcValue282 < srcValue278;
      ++srcValue282
    )
      (srcValue280 = srcValue277[srcValue282]) &&
        (srcValue281 = srcParam31.call(
          srcValue280,
          srcValue280.__data__,
          srcValue282,
          srcValue277,
        )) &&
        (`__data__` in srcValue280 &&
          (srcValue281.__data__ = srcValue280.__data__),
        (srcValue279[srcValue282] = srcValue281));
  return new srcHelper107(srcValue275, this._parents);
}
var srcValue17 = rolldownRuntimeN(() => {
  (srcValue58(), srcValue16());
});
function srcHelper19(srcParam257) {
  return srcParam257 == null
    ? []
    : Array.isArray(srcParam257)
      ? srcParam257
      : Array.from(srcParam257);
}
var srcValue18 = rolldownRuntimeN(() => {});
function srcHelper20() {
  return [];
}
function srcHelper21(srcParam192) {
  return srcParam192 == null
    ? srcHelper20
    : function () {
        return this.querySelectorAll(srcParam192);
      };
}
var srcValue19 = rolldownRuntimeN(() => {});
function srcHelper22(srcParam246) {
  return function () {
    return srcHelper19(srcParam246.apply(this, arguments));
  };
}
function srcHelper23(srcParam76) {
  srcParam76 =
    typeof srcParam76 == `function`
      ? srcHelper22(srcParam76)
      : srcHelper21(srcParam76);
  for (
    var srcValue376 = this._groups,
      srcValue377 = srcValue376.length,
      srcValue378 = [],
      srcValue379 = [],
      srcValue380 = 0;
    srcValue380 < srcValue377;
    ++srcValue380
  )
    for (
      var srcValue381 = srcValue376[srcValue380],
        srcValue382 = srcValue381.length,
        srcValue383,
        srcValue384 = 0;
      srcValue384 < srcValue382;
      ++srcValue384
    )
      (srcValue383 = srcValue381[srcValue384]) &&
        (srcValue378.push(
          srcParam76.call(
            srcValue383,
            srcValue383.__data__,
            srcValue384,
            srcValue381,
          ),
        ),
        srcValue379.push(srcValue383));
  return new srcHelper107(srcValue378, srcValue379);
}
var srcValue20 = rolldownRuntimeN(() => {
  (srcValue58(), srcValue18(), srcValue19());
});
function srcHelper24(srcParam274) {
  return function () {
    return this.matches(srcParam274);
  };
}
function srcHelper25(srcParam280) {
  return function (srcParam324) {
    return srcParam324.matches(srcParam280);
  };
}
var srcValue21 = rolldownRuntimeN(() => {});
function srcHelper26(srcParam250) {
  return function () {
    return srcValue22.call(this.children, srcParam250);
  };
}
function srcHelper27() {
  return this.firstElementChild;
}
function srcHelper28(srcParam228) {
  return this.select(
    srcParam228 == null
      ? srcHelper27
      : srcHelper26(
          typeof srcParam228 == `function`
            ? srcParam228
            : srcHelper25(srcParam228),
        ),
  );
}
var srcValue22,
  srcValue23 = rolldownRuntimeN(() => {
    (srcValue21(), (srcValue22 = Array.prototype.find));
  });
function srcHelper29() {
  return Array.from(this.children);
}
function srcHelper30(srcParam251) {
  return function () {
    return srcValue24.call(this.children, srcParam251);
  };
}
function srcHelper31(srcParam204) {
  return this.selectAll(
    srcParam204 == null
      ? srcHelper29
      : srcHelper30(
          typeof srcParam204 == `function`
            ? srcParam204
            : srcHelper25(srcParam204),
        ),
  );
}
var srcValue24,
  srcValue25 = rolldownRuntimeN(() => {
    (srcValue21(), (srcValue24 = Array.prototype.filter));
  });
function srcHelper32(srcParam71) {
  typeof srcParam71 != `function` && (srcParam71 = srcHelper24(srcParam71));
  for (
    var srcValue349 = this._groups,
      srcValue350 = srcValue349.length,
      srcValue351 = Array(srcValue350),
      srcValue352 = 0;
    srcValue352 < srcValue350;
    ++srcValue352
  )
    for (
      var srcValue353 = srcValue349[srcValue352],
        srcValue354 = srcValue353.length,
        srcValue355 = (srcValue351[srcValue352] = []),
        srcValue356,
        srcValue357 = 0;
      srcValue357 < srcValue354;
      ++srcValue357
    )
      (srcValue356 = srcValue353[srcValue357]) &&
        srcParam71.call(
          srcValue356,
          srcValue356.__data__,
          srcValue357,
          srcValue353,
        ) &&
        srcValue355.push(srcValue356);
  return new srcHelper107(srcValue351, this._parents);
}
var srcValue26 = rolldownRuntimeN(() => {
  (srcValue58(), srcValue21());
});
function srcHelper33(srcParam323) {
  return Array(srcParam323.length);
}
var srcValue27 = rolldownRuntimeN(() => {});
function srcHelper34() {
  return new srcHelper107(
    this._enter || this._groups.map(srcHelper33),
    this._parents,
  );
}
function srcHelper35(srcParam136, srcParam137) {
  ((this.ownerDocument = srcParam136.ownerDocument),
    (this.namespaceURI = srcParam136.namespaceURI),
    (this._next = null),
    (this._parent = srcParam136),
    (this.__data__ = srcParam137));
}
var srcValue28 = rolldownRuntimeN(() => {
  (srcValue27(),
    srcValue58(),
    (srcHelper35.prototype = {
      constructor: srcHelper35,
      appendChild: function (srcParam260) {
        return this._parent.insertBefore(srcParam260, this._next);
      },
      insertBefore: function (srcParam276, srcParam277) {
        return this._parent.insertBefore(srcParam276, srcParam277);
      },
      querySelector: function (srcParam296) {
        return this._parent.querySelector(srcParam296);
      },
      querySelectorAll: function (srcParam287) {
        return this._parent.querySelectorAll(srcParam287);
      },
    }));
});
function srcHelper36(srcParam307) {
  return function () {
    return srcParam307;
  };
}
var $e = rolldownRuntimeN(() => {});
function srcHelper37(
  srcParam105,
  srcParam106,
  srcParam107,
  srcParam108,
  srcParam109,
  srcParam110,
) {
  for (
    var srcValue430 = 0,
      srcValue431,
      srcValue432 = srcParam106.length,
      srcValue433 = srcParam110.length;
    srcValue430 < srcValue433;
    ++srcValue430
  )
    (srcValue431 = srcParam106[srcValue430])
      ? ((srcValue431.__data__ = srcParam110[srcValue430]),
        (srcParam108[srcValue430] = srcValue431))
      : (srcParam107[srcValue430] = new srcHelper35(
          srcParam105,
          srcParam110[srcValue430],
        ));
  for (; srcValue430 < srcValue432; ++srcValue430)
    (srcValue431 = srcParam106[srcValue430]) &&
      (srcParam109[srcValue430] = srcValue431);
}
function srcHelper38(
  srcParam16,
  srcParam17,
  srcParam18,
  srcParam19,
  srcParam20,
  srcParam21,
  srcParam22,
) {
  var srcValue198,
    srcValue199,
    srcValue200 = new Map(),
    srcValue201 = srcParam17.length,
    srcValue202 = srcParam21.length,
    srcValue203 = Array(srcValue201),
    srcValue204;
  for (srcValue198 = 0; srcValue198 < srcValue201; ++srcValue198)
    (srcValue199 = srcParam17[srcValue198]) &&
      ((srcValue203[srcValue198] = srcValue204 =
        srcParam22.call(
          srcValue199,
          srcValue199.__data__,
          srcValue198,
          srcParam17,
        ) + ``),
      srcValue200.has(srcValue204)
        ? (srcParam20[srcValue198] = srcValue199)
        : srcValue200.set(srcValue204, srcValue199));
  for (srcValue198 = 0; srcValue198 < srcValue202; ++srcValue198)
    ((srcValue204 =
      srcParam22.call(
        srcParam16,
        srcParam21[srcValue198],
        srcValue198,
        srcParam21,
      ) + ``),
      (srcValue199 = srcValue200.get(srcValue204))
        ? ((srcParam19[srcValue198] = srcValue199),
          (srcValue199.__data__ = srcParam21[srcValue198]),
          srcValue200.delete(srcValue204))
        : (srcParam18[srcValue198] = new srcHelper35(
            srcParam16,
            srcParam21[srcValue198],
          )));
  for (srcValue198 = 0; srcValue198 < srcValue201; ++srcValue198)
    (srcValue199 = srcParam17[srcValue198]) &&
      srcValue200.get(srcValue203[srcValue198]) === srcValue199 &&
      (srcParam20[srcValue198] = srcValue199);
}
function srcHelper39(srcParam327) {
  return srcParam327.__data__;
}
function srcHelper40(srcParam8, srcParam9) {
  if (!arguments.length) return Array.from(this, srcHelper39);
  var srcValue153 = srcParam9 ? srcHelper38 : srcHelper37,
    srcValue154 = this._parents,
    srcValue155 = this._groups;
  typeof srcParam8 != `function` && (srcParam8 = srcHelper36(srcParam8));
  for (
    var srcValue156 = srcValue155.length,
      srcValue157 = Array(srcValue156),
      srcValue158 = Array(srcValue156),
      srcValue159 = Array(srcValue156),
      srcValue160 = 0;
    srcValue160 < srcValue156;
    ++srcValue160
  ) {
    var srcValue161 = srcValue154[srcValue160],
      srcValue162 = srcValue155[srcValue160],
      srcValue163 = srcValue162.length,
      srcValue164 = srcHelper41(
        srcParam8.call(
          srcValue161,
          srcValue161 && srcValue161.__data__,
          srcValue160,
          srcValue154,
        ),
      ),
      srcValue165 = srcValue164.length,
      srcValue166 = (srcValue158[srcValue160] = Array(srcValue165)),
      srcValue167 = (srcValue157[srcValue160] = Array(srcValue165));
    srcValue153(
      srcValue161,
      srcValue162,
      srcValue166,
      srcValue167,
      (srcValue159[srcValue160] = Array(srcValue163)),
      srcValue164,
      srcParam9,
    );
    for (
      var srcValue168 = 0, srcValue169 = 0, srcValue170, srcValue171;
      srcValue168 < srcValue165;
      ++srcValue168
    )
      if ((srcValue170 = srcValue166[srcValue168])) {
        for (
          srcValue168 >= srcValue169 && (srcValue169 = srcValue168 + 1);
          !(srcValue171 = srcValue167[srcValue169]) &&
          ++srcValue169 < srcValue165;

        );
        srcValue170._next = srcValue171 || null;
      }
  }
  return (
    (srcValue157 = new srcHelper107(srcValue157, srcValue154)),
    (srcValue157._enter = srcValue158),
    (srcValue157._exit = srcValue159),
    srcValue157
  );
}
function srcHelper41(srcParam249) {
  return typeof srcParam249 == `object` && `length` in srcParam249
    ? srcParam249
    : Array.from(srcParam249);
}
var at = rolldownRuntimeN(() => {
  (srcValue58(), srcValue28(), $e());
});
function srcHelper42() {
  return new srcHelper107(
    this._exit || this._groups.map(srcHelper33),
    this._parents,
  );
}
var srcValue29 = rolldownRuntimeN(() => {
  (srcValue27(), srcValue58());
});
function srcHelper43(srcParam60, srcParam61, srcParam62) {
  var srcValue338 = this.enter(),
    srcValue339 = this,
    srcValue340 = this.exit();
  return (
    typeof srcParam60 == `function`
      ? ((srcValue338 = srcParam60(srcValue338)),
        (srcValue338 &&= srcValue338.selection()))
      : (srcValue338 = srcValue338.append(srcParam60 + ``)),
    srcParam61 != null &&
      ((srcValue339 = srcParam61(srcValue339)),
      (srcValue339 &&= srcValue339.selection())),
    srcParam62 == null ? srcValue340.remove() : srcParam62(srcValue340),
    srcValue338 && srcValue339
      ? srcValue338.merge(srcValue339).order()
      : srcValue339
  );
}
var srcValue30 = rolldownRuntimeN(() => {});
function srcHelper44(srcParam25) {
  for (
    var srcValue246 = srcParam25.selection
        ? srcParam25.selection()
        : srcParam25,
      srcValue247 = this._groups,
      srcValue248 = srcValue246._groups,
      srcValue249 = srcValue247.length,
      srcValue250 = srcValue248.length,
      srcValue251 = Math.min(srcValue249, srcValue250),
      srcValue252 = Array(srcValue249),
      srcValue253 = 0;
    srcValue253 < srcValue251;
    ++srcValue253
  )
    for (
      var srcValue254 = srcValue247[srcValue253],
        srcValue255 = srcValue248[srcValue253],
        srcValue256 = srcValue254.length,
        srcValue257 = (srcValue252[srcValue253] = Array(srcValue256)),
        srcValue258,
        srcValue259 = 0;
      srcValue259 < srcValue256;
      ++srcValue259
    )
      (srcValue258 = srcValue254[srcValue259] || srcValue255[srcValue259]) &&
        (srcValue257[srcValue259] = srcValue258);
  for (; srcValue253 < srcValue249; ++srcValue253)
    srcValue252[srcValue253] = srcValue247[srcValue253];
  return new srcHelper107(srcValue252, this._parents);
}
var srcValue31 = rolldownRuntimeN(() => {
  srcValue58();
});
function srcHelper45() {
  for (
    var srcValue360 = this._groups,
      srcValue361 = -1,
      srcValue362 = srcValue360.length;
    ++srcValue361 < srcValue362;

  )
    for (
      var srcValue363 = srcValue360[srcValue361],
        srcValue364 = srcValue363.length - 1,
        srcValue365 = srcValue363[srcValue364],
        srcValue366;
      --srcValue364 >= 0;

    )
      (srcValue366 = srcValue363[srcValue364]) &&
        (srcValue365 &&
          srcValue366.compareDocumentPosition(srcValue365) ^ 4 &&
          srcValue365.parentNode.insertBefore(srcValue366, srcValue365),
        (srcValue365 = srcValue366));
  return this;
}
var srcValue32 = rolldownRuntimeN(() => {});
function srcHelper46(srcParam42) {
  srcParam42 ||= srcHelper47;
  function srcHelper189(srcParam261, srcParam262) {
    return srcParam261 && srcParam262
      ? srcParam42(srcParam261.__data__, srcParam262.__data__)
      : !srcParam261 - !srcParam262;
  }
  for (
    var srcValue289 = this._groups,
      srcValue290 = srcValue289.length,
      srcValue291 = Array(srcValue290),
      srcValue292 = 0;
    srcValue292 < srcValue290;
    ++srcValue292
  ) {
    for (
      var srcValue293 = srcValue289[srcValue292],
        srcValue294 = srcValue293.length,
        srcValue295 = (srcValue291[srcValue292] = Array(srcValue294)),
        srcValue296,
        srcValue297 = 0;
      srcValue297 < srcValue294;
      ++srcValue297
    )
      (srcValue296 = srcValue293[srcValue297]) &&
        (srcValue295[srcValue297] = srcValue296);
    srcValue295.sort(srcHelper189);
  }
  return new srcHelper107(srcValue291, this._parents).order();
}
function srcHelper47(srcParam278, srcParam279) {
  return srcParam278 < srcParam279
    ? -1
    : srcParam278 > srcParam279
      ? 1
      : srcParam278 >= srcParam279
        ? 0
        : NaN;
}
var srcValue33 = rolldownRuntimeN(() => {
  srcValue58();
});
function _t() {
  var srcValue529 = arguments[0];
  return ((arguments[0] = this), srcValue529.apply(null, arguments), this);
}
var srcValue34 = rolldownRuntimeN(() => {});
function srcHelper48() {
  return Array.from(this);
}
var srcValue35 = rolldownRuntimeN(() => {});
function srcHelper49() {
  for (
    var srcValue448 = this._groups,
      srcValue449 = 0,
      srcValue450 = srcValue448.length;
    srcValue449 < srcValue450;
    ++srcValue449
  )
    for (
      var srcValue451 = srcValue448[srcValue449],
        srcValue452 = 0,
        srcValue453 = srcValue451.length;
      srcValue452 < srcValue453;
      ++srcValue452
    ) {
      var srcValue454 = srcValue451[srcValue452];
      if (srcValue454) return srcValue454;
    }
  return null;
}
var srcValue36 = rolldownRuntimeN(() => {});
function srcHelper50() {
  let srcValue544 = 0;
  for (let srcValue546 of this) ++srcValue544;
  return srcValue544;
}
var srcValue37 = rolldownRuntimeN(() => {});
function srcHelper51() {
  return !this.node();
}
var srcValue38 = rolldownRuntimeN(() => {});
function srcHelper52(srcParam115) {
  for (
    var srcValue441 = this._groups,
      srcValue442 = 0,
      srcValue443 = srcValue441.length;
    srcValue442 < srcValue443;
    ++srcValue442
  )
    for (
      var srcValue444 = srcValue441[srcValue442],
        srcValue445 = 0,
        srcValue446 = srcValue444.length,
        srcValue447;
      srcValue445 < srcValue446;
      ++srcValue445
    )
      (srcValue447 = srcValue444[srcValue445]) &&
        srcParam115.call(
          srcValue447,
          srcValue447.__data__,
          srcValue445,
          srcValue444,
        );
  return this;
}
var srcValue39 = rolldownRuntimeN(() => {});
function srcHelper53(srcParam272) {
  return function () {
    this.removeAttribute(srcParam272);
  };
}
function srcHelper54(srcParam234) {
  return function () {
    this.removeAttributeNS(srcParam234.space, srcParam234.local);
  };
}
function srcHelper55(srcParam263, srcParam264) {
  return function () {
    this.setAttribute(srcParam263, srcParam264);
  };
}
function srcHelper56(srcParam229, srcParam230) {
  return function () {
    this.setAttributeNS(srcParam229.space, srcParam229.local, srcParam230);
  };
}
function srcHelper57(srcParam160, srcParam161) {
  return function () {
    var srcValue513 = srcParam161.apply(this, arguments);
    srcValue513 == null
      ? this.removeAttribute(srcParam160)
      : this.setAttribute(srcParam160, srcValue513);
  };
}
function srcHelper58(srcParam116, srcParam117) {
  return function () {
    var srcValue492 = srcParam117.apply(this, arguments);
    srcValue492 == null
      ? this.removeAttributeNS(srcParam116.space, srcParam116.local)
      : this.setAttributeNS(srcParam116.space, srcParam116.local, srcValue492);
  };
}
function srcHelper59(srcParam40, srcParam41) {
  var srcValue287 = srcHelper13(srcParam40);
  if (arguments.length < 2) {
    var srcValue288 = this.node();
    return srcValue287.local
      ? srcValue288.getAttributeNS(srcValue287.space, srcValue287.local)
      : srcValue288.getAttribute(srcValue287);
  }
  return this.each(
    (srcParam41 == null
      ? srcValue287.local
        ? srcHelper54
        : srcHelper53
      : typeof srcParam41 == `function`
        ? srcValue287.local
          ? srcHelper58
          : srcHelper57
        : srcValue287.local
          ? srcHelper56
          : srcHelper55)(srcValue287, srcParam41),
  );
}
var srcValue40 = rolldownRuntimeN(() => {
  srcValue15();
});
function srcHelper60(srcParam179) {
  return (
    (srcParam179.ownerDocument && srcParam179.ownerDocument.defaultView) ||
    (srcParam179.document && srcParam179) ||
    srcParam179.defaultView
  );
}
var srcValue41 = rolldownRuntimeN(() => {});
function srcHelper61(srcParam258) {
  return function () {
    this.style.removeProperty(srcParam258);
  };
}
function srcHelper62(srcParam240, srcParam241, srcParam242) {
  return function () {
    this.style.setProperty(srcParam240, srcParam241, srcParam242);
  };
}
function srcHelper63(srcParam149, srcParam150, srcParam151) {
  return function () {
    var srcValue502 = srcParam150.apply(this, arguments);
    srcValue502 == null
      ? this.style.removeProperty(srcParam149)
      : this.style.setProperty(srcParam149, srcValue502, srcParam151);
  };
}
function srcHelper64(srcParam138, srcParam139, srcParam140) {
  return arguments.length > 1
    ? this.each(
        (srcParam139 == null
          ? srcHelper61
          : typeof srcParam139 == `function`
            ? srcHelper63
            : srcHelper62)(srcParam138, srcParam139, srcParam140 ?? ``),
      )
    : srcHelper65(this.node(), srcParam138);
}
function srcHelper65(srcParam184, srcParam185) {
  return (
    srcParam184.style.getPropertyValue(srcParam185) ||
    srcHelper60(srcParam184)
      .getComputedStyle(srcParam184, null)
      .getPropertyValue(srcParam185)
  );
}
var srcValue42 = rolldownRuntimeN(() => {
  srcValue41();
});
function srcHelper66(srcParam297) {
  return function () {
    delete this[srcParam297];
  };
}
function srcHelper67(srcParam298, srcParam299) {
  return function () {
    this[srcParam298] = srcParam299;
  };
}
function srcHelper68(srcParam175, srcParam176) {
  return function () {
    var srcValue532 = srcParam176.apply(this, arguments);
    srcValue532 == null
      ? delete this[srcParam175]
      : (this[srcParam175] = srcValue532);
  };
}
function srcHelper69(srcParam165, srcParam166) {
  return arguments.length > 1
    ? this.each(
        (srcParam166 == null
          ? srcHelper66
          : typeof srcParam166 == `function`
            ? srcHelper68
            : srcHelper67)(srcParam165, srcParam166),
      )
    : this.node()[srcParam165];
}
var srcValue43 = rolldownRuntimeN(() => {});
function srcHelper70(srcParam318) {
  return srcParam318.trim().split(/^|\s+/);
}
function srcHelper71(srcParam314) {
  return srcParam314.classList || new srcHelper72(srcParam314);
}
function srcHelper72(srcParam238) {
  ((this._node = srcParam238),
    (this._names = srcHelper70(srcParam238.getAttribute(`class`) || ``)));
}
function srcHelper73(srcParam243, srcParam244) {
  for (
    var srcValue537 = srcHelper71(srcParam243),
      srcValue538 = -1,
      srcValue539 = srcParam244.length;
    ++srcValue538 < srcValue539;

  )
    srcValue537.add(srcParam244[srcValue538]);
}
function $t(srcParam235, srcParam236) {
  for (
    var srcValue534 = srcHelper71(srcParam235),
      srcValue535 = -1,
      srcValue536 = srcParam236.length;
    ++srcValue535 < srcValue536;

  )
    srcValue534.remove(srcParam236[srcValue535]);
}
function srcHelper74(srcParam302) {
  return function () {
    srcHelper73(this, srcParam302);
  };
}
function srcHelper75(srcParam303) {
  return function () {
    $t(this, srcParam303);
  };
}
function srcHelper76(srcParam219, srcParam220) {
  return function () {
    (srcParam220.apply(this, arguments) ? srcHelper73 : $t)(this, srcParam219);
  };
}
function srcHelper77(srcParam87, srcParam88) {
  var srcValue397 = srcHelper70(srcParam87 + ``);
  if (arguments.length < 2) {
    for (
      var srcValue398 = srcHelper71(this.node()),
        srcValue399 = -1,
        srcValue400 = srcValue397.length;
      ++srcValue399 < srcValue400;

    )
      if (!srcValue398.contains(srcValue397[srcValue399])) return !1;
    return !0;
  }
  return this.each(
    (typeof srcParam88 == `function`
      ? srcHelper76
      : srcParam88
        ? srcHelper74
        : srcHelper75)(srcValue397, srcParam88),
  );
}
var srcValue44 = rolldownRuntimeN(() => {
  srcHelper72.prototype = {
    add: function (srcParam163) {
      this._names.indexOf(srcParam163) < 0 &&
        (this._names.push(srcParam163),
        this._node.setAttribute(`class`, this._names.join(` `)));
    },
    remove: function (srcParam145) {
      var srcValue477 = this._names.indexOf(srcParam145);
      srcValue477 >= 0 &&
        (this._names.splice(srcValue477, 1),
        this._node.setAttribute(`class`, this._names.join(` `)));
    },
    contains: function (srcParam304) {
      return this._names.indexOf(srcParam304) >= 0;
    },
  };
});
function on() {
  this.textContent = ``;
}
function srcHelper78(srcParam281) {
  return function () {
    this.textContent = srcParam281;
  };
}
function srcHelper79(srcParam218) {
  return function () {
    this.textContent = srcParam218.apply(this, arguments) ?? ``;
  };
}
function srcHelper80(srcParam169) {
  return arguments.length
    ? this.each(
        srcParam169 == null
          ? on
          : (typeof srcParam169 == `function` ? srcHelper79 : srcHelper78)(
              srcParam169,
            ),
      )
    : this.node().textContent;
}
var srcValue45 = rolldownRuntimeN(() => {});
function srcHelper81() {
  this.innerHTML = ``;
}
function srcHelper82(srcParam290) {
  return function () {
    this.innerHTML = srcParam290;
  };
}
function srcHelper83(srcParam224) {
  return function () {
    this.innerHTML = srcParam224.apply(this, arguments) ?? ``;
  };
}
function srcHelper84(srcParam172) {
  return arguments.length
    ? this.each(
        srcParam172 == null
          ? srcHelper81
          : (typeof srcParam172 == `function` ? srcHelper83 : srcHelper82)(
              srcParam172,
            ),
      )
    : this.node().innerHTML;
}
var srcValue46 = rolldownRuntimeN(() => {});
function srcHelper85() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _n() {
  return this.each(srcHelper85);
}
var srcValue47 = rolldownRuntimeN(() => {});
function srcHelper86() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function srcHelper87() {
  return this.each(srcHelper86);
}
var srcValue48 = rolldownRuntimeN(() => {});
function srcHelper88(srcParam154) {
  var srcValue493 =
    typeof srcParam154 == `function` ? srcParam154 : srcHelper15(srcParam154);
  return this.select(function () {
    return this.appendChild(srcValue493.apply(this, arguments));
  });
}
var srcValue49 = rolldownRuntimeN(() => {
  be();
});
function srcHelper89() {
  return null;
}
function srcHelper90(srcParam85, srcParam86) {
  var srcValue395 =
      typeof srcParam85 == `function` ? srcParam85 : srcHelper15(srcParam85),
    srcValue396 =
      srcParam86 == null
        ? srcHelper89
        : typeof srcParam86 == `function`
          ? srcParam86
          : srcHelper17(srcParam86);
  return this.select(function () {
    return this.insertBefore(
      srcValue395.apply(this, arguments),
      srcValue396.apply(this, arguments) || null,
    );
  });
}
var srcValue50 = rolldownRuntimeN(() => {
  (be(), srcValue16());
});
function srcHelper91() {
  var srcValue543 = this.parentNode;
  srcValue543 && srcValue543.removeChild(this);
}
function srcHelper92() {
  return this.each(srcHelper91);
}
var srcValue51 = rolldownRuntimeN(() => {});
function srcHelper93() {
  var srcValue509 = this.cloneNode(!1),
    srcValue510 = this.parentNode;
  return srcValue510
    ? srcValue510.insertBefore(srcValue509, this.nextSibling)
    : srcValue509;
}
function srcHelper94() {
  var srcValue511 = this.cloneNode(!0),
    srcValue512 = this.parentNode;
  return srcValue512
    ? srcValue512.insertBefore(srcValue511, this.nextSibling)
    : srcValue511;
}
function srcHelper95(srcParam315) {
  return this.select(srcParam315 ? srcHelper94 : srcHelper93);
}
var srcValue52 = rolldownRuntimeN(() => {});
function srcHelper96(srcParam225) {
  return arguments.length
    ? this.property(`__data__`, srcParam225)
    : this.node().__data__;
}
var srcValue53 = rolldownRuntimeN(() => {});
function srcHelper97(srcParam253) {
  return function (srcParam313) {
    srcParam253.call(this, srcParam313, this.__data__);
  };
}
function srcHelper98(srcParam94) {
  return srcParam94
    .trim()
    .split(/^|\s+/)
    .map(function (item) {
      var srcValue465 = ``,
        srcValue466 = item.indexOf(`.`);
      return (
        srcValue466 >= 0 &&
          ((srcValue465 = item.slice(srcValue466 + 1)),
          (item = item.slice(0, srcValue466))),
        {
          type: item,
          name: srcValue465,
        }
      );
    });
}
function srcHelper99(srcParam46) {
  return function () {
    var srcValue318 = this.__on;
    if (srcValue318) {
      for (
        var srcValue319 = 0,
          srcValue320 = -1,
          srcValue321 = srcValue318.length,
          srcValue322;
        srcValue319 < srcValue321;
        ++srcValue319
      )
        ((srcValue322 = srcValue318[srcValue319]),
          (!srcParam46.type || srcValue322.type === srcParam46.type) &&
          srcValue322.name === srcParam46.name
            ? this.removeEventListener(
                srcValue322.type,
                srcValue322.listener,
                srcValue322.options,
              )
            : (srcValue318[++srcValue320] = srcValue322));
      ++srcValue320 ? (srcValue318.length = srcValue320) : delete this.__on;
    }
  };
}
function srcHelper100(srcParam12, srcParam13, srcParam14) {
  return function () {
    var srcValue177 = this.__on,
      srcValue178,
      srcValue179 = srcHelper97(srcParam13);
    if (srcValue177) {
      for (
        var srcValue180 = 0, srcValue181 = srcValue177.length;
        srcValue180 < srcValue181;
        ++srcValue180
      )
        if (
          (srcValue178 = srcValue177[srcValue180]).type === srcParam12.type &&
          srcValue178.name === srcParam12.name
        ) {
          (this.removeEventListener(
            srcValue178.type,
            srcValue178.listener,
            srcValue178.options,
          ),
            this.addEventListener(
              srcValue178.type,
              (srcValue178.listener = srcValue179),
              (srcValue178.options = srcParam14),
            ),
            (srcValue178.value = srcParam13));
          return;
        }
    }
    (this.addEventListener(srcParam12.type, srcValue179, srcParam14),
      (srcValue178 = {
        type: srcParam12.type,
        name: srcParam12.name,
        value: srcParam13,
        listener: srcValue179,
        options: srcParam14,
      }),
      srcValue177
        ? srcValue177.push(srcValue178)
        : (this.__on = [srcValue178]));
  };
}
function srcHelper101(srcParam28, srcParam29, srcParam30) {
  var srcValue265 = srcHelper98(srcParam28 + ``),
    srcValue266,
    srcValue267 = srcValue265.length,
    srcValue268;
  if (arguments.length < 2) {
    var srcValue269 = this.node().__on;
    if (srcValue269) {
      for (
        var srcValue270 = 0, srcValue271 = srcValue269.length, srcValue272;
        srcValue270 < srcValue271;
        ++srcValue270
      )
        for (
          srcValue266 = 0, srcValue272 = srcValue269[srcValue270];
          srcValue266 < srcValue267;
          ++srcValue266
        )
          if (
            (srcValue268 = srcValue265[srcValue266]).type ===
              srcValue272.type &&
            srcValue268.name === srcValue272.name
          )
            return srcValue272.value;
    }
    return;
  }
  for (
    srcValue269 = srcParam29 ? srcHelper100 : srcHelper99, srcValue266 = 0;
    srcValue266 < srcValue267;
    ++srcValue266
  )
    this.each(srcValue269(srcValue265[srcValue266], srcParam29, srcParam30));
  return this;
}
var srcValue54 = rolldownRuntimeN(() => {});
function srcHelper102(srcParam72, srcParam73, event) {
  var srcValue358 = srcHelper60(srcParam72),
    srcValue359 = srcValue358.CustomEvent;
  (typeof srcValue359 == `function`
    ? (srcValue359 = new srcValue359(srcParam73, event))
    : ((srcValue359 = srcValue358.document.createEvent(`Event`)),
      event
        ? (srcValue359.initEvent(srcParam73, event.bubbles, event.cancelable),
          (srcValue359.detail = event.detail))
        : srcValue359.initEvent(srcParam73, !1, !1)),
    srcParam72.dispatchEvent(srcValue359));
}
function srcHelper103(srcParam269, srcParam270) {
  return function () {
    return srcHelper102(this, srcParam269, srcParam270);
  };
}
function srcHelper104(srcParam226, srcParam227) {
  return function () {
    return srcHelper102(this, srcParam226, srcParam227.apply(this, arguments));
  };
}
function srcHelper105(srcParam254, srcParam255) {
  return this.each(
    (typeof srcParam255 == `function` ? srcHelper104 : srcHelper103)(
      srcParam254,
      srcParam255,
    ),
  );
}
var srcValue55 = rolldownRuntimeN(() => {
  srcValue41();
});
function* srcHelper106() {
  for (
    var srcValue483 = this._groups,
      srcValue484 = 0,
      srcValue485 = srcValue483.length;
    srcValue484 < srcValue485;
    ++srcValue484
  )
    for (
      var srcValue486 = srcValue483[srcValue484],
        srcValue487 = 0,
        srcValue488 = srcValue486.length,
        srcValue489;
      srcValue487 < srcValue488;
      ++srcValue487
    )
      (srcValue489 = srcValue486[srcValue487]) && (yield srcValue489);
}
var srcValue56 = rolldownRuntimeN(() => {});
function srcHelper107(srcParam300, srcParam301) {
  ((this._groups = srcParam300), (this._parents = srcParam301));
}
function srcHelper108() {
  return new srcHelper107([[document.documentElement]], srcValue57);
}
function srcHelper109() {
  return this;
}
var srcValue57,
  srcValue58 = rolldownRuntimeN(() => {
    (srcValue17(),
      srcValue20(),
      srcValue23(),
      srcValue25(),
      srcValue26(),
      at(),
      srcValue28(),
      srcValue29(),
      srcValue30(),
      srcValue31(),
      srcValue32(),
      srcValue33(),
      srcValue34(),
      srcValue35(),
      srcValue36(),
      srcValue37(),
      srcValue38(),
      srcValue39(),
      srcValue40(),
      srcValue42(),
      srcValue43(),
      srcValue44(),
      srcValue45(),
      srcValue46(),
      srcValue47(),
      srcValue48(),
      srcValue49(),
      srcValue50(),
      srcValue51(),
      srcValue52(),
      srcValue53(),
      srcValue54(),
      srcValue55(),
      srcValue56(),
      (srcValue57 = [null]),
      (srcHelper107.prototype = srcHelper108.prototype =
        {
          constructor: srcHelper107,
          select: srcHelper18,
          selectAll: srcHelper23,
          selectChild: srcHelper28,
          selectChildren: srcHelper31,
          filter: srcHelper32,
          data: srcHelper40,
          enter: srcHelper34,
          exit: srcHelper42,
          join: srcHelper43,
          merge: srcHelper44,
          selection: srcHelper109,
          order: srcHelper45,
          sort: srcHelper46,
          call: _t,
          nodes: srcHelper48,
          node: srcHelper49,
          size: srcHelper50,
          empty: srcHelper51,
          each: srcHelper52,
          attr: srcHelper59,
          style: srcHelper64,
          property: srcHelper69,
          classed: srcHelper77,
          text: srcHelper80,
          html: srcHelper84,
          raise: _n,
          lower: srcHelper87,
          append: srcHelper88,
          insert: srcHelper90,
          remove: srcHelper92,
          clone: srcHelper95,
          datum: srcHelper96,
          on: srcHelper101,
          dispatch: srcHelper105,
          [Symbol.iterator]: srcHelper106,
        }));
  });
function srcN(srcParam173) {
  return typeof srcParam173 == `string`
    ? new srcHelper107(
        [[document.querySelector(srcParam173)]],
        [document.documentElement],
      )
    : new srcHelper107([[srcParam173]], srcValue57);
}
var srcValue59 = rolldownRuntimeN(() => {
    srcValue58();
  }),
  srcValue60 = rolldownRuntimeN(() => {
    (srcValue21(),
      srcValue15(),
      srcValue59(),
      srcValue58(),
      srcValue16(),
      srcValue19(),
      srcValue42());
  }),
  $n = rolldownRuntimeN(() => {});
function srcHelper110() {
  return (srcValue68 ||=
    (srcValue71(srcHelper111), srcValue70.now() + srcValue69));
}
function srcHelper111() {
  srcValue68 = 0;
}
function srcHelper112() {
  this._call = this._time = this._next = null;
}
function srcHelper113(srcParam265, srcParam266, srcParam267) {
  var srcValue542 = new srcHelper112();
  return (
    srcValue542.restart(srcParam265, srcParam266, srcParam267),
    srcValue542
  );
}
function srcHelper114() {
  (srcHelper110(), ++srcValue61);
  for (var srcValue500 = srcValue65, srcValue501; srcValue500; )
    ((srcValue501 = srcValue68 - srcValue500._time) >= 0 &&
      srcValue500._call.call(void 0, srcValue501),
      (srcValue500 = srcValue500._next));
  --srcValue61;
}
function srcHelper115() {
  ((srcValue68 = (srcValue67 = srcValue70.now()) + srcValue69),
    (srcValue61 = srcValue62 = 0));
  try {
    srcHelper114();
  } finally {
    ((srcValue61 = 0), srcHelper116(), (srcValue68 = 0));
  }
}
function or() {
  var srcValue540 = srcValue70.now(),
    srcValue541 = srcValue540 - srcValue67;
  srcValue541 > srcValue64 &&
    ((srcValue69 -= srcValue541), (srcValue67 = srcValue540));
}
function srcHelper116() {
  for (
    var srcValue417, srcValue418 = srcValue65, srcValue419, srcValue420 = 1 / 0;
    srcValue418;

  )
    srcValue418._call
      ? (srcValue420 > srcValue418._time && (srcValue420 = srcValue418._time),
        (srcValue417 = srcValue418),
        (srcValue418 = srcValue418._next))
      : ((srcValue419 = srcValue418._next),
        (srcValue418._next = null),
        (srcValue418 = srcValue417
          ? (srcValue417._next = srcValue419)
          : (srcValue65 = srcValue419)));
  ((srcValue66 = srcValue417), srcHelper117(srcValue420));
}
function srcHelper117(srcParam95) {
  srcValue61 ||
    ((srcValue62 &&= clearTimeout(srcValue62)),
    srcParam95 - srcValue68 > 24
      ? (srcParam95 < 1 / 0 &&
          (srcValue62 = setTimeout(
            srcHelper115,
            srcParam95 - srcValue70.now() - srcValue69,
          )),
        (srcValue63 &&= clearInterval(srcValue63)))
      : ((srcValue63 ||=
          ((srcValue67 = srcValue70.now()), setInterval(or, srcValue64))),
        (srcValue61 = 1),
        srcValue71(srcHelper115)));
}
var srcValue61,
  srcValue62,
  srcValue63,
  srcValue64,
  srcValue65,
  srcValue66,
  srcValue67,
  srcValue68,
  srcValue69,
  srcValue70,
  srcValue71,
  srcValue72 = rolldownRuntimeN(() => {
    ((srcValue61 = 0),
      (srcValue62 = 0),
      (srcValue63 = 0),
      (srcValue64 = 1e3),
      (srcValue67 = 0),
      (srcValue68 = 0),
      (srcValue69 = 0),
      (srcValue70 =
        typeof performance == `object` && performance.now ? performance : Date),
      (srcValue71 =
        typeof window == `object` && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (srcParam305) {
              setTimeout(srcParam305, 17);
            }),
      (srcHelper112.prototype = srcHelper113.prototype =
        {
          constructor: srcHelper112,
          restart: function (srcParam32, srcParam33, srcParam34) {
            if (typeof srcParam32 != `function`)
              throw TypeError(`callback is not a function`);
            ((srcParam34 =
              (srcParam34 == null ? srcHelper110() : +srcParam34) +
              (srcParam33 == null ? 0 : +srcParam33)),
              !this._next &&
                srcValue66 !== this &&
                (srcValue66 ? (srcValue66._next = this) : (srcValue65 = this),
                (srcValue66 = this)),
              (this._call = srcParam32),
              (this._time = srcParam34),
              srcHelper117());
          },
          stop: function () {
            this._call &&
              ((this._call = null), (this._time = 1 / 0), srcHelper117());
          },
        }));
  });
function srcHelper118(srcParam125, srcParam126, srcParam127) {
  var srcValue464 = new srcHelper112();
  return (
    (srcParam126 = srcParam126 == null ? 0 : +srcParam126),
    srcValue464.restart(
      (srcParam321) => {
        (srcValue464.stop(), srcParam125(srcParam321 + srcParam126));
      },
      srcParam126,
      srcParam127,
    ),
    srcValue464
  );
}
var srcValue73 = rolldownRuntimeN(() => {
    srcValue72();
  }),
  srcValue74 = rolldownRuntimeN(() => {
    (srcValue72(), srcValue73());
  });
function srcHelper119(
  srcParam63,
  srcParam64,
  srcParam65,
  srcParam66,
  srcParam67,
  srcParam68,
) {
  var srcValue341 = srcParam63.__transition;
  if (!srcValue341) srcParam63.__transition = {};
  else if (srcParam65 in srcValue341) return;
  _r(srcParam63, srcParam65, {
    name: srcParam64,
    index: srcParam66,
    group: srcParam67,
    on: srcValue75,
    tween: srcValue76,
    time: srcParam68.time,
    delay: srcParam68.delay,
    duration: srcParam68.duration,
    ease: srcParam68.ease,
    timer: null,
    state: 0,
  });
}
function srcHelper120(srcParam195, srcParam196) {
  var srcValue522 = srcHelper122(srcParam195, srcParam196);
  if (srcValue522.state > 0) throw Error(`too late; already scheduled`);
  return srcValue522;
}
function srcHelper121(srcParam198, srcParam199) {
  var srcValue525 = srcHelper122(srcParam198, srcParam199);
  if (srcValue525.state > 3) throw Error(`too late; already running`);
  return srcValue525;
}
function srcHelper122(srcParam188, srcParam189) {
  var srcValue514 = srcParam188.__transition;
  if (!srcValue514 || !(srcValue514 = srcValue514[srcParam189]))
    throw Error(`transition not found`);
  return srcValue514;
}
function _r(srcParam4, srcParam5, srcParam6) {
  var srcValue147 = srcParam4.__transition,
    srcValue148;
  ((srcValue147[srcParam5] = srcParam6),
    (srcParam6.timer = srcHelper113(srcHelper185, 0, srcParam6.time)));
  function srcHelper185(srcParam187) {
    ((srcParam6.state = 1),
      srcParam6.timer.restart(srcHelper186, srcParam6.delay, srcParam6.time),
      srcParam6.delay <= srcParam187 &&
        srcHelper186(srcParam187 - srcParam6.delay));
  }
  function srcHelper186(srcParam7) {
    var srcValue149, srcValue150, srcValue151, srcValue152;
    if (srcParam6.state !== 1) return srcHelper188();
    for (srcValue149 in srcValue147)
      if (
        ((srcValue152 = srcValue147[srcValue149]),
        srcValue152.name === srcParam6.name)
      ) {
        if (srcValue152.state === 3) return srcHelper118(srcHelper186);
        srcValue152.state === 4
          ? ((srcValue152.state = 6),
            srcValue152.timer.stop(),
            srcValue152.on.call(
              `interrupt`,
              srcParam4,
              srcParam4.__data__,
              srcValue152.index,
              srcValue152.group,
            ),
            delete srcValue147[srcValue149])
          : +srcValue149 < srcParam5 &&
            ((srcValue152.state = 6),
            srcValue152.timer.stop(),
            srcValue152.on.call(
              `cancel`,
              srcParam4,
              srcParam4.__data__,
              srcValue152.index,
              srcValue152.group,
            ),
            delete srcValue147[srcValue149]);
      }
    if (
      (srcHelper118(function () {
        srcParam6.state === 3 &&
          ((srcParam6.state = 4),
          srcParam6.timer.restart(
            srcHelper187,
            srcParam6.delay,
            srcParam6.time,
          ),
          srcHelper187(srcParam7));
      }),
      (srcParam6.state = 2),
      srcParam6.on.call(
        `start`,
        srcParam4,
        srcParam4.__data__,
        srcParam6.index,
        srcParam6.group,
      ),
      srcParam6.state === 2)
    ) {
      for (
        srcParam6.state = 3,
          srcValue148 = Array((srcValue151 = srcParam6.tween.length)),
          srcValue149 = 0,
          srcValue150 = -1;
        srcValue149 < srcValue151;
        ++srcValue149
      )
        (srcValue152 = srcParam6.tween[srcValue149].value.call(
          srcParam4,
          srcParam4.__data__,
          srcParam6.index,
          srcParam6.group,
        )) && (srcValue148[++srcValue150] = srcValue152);
      srcValue148.length = srcValue150 + 1;
    }
  }
  function srcHelper187(srcParam58) {
    for (
      var srcValue326 =
          srcParam58 < srcParam6.duration
            ? srcParam6.ease.call(null, srcParam58 / srcParam6.duration)
            : (srcParam6.timer.restart(srcHelper188), (srcParam6.state = 5), 1),
        srcValue327 = -1,
        srcValue328 = srcValue148.length;
      ++srcValue327 < srcValue328;

    )
      srcValue148[srcValue327].call(srcParam4, srcValue326);
    srcParam6.state === 5 &&
      (srcParam6.on.call(
        `end`,
        srcParam4,
        srcParam4.__data__,
        srcParam6.index,
        srcParam6.group,
      ),
      srcHelper188());
  }
  function srcHelper188() {
    for (var srcValue515 in ((srcParam6.state = 6),
    srcParam6.timer.stop(),
    delete srcValue147[srcParam5],
    srcValue147))
      return;
    delete srcParam4.__transition;
  }
}
var srcValue75,
  srcValue76,
  srcValue77 = rolldownRuntimeN(() => {
    (srcValue11(),
      srcValue74(),
      (srcValue75 = srcHelper8(`start`, `end`, `cancel`, `interrupt`)),
      (srcValue76 = []));
  });
function srcHelper123(srcParam26, srcParam27) {
  var srcValue260 = srcParam26.__transition,
    srcValue261,
    srcValue262,
    srcValue263 = !0,
    srcValue264;
  if (srcValue260) {
    for (srcValue264 in ((srcParam27 =
      srcParam27 == null ? null : srcParam27 + ``),
    srcValue260)) {
      if ((srcValue261 = srcValue260[srcValue264]).name !== srcParam27) {
        srcValue263 = !1;
        continue;
      }
      ((srcValue262 = srcValue261.state > 2 && srcValue261.state < 5),
        (srcValue261.state = 6),
        srcValue261.timer.stop(),
        srcValue261.on.call(
          srcValue262 ? `interrupt` : `cancel`,
          srcParam26,
          srcParam26.__data__,
          srcValue261.index,
          srcValue261.group,
        ),
        delete srcValue260[srcValue264]);
    }
    srcValue263 && delete srcParam26.__transition;
  }
}
var srcValue78 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper124(srcParam275) {
  return this.each(function () {
    srcHelper123(this, srcParam275);
  });
}
var srcValue79 = rolldownRuntimeN(() => {
  srcValue78();
});
function srcHelper125(srcParam69, srcParam70) {
  var srcValue342, srcValue343;
  return function () {
    var srcValue401 = srcHelper121(this, srcParam69),
      srcValue402 = srcValue401.tween;
    if (srcValue402 !== srcValue342) {
      srcValue343 = srcValue342 = srcValue402;
      for (
        var srcValue403 = 0, srcValue404 = srcValue343.length;
        srcValue403 < srcValue404;
        ++srcValue403
      )
        if (srcValue343[srcValue403].name === srcParam70) {
          ((srcValue343 = srcValue343.slice()),
            srcValue343.splice(srcValue403, 1));
          break;
        }
    }
    srcValue401.tween = srcValue343;
  };
}
function srcHelper126(srcParam35, srcParam36, srcParam37) {
  var srcValue283, srcValue284;
  if (typeof srcParam37 != `function`) throw Error();
  return function () {
    var srcValue344 = srcHelper121(this, srcParam35),
      srcValue345 = srcValue344.tween;
    if (srcValue345 !== srcValue283) {
      srcValue284 = (srcValue283 = srcValue345).slice();
      for (
        var srcValue346 = {
            name: srcParam36,
            value: srcParam37,
          },
          srcValue347 = 0,
          srcValue348 = srcValue284.length;
        srcValue347 < srcValue348;
        ++srcValue347
      )
        if (srcValue284[srcValue347].name === srcParam36) {
          srcValue284[srcValue347] = srcValue346;
          break;
        }
      srcValue347 === srcValue348 && srcValue284.push(srcValue346);
    }
    srcValue344.tween = srcValue284;
  };
}
function srcHelper127(srcParam83, srcParam84) {
  var srcValue390 = this._id;
  if (((srcParam83 += ``), arguments.length < 2)) {
    for (
      var srcValue391 = srcHelper122(this.node(), srcValue390).tween,
        srcValue392 = 0,
        srcValue393 = srcValue391.length,
        srcValue394;
      srcValue392 < srcValue393;
      ++srcValue392
    )
      if ((srcValue394 = srcValue391[srcValue392]).name === srcParam83)
        return srcValue394.value;
    return null;
  }
  return this.each(
    (srcParam84 == null ? srcHelper125 : srcHelper126)(
      srcValue390,
      srcParam83,
      srcParam84,
    ),
  );
}
function srcHelper128(srcParam99, srcParam100, srcParam101) {
  var srcValue421 = srcParam99._id;
  return (
    srcParam99.each(function () {
      var srcValue533 = srcHelper121(this, srcValue421);
      (srcValue533.value ||= {})[srcParam100] = srcParam101.apply(
        this,
        arguments,
      );
    }),
    function (srcParam319) {
      return srcHelper122(srcParam319, srcValue421).value[srcParam100];
    }
  );
}
var srcValue80 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper129(srcParam128, srcParam129) {
  var srcValue467;
  return (
    typeof srcParam129 == `number`
      ? appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyKt
      : srcParam129 instanceof
          appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyYt
        ? appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyQt
        : (srcValue467 =
              appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyYt(
                srcParam129,
              ))
          ? ((srcParam129 = srcValue467),
            appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyQt)
          : appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyGt
  )(srcParam128, srcParam129);
}
var srcValue81 = rolldownRuntimeN(() => {
  (appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyJt(),
    appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyVt());
});
function srcHelper130(srcParam273) {
  return function () {
    this.removeAttribute(srcParam273);
  };
}
function srcHelper131(srcParam237) {
  return function () {
    this.removeAttributeNS(srcParam237.space, srcParam237.local);
  };
}
function srcHelper132(srcParam133, srcParam134, srcParam135) {
  var srcValue470,
    srcValue471 = srcParam135 + ``,
    srcValue472;
  return function () {
    var srcValue523 = this.getAttribute(srcParam133);
    return srcValue523 === srcValue471
      ? null
      : srcValue523 === srcValue470
        ? srcValue472
        : (srcValue472 = srcParam134((srcValue470 = srcValue523), srcParam135));
  };
}
function srcHelper133(srcParam119, srcParam120, srcParam121) {
  var srcValue455,
    srcValue456 = srcParam121 + ``,
    srcValue457;
  return function () {
    var srcValue506 = this.getAttributeNS(srcParam119.space, srcParam119.local);
    return srcValue506 === srcValue456
      ? null
      : srcValue506 === srcValue455
        ? srcValue457
        : (srcValue457 = srcParam120((srcValue455 = srcValue506), srcParam121));
  };
}
function srcHelper134(srcParam53, srcParam54, srcParam55) {
  var srcValue315, srcValue316, srcValue317;
  return function () {
    var srcValue367,
      srcValue368 = srcParam55(this),
      srcValue369;
    return srcValue368 == null
      ? void this.removeAttribute(srcParam53)
      : ((srcValue367 = this.getAttribute(srcParam53)),
        (srcValue369 = srcValue368 + ``),
        srcValue367 === srcValue369
          ? null
          : srcValue367 === srcValue315 && srcValue369 === srcValue316
            ? srcValue317
            : ((srcValue316 = srcValue369),
              (srcValue317 = srcParam54(
                (srcValue315 = srcValue367),
                srcValue368,
              ))));
  };
}
function srcHelper135(srcParam43, srcParam44, srcParam45) {
  var srcValue298, srcValue299, srcValue300;
  return function () {
    var srcValue323,
      srcValue324 = srcParam45(this),
      srcValue325;
    return srcValue324 == null
      ? void this.removeAttributeNS(srcParam43.space, srcParam43.local)
      : ((srcValue323 = this.getAttributeNS(
          srcParam43.space,
          srcParam43.local,
        )),
        (srcValue325 = srcValue324 + ``),
        srcValue323 === srcValue325
          ? null
          : srcValue323 === srcValue298 && srcValue325 === srcValue299
            ? srcValue300
            : ((srcValue299 = srcValue325),
              (srcValue300 = srcParam44(
                (srcValue298 = srcValue323),
                srcValue324,
              ))));
  };
}
function srcHelper136(srcParam81, srcParam82) {
  var srcValue388 = srcHelper13(srcParam81),
    srcValue389 =
      srcValue388 === `transform`
        ? appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyWt
        : srcHelper129;
  return this.attrTween(
    srcParam81,
    typeof srcParam82 == `function`
      ? (srcValue388.local ? srcHelper135 : srcHelper134)(
          srcValue388,
          srcValue389,
          srcHelper128(this, `attr.` + srcParam81, srcParam82),
        )
      : srcParam82 == null
        ? (srcValue388.local ? srcHelper131 : srcHelper130)(srcValue388)
        : (srcValue388.local ? srcHelper133 : srcHelper132)(
            srcValue388,
            srcValue389,
            srcParam82,
          ),
  );
}
var srcValue82 = rolldownRuntimeN(() => {
  (appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyVt(),
    srcValue60(),
    srcValue80(),
    srcValue81());
});
function srcHelper137(srcParam232, srcParam233) {
  return function (srcParam306) {
    this.setAttribute(srcParam232, srcParam233.call(this, srcParam306));
  };
}
function srcHelper138(srcParam202, srcParam203) {
  return function (srcParam268) {
    this.setAttributeNS(
      srcParam202.space,
      srcParam202.local,
      srcParam203.call(this, srcParam268),
    );
  };
}
function srcHelper139(srcParam141, srcParam142) {
  var srcValue473, srcValue474;
  function srcHelper191() {
    var srcValue527 = srcParam142.apply(this, arguments);
    return (
      srcValue527 !== srcValue474 &&
        (srcValue473 =
          (srcValue474 = srcValue527) &&
          srcHelper138(srcParam141, srcValue527)),
      srcValue473
    );
  }
  return ((srcHelper191._value = srcParam142), srcHelper191);
}
function srcHelper140(srcParam143, srcParam144) {
  var srcValue475, srcValue476;
  function srcHelper192() {
    var srcValue528 = srcParam144.apply(this, arguments);
    return (
      srcValue528 !== srcValue476 &&
        (srcValue475 =
          (srcValue476 = srcValue528) &&
          srcHelper137(srcParam143, srcValue528)),
      srcValue475
    );
  }
  return ((srcHelper192._value = srcParam144), srcHelper192);
}
function srcHelper141(srcParam89, srcParam90) {
  var srcValue405 = `attr.` + srcParam89;
  if (arguments.length < 2)
    return (srcValue405 = this.tween(srcValue405)) && srcValue405._value;
  if (srcParam90 == null) return this.tween(srcValue405, null);
  if (typeof srcParam90 != `function`) throw Error();
  var srcValue406 = srcHelper13(srcParam89);
  return this.tween(
    srcValue405,
    (srcValue406.local ? srcHelper139 : srcHelper140)(srcValue406, srcParam90),
  );
}
var srcValue83 = rolldownRuntimeN(() => {
  srcValue60();
});
function srcHelper142(srcParam221, srcParam222) {
  return function () {
    srcHelper120(this, srcParam221).delay = +srcParam222.apply(this, arguments);
  };
}
function srcHelper143(srcParam211, srcParam212) {
  return (
    (srcParam212 = +srcParam212),
    function () {
      srcHelper120(this, srcParam211).delay = srcParam212;
    }
  );
}
function srcHelper144(srcParam162) {
  var srcValue499 = this._id;
  return arguments.length
    ? this.each(
        (typeof srcParam162 == `function` ? srcHelper142 : srcHelper143)(
          srcValue499,
          srcParam162,
        ),
      )
    : srcHelper122(this.node(), srcValue499).delay;
}
var srcValue84 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper145(srcParam216, srcParam217) {
  return function () {
    srcHelper121(this, srcParam216).duration = +srcParam217.apply(
      this,
      arguments,
    );
  };
}
function srcHelper146(srcParam205, srcParam206) {
  return (
    (srcParam206 = +srcParam206),
    function () {
      srcHelper121(this, srcParam205).duration = srcParam206;
    }
  );
}
function srcHelper147(srcParam159) {
  var srcValue495 = this._id;
  return arguments.length
    ? this.each(
        (typeof srcParam159 == `function` ? srcHelper145 : srcHelper146)(
          srcValue495,
          srcParam159,
        ),
      )
    : srcHelper122(this.node(), srcValue495).duration;
}
var srcValue85 = rolldownRuntimeN(() => {
  srcValue77();
});
function $r(srcParam190, srcParam191) {
  if (typeof srcParam191 != `function`) throw Error();
  return function () {
    srcHelper121(this, srcParam190).ease = srcParam191;
  };
}
function srcHelper148(srcParam200) {
  var srcValue526 = this._id;
  return arguments.length
    ? this.each($r(srcValue526, srcParam200))
    : srcHelper122(this.node(), srcValue526).ease;
}
var srcValue86 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper149(srcParam155, srcParam156) {
  return function () {
    var srcValue508 = srcParam156.apply(this, arguments);
    if (typeof srcValue508 != `function`) throw Error();
    srcHelper121(this, srcParam155).ease = srcValue508;
  };
}
function srcHelper150(srcParam223) {
  if (typeof srcParam223 != `function`) throw Error();
  return this.each(srcHelper149(this._id, srcParam223));
}
var srcValue87 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper151(srcParam59) {
  typeof srcParam59 != `function` && (srcParam59 = srcHelper24(srcParam59));
  for (
    var srcValue329 = this._groups,
      srcValue330 = srcValue329.length,
      srcValue331 = Array(srcValue330),
      srcValue332 = 0;
    srcValue332 < srcValue330;
    ++srcValue332
  )
    for (
      var srcValue333 = srcValue329[srcValue332],
        srcValue334 = srcValue333.length,
        srcValue335 = (srcValue331[srcValue332] = []),
        srcValue336,
        srcValue337 = 0;
      srcValue337 < srcValue334;
      ++srcValue337
    )
      (srcValue336 = srcValue333[srcValue337]) &&
        srcParam59.call(
          srcValue336,
          srcValue336.__data__,
          srcValue337,
          srcValue333,
        ) &&
        srcValue335.push(srcValue336);
  return new srcHelper177(srcValue331, this._parents, this._name, this._id);
}
var srcValue88 = rolldownRuntimeN(() => {
  (srcValue60(), srcValue103());
});
function srcHelper152(srcParam24) {
  if (srcParam24._id !== this._id) throw Error();
  for (
    var srcValue233 = this._groups,
      srcValue234 = srcParam24._groups,
      srcValue235 = srcValue233.length,
      srcValue236 = srcValue234.length,
      srcValue237 = Math.min(srcValue235, srcValue236),
      srcValue238 = Array(srcValue235),
      srcValue239 = 0;
    srcValue239 < srcValue237;
    ++srcValue239
  )
    for (
      var srcValue240 = srcValue233[srcValue239],
        srcValue241 = srcValue234[srcValue239],
        srcValue242 = srcValue240.length,
        srcValue243 = (srcValue238[srcValue239] = Array(srcValue242)),
        srcValue244,
        srcValue245 = 0;
      srcValue245 < srcValue242;
      ++srcValue245
    )
      (srcValue244 = srcValue240[srcValue245] || srcValue241[srcValue245]) &&
        (srcValue243[srcValue245] = srcValue244);
  for (; srcValue239 < srcValue235; ++srcValue239)
    srcValue238[srcValue239] = srcValue233[srcValue239];
  return new srcHelper177(srcValue238, this._parents, this._name, this._id);
}
var srcValue89 = rolldownRuntimeN(() => {
  srcValue103();
});
function srcHelper153(srcParam118) {
  return (srcParam118 + ``)
    .trim()
    .split(/^|\s+/)
    .every(function (item) {
      var srcValue516 = item.indexOf(`.`);
      return (
        srcValue516 >= 0 && (item = item.slice(0, srcValue516)),
        !item || item === `start`
      );
    });
}
function ui(srcParam122, srcParam123, srcParam124) {
  var srcValue458,
    srcValue459,
    srcValue460 = srcHelper153(srcParam123) ? srcHelper120 : srcHelper121;
  return function () {
    var srcValue517 = srcValue460(this, srcParam122),
      srcValue518 = srcValue517.on;
    (srcValue518 !== srcValue458 &&
      (srcValue459 = (srcValue458 = srcValue518).copy()).on(
        srcParam123,
        srcParam124,
      ),
      (srcValue517.on = srcValue459));
  };
}
function srcHelper154(srcParam177, srcParam178) {
  var srcValue505 = this._id;
  return arguments.length < 2
    ? srcHelper122(this.node(), srcValue505).on.on(srcParam177)
    : this.each(ui(srcValue505, srcParam177, srcParam178));
}
var srcValue90 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper155(srcParam153) {
  return function () {
    var srcValue503 = this.parentNode;
    for (var srcValue504 in this.__transition)
      if (+srcValue504 !== srcParam153) return;
    srcValue503 && srcValue503.removeChild(this);
  };
}
function srcHelper156() {
  return this.on(`end.remove`, srcHelper155(this._id));
}
var srcValue91 = rolldownRuntimeN(() => {});
function srcHelper157(srcParam23) {
  var srcValue205 = this._name,
    srcValue206 = this._id;
  typeof srcParam23 != `function` && (srcParam23 = srcHelper17(srcParam23));
  for (
    var srcValue207 = this._groups,
      srcValue208 = srcValue207.length,
      srcValue209 = Array(srcValue208),
      srcValue210 = 0;
    srcValue210 < srcValue208;
    ++srcValue210
  )
    for (
      var srcValue211 = srcValue207[srcValue210],
        srcValue212 = srcValue211.length,
        srcValue213 = (srcValue209[srcValue210] = Array(srcValue212)),
        srcValue214,
        srcValue215,
        srcValue216 = 0;
      srcValue216 < srcValue212;
      ++srcValue216
    )
      (srcValue214 = srcValue211[srcValue216]) &&
        (srcValue215 = srcParam23.call(
          srcValue214,
          srcValue214.__data__,
          srcValue216,
          srcValue211,
        )) &&
        (`__data__` in srcValue214 &&
          (srcValue215.__data__ = srcValue214.__data__),
        (srcValue213[srcValue216] = srcValue215),
        srcHelper119(
          srcValue213[srcValue216],
          srcValue205,
          srcValue206,
          srcValue216,
          srcValue213,
          srcHelper122(srcValue214, srcValue206),
        ));
  return new srcHelper177(srcValue209, this._parents, srcValue205, srcValue206);
}
var _i = rolldownRuntimeN(() => {
  (srcValue60(), srcValue103(), srcValue77());
});
function srcHelper158(srcParam15) {
  var srcValue182 = this._name,
    srcValue183 = this._id;
  typeof srcParam15 != `function` && (srcParam15 = srcHelper21(srcParam15));
  for (
    var srcValue184 = this._groups,
      srcValue185 = srcValue184.length,
      srcValue186 = [],
      srcValue187 = [],
      srcValue188 = 0;
    srcValue188 < srcValue185;
    ++srcValue188
  )
    for (
      var srcValue189 = srcValue184[srcValue188],
        srcValue190 = srcValue189.length,
        srcValue191,
        srcValue192 = 0;
      srcValue192 < srcValue190;
      ++srcValue192
    )
      if ((srcValue191 = srcValue189[srcValue192])) {
        for (
          var srcValue193 = srcParam15.call(
              srcValue191,
              srcValue191.__data__,
              srcValue192,
              srcValue189,
            ),
            srcValue194,
            srcValue195 = srcHelper122(srcValue191, srcValue183),
            srcValue196 = 0,
            srcValue197 = srcValue193.length;
          srcValue196 < srcValue197;
          ++srcValue196
        )
          (srcValue194 = srcValue193[srcValue196]) &&
            srcHelper119(
              srcValue194,
              srcValue182,
              srcValue183,
              srcValue196,
              srcValue193,
              srcValue195,
            );
        (srcValue186.push(srcValue193), srcValue187.push(srcValue191));
      }
  return new srcHelper177(srcValue186, srcValue187, srcValue182, srcValue183);
}
var srcValue92 = rolldownRuntimeN(() => {
  (srcValue60(), srcValue103(), srcValue77());
});
function srcHelper159() {
  return new srcValue93(this._groups, this._parents);
}
var srcValue93,
  srcValue94 = rolldownRuntimeN(() => {
    (srcValue60(), (srcValue93 = srcHelper108.prototype.constructor));
  });
function srcHelper160(srcParam103, srcParam104) {
  var srcValue427, srcValue428, srcValue429;
  return function () {
    var srcValue478 = srcHelper65(this, srcParam103),
      srcValue479 =
        (this.style.removeProperty(srcParam103),
        srcHelper65(this, srcParam103));
    return srcValue478 === srcValue479
      ? null
      : srcValue478 === srcValue427 && srcValue479 === srcValue428
        ? srcValue429
        : (srcValue429 = srcParam104(
            (srcValue427 = srcValue478),
            (srcValue428 = srcValue479),
          ));
  };
}
function srcHelper161(srcParam259) {
  return function () {
    this.style.removeProperty(srcParam259);
  };
}
function srcHelper162(srcParam146, srcParam147, srcParam148) {
  var srcValue480,
    srcValue481 = srcParam148 + ``,
    srcValue482;
  return function () {
    var srcValue531 = srcHelper65(this, srcParam146);
    return srcValue531 === srcValue481
      ? null
      : srcValue531 === srcValue480
        ? srcValue482
        : (srcValue482 = srcParam147((srcValue480 = srcValue531), srcParam148));
  };
}
function srcHelper163(srcParam77, srcParam78, srcParam79) {
  var srcValue385, srcValue386, srcValue387;
  return function () {
    var srcValue412 = srcHelper65(this, srcParam77),
      srcValue413 = srcParam79(this),
      srcValue414 = srcValue413 + ``;
    return (
      srcValue413 ??
        (srcValue414 = srcValue413 =
          (this.style.removeProperty(srcParam77),
          srcHelper65(this, srcParam77))),
      srcValue412 === srcValue414
        ? null
        : srcValue412 === srcValue385 && srcValue414 === srcValue386
          ? srcValue387
          : ((srcValue386 = srcValue414),
            (srcValue387 = srcParam78(
              (srcValue385 = srcValue412),
              srcValue413,
            )))
    );
  };
}
function srcHelper164(srcParam74, srcParam75) {
  var srcValue370,
    srcValue371,
    srcValue372,
    srcValue373 = `style.` + srcParam75,
    srcValue374 = `end.` + srcValue373,
    srcValue375;
  return function () {
    var srcValue461 = srcHelper121(this, srcParam74),
      srcValue462 = srcValue461.on,
      srcValue463 =
        srcValue461.value[srcValue373] == null
          ? (srcValue375 ||= srcHelper161(srcParam75))
          : void 0;
    ((srcValue462 !== srcValue370 || srcValue372 !== srcValue463) &&
      (srcValue371 = (srcValue370 = srcValue462).copy()).on(
        srcValue374,
        (srcValue372 = srcValue463),
      ),
      (srcValue461.on = srcValue371));
  };
}
function srcHelper165(srcParam50, srcParam51, srcParam52) {
  var srcValue314 =
    (srcParam50 += ``) == `transform`
      ? appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyUt
      : srcHelper129;
  return srcParam51 == null
    ? this.styleTween(srcParam50, srcHelper160(srcParam50, srcValue314)).on(
        `end.style.` + srcParam50,
        srcHelper161(srcParam50),
      )
    : typeof srcParam51 == `function`
      ? this.styleTween(
          srcParam50,
          srcHelper163(
            srcParam50,
            srcValue314,
            srcHelper128(this, `style.` + srcParam50, srcParam51),
          ),
        ).each(srcHelper164(this._id, srcParam50))
      : this.styleTween(
          srcParam50,
          srcHelper162(srcParam50, srcValue314, srcParam51),
          srcParam52,
        ).on(`end.style.` + srcParam50, null);
}
var srcValue95 = rolldownRuntimeN(() => {
  (appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyVt(),
    srcValue60(),
    srcValue77(),
    srcValue80(),
    srcValue81());
});
function srcHelper166(srcParam213, srcParam214, srcParam215) {
  return function (srcParam291) {
    this.style.setProperty(
      srcParam213,
      srcParam214.call(this, srcParam291),
      srcParam215,
    );
  };
}
function srcHelper167(srcParam130, srcParam131, srcParam132) {
  var srcValue468, srcValue469;
  function srcHelper190() {
    var srcValue524 = srcParam131.apply(this, arguments);
    return (
      srcValue524 !== srcValue469 &&
        (srcValue468 =
          (srcValue469 = srcValue524) &&
          srcHelper166(srcParam130, srcValue524, srcParam132)),
      srcValue468
    );
  }
  return ((srcHelper190._value = srcParam131), srcHelper190);
}
function srcHelper168(srcParam91, srcParam92, srcParam93) {
  var srcValue411 = `style.` + (srcParam91 += ``);
  if (arguments.length < 2)
    return (srcValue411 = this.tween(srcValue411)) && srcValue411._value;
  if (srcParam92 == null) return this.tween(srcValue411, null);
  if (typeof srcParam92 != `function`) throw Error();
  return this.tween(
    srcValue411,
    srcHelper167(srcParam91, srcParam92, srcParam93 ?? ``),
  );
}
var srcValue96 = rolldownRuntimeN(() => {});
function srcHelper169(srcParam282) {
  return function () {
    this.textContent = srcParam282;
  };
}
function srcHelper170(srcParam252) {
  return function () {
    this.textContent = srcParam252(this) ?? ``;
  };
}
function srcHelper171(srcParam164) {
  return this.tween(
    `text`,
    typeof srcParam164 == `function`
      ? srcHelper170(srcHelper128(this, `text`, srcParam164))
      : srcHelper169(srcParam164 == null ? `` : srcParam164 + ``),
  );
}
var srcValue97 = rolldownRuntimeN(() => {
  srcValue80();
});
function srcHelper172(srcParam247) {
  return function (srcParam310) {
    this.textContent = srcParam247.call(this, srcParam310);
  };
}
function srcHelper173(srcParam152) {
  var srcValue490, srcValue491;
  function srcHelper193() {
    var srcValue530 = srcParam152.apply(this, arguments);
    return (
      srcValue530 !== srcValue491 &&
        (srcValue490 =
          (srcValue491 = srcValue530) && srcHelper172(srcValue530)),
      srcValue490
    );
  }
  return ((srcHelper193._value = srcParam152), srcHelper193);
}
function srcHelper174(srcParam102) {
  var srcValue422 = `text`;
  if (arguments.length < 1)
    return (srcValue422 = this.tween(srcValue422)) && srcValue422._value;
  if (srcParam102 == null) return this.tween(srcValue422, null);
  if (typeof srcParam102 != `function`) throw Error();
  return this.tween(srcValue422, srcHelper173(srcParam102));
}
var srcValue98 = rolldownRuntimeN(() => {});
function srcHelper175() {
  for (
    var srcValue222 = this._name,
      srcValue223 = this._id,
      srcValue224 = srcHelper179(),
      srcValue225 = this._groups,
      srcValue226 = srcValue225.length,
      srcValue227 = 0;
    srcValue227 < srcValue226;
    ++srcValue227
  )
    for (
      var srcValue228 = srcValue225[srcValue227],
        srcValue229 = srcValue228.length,
        srcValue230,
        srcValue231 = 0;
      srcValue231 < srcValue229;
      ++srcValue231
    )
      if ((srcValue230 = srcValue228[srcValue231])) {
        var srcValue232 = srcHelper122(srcValue230, srcValue223);
        srcHelper119(
          srcValue230,
          srcValue222,
          srcValue224,
          srcValue231,
          srcValue228,
          {
            time: srcValue232.time + srcValue232.delay + srcValue232.duration,
            delay: 0,
            duration: srcValue232.duration,
            ease: srcValue232.ease,
          },
        );
      }
  return new srcHelper177(srcValue225, this._parents, srcValue222, srcValue224);
}
var srcValue99 = rolldownRuntimeN(() => {
  (srcValue103(), srcValue77());
});
function srcHelper176() {
  var srcValue217,
    srcValue218,
    srcValue219 = this,
    srcValue220 = srcValue219._id,
    srcValue221 = srcValue219.size();
  return new Promise(function (srcParam38, srcParam39) {
    var srcValue285 = {
        value: srcParam39,
      },
      srcValue286 = {
        value: function () {
          --srcValue221 === 0 && srcParam38();
        },
      };
    (srcValue219.each(function () {
      var srcValue434 = srcHelper121(this, srcValue220),
        srcValue435 = srcValue434.on;
      (srcValue435 !== srcValue217 &&
        ((srcValue218 = (srcValue217 = srcValue435).copy()),
        srcValue218._.cancel.push(srcValue285),
        srcValue218._.interrupt.push(srcValue285),
        srcValue218._.end.push(srcValue286)),
        (srcValue434.on = srcValue218));
    }),
      srcValue221 === 0 && srcParam38());
  });
}
var srcValue100 = rolldownRuntimeN(() => {
  srcValue77();
});
function srcHelper177(srcParam207, srcParam208, srcParam209, srcParam210) {
  ((this._groups = srcParam207),
    (this._parents = srcParam208),
    (this._name = srcParam209),
    (this._id = srcParam210));
}
function srcHelper178(srcParam322) {
  return srcHelper108().transition(srcParam322);
}
function srcHelper179() {
  return ++srcValue101;
}
var srcValue101,
  srcValue102,
  srcValue103 = rolldownRuntimeN(() => {
    (srcValue60(),
      srcValue82(),
      srcValue83(),
      srcValue84(),
      srcValue85(),
      srcValue86(),
      srcValue87(),
      srcValue88(),
      srcValue89(),
      srcValue90(),
      srcValue91(),
      _i(),
      srcValue92(),
      srcValue94(),
      srcValue95(),
      srcValue96(),
      srcValue97(),
      srcValue98(),
      srcValue99(),
      srcValue80(),
      srcValue100(),
      (srcValue101 = 0),
      (srcValue102 = srcHelper108.prototype),
      (srcHelper177.prototype = srcHelper178.prototype =
        {
          constructor: srcHelper177,
          select: srcHelper157,
          selectAll: srcHelper158,
          selectChild: srcValue102.selectChild,
          selectChildren: srcValue102.selectChildren,
          filter: srcHelper151,
          merge: srcHelper152,
          selection: srcHelper159,
          transition: srcHelper175,
          call: srcValue102.call,
          nodes: srcValue102.nodes,
          node: srcValue102.node,
          size: srcValue102.size,
          empty: srcValue102.empty,
          each: srcValue102.each,
          on: srcHelper154,
          attr: srcHelper136,
          attrTween: srcHelper141,
          style: srcHelper165,
          styleTween: srcHelper168,
          text: srcHelper171,
          textTween: srcHelper174,
          remove: srcHelper156,
          tween: srcHelper127,
          delay: srcHelper144,
          duration: srcHelper147,
          ease: srcHelper148,
          easeVarying: srcHelper150,
          end: srcHelper176,
          [Symbol.iterator]: srcValue102[Symbol.iterator],
        }));
  });
function srcHelper180(srcParam256) {
  return (
    ((srcParam256 *= 2) <= 1
      ? srcParam256 * srcParam256 * srcParam256
      : (srcParam256 -= 2) * srcParam256 * srcParam256 + 2) / 2
  );
}
var srcValue104 = rolldownRuntimeN(() => {}),
  srcValue105 = rolldownRuntimeN(() => {
    srcValue104();
  });
function srcHelper181(srcParam157, srcParam158) {
  for (
    var srcValue494;
    !(srcValue494 = srcParam157.__transition) ||
    !(srcValue494 = srcValue494[srcParam158]);

  )
    if (!(srcParam157 = srcParam157.parentNode))
      throw Error(`transition ${srcParam158} not found`);
  return srcValue494;
}
function $i(srcParam47) {
  var srcValue301, srcValue302;
  srcParam47 instanceof srcHelper177
    ? ((srcValue301 = srcParam47._id), (srcParam47 = srcParam47._name))
    : ((srcValue301 = srcHelper179()),
      ((srcValue302 = srcValue106).time = srcHelper110()),
      (srcParam47 = srcParam47 == null ? null : srcParam47 + ``));
  for (
    var srcValue303 = this._groups,
      srcValue304 = srcValue303.length,
      srcValue305 = 0;
    srcValue305 < srcValue304;
    ++srcValue305
  )
    for (
      var srcValue306 = srcValue303[srcValue305],
        srcValue307 = srcValue306.length,
        srcValue308,
        srcValue309 = 0;
      srcValue309 < srcValue307;
      ++srcValue309
    )
      (srcValue308 = srcValue306[srcValue309]) &&
        srcHelper119(
          srcValue308,
          srcParam47,
          srcValue301,
          srcValue309,
          srcValue306,
          srcValue302 || srcHelper181(srcValue308, srcValue301),
        );
  return new srcHelper177(srcValue303, this._parents, srcParam47, srcValue301);
}
var srcValue106,
  srcValue107 = rolldownRuntimeN(() => {
    (srcValue103(),
      srcValue77(),
      srcValue105(),
      srcValue74(),
      (srcValue106 = {
        time: null,
        delay: 0,
        duration: 250,
        ease: srcHelper180,
      }));
  }),
  srcValue108 = rolldownRuntimeN(() => {
    (srcValue60(),
      srcValue79(),
      srcValue107(),
      (srcHelper108.prototype.interrupt = srcHelper124),
      (srcHelper108.prototype.transition = $i));
  }),
  srcValue109 = rolldownRuntimeN(() => {
    srcValue108();
  });
function srcHelper182(srcParam326) {
  return {
    type: srcParam326,
  };
}
var abs,
  max,
  min,
  srcValue110 = rolldownRuntimeN(() => {
    (srcValue109(),
      ({ abs: abs, max: max, min: min } = Math),
      [`w`, `e`].map(srcHelper182),
      [`n`, `s`].map(srcHelper182),
      [`n`, `w`, `e`, `s`, `nw`, `ne`, `sw`, `se`].map(srcHelper182));
  }),
  srcValue111 = rolldownRuntimeN(() => {
    srcValue110();
  }),
  srcValue112 = rolldownRuntimeN(() => {}),
  srcValue113 = rolldownRuntimeN(() => {}),
  srcValue114 = rolldownRuntimeN(() => {}),
  srcValue115 = rolldownRuntimeN(() => {}),
  srcValue116 = rolldownRuntimeN(() => {}),
  srcValue117 = rolldownRuntimeN(() => {}),
  srcValue118 = rolldownRuntimeN(() => {}),
  _a = rolldownRuntimeN(() => {}),
  srcValue119 = rolldownRuntimeN(() => {}),
  srcValue120 = rolldownRuntimeN(() => {});
function $(srcParam292, srcParam293, srcParam294) {
  ((this.k = srcParam292), (this.x = srcParam293), (this.y = srcParam294));
}
function srcHelper183(srcParam231) {
  for (; !srcParam231.__zoom; )
    if (!(srcParam231 = srcParam231.parentNode)) return srcValue121;
  return srcParam231.__zoom;
}
var srcValue121,
  srcValue122 = rolldownRuntimeN(() => {
    (($.prototype = {
      constructor: $,
      scale: function (srcParam245) {
        return srcParam245 === 1
          ? this
          : new $(this.k * srcParam245, this.x, this.y);
      },
      translate: function (srcParam167, srcParam168) {
        return (srcParam167 === 0) & (srcParam168 === 0)
          ? this
          : new $(
              this.k,
              this.x + this.k * srcParam167,
              this.y + this.k * srcParam168,
            );
      },
      apply: function (srcParam248) {
        return [
          srcParam248[0] * this.k + this.x,
          srcParam248[1] * this.k + this.y,
        ];
      },
      applyX: function (srcParam311) {
        return srcParam311 * this.k + this.x;
      },
      applyY: function (srcParam312) {
        return srcParam312 * this.k + this.y;
      },
      invert: function (srcParam239) {
        return [
          (srcParam239[0] - this.x) / this.k,
          (srcParam239[1] - this.y) / this.k,
        ];
      },
      invertX: function (srcParam308) {
        return (srcParam308 - this.x) / this.k;
      },
      invertY: function (srcParam309) {
        return (srcParam309 - this.y) / this.k;
      },
      rescaleX: function (srcParam182) {
        return srcParam182
          .copy()
          .domain(
            srcParam182
              .range()
              .map(this.invertX, this)
              .map(srcParam182.invert, srcParam182),
          );
      },
      rescaleY: function (srcParam183) {
        return srcParam183
          .copy()
          .domain(
            srcParam183
              .range()
              .map(this.invertY, this)
              .map(srcParam183.invert, srcParam183),
          );
      },
      toString: function () {
        return `translate(` + this.x + `,` + this.y + `) scale(` + this.k + `)`;
      },
    }),
      (srcValue121 = new $(1, 0, 0)),
      (srcHelper183.prototype = $.prototype));
  }),
  srcValue123 = rolldownRuntimeN(() => {
    (srcValue109(), srcValue122());
  }),
  srcValue124 = rolldownRuntimeN(() => {
    (srcValue123(), srcValue122());
  }),
  _srcT = rolldownRuntimeN(() => {
    (appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyMt(),
      srcValue8(),
      srcValue111(),
      srcValue112(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyJt(),
      srcValue113(),
      srcValue114(),
      srcValue11(),
      $n(),
      srcValue115(),
      srcValue105(),
      srcValue116(),
      srcValue118(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyXt(),
      _a(),
      srcT(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyVt(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyB(),
      srcValue119(),
      srcValue117(),
      srcValue120(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyV(),
      srcO(),
      srcValue60(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyT(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyRt(),
      appInitialAppMainOnboardingPageMermaidDiagramXychartDiagramPRI3JC2RTimelineDefinDcen2xtyTt(),
      srcValue74(),
      srcValue109(),
      srcValue124());
  });
export {
  srcI as d3AxisTop,
  srcN as d3Select,
  srcR as d3AxisBottom,
  _srcT as initD3AxisSelectionRuntime,
};
