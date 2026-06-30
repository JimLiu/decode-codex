// Restored from ref/webview/assets/dagre-DgCFaaOE.js
// Dagre chunk restored from the Codex webview bundle.
import {
  isArrayLikeObjectN as _isArrayLikeObjectN,
  isArrayLikeObjectP as _isArrayLikeObjectP,
  isArrayLikeObjectV as _isArrayLikeObjectV,
  isArrayLikeObjectC,
  isArrayLikeObjectD,
  isArrayLikeObjectE,
  isArrayLikeObjectG,
  isArrayLikeObjectJ,
  isArrayLikeObjectK,
  isArrayLikeObjectN,
  isArrayLikeObjectP,
  isArrayLikeObjectV,
  _isArrayLikeObjectW,
  isArrayLikeObjectZ,
} from "./lodash-array-like-object";
import {
  _baseUniqA as _baseUniqC,
  _baseUniqN as _baseUniqM,
  _baseUniqT as _baseUniqN,
  baseUniqC as _baseUniqS,
  baseUniqM as baseUniqA,
  _baseUniqA,
  baseUniqS as baseUniqD,
  baseUniqR as baseUniqE,
  baseUniqT,
  _baseUniqC as baseUniqI,
  _baseUniqN as baseUniqM,
  _baseUniqT,
  baseUniqL,
  _baseUniqM as baseUniqR,
  baseUniqC,
  baseUniqY,
} from "./lodash-base-uniq";
import {
  basePickByL as basePickByA,
  basePickByC,
  basePickByS as basePickByD,
  basePickByO as basePickByI,
  basePickByI as basePickByL,
  basePickByR as basePickByN,
  basePickByN as basePickByO,
  basePickByT as basePickByR,
  basePickByA as basePickByS,
  basePickByD as basePickByT,
} from "./lodash-base-pick-by";
import { isEmptyI, isEmptyN } from "./lodash-is-empty-alt";
import { chunkS3R3BYOJM } from "./chunk-s3r3byoj";
import { Graphlib } from "./graphlib";
function dagreHelper1(dagreParam408) {
  return isArrayLikeObjectN(
    isArrayLikeObjectD(dagreParam408, undefined, basePickByL),
    dagreParam408 + "",
  );
}
var dagreValue1 = RegExp(
  "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
);
function dagreHelper2(dagreParam474) {
  return dagreValue1.test(dagreParam474);
}
function dagreHelper3(dagreParam466) {
  return baseUniqY(dagreParam466, 5);
}
var be = function () {
  return isArrayLikeObjectG.Date.now();
};
function dagreHelper4(dagreParam396, dagreParam397) {
  return dagreParam396 == null
    ? dagreParam396
    : _isArrayLikeObjectN(
        dagreParam396,
        _baseUniqC(dagreParam397),
        _isArrayLikeObjectP,
      );
}
function dagreHelper5(dagreParam444, dagreParam445) {
  return dagreParam444 && baseUniqD(dagreParam444, _baseUniqC(dagreParam445));
}
function dagreHelper6(dagreParam477, dagreParam478) {
  return dagreParam477 > dagreParam478;
}
function dagreHelper7(dagreParam479, dagreParam480) {
  return dagreParam479 < dagreParam480;
}
function dagreHelper8(dagreParam277, dagreParam278) {
  var dagreValue383 = {};
  return (
    (dagreParam278 = baseUniqT(dagreParam278, 3)),
    baseUniqD(
      dagreParam277,
      function (dagreParam414, dagreParam415, dagreParam416) {
        isArrayLikeObjectJ(
          dagreValue383,
          dagreParam415,
          dagreParam278(dagreParam414, dagreParam415, dagreParam416),
        );
      },
    ),
    dagreValue383
  );
}
function dagreHelper9(dagreParam201, dagreParam202, dagreParam203) {
  for (
    var dagreValue315 = -1, dagreValue316 = dagreParam201.length;
    ++dagreValue315 < dagreValue316;

  ) {
    var dagreValue317 = dagreParam201[dagreValue315],
      dagreValue318 = dagreParam202(dagreValue317);
    if (
      dagreValue318 != null &&
      (dagreValue319 === undefined
        ? dagreValue318 === dagreValue318 && !_baseUniqT(dagreValue318)
        : dagreParam203(dagreValue318, dagreValue319))
    )
      var dagreValue319 = dagreValue318,
        dagreValue320 = dagreValue317;
  }
  return dagreValue320;
}
function dagreHelper10(dagreParam392) {
  return dagreParam392 && dagreParam392.length
    ? dagreHelper9(dagreParam392, isArrayLikeObjectZ, dagreHelper6)
    : undefined;
}
function dagreHelper11(dagreParam393) {
  return dagreParam393 && dagreParam393.length
    ? dagreHelper9(dagreParam393, isArrayLikeObjectZ, dagreHelper7)
    : undefined;
}
function dagreHelper12(dagreParam381, dagreParam382) {
  return dagreParam381 && dagreParam381.length
    ? dagreHelper9(dagreParam381, baseUniqT(dagreParam382, 2), dagreHelper7)
    : undefined;
}
function dagreHelper13(dagreParam341, dagreParam342) {
  var dagreValue416 = dagreParam341.length;
  for (dagreParam341.sort(dagreParam342); dagreValue416--; )
    dagreParam341[dagreValue416] = dagreParam341[dagreValue416].value;
  return dagreParam341;
}
function dagreHelper14(dagreParam62, dagreParam63) {
  if (dagreParam62 !== dagreParam63) {
    var dagreValue131 = dagreParam62 !== undefined,
      dagreValue132 = dagreParam62 === null,
      dagreValue133 = dagreParam62 === dagreParam62,
      dagreValue134 = _baseUniqT(dagreParam62),
      dagreValue135 = dagreParam63 !== undefined,
      dagreValue136 = dagreParam63 === null,
      dagreValue137 = dagreParam63 === dagreParam63,
      dagreValue138 = _baseUniqT(dagreParam63);
    if (
      (!dagreValue136 &&
        !dagreValue138 &&
        !dagreValue134 &&
        dagreParam62 > dagreParam63) ||
      (dagreValue134 &&
        dagreValue135 &&
        dagreValue137 &&
        !dagreValue136 &&
        !dagreValue138) ||
      (dagreValue132 && dagreValue135 && dagreValue137) ||
      (!dagreValue131 && dagreValue137) ||
      !dagreValue133
    )
      return 1;
    if (
      (!dagreValue132 &&
        !dagreValue134 &&
        !dagreValue138 &&
        dagreParam62 < dagreParam63) ||
      (dagreValue138 &&
        dagreValue131 &&
        dagreValue133 &&
        !dagreValue132 &&
        !dagreValue134) ||
      (dagreValue136 && dagreValue131 && dagreValue133) ||
      (!dagreValue135 && dagreValue133) ||
      !dagreValue137
    )
      return -1;
  }
  return 0;
}
function dagreHelper15(dagreParam172, dagreParam173, dagreParam174) {
  for (
    var dagreValue283 = -1,
      dagreValue284 = dagreParam172.criteria,
      dagreValue285 = dagreParam173.criteria,
      dagreValue286 = dagreValue284.length,
      dagreValue287 = dagreParam174.length;
    ++dagreValue283 < dagreValue286;

  ) {
    var dagreValue288 = dagreHelper14(
      dagreValue284[dagreValue283],
      dagreValue285[dagreValue283],
    );
    if (dagreValue288)
      return dagreValue283 >= dagreValue287
        ? dagreValue288
        : dagreValue288 * (dagreParam174[dagreValue283] == "desc" ? -1 : 1);
  }
  return dagreParam172.index - dagreParam173.index;
}
function dagreHelper16(dagreParam55, dagreParam56, dagreParam57) {
  dagreParam56 = dagreParam56.length
    ? baseUniqM(dagreParam56, function (dagreParam263) {
        return isArrayLikeObjectV(dagreParam263)
          ? function (dagreParam368) {
              return _baseUniqA(
                dagreParam368,
                dagreParam263.length === 1 ? dagreParam263[0] : dagreParam263,
              );
            }
          : dagreParam263;
      })
    : [isArrayLikeObjectZ];
  var dagreValue129 = -1;
  return (
    (dagreParam56 = baseUniqM(dagreParam56, _isArrayLikeObjectV(baseUniqT))),
    dagreHelper13(
      basePickByA(
        dagreParam55,
        function (dagreParam235, dagreParam236, dagreParam237) {
          return {
            criteria: baseUniqM(dagreParam56, function (dagreParam428) {
              return dagreParam428(dagreParam235);
            }),
            index: ++dagreValue129,
            value: dagreParam235,
          };
        },
      ),
      function (dagreParam417, dagreParam418) {
        return dagreHelper15(dagreParam417, dagreParam418, dagreParam57);
      },
    )
  );
}
var dagreValue3 = baseUniqL("length"),
  dagreValue17 =
    "(?:\\u200d(?:" +
    [
      "[^\\ud800-\\udfff]",
      "(?:\\ud83c[\\udde6-\\uddff]){2}",
      "[\\ud800-\\udbff][\\udc00-\\udfff]",
    ].join("|") +
    ")" +
    "[\\ufe0e\\ufe0f]?" +
    "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
    ")*",
  dagreValue18 =
    "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?" +
    dagreValue17,
  dagreValue19 =
    "(?:" +
    [
      "[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?",
      "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      "(?:\\ud83c[\\udde6-\\uddff]){2}",
      "[\\ud800-\\udbff][\\udc00-\\udfff]",
      "[\\ud800-\\udfff]",
    ].join("|") +
    ")",
  dagreValue20 = RegExp(
    "\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" +
      dagreValue19 +
      dagreValue18,
    "g",
  );
function dagreHelper17(dagreParam361) {
  for (
    var dagreValue421 = (dagreValue20.lastIndex = 0);
    dagreValue20.test(dagreParam361);

  )
    ++dagreValue421;
  return dagreValue421;
}
function dagreHelper18(dagreParam434) {
  return dagreHelper2(dagreParam434)
    ? dagreHelper17(dagreParam434)
    : dagreValue3(dagreParam434);
}
function dagreHelper19(dagreParam362, dagreParam363) {
  return basePickByT(
    dagreParam362,
    dagreParam363,
    function (dagreParam469, dagreParam470) {
      return _baseUniqM(dagreParam362, dagreParam470);
    },
  );
}
var dagreValue21 = dagreHelper1(function (dagreParam401, dagreParam402) {
    return dagreParam401 == null
      ? {}
      : dagreHelper19(dagreParam401, dagreParam402);
  }),
  dagreValue22 = Math.ceil,
  dagreValue23 = Math.max;
function dagreHelper20(
  dagreParam264,
  dagreParam265,
  dagreParam266,
  dagreParam267,
) {
  for (
    var dagreValue373 = -1,
      dagreValue374 = dagreValue23(
        dagreValue22((dagreParam265 - dagreParam264) / (dagreParam266 || 1)),
        0,
      ),
      dagreValue375 = Array(dagreValue374);
    dagreValue374--;

  ) {
    dagreValue375[dagreParam267 ? dagreValue374 : ++dagreValue373] =
      dagreParam264;
    dagreParam264 += dagreParam266;
  }
  return dagreValue375;
}
function dagreHelper21(dagreParam150) {
  return function (dagreParam165, dagreParam166, dagreParam167) {
    return (
      dagreParam167 &&
        typeof dagreParam167 != "number" &&
        isArrayLikeObjectC(dagreParam165, dagreParam166, dagreParam167) &&
        (dagreParam166 = dagreParam167 = undefined),
      (dagreParam165 = basePickByD(dagreParam165)),
      dagreParam166 === undefined
        ? ((dagreParam166 = dagreParam165), (dagreParam165 = 0))
        : (dagreParam166 = basePickByD(dagreParam166)),
      (dagreParam167 =
        dagreParam167 === undefined
          ? dagreParam165 < dagreParam166
            ? 1
            : -1
          : basePickByD(dagreParam167)),
      dagreHelper20(dagreParam165, dagreParam166, dagreParam167, dagreParam150)
    );
  };
}
var dagreValue24 = dagreHelper21();
function dagreHelper22(dagreParam258) {
  if (dagreParam258 == null) return 0;
  if (_isArrayLikeObjectW(dagreParam258))
    return basePickByN(dagreParam258)
      ? dagreHelper18(dagreParam258)
      : dagreParam258.length;
  var dagreValue371 = isEmptyN(dagreParam258);
  return dagreValue371 == "[object Map]" || dagreValue371 == "[object Set]"
    ? dagreParam258.size
    : isEmptyI(dagreParam258).length;
}
var dagreValue26 = isArrayLikeObjectE(function (dagreParam185, dagreParam186) {
    if (dagreParam185 == null) return [];
    var dagreValue303 = dagreParam186.length;
    return (
      dagreValue303 > 1 &&
      isArrayLikeObjectC(dagreParam185, dagreParam186[0], dagreParam186[1])
        ? (dagreParam186 = [])
        : dagreValue303 > 2 &&
          isArrayLikeObjectC(
            dagreParam186[0],
            dagreParam186[1],
            dagreParam186[2],
          ) &&
          (dagreParam186 = [dagreParam186[0]]),
      dagreHelper16(dagreParam185, baseUniqC(dagreParam186, 1), [])
    );
  }),
  dagreValue27 = 0;
