// Restored from ref/webview/assets/katex--WVKgE7E.js
// Current ref alias: ref/webview/assets/katex-CjHJ1D7d.js
// Katex chunk restored from the Codex webview bundle.
var katexT = class _katexT extends Error {
    constructor(katexParam93, katexParam94) {
      var katexValue822 = `KaTeX parse error: ` + katexParam93,
        katexValue823,
        katexValue824,
        katexValue825 = katexParam94 && katexParam94.loc;
      if (katexValue825 && katexValue825.start <= katexValue825.end) {
        var katexValue826 = katexValue825.lexer.input;
        ((katexValue823 = katexValue825.start),
          (katexValue824 = katexValue825.end),
          katexValue823 === katexValue826.length
            ? (katexValue822 += ` at end of input: `)
            : (katexValue822 += ` at position ` + (katexValue823 + 1) + `: `));
        var katexValue827 = katexValue826
            .slice(katexValue823, katexValue824)
            .replace(/[^]/g, `$&̲`),
          katexValue828 =
            katexValue823 > 15
              ? `…` + katexValue826.slice(katexValue823 - 15, katexValue823)
              : katexValue826.slice(0, katexValue823),
          _katexN =
            katexValue824 + 15 < katexValue826.length
              ? katexValue826.slice(katexValue824, katexValue824 + 15) + `…`
              : katexValue826.slice(katexValue824);
        katexValue822 += katexValue828 + katexValue827 + _katexN;
      }
      (super(katexValue822),
        (this.name = `ParseError`),
        Object.setPrototypeOf(this, _katexT.prototype),
        (this.position = katexValue823),
        katexValue823 != null &&
          katexValue824 != null &&
          (this.length = katexValue824 - katexValue823),
        (this.rawMessage = katexParam93));
    }
  },
  katexValue1 = /([A-Z])/g,
  katexValue2 = (_katexT) => _katexT.replace(katexValue1, `-$1`).toLowerCase(),
  katexValue3 = {
    "&": `&amp;`,
    ">": `&gt;`,
    "<": `&lt;`,
    '"': `&quot;`,
    "'": `&#x27;`,
  },
  katexValue4 = /[&><"']/g,
  katexValue5 = (_katexT) =>
    String(_katexT).replace(katexValue4, (__katexT) => katexValue3[__katexT]),
  katexValue6 = (_katexT) =>
    _katexT.type === `ordgroup` || _katexT.type === `color`
      ? _katexT.body.length === 1
        ? katexValue6(_katexT.body[0])
        : _katexT
      : _katexT.type === `font`
        ? katexValue6(_katexT.body)
        : _katexT,
  katexValue7 = new Set([`mathord`, `textord`, `atom`]),
  katexValue8 = (_katexT) => katexValue7.has(katexValue6(_katexT).type),
  katexValue9 = (_katexT) => {
    var katexValue1135 =
      /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(_katexT);
    return katexValue1135
      ? katexValue1135[2] !== `:` ||
        !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(katexValue1135[1])
        ? null
        : katexValue1135[1].toLowerCase()
      : `_relative`;
  },
  katexN = {
    displayMode: {
      type: `boolean`,
      description: `Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`,
      cli: `-d, --display-mode`,
    },
    output: {
      type: {
        enum: [`htmlAndMathml`, `html`, `mathml`],
      },
      description: `Determines the markup language of the output.`,
      cli: `-F, --format <type>`,
    },
    leqno: {
      type: `boolean`,
      description: `Render display math in leqno style (left-justified tags).`,
    },
    fleqn: {
      type: `boolean`,
      description: `Render display math flush left.`,
    },
    throwOnError: {
      type: `boolean`,
      default: !0,
      cli: `-t, --no-throw-on-error`,
      cliDescription: `Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.`,
    },
    errorColor: {
      type: `string`,
      default: `#cc0000`,
      cli: `-c, --error-color <color>`,
      cliDescription: `A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`,
      cliProcessor: (_katexT) => `#` + _katexT,
    },
    macros: {
      type: `object`,
      cli: `-m, --macro <def>`,
      cliDescription: `Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`,
      cliDefault: [],
      cliProcessor: (_katexT, katexParam465) => (
        katexParam465.push(_katexT),
        katexParam465
      ),
    },
    minRuleThickness: {
      type: `number`,
      description:
        "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (_katexT) => Math.max(0, _katexT),
      cli: `--min-rule-thickness <size>`,
      cliProcessor: parseFloat,
    },
    colorIsTextColor: {
      type: `boolean`,
      description: `Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`,
      cli: `-b, --color-is-text-color`,
    },
    strict: {
      type: [
        {
          enum: [`warn`, `ignore`, `error`],
        },
        `boolean`,
        `function`,
      ],
      description: `Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`,
      cli: `-S, --strict`,
      cliDefault: !1,
    },
    trust: {
      type: [`boolean`, `function`],
      description: `Trust the input, enabling all HTML features such as \\url.`,
      cli: `-T, --trust`,
    },
    maxSize: {
      type: `number`,
      default: 1 / 0,
      description: `If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`,
      processor: (_katexT) => Math.max(0, _katexT),
      cli: `-s, --max-size <n>`,
      cliProcessor: parseInt,
    },
    maxExpand: {
      type: `number`,
      default: 1e3,
      description: `Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`,
      processor: (_katexT) => Math.max(0, _katexT),
      cli: `-e, --max-expand <n>`,
      cliProcessor: (_katexT) =>
        _katexT === `Infinity` ? 1 / 0 : parseInt(_katexT),
    },
    globalGroup: {
      type: `boolean`,
      cli: !1,
    },
  };
function katexHelper1(_katexT) {
  if (`default` in _katexT) return _katexT.default;
  var katexValue1062 = _katexT.type,
    katexValue1063 = Array.isArray(katexValue1062)
      ? katexValue1062[0]
      : katexValue1062;
  if (typeof katexValue1063 != `string`) return katexValue1063.enum[0];
  switch (katexValue1063) {
    case `boolean`:
      return !1;
    case `string`:
      return ``;
    case `number`:
      return 0;
    case `object`:
      return {};
  }
}
var katexValue10 = class {
    constructor(_katexT) {
      (_katexT === void 0 && (_katexT = {}), (_katexT ||= {}));
      for (var katexValue1183 of Object.keys(katexN)) {
        var katexValue1184 = katexN[katexValue1183],
          katexValue1185 = _katexT[katexValue1183];
        this[katexValue1183] =
          katexValue1185 === void 0
            ? katexHelper1(katexValue1184)
            : katexValue1184.processor
              ? katexValue1184.processor(katexValue1185)
              : katexValue1185;
      }
    }
    reportNonstrict(katexParam95, katexParam96, katexParam97) {
      var katexValue829 = this.strict;
      if (
        (typeof katexValue829 == `function` &&
          (katexValue829 = katexValue829(
            katexParam95,
            katexParam96,
            katexParam97,
          )),
        !(!katexValue829 || katexValue829 === `ignore`))
      ) {
        if (katexValue829 === !0 || katexValue829 === `error`)
          throw new katexT(
            `LaTeX-incompatible input and strict mode is set to 'error': ` +
              (katexParam96 + ` [` + katexParam95 + `]`),
            katexParam97,
          );
        katexValue829 === `warn`
          ? typeof console < `u` &&
            console.warn(
              `LaTeX-incompatible input and strict mode is set to 'warn': ` +
                (katexParam96 + ` [` + katexParam95 + `]`),
            )
          : typeof console < `u` &&
            console.warn(
              `LaTeX-incompatible input and strict mode is set to ` +
                (`unrecognized '` +
                  katexValue829 +
                  `': ` +
                  katexParam96 +
                  ` [` +
                  katexParam95 +
                  `]`),
            );
      }
    }
    useStrictBehavior(_katexT, katexParam114, katexParam115) {
      var katexValue876 = this.strict;
      if (typeof katexValue876 == `function`)
        try {
          katexValue876 = katexValue876(_katexT, katexParam114, katexParam115);
        } catch {
          katexValue876 = `error`;
        }
      return !katexValue876 || katexValue876 === `ignore`
        ? !1
        : katexValue876 === !0 || katexValue876 === `error`
          ? !0
          : katexValue876 === `warn`
            ? (typeof console < `u` &&
                console.warn(
                  `LaTeX-incompatible input and strict mode is set to 'warn': ` +
                    (katexParam114 + ` [` + _katexT + `]`),
                ),
              !1)
            : (typeof console < `u` &&
                console.warn(
                  `LaTeX-incompatible input and strict mode is set to ` +
                    (`unrecognized '` +
                      katexValue876 +
                      `': ` +
                      katexParam114 +
                      ` [` +
                      _katexT +
                      `]`),
                ),
              !1);
    }
    isTrusted(_katexT) {
      if (`url` in _katexT && _katexT.url && !_katexT.protocol) {
        var katexValue1153 = katexValue9(_katexT.url);
        if (katexValue1153 == null) return !1;
        _katexT.protocol = katexValue1153;
      }
      return !!(typeof this.trust == `function`
        ? this.trust(_katexT)
        : this.trust);
    }
  },
  katexValue11 = class {
    constructor(_katexT, katexParam408, katexParam409) {
      ((this.id = _katexT),
        (this.size = katexParam408),
        (this.cramped = katexParam409));
    }
    sup() {
      return katexValue20[katexValue21[this.id]];
    }
    sub() {
      return katexValue20[katexValue22[this.id]];
    }
    fracNum() {
      return katexValue20[katexValue23[this.id]];
    }
    fracDen() {
      return katexValue20[katexValue24[this.id]];
    }
    cramp() {
      return katexValue20[katexValue25[this.id]];
    }
    text() {
      return katexValue20[katexValue26[this.id]];
    }
    isTight() {
      return this.size >= 2;
    }
  },
  katexValue12 = 0,
  katexValue13 = 1,
  katexValue14 = 2,
  katexValue15 = 3,
  katexValue16 = 4,
  katexValue17 = 5,
  katexValue18 = 6,
  katexValue19 = 7,
  katexValue20 = [
    new katexValue11(katexValue12, 0, !1),
    new katexValue11(katexValue13, 0, !0),
    new katexValue11(katexValue14, 1, !1),
    new katexValue11(katexValue15, 1, !0),
    new katexValue11(katexValue16, 2, !1),
    new katexValue11(katexValue17, 2, !0),
    new katexValue11(katexValue18, 3, !1),
    new katexValue11(katexValue19, 3, !0),
  ],
  katexValue21 = [
    katexValue16,
    katexValue17,
    katexValue16,
    katexValue17,
    katexValue18,
    katexValue19,
    katexValue18,
    katexValue19,
  ],
  katexValue22 = [
    katexValue17,
    katexValue17,
    katexValue17,
    katexValue17,
    katexValue19,
    katexValue19,
    katexValue19,
    katexValue19,
  ],
  katexValue23 = [
    katexValue14,
    katexValue15,
    katexValue16,
    katexValue17,
    katexValue18,
    katexValue19,
    katexValue18,
    katexValue19,
  ],
  katexValue24 = [
    katexValue15,
    katexValue15,
    katexValue17,
    katexValue17,
    katexValue19,
    katexValue19,
    katexValue19,
    katexValue19,
  ],
  katexValue25 = [
    katexValue13,
    katexValue13,
    katexValue15,
    katexValue15,
    katexValue17,
    katexValue17,
    katexValue19,
    katexValue19,
  ],
  katexValue26 = [
    katexValue12,
    katexValue13,
    katexValue14,
    katexValue15,
    katexValue14,
    katexValue15,
    katexValue14,
    katexValue15,
  ],
  katexValue27 = {
    DISPLAY: katexValue20[katexValue12],
    TEXT: katexValue20[katexValue14],
    SCRIPT: katexValue20[katexValue16],
    SCRIPTSCRIPT: katexValue20[katexValue18],
  },
  katexValue28 = [
    {
      name: `latin`,
      blocks: [
        [256, 591],
        [768, 879],
      ],
    },
    {
      name: `cyrillic`,
      blocks: [[1024, 1279]],
    },
    {
      name: `armenian`,
      blocks: [[1328, 1423]],
    },
    {
      name: `brahmic`,
      blocks: [[2304, 4255]],
    },
    {
      name: `georgian`,
      blocks: [[4256, 4351]],
    },
    {
      name: `cjk`,
      blocks: [
        [12288, 12543],
        [19968, 40879],
        [65280, 65376],
      ],
    },
    {
      name: `hangul`,
      blocks: [[44032, 55215]],
    },
  ];
function katexHelper2(_katexT) {
  for (
    var katexValue1173 = 0;
    katexValue1173 < katexValue28.length;
    katexValue1173++
  )
    for (
      var katexValue1174 = katexValue28[katexValue1173], katexValue1175 = 0;
      katexValue1175 < katexValue1174.blocks.length;
      katexValue1175++
    ) {
      var katexValue1176 = katexValue1174.blocks[katexValue1175];
      if (_katexT >= katexValue1176[0] && _katexT <= katexValue1176[1])
        return katexValue1174.name;
    }
  return null;
}
var katexValue29 = [];
katexValue28.forEach((_katexT) =>
  _katexT.blocks.forEach((__katexT) => katexValue29.push(...__katexT)),
);
function katexHelper3(_katexT) {
  for (
    var katexValue1255 = 0;
    katexValue1255 < katexValue29.length;
    katexValue1255 += 2
  )
    if (
      _katexT >= katexValue29[katexValue1255] &&
      _katexT <= katexValue29[katexValue1255 + 1]
    )
      return !0;
  return !1;
}
var katexValue30 = (_katexT) => _katexT + ` ` + _katexT,
  katexValue31 = 80,
  katexValue32 = function (_katexT, katexParam69) {
    return (
      `M95,` +
      (622 + _katexT + katexParam69) +
      `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` +
      _katexT / 2.075 +
      ` -` +
      _katexT +
      `
c5.3,-9.3,12,-14,20,-14
H400000v` +
      (40 + _katexT) +
      `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` +
      (834 + _katexT) +
      ` ` +
      katexParam69 +
      `h400000v` +
      (40 + _katexT) +
      `h-400000z`
    );
  },
  katexValue33 = function (_katexT, katexParam65) {
    return (
      `M263,` +
      (601 + _katexT + katexParam65) +
      `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` +
      _katexT / 2.084 +
      ` -` +
      _katexT +
      `
c4.7,-7.3,11,-11,19,-11
H40000v` +
      (40 + _katexT) +
      `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` +
      (1001 + _katexT) +
      ` ` +
      katexParam65 +
      `h400000v` +
      (40 + _katexT) +
      `h-400000z`
    );
  },
  katexValue34 = function (_katexT, katexParam72) {
    return (
      `M983 ` +
      (10 + _katexT + katexParam72) +
      `
l` +
      _katexT / 3.13 +
      ` -` +
      _katexT +
      `
c4,-6.7,10,-10,18,-10 H400000v` +
      (40 + _katexT) +
      `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` +
      (1001 + _katexT) +
      ` ` +
      katexParam72 +
      `h400000v` +
      (40 + _katexT) +
      `h-400000z`
    );
  },
  katexValue35 = function (_katexT, katexParam66) {
    return (
      `M424,` +
      (2398 + _katexT + katexParam66) +
      `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` +
      _katexT / 4.223 +
      ` -` +
      _katexT +
      `c4,-6.7,10,-10,18,-10 H400000
v` +
      (40 + _katexT) +
      `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` +
      (1001 + _katexT) +
      ` ` +
      katexParam66 +
      `
h400000v` +
      (40 + _katexT) +
      `h-400000z`
    );
  },
  katexValue36 = function (_katexT, katexParam75) {
    return (
      `M473,` +
      (2713 + _katexT + katexParam75) +
      `
c339.3,-1799.3,509.3,-2700,510,-2702 l` +
      _katexT / 5.298 +
      ` -` +
      _katexT +
      `
c3.3,-7.3,9.3,-11,18,-11 H400000v` +
      (40 + _katexT) +
      `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` +
      (1001 + _katexT) +
      ` ` +
      katexParam75 +
      `h400000v` +
      (40 + _katexT) +
      `H1017.7z`
    );
  },
  katexValue37 = function (_katexT) {
    var katexValue1254 = _katexT / 2;
    return (
      `M400000 ` +
      _katexT +
      ` H0 L` +
      katexValue1254 +
      ` 0 l65 45 L145 ` +
      (_katexT - 80) +
      ` H400000z`
    );
  },
  katexValue38 = function (_katexT, katexParam133, katexParam134) {
    var katexValue916 = katexParam134 - 54 - katexParam133 - _katexT;
    return (
      `M702 ` +
      (_katexT + katexParam133) +
      `H400000` +
      (40 + _katexT) +
      `
H742v` +
      katexValue916 +
      `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` +
      katexParam133 +
      `H400000v` +
      (40 + _katexT) +
      `H742z`
    );
  },
  katexValue39 = function (_katexT, katexParam194, katexParam195) {
    katexParam194 = 1e3 * katexParam194;
    var katexValue1047 = ``;
    switch (_katexT) {
      case `sqrtMain`:
        katexValue1047 = katexValue32(katexParam194, katexValue31);
        break;
      case `sqrtSize1`:
        katexValue1047 = katexValue33(katexParam194, katexValue31);
        break;
      case `sqrtSize2`:
        katexValue1047 = katexValue34(katexParam194, katexValue31);
        break;
      case `sqrtSize3`:
        katexValue1047 = katexValue35(katexParam194, katexValue31);
        break;
      case `sqrtSize4`:
        katexValue1047 = katexValue36(katexParam194, katexValue31);
        break;
      case `sqrtTall`:
        katexValue1047 = katexValue38(
          katexParam194,
          katexValue31,
          katexParam195,
        );
    }
    return katexValue1047;
  },
  _e = function (_katexT, katexParam80) {
    switch (_katexT) {
      case `⎜`:
        return katexValue30(`M291 0 H417 V` + katexParam80 + ` H291z`);
      case `∣`:
        return katexValue30(`M145 0 H188 V` + katexParam80 + ` H145z`);
      case `∥`:
        return (
          katexValue30(`M145 0 H188 V` + katexParam80 + ` H145z`) +
          katexValue30(`M367 0 H410 V` + katexParam80 + ` H367z`)
        );
      case `⎟`:
        return katexValue30(`M457 0 H583 V` + katexParam80 + ` H457z`);
      case `⎢`:
        return katexValue30(`M319 0 H403 V` + katexParam80 + ` H319z`);
      case `⎥`:
        return katexValue30(`M263 0 H347 V` + katexParam80 + ` H263z`);
      case `⎪`:
        return katexValue30(`M384 0 H504 V` + katexParam80 + ` H384z`);
      case `⏐`:
        return katexValue30(`M312 0 H355 V` + katexParam80 + ` H312z`);
      case `‖`:
        return (
          katexValue30(`M257 0 H300 V` + katexParam80 + ` H257z`) +
          katexValue30(`M478 0 H521 V` + katexParam80 + ` H478z`)
        );
      default:
        return ``;
    }
  },
  katexValue40 = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: katexValue30(`M40 281 V428 H0 V94 H40 V241 H400000 v40z`),
    leftbracketunder: katexValue30(`M0 0 h120 V290 H399995 v120 H0z`),
    leftbracketover: katexValue30(`M0 440 h120 V150 H399995 v-120 H0z`),
    leftmapsto: katexValue30(`M40 281 V448H0V74H40V241H400000v40z`),
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: katexValue30(`M0 50 h400000 v40H0z m0 194h40000v40H0z`),
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: katexValue30(
      `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
    ),
    rightbracketunder: katexValue30(`M399995 0 h-120 V290 H0 v120 H400000z`),
    rightbracketover: katexValue30(`M399995 440 h-120 V150 H0 v-120 H399995z`),
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`,
  },
  katexValue41 = function (_katexT, katexParam3) {
    switch (_katexT) {
      case `lbrack`:
        return (
          `M403 1759 V84 H666 V0 H319 V1759 v` +
          katexParam3 +
          ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` +
          katexParam3 +
          ` v1759 h84z`
        );
      case `rbrack`:
        return (
          `M347 1759 V0 H0 V84 H263 V1759 v` +
          katexParam3 +
          ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` +
          katexParam3 +
          ` v1759 h84z`
        );
      case `vert`:
        return (
          `M145 15 v585 v` +
          katexParam3 +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -katexParam3 +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          katexParam3 +
          ` v585 h43z`
        );
      case `doublevert`:
        return (
          `M145 15 v585 v` +
          katexParam3 +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -katexParam3 +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` +
          katexParam3 +
          ` v585 h43z
M367 15 v585 v` +
          katexParam3 +
          ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` +
          -katexParam3 +
          ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` +
          katexParam3 +
          ` v585 h43z`
        );
      case `lfloor`:
        return (
          `M319 602 V0 H403 V602 v` +
          katexParam3 +
          ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` +
          katexParam3 +
          ` v1715 H319z`
        );
      case `rfloor`:
        return (
          `M319 602 V0 H403 V602 v` +
          katexParam3 +
          ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` +
          katexParam3 +
          ` v1715 H319z`
        );
      case `lceil`:
        return (
          `M403 1759 V84 H666 V0 H319 V1759 v` +
          katexParam3 +
          ` v602 h84z
M403 1759 V0 H319 V1759 v` +
          katexParam3 +
          ` v602 h84z`
        );
      case `rceil`:
        return (
          `M347 1759 V0 H0 V84 H263 V1759 v` +
          katexParam3 +
          ` v602 h84z
M347 1759 V0 h-84 V1759 v` +
          katexParam3 +
          ` v602 h84z`
        );
      case `lparen`:
        return (
          `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` +
          (katexParam3 + 84) +
          `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` +
          (katexParam3 + 92) +
          `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`
        );
      case `rparen`:
        return (
          `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` +
          (katexParam3 + 9) +
          `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` +
          (katexParam3 + 144) +
          `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`
        );
      default:
        throw Error(`Unknown stretchy delimiter.`);
    }
  },
  be = class {
    constructor(_katexT) {
      ((this.children = _katexT),
        (this.classes = []),
        (this.height = 0),
        (this.depth = 0),
        (this.maxFontSize = 0),
        (this.style = {}));
    }
    hasClass(_katexT) {
      return this.classes.includes(_katexT);
    }
    toNode() {
      for (
        var _katexT = document.createDocumentFragment(), katexValue1195 = 0;
        katexValue1195 < this.children.length;
        katexValue1195++
      )
        _katexT.appendChild(this.children[katexValue1195].toNode());
      return _katexT;
    }
    toMarkup() {
      for (
        var _katexT = ``, katexValue1244 = 0;
        katexValue1244 < this.children.length;
        katexValue1244++
      )
        _katexT += this.children[katexValue1244].toMarkup();
      return _katexT;
    }
    toText() {
      return this.children.map((_katexT) => _katexT.toText()).join(``);
    }
  },
  katexValue42 = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800,
  },
  katexValue43 = {
    ex: !0,
    em: !0,
    mu: !0,
  },
  katexValue44 = function (_katexT) {
    return (
      typeof _katexT != `string` && (_katexT = _katexT.unit),
      _katexT in katexValue42 || _katexT in katexValue43 || _katexT === `ex`
    );
  },
  katexValue45 = function (katexParam107, katexParam108) {
    var katexValue850;
    if (katexParam107.unit in katexValue42)
      katexValue850 =
        katexValue42[katexParam107.unit] /
        katexParam108.fontMetrics().ptPerEm /
        katexParam108.sizeMultiplier;
    else if (katexParam107.unit === `mu`)
      katexValue850 = katexParam108.fontMetrics().cssEmPerMu;
    else {
      var katexValue851 = katexParam108.style.isTight()
        ? katexParam108.havingStyle(katexParam108.style.text())
        : katexParam108;
      if (katexParam107.unit === `ex`)
        katexValue850 = katexValue851.fontMetrics().xHeight;
      else if (katexParam107.unit === `em`)
        katexValue850 = katexValue851.fontMetrics().quad;
      else throw new katexT(`Invalid unit: '` + katexParam107.unit + `'`);
      katexValue851 !== katexParam108 &&
        (katexValue850 *=
          katexValue851.sizeMultiplier / katexParam108.sizeMultiplier);
    }
    return Math.min(
      katexParam107.number * katexValue850,
      katexParam108.maxSize,
    );
  },
  katexValue46 = function (_katexT) {
    return +_katexT.toFixed(4) + `em`;
  },
  katexValue47 = function (_katexT) {
    return _katexT.filter((__katexT) => __katexT).join(` `);
  },
  katexValue48 = function (_katexT, katexParam210, katexParam211) {
    if (
      ((this.classes = _katexT || []),
      (this.attributes = {}),
      (this.height = 0),
      (this.depth = 0),
      (this.maxFontSize = 0),
      (this.style = katexParam211 || {}),
      katexParam210)
    ) {
      katexParam210.style.isTight() && this.classes.push(`mtight`);
      var katexValue1083 = katexParam210.getColor();
      katexValue1083 && (this.style.color = katexValue1083);
    }
  },
  katexValue49 = function (_katexT) {
    var katexValue956 = document.createElement(_katexT);
    katexValue956.className = katexValue47(this.classes);
    for (var katexValue957 of Object.keys(this.style))
      katexValue956.style[katexValue957] = this.style[katexValue957];
    for (var katexValue958 of Object.keys(this.attributes))
      katexValue956.setAttribute(katexValue958, this.attributes[katexValue958]);
    for (
      var katexValue959 = 0;
      katexValue959 < this.children.length;
      katexValue959++
    )
      katexValue956.appendChild(this.children[katexValue959].toNode());
    return katexValue956;
  },
  katexValue50 = /[\s"'>/=\x00-\x1f]/,
  katexValue51 = function (katexParam106) {
    var katexValue845 = `<` + katexParam106;
    this.classes.length &&
      (katexValue845 +=
        ` class="` + katexValue5(katexValue47(this.classes)) + `"`);
    var katexValue846 = ``;
    for (var katexValue847 of Object.keys(this.style))
      katexValue846 +=
        katexValue2(katexValue847) + `:` + this.style[katexValue847] + `;`;
    katexValue846 &&
      (katexValue845 += ` style="` + katexValue5(katexValue846) + `"`);
    for (var katexValue848 of Object.keys(this.attributes)) {
      if (katexValue50.test(katexValue848))
        throw new katexT(`Invalid attribute name '` + katexValue848 + `'`);
      katexValue845 +=
        ` ` +
        katexValue848 +
        `="` +
        katexValue5(this.attributes[katexValue848]) +
        `"`;
    }
    katexValue845 += `>`;
    for (
      var katexValue849 = 0;
      katexValue849 < this.children.length;
      katexValue849++
    )
      katexValue845 += this.children[katexValue849].toMarkup();
    return ((katexValue845 += `</` + katexParam106 + `>`), katexValue845);
  },
  katexValue52 = class {
    constructor(_katexT, katexParam401, katexParam402, katexParam403) {
      (katexValue48.call(this, _katexT, katexParam402, katexParam403),
        (this.children = katexParam401 || []));
    }
    setAttribute(_katexT, katexParam447) {
      this.attributes[_katexT] = katexParam447;
    }
    hasClass(_katexT) {
      return this.classes.includes(_katexT);
    }
    toNode() {
      return katexValue49.call(this, `span`);
    }
    toMarkup() {
      return katexValue51.call(this, `span`);
    }
  },
  katexValue53 = class {
    constructor(_katexT, katexParam365, katexParam366, katexParam367) {
      (katexValue48.call(this, katexParam365, katexParam367),
        (this.children = katexParam366 || []),
        this.setAttribute(`href`, _katexT));
    }
    setAttribute(_katexT, katexParam448) {
      this.attributes[_katexT] = katexParam448;
    }
    hasClass(_katexT) {
      return this.classes.includes(_katexT);
    }
    toNode() {
      return katexValue49.call(this, `a`);
    }
    toMarkup() {
      return katexValue51.call(this, `a`);
    }
  },
  katexValue54 = class {
    constructor(_katexT, katexParam317, katexParam318) {
      ((this.alt = katexParam317),
        (this.src = _katexT),
        (this.classes = [`mord`]),
        (this.height = 0),
        (this.depth = 0),
        (this.maxFontSize = 0),
        (this.style = katexParam318));
    }
    hasClass(_katexT) {
      return this.classes.includes(_katexT);
    }
    toNode() {
      var _katexT = document.createElement(`img`);
      ((_katexT.src = this.src),
        (_katexT.alt = this.alt),
        (_katexT.className = `mord`));
      for (var katexValue1143 of Object.keys(this.style))
        _katexT.style[katexValue1143] = this.style[katexValue1143];
      return _katexT;
    }
    toMarkup() {
      var _katexT =
          `<img src="` +
          katexValue5(this.src) +
          `"` +
          (` alt="` + katexValue5(this.alt) + `"`),
        katexValue1104 = ``;
      for (var katexValue1105 of Object.keys(this.style))
        katexValue1104 +=
          katexValue2(katexValue1105) + `:` + this.style[katexValue1105] + `;`;
      return (
        katexValue1104 &&
          (_katexT += ` style="` + katexValue5(katexValue1104) + `"`),
        (_katexT += `'/>`),
        _katexT
      );
    }
  },
  katexValue55 = {
    î: `ı̂`,
    ï: `ı̈`,
    í: `ı́`,
    ì: `ı̀`,
  },
  katexValue56 = class {
    constructor(
      _katexT,
      katexParam152,
      katexParam153,
      katexParam154,
      katexParam155,
      katexParam156,
      katexParam157,
      katexParam158,
    ) {
      ((this.text = _katexT),
        (this.height = katexParam152 || 0),
        (this.depth = katexParam153 || 0),
        (this.italic = katexParam154 || 0),
        (this.skew = katexParam155 || 0),
        (this.width = katexParam156 || 0),
        (this.classes = katexParam157 || []),
        (this.style = katexParam158 || {}),
        (this.maxFontSize = 0));
      var katexValue966 = katexHelper2(this.text.charCodeAt(0));
      (katexValue966 && this.classes.push(katexValue966 + `_fallback`),
        /[îïíì]/.test(this.text) && (this.text = katexValue55[this.text]));
    }
    hasClass(_katexT) {
      return this.classes.includes(_katexT);
    }
    toNode() {
      var _katexT = document.createTextNode(this.text),
        katexValue899 = null;
      (this.italic > 0 &&
        ((katexValue899 = document.createElement(`span`)),
        (katexValue899.style.marginRight = katexValue46(this.italic))),
        this.classes.length > 0 &&
          ((katexValue899 ||= document.createElement(`span`)),
          (katexValue899.className = katexValue47(this.classes))));
      for (var katexValue900 of Object.keys(this.style))
        ((katexValue899 ||= document.createElement(`span`)),
          (katexValue899.style[katexValue900] = this.style[katexValue900]));
      return katexValue899
        ? (katexValue899.appendChild(_katexT), katexValue899)
        : _katexT;
    }
    toMarkup() {
      var _katexT = !1,
        katexValue932 = `<span`;
      this.classes.length &&
        ((_katexT = !0),
        (katexValue932 += ` class="`),
        (katexValue932 += katexValue5(katexValue47(this.classes))),
        (katexValue932 += `"`));
      var katexValue933 = ``;
      this.italic > 0 &&
        (katexValue933 += `margin-right:` + katexValue46(this.italic) + `;`);
      for (var katexValue934 of Object.keys(this.style))
        katexValue933 +=
          katexValue2(katexValue934) + `:` + this.style[katexValue934] + `;`;
      katexValue933 &&
        ((_katexT = !0),
        (katexValue932 += ` style="` + katexValue5(katexValue933) + `"`));
      var katexValue935 = katexValue5(this.text);
      return _katexT
        ? ((katexValue932 += `>`),
          (katexValue932 += katexValue935),
          (katexValue932 += `</span>`),
          katexValue932)
        : katexValue935;
    }
  },
  katexValue57 = class {
    constructor(_katexT, katexParam404) {
      ((this.children = _katexT || []),
        (this.attributes = katexParam404 || {}));
    }
    toNode() {
      var _katexT = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `svg`,
      );
      for (var katexValue1048 of Object.keys(this.attributes))
        _katexT.setAttribute(katexValue1048, this.attributes[katexValue1048]);
      for (
        var katexValue1049 = 0;
        katexValue1049 < this.children.length;
        katexValue1049++
      )
        _katexT.appendChild(this.children[katexValue1049].toNode());
      return _katexT;
    }
    toMarkup() {
      var _katexT = `<svg xmlns="http://www.w3.org/2000/svg"`;
      for (var katexValue1050 of Object.keys(this.attributes))
        _katexT +=
          ` ` +
          katexValue1050 +
          `="` +
          katexValue5(this.attributes[katexValue1050]) +
          `"`;
      _katexT += `>`;
      for (
        var katexValue1051 = 0;
        katexValue1051 < this.children.length;
        katexValue1051++
      )
        _katexT += this.children[katexValue1051].toMarkup();
      return ((_katexT += `</svg>`), _katexT);
    }
  },
  katexValue58 = class {
    constructor(_katexT, katexParam434) {
      ((this.pathName = _katexT), (this.alternate = katexParam434));
    }
    toNode() {
      var _katexT = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `path`,
      );
      return (
        this.alternate
          ? _katexT.setAttribute(`d`, this.alternate)
          : _katexT.setAttribute(`d`, katexValue40[this.pathName]),
        _katexT
      );
    }
    toMarkup() {
      return this.alternate
        ? `<path d="` + katexValue5(this.alternate) + `"/>`
        : `<path d="` + katexValue5(katexValue40[this.pathName]) + `"/>`;
    }
  },
  katexValue59 = class {
    constructor(_katexT) {
      this.attributes = _katexT || {};
    }
    toNode() {
      var _katexT = document.createElementNS(
        `http://www.w3.org/2000/svg`,
        `line`,
      );
      for (var katexValue1144 of Object.keys(this.attributes))
        _katexT.setAttribute(katexValue1144, this.attributes[katexValue1144]);
      return _katexT;
    }
    toMarkup() {
      var _katexT = `<line`;
      for (var katexValue1205 of Object.keys(this.attributes))
        _katexT +=
          ` ` +
          katexValue1205 +
          `="` +
          katexValue5(this.attributes[katexValue1205]) +
          `"`;
      return ((_katexT += `/>`), _katexT);
    }
  };
function katexHelper4(_katexT) {
  if (_katexT instanceof katexValue56) return _katexT;
  throw Error(`Expected symbolNode but got ` + String(_katexT) + `.`);
}
function katexHelper5(_katexT) {
  if (_katexT instanceof katexValue52) return _katexT;
  throw Error(`Expected span<HtmlDomNode> but got ` + String(_katexT) + `.`);
}
var katexValue60 = (_katexT) =>
    _katexT instanceof katexValue52 ||
    _katexT instanceof katexValue53 ||
    _katexT instanceof be,
  katexValue61 = {
    "AMS-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68889, 0, 0, 0.72222],
      66: [0, 0.68889, 0, 0, 0.66667],
      67: [0, 0.68889, 0, 0, 0.72222],
      68: [0, 0.68889, 0, 0, 0.72222],
      69: [0, 0.68889, 0, 0, 0.66667],
      70: [0, 0.68889, 0, 0, 0.61111],
      71: [0, 0.68889, 0, 0, 0.77778],
      72: [0, 0.68889, 0, 0, 0.77778],
      73: [0, 0.68889, 0, 0, 0.38889],
      74: [0.16667, 0.68889, 0, 0, 0.5],
      75: [0, 0.68889, 0, 0, 0.77778],
      76: [0, 0.68889, 0, 0, 0.66667],
      77: [0, 0.68889, 0, 0, 0.94445],
      78: [0, 0.68889, 0, 0, 0.72222],
      79: [0.16667, 0.68889, 0, 0, 0.77778],
      80: [0, 0.68889, 0, 0, 0.61111],
      81: [0.16667, 0.68889, 0, 0, 0.77778],
      82: [0, 0.68889, 0, 0, 0.72222],
      83: [0, 0.68889, 0, 0, 0.55556],
      84: [0, 0.68889, 0, 0, 0.66667],
      85: [0, 0.68889, 0, 0, 0.72222],
      86: [0, 0.68889, 0, 0, 0.72222],
      87: [0, 0.68889, 0, 0, 1],
      88: [0, 0.68889, 0, 0, 0.72222],
      89: [0, 0.68889, 0, 0, 0.72222],
      90: [0, 0.68889, 0, 0, 0.66667],
      107: [0, 0.68889, 0, 0, 0.55556],
      160: [0, 0, 0, 0, 0.25],
      165: [0, 0.675, 0.025, 0, 0.75],
      174: [0.15559, 0.69224, 0, 0, 0.94666],
      240: [0, 0.68889, 0, 0, 0.55556],
      295: [0, 0.68889, 0, 0, 0.54028],
      710: [0, 0.825, 0, 0, 2.33334],
      732: [0, 0.9, 0, 0, 2.33334],
      770: [0, 0.825, 0, 0, 2.33334],
      771: [0, 0.9, 0, 0, 2.33334],
      989: [0.08167, 0.58167, 0, 0, 0.77778],
      1008: [0, 0.43056, 0.04028, 0, 0.66667],
      8245: [0, 0.54986, 0, 0, 0.275],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8487: [0, 0.68889, 0, 0, 0.72222],
      8498: [0, 0.68889, 0, 0, 0.55556],
      8502: [0, 0.68889, 0, 0, 0.66667],
      8503: [0, 0.68889, 0, 0, 0.44445],
      8504: [0, 0.68889, 0, 0, 0.66667],
      8513: [0, 0.68889, 0, 0, 0.63889],
      8592: [-0.03598, 0.46402, 0, 0, 0.5],
      8594: [-0.03598, 0.46402, 0, 0, 0.5],
      8602: [-0.13313, 0.36687, 0, 0, 1],
      8603: [-0.13313, 0.36687, 0, 0, 1],
      8606: [0.01354, 0.52239, 0, 0, 1],
      8608: [0.01354, 0.52239, 0, 0, 1],
      8610: [0.01354, 0.52239, 0, 0, 1.11111],
      8611: [0.01354, 0.52239, 0, 0, 1.11111],
      8619: [0, 0.54986, 0, 0, 1],
      8620: [0, 0.54986, 0, 0, 1],
      8621: [-0.13313, 0.37788, 0, 0, 1.38889],
      8622: [-0.13313, 0.36687, 0, 0, 1],
      8624: [0, 0.69224, 0, 0, 0.5],
      8625: [0, 0.69224, 0, 0, 0.5],
      8630: [0, 0.43056, 0, 0, 1],
      8631: [0, 0.43056, 0, 0, 1],
      8634: [0.08198, 0.58198, 0, 0, 0.77778],
      8635: [0.08198, 0.58198, 0, 0, 0.77778],
      8638: [0.19444, 0.69224, 0, 0, 0.41667],
      8639: [0.19444, 0.69224, 0, 0, 0.41667],
      8642: [0.19444, 0.69224, 0, 0, 0.41667],
      8643: [0.19444, 0.69224, 0, 0, 0.41667],
      8644: [0.1808, 0.675, 0, 0, 1],
      8646: [0.1808, 0.675, 0, 0, 1],
      8647: [0.1808, 0.675, 0, 0, 1],
      8648: [0.19444, 0.69224, 0, 0, 0.83334],
      8649: [0.1808, 0.675, 0, 0, 1],
      8650: [0.19444, 0.69224, 0, 0, 0.83334],
      8651: [0.01354, 0.52239, 0, 0, 1],
      8652: [0.01354, 0.52239, 0, 0, 1],
      8653: [-0.13313, 0.36687, 0, 0, 1],
      8654: [-0.13313, 0.36687, 0, 0, 1],
      8655: [-0.13313, 0.36687, 0, 0, 1],
      8666: [0.13667, 0.63667, 0, 0, 1],
      8667: [0.13667, 0.63667, 0, 0, 1],
      8669: [-0.13313, 0.37788, 0, 0, 1],
      8672: [-0.064, 0.437, 0, 0, 1.334],
      8674: [-0.064, 0.437, 0, 0, 1.334],
      8705: [0, 0.825, 0, 0, 0.5],
      8708: [0, 0.68889, 0, 0, 0.55556],
      8709: [0.08167, 0.58167, 0, 0, 0.77778],
      8717: [0, 0.43056, 0, 0, 0.42917],
      8722: [-0.03598, 0.46402, 0, 0, 0.5],
      8724: [0.08198, 0.69224, 0, 0, 0.77778],
      8726: [0.08167, 0.58167, 0, 0, 0.77778],
      8733: [0, 0.69224, 0, 0, 0.77778],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8737: [0, 0.69224, 0, 0, 0.72222],
      8738: [0.03517, 0.52239, 0, 0, 0.72222],
      8739: [0.08167, 0.58167, 0, 0, 0.22222],
      8740: [0.25142, 0.74111, 0, 0, 0.27778],
      8741: [0.08167, 0.58167, 0, 0, 0.38889],
      8742: [0.25142, 0.74111, 0, 0, 0.5],
      8756: [0, 0.69224, 0, 0, 0.66667],
      8757: [0, 0.69224, 0, 0, 0.66667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8765: [-0.13313, 0.37788, 0, 0, 0.77778],
      8769: [-0.13313, 0.36687, 0, 0, 0.77778],
      8770: [-0.03625, 0.46375, 0, 0, 0.77778],
      8774: [0.30274, 0.79383, 0, 0, 0.77778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8778: [0.08167, 0.58167, 0, 0, 0.77778],
      8782: [0.06062, 0.54986, 0, 0, 0.77778],
      8783: [0.06062, 0.54986, 0, 0, 0.77778],
      8785: [0.08198, 0.58198, 0, 0, 0.77778],
      8786: [0.08198, 0.58198, 0, 0, 0.77778],
      8787: [0.08198, 0.58198, 0, 0, 0.77778],
      8790: [0, 0.69224, 0, 0, 0.77778],
      8791: [0.22958, 0.72958, 0, 0, 0.77778],
      8796: [0.08198, 0.91667, 0, 0, 0.77778],
      8806: [0.25583, 0.75583, 0, 0, 0.77778],
      8807: [0.25583, 0.75583, 0, 0, 0.77778],
      8808: [0.25142, 0.75726, 0, 0, 0.77778],
      8809: [0.25142, 0.75726, 0, 0, 0.77778],
      8812: [0.25583, 0.75583, 0, 0, 0.5],
      8814: [0.20576, 0.70576, 0, 0, 0.77778],
      8815: [0.20576, 0.70576, 0, 0, 0.77778],
      8816: [0.30274, 0.79383, 0, 0, 0.77778],
      8817: [0.30274, 0.79383, 0, 0, 0.77778],
      8818: [0.22958, 0.72958, 0, 0, 0.77778],
      8819: [0.22958, 0.72958, 0, 0, 0.77778],
      8822: [0.1808, 0.675, 0, 0, 0.77778],
      8823: [0.1808, 0.675, 0, 0, 0.77778],
      8828: [0.13667, 0.63667, 0, 0, 0.77778],
      8829: [0.13667, 0.63667, 0, 0, 0.77778],
      8830: [0.22958, 0.72958, 0, 0, 0.77778],
      8831: [0.22958, 0.72958, 0, 0, 0.77778],
      8832: [0.20576, 0.70576, 0, 0, 0.77778],
      8833: [0.20576, 0.70576, 0, 0, 0.77778],
      8840: [0.30274, 0.79383, 0, 0, 0.77778],
      8841: [0.30274, 0.79383, 0, 0, 0.77778],
      8842: [0.13597, 0.63597, 0, 0, 0.77778],
      8843: [0.13597, 0.63597, 0, 0, 0.77778],
      8847: [0.03517, 0.54986, 0, 0, 0.77778],
      8848: [0.03517, 0.54986, 0, 0, 0.77778],
      8858: [0.08198, 0.58198, 0, 0, 0.77778],
      8859: [0.08198, 0.58198, 0, 0, 0.77778],
      8861: [0.08198, 0.58198, 0, 0, 0.77778],
      8862: [0, 0.675, 0, 0, 0.77778],
      8863: [0, 0.675, 0, 0, 0.77778],
      8864: [0, 0.675, 0, 0, 0.77778],
      8865: [0, 0.675, 0, 0, 0.77778],
      8872: [0, 0.69224, 0, 0, 0.61111],
      8873: [0, 0.69224, 0, 0, 0.72222],
      8874: [0, 0.69224, 0, 0, 0.88889],
      8876: [0, 0.68889, 0, 0, 0.61111],
      8877: [0, 0.68889, 0, 0, 0.61111],
      8878: [0, 0.68889, 0, 0, 0.72222],
      8879: [0, 0.68889, 0, 0, 0.72222],
      8882: [0.03517, 0.54986, 0, 0, 0.77778],
      8883: [0.03517, 0.54986, 0, 0, 0.77778],
      8884: [0.13667, 0.63667, 0, 0, 0.77778],
      8885: [0.13667, 0.63667, 0, 0, 0.77778],
      8888: [0, 0.54986, 0, 0, 1.11111],
      8890: [0.19444, 0.43056, 0, 0, 0.55556],
      8891: [0.19444, 0.69224, 0, 0, 0.61111],
      8892: [0.19444, 0.69224, 0, 0, 0.61111],
      8901: [0, 0.54986, 0, 0, 0.27778],
      8903: [0.08167, 0.58167, 0, 0, 0.77778],
      8905: [0.08167, 0.58167, 0, 0, 0.77778],
      8906: [0.08167, 0.58167, 0, 0, 0.77778],
      8907: [0, 0.69224, 0, 0, 0.77778],
      8908: [0, 0.69224, 0, 0, 0.77778],
      8909: [-0.03598, 0.46402, 0, 0, 0.77778],
      8910: [0, 0.54986, 0, 0, 0.76042],
      8911: [0, 0.54986, 0, 0, 0.76042],
      8912: [0.03517, 0.54986, 0, 0, 0.77778],
      8913: [0.03517, 0.54986, 0, 0, 0.77778],
      8914: [0, 0.54986, 0, 0, 0.66667],
      8915: [0, 0.54986, 0, 0, 0.66667],
      8916: [0, 0.69224, 0, 0, 0.66667],
      8918: [0.0391, 0.5391, 0, 0, 0.77778],
      8919: [0.0391, 0.5391, 0, 0, 0.77778],
      8920: [0.03517, 0.54986, 0, 0, 1.33334],
      8921: [0.03517, 0.54986, 0, 0, 1.33334],
      8922: [0.38569, 0.88569, 0, 0, 0.77778],
      8923: [0.38569, 0.88569, 0, 0, 0.77778],
      8926: [0.13667, 0.63667, 0, 0, 0.77778],
      8927: [0.13667, 0.63667, 0, 0, 0.77778],
      8928: [0.30274, 0.79383, 0, 0, 0.77778],
      8929: [0.30274, 0.79383, 0, 0, 0.77778],
      8934: [0.23222, 0.74111, 0, 0, 0.77778],
      8935: [0.23222, 0.74111, 0, 0, 0.77778],
      8936: [0.23222, 0.74111, 0, 0, 0.77778],
      8937: [0.23222, 0.74111, 0, 0, 0.77778],
      8938: [0.20576, 0.70576, 0, 0, 0.77778],
      8939: [0.20576, 0.70576, 0, 0, 0.77778],
      8940: [0.30274, 0.79383, 0, 0, 0.77778],
      8941: [0.30274, 0.79383, 0, 0, 0.77778],
      8994: [0.19444, 0.69224, 0, 0, 0.77778],
      8995: [0.19444, 0.69224, 0, 0, 0.77778],
      9416: [0.15559, 0.69224, 0, 0, 0.90222],
      9484: [0, 0.69224, 0, 0, 0.5],
      9488: [0, 0.69224, 0, 0, 0.5],
      9492: [0, 0.37788, 0, 0, 0.5],
      9496: [0, 0.37788, 0, 0, 0.5],
      9585: [0.19444, 0.68889, 0, 0, 0.88889],
      9586: [0.19444, 0.74111, 0, 0, 0.88889],
      9632: [0, 0.675, 0, 0, 0.77778],
      9633: [0, 0.675, 0, 0, 0.77778],
      9650: [0, 0.54986, 0, 0, 0.72222],
      9651: [0, 0.54986, 0, 0, 0.72222],
      9654: [0.03517, 0.54986, 0, 0, 0.77778],
      9660: [0, 0.54986, 0, 0, 0.72222],
      9661: [0, 0.54986, 0, 0, 0.72222],
      9664: [0.03517, 0.54986, 0, 0, 0.77778],
      9674: [0.11111, 0.69224, 0, 0, 0.66667],
      9733: [0.19444, 0.69224, 0, 0, 0.94445],
      10003: [0, 0.69224, 0, 0, 0.83334],
      10016: [0, 0.69224, 0, 0, 0.83334],
      10731: [0.11111, 0.69224, 0, 0, 0.66667],
      10846: [0.19444, 0.75583, 0, 0, 0.61111],
      10877: [0.13667, 0.63667, 0, 0, 0.77778],
      10878: [0.13667, 0.63667, 0, 0, 0.77778],
      10885: [0.25583, 0.75583, 0, 0, 0.77778],
      10886: [0.25583, 0.75583, 0, 0, 0.77778],
      10887: [0.13597, 0.63597, 0, 0, 0.77778],
      10888: [0.13597, 0.63597, 0, 0, 0.77778],
      10889: [0.26167, 0.75726, 0, 0, 0.77778],
      10890: [0.26167, 0.75726, 0, 0, 0.77778],
      10891: [0.48256, 0.98256, 0, 0, 0.77778],
      10892: [0.48256, 0.98256, 0, 0, 0.77778],
      10901: [0.13667, 0.63667, 0, 0, 0.77778],
      10902: [0.13667, 0.63667, 0, 0, 0.77778],
      10933: [0.25142, 0.75726, 0, 0, 0.77778],
      10934: [0.25142, 0.75726, 0, 0, 0.77778],
      10935: [0.26167, 0.75726, 0, 0, 0.77778],
      10936: [0.26167, 0.75726, 0, 0, 0.77778],
      10937: [0.26167, 0.75726, 0, 0, 0.77778],
      10938: [0.26167, 0.75726, 0, 0, 0.77778],
      10949: [0.25583, 0.75583, 0, 0, 0.77778],
      10950: [0.25583, 0.75583, 0, 0, 0.77778],
      10955: [0.28481, 0.79383, 0, 0, 0.77778],
      10956: [0.28481, 0.79383, 0, 0, 0.77778],
      57350: [0.08167, 0.58167, 0, 0, 0.22222],
      57351: [0.08167, 0.58167, 0, 0, 0.38889],
      57352: [0.08167, 0.58167, 0, 0, 0.77778],
      57353: [0, 0.43056, 0.04028, 0, 0.66667],
      57356: [0.25142, 0.75726, 0, 0, 0.77778],
      57357: [0.25142, 0.75726, 0, 0, 0.77778],
      57358: [0.41951, 0.91951, 0, 0, 0.77778],
      57359: [0.30274, 0.79383, 0, 0, 0.77778],
      57360: [0.30274, 0.79383, 0, 0, 0.77778],
      57361: [0.41951, 0.91951, 0, 0, 0.77778],
      57366: [0.25142, 0.75726, 0, 0, 0.77778],
      57367: [0.25142, 0.75726, 0, 0, 0.77778],
      57368: [0.25142, 0.75726, 0, 0, 0.77778],
      57369: [0.25142, 0.75726, 0, 0, 0.77778],
      57370: [0.13597, 0.63597, 0, 0, 0.77778],
      57371: [0.13597, 0.63597, 0, 0, 0.77778],
    },
    "Caligraphic-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.68333, 0, 0.19445, 0.79847],
      66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
      67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
      68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
      69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
      70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
      71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
      72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
      73: [0, 0.68333, 0.07382, 0, 0.54452],
      74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
      75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
      76: [0, 0.68333, 0, 0.13889, 0.68972],
      77: [0, 0.68333, 0, 0.13889, 1.2009],
      78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
      79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
      80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
      81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
      82: [0, 0.68333, 0, 0.08334, 0.8475],
      83: [0, 0.68333, 0.075, 0.13889, 0.60556],
      84: [0, 0.68333, 0.25417, 0, 0.54464],
      85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
      86: [0, 0.68333, 0.08222, 0, 0.61278],
      87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
      88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
      89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
      90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
      160: [0, 0, 0, 0, 0.25],
    },
    "Fraktur-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69141, 0, 0, 0.29574],
      34: [0, 0.69141, 0, 0, 0.21471],
      38: [0, 0.69141, 0, 0, 0.73786],
      39: [0, 0.69141, 0, 0, 0.21201],
      40: [0.24982, 0.74947, 0, 0, 0.38865],
      41: [0.24982, 0.74947, 0, 0, 0.38865],
      42: [0, 0.62119, 0, 0, 0.27764],
      43: [0.08319, 0.58283, 0, 0, 0.75623],
      44: [0, 0.10803, 0, 0, 0.27764],
      45: [0.08319, 0.58283, 0, 0, 0.75623],
      46: [0, 0.10803, 0, 0, 0.27764],
      47: [0.24982, 0.74947, 0, 0, 0.50181],
      48: [0, 0.47534, 0, 0, 0.50181],
      49: [0, 0.47534, 0, 0, 0.50181],
      50: [0, 0.47534, 0, 0, 0.50181],
      51: [0.18906, 0.47534, 0, 0, 0.50181],
      52: [0.18906, 0.47534, 0, 0, 0.50181],
      53: [0.18906, 0.47534, 0, 0, 0.50181],
      54: [0, 0.69141, 0, 0, 0.50181],
      55: [0.18906, 0.47534, 0, 0, 0.50181],
      56: [0, 0.69141, 0, 0, 0.50181],
      57: [0.18906, 0.47534, 0, 0, 0.50181],
      58: [0, 0.47534, 0, 0, 0.21606],
      59: [0.12604, 0.47534, 0, 0, 0.21606],
      61: [-0.13099, 0.36866, 0, 0, 0.75623],
      63: [0, 0.69141, 0, 0, 0.36245],
      65: [0, 0.69141, 0, 0, 0.7176],
      66: [0, 0.69141, 0, 0, 0.88397],
      67: [0, 0.69141, 0, 0, 0.61254],
      68: [0, 0.69141, 0, 0, 0.83158],
      69: [0, 0.69141, 0, 0, 0.66278],
      70: [0.12604, 0.69141, 0, 0, 0.61119],
      71: [0, 0.69141, 0, 0, 0.78539],
      72: [0.06302, 0.69141, 0, 0, 0.7203],
      73: [0, 0.69141, 0, 0, 0.55448],
      74: [0.12604, 0.69141, 0, 0, 0.55231],
      75: [0, 0.69141, 0, 0, 0.66845],
      76: [0, 0.69141, 0, 0, 0.66602],
      77: [0, 0.69141, 0, 0, 1.04953],
      78: [0, 0.69141, 0, 0, 0.83212],
      79: [0, 0.69141, 0, 0, 0.82699],
      80: [0.18906, 0.69141, 0, 0, 0.82753],
      81: [0.03781, 0.69141, 0, 0, 0.82699],
      82: [0, 0.69141, 0, 0, 0.82807],
      83: [0, 0.69141, 0, 0, 0.82861],
      84: [0, 0.69141, 0, 0, 0.66899],
      85: [0, 0.69141, 0, 0, 0.64576],
      86: [0, 0.69141, 0, 0, 0.83131],
      87: [0, 0.69141, 0, 0, 1.04602],
      88: [0, 0.69141, 0, 0, 0.71922],
      89: [0.18906, 0.69141, 0, 0, 0.83293],
      90: [0.12604, 0.69141, 0, 0, 0.60201],
      91: [0.24982, 0.74947, 0, 0, 0.27764],
      93: [0.24982, 0.74947, 0, 0, 0.27764],
      94: [0, 0.69141, 0, 0, 0.49965],
      97: [0, 0.47534, 0, 0, 0.50046],
      98: [0, 0.69141, 0, 0, 0.51315],
      99: [0, 0.47534, 0, 0, 0.38946],
      100: [0, 0.62119, 0, 0, 0.49857],
      101: [0, 0.47534, 0, 0, 0.40053],
      102: [0.18906, 0.69141, 0, 0, 0.32626],
      103: [0.18906, 0.47534, 0, 0, 0.5037],
      104: [0.18906, 0.69141, 0, 0, 0.52126],
      105: [0, 0.69141, 0, 0, 0.27899],
      106: [0, 0.69141, 0, 0, 0.28088],
      107: [0, 0.69141, 0, 0, 0.38946],
      108: [0, 0.69141, 0, 0, 0.27953],
      109: [0, 0.47534, 0, 0, 0.76676],
      110: [0, 0.47534, 0, 0, 0.52666],
      111: [0, 0.47534, 0, 0, 0.48885],
      112: [0.18906, 0.52396, 0, 0, 0.50046],
      113: [0.18906, 0.47534, 0, 0, 0.48912],
      114: [0, 0.47534, 0, 0, 0.38919],
      115: [0, 0.47534, 0, 0, 0.44266],
      116: [0, 0.62119, 0, 0, 0.33301],
      117: [0, 0.47534, 0, 0, 0.5172],
      118: [0, 0.52396, 0, 0, 0.5118],
      119: [0, 0.52396, 0, 0, 0.77351],
      120: [0.18906, 0.47534, 0, 0, 0.38865],
      121: [0.18906, 0.47534, 0, 0, 0.49884],
      122: [0.18906, 0.47534, 0, 0, 0.39054],
      160: [0, 0, 0, 0, 0.25],
      8216: [0, 0.69141, 0, 0, 0.21471],
      8217: [0, 0.69141, 0, 0, 0.21471],
      58112: [0, 0.62119, 0, 0, 0.49749],
      58113: [0, 0.62119, 0, 0, 0.4983],
      58114: [0.18906, 0.69141, 0, 0, 0.33328],
      58115: [0.18906, 0.69141, 0, 0, 0.32923],
      58116: [0.18906, 0.47534, 0, 0, 0.50343],
      58117: [0, 0.69141, 0, 0, 0.33301],
      58118: [0, 0.62119, 0, 0, 0.33409],
      58119: [0, 0.47534, 0, 0, 0.50073],
    },
    "Main-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.35],
      34: [0, 0.69444, 0, 0, 0.60278],
      35: [0.19444, 0.69444, 0, 0, 0.95833],
      36: [0.05556, 0.75, 0, 0, 0.575],
      37: [0.05556, 0.75, 0, 0, 0.95833],
      38: [0, 0.69444, 0, 0, 0.89444],
      39: [0, 0.69444, 0, 0, 0.31944],
      40: [0.25, 0.75, 0, 0, 0.44722],
      41: [0.25, 0.75, 0, 0, 0.44722],
      42: [0, 0.75, 0, 0, 0.575],
      43: [0.13333, 0.63333, 0, 0, 0.89444],
      44: [0.19444, 0.15556, 0, 0, 0.31944],
      45: [0, 0.44444, 0, 0, 0.38333],
      46: [0, 0.15556, 0, 0, 0.31944],
      47: [0.25, 0.75, 0, 0, 0.575],
      48: [0, 0.64444, 0, 0, 0.575],
      49: [0, 0.64444, 0, 0, 0.575],
      50: [0, 0.64444, 0, 0, 0.575],
      51: [0, 0.64444, 0, 0, 0.575],
      52: [0, 0.64444, 0, 0, 0.575],
      53: [0, 0.64444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0, 0.64444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0, 0.64444, 0, 0, 0.575],
      58: [0, 0.44444, 0, 0, 0.31944],
      59: [0.19444, 0.44444, 0, 0, 0.31944],
      60: [0.08556, 0.58556, 0, 0, 0.89444],
      61: [-0.10889, 0.39111, 0, 0, 0.89444],
      62: [0.08556, 0.58556, 0, 0, 0.89444],
      63: [0, 0.69444, 0, 0, 0.54305],
      64: [0, 0.69444, 0, 0, 0.89444],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0, 0, 0.81805],
      67: [0, 0.68611, 0, 0, 0.83055],
      68: [0, 0.68611, 0, 0, 0.88194],
      69: [0, 0.68611, 0, 0, 0.75555],
      70: [0, 0.68611, 0, 0, 0.72361],
      71: [0, 0.68611, 0, 0, 0.90416],
      72: [0, 0.68611, 0, 0, 0.9],
      73: [0, 0.68611, 0, 0, 0.43611],
      74: [0, 0.68611, 0, 0, 0.59444],
      75: [0, 0.68611, 0, 0, 0.90138],
      76: [0, 0.68611, 0, 0, 0.69166],
      77: [0, 0.68611, 0, 0, 1.09166],
      78: [0, 0.68611, 0, 0, 0.9],
      79: [0, 0.68611, 0, 0, 0.86388],
      80: [0, 0.68611, 0, 0, 0.78611],
      81: [0.19444, 0.68611, 0, 0, 0.86388],
      82: [0, 0.68611, 0, 0, 0.8625],
      83: [0, 0.68611, 0, 0, 0.63889],
      84: [0, 0.68611, 0, 0, 0.8],
      85: [0, 0.68611, 0, 0, 0.88472],
      86: [0, 0.68611, 0.01597, 0, 0.86944],
      87: [0, 0.68611, 0.01597, 0, 1.18888],
      88: [0, 0.68611, 0, 0, 0.86944],
      89: [0, 0.68611, 0.02875, 0, 0.86944],
      90: [0, 0.68611, 0, 0, 0.70277],
      91: [0.25, 0.75, 0, 0, 0.31944],
      92: [0.25, 0.75, 0, 0, 0.575],
      93: [0.25, 0.75, 0, 0, 0.31944],
      94: [0, 0.69444, 0, 0, 0.575],
      95: [0.31, 0.13444, 0.03194, 0, 0.575],
      97: [0, 0.44444, 0, 0, 0.55902],
      98: [0, 0.69444, 0, 0, 0.63889],
      99: [0, 0.44444, 0, 0, 0.51111],
      100: [0, 0.69444, 0, 0, 0.63889],
      101: [0, 0.44444, 0, 0, 0.52708],
      102: [0, 0.69444, 0.10903, 0, 0.35139],
      103: [0.19444, 0.44444, 0.01597, 0, 0.575],
      104: [0, 0.69444, 0, 0, 0.63889],
      105: [0, 0.69444, 0, 0, 0.31944],
      106: [0.19444, 0.69444, 0, 0, 0.35139],
      107: [0, 0.69444, 0, 0, 0.60694],
      108: [0, 0.69444, 0, 0, 0.31944],
      109: [0, 0.44444, 0, 0, 0.95833],
      110: [0, 0.44444, 0, 0, 0.63889],
      111: [0, 0.44444, 0, 0, 0.575],
      112: [0.19444, 0.44444, 0, 0, 0.63889],
      113: [0.19444, 0.44444, 0, 0, 0.60694],
      114: [0, 0.44444, 0, 0, 0.47361],
      115: [0, 0.44444, 0, 0, 0.45361],
      116: [0, 0.63492, 0, 0, 0.44722],
      117: [0, 0.44444, 0, 0, 0.63889],
      118: [0, 0.44444, 0.01597, 0, 0.60694],
      119: [0, 0.44444, 0.01597, 0, 0.83055],
      120: [0, 0.44444, 0, 0, 0.60694],
      121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
      122: [0, 0.44444, 0, 0, 0.51111],
      123: [0.25, 0.75, 0, 0, 0.575],
      124: [0.25, 0.75, 0, 0, 0.31944],
      125: [0.25, 0.75, 0, 0, 0.575],
      126: [0.35, 0.34444, 0, 0, 0.575],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.86853],
      168: [0, 0.69444, 0, 0, 0.575],
      172: [0, 0.44444, 0, 0, 0.76666],
      176: [0, 0.69444, 0, 0, 0.86944],
      177: [0.13333, 0.63333, 0, 0, 0.89444],
      184: [0.17014, 0, 0, 0, 0.51111],
      198: [0, 0.68611, 0, 0, 1.04166],
      215: [0.13333, 0.63333, 0, 0, 0.89444],
      216: [0.04861, 0.73472, 0, 0, 0.89444],
      223: [0, 0.69444, 0, 0, 0.59722],
      230: [0, 0.44444, 0, 0, 0.83055],
      247: [0.13333, 0.63333, 0, 0, 0.89444],
      248: [0.09722, 0.54167, 0, 0, 0.575],
      305: [0, 0.44444, 0, 0, 0.31944],
      338: [0, 0.68611, 0, 0, 1.16944],
      339: [0, 0.44444, 0, 0, 0.89444],
      567: [0.19444, 0.44444, 0, 0, 0.35139],
      710: [0, 0.69444, 0, 0, 0.575],
      711: [0, 0.63194, 0, 0, 0.575],
      713: [0, 0.59611, 0, 0, 0.575],
      714: [0, 0.69444, 0, 0, 0.575],
      715: [0, 0.69444, 0, 0, 0.575],
      728: [0, 0.69444, 0, 0, 0.575],
      729: [0, 0.69444, 0, 0, 0.31944],
      730: [0, 0.69444, 0, 0, 0.86944],
      732: [0, 0.69444, 0, 0, 0.575],
      733: [0, 0.69444, 0, 0, 0.575],
      915: [0, 0.68611, 0, 0, 0.69166],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0, 0, 0.89444],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0, 0, 0.76666],
      928: [0, 0.68611, 0, 0, 0.9],
      931: [0, 0.68611, 0, 0, 0.83055],
      933: [0, 0.68611, 0, 0, 0.89444],
      934: [0, 0.68611, 0, 0, 0.83055],
      936: [0, 0.68611, 0, 0, 0.89444],
      937: [0, 0.68611, 0, 0, 0.83055],
      8211: [0, 0.44444, 0.03194, 0, 0.575],
      8212: [0, 0.44444, 0.03194, 0, 1.14999],
      8216: [0, 0.69444, 0, 0, 0.31944],
      8217: [0, 0.69444, 0, 0, 0.31944],
      8220: [0, 0.69444, 0, 0, 0.60278],
      8221: [0, 0.69444, 0, 0, 0.60278],
      8224: [0.19444, 0.69444, 0, 0, 0.51111],
      8225: [0.19444, 0.69444, 0, 0, 0.51111],
      8242: [0, 0.55556, 0, 0, 0.34444],
      8407: [0, 0.72444, 0.15486, 0, 0.575],
      8463: [0, 0.69444, 0, 0, 0.66759],
      8465: [0, 0.69444, 0, 0, 0.83055],
      8467: [0, 0.69444, 0, 0, 0.47361],
      8472: [0.19444, 0.44444, 0, 0, 0.74027],
      8476: [0, 0.69444, 0, 0, 0.83055],
      8501: [0, 0.69444, 0, 0, 0.70277],
      8592: [-0.10889, 0.39111, 0, 0, 1.14999],
      8593: [0.19444, 0.69444, 0, 0, 0.575],
      8594: [-0.10889, 0.39111, 0, 0, 1.14999],
      8595: [0.19444, 0.69444, 0, 0, 0.575],
      8596: [-0.10889, 0.39111, 0, 0, 1.14999],
      8597: [0.25, 0.75, 0, 0, 0.575],
      8598: [0.19444, 0.69444, 0, 0, 1.14999],
      8599: [0.19444, 0.69444, 0, 0, 1.14999],
      8600: [0.19444, 0.69444, 0, 0, 1.14999],
      8601: [0.19444, 0.69444, 0, 0, 1.14999],
      8636: [-0.10889, 0.39111, 0, 0, 1.14999],
      8637: [-0.10889, 0.39111, 0, 0, 1.14999],
      8640: [-0.10889, 0.39111, 0, 0, 1.14999],
      8641: [-0.10889, 0.39111, 0, 0, 1.14999],
      8656: [-0.10889, 0.39111, 0, 0, 1.14999],
      8657: [0.19444, 0.69444, 0, 0, 0.70277],
      8658: [-0.10889, 0.39111, 0, 0, 1.14999],
      8659: [0.19444, 0.69444, 0, 0, 0.70277],
      8660: [-0.10889, 0.39111, 0, 0, 1.14999],
      8661: [0.25, 0.75, 0, 0, 0.70277],
      8704: [0, 0.69444, 0, 0, 0.63889],
      8706: [0, 0.69444, 0.06389, 0, 0.62847],
      8707: [0, 0.69444, 0, 0, 0.63889],
      8709: [0.05556, 0.75, 0, 0, 0.575],
      8711: [0, 0.68611, 0, 0, 0.95833],
      8712: [0.08556, 0.58556, 0, 0, 0.76666],
      8715: [0.08556, 0.58556, 0, 0, 0.76666],
      8722: [0.13333, 0.63333, 0, 0, 0.89444],
      8723: [0.13333, 0.63333, 0, 0, 0.89444],
      8725: [0.25, 0.75, 0, 0, 0.575],
      8726: [0.25, 0.75, 0, 0, 0.575],
      8727: [-0.02778, 0.47222, 0, 0, 0.575],
      8728: [-0.02639, 0.47361, 0, 0, 0.575],
      8729: [-0.02639, 0.47361, 0, 0, 0.575],
      8730: [0.18, 0.82, 0, 0, 0.95833],
      8733: [0, 0.44444, 0, 0, 0.89444],
      8734: [0, 0.44444, 0, 0, 1.14999],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.31944],
      8741: [0.25, 0.75, 0, 0, 0.575],
      8743: [0, 0.55556, 0, 0, 0.76666],
      8744: [0, 0.55556, 0, 0, 0.76666],
      8745: [0, 0.55556, 0, 0, 0.76666],
      8746: [0, 0.55556, 0, 0, 0.76666],
      8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
      8764: [-0.10889, 0.39111, 0, 0, 0.89444],
      8768: [0.19444, 0.69444, 0, 0, 0.31944],
      8771: [0.00222, 0.50222, 0, 0, 0.89444],
      8773: [0.027, 0.638, 0, 0, 0.894],
      8776: [0.02444, 0.52444, 0, 0, 0.89444],
      8781: [0.00222, 0.50222, 0, 0, 0.89444],
      8801: [0.00222, 0.50222, 0, 0, 0.89444],
      8804: [0.19667, 0.69667, 0, 0, 0.89444],
      8805: [0.19667, 0.69667, 0, 0, 0.89444],
      8810: [0.08556, 0.58556, 0, 0, 1.14999],
      8811: [0.08556, 0.58556, 0, 0, 1.14999],
      8826: [0.08556, 0.58556, 0, 0, 0.89444],
      8827: [0.08556, 0.58556, 0, 0, 0.89444],
      8834: [0.08556, 0.58556, 0, 0, 0.89444],
      8835: [0.08556, 0.58556, 0, 0, 0.89444],
      8838: [0.19667, 0.69667, 0, 0, 0.89444],
      8839: [0.19667, 0.69667, 0, 0, 0.89444],
      8846: [0, 0.55556, 0, 0, 0.76666],
      8849: [0.19667, 0.69667, 0, 0, 0.89444],
      8850: [0.19667, 0.69667, 0, 0, 0.89444],
      8851: [0, 0.55556, 0, 0, 0.76666],
      8852: [0, 0.55556, 0, 0, 0.76666],
      8853: [0.13333, 0.63333, 0, 0, 0.89444],
      8854: [0.13333, 0.63333, 0, 0, 0.89444],
      8855: [0.13333, 0.63333, 0, 0, 0.89444],
      8856: [0.13333, 0.63333, 0, 0, 0.89444],
      8857: [0.13333, 0.63333, 0, 0, 0.89444],
      8866: [0, 0.69444, 0, 0, 0.70277],
      8867: [0, 0.69444, 0, 0, 0.70277],
      8868: [0, 0.69444, 0, 0, 0.89444],
      8869: [0, 0.69444, 0, 0, 0.89444],
      8900: [-0.02639, 0.47361, 0, 0, 0.575],
      8901: [-0.02639, 0.47361, 0, 0, 0.31944],
      8902: [-0.02778, 0.47222, 0, 0, 0.575],
      8968: [0.25, 0.75, 0, 0, 0.51111],
      8969: [0.25, 0.75, 0, 0, 0.51111],
      8970: [0.25, 0.75, 0, 0, 0.51111],
      8971: [0.25, 0.75, 0, 0, 0.51111],
      8994: [-0.13889, 0.36111, 0, 0, 1.14999],
      8995: [-0.13889, 0.36111, 0, 0, 1.14999],
      9651: [0.19444, 0.69444, 0, 0, 1.02222],
      9657: [-0.02778, 0.47222, 0, 0, 0.575],
      9661: [0.19444, 0.69444, 0, 0, 1.02222],
      9667: [-0.02778, 0.47222, 0, 0, 0.575],
      9711: [0.19444, 0.69444, 0, 0, 1.14999],
      9824: [0.12963, 0.69444, 0, 0, 0.89444],
      9825: [0.12963, 0.69444, 0, 0, 0.89444],
      9826: [0.12963, 0.69444, 0, 0, 0.89444],
      9827: [0.12963, 0.69444, 0, 0, 0.89444],
      9837: [0, 0.75, 0, 0, 0.44722],
      9838: [0.19444, 0.69444, 0, 0, 0.44722],
      9839: [0.19444, 0.69444, 0, 0, 0.44722],
      10216: [0.25, 0.75, 0, 0, 0.44722],
      10217: [0.25, 0.75, 0, 0, 0.44722],
      10815: [0, 0.68611, 0, 0, 0.9],
      10927: [0.19667, 0.69667, 0, 0, 0.89444],
      10928: [0.19667, 0.69667, 0, 0, 0.89444],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Main-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.11417, 0, 0.38611],
      34: [0, 0.69444, 0.07939, 0, 0.62055],
      35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
      37: [0.05556, 0.75, 0.12861, 0, 0.94444],
      38: [0, 0.69444, 0.08528, 0, 0.88555],
      39: [0, 0.69444, 0.12945, 0, 0.35555],
      40: [0.25, 0.75, 0.15806, 0, 0.47333],
      41: [0.25, 0.75, 0.03306, 0, 0.47333],
      42: [0, 0.75, 0.14333, 0, 0.59111],
      43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
      44: [0.19444, 0.14722, 0, 0, 0.35555],
      45: [0, 0.44444, 0.02611, 0, 0.41444],
      46: [0, 0.14722, 0, 0, 0.35555],
      47: [0.25, 0.75, 0.15806, 0, 0.59111],
      48: [0, 0.64444, 0.13167, 0, 0.59111],
      49: [0, 0.64444, 0.13167, 0, 0.59111],
      50: [0, 0.64444, 0.13167, 0, 0.59111],
      51: [0, 0.64444, 0.13167, 0, 0.59111],
      52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      53: [0, 0.64444, 0.13167, 0, 0.59111],
      54: [0, 0.64444, 0.13167, 0, 0.59111],
      55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
      56: [0, 0.64444, 0.13167, 0, 0.59111],
      57: [0, 0.64444, 0.13167, 0, 0.59111],
      58: [0, 0.44444, 0.06695, 0, 0.35555],
      59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
      61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
      63: [0, 0.69444, 0.11472, 0, 0.59111],
      64: [0, 0.69444, 0.09208, 0, 0.88555],
      65: [0, 0.68611, 0, 0, 0.86555],
      66: [0, 0.68611, 0.0992, 0, 0.81666],
      67: [0, 0.68611, 0.14208, 0, 0.82666],
      68: [0, 0.68611, 0.09062, 0, 0.87555],
      69: [0, 0.68611, 0.11431, 0, 0.75666],
      70: [0, 0.68611, 0.12903, 0, 0.72722],
      71: [0, 0.68611, 0.07347, 0, 0.89527],
      72: [0, 0.68611, 0.17208, 0, 0.8961],
      73: [0, 0.68611, 0.15681, 0, 0.47166],
      74: [0, 0.68611, 0.145, 0, 0.61055],
      75: [0, 0.68611, 0.14208, 0, 0.89499],
      76: [0, 0.68611, 0, 0, 0.69777],
      77: [0, 0.68611, 0.17208, 0, 1.07277],
      78: [0, 0.68611, 0.17208, 0, 0.8961],
      79: [0, 0.68611, 0.09062, 0, 0.85499],
      80: [0, 0.68611, 0.0992, 0, 0.78721],
      81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
      82: [0, 0.68611, 0.02559, 0, 0.85944],
      83: [0, 0.68611, 0.11264, 0, 0.64999],
      84: [0, 0.68611, 0.12903, 0, 0.7961],
      85: [0, 0.68611, 0.17208, 0, 0.88083],
      86: [0, 0.68611, 0.18625, 0, 0.86555],
      87: [0, 0.68611, 0.18625, 0, 1.15999],
      88: [0, 0.68611, 0.15681, 0, 0.86555],
      89: [0, 0.68611, 0.19803, 0, 0.86555],
      90: [0, 0.68611, 0.14208, 0, 0.70888],
      91: [0.25, 0.75, 0.1875, 0, 0.35611],
      93: [0.25, 0.75, 0.09972, 0, 0.35611],
      94: [0, 0.69444, 0.06709, 0, 0.59111],
      95: [0.31, 0.13444, 0.09811, 0, 0.59111],
      97: [0, 0.44444, 0.09426, 0, 0.59111],
      98: [0, 0.69444, 0.07861, 0, 0.53222],
      99: [0, 0.44444, 0.05222, 0, 0.53222],
      100: [0, 0.69444, 0.10861, 0, 0.59111],
      101: [0, 0.44444, 0.085, 0, 0.53222],
      102: [0.19444, 0.69444, 0.21778, 0, 0.4],
      103: [0.19444, 0.44444, 0.105, 0, 0.53222],
      104: [0, 0.69444, 0.09426, 0, 0.59111],
      105: [0, 0.69326, 0.11387, 0, 0.35555],
      106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
      107: [0, 0.69444, 0.11111, 0, 0.53222],
      108: [0, 0.69444, 0.10861, 0, 0.29666],
      109: [0, 0.44444, 0.09426, 0, 0.94444],
      110: [0, 0.44444, 0.09426, 0, 0.64999],
      111: [0, 0.44444, 0.07861, 0, 0.59111],
      112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
      113: [0.19444, 0.44444, 0.105, 0, 0.53222],
      114: [0, 0.44444, 0.11111, 0, 0.50167],
      115: [0, 0.44444, 0.08167, 0, 0.48694],
      116: [0, 0.63492, 0.09639, 0, 0.385],
      117: [0, 0.44444, 0.09426, 0, 0.62055],
      118: [0, 0.44444, 0.11111, 0, 0.53222],
      119: [0, 0.44444, 0.11111, 0, 0.76777],
      120: [0, 0.44444, 0.12583, 0, 0.56055],
      121: [0.19444, 0.44444, 0.105, 0, 0.56166],
      122: [0, 0.44444, 0.13889, 0, 0.49055],
      126: [0.35, 0.34444, 0.11472, 0, 0.59111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0.11473, 0, 0.59111],
      176: [0, 0.69444, 0, 0, 0.94888],
      184: [0.17014, 0, 0, 0, 0.53222],
      198: [0, 0.68611, 0.11431, 0, 1.02277],
      216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
      223: [0.19444, 0.69444, 0.09736, 0, 0.665],
      230: [0, 0.44444, 0.085, 0, 0.82666],
      248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
      305: [0, 0.44444, 0.09426, 0, 0.35555],
      338: [0, 0.68611, 0.11431, 0, 1.14054],
      339: [0, 0.44444, 0.085, 0, 0.82666],
      567: [0.19444, 0.44444, 0.04611, 0, 0.385],
      710: [0, 0.69444, 0.06709, 0, 0.59111],
      711: [0, 0.63194, 0.08271, 0, 0.59111],
      713: [0, 0.59444, 0.10444, 0, 0.59111],
      714: [0, 0.69444, 0.08528, 0, 0.59111],
      715: [0, 0.69444, 0, 0, 0.59111],
      728: [0, 0.69444, 0.10333, 0, 0.59111],
      729: [0, 0.69444, 0.12945, 0, 0.35555],
      730: [0, 0.69444, 0, 0, 0.94888],
      732: [0, 0.69444, 0.11472, 0, 0.59111],
      733: [0, 0.69444, 0.11472, 0, 0.59111],
      915: [0, 0.68611, 0.12903, 0, 0.69777],
      916: [0, 0.68611, 0, 0, 0.94444],
      920: [0, 0.68611, 0.09062, 0, 0.88555],
      923: [0, 0.68611, 0, 0, 0.80666],
      926: [0, 0.68611, 0.15092, 0, 0.76777],
      928: [0, 0.68611, 0.17208, 0, 0.8961],
      931: [0, 0.68611, 0.11431, 0, 0.82666],
      933: [0, 0.68611, 0.10778, 0, 0.88555],
      934: [0, 0.68611, 0.05632, 0, 0.82666],
      936: [0, 0.68611, 0.10778, 0, 0.88555],
      937: [0, 0.68611, 0.0992, 0, 0.82666],
      8211: [0, 0.44444, 0.09811, 0, 0.59111],
      8212: [0, 0.44444, 0.09811, 0, 1.18221],
      8216: [0, 0.69444, 0.12945, 0, 0.35555],
      8217: [0, 0.69444, 0.12945, 0, 0.35555],
      8220: [0, 0.69444, 0.16772, 0, 0.62055],
      8221: [0, 0.69444, 0.07939, 0, 0.62055],
    },
    "Main-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.12417, 0, 0.30667],
      34: [0, 0.69444, 0.06961, 0, 0.51444],
      35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
      37: [0.05556, 0.75, 0.13639, 0, 0.81777],
      38: [0, 0.69444, 0.09694, 0, 0.76666],
      39: [0, 0.69444, 0.12417, 0, 0.30667],
      40: [0.25, 0.75, 0.16194, 0, 0.40889],
      41: [0.25, 0.75, 0.03694, 0, 0.40889],
      42: [0, 0.75, 0.14917, 0, 0.51111],
      43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
      44: [0.19444, 0.10556, 0, 0, 0.30667],
      45: [0, 0.43056, 0.02826, 0, 0.35778],
      46: [0, 0.10556, 0, 0, 0.30667],
      47: [0.25, 0.75, 0.16194, 0, 0.51111],
      48: [0, 0.64444, 0.13556, 0, 0.51111],
      49: [0, 0.64444, 0.13556, 0, 0.51111],
      50: [0, 0.64444, 0.13556, 0, 0.51111],
      51: [0, 0.64444, 0.13556, 0, 0.51111],
      52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      53: [0, 0.64444, 0.13556, 0, 0.51111],
      54: [0, 0.64444, 0.13556, 0, 0.51111],
      55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
      56: [0, 0.64444, 0.13556, 0, 0.51111],
      57: [0, 0.64444, 0.13556, 0, 0.51111],
      58: [0, 0.43056, 0.0582, 0, 0.30667],
      59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
      61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
      63: [0, 0.69444, 0.1225, 0, 0.51111],
      64: [0, 0.69444, 0.09597, 0, 0.76666],
      65: [0, 0.68333, 0, 0, 0.74333],
      66: [0, 0.68333, 0.10257, 0, 0.70389],
      67: [0, 0.68333, 0.14528, 0, 0.71555],
      68: [0, 0.68333, 0.09403, 0, 0.755],
      69: [0, 0.68333, 0.12028, 0, 0.67833],
      70: [0, 0.68333, 0.13305, 0, 0.65277],
      71: [0, 0.68333, 0.08722, 0, 0.77361],
      72: [0, 0.68333, 0.16389, 0, 0.74333],
      73: [0, 0.68333, 0.15806, 0, 0.38555],
      74: [0, 0.68333, 0.14028, 0, 0.525],
      75: [0, 0.68333, 0.14528, 0, 0.76888],
      76: [0, 0.68333, 0, 0, 0.62722],
      77: [0, 0.68333, 0.16389, 0, 0.89666],
      78: [0, 0.68333, 0.16389, 0, 0.74333],
      79: [0, 0.68333, 0.09403, 0, 0.76666],
      80: [0, 0.68333, 0.10257, 0, 0.67833],
      81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
      82: [0, 0.68333, 0.03868, 0, 0.72944],
      83: [0, 0.68333, 0.11972, 0, 0.56222],
      84: [0, 0.68333, 0.13305, 0, 0.71555],
      85: [0, 0.68333, 0.16389, 0, 0.74333],
      86: [0, 0.68333, 0.18361, 0, 0.74333],
      87: [0, 0.68333, 0.18361, 0, 0.99888],
      88: [0, 0.68333, 0.15806, 0, 0.74333],
      89: [0, 0.68333, 0.19383, 0, 0.74333],
      90: [0, 0.68333, 0.14528, 0, 0.61333],
      91: [0.25, 0.75, 0.1875, 0, 0.30667],
      93: [0.25, 0.75, 0.10528, 0, 0.30667],
      94: [0, 0.69444, 0.06646, 0, 0.51111],
      95: [0.31, 0.12056, 0.09208, 0, 0.51111],
      97: [0, 0.43056, 0.07671, 0, 0.51111],
      98: [0, 0.69444, 0.06312, 0, 0.46],
      99: [0, 0.43056, 0.05653, 0, 0.46],
      100: [0, 0.69444, 0.10333, 0, 0.51111],
      101: [0, 0.43056, 0.07514, 0, 0.46],
      102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
      103: [0.19444, 0.43056, 0.08847, 0, 0.46],
      104: [0, 0.69444, 0.07671, 0, 0.51111],
      105: [0, 0.65536, 0.1019, 0, 0.30667],
      106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
      107: [0, 0.69444, 0.10764, 0, 0.46],
      108: [0, 0.69444, 0.10333, 0, 0.25555],
      109: [0, 0.43056, 0.07671, 0, 0.81777],
      110: [0, 0.43056, 0.07671, 0, 0.56222],
      111: [0, 0.43056, 0.06312, 0, 0.51111],
      112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
      113: [0.19444, 0.43056, 0.08847, 0, 0.46],
      114: [0, 0.43056, 0.10764, 0, 0.42166],
      115: [0, 0.43056, 0.08208, 0, 0.40889],
      116: [0, 0.61508, 0.09486, 0, 0.33222],
      117: [0, 0.43056, 0.07671, 0, 0.53666],
      118: [0, 0.43056, 0.10764, 0, 0.46],
      119: [0, 0.43056, 0.10764, 0, 0.66444],
      120: [0, 0.43056, 0.12042, 0, 0.46389],
      121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
      122: [0, 0.43056, 0.12292, 0, 0.40889],
      126: [0.35, 0.31786, 0.11585, 0, 0.51111],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.66786, 0.10474, 0, 0.51111],
      176: [0, 0.69444, 0, 0, 0.83129],
      184: [0.17014, 0, 0, 0, 0.46],
      198: [0, 0.68333, 0.12028, 0, 0.88277],
      216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
      223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
      230: [0, 0.43056, 0.07514, 0, 0.71555],
      248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
      338: [0, 0.68333, 0.12028, 0, 0.98499],
      339: [0, 0.43056, 0.07514, 0, 0.71555],
      710: [0, 0.69444, 0.06646, 0, 0.51111],
      711: [0, 0.62847, 0.08295, 0, 0.51111],
      713: [0, 0.56167, 0.10333, 0, 0.51111],
      714: [0, 0.69444, 0.09694, 0, 0.51111],
      715: [0, 0.69444, 0, 0, 0.51111],
      728: [0, 0.69444, 0.10806, 0, 0.51111],
      729: [0, 0.66786, 0.11752, 0, 0.30667],
      730: [0, 0.69444, 0, 0, 0.83129],
      732: [0, 0.66786, 0.11585, 0, 0.51111],
      733: [0, 0.69444, 0.1225, 0, 0.51111],
      915: [0, 0.68333, 0.13305, 0, 0.62722],
      916: [0, 0.68333, 0, 0, 0.81777],
      920: [0, 0.68333, 0.09403, 0, 0.76666],
      923: [0, 0.68333, 0, 0, 0.69222],
      926: [0, 0.68333, 0.15294, 0, 0.66444],
      928: [0, 0.68333, 0.16389, 0, 0.74333],
      931: [0, 0.68333, 0.12028, 0, 0.71555],
      933: [0, 0.68333, 0.11111, 0, 0.76666],
      934: [0, 0.68333, 0.05986, 0, 0.71555],
      936: [0, 0.68333, 0.11111, 0, 0.76666],
      937: [0, 0.68333, 0.10257, 0, 0.71555],
      8211: [0, 0.43056, 0.09208, 0, 0.51111],
      8212: [0, 0.43056, 0.09208, 0, 1.02222],
      8216: [0, 0.69444, 0.12417, 0, 0.30667],
      8217: [0, 0.69444, 0.12417, 0, 0.30667],
      8220: [0, 0.69444, 0.1685, 0, 0.51444],
      8221: [0, 0.69444, 0.06961, 0, 0.51444],
      8463: [0, 0.68889, 0, 0, 0.54028],
    },
    "Main-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.27778],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.77778],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.19444, 0.10556, 0, 0, 0.27778],
      45: [0, 0.43056, 0, 0, 0.33333],
      46: [0, 0.10556, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.64444, 0, 0, 0.5],
      49: [0, 0.64444, 0, 0, 0.5],
      50: [0, 0.64444, 0, 0, 0.5],
      51: [0, 0.64444, 0, 0, 0.5],
      52: [0, 0.64444, 0, 0, 0.5],
      53: [0, 0.64444, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0, 0.64444, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0, 0.64444, 0, 0, 0.5],
      58: [0, 0.43056, 0, 0, 0.27778],
      59: [0.19444, 0.43056, 0, 0, 0.27778],
      60: [0.0391, 0.5391, 0, 0, 0.77778],
      61: [-0.13313, 0.36687, 0, 0, 0.77778],
      62: [0.0391, 0.5391, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.77778],
      65: [0, 0.68333, 0, 0, 0.75],
      66: [0, 0.68333, 0, 0, 0.70834],
      67: [0, 0.68333, 0, 0, 0.72222],
      68: [0, 0.68333, 0, 0, 0.76389],
      69: [0, 0.68333, 0, 0, 0.68056],
      70: [0, 0.68333, 0, 0, 0.65278],
      71: [0, 0.68333, 0, 0, 0.78472],
      72: [0, 0.68333, 0, 0, 0.75],
      73: [0, 0.68333, 0, 0, 0.36111],
      74: [0, 0.68333, 0, 0, 0.51389],
      75: [0, 0.68333, 0, 0, 0.77778],
      76: [0, 0.68333, 0, 0, 0.625],
      77: [0, 0.68333, 0, 0, 0.91667],
      78: [0, 0.68333, 0, 0, 0.75],
      79: [0, 0.68333, 0, 0, 0.77778],
      80: [0, 0.68333, 0, 0, 0.68056],
      81: [0.19444, 0.68333, 0, 0, 0.77778],
      82: [0, 0.68333, 0, 0, 0.73611],
      83: [0, 0.68333, 0, 0, 0.55556],
      84: [0, 0.68333, 0, 0, 0.72222],
      85: [0, 0.68333, 0, 0, 0.75],
      86: [0, 0.68333, 0.01389, 0, 0.75],
      87: [0, 0.68333, 0.01389, 0, 1.02778],
      88: [0, 0.68333, 0, 0, 0.75],
      89: [0, 0.68333, 0.025, 0, 0.75],
      90: [0, 0.68333, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.27778],
      92: [0.25, 0.75, 0, 0, 0.5],
      93: [0.25, 0.75, 0, 0, 0.27778],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.31, 0.12056, 0.02778, 0, 0.5],
      97: [0, 0.43056, 0, 0, 0.5],
      98: [0, 0.69444, 0, 0, 0.55556],
      99: [0, 0.43056, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.55556],
      101: [0, 0.43056, 0, 0, 0.44445],
      102: [0, 0.69444, 0.07778, 0, 0.30556],
      103: [0.19444, 0.43056, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.55556],
      105: [0, 0.66786, 0, 0, 0.27778],
      106: [0.19444, 0.66786, 0, 0, 0.30556],
      107: [0, 0.69444, 0, 0, 0.52778],
      108: [0, 0.69444, 0, 0, 0.27778],
      109: [0, 0.43056, 0, 0, 0.83334],
      110: [0, 0.43056, 0, 0, 0.55556],
      111: [0, 0.43056, 0, 0, 0.5],
      112: [0.19444, 0.43056, 0, 0, 0.55556],
      113: [0.19444, 0.43056, 0, 0, 0.52778],
      114: [0, 0.43056, 0, 0, 0.39167],
      115: [0, 0.43056, 0, 0, 0.39445],
      116: [0, 0.61508, 0, 0, 0.38889],
      117: [0, 0.43056, 0, 0, 0.55556],
      118: [0, 0.43056, 0.01389, 0, 0.52778],
      119: [0, 0.43056, 0.01389, 0, 0.72222],
      120: [0, 0.43056, 0, 0, 0.52778],
      121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
      122: [0, 0.43056, 0, 0, 0.44445],
      123: [0.25, 0.75, 0, 0, 0.5],
      124: [0.25, 0.75, 0, 0, 0.27778],
      125: [0.25, 0.75, 0, 0, 0.5],
      126: [0.35, 0.31786, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      163: [0, 0.69444, 0, 0, 0.76909],
      167: [0.19444, 0.69444, 0, 0, 0.44445],
      168: [0, 0.66786, 0, 0, 0.5],
      172: [0, 0.43056, 0, 0, 0.66667],
      176: [0, 0.69444, 0, 0, 0.75],
      177: [0.08333, 0.58333, 0, 0, 0.77778],
      182: [0.19444, 0.69444, 0, 0, 0.61111],
      184: [0.17014, 0, 0, 0, 0.44445],
      198: [0, 0.68333, 0, 0, 0.90278],
      215: [0.08333, 0.58333, 0, 0, 0.77778],
      216: [0.04861, 0.73194, 0, 0, 0.77778],
      223: [0, 0.69444, 0, 0, 0.5],
      230: [0, 0.43056, 0, 0, 0.72222],
      247: [0.08333, 0.58333, 0, 0, 0.77778],
      248: [0.09722, 0.52778, 0, 0, 0.5],
      305: [0, 0.43056, 0, 0, 0.27778],
      338: [0, 0.68333, 0, 0, 1.01389],
      339: [0, 0.43056, 0, 0, 0.77778],
      567: [0.19444, 0.43056, 0, 0, 0.30556],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.62847, 0, 0, 0.5],
      713: [0, 0.56778, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.66786, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.75],
      732: [0, 0.66786, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.68333, 0, 0, 0.625],
      916: [0, 0.68333, 0, 0, 0.83334],
      920: [0, 0.68333, 0, 0, 0.77778],
      923: [0, 0.68333, 0, 0, 0.69445],
      926: [0, 0.68333, 0, 0, 0.66667],
      928: [0, 0.68333, 0, 0, 0.75],
      931: [0, 0.68333, 0, 0, 0.72222],
      933: [0, 0.68333, 0, 0, 0.77778],
      934: [0, 0.68333, 0, 0, 0.72222],
      936: [0, 0.68333, 0, 0, 0.77778],
      937: [0, 0.68333, 0, 0, 0.72222],
      8211: [0, 0.43056, 0.02778, 0, 0.5],
      8212: [0, 0.43056, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
      8224: [0.19444, 0.69444, 0, 0, 0.44445],
      8225: [0.19444, 0.69444, 0, 0, 0.44445],
      8230: [0, 0.123, 0, 0, 1.172],
      8242: [0, 0.55556, 0, 0, 0.275],
      8407: [0, 0.71444, 0.15382, 0, 0.5],
      8463: [0, 0.68889, 0, 0, 0.54028],
      8465: [0, 0.69444, 0, 0, 0.72222],
      8467: [0, 0.69444, 0, 0.11111, 0.41667],
      8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
      8476: [0, 0.69444, 0, 0, 0.72222],
      8501: [0, 0.69444, 0, 0, 0.61111],
      8592: [-0.13313, 0.36687, 0, 0, 1],
      8593: [0.19444, 0.69444, 0, 0, 0.5],
      8594: [-0.13313, 0.36687, 0, 0, 1],
      8595: [0.19444, 0.69444, 0, 0, 0.5],
      8596: [-0.13313, 0.36687, 0, 0, 1],
      8597: [0.25, 0.75, 0, 0, 0.5],
      8598: [0.19444, 0.69444, 0, 0, 1],
      8599: [0.19444, 0.69444, 0, 0, 1],
      8600: [0.19444, 0.69444, 0, 0, 1],
      8601: [0.19444, 0.69444, 0, 0, 1],
      8614: [0.011, 0.511, 0, 0, 1],
      8617: [0.011, 0.511, 0, 0, 1.126],
      8618: [0.011, 0.511, 0, 0, 1.126],
      8636: [-0.13313, 0.36687, 0, 0, 1],
      8637: [-0.13313, 0.36687, 0, 0, 1],
      8640: [-0.13313, 0.36687, 0, 0, 1],
      8641: [-0.13313, 0.36687, 0, 0, 1],
      8652: [0.011, 0.671, 0, 0, 1],
      8656: [-0.13313, 0.36687, 0, 0, 1],
      8657: [0.19444, 0.69444, 0, 0, 0.61111],
      8658: [-0.13313, 0.36687, 0, 0, 1],
      8659: [0.19444, 0.69444, 0, 0, 0.61111],
      8660: [-0.13313, 0.36687, 0, 0, 1],
      8661: [0.25, 0.75, 0, 0, 0.61111],
      8704: [0, 0.69444, 0, 0, 0.55556],
      8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
      8707: [0, 0.69444, 0, 0, 0.55556],
      8709: [0.05556, 0.75, 0, 0, 0.5],
      8711: [0, 0.68333, 0, 0, 0.83334],
      8712: [0.0391, 0.5391, 0, 0, 0.66667],
      8715: [0.0391, 0.5391, 0, 0, 0.66667],
      8722: [0.08333, 0.58333, 0, 0, 0.77778],
      8723: [0.08333, 0.58333, 0, 0, 0.77778],
      8725: [0.25, 0.75, 0, 0, 0.5],
      8726: [0.25, 0.75, 0, 0, 0.5],
      8727: [-0.03472, 0.46528, 0, 0, 0.5],
      8728: [-0.05555, 0.44445, 0, 0, 0.5],
      8729: [-0.05555, 0.44445, 0, 0, 0.5],
      8730: [0.2, 0.8, 0, 0, 0.83334],
      8733: [0, 0.43056, 0, 0, 0.77778],
      8734: [0, 0.43056, 0, 0, 1],
      8736: [0, 0.69224, 0, 0, 0.72222],
      8739: [0.25, 0.75, 0, 0, 0.27778],
      8741: [0.25, 0.75, 0, 0, 0.5],
      8743: [0, 0.55556, 0, 0, 0.66667],
      8744: [0, 0.55556, 0, 0, 0.66667],
      8745: [0, 0.55556, 0, 0, 0.66667],
      8746: [0, 0.55556, 0, 0, 0.66667],
      8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
      8764: [-0.13313, 0.36687, 0, 0, 0.77778],
      8768: [0.19444, 0.69444, 0, 0, 0.27778],
      8771: [-0.03625, 0.46375, 0, 0, 0.77778],
      8773: [-0.022, 0.589, 0, 0, 0.778],
      8776: [-0.01688, 0.48312, 0, 0, 0.77778],
      8781: [-0.03625, 0.46375, 0, 0, 0.77778],
      8784: [-0.133, 0.673, 0, 0, 0.778],
      8801: [-0.03625, 0.46375, 0, 0, 0.77778],
      8804: [0.13597, 0.63597, 0, 0, 0.77778],
      8805: [0.13597, 0.63597, 0, 0, 0.77778],
      8810: [0.0391, 0.5391, 0, 0, 1],
      8811: [0.0391, 0.5391, 0, 0, 1],
      8826: [0.0391, 0.5391, 0, 0, 0.77778],
      8827: [0.0391, 0.5391, 0, 0, 0.77778],
      8834: [0.0391, 0.5391, 0, 0, 0.77778],
      8835: [0.0391, 0.5391, 0, 0, 0.77778],
      8838: [0.13597, 0.63597, 0, 0, 0.77778],
      8839: [0.13597, 0.63597, 0, 0, 0.77778],
      8846: [0, 0.55556, 0, 0, 0.66667],
      8849: [0.13597, 0.63597, 0, 0, 0.77778],
      8850: [0.13597, 0.63597, 0, 0, 0.77778],
      8851: [0, 0.55556, 0, 0, 0.66667],
      8852: [0, 0.55556, 0, 0, 0.66667],
      8853: [0.08333, 0.58333, 0, 0, 0.77778],
      8854: [0.08333, 0.58333, 0, 0, 0.77778],
      8855: [0.08333, 0.58333, 0, 0, 0.77778],
      8856: [0.08333, 0.58333, 0, 0, 0.77778],
      8857: [0.08333, 0.58333, 0, 0, 0.77778],
      8866: [0, 0.69444, 0, 0, 0.61111],
      8867: [0, 0.69444, 0, 0, 0.61111],
      8868: [0, 0.69444, 0, 0, 0.77778],
      8869: [0, 0.69444, 0, 0, 0.77778],
      8872: [0.249, 0.75, 0, 0, 0.867],
      8900: [-0.05555, 0.44445, 0, 0, 0.5],
      8901: [-0.05555, 0.44445, 0, 0, 0.27778],
      8902: [-0.03472, 0.46528, 0, 0, 0.5],
      8904: [0.005, 0.505, 0, 0, 0.9],
      8942: [0.03, 0.903, 0, 0, 0.278],
      8943: [-0.19, 0.313, 0, 0, 1.172],
      8945: [-0.1, 0.823, 0, 0, 1.282],
      8968: [0.25, 0.75, 0, 0, 0.44445],
      8969: [0.25, 0.75, 0, 0, 0.44445],
      8970: [0.25, 0.75, 0, 0, 0.44445],
      8971: [0.25, 0.75, 0, 0, 0.44445],
      8994: [-0.14236, 0.35764, 0, 0, 1],
      8995: [-0.14236, 0.35764, 0, 0, 1],
      9136: [0.244, 0.744, 0, 0, 0.412],
      9137: [0.244, 0.745, 0, 0, 0.412],
      9651: [0.19444, 0.69444, 0, 0, 0.88889],
      9657: [-0.03472, 0.46528, 0, 0, 0.5],
      9661: [0.19444, 0.69444, 0, 0, 0.88889],
      9667: [-0.03472, 0.46528, 0, 0, 0.5],
      9711: [0.19444, 0.69444, 0, 0, 1],
      9824: [0.12963, 0.69444, 0, 0, 0.77778],
      9825: [0.12963, 0.69444, 0, 0, 0.77778],
      9826: [0.12963, 0.69444, 0, 0, 0.77778],
      9827: [0.12963, 0.69444, 0, 0, 0.77778],
      9837: [0, 0.75, 0, 0, 0.38889],
      9838: [0.19444, 0.69444, 0, 0, 0.38889],
      9839: [0.19444, 0.69444, 0, 0, 0.38889],
      10216: [0.25, 0.75, 0, 0, 0.38889],
      10217: [0.25, 0.75, 0, 0, 0.38889],
      10222: [0.244, 0.744, 0, 0, 0.412],
      10223: [0.244, 0.745, 0, 0, 0.412],
      10229: [0.011, 0.511, 0, 0, 1.609],
      10230: [0.011, 0.511, 0, 0, 1.638],
      10231: [0.011, 0.511, 0, 0, 1.859],
      10232: [0.024, 0.525, 0, 0, 1.609],
      10233: [0.024, 0.525, 0, 0, 1.638],
      10234: [0.024, 0.525, 0, 0, 1.858],
      10236: [0.011, 0.511, 0, 0, 1.638],
      10815: [0, 0.68333, 0, 0, 0.75],
      10927: [0.13597, 0.63597, 0, 0, 0.77778],
      10928: [0.13597, 0.63597, 0, 0, 0.77778],
      57376: [0.19444, 0.69444, 0, 0, 0],
    },
    "Math-BoldItalic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.44444, 0, 0, 0.575],
      49: [0, 0.44444, 0, 0, 0.575],
      50: [0, 0.44444, 0, 0, 0.575],
      51: [0.19444, 0.44444, 0, 0, 0.575],
      52: [0.19444, 0.44444, 0, 0, 0.575],
      53: [0.19444, 0.44444, 0, 0, 0.575],
      54: [0, 0.64444, 0, 0, 0.575],
      55: [0.19444, 0.44444, 0, 0, 0.575],
      56: [0, 0.64444, 0, 0, 0.575],
      57: [0.19444, 0.44444, 0, 0, 0.575],
      65: [0, 0.68611, 0, 0, 0.86944],
      66: [0, 0.68611, 0.04835, 0, 0.8664],
      67: [0, 0.68611, 0.06979, 0, 0.81694],
      68: [0, 0.68611, 0.03194, 0, 0.93812],
      69: [0, 0.68611, 0.05451, 0, 0.81007],
      70: [0, 0.68611, 0.15972, 0, 0.68889],
      71: [0, 0.68611, 0, 0, 0.88673],
      72: [0, 0.68611, 0.08229, 0, 0.98229],
      73: [0, 0.68611, 0.07778, 0, 0.51111],
      74: [0, 0.68611, 0.10069, 0, 0.63125],
      75: [0, 0.68611, 0.06979, 0, 0.97118],
      76: [0, 0.68611, 0, 0, 0.75555],
      77: [0, 0.68611, 0.11424, 0, 1.14201],
      78: [0, 0.68611, 0.11424, 0, 0.95034],
      79: [0, 0.68611, 0.03194, 0, 0.83666],
      80: [0, 0.68611, 0.15972, 0, 0.72309],
      81: [0.19444, 0.68611, 0, 0, 0.86861],
      82: [0, 0.68611, 0.00421, 0, 0.87235],
      83: [0, 0.68611, 0.05382, 0, 0.69271],
      84: [0, 0.68611, 0.15972, 0, 0.63663],
      85: [0, 0.68611, 0.11424, 0, 0.80027],
      86: [0, 0.68611, 0.25555, 0, 0.67778],
      87: [0, 0.68611, 0.15972, 0, 1.09305],
      88: [0, 0.68611, 0.07778, 0, 0.94722],
      89: [0, 0.68611, 0.25555, 0, 0.67458],
      90: [0, 0.68611, 0.06979, 0, 0.77257],
      97: [0, 0.44444, 0, 0, 0.63287],
      98: [0, 0.69444, 0, 0, 0.52083],
      99: [0, 0.44444, 0, 0, 0.51342],
      100: [0, 0.69444, 0, 0, 0.60972],
      101: [0, 0.44444, 0, 0, 0.55361],
      102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
      103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
      104: [0, 0.69444, 0, 0, 0.66759],
      105: [0, 0.69326, 0, 0, 0.4048],
      106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
      107: [0, 0.69444, 0.01852, 0, 0.6037],
      108: [0, 0.69444, 0.0088, 0, 0.34815],
      109: [0, 0.44444, 0, 0, 1.0324],
      110: [0, 0.44444, 0, 0, 0.71296],
      111: [0, 0.44444, 0, 0, 0.58472],
      112: [0.19444, 0.44444, 0, 0, 0.60092],
      113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
      114: [0, 0.44444, 0.03194, 0, 0.5287],
      115: [0, 0.44444, 0, 0, 0.53125],
      116: [0, 0.63492, 0, 0, 0.41528],
      117: [0, 0.44444, 0, 0, 0.68102],
      118: [0, 0.44444, 0.03704, 0, 0.56666],
      119: [0, 0.44444, 0.02778, 0, 0.83148],
      120: [0, 0.44444, 0, 0, 0.65903],
      121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
      122: [0, 0.44444, 0.04213, 0, 0.55509],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68611, 0.15972, 0, 0.65694],
      916: [0, 0.68611, 0, 0, 0.95833],
      920: [0, 0.68611, 0.03194, 0, 0.86722],
      923: [0, 0.68611, 0, 0, 0.80555],
      926: [0, 0.68611, 0.07458, 0, 0.84125],
      928: [0, 0.68611, 0.08229, 0, 0.98229],
      931: [0, 0.68611, 0.05451, 0, 0.88507],
      933: [0, 0.68611, 0.15972, 0, 0.67083],
      934: [0, 0.68611, 0, 0, 0.76666],
      936: [0, 0.68611, 0.11653, 0, 0.71402],
      937: [0, 0.68611, 0.04835, 0, 0.8789],
      945: [0, 0.44444, 0, 0, 0.76064],
      946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
      947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
      948: [0, 0.69444, 0.03819, 0, 0.52222],
      949: [0, 0.44444, 0, 0, 0.52882],
      950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
      951: [0.19444, 0.44444, 0.03704, 0, 0.6],
      952: [0, 0.69444, 0.03194, 0, 0.5618],
      953: [0, 0.44444, 0, 0, 0.41204],
      954: [0, 0.44444, 0, 0, 0.66759],
      955: [0, 0.69444, 0, 0, 0.67083],
      956: [0.19444, 0.44444, 0, 0, 0.70787],
      957: [0, 0.44444, 0.06898, 0, 0.57685],
      958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
      959: [0, 0.44444, 0, 0, 0.58472],
      960: [0, 0.44444, 0.03704, 0, 0.68241],
      961: [0.19444, 0.44444, 0, 0, 0.6118],
      962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
      963: [0, 0.44444, 0.03704, 0, 0.68588],
      964: [0, 0.44444, 0.13472, 0, 0.52083],
      965: [0, 0.44444, 0.03704, 0, 0.63055],
      966: [0.19444, 0.44444, 0, 0, 0.74722],
      967: [0.19444, 0.44444, 0, 0, 0.71805],
      968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
      969: [0, 0.44444, 0.03704, 0, 0.71782],
      977: [0, 0.69444, 0, 0, 0.69155],
      981: [0.19444, 0.69444, 0, 0, 0.7125],
      982: [0, 0.44444, 0.03194, 0, 0.975],
      1009: [0.19444, 0.44444, 0, 0, 0.6118],
      1013: [0, 0.44444, 0, 0, 0.48333],
      57649: [0, 0.44444, 0, 0, 0.39352],
      57911: [0.19444, 0.44444, 0, 0, 0.43889],
    },
    "Math-Italic": {
      32: [0, 0, 0, 0, 0.25],
      48: [0, 0.43056, 0, 0, 0.5],
      49: [0, 0.43056, 0, 0, 0.5],
      50: [0, 0.43056, 0, 0, 0.5],
      51: [0.19444, 0.43056, 0, 0, 0.5],
      52: [0.19444, 0.43056, 0, 0, 0.5],
      53: [0.19444, 0.43056, 0, 0, 0.5],
      54: [0, 0.64444, 0, 0, 0.5],
      55: [0.19444, 0.43056, 0, 0, 0.5],
      56: [0, 0.64444, 0, 0, 0.5],
      57: [0.19444, 0.43056, 0, 0, 0.5],
      65: [0, 0.68333, 0, 0.13889, 0.75],
      66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
      67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
      68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
      69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
      70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
      71: [0, 0.68333, 0, 0.08334, 0.78625],
      72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
      74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
      75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
      76: [0, 0.68333, 0, 0.02778, 0.68056],
      77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
      78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
      79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
      81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
      82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
      83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
      84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
      85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
      86: [0, 0.68333, 0.22222, 0, 0.58333],
      87: [0, 0.68333, 0.13889, 0, 0.94445],
      88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
      89: [0, 0.68333, 0.22222, 0, 0.58056],
      90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
      97: [0, 0.43056, 0, 0, 0.52859],
      98: [0, 0.69444, 0, 0, 0.42917],
      99: [0, 0.43056, 0, 0.05556, 0.43276],
      100: [0, 0.69444, 0, 0.16667, 0.52049],
      101: [0, 0.43056, 0, 0.05556, 0.46563],
      102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
      103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
      104: [0, 0.69444, 0, 0, 0.57616],
      105: [0, 0.65952, 0, 0, 0.34451],
      106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
      107: [0, 0.69444, 0.03148, 0, 0.5206],
      108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
      109: [0, 0.43056, 0, 0, 0.87801],
      110: [0, 0.43056, 0, 0, 0.60023],
      111: [0, 0.43056, 0, 0.05556, 0.48472],
      112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
      113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
      114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
      115: [0, 0.43056, 0, 0.05556, 0.46875],
      116: [0, 0.61508, 0, 0.08334, 0.36111],
      117: [0, 0.43056, 0, 0.02778, 0.57246],
      118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
      119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
      120: [0, 0.43056, 0, 0.02778, 0.57153],
      121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
      122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
      160: [0, 0, 0, 0, 0.25],
      915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
      916: [0, 0.68333, 0, 0.16667, 0.83334],
      920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
      923: [0, 0.68333, 0, 0.16667, 0.69445],
      926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
      928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
      931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
      933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
      934: [0, 0.68333, 0, 0.08334, 0.66667],
      936: [0, 0.68333, 0.11, 0.05556, 0.61222],
      937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
      945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
      946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
      947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
      948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
      949: [0, 0.43056, 0, 0.08334, 0.46632],
      950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
      951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
      952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
      953: [0, 0.43056, 0, 0.05556, 0.35394],
      954: [0, 0.43056, 0, 0, 0.57616],
      955: [0, 0.69444, 0, 0, 0.58334],
      956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
      957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
      958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
      959: [0, 0.43056, 0, 0.05556, 0.48472],
      960: [0, 0.43056, 0.03588, 0, 0.57003],
      961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
      963: [0, 0.43056, 0.03588, 0, 0.57141],
      964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
      965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
      966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
      967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
      968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
      969: [0, 0.43056, 0.03588, 0, 0.62245],
      977: [0, 0.69444, 0, 0.08334, 0.59144],
      981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
      982: [0, 0.43056, 0.02778, 0, 0.82813],
      1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
      1013: [0, 0.43056, 0, 0.05556, 0.4059],
      57649: [0, 0.43056, 0, 0.02778, 0.32246],
      57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
    },
    "SansSerif-Bold": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.36667],
      34: [0, 0.69444, 0, 0, 0.55834],
      35: [0.19444, 0.69444, 0, 0, 0.91667],
      36: [0.05556, 0.75, 0, 0, 0.55],
      37: [0.05556, 0.75, 0, 0, 1.02912],
      38: [0, 0.69444, 0, 0, 0.83056],
      39: [0, 0.69444, 0, 0, 0.30556],
      40: [0.25, 0.75, 0, 0, 0.42778],
      41: [0.25, 0.75, 0, 0, 0.42778],
      42: [0, 0.75, 0, 0, 0.55],
      43: [0.11667, 0.61667, 0, 0, 0.85556],
      44: [0.10556, 0.13056, 0, 0, 0.30556],
      45: [0, 0.45833, 0, 0, 0.36667],
      46: [0, 0.13056, 0, 0, 0.30556],
      47: [0.25, 0.75, 0, 0, 0.55],
      48: [0, 0.69444, 0, 0, 0.55],
      49: [0, 0.69444, 0, 0, 0.55],
      50: [0, 0.69444, 0, 0, 0.55],
      51: [0, 0.69444, 0, 0, 0.55],
      52: [0, 0.69444, 0, 0, 0.55],
      53: [0, 0.69444, 0, 0, 0.55],
      54: [0, 0.69444, 0, 0, 0.55],
      55: [0, 0.69444, 0, 0, 0.55],
      56: [0, 0.69444, 0, 0, 0.55],
      57: [0, 0.69444, 0, 0, 0.55],
      58: [0, 0.45833, 0, 0, 0.30556],
      59: [0.10556, 0.45833, 0, 0, 0.30556],
      61: [-0.09375, 0.40625, 0, 0, 0.85556],
      63: [0, 0.69444, 0, 0, 0.51945],
      64: [0, 0.69444, 0, 0, 0.73334],
      65: [0, 0.69444, 0, 0, 0.73334],
      66: [0, 0.69444, 0, 0, 0.73334],
      67: [0, 0.69444, 0, 0, 0.70278],
      68: [0, 0.69444, 0, 0, 0.79445],
      69: [0, 0.69444, 0, 0, 0.64167],
      70: [0, 0.69444, 0, 0, 0.61111],
      71: [0, 0.69444, 0, 0, 0.73334],
      72: [0, 0.69444, 0, 0, 0.79445],
      73: [0, 0.69444, 0, 0, 0.33056],
      74: [0, 0.69444, 0, 0, 0.51945],
      75: [0, 0.69444, 0, 0, 0.76389],
      76: [0, 0.69444, 0, 0, 0.58056],
      77: [0, 0.69444, 0, 0, 0.97778],
      78: [0, 0.69444, 0, 0, 0.79445],
      79: [0, 0.69444, 0, 0, 0.79445],
      80: [0, 0.69444, 0, 0, 0.70278],
      81: [0.10556, 0.69444, 0, 0, 0.79445],
      82: [0, 0.69444, 0, 0, 0.70278],
      83: [0, 0.69444, 0, 0, 0.61111],
      84: [0, 0.69444, 0, 0, 0.73334],
      85: [0, 0.69444, 0, 0, 0.76389],
      86: [0, 0.69444, 0.01528, 0, 0.73334],
      87: [0, 0.69444, 0.01528, 0, 1.03889],
      88: [0, 0.69444, 0, 0, 0.73334],
      89: [0, 0.69444, 0.0275, 0, 0.73334],
      90: [0, 0.69444, 0, 0, 0.67223],
      91: [0.25, 0.75, 0, 0, 0.34306],
      93: [0.25, 0.75, 0, 0, 0.34306],
      94: [0, 0.69444, 0, 0, 0.55],
      95: [0.35, 0.10833, 0.03056, 0, 0.55],
      97: [0, 0.45833, 0, 0, 0.525],
      98: [0, 0.69444, 0, 0, 0.56111],
      99: [0, 0.45833, 0, 0, 0.48889],
      100: [0, 0.69444, 0, 0, 0.56111],
      101: [0, 0.45833, 0, 0, 0.51111],
      102: [0, 0.69444, 0.07639, 0, 0.33611],
      103: [0.19444, 0.45833, 0.01528, 0, 0.55],
      104: [0, 0.69444, 0, 0, 0.56111],
      105: [0, 0.69444, 0, 0, 0.25556],
      106: [0.19444, 0.69444, 0, 0, 0.28611],
      107: [0, 0.69444, 0, 0, 0.53056],
      108: [0, 0.69444, 0, 0, 0.25556],
      109: [0, 0.45833, 0, 0, 0.86667],
      110: [0, 0.45833, 0, 0, 0.56111],
      111: [0, 0.45833, 0, 0, 0.55],
      112: [0.19444, 0.45833, 0, 0, 0.56111],
      113: [0.19444, 0.45833, 0, 0, 0.56111],
      114: [0, 0.45833, 0.01528, 0, 0.37222],
      115: [0, 0.45833, 0, 0, 0.42167],
      116: [0, 0.58929, 0, 0, 0.40417],
      117: [0, 0.45833, 0, 0, 0.56111],
      118: [0, 0.45833, 0.01528, 0, 0.5],
      119: [0, 0.45833, 0.01528, 0, 0.74445],
      120: [0, 0.45833, 0, 0, 0.5],
      121: [0.19444, 0.45833, 0.01528, 0, 0.5],
      122: [0, 0.45833, 0, 0, 0.47639],
      126: [0.35, 0.34444, 0, 0, 0.55],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.69444, 0, 0, 0.55],
      176: [0, 0.69444, 0, 0, 0.73334],
      180: [0, 0.69444, 0, 0, 0.55],
      184: [0.17014, 0, 0, 0, 0.48889],
      305: [0, 0.45833, 0, 0, 0.25556],
      567: [0.19444, 0.45833, 0, 0, 0.28611],
      710: [0, 0.69444, 0, 0, 0.55],
      711: [0, 0.63542, 0, 0, 0.55],
      713: [0, 0.63778, 0, 0, 0.55],
      728: [0, 0.69444, 0, 0, 0.55],
      729: [0, 0.69444, 0, 0, 0.30556],
      730: [0, 0.69444, 0, 0, 0.73334],
      732: [0, 0.69444, 0, 0, 0.55],
      733: [0, 0.69444, 0, 0, 0.55],
      915: [0, 0.69444, 0, 0, 0.58056],
      916: [0, 0.69444, 0, 0, 0.91667],
      920: [0, 0.69444, 0, 0, 0.85556],
      923: [0, 0.69444, 0, 0, 0.67223],
      926: [0, 0.69444, 0, 0, 0.73334],
      928: [0, 0.69444, 0, 0, 0.79445],
      931: [0, 0.69444, 0, 0, 0.79445],
      933: [0, 0.69444, 0, 0, 0.85556],
      934: [0, 0.69444, 0, 0, 0.79445],
      936: [0, 0.69444, 0, 0, 0.85556],
      937: [0, 0.69444, 0, 0, 0.79445],
      8211: [0, 0.45833, 0.03056, 0, 0.55],
      8212: [0, 0.45833, 0.03056, 0, 1.10001],
      8216: [0, 0.69444, 0, 0, 0.30556],
      8217: [0, 0.69444, 0, 0, 0.30556],
      8220: [0, 0.69444, 0, 0, 0.55834],
      8221: [0, 0.69444, 0, 0, 0.55834],
    },
    "SansSerif-Italic": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0.05733, 0, 0.31945],
      34: [0, 0.69444, 0.00316, 0, 0.5],
      35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
      36: [0.05556, 0.75, 0.11156, 0, 0.5],
      37: [0.05556, 0.75, 0.03126, 0, 0.83334],
      38: [0, 0.69444, 0.03058, 0, 0.75834],
      39: [0, 0.69444, 0.07816, 0, 0.27778],
      40: [0.25, 0.75, 0.13164, 0, 0.38889],
      41: [0.25, 0.75, 0.02536, 0, 0.38889],
      42: [0, 0.75, 0.11775, 0, 0.5],
      43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0.01946, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0.13164, 0, 0.5],
      48: [0, 0.65556, 0.11156, 0, 0.5],
      49: [0, 0.65556, 0.11156, 0, 0.5],
      50: [0, 0.65556, 0.11156, 0, 0.5],
      51: [0, 0.65556, 0.11156, 0, 0.5],
      52: [0, 0.65556, 0.11156, 0, 0.5],
      53: [0, 0.65556, 0.11156, 0, 0.5],
      54: [0, 0.65556, 0.11156, 0, 0.5],
      55: [0, 0.65556, 0.11156, 0, 0.5],
      56: [0, 0.65556, 0.11156, 0, 0.5],
      57: [0, 0.65556, 0.11156, 0, 0.5],
      58: [0, 0.44444, 0.02502, 0, 0.27778],
      59: [0.125, 0.44444, 0.02502, 0, 0.27778],
      61: [-0.13, 0.37, 0.05087, 0, 0.77778],
      63: [0, 0.69444, 0.11809, 0, 0.47222],
      64: [0, 0.69444, 0.07555, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0.08293, 0, 0.66667],
      67: [0, 0.69444, 0.11983, 0, 0.63889],
      68: [0, 0.69444, 0.07555, 0, 0.72223],
      69: [0, 0.69444, 0.11983, 0, 0.59722],
      70: [0, 0.69444, 0.13372, 0, 0.56945],
      71: [0, 0.69444, 0.11983, 0, 0.66667],
      72: [0, 0.69444, 0.08094, 0, 0.70834],
      73: [0, 0.69444, 0.13372, 0, 0.27778],
      74: [0, 0.69444, 0.08094, 0, 0.47222],
      75: [0, 0.69444, 0.11983, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0.08094, 0, 0.875],
      78: [0, 0.69444, 0.08094, 0, 0.70834],
      79: [0, 0.69444, 0.07555, 0, 0.73611],
      80: [0, 0.69444, 0.08293, 0, 0.63889],
      81: [0.125, 0.69444, 0.07555, 0, 0.73611],
      82: [0, 0.69444, 0.08293, 0, 0.64584],
      83: [0, 0.69444, 0.09205, 0, 0.55556],
      84: [0, 0.69444, 0.13372, 0, 0.68056],
      85: [0, 0.69444, 0.08094, 0, 0.6875],
      86: [0, 0.69444, 0.1615, 0, 0.66667],
      87: [0, 0.69444, 0.1615, 0, 0.94445],
      88: [0, 0.69444, 0.13372, 0, 0.66667],
      89: [0, 0.69444, 0.17261, 0, 0.66667],
      90: [0, 0.69444, 0.11983, 0, 0.61111],
      91: [0.25, 0.75, 0.15942, 0, 0.28889],
      93: [0.25, 0.75, 0.08719, 0, 0.28889],
      94: [0, 0.69444, 0.0799, 0, 0.5],
      95: [0.35, 0.09444, 0.08616, 0, 0.5],
      97: [0, 0.44444, 0.00981, 0, 0.48056],
      98: [0, 0.69444, 0.03057, 0, 0.51667],
      99: [0, 0.44444, 0.08336, 0, 0.44445],
      100: [0, 0.69444, 0.09483, 0, 0.51667],
      101: [0, 0.44444, 0.06778, 0, 0.44445],
      102: [0, 0.69444, 0.21705, 0, 0.30556],
      103: [0.19444, 0.44444, 0.10836, 0, 0.5],
      104: [0, 0.69444, 0.01778, 0, 0.51667],
      105: [0, 0.67937, 0.09718, 0, 0.23889],
      106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
      107: [0, 0.69444, 0.08336, 0, 0.48889],
      108: [0, 0.69444, 0.09483, 0, 0.23889],
      109: [0, 0.44444, 0.01778, 0, 0.79445],
      110: [0, 0.44444, 0.01778, 0, 0.51667],
      111: [0, 0.44444, 0.06613, 0, 0.5],
      112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
      113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
      114: [0, 0.44444, 0.10836, 0, 0.34167],
      115: [0, 0.44444, 0.0778, 0, 0.38333],
      116: [0, 0.57143, 0.07225, 0, 0.36111],
      117: [0, 0.44444, 0.04169, 0, 0.51667],
      118: [0, 0.44444, 0.10836, 0, 0.46111],
      119: [0, 0.44444, 0.10836, 0, 0.68334],
      120: [0, 0.44444, 0.09169, 0, 0.46111],
      121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
      122: [0, 0.44444, 0.08752, 0, 0.43472],
      126: [0.35, 0.32659, 0.08826, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0.06385, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.73752],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0.04169, 0, 0.23889],
      567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
      710: [0, 0.69444, 0.0799, 0, 0.5],
      711: [0, 0.63194, 0.08432, 0, 0.5],
      713: [0, 0.60889, 0.08776, 0, 0.5],
      714: [0, 0.69444, 0.09205, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0.09483, 0, 0.5],
      729: [0, 0.67937, 0.07774, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.73752],
      732: [0, 0.67659, 0.08826, 0, 0.5],
      733: [0, 0.69444, 0.09205, 0, 0.5],
      915: [0, 0.69444, 0.13372, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0.07555, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0.12816, 0, 0.66667],
      928: [0, 0.69444, 0.08094, 0, 0.70834],
      931: [0, 0.69444, 0.11983, 0, 0.72222],
      933: [0, 0.69444, 0.09031, 0, 0.77778],
      934: [0, 0.69444, 0.04603, 0, 0.72222],
      936: [0, 0.69444, 0.09031, 0, 0.77778],
      937: [0, 0.69444, 0.08293, 0, 0.72222],
      8211: [0, 0.44444, 0.08616, 0, 0.5],
      8212: [0, 0.44444, 0.08616, 0, 1],
      8216: [0, 0.69444, 0.07816, 0, 0.27778],
      8217: [0, 0.69444, 0.07816, 0, 0.27778],
      8220: [0, 0.69444, 0.14205, 0, 0.5],
      8221: [0, 0.69444, 0.00316, 0, 0.5],
    },
    "SansSerif-Regular": {
      32: [0, 0, 0, 0, 0.25],
      33: [0, 0.69444, 0, 0, 0.31945],
      34: [0, 0.69444, 0, 0, 0.5],
      35: [0.19444, 0.69444, 0, 0, 0.83334],
      36: [0.05556, 0.75, 0, 0, 0.5],
      37: [0.05556, 0.75, 0, 0, 0.83334],
      38: [0, 0.69444, 0, 0, 0.75834],
      39: [0, 0.69444, 0, 0, 0.27778],
      40: [0.25, 0.75, 0, 0, 0.38889],
      41: [0.25, 0.75, 0, 0, 0.38889],
      42: [0, 0.75, 0, 0, 0.5],
      43: [0.08333, 0.58333, 0, 0, 0.77778],
      44: [0.125, 0.08333, 0, 0, 0.27778],
      45: [0, 0.44444, 0, 0, 0.33333],
      46: [0, 0.08333, 0, 0, 0.27778],
      47: [0.25, 0.75, 0, 0, 0.5],
      48: [0, 0.65556, 0, 0, 0.5],
      49: [0, 0.65556, 0, 0, 0.5],
      50: [0, 0.65556, 0, 0, 0.5],
      51: [0, 0.65556, 0, 0, 0.5],
      52: [0, 0.65556, 0, 0, 0.5],
      53: [0, 0.65556, 0, 0, 0.5],
      54: [0, 0.65556, 0, 0, 0.5],
      55: [0, 0.65556, 0, 0, 0.5],
      56: [0, 0.65556, 0, 0, 0.5],
      57: [0, 0.65556, 0, 0, 0.5],
      58: [0, 0.44444, 0, 0, 0.27778],
      59: [0.125, 0.44444, 0, 0, 0.27778],
      61: [-0.13, 0.37, 0, 0, 0.77778],
      63: [0, 0.69444, 0, 0, 0.47222],
      64: [0, 0.69444, 0, 0, 0.66667],
      65: [0, 0.69444, 0, 0, 0.66667],
      66: [0, 0.69444, 0, 0, 0.66667],
      67: [0, 0.69444, 0, 0, 0.63889],
      68: [0, 0.69444, 0, 0, 0.72223],
      69: [0, 0.69444, 0, 0, 0.59722],
      70: [0, 0.69444, 0, 0, 0.56945],
      71: [0, 0.69444, 0, 0, 0.66667],
      72: [0, 0.69444, 0, 0, 0.70834],
      73: [0, 0.69444, 0, 0, 0.27778],
      74: [0, 0.69444, 0, 0, 0.47222],
      75: [0, 0.69444, 0, 0, 0.69445],
      76: [0, 0.69444, 0, 0, 0.54167],
      77: [0, 0.69444, 0, 0, 0.875],
      78: [0, 0.69444, 0, 0, 0.70834],
      79: [0, 0.69444, 0, 0, 0.73611],
      80: [0, 0.69444, 0, 0, 0.63889],
      81: [0.125, 0.69444, 0, 0, 0.73611],
      82: [0, 0.69444, 0, 0, 0.64584],
      83: [0, 0.69444, 0, 0, 0.55556],
      84: [0, 0.69444, 0, 0, 0.68056],
      85: [0, 0.69444, 0, 0, 0.6875],
      86: [0, 0.69444, 0.01389, 0, 0.66667],
      87: [0, 0.69444, 0.01389, 0, 0.94445],
      88: [0, 0.69444, 0, 0, 0.66667],
      89: [0, 0.69444, 0.025, 0, 0.66667],
      90: [0, 0.69444, 0, 0, 0.61111],
      91: [0.25, 0.75, 0, 0, 0.28889],
      93: [0.25, 0.75, 0, 0, 0.28889],
      94: [0, 0.69444, 0, 0, 0.5],
      95: [0.35, 0.09444, 0.02778, 0, 0.5],
      97: [0, 0.44444, 0, 0, 0.48056],
      98: [0, 0.69444, 0, 0, 0.51667],
      99: [0, 0.44444, 0, 0, 0.44445],
      100: [0, 0.69444, 0, 0, 0.51667],
      101: [0, 0.44444, 0, 0, 0.44445],
      102: [0, 0.69444, 0.06944, 0, 0.30556],
      103: [0.19444, 0.44444, 0.01389, 0, 0.5],
      104: [0, 0.69444, 0, 0, 0.51667],
      105: [0, 0.67937, 0, 0, 0.23889],
      106: [0.19444, 0.67937, 0, 0, 0.26667],
      107: [0, 0.69444, 0, 0, 0.48889],
      108: [0, 0.69444, 0, 0, 0.23889],
      109: [0, 0.44444, 0, 0, 0.79445],
      110: [0, 0.44444, 0, 0, 0.51667],
      111: [0, 0.44444, 0, 0, 0.5],
      112: [0.19444, 0.44444, 0, 0, 0.51667],
      113: [0.19444, 0.44444, 0, 0, 0.51667],
      114: [0, 0.44444, 0.01389, 0, 0.34167],
      115: [0, 0.44444, 0, 0, 0.38333],
      116: [0, 0.57143, 0, 0, 0.36111],
      117: [0, 0.44444, 0, 0, 0.51667],
      118: [0, 0.44444, 0.01389, 0, 0.46111],
      119: [0, 0.44444, 0.01389, 0, 0.68334],
      120: [0, 0.44444, 0, 0, 0.46111],
      121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
      122: [0, 0.44444, 0, 0, 0.43472],
      126: [0.35, 0.32659, 0, 0, 0.5],
      160: [0, 0, 0, 0, 0.25],
      168: [0, 0.67937, 0, 0, 0.5],
      176: [0, 0.69444, 0, 0, 0.66667],
      184: [0.17014, 0, 0, 0, 0.44445],
      305: [0, 0.44444, 0, 0, 0.23889],
      567: [0.19444, 0.44444, 0, 0, 0.26667],
      710: [0, 0.69444, 0, 0, 0.5],
      711: [0, 0.63194, 0, 0, 0.5],
      713: [0, 0.60889, 0, 0, 0.5],
      714: [0, 0.69444, 0, 0, 0.5],
      715: [0, 0.69444, 0, 0, 0.5],
      728: [0, 0.69444, 0, 0, 0.5],
      729: [0, 0.67937, 0, 0, 0.27778],
      730: [0, 0.69444, 0, 0, 0.66667],
      732: [0, 0.67659, 0, 0, 0.5],
      733: [0, 0.69444, 0, 0, 0.5],
      915: [0, 0.69444, 0, 0, 0.54167],
      916: [0, 0.69444, 0, 0, 0.83334],
      920: [0, 0.69444, 0, 0, 0.77778],
      923: [0, 0.69444, 0, 0, 0.61111],
      926: [0, 0.69444, 0, 0, 0.66667],
      928: [0, 0.69444, 0, 0, 0.70834],
      931: [0, 0.69444, 0, 0, 0.72222],
      933: [0, 0.69444, 0, 0, 0.77778],
      934: [0, 0.69444, 0, 0, 0.72222],
      936: [0, 0.69444, 0, 0, 0.77778],
      937: [0, 0.69444, 0, 0, 0.72222],
      8211: [0, 0.44444, 0.02778, 0, 0.5],
      8212: [0, 0.44444, 0.02778, 0, 1],
      8216: [0, 0.69444, 0, 0, 0.27778],
      8217: [0, 0.69444, 0, 0, 0.27778],
      8220: [0, 0.69444, 0, 0, 0.5],
      8221: [0, 0.69444, 0, 0, 0.5],
    },
    "Script-Regular": {
      32: [0, 0, 0, 0, 0.25],
      65: [0, 0.7, 0.22925, 0, 0.80253],
      66: [0, 0.7, 0.04087, 0, 0.90757],
      67: [0, 0.7, 0.1689, 0, 0.66619],
      68: [0, 0.7, 0.09371, 0, 0.77443],
      69: [0, 0.7, 0.18583, 0, 0.56162],
      70: [0, 0.7, 0.13634, 0, 0.89544],
      71: [0, 0.7, 0.17322, 0, 0.60961],
      72: [0, 0.7, 0.29694, 0, 0.96919],
      73: [0, 0.7, 0.19189, 0, 0.80907],
      74: [0.27778, 0.7, 0.19189, 0, 1.05159],
      75: [0, 0.7, 0.31259, 0, 0.91364],
      76: [0, 0.7, 0.19189, 0, 0.87373],
      77: [0, 0.7, 0.15981, 0, 1.08031],
      78: [0, 0.7, 0.3525, 0, 0.9015],
      79: [0, 0.7, 0.08078, 0, 0.73787],
      80: [0, 0.7, 0.08078, 0, 1.01262],
      81: [0, 0.7, 0.03305, 0, 0.88282],
      82: [0, 0.7, 0.06259, 0, 0.85],
      83: [0, 0.7, 0.19189, 0, 0.86767],
      84: [0, 0.7, 0.29087, 0, 0.74697],
      85: [0, 0.7, 0.25815, 0, 0.79996],
      86: [0, 0.7, 0.27523, 0, 0.62204],
      87: [0, 0.7, 0.27523, 0, 0.80532],
      88: [0, 0.7, 0.26006, 0, 0.94445],
      89: [0, 0.7, 0.2939, 0, 0.70961],
      90: [0, 0.7, 0.24037, 0, 0.8212],
      160: [0, 0, 0, 0, 0.25],
    },
    "Size1-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.35001, 0.85, 0, 0, 0.45834],
      41: [0.35001, 0.85, 0, 0, 0.45834],
      47: [0.35001, 0.85, 0, 0, 0.57778],
      91: [0.35001, 0.85, 0, 0, 0.41667],
      92: [0.35001, 0.85, 0, 0, 0.57778],
      93: [0.35001, 0.85, 0, 0, 0.41667],
      123: [0.35001, 0.85, 0, 0, 0.58334],
      125: [0.35001, 0.85, 0, 0, 0.58334],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.72222, 0, 0, 0.55556],
      732: [0, 0.72222, 0, 0, 0.55556],
      770: [0, 0.72222, 0, 0, 0.55556],
      771: [0, 0.72222, 0, 0, 0.55556],
      8214: [-99e-5, 0.601, 0, 0, 0.77778],
      8593: [1e-5, 0.6, 0, 0, 0.66667],
      8595: [1e-5, 0.6, 0, 0, 0.66667],
      8657: [1e-5, 0.6, 0, 0, 0.77778],
      8659: [1e-5, 0.6, 0, 0, 0.77778],
      8719: [0.25001, 0.75, 0, 0, 0.94445],
      8720: [0.25001, 0.75, 0, 0, 0.94445],
      8721: [0.25001, 0.75, 0, 0, 1.05556],
      8730: [0.35001, 0.85, 0, 0, 1],
      8739: [-0.00599, 0.606, 0, 0, 0.33333],
      8741: [-0.00599, 0.606, 0, 0, 0.55556],
      8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8748: [0.306, 0.805, 0.19445, 0, 0.47222],
      8749: [0.306, 0.805, 0.19445, 0, 0.47222],
      8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
      8896: [0.25001, 0.75, 0, 0, 0.83334],
      8897: [0.25001, 0.75, 0, 0, 0.83334],
      8898: [0.25001, 0.75, 0, 0, 0.83334],
      8899: [0.25001, 0.75, 0, 0, 0.83334],
      8968: [0.35001, 0.85, 0, 0, 0.47222],
      8969: [0.35001, 0.85, 0, 0, 0.47222],
      8970: [0.35001, 0.85, 0, 0, 0.47222],
      8971: [0.35001, 0.85, 0, 0, 0.47222],
      9168: [-99e-5, 0.601, 0, 0, 0.66667],
      10216: [0.35001, 0.85, 0, 0, 0.47222],
      10217: [0.35001, 0.85, 0, 0, 0.47222],
      10752: [0.25001, 0.75, 0, 0, 1.11111],
      10753: [0.25001, 0.75, 0, 0, 1.11111],
      10754: [0.25001, 0.75, 0, 0, 1.11111],
      10756: [0.25001, 0.75, 0, 0, 0.83334],
      10758: [0.25001, 0.75, 0, 0, 0.83334],
    },
    "Size2-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.65002, 1.15, 0, 0, 0.59722],
      41: [0.65002, 1.15, 0, 0, 0.59722],
      47: [0.65002, 1.15, 0, 0, 0.81111],
      91: [0.65002, 1.15, 0, 0, 0.47222],
      92: [0.65002, 1.15, 0, 0, 0.81111],
      93: [0.65002, 1.15, 0, 0, 0.47222],
      123: [0.65002, 1.15, 0, 0, 0.66667],
      125: [0.65002, 1.15, 0, 0, 0.66667],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1],
      732: [0, 0.75, 0, 0, 1],
      770: [0, 0.75, 0, 0, 1],
      771: [0, 0.75, 0, 0, 1],
      8719: [0.55001, 1.05, 0, 0, 1.27778],
      8720: [0.55001, 1.05, 0, 0, 1.27778],
      8721: [0.55001, 1.05, 0, 0, 1.44445],
      8730: [0.65002, 1.15, 0, 0, 1],
      8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8748: [0.862, 1.36, 0.44445, 0, 0.55556],
      8749: [0.862, 1.36, 0.44445, 0, 0.55556],
      8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
      8896: [0.55001, 1.05, 0, 0, 1.11111],
      8897: [0.55001, 1.05, 0, 0, 1.11111],
      8898: [0.55001, 1.05, 0, 0, 1.11111],
      8899: [0.55001, 1.05, 0, 0, 1.11111],
      8968: [0.65002, 1.15, 0, 0, 0.52778],
      8969: [0.65002, 1.15, 0, 0, 0.52778],
      8970: [0.65002, 1.15, 0, 0, 0.52778],
      8971: [0.65002, 1.15, 0, 0, 0.52778],
      10216: [0.65002, 1.15, 0, 0, 0.61111],
      10217: [0.65002, 1.15, 0, 0, 0.61111],
      10752: [0.55001, 1.05, 0, 0, 1.51112],
      10753: [0.55001, 1.05, 0, 0, 1.51112],
      10754: [0.55001, 1.05, 0, 0, 1.51112],
      10756: [0.55001, 1.05, 0, 0, 1.11111],
      10758: [0.55001, 1.05, 0, 0, 1.11111],
    },
    "Size3-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [0.95003, 1.45, 0, 0, 0.73611],
      41: [0.95003, 1.45, 0, 0, 0.73611],
      47: [0.95003, 1.45, 0, 0, 1.04445],
      91: [0.95003, 1.45, 0, 0, 0.52778],
      92: [0.95003, 1.45, 0, 0, 1.04445],
      93: [0.95003, 1.45, 0, 0, 0.52778],
      123: [0.95003, 1.45, 0, 0, 0.75],
      125: [0.95003, 1.45, 0, 0, 0.75],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.75, 0, 0, 1.44445],
      732: [0, 0.75, 0, 0, 1.44445],
      770: [0, 0.75, 0, 0, 1.44445],
      771: [0, 0.75, 0, 0, 1.44445],
      8730: [0.95003, 1.45, 0, 0, 1],
      8968: [0.95003, 1.45, 0, 0, 0.58334],
      8969: [0.95003, 1.45, 0, 0, 0.58334],
      8970: [0.95003, 1.45, 0, 0, 0.58334],
      8971: [0.95003, 1.45, 0, 0, 0.58334],
      10216: [0.95003, 1.45, 0, 0, 0.75],
      10217: [0.95003, 1.45, 0, 0, 0.75],
    },
    "Size4-Regular": {
      32: [0, 0, 0, 0, 0.25],
      40: [1.25003, 1.75, 0, 0, 0.79167],
      41: [1.25003, 1.75, 0, 0, 0.79167],
      47: [1.25003, 1.75, 0, 0, 1.27778],
      91: [1.25003, 1.75, 0, 0, 0.58334],
      92: [1.25003, 1.75, 0, 0, 1.27778],
      93: [1.25003, 1.75, 0, 0, 0.58334],
      123: [1.25003, 1.75, 0, 0, 0.80556],
      125: [1.25003, 1.75, 0, 0, 0.80556],
      160: [0, 0, 0, 0, 0.25],
      710: [0, 0.825, 0, 0, 1.8889],
      732: [0, 0.825, 0, 0, 1.8889],
      770: [0, 0.825, 0, 0, 1.8889],
      771: [0, 0.825, 0, 0, 1.8889],
      8730: [1.25003, 1.75, 0, 0, 1],
      8968: [1.25003, 1.75, 0, 0, 0.63889],
      8969: [1.25003, 1.75, 0, 0, 0.63889],
      8970: [1.25003, 1.75, 0, 0, 0.63889],
      8971: [1.25003, 1.75, 0, 0, 0.63889],
      9115: [0.64502, 1.155, 0, 0, 0.875],
      9116: [1e-5, 0.6, 0, 0, 0.875],
      9117: [0.64502, 1.155, 0, 0, 0.875],
      9118: [0.64502, 1.155, 0, 0, 0.875],
      9119: [1e-5, 0.6, 0, 0, 0.875],
      9120: [0.64502, 1.155, 0, 0, 0.875],
      9121: [0.64502, 1.155, 0, 0, 0.66667],
      9122: [-99e-5, 0.601, 0, 0, 0.66667],
      9123: [0.64502, 1.155, 0, 0, 0.66667],
      9124: [0.64502, 1.155, 0, 0, 0.66667],
      9125: [-99e-5, 0.601, 0, 0, 0.66667],
      9126: [0.64502, 1.155, 0, 0, 0.66667],
      9127: [1e-5, 0.9, 0, 0, 0.88889],
      9128: [0.65002, 1.15, 0, 0, 0.88889],
      9129: [0.90001, 0, 0, 0, 0.88889],
      9130: [0, 0.3, 0, 0, 0.88889],
      9131: [1e-5, 0.9, 0, 0, 0.88889],
      9132: [0.65002, 1.15, 0, 0, 0.88889],
      9133: [0.90001, 0, 0, 0, 0.88889],
      9143: [0.88502, 0.915, 0, 0, 1.05556],
      10216: [1.25003, 1.75, 0, 0, 0.80556],
      10217: [1.25003, 1.75, 0, 0, 0.80556],
      57344: [-0.00499, 0.605, 0, 0, 1.05556],
      57345: [-0.00499, 0.605, 0, 0, 1.05556],
      57680: [0, 0.12, 0, 0, 0.45],
      57681: [0, 0.12, 0, 0, 0.45],
      57682: [0, 0.12, 0, 0, 0.45],
      57683: [0, 0.12, 0, 0, 0.45],
    },
    "Typewriter-Regular": {
      32: [0, 0, 0, 0, 0.525],
      33: [0, 0.61111, 0, 0, 0.525],
      34: [0, 0.61111, 0, 0, 0.525],
      35: [0, 0.61111, 0, 0, 0.525],
      36: [0.08333, 0.69444, 0, 0, 0.525],
      37: [0.08333, 0.69444, 0, 0, 0.525],
      38: [0, 0.61111, 0, 0, 0.525],
      39: [0, 0.61111, 0, 0, 0.525],
      40: [0.08333, 0.69444, 0, 0, 0.525],
      41: [0.08333, 0.69444, 0, 0, 0.525],
      42: [0, 0.52083, 0, 0, 0.525],
      43: [-0.08056, 0.53055, 0, 0, 0.525],
      44: [0.13889, 0.125, 0, 0, 0.525],
      45: [-0.08056, 0.53055, 0, 0, 0.525],
      46: [0, 0.125, 0, 0, 0.525],
      47: [0.08333, 0.69444, 0, 0, 0.525],
      48: [0, 0.61111, 0, 0, 0.525],
      49: [0, 0.61111, 0, 0, 0.525],
      50: [0, 0.61111, 0, 0, 0.525],
      51: [0, 0.61111, 0, 0, 0.525],
      52: [0, 0.61111, 0, 0, 0.525],
      53: [0, 0.61111, 0, 0, 0.525],
      54: [0, 0.61111, 0, 0, 0.525],
      55: [0, 0.61111, 0, 0, 0.525],
      56: [0, 0.61111, 0, 0, 0.525],
      57: [0, 0.61111, 0, 0, 0.525],
      58: [0, 0.43056, 0, 0, 0.525],
      59: [0.13889, 0.43056, 0, 0, 0.525],
      60: [-0.05556, 0.55556, 0, 0, 0.525],
      61: [-0.19549, 0.41562, 0, 0, 0.525],
      62: [-0.05556, 0.55556, 0, 0, 0.525],
      63: [0, 0.61111, 0, 0, 0.525],
      64: [0, 0.61111, 0, 0, 0.525],
      65: [0, 0.61111, 0, 0, 0.525],
      66: [0, 0.61111, 0, 0, 0.525],
      67: [0, 0.61111, 0, 0, 0.525],
      68: [0, 0.61111, 0, 0, 0.525],
      69: [0, 0.61111, 0, 0, 0.525],
      70: [0, 0.61111, 0, 0, 0.525],
      71: [0, 0.61111, 0, 0, 0.525],
      72: [0, 0.61111, 0, 0, 0.525],
      73: [0, 0.61111, 0, 0, 0.525],
      74: [0, 0.61111, 0, 0, 0.525],
      75: [0, 0.61111, 0, 0, 0.525],
      76: [0, 0.61111, 0, 0, 0.525],
      77: [0, 0.61111, 0, 0, 0.525],
      78: [0, 0.61111, 0, 0, 0.525],
      79: [0, 0.61111, 0, 0, 0.525],
      80: [0, 0.61111, 0, 0, 0.525],
      81: [0.13889, 0.61111, 0, 0, 0.525],
      82: [0, 0.61111, 0, 0, 0.525],
      83: [0, 0.61111, 0, 0, 0.525],
      84: [0, 0.61111, 0, 0, 0.525],
      85: [0, 0.61111, 0, 0, 0.525],
      86: [0, 0.61111, 0, 0, 0.525],
      87: [0, 0.61111, 0, 0, 0.525],
      88: [0, 0.61111, 0, 0, 0.525],
      89: [0, 0.61111, 0, 0, 0.525],
      90: [0, 0.61111, 0, 0, 0.525],
      91: [0.08333, 0.69444, 0, 0, 0.525],
      92: [0.08333, 0.69444, 0, 0, 0.525],
      93: [0.08333, 0.69444, 0, 0, 0.525],
      94: [0, 0.61111, 0, 0, 0.525],
      95: [0.09514, 0, 0, 0, 0.525],
      96: [0, 0.61111, 0, 0, 0.525],
      97: [0, 0.43056, 0, 0, 0.525],
      98: [0, 0.61111, 0, 0, 0.525],
      99: [0, 0.43056, 0, 0, 0.525],
      100: [0, 0.61111, 0, 0, 0.525],
      101: [0, 0.43056, 0, 0, 0.525],
      102: [0, 0.61111, 0, 0, 0.525],
      103: [0.22222, 0.43056, 0, 0, 0.525],
      104: [0, 0.61111, 0, 0, 0.525],
      105: [0, 0.61111, 0, 0, 0.525],
      106: [0.22222, 0.61111, 0, 0, 0.525],
      107: [0, 0.61111, 0, 0, 0.525],
      108: [0, 0.61111, 0, 0, 0.525],
      109: [0, 0.43056, 0, 0, 0.525],
      110: [0, 0.43056, 0, 0, 0.525],
      111: [0, 0.43056, 0, 0, 0.525],
      112: [0.22222, 0.43056, 0, 0, 0.525],
      113: [0.22222, 0.43056, 0, 0, 0.525],
      114: [0, 0.43056, 0, 0, 0.525],
      115: [0, 0.43056, 0, 0, 0.525],
      116: [0, 0.55358, 0, 0, 0.525],
      117: [0, 0.43056, 0, 0, 0.525],
      118: [0, 0.43056, 0, 0, 0.525],
      119: [0, 0.43056, 0, 0, 0.525],
      120: [0, 0.43056, 0, 0, 0.525],
      121: [0.22222, 0.43056, 0, 0, 0.525],
      122: [0, 0.43056, 0, 0, 0.525],
      123: [0.08333, 0.69444, 0, 0, 0.525],
      124: [0.08333, 0.69444, 0, 0, 0.525],
      125: [0.08333, 0.69444, 0, 0, 0.525],
      126: [0, 0.61111, 0, 0, 0.525],
      127: [0, 0.61111, 0, 0, 0.525],
      160: [0, 0, 0, 0, 0.525],
      176: [0, 0.61111, 0, 0, 0.525],
      184: [0.19445, 0, 0, 0, 0.525],
      305: [0, 0.43056, 0, 0, 0.525],
      567: [0.22222, 0.43056, 0, 0, 0.525],
      711: [0, 0.56597, 0, 0, 0.525],
      713: [0, 0.56555, 0, 0, 0.525],
      714: [0, 0.61111, 0, 0, 0.525],
      715: [0, 0.61111, 0, 0, 0.525],
      728: [0, 0.61111, 0, 0, 0.525],
      730: [0, 0.61111, 0, 0, 0.525],
      770: [0, 0.61111, 0, 0, 0.525],
      771: [0, 0.61111, 0, 0, 0.525],
      776: [0, 0.61111, 0, 0, 0.525],
      915: [0, 0.61111, 0, 0, 0.525],
      916: [0, 0.61111, 0, 0, 0.525],
      920: [0, 0.61111, 0, 0, 0.525],
      923: [0, 0.61111, 0, 0, 0.525],
      926: [0, 0.61111, 0, 0, 0.525],
      928: [0, 0.61111, 0, 0, 0.525],
      931: [0, 0.61111, 0, 0, 0.525],
      933: [0, 0.61111, 0, 0, 0.525],
      934: [0, 0.61111, 0, 0, 0.525],
      936: [0, 0.61111, 0, 0, 0.525],
      937: [0, 0.61111, 0, 0, 0.525],
      8216: [0, 0.61111, 0, 0, 0.525],
      8217: [0, 0.61111, 0, 0, 0.525],
      8242: [0, 0.61111, 0, 0, 0.525],
      9251: [0.11111, 0.21944, 0, 0, 0.525],
    },
  },
  katexValue62 = {
    slant: [0.25, 0.25, 0.25],
    space: [0, 0, 0],
    stretch: [0, 0, 0],
    shrink: [0, 0, 0],
    xHeight: [0.431, 0.431, 0.431],
    quad: [1, 1.171, 1.472],
    extraSpace: [0, 0, 0],
    num1: [0.677, 0.732, 0.925],
    num2: [0.394, 0.384, 0.387],
    num3: [0.444, 0.471, 0.504],
    denom1: [0.686, 0.752, 1.025],
    denom2: [0.345, 0.344, 0.532],
    sup1: [0.413, 0.503, 0.504],
    sup2: [0.363, 0.431, 0.404],
    sup3: [0.289, 0.286, 0.294],
    sub1: [0.15, 0.143, 0.2],
    sub2: [0.247, 0.286, 0.4],
    supDrop: [0.386, 0.353, 0.494],
    subDrop: [0.05, 0.071, 0.1],
    delim1: [2.39, 1.7, 1.98],
    delim2: [1.01, 1.157, 1.42],
    axisHeight: [0.25, 0.25, 0.25],
    defaultRuleThickness: [0.04, 0.049, 0.049],
    bigOpSpacing1: [0.111, 0.111, 0.111],
    bigOpSpacing2: [0.166, 0.166, 0.166],
    bigOpSpacing3: [0.2, 0.2, 0.2],
    bigOpSpacing4: [0.6, 0.611, 0.611],
    bigOpSpacing5: [0.1, 0.143, 0.143],
    sqrtRuleThickness: [0.04, 0.04, 0.04],
    ptPerEm: [10, 10, 10],
    doubleRuleSep: [0.2, 0.2, 0.2],
    arrayRuleWidth: [0.04, 0.04, 0.04],
    fboxsep: [0.3, 0.3, 0.3],
    fboxrule: [0.04, 0.04, 0.04],
  },
  katexValue63 = {
    Å: `A`,
    Ð: `D`,
    Þ: `o`,
    å: `a`,
    ð: `d`,
    þ: `o`,
    А: `A`,
    Б: `B`,
    В: `B`,
    Г: `F`,
    Д: `A`,
    Е: `E`,
    Ж: `K`,
    З: `3`,
    И: `N`,
    Й: `N`,
    К: `K`,
    Л: `N`,
    М: `M`,
    Н: `H`,
    О: `O`,
    П: `N`,
    Р: `P`,
    С: `C`,
    Т: `T`,
    У: `y`,
    Ф: `O`,
    Х: `X`,
    Ц: `U`,
    Ч: `h`,
    Ш: `W`,
    Щ: `W`,
    Ъ: `B`,
    Ы: `X`,
    Ь: `B`,
    Э: `3`,
    Ю: `X`,
    Я: `R`,
    а: `a`,
    б: `b`,
    в: `a`,
    г: `r`,
    д: `y`,
    е: `e`,
    ж: `m`,
    з: `e`,
    и: `n`,
    й: `n`,
    к: `n`,
    л: `n`,
    м: `m`,
    н: `n`,
    о: `o`,
    п: `n`,
    р: `p`,
    с: `c`,
    т: `o`,
    у: `y`,
    ф: `b`,
    х: `x`,
    ц: `n`,
    ч: `n`,
    ш: `w`,
    щ: `w`,
    ъ: `a`,
    ы: `m`,
    ь: `a`,
    э: `e`,
    ю: `m`,
    я: `r`,
  };
function katexP(_katexT, katexParam462) {
  katexValue61[_katexT] = katexParam462;
}
function katexHelper6(_katexT, katexParam171, katexParam172) {
  if (!katexValue61[katexParam171])
    throw Error(`Font metrics not found for font: ` + katexParam171 + `.`);
  var katexValue994 = _katexT.charCodeAt(0),
    katexValue995 = katexValue61[katexParam171][katexValue994];
  if (
    (!katexValue995 &&
      _katexT[0] in katexValue63 &&
      ((katexValue994 = katexValue63[_katexT[0]].charCodeAt(0)),
      (katexValue995 = katexValue61[katexParam171][katexValue994])),
    !katexValue995 &&
      katexParam172 === `text` &&
      katexHelper3(katexValue994) &&
      (katexValue995 = katexValue61[katexParam171][77]),
    katexValue995)
  )
    return {
      depth: katexValue995[0],
      height: katexValue995[1],
      italic: katexValue995[2],
      skew: katexValue995[3],
      width: katexValue995[4],
    };
}
var katexValue64 = {};
function katexHelper7(_katexT) {
  var katexValue1168 = _katexT >= 5 ? 0 : _katexT >= 3 ? 1 : 2;
  if (!katexValue64[katexValue1168]) {
    var katexValue1169 = (katexValue64[katexValue1168] = {
      cssEmPerMu: katexValue62.quad[katexValue1168] / 18,
    });
    for (var katexValue1170 in katexValue62)
      katexValue62.hasOwnProperty(katexValue1170) &&
        (katexValue1169[katexValue1170] =
          katexValue62[katexValue1170][katexValue1168]);
  }
  return katexValue64[katexValue1168];
}
var katexValue65 = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1,
  },
  katexValue66 = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1,
  },
  katexValue67 = {
    math: {},
    text: {},
  };
function katexO(
  _katexT,
  katexParam378,
  katexParam379,
  katexParam380,
  katexParam381,
  katexParam382,
) {
  ((katexValue67[_katexT][katexParam381] = {
    font: katexParam378,
    group: katexParam379,
    replace: katexParam380,
  }),
    katexParam382 &&
      katexParam380 &&
      (katexValue67[_katexT][katexParam380] =
        katexValue67[_katexT][katexParam381]));
}
var katexValue68 = `math`,
  katexValue69 = `text`,
  katexValue70 = `main`,
  katexValue71 = `ams`,
  katexValue72 = `accent-token`,
  katexValue73 = `bin`,
  katexValue74 = `close`,
  katexValue75 = `inner`,
  katexValue76 = `mathord`,
  katexValue77 = `op-token`,
  katexValue78 = `open`,
  katexValue79 = `punct`,
  katexValue80 = `rel`,
  $e = `spacing`,
  katexValue81 = `textord`;
(katexO(katexValue68, katexValue70, katexValue80, `≡`, `\\equiv`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≺`, `\\prec`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≻`, `\\succ`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∼`, `\\sim`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊥`, `\\perp`),
  katexO(katexValue68, katexValue70, katexValue80, `⪯`, `\\preceq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⪰`, `\\succeq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≃`, `\\simeq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∣`, `\\mid`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≪`, `\\ll`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≫`, `\\gg`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≍`, `\\asymp`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∥`, `\\parallel`),
  katexO(katexValue68, katexValue70, katexValue80, `⋈`, `\\bowtie`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⌣`, `\\smile`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊑`, `\\sqsubseteq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊒`, `\\sqsupseteq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≐`, `\\doteq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⌢`, `\\frown`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∋`, `\\ni`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∝`, `\\propto`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊢`, `\\vdash`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊣`, `\\dashv`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∋`, `\\owns`),
  katexO(katexValue68, katexValue70, katexValue79, `.`, `\\ldotp`),
  katexO(katexValue68, katexValue70, katexValue79, `⋅`, `\\cdotp`),
  katexO(katexValue68, katexValue70, katexValue79, `⋅`, `·`),
  katexO(katexValue69, katexValue70, katexValue81, `⋅`, `·`),
  katexO(katexValue68, katexValue70, katexValue81, `#`, `\\#`),
  katexO(katexValue69, katexValue70, katexValue81, `#`, `\\#`),
  katexO(katexValue68, katexValue70, katexValue81, `&`, `\\&`),
  katexO(katexValue69, katexValue70, katexValue81, `&`, `\\&`),
  katexO(katexValue68, katexValue70, katexValue81, `ℵ`, `\\aleph`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∀`, `\\forall`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `ℏ`, `\\hbar`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∃`, `\\exists`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∇`, `\\nabla`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♭`, `\\flat`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `ℓ`, `\\ell`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♮`, `\\natural`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♣`, `\\clubsuit`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `℘`, `\\wp`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♯`, `\\sharp`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♢`, `\\diamondsuit`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `ℜ`, `\\Re`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♡`, `\\heartsuit`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `ℑ`, `\\Im`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `♠`, `\\spadesuit`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `§`, `\\S`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `§`, `\\S`),
  katexO(katexValue68, katexValue70, katexValue81, `¶`, `\\P`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `¶`, `\\P`),
  katexO(katexValue68, katexValue70, katexValue81, `†`, `\\dag`),
  katexO(katexValue69, katexValue70, katexValue81, `†`, `\\dag`),
  katexO(katexValue69, katexValue70, katexValue81, `†`, `\\textdagger`),
  katexO(katexValue68, katexValue70, katexValue81, `‡`, `\\ddag`),
  katexO(katexValue69, katexValue70, katexValue81, `‡`, `\\ddag`),
  katexO(katexValue69, katexValue70, katexValue81, `‡`, `\\textdaggerdbl`),
  katexO(katexValue68, katexValue70, katexValue74, `⎱`, `\\rmoustache`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `⎰`, `\\lmoustache`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `⟯`, `\\rgroup`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `⟮`, `\\lgroup`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∓`, `\\mp`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊖`, `\\ominus`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊎`, `\\uplus`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊓`, `\\sqcap`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∗`, `\\ast`),
  katexO(katexValue68, katexValue70, katexValue73, `⊔`, `\\sqcup`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `◯`, `\\bigcirc`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∙`, `\\bullet`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `‡`, `\\ddagger`),
  katexO(katexValue68, katexValue70, katexValue73, `≀`, `\\wr`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⨿`, `\\amalg`),
  katexO(katexValue68, katexValue70, katexValue73, `&`, `\\And`),
  katexO(katexValue68, katexValue70, katexValue80, `⟵`, `\\longleftarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇐`, `\\Leftarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⟸`, `\\Longleftarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⟶`, `\\longrightarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇒`, `\\Rightarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⟹`, `\\Longrightarrow`, !0),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `↔`,
    `\\leftrightarrow`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `⟷`,
    `\\longleftrightarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue70, katexValue80, `⇔`, `\\Leftrightarrow`, !0),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `⟺`,
    `\\Longleftrightarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue70, katexValue80, `↦`, `\\mapsto`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⟼`, `\\longmapsto`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↗`, `\\nearrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↩`, `\\hookleftarrow`, !0),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `↪`,
    `\\hookrightarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue70, katexValue80, `↘`, `\\searrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↼`, `\\leftharpoonup`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇀`, `\\rightharpoonup`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↙`, `\\swarrow`, !0),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `↽`,
    `\\leftharpoondown`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `⇁`,
    `\\rightharpoondown`,
    !0,
  ),
  katexO(katexValue68, katexValue70, katexValue80, `↖`, `\\nwarrow`, !0),
  katexO(
    katexValue68,
    katexValue70,
    katexValue80,
    `⇌`,
    `\\rightleftharpoons`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `≮`, `\\nless`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nleqslant`),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nleqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⪇`, `\\lneq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≨`, `\\lneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@lvertneqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⋦`, `\\lnsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪉`, `\\lnapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊀`, `\\nprec`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋠`, `\\npreceq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋨`, `\\precnsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪹`, `\\precnapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≁`, `\\nsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nshortmid`),
  katexO(katexValue68, katexValue71, katexValue80, `∤`, `\\nmid`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊬`, `\\nvdash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊭`, `\\nvDash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋪`, `\\ntriangleleft`),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⋬`,
    `\\ntrianglelefteq`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `⊊`, `\\subsetneq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@varsubsetneq`),
  katexO(katexValue68, katexValue71, katexValue80, `⫋`, `\\subsetneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@varsubsetneqq`),
  katexO(katexValue68, katexValue71, katexValue80, `≯`, `\\ngtr`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@ngeqslant`),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@ngeqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⪈`, `\\gneq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≩`, `\\gneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@gvertneqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⋧`, `\\gnsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪊`, `\\gnapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊁`, `\\nsucc`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋡`, `\\nsucceq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋩`, `\\succnsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪺`, `\\succnapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≆`, `\\ncong`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nshortparallel`),
  katexO(katexValue68, katexValue71, katexValue80, `∦`, `\\nparallel`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊯`, `\\nVDash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋫`, `\\ntriangleright`),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⋭`,
    `\\ntrianglerighteq`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nsupseteqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⊋`, `\\supsetneq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@varsupsetneq`),
  katexO(katexValue68, katexValue71, katexValue80, `⫌`, `\\supsetneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@varsupsetneqq`),
  katexO(katexValue68, katexValue71, katexValue80, `⊮`, `\\nVdash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪵`, `\\precneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪶`, `\\succneqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, ``, `\\@nsubseteqq`),
  katexO(katexValue68, katexValue71, katexValue73, `⊴`, `\\unlhd`),
  katexO(katexValue68, katexValue71, katexValue73, `⊵`, `\\unrhd`),
  katexO(katexValue68, katexValue71, katexValue80, `↚`, `\\nleftarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↛`, `\\nrightarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇍`, `\\nLeftarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇏`, `\\nRightarrow`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↮`,
    `\\nleftrightarrow`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇎`,
    `\\nLeftrightarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `△`, `\\vartriangle`),
  katexO(katexValue68, katexValue71, katexValue81, `ℏ`, `\\hslash`),
  katexO(katexValue68, katexValue71, katexValue81, `▽`, `\\triangledown`),
  katexO(katexValue68, katexValue71, katexValue81, `◊`, `\\lozenge`),
  katexO(katexValue68, katexValue71, katexValue81, `Ⓢ`, `\\circledS`),
  katexO(katexValue68, katexValue71, katexValue81, `®`, `\\circledR`),
  katexO(katexValue69, katexValue71, katexValue81, `®`, `\\circledR`),
  katexO(katexValue68, katexValue71, katexValue81, `∡`, `\\measuredangle`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `∄`, `\\nexists`),
  katexO(katexValue68, katexValue71, katexValue81, `℧`, `\\mho`),
  katexO(katexValue68, katexValue71, katexValue81, `Ⅎ`, `\\Finv`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `⅁`, `\\Game`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `‵`, `\\backprime`),
  katexO(katexValue68, katexValue71, katexValue81, `▲`, `\\blacktriangle`),
  katexO(katexValue68, katexValue71, katexValue81, `▼`, `\\blacktriangledown`),
  katexO(katexValue68, katexValue71, katexValue81, `■`, `\\blacksquare`),
  katexO(katexValue68, katexValue71, katexValue81, `⧫`, `\\blacklozenge`),
  katexO(katexValue68, katexValue71, katexValue81, `★`, `\\bigstar`),
  katexO(katexValue68, katexValue71, katexValue81, `∢`, `\\sphericalangle`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `∁`, `\\complement`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `ð`, `\\eth`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `ð`, `ð`),
  katexO(katexValue68, katexValue71, katexValue81, `╱`, `\\diagup`),
  katexO(katexValue68, katexValue71, katexValue81, `╲`, `\\diagdown`),
  katexO(katexValue68, katexValue71, katexValue81, `□`, `\\square`),
  katexO(katexValue68, katexValue71, katexValue81, `□`, `\\Box`),
  katexO(katexValue68, katexValue71, katexValue81, `◊`, `\\Diamond`),
  katexO(katexValue68, katexValue71, katexValue81, `¥`, `\\yen`, !0),
  katexO(katexValue69, katexValue71, katexValue81, `¥`, `\\yen`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `✓`, `\\checkmark`, !0),
  katexO(katexValue69, katexValue71, katexValue81, `✓`, `\\checkmark`),
  katexO(katexValue68, katexValue71, katexValue81, `ℶ`, `\\beth`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `ℸ`, `\\daleth`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `ℷ`, `\\gimel`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `ϝ`, `\\digamma`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `ϰ`, `\\varkappa`),
  katexO(katexValue68, katexValue71, katexValue78, `┌`, `\\@ulcorner`, !0),
  katexO(katexValue68, katexValue71, katexValue74, `┐`, `\\@urcorner`, !0),
  katexO(katexValue68, katexValue71, katexValue78, `└`, `\\@llcorner`, !0),
  katexO(katexValue68, katexValue71, katexValue74, `┘`, `\\@lrcorner`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≦`, `\\leqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⩽`, `\\leqslant`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪕`, `\\eqslantless`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≲`, `\\lesssim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪅`, `\\lessapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≊`, `\\approxeq`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋖`, `\\lessdot`),
  katexO(katexValue68, katexValue71, katexValue80, `⋘`, `\\lll`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≶`, `\\lessgtr`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋚`, `\\lesseqgtr`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪋`, `\\lesseqqgtr`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≑`, `\\doteqdot`),
  katexO(katexValue68, katexValue71, katexValue80, `≓`, `\\risingdotseq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≒`, `\\fallingdotseq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `∽`, `\\backsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋍`, `\\backsimeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⫅`, `\\subseteqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋐`, `\\Subset`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊏`, `\\sqsubset`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≼`, `\\preccurlyeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋞`, `\\curlyeqprec`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≾`, `\\precsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪷`, `\\precapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊲`, `\\vartriangleleft`),
  katexO(katexValue68, katexValue71, katexValue80, `⊴`, `\\trianglelefteq`),
  katexO(katexValue68, katexValue71, katexValue80, `⊨`, `\\vDash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊪`, `\\Vvdash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⌣`, `\\smallsmile`),
  katexO(katexValue68, katexValue71, katexValue80, `⌢`, `\\smallfrown`),
  katexO(katexValue68, katexValue71, katexValue80, `≏`, `\\bumpeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≎`, `\\Bumpeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≧`, `\\geqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⩾`, `\\geqslant`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪖`, `\\eqslantgtr`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≳`, `\\gtrsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪆`, `\\gtrapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋗`, `\\gtrdot`),
  katexO(katexValue68, katexValue71, katexValue80, `⋙`, `\\ggg`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≷`, `\\gtrless`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋛`, `\\gtreqless`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪌`, `\\gtreqqless`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≖`, `\\eqcirc`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≗`, `\\circeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≜`, `\\triangleq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `∼`, `\\thicksim`),
  katexO(katexValue68, katexValue71, katexValue80, `≈`, `\\thickapprox`),
  katexO(katexValue68, katexValue71, katexValue80, `⫆`, `\\supseteqq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋑`, `\\Supset`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊐`, `\\sqsupset`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≽`, `\\succcurlyeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋟`, `\\curlyeqsucc`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≿`, `\\succsim`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⪸`, `\\succapprox`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊳`, `\\vartriangleright`),
  katexO(katexValue68, katexValue71, katexValue80, `⊵`, `\\trianglerighteq`),
  katexO(katexValue68, katexValue71, katexValue80, `⊩`, `\\Vdash`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `∣`, `\\shortmid`),
  katexO(katexValue68, katexValue71, katexValue80, `∥`, `\\shortparallel`),
  katexO(katexValue68, katexValue71, katexValue80, `≬`, `\\between`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋔`, `\\pitchfork`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `∝`, `\\varpropto`),
  katexO(katexValue68, katexValue71, katexValue80, `◀`, `\\blacktriangleleft`),
  katexO(katexValue68, katexValue71, katexValue80, `∴`, `\\therefore`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `∍`, `\\backepsilon`),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `▶`,
    `\\blacktriangleright`,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `∵`, `\\because`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⋘`, `\\llless`),
  katexO(katexValue68, katexValue71, katexValue80, `⋙`, `\\gggtr`),
  katexO(katexValue68, katexValue71, katexValue73, `⊲`, `\\lhd`),
  katexO(katexValue68, katexValue71, katexValue73, `⊳`, `\\rhd`),
  katexO(katexValue68, katexValue71, katexValue80, `≂`, `\\eqsim`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⋈`, `\\Join`),
  katexO(katexValue68, katexValue71, katexValue80, `≑`, `\\Doteq`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `∔`, `\\dotplus`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `∖`, `\\smallsetminus`),
  katexO(katexValue68, katexValue71, katexValue73, `⋒`, `\\Cap`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋓`, `\\Cup`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⩞`, `\\doublebarwedge`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊟`, `\\boxminus`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊞`, `\\boxplus`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋇`, `\\divideontimes`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋉`, `\\ltimes`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋊`, `\\rtimes`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋋`, `\\leftthreetimes`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue73,
    `⋌`,
    `\\rightthreetimes`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue73, `⋏`, `\\curlywedge`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋎`, `\\curlyvee`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊝`, `\\circleddash`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊛`, `\\circledast`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋅`, `\\centerdot`),
  katexO(katexValue68, katexValue71, katexValue73, `⊺`, `\\intercal`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⋒`, `\\doublecap`),
  katexO(katexValue68, katexValue71, katexValue73, `⋓`, `\\doublecup`),
  katexO(katexValue68, katexValue71, katexValue73, `⊠`, `\\boxtimes`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇢`, `\\dashrightarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇠`, `\\dashleftarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇇`, `\\leftleftarrows`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇆`,
    `\\leftrightarrows`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `⇚`, `\\Lleftarrow`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↞`,
    `\\twoheadleftarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `↢`, `\\leftarrowtail`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↫`, `\\looparrowleft`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇋`,
    `\\leftrightharpoons`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `↶`, `\\curvearrowleft`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↺`,
    `\\circlearrowleft`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `↰`, `\\Lsh`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇈`, `\\upuparrows`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↿`, `\\upharpoonleft`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇃`,
    `\\downharpoonleft`,
    !0,
  ),
  katexO(katexValue68, katexValue70, katexValue80, `⊶`, `\\origof`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊷`, `\\imageof`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊸`, `\\multimap`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↭`,
    `\\leftrightsquigarrow`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇉`,
    `\\rightrightarrows`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇄`,
    `\\rightleftarrows`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↠`,
    `\\twoheadrightarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `↣`, `\\rightarrowtail`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↬`, `\\looparrowright`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↷`,
    `\\curvearrowright`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `↻`,
    `\\circlearrowright`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `↱`, `\\Rsh`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⇊`, `\\downdownarrows`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↾`, `\\upharpoonright`, !0),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇂`,
    `\\downharpoonright`,
    !0,
  ),
  katexO(
    katexValue68,
    katexValue71,
    katexValue80,
    `⇝`,
    `\\rightsquigarrow`,
    !0,
  ),
  katexO(katexValue68, katexValue71, katexValue80, `⇝`, `\\leadsto`),
  katexO(katexValue68, katexValue71, katexValue80, `⇛`, `\\Rrightarrow`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `↾`, `\\restriction`),
  katexO(katexValue68, katexValue70, katexValue81, `‘`, "`"),
  katexO(katexValue68, katexValue70, katexValue81, `$`, `\\$`),
  katexO(katexValue69, katexValue70, katexValue81, `$`, `\\$`),
  katexO(katexValue69, katexValue70, katexValue81, `$`, `\\textdollar`),
  katexO(katexValue68, katexValue70, katexValue81, `%`, `\\%`),
  katexO(katexValue69, katexValue70, katexValue81, `%`, `\\%`),
  katexO(katexValue68, katexValue70, katexValue81, `_`, `\\_`),
  katexO(katexValue69, katexValue70, katexValue81, `_`, `\\_`),
  katexO(katexValue69, katexValue70, katexValue81, `_`, `\\textunderscore`),
  katexO(katexValue68, katexValue70, katexValue81, `∠`, `\\angle`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∞`, `\\infty`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `′`, `\\prime`),
  katexO(katexValue68, katexValue70, katexValue81, `△`, `\\triangle`),
  katexO(katexValue68, katexValue70, katexValue81, `Γ`, `\\Gamma`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Δ`, `\\Delta`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Θ`, `\\Theta`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Λ`, `\\Lambda`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Ξ`, `\\Xi`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Π`, `\\Pi`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Σ`, `\\Sigma`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Υ`, `\\Upsilon`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Φ`, `\\Phi`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Ψ`, `\\Psi`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `Ω`, `\\Omega`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `A`, `Α`),
  katexO(katexValue68, katexValue70, katexValue81, `B`, `Β`),
  katexO(katexValue68, katexValue70, katexValue81, `E`, `Ε`),
  katexO(katexValue68, katexValue70, katexValue81, `Z`, `Ζ`),
  katexO(katexValue68, katexValue70, katexValue81, `H`, `Η`),
  katexO(katexValue68, katexValue70, katexValue81, `I`, `Ι`),
  katexO(katexValue68, katexValue70, katexValue81, `K`, `Κ`),
  katexO(katexValue68, katexValue70, katexValue81, `M`, `Μ`),
  katexO(katexValue68, katexValue70, katexValue81, `N`, `Ν`),
  katexO(katexValue68, katexValue70, katexValue81, `O`, `Ο`),
  katexO(katexValue68, katexValue70, katexValue81, `P`, `Ρ`),
  katexO(katexValue68, katexValue70, katexValue81, `T`, `Τ`),
  katexO(katexValue68, katexValue70, katexValue81, `X`, `Χ`),
  katexO(katexValue68, katexValue70, katexValue81, `¬`, `\\neg`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `¬`, `\\lnot`),
  katexO(katexValue68, katexValue70, katexValue81, `⊤`, `\\top`),
  katexO(katexValue68, katexValue70, katexValue81, `⊥`, `\\bot`),
  katexO(katexValue68, katexValue70, katexValue81, `∅`, `\\emptyset`),
  katexO(katexValue68, katexValue71, katexValue81, `∅`, `\\varnothing`),
  katexO(katexValue68, katexValue70, katexValue76, `α`, `\\alpha`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `β`, `\\beta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `γ`, `\\gamma`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `δ`, `\\delta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ϵ`, `\\epsilon`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ζ`, `\\zeta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `η`, `\\eta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `θ`, `\\theta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ι`, `\\iota`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `κ`, `\\kappa`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `λ`, `\\lambda`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `μ`, `\\mu`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ν`, `\\nu`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ξ`, `\\xi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ο`, `\\omicron`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `π`, `\\pi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ρ`, `\\rho`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `σ`, `\\sigma`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `τ`, `\\tau`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `υ`, `\\upsilon`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ϕ`, `\\phi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `χ`, `\\chi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ψ`, `\\psi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ω`, `\\omega`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ε`, `\\varepsilon`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ϑ`, `\\vartheta`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ϖ`, `\\varpi`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ϱ`, `\\varrho`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `ς`, `\\varsigma`, !0),
  katexO(katexValue68, katexValue70, katexValue76, `φ`, `\\varphi`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∗`, `*`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `+`, `+`),
  katexO(katexValue68, katexValue70, katexValue73, `−`, `-`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⋅`, `\\cdot`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∘`, `\\circ`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `÷`, `\\div`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `±`, `\\pm`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `×`, `\\times`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∩`, `\\cap`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∪`, `\\cup`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∖`, `\\setminus`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∧`, `\\land`),
  katexO(katexValue68, katexValue70, katexValue73, `∨`, `\\lor`),
  katexO(katexValue68, katexValue70, katexValue73, `∧`, `\\wedge`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `∨`, `\\vee`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `√`, `\\surd`),
  katexO(katexValue68, katexValue70, katexValue78, `⟨`, `\\langle`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `∣`, `\\lvert`),
  katexO(katexValue68, katexValue70, katexValue78, `∥`, `\\lVert`),
  katexO(katexValue68, katexValue70, katexValue74, `?`, `?`),
  katexO(katexValue68, katexValue70, katexValue74, `!`, `!`),
  katexO(katexValue68, katexValue70, katexValue74, `⟩`, `\\rangle`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `∣`, `\\rvert`),
  katexO(katexValue68, katexValue70, katexValue74, `∥`, `\\rVert`),
  katexO(katexValue68, katexValue70, katexValue80, `=`, `=`),
  katexO(katexValue68, katexValue70, katexValue80, `:`, `:`),
  katexO(katexValue68, katexValue70, katexValue80, `≈`, `\\approx`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≅`, `\\cong`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≥`, `\\ge`),
  katexO(katexValue68, katexValue70, katexValue80, `≥`, `\\geq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `←`, `\\gets`),
  katexO(katexValue68, katexValue70, katexValue80, `>`, `\\gt`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `∈`, `\\in`, !0),
  katexO(katexValue68, katexValue70, katexValue80, ``, `\\@not`),
  katexO(katexValue68, katexValue70, katexValue80, `⊂`, `\\subset`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊃`, `\\supset`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊆`, `\\subseteq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊇`, `\\supseteq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊈`, `\\nsubseteq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `⊉`, `\\nsupseteq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⊨`, `\\models`),
  katexO(katexValue68, katexValue70, katexValue80, `←`, `\\leftarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `≤`, `\\le`),
  katexO(katexValue68, katexValue70, katexValue80, `≤`, `\\leq`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `<`, `\\lt`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `→`, `\\rightarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `→`, `\\to`),
  katexO(katexValue68, katexValue71, katexValue80, `≱`, `\\ngeq`, !0),
  katexO(katexValue68, katexValue71, katexValue80, `≰`, `\\nleq`, !0),
  katexO(katexValue68, katexValue70, $e, `\xA0`, `\\ `),
  katexO(katexValue68, katexValue70, $e, `\xA0`, `\\space`),
  katexO(katexValue68, katexValue70, $e, `\xA0`, `\\nobreakspace`),
  katexO(katexValue69, katexValue70, $e, `\xA0`, `\\ `),
  katexO(katexValue69, katexValue70, $e, `\xA0`, ` `),
  katexO(katexValue69, katexValue70, $e, `\xA0`, `\\space`),
  katexO(katexValue69, katexValue70, $e, `\xA0`, `\\nobreakspace`),
  katexO(katexValue68, katexValue70, $e, null, `\\nobreak`),
  katexO(katexValue68, katexValue70, $e, null, `\\allowbreak`),
  katexO(katexValue68, katexValue70, katexValue79, `,`, `,`),
  katexO(katexValue68, katexValue70, katexValue79, `;`, `;`),
  katexO(katexValue68, katexValue71, katexValue73, `⊼`, `\\barwedge`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊻`, `\\veebar`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊙`, `\\odot`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊕`, `\\oplus`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊗`, `\\otimes`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∂`, `\\partial`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `⊘`, `\\oslash`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊚`, `\\circledcirc`, !0),
  katexO(katexValue68, katexValue71, katexValue73, `⊡`, `\\boxdot`, !0),
  katexO(katexValue68, katexValue70, katexValue73, `△`, `\\bigtriangleup`),
  katexO(katexValue68, katexValue70, katexValue73, `▽`, `\\bigtriangledown`),
  katexO(katexValue68, katexValue70, katexValue73, `†`, `\\dagger`),
  katexO(katexValue68, katexValue70, katexValue73, `⋄`, `\\diamond`),
  katexO(katexValue68, katexValue70, katexValue73, `⋆`, `\\star`),
  katexO(katexValue68, katexValue70, katexValue73, `◃`, `\\triangleleft`),
  katexO(katexValue68, katexValue70, katexValue73, `▹`, `\\triangleright`),
  katexO(katexValue68, katexValue70, katexValue78, `{`, `\\{`),
  katexO(katexValue69, katexValue70, katexValue81, `{`, `\\{`),
  katexO(katexValue69, katexValue70, katexValue81, `{`, `\\textbraceleft`),
  katexO(katexValue68, katexValue70, katexValue74, `}`, `\\}`),
  katexO(katexValue69, katexValue70, katexValue81, `}`, `\\}`),
  katexO(katexValue69, katexValue70, katexValue81, `}`, `\\textbraceright`),
  katexO(katexValue68, katexValue70, katexValue78, `{`, `\\lbrace`),
  katexO(katexValue68, katexValue70, katexValue74, `}`, `\\rbrace`),
  katexO(katexValue68, katexValue70, katexValue78, `[`, `\\lbrack`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `[`, `\\lbrack`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `]`, `\\rbrack`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `]`, `\\rbrack`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `(`, `\\lparen`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `)`, `\\rparen`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `<`, `\\textless`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `>`, `\\textgreater`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `⌊`, `\\lfloor`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `⌋`, `\\rfloor`, !0),
  katexO(katexValue68, katexValue70, katexValue78, `⌈`, `\\lceil`, !0),
  katexO(katexValue68, katexValue70, katexValue74, `⌉`, `\\rceil`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `\\`, `\\backslash`),
  katexO(katexValue68, katexValue70, katexValue81, `∣`, `|`),
  katexO(katexValue68, katexValue70, katexValue81, `∣`, `\\vert`),
  katexO(katexValue69, katexValue70, katexValue81, `|`, `\\textbar`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `∥`, `\\|`),
  katexO(katexValue68, katexValue70, katexValue81, `∥`, `\\Vert`),
  katexO(katexValue69, katexValue70, katexValue81, `∥`, `\\textbardbl`),
  katexO(katexValue69, katexValue70, katexValue81, `~`, `\\textasciitilde`),
  katexO(katexValue69, katexValue70, katexValue81, `\\`, `\\textbackslash`),
  katexO(katexValue69, katexValue70, katexValue81, `^`, `\\textasciicircum`),
  katexO(katexValue68, katexValue70, katexValue80, `↑`, `\\uparrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇑`, `\\Uparrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↓`, `\\downarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇓`, `\\Downarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `↕`, `\\updownarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue80, `⇕`, `\\Updownarrow`, !0),
  katexO(katexValue68, katexValue70, katexValue77, `∐`, `\\coprod`),
  katexO(katexValue68, katexValue70, katexValue77, `⋁`, `\\bigvee`),
  katexO(katexValue68, katexValue70, katexValue77, `⋀`, `\\bigwedge`),
  katexO(katexValue68, katexValue70, katexValue77, `⨄`, `\\biguplus`),
  katexO(katexValue68, katexValue70, katexValue77, `⋂`, `\\bigcap`),
  katexO(katexValue68, katexValue70, katexValue77, `⋃`, `\\bigcup`),
  katexO(katexValue68, katexValue70, katexValue77, `∫`, `\\int`),
  katexO(katexValue68, katexValue70, katexValue77, `∫`, `\\intop`),
  katexO(katexValue68, katexValue70, katexValue77, `∬`, `\\iint`),
  katexO(katexValue68, katexValue70, katexValue77, `∭`, `\\iiint`),
  katexO(katexValue68, katexValue70, katexValue77, `∏`, `\\prod`),
  katexO(katexValue68, katexValue70, katexValue77, `∑`, `\\sum`),
  katexO(katexValue68, katexValue70, katexValue77, `⨂`, `\\bigotimes`),
  katexO(katexValue68, katexValue70, katexValue77, `⨁`, `\\bigoplus`),
  katexO(katexValue68, katexValue70, katexValue77, `⨀`, `\\bigodot`),
  katexO(katexValue68, katexValue70, katexValue77, `∮`, `\\oint`),
  katexO(katexValue68, katexValue70, katexValue77, `∯`, `\\oiint`),
  katexO(katexValue68, katexValue70, katexValue77, `∰`, `\\oiiint`),
  katexO(katexValue68, katexValue70, katexValue77, `⨆`, `\\bigsqcup`),
  katexO(katexValue68, katexValue70, katexValue77, `∫`, `\\smallint`),
  katexO(katexValue69, katexValue70, katexValue75, `…`, `\\textellipsis`),
  katexO(katexValue68, katexValue70, katexValue75, `…`, `\\mathellipsis`),
  katexO(katexValue69, katexValue70, katexValue75, `…`, `\\ldots`, !0),
  katexO(katexValue68, katexValue70, katexValue75, `…`, `\\ldots`, !0),
  katexO(katexValue68, katexValue70, katexValue75, `⋯`, `\\@cdots`, !0),
  katexO(katexValue68, katexValue70, katexValue75, `⋱`, `\\ddots`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `⋮`, `\\varvdots`),
  katexO(katexValue69, katexValue70, katexValue81, `⋮`, `\\varvdots`),
  katexO(katexValue68, katexValue70, katexValue72, `ˊ`, `\\acute`),
  katexO(katexValue68, katexValue70, katexValue72, `ˋ`, `\\grave`),
  katexO(katexValue68, katexValue70, katexValue72, `¨`, `\\ddot`),
  katexO(katexValue68, katexValue70, katexValue72, `~`, `\\tilde`),
  katexO(katexValue68, katexValue70, katexValue72, `ˉ`, `\\bar`),
  katexO(katexValue68, katexValue70, katexValue72, `˘`, `\\breve`),
  katexO(katexValue68, katexValue70, katexValue72, `ˇ`, `\\check`),
  katexO(katexValue68, katexValue70, katexValue72, `^`, `\\hat`),
  katexO(katexValue68, katexValue70, katexValue72, `⃗`, `\\vec`),
  katexO(katexValue68, katexValue70, katexValue72, `˙`, `\\dot`),
  katexO(katexValue68, katexValue70, katexValue72, `˚`, `\\mathring`),
  katexO(katexValue68, katexValue70, katexValue76, ``, `\\@imath`),
  katexO(katexValue68, katexValue70, katexValue76, ``, `\\@jmath`),
  katexO(katexValue68, katexValue70, katexValue81, `ı`, `ı`),
  katexO(katexValue68, katexValue70, katexValue81, `ȷ`, `ȷ`),
  katexO(katexValue69, katexValue70, katexValue81, `ı`, `\\i`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `ȷ`, `\\j`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `ß`, `\\ss`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `æ`, `\\ae`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `œ`, `\\oe`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `ø`, `\\o`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `Æ`, `\\AE`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `Œ`, `\\OE`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `Ø`, `\\O`, !0),
  katexO(katexValue69, katexValue70, katexValue72, `ˊ`, `\\'`),
  katexO(katexValue69, katexValue70, katexValue72, `ˋ`, "\\`"),
  katexO(katexValue69, katexValue70, katexValue72, `ˆ`, `\\^`),
  katexO(katexValue69, katexValue70, katexValue72, `˜`, `\\~`),
  katexO(katexValue69, katexValue70, katexValue72, `ˉ`, `\\=`),
  katexO(katexValue69, katexValue70, katexValue72, `˘`, `\\u`),
  katexO(katexValue69, katexValue70, katexValue72, `˙`, `\\.`),
  katexO(katexValue69, katexValue70, katexValue72, `¸`, `\\c`),
  katexO(katexValue69, katexValue70, katexValue72, `˚`, `\\r`),
  katexO(katexValue69, katexValue70, katexValue72, `ˇ`, `\\v`),
  katexO(katexValue69, katexValue70, katexValue72, `¨`, `\\"`),
  katexO(katexValue69, katexValue70, katexValue72, `˝`, `\\H`),
  katexO(katexValue69, katexValue70, katexValue72, `◯`, `\\textcircled`));
var katexValue82 = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0,
};
(katexO(katexValue69, katexValue70, katexValue81, `–`, `--`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `–`, `\\textendash`),
  katexO(katexValue69, katexValue70, katexValue81, `—`, `---`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `—`, `\\textemdash`),
  katexO(katexValue69, katexValue70, katexValue81, `‘`, "`", !0),
  katexO(katexValue69, katexValue70, katexValue81, `‘`, `\\textquoteleft`),
  katexO(katexValue69, katexValue70, katexValue81, `’`, `'`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `’`, `\\textquoteright`),
  katexO(katexValue69, katexValue70, katexValue81, `“`, "``", !0),
  katexO(katexValue69, katexValue70, katexValue81, `“`, `\\textquotedblleft`),
  katexO(katexValue69, katexValue70, katexValue81, `”`, `''`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `”`, `\\textquotedblright`),
  katexO(katexValue68, katexValue70, katexValue81, `°`, `\\degree`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `°`, `\\degree`),
  katexO(katexValue69, katexValue70, katexValue81, `°`, `\\textdegree`, !0),
  katexO(katexValue68, katexValue70, katexValue81, `£`, `\\pounds`),
  katexO(katexValue68, katexValue70, katexValue81, `£`, `\\mathsterling`, !0),
  katexO(katexValue69, katexValue70, katexValue81, `£`, `\\pounds`),
  katexO(katexValue69, katexValue70, katexValue81, `£`, `\\textsterling`, !0),
  katexO(katexValue68, katexValue71, katexValue81, `✠`, `\\maltese`),
  katexO(katexValue69, katexValue71, katexValue81, `✠`, `\\maltese`));
for (
  var katexValue83 = `0123456789/@."`, katexValue84 = 0;
  katexValue84 < katexValue83.length;
  katexValue84++
) {
  var katexValue85 = katexValue83.charAt(katexValue84);
  katexO(katexValue68, katexValue70, katexValue81, katexValue85, katexValue85);
}
for (
  var katexValue86 = `0123456789!@*()-=+";:?/.,`, at = 0;
  at < katexValue86.length;
  at++
) {
  var katexValue87 = katexValue86.charAt(at);
  katexO(katexValue69, katexValue70, katexValue81, katexValue87, katexValue87);
}
for (
  var katexValue88 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,
    katexValue89 = 0;
  katexValue89 < katexValue88.length;
  katexValue89++
) {
  var katexValue90 = katexValue88.charAt(katexValue89);
  (katexO(katexValue68, katexValue70, katexValue76, katexValue90, katexValue90),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue90,
      katexValue90,
    ));
}
(katexO(katexValue68, katexValue71, katexValue81, `C`, `ℂ`),
  katexO(katexValue69, katexValue71, katexValue81, `C`, `ℂ`),
  katexO(katexValue68, katexValue71, katexValue81, `H`, `ℍ`),
  katexO(katexValue69, katexValue71, katexValue81, `H`, `ℍ`),
  katexO(katexValue68, katexValue71, katexValue81, `N`, `ℕ`),
  katexO(katexValue69, katexValue71, katexValue81, `N`, `ℕ`),
  katexO(katexValue68, katexValue71, katexValue81, `P`, `ℙ`),
  katexO(katexValue69, katexValue71, katexValue81, `P`, `ℙ`),
  katexO(katexValue68, katexValue71, katexValue81, `Q`, `ℚ`),
  katexO(katexValue69, katexValue71, katexValue81, `Q`, `ℚ`),
  katexO(katexValue68, katexValue71, katexValue81, `R`, `ℝ`),
  katexO(katexValue69, katexValue71, katexValue81, `R`, `ℝ`),
  katexO(katexValue68, katexValue71, katexValue81, `Z`, `ℤ`),
  katexO(katexValue69, katexValue71, katexValue81, `Z`, `ℤ`),
  katexO(katexValue68, katexValue70, katexValue76, `h`, `ℎ`),
  katexO(katexValue69, katexValue70, katexValue76, `h`, `ℎ`));
for (
  var katexValue91 = ``, katexValue92 = 0;
  katexValue92 < katexValue88.length;
  katexValue92++
) {
  var katexValue93 = katexValue88.charAt(katexValue92);
  ((katexValue91 = String.fromCharCode(55349, 56320 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56372 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56424 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56580 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56684 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56736 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56788 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56840 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    (katexValue91 = String.fromCharCode(55349, 56944 + katexValue92)),
    katexO(
      katexValue68,
      katexValue70,
      katexValue76,
      katexValue93,
      katexValue91,
    ),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue93,
      katexValue91,
    ),
    katexValue92 < 26 &&
      ((katexValue91 = String.fromCharCode(55349, 56632 + katexValue92)),
      katexO(
        katexValue68,
        katexValue70,
        katexValue76,
        katexValue93,
        katexValue91,
      ),
      katexO(
        katexValue69,
        katexValue70,
        katexValue81,
        katexValue93,
        katexValue91,
      ),
      (katexValue91 = String.fromCharCode(55349, 56476 + katexValue92)),
      katexO(
        katexValue68,
        katexValue70,
        katexValue76,
        katexValue93,
        katexValue91,
      ),
      katexO(
        katexValue69,
        katexValue70,
        katexValue81,
        katexValue93,
        katexValue91,
      )));
}
((katexValue91 = String.fromCharCode(55349, 56668)),
  katexO(katexValue68, katexValue70, katexValue76, `k`, katexValue91),
  katexO(katexValue69, katexValue70, katexValue81, `k`, katexValue91));
for (var katexValue94 = 0; katexValue94 < 10; katexValue94++) {
  var ft = katexValue94.toString();
  ((katexValue91 = String.fromCharCode(55349, 57294 + katexValue94)),
    katexO(katexValue68, katexValue70, katexValue76, ft, katexValue91),
    katexO(katexValue69, katexValue70, katexValue81, ft, katexValue91),
    (katexValue91 = String.fromCharCode(55349, 57314 + katexValue94)),
    katexO(katexValue68, katexValue70, katexValue76, ft, katexValue91),
    katexO(katexValue69, katexValue70, katexValue81, ft, katexValue91),
    (katexValue91 = String.fromCharCode(55349, 57324 + katexValue94)),
    katexO(katexValue68, katexValue70, katexValue76, ft, katexValue91),
    katexO(katexValue69, katexValue70, katexValue81, ft, katexValue91),
    (katexValue91 = String.fromCharCode(55349, 57334 + katexValue94)),
    katexO(katexValue68, katexValue70, katexValue76, ft, katexValue91),
    katexO(katexValue69, katexValue70, katexValue81, ft, katexValue91));
}
for (
  var katexValue95 = `ÐÞþ`, katexValue96 = 0;
  katexValue96 < katexValue95.length;
  katexValue96++
) {
  var katexValue97 = katexValue95.charAt(katexValue96);
  (katexO(katexValue68, katexValue70, katexValue76, katexValue97, katexValue97),
    katexO(
      katexValue69,
      katexValue70,
      katexValue81,
      katexValue97,
      katexValue97,
    ));
}
var katexValue98 = [
    [`mathbf`, `textbf`, `Main-Bold`],
    [`mathbf`, `textbf`, `Main-Bold`],
    [`mathnormal`, `textit`, `Math-Italic`],
    [`mathnormal`, `textit`, `Math-Italic`],
    [`boldsymbol`, `boldsymbol`, `Main-BoldItalic`],
    [`boldsymbol`, `boldsymbol`, `Main-BoldItalic`],
    [`mathscr`, `textscr`, `Script-Regular`],
    [``, ``, ``],
    [``, ``, ``],
    [``, ``, ``],
    [`mathfrak`, `textfrak`, `Fraktur-Regular`],
    [`mathfrak`, `textfrak`, `Fraktur-Regular`],
    [`mathbb`, `textbb`, `AMS-Regular`],
    [`mathbb`, `textbb`, `AMS-Regular`],
    [`mathboldfrak`, `textboldfrak`, `Fraktur-Regular`],
    [`mathboldfrak`, `textboldfrak`, `Fraktur-Regular`],
    [`mathsf`, `textsf`, `SansSerif-Regular`],
    [`mathsf`, `textsf`, `SansSerif-Regular`],
    [`mathboldsf`, `textboldsf`, `SansSerif-Bold`],
    [`mathboldsf`, `textboldsf`, `SansSerif-Bold`],
    [`mathitsf`, `textitsf`, `SansSerif-Italic`],
    [`mathitsf`, `textitsf`, `SansSerif-Italic`],
    [``, ``, ``],
    [``, ``, ``],
    [`mathtt`, `texttt`, `Typewriter-Regular`],
    [`mathtt`, `texttt`, `Typewriter-Regular`],
  ],
  _t = [
    [`mathbf`, `textbf`, `Main-Bold`],
    [``, ``, ``],
    [`mathsf`, `textsf`, `SansSerif-Regular`],
    [`mathboldsf`, `textboldsf`, `SansSerif-Bold`],
    [`mathtt`, `texttt`, `Typewriter-Regular`],
  ],
  katexValue99 = (katexParam109, katexParam110) => {
    var katexValue854 = katexParam109.charCodeAt(0),
      katexValue855 = katexParam109.charCodeAt(1),
      katexValue856 =
        (katexValue854 - 55296) * 1024 + (katexValue855 - 56320) + 65536,
      katexValue857 = katexParam110 === `math` ? 0 : 1;
    if (119808 <= katexValue856 && katexValue856 < 120484) {
      var katexValue858 = Math.floor((katexValue856 - 119808) / 26);
      return [
        katexValue98[katexValue858][2],
        katexValue98[katexValue858][katexValue857],
      ];
    } else if (120782 <= katexValue856 && katexValue856 <= 120831) {
      var katexValue859 = Math.floor((katexValue856 - 120782) / 10);
      return [_t[katexValue859][2], _t[katexValue859][katexValue857]];
    } else if (katexValue856 === 120485 || katexValue856 === 120486)
      return [katexValue98[0][2], katexValue98[0][katexValue857]];
    else if (120486 < katexValue856 && katexValue856 < 120782) return [``, ``];
    else throw new katexT(`Unsupported character: ` + katexParam109);
  },
  katexValue100 = function (_katexT, katexParam350, katexParam351) {
    if (katexValue67[katexParam351][_katexT]) {
      var katexValue1246 = katexValue67[katexParam351][_katexT].replace;
      katexValue1246 && (_katexT = katexValue1246);
    }
    return {
      value: _katexT,
      metrics: katexHelper6(_katexT, katexParam350, katexParam351),
    };
  },
  katexValue101 = function (
    _katexT,
    katexParam100,
    katexParam101,
    katexParam102,
    katexParam103,
  ) {
    var katexValue837 = katexValue100(_katexT, katexParam100, katexParam101),
      katexValue838 = katexValue837.metrics;
    _katexT = katexValue837.value;
    var katexValue839;
    if (katexValue838) {
      var katexValue840 = katexValue838.italic;
      ((katexParam101 === `text` ||
        (katexParam102 && katexParam102.font === `mathit`)) &&
        (katexValue840 = 0),
        (katexValue839 = new katexValue56(
          _katexT,
          katexValue838.height,
          katexValue838.depth,
          katexValue840,
          katexValue838.skew,
          katexValue838.width,
          katexParam103,
        )));
    } else
      (typeof console < `u` &&
        console.warn(
          `No character metrics ` +
            (`for '` +
              _katexT +
              `' in style '` +
              katexParam100 +
              `' and mode '` +
              katexParam101 +
              `'`),
        ),
        (katexValue839 = new katexValue56(
          _katexT,
          0,
          0,
          0,
          0,
          0,
          katexParam103,
        )));
    if (katexParam102) {
      ((katexValue839.maxFontSize = katexParam102.sizeMultiplier),
        katexParam102.style.isTight() && katexValue839.classes.push(`mtight`));
      var katexValue841 = katexParam102.getColor();
      katexValue841 && (katexValue839.style.color = katexValue841);
    }
    return katexValue839;
  },
  katexValue102 = function (
    _katexT,
    katexParam196,
    katexParam197,
    katexParam198,
  ) {
    return (
      katexParam198 === void 0 && (katexParam198 = []),
      katexParam197.font === `boldsymbol` &&
      katexValue100(_katexT, `Main-Bold`, katexParam196).metrics
        ? katexValue101(
            _katexT,
            `Main-Bold`,
            katexParam196,
            katexParam197,
            katexParam198.concat([`mathbf`]),
          )
        : _katexT === `\\` ||
            katexValue67[katexParam196][_katexT].font === `main`
          ? katexValue101(
              _katexT,
              `Main-Regular`,
              katexParam196,
              katexParam197,
              katexParam198,
            )
          : katexValue101(
              _katexT,
              `AMS-Regular`,
              katexParam196,
              katexParam197,
              katexParam198.concat([`amsrm`]),
            )
    );
  },
  katexValue103 = function (
    _katexT,
    katexParam255,
    katexParam256,
    katexParam257,
    katexParam258,
  ) {
    return katexParam258 !== `textord` &&
      katexValue100(_katexT, `Math-BoldItalic`, katexParam255).metrics
      ? {
          fontName: `Math-BoldItalic`,
          fontClass: `boldsymbol`,
        }
      : {
          fontName: `Main-Bold`,
          fontClass: `mathbf`,
        };
  },
  katexValue104 = function (_katexT, katexParam29, katexParam30) {
    var katexValue537 = _katexT.mode,
      katexValue538 = _katexT.text,
      katexValue539 = [`mord`],
      katexValue540 =
        katexValue537 === `math` ||
        (katexValue537 === `text` && katexParam29.font),
      katexValue541 = katexValue540
        ? katexParam29.font
        : katexParam29.fontFamily,
      katexValue542 = ``,
      katexValue543 = ``;
    if (
      (katexValue538.charCodeAt(0) === 55349 &&
        ([katexValue542, katexValue543] = katexValue99(
          katexValue538,
          katexValue537,
        )),
      katexValue542.length > 0)
    )
      return katexValue101(
        katexValue538,
        katexValue542,
        katexValue537,
        katexParam29,
        katexValue539.concat(katexValue543),
      );
    if (katexValue541) {
      var _katexN, katexValue544;
      if (katexValue541 === `boldsymbol`) {
        var katexValue545 = katexValue103(
          katexValue538,
          katexValue537,
          katexParam29,
          katexValue539,
          katexParam30,
        );
        ((_katexN = katexValue545.fontName),
          (katexValue544 = [katexValue545.fontClass]));
      } else
        katexValue540
          ? ((_katexN = katexValue118[katexValue541].fontName),
            (katexValue544 = [katexValue541]))
          : ((_katexN = katexValue117(
              katexValue541,
              katexParam29.fontWeight,
              katexParam29.fontShape,
            )),
            (katexValue544 = [
              katexValue541,
              katexParam29.fontWeight,
              katexParam29.fontShape,
            ]));
      if (katexValue100(katexValue538, _katexN, katexValue537).metrics)
        return katexValue101(
          katexValue538,
          _katexN,
          katexValue537,
          katexParam29,
          katexValue539.concat(katexValue544),
        );
      if (
        katexValue82.hasOwnProperty(katexValue538) &&
        _katexN.slice(0, 10) === `Typewriter`
      ) {
        for (
          var katexValue546 = [], katexValue547 = 0;
          katexValue547 < katexValue538.length;
          katexValue547++
        )
          katexValue546.push(
            katexValue101(
              katexValue538[katexValue547],
              _katexN,
              katexValue537,
              katexParam29,
              katexValue539.concat(katexValue544),
            ),
          );
        return katexValue112(katexValue546);
      }
    }
    if (katexParam30 === `mathord`)
      return katexValue101(
        katexValue538,
        `Math-Italic`,
        katexValue537,
        katexParam29,
        katexValue539.concat([`mathnormal`]),
      );
    if (katexParam30 === `textord`) {
      var katexValue548 =
        katexValue67[katexValue537][katexValue538] &&
        katexValue67[katexValue537][katexValue538].font;
      if (katexValue548 === `ams`)
        return katexValue101(
          katexValue538,
          katexValue117(
            `amsrm`,
            katexParam29.fontWeight,
            katexParam29.fontShape,
          ),
          katexValue537,
          katexParam29,
          katexValue539.concat(
            `amsrm`,
            katexParam29.fontWeight,
            katexParam29.fontShape,
          ),
        );
      if (katexValue548 === `main` || !katexValue548)
        return katexValue101(
          katexValue538,
          katexValue117(
            `textrm`,
            katexParam29.fontWeight,
            katexParam29.fontShape,
          ),
          katexValue537,
          katexParam29,
          katexValue539.concat(katexParam29.fontWeight, katexParam29.fontShape),
        );
      var katexValue549 = katexValue117(
        katexValue548,
        katexParam29.fontWeight,
        katexParam29.fontShape,
      );
      return katexValue101(
        katexValue538,
        katexValue549,
        katexValue537,
        katexParam29,
        katexValue539.concat(
          katexValue549,
          katexParam29.fontWeight,
          katexParam29.fontShape,
        ),
      );
    } else throw Error(`unexpected type: ` + katexParam30 + ` in makeOrd`);
  },
  katexValue105 = (_katexT, katexParam127) => {
    if (
      katexValue47(_katexT.classes) !== katexValue47(katexParam127.classes) ||
      _katexT.skew !== katexParam127.skew ||
      _katexT.maxFontSize !== katexParam127.maxFontSize ||
      (_katexT.italic !== 0 && _katexT.hasClass(`mathnormal`))
    )
      return !1;
    if (_katexT.classes.length === 1) {
      var katexValue896 = _katexT.classes[0];
      if (katexValue896 === `mbin` || katexValue896 === `mord`) return !1;
    }
    for (var katexValue897 of Object.keys(_katexT.style))
      if (_katexT.style[katexValue897] !== katexParam127.style[katexValue897])
        return !1;
    for (var katexValue898 of Object.keys(katexParam127.style))
      if (_katexT.style[katexValue898] !== katexParam127.style[katexValue898])
        return !1;
    return !0;
  },
  katexValue106 = (_katexT) => {
    for (
      var katexValue1057 = 0;
      katexValue1057 < _katexT.length - 1;
      katexValue1057++
    ) {
      var katexValue1058 = _katexT[katexValue1057],
        katexValue1059 = _katexT[katexValue1057 + 1];
      katexValue1058 instanceof katexValue56 &&
        katexValue1059 instanceof katexValue56 &&
        katexValue105(katexValue1058, katexValue1059) &&
        ((katexValue1058.text += katexValue1059.text),
        (katexValue1058.height = Math.max(
          katexValue1058.height,
          katexValue1059.height,
        )),
        (katexValue1058.depth = Math.max(
          katexValue1058.depth,
          katexValue1059.depth,
        )),
        (katexValue1058.italic = katexValue1059.italic),
        _katexT.splice(katexValue1057 + 1, 1),
        katexValue1057--);
    }
    return _katexT;
  },
  katexValue107 = function (_katexT) {
    for (
      var katexValue1096 = 0,
        katexValue1097 = 0,
        katexValue1098 = 0,
        katexValue1099 = 0;
      katexValue1099 < _katexT.children.length;
      katexValue1099++
    ) {
      var katexValue1100 = _katexT.children[katexValue1099];
      (katexValue1100.height > katexValue1096 &&
        (katexValue1096 = katexValue1100.height),
        katexValue1100.depth > katexValue1097 &&
          (katexValue1097 = katexValue1100.depth),
        katexValue1100.maxFontSize > katexValue1098 &&
          (katexValue1098 = katexValue1100.maxFontSize));
    }
    ((_katexT.height = katexValue1096),
      (_katexT.depth = katexValue1097),
      (_katexT.maxFontSize = katexValue1098));
  },
  katexValue108 = function (
    _katexT,
    katexParam418,
    katexParam419,
    katexParam420,
  ) {
    var katexValue1279 = new katexValue52(
      _katexT,
      katexParam418,
      katexParam419,
      katexParam420,
    );
    return (katexValue107(katexValue1279), katexValue1279);
  },
  katexValue109 = (_katexT, katexParam457, katexParam458, katexParam459) =>
    new katexValue52(_katexT, katexParam457, katexParam458, katexParam459),
  katexValue110 = function (_katexT, katexParam243, katexParam244) {
    var katexValue1128 = katexValue108([_katexT], [], katexParam243);
    return (
      (katexValue1128.height = Math.max(
        katexParam244 || katexParam243.fontMetrics().defaultRuleThickness,
        katexParam243.minRuleThickness,
      )),
      (katexValue1128.style.borderBottomWidth = katexValue46(
        katexValue1128.height,
      )),
      (katexValue1128.maxFontSize = 1),
      katexValue1128
    );
  },
  katexValue111 = function (
    _katexT,
    katexParam421,
    katexParam422,
    katexParam423,
  ) {
    var katexValue1280 = new katexValue53(
      _katexT,
      katexParam421,
      katexParam422,
      katexParam423,
    );
    return (katexValue107(katexValue1280), katexValue1280);
  },
  katexValue112 = function (_katexT) {
    var katexValue1283 = new be(_katexT);
    return (katexValue107(katexValue1283), katexValue1283);
  },
  katexValue113 = function (_katexT, katexParam430) {
    return _katexT instanceof be
      ? katexValue108([], [_katexT], katexParam430)
      : _katexT;
  },
  katexValue114 = function (_katexT) {
    if (_katexT.positionType === `individualShift`) {
      for (
        var katexValue626 = _katexT.children,
          katexValue627 = [katexValue626[0]],
          katexValue628 = -katexValue626[0].shift - katexValue626[0].elem.depth,
          katexValue629 = katexValue628,
          katexValue630 = 1;
        katexValue630 < katexValue626.length;
        katexValue630++
      ) {
        var katexValue631 =
            -katexValue626[katexValue630].shift -
            katexValue629 -
            katexValue626[katexValue630].elem.depth,
          katexValue632 =
            katexValue631 -
            (katexValue626[katexValue630 - 1].elem.height +
              katexValue626[katexValue630 - 1].elem.depth);
        ((katexValue629 += katexValue631),
          katexValue627.push({
            type: `kern`,
            size: katexValue632,
          }),
          katexValue627.push(katexValue626[katexValue630]));
      }
      return {
        children: katexValue627,
        depth: katexValue628,
      };
    }
    var katexValue633;
    if (_katexT.positionType === `top`) {
      for (
        var katexValue634 = _katexT.positionData, _katexN = 0;
        _katexN < _katexT.children.length;
        _katexN++
      ) {
        var katexValue635 = _katexT.children[_katexN];
        katexValue634 -=
          katexValue635.type === `kern`
            ? katexValue635.size
            : katexValue635.elem.height + katexValue635.elem.depth;
      }
      katexValue633 = katexValue634;
    } else if (_katexT.positionType === `bottom`)
      katexValue633 = -_katexT.positionData;
    else {
      var katexValue636 = _katexT.children[0];
      if (katexValue636.type !== `elem`)
        throw Error(`First child must have type "elem".`);
      if (_katexT.positionType === `shift`)
        katexValue633 = -katexValue636.elem.depth - _katexT.positionData;
      else if (_katexT.positionType === `firstBaseline`)
        katexValue633 = -katexValue636.elem.depth;
      else throw Error(`Invalid positionType ` + _katexT.positionType + `.`);
    }
    return {
      children: _katexT.children,
      depth: katexValue633,
    };
  },
  katexValue115 = function (_katexT, katexParam37) {
    for (
      var { children: children, depth: depth } = katexValue114(_katexT),
        katexValue586 = 0,
        katexValue587 = 0;
      katexValue587 < children.length;
      katexValue587++
    ) {
      var katexValue588 = children[katexValue587];
      if (katexValue588.type === `elem`) {
        var katexValue589 = katexValue588.elem;
        katexValue586 = Math.max(
          katexValue586,
          katexValue589.maxFontSize,
          katexValue589.height,
        );
      }
    }
    katexValue586 += 2;
    var katexValue590 = katexValue108([`pstrut`], []);
    katexValue590.style.height = katexValue46(katexValue586);
    for (
      var katexValue591 = [],
        _katexN = depth,
        katexValue592 = depth,
        katexValue593 = depth,
        katexValue594 = 0;
      katexValue594 < children.length;
      katexValue594++
    ) {
      var katexValue595 = children[katexValue594];
      if (katexValue595.type === `kern`) katexValue593 += katexValue595.size;
      else {
        var katexValue596 = katexValue595.elem,
          katexValue597 = katexValue595.wrapperClasses || [],
          katexValue598 = katexValue595.wrapperStyle || {},
          katexValue599 = katexValue108(
            katexValue597,
            [katexValue590, katexValue596],
            void 0,
            katexValue598,
          );
        ((katexValue599.style.top = katexValue46(
          -katexValue586 - katexValue593 - katexValue596.depth,
        )),
          katexValue595.marginLeft &&
            (katexValue599.style.marginLeft = katexValue595.marginLeft),
          katexValue595.marginRight &&
            (katexValue599.style.marginRight = katexValue595.marginRight),
          katexValue591.push(katexValue599),
          (katexValue593 += katexValue596.height + katexValue596.depth));
      }
      ((_katexN = Math.min(_katexN, katexValue593)),
        (katexValue592 = Math.max(katexValue592, katexValue593)));
    }
    var katexValue600 = katexValue108([`vlist`], katexValue591);
    katexValue600.style.height = katexValue46(katexValue592);
    var katexValue601;
    if (_katexN < 0) {
      var katexValue602 = katexValue108([`vlist`], [katexValue108([], [])]);
      ((katexValue602.style.height = katexValue46(-_katexN)),
        (katexValue601 = [
          katexValue108(
            [`vlist-r`],
            [
              katexValue600,
              katexValue108([`vlist-s`], [new katexValue56(`​`)]),
            ],
          ),
          katexValue108([`vlist-r`], [katexValue602]),
        ]));
    } else katexValue601 = [katexValue108([`vlist-r`], [katexValue600])];
    var katexValue603 = katexValue108([`vlist-t`], katexValue601);
    return (
      katexValue601.length === 2 && katexValue603.classes.push(`vlist-t2`),
      (katexValue603.height = katexValue592),
      (katexValue603.depth = -_katexN),
      katexValue603
    );
  },
  katexValue116 = (_katexT, katexParam387) => {
    var katexValue1266 = katexValue108([`mspace`], [], katexParam387),
      katexValue1267 = katexValue45(_katexT, katexParam387);
    return (
      (katexValue1266.style.marginRight = katexValue46(katexValue1267)),
      katexValue1266
    );
  },
  katexValue117 = function (_katexT, katexParam168, katexParam169) {
    var katexValue989 = ``;
    switch (_katexT) {
      case `amsrm`:
        katexValue989 = `AMS`;
        break;
      case `textrm`:
        katexValue989 = `Main`;
        break;
      case `textsf`:
        katexValue989 = `SansSerif`;
        break;
      case `texttt`:
        katexValue989 = `Typewriter`;
        break;
      default:
        katexValue989 = _katexT;
    }
    var katexValue990 =
      katexParam168 === `textbf` && katexParam169 === `textit`
        ? `BoldItalic`
        : katexParam168 === `textbf`
          ? `Bold`
          : katexParam168 === `textit`
            ? `Italic`
            : `Regular`;
    return katexValue989 + `-` + katexValue990;
  },
  katexValue118 = {
    mathbf: {
      variant: `bold`,
      fontName: `Main-Bold`,
    },
    mathrm: {
      variant: `normal`,
      fontName: `Main-Regular`,
    },
    textit: {
      variant: `italic`,
      fontName: `Main-Italic`,
    },
    mathit: {
      variant: `italic`,
      fontName: `Main-Italic`,
    },
    mathnormal: {
      variant: `italic`,
      fontName: `Math-Italic`,
    },
    mathsfit: {
      variant: `sans-serif-italic`,
      fontName: `SansSerif-Italic`,
    },
    mathbb: {
      variant: `double-struck`,
      fontName: `AMS-Regular`,
    },
    mathcal: {
      variant: `script`,
      fontName: `Caligraphic-Regular`,
    },
    mathfrak: {
      variant: `fraktur`,
      fontName: `Fraktur-Regular`,
    },
    mathscr: {
      variant: `script`,
      fontName: `Script-Regular`,
    },
    mathsf: {
      variant: `sans-serif`,
      fontName: `SansSerif-Regular`,
    },
    mathtt: {
      variant: `monospace`,
      fontName: `Typewriter-Regular`,
    },
  },
  katexValue119 = {
    vec: [`vec`, 0.471, 0.714],
    oiintSize1: [`oiintSize1`, 0.957, 0.499],
    oiintSize2: [`oiintSize2`, 1.472, 0.659],
    oiiintSize1: [`oiiintSize1`, 1.304, 0.499],
    oiiintSize2: [`oiiintSize2`, 1.98, 0.659],
  },
  katexValue120 = function (_katexT, katexParam204) {
    var [katexValue1052, katexValue1053, katexValue1054] =
        katexValue119[_katexT],
      katexValue1055 = katexValue109(
        [`overlay`],
        [
          new katexValue57([new katexValue58(katexValue1052)], {
            width: katexValue46(katexValue1053),
            height: katexValue46(katexValue1054),
            style: `width:` + katexValue46(katexValue1053),
            viewBox: `0 0 ` + 1e3 * katexValue1053 + ` ` + 1e3 * katexValue1054,
            preserveAspectRatio: `xMinYMin`,
          }),
        ],
        katexParam204,
      );
    return (
      (katexValue1055.height = katexValue1054),
      (katexValue1055.style.height = katexValue46(katexValue1054)),
      (katexValue1055.style.width = katexValue46(katexValue1053)),
      katexValue1055
    );
  },
  katexValue121 = {
    number: 3,
    unit: `mu`,
  },
  katexValue122 = {
    number: 4,
    unit: `mu`,
  },
  katexValue123 = {
    number: 5,
    unit: `mu`,
  },
  katexValue124 = {
    mord: {
      mop: katexValue121,
      mbin: katexValue122,
      mrel: katexValue123,
      minner: katexValue121,
    },
    mop: {
      mord: katexValue121,
      mop: katexValue121,
      mrel: katexValue123,
      minner: katexValue121,
    },
    mbin: {
      mord: katexValue122,
      mop: katexValue122,
      mopen: katexValue122,
      minner: katexValue122,
    },
    mrel: {
      mord: katexValue123,
      mop: katexValue123,
      mopen: katexValue123,
      minner: katexValue123,
    },
    mopen: {},
    mclose: {
      mop: katexValue121,
      mbin: katexValue122,
      mrel: katexValue123,
      minner: katexValue121,
    },
    mpunct: {
      mord: katexValue121,
      mop: katexValue121,
      mrel: katexValue123,
      mopen: katexValue121,
      mclose: katexValue121,
      mpunct: katexValue121,
      minner: katexValue121,
    },
    minner: {
      mord: katexValue121,
      mop: katexValue121,
      mbin: katexValue122,
      mrel: katexValue123,
      mopen: katexValue121,
      mpunct: katexValue121,
      minner: katexValue121,
    },
  },
  katexValue125 = {
    mord: {
      mop: katexValue121,
    },
    mop: {
      mord: katexValue121,
      mop: katexValue121,
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
      mop: katexValue121,
    },
    mpunct: {},
    minner: {
      mop: katexValue121,
    },
  },
  katexValue126 = {},
  katexValue127 = {},
  katexValue128 = {};
function katexI(_katexT) {
  for (
    var {
        type: type,
        names: names,
        props: props,
        handler: handler,
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder,
      } = _katexT,
      katexValue852 = {
        type: type,
        numArgs: props.numArgs,
        argTypes: props.argTypes,
        allowedInArgument: !!props.allowedInArgument,
        allowedInText: !!props.allowedInText,
        allowedInMath:
          props.allowedInMath === void 0 ? !0 : props.allowedInMath,
        numOptionalArgs: props.numOptionalArgs || 0,
        infix: !!props.infix,
        primitive: !!props.primitive,
        handler: handler,
      },
      katexValue853 = 0;
    katexValue853 < names.length;
    ++katexValue853
  )
    katexValue126[names[katexValue853]] = katexValue852;
  type &&
    (htmlBuilder && (katexValue127[type] = htmlBuilder),
    mathmlBuilder && (katexValue128[type] = mathmlBuilder));
}
function katexHelper8(_katexT) {
  var {
    type: type,
    htmlBuilder: htmlBuilder,
    mathmlBuilder: mathmlBuilder,
  } = _katexT;
  katexI({
    type: type,
    names: [],
    props: {
      numArgs: 0,
    },
    handler() {
      throw Error(`Should never be called.`);
    },
    htmlBuilder: htmlBuilder,
    mathmlBuilder: mathmlBuilder,
  });
}
var katexValue129 = function (_katexT) {
    return _katexT.type === `ordgroup` && _katexT.body.length === 1
      ? _katexT.body[0]
      : _katexT;
  },
  katexValue130 = function (_katexT) {
    return _katexT.type === `ordgroup` ? _katexT.body : [_katexT];
  },
  katexValue131 = new Set([
    `leftmost`,
    `mbin`,
    `mopen`,
    `mrel`,
    `mop`,
    `mpunct`,
  ]),
  katexValue132 = new Set([`rightmost`, `mrel`, `mclose`, `mpunct`]),
  katexValue133 = {
    display: katexValue27.DISPLAY,
    text: katexValue27.TEXT,
    script: katexValue27.SCRIPT,
    scriptscript: katexValue27.SCRIPTSCRIPT,
  },
  katexValue134 = {
    mord: `mord`,
    mop: `mop`,
    mbin: `mbin`,
    mrel: `mrel`,
    mopen: `mopen`,
    mclose: `mclose`,
    mpunct: `mpunct`,
    minner: `minner`,
  },
  katexValue135 = function (_katexT, katexParam56, katexParam57, katexParam58) {
    katexParam58 === void 0 && (katexParam58 = [null, null]);
    for (
      var katexValue685 = [], katexValue686 = 0;
      katexValue686 < _katexT.length;
      katexValue686++
    ) {
      var katexValue687 = katexValue140(_katexT[katexValue686], katexParam56);
      if (katexValue687 instanceof be) {
        var katexValue688 = katexValue687.children;
        katexValue685.push(...katexValue688);
      } else katexValue685.push(katexValue687);
    }
    if ((katexValue106(katexValue685), !katexParam57)) return katexValue685;
    var katexValue689 = katexParam56;
    if (_katexT.length === 1) {
      var katexValue690 = _katexT[0];
      katexValue690.type === `sizing`
        ? (katexValue689 = katexParam56.havingSize(katexValue690.size))
        : katexValue690.type === `styling` &&
          (katexValue689 = katexParam56.havingStyle(
            katexValue133[katexValue690.style],
          ));
    }
    var _katexN = katexValue108(
        [katexParam58[0] || `leftmost`],
        [],
        katexParam56,
      ),
      katexValue691 = katexValue108(
        [katexParam58[1] || `rightmost`],
        [],
        katexParam56,
      ),
      katexValue692 = katexParam57 === `root`;
    return (
      katexValue136(
        katexValue685,
        (__katexT, katexParam304) => {
          var katexValue1198 = katexParam304.classes[0],
            katexValue1199 = __katexT.classes[0];
          katexValue1198 === `mbin` && katexValue132.has(katexValue1199)
            ? (katexParam304.classes[0] = `mord`)
            : katexValue1199 === `mbin` &&
              katexValue131.has(katexValue1198) &&
              (__katexT.classes[0] = `mord`);
        },
        {
          node: _katexN,
        },
        katexValue691,
        katexValue692,
      ),
      katexValue136(
        katexValue685,
        (__katexT, katexParam342) => {
          var katexValue1234 = katexValue138(katexParam342),
            katexValue1235 = katexValue138(__katexT),
            katexValue1236 =
              katexValue1234 && katexValue1235
                ? __katexT.hasClass(`mtight`)
                  ? katexValue125[katexValue1234]?.[katexValue1235]
                  : katexValue124[katexValue1234]?.[katexValue1235]
                : null;
          if (katexValue1236)
            return katexValue116(katexValue1236, katexValue689);
        },
        {
          node: _katexN,
        },
        katexValue691,
        katexValue692,
      ),
      katexValue685
    );
  },
  katexValue136 = function (
    _katexT,
    katexParam129,
    katexParam130,
    katexParam131,
    katexParam132,
  ) {
    katexParam131 && _katexT.push(katexParam131);
    for (
      var katexValue906 = 0;
      katexValue906 < _katexT.length;
      katexValue906++
    ) {
      var katexValue907 = _katexT[katexValue906],
        katexValue908 = $t(katexValue907);
      if (katexValue908) {
        katexValue136(
          katexValue908.children,
          katexParam129,
          katexParam130,
          null,
          katexParam132,
        );
        continue;
      }
      var katexValue909 = !katexValue907.hasClass(`mspace`);
      if (katexValue909) {
        var katexValue910 = katexParam129(katexValue907, katexParam130.node);
        katexValue910 &&
          (katexParam130.insertAfter
            ? katexParam130.insertAfter(katexValue910)
            : (_katexT.unshift(katexValue910), katexValue906++));
      }
      (katexValue909
        ? (katexParam130.node = katexValue907)
        : katexParam132 &&
          katexValue907.hasClass(`newline`) &&
          (katexParam130.node = katexValue108([`leftmost`])),
        (katexParam130.insertAfter = ((katexParam455) => (katexParam460) => {
          (_katexT.splice(katexParam455 + 1, 0, katexParam460),
            katexValue906++);
        })(katexValue906)));
    }
    katexParam131 && _katexT.pop();
  },
  $t = function (_katexT) {
    return _katexT instanceof be ||
      _katexT instanceof katexValue53 ||
      (_katexT instanceof katexValue52 && _katexT.hasClass(`enclosing`))
      ? _katexT
      : null;
  },
  katexValue137 = function (_katexT, katexParam280) {
    var katexValue1164 = $t(_katexT);
    if (katexValue1164) {
      var katexValue1165 = katexValue1164.children;
      if (katexValue1165.length) {
        if (katexParam280 === `right`)
          return katexValue137(
            katexValue1165[katexValue1165.length - 1],
            `right`,
          );
        if (katexParam280 === `left`)
          return katexValue137(katexValue1165[0], `left`);
      }
    }
    return _katexT;
  },
  katexValue138 = function (_katexT, katexParam399) {
    return _katexT
      ? (katexParam399 && (_katexT = katexValue137(_katexT, katexParam399)),
        katexValue134[_katexT.classes[0]] || null)
      : null;
  },
  katexValue139 = function (_katexT, katexParam354) {
    var katexValue1250 = [`nulldelimiter`].concat(_katexT.baseSizingClasses());
    return katexValue108(katexParam354.concat(katexValue1250));
  },
  katexValue140 = function (katexParam186, katexParam187, katexParam188) {
    if (!katexParam186) return katexValue108();
    if (katexValue127[katexParam186.type]) {
      var katexValue1026 = katexValue127[katexParam186.type](
        katexParam186,
        katexParam187,
      );
      if (katexParam188 && katexParam187.size !== katexParam188.size) {
        katexValue1026 = katexValue108(
          katexParam187.sizingClasses(katexParam188),
          [katexValue1026],
          katexParam187,
        );
        var katexValue1027 =
          katexParam187.sizeMultiplier / katexParam188.sizeMultiplier;
        ((katexValue1026.height *= katexValue1027),
          (katexValue1026.depth *= katexValue1027));
      }
      return katexValue1026;
    } else
      throw new katexT(
        `Got group of unknown type: '` + katexParam186.type + `'`,
      );
  };
function katexHelper9(_katexT, katexParam267) {
  var katexValue1145 = katexValue108([`base`], _katexT, katexParam267),
    katexValue1146 = katexValue108([`strut`]);
  return (
    (katexValue1146.style.height = katexValue46(
      katexValue1145.height + katexValue1145.depth,
    )),
    katexValue1145.depth &&
      (katexValue1146.style.verticalAlign = katexValue46(
        -katexValue1145.depth,
      )),
    katexValue1145.children.unshift(katexValue1146),
    katexValue1145
  );
}
function katexHelper10(_katexT, katexParam41) {
  var katexValue637 = null;
  _katexT.length === 1 &&
    _katexT[0].type === `tag` &&
    ((katexValue637 = _katexT[0].tag), (_katexT = _katexT[0].body));
  var katexValue638 = katexValue135(_katexT, katexParam41, `root`),
    katexValue639;
  katexValue638.length === 2 &&
    katexValue638[1].hasClass(`tag`) &&
    (katexValue639 = katexValue638.pop());
  for (
    var katexValue640 = [], katexValue641 = [], katexValue642 = 0;
    katexValue642 < katexValue638.length;
    katexValue642++
  )
    if (
      (katexValue641.push(katexValue638[katexValue642]),
      katexValue638[katexValue642].hasClass(`mbin`) ||
        katexValue638[katexValue642].hasClass(`mrel`) ||
        katexValue638[katexValue642].hasClass(`allowbreak`))
    ) {
      for (
        var katexValue643 = !1;
        katexValue642 < katexValue638.length - 1 &&
        katexValue638[katexValue642 + 1].hasClass(`mspace`) &&
        !katexValue638[katexValue642 + 1].hasClass(`newline`);

      )
        (katexValue642++,
          katexValue641.push(katexValue638[katexValue642]),
          katexValue638[katexValue642].hasClass(`nobreak`) &&
            (katexValue643 = !0));
      katexValue643 ||
        (katexValue640.push(katexHelper9(katexValue641, katexParam41)),
        (katexValue641 = []));
    } else
      katexValue638[katexValue642].hasClass(`newline`) &&
        (katexValue641.pop(),
        katexValue641.length > 0 &&
          (katexValue640.push(katexHelper9(katexValue641, katexParam41)),
          (katexValue641 = [])),
        katexValue640.push(katexValue638[katexValue642]));
  katexValue641.length > 0 &&
    katexValue640.push(katexHelper9(katexValue641, katexParam41));
  var katexValue644;
  katexValue637
    ? ((katexValue644 = katexHelper9(
        katexValue135(katexValue637, katexParam41, !0),
        katexParam41,
      )),
      (katexValue644.classes = [`tag`]),
      katexValue640.push(katexValue644))
    : katexValue639 && katexValue640.push(katexValue639);
  var _katexN = katexValue108([`katex-html`], katexValue640);
  if ((_katexN.setAttribute(`aria-hidden`, `true`), katexValue644)) {
    var katexValue645 = katexValue644.children[0];
    ((katexValue645.style.height = katexValue46(
      _katexN.height + _katexN.depth,
    )),
      _katexN.depth &&
        (katexValue645.style.verticalAlign = katexValue46(-_katexN.depth)));
  }
  return _katexN;
}
function on(_katexT) {
  return new be(_katexT);
}
var katexValue141 = class {
    constructor(_katexT, katexParam356, katexParam357) {
      ((this.type = _katexT),
        (this.attributes = {}),
        (this.children = katexParam356 || []),
        (this.classes = katexParam357 || []));
    }
    setAttribute(_katexT, katexParam449) {
      this.attributes[_katexT] = katexParam449;
    }
    getAttribute(_katexT) {
      return this.attributes[_katexT];
    }
    toNode() {
      var _katexT = document.createElementNS(
        `http://www.w3.org/1998/Math/MathML`,
        this.type,
      );
      for (var katexValue723 in this.attributes)
        Object.prototype.hasOwnProperty.call(this.attributes, katexValue723) &&
          _katexT.setAttribute(katexValue723, this.attributes[katexValue723]);
      this.classes.length > 0 &&
        (_katexT.className = katexValue47(this.classes));
      for (
        var katexValue724 = 0;
        katexValue724 < this.children.length;
        katexValue724++
      )
        if (
          this.children[katexValue724] instanceof katexValue142 &&
          this.children[katexValue724 + 1] instanceof katexValue142
        ) {
          for (
            var katexValue725 =
              this.children[katexValue724].toText() +
              this.children[++katexValue724].toText();
            this.children[katexValue724 + 1] instanceof katexValue142;

          )
            katexValue725 += this.children[++katexValue724].toText();
          _katexT.appendChild(new katexValue142(katexValue725).toNode());
        } else _katexT.appendChild(this.children[katexValue724].toNode());
      return _katexT;
    }
    toMarkup() {
      var _katexT = `<` + this.type;
      for (var katexValue914 in this.attributes)
        Object.prototype.hasOwnProperty.call(this.attributes, katexValue914) &&
          ((_katexT += ` ` + katexValue914 + `="`),
          (_katexT += katexValue5(this.attributes[katexValue914])),
          (_katexT += `"`));
      (this.classes.length > 0 &&
        (_katexT +=
          ` class ="` + katexValue5(katexValue47(this.classes)) + `"`),
        (_katexT += `>`));
      for (
        var katexValue915 = 0;
        katexValue915 < this.children.length;
        katexValue915++
      )
        _katexT += this.children[katexValue915].toMarkup();
      return ((_katexT += `</` + this.type + `>`), _katexT);
    }
    toText() {
      return this.children.map((_katexT) => _katexT.toText()).join(``);
    }
  },
  katexValue142 = class {
    constructor(_katexT) {
      this.text = _katexT;
    }
    toNode() {
      return document.createTextNode(this.text);
    }
    toMarkup() {
      return katexValue5(this.toText());
    }
    toText() {
      return this.text;
    }
  },
  katexValue143 = class {
    constructor(_katexT) {
      ((this.width = _katexT),
        _katexT >= 0.05555 && _katexT <= 0.05556
          ? (this.character = ` `)
          : _katexT >= 0.1666 && _katexT <= 0.1667
            ? (this.character = ` `)
            : _katexT >= 0.2222 && _katexT <= 0.2223
              ? (this.character = ` `)
              : _katexT >= 0.2777 && _katexT <= 0.2778
                ? (this.character = `  `)
                : _katexT >= -0.05556 && _katexT <= -0.05555
                  ? (this.character = ` ⁣`)
                  : _katexT >= -0.1667 && _katexT <= -0.1666
                    ? (this.character = ` ⁣`)
                    : _katexT >= -0.2223 && _katexT <= -0.2222
                      ? (this.character = ` ⁣`)
                      : _katexT >= -0.2778 && _katexT <= -0.2777
                        ? (this.character = ` ⁣`)
                        : (this.character = null));
    }
    toNode() {
      if (this.character) return document.createTextNode(this.character);
      var _katexT = document.createElementNS(
        `http://www.w3.org/1998/Math/MathML`,
        `mspace`,
      );
      return (_katexT.setAttribute(`width`, katexValue46(this.width)), _katexT);
    }
    toMarkup() {
      return this.character
        ? `<mtext>` + this.character + `</mtext>`
        : `<mspace width="` + katexValue46(this.width) + `"/>`;
    }
    toText() {
      return this.character ? this.character : ` `;
    }
  },
  katexValue144 = new Set([`\\imath`, `\\jmath`]),
  katexValue145 = new Set([`mrow`, `mtable`]),
  katexValue146 = function (_katexT, katexParam212, katexParam213) {
    return (
      katexValue67[katexParam212][_katexT] &&
        katexValue67[katexParam212][_katexT].replace &&
        _katexT.charCodeAt(0) !== 55349 &&
        !(
          katexValue82.hasOwnProperty(_katexT) &&
          katexParam213 &&
          ((katexParam213.fontFamily &&
            katexParam213.fontFamily.slice(4, 6) === `tt`) ||
            (katexParam213.font && katexParam213.font.slice(4, 6) === `tt`))
        ) &&
        (_katexT = katexValue67[katexParam212][_katexT].replace),
      new katexValue142(_katexT)
    );
  },
  katexValue147 = function (_katexT) {
    return _katexT.length === 1
      ? _katexT[0]
      : new katexValue141(`mrow`, _katexT);
  },
  katexValue148 = function (_katexT, katexParam33) {
    if (katexParam33.fontFamily === `texttt`) return `monospace`;
    if (katexParam33.fontFamily === `textsf`)
      return katexParam33.fontShape === `textit` &&
        katexParam33.fontWeight === `textbf`
        ? `sans-serif-bold-italic`
        : katexParam33.fontShape === `textit`
          ? `sans-serif-italic`
          : katexParam33.fontWeight === `textbf`
            ? `bold-sans-serif`
            : `sans-serif`;
    if (
      katexParam33.fontShape === `textit` &&
      katexParam33.fontWeight === `textbf`
    )
      return `bold-italic`;
    if (katexParam33.fontShape === `textit`) return `italic`;
    if (katexParam33.fontWeight === `textbf`) return `bold`;
    var katexValue560 = katexParam33.font;
    if (!katexValue560 || katexValue560 === `mathnormal`) return null;
    var katexValue561 = _katexT.mode;
    if (katexValue560 === `mathit`) return `italic`;
    if (katexValue560 === `boldsymbol`)
      return _katexT.type === `textord` ? `bold` : `bold-italic`;
    if (katexValue560 === `mathbf`) return `bold`;
    if (katexValue560 === `mathbb`) return `double-struck`;
    if (katexValue560 === `mathsfit`) return `sans-serif-italic`;
    if (katexValue560 === `mathfrak`) return `fraktur`;
    if (katexValue560 === `mathscr` || katexValue560 === `mathcal`)
      return `script`;
    if (katexValue560 === `mathsf`) return `sans-serif`;
    if (katexValue560 === `mathtt`) return `monospace`;
    var katexValue562 = _katexT.text;
    if (katexValue144.has(katexValue562)) return null;
    if (katexValue67[katexValue561][katexValue562]) {
      var katexValue563 = katexValue67[katexValue561][katexValue562].replace;
      katexValue563 && (katexValue562 = katexValue563);
    }
    var katexValue564 = katexValue118[katexValue560].fontName;
    return katexHelper6(katexValue562, katexValue564, katexValue561)
      ? katexValue118[katexValue560].variant
      : null;
  };
function katexHelper11(_katexT) {
  if (!_katexT) return !1;
  if (_katexT.type === `mi` && _katexT.children.length === 1) {
    var katexValue911 = _katexT.children[0];
    return katexValue911 instanceof katexValue142 && katexValue911.text === `.`;
  } else if (
    _katexT.type === `mo` &&
    _katexT.children.length === 1 &&
    _katexT.getAttribute(`separator`) === `true` &&
    _katexT.getAttribute(`lspace`) === `0em` &&
    _katexT.getAttribute(`rspace`) === `0em`
  ) {
    var katexValue912 = _katexT.children[0];
    return katexValue912 instanceof katexValue142 && katexValue912.text === `,`;
  } else return !1;
}
var katexValue149 = function (_katexT, katexParam26, katexParam27) {
    if (_katexT.length === 1) {
      var katexValue515 = katexValue151(_katexT[0], katexParam26);
      return (
        katexParam27 &&
          katexValue515 instanceof katexValue141 &&
          katexValue515.type === `mo` &&
          (katexValue515.setAttribute(`lspace`, `0em`),
          katexValue515.setAttribute(`rspace`, `0em`)),
        [katexValue515]
      );
    }
    for (
      var katexValue516 = [], katexValue517, katexValue518 = 0;
      katexValue518 < _katexT.length;
      katexValue518++
    ) {
      var katexValue519 = katexValue151(_katexT[katexValue518], katexParam26);
      if (
        katexValue519 instanceof katexValue141 &&
        katexValue517 instanceof katexValue141
      ) {
        if (
          katexValue519.type === `mtext` &&
          katexValue517.type === `mtext` &&
          katexValue519.getAttribute(`mathvariant`) ===
            katexValue517.getAttribute(`mathvariant`)
        ) {
          katexValue517.children.push(...katexValue519.children);
          continue;
        } else if (katexValue519.type === `mn` && katexValue517.type === `mn`) {
          katexValue517.children.push(...katexValue519.children);
          continue;
        } else if (
          katexHelper11(katexValue519) &&
          katexValue517.type === `mn`
        ) {
          katexValue517.children.push(...katexValue519.children);
          continue;
        } else if (katexValue519.type === `mn` && katexHelper11(katexValue517))
          ((katexValue519.children = [
            ...katexValue517.children,
            ...katexValue519.children,
          ]),
            katexValue516.pop());
        else if (
          (katexValue519.type === `msup` || katexValue519.type === `msub`) &&
          katexValue519.children.length >= 1 &&
          (katexValue517.type === `mn` || katexHelper11(katexValue517))
        ) {
          var katexValue520 = katexValue519.children[0];
          katexValue520 instanceof katexValue141 &&
            katexValue520.type === `mn` &&
            ((katexValue520.children = [
              ...katexValue517.children,
              ...katexValue520.children,
            ]),
            katexValue516.pop());
        } else if (
          katexValue517.type === `mi` &&
          katexValue517.children.length === 1
        ) {
          var katexValue521 = katexValue517.children[0];
          if (
            katexValue521 instanceof katexValue142 &&
            katexValue521.text === `̸` &&
            (katexValue519.type === `mo` ||
              katexValue519.type === `mi` ||
              katexValue519.type === `mn`)
          ) {
            var _katexN = katexValue519.children[0];
            _katexN instanceof katexValue142 &&
              _katexN.text.length > 0 &&
              ((_katexN.text =
                _katexN.text.slice(0, 1) + `̸` + _katexN.text.slice(1)),
              katexValue516.pop());
          }
        }
      }
      (katexValue516.push(katexValue519), (katexValue517 = katexValue519));
    }
    return katexValue516;
  },
  katexValue150 = function (_katexT, katexParam450, katexParam451) {
    return katexValue147(katexValue149(_katexT, katexParam450, katexParam451));
  },
  katexValue151 = function (katexParam297, katexParam298) {
    if (!katexParam297) return new katexValue141(`mrow`);
    if (katexValue128[katexParam297.type])
      return katexValue128[katexParam297.type](katexParam297, katexParam298);
    throw new katexT(`Got group of unknown type: '` + katexParam297.type + `'`);
  };
function katexHelper12(
  _katexT,
  katexParam123,
  katexParam124,
  katexParam125,
  katexParam126,
) {
  var katexValue892 = katexValue149(_katexT, katexParam124),
    katexValue893 =
      katexValue892.length === 1 &&
      katexValue892[0] instanceof katexValue141 &&
      katexValue145.has(katexValue892[0].type)
        ? katexValue892[0]
        : new katexValue141(`mrow`, katexValue892),
    katexValue894 = new katexValue141(`annotation`, [
      new katexValue142(katexParam123),
    ]);
  katexValue894.setAttribute(`encoding`, `application/x-tex`);
  var katexValue895 = new katexValue141(`math`, [
    new katexValue141(`semantics`, [katexValue893, katexValue894]),
  ]);
  return (
    katexValue895.setAttribute(`xmlns`, `http://www.w3.org/1998/Math/MathML`),
    katexParam125 && katexValue895.setAttribute(`display`, `block`),
    katexValue108([katexParam126 ? `katex` : `katex-mathml`], [katexValue895])
  );
}
var _n = [
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 2, 1],
    [5, 2, 1],
    [6, 3, 1],
    [7, 4, 2],
    [8, 6, 3],
    [9, 7, 6],
    [10, 8, 7],
    [11, 10, 9],
  ],
  katexValue152 = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
  katexValue153 = function (_katexT, katexParam435) {
    return katexParam435.size < 2
      ? _katexT
      : _n[_katexT - 1][katexParam435.size - 1];
  },
  katexValue154 = class _katexT {
    constructor(katexParam119) {
      ((this.style = katexParam119.style),
        (this.color = katexParam119.color),
        (this.size = katexParam119.size || _katexT.BASESIZE),
        (this.textSize = katexParam119.textSize || this.size),
        (this.phantom = !!katexParam119.phantom),
        (this.font = katexParam119.font || ``),
        (this.fontFamily = katexParam119.fontFamily || ``),
        (this.fontWeight = katexParam119.fontWeight || ``),
        (this.fontShape = katexParam119.fontShape || ``),
        (this.sizeMultiplier = katexValue152[this.size - 1]),
        (this.maxSize = katexParam119.maxSize),
        (this.minRuleThickness = katexParam119.minRuleThickness),
        (this._fontMetrics = void 0));
    }
    extend(katexParam151) {
      var katexValue965 = {
        style: this.style,
        size: this.size,
        textSize: this.textSize,
        color: this.color,
        phantom: this.phantom,
        font: this.font,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
        fontShape: this.fontShape,
        maxSize: this.maxSize,
        minRuleThickness: this.minRuleThickness,
      };
      return (
        Object.assign(katexValue965, katexParam151),
        new _katexT(katexValue965)
      );
    }
    havingStyle(__katexT) {
      return this.style === __katexT
        ? this
        : this.extend({
            style: __katexT,
            size: katexValue153(this.textSize, __katexT),
          });
    }
    havingCrampedStyle() {
      return this.havingStyle(this.style.cramp());
    }
    havingSize(__katexT) {
      return this.size === __katexT && this.textSize === __katexT
        ? this
        : this.extend({
            style: this.style.text(),
            size: __katexT,
            textSize: __katexT,
            sizeMultiplier: katexValue152[__katexT - 1],
          });
    }
    havingBaseStyle(katexParam268) {
      katexParam268 ||= this.style.text();
      var katexValue1147 = katexValue153(_katexT.BASESIZE, katexParam268);
      return this.size === katexValue1147 &&
        this.textSize === _katexT.BASESIZE &&
        this.style === katexParam268
        ? this
        : this.extend({
            style: katexParam268,
            size: katexValue1147,
          });
    }
    havingBaseSizing() {
      var __katexT;
      switch (this.style.id) {
        case 4:
        case 5:
          __katexT = 3;
          break;
        case 6:
        case 7:
          __katexT = 1;
          break;
        default:
          __katexT = 6;
      }
      return this.extend({
        style: this.style.text(),
        size: __katexT,
      });
    }
    withColor(__katexT) {
      return this.extend({
        color: __katexT,
      });
    }
    withPhantom() {
      return this.extend({
        phantom: !0,
      });
    }
    withFont(__katexT) {
      return this.extend({
        font: __katexT,
      });
    }
    withTextFontFamily(__katexT) {
      return this.extend({
        fontFamily: __katexT,
        font: ``,
      });
    }
    withTextFontWeight(__katexT) {
      return this.extend({
        fontWeight: __katexT,
        font: ``,
      });
    }
    withTextFontShape(__katexT) {
      return this.extend({
        fontShape: __katexT,
        font: ``,
      });
    }
    sizingClasses(__katexT) {
      return __katexT.size === this.size
        ? []
        : [`sizing`, `reset-size` + __katexT.size, `size` + this.size];
    }
    baseSizingClasses() {
      return this.size === _katexT.BASESIZE
        ? []
        : [`sizing`, `reset-size` + this.size, `size` + _katexT.BASESIZE];
    }
    fontMetrics() {
      return (
        (this._fontMetrics ||= katexHelper7(this.size)),
        this._fontMetrics
      );
    }
    getColor() {
      return this.phantom ? `transparent` : this.color;
    }
  };
katexValue154.BASESIZE = 6;
var katexValue155 = function (_katexT) {
    return new katexValue154({
      style: _katexT.displayMode ? katexValue27.DISPLAY : katexValue27.TEXT,
      maxSize: _katexT.maxSize,
      minRuleThickness: _katexT.minRuleThickness,
    });
  },
  katexValue156 = function (_katexT, katexParam311) {
    if (katexParam311.displayMode) {
      var katexValue1202 = [`katex-display`];
      (katexParam311.leqno && katexValue1202.push(`leqno`),
        katexParam311.fleqn && katexValue1202.push(`fleqn`),
        (_katexT = katexValue108(katexValue1202, [_katexT])));
    }
    return _katexT;
  },
  katexValue157 = function (_katexT, katexParam229, katexParam230) {
    var katexValue1110 = katexValue155(katexParam230),
      katexValue1111;
    return katexParam230.output === `mathml`
      ? katexHelper12(
          _katexT,
          katexParam229,
          katexValue1110,
          katexParam230.displayMode,
          !0,
        )
      : ((katexValue1111 =
          katexParam230.output === `html`
            ? katexValue108([`katex`], [katexHelper10(_katexT, katexValue1110)])
            : katexValue108(
                [`katex`],
                [
                  katexHelper12(
                    _katexT,
                    katexParam229,
                    katexValue1110,
                    katexParam230.displayMode,
                    !1,
                  ),
                  katexHelper10(_katexT, katexValue1110),
                ],
              )),
        katexValue156(katexValue1111, katexParam230));
  },
  katexValue158 = function (_katexT, katexParam410, katexParam411) {
    return katexValue156(
      katexValue108(
        [`katex`],
        [katexHelper10(_katexT, katexValue155(katexParam411))],
      ),
      katexParam411,
    );
  },
  katexValue159 = {
    widehat: `^`,
    widecheck: `ˇ`,
    widetilde: `~`,
    utilde: `~`,
    overleftarrow: `←`,
    underleftarrow: `←`,
    xleftarrow: `←`,
    overrightarrow: `→`,
    underrightarrow: `→`,
    xrightarrow: `→`,
    underbrace: `⏟`,
    overbrace: `⏞`,
    underbracket: `⎵`,
    overbracket: `⎴`,
    overgroup: `⏠`,
    undergroup: `⏡`,
    overleftrightarrow: `↔`,
    underleftrightarrow: `↔`,
    xleftrightarrow: `↔`,
    Overrightarrow: `⇒`,
    xRightarrow: `⇒`,
    overleftharpoon: `↼`,
    xleftharpoonup: `↼`,
    overrightharpoon: `⇀`,
    xrightharpoonup: `⇀`,
    xLeftarrow: `⇐`,
    xLeftrightarrow: `⇔`,
    xhookleftarrow: `↩`,
    xhookrightarrow: `↪`,
    xmapsto: `↦`,
    xrightharpoondown: `⇁`,
    xleftharpoondown: `↽`,
    xrightleftharpoons: `⇌`,
    xleftrightharpoons: `⇋`,
    xtwoheadleftarrow: `↞`,
    xtwoheadrightarrow: `↠`,
    xlongequal: `=`,
    xtofrom: `⇄`,
    xrightleftarrows: `⇄`,
    xrightequilibrium: `⇌`,
    xleftequilibrium: `⇋`,
    "\\cdrightarrow": `→`,
    "\\cdleftarrow": `←`,
    "\\cdlongequal": `=`,
  },
  katexValue160 = function (_katexT) {
    var katexValue1226 = new katexValue141(`mo`, [
      new katexValue142(katexValue159[_katexT.replace(/^\\/, ``)]),
    ]);
    return (katexValue1226.setAttribute(`stretchy`, `true`), katexValue1226);
  },
  katexValue161 = {
    overrightarrow: [[`rightarrow`], 0.888, 522, `xMaxYMin`],
    overleftarrow: [[`leftarrow`], 0.888, 522, `xMinYMin`],
    underrightarrow: [[`rightarrow`], 0.888, 522, `xMaxYMin`],
    underleftarrow: [[`leftarrow`], 0.888, 522, `xMinYMin`],
    xrightarrow: [[`rightarrow`], 1.469, 522, `xMaxYMin`],
    "\\cdrightarrow": [[`rightarrow`], 3, 522, `xMaxYMin`],
    xleftarrow: [[`leftarrow`], 1.469, 522, `xMinYMin`],
    "\\cdleftarrow": [[`leftarrow`], 3, 522, `xMinYMin`],
    Overrightarrow: [[`doublerightarrow`], 0.888, 560, `xMaxYMin`],
    xRightarrow: [[`doublerightarrow`], 1.526, 560, `xMaxYMin`],
    xLeftarrow: [[`doubleleftarrow`], 1.526, 560, `xMinYMin`],
    overleftharpoon: [[`leftharpoon`], 0.888, 522, `xMinYMin`],
    xleftharpoonup: [[`leftharpoon`], 0.888, 522, `xMinYMin`],
    xleftharpoondown: [[`leftharpoondown`], 0.888, 522, `xMinYMin`],
    overrightharpoon: [[`rightharpoon`], 0.888, 522, `xMaxYMin`],
    xrightharpoonup: [[`rightharpoon`], 0.888, 522, `xMaxYMin`],
    xrightharpoondown: [[`rightharpoondown`], 0.888, 522, `xMaxYMin`],
    xlongequal: [[`longequal`], 0.888, 334, `xMinYMin`],
    "\\cdlongequal": [[`longequal`], 3, 334, `xMinYMin`],
    xtwoheadleftarrow: [[`twoheadleftarrow`], 0.888, 334, `xMinYMin`],
    xtwoheadrightarrow: [[`twoheadrightarrow`], 0.888, 334, `xMaxYMin`],
    overleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522],
    overbrace: [[`leftbrace`, `midbrace`, `rightbrace`], 1.6, 548],
    underbrace: [
      [`leftbraceunder`, `midbraceunder`, `rightbraceunder`],
      1.6,
      548,
    ],
    underleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522],
    xleftrightarrow: [[`leftarrow`, `rightarrow`], 1.75, 522],
    xLeftrightarrow: [[`doubleleftarrow`, `doublerightarrow`], 1.75, 560],
    xrightleftharpoons: [
      [`leftharpoondownplus`, `rightharpoonplus`],
      1.75,
      716,
    ],
    xleftrightharpoons: [
      [`leftharpoonplus`, `rightharpoondownplus`],
      1.75,
      716,
    ],
    xhookleftarrow: [[`leftarrow`, `righthook`], 1.08, 522],
    xhookrightarrow: [[`lefthook`, `rightarrow`], 1.08, 522],
    overlinesegment: [[`leftlinesegment`, `rightlinesegment`], 0.888, 522],
    underlinesegment: [[`leftlinesegment`, `rightlinesegment`], 0.888, 522],
    overbracket: [[`leftbracketover`, `rightbracketover`], 1.6, 440],
    underbracket: [[`leftbracketunder`, `rightbracketunder`], 1.6, 410],
    overgroup: [[`leftgroup`, `rightgroup`], 0.888, 342],
    undergroup: [[`leftgroupunder`, `rightgroupunder`], 0.888, 342],
    xmapsto: [[`leftmapsto`, `rightarrow`], 1.5, 522],
    xtofrom: [[`leftToFrom`, `rightToFrom`], 1.75, 528],
    xrightleftarrows: [[`baraboveleftarrow`, `rightarrowabovebar`], 1.75, 901],
    xrightequilibrium: [
      [`baraboveshortleftharpoon`, `rightharpoonaboveshortbar`],
      1.75,
      716,
    ],
    xleftequilibrium: [
      [`shortbaraboveleftharpoon`, `shortrightharpoonabovebar`],
      1.75,
      716,
    ],
  },
  katexValue162 = new Set([`widehat`, `widecheck`, `widetilde`, `utilde`]),
  katexValue163 = function (_katexT, katexParam16) {
    function katexHelper31() {
      var katexValue482 = 4e5,
        katexValue483 = _katexT.label.slice(1);
      if (katexValue162.has(katexValue483)) {
        var katexValue484 = _katexT,
          katexValue485 =
            katexValue484.base.type === `ordgroup`
              ? katexValue484.base.body.length
              : 1,
          katexValue486,
          katexValue487,
          katexValue488;
        if (katexValue485 > 5)
          katexValue483 === `widehat` || katexValue483 === `widecheck`
            ? ((katexValue486 = 420),
              (katexValue482 = 2364),
              (katexValue488 = 0.42),
              (katexValue487 = katexValue483 + `4`))
            : ((katexValue486 = 312),
              (katexValue482 = 2340),
              (katexValue488 = 0.34),
              (katexValue487 = `tilde4`));
        else {
          var katexValue489 = [1, 1, 2, 2, 3, 3][katexValue485];
          katexValue483 === `widehat` || katexValue483 === `widecheck`
            ? ((katexValue482 = [0, 1062, 2364, 2364, 2364][katexValue489]),
              (katexValue486 = [0, 239, 300, 360, 420][katexValue489]),
              (katexValue488 = [0, 0.24, 0.3, 0.3, 0.36, 0.42][katexValue489]),
              (katexValue487 = katexValue483 + katexValue489))
            : ((katexValue482 = [0, 600, 1033, 2339, 2340][katexValue489]),
              (katexValue486 = [0, 260, 286, 306, 312][katexValue489]),
              (katexValue488 = [0, 0.26, 0.286, 0.3, 0.306, 0.34][
                katexValue489
              ]),
              (katexValue487 = `tilde` + katexValue489));
        }
        return {
          span: katexValue109(
            [],
            [
              new katexValue57([new katexValue58(katexValue487)], {
                width: `100%`,
                height: katexValue46(katexValue488),
                viewBox: `0 0 ` + katexValue482 + ` ` + katexValue486,
                preserveAspectRatio: `none`,
              }),
            ],
            katexParam16,
          ),
          minWidth: 0,
          height: katexValue488,
        };
      } else {
        var _katexN = [],
          katexValue490 = katexValue161[katexValue483],
          [katexValue491, katexValue492, katexValue493] = katexValue490,
          katexValue494 = katexValue493 / 1e3,
          katexValue495 = katexValue491.length,
          katexValue496,
          katexValue497;
        if (katexValue495 === 1) {
          var katexValue498 = katexValue490[3];
          ((katexValue496 = [`hide-tail`]), (katexValue497 = [katexValue498]));
        } else if (katexValue495 === 2)
          ((katexValue496 = [`halfarrow-left`, `halfarrow-right`]),
            (katexValue497 = [`xMinYMin`, `xMaxYMin`]));
        else if (katexValue495 === 3)
          ((katexValue496 = [`brace-left`, `brace-center`, `brace-right`]),
            (katexValue497 = [`xMinYMin`, `xMidYMin`, `xMaxYMin`]));
        else
          throw Error(
            `Correct katexImagesData or update code here to support
                    ` +
              katexValue495 +
              ` children.`,
          );
        for (
          var katexValue499 = 0;
          katexValue499 < katexValue495;
          katexValue499++
        ) {
          var katexValue500 = new katexValue57(
              [new katexValue58(katexValue491[katexValue499])],
              {
                width: `400em`,
                height: katexValue46(katexValue494),
                viewBox: `0 0 ` + katexValue482 + ` ` + katexValue493,
                preserveAspectRatio: katexValue497[katexValue499] + ` slice`,
              },
            ),
            katexValue501 = katexValue109(
              [katexValue496[katexValue499]],
              [katexValue500],
              katexParam16,
            );
          if (katexValue495 === 1)
            return {
              span: katexValue501,
              minWidth: katexValue492,
              height: katexValue494,
            };
          ((katexValue501.style.height = katexValue46(katexValue494)),
            _katexN.push(katexValue501));
        }
        return {
          span: katexValue108([`stretchy`], _katexN, katexParam16),
          minWidth: katexValue492,
          height: katexValue494,
        };
      }
    }
    var { span: span, minWidth: minWidth, height: height } = katexHelper31();
    return (
      (span.height = height),
      (span.style.height = katexValue46(height)),
      minWidth > 0 && (span.style.minWidth = katexValue46(minWidth)),
      span
    );
  },
  katexValue164 = function (
    _katexT,
    katexParam87,
    katexParam88,
    katexParam89,
    katexParam90,
  ) {
    var katexValue806,
      katexValue807 =
        _katexT.height + _katexT.depth + katexParam88 + katexParam89;
    if (/fbox|color|angl/.test(katexParam87)) {
      if (
        ((katexValue806 = katexValue108(
          [`stretchy`, katexParam87],
          [],
          katexParam90,
        )),
        katexParam87 === `fbox`)
      ) {
        var katexValue808 = katexParam90.color && katexParam90.getColor();
        katexValue808 && (katexValue806.style.borderColor = katexValue808);
      }
    } else {
      var katexValue809 = [];
      (/^[bx]cancel$/.test(katexParam87) &&
        katexValue809.push(
          new katexValue59({
            x1: `0`,
            y1: `0`,
            x2: `100%`,
            y2: `100%`,
            "stroke-width": `0.046em`,
          }),
        ),
        /^x?cancel$/.test(katexParam87) &&
          katexValue809.push(
            new katexValue59({
              x1: `0`,
              y1: `100%`,
              x2: `100%`,
              y2: `0`,
              "stroke-width": `0.046em`,
            }),
          ),
        (katexValue806 = katexValue109(
          [],
          [
            new katexValue57(katexValue809, {
              width: `100%`,
              height: katexValue46(katexValue807),
            }),
          ],
          katexParam90,
        )));
    }
    return (
      (katexValue806.height = katexValue807),
      (katexValue806.style.height = katexValue46(katexValue807)),
      katexValue806
    );
  };
function katexHelper13(_katexT, katexParam299) {
  if (!_katexT || _katexT.type !== katexParam299)
    throw Error(
      `Expected node of type ` +
        katexParam299 +
        `, but got ` +
        (_katexT ? `node of type ` + _katexT.type : String(_katexT)),
    );
  return _katexT;
}
function katexHelper14(_katexT) {
  var katexValue1188 = katexHelper15(_katexT);
  if (!katexValue1188)
    throw Error(
      `Expected node of symbol group type, but got ` +
        (_katexT ? `node of type ` + _katexT.type : String(_katexT)),
    );
  return katexValue1188;
}
function katexHelper15(_katexT) {
  return _katexT &&
    (_katexT.type === `atom` || katexValue66.hasOwnProperty(_katexT.type))
    ? _katexT
    : null;
}
var katexValue165 = (_katexT) => {
    if (_katexT instanceof katexValue56) return _katexT;
    if (katexValue60(_katexT) && _katexT.children.length === 1)
      return katexValue165(_katexT.children[0]);
  },
  katexValue166 = (_katexT, katexParam25) => {
    var katexValue502, katexValue503, katexValue504;
    _katexT && _katexT.type === `supsub`
      ? ((katexValue503 = katexHelper13(_katexT.base, `accent`)),
        (katexValue502 = katexValue503.base),
        (_katexT.base = katexValue502),
        (katexValue504 = katexHelper5(katexValue140(_katexT, katexParam25))),
        (_katexT.base = katexValue503))
      : ((katexValue503 = katexHelper13(_katexT, `accent`)),
        (katexValue502 = katexValue503.base));
    var katexValue505 = katexValue140(
        katexValue502,
        katexParam25.havingCrampedStyle(),
      ),
      katexValue506 = katexValue503.isShifty && katexValue8(katexValue502),
      katexValue507 = 0;
    katexValue506 && (katexValue507 = katexValue165(katexValue505)?.skew ?? 0);
    var katexValue508 = katexValue503.label === `\\c`,
      _katexN = katexValue508
        ? katexValue505.height + katexValue505.depth
        : Math.min(katexValue505.height, katexParam25.fontMetrics().xHeight),
      katexValue509;
    if (katexValue503.isStretchy)
      ((katexValue509 = katexValue163(katexValue503, katexParam25)),
        (katexValue509 = katexValue115({
          positionType: `firstBaseline`,
          children: [
            {
              type: `elem`,
              elem: katexValue505,
            },
            {
              type: `elem`,
              elem: katexValue509,
              wrapperClasses: [`svg-align`],
              wrapperStyle:
                katexValue507 > 0
                  ? {
                      width:
                        `calc(100% - ` + katexValue46(2 * katexValue507) + `)`,
                      marginLeft: katexValue46(2 * katexValue507),
                    }
                  : void 0,
            },
          ],
        })));
    else {
      var katexValue510, katexValue511;
      (katexValue503.label === `\\vec`
        ? ((katexValue510 = katexValue120(`vec`, katexParam25)),
          (katexValue511 = katexValue119.vec[1]))
        : ((katexValue510 = katexValue104(
            {
              type: `textord`,
              mode: katexValue503.mode,
              text: katexValue503.label,
            },
            katexParam25,
            `textord`,
          )),
          (katexValue510 = katexHelper4(katexValue510)),
          (katexValue510.italic = 0),
          (katexValue511 = katexValue510.width),
          katexValue508 && (_katexN += katexValue510.depth)),
        (katexValue509 = katexValue108([`accent-body`], [katexValue510])));
      var katexValue512 = katexValue503.label === `\\textcircled`;
      katexValue512 &&
        (katexValue509.classes.push(`accent-full`),
        (_katexN = katexValue505.height));
      var katexValue513 = katexValue507;
      (katexValue512 || (katexValue513 -= katexValue511 / 2),
        (katexValue509.style.left = katexValue46(katexValue513)),
        katexValue503.label === `\\textcircled` &&
          (katexValue509.style.top = `.2em`),
        (katexValue509 = katexValue115({
          positionType: `firstBaseline`,
          children: [
            {
              type: `elem`,
              elem: katexValue505,
            },
            {
              type: `kern`,
              size: -_katexN,
            },
            {
              type: `elem`,
              elem: katexValue509,
            },
          ],
        })));
    }
    var katexValue514 = katexValue108(
      [`mord`, `accent`],
      [katexValue509],
      katexParam25,
    );
    return katexValue504
      ? ((katexValue504.children[0] = katexValue514),
        (katexValue504.height = Math.max(
          katexValue514.height,
          katexValue504.height,
        )),
        (katexValue504.classes[0] = `mord`),
        katexValue504)
      : katexValue514;
  },
  katexValue167 = (_katexT, katexParam288) => {
    var katexValue1180 = _katexT.isStretchy
        ? katexValue160(_katexT.label)
        : new katexValue141(`mo`, [katexValue146(_katexT.label, _katexT.mode)]),
      katexValue1181 = new katexValue141(`mover`, [
        katexValue151(_katexT.base, katexParam288),
        katexValue1180,
      ]);
    return (katexValue1181.setAttribute(`accent`, `true`), katexValue1181);
  },
  katexValue168 = new RegExp(
    [
      `\\acute`,
      `\\grave`,
      `\\ddot`,
      `\\tilde`,
      `\\bar`,
      `\\breve`,
      `\\check`,
      `\\hat`,
      `\\vec`,
      `\\dot`,
      `\\mathring`,
    ]
      .map((_katexT) => `\\` + _katexT)
      .join(`|`),
  );
(katexI({
  type: `accent`,
  names: [
    `\\acute`,
    `\\grave`,
    `\\ddot`,
    `\\tilde`,
    `\\bar`,
    `\\breve`,
    `\\check`,
    `\\hat`,
    `\\vec`,
    `\\dot`,
    `\\mathring`,
    `\\widecheck`,
    `\\widehat`,
    `\\widetilde`,
    `\\overrightarrow`,
    `\\overleftarrow`,
    `\\Overrightarrow`,
    `\\overleftrightarrow`,
    `\\overgroup`,
    `\\overlinesegment`,
    `\\overleftharpoon`,
    `\\overrightharpoon`,
  ],
  props: {
    numArgs: 1,
  },
  handler: (_katexT, katexParam209) => {
    var katexValue1070 = katexValue129(katexParam209[0]),
      katexValue1071 = !katexValue168.test(_katexT.funcName),
      katexValue1072 =
        !katexValue1071 ||
        _katexT.funcName === `\\widehat` ||
        _katexT.funcName === `\\widetilde` ||
        _katexT.funcName === `\\widecheck`;
    return {
      type: `accent`,
      mode: _katexT.parser.mode,
      label: _katexT.funcName,
      isStretchy: katexValue1071,
      isShifty: katexValue1072,
      base: katexValue1070,
    };
  },
  htmlBuilder: katexValue166,
  mathmlBuilder: katexValue167,
}),
  katexI({
    type: `accent`,
    names: [
      `\\'`,
      "\\`",
      `\\^`,
      `\\~`,
      `\\=`,
      `\\u`,
      `\\.`,
      `\\"`,
      `\\c`,
      `\\r`,
      `\\H`,
      `\\v`,
      `\\textcircled`,
    ],
    props: {
      numArgs: 1,
      allowedInText: !0,
      allowedInMath: !0,
      argTypes: [`primitive`],
    },
    handler: (_katexT, katexParam191) => {
      var katexValue1036 = katexParam191[0],
        katexValue1037 = _katexT.parser.mode;
      return (
        katexValue1037 === `math` &&
          (_katexT.parser.settings.reportNonstrict(
            `mathVsTextAccents`,
            `LaTeX's accent ` + _katexT.funcName + ` works only in text mode`,
          ),
          (katexValue1037 = `text`)),
        {
          type: `accent`,
          mode: katexValue1037,
          label: _katexT.funcName,
          isStretchy: !1,
          isShifty: !0,
          base: katexValue1036,
        }
      );
    },
    htmlBuilder: katexValue166,
    mathmlBuilder: katexValue167,
  }),
  katexI({
    type: `accentUnder`,
    names: [
      `\\underleftarrow`,
      `\\underrightarrow`,
      `\\underleftrightarrow`,
      `\\undergroup`,
      `\\underlinesegment`,
      `\\utilde`,
    ],
    props: {
      numArgs: 1,
    },
    handler: (_katexT, katexParam348) => {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1242 = katexParam348[0];
      return {
        type: `accentUnder`,
        mode: parser.mode,
        label: funcName,
        base: katexValue1242,
      };
    },
    htmlBuilder: (_katexT, katexParam190) => {
      var katexValue1033 = katexValue140(_katexT.base, katexParam190),
        katexValue1034 = katexValue163(_katexT, katexParam190),
        katexValue1035 = _katexT.label === `\\utilde` ? 0.12 : 0;
      return katexValue108(
        [`mord`, `accentunder`],
        [
          katexValue115({
            positionType: `top`,
            positionData: katexValue1033.height,
            children: [
              {
                type: `elem`,
                elem: katexValue1034,
                wrapperClasses: [`svg-align`],
              },
              {
                type: `kern`,
                size: katexValue1035,
              },
              {
                type: `elem`,
                elem: katexValue1033,
              },
            ],
          }),
        ],
        katexParam190,
      );
    },
    mathmlBuilder: (_katexT, katexParam333) => {
      var katexValue1227 = katexValue160(_katexT.label),
        katexValue1228 = new katexValue141(`munder`, [
          katexValue151(_katexT.base, katexParam333),
          katexValue1227,
        ]);
      return (
        katexValue1228.setAttribute(`accentunder`, `true`),
        katexValue1228
      );
    },
  }));
var katexValue169 = (_katexT) => {
  var katexValue1219 = new katexValue141(`mpadded`, _katexT ? [_katexT] : []);
  return (
    katexValue1219.setAttribute(`width`, `+0.6em`),
    katexValue1219.setAttribute(`lspace`, `0.3em`),
    katexValue1219
  );
};
katexI({
  type: `xArrow`,
  names: [
    `\\xleftarrow`,
    `\\xrightarrow`,
    `\\xLeftarrow`,
    `\\xRightarrow`,
    `\\xleftrightarrow`,
    `\\xLeftrightarrow`,
    `\\xhookleftarrow`,
    `\\xhookrightarrow`,
    `\\xmapsto`,
    `\\xrightharpoondown`,
    `\\xrightharpoonup`,
    `\\xleftharpoondown`,
    `\\xleftharpoonup`,
    `\\xrightleftharpoons`,
    `\\xleftrightharpoons`,
    `\\xlongequal`,
    `\\xtwoheadrightarrow`,
    `\\xtwoheadleftarrow`,
    `\\xtofrom`,
    `\\xrightleftarrows`,
    `\\xrightequilibrium`,
    `\\xleftequilibrium`,
    `\\\\cdrightarrow`,
    `\\\\cdleftarrow`,
    `\\\\cdlongequal`,
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
  },
  handler(_katexT, katexParam337, katexParam338) {
    var { parser: parser, funcName: funcName } = _katexT;
    return {
      type: `xArrow`,
      mode: parser.mode,
      label: funcName,
      body: katexParam337[0],
      below: katexParam338[0],
    };
  },
  htmlBuilder(_katexT, katexParam39) {
    var katexValue609 = katexParam39.style,
      katexValue610 = katexParam39.havingStyle(katexValue609.sup()),
      katexValue611 = katexValue113(
        katexValue140(_katexT.body, katexValue610, katexParam39),
        katexParam39,
      ),
      katexValue612 = _katexT.label.slice(0, 2) === `\\x` ? `x` : `cd`;
    katexValue611.classes.push(katexValue612 + `-arrow-pad`);
    var katexValue613;
    _katexT.below &&
      ((katexValue610 = katexParam39.havingStyle(katexValue609.sub())),
      (katexValue613 = katexValue113(
        katexValue140(_katexT.below, katexValue610, katexParam39),
        katexParam39,
      )),
      katexValue613.classes.push(katexValue612 + `-arrow-pad`));
    var katexValue614 = katexValue163(_katexT, katexParam39),
      katexValue615 =
        -katexParam39.fontMetrics().axisHeight + 0.5 * katexValue614.height,
      katexValue616 =
        -katexParam39.fontMetrics().axisHeight -
        0.5 * katexValue614.height -
        0.111;
    (katexValue611.depth > 0.25 || _katexT.label === `\\xleftequilibrium`) &&
      (katexValue616 -= katexValue611.depth);
    var _katexN;
    if (katexValue613) {
      var katexValue617 =
        -katexParam39.fontMetrics().axisHeight +
        katexValue613.height +
        0.5 * katexValue614.height +
        0.111;
      _katexN = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue611,
            shift: katexValue616,
          },
          {
            type: `elem`,
            elem: katexValue614,
            shift: katexValue615,
          },
          {
            type: `elem`,
            elem: katexValue613,
            shift: katexValue617,
          },
        ],
      });
    } else
      _katexN = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue611,
            shift: katexValue616,
          },
          {
            type: `elem`,
            elem: katexValue614,
            shift: katexValue615,
          },
        ],
      });
    return (
      _katexN.children[0].children[0].children[1].classes.push(`svg-align`),
      katexValue108([`mrel`, `x-arrow`], [_katexN], katexParam39)
    );
  },
  mathmlBuilder(_katexT, katexParam147) {
    var katexValue948 = katexValue160(_katexT.label);
    katexValue948.setAttribute(
      `minsize`,
      _katexT.label.charAt(0) === `x` ? `1.75em` : `3.0em`,
    );
    var katexValue949;
    if (_katexT.body) {
      var katexValue950 = katexValue169(
        katexValue151(_katexT.body, katexParam147),
      );
      katexValue949 = _katexT.below
        ? new katexValue141(`munderover`, [
            katexValue948,
            katexValue169(katexValue151(_katexT.below, katexParam147)),
            katexValue950,
          ])
        : new katexValue141(`mover`, [katexValue948, katexValue950]);
    } else
      _katexT.below
        ? (katexValue949 = new katexValue141(`munder`, [
            katexValue948,
            katexValue169(katexValue151(_katexT.below, katexParam147)),
          ]))
        : ((katexValue949 = katexValue169()),
          (katexValue949 = new katexValue141(`mover`, [
            katexValue948,
            katexValue949,
          ])));
    return katexValue949;
  },
});
function katexHelper16(_katexT, katexParam400) {
  var katexValue1273 = katexValue135(_katexT.body, katexParam400, !0);
  return katexValue108([_katexT.mclass], katexValue1273, katexParam400);
}
function katexHelper17(_katexT, katexParam71) {
  var katexValue741,
    katexValue742 = katexValue149(_katexT.body, katexParam71);
  return (
    _katexT.mclass === `minner`
      ? (katexValue741 = new katexValue141(`mpadded`, katexValue742))
      : _katexT.mclass === `mord`
        ? _katexT.isCharacterBox
          ? ((katexValue741 = katexValue742[0]), (katexValue741.type = `mi`))
          : (katexValue741 = new katexValue141(`mi`, katexValue742))
        : (_katexT.isCharacterBox
            ? ((katexValue741 = katexValue742[0]), (katexValue741.type = `mo`))
            : (katexValue741 = new katexValue141(`mo`, katexValue742)),
          _katexT.mclass === `mbin`
            ? ((katexValue741.attributes.lspace = `0.22em`),
              (katexValue741.attributes.rspace = `0.22em`))
            : _katexT.mclass === `mpunct`
              ? ((katexValue741.attributes.lspace = `0em`),
                (katexValue741.attributes.rspace = `0.17em`))
              : _katexT.mclass === `mopen` || _katexT.mclass === `mclose`
                ? ((katexValue741.attributes.lspace = `0em`),
                  (katexValue741.attributes.rspace = `0em`))
                : _katexT.mclass === `minner` &&
                  ((katexValue741.attributes.lspace = `0.0556em`),
                  (katexValue741.attributes.width = `+0.1111em`))),
    katexValue741
  );
}
katexI({
  type: `mclass`,
  names: [
    `\\mathord`,
    `\\mathbin`,
    `\\mathrel`,
    `\\mathopen`,
    `\\mathclose`,
    `\\mathpunct`,
    `\\mathinner`,
  ],
  props: {
    numArgs: 1,
    primitive: !0,
  },
  handler(_katexT, katexParam300) {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1196 = katexParam300[0];
    return {
      type: `mclass`,
      mode: parser.mode,
      mclass: `m` + funcName.slice(5),
      body: katexValue130(katexValue1196),
      isCharacterBox: katexValue8(katexValue1196),
    };
  },
  htmlBuilder: katexHelper16,
  mathmlBuilder: katexHelper17,
});
var katexValue170 = (_katexT) => {
  var katexValue1190 =
    _katexT.type === `ordgroup` && _katexT.body.length
      ? _katexT.body[0]
      : _katexT;
  return katexValue1190.type === `atom` &&
    (katexValue1190.family === `bin` || katexValue1190.family === `rel`)
    ? `m` + katexValue1190.family
    : `mord`;
};
(katexI({
  type: `mclass`,
  names: [`\\@binrel`],
  props: {
    numArgs: 2,
  },
  handler(_katexT, katexParam327) {
    var { parser: parser } = _katexT;
    return {
      type: `mclass`,
      mode: parser.mode,
      mclass: katexValue170(katexParam327[0]),
      body: katexValue130(katexParam327[1]),
      isCharacterBox: katexValue8(katexParam327[1]),
    };
  },
}),
  katexI({
    type: `mclass`,
    names: [`\\stackrel`, `\\overset`, `\\underset`],
    props: {
      numArgs: 2,
    },
    handler(_katexT, katexParam120) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue885 = katexParam120[1],
        katexValue886 = katexParam120[0],
        katexValue887 =
          funcName === `\\stackrel` ? `mrel` : katexValue170(katexValue885),
        katexValue888 = {
          type: `op`,
          mode: katexValue885.mode,
          limits: !0,
          alwaysHandleSupSub: !0,
          parentIsSupSub: !1,
          symbol: !1,
          suppressBaseShift: funcName !== `\\stackrel`,
          body: katexValue130(katexValue885),
        },
        katexValue889 = {
          type: `supsub`,
          mode: katexValue886.mode,
          base: katexValue888,
          sup: funcName === `\\underset` ? null : katexValue886,
          sub: funcName === `\\underset` ? katexValue886 : null,
        };
      return {
        type: `mclass`,
        mode: parser.mode,
        mclass: katexValue887,
        body: [katexValue889],
        isCharacterBox: katexValue8(katexValue889),
      };
    },
    htmlBuilder: katexHelper16,
    mathmlBuilder: katexHelper17,
  }),
  katexI({
    type: `pmb`,
    names: [`\\pmb`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler(_katexT, katexParam358) {
      var { parser: parser } = _katexT;
      return {
        type: `pmb`,
        mode: parser.mode,
        mclass: katexValue170(katexParam358[0]),
        body: katexValue130(katexParam358[0]),
      };
    },
    htmlBuilder(_katexT, katexParam329) {
      var katexValue1220 = katexValue135(_katexT.body, katexParam329, !0),
        katexValue1221 = katexValue108(
          [_katexT.mclass],
          katexValue1220,
          katexParam329,
        );
      return (
        (katexValue1221.style.textShadow = `0.02em 0.01em 0.04px`),
        katexValue1221
      );
    },
    mathmlBuilder(_katexT, katexParam316) {
      var katexValue1208 = new katexValue141(
        `mstyle`,
        katexValue149(_katexT.body, katexParam316),
      );
      return (
        katexValue1208.setAttribute(
          `style`,
          `text-shadow: 0.02em 0.01em 0.04px`,
        ),
        katexValue1208
      );
    },
  }));
var katexValue171 = {
    ">": `\\\\cdrightarrow`,
    "<": `\\\\cdleftarrow`,
    "=": `\\\\cdlongequal`,
    A: `\\uparrow`,
    V: `\\downarrow`,
    "|": `\\Vert`,
    ".": `no arrow`,
  },
  katexValue172 = () => ({
    type: `styling`,
    body: [],
    mode: `math`,
    style: `display`,
  }),
  katexValue173 = (_katexT) =>
    _katexT.type === `textord` && _katexT.text === `@`,
  katexValue174 = (_katexT, katexParam412) =>
    (_katexT.type === `mathord` || _katexT.type === `atom`) &&
    _katexT.text === katexParam412;
function katexHelper18(_katexT, katexParam60, katexParam61) {
  var katexValue705 = katexValue171[_katexT];
  switch (katexValue705) {
    case `\\\\cdrightarrow`:
    case `\\\\cdleftarrow`:
      return katexParam61.callFunction(
        katexValue705,
        [katexParam60[0]],
        [katexParam60[1]],
      );
    case `\\uparrow`:
    case `\\downarrow`:
      var katexValue706 = katexParam61.callFunction(
          `\\\\cdleft`,
          [katexParam60[0]],
          [],
        ),
        katexValue707 = {
          type: `atom`,
          text: katexValue705,
          mode: `math`,
          family: `rel`,
        },
        katexValue708 = {
          type: `ordgroup`,
          mode: `math`,
          body: [
            katexValue706,
            katexParam61.callFunction(`\\Big`, [katexValue707], []),
            katexParam61.callFunction(`\\\\cdright`, [katexParam60[1]], []),
          ],
        };
      return katexParam61.callFunction(`\\\\cdparent`, [katexValue708], []);
    case `\\\\cdlongequal`:
      return katexParam61.callFunction(`\\\\cdlongequal`, [], []);
    case `\\Vert`:
      return katexParam61.callFunction(
        `\\Big`,
        [
          {
            type: `textord`,
            text: `\\Vert`,
            mode: `math`,
          },
        ],
        [],
      );
    default:
      return {
        type: `textord`,
        text: ` `,
        mode: `math`,
      };
  }
}
function katexHelper19(katexParam17) {
  var katexValue453 = [];
  for (
    katexParam17.gullet.beginGroup(),
      katexParam17.gullet.macros.set(`\\cr`, `\\\\\\relax`),
      katexParam17.gullet.beginGroup();
    ;

  ) {
    (katexValue453.push(katexParam17.parseExpression(!1, `\\\\`)),
      katexParam17.gullet.endGroup(),
      katexParam17.gullet.beginGroup());
    var katexValue454 = katexParam17.fetch().text;
    if (katexValue454 === `&` || katexValue454 === `\\\\`)
      katexParam17.consume();
    else if (katexValue454 === `\\end`) {
      katexValue453[katexValue453.length - 1].length === 0 &&
        katexValue453.pop();
      break;
    } else
      throw new katexT(
        `Expected \\\\ or \\cr or \\end`,
        katexParam17.nextToken,
      );
  }
  for (
    var katexValue455 = [], katexValue456 = [katexValue455], katexValue457 = 0;
    katexValue457 < katexValue453.length;
    katexValue457++
  ) {
    for (
      var katexValue458 = katexValue453[katexValue457],
        katexValue459 = katexValue172(),
        katexValue460 = 0;
      katexValue460 < katexValue458.length;
      katexValue460++
    )
      if (!katexValue173(katexValue458[katexValue460]))
        katexValue459.body.push(katexValue458[katexValue460]);
      else {
        (katexValue455.push(katexValue459), (katexValue460 += 1));
        var _katexN = katexHelper14(katexValue458[katexValue460]).text,
          katexValue461 = [, ,];
        if (
          ((katexValue461[0] = {
            type: `ordgroup`,
            mode: `math`,
            body: [],
          }),
          (katexValue461[1] = {
            type: `ordgroup`,
            mode: `math`,
            body: [],
          }),
          !`=|.`.includes(_katexN))
        )
          if (`<>AV`.includes(_katexN))
            for (var katexValue462 = 0; katexValue462 < 2; katexValue462++) {
              for (
                var katexValue463 = !0, katexValue464 = katexValue460 + 1;
                katexValue464 < katexValue458.length;
                katexValue464++
              ) {
                if (katexValue174(katexValue458[katexValue464], _katexN)) {
                  ((katexValue463 = !1), (katexValue460 = katexValue464));
                  break;
                }
                if (katexValue173(katexValue458[katexValue464]))
                  throw new katexT(
                    `Missing a ` +
                      _katexN +
                      ` character to complete a CD arrow.`,
                    katexValue458[katexValue464],
                  );
                katexValue461[katexValue462].body.push(
                  katexValue458[katexValue464],
                );
              }
              if (katexValue463)
                throw new katexT(
                  `Missing a ` + _katexN + ` character to complete a CD arrow.`,
                  katexValue458[katexValue460],
                );
            }
          else
            throw new katexT(
              `Expected one of "<>AV=|." after @`,
              katexValue458[katexValue460],
            );
        var katexValue465 = {
          type: `styling`,
          body: [katexHelper18(_katexN, katexValue461, katexParam17)],
          mode: `math`,
          style: `display`,
        };
        (katexValue455.push(katexValue465), (katexValue459 = katexValue172()));
      }
    (katexValue457 % 2 == 0
      ? katexValue455.push(katexValue459)
      : katexValue455.shift(),
      (katexValue455 = []),
      katexValue456.push(katexValue455));
  }
  return (
    katexParam17.gullet.endGroup(),
    katexParam17.gullet.endGroup(),
    {
      type: `array`,
      mode: `math`,
      body: katexValue456,
      arraystretch: 1,
      addJot: !0,
      rowGaps: [null],
      cols: Array(katexValue456[0].length).fill({
        type: `align`,
        align: `c`,
        pregap: 0.25,
        postgap: 0.25,
      }),
      colSeparationType: `CD`,
      hLinesBeforeRow: Array(katexValue456.length + 1).fill([]),
    }
  );
}
(katexI({
  type: `cdlabel`,
  names: [`\\\\cdleft`, `\\\\cdright`],
  props: {
    numArgs: 1,
  },
  handler(_katexT, katexParam344) {
    var { parser: parser, funcName: funcName } = _katexT;
    return {
      type: `cdlabel`,
      mode: parser.mode,
      side: funcName.slice(4),
      label: katexParam344[0],
    };
  },
  htmlBuilder(_katexT, katexParam261) {
    var katexValue1139 = katexParam261.havingStyle(katexParam261.style.sup()),
      katexValue1140 = katexValue113(
        katexValue140(_katexT.label, katexValue1139, katexParam261),
        katexParam261,
      );
    return (
      katexValue1140.classes.push(`cd-label-` + _katexT.side),
      (katexValue1140.style.bottom = katexValue46(0.8 - katexValue1140.depth)),
      (katexValue1140.height = 0),
      (katexValue1140.depth = 0),
      katexValue1140
    );
  },
  mathmlBuilder(_katexT, katexParam160) {
    var katexValue973 = new katexValue141(`mrow`, [
      katexValue151(_katexT.label, katexParam160),
    ]);
    return (
      (katexValue973 = new katexValue141(`mpadded`, [katexValue973])),
      katexValue973.setAttribute(`width`, `0`),
      _katexT.side === `left` &&
        katexValue973.setAttribute(`lspace`, `-1width`),
      katexValue973.setAttribute(`voffset`, `0.7em`),
      (katexValue973 = new katexValue141(`mstyle`, [katexValue973])),
      katexValue973.setAttribute(`displaystyle`, `false`),
      katexValue973.setAttribute(`scriptlevel`, `1`),
      katexValue973
    );
  },
}),
  katexI({
    type: `cdlabelparent`,
    names: [`\\\\cdparent`],
    props: {
      numArgs: 1,
    },
    handler(_katexT, katexParam376) {
      var { parser: parser } = _katexT;
      return {
        type: `cdlabelparent`,
        mode: parser.mode,
        fragment: katexParam376[0],
      };
    },
    htmlBuilder(_katexT, katexParam369) {
      var katexValue1256 = katexValue113(
        katexValue140(_katexT.fragment, katexParam369),
        katexParam369,
      );
      return (katexValue1256.classes.push(`cd-vert-arrow`), katexValue1256);
    },
    mathmlBuilder(_katexT, katexParam406) {
      return new katexValue141(`mrow`, [
        katexValue151(_katexT.fragment, katexParam406),
      ]);
    },
  }),
  katexI({
    type: `textord`,
    names: [`\\@char`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler(katexParam112, katexParam113) {
      for (
        var { parser: parser } = katexParam112,
          katexValue870 = katexHelper13(katexParam113[0], `ordgroup`).body,
          katexValue871 = ``,
          katexValue872 = 0;
        katexValue872 < katexValue870.length;
        katexValue872++
      ) {
        var katexValue873 = katexHelper13(
          katexValue870[katexValue872],
          `textord`,
        );
        katexValue871 += katexValue873.text;
      }
      var katexValue874 = parseInt(katexValue871),
        katexValue875;
      if (isNaN(katexValue874))
        throw new katexT(`\\@char has non-numeric argument ` + katexValue871);
      if (katexValue874 < 0 || katexValue874 >= 1114111)
        throw new katexT(`\\@char with invalid code point ` + katexValue871);
      return (
        katexValue874 <= 65535
          ? (katexValue875 = String.fromCharCode(katexValue874))
          : ((katexValue874 -= 65536),
            (katexValue875 = String.fromCharCode(
              (katexValue874 >> 10) + 55296,
              (katexValue874 & 1023) + 56320,
            ))),
        {
          type: `textord`,
          mode: parser.mode,
          text: katexValue875,
        }
      );
    },
  }));
var katexValue175 = (_katexT, katexParam436) =>
    katexValue112(
      katexValue135(_katexT.body, katexParam436.withColor(_katexT.color), !1),
    ),
  katexValue176 = (_katexT, katexParam331) => {
    var katexValue1223 = new katexValue141(
      `mstyle`,
      katexValue149(_katexT.body, katexParam331.withColor(_katexT.color)),
    );
    return (
      katexValue1223.setAttribute(`mathcolor`, _katexT.color),
      katexValue1223
    );
  };
(katexI({
  type: `color`,
  names: [`\\textcolor`],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: [`color`, `original`],
  },
  handler(_katexT, katexParam325) {
    var { parser: parser } = _katexT,
      katexValue1214 = katexHelper13(katexParam325[0], `color-token`).color,
      katexValue1215 = katexParam325[1];
    return {
      type: `color`,
      mode: parser.mode,
      color: katexValue1214,
      body: katexValue130(katexValue1215),
    };
  },
  htmlBuilder: katexValue175,
  mathmlBuilder: katexValue176,
}),
  katexI({
    type: `color`,
    names: [`\\color`],
    props: {
      numArgs: 1,
      allowedInText: !0,
      argTypes: [`color`],
    },
    handler(_katexT, katexParam223) {
      var { parser: parser, breakOnTokenText: breakOnTokenText } = _katexT,
        katexValue1102 = katexHelper13(katexParam223[0], `color-token`).color;
      parser.gullet.macros.set(`\\current@color`, katexValue1102);
      var katexValue1103 = parser.parseExpression(!0, breakOnTokenText);
      return {
        type: `color`,
        mode: parser.mode,
        color: katexValue1102,
        body: katexValue1103,
      };
    },
    htmlBuilder: katexValue175,
    mathmlBuilder: katexValue176,
  }),
  katexI({
    type: `cr`,
    names: [`\\\\`],
    props: {
      numArgs: 0,
      numOptionalArgs: 0,
      allowedInText: !0,
    },
    handler(_katexT, katexParam161, katexParam162) {
      var { parser: parser } = _katexT,
        katexValue974 =
          parser.gullet.future().text === `[`
            ? parser.parseSizeGroup(!0)
            : null,
        katexValue975 =
          !parser.settings.displayMode ||
          !parser.settings.useStrictBehavior(
            `newLineInDisplayMode`,
            `In LaTeX, \\\\ or \\newline does nothing in display mode`,
          );
      return {
        type: `cr`,
        mode: parser.mode,
        newLine: katexValue975,
        size: katexValue974 && katexHelper13(katexValue974, `size`).value,
      };
    },
    htmlBuilder(_katexT, katexParam301) {
      var katexValue1197 = katexValue108([`mspace`], [], katexParam301);
      return (
        _katexT.newLine &&
          (katexValue1197.classes.push(`newline`),
          _katexT.size &&
            (katexValue1197.style.marginTop = katexValue46(
              katexValue45(_katexT.size, katexParam301),
            ))),
        katexValue1197
      );
    },
    mathmlBuilder(_katexT, katexParam283) {
      var katexValue1177 = new katexValue141(`mspace`);
      return (
        _katexT.newLine &&
          (katexValue1177.setAttribute(`linebreak`, `newline`),
          _katexT.size &&
            katexValue1177.setAttribute(
              `height`,
              katexValue46(katexValue45(_katexT.size, katexParam283)),
            )),
        katexValue1177
      );
    },
  }));
var katexValue177 = {
    "\\global": `\\global`,
    "\\long": `\\\\globallong`,
    "\\\\globallong": `\\\\globallong`,
    "\\def": `\\gdef`,
    "\\gdef": `\\gdef`,
    "\\edef": `\\xdef`,
    "\\xdef": `\\xdef`,
    "\\let": `\\\\globallet`,
    "\\futurelet": `\\\\globalfuture`,
  },
  katexValue178 = (katexParam334) => {
    var katexValue1229 = katexParam334.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(katexValue1229))
      throw new katexT(`Expected a control sequence`, katexParam334);
    return katexValue1229;
  },
  katexValue179 = (_katexT) => {
    var katexValue1218 = _katexT.gullet.popToken();
    return (
      katexValue1218.text === `=` &&
        ((katexValue1218 = _katexT.gullet.popToken()),
        katexValue1218.text === ` ` &&
          (katexValue1218 = _katexT.gullet.popToken())),
      katexValue1218
    );
  },
  katexValue180 = (_katexT, katexParam271, katexParam272, katexParam273) => {
    var katexValue1154 = _katexT.gullet.macros.get(katexParam272.text);
    ((katexValue1154 ??=
      ((katexParam272.noexpand = !0),
      {
        tokens: [katexParam272],
        numArgs: 0,
        unexpandable: !_katexT.gullet.isExpandable(katexParam272.text),
      })),
      _katexT.gullet.macros.set(katexParam271, katexValue1154, katexParam273));
  };
(katexI({
  type: `internal`,
  names: [`\\global`, `\\long`, `\\\\globallong`],
  props: {
    numArgs: 0,
    allowedInText: !0,
  },
  handler(katexParam205) {
    var { parser: parser, funcName: funcName } = katexParam205;
    parser.consumeSpaces();
    var katexValue1056 = parser.fetch();
    if (katexValue177[katexValue1056.text])
      return (
        (funcName === `\\global` || funcName === `\\\\globallong`) &&
          (katexValue1056.text = katexValue177[katexValue1056.text]),
        katexHelper13(parser.parseFunction(), `internal`)
      );
    throw new katexT(`Invalid token after macro prefix`, katexValue1056);
  },
}),
  katexI({
    type: `internal`,
    names: [`\\def`, `\\gdef`, `\\edef`, `\\xdef`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      primitive: !0,
    },
    handler(katexParam38) {
      var { parser: parser, funcName: funcName } = katexParam38,
        katexValue604 = parser.gullet.popToken(),
        katexValue605 = katexValue604.text;
      if (/^(?:[\\{}$&#^_]|EOF)$/.test(katexValue605))
        throw new katexT(`Expected a control sequence`, katexValue604);
      for (
        var katexValue606 = 0, katexValue607, katexValue608 = [[]];
        parser.gullet.future().text !== `{`;

      )
        if (
          ((katexValue604 = parser.gullet.popToken()),
          katexValue604.text === `#`)
        ) {
          if (parser.gullet.future().text === `{`) {
            ((katexValue607 = parser.gullet.future()),
              katexValue608[katexValue606].push(`{`));
            break;
          }
          if (
            ((katexValue604 = parser.gullet.popToken()),
            !/^[1-9]$/.test(katexValue604.text))
          )
            throw new katexT(
              `Invalid argument number "` + katexValue604.text + `"`,
            );
          if (parseInt(katexValue604.text) !== katexValue606 + 1)
            throw new katexT(
              `Argument number "` + katexValue604.text + `" out of order`,
            );
          (katexValue606++, katexValue608.push([]));
        } else if (katexValue604.text === `EOF`)
          throw new katexT(`Expected a macro definition`);
        else katexValue608[katexValue606].push(katexValue604.text);
      var { tokens: tokens } = parser.gullet.consumeArg();
      return (
        katexValue607 && tokens.unshift(katexValue607),
        (funcName === `\\edef` || funcName === `\\xdef`) &&
          ((tokens = parser.gullet.expandTokens(tokens)), tokens.reverse()),
        parser.gullet.macros.set(
          katexValue605,
          {
            tokens: tokens,
            numArgs: katexValue606,
            delimiters: katexValue608,
          },
          funcName === katexValue177[funcName],
        ),
        {
          type: `internal`,
          mode: parser.mode,
        }
      );
    },
  }),
  katexI({
    type: `internal`,
    names: [`\\let`, `\\\\globallet`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      primitive: !0,
    },
    handler(_katexT) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1155 = katexValue178(parser.gullet.popToken());
      return (
        parser.gullet.consumeSpaces(),
        katexValue180(
          parser,
          katexValue1155,
          katexValue179(parser),
          funcName === `\\\\globallet`,
        ),
        {
          type: `internal`,
          mode: parser.mode,
        }
      );
    },
  }),
  katexI({
    type: `internal`,
    names: [`\\futurelet`, `\\\\globalfuture`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      primitive: !0,
    },
    handler(_katexT) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1073 = katexValue178(parser.gullet.popToken()),
        katexValue1074 = parser.gullet.popToken(),
        katexValue1075 = parser.gullet.popToken();
      return (
        katexValue180(
          parser,
          katexValue1073,
          katexValue1075,
          funcName === `\\\\globalfuture`,
        ),
        parser.gullet.pushToken(katexValue1075),
        parser.gullet.pushToken(katexValue1074),
        {
          type: `internal`,
          mode: parser.mode,
        }
      );
    },
  }));
var $n = function (_katexT, katexParam293, katexParam294) {
    var katexValue1191 = katexHelper6(
      (katexValue67.math[_katexT] && katexValue67.math[_katexT].replace) ||
        _katexT,
      katexParam293,
      katexParam294,
    );
    if (!katexValue1191)
      throw Error(
        `Unsupported symbol ` +
          _katexT +
          ` and font size ` +
          katexParam293 +
          `.`,
      );
    return katexValue1191;
  },
  katexValue181 = function (
    _katexT,
    katexParam231,
    katexParam232,
    katexParam233,
  ) {
    var katexValue1112 = katexParam232.havingBaseStyle(katexParam231),
      katexValue1113 = katexValue108(
        katexParam233.concat(katexValue1112.sizingClasses(katexParam232)),
        [_katexT],
        katexParam232,
      ),
      katexValue1114 =
        katexValue1112.sizeMultiplier / katexParam232.sizeMultiplier;
    return (
      (katexValue1113.height *= katexValue1114),
      (katexValue1113.depth *= katexValue1114),
      (katexValue1113.maxFontSize = katexValue1112.sizeMultiplier),
      katexValue1113
    );
  },
  katexValue182 = function (_katexT, katexParam238, katexParam239) {
    var katexValue1125 = katexParam238.havingBaseStyle(katexParam239),
      katexValue1126 =
        (1 - katexParam238.sizeMultiplier / katexValue1125.sizeMultiplier) *
        katexParam238.fontMetrics().axisHeight;
    (_katexT.classes.push(`delimcenter`),
      (_katexT.style.top = katexValue46(katexValue1126)),
      (_katexT.height -= katexValue1126),
      (_katexT.depth += katexValue1126));
  },
  katexValue183 = function (
    _katexT,
    katexParam370,
    katexParam371,
    katexParam372,
    katexParam373,
    katexParam374,
  ) {
    var katexValue1257 = katexValue181(
      katexValue101(_katexT, `Main-Regular`, katexParam373, katexParam372),
      katexParam370,
      katexParam372,
      katexParam374,
    );
    return (
      katexParam371 &&
        katexValue182(katexValue1257, katexParam372, katexParam370),
      katexValue1257
    );
  },
  katexValue184 = function (
    _katexT,
    katexParam424,
    katexParam425,
    katexParam426,
  ) {
    return katexValue101(
      _katexT,
      `Size` + katexParam424 + `-Regular`,
      katexParam425,
      katexParam426,
    );
  },
  katexValue185 = function (
    _katexT,
    katexParam320,
    katexParam321,
    katexParam322,
    katexParam323,
    katexParam324,
  ) {
    var katexValue1212 = katexValue184(
        _katexT,
        katexParam320,
        katexParam323,
        katexParam322,
      ),
      katexValue1213 = katexValue181(
        katexValue108(
          [`delimsizing`, `size` + katexParam320],
          [katexValue1212],
          katexParam322,
        ),
        katexValue27.TEXT,
        katexParam322,
        katexParam324,
      );
    return (
      katexParam321 &&
        katexValue182(katexValue1213, katexParam322, katexValue27.TEXT),
      katexValue1213
    );
  },
  katexValue186 = function (_katexT, katexParam302, katexParam303) {
    return {
      type: `elem`,
      elem: katexValue108(
        [
          `delimsizinginner`,
          katexParam302 === `Size1-Regular` ? `delim-size1` : `delim-size4`,
        ],
        [
          katexValue108(
            [],
            [katexValue101(_katexT, katexParam302, katexParam303)],
          ),
        ],
      ),
    };
  },
  or = function (_katexT, katexParam116, katexParam117) {
    var katexValue877 = katexValue61[`Size4-Regular`][_katexT.charCodeAt(0)]
        ? katexValue61[`Size4-Regular`][_katexT.charCodeAt(0)][4]
        : katexValue61[`Size1-Regular`][_katexT.charCodeAt(0)][4],
      katexValue878 = katexValue109(
        [],
        [
          new katexValue57(
            [
              new katexValue58(
                `inner`,
                _e(_katexT, Math.round(1e3 * katexParam116)),
              ),
            ],
            {
              width: katexValue46(katexValue877),
              height: katexValue46(katexParam116),
              style: `width:` + katexValue46(katexValue877),
              viewBox:
                `0 0 ` +
                1e3 * katexValue877 +
                ` ` +
                Math.round(1e3 * katexParam116),
              preserveAspectRatio: `xMinYMin`,
            },
          ),
        ],
        katexParam117,
      );
    return (
      (katexValue878.height = katexParam116),
      (katexValue878.style.height = katexValue46(katexParam116)),
      (katexValue878.style.width = katexValue46(katexValue877)),
      {
        type: `elem`,
        elem: katexValue878,
      }
    );
  },
  katexValue187 = 0.008,
  katexValue188 = {
    type: `kern`,
    size: -1 * katexValue187,
  },
  katexValue189 = new Set([`|`, `\\lvert`, `\\rvert`, `\\vert`]),
  katexValue190 = new Set([`\\|`, `\\lVert`, `\\rVert`, `\\Vert`]),
  katexValue191 = function (
    _katexT,
    katexParam4,
    katexParam5,
    katexParam6,
    katexParam7,
    katexParam8,
  ) {
    var katexValue326,
      katexValue327,
      katexValue328,
      katexValue329,
      _katexN = ``,
      katexValue330 = 0;
    ((katexValue326 = katexValue328 = katexValue329 = _katexT),
      (katexValue327 = null));
    var katexValue331 = `Size1-Regular`;
    _katexT === `\\uparrow`
      ? (katexValue328 = katexValue329 = `⏐`)
      : _katexT === `\\Uparrow`
        ? (katexValue328 = katexValue329 = `‖`)
        : _katexT === `\\downarrow`
          ? (katexValue326 = katexValue328 = `⏐`)
          : _katexT === `\\Downarrow`
            ? (katexValue326 = katexValue328 = `‖`)
            : _katexT === `\\updownarrow`
              ? ((katexValue326 = `\\uparrow`),
                (katexValue328 = `⏐`),
                (katexValue329 = `\\downarrow`))
              : _katexT === `\\Updownarrow`
                ? ((katexValue326 = `\\Uparrow`),
                  (katexValue328 = `‖`),
                  (katexValue329 = `\\Downarrow`))
                : katexValue189.has(_katexT)
                  ? ((katexValue328 = `∣`),
                    (_katexN = `vert`),
                    (katexValue330 = 333))
                  : katexValue190.has(_katexT)
                    ? ((katexValue328 = `∥`),
                      (_katexN = `doublevert`),
                      (katexValue330 = 556))
                    : _katexT === `[` || _katexT === `\\lbrack`
                      ? ((katexValue326 = `⎡`),
                        (katexValue328 = `⎢`),
                        (katexValue329 = `⎣`),
                        (katexValue331 = `Size4-Regular`),
                        (_katexN = `lbrack`),
                        (katexValue330 = 667))
                      : _katexT === `]` || _katexT === `\\rbrack`
                        ? ((katexValue326 = `⎤`),
                          (katexValue328 = `⎥`),
                          (katexValue329 = `⎦`),
                          (katexValue331 = `Size4-Regular`),
                          (_katexN = `rbrack`),
                          (katexValue330 = 667))
                        : _katexT === `\\lfloor` || _katexT === `⌊`
                          ? ((katexValue328 = katexValue326 = `⎢`),
                            (katexValue329 = `⎣`),
                            (katexValue331 = `Size4-Regular`),
                            (_katexN = `lfloor`),
                            (katexValue330 = 667))
                          : _katexT === `\\lceil` || _katexT === `⌈`
                            ? ((katexValue326 = `⎡`),
                              (katexValue328 = katexValue329 = `⎢`),
                              (katexValue331 = `Size4-Regular`),
                              (_katexN = `lceil`),
                              (katexValue330 = 667))
                            : _katexT === `\\rfloor` || _katexT === `⌋`
                              ? ((katexValue328 = katexValue326 = `⎥`),
                                (katexValue329 = `⎦`),
                                (katexValue331 = `Size4-Regular`),
                                (_katexN = `rfloor`),
                                (katexValue330 = 667))
                              : _katexT === `\\rceil` || _katexT === `⌉`
                                ? ((katexValue326 = `⎤`),
                                  (katexValue328 = katexValue329 = `⎥`),
                                  (katexValue331 = `Size4-Regular`),
                                  (_katexN = `rceil`),
                                  (katexValue330 = 667))
                                : _katexT === `(` || _katexT === `\\lparen`
                                  ? ((katexValue326 = `⎛`),
                                    (katexValue328 = `⎜`),
                                    (katexValue329 = `⎝`),
                                    (katexValue331 = `Size4-Regular`),
                                    (_katexN = `lparen`),
                                    (katexValue330 = 875))
                                  : _katexT === `)` || _katexT === `\\rparen`
                                    ? ((katexValue326 = `⎞`),
                                      (katexValue328 = `⎟`),
                                      (katexValue329 = `⎠`),
                                      (katexValue331 = `Size4-Regular`),
                                      (_katexN = `rparen`),
                                      (katexValue330 = 875))
                                    : _katexT === `\\{` ||
                                        _katexT === `\\lbrace`
                                      ? ((katexValue326 = `⎧`),
                                        (katexValue327 = `⎨`),
                                        (katexValue329 = `⎩`),
                                        (katexValue328 = `⎪`),
                                        (katexValue331 = `Size4-Regular`))
                                      : _katexT === `\\}` ||
                                          _katexT === `\\rbrace`
                                        ? ((katexValue326 = `⎫`),
                                          (katexValue327 = `⎬`),
                                          (katexValue329 = `⎭`),
                                          (katexValue328 = `⎪`),
                                          (katexValue331 = `Size4-Regular`))
                                        : _katexT === `\\lgroup` ||
                                            _katexT === `⟮`
                                          ? ((katexValue326 = `⎧`),
                                            (katexValue329 = `⎩`),
                                            (katexValue328 = `⎪`),
                                            (katexValue331 = `Size4-Regular`))
                                          : _katexT === `\\rgroup` ||
                                              _katexT === `⟯`
                                            ? ((katexValue326 = `⎫`),
                                              (katexValue329 = `⎭`),
                                              (katexValue328 = `⎪`),
                                              (katexValue331 = `Size4-Regular`))
                                            : _katexT === `\\lmoustache` ||
                                                _katexT === `⎰`
                                              ? ((katexValue326 = `⎧`),
                                                (katexValue329 = `⎭`),
                                                (katexValue328 = `⎪`),
                                                (katexValue331 = `Size4-Regular`))
                                              : (_katexT === `\\rmoustache` ||
                                                  _katexT === `⎱`) &&
                                                ((katexValue326 = `⎫`),
                                                (katexValue329 = `⎩`),
                                                (katexValue328 = `⎪`),
                                                (katexValue331 = `Size4-Regular`));
    var katexValue332 = $n(katexValue326, katexValue331, katexParam7),
      katexValue333 = katexValue332.height + katexValue332.depth,
      katexValue334 = $n(katexValue328, katexValue331, katexParam7),
      katexValue335 = katexValue334.height + katexValue334.depth,
      katexValue336 = $n(katexValue329, katexValue331, katexParam7),
      katexValue337 = katexValue336.height + katexValue336.depth,
      katexValue338 = 0,
      katexValue339 = 1;
    if (katexValue327 !== null) {
      var katexValue340 = $n(katexValue327, katexValue331, katexParam7);
      ((katexValue338 = katexValue340.height + katexValue340.depth),
        (katexValue339 = 2));
    }
    var katexValue341 = katexValue333 + katexValue337 + katexValue338,
      katexValue342 =
        katexValue341 +
        Math.max(
          0,
          Math.ceil(
            (katexParam4 - katexValue341) / (katexValue339 * katexValue335),
          ),
        ) *
          katexValue339 *
          katexValue335,
      katexValue343 = katexParam6.fontMetrics().axisHeight;
    katexParam5 && (katexValue343 *= katexParam6.sizeMultiplier);
    var katexValue344 = katexValue342 / 2 - katexValue343,
      katexValue345 = [];
    if (_katexN.length > 0) {
      var katexValue346 = katexValue342 - katexValue333 - katexValue337,
        katexValue347 = Math.round(katexValue342 * 1e3),
        katexValue348 = katexValue41(_katexN, Math.round(katexValue346 * 1e3)),
        katexValue349 = new katexValue58(_katexN, katexValue348),
        katexValue350 = katexValue46(katexValue330 / 1e3),
        katexValue351 = katexValue46(katexValue347 / 1e3),
        katexValue352 = katexValue109(
          [],
          [
            new katexValue57([katexValue349], {
              width: katexValue350,
              height: katexValue351,
              viewBox: `0 0 ` + katexValue330 + ` ` + katexValue347,
            }),
          ],
          katexParam6,
        );
      ((katexValue352.height = katexValue347 / 1e3),
        (katexValue352.style.width = katexValue350),
        (katexValue352.style.height = katexValue351),
        katexValue345.push({
          type: `elem`,
          elem: katexValue352,
        }));
    } else {
      if (
        (katexValue345.push(
          katexValue186(katexValue329, katexValue331, katexParam7),
        ),
        katexValue345.push(katexValue188),
        katexValue327 === null)
      ) {
        var katexValue353 =
          katexValue342 - katexValue333 - katexValue337 + 2 * katexValue187;
        katexValue345.push(or(katexValue328, katexValue353, katexParam6));
      } else {
        var katexValue354 =
          (katexValue342 - katexValue333 - katexValue337 - katexValue338) / 2 +
          2 * katexValue187;
        (katexValue345.push(or(katexValue328, katexValue354, katexParam6)),
          katexValue345.push(katexValue188),
          katexValue345.push(
            katexValue186(katexValue327, katexValue331, katexParam7),
          ),
          katexValue345.push(katexValue188),
          katexValue345.push(or(katexValue328, katexValue354, katexParam6)));
      }
      (katexValue345.push(katexValue188),
        katexValue345.push(
          katexValue186(katexValue326, katexValue331, katexParam7),
        ));
    }
    var katexValue355 = katexParam6.havingBaseStyle(katexValue27.TEXT);
    return katexValue181(
      katexValue108(
        [`delimsizing`, `mult`],
        [
          katexValue115({
            positionType: `bottom`,
            positionData: katexValue344,
            children: katexValue345,
          }),
        ],
        katexValue355,
      ),
      katexValue27.TEXT,
      katexParam6,
      katexParam8,
    );
  },
  katexValue192 = 80,
  katexValue193 = 0.08,
  katexValue194 = function (
    _katexT,
    katexParam262,
    katexParam263,
    katexParam264,
    katexParam265,
  ) {
    return katexValue109(
      [`hide-tail`],
      [
        new katexValue57(
          [
            new katexValue58(
              _katexT,
              katexValue39(_katexT, katexParam264, katexParam263),
            ),
          ],
          {
            width: `400em`,
            height: katexValue46(katexParam262),
            viewBox: `0 0 400000 ` + katexParam263,
            preserveAspectRatio: `xMinYMin slice`,
          },
        ),
      ],
      katexParam265,
    );
  },
  katexValue195 = function (_katexT, katexParam55) {
    var katexValue677 = katexParam55.havingBaseSizing(),
      katexValue678 = katexValue204(
        `\\surd`,
        _katexT * katexValue677.sizeMultiplier,
        katexValue202,
        katexValue677,
      ),
      katexValue679 = katexValue677.sizeMultiplier,
      katexValue680 = Math.max(
        0,
        katexParam55.minRuleThickness -
          katexParam55.fontMetrics().sqrtRuleThickness,
      ),
      katexValue681,
      katexValue682 = 0,
      katexValue683 = 0,
      katexValue684 = 0,
      _katexN;
    return (
      katexValue678.type === `small`
        ? ((katexValue684 = 1e3 + 1e3 * katexValue680 + katexValue192),
          _katexT < 1
            ? (katexValue679 = 1)
            : _katexT < 1.4 && (katexValue679 = 0.7),
          (katexValue682 = (1 + katexValue680 + katexValue193) / katexValue679),
          (katexValue683 = (1 + katexValue680) / katexValue679),
          (katexValue681 = katexValue194(
            `sqrtMain`,
            katexValue682,
            katexValue684,
            katexValue680,
            katexParam55,
          )),
          (katexValue681.style.minWidth = `0.853em`),
          (_katexN = 0.833 / katexValue679))
        : katexValue678.type === `large`
          ? ((katexValue684 =
              (1e3 + katexValue192) * katexValue198[katexValue678.size]),
            (katexValue683 =
              (katexValue198[katexValue678.size] + katexValue680) /
              katexValue679),
            (katexValue682 =
              (katexValue198[katexValue678.size] +
                katexValue680 +
                katexValue193) /
              katexValue679),
            (katexValue681 = katexValue194(
              `sqrtSize` + katexValue678.size,
              katexValue682,
              katexValue684,
              katexValue680,
              katexParam55,
            )),
            (katexValue681.style.minWidth = `1.02em`),
            (_katexN = 1 / katexValue679))
          : ((katexValue682 = _katexT + katexValue680 + katexValue193),
            (katexValue683 = _katexT + katexValue680),
            (katexValue684 =
              Math.floor(1e3 * _katexT + katexValue680) + katexValue192),
            (katexValue681 = katexValue194(
              `sqrtTall`,
              katexValue682,
              katexValue684,
              katexValue680,
              katexParam55,
            )),
            (katexValue681.style.minWidth = `0.742em`),
            (_katexN = 1.056)),
      (katexValue681.height = katexValue683),
      (katexValue681.style.height = katexValue46(katexValue682)),
      {
        span: katexValue681,
        advanceWidth: _katexN,
        ruleWidth:
          (katexParam55.fontMetrics().sqrtRuleThickness + katexValue680) *
          katexValue679,
      }
    );
  },
  katexValue196 = new Set([
    `(`,
    `\\lparen`,
    `)`,
    `\\rparen`,
    `[`,
    `\\lbrack`,
    `]`,
    `\\rbrack`,
    `\\{`,
    `\\lbrace`,
    `\\}`,
    `\\rbrace`,
    `\\lfloor`,
    `\\rfloor`,
    `⌊`,
    `⌋`,
    `\\lceil`,
    `\\rceil`,
    `⌈`,
    `⌉`,
    `\\surd`,
  ]),
  _r = new Set([
    `\\uparrow`,
    `\\downarrow`,
    `\\updownarrow`,
    `\\Uparrow`,
    `\\Downarrow`,
    `\\Updownarrow`,
    `|`,
    `\\|`,
    `\\vert`,
    `\\Vert`,
    `\\lvert`,
    `\\rvert`,
    `\\lVert`,
    `\\rVert`,
    `\\lgroup`,
    `\\rgroup`,
    `⟮`,
    `⟯`,
    `\\lmoustache`,
    `\\rmoustache`,
    `⎰`,
    `⎱`,
  ]),
  katexValue197 = new Set([
    `<`,
    `>`,
    `\\langle`,
    `\\rangle`,
    `/`,
    `\\backslash`,
    `\\lt`,
    `\\gt`,
  ]),
  katexValue198 = [0, 1.2, 1.8, 2.4, 3],
  katexValue199 = function (
    katexParam199,
    katexParam200,
    katexParam201,
    katexParam202,
    katexParam203,
  ) {
    if (
      (katexParam199 === `<` ||
      katexParam199 === `\\lt` ||
      katexParam199 === `⟨`
        ? (katexParam199 = `\\langle`)
        : (katexParam199 === `>` ||
            katexParam199 === `\\gt` ||
            katexParam199 === `⟩`) &&
          (katexParam199 = `\\rangle`),
      katexValue196.has(katexParam199) || katexValue197.has(katexParam199))
    )
      return katexValue185(
        katexParam199,
        katexParam200,
        !1,
        katexParam201,
        katexParam202,
        katexParam203,
      );
    if (_r.has(katexParam199))
      return katexValue191(
        katexParam199,
        katexValue198[katexParam200],
        !1,
        katexParam201,
        katexParam202,
        katexParam203,
      );
    throw new katexT(`Illegal delimiter: '` + katexParam199 + `'`);
  },
  katexValue200 = [
    {
      type: `small`,
      style: katexValue27.SCRIPTSCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.SCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.TEXT,
    },
    {
      type: `large`,
      size: 1,
    },
    {
      type: `large`,
      size: 2,
    },
    {
      type: `large`,
      size: 3,
    },
    {
      type: `large`,
      size: 4,
    },
  ],
  katexValue201 = [
    {
      type: `small`,
      style: katexValue27.SCRIPTSCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.SCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.TEXT,
    },
    {
      type: `stack`,
    },
  ],
  katexValue202 = [
    {
      type: `small`,
      style: katexValue27.SCRIPTSCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.SCRIPT,
    },
    {
      type: `small`,
      style: katexValue27.TEXT,
    },
    {
      type: `large`,
      size: 1,
    },
    {
      type: `large`,
      size: 2,
    },
    {
      type: `large`,
      size: 3,
    },
    {
      type: `large`,
      size: 4,
    },
    {
      type: `stack`,
    },
  ],
  katexValue203 = function (_katexT) {
    if (_katexT.type === `small`) return `Main-Regular`;
    if (_katexT.type === `large`) return `Size` + _katexT.size + `-Regular`;
    if (_katexT.type === `stack`) return `Size4-Regular`;
    var katexValue1081 = _katexT.type;
    throw Error(`Add support for delim type '` + katexValue1081 + `' here.`);
  },
  katexValue204 = function (
    _katexT,
    katexParam175,
    katexParam176,
    katexParam177,
  ) {
    for (
      var katexValue1006 = Math.min(2, 3 - katexParam177.style.size);
      katexValue1006 < katexParam176.length;
      katexValue1006++
    ) {
      var katexValue1007 = katexParam176[katexValue1006];
      if (katexValue1007.type === `stack`) break;
      var katexValue1008 = $n(_katexT, katexValue203(katexValue1007), `math`),
        katexValue1009 = katexValue1008.height + katexValue1008.depth;
      if (katexValue1007.type === `small`) {
        var katexValue1010 = katexParam177.havingBaseStyle(
          katexValue1007.style,
        );
        katexValue1009 *= katexValue1010.sizeMultiplier;
      }
      if (katexValue1009 > katexParam175) return katexValue1007;
    }
    return katexParam176[katexParam176.length - 1];
  },
  katexValue205 = function (
    _katexT,
    katexParam179,
    katexParam180,
    katexParam181,
    katexParam182,
    katexParam183,
  ) {
    _katexT === `<` || _katexT === `\\lt` || _katexT === `⟨`
      ? (_katexT = `\\langle`)
      : (_katexT === `>` || _katexT === `\\gt` || _katexT === `⟩`) &&
        (_katexT = `\\rangle`);
    var katexValue1015 = katexValue197.has(_katexT)
        ? katexValue200
        : katexValue196.has(_katexT)
          ? katexValue202
          : katexValue201,
      katexValue1016 = katexValue204(
        _katexT,
        katexParam179,
        katexValue1015,
        katexParam181,
      );
    return katexValue1016.type === `small`
      ? katexValue183(
          _katexT,
          katexValue1016.style,
          katexParam180,
          katexParam181,
          katexParam182,
          katexParam183,
        )
      : katexValue1016.type === `large`
        ? katexValue185(
            _katexT,
            katexValue1016.size,
            katexParam180,
            katexParam181,
            katexParam182,
            katexParam183,
          )
        : katexValue191(
            _katexT,
            katexParam179,
            katexParam180,
            katexParam181,
            katexParam182,
            katexParam183,
          );
  },
  katexValue206 = function (
    _katexT,
    katexParam245,
    katexParam246,
    katexParam247,
    katexParam248,
    katexParam249,
  ) {
    var katexValue1129 =
        katexParam247.fontMetrics().axisHeight * katexParam247.sizeMultiplier,
      katexValue1130 = 901,
      katexValue1131 = 5 / katexParam247.fontMetrics().ptPerEm,
      katexValue1132 = Math.max(
        katexParam245 - katexValue1129,
        katexParam246 + katexValue1129,
      );
    return katexValue205(
      _katexT,
      Math.max(
        (katexValue1132 / 500) * katexValue1130,
        2 * katexValue1132 - katexValue1131,
      ),
      !0,
      katexParam247,
      katexParam248,
      katexParam249,
    );
  },
  katexValue207 = {
    "\\bigl": {
      mclass: `mopen`,
      size: 1,
    },
    "\\Bigl": {
      mclass: `mopen`,
      size: 2,
    },
    "\\biggl": {
      mclass: `mopen`,
      size: 3,
    },
    "\\Biggl": {
      mclass: `mopen`,
      size: 4,
    },
    "\\bigr": {
      mclass: `mclose`,
      size: 1,
    },
    "\\Bigr": {
      mclass: `mclose`,
      size: 2,
    },
    "\\biggr": {
      mclass: `mclose`,
      size: 3,
    },
    "\\Biggr": {
      mclass: `mclose`,
      size: 4,
    },
    "\\bigm": {
      mclass: `mrel`,
      size: 1,
    },
    "\\Bigm": {
      mclass: `mrel`,
      size: 2,
    },
    "\\biggm": {
      mclass: `mrel`,
      size: 3,
    },
    "\\Biggm": {
      mclass: `mrel`,
      size: 4,
    },
    "\\big": {
      mclass: `mord`,
      size: 1,
    },
    "\\Big": {
      mclass: `mord`,
      size: 2,
    },
    "\\bigg": {
      mclass: `mord`,
      size: 3,
    },
    "\\Bigg": {
      mclass: `mord`,
      size: 4,
    },
  },
  katexValue208 = new Set(
    `(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(
      `,`,
    ),
  );
function katexHelper20(katexParam240, katexParam241) {
  var katexValue1127 = katexHelper15(katexParam240);
  if (katexValue1127 && katexValue208.has(katexValue1127.text))
    return katexValue1127;
  throw katexValue1127
    ? new katexT(
        `Invalid delimiter '` +
          katexValue1127.text +
          `' after '` +
          katexParam241.funcName +
          `'`,
        katexParam240,
      )
    : new katexT(
        `Invalid delimiter type '` + katexParam240.type + `'`,
        katexParam240,
      );
}
katexI({
  type: `delimsizing`,
  names: [
    `\\bigl`,
    `\\Bigl`,
    `\\biggl`,
    `\\Biggl`,
    `\\bigr`,
    `\\Bigr`,
    `\\biggr`,
    `\\Biggr`,
    `\\bigm`,
    `\\Bigm`,
    `\\biggm`,
    `\\Biggm`,
    `\\big`,
    `\\Big`,
    `\\bigg`,
    `\\Bigg`,
  ],
  props: {
    numArgs: 1,
    argTypes: [`primitive`],
  },
  handler: (_katexT, katexParam295) => {
    var katexValue1192 = katexHelper20(katexParam295[0], _katexT);
    return {
      type: `delimsizing`,
      mode: _katexT.parser.mode,
      size: katexValue207[_katexT.funcName].size,
      mclass: katexValue207[_katexT.funcName].mclass,
      delim: katexValue1192.text,
    };
  },
  htmlBuilder: (_katexT, katexParam396) =>
    _katexT.delim === `.`
      ? katexValue108([_katexT.mclass])
      : katexValue199(
          _katexT.delim,
          _katexT.size,
          katexParam396,
          _katexT.mode,
          [_katexT.mclass],
        ),
  mathmlBuilder: (_katexT) => {
    var katexValue970 = [];
    _katexT.delim !== `.` &&
      katexValue970.push(katexValue146(_katexT.delim, _katexT.mode));
    var katexValue971 = new katexValue141(`mo`, katexValue970);
    (_katexT.mclass === `mopen` || _katexT.mclass === `mclose`
      ? katexValue971.setAttribute(`fence`, `true`)
      : katexValue971.setAttribute(`fence`, `false`),
      katexValue971.setAttribute(`stretchy`, `true`));
    var katexValue972 = katexValue46(katexValue198[_katexT.size]);
    return (
      katexValue971.setAttribute(`minsize`, katexValue972),
      katexValue971.setAttribute(`maxsize`, katexValue972),
      katexValue971
    );
  },
});
function katexHelper21(_katexT) {
  if (!_katexT.body)
    throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`);
}
(katexI({
  type: `leftright-right`,
  names: [`\\right`],
  props: {
    numArgs: 1,
    primitive: !0,
  },
  handler: (katexParam206, katexParam207) => {
    var katexValue1067 =
      katexParam206.parser.gullet.macros.get(`\\current@color`);
    if (katexValue1067 && typeof katexValue1067 != `string`)
      throw new katexT(`\\current@color set to non-string in \\right`);
    return {
      type: `leftright-right`,
      mode: katexParam206.parser.mode,
      delim: katexHelper20(katexParam207[0], katexParam206).text,
      color: katexValue1067,
    };
  },
}),
  katexI({
    type: `leftright`,
    names: [`\\left`],
    props: {
      numArgs: 1,
      primitive: !0,
    },
    handler: (_katexT, katexParam184) => {
      var katexValue1017 = katexHelper20(katexParam184[0], _katexT),
        katexValue1018 = _katexT.parser;
      ++katexValue1018.leftrightDepth;
      var katexValue1019 = katexValue1018.parseExpression(!1);
      (--katexValue1018.leftrightDepth, katexValue1018.expect(`\\right`, !1));
      var katexValue1020 = katexHelper13(
        katexValue1018.parseFunction(),
        `leftright-right`,
      );
      return {
        type: `leftright`,
        mode: katexValue1018.mode,
        body: katexValue1019,
        left: katexValue1017.text,
        right: katexValue1020.delim,
        rightColor: katexValue1020.color,
      };
    },
    htmlBuilder: (_katexT, katexParam70) => {
      katexHelper21(_katexT);
      for (
        var katexValue732 = katexValue135(_katexT.body, katexParam70, !0, [
            `mopen`,
            `mclose`,
          ]),
          katexValue733 = 0,
          katexValue734 = 0,
          katexValue735 = !1,
          katexValue736 = 0;
        katexValue736 < katexValue732.length;
        katexValue736++
      )
        katexValue732[katexValue736].isMiddle
          ? (katexValue735 = !0)
          : ((katexValue733 = Math.max(
              katexValue732[katexValue736].height,
              katexValue733,
            )),
            (katexValue734 = Math.max(
              katexValue732[katexValue736].depth,
              katexValue734,
            )));
      ((katexValue733 *= katexParam70.sizeMultiplier),
        (katexValue734 *= katexParam70.sizeMultiplier));
      var katexValue737 =
        _katexT.left === `.`
          ? katexValue139(katexParam70, [`mopen`])
          : katexValue206(
              _katexT.left,
              katexValue733,
              katexValue734,
              katexParam70,
              _katexT.mode,
              [`mopen`],
            );
      if ((katexValue732.unshift(katexValue737), katexValue735))
        for (
          var katexValue738 = 1;
          katexValue738 < katexValue732.length;
          katexValue738++
        ) {
          var katexValue739 = katexValue732[katexValue738].isMiddle;
          katexValue739 &&
            (katexValue732[katexValue738] = katexValue206(
              katexValue739.delim,
              katexValue733,
              katexValue734,
              katexValue739.options,
              _katexT.mode,
              [],
            ));
        }
      var _katexN;
      if (_katexT.right === `.`)
        _katexN = katexValue139(katexParam70, [`mclose`]);
      else {
        var katexValue740 = _katexT.rightColor
          ? katexParam70.withColor(_katexT.rightColor)
          : katexParam70;
        _katexN = katexValue206(
          _katexT.right,
          katexValue733,
          katexValue734,
          katexValue740,
          _katexT.mode,
          [`mclose`],
        );
      }
      return (
        katexValue732.push(_katexN),
        katexValue108([`minner`], katexValue732, katexParam70)
      );
    },
    mathmlBuilder: (_katexT, katexParam159) => {
      katexHelper21(_katexT);
      var katexValue967 = katexValue149(_katexT.body, katexParam159);
      if (_katexT.left !== `.`) {
        var katexValue968 = new katexValue141(`mo`, [
          katexValue146(_katexT.left, _katexT.mode),
        ]);
        (katexValue968.setAttribute(`fence`, `true`),
          katexValue967.unshift(katexValue968));
      }
      if (_katexT.right !== `.`) {
        var katexValue969 = new katexValue141(`mo`, [
          katexValue146(_katexT.right, _katexT.mode),
        ]);
        (katexValue969.setAttribute(`fence`, `true`),
          _katexT.rightColor &&
            katexValue969.setAttribute(`mathcolor`, _katexT.rightColor),
          katexValue967.push(katexValue969));
      }
      return katexValue147(katexValue967);
    },
  }),
  katexI({
    type: `middle`,
    names: [`\\middle`],
    props: {
      numArgs: 1,
      primitive: !0,
    },
    handler: (katexParam278, katexParam279) => {
      var katexValue1163 = katexHelper20(katexParam279[0], katexParam278);
      if (!katexParam278.parser.leftrightDepth)
        throw new katexT(`\\middle without preceding \\left`, katexValue1163);
      return {
        type: `middle`,
        mode: katexParam278.parser.mode,
        delim: katexValue1163.text,
      };
    },
    htmlBuilder: (_katexT, katexParam305) => {
      var katexValue1200;
      if (_katexT.delim === `.`)
        katexValue1200 = katexValue139(katexParam305, []);
      else {
        katexValue1200 = katexValue199(
          _katexT.delim,
          1,
          katexParam305,
          _katexT.mode,
          [],
        );
        var katexValue1201 = {
          delim: _katexT.delim,
          options: katexParam305,
        };
        katexValue1200.isMiddle = katexValue1201;
      }
      return katexValue1200;
    },
    mathmlBuilder: (_katexT, katexParam220) => {
      var katexValue1095 = new katexValue141(`mo`, [
        _katexT.delim === `\\vert` || _katexT.delim === `|`
          ? katexValue146(`|`, `text`)
          : katexValue146(_katexT.delim, _katexT.mode),
      ]);
      return (
        katexValue1095.setAttribute(`fence`, `true`),
        katexValue1095.setAttribute(`lspace`, `0.05em`),
        katexValue1095.setAttribute(`rspace`, `0.05em`),
        katexValue1095
      );
    },
  }));
var katexValue209 = (_katexT, katexParam12) => {
    var katexValue378 = katexValue113(
        katexValue140(_katexT.body, katexParam12),
        katexParam12,
      ),
      katexValue379 = _katexT.label.slice(1),
      katexValue380 = katexParam12.sizeMultiplier,
      katexValue381,
      katexValue382 = 0,
      katexValue383 = katexValue8(_katexT.body);
    if (katexValue379 === `sout`)
      ((katexValue381 = katexValue108([`stretchy`, `sout`])),
        (katexValue381.height =
          katexParam12.fontMetrics().defaultRuleThickness / katexValue380),
        (katexValue382 = -0.5 * katexParam12.fontMetrics().xHeight));
    else if (katexValue379 === `phase`) {
      var katexValue384 = katexValue45(
          {
            number: 0.6,
            unit: `pt`,
          },
          katexParam12,
        ),
        _katexN = katexValue45(
          {
            number: 0.35,
            unit: `ex`,
          },
          katexParam12,
        ),
        katexValue385 = katexParam12.havingBaseSizing();
      katexValue380 /= katexValue385.sizeMultiplier;
      var katexValue386 =
        katexValue378.height + katexValue378.depth + katexValue384 + _katexN;
      katexValue378.style.paddingLeft = katexValue46(
        katexValue386 / 2 + katexValue384,
      );
      var katexValue387 = Math.floor(1e3 * katexValue386 * katexValue380);
      ((katexValue381 = katexValue109(
        [`hide-tail`],
        [
          new katexValue57(
            [new katexValue58(`phase`, katexValue37(katexValue387))],
            {
              width: `400em`,
              height: katexValue46(katexValue387 / 1e3),
              viewBox: `0 0 400000 ` + katexValue387,
              preserveAspectRatio: `xMinYMin slice`,
            },
          ),
        ],
        katexParam12,
      )),
        (katexValue381.style.height = katexValue46(katexValue386)),
        (katexValue382 = katexValue378.depth + katexValue384 + _katexN));
    } else {
      /cancel/.test(katexValue379)
        ? katexValue383 || katexValue378.classes.push(`cancel-pad`)
        : katexValue379 === `angl`
          ? katexValue378.classes.push(`anglpad`)
          : katexValue378.classes.push(`boxpad`);
      var katexValue388 = 0,
        katexValue389 = 0,
        katexValue390 = 0;
      (/box/.test(katexValue379)
        ? ((katexValue390 = Math.max(
            katexParam12.fontMetrics().fboxrule,
            katexParam12.minRuleThickness,
          )),
          (katexValue388 =
            katexParam12.fontMetrics().fboxsep +
            (katexValue379 === `colorbox` ? 0 : katexValue390)),
          (katexValue389 = katexValue388))
        : katexValue379 === `angl`
          ? ((katexValue390 = Math.max(
              katexParam12.fontMetrics().defaultRuleThickness,
              katexParam12.minRuleThickness,
            )),
            (katexValue388 = 4 * katexValue390),
            (katexValue389 = Math.max(0, 0.25 - katexValue378.depth)))
          : ((katexValue388 = katexValue383 ? 0.2 : 0),
            (katexValue389 = katexValue388)),
        (katexValue381 = katexValue164(
          katexValue378,
          katexValue379,
          katexValue388,
          katexValue389,
          katexParam12,
        )),
        /fbox|boxed|fcolorbox/.test(katexValue379)
          ? ((katexValue381.style.borderStyle = `solid`),
            (katexValue381.style.borderWidth = katexValue46(katexValue390)))
          : katexValue379 === `angl` &&
            katexValue390 !== 0.049 &&
            ((katexValue381.style.borderTopWidth = katexValue46(katexValue390)),
            (katexValue381.style.borderRightWidth =
              katexValue46(katexValue390))),
        (katexValue382 = katexValue378.depth + katexValue389),
        _katexT.backgroundColor &&
          ((katexValue381.style.backgroundColor = _katexT.backgroundColor),
          _katexT.borderColor &&
            (katexValue381.style.borderColor = _katexT.borderColor)));
    }
    var katexValue391;
    if (_katexT.backgroundColor)
      katexValue391 = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue381,
            shift: katexValue382,
          },
          {
            type: `elem`,
            elem: katexValue378,
            shift: 0,
          },
        ],
      });
    else {
      var katexValue392 = /cancel|phase/.test(katexValue379)
        ? [`svg-align`]
        : [];
      katexValue391 = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue378,
            shift: 0,
          },
          {
            type: `elem`,
            elem: katexValue381,
            shift: katexValue382,
            wrapperClasses: katexValue392,
          },
        ],
      });
    }
    return (
      /cancel/.test(katexValue379) &&
        ((katexValue391.height = katexValue378.height),
        (katexValue391.depth = katexValue378.depth)),
      /cancel/.test(katexValue379) && !katexValue383
        ? katexValue108([`mord`, `cancel-lap`], [katexValue391], katexParam12)
        : katexValue108([`mord`], [katexValue391], katexParam12)
    );
  },
  katexValue210 = (_katexT, katexParam31) => {
    var katexValue550 = 0,
      katexValue551 = new katexValue141(
        _katexT.label.includes(`colorbox`) ? `mpadded` : `menclose`,
        [katexValue151(_katexT.body, katexParam31)],
      );
    switch (_katexT.label) {
      case `\\cancel`:
        katexValue551.setAttribute(`notation`, `updiagonalstrike`);
        break;
      case `\\bcancel`:
        katexValue551.setAttribute(`notation`, `downdiagonalstrike`);
        break;
      case `\\phase`:
        katexValue551.setAttribute(`notation`, `phasorangle`);
        break;
      case `\\sout`:
        katexValue551.setAttribute(`notation`, `horizontalstrike`);
        break;
      case `\\fbox`:
        katexValue551.setAttribute(`notation`, `box`);
        break;
      case `\\angl`:
        katexValue551.setAttribute(`notation`, `actuarial`);
        break;
      case `\\fcolorbox`:
      case `\\colorbox`:
        if (
          ((katexValue550 =
            katexParam31.fontMetrics().fboxsep *
            katexParam31.fontMetrics().ptPerEm),
          katexValue551.setAttribute(`width`, `+` + 2 * katexValue550 + `pt`),
          katexValue551.setAttribute(`height`, `+` + 2 * katexValue550 + `pt`),
          katexValue551.setAttribute(`lspace`, katexValue550 + `pt`),
          katexValue551.setAttribute(`voffset`, katexValue550 + `pt`),
          _katexT.label === `\\fcolorbox`)
        ) {
          var katexValue552 = Math.max(
            katexParam31.fontMetrics().fboxrule,
            katexParam31.minRuleThickness,
          );
          katexValue551.setAttribute(
            `style`,
            `border: ` +
              katexValue46(katexValue552) +
              ` solid ` +
              _katexT.borderColor,
          );
        }
        break;
      case `\\xcancel`:
        katexValue551.setAttribute(
          `notation`,
          `updiagonalstrike downdiagonalstrike`,
        );
        break;
    }
    return (
      _katexT.backgroundColor &&
        katexValue551.setAttribute(`mathbackground`, _katexT.backgroundColor),
      katexValue551
    );
  };
(katexI({
  type: `enclose`,
  names: [`\\colorbox`],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: [`color`, `text`],
  },
  handler(_katexT, katexParam286, katexParam287) {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1178 = katexHelper13(katexParam286[0], `color-token`).color,
      katexValue1179 = katexParam286[1];
    return {
      type: `enclose`,
      mode: parser.mode,
      label: funcName,
      backgroundColor: katexValue1178,
      body: katexValue1179,
    };
  },
  htmlBuilder: katexValue209,
  mathmlBuilder: katexValue210,
}),
  katexI({
    type: `enclose`,
    names: [`\\fcolorbox`],
    props: {
      numArgs: 3,
      allowedInText: !0,
      argTypes: [`color`, `color`, `text`],
    },
    handler(_katexT, katexParam224, katexParam225) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1106 = katexHelper13(katexParam224[0], `color-token`).color,
        katexValue1107 = katexHelper13(katexParam224[1], `color-token`).color,
        katexValue1108 = katexParam224[2];
      return {
        type: `enclose`,
        mode: parser.mode,
        label: funcName,
        backgroundColor: katexValue1107,
        borderColor: katexValue1106,
        body: katexValue1108,
      };
    },
    htmlBuilder: katexValue209,
    mathmlBuilder: katexValue210,
  }),
  katexI({
    type: `enclose`,
    names: [`\\fbox`],
    props: {
      numArgs: 1,
      argTypes: [`hbox`],
      allowedInText: !0,
    },
    handler(_katexT, katexParam359) {
      var { parser: parser } = _katexT;
      return {
        type: `enclose`,
        mode: parser.mode,
        label: `\\fbox`,
        body: katexParam359[0],
      };
    },
  }),
  katexI({
    type: `enclose`,
    names: [`\\cancel`, `\\bcancel`, `\\xcancel`, `\\phase`],
    props: {
      numArgs: 1,
    },
    handler(_katexT, katexParam346) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1241 = katexParam346[0];
      return {
        type: `enclose`,
        mode: parser.mode,
        label: funcName,
        body: katexValue1241,
      };
    },
    htmlBuilder: katexValue209,
    mathmlBuilder: katexValue210,
  }),
  katexI({
    type: `enclose`,
    names: [`\\sout`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler(_katexT, katexParam222) {
      var { parser: parser, funcName: funcName } = _katexT;
      parser.mode === `math` &&
        parser.settings.reportNonstrict(
          `mathVsSout`,
          `LaTeX's \\sout works only in text mode`,
        );
      var katexValue1101 = katexParam222[0];
      return {
        type: `enclose`,
        mode: parser.mode,
        label: funcName,
        body: katexValue1101,
      };
    },
    htmlBuilder: katexValue209,
    mathmlBuilder: katexValue210,
  }),
  katexI({
    type: `enclose`,
    names: [`\\angl`],
    props: {
      numArgs: 1,
      argTypes: [`hbox`],
      allowedInText: !1,
    },
    handler(_katexT, katexParam360) {
      var { parser: parser } = _katexT;
      return {
        type: `enclose`,
        mode: parser.mode,
        label: `\\angl`,
        body: katexParam360[0],
      };
    },
  }));
var katexValue211 = {};
function katexHelper22(_katexT) {
  for (
    var {
        type: type,
        names: names,
        props: props,
        handler: handler,
        htmlBuilder: htmlBuilder,
        mathmlBuilder: mathmlBuilder,
      } = _katexT,
      katexValue1076 = {
        type: type,
        numArgs: props.numArgs || 0,
        allowedInText: !1,
        numOptionalArgs: 0,
        handler: handler,
      },
      katexValue1077 = 0;
    katexValue1077 < names.length;
    ++katexValue1077
  )
    katexValue211[names[katexValue1077]] = katexValue1076;
  (htmlBuilder && (katexValue127[type] = htmlBuilder),
    mathmlBuilder && (katexValue128[type] = mathmlBuilder));
}
var katexValue212 = {};
function katexA(_katexT, katexParam463) {
  katexValue212[_katexT] = katexParam463;
}
var katexValue213 = class _katexT {
    constructor(__katexT, katexParam413, katexParam414) {
      ((this.lexer = __katexT),
        (this.start = katexParam413),
        (this.end = katexParam414));
    }
    static range(katexParam306, katexParam307) {
      return katexParam307
        ? !katexParam306 ||
          !katexParam306.loc ||
          !katexParam307.loc ||
          katexParam306.loc.lexer !== katexParam307.loc.lexer
          ? null
          : new _katexT(
              katexParam306.loc.lexer,
              katexParam306.loc.start,
              katexParam307.loc.end,
            )
        : katexParam306 && katexParam306.loc;
    }
  },
  katexValue214 = class _katexT {
    constructor(__katexT, katexParam444) {
      ((this.text = __katexT), (this.loc = katexParam444));
    }
    range(katexParam437, katexParam438) {
      return new _katexT(
        katexParam438,
        katexValue213.range(this, katexParam437),
      );
    }
  };
function katexHelper23(_katexT) {
  var katexValue1038 = [];
  _katexT.consumeSpaces();
  var katexValue1039 = _katexT.fetch().text;
  for (
    katexValue1039 === `\\relax` &&
    (_katexT.consume(),
    _katexT.consumeSpaces(),
    (katexValue1039 = _katexT.fetch().text));
    katexValue1039 === `\\hline` || katexValue1039 === `\\hdashline`;

  )
    (_katexT.consume(),
      katexValue1038.push(katexValue1039 === `\\hdashline`),
      _katexT.consumeSpaces(),
      (katexValue1039 = _katexT.fetch().text));
  return katexValue1038;
}
var katexValue215 = (katexParam343) => {
    if (!katexParam343.parser.settings.displayMode)
      throw new katexT(
        `{` + katexParam343.envName + `} can be used only in display mode.`,
      );
  },
  katexValue216 = new Set([`gather`, `gather*`]);
function katexHelper24(_katexT) {
  if (!_katexT.includes(`ed`)) return !_katexT.includes(`*`);
}
function katexHelper25(katexParam9, katexParam10, katexParam11) {
  var {
    hskipBeforeAndAfter: hskipBeforeAndAfter,
    addJot: addJot,
    cols: cols,
    arraystretch: arraystretch,
    colSeparationType: colSeparationType,
    autoTag: autoTag,
    singleRow: _katexN,
    emptySingleRow: emptySingleRow,
    maxNumCols: maxNumCols,
    leqno: leqno,
  } = katexParam10;
  if (
    (katexParam9.gullet.beginGroup(),
    _katexN || katexParam9.gullet.macros.set(`\\cr`, `\\\\\\relax`),
    !arraystretch)
  ) {
    var katexValue368 = katexParam9.gullet.expandMacroAsText(`\\arraystretch`);
    if (katexValue368 == null) arraystretch = 1;
    else if (
      ((arraystretch = parseFloat(katexValue368)),
      !arraystretch || arraystretch < 0)
    )
      throw new katexT(`Invalid \\arraystretch: ` + katexValue368);
  }
  katexParam9.gullet.beginGroup();
  var katexValue369 = [],
    katexValue370 = [katexValue369],
    katexValue371 = [],
    katexValue372 = [],
    katexValue373 = autoTag == null ? void 0 : [];
  function katexHelper29() {
    autoTag && katexParam9.gullet.macros.set(`\\@eqnsw`, `1`, !0);
  }
  function katexHelper30() {
    katexValue373 &&
      (katexParam9.gullet.macros.get(`\\df@tag`)
        ? (katexValue373.push(
            katexParam9.subparse([new katexValue214(`\\df@tag`)]),
          ),
          katexParam9.gullet.macros.set(`\\df@tag`, void 0, !0))
        : katexValue373.push(
            !!autoTag && katexParam9.gullet.macros.get(`\\@eqnsw`) === `1`,
          ));
  }
  for (katexHelper29(), katexValue372.push(katexHelper23(katexParam9)); ; ) {
    var katexValue374 = katexParam9.parseExpression(
      !1,
      _katexN ? `\\end` : `\\\\`,
    );
    (katexParam9.gullet.endGroup(), katexParam9.gullet.beginGroup());
    var katexValue375 = {
      type: `ordgroup`,
      mode: katexParam9.mode,
      body: katexValue374,
    };
    (katexParam11 &&
      (katexValue375 = {
        type: `styling`,
        mode: katexParam9.mode,
        style: katexParam11,
        body: [katexValue375],
      }),
      katexValue369.push(katexValue375));
    var katexValue376 = katexParam9.fetch().text;
    if (katexValue376 === `&`) {
      if (maxNumCols && katexValue369.length === maxNumCols) {
        if (_katexN || colSeparationType)
          throw new katexT(`Too many tab characters: &`, katexParam9.nextToken);
        katexParam9.settings.reportNonstrict(
          `textEnv`,
          `Too few columns specified in the {array} column argument.`,
        );
      }
      katexParam9.consume();
    } else if (katexValue376 === `\\end`) {
      (katexHelper30(),
        katexValue369.length === 1 &&
          katexValue375.type === `styling` &&
          katexValue375.body.length === 1 &&
          katexValue375.body[0].type === `ordgroup` &&
          katexValue375.body[0].body.length === 0 &&
          (katexValue370.length > 1 || !emptySingleRow) &&
          katexValue370.pop(),
        katexValue372.length < katexValue370.length + 1 &&
          katexValue372.push([]));
      break;
    } else if (katexValue376 === `\\\\`) {
      katexParam9.consume();
      var katexValue377 = void 0;
      (katexParam9.gullet.future().text !== ` ` &&
        (katexValue377 = katexParam9.parseSizeGroup(!0)),
        katexValue371.push(katexValue377 ? katexValue377.value : null),
        katexHelper30(),
        katexValue372.push(katexHelper23(katexParam9)),
        (katexValue369 = []),
        katexValue370.push(katexValue369),
        katexHelper29());
    } else
      throw new katexT(
        `Expected & or \\\\ or \\cr or \\end`,
        katexParam9.nextToken,
      );
  }
  return (
    katexParam9.gullet.endGroup(),
    katexParam9.gullet.endGroup(),
    {
      type: `array`,
      mode: katexParam9.mode,
      addJot: addJot,
      arraystretch: arraystretch,
      body: katexValue370,
      cols: cols,
      rowGaps: katexValue371,
      hskipBeforeAndAfter: hskipBeforeAndAfter,
      hLinesBeforeRow: katexValue372,
      colSeparationType: colSeparationType,
      tags: katexValue373,
      leqno: leqno,
    }
  );
}
function katexHelper26(_katexT) {
  return _katexT.slice(0, 1) === `d` ? `display` : `text`;
}
var katexValue217 = function (katexParam1, katexParam2) {
    var katexValue276,
      katexValue277,
      katexValue278 = katexParam1.body.length,
      katexValue279 = katexParam1.hLinesBeforeRow,
      katexValue280 = 0,
      katexValue281 = Array(katexValue278),
      katexValue282 = [],
      _katexN = Math.max(
        katexParam2.fontMetrics().arrayRuleWidth,
        katexParam2.minRuleThickness,
      ),
      katexValue283 = 1 / katexParam2.fontMetrics().ptPerEm,
      katexValue284 = 5 * katexValue283;
    katexParam1.colSeparationType &&
      katexParam1.colSeparationType === `small` &&
      (katexValue284 =
        0.2778 *
        (katexParam2.havingStyle(katexValue27.SCRIPT).sizeMultiplier /
          katexParam2.sizeMultiplier));
    var katexValue285 =
        katexParam1.colSeparationType === `CD`
          ? katexValue45(
              {
                number: 3,
                unit: `ex`,
              },
              katexParam2,
            )
          : 12 * katexValue283,
      katexValue286 = 3 * katexValue283,
      katexValue287 = katexParam1.arraystretch * katexValue285,
      katexValue288 = 0.7 * katexValue287,
      katexValue289 = 0.3 * katexValue287,
      katexValue290 = 0;
    function katexHelper28(_katexT) {
      for (
        var katexValue1258 = 0;
        katexValue1258 < _katexT.length;
        ++katexValue1258
      )
        (katexValue1258 > 0 && (katexValue290 += 0.25),
          katexValue282.push({
            pos: katexValue290,
            isDashed: _katexT[katexValue1258],
          }));
    }
    for (
      katexHelper28(katexValue279[0]), katexValue276 = 0;
      katexValue276 < katexParam1.body.length;
      ++katexValue276
    ) {
      var katexValue291 = katexParam1.body[katexValue276],
        katexValue292 = katexValue288,
        katexValue293 = katexValue289;
      katexValue280 < katexValue291.length &&
        (katexValue280 = katexValue291.length);
      var katexValue294 = Array(katexValue291.length);
      for (
        katexValue277 = 0;
        katexValue277 < katexValue291.length;
        ++katexValue277
      ) {
        var katexValue295 = katexValue140(
          katexValue291[katexValue277],
          katexParam2,
        );
        (katexValue293 < katexValue295.depth &&
          (katexValue293 = katexValue295.depth),
          katexValue292 < katexValue295.height &&
            (katexValue292 = katexValue295.height),
          (katexValue294[katexValue277] = katexValue295));
      }
      var katexValue296 = katexParam1.rowGaps[katexValue276],
        katexValue297 = 0;
      (katexValue296 &&
        ((katexValue297 = katexValue45(katexValue296, katexParam2)),
        katexValue297 > 0 &&
          ((katexValue297 += katexValue289),
          katexValue293 < katexValue297 && (katexValue293 = katexValue297),
          (katexValue297 = 0))),
        katexParam1.addJot &&
          katexValue276 < katexParam1.body.length - 1 &&
          (katexValue293 += katexValue286),
        (katexValue294.height = katexValue292),
        (katexValue294.depth = katexValue293),
        (katexValue290 += katexValue292),
        (katexValue294.pos = katexValue290),
        (katexValue290 += katexValue293 + katexValue297),
        (katexValue281[katexValue276] = katexValue294),
        katexHelper28(katexValue279[katexValue276 + 1]));
    }
    var katexValue298 =
        katexValue290 / 2 + katexParam2.fontMetrics().axisHeight,
      katexValue299 = katexParam1.cols || [],
      katexValue300 = [],
      katexValue301,
      katexValue302,
      katexValue303 = [];
    if (katexParam1.tags && katexParam1.tags.some((_katexT) => _katexT))
      for (katexValue276 = 0; katexValue276 < katexValue278; ++katexValue276) {
        var katexValue304 = katexValue281[katexValue276],
          katexValue305 = katexValue304.pos - katexValue298,
          katexValue306 = katexParam1.tags[katexValue276],
          katexValue307 = void 0;
        ((katexValue307 =
          katexValue306 === !0
            ? katexValue108([`eqn-num`], [], katexParam2)
            : katexValue306 === !1
              ? katexValue108([], [], katexParam2)
              : katexValue108(
                  [],
                  katexValue135(katexValue306, katexParam2, !0),
                  katexParam2,
                )),
          (katexValue307.depth = katexValue304.depth),
          (katexValue307.height = katexValue304.height),
          katexValue303.push({
            type: `elem`,
            elem: katexValue307,
            shift: katexValue305,
          }));
      }
    for (
      katexValue277 = 0, katexValue302 = 0;
      katexValue277 < katexValue280 || katexValue302 < katexValue299.length;
      ++katexValue277, ++katexValue302
    ) {
      for (
        var katexValue308 = katexValue299[katexValue302], katexValue309 = !0;
        (katexValue310 = katexValue308)?.type === `separator`;

      ) {
        var katexValue310;
        if (
          (katexValue309 ||
            ((katexValue301 = katexValue108([`arraycolsep`], [])),
            (katexValue301.style.width = katexValue46(
              katexParam2.fontMetrics().doubleRuleSep,
            )),
            katexValue300.push(katexValue301)),
          katexValue308.separator === `|` || katexValue308.separator === `:`)
        ) {
          var katexValue311 =
              katexValue308.separator === `|` ? `solid` : `dashed`,
            katexValue312 = katexValue108(
              [`vertical-separator`],
              [],
              katexParam2,
            );
          ((katexValue312.style.height = katexValue46(katexValue290)),
            (katexValue312.style.borderRightWidth = katexValue46(_katexN)),
            (katexValue312.style.borderRightStyle = katexValue311),
            (katexValue312.style.margin = `0 ` + katexValue46(-_katexN / 2)));
          var katexValue313 = katexValue290 - katexValue298;
          (katexValue313 &&
            (katexValue312.style.verticalAlign = katexValue46(-katexValue313)),
            katexValue300.push(katexValue312));
        } else
          throw new katexT(
            `Invalid separator type: ` + katexValue308.separator,
          );
        (katexValue302++,
          (katexValue308 = katexValue299[katexValue302]),
          (katexValue309 = !1));
      }
      if (!(katexValue277 >= katexValue280)) {
        var _e = void 0;
        (katexValue277 > 0 || katexParam1.hskipBeforeAndAfter) &&
          ((_e = katexValue308?.pregap ?? katexValue284),
          _e !== 0 &&
            ((katexValue301 = katexValue108([`arraycolsep`], [])),
            (katexValue301.style.width = katexValue46(_e)),
            katexValue300.push(katexValue301)));
        var katexValue314 = [];
        for (
          katexValue276 = 0;
          katexValue276 < katexValue278;
          ++katexValue276
        ) {
          var katexValue315 = katexValue281[katexValue276],
            be = katexValue315[katexValue277];
          if (be) {
            var katexValue316 = katexValue315.pos - katexValue298;
            ((be.depth = katexValue315.depth),
              (be.height = katexValue315.height),
              katexValue314.push({
                type: `elem`,
                elem: be,
                shift: katexValue316,
              }));
          }
        }
        var katexValue317 = katexValue115({
            positionType: `individualShift`,
            children: katexValue314,
          }),
          katexValue318 = katexValue108(
            [`col-align-` + (katexValue308?.align || `c`)],
            [katexValue317],
          );
        (katexValue300.push(katexValue318),
          (katexValue277 < katexValue280 - 1 ||
            katexParam1.hskipBeforeAndAfter) &&
            ((_e = katexValue308?.postgap ?? katexValue284),
            _e !== 0 &&
              ((katexValue301 = katexValue108([`arraycolsep`], [])),
              (katexValue301.style.width = katexValue46(_e)),
              katexValue300.push(katexValue301))));
      }
    }
    var katexValue319 = katexValue108([`mtable`], katexValue300);
    if (katexValue282.length > 0) {
      for (
        var katexValue320 = katexValue110(`hline`, katexParam2, _katexN),
          katexValue321 = katexValue110(`hdashline`, katexParam2, _katexN),
          katexValue322 = [
            {
              type: `elem`,
              elem: katexValue319,
              shift: 0,
            },
          ];
        katexValue282.length > 0;

      ) {
        var katexValue323 = katexValue282.pop(),
          katexValue324 = katexValue323.pos - katexValue298;
        katexValue323.isDashed
          ? katexValue322.push({
              type: `elem`,
              elem: katexValue321,
              shift: katexValue324,
            })
          : katexValue322.push({
              type: `elem`,
              elem: katexValue320,
              shift: katexValue324,
            });
      }
      katexValue319 = katexValue115({
        positionType: `individualShift`,
        children: katexValue322,
      });
    }
    if (katexValue303.length === 0)
      return katexValue108([`mord`], [katexValue319], katexParam2);
    var katexValue325 = katexValue108(
      [`tag`],
      [
        katexValue115({
          positionType: `individualShift`,
          children: katexValue303,
        }),
      ],
      katexParam2,
    );
    return katexValue112([katexValue319, katexValue325]);
  },
  katexValue218 = {
    c: `center `,
    l: `left `,
    r: `right `,
  },
  katexValue219 = function (_katexT, katexParam13) {
    for (
      var katexValue393 = [],
        katexValue394 = new katexValue141(`mtd`, [], [`mtr-glue`]),
        katexValue395 = new katexValue141(`mtd`, [], [`mml-eqn-num`]),
        katexValue396 = 0;
      katexValue396 < _katexT.body.length;
      katexValue396++
    ) {
      for (
        var katexValue397 = _katexT.body[katexValue396],
          katexValue398 = [],
          katexValue399 = 0;
        katexValue399 < katexValue397.length;
        katexValue399++
      )
        katexValue398.push(
          new katexValue141(`mtd`, [
            katexValue151(katexValue397[katexValue399], katexParam13),
          ]),
        );
      (_katexT.tags &&
        _katexT.tags[katexValue396] &&
        (katexValue398.unshift(katexValue394),
        katexValue398.push(katexValue394),
        _katexT.leqno
          ? katexValue398.unshift(katexValue395)
          : katexValue398.push(katexValue395)),
        katexValue393.push(new katexValue141(`mtr`, katexValue398)));
    }
    var katexValue400 = new katexValue141(`mtable`, katexValue393),
      _katexN =
        _katexT.arraystretch === 0.5
          ? 0.1
          : 0.16 + _katexT.arraystretch - 1 + (_katexT.addJot ? 0.09 : 0);
    katexValue400.setAttribute(`rowspacing`, katexValue46(_katexN));
    var katexValue401 = ``,
      katexValue402 = ``;
    if (_katexT.cols && _katexT.cols.length > 0) {
      var katexValue403 = _katexT.cols,
        katexValue404 = ``,
        katexValue405 = !1,
        katexValue406 = 0,
        katexValue407 = katexValue403.length;
      (katexValue403[0].type === `separator` &&
        ((katexValue401 += `top `), (katexValue406 = 1)),
        katexValue403[katexValue403.length - 1].type === `separator` &&
          ((katexValue401 += `bottom `), --katexValue407));
      for (
        var katexValue408 = katexValue406;
        katexValue408 < katexValue407;
        katexValue408++
      ) {
        var katexValue409 = katexValue403[katexValue408];
        katexValue409.type === `align`
          ? ((katexValue402 += katexValue218[katexValue409.align]),
            katexValue405 && (katexValue404 += `none `),
            (katexValue405 = !0))
          : katexValue409.type === `separator` &&
            (katexValue405 &&=
              ((katexValue404 +=
                katexValue409.separator === `|` ? `solid ` : `dashed `),
              !1));
      }
      (katexValue400.setAttribute(`columnalign`, katexValue402.trim()),
        /[sd]/.test(katexValue404) &&
          katexValue400.setAttribute(`columnlines`, katexValue404.trim()));
    }
    if (_katexT.colSeparationType === `align`) {
      for (
        var katexValue410 = _katexT.cols || [],
          katexValue411 = ``,
          katexValue412 = 1;
        katexValue412 < katexValue410.length;
        katexValue412++
      )
        katexValue411 += katexValue412 % 2 ? `0em ` : `1em `;
      katexValue400.setAttribute(`columnspacing`, katexValue411.trim());
    } else
      _katexT.colSeparationType === `alignat` ||
      _katexT.colSeparationType === `gather`
        ? katexValue400.setAttribute(`columnspacing`, `0em`)
        : _katexT.colSeparationType === `small`
          ? katexValue400.setAttribute(`columnspacing`, `0.2778em`)
          : _katexT.colSeparationType === `CD`
            ? katexValue400.setAttribute(`columnspacing`, `0.5em`)
            : katexValue400.setAttribute(`columnspacing`, `1em`);
    var katexValue413 = ``,
      katexValue414 = _katexT.hLinesBeforeRow;
    ((katexValue401 += katexValue414[0].length > 0 ? `left ` : ``),
      (katexValue401 +=
        katexValue414[katexValue414.length - 1].length > 0 ? `right ` : ``));
    for (
      var katexValue415 = 1;
      katexValue415 < katexValue414.length - 1;
      katexValue415++
    )
      katexValue413 +=
        katexValue414[katexValue415].length === 0
          ? `none `
          : katexValue414[katexValue415][0]
            ? `dashed `
            : `solid `;
    return (
      /[sd]/.test(katexValue413) &&
        katexValue400.setAttribute(`rowlines`, katexValue413.trim()),
      katexValue401 !== `` &&
        ((katexValue400 = new katexValue141(`menclose`, [katexValue400])),
        katexValue400.setAttribute(`notation`, katexValue401.trim())),
      _katexT.arraystretch &&
        _katexT.arraystretch < 1 &&
        ((katexValue400 = new katexValue141(`mstyle`, [katexValue400])),
        katexValue400.setAttribute(`scriptlevel`, `1`)),
      katexValue400
    );
  },
  katexValue220 = function (katexParam35, katexParam36) {
    katexParam35.envName.includes(`ed`) || katexValue215(katexParam35);
    var katexValue573 = [],
      katexValue574 = katexParam35.envName.includes(`at`) ? `alignat` : `align`,
      katexValue575 = katexParam35.envName === `split`,
      katexValue576 = katexHelper25(
        katexParam35.parser,
        {
          cols: katexValue573,
          addJot: !0,
          autoTag: katexValue575 ? void 0 : katexHelper24(katexParam35.envName),
          emptySingleRow: !0,
          colSeparationType: katexValue574,
          maxNumCols: katexValue575 ? 2 : void 0,
          leqno: katexParam35.parser.settings.leqno,
        },
        `display`,
      ),
      katexValue577 = 0,
      katexValue578 = 0,
      katexValue579 = {
        type: `ordgroup`,
        mode: katexParam35.mode,
        body: [],
      };
    if (katexParam36[0] && katexParam36[0].type === `ordgroup`) {
      for (
        var _katexN = ``, katexValue580 = 0;
        katexValue580 < katexParam36[0].body.length;
        katexValue580++
      ) {
        var katexValue581 = katexHelper13(
          katexParam36[0].body[katexValue580],
          `textord`,
        );
        _katexN += katexValue581.text;
      }
      ((katexValue577 = Number(_katexN)), (katexValue578 = katexValue577 * 2));
    }
    var katexValue582 = !katexValue578;
    katexValue576.body.forEach(function (item) {
      for (
        var katexValue1060 = 1;
        katexValue1060 < item.length;
        katexValue1060 += 2
      )
        katexHelper13(
          katexHelper13(item[katexValue1060], `styling`).body[0],
          `ordgroup`,
        ).body.unshift(katexValue579);
      if (katexValue582)
        katexValue578 < item.length && (katexValue578 = item.length);
      else {
        var katexValue1061 = item.length / 2;
        if (katexValue577 < katexValue1061)
          throw new katexT(
            `Too many math in a row: ` +
              (`expected ` + katexValue577 + `, but got ` + katexValue1061),
            item[0],
          );
      }
    });
    for (
      var katexValue583 = 0;
      katexValue583 < katexValue578;
      ++katexValue583
    ) {
      var katexValue584 = `r`,
        katexValue585 = 0;
      (katexValue583 % 2 == 1
        ? (katexValue584 = `l`)
        : katexValue583 > 0 && katexValue582 && (katexValue585 = 1),
        (katexValue573[katexValue583] = {
          type: `align`,
          align: katexValue584,
          pregap: katexValue585,
          postgap: 0,
        }));
    }
    return (
      (katexValue576.colSeparationType = katexValue582 ? `align` : `alignat`),
      katexValue576
    );
  };
(katexHelper22({
  type: `array`,
  names: [`array`, `darray`],
  props: {
    numArgs: 1,
  },
  handler(katexParam121, katexParam122) {
    var katexValue890 = (
        katexHelper15(katexParam122[0])
          ? [katexParam122[0]]
          : katexHelper13(katexParam122[0], `ordgroup`).body
      ).map(function (item) {
        var katexValue1068 = katexHelper14(item).text;
        if (`lcr`.includes(katexValue1068))
          return {
            type: `align`,
            align: katexValue1068,
          };
        if (katexValue1068 === `|`)
          return {
            type: `separator`,
            separator: `|`,
          };
        if (katexValue1068 === `:`)
          return {
            type: `separator`,
            separator: `:`,
          };
        throw new katexT(`Unknown column alignment: ` + katexValue1068, item);
      }),
      katexValue891 = {
        cols: katexValue890,
        hskipBeforeAndAfter: !0,
        maxNumCols: katexValue890.length,
      };
    return katexHelper25(
      katexParam121.parser,
      katexValue891,
      katexHelper26(katexParam121.envName),
    );
  },
  htmlBuilder: katexValue217,
  mathmlBuilder: katexValue219,
}),
  katexHelper22({
    type: `array`,
    names: [
      `matrix`,
      `pmatrix`,
      `bmatrix`,
      `Bmatrix`,
      `vmatrix`,
      `Vmatrix`,
      `matrix*`,
      `pmatrix*`,
      `bmatrix*`,
      `Bmatrix*`,
      `vmatrix*`,
      `Vmatrix*`,
    ],
    props: {
      numArgs: 0,
    },
    handler(katexParam44) {
      var katexValue655 = {
          matrix: null,
          pmatrix: [`(`, `)`],
          bmatrix: [`[`, `]`],
          Bmatrix: [`\\{`, `\\}`],
          vmatrix: [`|`, `|`],
          Vmatrix: [`\\Vert`, `\\Vert`],
        }[katexParam44.envName.replace(`*`, ``)],
        katexValue656 = `c`,
        katexValue657 = {
          hskipBeforeAndAfter: !1,
          cols: [
            {
              type: `align`,
              align: katexValue656,
            },
          ],
        };
      if (
        katexParam44.envName.charAt(katexParam44.envName.length - 1) === `*`
      ) {
        var katexValue658 = katexParam44.parser;
        if (
          (katexValue658.consumeSpaces(), katexValue658.fetch().text === `[`)
        ) {
          if (
            (katexValue658.consume(),
            katexValue658.consumeSpaces(),
            (katexValue656 = katexValue658.fetch().text),
            !`lcr`.includes(katexValue656))
          )
            throw new katexT(`Expected l or c or r`, katexValue658.nextToken);
          (katexValue658.consume(),
            katexValue658.consumeSpaces(),
            katexValue658.expect(`]`),
            katexValue658.consume(),
            (katexValue657.cols = [
              {
                type: `align`,
                align: katexValue656,
              },
            ]));
        }
      }
      var katexValue659 = katexHelper25(
          katexParam44.parser,
          katexValue657,
          katexHelper26(katexParam44.envName),
        ),
        katexValue660 = Math.max(
          0,
          ...katexValue659.body.map((_katexT) => _katexT.length),
        );
      return (
        (katexValue659.cols = Array(katexValue660).fill({
          type: `align`,
          align: katexValue656,
        })),
        katexValue655
          ? {
              type: `leftright`,
              mode: katexParam44.mode,
              body: [katexValue659],
              left: katexValue655[0],
              right: katexValue655[1],
              rightColor: void 0,
            }
          : katexValue659
      );
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`smallmatrix`],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      var katexValue1245 = katexHelper25(
        _katexT.parser,
        {
          arraystretch: 0.5,
        },
        `script`,
      );
      return ((katexValue1245.colSeparationType = `small`), katexValue1245);
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`subarray`],
    props: {
      numArgs: 1,
    },
    handler(katexParam104, katexParam105) {
      var katexValue842 = (
        katexHelper15(katexParam105[0])
          ? [katexParam105[0]]
          : katexHelper13(katexParam105[0], `ordgroup`).body
      ).map(function (item) {
        var katexValue1206 = katexHelper14(item).text;
        if (`lc`.includes(katexValue1206))
          return {
            type: `align`,
            align: katexValue1206,
          };
        throw new katexT(`Unknown column alignment: ` + katexValue1206, item);
      });
      if (katexValue842.length > 1)
        throw new katexT(`{subarray} can contain only one column`);
      var katexValue843 = {
          cols: katexValue842,
          hskipBeforeAndAfter: !1,
          arraystretch: 0.5,
        },
        katexValue844 = katexHelper25(
          katexParam104.parser,
          katexValue843,
          `script`,
        );
      if (katexValue844.body.length > 0 && katexValue844.body[0].length > 1)
        throw new katexT(`{subarray} can contain only one column`);
      return katexValue844;
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`cases`, `dcases`, `rcases`, `drcases`],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      var katexValue964 = katexHelper25(
        _katexT.parser,
        {
          arraystretch: 1.2,
          cols: [
            {
              type: `align`,
              align: `l`,
              pregap: 0,
              postgap: 1,
            },
            {
              type: `align`,
              align: `l`,
              pregap: 0,
              postgap: 0,
            },
          ],
        },
        katexHelper26(_katexT.envName),
      );
      return {
        type: `leftright`,
        mode: _katexT.mode,
        body: [katexValue964],
        left: _katexT.envName.includes(`r`) ? `.` : `\\{`,
        right: _katexT.envName.includes(`r`) ? `\\}` : `.`,
        rightColor: void 0,
      };
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`align`, `align*`, `aligned`, `split`],
    props: {
      numArgs: 0,
    },
    handler: katexValue220,
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`gathered`, `gather`, `gather*`],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      katexValue216.has(_katexT.envName) && katexValue215(_katexT);
      var katexValue1082 = {
        cols: [
          {
            type: `align`,
            align: `c`,
          },
        ],
        addJot: !0,
        colSeparationType: `gather`,
        autoTag: katexHelper24(_katexT.envName),
        emptySingleRow: !0,
        leqno: _katexT.parser.settings.leqno,
      };
      return katexHelper25(_katexT.parser, katexValue1082, `display`);
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`alignat`, `alignat*`, `alignedat`],
    props: {
      numArgs: 1,
    },
    handler: katexValue220,
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`equation`, `equation*`],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      katexValue215(_katexT);
      var katexValue1171 = {
        autoTag: katexHelper24(_katexT.envName),
        emptySingleRow: !0,
        singleRow: !0,
        maxNumCols: 1,
        leqno: _katexT.parser.settings.leqno,
      };
      return katexHelper25(_katexT.parser, katexValue1171, `display`);
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexHelper22({
    type: `array`,
    names: [`CD`],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      return (katexValue215(_katexT), katexHelper19(_katexT.parser));
    },
    htmlBuilder: katexValue217,
    mathmlBuilder: katexValue219,
  }),
  katexA(`\\nonumber`, `\\gdef\\@eqnsw{0}`),
  katexA(`\\notag`, `\\nonumber`),
  katexI({
    type: `text`,
    names: [`\\hline`, `\\hdashline`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      allowedInMath: !0,
    },
    handler(katexParam388, katexParam389) {
      throw new katexT(
        katexParam388.funcName + ` valid only within array environment`,
      );
    },
  }));
var katexValue221 = katexValue211;
katexI({
  type: `environment`,
  names: [`\\begin`, `\\end`],
  props: {
    numArgs: 1,
    argTypes: [`text`],
  },
  handler(katexParam62, katexParam63) {
    var { parser: parser, funcName: funcName } = katexParam62,
      katexValue709 = katexParam63[0];
    if (katexValue709.type !== `ordgroup`)
      throw new katexT(`Invalid environment name`, katexValue709);
    for (
      var katexValue710 = ``, katexValue711 = 0;
      katexValue711 < katexValue709.body.length;
      ++katexValue711
    )
      katexValue710 += katexHelper13(
        katexValue709.body[katexValue711],
        `textord`,
      ).text;
    if (funcName === `\\begin`) {
      if (!katexValue221.hasOwnProperty(katexValue710))
        throw new katexT(
          `No such environment: ` + katexValue710,
          katexValue709,
        );
      var katexValue712 = katexValue221[katexValue710],
        { args: args, optArgs: _katexN } = parser.parseArguments(
          `\\begin{` + katexValue710 + `}`,
          katexValue712,
        ),
        katexValue713 = {
          mode: parser.mode,
          envName: katexValue710,
          parser: parser,
        },
        katexValue714 = katexValue712.handler(katexValue713, args, _katexN);
      parser.expect(`\\end`, !1);
      var katexValue715 = parser.nextToken,
        katexValue716 = katexHelper13(parser.parseFunction(), `environment`);
      if (katexValue716.name !== katexValue710)
        throw new katexT(
          `Mismatch: \\begin{` +
            katexValue710 +
            `} matched by \\end{` +
            katexValue716.name +
            `}`,
          katexValue715,
        );
      return katexValue714;
    }
    return {
      type: `environment`,
      mode: parser.mode,
      name: katexValue710,
      nameGroup: katexValue709,
    };
  },
});
var katexValue222 = (_katexT, katexParam415) => {
    var katexValue1275 = _katexT.font,
      katexValue1276 = katexParam415.withFont(katexValue1275);
    return katexValue140(_katexT.body, katexValue1276);
  },
  katexValue223 = (_katexT, katexParam416) => {
    var katexValue1277 = _katexT.font,
      katexValue1278 = katexParam416.withFont(katexValue1277);
    return katexValue151(_katexT.body, katexValue1278);
  },
  katexValue224 = {
    "\\Bbb": `\\mathbb`,
    "\\bold": `\\mathbf`,
    "\\frak": `\\mathfrak`,
    "\\bm": `\\boldsymbol`,
  };
(katexI({
  type: `font`,
  names: [
    `\\mathrm`,
    `\\mathit`,
    `\\mathbf`,
    `\\mathnormal`,
    `\\mathsfit`,
    `\\mathbb`,
    `\\mathcal`,
    `\\mathfrak`,
    `\\mathscr`,
    `\\mathsf`,
    `\\mathtt`,
    `\\Bbb`,
    `\\bold`,
    `\\frak`,
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0,
  },
  handler: (_katexT, katexParam313) => {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1203 = katexValue129(katexParam313[0]),
      katexValue1204 = funcName;
    return (
      katexValue1204 in katexValue224 &&
        (katexValue1204 = katexValue224[katexValue1204]),
      {
        type: `font`,
        mode: parser.mode,
        font: katexValue1204.slice(1),
        body: katexValue1203,
      }
    );
  },
  htmlBuilder: katexValue222,
  mathmlBuilder: katexValue223,
}),
  katexI({
    type: `mclass`,
    names: [`\\boldsymbol`, `\\bm`],
    props: {
      numArgs: 1,
    },
    handler: (_katexT, katexParam282) => {
      var { parser: parser } = _katexT,
        katexValue1167 = katexParam282[0];
      return {
        type: `mclass`,
        mode: parser.mode,
        mclass: katexValue170(katexValue1167),
        body: [
          {
            type: `font`,
            mode: parser.mode,
            font: `boldsymbol`,
            body: katexValue1167,
          },
        ],
        isCharacterBox: katexValue8(katexValue1167),
      };
    },
  }),
  katexI({
    type: `font`,
    names: [`\\rm`, `\\sf`, `\\tt`, `\\bf`, `\\it`, `\\cal`],
    props: {
      numArgs: 0,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam234) => {
      var {
          parser: parser,
          funcName: funcName,
          breakOnTokenText: breakOnTokenText,
        } = _katexT,
        { mode: mode } = parser,
        katexValue1115 = parser.parseExpression(!0, breakOnTokenText);
      return {
        type: `font`,
        mode: mode,
        font: `math` + funcName.slice(1),
        body: {
          type: `ordgroup`,
          mode: parser.mode,
          body: katexValue1115,
        },
      };
    },
    htmlBuilder: katexValue222,
    mathmlBuilder: katexValue223,
  }));
var $r = (_katexT, katexParam14) => {
    var katexValue416 = katexParam14.style,
      katexValue417 = katexValue416.fracNum(),
      katexValue418 = katexValue416.fracDen(),
      katexValue419 = katexParam14.havingStyle(katexValue417),
      katexValue420 = katexValue140(_katexT.numer, katexValue419, katexParam14);
    if (_katexT.continued) {
      var katexValue421 = 8.5 / katexParam14.fontMetrics().ptPerEm,
        katexValue422 = 3.5 / katexParam14.fontMetrics().ptPerEm;
      ((katexValue420.height =
        katexValue420.height < katexValue421
          ? katexValue421
          : katexValue420.height),
        (katexValue420.depth =
          katexValue420.depth < katexValue422
            ? katexValue422
            : katexValue420.depth));
    }
    katexValue419 = katexParam14.havingStyle(katexValue418);
    var katexValue423 = katexValue140(
        _katexT.denom,
        katexValue419,
        katexParam14,
      ),
      _katexN,
      katexValue424,
      katexValue425;
    _katexT.hasBarLine
      ? (_katexT.barSize
          ? ((katexValue424 = katexValue45(_katexT.barSize, katexParam14)),
            (_katexN = katexValue110(`frac-line`, katexParam14, katexValue424)))
          : (_katexN = katexValue110(`frac-line`, katexParam14)),
        (katexValue424 = _katexN.height),
        (katexValue425 = _katexN.height))
      : ((_katexN = null),
        (katexValue424 = 0),
        (katexValue425 = katexParam14.fontMetrics().defaultRuleThickness));
    var katexValue426, katexValue427, katexValue428;
    katexValue416.size === katexValue27.DISPLAY.size
      ? ((katexValue426 = katexParam14.fontMetrics().num1),
        (katexValue427 =
          katexValue424 > 0 ? 3 * katexValue425 : 7 * katexValue425),
        (katexValue428 = katexParam14.fontMetrics().denom1))
      : (katexValue424 > 0
          ? ((katexValue426 = katexParam14.fontMetrics().num2),
            (katexValue427 = katexValue425))
          : ((katexValue426 = katexParam14.fontMetrics().num3),
            (katexValue427 = 3 * katexValue425)),
        (katexValue428 = katexParam14.fontMetrics().denom2));
    var katexValue429;
    if (_katexN) {
      var katexValue430 = katexParam14.fontMetrics().axisHeight;
      (katexValue426 -
        katexValue420.depth -
        (katexValue430 + 0.5 * katexValue424) <
        katexValue427 &&
        (katexValue426 +=
          katexValue427 -
          (katexValue426 -
            katexValue420.depth -
            (katexValue430 + 0.5 * katexValue424))),
        katexValue430 -
          0.5 * katexValue424 -
          (katexValue423.height - katexValue428) <
          katexValue427 &&
          (katexValue428 +=
            katexValue427 -
            (katexValue430 -
              0.5 * katexValue424 -
              (katexValue423.height - katexValue428))));
      var katexValue431 = -(katexValue430 - 0.5 * katexValue424);
      katexValue429 = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue423,
            shift: katexValue428,
          },
          {
            type: `elem`,
            elem: _katexN,
            shift: katexValue431,
          },
          {
            type: `elem`,
            elem: katexValue420,
            shift: -katexValue426,
          },
        ],
      });
    } else {
      var katexValue432 =
        katexValue426 -
        katexValue420.depth -
        (katexValue423.height - katexValue428);
      (katexValue432 < katexValue427 &&
        ((katexValue426 += 0.5 * (katexValue427 - katexValue432)),
        (katexValue428 += 0.5 * (katexValue427 - katexValue432))),
        (katexValue429 = katexValue115({
          positionType: `individualShift`,
          children: [
            {
              type: `elem`,
              elem: katexValue423,
              shift: katexValue428,
            },
            {
              type: `elem`,
              elem: katexValue420,
              shift: -katexValue426,
            },
          ],
        })));
    }
    ((katexValue419 = katexParam14.havingStyle(katexValue416)),
      (katexValue429.height *=
        katexValue419.sizeMultiplier / katexParam14.sizeMultiplier),
      (katexValue429.depth *=
        katexValue419.sizeMultiplier / katexParam14.sizeMultiplier));
    var katexValue433 =
        katexValue416.size === katexValue27.DISPLAY.size
          ? katexParam14.fontMetrics().delim1
          : katexValue416.size === katexValue27.SCRIPTSCRIPT.size
            ? katexParam14.havingStyle(katexValue27.SCRIPT).fontMetrics().delim2
            : katexParam14.fontMetrics().delim2,
      katexValue434 =
        _katexT.leftDelim == null
          ? katexValue139(katexParam14, [`mopen`])
          : katexValue205(
              _katexT.leftDelim,
              katexValue433,
              !0,
              katexParam14.havingStyle(katexValue416),
              _katexT.mode,
              [`mopen`],
            ),
      katexValue435 = _katexT.continued
        ? katexValue108([])
        : _katexT.rightDelim == null
          ? katexValue139(katexParam14, [`mclose`])
          : katexValue205(
              _katexT.rightDelim,
              katexValue433,
              !0,
              katexParam14.havingStyle(katexValue416),
              _katexT.mode,
              [`mclose`],
            );
    return katexValue108(
      [`mord`].concat(katexValue419.sizingClasses(katexParam14)),
      [katexValue434, katexValue108([`mfrac`], [katexValue429]), katexValue435],
      katexParam14,
    );
  },
  katexValue225 = (_katexT, katexParam79) => {
    var katexValue779 = new katexValue141(`mfrac`, [
      katexValue151(_katexT.numer, katexParam79),
      katexValue151(_katexT.denom, katexParam79),
    ]);
    if (!_katexT.hasBarLine) katexValue779.setAttribute(`linethickness`, `0px`);
    else if (_katexT.barSize) {
      var katexValue780 = katexValue45(_katexT.barSize, katexParam79);
      katexValue779.setAttribute(`linethickness`, katexValue46(katexValue780));
    }
    if (_katexT.leftDelim != null || _katexT.rightDelim != null) {
      var katexValue781 = [];
      if (_katexT.leftDelim != null) {
        var katexValue782 = new katexValue141(`mo`, [
          new katexValue142(_katexT.leftDelim.replace(`\\`, ``)),
        ]);
        (katexValue782.setAttribute(`fence`, `true`),
          katexValue781.push(katexValue782));
      }
      if ((katexValue781.push(katexValue779), _katexT.rightDelim != null)) {
        var katexValue783 = new katexValue141(`mo`, [
          new katexValue142(_katexT.rightDelim.replace(`\\`, ``)),
        ]);
        (katexValue783.setAttribute(`fence`, `true`),
          katexValue781.push(katexValue783));
      }
      return katexValue147(katexValue781);
    }
    return katexValue779;
  },
  katexValue226 = (_katexT, katexParam417) =>
    katexParam417
      ? {
          type: `styling`,
          mode: _katexT.mode,
          style: katexParam417,
          body: [_katexT],
        }
      : _katexT;
(katexI({
  type: `genfrac`,
  names: [
    `\\cfrac`,
    `\\dfrac`,
    `\\frac`,
    `\\tfrac`,
    `\\dbinom`,
    `\\binom`,
    `\\tbinom`,
    `\\\\atopfrac`,
    `\\\\bracefrac`,
    `\\\\brackfrac`,
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0,
  },
  handler: (_katexT, katexParam64) => {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue717 = katexParam64[0],
      katexValue718 = katexParam64[1],
      katexValue719,
      katexValue720 = null,
      katexValue721 = null;
    switch (funcName) {
      case `\\cfrac`:
      case `\\dfrac`:
      case `\\frac`:
      case `\\tfrac`:
        katexValue719 = !0;
        break;
      case `\\\\atopfrac`:
        katexValue719 = !1;
        break;
      case `\\dbinom`:
      case `\\binom`:
      case `\\tbinom`:
        ((katexValue719 = !1), (katexValue720 = `(`), (katexValue721 = `)`));
        break;
      case `\\\\bracefrac`:
        ((katexValue719 = !1),
          (katexValue720 = `\\{`),
          (katexValue721 = `\\}`));
        break;
      case `\\\\brackfrac`:
        ((katexValue719 = !1), (katexValue720 = `[`), (katexValue721 = `]`));
        break;
      default:
        throw Error(`Unrecognized genfrac command`);
    }
    var katexValue722 = funcName === `\\cfrac`,
      _katexN = null;
    return (
      katexValue722 || funcName.startsWith(`\\d`)
        ? (_katexN = `display`)
        : funcName.startsWith(`\\t`) && (_katexN = `text`),
      katexValue226(
        {
          type: `genfrac`,
          mode: parser.mode,
          numer: katexValue717,
          denom: katexValue718,
          continued: katexValue722,
          hasBarLine: katexValue719,
          leftDelim: katexValue720,
          rightDelim: katexValue721,
          barSize: null,
        },
        _katexN,
      )
    );
  },
  htmlBuilder: $r,
  mathmlBuilder: katexValue225,
}),
  katexI({
    type: `infix`,
    names: [`\\over`, `\\choose`, `\\atop`, `\\brace`, `\\brack`],
    props: {
      numArgs: 0,
      infix: !0,
    },
    handler(_katexT) {
      var { parser: parser, funcName: funcName, token: token } = _katexT,
        katexValue913;
      switch (funcName) {
        case `\\over`:
          katexValue913 = `\\frac`;
          break;
        case `\\choose`:
          katexValue913 = `\\binom`;
          break;
        case `\\atop`:
          katexValue913 = `\\\\atopfrac`;
          break;
        case `\\brace`:
          katexValue913 = `\\\\bracefrac`;
          break;
        case `\\brack`:
          katexValue913 = `\\\\brackfrac`;
          break;
        default:
          throw Error(`Unrecognized infix genfrac command`);
      }
      return {
        type: `infix`,
        mode: parser.mode,
        replaceWith: katexValue913,
        token: token,
      };
    },
  }));
var katexValue227 = [`display`, `text`, `script`, `scriptscript`],
  katexValue228 = function (_katexT) {
    var katexValue1272 = null;
    return (
      _katexT.length > 0 &&
        ((katexValue1272 = _katexT),
        (katexValue1272 = katexValue1272 === `.` ? null : katexValue1272)),
      katexValue1272
    );
  };
(katexI({
  type: `genfrac`,
  names: [`\\genfrac`],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: [`math`, `math`, `size`, `text`, `math`, `math`],
  },
  handler(_katexT, katexParam78) {
    var { parser: parser } = _katexT,
      katexValue768 = katexParam78[4],
      katexValue769 = katexParam78[5],
      katexValue770 = katexValue129(katexParam78[0]),
      katexValue771 =
        katexValue770.type === `atom` && katexValue770.family === `open`
          ? katexValue228(katexValue770.text)
          : null,
      katexValue772 = katexValue129(katexParam78[1]),
      katexValue773 =
        katexValue772.type === `atom` && katexValue772.family === `close`
          ? katexValue228(katexValue772.text)
          : null,
      katexValue774 = katexHelper13(katexParam78[2], `size`),
      _katexN,
      katexValue775 = null;
    katexValue774.isBlank
      ? (_katexN = !0)
      : ((katexValue775 = katexValue774.value),
        (_katexN = katexValue775.number > 0));
    var katexValue776 = null,
      katexValue777 = katexParam78[3];
    if (katexValue777.type === `ordgroup`) {
      if (katexValue777.body.length > 0) {
        var katexValue778 = katexHelper13(katexValue777.body[0], `textord`);
        katexValue776 = katexValue227[Number(katexValue778.text)];
      }
    } else
      ((katexValue777 = katexHelper13(katexValue777, `textord`)),
        (katexValue776 = katexValue227[Number(katexValue777.text)]));
    return katexValue226(
      {
        type: `genfrac`,
        mode: parser.mode,
        numer: katexValue768,
        denom: katexValue769,
        continued: !1,
        hasBarLine: _katexN,
        barSize: katexValue775,
        leftDelim: katexValue771,
        rightDelim: katexValue773,
      },
      katexValue776,
    );
  },
}),
  katexI({
    type: `infix`,
    names: [`\\above`],
    props: {
      numArgs: 1,
      argTypes: [`size`],
      infix: !0,
    },
    handler(_katexT, katexParam290) {
      var { parser: parser, funcName: funcName, token: token } = _katexT;
      return {
        type: `infix`,
        mode: parser.mode,
        replaceWith: `\\\\abovefrac`,
        size: katexHelper13(katexParam290[0], `size`).value,
        token: token,
      };
    },
  }),
  katexI({
    type: `genfrac`,
    names: [`\\\\abovefrac`],
    props: {
      numArgs: 3,
      argTypes: [`math`, `size`, `math`],
    },
    handler: (_katexT, katexParam173) => {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue996 = katexParam173[0],
        katexValue997 = katexHelper13(katexParam173[1], `infix`).size;
      if (!katexValue997)
        throw Error(
          `\\\\abovefrac expected size, but got ` + String(katexValue997),
        );
      var katexValue998 = katexParam173[2],
        katexValue999 = katexValue997.number > 0;
      return {
        type: `genfrac`,
        mode: parser.mode,
        numer: katexValue996,
        denom: katexValue998,
        continued: !1,
        hasBarLine: katexValue999,
        barSize: katexValue997,
        leftDelim: null,
        rightDelim: null,
      };
    },
  }));
var katexValue229 = (_katexT, katexParam32) => {
  var katexValue553 = katexParam32.style,
    katexValue554,
    katexValue555;
  _katexT.type === `supsub`
    ? ((katexValue554 = _katexT.sup
        ? katexValue140(
            _katexT.sup,
            katexParam32.havingStyle(katexValue553.sup()),
            katexParam32,
          )
        : katexValue140(
            _katexT.sub,
            katexParam32.havingStyle(katexValue553.sub()),
            katexParam32,
          )),
      (katexValue555 = katexHelper13(_katexT.base, `horizBrace`)))
    : (katexValue555 = katexHelper13(_katexT, `horizBrace`));
  var katexValue556 = katexValue140(
      katexValue555.base,
      katexParam32.havingBaseStyle(katexValue27.DISPLAY),
    ),
    katexValue557 = katexValue163(katexValue555, katexParam32),
    katexValue558;
  if (
    (katexValue555.isOver
      ? ((katexValue558 = katexValue115({
          positionType: `firstBaseline`,
          children: [
            {
              type: `elem`,
              elem: katexValue556,
            },
            {
              type: `kern`,
              size: 0.1,
            },
            {
              type: `elem`,
              elem: katexValue557,
            },
          ],
        })),
        katexValue558.children[0].children[0].children[1].classes.push(
          `svg-align`,
        ))
      : ((katexValue558 = katexValue115({
          positionType: `bottom`,
          positionData: katexValue556.depth + 0.1 + katexValue557.height,
          children: [
            {
              type: `elem`,
              elem: katexValue557,
            },
            {
              type: `kern`,
              size: 0.1,
            },
            {
              type: `elem`,
              elem: katexValue556,
            },
          ],
        })),
        katexValue558.children[0].children[0].children[0].classes.push(
          `svg-align`,
        )),
    katexValue554)
  ) {
    var katexValue559 = katexValue108(
      [`minner`, katexValue555.isOver ? `mover` : `munder`],
      [katexValue558],
      katexParam32,
    );
    katexValue558 = katexValue555.isOver
      ? katexValue115({
          positionType: `firstBaseline`,
          children: [
            {
              type: `elem`,
              elem: katexValue559,
            },
            {
              type: `kern`,
              size: 0.2,
            },
            {
              type: `elem`,
              elem: katexValue554,
            },
          ],
        })
      : katexValue115({
          positionType: `bottom`,
          positionData:
            katexValue559.depth +
            0.2 +
            katexValue554.height +
            katexValue554.depth,
          children: [
            {
              type: `elem`,
              elem: katexValue554,
            },
            {
              type: `kern`,
              size: 0.2,
            },
            {
              type: `elem`,
              elem: katexValue559,
            },
          ],
        });
  }
  return katexValue108(
    [`minner`, katexValue555.isOver ? `mover` : `munder`],
    [katexValue558],
    katexParam32,
  );
};
(katexI({
  type: `horizBrace`,
  names: [`\\overbrace`, `\\underbrace`, `\\overbracket`, `\\underbracket`],
  props: {
    numArgs: 1,
  },
  handler(_katexT, katexParam314) {
    var { parser: parser, funcName: funcName } = _katexT;
    return {
      type: `horizBrace`,
      mode: parser.mode,
      label: funcName,
      isOver: funcName.includes(`\\over`),
      base: katexParam314[0],
    };
  },
  htmlBuilder: katexValue229,
  mathmlBuilder: (_katexT, katexParam385) => {
    var katexValue1262 = katexValue160(_katexT.label);
    return new katexValue141(_katexT.isOver ? `mover` : `munder`, [
      katexValue151(_katexT.base, katexParam385),
      katexValue1262,
    ]);
  },
}),
  katexI({
    type: `href`,
    names: [`\\href`],
    props: {
      numArgs: 2,
      argTypes: [`url`, `original`],
      allowedInText: !0,
    },
    handler: (_katexT, katexParam237) => {
      var { parser: parser } = _katexT,
        katexValue1123 = katexParam237[1],
        katexValue1124 = katexHelper13(katexParam237[0], `url`).url;
      return parser.settings.isTrusted({
        command: `\\href`,
        url: katexValue1124,
      })
        ? {
            type: `href`,
            mode: parser.mode,
            href: katexValue1124,
            body: katexValue130(katexValue1123),
          }
        : parser.formatUnsupportedCmd(`\\href`);
    },
    htmlBuilder: (_katexT, katexParam427) => {
      var katexValue1281 = katexValue135(_katexT.body, katexParam427, !1);
      return katexValue111(_katexT.href, [], katexValue1281, katexParam427);
    },
    mathmlBuilder: (_katexT, katexParam341) => {
      var katexValue1233 = katexValue150(_katexT.body, katexParam341);
      return (
        katexValue1233 instanceof katexValue141 ||
          (katexValue1233 = new katexValue141(`mrow`, [katexValue1233])),
        katexValue1233.setAttribute(`href`, _katexT.href),
        katexValue1233
      );
    },
  }),
  katexI({
    type: `href`,
    names: [`\\url`],
    props: {
      numArgs: 1,
      argTypes: [`url`],
      allowedInText: !0,
    },
    handler: (_katexT, katexParam128) => {
      var { parser: parser } = _katexT,
        katexValue901 = katexHelper13(katexParam128[0], `url`).url;
      if (
        !parser.settings.isTrusted({
          command: `\\url`,
          url: katexValue901,
        })
      )
        return parser.formatUnsupportedCmd(`\\url`);
      for (
        var katexValue902 = [], katexValue903 = 0;
        katexValue903 < katexValue901.length;
        katexValue903++
      ) {
        var katexValue904 = katexValue901[katexValue903];
        (katexValue904 === `~` && (katexValue904 = `\\textasciitilde`),
          katexValue902.push({
            type: `textord`,
            mode: `text`,
            text: katexValue904,
          }));
      }
      var katexValue905 = {
        type: `text`,
        mode: parser.mode,
        font: `\\texttt`,
        body: katexValue902,
      };
      return {
        type: `href`,
        mode: parser.mode,
        href: katexValue901,
        body: katexValue130(katexValue905),
      };
    },
  }),
  katexI({
    type: `hbox`,
    names: [`\\hbox`],
    props: {
      numArgs: 1,
      argTypes: [`text`],
      allowedInText: !0,
      primitive: !0,
    },
    handler(_katexT, katexParam393) {
      var { parser: parser } = _katexT;
      return {
        type: `hbox`,
        mode: parser.mode,
        body: katexValue130(katexParam393[0]),
      };
    },
    htmlBuilder(_katexT, katexParam439) {
      return katexValue112(katexValue135(_katexT.body, katexParam439, !1));
    },
    mathmlBuilder(_katexT, katexParam428) {
      return new katexValue141(
        `mrow`,
        katexValue149(_katexT.body, katexParam428),
      );
    },
  }),
  katexI({
    type: `html`,
    names: [`\\htmlClass`, `\\htmlId`, `\\htmlStyle`, `\\htmlData`],
    props: {
      numArgs: 2,
      argTypes: [`raw`, `original`],
      allowedInText: !0,
    },
    handler: (katexParam42, katexParam43) => {
      var { parser: parser, funcName: funcName, token: token } = katexParam42,
        katexValue646 = katexHelper13(katexParam43[0], `raw`).string,
        katexValue647 = katexParam43[1];
      parser.settings.strict &&
        parser.settings.reportNonstrict(
          `htmlExtension`,
          `HTML extension is disabled on strict mode`,
        );
      var katexValue648,
        katexValue649 = {};
      switch (funcName) {
        case `\\htmlClass`:
          ((katexValue649.class = katexValue646),
            (katexValue648 = {
              command: `\\htmlClass`,
              class: katexValue646,
            }));
          break;
        case `\\htmlId`:
          ((katexValue649.id = katexValue646),
            (katexValue648 = {
              command: `\\htmlId`,
              id: katexValue646,
            }));
          break;
        case `\\htmlStyle`:
          ((katexValue649.style = katexValue646),
            (katexValue648 = {
              command: `\\htmlStyle`,
              style: katexValue646,
            }));
          break;
        case `\\htmlData`:
          for (
            var _katexN = katexValue646.split(`,`), katexValue650 = 0;
            katexValue650 < _katexN.length;
            katexValue650++
          ) {
            var katexValue651 = _katexN[katexValue650],
              katexValue652 = katexValue651.indexOf(`=`);
            if (katexValue652 < 0)
              throw new katexT(
                `\\htmlData key/value '` +
                  katexValue651 +
                  `' missing equals sign`,
              );
            var katexValue653 = katexValue651.slice(0, katexValue652),
              katexValue654 = katexValue651.slice(katexValue652 + 1);
            katexValue649[`data-` + katexValue653.trim()] = katexValue654;
          }
          katexValue648 = {
            command: `\\htmlData`,
            attributes: katexValue649,
          };
          break;
        default:
          throw Error(`Unrecognized html command`);
      }
      return parser.settings.isTrusted(katexValue648)
        ? {
            type: `html`,
            mode: parser.mode,
            attributes: katexValue649,
            body: katexValue130(katexValue647),
          }
        : parser.formatUnsupportedCmd(funcName);
    },
    htmlBuilder: (_katexT, katexParam193) => {
      var katexValue1043 = katexValue135(_katexT.body, katexParam193, !1),
        katexValue1044 = [`enclosing`];
      _katexT.attributes.class &&
        katexValue1044.push(..._katexT.attributes.class.trim().split(/\s+/));
      var katexValue1045 = katexValue108(
        katexValue1044,
        katexValue1043,
        katexParam193,
      );
      for (var katexValue1046 in _katexT.attributes)
        katexValue1046 !== `class` &&
          _katexT.attributes.hasOwnProperty(katexValue1046) &&
          katexValue1045.setAttribute(
            katexValue1046,
            _katexT.attributes[katexValue1046],
          );
      return katexValue1045;
    },
    mathmlBuilder: (_katexT, katexParam467) =>
      katexValue150(_katexT.body, katexParam467),
  }),
  katexI({
    type: `htmlmathml`,
    names: [`\\html@mathml`],
    props: {
      numArgs: 2,
      allowedInArgument: !0,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam355) => {
      var { parser: parser } = _katexT;
      return {
        type: `htmlmathml`,
        mode: parser.mode,
        html: katexValue130(katexParam355[0]),
        mathml: katexValue130(katexParam355[1]),
      };
    },
    htmlBuilder: (_katexT, katexParam461) =>
      katexValue112(katexValue135(_katexT.html, katexParam461, !1)),
    mathmlBuilder: (_katexT, katexParam464) =>
      katexValue150(_katexT.mathml, katexParam464),
  }));
var katexValue230 = function (katexParam142) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(katexParam142))
    return {
      number: +katexParam142,
      unit: `bp`,
    };
  var katexValue930 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
    katexParam142,
  );
  if (!katexValue930)
    throw new katexT(
      `Invalid size: '` + katexParam142 + `' in \\includegraphics`,
    );
  var katexValue931 = {
    number: +(katexValue930[1] + katexValue930[2]),
    unit: katexValue930[3],
  };
  if (!katexValue44(katexValue931))
    throw new katexT(
      `Invalid unit: '` + katexValue931.unit + `' in \\includegraphics.`,
    );
  return katexValue931;
};
(katexI({
  type: `includegraphics`,
  names: [`\\includegraphics`],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: [`raw`, `url`],
    allowedInText: !1,
  },
  handler: (katexParam48, katexParam49, katexParam50) => {
    var { parser: parser } = katexParam48,
      katexValue664 = {
        number: 0,
        unit: `em`,
      },
      katexValue665 = {
        number: 0.9,
        unit: `em`,
      },
      katexValue666 = {
        number: 0,
        unit: `em`,
      },
      katexValue667 = ``;
    if (katexParam50[0])
      for (
        var katexValue668 = katexHelper13(katexParam50[0], `raw`).string.split(
            `,`,
          ),
          _katexN = 0;
        _katexN < katexValue668.length;
        _katexN++
      ) {
        var katexValue669 = katexValue668[_katexN].split(`=`);
        if (katexValue669.length === 2) {
          var katexValue670 = katexValue669[1].trim();
          switch (katexValue669[0].trim()) {
            case `alt`:
              katexValue667 = katexValue670;
              break;
            case `width`:
              katexValue664 = katexValue230(katexValue670);
              break;
            case `height`:
              katexValue665 = katexValue230(katexValue670);
              break;
            case `totalheight`:
              katexValue666 = katexValue230(katexValue670);
              break;
            default:
              throw new katexT(
                `Invalid key: '` + katexValue669[0] + `' in \\includegraphics.`,
              );
          }
        }
      }
    var katexValue671 = katexHelper13(katexParam49[0], `url`).url;
    return (
      katexValue667 === `` &&
        ((katexValue667 = katexValue671),
        (katexValue667 = katexValue667.replace(/^.*[\\/]/, ``)),
        (katexValue667 = katexValue667.substring(
          0,
          katexValue667.lastIndexOf(`.`),
        ))),
      parser.settings.isTrusted({
        command: `\\includegraphics`,
        url: katexValue671,
      })
        ? {
            type: `includegraphics`,
            mode: parser.mode,
            alt: katexValue667,
            width: katexValue664,
            height: katexValue665,
            totalheight: katexValue666,
            src: katexValue671,
          }
        : parser.formatUnsupportedCmd(`\\includegraphics`)
    );
  },
  htmlBuilder: (_katexT, katexParam189) => {
    var katexValue1028 = katexValue45(_katexT.height, katexParam189),
      katexValue1029 = 0;
    _katexT.totalheight.number > 0 &&
      (katexValue1029 =
        katexValue45(_katexT.totalheight, katexParam189) - katexValue1028);
    var katexValue1030 = 0;
    _katexT.width.number > 0 &&
      (katexValue1030 = katexValue45(_katexT.width, katexParam189));
    var katexValue1031 = {
      height: katexValue46(katexValue1028 + katexValue1029),
    };
    (katexValue1030 > 0 &&
      (katexValue1031.width = katexValue46(katexValue1030)),
      katexValue1029 > 0 &&
        (katexValue1031.verticalAlign = katexValue46(-katexValue1029)));
    var katexValue1032 = new katexValue54(
      _katexT.src,
      _katexT.alt,
      katexValue1031,
    );
    return (
      (katexValue1032.height = katexValue1028),
      (katexValue1032.depth = katexValue1029),
      katexValue1032
    );
  },
  mathmlBuilder: (_katexT, katexParam150) => {
    var katexValue960 = new katexValue141(`mglyph`, []);
    katexValue960.setAttribute(`alt`, _katexT.alt);
    var katexValue961 = katexValue45(_katexT.height, katexParam150),
      katexValue962 = 0;
    if (
      (_katexT.totalheight.number > 0 &&
        ((katexValue962 =
          katexValue45(_katexT.totalheight, katexParam150) - katexValue961),
        katexValue960.setAttribute(`valign`, katexValue46(-katexValue962))),
      katexValue960.setAttribute(
        `height`,
        katexValue46(katexValue961 + katexValue962),
      ),
      _katexT.width.number > 0)
    ) {
      var katexValue963 = katexValue45(_katexT.width, katexParam150);
      katexValue960.setAttribute(`width`, katexValue46(katexValue963));
    }
    return (katexValue960.setAttribute(`src`, _katexT.src), katexValue960);
  },
}),
  katexI({
    type: `kern`,
    names: [`\\kern`, `\\mkern`, `\\hskip`, `\\mskip`],
    props: {
      numArgs: 1,
      argTypes: [`size`],
      primitive: !0,
      allowedInText: !0,
    },
    handler(_katexT, katexParam82) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue792 = katexHelper13(katexParam82[0], `size`);
      if (parser.settings.strict) {
        var katexValue793 = funcName[1] === `m`,
          katexValue794 = katexValue792.value.unit === `mu`;
        katexValue793
          ? (katexValue794 ||
              parser.settings.reportNonstrict(
                `mathVsTextUnits`,
                `LaTeX's ` +
                  funcName +
                  ` supports only mu units, ` +
                  (`not ` + katexValue792.value.unit + ` units`),
              ),
            parser.mode !== `math` &&
              parser.settings.reportNonstrict(
                `mathVsTextUnits`,
                `LaTeX's ` + funcName + ` works only in math mode`,
              ))
          : katexValue794 &&
            parser.settings.reportNonstrict(
              `mathVsTextUnits`,
              `LaTeX's ` + funcName + ` doesn't support mu units`,
            );
      }
      return {
        type: `kern`,
        mode: parser.mode,
        dimension: katexValue792.value,
      };
    },
    htmlBuilder(_katexT, katexParam440) {
      return katexValue116(_katexT.dimension, katexParam440);
    },
    mathmlBuilder(_katexT, katexParam431) {
      return new katexValue143(katexValue45(_katexT.dimension, katexParam431));
    },
  }),
  katexI({
    type: `lap`,
    names: [`\\mathllap`, `\\mathrlap`, `\\mathclap`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam345) => {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1237 = katexParam345[0];
      return {
        type: `lap`,
        mode: parser.mode,
        alignment: funcName.slice(5),
        body: katexValue1237,
      };
    },
    htmlBuilder: (_katexT, katexParam139) => {
      var katexValue924;
      _katexT.alignment === `clap`
        ? ((katexValue924 = katexValue108(
            [],
            [katexValue140(_katexT.body, katexParam139)],
          )),
          (katexValue924 = katexValue108(
            [`inner`],
            [katexValue924],
            katexParam139,
          )))
        : (katexValue924 = katexValue108(
            [`inner`],
            [katexValue140(_katexT.body, katexParam139)],
          ));
      var katexValue925 = katexValue108([`fix`], []),
        katexValue926 = katexValue108(
          [_katexT.alignment],
          [katexValue924, katexValue925],
          katexParam139,
        ),
        katexValue927 = katexValue108([`strut`]);
      return (
        (katexValue927.style.height = katexValue46(
          katexValue926.height + katexValue926.depth,
        )),
        katexValue926.depth &&
          (katexValue927.style.verticalAlign = katexValue46(
            -katexValue926.depth,
          )),
        katexValue926.children.unshift(katexValue927),
        (katexValue926 = katexValue108(
          [`thinbox`],
          [katexValue926],
          katexParam139,
        )),
        katexValue108([`mord`, `vbox`], [katexValue926], katexParam139)
      );
    },
    mathmlBuilder: (_katexT, katexParam235) => {
      var katexValue1116 = new katexValue141(`mpadded`, [
        katexValue151(_katexT.body, katexParam235),
      ]);
      if (_katexT.alignment !== `rlap`) {
        var katexValue1117 = _katexT.alignment === `llap` ? `-1` : `-0.5`;
        katexValue1116.setAttribute(`lspace`, katexValue1117 + `width`);
      }
      return (katexValue1116.setAttribute(`width`, `0px`), katexValue1116);
    },
  }),
  katexI({
    type: `styling`,
    names: [`\\(`, `$`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      allowedInMath: !1,
    },
    handler(_katexT, katexParam218) {
      var { funcName: funcName, parser: parser } = _katexT,
        katexValue1089 = parser.mode;
      parser.switchMode(`math`);
      var katexValue1090 = funcName === `\\(` ? `\\)` : `$`,
        katexValue1091 = parser.parseExpression(!1, katexValue1090);
      return (
        parser.expect(katexValue1090),
        parser.switchMode(katexValue1089),
        {
          type: `styling`,
          mode: parser.mode,
          style: `text`,
          body: katexValue1091,
        }
      );
    },
  }),
  katexI({
    type: `text`,
    names: [`\\)`, `\\]`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      allowedInMath: !1,
    },
    handler(katexParam432, katexParam433) {
      throw new katexT(`Mismatched ` + katexParam432.funcName);
    },
  }));
var katexValue231 = (_katexT, katexParam221) => {
  switch (katexParam221.style.size) {
    case katexValue27.DISPLAY.size:
      return _katexT.display;
    case katexValue27.TEXT.size:
      return _katexT.text;
    case katexValue27.SCRIPT.size:
      return _katexT.script;
    case katexValue27.SCRIPTSCRIPT.size:
      return _katexT.scriptscript;
    default:
      return _katexT.text;
  }
};
katexI({
  type: `mathchoice`,
  names: [`\\mathchoice`],
  props: {
    numArgs: 4,
    primitive: !0,
  },
  handler: (_katexT, katexParam310) => {
    var { parser: parser } = _katexT;
    return {
      type: `mathchoice`,
      mode: parser.mode,
      display: katexValue130(katexParam310[0]),
      text: katexValue130(katexParam310[1]),
      script: katexValue130(katexParam310[2]),
      scriptscript: katexValue130(katexParam310[3]),
    };
  },
  htmlBuilder: (_katexT, katexParam456) =>
    katexValue112(
      katexValue135(katexValue231(_katexT, katexParam456), katexParam456, !1),
    ),
  mathmlBuilder: (_katexT, katexParam466) =>
    katexValue150(katexValue231(_katexT, katexParam466), katexParam466),
});
var katexValue232 = (
    _katexT,
    katexParam19,
    katexParam20,
    katexParam21,
    katexParam22,
    katexParam23,
    katexParam24,
  ) => {
    _katexT = katexValue108([], [_katexT]);
    var katexValue475 = katexParam20 && katexValue8(katexParam20),
      katexValue476,
      _katexN;
    if (katexParam19) {
      var katexValue477 = katexValue140(
        katexParam19,
        katexParam21.havingStyle(katexParam22.sup()),
        katexParam21,
      );
      _katexN = {
        elem: katexValue477,
        kern: Math.max(
          katexParam21.fontMetrics().bigOpSpacing1,
          katexParam21.fontMetrics().bigOpSpacing3 - katexValue477.depth,
        ),
      };
    }
    if (katexParam20) {
      var katexValue478 = katexValue140(
        katexParam20,
        katexParam21.havingStyle(katexParam22.sub()),
        katexParam21,
      );
      katexValue476 = {
        elem: katexValue478,
        kern: Math.max(
          katexParam21.fontMetrics().bigOpSpacing2,
          katexParam21.fontMetrics().bigOpSpacing4 - katexValue478.height,
        ),
      };
    }
    var katexValue479;
    if (_katexN && katexValue476)
      katexValue479 = katexValue115({
        positionType: `bottom`,
        positionData:
          katexParam21.fontMetrics().bigOpSpacing5 +
          katexValue476.elem.height +
          katexValue476.elem.depth +
          katexValue476.kern +
          _katexT.depth +
          katexParam24,
        children: [
          {
            type: `kern`,
            size: katexParam21.fontMetrics().bigOpSpacing5,
          },
          {
            type: `elem`,
            elem: katexValue476.elem,
            marginLeft: katexValue46(-katexParam23),
          },
          {
            type: `kern`,
            size: katexValue476.kern,
          },
          {
            type: `elem`,
            elem: _katexT,
          },
          {
            type: `kern`,
            size: _katexN.kern,
          },
          {
            type: `elem`,
            elem: _katexN.elem,
            marginLeft: katexValue46(katexParam23),
          },
          {
            type: `kern`,
            size: katexParam21.fontMetrics().bigOpSpacing5,
          },
        ],
      });
    else if (katexValue476)
      katexValue479 = katexValue115({
        positionType: `top`,
        positionData: _katexT.height - katexParam24,
        children: [
          {
            type: `kern`,
            size: katexParam21.fontMetrics().bigOpSpacing5,
          },
          {
            type: `elem`,
            elem: katexValue476.elem,
            marginLeft: katexValue46(-katexParam23),
          },
          {
            type: `kern`,
            size: katexValue476.kern,
          },
          {
            type: `elem`,
            elem: _katexT,
          },
        ],
      });
    else if (_katexN)
      katexValue479 = katexValue115({
        positionType: `bottom`,
        positionData: _katexT.depth + katexParam24,
        children: [
          {
            type: `elem`,
            elem: _katexT,
          },
          {
            type: `kern`,
            size: _katexN.kern,
          },
          {
            type: `elem`,
            elem: _katexN.elem,
            marginLeft: katexValue46(katexParam23),
          },
          {
            type: `kern`,
            size: katexParam21.fontMetrics().bigOpSpacing5,
          },
        ],
      });
    else return _katexT;
    var katexValue480 = [katexValue479];
    if (katexValue476 && katexParam23 !== 0 && !katexValue475) {
      var katexValue481 = katexValue108([`mspace`], [], katexParam21);
      ((katexValue481.style.marginRight = katexValue46(katexParam23)),
        katexValue480.unshift(katexValue481));
    }
    return katexValue108([`mop`, `op-limits`], katexValue480, katexParam21);
  },
  katexValue233 = new Set([`\\smallint`]),
  katexValue234 = (_katexT, katexParam28) => {
    var katexValue522,
      katexValue523,
      katexValue524 = !1,
      katexValue525;
    _katexT.type === `supsub`
      ? ((katexValue522 = _katexT.sup),
        (katexValue523 = _katexT.sub),
        (katexValue525 = katexHelper13(_katexT.base, `op`)),
        (katexValue524 = !0))
      : (katexValue525 = katexHelper13(_katexT, `op`));
    var katexValue526 = katexParam28.style,
      katexValue527 = !1;
    katexValue526.size === katexValue27.DISPLAY.size &&
      katexValue525.symbol &&
      !katexValue233.has(katexValue525.name) &&
      (katexValue527 = !0);
    var katexValue528;
    if (katexValue525.symbol) {
      var katexValue529 = katexValue527 ? `Size2-Regular` : `Size1-Regular`,
        _katexN = ``;
      if (
        ((katexValue525.name === `\\oiint` ||
          katexValue525.name === `\\oiiint`) &&
          ((_katexN = katexValue525.name.slice(1)),
          (katexValue525.name = _katexN === `oiint` ? `\\iint` : `\\iiint`)),
        (katexValue528 = katexValue101(
          katexValue525.name,
          katexValue529,
          `math`,
          katexParam28,
          [`mop`, `op-symbol`, katexValue527 ? `large-op` : `small-op`],
        )),
        _katexN.length > 0)
      ) {
        var katexValue530 = katexValue528.italic,
          katexValue531 = katexValue120(
            _katexN + `Size` + (katexValue527 ? `2` : `1`),
            katexParam28,
          );
        ((katexValue528 = katexValue115({
          positionType: `individualShift`,
          children: [
            {
              type: `elem`,
              elem: katexValue528,
              shift: 0,
            },
            {
              type: `elem`,
              elem: katexValue531,
              shift: katexValue527 ? 0.08 : 0,
            },
          ],
        })),
          (katexValue525.name = `\\` + _katexN),
          katexValue528.classes.unshift(`mop`),
          (katexValue528.italic = katexValue530));
      }
    } else if (katexValue525.body) {
      var katexValue532 = katexValue135(katexValue525.body, katexParam28, !0);
      katexValue532.length === 1 && katexValue532[0] instanceof katexValue56
        ? ((katexValue528 = katexValue532[0]),
          (katexValue528.classes[0] = `mop`))
        : (katexValue528 = katexValue108([`mop`], katexValue532, katexParam28));
    } else {
      for (
        var katexValue533 = [], katexValue534 = 1;
        katexValue534 < katexValue525.name.length;
        katexValue534++
      )
        katexValue533.push(
          katexValue102(
            katexValue525.name[katexValue534],
            katexValue525.mode,
            katexParam28,
          ),
        );
      katexValue528 = katexValue108([`mop`], katexValue533, katexParam28);
    }
    var katexValue535 = 0,
      katexValue536 = 0;
    return (
      (katexValue528 instanceof katexValue56 ||
        katexValue525.name === `\\oiint` ||
        katexValue525.name === `\\oiiint`) &&
        !katexValue525.suppressBaseShift &&
        ((katexValue535 =
          (katexValue528.height - katexValue528.depth) / 2 -
          katexParam28.fontMetrics().axisHeight),
        (katexValue536 = katexValue528.italic || 0)),
      katexValue524
        ? katexValue232(
            katexValue528,
            katexValue522,
            katexValue523,
            katexParam28,
            katexValue526,
            katexValue536,
            katexValue535,
          )
        : (katexValue535 &&
            ((katexValue528.style.position = `relative`),
            (katexValue528.style.top = katexValue46(katexValue535))),
          katexValue528)
    );
  },
  ui = (_katexT, katexParam163) => {
    var katexValue976;
    if (_katexT.symbol)
      ((katexValue976 = new katexValue141(`mo`, [
        katexValue146(_katexT.name, _katexT.mode),
      ])),
        katexValue233.has(_katexT.name) &&
          katexValue976.setAttribute(`largeop`, `false`));
    else if (_katexT.body)
      katexValue976 = new katexValue141(
        `mo`,
        katexValue149(_katexT.body, katexParam163),
      );
    else {
      katexValue976 = new katexValue141(`mi`, [
        new katexValue142(_katexT.name.slice(1)),
      ]);
      var katexValue977 = new katexValue141(`mo`, [katexValue146(`⁡`, `text`)]);
      katexValue976 = _katexT.parentIsSupSub
        ? new katexValue141(`mrow`, [katexValue976, katexValue977])
        : on([katexValue976, katexValue977]);
    }
    return katexValue976;
  },
  katexValue235 = {
    "∏": `\\prod`,
    "∐": `\\coprod`,
    "∑": `\\sum`,
    "⋀": `\\bigwedge`,
    "⋁": `\\bigvee`,
    "⋂": `\\bigcap`,
    "⋃": `\\bigcup`,
    "⨀": `\\bigodot`,
    "⨁": `\\bigoplus`,
    "⨂": `\\bigotimes`,
    "⨄": `\\biguplus`,
    "⨆": `\\bigsqcup`,
  };
(katexI({
  type: `op`,
  names:
    `\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆`.split(
      `.`,
    ),
  props: {
    numArgs: 0,
  },
  handler: (_katexT, katexParam292) => {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1189 = funcName;
    return (
      katexValue1189.length === 1 &&
        (katexValue1189 = katexValue235[katexValue1189]),
      {
        type: `op`,
        mode: parser.mode,
        limits: !0,
        parentIsSupSub: !1,
        symbol: !0,
        name: katexValue1189,
      }
    );
  },
  htmlBuilder: katexValue234,
  mathmlBuilder: ui,
}),
  katexI({
    type: `op`,
    names: [`\\mathop`],
    props: {
      numArgs: 1,
      primitive: !0,
    },
    handler: (_katexT, katexParam330) => {
      var { parser: parser } = _katexT,
        katexValue1222 = katexParam330[0];
      return {
        type: `op`,
        mode: parser.mode,
        limits: !1,
        parentIsSupSub: !1,
        symbol: !1,
        body: katexValue130(katexValue1222),
      };
    },
    htmlBuilder: katexValue234,
    mathmlBuilder: ui,
  }));
var katexValue236 = {
  "∫": `\\int`,
  "∬": `\\iint`,
  "∭": `\\iiint`,
  "∮": `\\oint`,
  "∯": `\\oiint`,
  "∰": `\\oiiint`,
};
(katexI({
  type: `op`,
  names:
    `\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(
      `.`,
    ),
  props: {
    numArgs: 0,
  },
  handler(_katexT) {
    var { parser: parser, funcName: funcName } = _katexT;
    return {
      type: `op`,
      mode: parser.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: funcName,
    };
  },
  htmlBuilder: katexValue234,
  mathmlBuilder: ui,
}),
  katexI({
    type: `op`,
    names: [
      `\\det`,
      `\\gcd`,
      `\\inf`,
      `\\lim`,
      `\\max`,
      `\\min`,
      `\\Pr`,
      `\\sup`,
    ],
    props: {
      numArgs: 0,
    },
    handler(_katexT) {
      var { parser: parser, funcName: funcName } = _katexT;
      return {
        type: `op`,
        mode: parser.mode,
        limits: !0,
        parentIsSupSub: !1,
        symbol: !1,
        name: funcName,
      };
    },
    htmlBuilder: katexValue234,
    mathmlBuilder: ui,
  }),
  katexI({
    type: `op`,
    names: [
      `\\int`,
      `\\iint`,
      `\\iiint`,
      `\\oint`,
      `\\oiint`,
      `\\oiiint`,
      `∫`,
      `∬`,
      `∭`,
      `∮`,
      `∯`,
      `∰`,
    ],
    props: {
      numArgs: 0,
      allowedInArgument: !0,
    },
    handler(_katexT) {
      var { parser: parser, funcName: funcName } = _katexT,
        katexValue1186 = funcName;
      return (
        katexValue1186.length === 1 &&
          (katexValue1186 = katexValue236[katexValue1186]),
        {
          type: `op`,
          mode: parser.mode,
          limits: !1,
          parentIsSupSub: !1,
          symbol: !0,
          name: katexValue1186,
        }
      );
    },
    htmlBuilder: katexValue234,
    mathmlBuilder: ui,
  }));
var katexValue237 = (_katexT, katexParam91) => {
  var katexValue810,
    katexValue811,
    katexValue812 = !1,
    katexValue813;
  _katexT.type === `supsub`
    ? ((katexValue810 = _katexT.sup),
      (katexValue811 = _katexT.sub),
      (katexValue813 = katexHelper13(_katexT.base, `operatorname`)),
      (katexValue812 = !0))
    : (katexValue813 = katexHelper13(_katexT, `operatorname`));
  var katexValue814;
  if (katexValue813.body.length > 0) {
    for (
      var katexValue815 = katexValue135(
          katexValue813.body.map((__katexT) => {
            var katexValue1238 = (`text` in __katexT) ? __katexT.text : void 0;
            return typeof katexValue1238 == `string`
              ? {
                  type: `textord`,
                  mode: __katexT.mode,
                  text: katexValue1238,
                }
              : __katexT;
          }),
          katexParam91.withFont(`mathrm`),
          !0,
        ),
        katexValue816 = 0;
      katexValue816 < katexValue815.length;
      katexValue816++
    ) {
      var katexValue817 = katexValue815[katexValue816];
      katexValue817 instanceof katexValue56 &&
        (katexValue817.text = katexValue817.text
          .replace(/\u2212/, `-`)
          .replace(/\u2217/, `*`));
    }
    katexValue814 = katexValue108([`mop`], katexValue815, katexParam91);
  } else katexValue814 = katexValue108([`mop`], [], katexParam91);
  return katexValue812
    ? katexValue232(
        katexValue814,
        katexValue810,
        katexValue811,
        katexParam91,
        katexParam91.style,
        0,
        0,
      )
    : katexValue814;
};
(katexI({
  type: `operatorname`,
  names: [`\\operatorname@`, `\\operatornamewithlimits`],
  props: {
    numArgs: 1,
  },
  handler: (_katexT, katexParam259) => {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1136 = katexParam259[0];
    return {
      type: `operatorname`,
      mode: parser.mode,
      body: katexValue130(katexValue1136),
      alwaysHandleSupSub: funcName === `\\operatornamewithlimits`,
      limits: !1,
      parentIsSupSub: !1,
    };
  },
  htmlBuilder: katexValue237,
  mathmlBuilder: (_katexT, katexParam74) => {
    for (
      var katexValue749 = katexValue149(
          _katexT.body,
          katexParam74.withFont(`mathrm`),
        ),
        katexValue750 = !0,
        katexValue751 = 0;
      katexValue751 < katexValue749.length;
      katexValue751++
    ) {
      var katexValue752 = katexValue749[katexValue751];
      if (!(katexValue752 instanceof katexValue143))
        if (katexValue752 instanceof katexValue141)
          switch (katexValue752.type) {
            case `mi`:
            case `mn`:
            case `mspace`:
            case `mtext`:
              break;
            case `mo`:
              var katexValue753 = katexValue752.children[0];
              katexValue752.children.length === 1 &&
              katexValue753 instanceof katexValue142
                ? (katexValue753.text = katexValue753.text
                    .replace(/\u2212/, `-`)
                    .replace(/\u2217/, `*`))
                : (katexValue750 = !1);
              break;
            default:
              katexValue750 = !1;
          }
        else katexValue750 = !1;
    }
    katexValue750 &&
      (katexValue749 = [
        new katexValue142(
          katexValue749.map((__katexT) => __katexT.toText()).join(``),
        ),
      ]);
    var katexValue754 = new katexValue141(`mi`, katexValue749);
    katexValue754.setAttribute(`mathvariant`, `normal`);
    var katexValue755 = new katexValue141(`mo`, [katexValue146(`⁡`, `text`)]);
    return _katexT.parentIsSupSub
      ? new katexValue141(`mrow`, [katexValue754, katexValue755])
      : on([katexValue754, katexValue755]);
  },
}),
  katexA(`\\operatorname`, `\\@ifstar\\operatornamewithlimits\\operatorname@`),
  katexHelper8({
    type: `ordgroup`,
    htmlBuilder(_katexT, katexParam368) {
      return _katexT.semisimple
        ? katexValue112(katexValue135(_katexT.body, katexParam368, !1))
        : katexValue108(
            [`mord`],
            katexValue135(_katexT.body, katexParam368, !0),
            katexParam368,
          );
    },
    mathmlBuilder(_katexT, katexParam441) {
      return katexValue150(_katexT.body, katexParam441, !0);
    },
  }),
  katexI({
    type: `overline`,
    names: [`\\overline`],
    props: {
      numArgs: 1,
    },
    handler(_katexT, katexParam386) {
      var { parser: parser } = _katexT,
        katexValue1264 = katexParam386[0];
      return {
        type: `overline`,
        mode: parser.mode,
        body: katexValue1264,
      };
    },
    htmlBuilder(_katexT, katexParam167) {
      var katexValue986 = katexValue140(
          _katexT.body,
          katexParam167.havingCrampedStyle(),
        ),
        katexValue987 = katexValue110(`overline-line`, katexParam167),
        katexValue988 = katexParam167.fontMetrics().defaultRuleThickness;
      return katexValue108(
        [`mord`, `overline`],
        [
          katexValue115({
            positionType: `firstBaseline`,
            children: [
              {
                type: `elem`,
                elem: katexValue986,
              },
              {
                type: `kern`,
                size: 3 * katexValue988,
              },
              {
                type: `elem`,
                elem: katexValue987,
              },
              {
                type: `kern`,
                size: katexValue988,
              },
            ],
          }),
        ],
        katexParam167,
      );
    },
    mathmlBuilder(_katexT, katexParam270) {
      var katexValue1151 = new katexValue141(`mo`, [new katexValue142(`‾`)]);
      katexValue1151.setAttribute(`stretchy`, `true`);
      var katexValue1152 = new katexValue141(`mover`, [
        katexValue151(_katexT.body, katexParam270),
        katexValue1151,
      ]);
      return (katexValue1152.setAttribute(`accent`, `true`), katexValue1152);
    },
  }),
  katexI({
    type: `phantom`,
    names: [`\\phantom`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam390) => {
      var { parser: parser } = _katexT,
        katexValue1268 = katexParam390[0];
      return {
        type: `phantom`,
        mode: parser.mode,
        body: katexValue130(katexValue1268),
      };
    },
    htmlBuilder: (_katexT, katexParam445) =>
      katexValue112(
        katexValue135(_katexT.body, katexParam445.withPhantom(), !1),
      ),
    mathmlBuilder: (_katexT, katexParam452) =>
      new katexValue141(`mphantom`, katexValue149(_katexT.body, katexParam452)),
  }),
  katexA(`\\hphantom`, `\\smash{\\phantom{#1}}`),
  katexI({
    type: `vphantom`,
    names: [`\\vphantom`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam394) => {
      var { parser: parser } = _katexT,
        katexValue1270 = katexParam394[0];
      return {
        type: `vphantom`,
        mode: parser.mode,
        body: katexValue1270,
      };
    },
    htmlBuilder: (_katexT, katexParam377) =>
      katexValue108(
        [`mord`, `rlap`],
        [
          katexValue108(
            [`inner`],
            [katexValue140(_katexT.body, katexParam377.withPhantom())],
          ),
          katexValue108([`fix`], []),
        ],
        katexParam377,
      ),
    mathmlBuilder: (_katexT, katexParam335) => {
      var katexValue1230 = new katexValue141(`mpadded`, [
        new katexValue141(
          `mphantom`,
          katexValue149(katexValue130(_katexT.body), katexParam335),
        ),
      ]);
      return (katexValue1230.setAttribute(`width`, `0px`), katexValue1230);
    },
  }),
  katexI({
    type: `raisebox`,
    names: [`\\raisebox`],
    props: {
      numArgs: 2,
      argTypes: [`size`, `hbox`],
      allowedInText: !0,
    },
    handler(_katexT, katexParam332) {
      var { parser: parser } = _katexT,
        katexValue1224 = katexHelper13(katexParam332[0], `size`).value,
        katexValue1225 = katexParam332[1];
      return {
        type: `raisebox`,
        mode: parser.mode,
        dy: katexValue1224,
        body: katexValue1225,
      };
    },
    htmlBuilder(_katexT, katexParam315) {
      var katexValue1207 = katexValue140(_katexT.body, katexParam315);
      return katexValue115({
        positionType: `shift`,
        positionData: -katexValue45(_katexT.dy, katexParam315),
        children: [
          {
            type: `elem`,
            elem: katexValue1207,
          },
        ],
      });
    },
    mathmlBuilder(_katexT, katexParam326) {
      var katexValue1216 = new katexValue141(`mpadded`, [
          katexValue151(_katexT.body, katexParam326),
        ]),
        katexValue1217 = _katexT.dy.number + _katexT.dy.unit;
      return (
        katexValue1216.setAttribute(`voffset`, katexValue1217),
        katexValue1216
      );
    },
  }),
  katexI({
    type: `internal`,
    names: [`\\relax`],
    props: {
      numArgs: 0,
      allowedInText: !0,
      allowedInArgument: !0,
    },
    handler(_katexT) {
      var { parser: parser } = _katexT;
      return {
        type: `internal`,
        mode: parser.mode,
      };
    },
  }),
  katexI({
    type: `rule`,
    names: [`\\rule`],
    props: {
      numArgs: 2,
      numOptionalArgs: 1,
      allowedInText: !0,
      allowedInMath: !0,
      argTypes: [`size`, `size`, `size`],
    },
    handler(_katexT, katexParam274, katexParam275) {
      var { parser: parser } = _katexT,
        katexValue1156 = katexParam275[0],
        katexValue1157 = katexHelper13(katexParam274[0], `size`),
        katexValue1158 = katexHelper13(katexParam274[1], `size`);
      return {
        type: `rule`,
        mode: parser.mode,
        shift: katexValue1156 && katexHelper13(katexValue1156, `size`).value,
        width: katexValue1157.value,
        height: katexValue1158.value,
      };
    },
    htmlBuilder(_katexT, katexParam178) {
      var katexValue1011 = katexValue108([`mord`, `rule`], [], katexParam178),
        katexValue1012 = katexValue45(_katexT.width, katexParam178),
        katexValue1013 = katexValue45(_katexT.height, katexParam178),
        katexValue1014 = _katexT.shift
          ? katexValue45(_katexT.shift, katexParam178)
          : 0;
      return (
        (katexValue1011.style.borderRightWidth = katexValue46(katexValue1012)),
        (katexValue1011.style.borderTopWidth = katexValue46(katexValue1013)),
        (katexValue1011.style.bottom = katexValue46(katexValue1014)),
        (katexValue1011.width = katexValue1012),
        (katexValue1011.height = katexValue1013 + katexValue1014),
        (katexValue1011.depth = -katexValue1014),
        (katexValue1011.maxFontSize =
          katexValue1013 * 1.125 * katexParam178.sizeMultiplier),
        katexValue1011
      );
    },
    mathmlBuilder(_katexT, katexParam118) {
      var katexValue879 = katexValue45(_katexT.width, katexParam118),
        katexValue880 = katexValue45(_katexT.height, katexParam118),
        katexValue881 = _katexT.shift
          ? katexValue45(_katexT.shift, katexParam118)
          : 0,
        katexValue882 =
          (katexParam118.color && katexParam118.getColor()) || `black`,
        katexValue883 = new katexValue141(`mspace`);
      (katexValue883.setAttribute(`mathbackground`, katexValue882),
        katexValue883.setAttribute(`width`, katexValue46(katexValue879)),
        katexValue883.setAttribute(`height`, katexValue46(katexValue880)));
      var katexValue884 = new katexValue141(`mpadded`, [katexValue883]);
      return (
        katexValue881 >= 0
          ? katexValue884.setAttribute(`height`, katexValue46(katexValue881))
          : (katexValue884.setAttribute(`height`, katexValue46(katexValue881)),
            katexValue884.setAttribute(`depth`, katexValue46(-katexValue881))),
        katexValue884.setAttribute(`voffset`, katexValue46(katexValue881)),
        katexValue884
      );
    },
  }));
function katexHelper27(_katexT, katexParam144, katexParam145) {
  for (
    var katexValue939 = katexValue135(_katexT, katexParam144, !1),
      katexValue940 =
        katexParam144.sizeMultiplier / katexParam145.sizeMultiplier,
      katexValue941 = 0;
    katexValue941 < katexValue939.length;
    katexValue941++
  ) {
    var katexValue942 = katexValue939[katexValue941].classes.indexOf(`sizing`);
    (katexValue942 < 0
      ? Array.prototype.push.apply(
          katexValue939[katexValue941].classes,
          katexParam144.sizingClasses(katexParam145),
        )
      : katexValue939[katexValue941].classes[katexValue942 + 1] ===
          `reset-size` + katexParam144.size &&
        (katexValue939[katexValue941].classes[katexValue942 + 1] =
          `reset-size` + katexParam145.size),
      (katexValue939[katexValue941].height *= katexValue940),
      (katexValue939[katexValue941].depth *= katexValue940));
  }
  return katexValue112(katexValue939);
}
var katexValue238 = [
  `\\tiny`,
  `\\sixptsize`,
  `\\scriptsize`,
  `\\footnotesize`,
  `\\small`,
  `\\normalsize`,
  `\\large`,
  `\\Large`,
  `\\LARGE`,
  `\\huge`,
  `\\Huge`,
];
(katexI({
  type: `sizing`,
  names: katexValue238,
  props: {
    numArgs: 0,
    allowedInText: !0,
  },
  handler: (_katexT, katexParam291) => {
    var {
        breakOnTokenText: breakOnTokenText,
        funcName: funcName,
        parser: parser,
      } = _katexT,
      katexValue1187 = parser.parseExpression(!1, breakOnTokenText);
    return {
      type: `sizing`,
      mode: parser.mode,
      size: katexValue238.indexOf(funcName) + 1,
      body: katexValue1187,
    };
  },
  htmlBuilder: (_katexT, katexParam407) => {
    var katexValue1274 = katexParam407.havingSize(_katexT.size);
    return katexHelper27(_katexT.body, katexValue1274, katexParam407);
  },
  mathmlBuilder: (_katexT, katexParam319) => {
    var katexValue1209 = katexParam319.havingSize(_katexT.size),
      katexValue1210 = new katexValue141(
        `mstyle`,
        katexValue149(_katexT.body, katexValue1209),
      );
    return (
      katexValue1210.setAttribute(
        `mathsize`,
        katexValue46(katexValue1209.sizeMultiplier),
      ),
      katexValue1210
    );
  },
}),
  katexI({
    type: `smash`,
    names: [`\\smash`],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
      allowedInText: !0,
    },
    handler: (_katexT, katexParam164, katexParam165) => {
      var { parser: parser } = _katexT,
        katexValue978 = !1,
        katexValue979 = !1,
        katexValue980 =
          katexParam165[0] && katexHelper13(katexParam165[0], `ordgroup`);
      if (katexValue980)
        for (
          var katexValue981 = ``, katexValue982 = 0;
          katexValue982 < katexValue980.body.length;
          ++katexValue982
        ) {
          var katexValue983 = katexValue980.body[katexValue982];
          if (
            ((katexValue981 = katexHelper14(katexValue983).text),
            katexValue981 === `t`)
          )
            katexValue978 = !0;
          else if (katexValue981 === `b`) katexValue979 = !0;
          else {
            ((katexValue978 = !1), (katexValue979 = !1));
            break;
          }
        }
      else ((katexValue978 = !0), (katexValue979 = !0));
      var _katexN = katexParam164[0];
      return {
        type: `smash`,
        mode: parser.mode,
        body: _katexN,
        smashHeight: katexValue978,
        smashDepth: katexValue979,
      };
    },
    htmlBuilder: (_katexT, katexParam111) => {
      var katexValue868 = katexValue108(
        [],
        [katexValue140(_katexT.body, katexParam111)],
      );
      if (!_katexT.smashHeight && !_katexT.smashDepth) return katexValue868;
      if (
        (_katexT.smashHeight && (katexValue868.height = 0),
        _katexT.smashDepth && (katexValue868.depth = 0),
        _katexT.smashHeight && _katexT.smashDepth)
      )
        return katexValue108([`mord`, `smash`], [katexValue868], katexParam111);
      if (katexValue868.children)
        for (
          var katexValue869 = 0;
          katexValue869 < katexValue868.children.length;
          katexValue869++
        )
          (_katexT.smashHeight &&
            (katexValue868.children[katexValue869].height = 0),
            _katexT.smashDepth &&
              (katexValue868.children[katexValue869].depth = 0));
      return katexValue108(
        [`mord`],
        [
          katexValue115({
            positionType: `firstBaseline`,
            children: [
              {
                type: `elem`,
                elem: katexValue868,
              },
            ],
          }),
        ],
        katexParam111,
      );
    },
    mathmlBuilder: (_katexT, katexParam289) => {
      var katexValue1182 = new katexValue141(`mpadded`, [
        katexValue151(_katexT.body, katexParam289),
      ]);
      return (
        _katexT.smashHeight && katexValue1182.setAttribute(`height`, `0px`),
        _katexT.smashDepth && katexValue1182.setAttribute(`depth`, `0px`),
        katexValue1182
      );
    },
  }),
  katexI({
    type: `sqrt`,
    names: [`\\sqrt`],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
    },
    handler(_katexT, katexParam352, katexParam353) {
      var { parser: parser } = _katexT,
        katexValue1247 = katexParam353[0],
        katexValue1248 = katexParam352[0];
      return {
        type: `sqrt`,
        mode: parser.mode,
        body: katexValue1248,
        index: katexValue1247,
      };
    },
    htmlBuilder(_katexT, katexParam40) {
      var katexValue618 = katexValue140(
        _katexT.body,
        katexParam40.havingCrampedStyle(),
      );
      (katexValue618.height === 0 &&
        (katexValue618.height = katexParam40.fontMetrics().xHeight),
        (katexValue618 = katexValue113(katexValue618, katexParam40)));
      var katexValue619 = katexParam40.fontMetrics().defaultRuleThickness,
        katexValue620 = katexValue619;
      katexParam40.style.id < katexValue27.TEXT.id &&
        (katexValue620 = katexParam40.fontMetrics().xHeight);
      var katexValue621 = katexValue619 + katexValue620 / 4,
        {
          span: span,
          ruleWidth: ruleWidth,
          advanceWidth: advanceWidth,
        } = katexValue195(
          katexValue618.height +
            katexValue618.depth +
            katexValue621 +
            katexValue619,
          katexParam40,
        ),
        katexValue622 = span.height - ruleWidth;
      katexValue622 >
        katexValue618.height + katexValue618.depth + katexValue621 &&
        (katexValue621 =
          (katexValue621 +
            katexValue622 -
            katexValue618.height -
            katexValue618.depth) /
          2);
      var _katexN =
        span.height - katexValue618.height - katexValue621 - ruleWidth;
      katexValue618.style.paddingLeft = katexValue46(advanceWidth);
      var katexValue623 = katexValue115({
        positionType: `firstBaseline`,
        children: [
          {
            type: `elem`,
            elem: katexValue618,
            wrapperClasses: [`svg-align`],
          },
          {
            type: `kern`,
            size: -(katexValue618.height + _katexN),
          },
          {
            type: `elem`,
            elem: span,
          },
          {
            type: `kern`,
            size: ruleWidth,
          },
        ],
      });
      if (_katexT.index) {
        var katexValue624 = katexParam40.havingStyle(katexValue27.SCRIPTSCRIPT),
          katexValue625 = katexValue140(
            _katexT.index,
            katexValue624,
            katexParam40,
          );
        return katexValue108(
          [`mord`, `sqrt`],
          [
            katexValue108(
              [`root`],
              [
                katexValue115({
                  positionType: `shift`,
                  positionData: -(
                    0.6 *
                    (katexValue623.height - katexValue623.depth)
                  ),
                  children: [
                    {
                      type: `elem`,
                      elem: katexValue625,
                    },
                  ],
                }),
              ],
            ),
            katexValue623,
          ],
          katexParam40,
        );
      } else
        return katexValue108([`mord`, `sqrt`], [katexValue623], katexParam40);
    },
    mathmlBuilder(_katexT, katexParam339) {
      var { body: body, index: index } = _katexT;
      return index
        ? new katexValue141(`mroot`, [
            katexValue151(body, katexParam339),
            katexValue151(index, katexParam339),
          ])
        : new katexValue141(`msqrt`, [katexValue151(body, katexParam339)]);
    },
  }));
var katexValue239 = {
  display: katexValue27.DISPLAY,
  text: katexValue27.TEXT,
  script: katexValue27.SCRIPT,
  scriptscript: katexValue27.SCRIPTSCRIPT,
};
katexI({
  type: `styling`,
  names: [
    `\\displaystyle`,
    `\\textstyle`,
    `\\scriptstyle`,
    `\\scriptscriptstyle`,
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0,
  },
  handler(_katexT, katexParam277) {
    var {
        breakOnTokenText: breakOnTokenText,
        funcName: funcName,
        parser: parser,
      } = _katexT,
      katexValue1161 = parser.parseExpression(!0, breakOnTokenText),
      katexValue1162 = funcName.slice(1, funcName.length - 5);
    return {
      type: `styling`,
      mode: parser.mode,
      style: katexValue1162,
      body: katexValue1161,
    };
  },
  htmlBuilder(_katexT, katexParam361) {
    var katexValue1251 = katexValue239[_katexT.style],
      katexValue1252 = katexParam361.havingStyle(katexValue1251).withFont(``);
    return katexHelper27(_katexT.body, katexValue1252, katexParam361);
  },
  mathmlBuilder(_katexT, katexParam174) {
    var katexValue1002 = katexValue239[_katexT.style],
      katexValue1003 = katexParam174.havingStyle(katexValue1002),
      katexValue1004 = new katexValue141(
        `mstyle`,
        katexValue149(_katexT.body, katexValue1003),
      ),
      katexValue1005 = {
        display: [`0`, `true`],
        text: [`0`, `false`],
        script: [`1`, `false`],
        scriptscript: [`2`, `false`],
      }[_katexT.style];
    return (
      katexValue1004.setAttribute(`scriptlevel`, katexValue1005[0]),
      katexValue1004.setAttribute(`displaystyle`, katexValue1005[1]),
      katexValue1004
    );
  },
});
var _i = function (_katexT, katexParam149) {
  var katexValue955 = _katexT.base;
  return katexValue955
    ? katexValue955.type === `op`
      ? katexValue955.limits &&
        (katexParam149.style.size === katexValue27.DISPLAY.size ||
          katexValue955.alwaysHandleSupSub)
        ? katexValue234
        : null
      : katexValue955.type === `operatorname`
        ? katexValue955.alwaysHandleSupSub &&
          (katexParam149.style.size === katexValue27.DISPLAY.size ||
            katexValue955.limits)
          ? katexValue237
          : null
        : katexValue955.type === `accent`
          ? katexValue8(katexValue955.base)
            ? katexValue166
            : null
          : katexValue955.type === `horizBrace` &&
              !_katexT.sub === katexValue955.isOver
            ? katexValue229
            : null
    : null;
};
(katexHelper8({
  type: `supsub`,
  htmlBuilder(_katexT, katexParam15) {
    var katexValue436 = _i(_katexT, katexParam15);
    if (katexValue436) return katexValue436(_katexT, katexParam15);
    var { base: base, sup: sup, sub: sub } = _katexT,
      katexValue437 = katexValue140(base, katexParam15),
      katexValue438,
      katexValue439,
      _katexN = katexParam15.fontMetrics(),
      katexValue440 = 0,
      katexValue441 = 0,
      katexValue442 = base && katexValue8(base);
    if (sup) {
      var katexValue443 = katexParam15.havingStyle(katexParam15.style.sup());
      ((katexValue438 = katexValue140(sup, katexValue443, katexParam15)),
        katexValue442 ||
          (katexValue440 =
            katexValue437.height -
            (katexValue443.fontMetrics().supDrop *
              katexValue443.sizeMultiplier) /
              katexParam15.sizeMultiplier));
    }
    if (sub) {
      var katexValue444 = katexParam15.havingStyle(katexParam15.style.sub());
      ((katexValue439 = katexValue140(sub, katexValue444, katexParam15)),
        katexValue442 ||
          (katexValue441 =
            katexValue437.depth +
            (katexValue444.fontMetrics().subDrop *
              katexValue444.sizeMultiplier) /
              katexParam15.sizeMultiplier));
    }
    var katexValue445 =
        katexParam15.style === katexValue27.DISPLAY
          ? _katexN.sup1
          : katexParam15.style.cramped
            ? _katexN.sup3
            : _katexN.sup2,
      katexValue446 = katexParam15.sizeMultiplier,
      katexValue447 = katexValue46(0.5 / _katexN.ptPerEm / katexValue446),
      katexValue448 = null;
    if (katexValue439) {
      var katexValue449 =
        _katexT.base &&
        _katexT.base.type === `op` &&
        _katexT.base.name &&
        (_katexT.base.name === `\\oiint` || _katexT.base.name === `\\oiiint`);
      (katexValue437 instanceof katexValue56 || katexValue449) &&
        (katexValue448 = katexValue46(-katexValue437.italic));
    }
    var katexValue450;
    if (katexValue438 && katexValue439) {
      ((katexValue440 = Math.max(
        katexValue440,
        katexValue445,
        katexValue438.depth + 0.25 * _katexN.xHeight,
      )),
        (katexValue441 = Math.max(katexValue441, _katexN.sub2)));
      var katexValue451 = 4 * _katexN.defaultRuleThickness;
      if (
        katexValue440 -
          katexValue438.depth -
          (katexValue439.height - katexValue441) <
        katexValue451
      ) {
        katexValue441 =
          katexValue451 -
          (katexValue440 - katexValue438.depth) +
          katexValue439.height;
        var katexValue452 =
          0.8 * _katexN.xHeight - (katexValue440 - katexValue438.depth);
        katexValue452 > 0 &&
          ((katexValue440 += katexValue452), (katexValue441 -= katexValue452));
      }
      katexValue450 = katexValue115({
        positionType: `individualShift`,
        children: [
          {
            type: `elem`,
            elem: katexValue439,
            shift: katexValue441,
            marginRight: katexValue447,
            marginLeft: katexValue448,
          },
          {
            type: `elem`,
            elem: katexValue438,
            shift: -katexValue440,
            marginRight: katexValue447,
          },
        ],
      });
    } else if (katexValue439)
      ((katexValue441 = Math.max(
        katexValue441,
        _katexN.sub1,
        katexValue439.height - 0.8 * _katexN.xHeight,
      )),
        (katexValue450 = katexValue115({
          positionType: `shift`,
          positionData: katexValue441,
          children: [
            {
              type: `elem`,
              elem: katexValue439,
              marginLeft: katexValue448,
              marginRight: katexValue447,
            },
          ],
        })));
    else if (katexValue438)
      ((katexValue440 = Math.max(
        katexValue440,
        katexValue445,
        katexValue438.depth + 0.25 * _katexN.xHeight,
      )),
        (katexValue450 = katexValue115({
          positionType: `shift`,
          positionData: -katexValue440,
          children: [
            {
              type: `elem`,
              elem: katexValue438,
              marginRight: katexValue447,
            },
          ],
        })));
    else throw Error(`supsub must have either sup or sub.`);
    return katexValue108(
      [katexValue138(katexValue437, `right`) || `mord`],
      [katexValue437, katexValue108([`msupsub`], [katexValue450])],
      katexParam15,
    );
  },
  mathmlBuilder(_katexT, katexParam34) {
    var katexValue565 = !1,
      katexValue566,
      katexValue567;
    (_katexT.base &&
      _katexT.base.type === `horizBrace` &&
      ((katexValue567 = !!_katexT.sup),
      katexValue567 === _katexT.base.isOver &&
        ((katexValue565 = !0), (katexValue566 = _katexT.base.isOver))),
      _katexT.base &&
        (_katexT.base.type === `op` || _katexT.base.type === `operatorname`) &&
        (_katexT.base.parentIsSupSub = !0));
    var katexValue568 = [katexValue151(_katexT.base, katexParam34)];
    (_katexT.sub &&
      katexValue568.push(katexValue151(_katexT.sub, katexParam34)),
      _katexT.sup &&
        katexValue568.push(katexValue151(_katexT.sup, katexParam34)));
    var katexValue569;
    if (katexValue565) katexValue569 = katexValue566 ? `mover` : `munder`;
    else if (!_katexT.sub) {
      var katexValue570 = _katexT.base;
      katexValue569 =
        (katexValue570 &&
          katexValue570.type === `op` &&
          katexValue570.limits &&
          (katexParam34.style === katexValue27.DISPLAY ||
            katexValue570.alwaysHandleSupSub)) ||
        (katexValue570 &&
          katexValue570.type === `operatorname` &&
          katexValue570.alwaysHandleSupSub &&
          (katexValue570.limits || katexParam34.style === katexValue27.DISPLAY))
          ? `mover`
          : `msup`;
    } else if (_katexT.sup) {
      var katexValue571 = _katexT.base;
      katexValue569 =
        (katexValue571 &&
          katexValue571.type === `op` &&
          katexValue571.limits &&
          katexParam34.style === katexValue27.DISPLAY) ||
        (katexValue571 &&
          katexValue571.type === `operatorname` &&
          katexValue571.alwaysHandleSupSub &&
          (katexParam34.style === katexValue27.DISPLAY || katexValue571.limits))
          ? `munderover`
          : `msubsup`;
    } else {
      var katexValue572 = _katexT.base;
      katexValue569 =
        (katexValue572 &&
          katexValue572.type === `op` &&
          katexValue572.limits &&
          (katexParam34.style === katexValue27.DISPLAY ||
            katexValue572.alwaysHandleSupSub)) ||
        (katexValue572 &&
          katexValue572.type === `operatorname` &&
          katexValue572.alwaysHandleSupSub &&
          (katexValue572.limits || katexParam34.style === katexValue27.DISPLAY))
          ? `munder`
          : `msub`;
    }
    return new katexValue141(katexValue569, katexValue568);
  },
}),
  katexHelper8({
    type: `atom`,
    htmlBuilder(_katexT, katexParam405) {
      return katexValue102(_katexT.text, _katexT.mode, katexParam405, [
        `m` + _katexT.family,
      ]);
    },
    mathmlBuilder(_katexT, katexParam166) {
      var katexValue984 = new katexValue141(`mo`, [
        katexValue146(_katexT.text, _katexT.mode),
      ]);
      if (_katexT.family === `bin`) {
        var katexValue985 = katexValue148(_katexT, katexParam166);
        katexValue985 === `bold-italic` &&
          katexValue984.setAttribute(`mathvariant`, katexValue985);
      } else
        _katexT.family === `punct`
          ? katexValue984.setAttribute(`separator`, `true`)
          : (_katexT.family === `open` || _katexT.family === `close`) &&
            katexValue984.setAttribute(`stretchy`, `false`);
      return katexValue984;
    },
  }));
var katexValue240 = {
  mi: `italic`,
  mn: `normal`,
  mtext: `normal`,
};
(katexHelper8({
  type: `mathord`,
  htmlBuilder(_katexT, katexParam442) {
    return katexValue104(_katexT, katexParam442, `mathord`);
  },
  mathmlBuilder(_katexT, katexParam296) {
    var katexValue1193 = new katexValue141(`mi`, [
        katexValue146(_katexT.text, _katexT.mode, katexParam296),
      ]),
      katexValue1194 = katexValue148(_katexT, katexParam296) || `italic`;
    return (
      katexValue1194 !== katexValue240[katexValue1193.type] &&
        katexValue1193.setAttribute(`mathvariant`, katexValue1194),
      katexValue1193
    );
  },
}),
  katexHelper8({
    type: `textord`,
    htmlBuilder(_katexT, katexParam443) {
      return katexValue104(_katexT, katexParam443, `textord`);
    },
    mathmlBuilder(_katexT, katexParam192) {
      var katexValue1040 = katexValue146(
          _katexT.text,
          _katexT.mode,
          katexParam192,
        ),
        katexValue1041 = katexValue148(_katexT, katexParam192) || `normal`,
        katexValue1042 =
          _katexT.mode === `text`
            ? new katexValue141(`mtext`, [katexValue1040])
            : /[0-9]/.test(_katexT.text)
              ? new katexValue141(`mn`, [katexValue1040])
              : _katexT.text === `\\prime`
                ? new katexValue141(`mo`, [katexValue1040])
                : new katexValue141(`mi`, [katexValue1040]);
      return (
        katexValue1041 !== katexValue240[katexValue1042.type] &&
          katexValue1042.setAttribute(`mathvariant`, katexValue1041),
        katexValue1042
      );
    },
  }));
var katexValue241 = {
    "\\nobreak": `nobreak`,
    "\\allowbreak": `allowbreak`,
  },
  katexValue242 = {
    " ": {},
    "\\ ": {},
    "~": {
      className: `nobreak`,
    },
    "\\space": {},
    "\\nobreakspace": {
      className: `nobreak`,
    },
  };
katexHelper8({
  type: `spacing`,
  htmlBuilder(katexParam140, katexParam141) {
    if (katexValue242.hasOwnProperty(katexParam140.text)) {
      var katexValue928 = katexValue242[katexParam140.text].className || ``;
      if (katexParam140.mode === `text`) {
        var katexValue929 = katexValue104(
          katexParam140,
          katexParam141,
          `textord`,
        );
        return (katexValue929.classes.push(katexValue928), katexValue929);
      } else
        return katexValue108(
          [`mspace`, katexValue928],
          [
            katexValue102(
              katexParam140.text,
              katexParam140.mode,
              katexParam141,
            ),
          ],
          katexParam141,
        );
    } else if (katexValue241.hasOwnProperty(katexParam140.text))
      return katexValue108(
        [`mspace`, katexValue241[katexParam140.text]],
        [],
        katexParam141,
      );
    else throw new katexT(`Unknown type of space "` + katexParam140.text + `"`);
  },
  mathmlBuilder(katexParam214, katexParam215) {
    var katexValue1084;
    if (katexValue242.hasOwnProperty(katexParam214.text))
      katexValue1084 = new katexValue141(`mtext`, [new katexValue142(`\xA0`)]);
    else if (katexValue241.hasOwnProperty(katexParam214.text))
      return new katexValue141(`mspace`);
    else throw new katexT(`Unknown type of space "` + katexParam214.text + `"`);
    return katexValue1084;
  },
});
var katexValue243 = () => {
  var _katexT = new katexValue141(`mtd`, []);
  return (_katexT.setAttribute(`width`, `50%`), _katexT);
};
katexHelper8({
  type: `tag`,
  mathmlBuilder(_katexT, katexParam269) {
    var katexValue1150 = new katexValue141(`mtable`, [
      new katexValue141(`mtr`, [
        katexValue243(),
        new katexValue141(`mtd`, [katexValue150(_katexT.body, katexParam269)]),
        katexValue243(),
        new katexValue141(`mtd`, [katexValue150(_katexT.tag, katexParam269)]),
      ]),
    ]);
    return (katexValue1150.setAttribute(`width`, `100%`), katexValue1150);
  },
});
var katexValue244 = {
    "\\text": void 0,
    "\\textrm": `textrm`,
    "\\textsf": `textsf`,
    "\\texttt": `texttt`,
    "\\textnormal": `textrm`,
  },
  katexValue245 = {
    "\\textbf": `textbf`,
    "\\textmd": `textmd`,
  },
  katexValue246 = {
    "\\textit": `textit`,
    "\\textup": `textup`,
  },
  katexValue247 = (_katexT, katexParam208) => {
    var katexValue1069 = _katexT.font;
    return katexValue1069
      ? katexValue244[katexValue1069]
        ? katexParam208.withTextFontFamily(katexValue244[katexValue1069])
        : katexValue245[katexValue1069]
          ? katexParam208.withTextFontWeight(katexValue245[katexValue1069])
          : katexValue1069 === `\\emph`
            ? katexParam208.fontShape === `textit`
              ? katexParam208.withTextFontShape(`textup`)
              : katexParam208.withTextFontShape(`textit`)
            : katexParam208.withTextFontShape(katexValue246[katexValue1069])
      : katexParam208;
  };
(katexI({
  type: `text`,
  names: [
    `\\text`,
    `\\textrm`,
    `\\textsf`,
    `\\texttt`,
    `\\textnormal`,
    `\\textbf`,
    `\\textmd`,
    `\\textit`,
    `\\textup`,
    `\\emph`,
  ],
  props: {
    numArgs: 1,
    argTypes: [`text`],
    allowedInArgument: !0,
    allowedInText: !0,
  },
  handler(_katexT, katexParam349) {
    var { parser: parser, funcName: funcName } = _katexT,
      katexValue1243 = katexParam349[0];
    return {
      type: `text`,
      mode: parser.mode,
      body: katexValue130(katexValue1243),
      font: funcName,
    };
  },
  htmlBuilder(_katexT, katexParam392) {
    var katexValue1269 = katexValue247(_katexT, katexParam392);
    return katexValue108(
      [`mord`, `text`],
      katexValue135(_katexT.body, katexValue1269, !0),
      katexValue1269,
    );
  },
  mathmlBuilder(_katexT, katexParam429) {
    var katexValue1282 = katexValue247(_katexT, katexParam429);
    return katexValue150(_katexT.body, katexValue1282);
  },
}),
  katexI({
    type: `underline`,
    names: [`\\underline`],
    props: {
      numArgs: 1,
      allowedInText: !0,
    },
    handler(_katexT, katexParam391) {
      var { parser: parser } = _katexT;
      return {
        type: `underline`,
        mode: parser.mode,
        body: katexParam391[0],
      };
    },
    htmlBuilder(_katexT, katexParam170) {
      var katexValue991 = katexValue140(_katexT.body, katexParam170),
        katexValue992 = katexValue110(`underline-line`, katexParam170),
        katexValue993 = katexParam170.fontMetrics().defaultRuleThickness;
      return katexValue108(
        [`mord`, `underline`],
        [
          katexValue115({
            positionType: `top`,
            positionData: katexValue991.height,
            children: [
              {
                type: `kern`,
                size: katexValue993,
              },
              {
                type: `elem`,
                elem: katexValue992,
              },
              {
                type: `kern`,
                size: 3 * katexValue993,
              },
              {
                type: `elem`,
                elem: katexValue991,
              },
            ],
          }),
        ],
        katexParam170,
      );
    },
    mathmlBuilder(_katexT, katexParam266) {
      var katexValue1141 = new katexValue141(`mo`, [new katexValue142(`‾`)]);
      katexValue1141.setAttribute(`stretchy`, `true`);
      var katexValue1142 = new katexValue141(`munder`, [
        katexValue151(_katexT.body, katexParam266),
        katexValue1141,
      ]);
      return (
        katexValue1142.setAttribute(`accentunder`, `true`),
        katexValue1142
      );
    },
  }),
  katexI({
    type: `vcenter`,
    names: [`\\vcenter`],
    props: {
      numArgs: 1,
      argTypes: [`original`],
      allowedInText: !1,
    },
    handler(_katexT, katexParam395) {
      var { parser: parser } = _katexT;
      return {
        type: `vcenter`,
        mode: parser.mode,
        body: katexParam395[0],
      };
    },
    htmlBuilder(_katexT, katexParam260) {
      var katexValue1137 = katexValue140(_katexT.body, katexParam260),
        katexValue1138 = katexParam260.fontMetrics().axisHeight;
      return katexValue115({
        positionType: `shift`,
        positionData:
          0.5 *
          (katexValue1137.height -
            katexValue1138 -
            (katexValue1137.depth + katexValue1138)),
        children: [
          {
            type: `elem`,
            elem: katexValue1137,
          },
        ],
      });
    },
    mathmlBuilder(_katexT, katexParam375) {
      return new katexValue141(`mrow`, [
        new katexValue141(
          `mpadded`,
          [katexValue151(_katexT.body, katexParam375)],
          [`vcenter`],
        ),
      ]);
    },
  }),
  katexI({
    type: `verb`,
    names: [`\\verb`],
    props: {
      numArgs: 0,
      allowedInText: !0,
    },
    handler(katexParam362, katexParam363, katexParam364) {
      throw new katexT(
        `\\verb ended by end of line instead of matching delimiter`,
      );
    },
    htmlBuilder(_katexT, katexParam185) {
      for (
        var katexValue1021 = katexValue248(_katexT),
          katexValue1022 = [],
          katexValue1023 = katexParam185.havingStyle(
            katexParam185.style.text(),
          ),
          katexValue1024 = 0;
        katexValue1024 < katexValue1021.length;
        katexValue1024++
      ) {
        var katexValue1025 = katexValue1021[katexValue1024];
        (katexValue1025 === `~` && (katexValue1025 = `\\textasciitilde`),
          katexValue1022.push(
            katexValue101(
              katexValue1025,
              `Typewriter-Regular`,
              _katexT.mode,
              katexValue1023,
              [`mord`, `texttt`],
            ),
          ));
      }
      return katexValue108(
        [`mord`, `text`].concat(katexValue1023.sizingClasses(katexParam185)),
        katexValue106(katexValue1022),
        katexValue1023,
      );
    },
    mathmlBuilder(_katexT, katexParam336) {
      var katexValue1231 = new katexValue141(`mtext`, [
        new katexValue142(katexValue248(_katexT)),
      ]);
      return (
        katexValue1231.setAttribute(`mathvariant`, `monospace`),
        katexValue1231
      );
    },
  }));
var katexValue248 = (_katexT) =>
    _katexT.body.replace(/ /g, _katexT.star ? `␣` : `\xA0`),
  katexValue249 = katexValue126,
  katexValue250 = `[ \r
	]`,
  katexValue251 = `\\\\[a-zA-Z@]+`,
  katexValue252 = `\\\\[^\ud800-\udfff]`,
  katexValue253 = `(` + katexValue251 + `)` + katexValue250 + `*`,
  katexValue254 = `\\\\(
|[ \r	]+
?)[ \r	]*`,
  katexValue255 = `[̀-ͯ]`,
  katexValue256 = RegExp(katexValue255 + `+$`),
  katexValue257 =
    `(` +
    katexValue250 +
    `+)|` +
    (katexValue254 + `|`) +
    `([!-\\[\\]-‧‪-퟿豈-￿]` +
    (katexValue255 + `*`) +
    `|[\ud800-\udbff][\udc00-\udfff]` +
    (katexValue255 + `*`) +
    `|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5` +
    (`|` + katexValue253) +
    (`|` + katexValue252 + `)`),
  katexValue258 = class {
    constructor(_katexT, katexParam328) {
      ((this.input = _katexT),
        (this.settings = katexParam328),
        (this.tokenRegex = new RegExp(katexValue257, `g`)),
        (this.catcodes = {
          "%": 14,
          "~": 13,
        }));
    }
    setCatcode(_katexT, katexParam454) {
      this.catcodes[_katexT] = katexParam454;
    }
    lex() {
      var katexValue700 = this.input,
        katexValue701 = this.tokenRegex.lastIndex;
      if (katexValue701 === katexValue700.length)
        return new katexValue214(
          `EOF`,
          new katexValue213(this, katexValue701, katexValue701),
        );
      var katexValue702 = this.tokenRegex.exec(katexValue700);
      if (katexValue702 === null || katexValue702.index !== katexValue701)
        throw new katexT(
          `Unexpected character: '` + katexValue700[katexValue701] + `'`,
          new katexValue214(
            katexValue700[katexValue701],
            new katexValue213(this, katexValue701, katexValue701 + 1),
          ),
        );
      var katexValue703 =
        katexValue702[6] ||
        katexValue702[3] ||
        (katexValue702[2] ? `\\ ` : ` `);
      if (this.catcodes[katexValue703] === 14) {
        var katexValue704 = katexValue700.indexOf(
          `
`,
          this.tokenRegex.lastIndex,
        );
        return (
          katexValue704 === -1
            ? ((this.tokenRegex.lastIndex = katexValue700.length),
              this.settings.reportNonstrict(
                `commentAtEnd`,
                `% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`,
              ))
            : (this.tokenRegex.lastIndex = katexValue704 + 1),
          this.lex()
        );
      }
      return new katexValue214(
        katexValue703,
        new katexValue213(this, katexValue701, this.tokenRegex.lastIndex),
      );
    }
  },
  katexValue259 = class {
    constructor(_katexT, katexParam340) {
      (_katexT === void 0 && (_katexT = {}),
        katexParam340 === void 0 && (katexParam340 = {}),
        (this.current = katexParam340),
        (this.builtins = _katexT),
        (this.undefStack = []));
    }
    beginGroup() {
      this.undefStack.push({});
    }
    endGroup() {
      if (this.undefStack.length === 0)
        throw new katexT(
          `Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`,
        );
      var katexValue1000 = this.undefStack.pop();
      for (var katexValue1001 in katexValue1000)
        katexValue1000.hasOwnProperty(katexValue1001) &&
          (katexValue1000[katexValue1001] == null
            ? delete this.current[katexValue1001]
            : (this.current[katexValue1001] = katexValue1000[katexValue1001]));
    }
    endGroups() {
      for (; this.undefStack.length > 0; ) this.endGroup();
    }
    has(_katexT) {
      return (
        this.current.hasOwnProperty(_katexT) ||
        this.builtins.hasOwnProperty(_katexT)
      );
    }
    get(_katexT) {
      return this.current.hasOwnProperty(_katexT)
        ? this.current[_katexT]
        : this.builtins[_katexT];
    }
    set(_katexT, katexParam135, katexParam136) {
      if ((katexParam136 === void 0 && (katexParam136 = !1), katexParam136)) {
        for (
          var katexValue917 = 0;
          katexValue917 < this.undefStack.length;
          katexValue917++
        )
          delete this.undefStack[katexValue917][_katexT];
        this.undefStack.length > 0 &&
          (this.undefStack[this.undefStack.length - 1][_katexT] =
            katexParam135);
      } else {
        var katexValue918 = this.undefStack[this.undefStack.length - 1];
        katexValue918 &&
          !katexValue918.hasOwnProperty(_katexT) &&
          (katexValue918[_katexT] = this.current[_katexT]);
      }
      katexParam135 == null
        ? delete this.current[_katexT]
        : (this.current[_katexT] = katexParam135);
    }
  },
  katexValue260 = katexValue212;
(katexA(`\\noexpand`, function (_katexT) {
  var katexValue1211 = _katexT.popToken();
  return (
    _katexT.isExpandable(katexValue1211.text) &&
      ((katexValue1211.noexpand = !0), (katexValue1211.treatAsRelax = !0)),
    {
      tokens: [katexValue1211],
      numArgs: 0,
    }
  );
}),
  katexA(`\\expandafter`, function (_katexT) {
    var katexValue1265 = _katexT.popToken();
    return (
      _katexT.expandOnce(!0),
      {
        tokens: [katexValue1265],
        numArgs: 0,
      }
    );
  }),
  katexA(`\\@firstoftwo`, function (_katexT) {
    return {
      tokens: _katexT.consumeArgs(2)[0],
      numArgs: 0,
    };
  }),
  katexA(`\\@secondoftwo`, function (_katexT) {
    return {
      tokens: _katexT.consumeArgs(2)[1],
      numArgs: 0,
    };
  }),
  katexA(`\\@ifnextchar`, function (_katexT) {
    var katexValue1148 = _katexT.consumeArgs(3);
    _katexT.consumeSpaces();
    var katexValue1149 = _katexT.future();
    return katexValue1148[0].length === 1 &&
      katexValue1148[0][0].text === katexValue1149.text
      ? {
          tokens: katexValue1148[1],
          numArgs: 0,
        }
      : {
          tokens: katexValue1148[2],
          numArgs: 0,
        };
  }),
  katexA(`\\@ifstar`, `\\@ifnextchar *{\\@firstoftwo{#1}}`),
  katexA(`\\TextOrMath`, function (_katexT) {
    var katexValue1232 = _katexT.consumeArgs(2);
    return _katexT.mode === `text`
      ? {
          tokens: katexValue1232[0],
          numArgs: 0,
        }
      : {
          tokens: katexValue1232[1],
          numArgs: 0,
        };
  }));
var katexValue261 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15,
};
katexA(`\\char`, function (katexParam92) {
  var katexValue818 = katexParam92.popToken(),
    katexValue819,
    katexValue820 = 0;
  if (katexValue818.text === `'`)
    ((katexValue819 = 8), (katexValue818 = katexParam92.popToken()));
  else if (katexValue818.text === `"`)
    ((katexValue819 = 16), (katexValue818 = katexParam92.popToken()));
  else if (katexValue818.text === "`") {
    if (
      ((katexValue818 = katexParam92.popToken()),
      katexValue818.text[0] === `\\`)
    )
      katexValue820 = katexValue818.text.charCodeAt(1);
    else if (katexValue818.text === `EOF`)
      throw new katexT("\\char` missing argument");
    else katexValue820 = katexValue818.text.charCodeAt(0);
  } else katexValue819 = 10;
  if (katexValue819) {
    if (
      ((katexValue820 = katexValue261[katexValue818.text]),
      katexValue820 == null || katexValue820 >= katexValue819)
    )
      throw new katexT(
        `Invalid base-` + katexValue819 + ` digit ` + katexValue818.text,
      );
    for (
      var katexValue821;
      (katexValue821 = katexValue261[katexParam92.future().text]) != null &&
      katexValue821 < katexValue819;

    )
      ((katexValue820 *= katexValue819),
        (katexValue820 += katexValue821),
        katexParam92.popToken());
  }
  return `\\@char{` + katexValue820 + `}`;
});
var katexValue262 = (
  katexParam51,
  katexParam52,
  katexParam53,
  katexParam54,
) => {
  var katexValue672 = katexParam51.consumeArg().tokens;
  if (katexValue672.length !== 1)
    throw new katexT(`\\newcommand's first argument must be a macro name`);
  var katexValue673 = katexValue672[0].text,
    katexValue674 = katexParam51.isDefined(katexValue673);
  if (katexValue674 && !katexParam52)
    throw new katexT(
      `\\newcommand{` +
        katexValue673 +
        `} attempting to redefine ` +
        (katexValue673 + `; use \\renewcommand`),
    );
  if (!katexValue674 && !katexParam53)
    throw new katexT(
      `\\renewcommand{` +
        katexValue673 +
        `} when command ` +
        katexValue673 +
        ` does not yet exist; use \\newcommand`,
    );
  var katexValue675 = 0;
  if (
    ((katexValue672 = katexParam51.consumeArg().tokens),
    katexValue672.length === 1 && katexValue672[0].text === `[`)
  ) {
    for (
      var katexValue676 = ``, _katexN = katexParam51.expandNextToken();
      _katexN.text !== `]` && _katexN.text !== `EOF`;

    )
      ((katexValue676 += _katexN.text),
        (_katexN = katexParam51.expandNextToken()));
    if (!katexValue676.match(/^\s*[0-9]+\s*$/))
      throw new katexT(`Invalid number of arguments: ` + katexValue676);
    ((katexValue675 = parseInt(katexValue676)),
      (katexValue672 = katexParam51.consumeArg().tokens));
  }
  return (
    (katexValue674 && katexParam54) ||
      katexParam51.macros.set(katexValue673, {
        tokens: katexValue672,
        numArgs: katexValue675,
      }),
    ``
  );
};
(katexA(`\\newcommand`, (_katexT) => katexValue262(_katexT, !1, !0, !1)),
  katexA(`\\renewcommand`, (_katexT) => katexValue262(_katexT, !0, !1, !1)),
  katexA(`\\providecommand`, (_katexT) => katexValue262(_katexT, !0, !0, !0)),
  katexA(`\\message`, (_katexT) => {
    var katexValue1253 = _katexT.consumeArgs(1)[0];
    return (
      console.log(
        katexValue1253
          .reverse()
          .map((__katexT) => __katexT.text)
          .join(``),
      ),
      ``
    );
  }),
  katexA(`\\errmessage`, (_katexT) => {
    var katexValue1249 = _katexT.consumeArgs(1)[0];
    return (
      console.error(
        katexValue1249
          .reverse()
          .map((__katexT) => __katexT.text)
          .join(``),
      ),
      ``
    );
  }),
  katexA(`\\show`, (_katexT) => {
    var katexValue1239 = _katexT.popToken(),
      katexValue1240 = katexValue1239.text;
    return (
      console.log(
        katexValue1239,
        _katexT.macros.get(katexValue1240),
        katexValue249[katexValue1240],
        katexValue67.math[katexValue1240],
        katexValue67.text[katexValue1240],
      ),
      ``
    );
  }),
  katexA(`\\bgroup`, `{`),
  katexA(`\\egroup`, `}`),
  katexA(`~`, `\\nobreakspace`),
  katexA(`\\lq`, "`"),
  katexA(`\\rq`, `'`),
  katexA(`\\aa`, `\\r a`),
  katexA(`\\AA`, `\\r A`),
  katexA(`\\textcopyright`, "\\html@mathml{\\textcircled{c}}{\\char`©}"),
  katexA(
    `\\copyright`,
    `\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`,
  ),
  katexA(
    `\\textregistered`,
    "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}",
  ),
  katexA(`ℬ`, `\\mathscr{B}`),
  katexA(`ℰ`, `\\mathscr{E}`),
  katexA(`ℱ`, `\\mathscr{F}`),
  katexA(`ℋ`, `\\mathscr{H}`),
  katexA(`ℐ`, `\\mathscr{I}`),
  katexA(`ℒ`, `\\mathscr{L}`),
  katexA(`ℳ`, `\\mathscr{M}`),
  katexA(`ℛ`, `\\mathscr{R}`),
  katexA(`ℭ`, `\\mathfrak{C}`),
  katexA(`ℌ`, `\\mathfrak{H}`),
  katexA(`ℨ`, `\\mathfrak{Z}`),
  katexA(`\\Bbbk`, `\\Bbb{k}`),
  katexA(`\\llap`, `\\mathllap{\\textrm{#1}}`),
  katexA(`\\rlap`, `\\mathrlap{\\textrm{#1}}`),
  katexA(`\\clap`, `\\mathclap{\\textrm{#1}}`),
  katexA(`\\mathstrut`, `\\vphantom{(}`),
  katexA(`\\underbar`, `\\underline{\\text{#1}}`),
  katexA(
    `\\not`,
    `\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`,
  ),
  katexA(`\\neq`, "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),
  katexA(`\\ne`, `\\neq`),
  katexA(`≠`, `\\neq`),
  katexA(
    `\\notin`,
    "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}",
  ),
  katexA(`∉`, `\\notin`),
  katexA(
    `≘`,
    "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}",
  ),
  katexA(
    `≙`,
    "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}",
  ),
  katexA(`≚`, "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),
  katexA(
    `≛`,
    "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}",
  ),
  katexA(
    `≝`,
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}",
  ),
  katexA(
    `≞`,
    "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}",
  ),
  katexA(`≟`, "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),
  katexA(`⟂`, `\\perp`),
  katexA(`‼`, `\\mathclose{!\\mkern-0.8mu!}`),
  katexA(`∌`, `\\notni`),
  katexA(`⌜`, `\\ulcorner`),
  katexA(`⌝`, `\\urcorner`),
  katexA(`⌞`, `\\llcorner`),
  katexA(`⌟`, `\\lrcorner`),
  katexA(`©`, `\\copyright`),
  katexA(`®`, `\\textregistered`),
  katexA(`\\ulcorner`, `\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`),
  katexA(`\\urcorner`, `\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`),
  katexA(`\\llcorner`, `\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`),
  katexA(`\\lrcorner`, `\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`),
  katexA(`\\vdots`, `{\\varvdots\\rule{0pt}{15pt}}`),
  katexA(`⋮`, `\\vdots`),
  katexA(`\\varGamma`, `\\mathit{\\Gamma}`),
  katexA(`\\varDelta`, `\\mathit{\\Delta}`),
  katexA(`\\varTheta`, `\\mathit{\\Theta}`),
  katexA(`\\varLambda`, `\\mathit{\\Lambda}`),
  katexA(`\\varXi`, `\\mathit{\\Xi}`),
  katexA(`\\varPi`, `\\mathit{\\Pi}`),
  katexA(`\\varSigma`, `\\mathit{\\Sigma}`),
  katexA(`\\varUpsilon`, `\\mathit{\\Upsilon}`),
  katexA(`\\varPhi`, `\\mathit{\\Phi}`),
  katexA(`\\varPsi`, `\\mathit{\\Psi}`),
  katexA(`\\varOmega`, `\\mathit{\\Omega}`),
  katexA(`\\substack`, `\\begin{subarray}{c}#1\\end{subarray}`),
  katexA(
    `\\colon`,
    `\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`,
  ),
  katexA(`\\boxed`, `\\fbox{$\\displaystyle{#1}$}`),
  katexA(`\\iff`, `\\DOTSB\\;\\Longleftrightarrow\\;`),
  katexA(`\\implies`, `\\DOTSB\\;\\Longrightarrow\\;`),
  katexA(`\\impliedby`, `\\DOTSB\\;\\Longleftarrow\\;`),
  katexA(`\\dddot`, `{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`),
  katexA(`\\ddddot`, `{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`));
var katexValue263 = {
    ",": `\\dotsc`,
    "\\not": `\\dotsb`,
    "+": `\\dotsb`,
    "=": `\\dotsb`,
    "<": `\\dotsb`,
    ">": `\\dotsb`,
    "-": `\\dotsb`,
    "*": `\\dotsb`,
    ":": `\\dotsb`,
    "\\DOTSB": `\\dotsb`,
    "\\coprod": `\\dotsb`,
    "\\bigvee": `\\dotsb`,
    "\\bigwedge": `\\dotsb`,
    "\\biguplus": `\\dotsb`,
    "\\bigcap": `\\dotsb`,
    "\\bigcup": `\\dotsb`,
    "\\prod": `\\dotsb`,
    "\\sum": `\\dotsb`,
    "\\bigotimes": `\\dotsb`,
    "\\bigoplus": `\\dotsb`,
    "\\bigodot": `\\dotsb`,
    "\\bigsqcup": `\\dotsb`,
    "\\And": `\\dotsb`,
    "\\longrightarrow": `\\dotsb`,
    "\\Longrightarrow": `\\dotsb`,
    "\\longleftarrow": `\\dotsb`,
    "\\Longleftarrow": `\\dotsb`,
    "\\longleftrightarrow": `\\dotsb`,
    "\\Longleftrightarrow": `\\dotsb`,
    "\\mapsto": `\\dotsb`,
    "\\longmapsto": `\\dotsb`,
    "\\hookrightarrow": `\\dotsb`,
    "\\doteq": `\\dotsb`,
    "\\mathbin": `\\dotsb`,
    "\\mathrel": `\\dotsb`,
    "\\relbar": `\\dotsb`,
    "\\Relbar": `\\dotsb`,
    "\\xrightarrow": `\\dotsb`,
    "\\xleftarrow": `\\dotsb`,
    "\\DOTSI": `\\dotsi`,
    "\\int": `\\dotsi`,
    "\\oint": `\\dotsi`,
    "\\iint": `\\dotsi`,
    "\\iiint": `\\dotsi`,
    "\\iiiint": `\\dotsi`,
    "\\idotsint": `\\dotsi`,
    "\\DOTSX": `\\dotsx`,
  },
  katexValue264 = new Set([`bin`, `rel`]);
katexA(`\\dots`, function (_katexT) {
  var katexValue1159 = `\\dotso`,
    katexValue1160 = _katexT.expandAfterFuture().text;
  return (
    katexValue1160 in katexValue263
      ? (katexValue1159 = katexValue263[katexValue1160])
      : (katexValue1160.slice(0, 4) === `\\not` ||
          (katexValue1160 in katexValue67.math &&
            katexValue264.has(katexValue67.math[katexValue1160].group))) &&
        (katexValue1159 = `\\dotsb`),
    katexValue1159
  );
});
var katexValue265 = {
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  $: !0,
  ";": !0,
  ".": !0,
  ",": !0,
};
(katexA(`\\dotso`, function (_katexT) {
  return _katexT.future().text in katexValue265 ? `\\ldots\\,` : `\\ldots`;
}),
  katexA(`\\dotsc`, function (_katexT) {
    var katexValue1263 = _katexT.future().text;
    return katexValue1263 in katexValue265 && katexValue1263 !== `,`
      ? `\\ldots\\,`
      : `\\ldots`;
  }),
  katexA(`\\cdots`, function (_katexT) {
    return _katexT.future().text in katexValue265 ? `\\@cdots\\,` : `\\@cdots`;
  }),
  katexA(`\\dotsb`, `\\cdots`),
  katexA(`\\dotsm`, `\\cdots`),
  katexA(`\\dotsi`, `\\!\\cdots`),
  katexA(`\\dotsx`, `\\ldots\\,`),
  katexA(`\\DOTSI`, `\\relax`),
  katexA(`\\DOTSB`, `\\relax`),
  katexA(`\\DOTSX`, `\\relax`),
  katexA(`\\tmspace`, `\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`),
  katexA(`\\,`, `\\tmspace+{3mu}{.1667em}`),
  katexA(`\\thinspace`, `\\,`),
  katexA(`\\>`, `\\mskip{4mu}`),
  katexA(`\\:`, `\\tmspace+{4mu}{.2222em}`),
  katexA(`\\medspace`, `\\:`),
  katexA(`\\;`, `\\tmspace+{5mu}{.2777em}`),
  katexA(`\\thickspace`, `\\;`),
  katexA(`\\!`, `\\tmspace-{3mu}{.1667em}`),
  katexA(`\\negthinspace`, `\\!`),
  katexA(`\\negmedspace`, `\\tmspace-{4mu}{.2222em}`),
  katexA(`\\negthickspace`, `\\tmspace-{5mu}{.277em}`),
  katexA(`\\enspace`, `\\kern.5em `),
  katexA(`\\enskip`, `\\hskip.5em\\relax`),
  katexA(`\\quad`, `\\hskip1em\\relax`),
  katexA(`\\qquad`, `\\hskip2em\\relax`),
  katexA(`\\tag`, `\\@ifstar\\tag@literal\\tag@paren`),
  katexA(`\\tag@paren`, `\\tag@literal{({#1})}`),
  katexA(`\\tag@literal`, (katexParam347) => {
    if (katexParam347.macros.get(`\\df@tag`))
      throw new katexT(`Multiple \\tag`);
    return `\\gdef\\df@tag{\\text{#1}}`;
  }),
  katexA(
    `\\bmod`,
    `\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`,
  ),
  katexA(
    `\\pod`,
    `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`,
  ),
  katexA(`\\pmod`, `\\pod{{\\rm mod}\\mkern6mu#1}`),
  katexA(
    `\\mod`,
    `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`,
  ),
  katexA(`\\newline`, `\\\\\\relax`),
  katexA(
    `\\TeX`,
    `\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`,
  ));
var katexValue266 = katexValue46(
  katexValue61[`Main-Regular`][84][1] -
    0.7 * katexValue61[`Main-Regular`][65][1],
);
(katexA(
  `\\LaTeX`,
  `\\textrm{\\html@mathml{` +
    (`L\\kern-.36em\\raisebox{` + katexValue266 + `}{\\scriptstyle A}`) +
    `\\kern-.15em\\TeX}{LaTeX}}`,
),
  katexA(
    `\\KaTeX`,
    `\\textrm{\\html@mathml{` +
      (`K\\kern-.17em\\raisebox{` + katexValue266 + `}{\\scriptstyle A}`) +
      `\\kern-.15em\\TeX}{KaTeX}}`,
  ),
  katexA(`\\hspace`, `\\@ifstar\\@hspacer\\@hspace`),
  katexA(`\\@hspace`, `\\hskip #1\\relax`),
  katexA(`\\@hspacer`, `\\rule{0pt}{0pt}\\hskip #1\\relax`),
  katexA(`\\ordinarycolon`, `:`),
  katexA(`\\vcentcolon`, `\\mathrel{\\mathop\\ordinarycolon}`),
  katexA(
    `\\dblcolon`,
    `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`,
  ),
  katexA(
    `\\coloneqq`,
    `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`,
  ),
  katexA(
    `\\Coloneqq`,
    `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`,
  ),
  katexA(
    `\\coloneq`,
    `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`,
  ),
  katexA(
    `\\Coloneq`,
    `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`,
  ),
  katexA(
    `\\eqqcolon`,
    `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`,
  ),
  katexA(
    `\\Eqqcolon`,
    `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`,
  ),
  katexA(
    `\\eqcolon`,
    `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`,
  ),
  katexA(
    `\\Eqcolon`,
    `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`,
  ),
  katexA(
    `\\colonapprox`,
    `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`,
  ),
  katexA(
    `\\Colonapprox`,
    `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`,
  ),
  katexA(
    `\\colonsim`,
    `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`,
  ),
  katexA(
    `\\Colonsim`,
    `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`,
  ),
  katexA(`∷`, `\\dblcolon`),
  katexA(`∹`, `\\eqcolon`),
  katexA(`≔`, `\\coloneqq`),
  katexA(`≕`, `\\eqqcolon`),
  katexA(`⩴`, `\\Coloneqq`),
  katexA(`\\ratio`, `\\vcentcolon`),
  katexA(`\\coloncolon`, `\\dblcolon`),
  katexA(`\\colonequals`, `\\coloneqq`),
  katexA(`\\coloncolonequals`, `\\Coloneqq`),
  katexA(`\\equalscolon`, `\\eqqcolon`),
  katexA(`\\equalscoloncolon`, `\\Eqqcolon`),
  katexA(`\\colonminus`, `\\coloneq`),
  katexA(`\\coloncolonminus`, `\\Coloneq`),
  katexA(`\\minuscolon`, `\\eqcolon`),
  katexA(`\\minuscoloncolon`, `\\Eqcolon`),
  katexA(`\\coloncolonapprox`, `\\Colonapprox`),
  katexA(`\\coloncolonsim`, `\\Colonsim`),
  katexA(`\\simcolon`, `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`),
  katexA(
    `\\simcoloncolon`,
    `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`,
  ),
  katexA(
    `\\approxcolon`,
    `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`,
  ),
  katexA(
    `\\approxcoloncolon`,
    `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`,
  ),
  katexA(`\\notni`, "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),
  katexA(`\\limsup`, `\\DOTSB\\operatorname*{lim\\,sup}`),
  katexA(`\\liminf`, `\\DOTSB\\operatorname*{lim\\,inf}`),
  katexA(`\\injlim`, `\\DOTSB\\operatorname*{inj\\,lim}`),
  katexA(`\\projlim`, `\\DOTSB\\operatorname*{proj\\,lim}`),
  katexA(`\\varlimsup`, `\\DOTSB\\operatorname*{\\overline{lim}}`),
  katexA(`\\varliminf`, `\\DOTSB\\operatorname*{\\underline{lim}}`),
  katexA(`\\varinjlim`, `\\DOTSB\\operatorname*{\\underrightarrow{lim}}`),
  katexA(`\\varprojlim`, `\\DOTSB\\operatorname*{\\underleftarrow{lim}}`),
  katexA(`\\gvertneqq`, `\\html@mathml{\\@gvertneqq}{≩}`),
  katexA(`\\lvertneqq`, `\\html@mathml{\\@lvertneqq}{≨}`),
  katexA(`\\ngeqq`, `\\html@mathml{\\@ngeqq}{≱}`),
  katexA(`\\ngeqslant`, `\\html@mathml{\\@ngeqslant}{≱}`),
  katexA(`\\nleqq`, `\\html@mathml{\\@nleqq}{≰}`),
  katexA(`\\nleqslant`, `\\html@mathml{\\@nleqslant}{≰}`),
  katexA(`\\nshortmid`, `\\html@mathml{\\@nshortmid}{∤}`),
  katexA(`\\nshortparallel`, `\\html@mathml{\\@nshortparallel}{∦}`),
  katexA(`\\nsubseteqq`, `\\html@mathml{\\@nsubseteqq}{⊈}`),
  katexA(`\\nsupseteqq`, `\\html@mathml{\\@nsupseteqq}{⊉}`),
  katexA(`\\varsubsetneq`, `\\html@mathml{\\@varsubsetneq}{⊊}`),
  katexA(`\\varsubsetneqq`, `\\html@mathml{\\@varsubsetneqq}{⫋}`),
  katexA(`\\varsupsetneq`, `\\html@mathml{\\@varsupsetneq}{⊋}`),
  katexA(`\\varsupsetneqq`, `\\html@mathml{\\@varsupsetneqq}{⫌}`),
  katexA(`\\imath`, `\\html@mathml{\\@imath}{ı}`),
  katexA(`\\jmath`, `\\html@mathml{\\@jmath}{ȷ}`),
  katexA(
    `\\llbracket`,
    "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}",
  ),
  katexA(
    `\\rrbracket`,
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}",
  ),
  katexA(`⟦`, `\\llbracket`),
  katexA(`⟧`, `\\rrbracket`),
  katexA(
    `\\lBrace`,
    "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}",
  ),
  katexA(
    `\\rBrace`,
    "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}",
  ),
  katexA(`⦃`, `\\lBrace`),
  katexA(`⦄`, `\\rBrace`),
  katexA(
    `\\minuso`,
    "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}",
  ),
  katexA(`⦵`, `\\minuso`),
  katexA(`\\darr`, `\\downarrow`),
  katexA(`\\dArr`, `\\Downarrow`),
  katexA(`\\Darr`, `\\Downarrow`),
  katexA(`\\lang`, `\\langle`),
  katexA(`\\rang`, `\\rangle`),
  katexA(`\\uarr`, `\\uparrow`),
  katexA(`\\uArr`, `\\Uparrow`),
  katexA(`\\Uarr`, `\\Uparrow`),
  katexA(`\\N`, `\\mathbb{N}`),
  katexA(`\\R`, `\\mathbb{R}`),
  katexA(`\\Z`, `\\mathbb{Z}`),
  katexA(`\\alef`, `\\aleph`),
  katexA(`\\alefsym`, `\\aleph`),
  katexA(`\\Alpha`, `\\mathrm{A}`),
  katexA(`\\Beta`, `\\mathrm{B}`),
  katexA(`\\bull`, `\\bullet`),
  katexA(`\\Chi`, `\\mathrm{X}`),
  katexA(`\\clubs`, `\\clubsuit`),
  katexA(`\\cnums`, `\\mathbb{C}`),
  katexA(`\\Complex`, `\\mathbb{C}`),
  katexA(`\\Dagger`, `\\ddagger`),
  katexA(`\\diamonds`, `\\diamondsuit`),
  katexA(`\\empty`, `\\emptyset`),
  katexA(`\\Epsilon`, `\\mathrm{E}`),
  katexA(`\\Eta`, `\\mathrm{H}`),
  katexA(`\\exist`, `\\exists`),
  katexA(`\\harr`, `\\leftrightarrow`),
  katexA(`\\hArr`, `\\Leftrightarrow`),
  katexA(`\\Harr`, `\\Leftrightarrow`),
  katexA(`\\hearts`, `\\heartsuit`),
  katexA(`\\image`, `\\Im`),
  katexA(`\\infin`, `\\infty`),
  katexA(`\\Iota`, `\\mathrm{I}`),
  katexA(`\\isin`, `\\in`),
  katexA(`\\Kappa`, `\\mathrm{K}`),
  katexA(`\\larr`, `\\leftarrow`),
  katexA(`\\lArr`, `\\Leftarrow`),
  katexA(`\\Larr`, `\\Leftarrow`),
  katexA(`\\lrarr`, `\\leftrightarrow`),
  katexA(`\\lrArr`, `\\Leftrightarrow`),
  katexA(`\\Lrarr`, `\\Leftrightarrow`),
  katexA(`\\Mu`, `\\mathrm{M}`),
  katexA(`\\natnums`, `\\mathbb{N}`),
  katexA(`\\Nu`, `\\mathrm{N}`),
  katexA(`\\Omicron`, `\\mathrm{O}`),
  katexA(`\\plusmn`, `\\pm`),
  katexA(`\\rarr`, `\\rightarrow`),
  katexA(`\\rArr`, `\\Rightarrow`),
  katexA(`\\Rarr`, `\\Rightarrow`),
  katexA(`\\real`, `\\Re`),
  katexA(`\\reals`, `\\mathbb{R}`),
  katexA(`\\Reals`, `\\mathbb{R}`),
  katexA(`\\Rho`, `\\mathrm{P}`),
  katexA(`\\sdot`, `\\cdot`),
  katexA(`\\sect`, `\\S`),
  katexA(`\\spades`, `\\spadesuit`),
  katexA(`\\sub`, `\\subset`),
  katexA(`\\sube`, `\\subseteq`),
  katexA(`\\supe`, `\\supseteq`),
  katexA(`\\Tau`, `\\mathrm{T}`),
  katexA(`\\thetasym`, `\\vartheta`),
  katexA(`\\weierp`, `\\wp`),
  katexA(`\\Zeta`, `\\mathrm{Z}`),
  katexA(`\\argmin`, `\\DOTSB\\operatorname*{arg\\,min}`),
  katexA(`\\argmax`, `\\DOTSB\\operatorname*{arg\\,max}`),
  katexA(`\\plim`, `\\DOTSB\\mathop{\\operatorname{plim}}\\limits`),
  katexA(`\\bra`, `\\mathinner{\\langle{#1}|}`),
  katexA(`\\ket`, `\\mathinner{|{#1}\\rangle}`),
  katexA(`\\braket`, `\\mathinner{\\langle{#1}\\rangle}`),
  katexA(`\\Bra`, `\\left\\langle#1\\right|`),
  katexA(`\\Ket`, `\\left|#1\\right\\rangle`));
var katexValue267 = (_katexT) => (katexParam77) => {
  var katexValue760 = katexParam77.consumeArg().tokens,
    katexValue761 = katexParam77.consumeArg().tokens,
    katexValue762 = katexParam77.consumeArg().tokens,
    katexValue763 = katexParam77.consumeArg().tokens,
    katexValue764 = katexParam77.macros.get(`|`),
    katexValue765 = katexParam77.macros.get(`\\|`);
  katexParam77.macros.beginGroup();
  var katexValue766 = (katexParam276) => (katexParam281) => {
    _katexT &&
      (katexParam281.macros.set(`|`, katexValue764),
      katexValue762.length && katexParam281.macros.set(`\\|`, katexValue765));
    var katexValue1166 = katexParam276;
    return (
      !katexParam276 &&
        katexValue762.length &&
        katexParam281.future().text === `|` &&
        (katexParam281.popToken(), (katexValue1166 = !0)),
      {
        tokens: katexValue1166 ? katexValue762 : katexValue761,
        numArgs: 0,
      }
    );
  };
  (katexParam77.macros.set(`|`, katexValue766(!1)),
    katexValue762.length && katexParam77.macros.set(`\\|`, katexValue766(!0)));
  var katexValue767 = katexParam77.consumeArg().tokens,
    _katexN = katexParam77.expandTokens([
      ...katexValue763,
      ...katexValue767,
      ...katexValue760,
    ]);
  return (
    katexParam77.macros.endGroup(),
    {
      tokens: _katexN.reverse(),
      numArgs: 0,
    }
  );
};
(katexA(`\\bra@ket`, katexValue267(!1)),
  katexA(`\\bra@set`, katexValue267(!0)),
  katexA(
    `\\Braket`,
    `\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`,
  ),
  katexA(
    `\\Set`,
    `\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`,
  ),
  katexA(`\\set`, `\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`),
  katexA(`\\angln`, `{\\angl n}`),
  katexA(`\\blue`, `\\textcolor{##6495ed}{#1}`),
  katexA(`\\orange`, `\\textcolor{##ffa500}{#1}`),
  katexA(`\\pink`, `\\textcolor{##ff00af}{#1}`),
  katexA(`\\red`, `\\textcolor{##df0030}{#1}`),
  katexA(`\\green`, `\\textcolor{##28ae7b}{#1}`),
  katexA(`\\gray`, `\\textcolor{gray}{#1}`),
  katexA(`\\purple`, `\\textcolor{##9d38bd}{#1}`),
  katexA(`\\blueA`, `\\textcolor{##ccfaff}{#1}`),
  katexA(`\\blueB`, `\\textcolor{##80f6ff}{#1}`),
  katexA(`\\blueC`, `\\textcolor{##63d9ea}{#1}`),
  katexA(`\\blueD`, `\\textcolor{##11accd}{#1}`),
  katexA(`\\blueE`, `\\textcolor{##0c7f99}{#1}`),
  katexA(`\\tealA`, `\\textcolor{##94fff5}{#1}`),
  katexA(`\\tealB`, `\\textcolor{##26edd5}{#1}`),
  katexA(`\\tealC`, `\\textcolor{##01d1c1}{#1}`),
  katexA(`\\tealD`, `\\textcolor{##01a995}{#1}`),
  katexA(`\\tealE`, `\\textcolor{##208170}{#1}`),
  katexA(`\\greenA`, `\\textcolor{##b6ffb0}{#1}`),
  katexA(`\\greenB`, `\\textcolor{##8af281}{#1}`),
  katexA(`\\greenC`, `\\textcolor{##74cf70}{#1}`),
  katexA(`\\greenD`, `\\textcolor{##1fab54}{#1}`),
  katexA(`\\greenE`, `\\textcolor{##0d923f}{#1}`),
  katexA(`\\goldA`, `\\textcolor{##ffd0a9}{#1}`),
  katexA(`\\goldB`, `\\textcolor{##ffbb71}{#1}`),
  katexA(`\\goldC`, `\\textcolor{##ff9c39}{#1}`),
  katexA(`\\goldD`, `\\textcolor{##e07d10}{#1}`),
  katexA(`\\goldE`, `\\textcolor{##a75a05}{#1}`),
  katexA(`\\redA`, `\\textcolor{##fca9a9}{#1}`),
  katexA(`\\redB`, `\\textcolor{##ff8482}{#1}`),
  katexA(`\\redC`, `\\textcolor{##f9685d}{#1}`),
  katexA(`\\redD`, `\\textcolor{##e84d39}{#1}`),
  katexA(`\\redE`, `\\textcolor{##bc2612}{#1}`),
  katexA(`\\maroonA`, `\\textcolor{##ffbde0}{#1}`),
  katexA(`\\maroonB`, `\\textcolor{##ff92c6}{#1}`),
  katexA(`\\maroonC`, `\\textcolor{##ed5fa6}{#1}`),
  katexA(`\\maroonD`, `\\textcolor{##ca337c}{#1}`),
  katexA(`\\maroonE`, `\\textcolor{##9e034e}{#1}`),
  katexA(`\\purpleA`, `\\textcolor{##ddd7ff}{#1}`),
  katexA(`\\purpleB`, `\\textcolor{##c6b9fc}{#1}`),
  katexA(`\\purpleC`, `\\textcolor{##aa87ff}{#1}`),
  katexA(`\\purpleD`, `\\textcolor{##7854ab}{#1}`),
  katexA(`\\purpleE`, `\\textcolor{##543b78}{#1}`),
  katexA(`\\mintA`, `\\textcolor{##f5f9e8}{#1}`),
  katexA(`\\mintB`, `\\textcolor{##edf2df}{#1}`),
  katexA(`\\mintC`, `\\textcolor{##e0e5cc}{#1}`),
  katexA(`\\grayA`, `\\textcolor{##f6f7f7}{#1}`),
  katexA(`\\grayB`, `\\textcolor{##f0f1f2}{#1}`),
  katexA(`\\grayC`, `\\textcolor{##e3e5e6}{#1}`),
  katexA(`\\grayD`, `\\textcolor{##d6d8da}{#1}`),
  katexA(`\\grayE`, `\\textcolor{##babec2}{#1}`),
  katexA(`\\grayF`, `\\textcolor{##888d93}{#1}`),
  katexA(`\\grayG`, `\\textcolor{##626569}{#1}`),
  katexA(`\\grayH`, `\\textcolor{##3b3e40}{#1}`),
  katexA(`\\grayI`, `\\textcolor{##21242c}{#1}`),
  katexA(`\\kaBlue`, `\\textcolor{##314453}{#1}`),
  katexA(`\\kaGreen`, `\\textcolor{##71B307}{#1}`));
var katexValue268 = {
    "^": !0,
    _: !0,
    "\\limits": !0,
    "\\nolimits": !0,
  },
  katexValue269 = class {
    constructor(_katexT, katexParam308, katexParam309) {
      ((this.settings = katexParam308),
        (this.expansionCount = 0),
        this.feed(_katexT),
        (this.macros = new katexValue259(katexValue260, katexParam308.macros)),
        (this.mode = katexParam309),
        (this.stack = []));
    }
    feed(_katexT) {
      this.lexer = new katexValue258(_katexT, this.settings);
    }
    switchMode(_katexT) {
      this.mode = _katexT;
    }
    beginGroup() {
      this.macros.beginGroup();
    }
    endGroup() {
      this.macros.endGroup();
    }
    endGroups() {
      this.macros.endGroups();
    }
    future() {
      return (
        this.stack.length === 0 && this.pushToken(this.lexer.lex()),
        this.stack[this.stack.length - 1]
      );
    }
    popToken() {
      return (this.future(), this.stack.pop());
    }
    pushToken(_katexT) {
      this.stack.push(_katexT);
    }
    pushTokens(_katexT) {
      this.stack.push(..._katexT);
    }
    scanArgument(_katexT) {
      var start, end, tokens;
      if (_katexT) {
        if ((this.consumeSpaces(), this.future().text !== `[`)) return null;
        ((start = this.popToken()),
          ({ tokens: tokens, end: end } = this.consumeArg([`]`])));
      } else ({ tokens: tokens, start: start, end: end } = this.consumeArg());
      return (
        this.pushToken(new katexValue214(`EOF`, end.loc)),
        this.pushTokens(tokens),
        new katexValue214(``, katexValue213.range(start, end))
      );
    }
    consumeSpaces() {
      for (; this.future().text === ` `; ) this.stack.pop();
    }
    consumeArg(katexParam73) {
      var katexValue743 = [],
        katexValue744 = katexParam73 && katexParam73.length > 0;
      katexValue744 || this.consumeSpaces();
      var katexValue745 = this.future(),
        katexValue746,
        katexValue747 = 0,
        katexValue748 = 0;
      do {
        if (
          ((katexValue746 = this.popToken()),
          katexValue743.push(katexValue746),
          katexValue746.text === `{`)
        )
          ++katexValue747;
        else if (katexValue746.text === `}`) {
          if ((--katexValue747, katexValue747 === -1))
            throw new katexT(`Extra }`, katexValue746);
        } else if (katexValue746.text === `EOF`)
          throw new katexT(
            `Unexpected end of input in a macro argument, expected '` +
              (katexParam73 && katexValue744
                ? katexParam73[katexValue748]
                : `}`) +
              `'`,
            katexValue746,
          );
        if (katexParam73 && katexValue744)
          if (
            (katexValue747 === 0 ||
              (katexValue747 === 1 && katexParam73[katexValue748] === `{`)) &&
            katexValue746.text === katexParam73[katexValue748]
          ) {
            if ((++katexValue748, katexValue748 === katexParam73.length)) {
              katexValue743.splice(-katexValue748, katexValue748);
              break;
            }
          } else katexValue748 = 0;
      } while (katexValue747 !== 0 || katexValue744);
      return (
        katexValue745.text === `{` &&
          katexValue743[katexValue743.length - 1].text === `}` &&
          (katexValue743.pop(), katexValue743.shift()),
        katexValue743.reverse(),
        {
          tokens: katexValue743,
          start: katexValue745,
          end: katexValue746,
        }
      );
    }
    consumeArgs(katexParam137, katexParam138) {
      if (katexParam138) {
        if (katexParam138.length !== katexParam137 + 1)
          throw new katexT(
            `The length of delimiters doesn't match the number of args!`,
          );
        for (
          var katexValue919 = katexParam138[0], katexValue920 = 0;
          katexValue920 < katexValue919.length;
          katexValue920++
        ) {
          var katexValue921 = this.popToken();
          if (katexValue919[katexValue920] !== katexValue921.text)
            throw new katexT(
              `Use of the macro doesn't match its definition`,
              katexValue921,
            );
        }
      }
      for (
        var katexValue922 = [], katexValue923 = 0;
        katexValue923 < katexParam137;
        katexValue923++
      )
        katexValue922.push(
          this.consumeArg(katexParam138 && katexParam138[katexValue923 + 1])
            .tokens,
        );
      return katexValue922;
    }
    countExpansion(katexParam242) {
      if (
        ((this.expansionCount += katexParam242),
        this.expansionCount > this.settings.maxExpand)
      )
        throw new katexT(
          `Too many expansions: infinite loop or need to increase maxExpand setting`,
        );
    }
    expandOnce(katexParam59) {
      var katexValue693 = this.popToken(),
        katexValue694 = katexValue693.text,
        katexValue695 = katexValue693.noexpand
          ? null
          : this._getExpansion(katexValue694);
      if (
        katexValue695 == null ||
        (katexParam59 && katexValue695.unexpandable)
      ) {
        if (
          katexParam59 &&
          katexValue695 == null &&
          katexValue694[0] === `\\` &&
          !this.isDefined(katexValue694)
        )
          throw new katexT(`Undefined control sequence: ` + katexValue694);
        return (this.pushToken(katexValue693), !1);
      }
      this.countExpansion(1);
      var katexValue696 = katexValue695.tokens,
        katexValue697 = this.consumeArgs(
          katexValue695.numArgs,
          katexValue695.delimiters,
        );
      if (katexValue695.numArgs) {
        katexValue696 = katexValue696.slice();
        for (
          var katexValue698 = katexValue696.length - 1;
          katexValue698 >= 0;
          --katexValue698
        ) {
          var katexValue699 = katexValue696[katexValue698];
          if (katexValue699.text === `#`) {
            if (katexValue698 === 0)
              throw new katexT(
                `Incomplete placeholder at end of macro body`,
                katexValue699,
              );
            if (
              ((katexValue699 = katexValue696[--katexValue698]),
              katexValue699.text === `#`)
            )
              katexValue696.splice(katexValue698 + 1, 1);
            else if (/^[1-9]$/.test(katexValue699.text))
              katexValue696.splice(
                katexValue698,
                2,
                ...katexValue697[katexValue699.text - 1],
              );
            else throw new katexT(`Not a valid argument number`, katexValue699);
          }
        }
      }
      return (this.pushTokens(katexValue696), katexValue696.length);
    }
    expandAfterFuture() {
      return (this.expandOnce(), this.future());
    }
    expandNextToken() {
      for (;;)
        if (this.expandOnce() === !1) {
          var _katexT = this.stack.pop();
          return (_katexT.treatAsRelax && (_katexT.text = `\\relax`), _katexT);
        }
    }
    expandMacro(_katexT) {
      return this.macros.has(_katexT)
        ? this.expandTokens([new katexValue214(_katexT)])
        : void 0;
    }
    expandTokens(_katexT) {
      var katexValue1064 = [],
        katexValue1065 = this.stack.length;
      for (this.pushTokens(_katexT); this.stack.length > katexValue1065; )
        if (this.expandOnce(!0) === !1) {
          var katexValue1066 = this.stack.pop();
          ((katexValue1066.treatAsRelax &&=
            ((katexValue1066.noexpand = !1), !1)),
            katexValue1064.push(katexValue1066));
        }
      return (this.countExpansion(katexValue1064.length), katexValue1064);
    }
    expandMacroAsText(_katexT) {
      var katexValue1259 = this.expandMacro(_katexT);
      return (
        katexValue1259 &&
        katexValue1259.map((__katexT) => __katexT.text).join(``)
      );
    }
    _getExpansion(_katexT) {
      var katexValue860 = this.macros.get(_katexT);
      if (katexValue860 == null) return katexValue860;
      if (_katexT.length === 1) {
        var katexValue861 = this.lexer.catcodes[_katexT];
        if (katexValue861 != null && katexValue861 !== 13) return;
      }
      var katexValue862 =
        typeof katexValue860 == `function`
          ? katexValue860(this)
          : katexValue860;
      if (typeof katexValue862 == `string`) {
        var katexValue863 = 0;
        if (katexValue862.includes(`#`))
          for (
            var katexValue864 = katexValue862.replace(/##/g, ``);
            katexValue864.includes(`#` + (katexValue863 + 1));

          )
            ++katexValue863;
        for (
          var katexValue865 = new katexValue258(katexValue862, this.settings),
            katexValue866 = [],
            katexValue867 = katexValue865.lex();
          katexValue867.text !== `EOF`;

        )
          (katexValue866.push(katexValue867),
            (katexValue867 = katexValue865.lex()));
        return (
          katexValue866.reverse(),
          {
            tokens: katexValue866,
            numArgs: katexValue863,
          }
        );
      }
      return katexValue862;
    }
    isDefined(_katexT) {
      return (
        this.macros.has(_katexT) ||
        katexValue249.hasOwnProperty(_katexT) ||
        katexValue67.math.hasOwnProperty(_katexT) ||
        katexValue67.text.hasOwnProperty(_katexT) ||
        katexValue268.hasOwnProperty(_katexT)
      );
    }
    isExpandable(_katexT) {
      var katexValue1172 = this.macros.get(_katexT);
      return katexValue1172 == null
        ? katexValue249.hasOwnProperty(_katexT) &&
            !katexValue249[_katexT].primitive
        : typeof katexValue1172 == `string` ||
            typeof katexValue1172 == `function` ||
            !katexValue1172.unexpandable;
    }
  },
  katexValue270 = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,
  katexValue271 = Object.freeze({
    "₊": `+`,
    "₋": `-`,
    "₌": `=`,
    "₍": `(`,
    "₎": `)`,
    "₀": `0`,
    "₁": `1`,
    "₂": `2`,
    "₃": `3`,
    "₄": `4`,
    "₅": `5`,
    "₆": `6`,
    "₇": `7`,
    "₈": `8`,
    "₉": `9`,
    ₐ: `a`,
    ₑ: `e`,
    ₕ: `h`,
    ᵢ: `i`,
    ⱼ: `j`,
    ₖ: `k`,
    ₗ: `l`,
    ₘ: `m`,
    ₙ: `n`,
    ₒ: `o`,
    ₚ: `p`,
    ᵣ: `r`,
    ₛ: `s`,
    ₜ: `t`,
    ᵤ: `u`,
    ᵥ: `v`,
    ₓ: `x`,
    ᵦ: `β`,
    ᵧ: `γ`,
    ᵨ: `ρ`,
    ᵩ: `ϕ`,
    ᵪ: `χ`,
    "⁺": `+`,
    "⁻": `-`,
    "⁼": `=`,
    "⁽": `(`,
    "⁾": `)`,
    "⁰": `0`,
    "¹": `1`,
    "²": `2`,
    "³": `3`,
    "⁴": `4`,
    "⁵": `5`,
    "⁶": `6`,
    "⁷": `7`,
    "⁸": `8`,
    "⁹": `9`,
    ᴬ: `A`,
    ᴮ: `B`,
    ᴰ: `D`,
    ᴱ: `E`,
    ᴳ: `G`,
    ᴴ: `H`,
    ᴵ: `I`,
    ᴶ: `J`,
    ᴷ: `K`,
    ᴸ: `L`,
    ᴹ: `M`,
    ᴺ: `N`,
    ᴼ: `O`,
    ᴾ: `P`,
    ᴿ: `R`,
    ᵀ: `T`,
    ᵁ: `U`,
    ⱽ: `V`,
    ᵂ: `W`,
    ᵃ: `a`,
    ᵇ: `b`,
    ᶜ: `c`,
    ᵈ: `d`,
    ᵉ: `e`,
    ᶠ: `f`,
    ᵍ: `g`,
    ʰ: `h`,
    ⁱ: `i`,
    ʲ: `j`,
    ᵏ: `k`,
    ˡ: `l`,
    ᵐ: `m`,
    ⁿ: `n`,
    ᵒ: `o`,
    ᵖ: `p`,
    ʳ: `r`,
    ˢ: `s`,
    ᵗ: `t`,
    ᵘ: `u`,
    ᵛ: `v`,
    ʷ: `w`,
    ˣ: `x`,
    ʸ: `y`,
    ᶻ: `z`,
    ᵝ: `β`,
    ᵞ: `γ`,
    ᵟ: `δ`,
    ᵠ: `ϕ`,
    ᵡ: `χ`,
    ᶿ: `θ`,
  }),
  katexValue272 = {
    "́": {
      text: `\\'`,
      math: `\\acute`,
    },
    "̀": {
      text: "\\`",
      math: `\\grave`,
    },
    "̈": {
      text: `\\"`,
      math: `\\ddot`,
    },
    "̃": {
      text: `\\~`,
      math: `\\tilde`,
    },
    "̄": {
      text: `\\=`,
      math: `\\bar`,
    },
    "̆": {
      text: `\\u`,
      math: `\\breve`,
    },
    "̌": {
      text: `\\v`,
      math: `\\check`,
    },
    "̂": {
      text: `\\^`,
      math: `\\hat`,
    },
    "̇": {
      text: `\\.`,
      math: `\\dot`,
    },
    "̊": {
      text: `\\r`,
      math: `\\mathring`,
    },
    "̋": {
      text: `\\H`,
    },
    "̧": {
      text: `\\c`,
    },
  },
  katexValue273 = {
    á: `á`,
    à: `à`,
    ä: `ä`,
    ǟ: `ǟ`,
    ã: `ã`,
    ā: `ā`,
    ă: `ă`,
    ắ: `ắ`,
    ằ: `ằ`,
    ẵ: `ẵ`,
    ǎ: `ǎ`,
    â: `â`,
    ấ: `ấ`,
    ầ: `ầ`,
    ẫ: `ẫ`,
    ȧ: `ȧ`,
    ǡ: `ǡ`,
    å: `å`,
    ǻ: `ǻ`,
    ḃ: `ḃ`,
    ć: `ć`,
    ḉ: `ḉ`,
    č: `č`,
    ĉ: `ĉ`,
    ċ: `ċ`,
    ç: `ç`,
    ď: `ď`,
    ḋ: `ḋ`,
    ḑ: `ḑ`,
    é: `é`,
    è: `è`,
    ë: `ë`,
    ẽ: `ẽ`,
    ē: `ē`,
    ḗ: `ḗ`,
    ḕ: `ḕ`,
    ĕ: `ĕ`,
    ḝ: `ḝ`,
    ě: `ě`,
    ê: `ê`,
    ế: `ế`,
    ề: `ề`,
    ễ: `ễ`,
    ė: `ė`,
    ȩ: `ȩ`,
    ḟ: `ḟ`,
    ǵ: `ǵ`,
    ḡ: `ḡ`,
    ğ: `ğ`,
    ǧ: `ǧ`,
    ĝ: `ĝ`,
    ġ: `ġ`,
    ģ: `ģ`,
    ḧ: `ḧ`,
    ȟ: `ȟ`,
    ĥ: `ĥ`,
    ḣ: `ḣ`,
    ḩ: `ḩ`,
    í: `í`,
    ì: `ì`,
    ï: `ï`,
    ḯ: `ḯ`,
    ĩ: `ĩ`,
    ī: `ī`,
    ĭ: `ĭ`,
    ǐ: `ǐ`,
    î: `î`,
    ǰ: `ǰ`,
    ĵ: `ĵ`,
    ḱ: `ḱ`,
    ǩ: `ǩ`,
    ķ: `ķ`,
    ĺ: `ĺ`,
    ľ: `ľ`,
    ļ: `ļ`,
    ḿ: `ḿ`,
    ṁ: `ṁ`,
    ń: `ń`,
    ǹ: `ǹ`,
    ñ: `ñ`,
    ň: `ň`,
    ṅ: `ṅ`,
    ņ: `ņ`,
    ó: `ó`,
    ò: `ò`,
    ö: `ö`,
    ȫ: `ȫ`,
    õ: `õ`,
    ṍ: `ṍ`,
    ṏ: `ṏ`,
    ȭ: `ȭ`,
    ō: `ō`,
    ṓ: `ṓ`,
    ṑ: `ṑ`,
    ŏ: `ŏ`,
    ǒ: `ǒ`,
    ô: `ô`,
    ố: `ố`,
    ồ: `ồ`,
    ỗ: `ỗ`,
    ȯ: `ȯ`,
    ȱ: `ȱ`,
    ő: `ő`,
    ṕ: `ṕ`,
    ṗ: `ṗ`,
    ŕ: `ŕ`,
    ř: `ř`,
    ṙ: `ṙ`,
    ŗ: `ŗ`,
    ś: `ś`,
    ṥ: `ṥ`,
    š: `š`,
    ṧ: `ṧ`,
    ŝ: `ŝ`,
    ṡ: `ṡ`,
    ş: `ş`,
    ẗ: `ẗ`,
    ť: `ť`,
    ṫ: `ṫ`,
    ţ: `ţ`,
    ú: `ú`,
    ù: `ù`,
    ü: `ü`,
    ǘ: `ǘ`,
    ǜ: `ǜ`,
    ǖ: `ǖ`,
    ǚ: `ǚ`,
    ũ: `ũ`,
    ṹ: `ṹ`,
    ū: `ū`,
    ṻ: `ṻ`,
    ŭ: `ŭ`,
    ǔ: `ǔ`,
    û: `û`,
    ů: `ů`,
    ű: `ű`,
    ṽ: `ṽ`,
    ẃ: `ẃ`,
    ẁ: `ẁ`,
    ẅ: `ẅ`,
    ŵ: `ŵ`,
    ẇ: `ẇ`,
    ẘ: `ẘ`,
    ẍ: `ẍ`,
    ẋ: `ẋ`,
    ý: `ý`,
    ỳ: `ỳ`,
    ÿ: `ÿ`,
    ỹ: `ỹ`,
    ȳ: `ȳ`,
    ŷ: `ŷ`,
    ẏ: `ẏ`,
    ẙ: `ẙ`,
    ź: `ź`,
    ž: `ž`,
    ẑ: `ẑ`,
    ż: `ż`,
    Á: `Á`,
    À: `À`,
    Ä: `Ä`,
    Ǟ: `Ǟ`,
    Ã: `Ã`,
    Ā: `Ā`,
    Ă: `Ă`,
    Ắ: `Ắ`,
    Ằ: `Ằ`,
    Ẵ: `Ẵ`,
    Ǎ: `Ǎ`,
    Â: `Â`,
    Ấ: `Ấ`,
    Ầ: `Ầ`,
    Ẫ: `Ẫ`,
    Ȧ: `Ȧ`,
    Ǡ: `Ǡ`,
    Å: `Å`,
    Ǻ: `Ǻ`,
    Ḃ: `Ḃ`,
    Ć: `Ć`,
    Ḉ: `Ḉ`,
    Č: `Č`,
    Ĉ: `Ĉ`,
    Ċ: `Ċ`,
    Ç: `Ç`,
    Ď: `Ď`,
    Ḋ: `Ḋ`,
    Ḑ: `Ḑ`,
    É: `É`,
    È: `È`,
    Ë: `Ë`,
    Ẽ: `Ẽ`,
    Ē: `Ē`,
    Ḗ: `Ḗ`,
    Ḕ: `Ḕ`,
    Ĕ: `Ĕ`,
    Ḝ: `Ḝ`,
    Ě: `Ě`,
    Ê: `Ê`,
    Ế: `Ế`,
    Ề: `Ề`,
    Ễ: `Ễ`,
    Ė: `Ė`,
    Ȩ: `Ȩ`,
    Ḟ: `Ḟ`,
    Ǵ: `Ǵ`,
    Ḡ: `Ḡ`,
    Ğ: `Ğ`,
    Ǧ: `Ǧ`,
    Ĝ: `Ĝ`,
    Ġ: `Ġ`,
    Ģ: `Ģ`,
    Ḧ: `Ḧ`,
    Ȟ: `Ȟ`,
    Ĥ: `Ĥ`,
    Ḣ: `Ḣ`,
    Ḩ: `Ḩ`,
    Í: `Í`,
    Ì: `Ì`,
    Ï: `Ï`,
    Ḯ: `Ḯ`,
    Ĩ: `Ĩ`,
    Ī: `Ī`,
    Ĭ: `Ĭ`,
    Ǐ: `Ǐ`,
    Î: `Î`,
    İ: `İ`,
    Ĵ: `Ĵ`,
    Ḱ: `Ḱ`,
    Ǩ: `Ǩ`,
    Ķ: `Ķ`,
    Ĺ: `Ĺ`,
    Ľ: `Ľ`,
    Ļ: `Ļ`,
    Ḿ: `Ḿ`,
    Ṁ: `Ṁ`,
    Ń: `Ń`,
    Ǹ: `Ǹ`,
    Ñ: `Ñ`,
    Ň: `Ň`,
    Ṅ: `Ṅ`,
    Ņ: `Ņ`,
    Ó: `Ó`,
    Ò: `Ò`,
    Ö: `Ö`,
    Ȫ: `Ȫ`,
    Õ: `Õ`,
    Ṍ: `Ṍ`,
    Ṏ: `Ṏ`,
    Ȭ: `Ȭ`,
    Ō: `Ō`,
    Ṓ: `Ṓ`,
    Ṑ: `Ṑ`,
    Ŏ: `Ŏ`,
    Ǒ: `Ǒ`,
    Ô: `Ô`,
    Ố: `Ố`,
    Ồ: `Ồ`,
    Ỗ: `Ỗ`,
    Ȯ: `Ȯ`,
    Ȱ: `Ȱ`,
    Ő: `Ő`,
    Ṕ: `Ṕ`,
    Ṗ: `Ṗ`,
    Ŕ: `Ŕ`,
    Ř: `Ř`,
    Ṙ: `Ṙ`,
    Ŗ: `Ŗ`,
    Ś: `Ś`,
    Ṥ: `Ṥ`,
    Š: `Š`,
    Ṧ: `Ṧ`,
    Ŝ: `Ŝ`,
    Ṡ: `Ṡ`,
    Ş: `Ş`,
    Ť: `Ť`,
    Ṫ: `Ṫ`,
    Ţ: `Ţ`,
    Ú: `Ú`,
    Ù: `Ù`,
    Ü: `Ü`,
    Ǘ: `Ǘ`,
    Ǜ: `Ǜ`,
    Ǖ: `Ǖ`,
    Ǚ: `Ǚ`,
    Ũ: `Ũ`,
    Ṹ: `Ṹ`,
    Ū: `Ū`,
    Ṻ: `Ṻ`,
    Ŭ: `Ŭ`,
    Ǔ: `Ǔ`,
    Û: `Û`,
    Ů: `Ů`,
    Ű: `Ű`,
    Ṽ: `Ṽ`,
    Ẃ: `Ẃ`,
    Ẁ: `Ẁ`,
    Ẅ: `Ẅ`,
    Ŵ: `Ŵ`,
    Ẇ: `Ẇ`,
    Ẍ: `Ẍ`,
    Ẋ: `Ẋ`,
    Ý: `Ý`,
    Ỳ: `Ỳ`,
    Ÿ: `Ÿ`,
    Ỹ: `Ỹ`,
    Ȳ: `Ȳ`,
    Ŷ: `Ŷ`,
    Ẏ: `Ẏ`,
    Ź: `Ź`,
    Ž: `Ž`,
    Ẑ: `Ẑ`,
    Ż: `Ż`,
    ά: `ά`,
    ὰ: `ὰ`,
    ᾱ: `ᾱ`,
    ᾰ: `ᾰ`,
    έ: `έ`,
    ὲ: `ὲ`,
    ή: `ή`,
    ὴ: `ὴ`,
    ί: `ί`,
    ὶ: `ὶ`,
    ϊ: `ϊ`,
    ΐ: `ΐ`,
    ῒ: `ῒ`,
    ῑ: `ῑ`,
    ῐ: `ῐ`,
    ό: `ό`,
    ὸ: `ὸ`,
    ύ: `ύ`,
    ὺ: `ὺ`,
    ϋ: `ϋ`,
    ΰ: `ΰ`,
    ῢ: `ῢ`,
    ῡ: `ῡ`,
    ῠ: `ῠ`,
    ώ: `ώ`,
    ὼ: `ὼ`,
    Ύ: `Ύ`,
    Ὺ: `Ὺ`,
    Ϋ: `Ϋ`,
    Ῡ: `Ῡ`,
    Ῠ: `Ῠ`,
    Ώ: `Ώ`,
    Ὼ: `Ὼ`,
  },
  katexValue274 = class KatexClass1 {
    constructor(_katexT, katexParam312) {
      ((this.mode = `math`),
        (this.gullet = new katexValue269(_katexT, katexParam312, this.mode)),
        (this.settings = katexParam312),
        (this.leftrightDepth = 0),
        (this.nextToken = null));
    }
    expect(katexParam284, katexParam285) {
      if (
        (katexParam285 === void 0 && (katexParam285 = !0),
        this.fetch().text !== katexParam284)
      )
        throw new katexT(
          `Expected '` + katexParam284 + `', got '` + this.fetch().text + `'`,
          this.fetch(),
        );
      katexParam285 && this.consume();
    }
    consume() {
      this.nextToken = null;
    }
    fetch() {
      return (
        (this.nextToken ??= this.gullet.expandNextToken()),
        this.nextToken
      );
    }
    switchMode(_katexT) {
      ((this.mode = _katexT), this.gullet.switchMode(_katexT));
    }
    parse() {
      (this.settings.globalGroup || this.gullet.beginGroup(),
        this.settings.colorIsTextColor &&
          this.gullet.macros.set(`\\color`, `\\textcolor`));
      try {
        var _katexT = this.parseExpression(!1);
        return (
          this.expect(`EOF`),
          this.settings.globalGroup || this.gullet.endGroup(),
          _katexT
        );
      } finally {
        this.gullet.endGroups();
      }
    }
    subparse(_katexT) {
      var katexValue1118 = this.nextToken;
      (this.consume(),
        this.gullet.pushToken(new katexValue214(`}`)),
        this.gullet.pushTokens(_katexT));
      var katexValue1119 = this.parseExpression(!1);
      return (
        this.expect(`}`),
        (this.nextToken = katexValue1118),
        katexValue1119
      );
    }
    parseExpression(_katexT, katexParam143) {
      for (var katexValue936 = []; ; ) {
        this.mode === `math` && this.consumeSpaces();
        var katexValue937 = this.fetch();
        if (
          KatexClass1.endOfExpression.has(katexValue937.text) ||
          (katexParam143 && katexValue937.text === katexParam143) ||
          (_katexT &&
            katexValue249[katexValue937.text] &&
            katexValue249[katexValue937.text].infix)
        )
          break;
        var katexValue938 = this.parseAtom(katexParam143);
        if (!katexValue938) break;
        katexValue938.type !== `internal` && katexValue936.push(katexValue938);
      }
      return (
        this.mode === `text` && this.formLigatures(katexValue936),
        this.handleInfixNodes(katexValue936)
      );
    }
    handleInfixNodes(katexParam81) {
      for (
        var katexValue784 = -1, katexValue785, katexValue786 = 0;
        katexValue786 < katexParam81.length;
        katexValue786++
      ) {
        var katexValue787 = katexParam81[katexValue786];
        if (katexValue787.type === `infix`) {
          if (katexValue784 !== -1)
            throw new katexT(
              `only one infix operator per group`,
              katexValue787.token,
            );
          ((katexValue784 = katexValue786),
            (katexValue785 = katexValue787.replaceWith));
        }
      }
      if (katexValue784 !== -1 && katexValue785) {
        var katexValue788,
          katexValue789,
          katexValue790 = katexParam81.slice(0, katexValue784),
          katexValue791 = katexParam81.slice(katexValue784 + 1);
        return (
          (katexValue788 =
            katexValue790.length === 1 && katexValue790[0].type === `ordgroup`
              ? katexValue790[0]
              : {
                  type: `ordgroup`,
                  mode: this.mode,
                  body: katexValue790,
                }),
          (katexValue789 =
            katexValue791.length === 1 && katexValue791[0].type === `ordgroup`
              ? katexValue791[0]
              : {
                  type: `ordgroup`,
                  mode: this.mode,
                  body: katexValue791,
                }),
          [
            katexValue785 === `\\\\abovefrac`
              ? this.callFunction(
                  katexValue785,
                  [katexValue788, katexParam81[katexValue784], katexValue789],
                  [],
                )
              : this.callFunction(
                  katexValue785,
                  [katexValue788, katexValue789],
                  [],
                ),
          ]
        );
      } else return katexParam81;
    }
    handleSupSubscript(katexParam219) {
      var katexValue1092 = this.fetch(),
        katexValue1093 = katexValue1092.text;
      (this.consume(), this.consumeSpaces());
      var katexValue1094;
      do katexValue1094 = this.parseGroup(katexParam219);
      while (katexValue1094?.type === `internal`);
      if (!katexValue1094)
        throw new katexT(
          `Expected group after '` + katexValue1093 + `'`,
          katexValue1092,
        );
      return katexValue1094;
    }
    formatUnsupportedCmd(_katexT) {
      for (
        var katexValue1078 = [], katexValue1079 = 0;
        katexValue1079 < _katexT.length;
        katexValue1079++
      )
        katexValue1078.push({
          type: `textord`,
          mode: `text`,
          text: _katexT[katexValue1079],
        });
      var katexValue1080 = {
        type: `text`,
        mode: this.mode,
        body: katexValue1078,
      };
      return {
        type: `color`,
        mode: this.mode,
        color: this.settings.errorColor,
        body: [katexValue1080],
      };
    }
    parseAtom(katexParam18) {
      var katexValue466 = this.parseGroup(`atom`, katexParam18);
      if (katexValue466?.type === `internal` || this.mode === `text`)
        return katexValue466;
      for (var katexValue467, katexValue468; ; ) {
        this.consumeSpaces();
        var katexValue469 = this.fetch();
        if (
          katexValue469.text === `\\limits` ||
          katexValue469.text === `\\nolimits`
        ) {
          if (katexValue466 && katexValue466.type === `op`)
            ((katexValue466.limits = katexValue469.text === `\\limits`),
              (katexValue466.alwaysHandleSupSub = !0));
          else if (katexValue466 && katexValue466.type === `operatorname`)
            katexValue466.alwaysHandleSupSub &&
              (katexValue466.limits = katexValue469.text === `\\limits`);
          else
            throw new katexT(
              `Limit controls must follow a math operator`,
              katexValue469,
            );
          this.consume();
        } else if (katexValue469.text === `^`) {
          if (katexValue467)
            throw new katexT(`Double superscript`, katexValue469);
          katexValue467 = this.handleSupSubscript(`superscript`);
        } else if (katexValue469.text === `_`) {
          if (katexValue468)
            throw new katexT(`Double subscript`, katexValue469);
          katexValue468 = this.handleSupSubscript(`subscript`);
        } else if (katexValue469.text === `'`) {
          if (katexValue467)
            throw new katexT(`Double superscript`, katexValue469);
          var katexValue470 = {
              type: `textord`,
              mode: this.mode,
              text: `\\prime`,
            },
            katexValue471 = [katexValue470];
          for (this.consume(); this.fetch().text === `'`; )
            (katexValue471.push(katexValue470), this.consume());
          (this.fetch().text === `^` &&
            katexValue471.push(this.handleSupSubscript(`superscript`)),
            (katexValue467 = {
              type: `ordgroup`,
              mode: this.mode,
              body: katexValue471,
            }));
        } else if (katexValue271[katexValue469.text]) {
          var katexValue472 = katexValue270.test(katexValue469.text),
            katexValue473 = [];
          for (
            katexValue473.push(
              new katexValue214(katexValue271[katexValue469.text]),
            ),
              this.consume();
            ;

          ) {
            var _katexN = this.fetch().text;
            if (
              !katexValue271[_katexN] ||
              katexValue270.test(_katexN) !== katexValue472
            )
              break;
            (katexValue473.unshift(new katexValue214(katexValue271[_katexN])),
              this.consume());
          }
          var katexValue474 = this.subparse(katexValue473);
          katexValue472
            ? (katexValue468 = {
                type: `ordgroup`,
                mode: `math`,
                body: katexValue474,
              })
            : (katexValue467 = {
                type: `ordgroup`,
                mode: `math`,
                body: katexValue474,
              });
        } else break;
      }
      return katexValue467 || katexValue468
        ? {
            type: `supsub`,
            mode: this.mode,
            base: katexValue466,
            sup: katexValue467,
            sub: katexValue468,
          }
        : katexValue466;
    }
    parseFunction(katexParam85, katexParam86) {
      var katexValue803 = this.fetch(),
        katexValue804 = katexValue803.text,
        katexValue805 = katexValue249[katexValue804];
      if (!katexValue805) return null;
      if (
        (this.consume(),
        katexParam86 &&
          katexParam86 !== `atom` &&
          !katexValue805.allowedInArgument)
      )
        throw new katexT(
          `Got function '` +
            katexValue804 +
            `' with no arguments` +
            (katexParam86 ? ` as ` + katexParam86 : ``),
          katexValue803,
        );
      if (this.mode === `text` && !katexValue805.allowedInText)
        throw new katexT(
          `Can't use function '` + katexValue804 + `' in text mode`,
          katexValue803,
        );
      if (this.mode === `math` && katexValue805.allowedInMath === !1)
        throw new katexT(
          `Can't use function '` + katexValue804 + `' in math mode`,
          katexValue803,
        );
      var { args: args, optArgs: optArgs } = this.parseArguments(
        katexValue804,
        katexValue805,
      );
      return this.callFunction(
        katexValue804,
        args,
        optArgs,
        katexValue803,
        katexParam85,
      );
    }
    callFunction(
      katexParam250,
      katexParam251,
      katexParam252,
      katexParam253,
      katexParam254,
    ) {
      var katexValue1133 = {
          funcName: katexParam250,
          parser: this,
          token: katexParam253,
          breakOnTokenText: katexParam254,
        },
        katexValue1134 = katexValue249[katexParam250];
      if (katexValue1134 && katexValue1134.handler)
        return katexValue1134.handler(
          katexValue1133,
          katexParam251,
          katexParam252,
        );
      throw new katexT(`No function handler for ` + katexParam250);
    }
    parseArguments(katexParam98, katexParam99) {
      var katexValue830 = katexParam99.numArgs + katexParam99.numOptionalArgs;
      if (katexValue830 === 0)
        return {
          args: [],
          optArgs: [],
        };
      for (
        var katexValue831 = [], katexValue832 = [], katexValue833 = 0;
        katexValue833 < katexValue830;
        katexValue833++
      ) {
        var katexValue834 =
            katexParam99.argTypes && katexParam99.argTypes[katexValue833],
          katexValue835 = katexValue833 < katexParam99.numOptionalArgs;
        ((`primitive` in katexParam99 &&
          katexParam99.primitive &&
          katexValue834 == null) ||
          (katexParam99.type === `sqrt` &&
            katexValue833 === 1 &&
            katexValue832[0] == null)) &&
          (katexValue834 = `primitive`);
        var katexValue836 = this.parseGroupOfType(
          `argument to '` + katexParam98 + `'`,
          katexValue834,
          katexValue835,
        );
        if (katexValue835) katexValue832.push(katexValue836);
        else if (katexValue836 != null) katexValue831.push(katexValue836);
        else throw new katexT(`Null argument, please report this as a bug`);
      }
      return {
        args: katexValue831,
        optArgs: katexValue832,
      };
    }
    parseGroupOfType(katexParam45, katexParam46, katexParam47) {
      switch (katexParam46) {
        case `color`:
          return this.parseColorGroup(katexParam47);
        case `size`:
          return this.parseSizeGroup(katexParam47);
        case `url`:
          return this.parseUrlGroup(katexParam47);
        case `math`:
        case `text`:
          return this.parseArgumentGroup(katexParam47, katexParam46);
        case `hbox`:
          var katexValue661 = this.parseArgumentGroup(katexParam47, `text`);
          return katexValue661 == null
            ? null
            : {
                type: `styling`,
                mode: katexValue661.mode,
                body: [katexValue661],
                style: `text`,
              };
        case `raw`:
          var katexValue662 = this.parseStringGroup(`raw`, katexParam47);
          return katexValue662 == null
            ? null
            : {
                type: `raw`,
                mode: `text`,
                string: katexValue662.text,
              };
        case `primitive`:
          if (katexParam47)
            throw new katexT(`A primitive argument cannot be optional`);
          var katexValue663 = this.parseGroup(katexParam45);
          if (katexValue663 == null)
            throw new katexT(`Expected group as ` + katexParam45, this.fetch());
          return katexValue663;
        case `original`:
        case null:
        case void 0:
          return this.parseArgumentGroup(katexParam47);
        default:
          throw new katexT(
            `Unknown group type as ` + katexParam45,
            this.fetch(),
          );
      }
    }
    consumeSpaces() {
      for (; this.fetch().text === ` `; ) this.consume();
    }
    parseStringGroup(_katexT, katexParam236) {
      var katexValue1120 = this.gullet.scanArgument(katexParam236);
      if (katexValue1120 == null) return null;
      for (
        var katexValue1121 = ``, katexValue1122;
        (katexValue1122 = this.fetch()).text !== `EOF`;

      )
        ((katexValue1121 += katexValue1122.text), this.consume());
      return (
        this.consume(),
        (katexValue1120.text = katexValue1121),
        katexValue1120
      );
    }
    parseRegexGroup(katexParam216, katexParam217) {
      for (
        var katexValue1085 = this.fetch(),
          katexValue1086 = katexValue1085,
          katexValue1087 = ``,
          katexValue1088;
        (katexValue1088 = this.fetch()).text !== `EOF` &&
        katexParam216.test(katexValue1087 + katexValue1088.text);

      )
        ((katexValue1086 = katexValue1088),
          (katexValue1087 += katexValue1086.text),
          this.consume());
      if (katexValue1087 === ``)
        throw new katexT(
          `Invalid ` + katexParam217 + `: '` + katexValue1085.text + `'`,
          katexValue1085,
        );
      return katexValue1085.range(katexValue1086, katexValue1087);
    }
    parseColorGroup(katexParam146) {
      var katexValue943 = this.parseStringGroup(`color`, katexParam146);
      if (katexValue943 == null) return null;
      var katexValue944 =
        /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(
          katexValue943.text,
        );
      if (!katexValue944)
        throw new katexT(
          `Invalid color: '` + katexValue943.text + `'`,
          katexValue943,
        );
      var katexValue945 = katexValue944[0];
      return (
        /^[0-9a-f]{6}$/i.test(katexValue945) &&
          (katexValue945 = `#` + katexValue945),
        {
          type: `color-token`,
          mode: this.mode,
          color: katexValue945,
        }
      );
    }
    parseSizeGroup(katexParam76) {
      var katexValue756,
        katexValue757 = !1;
      if (
        (this.gullet.consumeSpaces(),
        (katexValue756 =
          !katexParam76 && this.gullet.future().text !== `{`
            ? this.parseRegexGroup(
                /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                `size`,
              )
            : this.parseStringGroup(`size`, katexParam76)),
        !katexValue756)
      )
        return null;
      !katexParam76 &&
        katexValue756.text.length === 0 &&
        ((katexValue756.text = `0pt`), (katexValue757 = !0));
      var katexValue758 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
        katexValue756.text,
      );
      if (!katexValue758)
        throw new katexT(
          `Invalid size: '` + katexValue756.text + `'`,
          katexValue756,
        );
      var katexValue759 = {
        number: +(katexValue758[1] + katexValue758[2]),
        unit: katexValue758[3],
      };
      if (!katexValue44(katexValue759))
        throw new katexT(
          `Invalid unit: '` + katexValue759.unit + `'`,
          katexValue756,
        );
      return {
        type: `size`,
        mode: this.mode,
        value: katexValue759,
        isBlank: katexValue757,
      };
    }
    parseUrlGroup(_katexT) {
      (this.gullet.lexer.setCatcode(`%`, 13),
        this.gullet.lexer.setCatcode(`~`, 12));
      var katexValue946 = this.parseStringGroup(`url`, _katexT);
      if (
        (this.gullet.lexer.setCatcode(`%`, 14),
        this.gullet.lexer.setCatcode(`~`, 13),
        katexValue946 == null)
      )
        return null;
      var katexValue947 = katexValue946.text.replace(/\\([#$%&~_^{}])/g, `$1`);
      return {
        type: `url`,
        mode: this.mode,
        url: katexValue947,
      };
    }
    parseArgumentGroup(_katexT, katexParam148) {
      var katexValue951 = this.gullet.scanArgument(_katexT);
      if (katexValue951 == null) return null;
      var katexValue952 = this.mode;
      (katexParam148 && this.switchMode(katexParam148),
        this.gullet.beginGroup());
      var katexValue953 = this.parseExpression(!1, `EOF`);
      (this.expect(`EOF`), this.gullet.endGroup());
      var katexValue954 = {
        type: `ordgroup`,
        mode: this.mode,
        loc: katexValue951.loc,
        body: katexValue953,
      };
      return (katexParam148 && this.switchMode(katexValue952), katexValue954);
    }
    parseGroup(katexParam67, katexParam68) {
      var katexValue726 = this.fetch(),
        katexValue727 = katexValue726.text,
        katexValue728;
      if (katexValue727 === `{` || katexValue727 === `\\begingroup`) {
        this.consume();
        var katexValue729 = katexValue727 === `{` ? `}` : `\\endgroup`;
        this.gullet.beginGroup();
        var katexValue730 = this.parseExpression(!1, katexValue729),
          katexValue731 = this.fetch();
        (this.expect(katexValue729),
          this.gullet.endGroup(),
          (katexValue728 = {
            type: `ordgroup`,
            mode: this.mode,
            loc: katexValue213.range(katexValue726, katexValue731),
            body: katexValue730,
            semisimple: katexValue727 === `\\begingroup` || void 0,
          }));
      } else if (
        ((katexValue728 =
          this.parseFunction(katexParam68, katexParam67) || this.parseSymbol()),
        katexValue728 == null &&
          katexValue727[0] === `\\` &&
          !katexValue268.hasOwnProperty(katexValue727))
      ) {
        if (this.settings.throwOnError)
          throw new katexT(
            `Undefined control sequence: ` + katexValue727,
            katexValue726,
          );
        ((katexValue728 = this.formatUnsupportedCmd(katexValue727)),
          this.consume());
      }
      return katexValue728;
    }
    formLigatures(_katexT) {
      for (
        var katexValue795 = _katexT.length - 1, katexValue796 = 0;
        katexValue796 < katexValue795;
        ++katexValue796
      ) {
        var katexValue797 = _katexT[katexValue796];
        if (katexValue797.type === `textord`) {
          var katexValue798 = katexValue797.text,
            katexValue799 = _katexT[katexValue796 + 1];
          if (!(!katexValue799 || katexValue799.type !== `textord`)) {
            if (katexValue798 === `-` && katexValue799.text === `-`) {
              var katexValue800 = _katexT[katexValue796 + 2];
              katexValue796 + 1 < katexValue795 &&
              katexValue800 &&
              katexValue800.type === `textord` &&
              katexValue800.text === `-`
                ? (_katexT.splice(katexValue796, 3, {
                    type: `textord`,
                    mode: `text`,
                    loc: katexValue213.range(katexValue797, katexValue800),
                    text: `---`,
                  }),
                  (katexValue795 -= 2))
                : (_katexT.splice(katexValue796, 2, {
                    type: `textord`,
                    mode: `text`,
                    loc: katexValue213.range(katexValue797, katexValue799),
                    text: `--`,
                  }),
                  --katexValue795);
            }
            (katexValue798 === `'` || katexValue798 === "`") &&
              katexValue799.text === katexValue798 &&
              (_katexT.splice(katexValue796, 2, {
                type: `textord`,
                mode: `text`,
                loc: katexValue213.range(katexValue797, katexValue799),
                text: katexValue798 + katexValue798,
              }),
              --katexValue795);
          }
        }
      }
    }
    parseSymbol() {
      var katexValue356 = this.fetch(),
        katexValue357 = katexValue356.text;
      if (/^\\verb[^a-zA-Z]/.test(katexValue357)) {
        this.consume();
        var katexValue358 = katexValue357.slice(5),
          katexValue359 = katexValue358.charAt(0) === `*`;
        if (
          (katexValue359 && (katexValue358 = katexValue358.slice(1)),
          katexValue358.length < 2 ||
            katexValue358.charAt(0) !== katexValue358.slice(-1))
        )
          throw new katexT(`\\verb assertion failed --
                    please report what input caused this bug`);
        return (
          (katexValue358 = katexValue358.slice(1, -1)),
          {
            type: `verb`,
            mode: `text`,
            body: katexValue358,
            star: katexValue359,
          }
        );
      }
      katexValue273.hasOwnProperty(katexValue357[0]) &&
        !katexValue67[this.mode][katexValue357[0]] &&
        (this.settings.strict &&
          this.mode === `math` &&
          this.settings.reportNonstrict(
            `unicodeTextInMathMode`,
            `Accented Unicode text character "` +
              katexValue357[0] +
              `" used in math mode`,
            katexValue356,
          ),
        (katexValue357 =
          katexValue273[katexValue357[0]] + katexValue357.slice(1)));
      var katexValue360 = katexValue256.exec(katexValue357);
      katexValue360 &&
        ((katexValue357 = katexValue357.substring(0, katexValue360.index)),
        katexValue357 === `i`
          ? (katexValue357 = `ı`)
          : katexValue357 === `j` && (katexValue357 = `ȷ`));
      var katexValue361;
      if (katexValue67[this.mode][katexValue357]) {
        this.settings.strict &&
          this.mode === `math` &&
          katexValue95.includes(katexValue357) &&
          this.settings.reportNonstrict(
            `unicodeTextInMathMode`,
            `Latin-1/Unicode text character "` +
              katexValue357[0] +
              `" used in math mode`,
            katexValue356,
          );
        var katexValue362 = katexValue67[this.mode][katexValue357].group,
          katexValue363 = katexValue213.range(katexValue356),
          katexValue364;
        if (katexValue65.hasOwnProperty(katexValue362)) {
          var _katexN = katexValue362;
          katexValue364 = {
            type: `atom`,
            mode: this.mode,
            family: _katexN,
            loc: katexValue363,
            text: katexValue357,
          };
        } else
          katexValue364 = {
            type: katexValue362,
            mode: this.mode,
            loc: katexValue363,
            text: katexValue357,
          };
        katexValue361 = katexValue364;
      } else if (katexValue357.charCodeAt(0) >= 128)
        (this.settings.strict &&
          (katexHelper3(katexValue357.charCodeAt(0))
            ? this.mode === `math` &&
              this.settings.reportNonstrict(
                `unicodeTextInMathMode`,
                `Unicode text character "` +
                  katexValue357[0] +
                  `" used in math mode`,
                katexValue356,
              )
            : this.settings.reportNonstrict(
                `unknownSymbol`,
                `Unrecognized Unicode character "` +
                  katexValue357[0] +
                  `"` +
                  (` (` + katexValue357.charCodeAt(0) + `)`),
                katexValue356,
              )),
          (katexValue361 = {
            type: `textord`,
            mode: `text`,
            loc: katexValue213.range(katexValue356),
            text: katexValue357,
          }));
      else return null;
      if ((this.consume(), katexValue360))
        for (
          var katexValue365 = 0;
          katexValue365 < katexValue360[0].length;
          katexValue365++
        ) {
          var katexValue366 = katexValue360[0][katexValue365];
          if (!katexValue272[katexValue366])
            throw new katexT(
              `Unknown accent ' ` + katexValue366 + `'`,
              katexValue356,
            );
          var katexValue367 =
            katexValue272[katexValue366][this.mode] ||
            katexValue272[katexValue366].text;
          if (!katexValue367)
            throw new katexT(
              `Accent ` +
                katexValue366 +
                ` unsupported in ` +
                this.mode +
                ` mode`,
              katexValue356,
            );
          katexValue361 = {
            type: `accent`,
            mode: this.mode,
            loc: katexValue213.range(katexValue356),
            label: katexValue367,
            isStretchy: !1,
            isShifty: !0,
            base: katexValue361,
          };
        }
      return katexValue361;
    }
  };
katexValue274.endOfExpression = new Set([
  `}`,
  `\\endgroup`,
  `\\end`,
  `\\right`,
  `&`,
]);
var $i = function (katexParam83, katexParam84) {
    if (!(typeof katexParam83 == `string` || katexParam83 instanceof String))
      throw TypeError(`KaTeX can only parse string typed expression`);
    var katexValue801 = new katexValue274(katexParam83, katexParam84);
    delete katexValue801.gullet.macros.current[`\\df@tag`];
    var katexValue802 = katexValue801.parse();
    if (
      (delete katexValue801.gullet.macros.current[`\\current@color`],
      delete katexValue801.gullet.macros.current[`\\color`],
      katexValue801.gullet.macros.get(`\\df@tag`))
    ) {
      if (!katexParam84.displayMode)
        throw new katexT(`\\tag works only in display equations`);
      katexValue802 = [
        {
          type: `tag`,
          mode: `text`,
          body: katexValue802,
          tag: katexValue801.subparse([new katexValue214(`\\df@tag`)]),
        },
      ];
    }
    return katexValue802;
  },
  katexL = function (_katexT, katexParam397, katexParam398) {
    katexParam397.textContent = ``;
    var katexValue1271 = katexU(_katexT, katexParam398).toNode();
    katexParam397.appendChild(katexValue1271);
  };
typeof document < `u` &&
  document.compatMode !== `CSS1Compat` &&
  (typeof console < `u` &&
    console.warn(
      `Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`,
    ),
  (katexL = function () {
    throw new katexT(`KaTeX doesn't work in quirks mode.`);
  }));
var katexF = function (_katexT, katexParam446) {
    return katexU(_katexT, katexParam446).toMarkup();
  },
  katexS = function (_katexT, katexParam453) {
    return $i(_katexT, new katexValue10(katexParam453));
  },
  katexValue275 = function (katexParam226, katexParam227, katexParam228) {
    if (katexParam228.throwOnError || !(katexParam226 instanceof katexT))
      throw katexParam226;
    var katexValue1109 = katexValue108(
      [`katex-error`],
      [new katexValue56(katexParam227)],
    );
    return (
      katexValue1109.setAttribute(`title`, katexParam226.toString()),
      katexValue1109.setAttribute(`style`, `color:` + katexParam228.errorColor),
      katexValue1109
    );
  },
  katexU = function (_katexT, katexParam383) {
    var katexValue1260 = new katexValue10(katexParam383);
    try {
      return katexValue157(
        $i(_katexT, katexValue1260),
        _katexT,
        katexValue1260,
      );
    } catch (katexValue1284) {
      return katexValue275(katexValue1284, _katexT, katexValue1260);
    }
  },
  katexD = function (_katexT, katexParam384) {
    var katexValue1261 = new katexValue10(katexParam384);
    try {
      return katexValue158(
        $i(_katexT, katexValue1261),
        _katexT,
        katexValue1261,
      );
    } catch (katexValue1285) {
      return katexValue275(katexValue1285, _katexT, katexValue1261);
    }
  },
  katexM = `0.16.45`,
  katexR = {
    Span: katexValue52,
    Anchor: katexValue53,
    SymbolNode: katexValue56,
    SvgNode: katexValue57,
    PathNode: katexValue58,
    LineNode: katexValue59,
  };
export const katexC = {
  version: katexM,
  render: katexL,
  renderToString: katexF,
  ParseError: katexT,
  SETTINGS_SCHEMA: katexN,
  __parse: katexS,
  __renderToDomTree: katexU,
  __renderToHTMLTree: katexD,
  __setFontMetrics: katexP,
  __defineSymbol: katexO,
  __defineFunction: katexI,
  __defineMacro: katexA,
  __domTree: katexR,
};
export {
  katexA,
  katexD,
  katexF,
  katexI,
  katexL,
  katexM,
  katexN,
  katexO,
  katexP,
  katexR,
  katexS,
  katexT,
  katexU,
};
