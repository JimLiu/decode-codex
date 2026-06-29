// Restored from ref/webview/assets/defaultLocale-I5DW1pOv.js
// DefaultLocale chunk restored from the Codex webview bundle.
function defaultLocaleHelper1(defaultLocaleParam16) {
  return Math.abs((defaultLocaleParam16 = Math.round(defaultLocaleParam16))) >=
    1e21
    ? defaultLocaleParam16.toLocaleString("en").replace(/,/g, "")
    : defaultLocaleParam16.toString(10);
}
function defaultLocaleHelper2(defaultLocaleParam14, defaultLocaleParam15) {
  if (
    (_defaultLocaleA = (defaultLocaleParam14 = defaultLocaleParam15
      ? defaultLocaleParam14.toExponential(defaultLocaleParam15 - 1)
      : defaultLocaleParam14.toExponential()).indexOf("e")) < 0
  )
    return null;
  var _defaultLocaleA,
    defaultLocaleValue50 = defaultLocaleParam14.slice(0, _defaultLocaleA);
  return [
    defaultLocaleValue50.length > 1
      ? defaultLocaleValue50[0] + defaultLocaleValue50.slice(2)
      : defaultLocaleValue50,
    +defaultLocaleParam14.slice(_defaultLocaleA + 1),
  ];
}
function defaultLocaleA(defaultLocaleParam20) {
  return (
    (defaultLocaleParam20 = defaultLocaleHelper2(
      Math.abs(defaultLocaleParam20),
    )),
    defaultLocaleParam20 ? defaultLocaleParam20[1] : NaN
  );
}
function defaultLocaleHelper3(defaultLocaleParam7, defaultLocaleParam8) {
  return function (_defaultLocaleA, defaultLocaleParam9) {
    for (
      var defaultLocaleValue38 = _defaultLocaleA.length,
        defaultLocaleValue39 = [],
        _defaultLocaleI = 0,
        defaultLocaleValue40 = defaultLocaleParam7[0],
        defaultLocaleValue41 = 0;
      defaultLocaleValue38 > 0 &&
      defaultLocaleValue40 > 0 &&
      (defaultLocaleValue41 + defaultLocaleValue40 + 1 > defaultLocaleParam9 &&
        (defaultLocaleValue40 = Math.max(
          1,
          defaultLocaleParam9 - defaultLocaleValue41,
        )),
      defaultLocaleValue39.push(
        _defaultLocaleA.substring(
          (defaultLocaleValue38 -= defaultLocaleValue40),
          defaultLocaleValue38 + defaultLocaleValue40,
        ),
      ),
      !(
        (defaultLocaleValue41 += defaultLocaleValue40 + 1) > defaultLocaleParam9
      ));

    )
      defaultLocaleValue40 =
        defaultLocaleParam7[
          (_defaultLocaleI = (_defaultLocaleI + 1) % defaultLocaleParam7.length)
        ];
    return defaultLocaleValue39.reverse().join(defaultLocaleParam8);
  };
}
function defaultLocaleHelper4(defaultLocaleParam17) {
  return function (defaultLocaleParam18) {
    return defaultLocaleParam18.replace(
      /[0-9]/g,
      function (defaultLocaleParam23) {
        return defaultLocaleParam17[+defaultLocaleParam23];
      },
    );
  };
}
var defaultLocaleValue1 =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function defaultLocaleI(defaultLocaleParam10) {
  if (!(defaultLocaleValue42 = defaultLocaleValue1.exec(defaultLocaleParam10)))
    throw Error("invalid format: " + defaultLocaleParam10);
  var defaultLocaleValue42;
  return new defaultLocaleHelper5({
    fill: defaultLocaleValue42[1],
    align: defaultLocaleValue42[2],
    sign: defaultLocaleValue42[3],
    symbol: defaultLocaleValue42[4],
    zero: defaultLocaleValue42[5],
    width: defaultLocaleValue42[6],
    comma: defaultLocaleValue42[7],
    precision: defaultLocaleValue42[8] && defaultLocaleValue42[8].slice(1),
    trim: defaultLocaleValue42[9],
    type: defaultLocaleValue42[10],
  });
}
defaultLocaleI.prototype = defaultLocaleHelper5.prototype;
function defaultLocaleHelper5(defaultLocaleParam4) {
  this.fill =
    defaultLocaleParam4.fill === undefined
      ? " "
      : defaultLocaleParam4.fill + "";
  this.align =
    defaultLocaleParam4.align === undefined
      ? ">"
      : defaultLocaleParam4.align + "";
  this.sign =
    defaultLocaleParam4.sign === undefined
      ? "-"
      : defaultLocaleParam4.sign + "";
  this.symbol =
    defaultLocaleParam4.symbol === undefined
      ? ""
      : defaultLocaleParam4.symbol + "";
  this.zero = !!defaultLocaleParam4.zero;
  this.width =
    defaultLocaleParam4.width === undefined
      ? undefined
      : +defaultLocaleParam4.width;
  this.comma = !!defaultLocaleParam4.comma;
  this.precision =
    defaultLocaleParam4.precision === undefined
      ? undefined
      : +defaultLocaleParam4.precision;
  this.trim = !!defaultLocaleParam4.trim;
  this.type =
    defaultLocaleParam4.type === undefined ? "" : defaultLocaleParam4.type + "";
}
defaultLocaleHelper5.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === undefined ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === undefined
      ? ""
      : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function defaultLocaleHelper6(defaultLocaleParam6) {
  out: for (
    var defaultLocaleValue35 = defaultLocaleParam6.length,
      _defaultLocaleA = 1,
      defaultLocaleValue36 = -1,
      defaultLocaleValue37;
    _defaultLocaleA < defaultLocaleValue35;
    ++_defaultLocaleA
  )
    switch (defaultLocaleParam6[_defaultLocaleA]) {
      case ".":
        defaultLocaleValue36 = defaultLocaleValue37 = _defaultLocaleA;
        break;
      case "0":
        defaultLocaleValue36 === 0 && (defaultLocaleValue36 = _defaultLocaleA);
        defaultLocaleValue37 = _defaultLocaleA;
        break;
      default:
        if (!+defaultLocaleParam6[_defaultLocaleA]) break out;
        defaultLocaleValue36 > 0 && (defaultLocaleValue36 = 0);
        break;
    }
  return defaultLocaleValue36 > 0
    ? defaultLocaleParam6.slice(0, defaultLocaleValue36) +
        defaultLocaleParam6.slice(defaultLocaleValue37 + 1)
    : defaultLocaleParam6;
}
var defaultLocaleValue2;
function defaultLocaleHelper7(defaultLocaleParam5, _defaultLocaleA) {
  var defaultLocaleValue31 = defaultLocaleHelper2(
    defaultLocaleParam5,
    _defaultLocaleA,
  );
  if (!defaultLocaleValue31) return defaultLocaleParam5 + "";
  var defaultLocaleValue32 = defaultLocaleValue31[0],
    defaultLocaleValue33 = defaultLocaleValue31[1],
    _defaultLocaleI =
      defaultLocaleValue33 -
      (defaultLocaleValue2 =
        Math.max(-8, Math.min(8, Math.floor(defaultLocaleValue33 / 3))) * 3) +
      1,
    defaultLocaleValue34 = defaultLocaleValue32.length;
  return _defaultLocaleI === defaultLocaleValue34
    ? defaultLocaleValue32
    : _defaultLocaleI > defaultLocaleValue34
      ? defaultLocaleValue32 +
        Array(_defaultLocaleI - defaultLocaleValue34 + 1).join("0")
      : _defaultLocaleI > 0
        ? defaultLocaleValue32.slice(0, _defaultLocaleI) +
          "." +
          defaultLocaleValue32.slice(_defaultLocaleI)
        : "0." +
          Array(1 - _defaultLocaleI).join("0") +
          defaultLocaleHelper2(
            defaultLocaleParam5,
            Math.max(0, _defaultLocaleA + _defaultLocaleI - 1),
          )[0];
}
function defaultLocaleHelper8(defaultLocaleParam11, _defaultLocaleA) {
  var defaultLocaleValue43 = defaultLocaleHelper2(
    defaultLocaleParam11,
    _defaultLocaleA,
  );
  if (!defaultLocaleValue43) return defaultLocaleParam11 + "";
  var defaultLocaleValue44 = defaultLocaleValue43[0],
    defaultLocaleValue45 = defaultLocaleValue43[1];
  return defaultLocaleValue45 < 0
    ? "0." + Array(-defaultLocaleValue45).join("0") + defaultLocaleValue44
    : defaultLocaleValue44.length > defaultLocaleValue45 + 1
      ? defaultLocaleValue44.slice(0, defaultLocaleValue45 + 1) +
        "." +
        defaultLocaleValue44.slice(defaultLocaleValue45 + 1)
      : defaultLocaleValue44 +
        Array(defaultLocaleValue45 - defaultLocaleValue44.length + 2).join("0");
}
var defaultLocaleValue3 = {
  "%": (defaultLocaleParam27, defaultLocaleParam28) =>
    (defaultLocaleParam27 * 100).toFixed(defaultLocaleParam28),
  b: (defaultLocaleParam25) => Math.round(defaultLocaleParam25).toString(2),
  c: (defaultLocaleParam38) => defaultLocaleParam38 + "",
  d: defaultLocaleHelper1,
  e: (defaultLocaleParam30, defaultLocaleParam31) =>
    defaultLocaleParam30.toExponential(defaultLocaleParam31),
  f: (defaultLocaleParam36, defaultLocaleParam37) =>
    defaultLocaleParam36.toFixed(defaultLocaleParam37),
  g: (defaultLocaleParam32, defaultLocaleParam33) =>
    defaultLocaleParam32.toPrecision(defaultLocaleParam33),
  o: (defaultLocaleParam26) => Math.round(defaultLocaleParam26).toString(8),
  p: (defaultLocaleParam34, defaultLocaleParam35) =>
    defaultLocaleHelper8(defaultLocaleParam34 * 100, defaultLocaleParam35),
  r: defaultLocaleHelper8,
  s: defaultLocaleHelper7,
  X: (defaultLocaleParam21) =>
    Math.round(defaultLocaleParam21).toString(16).toUpperCase(),
  x: (defaultLocaleParam24) => Math.round(defaultLocaleParam24).toString(16),
};
function defaultLocaleHelper9(defaultLocaleParam29) {
  return defaultLocaleParam29;
}
var defaultLocaleValue4 = Array.prototype.map,
  defaultLocaleValue5 = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function defaultLocaleR(defaultLocaleParam1) {
  var defaultLocaleValue7 =
      defaultLocaleParam1.grouping === undefined ||
      defaultLocaleParam1.thousands === undefined
        ? defaultLocaleHelper9
        : defaultLocaleHelper3(
            defaultLocaleValue4.call(defaultLocaleParam1.grouping, Number),
            defaultLocaleParam1.thousands + "",
          ),
    defaultLocaleValue8 =
      defaultLocaleParam1.currency === undefined
        ? ""
        : defaultLocaleParam1.currency[0] + "",
    defaultLocaleValue9 =
      defaultLocaleParam1.currency === undefined
        ? ""
        : defaultLocaleParam1.currency[1] + "",
    defaultLocaleValue10 =
      defaultLocaleParam1.decimal === undefined
        ? "."
        : defaultLocaleParam1.decimal + "",
    defaultLocaleValue11 =
      defaultLocaleParam1.numerals === undefined
        ? defaultLocaleHelper9
        : defaultLocaleHelper4(
            defaultLocaleValue4.call(defaultLocaleParam1.numerals, String),
          ),
    _defaultLocaleR =
      defaultLocaleParam1.percent === undefined
        ? "%"
        : defaultLocaleParam1.percent + "",
    defaultLocaleValue12 =
      defaultLocaleParam1.minus === undefined
        ? "−"
        : defaultLocaleParam1.minus + "",
    _defaultLocaleT =
      defaultLocaleParam1.nan === undefined
        ? "NaN"
        : defaultLocaleParam1.nan + "";
  function _defaultLocaleN(defaultLocaleParam2) {
    defaultLocaleParam2 = defaultLocaleI(defaultLocaleParam2);
    var _defaultLocaleA = defaultLocaleParam2.fill,
      defaultLocaleValue13 = defaultLocaleParam2.align,
      defaultLocaleValue14 = defaultLocaleParam2.sign,
      defaultLocaleValue15 = defaultLocaleParam2.symbol,
      defaultLocaleValue16 = defaultLocaleParam2.zero,
      __defaultLocaleN = defaultLocaleParam2.width,
      defaultLocaleValue17 = defaultLocaleParam2.comma,
      defaultLocaleValue18 = defaultLocaleParam2.precision,
      defaultLocaleValue19 = defaultLocaleParam2.trim,
      defaultLocaleValue20 = defaultLocaleParam2.type;
    defaultLocaleValue20 === "n"
      ? ((defaultLocaleValue17 = true), (defaultLocaleValue20 = "g"))
      : defaultLocaleValue3[defaultLocaleValue20] ||
        (defaultLocaleValue18 === undefined && (defaultLocaleValue18 = 12),
        (defaultLocaleValue19 = true),
        (defaultLocaleValue20 = "g"));
    (defaultLocaleValue16 ||
      (_defaultLocaleA === "0" && defaultLocaleValue13 === "=")) &&
      ((defaultLocaleValue16 = true),
      (_defaultLocaleA = "0"),
      (defaultLocaleValue13 = "="));
    var defaultLocaleValue21 =
        defaultLocaleValue15 === "$"
          ? defaultLocaleValue8
          : defaultLocaleValue15 === "#" && /[boxX]/.test(defaultLocaleValue20)
            ? "0" + defaultLocaleValue20.toLowerCase()
            : "",
      defaultLocaleValue22 =
        defaultLocaleValue15 === "$"
          ? defaultLocaleValue9
          : /[%p]/.test(defaultLocaleValue20)
            ? _defaultLocaleR
            : "",
      defaultLocaleValue23 = defaultLocaleValue3[defaultLocaleValue20],
      defaultLocaleValue24 = /[defgprs%]/.test(defaultLocaleValue20);
    defaultLocaleValue18 =
      defaultLocaleValue18 === undefined
        ? 6
        : /[gprs]/.test(defaultLocaleValue20)
          ? Math.max(1, Math.min(21, defaultLocaleValue18))
          : Math.max(0, Math.min(20, defaultLocaleValue18));
    function defaultLocaleHelper12(defaultLocaleParam3) {
      var defaultLocaleValue25 = defaultLocaleValue21,
        _defaultLocaleI = defaultLocaleValue22,
        defaultLocaleValue26,
        defaultLocaleValue27,
        defaultLocaleValue28;
      if (defaultLocaleValue20 === "c") {
        _defaultLocaleI =
          defaultLocaleValue23(defaultLocaleParam3) + _defaultLocaleI;
        defaultLocaleParam3 = "";
      } else {
        defaultLocaleParam3 = +defaultLocaleParam3;
        var __defaultLocaleR =
          defaultLocaleParam3 < 0 || 1 / defaultLocaleParam3 < 0;
        if (
          ((defaultLocaleParam3 = isNaN(defaultLocaleParam3)
            ? _defaultLocaleT
            : defaultLocaleValue23(
                Math.abs(defaultLocaleParam3),
                defaultLocaleValue18,
              )),
          defaultLocaleValue19 &&
            (defaultLocaleParam3 = defaultLocaleHelper6(defaultLocaleParam3)),
          __defaultLocaleR &&
            +defaultLocaleParam3 == 0 &&
            defaultLocaleValue14 !== "+" &&
            (__defaultLocaleR = false),
          (defaultLocaleValue25 =
            (__defaultLocaleR
              ? defaultLocaleValue14 === "("
                ? defaultLocaleValue14
                : defaultLocaleValue12
              : defaultLocaleValue14 === "-" || defaultLocaleValue14 === "("
                ? ""
                : defaultLocaleValue14) + defaultLocaleValue25),
          (_defaultLocaleI =
            (defaultLocaleValue20 === "s"
              ? defaultLocaleValue5[8 + defaultLocaleValue2 / 3]
              : "") +
            _defaultLocaleI +
            (__defaultLocaleR && defaultLocaleValue14 === "(" ? ")" : "")),
          defaultLocaleValue24)
        ) {
          for (
            defaultLocaleValue26 = -1,
              defaultLocaleValue27 = defaultLocaleParam3.length;
            ++defaultLocaleValue26 < defaultLocaleValue27;

          )
            if (
              ((defaultLocaleValue28 =
                defaultLocaleParam3.charCodeAt(defaultLocaleValue26)),
              48 > defaultLocaleValue28 || defaultLocaleValue28 > 57)
            ) {
              _defaultLocaleI =
                (defaultLocaleValue28 === 46
                  ? defaultLocaleValue10 +
                    defaultLocaleParam3.slice(defaultLocaleValue26 + 1)
                  : defaultLocaleParam3.slice(defaultLocaleValue26)) +
                _defaultLocaleI;
              defaultLocaleParam3 = defaultLocaleParam3.slice(
                0,
                defaultLocaleValue26,
              );
              break;
            }
        }
      }
      defaultLocaleValue17 &&
        !defaultLocaleValue16 &&
        (defaultLocaleParam3 = defaultLocaleValue7(defaultLocaleParam3, 1 / 0));
      var defaultLocaleValue29 =
          defaultLocaleValue25.length +
          defaultLocaleParam3.length +
          _defaultLocaleI.length,
        defaultLocaleValue30 =
          defaultLocaleValue29 < __defaultLocaleN
            ? Array(__defaultLocaleN - defaultLocaleValue29 + 1).join(
                _defaultLocaleA,
              )
            : "";
      switch (
        (defaultLocaleValue17 &&
          defaultLocaleValue16 &&
          ((defaultLocaleParam3 = defaultLocaleValue7(
            defaultLocaleValue30 + defaultLocaleParam3,
            defaultLocaleValue30.length
              ? __defaultLocaleN - _defaultLocaleI.length
              : 1 / 0,
          )),
          (defaultLocaleValue30 = "")),
        defaultLocaleValue13)
      ) {
        case "<":
          defaultLocaleParam3 =
            defaultLocaleValue25 +
            defaultLocaleParam3 +
            _defaultLocaleI +
            defaultLocaleValue30;
          break;
        case "=":
          defaultLocaleParam3 =
            defaultLocaleValue25 +
            defaultLocaleValue30 +
            defaultLocaleParam3 +
            _defaultLocaleI;
          break;
        case "^":
          defaultLocaleParam3 =
            defaultLocaleValue30.slice(
              0,
              (defaultLocaleValue29 = defaultLocaleValue30.length >> 1),
            ) +
            defaultLocaleValue25 +
            defaultLocaleParam3 +
            _defaultLocaleI +
            defaultLocaleValue30.slice(defaultLocaleValue29);
          break;
        default:
          defaultLocaleParam3 =
            defaultLocaleValue30 +
            defaultLocaleValue25 +
            defaultLocaleParam3 +
            _defaultLocaleI;
          break;
      }
      return defaultLocaleValue11(defaultLocaleParam3);
    }
    return (
      (defaultLocaleHelper12.toString = function () {
        return defaultLocaleParam2 + "";
      }),
      defaultLocaleHelper12
    );
  }
  function defaultLocaleHelper11(defaultLocaleParam12, defaultLocaleParam13) {
    var defaultLocaleValue46 = _defaultLocaleN(
        ((defaultLocaleParam12 = defaultLocaleI(defaultLocaleParam12)),
        (defaultLocaleParam12.type = "f"),
        defaultLocaleParam12),
      ),
      defaultLocaleValue47 =
        Math.max(
          -8,
          Math.min(8, Math.floor(defaultLocaleA(defaultLocaleParam13) / 3)),
        ) * 3,
      defaultLocaleValue48 = 10 ** -defaultLocaleValue47,
      defaultLocaleValue49 = defaultLocaleValue5[8 + defaultLocaleValue47 / 3];
    return function (defaultLocaleParam22) {
      return (
        defaultLocaleValue46(defaultLocaleValue48 * defaultLocaleParam22) +
        defaultLocaleValue49
      );
    };
  }
  return {
    format: _defaultLocaleN,
    formatPrefix: defaultLocaleHelper11,
  };
}
var defaultLocaleValue6, defaultLocaleT, defaultLocaleN;
defaultLocaleHelper10({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
});
function defaultLocaleHelper10(defaultLocaleParam19) {
  return (
    (defaultLocaleValue6 = defaultLocaleR(defaultLocaleParam19)),
    (defaultLocaleT = defaultLocaleValue6.format),
    (defaultLocaleN = defaultLocaleValue6.formatPrefix),
    defaultLocaleValue6
  );
}
export {
  defaultLocaleA,
  defaultLocaleI,
  defaultLocaleN,
  defaultLocaleR,
  defaultLocaleT,
};