function dagreHelper23(dagreParam419) {
  var dagreValue429 = ++dagreValue27;
  return baseUniqE(dagreParam419) + dagreValue429;
}
function dagreHelper24(dagreParam252, dagreParam253, dagreParam254) {
  for (
    var dagreValue363 = -1,
      dagreValue364 = dagreParam252.length,
      dagreValue365 = dagreParam253.length,
      dagreValue366 = {};
    ++dagreValue363 < dagreValue364;

  ) {
    var dagreValue367 =
      dagreValue363 < dagreValue365 ? dagreParam253[dagreValue363] : undefined;
    dagreParam254(dagreValue366, dagreParam252[dagreValue363], dagreValue367);
  }
  return dagreValue366;
}
function dagreHelper25(dagreParam409, dagreParam410) {
  return dagreHelper24(
    dagreParam409 || [],
    dagreParam410 || [],
    isArrayLikeObjectK,
  );
}
var dagreValue28 = class {
  constructor() {
    var dagreValue420 = {};
    dagreValue420._next = dagreValue420._prev = dagreValue420;
    this._sentinel = dagreValue420;
  }
  dequeue() {
    var dagreValue414 = this._sentinel,
      dagreValue415 = dagreValue414._prev;
    if (dagreValue415 !== dagreValue414)
      return (at(dagreValue415), dagreValue415);
  }
  enqueue(dagreParam240) {
    var dagreValue349 = this._sentinel;
    dagreParam240._prev && dagreParam240._next && at(dagreParam240);
    dagreParam240._next = dagreValue349._next;
    dagreValue349._next._prev = dagreParam240;
    dagreValue349._next = dagreParam240;
    dagreParam240._prev = dagreValue349;
  }
  toString() {
    for (
      var dagreValue350 = [],
        dagreValue351 = this._sentinel,
        dagreValue352 = dagreValue351._prev;
      dagreValue352 !== dagreValue351;

    ) {
      dagreValue350.push(JSON.stringify(dagreValue352, dagreHelper26));
      dagreValue352 = dagreValue352._prev;
    }
    return "[" + dagreValue350.join(", ") + "]";
  }
};
function at(dagreParam311) {
  dagreParam311._prev._next = dagreParam311._next;
  dagreParam311._next._prev = dagreParam311._prev;
  delete dagreParam311._next;
  delete dagreParam311._prev;
}
function dagreHelper26(dagreParam385, dagreParam386) {
  if (dagreParam385 !== "_next" && dagreParam385 !== "_prev")
    return dagreParam386;
}
var dagreValue29 = isArrayLikeObjectP(1);
function dagreHelper27(dagreParam220, dagreParam221) {
  if (dagreParam220.nodeCount() <= 1) return [];
  var dagreValue332 = dagreHelper30(
    dagreParam220,
    dagreParam221 || dagreValue29,
  );
  return basePickByL(
    basePickByI(
      dagreHelper28(
        dagreValue332.graph,
        dagreValue332.buckets,
        dagreValue332.zeroIdx,
      ),
      function (dagreParam411) {
        return dagreParam220.outEdges(dagreParam411.v, dagreParam411.w);
      },
    ),
  );
}
function dagreHelper28(dagreParam104, dagreParam105, dagreParam106) {
  for (
    var dagreValue190 = [],
      dagreValue191 = dagreParam105[dagreParam105.length - 1],
      dagreValue192 = dagreParam105[0],
      dagreValue193;
    dagreParam104.nodeCount();

  ) {
    for (; (dagreValue193 = dagreValue192.dequeue()); )
      dagreHelper29(dagreParam104, dagreParam105, dagreParam106, dagreValue193);
    for (; (dagreValue193 = dagreValue191.dequeue()); )
      dagreHelper29(dagreParam104, dagreParam105, dagreParam106, dagreValue193);
    if (dagreParam104.nodeCount()) {
      for (
        var dagreValue194 = dagreParam105.length - 2;
        dagreValue194 > 0;
        --dagreValue194
      )
        if (
          ((dagreValue193 = dagreParam105[dagreValue194].dequeue()),
          dagreValue193)
        ) {
          dagreValue190 = dagreValue190.concat(
            dagreHelper29(
              dagreParam104,
              dagreParam105,
              dagreParam106,
              dagreValue193,
              true,
            ),
          );
          break;
        }
    }
  }
  return dagreValue190;
}
function dagreHelper29(
  dagreParam90,
  dagreParam91,
  dagreParam92,
  dagreParam93,
  dagreParam94,
) {
  var dagreValue178 = dagreParam94 ? [] : undefined;
  return (
    _baseUniqS(dagreParam90.inEdges(dagreParam93.v), function (dagreParam285) {
      var dagreValue384 = dagreParam90.edge(dagreParam285),
        dagreValue385 = dagreParam90.node(dagreParam285.v);
      dagreParam94 &&
        dagreValue178.push({
          v: dagreParam285.v,
          w: dagreParam285.w,
        });
      dagreValue385.out -= dagreValue384;
      dagreHelper31(dagreParam91, dagreParam92, dagreValue385);
    }),
    _baseUniqS(dagreParam90.outEdges(dagreParam93.v), function (dagreParam317) {
      var dagreValue400 = dagreParam90.edge(dagreParam317),
        dagreValue401 = dagreParam317.w,
        dagreValue402 = dagreParam90.node(dagreValue401);
      dagreValue402.in -= dagreValue400;
      dagreHelper31(dagreParam91, dagreParam92, dagreValue402);
    }),
    dagreParam90.removeNode(dagreParam93.v),
    dagreValue178
  );
}
function dagreHelper30(dagreParam44, dagreParam45) {
  var dagreValue94 = new Graphlib(),
    dagreValue95 = 0,
    dagreValue96 = 0;
  _baseUniqS(dagreParam44.nodes(), function (dagreParam398) {
    dagreValue94.setNode(dagreParam398, {
      v: dagreParam398,
      in: 0,
      out: 0,
    });
  });
  _baseUniqS(dagreParam44.edges(), function (dagreParam184) {
    var dagreValue300 =
        dagreValue94.edge(dagreParam184.v, dagreParam184.w) || 0,
      dagreValue301 = dagreParam45(dagreParam184),
      dagreValue302 = dagreValue300 + dagreValue301;
    dagreValue94.setEdge(dagreParam184.v, dagreParam184.w, dagreValue302);
    dagreValue96 = Math.max(
      dagreValue96,
      (dagreValue94.node(dagreParam184.v).out += dagreValue301),
    );
    dagreValue95 = Math.max(
      dagreValue95,
      (dagreValue94.node(dagreParam184.w).in += dagreValue301),
    );
  });
  var dagreValue97 = dagreValue24(dagreValue96 + dagreValue95 + 3).map(
      function () {
        return new dagreValue28();
      },
    ),
    dagreValue98 = dagreValue95 + 1;
  return (
    _baseUniqS(dagreValue94.nodes(), function (dagreParam461) {
      dagreHelper31(
        dagreValue97,
        dagreValue98,
        dagreValue94.node(dagreParam461),
      );
    }),
    {
      graph: dagreValue94,
      buckets: dagreValue97,
      zeroIdx: dagreValue98,
    }
  );
}
function dagreHelper31(dagreParam282, dagreParam283, dagreParam284) {
  dagreParam284.out
    ? dagreParam284.in
      ? dagreParam282[
          dagreParam284.out - dagreParam284.in + dagreParam283
        ].enqueue(dagreParam284)
      : dagreParam282[dagreParam282.length - 1].enqueue(dagreParam284)
    : dagreParam282[0].enqueue(dagreParam284);
}
function dagreHelper32(dagreParam127) {
  _baseUniqS(
    dagreParam127.graph().acyclicer === "greedy"
      ? dagreHelper27(dagreParam127, dagreHelper155(dagreParam127))
      : dagreHelper33(dagreParam127),
    function (dagreParam256) {
      var dagreValue368 = dagreParam127.edge(dagreParam256);
      dagreParam127.removeEdge(dagreParam256);
      dagreValue368.forwardName = dagreParam256.name;
      dagreValue368.reversed = true;
      dagreParam127.setEdge(
        dagreParam256.w,
        dagreParam256.v,
        dagreValue368,
        dagreHelper23("rev"),
      );
    },
  );
  function dagreHelper155(dagreParam364) {
    return function (dagreParam429) {
      return dagreParam364.edge(dagreParam429).weight;
    };
  }
}
function dagreHelper33(dagreParam118) {
  var dagreValue220 = [],
    dagreValue221 = {},
    dagreValue222 = {};
  function dagreHelper154(dagreParam170) {
    Object.prototype.hasOwnProperty.call(dagreValue222, dagreParam170) ||
      ((dagreValue222[dagreParam170] = true),
      (dagreValue221[dagreParam170] = true),
      _baseUniqS(
        dagreParam118.outEdges(dagreParam170),
        function (dagreParam343) {
          Object.prototype.hasOwnProperty.call(dagreValue221, dagreParam343.w)
            ? dagreValue220.push(dagreParam343)
            : dagreHelper154(dagreParam343.w);
        },
      ),
      delete dagreValue221[dagreParam170]);
  }
  return (_baseUniqS(dagreParam118.nodes(), dagreHelper154), dagreValue220);
}
function dagreHelper34(dagreParam181) {
  _baseUniqS(dagreParam181.edges(), function (dagreParam224) {
    var dagreValue334 = dagreParam181.edge(dagreParam224);
    if (dagreValue334.reversed) {
      dagreParam181.removeEdge(dagreParam224);
      var dagreValue335 = dagreValue334.forwardName;
      delete dagreValue334.reversed;
      delete dagreValue334.forwardName;
      dagreParam181.setEdge(
        dagreParam224.w,
        dagreParam224.v,
        dagreValue334,
        dagreValue335,
      );
    }
  });
}
function dagreHelper35(
  dagreParam312,
  dagreParam313,
  dagreParam314,
  dagreParam315,
) {
  var dagreValue398;
  do dagreValue398 = dagreHelper23(dagreParam315);
  while (dagreParam312.hasNode(dagreValue398));
  return (
    (dagreParam314.dummy = dagreParam313),
    dagreParam312.setNode(dagreValue398, dagreParam314),
    dagreValue398
  );
}
function dagreHelper36(dagreParam103) {
  var dagreValue189 = new Graphlib().setGraph(dagreParam103.graph());
  return (
    _baseUniqS(dagreParam103.nodes(), function (dagreParam430) {
      dagreValue189.setNode(dagreParam430, dagreParam103.node(dagreParam430));
    }),
    _baseUniqS(dagreParam103.edges(), function (dagreParam189) {
      var dagreValue306 = dagreValue189.edge(
          dagreParam189.v,
          dagreParam189.w,
        ) || {
          weight: 0,
          minlen: 1,
        },
        dagreValue307 = dagreParam103.edge(dagreParam189);
      dagreValue189.setEdge(dagreParam189.v, dagreParam189.w, {
        weight: dagreValue306.weight + dagreValue307.weight,
        minlen: Math.max(dagreValue306.minlen, dagreValue307.minlen),
      });
    }),
    dagreValue189
  );
}
function dagreHelper37(dagreParam154) {
  var dagreValue266 = new Graphlib({
    multigraph: dagreParam154.isMultigraph(),
  }).setGraph(dagreParam154.graph());
  return (
    _baseUniqS(dagreParam154.nodes(), function (dagreParam378) {
      dagreParam154.children(dagreParam378).length ||
        dagreValue266.setNode(dagreParam378, dagreParam154.node(dagreParam378));
    }),
    _baseUniqS(dagreParam154.edges(), function (dagreParam431) {
      dagreValue266.setEdge(dagreParam431, dagreParam154.edge(dagreParam431));
    }),
    dagreValue266
  );
}
function dagreHelper38(dagreParam83, dagreParam84) {
  var dagreValue163 = dagreParam83.x,
    dagreValue164 = dagreParam83.y,
    dagreValue165 = dagreParam84.x - dagreValue163,
    dagreValue166 = dagreParam84.y - dagreValue164,
    dagreValue167 = dagreParam83.width / 2,
    dagreValue168 = dagreParam83.height / 2;
  if (!dagreValue165 && !dagreValue166)
    throw Error("Not possible to find intersection inside of the rectangle");
  var dagreValue169, dagreValue170;
  return (
    Math.abs(dagreValue166) * dagreValue167 >
    Math.abs(dagreValue165) * dagreValue168
      ? (dagreValue166 < 0 && (dagreValue168 = -dagreValue168),
        (dagreValue169 = (dagreValue168 * dagreValue165) / dagreValue166),
        (dagreValue170 = dagreValue168))
      : (dagreValue165 < 0 && (dagreValue167 = -dagreValue167),
        (dagreValue169 = dagreValue167),
        (dagreValue170 = (dagreValue167 * dagreValue166) / dagreValue165)),
    {
      x: dagreValue163 + dagreValue169,
      y: dagreValue164 + dagreValue170,
    }
  );
}
function dagreHelper39(dagreParam190) {
  var dagreValue308 = basePickByI(
    dagreValue24(dagreHelper42(dagreParam190) + 1),
    function () {
      return [];
    },
  );
  return (
    _baseUniqS(dagreParam190.nodes(), function (dagreParam337) {
      var dagreValue410 = dagreParam190.node(dagreParam337),
        dagreValue411 = dagreValue410.rank;
      baseUniqR(dagreValue411) ||
        (dagreValue308[dagreValue411][dagreValue410.order] = dagreParam337);
    }),
    dagreValue308
  );
}
function _t(dagreParam222) {
  var dagreValue333 = dagreHelper11(
    basePickByI(dagreParam222.nodes(), function (dagreParam446) {
      return dagreParam222.node(dagreParam446).rank;
    }),
  );
  _baseUniqS(dagreParam222.nodes(), function (dagreParam372) {
    var dagreValue424 = dagreParam222.node(dagreParam372);
    basePickByR(dagreValue424, "rank") && (dagreValue424.rank -= dagreValue333);
  });
}
function dagreHelper40(dagreParam81) {
  var dagreValue156 = dagreHelper11(
      basePickByI(dagreParam81.nodes(), function (dagreParam420) {
        return dagreParam81.node(dagreParam420).rank;
      }),
    ),
    dagreValue157 = [];
  _baseUniqS(dagreParam81.nodes(), function (dagreParam349) {
    var dagreValue418 = dagreParam81.node(dagreParam349).rank - dagreValue156;
    dagreValue157[dagreValue418] || (dagreValue157[dagreValue418] = []);
    dagreValue157[dagreValue418].push(dagreParam349);
  });
  var dagreValue158 = 0,
    dagreValue159 = dagreParam81.graph().nodeRankFactor;
  _baseUniqS(dagreValue157, function (dagreParam279, dagreParam280) {
    baseUniqR(dagreParam279) && dagreParam280 % dagreValue159 !== 0
      ? --dagreValue158
      : dagreValue158 &&
        _baseUniqS(dagreParam279, function (dagreParam412) {
          dagreParam81.node(dagreParam412).rank += dagreValue158;
        });
  });
}
function dagreHelper41(
  dagreParam248,
  dagreParam249,
  dagreParam250,
  dagreParam251,
) {
  var dagreValue362 = {
    width: 0,
    height: 0,
  };
  return (
    arguments.length >= 4 &&
      ((dagreValue362.rank = dagreParam250),
      (dagreValue362.order = dagreParam251)),
    dagreHelper35(dagreParam248, "border", dagreValue362, dagreParam249)
  );
}
function dagreHelper42(dagreParam292) {
  return dagreHelper10(
    basePickByI(dagreParam292.nodes(), function (dagreParam373) {
      var dagreValue425 = dagreParam292.node(dagreParam373).rank;
      if (!baseUniqR(dagreValue425)) return dagreValue425;
    }),
  );
}
function dagreHelper43(dagreParam269, dagreParam270) {
  var dagreValue377 = {
    lhs: [],
    rhs: [],
  };
  return (
    _baseUniqS(dagreParam269, function (dagreParam394) {
      dagreParam270(dagreParam394)
        ? dagreValue377.lhs.push(dagreParam394)
        : dagreValue377.rhs.push(dagreParam394);
    }),
    dagreValue377
  );
}
function dagreHelper44(dagreParam294, dagreParam295) {
  var dagreValue390 = be();
  try {
    return dagreParam295();
  } finally {
    console.log(dagreParam294 + " time: " + (be() - dagreValue390) + "ms");
  }
}
function dagreHelper45(dagreParam486, dagreParam487) {
  return dagreParam487();
}
function dagreHelper46(dagreParam87) {
  function dagreHelper151(dagreParam112) {
    var dagreValue211 = dagreParam87.children(dagreParam112),
      dagreValue212 = dagreParam87.node(dagreParam112);
    if (
      (dagreValue211.length && _baseUniqS(dagreValue211, dagreHelper151),
      Object.prototype.hasOwnProperty.call(dagreValue212, "minRank"))
    ) {
      dagreValue212.borderLeft = [];
      dagreValue212.borderRight = [];
      for (
        var dagreValue213 = dagreValue212.minRank,
          dagreValue214 = dagreValue212.maxRank + 1;
        dagreValue213 < dagreValue214;
        ++dagreValue213
      ) {
        dagreHelper47(
          dagreParam87,
          "borderLeft",
          "_bl",
          dagreParam112,
          dagreValue212,
          dagreValue213,
        );
        dagreHelper47(
          dagreParam87,
          "borderRight",
          "_br",
          dagreParam112,
          dagreValue212,
          dagreValue213,
        );
      }
    }
  }
  _baseUniqS(dagreParam87.children(), dagreHelper151);
}
function dagreHelper47(
  dagreParam195,
  dagreParam196,
  dagreParam197,
  dagreParam198,
  dagreParam199,
  dagreParam200,
) {
  var dagreValue312 = {
      width: 0,
      height: 0,
      rank: dagreParam200,
      borderType: dagreParam196,
    },
    dagreValue313 = dagreParam199[dagreParam196][dagreParam200 - 1],
    dagreValue314 = dagreHelper35(
      dagreParam195,
      "border",
      dagreValue312,
      dagreParam197,
    );
  dagreParam199[dagreParam196][dagreParam200] = dagreValue314;
  dagreParam195.setParent(dagreValue314, dagreParam198);
  dagreValue313 &&
    dagreParam195.setEdge(dagreValue313, dagreValue314, {
      weight: 1,
    });
}
function dagreHelper48(dagreParam338) {
  var dagreValue412 = dagreParam338.graph().rankdir.toLowerCase();
  (dagreValue412 === "lr" || dagreValue412 === "rl") &&
    dagreHelper50(dagreParam338);
}
function dagreHelper49(dagreParam268) {
  var dagreValue376 = dagreParam268.graph().rankdir.toLowerCase();
  (dagreValue376 === "bt" || dagreValue376 === "rl") &&
    dagreHelper52(dagreParam268);
  (dagreValue376 === "lr" || dagreValue376 === "rl") &&
    (dagreHelper54(dagreParam268), dagreHelper50(dagreParam268));
}
function dagreHelper50(dagreParam289) {
  _baseUniqS(dagreParam289.nodes(), function (dagreParam481) {
    dagreHelper51(dagreParam289.node(dagreParam481));
  });
  _baseUniqS(dagreParam289.edges(), function (dagreParam473) {
    dagreHelper51(dagreParam289.edge(dagreParam473));
  });
}
function dagreHelper51(dagreParam370) {
  var dagreValue422 = dagreParam370.width;
  dagreParam370.width = dagreParam370.height;
  dagreParam370.height = dagreValue422;
}
function dagreHelper52(dagreParam204) {
  _baseUniqS(dagreParam204.nodes(), function (dagreParam482) {
    dagreHelper53(dagreParam204.node(dagreParam482));
  });
  _baseUniqS(dagreParam204.edges(), function (dagreParam305) {
    var dagreValue394 = dagreParam204.edge(dagreParam305);
    _baseUniqS(dagreValue394.points, dagreHelper53);
    Object.prototype.hasOwnProperty.call(dagreValue394, "y") &&
      dagreHelper53(dagreValue394);
  });
}
function dagreHelper53(dagreParam490) {
  dagreParam490.y = -dagreParam490.y;
}
function dagreHelper54(dagreParam205) {
  _baseUniqS(dagreParam205.nodes(), function (dagreParam483) {
    dagreHelper55(dagreParam205.node(dagreParam483));
  });
  _baseUniqS(dagreParam205.edges(), function (dagreParam306) {
    var dagreValue395 = dagreParam205.edge(dagreParam306);
    _baseUniqS(dagreValue395.points, dagreHelper55);
    Object.prototype.hasOwnProperty.call(dagreValue395, "x") &&
      dagreHelper55(dagreValue395);
  });
}
function dagreHelper55(dagreParam400) {
  var dagreValue428 = dagreParam400.x;
  dagreParam400.x = dagreParam400.y;
  dagreParam400.y = dagreValue428;
}
function dagreHelper56(dagreParam331) {
  dagreParam331.graph().dummyChains = [];
  _baseUniqS(dagreParam331.edges(), function (dagreParam484) {
    dagreHelper57(dagreParam331, dagreParam484);
  });
}
function dagreHelper57(dagreParam36, dagreParam37) {
  var dagreValue77 = dagreParam37.v,
    dagreValue78 = dagreParam36.node(dagreValue77).rank,
    dagreValue79 = dagreParam37.w,
    dagreValue80 = dagreParam36.node(dagreValue79).rank,
    dagreValue81 = dagreParam37.name,
    dagreValue82 = dagreParam36.edge(dagreParam37),
    dagreValue83 = dagreValue82.labelRank;
  if (dagreValue80 !== dagreValue78 + 1) {
    dagreParam36.removeEdge(dagreParam37);
    var dagreValue84 = undefined,
      dagreValue85,
      dagreValue86;
    for (
      dagreValue86 = 0, ++dagreValue78;
      dagreValue78 < dagreValue80;
      ++dagreValue86, ++dagreValue78
    ) {
      dagreValue82.points = [];
      dagreValue84 = {
        width: 0,
        height: 0,
        edgeLabel: dagreValue82,
        edgeObj: dagreParam37,
        rank: dagreValue78,
      };
      dagreValue85 = dagreHelper35(dagreParam36, "edge", dagreValue84, "_d");
      dagreValue78 === dagreValue83 &&
        ((dagreValue84.width = dagreValue82.width),
        (dagreValue84.height = dagreValue82.height),
        (dagreValue84.dummy = "edge-label"),
        (dagreValue84.labelpos = dagreValue82.labelpos));
      dagreParam36.setEdge(
        dagreValue77,
        dagreValue85,
        {
          weight: dagreValue82.weight,
        },
        dagreValue81,
      );
      dagreValue86 === 0 && dagreParam36.graph().dummyChains.push(dagreValue85);
      dagreValue77 = dagreValue85;
    }
    dagreParam36.setEdge(
      dagreValue77,
      dagreValue79,
      {
        weight: dagreValue82.weight,
      },
      dagreValue81,
    );
  }
}
function dagreHelper58(dagreParam76) {
  _baseUniqS(dagreParam76.graph().dummyChains, function (dagreParam89) {
    var dagreValue175 = dagreParam76.node(dagreParam89),
      dagreValue176 = dagreValue175.edgeLabel,
      dagreValue177;
    for (
      dagreParam76.setEdge(dagreValue175.edgeObj, dagreValue176);
      dagreValue175.dummy;

    ) {
      dagreValue177 = dagreParam76.successors(dagreParam89)[0];
      dagreParam76.removeNode(dagreParam89);
      dagreValue176.points.push({
        x: dagreValue175.x,
        y: dagreValue175.y,
      });
      dagreValue175.dummy === "edge-label" &&
        ((dagreValue176.x = dagreValue175.x),
        (dagreValue176.y = dagreValue175.y),
        (dagreValue176.width = dagreValue175.width),
        (dagreValue176.height = dagreValue175.height));
      dagreParam89 = dagreValue177;
      dagreValue175 = dagreParam76.node(dagreParam89);
    }
  });
}
function dagreHelper59(dagreParam115) {
  var dagreValue216 = {};
  function dagreHelper153(dagreParam135) {
    var dagreValue248 = dagreParam115.node(dagreParam135);
    if (Object.prototype.hasOwnProperty.call(dagreValue216, dagreParam135))
      return dagreValue248.rank;
    dagreValue216[dagreParam135] = true;
    var dagreValue249 = dagreHelper11(
      basePickByI(
        dagreParam115.outEdges(dagreParam135),
        function (dagreParam395) {
          return (
            dagreHelper153(dagreParam395.w) -
            dagreParam115.edge(dagreParam395).minlen
          );
        },
      ),
    );
    return (
      (dagreValue249 === 1 / 0 || dagreValue249 == null) && (dagreValue249 = 0),
      (dagreValue248.rank = dagreValue249)
    );
  }
  _baseUniqS(dagreParam115.sources(), dagreHelper153);
}
function dagreHelper60(dagreParam354, dagreParam355) {
  return (
    dagreParam354.node(dagreParam355.w).rank -
    dagreParam354.node(dagreParam355.v).rank -
    dagreParam354.edge(dagreParam355).minlen
  );
}
function dagreHelper61(dagreParam178) {
  var dagreValue289 = new Graphlib({
      directed: false,
    }),
    dagreValue290 = dagreParam178.nodes()[0],
    dagreValue291 = dagreParam178.nodeCount();
  dagreValue289.setNode(dagreValue290, {});
  for (
    var dagreValue292, dagreValue293;
    dagreHelper62(dagreValue289, dagreParam178) < dagreValue291;

  ) {
    dagreValue292 = dagreHelper63(dagreValue289, dagreParam178);
    dagreValue293 = dagreValue289.hasNode(dagreValue292.v)
      ? dagreHelper60(dagreParam178, dagreValue292)
      : -dagreHelper60(dagreParam178, dagreValue292);
    dagreHelper64(dagreValue289, dagreParam178, dagreValue293);
  }
  return dagreValue289;
}
function dagreHelper62(dagreParam152, dagreParam153) {
  function dagreHelper156(dagreParam207) {
    _baseUniqS(
      dagreParam153.nodeEdges(dagreParam207),
      function (dagreParam246) {
        var dagreValue360 = dagreParam246.v,
          dagreValue361 =
            dagreParam207 === dagreValue360 ? dagreParam246.w : dagreValue360;
        !dagreParam152.hasNode(dagreValue361) &&
          !dagreHelper60(dagreParam153, dagreParam246) &&
          (dagreParam152.setNode(dagreValue361, {}),
          dagreParam152.setEdge(dagreParam207, dagreValue361, {}),
          dagreHelper156(dagreValue361));
      },
    );
  }
  return (
    _baseUniqS(dagreParam152.nodes(), dagreHelper156),
    dagreParam152.nodeCount()
  );
}
function dagreHelper63(dagreParam307, dagreParam308) {
  return dagreHelper12(dagreParam308.edges(), function (dagreParam374) {
    if (
      dagreParam307.hasNode(dagreParam374.v) !==
      dagreParam307.hasNode(dagreParam374.w)
    )
      return dagreHelper60(dagreParam308, dagreParam374);
  });
}
function dagreHelper64(dagreParam356, dagreParam357, dagreParam358) {
  _baseUniqS(dagreParam356.nodes(), function (dagreParam467) {
    dagreParam357.node(dagreParam467).rank += dagreParam358;
  });
}
isArrayLikeObjectP(1);
isArrayLikeObjectP(1);
dagreHelper65.CycleException = dagreHelper66;
function dagreHelper65(dagreParam110) {
  var dagreValue203 = {},
    dagreValue204 = {},
    dagreValue205 = [];
  function dagreHelper152(dagreParam177) {
    if (Object.prototype.hasOwnProperty.call(dagreValue204, dagreParam177))
      throw new dagreHelper66();
    Object.prototype.hasOwnProperty.call(dagreValue203, dagreParam177) ||
      ((dagreValue204[dagreParam177] = true),
      (dagreValue203[dagreParam177] = true),
      _baseUniqS(dagreParam110.predecessors(dagreParam177), dagreHelper152),
      delete dagreValue204[dagreParam177],
      dagreValue205.push(dagreParam177));
  }
  if (
    (_baseUniqS(dagreParam110.sinks(), dagreHelper152),
    dagreHelper22(dagreValue203) !== dagreParam110.nodeCount())
  )
    throw new dagreHelper66();
  return dagreValue205;
}
function dagreHelper66() {}
dagreHelper66.prototype = Error();
function dagreHelper67(dagreParam141, dagreParam142, dagreParam143) {
  isArrayLikeObjectV(dagreParam142) || (dagreParam142 = [dagreParam142]);
  var dagreValue252 = (
      dagreParam141.isDirected()
        ? dagreParam141.successors
        : dagreParam141.neighbors
    ).bind(dagreParam141),
    dagreValue253 = [],
    dagreValue254 = {};
  return (
    _baseUniqS(dagreParam142, function (dagreParam296) {
      if (!dagreParam141.hasNode(dagreParam296))
        throw Error("Graph does not have node: " + dagreParam296);
      dagreHelper68(
        dagreParam141,
        dagreParam296,
        dagreParam143 === "post",
        dagreValue254,
        dagreValue252,
        dagreValue253,
      );
    }),
    dagreValue253
  );
}
function dagreHelper68(
  dagreParam212,
  dagreParam213,
  dagreParam214,
  dagreParam215,
  dagreParam216,
  dagreParam217,
) {
  Object.prototype.hasOwnProperty.call(dagreParam215, dagreParam213) ||
    ((dagreParam215[dagreParam213] = true),
    dagreParam214 || dagreParam217.push(dagreParam213),
    _baseUniqS(dagreParam216(dagreParam213), function (dagreParam450) {
      dagreHelper68(
        dagreParam212,
        dagreParam450,
        dagreParam214,
        dagreParam215,
        dagreParam216,
        dagreParam217,
      );
    }),
    dagreParam214 && dagreParam217.push(dagreParam213));
}
function dagreHelper69(dagreParam451, dagreParam452) {
  return dagreHelper67(dagreParam451, dagreParam452, "post");
}
function dagreHelper70(dagreParam454, dagreParam455) {
  return dagreHelper67(dagreParam454, dagreParam455, "pre");
}
dagreHelper71.initLowLimValues = dagreHelper75;
dagreHelper71.initCutValues = dagreHelper72;
dagreHelper71.calcCutValue = dagreHelper74;
dagreHelper71.leaveEdge = dagreHelper77;
dagreHelper71.enterEdge = dagreHelper78;
dagreHelper71.exchangeEdges = dagreHelper79;
function dagreHelper71(dagreParam274) {
  dagreParam274 = dagreHelper36(dagreParam274);
  dagreHelper59(dagreParam274);
  var dagreValue379 = dagreHelper61(dagreParam274);
  dagreHelper75(dagreValue379);
  dagreHelper72(dagreValue379, dagreParam274);
  for (
    var dagreValue380, dagreValue381;
    (dagreValue380 = dagreHelper77(dagreValue379));

  ) {
    dagreValue381 = dagreHelper78(dagreValue379, dagreParam274, dagreValue380);
    dagreHelper79(dagreValue379, dagreParam274, dagreValue380, dagreValue381);
  }
}
function dagreHelper72(dagreParam290, dagreParam291) {
  var dagreValue388 = dagreHelper69(dagreParam290, dagreParam290.nodes());
  dagreValue388 = dagreValue388.slice(0, dagreValue388.length - 1);
  _baseUniqS(dagreValue388, function (dagreParam475) {
    dagreHelper73(dagreParam290, dagreParam291, dagreParam475);
  });
}
function dagreHelper73(dagreParam350, dagreParam351, dagreParam352) {
  var dagreValue419 = dagreParam350.node(dagreParam352).parent;
  dagreParam350.edge(dagreParam352, dagreValue419).cutvalue = dagreHelper74(
    dagreParam350,
    dagreParam351,
    dagreParam352,
  );
}
function dagreHelper74(dagreParam68, dagreParam69, dagreParam70) {
  var dagreValue143 = dagreParam68.node(dagreParam70).parent,
    dagreValue144 = true,
    dagreValue145 = dagreParam69.edge(dagreParam70, dagreValue143),
    dagreValue146 = 0;
  return (
    (dagreValue145 ||=
      ((dagreValue144 = false),
      dagreParam69.edge(dagreValue143, dagreParam70))),
    (dagreValue146 = dagreValue145.weight),
    _baseUniqS(dagreParam69.nodeEdges(dagreParam70), function (dagreParam151) {
      var dagreValue261 = dagreParam151.v === dagreParam70,
        dagreValue262 = dagreValue261 ? dagreParam151.w : dagreParam151.v;
      if (dagreValue262 !== dagreValue143) {
        var dagreValue263 = dagreValue261 === dagreValue144,
          dagreValue264 = dagreParam69.edge(dagreParam151).weight;
        if (
          ((dagreValue146 += dagreValue263 ? dagreValue264 : -dagreValue264),
          dagreHelper81(dagreParam68, dagreParam70, dagreValue262))
        ) {
          var dagreValue265 = dagreParam68.edge(
            dagreParam70,
            dagreValue262,
          ).cutvalue;
          dagreValue146 += dagreValue263 ? -dagreValue265 : dagreValue265;
        }
      }
    }),
    dagreValue146
  );
}
function dagreHelper75(dagreParam359, dagreParam360) {
  arguments.length < 2 && (dagreParam360 = dagreParam359.nodes()[0]);
  dagreHelper76(dagreParam359, {}, 1, dagreParam360);
}
function dagreHelper76(
  dagreParam136,
  dagreParam137,
  dagreParam138,
  dagreParam139,
  dagreParam140,
) {
  var dagreValue250 = dagreParam138,
    dagreValue251 = dagreParam136.node(dagreParam139);
  return (
    (dagreParam137[dagreParam139] = true),
    _baseUniqS(
      dagreParam136.neighbors(dagreParam139),
      function (dagreParam344) {
        Object.prototype.hasOwnProperty.call(dagreParam137, dagreParam344) ||
          (dagreParam138 = dagreHelper76(
            dagreParam136,
            dagreParam137,
            dagreParam138,
            dagreParam344,
            dagreParam139,
          ));
      },
    ),
    (dagreValue251.low = dagreValue250),
    (dagreValue251.lim = dagreParam138++),
    dagreParam140
      ? (dagreValue251.parent = dagreParam140)
      : delete dagreValue251.parent,
    dagreParam138
  );
}
function dagreHelper77(dagreParam346) {
  return basePickByO(dagreParam346.edges(), function (dagreParam421) {
    return dagreParam346.edge(dagreParam421).cutvalue < 0;
  });
}
function dagreHelper78(dagreParam95, dagreParam96, dagreParam97) {
  var dagreValue179 = dagreParam97.v,
    dagreValue180 = dagreParam97.w;
  dagreParam96.hasEdge(dagreValue179, dagreValue180) ||
    ((dagreValue179 = dagreParam97.w), (dagreValue180 = dagreParam97.v));
  var dagreValue181 = dagreParam95.node(dagreValue179),
    dagreValue182 = dagreParam95.node(dagreValue180),
    dagreValue183 = dagreValue181,
    dagreValue184 = false;
  return (
    dagreValue181.lim > dagreValue182.lim &&
      ((dagreValue183 = dagreValue182), (dagreValue184 = true)),
    dagreHelper12(
      baseUniqA(dagreParam96.edges(), function (dagreParam345) {
        return (
          dagreValue184 ===
            dagreHelper82(
              dagreParam95,
              dagreParam95.node(dagreParam345.v),
              dagreValue183,
            ) &&
          dagreValue184 !==
            dagreHelper82(
              dagreParam95,
              dagreParam95.node(dagreParam345.w),
              dagreValue183,
            )
        );
      }),
      function (dagreParam462) {
        return dagreHelper60(dagreParam96, dagreParam462);
      },
    )
  );
}
function dagreHelper79(
  dagreParam297,
  dagreParam298,
  dagreParam299,
  dagreParam300,
) {
  var dagreValue391 = dagreParam299.v,
    dagreValue392 = dagreParam299.w;
  dagreParam297.removeEdge(dagreValue391, dagreValue392);
  dagreParam297.setEdge(dagreParam300.v, dagreParam300.w, {});
  dagreHelper75(dagreParam297);
  dagreHelper72(dagreParam297, dagreParam298);
  dagreHelper80(dagreParam297, dagreParam298);
}
function dagreHelper80(dagreParam113, dagreParam114) {
  var dagreValue215 = dagreHelper70(
    dagreParam113,
    basePickByO(dagreParam113.nodes(), function (dagreParam427) {
      return !dagreParam114.node(dagreParam427).parent;
    }),
  );
  dagreValue215 = dagreValue215.slice(1);
  _baseUniqS(dagreValue215, function (dagreParam208) {
    var dagreValue326 = dagreParam113.node(dagreParam208).parent,
      dagreValue327 = dagreParam114.edge(dagreParam208, dagreValue326),
      dagreValue328 = false;
    dagreValue327 ||
      ((dagreValue327 = dagreParam114.edge(dagreValue326, dagreParam208)),
      (dagreValue328 = true));
    dagreParam114.node(dagreParam208).rank =
      dagreParam114.node(dagreValue326).rank +
      (dagreValue328 ? dagreValue327.minlen : -dagreValue327.minlen);
  });
}
function dagreHelper81(dagreParam435, dagreParam436, dagreParam437) {
  return dagreParam435.hasEdge(dagreParam436, dagreParam437);
}
function dagreHelper82(dagreParam388, dagreParam389, dagreParam390) {
  return (
    dagreParam390.low <= dagreParam389.lim &&
    dagreParam389.lim <= dagreParam390.lim
  );
}
function $t(dagreParam182) {
  switch (dagreParam182.graph().ranker) {
    case "network-simplex":
      dagreHelper84(dagreParam182);
      break;
    case "tight-tree":
      dagreHelper83(dagreParam182);
      break;
    case "longest-path":
      dagreValue30(dagreParam182);
      break;
    default:
      dagreHelper84(dagreParam182);
  }
}
var dagreValue30 = dagreHelper59;
function dagreHelper83(dagreParam488) {
  dagreHelper59(dagreParam488);
  dagreHelper61(dagreParam488);
}
function dagreHelper84(dagreParam491) {
  dagreHelper71(dagreParam491);
}
function dagreHelper85(dagreParam123) {
  var dagreValue229 = dagreHelper35(dagreParam123, "root", {}, "_root"),
    dagreValue230 = on(dagreParam123),
    dagreValue231 = dagreHelper10(baseUniqI(dagreValue230)) - 1,
    dagreValue232 = 2 * dagreValue231 + 1;
  dagreParam123.graph().nestingRoot = dagreValue229;
  _baseUniqS(dagreParam123.edges(), function (dagreParam447) {
    dagreParam123.edge(dagreParam447).minlen *= dagreValue232;
  });
  var dagreValue233 = dagreHelper87(dagreParam123) + 1;
  _baseUniqS(dagreParam123.children(), function (dagreParam456) {
    dagreHelper86(
      dagreParam123,
      dagreValue229,
      dagreValue232,
      dagreValue233,
      dagreValue231,
      dagreValue230,
      dagreParam456,
    );
  });
  dagreParam123.graph().nodeRankFactor = dagreValue232;
}
function dagreHelper86(
  dagreParam25,
  dagreParam26,
  dagreParam27,
  dagreParam28,
  dagreParam29,
  dagreParam30,
  dagreParam31,
) {
  var dagreValue70 = dagreParam25.children(dagreParam31);
  if (!dagreValue70.length) {
    dagreParam31 !== dagreParam26 &&
      dagreParam25.setEdge(dagreParam26, dagreParam31, {
        weight: 0,
        minlen: dagreParam27,
      });
    return;
  }
  var dagreValue71 = dagreHelper41(dagreParam25, "_bt"),
    dagreValue72 = dagreHelper41(dagreParam25, "_bb"),
    dagreValue73 = dagreParam25.node(dagreParam31);
  dagreParam25.setParent(dagreValue71, dagreParam31);
  dagreValue73.borderTop = dagreValue71;
  dagreParam25.setParent(dagreValue72, dagreParam31);
  dagreValue73.borderBottom = dagreValue72;
  _baseUniqS(dagreValue70, function (dagreParam109) {
    dagreHelper86(
      dagreParam25,
      dagreParam26,
      dagreParam27,
      dagreParam28,
      dagreParam29,
      dagreParam30,
      dagreParam109,
    );
    var dagreValue198 = dagreParam25.node(dagreParam109),
      dagreValue199 = dagreValue198.borderTop
        ? dagreValue198.borderTop
        : dagreParam109,
      dagreValue200 = dagreValue198.borderBottom
        ? dagreValue198.borderBottom
        : dagreParam109,
      dagreValue201 = dagreValue198.borderTop ? dagreParam28 : 2 * dagreParam28,
      dagreValue202 =
        dagreValue199 === dagreValue200
          ? dagreParam29 - dagreParam30[dagreParam31] + 1
          : 1;
    dagreParam25.setEdge(dagreValue71, dagreValue199, {
      weight: dagreValue201,
      minlen: dagreValue202,
      nestingEdge: true,
    });
    dagreParam25.setEdge(dagreValue200, dagreValue72, {
      weight: dagreValue201,
      minlen: dagreValue202,
      nestingEdge: true,
    });
  });
  dagreParam25.parent(dagreParam31) ||
    dagreParam25.setEdge(dagreParam26, dagreValue71, {
      weight: 0,
      minlen: dagreParam29 + dagreParam30[dagreParam31],
    });
}
function on(dagreParam158) {
  var dagreValue274 = {};
  function dagreHelper157(dagreParam261, dagreParam262) {
    var dagreValue372 = dagreParam158.children(dagreParam261);
    dagreValue372 &&
      dagreValue372.length &&
      _baseUniqS(dagreValue372, function (dagreParam468) {
        dagreHelper157(dagreParam468, dagreParam262 + 1);
      });
    dagreValue274[dagreParam261] = dagreParam262;
  }
  return (
    _baseUniqS(dagreParam158.children(), function (dagreParam489) {
      dagreHelper157(dagreParam489, 1);
    }),
    dagreValue274
  );
}
function dagreHelper87(dagreParam310) {
  return _baseUniqN(
    dagreParam310.edges(),
    function (dagreParam403, dagreParam404) {
      return dagreParam403 + dagreParam310.edge(dagreParam404).weight;
    },
    0,
  );
}
function dagreHelper88(dagreParam230) {
  var dagreValue345 = dagreParam230.graph();
  dagreParam230.removeNode(dagreValue345.nestingRoot);
  delete dagreValue345.nestingRoot;
  _baseUniqS(dagreParam230.edges(), function (dagreParam387) {
    dagreParam230.edge(dagreParam387).nestingEdge &&
      dagreParam230.removeEdge(dagreParam387);
  });
}
function dagreHelper89(dagreParam129, dagreParam130, dagreParam131) {
  var dagreValue244 = {},
    dagreValue245;
  _baseUniqS(dagreParam131, function (dagreParam164) {
    for (
      var dagreValue278 = dagreParam129.parent(dagreParam164),
        dagreValue279,
        dagreValue280;
      dagreValue278;

    ) {
      if (
        ((dagreValue279 = dagreParam129.parent(dagreValue278)),
        dagreValue279
          ? ((dagreValue280 = dagreValue244[dagreValue279]),
            (dagreValue244[dagreValue279] = dagreValue278))
          : ((dagreValue280 = dagreValue245), (dagreValue245 = dagreValue278)),
        dagreValue280 && dagreValue280 !== dagreValue278)
      ) {
        dagreParam130.setEdge(dagreValue280, dagreValue278);
        return;
      }
      dagreValue278 = dagreValue279;
    }
  });
}
function dagreHelper90(dagreParam11, dagreParam12, dagreParam13) {
  var dagreValue55 = dagreHelper91(dagreParam11),
    dagreValue56 = new Graphlib({
      compound: true,
    })
      .setGraph({
        root: dagreValue55,
      })
      .setDefaultNodeLabel(function (dagreParam453) {
        return dagreParam11.node(dagreParam453);
      });
  return (
    _baseUniqS(dagreParam11.nodes(), function (dagreParam47) {
      var dagreValue99 = dagreParam11.node(dagreParam47),
        dagreValue100 = dagreParam11.parent(dagreParam47);
      (dagreValue99.rank === dagreParam12 ||
        (dagreValue99.minRank <= dagreParam12 &&
          dagreParam12 <= dagreValue99.maxRank)) &&
        (dagreValue56.setNode(dagreParam47),
        dagreValue56.setParent(dagreParam47, dagreValue100 || dagreValue55),
        _baseUniqS(
          dagreParam11[dagreParam13](dagreParam47),
          function (dagreParam226) {
            var dagreValue337 =
                dagreParam226.v === dagreParam47
                  ? dagreParam226.w
                  : dagreParam226.v,
              dagreValue338 = dagreValue56.edge(dagreValue337, dagreParam47),
              dagreValue339 = baseUniqR(dagreValue338)
                ? 0
                : dagreValue338.weight;
            dagreValue56.setEdge(dagreValue337, dagreParam47, {
              weight: dagreParam11.edge(dagreParam226).weight + dagreValue339,
            });
          },
        ),
        Object.prototype.hasOwnProperty.call(dagreValue99, "minRank") &&
          dagreValue56.setNode(dagreParam47, {
            borderLeft: dagreValue99.borderLeft[dagreParam12],
            borderRight: dagreValue99.borderRight[dagreParam12],
          }));
    }),
    dagreValue56
  );
}
function dagreHelper91(dagreParam376) {
  for (
    var dagreValue427;
    dagreParam376.hasNode((dagreValue427 = dagreHelper23("_root")));

  );
  return dagreValue427;
}
function dagreHelper92(dagreParam333, dagreParam334) {
  for (
    var dagreValue407 = 0, dagreValue408 = 1;
    dagreValue408 < dagreParam334.length;
    ++dagreValue408
  )
    dagreValue407 += dagreHelper93(
      dagreParam333,
      dagreParam334[dagreValue408 - 1],
      dagreParam334[dagreValue408],
    );
  return dagreValue407;
}
function dagreHelper93(dagreParam17, dagreParam18, dagreParam19) {
  for (
    var dagreValue61 = dagreHelper25(
        dagreParam19,
        basePickByI(dagreParam19, function (dagreParam457, dagreParam458) {
          return dagreParam458;
        }),
      ),
      dagreValue62 = basePickByL(
        basePickByI(dagreParam18, function (dagreParam223) {
          return dagreValue26(
            basePickByI(
              dagreParam17.outEdges(dagreParam223),
              function (dagreParam347) {
                return {
                  pos: dagreValue61[dagreParam347.w],
                  weight: dagreParam17.edge(dagreParam347).weight,
                };
              },
            ),
            "pos",
          );
        }),
      ),
      dagreValue63 = 1;
    dagreValue63 < dagreParam19.length;

  )
    dagreValue63 <<= 1;
  var dagreValue64 = 2 * dagreValue63 - 1;
  --dagreValue63;
  var dagreValue65 = basePickByI(Array(dagreValue64), function () {
      return 0;
    }),
    dagreValue66 = 0;
  return (
    _baseUniqS(
      dagreValue62.forEach(function (item) {
        var dagreValue321 = item.pos + dagreValue63;
        dagreValue65[dagreValue321] += item.weight;
        for (var dagreValue322 = 0; dagreValue321 > 0; ) {
          dagreValue321 % 2 &&
            (dagreValue322 += dagreValue65[dagreValue321 + 1]);
          dagreValue321 = (dagreValue321 - 1) >> 1;
          dagreValue65[dagreValue321] += item.weight;
        }
        dagreValue66 += item.weight * dagreValue322;
      }),
    ),
    dagreValue66
  );
}
function dagreHelper94(dagreParam65) {
  var dagreValue139 = {},
    dagreValue140 = baseUniqA(dagreParam65.nodes(), function (dagreParam405) {
      return !dagreParam65.children(dagreParam405).length;
    }),
    dagreValue141 = basePickByI(
      dagreValue24(
        dagreHelper10(
          basePickByI(dagreValue140, function (dagreParam399) {
            return dagreParam65.node(dagreParam399).rank;
          }),
        ) + 1,
      ),
      function () {
        return [];
      },
    );
  function dagreHelper150(dagreParam339) {
    basePickByR(dagreValue139, dagreParam339) ||
      ((dagreValue139[dagreParam339] = true),
      dagreValue141[dagreParam65.node(dagreParam339).rank].push(dagreParam339),
      _baseUniqS(dagreParam65.successors(dagreParam339), dagreHelper150));
  }
  return (
    _baseUniqS(
      dagreValue26(dagreValue140, function (dagreParam422) {
        return dagreParam65.node(dagreParam422).rank;
      }),
      dagreHelper150,
    ),
    dagreValue141
  );
}
function dagreHelper95(dagreParam71, dagreParam72) {
  return basePickByI(dagreParam72, function (dagreParam79) {
    var dagreValue154 = dagreParam71.inEdges(dagreParam79);
    if (dagreValue154.length) {
      var dagreValue155 = _baseUniqN(
        dagreValue154,
        function (dagreParam218, dagreParam219) {
          var dagreValue330 = dagreParam71.edge(dagreParam219),
            dagreValue331 = dagreParam71.node(dagreParam219.v);
          return {
            sum: dagreParam218.sum + dagreValue330.weight * dagreValue331.order,
            weight: dagreParam218.weight + dagreValue330.weight,
          };
        },
        {
          sum: 0,
          weight: 0,
        },
      );
      return {
        v: dagreParam79,
        barycenter: dagreValue155.sum / dagreValue155.weight,
        weight: dagreValue155.weight,
      };
    } else
      return {
        v: dagreParam79,
      };
  });
}
function dagreHelper96(dagreParam74, dagreParam75) {
  var dagreValue152 = {};
  return (
    _baseUniqS(dagreParam74, function (dagreParam233, dagreParam234) {
      var dagreValue348 = (dagreValue152[dagreParam233.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [dagreParam233.v],
        i: dagreParam234,
      });
      baseUniqR(dagreParam233.barycenter) ||
        ((dagreValue348.barycenter = dagreParam233.barycenter),
        (dagreValue348.weight = dagreParam233.weight));
    }),
    _baseUniqS(dagreParam75.edges(), function (dagreParam309) {
      var dagreValue396 = dagreValue152[dagreParam309.v],
        dagreValue397 = dagreValue152[dagreParam309.w];
      !baseUniqR(dagreValue396) &&
        !baseUniqR(dagreValue397) &&
        (dagreValue397.indegree++,
        dagreValue396.out.push(dagreValue152[dagreParam309.w]));
    }),
    _n(
      baseUniqA(dagreValue152, function (dagreParam438) {
        return !dagreParam438.indegree;
      }),
    )
  );
}
function _n(dagreParam48) {
  var dagreValue101 = [];
  function dagreHelper148(dagreParam241) {
    return function (dagreParam281) {
      dagreParam281.merged ||
        ((baseUniqR(dagreParam281.barycenter) ||
          baseUniqR(dagreParam241.barycenter) ||
          dagreParam281.barycenter >= dagreParam241.barycenter) &&
          dagreHelper97(dagreParam241, dagreParam281));
    };
  }
  function dagreHelper149(dagreParam332) {
    return function (dagreParam379) {
      dagreParam379.in.push(dagreParam332);
      --dagreParam379.indegree === 0 && dagreParam48.push(dagreParam379);
    };
  }
  for (; dagreParam48.length; ) {
    var dagreValue102 = dagreParam48.pop();
    dagreValue101.push(dagreValue102);
    _baseUniqS(dagreValue102.in.reverse(), dagreHelper148(dagreValue102));
    _baseUniqS(dagreValue102.out, dagreHelper149(dagreValue102));
  }
  return basePickByI(
    baseUniqA(dagreValue101, function (dagreParam465) {
      return !dagreParam465.merged;
    }),
    function (dagreParam377) {
      return dagreValue21(dagreParam377, ["vs", "i", "barycenter", "weight"]);
    },
  );
}
function dagreHelper97(dagreParam132, dagreParam133) {
  var dagreValue246 = 0,
    dagreValue247 = 0;
  dagreParam132.weight &&
    ((dagreValue246 += dagreParam132.barycenter * dagreParam132.weight),
    (dagreValue247 += dagreParam132.weight));
  dagreParam133.weight &&
    ((dagreValue246 += dagreParam133.barycenter * dagreParam133.weight),
    (dagreValue247 += dagreParam133.weight));
  dagreParam132.vs = dagreParam133.vs.concat(dagreParam132.vs);
  dagreParam132.barycenter = dagreValue246 / dagreValue247;
  dagreParam132.weight = dagreValue247;
  dagreParam132.i = Math.min(dagreParam133.i, dagreParam132.i);
  dagreParam133.merged = true;
}
function dagreHelper98(dagreParam53, dagreParam54) {
  var dagreValue121 = dagreHelper43(dagreParam53, function (dagreParam353) {
      return Object.prototype.hasOwnProperty.call(dagreParam353, "barycenter");
    }),
    dagreValue122 = dagreValue121.lhs,
    dagreValue123 = dagreValue26(dagreValue121.rhs, function (dagreParam476) {
      return -dagreParam476.i;
    }),
    dagreValue124 = [],
    dagreValue125 = 0,
    dagreValue126 = 0,
    dagreValue127 = 0;
  dagreValue122.sort(dagreHelper100(!!dagreParam54));
  dagreValue127 = dagreHelper99(dagreValue124, dagreValue123, dagreValue127);
  _baseUniqS(dagreValue122, function (dagreParam255) {
    dagreValue127 += dagreParam255.vs.length;
    dagreValue124.push(dagreParam255.vs);
    dagreValue125 += dagreParam255.barycenter * dagreParam255.weight;
    dagreValue126 += dagreParam255.weight;
    dagreValue127 = dagreHelper99(dagreValue124, dagreValue123, dagreValue127);
  });
  var dagreValue128 = {
    vs: basePickByL(dagreValue124),
  };
  return (
    dagreValue126 &&
      ((dagreValue128.barycenter = dagreValue125 / dagreValue126),
      (dagreValue128.weight = dagreValue126)),
    dagreValue128
  );
}
function dagreHelper99(dagreParam325, dagreParam326, dagreParam327) {
  for (
    var dagreValue406;
    dagreParam326.length &&
    (dagreValue406 = basePickByS(dagreParam326)).i <= dagreParam327;

  ) {
    dagreParam326.pop();
    dagreParam325.push(dagreValue406.vs);
    dagreParam327++;
  }
  return dagreParam327;
}
function dagreHelper100(dagreParam211) {
  return function (dagreParam238, dagreParam239) {
    return dagreParam238.barycenter < dagreParam239.barycenter
      ? -1
      : dagreParam238.barycenter > dagreParam239.barycenter
        ? 1
        : dagreParam211
          ? dagreParam239.i - dagreParam238.i
          : dagreParam238.i - dagreParam239.i;
  };
}
function dagreHelper101(dagreParam4, dagreParam5, dagreParam6, dagreParam7) {
  var dagreValue45 = dagreParam4.children(dagreParam5),
    dagreValue46 = dagreParam4.node(dagreParam5),
    dagreValue47 = dagreValue46 ? dagreValue46.borderLeft : undefined,
    dagreValue48 = dagreValue46 ? dagreValue46.borderRight : undefined,
    dagreValue49 = {};
  dagreValue47 &&
    (dagreValue45 = baseUniqA(dagreValue45, function (dagreParam423) {
      return dagreParam423 !== dagreValue47 && dagreParam423 !== dagreValue48;
    }));
  var dagreValue50 = dagreHelper95(dagreParam4, dagreValue45);
  _baseUniqS(dagreValue50, function (dagreParam228) {
    if (dagreParam4.children(dagreParam228.v).length) {
      var dagreValue342 = dagreHelper101(
        dagreParam4,
        dagreParam228.v,
        dagreParam6,
        dagreParam7,
      );
      dagreValue49[dagreParam228.v] = dagreValue342;
      Object.prototype.hasOwnProperty.call(dagreValue342, "barycenter") &&
        dagreHelper103(dagreParam228, dagreValue342);
    }
  });
  var dagreValue51 = dagreHelper96(dagreValue50, dagreParam6);
  dagreHelper102(dagreValue51, dagreValue49);
  var dagreValue52 = dagreHelper98(dagreValue51, dagreParam7);
  if (
    dagreValue47 &&
    ((dagreValue52.vs = basePickByL([
      dagreValue47,
      dagreValue52.vs,
      dagreValue48,
    ])),
    dagreParam4.predecessors(dagreValue47).length)
  ) {
    var dagreValue53 = dagreParam4.node(
        dagreParam4.predecessors(dagreValue47)[0],
      ),
      dagreValue54 = dagreParam4.node(
        dagreParam4.predecessors(dagreValue48)[0],
      );
    Object.prototype.hasOwnProperty.call(dagreValue52, "barycenter") ||
      ((dagreValue52.barycenter = 0), (dagreValue52.weight = 0));
    dagreValue52.barycenter =
      (dagreValue52.barycenter * dagreValue52.weight +
        dagreValue53.order +
        dagreValue54.order) /
      (dagreValue52.weight + 2);
    dagreValue52.weight += 2;
  }
  return dagreValue52;
}
function dagreHelper102(dagreParam275, dagreParam276) {
  _baseUniqS(dagreParam275, function (dagreParam324) {
    dagreParam324.vs = basePickByL(
      dagreParam324.vs.map(function (item) {
        return dagreParam276[item] ? dagreParam276[item].vs : item;
      }),
    );
  });
}
function dagreHelper103(dagreParam175, dagreParam176) {
  baseUniqR(dagreParam175.barycenter)
    ? ((dagreParam175.barycenter = dagreParam176.barycenter),
      (dagreParam175.weight = dagreParam176.weight))
    : ((dagreParam175.barycenter =
        (dagreParam175.barycenter * dagreParam175.weight +
          dagreParam176.barycenter * dagreParam176.weight) /
        (dagreParam175.weight + dagreParam176.weight)),
      (dagreParam175.weight += dagreParam176.weight));
}
function dagreHelper104(dagreParam124) {
  var dagreValue234 = dagreHelper42(dagreParam124),
    dagreValue235 = dagreHelper105(
      dagreParam124,
      dagreValue24(1, dagreValue234 + 1),
      "inEdges",
    ),
    dagreValue236 = dagreHelper105(
      dagreParam124,
      dagreValue24(dagreValue234 - 1, -1, -1),
      "outEdges",
    ),
    dagreValue237 = dagreHelper94(dagreParam124);
  dagreHelper107(dagreParam124, dagreValue237);
  for (
    var dagreValue238 = 1 / 0,
      dagreValue239,
      dagreValue240 = 0,
      dagreValue241 = 0;
    dagreValue241 < 4;
    ++dagreValue240, ++dagreValue241
  ) {
    dagreHelper106(
      dagreValue240 % 2 ? dagreValue235 : dagreValue236,
      dagreValue240 % 4 >= 2,
    );
    dagreValue237 = dagreHelper39(dagreParam124);
    var dagreValue242 = dagreHelper92(dagreParam124, dagreValue237);
    dagreValue242 < dagreValue238 &&
      ((dagreValue241 = 0),
      (dagreValue239 = dagreHelper3(dagreValue237)),
      (dagreValue238 = dagreValue242));
  }
  dagreHelper107(dagreParam124, dagreValue239);
}
function dagreHelper105(dagreParam365, dagreParam366, dagreParam367) {
  return basePickByI(dagreParam366, function (dagreParam471) {
    return dagreHelper90(dagreParam365, dagreParam471, dagreParam367);
  });
}
function dagreHelper106(dagreParam209, dagreParam210) {
  var dagreValue329 = new Graphlib();
  _baseUniqS(dagreParam209, function (dagreParam257) {
    var dagreValue369 = dagreParam257.graph().root,
      dagreValue370 = dagreHelper101(
        dagreParam257,
        dagreValue369,
        dagreValue329,
        dagreParam210,
      );
    _baseUniqS(dagreValue370.vs, function (dagreParam439, dagreParam440) {
      dagreParam257.node(dagreParam439).order = dagreParam440;
    });
    dagreHelper89(dagreParam257, dagreValue329, dagreValue370.vs);
  });
}
function dagreHelper107(dagreParam328, dagreParam329) {
  _baseUniqS(dagreParam329, function (dagreParam369) {
    _baseUniqS(dagreParam369, function (dagreParam441, dagreParam442) {
      dagreParam328.node(dagreParam441).order = dagreParam442;
    });
  });
}
function dagreHelper108(dagreParam41) {
  var dagreValue92 = dagreHelper110(dagreParam41);
  _baseUniqS(dagreParam41.graph().dummyChains, function (dagreParam50) {
    for (
      var dagreValue109 = dagreParam41.node(dagreParam50),
        dagreValue110 = dagreValue109.edgeObj,
        dagreValue111 = dagreHelper109(
          dagreParam41,
          dagreValue92,
          dagreValue110.v,
          dagreValue110.w,
        ),
        dagreValue112 = dagreValue111.path,
        dagreValue113 = dagreValue111.lca,
        dagreValue114 = 0,
        dagreValue115 = dagreValue112[dagreValue114],
        dagreValue116 = true;
      dagreParam50 !== dagreValue110.w;

    ) {
      if (((dagreValue109 = dagreParam41.node(dagreParam50)), dagreValue116)) {
        for (
          ;
          (dagreValue115 = dagreValue112[dagreValue114]) !== dagreValue113 &&
          dagreParam41.node(dagreValue115).maxRank < dagreValue109.rank;

        )
          dagreValue114++;
        dagreValue115 === dagreValue113 && (dagreValue116 = false);
      }
      if (!dagreValue116) {
        for (
          ;
          dagreValue114 < dagreValue112.length - 1 &&
          dagreParam41.node((dagreValue115 = dagreValue112[dagreValue114 + 1]))
            .minRank <= dagreValue109.rank;

        )
          dagreValue114++;
        dagreValue115 = dagreValue112[dagreValue114];
      }
      dagreParam41.setParent(dagreParam50, dagreValue115);
      dagreParam50 = dagreParam41.successors(dagreParam50)[0];
    }
  });
}
function dagreHelper109(
  dagreParam119,
  dagreParam120,
  dagreParam121,
  dagreParam122,
) {
  var dagreValue223 = [],
    dagreValue224 = [],
    dagreValue225 = Math.min(
      dagreParam120[dagreParam121].low,
      dagreParam120[dagreParam122].low,
    ),
    dagreValue226 = Math.max(
      dagreParam120[dagreParam121].lim,
      dagreParam120[dagreParam122].lim,
    ),
    dagreValue227 = dagreParam121,
    dagreValue228;
  do {
    dagreValue227 = dagreParam119.parent(dagreValue227);
    dagreValue223.push(dagreValue227);
  } while (
    dagreValue227 &&
    (dagreParam120[dagreValue227].low > dagreValue225 ||
      dagreValue226 > dagreParam120[dagreValue227].lim)
  );
  for (
    dagreValue228 = dagreValue227, dagreValue227 = dagreParam122;
    (dagreValue227 = dagreParam119.parent(dagreValue227)) !== dagreValue228;

  )
    dagreValue224.push(dagreValue227);
  return {
    path: dagreValue223.concat(dagreValue224.reverse()),
    lca: dagreValue228,
  };
}
function dagreHelper110(dagreParam242) {
  var dagreValue353 = {},
    dagreValue354 = 0;
  function dagreHelper158(dagreParam348) {
    var dagreValue417 = dagreValue354;
    _baseUniqS(dagreParam242.children(dagreParam348), dagreHelper158);
    dagreValue353[dagreParam348] = {
      low: dagreValue417,
      lim: dagreValue354++,
    };
  }
  return (_baseUniqS(dagreParam242.children(), dagreHelper158), dagreValue353);
}
function dagreHelper111(dagreParam42, dagreParam43) {
  var dagreValue93 = {};
  function dagreHelper147(dagreParam51, dagreParam52) {
    var dagreValue117 = 0,
      dagreValue118 = 0,
      dagreValue119 = dagreParam51.length,
      dagreValue120 = basePickByS(dagreParam52);
    return (
      _baseUniqS(dagreParam52, function (dagreParam85, dagreParam86) {
        var dagreValue171 = dagreHelper113(dagreParam42, dagreParam85),
          dagreValue172 = dagreValue171
            ? dagreParam42.node(dagreValue171).order
            : dagreValue119;
        (dagreValue171 || dagreParam85 === dagreValue120) &&
          (_baseUniqS(
            dagreParam52.slice(dagreValue118, dagreParam86 + 1),
            function (dagreParam183) {
              _baseUniqS(
                dagreParam42.predecessors(dagreParam183),
                function (dagreParam243) {
                  var dagreValue355 = dagreParam42.node(dagreParam243),
                    dagreValue356 = dagreValue355.order;
                  (dagreValue356 < dagreValue117 ||
                    dagreValue172 < dagreValue356) &&
                    !(
                      dagreValue355.dummy &&
                      dagreParam42.node(dagreParam183).dummy
                    ) &&
                    dagreHelper114(dagreValue93, dagreParam243, dagreParam183);
                },
              );
            },
          ),
          (dagreValue118 = dagreParam86 + 1),
          (dagreValue117 = dagreValue172));
      }),
      dagreParam52
    );
  }
  return (_baseUniqN(dagreParam43, dagreHelper147), dagreValue93);
}
function dagreHelper112(dagreParam38, dagreParam39) {
  var dagreValue87 = {};
  function dagreHelper145(
    dagreParam145,
    dagreParam146,
    dagreParam147,
    dagreParam148,
    dagreParam149,
  ) {
    var dagreValue260;
    _baseUniqS(
      dagreValue24(dagreParam146, dagreParam147),
      function (dagreParam187) {
        dagreValue260 = dagreParam145[dagreParam187];
        dagreParam38.node(dagreValue260).dummy &&
          _baseUniqS(
            dagreParam38.predecessors(dagreValue260),
            function (dagreParam303) {
              var dagreValue393 = dagreParam38.node(dagreParam303);
              dagreValue393.dummy &&
                (dagreValue393.order < dagreParam148 ||
                  dagreValue393.order > dagreParam149) &&
                dagreHelper114(dagreValue87, dagreParam303, dagreValue260);
            },
          );
      },
    );
  }
  function dagreHelper146(dagreParam116, dagreParam117) {
    var dagreValue217 = -1,
      dagreValue218,
      dagreValue219 = 0;
    return (
      _baseUniqS(dagreParam117, function (dagreParam168, dagreParam169) {
        if (dagreParam38.node(dagreParam168).dummy === "border") {
          var dagreValue281 = dagreParam38.predecessors(dagreParam168);
          dagreValue281.length &&
            ((dagreValue218 = dagreParam38.node(dagreValue281[0]).order),
            dagreHelper145(
              dagreParam117,
              dagreValue219,
              dagreParam169,
              dagreValue217,
              dagreValue218,
            ),
            (dagreValue219 = dagreParam169),
            (dagreValue217 = dagreValue218));
        }
        dagreHelper145(
          dagreParam117,
          dagreValue219,
          dagreParam117.length,
          dagreValue218,
          dagreParam116.length,
        );
      }),
      dagreParam117
    );
  }
  return (_baseUniqN(dagreParam39, dagreHelper146), dagreValue87);
}
function dagreHelper113(dagreParam301, dagreParam302) {
  if (dagreParam301.node(dagreParam302).dummy)
    return basePickByO(
      dagreParam301.predecessors(dagreParam302),
      function (dagreParam443) {
        return dagreParam301.node(dagreParam443).dummy;
      },
    );
}
function dagreHelper114(dagreParam286, dagreParam287, dagreParam288) {
  if (dagreParam287 > dagreParam288) {
    var dagreValue386 = dagreParam287;
    dagreParam287 = dagreParam288;
    dagreParam288 = dagreValue386;
  }
  var dagreValue387 = dagreParam286[dagreParam287];
  dagreValue387 || (dagreParam286[dagreParam287] = dagreValue387 = {});
  dagreValue387[dagreParam288] = true;
}
function dagreHelper115(dagreParam271, dagreParam272, dagreParam273) {
  if (dagreParam272 > dagreParam273) {
    var dagreValue378 = dagreParam272;
    dagreParam272 = dagreParam273;
    dagreParam273 = dagreValue378;
  }
  return (
    !!dagreParam271[dagreParam272] &&
    Object.prototype.hasOwnProperty.call(
      dagreParam271[dagreParam272],
      dagreParam273,
    )
  );
}
function dagreHelper116(
  dagreParam32,
  dagreParam33,
  dagreParam34,
  dagreParam35,
) {
  var dagreValue74 = {},
    dagreValue75 = {},
    dagreValue76 = {};
  return (
    _baseUniqS(dagreParam33, function (dagreParam335) {
      _baseUniqS(dagreParam335, function (dagreParam383, dagreParam384) {
        dagreValue74[dagreParam383] = dagreParam383;
        dagreValue75[dagreParam383] = dagreParam383;
        dagreValue76[dagreParam383] = dagreParam384;
      });
    }),
    _baseUniqS(dagreParam33, function (dagreParam58) {
      var dagreValue130 = -1;
      _baseUniqS(dagreParam58, function (dagreParam73) {
        var dagreValue147 = dagreParam35(dagreParam73);
        if (dagreValue147.length) {
          dagreValue147 = dagreValue26(dagreValue147, function (dagreParam432) {
            return dagreValue76[dagreParam432];
          });
          for (
            var dagreValue148 = (dagreValue147.length - 1) / 2,
              dagreValue149 = Math.floor(dagreValue148),
              dagreValue150 = Math.ceil(dagreValue148);
            dagreValue149 <= dagreValue150;
            ++dagreValue149
          ) {
            var dagreValue151 = dagreValue147[dagreValue149];
            dagreValue75[dagreParam73] === dagreParam73 &&
              dagreValue130 < dagreValue76[dagreValue151] &&
              !dagreHelper115(dagreParam34, dagreParam73, dagreValue151) &&
              ((dagreValue75[dagreValue151] = dagreParam73),
              (dagreValue75[dagreParam73] = dagreValue74[dagreParam73] =
                dagreValue74[dagreValue151]),
              (dagreValue130 = dagreValue76[dagreValue151]));
          }
        }
      });
    }),
    {
      root: dagreValue74,
      align: dagreValue75,
    }
  );
}
function dagreHelper117(
  dagreParam20,
  dagreParam21,
  dagreParam22,
  dagreParam23,
  dagreParam24,
) {
  var dagreValue67 = {},
    dagreValue68 = dagreHelper118(
      dagreParam20,
      dagreParam21,
      dagreParam22,
      dagreParam24,
    ),
    dagreValue69 = dagreParam24 ? "borderLeft" : "borderRight";
  function dagreHelper142(dagreParam244, dagreParam245) {
    for (
      var dagreValue357 = dagreValue68.nodes(),
        dagreValue358 = dagreValue357.pop(),
        dagreValue359 = {};
      dagreValue358;

    ) {
      dagreValue359[dagreValue358]
        ? dagreParam244(dagreValue358)
        : ((dagreValue359[dagreValue358] = true),
          dagreValue357.push(dagreValue358),
          (dagreValue357 = dagreValue357.concat(dagreParam245(dagreValue358))));
      dagreValue358 = dagreValue357.pop();
    }
  }
  function dagreHelper143(dagreParam304) {
    dagreValue67[dagreParam304] = dagreValue68
      .inEdges(dagreParam304)
      .reduce(function (accumulator, current) {
        return Math.max(
          accumulator,
          dagreValue67[current.v] + dagreValue68.edge(current),
        );
      }, 0);
  }
  function dagreHelper144(dagreParam188) {
    var dagreValue304 = dagreValue68.outEdges(dagreParam188).reduce(function (
        accumulator,
        current,
      ) {
        return Math.min(
          accumulator,
          dagreValue67[current.w] - dagreValue68.edge(current),
        );
      }, 1 / 0),
      dagreValue305 = dagreParam20.node(dagreParam188);
    dagreValue304 !== 1 / 0 &&
      dagreValue305.borderType !== dagreValue69 &&
      (dagreValue67[dagreParam188] = Math.max(
        dagreValue67[dagreParam188],
        dagreValue304,
      ));
  }
  return (
    dagreHelper142(
      dagreHelper143,
      dagreValue68.predecessors.bind(dagreValue68),
    ),
    dagreHelper142(dagreHelper144, dagreValue68.successors.bind(dagreValue68)),
    _baseUniqS(dagreParam23, function (dagreParam472) {
      dagreValue67[dagreParam472] = dagreValue67[dagreParam22[dagreParam472]];
    }),
    dagreValue67
  );
}
function dagreHelper118(
  dagreParam99,
  dagreParam100,
  dagreParam101,
  dagreParam102,
) {
  var dagreValue186 = new Graphlib(),
    dagreValue187 = dagreParam99.graph(),
    dagreValue188 = dagreHelper123(
      dagreValue187.nodesep,
      dagreValue187.edgesep,
      dagreParam102,
    );
  return (
    _baseUniqS(dagreParam100, function (dagreParam160) {
      var dagreValue276;
      _baseUniqS(dagreParam160, function (dagreParam206) {
        var dagreValue323 = dagreParam101[dagreParam206];
        if ((dagreValue186.setNode(dagreValue323), dagreValue276)) {
          var dagreValue324 = dagreParam101[dagreValue276],
            dagreValue325 = dagreValue186.edge(dagreValue324, dagreValue323);
          dagreValue186.setEdge(
            dagreValue324,
            dagreValue323,
            Math.max(
              dagreValue188(dagreParam99, dagreParam206, dagreValue276),
              dagreValue325 || 0,
            ),
          );
        }
        dagreValue276 = dagreParam206;
      });
    }),
    dagreValue186
  );
}
function dagreHelper119(dagreParam161, dagreParam162) {
  return dagreHelper12(baseUniqI(dagreParam162), function (dagreParam193) {
    var dagreValue310 = -1 / 0,
      dagreValue311 = 1 / 0;
    return (
      dagreHelper4(dagreParam193, function (dagreParam319, dagreParam320) {
        var dagreValue404 = dagreHelper124(dagreParam161, dagreParam320) / 2;
        dagreValue310 = Math.max(dagreParam319 + dagreValue404, dagreValue310);
        dagreValue311 = Math.min(dagreParam319 - dagreValue404, dagreValue311);
      }),
      dagreValue310 - dagreValue311
    );
  });
}
function dagreHelper120(dagreParam107, dagreParam108) {
  var dagreValue195 = baseUniqI(dagreParam108),
    dagreValue196 = dagreHelper11(dagreValue195),
    dagreValue197 = dagreHelper10(dagreValue195);
  _baseUniqS(["u", "d"], function (dagreParam134) {
    _baseUniqS(["l", "r"], function (dagreParam157) {
      var dagreValue270 = dagreParam134 + dagreParam157,
        dagreValue271 = dagreParam107[dagreValue270],
        dagreValue272;
      if (dagreValue271 !== dagreParam108) {
        var dagreValue273 = baseUniqI(dagreValue271);
        dagreValue272 =
          dagreParam157 === "l"
            ? dagreValue196 - dagreHelper11(dagreValue273)
            : dagreValue197 - dagreHelper10(dagreValue273);
        dagreValue272 &&
          (dagreParam107[dagreValue270] = dagreHelper8(
            dagreValue271,
            function (dagreParam406) {
              return dagreParam406 + dagreValue272;
            },
          ));
      }
    });
  });
}
function dagreHelper121(dagreParam259, dagreParam260) {
  return dagreHelper8(
    dagreParam259.ul,
    function (dagreParam321, dagreParam322) {
      if (dagreParam260)
        return dagreParam259[dagreParam260.toLowerCase()][dagreParam322];
      var dagreValue405 = dagreValue26(
        basePickByI(dagreParam259, dagreParam322),
      );
      return (dagreValue405[1] + dagreValue405[2]) / 2;
    },
  );
}
function dagreHelper122(dagreParam40) {
  var dagreValue88 = dagreHelper39(dagreParam40),
    dagreValue89 = chunkS3R3BYOJM(
      dagreHelper111(dagreParam40, dagreValue88),
      dagreHelper112(dagreParam40, dagreValue88),
    ),
    dagreValue90 = {},
    dagreValue91;
  return (
    _baseUniqS(["u", "d"], function (dagreParam64) {
      dagreValue91 =
        dagreParam64 === "u" ? dagreValue88 : baseUniqI(dagreValue88).reverse();
      _baseUniqS(["l", "r"], function (dagreParam82) {
        dagreParam82 === "r" &&
          (dagreValue91 = basePickByI(dagreValue91, function (dagreParam391) {
            return baseUniqI(dagreParam391).reverse();
          }));
        var dagreValue160 = (
            dagreParam64 === "u"
              ? dagreParam40.predecessors
              : dagreParam40.successors
          ).bind(dagreParam40),
          dagreValue161 = dagreHelper116(
            dagreParam40,
            dagreValue91,
            dagreValue89,
            dagreValue160,
          ),
          dagreValue162 = dagreHelper117(
            dagreParam40,
            dagreValue91,
            dagreValue161.root,
            dagreValue161.align,
            dagreParam82 === "r",
          );
        dagreParam82 === "r" &&
          (dagreValue162 = dagreHelper8(
            dagreValue162,
            function (dagreParam424) {
              return -dagreParam424;
            },
          ));
        dagreValue90[dagreParam64 + dagreParam82] = dagreValue162;
      });
    }),
    dagreHelper120(dagreValue90, dagreHelper119(dagreParam40, dagreValue90)),
    dagreHelper121(dagreValue90, dagreParam40.graph().align)
  );
}
function dagreHelper123(dagreParam8, dagreParam9, dagreParam10) {
  return function (dagreParam14, dagreParam15, dagreParam16) {
    var dagreValue57 = dagreParam14.node(dagreParam15),
      dagreValue58 = dagreParam14.node(dagreParam16),
      dagreValue59 = 0,
      dagreValue60;
    if (
      ((dagreValue59 += dagreValue57.width / 2),
      Object.prototype.hasOwnProperty.call(dagreValue57, "labelpos"))
    )
      switch (dagreValue57.labelpos.toLowerCase()) {
        case "l":
          dagreValue60 = -dagreValue57.width / 2;
          break;
        case "r":
          dagreValue60 = dagreValue57.width / 2;
          break;
      }
    if (
      (dagreValue60 &&
        (dagreValue59 += dagreParam10 ? dagreValue60 : -dagreValue60),
      (dagreValue60 = 0),
      (dagreValue59 += (dagreValue57.dummy ? dagreParam9 : dagreParam8) / 2),
      (dagreValue59 += (dagreValue58.dummy ? dagreParam9 : dagreParam8) / 2),
      (dagreValue59 += dagreValue58.width / 2),
      Object.prototype.hasOwnProperty.call(dagreValue58, "labelpos"))
    )
      switch (dagreValue58.labelpos.toLowerCase()) {
        case "l":
          dagreValue60 = dagreValue58.width / 2;
          break;
        case "r":
          dagreValue60 = -dagreValue58.width / 2;
          break;
      }
    return (
      dagreValue60 &&
        (dagreValue59 += dagreParam10 ? dagreValue60 : -dagreValue60),
      (dagreValue60 = 0),
      dagreValue59
    );
  };
}
function dagreHelper124(dagreParam459, dagreParam460) {
  return dagreParam459.node(dagreParam460).width;
}
function dagreHelper125(dagreParam330) {
  dagreParam330 = dagreHelper37(dagreParam330);
  dagreHelper126(dagreParam330);
  dagreHelper5(
    dagreHelper122(dagreParam330),
    function (dagreParam463, dagreParam464) {
      dagreParam330.node(dagreParam464).x = dagreParam463;
    },
  );
}
function dagreHelper126(dagreParam155) {
  var dagreValue267 = dagreHelper39(dagreParam155),
    dagreValue268 = dagreParam155.graph().ranksep,
    dagreValue269 = 0;
  _baseUniqS(dagreValue267, function (dagreParam225) {
    var dagreValue336 = dagreHelper10(
      basePickByI(dagreParam225, function (dagreParam413) {
        return dagreParam155.node(dagreParam413).height;
      }),
    );
    _baseUniqS(dagreParam225, function (dagreParam433) {
      dagreParam155.node(dagreParam433).y = dagreValue269 + dagreValue336 / 2;
    });
    dagreValue269 += dagreValue336 + dagreValue268;
  });
}
export function Dagre(dagreParam191, dagreParam192) {
  var dagreValue309 =
    dagreParam192 && dagreParam192.debugTiming ? dagreHelper44 : dagreHelper45;
  dagreValue309("layout", () => {
    var dagreValue382 = dagreValue309("  buildLayoutGraph", () =>
      dagreHelper129(dagreParam191),
    );
    dagreValue309("  runLayout", () =>
      dagreHelper127(dagreValue382, dagreValue309),
    );
    dagreValue309("  updateInputGraph", () =>
      dagreHelper128(dagreParam191, dagreValue382),
    );
  });
}
export function initDagre(): void {}
function dagreHelper127(dagreParam1, dagreParam2) {
  dagreParam2("    makeSpaceForEdgeLabels", () => or(dagreParam1));
  dagreParam2("    removeSelfEdges", () => dagreHelper138(dagreParam1));
  dagreParam2("    acyclic", () => dagreHelper32(dagreParam1));
  dagreParam2("    nestingGraph.run", () => dagreHelper85(dagreParam1));
  dagreParam2("    rank", () => $t(dagreHelper37(dagreParam1)));
  dagreParam2("    injectEdgeLabelProxies", () => dagreHelper130(dagreParam1));
  dagreParam2("    removeEmptyRanks", () => dagreHelper40(dagreParam1));
  dagreParam2("    nestingGraph.cleanup", () => dagreHelper88(dagreParam1));
  dagreParam2("    normalizeRanks", () => _t(dagreParam1));
  dagreParam2("    assignRankMinMax", () => dagreHelper131(dagreParam1));
  dagreParam2("    removeEdgeLabelProxies", () => dagreHelper132(dagreParam1));
  dagreParam2("    normalize.run", () => dagreHelper56(dagreParam1));
  dagreParam2("    parentDummyChains", () => dagreHelper108(dagreParam1));
  dagreParam2("    addBorderSegments", () => dagreHelper46(dagreParam1));
  dagreParam2("    order", () => dagreHelper104(dagreParam1));
  dagreParam2("    insertSelfEdges", () => dagreHelper139(dagreParam1));
  dagreParam2("    adjustCoordinateSystem", () => dagreHelper48(dagreParam1));
  dagreParam2("    position", () => dagreHelper125(dagreParam1));
  dagreParam2("    positionSelfEdges", () => _r(dagreParam1));
  dagreParam2("    removeBorderNodes", () => dagreHelper137(dagreParam1));
  dagreParam2("    normalize.undo", () => dagreHelper58(dagreParam1));
  dagreParam2("    fixupEdgeLabelCoords", () => dagreHelper135(dagreParam1));
  dagreParam2("    undoCoordinateSystem", () => dagreHelper49(dagreParam1));
  dagreParam2("    translateGraph", () => dagreHelper133(dagreParam1));
  dagreParam2("    assignNodeIntersects", () => dagreHelper134(dagreParam1));
  dagreParam2("    reversePoints", () => dagreHelper136(dagreParam1));
  dagreParam2("    acyclic.undo", () => dagreHelper34(dagreParam1));
}
function dagreHelper128(dagreParam60, dagreParam61) {
  _baseUniqS(dagreParam60.nodes(), function (dagreParam229) {
    var dagreValue343 = dagreParam60.node(dagreParam229),
      dagreValue344 = dagreParam61.node(dagreParam229);
    dagreValue343 &&
      ((dagreValue343.x = dagreValue344.x),
      (dagreValue343.y = dagreValue344.y),
      dagreParam61.children(dagreParam229).length &&
        ((dagreValue343.width = dagreValue344.width),
        (dagreValue343.height = dagreValue344.height)));
  });
  _baseUniqS(dagreParam60.edges(), function (dagreParam227) {
    var dagreValue340 = dagreParam60.edge(dagreParam227),
      dagreValue341 = dagreParam61.edge(dagreParam227);
    dagreValue340.points = dagreValue341.points;
    Object.prototype.hasOwnProperty.call(dagreValue341, "x") &&
      ((dagreValue340.x = dagreValue341.x),
      (dagreValue340.y = dagreValue341.y));
  });
  dagreParam60.graph().width = dagreParam61.graph().width;
  dagreParam60.graph().height = dagreParam61.graph().height;
}
var dagreValue31 = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
  dagreValue32 = {
    ranksep: 50,
    edgesep: 20,
    nodesep: 50,
    rankdir: "tb",
  },
  $n = ["acyclicer", "ranker", "rankdir", "align"],
  dagreValue33 = ["width", "height"],
  dagreValue34 = {
    width: 0,
    height: 0,
  },
  dagreValue35 = ["minlen", "weight", "width", "height", "labeloffset"],
  dagreValue36 = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r",
  },
  dagreValue37 = ["labelpos"];
