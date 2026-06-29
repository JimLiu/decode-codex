// Restored from ref/webview/assets/path-DSoH76MG.js
// Path chunk restored from the Codex webview bundle.
export function pathN(_pathN) {
  return function () {
    return _pathN;
  };
}
var pathValue1 = Math.PI,
  pathValue2 = 2 * pathValue1,
  pathValue4 = pathValue2 - 1e-6;
function pathHelper1(_pathN) {
  this._ += _pathN[0];
  for (
    let pathValue32 = 1, pathValue33 = _pathN.length;
    pathValue32 < pathValue33;
    ++pathValue32
  )
    this._ += arguments[pathValue32] + _pathN[pathValue32];
}
function pathHelper2(_pathN) {
  let pathValue27 = Math.floor(_pathN);
  if (!(pathValue27 >= 0)) throw Error(`invalid digits: ${_pathN}`);
  if (pathValue27 > 15) return pathHelper1;
  let pathValue28 = 10 ** pathValue27;
  return function (__pathN) {
    this._ += __pathN[0];
    for (
      let pathValue30 = 1, pathValue31 = __pathN.length;
      pathValue30 < pathValue31;
      ++pathValue30
    )
      this._ +=
        Math.round(arguments[pathValue30] * pathValue28) / pathValue28 +
        __pathN[pathValue30];
  };
}
var pathValue5 = class {
  constructor(_pathN) {
    this._x0 = this._y0 = this._x1 = this._y1 = null;
    this._ = "";
    this._append = _pathN == null ? pathHelper1 : pathHelper2(_pathN);
  }
  moveTo(_pathN, pathParam21) {
    this
      ._append`M${(this._x0 = this._x1 = +_pathN)},${(this._y0 = this._y1 = +pathParam21)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(_pathN, pathParam22) {
    this._append`L${(this._x1 = +_pathN)},${(this._y1 = +pathParam22)}`;
  }
  quadraticCurveTo(_pathN, pathParam18, pathParam19, pathParam20) {
    this
      ._append`Q${+_pathN},${+pathParam18},${(this._x1 = +pathParam19)},${(this._y1 = +pathParam20)}`;
  }
  bezierCurveTo(
    _pathN,
    pathParam13,
    pathParam14,
    pathParam15,
    pathParam16,
    pathParam17,
  ) {
    this
      ._append`C${+_pathN},${+pathParam13},${+pathParam14},${+pathParam15},${(this._x1 = +pathParam16)},${(this._y1 = +pathParam17)}`;
  }
  arcTo(_pathN, pathParam1, pathParam2, pathParam3, pathParam4) {
    if (
      ((_pathN = +_pathN),
      (pathParam1 = +pathParam1),
      (pathParam2 = +pathParam2),
      (pathParam3 = +pathParam3),
      (pathParam4 = +pathParam4),
      pathParam4 < 0)
    )
      throw Error(`negative radius: ${pathParam4}`);
    let pathValue6 = this._x1,
      pathValue7 = this._y1,
      _pathT = pathParam2 - _pathN,
      pathValue8 = pathParam3 - pathParam1,
      pathValue9 = pathValue6 - _pathN,
      pathValue10 = pathValue7 - pathParam1,
      pathValue11 = pathValue9 * pathValue9 + pathValue10 * pathValue10;
    if (this._x1 === null)
      this._append`M${(this._x1 = _pathN)},${(this._y1 = pathParam1)}`;
    else if (pathValue11 > 1e-6)
      if (
        !(Math.abs(pathValue10 * _pathT - pathValue8 * pathValue9) > 1e-6) ||
        !pathParam4
      )
        this._append`L${(this._x1 = _pathN)},${(this._y1 = pathParam1)}`;
      else {
        let pathValue18 = pathParam2 - pathValue6,
          pathValue19 = pathParam3 - pathValue7,
          pathValue20 = _pathT * _pathT + pathValue8 * pathValue8,
          pathValue21 = pathValue18 * pathValue18 + pathValue19 * pathValue19,
          pathValue22 = Math.sqrt(pathValue20),
          pathValue23 = Math.sqrt(pathValue11),
          pathValue24 =
            pathParam4 *
            Math.tan(
              (pathValue1 -
                Math.acos(
                  (pathValue20 + pathValue11 - pathValue21) /
                    (2 * pathValue22 * pathValue23),
                )) /
                2,
            ),
          pathValue25 = pathValue24 / pathValue23,
          pathValue26 = pathValue24 / pathValue22;
        Math.abs(pathValue25 - 1) > 1e-6 &&
          this
            ._append`L${_pathN + pathValue25 * pathValue9},${pathParam1 + pathValue25 * pathValue10}`;
        this
          ._append`A${pathParam4},${pathParam4},0,0,${+(pathValue10 * pathValue18 > pathValue9 * pathValue19)},${(this._x1 = _pathN + pathValue26 * _pathT)},${(this._y1 = pathParam1 + pathValue26 * pathValue8)}`;
      }
  }
  arc(_pathN, pathParam5, pathParam6, pathParam7, pathParam8, _pathT) {
    if (
      ((_pathN = +_pathN),
      (pathParam5 = +pathParam5),
      (pathParam6 = +pathParam6),
      (_pathT = !!_pathT),
      pathParam6 < 0)
    )
      throw Error(`negative radius: ${pathParam6}`);
    let pathValue12 = pathParam6 * Math.cos(pathParam7),
      pathValue13 = pathParam6 * Math.sin(pathParam7),
      pathValue14 = _pathN + pathValue12,
      pathValue15 = pathParam5 + pathValue13,
      pathValue16 = 1 ^ _pathT,
      pathValue17 = _pathT ? pathParam7 - pathParam8 : pathParam8 - pathParam7;
    this._x1 === null
      ? this._append`M${pathValue14},${pathValue15}`
      : (Math.abs(this._x1 - pathValue14) > 1e-6 ||
          Math.abs(this._y1 - pathValue15) > 1e-6) &&
        this._append`L${pathValue14},${pathValue15}`;
    pathParam6 &&
      (pathValue17 < 0 &&
        (pathValue17 = (pathValue17 % pathValue2) + pathValue2),
      pathValue17 > pathValue4
        ? this
            ._append`A${pathParam6},${pathParam6},0,1,${pathValue16},${_pathN - pathValue12},${pathParam5 - pathValue13}A${pathParam6},${pathParam6},0,1,${pathValue16},${(this._x1 = pathValue14)},${(this._y1 = pathValue15)}`
        : pathValue17 > 1e-6 &&
          this
            ._append`A${pathParam6},${pathParam6},0,${+(pathValue17 >= pathValue1)},${pathValue16},${(this._x1 = _pathN + pathParam6 * Math.cos(pathParam8))},${(this._y1 = pathParam5 + pathParam6 * Math.sin(pathParam8))}`);
  }
  rect(_pathN, pathParam10, pathParam11, pathParam12) {
    this
      ._append`M${(this._x0 = this._x1 = +_pathN)},${(this._y0 = this._y1 = +pathParam10)}h${(pathParam11 = +pathParam11)}v${+pathParam12}h${-pathParam11}Z`;
  }
  toString() {
    return this._;
  }
};
function pathHelper3() {
  return new pathValue5();
}
pathHelper3.prototype = pathValue5.prototype;
export function pathT(_pathN) {
  let pathValue29 = 3;
  return (
    (_pathN.digits = function (pathParam9) {
      if (!arguments.length) return pathValue29;
      if (pathParam9 == null) pathValue29 = null;
      else {
        let __pathN = Math.floor(pathParam9);
        if (!(__pathN >= 0)) throw RangeError(`invalid digits: ${pathParam9}`);
        pathValue29 = __pathN;
      }
      return _pathN;
    }),
    () => new pathValue5(pathValue29)
  );
}
