// Restored from ref/webview/assets/dist-eWHzKSsV.js
// Dist chunk restored from the Codex webview bundle.
import React from "react";
import { toEsModule } from "../runtime/commonjs-interop";
import { t as distImport2 } from "react/jsx-runtime";
import ReactDOM from "react-dom";
typeof window < "u" && window.document && window.document.createElement;
export function distD(
  distParam30,
  distParam31,
  { checkForDefaultPrevented = true } = {},
) {
  return function (distParam38) {
    if (
      (distParam30?.(distParam38),
      checkForDefaultPrevented === false || !distParam38.defaultPrevented)
    )
      return distParam31?.(distParam38);
  };
}
var distValue2 = distImport2();
export function distL(distParam10, distParam11) {
  let distValue25 = React.createContext(distParam11),
    distValue26 = (distParam28) => {
      let { children, ...rest } = distParam28,
        __distD = React.useMemo(() => rest, Object.values(rest));
      return distValue2.jsx(distValue25.Provider, {
        value: __distD,
        children,
      });
    };
  distValue26.displayName = distParam10 + "Provider";
  function _distD(distParam29) {
    let __distD = React.useContext(distValue25);
    if (__distD) return __distD;
    if (distParam11 !== undefined) return distParam11;
    throw Error(`\`${distParam29}\` must be used within \`${distParam10}\``);
  }
  return [distValue26, _distD];
}
export function distU(distParam2, distParam3 = []) {
  let distValue15 = [];
  function distHelper13(distParam7, distParam8) {
    let __distD = React.createContext(distParam8),
      _distL = distValue15.length;
    distValue15 = [...distValue15, distParam8];
    let _distU = (distParam25) => {
      let { scope, children, ...__distU } = distParam25,
        distValue53 = scope?.[distParam2]?.[_distL] || __distD,
        distValue54 = React.useMemo(() => __distU, Object.values(__distU));
      return distValue2.jsx(distValue53.Provider, {
        value: distValue54,
        children,
      });
    };
    _distU.displayName = distParam7 + "Provider";
    function distHelper14(distParam26, distParam27) {
      let __distU = distParam27?.[distParam2]?.[_distL] || __distD,
        distValue55 = React.useContext(__distU);
      if (distValue55) return distValue55;
      if (distParam8 !== undefined) return distParam8;
      throw Error(`\`${distParam26}\` must be used within \`${distParam7}\``);
    }
    return [_distU, distHelper14];
  }
  let _distD = () => {
    let distValue56 = distValue15.map((item) => React.createContext(item));
    return function (distParam33) {
      let distValue58 = distParam33?.[distParam2] || distValue56;
      return React.useMemo(
        () => ({
          [`__scope${distParam2}`]: {
            ...distParam33,
            [distParam2]: distValue58,
          },
        }),
        [distParam33, distValue58],
      );
    };
  };
  return (
    (_distD.scopeName = distParam2),
    [distHelper13, distHelper1(_distD, ...distParam3)]
  );
}
function distHelper1(...distParam9) {
  let distValue22 = distParam9[0];
  if (distParam9.length === 1) return distValue22;
  let distValue23 = () => {
    let distValue37 = distParam9.map((item) => ({
      useScope: item(),
      scopeName: item.scopeName,
    }));
    return function (distParam22) {
      let distValue52 = distValue37.reduce(
        (accumulator, { useScope, scopeName }) => {
          let _distD = useScope(distParam22)[`__scope${scopeName}`];
          return {
            ...accumulator,
            ..._distD,
          };
        },
        {},
      );
      return React.useMemo(
        () => ({
          [`__scope${distValue22.scopeName}`]: distValue52,
        }),
        [distValue52],
      );
    };
  };
  return ((distValue23.scopeName = distValue22.scopeName), distValue23);
}
function distHelper2(distParam35, distParam36) {
  if (typeof distParam35 == "function") return distParam35(distParam36);
  distParam35 != null && (distParam35.current = distParam36);
}
function distS(...distParam15) {
  return (distParam18) => {
    let distValue42 = false,
      distValue43 = distParam15.map((item) => {
        let distValue60 = distHelper2(item, distParam18);
        return (
          !distValue42 &&
            typeof distValue60 == "function" &&
            (distValue42 = true),
          distValue60
        );
      });
    if (distValue42)
      return () => {
        for (
          let distValue59 = 0;
          distValue59 < distValue43.length;
          distValue59++
        ) {
          let distValue61 = distValue43[distValue59];
          typeof distValue61 == "function"
            ? distValue61()
            : distHelper2(distParam15[distValue59], null);
        }
      };
  };
}
function distC(...distParam44) {
  return React.useCallback(distS(...distParam44), distParam44);
}
function distO(distParam4) {
  let distValue16 = distHelper3(distParam4),
    distValue17 = React.forwardRef((distParam5, distParam6) => {
      let { children, ..._distD } = distParam5,
        _distL = React.Children.toArray(children),
        _distU = _distL.find(distHelper4);
      if (_distU) {
        let distValue20 = _distU.props.children,
          distValue21 = _distL.map((item) =>
            item === _distU
              ? React.Children.count(distValue20) > 1
                ? React.Children.only(null)
                : React.isValidElement(distValue20)
                  ? distValue20.props.children
                  : null
              : item,
          );
        return distValue2.jsx(distValue16, {
          ..._distD,
          ref: distParam6,
          children: React.isValidElement(distValue20)
            ? React.cloneElement(distValue20, undefined, distValue21)
            : null,
        });
      }
      return distValue2.jsx(distValue16, {
        ..._distD,
        ref: distParam6,
        children,
      });
    });
  return ((distValue17.displayName = `${distParam4}.Slot`), distValue17);
}
function distHelper3(distParam14) {
  let distValue28 = React.forwardRef((distParam19, distParam20) => {
    let { children, ...rest } = distParam19;
    if (React.isValidElement(children)) {
      let distValue57 = distHelper6(children),
        _distD = distHelper5(rest, children.props);
      return (
        children.type !== React.Fragment &&
          (_distD.ref = distParam20
            ? distS(distParam20, distValue57)
            : distValue57),
        React.cloneElement(children, _distD)
      );
    }
    return React.Children.count(children) > 1
      ? React.Children.only(null)
      : null;
  });
  return ((distValue28.displayName = `${distParam14}.SlotClone`), distValue28);
}
var distValue3 = Symbol("radix.slottable");
function distHelper4(distParam32) {
  return (
    React.isValidElement(distParam32) &&
    typeof distParam32.type == "function" &&
    "__radixId" in distParam32.type &&
    distParam32.type.__radixId === distValue3
  );
}
function distHelper5(distParam12, distParam13) {
  let distValue27 = {
    ...distParam13,
  };
  for (let distValue33 in distParam13) {
    let _distD = distParam12[distValue33],
      distValue34 = distParam13[distValue33];
    /^on[A-Z]/.test(distValue33)
      ? _distD && distValue34
        ? (distValue27[distValue33] = (...distParam37) => {
            let distValue63 = distValue34(...distParam37);
            return (_distD(...distParam37), distValue63);
          })
        : _distD && (distValue27[distValue33] = _distD)
      : distValue33 === "style"
        ? (distValue27[distValue33] = {
            ..._distD,
            ...distValue34,
          })
        : distValue33 === "className" &&
          (distValue27[distValue33] = [_distD, distValue34]
            .filter(Boolean)
            .join(" "));
  }
  return {
    ...distParam12,
    ...distValue27,
  };
}
function distHelper6(distParam16) {
  let distValue38 = Object.getOwnPropertyDescriptor(
      distParam16.props,
      "ref",
    )?.get,
    distValue39 =
      distValue38 &&
      "isReactWarning" in distValue38 &&
      distValue38.isReactWarning;
  return distValue39
    ? distParam16.ref
    : ((distValue38 = Object.getOwnPropertyDescriptor(distParam16, "ref")?.get),
      (distValue39 =
        distValue38 &&
        "isReactWarning" in distValue38 &&
        distValue38.isReactWarning),
      distValue39
        ? distParam16.props.ref
        : distParam16.props.ref || distParam16.ref);
}
var distValue4 = toEsModule(ReactDOM(), 1);
export const distI = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
].reduce((accumulator, current) => {
  let distValue29 = distO(`Primitive.${current}`),
    distValue30 = React.forwardRef((distParam23, distParam24) => {
      let { asChild: _distD, ...rest } = distParam23,
        _distL = _distD ? distValue29 : current;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = true),
        distValue2.jsx(_distL, {
          ...rest,
          ref: distParam24,
        })
      );
    });
  return (
    (distValue30.displayName = `Primitive.${current}`),
    {
      ...accumulator,
      [current]: distValue30,
    }
  );
}, {});
export function distA(distParam42, distParam43) {
  distParam42 &&
    distValue4.flushSync(() => distParam42.dispatchEvent(distParam43));
}
var distR = globalThis?.document ? React.useLayoutEffect : () => {};
function distHelper7(distParam40, distParam41) {
  return React.useReducer(
    (distParam47, distParam48) =>
      distParam41[distParam47][distParam48] ?? distParam47,
    distParam40,
  );
}
var distN = (distParam21) => {
  let { present, children } = distParam21,
    distValue48 = distHelper8(present),
    _distD =
      typeof children == "function"
        ? children({
            present: distValue48.isPresent,
          })
        : React.Children.only(children),
    distValue49 = distC(distValue48.ref, distHelper10(_distD));
  return typeof children == "function" || distValue48.isPresent
    ? React.cloneElement(_distD, {
        ref: distValue49,
      })
    : null;
};
distN.displayName = "Presence";
function distHelper8(distParam1) {
  let [distValue6, distValue7] = React.useState(),
    distValue8 = React.useRef(null),
    _distD = React.useRef(distParam1),
    distValue9 = React.useRef("none"),
    [_distL, _distU] = distHelper7(distParam1 ? "mounted" : "unmounted", {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended",
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted",
      },
      unmounted: {
        MOUNT: "mounted",
      },
    });
  return (
    React.useEffect(() => {
      let distValue62 = distHelper9(distValue8.current);
      distValue9.current = _distL === "mounted" ? distValue62 : "none";
    }, [_distL]),
    distR(() => {
      let distValue35 = distValue8.current,
        distValue36 = _distD.current;
      if (distValue36 !== distParam1) {
        let distValue50 = distValue9.current,
          distValue51 = distHelper9(distValue35);
        distParam1
          ? _distU("MOUNT")
          : distValue51 === "none" || distValue35?.display === "none"
            ? _distU("UNMOUNT")
            : _distU(
                distValue36 && distValue50 !== distValue51
                  ? "ANIMATION_OUT"
                  : "UNMOUNT",
              );
        _distD.current = distParam1;
      }
    }, [distParam1, _distU]),
    distR(() => {
      if (distValue6) {
        let distValue10,
          distValue11 = distValue6.ownerDocument.defaultView ?? window,
          distValue12 = (event) => {
            let distValue19 = distHelper9(distValue8.current).includes(
              CSS.escape(event.animationName),
            );
            if (
              event.target === distValue6 &&
              distValue19 &&
              (_distU("ANIMATION_END"), !_distD.current)
            ) {
              let distValue44 = distValue6.style.animationFillMode;
              distValue6.style.animationFillMode = "forwards";
              distValue10 = distValue11.setTimeout(() => {
                distValue6.style.animationFillMode === "forwards" &&
                  (distValue6.style.animationFillMode = distValue44);
              });
            }
          },
          __distL = (event) => {
            event.target === distValue6 &&
              (distValue9.current = distHelper9(distValue8.current));
          };
        return (
          distValue6.addEventListener("animationstart", __distL),
          distValue6.addEventListener("animationcancel", distValue12),
          distValue6.addEventListener("animationend", distValue12),
          () => {
            distValue11.clearTimeout(distValue10);
            distValue6.removeEventListener("animationstart", __distL);
            distValue6.removeEventListener("animationcancel", distValue12);
            distValue6.removeEventListener("animationend", distValue12);
          }
        );
      } else _distU("ANIMATION_END");
    }, [distValue6, _distU]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(_distL),
      ref: React.useCallback((distParam39) => {
        distValue8.current = distParam39 ? getComputedStyle(distParam39) : null;
        distValue7(distParam39);
      }, []),
    }
  );
}
function distHelper9(distParam45) {
  return distParam45?.animationName || "none";
}
function distHelper10(distParam17) {
  let distValue40 = Object.getOwnPropertyDescriptor(
      distParam17.props,
      "ref",
    )?.get,
    distValue41 =
      distValue40 &&
      "isReactWarning" in distValue40 &&
      distValue40.isReactWarning;
  return distValue41
    ? distParam17.ref
    : ((distValue40 = Object.getOwnPropertyDescriptor(distParam17, "ref")?.get),
      (distValue41 =
        distValue40 &&
        "isReactWarning" in distValue40 &&
        distValue40.isReactWarning),
      distValue41
        ? distParam17.props.ref
        : distParam17.props.ref || distParam17.ref);
}
var distValue5 = React.useInsertionEffect || distR;
export function distT({ prop, defaultProp, onChange = () => {}, caller }) {
  let [_distD, distValue13, _distL] = distHelper11({
      defaultProp,
      onChange,
    }),
    _distU = prop !== undefined,
    distValue14 = _distU ? prop : _distD;
  {
    let distValue18 = React.useRef(prop !== undefined);
    React.useEffect(() => {
      let distValue24 = distValue18.current;
      if (distValue24 !== _distU) {
        let distValue31 = distValue24 ? "controlled" : "uncontrolled",
          distValue32 = _distU ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${distValue31} to ${distValue32}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        );
      }
      distValue18.current = _distU;
    }, [_distU, caller]);
  }
  return [
    distValue14,
    React.useCallback(
      (distParam34) => {
        if (_distU) {
          let distValue64 = distHelper12(distParam34)
            ? distParam34(prop)
            : distParam34;
          distValue64 !== prop && _distL.current?.(distValue64);
        } else distValue13(distParam34);
      },
      [_distU, prop, distValue13, _distL],
    ),
  ];
}
function distHelper11({ defaultProp, onChange }) {
  let [distValue45, distValue46] = React.useState(defaultProp),
    _distD = React.useRef(distValue45),
    distValue47 = React.useRef(onChange);
  return (
    distValue5(() => {
      distValue47.current = onChange;
    }, [onChange]),
    React.useEffect(() => {
      _distD.current !== distValue45 &&
        (distValue47.current?.(distValue45), (_distD.current = distValue45));
    }, [distValue45, _distD]),
    [distValue45, distValue46, distValue47]
  );
}
function distHelper12(distParam46) {
  return typeof distParam46 == "function";
}
export { distD as composeEventHandlers };
export { distC, distN, distO, distR, distS };