function dagreHelper129(dagreParam88) {
  var dagreValue173 = new Graphlib({
      multigraph: true,
      compound: true,
    }),
    dagreValue174 = dagreHelper140(dagreParam88.graph());
  return (
    dagreValue173.setGraph(
      chunkS3R3BYOJM(
        {},
        dagreValue32,
        $(dagreValue174, dagreValue31),
        dagreValue21(dagreValue174, $n),
      ),
    ),
    _baseUniqS(dagreParam88.nodes(), function (dagreParam318) {
      var dagreValue403 = dagreHelper140(dagreParam88.node(dagreParam318));
      dagreValue173.setNode(
        dagreParam318,
        basePickByC($(dagreValue403, dagreValue33), dagreValue34),
      );
      dagreValue173.setParent(
        dagreParam318,
        dagreParam88.parent(dagreParam318),
      );
    }),
    _baseUniqS(dagreParam88.edges(), function (dagreParam340) {
      var dagreValue413 = dagreHelper140(dagreParam88.edge(dagreParam340));
      dagreValue173.setEdge(
        dagreParam340,
        chunkS3R3BYOJM(
          {},
          dagreValue36,
          $(dagreValue413, dagreValue35),
          dagreValue21(dagreValue413, dagreValue37),
        ),
      );
    }),
    dagreValue173
  );
}
function or(dagreParam125) {
  var dagreValue243 = dagreParam125.graph();
  dagreValue243.ranksep /= 2;
  _baseUniqS(dagreParam125.edges(), function (dagreParam171) {
    var dagreValue282 = dagreParam125.edge(dagreParam171);
    dagreValue282.minlen *= 2;
    dagreValue282.labelpos.toLowerCase() !== "c" &&
      (dagreValue243.rankdir === "TB" || dagreValue243.rankdir === "BT"
        ? (dagreValue282.width += dagreValue282.labeloffset)
        : (dagreValue282.height += dagreValue282.labeloffset));
  });
}
function dagreHelper130(dagreParam156) {
  _baseUniqS(dagreParam156.edges(), function (dagreParam179) {
    var dagreValue294 = dagreParam156.edge(dagreParam179);
    if (dagreValue294.width && dagreValue294.height) {
      var dagreValue295 = dagreParam156.node(dagreParam179.v);
      dagreHelper35(
        dagreParam156,
        "edge-proxy",
        {
          rank:
            (dagreParam156.node(dagreParam179.w).rank - dagreValue295.rank) /
              2 +
            dagreValue295.rank,
          e: dagreParam179,
        },
        "_ep",
      );
    }
  });
}
function dagreHelper131(dagreParam159) {
  var dagreValue275 = 0;
  _baseUniqS(dagreParam159.nodes(), function (dagreParam231) {
    var dagreValue346 = dagreParam159.node(dagreParam231);
    dagreValue346.borderTop &&
      ((dagreValue346.minRank = dagreParam159.node(
        dagreValue346.borderTop,
      ).rank),
      (dagreValue346.maxRank = dagreParam159.node(
        dagreValue346.borderBottom,
      ).rank),
      (dagreValue275 = dagreHelper10(dagreValue275, dagreValue346.maxRank)));
  });
  dagreParam159.graph().maxRank = dagreValue275;
}
function dagreHelper132(dagreParam247) {
  _baseUniqS(dagreParam247.nodes(), function (dagreParam293) {
    var dagreValue389 = dagreParam247.node(dagreParam293);
    dagreValue389.dummy === "edge-proxy" &&
      ((dagreParam247.edge(dagreValue389.e).labelRank = dagreValue389.rank),
      dagreParam247.removeNode(dagreParam293));
  });
}
function dagreHelper133(dagreParam3) {
  var dagreValue38 = 1 / 0,
    dagreValue39 = 0,
    dagreValue40 = 1 / 0,
    dagreValue41 = 0,
    dagreValue42 = dagreParam3.graph(),
    dagreValue43 = dagreValue42.marginx || 0,
    dagreValue44 = dagreValue42.marginy || 0;
  function dagreHelper141(dagreParam180) {
    var dagreValue296 = dagreParam180.x,
      dagreValue297 = dagreParam180.y,
      dagreValue298 = dagreParam180.width,
      dagreValue299 = dagreParam180.height;
    dagreValue38 = Math.min(dagreValue38, dagreValue296 - dagreValue298 / 2);
    dagreValue39 = Math.max(dagreValue39, dagreValue296 + dagreValue298 / 2);
    dagreValue40 = Math.min(dagreValue40, dagreValue297 - dagreValue299 / 2);
    dagreValue41 = Math.max(dagreValue41, dagreValue297 + dagreValue299 / 2);
  }
  _baseUniqS(dagreParam3.nodes(), function (dagreParam485) {
    dagreHelper141(dagreParam3.node(dagreParam485));
  });
  _baseUniqS(dagreParam3.edges(), function (dagreParam336) {
    var dagreValue409 = dagreParam3.edge(dagreParam336);
    Object.prototype.hasOwnProperty.call(dagreValue409, "x") &&
      dagreHelper141(dagreValue409);
  });
  dagreValue38 -= dagreValue43;
  dagreValue40 -= dagreValue44;
  _baseUniqS(dagreParam3.nodes(), function (dagreParam375) {
    var dagreValue426 = dagreParam3.node(dagreParam375);
    dagreValue426.x -= dagreValue38;
    dagreValue426.y -= dagreValue40;
  });
  _baseUniqS(dagreParam3.edges(), function (dagreParam163) {
    var dagreValue277 = dagreParam3.edge(dagreParam163);
    _baseUniqS(dagreValue277.points, function (dagreParam407) {
      dagreParam407.x -= dagreValue38;
      dagreParam407.y -= dagreValue40;
    });
    Object.prototype.hasOwnProperty.call(dagreValue277, "x") &&
      (dagreValue277.x -= dagreValue38);
    Object.prototype.hasOwnProperty.call(dagreValue277, "y") &&
      (dagreValue277.y -= dagreValue40);
  });
  dagreValue42.width = dagreValue39 - dagreValue38 + dagreValue43;
  dagreValue42.height = dagreValue41 - dagreValue40 + dagreValue44;
}
function dagreHelper134(dagreParam126) {
  _baseUniqS(dagreParam126.edges(), function (dagreParam144) {
    var dagreValue255 = dagreParam126.edge(dagreParam144),
      dagreValue256 = dagreParam126.node(dagreParam144.v),
      dagreValue257 = dagreParam126.node(dagreParam144.w),
      dagreValue258,
      dagreValue259;
    dagreValue255.points
      ? ((dagreValue258 = dagreValue255.points[0]),
        (dagreValue259 = dagreValue255.points[dagreValue255.points.length - 1]))
      : ((dagreValue255.points = []),
        (dagreValue258 = dagreValue257),
        (dagreValue259 = dagreValue256));
    dagreValue255.points.unshift(dagreHelper38(dagreValue256, dagreValue258));
    dagreValue255.points.push(dagreHelper38(dagreValue257, dagreValue259));
  });
}
function dagreHelper135(dagreParam80) {
  _baseUniqS(dagreParam80.edges(), function (dagreParam98) {
    var dagreValue185 = dagreParam80.edge(dagreParam98);
    if (Object.prototype.hasOwnProperty.call(dagreValue185, "x"))
      switch (
        ((dagreValue185.labelpos === "l" || dagreValue185.labelpos === "r") &&
          (dagreValue185.width -= dagreValue185.labeloffset),
        dagreValue185.labelpos)
      ) {
        case "l":
          dagreValue185.x -=
            dagreValue185.width / 2 + dagreValue185.labeloffset;
          break;
        case "r":
          dagreValue185.x +=
            dagreValue185.width / 2 + dagreValue185.labeloffset;
          break;
      }
  });
}
function dagreHelper136(dagreParam323) {
  _baseUniqS(dagreParam323.edges(), function (dagreParam371) {
    var dagreValue423 = dagreParam323.edge(dagreParam371);
    dagreValue423.reversed && dagreValue423.points.reverse();
  });
}
function dagreHelper137(dagreParam66) {
  _baseUniqS(dagreParam66.nodes(), function (dagreParam111) {
    if (dagreParam66.children(dagreParam111).length) {
      var dagreValue206 = dagreParam66.node(dagreParam111),
        dagreValue207 = dagreParam66.node(dagreValue206.borderTop),
        dagreValue208 = dagreParam66.node(dagreValue206.borderBottom),
        dagreValue209 = dagreParam66.node(
          basePickByS(dagreValue206.borderLeft),
        ),
        dagreValue210 = dagreParam66.node(
          basePickByS(dagreValue206.borderRight),
        );
      dagreValue206.width = Math.abs(dagreValue210.x - dagreValue209.x);
      dagreValue206.height = Math.abs(dagreValue208.y - dagreValue207.y);
      dagreValue206.x = dagreValue209.x + dagreValue206.width / 2;
      dagreValue206.y = dagreValue207.y + dagreValue206.height / 2;
    }
  });
  _baseUniqS(dagreParam66.nodes(), function (dagreParam380) {
    dagreParam66.node(dagreParam380).dummy === "border" &&
      dagreParam66.removeNode(dagreParam380);
  });
}
function dagreHelper138(dagreParam194) {
  _baseUniqS(dagreParam194.edges(), function (dagreParam232) {
    if (dagreParam232.v === dagreParam232.w) {
      var dagreValue347 = dagreParam194.node(dagreParam232.v);
      dagreValue347.selfEdges ||= [];
      dagreValue347.selfEdges.push({
        e: dagreParam232,
        label: dagreParam194.edge(dagreParam232),
      });
      dagreParam194.removeEdge(dagreParam232);
    }
  });
}
function dagreHelper139(dagreParam59) {
  _baseUniqS(dagreHelper39(dagreParam59), function (dagreParam67) {
    var dagreValue142 = 0;
    _baseUniqS(dagreParam67, function (dagreParam77, dagreParam78) {
      var dagreValue153 = dagreParam59.node(dagreParam77);
      dagreValue153.order = dagreParam78 + dagreValue142;
      _baseUniqS(dagreValue153.selfEdges, function (dagreParam128) {
        dagreHelper35(
          dagreParam59,
          "selfedge",
          {
            width: dagreParam128.label.width,
            height: dagreParam128.label.height,
            rank: dagreValue153.rank,
            order: dagreParam78 + ++dagreValue142,
            e: dagreParam128.e,
            label: dagreParam128.label,
          },
          "_se",
        );
      });
      delete dagreValue153.selfEdges;
    });
  });
}
function _r(dagreParam46) {
  _baseUniqS(dagreParam46.nodes(), function (dagreParam49) {
    var dagreValue103 = dagreParam46.node(dagreParam49);
    if (dagreValue103.dummy === "selfedge") {
      var dagreValue104 = dagreParam46.node(dagreValue103.e.v),
        dagreValue105 = dagreValue104.x + dagreValue104.width / 2,
        dagreValue106 = dagreValue104.y,
        dagreValue107 = dagreValue103.x - dagreValue105,
        dagreValue108 = dagreValue104.height / 2;
      dagreParam46.setEdge(dagreValue103.e, dagreValue103.label);
      dagreParam46.removeNode(dagreParam49);
      dagreValue103.label.points = [
        {
          x: dagreValue105 + (2 * dagreValue107) / 3,
          y: dagreValue106 - dagreValue108,
        },
        {
          x: dagreValue105 + (5 * dagreValue107) / 6,
          y: dagreValue106 - dagreValue108,
        },
        {
          x: dagreValue105 + dagreValue107,
          y: dagreValue106,
        },
        {
          x: dagreValue105 + (5 * dagreValue107) / 6,
          y: dagreValue106 + dagreValue108,
        },
        {
          x: dagreValue105 + (2 * dagreValue107) / 3,
          y: dagreValue106 + dagreValue108,
        },
      ];
      dagreValue103.label.x = dagreValue103.x;
      dagreValue103.label.y = dagreValue103.y;
    }
  });
}
function $(dagreParam448, dagreParam449) {
  return dagreHelper8(dagreValue21(dagreParam448, dagreParam449), Number);
}
function dagreHelper140(dagreParam316) {
  var dagreValue399 = {};
  return (
    _baseUniqS(dagreParam316, function (dagreParam425, dagreParam426) {
      dagreValue399[dagreParam426.toLowerCase()] = dagreParam425;
    }),
    dagreValue399
  );
}
