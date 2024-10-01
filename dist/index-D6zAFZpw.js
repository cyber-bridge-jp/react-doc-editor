var mc = Object.defineProperty;
var _c = (r, t, e) => t in r ? mc(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Le = (r, t, e) => _c(r, typeof t != "symbol" ? t + "" : t, e);
import * as Dt from "react";
import je, { useCallback as We, useEffect as De, Suspense as En, useRef as ct, useState as ve, createContext as oa, useContext as Nc, useMemo as Bt } from "react";
import Ie, { DecoratorNode as ln, COMMAND_PRIORITY_HIGH as on, $isNodeSelection as zo, $getSelection as et, $getNodeByKey as Go, CLICK_COMMAND as ia, COMMAND_PRIORITY_LOW as _t, KEY_DELETE_COMMAND as Cc, KEY_BACKSPACE_COMMAND as xc, TextNode as Vo, $applyNodeReplacement as lr, createEditor as Fr, $setSelection as Dn, ElementNode as ar, $isElementNode as gn, $createParagraphNode as Et, createCommand as It, $isRangeSelection as ut, COMMAND_PRIORITY_EDITOR as jt, $insertNodes as cr, $isRootOrShadowRoot as $n, DRAGSTART_COMMAND as sa, DRAGOVER_COMMAND as Jo, DROP_COMMAND as Xo, $createRangeSelection as la, KEY_ARROW_DOWN_COMMAND as aa, KEY_ARROW_RIGHT_COMMAND as ca, KEY_ARROW_UP_COMMAND as ua, KEY_ARROW_LEFT_COMMAND as da, DELETE_CHARACTER_COMMAND as Ec, INSERT_PARAGRAPH_COMMAND as Tc, $getPreviousSelection as yc, SELECTION_CHANGE_COMMAND as In, COMMAND_PRIORITY_CRITICAL as rr, CAN_UNDO_COMMAND as vc, CAN_REDO_COMMAND as Sc, KEY_MODIFIER_COMMAND as bc, COMMAND_PRIORITY_NORMAL as Oc, $isTextNode as Zo, UNDO_COMMAND as wc, REDO_COMMAND as Rc, FORMAT_TEXT_COMMAND as Lt, $getRoot as Qo, FORMAT_ELEMENT_COMMAND as un, OUTDENT_CONTENT_COMMAND as Mc, INDENT_CONTENT_COMMAND as fa, FOCUS_COMMAND as Ac, KEY_ESCAPE_COMMAND as Lc, $isLineBreakNode as Dc, $isParagraphNode as ei, $getNearestNodeFromDOMNode as or, $createTextNode as $c } from "lexical";
import ga from "katex";
import * as ir from "react-dom";
import ha, { createPortal as Qt } from "react-dom";
var $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var jo = { exports: {} }, qn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ti;
function Ic() {
  if (Ti) return qn;
  Ti = 1;
  var r = je, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, _, m) {
    var g, C = {}, p = null, s = null;
    m !== void 0 && (p = "" + m), _.key !== void 0 && (p = "" + _.key), _.ref !== void 0 && (s = _.ref);
    for (g in _) n.call(_, g) && !l.hasOwnProperty(g) && (C[g] = _[g]);
    if (i && i.defaultProps) for (g in _ = i.defaultProps, _) C[g] === void 0 && (C[g] = _[g]);
    return { $$typeof: t, type: i, key: p, ref: s, props: C, _owner: o.current };
  }
  return qn.Fragment = e, qn.jsx = a, qn.jsxs = a, qn;
}
var zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function Pc() {
  return yi || (yi = 1, process.env.NODE_ENV !== "production" && function() {
    var r = je, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), u = Symbol.iterator, c = "@@iterator";
    function N(ee) {
      if (ee === null || typeof ee != "object")
        return null;
      var Ce = u && ee[u] || ee[c];
      return typeof Ce == "function" ? Ce : null;
    }
    var h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(ee) {
      {
        for (var Ce = arguments.length, be = new Array(Ce > 1 ? Ce - 1 : 0), Be = 1; Be < Ce; Be++)
          be[Be - 1] = arguments[Be];
        d("error", ee, be);
      }
    }
    function d(ee, Ce, be) {
      {
        var Be = h.ReactDebugCurrentFrame, rt = Be.getStackAddendum();
        rt !== "" && (Ce += "%s", be = be.concat([rt]));
        var st = be.map(function(Je) {
          return String(Je);
        });
        st.unshift("Warning: " + Ce), Function.prototype.apply.call(console[ee], console, st);
      }
    }
    var f = !1, y = !1, A = !1, v = !1, O = !1, T;
    T = Symbol.for("react.module.reference");
    function S(ee) {
      return !!(typeof ee == "string" || typeof ee == "function" || ee === n || ee === l || O || ee === o || ee === m || ee === g || v || ee === s || f || y || A || typeof ee == "object" && ee !== null && (ee.$$typeof === p || ee.$$typeof === C || ee.$$typeof === a || ee.$$typeof === i || ee.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ee.$$typeof === T || ee.getModuleId !== void 0));
    }
    function b(ee, Ce, be) {
      var Be = ee.displayName;
      if (Be)
        return Be;
      var rt = Ce.displayName || Ce.name || "";
      return rt !== "" ? be + "(" + rt + ")" : be;
    }
    function k(ee) {
      return ee.displayName || "Context";
    }
    function H(ee) {
      if (ee == null)
        return null;
      if (typeof ee.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof ee == "function")
        return ee.displayName || ee.name || null;
      if (typeof ee == "string")
        return ee;
      switch (ee) {
        case n:
          return "Fragment";
        case e:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof ee == "object")
        switch (ee.$$typeof) {
          case i:
            var Ce = ee;
            return k(Ce) + ".Consumer";
          case a:
            var be = ee;
            return k(be._context) + ".Provider";
          case _:
            return b(ee, ee.render, "ForwardRef");
          case C:
            var Be = ee.displayName || null;
            return Be !== null ? Be : H(ee.type) || "Memo";
          case p: {
            var rt = ee, st = rt._payload, Je = rt._init;
            try {
              return H(Je(st));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, B = 0, w, x, D, Y, j, $, W;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function F() {
      {
        if (B === 0) {
          w = console.log, x = console.info, D = console.warn, Y = console.error, j = console.group, $ = console.groupCollapsed, W = console.groupEnd;
          var ee = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: ee,
            log: ee,
            warn: ee,
            error: ee,
            group: ee,
            groupCollapsed: ee,
            groupEnd: ee
          });
        }
        B++;
      }
    }
    function z() {
      {
        if (B--, B === 0) {
          var ee = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, ee, {
              value: w
            }),
            info: K({}, ee, {
              value: x
            }),
            warn: K({}, ee, {
              value: D
            }),
            error: K({}, ee, {
              value: Y
            }),
            group: K({}, ee, {
              value: j
            }),
            groupCollapsed: K({}, ee, {
              value: $
            }),
            groupEnd: K({}, ee, {
              value: W
            })
          });
        }
        B < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = h.ReactCurrentDispatcher, Q;
    function le(ee, Ce, be) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (rt) {
            var Be = rt.stack.trim().match(/\n( *(at )?)/);
            Q = Be && Be[1] || "";
          }
        return `
` + Q + ee;
      }
    }
    var fe = !1, ue;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new de();
    }
    function P(ee, Ce) {
      if (!ee || fe)
        return "";
      {
        var be = ue.get(ee);
        if (be !== void 0)
          return be;
      }
      var Be;
      fe = !0;
      var rt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var st;
      st = V.current, V.current = null, F();
      try {
        if (Ce) {
          var Je = function() {
            throw Error();
          };
          if (Object.defineProperty(Je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Je, []);
            } catch (Ot) {
              Be = Ot;
            }
            Reflect.construct(ee, [], Je);
          } else {
            try {
              Je.call();
            } catch (Ot) {
              Be = Ot;
            }
            ee.call(Je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            Be = Ot;
          }
          ee();
        }
      } catch (Ot) {
        if (Ot && Be && typeof Ot.stack == "string") {
          for (var ze = Ot.stack.split(`
`), bt = Be.stack.split(`
`), ft = ze.length - 1, gt = bt.length - 1; ft >= 1 && gt >= 0 && ze[ft] !== bt[gt]; )
            gt--;
          for (; ft >= 1 && gt >= 0; ft--, gt--)
            if (ze[ft] !== bt[gt]) {
              if (ft !== 1 || gt !== 1)
                do
                  if (ft--, gt--, gt < 0 || ze[ft] !== bt[gt]) {
                    var Rt = `
` + ze[ft].replace(" at new ", " at ");
                    return ee.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", ee.displayName)), typeof ee == "function" && ue.set(ee, Rt), Rt;
                  }
                while (ft >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        fe = !1, V.current = st, z(), Error.prepareStackTrace = rt;
      }
      var dt = ee ? ee.displayName || ee.name : "", Kt = dt ? le(dt) : "";
      return typeof ee == "function" && ue.set(ee, Kt), Kt;
    }
    function I(ee, Ce, be) {
      return P(ee, !1);
    }
    function M(ee) {
      var Ce = ee.prototype;
      return !!(Ce && Ce.isReactComponent);
    }
    function U(ee, Ce, be) {
      if (ee == null)
        return "";
      if (typeof ee == "function")
        return P(ee, M(ee));
      if (typeof ee == "string")
        return le(ee);
      switch (ee) {
        case m:
          return le("Suspense");
        case g:
          return le("SuspenseList");
      }
      if (typeof ee == "object")
        switch (ee.$$typeof) {
          case _:
            return I(ee.render);
          case C:
            return U(ee.type, Ce, be);
          case p: {
            var Be = ee, rt = Be._payload, st = Be._init;
            try {
              return U(st(rt), Ce, be);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Z = {}, J = h.ReactDebugCurrentFrame;
    function re(ee) {
      if (ee) {
        var Ce = ee._owner, be = U(ee.type, ee._source, Ce ? Ce.type : null);
        J.setExtraStackFrame(be);
      } else
        J.setExtraStackFrame(null);
    }
    function ce(ee, Ce, be, Be, rt) {
      {
        var st = Function.call.bind(q);
        for (var Je in ee)
          if (st(ee, Je)) {
            var ze = void 0;
            try {
              if (typeof ee[Je] != "function") {
                var bt = Error((Be || "React class") + ": " + be + " type `" + Je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof ee[Je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              ze = ee[Je](Ce, Je, Be, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ft) {
              ze = ft;
            }
            ze && !(ze instanceof Error) && (re(rt), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", be, Je, typeof ze), re(null)), ze instanceof Error && !(ze.message in Z) && (Z[ze.message] = !0, re(rt), E("Failed %s type: %s", be, ze.message), re(null));
          }
      }
    }
    var pe = Array.isArray;
    function oe(ee) {
      return pe(ee);
    }
    function se(ee) {
      {
        var Ce = typeof Symbol == "function" && Symbol.toStringTag, be = Ce && ee[Symbol.toStringTag] || ee.constructor.name || "Object";
        return be;
      }
    }
    function me(ee) {
      try {
        return Ne(ee), !1;
      } catch {
        return !0;
      }
    }
    function Ne(ee) {
      return "" + ee;
    }
    function Oe(ee) {
      if (me(ee))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(ee)), Ne(ee);
    }
    var Te = h.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, nt, Pe;
    Pe = {};
    function te(ee) {
      if (q.call(ee, "ref")) {
        var Ce = Object.getOwnPropertyDescriptor(ee, "ref").get;
        if (Ce && Ce.isReactWarning)
          return !1;
      }
      return ee.ref !== void 0;
    }
    function G(ee) {
      if (q.call(ee, "key")) {
        var Ce = Object.getOwnPropertyDescriptor(ee, "key").get;
        if (Ce && Ce.isReactWarning)
          return !1;
      }
      return ee.key !== void 0;
    }
    function X(ee, Ce) {
      if (typeof ee.ref == "string" && Te.current && Ce && Te.current.stateNode !== Ce) {
        var be = H(Te.current.type);
        Pe[be] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Te.current.type), ee.ref), Pe[be] = !0);
      }
    }
    function ne(ee, Ce) {
      {
        var be = function() {
          ht || (ht = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ce));
        };
        be.isReactWarning = !0, Object.defineProperty(ee, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function ae(ee, Ce) {
      {
        var be = function() {
          nt || (nt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Ce));
        };
        be.isReactWarning = !0, Object.defineProperty(ee, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var ie = function(ee, Ce, be, Be, rt, st, Je) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: ee,
        key: Ce,
        ref: be,
        props: Je,
        // Record the component responsible for creating this element.
        _owner: st
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rt
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function _e(ee, Ce, be, Be, rt) {
      {
        var st, Je = {}, ze = null, bt = null;
        be !== void 0 && (Oe(be), ze = "" + be), G(Ce) && (Oe(Ce.key), ze = "" + Ce.key), te(Ce) && (bt = Ce.ref, X(Ce, rt));
        for (st in Ce)
          q.call(Ce, st) && !He.hasOwnProperty(st) && (Je[st] = Ce[st]);
        if (ee && ee.defaultProps) {
          var ft = ee.defaultProps;
          for (st in ft)
            Je[st] === void 0 && (Je[st] = ft[st]);
        }
        if (ze || bt) {
          var gt = typeof ee == "function" ? ee.displayName || ee.name || "Unknown" : ee;
          ze && ne(Je, gt), bt && ae(Je, gt);
        }
        return ie(ee, ze, bt, rt, Be, Te.current, Je);
      }
    }
    var ye = h.ReactCurrentOwner, Se = h.ReactDebugCurrentFrame;
    function xe(ee) {
      if (ee) {
        var Ce = ee._owner, be = U(ee.type, ee._source, Ce ? Ce.type : null);
        Se.setExtraStackFrame(be);
      } else
        Se.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function he(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === t;
    }
    function ge() {
      {
        if (ye.current) {
          var ee = H(ye.current.type);
          if (ee)
            return `

Check the render method of \`` + ee + "`.";
        }
        return "";
      }
    }
    function Ee(ee) {
      return "";
    }
    var we = {};
    function Me(ee) {
      {
        var Ce = ge();
        if (!Ce) {
          var be = typeof ee == "string" ? ee : ee.displayName || ee.name;
          be && (Ce = `

Check the top-level render call using <` + be + ">.");
        }
        return Ce;
      }
    }
    function Ae(ee, Ce) {
      {
        if (!ee._store || ee._store.validated || ee.key != null)
          return;
        ee._store.validated = !0;
        var be = Me(Ce);
        if (we[be])
          return;
        we[be] = !0;
        var Be = "";
        ee && ee._owner && ee._owner !== ye.current && (Be = " It was passed a child from " + H(ee._owner.type) + "."), xe(ee), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Be), xe(null);
      }
    }
    function Fe(ee, Ce) {
      {
        if (typeof ee != "object")
          return;
        if (oe(ee))
          for (var be = 0; be < ee.length; be++) {
            var Be = ee[be];
            he(Be) && Ae(Be, Ce);
          }
        else if (he(ee))
          ee._store && (ee._store.validated = !0);
        else if (ee) {
          var rt = N(ee);
          if (typeof rt == "function" && rt !== ee.entries)
            for (var st = rt.call(ee), Je; !(Je = st.next()).done; )
              he(Je.value) && Ae(Je.value, Ce);
        }
      }
    }
    function ke(ee) {
      {
        var Ce = ee.type;
        if (Ce == null || typeof Ce == "string")
          return;
        var be;
        if (typeof Ce == "function")
          be = Ce.propTypes;
        else if (typeof Ce == "object" && (Ce.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Ce.$$typeof === C))
          be = Ce.propTypes;
        else
          return;
        if (be) {
          var Be = H(Ce);
          ce(be, ee.props, "prop", Be, ee);
        } else if (Ce.PropTypes !== void 0 && !Re) {
          Re = !0;
          var rt = H(Ce);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", rt || "Unknown");
        }
        typeof Ce.getDefaultProps == "function" && !Ce.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ue(ee) {
      {
        for (var Ce = Object.keys(ee.props), be = 0; be < Ce.length; be++) {
          var Be = Ce[be];
          if (Be !== "children" && Be !== "key") {
            xe(ee), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), xe(null);
            break;
          }
        }
        ee.ref !== null && (xe(ee), E("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    var it = {};
    function Xe(ee, Ce, be, Be, rt, st) {
      {
        var Je = S(ee);
        if (!Je) {
          var ze = "";
          (ee === void 0 || typeof ee == "object" && ee !== null && Object.keys(ee).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Ee();
          bt ? ze += bt : ze += ge();
          var ft;
          ee === null ? ft = "null" : oe(ee) ? ft = "array" : ee !== void 0 && ee.$$typeof === t ? (ft = "<" + (H(ee.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : ft = typeof ee, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ft, ze);
        }
        var gt = _e(ee, Ce, be, rt, st);
        if (gt == null)
          return gt;
        if (Je) {
          var Rt = Ce.children;
          if (Rt !== void 0)
            if (Be)
              if (oe(Rt)) {
                for (var dt = 0; dt < Rt.length; dt++)
                  Fe(Rt[dt], ee);
                Object.freeze && Object.freeze(Rt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(Rt, ee);
        }
        if (q.call(Ce, "key")) {
          var Kt = H(ee), Ot = Object.keys(Ce).filter(function(_r) {
            return _r !== "key";
          }), Yn = Ot.length > 0 ? "{key: someKey, " + Ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!it[Kt + Yn]) {
            var Kr = Ot.length > 0 ? "{" + Ot.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Yn, Kt, Kr, Kt), it[Kt + Yn] = !0;
          }
        }
        return ee === n ? Ue(gt) : ke(gt), gt;
      }
    }
    function St(ee, Ce, be) {
      return Xe(ee, Ce, be, !0);
    }
    function Ze(ee, Ce, be) {
      return Xe(ee, Ce, be, !1);
    }
    var Qe = Ze, ot = St;
    zn.Fragment = n, zn.jsx = Qe, zn.jsxs = ot;
  }()), zn;
}
process.env.NODE_ENV === "production" ? jo.exports = Ic() : jo.exports = Pc();
var R = jo.exports, Hr = {}, Gn = {}, vi;
function kc() {
  if (vi) return Gn;
  vi = 1;
  var r = je;
  const t = /* @__PURE__ */ r.createContext(null);
  function e(o, l) {
    let a = null;
    o != null && (a = o[1]);
    function i() {
      return l ?? (a != null ? a.getTheme() : null);
    }
    return {
      getTheme: i
    };
  }
  function n() {
    const o = r.useContext(t);
    if (o == null)
      throw Error("LexicalComposerContext.useLexicalComposerContext: cannot find a LexicalComposerContext");
    return o;
  }
  return Gn.LexicalComposerContext = t, Gn.createLexicalComposerContext = e, Gn.useLexicalComposerContext = n, Gn;
}
var Vn = {}, Si;
function Fc() {
  if (Si) return Vn;
  Si = 1;
  var r = je;
  function t(n) {
    let o = new URLSearchParams();
    o.append("code", n);
    for (let l = 1; l < arguments.length; l++) o.append("v", arguments[l]);
    throw Error(`Minified Lexical error #${n}; visit https://lexical.dev/docs/error?${o} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  let e = r.createContext(null);
  return Vn.LexicalComposerContext = e, Vn.createLexicalComposerContext = function(n, o) {
    let l = null;
    return n != null && (l = n[1]), { getTheme: function() {
      return o ?? (l != null ? l.getTheme() : null);
    } };
  }, Vn.useLexicalComposerContext = function() {
    let n = r.useContext(e);
    return n == null && t(8), n;
  }, Vn;
}
var Ur, bi;
function Ye() {
  return bi || (bi = 1, Ur = process.env.NODE_ENV === "development" ? kc() : Fc()), Ur;
}
var Oi;
function Bc() {
  if (Oi) return Hr;
  Oi = 1;
  var r = Ye(), t = Ie, e = je;
  const n = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  var l = n ? e.useLayoutEffect : e.useEffect;
  const a = {
    tag: "history-merge"
  };
  function i({
    initialConfig: m,
    children: g
  }) {
    const C = e.useMemo(
      () => {
        const {
          theme: p,
          namespace: s,
          editor__DEPRECATED: u,
          nodes: c,
          onError: N,
          editorState: h,
          html: E
        } = m, d = r.createLexicalComposerContext(null, p);
        let f = u || null;
        if (f === null) {
          const y = t.createEditor({
            editable: m.editable,
            html: E,
            namespace: s,
            nodes: c,
            onError: (A) => N(A, y),
            theme: p
          });
          _(y, h), f = y;
        }
        return [f, d];
      },
      // We only do this for init
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    );
    return l(() => {
      const p = m.editable, [s] = C;
      s.setEditable(p !== void 0 ? p : !0);
    }, []), /* @__PURE__ */ e.createElement(r.LexicalComposerContext.Provider, {
      value: C
    }, g);
  }
  function _(m, g) {
    if (g !== null) {
      if (g === void 0)
        m.update(() => {
          const C = t.$getRoot();
          if (C.isEmpty()) {
            const p = t.$createParagraphNode();
            C.append(p);
            const s = n ? document.activeElement : null;
            (t.$getSelection() !== null || s !== null && s === m.getRootElement()) && p.select();
          }
        }, a);
      else if (g !== null)
        switch (typeof g) {
          case "string": {
            const C = m.parseEditorState(g);
            m.setEditorState(C, a);
            break;
          }
          case "object": {
            m.setEditorState(g, a);
            break;
          }
          case "function": {
            m.update(() => {
              t.$getRoot().isEmpty() && g(m);
            }, a);
            break;
          }
        }
    }
  }
  return Hr.LexicalComposer = i, Hr;
}
var Yr = {}, wi;
function jc() {
  if (wi) return Yr;
  wi = 1;
  var r = Ye(), t = Ie, e = je;
  let n = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  var o = n ? e.useLayoutEffect : e.useEffect;
  let l = { tag: "history-merge" };
  function a(i, _) {
    if (_ !== null) {
      if (_ === void 0) i.update(() => {
        var m = t.$getRoot();
        if (m.isEmpty()) {
          let g = t.$createParagraphNode();
          m.append(g), m = n ? document.activeElement : null, (t.$getSelection() !== null || m !== null && m === i.getRootElement()) && g.select();
        }
      }, l);
      else if (_ !== null) switch (typeof _) {
        case "string":
          let m = i.parseEditorState(_);
          i.setEditorState(m, l);
          break;
        case "object":
          i.setEditorState(_, l);
          break;
        case "function":
          i.update(() => {
            t.$getRoot().isEmpty() && _(i);
          }, l);
      }
    }
  }
  return Yr.LexicalComposer = function({ initialConfig: i, children: _ }) {
    let m = e.useMemo(() => {
      const { theme: g, namespace: C, editor__DEPRECATED: p, nodes: s, onError: u, editorState: c, html: N } = i, h = r.createLexicalComposerContext(null, g);
      let E = p || null;
      if (E === null) {
        const d = t.createEditor({ editable: i.editable, html: N, namespace: C, nodes: s, onError: (f) => u(f, d), theme: g });
        a(d, c), E = d;
      }
      return [E, h];
    }, []);
    return o(() => {
      let g = i.editable, [C] = m;
      C.setEditable(g !== void 0 ? g : !0);
    }, []), e.createElement(
      r.LexicalComposerContext.Provider,
      { value: m },
      _
    );
  }, Yr;
}
const Kc = process.env.NODE_ENV === "development" ? Bc() : jc();
var Hc = Kc;
const Uc = {
  blockCursor: "et_block-cursor",
  code: "et_code",
  characterLimit: "character-limit",
  embedBlock: {
    base: "et_embed-block",
    focus: "et_embed-block-focus"
  },
  hashtag: "et_hashtag",
  heading: {
    h1: "et_h1",
    h2: "et_h2",
    h3: "et_h3",
    h4: "et_h4",
    h5: "et_h5",
    h6: "et_h6"
  },
  image: "editor-image",
  indent: "et_indent",
  inlineImage: "inline-editor-image",
  layoutContainer: "et_layout-container",
  layoutItem: "et_layout-item",
  link: "et_link",
  list: {
    checklist: "et_checklist",
    listitem: "et_listitem",
    listitemChecked: "et_listitem-checked",
    listitemUnchecked: "et_listitem-unchecked",
    nested: {
      listitem: "et_nested-listitem"
    },
    olDepth: [
      "et_ol1",
      "et_ol2",
      "et_ol3",
      "et_ol4",
      "et_ol5"
    ],
    ul: "et_ul"
  },
  ltr: "et_ltr",
  mark: "et_mark",
  markOverlap: "et_mark-overlap",
  paragraph: "et_paragraph",
  quote: "et_quote",
  rtl: "et_rtl",
  table: "et_table",
  tableAddColumns: "et_table-add-columns",
  tableAddRows: "et_table-add-rows",
  tableCell: "et_table-cell",
  tableCellActionButton: "et_table-cell-action-button",
  tableCellActionButtonContainer: "et_table-cell-action-button-container",
  tableCellEditing: "et_table-cell-editing",
  tableCellHeader: "et_table-cell-header",
  tableCellPrimarySelected: "et_table-cell-primary-selected",
  tableCellResizer: "et_table-cell-resizer",
  tableCellSelected: "et_table-cell-selected",
  tableCellSortedIndicator: "et_table-cell-sorted-indicator",
  tableResizeRuler: "et_table-resize-ruler",
  tableSelected: "et_table-selected",
  tableSelection: "et_table-selection",
  text: {
    bold: "et_text-bold",
    code: "et_text-code",
    italic: "et_text-italic",
    strikethrough: "et_text-strikethrough",
    subscript: "et_text-subscript",
    superscript: "et_text-superscript",
    underline: "et_text-underline",
    underlineStrikethrough: "et_text-underline-strikethrough"
  },
  dataMention: "et_data-mention"
};
var Nt = {}, Wr = { exports: {} }, Ri;
function ma() {
  return Ri || (Ri = 1, function(r) {
    var t = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var e = function(n) {
      var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, l = 0, a = {}, i = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: n.Prism && n.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function E(d) {
            return d instanceof _ ? new _(d.type, E(d.content), d.alias) : Array.isArray(d) ? d.map(E) : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(E) {
            return Object.prototype.toString.call(E).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(E) {
            return E.__id || Object.defineProperty(E, "__id", { value: ++l }), E.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function E(d, f) {
            f = f || {};
            var y, A;
            switch (i.util.type(d)) {
              case "Object":
                if (A = i.util.objId(d), f[A])
                  return f[A];
                y = /** @type {Record<string, any>} */
                {}, f[A] = y;
                for (var v in d)
                  d.hasOwnProperty(v) && (y[v] = E(d[v], f));
                return (
                  /** @type {any} */
                  y
                );
              case "Array":
                return A = i.util.objId(d), f[A] ? f[A] : (y = [], f[A] = y, /** @type {Array} */
                /** @type {any} */
                d.forEach(function(O, T) {
                  y[T] = E(O, f);
                }), /** @type {any} */
                y);
              default:
                return d;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(E) {
            for (; E; ) {
              var d = o.exec(E.className);
              if (d)
                return d[1].toLowerCase();
              E = E.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(E, d) {
            E.className = E.className.replace(RegExp(o, "gi"), ""), E.classList.add("language-" + d);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if ("currentScript" in document)
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (y) {
              var E = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack) || [])[1];
              if (E) {
                var d = document.getElementsByTagName("script");
                for (var f in d)
                  if (d[f].src == E)
                    return d[f];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(E, d, f) {
            for (var y = "no-" + d; E; ) {
              var A = E.classList;
              if (A.contains(d))
                return !0;
              if (A.contains(y))
                return !1;
              E = E.parentElement;
            }
            return !!f;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: a,
          plaintext: a,
          text: a,
          txt: a,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(E, d) {
            var f = i.util.clone(i.languages[E]);
            for (var y in d)
              f[y] = d[y];
            return f;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(E, d, f, y) {
            y = y || /** @type {any} */
            i.languages;
            var A = y[E], v = {};
            for (var O in A)
              if (A.hasOwnProperty(O)) {
                if (O == d)
                  for (var T in f)
                    f.hasOwnProperty(T) && (v[T] = f[T]);
                f.hasOwnProperty(O) || (v[O] = A[O]);
              }
            var S = y[E];
            return y[E] = v, i.languages.DFS(i.languages, function(b, k) {
              k === S && b != E && (this[b] = v);
            }), v;
          },
          // Traverse a language definition with Depth First Search
          DFS: function E(d, f, y, A) {
            A = A || {};
            var v = i.util.objId;
            for (var O in d)
              if (d.hasOwnProperty(O)) {
                f.call(d, O, d[O], y || O);
                var T = d[O], S = i.util.type(T);
                S === "Object" && !A[v(T)] ? (A[v(T)] = !0, E(T, f, null, A)) : S === "Array" && !A[v(T)] && (A[v(T)] = !0, E(T, f, O, A));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(E, d) {
          i.highlightAllUnder(document, E, d);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(E, d, f) {
          var y = {
            callback: f,
            container: E,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          i.hooks.run("before-highlightall", y), y.elements = Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)), i.hooks.run("before-all-elements-highlight", y);
          for (var A = 0, v; v = y.elements[A++]; )
            i.highlightElement(v, d === !0, y.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(E, d, f) {
          var y = i.util.getLanguage(E), A = i.languages[y];
          i.util.setLanguage(E, y);
          var v = E.parentElement;
          v && v.nodeName.toLowerCase() === "pre" && i.util.setLanguage(v, y);
          var O = E.textContent, T = {
            element: E,
            language: y,
            grammar: A,
            code: O
          };
          function S(k) {
            T.highlightedCode = k, i.hooks.run("before-insert", T), T.element.innerHTML = T.highlightedCode, i.hooks.run("after-highlight", T), i.hooks.run("complete", T), f && f.call(T.element);
          }
          if (i.hooks.run("before-sanity-check", T), v = T.element.parentElement, v && v.nodeName.toLowerCase() === "pre" && !v.hasAttribute("tabindex") && v.setAttribute("tabindex", "0"), !T.code) {
            i.hooks.run("complete", T), f && f.call(T.element);
            return;
          }
          if (i.hooks.run("before-highlight", T), !T.grammar) {
            S(i.util.encode(T.code));
            return;
          }
          if (d && n.Worker) {
            var b = new Worker(i.filename);
            b.onmessage = function(k) {
              S(k.data);
            }, b.postMessage(JSON.stringify({
              language: T.language,
              code: T.code,
              immediateClose: !0
            }));
          } else
            S(i.highlight(T.code, T.grammar, T.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(E, d, f) {
          var y = {
            code: E,
            grammar: d,
            language: f
          };
          if (i.hooks.run("before-tokenize", y), !y.grammar)
            throw new Error('The language "' + y.language + '" has no grammar.');
          return y.tokens = i.tokenize(y.code, y.grammar), i.hooks.run("after-tokenize", y), _.stringify(i.util.encode(y.tokens), y.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(E, d) {
          var f = d.rest;
          if (f) {
            for (var y in f)
              d[y] = f[y];
            delete d.rest;
          }
          var A = new C();
          return p(A, A.head, E), g(E, A, d, A.head, 0), u(A);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(E, d) {
            var f = i.hooks.all;
            f[E] = f[E] || [], f[E].push(d);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(E, d) {
            var f = i.hooks.all[E];
            if (!(!f || !f.length))
              for (var y = 0, A; A = f[y++]; )
                A(d);
          }
        },
        Token: _
      };
      n.Prism = i;
      function _(E, d, f, y) {
        this.type = E, this.content = d, this.alias = f, this.length = (y || "").length | 0;
      }
      _.stringify = function E(d, f) {
        if (typeof d == "string")
          return d;
        if (Array.isArray(d)) {
          var y = "";
          return d.forEach(function(S) {
            y += E(S, f);
          }), y;
        }
        var A = {
          type: d.type,
          content: E(d.content, f),
          tag: "span",
          classes: ["token", d.type],
          attributes: {},
          language: f
        }, v = d.alias;
        v && (Array.isArray(v) ? Array.prototype.push.apply(A.classes, v) : A.classes.push(v)), i.hooks.run("wrap", A);
        var O = "";
        for (var T in A.attributes)
          O += " " + T + '="' + (A.attributes[T] || "").replace(/"/g, "&quot;") + '"';
        return "<" + A.tag + ' class="' + A.classes.join(" ") + '"' + O + ">" + A.content + "</" + A.tag + ">";
      };
      function m(E, d, f, y) {
        E.lastIndex = d;
        var A = E.exec(f);
        if (A && y && A[1]) {
          var v = A[1].length;
          A.index += v, A[0] = A[0].slice(v);
        }
        return A;
      }
      function g(E, d, f, y, A, v) {
        for (var O in f)
          if (!(!f.hasOwnProperty(O) || !f[O])) {
            var T = f[O];
            T = Array.isArray(T) ? T : [T];
            for (var S = 0; S < T.length; ++S) {
              if (v && v.cause == O + "," + S)
                return;
              var b = T[S], k = b.inside, H = !!b.lookbehind, K = !!b.greedy, B = b.alias;
              if (K && !b.pattern.global) {
                var w = b.pattern.toString().match(/[imsuy]*$/)[0];
                b.pattern = RegExp(b.pattern.source, w + "g");
              }
              for (var x = b.pattern || b, D = y.next, Y = A; D !== d.tail && !(v && Y >= v.reach); Y += D.value.length, D = D.next) {
                var j = D.value;
                if (d.length > E.length)
                  return;
                if (!(j instanceof _)) {
                  var $ = 1, W;
                  if (K) {
                    if (W = m(x, Y, E, H), !W || W.index >= E.length)
                      break;
                    var V = W.index, L = W.index + W[0].length, F = Y;
                    for (F += D.value.length; V >= F; )
                      D = D.next, F += D.value.length;
                    if (F -= D.value.length, Y = F, D.value instanceof _)
                      continue;
                    for (var z = D; z !== d.tail && (F < L || typeof z.value == "string"); z = z.next)
                      $++, F += z.value.length;
                    $--, j = E.slice(Y, F), W.index -= Y;
                  } else if (W = m(x, 0, j, H), !W)
                    continue;
                  var V = W.index, Q = W[0], le = j.slice(0, V), fe = j.slice(V + Q.length), ue = Y + j.length;
                  v && ue > v.reach && (v.reach = ue);
                  var de = D.prev;
                  le && (de = p(d, de, le), Y += le.length), s(d, de, $);
                  var P = new _(O, k ? i.tokenize(Q, k) : Q, B, Q);
                  if (D = p(d, de, P), fe && p(d, D, fe), $ > 1) {
                    var I = {
                      cause: O + "," + S,
                      reach: ue
                    };
                    g(E, d, f, D.prev, Y, I), v && I.reach > v.reach && (v.reach = I.reach);
                  }
                }
              }
            }
          }
      }
      function C() {
        var E = { value: null, prev: null, next: null }, d = { value: null, prev: E, next: null };
        E.next = d, this.head = E, this.tail = d, this.length = 0;
      }
      function p(E, d, f) {
        var y = d.next, A = { value: f, prev: d, next: y };
        return d.next = A, y.prev = A, E.length++, A;
      }
      function s(E, d, f) {
        for (var y = d.next, A = 0; A < f && y !== E.tail; A++)
          y = y.next;
        d.next = y, y.prev = d, E.length -= A;
      }
      function u(E) {
        for (var d = [], f = E.head.next; f !== E.tail; )
          d.push(f.value), f = f.next;
        return d;
      }
      if (!n.document)
        return n.addEventListener && (i.disableWorkerMessageHandler || n.addEventListener("message", function(E) {
          var d = JSON.parse(E.data), f = d.language, y = d.code, A = d.immediateClose;
          n.postMessage(i.highlight(y, i.languages[f], f)), A && n.close();
        }, !1)), i;
      var c = i.util.currentScript();
      c && (i.filename = c.src, c.hasAttribute("data-manual") && (i.manual = !0));
      function N() {
        i.manual || i.highlightAll();
      }
      if (!i.manual) {
        var h = document.readyState;
        h === "loading" || h === "interactive" && c && c.defer ? document.addEventListener("DOMContentLoaded", N) : window.requestAnimationFrame ? window.requestAnimationFrame(N) : window.setTimeout(N, 16);
      }
      return i;
    }(t);
    r.exports && (r.exports = e), typeof $r < "u" && ($r.Prism = e), e.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(n) {
      n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(o, l) {
        var a = {};
        a["language-" + l] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[l]
        }, a.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: a
          }
        };
        i["language-" + l] = {
          pattern: /[\s\S]+/,
          inside: e.languages[l]
        };
        var _ = {};
        _[o] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return o;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: i
        }, e.languages.insertBefore("markup", "cdata", _);
      }
    }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(n, o) {
        e.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + n + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [o, "language-" + o],
                  inside: e.languages[o]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml, function(n) {
      var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      n.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + o.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + o.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: o,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, n.languages.css.atrule.inside.rest = n.languages.css;
      var l = n.languages.markup;
      l && (l.tag.addInlined("style", "css"), l.tag.addAttribute("style", "css"));
    }(e), e.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, e.languages.javascript = e.languages.extend("clike", {
      "class-name": [
        e.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: e.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), e.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: e.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), e.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), e.languages.js = e.languages.javascript, function() {
      if (typeof e > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var n = "Loading…", o = function(c, N) {
        return "✖ Error " + c + " while fetching file: " + N;
      }, l = "✖ Error: File does not exist or is empty", a = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, i = "data-src-status", _ = "loading", m = "loaded", g = "failed", C = "pre[data-src]:not([" + i + '="' + m + '"]):not([' + i + '="' + _ + '"])';
      function p(c, N, h) {
        var E = new XMLHttpRequest();
        E.open("GET", c, !0), E.onreadystatechange = function() {
          E.readyState == 4 && (E.status < 400 && E.responseText ? N(E.responseText) : E.status >= 400 ? h(o(E.status, E.statusText)) : h(l));
        }, E.send(null);
      }
      function s(c) {
        var N = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(c || "");
        if (N) {
          var h = Number(N[1]), E = N[2], d = N[3];
          return E ? d ? [h, Number(d)] : [h, void 0] : [h, h];
        }
      }
      e.hooks.add("before-highlightall", function(c) {
        c.selector += ", " + C;
      }), e.hooks.add("before-sanity-check", function(c) {
        var N = (
          /** @type {HTMLPreElement} */
          c.element
        );
        if (N.matches(C)) {
          c.code = "", N.setAttribute(i, _);
          var h = N.appendChild(document.createElement("CODE"));
          h.textContent = n;
          var E = N.getAttribute("data-src"), d = c.language;
          if (d === "none") {
            var f = (/\.(\w+)$/.exec(E) || [, "none"])[1];
            d = a[f] || f;
          }
          e.util.setLanguage(h, d), e.util.setLanguage(N, d);
          var y = e.plugins.autoloader;
          y && y.loadLanguages(d), p(
            E,
            function(A) {
              N.setAttribute(i, m);
              var v = s(N.getAttribute("data-range"));
              if (v) {
                var O = A.split(/\r\n?|\n/g), T = v[0], S = v[1] == null ? O.length : v[1];
                T < 0 && (T += O.length), T = Math.max(0, Math.min(T - 1, O.length)), S < 0 && (S += O.length), S = Math.max(0, Math.min(S, O.length)), A = O.slice(T, S).join(`
`), N.hasAttribute("data-start") || N.setAttribute("data-start", String(T + 1));
              }
              h.textContent = A, e.highlightElement(h);
            },
            function(A) {
              N.setAttribute(i, g), h.textContent = A;
            }
          );
        }
      }), e.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(N) {
          for (var h = (N || document).querySelectorAll(C), E = 0, d; d = h[E++]; )
            e.highlightElement(d);
        }
      };
      var u = !1;
      e.fileHighlight = function() {
        u || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), u = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }();
  }(Wr)), Wr.exports;
}
var Mi = {}, Ai;
function _a() {
  return Ai || (Ai = 1, Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }), Mi;
}
var Li = {}, Di;
function Na() {
  return Di || (Di = 1, Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
      Prism.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), Prism.languages.js = Prism.languages.javascript), Li;
}
var $i = {}, Ii;
function Ca() {
  return Ii || (Ii = 1, Prism.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(r) {
    r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(t, e) {
      var n = {};
      n["language-" + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e]
      }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var o = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: n
        }
      };
      o["language-" + e] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[e]
      };
      var l = {};
      l[t] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return t;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: o
      }, Prism.languages.insertBefore("markup", "cdata", l);
    }
  }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(r, t) {
      Prism.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: Prism.languages[t]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml), $i;
}
var Pi = {}, ki;
function xa() {
  return ki || (ki = 1, function(r) {
    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function e(g) {
      return g = g.replace(/<inner>/g, function() {
        return t;
      }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + g + ")");
    }
    var n = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
      return n;
    }), l = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    r.languages.markdown = r.languages.extend("markup", {}), r.languages.insertBefore("markdown", "prolog", {
      "front-matter-block": {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          punctuation: /^---|---$/,
          "front-matter": {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ["yaml", "language-yaml"],
            inside: r.languages.yaml
          }
        }
      },
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
      },
      table: {
        pattern: RegExp("^" + o + l + "(?:" + o + ")*", "m"),
        inside: {
          "table-data-rows": {
            pattern: RegExp("^(" + o + l + ")(?:" + o + ")*$"),
            lookbehind: !0,
            inside: {
              "table-data": {
                pattern: RegExp(n),
                inside: r.languages.markdown
              },
              punctuation: /\|/
            }
          },
          "table-line": {
            pattern: RegExp("^(" + o + ")" + l + "$"),
            lookbehind: !0,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          "table-header-row": {
            pattern: RegExp("^" + o + "$"),
            inside: {
              "table-header": {
                pattern: RegExp(n),
                alias: "important",
                inside: r.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: !0,
          alias: "keyword"
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: !0,
          inside: {
            "code-block": {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: !0
            },
            "code-language": {
              pattern: /^(```).+/,
              lookbehind: !0
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======
          // title 2
          // -------
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: "important",
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#.+/m,
          lookbehind: !0,
          alias: "important",
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: "punctuation"
      },
      "url-reference": {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: !0
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: e(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: !0,
            inside: {}
            // see below
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: e(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: !0,
            inside: {}
            // see below
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        // eslint-disable-next-line regexp/strict
        pattern: e(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: {}
            // see below
          },
          punctuation: /~~?/
        }
      },
      "code-snippet": {
        // `code`
        // ``code``
        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: !0,
        greedy: !0,
        alias: ["code", "keyword"]
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: e(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: !0,
            inside: {}
            // see below
          },
          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: !0
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: !0
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: !0
          }
        }
      }
    }), ["url", "bold", "italic", "strike"].forEach(function(g) {
      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(C) {
        g !== C && (r.languages.markdown[g].inside.content.inside[C] = r.languages.markdown[C]);
      });
    }), r.hooks.add("after-tokenize", function(g) {
      if (g.language !== "markdown" && g.language !== "md")
        return;
      function C(p) {
        if (!(!p || typeof p == "string"))
          for (var s = 0, u = p.length; s < u; s++) {
            var c = p[s];
            if (c.type !== "code") {
              C(c.content);
              continue;
            }
            var N = c.content[1], h = c.content[3];
            if (N && h && N.type === "code-language" && h.type === "code-block" && typeof N.content == "string") {
              var E = N.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
              E = (/[a-z][\w-]*/i.exec(E) || [""])[0].toLowerCase();
              var d = "language-" + E;
              h.alias ? typeof h.alias == "string" ? h.alias = [h.alias, d] : h.alias.push(d) : h.alias = [d];
            }
          }
      }
      C(g.tokens);
    }), r.hooks.add("wrap", function(g) {
      if (g.type === "code-block") {
        for (var C = "", p = 0, s = g.classes.length; p < s; p++) {
          var u = g.classes[p], c = /language-(.+)/.exec(u);
          if (c) {
            C = c[1];
            break;
          }
        }
        var N = r.languages[C];
        if (N)
          g.content = r.highlight(m(g.content), N, C);
        else if (C && C !== "none" && r.plugins.autoloader) {
          var h = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
          g.attributes.id = h, r.plugins.autoloader.loadLanguages(C, function() {
            var E = document.getElementById(h);
            E && (E.innerHTML = r.highlight(E.textContent, r.languages[C], C));
          });
        }
      }
    });
    var a = RegExp(r.languages.markup.tag.pattern.source, "gi"), i = {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"'
    }, _ = String.fromCodePoint || String.fromCharCode;
    function m(g) {
      var C = g.replace(a, "");
      return C = C.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(p, s) {
        if (s = s.toLowerCase(), s[0] === "#") {
          var u;
          return s[1] === "x" ? u = parseInt(s.slice(2), 16) : u = Number(s.slice(1)), _(u);
        } else {
          var c = i[s];
          return c || p;
        }
      }), C;
    }
    r.languages.md = r.languages.markdown;
  }(Prism)), Pi;
}
var Fi = {}, Bi;
function Ea() {
  return Bi || (Bi = 1, Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    string: {
      // https://en.cppreference.com/w/c/language/string_literal
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
  }), Prism.languages.insertBefore("c", "string", {
    char: {
      // https://en.cppreference.com/w/c/language/character_constant
      pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
      greedy: !0
    }
  }), Prism.languages.insertBefore("c", "string", {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
      inside: {
        string: [
          {
            // highlight the path of the include statement as a string
            pattern: /^(#\s*include\s*)<[^>]+>/,
            lookbehind: !0
          },
          Prism.languages.c.string
        ],
        char: Prism.languages.c.char,
        comment: Prism.languages.c.comment,
        "macro-name": [
          {
            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
            lookbehind: !0
          },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: !0,
            alias: "function"
          }
        ],
        // highlight macro directives as keywords
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: "keyword"
        },
        "directive-hash": /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: {
          pattern: /\S[\s\S]*/,
          inside: Prism.languages.c
        }
      }
    }
  }), Prism.languages.insertBefore("c", "function", {
    // highlight predefined macros as constants
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
  }), delete Prism.languages.c.boolean), Fi;
}
var ji = {}, Ki;
function Ta() {
  return Ki || (Ki = 1, function(r) {
    var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    r.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + t.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: t,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, r.languages.css.atrule.inside.rest = r.languages.css;
    var e = r.languages.markup;
    e && (e.tag.addInlined("style", "css"), e.tag.addAttribute("style", "css"));
  }(Prism)), ji;
}
var Hi = {}, Ui;
function ya() {
  return Ui || (Ui = 1, Prism.languages.objectivec = Prism.languages.extend("c", {
    string: {
      pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: !0
    },
    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec), Hi;
}
var Yi = {}, Wi;
function va() {
  return Wi || (Wi = 1, Prism.languages.sql = {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
      lookbehind: !0
    },
    variable: [
      {
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: !0
      },
      /@[\w.$]+/
    ],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: !0,
      lookbehind: !0
    },
    identifier: {
      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
      greedy: !0,
      lookbehind: !0,
      inside: {
        punctuation: /^`|`$/
      }
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    // Should we highlight user defined functions too?
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
  }), Yi;
}
var qi = {}, zi;
function Sa() {
  return zi || (zi = 1, Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    "string-interpolation": {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: !0
            },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string"
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0
    },
    "class-name": {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: !0
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), qi;
}
var Gi = {}, Vi;
function ba() {
  return Vi || (Vi = 1, function(r) {
    for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, e = 0; e < 2; e++)
      t = t.replace(/<self>/g, function() {
        return t;
      });
    t = t.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), r.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + t),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0
      },
      char: {
        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null
          // see below
        }
      },
      // Closure params should not be confused with bitwise OR |
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation"
          },
          rest: null
          // see below
        }
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol"
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation"
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function"
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name"
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace"
        },
        {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        // https://github.com/rust-lang/reference/blob/master/src/keywords.md
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        // primitives and str
        // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
      // and Rust's naming conventions recommend snake_case anyway.
      // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: "property"
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      // Hex, oct, bin, dec numbers with visual separators and type suffix
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, r.languages.rust["closure-params"].inside.rest = r.languages.rust, r.languages.rust.attribute.inside.string = r.languages.rust.string;
  }(Prism)), Gi;
}
var Ji = {}, Xi;
function Oa() {
  return Xi || (Xi = 1, Prism.languages.swift = {
    comment: {
      // Nested comments are supported up to 2 levels
      pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
      lookbehind: !0,
      greedy: !0
    },
    "string-literal": [
      // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
      {
        pattern: RegExp(
          /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null
            // see below
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\\($/,
            alias: "punctuation"
          },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/
        }
      },
      {
        pattern: RegExp(
          /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: !0,
            inside: null
            // see below
          },
          "interpolation-punctuation": {
            pattern: /^\)|\\#+\($/,
            alias: "punctuation"
          },
          string: /[\s\S]+/
        }
      }
    ],
    directive: {
      // directives with conditions
      pattern: RegExp(
        /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
      ),
      alias: "property",
      inside: {
        "directive-name": /^#\w+/,
        boolean: /\b(?:false|true)\b/,
        number: /\b\d+(?:\.\d+)*\b/,
        operator: /!|&&|\|\||[<>]=?/,
        punctuation: /[(),]/
      }
    },
    literal: {
      pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
      alias: "constant"
    },
    "other-directive": {
      pattern: /#\w+\b/,
      alias: "property"
    },
    attribute: {
      pattern: /@\w+/,
      alias: "atrule"
    },
    "function-definition": {
      pattern: /(\bfunc\s+)\w+/,
      lookbehind: !0,
      alias: "function"
    },
    label: {
      // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
      pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
      lookbehind: !0,
      alias: "important"
    },
    keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: {
      pattern: /\bnil\b/,
      alias: "constant"
    },
    "short-argument": /\$\d+\b/,
    omit: {
      pattern: /\b_\b/,
      alias: "keyword"
    },
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
    "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
    // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
    // This regex only supports ASCII operators.
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/
  }, Prism.languages.swift["string-literal"].forEach(function(r) {
    r.inside.interpolation.inside = Prism.languages.swift;
  })), Ji;
}
var Zi = {}, Qi;
function wa() {
  return Qi || (Qi = 1, function(r) {
    r.languages.typescript = r.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), r.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      // keywords that have to be followed by an identifier
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      // This is for `import type *, {}`
      /\btype\b(?=\s*(?:[\{*]|$))/
    ), delete r.languages.typescript.parameter, delete r.languages.typescript["literal-property"];
    var t = r.languages.extend("typescript", {});
    delete t["class-name"], r.languages.typescript["class-name"].inside = t, r.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: "class-name",
            inside: t
          }
        }
      }
    }), r.languages.ts = r.languages.typescript;
  }(Prism)), Zi;
}
var es = {}, ts;
function Ra() {
  return ts || (ts = 1, function(r) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, e = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, n = {
      pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
    r.languages.java = r.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        n,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + e + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: n.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + e + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: n.inside
        }
      ],
      keyword: t,
      function: [
        r.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0
      },
      constant: /\b[A-Z][A-Z_\d]+\b/
    }), r.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string"
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: !0
      }
    }), r.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": n,
          keyword: t,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + e + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: n.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + e + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: "static",
          inside: {
            namespace: n.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
            return t.source;
          })
        ),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  }(Prism)), es;
}
var ns = {}, rs;
function Ma() {
  return rs || (rs = 1, function(r) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, e = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return t.source;
    });
    r.languages.cpp = r.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return t.source;
          })),
          lookbehind: !0
        },
        // This is intended to capture the class name of method implementations like:
        //   void foo::bar() const {}
        // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
        // it starts with an uppercase letter. This approximation should give decent results.
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        // This will capture the class name before destructors like:
        //   Foo::~Foo() {}
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        // This also intends to capture the class name of method implementations but here the class has template
        // parameters, so it can't be a namespace (until C++ adds generic namespaces).
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: t,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), r.languages.insertBefore("cpp", "string", {
      module: {
        // https://en.cppreference.com/w/cpp/language/modules
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
          /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
          /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
            return e;
          }) + ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0
      }
    }), r.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: r.languages.cpp
          }
        }
      }
    }), r.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), r.languages.insertBefore("cpp", "class-name", {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: r.languages.extend("cpp", {})
      }
    }), r.languages.insertBefore("inside", "double-colon", {
      // All untokenized words that are not namespaces should be class names
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, r.languages.cpp["base-clause"]);
  }(Prism)), ns;
}
var pt = {}, Tt = {}, os;
function Yc() {
  if (os) return Tt;
  os = 1;
  var r = Ie;
  const t = /* @__PURE__ */ new Map();
  function e(w) {
    let x = w;
    for (; x != null; ) {
      if (x.nodeType === Node.TEXT_NODE)
        return x;
      x = x.firstChild;
    }
    return null;
  }
  function n(w) {
    const x = w.parentNode;
    if (x == null)
      throw new Error("Should never happen");
    return [x, Array.from(x.childNodes).indexOf(w)];
  }
  function o(w, x, D, Y, j) {
    const $ = x.getKey(), W = Y.getKey(), L = document.createRange();
    let F = w.getElementByKey($), z = w.getElementByKey(W), V = D, Q = j;
    if (r.$isTextNode(x) && (F = e(F)), r.$isTextNode(Y) && (z = e(z)), x === void 0 || Y === void 0 || F === null || z === null)
      return null;
    F.nodeName === "BR" && ([F, V] = n(F)), z.nodeName === "BR" && ([z, Q] = n(z));
    const le = F.firstChild;
    F === z && le != null && le.nodeName === "BR" && V === 0 && Q === 0 && (Q = 1);
    try {
      L.setStart(F, V), L.setEnd(z, Q);
    } catch {
      return null;
    }
    return L.collapsed && (V !== Q || $ !== W) && (L.setStart(z, Q), L.setEnd(F, V)), L;
  }
  function l(w, x) {
    const D = w.getRootElement();
    if (D === null)
      return [];
    const Y = D.getBoundingClientRect(), j = getComputedStyle(D), $ = parseFloat(j.paddingLeft) + parseFloat(j.paddingRight), W = Array.from(x.getClientRects());
    let L = W.length;
    W.sort((z, V) => {
      const Q = z.top - V.top;
      return Math.abs(Q) <= 3 ? z.left - V.left : Q;
    });
    let F;
    for (let z = 0; z < L; z++) {
      const V = W[z], Q = F && F.top <= V.top && F.top + F.height > V.top && F.left + F.width > V.left, le = V.width + $ === Y.width;
      if (Q || le) {
        W.splice(z--, 1), L--;
        continue;
      }
      F = V;
    }
    return W;
  }
  function a(w) {
    const x = {}, D = w.split(";");
    for (const Y of D)
      if (Y !== "") {
        const [j, $] = Y.split(/:([^]+)/);
        j && $ && (x[j.trim()] = $.trim());
      }
    return x;
  }
  function i(w) {
    let x = t.get(w);
    return x === void 0 && (x = a(w), t.set(w, x)), Object.freeze(x), x;
  }
  function _(w) {
    let x = "";
    for (const D in w)
      D && (x += `${D}: ${w[D]};`);
    return x;
  }
  function m(w, x) {
    return w.__first = x.__first, w.__last = x.__last, w.__size = x.__size, w.__format = x.__format, w.__indent = x.__indent, w.__dir = x.__dir, w;
  }
  function g(w, x) {
    return w.__format = x.__format, w.__style = x.__style, w.__mode = x.__mode, w.__detail = x.__detail, w;
  }
  function C(w) {
    const D = w.constructor.clone(w);
    return D.__parent = w.__parent, D.__next = w.__next, D.__prev = w.__prev, r.$isElementNode(w) && r.$isElementNode(D) ? m(D, w) : r.$isTextNode(w) && r.$isTextNode(D) ? g(D, w) : D;
  }
  function p(w, x) {
    const D = w.getStartEndPoints();
    if (x.isSelected(w) && !x.isSegmented() && !x.isToken() && D !== null) {
      const [Y, j] = D, $ = w.isBackward(), W = Y.getNode(), L = j.getNode(), F = x.is(W), z = x.is(L);
      if (F || z) {
        const [V, Q] = r.$getCharacterOffsets(w), le = W.is(L), fe = x.is($ ? L : W), ue = x.is($ ? W : L);
        let de = 0, P;
        if (le)
          de = V > Q ? Q : V, P = V > Q ? V : Q;
        else if (fe)
          de = $ ? Q : V, P = void 0;
        else if (ue) {
          const I = $ ? V : Q;
          de = 0, P = I;
        }
        return x.__text = x.__text.slice(de, P), x;
      }
    }
    return x;
  }
  function s(w) {
    if (w.type === "text")
      return w.offset === w.getNode().getTextContentSize();
    const x = w.getNode();
    if (!r.$isElementNode(x))
      throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");
    return w.offset === x.getChildrenSize();
  }
  function u(w, x, D) {
    let Y = x.getNode(), j = D;
    if (r.$isElementNode(Y)) {
      const $ = Y.getDescendantByIndex(x.offset);
      $ !== null && (Y = $);
    }
    for (; j > 0 && Y !== null; ) {
      if (r.$isElementNode(Y)) {
        const z = Y.getLastDescendant();
        z !== null && (Y = z);
      }
      let $ = Y.getPreviousSibling(), W = 0;
      if ($ === null) {
        let z = Y.getParentOrThrow(), V = z.getPreviousSibling();
        for (; V === null; ) {
          if (z = z.getParent(), z === null) {
            $ = null;
            break;
          }
          V = z.getPreviousSibling();
        }
        z !== null && (W = z.isInline() ? 0 : 2, $ = V);
      }
      let L = Y.getTextContent();
      L === "" && r.$isElementNode(Y) && !Y.isInline() && (L = `

`);
      const F = L.length;
      if (!r.$isTextNode(Y) || j >= F) {
        const z = Y.getParent();
        Y.remove(), z != null && z.getChildrenSize() === 0 && !r.$isRootNode(z) && z.remove(), j -= F + W, Y = $;
      } else {
        const z = Y.getKey(), V = w.getEditorState().read(() => {
          const fe = r.$getNodeByKey(z);
          return r.$isTextNode(fe) && fe.isSimpleText() ? fe.getTextContent() : null;
        }), Q = F - j, le = L.slice(0, Q);
        if (V !== null && V !== L) {
          const fe = r.$getPreviousSelection();
          let ue = Y;
          if (Y.isSimpleText())
            Y.setTextContent(V);
          else {
            const de = r.$createTextNode(V);
            Y.replace(de), ue = de;
          }
          if (r.$isRangeSelection(fe) && fe.isCollapsed()) {
            const de = fe.anchor.offset;
            ue.select(de, de);
          }
        } else if (Y.isSimpleText()) {
          const fe = x.key === z;
          let ue = x.offset;
          ue < j && (ue = F);
          const de = fe ? ue - j : 0, P = fe ? ue : Q;
          if (fe && de === 0) {
            const [I] = Y.splitText(de, P);
            I.remove();
          } else {
            const [, I] = Y.splitText(de, P);
            I.remove();
          }
        } else {
          const fe = r.$createTextNode(le);
          Y.replace(fe);
        }
        j = 0;
      }
    }
  }
  function c(w) {
    const x = w.getStyle(), D = a(x);
    t.set(x, D);
  }
  function N(w, x) {
    const D = i("getStyle" in w ? w.getStyle() : w.style), Y = Object.entries(x).reduce(($, [W, L]) => (L instanceof Function ? $[W] = L(D[W]) : L === null ? delete $[W] : $[W] = L, $), {
      ...D
    }), j = _(Y);
    w.setStyle(j), t.set(j, Y);
  }
  function h(w, x) {
    const D = w.getNodes(), Y = D.length, j = w.getStartEndPoints();
    if (j === null)
      return;
    const [$, W] = j, L = Y - 1;
    let F = D[0], z = D[L];
    if (w.isCollapsed() && r.$isRangeSelection(w)) {
      N(w, x);
      return;
    }
    const Q = F.getTextContent().length, le = W.offset;
    let fe = $.offset;
    const ue = $.isBefore(W);
    let de = ue ? fe : le, P = ue ? le : fe;
    const I = ue ? $.type : W.type, M = ue ? W.type : $.type, U = ue ? W.key : $.key;
    if (r.$isTextNode(F) && de === Q) {
      const q = F.getNextSibling();
      r.$isTextNode(q) && (fe = 0, de = 0, F = q);
    }
    if (D.length === 1) {
      if (r.$isTextNode(F) && F.canHaveFormat()) {
        if (de = I === "element" ? 0 : fe > le ? le : fe, P = M === "element" ? Q : fe > le ? fe : le, de === P)
          return;
        if (de === 0 && P === Q)
          N(F, x), F.select(de, P);
        else {
          const q = F.splitText(de, P), Z = de === 0 ? q[0] : q[1];
          N(Z, x), Z.select(0, P - de);
        }
      }
    } else {
      if (r.$isTextNode(F) && de < F.getTextContentSize() && F.canHaveFormat() && (de !== 0 && (F = F.splitText(de)[1], de = 0, $.set(F.getKey(), de, "text")), N(F, x)), r.$isTextNode(z) && z.canHaveFormat()) {
        const Z = z.getTextContent().length;
        z.__key !== U && P !== 0 && (P = Z), P !== Z && ([z] = z.splitText(P)), (P !== 0 || M === "element") && N(z, x);
      }
      for (let q = 1; q < L; q++) {
        const Z = D[q], J = Z.getKey();
        r.$isTextNode(Z) && Z.canHaveFormat() && J !== F.getKey() && J !== z.getKey() && !Z.isToken() && N(Z, x);
      }
    }
  }
  function E(w, x) {
    if (w === null)
      return;
    const D = w.getStartEndPoints(), Y = D ? D[0] : null;
    if (Y !== null && Y.key === "root") {
      const W = x(), L = r.$getRoot(), F = L.getFirstChild();
      F ? F.replace(W, !0) : L.append(W);
      return;
    }
    const j = w.getNodes(), $ = Y !== null ? B(Y.getNode(), K) : !1;
    $ && j.indexOf($) === -1 && j.push($);
    for (let W = 0; W < j.length; W++) {
      const L = j[W];
      if (!K(L))
        continue;
      if (!r.$isElementNode(L))
        throw Error("Expected block node to be an ElementNode");
      const F = x();
      F.setFormat(L.getFormatType()), F.setIndent(L.getIndent()), L.replace(F, !0);
    }
  }
  function d(w) {
    return w.getNode().isAttached();
  }
  function f(w) {
    let x = w;
    for (; x !== null && !r.$isRootOrShadowRoot(x); ) {
      const D = x.getLatest(), Y = x.getParent();
      D.getChildrenSize() === 0 && x.remove(!0), x = Y;
    }
  }
  function y(w, x, D = null) {
    const Y = w.getStartEndPoints(), j = Y ? Y[0] : null, $ = w.getNodes(), W = $.length;
    if (j !== null && (W === 0 || W === 1 && j.type === "element" && j.getNode().getChildrenSize() === 0)) {
      const z = j.type === "text" ? j.getNode().getParentOrThrow() : j.getNode(), V = z.getChildren();
      let Q = x();
      Q.setFormat(z.getFormatType()), Q.setIndent(z.getIndent()), V.forEach((le) => Q.append(le)), D && (Q = D.append(Q)), z.replace(Q);
      return;
    }
    let L = null, F = [];
    for (let z = 0; z < W; z++) {
      const V = $[z];
      r.$isRootOrShadowRoot(V) ? (A(w, F, F.length, x, D), F = [], L = V) : L === null || L !== null && r.$hasAncestor(V, L) ? F.push(V) : (A(w, F, F.length, x, D), F = [V]);
    }
    A(w, F, F.length, x, D);
  }
  function A(w, x, D, Y, j = null) {
    if (x.length === 0)
      return;
    const $ = x[0], W = /* @__PURE__ */ new Map(), L = [];
    let F = r.$isElementNode($) ? $ : $.getParentOrThrow();
    F.isInline() && (F = F.getParentOrThrow());
    let z = !1;
    for (; F !== null; ) {
      const ue = F.getPreviousSibling();
      if (ue !== null) {
        F = ue, z = !0;
        break;
      }
      if (F = F.getParentOrThrow(), r.$isRootOrShadowRoot(F))
        break;
    }
    const V = /* @__PURE__ */ new Set();
    for (let ue = 0; ue < D; ue++) {
      const de = x[ue];
      r.$isElementNode(de) && de.getChildrenSize() === 0 && V.add(de.getKey());
    }
    const Q = /* @__PURE__ */ new Set();
    for (let ue = 0; ue < D; ue++) {
      const de = x[ue];
      let P = de.getParent();
      if (P !== null && P.isInline() && (P = P.getParent()), P !== null && r.$isLeafNode(de) && !Q.has(de.getKey())) {
        const I = P.getKey();
        if (W.get(I) === void 0) {
          const M = Y();
          M.setFormat(P.getFormatType()), M.setIndent(P.getIndent()), L.push(M), W.set(I, M), P.getChildren().forEach((U) => {
            M.append(U), Q.add(U.getKey()), r.$isElementNode(U) && U.getChildrenKeys().forEach((q) => Q.add(q));
          }), f(P);
        }
      } else if (V.has(de.getKey())) {
        if (!r.$isElementNode(de))
          throw Error("Expected node in emptyElements to be an ElementNode");
        const I = Y();
        I.setFormat(de.getFormatType()), I.setIndent(de.getIndent()), L.push(I), de.remove(!0);
      }
    }
    if (j !== null)
      for (let ue = 0; ue < L.length; ue++) {
        const de = L[ue];
        j.append(de);
      }
    let le = null;
    if (r.$isRootOrShadowRoot(F))
      if (z)
        if (j !== null)
          F.insertAfter(j);
        else
          for (let ue = L.length - 1; ue >= 0; ue--) {
            const de = L[ue];
            F.insertAfter(de);
          }
      else {
        const ue = F.getFirstChild();
        if (r.$isElementNode(ue) && (F = ue), ue === null)
          if (j)
            F.append(j);
          else
            for (let de = 0; de < L.length; de++) {
              const P = L[de];
              F.append(P), le = P;
            }
        else if (j !== null)
          ue.insertBefore(j);
        else
          for (let de = 0; de < L.length; de++) {
            const P = L[de];
            ue.insertBefore(P), le = P;
          }
      }
    else if (j)
      F.insertAfter(j);
    else
      for (let ue = L.length - 1; ue >= 0; ue--) {
        const de = L[ue];
        F.insertAfter(de), le = de;
      }
    const fe = r.$getPreviousSelection();
    r.$isRangeSelection(fe) && d(fe.anchor) && d(fe.focus) ? r.$setSelection(fe.clone()) : le !== null ? le.selectEnd() : w.dirty = !0;
  }
  function v(w, x) {
    const D = r.$getAdjacentNode(w.focus, x);
    return r.$isDecoratorNode(D) && !D.isIsolated() || r.$isElementNode(D) && !D.isInline() && !D.canBeEmpty();
  }
  function O(w, x, D, Y) {
    w.modify(x ? "extend" : "move", D, Y);
  }
  function T(w) {
    const x = w.anchor.getNode();
    return (r.$isRootNode(x) ? x : x.getParentOrThrow()).getDirection() === "rtl";
  }
  function S(w, x, D) {
    const Y = T(w);
    O(w, x, D ? !Y : Y, "character");
  }
  function b(w) {
    const x = w.anchor, D = w.focus, $ = x.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    let W = $.getFirstDescendant(), L = $.getLastDescendant(), F = "element", z = "element", V = 0;
    r.$isTextNode(W) ? F = "text" : !r.$isElementNode(W) && W !== null && (W = W.getParentOrThrow()), r.$isTextNode(L) ? (z = "text", V = L.getTextContentSize()) : !r.$isElementNode(L) && L !== null && (L = L.getParentOrThrow()), W && L && (x.set(W.getKey(), 0, F), D.set(L.getKey(), V, z));
  }
  function k(w, x, D) {
    const Y = w.getStyle(), j = i(Y);
    return j !== null && j[x] || D;
  }
  function H(w, x, D = "") {
    let Y = null;
    const j = w.getNodes(), $ = w.anchor, W = w.focus, L = w.isBackward(), F = L ? W.offset : $.offset, z = L ? W.getNode() : $.getNode();
    if (w.isCollapsed() && w.style !== "") {
      const V = w.style, Q = i(V);
      if (Q !== null && x in Q)
        return Q[x];
    }
    for (let V = 0; V < j.length; V++) {
      const Q = j[V];
      if (!(V !== 0 && F === 0 && Q.is(z)) && r.$isTextNode(Q)) {
        const le = k(Q, x, D);
        if (Y === null)
          Y = le;
        else if (Y !== le) {
          Y = "";
          break;
        }
      }
    }
    return Y === null ? D : Y;
  }
  function K(w) {
    if (r.$isDecoratorNode(w) || !r.$isElementNode(w) || r.$isRootOrShadowRoot(w))
      return !1;
    const x = w.getFirstChild(), D = x === null || r.$isLineBreakNode(x) || r.$isTextNode(x) || x.isInline();
    return !w.isInline() && w.canBeEmpty() !== !1 && D;
  }
  function B(w, x) {
    let D = w;
    for (; D !== null && D.getParent() !== null && !x(D); )
      D = D.getParentOrThrow();
    return x(D) ? D : null;
  }
  return Tt.$addNodeStyle = c, Tt.$cloneWithProperties = C, Tt.$getSelectionStyleValueForProperty = H, Tt.$isAtNodeEnd = s, Tt.$isParentElementRTL = T, Tt.$moveCaretSelection = O, Tt.$moveCharacter = S, Tt.$patchStyleText = h, Tt.$selectAll = b, Tt.$setBlocksType = E, Tt.$shouldOverrideDefaultCharacterSelection = v, Tt.$sliceSelectedTextNodeContent = p, Tt.$wrapNodes = y, Tt.createDOMRange = o, Tt.createRectsFromDOMRange = l, Tt.getStyleObjectFromCSS = i, Tt.trimTextContentFromAnchor = u, Tt;
}
var yt = {}, is;
function Wc() {
  if (is) return yt;
  is = 1;
  var r = Ie;
  let t = /* @__PURE__ */ new Map();
  function e(s) {
    for (; s != null; ) {
      if (s.nodeType === Node.TEXT_NODE) return s;
      s = s.firstChild;
    }
    return null;
  }
  function n(s) {
    let u = s.parentNode;
    if (u == null) throw Error("Should never happen");
    return [u, Array.from(u.childNodes).indexOf(s)];
  }
  function o(s) {
    let u = {};
    s = s.split(";");
    for (let c of s) if (c !== "") {
      let [N, h] = c.split(/:([^]+)/);
      N && h && (u[N.trim()] = h.trim());
    }
    return u;
  }
  function l(s) {
    let u = t.get(s);
    return u === void 0 && (u = o(s), t.set(s, u)), u;
  }
  function a(s) {
    let u = "";
    for (let c in s) c && (u += `${c}: ${s[c]};`);
    return u;
  }
  function i(s, u) {
    let c = l("getStyle" in s ? s.getStyle() : s.style);
    u = Object.entries(u).reduce((h, [E, d]) => (d instanceof Function ? h[E] = d(c[E]) : d === null ? delete h[E] : h[E] = d, h), { ...c });
    let N = a(u);
    s.setStyle(N), t.set(N, u);
  }
  function _(s) {
    for (; s !== null && !r.$isRootOrShadowRoot(s); ) {
      let u = s.getLatest(), c = s.getParent();
      u.getChildrenSize() === 0 && s.remove(!0), s = c;
    }
  }
  function m(s, u, c, N, h = null) {
    if (u.length !== 0) {
      var E = u[0], d = /* @__PURE__ */ new Map(), f = [];
      E = r.$isElementNode(E) ? E : E.getParentOrThrow(), E.isInline() && (E = E.getParentOrThrow());
      for (var y = !1; E !== null; ) {
        var A = E.getPreviousSibling();
        if (A !== null) {
          E = A, y = !0;
          break;
        }
        if (E = E.getParentOrThrow(), r.$isRootOrShadowRoot(E)) break;
      }
      A = /* @__PURE__ */ new Set();
      for (var v = 0; v < c; v++) {
        var O = u[v];
        r.$isElementNode(O) && O.getChildrenSize() === 0 && A.add(O.getKey());
      }
      var T = /* @__PURE__ */ new Set();
      for (v = 0; v < c; v++) {
        O = u[v];
        var S = O.getParent();
        if (S !== null && S.isInline() && (S = S.getParent()), S !== null && r.$isLeafNode(O) && !T.has(O.getKey())) {
          if (O = S.getKey(), d.get(O) === void 0) {
            let b = N();
            b.setFormat(S.getFormatType()), b.setIndent(S.getIndent()), f.push(b), d.set(O, b), S.getChildren().forEach((k) => {
              b.append(k), T.add(k.getKey()), r.$isElementNode(k) && k.getChildrenKeys().forEach((H) => T.add(H));
            }), _(S);
          }
        } else if (A.has(O.getKey())) {
          if (!r.$isElementNode(O)) throw Error("Expected node in emptyElements to be an ElementNode");
          S = N(), S.setFormat(O.getFormatType()), S.setIndent(O.getIndent()), f.push(S), O.remove(!0);
        }
      }
      if (h !== null) for (u = 0; u < f.length; u++) h.append(f[u]);
      if (u = null, r.$isRootOrShadowRoot(E)) if (y) if (h !== null) E.insertAfter(h);
      else for (h = f.length - 1; 0 <= h; h--) E.insertAfter(f[h]);
      else if (y = E.getFirstChild(), r.$isElementNode(y) && (E = y), y === null) if (h) E.append(h);
      else for (h = 0; h < f.length; h++) y = f[h], E.append(y), u = y;
      else if (h !== null) y.insertBefore(h);
      else for (E = 0; E < f.length; E++) h = f[E], y.insertBefore(h), u = h;
      else if (h) E.insertAfter(h);
      else for (h = f.length - 1; 0 <= h; h--) y = f[h], E.insertAfter(y), u = y;
      f = r.$getPreviousSelection(), r.$isRangeSelection(f) && f.anchor.getNode().isAttached() && f.focus.getNode().isAttached() ? r.$setSelection(f.clone()) : u !== null ? u.selectEnd() : s.dirty = !0;
    }
  }
  function g(s, u, c, N) {
    s.modify(u ? "extend" : "move", c, N);
  }
  function C(s) {
    return s = s.anchor.getNode(), (r.$isRootNode(s) ? s : s.getParentOrThrow()).getDirection() === "rtl";
  }
  function p(s) {
    if (r.$isDecoratorNode(s) || !r.$isElementNode(s) || r.$isRootOrShadowRoot(s)) return !1;
    var u = s.getFirstChild();
    return u = u === null || r.$isLineBreakNode(u) || r.$isTextNode(u) || u.isInline(), !s.isInline() && s.canBeEmpty() !== !1 && u;
  }
  return yt.$addNodeStyle = function(s) {
    s = s.getStyle();
    let u = o(s);
    t.set(s, u);
  }, yt.$cloneWithProperties = function(s) {
    let u = s.constructor.clone(s);
    return u.__parent = s.__parent, u.__next = s.__next, u.__prev = s.__prev, r.$isElementNode(s) && r.$isElementNode(u) ? (u.__first = s.__first, u.__last = s.__last, u.__size = s.__size, u.__format = s.__format, u.__indent = s.__indent, u.__dir = s.__dir, u) : (r.$isTextNode(s) && r.$isTextNode(u) && (u.__format = s.__format, u.__style = s.__style, u.__mode = s.__mode, u.__detail = s.__detail), u);
  }, yt.$getSelectionStyleValueForProperty = function(s, u, c = "") {
    let N = null, h = s.getNodes();
    var E = s.anchor, d = s.focus, f = s.isBackward();
    let y = f ? d.offset : E.offset;
    if (E = f ? d.getNode() : E.getNode(), s.isCollapsed() && s.style !== "" && (s = l(s.style), s !== null && u in s)) return s[u];
    for (s = 0; s < h.length; s++) {
      var A = h[s];
      if ((s === 0 || y !== 0 || !A.is(E)) && r.$isTextNode(A)) {
        if (d = u, f = c, A = A.getStyle(), A = l(A), d = A !== null && A[d] || f, N === null) N = d;
        else if (N !== d) {
          N = "";
          break;
        }
      }
    }
    return N === null ? c : N;
  }, yt.$isAtNodeEnd = function(s) {
    if (s.type === "text") return s.offset === s.getNode().getTextContentSize();
    let u = s.getNode();
    if (!r.$isElementNode(u)) throw Error("isAtNodeEnd: node must be a TextNode or ElementNode");
    return s.offset === u.getChildrenSize();
  }, yt.$isParentElementRTL = C, yt.$moveCaretSelection = g, yt.$moveCharacter = function(s, u, c) {
    let N = C(s);
    g(s, u, c ? !N : N, "character");
  }, yt.$patchStyleText = function(s, u) {
    var c = s.getNodes(), N = c.length, h = s.getStartEndPoints();
    if (h !== null) {
      var [E, d] = h;
      --N, h = c[0];
      var f = c[N];
      if (s.isCollapsed() && r.$isRangeSelection(s)) i(s, u);
      else {
        var y = h.getTextContent().length, A = d.offset, v = E.offset, O = E.isBefore(d), T = O ? v : A;
        s = O ? A : v;
        var S = O ? E.type : d.type, b = O ? d.type : E.type;
        if (O = O ? d.key : E.key, r.$isTextNode(h) && T === y) {
          let k = h.getNextSibling();
          r.$isTextNode(k) && (T = v = 0, h = k);
        }
        if (c.length === 1) r.$isTextNode(h) && h.canHaveFormat() && (T = S === "element" ? 0 : v > A ? A : v, s = b === "element" ? y : v > A ? v : A, T !== s && (T === 0 && s === y ? (i(h, u), h.select(T, s)) : (c = h.splitText(T, s), c = T === 0 ? c[0] : c[1], i(c, u), c.select(0, s - T))));
        else for (r.$isTextNode(h) && T < h.getTextContentSize() && h.canHaveFormat() && (T !== 0 && (h = h.splitText(T)[1], T = 0, E.set(h.getKey(), T, "text")), i(h, u)), r.$isTextNode(f) && f.canHaveFormat() && (T = f.getTextContent().length, f.__key !== O && s !== 0 && (s = T), s !== T && ([f] = f.splitText(s)), s === 0 && b !== "element" || i(f, u)), s = 1; s < N; s++) T = c[s], b = T.getKey(), r.$isTextNode(T) && T.canHaveFormat() && b !== h.getKey() && b !== f.getKey() && !T.isToken() && i(T, u);
      }
    }
  }, yt.$selectAll = function(s) {
    let u = s.anchor;
    s = s.focus;
    var c = u.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    let N = c.getFirstDescendant();
    c = c.getLastDescendant();
    let h = "element", E = "element", d = 0;
    r.$isTextNode(N) ? h = "text" : r.$isElementNode(N) || N === null || (N = N.getParentOrThrow()), r.$isTextNode(c) ? (E = "text", d = c.getTextContentSize()) : r.$isElementNode(c) || c === null || (c = c.getParentOrThrow()), N && c && (u.set(N.getKey(), 0, h), s.set(c.getKey(), d, E));
  }, yt.$setBlocksType = function(s, u) {
    if (s !== null) {
      var c = s.getStartEndPoints();
      if (c = c ? c[0] : null, c !== null && c.key === "root") u = u(), s = r.$getRoot(), (c = s.getFirstChild()) ? c.replace(u, !0) : s.append(u);
      else {
        if (s = s.getNodes(), c !== null) {
          for (c = c.getNode(); c !== null && c.getParent() !== null && !p(c); ) c = c.getParentOrThrow();
          c = p(c) ? c : null;
        } else c = !1;
        for (c && s.indexOf(c) === -1 && s.push(c), c = 0; c < s.length; c++) {
          let N = s[c];
          if (!p(N)) continue;
          if (!r.$isElementNode(N)) throw Error("Expected block node to be an ElementNode");
          let h = u();
          h.setFormat(N.getFormatType()), h.setIndent(N.getIndent()), N.replace(h, !0);
        }
      }
    }
  }, yt.$shouldOverrideDefaultCharacterSelection = function(s, u) {
    return s = r.$getAdjacentNode(s.focus, u), r.$isDecoratorNode(s) && !s.isIsolated() || r.$isElementNode(s) && !s.isInline() && !s.canBeEmpty();
  }, yt.$sliceSelectedTextNodeContent = function(s, u) {
    var c = s.getStartEndPoints();
    if (u.isSelected(s) && !u.isSegmented() && !u.isToken() && c !== null) {
      let [f, y] = c;
      c = s.isBackward();
      var N = f.getNode(), h = y.getNode(), E = u.is(N), d = u.is(h);
      if (E || d) {
        let [A, v] = r.$getCharacterOffsets(s);
        s = N.is(h), E = u.is(c ? h : N), h = u.is(c ? N : h), N = 0, d = void 0, s ? (N = A > v ? v : A, d = A > v ? A : v) : E ? (N = c ? v : A, d = void 0) : h && (c = c ? A : v, N = 0, d = c), u.__text = u.__text.slice(N, d);
      }
    }
    return u;
  }, yt.$wrapNodes = function(s, u, c = null) {
    var N = s.getStartEndPoints(), h = N ? N[0] : null;
    N = s.getNodes();
    let E = N.length;
    if (h !== null && (E === 0 || E === 1 && h.type === "element" && h.getNode().getChildrenSize() === 0)) {
      s = h.type === "text" ? h.getNode().getParentOrThrow() : h.getNode(), N = s.getChildren();
      let f = u();
      f.setFormat(s.getFormatType()), f.setIndent(s.getIndent()), N.forEach((y) => f.append(y)), c && (f = c.append(f)), s.replace(f);
    } else {
      h = null;
      var d = [];
      for (let f = 0; f < E; f++) {
        let y = N[f];
        r.$isRootOrShadowRoot(y) ? (m(s, d, d.length, u, c), d = [], h = y) : h === null || h !== null && r.$hasAncestor(y, h) ? d.push(y) : (m(s, d, d.length, u, c), d = [y]);
      }
      m(s, d, d.length, u, c);
    }
  }, yt.createDOMRange = function(s, u, c, N, h) {
    let E = u.getKey(), d = N.getKey(), f = document.createRange(), y = s.getElementByKey(E);
    if (s = s.getElementByKey(d), r.$isTextNode(u) && (y = e(y)), r.$isTextNode(N) && (s = e(s)), u === void 0 || N === void 0 || y === null || s === null) return null;
    y.nodeName === "BR" && ([y, c] = n(y)), s.nodeName === "BR" && ([s, h] = n(s)), u = y.firstChild, y === s && u != null && u.nodeName === "BR" && c === 0 && h === 0 && (h = 1);
    try {
      f.setStart(y, c), f.setEnd(s, h);
    } catch {
      return null;
    }
    return !f.collapsed || c === h && E === d || (f.setStart(s, h), f.setEnd(
      y,
      c
    )), f;
  }, yt.createRectsFromDOMRange = function(s, u) {
    var c = s.getRootElement();
    if (c === null) return [];
    s = c.getBoundingClientRect(), c = getComputedStyle(c), c = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight), u = Array.from(u.getClientRects());
    let N = u.length;
    u.sort((E, d) => {
      let f = E.top - d.top;
      return 3 >= Math.abs(f) ? E.left - d.left : f;
    });
    let h;
    for (let E = 0; E < N; E++) {
      let d = u[E], f = d.width + c === s.width;
      h && h.top <= d.top && h.top + h.height > d.top && h.left + h.width > d.left || f ? (u.splice(E--, 1), N--) : h = d;
    }
    return u;
  }, yt.getStyleObjectFromCSS = l, yt.trimTextContentFromAnchor = function(s, u, c) {
    let N = u.getNode();
    if (r.$isElementNode(N)) {
      var h = N.getDescendantByIndex(u.offset);
      h !== null && (N = h);
    }
    for (; 0 < c && N !== null; ) {
      r.$isElementNode(N) && (h = N.getLastDescendant(), h !== null && (N = h));
      var E = N.getPreviousSibling(), d = 0;
      if (E === null) {
        h = N.getParentOrThrow();
        for (var f = h.getPreviousSibling(); f === null; ) {
          if (h = h.getParent(), h === null) {
            E = null;
            break;
          }
          f = h.getPreviousSibling();
        }
        h !== null && (d = h.isInline() ? 0 : 2, E = f);
      }
      if (f = N.getTextContent(), f === "" && r.$isElementNode(N) && !N.isInline() && (f = `

`), h = f.length, !r.$isTextNode(N) || c >= h) f = N.getParent(), N.remove(), f == null || f.getChildrenSize() !== 0 || r.$isRootNode(f) || f.remove(), c -= h + d, N = E;
      else {
        let y = N.getKey();
        d = s.getEditorState().read(() => {
          const v = r.$getNodeByKey(y);
          return r.$isTextNode(v) && v.isSimpleText() ? v.getTextContent() : null;
        }), E = h - c;
        let A = f.slice(0, E);
        d !== null && d !== f ? (c = r.$getPreviousSelection(), h = N, N.isSimpleText() ? N.setTextContent(d) : (h = r.$createTextNode(d), N.replace(h)), r.$isRangeSelection(c) && c.isCollapsed() && (c = c.anchor.offset, h.select(c, c))) : N.isSimpleText() ? (d = u.key === y, f = u.offset, f < c && (f = h), c = d ? f - c : 0, h = d ? f : E, d && c === 0 ? ([c] = N.splitText(c, h), c.remove()) : ([, c] = N.splitText(c, h), c.remove())) : (c = r.$createTextNode(A), N.replace(c)), c = 0;
      }
    }
  }, yt;
}
var qr, ss;
function en() {
  return ss || (ss = 1, qr = process.env.NODE_ENV === "development" ? Yc() : Wc()), qr;
}
var ls;
function qc() {
  if (ls) return pt;
  ls = 1;
  var r = en(), t = Ie;
  function e(...v) {
    return () => {
      v.forEach((O) => O());
    };
  }
  function n(v) {
    return `${v}px`;
  }
  const o = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  };
  function l(v, O, T) {
    let S = null, b = null, k = null, H = [];
    const K = document.createElement("div");
    function B() {
      if (S === null)
        throw Error("Unexpected null rootDOMNode");
      if (b === null)
        throw Error("Unexpected null parentDOMNode");
      const {
        left: Y,
        top: j
      } = S.getBoundingClientRect(), $ = b, W = r.createRectsFromDOMRange(v, O);
      K.isConnected || $.append(K);
      let L = !1;
      for (let F = 0; F < W.length; F++) {
        const z = W[F], V = H[F] || document.createElement("div"), Q = V.style;
        Q.position !== "absolute" && (Q.position = "absolute", L = !0);
        const le = n(z.left - Y);
        Q.left !== le && (Q.left = le, L = !0);
        const fe = n(z.top - j);
        Q.top !== fe && (V.style.top = fe, L = !0);
        const ue = n(z.width);
        Q.width !== ue && (V.style.width = ue, L = !0);
        const de = n(z.height);
        Q.height !== de && (V.style.height = de, L = !0), V.parentNode !== K && (K.append(V), L = !0), H[F] = V;
      }
      for (; H.length > W.length; )
        H.pop();
      L && T(H);
    }
    function w() {
      b = null, S = null, k !== null && k.disconnect(), k = null, K.remove();
      for (const Y of H)
        Y.remove();
      H = [];
    }
    function x() {
      const Y = v.getRootElement();
      if (Y === null)
        return w();
      const j = Y.parentElement;
      if (!(j instanceof HTMLElement))
        return w();
      w(), S = Y, b = j, k = new MutationObserver(($) => {
        const W = v.getRootElement(), L = W && W.parentElement;
        if (W !== S || L !== b)
          return x();
        for (const F of $)
          if (!K.contains(F.target))
            return B();
      }), k.observe(j, o), B();
    }
    const D = v.registerRootListener(x);
    return () => {
      D(), w();
    };
  }
  function a(v, O) {
    let T = null, S = null, b = null, k = null, H = () => {
    };
    function K(B) {
      B.read(() => {
        const w = t.$getSelection();
        if (!t.$isRangeSelection(w)) {
          T = null, S = null, b = null, k = null, H(), H = () => {
          };
          return;
        }
        const {
          anchor: x,
          focus: D
        } = w, Y = x.getNode(), j = Y.getKey(), $ = x.offset, W = D.getNode(), L = W.getKey(), F = D.offset, z = v.getElementByKey(j), V = v.getElementByKey(L), Q = T === null || z === null || $ !== S || j !== T.getKey() || Y !== T && (!(T instanceof t.TextNode) || Y.updateDOM(T, z, v._config)), le = b === null || V === null || F !== k || L !== b.getKey() || W !== b && (!(b instanceof t.TextNode) || W.updateDOM(b, V, v._config));
        if (Q || le) {
          const fe = v.getElementByKey(x.getNode().getKey()), ue = v.getElementByKey(D.getNode().getKey());
          if (fe !== null && ue !== null && fe.tagName === "SPAN" && ue.tagName === "SPAN") {
            const de = document.createRange();
            let P, I, M, U;
            D.isBefore(x) ? (P = ue, I = D.offset, M = fe, U = x.offset) : (P = fe, I = x.offset, M = ue, U = D.offset);
            const q = P.firstChild;
            if (q === null)
              throw Error("Expected text node to be first child of span");
            const Z = M.firstChild;
            if (Z === null)
              throw Error("Expected text node to be first child of span");
            de.setStart(q, I), de.setEnd(Z, U), H(), H = l(v, de, (J) => {
              for (const re of J) {
                const ce = re.style;
                ce.background !== "Highlight" && (ce.background = "Highlight"), ce.color !== "HighlightText" && (ce.color = "HighlightText"), ce.zIndex !== "-1" && (ce.zIndex = "-1"), ce.pointerEvents !== "none" && (ce.pointerEvents = "none"), ce.marginTop !== n(-1.5) && (ce.marginTop = n(-1.5)), ce.paddingTop !== n(4) && (ce.paddingTop = n(4)), ce.paddingBottom !== n(0) && (ce.paddingBottom = n(0));
              }
              O !== void 0 && O(J);
            });
          }
        }
        T = Y, S = $, b = W, k = F;
      });
    }
    return K(v.getEditorState()), e(v.registerUpdateListener(({
      editorState: B
    }) => K(B)), H, () => {
      H();
    });
  }
  function i(v, ...O) {
    O.forEach((T) => {
      if (typeof T == "string") {
        const S = T.split(" ").filter((b) => b !== "");
        v.classList.add(...S);
      }
    });
  }
  function _(v, ...O) {
    O.forEach((T) => {
      typeof T == "string" && v.classList.remove(...T.split(" "));
    });
  }
  function m(v, O) {
    for (const T of O)
      if (v.type.startsWith(T))
        return !0;
    return !1;
  }
  function g(v, O) {
    const T = v[Symbol.iterator]();
    return new Promise((S, b) => {
      const k = [], H = () => {
        const {
          done: K,
          value: B
        } = T.next();
        if (K)
          return S(k);
        const w = new FileReader();
        w.addEventListener("error", b), w.addEventListener("load", () => {
          const x = w.result;
          typeof x == "string" && k.push({
            file: B,
            result: x
          }), H();
        }), m(B, O) ? w.readAsDataURL(B) : H();
      };
      H();
    });
  }
  function C(v, O) {
    const T = [], S = (v || t.$getRoot()).getLatest(), b = O || (t.$isElementNode(S) ? S.getLastDescendant() : S);
    let k = S, H = p(k);
    for (; k !== null && !k.is(b); )
      if (T.push({
        depth: H,
        node: k
      }), t.$isElementNode(k) && k.getChildrenSize() > 0)
        k = k.getFirstChild(), H++;
      else {
        let K = null;
        for (; K === null && k !== null; )
          K = k.getNextSibling(), K === null ? (k = k.getParent(), H--) : k = K;
      }
    return k !== null && k.is(b) && T.push({
      depth: H,
      node: k
    }), T;
  }
  function p(v) {
    let O = v, T = 0;
    for (; (O = O.getParent()) !== null; )
      T++;
    return T;
  }
  function s(v, O) {
    let T = v;
    for (; T != null; ) {
      if (T instanceof O)
        return T;
      T = T.getParent();
    }
    return null;
  }
  function u(v) {
    const O = c(v, (T) => t.$isElementNode(T) && !T.isInline());
    if (!t.$isElementNode(O))
      throw Error(`Expected node ${v.__key} to have closest block element node.`);
    return O;
  }
  const c = (v, O) => {
    let T = v;
    for (; T !== t.$getRoot() && T != null; ) {
      if (O(T))
        return T;
      T = T.getParent();
    }
    return null;
  };
  function N(v, O, T, S) {
    const b = (K) => K instanceof O, k = (K) => {
      const B = K.getChildren();
      for (let D = 0; D < B.length; D++) {
        const Y = B[D];
        if (b(Y))
          return null;
      }
      let w = K, x = K;
      for (; w !== null; )
        if (x = w, w = w.getParent(), b(w))
          return {
            child: x,
            parent: w
          };
      return null;
    }, H = (K) => {
      const B = k(K);
      if (B !== null) {
        const {
          child: w,
          parent: x
        } = B;
        if (w.is(K)) {
          S(x, K);
          const D = w.getNextSiblings(), Y = D.length;
          if (x.insertAfter(w), Y !== 0) {
            const j = T(x);
            w.insertAfter(j);
            for (let $ = 0; $ < Y; $++)
              j.append(D[$]);
          }
          !x.canBeEmpty() && x.getChildrenSize() === 0 && x.remove();
        }
      }
    };
    return v.registerNodeTransform(O, H);
  }
  function h(v, O) {
    const S = /* @__PURE__ */ new Map(), b = v._pendingEditorState;
    for (const [H, K] of O._nodeMap) {
      const B = r.$cloneWithProperties(K);
      if (t.$isTextNode(B)) {
        if (!t.$isTextNode(K))
          throw Error("Expected node be a TextNode");
        B.__text = K.__text;
      }
      S.set(H, B);
    }
    b && (b._nodeMap = S), v._dirtyType = 2;
    const k = O._selection;
    t.$setSelection(k === null ? null : k.clone());
  }
  function E(v) {
    const O = t.$getSelection() || t.$getPreviousSelection();
    if (t.$isRangeSelection(O)) {
      const {
        focus: T
      } = O, S = T.getNode(), b = T.offset;
      if (t.$isRootOrShadowRoot(S)) {
        const k = S.getChildAtIndex(b);
        k == null ? S.append(v) : k.insertBefore(v), v.selectNext();
      } else {
        let k, H;
        t.$isTextNode(S) ? (k = S.getParentOrThrow(), H = S.getIndexWithinParent(), b > 0 && (H += 1, S.splitText(b))) : (k = S, H = b);
        const [, K] = t.$splitNode(k, H);
        K.insertBefore(v), K.selectStart();
      }
    } else {
      if (O != null) {
        const S = O.getNodes();
        S[S.length - 1].getTopLevelElementOrThrow().insertAfter(v);
      } else
        t.$getRoot().append(v);
      const T = t.$createParagraphNode();
      v.insertAfter(T), T.select();
    }
    return v.getLatest();
  }
  function d(v, O) {
    const T = O();
    return v.replace(T), T.append(v), T;
  }
  function f(v, O) {
    return v !== null ? Object.getPrototypeOf(v).constructor.name === O.name : !1;
  }
  function y(v, O) {
    const T = [];
    for (let S = 0; S < v.length; S++) {
      const b = O(v[S]);
      b !== null && T.push(b);
    }
    return T;
  }
  function A(v, O) {
    const T = v.getFirstChild();
    T !== null ? T.insertBefore(O) : v.append(O);
  }
  return pt.$splitNode = t.$splitNode, pt.isHTMLAnchorElement = t.isHTMLAnchorElement, pt.isHTMLElement = t.isHTMLElement, pt.$dfs = C, pt.$filter = y, pt.$findMatchingParent = c, pt.$getNearestBlockElementAncestorOrThrow = u, pt.$getNearestNodeOfType = s, pt.$insertFirst = A, pt.$insertNodeToNearestRoot = E, pt.$restoreEditorState = h, pt.$wrapNodeInElement = d, pt.addClassNamesToElement = i, pt.isMimeType = m, pt.markSelection = a, pt.mediaFileReader = g, pt.mergeRegister = e, pt.objectKlassEquals = f, pt.positionNodeOnRange = l, pt.registerNestedElementResolver = N, pt.removeClassNamesFromElement = _, pt;
}
var mt = {}, as;
function zc() {
  if (as) return mt;
  as = 1;
  var r = en(), t = Ie;
  function e(_) {
    let m = new URLSearchParams();
    m.append("code", _);
    for (let g = 1; g < arguments.length; g++) m.append("v", arguments[g]);
    throw Error(`Minified Lexical error #${_}; visit https://lexical.dev/docs/error?${m} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  function n(..._) {
    return () => {
      _.forEach((m) => m());
    };
  }
  let o = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
  function l(_, m, g) {
    function C() {
      if (u === null) throw Error("Unexpected null rootDOMNode");
      if (c === null) throw Error("Unexpected null parentDOMNode");
      let { left: f, top: y } = u.getBoundingClientRect();
      var A = c;
      let v = r.createRectsFromDOMRange(_, m);
      E.isConnected || A.append(E), A = !1;
      for (let S = 0; S < v.length; S++) {
        var O = v[S];
        let b = h[S] || document.createElement("div"), k = b.style;
        k.position !== "absolute" && (k.position = "absolute", A = !0);
        var T = `${O.left - f}px`;
        k.left !== T && (k.left = T, A = !0), T = `${O.top - y}px`, k.top !== T && (b.style.top = T, A = !0), T = `${O.width}px`, k.width !== T && (b.style.width = T, A = !0), O = `${O.height}px`, k.height !== O && (b.style.height = O, A = !0), b.parentNode !== E && (E.append(b), A = !0), h[S] = b;
      }
      for (; h.length > v.length; ) h.pop();
      A && g(h);
    }
    function p() {
      u = c = null, N !== null && N.disconnect(), N = null, E.remove();
      for (let f of h) f.remove();
      h = [];
    }
    function s() {
      let f = _.getRootElement();
      if (f === null) return p();
      let y = f.parentElement;
      if (!(y instanceof HTMLElement)) return p();
      p(), u = f, c = y, N = new MutationObserver((A) => {
        let v = _.getRootElement(), O = v && v.parentElement;
        if (v !== u || O !== c) return s();
        for (let T of A) if (!E.contains(T.target)) return C();
      }), N.observe(y, o), C();
    }
    let u = null, c = null, N = null, h = [], E = document.createElement("div"), d = _.registerRootListener(s);
    return () => {
      d(), p();
    };
  }
  function a(_, m) {
    for (let g of m) if (_.type.startsWith(g)) return !0;
    return !1;
  }
  let i = (_, m) => {
    for (; _ !== t.$getRoot() && _ != null; ) {
      if (m(_)) return _;
      _ = _.getParent();
    }
    return null;
  };
  return mt.$splitNode = t.$splitNode, mt.isHTMLAnchorElement = t.isHTMLAnchorElement, mt.isHTMLElement = t.isHTMLElement, mt.$dfs = function(_, m) {
    let g = [];
    _ = (_ || t.$getRoot()).getLatest(), m = m || (t.$isElementNode(_) ? _.getLastDescendant() : _);
    for (var C = _, p = 0; (C = C.getParent()) !== null; ) p++;
    for (C = p; _ !== null && !_.is(m); ) if (g.push({ depth: C, node: _ }), t.$isElementNode(_) && 0 < _.getChildrenSize()) _ = _.getFirstChild(), C++;
    else for (p = null; p === null && _ !== null; ) p = _.getNextSibling(), p === null ? (_ = _.getParent(), C--) : _ = p;
    return _ !== null && _.is(m) && g.push({ depth: C, node: _ }), g;
  }, mt.$filter = function(_, m) {
    let g = [];
    for (let C = 0; C < _.length; C++) {
      let p = m(_[C]);
      p !== null && g.push(p);
    }
    return g;
  }, mt.$findMatchingParent = i, mt.$getNearestBlockElementAncestorOrThrow = function(_) {
    let m = i(_, (g) => t.$isElementNode(g) && !g.isInline());
    return t.$isElementNode(m) || e(4, _.__key), m;
  }, mt.$getNearestNodeOfType = function(_, m) {
    for (; _ != null; ) {
      if (_ instanceof m) return _;
      _ = _.getParent();
    }
    return null;
  }, mt.$insertFirst = function(_, m) {
    let g = _.getFirstChild();
    g !== null ? g.insertBefore(m) : _.append(m);
  }, mt.$insertNodeToNearestRoot = function(_) {
    var m = t.$getSelection() || t.$getPreviousSelection();
    if (t.$isRangeSelection(m)) {
      var { focus: g } = m;
      if (m = g.getNode(), g = g.offset, t.$isRootOrShadowRoot(m)) g = m.getChildAtIndex(g), g == null ? m.append(_) : g.insertBefore(_), _.selectNext();
      else {
        let C, p;
        t.$isTextNode(m) ? (C = m.getParentOrThrow(), p = m.getIndexWithinParent(), 0 < g && (p += 1, m.splitText(g))) : (C = m, p = g), [, m] = t.$splitNode(C, p), m.insertBefore(_), m.selectStart();
      }
    } else m != null ? (m = m.getNodes(), m[m.length - 1].getTopLevelElementOrThrow().insertAfter(_)) : t.$getRoot().append(_), m = t.$createParagraphNode(), _.insertAfter(m), m.select();
    return _.getLatest();
  }, mt.$restoreEditorState = function(_, m) {
    let g = /* @__PURE__ */ new Map(), C = _._pendingEditorState;
    for (let [p, s] of m._nodeMap) {
      let u = r.$cloneWithProperties(s);
      if (t.$isTextNode(u)) {
        if (!t.$isTextNode(s)) throw Error("Expected node be a TextNode");
        u.__text = s.__text;
      }
      g.set(p, u);
    }
    C && (C._nodeMap = g), _._dirtyType = 2, _ = m._selection, t.$setSelection(_ === null ? null : _.clone());
  }, mt.$wrapNodeInElement = function(_, m) {
    return m = m(), _.replace(m), m.append(_), m;
  }, mt.addClassNamesToElement = function(_, ...m) {
    m.forEach((g) => {
      typeof g == "string" && (g = g.split(" ").filter((C) => C !== ""), _.classList.add(...g));
    });
  }, mt.isMimeType = a, mt.markSelection = function(_, m) {
    function g(N) {
      N.read(() => {
        var h = t.$getSelection();
        if (t.$isRangeSelection(h)) {
          var { anchor: E, focus: d } = h;
          h = E.getNode();
          var f = h.getKey(), y = E.offset, A = d.getNode(), v = A.getKey(), O = d.offset, T = _.getElementByKey(f), S = _.getElementByKey(v);
          if (f = C === null || T === null || y !== p || f !== C.getKey() || h !== C && (!(C instanceof t.TextNode) || h.updateDOM(C, T, _._config)), v = s === null || S === null || O !== u || v !== s.getKey() || A !== s && (!(s instanceof t.TextNode) || A.updateDOM(s, S, _._config)), f || v) {
            T = _.getElementByKey(E.getNode().getKey());
            var b = _.getElementByKey(d.getNode().getKey());
            if (T !== null && b !== null && T.tagName === "SPAN" && b.tagName === "SPAN") {
              if (v = document.createRange(), d.isBefore(E) ? (f = b, S = d.offset, b = T, T = E.offset) : (f = T, S = E.offset, T = d.offset), f = f.firstChild, f === null || (b = b.firstChild, b === null)) throw Error("Expected text node to be first child of span");
              v.setStart(f, S), v.setEnd(b, T), c(), c = l(_, v, (k) => {
                for (let H of k) {
                  let K = H.style;
                  K.background !== "Highlight" && (K.background = "Highlight"), K.color !== "HighlightText" && (K.color = "HighlightText"), K.zIndex !== "-1" && (K.zIndex = "-1"), K.pointerEvents !== "none" && (K.pointerEvents = "none"), K.marginTop !== "-1.5px" && (K.marginTop = "-1.5px"), K.paddingTop !== "4px" && (K.paddingTop = "4px"), K.paddingBottom !== "0px" && (K.paddingBottom = "0px");
                }
                m !== void 0 && m(k);
              });
            }
          }
          C = h, p = y, s = A, u = O;
        } else u = s = p = C = null, c(), c = () => {
        };
      });
    }
    let C = null, p = null, s = null, u = null, c = () => {
    };
    return g(_.getEditorState()), n(_.registerUpdateListener(({ editorState: N }) => g(N)), c, () => {
      c();
    });
  }, mt.mediaFileReader = function(_, m) {
    let g = _[Symbol.iterator]();
    return new Promise((C, p) => {
      let s = [], u = () => {
        const { done: c, value: N } = g.next();
        if (c) return C(s);
        const h = new FileReader();
        h.addEventListener("error", p), h.addEventListener("load", () => {
          const E = h.result;
          typeof E == "string" && s.push({ file: N, result: E }), u();
        }), a(N, m) ? h.readAsDataURL(N) : u();
      };
      u();
    });
  }, mt.mergeRegister = n, mt.objectKlassEquals = function(_, m) {
    return _ !== null ? Object.getPrototypeOf(_).constructor.name === m.name : !1;
  }, mt.positionNodeOnRange = l, mt.registerNestedElementResolver = function(_, m, g, C) {
    return _.registerNodeTransform(m, (p) => {
      e: {
        for (var s = p.getChildren(), u = 0; u < s.length; u++) if (s[u] instanceof m) {
          s = null;
          break e;
        }
        for (s = p; s !== null; ) if (u = s, s = s.getParent(), s instanceof m) {
          s = { child: u, parent: s };
          break e;
        }
        s = null;
      }
      if (s !== null) {
        const { child: c, parent: N } = s;
        if (c.is(p)) {
          if (C(N, p), p = c.getNextSiblings(), s = p.length, N.insertAfter(c), s !== 0) {
            u = g(N), c.insertAfter(u);
            for (let h = 0; h < s; h++) u.append(p[h]);
          }
          N.canBeEmpty() || N.getChildrenSize() !== 0 || N.remove();
        }
      }
    });
  }, mt.removeClassNamesFromElement = function(_, ...m) {
    m.forEach((g) => {
      typeof g == "string" && _.classList.remove(...g.split(" "));
    });
  }, mt;
}
var zr, cs;
function Ke() {
  return cs || (cs = 1, zr = process.env.NODE_ENV === "development" ? qc() : zc()), zr;
}
var us;
function Gc() {
  if (us) return Nt;
  us = 1;
  var r = ma();
  _a(), Na(), Ca(), xa(), Ea(), Ta(), ya(), va(), Sa(), ba(), Oa(), wa(), Ra(), Ma();
  var t = Ke(), e = Ie;
  const n = (M) => M != null && r.languages.hasOwnProperty(M) ? M : void 0;
  function o(M, U) {
    for (const q of M.childNodes) {
      if (t.isHTMLElement(q) && q.tagName === U)
        return !0;
      o(q, U);
    }
    return !1;
  }
  const l = "data-highlight-language";
  class a extends e.ElementNode {
    /** @internal */
    static getType() {
      return "code";
    }
    static clone(U) {
      return new a(U.__language, U.__key);
    }
    constructor(U, q) {
      super(q), this.__language = n(U);
    }
    // View
    createDOM(U) {
      const q = document.createElement("code");
      t.addClassNamesToElement(q, U.theme.code), q.setAttribute("spellcheck", "false");
      const Z = this.getLanguage();
      return Z && q.setAttribute(l, Z), q;
    }
    updateDOM(U, q, Z) {
      const J = this.__language, re = U.__language;
      return J ? J !== re && q.setAttribute(l, J) : re && q.removeAttribute(l), !1;
    }
    exportDOM() {
      const U = document.createElement("pre");
      U.setAttribute("spellcheck", "false");
      const q = this.getLanguage();
      return q && U.setAttribute(l, q), {
        element: U
      };
    }
    static importDOM() {
      return {
        // Typically <pre> is used for code blocks, and <code> for inline code styles
        // but if it's a multi line <code> we'll create a block. Pass through to
        // inline format handled by TextNode otherwise.
        code: (U) => U.textContent != null && (/\r?\n/.test(U.textContent) || o(U, "BR")) ? {
          conversion: m,
          priority: 1
        } : null,
        div: (U) => ({
          conversion: g,
          priority: 1
        }),
        pre: (U) => ({
          conversion: m,
          priority: 0
        }),
        table: (U) => h(U) ? {
          conversion: C,
          priority: 3
        } : null,
        td: (U) => {
          const q = U, Z = q.closest("table");
          return N(q) ? {
            conversion: s,
            priority: 3
          } : Z && h(Z) ? {
            conversion: p,
            priority: 3
          } : null;
        },
        tr: (U) => {
          const Z = U.closest("table");
          return Z && h(Z) ? {
            conversion: p,
            priority: 3
          } : null;
        }
      };
    }
    static importJSON(U) {
      const q = i(U.language);
      return q.setFormat(U.format), q.setIndent(U.indent), q.setDirection(U.direction), q;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        language: this.getLanguage(),
        type: "code",
        version: 1
      };
    }
    // Mutation
    insertNewAfter(U, q = !0) {
      const Z = this.getChildren(), J = Z.length;
      if (J >= 2 && Z[J - 1].getTextContent() === `
` && Z[J - 2].getTextContent() === `
` && U.isCollapsed() && U.anchor.key === this.__key && U.anchor.offset === J) {
        Z[J - 1].remove(), Z[J - 2].remove();
        const se = e.$createParagraphNode();
        return this.insertAfter(se, q), se;
      }
      const {
        anchor: re,
        focus: ce
      } = U, oe = (re.isBefore(ce) ? re : ce).getNode();
      if (e.$isTextNode(oe)) {
        let se = H(oe);
        const me = [];
        for (; ; )
          if (e.$isTabNode(se))
            me.push(e.$createTabNode()), se = se.getNextSibling();
          else if (k(se)) {
            let Pe = 0;
            const te = se.getTextContent(), G = se.getTextContentSize();
            for (; Pe < G && te[Pe] === " "; Pe++) ;
            if (Pe !== 0 && me.push(b(" ".repeat(Pe))), Pe !== G)
              break;
            se = se.getNextSibling();
          } else
            break;
        const Ne = oe.splitText(re.offset)[0], Oe = re.offset === 0 ? 0 : 1, Te = Ne.getIndexWithinParent() + Oe, He = oe.getParentOrThrow(), ht = [e.$createLineBreakNode(), ...me];
        He.splice(Te, 0, ht);
        const nt = me[me.length - 1];
        nt ? nt.select() : re.offset === 0 ? Ne.selectPrevious() : Ne.getNextSibling().selectNext(0, 0);
      }
      if (_(oe)) {
        const {
          offset: se
        } = U.anchor;
        oe.splice(se, 0, [e.$createLineBreakNode()]), oe.select(se + 1, se + 1);
      }
      return null;
    }
    canIndent() {
      return !1;
    }
    collapseAtStart() {
      const U = e.$createParagraphNode();
      return this.getChildren().forEach((Z) => U.append(Z)), this.replace(U), !0;
    }
    setLanguage(U) {
      const q = this.getWritable();
      q.__language = n(U);
    }
    getLanguage() {
      return this.getLatest().__language;
    }
  }
  function i(M) {
    return e.$applyNodeReplacement(new a(M));
  }
  function _(M) {
    return M instanceof a;
  }
  function m(M) {
    let U;
    return t.isHTMLElement(M) && (U = M.getAttribute(l)), {
      node: i(U)
    };
  }
  function g(M) {
    const U = M, q = u(U);
    return !q && !c(U) ? {
      node: null
    } : {
      after: (Z) => {
        const J = M.parentNode;
        return J != null && M !== J.lastChild && Z.push(e.$createLineBreakNode()), Z;
      },
      node: q ? i() : null
    };
  }
  function C() {
    return {
      node: i()
    };
  }
  function p() {
    return {
      node: null
    };
  }
  function s(M) {
    const U = M;
    return {
      after: (q) => (U.parentNode && U.parentNode.nextSibling && q.push(e.$createLineBreakNode()), q),
      node: null
    };
  }
  function u(M) {
    return M.style.fontFamily.match("monospace") !== null;
  }
  function c(M) {
    let U = M.parentElement;
    for (; U !== null; ) {
      if (u(U))
        return !0;
      U = U.parentElement;
    }
    return !1;
  }
  function N(M) {
    return M.classList.contains("js-file-line");
  }
  function h(M) {
    return M.classList.contains("js-file-line-container");
  }
  const E = "javascript", d = {
    c: "C",
    clike: "C-like",
    cpp: "C++",
    css: "CSS",
    html: "HTML",
    java: "Java",
    js: "JavaScript",
    markdown: "Markdown",
    objc: "Objective-C",
    plain: "Plain Text",
    py: "Python",
    rust: "Rust",
    sql: "SQL",
    swift: "Swift",
    typescript: "TypeScript",
    xml: "XML"
  }, f = {
    cpp: "cpp",
    java: "java",
    javascript: "js",
    md: "markdown",
    plaintext: "plain",
    python: "py",
    text: "plain",
    ts: "typescript"
  };
  function y(M) {
    return f[M] || M;
  }
  function A(M) {
    const U = y(M);
    return d[U] || U;
  }
  const v = () => E, O = () => Object.keys(r.languages).filter(
    // Prism has several language helpers mixed into languages object
    // so filtering them out here to get langs list
    (M) => typeof r.languages[M] != "function"
  ).sort();
  class T extends e.TextNode {
    /** @internal */
    constructor(U, q, Z) {
      super(U, Z), this.__highlightType = q;
    }
    static getType() {
      return "code-highlight";
    }
    static clone(U) {
      return new T(U.__text, U.__highlightType || void 0, U.__key);
    }
    getHighlightType() {
      return this.getLatest().__highlightType;
    }
    canHaveFormat() {
      return !1;
    }
    createDOM(U) {
      const q = super.createDOM(U), Z = S(U.theme, this.__highlightType);
      return t.addClassNamesToElement(q, Z), q;
    }
    updateDOM(U, q, Z) {
      const J = super.updateDOM(U, q, Z), re = S(Z.theme, U.__highlightType), ce = S(Z.theme, this.__highlightType);
      return re !== ce && (re && t.removeClassNamesFromElement(q, re), ce && t.addClassNamesToElement(q, ce)), J;
    }
    static importJSON(U) {
      const q = b(U.text, U.highlightType);
      return q.setFormat(U.format), q.setDetail(U.detail), q.setMode(U.mode), q.setStyle(U.style), q;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        highlightType: this.getHighlightType(),
        type: "code-highlight",
        version: 1
      };
    }
    // Prevent formatting (bold, underline, etc)
    setFormat(U) {
      return this;
    }
    isParentRequired() {
      return !0;
    }
    createParentElementNode() {
      return i();
    }
  }
  function S(M, U) {
    return U && M && M.codeHighlight && M.codeHighlight[U];
  }
  function b(M, U) {
    return e.$applyNodeReplacement(new T(M, U));
  }
  function k(M) {
    return M instanceof T;
  }
  function H(M) {
    let U = M, q = M;
    for (; k(q) || e.$isTabNode(q); )
      U = q, q = q.getPreviousSibling();
    return U;
  }
  function K(M) {
    let U = M, q = M;
    for (; k(q) || e.$isTabNode(q); )
      U = q, q = q.getNextSibling();
    return U;
  }
  const B = {
    defaultLanguage: E,
    tokenize(M, U) {
      return r.tokenize(M, r.languages[U || ""] || r.languages[this.defaultLanguage]);
    }
  };
  function w(M, U) {
    let q = null, Z = null, J = M, re = U, ce = M.getTextContent();
    for (; ; ) {
      if (re === 0) {
        if (J = J.getPreviousSibling(), J === null)
          break;
        if (!(k(J) || e.$isTabNode(J) || e.$isLineBreakNode(J)))
          throw Error("Expected a valid Code Node: CodeHighlightNode, TabNode, LineBreakNode");
        if (e.$isLineBreakNode(J)) {
          q = {
            node: J,
            offset: 1
          };
          break;
        }
        re = Math.max(0, J.getTextContentSize() - 1), ce = J.getTextContent();
      } else
        re--;
      const oe = ce[re];
      k(J) && oe !== " " && (Z = {
        node: J,
        offset: re
      });
    }
    if (Z !== null)
      return Z;
    let pe = null;
    if (U < M.getTextContentSize())
      k(M) && (pe = M.getTextContent()[U]);
    else {
      const oe = M.getNextSibling();
      k(oe) && (pe = oe.getTextContent()[0]);
    }
    if (pe !== null && pe !== " ")
      return q;
    {
      const oe = x(M, U);
      return oe !== null ? oe : q;
    }
  }
  function x(M, U) {
    let q = M, Z = U, J = M.getTextContent(), re = M.getTextContentSize();
    for (; ; ) {
      if (!k(q) || Z === re) {
        if (q = q.getNextSibling(), q === null || e.$isLineBreakNode(q))
          return null;
        k(q) && (Z = 0, J = q.getTextContent(), re = q.getTextContentSize());
      }
      if (k(q)) {
        if (J[Z] !== " ")
          return {
            node: q,
            offset: Z
          };
        Z++;
      }
    }
  }
  function D(M) {
    const U = K(M);
    if (e.$isLineBreakNode(U))
      throw Error("Unexpected lineBreakNode in getEndOfCodeInLine");
    return U;
  }
  function Y(M, U, q) {
    const Z = M.getParent();
    _(Z) ? W(Z, U, q) : k(M) && M.replace(e.$createTextNode(M.__text));
  }
  function j(M, U) {
    const q = U.getElementByKey(M.getKey());
    if (q === null)
      return;
    const Z = M.getChildren(), J = Z.length;
    if (J === q.__cachedChildrenLength)
      return;
    q.__cachedChildrenLength = J;
    let re = "1", ce = 1;
    for (let pe = 0; pe < J; pe++)
      e.$isLineBreakNode(Z[pe]) && (re += `
` + ++ce);
    q.setAttribute("data-gutter", re);
  }
  const $ = /* @__PURE__ */ new Set();
  function W(M, U, q) {
    const Z = M.getKey();
    $.has(Z) || ($.add(Z), M.getLanguage() === void 0 && M.setLanguage(q.defaultLanguage), U.update(() => {
      F(Z, () => {
        const J = e.$getNodeByKey(Z);
        if (!_(J) || !J.isAttached())
          return !1;
        const re = J.getTextContent(), ce = q.tokenize(re, J.getLanguage() || q.defaultLanguage), pe = L(ce), oe = z(J.getChildren(), pe), {
          from: se,
          to: me,
          nodesForReplacement: Ne
        } = oe;
        return se !== me || Ne.length ? (M.splice(se, me - se, Ne), !0) : !1;
      });
    }, {
      onUpdate: () => {
        $.delete(Z);
      },
      skipTransforms: !0
    }));
  }
  function L(M, U) {
    const q = [];
    for (const Z of M)
      if (typeof Z == "string") {
        const J = Z.split(/(\n|\t)/), re = J.length;
        for (let ce = 0; ce < re; ce++) {
          const pe = J[ce];
          pe === `
` || pe === `\r
` ? q.push(e.$createLineBreakNode()) : pe === "	" ? q.push(e.$createTabNode()) : pe.length > 0 && q.push(b(pe, U));
        }
      } else {
        const {
          content: J
        } = Z;
        typeof J == "string" ? q.push(...L([J], Z.type)) : Array.isArray(J) && q.push(...L(J, Z.type));
      }
    return q;
  }
  function F(M, U) {
    const q = e.$getNodeByKey(M);
    if (!_(q) || !q.isAttached())
      return;
    const Z = e.$getSelection();
    if (!e.$isRangeSelection(Z)) {
      U();
      return;
    }
    const J = Z.anchor, re = J.offset, ce = J.type === "element" && e.$isLineBreakNode(q.getChildAtIndex(J.offset - 1));
    let pe = 0;
    if (!ce) {
      const se = J.getNode();
      pe = re + se.getPreviousSiblings().reduce((me, Ne) => me + Ne.getTextContentSize(), 0);
    }
    if (U()) {
      if (ce) {
        J.getNode().select(re, re);
        return;
      }
      q.getChildren().some((se) => {
        const me = e.$isTextNode(se);
        if (me || e.$isLineBreakNode(se)) {
          const Ne = se.getTextContentSize();
          if (me && Ne >= pe)
            return se.select(pe, pe), !0;
          pe -= Ne;
        }
        return !1;
      });
    }
  }
  function z(M, U) {
    let q = 0;
    for (; q < M.length && V(M[q], U[q]); )
      q++;
    const Z = M.length, J = U.length, re = Math.min(Z, J) - q;
    let ce = 0;
    for (; ce < re; )
      if (ce++, !V(M[Z - ce], U[J - ce])) {
        ce--;
        break;
      }
    const pe = q, oe = Z - ce, se = U.slice(q, J - ce);
    return {
      from: pe,
      nodesForReplacement: se,
      to: oe
    };
  }
  function V(M, U) {
    return k(M) && k(U) && M.__text === U.__text && M.__highlightType === U.__highlightType || e.$isTabNode(M) && e.$isTabNode(U) || e.$isLineBreakNode(M) && e.$isLineBreakNode(U);
  }
  function Q(M) {
    if (!e.$isRangeSelection(M))
      return !1;
    const U = M.anchor.getNode(), q = M.focus.getNode();
    if (U.is(q) && _(U))
      return !0;
    const Z = U.getParent();
    return _(Z) && Z.is(q.getParent());
  }
  function le(M) {
    const U = M.getNodes(), q = [[]];
    if (U.length === 1 && _(U[0]))
      return q;
    let Z = q[0];
    for (let J = 0; J < U.length; J++) {
      const re = U[J];
      if (!(k(re) || e.$isTabNode(re) || e.$isLineBreakNode(re)))
        throw Error("Expected selection to be inside CodeBlock and consisting of CodeHighlightNode, TabNode and LineBreakNode");
      e.$isLineBreakNode(re) ? J !== 0 && Z.length > 0 && (Z = [], q.push(Z)) : Z.push(re);
    }
    return q;
  }
  function fe(M) {
    const U = e.$getSelection();
    if (!e.$isRangeSelection(U) || !Q(U))
      return null;
    const q = M ? e.OUTDENT_CONTENT_COMMAND : e.INDENT_CONTENT_COMMAND, Z = M ? e.OUTDENT_CONTENT_COMMAND : e.INSERT_TAB_COMMAND;
    if (le(U).length > 1)
      return q;
    const ce = U.getNodes()[0];
    if (!(_(ce) || k(ce) || e.$isTabNode(ce) || e.$isLineBreakNode(ce)))
      throw Error("Expected selection firstNode to be CodeHighlightNode or TabNode");
    if (_(ce))
      return q;
    const pe = H(ce), oe = K(ce), se = U.anchor, me = U.focus;
    let Ne, Oe;
    return me.isBefore(se) ? (Ne = me, Oe = se) : (Ne = se, Oe = me), pe !== null && oe !== null && Ne.key === pe.getKey() && Ne.offset === 0 && Oe.key === oe.getKey() && Oe.offset === oe.getTextContentSize() ? q : Z;
  }
  function ue(M) {
    const U = e.$getSelection();
    if (!e.$isRangeSelection(U) || !Q(U))
      return !1;
    const q = le(U), Z = q.length;
    if (q.length > 1) {
      for (let pe = 0; pe < Z; pe++) {
        const oe = q[pe];
        if (oe.length > 0) {
          let se = oe[0];
          pe === 0 && (se = H(se)), se !== null && (M === e.INDENT_CONTENT_COMMAND ? se.insertBefore(e.$createTabNode()) : e.$isTabNode(se) && se.remove());
        }
      }
      return !0;
    }
    const re = U.getNodes()[0];
    if (!(_(re) || k(re) || e.$isTabNode(re) || e.$isLineBreakNode(re)))
      throw Error("Expected selection firstNode to be CodeHighlightNode or CodeTabNode");
    if (_(re))
      return M === e.INDENT_CONTENT_COMMAND && U.insertNodes([e.$createTabNode()]), !0;
    const ce = H(re);
    if (ce === null)
      throw Error("Expected getFirstCodeNodeOfLine to return a valid Code Node");
    return M === e.INDENT_CONTENT_COMMAND ? e.$isLineBreakNode(ce) ? ce.insertAfter(e.$createTabNode()) : ce.insertBefore(e.$createTabNode()) : e.$isTabNode(ce) && ce.remove(), !0;
  }
  function de(M, U) {
    const q = e.$getSelection();
    if (!e.$isRangeSelection(q))
      return !1;
    const {
      anchor: Z,
      focus: J
    } = q, re = Z.offset, ce = J.offset, pe = Z.getNode(), oe = J.getNode(), se = M === e.KEY_ARROW_UP_COMMAND;
    if (!Q(q) || !(k(pe) || e.$isTabNode(pe)) || !(k(oe) || e.$isTabNode(oe)))
      return !1;
    if (!U.altKey) {
      if (q.isCollapsed()) {
        const Pe = pe.getParentOrThrow();
        if (se && re === 0 && pe.getPreviousSibling() === null) {
          if (Pe.getPreviousSibling() === null)
            return Pe.selectPrevious(), U.preventDefault(), !0;
        } else if (!se && re === pe.getTextContentSize() && pe.getNextSibling() === null && Pe.getNextSibling() === null)
          return Pe.selectNext(), U.preventDefault(), !0;
      }
      return !1;
    }
    let me, Ne;
    if (pe.isBefore(oe) ? (me = H(pe), Ne = K(oe)) : (me = H(oe), Ne = K(pe)), me == null || Ne == null)
      return !1;
    const Oe = me.getNodesBetween(Ne);
    for (let Pe = 0; Pe < Oe.length; Pe++) {
      const te = Oe[Pe];
      if (!k(te) && !e.$isTabNode(te) && !e.$isLineBreakNode(te))
        return !1;
    }
    U.preventDefault(), U.stopPropagation();
    const Te = se ? me.getPreviousSibling() : Ne.getNextSibling();
    if (!e.$isLineBreakNode(Te))
      return !0;
    const He = se ? Te.getPreviousSibling() : Te.getNextSibling();
    if (He == null)
      return !0;
    const ht = k(He) || e.$isTabNode(He) || e.$isLineBreakNode(He) ? se ? H(He) : K(He) : null;
    let nt = ht ?? He;
    return Te.remove(), Oe.forEach((Pe) => Pe.remove()), M === e.KEY_ARROW_UP_COMMAND ? (Oe.forEach((Pe) => nt.insertBefore(Pe)), nt.insertBefore(Te)) : (nt.insertAfter(Te), nt = Te, Oe.forEach((Pe) => {
      nt.insertAfter(Pe), nt = Pe;
    })), q.setTextNodeRange(pe, re, oe, ce), !0;
  }
  function P(M, U) {
    const q = e.$getSelection();
    if (!e.$isRangeSelection(q))
      return !1;
    const {
      anchor: Z,
      focus: J
    } = q, re = Z.getNode(), ce = J.getNode(), pe = M === e.MOVE_TO_START;
    if (!(k(re) || e.$isTabNode(re)) || !(k(ce) || e.$isTabNode(ce)))
      return !1;
    if (pe) {
      const oe = w(ce, J.offset);
      if (oe !== null) {
        const {
          node: se,
          offset: me
        } = oe;
        e.$isLineBreakNode(se) ? se.selectNext(0, 0) : q.setTextNodeRange(se, me, se, me);
      } else
        ce.getParentOrThrow().selectStart();
    } else
      D(ce).select();
    return U.preventDefault(), U.stopPropagation(), !0;
  }
  function I(M, U) {
    if (!M.hasNodes([a, T]))
      throw new Error("CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor");
    return U == null && (U = B), t.mergeRegister(M.registerMutationListener(a, (q) => {
      M.update(() => {
        for (const [Z, J] of q)
          if (J !== "destroyed") {
            const re = e.$getNodeByKey(Z);
            re !== null && j(re, M);
          }
      });
    }), M.registerNodeTransform(a, (q) => W(q, M, U)), M.registerNodeTransform(e.TextNode, (q) => Y(q, M, U)), M.registerNodeTransform(T, (q) => Y(q, M, U)), M.registerCommand(e.KEY_TAB_COMMAND, (q) => {
      const Z = fe(q.shiftKey);
      return Z === null ? !1 : (q.preventDefault(), M.dispatchCommand(Z, void 0), !0);
    }, e.COMMAND_PRIORITY_LOW), M.registerCommand(e.INSERT_TAB_COMMAND, () => {
      const q = e.$getSelection();
      return Q(q) ? (e.$insertNodes([e.$createTabNode()]), !0) : !1;
    }, e.COMMAND_PRIORITY_LOW), M.registerCommand(e.INDENT_CONTENT_COMMAND, (q) => ue(e.INDENT_CONTENT_COMMAND), e.COMMAND_PRIORITY_LOW), M.registerCommand(e.OUTDENT_CONTENT_COMMAND, (q) => ue(e.OUTDENT_CONTENT_COMMAND), e.COMMAND_PRIORITY_LOW), M.registerCommand(e.KEY_ARROW_UP_COMMAND, (q) => de(e.KEY_ARROW_UP_COMMAND, q), e.COMMAND_PRIORITY_LOW), M.registerCommand(e.KEY_ARROW_DOWN_COMMAND, (q) => de(e.KEY_ARROW_DOWN_COMMAND, q), e.COMMAND_PRIORITY_LOW), M.registerCommand(e.MOVE_TO_END, (q) => P(e.MOVE_TO_END, q), e.COMMAND_PRIORITY_LOW), M.registerCommand(e.MOVE_TO_START, (q) => P(e.MOVE_TO_START, q), e.COMMAND_PRIORITY_LOW));
  }
  return Nt.$createCodeHighlightNode = b, Nt.$createCodeNode = i, Nt.$isCodeHighlightNode = k, Nt.$isCodeNode = _, Nt.CODE_LANGUAGE_FRIENDLY_NAME_MAP = d, Nt.CODE_LANGUAGE_MAP = f, Nt.CodeHighlightNode = T, Nt.CodeNode = a, Nt.DEFAULT_CODE_LANGUAGE = E, Nt.PrismTokenizer = B, Nt.getCodeLanguages = O, Nt.getDefaultCodeLanguage = v, Nt.getEndOfCodeInLine = D, Nt.getFirstCodeNodeOfLine = H, Nt.getLanguageFriendlyName = A, Nt.getLastCodeNodeOfLine = K, Nt.getStartOfCodeInLine = w, Nt.normalizeCodeLang = y, Nt.registerCodeHighlighting = I, Nt;
}
var Ct = {}, ds;
function Vc() {
  if (ds) return Ct;
  ds = 1;
  var r = ma();
  _a(), Na(), Ca(), xa(), Ea(), Ta(), ya(), va(), Sa(), ba(), Oa(), wa(), Ra(), Ma();
  var t = Ke(), e = Ie;
  let n = (L) => L != null && r.languages.hasOwnProperty(L) ? L : void 0;
  function o(L, F) {
    for (let z of L.childNodes) {
      if (t.isHTMLElement(z) && z.tagName === F) return !0;
      o(z, F);
    }
    return !1;
  }
  class l extends e.ElementNode {
    static getType() {
      return "code";
    }
    static clone(F) {
      return new l(F.__language, F.__key);
    }
    constructor(F, z) {
      super(z), this.__language = n(F);
    }
    createDOM(F) {
      let z = document.createElement("code");
      return t.addClassNamesToElement(z, F.theme.code), z.setAttribute("spellcheck", "false"), (F = this.getLanguage()) && z.setAttribute("data-highlight-language", F), z;
    }
    updateDOM(F, z) {
      let V = this.__language;
      return F = F.__language, V ? V !== F && z.setAttribute("data-highlight-language", V) : F && z.removeAttribute("data-highlight-language"), !1;
    }
    exportDOM() {
      let F = document.createElement("pre");
      F.setAttribute("spellcheck", "false");
      let z = this.getLanguage();
      return z && F.setAttribute("data-highlight-language", z), { element: F };
    }
    static importDOM() {
      return { code: (F) => F.textContent != null && (/\r?\n/.test(F.textContent) || o(F, "BR")) ? { conversion: _, priority: 1 } : null, div: () => ({ conversion: m, priority: 1 }), pre: () => ({ conversion: _, priority: 0 }), table: (F) => u(F) ? { conversion: g, priority: 3 } : null, td: (F) => {
        let z = F.closest("table");
        return F.classList.contains("js-file-line") ? { conversion: p, priority: 3 } : z && u(z) ? { conversion: C, priority: 3 } : null;
      }, tr: (F) => (F = F.closest("table")) && u(F) ? { conversion: C, priority: 3 } : null };
    }
    static importJSON(F) {
      let z = a(F.language);
      return z.setFormat(F.format), z.setIndent(F.indent), z.setDirection(F.direction), z;
    }
    exportJSON() {
      return { ...super.exportJSON(), language: this.getLanguage(), type: "code", version: 1 };
    }
    insertNewAfter(F, z = !0) {
      var V = this.getChildren(), Q = V.length;
      if (2 <= Q && V[Q - 1].getTextContent() === `
` && V[Q - 2].getTextContent() === `
` && F.isCollapsed() && F.anchor.key === this.__key && F.anchor.offset === Q) return V[Q - 1].remove(), V[Q - 2].remove(), F = e.$createParagraphNode(), this.insertAfter(F, z), F;
      let { anchor: le, focus: fe } = F;
      if (z = (le.isBefore(fe) ? le : fe).getNode(), e.$isTextNode(z)) {
        for (Q = A(z), V = []; ; ) if (e.$isTabNode(Q)) V.push(e.$createTabNode()), Q = Q.getNextSibling();
        else if (y(Q)) {
          for (var ue = 0, de = Q.getTextContent(), P = Q.getTextContentSize(); ue < P && de[ue] === " "; ue++) ;
          if (ue !== 0 && V.push(f(" ".repeat(ue))), ue !== P) break;
          Q = Q.getNextSibling();
        } else break;
        Q = z.splitText(le.offset)[0], ue = le.offset === 0 ? 0 : 1, ue = Q.getIndexWithinParent() + ue, de = z.getParentOrThrow(), P = [e.$createLineBreakNode(), ...V], de.splice(ue, 0, P), (V = V[V.length - 1]) ? V.select() : le.offset === 0 ? Q.selectPrevious() : Q.getNextSibling().selectNext(0, 0);
      }
      return i(z) && ({ offset: F } = F.anchor, z.splice(F, 0, [e.$createLineBreakNode()]), z.select(F + 1, F + 1)), null;
    }
    canIndent() {
      return !1;
    }
    collapseAtStart() {
      let F = e.$createParagraphNode();
      return this.getChildren().forEach((z) => F.append(z)), this.replace(F), !0;
    }
    setLanguage(F) {
      this.getWritable().__language = n(F);
    }
    getLanguage() {
      return this.getLatest().__language;
    }
  }
  function a(L) {
    return e.$applyNodeReplacement(new l(L));
  }
  function i(L) {
    return L instanceof l;
  }
  function _(L) {
    let F;
    return t.isHTMLElement(L) && (F = L.getAttribute("data-highlight-language")), { node: a(F) };
  }
  function m(L) {
    let F = L.style.fontFamily.match("monospace") !== null;
    return F || s(L) ? { after: (z) => {
      let V = L.parentNode;
      return V != null && L !== V.lastChild && z.push(e.$createLineBreakNode()), z;
    }, node: F ? a() : null } : { node: null };
  }
  function g() {
    return { node: a() };
  }
  function C() {
    return { node: null };
  }
  function p(L) {
    return { after: (F) => (L.parentNode && L.parentNode.nextSibling && F.push(e.$createLineBreakNode()), F), node: null };
  }
  function s(L) {
    for (L = L.parentElement; L !== null; ) {
      if (L.style.fontFamily.match("monospace") !== null) return !0;
      L = L.parentElement;
    }
    return !1;
  }
  function u(L) {
    return L.classList.contains("js-file-line-container");
  }
  let c = { c: "C", clike: "C-like", cpp: "C++", css: "CSS", html: "HTML", java: "Java", js: "JavaScript", markdown: "Markdown", objc: "Objective-C", plain: "Plain Text", py: "Python", rust: "Rust", sql: "SQL", swift: "Swift", typescript: "TypeScript", xml: "XML" }, N = { cpp: "cpp", java: "java", javascript: "js", md: "markdown", plaintext: "plain", python: "py", text: "plain", ts: "typescript" };
  function h(L) {
    return N[L] || L;
  }
  class E extends e.TextNode {
    constructor(F, z, V) {
      super(F, V), this.__highlightType = z;
    }
    static getType() {
      return "code-highlight";
    }
    static clone(F) {
      return new E(F.__text, F.__highlightType || void 0, F.__key);
    }
    getHighlightType() {
      return this.getLatest().__highlightType;
    }
    canHaveFormat() {
      return !1;
    }
    createDOM(F) {
      let z = super.createDOM(F);
      return F = d(F.theme, this.__highlightType), t.addClassNamesToElement(z, F), z;
    }
    updateDOM(F, z, V) {
      let Q = super.updateDOM(F, z, V);
      return F = d(V.theme, F.__highlightType), V = d(V.theme, this.__highlightType), F !== V && (F && t.removeClassNamesFromElement(z, F), V && t.addClassNamesToElement(z, V)), Q;
    }
    static importJSON(F) {
      let z = f(F.text, F.highlightType);
      return z.setFormat(F.format), z.setDetail(F.detail), z.setMode(F.mode), z.setStyle(F.style), z;
    }
    exportJSON() {
      return { ...super.exportJSON(), highlightType: this.getHighlightType(), type: "code-highlight", version: 1 };
    }
    setFormat() {
      return this;
    }
    isParentRequired() {
      return !0;
    }
    createParentElementNode() {
      return a();
    }
  }
  function d(L, F) {
    return F && L && L.codeHighlight && L.codeHighlight[F];
  }
  function f(L, F) {
    return e.$applyNodeReplacement(new E(L, F));
  }
  function y(L) {
    return L instanceof E;
  }
  function A(L) {
    let F = L;
    for (; y(L) || e.$isTabNode(L); ) F = L, L = L.getPreviousSibling();
    return F;
  }
  function v(L) {
    let F = L;
    for (; y(L) || e.$isTabNode(L); ) F = L, L = L.getNextSibling();
    return F;
  }
  let O = { defaultLanguage: "javascript", tokenize(L, F) {
    return r.tokenize(L, r.languages[F || ""] || r.languages[this.defaultLanguage]);
  } };
  function T(L, F) {
    let z = null;
    var V = null, Q = L;
    let le = F, fe = L.getTextContent();
    for (; ; ) {
      if (le === 0) {
        if (Q = Q.getPreviousSibling(), Q === null) break;
        if (!(y(Q) || e.$isTabNode(Q) || e.$isLineBreakNode(Q))) throw Error("Expected a valid Code Node: CodeHighlightNode, TabNode, LineBreakNode");
        if (e.$isLineBreakNode(Q)) {
          z = { node: Q, offset: 1 };
          break;
        }
        le = Math.max(0, Q.getTextContentSize() - 1), fe = Q.getTextContent();
      } else le--;
      let ue = fe[le];
      y(Q) && ue !== " " && (V = { node: Q, offset: le });
    }
    if (V !== null) return V;
    if (V = null, F < L.getTextContentSize() ? y(L) && (V = L.getTextContent()[F]) : (Q = L.getNextSibling(), y(Q) && (V = Q.getTextContent()[0])), V !== null && V !== " ") return z;
    e: for (V = L, Q = L.getTextContent(), L = L.getTextContentSize(); ; ) {
      if (!y(V) || F === L) {
        if (V = V.getNextSibling(), V === null || e.$isLineBreakNode(V)) {
          L = null;
          break e;
        }
        y(V) && (F = 0, Q = V.getTextContent(), L = V.getTextContentSize());
      }
      if (y(V)) {
        if (Q[F] !== " ") {
          L = { node: V, offset: F };
          break e;
        }
        F++;
      }
    }
    return L !== null ? L : z;
  }
  function S(L) {
    if (L = v(L), e.$isLineBreakNode(L)) throw Error("Unexpected lineBreakNode in getEndOfCodeInLine");
    return L;
  }
  function b(L, F, z) {
    let V = L.getParent();
    i(V) ? H(V, F, z) : y(L) && L.replace(e.$createTextNode(L.__text));
  }
  let k = /* @__PURE__ */ new Set();
  function H(L, F, z) {
    let V = L.getKey();
    k.has(V) || (k.add(V), L.getLanguage() === void 0 && L.setLanguage(z.defaultLanguage), F.update(() => {
      B(V, () => {
        var Q = e.$getNodeByKey(V);
        if (!i(Q) || !Q.isAttached()) return !1;
        var le = Q.getTextContent();
        le = z.tokenize(le, Q.getLanguage() || z.defaultLanguage), le = K(le);
        var fe = Q.getChildren();
        for (Q = 0; Q < fe.length && w(fe[Q], le[Q]); ) Q++;
        var ue = fe.length;
        let de = le.length, P = Math.min(ue, de) - Q, I = 0;
        for (; I < P; ) if (I++, !w(fe[ue - I], le[de - I])) {
          I--;
          break;
        }
        fe = Q, ue -= I, le = le.slice(Q, de - I);
        let { from: M, to: U, nodesForReplacement: q } = { from: fe, nodesForReplacement: le, to: ue };
        return M !== U || q.length ? (L.splice(M, U - M, q), !0) : !1;
      });
    }, { onUpdate: () => {
      k.delete(V);
    }, skipTransforms: !0 }));
  }
  function K(L, F) {
    let z = [];
    for (let V of L) if (typeof V == "string") {
      L = V.split(/(\n|\t)/);
      let Q = L.length;
      for (let le = 0; le < Q; le++) {
        let fe = L[le];
        fe === `
` || fe === `\r
` ? z.push(e.$createLineBreakNode()) : fe === "	" ? z.push(e.$createTabNode()) : 0 < fe.length && z.push(f(fe, F));
      }
    } else ({ content: L } = V), typeof L == "string" ? z.push(...K([L], V.type)) : Array.isArray(L) && z.push(...K(L, V.type));
    return z;
  }
  function B(L, F) {
    if (L = e.$getNodeByKey(L), i(L) && L.isAttached()) {
      var z = e.$getSelection();
      if (e.$isRangeSelection(z)) {
        z = z.anchor;
        var V = z.offset, Q = z.type === "element" && e.$isLineBreakNode(L.getChildAtIndex(z.offset - 1)), le = 0;
        if (!Q) {
          let fe = z.getNode();
          le = V + fe.getPreviousSiblings().reduce((ue, de) => ue + de.getTextContentSize(), 0);
        }
        F() && (Q ? z.getNode().select(V, V) : L.getChildren().some((fe) => {
          let ue = e.$isTextNode(fe);
          if (ue || e.$isLineBreakNode(fe)) {
            let de = fe.getTextContentSize();
            if (ue && de >= le) return fe.select(le, le), !0;
            le -= de;
          }
          return !1;
        }));
      } else F();
    }
  }
  function w(L, F) {
    return y(L) && y(F) && L.__text === F.__text && L.__highlightType === F.__highlightType || e.$isTabNode(L) && e.$isTabNode(F) || e.$isLineBreakNode(L) && e.$isLineBreakNode(F);
  }
  function x(L) {
    if (!e.$isRangeSelection(L)) return !1;
    var F = L.anchor.getNode();
    return L = L.focus.getNode(), F.is(L) && i(F) ? !0 : (F = F.getParent(), i(F) && F.is(L.getParent()));
  }
  function D(L) {
    L = L.getNodes();
    let F = [[]];
    if (L.length === 1 && i(L[0])) return F;
    let z = F[0];
    for (let V = 0; V < L.length; V++) {
      let Q = L[V];
      if (!(y(Q) || e.$isTabNode(Q) || e.$isLineBreakNode(Q))) throw Error("Expected selection to be inside CodeBlock and consisting of CodeHighlightNode, TabNode and LineBreakNode");
      e.$isLineBreakNode(Q) ? V !== 0 && 0 < z.length && (z = [], F.push(z)) : z.push(Q);
    }
    return F;
  }
  function Y(L) {
    var F = e.$getSelection();
    if (!e.$isRangeSelection(F) || !x(F)) return null;
    let z = L ? e.OUTDENT_CONTENT_COMMAND : e.INDENT_CONTENT_COMMAND;
    if (L = L ? e.OUTDENT_CONTENT_COMMAND : e.INSERT_TAB_COMMAND, 1 < D(F).length) return z;
    var V = F.getNodes()[0];
    if (!(i(V) || y(V) || e.$isTabNode(V) || e.$isLineBreakNode(V))) throw Error("Expected selection firstNode to be CodeHighlightNode or TabNode");
    if (i(V)) return z;
    let Q = A(V);
    V = v(V);
    var le = F.anchor;
    let fe = F.focus;
    return fe.isBefore(le) ? F = fe : (F = le, le = fe), Q !== null && V !== null && F.key === Q.getKey() && F.offset === 0 && le.key === V.getKey() && le.offset === V.getTextContentSize() ? z : L;
  }
  function j(L) {
    var F = e.$getSelection();
    if (!e.$isRangeSelection(F) || !x(F)) return !1;
    var z = D(F);
    let V = z.length;
    if (1 < z.length) {
      for (F = 0; F < V; F++) {
        var Q = z[F];
        0 < Q.length && (Q = Q[0], F === 0 && (Q = A(Q)), Q !== null && (L === e.INDENT_CONTENT_COMMAND ? Q.insertBefore(e.$createTabNode()) : e.$isTabNode(Q) && Q.remove()));
      }
      return !0;
    }
    if (z = F.getNodes()[0], !(i(z) || y(z) || e.$isTabNode(z) || e.$isLineBreakNode(z))) throw Error("Expected selection firstNode to be CodeHighlightNode or CodeTabNode");
    if (i(z)) return L === e.INDENT_CONTENT_COMMAND && F.insertNodes([e.$createTabNode()]), !0;
    if (z = A(z), z === null) throw Error("Expected getFirstCodeNodeOfLine to return a valid Code Node");
    return L === e.INDENT_CONTENT_COMMAND ? e.$isLineBreakNode(z) ? z.insertAfter(e.$createTabNode()) : z.insertBefore(e.$createTabNode()) : e.$isTabNode(z) && z.remove(), !0;
  }
  function $(L, F) {
    let z = e.$getSelection();
    if (!e.$isRangeSelection(z)) return !1;
    let { anchor: V, focus: Q } = z, le = V.offset, fe = Q.offset, ue = V.getNode(), de = Q.getNode();
    var P = L === e.KEY_ARROW_UP_COMMAND;
    if (!x(z) || !y(ue) && !e.$isTabNode(ue) || !y(de) && !e.$isTabNode(de)) return !1;
    if (!F.altKey) {
      if (z.isCollapsed()) {
        if (L = ue.getParentOrThrow(), P && le === 0 && ue.getPreviousSibling() === null) {
          if (L.getPreviousSibling() === null) return L.selectPrevious(), F.preventDefault(), !0;
        } else if (!P && le === ue.getTextContentSize() && ue.getNextSibling() === null && L.getNextSibling() === null) return L.selectNext(), F.preventDefault(), !0;
      }
      return !1;
    }
    let I;
    if (ue.isBefore(de)) {
      var M = A(ue);
      I = v(de);
    } else M = A(de), I = v(ue);
    if (M == null || I == null) return !1;
    let U = M.getNodesBetween(I);
    for (let Z = 0; Z < U.length; Z++) {
      let J = U[Z];
      if (!y(J) && !e.$isTabNode(J) && !e.$isLineBreakNode(J)) return !1;
    }
    if (F.preventDefault(), F.stopPropagation(), F = P ? M.getPreviousSibling() : I.getNextSibling(), !e.$isLineBreakNode(F) || (M = P ? F.getPreviousSibling() : F.getNextSibling(), M == null)) return !0;
    P = y(M) || e.$isTabNode(M) || e.$isLineBreakNode(M) ? P ? A(M) : v(M) : null;
    let q = P ?? M;
    return F.remove(), U.forEach((Z) => Z.remove()), L === e.KEY_ARROW_UP_COMMAND ? (U.forEach((Z) => q.insertBefore(Z)), q.insertBefore(F)) : (q.insertAfter(F), q = F, U.forEach((Z) => {
      q.insertAfter(Z), q = Z;
    })), z.setTextNodeRange(ue, le, de, fe), !0;
  }
  function W(L, F) {
    let z = e.$getSelection();
    if (!e.$isRangeSelection(z)) return !1;
    let { anchor: V, focus: Q } = z;
    var le = V.getNode();
    let fe = Q.getNode();
    if (L = L === e.MOVE_TO_START, !y(le) && !e.$isTabNode(le) || !y(fe) && !e.$isTabNode(fe)) return !1;
    if (L) if (le = T(fe, Q.offset), le !== null) {
      let { node: ue, offset: de } = le;
      e.$isLineBreakNode(ue) ? ue.selectNext(0, 0) : z.setTextNodeRange(ue, de, ue, de);
    } else fe.getParentOrThrow().selectStart();
    else S(fe).select();
    return F.preventDefault(), F.stopPropagation(), !0;
  }
  return Ct.$createCodeHighlightNode = f, Ct.$createCodeNode = a, Ct.$isCodeHighlightNode = y, Ct.$isCodeNode = i, Ct.CODE_LANGUAGE_FRIENDLY_NAME_MAP = c, Ct.CODE_LANGUAGE_MAP = N, Ct.CodeHighlightNode = E, Ct.CodeNode = l, Ct.DEFAULT_CODE_LANGUAGE = "javascript", Ct.PrismTokenizer = O, Ct.getCodeLanguages = () => Object.keys(r.languages).filter((L) => typeof r.languages[L] != "function").sort(), Ct.getDefaultCodeLanguage = () => "javascript", Ct.getEndOfCodeInLine = S, Ct.getFirstCodeNodeOfLine = A, Ct.getLanguageFriendlyName = function(L) {
    return L = h(L), c[L] || L;
  }, Ct.getLastCodeNodeOfLine = v, Ct.getStartOfCodeInLine = T, Ct.normalizeCodeLang = h, Ct.registerCodeHighlighting = function(L, F) {
    if (!L.hasNodes([l, E])) throw Error("CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor");
    return F == null && (F = O), t.mergeRegister(
      L.registerMutationListener(l, (z) => {
        L.update(() => {
          for (let [le, fe] of z) if (fe !== "destroyed") {
            var V = e.$getNodeByKey(le);
            if (V !== null) e: {
              var Q = V;
              if (V = L.getElementByKey(Q.getKey()), V === null) break e;
              Q = Q.getChildren();
              let ue = Q.length;
              if (ue === V.__cachedChildrenLength) break e;
              V.__cachedChildrenLength = ue;
              let de = "1", P = 1;
              for (let I = 0; I < ue; I++) e.$isLineBreakNode(Q[I]) && (de += `
` + ++P);
              V.setAttribute("data-gutter", de);
            }
          }
        });
      }),
      L.registerNodeTransform(l, (z) => H(z, L, F)),
      L.registerNodeTransform(e.TextNode, (z) => b(z, L, F)),
      L.registerNodeTransform(E, (z) => b(z, L, F)),
      L.registerCommand(e.KEY_TAB_COMMAND, (z) => {
        let V = Y(z.shiftKey);
        return V === null ? !1 : (z.preventDefault(), L.dispatchCommand(V, void 0), !0);
      }, e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.INSERT_TAB_COMMAND, () => {
        let z = e.$getSelection();
        return x(z) ? (e.$insertNodes([e.$createTabNode()]), !0) : !1;
      }, e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.INDENT_CONTENT_COMMAND, () => j(e.INDENT_CONTENT_COMMAND), e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.OUTDENT_CONTENT_COMMAND, () => j(e.OUTDENT_CONTENT_COMMAND), e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.KEY_ARROW_UP_COMMAND, (z) => $(e.KEY_ARROW_UP_COMMAND, z), e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.KEY_ARROW_DOWN_COMMAND, (z) => $(e.KEY_ARROW_DOWN_COMMAND, z), e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.MOVE_TO_END, (z) => W(e.MOVE_TO_END, z), e.COMMAND_PRIORITY_LOW),
      L.registerCommand(e.MOVE_TO_START, (z) => W(e.MOVE_TO_START, z), e.COMMAND_PRIORITY_LOW)
    );
  }, Ct;
}
const Jc = process.env.NODE_ENV === "development" ? Gc() : Vc();
var Ir = Jc, Jn = {}, fs;
function Xc() {
  if (fs) return Jn;
  fs = 1;
  var r = Ke(), t = Ie;
  class e extends t.TextNode {
    static getType() {
      return "hashtag";
    }
    static clone(a) {
      return new e(a.__text, a.__key);
    }
    constructor(a, i) {
      super(a, i);
    }
    createDOM(a) {
      const i = super.createDOM(a);
      return r.addClassNamesToElement(i, a.theme.hashtag), i;
    }
    static importJSON(a) {
      const i = n(a.text);
      return i.setFormat(a.format), i.setDetail(a.detail), i.setMode(a.mode), i.setStyle(a.style), i;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "hashtag"
      };
    }
    canInsertTextBefore() {
      return !1;
    }
    isTextEntity() {
      return !0;
    }
  }
  function n(l = "") {
    return t.$applyNodeReplacement(new e(l));
  }
  function o(l) {
    return l instanceof e;
  }
  return Jn.$createHashtagNode = n, Jn.$isHashtagNode = o, Jn.HashtagNode = e, Jn;
}
var Xn = {}, gs;
function Zc() {
  if (gs) return Xn;
  gs = 1;
  var r = Ke(), t = Ie;
  class e extends t.TextNode {
    static getType() {
      return "hashtag";
    }
    static clone(l) {
      return new e(l.__text, l.__key);
    }
    constructor(l, a) {
      super(l, a);
    }
    createDOM(l) {
      let a = super.createDOM(l);
      return r.addClassNamesToElement(a, l.theme.hashtag), a;
    }
    static importJSON(l) {
      let a = n(l.text);
      return a.setFormat(l.format), a.setDetail(l.detail), a.setMode(l.mode), a.setStyle(l.style), a;
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "hashtag" };
    }
    canInsertTextBefore() {
      return !1;
    }
    isTextEntity() {
      return !0;
    }
  }
  function n(o = "") {
    return t.$applyNodeReplacement(new e(o));
  }
  return Xn.$createHashtagNode = n, Xn.$isHashtagNode = function(o) {
    return o instanceof e;
  }, Xn.HashtagNode = e, Xn;
}
const Qc = process.env.NODE_ENV === "development" ? Xc() : Zc();
var eu = Qc, Ht = {}, hs;
function tu() {
  if (hs) return Ht;
  hs = 1;
  var r = Ke(), t = Ie;
  const e = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
  class n extends t.ElementNode {
    /** @internal */
    /** @internal */
    /** @internal */
    /** @internal */
    static getType() {
      return "link";
    }
    static clone(u) {
      return new n(u.__url, {
        rel: u.__rel,
        target: u.__target,
        title: u.__title
      }, u.__key);
    }
    constructor(u, c = {}, N) {
      super(N);
      const {
        target: h = null,
        rel: E = null,
        title: d = null
      } = c;
      this.__url = u, this.__target = h, this.__rel = E, this.__title = d;
    }
    createDOM(u) {
      const c = document.createElement("a");
      return c.href = this.sanitizeUrl(this.__url), this.__target !== null && (c.target = this.__target), this.__rel !== null && (c.rel = this.__rel), this.__title !== null && (c.title = this.__title), r.addClassNamesToElement(c, u.theme.link), c;
    }
    updateDOM(u, c, N) {
      const h = this.__url, E = this.__target, d = this.__rel, f = this.__title;
      return h !== u.__url && (c.href = h), E !== u.__target && (E ? c.target = E : c.removeAttribute("target")), d !== u.__rel && (d ? c.rel = d : c.removeAttribute("rel")), f !== u.__title && (f ? c.title = f : c.removeAttribute("title")), !1;
    }
    static importDOM() {
      return {
        a: (u) => ({
          conversion: o,
          priority: 1
        })
      };
    }
    static importJSON(u) {
      const c = l(u.url, {
        rel: u.rel,
        target: u.target,
        title: u.title
      });
      return c.setFormat(u.format), c.setIndent(u.indent), c.setDirection(u.direction), c;
    }
    sanitizeUrl(u) {
      try {
        const c = new URL(u);
        if (!e.has(c.protocol))
          return "about:blank";
      } catch {
        return u;
      }
      return u;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        rel: this.getRel(),
        target: this.getTarget(),
        title: this.getTitle(),
        type: "link",
        url: this.getURL(),
        version: 1
      };
    }
    getURL() {
      return this.getLatest().__url;
    }
    setURL(u) {
      const c = this.getWritable();
      c.__url = u;
    }
    getTarget() {
      return this.getLatest().__target;
    }
    setTarget(u) {
      const c = this.getWritable();
      c.__target = u;
    }
    getRel() {
      return this.getLatest().__rel;
    }
    setRel(u) {
      const c = this.getWritable();
      c.__rel = u;
    }
    getTitle() {
      return this.getLatest().__title;
    }
    setTitle(u) {
      const c = this.getWritable();
      c.__title = u;
    }
    insertNewAfter(u, c = !0) {
      const N = l(this.__url, {
        rel: this.__rel,
        target: this.__target,
        title: this.__title
      });
      return this.insertAfter(N, c), N;
    }
    canInsertTextBefore() {
      return !1;
    }
    canInsertTextAfter() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isInline() {
      return !0;
    }
    extractWithChild(u, c, N) {
      if (!t.$isRangeSelection(c))
        return !1;
      const h = c.anchor.getNode(), E = c.focus.getNode();
      return this.isParentOf(h) && this.isParentOf(E) && c.getTextContent().length > 0;
    }
  }
  function o(s) {
    let u = null;
    if (r.isHTMLAnchorElement(s)) {
      const c = s.textContent;
      (c !== null && c !== "" || s.children.length > 0) && (u = l(s.getAttribute("href") || "", {
        rel: s.getAttribute("rel"),
        target: s.getAttribute("target"),
        title: s.getAttribute("title")
      }));
    }
    return {
      node: u
    };
  }
  function l(s, u) {
    return t.$applyNodeReplacement(new n(s, u));
  }
  function a(s) {
    return s instanceof n;
  }
  class i extends n {
    static getType() {
      return "autolink";
    }
    static clone(u) {
      return new i(u.__url, {
        rel: u.__rel,
        target: u.__target,
        title: u.__title
      }, u.__key);
    }
    static importJSON(u) {
      const c = _(u.url, {
        rel: u.rel,
        target: u.target,
        title: u.title
      });
      return c.setFormat(u.format), c.setIndent(u.indent), c.setDirection(u.direction), c;
    }
    static importDOM() {
      return null;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "autolink",
        version: 1
      };
    }
    insertNewAfter(u, c = !0) {
      const N = this.getParentOrThrow().insertNewAfter(u, c);
      if (t.$isElementNode(N)) {
        const h = _(this.__url, {
          rel: this.__rel,
          target: this.__target,
          title: this.__title
        });
        return N.append(h), h;
      }
      return null;
    }
  }
  function _(s, u) {
    return t.$applyNodeReplacement(new i(s, u));
  }
  function m(s) {
    return s instanceof i;
  }
  const g = t.createCommand("TOGGLE_LINK_COMMAND");
  function C(s, u = {}) {
    const {
      target: c,
      title: N
    } = u, h = u.rel === void 0 ? "noreferrer" : u.rel, E = t.$getSelection();
    if (!t.$isRangeSelection(E))
      return;
    const d = E.extract();
    if (s === null)
      d.forEach((f) => {
        const y = f.getParent();
        if (a(y)) {
          const A = y.getChildren();
          for (let v = 0; v < A.length; v++)
            y.insertBefore(A[v]);
          y.remove();
        }
      });
    else {
      if (d.length === 1) {
        const A = d[0], v = p(A, a);
        if (v !== null) {
          v.setURL(s), c !== void 0 && v.setTarget(c), h !== null && v.setRel(h), N !== void 0 && v.setTitle(N);
          return;
        }
      }
      let f = null, y = null;
      d.forEach((A) => {
        const v = A.getParent();
        if (!(v === y || v === null || t.$isElementNode(A) && !A.isInline())) {
          if (a(v)) {
            y = v, v.setURL(s), c !== void 0 && v.setTarget(c), h !== null && y.setRel(h), N !== void 0 && y.setTitle(N);
            return;
          }
          if (v.is(f) || (f = v, y = l(s, {
            rel: h,
            target: c,
            title: N
          }), a(v) ? A.getPreviousSibling() === null ? v.insertBefore(y) : v.insertAfter(y) : A.insertBefore(y)), a(A)) {
            if (A.is(y))
              return;
            if (y !== null) {
              const O = A.getChildren();
              for (let T = 0; T < O.length; T++)
                y.append(O[T]);
            }
            A.remove();
            return;
          }
          y !== null && y.append(A);
        }
      });
    }
  }
  function p(s, u) {
    let c = s;
    for (; c !== null && c.getParent() !== null && !u(c); )
      c = c.getParentOrThrow();
    return u(c) ? c : null;
  }
  return Ht.$createAutoLinkNode = _, Ht.$createLinkNode = l, Ht.$isAutoLinkNode = m, Ht.$isLinkNode = a, Ht.AutoLinkNode = i, Ht.LinkNode = n, Ht.TOGGLE_LINK_COMMAND = g, Ht.toggleLink = C, Ht;
}
var Ut = {}, ps;
function nu() {
  if (ps) return Ut;
  ps = 1;
  var r = Ke(), t = Ie;
  let e = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
  class n extends t.ElementNode {
    static getType() {
      return "link";
    }
    static clone(p) {
      return new n(p.__url, { rel: p.__rel, target: p.__target, title: p.__title }, p.__key);
    }
    constructor(p, s = {}, u) {
      super(u);
      let { target: c = null, rel: N = null, title: h = null } = s;
      this.__url = p, this.__target = c, this.__rel = N, this.__title = h;
    }
    createDOM(p) {
      let s = document.createElement("a");
      return s.href = this.sanitizeUrl(this.__url), this.__target !== null && (s.target = this.__target), this.__rel !== null && (s.rel = this.__rel), this.__title !== null && (s.title = this.__title), r.addClassNamesToElement(
        s,
        p.theme.link
      ), s;
    }
    updateDOM(p, s) {
      let u = this.__url, c = this.__target, N = this.__rel, h = this.__title;
      return u !== p.__url && (s.href = u), c !== p.__target && (c ? s.target = c : s.removeAttribute("target")), N !== p.__rel && (N ? s.rel = N : s.removeAttribute("rel")), h !== p.__title && (h ? s.title = h : s.removeAttribute("title")), !1;
    }
    static importDOM() {
      return { a: () => ({ conversion: o, priority: 1 }) };
    }
    static importJSON(p) {
      let s = l(p.url, { rel: p.rel, target: p.target, title: p.title });
      return s.setFormat(p.format), s.setIndent(p.indent), s.setDirection(p.direction), s;
    }
    sanitizeUrl(p) {
      try {
        let s = new URL(p);
        if (!e.has(s.protocol)) return "about:blank";
      } catch {
      }
      return p;
    }
    exportJSON() {
      return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), type: "link", url: this.getURL(), version: 1 };
    }
    getURL() {
      return this.getLatest().__url;
    }
    setURL(p) {
      this.getWritable().__url = p;
    }
    getTarget() {
      return this.getLatest().__target;
    }
    setTarget(p) {
      this.getWritable().__target = p;
    }
    getRel() {
      return this.getLatest().__rel;
    }
    setRel(p) {
      this.getWritable().__rel = p;
    }
    getTitle() {
      return this.getLatest().__title;
    }
    setTitle(p) {
      this.getWritable().__title = p;
    }
    insertNewAfter(p, s = !0) {
      return p = l(this.__url, { rel: this.__rel, target: this.__target, title: this.__title }), this.insertAfter(p, s), p;
    }
    canInsertTextBefore() {
      return !1;
    }
    canInsertTextAfter() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isInline() {
      return !0;
    }
    extractWithChild(p, s) {
      if (!t.$isRangeSelection(s)) return !1;
      p = s.anchor.getNode();
      let u = s.focus.getNode();
      return this.isParentOf(p) && this.isParentOf(u) && 0 < s.getTextContent().length;
    }
  }
  function o(C) {
    let p = null;
    if (r.isHTMLAnchorElement(C)) {
      let s = C.textContent;
      (s !== null && s !== "" || 0 < C.children.length) && (p = l(C.getAttribute("href") || "", { rel: C.getAttribute("rel"), target: C.getAttribute("target"), title: C.getAttribute("title") }));
    }
    return { node: p };
  }
  function l(C, p) {
    return t.$applyNodeReplacement(new n(C, p));
  }
  function a(C) {
    return C instanceof n;
  }
  class i extends n {
    static getType() {
      return "autolink";
    }
    static clone(p) {
      return new i(p.__url, { rel: p.__rel, target: p.__target, title: p.__title }, p.__key);
    }
    static importJSON(p) {
      let s = _(p.url, { rel: p.rel, target: p.target, title: p.title });
      return s.setFormat(p.format), s.setIndent(p.indent), s.setDirection(p.direction), s;
    }
    static importDOM() {
      return null;
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "autolink", version: 1 };
    }
    insertNewAfter(p, s = !0) {
      return p = this.getParentOrThrow().insertNewAfter(p, s), t.$isElementNode(p) ? (s = _(this.__url, { rel: this.__rel, target: this.__target, title: this.__title }), p.append(s), s) : null;
    }
  }
  function _(C, p) {
    return t.$applyNodeReplacement(new i(C, p));
  }
  let m = t.createCommand("TOGGLE_LINK_COMMAND");
  function g(C, p) {
    for (; C !== null && C.getParent() !== null && !p(C); ) C = C.getParentOrThrow();
    return p(C) ? C : null;
  }
  return Ut.$createAutoLinkNode = _, Ut.$createLinkNode = l, Ut.$isAutoLinkNode = function(C) {
    return C instanceof i;
  }, Ut.$isLinkNode = a, Ut.AutoLinkNode = i, Ut.LinkNode = n, Ut.TOGGLE_LINK_COMMAND = m, Ut.toggleLink = function(C, p = {}) {
    let { target: s, title: u } = p, c = p.rel === void 0 ? "noreferrer" : p.rel;
    if (p = t.$getSelection(), t.$isRangeSelection(p)) if (p = p.extract(), C === null) p.forEach((N) => {
      if (N = N.getParent(), a(N)) {
        let h = N.getChildren();
        for (let E = 0; E < h.length; E++) N.insertBefore(h[E]);
        N.remove();
      }
    });
    else {
      if (p.length === 1) {
        let E = g(p[0], a);
        if (E !== null) {
          E.setURL(C), s !== void 0 && E.setTarget(s), c !== null && E.setRel(c), u !== void 0 && E.setTitle(u);
          return;
        }
      }
      let N = null, h = null;
      p.forEach((E) => {
        var d = E.getParent();
        if (d !== h && d !== null && (!t.$isElementNode(E) || E.isInline())) if (a(d)) h = d, d.setURL(C), s !== void 0 && d.setTarget(s), c !== null && h.setRel(c), u !== void 0 && h.setTitle(u);
        else if (d.is(N) || (N = d, h = l(C, { rel: c, target: s, title: u }), a(d) ? E.getPreviousSibling() === null ? d.insertBefore(h) : d.insertAfter(h) : E.insertBefore(h)), a(E)) {
          if (!E.is(h)) {
            if (h !== null) {
              d = E.getChildren();
              for (let f = 0; f < d.length; f++) h.append(d[f]);
            }
            E.remove();
          }
        } else h !== null && h.append(E);
      });
    }
  }, Ut;
}
const ru = process.env.NODE_ENV === "development" ? tu() : nu();
var lt = ru, Mt = {}, ms;
function ou() {
  if (ms) return Mt;
  ms = 1;
  var r = Ie, t = Ke();
  function e(j) {
    let $ = 1, W = j.getParent();
    for (; W != null; ) {
      if (O(W)) {
        const L = W.getParent();
        if (B(L)) {
          $++, W = L.getParent();
          continue;
        }
        throw Error("A ListItemNode must have a ListNode for a parent.");
      }
      return $;
    }
    return $;
  }
  function n(j) {
    let $ = j.getParent();
    if (!B($))
      throw Error("A ListItemNode must have a ListNode for a parent.");
    let W = $;
    for (; W !== null; )
      W = W.getParent(), B(W) && ($ = W);
    return $;
  }
  function o(j) {
    let $ = [];
    const W = j.getChildren().filter(O);
    for (let L = 0; L < W.length; L++) {
      const F = W[L], z = F.getFirstChild();
      B(z) ? $ = $.concat(o(z)) : $.push(F);
    }
    return $;
  }
  function l(j) {
    return O(j) && B(j.getFirstChild());
  }
  function a(j) {
    let $ = j;
    for (; $.getNextSibling() == null && $.getPreviousSibling() == null; ) {
      const W = $.getParent();
      if (W == null || !(O($) || B($)))
        break;
      $ = W;
    }
    $.remove();
  }
  function i(j) {
    return v().append(j);
  }
  function _(j, $) {
    return O(j) && ($.length === 0 || $.length === 1 && j.is($[0]) && j.getChildrenSize() === 0);
  }
  function m(j) {
    const $ = j.getParent();
    let W = 1;
    if ($ != null)
      if (B($))
        W = $.getStart();
      else
        throw Error("$getListItemValue: list node is not parent of list item node");
    const L = j.getPreviousSiblings();
    for (let F = 0; F < L.length; F++) {
      const z = L[F];
      O(z) && !B(z.getFirstChild()) && W++;
    }
    return W;
  }
  function g(j, $) {
    j.update(() => {
      const W = r.$getSelection();
      if (W !== null) {
        const L = W.getNodes(), F = W.getStartEndPoints();
        if (F === null)
          throw Error("insertList: anchor should be defined");
        const [z] = F, V = z.getNode(), Q = V.getParent();
        if (_(V, L)) {
          const le = K($);
          if (r.$isRootOrShadowRoot(Q)) {
            V.replace(le);
            const fe = v();
            r.$isElementNode(V) && (fe.setFormat(V.getFormatType()), fe.setIndent(V.getIndent())), le.append(fe);
          } else if (O(V)) {
            const fe = V.getParentOrThrow();
            C(le, fe.getChildren()), fe.replace(le);
          }
          return;
        } else {
          const le = /* @__PURE__ */ new Set();
          for (let fe = 0; fe < L.length; fe++) {
            const ue = L[fe];
            if (r.$isElementNode(ue) && ue.isEmpty() && !O(ue) && !le.has(ue.getKey())) {
              p(ue, $);
              continue;
            }
            if (r.$isLeafNode(ue)) {
              let de = ue.getParent();
              for (; de != null; ) {
                const P = de.getKey();
                if (B(de)) {
                  if (!le.has(P)) {
                    const I = K($);
                    C(I, de.getChildren()), de.replace(I), c(I), le.add(P);
                  }
                  break;
                } else {
                  const I = de.getParent();
                  if (r.$isRootOrShadowRoot(I) && !le.has(P)) {
                    le.add(P), p(de, $);
                    break;
                  }
                  de = I;
                }
              }
            }
          }
        }
      }
    });
  }
  function C(j, $) {
    j.splice(j.getChildrenSize(), 0, $);
  }
  function p(j, $) {
    if (B(j))
      return j;
    const W = j.getPreviousSibling(), L = j.getNextSibling(), F = v();
    if (F.setFormat(j.getFormatType()), F.setIndent(j.getIndent()), C(F, j.getChildren()), B(W) && $ === W.getListType())
      return W.append(F), j.remove(), B(L) && $ === L.getListType() && (C(W, L.getChildren()), L.remove()), W;
    if (B(L) && $ === L.getListType())
      return L.getFirstChildOrThrow().insertBefore(F), j.remove(), L;
    {
      const z = K($);
      return z.append(F), j.replace(z), c(z), z;
    }
  }
  function s(j, $) {
    const W = j.getLastChild(), L = $.getFirstChild();
    W && L && l(W) && l(L) && (s(W.getFirstChild(), L.getFirstChild()), L.remove());
    const F = $.getChildren();
    F.length > 0 && (j.append(...F), c(j)), $.remove();
  }
  function u(j) {
    j.update(() => {
      const $ = r.$getSelection();
      if (r.$isRangeSelection($)) {
        const W = /* @__PURE__ */ new Set(), L = $.getNodes(), F = $.anchor.getNode();
        if (_(F, L))
          W.add(n(F));
        else
          for (let z = 0; z < L.length; z++) {
            const V = L[z];
            if (r.$isLeafNode(V)) {
              const Q = t.$getNearestNodeOfType(V, d);
              Q != null && W.add(n(Q));
            }
          }
        for (const z of W) {
          let V = z;
          const Q = o(z);
          for (const le of Q) {
            const fe = r.$createParagraphNode();
            C(fe, le.getChildren()), V.insertAfter(fe), V = fe, le.__key === $.anchor.key && $.anchor.set(fe.getKey(), 0, "element"), le.__key === $.focus.key && $.focus.set(fe.getKey(), 0, "element"), le.remove();
          }
          z.remove();
        }
      }
    });
  }
  function c(j, $) {
    const W = $ || j.getChildren();
    if (W !== void 0)
      for (let L = 0; L < W.length; L++) {
        const F = W[L];
        if (O(F)) {
          const z = F.getValue(), V = m(F);
          z !== V && F.setValue(V);
        }
      }
  }
  function N(j) {
    const $ = /* @__PURE__ */ new Set();
    if (l(j) || $.has(j.getKey()))
      return;
    const W = j.getParent(), L = j.getNextSibling(), F = j.getPreviousSibling();
    if (l(L) && l(F)) {
      const z = F.getFirstChild();
      if (B(z)) {
        z.append(j);
        const V = L.getFirstChild();
        if (B(V)) {
          const Q = V.getChildren();
          C(z, Q), L.remove(), $.add(L.getKey());
        }
        c(z);
      }
    } else if (l(L)) {
      const z = L.getFirstChild();
      if (B(z)) {
        const V = z.getFirstChild();
        V !== null && V.insertBefore(j), c(z);
      }
    } else if (l(F)) {
      const z = F.getFirstChild();
      B(z) && (z.append(j), c(z));
    } else if (B(W)) {
      const z = v(), V = K(W.getListType());
      z.append(V), V.append(j), F ? F.insertAfter(z) : L ? L.insertBefore(z) : W.append(z), c(V);
    }
    B(W) && c(W);
  }
  function h(j) {
    if (l(j))
      return;
    const $ = j.getParent(), W = $ ? $.getParent() : void 0, L = W ? W.getParent() : void 0;
    if (B(L) && O(W) && B($)) {
      const F = $ ? $.getFirstChild() : void 0, z = $ ? $.getLastChild() : void 0;
      if (j.is(F))
        W.insertBefore(j), $.isEmpty() && W.remove();
      else if (j.is(z))
        W.insertAfter(j), $.isEmpty() && W.remove();
      else {
        const V = $.getListType(), Q = v(), le = K(V);
        Q.append(le), j.getPreviousSiblings().forEach((de) => le.append(de));
        const fe = v(), ue = K(V);
        fe.append(ue), C(ue, j.getNextSiblings()), W.insertBefore(Q), W.insertAfter(fe), W.replace(j);
      }
      c($), c(L);
    }
  }
  function E() {
    const j = r.$getSelection();
    if (!r.$isRangeSelection(j) || !j.isCollapsed())
      return !1;
    const $ = j.anchor.getNode();
    if (!O($) || $.getChildrenSize() !== 0)
      return !1;
    const W = n($), L = $.getParent();
    if (!B(L))
      throw Error("A ListItemNode must have a ListNode for a parent.");
    const F = L.getParent();
    let z;
    if (r.$isRootOrShadowRoot(F))
      z = r.$createParagraphNode(), W.insertAfter(z);
    else if (O(F))
      z = v(), F.insertAfter(z);
    else
      return !1;
    z.select();
    const V = $.getNextSiblings();
    if (V.length > 0) {
      const Q = K(L.getListType());
      if (r.$isParagraphNode(z))
        z.insertAfter(Q);
      else {
        const le = v();
        le.append(Q), z.insertAfter(le);
      }
      V.forEach((le) => {
        le.remove(), Q.append(le);
      });
    }
    return a($), !0;
  }
  class d extends r.ElementNode {
    /** @internal */
    /** @internal */
    static getType() {
      return "listitem";
    }
    static clone($) {
      return new d($.__value, $.__checked, $.__key);
    }
    constructor($, W, L) {
      super(L), this.__value = $ === void 0 ? 1 : $, this.__checked = W;
    }
    createDOM($) {
      const W = document.createElement("li"), L = this.getParent();
      return B(L) && L.getListType() === "check" && y(W, this, null), W.value = this.__value, f(W, $.theme, this), W;
    }
    updateDOM($, W, L) {
      const F = this.getParent();
      return B(F) && F.getListType() === "check" && y(W, this, $), W.value = this.__value, f(W, L.theme, this), !1;
    }
    static transform() {
      return ($) => {
        const W = $.getParent();
        if (B(W)) {
          if (c(W), !O($))
            throw Error("node is not a ListItemNode");
          W.getListType() !== "check" && $.getChecked() != null && $.setChecked(void 0);
        }
      };
    }
    static importDOM() {
      return {
        li: ($) => ({
          conversion: A,
          priority: 0
        })
      };
    }
    static importJSON($) {
      const W = v();
      return W.setChecked($.checked), W.setValue($.value), W.setFormat($.format), W.setDirection($.direction), W;
    }
    exportDOM($) {
      const W = this.createDOM($._config);
      return W.style.textAlign = this.getFormatType(), {
        element: W
      };
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        checked: this.getChecked(),
        type: "listitem",
        value: this.getValue(),
        version: 1
      };
    }
    append(...$) {
      for (let W = 0; W < $.length; W++) {
        const L = $[W];
        if (r.$isElementNode(L) && this.canMergeWith(L)) {
          const F = L.getChildren();
          this.append(...F), L.remove();
        } else
          super.append(L);
      }
      return this;
    }
    replace($, W) {
      if (O($))
        return super.replace($);
      this.setIndent(0);
      const L = this.getParentOrThrow();
      if (!B(L)) return $;
      if (L.__first === this.getKey())
        L.insertBefore($);
      else if (L.__last === this.getKey())
        L.insertAfter($);
      else {
        const F = K(L.getListType());
        let z = this.getNextSibling();
        for (; z; ) {
          const V = z;
          z = z.getNextSibling(), F.append(V);
        }
        L.insertAfter($), $.insertAfter(F);
      }
      if (W) {
        if (!r.$isElementNode($))
          throw Error("includeChildren should only be true for ElementNodes");
        this.getChildren().forEach((F) => {
          $.append(F);
        });
      }
      return this.remove(), L.getChildrenSize() === 0 && L.remove(), $;
    }
    insertAfter($, W = !0) {
      const L = this.getParentOrThrow();
      if (!B(L))
        throw Error("insertAfter: list node is not parent of list item node");
      const F = this.getNextSiblings();
      if (O($)) {
        const z = super.insertAfter($, W), V = $.getParentOrThrow();
        return B(V) && c(V), z;
      }
      if (B($)) {
        let z = $;
        const V = $.getChildren();
        for (let Q = V.length - 1; Q >= 0; Q--)
          z = V[Q], this.insertAfter(z, W);
        return z;
      }
      if (L.insertAfter($, W), F.length !== 0) {
        const z = K(L.getListType());
        F.forEach((V) => z.append(V)), $.insertAfter(z, W);
      }
      return $;
    }
    remove($) {
      const W = this.getPreviousSibling(), L = this.getNextSibling();
      if (super.remove($), W && L && l(W) && l(L))
        s(W.getFirstChild(), L.getFirstChild()), L.remove();
      else if (L) {
        const F = L.getParent();
        B(F) && c(F);
      }
    }
    insertNewAfter($, W = !0) {
      const L = v(this.__checked == null ? void 0 : !1);
      return this.insertAfter(L, W), L;
    }
    collapseAtStart($) {
      const W = r.$createParagraphNode();
      this.getChildren().forEach((Q) => W.append(Q));
      const F = this.getParentOrThrow(), z = F.getParentOrThrow(), V = O(z);
      if (F.getChildrenSize() === 1)
        if (V)
          F.remove(), z.select();
        else {
          F.insertBefore(W), F.remove();
          const Q = $.anchor, le = $.focus, fe = W.getKey();
          Q.type === "element" && Q.getNode().is(this) && Q.set(fe, Q.offset, "element"), le.type === "element" && le.getNode().is(this) && le.set(fe, le.offset, "element");
        }
      else
        F.insertBefore(W), this.remove();
      return !0;
    }
    getValue() {
      return this.getLatest().__value;
    }
    setValue($) {
      const W = this.getWritable();
      W.__value = $;
    }
    getChecked() {
      return this.getLatest().__checked;
    }
    setChecked($) {
      const W = this.getWritable();
      W.__checked = $;
    }
    toggleChecked() {
      this.setChecked(!this.__checked);
    }
    getIndent() {
      const $ = this.getParent();
      if ($ === null)
        return this.getLatest().__indent;
      let W = $.getParentOrThrow(), L = 0;
      for (; O(W); )
        W = W.getParentOrThrow().getParentOrThrow(), L++;
      return L;
    }
    setIndent($) {
      if (!(typeof $ == "number" && $ > -1))
        throw Error("Invalid indent value.");
      let W = this.getIndent();
      for (; W !== $; )
        W < $ ? (N(this), W++) : (h(this), W--);
      return this;
    }
    insertBefore($) {
      if (O($)) {
        const W = this.getParentOrThrow();
        if (B(W)) {
          const L = this.getNextSiblings();
          c(W, L);
        }
      }
      return super.insertBefore($);
    }
    canInsertAfter($) {
      return O($);
    }
    canReplaceWith($) {
      return O($);
    }
    canMergeWith($) {
      return r.$isParagraphNode($) || O($);
    }
    extractWithChild($, W) {
      if (!r.$isRangeSelection(W))
        return !1;
      const L = W.anchor.getNode(), F = W.focus.getNode();
      return this.isParentOf(L) && this.isParentOf(F) && this.getTextContent().length === W.getTextContent().length;
    }
    isParentRequired() {
      return !0;
    }
    createParentElementNode() {
      return K("bullet");
    }
  }
  function f(j, $, W) {
    const L = [], F = [], z = $.list, V = z ? z.listitem : void 0;
    let Q;
    if (z && z.nested && (Q = z.nested.listitem), V !== void 0) {
      const le = V.split(" ");
      L.push(...le);
    }
    if (z) {
      const le = W.getParent(), fe = B(le) && le.getListType() === "check", ue = W.getChecked();
      (!fe || ue) && F.push(z.listitemUnchecked), (!fe || !ue) && F.push(z.listitemChecked), fe && L.push(ue ? z.listitemChecked : z.listitemUnchecked);
    }
    if (Q !== void 0) {
      const le = Q.split(" ");
      W.getChildren().some((fe) => B(fe)) ? L.push(...le) : F.push(...le);
    }
    F.length > 0 && t.removeClassNamesFromElement(j, ...F), L.length > 0 && t.addClassNamesToElement(j, ...L);
  }
  function y(j, $, W, L) {
    B($.getFirstChild()) ? (j.removeAttribute("role"), j.removeAttribute("tabIndex"), j.removeAttribute("aria-checked")) : (j.setAttribute("role", "checkbox"), j.setAttribute("tabIndex", "-1"), (!W || $.__checked !== W.__checked) && j.setAttribute("aria-checked", $.getChecked() ? "true" : "false"));
  }
  function A(j) {
    const $ = t.isHTMLElement(j) && j.getAttribute("aria-checked") === "true";
    return {
      node: v($)
    };
  }
  function v(j) {
    return r.$applyNodeReplacement(new d(void 0, j));
  }
  function O(j) {
    return j instanceof d;
  }
  class T extends r.ElementNode {
    /** @internal */
    /** @internal */
    /** @internal */
    static getType() {
      return "list";
    }
    static clone($) {
      const W = $.__listType || H[$.__tag];
      return new T(W, $.__start, $.__key);
    }
    constructor($, W, L) {
      super(L);
      const F = H[$] || $;
      this.__listType = F, this.__tag = F === "number" ? "ol" : "ul", this.__start = W;
    }
    getTag() {
      return this.__tag;
    }
    setListType($) {
      const W = this.getWritable();
      W.__listType = $, W.__tag = $ === "number" ? "ol" : "ul";
    }
    getListType() {
      return this.__listType;
    }
    getStart() {
      return this.__start;
    }
    // View
    createDOM($, W) {
      const L = this.__tag, F = document.createElement(L);
      return this.__start !== 1 && F.setAttribute("start", String(this.__start)), F.__lexicalListType = this.__listType, S(F, $.theme, this), F;
    }
    updateDOM($, W, L) {
      return $.__tag !== this.__tag ? !0 : (S(W, L.theme, this), !1);
    }
    static importDOM() {
      return {
        ol: ($) => ({
          conversion: k,
          priority: 0
        }),
        ul: ($) => ({
          conversion: k,
          priority: 0
        })
      };
    }
    static importJSON($) {
      const W = K($.listType, $.start);
      return W.setFormat($.format), W.setIndent($.indent), W.setDirection($.direction), W;
    }
    exportDOM($) {
      const {
        element: W
      } = super.exportDOM($);
      return W && t.isHTMLElement(W) && (this.__start !== 1 && W.setAttribute("start", String(this.__start)), this.__listType === "check" && W.setAttribute("__lexicalListType", "check")), {
        element: W
      };
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        listType: this.getListType(),
        start: this.getStart(),
        tag: this.getTag(),
        type: "list",
        version: 1
      };
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
    append(...$) {
      for (let W = 0; W < $.length; W++) {
        const L = $[W];
        if (O(L))
          super.append(L);
        else {
          const F = v();
          if (B(L))
            F.append(L);
          else if (r.$isElementNode(L)) {
            const z = r.$createTextNode(L.getTextContent());
            F.append(z);
          } else
            F.append(L);
          super.append(F);
        }
      }
      return c(this), this;
    }
    extractWithChild($) {
      return O($);
    }
  }
  function S(j, $, W) {
    const L = [], F = [], z = $.list;
    if (z !== void 0) {
      const V = z[`${W.__tag}Depth`] || [], Q = e(W) - 1, le = Q % V.length, fe = V[le], ue = z[W.__tag];
      let de;
      const P = z.nested, I = z.checklist;
      if (P !== void 0 && P.list && (de = P.list), ue !== void 0 && L.push(ue), I !== void 0 && W.__listType === "check" && L.push(I), fe !== void 0) {
        const M = fe.split(" ");
        L.push(...M);
        for (let U = 0; U < V.length; U++)
          U !== le && F.push(W.__tag + U);
      }
      if (de !== void 0) {
        const M = de.split(" ");
        Q > 1 ? L.push(...M) : F.push(...M);
      }
    }
    F.length > 0 && t.removeClassNamesFromElement(j, ...F), L.length > 0 && t.addClassNamesToElement(j, ...L);
  }
  function b(j) {
    const $ = [];
    for (let W = 0; W < j.length; W++) {
      const L = j[W];
      if (O(L)) {
        $.push(L);
        const F = L.getChildren();
        F.length > 1 && F.forEach((z) => {
          B(z) && $.push(i(z));
        });
      } else
        $.push(i(L));
    }
    return $;
  }
  function k(j) {
    const $ = j.nodeName.toLowerCase();
    let W = null;
    if ($ === "ol") {
      const L = j.start;
      W = K("number", L);
    } else $ === "ul" && (t.isHTMLElement(j) && j.getAttribute("__lexicallisttype") === "check" ? W = K("check") : W = K("bullet"));
    return {
      after: b,
      node: W
    };
  }
  const H = {
    ol: "number",
    ul: "bullet"
  };
  function K(j, $ = 1) {
    return r.$applyNodeReplacement(new T(j, $));
  }
  function B(j) {
    return j instanceof T;
  }
  const w = r.createCommand("INSERT_UNORDERED_LIST_COMMAND"), x = r.createCommand("INSERT_ORDERED_LIST_COMMAND"), D = r.createCommand("INSERT_CHECK_LIST_COMMAND"), Y = r.createCommand("REMOVE_LIST_COMMAND");
  return Mt.$createListItemNode = v, Mt.$createListNode = K, Mt.$getListDepth = e, Mt.$handleListInsertParagraph = E, Mt.$isListItemNode = O, Mt.$isListNode = B, Mt.INSERT_CHECK_LIST_COMMAND = D, Mt.INSERT_ORDERED_LIST_COMMAND = x, Mt.INSERT_UNORDERED_LIST_COMMAND = w, Mt.ListItemNode = d, Mt.ListNode = T, Mt.REMOVE_LIST_COMMAND = Y, Mt.insertList = g, Mt.removeList = u, Mt;
}
var At = {}, _s;
function iu() {
  if (_s) return At;
  _s = 1;
  var r = Ie, t = Ke();
  function e(w) {
    let x = new URLSearchParams();
    x.append("code", w);
    for (let D = 1; D < arguments.length; D++) x.append("v", arguments[D]);
    throw Error(`Minified Lexical error #${w}; visit https://lexical.dev/docs/error?${x} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  function n(w) {
    let x = 1;
    for (w = w.getParent(); w != null; ) {
      if (f(w)) {
        if (w = w.getParent(), b(w)) {
          x++, w = w.getParent();
          continue;
        }
        e(40);
      }
      break;
    }
    return x;
  }
  function o(w) {
    w = w.getParent(), b(w) || e(40);
    let x = w;
    for (; x !== null; ) x = x.getParent(), b(x) && (w = x);
    return w;
  }
  function l(w) {
    let x = [];
    w = w.getChildren().filter(f);
    for (let D = 0; D < w.length; D++) {
      let Y = w[D], j = Y.getFirstChild();
      b(j) ? x = x.concat(l(j)) : x.push(Y);
    }
    return x;
  }
  function a(w) {
    return f(w) && b(w.getFirstChild());
  }
  function i(w) {
    for (; w.getNextSibling() == null && w.getPreviousSibling() == null; ) {
      let x = w.getParent();
      if (x == null || !f(w) && !b(w)) break;
      w = x;
    }
    w.remove();
  }
  function _(w) {
    return d().append(w);
  }
  function m(w, x) {
    return f(w) && (x.length === 0 || x.length === 1 && w.is(x[0]) && w.getChildrenSize() === 0);
  }
  function g(w, x) {
    w.splice(w.getChildrenSize(), 0, x);
  }
  function C(w, x) {
    if (b(w)) return w;
    let D = w.getPreviousSibling(), Y = w.getNextSibling(), j = d();
    return j.setFormat(w.getFormatType()), j.setIndent(w.getIndent()), g(j, w.getChildren()), b(D) && x === D.getListType() ? (D.append(j), w.remove(), b(Y) && x === Y.getListType() && (g(D, Y.getChildren()), Y.remove()), D) : b(Y) && x === Y.getListType() ? (Y.getFirstChildOrThrow().insertBefore(j), w.remove(), Y) : (x = S(x), x.append(j), w.replace(x), s(x), x);
  }
  function p(w, x) {
    var D = w.getLastChild();
    let Y = x.getFirstChild();
    D && Y && a(D) && a(Y) && (p(D.getFirstChild(), Y.getFirstChild()), Y.remove()), D = x.getChildren(), 0 < D.length && (w.append(...D), s(w)), x.remove();
  }
  function s(w, x) {
    if (w = x || w.getChildren(), w !== void 0) for (x = 0; x < w.length; x++) {
      let $ = w[x];
      if (f($)) {
        let W = $.getValue();
        var D = $, Y = D.getParent(), j = 1;
        for (Y != null && (b(Y) ? j = Y.getStart() : e(44)), D = D.getPreviousSiblings(), Y = 0; Y < D.length; Y++) {
          let L = D[Y];
          f(L) && !b(L.getFirstChild()) && j++;
        }
        W !== j && $.setValue(j);
      }
    }
  }
  function u(w) {
    if (!a(w)) {
      var x = w.getParent(), D = x ? x.getParent() : void 0, Y = D ? D.getParent() : void 0;
      if (b(Y) && f(D) && b(x)) {
        var j = x ? x.getFirstChild() : void 0, $ = x ? x.getLastChild() : void 0;
        if (w.is(j)) D.insertBefore(w), x.isEmpty() && D.remove();
        else if (w.is($)) D.insertAfter(w), x.isEmpty() && D.remove();
        else {
          var W = x.getListType();
          j = d();
          let L = S(W);
          j.append(L), w.getPreviousSiblings().forEach((F) => L.append(F)), $ = d(), W = S(W), $.append(W), g(W, w.getNextSiblings()), D.insertBefore(j), D.insertAfter($), D.replace(w);
        }
        s(x), s(Y);
      }
    }
  }
  class c extends r.ElementNode {
    static getType() {
      return "listitem";
    }
    static clone(x) {
      return new c(x.__value, x.__checked, x.__key);
    }
    constructor(x, D, Y) {
      super(Y), this.__value = x === void 0 ? 1 : x, this.__checked = D;
    }
    createDOM(x) {
      let D = document.createElement("li"), Y = this.getParent();
      return b(Y) && Y.getListType() === "check" && h(D, this, null), D.value = this.__value, N(D, x.theme, this), D;
    }
    updateDOM(x, D, Y) {
      let j = this.getParent();
      return b(j) && j.getListType() === "check" && h(D, this, x), D.value = this.__value, N(D, Y.theme, this), !1;
    }
    static transform() {
      return (x) => {
        let D = x.getParent();
        b(D) && (s(D), f(x) || e(144), D.getListType() !== "check" && x.getChecked() != null && x.setChecked(void 0));
      };
    }
    static importDOM() {
      return { li: () => ({ conversion: E, priority: 0 }) };
    }
    static importJSON(x) {
      let D = d();
      return D.setChecked(x.checked), D.setValue(x.value), D.setFormat(x.format), D.setDirection(x.direction), D;
    }
    exportDOM(x) {
      return x = this.createDOM(x._config), x.style.textAlign = this.getFormatType(), { element: x };
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        checked: this.getChecked(),
        type: "listitem",
        value: this.getValue(),
        version: 1
      };
    }
    append(...x) {
      for (let D = 0; D < x.length; D++) {
        let Y = x[D];
        if (r.$isElementNode(Y) && this.canMergeWith(Y)) {
          let j = Y.getChildren();
          this.append(...j), Y.remove();
        } else super.append(Y);
      }
      return this;
    }
    replace(x, D) {
      if (f(x)) return super.replace(x);
      this.setIndent(0);
      let Y = this.getParentOrThrow();
      if (!b(Y)) return x;
      if (Y.__first === this.getKey()) Y.insertBefore(x);
      else if (Y.__last === this.getKey()) Y.insertAfter(x);
      else {
        let j = S(Y.getListType()), $ = this.getNextSibling();
        for (; $; ) {
          let W = $;
          $ = $.getNextSibling(), j.append(W);
        }
        Y.insertAfter(x), x.insertAfter(j);
      }
      return D && (r.$isElementNode(x) || e(139), this.getChildren().forEach((j) => {
        x.append(j);
      })), this.remove(), Y.getChildrenSize() === 0 && Y.remove(), x;
    }
    insertAfter(x, D = !0) {
      var Y = this.getParentOrThrow();
      b(Y) || e(39);
      var j = this.getNextSiblings();
      if (f(x)) return D = super.insertAfter(x, D), x = x.getParentOrThrow(), b(x) && s(x), D;
      if (b(x)) {
        for (Y = x, x = x.getChildren(), j = x.length - 1; 0 <= j; j--) Y = x[j], this.insertAfter(Y, D);
        return Y;
      }
      if (Y.insertAfter(x, D), j.length !== 0) {
        let $ = S(Y.getListType());
        j.forEach((W) => $.append(W)), x.insertAfter($, D);
      }
      return x;
    }
    remove(x) {
      let D = this.getPreviousSibling(), Y = this.getNextSibling();
      super.remove(x), D && Y && a(D) && a(Y) ? (p(D.getFirstChild(), Y.getFirstChild()), Y.remove()) : Y && (x = Y.getParent(), b(x) && s(x));
    }
    insertNewAfter(x, D = !0) {
      return x = d(this.__checked == null ? void 0 : !1), this.insertAfter(x, D), x;
    }
    collapseAtStart(x) {
      let D = r.$createParagraphNode();
      this.getChildren().forEach((W) => D.append(W));
      var Y = this.getParentOrThrow(), j = Y.getParentOrThrow();
      let $ = f(j);
      return Y.getChildrenSize() === 1 ? $ ? (Y.remove(), j.select()) : (Y.insertBefore(D), Y.remove(), Y = x.anchor, x = x.focus, j = D.getKey(), Y.type === "element" && Y.getNode().is(this) && Y.set(j, Y.offset, "element"), x.type === "element" && x.getNode().is(this) && x.set(j, x.offset, "element")) : (Y.insertBefore(D), this.remove()), !0;
    }
    getValue() {
      return this.getLatest().__value;
    }
    setValue(x) {
      this.getWritable().__value = x;
    }
    getChecked() {
      return this.getLatest().__checked;
    }
    setChecked(x) {
      this.getWritable().__checked = x;
    }
    toggleChecked() {
      this.setChecked(!this.__checked);
    }
    getIndent() {
      var x = this.getParent();
      if (x === null) return this.getLatest().__indent;
      x = x.getParentOrThrow();
      let D = 0;
      for (; f(x); ) x = x.getParentOrThrow().getParentOrThrow(), D++;
      return D;
    }
    setIndent(x) {
      typeof x == "number" && -1 < x || e(117);
      let D = this.getIndent();
      for (; D !== x; ) if (D < x) {
        e: {
          var Y = /* @__PURE__ */ new Set();
          if (a(this) || Y.has(this.getKey())) break e;
          let L = this.getParent();
          var j = this.getNextSibling(), $ = this.getPreviousSibling();
          if (a(j) && a($)) {
            if ($ = $.getFirstChild(), b($)) {
              $.append(this);
              var W = j.getFirstChild();
              b(W) && (W = W.getChildren(), g($, W), j.remove(), Y.add(j.getKey())), s($);
            }
          } else a(j) ? (j = j.getFirstChild(), b(j) && (Y = j.getFirstChild(), Y !== null && Y.insertBefore(this), s(j))) : a($) ? (j = $.getFirstChild(), b(j) && (j.append(this), s(j))) : b(L) && (Y = d(), W = S(L.getListType()), Y.append(W), W.append(this), $ ? $.insertAfter(Y) : j ? j.insertBefore(Y) : L.append(Y), s(W));
          b(L) && s(L);
        }
        D++;
      } else u(this), D--;
      return this;
    }
    insertBefore(x) {
      if (f(x)) {
        let D = this.getParentOrThrow();
        if (b(D)) {
          let Y = this.getNextSiblings();
          s(D, Y);
        }
      }
      return super.insertBefore(x);
    }
    canInsertAfter(x) {
      return f(x);
    }
    canReplaceWith(x) {
      return f(x);
    }
    canMergeWith(x) {
      return r.$isParagraphNode(x) || f(x);
    }
    extractWithChild(x, D) {
      if (!r.$isRangeSelection(D)) return !1;
      x = D.anchor.getNode();
      let Y = D.focus.getNode();
      return this.isParentOf(x) && this.isParentOf(Y) && this.getTextContent().length === D.getTextContent().length;
    }
    isParentRequired() {
      return !0;
    }
    createParentElementNode() {
      return S("bullet");
    }
  }
  function N(w, x, D) {
    let Y = [], j = [];
    var $ = (x = x.list) ? x.listitem : void 0;
    if (x && x.nested) var W = x.nested.listitem;
    if ($ !== void 0 && ($ = $.split(" "), Y.push(...$)), x) {
      $ = D.getParent(), $ = b($) && $.getListType() === "check";
      let L = D.getChecked();
      $ && !L || j.push(x.listitemUnchecked), $ && L || j.push(x.listitemChecked), $ && Y.push(L ? x.listitemChecked : x.listitemUnchecked);
    }
    W !== void 0 && (W = W.split(" "), D.getChildren().some((L) => b(L)) ? Y.push(...W) : j.push(...W)), 0 < j.length && t.removeClassNamesFromElement(w, ...j), 0 < Y.length && t.addClassNamesToElement(
      w,
      ...Y
    );
  }
  function h(w, x, D) {
    b(x.getFirstChild()) ? (w.removeAttribute("role"), w.removeAttribute("tabIndex"), w.removeAttribute("aria-checked")) : (w.setAttribute("role", "checkbox"), w.setAttribute("tabIndex", "-1"), D && x.__checked === D.__checked || w.setAttribute("aria-checked", x.getChecked() ? "true" : "false"));
  }
  function E(w) {
    return w = t.isHTMLElement(w) && w.getAttribute("aria-checked") === "true", { node: d(w) };
  }
  function d(w) {
    return r.$applyNodeReplacement(new c(void 0, w));
  }
  function f(w) {
    return w instanceof c;
  }
  class y extends r.ElementNode {
    static getType() {
      return "list";
    }
    static clone(x) {
      return new y(x.__listType || T[x.__tag], x.__start, x.__key);
    }
    constructor(x, D, Y) {
      super(Y), this.__listType = x = T[x] || x, this.__tag = x === "number" ? "ol" : "ul", this.__start = D;
    }
    getTag() {
      return this.__tag;
    }
    setListType(x) {
      let D = this.getWritable();
      D.__listType = x, D.__tag = x === "number" ? "ol" : "ul";
    }
    getListType() {
      return this.__listType;
    }
    getStart() {
      return this.__start;
    }
    createDOM(x) {
      let D = document.createElement(this.__tag);
      return this.__start !== 1 && D.setAttribute(
        "start",
        String(this.__start)
      ), D.__lexicalListType = this.__listType, A(D, x.theme, this), D;
    }
    updateDOM(x, D, Y) {
      return x.__tag !== this.__tag ? !0 : (A(D, Y.theme, this), !1);
    }
    static importDOM() {
      return { ol: () => ({ conversion: O, priority: 0 }), ul: () => ({ conversion: O, priority: 0 }) };
    }
    static importJSON(x) {
      let D = S(x.listType, x.start);
      return D.setFormat(x.format), D.setIndent(x.indent), D.setDirection(x.direction), D;
    }
    exportDOM(x) {
      return { element: x } = super.exportDOM(x), x && t.isHTMLElement(x) && (this.__start !== 1 && x.setAttribute("start", String(this.__start)), this.__listType === "check" && x.setAttribute("__lexicalListType", "check")), { element: x };
    }
    exportJSON() {
      return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag(), type: "list", version: 1 };
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
    append(...x) {
      for (let Y = 0; Y < x.length; Y++) {
        var D = x[Y];
        if (f(D)) super.append(D);
        else {
          let j = d();
          b(D) || r.$isElementNode(D) && (D = r.$createTextNode(D.getTextContent())), j.append(D), super.append(j);
        }
      }
      return s(this), this;
    }
    extractWithChild(x) {
      return f(x);
    }
  }
  function A(w, x, D) {
    let Y = [], j = [];
    var $ = x.list;
    if ($ !== void 0) {
      let L = $[`${D.__tag}Depth`] || [];
      x = n(D) - 1;
      let F = x % L.length;
      var W = L[F];
      let z = $[D.__tag], V, Q = $.nested;
      if ($ = $.checklist, Q !== void 0 && Q.list && (V = Q.list), z !== void 0 && Y.push(z), $ !== void 0 && D.__listType === "check" && Y.push($), W !== void 0) for (W = W.split(" "), Y.push(...W), W = 0; W < L.length; W++) W !== F && j.push(D.__tag + W);
      V !== void 0 && (D = V.split(" "), 1 < x ? Y.push(...D) : j.push(...D));
    }
    0 < j.length && t.removeClassNamesFromElement(w, ...j), 0 < Y.length && t.addClassNamesToElement(
      w,
      ...Y
    );
  }
  function v(w) {
    let x = [];
    for (let Y = 0; Y < w.length; Y++) {
      var D = w[Y];
      f(D) ? (x.push(D), D = D.getChildren(), 1 < D.length && D.forEach((j) => {
        b(j) && x.push(_(j));
      })) : x.push(_(D));
    }
    return x;
  }
  function O(w) {
    let x = w.nodeName.toLowerCase(), D = null;
    return x === "ol" ? D = S("number", w.start) : x === "ul" && (D = t.isHTMLElement(w) && w.getAttribute("__lexicallisttype") === "check" ? S("check") : S("bullet")), { after: v, node: D };
  }
  let T = { ol: "number", ul: "bullet" };
  function S(w, x = 1) {
    return r.$applyNodeReplacement(new y(w, x));
  }
  function b(w) {
    return w instanceof y;
  }
  let k = r.createCommand("INSERT_UNORDERED_LIST_COMMAND"), H = r.createCommand("INSERT_ORDERED_LIST_COMMAND"), K = r.createCommand("INSERT_CHECK_LIST_COMMAND"), B = r.createCommand("REMOVE_LIST_COMMAND");
  return At.$createListItemNode = d, At.$createListNode = S, At.$getListDepth = n, At.$handleListInsertParagraph = function() {
    var w = r.$getSelection();
    if (!r.$isRangeSelection(w) || !w.isCollapsed() || (w = w.anchor.getNode(), !f(w) || w.getChildrenSize() !== 0)) return !1;
    var x = o(w), D = w.getParent();
    b(D) || e(40);
    let Y = D.getParent(), j;
    if (r.$isRootOrShadowRoot(Y)) j = r.$createParagraphNode(), x.insertAfter(j);
    else if (f(Y)) j = d(), Y.insertAfter(j);
    else return !1;
    if (j.select(), x = w.getNextSiblings(), 0 < x.length) {
      let $ = S(D.getListType());
      r.$isParagraphNode(j) ? j.insertAfter($) : (D = d(), D.append($), j.insertAfter(D)), x.forEach((W) => {
        W.remove(), $.append(W);
      });
    }
    return i(w), !0;
  }, At.$isListItemNode = f, At.$isListNode = b, At.INSERT_CHECK_LIST_COMMAND = K, At.INSERT_ORDERED_LIST_COMMAND = H, At.INSERT_UNORDERED_LIST_COMMAND = k, At.ListItemNode = c, At.ListNode = y, At.REMOVE_LIST_COMMAND = B, At.insertList = function(w, x) {
    w.update(() => {
      var D = r.$getSelection();
      if (D !== null) {
        var Y = D.getNodes();
        D = D.getStartEndPoints(), D === null && e(143), [D] = D, D = D.getNode();
        var j = D.getParent();
        if (m(D, Y)) Y = S(x), r.$isRootOrShadowRoot(j) ? (D.replace(Y), j = d(), r.$isElementNode(D) && (j.setFormat(D.getFormatType()), j.setIndent(D.getIndent())), Y.append(j)) : f(D) && (D = D.getParentOrThrow(), g(Y, D.getChildren()), D.replace(Y));
        else for (D = /* @__PURE__ */ new Set(), j = 0; j < Y.length; j++) {
          var $ = Y[j];
          if (r.$isElementNode($) && $.isEmpty() && !f($) && !D.has($.getKey())) C(
            $,
            x
          );
          else if (r.$isLeafNode($)) for ($ = $.getParent(); $ != null; ) {
            let L = $.getKey();
            if (b($)) {
              if (!D.has(L)) {
                var W = S(x);
                g(W, $.getChildren()), $.replace(W), s(W), D.add(L);
              }
              break;
            } else {
              if (W = $.getParent(), r.$isRootOrShadowRoot(W) && !D.has(L)) {
                D.add(L), C($, x);
                break;
              }
              $ = W;
            }
          }
        }
      }
    });
  }, At.removeList = function(w) {
    w.update(() => {
      let x = r.$getSelection();
      if (r.$isRangeSelection(x)) {
        var D = /* @__PURE__ */ new Set(), Y = x.getNodes(), j = x.anchor.getNode();
        if (m(j, Y)) D.add(o(j));
        else for (j = 0; j < Y.length; j++) {
          var $ = Y[j];
          r.$isLeafNode($) && ($ = t.$getNearestNodeOfType($, c), $ != null && D.add(o($)));
        }
        for (let W of D) {
          D = W, Y = l(W);
          for (let L of Y) Y = r.$createParagraphNode(), g(Y, L.getChildren()), D.insertAfter(Y), D = Y, L.__key === x.anchor.key && x.anchor.set(Y.getKey(), 0, "element"), L.__key === x.focus.key && x.focus.set(Y.getKey(), 0, "element"), L.remove();
          W.remove();
        }
      }
    });
  }, At;
}
const su = process.env.NODE_ENV === "development" ? ou() : iu();
var vt = su, tn = {}, Ns;
function lu() {
  if (Ns) return tn;
  Ns = 1;
  var r = Ie, t = Ke();
  class e extends r.ElementNode {
    /** @internal */
    static getType() {
      return "mark";
    }
    static clone(m) {
      return new e(Array.from(m.__ids), m.__key);
    }
    static importDOM() {
      return null;
    }
    static importJSON(m) {
      const g = n(m.ids);
      return g.setFormat(m.format), g.setIndent(m.indent), g.setDirection(m.direction), g;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        ids: this.getIDs(),
        type: "mark",
        version: 1
      };
    }
    constructor(m, g) {
      super(g), this.__ids = m || [];
    }
    createDOM(m) {
      const g = document.createElement("mark");
      return t.addClassNamesToElement(g, m.theme.mark), this.__ids.length > 1 && t.addClassNamesToElement(g, m.theme.markOverlap), g;
    }
    updateDOM(m, g, C) {
      const p = m.__ids, s = this.__ids, u = p.length, c = s.length, N = C.theme.markOverlap;
      return u !== c && (u === 1 ? c === 2 && t.addClassNamesToElement(g, N) : c === 1 && t.removeClassNamesFromElement(g, N)), !1;
    }
    hasID(m) {
      const g = this.getIDs();
      for (let C = 0; C < g.length; C++)
        if (m === g[C])
          return !0;
      return !1;
    }
    getIDs() {
      const m = this.getLatest();
      return o(m) ? m.__ids : [];
    }
    addID(m) {
      const g = this.getWritable();
      if (o(g)) {
        const C = g.__ids;
        g.__ids = C;
        for (let p = 0; p < C.length; p++)
          if (m === C[p]) return;
        C.push(m);
      }
    }
    deleteID(m) {
      const g = this.getWritable();
      if (o(g)) {
        const C = g.__ids;
        g.__ids = C;
        for (let p = 0; p < C.length; p++)
          if (m === C[p]) {
            C.splice(p, 1);
            return;
          }
      }
    }
    insertNewAfter(m, g = !0) {
      const C = n(this.__ids);
      return this.insertAfter(C, g), C;
    }
    canInsertTextBefore() {
      return !1;
    }
    canInsertTextAfter() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isInline() {
      return !0;
    }
    extractWithChild(m, g, C) {
      if (!r.$isRangeSelection(g) || C === "html")
        return !1;
      const p = g.anchor, s = g.focus, u = p.getNode(), c = s.getNode(), h = g.isBackward() ? p.offset - s.offset : s.offset - p.offset;
      return this.isParentOf(u) && this.isParentOf(c) && this.getTextContent().length === h;
    }
    excludeFromCopy(m) {
      return m !== "clone";
    }
  }
  function n(_) {
    return r.$applyNodeReplacement(new e(_));
  }
  function o(_) {
    return _ instanceof e;
  }
  function l(_) {
    const m = _.getChildren();
    let g = null;
    for (let C = 0; C < m.length; C++) {
      const p = m[C];
      g === null ? _.insertBefore(p) : g.insertAfter(p), g = p;
    }
    _.remove();
  }
  function a(_, m, g, C) {
    const p = _.getNodes(), s = _.anchor.offset, u = _.focus.offset, c = p.length, N = m ? u : s, h = m ? s : u;
    let E, d;
    for (let f = 0; f < c; f++) {
      const y = p[f];
      if (r.$isElementNode(d) && d.isParentOf(y))
        continue;
      const A = f === 0, v = f === c - 1;
      let O = null;
      if (r.$isTextNode(y)) {
        const T = y.getTextContentSize(), S = A ? N : 0, b = v ? h : T;
        if (S === 0 && b === 0)
          continue;
        const k = y.splitText(S, b);
        O = k.length > 1 && (k.length === 3 || A && !v || b === T) ? k[1] : k[0];
      } else {
        if (o(y))
          continue;
        r.$isElementNode(y) && y.isInline() && (O = y);
      }
      if (O !== null) {
        if (O && O.is(E))
          continue;
        const T = O.getParent();
        (T == null || !T.is(E)) && (d = void 0), E = T, d === void 0 && (d = (C || n)([g]), O.insertBefore(d)), d.append(O);
      } else
        E = void 0, d = void 0;
    }
    r.$isElementNode(d) && (m ? d.selectStart() : d.selectEnd());
  }
  function i(_, m) {
    let g = _;
    for (; g !== null; ) {
      if (o(g))
        return g.getIDs();
      if (r.$isTextNode(g) && m === g.getTextContentSize()) {
        const C = g.getNextSibling();
        if (o(C))
          return C.getIDs();
      }
      g = g.getParent();
    }
    return null;
  }
  return tn.$createMarkNode = n, tn.$getMarkIDs = i, tn.$isMarkNode = o, tn.$unwrapMarkNode = l, tn.$wrapSelectionInMarkNode = a, tn.MarkNode = e, tn;
}
var nn = {}, Cs;
function au() {
  if (Cs) return nn;
  Cs = 1;
  var r = Ie, t = Ke();
  class e extends r.ElementNode {
    static getType() {
      return "mark";
    }
    static clone(a) {
      return new e(Array.from(a.__ids), a.__key);
    }
    static importDOM() {
      return null;
    }
    static importJSON(a) {
      let i = n(a.ids);
      return i.setFormat(a.format), i.setIndent(a.indent), i.setDirection(a.direction), i;
    }
    exportJSON() {
      return { ...super.exportJSON(), ids: this.getIDs(), type: "mark", version: 1 };
    }
    constructor(a, i) {
      super(i), this.__ids = a || [];
    }
    createDOM(a) {
      let i = document.createElement("mark");
      return t.addClassNamesToElement(i, a.theme.mark), 1 < this.__ids.length && t.addClassNamesToElement(i, a.theme.markOverlap), i;
    }
    updateDOM(a, i, _) {
      a = a.__ids.length;
      let m = this.__ids.length;
      return _ = _.theme.markOverlap, a !== m && (a === 1 ? m === 2 && t.addClassNamesToElement(i, _) : m === 1 && t.removeClassNamesFromElement(i, _)), !1;
    }
    hasID(a) {
      let i = this.getIDs();
      for (let _ = 0; _ < i.length; _++) if (a === i[_]) return !0;
      return !1;
    }
    getIDs() {
      let a = this.getLatest();
      return o(a) ? a.__ids : [];
    }
    addID(a) {
      var i = this.getWritable();
      if (o(i)) {
        let _ = i.__ids;
        for (i.__ids = _, i = 0; i < _.length; i++) if (a === _[i]) return;
        _.push(a);
      }
    }
    deleteID(a) {
      var i = this.getWritable();
      if (o(i)) {
        let _ = i.__ids;
        for (i.__ids = _, i = 0; i < _.length; i++) if (a === _[i]) {
          _.splice(i, 1);
          break;
        }
      }
    }
    insertNewAfter(a, i = !0) {
      return a = n(this.__ids), this.insertAfter(a, i), a;
    }
    canInsertTextBefore() {
      return !1;
    }
    canInsertTextAfter() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isInline() {
      return !0;
    }
    extractWithChild(a, i, _) {
      if (!r.$isRangeSelection(i) || _ === "html") return !1;
      let m = i.anchor, g = i.focus;
      return a = m.getNode(), _ = g.getNode(), i = i.isBackward() ? m.offset - g.offset : g.offset - m.offset, this.isParentOf(a) && this.isParentOf(_) && this.getTextContent().length === i;
    }
    excludeFromCopy(a) {
      return a !== "clone";
    }
  }
  function n(l) {
    return r.$applyNodeReplacement(new e(l));
  }
  function o(l) {
    return l instanceof e;
  }
  return nn.$createMarkNode = n, nn.$getMarkIDs = function(l, a) {
    for (; l !== null; ) {
      if (o(l)) return l.getIDs();
      if (r.$isTextNode(l) && a === l.getTextContentSize()) {
        let i = l.getNextSibling();
        if (o(i)) return i.getIDs();
      }
      l = l.getParent();
    }
    return null;
  }, nn.$isMarkNode = o, nn.$unwrapMarkNode = function(l) {
    let a = l.getChildren(), i = null;
    for (let _ = 0; _ < a.length; _++) {
      let m = a[_];
      i === null ? l.insertBefore(m) : i.insertAfter(m), i = m;
    }
    l.remove();
  }, nn.$wrapSelectionInMarkNode = function(l, a, i, _) {
    let m = l.getNodes();
    var g = l.anchor.offset, C = l.focus.offset;
    l = m.length;
    let p = a ? C : g;
    g = a ? g : C;
    let s, u;
    for (C = 0; C < l; C++) {
      var c = m[C];
      if (r.$isElementNode(u) && u.isParentOf(c)) continue;
      var N = C === 0;
      let E = C === l - 1;
      var h = null;
      if (r.$isTextNode(c)) {
        h = c.getTextContentSize();
        let d = N ? p : 0, f = E ? g : h;
        if (d === 0 && f === 0) continue;
        c = c.splitText(d, f), h = 1 < c.length && (c.length === 3 || N && !E || f === h) ? c[1] : c[0];
      } else {
        if (o(c)) continue;
        r.$isElementNode(c) && c.isInline() && (h = c);
      }
      h !== null ? h && h.is(s) || (N = h.getParent(), N != null && N.is(s) || (u = void 0), s = N, u === void 0 && (u = (_ || n)([i]), h.insertBefore(u)), u.append(h)) : u = s = void 0;
    }
    r.$isElementNode(u) && (a ? u.selectStart() : u.selectEnd());
  }, nn.MarkNode = e, nn;
}
const cu = process.env.NODE_ENV === "development" ? lu() : au();
var uu = cu, Zn = {}, xs;
function du() {
  if (xs) return Zn;
  xs = 1;
  var r = Ie;
  class t extends r.ElementNode {
    static getType() {
      return "overflow";
    }
    static clone(l) {
      return new t(l.__key);
    }
    static importJSON(l) {
      return e();
    }
    static importDOM() {
      return null;
    }
    constructor(l) {
      super(l), this.__type = "overflow";
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "overflow"
      };
    }
    createDOM(l) {
      const a = document.createElement("span"), i = l.theme.characterLimit;
      return typeof i == "string" && (a.className = i), a;
    }
    updateDOM(l, a) {
      return !1;
    }
    insertNewAfter(l, a = !0) {
      return this.getParentOrThrow().insertNewAfter(l, a);
    }
    excludeFromCopy() {
      return !0;
    }
  }
  function e() {
    return r.$applyNodeReplacement(new t());
  }
  function n(o) {
    return o instanceof t;
  }
  return Zn.$createOverflowNode = e, Zn.$isOverflowNode = n, Zn.OverflowNode = t, Zn;
}
var Qn = {}, Es;
function fu() {
  if (Es) return Qn;
  Es = 1;
  var r = Ie;
  class t extends r.ElementNode {
    static getType() {
      return "overflow";
    }
    static clone(o) {
      return new t(o.__key);
    }
    static importJSON() {
      return e();
    }
    static importDOM() {
      return null;
    }
    constructor(o) {
      super(o), this.__type = "overflow";
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "overflow" };
    }
    createDOM(o) {
      let l = document.createElement("span");
      return o = o.theme.characterLimit, typeof o == "string" && (l.className = o), l;
    }
    updateDOM() {
      return !1;
    }
    insertNewAfter(o, l = !0) {
      return this.getParentOrThrow().insertNewAfter(o, l);
    }
    excludeFromCopy() {
      return !0;
    }
  }
  function e() {
    return r.$applyNodeReplacement(new t());
  }
  return Qn.$createOverflowNode = e, Qn.$isOverflowNode = function(n) {
    return n instanceof t;
  }, Qn.OverflowNode = t, Qn;
}
const gu = process.env.NODE_ENV === "development" ? du() : fu();
var hu = gu, vn = {}, Gr = {}, Ts;
function pu() {
  if (Ts) return Gr;
  Ts = 1;
  var r = Ye(), t = Ie, e = je;
  function n(l, a) {
    return l.getEditorState().read(() => {
      const i = t.$getNodeByKey(a);
      return i === null ? !1 : i.isSelected();
    });
  }
  function o(l) {
    const [a] = r.useLexicalComposerContext(), [i, _] = e.useState(() => n(a, l));
    e.useEffect(() => {
      let C = !0;
      const p = a.registerUpdateListener(() => {
        C && _(n(a, l));
      });
      return () => {
        C = !1, p();
      };
    }, [a, l]);
    const m = e.useCallback((C) => {
      a.update(() => {
        let p = t.$getSelection();
        t.$isNodeSelection(p) || (p = t.$createNodeSelection(), t.$setSelection(p)), t.$isNodeSelection(p) && (C ? p.add(l) : p.delete(l));
      });
    }, [a, l]), g = e.useCallback(() => {
      a.update(() => {
        const C = t.$getSelection();
        t.$isNodeSelection(C) && C.clear();
      });
    }, [a]);
    return [i, m, g];
  }
  return Gr.useLexicalNodeSelection = o, Gr;
}
var Vr = {}, ys;
function mu() {
  if (ys) return Vr;
  ys = 1;
  var r = Ye(), t = Ie, e = je;
  function n(o, l) {
    return o.getEditorState().read(() => {
      let a = t.$getNodeByKey(l);
      return a === null ? !1 : a.isSelected();
    });
  }
  return Vr.useLexicalNodeSelection = function(o) {
    let [l] = r.useLexicalComposerContext(), [a, i] = e.useState(() => n(l, o));
    e.useEffect(() => {
      let g = !0, C = l.registerUpdateListener(() => {
        g && i(n(l, o));
      });
      return () => {
        g = !1, C();
      };
    }, [l, o]);
    let _ = e.useCallback((g) => {
      l.update(() => {
        let C = t.$getSelection();
        t.$isNodeSelection(C) || (C = t.$createNodeSelection(), t.$setSelection(C)), t.$isNodeSelection(C) && (g ? C.add(o) : C.delete(o));
      });
    }, [l, o]), m = e.useCallback(
      () => {
        l.update(() => {
          const g = t.$getSelection();
          t.$isNodeSelection(g) && g.clear();
        });
      },
      [l]
    );
    return [a, _, m];
  }, Vr;
}
var Jr, vs;
function ur() {
  return vs || (vs = 1, Jr = process.env.NODE_ENV === "development" ? pu() : mu()), Jr;
}
var Ss;
function _u() {
  if (Ss) return vn;
  Ss = 1;
  var r = Ye(), t = ur(), e = Ke(), n = Ie, o = je;
  const l = n.createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
  function a({
    nodeKey: C
  }) {
    const [p] = r.useLexicalComposerContext(), [s, u, c] = t.useLexicalNodeSelection(C), N = o.useCallback((h) => {
      if (s && n.$isNodeSelection(n.$getSelection())) {
        h.preventDefault();
        const E = n.$getNodeByKey(C);
        g(E) && E.remove();
      }
      return !1;
    }, [s, C]);
    return o.useEffect(() => e.mergeRegister(p.registerCommand(n.CLICK_COMMAND, (h) => {
      const E = p.getElementByKey(C);
      return h.target === E ? (h.shiftKey || c(), u(!s), !0) : !1;
    }, n.COMMAND_PRIORITY_LOW), p.registerCommand(n.KEY_DELETE_COMMAND, N, n.COMMAND_PRIORITY_LOW), p.registerCommand(n.KEY_BACKSPACE_COMMAND, N, n.COMMAND_PRIORITY_LOW)), [c, p, s, C, N, u]), o.useEffect(() => {
      const h = p.getElementByKey(C);
      h !== null && (h.className = s ? "selected" : "");
    }, [p, s, C]), null;
  }
  class i extends n.DecoratorNode {
    static getType() {
      return "horizontalrule";
    }
    static clone(p) {
      return new i(p.__key);
    }
    static importJSON(p) {
      return m();
    }
    static importDOM() {
      return {
        hr: () => ({
          conversion: _,
          priority: 0
        })
      };
    }
    exportJSON() {
      return {
        type: "horizontalrule",
        version: 1
      };
    }
    exportDOM() {
      return {
        element: document.createElement("hr")
      };
    }
    createDOM() {
      return document.createElement("hr");
    }
    getTextContent() {
      return `
`;
    }
    isInline() {
      return !1;
    }
    updateDOM() {
      return !1;
    }
    decorate() {
      return /* @__PURE__ */ o.createElement(a, {
        nodeKey: this.__key
      });
    }
  }
  function _() {
    return {
      node: m()
    };
  }
  function m() {
    return n.$applyNodeReplacement(new i());
  }
  function g(C) {
    return C instanceof i;
  }
  return vn.$createHorizontalRuleNode = m, vn.$isHorizontalRuleNode = g, vn.HorizontalRuleNode = i, vn.INSERT_HORIZONTAL_RULE_COMMAND = l, vn;
}
var Sn = {}, bs;
function Nu() {
  if (bs) return Sn;
  bs = 1;
  var r = Ye(), t = ur(), e = Ke(), n = Ie, o = je;
  let l = n.createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
  function a({ nodeKey: C }) {
    let [p] = r.useLexicalComposerContext(), [s, u, c] = t.useLexicalNodeSelection(C), N = o.useCallback((h) => (s && n.$isNodeSelection(n.$getSelection()) && (h.preventDefault(), h = n.$getNodeByKey(C), g(h) && h.remove()), !1), [s, C]);
    return o.useEffect(() => e.mergeRegister(p.registerCommand(n.CLICK_COMMAND, (h) => {
      let E = p.getElementByKey(C);
      return h.target === E ? (h.shiftKey || c(), u(!s), !0) : !1;
    }, n.COMMAND_PRIORITY_LOW), p.registerCommand(n.KEY_DELETE_COMMAND, N, n.COMMAND_PRIORITY_LOW), p.registerCommand(
      n.KEY_BACKSPACE_COMMAND,
      N,
      n.COMMAND_PRIORITY_LOW
    )), [c, p, s, C, N, u]), o.useEffect(() => {
      let h = p.getElementByKey(C);
      h !== null && (h.className = s ? "selected" : "");
    }, [p, s, C]), null;
  }
  class i extends n.DecoratorNode {
    static getType() {
      return "horizontalrule";
    }
    static clone(p) {
      return new i(p.__key);
    }
    static importJSON() {
      return m();
    }
    static importDOM() {
      return { hr: () => ({ conversion: _, priority: 0 }) };
    }
    exportJSON() {
      return { type: "horizontalrule", version: 1 };
    }
    exportDOM() {
      return { element: document.createElement("hr") };
    }
    createDOM() {
      return document.createElement("hr");
    }
    getTextContent() {
      return `
`;
    }
    isInline() {
      return !1;
    }
    updateDOM() {
      return !1;
    }
    decorate() {
      return o.createElement(a, { nodeKey: this.__key });
    }
  }
  function _() {
    return { node: m() };
  }
  function m() {
    return n.$applyNodeReplacement(new i());
  }
  function g(C) {
    return C instanceof i;
  }
  return Sn.$createHorizontalRuleNode = m, Sn.$isHorizontalRuleNode = g, Sn.HorizontalRuleNode = i, Sn.INSERT_HORIZONTAL_RULE_COMMAND = l, Sn;
}
const Cu = process.env.NODE_ENV === "development" ? _u() : Nu();
var dr = Cu, kt = {}, Yt = {}, Nr = {}, Os;
function xu() {
  if (Os) return Nr;
  Os = 1;
  var r = en(), t = Ke(), e = Ie;
  function n(m, g) {
    const C = g.body ? g.body.childNodes : [];
    let p = [];
    for (let s = 0; s < C.length; s++) {
      const u = C[s];
      if (!i.has(u.nodeName)) {
        const c = _(u, m);
        c !== null && (p = p.concat(c));
      }
    }
    return p;
  }
  function o(m, g) {
    if (typeof document > "u" || typeof window > "u" && typeof $r.window > "u")
      throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
    const C = document.createElement("div"), s = e.$getRoot().getChildren();
    for (let u = 0; u < s.length; u++) {
      const c = s[u];
      l(m, c, C, g);
    }
    return C.innerHTML;
  }
  function l(m, g, C, p = null) {
    let s = p !== null ? g.isSelected(p) : !0;
    const u = e.$isElementNode(g) && g.excludeFromCopy("html");
    let c = g;
    if (p !== null) {
      let A = r.$cloneWithProperties(g);
      A = e.$isTextNode(A) && p !== null ? r.$sliceSelectedTextNodeContent(p, A) : A, c = A;
    }
    const N = e.$isElementNode(c) ? c.getChildren() : [], h = m._nodes.get(c.getType());
    let E;
    h && h.exportDOM !== void 0 ? E = h.exportDOM(m, c) : E = c.exportDOM(m);
    const {
      element: d,
      after: f
    } = E;
    if (!d)
      return !1;
    const y = document.createDocumentFragment();
    for (let A = 0; A < N.length; A++) {
      const v = N[A], O = l(m, v, y, p);
      !s && e.$isElementNode(g) && O && g.extractWithChild(v, p, "html") && (s = !0);
    }
    if (s && !u) {
      if (t.isHTMLElement(d) && d.append(y), C.append(d), f) {
        const A = f.call(c, d);
        A && d.replaceWith(A);
      }
    } else
      C.append(y);
    return s;
  }
  function a(m, g) {
    const {
      nodeName: C
    } = m, p = g._htmlConversions.get(C.toLowerCase());
    let s = null;
    if (p !== void 0)
      for (const u of p) {
        const c = u(m);
        c !== null && (s === null || (s.priority || 0) < (c.priority || 0)) && (s = c);
      }
    return s !== null ? s.conversion : null;
  }
  const i = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
  function _(m, g, C = /* @__PURE__ */ new Map(), p) {
    let s = [];
    if (i.has(m.nodeName))
      return s;
    let u = null;
    const c = a(m, g), N = c ? c(m) : null;
    let h = null;
    if (N !== null) {
      h = N.after;
      const f = N.node;
      if (u = Array.isArray(f) ? f[f.length - 1] : f, u !== null) {
        for (const [, y] of C)
          if (u = y(u, p), !u)
            break;
        u && s.push(...Array.isArray(f) ? f : [u]);
      }
      N.forChild != null && C.set(m.nodeName, N.forChild);
    }
    const E = m.childNodes;
    let d = [];
    for (let f = 0; f < E.length; f++)
      d.push(..._(E[f], g, new Map(C), u));
    return h != null && (d = h(d)), u == null ? s = s.concat(d) : e.$isElementNode(u) && u.append(...d), s;
  }
  return Nr.$generateHtmlFromNodes = o, Nr.$generateNodesFromDOM = n, Nr;
}
var Cr = {}, ws;
function Eu() {
  if (ws) return Cr;
  ws = 1;
  var r = en(), t = Ke(), e = Ie;
  function n(a, i, _, m = null) {
    let g = m !== null ? i.isSelected(m) : !0, C = e.$isElementNode(i) && i.excludeFromCopy("html");
    var p = i;
    m !== null && (p = r.$cloneWithProperties(i), p = e.$isTextNode(p) && m !== null ? r.$sliceSelectedTextNodeContent(m, p) : p);
    let s = e.$isElementNode(p) ? p.getChildren() : [];
    var u = a._nodes.get(p.getType());
    u = u && u.exportDOM !== void 0 ? u.exportDOM(a, p) : p.exportDOM(a);
    let { element: c, after: N } = u;
    if (!c) return !1;
    u = document.createDocumentFragment();
    for (let h = 0; h < s.length; h++) {
      let E = s[h], d = n(a, E, u, m);
      !g && e.$isElementNode(i) && d && i.extractWithChild(E, m, "html") && (g = !0);
    }
    return g && !C ? (t.isHTMLElement(c) && c.append(u), _.append(c), N && (a = N.call(p, c)) && c.replaceWith(a)) : _.append(u), g;
  }
  let o = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
  function l(a, i, _ = /* @__PURE__ */ new Map(), m) {
    let g = [];
    if (o.has(a.nodeName)) return g;
    let C = null;
    var p, { nodeName: s } = a, u = i._htmlConversions.get(s.toLowerCase());
    if (s = null, u !== void 0) for (p of u) u = p(a), u !== null && (s === null || (s.priority || 0) < (u.priority || 0)) && (s = u);
    if (s = (p = s !== null ? s.conversion : null) ? p(a) : null, p = null, s !== null) {
      if (p = s.after, u = s.node, C = Array.isArray(u) ? u[u.length - 1] : u, C !== null) {
        for (var [, c] of _) if (C = c(C, m), !C) break;
        C && g.push(...Array.isArray(u) ? u : [C]);
      }
      s.forChild != null && _.set(a.nodeName, s.forChild);
    }
    for (a = a.childNodes, m = [], c = 0; c < a.length; c++) m.push(...l(a[c], i, new Map(_), C));
    return p != null && (m = p(m)), C == null ? g = g.concat(m) : e.$isElementNode(C) && C.append(...m), g;
  }
  return Cr.$generateHtmlFromNodes = function(a, i) {
    if (typeof document > "u" || typeof window > "u" && typeof $r.window > "u") throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
    let _ = document.createElement("div"), m = e.$getRoot().getChildren();
    for (let g = 0; g < m.length; g++) n(a, m[g], _, i);
    return _.innerHTML;
  }, Cr.$generateNodesFromDOM = function(a, i) {
    i = i.body ? i.body.childNodes : [];
    let _ = [];
    for (let g = 0; g < i.length; g++) {
      var m = i[g];
      o.has(m.nodeName) || (m = l(m, a), m !== null && (_ = _.concat(m)));
    }
    return _;
  }, Cr;
}
var Xr, Rs;
function Aa() {
  return Rs || (Rs = 1, Xr = process.env.NODE_ENV === "development" ? xu() : Eu()), Xr;
}
var Ms;
function Tu() {
  if (Ms) return Yt;
  Ms = 1;
  var r = Aa(), t = en(), e = Ke(), n = Ie;
  const o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", l = (d) => o ? (d || window).getSelection() : null;
  function a(d) {
    const f = n.$getSelection();
    if (f == null)
      throw Error("Expected valid LexicalSelection");
    return n.$isRangeSelection(f) && f.isCollapsed() || f.getNodes().length === 0 ? "" : r.$generateHtmlFromNodes(d, f);
  }
  function i(d) {
    const f = n.$getSelection();
    if (f == null)
      throw Error("Expected valid LexicalSelection");
    return n.$isRangeSelection(f) && f.isCollapsed() || f.getNodes().length === 0 ? null : JSON.stringify(s(d, f));
  }
  function _(d, f) {
    const y = d.getData("text/plain") || d.getData("text/uri-list");
    y != null && f.insertRawText(y);
  }
  function m(d, f, y) {
    const A = d.getData("application/x-lexical-editor");
    if (A)
      try {
        const T = JSON.parse(A);
        if (T.namespace === y._config.namespace && Array.isArray(T.nodes)) {
          const S = u(T.nodes);
          return g(y, S, f);
        }
      } catch {
      }
    const v = d.getData("text/html");
    if (v)
      try {
        const S = new DOMParser().parseFromString(v, "text/html"), b = r.$generateNodesFromDOM(y, S);
        return g(y, b, f);
      } catch {
      }
    const O = d.getData("text/plain") || d.getData("text/uri-list");
    if (O != null)
      if (n.$isRangeSelection(f)) {
        const T = O.split(/(\r?\n|\t)/);
        T[T.length - 1] === "" && T.pop();
        for (let S = 0; S < T.length; S++) {
          const b = T[S];
          b === `
` || b === `\r
` ? f.insertParagraph() : b === "	" ? f.insertNodes([n.$createTabNode()]) : f.insertText(b);
        }
      } else
        f.insertRawText(O);
  }
  function g(d, f, y) {
    d.dispatchCommand(n.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
      nodes: f,
      selection: y
    }) || y.insertNodes(f);
  }
  function C(d) {
    const f = d.exportJSON(), y = d.constructor;
    if (f.type !== y.getType())
      throw Error(`LexicalNode: Node ${y.name} does not implement .exportJSON().`);
    if (n.$isElementNode(d)) {
      const A = f.children;
      if (!Array.isArray(A))
        throw Error(`LexicalNode: Node ${y.name} is an element but .exportJSON() does not have a children array.`);
    }
    return f;
  }
  function p(d, f, y, A = []) {
    let v = f !== null ? y.isSelected(f) : !0;
    const O = n.$isElementNode(y) && y.excludeFromCopy("html");
    let T = y;
    if (f !== null) {
      let k = t.$cloneWithProperties(y);
      k = n.$isTextNode(k) && f !== null ? t.$sliceSelectedTextNodeContent(f, k) : k, T = k;
    }
    const S = n.$isElementNode(T) ? T.getChildren() : [], b = C(T);
    if (n.$isTextNode(T)) {
      const k = T.__text;
      k.length > 0 ? b.text = k : v = !1;
    }
    for (let k = 0; k < S.length; k++) {
      const H = S[k], K = p(d, f, H, b.children);
      !v && n.$isElementNode(y) && K && y.extractWithChild(H, f, "clone") && (v = !0);
    }
    if (v && !O)
      A.push(b);
    else if (Array.isArray(b.children))
      for (let k = 0; k < b.children.length; k++) {
        const H = b.children[k];
        A.push(H);
      }
    return v;
  }
  function s(d, f) {
    const y = [], v = n.$getRoot().getChildren();
    for (let O = 0; O < v.length; O++) {
      const T = v[O];
      p(d, f, T, y);
    }
    return {
      namespace: d._config.namespace,
      nodes: y
    };
  }
  function u(d) {
    const f = [];
    for (let y = 0; y < d.length; y++) {
      const A = d[y], v = n.$parseSerializedNode(A);
      n.$isTextNode(v) && t.$addNodeStyle(v), f.push(v);
    }
    return f;
  }
  const c = 50;
  let N = null;
  async function h(d, f) {
    if (N !== null)
      return !1;
    if (f !== null)
      return new Promise((S, b) => {
        d.update(() => {
          S(E(d, f));
        });
      });
    const y = d.getRootElement(), A = d._window == null ? window.document : d._window.document, v = l(d._window);
    if (y === null || v === null)
      return !1;
    const O = A.createElement("span");
    O.style.cssText = "position: fixed; top: -1000px;", O.append(A.createTextNode("#")), y.append(O);
    const T = new Range();
    return T.setStart(O, 0), T.setEnd(O, 1), v.removeAllRanges(), v.addRange(T), new Promise((S, b) => {
      const k = d.registerCommand(n.COPY_COMMAND, (H) => (e.objectKlassEquals(H, ClipboardEvent) && (k(), N !== null && (window.clearTimeout(N), N = null), S(E(d, H))), !0), n.COMMAND_PRIORITY_CRITICAL);
      N = window.setTimeout(() => {
        k(), N = null, S(!1);
      }, c), A.execCommand("copy"), O.remove();
    });
  }
  function E(d, f) {
    const y = l(d._window);
    if (!y)
      return !1;
    const A = y.anchorNode, v = y.focusNode;
    if (A !== null && v !== null && !n.isSelectionWithinEditor(d, A, v))
      return !1;
    f.preventDefault();
    const O = f.clipboardData, T = n.$getSelection();
    if (O === null || T === null)
      return !1;
    const S = a(d), b = i(d);
    let k = "";
    return T !== null && (k = T.getTextContent()), S !== null && O.setData("text/html", S), b !== null && O.setData("application/x-lexical-editor", b), O.setData("text/plain", k), !0;
  }
  return Yt.$generateJSONFromSelectedNodes = s, Yt.$generateNodesFromSerializedNodes = u, Yt.$getHtmlContent = a, Yt.$getLexicalContent = i, Yt.$insertDataTransferForPlainText = _, Yt.$insertDataTransferForRichText = m, Yt.$insertGeneratedNodes = g, Yt.copyToClipboard = h, Yt;
}
var Wt = {}, As;
function yu() {
  if (As) return Wt;
  As = 1;
  var r = Aa(), t = en(), e = Ke(), n = Ie;
  function o(u) {
    let c = new URLSearchParams();
    c.append("code", u);
    for (let N = 1; N < arguments.length; N++) c.append("v", arguments[N]);
    throw Error(`Minified Lexical error #${u}; visit https://lexical.dev/docs/error?${c} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  let l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function a(u) {
    let c = n.$getSelection();
    if (c == null) throw Error("Expected valid LexicalSelection");
    return n.$isRangeSelection(c) && c.isCollapsed() || c.getNodes().length === 0 ? "" : r.$generateHtmlFromNodes(u, c);
  }
  function i(u) {
    let c = n.$getSelection();
    if (c == null) throw Error("Expected valid LexicalSelection");
    return n.$isRangeSelection(c) && c.isCollapsed() || c.getNodes().length === 0 ? null : JSON.stringify(g(u, c));
  }
  function _(u, c, N) {
    u.dispatchCommand(n.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, { nodes: c, selection: N }) || N.insertNodes(c);
  }
  function m(u, c, N, h = []) {
    let E = c !== null ? N.isSelected(c) : !0, d = n.$isElementNode(N) && N.excludeFromCopy("html");
    var f = N;
    if (c !== null) {
      var y = t.$cloneWithProperties(N);
      f = y = n.$isTextNode(y) && c !== null ? t.$sliceSelectedTextNodeContent(c, y) : y;
    }
    let A = n.$isElementNode(f) ? f.getChildren() : [];
    var v = f;
    y = v.exportJSON();
    var O = v.constructor;
    for (y.type !== O.getType() && o(58, O.name), n.$isElementNode(v) && (Array.isArray(y.children) || o(59, O.name)), n.$isTextNode(f) && (f = f.__text, 0 < f.length ? y.text = f : E = !1), f = 0; f < A.length; f++) v = A[f], O = m(u, c, v, y.children), !E && n.$isElementNode(N) && O && N.extractWithChild(v, c, "clone") && (E = !0);
    if (E && !d) h.push(y);
    else if (Array.isArray(y.children)) for (u = 0; u < y.children.length; u++) h.push(y.children[u]);
    return E;
  }
  function g(u, c) {
    let N = [], h = n.$getRoot().getChildren();
    for (let E = 0; E < h.length; E++) m(u, c, h[E], N);
    return { namespace: u._config.namespace, nodes: N };
  }
  function C(u) {
    let c = [];
    for (let N = 0; N < u.length; N++) {
      let h = n.$parseSerializedNode(u[N]);
      n.$isTextNode(h) && t.$addNodeStyle(h), c.push(h);
    }
    return c;
  }
  let p = null;
  function s(u, c) {
    var N = l ? (u._window || window).getSelection() : null;
    if (!N) return !1;
    var h = N.anchorNode;
    if (N = N.focusNode, h !== null && N !== null && !n.isSelectionWithinEditor(u, h, N) || (c.preventDefault(), c = c.clipboardData, h = n.$getSelection(), c === null || h === null)) return !1;
    N = a(u), u = i(u);
    let E = "";
    return h !== null && (E = h.getTextContent()), N !== null && c.setData("text/html", N), u !== null && c.setData("application/x-lexical-editor", u), c.setData("text/plain", E), !0;
  }
  return Wt.$generateJSONFromSelectedNodes = g, Wt.$generateNodesFromSerializedNodes = C, Wt.$getHtmlContent = a, Wt.$getLexicalContent = i, Wt.$insertDataTransferForPlainText = function(u, c) {
    u = u.getData("text/plain") || u.getData("text/uri-list"), u != null && c.insertRawText(u);
  }, Wt.$insertDataTransferForRichText = function(u, c, N) {
    var h = u.getData("application/x-lexical-editor");
    if (h) try {
      let d = JSON.parse(h);
      if (d.namespace === N._config.namespace && Array.isArray(d.nodes)) {
        let f = C(d.nodes);
        return _(N, f, c);
      }
    } catch {
    }
    if (h = u.getData("text/html")) try {
      var E = new DOMParser().parseFromString(h, "text/html");
      let d = r.$generateNodesFromDOM(N, E);
      return _(N, d, c);
    } catch {
    }
    if (u = u.getData("text/plain") || u.getData("text/uri-list"), u != null) if (n.$isRangeSelection(c)) for (u = u.split(/(\r?\n|\t)/), u[u.length - 1] === "" && u.pop(), N = 0; N < u.length; N++) E = u[N], E === `
` || E === `\r
` ? c.insertParagraph() : E === "	" ? c.insertNodes([n.$createTabNode()]) : c.insertText(E);
    else c.insertRawText(u);
  }, Wt.$insertGeneratedNodes = _, Wt.copyToClipboard = async function(u, c) {
    if (p !== null) return !1;
    if (c !== null) return new Promise((f) => {
      u.update(() => {
        f(s(u, c));
      });
    });
    var N = u.getRootElement();
    let h = u._window == null ? window.document : u._window.document, E = l ? (u._window || window).getSelection() : null;
    if (N === null || E === null) return !1;
    let d = h.createElement("span");
    return d.style.cssText = "position: fixed; top: -1000px;", d.append(h.createTextNode("#")), N.append(d), N = new Range(), N.setStart(d, 0), N.setEnd(d, 1), E.removeAllRanges(), E.addRange(N), new Promise((f) => {
      let y = u.registerCommand(n.COPY_COMMAND, (A) => (e.objectKlassEquals(A, ClipboardEvent) && (y(), p !== null && (window.clearTimeout(p), p = null), f(s(u, A))), !0), n.COMMAND_PRIORITY_CRITICAL);
      p = window.setTimeout(() => {
        y(), p = null, f(!1);
      }, 50), h.execCommand("copy"), d.remove();
    });
  }, Wt;
}
var Zr, Ls;
function La() {
  return Ls || (Ls = 1, Zr = process.env.NODE_ENV === "development" ? Tu() : yu()), Zr;
}
var Ds;
function vu() {
  if (Ds) return kt;
  Ds = 1;
  var r = La(), t = en(), e = Ke(), n = Ie;
  function o(H, K) {
    if (typeof document.caretRangeFromPoint < "u") {
      const B = document.caretRangeFromPoint(H, K);
      return B === null ? null : {
        node: B.startContainer,
        offset: B.startOffset
      };
    } else if (document.caretPositionFromPoint !== "undefined") {
      const B = document.caretPositionFromPoint(H, K);
      return B === null ? null : {
        node: B.offsetNode,
        offset: B.offset
      };
    } else
      return null;
  }
  const l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a = l && "documentMode" in document ? document.documentMode : null, i = l && "InputEvent" in window && !a ? "getTargetRanges" in new window.InputEvent("input") : !1, _ = l && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), m = l && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, g = l && /^(?=.*Chrome).*/i.test(navigator.userAgent), C = l && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !g, p = n.createCommand("DRAG_DROP_PASTE_FILE");
  class s extends n.ElementNode {
    static getType() {
      return "quote";
    }
    static clone(K) {
      return new s(K.__key);
    }
    constructor(K) {
      super(K);
    }
    // View
    createDOM(K) {
      const B = document.createElement("blockquote");
      return e.addClassNamesToElement(B, K.theme.quote), B;
    }
    updateDOM(K, B) {
      return !1;
    }
    static importDOM() {
      return {
        blockquote: (K) => ({
          conversion: d,
          priority: 0
        })
      };
    }
    exportDOM(K) {
      const {
        element: B
      } = super.exportDOM(K);
      if (B && e.isHTMLElement(B)) {
        this.isEmpty() && B.append(document.createElement("br"));
        const w = this.getFormatType();
        B.style.textAlign = w;
        const x = this.getDirection();
        x && (B.dir = x);
      }
      return {
        element: B
      };
    }
    static importJSON(K) {
      const B = u();
      return B.setFormat(K.format), B.setIndent(K.indent), B.setDirection(K.direction), B;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "quote"
      };
    }
    // Mutation
    insertNewAfter(K, B) {
      const w = n.$createParagraphNode(), x = this.getDirection();
      return w.setDirection(x), this.insertAfter(w, B), w;
    }
    collapseAtStart() {
      const K = n.$createParagraphNode();
      return this.getChildren().forEach((w) => K.append(w)), this.replace(K), !0;
    }
  }
  function u() {
    return n.$applyNodeReplacement(new s());
  }
  function c(H) {
    return H instanceof s;
  }
  class N extends n.ElementNode {
    /** @internal */
    static getType() {
      return "heading";
    }
    static clone(K) {
      return new N(K.__tag, K.__key);
    }
    constructor(K, B) {
      super(B), this.__tag = K;
    }
    getTag() {
      return this.__tag;
    }
    // View
    createDOM(K) {
      const B = this.__tag, w = document.createElement(B), D = K.theme.heading;
      if (D !== void 0) {
        const Y = D[B];
        e.addClassNamesToElement(w, Y);
      }
      return w;
    }
    updateDOM(K, B) {
      return !1;
    }
    static importDOM() {
      return {
        h1: (K) => ({
          conversion: E,
          priority: 0
        }),
        h2: (K) => ({
          conversion: E,
          priority: 0
        }),
        h3: (K) => ({
          conversion: E,
          priority: 0
        }),
        h4: (K) => ({
          conversion: E,
          priority: 0
        }),
        h5: (K) => ({
          conversion: E,
          priority: 0
        }),
        h6: (K) => ({
          conversion: E,
          priority: 0
        }),
        p: (K) => {
          const w = K.firstChild;
          return w !== null && h(w) ? {
            conversion: () => ({
              node: null
            }),
            priority: 3
          } : null;
        },
        span: (K) => h(K) ? {
          conversion: (B) => ({
            node: f("h1")
          }),
          priority: 3
        } : null
      };
    }
    exportDOM(K) {
      const {
        element: B
      } = super.exportDOM(K);
      if (B && e.isHTMLElement(B)) {
        this.isEmpty() && B.append(document.createElement("br"));
        const w = this.getFormatType();
        B.style.textAlign = w;
        const x = this.getDirection();
        x && (B.dir = x);
      }
      return {
        element: B
      };
    }
    static importJSON(K) {
      const B = f(K.tag);
      return B.setFormat(K.format), B.setIndent(K.indent), B.setDirection(K.direction), B;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        tag: this.getTag(),
        type: "heading",
        version: 1
      };
    }
    // Mutation
    insertNewAfter(K, B = !0) {
      const w = K ? K.anchor.offset : 0, x = w === this.getTextContentSize() || !K ? n.$createParagraphNode() : f(this.getTag()), D = this.getDirection();
      if (x.setDirection(D), this.insertAfter(x, B), w === 0 && !this.isEmpty() && K) {
        const Y = n.$createParagraphNode();
        Y.select(), this.replace(Y, !0);
      }
      return x;
    }
    collapseAtStart() {
      const K = this.isEmpty() ? n.$createParagraphNode() : f(this.getTag());
      return this.getChildren().forEach((w) => K.append(w)), this.replace(K), !0;
    }
    extractWithChild() {
      return !0;
    }
  }
  function h(H) {
    return H.nodeName.toLowerCase() === "span" ? H.style.fontSize === "26pt" : !1;
  }
  function E(H) {
    const K = H.nodeName.toLowerCase();
    let B = null;
    return (K === "h1" || K === "h2" || K === "h3" || K === "h4" || K === "h5" || K === "h6") && (B = f(K), H.style !== null && B.setFormat(H.style.textAlign)), {
      node: B
    };
  }
  function d(H) {
    const K = u();
    return H.style !== null && K.setFormat(H.style.textAlign), {
      node: K
    };
  }
  function f(H) {
    return n.$applyNodeReplacement(new N(H));
  }
  function y(H) {
    return H instanceof N;
  }
  function A(H, K) {
    H.preventDefault(), K.update(() => {
      const B = n.$getSelection(), w = H instanceof InputEvent || H instanceof KeyboardEvent ? null : H.clipboardData;
      w != null && B !== null && r.$insertDataTransferForRichText(w, B, K);
    }, {
      tag: "paste"
    });
  }
  async function v(H, K) {
    await r.copyToClipboard(K, e.objectKlassEquals(H, ClipboardEvent) ? H : null), K.update(() => {
      const B = n.$getSelection();
      n.$isRangeSelection(B) ? B.removeText() : n.$isNodeSelection(B) && B.getNodes().forEach((w) => w.remove());
    });
  }
  function O(H) {
    let K = null;
    if (H instanceof DragEvent ? K = H.dataTransfer : H instanceof ClipboardEvent && (K = H.clipboardData), K === null)
      return [!1, [], !1];
    const B = K.types, w = B.includes("Files"), x = B.includes("text/html") || B.includes("text/plain");
    return [w, Array.from(K.files), x];
  }
  function T(H) {
    const K = n.$getSelection();
    if (!n.$isRangeSelection(K))
      return !1;
    const B = /* @__PURE__ */ new Set(), w = K.getNodes();
    for (let x = 0; x < w.length; x++) {
      const D = w[x], Y = D.getKey();
      if (B.has(Y))
        continue;
      const j = e.$getNearestBlockElementAncestorOrThrow(D), $ = j.getKey();
      j.canIndent() && !B.has($) && (B.add($), H(j));
    }
    return B.size > 0;
  }
  function S(H) {
    const K = n.$getNearestNodeFromDOMNode(H);
    return n.$isDecoratorNode(K);
  }
  function b(H) {
    const K = H.focus;
    return K.key === "root" && K.offset === n.$getRoot().getChildrenSize();
  }
  function k(H) {
    return e.mergeRegister(H.registerCommand(n.CLICK_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isNodeSelection(w) ? (w.clear(), !0) : !1;
    }, 0), H.registerCommand(n.DELETE_CHARACTER_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (w.deleteCharacter(B), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.DELETE_WORD_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (w.deleteWord(B), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.DELETE_LINE_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (w.deleteLine(B), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.CONTROLLED_TEXT_INSERTION_COMMAND, (B) => {
      const w = n.$getSelection();
      if (typeof B == "string")
        w !== null && w.insertText(B);
      else {
        if (w === null)
          return !1;
        const x = B.dataTransfer;
        if (x != null)
          r.$insertDataTransferForRichText(x, w, H);
        else if (n.$isRangeSelection(w)) {
          const D = B.data;
          return D && w.insertText(D), !0;
        }
      }
      return !0;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.REMOVE_TEXT_COMMAND, () => {
      const B = n.$getSelection();
      return n.$isRangeSelection(B) ? (B.removeText(), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.FORMAT_TEXT_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (w.formatText(B), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.FORMAT_ELEMENT_COMMAND, (B) => {
      const w = n.$getSelection();
      if (!n.$isRangeSelection(w) && !n.$isNodeSelection(w))
        return !1;
      const x = w.getNodes();
      for (const D of x) {
        const Y = e.$findMatchingParent(D, (j) => n.$isElementNode(j) && !j.isInline());
        Y !== null && Y.setFormat(B);
      }
      return !0;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.INSERT_LINE_BREAK_COMMAND, (B) => {
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (w.insertLineBreak(B), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.INSERT_PARAGRAPH_COMMAND, () => {
      const B = n.$getSelection();
      return n.$isRangeSelection(B) ? (B.insertParagraph(), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.INSERT_TAB_COMMAND, () => (n.$insertNodes([n.$createTabNode()]), !0), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.INDENT_CONTENT_COMMAND, () => T((B) => {
      const w = B.getIndent();
      B.setIndent(w + 1);
    }), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.OUTDENT_CONTENT_COMMAND, () => T((B) => {
      const w = B.getIndent();
      w > 0 && B.setIndent(w - 1);
    }), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ARROW_UP_COMMAND, (B) => {
      const w = n.$getSelection();
      if (n.$isNodeSelection(w) && !S(B.target)) {
        const x = w.getNodes();
        if (x.length > 0)
          return x[0].selectPrevious(), !0;
      } else if (n.$isRangeSelection(w)) {
        const x = n.$getAdjacentNode(w.focus, !0);
        if (!B.shiftKey && n.$isDecoratorNode(x) && !x.isIsolated() && !x.isInline())
          return x.selectPrevious(), B.preventDefault(), !0;
      }
      return !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ARROW_DOWN_COMMAND, (B) => {
      const w = n.$getSelection();
      if (n.$isNodeSelection(w)) {
        const x = w.getNodes();
        if (x.length > 0)
          return x[0].selectNext(0, 0), !0;
      } else if (n.$isRangeSelection(w)) {
        if (b(w))
          return B.preventDefault(), !0;
        const x = n.$getAdjacentNode(w.focus, !1);
        if (!B.shiftKey && n.$isDecoratorNode(x) && !x.isIsolated() && !x.isInline())
          return x.selectNext(), B.preventDefault(), !0;
      }
      return !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ARROW_LEFT_COMMAND, (B) => {
      const w = n.$getSelection();
      if (n.$isNodeSelection(w)) {
        const x = w.getNodes();
        if (x.length > 0)
          return B.preventDefault(), x[0].selectPrevious(), !0;
      }
      if (!n.$isRangeSelection(w))
        return !1;
      if (t.$shouldOverrideDefaultCharacterSelection(w, !0)) {
        const x = B.shiftKey;
        return B.preventDefault(), t.$moveCharacter(w, x, !0), !0;
      }
      return !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ARROW_RIGHT_COMMAND, (B) => {
      const w = n.$getSelection();
      if (n.$isNodeSelection(w) && !S(B.target)) {
        const D = w.getNodes();
        if (D.length > 0)
          return B.preventDefault(), D[0].selectNext(0, 0), !0;
      }
      if (!n.$isRangeSelection(w))
        return !1;
      const x = B.shiftKey;
      return t.$shouldOverrideDefaultCharacterSelection(w, !1) ? (B.preventDefault(), t.$moveCharacter(w, x, !1), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_BACKSPACE_COMMAND, (B) => {
      if (S(B.target))
        return !1;
      const w = n.$getSelection();
      if (!n.$isRangeSelection(w))
        return !1;
      B.preventDefault();
      const {
        anchor: x
      } = w, D = x.getNode();
      return w.isCollapsed() && x.offset === 0 && !n.$isRootNode(D) && e.$getNearestBlockElementAncestorOrThrow(D).getIndent() > 0 ? H.dispatchCommand(n.OUTDENT_CONTENT_COMMAND, void 0) : H.dispatchCommand(n.DELETE_CHARACTER_COMMAND, !0);
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_DELETE_COMMAND, (B) => {
      if (S(B.target))
        return !1;
      const w = n.$getSelection();
      return n.$isRangeSelection(w) ? (B.preventDefault(), H.dispatchCommand(n.DELETE_CHARACTER_COMMAND, !1)) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ENTER_COMMAND, (B) => {
      const w = n.$getSelection();
      if (!n.$isRangeSelection(w))
        return !1;
      if (B !== null) {
        if ((m || _ || C) && i)
          return !1;
        if (B.preventDefault(), B.shiftKey)
          return H.dispatchCommand(n.INSERT_LINE_BREAK_COMMAND, !1);
      }
      return H.dispatchCommand(n.INSERT_PARAGRAPH_COMMAND, void 0);
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.KEY_ESCAPE_COMMAND, () => {
      const B = n.$getSelection();
      return n.$isRangeSelection(B) ? (H.blur(), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.DROP_COMMAND, (B) => {
      const [, w] = O(B);
      if (w.length > 0) {
        const D = B.clientX, Y = B.clientY, j = o(D, Y);
        if (j !== null) {
          const {
            offset: $,
            node: W
          } = j, L = n.$getNearestNodeFromDOMNode(W);
          if (L !== null) {
            const F = n.$createRangeSelection();
            if (n.$isTextNode(L))
              F.anchor.set(L.getKey(), $, "text"), F.focus.set(L.getKey(), $, "text");
            else {
              const V = L.getParentOrThrow().getKey(), Q = L.getIndexWithinParent() + 1;
              F.anchor.set(V, Q, "element"), F.focus.set(V, Q, "element");
            }
            const z = n.$normalizeSelection__EXPERIMENTAL(F);
            n.$setSelection(z);
          }
          H.dispatchCommand(p, w);
        }
        return B.preventDefault(), !0;
      }
      const x = n.$getSelection();
      return !!n.$isRangeSelection(x);
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.DRAGSTART_COMMAND, (B) => {
      const [w] = O(B), x = n.$getSelection();
      return !(w && !n.$isRangeSelection(x));
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.DRAGOVER_COMMAND, (B) => {
      const [w] = O(B), x = n.$getSelection();
      if (w && !n.$isRangeSelection(x))
        return !1;
      const D = B.clientX, Y = B.clientY, j = o(D, Y);
      if (j !== null) {
        const $ = n.$getNearestNodeFromDOMNode(j.node);
        n.$isDecoratorNode($) && B.preventDefault();
      }
      return !0;
    }, n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.SELECT_ALL_COMMAND, () => (n.$selectAll(), !0), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.COPY_COMMAND, (B) => (r.copyToClipboard(H, e.objectKlassEquals(B, ClipboardEvent) ? B : null), !0), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.CUT_COMMAND, (B) => (v(B, H), !0), n.COMMAND_PRIORITY_EDITOR), H.registerCommand(n.PASTE_COMMAND, (B) => {
      const [, w, x] = O(B);
      return w.length > 0 && !x ? (H.dispatchCommand(p, w), !0) : n.isSelectionCapturedInDecoratorInput(B.target) ? !1 : n.$getSelection() !== null ? (A(B, H), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR));
  }
  return kt.$createHeadingNode = f, kt.$createQuoteNode = u, kt.$isHeadingNode = y, kt.$isQuoteNode = c, kt.DRAG_DROP_PASTE = p, kt.HeadingNode = N, kt.QuoteNode = s, kt.eventFiles = O, kt.registerRichText = k, kt;
}
var Ft = {}, $s;
function Su() {
  if ($s) return Ft;
  $s = 1;
  var r = La(), t = en(), e = Ke(), n = Ie;
  function o(T, S) {
    return typeof document.caretRangeFromPoint < "u" ? (T = document.caretRangeFromPoint(T, S), T === null ? null : { node: T.startContainer, offset: T.startOffset }) : document.caretPositionFromPoint !== "undefined" ? (T = document.caretPositionFromPoint(T, S), T === null ? null : { node: T.offsetNode, offset: T.offset }) : null;
  }
  let l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a = l && "documentMode" in document ? document.documentMode : null, i = l && "InputEvent" in window && !a ? "getTargetRanges" in new window.InputEvent("input") : !1, _ = l && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), m = l && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, g = l && /^(?=.*Chrome).*/i.test(navigator.userAgent), C = l && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !g, p = n.createCommand("DRAG_DROP_PASTE_FILE");
  class s extends n.ElementNode {
    static getType() {
      return "quote";
    }
    static clone(S) {
      return new s(S.__key);
    }
    constructor(S) {
      super(S);
    }
    createDOM(S) {
      let b = document.createElement("blockquote");
      return e.addClassNamesToElement(b, S.theme.quote), b;
    }
    updateDOM() {
      return !1;
    }
    static importDOM() {
      return { blockquote: () => ({ conversion: E, priority: 0 }) };
    }
    exportDOM(S) {
      if ({ element: S } = super.exportDOM(S), S && e.isHTMLElement(S)) {
        this.isEmpty() && S.append(document.createElement("br"));
        var b = this.getFormatType();
        S.style.textAlign = b, (b = this.getDirection()) && (S.dir = b);
      }
      return { element: S };
    }
    static importJSON(S) {
      let b = u();
      return b.setFormat(S.format), b.setIndent(S.indent), b.setDirection(S.direction), b;
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "quote" };
    }
    insertNewAfter(S, b) {
      S = n.$createParagraphNode();
      let k = this.getDirection();
      return S.setDirection(k), this.insertAfter(S, b), S;
    }
    collapseAtStart() {
      let S = n.$createParagraphNode();
      return this.getChildren().forEach((b) => S.append(b)), this.replace(S), !0;
    }
  }
  function u() {
    return n.$applyNodeReplacement(new s());
  }
  class c extends n.ElementNode {
    static getType() {
      return "heading";
    }
    static clone(S) {
      return new c(S.__tag, S.__key);
    }
    constructor(S, b) {
      super(b), this.__tag = S;
    }
    getTag() {
      return this.__tag;
    }
    createDOM(S) {
      let b = this.__tag, k = document.createElement(b);
      return S = S.theme.heading, S !== void 0 && e.addClassNamesToElement(k, S[b]), k;
    }
    updateDOM() {
      return !1;
    }
    static importDOM() {
      return { h1: () => ({ conversion: h, priority: 0 }), h2: () => ({ conversion: h, priority: 0 }), h3: () => ({ conversion: h, priority: 0 }), h4: () => ({ conversion: h, priority: 0 }), h5: () => ({
        conversion: h,
        priority: 0
      }), h6: () => ({ conversion: h, priority: 0 }), p: (S) => (S = S.firstChild, S !== null && N(S) ? { conversion: () => ({ node: null }), priority: 3 } : null), span: (S) => N(S) ? { conversion: () => ({ node: d("h1") }), priority: 3 } : null };
    }
    exportDOM(S) {
      if ({ element: S } = super.exportDOM(S), S && e.isHTMLElement(S)) {
        this.isEmpty() && S.append(document.createElement("br"));
        var b = this.getFormatType();
        S.style.textAlign = b, (b = this.getDirection()) && (S.dir = b);
      }
      return { element: S };
    }
    static importJSON(S) {
      let b = d(S.tag);
      return b.setFormat(S.format), b.setIndent(S.indent), b.setDirection(S.direction), b;
    }
    exportJSON() {
      return { ...super.exportJSON(), tag: this.getTag(), type: "heading", version: 1 };
    }
    insertNewAfter(S, b = !0) {
      let k = S ? S.anchor.offset : 0, H = k !== this.getTextContentSize() && S ? d(this.getTag()) : n.$createParagraphNode(), K = this.getDirection();
      return H.setDirection(K), this.insertAfter(H, b), k === 0 && !this.isEmpty() && S && (S = n.$createParagraphNode(), S.select(), this.replace(S, !0)), H;
    }
    collapseAtStart() {
      let S = this.isEmpty() ? n.$createParagraphNode() : d(this.getTag());
      return this.getChildren().forEach((b) => S.append(b)), this.replace(S), !0;
    }
    extractWithChild() {
      return !0;
    }
  }
  function N(T) {
    return T.nodeName.toLowerCase() === "span" ? T.style.fontSize === "26pt" : !1;
  }
  function h(T) {
    let S = T.nodeName.toLowerCase(), b = null;
    return (S === "h1" || S === "h2" || S === "h3" || S === "h4" || S === "h5" || S === "h6") && (b = d(S), T.style !== null && b.setFormat(T.style.textAlign)), { node: b };
  }
  function E(T) {
    let S = u();
    return T.style !== null && S.setFormat(T.style.textAlign), { node: S };
  }
  function d(T) {
    return n.$applyNodeReplacement(new c(T));
  }
  function f(T, S) {
    T.preventDefault(), S.update(() => {
      let b = n.$getSelection(), k = T instanceof InputEvent || T instanceof KeyboardEvent ? null : T.clipboardData;
      k != null && b !== null && r.$insertDataTransferForRichText(k, b, S);
    }, { tag: "paste" });
  }
  async function y(T, S) {
    await r.copyToClipboard(S, e.objectKlassEquals(T, ClipboardEvent) ? T : null), S.update(() => {
      let b = n.$getSelection();
      n.$isRangeSelection(b) ? b.removeText() : n.$isNodeSelection(b) && b.getNodes().forEach((k) => k.remove());
    });
  }
  function A(T) {
    let S = null;
    if (T instanceof DragEvent ? S = T.dataTransfer : T instanceof ClipboardEvent && (S = T.clipboardData), S === null) return [!1, [], !1];
    var b = S.types;
    return T = b.includes("Files"), b = b.includes("text/html") || b.includes("text/plain"), [T, Array.from(S.files), b];
  }
  function v(T) {
    var S = n.$getSelection();
    if (!n.$isRangeSelection(S)) return !1;
    let b = /* @__PURE__ */ new Set();
    S = S.getNodes();
    for (let K = 0; K < S.length; K++) {
      var k = S[K], H = k.getKey();
      b.has(H) || (k = e.$getNearestBlockElementAncestorOrThrow(k), H = k.getKey(), k.canIndent() && !b.has(H) && (b.add(H), T(k)));
    }
    return 0 < b.size;
  }
  function O(T) {
    return T = n.$getNearestNodeFromDOMNode(T), n.$isDecoratorNode(T);
  }
  return Ft.$createHeadingNode = d, Ft.$createQuoteNode = u, Ft.$isHeadingNode = function(T) {
    return T instanceof c;
  }, Ft.$isQuoteNode = function(T) {
    return T instanceof s;
  }, Ft.DRAG_DROP_PASTE = p, Ft.HeadingNode = c, Ft.QuoteNode = s, Ft.eventFiles = A, Ft.registerRichText = function(T) {
    return e.mergeRegister(
      T.registerCommand(n.CLICK_COMMAND, () => {
        const S = n.$getSelection();
        return n.$isNodeSelection(S) ? (S.clear(), !0) : !1;
      }, 0),
      T.registerCommand(n.DELETE_CHARACTER_COMMAND, (S) => {
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (b.deleteCharacter(S), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.DELETE_WORD_COMMAND, (S) => {
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (b.deleteWord(S), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.DELETE_LINE_COMMAND, (S) => {
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (b.deleteLine(S), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.CONTROLLED_TEXT_INSERTION_COMMAND, (S) => {
        const b = n.$getSelection();
        if (typeof S == "string") b !== null && b.insertText(S);
        else {
          if (b === null) return !1;
          const k = S.dataTransfer;
          k != null ? r.$insertDataTransferForRichText(k, b, T) : n.$isRangeSelection(b) && (S = S.data) && b.insertText(S);
        }
        return !0;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(
        n.REMOVE_TEXT_COMMAND,
        () => {
          const S = n.$getSelection();
          return n.$isRangeSelection(S) ? (S.removeText(), !0) : !1;
        },
        n.COMMAND_PRIORITY_EDITOR
      ),
      T.registerCommand(n.FORMAT_TEXT_COMMAND, (S) => {
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (b.formatText(S), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.FORMAT_ELEMENT_COMMAND, (S) => {
        var b = n.$getSelection();
        if (!n.$isRangeSelection(b) && !n.$isNodeSelection(b)) return !1;
        b = b.getNodes();
        for (const k of b) b = e.$findMatchingParent(k, (H) => n.$isElementNode(H) && !H.isInline()), b !== null && b.setFormat(S);
        return !0;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.INSERT_LINE_BREAK_COMMAND, (S) => {
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (b.insertLineBreak(S), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.INSERT_PARAGRAPH_COMMAND, () => {
        const S = n.$getSelection();
        return n.$isRangeSelection(S) ? (S.insertParagraph(), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.INSERT_TAB_COMMAND, () => (n.$insertNodes([n.$createTabNode()]), !0), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.INDENT_CONTENT_COMMAND, () => v((S) => {
        const b = S.getIndent();
        S.setIndent(b + 1);
      }), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.OUTDENT_CONTENT_COMMAND, () => v((S) => {
        const b = S.getIndent();
        0 < b && S.setIndent(b - 1);
      }), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ARROW_UP_COMMAND, (S) => {
        var b = n.$getSelection();
        if (n.$isNodeSelection(b) && !O(S.target)) {
          if (S = b.getNodes(), 0 < S.length) return S[0].selectPrevious(), !0;
        } else if (n.$isRangeSelection(b) && (b = n.$getAdjacentNode(b.focus, !0), !S.shiftKey && n.$isDecoratorNode(b) && !b.isIsolated() && !b.isInline())) return b.selectPrevious(), S.preventDefault(), !0;
        return !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ARROW_DOWN_COMMAND, (S) => {
        var b = n.$getSelection();
        if (n.$isNodeSelection(b)) {
          if (S = b.getNodes(), 0 < S.length) return S[0].selectNext(0, 0), !0;
        } else if (n.$isRangeSelection(b)) {
          let k = b.focus;
          if (k.key === "root" && k.offset === n.$getRoot().getChildrenSize()) return S.preventDefault(), !0;
          if (b = n.$getAdjacentNode(b.focus, !1), !S.shiftKey && n.$isDecoratorNode(b) && !b.isIsolated() && !b.isInline()) return b.selectNext(), S.preventDefault(), !0;
        }
        return !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ARROW_LEFT_COMMAND, (S) => {
        const b = n.$getSelection();
        if (n.$isNodeSelection(b)) {
          var k = b.getNodes();
          if (0 < k.length) return S.preventDefault(), k[0].selectPrevious(), !0;
        }
        return n.$isRangeSelection(b) && t.$shouldOverrideDefaultCharacterSelection(b, !0) ? (k = S.shiftKey, S.preventDefault(), t.$moveCharacter(b, k, !0), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ARROW_RIGHT_COMMAND, (S) => {
        const b = n.$getSelection();
        if (n.$isNodeSelection(b) && !O(S.target)) {
          var k = b.getNodes();
          if (0 < k.length) return S.preventDefault(), k[0].selectNext(0, 0), !0;
        }
        return n.$isRangeSelection(b) ? (k = S.shiftKey, t.$shouldOverrideDefaultCharacterSelection(b, !1) ? (S.preventDefault(), t.$moveCharacter(b, k, !1), !0) : !1) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_BACKSPACE_COMMAND, (S) => {
        if (O(S.target)) return !1;
        const b = n.$getSelection();
        if (!n.$isRangeSelection(b)) return !1;
        S.preventDefault(), { anchor: S } = b;
        const k = S.getNode();
        return b.isCollapsed() && S.offset === 0 && !n.$isRootNode(k) && 0 < e.$getNearestBlockElementAncestorOrThrow(k).getIndent() ? T.dispatchCommand(n.OUTDENT_CONTENT_COMMAND, void 0) : T.dispatchCommand(n.DELETE_CHARACTER_COMMAND, !0);
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_DELETE_COMMAND, (S) => {
        if (O(S.target)) return !1;
        const b = n.$getSelection();
        return n.$isRangeSelection(b) ? (S.preventDefault(), T.dispatchCommand(n.DELETE_CHARACTER_COMMAND, !1)) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ENTER_COMMAND, (S) => {
        const b = n.$getSelection();
        if (!n.$isRangeSelection(b)) return !1;
        if (S !== null) {
          if ((m || _ || C) && i) return !1;
          if (S.preventDefault(), S.shiftKey) return T.dispatchCommand(n.INSERT_LINE_BREAK_COMMAND, !1);
        }
        return T.dispatchCommand(n.INSERT_PARAGRAPH_COMMAND, void 0);
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.KEY_ESCAPE_COMMAND, () => {
        const S = n.$getSelection();
        return n.$isRangeSelection(S) ? (T.blur(), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.DROP_COMMAND, (S) => {
        const [, b] = A(S);
        if (0 < b.length) {
          var k = o(S.clientX, S.clientY);
          if (k !== null) {
            const { offset: K, node: B } = k;
            var H = n.$getNearestNodeFromDOMNode(B);
            if (H !== null) {
              if (k = n.$createRangeSelection(), n.$isTextNode(H)) k.anchor.set(H.getKey(), K, "text"), k.focus.set(H.getKey(), K, "text");
              else {
                const w = H.getParentOrThrow().getKey();
                H = H.getIndexWithinParent() + 1, k.anchor.set(w, H, "element"), k.focus.set(w, H, "element");
              }
              k = n.$normalizeSelection__EXPERIMENTAL(k), n.$setSelection(k);
            }
            T.dispatchCommand(p, b);
          }
          return S.preventDefault(), !0;
        }
        return S = n.$getSelection(), !!n.$isRangeSelection(S);
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.DRAGSTART_COMMAND, (S) => {
        [S] = A(S);
        const b = n.$getSelection();
        return !(S && !n.$isRangeSelection(b));
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.DRAGOVER_COMMAND, (S) => {
        var [b] = A(S);
        const k = n.$getSelection();
        return b && !n.$isRangeSelection(k) ? !1 : (b = o(S.clientX, S.clientY), b !== null && (b = n.$getNearestNodeFromDOMNode(b.node), n.$isDecoratorNode(b) && S.preventDefault()), !0);
      }, n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.SELECT_ALL_COMMAND, () => (n.$selectAll(), !0), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.COPY_COMMAND, (S) => (r.copyToClipboard(T, e.objectKlassEquals(S, ClipboardEvent) ? S : null), !0), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.CUT_COMMAND, (S) => (y(S, T), !0), n.COMMAND_PRIORITY_EDITOR),
      T.registerCommand(n.PASTE_COMMAND, (S) => {
        const [, b, k] = A(S);
        return 0 < b.length && !k ? (T.dispatchCommand(p, b), !0) : n.isSelectionCapturedInDecoratorInput(S.target) ? !1 : n.$getSelection() !== null ? (f(S, T), !0) : !1;
      }, n.COMMAND_PRIORITY_EDITOR)
    );
  }, Ft;
}
const bu = process.env.NODE_ENV === "development" ? vu() : Su();
var $t = bu, Ge = {}, Is;
function Ou() {
  if (Is) return Ge;
  Is = 1;
  var r = Ke(), t = Ie;
  const e = /^(\d+(?:\.\d+)?)px$/, n = {
    BOTH: 3,
    COLUMN: 2,
    NO_STATUS: 0,
    ROW: 1
  };
  class o extends t.ElementNode {
    /** @internal */
    /** @internal */
    /** @internal */
    /** @internal */
    /** @internal */
    static getType() {
      return "tablecell";
    }
    static clone(G) {
      const X = new o(G.__headerState, G.__colSpan, G.__width, G.__key);
      return X.__rowSpan = G.__rowSpan, X.__backgroundColor = G.__backgroundColor, X;
    }
    static importDOM() {
      return {
        td: (G) => ({
          conversion: l,
          priority: 0
        }),
        th: (G) => ({
          conversion: l,
          priority: 0
        })
      };
    }
    static importJSON(G) {
      const X = G.colSpan || 1, ne = G.rowSpan || 1, ae = a(G.headerState, X, G.width || void 0);
      return ae.__rowSpan = ne, ae.__backgroundColor = G.backgroundColor || null, ae;
    }
    constructor(G = n.NO_STATUS, X = 1, ne, ae) {
      super(ae), this.__colSpan = X, this.__rowSpan = 1, this.__headerState = G, this.__width = ne, this.__backgroundColor = null;
    }
    createDOM(G) {
      const X = document.createElement(this.getTag());
      return this.__width && (X.style.width = `${this.__width}px`), this.__colSpan > 1 && (X.colSpan = this.__colSpan), this.__rowSpan > 1 && (X.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (X.style.backgroundColor = this.__backgroundColor), r.addClassNamesToElement(X, G.theme.tableCell, this.hasHeader() && G.theme.tableCellHeader), X;
    }
    exportDOM(G) {
      const {
        element: X
      } = super.exportDOM(G);
      if (X) {
        const ne = X, ae = 700, ie = this.getParentOrThrow().getChildrenSize();
        ne.style.border = "1px solid black", this.__colSpan > 1 && (ne.colSpan = this.__colSpan), this.__rowSpan > 1 && (ne.rowSpan = this.__rowSpan), ne.style.width = `${this.getWidth() || Math.max(90, ae / ie)}px`, ne.style.verticalAlign = "top", ne.style.textAlign = "start";
        const _e = this.getBackgroundColor();
        _e !== null ? ne.style.backgroundColor = _e : this.hasHeader() && (ne.style.backgroundColor = "#f2f3f5");
      }
      return {
        element: X
      };
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        backgroundColor: this.getBackgroundColor(),
        colSpan: this.__colSpan,
        headerState: this.__headerState,
        rowSpan: this.__rowSpan,
        type: "tablecell",
        width: this.getWidth()
      };
    }
    getColSpan() {
      return this.__colSpan;
    }
    setColSpan(G) {
      return this.getWritable().__colSpan = G, this;
    }
    getRowSpan() {
      return this.__rowSpan;
    }
    setRowSpan(G) {
      return this.getWritable().__rowSpan = G, this;
    }
    getTag() {
      return this.hasHeader() ? "th" : "td";
    }
    setHeaderStyles(G) {
      const X = this.getWritable();
      return X.__headerState = G, this.__headerState;
    }
    getHeaderStyles() {
      return this.getLatest().__headerState;
    }
    setWidth(G) {
      const X = this.getWritable();
      return X.__width = G, this.__width;
    }
    getWidth() {
      return this.getLatest().__width;
    }
    getBackgroundColor() {
      return this.getLatest().__backgroundColor;
    }
    setBackgroundColor(G) {
      this.getWritable().__backgroundColor = G;
    }
    toggleHeaderStyle(G) {
      const X = this.getWritable();
      return (X.__headerState & G) === G ? X.__headerState -= G : X.__headerState += G, X;
    }
    hasHeaderState(G) {
      return (this.getHeaderStyles() & G) === G;
    }
    hasHeader() {
      return this.getLatest().__headerState !== n.NO_STATUS;
    }
    updateDOM(G) {
      return G.__headerState !== this.__headerState || G.__width !== this.__width || G.__colSpan !== this.__colSpan || G.__rowSpan !== this.__rowSpan || G.__backgroundColor !== this.__backgroundColor;
    }
    isShadowRoot() {
      return !0;
    }
    collapseAtStart() {
      return !0;
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
  }
  function l(te) {
    const G = te, X = te.nodeName.toLowerCase();
    let ne;
    e.test(G.style.width) && (ne = parseFloat(G.style.width));
    const ae = a(X === "th" ? n.ROW : n.NO_STATUS, G.colSpan, ne);
    ae.__rowSpan = G.rowSpan;
    const ie = G.style.backgroundColor;
    return ie !== "" && (ae.__backgroundColor = ie), {
      forChild: (_e, ye) => {
        if (i(ye) && !t.$isElementNode(_e)) {
          const Se = t.$createParagraphNode();
          return t.$isLineBreakNode(_e) && _e.getTextContent() === `
` ? null : (Se.append(_e), Se);
        }
        return _e;
      },
      node: ae
    };
  }
  function a(te, G = 1, X) {
    return t.$applyNodeReplacement(new o(te, G, X));
  }
  function i(te) {
    return te instanceof o;
  }
  const _ = t.createCommand("INSERT_TABLE_COMMAND");
  class m extends t.ElementNode {
    /** @internal */
    static getType() {
      return "tablerow";
    }
    static clone(G) {
      return new m(G.__height, G.__key);
    }
    static importDOM() {
      return {
        tr: (G) => ({
          conversion: g,
          priority: 0
        })
      };
    }
    static importJSON(G) {
      return C(G.height);
    }
    constructor(G, X) {
      super(X), this.__height = G;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "tablerow",
        version: 1
      };
    }
    createDOM(G) {
      const X = document.createElement("tr");
      return this.__height && (X.style.height = `${this.__height}px`), r.addClassNamesToElement(X, G.theme.tableRow), X;
    }
    isShadowRoot() {
      return !0;
    }
    setHeight(G) {
      const X = this.getWritable();
      return X.__height = G, this.__height;
    }
    getHeight() {
      return this.getLatest().__height;
    }
    updateDOM(G) {
      return G.__height !== this.__height;
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
  }
  function g(te) {
    const G = te;
    let X;
    return e.test(G.style.height) && (X = parseFloat(G.style.height)), {
      node: C(X)
    };
  }
  function C(te) {
    return t.$applyNodeReplacement(new m(te));
  }
  function p(te) {
    return te instanceof m;
  }
  const s = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function u(te, G, X = !0) {
    const ne = nt();
    for (let ae = 0; ae < te; ae++) {
      const ie = C();
      for (let _e = 0; _e < G; _e++) {
        let ye = n.NO_STATUS;
        typeof X == "object" ? (ae === 0 && X.rows && (ye |= n.ROW), _e === 0 && X.columns && (ye |= n.COLUMN)) : X && (ae === 0 && (ye |= n.ROW), _e === 0 && (ye |= n.COLUMN));
        const Se = a(ye), xe = t.$createParagraphNode();
        xe.append(t.$createTextNode()), Se.append(xe), ie.append(Se);
      }
      ne.append(ie);
    }
    return ne;
  }
  function c(te) {
    const G = r.$findMatchingParent(te, (X) => i(X));
    return i(G) ? G : null;
  }
  function N(te) {
    const G = r.$findMatchingParent(te, (X) => p(X));
    if (p(G))
      return G;
    throw new Error("Expected table cell to be inside of table row.");
  }
  function h(te) {
    const G = r.$findMatchingParent(te, (X) => Pe(X));
    if (Pe(G))
      return G;
    throw new Error("Expected table cell to be inside of table.");
  }
  function E(te) {
    const G = N(te);
    return h(G).getChildren().findIndex((ne) => ne.is(G));
  }
  function d(te) {
    return N(te).getChildren().findIndex((X) => X.is(te));
  }
  function f(te, G) {
    const X = h(te), {
      x: ne,
      y: ae
    } = X.getCordsFromCellNode(te, G);
    return {
      above: X.getCellNodeFromCords(ne, ae - 1, G),
      below: X.getCellNodeFromCords(ne, ae + 1, G),
      left: X.getCellNodeFromCords(ne - 1, ae, G),
      right: X.getCellNodeFromCords(ne + 1, ae, G)
    };
  }
  function y(te, G) {
    const X = te.getChildren();
    if (G >= X.length || G < 0)
      throw new Error("Expected table cell to be inside of table row.");
    return X[G].remove(), te;
  }
  function A(te, G, X = !0, ne, ae) {
    const ie = te.getChildren();
    if (G >= ie.length || G < 0)
      throw new Error("Table row target index out of range");
    const _e = ie[G];
    if (p(_e))
      for (let ye = 0; ye < ne; ye++) {
        const Se = _e.getChildren(), xe = Se.length, Re = C();
        for (let he = 0; he < xe; he++) {
          const ge = Se[he];
          if (!i(ge))
            throw Error("Expected table cell");
          const {
            above: Ee,
            below: we
          } = f(ge, ae);
          let Me = n.NO_STATUS;
          const Ae = Ee && Ee.getWidth() || we && we.getWidth() || void 0;
          (Ee && Ee.hasHeaderState(n.COLUMN) || we && we.hasHeaderState(n.COLUMN)) && (Me |= n.COLUMN);
          const Fe = a(Me, 1, Ae);
          Fe.append(t.$createParagraphNode()), Re.append(Fe);
        }
        X ? _e.insertAfter(Re) : _e.insertBefore(Re);
      }
    else
      throw new Error("Row before insertion index does not exist.");
    return te;
  }
  const v = (te, G) => te === n.BOTH || te === G ? G : n.NO_STATUS;
  function O(te = !0) {
    const G = t.$getSelection();
    if (!(t.$isRangeSelection(G) || $(G)))
      throw Error("Expected a RangeSelection or GridSelection");
    const X = G.focus.getNode(), [ne, , ae] = D(X), [ie, _e] = x(ae, ne, ne), ye = ie[0].length, {
      startRow: Se
    } = _e;
    if (te) {
      const xe = Se + ne.__rowSpan - 1, Re = ie[xe], he = C();
      for (let Ee = 0; Ee < ye; Ee++) {
        const {
          cell: we,
          startRow: Me
        } = Re[Ee];
        if (Me + we.__rowSpan - 1 <= xe) {
          const Fe = Re[Ee].cell.__headerState, ke = v(Fe, n.COLUMN);
          he.append(a(ke).append(t.$createParagraphNode()));
        } else
          we.setRowSpan(we.__rowSpan + 1);
      }
      const ge = ae.getChildAtIndex(xe);
      if (!p(ge))
        throw Error("focusEndRow is not a TableRowNode");
      ge.insertAfter(he);
    } else {
      const xe = ie[Se], Re = C();
      for (let ge = 0; ge < ye; ge++) {
        const {
          cell: Ee,
          startRow: we
        } = xe[ge];
        if (we === Se) {
          const Ae = xe[ge].cell.__headerState, Fe = v(Ae, n.COLUMN);
          Re.append(a(Fe).append(t.$createParagraphNode()));
        } else
          Ee.setRowSpan(Ee.__rowSpan + 1);
      }
      const he = ae.getChildAtIndex(Se);
      if (!p(he))
        throw Error("focusEndRow is not a TableRowNode");
      he.insertBefore(Re);
    }
  }
  function T(te, G, X = !0, ne, ae) {
    const ie = te.getChildren(), _e = [];
    for (let ye = 0; ye < ie.length; ye++) {
      const Se = ie[ye];
      if (p(Se))
        for (let xe = 0; xe < ne; xe++) {
          const Re = Se.getChildren();
          if (G >= Re.length || G < 0)
            throw new Error("Table column target index out of range");
          const he = Re[G];
          if (!i(he))
            throw Error("Expected table cell");
          const {
            left: ge,
            right: Ee
          } = f(he, ae);
          let we = n.NO_STATUS;
          (ge && ge.hasHeaderState(n.ROW) || Ee && Ee.hasHeaderState(n.ROW)) && (we |= n.ROW);
          const Me = a(we);
          Me.append(t.$createParagraphNode()), _e.push({
            newTableCell: Me,
            targetCell: he
          });
        }
    }
    return _e.forEach(({
      newTableCell: ye,
      targetCell: Se
    }) => {
      X ? Se.insertAfter(ye) : Se.insertBefore(ye);
    }), te;
  }
  function S(te = !0) {
    const G = t.$getSelection();
    if (!(t.$isRangeSelection(G) || $(G)))
      throw Error("Expected a RangeSelection or GridSelection");
    const X = G.anchor.getNode(), ne = G.focus.getNode(), [ae] = D(X), [ie, , _e] = D(ne), [ye, Se, xe] = x(_e, ie, ae), Re = ye.length, he = te ? Math.max(Se.startColumn, xe.startColumn) : Math.min(Se.startColumn, xe.startColumn), ge = te ? he + ie.__colSpan - 1 : he - 1, Ee = _e.getFirstChild();
    if (!p(Ee))
      throw Error("Expected firstTable child to be a row");
    let we = null;
    function Me(Fe = n.NO_STATUS) {
      const ke = a(Fe).append(t.$createParagraphNode());
      return we === null && (we = ke), ke;
    }
    let Ae = Ee;
    e: for (let Fe = 0; Fe < Re; Fe++) {
      if (Fe !== 0) {
        const Qe = Ae.getNextSibling();
        if (!p(Qe))
          throw Error("Expected row nextSibling to be a row");
        Ae = Qe;
      }
      const ke = ye[Fe], Ue = ke[ge < 0 ? 0 : ge].cell.__headerState, it = v(Ue, n.ROW);
      if (ge < 0) {
        B(Ae, Me(it));
        continue;
      }
      const {
        cell: Xe,
        startColumn: St,
        startRow: Ze
      } = ke[ge];
      if (St + Xe.__colSpan - 1 <= ge) {
        let Qe = Xe, ot = Ze, ee = ge;
        for (; ot !== Fe && Qe.__rowSpan > 1; )
          if (ee -= Xe.__colSpan, ee >= 0) {
            const {
              cell: Ce,
              startRow: be
            } = ke[ee];
            Qe = Ce, ot = be;
          } else {
            Ae.append(Me(it));
            continue e;
          }
        Qe.insertAfter(Me(it));
      } else
        Xe.setColSpan(Xe.__colSpan + 1);
    }
    we !== null && K(we);
  }
  function b(te, G) {
    const X = te.getChildren();
    for (let ne = 0; ne < X.length; ne++) {
      const ae = X[ne];
      if (p(ae)) {
        const ie = ae.getChildren();
        if (G >= ie.length || G < 0)
          throw new Error("Table column target index out of range");
        ie[G].remove();
      }
    }
    return te;
  }
  function k() {
    const te = t.$getSelection();
    if (!(t.$isRangeSelection(te) || $(te)))
      throw Error("Expected a RangeSelection or GridSelection");
    const G = te.anchor.getNode(), X = te.focus.getNode(), [ne, , ae] = D(G), [ie] = D(X), [_e, ye, Se] = x(ae, ne, ie), {
      startRow: xe
    } = ye, {
      startRow: Re
    } = Se, he = Re + ie.__rowSpan - 1;
    if (_e.length === he - xe + 1) {
      ae.remove();
      return;
    }
    const ge = _e[0].length, Ee = _e[he + 1], we = ae.getChildAtIndex(he + 1);
    for (let Me = he; Me >= xe; Me--) {
      for (let Fe = ge - 1; Fe >= 0; Fe--) {
        const {
          cell: ke,
          startRow: Ue,
          startColumn: it
        } = _e[Me][Fe];
        if (it === Fe && (Me === xe && Ue < xe && ke.setRowSpan(ke.__rowSpan - (Ue - xe)), Ue >= xe && Ue + ke.__rowSpan - 1 > he)) {
          if (ke.setRowSpan(ke.__rowSpan - (he - Ue + 1)), we === null)
            throw Error("Expected nextRowNode not to be null");
          if (Fe === 0)
            B(we, ke);
          else {
            const {
              cell: Xe
            } = Ee[Fe - 1];
            Xe.insertAfter(ke);
          }
        }
      }
      const Ae = ae.getChildAtIndex(Me);
      if (!p(Ae))
        throw Error(`Expected GridNode childAtIndex(${String(Me)}) to be RowNode`);
      Ae.remove();
    }
    if (Ee !== void 0) {
      const {
        cell: Me
      } = Ee[0];
      K(Me);
    } else {
      const Me = _e[xe - 1], {
        cell: Ae
      } = Me[0];
      K(Ae);
    }
  }
  function H() {
    const te = t.$getSelection();
    if (!(t.$isRangeSelection(te) || $(te)))
      throw Error("Expected a RangeSelection or GridSelection");
    const G = te.anchor.getNode(), X = te.focus.getNode(), [ne, , ae] = D(G), [ie] = D(X), [_e, ye, Se] = x(ae, ne, ie), {
      startColumn: xe
    } = ye, {
      startRow: Re,
      startColumn: he
    } = Se, ge = Math.min(xe, he), Ee = Math.max(xe + ne.__colSpan - 1, he + ie.__colSpan - 1), we = Ee - ge + 1;
    if (_e[0].length === Ee - ge + 1) {
      ae.selectPrevious(), ae.remove();
      return;
    }
    const Ae = _e.length;
    for (let Ue = 0; Ue < Ae; Ue++)
      for (let it = ge; it <= Ee; it++) {
        const {
          cell: Xe,
          startColumn: St
        } = _e[Ue][it];
        if (St < ge) {
          if (it === ge) {
            const Ze = ge - St;
            Xe.setColSpan(Xe.__colSpan - // Possible overflow right too
            Math.min(we, Xe.__colSpan - Ze));
          }
        } else if (St + Xe.__colSpan - 1 > Ee) {
          if (it === Ee) {
            const Ze = Ee - St + 1;
            Xe.setColSpan(Xe.__colSpan - Ze);
          }
        } else
          Xe.remove();
      }
    const Fe = _e[Re], ke = Fe[he + ie.__colSpan];
    if (ke !== void 0) {
      const {
        cell: Ue
      } = ke;
      K(Ue);
    } else {
      const Ue = Fe[he - 1], {
        cell: it
      } = Ue;
      K(it);
    }
  }
  function K(te) {
    const G = te.getFirstDescendant();
    G == null ? te.selectStart() : G.getParentOrThrow().selectStart();
  }
  function B(te, G) {
    const X = te.getFirstChild();
    X !== null ? X.insertBefore(G) : te.append(G);
  }
  function w() {
    const te = t.$getSelection();
    if (!(t.$isRangeSelection(te) || $(te)))
      throw Error("Expected a RangeSelection or GridSelection");
    const G = te.anchor.getNode(), [X, ne, ae] = D(G), ie = X.__colSpan, _e = X.__rowSpan;
    if (ie > 1) {
      for (let ye = 1; ye < ie; ye++)
        X.insertAfter(a(n.NO_STATUS));
      X.setColSpan(1);
    }
    if (_e > 1) {
      const [ye, Se] = x(ae, X, X), {
        startColumn: xe,
        startRow: Re
      } = Se;
      let he;
      for (let ge = 1; ge < _e; ge++) {
        const Ee = Re + ge, we = ye[Ee];
        if (he = (he || ne).getNextSibling(), !p(he))
          throw Error("Expected row next sibling to be a row");
        let Me = null;
        for (let Ae = 0; Ae < xe; Ae++) {
          const Fe = we[Ae], ke = Fe.cell;
          Fe.startRow === Ee && (Me = ke), ke.__colSpan > 1 && (Ae += ke.__colSpan - 1);
        }
        if (Me === null)
          for (let Ae = 0; Ae < ie; Ae++)
            B(he, a(n.NO_STATUS));
        else
          for (let Ae = 0; Ae < ie; Ae++)
            Me.insertAfter(a(n.NO_STATUS));
      }
      X.setRowSpan(1);
    }
  }
  function x(te, G, X) {
    const ne = [];
    let ae = null, ie = null;
    function _e(xe, Re, he) {
      const ge = {
        cell: he,
        startColumn: Re,
        startRow: xe
      }, Ee = he.__rowSpan, we = he.__colSpan;
      for (let Me = 0; Me < Ee; Me++) {
        ne[xe + Me] === void 0 && (ne[xe + Me] = []);
        for (let Ae = 0; Ae < we; Ae++)
          ne[xe + Me][Re + Ae] = ge;
      }
      G.is(he) && (ae = ge), X.is(he) && (ie = ge);
    }
    function ye(xe, Re) {
      return ne[xe] === void 0 || ne[xe][Re] === void 0;
    }
    const Se = te.getChildren();
    for (let xe = 0; xe < Se.length; xe++) {
      const Re = Se[xe];
      if (!p(Re))
        throw Error("Expected GridNode children to be TableRowNode");
      const he = Re.getChildren();
      let ge = 0;
      for (const Ee of he) {
        if (!i(Ee))
          throw Error("Expected TableRowNode children to be TableCellNode");
        for (; !ye(xe, ge); )
          ge++;
        _e(xe, ge, Ee), ge += Ee.__colSpan;
      }
    }
    if (ae === null)
      throw Error("Anchor not found in Grid");
    if (ie === null)
      throw Error("Focus not found in Grid");
    return [ne, ae, ie];
  }
  function D(te) {
    let G;
    if (te instanceof o)
      G = te;
    else if ("__type" in te) {
      const ae = r.$findMatchingParent(te, i);
      if (!i(ae))
        throw Error("Expected to find a parent TableCellNode");
      G = ae;
    } else {
      const ae = r.$findMatchingParent(te.getNode(), i);
      if (!i(ae))
        throw Error("Expected to find a parent TableCellNode");
      G = ae;
    }
    const X = G.getParent();
    if (!p(X))
      throw Error("Expected TableCellNode to have a parent TableRowNode");
    const ne = X.getParent();
    if (!Pe(ne))
      throw Error("Expected TableRowNode to have a parent GridNode");
    return [G, X, ne];
  }
  function Y(te) {
    const [G, , X] = D(te), ne = X.getChildren(), ae = ne.length, ie = ne[0].getChildren().length, _e = new Array(ae);
    for (let ye = 0; ye < ae; ye++)
      _e[ye] = new Array(ie);
    for (let ye = 0; ye < ae; ye++) {
      const xe = ne[ye].getChildren();
      let Re = 0;
      for (let he = 0; he < xe.length; he++) {
        for (; _e[ye][Re]; )
          Re++;
        const ge = xe[he], Ee = ge.__rowSpan || 1, we = ge.__colSpan || 1;
        for (let Me = 0; Me < Ee; Me++)
          for (let Ae = 0; Ae < we; Ae++)
            _e[ye + Me][Re + Ae] = ge;
        if (G === ge)
          return {
            colSpan: we,
            columnIndex: Re,
            rowIndex: ye,
            rowSpan: Ee
          };
        Re += we;
      }
    }
    return null;
  }
  class j {
    constructor(G, X, ne) {
      this.anchor = X, this.focus = ne, X._selection = this, ne._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = G;
    }
    getStartEndPoints() {
      return [this.anchor, this.focus];
    }
    /**
     * Returns whether the Selection is "backwards", meaning the focus
     * logically precedes the anchor in the EditorState.
     * @returns true if the Selection is backwards, false otherwise.
     */
    isBackward() {
      return this.focus.isBefore(this.anchor);
    }
    getCachedNodes() {
      return this._cachedNodes;
    }
    setCachedNodes(G) {
      this._cachedNodes = G;
    }
    is(G) {
      return $(G) ? this.tableKey === G.tableKey && this.anchor.is(G.anchor) && this.focus.is(G.focus) : !1;
    }
    set(G, X, ne) {
      this.dirty = !0, this.tableKey = G, this.anchor.key = X, this.focus.key = ne, this._cachedNodes = null;
    }
    clone() {
      return new j(this.tableKey, this.anchor, this.focus);
    }
    isCollapsed() {
      return !1;
    }
    extract() {
      return this.getNodes();
    }
    insertRawText(G) {
    }
    insertText() {
    }
    insertNodes(G) {
      const X = this.focus.getNode();
      if (!t.$isElementNode(X))
        throw Error("Expected TableSelection focus to be an ElementNode");
      t.$normalizeSelection__EXPERIMENTAL(X.select(0, X.getChildrenSize())).insertNodes(G);
    }
    // TODO Deprecate this method. It's confusing when used with colspan|rowspan
    getShape() {
      const G = t.$getNodeByKey(this.anchor.key);
      if (!i(G))
        throw Error("Expected TableSelection anchor to be (or a child of) TableCellNode");
      const X = Y(G);
      if (X === null)
        throw Error("getCellRect: expected to find AnchorNode");
      const ne = t.$getNodeByKey(this.focus.key);
      if (!i(ne))
        throw Error("Expected TableSelection focus to be (or a child of) TableCellNode");
      const ae = Y(ne);
      if (ae === null)
        throw Error("getCellRect: expected to find focusCellNode");
      const ie = Math.min(X.columnIndex, ae.columnIndex), _e = Math.max(X.columnIndex, ae.columnIndex), ye = Math.min(X.rowIndex, ae.rowIndex), Se = Math.max(X.rowIndex, ae.rowIndex);
      return {
        fromX: Math.min(ie, _e),
        fromY: Math.min(ye, Se),
        toX: Math.max(ie, _e),
        toY: Math.max(ye, Se)
      };
    }
    getNodes() {
      const G = this._cachedNodes;
      if (G !== null)
        return G;
      const X = this.anchor.getNode(), ne = this.focus.getNode(), ae = r.$findMatchingParent(X, i), ie = r.$findMatchingParent(ne, i);
      if (!i(ae))
        throw Error("Expected TableSelection anchor to be (or a child of) TableCellNode");
      if (!i(ie))
        throw Error("Expected TableSelection focus to be (or a child of) TableCellNode");
      const _e = ae.getParent();
      if (!p(_e))
        throw Error("Expected anchorCell to have a parent TableRowNode");
      const ye = _e.getParent();
      if (!Pe(ye))
        throw Error("Expected tableNode to have a parent TableNode");
      const Se = ie.getParents()[1];
      if (Se !== ye) {
        if (ye.isParentOf(ie)) {
          const Ze = Se.getParent();
          if (Ze == null)
            throw Error("Expected focusCellParent to have a parent");
          this.set(this.tableKey, ie.getKey(), Ze.getKey());
        } else {
          const Ze = ye.getParent();
          if (Ze == null)
            throw Error("Expected gridParent to have a parent");
          this.set(this.tableKey, Ze.getKey(), ie.getKey());
        }
        return this.getNodes();
      }
      const [xe, Re, he] = x(ye, ae, ie);
      let ge = Math.min(Re.startColumn, he.startColumn), Ee = Math.min(Re.startRow, he.startRow), we = Math.max(Re.startColumn + Re.cell.__colSpan - 1, he.startColumn + he.cell.__colSpan - 1), Me = Math.max(Re.startRow + Re.cell.__rowSpan - 1, he.startRow + he.cell.__rowSpan - 1), Ae = ge, Fe = Ee, ke = ge, Ue = Ee;
      function it(Ze) {
        const {
          cell: Qe,
          startColumn: ot,
          startRow: ee
        } = Ze;
        ge = Math.min(ge, ot), Ee = Math.min(Ee, ee), we = Math.max(we, ot + Qe.__colSpan - 1), Me = Math.max(Me, ee + Qe.__rowSpan - 1);
      }
      for (; ge < Ae || Ee < Fe || we > ke || Me > Ue; ) {
        if (ge < Ae) {
          const Ze = Ue - Fe, Qe = Ae - 1;
          for (let ot = 0; ot <= Ze; ot++)
            it(xe[Fe + ot][Qe]);
          Ae = Qe;
        }
        if (Ee < Fe) {
          const Ze = ke - Ae, Qe = Fe - 1;
          for (let ot = 0; ot <= Ze; ot++)
            it(xe[Qe][Ae + ot]);
          Fe = Qe;
        }
        if (we > ke) {
          const Ze = Ue - Fe, Qe = ke + 1;
          for (let ot = 0; ot <= Ze; ot++)
            it(xe[Fe + ot][Qe]);
          ke = Qe;
        }
        if (Me > Ue) {
          const Ze = ke - Ae, Qe = Ue + 1;
          for (let ot = 0; ot <= Ze; ot++)
            it(xe[Qe][Ae + ot]);
          Ue = Qe;
        }
      }
      const Xe = [ye];
      let St = null;
      for (let Ze = Ee; Ze <= Me; Ze++)
        for (let Qe = ge; Qe <= we; Qe++) {
          const {
            cell: ot
          } = xe[Ze][Qe], ee = ot.getParent();
          if (!p(ee))
            throw Error("Expected TableCellNode parent to be a TableRowNode");
          ee !== St && Xe.push(ee), Xe.push(ot, ...L(ot)), St = ee;
        }
      return t.isCurrentlyReadOnlyMode() || (this._cachedNodes = Xe), Xe;
    }
    getTextContent() {
      const G = this.getNodes();
      let X = "";
      for (let ne = 0; ne < G.length; ne++)
        X += G[ne].getTextContent();
      return X;
    }
  }
  function $(te) {
    return te instanceof j;
  }
  function W() {
    const te = t.$createPoint("root", 0, "element"), G = t.$createPoint("root", 0, "element");
    return new j("root", te, G);
  }
  function L(te) {
    const G = [], X = [te];
    for (; X.length > 0; ) {
      const ne = X.pop();
      if (ne === void 0)
        throw Error("Stack.length > 0; can't be undefined");
      t.$isElementNode(ne) && X.unshift(...ne.getChildren()), ne !== te && G.push(ne);
    }
    return G;
  }
  const F = (te) => s ? (te || window).getSelection() : null;
  class z {
    constructor(G, X) {
      this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = X, this.editor = G, this.table = {
        columns: 0,
        domRows: [],
        rows: 0
      }, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.trackTable();
    }
    getTable() {
      return this.table;
    }
    removeListeners() {
      Array.from(this.listenersToRemove).forEach((G) => G());
    }
    trackTable() {
      const G = new MutationObserver((X) => {
        this.editor.update(() => {
          let ne = !1;
          for (let ie = 0; ie < X.length; ie++) {
            const Se = X[ie].target.nodeName;
            if (Se === "TABLE" || Se === "TR") {
              ne = !0;
              break;
            }
          }
          if (!ne)
            return;
          const ae = this.editor.getElementByKey(this.tableNodeKey);
          if (!ae)
            throw new Error("Expected to find TableElement in DOM");
          this.table = de(ae);
        });
      });
      this.editor.update(() => {
        const X = this.editor.getElementByKey(this.tableNodeKey);
        if (!X)
          throw new Error("Expected to find TableElement in DOM");
        this.table = de(X), G.observe(X, {
          childList: !0,
          subtree: !0
        });
      });
    }
    clearHighlight() {
      const G = this.editor;
      this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.enableHighlightStyle(), G.update(() => {
        const X = t.$getNodeByKey(this.tableNodeKey);
        if (!Pe(X))
          throw new Error("Expected TableNode.");
        const ne = G.getElementByKey(this.tableNodeKey);
        if (!ne)
          throw new Error("Expected to find TableElement in DOM");
        const ae = de(ne);
        P(G, ae, null), t.$setSelection(null), G.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0);
      });
    }
    enableHighlightStyle() {
      const G = this.editor;
      G.update(() => {
        const X = G.getElementByKey(this.tableNodeKey);
        if (!X)
          throw new Error("Expected to find TableElement in DOM");
        r.removeClassNamesFromElement(X, G._config.theme.tableSelection), X.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
      });
    }
    disableHighlightStyle() {
      const G = this.editor;
      G.update(() => {
        const X = G.getElementByKey(this.tableNodeKey);
        if (!X)
          throw new Error("Expected to find TableElement in DOM");
        r.addClassNamesToElement(X, G._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
      });
    }
    updateTableTableSelection(G) {
      if (G !== null && G.tableKey === this.tableNodeKey) {
        const X = this.editor;
        this.tableSelection = G, this.isHighlightingCells = !0, this.disableHighlightStyle(), P(X, this.table, this.tableSelection);
      } else G == null ? this.clearHighlight() : (this.tableNodeKey = G.tableKey, this.updateTableTableSelection(G));
    }
    setFocusCellForSelection(G, X = !1) {
      const ne = this.editor;
      ne.update(() => {
        const ae = t.$getNodeByKey(this.tableNodeKey);
        if (!Pe(ae))
          throw new Error("Expected TableNode.");
        if (!ne.getElementByKey(this.tableNodeKey))
          throw new Error("Expected to find TableElement in DOM");
        const _e = G.x, ye = G.y;
        if (this.focusCell = G, this.anchorCell !== null) {
          const Se = F(ne._window);
          Se && Se.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
        }
        if (!this.isHighlightingCells && (this.anchorX !== _e || this.anchorY !== ye || X))
          this.isHighlightingCells = !0, this.disableHighlightStyle();
        else if (_e === this.focusX && ye === this.focusY)
          return;
        if (this.focusX = _e, this.focusY = ye, this.isHighlightingCells) {
          const Se = t.$getNearestNodeFromDOMNode(G.elem);
          if (this.tableSelection != null && this.anchorCellNodeKey != null && i(Se)) {
            const xe = Se.getKey();
            this.tableSelection = this.tableSelection.clone() || W(), this.focusCellNodeKey = xe, this.tableSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), t.$setSelection(this.tableSelection), ne.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0), P(ne, this.table, this.tableSelection);
          }
        }
      });
    }
    setAnchorCellForSelection(G) {
      this.isHighlightingCells = !1, this.anchorCell = G, this.anchorX = G.x, this.anchorY = G.y, this.editor.update(() => {
        const X = t.$getNearestNodeFromDOMNode(G.elem);
        if (i(X)) {
          const ne = X.getKey();
          this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : W(), this.anchorCellNodeKey = ne;
        }
      });
    }
    formatCells(G) {
      this.editor.update(() => {
        const X = t.$getSelection();
        if (!$(X))
          throw Error("Expected grid selection");
        const ne = t.$createRangeSelection(), ae = ne.anchor, ie = ne.focus;
        X.getNodes().forEach((_e) => {
          i(_e) && _e.getTextContentSize() !== 0 && (ae.set(_e.getKey(), 0, "element"), ie.set(_e.getKey(), _e.getChildrenSize(), "element"), ne.formatText(G));
        }), t.$setSelection(X), this.editor.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0);
      });
    }
    clearText() {
      const G = this.editor;
      G.update(() => {
        const X = t.$getNodeByKey(this.tableNodeKey);
        if (!Pe(X))
          throw new Error("Expected TableNode.");
        const ne = t.$getSelection();
        if (!$(ne))
          throw Error("Expected grid selection");
        const ae = ne.getNodes().filter(i);
        if (ae.length === this.table.columns * this.table.rows) {
          X.selectPrevious(), X.remove(), t.$getRoot().selectStart();
          return;
        }
        ae.forEach((ie) => {
          if (t.$isElementNode(ie)) {
            const _e = t.$createParagraphNode(), ye = t.$createTextNode();
            _e.append(ye), ie.append(_e), ie.getChildren().forEach((Se) => {
              Se !== _e && Se.remove();
            });
          }
        }), P(G, this.table, null), t.$setSelection(null), G.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0);
      });
    }
  }
  const V = "__lexicalTableSelection";
  function Q(te, G, X, ne) {
    const ae = X.getRootElement();
    if (ae === null)
      throw new Error("No root element.");
    const ie = new z(X, te.getKey()), _e = X._window || window;
    le(G, ie), G.addEventListener("mousedown", (he) => {
      setTimeout(() => {
        if (he.button !== 0 || !_e)
          return;
        const ge = ue(he.target);
        ge !== null && (Oe(he), ie.setAnchorCellForSelection(ge));
        const Ee = () => {
          _e.removeEventListener("mouseup", Ee), _e.removeEventListener("mousemove", we);
        }, we = (Me) => {
          const Ae = ue(Me.target);
          Ae !== null && (ie.anchorX !== Ae.x || ie.anchorY !== Ae.y) && (Me.preventDefault(), ie.setFocusCellForSelection(Ae));
        };
        _e.addEventListener("mouseup", Ee), _e.addEventListener("mousemove", we);
      }, 0);
    });
    const ye = (he) => {
      he.button === 0 && X.update(() => {
        const ge = t.$getSelection(), Ee = he.target;
        $(ge) && ge.tableKey === ie.tableNodeKey && ae.contains(Ee) && ie.clearHighlight();
      });
    };
    _e.addEventListener("mousedown", ye), ie.listenersToRemove.add(() => _e.removeEventListener("mousedown", ye)), ie.listenersToRemove.add(X.registerCommand(t.KEY_ARROW_DOWN_COMMAND, (he) => Ne(X, he, "down", te, ie), t.COMMAND_PRIORITY_HIGH)), ie.listenersToRemove.add(X.registerCommand(t.KEY_ARROW_UP_COMMAND, (he) => Ne(X, he, "up", te, ie), t.COMMAND_PRIORITY_HIGH)), ie.listenersToRemove.add(X.registerCommand(t.KEY_ARROW_LEFT_COMMAND, (he) => Ne(X, he, "backward", te, ie), t.COMMAND_PRIORITY_HIGH)), ie.listenersToRemove.add(X.registerCommand(t.KEY_ARROW_RIGHT_COMMAND, (he) => Ne(X, he, "forward", te, ie), t.COMMAND_PRIORITY_HIGH)), ie.listenersToRemove.add(X.registerCommand(t.KEY_ESCAPE_COMMAND, (he) => {
      const ge = t.$getSelection();
      if ($(ge)) {
        const Ee = r.$findMatchingParent(ge.focus.getNode(), i);
        if (i(Ee))
          return Oe(he), Ee.selectEnd(), !0;
      }
      return !1;
    }, t.COMMAND_PRIORITY_HIGH));
    const Se = (he) => () => {
      const ge = t.$getSelection();
      if (!J(ge, te))
        return !1;
      if ($(ge))
        return ie.clearText(), !0;
      if (t.$isRangeSelection(ge)) {
        const Ee = r.$findMatchingParent(ge.anchor.getNode(), (Xe) => i(Xe));
        if (!i(Ee))
          return !1;
        const we = ge.anchor.getNode(), Me = ge.focus.getNode(), Ae = te.isParentOf(we), Fe = te.isParentOf(Me);
        if (Ae && !Fe || Fe && !Ae)
          return ie.clearText(), !0;
        const Ue = r.$findMatchingParent(ge.anchor.getNode(), (Xe) => t.$isElementNode(Xe)), it = Ue && r.$findMatchingParent(Ue, (Xe) => t.$isElementNode(Xe) && i(Xe.getParent()));
        if (!t.$isElementNode(it) || !t.$isElementNode(Ue))
          return !1;
        if (he === t.DELETE_LINE_COMMAND && it.getPreviousSibling() === null)
          return !0;
        if ((he === t.DELETE_CHARACTER_COMMAND || he === t.DELETE_WORD_COMMAND) && ge.isCollapsed() && ge.anchor.offset === 0 && Ue !== it) {
          const Xe = Ue.getChildren(), St = t.$createParagraphNode();
          return Xe.forEach((Ze) => St.append(Ze)), Ue.replace(St), Ue.getWritable().__parent = Ee.getKey(), !0;
        }
      }
      return !1;
    };
    [t.DELETE_WORD_COMMAND, t.DELETE_LINE_COMMAND, t.DELETE_CHARACTER_COMMAND].forEach((he) => {
      ie.listenersToRemove.add(X.registerCommand(he, Se(he), t.COMMAND_PRIORITY_CRITICAL));
    });
    const xe = (he) => {
      const ge = t.$getSelection();
      if (!J(ge, te))
        return !1;
      if ($(ge))
        return he.preventDefault(), he.stopPropagation(), ie.clearText(), !0;
      if (t.$isRangeSelection(ge)) {
        const Ee = r.$findMatchingParent(ge.anchor.getNode(), (we) => i(we));
        if (!i(Ee))
          return !1;
      }
      return !1;
    };
    ie.listenersToRemove.add(X.registerCommand(t.KEY_BACKSPACE_COMMAND, xe, t.COMMAND_PRIORITY_CRITICAL)), ie.listenersToRemove.add(X.registerCommand(t.KEY_DELETE_COMMAND, xe, t.COMMAND_PRIORITY_CRITICAL)), ie.listenersToRemove.add(X.registerCommand(t.FORMAT_TEXT_COMMAND, (he) => {
      const ge = t.$getSelection();
      if (!J(ge, te))
        return !1;
      if ($(ge))
        return ie.formatCells(he), !0;
      if (t.$isRangeSelection(ge)) {
        const Ee = r.$findMatchingParent(ge.anchor.getNode(), (we) => i(we));
        if (!i(Ee))
          return !1;
      }
      return !1;
    }, t.COMMAND_PRIORITY_CRITICAL)), ie.listenersToRemove.add(X.registerCommand(t.CONTROLLED_TEXT_INSERTION_COMMAND, (he) => {
      const ge = t.$getSelection();
      if (!J(ge, te))
        return !1;
      if ($(ge))
        return ie.clearHighlight(), !1;
      if (t.$isRangeSelection(ge)) {
        const Ee = r.$findMatchingParent(ge.anchor.getNode(), (we) => i(we));
        if (!i(Ee))
          return !1;
      }
      return !1;
    }, t.COMMAND_PRIORITY_CRITICAL)), ne && ie.listenersToRemove.add(X.registerCommand(t.KEY_TAB_COMMAND, (he) => {
      const ge = t.$getSelection();
      if (!t.$isRangeSelection(ge) || !ge.isCollapsed() || !J(ge, te))
        return !1;
      const Ee = se(ge.anchor.getNode());
      if (Ee === null)
        return !1;
      Oe(he);
      const we = te.getCordsFromCellNode(Ee, ie.table);
      return q(ie, te, we.x, we.y, he.shiftKey ? "backward" : "forward"), !0;
    }, t.COMMAND_PRIORITY_CRITICAL)), ie.listenersToRemove.add(X.registerCommand(t.FOCUS_COMMAND, (he) => te.isSelected(), t.COMMAND_PRIORITY_HIGH));
    function Re(he) {
      const ge = te.getCordsFromCellNode(he, ie.table);
      return te.getDOMCellFromCordsOrThrow(ge.x, ge.y, ie.table);
    }
    return ie.listenersToRemove.add(X.registerCommand(t.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, (he) => {
      const {
        nodes: ge,
        selection: Ee
      } = he, we = Ee.getStartEndPoints(), Me = $(Ee), Fe = t.$isRangeSelection(Ee) && r.$findMatchingParent(Ee.anchor.getNode(), (dt) => i(dt)) !== null && r.$findMatchingParent(Ee.focus.getNode(), (dt) => i(dt)) !== null || Me;
      if (ge.length !== 1 || !Pe(ge[0]) || !Fe || we === null)
        return !1;
      const [ke] = we, Ue = ge[0], it = Ue.getChildren(), Xe = Ue.getFirstChildOrThrow().getChildrenSize(), St = Ue.getChildrenSize(), Ze = r.$findMatchingParent(ke.getNode(), (dt) => i(dt)), Qe = Ze && r.$findMatchingParent(Ze, (dt) => p(dt)), ot = Qe && r.$findMatchingParent(Qe, (dt) => Pe(dt));
      if (!i(Ze) || !p(Qe) || !Pe(ot))
        return !1;
      const ee = Qe.getIndexWithinParent(), Ce = Math.min(ot.getChildrenSize() - 1, ee + St - 1), be = Ze.getIndexWithinParent(), Be = Math.min(Qe.getChildrenSize() - 1, be + Xe - 1), rt = Math.min(be, Be), st = Math.min(ee, Ce), Je = Math.max(be, Be), ze = Math.max(ee, Ce), bt = ot.getChildren();
      let ft = 0, gt, Rt;
      for (let dt = st; dt <= ze; dt++) {
        const Kt = bt[dt];
        if (!p(Kt))
          return !1;
        const Ot = it[ft];
        if (!p(Ot))
          return !1;
        const Yn = Kt.getChildren(), Kr = Ot.getChildren();
        let _r = 0;
        for (let Wn = rt; Wn <= Je; Wn++) {
          const Tn = Yn[Wn];
          if (!i(Tn))
            return !1;
          const Ei = Kr[_r];
          if (!i(Ei))
            return !1;
          dt === st && Wn === rt ? gt = Tn.getKey() : dt === ze && Wn === Je && (Rt = Tn.getKey());
          const pc = Tn.getChildren();
          Ei.getChildren().forEach((yn) => {
            t.$isTextNode(yn) && t.$createParagraphNode().append(yn), Tn.append(yn);
          }), pc.forEach((yn) => yn.remove()), _r++;
        }
        ft++;
      }
      if (gt && Rt) {
        const dt = W();
        dt.set(ge[0].getKey(), gt, Rt), t.$setSelection(dt);
      }
      return !0;
    }, t.COMMAND_PRIORITY_CRITICAL)), ie.listenersToRemove.add(X.registerCommand(t.SELECTION_CHANGE_COMMAND, () => {
      const he = t.$getSelection(), ge = t.$getPreviousSelection();
      if (t.$isRangeSelection(he)) {
        const {
          anchor: Ee,
          focus: we
        } = he, Me = Ee.getNode(), Ae = we.getNode(), Fe = se(Me), ke = se(Ae), Ue = Fe && te.is(me(Fe)), it = ke && te.is(me(ke)), Xe = Ue !== it, St = Ue && it, Ze = he.isBackward();
        if (Xe) {
          const Qe = he.clone();
          Qe.focus.set(te.getKey(), Ze ? 0 : te.getChildrenSize(), "element"), t.$setSelection(Qe), M(X, ie);
        } else St && (Fe.is(ke) || (ie.setAnchorCellForSelection(Re(Fe)), ie.setFocusCellForSelection(Re(ke), !0)));
      }
      return he && !he.is(ge) && ($(he) || $(ge)) && ie.tableSelection && !ie.tableSelection.is(ge) ? ($(he) && he.tableKey === ie.tableNodeKey ? ie.updateTableTableSelection(he) : !$(he) && $(ge) && ge.tableKey === ie.tableNodeKey && ie.updateTableTableSelection(null), !1) : (ie.hasHijackedSelectionStyles && !te.isSelected() ? U(X, ie) : !ie.hasHijackedSelectionStyles && te.isSelected() && M(X, ie), !1);
    }, t.COMMAND_PRIORITY_CRITICAL)), ie;
  }
  function le(te, G) {
    te[V] = G;
  }
  function fe(te) {
    return te[V];
  }
  function ue(te) {
    let G = te;
    for (; G != null; ) {
      const X = G.nodeName;
      if (X === "TD" || X === "TH") {
        const ne = G._cell;
        return ne === void 0 ? null : ne;
      }
      G = G.parentNode;
    }
    return null;
  }
  function de(te) {
    const G = [], X = {
      columns: 0,
      domRows: G,
      rows: 0
    };
    let ne = te.firstChild, ae = 0, ie = 0;
    for (G.length = 0; ne != null; ) {
      const _e = ne.nodeName;
      if (_e === "TD" || _e === "TH") {
        const xe = ne, Re = {
          elem: xe,
          hasBackgroundColor: xe.style.backgroundColor !== "",
          highlighted: !1,
          x: ae,
          y: ie
        };
        ne._cell = Re;
        let he = G[ie];
        he === void 0 && (he = G[ie] = []), he[ae] = Re;
      } else {
        const xe = ne.firstChild;
        if (xe != null) {
          ne = xe;
          continue;
        }
      }
      const ye = ne.nextSibling;
      if (ye != null) {
        ae++, ne = ye;
        continue;
      }
      const Se = ne.parentNode;
      if (Se != null) {
        const xe = Se.nextSibling;
        if (xe == null)
          break;
        ie++, ae = 0, ne = xe;
      }
    }
    return X.columns = ae + 1, X.rows = ie + 1, X;
  }
  function P(te, G, X) {
    const ne = new Set(X ? X.getNodes() : []);
    I(G, (ae, ie) => {
      const _e = ae.elem;
      ne.has(ie) ? (ae.highlighted = !0, pe(te, ae)) : (ae.highlighted = !1, oe(te, ae), _e.getAttribute("style") || _e.removeAttribute("style"));
    });
  }
  function I(te, G) {
    const {
      domRows: X
    } = te;
    for (let ne = 0; ne < X.length; ne++) {
      const ae = X[ne];
      if (ae)
        for (let ie = 0; ie < ae.length; ie++) {
          const _e = ae[ie];
          if (!_e)
            continue;
          const ye = t.$getNearestNodeFromDOMNode(_e.elem);
          ye !== null && G(_e, ye, {
            x: ie,
            y: ne
          });
        }
    }
  }
  function M(te, G) {
    G.disableHighlightStyle(), I(G.table, (X) => {
      X.highlighted = !0, pe(te, X);
    });
  }
  function U(te, G) {
    G.enableHighlightStyle(), I(G.table, (X) => {
      const ne = X.elem;
      X.highlighted = !1, oe(te, X), ne.getAttribute("style") || ne.removeAttribute("style");
    });
  }
  const q = (te, G, X, ne, ae) => {
    const ie = ae === "forward";
    switch (ae) {
      case "backward":
      case "forward":
        return X !== (ie ? te.table.columns - 1 : 0) ? re(G.getCellNodeFromCordsOrThrow(X + (ie ? 1 : -1), ne, te.table), ie) : ne !== (ie ? te.table.rows - 1 : 0) ? re(G.getCellNodeFromCordsOrThrow(ie ? 0 : te.table.columns - 1, ne + (ie ? 1 : -1), te.table), ie) : ie ? G.selectNext() : G.selectPrevious(), !0;
      case "up":
        return ne !== 0 ? re(G.getCellNodeFromCordsOrThrow(X, ne - 1, te.table), !1) : G.selectPrevious(), !0;
      case "down":
        return ne !== te.table.rows - 1 ? re(G.getCellNodeFromCordsOrThrow(X, ne + 1, te.table), !0) : G.selectNext(), !0;
      default:
        return !1;
    }
  }, Z = (te, G, X, ne, ae) => {
    const ie = ae === "forward";
    switch (ae) {
      case "backward":
      case "forward":
        return X !== (ie ? te.table.columns - 1 : 0) && te.setFocusCellForSelection(G.getDOMCellFromCordsOrThrow(X + (ie ? 1 : -1), ne, te.table)), !0;
      case "up":
        return ne !== 0 ? (te.setFocusCellForSelection(G.getDOMCellFromCordsOrThrow(X, ne - 1, te.table)), !0) : !1;
      case "down":
        return ne !== te.table.rows - 1 ? (te.setFocusCellForSelection(G.getDOMCellFromCordsOrThrow(X, ne + 1, te.table)), !0) : !1;
      default:
        return !1;
    }
  };
  function J(te, G) {
    if (t.$isRangeSelection(te) || $(te)) {
      const X = G.isParentOf(te.anchor.getNode()), ne = G.isParentOf(te.focus.getNode());
      return X && ne;
    }
    return !1;
  }
  function re(te, G) {
    G ? te.selectStart() : te.selectEnd();
  }
  const ce = "172,206,247";
  function pe(te, G) {
    const X = G.elem, ne = t.$getNearestNodeFromDOMNode(X);
    if (!i(ne))
      throw Error("Expected to find LexicalNode from Table Cell DOMNode");
    ne.getBackgroundColor() === null ? X.style.setProperty("background-color", `rgb(${ce})`) : X.style.setProperty("background-image", `linear-gradient(to right, rgba(${ce},0.85), rgba(${ce},0.85))`), X.style.setProperty("caret-color", "transparent");
  }
  function oe(te, G) {
    const X = G.elem, ne = t.$getNearestNodeFromDOMNode(X);
    if (!i(ne))
      throw Error("Expected to find LexicalNode from Table Cell DOMNode");
    ne.getBackgroundColor() === null && X.style.removeProperty("background-color"), X.style.removeProperty("background-image"), X.style.removeProperty("caret-color");
  }
  function se(te) {
    const G = r.$findMatchingParent(te, i);
    return i(G) ? G : null;
  }
  function me(te) {
    const G = r.$findMatchingParent(te, Pe);
    return Pe(G) ? G : null;
  }
  function Ne(te, G, X, ne, ae) {
    const ie = t.$getSelection();
    if (!J(ie, ne))
      return !1;
    if (t.$isRangeSelection(ie) && ie.isCollapsed()) {
      if (X === "backward" || X === "forward")
        return !1;
      const {
        anchor: _e,
        focus: ye
      } = ie, Se = r.$findMatchingParent(_e.getNode(), i), xe = r.$findMatchingParent(ye.getNode(), i);
      if (!i(Se) || !Se.is(xe))
        return !1;
      const Re = me(Se);
      if (Re !== ne && Re != null) {
        const ke = te.getElementByKey(Re.getKey());
        if (ke != null)
          return ae.table = de(ke), Ne(te, G, X, Re, ae);
      }
      const he = te.getElementByKey(Se.__key), ge = te.getElementByKey(_e.key);
      if (ge == null || he == null)
        return !1;
      let Ee;
      if (_e.type === "element")
        Ee = ge.getBoundingClientRect();
      else {
        const ke = window.getSelection();
        if (ke === null || ke.rangeCount === 0)
          return !1;
        Ee = ke.getRangeAt(0).getBoundingClientRect();
      }
      const we = X === "up" ? Se.getFirstChild() : Se.getLastChild();
      if (we == null)
        return !1;
      const Me = te.getElementByKey(we.__key);
      if (Me == null)
        return !1;
      const Ae = Me.getBoundingClientRect();
      if (X === "up" ? Ae.top > Ee.top - Ee.height : Ee.bottom + Ee.height > Ae.bottom) {
        Oe(G);
        const ke = ne.getCordsFromCellNode(Se, ae.table);
        if (G.shiftKey) {
          const Ue = ne.getDOMCellFromCordsOrThrow(ke.x, ke.y, ae.table);
          ae.setAnchorCellForSelection(Ue), ae.setFocusCellForSelection(Ue, !0);
        } else
          return q(ae, ne, ke.x, ke.y, X);
        return !0;
      }
    } else if ($(ie)) {
      const {
        anchor: _e,
        focus: ye
      } = ie, Se = r.$findMatchingParent(_e.getNode(), i), xe = r.$findMatchingParent(ye.getNode(), i), [Re] = ie.getNodes(), he = te.getElementByKey(Re.getKey());
      if (!i(Se) || !i(xe) || !Pe(Re) || he == null)
        return !1;
      ae.updateTableTableSelection(ie);
      const ge = de(he), Ee = ne.getCordsFromCellNode(Se, ge), we = ne.getDOMCellFromCordsOrThrow(Ee.x, Ee.y, ge);
      if (ae.setAnchorCellForSelection(we), Oe(G), G.shiftKey) {
        const Me = ne.getCordsFromCellNode(xe, ge);
        return Z(ae, Re, Me.x, Me.y, X);
      } else
        xe.selectEnd();
      return !0;
    }
    return !1;
  }
  function Oe(te) {
    te.preventDefault(), te.stopImmediatePropagation(), te.stopPropagation();
  }
  class Te extends t.ElementNode {
    static getType() {
      return "table";
    }
    static clone(G) {
      return new Te(G.__key);
    }
    static importDOM() {
      return {
        table: (G) => ({
          conversion: ht,
          priority: 1
        })
      };
    }
    static importJSON(G) {
      return nt();
    }
    constructor(G) {
      super(G);
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        type: "table",
        version: 1
      };
    }
    createDOM(G, X) {
      const ne = document.createElement("table");
      return r.addClassNamesToElement(ne, G.theme.table), ne;
    }
    updateDOM() {
      return !1;
    }
    exportDOM(G) {
      return {
        ...super.exportDOM(G),
        after: (X) => {
          if (X) {
            const ne = X.cloneNode(), ae = document.createElement("colgroup"), ie = document.createElement("tbody");
            r.isHTMLElement(X) && ie.append(...X.children);
            const _e = this.getFirstChildOrThrow();
            if (!p(_e))
              throw new Error("Expected to find row node.");
            const ye = _e.getChildrenSize();
            for (let Se = 0; Se < ye; Se++) {
              const xe = document.createElement("col");
              ae.append(xe);
            }
            return ne.replaceChildren(ae, ie), ne;
          }
        }
      };
    }
    // TODO 0.10 deprecate
    canExtractContents() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isShadowRoot() {
      return !0;
    }
    getCordsFromCellNode(G, X) {
      const {
        rows: ne,
        domRows: ae
      } = X;
      for (let ie = 0; ie < ne; ie++) {
        const _e = ae[ie];
        if (_e == null)
          continue;
        const ye = _e.findIndex((Se) => {
          if (!Se) return;
          const {
            elem: xe
          } = Se;
          return t.$getNearestNodeFromDOMNode(xe) === G;
        });
        if (ye !== -1)
          return {
            x: ye,
            y: ie
          };
      }
      throw new Error("Cell not found in table.");
    }
    getDOMCellFromCords(G, X, ne) {
      const {
        domRows: ae
      } = ne, ie = ae[X];
      if (ie == null)
        return null;
      const _e = ie[G];
      return _e ?? null;
    }
    getDOMCellFromCordsOrThrow(G, X, ne) {
      const ae = this.getDOMCellFromCords(G, X, ne);
      if (!ae)
        throw new Error("Cell not found at cords.");
      return ae;
    }
    getCellNodeFromCords(G, X, ne) {
      const ae = this.getDOMCellFromCords(G, X, ne);
      if (ae == null)
        return null;
      const ie = t.$getNearestNodeFromDOMNode(ae.elem);
      return i(ie) ? ie : null;
    }
    getCellNodeFromCordsOrThrow(G, X, ne) {
      const ae = this.getCellNodeFromCords(G, X, ne);
      if (!ae)
        throw new Error("Node at cords not TableCellNode.");
      return ae;
    }
    canSelectBefore() {
      return !0;
    }
    canIndent() {
      return !1;
    }
  }
  function He(te, G) {
    const X = te.getElementByKey(G.getKey());
    if (X == null)
      throw new Error("Table Element Not Found");
    return de(X);
  }
  function ht(te) {
    return {
      node: nt()
    };
  }
  function nt() {
    return t.$applyNodeReplacement(new Te());
  }
  function Pe(te) {
    return te instanceof Te;
  }
  return Ge.$computeTableMap = x, Ge.$createTableCellNode = a, Ge.$createTableNode = nt, Ge.$createTableNodeWithDimensions = u, Ge.$createTableRowNode = C, Ge.$createTableSelection = W, Ge.$deleteTableColumn = b, Ge.$deleteTableColumn__EXPERIMENTAL = H, Ge.$deleteTableRow__EXPERIMENTAL = k, Ge.$getElementForTableNode = He, Ge.$getNodeTriplet = D, Ge.$getTableCellNodeFromLexicalNode = c, Ge.$getTableCellNodeRect = Y, Ge.$getTableColumnIndexFromTableCellNode = d, Ge.$getTableNodeFromLexicalNodeOrThrow = h, Ge.$getTableRowIndexFromTableCellNode = E, Ge.$getTableRowNodeFromTableCellNodeOrThrow = N, Ge.$insertTableColumn = T, Ge.$insertTableColumn__EXPERIMENTAL = S, Ge.$insertTableRow = A, Ge.$insertTableRow__EXPERIMENTAL = O, Ge.$isTableCellNode = i, Ge.$isTableNode = Pe, Ge.$isTableRowNode = p, Ge.$isTableSelection = $, Ge.$removeTableRowAtIndex = y, Ge.$unmergeCell = w, Ge.INSERT_TABLE_COMMAND = _, Ge.TableCellHeaderStates = n, Ge.TableCellNode = o, Ge.TableNode = Te, Ge.TableObserver = z, Ge.TableRowNode = m, Ge.applyTableHandlers = Q, Ge.getDOMCellFromTarget = ue, Ge.getTableObserverFromTableElement = fe, Ge;
}
var Ve = {}, Ps;
function wu() {
  if (Ps) return Ve;
  Ps = 1;
  var r = Ke(), t = Ie;
  let e = /^(\d+(?:\.\d+)?)px$/, n = { BOTH: 3, COLUMN: 2, NO_STATUS: 0, ROW: 1 };
  class o extends t.ElementNode {
    static getType() {
      return "tablecell";
    }
    static clone(I) {
      let M = new o(I.__headerState, I.__colSpan, I.__width, I.__key);
      return M.__rowSpan = I.__rowSpan, M.__backgroundColor = I.__backgroundColor, M;
    }
    static importDOM() {
      return { td: () => ({ conversion: l, priority: 0 }), th: () => ({ conversion: l, priority: 0 }) };
    }
    static importJSON(I) {
      let M = I.rowSpan || 1, U = a(I.headerState, I.colSpan || 1, I.width || void 0);
      return U.__rowSpan = M, U.__backgroundColor = I.backgroundColor || null, U;
    }
    constructor(I = n.NO_STATUS, M = 1, U, q) {
      super(q), this.__colSpan = M, this.__rowSpan = 1, this.__headerState = I, this.__width = U, this.__backgroundColor = null;
    }
    createDOM(I) {
      let M = document.createElement(this.getTag());
      return this.__width && (M.style.width = `${this.__width}px`), 1 < this.__colSpan && (M.colSpan = this.__colSpan), 1 < this.__rowSpan && (M.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (M.style.backgroundColor = this.__backgroundColor), r.addClassNamesToElement(M, I.theme.tableCell, this.hasHeader() && I.theme.tableCellHeader), M;
    }
    exportDOM(I) {
      if ({ element: I } = super.exportDOM(I), I) {
        var M = this.getParentOrThrow().getChildrenSize();
        I.style.border = "1px solid black", 1 < this.__colSpan && (I.colSpan = this.__colSpan), 1 < this.__rowSpan && (I.rowSpan = this.__rowSpan), I.style.width = `${this.getWidth() || Math.max(90, 700 / M)}px`, I.style.verticalAlign = "top", I.style.textAlign = "start", M = this.getBackgroundColor(), M !== null ? I.style.backgroundColor = M : this.hasHeader() && (I.style.backgroundColor = "#f2f3f5");
      }
      return { element: I };
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        backgroundColor: this.getBackgroundColor(),
        colSpan: this.__colSpan,
        headerState: this.__headerState,
        rowSpan: this.__rowSpan,
        type: "tablecell",
        width: this.getWidth()
      };
    }
    getColSpan() {
      return this.__colSpan;
    }
    setColSpan(I) {
      return this.getWritable().__colSpan = I, this;
    }
    getRowSpan() {
      return this.__rowSpan;
    }
    setRowSpan(I) {
      return this.getWritable().__rowSpan = I, this;
    }
    getTag() {
      return this.hasHeader() ? "th" : "td";
    }
    setHeaderStyles(I) {
      return this.getWritable().__headerState = I, this.__headerState;
    }
    getHeaderStyles() {
      return this.getLatest().__headerState;
    }
    setWidth(I) {
      return this.getWritable().__width = I, this.__width;
    }
    getWidth() {
      return this.getLatest().__width;
    }
    getBackgroundColor() {
      return this.getLatest().__backgroundColor;
    }
    setBackgroundColor(I) {
      this.getWritable().__backgroundColor = I;
    }
    toggleHeaderStyle(I) {
      let M = this.getWritable();
      return M.__headerState = (M.__headerState & I) === I ? M.__headerState - I : M.__headerState + I, M;
    }
    hasHeaderState(I) {
      return (this.getHeaderStyles() & I) === I;
    }
    hasHeader() {
      return this.getLatest().__headerState !== n.NO_STATUS;
    }
    updateDOM(I) {
      return I.__headerState !== this.__headerState || I.__width !== this.__width || I.__colSpan !== this.__colSpan || I.__rowSpan !== this.__rowSpan || I.__backgroundColor !== this.__backgroundColor;
    }
    isShadowRoot() {
      return !0;
    }
    collapseAtStart() {
      return !0;
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
  }
  function l(P) {
    var I = P.nodeName.toLowerCase();
    let M;
    return e.test(P.style.width) && (M = parseFloat(P.style.width)), I = a(I === "th" ? n.ROW : n.NO_STATUS, P.colSpan, M), I.__rowSpan = P.rowSpan, P = P.style.backgroundColor, P !== "" && (I.__backgroundColor = P), { forChild: (U, q) => i(q) && !t.$isElementNode(U) ? (q = t.$createParagraphNode(), t.$isLineBreakNode(U) && U.getTextContent() === `
` ? null : (q.append(U), q)) : U, node: I };
  }
  function a(P, I = 1, M) {
    return t.$applyNodeReplacement(new o(P, I, M));
  }
  function i(P) {
    return P instanceof o;
  }
  let _ = t.createCommand("INSERT_TABLE_COMMAND");
  class m extends t.ElementNode {
    static getType() {
      return "tablerow";
    }
    static clone(I) {
      return new m(I.__height, I.__key);
    }
    static importDOM() {
      return { tr: () => ({ conversion: g, priority: 0 }) };
    }
    static importJSON(I) {
      return C(I.height);
    }
    constructor(I, M) {
      super(M), this.__height = I;
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "tablerow", version: 1 };
    }
    createDOM(I) {
      let M = document.createElement("tr");
      return this.__height && (M.style.height = `${this.__height}px`), r.addClassNamesToElement(M, I.theme.tableRow), M;
    }
    isShadowRoot() {
      return !0;
    }
    setHeight(I) {
      return this.getWritable().__height = I, this.__height;
    }
    getHeight() {
      return this.getLatest().__height;
    }
    updateDOM(I) {
      return I.__height !== this.__height;
    }
    canBeEmpty() {
      return !1;
    }
    canIndent() {
      return !1;
    }
  }
  function g(P) {
    let I;
    return e.test(P.style.height) && (I = parseFloat(P.style.height)), { node: C(I) };
  }
  function C(P) {
    return t.$applyNodeReplacement(new m(P));
  }
  function p(P) {
    return P instanceof m;
  }
  function s(P) {
    let I = new URLSearchParams();
    I.append("code", P);
    for (let M = 1; M < arguments.length; M++) I.append("v", arguments[M]);
    throw Error(`Minified Lexical error #${P}; visit https://lexical.dev/docs/error?${I} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  let u = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function c(P) {
    if (P = r.$findMatchingParent(P, (I) => p(I)), p(P)) return P;
    throw Error("Expected table cell to be inside of table row.");
  }
  function N(P) {
    if (P = r.$findMatchingParent(P, (I) => de(I)), de(P)) return P;
    throw Error("Expected table cell to be inside of table.");
  }
  function h(P, I) {
    let M = N(P), { x: U, y: q } = M.getCordsFromCellNode(P, I);
    return { above: M.getCellNodeFromCords(U, q - 1, I), below: M.getCellNodeFromCords(U, q + 1, I), left: M.getCellNodeFromCords(U - 1, q, I), right: M.getCellNodeFromCords(U + 1, q, I) };
  }
  let E = (P, I) => P === n.BOTH || P === I ? I : n.NO_STATUS;
  function d(P) {
    let I = P.getFirstDescendant();
    I == null ? P.selectStart() : I.getParentOrThrow().selectStart();
  }
  function f(P, I) {
    let M = P.getFirstChild();
    M !== null ? M.insertBefore(I) : P.append(I);
  }
  function y(P, I, M) {
    let U = [], q = null, Z = null;
    P = P.getChildren();
    for (let oe = 0; oe < P.length; oe++) {
      var J = P[oe];
      p(J) || s(146);
      var re = J.getChildren();
      J = 0;
      for (let se of re) {
        for (i(se) || s(147); U[oe] !== void 0 && U[oe][J] !== void 0; ) J++;
        re = oe;
        var ce = J, pe = se;
        let me = { cell: pe, startColumn: ce, startRow: re }, Ne = pe.__rowSpan, Oe = pe.__colSpan;
        for (let Te = 0; Te < Ne; Te++) {
          U[re + Te] === void 0 && (U[re + Te] = []);
          for (let He = 0; He < Oe; He++) U[re + Te][ce + He] = me;
        }
        I.is(pe) && (q = me), M.is(pe) && (Z = me), J += se.__colSpan;
      }
    }
    return q === null && s(110), Z === null && s(111), [U, q, Z];
  }
  function A(P) {
    P instanceof o || ("__type" in P ? (P = r.$findMatchingParent(P, i), i(P) || s(148)) : (P = r.$findMatchingParent(P.getNode(), i), i(P) || s(148)));
    let I = P.getParent();
    p(I) || s(149);
    let M = I.getParent();
    return de(M) || s(150), [P, I, M];
  }
  function v(P) {
    let [I, , M] = A(P);
    P = M.getChildren();
    let U = P.length;
    var q = P[0].getChildren().length;
    let Z = Array(U);
    for (var J = 0; J < U; J++) Z[J] = Array(q);
    for (q = 0; q < U; q++) {
      J = P[q].getChildren();
      let re = 0;
      for (let ce = 0; ce < J.length; ce++) {
        for (; Z[q][re]; ) re++;
        let pe = J[ce], oe = pe.__rowSpan || 1, se = pe.__colSpan || 1;
        for (let me = 0; me < oe; me++) for (let Ne = 0; Ne < se; Ne++) Z[q + me][re + Ne] = pe;
        if (I === pe) return { colSpan: se, columnIndex: re, rowIndex: q, rowSpan: oe };
        re += se;
      }
    }
    return null;
  }
  class O {
    constructor(I, M, U) {
      this.anchor = M, this.focus = U, M._selection = this, U._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = I;
    }
    getStartEndPoints() {
      return [this.anchor, this.focus];
    }
    isBackward() {
      return this.focus.isBefore(this.anchor);
    }
    getCachedNodes() {
      return this._cachedNodes;
    }
    setCachedNodes(I) {
      this._cachedNodes = I;
    }
    is(I) {
      return T(I) ? this.tableKey === I.tableKey && this.anchor.is(I.anchor) && this.focus.is(I.focus) : !1;
    }
    set(I, M, U) {
      this.dirty = !0, this.tableKey = I, this.anchor.key = M, this.focus.key = U, this._cachedNodes = null;
    }
    clone() {
      return new O(this.tableKey, this.anchor, this.focus);
    }
    isCollapsed() {
      return !1;
    }
    extract() {
      return this.getNodes();
    }
    insertRawText() {
    }
    insertText() {
    }
    insertNodes(I) {
      let M = this.focus.getNode();
      t.$isElementNode(M) || s(151), t.$normalizeSelection__EXPERIMENTAL(M.select(0, M.getChildrenSize())).insertNodes(I);
    }
    getShape() {
      var I = t.$getNodeByKey(this.anchor.key);
      i(I) || s(152), I = v(I), I === null && s(153);
      var M = t.$getNodeByKey(this.focus.key);
      i(M) || s(154);
      let U = v(M);
      U === null && s(155), M = Math.min(
        I.columnIndex,
        U.columnIndex
      );
      let q = Math.max(I.columnIndex, U.columnIndex), Z = Math.min(I.rowIndex, U.rowIndex);
      return I = Math.max(I.rowIndex, U.rowIndex), { fromX: Math.min(M, q), fromY: Math.min(Z, I), toX: Math.max(M, q), toY: Math.max(Z, I) };
    }
    getNodes() {
      function I(He) {
        let { cell: ht, startColumn: nt, startRow: Pe } = He;
        pe = Math.min(pe, nt), oe = Math.min(oe, Pe), se = Math.max(se, nt + ht.__colSpan - 1), me = Math.max(me, Pe + ht.__rowSpan - 1);
      }
      var M = this._cachedNodes;
      if (M !== null) return M;
      var U = this.anchor.getNode();
      M = this.focus.getNode();
      var q = r.$findMatchingParent(U, i);
      U = r.$findMatchingParent(
        M,
        i
      ), i(q) || s(152), i(U) || s(154), M = q.getParent(), p(M) || s(156), M = M.getParent(), de(M) || s(157);
      var Z = U.getParents()[1];
      if (Z !== M) return M.isParentOf(U) ? (M = Z.getParent(), M == null && s(159), this.set(this.tableKey, U.getKey(), M.getKey())) : (M = M.getParent(), M == null && s(158), this.set(this.tableKey, M.getKey(), U.getKey())), this.getNodes();
      let [J, re, ce] = y(M, q, U), pe = Math.min(re.startColumn, ce.startColumn), oe = Math.min(re.startRow, ce.startRow), se = Math.max(re.startColumn + re.cell.__colSpan - 1, ce.startColumn + ce.cell.__colSpan - 1), me = Math.max(re.startRow + re.cell.__rowSpan - 1, ce.startRow + ce.cell.__rowSpan - 1);
      U = pe, q = oe, Z = pe;
      for (var Ne = oe; pe < U || oe < q || se > Z || me > Ne; ) {
        if (pe < U) {
          var Oe = Ne - q;
          --U;
          for (var Te = 0; Te <= Oe; Te++) I(J[q + Te][U]);
        }
        if (oe < q) for (Oe = Z - U, --q, Te = 0; Te <= Oe; Te++) I(J[q][U + Te]);
        if (se > Z) for (Oe = Ne - q, Z += 1, Te = 0; Te <= Oe; Te++) I(J[q + Te][Z]);
        if (me > Ne) for (Oe = Z - U, Ne += 1, Te = 0; Te <= Oe; Te++) I(J[Ne][U + Te]);
      }
      for (M = [M], U = null, q = oe; q <= me; q++) for (Z = pe; Z <= se; Z++) ({ cell: Ne } = J[q][Z]), Oe = Ne.getParent(), p(Oe) || s(160), Oe !== U && M.push(Oe), M.push(Ne, ...b(Ne)), U = Oe;
      return t.isCurrentlyReadOnlyMode() || (this._cachedNodes = M), M;
    }
    getTextContent() {
      let I = this.getNodes(), M = "";
      for (let U = 0; U < I.length; U++) M += I[U].getTextContent();
      return M;
    }
  }
  function T(P) {
    return P instanceof O;
  }
  function S() {
    let P = t.$createPoint("root", 0, "element"), I = t.$createPoint("root", 0, "element");
    return new O("root", P, I);
  }
  function b(P) {
    let I = [], M = [P];
    for (; 0 < M.length; ) {
      let U = M.pop();
      U === void 0 && s(112), t.$isElementNode(U) && M.unshift(...U.getChildren()), U !== P && I.push(U);
    }
    return I;
  }
  class k {
    constructor(I, M) {
      this.isHighlightingCells = !1, this.focusY = this.focusX = this.anchorY = this.anchorX = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = M, this.editor = I, this.table = { columns: 0, domRows: [], rows: 0 }, this.focusCell = this.anchorCell = this.focusCellNodeKey = this.anchorCellNodeKey = this.tableSelection = null, this.hasHijackedSelectionStyles = !1, this.trackTable();
    }
    getTable() {
      return this.table;
    }
    removeListeners() {
      Array.from(this.listenersToRemove).forEach((I) => I());
    }
    trackTable() {
      let I = new MutationObserver((M) => {
        this.editor.update(() => {
          var U = !1;
          for (let q = 0; q < M.length; q++) {
            const Z = M[q].target.nodeName;
            if (Z === "TABLE" || Z === "TR") {
              U = !0;
              break;
            }
          }
          if (U) {
            if (U = this.editor.getElementByKey(this.tableNodeKey), !U) throw Error("Expected to find TableElement in DOM");
            this.table = K(U);
          }
        });
      });
      this.editor.update(() => {
        let M = this.editor.getElementByKey(this.tableNodeKey);
        if (!M) throw Error("Expected to find TableElement in DOM");
        this.table = K(M), I.observe(M, { childList: !0, subtree: !0 });
      });
    }
    clearHighlight() {
      let I = this.editor;
      this.isHighlightingCells = !1, this.focusY = this.focusX = this.anchorY = this.anchorX = -1, this.focusCell = this.anchorCell = this.focusCellNodeKey = this.anchorCellNodeKey = this.tableSelection = null, this.hasHijackedSelectionStyles = !1, this.enableHighlightStyle(), I.update(() => {
        var M = t.$getNodeByKey(this.tableNodeKey);
        if (!de(M)) throw Error("Expected TableNode.");
        if (M = I.getElementByKey(this.tableNodeKey), !M) throw Error("Expected to find TableElement in DOM");
        M = K(M), B(I, M, null), t.$setSelection(null), I.dispatchCommand(
          t.SELECTION_CHANGE_COMMAND,
          void 0
        );
      });
    }
    enableHighlightStyle() {
      let I = this.editor;
      I.update(() => {
        let M = I.getElementByKey(this.tableNodeKey);
        if (!M) throw Error("Expected to find TableElement in DOM");
        r.removeClassNamesFromElement(M, I._config.theme.tableSelection), M.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
      });
    }
    disableHighlightStyle() {
      let I = this.editor;
      I.update(() => {
        let M = I.getElementByKey(this.tableNodeKey);
        if (!M) throw Error("Expected to find TableElement in DOM");
        r.addClassNamesToElement(M, I._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
      });
    }
    updateTableTableSelection(I) {
      if (I !== null && I.tableKey === this.tableNodeKey) {
        let M = this.editor;
        this.tableSelection = I, this.isHighlightingCells = !0, this.disableHighlightStyle(), B(M, this.table, this.tableSelection);
      } else I == null ? this.clearHighlight() : (this.tableNodeKey = I.tableKey, this.updateTableTableSelection(I));
    }
    setFocusCellForSelection(I, M = !1) {
      let U = this.editor;
      U.update(() => {
        var q = t.$getNodeByKey(this.tableNodeKey);
        if (!de(q)) throw Error("Expected TableNode.");
        if (!U.getElementByKey(this.tableNodeKey)) throw Error("Expected to find TableElement in DOM");
        q = I.x;
        let Z = I.y;
        if (this.focusCell = I, this.anchorCell !== null) {
          let J = u ? (U._window || window).getSelection() : null;
          J && J.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
        }
        if (!this.isHighlightingCells && (this.anchorX !== q || this.anchorY !== Z || M)) this.isHighlightingCells = !0, this.disableHighlightStyle();
        else if (q === this.focusX && Z === this.focusY) return;
        this.focusX = q, this.focusY = Z, this.isHighlightingCells && (q = t.$getNearestNodeFromDOMNode(I.elem), this.tableSelection != null && this.anchorCellNodeKey != null && i(q) && (q = q.getKey(), this.tableSelection = this.tableSelection.clone() || S(), this.focusCellNodeKey = q, this.tableSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), t.$setSelection(this.tableSelection), U.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0), B(U, this.table, this.tableSelection)));
      });
    }
    setAnchorCellForSelection(I) {
      this.isHighlightingCells = !1, this.anchorCell = I, this.anchorX = I.x, this.anchorY = I.y, this.editor.update(() => {
        var M = t.$getNearestNodeFromDOMNode(I.elem);
        i(M) && (M = M.getKey(), this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : S(), this.anchorCellNodeKey = M);
      });
    }
    formatCells(I) {
      this.editor.update(() => {
        let M = t.$getSelection();
        T(M) || s(11);
        let U = t.$createRangeSelection(), q = U.anchor, Z = U.focus;
        M.getNodes().forEach((J) => {
          i(J) && J.getTextContentSize() !== 0 && (q.set(J.getKey(), 0, "element"), Z.set(J.getKey(), J.getChildrenSize(), "element"), U.formatText(I));
        }), t.$setSelection(M), this.editor.dispatchCommand(t.SELECTION_CHANGE_COMMAND, void 0);
      });
    }
    clearText() {
      let I = this.editor;
      I.update(() => {
        let M = t.$getNodeByKey(this.tableNodeKey);
        if (!de(M)) throw Error("Expected TableNode.");
        var U = t.$getSelection();
        T(U) || s(11), U = U.getNodes().filter(i), U.length === this.table.columns * this.table.rows ? (M.selectPrevious(), M.remove(), t.$getRoot().selectStart()) : (U.forEach((q) => {
          if (t.$isElementNode(q)) {
            let Z = t.$createParagraphNode(), J = t.$createTextNode();
            Z.append(J), q.append(Z), q.getChildren().forEach((re) => {
              re !== Z && re.remove();
            });
          }
        }), B(I, this.table, null), t.$setSelection(null), I.dispatchCommand(
          t.SELECTION_CHANGE_COMMAND,
          void 0
        ));
      });
    }
  }
  function H(P) {
    for (; P != null; ) {
      let I = P.nodeName;
      if (I === "TD" || I === "TH") {
        if (P = P._cell, P === void 0) break;
        return P;
      }
      P = P.parentNode;
    }
    return null;
  }
  function K(P) {
    let I = [], M = { columns: 0, domRows: I, rows: 0 };
    var U = P.firstChild;
    let q = P = 0;
    for (I.length = 0; U != null; ) {
      var Z = U.nodeName;
      if (Z === "TD" || Z === "TH") {
        Z = U, Z = { elem: Z, hasBackgroundColor: Z.style.backgroundColor !== "", highlighted: !1, x: P, y: q }, U._cell = Z;
        let J = I[q];
        J === void 0 && (J = I[q] = []), J[P] = Z;
      } else if (Z = U.firstChild, Z != null) {
        U = Z;
        continue;
      }
      if (Z = U.nextSibling, Z != null) P++, U = Z;
      else if (Z = U.parentNode, Z != null) {
        if (U = Z.nextSibling, U == null) break;
        q++, P = 0;
      }
    }
    return M.columns = P + 1, M.rows = q + 1, M;
  }
  function B(P, I, M) {
    let U = new Set(M ? M.getNodes() : []);
    w(I, (q, Z) => {
      let J = q.elem;
      U.has(Z) ? (q.highlighted = !0, W(P, q)) : (q.highlighted = !1, L(P, q), J.getAttribute("style") || J.removeAttribute("style"));
    });
  }
  function w(P, I) {
    ({ domRows: P } = P);
    for (let M = 0; M < P.length; M++) {
      let U = P[M];
      if (U) for (let q = 0; q < U.length; q++) {
        let Z = U[q];
        if (!Z) continue;
        let J = t.$getNearestNodeFromDOMNode(Z.elem);
        J !== null && I(Z, J, { x: q, y: M });
      }
    }
  }
  function x(P, I) {
    I.disableHighlightStyle(), w(I.table, (M) => {
      M.highlighted = !0, W(P, M);
    });
  }
  function D(P, I) {
    I.enableHighlightStyle(), w(I.table, (M) => {
      let U = M.elem;
      M.highlighted = !1, L(P, M), U.getAttribute("style") || U.removeAttribute("style");
    });
  }
  let Y = (P, I, M, U, q) => {
    const Z = q === "forward";
    switch (q) {
      case "backward":
      case "forward":
        return M !== (Z ? P.table.columns - 1 : 0) ? (P = I.getCellNodeFromCordsOrThrow(M + (Z ? 1 : -1), U, P.table), Z ? P.selectStart() : P.selectEnd()) : U !== (Z ? P.table.rows - 1 : 0) ? (P = I.getCellNodeFromCordsOrThrow(Z ? 0 : P.table.columns - 1, U + (Z ? 1 : -1), P.table), Z ? P.selectStart() : P.selectEnd()) : Z ? I.selectNext() : I.selectPrevious(), !0;
      case "up":
        return U !== 0 ? I.getCellNodeFromCordsOrThrow(M, U - 1, P.table).selectEnd() : I.selectPrevious(), !0;
      case "down":
        return U !== P.table.rows - 1 ? I.getCellNodeFromCordsOrThrow(M, U + 1, P.table).selectStart() : I.selectNext(), !0;
      default:
        return !1;
    }
  }, j = (P, I, M, U, q) => {
    const Z = q === "forward";
    switch (q) {
      case "backward":
      case "forward":
        return M !== (Z ? P.table.columns - 1 : 0) && P.setFocusCellForSelection(I.getDOMCellFromCordsOrThrow(M + (Z ? 1 : -1), U, P.table)), !0;
      case "up":
        return U !== 0 ? (P.setFocusCellForSelection(I.getDOMCellFromCordsOrThrow(M, U - 1, P.table)), !0) : !1;
      case "down":
        return U !== P.table.rows - 1 ? (P.setFocusCellForSelection(I.getDOMCellFromCordsOrThrow(
          M,
          U + 1,
          P.table
        )), !0) : !1;
      default:
        return !1;
    }
  };
  function $(P, I) {
    if (t.$isRangeSelection(P) || T(P)) {
      let M = I.isParentOf(P.anchor.getNode());
      return P = I.isParentOf(P.focus.getNode()), M && P;
    }
    return !1;
  }
  function W(P, I) {
    P = I.elem, I = t.$getNearestNodeFromDOMNode(P), i(I) || s(131), I.getBackgroundColor() === null ? P.style.setProperty("background-color", "rgb(172,206,247)") : P.style.setProperty("background-image", "linear-gradient(to right, rgba(172,206,247,0.85), rgba(172,206,247,0.85))"), P.style.setProperty("caret-color", "transparent");
  }
  function L(P, I) {
    P = I.elem, I = t.$getNearestNodeFromDOMNode(P), i(I) || s(131), I.getBackgroundColor() === null && P.style.removeProperty("background-color"), P.style.removeProperty("background-image"), P.style.removeProperty("caret-color");
  }
  function F(P) {
    return P = r.$findMatchingParent(P, i), i(P) ? P : null;
  }
  function z(P) {
    return P = r.$findMatchingParent(P, de), de(P) ? P : null;
  }
  function V(P, I, M, U, q) {
    let Z = t.$getSelection();
    if (!$(Z, U)) return !1;
    if (t.$isRangeSelection(Z) && Z.isCollapsed()) {
      if (M === "backward" || M === "forward") return !1;
      let { anchor: pe, focus: oe } = Z;
      var J = r.$findMatchingParent(pe.getNode(), i), re = r.$findMatchingParent(oe.getNode(), i);
      if (!i(J) || !J.is(re)) return !1;
      if (re = z(J), re !== U && re != null) {
        var ce = P.getElementByKey(re.getKey());
        if (ce != null) return q.table = K(ce), V(P, I, M, re, q);
      }
      if (re = P.getElementByKey(J.__key), ce = P.getElementByKey(pe.key), ce == null || re == null) return !1;
      if (pe.type === "element") re = ce.getBoundingClientRect();
      else {
        if (re = window.getSelection(), re === null || re.rangeCount === 0) return !1;
        re = re.getRangeAt(0).getBoundingClientRect();
      }
      if (ce = M === "up" ? J.getFirstChild() : J.getLastChild(), ce == null || (P = P.getElementByKey(ce.__key), P == null)) return !1;
      if (P = P.getBoundingClientRect(), M === "up" ? P.top > re.top - re.height : re.bottom + re.height > P.bottom) {
        if (Q(I), P = U.getCordsFromCellNode(J, q.table), I.shiftKey) M = U.getDOMCellFromCordsOrThrow(P.x, P.y, q.table), q.setAnchorCellForSelection(M), q.setFocusCellForSelection(
          M,
          !0
        );
        else return Y(q, U, P.x, P.y, M);
        return !0;
      }
    } else if (T(Z)) {
      let { anchor: pe, focus: oe } = Z;
      return ce = r.$findMatchingParent(pe.getNode(), i), re = r.$findMatchingParent(oe.getNode(), i), [J] = Z.getNodes(), P = P.getElementByKey(J.getKey()), !i(ce) || !i(re) || !de(J) || P == null ? !1 : (q.updateTableTableSelection(Z), P = K(P), ce = U.getCordsFromCellNode(ce, P), ce = U.getDOMCellFromCordsOrThrow(ce.x, ce.y, P), q.setAnchorCellForSelection(ce), Q(I), I.shiftKey ? (I = U.getCordsFromCellNode(re, P), j(q, J, I.x, I.y, M)) : (re.selectEnd(), !0));
    }
    return !1;
  }
  function Q(P) {
    P.preventDefault(), P.stopImmediatePropagation(), P.stopPropagation();
  }
  class le extends t.ElementNode {
    static getType() {
      return "table";
    }
    static clone(I) {
      return new le(I.__key);
    }
    static importDOM() {
      return { table: () => ({ conversion: fe, priority: 1 }) };
    }
    static importJSON() {
      return ue();
    }
    constructor(I) {
      super(I);
    }
    exportJSON() {
      return { ...super.exportJSON(), type: "table", version: 1 };
    }
    createDOM(I) {
      let M = document.createElement("table");
      return r.addClassNamesToElement(M, I.theme.table), M;
    }
    updateDOM() {
      return !1;
    }
    exportDOM(I) {
      return { ...super.exportDOM(I), after: (M) => {
        if (M) {
          let U = M.cloneNode(), q = document.createElement("colgroup"), Z = document.createElement("tbody");
          if (r.isHTMLElement(M) && Z.append(...M.children), M = this.getFirstChildOrThrow(), !p(M)) throw Error("Expected to find row node.");
          M = M.getChildrenSize();
          for (let J = 0; J < M; J++) {
            let re = document.createElement("col");
            q.append(re);
          }
          return U.replaceChildren(q, Z), U;
        }
      } };
    }
    canExtractContents() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isShadowRoot() {
      return !0;
    }
    getCordsFromCellNode(I, M) {
      let { rows: U, domRows: q } = M;
      for (M = 0; M < U; M++) {
        var Z = q[M];
        if (Z != null && (Z = Z.findIndex((J) => {
          if (J) return { elem: J } = J, t.$getNearestNodeFromDOMNode(J) === I;
        }), Z !== -1)) return { x: Z, y: M };
      }
      throw Error("Cell not found in table.");
    }
    getDOMCellFromCords(I, M, U) {
      return { domRows: U } = U, M = U[M], M == null ? null : (I = M[I], I ?? null);
    }
    getDOMCellFromCordsOrThrow(I, M, U) {
      if (I = this.getDOMCellFromCords(I, M, U), !I) throw Error("Cell not found at cords.");
      return I;
    }
    getCellNodeFromCords(I, M, U) {
      return I = this.getDOMCellFromCords(I, M, U), I == null ? null : (I = t.$getNearestNodeFromDOMNode(I.elem), i(I) ? I : null);
    }
    getCellNodeFromCordsOrThrow(I, M, U) {
      if (I = this.getCellNodeFromCords(
        I,
        M,
        U
      ), !I) throw Error("Node at cords not TableCellNode.");
      return I;
    }
    canSelectBefore() {
      return !0;
    }
    canIndent() {
      return !1;
    }
  }
  function fe() {
    return { node: ue() };
  }
  function ue() {
    return t.$applyNodeReplacement(new le());
  }
  function de(P) {
    return P instanceof le;
  }
  return Ve.$computeTableMap = y, Ve.$createTableCellNode = a, Ve.$createTableNode = ue, Ve.$createTableNodeWithDimensions = function(P, I, M = !0) {
    let U = ue();
    for (let Z = 0; Z < P; Z++) {
      let J = C();
      for (let re = 0; re < I; re++) {
        var q = n.NO_STATUS;
        typeof M == "object" ? (Z === 0 && M.rows && (q |= n.ROW), re === 0 && M.columns && (q |= n.COLUMN)) : M && (Z === 0 && (q |= n.ROW), re === 0 && (q |= n.COLUMN)), q = a(q);
        let ce = t.$createParagraphNode();
        ce.append(t.$createTextNode()), q.append(ce), J.append(q);
      }
      U.append(J);
    }
    return U;
  }, Ve.$createTableRowNode = C, Ve.$createTableSelection = S, Ve.$deleteTableColumn = function(P, I) {
    let M = P.getChildren();
    for (let q = 0; q < M.length; q++) {
      var U = M[q];
      if (p(U)) {
        if (U = U.getChildren(), I >= U.length || 0 > I) throw Error("Table column target index out of range");
        U[I].remove();
      }
    }
    return P;
  }, Ve.$deleteTableColumn__EXPERIMENTAL = function() {
    var P = t.$getSelection();
    t.$isRangeSelection(P) || T(P) || s(118);
    var I = P.anchor.getNode();
    P = P.focus.getNode();
    let [M, , U] = A(I);
    [I] = A(P);
    let [q, Z, J] = y(U, M, I);
    var { startColumn: re } = Z;
    let { startRow: ce, startColumn: pe } = J;
    P = Math.min(re, pe), re = Math.max(re + M.__colSpan - 1, pe + I.__colSpan - 1);
    let oe = re - P + 1;
    if (q[0].length === re - P + 1) U.selectPrevious(), U.remove();
    else {
      var se = q.length;
      for (let me = 0; me < se; me++) for (let Ne = P; Ne <= re; Ne++) {
        let { cell: Oe, startColumn: Te } = q[me][Ne];
        Te < P ? Ne === P && Oe.setColSpan(Oe.__colSpan - Math.min(oe, Oe.__colSpan - (P - Te))) : Te + Oe.__colSpan - 1 > re ? Ne === re && Oe.setColSpan(Oe.__colSpan - (re - Te + 1)) : Oe.remove();
      }
      P = q[ce], I = P[pe + I.__colSpan], I !== void 0 ? ({ cell: I } = I, d(I)) : ({ cell: I } = P[pe - 1], d(I));
    }
  }, Ve.$deleteTableRow__EXPERIMENTAL = function() {
    var P = t.$getSelection();
    t.$isRangeSelection(P) || T(P) || s(118);
    var I = P.anchor.getNode();
    P = P.focus.getNode();
    let [M, , U] = A(I);
    [P] = A(P);
    let [q, Z, J] = y(U, M, P);
    ({ startRow: I } = Z);
    var { startRow: re } = J;
    if (P = re + P.__rowSpan - 1, q.length === P - I + 1) U.remove();
    else {
      re = q[0].length;
      var ce = q[P + 1], pe = U.getChildAtIndex(P + 1);
      for (let se = P; se >= I; se--) {
        for (var oe = re - 1; 0 <= oe; oe--) {
          let { cell: me, startRow: Ne, startColumn: Oe } = q[se][oe];
          if (Oe === oe && (se === I && Ne < I && me.setRowSpan(me.__rowSpan - (Ne - I)), Ne >= I && Ne + me.__rowSpan - 1 > P)) if (me.setRowSpan(me.__rowSpan - (P - Ne + 1)), pe === null && s(122), oe === 0) f(pe, me);
          else {
            let { cell: Te } = ce[oe - 1];
            Te.insertAfter(me);
          }
        }
        oe = U.getChildAtIndex(se), p(oe) || s(123, String(se)), oe.remove();
      }
      ce !== void 0 ? ({ cell: I } = ce[0], d(I)) : ({ cell: I } = q[I - 1][0], d(I));
    }
  }, Ve.$getElementForTableNode = function(P, I) {
    if (P = P.getElementByKey(I.getKey()), P == null) throw Error("Table Element Not Found");
    return K(P);
  }, Ve.$getNodeTriplet = A, Ve.$getTableCellNodeFromLexicalNode = function(P) {
    return P = r.$findMatchingParent(P, (I) => i(I)), i(P) ? P : null;
  }, Ve.$getTableCellNodeRect = v, Ve.$getTableColumnIndexFromTableCellNode = function(P) {
    return c(P).getChildren().findIndex((I) => I.is(P));
  }, Ve.$getTableNodeFromLexicalNodeOrThrow = N, Ve.$getTableRowIndexFromTableCellNode = function(P) {
    let I = c(P);
    return N(I).getChildren().findIndex((M) => M.is(I));
  }, Ve.$getTableRowNodeFromTableCellNodeOrThrow = c, Ve.$insertTableColumn = function(P, I, M = !0, U, q) {
    let Z = P.getChildren(), J = [];
    for (let pe = 0; pe < Z.length; pe++) {
      let oe = Z[pe];
      if (p(oe)) for (let se = 0; se < U; se++) {
        var re = oe.getChildren();
        if (I >= re.length || 0 > I) throw Error("Table column target index out of range");
        re = re[I], i(re) || s(12);
        let { left: me, right: Ne } = h(re, q);
        var ce = n.NO_STATUS;
        (me && me.hasHeaderState(n.ROW) || Ne && Ne.hasHeaderState(n.ROW)) && (ce |= n.ROW), ce = a(ce), ce.append(t.$createParagraphNode()), J.push({ newTableCell: ce, targetCell: re });
      }
    }
    return J.forEach(({ newTableCell: pe, targetCell: oe }) => {
      M ? oe.insertAfter(pe) : oe.insertBefore(pe);
    }), P;
  }, Ve.$insertTableColumn__EXPERIMENTAL = function(P = !0) {
    function I(se = n.NO_STATUS) {
      return se = a(se).append(t.$createParagraphNode()), pe === null && (pe = se), se;
    }
    var M = t.$getSelection();
    t.$isRangeSelection(M) || T(M) || s(118);
    var U = M.anchor.getNode();
    M = M.focus.getNode(), [U] = A(U);
    let [q, , Z] = A(M), [J, re, ce] = y(Z, q, U);
    U = J.length, M = P ? Math.max(re.startColumn, ce.startColumn) : Math.min(re.startColumn, ce.startColumn), P = P ? M + q.__colSpan - 1 : M - 1, M = Z.getFirstChild(), p(M) || s(120);
    let pe = null;
    var oe = M;
    e: for (M = 0; M < U; M++) {
      M !== 0 && (oe = oe.getNextSibling(), p(oe) || s(121));
      let se = J[M], me = E(se[0 > P ? 0 : P].cell.__headerState, n.ROW);
      if (0 > P) {
        f(oe, I(me));
        continue;
      }
      let { cell: Ne, startColumn: Oe, startRow: Te } = se[P];
      if (Oe + Ne.__colSpan - 1 <= P) {
        let He = Ne, ht = Te, nt = P;
        for (; ht !== M && 1 < He.__rowSpan; ) if (nt -= Ne.__colSpan, 0 <= nt) {
          let { cell: Pe, startRow: te } = se[nt];
          He = Pe, ht = te;
        } else {
          oe.append(I(me));
          continue e;
        }
        He.insertAfter(I(me));
      } else Ne.setColSpan(Ne.__colSpan + 1);
    }
    pe !== null && d(pe);
  }, Ve.$insertTableRow = function(P, I, M = !0, U, q) {
    var Z = P.getChildren();
    if (I >= Z.length || 0 > I) throw Error("Table row target index out of range");
    if (I = Z[I], p(I)) for (Z = 0; Z < U; Z++) {
      let re = I.getChildren(), ce = re.length, pe = C();
      for (let oe = 0; oe < ce; oe++) {
        var J = re[oe];
        i(J) || s(12);
        let { above: se, below: me } = h(J, q);
        J = n.NO_STATUS;
        let Ne = se && se.getWidth() || me && me.getWidth() || void 0;
        (se && se.hasHeaderState(n.COLUMN) || me && me.hasHeaderState(n.COLUMN)) && (J |= n.COLUMN), J = a(J, 1, Ne), J.append(t.$createParagraphNode()), pe.append(J);
      }
      M ? I.insertAfter(pe) : I.insertBefore(pe);
    }
    else throw Error("Row before insertion index does not exist.");
    return P;
  }, Ve.$insertTableRow__EXPERIMENTAL = function(P = !0) {
    var I = t.$getSelection();
    t.$isRangeSelection(I) || T(I) || s(118), I = I.focus.getNode();
    let [M, , U] = A(I), [q, Z] = y(U, M, M);
    I = q[0].length;
    var { startRow: J } = Z;
    if (P) {
      P = J + M.__rowSpan - 1;
      var re = q[P];
      J = C();
      for (var ce = 0; ce < I; ce++) {
        let { cell: oe, startRow: se } = re[ce];
        if (se + oe.__rowSpan - 1 <= P) {
          var pe = E(re[ce].cell.__headerState, n.COLUMN);
          J.append(a(pe).append(t.$createParagraphNode()));
        } else oe.setRowSpan(oe.__rowSpan + 1);
      }
      I = U.getChildAtIndex(P), p(I) || s(145), I.insertAfter(J);
    } else {
      for (re = q[J], P = C(), ce = 0; ce < I; ce++) {
        let { cell: oe, startRow: se } = re[ce];
        se === J ? (pe = E(re[ce].cell.__headerState, n.COLUMN), P.append(a(pe).append(t.$createParagraphNode()))) : oe.setRowSpan(oe.__rowSpan + 1);
      }
      I = U.getChildAtIndex(J), p(I) || s(145), I.insertBefore(P);
    }
  }, Ve.$isTableCellNode = i, Ve.$isTableNode = de, Ve.$isTableRowNode = p, Ve.$isTableSelection = T, Ve.$removeTableRowAtIndex = function(P, I) {
    let M = P.getChildren();
    if (I >= M.length || 0 > I) throw Error("Expected table cell to be inside of table row.");
    return M[I].remove(), P;
  }, Ve.$unmergeCell = function() {
    var P = t.$getSelection();
    t.$isRangeSelection(P) || T(P) || s(118), P = P.anchor.getNode();
    let [I, M, U] = A(P);
    P = I.__colSpan;
    let q = I.__rowSpan;
    if (1 < P) {
      for (var Z = 1; Z < P; Z++) I.insertAfter(a(n.NO_STATUS));
      I.setColSpan(1);
    }
    if (1 < q) {
      let [ce, pe] = y(U, I, I), { startColumn: oe, startRow: se } = pe, me;
      for (Z = 1; Z < q; Z++) {
        var J = se + Z;
        let Ne = ce[J];
        me = (me || M).getNextSibling(), p(me) || s(125);
        var re = null;
        for (let Oe = 0; Oe < oe; Oe++) {
          let Te = Ne[Oe], He = Te.cell;
          Te.startRow === J && (re = He), 1 < He.__colSpan && (Oe += He.__colSpan - 1);
        }
        if (re === null) for (re = 0; re < P; re++) f(me, a(n.NO_STATUS));
        else for (J = 0; J < P; J++) re.insertAfter(a(n.NO_STATUS));
      }
      I.setRowSpan(1);
    }
  }, Ve.INSERT_TABLE_COMMAND = _, Ve.TableCellHeaderStates = n, Ve.TableCellNode = o, Ve.TableNode = le, Ve.TableObserver = k, Ve.TableRowNode = m, Ve.applyTableHandlers = function(P, I, M, U) {
    function q(oe) {
      return oe = P.getCordsFromCellNode(oe, J.table), P.getDOMCellFromCordsOrThrow(oe.x, oe.y, J.table);
    }
    let Z = M.getRootElement();
    if (Z === null) throw Error("No root element.");
    let J = new k(M, P.getKey()), re = M._window || window;
    I.__lexicalTableSelection = J, I.addEventListener("mousedown", (oe) => {
      setTimeout(() => {
        if (oe.button === 0 && re) {
          var se = H(oe.target);
          se !== null && (Q(oe), J.setAnchorCellForSelection(se));
          var me = () => {
            re.removeEventListener("mouseup", me), re.removeEventListener(
              "mousemove",
              Ne
            );
          }, Ne = (Oe) => {
            const Te = H(Oe.target);
            Te === null || J.anchorX === Te.x && J.anchorY === Te.y || (Oe.preventDefault(), J.setFocusCellForSelection(Te));
          };
          re.addEventListener("mouseup", me), re.addEventListener("mousemove", Ne);
        }
      }, 0);
    });
    let ce = (oe) => {
      oe.button === 0 && M.update(() => {
        const se = t.$getSelection(), me = oe.target;
        T(se) && se.tableKey === J.tableNodeKey && Z.contains(me) && J.clearHighlight();
      });
    };
    re.addEventListener("mousedown", ce), J.listenersToRemove.add(() => re.removeEventListener("mousedown", ce)), J.listenersToRemove.add(M.registerCommand(
      t.KEY_ARROW_DOWN_COMMAND,
      (oe) => V(M, oe, "down", P, J),
      t.COMMAND_PRIORITY_HIGH
    )), J.listenersToRemove.add(M.registerCommand(t.KEY_ARROW_UP_COMMAND, (oe) => V(M, oe, "up", P, J), t.COMMAND_PRIORITY_HIGH)), J.listenersToRemove.add(M.registerCommand(t.KEY_ARROW_LEFT_COMMAND, (oe) => V(M, oe, "backward", P, J), t.COMMAND_PRIORITY_HIGH)), J.listenersToRemove.add(M.registerCommand(t.KEY_ARROW_RIGHT_COMMAND, (oe) => V(M, oe, "forward", P, J), t.COMMAND_PRIORITY_HIGH)), J.listenersToRemove.add(M.registerCommand(t.KEY_ESCAPE_COMMAND, (oe) => {
      var se = t.$getSelection();
      return T(se) && (se = r.$findMatchingParent(
        se.focus.getNode(),
        i
      ), i(se)) ? (Q(oe), se.selectEnd(), !0) : !1;
    }, t.COMMAND_PRIORITY_HIGH));
    let pe = (oe) => () => {
      var se = t.$getSelection();
      if (!$(se, P)) return !1;
      if (T(se)) return J.clearText(), !0;
      if (t.$isRangeSelection(se)) {
        const Oe = r.$findMatchingParent(se.anchor.getNode(), (Te) => i(Te));
        if (!i(Oe)) return !1;
        var me = se.anchor.getNode(), Ne = se.focus.getNode();
        if (me = P.isParentOf(me), Ne = P.isParentOf(Ne), me && !Ne || Ne && !me) return J.clearText(), !0;
        if (me = (Ne = r.$findMatchingParent(se.anchor.getNode(), (Te) => t.$isElementNode(Te))) && r.$findMatchingParent(Ne, (Te) => t.$isElementNode(Te) && i(Te.getParent())), !t.$isElementNode(me) || !t.$isElementNode(Ne)) return !1;
        if (oe === t.DELETE_LINE_COMMAND && me.getPreviousSibling() === null) return !0;
        if ((oe === t.DELETE_CHARACTER_COMMAND || oe === t.DELETE_WORD_COMMAND) && se.isCollapsed() && se.anchor.offset === 0 && Ne !== me) {
          se = Ne.getChildren();
          const Te = t.$createParagraphNode();
          return se.forEach((He) => Te.append(He)), Ne.replace(Te), Ne.getWritable().__parent = Oe.getKey(), !0;
        }
      }
      return !1;
    };
    return [t.DELETE_WORD_COMMAND, t.DELETE_LINE_COMMAND, t.DELETE_CHARACTER_COMMAND].forEach((oe) => {
      J.listenersToRemove.add(M.registerCommand(
        oe,
        pe(oe),
        t.COMMAND_PRIORITY_CRITICAL
      ));
    }), I = (oe) => {
      const se = t.$getSelection();
      return $(se, P) ? T(se) ? (oe.preventDefault(), oe.stopPropagation(), J.clearText(), !0) : (t.$isRangeSelection(se) && (oe = r.$findMatchingParent(se.anchor.getNode(), (me) => i(me)), i(oe)), !1) : !1;
    }, J.listenersToRemove.add(M.registerCommand(t.KEY_BACKSPACE_COMMAND, I, t.COMMAND_PRIORITY_CRITICAL)), J.listenersToRemove.add(M.registerCommand(t.KEY_DELETE_COMMAND, I, t.COMMAND_PRIORITY_CRITICAL)), J.listenersToRemove.add(M.registerCommand(
      t.FORMAT_TEXT_COMMAND,
      (oe) => {
        let se = t.$getSelection();
        return $(se, P) ? T(se) ? (J.formatCells(oe), !0) : (t.$isRangeSelection(se) && (oe = r.$findMatchingParent(se.anchor.getNode(), (me) => i(me)), i(oe)), !1) : !1;
      },
      t.COMMAND_PRIORITY_CRITICAL
    )), J.listenersToRemove.add(M.registerCommand(t.CONTROLLED_TEXT_INSERTION_COMMAND, () => {
      var oe = t.$getSelection();
      return $(oe, P) && (T(oe) ? J.clearHighlight() : t.$isRangeSelection(oe) && (oe = r.$findMatchingParent(oe.anchor.getNode(), (se) => i(se)), i(oe))), !1;
    }, t.COMMAND_PRIORITY_CRITICAL)), U && J.listenersToRemove.add(M.registerCommand(
      t.KEY_TAB_COMMAND,
      (oe) => {
        var se = t.$getSelection();
        return !t.$isRangeSelection(se) || !se.isCollapsed() || !$(se, P) || (se = F(se.anchor.getNode()), se === null) ? !1 : (Q(oe), se = P.getCordsFromCellNode(se, J.table), Y(J, P, se.x, se.y, oe.shiftKey ? "backward" : "forward"), !0);
      },
      t.COMMAND_PRIORITY_CRITICAL
    )), J.listenersToRemove.add(M.registerCommand(t.FOCUS_COMMAND, () => P.isSelected(), t.COMMAND_PRIORITY_HIGH)), J.listenersToRemove.add(M.registerCommand(t.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, (oe) => {
      let { nodes: se, selection: me } = oe;
      oe = me.getStartEndPoints();
      var Ne = T(me);
      if (Ne = t.$isRangeSelection(me) && r.$findMatchingParent(me.anchor.getNode(), (ae) => i(ae)) !== null && r.$findMatchingParent(me.focus.getNode(), (ae) => i(ae)) !== null || Ne, se.length !== 1 || !de(se[0]) || !Ne || oe === null) return !1;
      var [Oe] = oe, Te = se[0];
      oe = Te.getChildren(), Ne = Te.getFirstChildOrThrow().getChildrenSize(), Te = Te.getChildrenSize();
      var He = r.$findMatchingParent(Oe.getNode(), (ae) => i(ae)), ht = (Oe = He && r.$findMatchingParent(He, (ae) => p(ae))) && r.$findMatchingParent(Oe, (ae) => de(ae));
      if (!i(He) || !p(Oe) || !de(ht)) return !1;
      var nt = Oe.getIndexWithinParent(), Pe = Math.min(ht.getChildrenSize() - 1, nt + Te - 1);
      Te = He.getIndexWithinParent(), He = Math.min(Oe.getChildrenSize() - 1, Te + Ne - 1), Ne = Math.min(Te, He), Oe = Math.min(nt, Pe), Te = Math.max(Te, He), nt = Math.max(nt, Pe), ht = ht.getChildren(), Pe = 0;
      let te, G;
      for (He = Oe; He <= nt; He++) {
        var X = ht[He];
        if (!p(X)) return !1;
        var ne = oe[Pe];
        if (!p(ne)) return !1;
        X = X.getChildren(), ne = ne.getChildren();
        let ae = 0;
        for (let ie = Ne; ie <= Te; ie++) {
          let _e = X[ie];
          if (!i(_e)) return !1;
          let ye = ne[ae];
          if (!i(ye)) return !1;
          He === Oe && ie === Ne ? te = _e.getKey() : He === nt && ie === Te && (G = _e.getKey());
          let Se = _e.getChildren();
          ye.getChildren().forEach((xe) => {
            t.$isTextNode(xe) && t.$createParagraphNode().append(xe), _e.append(xe);
          }), Se.forEach((xe) => xe.remove()), ae++;
        }
        Pe++;
      }
      return te && G && (oe = S(), oe.set(se[0].getKey(), te, G), t.$setSelection(oe)), !0;
    }, t.COMMAND_PRIORITY_CRITICAL)), J.listenersToRemove.add(M.registerCommand(t.SELECTION_CHANGE_COMMAND, () => {
      let oe = t.$getSelection(), se = t.$getPreviousSelection();
      if (t.$isRangeSelection(oe)) {
        let { anchor: He, focus: ht } = oe;
        var me = He.getNode(), Ne = ht.getNode();
        me = F(me), Ne = F(Ne);
        var Oe = me && P.is(z(me)), Te = Ne && P.is(z(Ne));
        let nt = Oe !== Te;
        Te = Oe && Te, Oe = oe.isBackward(), nt ? (me = oe.clone(), me.focus.set(
          P.getKey(),
          Oe ? 0 : P.getChildrenSize(),
          "element"
        ), t.$setSelection(me), x(M, J)) : Te && !me.is(Ne) && (J.setAnchorCellForSelection(q(me)), J.setFocusCellForSelection(q(Ne), !0));
      }
      return oe && !oe.is(se) && (T(oe) || T(se)) && J.tableSelection && !J.tableSelection.is(se) ? (T(oe) && oe.tableKey === J.tableNodeKey ? J.updateTableTableSelection(oe) : !T(oe) && T(se) && se.tableKey === J.tableNodeKey && J.updateTableTableSelection(null), !1) : (J.hasHijackedSelectionStyles && !P.isSelected() ? D(M, J) : !J.hasHijackedSelectionStyles && P.isSelected() && x(M, J), !1);
    }, t.COMMAND_PRIORITY_CRITICAL)), J;
  }, Ve.getDOMCellFromTarget = H, Ve.getTableObserverFromTableElement = function(P) {
    return P.__lexicalTableSelection;
  }, Ve;
}
const Ru = process.env.NODE_ENV === "development" ? Ou() : wu();
var $e = Ru, at = Ye(), Mu = ur(), qe = Ke();
function Au({ nodeKey: r }) {
  const [t] = at.useLexicalComposerContext(), [e, n, o] = Mu.useLexicalNodeSelection(r), l = We(
    (a) => {
      if (a.preventDefault(), e && zo(et())) {
        const i = Go(r);
        if (Du(i))
          return i.remove(), !0;
      }
      return !1;
    },
    [e, r]
  );
  return De(() => qe.mergeRegister(
    t.registerCommand(
      ia,
      (a) => {
        const i = t.getElementByKey(r);
        return a.target === i ? (a.shiftKey || o(), n(!e), !0) : !1;
      },
      _t
    ),
    t.registerCommand(
      Cc,
      l,
      _t
    ),
    t.registerCommand(
      xc,
      l,
      _t
    )
  ), [o, t, e, r, l, n]), De(() => {
    const a = t.getElementByKey(r);
    a !== null && (a.className = e ? "selected" : "");
  }, [t, e, r]), null;
}
class Pn extends ln {
  static getType() {
    return "page-break";
  }
  static clone(t) {
    return new Pn(t.__key);
  }
  static importJSON() {
    return ti();
  }
  static importDOM() {
    return {
      figure: (t) => t.getAttribute("type") !== this.getType() ? null : {
        conversion: Lu,
        priority: on
      }
    };
  }
  exportJSON() {
    return {
      type: this.getType(),
      version: 1
    };
  }
  createDOM() {
    const t = document.createElement("figure");
    return t.style.pageBreakAfter = "always", t.setAttribute("type", this.getType()), t;
  }
  getTextContent() {
    return `
`;
  }
  isInline() {
    return !1;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(Au, { nodeKey: this.__key });
  }
}
function Lu() {
  return { node: ti() };
}
function ti() {
  return new Pn();
}
function Du(r) {
  return r instanceof Pn;
}
class fr extends Vo {
  constructor(e, n, o) {
    super(n, o);
    Le(this, "__className");
    this.__className = e;
  }
  static getType() {
    return "emoji";
  }
  static clone(e) {
    return new fr(e.__className, e.__text, e.__key);
  }
  createDOM(e) {
    const n = document.createElement("span"), o = super.createDOM(e);
    return n.className = this.__className, o.className = "emoji-inner", n.appendChild(o), n;
  }
  updateDOM(e, n, o) {
    const l = n.firstChild;
    return l === null ? !0 : (super.updateDOM(e, l, o), !1);
  }
  static importJSON(e) {
    const n = Da(
      e.className,
      e.text
    );
    return n.setFormat(e.format), n.setDetail(e.detail), n.setMode(e.mode), n.setStyle(e.style), n;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      className: this.getClassName(),
      type: "emoji"
    };
  }
  getClassName() {
    return this.getLatest().__className;
  }
}
function Da(r, t) {
  const e = new fr(r, t).setMode("token");
  return lr(e);
}
const $u = Dt.lazy(() => import("./ImageComponent-DS1UJnRQ.js"));
function Iu(r) {
  const t = r;
  if (t.src.startsWith("file:///"))
    return null;
  const { alt: e, src: n, width: o, height: l } = t;
  return { node: ni({ altText: e, height: l, src: n, width: o }) };
}
class kn extends ln {
  constructor(e, n, o, l, a, i, _, m, g, C, p, s) {
    super(g);
    Le(this, "__src");
    Le(this, "__altText");
    Le(this, "__width");
    Le(this, "__height");
    Le(this, "__maxWidth");
    Le(this, "__showCaption");
    Le(this, "__caption");
    // Captions cannot yet be used within editor cells
    Le(this, "__captionsEnabled");
    Le(this, "__isAbsolute");
    Le(this, "__x");
    Le(this, "__y");
    this.__src = e, this.__altText = n, this.__maxWidth = o, this.__width = l || "inherit", this.__height = a || "inherit", this.__showCaption = i || !1, this.__caption = _ || Fr(), this.__captionsEnabled = m || m === void 0, this.__isAbsolute = C || !1, this.__x = p || 0, this.__y = s || 0;
  }
  static getType() {
    return "image";
  }
  static clone(e) {
    return new kn(
      e.__src,
      e.__altText,
      e.__maxWidth,
      e.__width,
      e.__height,
      e.__showCaption,
      e.__caption,
      e.__captionsEnabled,
      e.__key,
      e.__isAbsolute,
      e.__x,
      e.__y
    );
  }
  static importJSON(e) {
    const {
      altText: n,
      height: o,
      width: l,
      maxWidth: a,
      caption: i,
      src: _,
      showCaption: m,
      isAbsolute: g,
      xOffset: C,
      yOffset: p
    } = e, s = ni({
      altText: n,
      height: o,
      maxWidth: a,
      showCaption: m,
      src: _,
      width: l,
      isAbsolute: g,
      xOffset: C,
      yOffset: p
    }), u = s.__caption, c = u.parseEditorState(i.editorState);
    return c.isEmpty() || u.setEditorState(c), s;
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: Iu,
        priority: 0
      })
    };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "image",
      version: 1,
      width: this.__width === "inherit" ? 0 : this.__width,
      isAbsolute: this.__isAbsolute,
      xOffset: this.__x,
      yOffset: this.__y
    };
  }
  setWidthAndHeight(e, n) {
    const o = this.getWritable();
    o.__width = e, o.__height = n;
  }
  setShowCaption(e) {
    const n = this.getWritable();
    n.__showCaption = e;
  }
  setAbsolute(e) {
    const n = this.getWritable();
    n.__isAbsolute = e;
  }
  setPosition(e, n) {
    const o = this.getWritable();
    o.__x = e, o.__y = n, Dn(null);
  }
  // View
  createDOM(e) {
    const n = document.createElement("span"), l = e.theme.image;
    return l !== void 0 && (n.className = l), n;
  }
  updateDOM() {
    return !1;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
      $u,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        maxWidth: this.__maxWidth,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        captionsEnabled: this.__captionsEnabled,
        resizable: !0,
        isAbsolute: this.__isAbsolute,
        xOffset: this.__x,
        yOffset: this.__y
      }
    ) });
  }
}
function ni({
  altText: r,
  height: t,
  maxWidth: e = 500,
  captionsEnabled: n,
  src: o,
  width: l,
  showCaption: a,
  caption: i,
  key: _,
  xOffset: m,
  yOffset: g,
  isAbsolute: C
}) {
  return lr(
    new kn(
      o,
      r,
      e,
      l,
      t,
      a,
      i,
      n,
      _,
      C,
      m,
      g
    )
  );
}
function Pu(r) {
  return r instanceof kn;
}
class Mn extends Vo {
  static getType() {
    return "keyword";
  }
  static clone(t) {
    return new Mn(t.__text, t.__key);
  }
  static importJSON(t) {
    const e = $a(t.text);
    return e.setFormat(t.format), e.setDetail(t.detail), e.setMode(t.mode), e.setStyle(t.style), e;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "keyword",
      version: 1
    };
  }
  createDOM(t) {
    const e = super.createDOM(t);
    return e.style.cursor = "default", e.className = "keyword", e;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  isTextEntity() {
    return !0;
  }
}
function $a(r) {
  return new Mn(r);
}
var Qr = {}, xr = {}, ks;
function ku() {
  if (ks) return xr;
  ks = 1;
  var r = Ie;
  class t extends r.DecoratorNode {
    constructor(o, l) {
      super(l), this.__format = o || "";
    }
    exportJSON() {
      return {
        format: this.__format || "",
        type: "decorator-block",
        version: 1
      };
    }
    createDOM() {
      return document.createElement("div");
    }
    updateDOM() {
      return !1;
    }
    setFormat(o) {
      const l = this.getWritable();
      l.__format = o;
    }
    isInline() {
      return !1;
    }
  }
  function e(n) {
    return n instanceof t;
  }
  return xr.$isDecoratorBlockNode = e, xr.DecoratorBlockNode = t, xr;
}
var Er = {}, Fs;
function Fu() {
  if (Fs) return Er;
  Fs = 1;
  var r = Ie;
  class t extends r.DecoratorNode {
    constructor(n, o) {
      super(o), this.__format = n || "";
    }
    exportJSON() {
      return { format: this.__format || "", type: "decorator-block", version: 1 };
    }
    createDOM() {
      return document.createElement("div");
    }
    updateDOM() {
      return !1;
    }
    setFormat(n) {
      this.getWritable().__format = n;
    }
    isInline() {
      return !1;
    }
  }
  return Er.$isDecoratorBlockNode = function(e) {
    return e instanceof t;
  }, Er.DecoratorBlockNode = t, Er;
}
const Bu = process.env.NODE_ENV === "development" ? ku() : Fu();
var Fn = Bu, Bs;
function ju() {
  if (Bs) return Qr;
  Bs = 1;
  var r = Ye(), t = Fn, e = ur(), n = Ke(), o = Ie, l = je;
  function a({
    children: i,
    format: _,
    nodeKey: m,
    className: g
  }) {
    const [C] = r.useLexicalComposerContext(), [p, s, u] = e.useLexicalNodeSelection(m), c = l.useRef(null), N = l.useCallback((h) => {
      if (p && o.$isNodeSelection(o.$getSelection())) {
        h.preventDefault();
        const E = o.$getNodeByKey(m);
        o.$isDecoratorNode(E) && E.remove();
      }
      return !1;
    }, [p, m]);
    return l.useEffect(() => n.mergeRegister(C.registerCommand(o.FORMAT_ELEMENT_COMMAND, (h) => {
      if (p) {
        const E = o.$getSelection();
        if (o.$isNodeSelection(E)) {
          const d = o.$getNodeByKey(m);
          t.$isDecoratorBlockNode(d) && d.setFormat(h);
        } else if (o.$isRangeSelection(E)) {
          const d = E.getNodes();
          for (const f of d)
            t.$isDecoratorBlockNode(f) ? f.setFormat(h) : n.$getNearestBlockElementAncestorOrThrow(f).setFormat(h);
        }
        return !0;
      }
      return !1;
    }, o.COMMAND_PRIORITY_LOW), C.registerCommand(o.CLICK_COMMAND, (h) => h.target === c.current ? (h.preventDefault(), h.shiftKey || u(), s(!p), !0) : !1, o.COMMAND_PRIORITY_LOW), C.registerCommand(o.KEY_DELETE_COMMAND, N, o.COMMAND_PRIORITY_LOW), C.registerCommand(o.KEY_BACKSPACE_COMMAND, N, o.COMMAND_PRIORITY_LOW)), [u, C, p, m, N, s]), /* @__PURE__ */ l.createElement("div", {
      className: [g.base, p ? g.focus : null].filter(Boolean).join(" "),
      ref: c,
      style: {
        textAlign: _ || void 0
      }
    }, i);
  }
  return Qr.BlockWithAlignableContents = a, Qr;
}
var eo = {}, js;
function Ku() {
  if (js) return eo;
  js = 1;
  var r = Ye(), t = Fn, e = ur(), n = Ke(), o = Ie, l = je;
  return eo.BlockWithAlignableContents = function({ children: a, format: i, nodeKey: _, className: m }) {
    let [g] = r.useLexicalComposerContext(), [C, p, s] = e.useLexicalNodeSelection(_), u = l.useRef(null), c = l.useCallback((N) => (C && o.$isNodeSelection(o.$getSelection()) && (N.preventDefault(), N = o.$getNodeByKey(_), o.$isDecoratorNode(N) && N.remove()), !1), [C, _]);
    return l.useEffect(() => n.mergeRegister(g.registerCommand(o.FORMAT_ELEMENT_COMMAND, (N) => {
      if (C) {
        var h = o.$getSelection();
        if (o.$isNodeSelection(h)) {
          var E = o.$getNodeByKey(_);
          t.$isDecoratorBlockNode(E) && E.setFormat(N);
        } else if (o.$isRangeSelection(h)) {
          h = h.getNodes();
          for (E of h) t.$isDecoratorBlockNode(E) ? E.setFormat(N) : n.$getNearestBlockElementAncestorOrThrow(E).setFormat(N);
        }
        return !0;
      }
      return !1;
    }, o.COMMAND_PRIORITY_LOW), g.registerCommand(o.CLICK_COMMAND, (N) => N.target === u.current ? (N.preventDefault(), N.shiftKey || s(), p(!C), !0) : !1, o.COMMAND_PRIORITY_LOW), g.registerCommand(o.KEY_DELETE_COMMAND, c, o.COMMAND_PRIORITY_LOW), g.registerCommand(o.KEY_BACKSPACE_COMMAND, c, o.COMMAND_PRIORITY_LOW)), [s, g, C, _, c, p]), l.createElement(
      "div",
      { className: [m.base, C ? m.focus : null].filter(Boolean).join(" "), ref: u, style: { textAlign: i || void 0 } },
      a
    );
  }, eo;
}
const Hu = process.env.NODE_ENV === "development" ? ju() : Ku();
var ri = Hu;
function Uu({
  className: r,
  format: t,
  nodeKey: e,
  documentID: n
}) {
  return /* @__PURE__ */ R.jsx(
    ri.BlockWithAlignableContents,
    {
      className: r,
      format: t,
      nodeKey: e,
      children: /* @__PURE__ */ R.jsx(
        "iframe",
        {
          width: "560",
          height: "315",
          src: `https://www.figma.com/embed?embed_host=lexical&url=        https://www.figma.com/file/${n}`,
          allowFullScreen: !0
        }
      )
    }
  );
}
class gr extends Fn.DecoratorBlockNode {
  constructor(e, n, o) {
    super(n, o);
    Le(this, "__id");
    this.__id = e;
  }
  static getType() {
    return "figma";
  }
  static clone(e) {
    return new gr(e.__id, e.__format, e.__key);
  }
  static importJSON(e) {
    const n = Ia(e.documentID);
    return n.setFormat(e.format), n;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      documentID: this.__id,
      type: "figma",
      version: 1
    };
  }
  updateDOM() {
    return !1;
  }
  getId() {
    return this.__id;
  }
  getTextContent() {
    return `https://www.figma.com/file/${this.__id}`;
  }
  decorate(e, n) {
    const o = n.theme.embedBlock || {}, l = {
      base: o.base || "",
      focus: o.focus || ""
    };
    return /* @__PURE__ */ R.jsx(
      Uu,
      {
        className: l,
        format: this.__format,
        nodeKey: this.getKey(),
        documentID: this.__id
      }
    );
  }
}
function Ia(r) {
  return new gr(r);
}
const Yu = "https://platform.twitter.com/widgets.js";
function Wu(r) {
  const t = r.getAttribute("data-lexical-tweet-id");
  return t ? { node: oi(t) } : null;
}
let Ks = !0;
function qu({
  className: r,
  format: t,
  loadingComponent: e,
  nodeKey: n,
  onError: o,
  onLoad: l,
  tweetID: a
}) {
  const i = ct(null), _ = ct(""), [m, g] = ve(!1), C = We(async () => {
    try {
      await window.twttr.widgets.createTweet(a, i.current), g(!1), Ks = !1, l && l();
    } catch (p) {
      o && o(String(p));
    }
  }, [o, l, a]);
  return De(() => {
    var p;
    if (a !== _.current) {
      if (g(!0), Ks) {
        const s = document.createElement("script");
        s.src = Yu, s.async = !0, (p = document.body) == null || p.appendChild(s), s.onload = C, o && (s.onerror = o);
      } else
        C();
      _ && (_.current = a);
    }
  }, [C, o, a]), /* @__PURE__ */ R.jsxs(
    ri.BlockWithAlignableContents,
    {
      className: r,
      format: t,
      nodeKey: n,
      children: [
        m ? e : null,
        /* @__PURE__ */ R.jsx(
          "div",
          {
            style: { display: "inline-block", width: "550px" },
            ref: i
          }
        )
      ]
    }
  );
}
class hr extends Fn.DecoratorBlockNode {
  constructor(e, n, o) {
    super(n, o);
    Le(this, "__id");
    this.__id = e;
  }
  static getType() {
    return "tweet";
  }
  static clone(e) {
    return new hr(e.__id, e.__format, e.__key);
  }
  static importJSON(e) {
    const n = oi(e.id);
    return n.setFormat(e.format), n;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      id: this.getId(),
      type: "tweet",
      version: 1
    };
  }
  static importDOM() {
    return {
      div: (e) => e.hasAttribute("data-lexical-tweet-id") ? {
        conversion: Wu,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const e = document.createElement("div");
    e.setAttribute("data-lexical-tweet-id", this.__id);
    const n = document.createTextNode(this.getTextContent());
    return e.append(n), { element: e };
  }
  getId() {
    return this.__id;
  }
  getTextContent(e, n) {
    return `https://x.com/i/web/status/${this.__id}`;
  }
  decorate(e, n) {
    const o = n.theme.embedBlock || {}, l = {
      base: o.base || "",
      focus: o.focus || ""
    };
    return /* @__PURE__ */ R.jsx(
      qu,
      {
        className: l,
        format: this.__format,
        loadingComponent: "Loading...",
        nodeKey: this.getKey(),
        tweetID: this.__id
      }
    );
  }
}
function oi(r) {
  return new hr(r);
}
function zu({
  className: r,
  format: t,
  nodeKey: e,
  videoID: n
}) {
  return /* @__PURE__ */ R.jsx(
    ri.BlockWithAlignableContents,
    {
      className: r,
      format: t,
      nodeKey: e,
      children: /* @__PURE__ */ R.jsx(
        "iframe",
        {
          width: "560",
          height: "315",
          src: `https://www.youtube-nocookie.com/embed/${n}`,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0,
          title: "YouTube video"
        }
      )
    }
  );
}
function Gu(r) {
  const t = r.getAttribute("data-lexical-youtube");
  return t ? { node: ii(t) } : null;
}
class pr extends Fn.DecoratorBlockNode {
  constructor(e, n, o) {
    super(n, o);
    Le(this, "__id");
    this.__id = e;
  }
  static getType() {
    return "youtube";
  }
  static clone(e) {
    return new pr(e.__id, e.__format, e.__key);
  }
  static importJSON(e) {
    const n = ii(e.videoID);
    return n.setFormat(e.format), n;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "youtube",
      version: 1,
      videoID: this.__id
    };
  }
  exportDOM() {
    const e = document.createElement("iframe");
    return e.setAttribute("data-lexical-youtube", this.__id), e.setAttribute("width", "560"), e.setAttribute("height", "315"), e.setAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${this.__id}`
    ), e.setAttribute("frameborder", "0"), e.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ), e.setAttribute("allowfullscreen", "true"), e.setAttribute("title", "YouTube video"), { element: e };
  }
  static importDOM() {
    return {
      iframe: (e) => e.hasAttribute("data-lexical-youtube") ? {
        conversion: Gu,
        priority: 1
      } : null
    };
  }
  updateDOM() {
    return !1;
  }
  getId() {
    return this.__id;
  }
  getTextContent(e, n) {
    return `https://www.youtube.com/watch?v=${this.__id}`;
  }
  decorate(e, n) {
    const o = n.theme.embedBlock || {}, l = {
      base: o.base || "",
      focus: o.focus || ""
    };
    return /* @__PURE__ */ R.jsx(
      zu,
      {
        className: l,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
}
function ii(r) {
  return new pr(r);
}
function Vu(r) {
  const t = r.open !== void 0 ? r.open : !0;
  return {
    node: si(t)
  };
}
class hn extends ar {
  constructor(e, n) {
    super(n);
    Le(this, "__open");
    this.__open = e;
  }
  static getType() {
    return "collapsible-container";
  }
  static clone(e) {
    return new hn(e.__open, e.__key);
  }
  createDOM(e, n) {
    const o = document.createElement("details");
    return o.classList.add("Collapsible__container"), o.open = this.__open, o.addEventListener("toggle", () => {
      n.getEditorState().read(() => this.getOpen()) !== o.open && n.update(() => this.toggleOpen());
    }), o;
  }
  updateDOM(e, n) {
    return e.__open !== this.__open && (n.open = this.__open), !1;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      details: (e) => ({
        conversion: Vu,
        priority: 1
      })
    };
  }
  static importJSON(e) {
    return si(e.open);
  }
  exportDOM() {
    const e = document.createElement("details");
    return e.setAttribute("open", this.__open.toString()), { element: e };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      open: this.__open,
      type: "collapsible-container",
      version: 1
    };
  }
  setOpen(e) {
    const n = this.getWritable();
    n.__open = e;
  }
  getOpen() {
    return this.getLatest().__open;
  }
  toggleOpen() {
    this.setOpen(!this.getOpen());
  }
}
function si(r) {
  return new hn(r);
}
function Xt(r) {
  return r instanceof hn;
}
function Ju(r) {
  return {
    node: li()
  };
}
class pn extends ar {
  static getType() {
    return "collapsible-content";
  }
  static clone(t) {
    return new pn(t.__key);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(t) {
    const e = document.createElement("div");
    return e.classList.add("Collapsible__content"), e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateDOM(t, e) {
    return !1;
  }
  static importDOM() {
    return {
      div: (t) => t.hasAttribute("data-lexical-collapsible-content") ? {
        conversion: Ju,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const t = document.createElement("div");
    return t.setAttribute("data-lexical-collapsible-content", "true"), { element: t };
  }
  static importJSON(t) {
    return li();
  }
  isShadowRoot() {
    return !0;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "collapsible-content",
      version: 1
    };
  }
}
function li() {
  return new pn();
}
function Pa(r) {
  return r instanceof pn;
}
function Xu(r) {
  return {
    node: ai()
  };
}
class mn extends ar {
  static getType() {
    return "collapsible-title";
  }
  static clone(t) {
    return new mn(t.__key);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(t, e) {
    const n = document.createElement("summary");
    return n.classList.add("Collapsible__title"), n;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateDOM(t, e) {
    return !1;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      summary: (t) => ({
        conversion: Xu,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ai();
  }
  exportDOM() {
    return { element: document.createElement("summary") };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "collapsible-title",
      version: 1
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  collapseAtStart(t) {
    return this.getParentOrThrow().insertBefore(this), !0;
  }
  insertNewAfter(t, e = !0) {
    const n = this.getParentOrThrow();
    if (!Xt(n))
      throw new Error(
        "CollapsibleTitleNode expects to be child of CollapsibleContainerNode"
      );
    if (n.getOpen()) {
      const o = this.getNextSibling();
      if (!Pa(o))
        throw new Error(
          "CollapsibleTitleNode expects to have CollapsibleContentNode sibling"
        );
      const l = o.getFirstChild();
      if (gn(l))
        return l;
      {
        const a = Et();
        return o.append(a), a;
      }
    } else {
      const o = Et();
      return n.insertAfter(o, e), o;
    }
  }
}
function ai() {
  return new mn();
}
function Hs(r) {
  return r instanceof mn;
}
const Zu = Dt.lazy(() => import("./EquationComponent-C3W-Csbg.js"));
function Us(r) {
  let t = r.getAttribute("data-lexical-equation");
  const e = r.getAttribute("data-lexical-inline") === "true";
  return t = atob(t || ""), t ? { node: ci(t, e) } : null;
}
class Bn extends ln {
  constructor(e, n, o) {
    super(o);
    Le(this, "__equation");
    Le(this, "__inline");
    this.__equation = e, this.__inline = n ?? !1;
  }
  static getType() {
    return "equation";
  }
  static clone(e) {
    return new Bn(e.__equation, e.__inline, e.__key);
  }
  static importJSON(e) {
    return ci(
      e.equation,
      e.inline
    );
  }
  exportJSON() {
    return {
      equation: this.getEquation(),
      inline: this.__inline,
      type: "equation",
      version: 1
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(e) {
    const n = document.createElement(this.__inline ? "span" : "div");
    return n.className = "editor-equation", n;
  }
  exportDOM() {
    const e = document.createElement(this.__inline ? "span" : "div"), n = btoa(this.__equation);
    return e.setAttribute("data-lexical-equation", n), e.setAttribute("data-lexical-inline", `${this.__inline}`), ga.render(this.__equation, e, {
      displayMode: !this.__inline,
      // true === block display //
      errorColor: "#cc0000",
      output: "html",
      strict: "warn",
      throwOnError: !1,
      trust: !1
    }), { element: e };
  }
  static importDOM() {
    return {
      div: (e) => e.hasAttribute("data-lexical-equation") ? {
        conversion: Us,
        priority: 2
      } : null,
      span: (e) => e.hasAttribute("data-lexical-equation") ? {
        conversion: Us,
        priority: 1
      } : null
    };
  }
  updateDOM(e) {
    return this.__inline !== e.__inline;
  }
  getTextContent() {
    return this.__equation;
  }
  getEquation() {
    return this.__equation;
  }
  setEquation(e) {
    const n = this.getWritable();
    n.__equation = e;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
      Zu,
      {
        equation: this.__equation,
        inline: this.__inline,
        nodeKey: this.__key
      }
    ) });
  }
}
function ci(r = "", t = !1) {
  const e = new Bn(r, t);
  return lr(e);
}
function vp(r) {
  return r instanceof Bn;
}
const Qu = Dt.lazy(() => import("./ExcalidrawComponent-DQ5saKC5.js"));
function ed(r) {
  const t = r.getAttribute("data-lexical-excalidraw-json");
  if (t) {
    const e = ka();
    return e.__data = t, {
      node: e
    };
  }
  return null;
}
class _n extends ln {
  constructor(e = "[]", n = "inherit", o = "inherit", l) {
    super(l);
    Le(this, "__data");
    Le(this, "__width");
    Le(this, "__height");
    this.__data = e, this.__width = n, this.__height = o;
  }
  static getType() {
    return "excalidraw";
  }
  static clone(e) {
    return new _n(e.__data, e.__width, e.__height, e.__key);
  }
  static importJSON(e) {
    return new _n(e.data, e.width, e.height);
  }
  exportJSON() {
    return {
      data: this.__data,
      height: this.__height,
      type: "excalidraw",
      version: 1,
      width: this.__width
    };
  }
  // View
  createDOM(e) {
    const n = document.createElement("span"), l = e.theme.image;
    return n.style.width = this.__width === "inherit" ? "inherit" : `${this.__width}px`, n.style.height = this.__height === "inherit" ? "inherit" : `${this.__height}px`, l !== void 0 && (n.className = l), n;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      span: (e) => e.hasAttribute("data-lexical-excalidraw-json") ? {
        conversion: ed,
        priority: 1
      } : null
    };
  }
  exportDOM(e) {
    const n = document.createElement("span");
    n.style.display = "inline-block";
    const o = e.getElementByKey(this.getKey());
    if (o !== null) {
      const l = o.querySelector("svg");
      l !== null && (n.innerHTML = l.outerHTML);
    }
    return n.style.width = this.__width === "inherit" ? "inherit" : `${this.__width}px`, n.style.height = this.__height === "inherit" ? "inherit" : `${this.__height}px`, n.setAttribute("data-lexical-excalidraw-json", this.__data), { element: n };
  }
  setData(e) {
    const n = this.getWritable();
    n.__data = e;
  }
  setWidth(e) {
    const n = this.getWritable();
    n.__width = e;
  }
  setHeight(e) {
    const n = this.getWritable();
    n.__height = e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(e, n) {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(Qu, { nodeKey: this.getKey(), data: this.__data }) });
  }
}
function ka() {
  return new _n();
}
function Sp(r) {
  return r instanceof _n;
}
class Nn extends ar {
  constructor(e, n) {
    super(n);
    Le(this, "__templateColumns");
    this.__templateColumns = e;
  }
  static getType() {
    return "layout-container";
  }
  static clone(e) {
    return new Nn(e.__templateColumns, e.__key);
  }
  createDOM(e) {
    const n = document.createElement("div");
    return n.style.gridTemplateColumns = this.__templateColumns, typeof e.theme.layoutContainer == "string" && qe.addClassNamesToElement(n, e.theme.layoutContainer), n;
  }
  updateDOM(e, n) {
    return e.__templateColumns !== this.__templateColumns && (n.style.gridTemplateColumns = this.__templateColumns), !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON(e) {
    return Fa(e.templateColumns);
  }
  canBeEmpty() {
    return !1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      templateColumns: this.__templateColumns,
      type: "layout-container",
      version: 1
    };
  }
  getTemplateColumns() {
    return this.getLatest().__templateColumns;
  }
  setTemplateColumns(e) {
    this.getWritable().__templateColumns = e;
  }
}
function Fa(r) {
  return new Nn(r);
}
function Tr(r) {
  return r instanceof Nn;
}
class Cn extends ar {
  static getType() {
    return "layout-item";
  }
  static clone(t) {
    return new Cn(t.__key);
  }
  createDOM(t) {
    const e = document.createElement("div");
    return typeof t.theme.layoutItem == "string" && qe.addClassNamesToElement(e, t.theme.layoutItem), e;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON() {
    return Ko();
  }
  isShadowRoot() {
    return !0;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "layout-item",
      version: 1
    };
  }
}
function Ko() {
  return new Cn();
}
function Ys(r) {
  return r instanceof Cn;
}
const td = Dt.lazy(() => import("./PollComponent-DxvJUTyQ.js"));
function nd() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Ws(r = "") {
  return {
    text: r,
    uid: nd(),
    votes: []
  };
}
function qs(r, t, e) {
  return {
    text: t,
    uid: r.uid,
    votes: e || Array.from(r.votes)
  };
}
function rd(r) {
  const t = r.getAttribute("data-lexical-poll-question"), e = r.getAttribute("data-lexical-poll-options");
  return t !== null && e !== null ? { node: ui(t, JSON.parse(e)) } : null;
}
class jn extends ln {
  constructor(e, n, o) {
    super(o);
    Le(this, "__question");
    Le(this, "__options");
    this.__question = e, this.__options = n;
  }
  static getType() {
    return "poll";
  }
  static clone(e) {
    return new jn(e.__question, e.__options, e.__key);
  }
  static importJSON(e) {
    const n = ui(
      e.question,
      e.options
    );
    return e.options.forEach(n.addOption), n;
  }
  exportJSON() {
    return {
      options: this.__options,
      question: this.__question,
      type: "poll",
      version: 1
    };
  }
  addOption(e) {
    const n = this.getWritable(), o = Array.from(n.__options);
    o.push(e), n.__options = o;
  }
  deleteOption(e) {
    const n = this.getWritable(), o = Array.from(n.__options), l = o.indexOf(e);
    o.splice(l, 1), n.__options = o;
  }
  setOptionText(e, n) {
    const o = this.getWritable(), l = qs(e, n), a = Array.from(o.__options), i = a.indexOf(e);
    a[i] = l, o.__options = a;
  }
  toggleVote(e, n) {
    const o = this.getWritable(), l = e.votes, a = Array.from(l), i = l.indexOf(n);
    i === -1 ? a.push(n) : a.splice(i, 1);
    const _ = qs(e, e.text, a), m = Array.from(o.__options), g = m.indexOf(e);
    m[g] = _, o.__options = m;
  }
  static importDOM() {
    return {
      span: (e) => e.hasAttribute("data-lexical-poll-question") ? {
        conversion: rd,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const e = document.createElement("span");
    return e.setAttribute("data-lexical-poll-question", this.__question), e.setAttribute(
      "data-lexical-poll-options",
      JSON.stringify(this.__options)
    ), { element: e };
  }
  createDOM() {
    const e = document.createElement("span");
    return e.style.display = "inline-block", e;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
      td,
      {
        question: this.__question,
        options: this.__options,
        nodeKey: this.__key
      }
    ) });
  }
}
function ui(r, t) {
  return new jn(r, t);
}
function bp(r) {
  return r instanceof jn;
}
const od = Dt.lazy(() => import("./InlineImageComponent-5rUnDk47.js"));
function id(r) {
  if (r instanceof HTMLImageElement) {
    const { alt: t, src: e, width: n, height: o } = r;
    return { node: di({ altText: t, height: o, src: e, width: n }) };
  }
  return null;
}
class Kn extends ln {
  constructor(e, n, o, l, a, i, _, m) {
    super(m);
    Le(this, "__src");
    Le(this, "__altText");
    Le(this, "__width");
    Le(this, "__height");
    Le(this, "__showCaption");
    Le(this, "__caption");
    Le(this, "__position");
    this.__src = e, this.__altText = n, this.__width = l || "inherit", this.__height = a || "inherit", this.__showCaption = i || !1, this.__caption = _ || Fr(), this.__position = o;
  }
  static getType() {
    return "inline-image";
  }
  static clone(e) {
    return new Kn(
      e.__src,
      e.__altText,
      e.__position,
      e.__width,
      e.__height,
      e.__showCaption,
      e.__caption,
      e.__key
    );
  }
  static importJSON(e) {
    const { altText: n, height: o, width: l, caption: a, src: i, showCaption: _, position: m } = e, g = di({
      altText: n,
      height: o,
      position: m,
      showCaption: _,
      src: i,
      width: l
    }), C = g.__caption, p = C.parseEditorState(a.editorState);
    return p.isEmpty() || C.setEditorState(p), g;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (e) => ({
        conversion: id,
        priority: 0
      })
    };
  }
  exportDOM() {
    const e = document.createElement("img");
    return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: this.__height === "inherit" ? 0 : this.__height,
      position: this.__position,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "inline-image",
      version: 1,
      width: this.__width === "inherit" ? 0 : this.__width
    };
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  setAltText(e) {
    const n = this.getWritable();
    n.__altText = e;
  }
  setWidthAndHeight(e, n) {
    const o = this.getWritable();
    o.__width = e, o.__height = n;
  }
  getShowCaption() {
    return this.__showCaption;
  }
  setShowCaption(e) {
    const n = this.getWritable();
    n.__showCaption = e;
  }
  getPosition() {
    return this.__position;
  }
  setPosition(e) {
    const n = this.getWritable();
    n.__position = e;
  }
  update(e) {
    const n = this.getWritable(), { altText: o, showCaption: l, position: a } = e;
    o !== void 0 && (n.__altText = o), l !== void 0 && (n.__showCaption = l), a !== void 0 && (n.__position = a);
  }
  // View
  createDOM(e) {
    const n = document.createElement("span"), o = `${e.theme.inlineImage} position-${this.__position}`;
    return o !== void 0 && (n.className = o), n;
  }
  updateDOM(e, n, o) {
    const l = this.__position;
    if (l !== e.__position) {
      const a = `${o.theme.inlineImage} position-${l}`;
      a !== void 0 && (n.className = a);
    }
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
      od,
      {
        src: this.__src,
        altText: this.__altText,
        width: this.__width,
        height: this.__height,
        nodeKey: this.getKey(),
        showCaption: this.__showCaption,
        caption: this.__caption,
        position: this.__position
      }
    ) });
  }
}
function di({
  altText: r,
  position: t,
  height: e,
  src: n,
  width: o,
  showCaption: l,
  caption: a,
  key: i
}) {
  return lr(
    new Kn(
      n,
      r,
      t,
      o,
      e,
      l,
      a,
      i
    )
  );
}
function sd(r) {
  return r instanceof Kn;
}
const ld = Dt.lazy(() => import("./StickyComponent-DRClkIg0.js"));
class An extends ln {
  constructor(e, n, o, l, a) {
    super(a);
    Le(this, "__x");
    Le(this, "__y");
    Le(this, "__color");
    Le(this, "__caption");
    this.__x = e, this.__y = n, this.__caption = l || Fr(), this.__color = o;
  }
  static getType() {
    return "sticky";
  }
  static clone(e) {
    return new An(
      e.__x,
      e.__y,
      e.__color,
      e.__caption,
      e.__key
    );
  }
  static importJSON(e) {
    const n = new An(
      e.xOffset,
      e.yOffset,
      e.color
    ), o = e.caption, l = n.__caption, a = l.parseEditorState(o.editorState);
    return a.isEmpty() || l.setEditorState(a), n;
  }
  exportJSON() {
    return {
      caption: this.__caption.toJSON(),
      color: this.__color,
      type: "sticky",
      version: 1,
      xOffset: this.__x,
      yOffset: this.__y
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(e) {
    const n = document.createElement("div");
    return n.style.display = "contents", n;
  }
  updateDOM() {
    return !1;
  }
  setPosition(e, n) {
    const o = this.getWritable();
    o.__x = e, o.__y = n, Dn(null);
  }
  toggleColor() {
    const e = this.getWritable();
    e.__color = e.__color === "pink" ? "yellow" : "pink";
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(e, n) {
    return Qt(
      /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
        ld,
        {
          color: this.__color,
          x: this.__x,
          y: this.__y,
          nodeKey: this.getKey(),
          caption: this.__caption
        }
      ) }),
      document.body
    );
  }
  isIsolated() {
    return !0;
  }
}
function Op(r) {
  return r instanceof An;
}
function ad(r, t) {
  return new An(r, t, "yellow");
}
const cd = [
  Ir.CodeNode,
  uu.MarkNode,
  $t.HeadingNode,
  $t.QuoteNode,
  vt.ListNode,
  vt.ListItemNode,
  lt.AutoLinkNode,
  lt.LinkNode,
  dr.HorizontalRuleNode,
  Pn,
  fr,
  kn,
  Mn,
  gr,
  hr,
  pr,
  hn,
  pn,
  mn,
  Bn,
  _n,
  Nn,
  Cn,
  jn,
  eu.HashtagNode,
  Kn,
  $e.TableNode,
  $e.TableRowNode,
  $e.TableCellNode,
  An,
  hu.OverflowNode
];
var yr = {}, vr = {}, zs;
function ud() {
  if (zs) return vr;
  zs = 1;
  var r = Ke(), t = Ie;
  const e = 0, n = 1, o = 2, l = 0, a = 1, i = 2, _ = 3, m = 4;
  function g(d, f, y) {
    const A = d._nodeMap, v = [];
    for (const O of f) {
      const T = A.get(O);
      T !== void 0 && v.push(T);
    }
    for (const [O, T] of y) {
      if (!T)
        continue;
      const S = A.get(O);
      S !== void 0 && !t.$isRootNode(S) && v.push(S);
    }
    return v;
  }
  function C(d, f, y, A, v) {
    if (d === null || y.size === 0 && A.size === 0 && !v)
      return l;
    const O = f._selection, T = d._selection;
    if (v)
      return a;
    if (!t.$isRangeSelection(O) || !t.$isRangeSelection(T) || !T.isCollapsed() || !O.isCollapsed())
      return l;
    const S = g(f, y, A);
    if (S.length === 0)
      return l;
    if (S.length > 1) {
      const j = f._nodeMap, $ = j.get(O.anchor.key), W = j.get(T.anchor.key);
      return $ && W && !d._nodeMap.has($.__key) && t.$isTextNode($) && $.__text.length === 1 && O.anchor.offset === 1 ? i : l;
    }
    const b = S[0], k = d._nodeMap.get(b.__key);
    if (!t.$isTextNode(k) || !t.$isTextNode(b) || k.__mode !== b.__mode)
      return l;
    const H = k.__text, K = b.__text;
    if (H === K)
      return l;
    const B = O.anchor, w = T.anchor;
    if (B.key !== w.key || B.type !== "text")
      return l;
    const x = B.offset, D = w.offset, Y = K.length - H.length;
    return Y === 1 && D === x - 1 ? i : Y === -1 && D === x + 1 ? _ : Y === -1 && D === x ? m : l;
  }
  function p(d, f, y) {
    const A = f._nodeMap.get(d), v = y._nodeMap.get(d), O = f._selection, T = y._selection;
    let S = !1;
    return t.$isRangeSelection(O) && t.$isRangeSelection(T) && (S = O.anchor.type === "element" && O.focus.type === "element" && T.anchor.type === "text" && T.focus.type === "text"), !S && t.$isTextNode(A) && t.$isTextNode(v) ? A.__type === v.__type && A.__text === v.__text && A.__mode === v.__mode && A.__detail === v.__detail && A.__style === v.__style && A.__format === v.__format && A.__parent === v.__parent : !1;
  }
  function s(d, f) {
    let y = Date.now(), A = l;
    return (v, O, T, S, b, k) => {
      const H = Date.now();
      if (k.has("historic"))
        return A = l, y = H, o;
      const K = C(v, O, S, b, d.isComposing()), B = (() => {
        const w = T === null || T.editor === d, x = k.has("history-push");
        if (!x && w && k.has("history-merge"))
          return e;
        if (v === null)
          return n;
        const Y = O._selection;
        if (!(S.size > 0 || b.size > 0))
          return Y !== null ? e : o;
        if (x === !1 && K !== l && K === A && H < y + f && w)
          return e;
        if (S.size === 1) {
          const $ = Array.from(S)[0];
          if (p($, v, O))
            return e;
        }
        return n;
      })();
      return y = H, A = K, B;
    };
  }
  function u(d, f) {
    const y = f.redoStack, A = f.undoStack;
    if (y.length !== 0) {
      const v = f.current;
      v !== null && (A.push(v), d.dispatchCommand(t.CAN_UNDO_COMMAND, !0));
      const O = y.pop();
      y.length === 0 && d.dispatchCommand(t.CAN_REDO_COMMAND, !1), f.current = O || null, O && O.editor.setEditorState(O.editorState, {
        tag: "historic"
      });
    }
  }
  function c(d, f) {
    const y = f.redoStack, A = f.undoStack;
    if (A.length !== 0) {
      const O = f.current, T = A.pop();
      O !== null && (y.push(O), d.dispatchCommand(t.CAN_REDO_COMMAND, !0)), A.length === 0 && d.dispatchCommand(t.CAN_UNDO_COMMAND, !1), f.current = T || null, T && T.editor.setEditorState(T.editorState, {
        tag: "historic"
      });
    }
  }
  function N(d) {
    d.undoStack = [], d.redoStack = [], d.current = null;
  }
  function h(d, f, y) {
    const A = s(d, y), v = ({
      editorState: S,
      prevEditorState: b,
      dirtyLeaves: k,
      dirtyElements: H,
      tags: K
    }) => {
      const B = f.current, w = f.redoStack, x = f.undoStack, D = B === null ? null : B.editorState;
      if (B !== null && S === D)
        return;
      const Y = A(b, S, B, k, H, K);
      if (Y === n)
        w.length !== 0 && (f.redoStack = [], d.dispatchCommand(t.CAN_REDO_COMMAND, !1)), B !== null && (x.push({
          ...B
        }), d.dispatchCommand(t.CAN_UNDO_COMMAND, !0));
      else if (Y === o)
        return;
      f.current = {
        editor: d,
        editorState: S
      };
    }, O = r.mergeRegister(d.registerCommand(t.UNDO_COMMAND, () => (c(d, f), !0), t.COMMAND_PRIORITY_EDITOR), d.registerCommand(t.REDO_COMMAND, () => (u(d, f), !0), t.COMMAND_PRIORITY_EDITOR), d.registerCommand(t.CLEAR_EDITOR_COMMAND, () => (N(f), !1), t.COMMAND_PRIORITY_EDITOR), d.registerCommand(t.CLEAR_HISTORY_COMMAND, () => (N(f), d.dispatchCommand(t.CAN_REDO_COMMAND, !1), d.dispatchCommand(t.CAN_UNDO_COMMAND, !1), !0), t.COMMAND_PRIORITY_EDITOR), d.registerUpdateListener(v)), T = d.registerUpdateListener(v);
    return () => {
      O(), T();
    };
  }
  function E() {
    return {
      current: null,
      redoStack: [],
      undoStack: []
    };
  }
  return vr.createEmptyHistoryState = E, vr.registerHistory = h, vr;
}
var Sr = {}, Gs;
function dd() {
  if (Gs) return Sr;
  Gs = 1;
  var r = Ke(), t = Ie;
  function e(o, l, a, i, _) {
    if (o === null || a.size === 0 && i.size === 0 && !_) return 0;
    var m = l._selection, g = o._selection;
    if (_) return 1;
    if (!(t.$isRangeSelection(m) && t.$isRangeSelection(g) && g.isCollapsed() && m.isCollapsed())) return 0;
    _ = l._nodeMap;
    let C = [];
    for (let p of a) a = _.get(p), a !== void 0 && C.push(a);
    for (let [p, s] of i) s && (i = _.get(p), i === void 0 || t.$isRootNode(i) || C.push(i));
    return C.length === 0 ? 0 : 1 < C.length ? (i = l._nodeMap, l = i.get(m.anchor.key), g = i.get(g.anchor.key), l && g && !o._nodeMap.has(l.__key) && t.$isTextNode(l) && l.__text.length === 1 && m.anchor.offset === 1 ? 2 : 0) : (l = C[0], o = o._nodeMap.get(l.__key), !t.$isTextNode(o) || !t.$isTextNode(l) || o.__mode !== l.__mode || (o = o.__text, l = l.__text, o === l) || (m = m.anchor, g = g.anchor, m.key !== g.key || m.type !== "text") ? 0 : (m = m.offset, g = g.offset, o = l.length - o.length, o === 1 && g === m - 1 ? 2 : o === -1 && g === m + 1 ? 3 : o === -1 && g === m ? 4 : 0));
  }
  function n(o, l) {
    let a = Date.now(), i = 0;
    return (_, m, g, C, p, s) => {
      let u = Date.now();
      if (s.has("historic")) return i = 0, a = u, 2;
      let c = e(_, m, C, p, o.isComposing()), N = (() => {
        var h = g === null || g.editor === o, E = s.has("history-push");
        if (!E && h && s.has("history-merge")) return 0;
        if (_ === null) return 1;
        var d = m._selection;
        if (!(0 < C.size || 0 < p.size)) return d !== null ? 0 : 2;
        if (E === !1 && c !== 0 && c === i && u < a + l && h) return 0;
        if (C.size === 1) {
          {
            E = Array.from(C)[0], h = _._nodeMap.get(E), E = m._nodeMap.get(E), d = _._selection;
            let f = m._selection, y = !1;
            t.$isRangeSelection(d) && t.$isRangeSelection(f) && (y = d.anchor.type === "element" && d.focus.type === "element" && f.anchor.type === "text" && f.focus.type === "text"), h = !y && t.$isTextNode(h) && t.$isTextNode(E) ? h.__type === E.__type && h.__text === E.__text && h.__mode === E.__mode && h.__detail === E.__detail && h.__style === E.__style && h.__format === E.__format && h.__parent === E.__parent : !1;
          }
          if (h) return 0;
        }
        return 1;
      })();
      return a = u, i = c, N;
    };
  }
  return Sr.createEmptyHistoryState = function() {
    return { current: null, redoStack: [], undoStack: [] };
  }, Sr.registerHistory = function(o, l, a) {
    let i = n(o, a);
    a = ({ editorState: g, prevEditorState: C, dirtyLeaves: p, dirtyElements: s, tags: u }) => {
      const c = l.current, N = l.redoStack, h = l.undoStack, E = c === null ? null : c.editorState;
      if (c === null || g !== E) {
        if (C = i(C, g, c, p, s, u), C === 1) N.length !== 0 && (l.redoStack = [], o.dispatchCommand(t.CAN_REDO_COMMAND, !1)), c !== null && (h.push({ ...c }), o.dispatchCommand(t.CAN_UNDO_COMMAND, !0));
        else if (C === 2) return;
        l.current = { editor: o, editorState: g };
      }
    };
    let _ = r.mergeRegister(o.registerCommand(
      t.UNDO_COMMAND,
      () => {
        let g = l.redoStack, C = l.undoStack;
        if (C.length !== 0) {
          let p = l.current, s = C.pop();
          p !== null && (g.push(p), o.dispatchCommand(t.CAN_REDO_COMMAND, !0)), C.length === 0 && o.dispatchCommand(t.CAN_UNDO_COMMAND, !1), l.current = s || null, s && s.editor.setEditorState(s.editorState, { tag: "historic" });
        }
        return !0;
      },
      t.COMMAND_PRIORITY_EDITOR
    ), o.registerCommand(t.REDO_COMMAND, () => {
      let g = l.redoStack;
      var C = l.undoStack;
      if (g.length !== 0) {
        let p = l.current;
        p !== null && (C.push(p), o.dispatchCommand(t.CAN_UNDO_COMMAND, !0)), C = g.pop(), g.length === 0 && o.dispatchCommand(t.CAN_REDO_COMMAND, !1), l.current = C || null, C && C.editor.setEditorState(C.editorState, { tag: "historic" });
      }
      return !0;
    }, t.COMMAND_PRIORITY_EDITOR), o.registerCommand(t.CLEAR_EDITOR_COMMAND, () => (l.undoStack = [], l.redoStack = [], l.current = null, !1), t.COMMAND_PRIORITY_EDITOR), o.registerCommand(t.CLEAR_HISTORY_COMMAND, () => (l.undoStack = [], l.redoStack = [], l.current = null, o.dispatchCommand(t.CAN_REDO_COMMAND, !1), o.dispatchCommand(t.CAN_UNDO_COMMAND, !1), !0), t.COMMAND_PRIORITY_EDITOR), o.registerUpdateListener(a)), m = o.registerUpdateListener(a);
    return () => {
      _(), m();
    };
  }, Sr;
}
var to, Vs;
function Ba() {
  return Vs || (Vs = 1, to = process.env.NODE_ENV === "development" ? ud() : dd()), to;
}
var Js;
function fd() {
  if (Js) return yr;
  Js = 1;
  var r = Ye(), t = Ba(), e = je;
  function n(l, a, i = 1e3) {
    const _ = e.useMemo(() => a || t.createEmptyHistoryState(), [a]);
    e.useEffect(() => t.registerHistory(l, _, i), [i, l, _]);
  }
  function o({
    externalHistoryState: l
  }) {
    const [a] = r.useLexicalComposerContext();
    return n(a, l), null;
  }
  return yr.createEmptyHistoryState = t.createEmptyHistoryState, yr.HistoryPlugin = o, yr;
}
var br = {}, Xs;
function gd() {
  if (Xs) return br;
  Xs = 1;
  var r = Ye(), t = Ba(), e = je;
  function n(o, l, a = 1e3) {
    let i = e.useMemo(() => l || t.createEmptyHistoryState(), [l]);
    e.useEffect(() => t.registerHistory(o, i, a), [a, o, i]);
  }
  return br.createEmptyHistoryState = t.createEmptyHistoryState, br.HistoryPlugin = function({ externalHistoryState: o }) {
    let [l] = r.useLexicalComposerContext();
    return n(l, o), null;
  }, br;
}
const hd = process.env.NODE_ENV === "development" ? fd() : gd();
var ja = hd;
const Ka = oa({}), pd = ({
  children: r,
  initHistoryState: t
}) => {
  const e = Bt(
    () => ({ historyState: t || ja.createEmptyHistoryState() }),
    []
  );
  return /* @__PURE__ */ R.jsx(Ka.Provider, { value: e, children: r });
}, md = () => Nc(Ka);
var no = {}, ro, Zs;
function _d() {
  if (Zs) return ro;
  Zs = 1;
  var r = Ye(), t = je, o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  function l(_) {
    const [m] = r.useLexicalComposerContext(), g = t.useMemo(() => _(m), [m, _]), C = t.useRef(g.initialValueFn()), [p, s] = t.useState(C.current);
    return o(() => {
      const {
        initialValueFn: u,
        subscribe: c
      } = g, N = u();
      return C.current !== N && (C.current = N, s(N)), c((h) => {
        C.current = h, s(h);
      });
    }, [g, _]), p;
  }
  function a(_) {
    return {
      initialValueFn: () => _.isEditable(),
      subscribe: (m) => _.registerEditableListener(m)
    };
  }
  function i() {
    return l(a);
  }
  return ro = i, ro;
}
var oo, Qs;
function Nd() {
  if (Qs) return oo;
  Qs = 1;
  var r = Ye(), t = je, e = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  function n(l) {
    let [a] = r.useLexicalComposerContext(), i = t.useMemo(() => l(a), [a, l]), _ = t.useRef(i.initialValueFn()), [m, g] = t.useState(_.current);
    return e(() => {
      let { initialValueFn: C, subscribe: p } = i, s = C();
      return _.current !== s && (_.current = s, g(s)), p((u) => {
        _.current = u, g(u);
      });
    }, [i, l]), m;
  }
  function o(l) {
    return { initialValueFn: () => l.isEditable(), subscribe: (a) => l.registerEditableListener(a) };
  }
  return oo = function() {
    return n(o);
  }, oo;
}
var io, el;
function fi() {
  return el || (el = 1, io = process.env.NODE_ENV === "development" ? _d() : Nd()), io;
}
var zt = {}, tl;
function Cd() {
  if (tl) return zt;
  tl = 1;
  var r = Ie;
  function t(_, m) {
    let g = _.getFirstChild(), C = 0;
    e: for (; g !== null; ) {
      if (r.$isElementNode(g)) {
        const u = g.getFirstChild();
        if (u !== null) {
          g = u;
          continue;
        }
      } else if (r.$isTextNode(g)) {
        const u = g.getTextContentSize();
        if (C + u > m)
          return {
            node: g,
            offset: m - C
          };
        C += u;
      }
      const p = g.getNextSibling();
      if (p !== null) {
        g = p;
        continue;
      }
      let s = g.getParent();
      for (; s !== null; ) {
        const u = s.getNextSibling();
        if (u !== null) {
          g = u;
          continue e;
        }
        s = s.getParent();
      }
      break;
    }
    return null;
  }
  function e(_, m = !0) {
    if (_)
      return !1;
    let g = o();
    return m && (g = g.trim()), g === "";
  }
  function n(_, m) {
    return () => e(_, m);
  }
  function o() {
    return r.$getRoot().getTextContent();
  }
  function l(_) {
    if (!e(_, !1))
      return !1;
    const g = r.$getRoot().getChildren(), C = g.length;
    if (C > 1)
      return !1;
    for (let p = 0; p < C; p++) {
      const s = g[p];
      if (r.$isDecoratorNode(s))
        return !1;
      if (r.$isElementNode(s)) {
        if (!r.$isParagraphNode(s) || s.__indent !== 0)
          return !1;
        const u = s.getChildren(), c = u.length;
        for (let N = 0; N < c; N++) {
          const h = u[p];
          if (!r.$isTextNode(h))
            return !1;
        }
      }
    }
    return !0;
  }
  function a(_) {
    return () => l(_);
  }
  function i(_, m, g, C) {
    const p = (d) => d instanceof g, s = (d) => {
      const f = r.$createTextNode(d.getTextContent());
      f.setFormat(d.getFormat()), d.replace(f);
    }, u = (d) => d.getLatest().__mode, c = (d) => {
      if (!d.isSimpleText())
        return;
      const f = d.getPreviousSibling();
      let y = d.getTextContent(), A = d, v;
      if (r.$isTextNode(f)) {
        const O = f.getTextContent(), T = O + y, S = m(T);
        if (p(f))
          if (S === null || u(f) !== 0) {
            s(f);
            return;
          } else {
            const b = S.end - O.length;
            if (b > 0) {
              const k = y.slice(0, b), H = O + k;
              if (f.select(), f.setTextContent(H), b === y.length)
                d.remove();
              else {
                const K = y.slice(b);
                d.setTextContent(K);
              }
              return;
            }
          }
        else if (S === null || S.start < O.length)
          return;
      }
      for (; ; ) {
        v = m(y);
        let O = v === null ? "" : y.slice(v.end);
        if (y = O, O === "") {
          const b = A.getNextSibling();
          if (r.$isTextNode(b)) {
            O = A.getTextContent() + b.getTextContent();
            const k = m(O);
            if (k === null) {
              p(b) ? s(b) : b.markDirty();
              return;
            } else if (k.start !== 0)
              return;
          }
        } else {
          const b = m(O);
          if (b !== null && b.start === 0)
            return;
        }
        if (v === null)
          return;
        if (v.start === 0 && r.$isTextNode(f) && f.isTextEntity())
          continue;
        let T;
        v.start === 0 ? [T, A] = A.splitText(v.end) : [, T, A] = A.splitText(v.start, v.end);
        const S = C(T);
        if (S.setFormat(T.getFormat()), T.replace(S), A == null)
          return;
      }
    }, N = (d) => {
      const f = d.getTextContent(), y = m(f);
      if (y === null || y.start !== 0) {
        s(d);
        return;
      }
      if (f.length > y.end) {
        d.splitText(y.end);
        return;
      }
      const A = d.getPreviousSibling();
      r.$isTextNode(A) && A.isTextEntity() && (s(A), s(d));
      const v = d.getNextSibling();
      r.$isTextNode(v) && v.isTextEntity() && (s(v), p(d) && s(d));
    }, h = _.registerNodeTransform(r.TextNode, c), E = _.registerNodeTransform(g, N);
    return [h, E];
  }
  return zt.$canShowPlaceholder = l, zt.$canShowPlaceholderCurry = a, zt.$findTextIntersectionFromCharacters = t, zt.$isRootTextContentEmpty = e, zt.$isRootTextContentEmptyCurry = n, zt.$rootTextContent = o, zt.registerLexicalTextEntity = i, zt;
}
var Gt = {}, nl;
function xd() {
  if (nl) return Gt;
  nl = 1;
  var r = Ie;
  function t(o, l = !0) {
    return o ? !1 : (o = e(), l && (o = o.trim()), o === "");
  }
  function e() {
    return r.$getRoot().getTextContent();
  }
  function n(o) {
    if (!t(o, !1)) return !1;
    o = r.$getRoot().getChildren();
    let l = o.length;
    if (1 < l) return !1;
    for (let i = 0; i < l; i++) {
      var a = o[i];
      if (r.$isDecoratorNode(a)) return !1;
      if (r.$isElementNode(a)) {
        if (!r.$isParagraphNode(a) || a.__indent !== 0) return !1;
        a = a.getChildren();
        let _ = a.length;
        for (let m = 0; m < _; m++) if (!r.$isTextNode(a[i])) return !1;
      }
    }
    return !0;
  }
  return Gt.$canShowPlaceholder = n, Gt.$canShowPlaceholderCurry = function(o) {
    return () => n(o);
  }, Gt.$findTextIntersectionFromCharacters = function(o, l) {
    var a = o.getFirstChild();
    o = 0;
    e: for (; a !== null; ) {
      if (r.$isElementNode(a)) {
        var i = a.getFirstChild();
        if (i !== null) {
          a = i;
          continue;
        }
      } else if (r.$isTextNode(a)) {
        if (i = a.getTextContentSize(), o + i > l) return { node: a, offset: l - o };
        o += i;
      }
      if (i = a.getNextSibling(), i !== null) a = i;
      else {
        for (a = a.getParent(); a !== null; ) {
          if (i = a.getNextSibling(), i !== null) {
            a = i;
            continue e;
          }
          a = a.getParent();
        }
        break;
      }
    }
    return null;
  }, Gt.$isRootTextContentEmpty = t, Gt.$isRootTextContentEmptyCurry = function(o, l) {
    return () => t(o, l);
  }, Gt.$rootTextContent = e, Gt.registerLexicalTextEntity = function(o, l, a, i) {
    let _ = (g) => {
      const C = r.$createTextNode(g.getTextContent());
      C.setFormat(g.getFormat()), g.replace(C);
    }, m = o.registerNodeTransform(r.TextNode, (g) => {
      if (g.isSimpleText()) {
        var C = g.getPreviousSibling(), p = g.getTextContent(), s = g;
        if (r.$isTextNode(C)) {
          var u = C.getTextContent(), c = l(u + p);
          if (C instanceof a) {
            if (c === null || C.getLatest().__mode !== 0) {
              _(C);
              return;
            }
            if (c = c.end - u.length, 0 < c) {
              s = p.slice(0, c), s = u + s, C.select(), C.setTextContent(s), c === p.length ? g.remove() : (C = p.slice(c), g.setTextContent(C));
              return;
            }
          } else if (c === null || c.start < u.length) return;
        }
        for (; ; ) {
          if (g = l(p), p = c = g === null ? "" : p.slice(g.end), c === "") {
            if (u = s.getNextSibling(), r.$isTextNode(u)) {
              if (c = s.getTextContent() + u.getTextContent(), c = l(c), c === null) {
                u instanceof a ? _(u) : u.markDirty();
                break;
              } else if (c.start !== 0) break;
            }
          } else if (u = l(c), u !== null && u.start === 0) break;
          if (g === null) break;
          if (g.start === 0 && r.$isTextNode(C) && C.isTextEntity()) continue;
          let N;
          if (g.start === 0 ? [N, s] = s.splitText(g.end) : [, N, s] = s.splitText(g.start, g.end), g = i(N), g.setFormat(N.getFormat()), N.replace(g), s == null) break;
        }
      }
    });
    return o = o.registerNodeTransform(a, (g) => {
      var C = g.getTextContent();
      const p = l(C);
      p === null || p.start !== 0 ? _(g) : C.length > p.end ? g.splitText(p.end) : (C = g.getPreviousSibling(), r.$isTextNode(C) && C.isTextEntity() && (_(C), _(g)), C = g.getNextSibling(), r.$isTextNode(C) && C.isTextEntity() && (_(C), g instanceof a && _(g)));
    }), [m, o];
  }, Gt;
}
var so, rl;
function Br() {
  return rl || (rl = 1, so = process.env.NODE_ENV === "development" ? Cd() : xd()), so;
}
var lo = {}, ol;
function Ed() {
  if (ol) return lo;
  ol = 1;
  var r = Ie;
  function t(e) {
    const n = window.location.origin, o = (l) => {
      if (l.origin !== n)
        return;
      const a = e.getRootElement();
      if (document.activeElement !== a)
        return;
      const i = l.data;
      if (typeof i == "string") {
        let _;
        try {
          _ = JSON.parse(i);
        } catch {
          return;
        }
        if (_ && _.protocol === "nuanria_messaging" && _.type === "request") {
          const m = _.payload;
          if (m && m.functionId === "makeChanges") {
            const g = m.args;
            if (g) {
              const [C, p, s, u, c, N] = g;
              e.update(() => {
                const h = r.$getSelection();
                if (r.$isRangeSelection(h)) {
                  const E = h.anchor;
                  let d = E.getNode(), f = 0, y = 0;
                  if (r.$isTextNode(d) && C >= 0 && p >= 0 && (f = C, y = C + p, h.setTextNodeRange(d, f, d, y)), (f !== y || s !== "") && (h.insertRawText(s), d = E.getNode()), r.$isTextNode(d)) {
                    f = u, y = u + c;
                    const A = d.getTextContentSize();
                    f = f > A ? A : f, y = y > A ? A : y, h.setTextNodeRange(d, f, d, y);
                  }
                  l.stopImmediatePropagation();
                }
              });
            }
          }
        }
      }
    };
    return window.addEventListener("message", o, !0), () => {
      window.removeEventListener("message", o, !0);
    };
  }
  return lo.registerDragonSupport = t, lo;
}
var ao = {}, il;
function Td() {
  if (il) return ao;
  il = 1;
  var r = Ie;
  return ao.registerDragonSupport = function(t) {
    let e = window.location.origin, n = (o) => {
      if (o.origin === e) {
        var l = t.getRootElement();
        if (document.activeElement === l && (l = o.data, typeof l == "string")) {
          try {
            var a = JSON.parse(l);
          } catch {
            return;
          }
          if (a && a.protocol === "nuanria_messaging" && a.type === "request" && (a = a.payload) && a.functionId === "makeChanges" && (a = a.args)) {
            const [i, _, m, g, C] = a;
            t.update(() => {
              const p = r.$getSelection();
              if (r.$isRangeSelection(p)) {
                var s = p.anchor;
                let u = s.getNode(), c = 0, N = 0;
                r.$isTextNode(u) && 0 <= i && 0 <= _ && (c = i, N = i + _, p.setTextNodeRange(u, c, u, N)), (c !== N || m !== "") && (p.insertRawText(m), u = s.getNode()), r.$isTextNode(u) && (c = g, N = g + C, s = u.getTextContentSize(), c = c > s ? s : c, N = N > s ? s : N, p.setTextNodeRange(u, c, u, N)), o.stopImmediatePropagation();
              }
            });
          }
        }
      }
    };
    return window.addEventListener("message", n, !0), () => {
      window.removeEventListener("message", n, !0);
    };
  }, ao;
}
var co, sl;
function Ha() {
  return sl || (sl = 1, co = process.env.NODE_ENV === "development" ? Ed() : Td()), co;
}
var ll;
function yd() {
  if (ll) return no;
  ll = 1;
  var r = Ye(), t = fi(), e = je, n = Br(), o = Ke(), l = ha, a = Ha(), i = $t, g = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  function C(h) {
    return h.getEditorState().read(n.$canShowPlaceholderCurry(h.isComposing()));
  }
  function p(h) {
    const [E, d] = e.useState(() => C(h));
    return g(() => {
      function f() {
        const y = C(h);
        d(y);
      }
      return f(), o.mergeRegister(h.registerUpdateListener(() => {
        f();
      }), h.registerEditableListener(() => {
        f();
      }));
    }, [h]), E;
  }
  function s(h, E) {
    const [d, f] = e.useState(() => h.getDecorators());
    return g(() => h.registerDecoratorListener((y) => {
      l.flushSync(() => {
        f(y);
      });
    }), [h]), e.useEffect(() => {
      f(h.getDecorators());
    }, [h]), e.useMemo(() => {
      const y = [], A = Object.keys(d);
      for (let v = 0; v < A.length; v++) {
        const O = A[v], T = /* @__PURE__ */ e.createElement(E, {
          onError: (b) => h._onError(b)
        }, /* @__PURE__ */ e.createElement(e.Suspense, {
          fallback: null
        }, d[O])), S = h.getElementByKey(O);
        S !== null && y.push(/* @__PURE__ */ l.createPortal(T, S, O));
      }
      return y;
    }, [E, d, h]);
  }
  function u(h) {
    g(() => o.mergeRegister(i.registerRichText(h), a.registerDragonSupport(h)), [h]);
  }
  function c({
    contentEditable: h,
    placeholder: E,
    ErrorBoundary: d
  }) {
    const [f] = r.useLexicalComposerContext(), y = s(f, d);
    return u(f), /* @__PURE__ */ e.createElement(e.Fragment, null, h, /* @__PURE__ */ e.createElement(N, {
      content: E
    }), y);
  }
  function N({
    content: h
  }) {
    const [E] = r.useLexicalComposerContext(), d = p(E), f = t();
    return d ? typeof h == "function" ? h(f) : h : null;
  }
  return no.RichTextPlugin = c, no;
}
var uo = {}, al;
function vd() {
  if (al) return uo;
  al = 1;
  var r = Ye(), t = fi(), e = je, n = Br(), o = Ke(), l = ha, a = Ha(), i = $t, _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  function m(u) {
    return u.getEditorState().read(n.$canShowPlaceholderCurry(u.isComposing()));
  }
  function g(u) {
    let [c, N] = e.useState(() => m(u));
    return _(() => {
      function h() {
        let E = m(u);
        N(E);
      }
      return h(), o.mergeRegister(u.registerUpdateListener(() => {
        h();
      }), u.registerEditableListener(() => {
        h();
      }));
    }, [u]), c;
  }
  function C(u, c) {
    let [N, h] = e.useState(() => u.getDecorators());
    return _(() => u.registerDecoratorListener((E) => {
      l.flushSync(() => {
        h(E);
      });
    }), [u]), e.useEffect(() => {
      h(u.getDecorators());
    }, [u]), e.useMemo(() => {
      let E = [], d = Object.keys(N);
      for (let f = 0; f < d.length; f++) {
        let y = d[f], A = e.createElement(c, { onError: (O) => u._onError(O) }, e.createElement(e.Suspense, { fallback: null }, N[y])), v = u.getElementByKey(y);
        v !== null && E.push(l.createPortal(A, v, y));
      }
      return E;
    }, [c, N, u]);
  }
  function p(u) {
    _(() => o.mergeRegister(i.registerRichText(u), a.registerDragonSupport(u)), [u]);
  }
  function s({ content: u }) {
    var [c] = r.useLexicalComposerContext();
    c = g(c);
    let N = t();
    return c ? typeof u == "function" ? u(N) : u : null;
  }
  return uo.RichTextPlugin = function({ contentEditable: u, placeholder: c, ErrorBoundary: N }) {
    let [h] = r.useLexicalComposerContext();
    return N = C(h, N), p(h), e.createElement(e.Fragment, null, u, e.createElement(s, { content: c }), N);
  }, uo;
}
const Sd = process.env.NODE_ENV === "development" ? yd() : vd();
var bd = Sd, fo, cl;
function Od() {
  if (cl) return fo;
  cl = 1;
  var r = je;
  function t(i, _) {
    return t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, C) {
      return g.__proto__ = C, g;
    }, t(i, _);
  }
  function e(i, _) {
    i.prototype = Object.create(_.prototype), i.prototype.constructor = i, t(i, _);
  }
  var n = function(_, m) {
    return _ === void 0 && (_ = []), m === void 0 && (m = []), _.length !== m.length || _.some(function(g, C) {
      return !Object.is(g, m[C]);
    });
  }, o = {
    error: null
  }, l = /* @__PURE__ */ function(i) {
    e(_, i);
    function _() {
      for (var g, C = arguments.length, p = new Array(C), s = 0; s < C; s++)
        p[s] = arguments[s];
      return g = i.call.apply(i, [this].concat(p)) || this, g.state = o, g.resetErrorBoundary = function() {
        for (var u, c = arguments.length, N = new Array(c), h = 0; h < c; h++)
          N[h] = arguments[h];
        g.props.onReset == null || (u = g.props).onReset.apply(u, N), g.reset();
      }, g;
    }
    _.getDerivedStateFromError = function(C) {
      return {
        error: C
      };
    };
    var m = _.prototype;
    return m.reset = function() {
      this.setState(o);
    }, m.componentDidCatch = function(C, p) {
      var s, u;
      (s = (u = this.props).onError) == null || s.call(u, C, p);
    }, m.componentDidUpdate = function(C, p) {
      var s = this.state.error, u = this.props.resetKeys;
      if (s !== null && p.error !== null && n(C.resetKeys, u)) {
        var c, N;
        (c = (N = this.props).onResetKeysChange) == null || c.call(N, C.resetKeys, u), this.reset();
      }
    }, m.render = function() {
      var C = this.state.error, p = this.props, s = p.fallbackRender, u = p.FallbackComponent, c = p.fallback;
      if (C !== null) {
        var N = {
          error: C,
          resetErrorBoundary: this.resetErrorBoundary
        };
        if (/* @__PURE__ */ r.isValidElement(c))
          return c;
        if (typeof s == "function")
          return s(N);
        if (u)
          return /* @__PURE__ */ r.createElement(u, N);
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
      return this.props.children;
    }, _;
  }(r.Component);
  function a({
    children: i,
    onError: _
  }) {
    return /* @__PURE__ */ r.createElement(l, {
      fallback: /* @__PURE__ */ r.createElement("div", {
        style: {
          border: "1px solid #f00",
          color: "#f00",
          padding: "8px"
        }
      }, "An error was thrown."),
      onError: _
    }, i);
  }
  return fo = a, fo;
}
var go, ul;
function wd() {
  if (ul) return go;
  ul = 1;
  var r = je;
  function t(a, i) {
    return t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, m) {
      return _.__proto__ = m, _;
    }, t(a, i);
  }
  function e(a, i) {
    a.prototype = Object.create(i.prototype), a.prototype.constructor = a, t(a, i);
  }
  function n(a, i) {
    return a === void 0 && (a = []), i === void 0 && (i = []), a.length !== i.length || a.some(function(_, m) {
      return !Object.is(_, i[m]);
    });
  }
  var o = { error: null }, l = function(a) {
    function i() {
      for (var m, g = arguments.length, C = Array(g), p = 0; p < g; p++) C[p] = arguments[p];
      return m = a.call.apply(a, [this].concat(C)) || this, m.state = o, m.resetErrorBoundary = function() {
        for (var s, u = arguments.length, c = Array(u), N = 0; N < u; N++) c[N] = arguments[N];
        m.props.onReset == null || (s = m.props).onReset.apply(s, c), m.reset();
      }, m;
    }
    e(i, a), i.getDerivedStateFromError = function(m) {
      return { error: m };
    };
    var _ = i.prototype;
    return _.reset = function() {
      this.setState(o);
    }, _.componentDidCatch = function(m, g) {
      var C, p;
      (C = (p = this.props).onError) == null || C.call(p, m, g);
    }, _.componentDidUpdate = function(m, g) {
      var C = this.props.resetKeys;
      if (this.state.error !== null && g.error !== null && n(m.resetKeys, C)) {
        var p, s;
        (p = (s = this.props).onResetKeysChange) == null || p.call(s, m.resetKeys, C), this.reset();
      }
    }, _.render = function() {
      var m = this.state.error, g = this.props, C = g.fallbackRender, p = g.FallbackComponent;
      if (g = g.fallback, m !== null) {
        if (m = { error: m, resetErrorBoundary: this.resetErrorBoundary }, r.isValidElement(g)) return g;
        if (typeof C == "function") return C(m);
        if (p) return r.createElement(p, m);
        throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
      return this.props.children;
    }, i;
  }(r.Component);
  return go = function({ children: a, onError: i }) {
    return r.createElement(l, { fallback: r.createElement("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" } }, "An error was thrown."), onError: i }, a);
  }, go;
}
const Rd = process.env.NODE_ENV === "development" ? Od() : wd();
var Md = Rd;
const Ad = /* @__PURE__ */ pa(Md);
var ho = {}, dl;
function Ld() {
  if (dl) return ho;
  dl = 1;
  var r = Ye(), t = je;
  function e({
    defaultSelection: n
  }) {
    const [o] = r.useLexicalComposerContext();
    return t.useEffect(() => {
      o.focus(() => {
        const l = document.activeElement, a = o.getRootElement();
        a !== null && (l === null || !a.contains(l)) && a.focus({
          preventScroll: !0
        });
      }, {
        defaultSelection: n
      });
    }, [n, o]), null;
  }
  return ho.AutoFocusPlugin = e, ho;
}
var po = {}, fl;
function Dd() {
  if (fl) return po;
  fl = 1;
  var r = Ye(), t = je;
  return po.AutoFocusPlugin = function({ defaultSelection: e }) {
    let [n] = r.useLexicalComposerContext();
    return t.useEffect(() => {
      n.focus(() => {
        let o = document.activeElement, l = n.getRootElement();
        l === null || o !== null && l.contains(o) || l.focus({ preventScroll: !0 });
      }, { defaultSelection: e });
    }, [e, n]), null;
  }, po;
}
const $d = process.env.NODE_ENV === "development" ? Ld() : Dd();
var Id = $d, Or = {}, gl;
function Pd() {
  if (gl) return Or;
  gl = 1;
  var r = Ye(), t = Ke(), e = Ie, n = je;
  function o(i) {
    const _ = i.getNodes();
    if (t.$filter(_, (c) => e.$isBlockElementNode(c) && c.canIndent() ? c : null).length > 0)
      return !0;
    const g = i.anchor, C = i.focus, p = C.isBefore(g) ? C : g, s = p.getNode(), u = t.$getNearestBlockElementAncestorOrThrow(s);
    if (u.canIndent()) {
      const c = u.getKey();
      let N = e.$createRangeSelection();
      if (N.anchor.set(c, 0, "element"), N.focus.set(c, 0, "element"), N = e.$normalizeSelection__EXPERIMENTAL(N), N.anchor.is(p))
        return !0;
    }
    return !1;
  }
  function l(i) {
    return i.registerCommand(e.KEY_TAB_COMMAND, (_) => {
      const m = e.$getSelection();
      if (!e.$isRangeSelection(m))
        return !1;
      _.preventDefault();
      const g = o(m) ? _.shiftKey ? e.OUTDENT_CONTENT_COMMAND : e.INDENT_CONTENT_COMMAND : e.INSERT_TAB_COMMAND;
      return i.dispatchCommand(g, void 0);
    }, e.COMMAND_PRIORITY_EDITOR);
  }
  function a() {
    const [i] = r.useLexicalComposerContext();
    return n.useEffect(() => l(i)), null;
  }
  return Or.TabIndentationPlugin = a, Or.registerTabIndentation = l, Or;
}
var wr = {}, hl;
function kd() {
  if (hl) return wr;
  hl = 1;
  var r = Ye(), t = Ke(), e = Ie, n = je;
  function o(a) {
    var i = a.getNodes();
    if (0 < t.$filter(i, (_) => e.$isBlockElementNode(_) && _.canIndent() ? _ : null).length) return !0;
    if (i = a.anchor, a = a.focus, a = a.isBefore(i) ? a : i, i = a.getNode(), i = t.$getNearestBlockElementAncestorOrThrow(i), i.canIndent()) {
      i = i.getKey();
      let _ = e.$createRangeSelection();
      if (_.anchor.set(i, 0, "element"), _.focus.set(i, 0, "element"), _ = e.$normalizeSelection__EXPERIMENTAL(_), _.anchor.is(a)) return !0;
    }
    return !1;
  }
  function l(a) {
    return a.registerCommand(e.KEY_TAB_COMMAND, (i) => {
      let _ = e.$getSelection();
      return e.$isRangeSelection(_) ? (i.preventDefault(), i = o(_) ? i.shiftKey ? e.OUTDENT_CONTENT_COMMAND : e.INDENT_CONTENT_COMMAND : e.INSERT_TAB_COMMAND, a.dispatchCommand(i, void 0)) : !1;
    }, e.COMMAND_PRIORITY_EDITOR);
  }
  return wr.TabIndentationPlugin = function() {
    let [a] = r.useLexicalComposerContext();
    return n.useEffect(() => l(a)), null;
  }, wr.registerTabIndentation = l, wr;
}
const Fd = process.env.NODE_ENV === "development" ? Pd() : kd();
var Bd = Fd, mo = {}, pl;
function jd() {
  if (pl) return mo;
  pl = 1;
  var r = Ye(), t = dr, e = Ke(), n = Ie, o = je;
  function l() {
    const [a] = r.useLexicalComposerContext();
    return o.useEffect(() => a.registerCommand(t.INSERT_HORIZONTAL_RULE_COMMAND, (i) => {
      const _ = n.$getSelection();
      if (!n.$isRangeSelection(_))
        return !1;
      if (_.focus.getNode() !== null) {
        const g = t.$createHorizontalRuleNode();
        e.$insertNodeToNearestRoot(g);
      }
      return !0;
    }, n.COMMAND_PRIORITY_EDITOR), [a]), null;
  }
  return mo.HorizontalRulePlugin = l, mo;
}
var _o = {}, ml;
function Kd() {
  if (ml) return _o;
  ml = 1;
  var r = Ye(), t = dr, e = Ke(), n = Ie, o = je;
  return _o.HorizontalRulePlugin = function() {
    let [l] = r.useLexicalComposerContext();
    return o.useEffect(() => l.registerCommand(t.INSERT_HORIZONTAL_RULE_COMMAND, () => {
      var a = n.$getSelection();
      return n.$isRangeSelection(a) ? (a.focus.getNode() !== null && (a = t.$createHorizontalRuleNode(), e.$insertNodeToNearestRoot(a)), !0) : !1;
    }, n.COMMAND_PRIORITY_EDITOR), [l]), null;
  }, _o;
}
const Hd = process.env.NODE_ENV === "development" ? jd() : Kd();
var Ud = Hd;
function Yd({
  children: r,
  className: t
}) {
  return /* @__PURE__ */ R.jsx("div", { className: t || "placeholder__root", children: r });
}
var No = {}, _l;
function Wd() {
  if (_l) return No;
  _l = 1;
  var r = Ye(), t = je;
  function e() {
    return e = Object.assign ? Object.assign.bind() : function(i) {
      for (var _ = 1; _ < arguments.length; _++) {
        var m = arguments[_];
        for (var g in m)
          Object.prototype.hasOwnProperty.call(m, g) && (i[g] = m[g]);
      }
      return i;
    }, e.apply(this, arguments);
  }
  var l = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  function a({
    ariaActiveDescendant: i,
    ariaAutoComplete: _,
    ariaControls: m,
    ariaDescribedBy: g,
    ariaExpanded: C,
    ariaLabel: p,
    ariaLabelledBy: s,
    ariaMultiline: u,
    ariaOwns: c,
    ariaRequired: N,
    autoCapitalize: h,
    className: E,
    id: d,
    role: f = "textbox",
    spellCheck: y = !0,
    style: A,
    tabIndex: v,
    "data-testid": O,
    ...T
  }) {
    const [S] = r.useLexicalComposerContext(), [b, k] = t.useState(!1), H = t.useCallback((K) => {
      S.setRootElement(K);
    }, [S]);
    return l(() => (k(S.isEditable()), S.registerEditableListener((K) => {
      k(K);
    })), [S]), /* @__PURE__ */ t.createElement("div", e({}, T, {
      "aria-activedescendant": b ? i : void 0,
      "aria-autocomplete": b ? _ : "none",
      "aria-controls": b ? m : void 0,
      "aria-describedby": g,
      "aria-expanded": b && f === "combobox" ? !!C : void 0,
      "aria-label": p,
      "aria-labelledby": s,
      "aria-multiline": u,
      "aria-owns": b ? c : void 0,
      "aria-readonly": b ? void 0 : !0,
      "aria-required": N,
      autoCapitalize: h,
      className: E,
      contentEditable: b,
      "data-testid": O,
      id: d,
      ref: H,
      role: f,
      spellCheck: y,
      style: A,
      tabIndex: v
    }));
  }
  return No.ContentEditable = a, No;
}
var Co = {}, Nl;
function qd() {
  if (Nl) return Co;
  Nl = 1;
  var r = Ye(), t = je;
  function e() {
    return e = Object.assign ? Object.assign.bind() : function(o) {
      for (var l = 1; l < arguments.length; l++) {
        var a = arguments[l], i;
        for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (o[i] = a[i]);
      }
      return o;
    }, e.apply(this, arguments);
  }
  var n = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  return Co.ContentEditable = function({ ariaActiveDescendant: o, ariaAutoComplete: l, ariaControls: a, ariaDescribedBy: i, ariaExpanded: _, ariaLabel: m, ariaLabelledBy: g, ariaMultiline: C, ariaOwns: p, ariaRequired: s, autoCapitalize: u, className: c, id: N, role: h = "textbox", spellCheck: E = !0, style: d, tabIndex: f, "data-testid": y, ...A }) {
    let [v] = r.useLexicalComposerContext(), [O, T] = t.useState(!1), S = t.useCallback((b) => {
      v.setRootElement(b);
    }, [v]);
    return n(() => (T(v.isEditable()), v.registerEditableListener((b) => {
      T(b);
    })), [v]), t.createElement(
      "div",
      e({}, A, { "aria-activedescendant": O ? o : void 0, "aria-autocomplete": O ? l : "none", "aria-controls": O ? a : void 0, "aria-describedby": i, "aria-expanded": O && h === "combobox" ? !!_ : void 0, "aria-label": m, "aria-labelledby": g, "aria-multiline": C, "aria-owns": O ? p : void 0, "aria-readonly": O ? void 0 : !0, "aria-required": s, autoCapitalize: u, className: c, contentEditable: O, "data-testid": y, id: N, ref: S, role: h, spellCheck: E, style: d, tabIndex: f })
    );
  }, Co;
}
const zd = process.env.NODE_ENV === "development" ? Wd() : qd();
var Gd = zd;
function Vd({
  className: r
}) {
  return /* @__PURE__ */ R.jsx(Gd.ContentEditable, { className: r || "content-editable__root" });
}
var wt = en();
const Hn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Jd = Hn && "documentMode" in document ? document.documentMode : null, rn = Hn && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
Hn && "InputEvent" in window && !Jd && "getTargetRanges" in new window.InputEvent("input");
const Ua = Dt.createContext(null), Cl = 4;
function tt({
  children: r,
  className: t,
  onClick: e,
  title: n
}) {
  const o = ct(null), l = Dt.useContext(Ua);
  if (l === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: a } = l;
  return De(() => {
    o && o.current && a(o);
  }, [o, a]), /* @__PURE__ */ R.jsx(
    "button",
    {
      className: t,
      onClick: e,
      ref: o,
      title: n,
      type: "button",
      children: r
    }
  );
}
function Xd({
  children: r,
  dropDownRef: t,
  onClose: e
}) {
  const [n, o] = ve(), [l, a] = ve(), i = We(
    (g) => {
      o((C) => C ? [...C, g] : [g]);
    },
    [o]
  ), _ = (g) => {
    if (!n)
      return;
    const C = g.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(C) && g.preventDefault(), C === "Escape" || C === "Tab" ? e() : C === "ArrowUp" ? a((p) => {
      if (!p)
        return n[0];
      const s = n.indexOf(p) - 1;
      return n[s === -1 ? n.length - 1 : s];
    }) : C === "ArrowDown" && a((p) => p ? n[n.indexOf(p) + 1] : n[0]);
  }, m = Bt(
    () => ({
      registerItem: i
    }),
    [i]
  );
  return De(() => {
    n && !l && a(n[0]), l && l.current && l.current.focus();
  }, [n, l]), /* @__PURE__ */ R.jsx(Ua.Provider, { value: m, children: /* @__PURE__ */ R.jsx("div", { className: "dropdown", ref: t, onKeyDown: _, children: r }) });
}
function xn({
  disabled: r = !1,
  buttonLabel: t,
  buttonAriaLabel: e,
  buttonClassName: n,
  buttonIconClassName: o,
  children: l,
  stopCloseOnClickSelf: a
}) {
  const i = ct(null), _ = ct(null), [m, g] = ve(!1), C = () => {
    g(!1), _ && _.current && _.current.focus();
  };
  return De(() => {
    const p = _.current, s = i.current;
    if (m && p !== null && s !== null) {
      const { top: u, left: c } = p.getBoundingClientRect();
      s.style.top = `${u + p.offsetHeight + Cl}px`, s.style.left = `${Math.min(
        c,
        window.innerWidth - s.offsetWidth - 20
      )}px`;
    }
  }, [i, _, m]), De(() => {
    const p = _.current;
    if (p !== null && m) {
      const s = (u) => {
        const c = u.target;
        a && i.current && i.current.contains(c) || p.contains(c) || g(!1);
      };
      return document.addEventListener("click", s), () => {
        document.removeEventListener("click", s);
      };
    }
  }, [i, _, m, a]), De(() => {
    const p = () => {
      if (m) {
        const s = _.current, u = i.current;
        if (s !== null && u !== null) {
          const { top: c } = s.getBoundingClientRect(), N = c + s.offsetHeight + Cl;
          N !== u.getBoundingClientRect().top && (u.style.top = `${N}px`);
        }
      }
    };
    return document.addEventListener("scroll", p), () => {
      document.removeEventListener("scroll", p);
    };
  }, [_, i, m]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsxs(
      "button",
      {
        type: "button",
        disabled: r,
        "aria-label": e || t,
        className: n,
        onClick: () => g(!m),
        ref: _,
        children: [
          o && /* @__PURE__ */ R.jsx("span", { className: o }),
          t && /* @__PURE__ */ R.jsx("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ R.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    m && Qt(
      /* @__PURE__ */ R.jsx(Xd, { dropDownRef: i, onClose: C, children: l }),
      document.body
    )
  ] });
}
const an = 8, cn = 72, Zd = 15;
function Qd({
  selectionFontSize: r,
  disabled: t = !1,
  editor: e
}) {
  const [n, o] = Dt.useState(r), l = (m, g) => {
    if (!g)
      return m;
    let C = m;
    switch (g) {
      case 2:
        switch (!0) {
          case m > cn:
            C = cn;
            break;
          case m >= 48:
            C -= 12;
            break;
          case m >= 24:
            C -= 4;
            break;
          case m >= 14:
            C -= 2;
            break;
          case m >= 9:
            C -= 1;
            break;
          default:
            C = an;
            break;
        }
        break;
      case 1:
        switch (!0) {
          case m < an:
            C = an;
            break;
          case m < 12:
            C += 1;
            break;
          case m < 20:
            C += 2;
            break;
          case m < 36:
            C += 4;
            break;
          case m <= 60:
            C += 12;
            break;
          default:
            C = cn;
            break;
        }
        break;
    }
    return C;
  }, a = Dt.useCallback(
    (m, g) => {
      const C = (p) => (p || (p = `${Zd}px`), p = p.slice(0, -2), `${l(
        Number(p),
        g
      )}px`);
      e.update(() => {
        if (e.isEditable()) {
          const p = et();
          p !== null && wt.$patchStyleText(p, {
            "font-size": m || C
          });
        }
      });
    },
    [e]
  ), i = (m) => {
    const g = Number(n);
    if (["e", "E", "+", "-"].includes(m.key) || isNaN(g)) {
      m.preventDefault(), o("");
      return;
    }
    if (m.key === "Enter") {
      m.preventDefault();
      let C = g;
      g > cn ? C = cn : g < an && (C = an), o(String(C)), a(String(C) + "px", null);
    }
  }, _ = (m) => {
    if (n !== "") {
      const g = l(
        Number(n),
        m
      );
      a(String(g) + "px", null);
    } else
      a(null, m);
  };
  return Dt.useEffect(() => {
    o(r);
  }, [r]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        disabled: t || r !== "" && Number(n) <= an,
        onClick: () => _(
          2
          /* decrement */
        ),
        className: "toolbar-item font-decrement",
        children: /* @__PURE__ */ R.jsx("i", { className: "format minus-icon" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "number",
        value: n,
        disabled: t,
        className: "toolbar-item font-size-input",
        min: an,
        max: cn,
        onChange: (m) => o(m.target.value),
        onKeyDown: i
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        disabled: t || r !== "" && Number(n) >= cn,
        onClick: () => _(
          1
          /* increment */
        ),
        className: "toolbar-item font-increment",
        children: /* @__PURE__ */ R.jsx("i", { className: "format add-icon" })
      }
    )
  ] });
}
const ef = /* @__PURE__ */ new Set([
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:"
]);
function Pr(r) {
  try {
    const t = new URL(r);
    if (!ef.has(t.protocol))
      return "about:blank";
  } catch {
    return r;
  }
  return r;
}
const tf = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function nf(r) {
  return r === "https://" || tf.test(r);
}
function Ln(r) {
  const t = r.anchor, e = r.focus, n = r.anchor.getNode(), o = r.focus.getNode();
  return n === o ? n : r.isBackward() ? wt.$isAtNodeEnd(e) ? n : o : wt.$isAtNodeEnd(t) ? n : o;
}
function sn({
  label: r,
  value: t,
  onChange: e,
  placeholder: n = "",
  "data-test-id": o,
  type: l = "text"
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ R.jsx("label", { className: "Input__label", children: r }),
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: l,
        className: "Input__input",
        placeholder: n,
        value: t,
        onChange: (a) => {
          e(a.target.value);
        },
        "data-test-id": o
      }
    )
  ] });
}
let Ho = !1;
const rf = [
  "#d0021b",
  "#f5a623",
  "#f8e71c",
  "#8b572a",
  "#7ed321",
  "#417505",
  "#bd10e0",
  "#9013fe",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#000000",
  "#4a4a4a",
  "#9b9b9b",
  "#ffffff"
], er = 214, xl = 150;
function Ya({
  color: r,
  onChange: t
}) {
  const [e, n] = ve(bn("hex", r)), [o, l] = ve(r), a = ct(null), i = Bt(
    () => ({
      x: e.hsv.s / 100 * er,
      y: (100 - e.hsv.v) / 100 * xl
    }),
    [e.hsv.s, e.hsv.v]
  ), _ = Bt(
    () => ({
      x: e.hsv.h / 360 * er
    }),
    [e.hsv]
  ), m = (p) => {
    if (l(p), /^#[0-9A-Fa-f]{6}$/i.test(p)) {
      const s = bn("hex", p);
      n(s);
    }
  }, g = ({ x: p, y: s }) => {
    const u = {
      ...e.hsv,
      s: p / er * 100,
      v: 100 - s / xl * 100
    }, c = bn("hsv", u);
    n(c), l(c.hex);
  }, C = ({ x: p }) => {
    const s = { ...e.hsv, h: p / er * 360 }, u = bn("hsv", s);
    n(u), l(u.hex);
  };
  return De(() => {
    a.current !== null && t && (t(e.hex, Ho), l(e.hex));
  }, [e, t]), De(() => {
    if (r === void 0)
      return;
    const p = bn("hex", r);
    n(p), l(p.hex);
  }, [r]), /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: er },
      ref: a,
      children: [
        /* @__PURE__ */ R.jsx(sn, { label: "Hex", onChange: m, value: o }),
        /* @__PURE__ */ R.jsx("div", { className: "color-picker-basic-color", children: rf.map((p) => /* @__PURE__ */ R.jsx(
          "button",
          {
            className: p === e.hex ? " active" : "",
            style: { backgroundColor: p },
            onClick: () => {
              l(p), n(bn("hex", p));
            }
          },
          p
        )) }),
        /* @__PURE__ */ R.jsx(
          El,
          {
            className: "color-picker-saturation",
            style: { backgroundColor: `hsl(${e.hsv.h}, 100%, 50%)` },
            onChange: g,
            children: /* @__PURE__ */ R.jsx(
              "div",
              {
                className: "color-picker-saturation_cursor",
                style: {
                  backgroundColor: e.hex,
                  left: i.x,
                  top: i.y
                }
              }
            )
          }
        ),
        /* @__PURE__ */ R.jsx(El, { className: "color-picker-hue", onChange: C, children: /* @__PURE__ */ R.jsx(
          "div",
          {
            className: "color-picker-hue_cursor",
            style: {
              backgroundColor: `hsl(${e.hsv.h}, 100%, 50%)`,
              left: _.x
            }
          }
        ) }),
        /* @__PURE__ */ R.jsx(
          "div",
          {
            className: "color-picker-color",
            style: { backgroundColor: e.hex }
          }
        )
      ]
    }
  );
}
function El({ className: r, style: t, onChange: e, children: n }) {
  const o = ct(null), l = ct(!1), a = (_) => {
    if (o.current) {
      const { current: m } = o, { width: g, height: C, left: p, top: s } = m.getBoundingClientRect(), u = Tl(_.clientX - p, g, 0), c = Tl(_.clientY - s, C, 0);
      e({ x: u, y: c });
    }
  }, i = (_) => {
    if (_.button !== 0)
      return;
    a(_);
    const m = (C) => {
      l.current = !0, Ho = !0, a(C);
    }, g = (C) => {
      l.current && (Ho = !1), document.removeEventListener("mousemove", m, !1), document.removeEventListener("mouseup", g, !1), a(C), l.current = !1;
    };
    document.addEventListener("mousemove", m, !1), document.addEventListener("mouseup", g, !1);
  };
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: o,
      className: r,
      style: t,
      onMouseDown: i,
      children: n
    }
  );
}
function Tl(r, t, e) {
  return r > t ? t : r < e ? e : r;
}
function yl(r) {
  if (r.startsWith("#")) {
    if (r.length === 4 || r.length === 5)
      return r = r.split("").map((t, e) => e ? t + t : "#").join(""), r;
    if (r.length === 7 || r.length === 9)
      return r;
  } else {
    const t = document.createElement("canvas").getContext("2d");
    if (!t)
      throw new Error("2d context not supported or canvas already initialized");
    return t.fillStyle = r, t.fillStyle;
  }
  return "#000000";
}
function vl(r) {
  const t = (r.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (e, n, o, l) => "#" + n + n + o + o + l + l
  ).substring(1).match(/.{2}/g) || []).map((e) => parseInt(e, 16));
  return {
    b: t[2],
    g: t[1],
    r: t[0]
  };
}
function xo({ r, g: t, b: e }) {
  r /= 255, t /= 255, e /= 255;
  const n = Math.max(r, t, e), o = n - Math.min(r, t, e), l = o ? (n === r ? (t - e) / o + (t < e ? 6 : 0) : n === t ? 2 + (e - r) / o : 4 + (r - t) / o) * 60 : 0, a = n ? o / n * 100 : 0, i = n * 100;
  return { h: l, s: a, v: i };
}
function of({ h: r, s: t, v: e }) {
  t /= 100, e /= 100;
  const n = ~~(r / 60), o = r / 60 - n, l = e * (1 - t), a = e * (1 - t * o), i = e * (1 - t * (1 - o)), _ = n % 6, m = Math.round([e, a, l, l, i, e][_] * 255), g = Math.round([i, e, e, a, l, l][_] * 255);
  return { b: Math.round([l, l, i, e, e, a][_] * 255), g, r: m };
}
function Sl({ b: r, g: t, r: e }) {
  return "#" + [e, t, r].map((n) => n.toString(16).padStart(2, "0")).join("");
}
function bn(r, t) {
  let e = yl("#121212"), n = vl(e), o = xo(n);
  return r === "hex" ? (e = yl(t), n = vl(e), o = xo(n)) : r === "rgb" ? (n = t, e = Sl(n), o = xo(n)) : r === "hsv" && (o = t, n = of(o), e = Sl(n)), { hex: e, hsv: o, rgb: n };
}
function bl({
  disabled: r = !1,
  stopCloseOnClickSelf: t = !0,
  color: e,
  onChange: n,
  ...o
}) {
  return /* @__PURE__ */ R.jsx(
    xn,
    {
      ...o,
      disabled: r,
      stopCloseOnClickSelf: t,
      children: /* @__PURE__ */ R.jsx(Ya, { color: e, onChange: n })
    }
  );
}
const gi = It();
function sf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([Pn]))
      throw new Error(
        "PageBreakPlugin: PageBreakNode is not registered on editor"
      );
    return qe.mergeRegister(
      r.registerCommand(
        gi,
        () => {
          const t = et();
          if (!ut(t))
            return !1;
          if (t.focus.getNode() !== null) {
            const n = ti();
            qe.$insertNodeToNearestRoot(n);
          }
          return !0;
        },
        jt
      )
    );
  }, [r]), null;
}
function lf({ children: r }) {
  return /* @__PURE__ */ R.jsx("div", { className: "DialogButtonsList", children: r });
}
function Un({
  "data-test-id": r,
  children: t
}) {
  return /* @__PURE__ */ R.jsx("div", { className: "DialogActions", "data-test-id": r, children: t });
}
function af(...r) {
  return r.filter(Boolean).join(" ");
}
function qt({
  "data-test-id": r,
  children: t,
  className: e,
  onClick: n,
  disabled: o,
  small: l,
  title: a
}) {
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      disabled: o,
      className: af(
        "Button__root",
        o && "Button__disabled",
        l && "Button__small",
        e
      ),
      onClick: n,
      title: a,
      "aria-label": a,
      ...r && { "data-test-id": r },
      children: t
    }
  );
}
function Wa({
  accept: r,
  label: t,
  onChange: e,
  "data-test-id": n
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ R.jsx("label", { className: "Input__label", children: t }),
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "file",
        accept: r,
        className: "Input__input",
        onChange: (o) => e(o.target.files),
        "data-test-id": n
      }
    )
  ] });
}
const cf = (r) => Hn ? (r || window).getSelection() : null, mr = It("INSERT_IMAGE_COMMAND");
function uf({
  onClick: r
}) {
  const [t, e] = ve(""), [n, o] = ve(""), l = t === "";
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      sn,
      {
        label: "Image URL",
        placeholder: "i.e. https://source.unsplash.com/random",
        onChange: e,
        value: t,
        "data-test-id": "image-modal-url-input"
      }
    ),
    /* @__PURE__ */ R.jsx(
      sn,
      {
        label: "Alt Text",
        placeholder: "Random unsplash image",
        onChange: o,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ R.jsx(Un, { children: /* @__PURE__ */ R.jsx(
      qt,
      {
        "data-test-id": "image-modal-confirm-btn",
        disabled: l,
        onClick: () => r({ altText: n, src: t }),
        children: "Confirm"
      }
    ) })
  ] });
}
function df({
  onClick: r
}) {
  const [t, e] = ve(""), [n, o] = ve(""), l = t === "", a = (i) => {
    const _ = new FileReader();
    _.onload = function() {
      return typeof _.result == "string" && e(_.result), "";
    }, i !== null && _.readAsDataURL(i[0]);
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      Wa,
      {
        label: "Image Upload",
        onChange: a,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ),
    /* @__PURE__ */ R.jsx(
      sn,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: o,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ R.jsx(Un, { children: /* @__PURE__ */ R.jsx(
      qt,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: l,
        onClick: () => r({ altText: n, src: t }),
        children: "Confirm"
      }
    ) })
  ] });
}
function qa({
  activeEditor: r,
  onClose: t
}) {
  const [e, n] = ve(null), o = ct(!1);
  De(() => {
    o.current = !1;
    const a = (i) => {
      o.current = i.altKey;
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a);
    };
  }, [r]);
  const l = (a) => {
    r.dispatchCommand(mr, a), t();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    !e && /* @__PURE__ */ R.jsxs(lf, { children: [
      /* @__PURE__ */ R.jsx(
        qt,
        {
          "data-test-id": "image-modal-option-url",
          onClick: () => n("url"),
          children: "URL"
        }
      ),
      /* @__PURE__ */ R.jsx(
        qt,
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => n("file"),
          children: "File"
        }
      )
    ] }),
    e === "url" && /* @__PURE__ */ R.jsx(uf, { onClick: l }),
    e === "file" && /* @__PURE__ */ R.jsx(df, { onClick: l })
  ] });
}
function ff({
  captionsEnabled: r
}) {
  const [t] = at.useLexicalComposerContext();
  return De(() => {
    if (!t.hasNodes([kn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return qe.mergeRegister(
      t.registerCommand(
        mr,
        (e) => {
          const n = ni(e);
          return cr([n]), $n(n.getParentOrThrow()) && qe.$wrapNodeInElement(n, Et).selectEnd(), !0;
        },
        jt
      ),
      t.registerCommand(
        sa,
        (e) => hf(e),
        on
      ),
      t.registerCommand(
        Jo,
        (e) => pf(e),
        _t
      ),
      t.registerCommand(
        Xo,
        (e) => mf(e, t),
        on
      )
    );
  }, [r, t]), null;
}
const gf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", za = document.createElement("img");
za.src = gf;
function hf(r) {
  const t = hi();
  if (!t)
    return !1;
  const e = r.dataTransfer;
  return e ? (e.setData("text/plain", "_"), e.setDragImage(za, 0, 0), e.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: t.__altText,
        caption: t.__caption,
        height: t.__height,
        key: t.getKey(),
        maxWidth: t.__maxWidth,
        showCaption: t.__showCaption,
        src: t.__src,
        width: t.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function pf(r) {
  return hi() ? (Ga(r) || r.preventDefault(), !0) : !1;
}
function mf(r, t) {
  const e = hi();
  if (!e)
    return !1;
  const n = _f(r);
  if (!n)
    return !1;
  if (r.preventDefault(), Ga(r)) {
    const o = Nf(r);
    e.remove();
    const l = la();
    o != null && l.applyDOMRange(o), Dn(l), t.dispatchCommand(mr, n);
  }
  return !0;
}
function hi() {
  const r = et();
  if (!zo(r))
    return null;
  const e = r.getNodes()[0];
  return Pu(e) ? e : null;
}
function _f(r) {
  var o;
  const t = (o = r.dataTransfer) == null ? void 0 : o.getData("application/x-lexical-drag");
  if (!t)
    return null;
  const { type: e, data: n } = JSON.parse(t);
  return e !== "image" ? null : n;
}
function Ga(r) {
  const t = r.target;
  return !!(t && t instanceof HTMLElement && !t.closest("code, span.editor-image") && t.parentElement && t.parentElement.closest("div.content-editable__root"));
}
function Nf(r) {
  let t;
  const e = r.target, n = e == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView, o = cf(n);
  if (document.caretRangeFromPoint)
    t = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && o !== null)
    o.collapse(r.rangeParent, r.rangeOffset || 0), t = o.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return t;
}
function Cf({
  onClose: r,
  children: t,
  title: e,
  closeOnClickOutside: n
}) {
  const o = ct(null);
  return De(() => {
    o.current !== null && o.current.focus();
  }, []), De(() => {
    let l = null;
    const a = (m) => {
      m.key === "Escape" && r();
    }, i = (m) => {
      const g = m.target;
      o.current !== null && !o.current.contains(g) && n && r();
    }, _ = o.current;
    return _ !== null && (l = _.parentElement, l !== null && l.addEventListener("click", i)), window.addEventListener("keydown", a), () => {
      window.removeEventListener("keydown", a), l !== null && (l == null || l.removeEventListener("click", i));
    };
  }, [n, r]), /* @__PURE__ */ R.jsx("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ R.jsxs("div", { className: "Modal__modal", tabIndex: -1, ref: o, children: [
    /* @__PURE__ */ R.jsx("h2", { className: "Modal__title", children: e }),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: r,
        children: "X"
      }
    ),
    /* @__PURE__ */ R.jsx("div", { className: "Modal__content", children: t })
  ] }) });
}
function xf({
  onClose: r,
  children: t,
  title: e,
  closeOnClickOutside: n = !1
}) {
  return Qt(
    /* @__PURE__ */ R.jsx(
      Cf,
      {
        onClose: r,
        title: e,
        closeOnClickOutside: n,
        children: t
      }
    ),
    document.body
  );
}
function jr() {
  const [r, t] = ve(null), e = We(() => {
    t(null);
  }, []), n = Bt(() => {
    if (r === null)
      return null;
    const { title: l, content: a, closeOnClickOutside: i } = r;
    return /* @__PURE__ */ R.jsx(
      xf,
      {
        onClose: e,
        title: l,
        closeOnClickOutside: i,
        children: a
      }
    );
  }, [r, e]), o = We(
    (l, a, i = !1) => {
      t({
        closeOnClickOutside: i,
        content: a(e),
        title: l
      });
    },
    [e]
  );
  return [n, o];
}
function Ef({
  children: r,
  label: t,
  className: e,
  ...n
}) {
  return /* @__PURE__ */ R.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ R.jsx("label", { style: { marginTop: "-1em" }, className: "Input__label", children: t }),
    /* @__PURE__ */ R.jsx("select", { ...n, className: e || "select", children: r })
  ] });
}
const Tf = (r) => Hn ? (r || window).getSelection() : null, pi = It("INSERT_INLINE_IMAGE_COMMAND");
function yf({
  activeEditor: r,
  onClose: t
}) {
  const e = ct(!1), [n, o] = ve(""), [l, a] = ve(""), [i, _] = ve(!1), [m, g] = ve("left"), C = n === "", p = (N) => {
    _(N.target.checked);
  }, s = (N) => {
    g(N.target.value);
  }, u = (N) => {
    const h = new FileReader();
    h.onload = function() {
      return typeof h.result == "string" && o(h.result), "";
    }, N !== null && h.readAsDataURL(N[0]);
  };
  De(() => {
    e.current = !1;
    const N = (h) => {
      e.current = h.altKey;
    };
    return document.addEventListener("keydown", N), () => {
      document.removeEventListener("keydown", N);
    };
  }, [r]);
  const c = () => {
    const N = { altText: l, position: m, showCaption: i, src: n };
    r.dispatchCommand(pi, N), t();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ R.jsx(
      Wa,
      {
        label: "Image Upload",
        onChange: u,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ) }),
    /* @__PURE__ */ R.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ R.jsx(
      sn,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: a,
        value: l,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ R.jsxs(
      Ef,
      {
        style: { marginBottom: "1em", width: "290px" },
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: s,
        children: [
          /* @__PURE__ */ R.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ R.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ R.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ R.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ R.jsx(
        "input",
        {
          id: "caption",
          className: "InlineImageNode_Checkbox",
          type: "checkbox",
          checked: i,
          onChange: p
        }
      ),
      /* @__PURE__ */ R.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ R.jsx(Un, { children: /* @__PURE__ */ R.jsx(
      qt,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: C,
        onClick: () => c(),
        children: "Confirm"
      }
    ) })
  ] });
}
function vf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([Kn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return qe.mergeRegister(
      r.registerCommand(
        pi,
        (t) => {
          const e = di(t);
          return cr([e]), $n(e.getParentOrThrow()) && qe.$wrapNodeInElement(e, Et).selectEnd(), !0;
        },
        jt
      ),
      r.registerCommand(
        sa,
        (t) => bf(t),
        on
      ),
      r.registerCommand(
        Jo,
        (t) => Of(t),
        _t
      ),
      r.registerCommand(
        Xo,
        (t) => wf(t, r),
        on
      )
    );
  }, [r]), null;
}
const Sf = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Va = document.createElement("img");
Va.src = Sf;
function bf(r) {
  const t = mi();
  if (!t)
    return !1;
  const e = r.dataTransfer;
  return e ? (e.setData("text/plain", "_"), e.setDragImage(Va, 0, 0), e.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: t.__altText,
        caption: t.__caption,
        height: t.__height,
        key: t.getKey(),
        showCaption: t.__showCaption,
        src: t.__src,
        width: t.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function Of(r) {
  return mi() ? (Ja(r) || r.preventDefault(), !0) : !1;
}
function wf(r, t) {
  const e = mi();
  if (!e)
    return !1;
  const n = Rf(r);
  if (!n)
    return !1;
  if (r.preventDefault(), Ja(r)) {
    const o = Mf(r);
    e.remove();
    const l = la();
    o != null && l.applyDOMRange(o), Dn(l), t.dispatchCommand(pi, n);
  }
  return !0;
}
function mi() {
  const r = et();
  if (!zo(r))
    return null;
  const e = r.getNodes()[0];
  return sd(e) ? e : null;
}
function Rf(r) {
  var o;
  const t = (o = r.dataTransfer) == null ? void 0 : o.getData("application/x-lexical-drag");
  if (!t)
    return null;
  const { type: e, data: n } = JSON.parse(t);
  return e !== "image" ? null : n;
}
function Ja(r) {
  const t = r.target;
  return !!(t && t instanceof HTMLElement && !t.closest("code, span.editor-image") && t.parentElement && t.parentElement.closest("div.content-editable__root"));
}
function Mf(r) {
  let t;
  const e = r.target, n = e == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView, o = Tf(n);
  if (document.caretRangeFromPoint)
    t = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && o !== null)
    o.collapse(r.rangeParent, r.rangeOffset || 0), t = o.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return t;
}
const _i = It(
  "INSERT_EXCALIDRAW_COMMAND"
);
function Af() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([_n]))
      throw new Error(
        "ExcalidrawPlugin: ExcalidrawNode not registered on editor"
      );
    return r.registerCommand(
      _i,
      () => {
        const t = ka();
        return cr([t]), $n(t.getParentOrThrow()) && qe.$wrapNodeInElement(t, Et).selectEnd(), !0;
      },
      jt
    );
  }, [r]), null;
}
function Lf(r, t, ...e) {
  if (!r)
    throw new Error(
      "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + t
    );
}
It("INSERT_NEW_TABLE_COMMAND");
oa({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function Xa({
  activeEditor: r,
  onClose: t
}) {
  const [e, n] = ve("5"), [o, l] = ve("5"), [a, i] = ve(!0);
  De(() => {
    const m = Number(e), g = Number(o);
    m && m > 0 && m <= 500 && g && g > 0 && g <= 50 ? i(!1) : i(!0);
  }, [e, o]);
  const _ = () => {
    r.dispatchCommand($e.INSERT_TABLE_COMMAND, {
      columns: o,
      rows: e
    }), t();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      sn,
      {
        placeholder: "# of rows (1-500)",
        label: "Rows",
        onChange: n,
        value: e,
        "data-test-id": "table-modal-rows",
        type: "number"
      }
    ),
    /* @__PURE__ */ R.jsx(
      sn,
      {
        placeholder: "# of columns (1-50)",
        label: "Columns",
        onChange: l,
        value: o,
        "data-test-id": "table-modal-columns",
        type: "number"
      }
    ),
    /* @__PURE__ */ R.jsx(Un, { "data-test-id": "table-model-confirm-insert", children: /* @__PURE__ */ R.jsx(qt, { disabled: a, onClick: _, children: "Confirm" }) })
  ] });
}
const Za = It(
  "INSERT_POLL_COMMAND"
);
function Qa({
  activeEditor: r,
  onClose: t
}) {
  const [e, n] = ve(""), o = () => {
    r.dispatchCommand(Za, e), t();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(sn, { label: "Question", onChange: n, value: e }),
    /* @__PURE__ */ R.jsx(Un, { children: /* @__PURE__ */ R.jsx(qt, { disabled: e.trim() === "", onClick: o, children: "Confirm" }) })
  ] });
}
function Df() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([jn]))
      throw new Error("PollPlugin: PollNode not registered on editor");
    return r.registerCommand(
      Za,
      (t) => {
        const e = ui(t, [
          Ws(),
          Ws()
        ]);
        return cr([e]), $n(e.getParentOrThrow()) && qe.$wrapNodeInElement(e, Et).selectEnd(), !0;
      },
      jt
    );
  }, [r]), null;
}
const ec = It(), $f = It();
function If() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([Nn, Cn]))
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    const t = (e) => {
      var o, l;
      const n = et();
      if (ut(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const a = qe.$findMatchingParent(
          n.anchor.getNode(),
          Tr
        );
        if (Tr(a)) {
          const i = a.getParent(), _ = i && (e ? i.getFirstChild() : i == null ? void 0 : i.getLastChild()), m = e ? (o = a.getFirstDescendant()) == null ? void 0 : o.getKey() : (l = a.getLastDescendant()) == null ? void 0 : l.getKey();
          i !== null && _ === a && n.anchor.key === m && (e ? a.insertBefore(Et()) : a.insertAfter(Et()));
        }
      }
      return !1;
    };
    return qe.mergeRegister(
      // When layout is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        aa,
        () => t(!1),
        _t
      ),
      r.registerCommand(
        ca,
        () => t(!1),
        _t
      ),
      // When layout is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        ua,
        () => t(!0),
        _t
      ),
      r.registerCommand(
        da,
        () => t(!0),
        _t
      ),
      r.registerCommand(
        ec,
        (e) => (r.update(() => {
          const n = Fa(e), o = Eo(e);
          for (let l = 0; l < o; l++)
            n.append(
              Ko().append(Et())
            );
          qe.$insertNodeToNearestRoot(n), n.selectStart();
        }), !0),
        jt
      ),
      r.registerCommand(
        $f,
        ({ template: e, nodeKey: n }) => (r.update(() => {
          const o = Go(n);
          if (!Tr(o))
            return;
          const l = Eo(e), a = Eo(
            o.getTemplateColumns()
          );
          if (l > a)
            for (let i = a; i < l; i++)
              o.append(
                Ko().append(Et())
              );
          else if (l < a)
            for (let i = a - 1; i >= l; i--) {
              const _ = o.getChildAtIndex(i);
              Ys(_) && _.remove();
            }
          o.setTemplateColumns(e);
        }), !0),
        jt
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(Cn, (e) => {
        const n = e.getParent();
        if (!Tr(n)) {
          const o = e.getChildren();
          for (const l of o)
            e.insertBefore(l);
          e.remove();
        }
      }),
      r.registerNodeTransform(Nn, (e) => {
        const n = e.getChildren();
        if (!n.every(Ys)) {
          for (const o of n)
            e.insertBefore(o);
          e.remove();
        }
      })
    );
  }, [r]), null;
}
function Eo(r) {
  return r.trim().split(/\s+/).length;
}
const To = [
  { label: "2 columns (equal width)", value: "1fr 1fr" },
  { label: "2 columns (25% - 75%)", value: "1fr 3fr" },
  { label: "3 columns (equal width)", value: "1fr 1fr 1fr" },
  { label: "3 columns (25% - 50% - 25%)", value: "1fr 2fr 1fr" },
  { label: "4 columns (equal width)", value: "1fr 1fr 1fr 1fr" }
];
function tc({
  activeEditor: r,
  onClose: t
}) {
  var a;
  const [e, n] = ve(To[0].value), o = (a = To.find((i) => i.value === e)) == null ? void 0 : a.label, l = () => {
    r.dispatchCommand(ec, e), t();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      xn,
      {
        buttonClassName: "toolbar-item dialog-dropdown",
        buttonLabel: o,
        children: To.map(({ label: i, value: _ }) => /* @__PURE__ */ R.jsx(
          tt,
          {
            className: "item",
            onClick: () => n(_),
            children: /* @__PURE__ */ R.jsx("span", { className: "text", children: i })
          },
          _
        ))
      }
    ),
    /* @__PURE__ */ R.jsx(qt, { onClick: l, children: "Insert" })
  ] });
}
function Uo(r, t) {
  return Uo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, Uo(r, t);
}
function Pf(r, t) {
  r.prototype = Object.create(t.prototype), r.prototype.constructor = r, Uo(r, t);
}
var kf = function(t, e) {
  return t === void 0 && (t = []), e === void 0 && (e = []), t.length !== e.length || t.some(function(n, o) {
    return !Object.is(n, e[o]);
  });
}, Ol = {
  error: null
}, Ff = /* @__PURE__ */ function(r) {
  Pf(t, r);
  function t() {
    for (var n, o = arguments.length, l = new Array(o), a = 0; a < o; a++)
      l[a] = arguments[a];
    return n = r.call.apply(r, [this].concat(l)) || this, n.state = Ol, n.resetErrorBoundary = function() {
      for (var i, _ = arguments.length, m = new Array(_), g = 0; g < _; g++)
        m[g] = arguments[g];
      n.props.onReset == null || (i = n.props).onReset.apply(i, m), n.reset();
    }, n;
  }
  t.getDerivedStateFromError = function(o) {
    return {
      error: o
    };
  };
  var e = t.prototype;
  return e.reset = function() {
    this.setState(Ol);
  }, e.componentDidCatch = function(o, l) {
    var a, i;
    (a = (i = this.props).onError) == null || a.call(i, o, l);
  }, e.componentDidUpdate = function(o, l) {
    var a = this.state.error, i = this.props.resetKeys;
    if (a !== null && l.error !== null && kf(o.resetKeys, i)) {
      var _, m;
      (_ = (m = this.props).onResetKeysChange) == null || _.call(m, o.resetKeys, i), this.reset();
    }
  }, e.render = function() {
    var o = this.state.error, l = this.props, a = l.fallbackRender, i = l.FallbackComponent, _ = l.fallback;
    if (o !== null) {
      var m = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ Dt.isValidElement(_))
        return _;
      if (typeof a == "function")
        return a(m);
      if (i)
        return /* @__PURE__ */ Dt.createElement(i, m);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, t;
}(Dt.Component);
function Bf({
  equation: r,
  inline: t,
  onDoubleClick: e
}) {
  const n = ct(null);
  return De(() => {
    const o = n.current;
    o !== null && ga.render(r, o, {
      displayMode: !t,
      // true === block display //
      errorColor: "#cc0000",
      output: "html",
      strict: "warn",
      throwOnError: !1,
      trust: !1
    });
  }, [r, t]), // We use an empty image tag either side to ensure Android doesn't try and compose from the
  // inner text from Katex. There didn't seem to be any other way of making this work,
  // without having a physical space.
  /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx("img", { src: "#", alt: "" }),
    /* @__PURE__ */ R.jsx(
      "span",
      {
        role: "button",
        tabIndex: -1,
        onDoubleClick: e,
        ref: n
      }
    ),
    /* @__PURE__ */ R.jsx("img", { src: "#", alt: "" })
  ] });
}
function jf({
  onConfirm: r,
  initialEquation: t = ""
}) {
  const [e] = at.useLexicalComposerContext(), [n, o] = ve(t), [l, a] = ve(!0), i = We(() => {
    r(n, l);
  }, [r, n, l]), _ = We(() => {
    a(!l);
  }, [a, l]);
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsxs("div", { className: "KatexEquationAlterer_defaultRow", children: [
      "Inline",
      /* @__PURE__ */ R.jsx("input", { type: "checkbox", checked: l, onChange: _ })
    ] }),
    /* @__PURE__ */ R.jsx("div", { className: "KatexEquationAlterer_defaultRow", children: "Equation " }),
    /* @__PURE__ */ R.jsx("div", { className: "KatexEquationAlterer_centerRow", children: l ? /* @__PURE__ */ R.jsx(
      "input",
      {
        onChange: (m) => {
          o(m.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) : /* @__PURE__ */ R.jsx(
      "textarea",
      {
        onChange: (m) => {
          o(m.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) }),
    /* @__PURE__ */ R.jsx("div", { className: "KatexEquationAlterer_defaultRow", children: "Visualization " }),
    /* @__PURE__ */ R.jsx("div", { className: "KatexEquationAlterer_centerRow", children: /* @__PURE__ */ R.jsx(Ff, { onError: (m) => e._onError(m), fallback: null, children: /* @__PURE__ */ R.jsx(
      Bf,
      {
        equation: n,
        inline: !1,
        onDoubleClick: () => null
      }
    ) }) }),
    /* @__PURE__ */ R.jsx("div", { className: "KatexEquationAlterer_dialogActions", children: /* @__PURE__ */ R.jsx(qt, { onClick: i, children: "Confirm" }) })
  ] });
}
const nc = It("INSERT_EQUATION_COMMAND");
function rc({
  activeEditor: r,
  onClose: t
}) {
  const e = We(
    (n, o) => {
      r.dispatchCommand(nc, { equation: n, inline: o }), t();
    },
    [r, t]
  );
  return /* @__PURE__ */ R.jsx(jf, { onConfirm: e });
}
function Kf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([Bn]))
      throw new Error(
        "EquationsPlugins: EquationsNode not registered on editor"
      );
    return r.registerCommand(
      nc,
      (t) => {
        const { equation: e, inline: n } = t, o = ci(e, n);
        return cr([o]), $n(o.getParentOrThrow()) && qe.$wrapNodeInElement(o, Et).selectEnd(), !0;
      },
      jt
    );
  }, [r]), null;
}
const Ni = It();
It();
function Hf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([
      hn,
      mn,
      pn
    ]))
      throw new Error(
        "CollapsiblePlugin: CollapsibleContainerNode, CollapsibleTitleNode, or CollapsibleContentNode not registered on editor"
      );
    const t = () => {
      var o;
      const n = et();
      if (ut(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const l = qe.$findMatchingParent(
          n.anchor.getNode(),
          Xt
        );
        if (Xt(l)) {
          const a = l.getParent();
          a !== null && a.getFirstChild() === l && n.anchor.key === ((o = l.getFirstDescendant()) == null ? void 0 : o.getKey()) && l.insertBefore(Et());
        }
      }
      return !1;
    }, e = () => {
      const n = et();
      if (ut(n) && n.isCollapsed()) {
        const o = qe.$findMatchingParent(
          n.anchor.getNode(),
          Xt
        );
        if (Xt(o)) {
          const l = o.getParent();
          if (l !== null && l.getLastChild() === o) {
            const a = o.getFirstDescendant(), i = o.getLastDescendant();
            (i !== null && n.anchor.key === i.getKey() && n.anchor.offset === i.getTextContentSize() || a !== null && n.anchor.key === a.getKey() && n.anchor.offset === a.getTextContentSize()) && o.insertAfter(Et());
          }
        }
      }
      return !1;
    };
    return qe.mergeRegister(
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Title + Content" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(pn, (n) => {
        const o = n.getParent();
        if (!Xt(o)) {
          const l = n.getChildren();
          for (const a of l)
            n.insertBefore(a);
          n.remove();
        }
      }),
      r.registerNodeTransform(mn, (n) => {
        const o = n.getParent();
        if (!Xt(o)) {
          n.replace(
            Et().append(...n.getChildren())
          );
          return;
        }
      }),
      r.registerNodeTransform(hn, (n) => {
        const o = n.getChildren();
        if (o.length !== 2 || !Hs(o[0]) || !Pa(o[1])) {
          for (const l of o)
            n.insertBefore(l);
          n.remove();
        }
      }),
      // This handles the case when container is collapsed and we delete its previous sibling
      // into it, it would cause collapsed content deleted (since it's display: none, and selection
      // swallows it when deletes single char). Instead we expand container, which is although
      // not perfect, but avoids bigger problem
      r.registerCommand(
        Ec,
        () => {
          const n = et();
          if (!ut(n) || !n.isCollapsed() || n.anchor.offset !== 0)
            return !1;
          const l = n.anchor.getNode().getTopLevelElement();
          if (l === null)
            return !1;
          const a = l.getPreviousSibling();
          return !Xt(a) || a.getOpen() ? !1 : (a.setOpen(!0), !0);
        },
        _t
      ),
      // When collapsible is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        aa,
        e,
        _t
      ),
      r.registerCommand(
        ca,
        e,
        _t
      ),
      // When collapsible is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        ua,
        t,
        _t
      ),
      r.registerCommand(
        da,
        t,
        _t
      ),
      // Handling CMD+Enter to toggle collapsible element collapsed state
      r.registerCommand(
        Tc,
        () => {
          var o;
          const n = (o = r._window) == null ? void 0 : o.event;
          if (n && (n.ctrlKey || n.metaKey) && n.key === "Enter") {
            const l = yc();
            if (ut(l) && l.isCollapsed()) {
              const a = qe.$findMatchingParent(
                l.anchor.getNode(),
                (i) => gn(i) && !i.isInline()
              );
              if (Hs(a)) {
                const i = a.getParent();
                if (Xt(i))
                  return i.toggleOpen(), Dn(l.clone()), !0;
              }
            }
          }
          return !1;
        },
        _t
      ),
      r.registerCommand(
        Ni,
        () => (r.update(() => {
          const n = ai(), o = Et();
          qe.$insertNodeToNearestRoot(
            si(!0).append(
              n.append(o),
              li().append(Et())
            )
          ), o.select();
        }), !0),
        _t
      )
    );
  }, [r]), null;
}
var On = {}, Rr = {}, wl;
function Uf() {
  if (wl) return Rr;
  wl = 1;
  var r = Ye(), t = Ie, e = je, n = Ke(), a = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  class i {
    constructor(f) {
      this.key = f, this.ref = {
        current: null
      }, this.setRefElement = this.setRefElement.bind(this);
    }
    setRefElement(f) {
      this.ref = {
        current: f
      };
    }
  }
  const _ = (d) => {
    const f = document.getElementById("typeahead-menu");
    if (!f) return;
    const y = f.getBoundingClientRect();
    y.top + y.height > window.innerHeight && f.scrollIntoView({
      block: "center"
    }), y.top < 0 && f.scrollIntoView({
      block: "center"
    }), d.scrollIntoView({
      block: "nearest"
    });
  };
  function m(d, f, y) {
    let A = y;
    for (let v = A; v <= f.length; v++)
      d.substr(-v) === f.substr(0, v) && (A = v);
    return A;
  }
  function g(d) {
    const f = t.$getSelection();
    if (!t.$isRangeSelection(f) || !f.isCollapsed())
      return null;
    const y = f.anchor;
    if (y.type !== "text")
      return null;
    const A = y.getNode();
    if (!A.isSimpleText())
      return null;
    const v = y.offset, O = A.getTextContent().slice(0, v), T = d.replaceableString.length, S = m(O, d.matchingString, T), b = v - S;
    if (b < 0)
      return null;
    let k;
    return b === 0 ? [k] = A.splitText(v) : [, k] = A.splitText(b, v), k;
  }
  function C(d, f) {
    let y = getComputedStyle(d);
    const A = y.position === "absolute", v = /(auto|scroll)/;
    if (y.position === "fixed")
      return document.body;
    for (let O = d; O = O.parentElement; )
      if (y = getComputedStyle(O), !(A && y.position === "static") && v.test(y.overflow + y.overflowY + y.overflowX))
        return O;
    return document.body;
  }
  function p(d, f) {
    const y = d.getBoundingClientRect(), A = f.getBoundingClientRect();
    return y.top > A.top && y.top < A.bottom;
  }
  function s(d, f, y, A) {
    const [v] = r.useLexicalComposerContext();
    e.useEffect(() => {
      if (f != null && d != null) {
        const O = v.getRootElement(), T = O != null ? C(O) : document.body;
        let S = !1, b = p(f, T);
        const k = function() {
          S || (window.requestAnimationFrame(function() {
            y(), S = !1;
          }), S = !0);
          const K = p(f, T);
          K !== b && (b = K, A != null && A(K));
        }, H = new ResizeObserver(y);
        return window.addEventListener("resize", y), document.addEventListener("scroll", k, {
          capture: !0,
          passive: !0
        }), H.observe(f), () => {
          H.unobserve(f), window.removeEventListener("resize", y), document.removeEventListener("scroll", k, !0);
        };
      }
    }, [f, v, A, y, d]);
  }
  const u = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  function c({
    close: d,
    editor: f,
    anchorElementRef: y,
    resolution: A,
    options: v,
    menuRenderFn: O,
    onSelectOption: T,
    shouldSplitNodeWithQuery: S = !1,
    commandPriority: b = t.COMMAND_PRIORITY_LOW
  }) {
    const [k, H] = e.useState(null), K = A.match && A.match.matchingString;
    e.useEffect(() => {
      H(0);
    }, [K]);
    const B = e.useCallback((D) => {
      f.update(() => {
        const Y = A.match != null && S ? g(A.match) : null;
        T(D, Y, d, A.match ? A.match.matchingString : "");
      });
    }, [f, S, A.match, T, d]), w = e.useCallback((D) => {
      const Y = f.getRootElement();
      Y !== null && (Y.setAttribute("aria-activedescendant", "typeahead-item-" + D), H(D));
    }, [f]);
    e.useEffect(() => () => {
      const D = f.getRootElement();
      D !== null && D.removeAttribute("aria-activedescendant");
    }, [f]), a(() => {
      v === null ? H(null) : k === null && w(0);
    }, [v, k, w]), e.useEffect(() => n.mergeRegister(f.registerCommand(u, ({
      option: D
    }) => D.ref && D.ref.current != null ? (_(D.ref.current), !0) : !1, b)), [f, w, b]), e.useEffect(() => n.mergeRegister(f.registerCommand(t.KEY_ARROW_DOWN_COMMAND, (D) => {
      const Y = D;
      if (v !== null && v.length && k !== null) {
        const j = k !== v.length - 1 ? k + 1 : 0;
        w(j);
        const $ = v[j];
        $.ref != null && $.ref.current && f.dispatchCommand(u, {
          index: j,
          option: $
        }), Y.preventDefault(), Y.stopImmediatePropagation();
      }
      return !0;
    }, b), f.registerCommand(t.KEY_ARROW_UP_COMMAND, (D) => {
      const Y = D;
      if (v !== null && v.length && k !== null) {
        const j = k !== 0 ? k - 1 : v.length - 1;
        w(j);
        const $ = v[j];
        $.ref != null && $.ref.current && _($.ref.current), Y.preventDefault(), Y.stopImmediatePropagation();
      }
      return !0;
    }, b), f.registerCommand(t.KEY_ESCAPE_COMMAND, (D) => {
      const Y = D;
      return Y.preventDefault(), Y.stopImmediatePropagation(), d(), !0;
    }, b), f.registerCommand(t.KEY_TAB_COMMAND, (D) => {
      const Y = D;
      return v === null || k === null || v[k] == null ? !1 : (Y.preventDefault(), Y.stopImmediatePropagation(), B(v[k]), !0);
    }, b), f.registerCommand(t.KEY_ENTER_COMMAND, (D) => v === null || k === null || v[k] == null ? !1 : (D !== null && (D.preventDefault(), D.stopImmediatePropagation()), B(v[k]), !0), b)), [B, d, f, v, k, w, b]);
    const x = e.useMemo(() => ({
      options: v,
      selectOptionAndCleanUp: B,
      selectedIndex: k,
      setHighlightedIndex: H
    }), [B, k, v]);
    return O(y, x, A.match ? A.match.matchingString : "");
  }
  function N(d, f, y, A = document.body) {
    const [v] = r.useLexicalComposerContext(), O = e.useRef(document.createElement("div")), T = e.useCallback(() => {
      O.current.style.top = O.current.style.bottom;
      const b = v.getRootElement(), k = O.current, H = k.firstChild;
      if (b !== null && d !== null) {
        const {
          left: K,
          top: B,
          width: w,
          height: x
        } = d.getRect(), D = O.current.offsetHeight;
        if (k.style.top = `${B + window.pageYOffset + D + 3}px`, k.style.left = `${K + window.pageXOffset}px`, k.style.height = `${x}px`, k.style.width = `${w}px`, H !== null) {
          H.style.top = `${B}`;
          const Y = H.getBoundingClientRect(), j = Y.height, $ = Y.width, W = b.getBoundingClientRect();
          K + $ > W.right && (k.style.left = `${W.right - $ + window.pageXOffset}px`), (B + j > window.innerHeight || B + j > W.bottom) && B - W.top > j && (k.style.top = `${B - j + window.pageYOffset - x}px`);
        }
        k.isConnected || (y != null && (k.className = y), k.setAttribute("aria-label", "Typeahead menu"), k.setAttribute("id", "typeahead-menu"), k.setAttribute("role", "listbox"), k.style.display = "block", k.style.position = "absolute", A.append(k)), O.current = k, b.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [v, d, y, A]);
    e.useEffect(() => {
      const b = v.getRootElement();
      if (d !== null)
        return T(), () => {
          b !== null && b.removeAttribute("aria-controls");
          const k = O.current;
          k !== null && k.isConnected && k.remove();
        };
    }, [v, T, d]);
    const S = e.useCallback((b) => {
      d !== null && (b || f(null));
    }, [d, f]);
    return s(d, O.current, T, S), O;
  }
  function h(d) {
    e.startTransition ? e.startTransition(d) : d();
  }
  function E({
    options: d,
    nodeKey: f,
    onClose: y,
    onOpen: A,
    onSelectOption: v,
    menuRenderFn: O,
    anchorClassName: T,
    commandPriority: S = t.COMMAND_PRIORITY_LOW,
    parent: b
  }) {
    const [k] = r.useLexicalComposerContext(), [H, K] = e.useState(null), B = N(H, K, T, b), w = e.useCallback(() => {
      K(null), y != null && H !== null && y();
    }, [y, H]), x = e.useCallback((Y) => {
      K(Y), A != null && H === null && A(Y);
    }, [A, H]), D = e.useCallback(() => {
      f ? k.update(() => {
        const Y = t.$getNodeByKey(f), j = k.getElementByKey(f);
        Y != null && j != null && H == null && h(() => x({
          getRect: () => j.getBoundingClientRect()
        }));
      }) : f == null && H != null && w();
    }, [w, k, f, x, H]);
    return e.useEffect(() => {
      D();
    }, [D, f]), e.useEffect(() => {
      if (f != null)
        return k.registerUpdateListener(({
          dirtyElements: Y
        }) => {
          Y.get(f) && D();
        });
    }, [k, D, f]), H === null || k === null ? null : /* @__PURE__ */ e.createElement(c, {
      close: w,
      resolution: H,
      editor: k,
      anchorElementRef: B,
      options: d,
      menuRenderFn: O,
      onSelectOption: v,
      commandPriority: S
    });
  }
  return Rr.LexicalNodeMenuPlugin = E, Rr.MenuOption = i, Rr;
}
var Mr = {}, Rl;
function Yf() {
  if (Rl) return Mr;
  Rl = 1;
  var r = Ye(), t = Ie, e = je, n = Ke(), o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  class l {
    constructor(N) {
      this.key = N, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
    }
    setRefElement(N) {
      this.ref = { current: N };
    }
  }
  let a = (c) => {
    const N = document.getElementById("typeahead-menu");
    if (N) {
      var h = N.getBoundingClientRect();
      h.top + h.height > window.innerHeight && N.scrollIntoView({ block: "center" }), 0 > h.top && N.scrollIntoView({ block: "center" }), c.scrollIntoView({ block: "nearest" });
    }
  };
  function i(c) {
    var N = t.$getSelection();
    if (!t.$isRangeSelection(N) || !N.isCollapsed()) return null;
    var h = N.anchor;
    if (h.type !== "text" || (N = h.getNode(), !N.isSimpleText())) return null;
    h = h.offset;
    let E = N.getTextContent().slice(0, h);
    var d = c.matchingString;
    c = c.replaceableString.length;
    for (let y = c; y <= d.length; y++) E.substr(-y) === d.substr(0, y) && (c = y);
    if (c = h - c, 0 > c) return null;
    let f;
    return c === 0 ? [f] = N.splitText(h) : [, f] = N.splitText(c, h), f;
  }
  function _(c, N) {
    let h = getComputedStyle(c), E = h.position === "absolute";
    if (N = N ? /(auto|scroll|hidden)/ : /(auto|scroll)/, h.position === "fixed") return document.body;
    for (; c = c.parentElement; ) if (h = getComputedStyle(c), (!E || h.position !== "static") && N.test(h.overflow + h.overflowY + h.overflowX)) return c;
    return document.body;
  }
  function m(c, N) {
    return c = c.getBoundingClientRect(), N = N.getBoundingClientRect(), c.top > N.top && c.top < N.bottom;
  }
  function g(c, N, h, E) {
    let [d] = r.useLexicalComposerContext();
    e.useEffect(() => {
      if (N != null && c != null) {
        let f = d.getRootElement(), y = f != null ? _(f, !1) : document.body, A = !1, v = m(N, y), O = function() {
          A || (window.requestAnimationFrame(function() {
            h(), A = !1;
          }), A = !0);
          const S = m(N, y);
          S !== v && (v = S, E != null && E(S));
        }, T = new ResizeObserver(h);
        return window.addEventListener("resize", h), document.addEventListener("scroll", O, { capture: !0, passive: !0 }), T.observe(N), () => {
          T.unobserve(N), window.removeEventListener("resize", h), document.removeEventListener(
            "scroll",
            O,
            !0
          );
        };
      }
    }, [N, d, E, h, c]);
  }
  let C = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  function p({ close: c, editor: N, anchorElementRef: h, resolution: E, options: d, menuRenderFn: f, onSelectOption: y, shouldSplitNodeWithQuery: A = !1, commandPriority: v = t.COMMAND_PRIORITY_LOW }) {
    let [O, T] = e.useState(null);
    e.useEffect(() => {
      T(0);
    }, [E.match && E.match.matchingString]);
    let S = e.useCallback((H) => {
      N.update(() => {
        const K = E.match != null && A ? i(E.match) : null;
        y(H, K, c, E.match ? E.match.matchingString : "");
      });
    }, [N, A, E.match, y, c]), b = e.useCallback((H) => {
      const K = N.getRootElement();
      K !== null && (K.setAttribute(
        "aria-activedescendant",
        "typeahead-item-" + H
      ), T(H));
    }, [N]);
    e.useEffect(() => () => {
      let H = N.getRootElement();
      H !== null && H.removeAttribute("aria-activedescendant");
    }, [N]), o(() => {
      d === null ? T(null) : O === null && b(0);
    }, [d, O, b]), e.useEffect(() => n.mergeRegister(N.registerCommand(C, ({ option: H }) => H.ref && H.ref.current != null ? (a(H.ref.current), !0) : !1, v)), [N, b, v]), e.useEffect(() => n.mergeRegister(N.registerCommand(t.KEY_ARROW_DOWN_COMMAND, (H) => {
      if (d !== null && d.length && O !== null) {
        let K = O !== d.length - 1 ? O + 1 : 0;
        b(K);
        let B = d[K];
        B.ref != null && B.ref.current && N.dispatchCommand(C, { index: K, option: B }), H.preventDefault(), H.stopImmediatePropagation();
      }
      return !0;
    }, v), N.registerCommand(t.KEY_ARROW_UP_COMMAND, (H) => {
      if (d !== null && d.length && O !== null) {
        var K = O !== 0 ? O - 1 : d.length - 1;
        b(K), K = d[K], K.ref != null && K.ref.current && a(K.ref.current), H.preventDefault(), H.stopImmediatePropagation();
      }
      return !0;
    }, v), N.registerCommand(t.KEY_ESCAPE_COMMAND, (H) => (H.preventDefault(), H.stopImmediatePropagation(), c(), !0), v), N.registerCommand(t.KEY_TAB_COMMAND, (H) => d === null || O === null || d[O] == null ? !1 : (H.preventDefault(), H.stopImmediatePropagation(), S(d[O]), !0), v), N.registerCommand(t.KEY_ENTER_COMMAND, (H) => d === null || O === null || d[O] == null ? !1 : (H !== null && (H.preventDefault(), H.stopImmediatePropagation()), S(d[O]), !0), v)), [S, c, N, d, O, b, v]);
    let k = e.useMemo(() => ({ options: d, selectOptionAndCleanUp: S, selectedIndex: O, setHighlightedIndex: T }), [S, O, d]);
    return f(h, k, E.match ? E.match.matchingString : "");
  }
  function s(c, N, h, E = document.body) {
    let [d] = r.useLexicalComposerContext(), f = e.useRef(document.createElement("div")), y = e.useCallback(
      () => {
        f.current.style.top = f.current.style.bottom;
        const v = d.getRootElement(), O = f.current;
        var T = O.firstChild;
        if (v !== null && c !== null) {
          const { left: b, top: k, width: H, height: K } = c.getRect();
          if (O.style.top = `${k + window.pageYOffset + f.current.offsetHeight + 3}px`, O.style.left = `${b + window.pageXOffset}px`, O.style.height = `${K}px`, O.style.width = `${H}px`, T !== null) {
            T.style.top = `${k}`;
            var S = T.getBoundingClientRect();
            T = S.height, S = S.width;
            const B = v.getBoundingClientRect();
            b + S > B.right && (O.style.left = `${B.right - S + window.pageXOffset}px`), (k + T > window.innerHeight || k + T > B.bottom) && k - B.top > T && (O.style.top = `${k - T + window.pageYOffset - K}px`);
          }
          O.isConnected || (h != null && (O.className = h), O.setAttribute("aria-label", "Typeahead menu"), O.setAttribute("id", "typeahead-menu"), O.setAttribute("role", "listbox"), O.style.display = "block", O.style.position = "absolute", E.append(O)), f.current = O, v.setAttribute("aria-controls", "typeahead-menu");
        }
      },
      [d, c, h, E]
    );
    e.useEffect(() => {
      let v = d.getRootElement();
      if (c !== null) return y(), () => {
        v !== null && v.removeAttribute("aria-controls");
        let O = f.current;
        O !== null && O.isConnected && O.remove();
      };
    }, [d, y, c]);
    let A = e.useCallback((v) => {
      c !== null && (v || N(null));
    }, [c, N]);
    return g(c, f.current, y, A), f;
  }
  function u(c) {
    e.startTransition ? e.startTransition(c) : c();
  }
  return Mr.LexicalNodeMenuPlugin = function({ options: c, nodeKey: N, onClose: h, onOpen: E, onSelectOption: d, menuRenderFn: f, anchorClassName: y, commandPriority: A = t.COMMAND_PRIORITY_LOW, parent: v }) {
    let [O] = r.useLexicalComposerContext(), [T, S] = e.useState(null);
    y = s(T, S, y, v);
    let b = e.useCallback(() => {
      S(null), h != null && T !== null && h();
    }, [h, T]), k = e.useCallback((K) => {
      S(K), E != null && T === null && E(K);
    }, [E, T]), H = e.useCallback(() => {
      N ? O.update(() => {
        const K = t.$getNodeByKey(N), B = O.getElementByKey(N);
        K != null && B != null && T == null && u(() => k({ getRect: () => B.getBoundingClientRect() }));
      }) : N == null && T != null && b();
    }, [b, O, N, k, T]);
    return e.useEffect(() => {
      H();
    }, [H, N]), e.useEffect(() => {
      if (N != null) return O.registerUpdateListener(({ dirtyElements: K }) => {
        K.get(N) && H();
      });
    }, [O, H, N]), T === null || O === null ? null : e.createElement(p, { close: b, resolution: T, editor: O, anchorElementRef: y, options: c, menuRenderFn: f, onSelectOption: d, commandPriority: A });
  }, Mr.MenuOption = l, Mr;
}
var yo, Ml;
function oc() {
  return Ml || (Ml = 1, yo = process.env.NODE_ENV === "development" ? Uf() : Yf()), yo;
}
var Al;
function Wf() {
  if (Al) return On;
  Al = 1;
  var r = lt, t = Ye(), e = oc(), n = Ke(), o = Ie, l = je;
  const a = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, i = o.createCommand("INSERT_EMBED_COMMAND");
  class _ extends e.MenuOption {
    constructor(C, p) {
      super(C), this.title = C, this.onSelect = p.onSelect.bind(this);
    }
  }
  function m({
    embedConfigs: g,
    onOpenEmbedModalForConfig: C,
    getMenuOptions: p,
    menuRenderFn: s,
    menuCommandPriority: u = o.COMMAND_PRIORITY_LOW
  }) {
    const [c] = t.useLexicalComposerContext(), [N, h] = l.useState(null), [E, d] = l.useState(null), f = l.useCallback(() => {
      h(null), d(null);
    }, []), y = l.useCallback((T) => {
      c.getEditorState().read(async () => {
        const S = o.$getNodeByKey(T);
        if (r.$isLinkNode(S))
          for (let b = 0; b < g.length; b++) {
            const k = g[b];
            await Promise.resolve(k.parseUrl(S.__url)) != null && (d(k), h(S.getKey()));
          }
      });
    }, [c, g]);
    l.useEffect(() => {
      const T = (S, {
        updateTags: b,
        dirtyLeaves: k
      }) => {
        for (const [H, K] of S)
          K === "created" && b.has("paste") && k.size <= 3 ? y(H) : H === N && f();
      };
      return n.mergeRegister(...[r.LinkNode, r.AutoLinkNode].map((S) => c.registerMutationListener(S, (...b) => T(...b))));
    }, [y, c, g, N, f]), l.useEffect(() => c.registerCommand(i, (T) => {
      const S = g.find(({
        type: b
      }) => b === T);
      return S ? (C(S), !0) : !1;
    }, o.COMMAND_PRIORITY_EDITOR), [c, g, C]);
    const A = l.useCallback(async () => {
      if (E != null && N != null) {
        const T = c.getEditorState().read(() => {
          const S = o.$getNodeByKey(N);
          return r.$isLinkNode(S) ? S : null;
        });
        if (r.$isLinkNode(T)) {
          const S = await Promise.resolve(E.parseUrl(T.__url));
          S != null && c.update(() => {
            o.$getSelection() || T.selectEnd(), E.insertNode(c, S), T.isAttached() && T.remove();
          });
        }
      }
    }, [E, c, N]), v = l.useMemo(() => E != null && N != null ? p(E, A, f) : [], [E, A, p, N, f]), O = l.useCallback((T, S, b) => {
      c.update(() => {
        T.onSelect(S), b();
      });
    }, [c]);
    return N != null ? /* @__PURE__ */ l.createElement(e.LexicalNodeMenuPlugin, {
      nodeKey: N,
      onClose: f,
      onSelectOption: O,
      options: v,
      menuRenderFn: s,
      commandPriority: u
    }) : null;
  }
  return On.AutoEmbedOption = _, On.INSERT_EMBED_COMMAND = i, On.LexicalAutoEmbedPlugin = m, On.URL_MATCHER = a, On;
}
var wn = {}, Ll;
function qf() {
  if (Ll) return wn;
  Ll = 1;
  var r = lt, t = Ye(), e = oc(), n = Ke(), o = Ie, l = je;
  let a = o.createCommand("INSERT_EMBED_COMMAND");
  class i extends e.MenuOption {
    constructor(m, g) {
      super(m), this.title = m, this.onSelect = g.onSelect.bind(this);
    }
  }
  return wn.AutoEmbedOption = i, wn.INSERT_EMBED_COMMAND = a, wn.LexicalAutoEmbedPlugin = function({ embedConfigs: _, onOpenEmbedModalForConfig: m, getMenuOptions: g, menuRenderFn: C, menuCommandPriority: p = o.COMMAND_PRIORITY_LOW }) {
    let [s] = t.useLexicalComposerContext(), [u, c] = l.useState(null), [N, h] = l.useState(null), E = l.useCallback(() => {
      c(null), h(null);
    }, []), d = l.useCallback(
      (v) => {
        s.getEditorState().read(async () => {
          const O = o.$getNodeByKey(v);
          if (r.$isLinkNode(O)) for (let T = 0; T < _.length; T++) {
            const S = _[T];
            await Promise.resolve(S.parseUrl(O.__url)) != null && (h(S), c(O.getKey()));
          }
        });
      },
      [s, _]
    );
    l.useEffect(() => {
      let v = (O, { updateTags: T, dirtyLeaves: S }) => {
        for (const [b, k] of O) k === "created" && T.has("paste") && 3 >= S.size ? d(b) : b === u && E();
      };
      return n.mergeRegister(...[r.LinkNode, r.AutoLinkNode].map((O) => s.registerMutationListener(O, (...T) => v(...T))));
    }, [d, s, _, u, E]), l.useEffect(() => s.registerCommand(a, (v) => {
      let O = _.find(({ type: T }) => T === v);
      return O ? (m(O), !0) : !1;
    }, o.COMMAND_PRIORITY_EDITOR), [s, _, m]);
    let f = l.useCallback(async () => {
      if (N != null && u != null) {
        const v = s.getEditorState().read(() => {
          const O = o.$getNodeByKey(u);
          return r.$isLinkNode(O) ? O : null;
        });
        if (r.$isLinkNode(v)) {
          const O = await Promise.resolve(N.parseUrl(v.__url));
          O != null && s.update(() => {
            o.$getSelection() || v.selectEnd(), N.insertNode(s, O), v.isAttached() && v.remove();
          });
        }
      }
    }, [N, s, u]), y = l.useMemo(() => N != null && u != null ? g(N, f, E) : [], [N, f, g, u, E]), A = l.useCallback((v, O, T) => {
      s.update(() => {
        v.onSelect(O), T();
      });
    }, [s]);
    return u != null ? l.createElement(e.LexicalNodeMenuPlugin, { nodeKey: u, onClose: E, onSelectOption: A, options: y, menuRenderFn: C, commandPriority: p }) : null;
  }, wn.URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, wn;
}
const zf = process.env.NODE_ENV === "development" ? Wf() : qf();
var Rn = zf;
const ic = It(
  "INSERT_FIGMA_COMMAND"
);
function Gf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([gr]))
      throw new Error("FigmaPlugin: FigmaNode not registered on editor");
    return r.registerCommand(
      ic,
      (t) => {
        const e = Ia(t);
        return qe.$insertNodeToNearestRoot(e), !0;
      },
      jt
    );
  }, [r]), null;
}
const sc = It(
  "INSERT_TWEET_COMMAND"
);
function Vf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([hr]))
      throw new Error("TwitterPlugin: TweetNode not registered on editor");
    return r.registerCommand(
      sc,
      (t) => {
        const e = oi(t);
        return qe.$insertNodeToNearestRoot(e), !0;
      },
      jt
    );
  }, [r]), null;
}
const lc = It(
  "INSERT_YOUTUBE_COMMAND"
);
function Jf() {
  const [r] = at.useLexicalComposerContext();
  return De(() => {
    if (!r.hasNodes([pr]))
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    return r.registerCommand(
      lc,
      (t) => {
        const e = ii(t);
        return qe.$insertNodeToNearestRoot(e), !0;
      },
      jt
    );
  }, [r]), null;
}
const Xf = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ R.jsx("i", { className: "icon youtube" }),
  insertNode: (r, t) => {
    r.dispatchCommand(lc, t.id);
  },
  keywords: ["youtube", "video"],
  // Determine if a given URL is a match and return url data.
  parseUrl: async (r) => {
    const t = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(r), e = t && (t == null ? void 0 : t[2].length) === 11 ? t[2] : null;
    return e != null ? {
      id: e,
      url: r
    } : null;
  },
  type: "youtube-video"
}, Zf = {
  // e.g. Tweet or Google Map.
  contentName: "Tweet",
  exampleUrl: "https://twitter.com/jack/status/20",
  // Icon for display.
  icon: /* @__PURE__ */ R.jsx("i", { className: "icon tweet" }),
  // Create the Lexical embed node from the url data.
  insertNode: (r, t) => {
    r.dispatchCommand(sc, t.id);
  },
  // For extra searching.
  keywords: ["tweet", "twitter"],
  // Determine if a given URL is a match and return url data.
  parseUrl: (r) => {
    const t = /^https:\/\/(twitter|x)\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)/.exec(
      r
    );
    return t != null ? {
      id: t[5],
      url: t[1]
    } : null;
  },
  type: "tweet"
}, Qf = {
  contentName: "Figma Document",
  exampleUrl: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  icon: /* @__PURE__ */ R.jsx("i", { className: "icon figma" }),
  insertNode: (r, t) => {
    r.dispatchCommand(ic, t.id);
  },
  keywords: ["figma", "figma.com", "mock-up"],
  // Determine if a given URL is a match and return url data.
  parseUrl: (r) => {
    const t = /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.exec(
      r
    );
    return t != null ? {
      id: t[3],
      url: t[0]
    } : null;
  },
  type: "figma"
}, Ci = [
  Zf,
  Xf,
  Qf
];
function eg({
  index: r,
  isSelected: t,
  onClick: e,
  onMouseEnter: n,
  option: o
}) {
  let l = "item";
  return t && (l += " selected"), /* @__PURE__ */ R.jsx(
    "li",
    {
      tabIndex: -1,
      className: l,
      ref: o.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: e,
      children: /* @__PURE__ */ R.jsx("span", { className: "text", children: o.title })
    },
    o.key
  );
}
function tg({
  options: r,
  selectedItemIndex: t,
  onOptionClick: e,
  onOptionMouseEnter: n
}) {
  return /* @__PURE__ */ R.jsx("div", { className: "typeahead-popover", children: /* @__PURE__ */ R.jsx("ul", { children: r.map((o, l) => /* @__PURE__ */ R.jsx(
    eg,
    {
      index: l,
      isSelected: t === l,
      onClick: () => e(o, l),
      onMouseEnter: () => n(l),
      option: o
    },
    o.key
  )) }) });
}
const ng = (r, t) => {
  let e;
  return (n) => {
    window.clearTimeout(e), e = window.setTimeout(() => {
      r(n);
    }, t);
  };
};
function rg({
  embedConfig: r,
  onClose: t
}) {
  const [e, n] = ve(""), [o] = at.useLexicalComposerContext(), [l, a] = ve(null), i = Bt(
    () => ng((m) => {
      const g = Rn.URL_MATCHER.exec(m);
      r != null && m != null && g != null ? Promise.resolve(r.parseUrl(m)).then(
        (C) => {
          a(C);
        }
      ) : l != null && a(null);
    }, 200),
    [r, l]
  ), _ = () => {
    l != null && (r.insertNode(o, l), t());
  };
  return /* @__PURE__ */ R.jsxs("div", { style: { width: "600px" }, children: [
    /* @__PURE__ */ R.jsx("div", { className: "Input__wrapper", children: /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "text",
        className: "Input__input",
        placeholder: r.exampleUrl,
        value: e,
        "data-test-id": `${r.type}-embed-modal-url`,
        onChange: (m) => {
          const { value: g } = m.target;
          n(g), i(g);
        }
      }
    ) }),
    /* @__PURE__ */ R.jsx(Un, { children: /* @__PURE__ */ R.jsx(
      qt,
      {
        disabled: !l,
        onClick: _,
        "data-test-id": `${r.type}-embed-modal-submit-btn`,
        children: "Embed"
      }
    ) })
  ] });
}
function og() {
  const [r, t] = jr(), e = (o) => {
    t(`Embed ${o.contentName}`, (l) => /* @__PURE__ */ R.jsx(rg, { embedConfig: o, onClose: l }));
  }, n = (o, l, a) => [
    new Rn.AutoEmbedOption("Dismiss", {
      onSelect: a
    }),
    new Rn.AutoEmbedOption(`Embed ${o.contentName}`, {
      onSelect: l
    })
  ];
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    r,
    /* @__PURE__ */ R.jsx(
      Rn.LexicalAutoEmbedPlugin,
      {
        embedConfigs: Ci,
        onOpenEmbedModalForConfig: e,
        getMenuOptions: n,
        menuRenderFn: (o, { selectedIndex: l, options: a, selectOptionAndCleanUp: i, setHighlightedIndex: _ }) => o.current ? ir.createPortal(
          /* @__PURE__ */ R.jsx(
            "div",
            {
              className: "typeahead-popover auto-embed-menu",
              style: {
                marginLeft: o.current.style.width,
                width: 200
              },
              children: /* @__PURE__ */ R.jsx(
                tg,
                {
                  options: a,
                  selectedItemIndex: l,
                  onOptionClick: (m, g) => {
                    _(g), i(m);
                  },
                  onOptionMouseEnter: (m) => {
                    _(m);
                  }
                }
              )
            }
          ),
          o.current
        ) : null
      }
    )
  ] });
}
const Yo = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote"
}, ig = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"]
], sg = [
  ["10px", "10px"],
  ["11px", "11px"],
  ["12px", "12px"],
  ["13px", "13px"],
  ["14px", "14px"],
  ["15px", "15px"],
  ["16px", "16px"],
  ["17px", "17px"],
  ["18px", "18px"],
  ["19px", "19px"],
  ["20px", "20px"]
], tr = {
  center: {
    icon: "center-align",
    iconRTL: "center-align",
    name: "Center Align"
  },
  end: {
    icon: "right-align",
    iconRTL: "left-align",
    name: "End Align"
  },
  justify: {
    icon: "justify-align",
    iconRTL: "justify-align",
    name: "Justify Align"
  },
  left: {
    icon: "left-align",
    iconRTL: "left-align",
    name: "Left Align"
  },
  right: {
    icon: "right-align",
    iconRTL: "right-align",
    name: "Right Align"
  },
  start: {
    icon: "left-align",
    iconRTL: "right-align",
    name: "Start Align"
  }
};
function Pt(r) {
  return r ? "active dropdown-item-active" : "";
}
function lg({
  editor: r,
  blockType: t,
  disabled: e = !1
}) {
  const n = () => {
    r.update(() => {
      const m = et();
      wt.$setBlocksType(m, () => Et());
    });
  }, o = (m) => {
    t !== m && r.update(() => {
      const g = et();
      wt.$setBlocksType(g, () => $t.$createHeadingNode(m));
    });
  }, l = () => {
    t !== "bullet" ? r.dispatchCommand(vt.INSERT_UNORDERED_LIST_COMMAND, void 0) : n();
  }, a = () => {
    t !== "check" ? r.dispatchCommand(vt.INSERT_CHECK_LIST_COMMAND, void 0) : n();
  }, i = () => {
    t !== "number" ? r.dispatchCommand(vt.INSERT_ORDERED_LIST_COMMAND, void 0) : n();
  }, _ = () => {
    t !== "quote" && r.update(() => {
      const m = et();
      wt.$setBlocksType(m, () => $t.$createQuoteNode());
    });
  };
  return /* @__PURE__ */ R.jsxs(
    xn,
    {
      disabled: e,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + t,
      buttonLabel: Yo[t],
      buttonAriaLabel: "Formatting options for text style",
      children: [
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "paragraph"),
            onClick: n,
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon paragraph" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Normal" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "h1"),
            onClick: () => o("h1"),
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon h1" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Heading 1" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "h2"),
            onClick: () => o("h2"),
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon h2" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Heading 2" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "h3"),
            onClick: () => o("h3"),
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon h3" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Heading 3" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "bullet"),
            onClick: l,
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon bullet-list" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Bullet List" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "number"),
            onClick: i,
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon numbered-list" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Numbered List" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "check"),
            onClick: a,
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon check-list" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Check List" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            className: "item " + Pt(t === "quote"),
            onClick: _,
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon quote" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Quote" })
            ]
          }
        )
      ]
    }
  );
}
function ag({
  editor: r,
  value: t,
  style: e,
  disabled: n = !1
}) {
  const o = We(
    (a) => {
      r.update(() => {
        const i = et();
        i !== null && wt.$patchStyleText(i, {
          [e]: a
        });
      });
    },
    [r, e]
  ), l = e === "font-family" ? "Formatting options for font family" : "Formatting options for font size";
  return /* @__PURE__ */ R.jsx(
    xn,
    {
      disabled: n,
      buttonClassName: "toolbar-item " + e,
      buttonLabel: t,
      buttonIconClassName: e === "font-family" ? "icon block-type font-family" : "",
      buttonAriaLabel: l,
      children: (e === "font-family" ? ig : sg).map(
        ([a, i]) => /* @__PURE__ */ R.jsx(
          tt,
          {
            className: `item ${Pt(t === a)} ${e === "font-size" ? "fontsize-item" : ""}`,
            onClick: () => o(a),
            children: /* @__PURE__ */ R.jsx("span", { className: "text", children: i })
          },
          a
        )
      )
    }
  );
}
function dn() {
  return /* @__PURE__ */ R.jsx("div", { className: "divider" });
}
function cg({
  editor: r,
  value: t,
  isRTL: e,
  disabled: n = !1
}) {
  const o = tr[t || "left"];
  return /* @__PURE__ */ R.jsxs(
    xn,
    {
      disabled: n,
      buttonLabel: o.name,
      buttonIconClassName: `icon ${e ? o.iconRTL : o.icon}`,
      buttonClassName: "toolbar-item spaced alignment",
      buttonAriaLabel: "Formatting options for text alignment",
      children: [
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "left");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon left-align" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Left Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "center");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon center-align" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Center Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "right");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon right-align" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Right Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "justify");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon justify-align" }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Justify Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "start");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx(
                "i",
                {
                  className: `icon ${e ? tr.start.iconRTL : tr.start.icon}`
                }
              ),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Start Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(un, "end");
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx(
                "i",
                {
                  className: `icon ${e ? tr.end.iconRTL : tr.end.icon}`
                }
              ),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "End Align" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsx(dn, {}),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(Mc, void 0);
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon " + (e ? "indent" : "outdent") }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Outdent" })
            ]
          }
        ),
        /* @__PURE__ */ R.jsxs(
          tt,
          {
            onClick: () => {
              r.dispatchCommand(fa, void 0);
            },
            className: "item",
            children: [
              /* @__PURE__ */ R.jsx("i", { className: "icon " + (e ? "outdent" : "indent") }),
              /* @__PURE__ */ R.jsx("span", { className: "text", children: "Indent" })
            ]
          }
        )
      ]
    }
  );
}
function ug({ setIsLinkEditMode: r }) {
  const [t] = at.useLexicalComposerContext(), [e, n] = ve("paragraph"), [o, l] = ve(t), [a, i] = ve("15px"), [_, m] = ve("#000"), [g, C] = ve("#fff"), [p, s] = ve("Arial"), [u, c] = ve("left"), [N, h] = ve(!1), [E, d] = ve(!1), [f, y] = ve(!1), [A, v] = ve(!1), [O, T] = ve(!1), [S, b] = ve(!1), [k, H] = ve(!1), [K, B] = ve(!1), [w, x] = ve(!1), [D, Y] = ve(!1), [j, $] = ve(!1), [W, L] = ve(() => t.isEditable()), [F, z] = jr(), V = We(() => {
    const P = et();
    if (ut(P)) {
      const I = P.anchor.getNode();
      let M = I.getKey() === "root" ? I : qe.$findMatchingParent(I, (ce) => {
        const pe = ce.getParent();
        return pe !== null && $n(pe);
      });
      M === null && (M = I.getTopLevelElementOrThrow());
      const U = M.getKey(), q = o.getElementByKey(U);
      d(P.hasFormat("bold")), y(P.hasFormat("italic")), v(P.hasFormat("underline")), T(P.hasFormat("strikethrough")), b(P.hasFormat("subscript")), H(P.hasFormat("superscript")), B(P.hasFormat("code")), x(wt.$isParentElementRTL(P));
      const Z = Ln(P), J = Z.getParent();
      if (lt.$isLinkNode(J) || lt.$isLinkNode(Z) ? h(!0) : h(!1), q !== null)
        if (vt.$isListNode(M)) {
          const ce = qe.$getNearestNodeOfType(
            I,
            vt.ListNode
          ), pe = ce ? ce.getListType() : M.getListType();
          n(pe);
        } else {
          const ce = $t.$isHeadingNode(M) ? M.getTag() : M.getType();
          ce in Yo && n(ce);
        }
      i(
        wt.$getSelectionStyleValueForProperty(P, "font-size", "15px")
      ), m(
        wt.$getSelectionStyleValueForProperty(P, "color", "#000")
      ), C(
        wt.$getSelectionStyleValueForProperty(
          P,
          "background-color",
          "#fff"
        )
      ), s(
        wt.$getSelectionStyleValueForProperty(P, "font-family", "Arial")
      );
      let re;
      lt.$isLinkNode(J) && (re = qe.$findMatchingParent(
        Z,
        (ce) => gn(ce) && !ce.isInline()
      )), c(
        gn(re) ? re.getFormatType() : gn(Z) ? Z.getFormatType() : (J == null ? void 0 : J.getFormatType()) || "left"
      );
    }
  }, [o]);
  De(() => t.registerCommand(
    In,
    (P, I) => (V(), l(I), !1),
    rr
  ), [t, V]), De(() => qe.mergeRegister(
    t.registerEditableListener((P) => {
      L(P);
    }),
    o.registerUpdateListener(({ editorState: P }) => {
      P.read(() => {
        V();
      });
    }),
    o.registerCommand(
      vc,
      (P) => (Y(P), !1),
      rr
    ),
    o.registerCommand(
      Sc,
      (P) => ($(P), !1),
      rr
    )
  ), [V, o, t]), De(() => o.registerCommand(
    bc,
    (P) => {
      const I = P, { code: M, ctrlKey: U, metaKey: q } = I;
      if (M === "KeyK" && (U || q)) {
        I.preventDefault();
        let Z;
        return N ? (r(!1), Z = null) : (r(!0), Z = Pr("https://")), o.dispatchCommand(lt.TOGGLE_LINK_COMMAND, Z);
      }
      return !1;
    },
    Oc
  ), [o, N, r]);
  const Q = We(
    (P, I) => {
      o.update(
        () => {
          const M = et();
          M !== null && wt.$patchStyleText(M, P);
        },
        I ? { tag: "historic" } : {}
      );
    },
    [o]
  ), le = We(() => {
    o.update(() => {
      const P = et();
      if (ut(P)) {
        const I = P.anchor, M = P.focus, U = P.getNodes();
        if (I.key === M.key && I.offset === M.offset)
          return;
        U.forEach((q, Z) => {
          if (Zo(q)) {
            let J = q;
            Z === 0 && I.offset !== 0 && (J = J.splitText(I.offset)[1] || J), Z === U.length - 1 && (J = J.splitText(M.offset)[0] || J), J.__style !== "" && J.setStyle(""), J.__format !== 0 && (J.setFormat(0), qe.$getNearestBlockElementAncestorOrThrow(J).setFormat("")), q = J;
          } else $t.$isHeadingNode(q) || $t.$isQuoteNode(q) ? q.replace(Et(), !0) : Fn.$isDecoratorBlockNode(q) && q.setFormat("");
        });
      }
    });
  }, [o]), fe = We(
    (P, I) => {
      Q({ color: P }, I);
    },
    [Q]
  ), ue = We(
    (P, I) => {
      Q({ "background-color": P }, I);
    },
    [Q]
  ), de = We(() => {
    N ? (r(!1), t.dispatchCommand(lt.TOGGLE_LINK_COMMAND, null)) : (r(!0), t.dispatchCommand(lt.TOGGLE_LINK_COMMAND, Pr("https://")));
  }, [t, N, r]);
  return /* @__PURE__ */ R.jsxs("div", { className: "toolbar", children: [
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !D || !W,
        onClick: () => {
          o.dispatchCommand(wc, void 0);
        },
        title: rn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Undo",
        children: /* @__PURE__ */ R.jsx("i", { className: "format undo" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !j || !W,
        onClick: () => {
          o.dispatchCommand(Rc, void 0);
        },
        title: rn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Redo",
        children: /* @__PURE__ */ R.jsx("i", { className: "format redo" })
      }
    ),
    /* @__PURE__ */ R.jsx(dn, {}),
    e in Yo && o === t && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        lg,
        {
          disabled: !W,
          blockType: e,
          editor: t
        }
      ),
      /* @__PURE__ */ R.jsx(dn, {})
    ] }),
    /* @__PURE__ */ R.jsx(
      ag,
      {
        disabled: !W,
        editor: t,
        value: p,
        style: "font-family"
      }
    ),
    /* @__PURE__ */ R.jsx(dn, {}),
    /* @__PURE__ */ R.jsx(Qd, { selectionFontSize: a.slice(0, -2), editor: t, disabled: !W }),
    /* @__PURE__ */ R.jsx(dn, {}),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !W,
        onClick: () => {
          o.dispatchCommand(Lt, "bold");
        },
        className: "toolbar-item spaced " + (E ? "active" : ""),
        title: rn ? "Bold (⌘B)" : "Bold (Ctrl+B)",
        type: "button",
        "aria-label": `Format text as bold. Shortcut: ${rn ? "⌘B" : "Ctrl+B"}`,
        children: /* @__PURE__ */ R.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !W,
        onClick: () => {
          o.dispatchCommand(Lt, "italic");
        },
        className: "toolbar-item spaced " + (f ? "active" : ""),
        title: rn ? "Italic (⌘I)" : "Italic (Ctrl+I)",
        type: "button",
        "aria-label": `Format text as italics. Shortcut: ${rn ? "⌘I" : "Ctrl+I"}`,
        children: /* @__PURE__ */ R.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !W,
        onClick: () => {
          o.dispatchCommand(Lt, "underline");
        },
        className: "toolbar-item spaced " + (A ? "active" : ""),
        title: rn ? "Underline (⌘U)" : "Underline (Ctrl+U)",
        type: "button",
        "aria-label": `Format text to underlined. Shortcut: ${rn ? "⌘U" : "Ctrl+U"}`,
        children: /* @__PURE__ */ R.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !W,
        onClick: () => {
          o.dispatchCommand(Lt, "code");
        },
        className: "toolbar-item spaced " + (K ? "active" : ""),
        title: "Insert code block",
        type: "button",
        "aria-label": "Insert code block",
        children: /* @__PURE__ */ R.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        disabled: !W,
        onClick: de,
        className: "toolbar-item spaced " + (N ? "active" : ""),
        "aria-label": "Insert link",
        title: "Insert link",
        type: "button",
        children: /* @__PURE__ */ R.jsx("i", { className: "format link" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      bl,
      {
        disabled: !W,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting text color",
        buttonIconClassName: "icon font-color",
        color: _,
        onChange: fe,
        title: "text color"
      }
    ),
    /* @__PURE__ */ R.jsx(
      bl,
      {
        disabled: !W,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting background color",
        buttonIconClassName: "icon bg-color",
        color: g,
        onChange: ue,
        title: "bg color"
      }
    ),
    /* @__PURE__ */ R.jsxs(
      xn,
      {
        disabled: !W,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "",
        buttonAriaLabel: "Formatting options for additional text styles",
        buttonIconClassName: "icon dropdown-more",
        children: [
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(
                  Lt,
                  "strikethrough"
                );
              },
              className: "item " + Pt(O),
              title: "Strikethrough",
              "aria-label": "Format text with a strikethrough",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon strikethrough" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Strikethrough" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(Lt, "subscript");
              },
              className: "item " + Pt(S),
              title: "Subscript",
              "aria-label": "Format text with a subscript",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon subscript" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Subscript" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(
                  Lt,
                  "superscript"
                );
              },
              className: "item " + Pt(k),
              title: "Superscript",
              "aria-label": "Format text with a superscript",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon superscript" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Superscript" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: le,
              className: "item",
              title: "Clear text formatting",
              "aria-label": "Clear all text formatting",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon clear" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Clear Formatting" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ R.jsx(dn, {}),
    /* @__PURE__ */ R.jsxs(
      xn,
      {
        disabled: !W,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "Insert",
        buttonAriaLabel: "Insert specialized editor node",
        buttonIconClassName: "icon plus",
        children: [
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(
                  dr.INSERT_HORIZONTAL_RULE_COMMAND,
                  void 0
                );
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon horizontal-rule" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Horizontal Rule" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(gi, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon page-break" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Page Break" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Image", (P) => /* @__PURE__ */ R.jsx(
                  qa,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon image" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Image" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Inline Image", (P) => /* @__PURE__ */ R.jsx(
                  yf,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon image" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Inline Image" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(
                  _i,
                  void 0
                );
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon diagram-2" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Excalidraw" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Table", (P) => /* @__PURE__ */ R.jsx(
                  Xa,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon table" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Table" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Poll", (P) => /* @__PURE__ */ R.jsx(
                  Qa,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon poll" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Poll" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Columns Layout", (P) => /* @__PURE__ */ R.jsx(
                  tc,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon columns" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Columns Layout" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                z("Insert Equation", (P) => /* @__PURE__ */ R.jsx(
                  rc,
                  {
                    activeEditor: o,
                    onClose: P
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon equation" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Equation" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                t.update(() => {
                  const P = Qo(), I = ad(0, 0);
                  P.append(I);
                });
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon sticky" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Sticky Note" })
              ]
            }
          ),
          /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                t.dispatchCommand(Ni, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ R.jsx("i", { className: "icon caret-right" }),
                /* @__PURE__ */ R.jsx("span", { className: "text", children: "Collapsible container" })
              ]
            }
          ),
          Ci.map((P) => /* @__PURE__ */ R.jsxs(
            tt,
            {
              onClick: () => {
                o.dispatchCommand(
                  Rn.INSERT_EMBED_COMMAND,
                  P.type
                );
              },
              className: "item",
              children: [
                P.icon,
                /* @__PURE__ */ R.jsx("span", { className: "text", children: P.contentName })
              ]
            },
            P.type
          ))
        ]
      }
    ),
    /* @__PURE__ */ R.jsx(dn, {}),
    /* @__PURE__ */ R.jsx(
      cg,
      {
        disabled: !W,
        value: u,
        editor: t,
        isRTL: w
      }
    ),
    F
  ] });
}
var vo = {}, Dl;
function dg() {
  if (Dl) return vo;
  Dl = 1;
  var r = vt, t = Ye(), e = je, n = Ke(), o = Ie;
  function l(i) {
    e.useEffect(() => n.mergeRegister(i.registerCommand(r.INSERT_ORDERED_LIST_COMMAND, () => (r.insertList(i, "number"), !0), o.COMMAND_PRIORITY_LOW), i.registerCommand(r.INSERT_UNORDERED_LIST_COMMAND, () => (r.insertList(i, "bullet"), !0), o.COMMAND_PRIORITY_LOW), i.registerCommand(r.REMOVE_LIST_COMMAND, () => (r.removeList(i), !0), o.COMMAND_PRIORITY_LOW), i.registerCommand(o.INSERT_PARAGRAPH_COMMAND, () => !!r.$handleListInsertParagraph(), o.COMMAND_PRIORITY_LOW)), [i]);
  }
  function a() {
    const [i] = t.useLexicalComposerContext();
    return e.useEffect(() => {
      if (!i.hasNodes([r.ListNode, r.ListItemNode]))
        throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
    }, [i]), l(i), null;
  }
  return vo.ListPlugin = a, vo;
}
var So = {}, $l;
function fg() {
  if ($l) return So;
  $l = 1;
  var r = vt, t = Ye(), e = je, n = Ke(), o = Ie;
  function l(a) {
    e.useEffect(() => n.mergeRegister(a.registerCommand(r.INSERT_ORDERED_LIST_COMMAND, () => (r.insertList(a, "number"), !0), o.COMMAND_PRIORITY_LOW), a.registerCommand(r.INSERT_UNORDERED_LIST_COMMAND, () => (r.insertList(a, "bullet"), !0), o.COMMAND_PRIORITY_LOW), a.registerCommand(r.REMOVE_LIST_COMMAND, () => (r.removeList(a), !0), o.COMMAND_PRIORITY_LOW), a.registerCommand(o.INSERT_PARAGRAPH_COMMAND, () => !!r.$handleListInsertParagraph(), o.COMMAND_PRIORITY_LOW)), [a]);
  }
  return So.ListPlugin = function() {
    let [a] = t.useLexicalComposerContext();
    return e.useEffect(() => {
      if (!a.hasNodes([r.ListNode, r.ListItemNode])) throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
    }, [a]), l(a), null;
  }, So;
}
const gg = process.env.NODE_ENV === "development" ? dg() : fg();
var hg = gg, bo = {}, Il;
function pg() {
  if (Il) return bo;
  Il = 1;
  var r = vt, t = Ye(), e = Ke(), n = Ie, o = je;
  function l() {
    const [s] = t.useLexicalComposerContext();
    return o.useEffect(() => e.mergeRegister(s.registerCommand(r.INSERT_CHECK_LIST_COMMAND, () => (r.insertList(s, "check"), !0), n.COMMAND_PRIORITY_LOW), s.registerCommand(n.KEY_ARROW_DOWN_COMMAND, (u) => p(u, s, !1), n.COMMAND_PRIORITY_LOW), s.registerCommand(n.KEY_ARROW_UP_COMMAND, (u) => p(u, s, !0), n.COMMAND_PRIORITY_LOW), s.registerCommand(n.KEY_ESCAPE_COMMAND, (u) => {
      if (g() != null) {
        const N = s.getRootElement();
        return N != null && N.focus(), !0;
      }
      return !1;
    }, n.COMMAND_PRIORITY_LOW), s.registerCommand(n.KEY_SPACE_COMMAND, (u) => {
      const c = g();
      return c != null && s.isEditable() ? (s.update(() => {
        const N = n.$getNearestNodeFromDOMNode(c);
        r.$isListItemNode(N) && (u.preventDefault(), N.toggleChecked());
      }), !0) : !1;
    }, n.COMMAND_PRIORITY_LOW), s.registerCommand(n.KEY_ARROW_LEFT_COMMAND, (u) => s.getEditorState().read(() => {
      const c = n.$getSelection();
      if (n.$isRangeSelection(c) && c.isCollapsed()) {
        const {
          anchor: N
        } = c, h = N.type === "element";
        if (h || N.offset === 0) {
          const E = N.getNode(), d = e.$findMatchingParent(E, (f) => n.$isElementNode(f) && !f.isInline());
          if (r.$isListItemNode(d)) {
            const f = d.getParent();
            if (r.$isListNode(f) && f.getListType() === "check" && (h || d.getFirstDescendant() === E)) {
              const y = s.getElementByKey(d.__key);
              if (y != null && document.activeElement !== y)
                return y.focus(), u.preventDefault(), !0;
            }
          }
        }
      }
      return !1;
    }), n.COMMAND_PRIORITY_LOW), s.registerRootListener((u, c) => {
      u !== null && (u.addEventListener("click", i), u.addEventListener("pointerdown", _)), c !== null && (c.removeEventListener("click", i), c.removeEventListener("pointerdown", _));
    }))), null;
  }
  function a(s, u) {
    const c = s.target;
    if (c === null || !e.isHTMLElement(c))
      return;
    const N = c.firstChild;
    if (N != null && e.isHTMLElement(N) && (N.tagName === "UL" || N.tagName === "OL"))
      return;
    const h = c.parentNode;
    if (!h || h.__lexicalListType !== "check")
      return;
    const E = s.pageX, d = c.getBoundingClientRect();
    (c.dir === "rtl" ? E < d.right && E > d.right - 20 : E > d.left && E < d.left + 20) && u();
  }
  function i(s) {
    a(s, () => {
      const u = s.target, c = m(u);
      c != null && c.isEditable() && c.update(() => {
        if (s.target) {
          const N = n.$getNearestNodeFromDOMNode(u);
          r.$isListItemNode(N) && (u.focus(), N.toggleChecked());
        }
      });
    });
  }
  function _(s) {
    a(s, () => {
      s.preventDefault();
    });
  }
  function m(s) {
    let u = s;
    for (; u; ) {
      if (u.__lexicalEditor)
        return u.__lexicalEditor;
      u = u.parentNode;
    }
    return null;
  }
  function g() {
    const s = document.activeElement;
    return s != null && s.tagName === "LI" && s.parentNode != null && // @ts-ignore internal field
    s.parentNode.__lexicalListType === "check" ? s : null;
  }
  function C(s, u) {
    let c = u ? s.getPreviousSibling() : s.getNextSibling(), N = s;
    for (; c == null && r.$isListItemNode(N); )
      N = N.getParentOrThrow().getParent(), N != null && (c = u ? N.getPreviousSibling() : N.getNextSibling());
    for (; r.$isListItemNode(c); ) {
      const h = u ? c.getLastChild() : c.getFirstChild();
      if (!r.$isListNode(h))
        return c;
      c = u ? h.getLastChild() : h.getFirstChild();
    }
    return null;
  }
  function p(s, u, c) {
    const N = g();
    return N != null && u.update(() => {
      const h = n.$getNearestNodeFromDOMNode(N);
      if (!r.$isListItemNode(h))
        return;
      const E = C(h, c);
      if (E != null) {
        E.selectStart();
        const d = u.getElementByKey(E.__key);
        d != null && (s.preventDefault(), setTimeout(() => {
          d.focus();
        }, 0));
      }
    }), !1;
  }
  return bo.CheckListPlugin = l, bo;
}
var Oo = {}, Pl;
function mg() {
  if (Pl) return Oo;
  Pl = 1;
  var r = vt, t = Ye(), e = Ke(), n = Ie, o = je;
  function l(p, s) {
    let u = p.target;
    if (u !== null && e.isHTMLElement(u)) {
      var c = u.firstChild;
      (c == null || !e.isHTMLElement(c) || c.tagName !== "UL" && c.tagName !== "OL") && (c = u.parentNode) && c.__lexicalListType === "check" && (p = p.pageX, c = u.getBoundingClientRect(), (u.dir === "rtl" ? p < c.right && p > c.right - 20 : p > c.left && p < c.left + 20) && s());
    }
  }
  function a(p) {
    l(p, () => {
      let s = p.target, u = _(s);
      u != null && u.isEditable() && u.update(() => {
        if (p.target) {
          let c = n.$getNearestNodeFromDOMNode(s);
          r.$isListItemNode(c) && (s.focus(), c.toggleChecked());
        }
      });
    });
  }
  function i(p) {
    l(p, () => {
      p.preventDefault();
    });
  }
  function _(p) {
    for (; p; ) {
      if (p.__lexicalEditor) return p.__lexicalEditor;
      p = p.parentNode;
    }
    return null;
  }
  function m() {
    let p = document.activeElement;
    return p != null && p.tagName === "LI" && p.parentNode != null && p.parentNode.__lexicalListType === "check" ? p : null;
  }
  function g(p, s) {
    let u = s ? p.getPreviousSibling() : p.getNextSibling();
    for (; u == null && r.$isListItemNode(p); ) p = p.getParentOrThrow().getParent(), p != null && (u = s ? p.getPreviousSibling() : p.getNextSibling());
    for (; r.$isListItemNode(u); ) {
      if (p = s ? u.getLastChild() : u.getFirstChild(), !r.$isListNode(p)) return u;
      u = s ? p.getLastChild() : p.getFirstChild();
    }
    return null;
  }
  function C(p, s, u) {
    let c = m();
    return c != null && s.update(() => {
      var N = n.$getNearestNodeFromDOMNode(c);
      if (r.$isListItemNode(N) && (N = g(N, u), N != null)) {
        N.selectStart();
        let h = s.getElementByKey(N.__key);
        h != null && (p.preventDefault(), setTimeout(() => {
          h.focus();
        }, 0));
      }
    }), !1;
  }
  return Oo.CheckListPlugin = function() {
    let [p] = t.useLexicalComposerContext();
    return o.useEffect(() => e.mergeRegister(
      p.registerCommand(r.INSERT_CHECK_LIST_COMMAND, () => (r.insertList(p, "check"), !0), n.COMMAND_PRIORITY_LOW),
      p.registerCommand(n.KEY_ARROW_DOWN_COMMAND, (s) => C(s, p, !1), n.COMMAND_PRIORITY_LOW),
      p.registerCommand(n.KEY_ARROW_UP_COMMAND, (s) => C(s, p, !0), n.COMMAND_PRIORITY_LOW),
      p.registerCommand(n.KEY_ESCAPE_COMMAND, () => {
        if (m() != null) {
          let s = p.getRootElement();
          return s != null && s.focus(), !0;
        }
        return !1;
      }, n.COMMAND_PRIORITY_LOW),
      p.registerCommand(n.KEY_SPACE_COMMAND, (s) => {
        let u = m();
        return u != null && p.isEditable() ? (p.update(() => {
          let c = n.$getNearestNodeFromDOMNode(u);
          r.$isListItemNode(c) && (s.preventDefault(), c.toggleChecked());
        }), !0) : !1;
      }, n.COMMAND_PRIORITY_LOW),
      p.registerCommand(n.KEY_ARROW_LEFT_COMMAND, (s) => p.getEditorState().read(() => {
        var u = n.$getSelection();
        if (n.$isRangeSelection(u) && u.isCollapsed()) {
          var { anchor: c } = u;
          if ((u = c.type === "element") || c.offset === 0) {
            c = c.getNode();
            let N = e.$findMatchingParent(c, (h) => n.$isElementNode(h) && !h.isInline());
            if (r.$isListItemNode(N)) {
              let h = N.getParent();
              if (r.$isListNode(h) && h.getListType() === "check" && (u || N.getFirstDescendant() === c) && (u = p.getElementByKey(N.__key), u != null && document.activeElement !== u)) return u.focus(), s.preventDefault(), !0;
            }
          }
        }
        return !1;
      }), n.COMMAND_PRIORITY_LOW),
      p.registerRootListener((s, u) => {
        s !== null && (s.addEventListener("click", a), s.addEventListener("pointerdown", i)), u !== null && (u.removeEventListener("click", a), u.removeEventListener("pointerdown", i));
      })
    )), null;
  }, Oo;
}
const _g = process.env.NODE_ENV === "development" ? pg() : mg();
var Ng = _g;
function Cg(r) {
  const t = r.getNodes();
  return t.length === 0 ? /* @__PURE__ */ new Set([
    r.anchor.getNode().getParentOrThrow(),
    r.focus.getNode().getParentOrThrow()
  ]) : new Set(
    t.map((e) => gn(e) ? e : e.getParentOrThrow())
  );
}
function xg(r) {
  const t = et();
  if (!ut(t))
    return !1;
  const e = Cg(t);
  let n = 0;
  for (const o of e)
    if (vt.$isListNode(o))
      n = Math.max(vt.$getListDepth(o) + 1, n);
    else if (vt.$isListItemNode(o)) {
      const l = o.getParent();
      if (!vt.$isListNode(l))
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      n = Math.max(vt.$getListDepth(l) + 1, n);
    }
  return n <= r;
}
function Eg({ maxDepth: r }) {
  const [t] = at.useLexicalComposerContext();
  return De(() => t.registerCommand(
    fa,
    () => !xg(r ?? 7),
    rr
  ), [t, r]), null;
}
const Tg = 1, yg = 100;
let ac = 0, kl = !1;
function vg() {
  window.addEventListener(
    "keydown",
    (r) => {
      r.key === "Tab" && (ac = r.timeStamp);
    },
    !0
  );
}
function Sg() {
  const [r] = at.useLexicalComposerContext();
  return De(() => (kl || (vg(), kl = !0), r.registerCommand(
    Ac,
    (t) => {
      const e = et();
      return ut(e) && ac + yg > t.timeStamp && Dn(e.clone()), !1;
    },
    Tg
  )), [r]), null;
}
const bg = 10, Og = 5;
function Fl(r, t, e, n = bg, o = Og) {
  const l = e.parentElement;
  if (r === null || !l) {
    t.style.opacity = "0", t.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const a = t.getBoundingClientRect(), i = e.getBoundingClientRect(), _ = l.getBoundingClientRect();
  let m = r.top - n, g = r.left - o;
  m < _.top && (m += a.height + r.height + n * 2), g + a.width > _.right && (g = _.right - a.width - o), m -= i.top, g -= i.left, t.style.opacity = "1", t.style.transform = `translate(${g}px, ${m}px)`;
}
function wg({
  editor: r,
  isLink: t,
  setIsLink: e,
  anchorElem: n,
  isLinkEditMode: o,
  setIsLinkEditMode: l
}) {
  const a = ct(null), i = ct(null), [_, m] = ve(""), [g, C] = ve("https://"), [p, s] = ve(
    null
  ), u = We(() => {
    var A, v;
    const h = et();
    if (ut(h)) {
      const O = Ln(h), T = qe.$findMatchingParent(O, lt.$isLinkNode);
      T ? m(T.getURL()) : lt.$isLinkNode(O) ? m(O.getURL()) : m(""), o && C(_);
    }
    const E = a.current, d = window.getSelection(), f = document.activeElement;
    if (E === null)
      return;
    const y = r.getRootElement();
    if (h !== null && d !== null && y !== null && y.contains(d.anchorNode) && r.isEditable()) {
      const O = (v = (A = d.focusNode) == null ? void 0 : A.parentElement) == null ? void 0 : v.getBoundingClientRect();
      O && (O.y += 40, Fl(O, E, n)), s(h);
    } else (!f || f.className !== "link-input") && (y !== null && Fl(null, E, n), s(null), l(!1), m(""));
    return !0;
  }, [n, r, l, o, _]);
  De(() => {
    const h = n.parentElement, E = () => {
      r.getEditorState().read(() => {
        u();
      });
    };
    return window.addEventListener("resize", E), h && h.addEventListener("scroll", E), () => {
      window.removeEventListener("resize", E), h && h.removeEventListener("scroll", E);
    };
  }, [n.parentElement, r, u]), De(() => qe.mergeRegister(
    r.registerUpdateListener(({ editorState: h }) => {
      h.read(() => {
        u();
      });
    }),
    r.registerCommand(
      In,
      () => (u(), !0),
      _t
    ),
    r.registerCommand(
      Lc,
      () => t ? (e(!1), !0) : !1,
      on
    )
  ), [r, u, e, t]), De(() => {
    r.getEditorState().read(() => {
      u();
    });
  }, [r, u]), De(() => {
    o && i.current && i.current.focus();
  }, [o, t]);
  const c = (h) => {
    h.key === "Enter" ? (h.preventDefault(), N()) : h.key === "Escape" && (h.preventDefault(), l(!1));
  }, N = () => {
    p !== null && (_ !== "" && (r.dispatchCommand(lt.TOGGLE_LINK_COMMAND, Pr(g)), r.update(() => {
      const h = et();
      if (ut(h)) {
        const E = Ln(h).getParent();
        if (lt.$isAutoLinkNode(E)) {
          const d = lt.$createLinkNode(E.getURL(), {
            rel: E.__rel,
            target: E.__target,
            title: E.__title
          });
          E.replace(d, !0);
        }
      }
    })), C("https://"), l(!1));
  };
  return /* @__PURE__ */ R.jsx("div", { ref: a, className: "link-editor", children: t ? o ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      "input",
      {
        ref: i,
        className: "link-input",
        value: g,
        onChange: (h) => {
          C(h.target.value);
        },
        onKeyDown: (h) => {
          c(h);
        }
      }
    ),
    /* @__PURE__ */ R.jsxs("div", { children: [
      /* @__PURE__ */ R.jsx(
        "div",
        {
          className: "link-cancel",
          role: "button",
          tabIndex: 0,
          onMouseDown: (h) => h.preventDefault(),
          onClick: () => {
            l(!1);
          }
        }
      ),
      /* @__PURE__ */ R.jsx(
        "div",
        {
          className: "link-confirm",
          role: "button",
          tabIndex: 0,
          onMouseDown: (h) => h.preventDefault(),
          onClick: N
        }
      )
    ] })
  ] }) : /* @__PURE__ */ R.jsxs("div", { className: "link-view", children: [
    /* @__PURE__ */ R.jsx(
      "a",
      {
        href: Pr(_),
        target: "_blank",
        rel: "noopener noreferrer",
        children: _
      }
    ),
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: "link-edit",
        role: "button",
        tabIndex: 0,
        onMouseDown: (h) => h.preventDefault(),
        onClick: () => {
          C(_), l(!0);
        }
      }
    ),
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: "link-trash",
        role: "button",
        tabIndex: 0,
        onMouseDown: (h) => h.preventDefault(),
        onClick: () => {
          r.dispatchCommand(lt.TOGGLE_LINK_COMMAND, null);
        }
      }
    )
  ] }) : null });
}
function Rg(r, t, e, n) {
  const [o, l] = ve(r), [a, i] = ve(!1);
  return De(() => {
    function _() {
      const m = et();
      if (ut(m)) {
        const g = Ln(m), C = qe.$findMatchingParent(g, lt.$isLinkNode), p = qe.$findMatchingParent(
          g,
          lt.$isAutoLinkNode
        );
        if (!(C || p)) {
          i(!1);
          return;
        }
        const s = m.getNodes().find((u) => {
          const c = qe.$findMatchingParent(u, lt.$isLinkNode), N = qe.$findMatchingParent(u, lt.$isAutoLinkNode);
          if (!(c != null && c.is(C)) && !(N != null && N.is(p)) && !c && !N && !Dc(u))
            return u;
        });
        i(!s);
      }
    }
    return qe.mergeRegister(
      r.registerUpdateListener(({ editorState: m }) => {
        m.read(() => {
          _();
        });
      }),
      r.registerCommand(
        In,
        (m, g) => (_(), l(g), !1),
        rr
      ),
      r.registerCommand(
        ia,
        (m) => {
          const g = et();
          if (ut(g)) {
            const C = Ln(g), p = qe.$findMatchingParent(C, lt.$isLinkNode);
            if (lt.$isLinkNode(p) && (m.metaKey || m.ctrlKey))
              return window.open(p.getURL(), "_blank"), !0;
          }
          return !1;
        },
        _t
      )
    );
  }, [r]), Qt(
    /* @__PURE__ */ R.jsx(
      wg,
      {
        editor: o,
        isLink: a,
        anchorElem: t,
        setIsLink: i,
        isLinkEditMode: e,
        setIsLinkEditMode: n
      }
    ),
    t
  );
}
function Mg({
  anchorElem: r = document.body,
  isLinkEditMode: t,
  setIsLinkEditMode: e
}) {
  const [n] = at.useLexicalComposerContext();
  return Rg(
    n,
    r,
    t,
    e
  );
}
var Ar = {}, Bl;
function Ag() {
  if (Bl) return Ar;
  Bl = 1;
  var r = lt, t = Ye(), e = Ke(), n = Ie, o = je;
  function l(v, O = (T) => T) {
    return (T) => {
      const S = v.exec(T);
      return S === null ? null : {
        index: S.index,
        length: S[0].length,
        text: S[0],
        url: O(S[0])
      };
    };
  }
  function a(v, O) {
    for (let T = 0; T < O.length; T++) {
      const S = O[T](v);
      if (S)
        return S;
    }
    return null;
  }
  const i = /[.,;\s]/;
  function _(v) {
    return i.test(v);
  }
  function m(v) {
    return _(v[v.length - 1]);
  }
  function g(v) {
    return _(v[0]);
  }
  function C(v) {
    let O = v.getPreviousSibling();
    return n.$isElementNode(O) && (O = O.getLastDescendant()), O === null || n.$isLineBreakNode(O) || n.$isTextNode(O) && m(O.getTextContent());
  }
  function p(v) {
    let O = v.getNextSibling();
    return n.$isElementNode(O) && (O = O.getFirstDescendant()), O === null || n.$isLineBreakNode(O) || n.$isTextNode(O) && g(O.getTextContent());
  }
  function s(v, O, T, S) {
    return (v > 0 ? _(T[v - 1]) : C(S[0])) ? O < T.length ? _(T[O]) : p(S[S.length - 1]) : !1;
  }
  function u(v, O, T) {
    const S = [], b = [], k = [];
    let H = 0, K = 0;
    const B = [...v];
    for (; B.length > 0; ) {
      const w = B[0], D = w.getTextContent().length, Y = K;
      K + D <= O ? (S.push(w), H += D) : Y >= T ? k.push(w) : b.push(w), K += D, B.shift();
    }
    return [H, S, b, k];
  }
  function c(v, O, T, S) {
    const b = r.$createAutoLinkNode(S.url, S.attributes);
    if (v.length === 1) {
      let k = v[0], H;
      O === 0 ? [H, k] = k.splitText(T) : [, H, k] = k.splitText(O, T);
      const K = n.$createTextNode(S.text);
      return K.setFormat(H.getFormat()), K.setDetail(H.getDetail()), b.append(K), H.replace(b), k;
    } else if (v.length > 1) {
      const k = v[0];
      let H = k.getTextContent().length, K;
      O === 0 ? K = k : [, K] = k.splitText(O);
      const B = [];
      let w;
      for (let j = 1; j < v.length; j++) {
        const $ = v[j], L = $.getTextContent().length, F = H, z = H + L;
        if (F < T)
          if (z <= T)
            B.push($);
          else {
            const [V, Q] = $.splitText(T - F);
            B.push(V), w = Q;
          }
        H += L;
      }
      const x = n.$getSelection(), D = x ? x.getNodes().find(n.$isTextNode) : void 0, Y = n.$createTextNode(K.getTextContent());
      return Y.setFormat(K.getFormat()), Y.setDetail(K.getDetail()), b.append(Y, ...B), D && D === K && (n.$isRangeSelection(x) ? Y.select(x.anchor.offset, x.focus.offset) : n.$isNodeSelection(x) && Y.select(0, Y.getTextContent().length)), K.replace(b), w;
    }
  }
  function N(v, O, T) {
    let S = [...v];
    const b = S.map((B) => B.getTextContent()).join("");
    let k = b, H, K = 0;
    for (; (H = a(k, O)) && H !== null; ) {
      const B = H.index, w = H.length, x = B + w;
      if (s(K + B, K + x, b, S)) {
        const [Y, , j, $] = u(S, K + B, K + x), W = K + B - Y, L = K + x - Y, F = c(j, W, L, H);
        S = F ? [F, ...$] : $, T(H.url, null), K = 0;
      } else
        K += x;
      k = k.substring(x);
    }
  }
  function h(v, O, T) {
    const S = v.getChildren(), b = S.length;
    for (let B = 0; B < b; B++) {
      const w = S[B];
      if (!n.$isTextNode(w) || !w.isSimpleText()) {
        d(v), T(null, v.getURL());
        return;
      }
    }
    const k = v.getTextContent(), H = a(k, O);
    if (H === null || H.text !== k) {
      d(v), T(null, v.getURL());
      return;
    }
    if (!C(v) || !p(v)) {
      d(v), T(null, v.getURL());
      return;
    }
    const K = v.getURL();
    if (K !== H.url && (v.setURL(H.url), T(H.url, K)), H.attributes) {
      const B = v.getRel();
      B !== H.attributes.rel && (v.setRel(H.attributes.rel || null), T(H.attributes.rel || null, B));
      const w = v.getTarget();
      w !== H.attributes.target && (v.setTarget(H.attributes.target || null), T(H.attributes.target || null, w));
    }
  }
  function E(v, O, T) {
    const S = v.getPreviousSibling(), b = v.getNextSibling(), k = v.getTextContent();
    r.$isAutoLinkNode(S) && !g(k) && (S.append(v), h(S, O, T), T(null, S.getURL())), r.$isAutoLinkNode(b) && !m(k) && (d(b), h(b, O, T), T(null, b.getURL()));
  }
  function d(v) {
    const O = v.getChildren(), T = O.length;
    for (let S = T - 1; S >= 0; S--)
      v.insertAfter(O[S]);
    return v.remove(), O.map((S) => S.getLatest());
  }
  function f(v) {
    const O = [v];
    let T = v.getNextSibling();
    for (; T !== null && n.$isTextNode(T) && T.isSimpleText() && (O.push(T), !/[\s]/.test(T.getTextContent())); )
      T = T.getNextSibling();
    return O;
  }
  function y(v, O, T) {
    o.useEffect(() => {
      if (!v.hasNodes([r.AutoLinkNode]))
        throw Error("LexicalAutoLinkPlugin: AutoLinkNode not registered on editor");
      const S = (b, k) => {
        T && T(b, k);
      };
      return e.mergeRegister(v.registerNodeTransform(n.TextNode, (b) => {
        const k = b.getParentOrThrow(), H = b.getPreviousSibling();
        if (r.$isAutoLinkNode(k))
          h(k, O, S);
        else if (!r.$isLinkNode(k)) {
          if (b.isSimpleText() && (g(b.getTextContent()) || !r.$isAutoLinkNode(H))) {
            const K = f(b);
            N(K, O, S);
          }
          E(b, O, S);
        }
      }));
    }, [v, O, T]);
  }
  function A({
    matchers: v,
    onChange: O
  }) {
    const [T] = t.useLexicalComposerContext();
    return y(T, v, O), null;
  }
  return Ar.AutoLinkPlugin = A, Ar.createLinkMatcherWithRegExp = l, Ar;
}
var Lr = {}, jl;
function Lg() {
  if (jl) return Lr;
  jl = 1;
  var r = lt, t = Ye(), e = Ke(), n = Ie, o = je;
  function l(h) {
    let E = new URLSearchParams();
    E.append("code", h);
    for (let d = 1; d < arguments.length; d++) E.append("v", arguments[d]);
    throw Error(`Minified Lexical error #${h}; visit https://lexical.dev/docs/error?${E} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  function a(h, E) {
    for (let d = 0; d < E.length; d++) {
      let f = E[d](h);
      if (f) return f;
    }
    return null;
  }
  let i = /[.,;\s]/;
  function _(h) {
    h = h.getPreviousSibling(), n.$isElementNode(h) && (h = h.getLastDescendant());
    var E;
    return !(E = h === null || n.$isLineBreakNode(h)) && (E = n.$isTextNode(h)) && (h = h.getTextContent(), E = i.test(h[h.length - 1])), E;
  }
  function m(h) {
    return h = h.getNextSibling(), n.$isElementNode(h) && (h = h.getFirstDescendant()), h === null || n.$isLineBreakNode(h) || n.$isTextNode(h) && i.test(h.getTextContent()[0]);
  }
  function g(h, E, d, f) {
    return (0 < h ? i.test(d[h - 1]) : _(f[0])) ? E < d.length ? i.test(d[E]) : m(f[f.length - 1]) : !1;
  }
  function C(h, E, d) {
    let f = [], y = [], A = [], v = 0, O = 0;
    for (h = [...h]; 0 < h.length; ) {
      let T = h[0], S = T.getTextContent().length, b = O;
      O + S <= E ? (f.push(T), v += S) : b >= d ? A.push(T) : y.push(T), O += S, h.shift();
    }
    return [v, f, y, A];
  }
  function p(h, E, d, f) {
    let y = r.$createAutoLinkNode(f.url, f.attributes);
    if (h.length === 1) {
      var A = h[0];
      E === 0 ? [O, A] = A.splitText(d) : [, O, A] = A.splitText(E, d);
      var v = n.$createTextNode(f.text);
      return v.setFormat(O.getFormat()), v.setDetail(O.getDetail()), y.append(v), O.replace(y), A;
    }
    if (1 < h.length) {
      f = h[0];
      var O = f.getTextContent().length;
      for (E === 0 ? A = f : [, A] = f.splitText(E), E = [], f = 1; f < h.length; f++) {
        let T = h[f], S = T.getTextContent().length, b = O, k = O + S;
        if (b < d) if (k <= d) E.push(T);
        else {
          let [H, K] = T.splitText(d - b);
          E.push(H), v = K;
        }
        O += S;
      }
      return h = (d = n.$getSelection()) ? d.getNodes().find(n.$isTextNode) : void 0, O = n.$createTextNode(A.getTextContent()), O.setFormat(A.getFormat()), O.setDetail(A.getDetail()), y.append(O, ...E), h && h === A && (n.$isRangeSelection(d) ? O.select(d.anchor.offset, d.focus.offset) : n.$isNodeSelection(d) && O.select(0, O.getTextContent().length)), A.replace(y), v;
    }
  }
  function s(h, E, d) {
    var f = [...h];
    let y = h = f.map((O) => O.getTextContent()).join(""), A, v = 0;
    for (; (A = a(y, E)) && A !== null; ) {
      let O = A.index, T = O + A.length;
      if (g(v + O, v + T, h, f)) {
        let [S, , b, k] = C(f, v + O, v + T);
        f = (f = p(b, v + O - S, v + T - S, A)) ? [f, ...k] : k, d(A.url, null), v = 0;
      } else v += T;
      y = y.substring(T);
    }
  }
  function u(h, E, d) {
    var f = h.getChildren();
    let y = f.length;
    for (let A = 0; A < y; A++) {
      let v = f[A];
      if (!n.$isTextNode(v) || !v.isSimpleText()) {
        c(h), d(null, h.getURL());
        return;
      }
    }
    f = h.getTextContent(), E = a(f, E), E === null || E.text !== f ? (c(h), d(null, h.getURL())) : _(h) && m(h) ? (f = h.getURL(), f !== E.url && (h.setURL(E.url), d(E.url, f)), E.attributes && (f = h.getRel(), f !== E.attributes.rel && (h.setRel(E.attributes.rel || null), d(E.attributes.rel || null, f)), f = h.getTarget(), f !== E.attributes.target && (h.setTarget(E.attributes.target || null), d(E.attributes.target || null, f)))) : (c(h), d(null, h.getURL()));
  }
  function c(h) {
    let E = h.getChildren();
    var d = E.length;
    for (--d; 0 <= d; d--) h.insertAfter(E[d]);
    return h.remove(), E.map((f) => f.getLatest());
  }
  function N(h, E, d) {
    o.useEffect(() => {
      h.hasNodes([r.AutoLinkNode]) || l(77);
      let f = (y, A) => {
        d && d(y, A);
      };
      return e.mergeRegister(h.registerNodeTransform(n.TextNode, (y) => {
        var A = y.getParentOrThrow(), v = y.getPreviousSibling();
        if (r.$isAutoLinkNode(A)) u(A, E, f);
        else if (!r.$isLinkNode(A)) {
          if (y.isSimpleText() && (i.test(y.getTextContent()[0]) || !r.$isAutoLinkNode(v))) {
            for (A = [y], v = y.getNextSibling(); v !== null && n.$isTextNode(v) && v.isSimpleText() && (A.push(v), !/[\s]/.test(v.getTextContent())); )
              v = v.getNextSibling();
            s(
              A,
              E,
              f
            );
          }
          let O = y.getPreviousSibling();
          A = y.getNextSibling(), v = y.getTextContent(), r.$isAutoLinkNode(O) && !i.test(v[0]) && (O.append(y), u(O, E, f), y = O.getURL(), d && d(null, y)), r.$isAutoLinkNode(A) && !i.test(v[v.length - 1]) && (c(A), u(A, E, f), y = A.getURL(), d && d(null, y));
        }
      }));
    }, [h, E, d]);
  }
  return Lr.AutoLinkPlugin = function({ matchers: h, onChange: E }) {
    let [d] = t.useLexicalComposerContext();
    return N(d, h, E), null;
  }, Lr.createLinkMatcherWithRegExp = function(h, E = (d) => d) {
    return (d) => (d = h.exec(d), d === null ? null : { index: d.index, length: d[0].length, text: d[0], url: E(d[0]) });
  }, Lr;
}
const Dg = process.env.NODE_ENV === "development" ? Ag() : Lg();
var Wo = Dg;
const $g = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, Ig = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, Pg = [
  Wo.createLinkMatcherWithRegExp($g, (r) => r.startsWith("http") ? r : `https://${r}`),
  Wo.createLinkMatcherWithRegExp(Ig, (r) => `mailto:${r}`)
];
function kg() {
  return /* @__PURE__ */ R.jsx(Wo.AutoLinkPlugin, { matchers: Pg });
}
var wo = {}, Kl;
function Fg() {
  if (Kl) return wo;
  Kl = 1;
  var r = lt, t = Ye(), e = Ke(), n = Ie, o = je;
  function l({
    validateUrl: a
  }) {
    const [i] = t.useLexicalComposerContext();
    return o.useEffect(() => {
      if (!i.hasNodes([r.LinkNode]))
        throw new Error("LinkPlugin: LinkNode not registered on editor");
      return e.mergeRegister(i.registerCommand(r.TOGGLE_LINK_COMMAND, (_) => {
        if (_ === null)
          return r.toggleLink(_), !0;
        if (typeof _ == "string")
          return a === void 0 || a(_) ? (r.toggleLink(_), !0) : !1;
        {
          const {
            url: m,
            target: g,
            rel: C,
            title: p
          } = _;
          return r.toggleLink(m, {
            rel: C,
            target: g,
            title: p
          }), !0;
        }
      }, n.COMMAND_PRIORITY_LOW), a !== void 0 ? i.registerCommand(n.PASTE_COMMAND, (_) => {
        const m = n.$getSelection();
        if (!n.$isRangeSelection(m) || m.isCollapsed() || !(_ instanceof ClipboardEvent) || _.clipboardData == null)
          return !1;
        const g = _.clipboardData.getData("text");
        return a(g) ? m.getNodes().some((C) => n.$isElementNode(C)) ? !1 : (i.dispatchCommand(r.TOGGLE_LINK_COMMAND, g), _.preventDefault(), !0) : !1;
      }, n.COMMAND_PRIORITY_LOW) : () => {
      });
    }, [i, a]), null;
  }
  return wo.LinkPlugin = l, wo;
}
var Ro = {}, Hl;
function Bg() {
  if (Hl) return Ro;
  Hl = 1;
  var r = lt, t = Ye(), e = Ke(), n = Ie, o = je;
  return Ro.LinkPlugin = function({ validateUrl: l }) {
    let [a] = t.useLexicalComposerContext();
    return o.useEffect(() => {
      if (!a.hasNodes([r.LinkNode])) throw Error("LinkPlugin: LinkNode not registered on editor");
      return e.mergeRegister(a.registerCommand(r.TOGGLE_LINK_COMMAND, (i) => {
        if (i === null) return r.toggleLink(i), !0;
        if (typeof i == "string") return l === void 0 || l(i) ? (r.toggleLink(i), !0) : !1;
        let { url: _, target: m, rel: g, title: C } = i;
        return r.toggleLink(_, { rel: g, target: m, title: C }), !0;
      }, n.COMMAND_PRIORITY_LOW), l !== void 0 ? a.registerCommand(
        n.PASTE_COMMAND,
        (i) => {
          let _ = n.$getSelection();
          if (!n.$isRangeSelection(_) || _.isCollapsed() || !(i instanceof ClipboardEvent) || i.clipboardData == null) return !1;
          let m = i.clipboardData.getData("text");
          return l(m) ? _.getNodes().some((g) => n.$isElementNode(g)) ? !1 : (a.dispatchCommand(r.TOGGLE_LINK_COMMAND, m), i.preventDefault(), !0) : !1;
        },
        n.COMMAND_PRIORITY_LOW
      ) : () => {
      });
    }, [a, l]), null;
  }, Ro;
}
const jg = process.env.NODE_ENV === "development" ? Fg() : Bg();
var Kg = jg;
function Hg() {
  return /* @__PURE__ */ R.jsx(Kg.LinkPlugin, { validateUrl: nf });
}
var Mo = {}, Ul;
function Ug() {
  if (Ul) return Mo;
  Ul = 1;
  var r = Ye(), t = Br(), e = Ke(), n = je;
  function o(l, a, i) {
    const [_] = r.useLexicalComposerContext();
    n.useEffect(() => e.mergeRegister(...t.registerLexicalTextEntity(_, l, a, i)), [i, _, l, a]);
  }
  return Mo.useLexicalTextEntity = o, Mo;
}
var Ao = {}, Yl;
function Yg() {
  if (Yl) return Ao;
  Yl = 1;
  var r = Ye(), t = Br(), e = Ke(), n = je;
  return Ao.useLexicalTextEntity = function(o, l, a) {
    let [i] = r.useLexicalComposerContext();
    n.useEffect(() => e.mergeRegister(...t.registerLexicalTextEntity(i, o, l, a)), [a, i, o, l]);
  }, Ao;
}
const Wg = process.env.NODE_ENV === "development" ? Ug() : Yg();
var qg = Wg;
const zg = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function Gg() {
  const [r] = at.useLexicalComposerContext();
  De(() => {
    if (!r.hasNodes([Mn]))
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
  }, [r]);
  const t = We((n) => $a(n.getTextContent()), []), e = We((n) => {
    const o = zg.exec(n);
    if (o === null)
      return null;
    const l = o[2].length, a = o.index + o[1].length;
    return {
      end: a + l,
      start: a
    };
  }, []);
  return qg.useLexicalTextEntity(
    e,
    Mn,
    t
  ), null;
}
const Wl = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]],
  ["🙂", ["emoji happysmile", "🙂"]],
  ["😀", ["emoji veryhappysmile", "😀"]],
  ["🙁", ["emoji unhappysmile", "🙁"]],
  ["❤", ["emoji heart", "❤"]]
]);
function Vg(r) {
  const t = r.getTextContent();
  for (let e = 0; e < t.length; e++) {
    const n = Wl.get(t[e]) || Wl.get(t.slice(e, e + 2));
    if (n !== void 0) {
      const [o, l] = n;
      let a;
      e === 0 ? [a] = r.splitText(e + 2) : [, a] = r.splitText(e, e + 2);
      const i = Da(o, l);
      return a.replace(i), i;
    }
  }
  return null;
}
function Jg(r) {
  let t = r;
  for (; t !== null; ) {
    if (!t.isSimpleText())
      return;
    t = Vg(t);
  }
}
function Xg(r) {
  De(() => {
    if (!r.hasNodes([fr]))
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    return r.registerNodeTransform(Vo, Jg);
  }, [r]);
}
function Zg() {
  const [r] = at.useLexicalComposerContext();
  return Xg(r), null;
}
var Vt = {}, ql;
function Qg() {
  if (ql) return Vt;
  ql = 1;
  var r = Ye(), t = Ie, e = je, n = Ke(), a = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  class i {
    constructor(k) {
      this.key = k, this.ref = {
        current: null
      }, this.setRefElement = this.setRefElement.bind(this);
    }
    setRefElement(k) {
      this.ref = {
        current: k
      };
    }
  }
  const _ = (b) => {
    const k = document.getElementById("typeahead-menu");
    if (!k) return;
    const H = k.getBoundingClientRect();
    H.top + H.height > window.innerHeight && k.scrollIntoView({
      block: "center"
    }), H.top < 0 && k.scrollIntoView({
      block: "center"
    }), b.scrollIntoView({
      block: "nearest"
    });
  };
  function m(b, k, H) {
    let K = H;
    for (let B = K; B <= k.length; B++)
      b.substr(-B) === k.substr(0, B) && (K = B);
    return K;
  }
  function g(b) {
    const k = t.$getSelection();
    if (!t.$isRangeSelection(k) || !k.isCollapsed())
      return null;
    const H = k.anchor;
    if (H.type !== "text")
      return null;
    const K = H.getNode();
    if (!K.isSimpleText())
      return null;
    const B = H.offset, w = K.getTextContent().slice(0, B), x = b.replaceableString.length, D = m(w, b.matchingString, x), Y = B - D;
    if (Y < 0)
      return null;
    let j;
    return Y === 0 ? [j] = K.splitText(B) : [, j] = K.splitText(Y, B), j;
  }
  function C(b, k) {
    let H = getComputedStyle(b);
    const K = H.position === "absolute", B = /(auto|scroll)/;
    if (H.position === "fixed")
      return document.body;
    for (let w = b; w = w.parentElement; )
      if (H = getComputedStyle(w), !(K && H.position === "static") && B.test(H.overflow + H.overflowY + H.overflowX))
        return w;
    return document.body;
  }
  function p(b, k) {
    const H = b.getBoundingClientRect(), K = k.getBoundingClientRect();
    return H.top > K.top && H.top < K.bottom;
  }
  function s(b, k, H, K) {
    const [B] = r.useLexicalComposerContext();
    e.useEffect(() => {
      if (k != null && b != null) {
        const w = B.getRootElement(), x = w != null ? C(w) : document.body;
        let D = !1, Y = p(k, x);
        const j = function() {
          D || (window.requestAnimationFrame(function() {
            H(), D = !1;
          }), D = !0);
          const W = p(k, x);
          W !== Y && (Y = W, K != null && K(W));
        }, $ = new ResizeObserver(H);
        return window.addEventListener("resize", H), document.addEventListener("scroll", j, {
          capture: !0,
          passive: !0
        }), $.observe(k), () => {
          $.unobserve(k), window.removeEventListener("resize", H), document.removeEventListener("scroll", j, !0);
        };
      }
    }, [k, B, K, H, b]);
  }
  const u = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  function c({
    close: b,
    editor: k,
    anchorElementRef: H,
    resolution: K,
    options: B,
    menuRenderFn: w,
    onSelectOption: x,
    shouldSplitNodeWithQuery: D = !1,
    commandPriority: Y = t.COMMAND_PRIORITY_LOW
  }) {
    const [j, $] = e.useState(null), W = K.match && K.match.matchingString;
    e.useEffect(() => {
      $(0);
    }, [W]);
    const L = e.useCallback((V) => {
      k.update(() => {
        const Q = K.match != null && D ? g(K.match) : null;
        x(V, Q, b, K.match ? K.match.matchingString : "");
      });
    }, [k, D, K.match, x, b]), F = e.useCallback((V) => {
      const Q = k.getRootElement();
      Q !== null && (Q.setAttribute("aria-activedescendant", "typeahead-item-" + V), $(V));
    }, [k]);
    e.useEffect(() => () => {
      const V = k.getRootElement();
      V !== null && V.removeAttribute("aria-activedescendant");
    }, [k]), a(() => {
      B === null ? $(null) : j === null && F(0);
    }, [B, j, F]), e.useEffect(() => n.mergeRegister(k.registerCommand(u, ({
      option: V
    }) => V.ref && V.ref.current != null ? (_(V.ref.current), !0) : !1, Y)), [k, F, Y]), e.useEffect(() => n.mergeRegister(k.registerCommand(t.KEY_ARROW_DOWN_COMMAND, (V) => {
      const Q = V;
      if (B !== null && B.length && j !== null) {
        const le = j !== B.length - 1 ? j + 1 : 0;
        F(le);
        const fe = B[le];
        fe.ref != null && fe.ref.current && k.dispatchCommand(u, {
          index: le,
          option: fe
        }), Q.preventDefault(), Q.stopImmediatePropagation();
      }
      return !0;
    }, Y), k.registerCommand(t.KEY_ARROW_UP_COMMAND, (V) => {
      const Q = V;
      if (B !== null && B.length && j !== null) {
        const le = j !== 0 ? j - 1 : B.length - 1;
        F(le);
        const fe = B[le];
        fe.ref != null && fe.ref.current && _(fe.ref.current), Q.preventDefault(), Q.stopImmediatePropagation();
      }
      return !0;
    }, Y), k.registerCommand(t.KEY_ESCAPE_COMMAND, (V) => {
      const Q = V;
      return Q.preventDefault(), Q.stopImmediatePropagation(), b(), !0;
    }, Y), k.registerCommand(t.KEY_TAB_COMMAND, (V) => {
      const Q = V;
      return B === null || j === null || B[j] == null ? !1 : (Q.preventDefault(), Q.stopImmediatePropagation(), L(B[j]), !0);
    }, Y), k.registerCommand(t.KEY_ENTER_COMMAND, (V) => B === null || j === null || B[j] == null ? !1 : (V !== null && (V.preventDefault(), V.stopImmediatePropagation()), L(B[j]), !0), Y)), [L, b, k, B, j, F, Y]);
    const z = e.useMemo(() => ({
      options: B,
      selectOptionAndCleanUp: L,
      selectedIndex: j,
      setHighlightedIndex: $
    }), [L, j, B]);
    return w(H, z, K.match ? K.match.matchingString : "");
  }
  function N(b, k, H, K = document.body) {
    const [B] = r.useLexicalComposerContext(), w = e.useRef(document.createElement("div")), x = e.useCallback(() => {
      w.current.style.top = w.current.style.bottom;
      const Y = B.getRootElement(), j = w.current, $ = j.firstChild;
      if (Y !== null && b !== null) {
        const {
          left: W,
          top: L,
          width: F,
          height: z
        } = b.getRect(), V = w.current.offsetHeight;
        if (j.style.top = `${L + window.pageYOffset + V + 3}px`, j.style.left = `${W + window.pageXOffset}px`, j.style.height = `${z}px`, j.style.width = `${F}px`, $ !== null) {
          $.style.top = `${L}`;
          const Q = $.getBoundingClientRect(), le = Q.height, fe = Q.width, ue = Y.getBoundingClientRect();
          W + fe > ue.right && (j.style.left = `${ue.right - fe + window.pageXOffset}px`), (L + le > window.innerHeight || L + le > ue.bottom) && L - ue.top > le && (j.style.top = `${L - le + window.pageYOffset - z}px`);
        }
        j.isConnected || (H != null && (j.className = H), j.setAttribute("aria-label", "Typeahead menu"), j.setAttribute("id", "typeahead-menu"), j.setAttribute("role", "listbox"), j.style.display = "block", j.style.position = "absolute", K.append(j)), w.current = j, Y.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [B, b, H, K]);
    e.useEffect(() => {
      const Y = B.getRootElement();
      if (b !== null)
        return x(), () => {
          Y !== null && Y.removeAttribute("aria-controls");
          const j = w.current;
          j !== null && j.isConnected && j.remove();
        };
    }, [B, x, b]);
    const D = e.useCallback((Y) => {
      b !== null && (Y || k(null));
    }, [b, k]);
    return s(b, w.current, x, D), w;
  }
  const h = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
  function E(b) {
    const k = b.anchor;
    if (k.type !== "text")
      return null;
    const H = k.getNode();
    if (!H.isSimpleText())
      return null;
    const K = k.offset;
    return H.getTextContent().slice(0, K);
  }
  function d(b, k, H) {
    const K = H.getSelection();
    if (K === null || !K.isCollapsed)
      return !1;
    const B = K.anchorNode, w = b, x = K.anchorOffset;
    if (B == null || x == null)
      return !1;
    try {
      k.setStart(B, w), k.setEnd(B, x);
    } catch {
      return !1;
    }
    return !0;
  }
  function f(b) {
    let k = null;
    return b.getEditorState().read(() => {
      const H = t.$getSelection();
      t.$isRangeSelection(H) && (k = E(H));
    }), k;
  }
  function y(b, k) {
    return k !== 0 ? !1 : b.getEditorState().read(() => {
      const H = t.$getSelection();
      if (t.$isRangeSelection(H)) {
        const w = H.anchor.getNode().getPreviousSibling();
        return t.$isTextNode(w) && w.isTextEntity();
      }
      return !1;
    });
  }
  function A(b) {
    e.startTransition ? e.startTransition(b) : b();
  }
  function v(b, k) {
    let H = getComputedStyle(b);
    const K = H.position === "absolute", B = k ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    if (H.position === "fixed")
      return document.body;
    for (let w = b; w = w.parentElement; )
      if (H = getComputedStyle(w), !(K && H.position === "static") && B.test(H.overflow + H.overflowY + H.overflowX))
        return w;
    return document.body;
  }
  const O = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  function T(b, {
    minLength: k = 1,
    maxLength: H = 75
  }) {
    return e.useCallback((K) => {
      const B = "[^" + b + h + "\\s]", x = new RegExp("(^|\\s|\\()([" + b + "]((?:" + B + "){0," + H + "}))$").exec(K);
      if (x !== null) {
        const D = x[1], Y = x[3];
        if (Y.length >= k)
          return {
            leadOffset: x.index + D.length,
            matchingString: Y,
            replaceableString: x[2]
          };
      }
      return null;
    }, [H, k, b]);
  }
  function S({
    options: b,
    onQueryChange: k,
    onSelectOption: H,
    onOpen: K,
    onClose: B,
    menuRenderFn: w,
    triggerFn: x,
    anchorClassName: D,
    commandPriority: Y = t.COMMAND_PRIORITY_LOW,
    parent: j
  }) {
    const [$] = r.useLexicalComposerContext(), [W, L] = e.useState(null), F = N(W, L, D, j), z = e.useCallback(() => {
      L(null), B != null && W !== null && B();
    }, [B, W]), V = e.useCallback((Q) => {
      L(Q), K != null && W === null && K(Q);
    }, [K, W]);
    return e.useEffect(() => {
      const Q = () => {
        $.getEditorState().read(() => {
          const fe = $._window || window, ue = fe.document.createRange(), de = t.$getSelection(), P = f($);
          if (!t.$isRangeSelection(de) || !de.isCollapsed() || P === null || ue === null) {
            z();
            return;
          }
          const I = x(P, $);
          if (k(I ? I.matchingString : null), I !== null && !y($, I.leadOffset) && d(I.leadOffset, ue, fe) !== null) {
            A(() => V({
              getRect: () => ue.getBoundingClientRect(),
              match: I
            }));
            return;
          }
          z();
        });
      }, le = $.registerUpdateListener(Q);
      return () => {
        le();
      };
    }, [$, x, k, W, z, V]), W === null || $ === null ? null : /* @__PURE__ */ e.createElement(c, {
      close: z,
      resolution: W,
      editor: $,
      anchorElementRef: F,
      options: b,
      menuRenderFn: w,
      shouldSplitNodeWithQuery: !0,
      onSelectOption: H,
      commandPriority: Y
    });
  }
  return Vt.LexicalTypeaheadMenuPlugin = S, Vt.MenuOption = i, Vt.PUNCTUATION = h, Vt.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = O, Vt.getScrollParent = v, Vt.useBasicTypeaheadTriggerMatch = T, Vt.useDynamicPositioning = s, Vt;
}
var Jt = {}, zl;
function eh() {
  if (zl) return Jt;
  zl = 1;
  var r = Ye(), t = Ie, e = je, n = Ke(), o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? e.useLayoutEffect : e.useEffect;
  class l {
    constructor(f) {
      this.key = f, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
    }
    setRefElement(f) {
      this.ref = { current: f };
    }
  }
  let a = (d) => {
    const f = document.getElementById("typeahead-menu");
    if (f) {
      var y = f.getBoundingClientRect();
      y.top + y.height > window.innerHeight && f.scrollIntoView({ block: "center" }), 0 > y.top && f.scrollIntoView({ block: "center" }), d.scrollIntoView({ block: "nearest" });
    }
  };
  function i(d) {
    var f = t.$getSelection();
    if (!t.$isRangeSelection(f) || !f.isCollapsed()) return null;
    var y = f.anchor;
    if (y.type !== "text" || (f = y.getNode(), !f.isSimpleText())) return null;
    y = y.offset;
    let A = f.getTextContent().slice(0, y);
    var v = d.matchingString;
    d = d.replaceableString.length;
    for (let T = d; T <= v.length; T++) A.substr(-T) === v.substr(0, T) && (d = T);
    if (d = y - d, 0 > d) return null;
    let O;
    return d === 0 ? [O] = f.splitText(y) : [, O] = f.splitText(d, y), O;
  }
  function _(d, f) {
    let y = getComputedStyle(d), A = y.position === "absolute";
    if (f = f ? /(auto|scroll|hidden)/ : /(auto|scroll)/, y.position === "fixed") return document.body;
    for (; d = d.parentElement; ) if (y = getComputedStyle(d), (!A || y.position !== "static") && f.test(y.overflow + y.overflowY + y.overflowX)) return d;
    return document.body;
  }
  function m(d, f) {
    return d = d.getBoundingClientRect(), f = f.getBoundingClientRect(), d.top > f.top && d.top < f.bottom;
  }
  function g(d, f, y, A) {
    let [v] = r.useLexicalComposerContext();
    e.useEffect(() => {
      if (f != null && d != null) {
        let O = v.getRootElement(), T = O != null ? _(O, !1) : document.body, S = !1, b = m(f, T), k = function() {
          S || (window.requestAnimationFrame(function() {
            y(), S = !1;
          }), S = !0);
          const K = m(f, T);
          K !== b && (b = K, A != null && A(K));
        }, H = new ResizeObserver(y);
        return window.addEventListener("resize", y), document.addEventListener("scroll", k, { capture: !0, passive: !0 }), H.observe(f), () => {
          H.unobserve(f), window.removeEventListener("resize", y), document.removeEventListener(
            "scroll",
            k,
            !0
          );
        };
      }
    }, [f, v, A, y, d]);
  }
  let C = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  function p({ close: d, editor: f, anchorElementRef: y, resolution: A, options: v, menuRenderFn: O, onSelectOption: T, shouldSplitNodeWithQuery: S = !1, commandPriority: b = t.COMMAND_PRIORITY_LOW }) {
    let [k, H] = e.useState(null);
    e.useEffect(() => {
      H(0);
    }, [A.match && A.match.matchingString]);
    let K = e.useCallback((x) => {
      f.update(() => {
        const D = A.match != null && S ? i(A.match) : null;
        T(x, D, d, A.match ? A.match.matchingString : "");
      });
    }, [f, S, A.match, T, d]), B = e.useCallback((x) => {
      const D = f.getRootElement();
      D !== null && (D.setAttribute(
        "aria-activedescendant",
        "typeahead-item-" + x
      ), H(x));
    }, [f]);
    e.useEffect(() => () => {
      let x = f.getRootElement();
      x !== null && x.removeAttribute("aria-activedescendant");
    }, [f]), o(() => {
      v === null ? H(null) : k === null && B(0);
    }, [v, k, B]), e.useEffect(() => n.mergeRegister(f.registerCommand(C, ({ option: x }) => x.ref && x.ref.current != null ? (a(x.ref.current), !0) : !1, b)), [f, B, b]), e.useEffect(() => n.mergeRegister(f.registerCommand(t.KEY_ARROW_DOWN_COMMAND, (x) => {
      if (v !== null && v.length && k !== null) {
        let D = k !== v.length - 1 ? k + 1 : 0;
        B(D);
        let Y = v[D];
        Y.ref != null && Y.ref.current && f.dispatchCommand(C, { index: D, option: Y }), x.preventDefault(), x.stopImmediatePropagation();
      }
      return !0;
    }, b), f.registerCommand(t.KEY_ARROW_UP_COMMAND, (x) => {
      if (v !== null && v.length && k !== null) {
        var D = k !== 0 ? k - 1 : v.length - 1;
        B(D), D = v[D], D.ref != null && D.ref.current && a(D.ref.current), x.preventDefault(), x.stopImmediatePropagation();
      }
      return !0;
    }, b), f.registerCommand(t.KEY_ESCAPE_COMMAND, (x) => (x.preventDefault(), x.stopImmediatePropagation(), d(), !0), b), f.registerCommand(t.KEY_TAB_COMMAND, (x) => v === null || k === null || v[k] == null ? !1 : (x.preventDefault(), x.stopImmediatePropagation(), K(v[k]), !0), b), f.registerCommand(t.KEY_ENTER_COMMAND, (x) => v === null || k === null || v[k] == null ? !1 : (x !== null && (x.preventDefault(), x.stopImmediatePropagation()), K(v[k]), !0), b)), [K, d, f, v, k, B, b]);
    let w = e.useMemo(() => ({ options: v, selectOptionAndCleanUp: K, selectedIndex: k, setHighlightedIndex: H }), [K, k, v]);
    return O(y, w, A.match ? A.match.matchingString : "");
  }
  function s(d, f, y, A = document.body) {
    let [v] = r.useLexicalComposerContext(), O = e.useRef(document.createElement("div")), T = e.useCallback(
      () => {
        O.current.style.top = O.current.style.bottom;
        const b = v.getRootElement(), k = O.current;
        var H = k.firstChild;
        if (b !== null && d !== null) {
          const { left: B, top: w, width: x, height: D } = d.getRect();
          if (k.style.top = `${w + window.pageYOffset + O.current.offsetHeight + 3}px`, k.style.left = `${B + window.pageXOffset}px`, k.style.height = `${D}px`, k.style.width = `${x}px`, H !== null) {
            H.style.top = `${w}`;
            var K = H.getBoundingClientRect();
            H = K.height, K = K.width;
            const Y = b.getBoundingClientRect();
            B + K > Y.right && (k.style.left = `${Y.right - K + window.pageXOffset}px`), (w + H > window.innerHeight || w + H > Y.bottom) && w - Y.top > H && (k.style.top = `${w - H + window.pageYOffset - D}px`);
          }
          k.isConnected || (y != null && (k.className = y), k.setAttribute("aria-label", "Typeahead menu"), k.setAttribute("id", "typeahead-menu"), k.setAttribute("role", "listbox"), k.style.display = "block", k.style.position = "absolute", A.append(k)), O.current = k, b.setAttribute("aria-controls", "typeahead-menu");
        }
      },
      [v, d, y, A]
    );
    e.useEffect(() => {
      let b = v.getRootElement();
      if (d !== null) return T(), () => {
        b !== null && b.removeAttribute("aria-controls");
        let k = O.current;
        k !== null && k.isConnected && k.remove();
      };
    }, [v, T, d]);
    let S = e.useCallback((b) => {
      d !== null && (b || f(null));
    }, [d, f]);
    return g(d, O.current, T, S), O;
  }
  function u(d, f, y) {
    var A = y.getSelection();
    if (A === null || !A.isCollapsed || (y = A.anchorNode, A = A.anchorOffset, y == null || A == null)) return !1;
    try {
      f.setStart(y, d), f.setEnd(y, A);
    } catch {
      return !1;
    }
    return !0;
  }
  function c(d) {
    let f = null;
    return d.getEditorState().read(() => {
      var y = t.$getSelection();
      if (t.$isRangeSelection(y)) {
        var A = y.anchor;
        A.type !== "text" ? f = null : (y = A.getNode(), y.isSimpleText() ? (A = A.offset, f = y.getTextContent().slice(0, A)) : f = null);
      }
    }), f;
  }
  function N(d, f) {
    return f !== 0 ? !1 : d.getEditorState().read(() => {
      var y = t.$getSelection();
      return t.$isRangeSelection(y) ? (y = y.anchor.getNode().getPreviousSibling(), t.$isTextNode(y) && y.isTextEntity()) : !1;
    });
  }
  function h(d) {
    e.startTransition ? e.startTransition(d) : d();
  }
  let E = t.createCommand("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
  return Jt.LexicalTypeaheadMenuPlugin = function({ options: d, onQueryChange: f, onSelectOption: y, onOpen: A, onClose: v, menuRenderFn: O, triggerFn: T, anchorClassName: S, commandPriority: b = t.COMMAND_PRIORITY_LOW, parent: k }) {
    let [H] = r.useLexicalComposerContext(), [K, B] = e.useState(null);
    S = s(K, B, S, k);
    let w = e.useCallback(() => {
      B(null), v != null && K !== null && v();
    }, [v, K]), x = e.useCallback((D) => {
      B(D), A != null && K === null && A(D);
    }, [A, K]);
    return e.useEffect(() => {
      let D = H.registerUpdateListener(() => {
        H.getEditorState().read(() => {
          const Y = H._window || window, j = Y.document.createRange(), $ = t.$getSelection(), W = c(H);
          if (t.$isRangeSelection($) && $.isCollapsed() && W !== null && j !== null) {
            var L = T(W, H);
            f(L ? L.matchingString : null), L === null || N(H, L.leadOffset) || u(L.leadOffset, j, Y) === null ? w() : h(() => x({ getRect: () => j.getBoundingClientRect(), match: L }));
          } else w();
        });
      });
      return () => {
        D();
      };
    }, [H, T, f, K, w, x]), K === null || H === null ? null : e.createElement(p, { close: w, resolution: K, editor: H, anchorElementRef: S, options: d, menuRenderFn: O, shouldSplitNodeWithQuery: !0, onSelectOption: y, commandPriority: b });
  }, Jt.MenuOption = l, Jt.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, Jt.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = E, Jt.getScrollParent = function(d, f) {
    let y = getComputedStyle(d), A = y.position === "absolute";
    if (f = f ? /(auto|scroll|hidden)/ : /(auto|scroll)/, y.position === "fixed") return document.body;
    for (; d = d.parentElement; ) if (y = getComputedStyle(d), (!A || y.position !== "static") && f.test(y.overflow + y.overflowY + y.overflowX)) return d;
    return document.body;
  }, Jt.useBasicTypeaheadTriggerMatch = function(d, { minLength: f = 1, maxLength: y = 75 }) {
    return e.useCallback((A) => {
      if (A = new RegExp("(^|\\s|\\()([" + d + "]((?:[^" + (d + `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;\\s]){0,`) + y + "}))$").exec(A), A !== null) {
        let v = A[1], O = A[3];
        if (O.length >= f) return { leadOffset: A.index + v.length, matchingString: O, replaceableString: A[2] };
      }
      return null;
    }, [y, f, d]);
  }, Jt.useDynamicPositioning = g, Jt;
}
const th = process.env.NODE_ENV === "development" ? Qg() : eh();
var Zt = th;
class xt extends Zt.MenuOption {
  constructor(e, n) {
    super(e);
    // What shows up in the editor
    Le(this, "title");
    // Icon for display
    Le(this, "icon");
    // For extra searching.
    Le(this, "keywords");
    // TBD
    Le(this, "keyboardShortcut");
    // What happens when you select this option?
    Le(this, "onSelect");
    this.title = e, this.keywords = n.keywords || [], this.icon = n.icon, this.keyboardShortcut = n.keyboardShortcut, this.onSelect = n.onSelect.bind(this);
  }
}
function nh({
  index: r,
  isSelected: t,
  onClick: e,
  onMouseEnter: n,
  option: o
}) {
  let l = "item";
  return t && (l += " selected"), /* @__PURE__ */ R.jsxs(
    "li",
    {
      tabIndex: -1,
      className: l,
      ref: o.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: e,
      children: [
        o.icon,
        /* @__PURE__ */ R.jsx("span", { className: "text", children: o.title })
      ]
    },
    o.key
  );
}
function rh(r, t) {
  const e = [];
  if (t == null)
    return e;
  const n = t.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
  if (n !== null) {
    const o = n[1], l = n[2] ? [n[2]] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    e.push(
      ...l.map(
        (a) => new xt(`${o}x${a} Table`, {
          icon: /* @__PURE__ */ R.jsx("i", { className: "icon table" }),
          keywords: ["table"],
          onSelect: () => r.dispatchCommand($e.INSERT_TABLE_COMMAND, { columns: a, rows: o })
        })
      )
    );
  }
  return e;
}
function oh(r, t) {
  return [
    new xt("Paragraph", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => r.update(() => {
        const e = et();
        ut(e) && wt.$setBlocksType(e, () => Et());
      })
    }),
    ...[1, 2, 3].map(
      (e) => new xt(`Heading ${e}`, {
        icon: /* @__PURE__ */ R.jsx("i", { className: `icon h${e}` }),
        keywords: ["heading", "header", `h${e}`],
        onSelect: () => r.update(() => {
          const n = et();
          ut(n) && wt.$setBlocksType(n, () => $t.$createHeadingNode(`h${e}`));
        })
      })
    ),
    new xt("Table", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => t("Insert Table", (e) => /* @__PURE__ */ R.jsx(Xa, { activeEditor: r, onClose: e }))
    }),
    new xt("Numbered List", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => r.dispatchCommand(vt.INSERT_ORDERED_LIST_COMMAND, void 0)
    }),
    new xt("Bulleted List", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => r.dispatchCommand(vt.INSERT_UNORDERED_LIST_COMMAND, void 0)
    }),
    new xt("Check List", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => r.dispatchCommand(vt.INSERT_CHECK_LIST_COMMAND, void 0)
    }),
    new xt("Quote", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => r.update(() => {
        const e = et();
        ut(e) && wt.$setBlocksType(e, () => $t.$createQuoteNode());
      })
    }),
    new xt("Code", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => r.update(() => {
        const e = et();
        if (ut(e))
          if (e.isCollapsed())
            wt.$setBlocksType(e, () => Ir.$createCodeNode());
          else {
            const n = e.getTextContent(), o = Ir.$createCodeNode();
            e.insertNodes([o]), e.insertRawText(n);
          }
      })
    }),
    new xt("Divider", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => r.dispatchCommand(dr.INSERT_HORIZONTAL_RULE_COMMAND, void 0)
    }),
    new xt("Page Break", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon page-break" }),
      keywords: ["page break", "divider"],
      onSelect: () => r.dispatchCommand(gi, void 0)
    }),
    new xt("Excalidraw", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon diagram-2" }),
      keywords: ["excalidraw", "diagram", "drawing"],
      onSelect: () => r.dispatchCommand(_i, void 0)
    }),
    new xt("Poll", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon poll" }),
      keywords: ["poll", "vote"],
      onSelect: () => t("Insert Poll", (e) => /* @__PURE__ */ R.jsx(Qa, { activeEditor: r, onClose: e }))
    }),
    ...Ci.map(
      (e) => new xt(`Embed ${e.contentName}`, {
        icon: e.icon,
        keywords: [...e.keywords, "embed"],
        onSelect: () => r.dispatchCommand(Rn.INSERT_EMBED_COMMAND, e.type)
      })
    ),
    new xt("Equation", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon equation" }),
      keywords: ["equation", "latex", "math"],
      onSelect: () => t("Insert Equation", (e) => /* @__PURE__ */ R.jsx(rc, { activeEditor: r, onClose: e }))
    }),
    new xt("GIF", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon gif" }),
      keywords: ["gif", "animate", "image", "file"],
      onSelect: () => r.dispatchCommand(mr, {
        altText: "Cat typing on a laptop",
        src: "https://media.giphy.com/media/3o7TKz5R0Lkzg7g9gI/giphy.gif"
      })
    }),
    new xt("Image", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon image" }),
      keywords: ["image", "photo", "picture", "file"],
      onSelect: () => t("Insert Image", (e) => /* @__PURE__ */ R.jsx(qa, { activeEditor: r, onClose: e }))
    }),
    new xt("Collapsible", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon caret-right" }),
      keywords: ["collapse", "collapsible", "toggle"],
      onSelect: () => r.dispatchCommand(Ni, void 0)
    }),
    new xt("Columns Layout", {
      icon: /* @__PURE__ */ R.jsx("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => t("Insert Columns Layout", (e) => /* @__PURE__ */ R.jsx(tc, { activeEditor: r, onClose: e }))
    }),
    ...["left", "center", "right", "justify"].map(
      (e) => new xt(`Align ${e}`, {
        icon: /* @__PURE__ */ R.jsx("i", { className: `icon ${e}-align` }),
        keywords: ["align", "justify", e],
        onSelect: () => r.dispatchCommand(un, e)
      })
    )
  ];
}
function ih() {
  const [r] = at.useLexicalComposerContext(), [t, e] = jr(), [n, o] = ve(null), l = Zt.useBasicTypeaheadTriggerMatch("/", {
    minLength: 0
  }), a = Bt(() => {
    const _ = oh(r, e);
    if (!n)
      return _;
    const m = new RegExp(n, "i");
    return [
      ...rh(r, n),
      ..._.filter(
        (g) => m.test(g.title) || g.keywords.some((C) => m.test(C))
      )
    ];
  }, [r, n, e]), i = We(
    (_, m, g, C) => {
      r.update(() => {
        m == null || m.remove(), _.onSelect(C), g();
      });
    },
    [r]
  );
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    t,
    /* @__PURE__ */ R.jsx(
      Zt.LexicalTypeaheadMenuPlugin,
      {
        onQueryChange: o,
        onSelectOption: i,
        triggerFn: l,
        options: a,
        menuRenderFn: (_, { selectedIndex: m, selectOptionAndCleanUp: g, setHighlightedIndex: C }) => _.current && a.length ? ir.createPortal(
          /* @__PURE__ */ R.jsx("div", { className: "typeahead-popover component-picker-menu", children: /* @__PURE__ */ R.jsx("ul", { children: a.map((p, s) => /* @__PURE__ */ R.jsx(
            nh,
            {
              index: s,
              isSelected: m === s,
              onClick: () => {
                C(s), g(p);
              },
              onMouseEnter: () => {
                C(s);
              },
              option: p
            },
            p.key
          )) }) }),
          _.current
        ) : null
      }
    )
  ] });
}
function sh(r, t) {
  const e = r.getRangeAt(0);
  let n;
  if (r.anchorNode === t) {
    let o = t;
    for (; o.firstElementChild != null; )
      o = o.firstElementChild;
    n = o.getBoundingClientRect();
  } else
    n = e.getBoundingClientRect();
  return n;
}
const lh = 10, ah = 5;
function ch(r, t, e, n = !1, o = lh, l = ah) {
  const a = e.parentElement;
  if (r === null || !a) {
    t.style.opacity = "0", t.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const i = t.getBoundingClientRect(), _ = e.getBoundingClientRect(), m = a.getBoundingClientRect();
  let g = r.top - i.height - o, C = r.left - l;
  g < m.top && (g += i.height + r.height + o * (n ? 9 : 2)), C + i.width > m.right && (C = m.right - i.width - l), g -= _.top, C -= _.left, t.style.opacity = "1", t.style.transform = `translate(${C}px, ${g}px)`;
}
function uh({
  editor: r,
  anchorElem: t,
  isLink: e,
  isBold: n,
  isItalic: o,
  isUnderline: l,
  isCode: a,
  isStrikethrough: i,
  isSubscript: _,
  isSuperscript: m
}) {
  const g = ct(null), C = We(() => {
    e ? r.dispatchCommand(lt.TOGGLE_LINK_COMMAND, null) : r.dispatchCommand(lt.TOGGLE_LINK_COMMAND, "https://");
  }, [r, e]);
  function p(c) {
    if (g != null && g.current && (c.buttons === 1 || c.buttons === 3) && g.current.style.pointerEvents !== "none") {
      const N = c.clientX, h = c.clientY, E = document.elementFromPoint(N, h);
      g.current.contains(E) || (g.current.style.pointerEvents = "none");
    }
  }
  function s(c) {
    g != null && g.current && g.current.style.pointerEvents !== "auto" && (g.current.style.pointerEvents = "auto");
  }
  De(() => {
    if (g != null && g.current)
      return document.addEventListener("mousemove", p), document.addEventListener("mouseup", s), () => {
        document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", s);
      };
  }, [g]);
  const u = We(() => {
    const c = et(), N = g.current, h = window.getSelection();
    if (N === null)
      return;
    const E = r.getRootElement();
    if (c !== null && h !== null && !h.isCollapsed && E !== null && E.contains(h.anchorNode)) {
      const d = sh(h, E);
      ch(
        d,
        N,
        t,
        e
      );
    }
  }, [r, t, e]);
  return De(() => {
    const c = t.parentElement, N = () => {
      r.getEditorState().read(() => {
        u();
      });
    };
    return window.addEventListener("resize", N), c && c.addEventListener("scroll", N), () => {
      window.removeEventListener("resize", N), c && c.removeEventListener("scroll", N);
    };
  }, [r, u, t]), De(() => (r.getEditorState().read(() => {
    u();
  }), qe.mergeRegister(
    r.registerUpdateListener(({ editorState: c }) => {
      c.read(() => {
        u();
      });
    }),
    r.registerCommand(
      In,
      () => (u(), !1),
      _t
    )
  )), [r, u]), /* @__PURE__ */ R.jsx("div", { ref: g, className: "floating-text-format-popup", children: r.isEditable() && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "bold");
        },
        className: "popup-item spaced " + (n ? "active" : ""),
        "aria-label": "Format text as bold",
        children: /* @__PURE__ */ R.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "italic");
        },
        className: "popup-item spaced " + (o ? "active" : ""),
        "aria-label": "Format text as italics",
        children: /* @__PURE__ */ R.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "underline");
        },
        className: "popup-item spaced " + (l ? "active" : ""),
        "aria-label": "Format text to underlined",
        children: /* @__PURE__ */ R.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "strikethrough");
        },
        className: "popup-item spaced " + (i ? "active" : ""),
        "aria-label": "Format text with a strikethrough",
        children: /* @__PURE__ */ R.jsx("i", { className: "format strikethrough" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "subscript");
        },
        className: "popup-item spaced " + (_ ? "active" : ""),
        title: "Subscript",
        "aria-label": "Format Subscript",
        children: /* @__PURE__ */ R.jsx("i", { className: "format subscript" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "superscript");
        },
        className: "popup-item spaced " + (m ? "active" : ""),
        title: "Superscript",
        "aria-label": "Format Superscript",
        children: /* @__PURE__ */ R.jsx("i", { className: "format superscript" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(Lt, "code");
        },
        className: "popup-item spaced " + (a ? "active" : ""),
        "aria-label": "Insert code block",
        children: /* @__PURE__ */ R.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: C,
        className: "popup-item spaced " + (e ? "active" : ""),
        "aria-label": "Insert link",
        children: /* @__PURE__ */ R.jsx("i", { className: "format link" })
      }
    )
  ] }) });
}
function dh(r, t) {
  const [e, n] = ve(!1), [o, l] = ve(!1), [a, i] = ve(!1), [_, m] = ve(!1), [g, C] = ve(!1), [p, s] = ve(!1), [u, c] = ve(!1), [N, h] = ve(!1), [E, d] = ve(!1), f = We(() => {
    r.getEditorState().read(() => {
      if (r.isComposing())
        return;
      const y = et(), A = window.getSelection(), v = r.getRootElement();
      if (A !== null && (!ut(y) || v === null || !v.contains(A.anchorNode))) {
        n(!1);
        return;
      }
      if (!ut(y))
        return;
      const O = Ln(y);
      i(y.hasFormat("bold")), m(y.hasFormat("italic")), C(y.hasFormat("underline")), s(y.hasFormat("strikethrough")), c(y.hasFormat("subscript")), h(y.hasFormat("superscript")), d(y.hasFormat("code"));
      const T = O.getParent();
      lt.$isLinkNode(T) || lt.$isLinkNode(O) ? l(!0) : l(!1), !Ir.$isCodeHighlightNode(y.anchor.getNode()) && y.getTextContent() !== "" ? n(Zo(O) || ei(O)) : n(!1);
      const S = y.getTextContent().replace(/\n/g, "");
      if (!y.isCollapsed() && S === "") {
        n(!1);
        return;
      }
    });
  }, [r]);
  return De(() => (document.addEventListener("selectionchange", f), () => {
    document.removeEventListener("selectionchange", f);
  }), [f]), De(() => qe.mergeRegister(
    r.registerUpdateListener(() => {
      f();
    }),
    r.registerRootListener(() => {
      r.getRootElement() === null && n(!1);
    })
  ), [r, f]), e ? Qt(
    /* @__PURE__ */ R.jsx(
      uh,
      {
        editor: r,
        anchorElem: t,
        isLink: o,
        isBold: a,
        isItalic: _,
        isStrikethrough: p,
        isSubscript: u,
        isSuperscript: N,
        isUnderline: g,
        isCode: E
      }
    ),
    t
  ) : null;
}
function fh({
  anchorElem: r = document.body
}) {
  const [t] = at.useLexicalComposerContext();
  return dh(t, r);
}
var Lo = {}, Gl;
function gh() {
  if (Gl) return Lo;
  Gl = 1;
  var r = Ye(), t = $e, e = Ke(), n = Ie, o = je;
  function l({
    hasCellMerge: a = !0,
    hasCellBackgroundColor: i = !0,
    hasTabHandler: _ = !0
  }) {
    const [m] = r.useLexicalComposerContext();
    return o.useEffect(() => {
      if (!m.hasNodes([t.TableNode, t.TableCellNode, t.TableRowNode]))
        throw Error("TablePlugin: TableNode, TableCellNode or TableRowNode not registered on editor");
      return m.registerCommand(t.INSERT_TABLE_COMMAND, ({
        columns: g,
        rows: C,
        includeHeaders: p
      }) => {
        const s = t.$createTableNodeWithDimensions(Number(C), Number(g), p);
        e.$insertNodeToNearestRoot(s);
        const u = s.getFirstDescendant();
        return n.$isTextNode(u) && u.select(), !0;
      }, n.COMMAND_PRIORITY_EDITOR);
    }, [m]), o.useEffect(() => {
      const g = /* @__PURE__ */ new Map(), C = (s) => {
        const u = s.getKey(), c = m.getElementByKey(u);
        if (c && !g.has(u)) {
          const N = t.applyTableHandlers(s, c, m, _);
          g.set(u, N);
        }
      };
      m.getEditorState().read(() => {
        const s = n.$nodesOfType(t.TableNode);
        for (const u of s)
          t.$isTableNode(u) && C(u);
      });
      const p = m.registerMutationListener(t.TableNode, (s) => {
        for (const [u, c] of s)
          if (c === "created")
            m.getEditorState().read(() => {
              const N = n.$getNodeByKey(u);
              t.$isTableNode(N) && C(N);
            });
          else if (c === "destroyed") {
            const N = g.get(u);
            N !== void 0 && (N.removeListeners(), g.delete(u));
          }
      });
      return () => {
        p();
        for (const [, s] of g)
          s.removeListeners();
      };
    }, [m, _]), o.useEffect(() => {
      if (!a)
        return m.registerNodeTransform(t.TableCellNode, (g) => {
          if (g.getColSpan() > 1 || g.getRowSpan() > 1) {
            const [, , C] = t.$getNodeTriplet(g), [p] = t.$computeTableMap(C, g, g), s = p.length, u = p[0].length;
            let c = C.getFirstChild();
            if (!t.$isTableRowNode(c))
              throw Error("Expected TableNode first child to be a RowNode");
            const N = [];
            for (let h = 0; h < s; h++) {
              if (h !== 0 && (c = c.getNextSibling(), !t.$isTableRowNode(c)))
                throw Error("Expected TableNode first child to be a RowNode");
              let E = null;
              for (let d = 0; d < u; d++) {
                const f = p[h][d], y = f.cell;
                if (f.startRow === h && f.startColumn === d)
                  E = y, N.push(y);
                else if (y.getColSpan() > 1 || y.getRowSpan() > 1) {
                  if (!t.$isTableCellNode(y))
                    throw Error("Expected TableNode cell to be a TableCellNode");
                  const A = t.$createTableCellNode(y.__headerState);
                  E !== null ? E.insertAfter(A) : e.$insertFirst(c, A);
                }
              }
            }
            for (const h of N)
              h.setColSpan(1), h.setRowSpan(1);
          }
        });
    }, [m, a]), o.useEffect(() => {
      if (!i)
        return m.registerNodeTransform(t.TableCellNode, (g) => {
          g.getBackgroundColor() !== null && g.setBackgroundColor(null);
        });
    }, [m, i, a]), null;
  }
  return Lo.TablePlugin = l, Lo;
}
var Do = {}, Vl;
function hh() {
  if (Vl) return Do;
  Vl = 1;
  var r = Ye(), t = $e, e = Ke(), n = Ie, o = je;
  function l(a) {
    let i = new URLSearchParams();
    i.append("code", a);
    for (let _ = 1; _ < arguments.length; _++) i.append("v", arguments[_]);
    throw Error(`Minified Lexical error #${a}; visit https://lexical.dev/docs/error?${i} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  return Do.TablePlugin = function({ hasCellMerge: a = !0, hasCellBackgroundColor: i = !0, hasTabHandler: _ = !0 }) {
    let [m] = r.useLexicalComposerContext();
    return o.useEffect(() => (m.hasNodes([t.TableNode, t.TableCellNode, t.TableRowNode]) || l(10), m.registerCommand(t.INSERT_TABLE_COMMAND, ({ columns: g, rows: C, includeHeaders: p }) => (g = t.$createTableNodeWithDimensions(Number(C), Number(g), p), e.$insertNodeToNearestRoot(g), g = g.getFirstDescendant(), n.$isTextNode(g) && g.select(), !0), n.COMMAND_PRIORITY_EDITOR)), [m]), o.useEffect(
      () => {
        let g = /* @__PURE__ */ new Map(), C = (s) => {
          const u = s.getKey(), c = m.getElementByKey(u);
          c && !g.has(u) && (s = t.applyTableHandlers(s, c, m, _), g.set(u, s));
        };
        m.getEditorState().read(() => {
          let s = n.$nodesOfType(t.TableNode);
          for (let u of s) t.$isTableNode(u) && C(u);
        });
        let p = m.registerMutationListener(t.TableNode, (s) => {
          for (const [u, c] of s) c === "created" ? m.getEditorState().read(() => {
            const N = n.$getNodeByKey(u);
            t.$isTableNode(N) && C(N);
          }) : c === "destroyed" && (s = g.get(u), s !== void 0 && (s.removeListeners(), g.delete(u)));
        });
        return () => {
          p();
          for (let [, s] of g) s.removeListeners();
        };
      },
      [m, _]
    ), o.useEffect(() => {
      if (!a) return m.registerNodeTransform(t.TableCellNode, (g) => {
        if (1 < g.getColSpan() || 1 < g.getRowSpan()) {
          var [, , C] = t.$getNodeTriplet(g);
          [g] = t.$computeTableMap(C, g, g);
          let s = g.length, u = g[0].length;
          if (C = C.getFirstChild(), !t.$isTableRowNode(C)) throw Error("Expected TableNode first child to be a RowNode");
          let c = [];
          for (let N = 0; N < s; N++) {
            if (N !== 0 && (C = C.getNextSibling(), !t.$isTableRowNode(C))) throw Error("Expected TableNode first child to be a RowNode");
            let h = null;
            for (let E = 0; E < u; E++) {
              var p = g[N][E];
              let d = p.cell;
              if (p.startRow === N && p.startColumn === E) h = d, c.push(d);
              else if (1 < d.getColSpan() || 1 < d.getRowSpan()) {
                if (!t.$isTableCellNode(d)) throw Error("Expected TableNode cell to be a TableCellNode");
                p = t.$createTableCellNode(d.__headerState), h !== null ? h.insertAfter(p) : e.$insertFirst(C, p);
              }
            }
          }
          for (let N of c) N.setColSpan(1), N.setRowSpan(1);
        }
      });
    }, [m, a]), o.useEffect(() => {
      if (!i) return m.registerNodeTransform(t.TableCellNode, (g) => {
        g.getBackgroundColor() !== null && g.setBackgroundColor(null);
      });
    }, [m, i, a]), null;
  }, Do;
}
const ph = process.env.NODE_ENV === "development" ? gh() : hh();
var mh = ph, _h = fi();
const cc = /* @__PURE__ */ pa(_h), Nh = 33, Ch = 50;
function xh({ editor: r }) {
  const t = ct(null), e = ct(null), n = ct(null), o = ct(null), [l, a] = ve(null), [i, _] = ve(null), [m, g] = ve(!1), [C, p] = ve(null);
  De(() => r.registerCommand(
    In,
    () => {
      const y = et(), A = $e.$isTableSelection(y);
      return m !== A && g(A), !1;
    },
    on
  ));
  const s = We(() => {
    _(null), t.current = null, p(null), o.current = null, n.current = null;
  }, []);
  De(() => {
    const y = (A) => {
      setTimeout(() => {
        const v = A.target;
        if (C) {
          a({
            x: A.clientX,
            y: A.clientY
          });
          return;
        }
        if (!(e.current && e.current.contains(v)) && t.current !== v) {
          t.current = v;
          const O = $e.getDOMCellFromTarget(v);
          O && i !== O ? r.update(() => {
            const T = or(O.elem);
            if (!T)
              throw new Error("TableCellResizer: Table cell node not found.");
            const S = $e.$getTableNodeFromLexicalNodeOrThrow(T), b = r.getElementByKey(S.getKey());
            if (!b)
              throw new Error("TableCellResizer: Table element not found.");
            t.current = v, n.current = b.getBoundingClientRect(), _(O);
          }) : O == null && s();
        }
      }, 0);
    };
    return document.addEventListener("mousemove", y), () => {
      document.removeEventListener("mousemove", y);
    };
  }, [i, C, r, s]);
  const u = (y) => y === "bottom", c = We(
    (y) => {
      if (!i)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(() => {
        const A = or(i.elem);
        if (!$e.$isTableCellNode(A))
          throw new Error("TableCellResizer: Table cell node not found.");
        const v = $e.$getTableNodeFromLexicalNodeOrThrow(A), O = $e.$getTableRowIndexFromTableCellNode(A), T = v.getChildren();
        if (O >= T.length || O < 0)
          throw new Error("Expected table cell to be inside of table row.");
        const S = T[O];
        if (!$e.$isTableRowNode(S))
          throw new Error("Expected table row");
        S.setHeight(y);
      });
    },
    [i, r]
  ), N = We(
    (y) => {
      if (!i)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(() => {
        const A = or(i.elem);
        if (!$e.$isTableCellNode(A))
          throw new Error("TableCellResizer: Table cell node not found.");
        const v = $e.$getTableNodeFromLexicalNodeOrThrow(A), O = $e.$getTableColumnIndexFromTableCellNode(A), T = v.getChildren();
        for (let S = 0; S < T.length; S++) {
          const b = T[S];
          if (!$e.$isTableRowNode(b))
            throw new Error("Expected table row");
          const k = b.getChildren(), B = k.map((x) => x.getColSpan()).reduce(
            (x, D) => {
              const Y = x[x.length - 1] ?? 0;
              return x.push(Y + D), x;
            },
            []
          ).findIndex(
            (x) => x > O
          );
          if (B >= k.length || B < 0)
            throw new Error("Expected table cell to be inside of table row.");
          const w = k[B];
          if (!$e.$isTableCellNode(w))
            throw new Error("Expected table cell");
          w.setWidth(y);
        }
      });
    },
    [i, r]
  ), h = We(
    (y) => {
      const A = (v) => {
        if (v.preventDefault(), v.stopPropagation(), !i)
          throw new Error("TableCellResizer: Expected active cell.");
        if (o.current) {
          const { x: O, y: T } = o.current;
          if (i === null)
            return;
          if (u(y)) {
            const S = i.elem.getBoundingClientRect().height, b = Math.abs(v.clientY - T), k = y === "bottom" && T > v.clientY;
            c(
              Math.max(
                k ? S - b : b + S,
                Nh
              )
            );
          } else {
            const S = getComputedStyle(i.elem);
            let b = i.elem.clientWidth;
            b -= parseFloat(S.paddingLeft) + parseFloat(S.paddingRight);
            const k = Math.abs(v.clientX - O), H = y === "right" && O > v.clientX;
            N(
              Math.max(
                H ? b - k : k + b,
                Ch
              )
            );
          }
          s(), document.removeEventListener("mouseup", A);
        }
      };
      return A;
    },
    [i, s, N, c]
  ), E = We(
    (y) => (A) => {
      if (A.preventDefault(), A.stopPropagation(), !i)
        throw new Error("TableCellResizer: Expected active cell.");
      o.current = {
        x: A.clientX,
        y: A.clientY
      }, a(o.current), p(y), document.addEventListener("mouseup", h(y));
    },
    [i, h]
  ), f = We(() => {
    if (i) {
      const { height: y, width: A, top: v, left: O } = i.elem.getBoundingClientRect(), T = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: "10px",
          left: `${window.pageXOffset + O}px`,
          top: `${window.pageYOffset + v + y}px`,
          width: `${A}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${y}px`,
          left: `${window.pageXOffset + O + A}px`,
          top: `${window.pageYOffset + v}px`,
          width: "10px"
        }
      }, S = n.current;
      return C && l && S && (u(C) ? (T[C].left = `${window.pageXOffset + S.left}px`, T[C].top = `${window.pageYOffset + l.y}px`, T[C].height = "3px", T[C].width = `${S.width}px`) : (T[C].top = `${window.pageYOffset + S.top}px`, T[C].left = `${window.pageXOffset + l.x}px`, T[C].width = "3px", T[C].height = `${S.height}px`), T[C].backgroundColor = "#adf"), T;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [i, C, l])();
  return /* @__PURE__ */ R.jsx("div", { ref: e, children: i != null && !m && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: f.right || void 0,
        onMouseDown: E("right")
      }
    ),
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: f.bottom || void 0,
        onMouseDown: E("bottom")
      }
    )
  ] }) });
}
function Eh() {
  const [r] = at.useLexicalComposerContext(), t = cc();
  return Bt(
    () => t ? Qt(/* @__PURE__ */ R.jsx(xh, { editor: r }), document.body) : null,
    [r, t]
  );
}
function $o(r) {
  const t = r.getShape();
  return {
    columns: t.toX - t.fromX + 1,
    rows: t.toY - t.fromY + 1
  };
}
function Th(r) {
  const t = r.getNodes(), e = [];
  let n = null, o = null, l = 0;
  for (let a = 0; a < t.length; a++) {
    const i = t[a];
    if ($e.$isTableCellNode(i)) {
      const _ = i.getParentOrThrow();
      if (Lf(
        $e.$isTableRowNode(_),
        "Expected CellNode to have a RowNode parent"
      ), n !== _) {
        if (o !== null && l !== o)
          return !1;
        n !== null && (o = l), n = _, l = 0;
      }
      const m = i.__colSpan;
      for (let g = 0; g < m; g++)
        e[l + g] === void 0 && (e[l + g] = 0), e[l + g] += i.__rowSpan;
      l += m;
    }
  }
  return (o === null || l === o) && e.every((a) => a === e[0]);
}
function yh() {
  const r = et();
  if (ut(r) && !r.isCollapsed() || $e.$isTableSelection(r) && !r.anchor.is(r.focus) || !ut(r) && !$e.$isTableSelection(r))
    return !1;
  const [t] = $e.$getNodeTriplet(r.anchor);
  return t.__colSpan > 1 || t.__rowSpan > 1;
}
function Jl(r) {
  if (r.getChildrenSize() !== 1)
    return !1;
  const t = r.getFirstChildOrThrow();
  return !(!ei(t) || !t.isEmpty());
}
function vh(r) {
  const t = r.getLastDescendant();
  Zo(t) ? t.select() : gn(t) ? t.selectEnd() : t !== null && t.selectNext();
}
function Xl(r) {
  return r.getEditorState().read(() => {
    const t = et();
    if (ut(t) || $e.$isTableSelection(t)) {
      const [e] = $e.$getNodeTriplet(t.anchor);
      if ($e.$isTableCellNode(e))
        return e.getBackgroundColor();
    }
    return null;
  });
}
function Sh({
  onClose: r,
  tableCellNode: t,
  setIsMenuOpen: e,
  contextRef: n,
  cellMerge: o,
  showColorPickerModal: l
}) {
  const [a] = at.useLexicalComposerContext(), i = ct(null), [_, m] = ve(t), [g, C] = ve({
    columns: 1,
    rows: 1
  }), [p, s] = ve(!1), [u, c] = ve(!1), [N, h] = ve(
    () => Xl(a) || ""
  );
  De(() => a.registerMutationListener($e.TableCellNode, (K) => {
    K.get(_.getKey()) === "updated" && (a.getEditorState().read(() => {
      m(_.getLatest());
    }), h(Xl(a) || ""));
  }), [a, _]), De(() => {
    a.getEditorState().read(() => {
      const K = et();
      if ($e.$isTableSelection(K)) {
        const B = $o(K);
        C($o(K)), s(
          Th(K) && (B.columns > 1 || B.rows > 1)
        );
      }
      c(yh());
    });
  }, [a]), De(() => {
    const K = n.current, B = i.current, w = a.getRootElement();
    if (K != null && B != null && w != null) {
      const x = w.getBoundingClientRect(), D = K.getBoundingClientRect();
      B.style.opacity = "1";
      const Y = B.getBoundingClientRect(), j = 5;
      let $ = D.right + j;
      if ($ + Y.width > window.innerWidth || $ + Y.width > x.right) {
        const L = D.left - Y.width - j;
        $ = (L < 0 ? j : L) + window.pageXOffset;
      }
      B.style.left = `${$ + window.pageXOffset}px`;
      let W = D.top;
      if (W + Y.height > window.innerHeight) {
        const L = D.bottom - Y.height;
        W = (L < 0 ? j : L) + window.pageYOffset;
      }
      B.style.top = `${W + +window.pageYOffset}px`;
    }
  }, [n, i, a]), De(() => {
    function K(B) {
      i.current != null && n.current != null && !i.current.contains(B.target) && !n.current.contains(B.target) && e(!1);
    }
    return window.addEventListener("click", K), () => window.removeEventListener("click", K);
  }, [e, n]);
  const E = We(() => {
    a.update(() => {
      if (_.isAttached()) {
        const B = $e.$getTableNodeFromLexicalNodeOrThrow(_), w = a.getElementByKey(
          B.getKey()
        );
        if (!w)
          throw new Error("Expected to find tableElement in DOM");
        const x = $e.getTableObserverFromTableElement(w);
        x !== null && x.clearHighlight(), B.markDirty(), m(_.getLatest());
      }
      Qo().selectStart();
    });
  }, [a, _]), d = () => {
    a.update(() => {
      const K = et();
      if ($e.$isTableSelection(K)) {
        const { columns: B, rows: w } = $o(K), x = K.getNodes();
        let D = null;
        for (let Y = 0; Y < x.length; Y++) {
          const j = x[Y];
          if ($e.$isTableCellNode(j))
            if (D === null) {
              j.setColSpan(B).setRowSpan(w), D = j;
              const $ = Jl(j);
              let W;
              $ && ei(W = j.getFirstChild()) && W.remove();
            } else $e.$isTableCellNode(D) && (Jl(j) || D.append(...j.getChildren()), j.remove());
        }
        D !== null && (D.getChildrenSize() === 0 && D.append(Et()), vh(D)), r();
      }
    });
  }, f = () => {
    a.update(() => {
      $e.$unmergeCell();
    });
  }, y = We(
    (K) => {
      a.update(() => {
        $e.$insertTableRow__EXPERIMENTAL(K), r();
      });
    },
    [a, r]
  ), A = We(
    (K) => {
      a.update(() => {
        for (let B = 0; B < g.columns; B++)
          $e.$insertTableColumn__EXPERIMENTAL(K);
        r();
      });
    },
    [a, r, g.columns]
  ), v = We(() => {
    a.update(() => {
      $e.$deleteTableRow__EXPERIMENTAL(), r();
    });
  }, [a, r]), O = We(() => {
    a.update(() => {
      $e.$getTableNodeFromLexicalNodeOrThrow(_).remove(), E(), r();
    });
  }, [a, _, E, r]), T = We(() => {
    a.update(() => {
      $e.$deleteTableColumn__EXPERIMENTAL(), r();
    });
  }, [a, r]), S = We(() => {
    a.update(() => {
      const K = $e.$getTableNodeFromLexicalNodeOrThrow(_), B = $e.$getTableRowIndexFromTableCellNode(_), w = K.getChildren();
      if (B >= w.length || B < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const x = w[B];
      if (!$e.$isTableRowNode(x))
        throw new Error("Expected table row");
      x.getChildren().forEach((D) => {
        if (!$e.$isTableCellNode(D))
          throw new Error("Expected table cell");
        D.toggleHeaderStyle($e.TableCellHeaderStates.ROW);
      }), E(), r();
    });
  }, [a, _, E, r]), b = We(() => {
    a.update(() => {
      const K = $e.$getTableNodeFromLexicalNodeOrThrow(_), B = $e.$getTableColumnIndexFromTableCellNode(_), w = K.getChildren(), x = Math.max(
        ...w.map((D) => D.getChildren().length)
      );
      if (B >= x || B < 0)
        throw new Error("Expected table cell to be inside of table row.");
      for (let D = 0; D < w.length; D++) {
        const Y = w[D];
        if (!$e.$isTableRowNode(Y))
          throw new Error("Expected table row");
        const j = Y.getChildren();
        if (B >= j.length)
          continue;
        const $ = j[B];
        if (!$e.$isTableCellNode($))
          throw new Error("Expected table cell");
        $.toggleHeaderStyle($e.TableCellHeaderStates.COLUMN);
      }
      E(), r();
    });
  }, [a, _, E, r]), k = We(
    (K) => {
      a.update(() => {
        const B = et();
        if (ut(B) || $e.$isTableSelection(B)) {
          const [w] = $e.$getNodeTriplet(B.anchor);
          if ($e.$isTableCellNode(w) && w.setBackgroundColor(K), $e.$isTableSelection(B)) {
            const x = B.getNodes();
            for (let D = 0; D < x.length; D++) {
              const Y = x[D];
              $e.$isTableCellNode(Y) && Y.setBackgroundColor(K);
            }
          }
        }
      });
    },
    [a]
  );
  let H = null;
  return o && (p ? H = /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: "item",
      onClick: () => d(),
      "data-test-id": "table-merge-cells",
      children: "Merge cells"
    }
  ) : u && (H = /* @__PURE__ */ R.jsx(
    "button",
    {
      type: "button",
      className: "item",
      onClick: () => f(),
      "data-test-id": "table-unmerge-cells",
      children: "Unmerge cells"
    }
  ))), Qt(
    /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: "dropdown",
        ref: i,
        onClick: (K) => {
          K.stopPropagation();
        },
        children: [
          H,
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => l("Cell background color", () => /* @__PURE__ */ R.jsx(
                Ya,
                {
                  color: N,
                  onChange: k
                }
              )),
              "data-test-id": "table-background-color",
              children: /* @__PURE__ */ R.jsx("span", { className: "text", children: "Background color" })
            }
          ),
          /* @__PURE__ */ R.jsx("hr", {}),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => y(!1),
              "data-test-id": "table-insert-row-above",
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                g.rows === 1 ? "row" : `${g.rows} rows`,
                " ",
                "above"
              ] })
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => y(!0),
              "data-test-id": "table-insert-row-below",
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                g.rows === 1 ? "row" : `${g.rows} rows`,
                " ",
                "below"
              ] })
            }
          ),
          /* @__PURE__ */ R.jsx("hr", {}),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => A(!1),
              "data-test-id": "table-insert-column-before",
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                g.columns === 1 ? "column" : `${g.columns} columns`,
                " ",
                "left"
              ] })
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => A(!0),
              "data-test-id": "table-insert-column-after",
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                g.columns === 1 ? "column" : `${g.columns} columns`,
                " ",
                "right"
              ] })
            }
          ),
          /* @__PURE__ */ R.jsx("hr", {}),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => T(),
              "data-test-id": "table-delete-columns",
              children: /* @__PURE__ */ R.jsx("span", { className: "text", children: "Delete column" })
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => v(),
              "data-test-id": "table-delete-rows",
              children: /* @__PURE__ */ R.jsx("span", { className: "text", children: "Delete row" })
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => O(),
              "data-test-id": "table-delete",
              children: /* @__PURE__ */ R.jsx("span", { className: "text", children: "Delete table" })
            }
          ),
          /* @__PURE__ */ R.jsx("hr", {}),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => S(),
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                (_.__headerState & $e.TableCellHeaderStates.ROW) === $e.TableCellHeaderStates.ROW ? "Remove" : "Add",
                " ",
                "row header"
              ] })
            }
          ),
          /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => b(),
              "data-test-id": "table-column-header",
              children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
                (_.__headerState & $e.TableCellHeaderStates.COLUMN) === $e.TableCellHeaderStates.COLUMN ? "Remove" : "Add",
                " ",
                "column header"
              ] })
            }
          )
        ]
      }
    ),
    document.body
  );
}
function bh({
  anchorElem: r,
  cellMerge: t
}) {
  const [e] = at.useLexicalComposerContext(), n = ct(null), o = ct(null), [l, a] = ve(!1), [i, _] = ve(
    null
  ), [m, g] = jr(), C = We(() => {
    const s = n.current, u = et(), c = window.getSelection(), N = document.activeElement;
    if (u == null || s == null) {
      _(null);
      return;
    }
    const h = e.getRootElement();
    if (ut(u) && h !== null && c !== null && h.contains(c.anchorNode)) {
      const E = $e.$getTableCellNodeFromLexicalNode(
        u.anchor.getNode()
      );
      if (E == null) {
        _(null);
        return;
      }
      if (e.getElementByKey(
        E.getKey()
      ) == null) {
        _(null);
        return;
      }
      _(E);
    } else N || _(null);
  }, [e]);
  De(() => e.registerUpdateListener(() => {
    e.getEditorState().read(() => {
      C();
    });
  })), De(() => {
    const s = n.current;
    if (s != null && i != null) {
      const u = e.getElementByKey(i.getKey());
      if (u != null) {
        const c = u.getBoundingClientRect(), N = s.getBoundingClientRect(), h = r.getBoundingClientRect(), E = c.top - h.top + 4, d = c.right - N.width - 10 - h.left;
        s.style.opacity = "1", s.style.transform = `translate(${d}px, ${E}px)`;
      } else
        s.style.opacity = "0", s.style.transform = "translate(-10000px, -10000px)";
    }
  }, [n, i, e, r]);
  const p = ct(i);
  return De(() => {
    p.current !== i && a(!1), p.current = i;
  }, [p, i]), /* @__PURE__ */ R.jsx("div", { className: "table-cell-action-button-container", ref: n, children: i != null && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        className: "table-cell-action-button chevron-down",
        onClick: (s) => {
          s.stopPropagation(), a(!l);
        },
        ref: o,
        children: /* @__PURE__ */ R.jsx("i", { className: "chevron-down" })
      }
    ),
    m,
    l && /* @__PURE__ */ R.jsx(
      Sh,
      {
        contextRef: o,
        setIsMenuOpen: a,
        onClose: () => a(!1),
        tableCellNode: i,
        cellMerge: t,
        showColorPickerModal: g
      }
    )
  ] }) });
}
function Oh({
  anchorElem: r = document.body,
  cellMerge: t = !1
}) {
  const e = cc();
  return Qt(
    e ? /* @__PURE__ */ R.jsx(
      bh,
      {
        anchorElem: r,
        cellMerge: t
      }
    ) : null,
    r
  );
}
const Zl = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function wh() {
  const [r] = at.useLexicalComposerContext();
  return De(() => r.registerCommand(
    $t.DRAG_DROP_PASTE,
    (t) => ((async () => {
      const e = await qe.mediaFileReader(
        t,
        [Zl].flatMap((n) => n)
      );
      for (const { file: n, result: o } of e)
        qe.isMimeType(n, Zl) && r.dispatchCommand(mr, {
          altText: n.name,
          src: o
        });
    })(), !0),
    _t
  ), [r]), null;
}
class Rh extends Zt.MenuOption {
  constructor(e, n, o) {
    super(e);
    Le(this, "title");
    Le(this, "emoji");
    Le(this, "keywords");
    this.title = e, this.emoji = n, this.keywords = o.keywords || [];
  }
}
function Mh({
  index: r,
  isSelected: t,
  onClick: e,
  onMouseEnter: n,
  option: o
}) {
  let l = "item";
  return t && (l += " selected"), /* @__PURE__ */ R.jsx(
    "li",
    {
      tabIndex: -1,
      className: l,
      ref: o.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: e,
      children: /* @__PURE__ */ R.jsxs("span", { className: "text", children: [
        o.emoji,
        " ",
        o.title
      ] })
    },
    o.key
  );
}
const Ah = 10;
function Lh() {
  const [r] = at.useLexicalComposerContext(), [t, e] = ve(null), [n, o] = ve([]);
  De(() => {
    import("./emoji-list-CKk-PE96.js").then((m) => o(m.default));
  }, []);
  const l = Bt(
    () => n != null ? n.map(
      ({ emoji: m, aliases: g, tags: C }) => new Rh(g[0], m, {
        keywords: [...g, ...C]
      })
    ) : [],
    [n]
  ), a = Zt.useBasicTypeaheadTriggerMatch(":", {
    minLength: 0
  }), i = Bt(() => l.filter((m) => t != null ? new RegExp(t, "gi").exec(m.title) || m.keywords != null ? m.keywords.some(
    (g) => new RegExp(t, "gi").exec(g)
  ) : !1 : l).slice(0, Ah), [l, t]), _ = We(
    (m, g, C) => {
      r.update(() => {
        const p = et();
        !ut(p) || m == null || (g && g.remove(), p.insertNodes([$c(m.emoji)]), C());
      });
    },
    [r]
  );
  return /* @__PURE__ */ R.jsx(
    Zt.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: e,
      onSelectOption: _,
      triggerFn: a,
      options: i,
      menuRenderFn: (m, { selectedIndex: g, selectOptionAndCleanUp: C, setHighlightedIndex: p }) => m.current == null || i.length === 0 ? null : m.current && i.length ? ir.createPortal(
        /* @__PURE__ */ R.jsx("div", { className: "typeahead-popover emoji-menu", children: /* @__PURE__ */ R.jsx("ul", { children: i.map((s, u) => /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsx(
          Mh,
          {
            index: u,
            isSelected: g === u,
            onClick: () => {
              p(u), C(s);
            },
            onMouseEnter: () => {
              p(u);
            },
            option: s
          }
        ) }, s.key)) }) }),
        m.current
      ) : null
    }
  );
}
function Io(r) {
  return r instanceof HTMLElement;
}
class uc {
  constructor(t, e) {
    Le(this, "_x");
    Le(this, "_y");
    this._x = t, this._y = e;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  equals({ x: t, y: e }) {
    return this.x === t && this.y === e;
  }
  calcDeltaXTo({ x: t }) {
    return this.x - t;
  }
  calcDeltaYTo({ y: t }) {
    return this.y - t;
  }
  calcHorizontalDistanceTo(t) {
    return Math.abs(this.calcDeltaXTo(t));
  }
  calcVerticalDistance(t) {
    return Math.abs(this.calcDeltaYTo(t));
  }
  calcDistanceTo(t) {
    return Math.sqrt(
      Math.pow(this.calcDeltaXTo(t), 2) + Math.pow(this.calcDeltaYTo(t), 2)
    );
  }
}
function Dh(r) {
  return r instanceof uc;
}
class fn {
  constructor(t, e, n, o) {
    Le(this, "_left");
    Le(this, "_top");
    Le(this, "_right");
    Le(this, "_bottom");
    const [l, a] = e <= o ? [e, o] : [o, e], [i, _] = t <= n ? [t, n] : [n, t];
    this._top = l, this._right = _, this._left = i, this._bottom = a;
  }
  get top() {
    return this._top;
  }
  get right() {
    return this._right;
  }
  get bottom() {
    return this._bottom;
  }
  get left() {
    return this._left;
  }
  get width() {
    return Math.abs(this._left - this._right);
  }
  get height() {
    return Math.abs(this._bottom - this._top);
  }
  equals({ top: t, left: e, bottom: n, right: o }) {
    return t === this._top && n === this._bottom && e === this._left && o === this._right;
  }
  contains(t) {
    if (Dh(t)) {
      const { x: e, y: n } = t, o = n < this._top, l = n > this._bottom, a = e < this._left, i = e > this._right;
      return {
        reason: {
          isOnBottomSide: l,
          isOnLeftSide: a,
          isOnRightSide: i,
          isOnTopSide: o
        },
        result: !o && !l && !a && !i
      };
    } else {
      const { top: e, left: n, bottom: o, right: l } = t;
      return e >= this._top && e <= this._bottom && o >= this._top && o <= this._bottom && n >= this._left && n <= this._right && l >= this._left && l <= this._right;
    }
  }
  intersectsWith(t) {
    const { left: e, top: n, width: o, height: l } = t, { left: a, top: i, width: _, height: m } = this, g = e + o >= a + _ ? e + o : a + _, C = n + l >= i + m ? n + l : i + m, p = e <= a ? e : a, s = n <= i ? n : i;
    return g - p <= o + _ && C - s <= l + m;
  }
  generateNewRect({
    left: t = this.left,
    top: e = this.top,
    right: n = this.right,
    bottom: o = this.bottom
  }) {
    return new fn(t, e, n, o);
  }
  static fromLTRB(t, e, n, o) {
    return new fn(t, e, n, o);
  }
  static fromLWTH(t, e, n, o) {
    return new fn(t, n, t + e, n + o);
  }
  static fromPoints(t, e) {
    const { y: n, x: o } = t, { y: l, x: a } = e;
    return fn.fromLTRB(o, n, a, l);
  }
  static fromDOM(t) {
    const { top: e, width: n, left: o, height: l } = t.getBoundingClientRect();
    return fn.fromLWTH(o, n, e, l);
  }
}
const qo = 4, $h = 2, Ih = "draggable-block-menu", Ql = "application/x-lexical-drag-block", ea = 28, Ph = 1, kh = -1, ta = 0;
let Dr = 1 / 0;
function Fh(r) {
  return r === 0 ? 1 / 0 : Dr >= 0 && Dr < r ? Dr : Math.floor(r / 2);
}
function Bh(r) {
  return r.getEditorState().read(() => Qo().getChildrenKeys());
}
function dc(r) {
  const t = (_, m) => _ ? parseFloat(window.getComputedStyle(_)[m]) : 0, { marginTop: e, marginBottom: n } = window.getComputedStyle(r), o = t(
    r.previousElementSibling,
    "marginBottom"
  ), l = t(
    r.nextElementSibling,
    "marginTop"
  ), a = Math.max(
    parseFloat(e),
    o
  );
  return { marginBottom: Math.max(
    parseFloat(n),
    l
  ), marginTop: a };
}
function Po(r, t, e, n = !1) {
  const o = r.getBoundingClientRect(), l = Bh(t);
  let a = null;
  return t.getEditorState().read(() => {
    if (n) {
      const [m, g] = [
        t.getElementByKey(l[0]),
        t.getElementByKey(l[l.length - 1])
      ], [C, p] = [
        m == null ? void 0 : m.getBoundingClientRect(),
        g == null ? void 0 : g.getBoundingClientRect()
      ];
      if (C && p && (e.y < C.top ? a = m : e.y > p.bottom && (a = g), a))
        return;
    }
    let i = Fh(l.length), _ = ta;
    for (; i >= 0 && i < l.length; ) {
      const m = l[i], g = t.getElementByKey(m);
      if (g === null)
        break;
      const C = new uc(e.x, e.y), p = fn.fromDOM(g), { marginTop: s, marginBottom: u } = dc(g), c = p.generateNewRect({
        bottom: p.bottom + u,
        left: o.left,
        right: o.right,
        top: p.top - s
      }), {
        result: N,
        reason: { isOnTopSide: h, isOnBottomSide: E }
      } = c.contains(C);
      if (N) {
        a = g, Dr = i;
        break;
      }
      _ === ta && (h ? _ = kh : E ? _ = Ph : _ = 1 / 0), i += _;
    }
  }), a;
}
function jh(r) {
  return !!r.closest(`.${Ih}`);
}
function Kh(r, t, e) {
  if (!r) {
    t.style.opacity = "0", t.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const n = r.getBoundingClientRect(), o = window.getComputedStyle(r), l = t.getBoundingClientRect(), a = e.getBoundingClientRect(), i = n.top + (parseInt(o.lineHeight, 10) - l.height) / 2 - a.top, _ = qo;
  t.style.opacity = "1", t.style.transform = `translate(${_}px, ${i}px)`;
}
function Hh(r, t) {
  const { transform: e } = t.style;
  t.style.transform = "translateZ(0)", r.setDragImage(t, 0, 0), setTimeout(() => {
    t.style.transform = e;
  });
}
function Uh(r, t, e, n) {
  const { top: o, height: l } = t.getBoundingClientRect(), { top: a, width: i } = n.getBoundingClientRect(), { marginTop: _, marginBottom: m } = dc(t);
  let g = o;
  e >= o ? g += l + m / 2 : g -= _ / 2;
  const C = g - a - $h, p = ea - qo;
  r.style.transform = `translate(${p}px, ${C}px)`, r.style.width = `${i - (ea - qo) * 2}px`, r.style.opacity = ".4";
}
function Yh(r) {
  r && (r.style.opacity = "0", r.style.transform = "translate(-10000px, -10000px)");
}
function Wh(r, t, e) {
  const n = t.parentElement, o = ct(null), l = ct(null), a = ct(!1), [i, _] = ve(null);
  De(() => {
    function C(s) {
      const u = s.target;
      if (!Io(u)) {
        _(null);
        return;
      }
      if (jh(u))
        return;
      const c = Po(t, r, s);
      _(c);
    }
    function p() {
      _(null);
    }
    return n == null || n.addEventListener("mousemove", C), n == null || n.addEventListener("mouseleave", p), () => {
      n == null || n.removeEventListener("mousemove", C), n == null || n.removeEventListener("mouseleave", p);
    };
  }, [n, t, r]), De(() => {
    o.current && Kh(i, o.current, t);
  }, [t, i]), De(() => {
    function C(s) {
      if (!a.current)
        return !1;
      const [u] = $t.eventFiles(s);
      if (u)
        return !1;
      const { pageY: c, target: N } = s;
      if (!Io(N))
        return !1;
      const h = Po(t, r, s, !0), E = l.current;
      return h === null || E === null ? !1 : (Uh(E, h, c, t), s.preventDefault(), !0);
    }
    function p(s) {
      if (!a.current)
        return !1;
      const [u] = $t.eventFiles(s);
      if (u)
        return !1;
      const { target: c, dataTransfer: N, pageY: h } = s, E = (N == null ? void 0 : N.getData(Ql)) || "", d = Go(E);
      if (!d || !Io(c))
        return !1;
      const f = Po(t, r, s, !0);
      if (!f)
        return !1;
      const y = or(f);
      if (!y)
        return !1;
      if (y === d)
        return !0;
      const A = f.getBoundingClientRect().top;
      return h >= A ? y.insertAfter(d) : y.insertBefore(d), _(null), !0;
    }
    return qe.mergeRegister(
      r.registerCommand(
        Jo,
        (s) => C(s),
        _t
      ),
      r.registerCommand(
        Xo,
        (s) => p(s),
        on
      )
    );
  }, [t, r]);
  function m(C) {
    const p = C.dataTransfer;
    if (!p || !i)
      return;
    Hh(p, i);
    let s = "";
    r.update(() => {
      const u = or(i);
      u && (s = u.getKey());
    }), a.current = !0, p.setData(Ql, s);
  }
  function g() {
    a.current = !1, Yh(l.current);
  }
  return Qt(
    /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
      /* @__PURE__ */ R.jsx(
        "div",
        {
          className: "icon draggable-block-menu",
          ref: o,
          draggable: !0,
          onDragStart: m,
          onDragEnd: g,
          children: /* @__PURE__ */ R.jsx("div", { className: e ? "icon" : "" })
        }
      ),
      /* @__PURE__ */ R.jsx("div", { className: "draggable-block-target-line", ref: l })
    ] }),
    t
  );
}
function qh({
  anchorElem: r = document.body
}) {
  const [t] = at.useLexicalComposerContext();
  return Wh(t, r, t._editable);
}
const zh = je.lazy(() => import("./DataMentionComponent-BibIciwG.js"));
function Gh(r) {
  const t = r.getAttribute("data-mention-data"), e = r.getAttribute("data-mention-type"), n = r.getAttribute("data-mention-field"), o = r.getAttribute("data-mention-label"), l = r.getAttribute("data-mention-step");
  return e !== null && n !== null && o !== null && l !== null ? {
    node: kr({ dataMention: e, fieldName: n, label: o, data: t, step: parseInt(l) })
  } : null;
}
class sr extends ln {
  constructor(e, n, o, l, a, i, _) {
    super(_);
    Le(this, "__dataMention");
    Le(this, "__fieldName");
    Le(this, "__label");
    Le(this, "__value");
    Le(this, "__data");
    Le(this, "__step");
    Le(this, "defaultStep", 1);
    this.__dataMention = e, this.__fieldName = n, this.__label = o, this.__value = a, this.__data = l, this.__step = i || this.defaultStep;
  }
  static getType() {
    return "data-mention";
  }
  static clone(e) {
    return new sr(
      e.__dataMention,
      e.__fieldName,
      e.__label,
      e.__data,
      e.__value,
      e.__step,
      e.__key
    );
  }
  static importJSON(e) {
    const {
      dataMention: n,
      fieldName: o,
      label: l,
      data: a,
      value: i
    } = e, _ = kr({ dataMention: n, fieldName: o, label: l, data: a, step: this.prototype.defaultStep });
    if (n === "input" && _.__value) {
      const m = _.__value;
      if (i) {
        const g = m.parseEditorState(i.editorState);
        g.isEmpty() || m.setEditorState(g);
      }
    }
    return _;
  }
  exportDOM() {
    var n;
    const e = document.createElement("span");
    return e.setAttribute("data-mention-type", this.__dataMention), e.setAttribute("data-mention-step", this.__step.toString()), e.setAttribute("data-mention-field", this.__fieldName), e.setAttribute("data-mention-label", this.__label), e.setAttribute("data-lexical-data-mention", "true"), e.setAttribute("data-mention-data", ((n = this.__data) == null ? void 0 : n.toString()) || ""), { element: e };
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      span: (e) => e.hasAttribute("data-lexical-data-mention") ? {
        conversion: Gh,
        priority: 1
      } : null
    };
  }
  exportJSON() {
    return {
      dataMention: this.__dataMention,
      fieldName: this.__fieldName,
      label: this.__label,
      value: this.__value && this.__value.toJSON(),
      data: this.__data,
      version: 1,
      type: "data-mention"
    };
  }
  createDOM(e) {
    var a;
    const n = document.createElement("span");
    n.setAttribute("data-mention-type", this.__dataMention), n.setAttribute("data-mention-step", this.__step.toString()), n.setAttribute("data-mention-field", this.__fieldName), n.setAttribute("data-mention-label", this.__label), n.setAttribute("data-lexical-data-mention", "true"), n.setAttribute("data-mention-data", ((a = this.__data) == null ? void 0 : a.toString()) || "");
    const l = e.theme.dataMention;
    return l !== void 0 && (n.className = l), n;
  }
  setData(e) {
    const n = this.getWritable();
    n.__data = e;
  }
  decorate() {
    return /* @__PURE__ */ R.jsx(En, { fallback: null, children: /* @__PURE__ */ R.jsx(
      zh,
      {
        dataMention: this.__dataMention,
        label: this.__label,
        value: this.__value,
        data: this.__data,
        step: this.__step
      }
    ) });
  }
}
const kr = ({ dataMention: r, fieldName: t, label: e, data: n, value: o, step: l }) => {
  !o && r === "input" && (o = Fr());
  const a = new sr(r, t, e, n, o, l);
  return lr(a);
}, fc = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, Vh = "\\b[A-Z][^\\s" + fc + "]", Jh = {
  NAME: Vh,
  PUNCTUATION: fc
}, gc = Jh.PUNCTUATION, xi = ["=\\$a", "=\\$i", "=\\$f"].join("|"), nr = "=$a", Xh = "=$i", Zh = "=$f", hc = "^(" + xi + ")\\s|[^" + gc + "\\s]", Qh = "(?:\\.[ |$]| |[" + gc + "]|)", ep = 75, tp = new RegExp(
  "(^|\\s|\\()((" + xi + ")((?:" + hc + Qh + "){0," + ep + "}))$"
), np = 50, rp = new RegExp(
  "(^|\\s|\\()((" + xi + ")((?:" + hc + "){0," + np + "}))$"
), op = 5, ip = [
  {
    inputField: {
      label: "Create a new input",
      value: null
    }
  }
], ko = /* @__PURE__ */ new Map(), sp = {
  search(r, t, e) {
    setTimeout(() => {
      const n = t.filter(
        (o) => Object.keys(o).filter((l) => o[l].label.toLowerCase().includes(r.toLowerCase())).length > 0
      );
      e(n);
    }, 300);
  }
};
function lp(r, t, e = "") {
  const [n, o] = ve([]);
  return De(() => {
    const l = ko.get(e + r);
    if (r == null) {
      o([]);
      return;
    }
    if (l !== null) {
      if (l !== void 0) {
        o(l);
        return;
      }
      ko.set(e + r, null), sp.search(r, t, (a) => {
        ko.set(e + r, a), o(a);
      });
    }
  }, [r, t, e]), n;
}
function ap(r, t) {
  let e = tp.exec(r);
  if (e === null && (e = rp.exec(r)), e !== null) {
    const n = e[1], o = e[4];
    if (o.length >= t)
      return {
        leadOffset: e.index + n.length,
        matchingString: o,
        replaceableString: e[3]
      };
  }
  return null;
}
function cp(r) {
  return ap(r, 0);
}
class up extends Zt.MenuOption {
  constructor(e, n, o, l) {
    super(e + o);
    Le(this, "dataMention");
    Le(this, "fieldName");
    Le(this, "label");
    Le(this, "data");
    this.dataMention = e, this.fieldName = n, this.label = o, this.data = l;
  }
}
function dp({
  index: r,
  isSelected: t,
  onClick: e,
  onMouseEnter: n,
  option: o
}) {
  let l = "item";
  return t && (l += " selected"), /* @__PURE__ */ R.jsx(
    "li",
    {
      tabIndex: -1,
      className: l,
      ref: o.setRefElement,
      role: "option",
      "aria-selected": t,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: e,
      children: /* @__PURE__ */ R.jsx("span", { className: "text", children: o.label })
    },
    o.key
  );
}
function fp({
  step: r,
  autoData: t,
  afterAutoData: e
}) {
  const [n] = at.useLexicalComposerContext(), [o, l] = ve(null), [a, i] = ve(), [_, m] = ve(), [g, C] = ve(!1), [p, s] = ve(null), c = lp(o, a === nr ? t : a === Zh ? e : ip, a), N = Zt.useBasicTypeaheadTriggerMatch("/", {
    minLength: 0
  }), h = Bt(
    () => c.map(
      (f) => {
        const y = Object.keys(f)[0];
        return new up(a === nr ? "auto" : "after-auto", y, f[y].label, f[y].value);
      }
    ).slice(0, op),
    [c]
  ), E = We(
    (f, y, A) => {
      if (f.fieldName === "inputField") {
        C(!0), s({ nodeToReplace: y, selectedOption: f }), A();
        return;
      }
      n.update(() => {
        console.log(a, nr, a === nr);
        const v = kr(
          {
            dataMention: a === nr ? "auto" : a == Xh ? "input" : "after-auto",
            fieldName: f.fieldName,
            label: f.label,
            data: f.data
          }
        );
        y && y.replace(v), A();
      });
    },
    [n, a]
  ), d = We(
    (f) => {
      if (N(f, n) !== null)
        return null;
      const A = cp(f);
      return A !== null && i(A.replaceableString), A;
    },
    [N, n]
  );
  return De(() => {
    r === 2 && n.registerCommand(
      In,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (f, y) => {
        var A, v;
        return ((A = y.getRootElement()) == null ? void 0 : A.className) === "DataMention__contentEditable" && !n.isEditable() ? (n.setEditable(!0), y.focus()) : ((v = y.getRootElement()) == null ? void 0 : v.className) !== "DataMention__contentEditable" && n.isEditable() && n.setEditable(!1), !0;
      },
      _t
    );
  }, [r, n]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(
      Zt.LexicalTypeaheadMenuPlugin,
      {
        onQueryChange: l,
        onSelectOption: E,
        triggerFn: d,
        options: h,
        menuRenderFn: (f, { selectedIndex: y, selectOptionAndCleanUp: A, setHighlightedIndex: v }) => f.current && c.length ? ir.createPortal(
          /* @__PURE__ */ R.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ R.jsx("ul", { children: h.map((O, T) => /* @__PURE__ */ R.jsx(
            dp,
            {
              index: T,
              isSelected: y === T,
              onClick: () => {
                v(T), A(O);
              },
              onMouseEnter: () => {
                v(T);
              },
              option: O
            },
            O.key
          )) }) }),
          f.current
        ) : null
      }
    ),
    g && p && ir.createPortal(
      /* @__PURE__ */ R.jsxs("div", { className: "data-mention-input-modal", children: [
        /* @__PURE__ */ R.jsx(
          "input",
          {
            placeholder: "Enter label of input field",
            value: _ || "",
            type: "text",
            onChange: (f) => {
              m(f.target.value);
            }
          }
        ),
        /* @__PURE__ */ R.jsx("button", { onClick: () => {
          n.update(() => {
            const f = kr(
              {
                dataMention: "input",
                fieldName: p.selectedOption.fieldName,
                label: _ || "Empty",
                data: null
              }
            );
            p.nodeToReplace && p.nodeToReplace.replace(f), C(!1), s(null);
          });
        }, children: "Save" })
      ] }),
      document.body
    )
  ] });
}
var Fo = {}, na;
function gp() {
  if (na) return Fo;
  na = 1;
  var r = Ye(), t = je, o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  function l({
    ignoreHistoryMergeTagChange: a = !0,
    ignoreSelectionChange: i = !1,
    onChange: _
  }) {
    const [m] = r.useLexicalComposerContext();
    return o(() => {
      if (_)
        return m.registerUpdateListener(({
          editorState: g,
          dirtyElements: C,
          dirtyLeaves: p,
          prevEditorState: s,
          tags: u
        }) => {
          i && C.size === 0 && p.size === 0 || a && u.has("history-merge") || s.isEmpty() || _(g, m, u);
        });
    }, [m, a, i, _]), null;
  }
  return Fo.OnChangePlugin = l, Fo;
}
var Bo = {}, ra;
function hp() {
  if (ra) return Bo;
  ra = 1;
  var r = Ye(), t = je, e = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? t.useLayoutEffect : t.useEffect;
  return Bo.OnChangePlugin = function({ ignoreHistoryMergeTagChange: n = !0, ignoreSelectionChange: o = !1, onChange: l }) {
    let [a] = r.useLexicalComposerContext();
    return e(() => {
      if (l) return a.registerUpdateListener(({ editorState: i, dirtyElements: _, dirtyLeaves: m, prevEditorState: g, tags: C }) => {
        o && _.size === 0 && m.size === 0 || n && C.has("history-merge") || g.isEmpty() || l(i, a, C);
      });
    }, [a, n, o, l]), null;
  }, Bo;
}
const pp = process.env.NODE_ENV === "development" ? gp() : hp();
var mp = pp;
function _p(r) {
  const { step: t, autoMentionData: e, autoAfterMentionData: n, onChange: o = () => {
  } } = r, { historyState: l } = md(), a = /* @__PURE__ */ R.jsx(Yd, { children: "Enter text..." }), [i, _] = ve(null), [m, g] = ve(!1), [C, p] = ve(!1), s = (u) => {
    u !== null && _(u);
  };
  return De(() => {
    const u = () => {
      const c = Hn && window.matchMedia("(max-width: 1025px)").matches;
      c !== m && g(c);
    };
    return u(), window.addEventListener("resize", u), () => {
      window.removeEventListener("resize", u);
    };
  }, [m]), /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(ug, { setIsLinkEditMode: p }),
    /* @__PURE__ */ R.jsxs("div", { className: "editor-container", children: [
      /* @__PURE__ */ R.jsx(wh, {}),
      /* @__PURE__ */ R.jsx(Id.AutoFocusPlugin, {}),
      /* @__PURE__ */ R.jsx(ih, {}),
      /* @__PURE__ */ R.jsx(Lh, {}),
      /* @__PURE__ */ R.jsx(og, {}),
      /* @__PURE__ */ R.jsx(fp, { step: t, autoData: e, afterAutoData: n }),
      /* @__PURE__ */ R.jsx(Zg, {}),
      /* @__PURE__ */ R.jsx(Gg, {}),
      /* @__PURE__ */ R.jsx(mp.OnChangePlugin, { ignoreSelectionChange: !0, onChange: o }),
      /* @__PURE__ */ R.jsx(ja.HistoryPlugin, { externalHistoryState: l }),
      /* @__PURE__ */ R.jsx(kg, {}),
      /* @__PURE__ */ R.jsx(
        bd.RichTextPlugin,
        {
          contentEditable: /* @__PURE__ */ R.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ R.jsx("div", { className: "editor", ref: s, children: /* @__PURE__ */ R.jsx(Vd, {}) }) }),
          placeholder: a,
          ErrorBoundary: Ad
        }
      ),
      /* @__PURE__ */ R.jsx(hg.ListPlugin, {}),
      /* @__PURE__ */ R.jsx(Ng.CheckListPlugin, {}),
      /* @__PURE__ */ R.jsx(Eg, { maxDepth: 7 }),
      /* @__PURE__ */ R.jsx(
        mh.TablePlugin,
        {
          hasCellMerge: !0,
          hasCellBackgroundColor: !0
        }
      ),
      /* @__PURE__ */ R.jsx(Eh, {}),
      /* @__PURE__ */ R.jsx(ff, {}),
      /* @__PURE__ */ R.jsx(vf, {}),
      /* @__PURE__ */ R.jsx(Hg, {}),
      /* @__PURE__ */ R.jsx(Df, {}),
      /* @__PURE__ */ R.jsx(Vf, {}),
      /* @__PURE__ */ R.jsx(Jf, {}),
      /* @__PURE__ */ R.jsx(Gf, {}),
      /* @__PURE__ */ R.jsx(Ud.HorizontalRulePlugin, {}),
      /* @__PURE__ */ R.jsx(Kf, {}),
      /* @__PURE__ */ R.jsx(Af, {}),
      /* @__PURE__ */ R.jsx(Sg, {}),
      /* @__PURE__ */ R.jsx(Bd.TabIndentationPlugin, {}),
      /* @__PURE__ */ R.jsx(Hf, {}),
      /* @__PURE__ */ R.jsx(sf, {}),
      /* @__PURE__ */ R.jsx(If, {}),
      i && !m && /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx(
          qh,
          {
            anchorElem: i
          }
        ),
        /* @__PURE__ */ R.jsx(
          Mg,
          {
            anchorElem: i,
            isLinkEditMode: C,
            setIsLinkEditMode: p
          }
        ),
        /* @__PURE__ */ R.jsx(
          fh,
          {
            anchorElem: i
          }
        ),
        /* @__PURE__ */ R.jsx(
          Oh,
          {
            anchorElem: i,
            cellMerge: !0
          }
        )
      ] })
    ] })
  ] });
}
function wp(r) {
  const {
    editorState: t,
    historyState: e,
    onChange: n,
    autoAfterMentionData: o = [],
    autoMentionData: l = [],
    step: a = 1
  } = r;
  sr.prototype.defaultStep = a;
  const i = {
    editorState: t,
    namespace: "Doc App",
    editable: a === 1,
    theme: Uc,
    onError: (_) => {
      console.log("Error:", _.message);
    },
    nodes: [...cd, sr]
  };
  return /* @__PURE__ */ R.jsx(Hc.LexicalComposer, { initialConfig: i, children: /* @__PURE__ */ R.jsx(pd, { initHistoryState: e, children: /* @__PURE__ */ R.jsx("div", { className: "editor-shell", children: /* @__PURE__ */ R.jsx(_p, { step: a, autoAfterMentionData: o, autoMentionData: l, onChange: n }) }) }) });
}
export {
  Pu as $,
  Br as A,
  qt as B,
  Ha as C,
  Un as D,
  Zg as E,
  fh as F,
  Hn as G,
  Uc as H,
  Vd as I,
  Op as J,
  Gg as K,
  Id as L,
  xf as M,
  wp as N,
  Yd as P,
  Ef as S,
  sn as T,
  Hg as a,
  ja as b,
  bd as c,
  Gd as d,
  Ad as e,
  Mu as f,
  at as g,
  qe as h,
  eu as i,
  R as j,
  qg as k,
  vp as l,
  Ff as m,
  Bf as n,
  Sp as o,
  bp as p,
  af as q,
  Ye as r,
  Ws as s,
  jr as t,
  md as u,
  sd as v,
  La as w,
  en as x,
  Ke as y,
  fi as z
};
