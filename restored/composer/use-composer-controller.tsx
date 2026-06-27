// Restored from ref/webview/assets/use-composer-controller-Bo8TAx0p.js
// UseComposerController chunk restored from the Codex webview bundle.
import React from "react";
function useComposerControllerHelper1(useComposerControllerParam862) {
  this.content = useComposerControllerParam862;
}
((useComposerControllerHelper1.prototype = {
  constructor: useComposerControllerHelper1,
  find: function (useComposerControllerParam574) {
    for (
      var useComposerControllerValue661 = 0;
      useComposerControllerValue661 < this.content.length;
      useComposerControllerValue661 += 2
    )
      if (
        this.content[useComposerControllerValue661] ===
        useComposerControllerParam574
      )
        return useComposerControllerValue661;
    return -1;
  },
  get: function (useComposerControllerParam656) {
    var useComposerControllerValue740 = this.find(
      useComposerControllerParam656,
    );
    return useComposerControllerValue740 == -1
      ? void 0
      : this.content[useComposerControllerValue740 + 1];
  },
  update: function (
    useComposerControllerParam426,
    useComposerControllerParam427,
    useComposerControllerParam428,
  ) {
    var useComposerControllerValue518 =
        useComposerControllerParam428 &&
        useComposerControllerParam428 != useComposerControllerParam426
          ? this.remove(useComposerControllerParam428)
          : this,
      useComposerControllerValue519 = useComposerControllerValue518.find(
        useComposerControllerParam426,
      ),
      _useComposerControllerV = useComposerControllerValue518.content.slice();
    return (
      useComposerControllerValue519 == -1
        ? _useComposerControllerV.push(
            useComposerControllerParam428 || useComposerControllerParam426,
            useComposerControllerParam427,
          )
        : ((_useComposerControllerV[useComposerControllerValue519 + 1] =
            useComposerControllerParam427),
          useComposerControllerParam428 &&
            (_useComposerControllerV[useComposerControllerValue519] =
              useComposerControllerParam428)),
      new useComposerControllerHelper1(_useComposerControllerV)
    );
  },
  remove: function (useComposerControllerParam520) {
    var useComposerControllerValue597 = this.find(
      useComposerControllerParam520,
    );
    if (useComposerControllerValue597 == -1) return this;
    var useComposerControllerValue598 = this.content.slice();
    return (
      useComposerControllerValue598.splice(useComposerControllerValue597, 2),
      new useComposerControllerHelper1(useComposerControllerValue598)
    );
  },
  addToStart: function (
    useComposerControllerParam667,
    useComposerControllerParam668,
  ) {
    return new useComposerControllerHelper1(
      [useComposerControllerParam667, useComposerControllerParam668].concat(
        this.remove(useComposerControllerParam667).content,
      ),
    );
  },
  addToEnd: function (
    useComposerControllerParam621,
    useComposerControllerParam622,
  ) {
    var useComposerControllerValue704 = this.remove(
      useComposerControllerParam621,
    ).content.slice();
    return (
      useComposerControllerValue704.push(
        useComposerControllerParam621,
        useComposerControllerParam622,
      ),
      new useComposerControllerHelper1(useComposerControllerValue704)
    );
  },
  addBefore: function (
    useComposerControllerParam482,
    useComposerControllerParam483,
    useComposerControllerParam484,
  ) {
    var useComposerControllerValue571 = this.remove(
        useComposerControllerParam483,
      ),
      useComposerControllerValue572 =
        useComposerControllerValue571.content.slice(),
      _useComposerControllerV = useComposerControllerValue571.find(
        useComposerControllerParam482,
      );
    return (
      useComposerControllerValue572.splice(
        _useComposerControllerV == -1
          ? useComposerControllerValue572.length
          : _useComposerControllerV,
        0,
        useComposerControllerParam483,
        useComposerControllerParam484,
      ),
      new useComposerControllerHelper1(useComposerControllerValue572)
    );
  },
  forEach: function (useComposerControllerParam592) {
    for (
      var useComposerControllerValue675 = 0;
      useComposerControllerValue675 < this.content.length;
      useComposerControllerValue675 += 2
    )
      useComposerControllerParam592(
        this.content[useComposerControllerValue675],
        this.content[useComposerControllerValue675 + 1],
      );
  },
  prepend: function (useComposerControllerParam572) {
    return (
      (useComposerControllerParam572 = useComposerControllerHelper1.from(
        useComposerControllerParam572,
      )),
      useComposerControllerParam572.size
        ? new useComposerControllerHelper1(
            useComposerControllerParam572.content.concat(
              this.subtract(useComposerControllerParam572).content,
            ),
          )
        : this
    );
  },
  append: function (useComposerControllerParam573) {
    return (
      (useComposerControllerParam573 = useComposerControllerHelper1.from(
        useComposerControllerParam573,
      )),
      useComposerControllerParam573.size
        ? new useComposerControllerHelper1(
            this.subtract(useComposerControllerParam573).content.concat(
              useComposerControllerParam573.content,
            ),
          )
        : this
    );
  },
  subtract: function (useComposerControllerParam527) {
    var useComposerControllerValue611 = this;
    useComposerControllerParam527 = useComposerControllerHelper1.from(
      useComposerControllerParam527,
    );
    for (
      var useComposerControllerValue612 = 0;
      useComposerControllerValue612 <
      useComposerControllerParam527.content.length;
      useComposerControllerValue612 += 2
    )
      useComposerControllerValue611 = useComposerControllerValue611.remove(
        useComposerControllerParam527.content[useComposerControllerValue612],
      );
    return useComposerControllerValue611;
  },
  toObject: function () {
    var useComposerControllerValue746 = {};
    return (
      this.forEach(function (item, index) {
        useComposerControllerValue746[item] = index;
      }),
      useComposerControllerValue746
    );
  },
  get size() {
    return this.content.length >> 1;
  },
}),
  (useComposerControllerHelper1.from = function (
    useComposerControllerParam550,
  ) {
    if (useComposerControllerParam550 instanceof useComposerControllerHelper1)
      return useComposerControllerParam550;
    var useComposerControllerValue629 = [];
    if (useComposerControllerParam550)
      for (var useComposerControllerValue630 in useComposerControllerParam550)
        useComposerControllerValue629.push(
          useComposerControllerValue630,
          useComposerControllerParam550[useComposerControllerValue630],
        );
    return new useComposerControllerHelper1(useComposerControllerValue629);
  }));
function useComposerControllerHelper2(
  useComposerControllerParam89,
  useComposerControllerParam90,
  useComposerControllerParam91,
) {
  for (
    let useComposerControllerValue177 = 0;
    ;
    useComposerControllerValue177++
  ) {
    if (
      useComposerControllerValue177 ==
        useComposerControllerParam89.childCount ||
      useComposerControllerValue177 == useComposerControllerParam90.childCount
    )
      return useComposerControllerParam89.childCount ==
        useComposerControllerParam90.childCount
        ? null
        : useComposerControllerParam91;
    let useComposerControllerValue192 = useComposerControllerParam89.child(
        useComposerControllerValue177,
      ),
      _useComposerControllerV = useComposerControllerParam90.child(
        useComposerControllerValue177,
      );
    if (useComposerControllerValue192 == _useComposerControllerV) {
      useComposerControllerParam91 += useComposerControllerValue192.nodeSize;
      continue;
    }
    if (!useComposerControllerValue192.sameMarkup(_useComposerControllerV))
      return useComposerControllerParam91;
    if (
      useComposerControllerValue192.isText &&
      useComposerControllerValue192.text != _useComposerControllerV.text
    ) {
      for (
        let useComposerControllerValue806 = 0;
        useComposerControllerValue192.text[useComposerControllerValue806] ==
        _useComposerControllerV.text[useComposerControllerValue806];
        useComposerControllerValue806++
      )
        useComposerControllerParam91++;
      return useComposerControllerParam91;
    }
    if (
      useComposerControllerValue192.content.size ||
      _useComposerControllerV.content.size
    ) {
      let useComposerControllerValue776 = useComposerControllerHelper2(
        useComposerControllerValue192.content,
        _useComposerControllerV.content,
        useComposerControllerParam91 + 1,
      );
      if (useComposerControllerValue776 != null)
        return useComposerControllerValue776;
    }
    useComposerControllerParam91 += useComposerControllerValue192.nodeSize;
  }
}
function useComposerControllerHelper3(
  useComposerControllerParam56,
  useComposerControllerParam57,
  useComposerControllerParam58,
  useComposerControllerParam59,
) {
  for (
    let useComposerControllerValue135 = useComposerControllerParam56.childCount,
      _useComposerControllerV = useComposerControllerParam57.childCount;
    ;

  ) {
    if (useComposerControllerValue135 == 0 || _useComposerControllerV == 0)
      return useComposerControllerValue135 == _useComposerControllerV
        ? null
        : {
            a: useComposerControllerParam58,
            b: useComposerControllerParam59,
          };
    let useComposerControllerValue154 = useComposerControllerParam56.child(
        --useComposerControllerValue135,
      ),
      useComposerControllerValue155 = useComposerControllerParam57.child(
        --_useComposerControllerV,
      ),
      useComposerControllerValue156 = useComposerControllerValue154.nodeSize;
    if (useComposerControllerValue154 == useComposerControllerValue155) {
      ((useComposerControllerParam58 -= useComposerControllerValue156),
        (useComposerControllerParam59 -= useComposerControllerValue156));
      continue;
    }
    if (
      !useComposerControllerValue154.sameMarkup(useComposerControllerValue155)
    )
      return {
        a: useComposerControllerParam58,
        b: useComposerControllerParam59,
      };
    if (
      useComposerControllerValue154.isText &&
      useComposerControllerValue154.text != useComposerControllerValue155.text
    ) {
      let useComposerControllerValue522 = 0,
        useComposerControllerValue523 = Math.min(
          useComposerControllerValue154.text.length,
          useComposerControllerValue155.text.length,
        );
      for (
        ;
        useComposerControllerValue522 < useComposerControllerValue523 &&
        useComposerControllerValue154.text[
          useComposerControllerValue154.text.length -
            useComposerControllerValue522 -
            1
        ] ==
          useComposerControllerValue155.text[
            useComposerControllerValue155.text.length -
              useComposerControllerValue522 -
              1
          ];

      )
        (useComposerControllerValue522++,
          useComposerControllerParam58--,
          useComposerControllerParam59--);
      return {
        a: useComposerControllerParam58,
        b: useComposerControllerParam59,
      };
    }
    if (
      useComposerControllerValue154.content.size ||
      useComposerControllerValue155.content.size
    ) {
      let useComposerControllerValue784 = useComposerControllerHelper3(
        useComposerControllerValue154.content,
        useComposerControllerValue155.content,
        useComposerControllerParam58 - 1,
        useComposerControllerParam59 - 1,
      );
      if (useComposerControllerValue784) return useComposerControllerValue784;
    }
    ((useComposerControllerParam58 -= useComposerControllerValue156),
      (useComposerControllerParam59 -= useComposerControllerValue156));
  }
}
var useComposerControllerV = class UseComposerControllerClass2 {
  constructor(useComposerControllerParam507, useComposerControllerParam508) {
    if (
      ((this.content = useComposerControllerParam507),
      (this.size = useComposerControllerParam508 || 0),
      useComposerControllerParam508 == null)
    )
      for (
        let useComposerControllerValue787 = 0;
        useComposerControllerValue787 < useComposerControllerParam507.length;
        useComposerControllerValue787++
      )
        this.size +=
          useComposerControllerParam507[useComposerControllerValue787].nodeSize;
  }
  nodesBetween(
    useComposerControllerParam265,
    useComposerControllerParam266,
    useComposerControllerParam267,
    useComposerControllerParam268 = 0,
    useComposerControllerParam269,
  ) {
    for (
      let useComposerControllerValue404 = 0, _useComposerControllerV = 0;
      _useComposerControllerV < useComposerControllerParam266;
      useComposerControllerValue404++
    ) {
      let useComposerControllerValue448 =
          this.content[useComposerControllerValue404],
        useComposerControllerValue449 =
          _useComposerControllerV + useComposerControllerValue448.nodeSize;
      if (
        useComposerControllerValue449 > useComposerControllerParam265 &&
        useComposerControllerParam267(
          useComposerControllerValue448,
          useComposerControllerParam268 + _useComposerControllerV,
          useComposerControllerParam269 || null,
          useComposerControllerValue404,
        ) !== !1 &&
        useComposerControllerValue448.content.size
      ) {
        let useComposerControllerValue708 = _useComposerControllerV + 1;
        useComposerControllerValue448.nodesBetween(
          Math.max(
            0,
            useComposerControllerParam265 - useComposerControllerValue708,
          ),
          Math.min(
            useComposerControllerValue448.content.size,
            useComposerControllerParam266 - useComposerControllerValue708,
          ),
          useComposerControllerParam267,
          useComposerControllerParam268 + useComposerControllerValue708,
        );
      }
      _useComposerControllerV = useComposerControllerValue449;
    }
  }
  descendants(useComposerControllerParam764) {
    this.nodesBetween(0, this.size, useComposerControllerParam764);
  }
  textBetween(
    useComposerControllerParam181,
    useComposerControllerParam182,
    useComposerControllerParam183,
    useComposerControllerParam184,
  ) {
    let useComposerControllerValue265 = ``,
      useComposerControllerValue266 = !0;
    return (
      this.nodesBetween(
        useComposerControllerParam181,
        useComposerControllerParam182,
        (_useComposerControllerV, useComposerControllerParam279) => {
          let useComposerControllerValue377 = _useComposerControllerV.isText
            ? _useComposerControllerV.text.slice(
                Math.max(
                  useComposerControllerParam181,
                  useComposerControllerParam279,
                ) - useComposerControllerParam279,
                useComposerControllerParam182 - useComposerControllerParam279,
              )
            : _useComposerControllerV.isLeaf
              ? useComposerControllerParam184
                ? typeof useComposerControllerParam184 == `function`
                  ? useComposerControllerParam184(_useComposerControllerV)
                  : useComposerControllerParam184
                : _useComposerControllerV.type.spec.leafText
                  ? _useComposerControllerV.type.spec.leafText(
                      _useComposerControllerV,
                    )
                  : ``
              : ``;
          (_useComposerControllerV.isBlock &&
            ((_useComposerControllerV.isLeaf &&
              useComposerControllerValue377) ||
              _useComposerControllerV.isTextblock) &&
            useComposerControllerParam183 &&
            (useComposerControllerValue266
              ? (useComposerControllerValue266 = !1)
              : (useComposerControllerValue265 +=
                  useComposerControllerParam183)),
            (useComposerControllerValue265 += useComposerControllerValue377));
        },
        0,
      ),
      useComposerControllerValue265
    );
  }
  append(useComposerControllerParam188) {
    if (!useComposerControllerParam188.size) return this;
    if (!this.size) return useComposerControllerParam188;
    let useComposerControllerValue277 = this.lastChild,
      useComposerControllerValue278 = useComposerControllerParam188.firstChild,
      useComposerControllerValue279 = this.content.slice(),
      useComposerControllerValue280 = 0;
    for (
      useComposerControllerValue277.isText &&
      useComposerControllerValue277.sameMarkup(useComposerControllerValue278) &&
      ((useComposerControllerValue279[
        useComposerControllerValue279.length - 1
      ] = useComposerControllerValue277.withText(
        useComposerControllerValue277.text + useComposerControllerValue278.text,
      )),
      (useComposerControllerValue280 = 1));
      useComposerControllerValue280 <
      useComposerControllerParam188.content.length;
      useComposerControllerValue280++
    )
      useComposerControllerValue279.push(
        useComposerControllerParam188.content[useComposerControllerValue280],
      );
    return new UseComposerControllerClass2(
      useComposerControllerValue279,
      this.size + useComposerControllerParam188.size,
    );
  }
  cut(
    useComposerControllerParam139,
    useComposerControllerParam140 = this.size,
  ) {
    if (
      useComposerControllerParam139 == 0 &&
      useComposerControllerParam140 == this.size
    )
      return this;
    let useComposerControllerValue223 = [],
      useComposerControllerValue224 = 0;
    if (useComposerControllerParam140 > useComposerControllerParam139)
      for (
        let useComposerControllerValue328 = 0,
          useComposerControllerValue329 = 0;
        useComposerControllerValue329 < useComposerControllerParam140;
        useComposerControllerValue328++
      ) {
        let _useComposerControllerV =
            this.content[useComposerControllerValue328],
          useComposerControllerValue385 =
            useComposerControllerValue329 + _useComposerControllerV.nodeSize;
        (useComposerControllerValue385 > useComposerControllerParam139 &&
          ((useComposerControllerValue329 < useComposerControllerParam139 ||
            useComposerControllerValue385 > useComposerControllerParam140) &&
            (_useComposerControllerV = _useComposerControllerV.isText
              ? _useComposerControllerV.cut(
                  Math.max(
                    0,
                    useComposerControllerParam139 -
                      useComposerControllerValue329,
                  ),
                  Math.min(
                    _useComposerControllerV.text.length,
                    useComposerControllerParam140 -
                      useComposerControllerValue329,
                  ),
                )
              : _useComposerControllerV.cut(
                  Math.max(
                    0,
                    useComposerControllerParam139 -
                      useComposerControllerValue329 -
                      1,
                  ),
                  Math.min(
                    _useComposerControllerV.content.size,
                    useComposerControllerParam140 -
                      useComposerControllerValue329 -
                      1,
                  ),
                )),
          useComposerControllerValue223.push(_useComposerControllerV),
          (useComposerControllerValue224 += _useComposerControllerV.nodeSize)),
          (useComposerControllerValue329 = useComposerControllerValue385));
      }
    return new UseComposerControllerClass2(
      useComposerControllerValue223,
      useComposerControllerValue224,
    );
  }
  cutByIndex(useComposerControllerParam541, useComposerControllerParam542) {
    return useComposerControllerParam541 == useComposerControllerParam542
      ? UseComposerControllerClass2.empty
      : useComposerControllerParam541 == 0 &&
          useComposerControllerParam542 == this.content.length
        ? this
        : new UseComposerControllerClass2(
            this.content.slice(
              useComposerControllerParam541,
              useComposerControllerParam542,
            ),
          );
  }
  replaceChild(useComposerControllerParam413, useComposerControllerParam414) {
    let useComposerControllerValue506 =
      this.content[useComposerControllerParam413];
    if (useComposerControllerValue506 == useComposerControllerParam414)
      return this;
    let useComposerControllerValue507 = this.content.slice(),
      useComposerControllerValue508 =
        this.size +
        useComposerControllerParam414.nodeSize -
        useComposerControllerValue506.nodeSize;
    return (
      (useComposerControllerValue507[useComposerControllerParam413] =
        useComposerControllerParam414),
      new UseComposerControllerClass2(
        useComposerControllerValue507,
        useComposerControllerValue508,
      )
    );
  }
  addToStart(useComposerControllerParam638) {
    return new UseComposerControllerClass2(
      [useComposerControllerParam638].concat(this.content),
      this.size + useComposerControllerParam638.nodeSize,
    );
  }
  addToEnd(useComposerControllerParam652) {
    return new UseComposerControllerClass2(
      this.content.concat(useComposerControllerParam652),
      this.size + useComposerControllerParam652.nodeSize,
    );
  }
  eq(useComposerControllerParam411) {
    if (this.content.length != useComposerControllerParam411.content.length)
      return !1;
    for (
      let useComposerControllerValue687 = 0;
      useComposerControllerValue687 < this.content.length;
      useComposerControllerValue687++
    )
      if (
        !this.content[useComposerControllerValue687].eq(
          useComposerControllerParam411.content[useComposerControllerValue687],
        )
      )
        return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(useComposerControllerParam543) {
    let useComposerControllerValue621 =
      this.content[useComposerControllerParam543];
    if (!useComposerControllerValue621)
      throw RangeError(
        `Index ` + useComposerControllerParam543 + ` out of range for ` + this,
      );
    return useComposerControllerValue621;
  }
  maybeChild(useComposerControllerParam797) {
    return this.content[useComposerControllerParam797] || null;
  }
  forEach(useComposerControllerParam549) {
    for (
      let useComposerControllerValue676 = 0, useComposerControllerValue677 = 0;
      useComposerControllerValue676 < this.content.length;
      useComposerControllerValue676++
    ) {
      let useComposerControllerValue797 =
        this.content[useComposerControllerValue676];
      (useComposerControllerParam549(
        useComposerControllerValue797,
        useComposerControllerValue677,
        useComposerControllerValue676,
      ),
        (useComposerControllerValue677 +=
          useComposerControllerValue797.nodeSize));
    }
  }
  findDiffStart(
    useComposerControllerParam830,
    useComposerControllerParam831 = 0,
  ) {
    return useComposerControllerHelper2(
      this,
      useComposerControllerParam830,
      useComposerControllerParam831,
    );
  }
  findDiffEnd(
    useComposerControllerParam726,
    useComposerControllerParam727 = this.size,
    useComposerControllerParam728 = useComposerControllerParam726.size,
  ) {
    return useComposerControllerHelper3(
      this,
      useComposerControllerParam726,
      useComposerControllerParam727,
      useComposerControllerParam728,
    );
  }
  findIndex(useComposerControllerParam197) {
    if (useComposerControllerParam197 == 0)
      return useComposerControllerHelper4(0, useComposerControllerParam197);
    if (useComposerControllerParam197 == this.size)
      return useComposerControllerHelper4(
        this.content.length,
        useComposerControllerParam197,
      );
    if (
      useComposerControllerParam197 > this.size ||
      useComposerControllerParam197 < 0
    )
      throw RangeError(
        `Position ${useComposerControllerParam197} outside of fragment (${this})`,
      );
    for (
      let useComposerControllerValue641 = 0, useComposerControllerValue642 = 0;
      ;
      useComposerControllerValue641++
    ) {
      let useComposerControllerValue717 = this.child(
          useComposerControllerValue641,
        ),
        useComposerControllerValue718 =
          useComposerControllerValue642 +
          useComposerControllerValue717.nodeSize;
      if (useComposerControllerValue718 >= useComposerControllerParam197)
        return useComposerControllerValue718 == useComposerControllerParam197
          ? useComposerControllerHelper4(
              useComposerControllerValue641 + 1,
              useComposerControllerValue718,
            )
          : useComposerControllerHelper4(
              useComposerControllerValue641,
              useComposerControllerValue642,
            );
      useComposerControllerValue642 = useComposerControllerValue718;
    }
  }
  toString() {
    return `<` + this.toStringInner() + `>`;
  }
  toStringInner() {
    return this.content.join(`, `);
  }
  toJSON() {
    return this.content.length
      ? this.content.map((item) => item.toJSON())
      : null;
  }
  static fromJSON(
    useComposerControllerParam395,
    useComposerControllerParam396,
  ) {
    if (!useComposerControllerParam396)
      return UseComposerControllerClass2.empty;
    if (!Array.isArray(useComposerControllerParam396))
      throw RangeError(`Invalid input for Fragment.fromJSON`);
    return new UseComposerControllerClass2(
      useComposerControllerParam396.map(
        useComposerControllerParam395.nodeFromJSON,
      ),
    );
  }
  static fromArray(useComposerControllerParam220) {
    if (!useComposerControllerParam220.length)
      return UseComposerControllerClass2.empty;
    let useComposerControllerValue306,
      useComposerControllerValue307 = 0;
    for (
      let useComposerControllerValue443 = 0;
      useComposerControllerValue443 < useComposerControllerParam220.length;
      useComposerControllerValue443++
    ) {
      let useComposerControllerValue514 =
        useComposerControllerParam220[useComposerControllerValue443];
      ((useComposerControllerValue307 +=
        useComposerControllerValue514.nodeSize),
        useComposerControllerValue443 &&
        useComposerControllerValue514.isText &&
        useComposerControllerParam220[
          useComposerControllerValue443 - 1
        ].sameMarkup(useComposerControllerValue514)
          ? ((useComposerControllerValue306 ||=
              useComposerControllerParam220.slice(
                0,
                useComposerControllerValue443,
              )),
            (useComposerControllerValue306[
              useComposerControllerValue306.length - 1
            ] = useComposerControllerValue514.withText(
              useComposerControllerValue306[
                useComposerControllerValue306.length - 1
              ].text + useComposerControllerValue514.text,
            )))
          : useComposerControllerValue306 &&
            useComposerControllerValue306.push(useComposerControllerValue514));
    }
    return new UseComposerControllerClass2(
      useComposerControllerValue306 || useComposerControllerParam220,
      useComposerControllerValue307,
    );
  }
  static from(useComposerControllerParam162) {
    if (!useComposerControllerParam162)
      return UseComposerControllerClass2.empty;
    if (useComposerControllerParam162 instanceof UseComposerControllerClass2)
      return useComposerControllerParam162;
    if (Array.isArray(useComposerControllerParam162))
      return this.fromArray(useComposerControllerParam162);
    if (useComposerControllerParam162.attrs)
      return new UseComposerControllerClass2(
        [useComposerControllerParam162],
        useComposerControllerParam162.nodeSize,
      );
    throw RangeError(
      `Can not convert ` +
        useComposerControllerParam162 +
        ` to a Fragment` +
        (useComposerControllerParam162.nodesBetween
          ? ` (looks like multiple versions of prosemirror-model were loaded)`
          : ``),
    );
  }
};
useComposerControllerV.empty = new useComposerControllerV([], 0);
var useComposerControllerValue1 = {
  index: 0,
  offset: 0,
};
function useComposerControllerHelper4(
  useComposerControllerParam780,
  useComposerControllerParam781,
) {
  return (
    (useComposerControllerValue1.index = useComposerControllerParam780),
    (useComposerControllerValue1.offset = useComposerControllerParam781),
    useComposerControllerValue1
  );
}
function useComposerControllerHelper5(
  useComposerControllerParam117,
  useComposerControllerParam118,
) {
  if (useComposerControllerParam117 === useComposerControllerParam118)
    return !0;
  if (
    !(
      useComposerControllerParam117 &&
      typeof useComposerControllerParam117 == `object`
    ) ||
    !(
      useComposerControllerParam118 &&
      typeof useComposerControllerParam118 == `object`
    )
  )
    return !1;
  let useComposerControllerValue197 = Array.isArray(
    useComposerControllerParam117,
  );
  if (
    Array.isArray(useComposerControllerParam118) !=
    useComposerControllerValue197
  )
    return !1;
  if (useComposerControllerValue197) {
    if (
      useComposerControllerParam117.length !=
      useComposerControllerParam118.length
    )
      return !1;
    for (
      let useComposerControllerValue785 = 0;
      useComposerControllerValue785 < useComposerControllerParam117.length;
      useComposerControllerValue785++
    )
      if (
        !useComposerControllerHelper5(
          useComposerControllerParam117[useComposerControllerValue785],
          useComposerControllerParam118[useComposerControllerValue785],
        )
      )
        return !1;
  } else {
    for (let useComposerControllerValue786 in useComposerControllerParam117)
      if (
        !(useComposerControllerValue786 in useComposerControllerParam118) ||
        !useComposerControllerHelper5(
          useComposerControllerParam117[useComposerControllerValue786],
          useComposerControllerParam118[useComposerControllerValue786],
        )
      )
        return !1;
    for (let useComposerControllerValue814 in useComposerControllerParam118)
      if (!(useComposerControllerValue814 in useComposerControllerParam117))
        return !1;
  }
  return !0;
}
var useComposerControllerY = class UseComposerControllerClass13 {
  constructor(useComposerControllerParam808, useComposerControllerParam809) {
    ((this.type = useComposerControllerParam808),
      (this.attrs = useComposerControllerParam809));
  }
  addToSet(useComposerControllerParam151) {
    let useComposerControllerValue241,
      useComposerControllerValue242 = !1;
    for (
      let useComposerControllerValue320 = 0;
      useComposerControllerValue320 < useComposerControllerParam151.length;
      useComposerControllerValue320++
    ) {
      let useComposerControllerValue373 =
        useComposerControllerParam151[useComposerControllerValue320];
      if (this.eq(useComposerControllerValue373))
        return useComposerControllerParam151;
      if (this.type.excludes(useComposerControllerValue373.type))
        useComposerControllerValue241 ||= useComposerControllerParam151.slice(
          0,
          useComposerControllerValue320,
        );
      else if (useComposerControllerValue373.type.excludes(this.type))
        return useComposerControllerParam151;
      else
        (!useComposerControllerValue242 &&
          useComposerControllerValue373.type.rank > this.type.rank &&
          ((useComposerControllerValue241 ||=
            useComposerControllerParam151.slice(
              0,
              useComposerControllerValue320,
            )),
          useComposerControllerValue241.push(this),
          (useComposerControllerValue242 = !0)),
          useComposerControllerValue241 &&
            useComposerControllerValue241.push(useComposerControllerValue373));
    }
    return (
      (useComposerControllerValue241 ||= useComposerControllerParam151.slice()),
      useComposerControllerValue242 || useComposerControllerValue241.push(this),
      useComposerControllerValue241
    );
  }
  removeFromSet(useComposerControllerParam503) {
    for (
      let useComposerControllerValue686 = 0;
      useComposerControllerValue686 < useComposerControllerParam503.length;
      useComposerControllerValue686++
    )
      if (this.eq(useComposerControllerParam503[useComposerControllerValue686]))
        return useComposerControllerParam503
          .slice(0, useComposerControllerValue686)
          .concat(
            useComposerControllerParam503.slice(
              useComposerControllerValue686 + 1,
            ),
          );
    return useComposerControllerParam503;
  }
  isInSet(useComposerControllerParam640) {
    for (
      let useComposerControllerValue780 = 0;
      useComposerControllerValue780 < useComposerControllerParam640.length;
      useComposerControllerValue780++
    )
      if (this.eq(useComposerControllerParam640[useComposerControllerValue780]))
        return !0;
    return !1;
  }
  eq(useComposerControllerParam681) {
    return (
      this == useComposerControllerParam681 ||
      (this.type == useComposerControllerParam681.type &&
        useComposerControllerHelper5(
          this.attrs,
          useComposerControllerParam681.attrs,
        ))
    );
  }
  toJSON() {
    let useComposerControllerValue644 = {
      type: this.type.name,
    };
    for (let useComposerControllerValue790 in this.attrs) {
      useComposerControllerValue644.attrs = this.attrs;
      break;
    }
    return useComposerControllerValue644;
  }
  static fromJSON(
    useComposerControllerParam241,
    useComposerControllerParam242,
  ) {
    if (!useComposerControllerParam242)
      throw RangeError(`Invalid input for Mark.fromJSON`);
    let useComposerControllerValue330 =
      useComposerControllerParam241.marks[useComposerControllerParam242.type];
    if (!useComposerControllerValue330)
      throw RangeError(
        `There is no mark type ${useComposerControllerParam242.type} in this schema`,
      );
    let useComposerControllerValue331 = useComposerControllerValue330.create(
      useComposerControllerParam242.attrs,
    );
    return (
      useComposerControllerValue330.checkAttrs(
        useComposerControllerValue331.attrs,
      ),
      useComposerControllerValue331
    );
  }
  static sameSet(useComposerControllerParam452, useComposerControllerParam453) {
    if (useComposerControllerParam452 == useComposerControllerParam453)
      return !0;
    if (
      useComposerControllerParam452.length !=
      useComposerControllerParam453.length
    )
      return !1;
    for (
      let useComposerControllerValue777 = 0;
      useComposerControllerValue777 < useComposerControllerParam452.length;
      useComposerControllerValue777++
    )
      if (
        !useComposerControllerParam452[useComposerControllerValue777].eq(
          useComposerControllerParam453[useComposerControllerValue777],
        )
      )
        return !1;
    return !0;
  }
  static setFrom(useComposerControllerParam388) {
    if (
      !useComposerControllerParam388 ||
      (Array.isArray(useComposerControllerParam388) &&
        useComposerControllerParam388.length == 0)
    )
      return UseComposerControllerClass13.none;
    if (useComposerControllerParam388 instanceof UseComposerControllerClass13)
      return [useComposerControllerParam388];
    let useComposerControllerValue469 = useComposerControllerParam388.slice();
    return (
      useComposerControllerValue469.sort(
        (useComposerControllerParam860, useComposerControllerParam861) =>
          useComposerControllerParam860.type.rank -
          useComposerControllerParam861.type.rank,
      ),
      useComposerControllerValue469
    );
  }
};
useComposerControllerY.none = [];
var useComposerControllerB = class extends Error {},
  useComposerControllerS = class UseComposerControllerClass15 {
    constructor(
      useComposerControllerParam664,
      useComposerControllerParam665,
      useComposerControllerParam666,
    ) {
      ((this.content = useComposerControllerParam664),
        (this.openStart = useComposerControllerParam665),
        (this.openEnd = useComposerControllerParam666));
    }
    get size() {
      return this.content.size - this.openStart - this.openEnd;
    }
    insertAt(useComposerControllerParam537, useComposerControllerParam538) {
      let useComposerControllerValue618 = useComposerControllerHelper7(
        this.content,
        useComposerControllerParam537 + this.openStart,
        useComposerControllerParam538,
      );
      return (
        useComposerControllerValue618 &&
        new UseComposerControllerClass15(
          useComposerControllerValue618,
          this.openStart,
          this.openEnd,
        )
      );
    }
    removeBetween(
      useComposerControllerParam504,
      useComposerControllerParam505,
    ) {
      return new UseComposerControllerClass15(
        useComposerControllerHelper6(
          this.content,
          useComposerControllerParam504 + this.openStart,
          useComposerControllerParam505 + this.openStart,
        ),
        this.openStart,
        this.openEnd,
      );
    }
    eq(useComposerControllerParam566) {
      return (
        this.content.eq(useComposerControllerParam566.content) &&
        this.openStart == useComposerControllerParam566.openStart &&
        this.openEnd == useComposerControllerParam566.openEnd
      );
    }
    toString() {
      return this.content + `(` + this.openStart + `,` + this.openEnd + `)`;
    }
    toJSON() {
      if (!this.content.size) return null;
      let useComposerControllerValue416 = {
        content: this.content.toJSON(),
      };
      return (
        this.openStart > 0 &&
          (useComposerControllerValue416.openStart = this.openStart),
        this.openEnd > 0 &&
          (useComposerControllerValue416.openEnd = this.openEnd),
        useComposerControllerValue416
      );
    }
    static fromJSON(
      useComposerControllerParam275,
      useComposerControllerParam276,
    ) {
      if (!useComposerControllerParam276)
        return UseComposerControllerClass15.empty;
      let useComposerControllerValue365 =
          useComposerControllerParam276.openStart || 0,
        useComposerControllerValue366 =
          useComposerControllerParam276.openEnd || 0;
      if (
        typeof useComposerControllerValue365 != `number` ||
        typeof useComposerControllerValue366 != `number`
      )
        throw RangeError(`Invalid input for Slice.fromJSON`);
      return new UseComposerControllerClass15(
        useComposerControllerV.fromJSON(
          useComposerControllerParam275,
          useComposerControllerParam276.content,
        ),
        useComposerControllerValue365,
        useComposerControllerValue366,
      );
    }
    static maxOpen(
      useComposerControllerParam263,
      useComposerControllerParam264 = !0,
    ) {
      let useComposerControllerValue353 = 0,
        useComposerControllerValue354 = 0;
      for (
        let useComposerControllerValue688 =
          useComposerControllerParam263.firstChild;
        useComposerControllerValue688 &&
        !useComposerControllerValue688.isLeaf &&
        (useComposerControllerParam264 ||
          !useComposerControllerValue688.type.spec.isolating);
        useComposerControllerValue688 = useComposerControllerValue688.firstChild
      )
        useComposerControllerValue353++;
      for (
        let useComposerControllerValue698 =
          useComposerControllerParam263.lastChild;
        useComposerControllerValue698 &&
        !useComposerControllerValue698.isLeaf &&
        (useComposerControllerParam264 ||
          !useComposerControllerValue698.type.spec.isolating);
        useComposerControllerValue698 = useComposerControllerValue698.lastChild
      )
        useComposerControllerValue354++;
      return new UseComposerControllerClass15(
        useComposerControllerParam263,
        useComposerControllerValue353,
        useComposerControllerValue354,
      );
    }
  };
useComposerControllerS.empty = new useComposerControllerS(
  useComposerControllerV.empty,
  0,
  0,
);
function useComposerControllerHelper6(
  useComposerControllerParam119,
  useComposerControllerParam120,
  useComposerControllerParam121,
) {
  let { index: index, offset: offset } =
      useComposerControllerParam119.findIndex(useComposerControllerParam120),
    useComposerControllerValue199 =
      useComposerControllerParam119.maybeChild(index),
    { index: _useComposerControllerV, offset: _offset } =
      useComposerControllerParam119.findIndex(useComposerControllerParam121);
  if (
    offset == useComposerControllerParam120 ||
    useComposerControllerValue199.isText
  ) {
    if (
      _offset != useComposerControllerParam121 &&
      !useComposerControllerParam119.child(_useComposerControllerV).isText
    )
      throw RangeError(`Removing non-flat range`);
    return useComposerControllerParam119
      .cut(0, useComposerControllerParam120)
      .append(useComposerControllerParam119.cut(useComposerControllerParam121));
  }
  if (index != _useComposerControllerV)
    throw RangeError(`Removing non-flat range`);
  return useComposerControllerParam119.replaceChild(
    index,
    useComposerControllerValue199.copy(
      useComposerControllerHelper6(
        useComposerControllerValue199.content,
        useComposerControllerParam120 - offset - 1,
        useComposerControllerParam121 - offset - 1,
      ),
    ),
  );
}
function useComposerControllerHelper7(
  useComposerControllerParam230,
  useComposerControllerParam231,
  useComposerControllerParam232,
  useComposerControllerParam233,
) {
  let { index: index, offset: offset } =
      useComposerControllerParam230.findIndex(useComposerControllerParam231),
    _useComposerControllerV = useComposerControllerParam230.maybeChild(index);
  if (offset == useComposerControllerParam231 || _useComposerControllerV.isText)
    return useComposerControllerParam233 &&
      !useComposerControllerParam233.canReplace(
        index,
        index,
        useComposerControllerParam232,
      )
      ? null
      : useComposerControllerParam230
          .cut(0, useComposerControllerParam231)
          .append(useComposerControllerParam232)
          .append(
            useComposerControllerParam230.cut(useComposerControllerParam231),
          );
  let useComposerControllerValue322 = useComposerControllerHelper7(
    _useComposerControllerV.content,
    useComposerControllerParam231 - offset - 1,
    useComposerControllerParam232,
    _useComposerControllerV,
  );
  return (
    useComposerControllerValue322 &&
    useComposerControllerParam230.replaceChild(
      index,
      _useComposerControllerV.copy(useComposerControllerValue322),
    )
  );
}
function useComposerControllerHelper8(
  useComposerControllerParam290,
  useComposerControllerParam291,
  useComposerControllerParam292,
) {
  if (
    useComposerControllerParam292.openStart >
    useComposerControllerParam290.depth
  )
    throw new useComposerControllerB(
      `Inserted content deeper than insertion position`,
    );
  if (
    useComposerControllerParam290.depth -
      useComposerControllerParam292.openStart !=
    useComposerControllerParam291.depth - useComposerControllerParam292.openEnd
  )
    throw new useComposerControllerB(`Inconsistent open depths`);
  return useComposerControllerHelper9(
    useComposerControllerParam290,
    useComposerControllerParam291,
    useComposerControllerParam292,
    0,
  );
}
function useComposerControllerHelper9(
  useComposerControllerParam70,
  useComposerControllerParam71,
  useComposerControllerParam72,
  useComposerControllerParam73,
) {
  let useComposerControllerValue145 = useComposerControllerParam70.index(
      useComposerControllerParam73,
    ),
    useComposerControllerValue146 = useComposerControllerParam70.node(
      useComposerControllerParam73,
    );
  if (
    useComposerControllerValue145 ==
      useComposerControllerParam71.index(useComposerControllerParam73) &&
    useComposerControllerParam73 <
      useComposerControllerParam70.depth -
        useComposerControllerParam72.openStart
  ) {
    let _useComposerControllerV = useComposerControllerHelper9(
      useComposerControllerParam70,
      useComposerControllerParam71,
      useComposerControllerParam72,
      useComposerControllerParam73 + 1,
    );
    return useComposerControllerValue146.copy(
      useComposerControllerValue146.content.replaceChild(
        useComposerControllerValue145,
        _useComposerControllerV,
      ),
    );
  } else if (!useComposerControllerParam72.content.size)
    return useComposerControllerHelper14(
      useComposerControllerValue146,
      useComposerControllerHelper16(
        useComposerControllerParam70,
        useComposerControllerParam71,
        useComposerControllerParam73,
      ),
    );
  else if (
    !useComposerControllerParam72.openStart &&
    !useComposerControllerParam72.openEnd &&
    useComposerControllerParam70.depth == useComposerControllerParam73 &&
    useComposerControllerParam71.depth == useComposerControllerParam73
  ) {
    let useComposerControllerValue587 = useComposerControllerParam70.parent,
      useComposerControllerValue588 = useComposerControllerValue587.content;
    return useComposerControllerHelper14(
      useComposerControllerValue587,
      useComposerControllerValue588
        .cut(0, useComposerControllerParam70.parentOffset)
        .append(useComposerControllerParam72.content)
        .append(
          useComposerControllerValue588.cut(
            useComposerControllerParam71.parentOffset,
          ),
        ),
    );
  } else {
    let { start: start, end: _useComposerControllerV } =
      useComposerControllerHelper17(
        useComposerControllerParam72,
        useComposerControllerParam70,
      );
    return useComposerControllerHelper14(
      useComposerControllerValue146,
      useComposerControllerHelper15(
        useComposerControllerParam70,
        start,
        _useComposerControllerV,
        useComposerControllerParam71,
        useComposerControllerParam73,
      ),
    );
  }
}
function useComposerControllerHelper10(
  useComposerControllerParam486,
  useComposerControllerParam487,
) {
  if (
    !useComposerControllerParam487.type.compatibleContent(
      useComposerControllerParam486.type,
    )
  )
    throw new useComposerControllerB(
      `Cannot join ` +
        useComposerControllerParam487.type.name +
        ` onto ` +
        useComposerControllerParam486.type.name,
    );
}
function useComposerControllerHelper11(
  useComposerControllerParam706,
  useComposerControllerParam707,
  useComposerControllerParam708,
) {
  let useComposerControllerValue755 = useComposerControllerParam706.node(
    useComposerControllerParam708,
  );
  return (
    useComposerControllerHelper10(
      useComposerControllerValue755,
      useComposerControllerParam707.node(useComposerControllerParam708),
    ),
    useComposerControllerValue755
  );
}
function useComposerControllerHelper12(
  useComposerControllerParam500,
  useComposerControllerParam501,
) {
  let useComposerControllerValue589 = useComposerControllerParam501.length - 1;
  useComposerControllerValue589 >= 0 &&
  useComposerControllerParam500.isText &&
  useComposerControllerParam500.sameMarkup(
    useComposerControllerParam501[useComposerControllerValue589],
  )
    ? (useComposerControllerParam501[useComposerControllerValue589] =
        useComposerControllerParam500.withText(
          useComposerControllerParam501[useComposerControllerValue589].text +
            useComposerControllerParam500.text,
        ))
    : useComposerControllerParam501.push(useComposerControllerParam500);
}
function useComposerControllerHelper13(
  useComposerControllerParam255,
  useComposerControllerParam256,
  useComposerControllerParam257,
  useComposerControllerParam258,
) {
  let useComposerControllerValue343 = (
      useComposerControllerParam256 || useComposerControllerParam255
    ).node(useComposerControllerParam257),
    useComposerControllerValue344 = 0,
    _useComposerControllerV = useComposerControllerParam256
      ? useComposerControllerParam256.index(useComposerControllerParam257)
      : useComposerControllerValue343.childCount;
  useComposerControllerParam255 &&
    ((useComposerControllerValue344 = useComposerControllerParam255.index(
      useComposerControllerParam257,
    )),
    useComposerControllerParam255.depth > useComposerControllerParam257
      ? useComposerControllerValue344++
      : useComposerControllerParam255.textOffset &&
        (useComposerControllerHelper12(
          useComposerControllerParam255.nodeAfter,
          useComposerControllerParam258,
        ),
        useComposerControllerValue344++));
  for (
    let useComposerControllerValue815 = useComposerControllerValue344;
    useComposerControllerValue815 < _useComposerControllerV;
    useComposerControllerValue815++
  )
    useComposerControllerHelper12(
      useComposerControllerValue343.child(useComposerControllerValue815),
      useComposerControllerParam258,
    );
  useComposerControllerParam256 &&
    useComposerControllerParam256.depth == useComposerControllerParam257 &&
    useComposerControllerParam256.textOffset &&
    useComposerControllerHelper12(
      useComposerControllerParam256.nodeBefore,
      useComposerControllerParam258,
    );
}
function useComposerControllerHelper14(
  useComposerControllerParam734,
  useComposerControllerParam735,
) {
  return (
    useComposerControllerParam734.type.checkContent(
      useComposerControllerParam735,
    ),
    useComposerControllerParam734.copy(useComposerControllerParam735)
  );
}
function useComposerControllerHelper15(
  useComposerControllerParam211,
  useComposerControllerParam212,
  useComposerControllerParam213,
  useComposerControllerParam214,
  useComposerControllerParam215,
) {
  let useComposerControllerValue301 =
      useComposerControllerParam211.depth > useComposerControllerParam215 &&
      useComposerControllerHelper11(
        useComposerControllerParam211,
        useComposerControllerParam212,
        useComposerControllerParam215 + 1,
      ),
    useComposerControllerValue302 =
      useComposerControllerParam214.depth > useComposerControllerParam215 &&
      useComposerControllerHelper11(
        useComposerControllerParam213,
        useComposerControllerParam214,
        useComposerControllerParam215 + 1,
      ),
    useComposerControllerValue303 = [];
  return (
    useComposerControllerHelper13(
      null,
      useComposerControllerParam211,
      useComposerControllerParam215,
      useComposerControllerValue303,
    ),
    useComposerControllerValue301 &&
    useComposerControllerValue302 &&
    useComposerControllerParam212.index(useComposerControllerParam215) ==
      useComposerControllerParam213.index(useComposerControllerParam215)
      ? (useComposerControllerHelper10(
          useComposerControllerValue301,
          useComposerControllerValue302,
        ),
        useComposerControllerHelper12(
          useComposerControllerHelper14(
            useComposerControllerValue301,
            useComposerControllerHelper15(
              useComposerControllerParam211,
              useComposerControllerParam212,
              useComposerControllerParam213,
              useComposerControllerParam214,
              useComposerControllerParam215 + 1,
            ),
          ),
          useComposerControllerValue303,
        ))
      : (useComposerControllerValue301 &&
          useComposerControllerHelper12(
            useComposerControllerHelper14(
              useComposerControllerValue301,
              useComposerControllerHelper16(
                useComposerControllerParam211,
                useComposerControllerParam212,
                useComposerControllerParam215 + 1,
              ),
            ),
            useComposerControllerValue303,
          ),
        useComposerControllerHelper13(
          useComposerControllerParam212,
          useComposerControllerParam213,
          useComposerControllerParam215,
          useComposerControllerValue303,
        ),
        useComposerControllerValue302 &&
          useComposerControllerHelper12(
            useComposerControllerHelper14(
              useComposerControllerValue302,
              useComposerControllerHelper16(
                useComposerControllerParam213,
                useComposerControllerParam214,
                useComposerControllerParam215 + 1,
              ),
            ),
            useComposerControllerValue303,
          )),
    useComposerControllerHelper13(
      useComposerControllerParam214,
      null,
      useComposerControllerParam215,
      useComposerControllerValue303,
    ),
    new useComposerControllerV(useComposerControllerValue303)
  );
}
function useComposerControllerHelper16(
  useComposerControllerParam495,
  useComposerControllerParam496,
  useComposerControllerParam497,
) {
  let useComposerControllerValue585 = [];
  return (
    useComposerControllerHelper13(
      null,
      useComposerControllerParam495,
      useComposerControllerParam497,
      useComposerControllerValue585,
    ),
    useComposerControllerParam495.depth > useComposerControllerParam497 &&
      useComposerControllerHelper12(
        useComposerControllerHelper14(
          useComposerControllerHelper11(
            useComposerControllerParam495,
            useComposerControllerParam496,
            useComposerControllerParam497 + 1,
          ),
          useComposerControllerHelper16(
            useComposerControllerParam495,
            useComposerControllerParam496,
            useComposerControllerParam497 + 1,
          ),
        ),
        useComposerControllerValue585,
      ),
    useComposerControllerHelper13(
      useComposerControllerParam496,
      null,
      useComposerControllerParam497,
      useComposerControllerValue585,
    ),
    new useComposerControllerV(useComposerControllerValue585)
  );
}
function useComposerControllerHelper17(
  useComposerControllerParam270,
  useComposerControllerParam271,
) {
  let useComposerControllerValue359 =
      useComposerControllerParam271.depth -
      useComposerControllerParam270.openStart,
    useComposerControllerValue360 = useComposerControllerParam271
      .node(useComposerControllerValue359)
      .copy(useComposerControllerParam270.content);
  for (
    let useComposerControllerValue788 = useComposerControllerValue359 - 1;
    useComposerControllerValue788 >= 0;
    useComposerControllerValue788--
  )
    useComposerControllerValue360 = useComposerControllerParam271
      .node(useComposerControllerValue788)
      .copy(useComposerControllerV.from(useComposerControllerValue360));
  return {
    start: useComposerControllerValue360.resolveNoCache(
      useComposerControllerParam270.openStart + useComposerControllerValue359,
    ),
    end: useComposerControllerValue360.resolveNoCache(
      useComposerControllerValue360.content.size -
        useComposerControllerParam270.openEnd -
        useComposerControllerValue359,
    ),
  };
}
var useComposerControllerValue2 = class UseComposerControllerClass3 {
    constructor(
      useComposerControllerParam600,
      useComposerControllerParam601,
      useComposerControllerParam602,
    ) {
      ((this.pos = useComposerControllerParam600),
        (this.path = useComposerControllerParam601),
        (this.parentOffset = useComposerControllerParam602),
        (this.depth = useComposerControllerParam601.length / 3 - 1));
    }
    resolveDepth(useComposerControllerParam691) {
      return useComposerControllerParam691 == null
        ? this.depth
        : useComposerControllerParam691 < 0
          ? this.depth + useComposerControllerParam691
          : useComposerControllerParam691;
    }
    get parent() {
      return this.node(this.depth);
    }
    get doc() {
      return this.node(0);
    }
    node(useComposerControllerParam762) {
      return this.path[this.resolveDepth(useComposerControllerParam762) * 3];
    }
    index(useComposerControllerParam745) {
      return this.path[
        this.resolveDepth(useComposerControllerParam745) * 3 + 1
      ];
    }
    indexAfter(useComposerControllerParam560) {
      return (
        (useComposerControllerParam560 = this.resolveDepth(
          useComposerControllerParam560,
        )),
        this.index(useComposerControllerParam560) +
          (useComposerControllerParam560 == this.depth && !this.textOffset
            ? 0
            : 1)
      );
    }
    start(useComposerControllerParam669) {
      return (
        (useComposerControllerParam669 = this.resolveDepth(
          useComposerControllerParam669,
        )),
        useComposerControllerParam669 == 0
          ? 0
          : this.path[useComposerControllerParam669 * 3 - 1] + 1
      );
    }
    end(useComposerControllerParam636) {
      return (
        (useComposerControllerParam636 = this.resolveDepth(
          useComposerControllerParam636,
        )),
        this.start(useComposerControllerParam636) +
          this.node(useComposerControllerParam636).content.size
      );
    }
    before(useComposerControllerParam397) {
      if (
        ((useComposerControllerParam397 = this.resolveDepth(
          useComposerControllerParam397,
        )),
        !useComposerControllerParam397)
      )
        throw RangeError(`There is no position before the top-level node`);
      return useComposerControllerParam397 == this.depth + 1
        ? this.pos
        : this.path[useComposerControllerParam397 * 3 - 1];
    }
    after(useComposerControllerParam345) {
      if (
        ((useComposerControllerParam345 = this.resolveDepth(
          useComposerControllerParam345,
        )),
        !useComposerControllerParam345)
      )
        throw RangeError(`There is no position after the top-level node`);
      return useComposerControllerParam345 == this.depth + 1
        ? this.pos
        : this.path[useComposerControllerParam345 * 3 - 1] +
            this.path[useComposerControllerParam345 * 3].nodeSize;
    }
    get textOffset() {
      return this.pos - this.path[this.path.length - 1];
    }
    get nodeAfter() {
      let useComposerControllerValue420 = this.parent,
        useComposerControllerValue421 = this.index(this.depth);
      if (
        useComposerControllerValue421 ==
        useComposerControllerValue420.childCount
      )
        return null;
      let useComposerControllerValue422 =
          this.pos - this.path[this.path.length - 1],
        useComposerControllerValue423 = useComposerControllerValue420.child(
          useComposerControllerValue421,
        );
      return useComposerControllerValue422
        ? useComposerControllerValue420
            .child(useComposerControllerValue421)
            .cut(useComposerControllerValue422)
        : useComposerControllerValue423;
    }
    get nodeBefore() {
      let useComposerControllerValue473 = this.index(this.depth),
        useComposerControllerValue474 =
          this.pos - this.path[this.path.length - 1];
      return useComposerControllerValue474
        ? this.parent
            .child(useComposerControllerValue473)
            .cut(0, useComposerControllerValue474)
        : useComposerControllerValue473 == 0
          ? null
          : this.parent.child(useComposerControllerValue473 - 1);
    }
    posAtIndex(useComposerControllerParam430, useComposerControllerParam431) {
      useComposerControllerParam431 = this.resolveDepth(
        useComposerControllerParam431,
      );
      let useComposerControllerValue525 =
          this.path[useComposerControllerParam431 * 3],
        useComposerControllerValue526 =
          useComposerControllerParam431 == 0
            ? 0
            : this.path[useComposerControllerParam431 * 3 - 1] + 1;
      for (
        let useComposerControllerValue801 = 0;
        useComposerControllerValue801 < useComposerControllerParam430;
        useComposerControllerValue801++
      )
        useComposerControllerValue526 += useComposerControllerValue525.child(
          useComposerControllerValue801,
        ).nodeSize;
      return useComposerControllerValue526;
    }
    marks() {
      let useComposerControllerValue215 = this.parent,
        useComposerControllerValue216 = this.index();
      if (useComposerControllerValue215.content.size == 0)
        return useComposerControllerY.none;
      if (this.textOffset)
        return useComposerControllerValue215.child(
          useComposerControllerValue216,
        ).marks;
      let useComposerControllerValue217 =
          useComposerControllerValue215.maybeChild(
            useComposerControllerValue216 - 1,
          ),
        useComposerControllerValue218 =
          useComposerControllerValue215.maybeChild(
            useComposerControllerValue216,
          );
      if (!useComposerControllerValue217) {
        let useComposerControllerValue823 = useComposerControllerValue217;
        ((useComposerControllerValue217 = useComposerControllerValue218),
          (useComposerControllerValue218 = useComposerControllerValue823));
      }
      let useComposerControllerValue219 = useComposerControllerValue217.marks;
      for (
        var useComposerControllerValue220 = 0;
        useComposerControllerValue220 < useComposerControllerValue219.length;
        useComposerControllerValue220++
      )
        useComposerControllerValue219[useComposerControllerValue220].type.spec
          .inclusive === !1 &&
          (!useComposerControllerValue218 ||
            !useComposerControllerValue219[
              useComposerControllerValue220
            ].isInSet(useComposerControllerValue218.marks)) &&
          (useComposerControllerValue219 = useComposerControllerValue219[
            useComposerControllerValue220--
          ].removeFromSet(useComposerControllerValue219));
      return useComposerControllerValue219;
    }
    marksAcross(useComposerControllerParam200) {
      let useComposerControllerValue290 = this.parent.maybeChild(this.index());
      if (
        !useComposerControllerValue290 ||
        !useComposerControllerValue290.isInline
      )
        return null;
      let useComposerControllerValue291 = useComposerControllerValue290.marks,
        useComposerControllerValue292 =
          useComposerControllerParam200.parent.maybeChild(
            useComposerControllerParam200.index(),
          );
      for (
        var useComposerControllerValue293 = 0;
        useComposerControllerValue293 < useComposerControllerValue291.length;
        useComposerControllerValue293++
      )
        useComposerControllerValue291[useComposerControllerValue293].type.spec
          .inclusive === !1 &&
          (!useComposerControllerValue292 ||
            !useComposerControllerValue291[
              useComposerControllerValue293
            ].isInSet(useComposerControllerValue292.marks)) &&
          (useComposerControllerValue291 = useComposerControllerValue291[
            useComposerControllerValue293--
          ].removeFromSet(useComposerControllerValue291));
      return useComposerControllerValue291;
    }
    sharedDepth(useComposerControllerParam555) {
      for (
        let useComposerControllerValue724 = this.depth;
        useComposerControllerValue724 > 0;
        useComposerControllerValue724--
      )
        if (
          this.start(useComposerControllerValue724) <=
            useComposerControllerParam555 &&
          this.end(useComposerControllerValue724) >=
            useComposerControllerParam555
        )
          return useComposerControllerValue724;
      return 0;
    }
    blockRange(
      useComposerControllerParam259 = this,
      useComposerControllerParam260,
    ) {
      if (useComposerControllerParam259.pos < this.pos)
        return useComposerControllerParam259.blockRange(this);
      for (
        let useComposerControllerValue502 =
          this.depth -
          (this.parent.inlineContent ||
          this.pos == useComposerControllerParam259.pos
            ? 1
            : 0);
        useComposerControllerValue502 >= 0;
        useComposerControllerValue502--
      )
        if (
          useComposerControllerParam259.pos <=
            this.end(useComposerControllerValue502) &&
          (!useComposerControllerParam260 ||
            useComposerControllerParam260(
              this.node(useComposerControllerValue502),
            ))
        )
          return new useComposerControllerValue6(
            this,
            useComposerControllerParam259,
            useComposerControllerValue502,
          );
      return null;
    }
    sameParent(useComposerControllerParam653) {
      return (
        this.pos - this.parentOffset ==
        useComposerControllerParam653.pos -
          useComposerControllerParam653.parentOffset
      );
    }
    max(useComposerControllerParam837) {
      return useComposerControllerParam837.pos > this.pos
        ? useComposerControllerParam837
        : this;
    }
    min(useComposerControllerParam838) {
      return useComposerControllerParam838.pos < this.pos
        ? useComposerControllerParam838
        : this;
    }
    toString() {
      let useComposerControllerValue534 = ``;
      for (
        let useComposerControllerValue678 = 1;
        useComposerControllerValue678 <= this.depth;
        useComposerControllerValue678++
      )
        useComposerControllerValue534 +=
          (useComposerControllerValue534 ? `/` : ``) +
          this.node(useComposerControllerValue678).type.name +
          `_` +
          this.index(useComposerControllerValue678 - 1);
      return useComposerControllerValue534 + `:` + this.parentOffset;
    }
    static resolve(
      useComposerControllerParam192,
      useComposerControllerParam193,
    ) {
      if (
        !(
          useComposerControllerParam193 >= 0 &&
          useComposerControllerParam193 <=
            useComposerControllerParam192.content.size
        )
      )
        throw RangeError(
          `Position ` + useComposerControllerParam193 + ` out of range`,
        );
      let useComposerControllerValue282 = [],
        useComposerControllerValue283 = 0,
        useComposerControllerValue284 = useComposerControllerParam193;
      for (
        let useComposerControllerValue543 = useComposerControllerParam192;
        ;

      ) {
        let { index: index, offset: offset } =
            useComposerControllerValue543.content.findIndex(
              useComposerControllerValue284,
            ),
          _useComposerControllerV = useComposerControllerValue284 - offset;
        if (
          (useComposerControllerValue282.push(
            useComposerControllerValue543,
            index,
            useComposerControllerValue283 + offset,
          ),
          !_useComposerControllerV ||
            ((useComposerControllerValue543 =
              useComposerControllerValue543.child(index)),
            useComposerControllerValue543.isText))
        )
          break;
        ((useComposerControllerValue284 = _useComposerControllerV - 1),
          (useComposerControllerValue283 += offset + 1));
      }
      return new UseComposerControllerClass3(
        useComposerControllerParam193,
        useComposerControllerValue282,
        useComposerControllerValue284,
      );
    }
    static resolveCached(
      useComposerControllerParam307,
      useComposerControllerParam308,
    ) {
      let useComposerControllerValue397 = useComposerControllerValue5.get(
        useComposerControllerParam307,
      );
      if (useComposerControllerValue397)
        for (
          let useComposerControllerValue736 = 0;
          useComposerControllerValue736 <
          useComposerControllerValue397.elts.length;
          useComposerControllerValue736++
        ) {
          let useComposerControllerValue809 =
            useComposerControllerValue397.elts[useComposerControllerValue736];
          if (
            useComposerControllerValue809.pos == useComposerControllerParam308
          )
            return useComposerControllerValue809;
        }
      else
        useComposerControllerValue5.set(
          useComposerControllerParam307,
          (useComposerControllerValue397 = new useComposerControllerValue3()),
        );
      let useComposerControllerValue398 = (useComposerControllerValue397.elts[
        useComposerControllerValue397.i
      ] = UseComposerControllerClass3.resolve(
        useComposerControllerParam307,
        useComposerControllerParam308,
      ));
      return (
        (useComposerControllerValue397.i =
          (useComposerControllerValue397.i + 1) % useComposerControllerValue4),
        useComposerControllerValue398
      );
    }
  },
  useComposerControllerValue3 = class {
    constructor() {
      ((this.elts = []), (this.i = 0));
    }
  },
  useComposerControllerValue4 = 12,
  useComposerControllerValue5 = new WeakMap(),
  useComposerControllerValue6 = class {
    constructor(
      useComposerControllerParam736,
      useComposerControllerParam737,
      useComposerControllerParam738,
    ) {
      ((this.$from = useComposerControllerParam736),
        (this.$to = useComposerControllerParam737),
        (this.depth = useComposerControllerParam738));
    }
    get start() {
      return this.$from.before(this.depth + 1);
    }
    get end() {
      return this.$to.after(this.depth + 1);
    }
    get parent() {
      return this.$from.node(this.depth);
    }
    get startIndex() {
      return this.$from.index(this.depth);
    }
    get endIndex() {
      return this.$to.indexAfter(this.depth);
    }
  },
  useComposerControllerValue7 = Object.create(null),
  useComposerControllerValue8 = class UseComposerControllerClass1 {
    constructor(
      useComposerControllerParam581,
      useComposerControllerParam582,
      useComposerControllerParam583,
      useComposerControllerParam584 = useComposerControllerY.none,
    ) {
      ((this.type = useComposerControllerParam581),
        (this.attrs = useComposerControllerParam582),
        (this.marks = useComposerControllerParam584),
        (this.content =
          useComposerControllerParam583 || useComposerControllerV.empty));
    }
    get children() {
      return this.content.content;
    }
    get nodeSize() {
      return this.isLeaf ? 1 : 2 + this.content.size;
    }
    get childCount() {
      return this.content.childCount;
    }
    child(useComposerControllerParam832) {
      return this.content.child(useComposerControllerParam832);
    }
    maybeChild(useComposerControllerParam765) {
      return this.content.maybeChild(useComposerControllerParam765);
    }
    forEach(useComposerControllerParam844) {
      this.content.forEach(useComposerControllerParam844);
    }
    nodesBetween(
      useComposerControllerParam677,
      useComposerControllerParam678,
      useComposerControllerParam679,
      useComposerControllerParam680 = 0,
    ) {
      this.content.nodesBetween(
        useComposerControllerParam677,
        useComposerControllerParam678,
        useComposerControllerParam679,
        useComposerControllerParam680,
        this,
      );
    }
    descendants(useComposerControllerParam739) {
      this.nodesBetween(0, this.content.size, useComposerControllerParam739);
    }
    get textContent() {
      return this.isLeaf && this.type.spec.leafText
        ? this.type.spec.leafText(this)
        : this.textBetween(0, this.content.size, ``);
    }
    textBetween(
      useComposerControllerParam686,
      useComposerControllerParam687,
      useComposerControllerParam688,
      useComposerControllerParam689,
    ) {
      return this.content.textBetween(
        useComposerControllerParam686,
        useComposerControllerParam687,
        useComposerControllerParam688,
        useComposerControllerParam689,
      );
    }
    get firstChild() {
      return this.content.firstChild;
    }
    get lastChild() {
      return this.content.lastChild;
    }
    eq(useComposerControllerParam657) {
      return (
        this == useComposerControllerParam657 ||
        (this.sameMarkup(useComposerControllerParam657) &&
          this.content.eq(useComposerControllerParam657.content))
      );
    }
    sameMarkup(useComposerControllerParam709) {
      return this.hasMarkup(
        useComposerControllerParam709.type,
        useComposerControllerParam709.attrs,
        useComposerControllerParam709.marks,
      );
    }
    hasMarkup(
      useComposerControllerParam523,
      useComposerControllerParam524,
      useComposerControllerParam525,
    ) {
      return (
        this.type == useComposerControllerParam523 &&
        useComposerControllerHelper5(
          this.attrs,
          useComposerControllerParam524 ||
            useComposerControllerParam523.defaultAttrs ||
            useComposerControllerValue7,
        ) &&
        useComposerControllerY.sameSet(
          this.marks,
          useComposerControllerParam525 || useComposerControllerY.none,
        )
      );
    }
    copy(useComposerControllerParam615 = null) {
      return useComposerControllerParam615 == this.content
        ? this
        : new UseComposerControllerClass1(
            this.type,
            this.attrs,
            useComposerControllerParam615,
            this.marks,
          );
    }
    mark(useComposerControllerParam637) {
      return useComposerControllerParam637 == this.marks
        ? this
        : new UseComposerControllerClass1(
            this.type,
            this.attrs,
            this.content,
            useComposerControllerParam637,
          );
    }
    cut(
      useComposerControllerParam551,
      useComposerControllerParam552 = this.content.size,
    ) {
      return useComposerControllerParam551 == 0 &&
        useComposerControllerParam552 == this.content.size
        ? this
        : this.copy(
            this.content.cut(
              useComposerControllerParam551,
              useComposerControllerParam552,
            ),
          );
    }
    slice(
      useComposerControllerParam287,
      useComposerControllerParam288 = this.content.size,
      useComposerControllerParam289 = !1,
    ) {
      if (useComposerControllerParam287 == useComposerControllerParam288)
        return useComposerControllerS.empty;
      let useComposerControllerValue381 = this.resolve(
          useComposerControllerParam287,
        ),
        useComposerControllerValue382 = this.resolve(
          useComposerControllerParam288,
        ),
        useComposerControllerValue383 = useComposerControllerParam289
          ? 0
          : useComposerControllerValue381.sharedDepth(
              useComposerControllerParam288,
            ),
        _useComposerControllerV = useComposerControllerValue381.start(
          useComposerControllerValue383,
        );
      return new useComposerControllerS(
        useComposerControllerValue381
          .node(useComposerControllerValue383)
          .content.cut(
            useComposerControllerValue381.pos - _useComposerControllerV,
            useComposerControllerValue382.pos - _useComposerControllerV,
          ),
        useComposerControllerValue381.depth - useComposerControllerValue383,
        useComposerControllerValue382.depth - useComposerControllerValue383,
      );
    }
    replace(
      useComposerControllerParam716,
      useComposerControllerParam717,
      useComposerControllerParam718,
    ) {
      return useComposerControllerHelper8(
        this.resolve(useComposerControllerParam716),
        this.resolve(useComposerControllerParam717),
        useComposerControllerParam718,
      );
    }
    nodeAt(useComposerControllerParam419) {
      for (let useComposerControllerValue541 = this; ; ) {
        let { index: index, offset: offset } =
          useComposerControllerValue541.content.findIndex(
            useComposerControllerParam419,
          );
        if (
          ((useComposerControllerValue541 =
            useComposerControllerValue541.maybeChild(index)),
          !useComposerControllerValue541)
        )
          return null;
        if (
          offset == useComposerControllerParam419 ||
          useComposerControllerValue541.isText
        )
          return useComposerControllerValue541;
        useComposerControllerParam419 -= offset + 1;
      }
    }
    childAfter(useComposerControllerParam477) {
      let { index: index, offset: offset } = this.content.findIndex(
        useComposerControllerParam477,
      );
      return {
        node: this.content.maybeChild(index),
        index: index,
        offset: offset,
      };
    }
    childBefore(useComposerControllerParam229) {
      if (useComposerControllerParam229 == 0)
        return {
          node: null,
          index: 0,
          offset: 0,
        };
      let { index: index, offset: offset } = this.content.findIndex(
        useComposerControllerParam229,
      );
      if (offset < useComposerControllerParam229)
        return {
          node: this.content.child(index),
          index: index,
          offset: offset,
        };
      let useComposerControllerValue321 = this.content.child(index - 1);
      return {
        node: useComposerControllerValue321,
        index: index - 1,
        offset: offset - useComposerControllerValue321.nodeSize,
      };
    }
    resolve(useComposerControllerParam798) {
      return useComposerControllerValue2.resolveCached(
        this,
        useComposerControllerParam798,
      );
    }
    resolveNoCache(useComposerControllerParam795) {
      return useComposerControllerValue2.resolve(
        this,
        useComposerControllerParam795,
      );
    }
    rangeHasMark(
      useComposerControllerParam544,
      useComposerControllerParam545,
      useComposerControllerParam546,
    ) {
      let useComposerControllerValue622 = !1;
      return (
        useComposerControllerParam545 > useComposerControllerParam544 &&
          this.nodesBetween(
            useComposerControllerParam544,
            useComposerControllerParam545,
            (useComposerControllerParam853) => (
              useComposerControllerParam546.isInSet(
                useComposerControllerParam853.marks,
              ) && (useComposerControllerValue622 = !0),
              !useComposerControllerValue622
            ),
          ),
        useComposerControllerValue622
      );
    }
    get isBlock() {
      return this.type.isBlock;
    }
    get isTextblock() {
      return this.type.isTextblock;
    }
    get inlineContent() {
      return this.type.inlineContent;
    }
    get isInline() {
      return this.type.isInline;
    }
    get isText() {
      return this.type.isText;
    }
    get isLeaf() {
      return this.type.isLeaf;
    }
    get isAtom() {
      return this.type.isAtom;
    }
    toString() {
      if (this.type.spec.toDebugString)
        return this.type.spec.toDebugString(this);
      let useComposerControllerValue405 = this.type.name;
      return (
        this.content.size &&
          (useComposerControllerValue405 +=
            `(` + this.content.toStringInner() + `)`),
        useComposerControllerHelper18(this.marks, useComposerControllerValue405)
      );
    }
    contentMatchAt(useComposerControllerParam386) {
      let useComposerControllerValue465 = this.type.contentMatch.matchFragment(
        this.content,
        0,
        useComposerControllerParam386,
      );
      if (!useComposerControllerValue465)
        throw Error(`Called contentMatchAt on a node with invalid content`);
      return useComposerControllerValue465;
    }
    canReplace(
      useComposerControllerParam224,
      useComposerControllerParam225,
      useComposerControllerParam226 = useComposerControllerV.empty,
      useComposerControllerParam227 = 0,
      useComposerControllerParam228 = useComposerControllerParam226.childCount,
    ) {
      let useComposerControllerValue316 = this.contentMatchAt(
          useComposerControllerParam224,
        ).matchFragment(
          useComposerControllerParam226,
          useComposerControllerParam227,
          useComposerControllerParam228,
        ),
        useComposerControllerValue317 =
          useComposerControllerValue316 &&
          useComposerControllerValue316.matchFragment(
            this.content,
            useComposerControllerParam225,
          );
      if (
        !useComposerControllerValue317 ||
        !useComposerControllerValue317.validEnd
      )
        return !1;
      for (
        let useComposerControllerValue725 = useComposerControllerParam227;
        useComposerControllerValue725 < useComposerControllerParam228;
        useComposerControllerValue725++
      )
        if (
          !this.type.allowsMarks(
            useComposerControllerParam226.child(useComposerControllerValue725)
              .marks,
          )
        )
          return !1;
      return !0;
    }
    canReplaceWith(
      useComposerControllerParam372,
      useComposerControllerParam373,
      useComposerControllerParam374,
      useComposerControllerParam375,
    ) {
      if (
        useComposerControllerParam375 &&
        !this.type.allowsMarks(useComposerControllerParam375)
      )
        return !1;
      let useComposerControllerValue451 = this.contentMatchAt(
          useComposerControllerParam372,
        ).matchType(useComposerControllerParam374),
        useComposerControllerValue452 =
          useComposerControllerValue451 &&
          useComposerControllerValue451.matchFragment(
            this.content,
            useComposerControllerParam373,
          );
      return useComposerControllerValue452
        ? useComposerControllerValue452.validEnd
        : !1;
    }
    canAppend(useComposerControllerParam454) {
      return useComposerControllerParam454.content.size
        ? this.canReplace(
            this.childCount,
            this.childCount,
            useComposerControllerParam454.content,
          )
        : this.type.compatibleContent(useComposerControllerParam454.type);
    }
    check() {
      (this.type.checkContent(this.content), this.type.checkAttrs(this.attrs));
      let useComposerControllerValue178 = useComposerControllerY.none;
      for (
        let useComposerControllerValue627 = 0;
        useComposerControllerValue627 < this.marks.length;
        useComposerControllerValue627++
      ) {
        let useComposerControllerValue749 =
          this.marks[useComposerControllerValue627];
        (useComposerControllerValue749.type.checkAttrs(
          useComposerControllerValue749.attrs,
        ),
          (useComposerControllerValue178 =
            useComposerControllerValue749.addToSet(
              useComposerControllerValue178,
            )));
      }
      if (
        !useComposerControllerY.sameSet(
          useComposerControllerValue178,
          this.marks,
        )
      )
        throw RangeError(
          `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((item) => item.type.name)}`,
        );
      this.content.forEach((item) => item.check());
    }
    toJSON() {
      let useComposerControllerValue379 = {
        type: this.type.name,
      };
      for (let useComposerControllerValue791 in this.attrs) {
        useComposerControllerValue379.attrs = this.attrs;
        break;
      }
      return (
        this.content.size &&
          (useComposerControllerValue379.content = this.content.toJSON()),
        this.marks.length &&
          (useComposerControllerValue379.marks = this.marks.map((item) =>
            item.toJSON(),
          )),
        useComposerControllerValue379
      );
    }
    static fromJSON(
      useComposerControllerParam64,
      useComposerControllerParam65,
    ) {
      if (!useComposerControllerParam65)
        throw RangeError(`Invalid input for Node.fromJSON`);
      let useComposerControllerValue139;
      if (useComposerControllerParam65.marks) {
        if (!Array.isArray(useComposerControllerParam65.marks))
          throw RangeError(`Invalid mark data for Node.fromJSON`);
        useComposerControllerValue139 = useComposerControllerParam65.marks.map(
          useComposerControllerParam64.markFromJSON,
        );
      }
      if (useComposerControllerParam65.type == `text`) {
        if (typeof useComposerControllerParam65.text != `string`)
          throw RangeError(`Invalid text node in JSON`);
        return useComposerControllerParam64.text(
          useComposerControllerParam65.text,
          useComposerControllerValue139,
        );
      }
      let useComposerControllerValue140 = useComposerControllerV.fromJSON(
          useComposerControllerParam64,
          useComposerControllerParam65.content,
        ),
        useComposerControllerValue141 = useComposerControllerParam64
          .nodeType(useComposerControllerParam65.type)
          .create(
            useComposerControllerParam65.attrs,
            useComposerControllerValue140,
            useComposerControllerValue139,
          );
      return (
        useComposerControllerValue141.type.checkAttrs(
          useComposerControllerValue141.attrs,
        ),
        useComposerControllerValue141
      );
    }
  };
useComposerControllerValue8.prototype.text = void 0;
var useComposerControllerValue9 = class UseComposerControllerClass20 extends useComposerControllerValue8 {
  constructor(
    useComposerControllerParam509,
    useComposerControllerParam510,
    useComposerControllerParam511,
    useComposerControllerParam512,
  ) {
    if (
      (super(
        useComposerControllerParam509,
        useComposerControllerParam510,
        null,
        useComposerControllerParam512,
      ),
      !useComposerControllerParam511)
    )
      throw RangeError(`Empty text nodes are not allowed`);
    this.text = useComposerControllerParam511;
  }
  toString() {
    return this.type.spec.toDebugString
      ? this.type.spec.toDebugString(this)
      : useComposerControllerHelper18(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(useComposerControllerParam786, useComposerControllerParam787) {
    return this.text.slice(
      useComposerControllerParam786,
      useComposerControllerParam787,
    );
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(useComposerControllerParam639) {
    return useComposerControllerParam639 == this.marks
      ? this
      : new UseComposerControllerClass20(
          this.type,
          this.attrs,
          this.text,
          useComposerControllerParam639,
        );
  }
  withText(useComposerControllerParam630) {
    return useComposerControllerParam630 == this.text
      ? this
      : new UseComposerControllerClass20(
          this.type,
          this.attrs,
          useComposerControllerParam630,
          this.marks,
        );
  }
  cut(
    useComposerControllerParam539 = 0,
    useComposerControllerParam540 = this.text.length,
  ) {
    return useComposerControllerParam539 == 0 &&
      useComposerControllerParam540 == this.text.length
      ? this
      : this.withText(
          this.text.slice(
            useComposerControllerParam539,
            useComposerControllerParam540,
          ),
        );
  }
  eq(useComposerControllerParam749) {
    return (
      this.sameMarkup(useComposerControllerParam749) &&
      this.text == useComposerControllerParam749.text
    );
  }
  toJSON() {
    let useComposerControllerValue767 = super.toJSON();
    return (
      (useComposerControllerValue767.text = this.text),
      useComposerControllerValue767
    );
  }
};
function useComposerControllerHelper18(
  useComposerControllerParam611,
  useComposerControllerParam612,
) {
  for (
    let useComposerControllerValue765 =
      useComposerControllerParam611.length - 1;
    useComposerControllerValue765 >= 0;
    useComposerControllerValue765--
  )
    useComposerControllerParam612 =
      useComposerControllerParam611[useComposerControllerValue765].type.name +
      `(` +
      useComposerControllerParam612 +
      `)`;
  return useComposerControllerParam612;
}
var useComposerControllerValue10 = class UseComposerControllerClass6 {
  constructor(useComposerControllerParam690) {
    ((this.validEnd = useComposerControllerParam690),
      (this.next = []),
      (this.wrapCache = []));
  }
  static parse(useComposerControllerParam401, useComposerControllerParam402) {
    let useComposerControllerValue484 = new useComposerControllerValue11(
      useComposerControllerParam401,
      useComposerControllerParam402,
    );
    if (useComposerControllerValue484.next == null)
      return UseComposerControllerClass6.empty;
    let useComposerControllerValue485 = useComposerControllerHelper19(
      useComposerControllerValue484,
    );
    useComposerControllerValue484.next &&
      useComposerControllerValue484.err(`Unexpected trailing text`);
    let useComposerControllerValue486 = useComposerControllerHelper27(
      useComposerControllerHelper24(useComposerControllerValue485),
    );
    return (
      useComposerControllerHelper28(
        useComposerControllerValue486,
        useComposerControllerValue484,
      ),
      useComposerControllerValue486
    );
  }
  matchType(useComposerControllerParam521) {
    for (
      let useComposerControllerValue689 = 0;
      useComposerControllerValue689 < this.next.length;
      useComposerControllerValue689++
    )
      if (
        this.next[useComposerControllerValue689].type ==
        useComposerControllerParam521
      )
        return this.next[useComposerControllerValue689].next;
    return null;
  }
  matchFragment(
    useComposerControllerParam513,
    useComposerControllerParam514 = 0,
    useComposerControllerParam515 = useComposerControllerParam513.childCount,
  ) {
    let useComposerControllerValue595 = this;
    for (
      let useComposerControllerValue778 = useComposerControllerParam514;
      useComposerControllerValue595 &&
      useComposerControllerValue778 < useComposerControllerParam515;
      useComposerControllerValue778++
    )
      useComposerControllerValue595 = useComposerControllerValue595.matchType(
        useComposerControllerParam513.child(useComposerControllerValue778).type,
      );
    return useComposerControllerValue595;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (
      let useComposerControllerValue605 = 0;
      useComposerControllerValue605 < this.next.length;
      useComposerControllerValue605++
    ) {
      let { type: type } = this.next[useComposerControllerValue605];
      if (!(type.isText || type.hasRequiredAttrs())) return type;
    }
    return null;
  }
  compatible(useComposerControllerParam435) {
    for (
      let useComposerControllerValue586 = 0;
      useComposerControllerValue586 < this.next.length;
      useComposerControllerValue586++
    )
      for (
        let useComposerControllerValue709 = 0;
        useComposerControllerValue709 <
        useComposerControllerParam435.next.length;
        useComposerControllerValue709++
      )
        if (
          this.next[useComposerControllerValue586].type ==
          useComposerControllerParam435.next[useComposerControllerValue709].type
        )
          return !0;
    return !1;
  }
  fillBefore(
    useComposerControllerParam124,
    useComposerControllerParam125 = !1,
    useComposerControllerParam126 = 0,
  ) {
    let useComposerControllerValue208 = [this];
    function useComposerControllerHelper89(
      useComposerControllerParam176,
      useComposerControllerParam177,
    ) {
      let useComposerControllerValue258 =
        useComposerControllerParam176.matchFragment(
          useComposerControllerParam124,
          useComposerControllerParam126,
        );
      if (
        useComposerControllerValue258 &&
        (!useComposerControllerParam125 ||
          useComposerControllerValue258.validEnd)
      )
        return useComposerControllerV.from(
          useComposerControllerParam177.map((item) => item.createAndFill()),
        );
      for (
        let useComposerControllerValue453 = 0;
        useComposerControllerValue453 <
        useComposerControllerParam176.next.length;
        useComposerControllerValue453++
      ) {
        let { type: type, next: next } =
          useComposerControllerParam176.next[useComposerControllerValue453];
        if (
          !(type.isText || type.hasRequiredAttrs()) &&
          useComposerControllerValue208.indexOf(next) == -1
        ) {
          useComposerControllerValue208.push(next);
          let useComposerControllerValue795 = useComposerControllerHelper89(
            next,
            useComposerControllerParam177.concat(type),
          );
          if (useComposerControllerValue795)
            return useComposerControllerValue795;
        }
      }
      return null;
    }
    return useComposerControllerHelper89(this, []);
  }
  findWrapping(useComposerControllerParam355) {
    for (
      let useComposerControllerValue662 = 0;
      useComposerControllerValue662 < this.wrapCache.length;
      useComposerControllerValue662 += 2
    )
      if (
        this.wrapCache[useComposerControllerValue662] ==
        useComposerControllerParam355
      )
        return this.wrapCache[useComposerControllerValue662 + 1];
    let useComposerControllerValue439 = this.computeWrapping(
      useComposerControllerParam355,
    );
    return (
      this.wrapCache.push(
        useComposerControllerParam355,
        useComposerControllerValue439,
      ),
      useComposerControllerValue439
    );
  }
  computeWrapping(useComposerControllerParam76) {
    let useComposerControllerValue149 = Object.create(null),
      useComposerControllerValue150 = [
        {
          match: this,
          type: null,
          via: null,
        },
      ];
    for (; useComposerControllerValue150.length; ) {
      let useComposerControllerValue235 = useComposerControllerValue150.shift(),
        useComposerControllerValue236 = useComposerControllerValue235.match;
      if (
        useComposerControllerValue236.matchType(useComposerControllerParam76)
      ) {
        let useComposerControllerValue732 = [];
        for (
          let useComposerControllerValue804 = useComposerControllerValue235;
          useComposerControllerValue804.type;
          useComposerControllerValue804 = useComposerControllerValue804.via
        )
          useComposerControllerValue732.push(
            useComposerControllerValue804.type,
          );
        return useComposerControllerValue732.reverse();
      }
      for (
        let useComposerControllerValue402 = 0;
        useComposerControllerValue402 <
        useComposerControllerValue236.next.length;
        useComposerControllerValue402++
      ) {
        let { type: type, next: _useComposerControllerV } =
          useComposerControllerValue236.next[useComposerControllerValue402];
        !type.isLeaf &&
          !type.hasRequiredAttrs() &&
          !(type.name in useComposerControllerValue149) &&
          (!useComposerControllerValue235.type ||
            _useComposerControllerV.validEnd) &&
          (useComposerControllerValue150.push({
            match: type.contentMatch,
            type: type,
            via: useComposerControllerValue235,
          }),
          (useComposerControllerValue149[type.name] = !0));
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(useComposerControllerParam485) {
    if (useComposerControllerParam485 >= this.next.length)
      throw RangeError(
        `There's no ${useComposerControllerParam485}th edge in this content match`,
      );
    return this.next[useComposerControllerParam485];
  }
  toString() {
    let useComposerControllerValue238 = [];
    function useComposerControllerHelper90(useComposerControllerParam528) {
      useComposerControllerValue238.push(useComposerControllerParam528);
      for (
        let useComposerControllerValue702 = 0;
        useComposerControllerValue702 <
        useComposerControllerParam528.next.length;
        useComposerControllerValue702++
      )
        useComposerControllerValue238.indexOf(
          useComposerControllerParam528.next[useComposerControllerValue702]
            .next,
        ) == -1 &&
          useComposerControllerHelper90(
            useComposerControllerParam528.next[useComposerControllerValue702]
              .next,
          );
    }
    return (
      useComposerControllerHelper90(this),
      useComposerControllerValue238.map((item, index) => {
        let useComposerControllerValue503 =
          index + (item.validEnd ? `*` : ` `) + ` `;
        for (
          let useComposerControllerValue635 = 0;
          useComposerControllerValue635 < item.next.length;
          useComposerControllerValue635++
        )
          useComposerControllerValue503 +=
            (useComposerControllerValue635 ? `, ` : ``) +
            item.next[useComposerControllerValue635].type.name +
            `->` +
            useComposerControllerValue238.indexOf(
              item.next[useComposerControllerValue635].next,
            );
        return useComposerControllerValue503;
      }).join(`
`)
    );
  }
};
useComposerControllerValue10.empty = new useComposerControllerValue10(!0);
var useComposerControllerValue11 = class {
  constructor(useComposerControllerParam277, useComposerControllerParam278) {
    ((this.string = useComposerControllerParam277),
      (this.nodeTypes = useComposerControllerParam278),
      (this.inline = null),
      (this.pos = 0),
      (this.tokens = useComposerControllerParam277.split(/\s*(?=\b|\W|$)/)),
      this.tokens[this.tokens.length - 1] == `` && this.tokens.pop(),
      this.tokens[0] == `` && this.tokens.shift());
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(useComposerControllerParam788) {
    return this.next == useComposerControllerParam788 && (this.pos++ || !0);
  }
  err(useComposerControllerParam641) {
    throw SyntaxError(
      useComposerControllerParam641 +
        ` (in content expression '` +
        this.string +
        `')`,
    );
  }
};
function useComposerControllerHelper19(useComposerControllerParam526) {
  let useComposerControllerValue606 = [];
  do
    useComposerControllerValue606.push(
      useComposerControllerHelper20(useComposerControllerParam526),
    );
  while (useComposerControllerParam526.eat(`|`));
  return useComposerControllerValue606.length == 1
    ? useComposerControllerValue606[0]
    : {
        type: `choice`,
        exprs: useComposerControllerValue606,
      };
}
function useComposerControllerHelper20(useComposerControllerParam456) {
  let useComposerControllerValue558 = [];
  do
    useComposerControllerValue558.push(
      useComposerControllerHelper21(useComposerControllerParam456),
    );
  while (
    useComposerControllerParam456.next &&
    useComposerControllerParam456.next != `)` &&
    useComposerControllerParam456.next != `|`
  );
  return useComposerControllerValue558.length == 1
    ? useComposerControllerValue558[0]
    : {
        type: `seq`,
        exprs: useComposerControllerValue558,
      };
}
function useComposerControllerHelper21(useComposerControllerParam294) {
  let useComposerControllerValue389 = be(useComposerControllerParam294);
  for (;;)
    if (useComposerControllerParam294.eat(`+`))
      useComposerControllerValue389 = {
        type: `plus`,
        expr: useComposerControllerValue389,
      };
    else if (useComposerControllerParam294.eat(`*`))
      useComposerControllerValue389 = {
        type: `star`,
        expr: useComposerControllerValue389,
      };
    else if (useComposerControllerParam294.eat(`?`))
      useComposerControllerValue389 = {
        type: `opt`,
        expr: useComposerControllerValue389,
      };
    else if (useComposerControllerParam294.eat(`{`))
      useComposerControllerValue389 = useComposerControllerHelper22(
        useComposerControllerParam294,
        useComposerControllerValue389,
      );
    else break;
  return useComposerControllerValue389;
}
function _e(useComposerControllerParam488) {
  /\D/.test(useComposerControllerParam488.next) &&
    useComposerControllerParam488.err(
      `Expected number, got '` + useComposerControllerParam488.next + `'`,
    );
  let useComposerControllerValue579 = Number(
    useComposerControllerParam488.next,
  );
  return (useComposerControllerParam488.pos++, useComposerControllerValue579);
}
function useComposerControllerHelper22(
  useComposerControllerParam403,
  useComposerControllerParam404,
) {
  let useComposerControllerValue487 = _e(useComposerControllerParam403),
    useComposerControllerValue488 = useComposerControllerValue487;
  return (
    useComposerControllerParam403.eat(`,`) &&
      (useComposerControllerValue488 =
        useComposerControllerParam403.next == `}`
          ? -1
          : _e(useComposerControllerParam403)),
    useComposerControllerParam403.eat(`}`) ||
      useComposerControllerParam403.err(`Unclosed braced range`),
    {
      type: `range`,
      min: useComposerControllerValue487,
      max: useComposerControllerValue488,
      expr: useComposerControllerParam404,
    }
  );
}
function useComposerControllerHelper23(
  useComposerControllerParam323,
  useComposerControllerParam324,
) {
  let useComposerControllerValue409 = useComposerControllerParam323.nodeTypes,
    useComposerControllerValue410 =
      useComposerControllerValue409[useComposerControllerParam324];
  if (useComposerControllerValue410) return [useComposerControllerValue410];
  let useComposerControllerValue411 = [];
  for (let useComposerControllerValue781 in useComposerControllerValue409) {
    let useComposerControllerValue810 =
      useComposerControllerValue409[useComposerControllerValue781];
    useComposerControllerValue810.isInGroup(useComposerControllerParam324) &&
      useComposerControllerValue411.push(useComposerControllerValue810);
  }
  return (
    useComposerControllerValue411.length == 0 &&
      useComposerControllerParam323.err(
        `No node type or group '` + useComposerControllerParam324 + `' found`,
      ),
    useComposerControllerValue411
  );
}
function be(useComposerControllerParam99) {
  if (useComposerControllerParam99.eat(`(`)) {
    let useComposerControllerValue747 = useComposerControllerHelper19(
      useComposerControllerParam99,
    );
    return (
      useComposerControllerParam99.eat(`)`) ||
        useComposerControllerParam99.err(`Missing closing paren`),
      useComposerControllerValue747
    );
  } else if (/\W/.test(useComposerControllerParam99.next))
    useComposerControllerParam99.err(
      `Unexpected token '` + useComposerControllerParam99.next + `'`,
    );
  else {
    let useComposerControllerValue384 = useComposerControllerHelper23(
      useComposerControllerParam99,
      useComposerControllerParam99.next,
    ).map(
      (item) => (
        useComposerControllerParam99.inline == null
          ? (useComposerControllerParam99.inline = item.isInline)
          : useComposerControllerParam99.inline != item.isInline &&
            useComposerControllerParam99.err(`Mixing inline and block content`),
        {
          type: `name`,
          value: item,
        }
      ),
    );
    return (
      useComposerControllerParam99.pos++,
      useComposerControllerValue384.length == 1
        ? useComposerControllerValue384[0]
        : {
            type: `choice`,
            exprs: useComposerControllerValue384,
          }
    );
  }
}
function useComposerControllerHelper24(useComposerControllerParam18) {
  let useComposerControllerValue88 = [[]];
  return (
    useComposerControllerHelper85(
      useComposerControllerHelper86(useComposerControllerParam18, 0),
      useComposerControllerHelper83(),
    ),
    useComposerControllerValue88
  );
  function useComposerControllerHelper83() {
    return useComposerControllerValue88.push([]) - 1;
  }
  function useComposerControllerHelper84(
    useComposerControllerParam710,
    useComposerControllerParam711,
    useComposerControllerParam712,
  ) {
    let useComposerControllerValue756 = {
      term: useComposerControllerParam712,
      to: useComposerControllerParam711,
    };
    return (
      useComposerControllerValue88[useComposerControllerParam710].push(
        useComposerControllerValue756,
      ),
      useComposerControllerValue756
    );
  }
  function useComposerControllerHelper85(
    useComposerControllerParam833,
    useComposerControllerParam834,
  ) {
    useComposerControllerParam833.forEach(
      (item) => (item.to = useComposerControllerParam834),
    );
  }
  function useComposerControllerHelper86(
    useComposerControllerParam23,
    useComposerControllerParam24,
  ) {
    if (useComposerControllerParam23.type == `choice`)
      return useComposerControllerParam23.exprs.reduce(
        (accumulator, current) =>
          accumulator.concat(
            useComposerControllerHelper86(
              current,
              useComposerControllerParam24,
            ),
          ),
        [],
      );
    if (useComposerControllerParam23.type == `seq`)
      for (
        let useComposerControllerValue695 = 0;
        ;
        useComposerControllerValue695++
      ) {
        let _useComposerControllerV = useComposerControllerHelper86(
          useComposerControllerParam23.exprs[useComposerControllerValue695],
          useComposerControllerParam24,
        );
        if (
          useComposerControllerValue695 ==
          useComposerControllerParam23.exprs.length - 1
        )
          return _useComposerControllerV;
        useComposerControllerHelper85(
          _useComposerControllerV,
          (useComposerControllerParam24 = useComposerControllerHelper83()),
        );
      }
    else if (useComposerControllerParam23.type == `star`) {
      let _useComposerControllerV = useComposerControllerHelper83();
      return (
        useComposerControllerHelper84(
          useComposerControllerParam24,
          _useComposerControllerV,
        ),
        useComposerControllerHelper85(
          useComposerControllerHelper86(
            useComposerControllerParam23.expr,
            _useComposerControllerV,
          ),
          _useComposerControllerV,
        ),
        [useComposerControllerHelper84(_useComposerControllerV)]
      );
    } else if (useComposerControllerParam23.type == `plus`) {
      let _useComposerControllerV = useComposerControllerHelper83();
      return (
        useComposerControllerHelper85(
          useComposerControllerHelper86(
            useComposerControllerParam23.expr,
            useComposerControllerParam24,
          ),
          _useComposerControllerV,
        ),
        useComposerControllerHelper85(
          useComposerControllerHelper86(
            useComposerControllerParam23.expr,
            _useComposerControllerV,
          ),
          _useComposerControllerV,
        ),
        [useComposerControllerHelper84(_useComposerControllerV)]
      );
    } else if (useComposerControllerParam23.type == `opt`)
      return [
        useComposerControllerHelper84(useComposerControllerParam24),
      ].concat(
        useComposerControllerHelper86(
          useComposerControllerParam23.expr,
          useComposerControllerParam24,
        ),
      );
    else if (useComposerControllerParam23.type == `range`) {
      let _useComposerControllerV = useComposerControllerParam24;
      for (
        let useComposerControllerValue768 = 0;
        useComposerControllerValue768 < useComposerControllerParam23.min;
        useComposerControllerValue768++
      ) {
        let useComposerControllerValue818 = useComposerControllerHelper83();
        (useComposerControllerHelper85(
          useComposerControllerHelper86(
            useComposerControllerParam23.expr,
            _useComposerControllerV,
          ),
          useComposerControllerValue818,
        ),
          (_useComposerControllerV = useComposerControllerValue818));
      }
      if (useComposerControllerParam23.max == -1)
        useComposerControllerHelper85(
          useComposerControllerHelper86(
            useComposerControllerParam23.expr,
            _useComposerControllerV,
          ),
          _useComposerControllerV,
        );
      else
        for (
          let useComposerControllerValue744 = useComposerControllerParam23.min;
          useComposerControllerValue744 < useComposerControllerParam23.max;
          useComposerControllerValue744++
        ) {
          let useComposerControllerValue808 = useComposerControllerHelper83();
          (useComposerControllerHelper84(
            _useComposerControllerV,
            useComposerControllerValue808,
          ),
            useComposerControllerHelper85(
              useComposerControllerHelper86(
                useComposerControllerParam23.expr,
                _useComposerControllerV,
              ),
              useComposerControllerValue808,
            ),
            (_useComposerControllerV = useComposerControllerValue808));
        }
      return [useComposerControllerHelper84(_useComposerControllerV)];
    } else if (useComposerControllerParam23.type == `name`)
      return [
        useComposerControllerHelper84(
          useComposerControllerParam24,
          void 0,
          useComposerControllerParam23.value,
        ),
      ];
    else throw Error(`Unknown expr type`);
  }
}
function useComposerControllerHelper25(
  useComposerControllerParam865,
  useComposerControllerParam866,
) {
  return useComposerControllerParam866 - useComposerControllerParam865;
}
function useComposerControllerHelper26(
  useComposerControllerParam285,
  useComposerControllerParam286,
) {
  let useComposerControllerValue380 = [];
  return (
    useComposerControllerHelper92(useComposerControllerParam286),
    useComposerControllerValue380.sort(useComposerControllerHelper25)
  );
  function useComposerControllerHelper92(useComposerControllerParam392) {
    let useComposerControllerValue479 =
      useComposerControllerParam285[useComposerControllerParam392];
    if (
      useComposerControllerValue479.length == 1 &&
      !useComposerControllerValue479[0].term
    )
      return useComposerControllerHelper92(useComposerControllerValue479[0].to);
    useComposerControllerValue380.push(useComposerControllerParam392);
    for (
      let useComposerControllerValue715 = 0;
      useComposerControllerValue715 < useComposerControllerValue479.length;
      useComposerControllerValue715++
    ) {
      let { term: term, to: to } =
        useComposerControllerValue479[useComposerControllerValue715];
      !term &&
        useComposerControllerValue380.indexOf(to) == -1 &&
        useComposerControllerHelper92(to);
    }
  }
}
function useComposerControllerHelper27(useComposerControllerParam60) {
  let useComposerControllerValue137 = Object.create(null);
  return useComposerControllerHelper87(
    useComposerControllerHelper26(useComposerControllerParam60, 0),
  );
  function useComposerControllerHelper87(useComposerControllerParam95) {
    let useComposerControllerValue171 = [];
    useComposerControllerParam95.forEach((item) => {
      useComposerControllerParam60[item].forEach(({ term: term, to: to }) => {
        if (!term) return;
        let useComposerControllerValue480;
        for (
          let useComposerControllerValue789 = 0;
          useComposerControllerValue789 < useComposerControllerValue171.length;
          useComposerControllerValue789++
        )
          useComposerControllerValue171[useComposerControllerValue789][0] ==
            term &&
            (useComposerControllerValue480 =
              useComposerControllerValue171[useComposerControllerValue789][1]);
        useComposerControllerHelper26(useComposerControllerParam60, to).forEach(
          (_item) => {
            (useComposerControllerValue480 ||
              useComposerControllerValue171.push([
                term,
                (useComposerControllerValue480 = []),
              ]),
              useComposerControllerValue480.indexOf(_item) == -1 &&
                useComposerControllerValue480.push(_item));
          },
        );
      });
    });
    let useComposerControllerValue172 = (useComposerControllerValue137[
      useComposerControllerParam95.join(`,`)
    ] = new useComposerControllerValue10(
      useComposerControllerParam95.indexOf(
        useComposerControllerParam60.length - 1,
      ) > -1,
    ));
    for (
      let useComposerControllerValue613 = 0;
      useComposerControllerValue613 < useComposerControllerValue171.length;
      useComposerControllerValue613++
    ) {
      let useComposerControllerValue710 = useComposerControllerValue171[
        useComposerControllerValue613
      ][1].sort(useComposerControllerHelper25);
      useComposerControllerValue172.next.push({
        type: useComposerControllerValue171[useComposerControllerValue613][0],
        next:
          useComposerControllerValue137[
            useComposerControllerValue710.join(`,`)
          ] || useComposerControllerHelper87(useComposerControllerValue710),
      });
    }
    return useComposerControllerValue172;
  }
}
function useComposerControllerHelper28(
  useComposerControllerParam101,
  useComposerControllerParam102,
) {
  for (
    let useComposerControllerValue195 = 0,
      useComposerControllerValue196 = [useComposerControllerParam101];
    useComposerControllerValue195 < useComposerControllerValue196.length;
    useComposerControllerValue195++
  ) {
    let useComposerControllerValue225 =
        useComposerControllerValue196[useComposerControllerValue195],
      useComposerControllerValue226 = !useComposerControllerValue225.validEnd,
      useComposerControllerValue227 = [];
    for (
      let useComposerControllerValue496 = 0;
      useComposerControllerValue496 < useComposerControllerValue225.next.length;
      useComposerControllerValue496++
    ) {
      let { type: type, next: _useComposerControllerV } =
        useComposerControllerValue225.next[useComposerControllerValue496];
      (useComposerControllerValue227.push(type.name),
        useComposerControllerValue226 &&
          !(type.isText || type.hasRequiredAttrs()) &&
          (useComposerControllerValue226 = !1),
        useComposerControllerValue196.indexOf(_useComposerControllerV) == -1 &&
          useComposerControllerValue196.push(_useComposerControllerV));
    }
    useComposerControllerValue226 &&
      useComposerControllerParam102.err(
        `Only non-generatable nodes (` +
          useComposerControllerValue227.join(`, `) +
          `) in a required position (see https://prosemirror.net/docs/guide/#generatable)`,
      );
  }
}
function useComposerControllerHelper29(useComposerControllerParam472) {
  let useComposerControllerValue567 = Object.create(null);
  for (let useComposerControllerValue733 in useComposerControllerParam472) {
    let useComposerControllerValue769 =
      useComposerControllerParam472[useComposerControllerValue733];
    if (!useComposerControllerValue769.hasDefault) return null;
    useComposerControllerValue567[useComposerControllerValue733] =
      useComposerControllerValue769.default;
  }
  return useComposerControllerValue567;
}
function useComposerControllerHelper30(
  useComposerControllerParam295,
  useComposerControllerParam296,
) {
  let useComposerControllerValue390 = Object.create(null);
  for (let useComposerControllerValue493 in useComposerControllerParam295) {
    let useComposerControllerValue538 =
      useComposerControllerParam296 &&
      useComposerControllerParam296[useComposerControllerValue493];
    if (useComposerControllerValue538 === void 0) {
      let useComposerControllerValue628 =
        useComposerControllerParam295[useComposerControllerValue493];
      if (useComposerControllerValue628.hasDefault)
        useComposerControllerValue538 = useComposerControllerValue628.default;
      else
        throw RangeError(
          `No value supplied for attribute ` + useComposerControllerValue493,
        );
    }
    useComposerControllerValue390[useComposerControllerValue493] =
      useComposerControllerValue538;
  }
  return useComposerControllerValue390;
}
function useComposerControllerHelper31(
  useComposerControllerParam348,
  useComposerControllerParam349,
  useComposerControllerParam350,
  useComposerControllerParam351,
) {
  for (let useComposerControllerValue643 in useComposerControllerParam349)
    if (!(useComposerControllerValue643 in useComposerControllerParam348))
      throw RangeError(
        `Unsupported attribute ${useComposerControllerValue643} for ${useComposerControllerParam350} of type ${useComposerControllerValue643}`,
      );
  for (let useComposerControllerValue770 in useComposerControllerParam348) {
    let useComposerControllerValue807 =
      useComposerControllerParam348[useComposerControllerValue770];
    useComposerControllerValue807.validate &&
      useComposerControllerValue807.validate(
        useComposerControllerParam349[useComposerControllerValue770],
      );
  }
}
function useComposerControllerHelper32(
  useComposerControllerParam567,
  useComposerControllerParam568,
) {
  let useComposerControllerValue650 = Object.create(null);
  if (useComposerControllerParam568)
    for (let useComposerControllerValue811 in useComposerControllerParam568)
      useComposerControllerValue650[useComposerControllerValue811] =
        new useComposerControllerValue13(
          useComposerControllerParam567,
          useComposerControllerValue811,
          useComposerControllerParam568[useComposerControllerValue811],
        );
  return useComposerControllerValue650;
}
var useComposerControllerValue12 = class UseComposerControllerClass5 {
  constructor(
    useComposerControllerParam185,
    useComposerControllerParam186,
    useComposerControllerParam187,
  ) {
    ((this.name = useComposerControllerParam185),
      (this.schema = useComposerControllerParam186),
      (this.spec = useComposerControllerParam187),
      (this.markSet = null),
      (this.groups = useComposerControllerParam187.group
        ? useComposerControllerParam187.group.split(` `)
        : []),
      (this.attrs = useComposerControllerHelper32(
        useComposerControllerParam185,
        useComposerControllerParam187.attrs,
      )),
      (this.defaultAttrs = useComposerControllerHelper29(this.attrs)),
      (this.contentMatch = null),
      (this.inlineContent = null),
      (this.isBlock = !(
        useComposerControllerParam187.inline ||
        useComposerControllerParam185 == `text`
      )),
      (this.isText = useComposerControllerParam185 == `text`));
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == useComposerControllerValue10.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(useComposerControllerParam782) {
    return this.groups.indexOf(useComposerControllerParam782) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? `pre` : `normal`);
  }
  hasRequiredAttrs() {
    for (let useComposerControllerValue752 in this.attrs)
      if (this.attrs[useComposerControllerValue752].isRequired) return !0;
    return !1;
  }
  compatibleContent(useComposerControllerParam616) {
    return (
      this == useComposerControllerParam616 ||
      this.contentMatch.compatible(useComposerControllerParam616.contentMatch)
    );
  }
  computeAttrs(useComposerControllerParam623) {
    return !useComposerControllerParam623 && this.defaultAttrs
      ? this.defaultAttrs
      : useComposerControllerHelper30(
          this.attrs,
          useComposerControllerParam623,
        );
  }
  create(
    useComposerControllerParam398 = null,
    useComposerControllerParam399,
    useComposerControllerParam400,
  ) {
    if (this.isText) throw Error(`NodeType.create can't construct text nodes`);
    return new useComposerControllerValue8(
      this,
      this.computeAttrs(useComposerControllerParam398),
      useComposerControllerV.from(useComposerControllerParam399),
      useComposerControllerY.setFrom(useComposerControllerParam400),
    );
  }
  createChecked(
    useComposerControllerParam491 = null,
    useComposerControllerParam492,
    useComposerControllerParam493,
  ) {
    return (
      (useComposerControllerParam492 = useComposerControllerV.from(
        useComposerControllerParam492,
      )),
      this.checkContent(useComposerControllerParam492),
      new useComposerControllerValue8(
        this,
        this.computeAttrs(useComposerControllerParam491),
        useComposerControllerParam492,
        useComposerControllerY.setFrom(useComposerControllerParam493),
      )
    );
  }
  createAndFill(
    useComposerControllerParam194 = null,
    useComposerControllerParam195,
    useComposerControllerParam196,
  ) {
    if (
      ((useComposerControllerParam194 = this.computeAttrs(
        useComposerControllerParam194,
      )),
      (useComposerControllerParam195 = useComposerControllerV.from(
        useComposerControllerParam195,
      )),
      useComposerControllerParam195.size)
    ) {
      let useComposerControllerValue734 = this.contentMatch.fillBefore(
        useComposerControllerParam195,
      );
      if (!useComposerControllerValue734) return null;
      useComposerControllerParam195 = useComposerControllerValue734.append(
        useComposerControllerParam195,
      );
    }
    let useComposerControllerValue285 = this.contentMatch.matchFragment(
        useComposerControllerParam195,
      ),
      useComposerControllerValue286 =
        useComposerControllerValue285 &&
        useComposerControllerValue285.fillBefore(
          useComposerControllerV.empty,
          !0,
        );
    return useComposerControllerValue286
      ? new useComposerControllerValue8(
          this,
          useComposerControllerParam194,
          useComposerControllerParam195.append(useComposerControllerValue286),
          useComposerControllerY.setFrom(useComposerControllerParam196),
        )
      : null;
  }
  validContent(useComposerControllerParam352) {
    let useComposerControllerValue434 = this.contentMatch.matchFragment(
      useComposerControllerParam352,
    );
    if (
      !useComposerControllerValue434 ||
      !useComposerControllerValue434.validEnd
    )
      return !1;
    for (
      let useComposerControllerValue705 = 0;
      useComposerControllerValue705 < useComposerControllerParam352.childCount;
      useComposerControllerValue705++
    )
      if (
        !this.allowsMarks(
          useComposerControllerParam352.child(useComposerControllerValue705)
            .marks,
        )
      )
        return !1;
    return !0;
  }
  checkContent(useComposerControllerParam455) {
    if (!this.validContent(useComposerControllerParam455))
      throw RangeError(
        `Invalid content for node ${this.name}: ${useComposerControllerParam455.toString().slice(0, 50)}`,
      );
  }
  checkAttrs(useComposerControllerParam766) {
    useComposerControllerHelper31(
      this.attrs,
      useComposerControllerParam766,
      `node`,
      this.name,
    );
  }
  allowsMarkType(useComposerControllerParam644) {
    return (
      this.markSet == null ||
      this.markSet.indexOf(useComposerControllerParam644) > -1
    );
  }
  allowsMarks(useComposerControllerParam457) {
    if (this.markSet == null) return !0;
    for (
      let useComposerControllerValue735 = 0;
      useComposerControllerValue735 < useComposerControllerParam457.length;
      useComposerControllerValue735++
    )
      if (
        !this.allowsMarkType(
          useComposerControllerParam457[useComposerControllerValue735].type,
        )
      )
        return !1;
    return !0;
  }
  allowedMarks(useComposerControllerParam353) {
    if (this.markSet == null) return useComposerControllerParam353;
    let useComposerControllerValue435;
    for (
      let useComposerControllerValue666 = 0;
      useComposerControllerValue666 < useComposerControllerParam353.length;
      useComposerControllerValue666++
    )
      this.allowsMarkType(
        useComposerControllerParam353[useComposerControllerValue666].type,
      )
        ? useComposerControllerValue435 &&
          useComposerControllerValue435.push(
            useComposerControllerParam353[useComposerControllerValue666],
          )
        : (useComposerControllerValue435 ||=
            useComposerControllerParam353.slice(
              0,
              useComposerControllerValue666,
            ));
    return useComposerControllerValue435
      ? useComposerControllerValue435.length
        ? useComposerControllerValue435
        : useComposerControllerY.none
      : useComposerControllerParam353;
  }
  static compile(useComposerControllerParam115, useComposerControllerParam116) {
    let useComposerControllerValue193 = Object.create(null);
    useComposerControllerParam115.forEach(
      (item, index) =>
        (useComposerControllerValue193[item] = new UseComposerControllerClass5(
          item,
          useComposerControllerParam116,
          index,
        )),
    );
    let useComposerControllerValue194 =
      useComposerControllerParam116.spec.topNode || `doc`;
    if (!useComposerControllerValue193[useComposerControllerValue194])
      throw RangeError(
        `Schema is missing its top node type ('` +
          useComposerControllerValue194 +
          `')`,
      );
    if (!useComposerControllerValue193.text)
      throw RangeError(`Every schema needs a 'text' type`);
    for (let useComposerControllerValue663 in useComposerControllerValue193.text
      .attrs)
      throw RangeError(`The text node type should not have attributes`);
    return useComposerControllerValue193;
  }
};
function useComposerControllerHelper33(
  useComposerControllerParam317,
  useComposerControllerParam318,
  useComposerControllerParam319,
) {
  let useComposerControllerValue408 = useComposerControllerParam319.split(`|`);
  return (useComposerControllerParam425) => {
    let useComposerControllerValue517 =
      useComposerControllerParam425 === null
        ? `null`
        : typeof useComposerControllerParam425;
    if (
      useComposerControllerValue408.indexOf(useComposerControllerValue517) < 0
    )
      throw RangeError(
        `Expected value of type ${useComposerControllerValue408} for attribute ${useComposerControllerParam318} on type ${useComposerControllerParam317}, got ${useComposerControllerValue517}`,
      );
  };
}
var useComposerControllerValue13 = class {
    constructor(
      useComposerControllerParam333,
      useComposerControllerParam334,
      useComposerControllerParam335,
    ) {
      ((this.hasDefault = Object.prototype.hasOwnProperty.call(
        useComposerControllerParam335,
        `default`,
      )),
        (this.default = useComposerControllerParam335.default),
        (this.validate =
          typeof useComposerControllerParam335.validate == `string`
            ? useComposerControllerHelper33(
                useComposerControllerParam333,
                useComposerControllerParam334,
                useComposerControllerParam335.validate,
              )
            : useComposerControllerParam335.validate));
    }
    get isRequired() {
      return !this.hasDefault;
    }
  },
  useComposerControllerValue14 = class UseComposerControllerClass23 {
    constructor(
      useComposerControllerParam356,
      useComposerControllerParam357,
      useComposerControllerParam358,
      useComposerControllerParam359,
    ) {
      ((this.name = useComposerControllerParam356),
        (this.rank = useComposerControllerParam357),
        (this.schema = useComposerControllerParam358),
        (this.spec = useComposerControllerParam359),
        (this.attrs = useComposerControllerHelper32(
          useComposerControllerParam356,
          useComposerControllerParam359.attrs,
        )),
        (this.excluded = null));
      let useComposerControllerValue444 = useComposerControllerHelper29(
        this.attrs,
      );
      this.instance = useComposerControllerValue444
        ? new useComposerControllerY(this, useComposerControllerValue444)
        : null;
    }
    create(useComposerControllerParam617 = null) {
      return !useComposerControllerParam617 && this.instance
        ? this.instance
        : new useComposerControllerY(
            this,
            useComposerControllerHelper30(
              this.attrs,
              useComposerControllerParam617,
            ),
          );
    }
    static compile(
      useComposerControllerParam553,
      useComposerControllerParam554,
    ) {
      let useComposerControllerValue631 = Object.create(null),
        useComposerControllerValue632 = 0;
      return (
        useComposerControllerParam553.forEach(
          (item, index) =>
            (useComposerControllerValue631[item] =
              new UseComposerControllerClass23(
                item,
                useComposerControllerValue632++,
                useComposerControllerParam554,
                index,
              )),
        ),
        useComposerControllerValue631
      );
    }
    removeFromSet(useComposerControllerParam502) {
      for (
        var useComposerControllerValue590 = 0;
        useComposerControllerValue590 < useComposerControllerParam502.length;
        useComposerControllerValue590++
      )
        useComposerControllerParam502[useComposerControllerValue590].type ==
          this &&
          ((useComposerControllerParam502 = useComposerControllerParam502
            .slice(0, useComposerControllerValue590)
            .concat(
              useComposerControllerParam502.slice(
                useComposerControllerValue590 + 1,
              ),
            )),
          useComposerControllerValue590--);
      return useComposerControllerParam502;
    }
    isInSet(useComposerControllerParam658) {
      for (
        let useComposerControllerValue766 = 0;
        useComposerControllerValue766 < useComposerControllerParam658.length;
        useComposerControllerValue766++
      )
        if (
          useComposerControllerParam658[useComposerControllerValue766].type ==
          this
        )
          return useComposerControllerParam658[useComposerControllerValue766];
    }
    checkAttrs(useComposerControllerParam767) {
      useComposerControllerHelper31(
        this.attrs,
        useComposerControllerParam767,
        `mark`,
        this.name,
      );
    }
    excludes(useComposerControllerParam773) {
      return this.excluded.indexOf(useComposerControllerParam773) > -1;
    }
  };
export const useComposerControllerX = class {
  constructor(useComposerControllerParam1) {
    ((this.linebreakReplacement = null), (this.cached = Object.create(null)));
    let useComposerControllerValue60 = (this.spec = {});
    for (let useComposerControllerValue820 in useComposerControllerParam1)
      useComposerControllerValue60[useComposerControllerValue820] =
        useComposerControllerParam1[useComposerControllerValue820];
    ((useComposerControllerValue60.nodes = useComposerControllerHelper1.from(
      useComposerControllerParam1.nodes,
    )),
      (useComposerControllerValue60.marks = useComposerControllerHelper1.from(
        useComposerControllerParam1.marks || {},
      )),
      (this.nodes = useComposerControllerValue12.compile(
        this.spec.nodes,
        this,
      )),
      (this.marks = useComposerControllerValue14.compile(
        this.spec.marks,
        this,
      )));
    let useComposerControllerValue61 = Object.create(null);
    for (let useComposerControllerValue101 in this.nodes) {
      if (useComposerControllerValue101 in this.marks)
        throw RangeError(
          useComposerControllerValue101 + ` can not be both a node and a mark`,
        );
      let useComposerControllerValue102 =
          this.nodes[useComposerControllerValue101],
        useComposerControllerValue103 =
          useComposerControllerValue102.spec.content || ``,
        useComposerControllerValue104 =
          useComposerControllerValue102.spec.marks;
      if (
        ((useComposerControllerValue102.contentMatch =
          useComposerControllerValue61[useComposerControllerValue103] ||
          (useComposerControllerValue61[useComposerControllerValue103] =
            useComposerControllerValue10.parse(
              useComposerControllerValue103,
              this.nodes,
            ))),
        (useComposerControllerValue102.inlineContent =
          useComposerControllerValue102.contentMatch.inlineContent),
        useComposerControllerValue102.spec.linebreakReplacement)
      ) {
        if (this.linebreakReplacement)
          throw RangeError(`Multiple linebreak nodes defined`);
        if (
          !useComposerControllerValue102.isInline ||
          !useComposerControllerValue102.isLeaf
        )
          throw RangeError(
            `Linebreak replacement nodes must be inline leaf nodes`,
          );
        this.linebreakReplacement = useComposerControllerValue102;
      }
      useComposerControllerValue102.markSet =
        useComposerControllerValue104 == `_`
          ? null
          : useComposerControllerValue104
            ? useComposerControllerHelper34(
                this,
                useComposerControllerValue104.split(` `),
              )
            : useComposerControllerValue104 == `` ||
                !useComposerControllerValue102.inlineContent
              ? []
              : null;
    }
    for (let useComposerControllerValue574 in this.marks) {
      let useComposerControllerValue654 =
          this.marks[useComposerControllerValue574],
        useComposerControllerValue655 =
          useComposerControllerValue654.spec.excludes;
      useComposerControllerValue654.excluded =
        useComposerControllerValue655 == null
          ? [useComposerControllerValue654]
          : useComposerControllerValue655 == ``
            ? []
            : useComposerControllerHelper34(
                this,
                useComposerControllerValue655.split(` `),
              );
    }
    ((this.nodeFromJSON = (useComposerControllerParam873) =>
      useComposerControllerValue8.fromJSON(
        this,
        useComposerControllerParam873,
      )),
      (this.markFromJSON = (useComposerControllerParam874) =>
        useComposerControllerY.fromJSON(this, useComposerControllerParam874)),
      (this.topNodeType = this.nodes[this.spec.topNode || `doc`]),
      (this.cached.wrappings = Object.create(null)));
  }
  node(
    useComposerControllerParam216,
    useComposerControllerParam217 = null,
    useComposerControllerParam218,
    useComposerControllerParam219,
  ) {
    if (typeof useComposerControllerParam216 == `string`)
      useComposerControllerParam216 = this.nodeType(
        useComposerControllerParam216,
      );
    else if (
      !(useComposerControllerParam216 instanceof useComposerControllerValue12)
    )
      throw RangeError(`Invalid node type: ` + useComposerControllerParam216);
    else if (useComposerControllerParam216.schema != this)
      throw RangeError(
        `Node type from different schema used (` +
          useComposerControllerParam216.name +
          `)`,
      );
    return useComposerControllerParam216.createChecked(
      useComposerControllerParam217,
      useComposerControllerParam218,
      useComposerControllerParam219,
    );
  }
  text(useComposerControllerParam624, useComposerControllerParam625) {
    let useComposerControllerValue706 = this.nodes.text;
    return new useComposerControllerValue9(
      useComposerControllerValue706,
      useComposerControllerValue706.defaultAttrs,
      useComposerControllerParam624,
      useComposerControllerY.setFrom(useComposerControllerParam625),
    );
  }
  mark(useComposerControllerParam662, useComposerControllerParam663) {
    return (
      typeof useComposerControllerParam662 == `string` &&
        (useComposerControllerParam662 =
          this.marks[useComposerControllerParam662]),
      useComposerControllerParam662.create(useComposerControllerParam663)
    );
  }
  nodeType(useComposerControllerParam591) {
    let useComposerControllerValue673 =
      this.nodes[useComposerControllerParam591];
    if (!useComposerControllerValue673)
      throw RangeError(`Unknown node type: ` + useComposerControllerParam591);
    return useComposerControllerValue673;
  }
};
function useComposerControllerHelper34(
  useComposerControllerParam179,
  useComposerControllerParam180,
) {
  let useComposerControllerValue264 = [];
  for (
    let useComposerControllerValue309 = 0;
    useComposerControllerValue309 < useComposerControllerParam180.length;
    useComposerControllerValue309++
  ) {
    let useComposerControllerValue355 =
        useComposerControllerParam180[useComposerControllerValue309],
      useComposerControllerValue356 =
        useComposerControllerParam179.marks[useComposerControllerValue355],
      _useComposerControllerV = useComposerControllerValue356;
    if (useComposerControllerValue356)
      useComposerControllerValue264.push(useComposerControllerValue356);
    else
      for (let useComposerControllerValue584 in useComposerControllerParam179.marks) {
        let useComposerControllerValue656 =
          useComposerControllerParam179.marks[useComposerControllerValue584];
        (useComposerControllerValue355 == `_` ||
          (useComposerControllerValue656.spec.group &&
            useComposerControllerValue656.spec.group
              .split(` `)
              .indexOf(useComposerControllerValue355) > -1)) &&
          useComposerControllerValue264.push(
            (_useComposerControllerV = useComposerControllerValue656),
          );
      }
    if (!_useComposerControllerV)
      throw SyntaxError(
        `Unknown mark type: '` +
          useComposerControllerParam180[useComposerControllerValue309] +
          `'`,
      );
  }
  return useComposerControllerValue264;
}
function useComposerControllerHelper35(useComposerControllerParam854) {
  return useComposerControllerParam854.tag != null;
}
function useComposerControllerHelper36(useComposerControllerParam839) {
  return useComposerControllerParam839.style != null;
}
var useComposerControllerValue15 = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0,
  },
  useComposerControllerValue16 = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0,
  },
  useComposerControllerValue17 = {
    ol: !0,
    ul: !0,
  },
  useComposerControllerValue18 = 1,
  useComposerControllerValue19 = 2,
  useComposerControllerValue20 = 4;
export const useComposerControllerG = class UseComposerControllerClass8 {
  constructor(useComposerControllerParam93, useComposerControllerParam94) {
    ((this.schema = useComposerControllerParam93),
      (this.rules = useComposerControllerParam94),
      (this.tags = []),
      (this.styles = []));
    let useComposerControllerValue170 = (this.matchedStyles = []);
    (useComposerControllerParam94.forEach((item) => {
      if (useComposerControllerHelper35(item)) this.tags.push(item);
      else if (useComposerControllerHelper36(item)) {
        let useComposerControllerValue711 = /[^=]*/.exec(item.style)[0];
        (useComposerControllerValue170.indexOf(useComposerControllerValue711) <
          0 &&
          useComposerControllerValue170.push(useComposerControllerValue711),
          this.styles.push(item));
      }
    }),
      (this.normalizeLists = !this.tags.some((item) => {
        if (!/^(ul|ol)\b/.test(item.tag) || !item.node) return !1;
        let useComposerControllerValue604 =
          useComposerControllerParam93.nodes[item.node];
        return useComposerControllerValue604.contentMatch.matchType(
          useComposerControllerValue604,
        );
      })));
  }
  parse(useComposerControllerParam593, useComposerControllerParam594 = {}) {
    let useComposerControllerValue679 = new useComposerControllerValue22(
      this,
      useComposerControllerParam594,
      !1,
    );
    return (
      useComposerControllerValue679.addAll(
        useComposerControllerParam593,
        useComposerControllerY.none,
        useComposerControllerParam594.from,
        useComposerControllerParam594.to,
      ),
      useComposerControllerValue679.finish()
    );
  }
  parseSlice(
    useComposerControllerParam533,
    useComposerControllerParam534 = {},
  ) {
    let useComposerControllerValue617 = new useComposerControllerValue22(
      this,
      useComposerControllerParam534,
      !0,
    );
    return (
      useComposerControllerValue617.addAll(
        useComposerControllerParam533,
        useComposerControllerY.none,
        useComposerControllerParam534.from,
        useComposerControllerParam534.to,
      ),
      useComposerControllerS.maxOpen(useComposerControllerValue617.finish())
    );
  }
  matchTag(
    useComposerControllerParam163,
    useComposerControllerParam164,
    useComposerControllerParam165,
  ) {
    for (
      let useComposerControllerValue276 = useComposerControllerParam165
        ? this.tags.indexOf(useComposerControllerParam165) + 1
        : 0;
      useComposerControllerValue276 < this.tags.length;
      useComposerControllerValue276++
    ) {
      let useComposerControllerValue368 =
        this.tags[useComposerControllerValue276];
      if (
        useComposerControllerHelper39(
          useComposerControllerParam163,
          useComposerControllerValue368.tag,
        ) &&
        (useComposerControllerValue368.namespace === void 0 ||
          useComposerControllerParam163.namespaceURI ==
            useComposerControllerValue368.namespace) &&
        (!useComposerControllerValue368.context ||
          useComposerControllerParam164.matchesContext(
            useComposerControllerValue368.context,
          ))
      ) {
        if (useComposerControllerValue368.getAttrs) {
          let useComposerControllerValue762 =
            useComposerControllerValue368.getAttrs(
              useComposerControllerParam163,
            );
          if (useComposerControllerValue762 === !1) continue;
          useComposerControllerValue368.attrs =
            useComposerControllerValue762 || void 0;
        }
        return useComposerControllerValue368;
      }
    }
  }
  matchStyle(
    useComposerControllerParam129,
    useComposerControllerParam130,
    useComposerControllerParam131,
    useComposerControllerParam132,
  ) {
    for (
      let useComposerControllerValue229 = useComposerControllerParam132
        ? this.styles.indexOf(useComposerControllerParam132) + 1
        : 0;
      useComposerControllerValue229 < this.styles.length;
      useComposerControllerValue229++
    ) {
      let useComposerControllerValue304 =
          this.styles[useComposerControllerValue229],
        useComposerControllerValue305 = useComposerControllerValue304.style;
      if (
        !(
          useComposerControllerValue305.indexOf(
            useComposerControllerParam129,
          ) != 0 ||
          (useComposerControllerValue304.context &&
            !useComposerControllerParam131.matchesContext(
              useComposerControllerValue304.context,
            )) ||
          (useComposerControllerValue305.length >
            useComposerControllerParam129.length &&
            (useComposerControllerValue305.charCodeAt(
              useComposerControllerParam129.length,
            ) != 61 ||
              useComposerControllerValue305.slice(
                useComposerControllerParam129.length + 1,
              ) != useComposerControllerParam130))
        )
      ) {
        if (useComposerControllerValue304.getAttrs) {
          let useComposerControllerValue763 =
            useComposerControllerValue304.getAttrs(
              useComposerControllerParam130,
            );
          if (useComposerControllerValue763 === !1) continue;
          useComposerControllerValue304.attrs =
            useComposerControllerValue763 || void 0;
        }
        return useComposerControllerValue304;
      }
    }
  }
  static schemaRules(useComposerControllerParam66) {
    let useComposerControllerValue142 = [];
    function useComposerControllerHelper88(useComposerControllerParam412) {
      let useComposerControllerValue504 =
          useComposerControllerParam412.priority == null
            ? 50
            : useComposerControllerParam412.priority,
        useComposerControllerValue505 = 0;
      for (
        ;
        useComposerControllerValue505 < useComposerControllerValue142.length;
        useComposerControllerValue505++
      ) {
        let useComposerControllerValue771 =
          useComposerControllerValue142[useComposerControllerValue505];
        if (
          (useComposerControllerValue771.priority == null
            ? 50
            : useComposerControllerValue771.priority) <
          useComposerControllerValue504
        )
          break;
      }
      useComposerControllerValue142.splice(
        useComposerControllerValue505,
        0,
        useComposerControllerParam412,
      );
    }
    for (let useComposerControllerValue563 in useComposerControllerParam66.marks) {
      let useComposerControllerValue615 =
        useComposerControllerParam66.marks[useComposerControllerValue563].spec
          .parseDOM;
      useComposerControllerValue615 &&
        useComposerControllerValue615.forEach((item) => {
          (useComposerControllerHelper88(
            (item = useComposerControllerHelper40(item)),
          ),
            item.mark ||
              item.ignore ||
              item.clearMark ||
              (item.mark = useComposerControllerValue563));
        });
    }
    for (let useComposerControllerValue568 in useComposerControllerParam66.nodes) {
      let useComposerControllerValue633 =
        useComposerControllerParam66.nodes[useComposerControllerValue568].spec
          .parseDOM;
      useComposerControllerValue633 &&
        useComposerControllerValue633.forEach((item) => {
          (useComposerControllerHelper88(
            (item = useComposerControllerHelper40(item)),
          ),
            item.node ||
              item.ignore ||
              item.mark ||
              (item.node = useComposerControllerValue568));
        });
    }
    return useComposerControllerValue142;
  }
  static fromSchema(useComposerControllerParam561) {
    return (
      useComposerControllerParam561.cached.domParser ||
      (useComposerControllerParam561.cached.domParser =
        new UseComposerControllerClass8(
          useComposerControllerParam561,
          UseComposerControllerClass8.schemaRules(
            useComposerControllerParam561,
          ),
        ))
    );
  }
};
function useComposerControllerHelper37(
  useComposerControllerParam578,
  useComposerControllerParam579,
  useComposerControllerParam580,
) {
  return useComposerControllerParam579 == null
    ? useComposerControllerParam578 &&
      useComposerControllerParam578.whitespace == `pre`
      ? useComposerControllerValue18 | useComposerControllerValue19
      : useComposerControllerParam580 & ~useComposerControllerValue20
    : (useComposerControllerParam579 ? useComposerControllerValue18 : 0) |
        (useComposerControllerParam579 === `full`
          ? useComposerControllerValue19
          : 0);
}
var useComposerControllerValue21 = class {
    constructor(
      useComposerControllerParam360,
      useComposerControllerParam361,
      useComposerControllerParam362,
      useComposerControllerParam363,
      useComposerControllerParam364,
      useComposerControllerParam365,
    ) {
      ((this.type = useComposerControllerParam360),
        (this.attrs = useComposerControllerParam361),
        (this.marks = useComposerControllerParam362),
        (this.solid = useComposerControllerParam363),
        (this.options = useComposerControllerParam365),
        (this.content = []),
        (this.activeMarks = useComposerControllerY.none),
        (this.match =
          useComposerControllerParam364 ||
          (useComposerControllerParam365 & useComposerControllerValue20
            ? null
            : useComposerControllerParam360.contentMatch)));
    }
    findWrapping(useComposerControllerParam160) {
      if (!this.match) {
        if (!this.type) return [];
        let useComposerControllerValue351 = this.type.contentMatch.fillBefore(
          useComposerControllerV.from(useComposerControllerParam160),
        );
        if (useComposerControllerValue351)
          this.match = this.type.contentMatch.matchFragment(
            useComposerControllerValue351,
          );
        else {
          let useComposerControllerValue680 = this.type.contentMatch,
            useComposerControllerValue681;
          return (useComposerControllerValue681 =
            useComposerControllerValue680.findWrapping(
              useComposerControllerParam160.type,
            ))
            ? ((this.match = useComposerControllerValue680),
              useComposerControllerValue681)
            : null;
        }
      }
      return this.match.findWrapping(useComposerControllerParam160.type);
    }
    finish(useComposerControllerParam74) {
      if (!(this.options & useComposerControllerValue18)) {
        let useComposerControllerValue310 =
            this.content[this.content.length - 1],
          useComposerControllerValue311;
        if (
          useComposerControllerValue310 &&
          useComposerControllerValue310.isText &&
          (useComposerControllerValue311 = /[ \t\r\n\u000c]+$/.exec(
            useComposerControllerValue310.text,
          ))
        ) {
          let useComposerControllerValue512 = useComposerControllerValue310;
          useComposerControllerValue310.text.length ==
          useComposerControllerValue311[0].length
            ? this.content.pop()
            : (this.content[this.content.length - 1] =
                useComposerControllerValue512.withText(
                  useComposerControllerValue512.text.slice(
                    0,
                    useComposerControllerValue512.text.length -
                      useComposerControllerValue311[0].length,
                  ),
                ));
        }
      }
      let useComposerControllerValue147 = useComposerControllerV.from(
        this.content,
      );
      return (
        !useComposerControllerParam74 &&
          this.match &&
          (useComposerControllerValue147 = useComposerControllerValue147.append(
            this.match.fillBefore(useComposerControllerV.empty, !0),
          )),
        this.type
          ? this.type.create(
              this.attrs,
              useComposerControllerValue147,
              this.marks,
            )
          : useComposerControllerValue147
      );
    }
    inlineContext(useComposerControllerParam354) {
      return this.type
        ? this.type.inlineContent
        : this.content.length
          ? this.content[0].isInline
          : useComposerControllerParam354.parentNode &&
            !useComposerControllerValue15.hasOwnProperty(
              useComposerControllerParam354.parentNode.nodeName.toLowerCase(),
            );
    }
  },
  useComposerControllerValue22 = class {
    constructor(
      useComposerControllerParam96,
      useComposerControllerParam97,
      useComposerControllerParam98,
    ) {
      ((this.parser = useComposerControllerParam96),
        (this.options = useComposerControllerParam97),
        (this.isOpen = useComposerControllerParam98),
        (this.open = 0),
        (this.localPreserveWS = !1));
      let useComposerControllerValue173 = useComposerControllerParam97.topNode,
        useComposerControllerValue174,
        useComposerControllerValue175 =
          useComposerControllerHelper37(
            null,
            useComposerControllerParam97.preserveWhitespace,
            0,
          ) | (useComposerControllerParam98 ? useComposerControllerValue20 : 0);
      ((useComposerControllerValue174 = useComposerControllerValue173
        ? new useComposerControllerValue21(
            useComposerControllerValue173.type,
            useComposerControllerValue173.attrs,
            useComposerControllerY.none,
            !0,
            useComposerControllerParam97.topMatch ||
              useComposerControllerValue173.type.contentMatch,
            useComposerControllerValue175,
          )
        : useComposerControllerParam98
          ? new useComposerControllerValue21(
              null,
              null,
              useComposerControllerY.none,
              !0,
              null,
              useComposerControllerValue175,
            )
          : new useComposerControllerValue21(
              useComposerControllerParam96.schema.topNodeType,
              null,
              useComposerControllerY.none,
              !0,
              null,
              useComposerControllerValue175,
            )),
        (this.nodes = [useComposerControllerValue174]),
        (this.find = useComposerControllerParam97.findPositions),
        (this.needsBlock = !1));
    }
    get top() {
      return this.nodes[this.open];
    }
    addDOM(useComposerControllerParam603, useComposerControllerParam604) {
      useComposerControllerParam603.nodeType == 3
        ? this.addTextNode(
            useComposerControllerParam603,
            useComposerControllerParam604,
          )
        : useComposerControllerParam603.nodeType == 1 &&
          this.addElement(
            useComposerControllerParam603,
            useComposerControllerParam604,
          );
    }
    addTextNode(useComposerControllerParam16, useComposerControllerParam17) {
      let useComposerControllerValue85 = useComposerControllerParam16.nodeValue,
        useComposerControllerValue86 = this.top,
        useComposerControllerValue87 =
          useComposerControllerValue86.options & useComposerControllerValue19
            ? `full`
            : this.localPreserveWS ||
              (useComposerControllerValue86.options &
                useComposerControllerValue18) >
                0,
        { schema: schema } = this.parser;
      if (
        useComposerControllerValue87 === `full` ||
        useComposerControllerValue86.inlineContext(
          useComposerControllerParam16,
        ) ||
        /[^ \t\r\n\u000c]/.test(useComposerControllerValue85)
      ) {
        if (!useComposerControllerValue87) {
          if (
            ((useComposerControllerValue85 =
              useComposerControllerValue85.replace(/[ \t\r\n\u000c]+/g, ` `)),
            /^[ \t\r\n\u000c]/.test(useComposerControllerValue85) &&
              this.open == this.nodes.length - 1)
          ) {
            let useComposerControllerValue520 =
                useComposerControllerValue86.content[
                  useComposerControllerValue86.content.length - 1
                ],
              useComposerControllerValue521 =
                useComposerControllerParam16.previousSibling;
            (!useComposerControllerValue520 ||
              (useComposerControllerValue521 &&
                useComposerControllerValue521.nodeName == `BR`) ||
              (useComposerControllerValue520.isText &&
                /[ \t\r\n\u000c]$/.test(useComposerControllerValue520.text))) &&
              (useComposerControllerValue85 =
                useComposerControllerValue85.slice(1));
          }
        } else if (useComposerControllerValue87 === `full`)
          useComposerControllerValue85 = useComposerControllerValue85.replace(
            /\r\n?/g,
            `
`,
          );
        else if (
          schema.linebreakReplacement &&
          /[\r\n]/.test(useComposerControllerValue85) &&
          this.top.findWrapping(schema.linebreakReplacement.create())
        ) {
          let useComposerControllerValue445 =
            useComposerControllerValue85.split(/\r?\n|\r/);
          for (
            let useComposerControllerValue531 = 0;
            useComposerControllerValue531 <
            useComposerControllerValue445.length;
            useComposerControllerValue531++
          )
            (useComposerControllerValue531 &&
              this.insertNode(
                schema.linebreakReplacement.create(),
                useComposerControllerParam17,
                !0,
              ),
              useComposerControllerValue445[useComposerControllerValue531] &&
                this.insertNode(
                  schema.text(
                    useComposerControllerValue445[
                      useComposerControllerValue531
                    ],
                  ),
                  useComposerControllerParam17,
                  !/\S/.test(
                    useComposerControllerValue445[
                      useComposerControllerValue531
                    ],
                  ),
                ));
          useComposerControllerValue85 = ``;
        } else
          useComposerControllerValue85 = useComposerControllerValue85.replace(
            /\r?\n|\r/g,
            ` `,
          );
        (useComposerControllerValue85 &&
          this.insertNode(
            schema.text(useComposerControllerValue85),
            useComposerControllerParam17,
            !/\S/.test(useComposerControllerValue85),
          ),
          this.findInText(useComposerControllerParam16));
      } else this.findInside(useComposerControllerParam16);
    }
    addElement(
      useComposerControllerParam13,
      useComposerControllerParam14,
      useComposerControllerParam15,
    ) {
      let useComposerControllerValue81 = this.localPreserveWS,
        useComposerControllerValue82 = this.top;
      (useComposerControllerParam13.tagName == `PRE` ||
        /pre/.test(
          useComposerControllerParam13.style &&
            useComposerControllerParam13.style.whiteSpace,
        )) &&
        (this.localPreserveWS = !0);
      let useComposerControllerValue83 =
          useComposerControllerParam13.nodeName.toLowerCase(),
        _useComposerControllerV;
      useComposerControllerValue17.hasOwnProperty(
        useComposerControllerValue83,
      ) &&
        this.parser.normalizeLists &&
        useComposerControllerHelper38(useComposerControllerParam13);
      let useComposerControllerValue84 =
        (this.options.ruleFromNode &&
          this.options.ruleFromNode(useComposerControllerParam13)) ||
        (_useComposerControllerV = this.parser.matchTag(
          useComposerControllerParam13,
          this,
          useComposerControllerParam15,
        ));
      out: if (
        useComposerControllerValue84
          ? useComposerControllerValue84.ignore
          : useComposerControllerValue16.hasOwnProperty(
              useComposerControllerValue83,
            )
      )
        (this.findInside(useComposerControllerParam13),
          this.ignoreFallback(
            useComposerControllerParam13,
            useComposerControllerParam14,
          ));
      else if (
        !useComposerControllerValue84 ||
        useComposerControllerValue84.skip ||
        useComposerControllerValue84.closeParent
      ) {
        useComposerControllerValue84 && useComposerControllerValue84.closeParent
          ? (this.open = Math.max(0, this.open - 1))
          : useComposerControllerValue84 &&
            useComposerControllerValue84.skip.nodeType &&
            (useComposerControllerParam13 = useComposerControllerValue84.skip);
        let useComposerControllerValue166,
          useComposerControllerValue167 = this.needsBlock;
        if (
          useComposerControllerValue15.hasOwnProperty(
            useComposerControllerValue83,
          )
        )
          (useComposerControllerValue82.content.length &&
            useComposerControllerValue82.content[0].isInline &&
            this.open &&
            (this.open--, (useComposerControllerValue82 = this.top)),
            (useComposerControllerValue166 = !0),
            useComposerControllerValue82.type || (this.needsBlock = !0));
        else if (!useComposerControllerParam13.firstChild) {
          this.leafFallback(
            useComposerControllerParam13,
            useComposerControllerParam14,
          );
          break out;
        }
        let __useComposerControllerV =
          useComposerControllerValue84 && useComposerControllerValue84.skip
            ? useComposerControllerParam14
            : this.readStyles(
                useComposerControllerParam13,
                useComposerControllerParam14,
              );
        (__useComposerControllerV &&
          this.addAll(useComposerControllerParam13, __useComposerControllerV),
          useComposerControllerValue166 &&
            this.sync(useComposerControllerValue82),
          (this.needsBlock = useComposerControllerValue167));
      } else {
        let useComposerControllerValue684 = this.readStyles(
          useComposerControllerParam13,
          useComposerControllerParam14,
        );
        useComposerControllerValue684 &&
          this.addElementByRule(
            useComposerControllerParam13,
            useComposerControllerValue84,
            useComposerControllerValue684,
            useComposerControllerValue84.consuming === !1
              ? _useComposerControllerV
              : void 0,
          );
      }
      this.localPreserveWS = useComposerControllerValue81;
    }
    leafFallback(useComposerControllerParam436, useComposerControllerParam437) {
      useComposerControllerParam436.nodeName == `BR` &&
        this.top.type &&
        this.top.type.inlineContent &&
        this.addTextNode(
          useComposerControllerParam436.ownerDocument.createTextNode(`
`),
          useComposerControllerParam437,
        );
    }
    ignoreFallback(
      useComposerControllerParam438,
      useComposerControllerParam439,
    ) {
      useComposerControllerParam438.nodeName == `BR` &&
        (!this.top.type || !this.top.type.inlineContent) &&
        this.findPlace(
          this.parser.schema.text(`-`),
          useComposerControllerParam439,
          !0,
        );
    }
    readStyles(useComposerControllerParam87, useComposerControllerParam88) {
      let useComposerControllerValue161 = useComposerControllerParam87.style;
      if (useComposerControllerValue161 && useComposerControllerValue161.length)
        for (
          let useComposerControllerValue198 = 0;
          useComposerControllerValue198 < this.parser.matchedStyles.length;
          useComposerControllerValue198++
        ) {
          let useComposerControllerValue245 =
              this.parser.matchedStyles[useComposerControllerValue198],
            useComposerControllerValue246 =
              useComposerControllerValue161.getPropertyValue(
                useComposerControllerValue245,
              );
          if (useComposerControllerValue246)
            for (let useComposerControllerValue338; ; ) {
              let useComposerControllerValue367 = this.parser.matchStyle(
                useComposerControllerValue245,
                useComposerControllerValue246,
                this,
                useComposerControllerValue338,
              );
              if (!useComposerControllerValue367) break;
              if (useComposerControllerValue367.ignore) return null;
              if (
                ((useComposerControllerParam88 =
                  useComposerControllerValue367.clearMark
                    ? useComposerControllerParam88.filter(
                        (item) =>
                          !useComposerControllerValue367.clearMark(item),
                      )
                    : useComposerControllerParam88.concat(
                        this.parser.schema.marks[
                          useComposerControllerValue367.mark
                        ].create(useComposerControllerValue367.attrs),
                      )),
                useComposerControllerValue367.consuming === !1)
              )
                useComposerControllerValue338 = useComposerControllerValue367;
              else break;
            }
        }
      return useComposerControllerParam88;
    }
    addElementByRule(
      useComposerControllerParam19,
      useComposerControllerParam20,
      useComposerControllerParam21,
      useComposerControllerParam22,
    ) {
      let useComposerControllerValue89, useComposerControllerValue90;
      if (useComposerControllerParam20.node) {
        if (
          ((useComposerControllerValue90 =
            this.parser.schema.nodes[useComposerControllerParam20.node]),
          useComposerControllerValue90.isLeaf)
        )
          this.insertNode(
            useComposerControllerValue90.create(
              useComposerControllerParam20.attrs,
            ),
            useComposerControllerParam21,
            useComposerControllerParam19.nodeName == `BR`,
          ) ||
            this.leafFallback(
              useComposerControllerParam19,
              useComposerControllerParam21,
            );
        else {
          let useComposerControllerValue728 = this.enter(
            useComposerControllerValue90,
            useComposerControllerParam20.attrs || null,
            useComposerControllerParam21,
            useComposerControllerParam20.preserveWhitespace,
          );
          useComposerControllerValue728 &&
            ((useComposerControllerValue89 = !0),
            (useComposerControllerParam21 = useComposerControllerValue728));
        }
      } else {
        let useComposerControllerValue737 =
          this.parser.schema.marks[useComposerControllerParam20.mark];
        useComposerControllerParam21 = useComposerControllerParam21.concat(
          useComposerControllerValue737.create(
            useComposerControllerParam20.attrs,
          ),
        );
      }
      let _useComposerControllerV = this.top;
      if (useComposerControllerValue90 && useComposerControllerValue90.isLeaf)
        this.findInside(useComposerControllerParam19);
      else if (useComposerControllerParam22)
        this.addElement(
          useComposerControllerParam19,
          useComposerControllerParam21,
          useComposerControllerParam22,
        );
      else if (useComposerControllerParam20.getContent)
        (this.findInside(useComposerControllerParam19),
          useComposerControllerParam20
            .getContent(useComposerControllerParam19, this.parser.schema)
            .forEach((item) =>
              this.insertNode(item, useComposerControllerParam21, !1),
            ));
      else {
        let useComposerControllerValue318 = useComposerControllerParam19;
        (typeof useComposerControllerParam20.contentElement == `string`
          ? (useComposerControllerValue318 =
              useComposerControllerParam19.querySelector(
                useComposerControllerParam20.contentElement,
              ))
          : typeof useComposerControllerParam20.contentElement == `function`
            ? (useComposerControllerValue318 =
                useComposerControllerParam20.contentElement(
                  useComposerControllerParam19,
                ))
            : useComposerControllerParam20.contentElement &&
              (useComposerControllerValue318 =
                useComposerControllerParam20.contentElement),
          this.findAround(
            useComposerControllerParam19,
            useComposerControllerValue318,
            !0,
          ),
          this.addAll(
            useComposerControllerValue318,
            useComposerControllerParam21,
          ),
          this.findAround(
            useComposerControllerParam19,
            useComposerControllerValue318,
            !1,
          ));
      }
      useComposerControllerValue89 &&
        this.sync(_useComposerControllerV) &&
        this.open--;
    }
    addAll(
      useComposerControllerParam325,
      useComposerControllerParam326,
      useComposerControllerParam327,
      useComposerControllerParam328,
    ) {
      let useComposerControllerValue413 = useComposerControllerParam327 || 0;
      for (
        let useComposerControllerValue539 = useComposerControllerParam327
            ? useComposerControllerParam325.childNodes[
                useComposerControllerParam327
              ]
            : useComposerControllerParam325.firstChild,
          _useComposerControllerV =
            useComposerControllerParam328 == null
              ? null
              : useComposerControllerParam325.childNodes[
                  useComposerControllerParam328
                ];
        useComposerControllerValue539 != _useComposerControllerV;
        useComposerControllerValue539 =
          useComposerControllerValue539.nextSibling,
          ++useComposerControllerValue413
      )
        (this.findAtPoint(
          useComposerControllerParam325,
          useComposerControllerValue413,
        ),
          this.addDOM(
            useComposerControllerValue539,
            useComposerControllerParam326,
          ));
      this.findAtPoint(
        useComposerControllerParam325,
        useComposerControllerValue413,
      );
    }
    findPlace(
      useComposerControllerParam170,
      useComposerControllerParam171,
      useComposerControllerParam172,
    ) {
      let useComposerControllerValue256, useComposerControllerValue257;
      for (
        let useComposerControllerValue466 = this.open,
          useComposerControllerValue467 = 0;
        useComposerControllerValue466 >= 0;
        useComposerControllerValue466--
      ) {
        let _useComposerControllerV = this.nodes[useComposerControllerValue466],
          useComposerControllerValue552 = _useComposerControllerV.findWrapping(
            useComposerControllerParam170,
          );
        if (
          useComposerControllerValue552 &&
          (!useComposerControllerValue256 ||
            useComposerControllerValue256.length >
              useComposerControllerValue552.length +
                useComposerControllerValue467) &&
          ((useComposerControllerValue256 = useComposerControllerValue552),
          (useComposerControllerValue257 = _useComposerControllerV),
          !useComposerControllerValue552.length)
        )
          break;
        if (_useComposerControllerV.solid) {
          if (useComposerControllerParam172) break;
          useComposerControllerValue467 += 2;
        }
      }
      if (!useComposerControllerValue256) return null;
      this.sync(useComposerControllerValue257);
      for (
        let useComposerControllerValue753 = 0;
        useComposerControllerValue753 < useComposerControllerValue256.length;
        useComposerControllerValue753++
      )
        useComposerControllerParam171 = this.enterInner(
          useComposerControllerValue256[useComposerControllerValue753],
          null,
          useComposerControllerParam171,
          !1,
        );
      return useComposerControllerParam171;
    }
    insertNode(
      useComposerControllerParam84,
      useComposerControllerParam85,
      useComposerControllerParam86,
    ) {
      if (
        useComposerControllerParam84.isInline &&
        this.needsBlock &&
        !this.top.type
      ) {
        let useComposerControllerValue741 = this.textblockFromContext();
        useComposerControllerValue741 &&
          (useComposerControllerParam85 = this.enterInner(
            useComposerControllerValue741,
            null,
            useComposerControllerParam85,
          ));
      }
      let useComposerControllerValue160 = this.findPlace(
        useComposerControllerParam84,
        useComposerControllerParam85,
        useComposerControllerParam86,
      );
      if (useComposerControllerValue160) {
        this.closeExtra();
        let useComposerControllerValue341 = this.top;
        useComposerControllerValue341.match &&=
          useComposerControllerValue341.match.matchType(
            useComposerControllerParam84.type,
          );
        let useComposerControllerValue342 = useComposerControllerY.none;
        for (let useComposerControllerValue607 of useComposerControllerValue160.concat(
          useComposerControllerParam84.marks,
        ))
          (useComposerControllerValue341.type
            ? useComposerControllerValue341.type.allowsMarkType(
                useComposerControllerValue607.type,
              )
            : useComposerControllerHelper41(
                useComposerControllerValue607.type,
                useComposerControllerParam84.type,
              )) &&
            (useComposerControllerValue342 =
              useComposerControllerValue607.addToSet(
                useComposerControllerValue342,
              ));
        return (
          useComposerControllerValue341.content.push(
            useComposerControllerParam84.mark(useComposerControllerValue342),
          ),
          !0
        );
      }
      return !1;
    }
    enter(
      useComposerControllerParam562,
      useComposerControllerParam563,
      useComposerControllerParam564,
      useComposerControllerParam565,
    ) {
      let useComposerControllerValue646 = this.findPlace(
        useComposerControllerParam562.create(useComposerControllerParam563),
        useComposerControllerParam564,
        !1,
      );
      return (
        (useComposerControllerValue646 &&= this.enterInner(
          useComposerControllerParam562,
          useComposerControllerParam563,
          useComposerControllerParam564,
          !0,
          useComposerControllerParam565,
        )),
        useComposerControllerValue646
      );
    }
    enterInner(
      useComposerControllerParam134,
      useComposerControllerParam135,
      useComposerControllerParam136,
      useComposerControllerParam137 = !1,
      useComposerControllerParam138,
    ) {
      this.closeExtra();
      let useComposerControllerValue213 = this.top;
      useComposerControllerValue213.match =
        useComposerControllerValue213.match &&
        useComposerControllerValue213.match.matchType(
          useComposerControllerParam134,
        );
      let _useComposerControllerV = useComposerControllerHelper37(
        useComposerControllerParam134,
        useComposerControllerParam138,
        useComposerControllerValue213.options,
      );
      useComposerControllerValue213.options & useComposerControllerValue20 &&
        useComposerControllerValue213.content.length == 0 &&
        (_useComposerControllerV |= useComposerControllerValue20);
      let useComposerControllerValue214 = useComposerControllerY.none;
      return (
        (useComposerControllerParam136 = useComposerControllerParam136.filter(
          (item) =>
            (
              useComposerControllerValue213.type
                ? useComposerControllerValue213.type.allowsMarkType(item.type)
                : useComposerControllerHelper41(
                    item.type,
                    useComposerControllerParam134,
                  )
            )
              ? ((useComposerControllerValue214 = item.addToSet(
                  useComposerControllerValue214,
                )),
                !1)
              : !0,
        )),
        this.nodes.push(
          new useComposerControllerValue21(
            useComposerControllerParam134,
            useComposerControllerParam135,
            useComposerControllerValue214,
            useComposerControllerParam137,
            null,
            _useComposerControllerV,
          ),
        ),
        this.open++,
        useComposerControllerParam136
      );
    }
    closeExtra(useComposerControllerParam379 = !1) {
      let useComposerControllerValue456 = this.nodes.length - 1;
      if (useComposerControllerValue456 > this.open) {
        for (
          ;
          useComposerControllerValue456 > this.open;
          useComposerControllerValue456--
        )
          this.nodes[useComposerControllerValue456 - 1].content.push(
            this.nodes[useComposerControllerValue456].finish(
              useComposerControllerParam379,
            ),
          );
        this.nodes.length = this.open + 1;
      }
    }
    finish() {
      return (
        (this.open = 0),
        this.closeExtra(this.isOpen),
        this.nodes[0].finish(!!(this.isOpen || this.options.topOpen))
      );
    }
    sync(useComposerControllerParam429) {
      for (
        let useComposerControllerValue564 = this.open;
        useComposerControllerValue564 >= 0;
        useComposerControllerValue564--
      )
        if (
          this.nodes[useComposerControllerValue564] ==
          useComposerControllerParam429
        )
          return ((this.open = useComposerControllerValue564), !0);
        else
          this.localPreserveWS &&
            (this.nodes[useComposerControllerValue564].options |=
              useComposerControllerValue18);
      return !1;
    }
    get currentPos() {
      this.closeExtra();
      let useComposerControllerValue460 = 0;
      for (
        let useComposerControllerValue591 = this.open;
        useComposerControllerValue591 >= 0;
        useComposerControllerValue591--
      ) {
        let useComposerControllerValue696 =
          this.nodes[useComposerControllerValue591].content;
        for (
          let useComposerControllerValue796 =
            useComposerControllerValue696.length - 1;
          useComposerControllerValue796 >= 0;
          useComposerControllerValue796--
        )
          useComposerControllerValue460 +=
            useComposerControllerValue696[useComposerControllerValue796]
              .nodeSize;
        useComposerControllerValue591 && useComposerControllerValue460++;
      }
      return useComposerControllerValue460;
    }
    findAtPoint(useComposerControllerParam415, useComposerControllerParam416) {
      if (this.find)
        for (
          let useComposerControllerValue580 = 0;
          useComposerControllerValue580 < this.find.length;
          useComposerControllerValue580++
        )
          this.find[useComposerControllerValue580].node ==
            useComposerControllerParam415 &&
            this.find[useComposerControllerValue580].offset ==
              useComposerControllerParam416 &&
            (this.find[useComposerControllerValue580].pos = this.currentPos);
    }
    findInside(useComposerControllerParam376) {
      if (this.find)
        for (
          let useComposerControllerValue532 = 0;
          useComposerControllerValue532 < this.find.length;
          useComposerControllerValue532++
        )
          this.find[useComposerControllerValue532].pos == null &&
            useComposerControllerParam376.nodeType == 1 &&
            useComposerControllerParam376.contains(
              this.find[useComposerControllerValue532].node,
            ) &&
            (this.find[useComposerControllerValue532].pos = this.currentPos);
    }
    findAround(
      useComposerControllerParam238,
      useComposerControllerParam239,
      useComposerControllerParam240,
    ) {
      if (
        useComposerControllerParam238 != useComposerControllerParam239 &&
        this.find
      )
        for (
          let useComposerControllerValue403 = 0;
          useComposerControllerValue403 < this.find.length;
          useComposerControllerValue403++
        )
          this.find[useComposerControllerValue403].pos == null &&
            useComposerControllerParam238.nodeType == 1 &&
            useComposerControllerParam238.contains(
              this.find[useComposerControllerValue403].node,
            ) &&
            useComposerControllerParam239.compareDocumentPosition(
              this.find[useComposerControllerValue403].node,
            ) & (useComposerControllerParam240 ? 2 : 4) &&
            (this.find[useComposerControllerValue403].pos = this.currentPos);
    }
    findInText(useComposerControllerParam389) {
      if (this.find)
        for (
          let useComposerControllerValue544 = 0;
          useComposerControllerValue544 < this.find.length;
          useComposerControllerValue544++
        )
          this.find[useComposerControllerValue544].node ==
            useComposerControllerParam389 &&
            (this.find[useComposerControllerValue544].pos =
              this.currentPos -
              (useComposerControllerParam389.nodeValue.length -
                this.find[useComposerControllerValue544].offset));
    }
    matchesContext(useComposerControllerParam52) {
      if (useComposerControllerParam52.indexOf(`|`) > -1)
        return useComposerControllerParam52
          .split(/\s*\|\s*/)
          .some(this.matchesContext, this);
      let useComposerControllerValue117 =
          useComposerControllerParam52.split(`/`),
        useComposerControllerValue118 = this.options.context,
        useComposerControllerValue119 =
          !this.isOpen &&
          (!useComposerControllerValue118 ||
            useComposerControllerValue118.parent.type == this.nodes[0].type),
        useComposerControllerValue120 =
          -(useComposerControllerValue118
            ? useComposerControllerValue118.depth + 1
            : 0) + (useComposerControllerValue119 ? 0 : 1),
        useComposerControllerValue121 = (
          useComposerControllerParam221,
          _useComposerControllerV,
        ) => {
          for (
            ;
            useComposerControllerParam221 >= 0;
            useComposerControllerParam221--
          ) {
            let useComposerControllerValue357 =
              useComposerControllerValue117[useComposerControllerParam221];
            if (useComposerControllerValue357 == ``) {
              if (
                useComposerControllerParam221 ==
                  useComposerControllerValue117.length - 1 ||
                useComposerControllerParam221 == 0
              )
                continue;
              for (
                ;
                _useComposerControllerV >= useComposerControllerValue120;
                _useComposerControllerV--
              )
                if (
                  useComposerControllerValue121(
                    useComposerControllerParam221 - 1,
                    _useComposerControllerV,
                  )
                )
                  return !0;
              return !1;
            } else {
              let useComposerControllerValue575 =
                _useComposerControllerV > 0 ||
                (_useComposerControllerV == 0 && useComposerControllerValue119)
                  ? this.nodes[_useComposerControllerV].type
                  : useComposerControllerValue118 &&
                      _useComposerControllerV >= useComposerControllerValue120
                    ? useComposerControllerValue118.node(
                        _useComposerControllerV - useComposerControllerValue120,
                      ).type
                    : null;
              if (
                !useComposerControllerValue575 ||
                (useComposerControllerValue575.name !=
                  useComposerControllerValue357 &&
                  !useComposerControllerValue575.isInGroup(
                    useComposerControllerValue357,
                  ))
              )
                return !1;
              _useComposerControllerV--;
            }
          }
          return !0;
        };
      return useComposerControllerValue121(
        useComposerControllerValue117.length - 1,
        this.open,
      );
    }
    textblockFromContext() {
      let useComposerControllerValue240 = this.options.context;
      if (useComposerControllerValue240)
        for (
          let useComposerControllerValue542 =
            useComposerControllerValue240.depth;
          useComposerControllerValue542 >= 0;
          useComposerControllerValue542--
        ) {
          let useComposerControllerValue610 = useComposerControllerValue240
            .node(useComposerControllerValue542)
            .contentMatchAt(
              useComposerControllerValue240.indexAfter(
                useComposerControllerValue542,
              ),
            ).defaultType;
          if (
            useComposerControllerValue610 &&
            useComposerControllerValue610.isTextblock &&
            useComposerControllerValue610.defaultAttrs
          )
            return useComposerControllerValue610;
        }
      for (let useComposerControllerValue581 in this.parser.schema.nodes) {
        let useComposerControllerValue716 =
          this.parser.schema.nodes[useComposerControllerValue581];
        if (
          useComposerControllerValue716.isTextblock &&
          useComposerControllerValue716.defaultAttrs
        )
          return useComposerControllerValue716;
      }
    }
  };
function useComposerControllerHelper38(useComposerControllerParam320) {
  for (
    let useComposerControllerValue436 =
        useComposerControllerParam320.firstChild,
      useComposerControllerValue437 = null;
    useComposerControllerValue436;
    useComposerControllerValue436 = useComposerControllerValue436.nextSibling
  ) {
    let useComposerControllerValue565 =
      useComposerControllerValue436.nodeType == 1
        ? useComposerControllerValue436.nodeName.toLowerCase()
        : null;
    useComposerControllerValue565 &&
    useComposerControllerValue17.hasOwnProperty(
      useComposerControllerValue565,
    ) &&
    useComposerControllerValue437
      ? (useComposerControllerValue437.appendChild(
          useComposerControllerValue436,
        ),
        (useComposerControllerValue436 = useComposerControllerValue437))
      : useComposerControllerValue565 == `li`
        ? (useComposerControllerValue437 = useComposerControllerValue436)
        : useComposerControllerValue565 &&
          (useComposerControllerValue437 = null);
  }
}
function useComposerControllerHelper39(
  useComposerControllerParam498,
  useComposerControllerParam499,
) {
  return (
    useComposerControllerParam498.matches ||
    useComposerControllerParam498.msMatchesSelector ||
    useComposerControllerParam498.webkitMatchesSelector ||
    useComposerControllerParam498.mozMatchesSelector
  ).call(useComposerControllerParam498, useComposerControllerParam499);
}
function useComposerControllerHelper40(useComposerControllerParam720) {
  let useComposerControllerValue764 = {};
  for (let useComposerControllerValue821 in useComposerControllerParam720)
    useComposerControllerValue764[useComposerControllerValue821] =
      useComposerControllerParam720[useComposerControllerValue821];
  return useComposerControllerValue764;
}
function useComposerControllerHelper41(
  useComposerControllerParam209,
  useComposerControllerParam210,
) {
  let useComposerControllerValue299 =
    useComposerControllerParam210.schema.nodes;
  for (let useComposerControllerValue361 in useComposerControllerValue299) {
    let useComposerControllerValue394 =
      useComposerControllerValue299[useComposerControllerValue361];
    if (
      !useComposerControllerValue394.allowsMarkType(
        useComposerControllerParam209,
      )
    )
      continue;
    let useComposerControllerValue395 = [],
      _useComposerControllerV = (useComposerControllerParam494) => {
        useComposerControllerValue395.push(useComposerControllerParam494);
        for (
          let useComposerControllerValue634 = 0;
          useComposerControllerValue634 <
          useComposerControllerParam494.edgeCount;
          useComposerControllerValue634++
        ) {
          let { type: type, next: next } = useComposerControllerParam494.edge(
            useComposerControllerValue634,
          );
          if (
            type == useComposerControllerParam210 ||
            (useComposerControllerValue395.indexOf(next) < 0 &&
              _useComposerControllerV(next))
          )
            return !0;
        }
      };
    if (_useComposerControllerV(useComposerControllerValue394.contentMatch))
      return !0;
  }
}
export const useComposerControllerUnderscore = class UseComposerControllerClass10 {
  constructor(useComposerControllerParam799, useComposerControllerParam800) {
    ((this.nodes = useComposerControllerParam799),
      (this.marks = useComposerControllerParam800));
  }
  serializeFragment(
    useComposerControllerParam49,
    useComposerControllerParam50 = {},
    useComposerControllerParam51,
  ) {
    useComposerControllerParam51 ||= useComposerControllerHelper43(
      useComposerControllerParam50,
    ).createDocumentFragment();
    let useComposerControllerValue115 = useComposerControllerParam51,
      useComposerControllerValue116 = [];
    return (
      useComposerControllerParam49.forEach((item) => {
        if (useComposerControllerValue116.length || item.marks.length) {
          let useComposerControllerValue209 = 0,
            useComposerControllerValue210 = 0;
          for (
            ;
            useComposerControllerValue209 <
              useComposerControllerValue116.length &&
            useComposerControllerValue210 < item.marks.length;

          ) {
            let useComposerControllerValue569 =
              item.marks[useComposerControllerValue210];
            if (!this.marks[useComposerControllerValue569.type.name]) {
              useComposerControllerValue210++;
              continue;
            }
            if (
              !useComposerControllerValue569.eq(
                useComposerControllerValue116[useComposerControllerValue209][0],
              ) ||
              useComposerControllerValue569.type.spec.spanning === !1
            )
              break;
            (useComposerControllerValue209++, useComposerControllerValue210++);
          }
          for (
            ;
            useComposerControllerValue209 <
            useComposerControllerValue116.length;

          )
            useComposerControllerValue115 =
              useComposerControllerValue116.pop()[1];
          for (; useComposerControllerValue210 < item.marks.length; ) {
            let useComposerControllerValue570 =
                item.marks[useComposerControllerValue210++],
              _useComposerControllerV = this.serializeMark(
                useComposerControllerValue570,
                item.isInline,
                useComposerControllerParam50,
              );
            _useComposerControllerV &&
              (useComposerControllerValue116.push([
                useComposerControllerValue570,
                useComposerControllerValue115,
              ]),
              useComposerControllerValue115.appendChild(
                _useComposerControllerV.dom,
              ),
              (useComposerControllerValue115 =
                _useComposerControllerV.contentDOM ||
                _useComposerControllerV.dom));
          }
        }
        useComposerControllerValue115.appendChild(
          this.serializeNodeInner(item, useComposerControllerParam50),
        );
      }),
      useComposerControllerParam51
    );
  }
  serializeNodeInner(
    useComposerControllerParam253,
    useComposerControllerParam254,
  ) {
    let { dom: dom, contentDOM: contentDOM } = useComposerControllerHelper46(
      useComposerControllerHelper43(useComposerControllerParam254),
      this.nodes[useComposerControllerParam253.type.name](
        useComposerControllerParam253,
      ),
      null,
      useComposerControllerParam253.attrs,
    );
    if (contentDOM) {
      if (useComposerControllerParam253.isLeaf)
        throw RangeError(`Content hole not allowed in a leaf node spec`);
      this.serializeFragment(
        useComposerControllerParam253.content,
        useComposerControllerParam254,
        contentDOM,
      );
    }
    return dom;
  }
  serializeNode(
    useComposerControllerParam297,
    useComposerControllerParam298 = {},
  ) {
    let useComposerControllerValue391 = this.serializeNodeInner(
      useComposerControllerParam297,
      useComposerControllerParam298,
    );
    for (
      let useComposerControllerValue537 =
        useComposerControllerParam297.marks.length - 1;
      useComposerControllerValue537 >= 0;
      useComposerControllerValue537--
    ) {
      let useComposerControllerValue623 = this.serializeMark(
        useComposerControllerParam297.marks[useComposerControllerValue537],
        useComposerControllerParam297.isInline,
        useComposerControllerParam298,
      );
      useComposerControllerValue623 &&
        ((
          useComposerControllerValue623.contentDOM ||
          useComposerControllerValue623.dom
        ).appendChild(useComposerControllerValue391),
        (useComposerControllerValue391 = useComposerControllerValue623.dom));
    }
    return useComposerControllerValue391;
  }
  serializeMark(
    useComposerControllerParam575,
    useComposerControllerParam576,
    useComposerControllerParam577 = {},
  ) {
    let useComposerControllerValue664 =
      this.marks[useComposerControllerParam575.type.name];
    return (
      useComposerControllerValue664 &&
      useComposerControllerHelper46(
        useComposerControllerHelper43(useComposerControllerParam577),
        useComposerControllerValue664(
          useComposerControllerParam575,
          useComposerControllerParam576,
        ),
        null,
        useComposerControllerParam575.attrs,
      )
    );
  }
  static renderSpec(
    useComposerControllerParam756,
    useComposerControllerParam757,
    useComposerControllerParam758 = null,
    useComposerControllerParam759,
  ) {
    return useComposerControllerHelper46(
      useComposerControllerParam756,
      useComposerControllerParam757,
      useComposerControllerParam758,
      useComposerControllerParam759,
    );
  }
  static fromSchema(useComposerControllerParam445) {
    return (
      useComposerControllerParam445.cached.domSerializer ||
      (useComposerControllerParam445.cached.domSerializer =
        new UseComposerControllerClass10(
          this.nodesFromSchema(useComposerControllerParam445),
          this.marksFromSchema(useComposerControllerParam445),
        ))
    );
  }
  static nodesFromSchema(useComposerControllerParam645) {
    let useComposerControllerValue729 = useComposerControllerHelper42(
      useComposerControllerParam645.nodes,
    );
    return (
      (useComposerControllerValue729.text ||= (useComposerControllerParam881) =>
        useComposerControllerParam881.text),
      useComposerControllerValue729
    );
  }
  static marksFromSchema(useComposerControllerParam789) {
    return useComposerControllerHelper42(useComposerControllerParam789.marks);
  }
};
function useComposerControllerHelper42(useComposerControllerParam613) {
  let useComposerControllerValue697 = {};
  for (let useComposerControllerValue792 in useComposerControllerParam613) {
    let useComposerControllerValue816 =
      useComposerControllerParam613[useComposerControllerValue792].spec.toDOM;
    useComposerControllerValue816 &&
      (useComposerControllerValue697[useComposerControllerValue792] =
        useComposerControllerValue816);
  }
  return useComposerControllerValue697;
}
function useComposerControllerHelper43(useComposerControllerParam763) {
  return useComposerControllerParam763.document || window.document;
}
var useComposerControllerValue23 = new WeakMap();
function useComposerControllerHelper44(useComposerControllerParam654) {
  let useComposerControllerValue738 = useComposerControllerValue23.get(
    useComposerControllerParam654,
  );
  return (
    useComposerControllerValue738 === void 0 &&
      useComposerControllerValue23.set(
        useComposerControllerParam654,
        (useComposerControllerValue738 = useComposerControllerHelper45(
          useComposerControllerParam654,
        )),
      ),
    useComposerControllerValue738
  );
}
function useComposerControllerHelper45(useComposerControllerParam280) {
  let useComposerControllerValue378 = null;
  function useComposerControllerHelper91(useComposerControllerParam371) {
    if (
      useComposerControllerParam371 &&
      typeof useComposerControllerParam371 == `object`
    )
      if (Array.isArray(useComposerControllerParam371)) {
        if (typeof useComposerControllerParam371[0] == `string`)
          ((useComposerControllerValue378 ||= []),
            useComposerControllerValue378.push(useComposerControllerParam371));
        else
          for (
            let useComposerControllerValue817 = 0;
            useComposerControllerValue817 <
            useComposerControllerParam371.length;
            useComposerControllerValue817++
          )
            useComposerControllerHelper91(
              useComposerControllerParam371[useComposerControllerValue817],
            );
      } else
        for (let useComposerControllerValue822 in useComposerControllerParam371)
          useComposerControllerHelper91(
            useComposerControllerParam371[useComposerControllerValue822],
          );
  }
  return (
    useComposerControllerHelper91(useComposerControllerParam280),
    useComposerControllerValue378
  );
}
function useComposerControllerHelper46(
  useComposerControllerParam6,
  useComposerControllerParam7,
  useComposerControllerParam8,
  useComposerControllerParam9,
) {
  if (typeof useComposerControllerParam7 == `string`)
    return {
      dom: useComposerControllerParam6.createTextNode(
        useComposerControllerParam7,
      ),
    };
  if (useComposerControllerParam7.nodeType != null)
    return {
      dom: useComposerControllerParam7,
    };
  if (
    useComposerControllerParam7.dom &&
    useComposerControllerParam7.dom.nodeType != null
  )
    return useComposerControllerParam7;
  let useComposerControllerValue67 = useComposerControllerParam7[0],
    useComposerControllerValue68;
  if (typeof useComposerControllerValue67 != `string`)
    throw RangeError(`Invalid array passed to renderSpec`);
  if (
    useComposerControllerParam9 &&
    (useComposerControllerValue68 = useComposerControllerHelper44(
      useComposerControllerParam9,
    )) &&
    useComposerControllerValue68.indexOf(useComposerControllerParam7) > -1
  )
    throw RangeError(
      `Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`,
    );
  let _useComposerControllerV = useComposerControllerValue67.indexOf(` `);
  _useComposerControllerV > 0 &&
    ((useComposerControllerParam8 = useComposerControllerValue67.slice(
      0,
      _useComposerControllerV,
    )),
    (useComposerControllerValue67 = useComposerControllerValue67.slice(
      _useComposerControllerV + 1,
    )));
  let useComposerControllerValue69,
    useComposerControllerValue70 = useComposerControllerParam8
      ? useComposerControllerParam6.createElementNS(
          useComposerControllerParam8,
          useComposerControllerValue67,
        )
      : useComposerControllerParam6.createElement(useComposerControllerValue67),
    useComposerControllerValue71 = useComposerControllerParam7[1],
    _useComposerControllerY = 1;
  if (
    useComposerControllerValue71 &&
    typeof useComposerControllerValue71 == `object` &&
    useComposerControllerValue71.nodeType == null &&
    !Array.isArray(useComposerControllerValue71)
  ) {
    _useComposerControllerY = 2;
    for (let useComposerControllerValue450 in useComposerControllerValue71)
      if (useComposerControllerValue71[useComposerControllerValue450] != null) {
        let useComposerControllerValue533 =
          useComposerControllerValue450.indexOf(` `);
        useComposerControllerValue533 > 0
          ? useComposerControllerValue70.setAttributeNS(
              useComposerControllerValue450.slice(
                0,
                useComposerControllerValue533,
              ),
              useComposerControllerValue450.slice(
                useComposerControllerValue533 + 1,
              ),
              useComposerControllerValue71[useComposerControllerValue450],
            )
          : useComposerControllerValue450 == `style` &&
              useComposerControllerValue70.style
            ? (useComposerControllerValue70.style.cssText =
                useComposerControllerValue71[useComposerControllerValue450])
            : useComposerControllerValue70.setAttribute(
                useComposerControllerValue450,
                useComposerControllerValue71[useComposerControllerValue450],
              );
      }
  }
  for (
    let useComposerControllerValue255 = _useComposerControllerY;
    useComposerControllerValue255 < useComposerControllerParam7.length;
    useComposerControllerValue255++
  ) {
    let useComposerControllerValue288 =
      useComposerControllerParam7[useComposerControllerValue255];
    if (useComposerControllerValue288 === 0) {
      if (
        useComposerControllerValue255 <
          useComposerControllerParam7.length - 1 ||
        useComposerControllerValue255 > _useComposerControllerY
      )
        throw RangeError(
          `Content hole must be the only child of its parent node`,
        );
      return {
        dom: useComposerControllerValue70,
        contentDOM: useComposerControllerValue70,
      };
    } else {
      let { dom: dom, contentDOM: contentDOM } = useComposerControllerHelper46(
        useComposerControllerParam6,
        useComposerControllerValue288,
        useComposerControllerParam8,
        useComposerControllerParam9,
      );
      if ((useComposerControllerValue70.appendChild(dom), contentDOM)) {
        if (useComposerControllerValue69)
          throw RangeError(`Multiple content holes`);
        useComposerControllerValue69 = contentDOM;
      }
    }
  }
  return {
    dom: useComposerControllerValue70,
    contentDOM: useComposerControllerValue69,
  };
}
var $e = 65535,
  useComposerControllerValue24 = 2 ** 16;
function useComposerControllerHelper47(
  useComposerControllerParam856,
  useComposerControllerParam857,
) {
  return (
    useComposerControllerParam856 +
    useComposerControllerParam857 * useComposerControllerValue24
  );
}
function useComposerControllerHelper48(useComposerControllerParam869) {
  return useComposerControllerParam869 & $e;
}
function useComposerControllerHelper49(useComposerControllerParam845) {
  return (
    (useComposerControllerParam845 - (useComposerControllerParam845 & $e)) /
    useComposerControllerValue24
  );
}
var useComposerControllerValue25 = 1,
  at = 2,
  useComposerControllerValue26 = 4,
  useComposerControllerValue27 = 8,
  useComposerControllerValue28 = class {
    constructor(
      useComposerControllerParam713,
      useComposerControllerParam714,
      useComposerControllerParam715,
    ) {
      ((this.pos = useComposerControllerParam713),
        (this.delInfo = useComposerControllerParam714),
        (this.recover = useComposerControllerParam715));
    }
    get deleted() {
      return (this.delInfo & useComposerControllerValue27) > 0;
    }
    get deletedBefore() {
      return (
        (this.delInfo &
          (useComposerControllerValue25 | useComposerControllerValue26)) >
        0
      );
    }
    get deletedAfter() {
      return (this.delInfo & (at | useComposerControllerValue26)) > 0;
    }
    get deletedAcross() {
      return (this.delInfo & useComposerControllerValue26) > 0;
    }
  },
  useComposerControllerValue29 = class UseComposerControllerClass12 {
    constructor(
      useComposerControllerParam595,
      useComposerControllerParam596 = !1,
    ) {
      if (
        ((this.ranges = useComposerControllerParam595),
        (this.inverted = useComposerControllerParam596),
        !useComposerControllerParam595.length &&
          UseComposerControllerClass12.empty)
      )
        return UseComposerControllerClass12.empty;
    }
    recover(useComposerControllerParam434) {
      let useComposerControllerValue535 = 0,
        useComposerControllerValue536 = useComposerControllerHelper48(
          useComposerControllerParam434,
        );
      if (!this.inverted)
        for (
          let useComposerControllerValue754 = 0;
          useComposerControllerValue754 < useComposerControllerValue536;
          useComposerControllerValue754++
        )
          useComposerControllerValue535 +=
            this.ranges[useComposerControllerValue754 * 3 + 2] -
            this.ranges[useComposerControllerValue754 * 3 + 1];
      return (
        this.ranges[useComposerControllerValue536 * 3] +
        useComposerControllerValue535 +
        useComposerControllerHelper49(useComposerControllerParam434)
      );
    }
    mapResult(
      useComposerControllerParam810,
      useComposerControllerParam811 = 1,
    ) {
      return this._map(
        useComposerControllerParam810,
        useComposerControllerParam811,
        !1,
      );
    }
    map(useComposerControllerParam840, useComposerControllerParam841 = 1) {
      return this._map(
        useComposerControllerParam840,
        useComposerControllerParam841,
        !0,
      );
    }
    _map(
      useComposerControllerParam81,
      useComposerControllerParam82,
      useComposerControllerParam83,
    ) {
      let useComposerControllerValue157 = 0,
        useComposerControllerValue158 = this.inverted ? 2 : 1,
        useComposerControllerValue159 = this.inverted ? 1 : 2;
      for (
        let _useComposerControllerV = 0;
        _useComposerControllerV < this.ranges.length;
        _useComposerControllerV += 3
      ) {
        let useComposerControllerValue273 =
          this.ranges[_useComposerControllerV] -
          (this.inverted ? useComposerControllerValue157 : 0);
        if (useComposerControllerValue273 > useComposerControllerParam81) break;
        let useComposerControllerValue274 =
            this.ranges[
              _useComposerControllerV + useComposerControllerValue158
            ],
          useComposerControllerValue275 =
            this.ranges[
              _useComposerControllerV + useComposerControllerValue159
            ],
          _useComposerControllerY =
            useComposerControllerValue273 + useComposerControllerValue274;
        if (useComposerControllerParam81 <= _useComposerControllerY) {
          let useComposerControllerValue481 = useComposerControllerValue274
              ? useComposerControllerParam81 == useComposerControllerValue273
                ? -1
                : useComposerControllerParam81 == _useComposerControllerY
                  ? 1
                  : useComposerControllerParam82
              : useComposerControllerParam82,
            useComposerControllerValue482 =
              useComposerControllerValue273 +
              useComposerControllerValue157 +
              (useComposerControllerValue481 < 0
                ? 0
                : useComposerControllerValue275);
          if (useComposerControllerParam83)
            return useComposerControllerValue482;
          let _useComposerControllerB =
              useComposerControllerParam81 ==
              (useComposerControllerParam82 < 0
                ? useComposerControllerValue273
                : _useComposerControllerY)
                ? null
                : useComposerControllerHelper47(
                    _useComposerControllerV / 3,
                    useComposerControllerParam81 -
                      useComposerControllerValue273,
                  ),
            __useComposerControllerS =
              useComposerControllerParam81 == useComposerControllerValue273
                ? at
                : useComposerControllerParam81 == _useComposerControllerY
                  ? useComposerControllerValue25
                  : useComposerControllerValue26;
          return (
            (useComposerControllerParam82 < 0
              ? useComposerControllerParam81 != useComposerControllerValue273
              : useComposerControllerParam81 != _useComposerControllerY) &&
              (__useComposerControllerS |= useComposerControllerValue27),
            new useComposerControllerValue28(
              useComposerControllerValue482,
              __useComposerControllerS,
              _useComposerControllerB,
            )
          );
        }
        useComposerControllerValue157 +=
          useComposerControllerValue275 - useComposerControllerValue274;
      }
      return useComposerControllerParam83
        ? useComposerControllerParam81 + useComposerControllerValue157
        : new useComposerControllerValue28(
            useComposerControllerParam81 + useComposerControllerValue157,
            0,
            null,
          );
    }
    touches(useComposerControllerParam222, useComposerControllerParam223) {
      let useComposerControllerValue312 = 0,
        useComposerControllerValue313 = useComposerControllerHelper48(
          useComposerControllerParam223,
        ),
        useComposerControllerValue314 = this.inverted ? 2 : 1,
        useComposerControllerValue315 = this.inverted ? 1 : 2;
      for (
        let useComposerControllerValue457 = 0;
        useComposerControllerValue457 < this.ranges.length;
        useComposerControllerValue457 += 3
      ) {
        let _useComposerControllerV =
          this.ranges[useComposerControllerValue457] -
          (this.inverted ? useComposerControllerValue312 : 0);
        if (_useComposerControllerV > useComposerControllerParam222) break;
        let useComposerControllerValue557 =
          this.ranges[
            useComposerControllerValue457 + useComposerControllerValue314
          ];
        if (
          useComposerControllerParam222 <=
            _useComposerControllerV + useComposerControllerValue557 &&
          useComposerControllerValue457 == useComposerControllerValue313 * 3
        )
          return !0;
        useComposerControllerValue312 +=
          this.ranges[
            useComposerControllerValue457 + useComposerControllerValue315
          ] - useComposerControllerValue557;
      }
      return !1;
    }
    forEach(useComposerControllerParam246) {
      let useComposerControllerValue336 = this.inverted ? 2 : 1,
        useComposerControllerValue337 = this.inverted ? 1 : 2;
      for (
        let useComposerControllerValue440 = 0,
          useComposerControllerValue441 = 0;
        useComposerControllerValue440 < this.ranges.length;
        useComposerControllerValue440 += 3
      ) {
        let useComposerControllerValue546 =
            this.ranges[useComposerControllerValue440],
          _useComposerControllerV =
            useComposerControllerValue546 -
            (this.inverted ? useComposerControllerValue441 : 0),
          useComposerControllerValue547 =
            useComposerControllerValue546 +
            (this.inverted ? 0 : useComposerControllerValue441),
          useComposerControllerValue548 =
            this.ranges[
              useComposerControllerValue440 + useComposerControllerValue336
            ],
          useComposerControllerValue549 =
            this.ranges[
              useComposerControllerValue440 + useComposerControllerValue337
            ];
        (useComposerControllerParam246(
          _useComposerControllerV,
          _useComposerControllerV + useComposerControllerValue548,
          useComposerControllerValue547,
          useComposerControllerValue547 + useComposerControllerValue549,
        ),
          (useComposerControllerValue441 +=
            useComposerControllerValue549 - useComposerControllerValue548));
      }
    }
    invert() {
      return new UseComposerControllerClass12(this.ranges, !this.inverted);
    }
    toString() {
      return (this.inverted ? `-` : ``) + JSON.stringify(this.ranges);
    }
    static offset(useComposerControllerParam670) {
      return useComposerControllerParam670 == 0
        ? UseComposerControllerClass12.empty
        : new UseComposerControllerClass12(
            useComposerControllerParam670 < 0
              ? [0, -useComposerControllerParam670, 0]
              : [0, 0, useComposerControllerParam670],
          );
    }
  };
useComposerControllerValue29.empty = new useComposerControllerValue29([]);
var useComposerControllerM = class UseComposerControllerClass11 {
    constructor(
      useComposerControllerParam516,
      useComposerControllerParam517,
      useComposerControllerParam518 = 0,
      useComposerControllerParam519 = useComposerControllerParam516
        ? useComposerControllerParam516.length
        : 0,
    ) {
      ((this.mirror = useComposerControllerParam517),
        (this.from = useComposerControllerParam518),
        (this.to = useComposerControllerParam519),
        (this._maps = useComposerControllerParam516 || []),
        (this.ownData = !(
          useComposerControllerParam516 || useComposerControllerParam517
        )));
    }
    get maps() {
      return this._maps;
    }
    slice(
      useComposerControllerParam647 = 0,
      useComposerControllerParam648 = this.maps.length,
    ) {
      return new UseComposerControllerClass11(
        this._maps,
        this.mirror,
        useComposerControllerParam647,
        useComposerControllerParam648,
      );
    }
    appendMap(useComposerControllerParam329, useComposerControllerParam330) {
      ((this.ownData ||=
        ((this._maps = this._maps.slice()),
        (this.mirror = this.mirror && this.mirror.slice()),
        !0)),
        (this.to = this._maps.push(useComposerControllerParam329)),
        useComposerControllerParam330 != null &&
          this.setMirror(this._maps.length - 1, useComposerControllerParam330));
    }
    appendMapping(useComposerControllerParam420) {
      for (
        let useComposerControllerValue559 = 0,
          useComposerControllerValue560 = this._maps.length;
        useComposerControllerValue559 <
        useComposerControllerParam420._maps.length;
        useComposerControllerValue559++
      ) {
        let useComposerControllerValue726 =
          useComposerControllerParam420.getMirror(
            useComposerControllerValue559,
          );
        this.appendMap(
          useComposerControllerParam420._maps[useComposerControllerValue559],
          useComposerControllerValue726 != null &&
            useComposerControllerValue726 < useComposerControllerValue559
            ? useComposerControllerValue560 + useComposerControllerValue726
            : void 0,
        );
      }
    }
    getMirror(useComposerControllerParam473) {
      if (this.mirror) {
        for (
          let useComposerControllerValue669 = 0;
          useComposerControllerValue669 < this.mirror.length;
          useComposerControllerValue669++
        )
          if (
            this.mirror[useComposerControllerValue669] ==
            useComposerControllerParam473
          )
            return this.mirror[
              useComposerControllerValue669 +
                (useComposerControllerValue669 % 2 ? -1 : 1)
            ];
      }
    }
    setMirror(useComposerControllerParam742, useComposerControllerParam743) {
      ((this.mirror ||= []),
        this.mirror.push(
          useComposerControllerParam742,
          useComposerControllerParam743,
        ));
    }
    appendMappingInverted(useComposerControllerParam336) {
      for (
        let useComposerControllerValue489 =
            useComposerControllerParam336.maps.length - 1,
          useComposerControllerValue490 =
            this._maps.length + useComposerControllerParam336._maps.length;
        useComposerControllerValue489 >= 0;
        useComposerControllerValue489--
      ) {
        let useComposerControllerValue690 =
          useComposerControllerParam336.getMirror(
            useComposerControllerValue489,
          );
        this.appendMap(
          useComposerControllerParam336._maps[
            useComposerControllerValue489
          ].invert(),
          useComposerControllerValue690 != null &&
            useComposerControllerValue690 > useComposerControllerValue489
            ? useComposerControllerValue490 - useComposerControllerValue690 - 1
            : void 0,
        );
      }
    }
    invert() {
      let useComposerControllerValue757 = new UseComposerControllerClass11();
      return (
        useComposerControllerValue757.appendMappingInverted(this),
        useComposerControllerValue757
      );
    }
    map(useComposerControllerParam478, useComposerControllerParam479 = 1) {
      if (this.mirror)
        return this._map(
          useComposerControllerParam478,
          useComposerControllerParam479,
          !0,
        );
      for (
        let useComposerControllerValue761 = this.from;
        useComposerControllerValue761 < this.to;
        useComposerControllerValue761++
      )
        useComposerControllerParam478 = this._maps[
          useComposerControllerValue761
        ].map(useComposerControllerParam478, useComposerControllerParam479);
      return useComposerControllerParam478;
    }
    mapResult(
      useComposerControllerParam812,
      useComposerControllerParam813 = 1,
    ) {
      return this._map(
        useComposerControllerParam812,
        useComposerControllerParam813,
        !1,
      );
    }
    _map(
      useComposerControllerParam201,
      useComposerControllerParam202,
      useComposerControllerParam203,
    ) {
      let useComposerControllerValue294 = 0;
      for (
        let useComposerControllerValue374 = this.from;
        useComposerControllerValue374 < this.to;
        useComposerControllerValue374++
      ) {
        let useComposerControllerValue417 = this._maps[
          useComposerControllerValue374
        ].mapResult(
          useComposerControllerParam201,
          useComposerControllerParam202,
        );
        if (useComposerControllerValue417.recover != null) {
          let useComposerControllerValue619 = this.getMirror(
            useComposerControllerValue374,
          );
          if (
            useComposerControllerValue619 != null &&
            useComposerControllerValue619 > useComposerControllerValue374 &&
            useComposerControllerValue619 < this.to
          ) {
            ((useComposerControllerValue374 = useComposerControllerValue619),
              (useComposerControllerParam201 = this._maps[
                useComposerControllerValue619
              ].recover(useComposerControllerValue417.recover)));
            continue;
          }
        }
        ((useComposerControllerValue294 |=
          useComposerControllerValue417.delInfo),
          (useComposerControllerParam201 = useComposerControllerValue417.pos));
      }
      return useComposerControllerParam203
        ? useComposerControllerParam201
        : new useComposerControllerValue28(
            useComposerControllerParam201,
            useComposerControllerValue294,
            null,
          );
    }
  },
  useComposerControllerValue30 = Object.create(null),
  useComposerControllerValue31 = class {
    getMap() {
      return useComposerControllerValue29.empty;
    }
    merge(useComposerControllerParam875) {
      return null;
    }
    static fromJSON(
      useComposerControllerParam311,
      useComposerControllerParam312,
    ) {
      if (
        !useComposerControllerParam312 ||
        !useComposerControllerParam312.stepType
      )
        throw RangeError(`Invalid input for Step.fromJSON`);
      let useComposerControllerValue400 =
        useComposerControllerValue30[useComposerControllerParam312.stepType];
      if (!useComposerControllerValue400)
        throw RangeError(
          `No step type ${useComposerControllerParam312.stepType} defined`,
        );
      return useComposerControllerValue400.fromJSON(
        useComposerControllerParam311,
        useComposerControllerParam312,
      );
    }
    static jsonID(
      useComposerControllerParam480,
      useComposerControllerParam481,
    ) {
      if (useComposerControllerParam480 in useComposerControllerValue30)
        throw RangeError(
          `Duplicate use of step JSON ID ` + useComposerControllerParam480,
        );
      return (
        (useComposerControllerValue30[useComposerControllerParam480] =
          useComposerControllerParam481),
        (useComposerControllerParam481.prototype.jsonID =
          useComposerControllerParam480),
        useComposerControllerParam481
      );
    }
  },
  useComposerControllerValue32 = class UseComposerControllerClass26 {
    constructor(useComposerControllerParam814, useComposerControllerParam815) {
      ((this.doc = useComposerControllerParam814),
        (this.failed = useComposerControllerParam815));
    }
    static ok(useComposerControllerParam855) {
      return new UseComposerControllerClass26(
        useComposerControllerParam855,
        null,
      );
    }
    static fail(useComposerControllerParam842) {
      return new UseComposerControllerClass26(
        null,
        useComposerControllerParam842,
      );
    }
    static fromReplace(
      useComposerControllerParam466,
      useComposerControllerParam467,
      useComposerControllerParam468,
      useComposerControllerParam469,
    ) {
      try {
        return UseComposerControllerClass26.ok(
          useComposerControllerParam466.replace(
            useComposerControllerParam467,
            useComposerControllerParam468,
            useComposerControllerParam469,
          ),
        );
      } catch (useComposerControllerValue758) {
        if (useComposerControllerValue758 instanceof useComposerControllerB)
          return UseComposerControllerClass26.fail(
            useComposerControllerValue758.message,
          );
        throw useComposerControllerValue758;
      }
    }
  };
function useComposerControllerHelper50(
  useComposerControllerParam339,
  useComposerControllerParam340,
  useComposerControllerParam341,
) {
  let useComposerControllerValue418 = [];
  for (
    let useComposerControllerValue553 = 0;
    useComposerControllerValue553 < useComposerControllerParam339.childCount;
    useComposerControllerValue553++
  ) {
    let useComposerControllerValue636 = useComposerControllerParam339.child(
      useComposerControllerValue553,
    );
    (useComposerControllerValue636.content.size &&
      (useComposerControllerValue636 = useComposerControllerValue636.copy(
        useComposerControllerHelper50(
          useComposerControllerValue636.content,
          useComposerControllerParam340,
          useComposerControllerValue636,
        ),
      )),
      useComposerControllerValue636.isInline &&
        (useComposerControllerValue636 = useComposerControllerParam340(
          useComposerControllerValue636,
          useComposerControllerParam341,
          useComposerControllerValue553,
        )),
      useComposerControllerValue418.push(useComposerControllerValue636));
  }
  return useComposerControllerV.fromArray(useComposerControllerValue418);
}
var useComposerControllerValue33 = class UseComposerControllerClass16 extends useComposerControllerValue31 {
  constructor(
    useComposerControllerParam692,
    useComposerControllerParam693,
    useComposerControllerParam694,
  ) {
    (super(),
      (this.from = useComposerControllerParam692),
      (this.to = useComposerControllerParam693),
      (this.mark = useComposerControllerParam694));
  }
  apply(useComposerControllerParam178) {
    let useComposerControllerValue260 = useComposerControllerParam178.slice(
        this.from,
        this.to,
      ),
      useComposerControllerValue261 = useComposerControllerParam178.resolve(
        this.from,
      ),
      useComposerControllerValue262 = useComposerControllerValue261.node(
        useComposerControllerValue261.sharedDepth(this.to),
      ),
      useComposerControllerValue263 = new useComposerControllerS(
        useComposerControllerHelper50(
          useComposerControllerValue260.content,
          (useComposerControllerParam569, useComposerControllerParam570) =>
            !useComposerControllerParam569.isAtom ||
            !useComposerControllerParam570.type.allowsMarkType(this.mark.type)
              ? useComposerControllerParam569
              : useComposerControllerParam569.mark(
                  this.mark.addToSet(useComposerControllerParam569.marks),
                ),
          useComposerControllerValue262,
        ),
        useComposerControllerValue260.openStart,
        useComposerControllerValue260.openEnd,
      );
    return useComposerControllerValue32.fromReplace(
      useComposerControllerParam178,
      this.from,
      this.to,
      useComposerControllerValue263,
    );
  }
  invert() {
    return new useComposerControllerValue34(this.from, this.to, this.mark);
  }
  map(useComposerControllerParam432) {
    let useComposerControllerValue527 = useComposerControllerParam432.mapResult(
        this.from,
        1,
      ),
      useComposerControllerValue528 = useComposerControllerParam432.mapResult(
        this.to,
        -1,
      );
    return (useComposerControllerValue527.deleted &&
      useComposerControllerValue528.deleted) ||
      useComposerControllerValue527.pos >= useComposerControllerValue528.pos
      ? null
      : new UseComposerControllerClass16(
          useComposerControllerValue527.pos,
          useComposerControllerValue528.pos,
          this.mark,
        );
  }
  merge(useComposerControllerParam390) {
    return useComposerControllerParam390 instanceof
      UseComposerControllerClass16 &&
      useComposerControllerParam390.mark.eq(this.mark) &&
      this.from <= useComposerControllerParam390.to &&
      this.to >= useComposerControllerParam390.from
      ? new UseComposerControllerClass16(
          Math.min(this.from, useComposerControllerParam390.from),
          Math.max(this.to, useComposerControllerParam390.to),
          this.mark,
        )
      : null;
  }
  toJSON() {
    return {
      stepType: `addMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(
    useComposerControllerParam337,
    useComposerControllerParam338,
  ) {
    if (
      typeof useComposerControllerParam338.from != `number` ||
      typeof useComposerControllerParam338.to != `number`
    )
      throw RangeError(`Invalid input for AddMarkStep.fromJSON`);
    return new UseComposerControllerClass16(
      useComposerControllerParam338.from,
      useComposerControllerParam338.to,
      useComposerControllerParam337.markFromJSON(
        useComposerControllerParam338.mark,
      ),
    );
  }
};
useComposerControllerValue31.jsonID(`addMark`, useComposerControllerValue33);
var useComposerControllerValue34 = class UseComposerControllerClass17 extends useComposerControllerValue31 {
  constructor(
    useComposerControllerParam695,
    useComposerControllerParam696,
    useComposerControllerParam697,
  ) {
    (super(),
      (this.from = useComposerControllerParam695),
      (this.to = useComposerControllerParam696),
      (this.mark = useComposerControllerParam697));
  }
  apply(useComposerControllerParam347) {
    let useComposerControllerValue427 = useComposerControllerParam347.slice(
        this.from,
        this.to,
      ),
      useComposerControllerValue428 = new useComposerControllerS(
        useComposerControllerHelper50(
          useComposerControllerValue427.content,
          (useComposerControllerParam801) =>
            useComposerControllerParam801.mark(
              this.mark.removeFromSet(useComposerControllerParam801.marks),
            ),
          useComposerControllerParam347,
        ),
        useComposerControllerValue427.openStart,
        useComposerControllerValue427.openEnd,
      );
    return useComposerControllerValue32.fromReplace(
      useComposerControllerParam347,
      this.from,
      this.to,
      useComposerControllerValue428,
    );
  }
  invert() {
    return new useComposerControllerValue33(this.from, this.to, this.mark);
  }
  map(useComposerControllerParam433) {
    let useComposerControllerValue529 = useComposerControllerParam433.mapResult(
        this.from,
        1,
      ),
      useComposerControllerValue530 = useComposerControllerParam433.mapResult(
        this.to,
        -1,
      );
    return (useComposerControllerValue529.deleted &&
      useComposerControllerValue530.deleted) ||
      useComposerControllerValue529.pos >= useComposerControllerValue530.pos
      ? null
      : new UseComposerControllerClass17(
          useComposerControllerValue529.pos,
          useComposerControllerValue530.pos,
          this.mark,
        );
  }
  merge(useComposerControllerParam391) {
    return useComposerControllerParam391 instanceof
      UseComposerControllerClass17 &&
      useComposerControllerParam391.mark.eq(this.mark) &&
      this.from <= useComposerControllerParam391.to &&
      this.to >= useComposerControllerParam391.from
      ? new UseComposerControllerClass17(
          Math.min(this.from, useComposerControllerParam391.from),
          Math.max(this.to, useComposerControllerParam391.to),
          this.mark,
        )
      : null;
  }
  toJSON() {
    return {
      stepType: `removeMark`,
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to,
    };
  }
  static fromJSON(
    useComposerControllerParam331,
    useComposerControllerParam332,
  ) {
    if (
      typeof useComposerControllerParam332.from != `number` ||
      typeof useComposerControllerParam332.to != `number`
    )
      throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);
    return new UseComposerControllerClass17(
      useComposerControllerParam332.from,
      useComposerControllerParam332.to,
      useComposerControllerParam331.markFromJSON(
        useComposerControllerParam332.mark,
      ),
    );
  }
};
useComposerControllerValue31.jsonID(`removeMark`, useComposerControllerValue34);
var useComposerControllerValue35 = class UseComposerControllerClass18 extends useComposerControllerValue31 {
  constructor(useComposerControllerParam768, useComposerControllerParam769) {
    (super(),
      (this.pos = useComposerControllerParam768),
      (this.mark = useComposerControllerParam769));
  }
  apply(useComposerControllerParam247) {
    let useComposerControllerValue339 = useComposerControllerParam247.nodeAt(
      this.pos,
    );
    if (!useComposerControllerValue339)
      return useComposerControllerValue32.fail(
        `No node at mark step's position`,
      );
    let useComposerControllerValue340 =
      useComposerControllerValue339.type.create(
        useComposerControllerValue339.attrs,
        null,
        this.mark.addToSet(useComposerControllerValue339.marks),
      );
    return useComposerControllerValue32.fromReplace(
      useComposerControllerParam247,
      this.pos,
      this.pos + 1,
      new useComposerControllerS(
        useComposerControllerV.from(useComposerControllerValue340),
        0,
        useComposerControllerValue339.isLeaf ? 0 : 1,
      ),
    );
  }
  invert(useComposerControllerParam198) {
    let useComposerControllerValue287 = useComposerControllerParam198.nodeAt(
      this.pos,
    );
    if (useComposerControllerValue287) {
      let useComposerControllerValue406 = this.mark.addToSet(
        useComposerControllerValue287.marks,
      );
      if (
        useComposerControllerValue406.length ==
        useComposerControllerValue287.marks.length
      ) {
        for (
          let useComposerControllerValue657 = 0;
          useComposerControllerValue657 <
          useComposerControllerValue287.marks.length;
          useComposerControllerValue657++
        )
          if (
            !useComposerControllerValue287.marks[
              useComposerControllerValue657
            ].isInSet(useComposerControllerValue406)
          )
            return new UseComposerControllerClass18(
              this.pos,
              useComposerControllerValue287.marks[
                useComposerControllerValue657
              ],
            );
        return new UseComposerControllerClass18(this.pos, this.mark);
      }
    }
    return new useComposerControllerValue36(this.pos, this.mark);
  }
  map(useComposerControllerParam597) {
    let useComposerControllerValue682 = useComposerControllerParam597.mapResult(
      this.pos,
      1,
    );
    return useComposerControllerValue682.deletedAfter
      ? null
      : new UseComposerControllerClass18(
          useComposerControllerValue682.pos,
          this.mark,
        );
  }
  toJSON() {
    return {
      stepType: `addNodeMark`,
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(
    useComposerControllerParam405,
    useComposerControllerParam406,
  ) {
    if (typeof useComposerControllerParam406.pos != `number`)
      throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);
    return new UseComposerControllerClass18(
      useComposerControllerParam406.pos,
      useComposerControllerParam405.markFromJSON(
        useComposerControllerParam406.mark,
      ),
    );
  }
};
useComposerControllerValue31.jsonID(
  `addNodeMark`,
  useComposerControllerValue35,
);
var useComposerControllerValue36 = class UseComposerControllerClass21 extends useComposerControllerValue31 {
  constructor(useComposerControllerParam770, useComposerControllerParam771) {
    (super(),
      (this.pos = useComposerControllerParam770),
      (this.mark = useComposerControllerParam771));
  }
  apply(useComposerControllerParam234) {
    let useComposerControllerValue323 = useComposerControllerParam234.nodeAt(
      this.pos,
    );
    if (!useComposerControllerValue323)
      return useComposerControllerValue32.fail(
        `No node at mark step's position`,
      );
    let useComposerControllerValue324 =
      useComposerControllerValue323.type.create(
        useComposerControllerValue323.attrs,
        null,
        this.mark.removeFromSet(useComposerControllerValue323.marks),
      );
    return useComposerControllerValue32.fromReplace(
      useComposerControllerParam234,
      this.pos,
      this.pos + 1,
      new useComposerControllerS(
        useComposerControllerV.from(useComposerControllerValue324),
        0,
        useComposerControllerValue323.isLeaf ? 0 : 1,
      ),
    );
  }
  invert(useComposerControllerParam529) {
    let useComposerControllerValue616 = useComposerControllerParam529.nodeAt(
      this.pos,
    );
    return !useComposerControllerValue616 ||
      !this.mark.isInSet(useComposerControllerValue616.marks)
      ? this
      : new useComposerControllerValue35(this.pos, this.mark);
  }
  map(useComposerControllerParam598) {
    let useComposerControllerValue683 = useComposerControllerParam598.mapResult(
      this.pos,
      1,
    );
    return useComposerControllerValue683.deletedAfter
      ? null
      : new UseComposerControllerClass21(
          useComposerControllerValue683.pos,
          this.mark,
        );
  }
  toJSON() {
    return {
      stepType: `removeNodeMark`,
      pos: this.pos,
      mark: this.mark.toJSON(),
    };
  }
  static fromJSON(
    useComposerControllerParam393,
    useComposerControllerParam394,
  ) {
    if (typeof useComposerControllerParam394.pos != `number`)
      throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);
    return new UseComposerControllerClass21(
      useComposerControllerParam394.pos,
      useComposerControllerParam393.markFromJSON(
        useComposerControllerParam394.mark,
      ),
    );
  }
};
useComposerControllerValue31.jsonID(
  `removeNodeMark`,
  useComposerControllerValue36,
);
var useComposerControllerValue37 = class UseComposerControllerClass9 extends useComposerControllerValue31 {
  constructor(
    useComposerControllerParam605,
    useComposerControllerParam606,
    useComposerControllerParam607,
    useComposerControllerParam608 = !1,
  ) {
    (super(),
      (this.from = useComposerControllerParam605),
      (this.to = useComposerControllerParam606),
      (this.slice = useComposerControllerParam607),
      (this.structure = useComposerControllerParam608));
  }
  apply(useComposerControllerParam407) {
    return this.structure &&
      useComposerControllerHelper51(
        useComposerControllerParam407,
        this.from,
        this.to,
      )
      ? useComposerControllerValue32.fail(
          `Structure replace would overwrite content`,
        )
      : useComposerControllerValue32.fromReplace(
          useComposerControllerParam407,
          this.from,
          this.to,
          this.slice,
        );
  }
  getMap() {
    return new useComposerControllerValue29([
      this.from,
      this.to - this.from,
      this.slice.size,
    ]);
  }
  invert(useComposerControllerParam599) {
    return new UseComposerControllerClass9(
      this.from,
      this.from + this.slice.size,
      useComposerControllerParam599.slice(this.from, this.to),
    );
  }
  map(useComposerControllerParam293) {
    let useComposerControllerValue386 = useComposerControllerParam293.mapResult(
        this.to,
        -1,
      ),
      useComposerControllerValue387 =
        this.from == this.to && UseComposerControllerClass9.MAP_BIAS < 0
          ? useComposerControllerValue386
          : useComposerControllerParam293.mapResult(this.from, 1);
    return useComposerControllerValue387.deletedAcross &&
      useComposerControllerValue386.deletedAcross
      ? null
      : new UseComposerControllerClass9(
          useComposerControllerValue387.pos,
          Math.max(
            useComposerControllerValue387.pos,
            useComposerControllerValue386.pos,
          ),
          this.slice,
          this.structure,
        );
  }
  merge(useComposerControllerParam39) {
    if (
      !(useComposerControllerParam39 instanceof UseComposerControllerClass9) ||
      useComposerControllerParam39.structure ||
      this.structure
    )
      return null;
    if (
      this.from + this.slice.size == useComposerControllerParam39.from &&
      !this.slice.openEnd &&
      !useComposerControllerParam39.slice.openStart
    ) {
      let useComposerControllerValue399 =
        this.slice.size + useComposerControllerParam39.slice.size == 0
          ? useComposerControllerS.empty
          : new useComposerControllerS(
              this.slice.content.append(
                useComposerControllerParam39.slice.content,
              ),
              this.slice.openStart,
              useComposerControllerParam39.slice.openEnd,
            );
      return new UseComposerControllerClass9(
        this.from,
        this.to +
          (useComposerControllerParam39.to - useComposerControllerParam39.from),
        useComposerControllerValue399,
        this.structure,
      );
    } else if (
      useComposerControllerParam39.to == this.from &&
      !this.slice.openStart &&
      !useComposerControllerParam39.slice.openEnd
    ) {
      let useComposerControllerValue415 =
        this.slice.size + useComposerControllerParam39.slice.size == 0
          ? useComposerControllerS.empty
          : new useComposerControllerS(
              useComposerControllerParam39.slice.content.append(
                this.slice.content,
              ),
              useComposerControllerParam39.slice.openStart,
              this.slice.openEnd,
            );
      return new UseComposerControllerClass9(
        useComposerControllerParam39.from,
        this.to,
        useComposerControllerValue415,
        this.structure,
      );
    } else return null;
  }
  toJSON() {
    let useComposerControllerValue494 = {
      stepType: `replace`,
      from: this.from,
      to: this.to,
    };
    return (
      this.slice.size &&
        (useComposerControllerValue494.slice = this.slice.toJSON()),
      this.structure && (useComposerControllerValue494.structure = !0),
      useComposerControllerValue494
    );
  }
  static fromJSON(
    useComposerControllerParam315,
    useComposerControllerParam316,
  ) {
    if (
      typeof useComposerControllerParam316.from != `number` ||
      typeof useComposerControllerParam316.to != `number`
    )
      throw RangeError(`Invalid input for ReplaceStep.fromJSON`);
    return new UseComposerControllerClass9(
      useComposerControllerParam316.from,
      useComposerControllerParam316.to,
      useComposerControllerS.fromJSON(
        useComposerControllerParam315,
        useComposerControllerParam316.slice,
      ),
      !!useComposerControllerParam316.structure,
    );
  }
};
((useComposerControllerValue37.MAP_BIAS = 1),
  useComposerControllerValue31.jsonID(`replace`, useComposerControllerValue37));
var useComposerControllerValue38 = class UseComposerControllerClass7 extends useComposerControllerValue31 {
  constructor(
    useComposerControllerParam446,
    useComposerControllerParam447,
    useComposerControllerParam448,
    useComposerControllerParam449,
    useComposerControllerParam450,
    useComposerControllerParam451,
    _useComposerControllerV = !1,
  ) {
    (super(),
      (this.from = useComposerControllerParam446),
      (this.to = useComposerControllerParam447),
      (this.gapFrom = useComposerControllerParam448),
      (this.gapTo = useComposerControllerParam449),
      (this.slice = useComposerControllerParam450),
      (this.insert = useComposerControllerParam451),
      (this.structure = _useComposerControllerV));
  }
  apply(useComposerControllerParam92) {
    if (
      this.structure &&
      (useComposerControllerHelper51(
        useComposerControllerParam92,
        this.from,
        this.gapFrom,
      ) ||
        useComposerControllerHelper51(
          useComposerControllerParam92,
          this.gapTo,
          this.to,
        ))
    )
      return useComposerControllerValue32.fail(
        `Structure gap-replace would overwrite content`,
      );
    let useComposerControllerValue168 = useComposerControllerParam92.slice(
      this.gapFrom,
      this.gapTo,
    );
    if (
      useComposerControllerValue168.openStart ||
      useComposerControllerValue168.openEnd
    )
      return useComposerControllerValue32.fail(`Gap is not a flat range`);
    let useComposerControllerValue169 = this.slice.insertAt(
      this.insert,
      useComposerControllerValue168.content,
    );
    return useComposerControllerValue169
      ? useComposerControllerValue32.fromReplace(
          useComposerControllerParam92,
          this.from,
          this.to,
          useComposerControllerValue169,
        )
      : useComposerControllerValue32.fail(`Content does not fit in gap`);
  }
  getMap() {
    return new useComposerControllerValue29([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert,
    ]);
  }
  invert(useComposerControllerParam199) {
    let useComposerControllerValue289 = this.gapTo - this.gapFrom;
    return new UseComposerControllerClass7(
      this.from,
      this.from + this.slice.size + useComposerControllerValue289,
      this.from + this.insert,
      this.from + this.insert + useComposerControllerValue289,
      useComposerControllerParam199
        .slice(this.from, this.to)
        .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
      this.gapFrom - this.from,
      this.structure,
    );
  }
  map(useComposerControllerParam166) {
    let useComposerControllerValue250 = useComposerControllerParam166.mapResult(
        this.from,
        1,
      ),
      useComposerControllerValue251 = useComposerControllerParam166.mapResult(
        this.to,
        -1,
      ),
      useComposerControllerValue252 =
        this.from == this.gapFrom
          ? useComposerControllerValue250.pos
          : useComposerControllerParam166.map(this.gapFrom, -1),
      useComposerControllerValue253 =
        this.to == this.gapTo
          ? useComposerControllerValue251.pos
          : useComposerControllerParam166.map(this.gapTo, 1);
    return (useComposerControllerValue250.deletedAcross &&
      useComposerControllerValue251.deletedAcross) ||
      useComposerControllerValue252 < useComposerControllerValue250.pos ||
      useComposerControllerValue253 > useComposerControllerValue251.pos
      ? null
      : new UseComposerControllerClass7(
          useComposerControllerValue250.pos,
          useComposerControllerValue251.pos,
          useComposerControllerValue252,
          useComposerControllerValue253,
          this.slice,
          this.insert,
          this.structure,
        );
  }
  toJSON() {
    let useComposerControllerValue369 = {
      stepType: `replaceAround`,
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert,
    };
    return (
      this.slice.size &&
        (useComposerControllerValue369.slice = this.slice.toJSON()),
      this.structure && (useComposerControllerValue369.structure = !0),
      useComposerControllerValue369
    );
  }
  static fromJSON(
    useComposerControllerParam149,
    useComposerControllerParam150,
  ) {
    if (
      typeof useComposerControllerParam150.from != `number` ||
      typeof useComposerControllerParam150.to != `number` ||
      typeof useComposerControllerParam150.gapFrom != `number` ||
      typeof useComposerControllerParam150.gapTo != `number` ||
      typeof useComposerControllerParam150.insert != `number`
    )
      throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);
    return new UseComposerControllerClass7(
      useComposerControllerParam150.from,
      useComposerControllerParam150.to,
      useComposerControllerParam150.gapFrom,
      useComposerControllerParam150.gapTo,
      useComposerControllerS.fromJSON(
        useComposerControllerParam149,
        useComposerControllerParam150.slice,
      ),
      useComposerControllerParam150.insert,
      !!useComposerControllerParam150.structure,
    );
  }
};
useComposerControllerValue31.jsonID(
  `replaceAround`,
  useComposerControllerValue38,
);
function useComposerControllerHelper51(
  useComposerControllerParam235,
  useComposerControllerParam236,
  useComposerControllerParam237,
) {
  let useComposerControllerValue325 = useComposerControllerParam235.resolve(
      useComposerControllerParam236,
    ),
    useComposerControllerValue326 =
      useComposerControllerParam237 - useComposerControllerParam236,
    useComposerControllerValue327 = useComposerControllerValue325.depth;
  for (
    ;
    useComposerControllerValue326 > 0 &&
    useComposerControllerValue327 > 0 &&
    useComposerControllerValue325.indexAfter(useComposerControllerValue327) ==
      useComposerControllerValue325.node(useComposerControllerValue327)
        .childCount;

  )
    (useComposerControllerValue327--, useComposerControllerValue326--);
  if (useComposerControllerValue326 > 0) {
    let useComposerControllerValue624 = useComposerControllerValue325
      .node(useComposerControllerValue327)
      .maybeChild(
        useComposerControllerValue325.indexAfter(useComposerControllerValue327),
      );
    for (; useComposerControllerValue326 > 0; ) {
      if (
        !useComposerControllerValue624 ||
        useComposerControllerValue624.isLeaf
      )
        return !0;
      ((useComposerControllerValue624 =
        useComposerControllerValue624.firstChild),
        useComposerControllerValue326--);
    }
  }
  return !1;
}
function useComposerControllerHelper52(
  useComposerControllerParam77,
  useComposerControllerParam78,
  useComposerControllerParam79,
  useComposerControllerParam80,
) {
  let useComposerControllerValue151 = [],
    useComposerControllerValue152 = [],
    _useComposerControllerV,
    useComposerControllerValue153;
  (useComposerControllerParam77.doc.nodesBetween(
    useComposerControllerParam78,
    useComposerControllerParam79,
    (
      useComposerControllerParam143,
      useComposerControllerParam144,
      useComposerControllerParam145,
    ) => {
      if (!useComposerControllerParam143.isInline) return;
      let _useComposerControllerY = useComposerControllerParam143.marks;
      if (
        !useComposerControllerParam80.isInSet(_useComposerControllerY) &&
        useComposerControllerParam145.type.allowsMarkType(
          useComposerControllerParam80.type,
        )
      ) {
        let useComposerControllerValue375 = Math.max(
            useComposerControllerParam144,
            useComposerControllerParam78,
          ),
          _useComposerControllerB = Math.min(
            useComposerControllerParam144 +
              useComposerControllerParam143.nodeSize,
            useComposerControllerParam79,
          ),
          __useComposerControllerS = useComposerControllerParam80.addToSet(
            _useComposerControllerY,
          );
        for (
          let useComposerControllerValue608 = 0;
          useComposerControllerValue608 < _useComposerControllerY.length;
          useComposerControllerValue608++
        )
          _useComposerControllerY[useComposerControllerValue608].isInSet(
            __useComposerControllerS,
          ) ||
            (_useComposerControllerV &&
            _useComposerControllerV.to == useComposerControllerValue375 &&
            _useComposerControllerV.mark.eq(
              _useComposerControllerY[useComposerControllerValue608],
            )
              ? (_useComposerControllerV.to = _useComposerControllerB)
              : useComposerControllerValue151.push(
                  (_useComposerControllerV = new useComposerControllerValue34(
                    useComposerControllerValue375,
                    _useComposerControllerB,
                    _useComposerControllerY[useComposerControllerValue608],
                  )),
                ));
        useComposerControllerValue153 &&
        useComposerControllerValue153.to == useComposerControllerValue375
          ? (useComposerControllerValue153.to = _useComposerControllerB)
          : useComposerControllerValue152.push(
              (useComposerControllerValue153 = new useComposerControllerValue33(
                useComposerControllerValue375,
                _useComposerControllerB,
                useComposerControllerParam80,
              )),
            );
      }
    },
  ),
    useComposerControllerValue151.forEach((item) =>
      useComposerControllerParam77.step(item),
    ),
    useComposerControllerValue152.forEach((item) =>
      useComposerControllerParam77.step(item),
    ));
}
function useComposerControllerHelper53(
  useComposerControllerParam43,
  useComposerControllerParam44,
  useComposerControllerParam45,
  useComposerControllerParam46,
) {
  let useComposerControllerValue111 = [],
    useComposerControllerValue112 = 0;
  (useComposerControllerParam43.doc.nodesBetween(
    useComposerControllerParam44,
    useComposerControllerParam45,
    (useComposerControllerParam75, _useComposerControllerV) => {
      if (!useComposerControllerParam75.isInline) return;
      useComposerControllerValue112++;
      let useComposerControllerValue148 = null;
      if (
        useComposerControllerParam46 instanceof useComposerControllerValue14
      ) {
        let useComposerControllerValue719 = useComposerControllerParam75.marks,
          useComposerControllerValue720;
        for (
          ;
          (useComposerControllerValue720 = useComposerControllerParam46.isInSet(
            useComposerControllerValue719,
          ));

        )
          ((useComposerControllerValue148 ||= []).push(
            useComposerControllerValue720,
          ),
            (useComposerControllerValue719 =
              useComposerControllerValue720.removeFromSet(
                useComposerControllerValue719,
              )));
      } else
        useComposerControllerParam46
          ? useComposerControllerParam46.isInSet(
              useComposerControllerParam75.marks,
            ) &&
            (useComposerControllerValue148 = [useComposerControllerParam46])
          : (useComposerControllerValue148 =
              useComposerControllerParam75.marks);
      if (
        useComposerControllerValue148 &&
        useComposerControllerValue148.length
      ) {
        let useComposerControllerValue358 = Math.min(
          _useComposerControllerV + useComposerControllerParam75.nodeSize,
          useComposerControllerParam45,
        );
        for (
          let useComposerControllerValue412 = 0;
          useComposerControllerValue412 < useComposerControllerValue148.length;
          useComposerControllerValue412++
        ) {
          let useComposerControllerValue475 =
              useComposerControllerValue148[useComposerControllerValue412],
            useComposerControllerValue476;
          for (
            let useComposerControllerValue721 = 0;
            useComposerControllerValue721 <
            useComposerControllerValue111.length;
            useComposerControllerValue721++
          ) {
            let useComposerControllerValue794 =
              useComposerControllerValue111[useComposerControllerValue721];
            useComposerControllerValue794.step ==
              useComposerControllerValue112 - 1 &&
              useComposerControllerValue475.eq(
                useComposerControllerValue111[useComposerControllerValue721]
                  .style,
              ) &&
              (useComposerControllerValue476 = useComposerControllerValue794);
          }
          useComposerControllerValue476
            ? ((useComposerControllerValue476.to =
                useComposerControllerValue358),
              (useComposerControllerValue476.step =
                useComposerControllerValue112))
            : useComposerControllerValue111.push({
                style: useComposerControllerValue475,
                from: Math.max(
                  _useComposerControllerV,
                  useComposerControllerParam44,
                ),
                to: useComposerControllerValue358,
                step: useComposerControllerValue112,
              });
        }
      }
    },
  ),
    useComposerControllerValue111.forEach((item) =>
      useComposerControllerParam43.step(
        new useComposerControllerValue34(item.from, item.to, item.style),
      ),
    ));
}
function useComposerControllerHelper54(
  useComposerControllerParam34,
  useComposerControllerParam35,
  useComposerControllerParam36,
  useComposerControllerParam37 = useComposerControllerParam36.contentMatch,
  useComposerControllerParam38 = !0,
) {
  let useComposerControllerValue98 = useComposerControllerParam34.doc.nodeAt(
      useComposerControllerParam35,
    ),
    useComposerControllerValue99 = [],
    useComposerControllerValue100 = useComposerControllerParam35 + 1;
  for (
    let useComposerControllerValue144 = 0;
    useComposerControllerValue144 < useComposerControllerValue98.childCount;
    useComposerControllerValue144++
  ) {
    let useComposerControllerValue162 = useComposerControllerValue98.child(
        useComposerControllerValue144,
      ),
      _useComposerControllerY =
        useComposerControllerValue100 + useComposerControllerValue162.nodeSize,
      _useComposerControllerB = useComposerControllerParam37.matchType(
        useComposerControllerValue162.type,
      );
    if (!_useComposerControllerB)
      useComposerControllerValue99.push(
        new useComposerControllerValue37(
          useComposerControllerValue100,
          _useComposerControllerY,
          useComposerControllerS.empty,
        ),
      );
    else {
      useComposerControllerParam37 = _useComposerControllerB;
      for (
        let useComposerControllerValue637 = 0;
        useComposerControllerValue637 <
        useComposerControllerValue162.marks.length;
        useComposerControllerValue637++
      )
        useComposerControllerParam36.allowsMarkType(
          useComposerControllerValue162.marks[useComposerControllerValue637]
            .type,
        ) ||
          useComposerControllerParam34.step(
            new useComposerControllerValue34(
              useComposerControllerValue100,
              _useComposerControllerY,
              useComposerControllerValue162.marks[
                useComposerControllerValue637
              ],
            ),
          );
      if (
        useComposerControllerParam38 &&
        useComposerControllerValue162.isText &&
        useComposerControllerParam36.whitespace != `pre`
      ) {
        let useComposerControllerValue470,
          useComposerControllerValue471 = /\r?\n|\r/g,
          useComposerControllerValue472;
        for (
          ;
          (useComposerControllerValue470 = useComposerControllerValue471.exec(
            useComposerControllerValue162.text,
          ));

        )
          ((useComposerControllerValue472 ||= new useComposerControllerS(
            useComposerControllerV.from(
              useComposerControllerParam36.schema.text(
                ` `,
                useComposerControllerParam36.allowedMarks(
                  useComposerControllerValue162.marks,
                ),
              ),
            ),
            0,
            0,
          )),
            useComposerControllerValue99.push(
              new useComposerControllerValue37(
                useComposerControllerValue100 +
                  useComposerControllerValue470.index,
                useComposerControllerValue100 +
                  useComposerControllerValue470.index +
                  useComposerControllerValue470[0].length,
                useComposerControllerValue472,
              ),
            ));
      }
    }
    useComposerControllerValue100 = _useComposerControllerY;
  }
  if (!useComposerControllerParam37.validEnd) {
    let useComposerControllerValue759 = useComposerControllerParam37.fillBefore(
      useComposerControllerV.empty,
      !0,
    );
    useComposerControllerParam34.replace(
      useComposerControllerValue100,
      useComposerControllerValue100,
      new useComposerControllerS(useComposerControllerValue759, 0, 0),
    );
  }
  for (
    let useComposerControllerValue805 = useComposerControllerValue99.length - 1;
    useComposerControllerValue805 >= 0;
    useComposerControllerValue805--
  )
    useComposerControllerParam34.step(
      useComposerControllerValue99[useComposerControllerValue805],
    );
}
function useComposerControllerHelper55(
  useComposerControllerParam111,
  useComposerControllerParam112,
  useComposerControllerParam113,
) {
  let { $from: $from, $to: $to, depth: depth } = useComposerControllerParam112,
    useComposerControllerValue184 = $from.before(depth + 1),
    useComposerControllerValue185 = $to.after(depth + 1),
    useComposerControllerValue186 = useComposerControllerValue184,
    _useComposerControllerY = useComposerControllerValue185,
    _useComposerControllerB = useComposerControllerV.empty,
    useComposerControllerValue187 = 0;
  for (
    let useComposerControllerValue691 = depth,
      useComposerControllerValue692 = !1;
    useComposerControllerValue691 > useComposerControllerParam113;
    useComposerControllerValue691--
  )
    useComposerControllerValue692 ||
    $from.index(useComposerControllerValue691) > 0
      ? ((useComposerControllerValue692 = !0),
        (_useComposerControllerB = useComposerControllerV.from(
          $from
            .node(useComposerControllerValue691)
            .copy(_useComposerControllerB),
        )),
        useComposerControllerValue187++)
      : useComposerControllerValue186--;
  let useComposerControllerValue188 = useComposerControllerV.empty,
    useComposerControllerValue189 = 0;
  for (
    let useComposerControllerValue658 = depth,
      useComposerControllerValue659 = !1;
    useComposerControllerValue658 > useComposerControllerParam113;
    useComposerControllerValue658--
  )
    useComposerControllerValue659 ||
    $to.after(useComposerControllerValue658 + 1) <
      $to.end(useComposerControllerValue658)
      ? ((useComposerControllerValue659 = !0),
        (useComposerControllerValue188 = useComposerControllerV.from(
          $to
            .node(useComposerControllerValue658)
            .copy(useComposerControllerValue188),
        )),
        useComposerControllerValue189++)
      : _useComposerControllerY++;
  useComposerControllerParam111.step(
    new useComposerControllerValue38(
      useComposerControllerValue186,
      _useComposerControllerY,
      useComposerControllerValue184,
      useComposerControllerValue185,
      new useComposerControllerS(
        _useComposerControllerB.append(useComposerControllerValue188),
        useComposerControllerValue187,
        useComposerControllerValue189,
      ),
      _useComposerControllerB.size - useComposerControllerValue187,
      !0,
    ),
  );
}
function useComposerControllerHelper56(
  useComposerControllerParam103,
  useComposerControllerParam104,
  useComposerControllerParam105,
) {
  let useComposerControllerValue179 = useComposerControllerV.empty;
  for (
    let useComposerControllerValue300 =
      useComposerControllerParam105.length - 1;
    useComposerControllerValue300 >= 0;
    useComposerControllerValue300--
  ) {
    if (useComposerControllerValue179.size) {
      let useComposerControllerValue438 = useComposerControllerParam105[
        useComposerControllerValue300
      ].type.contentMatch.matchFragment(useComposerControllerValue179);
      if (
        !useComposerControllerValue438 ||
        !useComposerControllerValue438.validEnd
      )
        throw RangeError(
          `Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`,
        );
    }
    useComposerControllerValue179 = useComposerControllerV.from(
      useComposerControllerParam105[useComposerControllerValue300].type.create(
        useComposerControllerParam105[useComposerControllerValue300].attrs,
        useComposerControllerValue179,
      ),
    );
  }
  let useComposerControllerValue180 = useComposerControllerParam104.start,
    useComposerControllerValue181 = useComposerControllerParam104.end;
  useComposerControllerParam103.step(
    new useComposerControllerValue38(
      useComposerControllerValue180,
      useComposerControllerValue181,
      useComposerControllerValue180,
      useComposerControllerValue181,
      new useComposerControllerS(useComposerControllerValue179, 0, 0),
      useComposerControllerParam105.length,
      !0,
    ),
  );
}
function useComposerControllerHelper57(
  useComposerControllerParam25,
  useComposerControllerParam26,
  useComposerControllerParam27,
  useComposerControllerParam28,
  useComposerControllerParam29,
) {
  if (!useComposerControllerParam28.isTextblock)
    throw RangeError(`Type given to setBlockType should be a textblock`);
  let useComposerControllerValue92 = useComposerControllerParam25.steps.length;
  useComposerControllerParam25.doc.nodesBetween(
    useComposerControllerParam26,
    useComposerControllerParam27,
    (useComposerControllerParam47, useComposerControllerParam48) => {
      let useComposerControllerValue114 =
        typeof useComposerControllerParam29 == `function`
          ? useComposerControllerParam29(useComposerControllerParam47)
          : useComposerControllerParam29;
      if (
        useComposerControllerParam47.isTextblock &&
        !useComposerControllerParam47.hasMarkup(
          useComposerControllerParam28,
          useComposerControllerValue114,
        ) &&
        useComposerControllerHelper60(
          useComposerControllerParam25.doc,
          useComposerControllerParam25.mapping
            .slice(useComposerControllerValue92)
            .map(useComposerControllerParam48),
          useComposerControllerParam28,
        )
      ) {
        let useComposerControllerValue163 = null;
        if (useComposerControllerParam28.schema.linebreakReplacement) {
          let useComposerControllerValue592 =
              useComposerControllerParam28.whitespace == `pre`,
            useComposerControllerValue593 =
              !!useComposerControllerParam28.contentMatch.matchType(
                useComposerControllerParam28.schema.linebreakReplacement,
              );
          useComposerControllerValue592 && !useComposerControllerValue593
            ? (useComposerControllerValue163 = !1)
            : !useComposerControllerValue592 &&
              useComposerControllerValue593 &&
              (useComposerControllerValue163 = !0);
        }
        (useComposerControllerValue163 === !1 &&
          useComposerControllerHelper59(
            useComposerControllerParam25,
            useComposerControllerParam47,
            useComposerControllerParam48,
            useComposerControllerValue92,
          ),
          useComposerControllerHelper54(
            useComposerControllerParam25,
            useComposerControllerParam25.mapping
              .slice(useComposerControllerValue92)
              .map(useComposerControllerParam48, 1),
            useComposerControllerParam28,
            void 0,
            useComposerControllerValue163 === null,
          ));
        let useComposerControllerValue164 =
            useComposerControllerParam25.mapping.slice(
              useComposerControllerValue92,
            ),
          useComposerControllerValue165 = useComposerControllerValue164.map(
            useComposerControllerParam48,
            1,
          ),
          _useComposerControllerY = useComposerControllerValue164.map(
            useComposerControllerParam48 +
              useComposerControllerParam47.nodeSize,
            1,
          );
        return (
          useComposerControllerParam25.step(
            new useComposerControllerValue38(
              useComposerControllerValue165,
              _useComposerControllerY,
              useComposerControllerValue165 + 1,
              _useComposerControllerY - 1,
              new useComposerControllerS(
                useComposerControllerV.from(
                  useComposerControllerParam28.create(
                    useComposerControllerValue114,
                    null,
                    useComposerControllerParam47.marks,
                  ),
                ),
                0,
                0,
              ),
              1,
              !0,
            ),
          ),
          useComposerControllerValue163 === !0 &&
            useComposerControllerHelper58(
              useComposerControllerParam25,
              useComposerControllerParam47,
              useComposerControllerParam48,
              useComposerControllerValue92,
            ),
          !1
        );
      }
    },
  );
}
function useComposerControllerHelper58(
  useComposerControllerParam281,
  useComposerControllerParam282,
  useComposerControllerParam283,
  useComposerControllerParam284,
) {
  useComposerControllerParam282.forEach((item, index) => {
    if (item.isText) {
      let _useComposerControllerV,
        useComposerControllerValue483 = /\r?\n|\r/g;
      for (
        ;
        (_useComposerControllerV = useComposerControllerValue483.exec(
          item.text,
        ));

      ) {
        let useComposerControllerValue596 =
          useComposerControllerParam281.mapping
            .slice(useComposerControllerParam284)
            .map(
              useComposerControllerParam283 +
                1 +
                index +
                _useComposerControllerV.index,
            );
        useComposerControllerParam281.replaceWith(
          useComposerControllerValue596,
          useComposerControllerValue596 + 1,
          useComposerControllerParam282.type.schema.linebreakReplacement.create(),
        );
      }
    }
  });
}
function useComposerControllerHelper59(
  useComposerControllerParam366,
  useComposerControllerParam367,
  useComposerControllerParam368,
  useComposerControllerParam369,
) {
  useComposerControllerParam367.forEach((item, index) => {
    if (item.type == item.type.schema.linebreakReplacement) {
      let useComposerControllerValue699 = useComposerControllerParam366.mapping
        .slice(useComposerControllerParam369)
        .map(useComposerControllerParam368 + 1 + index);
      useComposerControllerParam366.replaceWith(
        useComposerControllerValue699,
        useComposerControllerValue699 + 1,
        useComposerControllerParam367.type.schema.text(`
`),
      );
    }
  });
}
function useComposerControllerHelper60(
  useComposerControllerParam585,
  useComposerControllerParam586,
  useComposerControllerParam587,
) {
  let useComposerControllerValue670 = useComposerControllerParam585.resolve(
      useComposerControllerParam586,
    ),
    useComposerControllerValue671 = useComposerControllerValue670.index();
  return useComposerControllerValue670.parent.canReplaceWith(
    useComposerControllerValue671,
    useComposerControllerValue671 + 1,
    useComposerControllerParam587,
  );
}
function _t(
  useComposerControllerParam106,
  useComposerControllerParam107,
  useComposerControllerParam108,
  useComposerControllerParam109,
  useComposerControllerParam110,
) {
  let useComposerControllerValue182 = useComposerControllerParam106.doc.nodeAt(
    useComposerControllerParam107,
  );
  if (!useComposerControllerValue182)
    throw RangeError(`No node at given position`);
  useComposerControllerParam108 ||= useComposerControllerValue182.type;
  let useComposerControllerValue183 = useComposerControllerParam108.create(
    useComposerControllerParam109,
    null,
    useComposerControllerParam110 || useComposerControllerValue182.marks,
  );
  if (useComposerControllerValue182.isLeaf)
    return useComposerControllerParam106.replaceWith(
      useComposerControllerParam107,
      useComposerControllerParam107 + useComposerControllerValue182.nodeSize,
      useComposerControllerValue183,
    );
  if (
    !useComposerControllerParam108.validContent(
      useComposerControllerValue182.content,
    )
  )
    throw RangeError(
      `Invalid content for node type ` + useComposerControllerParam108.name,
    );
  useComposerControllerParam106.step(
    new useComposerControllerValue38(
      useComposerControllerParam107,
      useComposerControllerParam107 + useComposerControllerValue182.nodeSize,
      useComposerControllerParam107 + 1,
      useComposerControllerParam107 +
        useComposerControllerValue182.nodeSize -
        1,
      new useComposerControllerS(
        useComposerControllerV.from(useComposerControllerValue183),
        0,
        0,
      ),
      1,
      !0,
    ),
  );
}
function useComposerControllerHelper61(
  useComposerControllerParam204,
  useComposerControllerParam205,
  useComposerControllerParam206 = 1,
  useComposerControllerParam207,
) {
  let useComposerControllerValue296 = useComposerControllerParam204.doc.resolve(
      useComposerControllerParam205,
    ),
    useComposerControllerValue297 = useComposerControllerV.empty,
    useComposerControllerValue298 = useComposerControllerV.empty;
  for (
    let useComposerControllerValue509 = useComposerControllerValue296.depth,
      useComposerControllerValue510 =
        useComposerControllerValue296.depth - useComposerControllerParam206,
      useComposerControllerValue511 = useComposerControllerParam206 - 1;
    useComposerControllerValue509 > useComposerControllerValue510;
    useComposerControllerValue509--, useComposerControllerValue511--
  ) {
    useComposerControllerValue297 = useComposerControllerV.from(
      useComposerControllerValue296
        .node(useComposerControllerValue509)
        .copy(useComposerControllerValue297),
    );
    let useComposerControllerValue638 =
      useComposerControllerParam207 &&
      useComposerControllerParam207[useComposerControllerValue511];
    useComposerControllerValue298 = useComposerControllerV.from(
      useComposerControllerValue638
        ? useComposerControllerValue638.type.create(
            useComposerControllerValue638.attrs,
            useComposerControllerValue298,
          )
        : useComposerControllerValue296
            .node(useComposerControllerValue509)
            .copy(useComposerControllerValue298),
    );
  }
  useComposerControllerParam204.step(
    new useComposerControllerValue37(
      useComposerControllerParam205,
      useComposerControllerParam205,
      new useComposerControllerS(
        useComposerControllerValue297.append(useComposerControllerValue298),
        useComposerControllerParam206,
        useComposerControllerParam206,
      ),
      !0,
    ),
  );
}
function useComposerControllerHelper62(
  useComposerControllerParam40,
  useComposerControllerParam41,
  useComposerControllerParam42,
) {
  let useComposerControllerValue106 = null,
    { linebreakReplacement: linebreakReplacement } =
      useComposerControllerParam40.doc.type.schema,
    useComposerControllerValue107 = useComposerControllerParam40.doc.resolve(
      useComposerControllerParam41 - useComposerControllerParam42,
    ),
    _useComposerControllerV = useComposerControllerValue107.node().type;
  if (linebreakReplacement && _useComposerControllerV.inlineContent) {
    let useComposerControllerValue693 =
        _useComposerControllerV.whitespace == `pre`,
      useComposerControllerValue694 =
        !!_useComposerControllerV.contentMatch.matchType(linebreakReplacement);
    useComposerControllerValue693 && !useComposerControllerValue694
      ? (useComposerControllerValue106 = !1)
      : !useComposerControllerValue693 &&
        useComposerControllerValue694 &&
        (useComposerControllerValue106 = !0);
  }
  let useComposerControllerValue108 = useComposerControllerParam40.steps.length;
  if (useComposerControllerValue106 === !1) {
    let useComposerControllerValue779 =
      useComposerControllerParam40.doc.resolve(
        useComposerControllerParam41 + useComposerControllerParam42,
      );
    useComposerControllerHelper59(
      useComposerControllerParam40,
      useComposerControllerValue779.node(),
      useComposerControllerValue779.before(),
      useComposerControllerValue108,
    );
  }
  _useComposerControllerV.inlineContent &&
    useComposerControllerHelper54(
      useComposerControllerParam40,
      useComposerControllerParam41 + useComposerControllerParam42 - 1,
      _useComposerControllerV,
      useComposerControllerValue107
        .node()
        .contentMatchAt(useComposerControllerValue107.index()),
      useComposerControllerValue106 == null,
    );
  let useComposerControllerValue109 =
      useComposerControllerParam40.mapping.slice(useComposerControllerValue108),
    useComposerControllerValue110 = useComposerControllerValue109.map(
      useComposerControllerParam41 - useComposerControllerParam42,
    );
  if (
    (useComposerControllerParam40.step(
      new useComposerControllerValue37(
        useComposerControllerValue110,
        useComposerControllerValue109.map(
          useComposerControllerParam41 + useComposerControllerParam42,
          -1,
        ),
        useComposerControllerS.empty,
        !0,
      ),
    ),
    useComposerControllerValue106 === !0)
  ) {
    let useComposerControllerValue748 =
      useComposerControllerParam40.doc.resolve(useComposerControllerValue110);
    useComposerControllerHelper58(
      useComposerControllerParam40,
      useComposerControllerValue748.node(),
      useComposerControllerValue748.before(),
      useComposerControllerParam40.steps.length,
    );
  }
  return useComposerControllerParam40;
}
function useComposerControllerHelper63(
  useComposerControllerParam61,
  useComposerControllerParam62,
  useComposerControllerParam63,
) {
  let useComposerControllerValue138 = useComposerControllerParam61.resolve(
    useComposerControllerParam62,
  );
  if (
    useComposerControllerValue138.parent.canReplaceWith(
      useComposerControllerValue138.index(),
      useComposerControllerValue138.index(),
      useComposerControllerParam63,
    )
  )
    return useComposerControllerParam62;
  if (useComposerControllerValue138.parentOffset == 0)
    for (
      let useComposerControllerValue566 =
        useComposerControllerValue138.depth - 1;
      useComposerControllerValue566 >= 0;
      useComposerControllerValue566--
    ) {
      let useComposerControllerValue660 = useComposerControllerValue138.index(
        useComposerControllerValue566,
      );
      if (
        useComposerControllerValue138
          .node(useComposerControllerValue566)
          .canReplaceWith(
            useComposerControllerValue660,
            useComposerControllerValue660,
            useComposerControllerParam63,
          )
      )
        return useComposerControllerValue138.before(
          useComposerControllerValue566 + 1,
        );
      if (useComposerControllerValue660 > 0) return null;
    }
  if (
    useComposerControllerValue138.parentOffset ==
    useComposerControllerValue138.parent.content.size
  )
    for (
      let useComposerControllerValue513 =
        useComposerControllerValue138.depth - 1;
      useComposerControllerValue513 >= 0;
      useComposerControllerValue513--
    ) {
      let useComposerControllerValue576 =
        useComposerControllerValue138.indexAfter(useComposerControllerValue513);
      if (
        useComposerControllerValue138
          .node(useComposerControllerValue513)
          .canReplaceWith(
            useComposerControllerValue576,
            useComposerControllerValue576,
            useComposerControllerParam63,
          )
      )
        return useComposerControllerValue138.after(
          useComposerControllerValue513 + 1,
        );
      if (
        useComposerControllerValue576 <
        useComposerControllerValue138.node(useComposerControllerValue513)
          .childCount
      )
        return null;
    }
  return null;
}
type ReplacePlacementDocument = {
  resolve(position: number): ReplaceResolvedPosition;
};
type ReplaceResolvedPosition = {
  depth: number;
  pos: number;
  start(depth: number): number;
  end(depth: number): number;
  index(depth: number): number;
  node(depth: number): ReplaceParentNode;
  before(depth: number): number;
  after(depth: number): number;
};
type ReplaceParentNode = {
  canReplace(from: number, to: number, replacement: unknown): boolean;
  contentMatchAt(index: number): {
    findWrapping(nodeType: unknown): unknown[] | null;
  };
  canReplaceWith(from: number, to: number, nodeType: unknown): boolean;
};
type ReplaceSliceFragment = {
  size: number;
  firstChild: {
    content: ReplaceSliceFragment;
    type: unknown;
  };
};
type ReplacePlacementSlice = {
  content: ReplaceSliceFragment;
  openStart: number;
  size: number;
};
export function useComposerControllerH(
  targetDoc: ReplacePlacementDocument,
  position: number,
  slice: ReplacePlacementSlice,
) {
  let resolvedPosition = targetDoc.resolve(position);
  if (!slice.content.size) return position;
  let replacementContent = slice.content;
  for (let openDepth = 0; openDepth < slice.openStart; openDepth++)
    replacementContent = replacementContent.firstChild.content;
  for (
    let searchPass = 1;
    searchPass <= (slice.openStart == 0 && slice.size ? 2 : 1);
    searchPass++
  )
    for (let scanDepth = resolvedPosition.depth; scanDepth >= 0; scanDepth--) {
      let insertionSide =
          scanDepth == resolvedPosition.depth
            ? 0
            : resolvedPosition.pos <=
                (resolvedPosition.start(scanDepth + 1) +
                  resolvedPosition.end(scanDepth + 1)) /
                  2
              ? -1
              : 1,
        insertionIndex =
          resolvedPosition.index(scanDepth) + (insertionSide > 0 ? 1 : 0),
        parentNode = resolvedPosition.node(scanDepth),
        canPlaceReplacement = !1;
      if (searchPass == 1)
        canPlaceReplacement = parentNode.canReplace(
          insertionIndex,
          insertionIndex,
          replacementContent,
        );
      else {
        let wrappingTypes = parentNode
          .contentMatchAt(insertionIndex)
          .findWrapping(replacementContent.firstChild.type);
        canPlaceReplacement =
          !!wrappingTypes &&
          parentNode.canReplaceWith(
            insertionIndex,
            insertionIndex,
            wrappingTypes[0],
          );
      }
      if (canPlaceReplacement)
        return insertionSide == 0
          ? resolvedPosition.pos
          : insertionSide < 0
            ? resolvedPosition.before(scanDepth + 1)
            : resolvedPosition.after(scanDepth + 1);
    }
  return null;
}
function useComposerControllerHelper64(
  useComposerControllerParam421,
  useComposerControllerParam422,
  useComposerControllerParam423 = useComposerControllerParam422,
  useComposerControllerParam424 = useComposerControllerS.empty,
) {
  if (
    useComposerControllerParam422 == useComposerControllerParam423 &&
    !useComposerControllerParam424.size
  )
    return null;
  let useComposerControllerValue515 = useComposerControllerParam421.resolve(
      useComposerControllerParam422,
    ),
    useComposerControllerValue516 = useComposerControllerParam421.resolve(
      useComposerControllerParam423,
    );
  return useComposerControllerHelper65(
    useComposerControllerValue515,
    useComposerControllerValue516,
    useComposerControllerParam424,
  )
    ? new useComposerControllerValue37(
        useComposerControllerParam422,
        useComposerControllerParam423,
        useComposerControllerParam424,
      )
    : new useComposerControllerValue39(
        useComposerControllerValue515,
        useComposerControllerValue516,
        useComposerControllerParam424,
      ).fit();
}
function useComposerControllerHelper65(
  useComposerControllerParam463,
  useComposerControllerParam464,
  useComposerControllerParam465,
) {
  return (
    !useComposerControllerParam465.openStart &&
    !useComposerControllerParam465.openEnd &&
    useComposerControllerParam463.start() ==
      useComposerControllerParam464.start() &&
    useComposerControllerParam463.parent.canReplace(
      useComposerControllerParam463.index(),
      useComposerControllerParam464.index(),
      useComposerControllerParam465.content,
    )
  );
}
var useComposerControllerValue39 = class {
  constructor(
    useComposerControllerParam173,
    useComposerControllerParam174,
    useComposerControllerParam175,
  ) {
    ((this.$from = useComposerControllerParam173),
      (this.$to = useComposerControllerParam174),
      (this.unplaced = useComposerControllerParam175),
      (this.frontier = []),
      (this.placed = useComposerControllerV.empty));
    for (
      let useComposerControllerValue573 = 0;
      useComposerControllerValue573 <= useComposerControllerParam173.depth;
      useComposerControllerValue573++
    ) {
      let useComposerControllerValue668 = useComposerControllerParam173.node(
        useComposerControllerValue573,
      );
      this.frontier.push({
        type: useComposerControllerValue668.type,
        match: useComposerControllerValue668.contentMatchAt(
          useComposerControllerParam173.indexAfter(
            useComposerControllerValue573,
          ),
        ),
      });
    }
    for (
      let useComposerControllerValue727 = useComposerControllerParam173.depth;
      useComposerControllerValue727 > 0;
      useComposerControllerValue727--
    )
      this.placed = useComposerControllerV.from(
        useComposerControllerParam173
          .node(useComposerControllerValue727)
          .copy(this.placed),
      );
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let useComposerControllerValue700 = this.findFittable();
      useComposerControllerValue700
        ? this.placeNodes(useComposerControllerValue700)
        : this.openMore() || this.dropNode();
    }
    let useComposerControllerValue125 = this.mustMoveInline(),
      useComposerControllerValue126 =
        this.placed.size - this.depth - this.$from.depth,
      useComposerControllerValue127 = this.$from,
      useComposerControllerValue128 = this.close(
        useComposerControllerValue125 < 0
          ? this.$to
          : useComposerControllerValue127.doc.resolve(
              useComposerControllerValue125,
            ),
      );
    if (!useComposerControllerValue128) return null;
    let useComposerControllerValue129 = this.placed,
      useComposerControllerValue130 = useComposerControllerValue127.depth,
      _useComposerControllerV = useComposerControllerValue128.depth;
    for (
      ;
      useComposerControllerValue130 &&
      _useComposerControllerV &&
      useComposerControllerValue129.childCount == 1;

    )
      ((useComposerControllerValue129 =
        useComposerControllerValue129.firstChild.content),
        useComposerControllerValue130--,
        _useComposerControllerV--);
    let useComposerControllerValue131 = new useComposerControllerS(
      useComposerControllerValue129,
      useComposerControllerValue130,
      _useComposerControllerV,
    );
    return useComposerControllerValue125 > -1
      ? new useComposerControllerValue38(
          useComposerControllerValue127.pos,
          useComposerControllerValue125,
          this.$to.pos,
          this.$to.end(),
          useComposerControllerValue131,
          useComposerControllerValue126,
        )
      : useComposerControllerValue131.size ||
          useComposerControllerValue127.pos != this.$to.pos
        ? new useComposerControllerValue37(
            useComposerControllerValue127.pos,
            useComposerControllerValue128.pos,
            useComposerControllerValue131,
          )
        : null;
  }
  findFittable() {
    let useComposerControllerValue91 = this.unplaced.openStart;
    for (
      let useComposerControllerValue461 = this.unplaced.content,
        useComposerControllerValue462 = 0,
        useComposerControllerValue463 = this.unplaced.openEnd;
      useComposerControllerValue462 < useComposerControllerValue91;
      useComposerControllerValue462++
    ) {
      let useComposerControllerValue645 =
        useComposerControllerValue461.firstChild;
      if (
        (useComposerControllerValue461.childCount > 1 &&
          (useComposerControllerValue463 = 0),
        useComposerControllerValue645.type.spec.isolating &&
          useComposerControllerValue463 <= useComposerControllerValue462)
      ) {
        useComposerControllerValue91 = useComposerControllerValue462;
        break;
      }
      useComposerControllerValue461 = useComposerControllerValue645.content;
    }
    for (
      let useComposerControllerValue105 = 1;
      useComposerControllerValue105 <= 2;
      useComposerControllerValue105++
    )
      for (
        let useComposerControllerValue113 =
          useComposerControllerValue105 == 1
            ? useComposerControllerValue91
            : this.unplaced.openStart;
        useComposerControllerValue113 >= 0;
        useComposerControllerValue113--
      ) {
        let useComposerControllerValue132,
          useComposerControllerValue133 = null;
        useComposerControllerValue113
          ? ((useComposerControllerValue133 = useComposerControllerHelper68(
              this.unplaced.content,
              useComposerControllerValue113 - 1,
            ).firstChild),
            (useComposerControllerValue132 =
              useComposerControllerValue133.content))
          : (useComposerControllerValue132 = this.unplaced.content);
        let useComposerControllerValue134 =
          useComposerControllerValue132.firstChild;
        for (
          let useComposerControllerValue191 = this.depth;
          useComposerControllerValue191 >= 0;
          useComposerControllerValue191--
        ) {
          let { type: type, match: match } =
              this.frontier[useComposerControllerValue191],
            useComposerControllerValue221,
            useComposerControllerValue222 = null;
          if (
            useComposerControllerValue105 == 1 &&
            (useComposerControllerValue134
              ? match.matchType(useComposerControllerValue134.type) ||
                (useComposerControllerValue222 = match.fillBefore(
                  useComposerControllerV.from(useComposerControllerValue134),
                  !1,
                ))
              : useComposerControllerValue133 &&
                type.compatibleContent(useComposerControllerValue133.type))
          )
            return {
              sliceDepth: useComposerControllerValue113,
              frontierDepth: useComposerControllerValue191,
              parent: useComposerControllerValue133,
              inject: useComposerControllerValue222,
            };
          if (
            useComposerControllerValue105 == 2 &&
            useComposerControllerValue134 &&
            (useComposerControllerValue221 = match.findWrapping(
              useComposerControllerValue134.type,
            ))
          )
            return {
              sliceDepth: useComposerControllerValue113,
              frontierDepth: useComposerControllerValue191,
              parent: useComposerControllerValue133,
              wrap: useComposerControllerValue221,
            };
          if (
            useComposerControllerValue133 &&
            match.matchType(useComposerControllerValue133.type)
          )
            break;
        }
      }
  }
  openMore() {
    let {
        content: content,
        openStart: openStart,
        openEnd: openEnd,
      } = this.unplaced,
      useComposerControllerValue414 = useComposerControllerHelper68(
        content,
        openStart,
      );
    return !useComposerControllerValue414.childCount ||
      useComposerControllerValue414.firstChild.isLeaf
      ? !1
      : ((this.unplaced = new useComposerControllerS(
          content,
          openStart + 1,
          Math.max(
            openEnd,
            useComposerControllerValue414.size + openStart >=
              content.size - openEnd
              ? openStart + 1
              : 0,
          ),
        )),
        !0);
  }
  dropNode() {
    let {
        content: content,
        openStart: openStart,
        openEnd: openEnd,
      } = this.unplaced,
      useComposerControllerValue388 = useComposerControllerHelper68(
        content,
        openStart,
      );
    if (useComposerControllerValue388.childCount <= 1 && openStart > 0) {
      let useComposerControllerValue739 =
        content.size - openStart <=
        openStart + useComposerControllerValue388.size;
      this.unplaced = new useComposerControllerS(
        useComposerControllerHelper66(content, openStart - 1, 1),
        openStart - 1,
        useComposerControllerValue739 ? openStart - 1 : openEnd,
      );
    } else
      this.unplaced = new useComposerControllerS(
        useComposerControllerHelper66(content, openStart, 1),
        openStart,
        openEnd,
      );
  }
  placeNodes({
    sliceDepth: sliceDepth,
    frontierDepth: frontierDepth,
    parent: parent,
    inject: inject,
    wrap: wrap,
  }) {
    for (; this.depth > frontierDepth; ) this.closeFrontierNode();
    if (wrap)
      for (
        let useComposerControllerValue772 = 0;
        useComposerControllerValue772 < wrap.length;
        useComposerControllerValue772++
      )
        this.openFrontierNode(wrap[useComposerControllerValue772]);
    let useComposerControllerValue72 = this.unplaced,
      useComposerControllerValue73 = parent
        ? parent.content
        : useComposerControllerValue72.content,
      useComposerControllerValue74 =
        useComposerControllerValue72.openStart - sliceDepth,
      useComposerControllerValue75 = 0,
      _useComposerControllerY = [],
      { match: _useComposerControllerB, type: type } =
        this.frontier[frontierDepth];
    if (inject) {
      for (
        let useComposerControllerValue793 = 0;
        useComposerControllerValue793 < inject.childCount;
        useComposerControllerValue793++
      )
        _useComposerControllerY.push(
          inject.child(useComposerControllerValue793),
        );
      _useComposerControllerB = _useComposerControllerB.matchFragment(inject);
    }
    let useComposerControllerValue76 =
      useComposerControllerValue73.size +
      sliceDepth -
      (useComposerControllerValue72.content.size -
        useComposerControllerValue72.openEnd);
    for (
      ;
      useComposerControllerValue75 < useComposerControllerValue73.childCount;

    ) {
      let useComposerControllerValue458 = useComposerControllerValue73.child(
          useComposerControllerValue75,
        ),
        useComposerControllerValue459 = _useComposerControllerB.matchType(
          useComposerControllerValue458.type,
        );
      if (!useComposerControllerValue459) break;
      (useComposerControllerValue75++,
        (useComposerControllerValue75 > 1 ||
          useComposerControllerValue74 == 0 ||
          useComposerControllerValue458.content.size) &&
          ((_useComposerControllerB = useComposerControllerValue459),
          _useComposerControllerY.push(
            useComposerControllerHelper69(
              useComposerControllerValue458.mark(
                type.allowedMarks(useComposerControllerValue458.marks),
              ),
              useComposerControllerValue75 == 1
                ? useComposerControllerValue74
                : 0,
              useComposerControllerValue75 ==
                useComposerControllerValue73.childCount
                ? useComposerControllerValue76
                : -1,
            ),
          )));
    }
    let useComposerControllerValue77 =
      useComposerControllerValue75 == useComposerControllerValue73.childCount;
    (useComposerControllerValue77 || (useComposerControllerValue76 = -1),
      (this.placed = useComposerControllerHelper67(
        this.placed,
        frontierDepth,
        useComposerControllerV.from(_useComposerControllerY),
      )),
      (this.frontier[frontierDepth].match = _useComposerControllerB),
      useComposerControllerValue77 &&
        useComposerControllerValue76 < 0 &&
        parent &&
        parent.type == this.frontier[this.depth].type &&
        this.frontier.length > 1 &&
        this.closeFrontierNode());
    for (
      let useComposerControllerValue561 = 0,
        useComposerControllerValue562 = useComposerControllerValue73;
      useComposerControllerValue561 < useComposerControllerValue76;
      useComposerControllerValue561++
    ) {
      let useComposerControllerValue620 =
        useComposerControllerValue562.lastChild;
      (this.frontier.push({
        type: useComposerControllerValue620.type,
        match: useComposerControllerValue620.contentMatchAt(
          useComposerControllerValue620.childCount,
        ),
      }),
        (useComposerControllerValue562 =
          useComposerControllerValue620.content));
    }
    this.unplaced = useComposerControllerValue77
      ? sliceDepth == 0
        ? useComposerControllerS.empty
        : new useComposerControllerS(
            useComposerControllerHelper66(
              useComposerControllerValue72.content,
              sliceDepth - 1,
              1,
            ),
            sliceDepth - 1,
            useComposerControllerValue76 < 0
              ? useComposerControllerValue72.openEnd
              : sliceDepth - 1,
          )
      : new useComposerControllerS(
          useComposerControllerHelper66(
            useComposerControllerValue72.content,
            sliceDepth,
            useComposerControllerValue75,
          ),
          useComposerControllerValue72.openStart,
          useComposerControllerValue72.openEnd,
        );
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let useComposerControllerValue200 = this.frontier[this.depth],
      useComposerControllerValue201;
    if (
      !useComposerControllerValue200.type.isTextblock ||
      !useComposerControllerHelper70(
        this.$to,
        this.$to.depth,
        useComposerControllerValue200.type,
        useComposerControllerValue200.match,
        !1,
      ) ||
      (this.$to.depth == this.depth &&
        (useComposerControllerValue201 = this.findCloseLevel(this.$to)) &&
        useComposerControllerValue201.depth == this.depth)
    )
      return -1;
    let { depth: depth } = this.$to,
      useComposerControllerValue202 = this.$to.after(depth);
    for (
      ;
      depth > 1 && useComposerControllerValue202 == this.$to.end(--depth);

    )
      ++useComposerControllerValue202;
    return useComposerControllerValue202;
  }
  findCloseLevel(useComposerControllerParam114) {
    scan: for (
      let useComposerControllerValue212 = Math.min(
        this.depth,
        useComposerControllerParam114.depth,
      );
      useComposerControllerValue212 >= 0;
      useComposerControllerValue212--
    ) {
      let { match: match, type: type } =
          this.frontier[useComposerControllerValue212],
        useComposerControllerValue270 =
          useComposerControllerValue212 < useComposerControllerParam114.depth &&
          useComposerControllerParam114.end(
            useComposerControllerValue212 + 1,
          ) ==
            useComposerControllerParam114.pos +
              (useComposerControllerParam114.depth -
                (useComposerControllerValue212 + 1)),
        useComposerControllerValue271 = useComposerControllerHelper70(
          useComposerControllerParam114,
          useComposerControllerValue212,
          type,
          match,
          useComposerControllerValue270,
        );
      if (useComposerControllerValue271) {
        for (
          let useComposerControllerValue594 = useComposerControllerValue212 - 1;
          useComposerControllerValue594 >= 0;
          useComposerControllerValue594--
        ) {
          let { match: _match, type: _type } =
              this.frontier[useComposerControllerValue594],
            useComposerControllerValue674 = useComposerControllerHelper70(
              useComposerControllerParam114,
              useComposerControllerValue594,
              _type,
              _match,
              !0,
            );
          if (
            !useComposerControllerValue674 ||
            useComposerControllerValue674.childCount
          )
            continue scan;
        }
        return {
          depth: useComposerControllerValue212,
          fit: useComposerControllerValue271,
          move: useComposerControllerValue270
            ? useComposerControllerParam114.doc.resolve(
                useComposerControllerParam114.after(
                  useComposerControllerValue212 + 1,
                ),
              )
            : useComposerControllerParam114,
        };
      }
    }
  }
  close(useComposerControllerParam133) {
    let useComposerControllerValue211 = this.findCloseLevel(
      useComposerControllerParam133,
    );
    if (!useComposerControllerValue211) return null;
    for (; this.depth > useComposerControllerValue211.depth; )
      this.closeFrontierNode();
    (useComposerControllerValue211.fit.childCount &&
      (this.placed = useComposerControllerHelper67(
        this.placed,
        useComposerControllerValue211.depth,
        useComposerControllerValue211.fit,
      )),
      (useComposerControllerParam133 = useComposerControllerValue211.move));
    for (
      let useComposerControllerValue497 =
        useComposerControllerValue211.depth + 1;
      useComposerControllerValue497 <= useComposerControllerParam133.depth;
      useComposerControllerValue497++
    ) {
      let useComposerControllerValue582 = useComposerControllerParam133.node(
          useComposerControllerValue497,
        ),
        useComposerControllerValue583 =
          useComposerControllerValue582.type.contentMatch.fillBefore(
            useComposerControllerValue582.content,
            !0,
            useComposerControllerParam133.index(useComposerControllerValue497),
          );
      this.openFrontierNode(
        useComposerControllerValue582.type,
        useComposerControllerValue582.attrs,
        useComposerControllerValue583,
      );
    }
    return useComposerControllerParam133;
  }
  openFrontierNode(
    useComposerControllerParam304,
    useComposerControllerParam305 = null,
    useComposerControllerParam306,
  ) {
    let useComposerControllerValue396 = this.frontier[this.depth];
    ((useComposerControllerValue396.match =
      useComposerControllerValue396.match.matchType(
        useComposerControllerParam304,
      )),
      (this.placed = useComposerControllerHelper67(
        this.placed,
        this.depth,
        useComposerControllerV.from(
          useComposerControllerParam304.create(
            useComposerControllerParam305,
            useComposerControllerParam306,
          ),
        ),
      )),
      this.frontier.push({
        type: useComposerControllerParam304,
        match: useComposerControllerParam304.contentMatch,
      }));
  }
  closeFrontierNode() {
    let useComposerControllerValue524 = this.frontier
      .pop()
      .match.fillBefore(useComposerControllerV.empty, !0);
    useComposerControllerValue524.childCount &&
      (this.placed = useComposerControllerHelper67(
        this.placed,
        this.frontier.length,
        useComposerControllerValue524,
      ));
  }
};
function useComposerControllerHelper66(
  useComposerControllerParam458,
  useComposerControllerParam459,
  useComposerControllerParam460,
) {
  return useComposerControllerParam459 == 0
    ? useComposerControllerParam458.cutByIndex(
        useComposerControllerParam460,
        useComposerControllerParam458.childCount,
      )
    : useComposerControllerParam458.replaceChild(
        0,
        useComposerControllerParam458.firstChild.copy(
          useComposerControllerHelper66(
            useComposerControllerParam458.firstChild.content,
            useComposerControllerParam459 - 1,
            useComposerControllerParam460,
          ),
        ),
      );
}
function useComposerControllerHelper67(
  useComposerControllerParam474,
  useComposerControllerParam475,
  useComposerControllerParam476,
) {
  return useComposerControllerParam475 == 0
    ? useComposerControllerParam474.append(useComposerControllerParam476)
    : useComposerControllerParam474.replaceChild(
        useComposerControllerParam474.childCount - 1,
        useComposerControllerParam474.lastChild.copy(
          useComposerControllerHelper67(
            useComposerControllerParam474.lastChild.content,
            useComposerControllerParam475 - 1,
            useComposerControllerParam476,
          ),
        ),
      );
}
function useComposerControllerHelper68(
  useComposerControllerParam659,
  useComposerControllerParam660,
) {
  for (
    let useComposerControllerValue802 = 0;
    useComposerControllerValue802 < useComposerControllerParam660;
    useComposerControllerValue802++
  )
    useComposerControllerParam659 =
      useComposerControllerParam659.firstChild.content;
  return useComposerControllerParam659;
}
function useComposerControllerHelper69(
  useComposerControllerParam189,
  useComposerControllerParam190,
  useComposerControllerParam191,
) {
  if (useComposerControllerParam190 <= 0) return useComposerControllerParam189;
  let useComposerControllerValue281 = useComposerControllerParam189.content;
  return (
    useComposerControllerParam190 > 1 &&
      (useComposerControllerValue281 =
        useComposerControllerValue281.replaceChild(
          0,
          useComposerControllerHelper69(
            useComposerControllerValue281.firstChild,
            useComposerControllerParam190 - 1,
            useComposerControllerValue281.childCount == 1
              ? useComposerControllerParam191 - 1
              : 0,
          ),
        )),
    useComposerControllerParam190 > 0 &&
      ((useComposerControllerValue281 =
        useComposerControllerParam189.type.contentMatch
          .fillBefore(useComposerControllerValue281)
          .append(useComposerControllerValue281)),
      useComposerControllerParam191 <= 0 &&
        (useComposerControllerValue281 = useComposerControllerValue281.append(
          useComposerControllerParam189.type.contentMatch
            .matchFragment(useComposerControllerValue281)
            .fillBefore(useComposerControllerV.empty, !0),
        ))),
    useComposerControllerParam189.copy(useComposerControllerValue281)
  );
}
function useComposerControllerHelper70(
  useComposerControllerParam299,
  useComposerControllerParam300,
  useComposerControllerParam301,
  useComposerControllerParam302,
  useComposerControllerParam303,
) {
  let useComposerControllerValue392 = useComposerControllerParam299.node(
      useComposerControllerParam300,
    ),
    _useComposerControllerV = useComposerControllerParam303
      ? useComposerControllerParam299.indexAfter(useComposerControllerParam300)
      : useComposerControllerParam299.index(useComposerControllerParam300);
  if (
    _useComposerControllerV == useComposerControllerValue392.childCount &&
    !useComposerControllerParam301.compatibleContent(
      useComposerControllerValue392.type,
    )
  )
    return null;
  let useComposerControllerValue393 = useComposerControllerParam302.fillBefore(
    useComposerControllerValue392.content,
    !0,
    _useComposerControllerV,
  );
  return useComposerControllerValue393 &&
    !useComposerControllerHelper71(
      useComposerControllerParam301,
      useComposerControllerValue392.content,
      _useComposerControllerV,
    )
    ? useComposerControllerValue393
    : null;
}
function useComposerControllerHelper71(
  useComposerControllerParam530,
  useComposerControllerParam531,
  useComposerControllerParam532,
) {
  for (
    let useComposerControllerValue722 = useComposerControllerParam532;
    useComposerControllerValue722 < useComposerControllerParam531.childCount;
    useComposerControllerValue722++
  )
    if (
      !useComposerControllerParam530.allowsMarks(
        useComposerControllerParam531.child(useComposerControllerValue722)
          .marks,
      )
    )
      return !0;
  return !1;
}
function useComposerControllerHelper72(useComposerControllerParam671) {
  return (
    useComposerControllerParam671.spec.defining ||
    useComposerControllerParam671.spec.definingForContent
  );
}
function useComposerControllerHelper73(
  useComposerControllerParam2,
  useComposerControllerParam3,
  useComposerControllerParam4,
  useComposerControllerParam5,
) {
  if (!useComposerControllerParam5.size)
    return useComposerControllerParam2.deleteRange(
      useComposerControllerParam3,
      useComposerControllerParam4,
    );
  let useComposerControllerValue62 = useComposerControllerParam2.doc.resolve(
      useComposerControllerParam3,
    ),
    useComposerControllerValue63 = useComposerControllerParam2.doc.resolve(
      useComposerControllerParam4,
    );
  if (
    useComposerControllerHelper65(
      useComposerControllerValue62,
      useComposerControllerValue63,
      useComposerControllerParam5,
    )
  )
    return useComposerControllerParam2.step(
      new useComposerControllerValue37(
        useComposerControllerParam3,
        useComposerControllerParam4,
        useComposerControllerParam5,
      ),
    );
  let _useComposerControllerV = useComposerControllerHelper77(
    useComposerControllerValue62,
    useComposerControllerValue63,
  );
  _useComposerControllerV[_useComposerControllerV.length - 1] == 0 &&
    _useComposerControllerV.pop();
  let useComposerControllerValue64 = -(useComposerControllerValue62.depth + 1);
  _useComposerControllerV.unshift(useComposerControllerValue64);
  for (
    let useComposerControllerValue432 = useComposerControllerValue62.depth,
      useComposerControllerValue433 = useComposerControllerValue62.pos - 1;
    useComposerControllerValue432 > 0;
    useComposerControllerValue432--, useComposerControllerValue433--
  ) {
    let useComposerControllerValue540 = useComposerControllerValue62.node(
      useComposerControllerValue432,
    ).type.spec;
    if (
      useComposerControllerValue540.defining ||
      useComposerControllerValue540.definingAsContext ||
      useComposerControllerValue540.isolating
    )
      break;
    _useComposerControllerV.indexOf(useComposerControllerValue432) > -1
      ? (useComposerControllerValue64 = useComposerControllerValue432)
      : useComposerControllerValue62.before(useComposerControllerValue432) ==
          useComposerControllerValue433 &&
        _useComposerControllerV.splice(1, 0, -useComposerControllerValue432);
  }
  let useComposerControllerValue65 = _useComposerControllerV.indexOf(
      useComposerControllerValue64,
    ),
    useComposerControllerValue66 = [],
    _useComposerControllerY = useComposerControllerParam5.openStart;
  for (
    let useComposerControllerValue647 = useComposerControllerParam5.content,
      useComposerControllerValue648 = 0;
    ;
    useComposerControllerValue648++
  ) {
    let useComposerControllerValue745 =
      useComposerControllerValue647.firstChild;
    if (
      (useComposerControllerValue66.push(useComposerControllerValue745),
      useComposerControllerValue648 == useComposerControllerParam5.openStart)
    )
      break;
    useComposerControllerValue647 = useComposerControllerValue745.content;
  }
  for (
    let useComposerControllerValue545 = _useComposerControllerY - 1;
    useComposerControllerValue545 >= 0;
    useComposerControllerValue545--
  ) {
    let useComposerControllerValue599 =
        useComposerControllerValue66[useComposerControllerValue545],
      useComposerControllerValue600 = useComposerControllerHelper72(
        useComposerControllerValue599.type,
      );
    if (
      useComposerControllerValue600 &&
      !useComposerControllerValue599.sameMarkup(
        useComposerControllerValue62.node(
          Math.abs(useComposerControllerValue64) - 1,
        ),
      )
    )
      _useComposerControllerY = useComposerControllerValue545;
    else if (
      useComposerControllerValue600 ||
      !useComposerControllerValue599.type.isTextblock
    )
      break;
  }
  for (
    let useComposerControllerValue228 = useComposerControllerParam5.openStart;
    useComposerControllerValue228 >= 0;
    useComposerControllerValue228--
  ) {
    let useComposerControllerValue259 =
        (useComposerControllerValue228 + _useComposerControllerY + 1) %
        (useComposerControllerParam5.openStart + 1),
      __useComposerControllerB =
        useComposerControllerValue66[useComposerControllerValue259];
    if (__useComposerControllerB)
      for (
        let useComposerControllerValue319 = 0;
        useComposerControllerValue319 < _useComposerControllerV.length;
        useComposerControllerValue319++
      ) {
        let useComposerControllerValue370 =
            _useComposerControllerV[
              (useComposerControllerValue319 + useComposerControllerValue65) %
                _useComposerControllerV.length
            ],
          __useComposerControllerY = !0;
        useComposerControllerValue370 < 0 &&
          ((__useComposerControllerY = !1),
          (useComposerControllerValue370 = -useComposerControllerValue370));
        let useComposerControllerValue371 = useComposerControllerValue62.node(
            useComposerControllerValue370 - 1,
          ),
          useComposerControllerValue372 = useComposerControllerValue62.index(
            useComposerControllerValue370 - 1,
          );
        if (
          useComposerControllerValue371.canReplaceWith(
            useComposerControllerValue372,
            useComposerControllerValue372,
            __useComposerControllerB.type,
            __useComposerControllerB.marks,
          )
        )
          return useComposerControllerParam2.replace(
            useComposerControllerValue62.before(useComposerControllerValue370),
            __useComposerControllerY
              ? useComposerControllerValue63.after(
                  useComposerControllerValue370,
                )
              : useComposerControllerParam4,
            new useComposerControllerS(
              useComposerControllerHelper74(
                useComposerControllerParam5.content,
                0,
                useComposerControllerParam5.openStart,
                useComposerControllerValue259,
              ),
              useComposerControllerValue259,
              useComposerControllerParam5.openEnd,
            ),
          );
      }
  }
  let _useComposerControllerB = useComposerControllerParam2.steps.length;
  for (
    let useComposerControllerValue577 = _useComposerControllerV.length - 1;
    useComposerControllerValue577 >= 0 &&
    (useComposerControllerParam2.replace(
      useComposerControllerParam3,
      useComposerControllerParam4,
      useComposerControllerParam5,
    ),
    !(useComposerControllerParam2.steps.length > _useComposerControllerB));
    useComposerControllerValue577--
  ) {
    let useComposerControllerValue798 =
      _useComposerControllerV[useComposerControllerValue577];
    useComposerControllerValue798 < 0 ||
      ((useComposerControllerParam3 = useComposerControllerValue62.before(
        useComposerControllerValue798,
      )),
      (useComposerControllerParam4 = useComposerControllerValue63.after(
        useComposerControllerValue798,
      )));
  }
}
function useComposerControllerHelper74(
  useComposerControllerParam248,
  useComposerControllerParam249,
  useComposerControllerParam250,
  useComposerControllerParam251,
  useComposerControllerParam252,
) {
  if (useComposerControllerParam249 < useComposerControllerParam250) {
    let useComposerControllerValue730 =
      useComposerControllerParam248.firstChild;
    useComposerControllerParam248 = useComposerControllerParam248.replaceChild(
      0,
      useComposerControllerValue730.copy(
        useComposerControllerHelper74(
          useComposerControllerValue730.content,
          useComposerControllerParam249 + 1,
          useComposerControllerParam250,
          useComposerControllerParam251,
          useComposerControllerValue730,
        ),
      ),
    );
  }
  if (useComposerControllerParam249 > useComposerControllerParam251) {
    let useComposerControllerValue601 =
        useComposerControllerParam252.contentMatchAt(0),
      useComposerControllerValue602 = useComposerControllerValue601
        .fillBefore(useComposerControllerParam248)
        .append(useComposerControllerParam248);
    useComposerControllerParam248 = useComposerControllerValue602.append(
      useComposerControllerValue601
        .matchFragment(useComposerControllerValue602)
        .fillBefore(useComposerControllerV.empty, !0),
    );
  }
  return useComposerControllerParam248;
}
function useComposerControllerHelper75(
  useComposerControllerParam380,
  useComposerControllerParam381,
  useComposerControllerParam382,
  useComposerControllerParam383,
) {
  if (
    !useComposerControllerParam383.isInline &&
    useComposerControllerParam381 == useComposerControllerParam382 &&
    useComposerControllerParam380.doc.resolve(useComposerControllerParam381)
      .parent.content.size
  ) {
    let useComposerControllerValue803 = useComposerControllerHelper63(
      useComposerControllerParam380.doc,
      useComposerControllerParam381,
      useComposerControllerParam383.type,
    );
    useComposerControllerValue803 != null &&
      (useComposerControllerParam381 = useComposerControllerParam382 =
        useComposerControllerValue803);
  }
  useComposerControllerParam380.replaceRange(
    useComposerControllerParam381,
    useComposerControllerParam382,
    new useComposerControllerS(
      useComposerControllerV.from(useComposerControllerParam383),
      0,
      0,
    ),
  );
}
function useComposerControllerHelper76(
  useComposerControllerParam10,
  useComposerControllerParam11,
  useComposerControllerParam12,
) {
  let useComposerControllerValue78 = useComposerControllerParam10.doc.resolve(
      useComposerControllerParam11,
    ),
    useComposerControllerValue79 = useComposerControllerParam10.doc.resolve(
      useComposerControllerParam12,
    );
  if (
    useComposerControllerValue78.parent.isTextblock &&
    useComposerControllerValue79.parent.isTextblock &&
    useComposerControllerValue78.start() !=
      useComposerControllerValue79.start() &&
    useComposerControllerValue78.parentOffset == 0 &&
    useComposerControllerValue79.parentOffset == 0
  ) {
    let useComposerControllerValue234 =
        useComposerControllerValue78.sharedDepth(useComposerControllerParam12),
      _useComposerControllerV = !1;
    for (
      let useComposerControllerValue750 = useComposerControllerValue78.depth;
      useComposerControllerValue750 > useComposerControllerValue234;
      useComposerControllerValue750--
    )
      useComposerControllerValue78.node(useComposerControllerValue750).type.spec
        .isolating && (_useComposerControllerV = !0);
    for (
      let useComposerControllerValue751 = useComposerControllerValue79.depth;
      useComposerControllerValue751 > useComposerControllerValue234;
      useComposerControllerValue751--
    )
      useComposerControllerValue79.node(useComposerControllerValue751).type.spec
        .isolating && (_useComposerControllerV = !0);
    if (!_useComposerControllerV) {
      for (
        let useComposerControllerValue773 = useComposerControllerValue78.depth;
        useComposerControllerValue773 > 0 &&
        useComposerControllerParam11 ==
          useComposerControllerValue78.start(useComposerControllerValue773);
        useComposerControllerValue773--
      )
        useComposerControllerParam11 = useComposerControllerValue78.before(
          useComposerControllerValue773,
        );
      for (
        let useComposerControllerValue774 = useComposerControllerValue79.depth;
        useComposerControllerValue774 > 0 &&
        useComposerControllerParam12 ==
          useComposerControllerValue79.start(useComposerControllerValue774);
        useComposerControllerValue774--
      )
        useComposerControllerParam12 = useComposerControllerValue79.before(
          useComposerControllerValue774,
        );
      ((useComposerControllerValue78 = useComposerControllerParam10.doc.resolve(
        useComposerControllerParam11,
      )),
        (useComposerControllerValue79 =
          useComposerControllerParam10.doc.resolve(
            useComposerControllerParam12,
          )));
    }
  }
  let useComposerControllerValue80 = useComposerControllerHelper77(
    useComposerControllerValue78,
    useComposerControllerValue79,
  );
  for (
    let useComposerControllerValue308 = 0;
    useComposerControllerValue308 < useComposerControllerValue80.length;
    useComposerControllerValue308++
  ) {
    let useComposerControllerValue352 =
        useComposerControllerValue80[useComposerControllerValue308],
      _useComposerControllerV =
        useComposerControllerValue308 ==
        useComposerControllerValue80.length - 1;
    if (
      (_useComposerControllerV && useComposerControllerValue352 == 0) ||
      useComposerControllerValue78.node(useComposerControllerValue352).type
        .contentMatch.validEnd
    )
      return useComposerControllerParam10.delete(
        useComposerControllerValue78.start(useComposerControllerValue352),
        useComposerControllerValue79.end(useComposerControllerValue352),
      );
    if (
      useComposerControllerValue352 > 0 &&
      (_useComposerControllerV ||
        useComposerControllerValue78
          .node(useComposerControllerValue352 - 1)
          .canReplace(
            useComposerControllerValue78.index(
              useComposerControllerValue352 - 1,
            ),
            useComposerControllerValue79.indexAfter(
              useComposerControllerValue352 - 1,
            ),
          ))
    )
      return useComposerControllerParam10.delete(
        useComposerControllerValue78.before(useComposerControllerValue352),
        useComposerControllerValue79.after(useComposerControllerValue352),
      );
  }
  for (
    let useComposerControllerValue376 = 1;
    useComposerControllerValue376 <= useComposerControllerValue78.depth &&
    useComposerControllerValue376 <= useComposerControllerValue79.depth;
    useComposerControllerValue376++
  )
    if (
      useComposerControllerParam11 -
        useComposerControllerValue78.start(useComposerControllerValue376) ==
        useComposerControllerValue78.depth - useComposerControllerValue376 &&
      useComposerControllerParam12 >
        useComposerControllerValue78.end(useComposerControllerValue376) &&
      useComposerControllerValue79.end(useComposerControllerValue376) -
        useComposerControllerParam12 !=
        useComposerControllerValue79.depth - useComposerControllerValue376 &&
      useComposerControllerValue78.start(useComposerControllerValue376 - 1) ==
        useComposerControllerValue79.start(useComposerControllerValue376 - 1) &&
      useComposerControllerValue78
        .node(useComposerControllerValue376 - 1)
        .canReplace(
          useComposerControllerValue78.index(useComposerControllerValue376 - 1),
          useComposerControllerValue79.index(useComposerControllerValue376 - 1),
        )
    )
      return useComposerControllerParam10.delete(
        useComposerControllerValue78.before(useComposerControllerValue376),
        useComposerControllerParam12,
      );
  useComposerControllerParam10.delete(
    useComposerControllerParam11,
    useComposerControllerParam12,
  );
}
function useComposerControllerHelper77(
  useComposerControllerParam122,
  useComposerControllerParam123,
) {
  let useComposerControllerValue203 = [],
    useComposerControllerValue204 = Math.min(
      useComposerControllerParam122.depth,
      useComposerControllerParam123.depth,
    );
  for (
    let useComposerControllerValue272 = useComposerControllerValue204;
    useComposerControllerValue272 >= 0;
    useComposerControllerValue272--
  ) {
    let useComposerControllerValue295 = useComposerControllerParam122.start(
      useComposerControllerValue272,
    );
    if (
      useComposerControllerValue295 <
        useComposerControllerParam122.pos -
          (useComposerControllerParam122.depth -
            useComposerControllerValue272) ||
      useComposerControllerParam123.end(useComposerControllerValue272) >
        useComposerControllerParam123.pos +
          (useComposerControllerParam123.depth -
            useComposerControllerValue272) ||
      useComposerControllerParam122.node(useComposerControllerValue272).type
        .spec.isolating ||
      useComposerControllerParam123.node(useComposerControllerValue272).type
        .spec.isolating
    )
      break;
    (useComposerControllerValue295 ==
      useComposerControllerParam123.start(useComposerControllerValue272) ||
      (useComposerControllerValue272 == useComposerControllerParam122.depth &&
        useComposerControllerValue272 == useComposerControllerParam123.depth &&
        useComposerControllerParam122.parent.inlineContent &&
        useComposerControllerParam123.parent.inlineContent &&
        useComposerControllerValue272 &&
        useComposerControllerParam123.start(
          useComposerControllerValue272 - 1,
        ) ==
          useComposerControllerValue295 - 1)) &&
      useComposerControllerValue203.push(useComposerControllerValue272);
  }
  return useComposerControllerValue203;
}
var useComposerControllerValue40 = class UseComposerControllerClass19 extends useComposerControllerValue31 {
  constructor(
    useComposerControllerParam682,
    useComposerControllerParam683,
    useComposerControllerParam684,
  ) {
    (super(),
      (this.pos = useComposerControllerParam682),
      (this.attr = useComposerControllerParam683),
      (this.value = useComposerControllerParam684));
  }
  apply(useComposerControllerParam161) {
    let useComposerControllerValue247 = useComposerControllerParam161.nodeAt(
      this.pos,
    );
    if (!useComposerControllerValue247)
      return useComposerControllerValue32.fail(
        `No node at attribute step's position`,
      );
    let useComposerControllerValue248 = Object.create(null);
    for (let useComposerControllerValue812 in useComposerControllerValue247.attrs)
      useComposerControllerValue248[useComposerControllerValue812] =
        useComposerControllerValue247.attrs[useComposerControllerValue812];
    useComposerControllerValue248[this.attr] = this.value;
    let useComposerControllerValue249 =
      useComposerControllerValue247.type.create(
        useComposerControllerValue248,
        null,
        useComposerControllerValue247.marks,
      );
    return useComposerControllerValue32.fromReplace(
      useComposerControllerParam161,
      this.pos,
      this.pos + 1,
      new useComposerControllerS(
        useComposerControllerV.from(useComposerControllerValue249),
        0,
        useComposerControllerValue247.isLeaf ? 0 : 1,
      ),
    );
  }
  getMap() {
    return useComposerControllerValue29.empty;
  }
  invert(useComposerControllerParam626) {
    return new UseComposerControllerClass19(
      this.pos,
      this.attr,
      useComposerControllerParam626.nodeAt(this.pos).attrs[this.attr],
    );
  }
  map(useComposerControllerParam556) {
    let useComposerControllerValue639 = useComposerControllerParam556.mapResult(
      this.pos,
      1,
    );
    return useComposerControllerValue639.deletedAfter
      ? null
      : new UseComposerControllerClass19(
          useComposerControllerValue639.pos,
          this.attr,
          this.value,
        );
  }
  toJSON() {
    return {
      stepType: `attr`,
      pos: this.pos,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(
    useComposerControllerParam384,
    useComposerControllerParam385,
  ) {
    if (
      typeof useComposerControllerParam385.pos != `number` ||
      typeof useComposerControllerParam385.attr != `string`
    )
      throw RangeError(`Invalid input for AttrStep.fromJSON`);
    return new UseComposerControllerClass19(
      useComposerControllerParam385.pos,
      useComposerControllerParam385.attr,
      useComposerControllerParam385.value,
    );
  }
};
useComposerControllerValue31.jsonID(`attr`, useComposerControllerValue40);
var useComposerControllerValue41 = class UseComposerControllerClass24 extends useComposerControllerValue31 {
  constructor(useComposerControllerParam760, useComposerControllerParam761) {
    (super(),
      (this.attr = useComposerControllerParam760),
      (this.value = useComposerControllerParam761));
  }
  apply(useComposerControllerParam408) {
    let useComposerControllerValue491 = Object.create(null);
    for (let useComposerControllerValue813 in useComposerControllerParam408.attrs)
      useComposerControllerValue491[useComposerControllerValue813] =
        useComposerControllerParam408.attrs[useComposerControllerValue813];
    useComposerControllerValue491[this.attr] = this.value;
    let useComposerControllerValue492 =
      useComposerControllerParam408.type.create(
        useComposerControllerValue491,
        useComposerControllerParam408.content,
        useComposerControllerParam408.marks,
      );
    return useComposerControllerValue32.ok(useComposerControllerValue492);
  }
  getMap() {
    return useComposerControllerValue29.empty;
  }
  invert(useComposerControllerParam744) {
    return new UseComposerControllerClass24(
      this.attr,
      useComposerControllerParam744.attrs[this.attr],
    );
  }
  map(useComposerControllerParam878) {
    return this;
  }
  toJSON() {
    return {
      stepType: `docAttr`,
      attr: this.attr,
      value: this.value,
    };
  }
  static fromJSON(
    useComposerControllerParam440,
    useComposerControllerParam441,
  ) {
    if (typeof useComposerControllerParam441.attr != `string`)
      throw RangeError(`Invalid input for DocAttrStep.fromJSON`);
    return new UseComposerControllerClass24(
      useComposerControllerParam441.attr,
      useComposerControllerParam441.value,
    );
  }
};
useComposerControllerValue31.jsonID(`docAttr`, useComposerControllerValue41);
var useComposerControllerValue42 = class extends Error {};
((useComposerControllerValue42 = function useComposerControllerHelper93(
  useComposerControllerParam646,
) {
  let useComposerControllerValue731 = Error.call(
    this,
    useComposerControllerParam646,
  );
  return (
    (useComposerControllerValue731.__proto__ =
      useComposerControllerHelper93.prototype),
    useComposerControllerValue731
  );
}),
  (useComposerControllerValue42.prototype = Object.create(Error.prototype)),
  (useComposerControllerValue42.prototype.constructor =
    useComposerControllerValue42),
  (useComposerControllerValue42.prototype.name = `TransformError`));
var useComposerControllerValue43 = class {
    constructor(useComposerControllerParam642) {
      ((this.doc = useComposerControllerParam642),
        (this.steps = []),
        (this.docs = []),
        (this.mapping = new useComposerControllerM()));
    }
    get before() {
      return this.docs.length ? this.docs[0] : this.doc;
    }
    step(useComposerControllerParam631) {
      let useComposerControllerValue712 = this.maybeStep(
        useComposerControllerParam631,
      );
      if (useComposerControllerValue712.failed)
        throw new useComposerControllerValue42(
          useComposerControllerValue712.failed,
        );
      return this;
    }
    maybeStep(useComposerControllerParam632) {
      let useComposerControllerValue713 = useComposerControllerParam632.apply(
        this.doc,
      );
      return (
        useComposerControllerValue713.failed ||
          this.addStep(
            useComposerControllerParam632,
            useComposerControllerValue713.doc,
          ),
        useComposerControllerValue713
      );
    }
    get docChanged() {
      return this.steps.length > 0;
    }
    changedRange() {
      let useComposerControllerValue345 = 1e9,
        useComposerControllerValue346 = -1e9;
      for (
        let useComposerControllerValue477 = 0;
        useComposerControllerValue477 < this.mapping.maps.length;
        useComposerControllerValue477++
      ) {
        let useComposerControllerValue578 =
          this.mapping.maps[useComposerControllerValue477];
        (useComposerControllerValue477 &&
          ((useComposerControllerValue345 = useComposerControllerValue578.map(
            useComposerControllerValue345,
            1,
          )),
          (useComposerControllerValue346 = useComposerControllerValue578.map(
            useComposerControllerValue346,
            -1,
          ))),
          useComposerControllerValue578.forEach(
            (item, index, array, useComposerControllerParam796) => {
              ((useComposerControllerValue345 = Math.min(
                useComposerControllerValue345,
                array,
              )),
                (useComposerControllerValue346 = Math.max(
                  useComposerControllerValue346,
                  useComposerControllerParam796,
                )));
            },
          ));
      }
      return useComposerControllerValue345 == 1e9
        ? null
        : {
            from: useComposerControllerValue345,
            to: useComposerControllerValue346,
          };
    }
    addStep(useComposerControllerParam535, useComposerControllerParam536) {
      (this.docs.push(this.doc),
        this.steps.push(useComposerControllerParam535),
        this.mapping.appendMap(useComposerControllerParam535.getMap()),
        (this.doc = useComposerControllerParam536));
    }
    replace(
      useComposerControllerParam633,
      useComposerControllerParam634 = useComposerControllerParam633,
      useComposerControllerParam635 = useComposerControllerS.empty,
    ) {
      let useComposerControllerValue714 = useComposerControllerHelper64(
        this.doc,
        useComposerControllerParam633,
        useComposerControllerParam634,
        useComposerControllerParam635,
      );
      return (
        useComposerControllerValue714 &&
          this.step(useComposerControllerValue714),
        this
      );
    }
    replaceWith(
      useComposerControllerParam672,
      useComposerControllerParam673,
      useComposerControllerParam674,
    ) {
      return this.replace(
        useComposerControllerParam672,
        useComposerControllerParam673,
        new useComposerControllerS(
          useComposerControllerV.from(useComposerControllerParam674),
          0,
          0,
        ),
      );
    }
    delete(useComposerControllerParam790, useComposerControllerParam791) {
      return this.replace(
        useComposerControllerParam790,
        useComposerControllerParam791,
        useComposerControllerS.empty,
      );
    }
    insert(useComposerControllerParam802, useComposerControllerParam803) {
      return this.replaceWith(
        useComposerControllerParam802,
        useComposerControllerParam802,
        useComposerControllerParam803,
      );
    }
    replaceRange(
      useComposerControllerParam774,
      useComposerControllerParam775,
      useComposerControllerParam776,
    ) {
      return (
        useComposerControllerHelper73(
          this,
          useComposerControllerParam774,
          useComposerControllerParam775,
          useComposerControllerParam776,
        ),
        this
      );
    }
    replaceRangeWith(
      useComposerControllerParam750,
      useComposerControllerParam751,
      useComposerControllerParam752,
    ) {
      return (
        useComposerControllerHelper75(
          this,
          useComposerControllerParam750,
          useComposerControllerParam751,
          useComposerControllerParam752,
        ),
        this
      );
    }
    deleteRange(useComposerControllerParam816, useComposerControllerParam817) {
      return (
        useComposerControllerHelper76(
          this,
          useComposerControllerParam816,
          useComposerControllerParam817,
        ),
        this
      );
    }
    lift(useComposerControllerParam846, useComposerControllerParam847) {
      return (
        useComposerControllerHelper55(
          this,
          useComposerControllerParam846,
          useComposerControllerParam847,
        ),
        this
      );
    }
    join(useComposerControllerParam835, useComposerControllerParam836 = 1) {
      return (
        useComposerControllerHelper62(
          this,
          useComposerControllerParam835,
          useComposerControllerParam836,
        ),
        this
      );
    }
    wrap(useComposerControllerParam848, useComposerControllerParam849) {
      return (
        useComposerControllerHelper56(
          this,
          useComposerControllerParam848,
          useComposerControllerParam849,
        ),
        this
      );
    }
    setBlockType(
      useComposerControllerParam721,
      useComposerControllerParam722 = useComposerControllerParam721,
      useComposerControllerParam723,
      useComposerControllerParam724 = null,
    ) {
      return (
        useComposerControllerHelper57(
          this,
          useComposerControllerParam721,
          useComposerControllerParam722,
          useComposerControllerParam723,
          useComposerControllerParam724,
        ),
        this
      );
    }
    setNodeMarkup(
      useComposerControllerParam729,
      useComposerControllerParam730,
      useComposerControllerParam731 = null,
      useComposerControllerParam732,
    ) {
      return (
        _t(
          this,
          useComposerControllerParam729,
          useComposerControllerParam730,
          useComposerControllerParam731,
          useComposerControllerParam732,
        ),
        this
      );
    }
    setNodeAttribute(
      useComposerControllerParam698,
      useComposerControllerParam699,
      useComposerControllerParam700,
    ) {
      return (
        this.step(
          new useComposerControllerValue40(
            useComposerControllerParam698,
            useComposerControllerParam699,
            useComposerControllerParam700,
          ),
        ),
        this
      );
    }
    setDocAttribute(
      useComposerControllerParam740,
      useComposerControllerParam741,
    ) {
      return (
        this.step(
          new useComposerControllerValue41(
            useComposerControllerParam740,
            useComposerControllerParam741,
          ),
        ),
        this
      );
    }
    addNodeMark(useComposerControllerParam753, useComposerControllerParam754) {
      return (
        this.step(
          new useComposerControllerValue35(
            useComposerControllerParam753,
            useComposerControllerParam754,
          ),
        ),
        this
      );
    }
    removeNodeMark(
      useComposerControllerParam158,
      useComposerControllerParam159,
    ) {
      let useComposerControllerValue244 = this.doc.nodeAt(
        useComposerControllerParam158,
      );
      if (!useComposerControllerValue244)
        throw RangeError(
          `No node at position ` + useComposerControllerParam158,
        );
      if (useComposerControllerParam159 instanceof useComposerControllerY)
        useComposerControllerParam159.isInSet(
          useComposerControllerValue244.marks,
        ) &&
          this.step(
            new useComposerControllerValue36(
              useComposerControllerParam158,
              useComposerControllerParam159,
            ),
          );
      else {
        let useComposerControllerValue554 = useComposerControllerValue244.marks,
          useComposerControllerValue555,
          useComposerControllerValue556 = [];
        for (
          ;
          (useComposerControllerValue555 =
            useComposerControllerParam159.isInSet(
              useComposerControllerValue554,
            ));

        )
          (useComposerControllerValue556.push(
            new useComposerControllerValue36(
              useComposerControllerParam158,
              useComposerControllerValue555,
            ),
          ),
            (useComposerControllerValue554 =
              useComposerControllerValue555.removeFromSet(
                useComposerControllerValue554,
              )));
        for (
          let useComposerControllerValue800 =
            useComposerControllerValue556.length - 1;
          useComposerControllerValue800 >= 0;
          useComposerControllerValue800--
        )
          this.step(
            useComposerControllerValue556[useComposerControllerValue800],
          );
      }
      return this;
    }
    split(
      useComposerControllerParam818,
      useComposerControllerParam819 = 1,
      useComposerControllerParam820,
    ) {
      return (
        useComposerControllerHelper61(
          this,
          useComposerControllerParam818,
          useComposerControllerParam819,
          useComposerControllerParam820,
        ),
        this
      );
    }
    addMark(
      useComposerControllerParam821,
      useComposerControllerParam822,
      useComposerControllerParam823,
    ) {
      return (
        useComposerControllerHelper52(
          this,
          useComposerControllerParam821,
          useComposerControllerParam822,
          useComposerControllerParam823,
        ),
        this
      );
    }
    removeMark(
      useComposerControllerParam792,
      useComposerControllerParam793,
      useComposerControllerParam794,
    ) {
      return (
        useComposerControllerHelper53(
          this,
          useComposerControllerParam792,
          useComposerControllerParam793,
          useComposerControllerParam794,
        ),
        this
      );
    }
    clearIncompatible(
      useComposerControllerParam746,
      useComposerControllerParam747,
      useComposerControllerParam748,
    ) {
      return (
        useComposerControllerHelper54(
          this,
          useComposerControllerParam746,
          useComposerControllerParam747,
          useComposerControllerParam748,
        ),
        this
      );
    }
  },
  useComposerControllerValue44 = Object.create(null),
  useComposerControllerF = class {
    constructor(
      useComposerControllerParam588,
      useComposerControllerParam589,
      useComposerControllerParam590,
    ) {
      ((this.$anchor = useComposerControllerParam588),
        (this.$head = useComposerControllerParam589),
        (this.ranges = useComposerControllerParam590 || [
          new useComposerControllerValue45(
            useComposerControllerParam588.min(useComposerControllerParam589),
            useComposerControllerParam588.max(useComposerControllerParam589),
          ),
        ]));
    }
    get anchor() {
      return this.$anchor.pos;
    }
    get head() {
      return this.$head.pos;
    }
    get from() {
      return this.$from.pos;
    }
    get to() {
      return this.$to.pos;
    }
    get $from() {
      return this.ranges[0].$from;
    }
    get $to() {
      return this.ranges[0].$to;
    }
    get empty() {
      let useComposerControllerValue609 = this.ranges;
      for (
        let useComposerControllerValue742 = 0;
        useComposerControllerValue742 < useComposerControllerValue609.length;
        useComposerControllerValue742++
      )
        if (
          useComposerControllerValue609[useComposerControllerValue742].$from
            .pos !=
          useComposerControllerValue609[useComposerControllerValue742].$to.pos
        )
          return !1;
      return !0;
    }
    content() {
      return this.$from.doc.slice(this.from, this.to, !0);
    }
    replace(
      useComposerControllerParam141,
      useComposerControllerParam142 = useComposerControllerS.empty,
    ) {
      let useComposerControllerValue230 =
          useComposerControllerParam142.content.lastChild,
        useComposerControllerValue231 = null;
      for (
        let useComposerControllerValue799 = 0;
        useComposerControllerValue799 < useComposerControllerParam142.openEnd;
        useComposerControllerValue799++
      )
        ((useComposerControllerValue231 = useComposerControllerValue230),
          (useComposerControllerValue230 =
            useComposerControllerValue230.lastChild));
      let useComposerControllerValue232 =
          useComposerControllerParam141.steps.length,
        useComposerControllerValue233 = this.ranges;
      for (
        let _useComposerControllerV = 0;
        _useComposerControllerV < useComposerControllerValue233.length;
        _useComposerControllerV++
      ) {
        let { $from: $from, $to: $to } =
            useComposerControllerValue233[_useComposerControllerV],
          useComposerControllerValue495 =
            useComposerControllerParam141.mapping.slice(
              useComposerControllerValue232,
            );
        (useComposerControllerParam141.replaceRange(
          useComposerControllerValue495.map($from.pos),
          useComposerControllerValue495.map($to.pos),
          _useComposerControllerV
            ? useComposerControllerS.empty
            : useComposerControllerParam142,
        ),
          _useComposerControllerV == 0 &&
            useComposerControllerHelper80(
              useComposerControllerParam141,
              useComposerControllerValue232,
              (
                useComposerControllerValue230
                  ? useComposerControllerValue230.isInline
                  : useComposerControllerValue231 &&
                    useComposerControllerValue231.isTextblock
              )
                ? -1
                : 1,
            ));
      }
    }
    replaceWith(useComposerControllerParam243, useComposerControllerParam244) {
      let useComposerControllerValue332 =
          useComposerControllerParam243.steps.length,
        useComposerControllerValue333 = this.ranges;
      for (
        let useComposerControllerValue429 = 0;
        useComposerControllerValue429 < useComposerControllerValue333.length;
        useComposerControllerValue429++
      ) {
        let { $from: $from, $to: _useComposerControllerV } =
            useComposerControllerValue333[useComposerControllerValue429],
          useComposerControllerValue498 =
            useComposerControllerParam243.mapping.slice(
              useComposerControllerValue332,
            ),
          useComposerControllerValue499 = useComposerControllerValue498.map(
            $from.pos,
          ),
          useComposerControllerValue500 = useComposerControllerValue498.map(
            _useComposerControllerV.pos,
          );
        useComposerControllerValue429
          ? useComposerControllerParam243.deleteRange(
              useComposerControllerValue499,
              useComposerControllerValue500,
            )
          : (useComposerControllerParam243.replaceRangeWith(
              useComposerControllerValue499,
              useComposerControllerValue500,
              useComposerControllerParam244,
            ),
            useComposerControllerHelper80(
              useComposerControllerParam243,
              useComposerControllerValue332,
              useComposerControllerParam244.isInline ? -1 : 1,
            ));
      }
    }
    static findFrom(
      useComposerControllerParam167,
      useComposerControllerParam168,
      useComposerControllerParam169 = !1,
    ) {
      let useComposerControllerValue254 = useComposerControllerParam167.parent
        .inlineContent
        ? new useComposerControllerP(useComposerControllerParam167)
        : useComposerControllerHelper79(
            useComposerControllerParam167.node(0),
            useComposerControllerParam167.parent,
            useComposerControllerParam167.pos,
            useComposerControllerParam167.index(),
            useComposerControllerParam168,
            useComposerControllerParam169,
          );
      if (useComposerControllerValue254) return useComposerControllerValue254;
      for (
        let useComposerControllerValue478 =
          useComposerControllerParam167.depth - 1;
        useComposerControllerValue478 >= 0;
        useComposerControllerValue478--
      ) {
        let useComposerControllerValue550 =
          useComposerControllerParam168 < 0
            ? useComposerControllerHelper79(
                useComposerControllerParam167.node(0),
                useComposerControllerParam167.node(
                  useComposerControllerValue478,
                ),
                useComposerControllerParam167.before(
                  useComposerControllerValue478 + 1,
                ),
                useComposerControllerParam167.index(
                  useComposerControllerValue478,
                ),
                useComposerControllerParam168,
                useComposerControllerParam169,
              )
            : useComposerControllerHelper79(
                useComposerControllerParam167.node(0),
                useComposerControllerParam167.node(
                  useComposerControllerValue478,
                ),
                useComposerControllerParam167.after(
                  useComposerControllerValue478 + 1,
                ),
                useComposerControllerParam167.index(
                  useComposerControllerValue478,
                ) + 1,
                useComposerControllerParam168,
                useComposerControllerParam169,
              );
        if (useComposerControllerValue550) return useComposerControllerValue550;
      }
      return null;
    }
    static near(
      useComposerControllerParam609,
      useComposerControllerParam610 = 1,
    ) {
      return (
        this.findFrom(
          useComposerControllerParam609,
          useComposerControllerParam610,
        ) ||
        this.findFrom(
          useComposerControllerParam609,
          -useComposerControllerParam610,
        ) ||
        new _useComposerControllerS(useComposerControllerParam609.node(0))
      );
    }
    static atStart(useComposerControllerParam772) {
      return (
        useComposerControllerHelper79(
          useComposerControllerParam772,
          useComposerControllerParam772,
          0,
          0,
          1,
        ) || new _useComposerControllerS(useComposerControllerParam772)
      );
    }
    static atEnd(useComposerControllerParam649) {
      return (
        useComposerControllerHelper79(
          useComposerControllerParam649,
          useComposerControllerParam649,
          useComposerControllerParam649.content.size,
          useComposerControllerParam649.childCount,
          -1,
        ) || new _useComposerControllerS(useComposerControllerParam649)
      );
    }
    static fromJSON(
      useComposerControllerParam313,
      useComposerControllerParam314,
    ) {
      if (!useComposerControllerParam314 || !useComposerControllerParam314.type)
        throw RangeError(`Invalid input for Selection.fromJSON`);
      let useComposerControllerValue401 =
        useComposerControllerValue44[useComposerControllerParam314.type];
      if (!useComposerControllerValue401)
        throw RangeError(
          `No selection type ${useComposerControllerParam314.type} defined`,
        );
      return useComposerControllerValue401.fromJSON(
        useComposerControllerParam313,
        useComposerControllerParam314,
      );
    }
    static jsonID(
      useComposerControllerParam461,
      useComposerControllerParam462,
    ) {
      if (useComposerControllerParam461 in useComposerControllerValue44)
        throw RangeError(
          `Duplicate use of selection JSON ID ` + useComposerControllerParam461,
        );
      return (
        (useComposerControllerValue44[useComposerControllerParam461] =
          useComposerControllerParam462),
        (useComposerControllerParam462.prototype.jsonID =
          useComposerControllerParam461),
        useComposerControllerParam462
      );
    }
    getBookmark() {
      return useComposerControllerP
        .between(this.$anchor, this.$head)
        .getBookmark();
    }
  };
useComposerControllerF.prototype.visible = !0;
var useComposerControllerValue45 = class {
    constructor(useComposerControllerParam828, useComposerControllerParam829) {
      ((this.$from = useComposerControllerParam828),
        (this.$to = useComposerControllerParam829));
    }
  },
  useComposerControllerValue46 = !1;
function useComposerControllerHelper78(useComposerControllerParam387) {
  !useComposerControllerValue46 &&
    !useComposerControllerParam387.parent.inlineContent &&
    ((useComposerControllerValue46 = !0),
    console.warn(
      `TextSelection endpoint not pointing into a node with inline content (` +
        useComposerControllerParam387.parent.type.name +
        `)`,
    ));
}
var useComposerControllerP = class UseComposerControllerClass14 extends useComposerControllerF {
  constructor(
    useComposerControllerParam824,
    useComposerControllerParam825 = useComposerControllerParam824,
  ) {
    (useComposerControllerHelper78(useComposerControllerParam824),
      useComposerControllerHelper78(useComposerControllerParam825),
      super(useComposerControllerParam824, useComposerControllerParam825));
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(useComposerControllerParam377, useComposerControllerParam378) {
    let useComposerControllerValue454 = useComposerControllerParam377.resolve(
      useComposerControllerParam378.map(this.head),
    );
    if (!useComposerControllerValue454.parent.inlineContent)
      return useComposerControllerF.near(useComposerControllerValue454);
    let useComposerControllerValue455 = useComposerControllerParam377.resolve(
      useComposerControllerParam378.map(this.anchor),
    );
    return new UseComposerControllerClass14(
      useComposerControllerValue455.parent.inlineContent
        ? useComposerControllerValue455
        : useComposerControllerValue454,
      useComposerControllerValue454,
    );
  }
  replace(
    useComposerControllerParam489,
    useComposerControllerParam490 = useComposerControllerS.empty,
  ) {
    if (
      (super.replace(
        useComposerControllerParam489,
        useComposerControllerParam490,
      ),
      useComposerControllerParam490 == useComposerControllerS.empty)
    ) {
      let useComposerControllerValue760 = this.$from.marksAcross(this.$to);
      useComposerControllerValue760 &&
        useComposerControllerParam489.ensureMarks(
          useComposerControllerValue760,
        );
    }
  }
  eq(useComposerControllerParam655) {
    return (
      useComposerControllerParam655 instanceof UseComposerControllerClass14 &&
      useComposerControllerParam655.anchor == this.anchor &&
      useComposerControllerParam655.head == this.head
    );
  }
  getBookmark() {
    return new useComposerControllerValue47(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: `text`,
      anchor: this.anchor,
      head: this.head,
    };
  }
  static fromJSON(
    useComposerControllerParam321,
    useComposerControllerParam322,
  ) {
    if (
      typeof useComposerControllerParam322.anchor != `number` ||
      typeof useComposerControllerParam322.head != `number`
    )
      throw RangeError(`Invalid input for TextSelection.fromJSON`);
    return new UseComposerControllerClass14(
      useComposerControllerParam321.resolve(
        useComposerControllerParam322.anchor,
      ),
      useComposerControllerParam321.resolve(useComposerControllerParam322.head),
    );
  }
  static create(
    useComposerControllerParam618,
    useComposerControllerParam619,
    useComposerControllerParam620 = useComposerControllerParam619,
  ) {
    let useComposerControllerValue701 = useComposerControllerParam618.resolve(
      useComposerControllerParam619,
    );
    return new this(
      useComposerControllerValue701,
      useComposerControllerParam620 == useComposerControllerParam619
        ? useComposerControllerValue701
        : useComposerControllerParam618.resolve(useComposerControllerParam620),
    );
  }
  static between(
    useComposerControllerParam146,
    useComposerControllerParam147,
    useComposerControllerParam148,
  ) {
    let useComposerControllerValue237 =
      useComposerControllerParam146.pos - useComposerControllerParam147.pos;
    if (
      ((!useComposerControllerParam148 || useComposerControllerValue237) &&
        (useComposerControllerParam148 =
          useComposerControllerValue237 >= 0 ? 1 : -1),
      !useComposerControllerParam147.parent.inlineContent)
    ) {
      let useComposerControllerValue685 =
        useComposerControllerF.findFrom(
          useComposerControllerParam147,
          useComposerControllerParam148,
          !0,
        ) ||
        useComposerControllerF.findFrom(
          useComposerControllerParam147,
          -useComposerControllerParam148,
          !0,
        );
      if (useComposerControllerValue685)
        useComposerControllerParam147 = useComposerControllerValue685.$head;
      else
        return useComposerControllerF.near(
          useComposerControllerParam147,
          useComposerControllerParam148,
        );
    }
    return (
      useComposerControllerParam146.parent.inlineContent ||
        (useComposerControllerValue237 == 0
          ? (useComposerControllerParam146 = useComposerControllerParam147)
          : ((useComposerControllerParam146 = (
              useComposerControllerF.findFrom(
                useComposerControllerParam146,
                -useComposerControllerParam148,
                !0,
              ) ||
              useComposerControllerF.findFrom(
                useComposerControllerParam146,
                useComposerControllerParam148,
                !0,
              )
            ).$anchor),
            useComposerControllerParam146.pos <
              useComposerControllerParam147.pos !=
              useComposerControllerValue237 < 0 &&
              (useComposerControllerParam146 = useComposerControllerParam147))),
      new UseComposerControllerClass14(
        useComposerControllerParam146,
        useComposerControllerParam147,
      )
    );
  }
};
useComposerControllerF.jsonID(`text`, useComposerControllerP);
var useComposerControllerValue47 = class UseComposerControllerClass28 {
    constructor(useComposerControllerParam804, useComposerControllerParam805) {
      ((this.anchor = useComposerControllerParam804),
        (this.head = useComposerControllerParam805));
    }
    map(useComposerControllerParam733) {
      return new UseComposerControllerClass28(
        useComposerControllerParam733.map(this.anchor),
        useComposerControllerParam733.map(this.head),
      );
    }
    resolve(useComposerControllerParam643) {
      return useComposerControllerP.between(
        useComposerControllerParam643.resolve(this.anchor),
        useComposerControllerParam643.resolve(this.head),
      );
    }
  },
  useComposerControllerL = class UseComposerControllerClass22 extends useComposerControllerF {
    constructor(useComposerControllerParam571) {
      let useComposerControllerValue651 =
          useComposerControllerParam571.nodeAfter,
        useComposerControllerValue652 = useComposerControllerParam571
          .node(0)
          .resolve(
            useComposerControllerParam571.pos +
              useComposerControllerValue651.nodeSize,
          );
      (super(useComposerControllerParam571, useComposerControllerValue652),
        (this.node = useComposerControllerValue651));
    }
    map(useComposerControllerParam557, useComposerControllerParam558) {
      let { deleted: deleted, pos: pos } =
          useComposerControllerParam558.mapResult(this.anchor),
        useComposerControllerValue640 =
          useComposerControllerParam557.resolve(pos);
      return deleted
        ? useComposerControllerF.near(useComposerControllerValue640)
        : new UseComposerControllerClass22(useComposerControllerValue640);
    }
    content() {
      return new useComposerControllerS(
        useComposerControllerV.from(this.node),
        0,
        0,
      );
    }
    eq(useComposerControllerParam755) {
      return (
        useComposerControllerParam755 instanceof UseComposerControllerClass22 &&
        useComposerControllerParam755.anchor == this.anchor
      );
    }
    toJSON() {
      return {
        type: `node`,
        anchor: this.anchor,
      };
    }
    getBookmark() {
      return new useComposerControllerValue48(this.anchor);
    }
    static fromJSON(
      useComposerControllerParam417,
      useComposerControllerParam418,
    ) {
      if (typeof useComposerControllerParam418.anchor != `number`)
        throw RangeError(`Invalid input for NodeSelection.fromJSON`);
      return new UseComposerControllerClass22(
        useComposerControllerParam417.resolve(
          useComposerControllerParam418.anchor,
        ),
      );
    }
    static create(
      useComposerControllerParam783,
      useComposerControllerParam784,
    ) {
      return new UseComposerControllerClass22(
        useComposerControllerParam783.resolve(useComposerControllerParam784),
      );
    }
    static isSelectable(useComposerControllerParam661) {
      return (
        !useComposerControllerParam661.isText &&
        useComposerControllerParam661.type.spec.selectable !== !1
      );
    }
  };
((useComposerControllerL.prototype.visible = !1),
  useComposerControllerF.jsonID(`node`, useComposerControllerL));
var useComposerControllerValue48 = class UseComposerControllerClass27 {
    constructor(useComposerControllerParam863) {
      this.anchor = useComposerControllerParam863;
    }
    map(useComposerControllerParam614) {
      let { deleted: deleted, pos: pos } =
        useComposerControllerParam614.mapResult(this.anchor);
      return deleted
        ? new useComposerControllerValue47(pos, pos)
        : new UseComposerControllerClass27(pos);
    }
    resolve(useComposerControllerParam547) {
      let useComposerControllerValue625 = useComposerControllerParam547.resolve(
          this.anchor,
        ),
        useComposerControllerValue626 = useComposerControllerValue625.nodeAfter;
      return useComposerControllerValue626 &&
        useComposerControllerL.isSelectable(useComposerControllerValue626)
        ? new useComposerControllerL(useComposerControllerValue625)
        : useComposerControllerF.near(useComposerControllerValue625);
    }
  },
  _useComposerControllerS = class UseComposerControllerClass25 extends useComposerControllerF {
    constructor(useComposerControllerParam701) {
      super(
        useComposerControllerParam701.resolve(0),
        useComposerControllerParam701.resolve(
          useComposerControllerParam701.content.size,
        ),
      );
    }
    replace(
      useComposerControllerParam409,
      useComposerControllerParam410 = useComposerControllerS.empty,
    ) {
      if (useComposerControllerParam410 == useComposerControllerS.empty) {
        useComposerControllerParam409.delete(
          0,
          useComposerControllerParam409.doc.content.size,
        );
        let useComposerControllerValue665 = useComposerControllerF.atStart(
          useComposerControllerParam409.doc,
        );
        useComposerControllerValue665.eq(
          useComposerControllerParam409.selection,
        ) ||
          useComposerControllerParam409.setSelection(
            useComposerControllerValue665,
          );
      } else
        super.replace(
          useComposerControllerParam409,
          useComposerControllerParam410,
        );
    }
    toJSON() {
      return {
        type: `all`,
      };
    }
    static fromJSON(useComposerControllerParam850) {
      return new UseComposerControllerClass25(useComposerControllerParam850);
    }
    map(useComposerControllerParam871) {
      return new UseComposerControllerClass25(useComposerControllerParam871);
    }
    eq(useComposerControllerParam867) {
      return (
        useComposerControllerParam867 instanceof UseComposerControllerClass25
      );
    }
    getBookmark() {
      return useComposerControllerValue49;
    }
  };
useComposerControllerF.jsonID(`all`, _useComposerControllerS);
var useComposerControllerValue49 = {
  map() {
    return this;
  },
  resolve(useComposerControllerParam870) {
    return new _useComposerControllerS(useComposerControllerParam870);
  },
};
function useComposerControllerHelper79(
  useComposerControllerParam152,
  useComposerControllerParam153,
  useComposerControllerParam154,
  useComposerControllerParam155,
  useComposerControllerParam156,
  useComposerControllerParam157 = !1,
) {
  if (useComposerControllerParam153.inlineContent)
    return useComposerControllerP.create(
      useComposerControllerParam152,
      useComposerControllerParam154,
    );
  for (
    let _useComposerControllerV =
      useComposerControllerParam155 -
      (useComposerControllerParam156 > 0 ? 0 : 1);
    useComposerControllerParam156 > 0
      ? _useComposerControllerV < useComposerControllerParam153.childCount
      : _useComposerControllerV >= 0;
    _useComposerControllerV += useComposerControllerParam156
  ) {
    let useComposerControllerValue442 = useComposerControllerParam153.child(
      _useComposerControllerV,
    );
    if (!useComposerControllerValue442.isAtom) {
      let useComposerControllerValue775 = useComposerControllerHelper79(
        useComposerControllerParam152,
        useComposerControllerValue442,
        useComposerControllerParam154 + useComposerControllerParam156,
        useComposerControllerParam156 < 0
          ? useComposerControllerValue442.childCount
          : 0,
        useComposerControllerParam156,
        useComposerControllerParam157,
      );
      if (useComposerControllerValue775) return useComposerControllerValue775;
    } else if (
      !useComposerControllerParam157 &&
      useComposerControllerL.isSelectable(useComposerControllerValue442)
    )
      return useComposerControllerL.create(
        useComposerControllerParam152,
        useComposerControllerParam154 -
          (useComposerControllerParam156 < 0
            ? useComposerControllerValue442.nodeSize
            : 0),
      );
    useComposerControllerParam154 +=
      useComposerControllerValue442.nodeSize * useComposerControllerParam156;
  }
  return null;
}
function useComposerControllerHelper80(
  useComposerControllerParam272,
  useComposerControllerParam273,
  useComposerControllerParam274,
) {
  let useComposerControllerValue362 =
    useComposerControllerParam272.steps.length - 1;
  if (useComposerControllerValue362 < useComposerControllerParam273) return;
  let useComposerControllerValue363 =
    useComposerControllerParam272.steps[useComposerControllerValue362];
  if (
    !(
      useComposerControllerValue363 instanceof useComposerControllerValue37 ||
      useComposerControllerValue363 instanceof useComposerControllerValue38
    )
  )
    return;
  let useComposerControllerValue364 =
      useComposerControllerParam272.mapping.maps[useComposerControllerValue362],
    _useComposerControllerV;
  (useComposerControllerValue364.forEach(
    (item, index, array, useComposerControllerParam879) => {
      _useComposerControllerV ??= useComposerControllerParam879;
    },
  ),
    useComposerControllerParam272.setSelection(
      useComposerControllerF.near(
        useComposerControllerParam272.doc.resolve(_useComposerControllerV),
        useComposerControllerParam274,
      ),
    ));
}
var useComposerControllerValue50 = 1,
  useComposerControllerValue51 = 2,
  useComposerControllerValue52 = 4,
  useComposerControllerValue53 = class extends useComposerControllerValue43 {
    constructor(useComposerControllerParam342) {
      (super(useComposerControllerParam342.doc),
        (this.curSelectionFor = 0),
        (this.updated = 0),
        (this.meta = Object.create(null)),
        (this.time = Date.now()),
        (this.curSelection = useComposerControllerParam342.selection),
        (this.storedMarks = useComposerControllerParam342.storedMarks));
    }
    get selection() {
      return (
        this.curSelectionFor < this.steps.length &&
          ((this.curSelection = this.curSelection.map(
            this.doc,
            this.mapping.slice(this.curSelectionFor),
          )),
          (this.curSelectionFor = this.steps.length)),
        this.curSelection
      );
    }
    setSelection(useComposerControllerParam208) {
      if (useComposerControllerParam208.$from.doc != this.doc)
        throw RangeError(
          `Selection passed to setSelection must point at the current document`,
        );
      return (
        (this.curSelection = useComposerControllerParam208),
        (this.curSelectionFor = this.steps.length),
        (this.updated =
          (this.updated | useComposerControllerValue50) &
          ~useComposerControllerValue51),
        (this.storedMarks = null),
        this
      );
    }
    get selectionSet() {
      return (this.updated & useComposerControllerValue50) > 0;
    }
    setStoredMarks(useComposerControllerParam675) {
      return (
        (this.storedMarks = useComposerControllerParam675),
        (this.updated |= useComposerControllerValue51),
        this
      );
    }
    ensureMarks(useComposerControllerParam506) {
      return (
        useComposerControllerY.sameSet(
          this.storedMarks || this.selection.$from.marks(),
          useComposerControllerParam506,
        ) || this.setStoredMarks(useComposerControllerParam506),
        this
      );
    }
    addStoredMark(useComposerControllerParam548) {
      return this.ensureMarks(
        useComposerControllerParam548.addToSet(
          this.storedMarks || this.selection.$head.marks(),
        ),
      );
    }
    removeStoredMark(useComposerControllerParam522) {
      return this.ensureMarks(
        useComposerControllerParam522.removeFromSet(
          this.storedMarks || this.selection.$head.marks(),
        ),
      );
    }
    get storedMarksSet() {
      return (this.updated & useComposerControllerValue51) > 0;
    }
    addStep(useComposerControllerParam650, useComposerControllerParam651) {
      (super.addStep(
        useComposerControllerParam650,
        useComposerControllerParam651,
      ),
        (this.updated &= ~useComposerControllerValue51),
        (this.storedMarks = null));
    }
    setTime(useComposerControllerParam851) {
      return ((this.time = useComposerControllerParam851), this);
    }
    replaceSelection(useComposerControllerParam685) {
      return (
        this.selection.replace(this, useComposerControllerParam685),
        this
      );
    }
    replaceSelectionWith(
      useComposerControllerParam343,
      useComposerControllerParam344 = !0,
    ) {
      let useComposerControllerValue419 = this.selection;
      return (
        useComposerControllerParam344 &&
          (useComposerControllerParam343 = useComposerControllerParam343.mark(
            this.storedMarks ||
              (useComposerControllerValue419.empty
                ? useComposerControllerValue419.$from.marks()
                : useComposerControllerValue419.$from.marksAcross(
                    useComposerControllerValue419.$to,
                  ) || useComposerControllerY.none),
          )),
        useComposerControllerValue419.replaceWith(
          this,
          useComposerControllerParam343,
        ),
        this
      );
    }
    deleteSelection() {
      return (this.selection.replace(this), this);
    }
    insertText(
      useComposerControllerParam67,
      useComposerControllerParam68,
      useComposerControllerParam69,
    ) {
      let useComposerControllerValue143 = this.doc.type.schema;
      if (useComposerControllerParam68 == null)
        return useComposerControllerParam67
          ? this.replaceSelectionWith(
              useComposerControllerValue143.text(useComposerControllerParam67),
              !0,
            )
          : this.deleteSelection();
      {
        if (
          ((useComposerControllerParam69 ??= useComposerControllerParam68),
          !useComposerControllerParam67)
        )
          return this.deleteRange(
            useComposerControllerParam68,
            useComposerControllerParam69,
          );
        let useComposerControllerValue243 = this.storedMarks;
        if (!useComposerControllerValue243) {
          let useComposerControllerValue707 = this.doc.resolve(
            useComposerControllerParam68,
          );
          useComposerControllerValue243 =
            useComposerControllerParam69 == useComposerControllerParam68
              ? useComposerControllerValue707.marks()
              : useComposerControllerValue707.marksAcross(
                  this.doc.resolve(useComposerControllerParam69),
                );
        }
        return (
          this.replaceRangeWith(
            useComposerControllerParam68,
            useComposerControllerParam69,
            useComposerControllerValue143.text(
              useComposerControllerParam67,
              useComposerControllerValue243,
            ),
          ),
          !this.selection.empty &&
            this.selection.to ==
              useComposerControllerParam68 +
                useComposerControllerParam67.length &&
            this.setSelection(useComposerControllerF.near(this.selection.$to)),
          this
        );
      }
    }
    setMeta(event, useComposerControllerParam676) {
      return (
        (this.meta[typeof event == `string` ? event : event.key] =
          useComposerControllerParam676),
        this
      );
    }
    getMeta(event) {
      return this.meta[typeof event == `string` ? event : event.key];
    }
    get isGeneric() {
      for (let useComposerControllerValue819 in this.meta) return !1;
      return !0;
    }
    scrollIntoView() {
      return ((this.updated |= useComposerControllerValue52), this);
    }
    get scrolledIntoView() {
      return (this.updated & useComposerControllerValue52) > 0;
    }
  };
function useComposerControllerHelper81(
  useComposerControllerParam826,
  useComposerControllerParam827,
) {
  return !useComposerControllerParam827 || !useComposerControllerParam826
    ? useComposerControllerParam826
    : useComposerControllerParam826.bind(useComposerControllerParam827);
}
var useComposerControllerValue54 = class {
    constructor(
      useComposerControllerParam627,
      useComposerControllerParam628,
      useComposerControllerParam629,
    ) {
      ((this.name = useComposerControllerParam627),
        (this.init = useComposerControllerHelper81(
          useComposerControllerParam628.init,
          useComposerControllerParam629,
        )),
        (this.apply = useComposerControllerHelper81(
          useComposerControllerParam628.apply,
          useComposerControllerParam629,
        )));
    }
  },
  useComposerControllerValue55 = [
    new useComposerControllerValue54(`doc`, {
      init(useComposerControllerParam719) {
        return (
          useComposerControllerParam719.doc ||
          useComposerControllerParam719.schema.topNodeType.createAndFill()
        );
      },
      apply(useComposerControllerParam872) {
        return useComposerControllerParam872.doc;
      },
    }),
    new useComposerControllerValue54(`selection`, {
      init(useComposerControllerParam777, useComposerControllerParam778) {
        return (
          useComposerControllerParam777.selection ||
          useComposerControllerF.atStart(useComposerControllerParam778.doc)
        );
      },
      apply(useComposerControllerParam868) {
        return useComposerControllerParam868.selection;
      },
    }),
    new useComposerControllerValue54(`storedMarks`, {
      init(useComposerControllerParam852) {
        return useComposerControllerParam852.storedMarks || null;
      },
      apply(
        useComposerControllerParam702,
        useComposerControllerParam703,
        useComposerControllerParam704,
        useComposerControllerParam705,
      ) {
        return useComposerControllerParam705.selection.$cursor
          ? useComposerControllerParam702.storedMarks
          : null;
      },
    }),
    new useComposerControllerValue54(`scrollToSelection`, {
      init() {
        return 0;
      },
      apply(useComposerControllerParam806, useComposerControllerParam807) {
        return useComposerControllerParam806.scrolledIntoView
          ? useComposerControllerParam807 + 1
          : useComposerControllerParam807;
      },
    }),
  ],
  useComposerControllerValue56 = class {
    constructor(useComposerControllerParam127, useComposerControllerParam128) {
      ((this.schema = useComposerControllerParam127),
        (this.plugins = []),
        (this.pluginsByKey = Object.create(null)),
        (this.fields = useComposerControllerValue55.slice()),
        useComposerControllerParam128 &&
          useComposerControllerParam128.forEach((item) => {
            if (this.pluginsByKey[item.key])
              throw RangeError(
                `Adding different instances of a keyed plugin (` +
                  item.key +
                  `)`,
              );
            (this.plugins.push(item),
              (this.pluginsByKey[item.key] = item),
              item.spec.state &&
                this.fields.push(
                  new useComposerControllerValue54(
                    item.key,
                    item.spec.state,
                    item,
                  ),
                ));
          }));
    }
  };
export const useComposerControllerC = class UseComposerControllerClass4 {
  constructor(useComposerControllerParam864) {
    this.config = useComposerControllerParam864;
  }
  get schema() {
    return this.config.schema;
  }
  get plugins() {
    return this.config.plugins;
  }
  apply(useComposerControllerParam779) {
    return this.applyTransaction(useComposerControllerParam779).state;
  }
  filterTransaction(
    useComposerControllerParam309,
    useComposerControllerParam310 = -1,
  ) {
    for (
      let useComposerControllerValue468 = 0;
      useComposerControllerValue468 < this.config.plugins.length;
      useComposerControllerValue468++
    )
      if (useComposerControllerValue468 != useComposerControllerParam310) {
        let useComposerControllerValue603 =
          this.config.plugins[useComposerControllerValue468];
        if (
          useComposerControllerValue603.spec.filterTransaction &&
          !useComposerControllerValue603.spec.filterTransaction.call(
            useComposerControllerValue603,
            useComposerControllerParam309,
            this,
          )
        )
          return !1;
      }
    return !0;
  }
  applyTransaction(useComposerControllerParam33) {
    if (!this.filterTransaction(useComposerControllerParam33))
      return {
        state: this,
        transactions: [],
      };
    let useComposerControllerValue95 = [useComposerControllerParam33],
      useComposerControllerValue96 = this.applyInner(
        useComposerControllerParam33,
      ),
      useComposerControllerValue97 = null;
    for (;;) {
      let useComposerControllerValue124 = !1;
      for (
        let useComposerControllerValue136 = 0;
        useComposerControllerValue136 < this.config.plugins.length;
        useComposerControllerValue136++
      ) {
        let _useComposerControllerV =
          this.config.plugins[useComposerControllerValue136];
        if (_useComposerControllerV.spec.appendTransaction) {
          let useComposerControllerValue205 = useComposerControllerValue97
              ? useComposerControllerValue97[useComposerControllerValue136].n
              : 0,
            useComposerControllerValue206 = useComposerControllerValue97
              ? useComposerControllerValue97[useComposerControllerValue136]
                  .state
              : this,
            useComposerControllerValue207 =
              useComposerControllerValue205 <
                useComposerControllerValue95.length &&
              _useComposerControllerV.spec.appendTransaction.call(
                _useComposerControllerV,
                useComposerControllerValue205
                  ? useComposerControllerValue95.slice(
                      useComposerControllerValue205,
                    )
                  : useComposerControllerValue95,
                useComposerControllerValue206,
                useComposerControllerValue96,
              );
          if (
            useComposerControllerValue207 &&
            useComposerControllerValue96.filterTransaction(
              useComposerControllerValue207,
              useComposerControllerValue136,
            )
          ) {
            if (
              (useComposerControllerValue207.setMeta(
                `appendedTransaction`,
                useComposerControllerParam33,
              ),
              !useComposerControllerValue97)
            ) {
              useComposerControllerValue97 = [];
              for (
                let useComposerControllerValue653 = 0;
                useComposerControllerValue653 < this.config.plugins.length;
                useComposerControllerValue653++
              )
                useComposerControllerValue97.push(
                  useComposerControllerValue653 < useComposerControllerValue136
                    ? {
                        state: useComposerControllerValue96,
                        n: useComposerControllerValue95.length,
                      }
                    : {
                        state: this,
                        n: 0,
                      },
                );
            }
            (useComposerControllerValue95.push(useComposerControllerValue207),
              (useComposerControllerValue96 =
                useComposerControllerValue96.applyInner(
                  useComposerControllerValue207,
                )),
              (useComposerControllerValue124 = !0));
          }
          useComposerControllerValue97 &&
            (useComposerControllerValue97[useComposerControllerValue136] = {
              state: useComposerControllerValue96,
              n: useComposerControllerValue95.length,
            });
        }
      }
      if (!useComposerControllerValue124)
        return {
          state: useComposerControllerValue96,
          transactions: useComposerControllerValue95,
        };
    }
  }
  applyInner(useComposerControllerParam245) {
    if (!useComposerControllerParam245.before.eq(this.doc))
      throw RangeError(`Applying a mismatched transaction`);
    let useComposerControllerValue334 = new UseComposerControllerClass4(
        this.config,
      ),
      useComposerControllerValue335 = this.config.fields;
    for (
      let useComposerControllerValue703 = 0;
      useComposerControllerValue703 < useComposerControllerValue335.length;
      useComposerControllerValue703++
    ) {
      let useComposerControllerValue783 =
        useComposerControllerValue335[useComposerControllerValue703];
      useComposerControllerValue334[useComposerControllerValue783.name] =
        useComposerControllerValue783.apply(
          useComposerControllerParam245,
          this[useComposerControllerValue783.name],
          this,
          useComposerControllerValue334,
        );
    }
    return useComposerControllerValue334;
  }
  get tr() {
    return new useComposerControllerValue53(this);
  }
  static create(useComposerControllerParam370) {
    let useComposerControllerValue446 = new useComposerControllerValue56(
        useComposerControllerParam370.doc
          ? useComposerControllerParam370.doc.type.schema
          : useComposerControllerParam370.schema,
        useComposerControllerParam370.plugins,
      ),
      useComposerControllerValue447 = new UseComposerControllerClass4(
        useComposerControllerValue446,
      );
    for (
      let useComposerControllerValue723 = 0;
      useComposerControllerValue723 <
      useComposerControllerValue446.fields.length;
      useComposerControllerValue723++
    )
      useComposerControllerValue447[
        useComposerControllerValue446.fields[useComposerControllerValue723].name
      ] = useComposerControllerValue446.fields[
        useComposerControllerValue723
      ].init(useComposerControllerParam370, useComposerControllerValue447);
    return useComposerControllerValue447;
  }
  reconfigure(useComposerControllerParam346) {
    let useComposerControllerValue424 = new useComposerControllerValue56(
        this.schema,
        useComposerControllerParam346.plugins,
      ),
      useComposerControllerValue425 = useComposerControllerValue424.fields,
      useComposerControllerValue426 = new UseComposerControllerClass4(
        useComposerControllerValue424,
      );
    for (
      let useComposerControllerValue649 = 0;
      useComposerControllerValue649 < useComposerControllerValue425.length;
      useComposerControllerValue649++
    ) {
      let useComposerControllerValue743 =
        useComposerControllerValue425[useComposerControllerValue649].name;
      useComposerControllerValue426[useComposerControllerValue743] =
        this.hasOwnProperty(useComposerControllerValue743)
          ? this[useComposerControllerValue743]
          : useComposerControllerValue425[useComposerControllerValue649].init(
              useComposerControllerParam346,
              useComposerControllerValue426,
            );
    }
    return useComposerControllerValue426;
  }
  toJSON(useComposerControllerParam100) {
    let useComposerControllerValue176 = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON(),
    };
    if (
      (this.storedMarks &&
        (useComposerControllerValue176.storedMarks = this.storedMarks.map(
          (item) => item.toJSON(),
        )),
      useComposerControllerParam100 &&
        typeof useComposerControllerParam100 == `object`)
    )
      for (let useComposerControllerValue407 in useComposerControllerParam100) {
        if (
          useComposerControllerValue407 == `doc` ||
          useComposerControllerValue407 == `selection`
        )
          throw RangeError(
            "The JSON fields `doc` and `selection` are reserved",
          );
        let useComposerControllerValue430 =
            useComposerControllerParam100[useComposerControllerValue407],
          useComposerControllerValue431 =
            useComposerControllerValue430.spec.state;
        useComposerControllerValue431 &&
          useComposerControllerValue431.toJSON &&
          (useComposerControllerValue176[useComposerControllerValue407] =
            useComposerControllerValue431.toJSON.call(
              useComposerControllerValue430,
              this[useComposerControllerValue430.key],
            ));
      }
    return useComposerControllerValue176;
  }
  static fromJSON(
    useComposerControllerParam30,
    useComposerControllerParam31,
    useComposerControllerParam32,
  ) {
    if (!useComposerControllerParam31)
      throw RangeError(`Invalid input for EditorState.fromJSON`);
    if (!useComposerControllerParam30.schema)
      throw RangeError(`Required config field 'schema' missing`);
    let useComposerControllerValue93 = new useComposerControllerValue56(
        useComposerControllerParam30.schema,
        useComposerControllerParam30.plugins,
      ),
      useComposerControllerValue94 = new UseComposerControllerClass4(
        useComposerControllerValue93,
      );
    return (
      useComposerControllerValue93.fields.forEach((item) => {
        if (item.name == `doc`)
          useComposerControllerValue94.doc =
            useComposerControllerValue8.fromJSON(
              useComposerControllerParam30.schema,
              useComposerControllerParam31.doc,
            );
        else if (item.name == `selection`)
          useComposerControllerValue94.selection =
            useComposerControllerF.fromJSON(
              useComposerControllerValue94.doc,
              useComposerControllerParam31.selection,
            );
        else if (item.name == `storedMarks`)
          useComposerControllerParam31.storedMarks &&
            (useComposerControllerValue94.storedMarks =
              useComposerControllerParam31.storedMarks.map(
                useComposerControllerParam30.schema.markFromJSON,
              ));
        else {
          if (useComposerControllerParam32)
            for (let useComposerControllerValue464 in useComposerControllerParam32) {
              let _useComposerControllerV =
                  useComposerControllerParam32[useComposerControllerValue464],
                useComposerControllerValue501 =
                  _useComposerControllerV.spec.state;
              if (
                _useComposerControllerV.key == item.name &&
                useComposerControllerValue501 &&
                useComposerControllerValue501.fromJSON &&
                Object.prototype.hasOwnProperty.call(
                  useComposerControllerParam31,
                  useComposerControllerValue464,
                )
              ) {
                useComposerControllerValue94[item.name] =
                  useComposerControllerValue501.fromJSON.call(
                    _useComposerControllerV,
                    useComposerControllerParam30,
                    useComposerControllerParam31[useComposerControllerValue464],
                    useComposerControllerValue94,
                  );
                return;
              }
            }
          useComposerControllerValue94[item.name] = item.init(
            useComposerControllerParam30,
            useComposerControllerValue94,
          );
        }
      }),
      useComposerControllerValue94
    );
  }
};
function $t(
  useComposerControllerParam442,
  useComposerControllerParam443,
  useComposerControllerParam444,
) {
  for (let useComposerControllerValue614 in useComposerControllerParam442) {
    let useComposerControllerValue672 =
      useComposerControllerParam442[useComposerControllerValue614];
    (useComposerControllerValue672 instanceof Function
      ? (useComposerControllerValue672 = useComposerControllerValue672.bind(
          useComposerControllerParam443,
        ))
      : useComposerControllerValue614 == `handleDOMEvents` &&
        (useComposerControllerValue672 = $t(
          useComposerControllerValue672,
          useComposerControllerParam443,
          {},
        )),
      (useComposerControllerParam444[useComposerControllerValue614] =
        useComposerControllerValue672));
  }
  return useComposerControllerParam444;
}
var useComposerControllerU = class {
    constructor(event) {
      ((this.spec = event),
        (this.props = {}),
        event.props && $t(event.props, this, this.props),
        (this.key = event.key
          ? event.key.key
          : useComposerControllerHelper82(`plugin`)));
    }
    getState(useComposerControllerParam858) {
      return useComposerControllerParam858[this.key];
    }
  },
  useComposerControllerValue57 = Object.create(null);
function useComposerControllerHelper82(useComposerControllerParam725) {
  return useComposerControllerParam725 in useComposerControllerValue57
    ? useComposerControllerParam725 +
        `$` +
        ++useComposerControllerValue57[useComposerControllerParam725]
    : ((useComposerControllerValue57[useComposerControllerParam725] = 0),
      useComposerControllerParam725 + `$`);
}
var useComposerControllerD = class {
    constructor(useComposerControllerParam843 = `key`) {
      this.key = useComposerControllerHelper82(useComposerControllerParam843);
    }
    get(useComposerControllerParam785) {
      return useComposerControllerParam785.config.pluginsByKey[this.key];
    }
    getState(useComposerControllerParam859) {
      return useComposerControllerParam859[this.key];
    }
  },
  useComposerControllerValue58 = new useComposerControllerD(
    `transactionEventPlugin`,
  ),
  useComposerControllerA = `prosemirrorDispatchTransaction`;
function useComposerControllerI(
  useComposerControllerParam470,
  useComposerControllerParam471,
) {
  let { eventTarget: eventTarget } = useComposerControllerValue58.getState(
    useComposerControllerParam470.state,
  );
  return (
    eventTarget.addEventListener(
      useComposerControllerA,
      useComposerControllerParam471,
    ),
    () => {
      eventTarget.removeEventListener(
        useComposerControllerA,
        useComposerControllerParam471,
      );
    }
  );
}
type TransactionEventPluginState = {
  eventTarget: EventTarget;
};
type ComposerControllerSnapshot = {
  view: {
    state: unknown;
  };
};
type ComposerControllerSelector<SelectedValue> = (
  controller: ComposerControllerSnapshot,
) => SelectedValue;
export function useComposerControllerO(eventTarget: EventTarget) {
  return new useComposerControllerU({
    key: useComposerControllerValue58,
    state: {
      init() {
        return {
          eventTarget,
        };
      },
      apply(_transaction: unknown, pluginState: TransactionEventPluginState) {
        return pluginState;
      },
    },
  });
}
var useComposerControllerR = (0, React.createContext)(null);
export const useComposerControllerT = () => {
  let useComposerControllerValue551 = (0, React.useContext)(
    useComposerControllerR,
  );
  if (!useComposerControllerValue551)
    throw Error(
      `useComposerController must be used within a ComposerControllerScope`,
    );
  return useComposerControllerValue551;
};
export const useComposerControllerN = <SelectedValue,>(
  controller: ComposerControllerSnapshot,
  selector: ComposerControllerSelector<SelectedValue>,
): SelectedValue => {
  let subscribeToTransactions = (onStoreChange: () => void) =>
    useComposerControllerI(controller.view, onStoreChange);
  let getSnapshot, getServerSnapshot;
  return (
    (getSnapshot = () => selector(controller)),
    (getServerSnapshot = () => selector(controller)),
    (0, React.useSyncExternalStore)(
      subscribeToTransactions,
      getSnapshot,
      getServerSnapshot,
    )
  );
};
export {
  useComposerControllerS,
  useComposerControllerA,
  useComposerControllerB,
  useComposerControllerD,
  useComposerControllerF,
  useComposerControllerI,
  useComposerControllerL,
  useComposerControllerM,
  useComposerControllerP,
  useComposerControllerR,
  _useComposerControllerS,
  useComposerControllerU,
  useComposerControllerV,
  useComposerControllerY,
};
