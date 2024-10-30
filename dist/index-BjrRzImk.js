var f1 = Object.defineProperty;
var p1 = (r, e, t) => e in r ? f1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ne = (r, e, t) => p1(r, typeof e != "symbol" ? e + "" : e, t);
import * as mt from "react";
import tn, { createContext as uo, useContext as sc, useMemo as it, useLayoutEffect as Br, useEffect as B, useState as q, useCallback as ie, Suspense as jr, useRef as Te, forwardRef as oc } from "react";
import { createEditor as va, $getRoot as wt, $createParagraphNode as xe, $getSelection as j, $isElementNode as ue, $isRangeSelection as U, $isTextNode as Se, $isTokenOrSegmented as Ki, $getAdjacentNode as Ts, $isDecoratorNode as wr, $isRootNode as co, $getCharacterOffsets as g1, $isRootOrShadowRoot as zt, $isLineBreakNode as ba, $getPreviousSelection as ho, $splitNode as v1, TextNode as $r, $applyNodeReplacement as ut, ElementNode as St, $isTabNode as lc, $createTabNode as mo, $createLineBreakNode as oi, isHTMLElement as Cr, isHTMLAnchorElement as b1, createCommand as Ue, $isParagraphNode as Hr, $createTextNode as Ir, INSERT_PARAGRAPH_COMMAND as ca, COMMAND_PRIORITY_LOW as ye, $isLeafNode as uc, $isNodeSelection as gt, $createNodeSelection as y1, $setSelection as xt, $getNodeByKey as bt, DecoratorNode as ur, KEY_BACKSPACE_COMMAND as ya, KEY_DELETE_COMMAND as xa, CLICK_COMMAND as wa, $cloneWithProperties as cc, isDocumentFragment as $0, ArtificialNode__DO_NOT_USE as dc, $isBlockElementNode as li, isBlockDomNode as H0, isInlineDomNode as q0, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as hc, $parseSerializedNode as x1, COPY_COMMAND as mc, COMMAND_PRIORITY_CRITICAL as pt, isSelectionWithinEditor as w1, $getEditor as S1, PASTE_COMMAND as fc, isSelectionCapturedInDecoratorInput as _1, COMMAND_PRIORITY_EDITOR as be, CUT_COMMAND as pc, SELECT_ALL_COMMAND as C1, $selectAll as k1, DRAGOVER_COMMAND as Si, $getNearestNodeFromDOMNode as Qe, DRAGSTART_COMMAND as fo, DROP_COMMAND as _i, $createRangeSelection as Sa, $normalizeSelection__EXPERIMENTAL as po, KEY_ESCAPE_COMMAND as Rn, KEY_ENTER_COMMAND as go, INSERT_LINE_BREAK_COMMAND as U0, DELETE_CHARACTER_COMMAND as ia, OUTDENT_CONTENT_COMMAND as ui, KEY_ARROW_RIGHT_COMMAND as Ci, KEY_ARROW_LEFT_COMMAND as _a, KEY_ARROW_DOWN_COMMAND as mn, KEY_ARROW_UP_COMMAND as fn, INDENT_CONTENT_COMMAND as ki, INSERT_TAB_COMMAND as gc, $insertNodes as In, FORMAT_ELEMENT_COMMAND as er, FORMAT_TEXT_COMMAND as yt, REMOVE_TEXT_COMMAND as E1, CONTROLLED_TEXT_INSERTION_COMMAND as vc, DELETE_LINE_COMMAND as Ns, DELETE_WORD_COMMAND as bc, setNodeIndentFromDOM as yc, COMMAND_PRIORITY_HIGH as Lt, KEY_TAB_COMMAND as Ei, FOCUS_COMMAND as xc, SELECTION_CHANGE_COMMAND as yr, $createRangeSelectionFromDom as T1, TEXT_TYPE_TO_FORMAT as Rr, isCurrentlyReadOnlyMode as N1, $createPoint as K0, CAN_REDO_COMMAND as ea, CAN_UNDO_COMMAND as ta, CLEAR_HISTORY_COMMAND as A1, CLEAR_EDITOR_COMMAND as M1, REDO_COMMAND as wc, UNDO_COMMAND as Sc, IS_CODE as O1, IS_HIGHLIGHT as D1, IS_SUBSCRIPT as R1, IS_SUPERSCRIPT as I1, IS_BOLD as F1, IS_ITALIC as L1, IS_UNDERLINE as W0, IS_STRIKETHROUGH as G0, KEY_MODIFIER_COMMAND as z1, COMMAND_PRIORITY_NORMAL as P1, KEY_SPACE_COMMAND as B1, getNearestEditorFromDOMNode as j1, $nodesOfType as $1 } from "lexical";
import * as da from "react-dom";
import { createPortal as Zt, flushSync as H1 } from "react-dom";
var Y0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, As = { exports: {} }, Vn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V0;
function q1() {
  if (V0) return Vn;
  V0 = 1;
  var r = tn, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, c) {
    var u, d = {}, m = null, g = null;
    c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (u in l) n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (o && o.defaultProps) for (u in l = o.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: e, type: o, key: m, ref: g, props: d, _owner: a.current };
  }
  return Vn.Fragment = t, Vn.jsx = s, Vn.jsxs = s, Vn;
}
var Xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0;
function U1() {
  return X0 || (X0 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = tn, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function x(O) {
      if (O === null || typeof O != "object")
        return null;
      var K = v && O[v] || O[b];
      return typeof K == "function" ? K : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var K = arguments.length, Q = new Array(K > 1 ? K - 1 : 0), ve = 1; ve < K; ve++)
          Q[ve - 1] = arguments[ve];
        C("error", O, Q);
      }
    }
    function C(O, K, Q) {
      {
        var ve = S.ReactDebugCurrentFrame, Ie = ve.getStackAddendum();
        Ie !== "" && (K += "%s", Q = Q.concat([Ie]));
        var Le = Q.map(function(Ae) {
          return String(Ae);
        });
        Le.unshift("Warning: " + K), Function.prototype.apply.call(console[O], console, Le);
      }
    }
    var N = !1, k = !1, E = !1, I = !1, D = !1, M;
    M = Symbol.for("react.module.reference");
    function F(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === i || D || O === a || O === c || O === u || I || O === g || N || k || E || typeof O == "object" && O !== null && (O.$$typeof === m || O.$$typeof === d || O.$$typeof === s || O.$$typeof === o || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === M || O.getModuleId !== void 0));
    }
    function z(O, K, Q) {
      var ve = O.displayName;
      if (ve)
        return ve;
      var Ie = K.displayName || K.name || "";
      return Ie !== "" ? Q + "(" + Ie + ")" : Q;
    }
    function $(O) {
      return O.displayName || "Context";
    }
    function P(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case o:
            var K = O;
            return $(K) + ".Consumer";
          case s:
            var Q = O;
            return $(Q._context) + ".Provider";
          case l:
            return z(O, O.render, "ForwardRef");
          case d:
            var ve = O.displayName || null;
            return ve !== null ? ve : P(O.type) || "Memo";
          case m: {
            var Ie = O, Le = Ie._payload, Ae = Ie._init;
            try {
              return P(Ae(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, Y = 0, re, de, J, he, le, Ee, oe;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Be() {
      {
        if (Y === 0) {
          re = console.log, de = console.info, J = console.warn, he = console.error, le = console.group, Ee = console.groupCollapsed, oe = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        Y++;
      }
    }
    function je() {
      {
        if (Y--, Y === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, O, {
              value: re
            }),
            info: X({}, O, {
              value: de
            }),
            warn: X({}, O, {
              value: J
            }),
            error: X({}, O, {
              value: he
            }),
            group: X({}, O, {
              value: le
            }),
            groupCollapsed: X({}, O, {
              value: Ee
            }),
            groupEnd: X({}, O, {
              value: oe
            })
          });
        }
        Y < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = S.ReactCurrentDispatcher, Je;
    function Ge(O, K, Q) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var ve = Ie.stack.trim().match(/\n( *(at )?)/);
            Je = ve && ve[1] || "";
          }
        return `
` + Je + O;
      }
    }
    var Rt = !1, _t;
    {
      var Qt = typeof WeakMap == "function" ? WeakMap : Map;
      _t = new Qt();
    }
    function ee(O, K) {
      if (!O || Rt)
        return "";
      {
        var Q = _t.get(O);
        if (Q !== void 0)
          return Q;
      }
      var ve;
      Rt = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = dt.current, dt.current = null, Be();
      try {
        if (K) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (At) {
              ve = At;
            }
            Reflect.construct(O, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (At) {
              ve = At;
            }
            O.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (At) {
            ve = At;
          }
          O();
        }
      } catch (At) {
        if (At && ve && typeof At.stack == "string") {
          for (var Ne = At.stack.split(`
`), kt = ve.stack.split(`
`), rt = Ne.length - 1, st = kt.length - 1; rt >= 1 && st >= 0 && Ne[rt] !== kt[st]; )
            st--;
          for (; rt >= 1 && st >= 0; rt--, st--)
            if (Ne[rt] !== kt[st]) {
              if (rt !== 1 || st !== 1)
                do
                  if (rt--, st--, st < 0 || Ne[rt] !== kt[st]) {
                    var $t = `
` + Ne[rt].replace(" at new ", " at ");
                    return O.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", O.displayName)), typeof O == "function" && _t.set(O, $t), $t;
                  }
                while (rt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        Rt = !1, dt.current = Le, je(), Error.prepareStackTrace = Ie;
      }
      var yn = O ? O.displayName || O.name : "", Kr = yn ? Ge(yn) : "";
      return typeof O == "function" && _t.set(O, Kr), Kr;
    }
    function we(O, K, Q) {
      return ee(O, !1);
    }
    function Ke(O) {
      var K = O.prototype;
      return !!(K && K.isReactComponent);
    }
    function Ct(O, K, Q) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return ee(O, Ke(O));
      if (typeof O == "string")
        return Ge(O);
      switch (O) {
        case c:
          return Ge("Suspense");
        case u:
          return Ge("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            return we(O.render);
          case d:
            return Ct(O.type, K, Q);
          case m: {
            var ve = O, Ie = ve._payload, Le = ve._init;
            try {
              return Ct(Le(Ie), K, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, ht = {}, $e = S.ReactDebugCurrentFrame;
    function It(O) {
      if (O) {
        var K = O._owner, Q = Ct(O.type, O._source, K ? K.type : null);
        $e.setExtraStackFrame(Q);
      } else
        $e.setExtraStackFrame(null);
    }
    function jt(O, K, Q, ve, Ie) {
      {
        var Le = Function.call.bind(tt);
        for (var Ae in O)
          if (Le(O, Ae)) {
            var Ne = void 0;
            try {
              if (typeof O[Ae] != "function") {
                var kt = Error((ve || "React class") + ": " + Q + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              Ne = O[Ae](K, Ae, ve, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Ne = rt;
            }
            Ne && !(Ne instanceof Error) && (It(Ie), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", Q, Ae, typeof Ne), It(null)), Ne instanceof Error && !(Ne.message in ht) && (ht[Ne.message] = !0, It(Ie), w("Failed %s type: %s", Q, Ne.message), It(null));
          }
      }
    }
    var vn = Array.isArray;
    function Bi(O) {
      return vn(O);
    }
    function Yh(O) {
      {
        var K = typeof Symbol == "function" && Symbol.toStringTag, Q = K && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return Q;
      }
    }
    function Vh(O) {
      try {
        return M0(O), !1;
      } catch {
        return !0;
      }
    }
    function M0(O) {
      return "" + O;
    }
    function O0(O) {
      if (Vh(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yh(O)), M0(O);
    }
    var Yn = S.ReactCurrentOwner, Xh = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, D0, R0, ji;
    ji = {};
    function Jh(O) {
      if (tt.call(O, "ref")) {
        var K = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Zh(O) {
      if (tt.call(O, "key")) {
        var K = Object.getOwnPropertyDescriptor(O, "key").get;
        if (K && K.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Qh(O, K) {
      if (typeof O.ref == "string" && Yn.current && K && Yn.current.stateNode !== K) {
        var Q = P(Yn.current.type);
        ji[Q] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Yn.current.type), O.ref), ji[Q] = !0);
      }
    }
    function e1(O, K) {
      {
        var Q = function() {
          D0 || (D0 = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        Q.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function t1(O, K) {
      {
        var Q = function() {
          R0 || (R0 = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
        };
        Q.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var r1 = function(O, K, Q, ve, Ie, Le, Ae) {
      var Ne = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: O,
        key: K,
        ref: Q,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ne, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.defineProperty(Ne, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
    };
    function n1(O, K, Q, ve, Ie) {
      {
        var Le, Ae = {}, Ne = null, kt = null;
        Q !== void 0 && (O0(Q), Ne = "" + Q), Zh(K) && (O0(K.key), Ne = "" + K.key), Jh(K) && (kt = K.ref, Qh(K, Ie));
        for (Le in K)
          tt.call(K, Le) && !Xh.hasOwnProperty(Le) && (Ae[Le] = K[Le]);
        if (O && O.defaultProps) {
          var rt = O.defaultProps;
          for (Le in rt)
            Ae[Le] === void 0 && (Ae[Le] = rt[Le]);
        }
        if (Ne || kt) {
          var st = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Ne && e1(Ae, st), kt && t1(Ae, st);
        }
        return r1(O, Ne, kt, Ie, ve, Yn.current, Ae);
      }
    }
    var $i = S.ReactCurrentOwner, I0 = S.ReactDebugCurrentFrame;
    function bn(O) {
      if (O) {
        var K = O._owner, Q = Ct(O.type, O._source, K ? K.type : null);
        I0.setExtraStackFrame(Q);
      } else
        I0.setExtraStackFrame(null);
    }
    var Hi;
    Hi = !1;
    function qi(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function F0() {
      {
        if ($i.current) {
          var O = P($i.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function a1(O) {
      return "";
    }
    var L0 = {};
    function i1(O) {
      {
        var K = F0();
        if (!K) {
          var Q = typeof O == "string" ? O : O.displayName || O.name;
          Q && (K = `

Check the top-level render call using <` + Q + ">.");
        }
        return K;
      }
    }
    function z0(O, K) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var Q = i1(K);
        if (L0[Q])
          return;
        L0[Q] = !0;
        var ve = "";
        O && O._owner && O._owner !== $i.current && (ve = " It was passed a child from " + P(O._owner.type) + "."), bn(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ve), bn(null);
      }
    }
    function P0(O, K) {
      {
        if (typeof O != "object")
          return;
        if (Bi(O))
          for (var Q = 0; Q < O.length; Q++) {
            var ve = O[Q];
            qi(ve) && z0(ve, K);
          }
        else if (qi(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Ie = x(O);
          if (typeof Ie == "function" && Ie !== O.entries)
            for (var Le = Ie.call(O), Ae; !(Ae = Le.next()).done; )
              qi(Ae.value) && z0(Ae.value, K);
        }
      }
    }
    function s1(O) {
      {
        var K = O.type;
        if (K == null || typeof K == "string")
          return;
        var Q;
        if (typeof K == "function")
          Q = K.propTypes;
        else if (typeof K == "object" && (K.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        K.$$typeof === d))
          Q = K.propTypes;
        else
          return;
        if (Q) {
          var ve = P(K);
          jt(Q, O.props, "prop", ve, O);
        } else if (K.PropTypes !== void 0 && !Hi) {
          Hi = !0;
          var Ie = P(K);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function o1(O) {
      {
        for (var K = Object.keys(O.props), Q = 0; Q < K.length; Q++) {
          var ve = K[Q];
          if (ve !== "children" && ve !== "key") {
            bn(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), bn(null);
            break;
          }
        }
        O.ref !== null && (bn(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var B0 = {};
    function j0(O, K, Q, ve, Ie, Le) {
      {
        var Ae = F(O);
        if (!Ae) {
          var Ne = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = a1();
          kt ? Ne += kt : Ne += F0();
          var rt;
          O === null ? rt = "null" : Bi(O) ? rt = "array" : O !== void 0 && O.$$typeof === e ? (rt = "<" + (P(O.type) || "Unknown") + " />", Ne = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Ne);
        }
        var st = n1(O, K, Q, Ie, Le);
        if (st == null)
          return st;
        if (Ae) {
          var $t = K.children;
          if ($t !== void 0)
            if (ve)
              if (Bi($t)) {
                for (var yn = 0; yn < $t.length; yn++)
                  P0($t[yn], O);
                Object.freeze && Object.freeze($t);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              P0($t, O);
        }
        if (tt.call(K, "key")) {
          var Kr = P(O), At = Object.keys(K).filter(function(m1) {
            return m1 !== "key";
          }), Ui = At.length > 0 ? "{key: someKey, " + At.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!B0[Kr + Ui]) {
            var h1 = At.length > 0 ? "{" + At.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ui, Kr, h1, Kr), B0[Kr + Ui] = !0;
          }
        }
        return O === n ? o1(st) : s1(st), st;
      }
    }
    function l1(O, K, Q) {
      return j0(O, K, Q, !0);
    }
    function u1(O, K, Q) {
      return j0(O, K, Q, !1);
    }
    var c1 = u1, d1 = l1;
    Xn.Fragment = n, Xn.jsx = c1, Xn.jsxs = d1;
  }()), Xn;
}
process.env.NODE_ENV === "production" ? As.exports = q1() : As.exports = U1();
var p = As.exports;
function K1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var W1 = K1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const _c = uo(null);
function G1(r, e) {
  let t = null;
  return r != null && (t = r[1]), { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function se() {
  const r = sc(_c);
  return r == null && W1(8), r;
}
const Cc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Y1 = Cc ? Br : B, Pa = { tag: "history-merge" };
function V1({ initialConfig: r, children: e }) {
  const t = it(() => {
    const { theme: n, namespace: a, nodes: i, onError: s, editorState: o, html: l } = r, c = G1(null, n), u = va({ editable: r.editable, html: l, namespace: a, nodes: i, onError: (d) => s(d, u), theme: n });
    return function(d, m) {
      if (m !== null) {
        if (m === void 0) d.update(() => {
          const g = wt();
          if (g.isEmpty()) {
            const v = xe();
            g.append(v);
            const b = Cc ? document.activeElement : null;
            (j() !== null || b !== null && b === d.getRootElement()) && v.select();
          }
        }, Pa);
        else if (m !== null) switch (typeof m) {
          case "string": {
            const g = d.parseEditorState(m);
            d.setEditorState(g, Pa);
            break;
          }
          case "object":
            d.setEditorState(m, Pa);
            break;
          case "function":
            d.update(() => {
              wt().isEmpty() && m(d);
            }, Pa);
        }
      }
    }(u, o), [u, c];
  }, []);
  return Y1(() => {
    const n = r.editable, [a] = t;
    a.setEditable(n === void 0 || n);
  }, []), p.jsx(_c.Provider, { value: t, children: e });
}
const X1 = {
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
  dataMention: "et_data-mention",
  fileAttachment: "file-attach"
};
function J1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var kc = J1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const ci = /* @__PURE__ */ new Map();
function Ec(r) {
  const e = {};
  if (!r) return e;
  const t = r.split(";");
  for (const n of t) if (n !== "") {
    const [a, i] = n.split(/:([^]+)/);
    a && i && (e[a.trim()] = i.trim());
  }
  return e;
}
function vo(r) {
  let e = ci.get(r);
  return e === void 0 && (e = Ec(r), ci.set(r, e)), e;
}
function Z1(r) {
  let e = "";
  for (const t in r) t && (e += `${t}: ${r[t]};`);
  return e;
}
function Tc(r, e) {
  const t = r.getStartEndPoints();
  if (e.isSelected(r) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [n, a] = t, i = r.isBackward(), s = n.getNode(), o = a.getNode(), l = e.is(s), c = e.is(o);
    if (l || c) {
      const [u, d] = g1(r), m = s.is(o), g = e.is(i ? o : s), v = e.is(i ? s : o);
      let b, x = 0;
      return m ? (x = u > d ? d : u, b = u > d ? u : d) : g ? (x = i ? d : u, b = void 0) : v && (x = 0, b = i ? u : d), e.__text = e.__text.slice(x, b), e;
    }
  }
  return e;
}
function J0(r) {
  if (r.type === "text") return r.offset === r.getNode().getTextContentSize();
  const e = r.getNode();
  return ue(e) || kc(177), r.offset === e.getChildrenSize();
}
function Q1(r) {
  const e = r.getStyle(), t = Ec(e);
  ci.set(e, t);
}
function xn(r, e) {
  const t = vo("getStyle" in r ? r.getStyle() : r.style), n = Object.entries(e).reduce((i, [s, o]) => (typeof o == "function" ? i[s] = o(t[s], r) : o === null ? delete i[s] : i[s] = o, i), { ...t }), a = Z1(n);
  r.setStyle(a), ci.set(a, n);
}
function bo(r, e) {
  const t = r.getNodes(), n = t.length, a = r.getStartEndPoints();
  if (a === null) return;
  const [i, s] = a, o = n - 1;
  let l = t[0], c = t[o];
  if (r.isCollapsed() && U(r)) return void xn(r, e);
  const u = l.getTextContent().length, d = s.offset;
  let m = i.offset;
  const g = i.isBefore(s);
  let v = g ? m : d, b = g ? d : m;
  const x = g ? i.type : s.type, S = g ? s.type : i.type, w = g ? s.key : i.key;
  if (Se(l) && v === u) {
    const C = l.getNextSibling();
    Se(C) && (m = 0, v = 0, l = C);
  }
  if (t.length === 1) {
    if (Se(l) && l.canHaveFormat()) {
      if (v = x === "element" ? 0 : m > d ? d : m, b = S === "element" ? u : m > d ? m : d, v === b) return;
      if (Ki(l) || v === 0 && b === u) xn(l, e), l.select(v, b);
      else {
        const C = l.splitText(v, b), N = v === 0 ? C[0] : C[1];
        xn(N, e), N.select(0, b - v);
      }
    }
  } else {
    if (Se(l) && v < l.getTextContentSize() && l.canHaveFormat() && (v === 0 || Ki(l) || (l = l.splitText(v)[1], v = 0, g ? i.set(l.getKey(), v, "text") : s.set(l.getKey(), v, "text")), xn(l, e)), Se(c) && c.canHaveFormat()) {
      const C = c.getTextContent().length;
      c.__key !== w && b !== 0 && (b = C), b === C || Ki(c) || ([c] = c.splitText(b)), b === 0 && S !== "element" || xn(c, e);
    }
    for (let C = 1; C < o; C++) {
      const N = t[C], k = N.getKey();
      Se(N) && N.canHaveFormat() && k !== l.getKey() && k !== c.getKey() && !N.isToken() && xn(N, e);
    }
  }
}
function Qr(r, e) {
  if (r === null) return;
  const t = r.getStartEndPoints(), n = t ? t[0] : null;
  if (n !== null && n.key === "root") {
    const s = e(), o = wt(), l = o.getFirstChild();
    return void (l ? l.replace(s, !0) : o.append(s));
  }
  const a = r.getNodes(), i = n !== null && function(s, o) {
    let l = s;
    for (; l !== null && l.getParent() !== null && !o(l); ) l = l.getParentOrThrow();
    return o(l) ? l : null;
  }(n.getNode(), el);
  i && a.indexOf(i) === -1 && a.push(i);
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    if (!el(o)) continue;
    ue(o) || kc(178);
    const l = e();
    l.setFormat(o.getFormatType()), l.setIndent(o.getIndent()), o.replace(l, !0);
  }
}
function Z0(r, e) {
  const t = Ts(r.focus, e);
  return wr(t) && !t.isIsolated() || ue(t) && !t.isInline() && !t.canBeEmpty();
}
function em(r, e, t, n) {
  r.modify(e ? "extend" : "move", t, n);
}
function Nc(r) {
  const e = r.anchor.getNode();
  return (co(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function Q0(r, e, t) {
  const n = Nc(r);
  em(r, e, t ? !n : n, "character");
}
function tm(r, e, t) {
  const n = vo(r.getStyle());
  return n !== null && n[e] || t;
}
function Ba(r, e, t = "") {
  let n = null;
  const a = r.getNodes(), i = r.anchor, s = r.focus, o = r.isBackward(), l = o ? s.offset : i.offset, c = o ? s.getNode() : i.getNode();
  if (U(r) && r.isCollapsed() && r.style !== "") {
    const u = vo(r.style);
    if (u !== null && e in u) return u[e];
  }
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    if ((u === 0 || l !== 0 || !d.is(c)) && Se(d)) {
      const m = tm(d, e, t);
      if (n === null) n = m;
      else if (n !== m) {
        n = "";
        break;
      }
    }
  }
  return n === null ? t : n;
}
function el(r) {
  if (wr(r) || !ue(r) || zt(r)) return !1;
  const e = r.getFirstChild(), t = e === null || ba(e) || Se(e) || e.isInline();
  return !r.isInline() && r.canBeEmpty() !== !1 && t;
}
function rm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var nm = rm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const yo = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, am = yo && "documentMode" in document ? document.documentMode : null, im = yo && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!yo || !("InputEvent" in window) || am) && "getTargetRanges" in new window.InputEvent("input");
function Ac(...r) {
  const e = [];
  for (const t of r) if (t && typeof t == "string") for (const [n] of t.matchAll(/\S+/g)) e.push(n);
  return e;
}
function Re(...r) {
  return () => {
    for (let e = r.length - 1; e >= 0; e--) r[e]();
    r.length = 0;
  };
}
const sm = im;
function et(r, ...e) {
  const t = Ac(...e);
  t.length > 0 && r.classList.add(...t);
}
function pn(r, ...e) {
  const t = Ac(...e);
  t.length > 0 && r.classList.remove(...t);
}
function Mc(r, e) {
  for (const t of e) if (r.type.startsWith(t)) return !0;
  return !1;
}
function om(r, e) {
  const t = r[Symbol.iterator]();
  return new Promise((n, a) => {
    const i = [], s = () => {
      const { done: o, value: l } = t.next();
      if (o) return n(i);
      const c = new FileReader();
      c.addEventListener("error", a), c.addEventListener("load", () => {
        const u = c.result;
        typeof u == "string" && i.push({ file: l, result: u }), s();
      }), Mc(l, e) ? c.readAsDataURL(l) : s();
    };
    s();
  });
}
function tl(r) {
  let e = r;
  if (ue(e) && e.getChildrenSize() > 0) e = e.getLastChild();
  else {
    let t = null;
    for (; t === null && e !== null; ) t = e.getPreviousSibling(), e = t === null ? e.getParent() : t;
  }
  return e;
}
function Oc(r, e) {
  let t = r;
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
}
function Ti(r) {
  const e = me(r, (t) => ue(t) && !t.isInline());
  return ue(e) || nm(4, r.__key), e;
}
const me = (r, e) => {
  let t = r;
  for (; t !== wt() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
function qr(r) {
  const e = j() || ho();
  if (U(e)) {
    const { focus: t } = e, n = t.getNode(), a = t.offset;
    if (zt(n)) {
      const i = n.getChildAtIndex(a);
      i == null ? n.append(r) : i.insertBefore(r), r.selectNext();
    } else {
      let i, s;
      Se(n) ? (i = n.getParentOrThrow(), s = n.getIndexWithinParent(), a > 0 && (s += 1, n.splitText(a))) : (i = n, s = a);
      const [, o] = v1(i, s);
      o.insertBefore(r), o.selectStart();
    }
  } else {
    if (e != null) {
      const n = e.getNodes();
      n[n.length - 1].getTopLevelElementOrThrow().insertAfter(r);
    } else
      wt().append(r);
    const t = xe();
    r.insertAfter(t), t.select();
  }
  return r.getLatest();
}
function Ca(r, e) {
  const t = e();
  return r.replace(t), t.append(r), t;
}
function xr(r, e) {
  return r !== null && Object.getPrototypeOf(r).constructor.name === e.name;
}
function lm(r, e) {
  const t = [];
  for (let n = 0; n < r.length; n++) {
    const a = e(r[n]);
    a !== null && t.push(a);
  }
  return t;
}
function um(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function Ms(r) {
  if (sm) return 1;
  let e = 1;
  for (; r; ) e *= Number(window.getComputedStyle(r).getPropertyValue("zoom")), r = r.parentElement;
  return e;
}
var cm = { exports: {} };
(function(r) {
  var e = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var t = function(n) {
    var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, s = {}, o = {
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
        encode: function w(C) {
          return C instanceof l ? new l(C.type, w(C.content), C.alias) : Array.isArray(C) ? C.map(w) : C.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
        type: function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++i }), w.__id;
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
        clone: function w(C, N) {
          N = N || {};
          var k, E;
          switch (o.util.type(C)) {
            case "Object":
              if (E = o.util.objId(C), N[E])
                return N[E];
              k = /** @type {Record<string, any>} */
              {}, N[E] = k;
              for (var I in C)
                C.hasOwnProperty(I) && (k[I] = w(C[I], N));
              return (
                /** @type {any} */
                k
              );
            case "Array":
              return E = o.util.objId(C), N[E] ? N[E] : (k = [], N[E] = k, /** @type {Array} */
              /** @type {any} */
              C.forEach(function(D, M) {
                k[M] = w(D, N);
              }), /** @type {any} */
              k);
            default:
              return C;
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
        getLanguage: function(w) {
          for (; w; ) {
            var C = a.exec(w.className);
            if (C)
              return C[1].toLowerCase();
            w = w.parentElement;
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
        setLanguage: function(w, C) {
          w.className = w.className.replace(RegExp(a, "gi"), ""), w.classList.add("language-" + C);
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
          } catch (k) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack) || [])[1];
            if (w) {
              var C = document.getElementsByTagName("script");
              for (var N in C)
                if (C[N].src == w)
                  return C[N];
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
        isActive: function(w, C, N) {
          for (var k = "no-" + C; w; ) {
            var E = w.classList;
            if (E.contains(C))
              return !0;
            if (E.contains(k))
              return !1;
            w = w.parentElement;
          }
          return !!N;
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
        plain: s,
        plaintext: s,
        text: s,
        txt: s,
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
        extend: function(w, C) {
          var N = o.util.clone(o.languages[w]);
          for (var k in C)
            N[k] = C[k];
          return N;
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
        insertBefore: function(w, C, N, k) {
          k = k || /** @type {any} */
          o.languages;
          var E = k[w], I = {};
          for (var D in E)
            if (E.hasOwnProperty(D)) {
              if (D == C)
                for (var M in N)
                  N.hasOwnProperty(M) && (I[M] = N[M]);
              N.hasOwnProperty(D) || (I[D] = E[D]);
            }
          var F = k[w];
          return k[w] = I, o.languages.DFS(o.languages, function(z, $) {
            $ === F && z != w && (this[z] = I);
          }), I;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(C, N, k, E) {
          E = E || {};
          var I = o.util.objId;
          for (var D in C)
            if (C.hasOwnProperty(D)) {
              N.call(C, D, C[D], k || D);
              var M = C[D], F = o.util.type(M);
              F === "Object" && !E[I(M)] ? (E[I(M)] = !0, w(M, N, null, E)) : F === "Array" && !E[I(M)] && (E[I(M)] = !0, w(M, N, D, E));
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
      highlightAll: function(w, C) {
        o.highlightAllUnder(document, w, C);
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
      highlightAllUnder: function(w, C, N) {
        var k = {
          callback: N,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", k), k.elements = Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)), o.hooks.run("before-all-elements-highlight", k);
        for (var E = 0, I; I = k.elements[E++]; )
          o.highlightElement(I, C === !0, k.callback);
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
      highlightElement: function(w, C, N) {
        var k = o.util.getLanguage(w), E = o.languages[k];
        o.util.setLanguage(w, k);
        var I = w.parentElement;
        I && I.nodeName.toLowerCase() === "pre" && o.util.setLanguage(I, k);
        var D = w.textContent, M = {
          element: w,
          language: k,
          grammar: E,
          code: D
        };
        function F($) {
          M.highlightedCode = $, o.hooks.run("before-insert", M), M.element.innerHTML = M.highlightedCode, o.hooks.run("after-highlight", M), o.hooks.run("complete", M), N && N.call(M.element);
        }
        if (o.hooks.run("before-sanity-check", M), I = M.element.parentElement, I && I.nodeName.toLowerCase() === "pre" && !I.hasAttribute("tabindex") && I.setAttribute("tabindex", "0"), !M.code) {
          o.hooks.run("complete", M), N && N.call(M.element);
          return;
        }
        if (o.hooks.run("before-highlight", M), !M.grammar) {
          F(o.util.encode(M.code));
          return;
        }
        if (C && n.Worker) {
          var z = new Worker(o.filename);
          z.onmessage = function($) {
            F($.data);
          }, z.postMessage(JSON.stringify({
            language: M.language,
            code: M.code,
            immediateClose: !0
          }));
        } else
          F(o.highlight(M.code, M.grammar, M.language));
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
      highlight: function(w, C, N) {
        var k = {
          code: w,
          grammar: C,
          language: N
        };
        if (o.hooks.run("before-tokenize", k), !k.grammar)
          throw new Error('The language "' + k.language + '" has no grammar.');
        return k.tokens = o.tokenize(k.code, k.grammar), o.hooks.run("after-tokenize", k), l.stringify(o.util.encode(k.tokens), k.language);
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
      tokenize: function(w, C) {
        var N = C.rest;
        if (N) {
          for (var k in N)
            C[k] = N[k];
          delete C.rest;
        }
        var E = new d();
        return m(E, E.head, w), u(w, E, C, E.head, 0), v(E);
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
        add: function(w, C) {
          var N = o.hooks.all;
          N[w] = N[w] || [], N[w].push(C);
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
        run: function(w, C) {
          var N = o.hooks.all[w];
          if (!(!N || !N.length))
            for (var k = 0, E; E = N[k++]; )
              E(C);
        }
      },
      Token: l
    };
    n.Prism = o;
    function l(w, C, N, k) {
      this.type = w, this.content = C, this.alias = N, this.length = (k || "").length | 0;
    }
    l.stringify = function w(C, N) {
      if (typeof C == "string")
        return C;
      if (Array.isArray(C)) {
        var k = "";
        return C.forEach(function(F) {
          k += w(F, N);
        }), k;
      }
      var E = {
        type: C.type,
        content: w(C.content, N),
        tag: "span",
        classes: ["token", C.type],
        attributes: {},
        language: N
      }, I = C.alias;
      I && (Array.isArray(I) ? Array.prototype.push.apply(E.classes, I) : E.classes.push(I)), o.hooks.run("wrap", E);
      var D = "";
      for (var M in E.attributes)
        D += " " + M + '="' + (E.attributes[M] || "").replace(/"/g, "&quot;") + '"';
      return "<" + E.tag + ' class="' + E.classes.join(" ") + '"' + D + ">" + E.content + "</" + E.tag + ">";
    };
    function c(w, C, N, k) {
      w.lastIndex = C;
      var E = w.exec(N);
      if (E && k && E[1]) {
        var I = E[1].length;
        E.index += I, E[0] = E[0].slice(I);
      }
      return E;
    }
    function u(w, C, N, k, E, I) {
      for (var D in N)
        if (!(!N.hasOwnProperty(D) || !N[D])) {
          var M = N[D];
          M = Array.isArray(M) ? M : [M];
          for (var F = 0; F < M.length; ++F) {
            if (I && I.cause == D + "," + F)
              return;
            var z = M[F], $ = z.inside, P = !!z.lookbehind, X = !!z.greedy, Y = z.alias;
            if (X && !z.pattern.global) {
              var re = z.pattern.toString().match(/[imsuy]*$/)[0];
              z.pattern = RegExp(z.pattern.source, re + "g");
            }
            for (var de = z.pattern || z, J = k.next, he = E; J !== C.tail && !(I && he >= I.reach); he += J.value.length, J = J.next) {
              var le = J.value;
              if (C.length > w.length)
                return;
              if (!(le instanceof l)) {
                var Ee = 1, oe;
                if (X) {
                  if (oe = c(de, he, w, P), !oe || oe.index >= w.length)
                    break;
                  var dt = oe.index, Pe = oe.index + oe[0].length, Be = he;
                  for (Be += J.value.length; dt >= Be; )
                    J = J.next, Be += J.value.length;
                  if (Be -= J.value.length, he = Be, J.value instanceof l)
                    continue;
                  for (var je = J; je !== C.tail && (Be < Pe || typeof je.value == "string"); je = je.next)
                    Ee++, Be += je.value.length;
                  Ee--, le = w.slice(he, Be), oe.index -= he;
                } else if (oe = c(de, 0, le, P), !oe)
                  continue;
                var dt = oe.index, Je = oe[0], Ge = le.slice(0, dt), Rt = le.slice(dt + Je.length), _t = he + le.length;
                I && _t > I.reach && (I.reach = _t);
                var Qt = J.prev;
                Ge && (Qt = m(C, Qt, Ge), he += Ge.length), g(C, Qt, Ee);
                var ee = new l(D, $ ? o.tokenize(Je, $) : Je, Y, Je);
                if (J = m(C, Qt, ee), Rt && m(C, J, Rt), Ee > 1) {
                  var we = {
                    cause: D + "," + F,
                    reach: _t
                  };
                  u(w, C, N, J.prev, he, we), I && we.reach > I.reach && (I.reach = we.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var w = { value: null, prev: null, next: null }, C = { value: null, prev: w, next: null };
      w.next = C, this.head = w, this.tail = C, this.length = 0;
    }
    function m(w, C, N) {
      var k = C.next, E = { value: N, prev: C, next: k };
      return C.next = E, k.prev = E, w.length++, E;
    }
    function g(w, C, N) {
      for (var k = C.next, E = 0; E < N && k !== w.tail; E++)
        k = k.next;
      C.next = k, k.prev = C, w.length -= E;
    }
    function v(w) {
      for (var C = [], N = w.head.next; N !== w.tail; )
        C.push(N.value), N = N.next;
      return C;
    }
    if (!n.document)
      return n.addEventListener && (o.disableWorkerMessageHandler || n.addEventListener("message", function(w) {
        var C = JSON.parse(w.data), N = C.language, k = C.code, E = C.immediateClose;
        n.postMessage(o.highlight(k, o.languages[N], N)), E && n.close();
      }, !1)), o;
    var b = o.util.currentScript();
    b && (o.filename = b.src, b.hasAttribute("data-manual") && (o.manual = !0));
    function x() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var S = document.readyState;
      S === "loading" || S === "interactive" && b && b.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
    }
    return o;
  }(e);
  r.exports && (r.exports = t), typeof Y0 < "u" && (Y0.Prism = t), t.languages.markup = {
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
  }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(n) {
    n.type === "entity" && (n.attributes.title = n.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
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
    value: function(a, i) {
      var s = {};
      s["language-" + i] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: t.languages[i]
      }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var o = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s
        }
      };
      o["language-" + i] = {
        pattern: /[\s\S]+/,
        inside: t.languages[i]
      };
      var l = {};
      l[a] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: o
      }, t.languages.insertBefore("markup", "cdata", l);
    }
  }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
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
    value: function(n, a) {
      t.languages.markup.tag.inside["special-attr"].push({
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
                alias: [a, "language-" + a],
                inside: t.languages[a]
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
  }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, function(n) {
    var a = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + a.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
        pattern: RegExp("\\burl\\((?:" + a.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + a.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + a.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: a,
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
    var i = n.languages.markup;
    i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
  }(t), t.languages.clike = {
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
  }, t.languages.javascript = t.languages.extend("clike", {
    "class-name": [
      t.languages.clike["class-name"],
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
  }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
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
          inside: t.languages.regex
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
        inside: t.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: t.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: t.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), t.languages.insertBefore("javascript", "string", {
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
            rest: t.languages.javascript
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
  }), t.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), t.languages.js = t.languages.javascript, function() {
    if (typeof t > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var n = "Loading…", a = function(b, x) {
      return "✖ Error " + b + " while fetching file: " + x;
    }, i = "✖ Error: File does not exist or is empty", s = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, o = "data-src-status", l = "loading", c = "loaded", u = "failed", d = "pre[data-src]:not([" + o + '="' + c + '"]):not([' + o + '="' + l + '"])';
    function m(b, x, S) {
      var w = new XMLHttpRequest();
      w.open("GET", b, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? x(w.responseText) : w.status >= 400 ? S(a(w.status, w.statusText)) : S(i));
      }, w.send(null);
    }
    function g(b) {
      var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b || "");
      if (x) {
        var S = Number(x[1]), w = x[2], C = x[3];
        return w ? C ? [S, Number(C)] : [S, void 0] : [S, S];
      }
    }
    t.hooks.add("before-highlightall", function(b) {
      b.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(b) {
      var x = (
        /** @type {HTMLPreElement} */
        b.element
      );
      if (x.matches(d)) {
        b.code = "", x.setAttribute(o, l);
        var S = x.appendChild(document.createElement("CODE"));
        S.textContent = n;
        var w = x.getAttribute("data-src"), C = b.language;
        if (C === "none") {
          var N = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          C = s[N] || N;
        }
        t.util.setLanguage(S, C), t.util.setLanguage(x, C);
        var k = t.plugins.autoloader;
        k && k.loadLanguages(C), m(
          w,
          function(E) {
            x.setAttribute(o, c);
            var I = g(x.getAttribute("data-range"));
            if (I) {
              var D = E.split(/\r\n?|\n/g), M = I[0], F = I[1] == null ? D.length : I[1];
              M < 0 && (M += D.length), M = Math.max(0, Math.min(M - 1, D.length)), F < 0 && (F += D.length), F = Math.max(0, Math.min(F, D.length)), E = D.slice(M, F).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(M + 1));
            }
            S.textContent = E, t.highlightElement(S);
          },
          function(E) {
            x.setAttribute(o, u), S.textContent = E;
          }
        );
      }
    }), t.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(x) {
        for (var S = (x || document).querySelectorAll(d), w = 0, C; C = S[w++]; )
          t.highlightElement(C);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(cm);
Prism.languages.clike = {
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
};
Prism.languages.javascript = Prism.languages.extend("clike", {
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
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
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
});
Prism.languages.insertBefore("javascript", "string", {
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
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
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
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(r) {
  r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
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
  value: function(e, t) {
    var n = {};
    n["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var a = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: n
      }
    };
    a["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var i = {};
    i[e] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return e;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: a
    }, Prism.languages.insertBefore("markup", "cdata", i);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
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
  value: function(r, e) {
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
              alias: [e, "language-" + e],
              inside: Prism.languages[e]
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
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(r) {
  var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(u) {
    return u = u.replace(/<inner>/g, function() {
      return e;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
  }
  var n = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return n;
  }), i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
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
      pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
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
          pattern: RegExp("^(" + a + ")" + i + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + a + "$"),
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
      pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
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
      pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
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
      pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
      pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
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
  }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(d) {
      u !== d && (r.languages.markdown[u].inside.content.inside[d] = r.languages.markdown[d]);
    });
  }), r.hooks.add("after-tokenize", function(u) {
    if (u.language !== "markdown" && u.language !== "md")
      return;
    function d(m) {
      if (!(!m || typeof m == "string"))
        for (var g = 0, v = m.length; g < v; g++) {
          var b = m[g];
          if (b.type !== "code") {
            d(b.content);
            continue;
          }
          var x = b.content[1], S = b.content[3];
          if (x && S && x.type === "code-language" && S.type === "code-block" && typeof x.content == "string") {
            var w = x.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            w = (/[a-z][\w-]*/i.exec(w) || [""])[0].toLowerCase();
            var C = "language-" + w;
            S.alias ? typeof S.alias == "string" ? S.alias = [S.alias, C] : S.alias.push(C) : S.alias = [C];
          }
        }
    }
    d(u.tokens);
  }), r.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var d = "", m = 0, g = u.classes.length; m < g; m++) {
        var v = u.classes[m], b = /language-(.+)/.exec(v);
        if (b) {
          d = b[1];
          break;
        }
      }
      var x = r.languages[d];
      if (x)
        u.content = r.highlight(c(u.content), x, d);
      else if (d && d !== "none" && r.plugins.autoloader) {
        var S = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        u.attributes.id = S, r.plugins.autoloader.loadLanguages(d, function() {
          var w = document.getElementById(S);
          w && (w.innerHTML = r.highlight(w.textContent, r.languages[d], d));
        });
      }
    }
  });
  var s = RegExp(r.languages.markup.tag.pattern.source, "gi"), o = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, l = String.fromCodePoint || String.fromCharCode;
  function c(u) {
    var d = u.replace(s, "");
    return d = d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, g) {
      if (g = g.toLowerCase(), g[0] === "#") {
        var v;
        return g[1] === "x" ? v = parseInt(g.slice(2), 16) : v = Number(g.slice(1)), l(v);
      } else {
        var b = o[g];
        return b || m;
      }
    }), d;
  }
  r.languages.md = r.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
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
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
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
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(r) {
  var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  r.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + e.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
      pattern: RegExp("\\burl\\((?:" + e.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: e,
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
  var t = r.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
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
};
(function(r) {
  var e = r.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  e.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: e
    },
    boolean: e.boolean,
    variable: e.variable
  };
})(Prism);
Prism.languages.python = {
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
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(r) {
  for (var e = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    e = e.replace(/<self>/g, function() {
      return e;
    });
  e = e.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), r.languages.rust = {
    comment: [
      {
        pattern: RegExp(/(^|[^\\])/.source + e),
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
})(Prism);
Prism.languages.swift = {
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
};
Prism.languages.swift["string-literal"].forEach(function(r) {
  r.inside.interpolation.inside = Prism.languages.swift;
});
(function(r) {
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
  var e = r.languages.extend("typescript", {});
  delete e["class-name"], r.languages.typescript["class-name"].inside = e, r.languages.insertBefore("typescript", "function", {
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
          inside: e
        }
      }
    }
  }), r.languages.ts = r.languages.typescript;
})(Prism);
(function(r) {
  var e = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, n = {
    pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
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
        pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
        lookbehind: !0,
        inside: n.inside
      },
      {
        // class names based on keyword
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
        lookbehind: !0,
        inside: n.inside
      }
    ],
    keyword: e,
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
        keyword: e,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    },
    import: [
      {
        pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
        lookbehind: !0,
        inside: {
          namespace: n.inside.namespace,
          punctuation: /\./,
          operator: /\*/,
          "class-name": /\w+/
        }
      },
      {
        pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
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
          return e.source;
        })
      ),
      lookbehind: !0,
      inside: {
        punctuation: /\./
      }
    }
  });
})(Prism);
(function(r) {
  var e = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return e.source;
  });
  r.languages.cpp = r.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return e.source;
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
    keyword: e,
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
          return t;
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
})(Prism);
function dm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
dm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const hm = globalThis.Prism || window.Prism, rl = (r) => {
  try {
    return !!r && hm.languages.hasOwnProperty(r);
  } catch {
    return !1;
  }
};
function Dc(r, e) {
  for (const t of r.childNodes) {
    if (Cr(t) && t.tagName === e) return !0;
    Dc(t, e);
  }
  return !1;
}
const ra = "data-language", ja = "data-highlight-language";
let xo = class Rc extends St {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new Rc(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e, this.__isSyntaxHighlightSupported = rl(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    et(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(ra, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(ja, n)), t;
  }
  updateDOM(e, t, n) {
    const a = this.__language, i = e.__language;
    return a ? a !== i && (t.setAttribute(ra, a), this.__isSyntaxHighlightSupported && t.setAttribute(ja, a)) : i && (t.removeAttribute(ra), e.__isSyntaxHighlightSupported && t.removeAttribute(ja)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    et(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(ra, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(ja, n)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || Dc(e, "BR")) ? { conversion: nl, priority: 1 } : null, div: () => ({ conversion: fm, priority: 1 }), pre: () => ({ conversion: nl, priority: 0 }), table: (e) => Wi(e) ? { conversion: pm, priority: 3 } : null, td: (e) => {
      const t = e, n = t.closest("table");
      return t.classList.contains("js-file-line") || n && Wi(n) ? { conversion: al, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && Wi(t) ? { conversion: al, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    const t = rn(e.language);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage(), type: "code", version: 1 };
  }
  insertNewAfter(e, t = !0) {
    const n = this.getChildren(), a = n.length;
    if (a >= 2 && n[a - 1].getTextContent() === `
` && n[a - 2].getTextContent() === `
` && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === a) {
      n[a - 1].remove(), n[a - 2].remove();
      const l = xe();
      return this.insertAfter(l, t), l;
    }
    const { anchor: i, focus: s } = e, o = (i.isBefore(s) ? i : s).getNode();
    if (Se(o)) {
      let l = gm(o);
      const c = [];
      for (; ; ) if (lc(l)) c.push(mo()), l = l.getNextSibling();
      else {
        if (!wo(l)) break;
        {
          let x = 0;
          const S = l.getTextContent(), w = l.getTextContentSize();
          for (; x < w && S[x] === " "; ) x++;
          if (x !== 0 && c.push(Lc(" ".repeat(x))), x !== w) break;
          l = l.getNextSibling();
        }
      }
      const u = o.splitText(i.offset)[0], d = i.offset === 0 ? 0 : 1, m = u.getIndexWithinParent() + d, g = o.getParentOrThrow(), v = [oi(), ...c];
      g.splice(m, 0, v);
      const b = c[c.length - 1];
      b ? b.select() : i.offset === 0 ? u.selectPrevious() : u.getNextSibling().selectNext(0, 0);
    }
    if (mm(o)) {
      const { offset: l } = e.anchor;
      o.splice(l, 0, [oi()]), o.select(l + 1, l + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const e = xe();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  setLanguage(e) {
    const t = this.getWritable();
    t.__language = e, t.__isSyntaxHighlightSupported = rl(e);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
};
function rn(r) {
  return ut(new xo(r));
}
function mm(r) {
  return r instanceof xo;
}
function nl(r) {
  return { node: rn(r.getAttribute(ra)) };
}
function fm(r) {
  const e = r, t = il(e);
  return t || function(n) {
    let a = n.parentElement;
    for (; a !== null; ) {
      if (il(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  }(e) ? { node: t ? rn() : null } : { node: null };
}
function pm() {
  return { node: rn() };
}
function al() {
  return { node: null };
}
function il(r) {
  return r.style.fontFamily.match("monospace") !== null;
}
function Wi(r) {
  return r.classList.contains("js-file-line-container");
}
let Ic = class Fc extends $r {
  constructor(e, t, n) {
    super(e, n), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new Fc(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    const t = super.createDOM(e), n = Gi(e.theme, this.__highlightType);
    return et(t, n), t;
  }
  updateDOM(e, t, n) {
    const a = super.updateDOM(e, t, n), i = Gi(n.theme, e.__highlightType), s = Gi(n.theme, this.__highlightType);
    return i !== s && (i && pn(t, i), s && et(t, s)), a;
  }
  static importJSON(e) {
    const t = Lc(e.text, e.highlightType);
    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType(), type: "code-highlight", version: 1 };
  }
  setFormat(e) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return rn();
  }
};
function Gi(r, e) {
  return e && r && r.codeHighlight && r.codeHighlight[e];
}
function Lc(r, e) {
  return ut(new Ic(r, e));
}
function wo(r) {
  return r instanceof Ic;
}
function gm(r) {
  let e = r, t = r;
  for (; wo(t) || lc(t); ) e = t, t = t.getPreviousSibling();
  return e;
}
let zc = class Pc extends $r {
  static getType() {
    return "hashtag";
  }
  static clone(e) {
    return new Pc(e.__text, e.__key);
  }
  constructor(e, t) {
    super(e, t);
  }
  createDOM(e) {
    const t = super.createDOM(e);
    return et(t, e.theme.hashtag), t;
  }
  static importJSON(e) {
    const t = vm(e.text);
    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t;
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
};
function vm(r = "") {
  return ut(new zc(r));
}
const bm = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
let Fn = class Bc extends St {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new Bc(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  constructor(e, t = {}, n) {
    super(n);
    const { target: a = null, rel: i = null, title: s = null } = t;
    this.__url = e, this.__target = a, this.__rel = i, this.__title = s;
  }
  createDOM(e) {
    const t = document.createElement("a");
    return t.href = this.sanitizeUrl(this.__url), this.__target !== null && (t.target = this.__target), this.__rel !== null && (t.rel = this.__rel), this.__title !== null && (t.title = this.__title), et(t, e.theme.link), t;
  }
  updateDOM(e, t, n) {
    if (t instanceof HTMLAnchorElement) {
      const a = this.__url, i = this.__target, s = this.__rel, o = this.__title;
      a !== e.__url && (t.href = a), i !== e.__target && (i ? t.target = i : t.removeAttribute("target")), s !== e.__rel && (s ? t.rel = s : t.removeAttribute("rel")), o !== e.__title && (o ? t.title = o : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return { a: (e) => ({ conversion: ym, priority: 1 }) };
  }
  static importJSON(e) {
    const t = ha(e.url, { rel: e.rel, target: e.target, title: e.title });
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!bm.has(t.protocol)) return "about:blank";
    } catch {
      return e;
    }
    return e;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), type: "link", url: this.getURL(), version: 1 };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(e) {
    this.getWritable().__url = e;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(e) {
    this.getWritable().__target = e;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(e) {
    this.getWritable().__rel = e;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(e) {
    this.getWritable().__title = e;
  }
  insertNewAfter(e, t = !0) {
    const n = ha(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(n, t), n;
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
  extractWithChild(e, t, n) {
    if (!U(t)) return !1;
    const a = t.anchor.getNode(), i = t.focus.getNode();
    return this.isParentOf(a) && this.isParentOf(i) && t.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
};
function ym(r) {
  let e = null;
  if (b1(r)) {
    const t = r.textContent;
    (t !== null && t !== "" || r.children.length > 0) && (e = ha(r.getAttribute("href") || "", { rel: r.getAttribute("rel"), target: r.getAttribute("target"), title: r.getAttribute("title") }));
  }
  return { node: e };
}
function ha(r, e) {
  return ut(new Fn(r, e));
}
function lt(r) {
  return r instanceof Fn;
}
let ka = class jc extends Fn {
  constructor(e, t = {}, n) {
    super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new jc(e.__url, { isUnlinked: e.__isUnlinked, rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  getIsUnlinked() {
    return this.__isUnlinked;
  }
  setIsUnlinked(e) {
    const t = this.getWritable();
    return t.__isUnlinked = e, t;
  }
  createDOM(e) {
    return this.__isUnlinked ? document.createElement("span") : super.createDOM(e);
  }
  updateDOM(e, t, n) {
    return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
  }
  static importJSON(e) {
    const t = Os(e.url, { isUnlinked: e.isUnlinked, rel: e.rel, target: e.target, title: e.title });
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  static importDOM() {
    return null;
  }
  exportJSON() {
    return { ...super.exportJSON(), isUnlinked: this.__isUnlinked, type: "autolink", version: 1 };
  }
  insertNewAfter(e, t = !0) {
    const n = this.getParentOrThrow().insertNewAfter(e, t);
    if (ue(n)) {
      const a = Os(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return n.append(a), a;
    }
    return null;
  }
};
function Os(r, e) {
  return ut(new ka(r, e));
}
function vr(r) {
  return r instanceof ka;
}
const ir = Ue("TOGGLE_LINK_COMMAND");
function Yi(r, e = {}) {
  const { target: t, title: n } = e, a = e.rel === void 0 ? "noreferrer" : e.rel, i = j();
  if (!U(i)) return;
  const s = i.extract();
  if (r === null) s.forEach((o) => {
    const l = me(o, (c) => !vr(c) && lt(c));
    if (l) {
      const c = l.getChildren();
      for (let u = 0; u < c.length; u++) l.insertBefore(c[u]);
      l.remove();
    }
  });
  else {
    if (s.length === 1) {
      const c = function(u, d) {
        let m = u;
        for (; m !== null && m.getParent() !== null && !d(m); ) m = m.getParentOrThrow();
        return d(m) ? m : null;
      }(s[0], lt);
      if (c !== null) return c.setURL(r), t !== void 0 && c.setTarget(t), a !== null && c.setRel(a), void (n !== void 0 && c.setTitle(n));
    }
    let o = null, l = null;
    s.forEach((c) => {
      const u = c.getParent();
      if (u !== l && u !== null && (!ue(c) || c.isInline())) {
        if (lt(u)) return l = u, u.setURL(r), t !== void 0 && u.setTarget(t), a !== null && l.setRel(a), void (n !== void 0 && l.setTitle(n));
        if (u.is(o) || (o = u, l = ha(r, { rel: a, target: t, title: n }), lt(u) ? c.getPreviousSibling() === null ? u.insertBefore(l) : u.insertAfter(l) : c.insertBefore(l)), lt(c)) {
          if (c.is(l)) return;
          if (l !== null) {
            const d = c.getChildren();
            for (let m = 0; m < d.length; m++) l.append(d[m]);
          }
          c.remove();
        } else l !== null && l.append(c);
      }
    });
  }
}
function xm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rr = xm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function Ds(r) {
  let e = 1, t = r.getParent();
  for (; t != null; ) {
    if (Fe(t)) {
      const n = t.getParent();
      if (ke(n)) {
        e++, t = n.getParent();
        continue;
      }
      rr(40);
    }
    return e;
  }
  return e;
}
function Rs(r) {
  let e = r.getParent();
  ke(e) || rr(40);
  let t = e;
  for (; t !== null; ) t = t.getParent(), ke(t) && (e = t);
  return e;
}
function $c(r) {
  let e = [];
  const t = r.getChildren().filter(Fe);
  for (let n = 0; n < t.length; n++) {
    const a = t[n], i = a.getFirstChild();
    ke(i) ? e = e.concat($c(i)) : e.push(a);
  }
  return e;
}
function nr(r) {
  return Fe(r) && ke(r.getFirstChild());
}
function sl(r) {
  return Pt().append(r);
}
function Hc(r, e) {
  return Fe(r) && (e.length === 0 || e.length === 1 && r.is(e[0]) && r.getChildrenSize() === 0);
}
function Is(r, e) {
  r.update(() => {
    const t = j();
    if (t !== null) {
      const n = t.getNodes();
      if (U(t)) {
        const i = t.getStartEndPoints();
        i === null && rr(143);
        const [s] = i, o = s.getNode(), l = o.getParent();
        if (Hc(o, n)) {
          const c = Ot(e);
          if (zt(l)) {
            o.replace(c);
            const u = Pt();
            ue(o) && (u.setFormat(o.getFormatType()), u.setIndent(o.getIndent())), c.append(u);
          } else if (Fe(o)) {
            const u = o.getParentOrThrow();
            nn(c, u.getChildren()), u.replace(c);
          }
          return;
        }
      }
      const a = /* @__PURE__ */ new Set();
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (!ue(s) || !s.isEmpty() || Fe(s) || a.has(s.getKey())) {
          if (uc(s)) {
            let o = s.getParent();
            for (; o != null; ) {
              const l = o.getKey();
              if (ke(o)) {
                if (!a.has(l)) {
                  const c = Ot(e);
                  nn(c, o.getChildren()), o.replace(c), a.add(l);
                }
                break;
              }
              {
                const c = o.getParent();
                if (zt(c) && !a.has(l)) {
                  a.add(l), ol(o, e);
                  break;
                }
                o = c;
              }
            }
          }
        } else ol(s, e);
      }
    }
  });
}
function nn(r, e) {
  r.splice(r.getChildrenSize(), 0, e);
}
function ol(r, e) {
  if (ke(r)) return r;
  const t = r.getPreviousSibling(), n = r.getNextSibling(), a = Pt();
  let i;
  if (nn(a, r.getChildren()), ke(t) && e === t.getListType()) t.append(a), ke(n) && e === n.getListType() && (nn(t, n.getChildren()), n.remove()), i = t;
  else if (ke(n) && e === n.getListType()) n.getFirstChildOrThrow().insertBefore(a), i = n;
  else {
    const s = Ot(e);
    s.append(a), r.replace(s), i = s;
  }
  return a.setFormat(r.getFormatType()), a.setIndent(r.getIndent()), r.remove(), i;
}
function So(r, e) {
  const t = r.getLastChild(), n = e.getFirstChild();
  t && n && nr(t) && nr(n) && (So(t.getFirstChild(), n.getFirstChild()), n.remove());
  const a = e.getChildren();
  a.length > 0 && r.append(...a), e.remove();
}
function wm(r) {
  r.update(() => {
    const e = j();
    if (U(e)) {
      const t = /* @__PURE__ */ new Set(), n = e.getNodes(), a = e.anchor.getNode();
      if (Hc(a, n)) t.add(Rs(a));
      else for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (uc(s)) {
          const o = Oc(s, Ea);
          o != null && t.add(Rs(o));
        }
      }
      for (const i of t) {
        let s = i;
        const o = $c(i);
        for (const l of o) {
          const c = xe();
          nn(c, l.getChildren()), s.insertAfter(c), s = c, l.__key === e.anchor.key && e.anchor.set(c.getKey(), 0, "element"), l.__key === e.focus.key && e.focus.set(c.getKey(), 0, "element"), l.remove();
        }
        i.remove();
      }
    }
  });
}
function Sm(r) {
  const e = /* @__PURE__ */ new Set();
  if (nr(r) || e.has(r.getKey())) return;
  const t = r.getParent(), n = r.getNextSibling(), a = r.getPreviousSibling();
  if (nr(n) && nr(a)) {
    const i = a.getFirstChild();
    if (ke(i)) {
      i.append(r);
      const s = n.getFirstChild();
      ke(s) && (nn(i, s.getChildren()), n.remove(), e.add(n.getKey()));
    }
  } else if (nr(n)) {
    const i = n.getFirstChild();
    if (ke(i)) {
      const s = i.getFirstChild();
      s !== null && s.insertBefore(r);
    }
  } else if (nr(a)) {
    const i = a.getFirstChild();
    ke(i) && i.append(r);
  } else if (ke(t)) {
    const i = Pt(), s = Ot(t.getListType());
    i.append(s), s.append(r), a ? a.insertAfter(i) : n ? n.insertBefore(i) : t.append(i);
  }
}
function _m(r) {
  if (nr(r)) return;
  const e = r.getParent(), t = e ? e.getParent() : void 0;
  if (ke(t ? t.getParent() : void 0) && Fe(t) && ke(e)) {
    const n = e ? e.getFirstChild() : void 0, a = e ? e.getLastChild() : void 0;
    if (r.is(n)) t.insertBefore(r), e.isEmpty() && t.remove();
    else if (r.is(a)) t.insertAfter(r), e.isEmpty() && t.remove();
    else {
      const i = e.getListType(), s = Pt(), o = Ot(i);
      s.append(o), r.getPreviousSiblings().forEach((u) => o.append(u));
      const l = Pt(), c = Ot(i);
      l.append(c), nn(c, r.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(r);
    }
  }
}
function Cm() {
  const r = j();
  if (!U(r) || !r.isCollapsed()) return !1;
  const e = r.anchor.getNode();
  if (!Fe(e) || e.getChildrenSize() !== 0) return !1;
  const t = Rs(e), n = e.getParent();
  ke(n) || rr(40);
  const a = n.getParent();
  let i;
  if (zt(a)) i = xe(), t.insertAfter(i);
  else {
    if (!Fe(a)) return !1;
    i = Pt(), a.insertAfter(i);
  }
  i.select();
  const s = e.getNextSiblings();
  if (s.length > 0) {
    const o = Ot(n.getListType());
    if (Hr(i)) i.insertAfter(o);
    else {
      const l = Pt();
      l.append(o), i.insertAfter(l);
    }
    s.forEach((l) => {
      l.remove(), o.append(l);
    });
  }
  return function(o) {
    let l = o;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const c = l.getParent();
      if (c == null || !Fe(l) && !ke(l)) break;
      l = c;
    }
    l.remove();
  }(e), !0;
}
function di(...r) {
  const e = [];
  for (const t of r) if (t && typeof t == "string") for (const [n] of t.matchAll(/\S+/g)) e.push(n);
  return e;
}
let Ea = class qc extends St {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new qc(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, n) {
    super(n), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), n = this.getParent();
    return ke(n) && n.getListType() === "check" && ul(t, this, null), t.value = this.__value, ll(t, e.theme, this), t;
  }
  updateDOM(e, t, n) {
    const a = this.getParent();
    return ke(a) && a.getListType() === "check" && ul(t, this, e), t.value = this.__value, ll(t, n.theme, this), !1;
  }
  static transform() {
    return (e) => {
      if (Fe(e) || rr(144), e.__checked == null) return;
      const t = e.getParent();
      ke(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: km, priority: 0 }) };
  }
  static importJSON(e) {
    const t = Pt();
    return t.setChecked(e.checked), t.setValue(e.value), t.setFormat(e.format), t.setDirection(e.direction), t;
  }
  exportDOM(e) {
    const t = this.createDOM(e._config);
    return t.style.textAlign = this.getFormatType(), { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), type: "listitem", value: this.getValue(), version: 1 };
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      if (ue(n) && this.canMergeWith(n)) {
        const a = n.getChildren();
        this.append(...a), n.remove();
      } else super.append(n);
    }
    return this;
  }
  replace(e, t) {
    if (Fe(e)) return super.replace(e);
    this.setIndent(0);
    const n = this.getParentOrThrow();
    if (!ke(n)) return e;
    if (n.__first === this.getKey()) n.insertBefore(e);
    else if (n.__last === this.getKey()) n.insertAfter(e);
    else {
      const a = Ot(n.getListType());
      let i = this.getNextSibling();
      for (; i; ) {
        const s = i;
        i = i.getNextSibling(), a.append(s);
      }
      n.insertAfter(e), e.insertAfter(a);
    }
    return t && (ue(e) || rr(139), this.getChildren().forEach((a) => {
      e.append(a);
    })), this.remove(), n.getChildrenSize() === 0 && n.remove(), e;
  }
  insertAfter(e, t = !0) {
    const n = this.getParentOrThrow();
    if (ke(n) || rr(39), Fe(e)) return super.insertAfter(e, t);
    const a = this.getNextSiblings();
    if (n.insertAfter(e, t), a.length !== 0) {
      const i = Ot(n.getListType());
      a.forEach((s) => i.append(s)), e.insertAfter(i, t);
    }
    return e;
  }
  remove(e) {
    const t = this.getPreviousSibling(), n = this.getNextSibling();
    super.remove(e), t && n && nr(t) && nr(n) && (So(t.getFirstChild(), n.getFirstChild()), n.remove());
  }
  insertNewAfter(e, t = !0) {
    const n = Pt(this.__checked == null && void 0);
    return this.insertAfter(n, t), n;
  }
  collapseAtStart(e) {
    const t = xe();
    this.getChildren().forEach((s) => t.append(s));
    const n = this.getParentOrThrow(), a = n.getParentOrThrow(), i = Fe(a);
    if (n.getChildrenSize() === 1) if (i) n.remove(), a.select();
    else {
      n.insertBefore(t), n.remove();
      const s = e.anchor, o = e.focus, l = t.getKey();
      s.type === "element" && s.getNode().is(this) && s.set(l, s.offset, "element"), o.type === "element" && o.getNode().is(this) && o.set(l, o.offset, "element");
    }
    else n.insertBefore(t), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(e) {
    this.getWritable().__value = e;
  }
  getChecked() {
    const e = this.getLatest();
    let t;
    const n = this.getParent();
    return ke(n) && (t = n.getListType()), t === "check" ? !!e.__checked : void 0;
  }
  setChecked(e) {
    this.getWritable().__checked = e;
  }
  toggleChecked() {
    this.setChecked(!this.__checked);
  }
  getIndent() {
    const e = this.getParent();
    if (e === null) return this.getLatest().__indent;
    let t = e.getParentOrThrow(), n = 0;
    for (; Fe(t); ) t = t.getParentOrThrow().getParentOrThrow(), n++;
    return n;
  }
  setIndent(e) {
    typeof e != "number" && rr(117), (e = Math.floor(e)) >= 0 || rr(199);
    let t = this.getIndent();
    for (; t !== e; ) t < e ? (Sm(this), t++) : (_m(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return Fe(e);
  }
  canReplaceWith(e) {
    return Fe(e);
  }
  canMergeWith(e) {
    return Hr(e) || Fe(e);
  }
  extractWithChild(e, t) {
    if (!U(t)) return !1;
    const n = t.anchor.getNode(), a = t.focus.getNode();
    return this.isParentOf(n) && this.isParentOf(a) && this.getTextContent().length === t.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Ot("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function ll(r, e, t) {
  const n = [], a = [], i = e.list, s = i ? i.listitem : void 0;
  let o;
  if (i && i.nested && (o = i.nested.listitem), s !== void 0 && n.push(...di(s)), i) {
    const l = t.getParent(), c = ke(l) && l.getListType() === "check", u = t.getChecked();
    c && !u || a.push(i.listitemUnchecked), c && u || a.push(i.listitemChecked), c && n.push(u ? i.listitemChecked : i.listitemUnchecked);
  }
  if (o !== void 0) {
    const l = di(o);
    t.getChildren().some((c) => ke(c)) ? n.push(...l) : a.push(...l);
  }
  a.length > 0 && pn(r, ...a), n.length > 0 && et(r, ...n);
}
function ul(r, e, t, n) {
  ke(e.getFirstChild()) ? (r.removeAttribute("role"), r.removeAttribute("tabIndex"), r.removeAttribute("aria-checked")) : (r.setAttribute("role", "checkbox"), r.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || r.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function km(r) {
  if (r.classList.contains("task-list-item")) {
    for (const t of r.children) if (t.tagName === "INPUT") return Em(t);
  }
  const e = r.getAttribute("aria-checked");
  return { node: Pt(e === "true" || e !== "false" && void 0) };
}
function Em(r) {
  return r.getAttribute("type") !== "checkbox" ? { node: null } : { node: Pt(r.hasAttribute("checked")) };
}
function Pt(r) {
  return ut(new Ea(void 0, r));
}
function Fe(r) {
  return r instanceof Ea;
}
let Ta = class Uc extends St {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || hl[e.__tag];
    return new Uc(t, e.__start, e.__key);
  }
  constructor(e, t, n) {
    super(n);
    const a = hl[e] || e;
    this.__listType = a, this.__tag = a === "number" ? "ol" : "ul", this.__start = t;
  }
  getTag() {
    return this.__tag;
  }
  setListType(e) {
    const t = this.getWritable();
    t.__listType = e, t.__tag = e === "number" ? "ol" : "ul";
  }
  getListType() {
    return this.__listType;
  }
  getStart() {
    return this.__start;
  }
  createDOM(e, t) {
    const n = this.__tag, a = document.createElement(n);
    return this.__start !== 1 && a.setAttribute("start", String(this.__start)), a.__lexicalListType = this.__listType, cl(a, e.theme, this), a;
  }
  updateDOM(e, t, n) {
    return e.__tag !== this.__tag || (cl(t, n.theme, this), !1);
  }
  static transform() {
    return (e) => {
      ke(e) || rr(163), function(t) {
        const n = t.getNextSibling();
        ke(n) && t.getListType() === n.getListType() && So(t, n);
      }(e), function(t) {
        const n = t.getListType() !== "check";
        let a = t.getStart();
        for (const i of t.getChildren()) Fe(i) && (i.getValue() !== a && i.setValue(a), n && i.getLatest().__checked != null && i.setChecked(void 0), ke(i.getFirstChild()) || a++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: dl, priority: 0 }), ul: () => ({ conversion: dl, priority: 0 }) };
  }
  static importJSON(e) {
    const t = Ot(e.listType, e.start);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportDOM(e) {
    const t = this.createDOM(e._config, e);
    return t && Cr(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
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
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      if (Fe(n)) super.append(n);
      else {
        const a = Pt();
        if (ke(n)) a.append(n);
        else if (ue(n)) {
          const i = Ir(n.getTextContent());
          a.append(i);
        } else a.append(n);
        super.append(a);
      }
    }
    return this;
  }
  extractWithChild(e) {
    return Fe(e);
  }
};
function cl(r, e, t) {
  const n = [], a = [], i = e.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], o = Ds(t) - 1, l = o % s.length, c = s[l], u = i[t.__tag];
    let d;
    const m = i.nested, g = i.checklist;
    if (m !== void 0 && m.list && (d = m.list), u !== void 0 && n.push(u), g !== void 0 && t.__listType === "check" && n.push(g), c !== void 0) {
      n.push(...di(c));
      for (let v = 0; v < s.length; v++) v !== l && a.push(t.__tag + v);
    }
    if (d !== void 0) {
      const v = di(d);
      o > 1 ? n.push(...v) : a.push(...v);
    }
  }
  a.length > 0 && pn(r, ...a), n.length > 0 && et(r, ...n);
}
function Tm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    if (Fe(n)) {
      e.push(n);
      const a = n.getChildren();
      a.length > 1 && a.forEach((i) => {
        ke(i) && e.push(sl(i));
      });
    } else e.push(sl(n));
  }
  return e;
}
function dl(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = Ot("number", r.start) : e === "ul" && (t = function(n) {
    if (n.getAttribute("__lexicallisttype") === "check" || n.classList.contains("contains-task-list")) return !0;
    for (const a of n.childNodes) if (Cr(a) && a.hasAttribute("aria-checked")) return !0;
    return !1;
  }(r) ? Ot("check") : Ot("bullet")), { after: Tm, node: t };
}
const hl = { ol: "number", ul: "bullet" };
function Ot(r, e = 1) {
  return ut(new Ta(r, e));
}
function ke(r) {
  return r instanceof Ta;
}
const _o = Ue("INSERT_UNORDERED_LIST_COMMAND"), Co = Ue("INSERT_ORDERED_LIST_COMMAND"), ko = Ue("INSERT_CHECK_LIST_COMMAND"), Nm = Ue("REMOVE_LIST_COMMAND");
function Am(r) {
  return Re(r.registerCommand(Co, () => (Is(r, "number"), !0), ye), r.registerCommand(_o, () => (Is(r, "bullet"), !0), ye), r.registerCommand(Nm, () => (wm(r), !0), ye), r.registerCommand(ca, () => !!Cm(), ye));
}
let Eo = class Kc extends St {
  static getType() {
    return "mark";
  }
  static clone(e) {
    return new Kc(Array.from(e.__ids), e.__key);
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    const t = ml(e.ids);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), ids: this.getIDs(), type: "mark", version: 1 };
  }
  constructor(e, t) {
    super(t), this.__ids = e || [];
  }
  createDOM(e) {
    const t = document.createElement("mark");
    return et(t, e.theme.mark), this.__ids.length > 1 && et(t, e.theme.markOverlap), t;
  }
  updateDOM(e, t, n) {
    const a = e.__ids, i = this.__ids, s = a.length, o = i.length, l = n.theme.markOverlap;
    return s !== o && (s === 1 ? o === 2 && et(t, l) : o === 1 && pn(t, l)), !1;
  }
  hasID(e) {
    const t = this.getIDs();
    for (let n = 0; n < t.length; n++) if (e === t[n]) return !0;
    return !1;
  }
  getIDs() {
    const e = this.getLatest();
    return Vi(e) ? e.__ids : [];
  }
  addID(e) {
    const t = this.getWritable();
    if (Vi(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return;
      n.push(e);
    }
  }
  deleteID(e) {
    const t = this.getWritable();
    if (Vi(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return void n.splice(a, 1);
    }
  }
  insertNewAfter(e, t = !0) {
    const n = ml(this.__ids);
    return this.insertAfter(n, t), n;
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
  extractWithChild(e, t, n) {
    if (!U(t) || n === "html") return !1;
    const a = t.anchor, i = t.focus, s = a.getNode(), o = i.getNode(), l = t.isBackward() ? a.offset - i.offset : i.offset - a.offset;
    return this.isParentOf(s) && this.isParentOf(o) && this.getTextContent().length === l;
  }
  excludeFromCopy(e) {
    return e !== "clone";
  }
};
function ml(r) {
  return ut(new Eo(r));
}
function Vi(r) {
  return r instanceof Eo;
}
function Mm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Om = Mm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let To = class Wc extends St {
  static getType() {
    return "overflow";
  }
  static clone(e) {
    return new Wc(e.__key);
  }
  static importJSON(e) {
    return Dm();
  }
  static importDOM() {
    return null;
  }
  constructor(e) {
    super(e), this.__type = "overflow";
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "overflow" };
  }
  createDOM(e) {
    const t = document.createElement("span"), n = e.theme.characterLimit;
    return typeof n == "string" && (t.className = n), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  insertNewAfter(e, t = !0) {
    return this.getParentOrThrow().insertNewAfter(e, t);
  }
  excludeFromCopy() {
    return !0;
  }
  static transform() {
    return (e) => {
      Rm(e) || Om(204), e.isEmpty() && e.remove();
    };
  }
};
function Dm() {
  return ut(new To());
}
function Rm(r) {
  return r instanceof To;
}
function fl(r, e) {
  return r.getEditorState().read(() => {
    const t = bt(e);
    return t !== null && t.isSelected();
  });
}
function No(r) {
  const [e] = se(), [t, n] = q(() => fl(e, r));
  return B(() => {
    let a = !0;
    const i = e.registerUpdateListener(() => {
      a && n(fl(e, r));
    });
    return () => {
      a = !1, i();
    };
  }, [e, r]), [t, ie((a) => {
    e.update(() => {
      let i = j();
      gt(i) || (i = y1(), xt(i)), gt(i) && (a ? i.add(r) : i.delete(r));
    });
  }, [e, r]), ie(() => {
    e.update(() => {
      const a = j();
      gt(a) && a.clear();
    });
  }, [e])];
}
const Ao = Ue("INSERT_HORIZONTAL_RULE_COMMAND");
function Im({ nodeKey: r }) {
  const [e] = se(), [t, n, a] = No(r), i = ie((s) => {
    const o = j();
    return t && gt(o) && (s.preventDefault(), e.update(() => {
      o.getNodes().forEach((l) => {
        Lm(l) && l.remove();
      });
    })), !1;
  }, [e, t]);
  return B(() => Re(e.registerCommand(wa, (s) => {
    const o = e.getElementByKey(r);
    return s.target === o && (s.shiftKey || a(), n(!t), !0);
  }, ye), e.registerCommand(xa, i, ye), e.registerCommand(ya, i, ye)), [a, e, t, r, i, n]), B(() => {
    const s = e.getElementByKey(r), o = "selected";
    s !== null && (t ? et(s, o) : pn(s, o));
  }, [e, t, r]), null;
}
let Mo = class Gc extends ur {
  static getType() {
    return "horizontalrule";
  }
  static clone(e) {
    return new Gc(e.__key);
  }
  static importJSON(e) {
    return Oo();
  }
  static importDOM() {
    return { hr: () => ({ conversion: Fm, priority: 0 }) };
  }
  exportJSON() {
    return { type: "horizontalrule", version: 1 };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(e) {
    const t = document.createElement("hr");
    return et(t, e.theme.hr), t;
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
    return p.jsx(Im, { nodeKey: this.__key });
  }
};
function Fm() {
  return { node: Oo() };
}
function Oo() {
  return ut(new Mo());
}
function Lm(r) {
  return r instanceof Mo;
}
function zm(r, e) {
  const t = e.body ? e.body.childNodes : [];
  let n = [];
  const a = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Xc.has(s.nodeName)) {
      const o = Jc(s, r, a, !1);
      o !== null && (n = n.concat(o));
    }
  }
  return function(i) {
    for (const s of i) s.getNextSibling() instanceof dc && s.insertAfter(oi());
    for (const s of i) {
      const o = s.getChildren();
      for (const l of o) s.insertBefore(l);
      s.remove();
    }
  }(a), n;
}
function Yc(r, e) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), n = wt().getChildren();
  for (let a = 0; a < n.length; a++)
    Vc(r, n[a], t, e);
  return t.innerHTML;
}
function Vc(r, e, t, n = null) {
  let a = n === null || e.isSelected(n);
  const i = ue(e) && e.excludeFromCopy("html");
  let s = e;
  if (n !== null) {
    let g = cc(e);
    g = Se(g) && n !== null ? Tc(n, g) : g, s = g;
  }
  const o = ue(s) ? s.getChildren() : [], l = r._nodes.get(s.getType());
  let c;
  c = l && l.exportDOM !== void 0 ? l.exportDOM(r, s) : s.exportDOM(r);
  const { element: u, after: d } = c;
  if (!u) return !1;
  const m = document.createDocumentFragment();
  for (let g = 0; g < o.length; g++) {
    const v = o[g], b = Vc(r, v, m, n);
    !a && ue(e) && b && e.extractWithChild(v, n, "html") && (a = !0);
  }
  if (a && !i) {
    if ((Cr(u) || $0(u)) && u.append(m), t.append(u), d) {
      const g = d.call(s, u);
      g && ($0(u) ? u.replaceChildren(g) : u.replaceWith(g));
    }
  } else t.append(m);
  return a;
}
const Xc = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Jc(r, e, t, n, a = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (Xc.has(r.nodeName)) return s;
  let o = null;
  const l = function(v, b) {
    const { nodeName: x } = v, S = b._htmlConversions.get(x.toLowerCase());
    let w = null;
    if (S !== void 0) for (const C of S) {
      const N = C(v);
      N !== null && (w === null || (w.priority || 0) < (N.priority || 0)) && (w = N);
    }
    return w !== null ? w.conversion : null;
  }(r, e), c = l ? l(r) : null;
  let u = null;
  if (c !== null) {
    u = c.after;
    const v = c.node;
    if (o = Array.isArray(v) ? v[v.length - 1] : v, o !== null) {
      for (const [, b] of a) if (o = b(o, i), !o) break;
      o && s.push(...Array.isArray(v) ? v : [o]);
    }
    c.forChild != null && a.set(r.nodeName, c.forChild);
  }
  const d = r.childNodes;
  let m = [];
  const g = (o == null || !zt(o)) && (o != null && li(o) || n);
  for (let v = 0; v < d.length; v++) m.push(...Jc(d[v], e, t, g, new Map(a), o));
  return u != null && (m = u(m)), H0(r) && (m = Pm(r, m, g ? () => {
    const v = new dc();
    return t.push(v), v;
  } : xe)), o == null ? m.length > 0 ? s = s.concat(m) : H0(r) && function(v) {
    return v.nextSibling == null || v.previousSibling == null ? !1 : q0(v.nextSibling) && q0(v.previousSibling);
  }(r) && (s = s.concat(oi())) : ue(o) && o.append(...m), s;
}
function Pm(r, e, t) {
  const n = r.style.textAlign, a = [];
  let i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (li(o)) n && !o.getFormat() && o.setFormat(n), a.push(o);
    else if (i.push(o), s === e.length - 1 || s < e.length - 1 && li(e[s + 1])) {
      const l = t();
      l.setFormat(n), l.append(...i), a.push(l), i = [];
    }
  }
  return a;
}
function Bm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var hi = Bm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const jm = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Zc = (r) => jm ? (r || window).getSelection() : null;
function $m(r, e = j()) {
  return e == null && hi(166), U(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : Yc(r, e);
}
function Hm(r, e = j()) {
  return e == null && hi(166), U(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(qm(r, e));
}
function y6(r, e) {
  const t = r.getData("text/plain") || r.getData("text/uri-list");
  t != null && e.insertRawText(t);
}
function pl(r, e, t) {
  const n = r.getData("application/x-lexical-editor");
  if (n) try {
    const s = JSON.parse(n);
    if (s.namespace === t._config.namespace && Array.isArray(s.nodes))
      return gl(t, Um(s.nodes), e);
  } catch {
  }
  const a = r.getData("text/html");
  if (a) try {
    const s = new DOMParser().parseFromString(function(o) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (l) => l }).createHTML(o) : o;
    }(a), "text/html");
    return gl(t, zm(t, s), e);
  } catch {
  }
  const i = r.getData("text/plain") || r.getData("text/uri-list");
  if (i != null) if (U(e)) {
    const s = i.split(/(\r?\n|\t)/);
    s[s.length - 1] === "" && s.pop();
    for (let o = 0; o < s.length; o++) {
      const l = j();
      if (U(l)) {
        const c = s[o];
        c === `
` || c === `\r
` ? l.insertParagraph() : c === "	" ? l.insertNodes([mo()]) : l.insertText(c);
      }
    }
  } else e.insertRawText(i);
}
function gl(r, e, t) {
  r.dispatchCommand(hc, { nodes: e, selection: t }) || t.insertNodes(e);
}
function Qc(r, e, t, n = []) {
  let a = e === null || t.isSelected(e);
  const i = ue(t) && t.excludeFromCopy("html");
  let s = t;
  if (e !== null) {
    let c = cc(t);
    c = Se(c) && e !== null ? Tc(e, c) : c, s = c;
  }
  const o = ue(s) ? s.getChildren() : [], l = function(c) {
    const u = c.exportJSON(), d = c.constructor;
    if (u.type !== d.getType() && hi(58, d.name), ue(c)) {
      const m = u.children;
      Array.isArray(m) || hi(59, d.name);
    }
    return u;
  }(s);
  if (Se(s)) {
    const c = s.__text;
    c.length > 0 ? l.text = c : a = !1;
  }
  for (let c = 0; c < o.length; c++) {
    const u = o[c], d = Qc(r, e, u, l.children);
    !a && ue(t) && d && t.extractWithChild(u, e, "clone") && (a = !0);
  }
  if (a && !i) n.push(l);
  else if (Array.isArray(l.children)) for (let c = 0; c < l.children.length; c++) {
    const u = l.children[c];
    n.push(u);
  }
  return a;
}
function qm(r, e) {
  const t = [], n = wt().getChildren();
  for (let a = 0; a < n.length; a++)
    Qc(r, e, n[a], t);
  return { namespace: r._config.namespace, nodes: t };
}
function Um(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t], a = x1(n);
    Se(a) && Q1(a), e.push(a);
  }
  return e;
}
let wn = null;
async function Fs(r, e, t) {
  if (wn !== null) return !1;
  if (e !== null) return new Promise((l, c) => {
    r.update(() => {
      l(vl(r, e, t));
    });
  });
  const n = r.getRootElement(), a = r._window == null ? window.document : r._window.document, i = Zc(r._window);
  if (n === null || i === null) return !1;
  const s = a.createElement("span");
  s.style.cssText = "position: fixed; top: -1000px;", s.append(a.createTextNode("#")), n.append(s);
  const o = new Range();
  return o.setStart(s, 0), o.setEnd(s, 1), i.removeAllRanges(), i.addRange(o), new Promise((l, c) => {
    const u = r.registerCommand(mc, (d) => (xr(d, ClipboardEvent) && (u(), wn !== null && (window.clearTimeout(wn), wn = null), l(vl(r, d, t))), !0), pt);
    wn = window.setTimeout(() => {
      u(), wn = null, l(!1);
    }, 50), a.execCommand("copy"), s.remove();
  });
}
function vl(r, e, t) {
  if (t === void 0) {
    const a = Zc(r._window);
    if (!a) return !1;
    const i = a.anchorNode, s = a.focusNode;
    if (i !== null && s !== null && !w1(r, i, s)) return !1;
    const o = j();
    if (o === null) return !1;
    t = ed(o);
  }
  e.preventDefault();
  const n = e.clipboardData;
  return n !== null && (Wm(n, t), !0);
}
const Km = [["text/html", $m], ["application/x-lexical-editor", Hm]];
function ed(r = j()) {
  const e = { "text/plain": r ? r.getTextContent() : "" };
  if (r) {
    const t = S1();
    for (const [n, a] of Km) {
      const i = a(t, r);
      i !== null && (e[n] = i);
    }
  }
  return e;
}
function Wm(r, e) {
  for (const t in e) {
    const n = e[t];
    n !== void 0 && r.setData(t, n);
  }
}
function bl(r, e) {
  if (document.caretRangeFromPoint !== void 0) {
    const t = document.caretRangeFromPoint(r, e);
    return t === null ? null : { node: t.startContainer, offset: t.startOffset };
  }
  if (document.caretPositionFromPoint !== "undefined") {
    const t = document.caretPositionFromPoint(r, e);
    return t === null ? null : { node: t.offsetNode, offset: t.offset };
  }
  return null;
}
const Ln = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Gm = Ln && "documentMode" in document ? document.documentMode : null, Ym = !(!Ln || !("InputEvent" in window) || Gm) && "getTargetRanges" in new window.InputEvent("input"), Vm = Ln && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Xm = Ln && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Jm = Ln && /^(?=.*Chrome).*/i.test(navigator.userAgent), Zm = Ln && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Jm, Ls = Ue("DRAG_DROP_PASTE_FILE");
class Na extends St {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new Na(e.__key);
  }
  constructor(e) {
    super(e);
  }
  createDOM(e) {
    const t = document.createElement("blockquote");
    return et(t, e.theme.quote), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (e) => ({ conversion: ef, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (t && Cr(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const n = this.getFormatType();
      t.style.textAlign = n;
      const a = this.getDirection();
      a && (t.dir = a);
    }
    return { element: t };
  }
  static importJSON(e) {
    const t = Ni();
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: "quote" };
  }
  insertNewAfter(e, t) {
    const n = xe(), a = this.getDirection();
    return n.setDirection(a), this.insertAfter(n, t), n;
  }
  collapseAtStart() {
    const e = xe();
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
}
function Ni() {
  return ut(new Na());
}
function Qm(r) {
  return r instanceof Na;
}
class zn extends St {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new zn(e.__tag, e.__key);
  }
  constructor(e, t) {
    super(t), this.__tag = e;
  }
  getTag() {
    return this.__tag;
  }
  createDOM(e) {
    const t = this.__tag, n = document.createElement(t), a = e.theme.heading;
    if (a !== void 0) {
      const i = a[t];
      et(n, i);
    }
    return n;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { h1: (e) => ({ conversion: Sn, priority: 0 }), h2: (e) => ({ conversion: Sn, priority: 0 }), h3: (e) => ({ conversion: Sn, priority: 0 }), h4: (e) => ({ conversion: Sn, priority: 0 }), h5: (e) => ({ conversion: Sn, priority: 0 }), h6: (e) => ({ conversion: Sn, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && yl(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => yl(e) ? { conversion: (t) => ({ node: en("h1") }), priority: 3 } : null };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (t && Cr(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const n = this.getFormatType();
      t.style.textAlign = n;
      const a = this.getDirection();
      a && (t.dir = a);
    }
    return { element: t };
  }
  static importJSON(e) {
    const t = en(e.tag);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag(), type: "heading", version: 1 };
  }
  insertNewAfter(e, t = !0) {
    const n = e ? e.anchor.offset : 0, a = this.getLastDescendant(), i = !a || e && e.anchor.key === a.getKey() && n === a.getTextContentSize() || !e ? xe() : en(this.getTag()), s = this.getDirection();
    if (i.setDirection(s), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
      const o = xe();
      o.select(), this.replace(o, !0);
    }
    return i;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? xe() : en(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function yl(r) {
  return r.nodeName.toLowerCase() === "span" && r.style.fontSize === "26pt";
}
function Sn(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = en(e), r.style !== null && (yc(r, t), t.setFormat(r.style.textAlign))), { node: t };
}
function ef(r) {
  const e = Ni();
  return r.style !== null && (e.setFormat(r.style.textAlign), yc(r, e)), { node: e };
}
function en(r) {
  return ut(new zn(r));
}
function Tn(r) {
  return r instanceof zn;
}
function kn(r) {
  let e = null;
  if (xr(r, DragEvent) ? e = r.dataTransfer : xr(r, ClipboardEvent) && (e = r.clipboardData), e === null) return [!1, [], !1];
  const t = e.types, n = t.includes("Files"), a = t.includes("text/html") || t.includes("text/plain");
  return [n, Array.from(e.files), a];
}
function xl(r) {
  const e = j();
  if (!U(e)) return !1;
  const t = /* @__PURE__ */ new Set(), n = e.getNodes();
  for (let a = 0; a < n.length; a++) {
    const i = n[a], s = i.getKey();
    if (t.has(s)) continue;
    const o = me(i, (c) => ue(c) && !c.isInline());
    if (o === null) continue;
    const l = o.getKey();
    o.canIndent() && !t.has(l) && (t.add(l), r(o));
  }
  return t.size > 0;
}
function $a(r) {
  const e = Qe(r);
  return wr(e);
}
function tf(r) {
  return Re(r.registerCommand(wa, (e) => {
    const t = j();
    return !!gt(t) && (t.clear(), !0);
  }, 0), r.registerCommand(ia, (e) => {
    const t = j();
    return !!U(t) && (t.deleteCharacter(e), !0);
  }, be), r.registerCommand(bc, (e) => {
    const t = j();
    return !!U(t) && (t.deleteWord(e), !0);
  }, be), r.registerCommand(Ns, (e) => {
    const t = j();
    return !!U(t) && (t.deleteLine(e), !0);
  }, be), r.registerCommand(vc, (e) => {
    const t = j();
    if (typeof e == "string") t !== null && t.insertText(e);
    else {
      if (t === null) return !1;
      const n = e.dataTransfer;
      if (n != null) pl(n, t, r);
      else if (U(t)) {
        const a = e.data;
        return a && t.insertText(a), !0;
      }
    }
    return !0;
  }, be), r.registerCommand(E1, () => {
    const e = j();
    return !!U(e) && (e.removeText(), !0);
  }, be), r.registerCommand(yt, (e) => {
    const t = j();
    return !!U(t) && (t.formatText(e), !0);
  }, be), r.registerCommand(er, (e) => {
    const t = j();
    if (!U(t) && !gt(t)) return !1;
    const n = t.getNodes();
    for (const a of n) {
      const i = me(a, (s) => ue(s) && !s.isInline());
      i !== null && i.setFormat(e);
    }
    return !0;
  }, be), r.registerCommand(U0, (e) => {
    const t = j();
    return !!U(t) && (t.insertLineBreak(e), !0);
  }, be), r.registerCommand(ca, () => {
    const e = j();
    return !!U(e) && (e.insertParagraph(), !0);
  }, be), r.registerCommand(gc, () => (In([mo()]), !0), be), r.registerCommand(ki, () => xl((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), be), r.registerCommand(ui, () => xl((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), be), r.registerCommand(fn, (e) => {
    const t = j();
    if (gt(t) && !$a(e.target)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectPrevious(), !0;
    } else if (U(t)) {
      const n = Ts(t.focus, !0);
      if (!e.shiftKey && wr(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, be), r.registerCommand(mn, (e) => {
    const t = j();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectNext(0, 0), !0;
    } else if (U(t)) {
      if (function(a) {
        const i = a.focus;
        return i.key === "root" && i.offset === wt().getChildrenSize();
      }(t)) return e.preventDefault(), !0;
      const n = Ts(t.focus, !1);
      if (!e.shiftKey && wr(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, be), r.registerCommand(_a, (e) => {
    const t = j();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
    }
    if (!U(t)) return !1;
    if (Z0(t, !0)) {
      const n = e.shiftKey;
      return e.preventDefault(), Q0(t, n, !0), !0;
    }
    return !1;
  }, be), r.registerCommand(Ci, (e) => {
    const t = j();
    if (gt(t) && !$a(e.target)) {
      const a = t.getNodes();
      if (a.length > 0) return e.preventDefault(), a[0].selectNext(0, 0), !0;
    }
    if (!U(t)) return !1;
    const n = e.shiftKey;
    return !!Z0(t, !1) && (e.preventDefault(), Q0(t, n, !1), !0);
  }, be), r.registerCommand(ya, (e) => {
    if ($a(e.target)) return !1;
    const t = j();
    if (!U(t)) return !1;
    e.preventDefault();
    const { anchor: n } = t, a = n.getNode();
    return t.isCollapsed() && n.offset === 0 && !co(a) && Ti(a).getIndent() > 0 ? r.dispatchCommand(ui, void 0) : r.dispatchCommand(ia, !0);
  }, be), r.registerCommand(xa, (e) => {
    if ($a(e.target)) return !1;
    const t = j();
    return !!U(t) && (e.preventDefault(), r.dispatchCommand(ia, !1));
  }, be), r.registerCommand(go, (e) => {
    const t = j();
    if (!U(t)) return !1;
    if (e !== null) {
      if ((Xm || Vm || Zm) && Ym) return !1;
      if (e.preventDefault(), e.shiftKey) return r.dispatchCommand(U0, !1);
    }
    return r.dispatchCommand(ca, void 0);
  }, be), r.registerCommand(Rn, () => {
    const e = j();
    return !!U(e) && (r.blur(), !0);
  }, be), r.registerCommand(_i, (e) => {
    const [, t] = kn(e);
    if (t.length > 0) {
      const a = bl(e.clientX, e.clientY);
      if (a !== null) {
        const { offset: i, node: s } = a, o = Qe(s);
        if (o !== null) {
          const l = Sa();
          if (Se(o)) l.anchor.set(o.getKey(), i, "text"), l.focus.set(o.getKey(), i, "text");
          else {
            const u = o.getParentOrThrow().getKey(), d = o.getIndexWithinParent() + 1;
            l.anchor.set(u, d, "element"), l.focus.set(u, d, "element");
          }
          const c = po(l);
          xt(c);
        }
        r.dispatchCommand(Ls, t);
      }
      return e.preventDefault(), !0;
    }
    const n = j();
    return !!U(n);
  }, be), r.registerCommand(fo, (e) => {
    const [t] = kn(e), n = j();
    return !(t && !U(n));
  }, be), r.registerCommand(Si, (e) => {
    const [t] = kn(e), n = j();
    if (t && !U(n)) return !1;
    const a = bl(e.clientX, e.clientY);
    if (a !== null) {
      const i = Qe(a.node);
      wr(i) && e.preventDefault();
    }
    return !0;
  }, be), r.registerCommand(C1, () => (k1(), !0), be), r.registerCommand(mc, (e) => (Fs(r, xr(e, ClipboardEvent) ? e : null), !0), be), r.registerCommand(pc, (e) => (async function(t, n) {
    await Fs(n, xr(t, ClipboardEvent) ? t : null), n.update(() => {
      const a = j();
      U(a) ? a.removeText() : gt(a) && a.getNodes().forEach((i) => i.remove());
    });
  }(e, r), !0), be), r.registerCommand(fc, (e) => {
    const [, t, n] = kn(e);
    return t.length > 0 && !n ? (r.dispatchCommand(Ls, t), !0) : _1(e.target) ? !1 : j() !== null && (function(a, i) {
      a.preventDefault(), i.update(() => {
        const s = j(), o = xr(a, InputEvent) || xr(a, KeyboardEvent) ? null : a.clipboardData;
        o != null && s !== null && pl(o, s, i);
      }, { tag: "paste" });
    }(e, r), !0);
  }, be));
}
const Do = /^(\d+(?:\.\d+)?)px$/, He = { BOTH: 3, COLUMN: 2, NO_STATUS: 0, ROW: 1 };
class sr extends St {
  static getType() {
    return "tablecell";
  }
  static clone(e) {
    return new sr(e.__headerState, e.__colSpan, e.__width, e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__rowSpan = e.__rowSpan, this.__backgroundColor = e.__backgroundColor;
  }
  static importDOM() {
    return { td: (e) => ({ conversion: wl, priority: 0 }), th: (e) => ({ conversion: wl, priority: 0 }) };
  }
  static importJSON(e) {
    const t = e.colSpan || 1, n = e.rowSpan || 1;
    return Jt(e.headerState, t, e.width || void 0).setRowSpan(n).setBackgroundColor(e.backgroundColor || null);
  }
  constructor(e = He.NO_STATUS, t = 1, n, a) {
    super(a), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = n, this.__backgroundColor = null;
  }
  createDOM(e) {
    const t = document.createElement(this.getTag());
    return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), et(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (t) {
      const n = t;
      n.style.border = "1px solid black", this.__colSpan > 1 && (n.colSpan = this.__colSpan), this.__rowSpan > 1 && (n.rowSpan = this.__rowSpan), n.style.width = `${this.getWidth() || 75}px`, n.style.verticalAlign = "top", n.style.textAlign = "start";
      const a = this.getBackgroundColor();
      a !== null ? n.style.backgroundColor = a : this.hasHeader() && (n.style.backgroundColor = "#f2f3f5");
    }
    return { element: t };
  }
  exportJSON() {
    return { ...super.exportJSON(), backgroundColor: this.getBackgroundColor(), colSpan: this.__colSpan, headerState: this.__headerState, rowSpan: this.__rowSpan, type: "tablecell", width: this.getWidth() };
  }
  getColSpan() {
    return this.getLatest().__colSpan;
  }
  setColSpan(e) {
    const t = this.getWritable();
    return t.__colSpan = e, t;
  }
  getRowSpan() {
    return this.getLatest().__rowSpan;
  }
  setRowSpan(e) {
    const t = this.getWritable();
    return t.__rowSpan = e, t;
  }
  getTag() {
    return this.hasHeader() ? "th" : "td";
  }
  setHeaderStyles(e, t = He.BOTH) {
    const n = this.getWritable();
    return n.__headerState = e & t | n.__headerState & ~t, n;
  }
  getHeaderStyles() {
    return this.getLatest().__headerState;
  }
  setWidth(e) {
    const t = this.getWritable();
    return t.__width = e, t;
  }
  getWidth() {
    return this.getLatest().__width;
  }
  getBackgroundColor() {
    return this.getLatest().__backgroundColor;
  }
  setBackgroundColor(e) {
    const t = this.getWritable();
    return t.__backgroundColor = e, t;
  }
  toggleHeaderStyle(e) {
    const t = this.getWritable();
    return (t.__headerState & e) === e ? t.__headerState -= e : t.__headerState += e, t;
  }
  hasHeaderState(e) {
    return (this.getHeaderStyles() & e) === e;
  }
  hasHeader() {
    return this.getLatest().__headerState !== He.NO_STATUS;
  }
  updateDOM(e) {
    return e.__headerState !== this.__headerState || e.__width !== this.__width || e.__colSpan !== this.__colSpan || e.__rowSpan !== this.__rowSpan || e.__backgroundColor !== this.__backgroundColor;
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
function wl(r) {
  const e = r, t = r.nodeName.toLowerCase();
  let n;
  Do.test(e.style.width) && (n = parseFloat(e.style.width));
  const a = Jt(t === "th" ? He.ROW : He.NO_STATUS, e.colSpan, n);
  a.__rowSpan = e.rowSpan;
  const i = e.style.backgroundColor;
  i !== "" && (a.__backgroundColor = i);
  const s = e.style, o = (s && s.textDecoration || "").split(" "), l = s.fontWeight === "700" || s.fontWeight === "bold", c = o.includes("line-through"), u = s.fontStyle === "italic", d = o.includes("underline");
  return { after: (m) => (m.length === 0 && m.push(xe()), m), forChild: (m, g) => {
    if (ae(g) && !ue(m)) {
      const v = xe();
      return ba(m) && m.getTextContent() === `
` ? null : (Se(m) && (l && m.toggleFormat("bold"), c && m.toggleFormat("strikethrough"), u && m.toggleFormat("italic"), d && m.toggleFormat("underline")), v.append(m), v);
    }
    return m;
  }, node: a };
}
function Jt(r, e = 1, t) {
  return ut(new sr(r, e, t));
}
function ae(r) {
  return r instanceof sr;
}
const Ro = Ue("INSERT_TABLE_COMMAND");
function rf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ce = rf(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const nf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
class Pn extends St {
  static getType() {
    return "tablerow";
  }
  static clone(e) {
    return new Pn(e.__height, e.__key);
  }
  static importDOM() {
    return { tr: (e) => ({ conversion: af, priority: 0 }) };
  }
  static importJSON(e) {
    return ma(e.height);
  }
  constructor(e, t) {
    super(t), this.__height = e;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...this.getHeight() && { height: this.getHeight() }, type: "tablerow", version: 1 };
  }
  createDOM(e) {
    const t = document.createElement("tr");
    return this.__height && (t.style.height = `${this.__height}px`), et(t, e.theme.tableRow), t;
  }
  isShadowRoot() {
    return !0;
  }
  setHeight(e) {
    return this.getWritable().__height = e, this.__height;
  }
  getHeight() {
    return this.getLatest().__height;
  }
  updateDOM(e) {
    return e.__height !== this.__height;
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
}
function af(r) {
  const e = r;
  let t;
  return Do.test(e.style.height) && (t = parseFloat(e.style.height)), { node: ma(t) };
}
function ma(r) {
  return ut(new Pn(r));
}
function nt(r) {
  return r instanceof Pn;
}
function sf(r, e, t = !0) {
  const n = Po();
  for (let a = 0; a < r; a++) {
    const i = ma();
    for (let s = 0; s < e; s++) {
      let o = He.NO_STATUS;
      typeof t == "object" ? (a === 0 && t.rows && (o |= He.ROW), s === 0 && t.columns && (o |= He.COLUMN)) : t && (a === 0 && (o |= He.ROW), s === 0 && (o |= He.COLUMN));
      const l = Jt(o), c = xe();
      c.append(Ir()), l.append(c), i.append(l);
    }
    n.append(i);
  }
  return n;
}
function of(r) {
  const e = me(r, (t) => ae(t));
  return ae(e) ? e : null;
}
function td(r) {
  const e = me(r, (t) => nt(t));
  if (nt(e)) return e;
  throw new Error("Expected table cell to be inside of table row.");
}
function br(r) {
  const e = me(r, (t) => We(t));
  if (We(e)) return e;
  throw new Error("Expected table cell to be inside of table.");
}
function Io(r) {
  const e = td(r);
  return br(e).getChildren().findIndex((t) => t.is(e));
}
function rd(r) {
  return td(r).getChildren().findIndex((e) => e.is(r));
}
const zs = (r, e) => r === He.BOTH || r === e ? e : He.NO_STATUS;
function nd(r = !0) {
  const e = j();
  U(e) || Oe(e) || Ce(188);
  const t = e.focus.getNode(), [n, , a] = vt(t), [i, s] = Kt(a, n, n), o = i[0].length, { startRow: l } = s;
  let c = null;
  if (r) {
    const u = l + n.__rowSpan - 1, d = i[u], m = ma();
    for (let v = 0; v < o; v++) {
      const { cell: b, startRow: x } = d[v];
      if (x + b.__rowSpan - 1 <= u) {
        const S = d[v].cell.__headerState, w = zs(S, He.COLUMN);
        m.append(Jt(w).append(xe()));
      } else b.setRowSpan(b.__rowSpan + 1);
    }
    const g = a.getChildAtIndex(u);
    nt(g) || Ce(145), g.insertAfter(m), c = m;
  } else {
    const u = i[l], d = ma();
    for (let g = 0; g < o; g++) {
      const { cell: v, startRow: b } = u[g];
      if (b === l) {
        const x = u[g].cell.__headerState, S = zs(x, He.COLUMN);
        d.append(Jt(S).append(xe()));
      } else v.setRowSpan(v.__rowSpan + 1);
    }
    const m = a.getChildAtIndex(l);
    nt(m) || Ce(145), m.insertBefore(d), c = d;
  }
  return c;
}
function ad(r = !0) {
  const e = j();
  U(e) || Oe(e) || Ce(188);
  const t = e.anchor.getNode(), n = e.focus.getNode(), [a] = vt(t), [i, , s] = vt(n), [o, l, c] = Kt(s, i, a), u = o.length, d = r ? Math.max(l.startColumn, c.startColumn) : Math.min(l.startColumn, c.startColumn), m = r ? d + i.__colSpan - 1 : d - 1, g = s.getFirstChild();
  nt(g) || Ce(120);
  let v = null;
  function b(w = He.NO_STATUS) {
    const C = Jt(w).append(xe());
    return v === null && (v = C), C;
  }
  let x = g;
  e: for (let w = 0; w < u; w++) {
    if (w !== 0) {
      const M = x.getNextSibling();
      nt(M) || Ce(121), x = M;
    }
    const C = o[w], N = C[m < 0 ? 0 : m].cell.__headerState, k = zs(N, He.ROW);
    if (m < 0) {
      Fo(x, b(k));
      continue;
    }
    const { cell: E, startColumn: I, startRow: D } = C[m];
    if (I + E.__colSpan - 1 <= m) {
      let M = E, F = D, z = m;
      for (; F !== w && M.__rowSpan > 1; ) {
        if (z -= E.__colSpan, !(z >= 0)) {
          x.append(b(k));
          continue e;
        }
        {
          const { cell: $, startRow: P } = C[z];
          M = $, F = P;
        }
      }
      M.insertAfter(b(k));
    } else E.setColSpan(E.__colSpan + 1);
  }
  v !== null && fa(v);
  const S = s.getColWidths();
  if (S) {
    const w = [...S], C = m < 0 ? 0 : m, N = w[C];
    w.splice(C, 0, N), s.setColWidths(w);
  }
  return v;
}
function lf() {
  const r = j();
  U(r) || Oe(r) || Ce(188);
  const [e, t] = r.isBackward() ? [r.focus.getNode(), r.anchor.getNode()] : [r.anchor.getNode(), r.focus.getNode()], [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Kt(a, n, i), { startRow: c } = o, { startRow: u } = l, d = u + i.__rowSpan - 1;
  if (s.length === d - c + 1) return void a.remove();
  const m = s[0].length, g = s[d + 1], v = a.getChildAtIndex(d + 1);
  for (let b = d; b >= c; b--) {
    for (let S = m - 1; S >= 0; S--) {
      const { cell: w, startRow: C, startColumn: N } = s[b][S];
      if (N === S && (b === c && C < c && w.setRowSpan(w.__rowSpan - (C - c)), C >= c && C + w.__rowSpan - 1 > d)) if (w.setRowSpan(w.__rowSpan - (d - C + 1)), v === null && Ce(122), S === 0) Fo(v, w);
      else {
        const { cell: k } = g[S - 1];
        k.insertAfter(w);
      }
    }
    const x = a.getChildAtIndex(b);
    nt(x) || Ce(206, String(b)), x.remove();
  }
  if (g !== void 0) {
    const { cell: b } = g[0];
    fa(b);
  } else {
    const b = s[c - 1], { cell: x } = b[0];
    fa(x);
  }
}
function uf() {
  const r = j();
  U(r) || Oe(r) || Ce(188);
  const e = r.anchor.getNode(), t = r.focus.getNode(), [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Kt(a, n, i), { startColumn: c } = o, { startRow: u, startColumn: d } = l, m = Math.min(c, d), g = Math.max(c + n.__colSpan - 1, d + i.__colSpan - 1), v = g - m + 1;
  if (s[0].length === g - m + 1) return a.selectPrevious(), void a.remove();
  const b = s.length;
  for (let C = 0; C < b; C++) for (let N = m; N <= g; N++) {
    const { cell: k, startColumn: E } = s[C][N];
    if (E < m) {
      if (N === m) {
        const I = m - E;
        k.setColSpan(k.__colSpan - Math.min(v, k.__colSpan - I));
      }
    } else if (E + k.__colSpan - 1 > g) {
      if (N === g) {
        const I = g - E + 1;
        k.setColSpan(k.__colSpan - I);
      }
    } else k.remove();
  }
  const x = s[u], S = c > d ? x[c + n.__colSpan] : x[d + i.__colSpan];
  if (S !== void 0) {
    const { cell: C } = S;
    fa(C);
  } else {
    const C = d < c ? x[d - 1] : x[c - 1], { cell: N } = C;
    fa(N);
  }
  const w = a.getColWidths();
  if (w) {
    const C = [...w];
    C.splice(m, v), a.setColWidths(C);
  }
}
function fa(r) {
  const e = r.getFirstDescendant();
  e == null ? r.selectStart() : e.getParentOrThrow().selectStart();
}
function Fo(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function cf() {
  const r = j();
  U(r) || Oe(r) || Ce(188);
  const e = r.anchor.getNode(), [t, n, a] = vt(e), i = t.__colSpan, s = t.__rowSpan;
  if (i === 1 && s === 1) return;
  const [o, l] = Kt(a, t, t), { startColumn: c, startRow: u } = l, d = t.__headerState & He.COLUMN, m = Array.from({ length: i }, (b, x) => {
    let S = d;
    for (let w = 0; S !== 0 && w < o.length; w++) S &= o[w][x + c].cell.__headerState;
    return S;
  }), g = t.__headerState & He.ROW, v = Array.from({ length: s }, (b, x) => {
    let S = g;
    for (let w = 0; S !== 0 && w < o[0].length; w++) S &= o[x + u][w].cell.__headerState;
    return S;
  });
  if (i > 1) {
    for (let b = 1; b < i; b++) t.insertAfter(Jt(m[b] | v[0]).append(xe()));
    t.setColSpan(1);
  }
  if (s > 1) {
    let b;
    for (let x = 1; x < s; x++) {
      const S = u + x, w = o[S];
      b = (b || n).getNextSibling(), nt(b) || Ce(125);
      let C = null;
      for (let N = 0; N < c; N++) {
        const k = w[N], E = k.cell;
        k.startRow === S && (C = E), E.__colSpan > 1 && (N += E.__colSpan - 1);
      }
      if (C === null) for (let N = i - 1; N >= 0; N--) Fo(b, Jt(m[N] | v[x]).append(xe()));
      else for (let N = i - 1; N >= 0; N--) C.insertAfter(Jt(m[N] | v[x]).append(xe()));
    }
    t.setRowSpan(1);
  }
}
function Kt(r, e, t) {
  const [n, a, i] = Lo(r, e, t);
  return a === null && Ce(207), i === null && Ce(208), [n, a, i];
}
function Lo(r, e, t) {
  const n = [];
  let a = null, i = null;
  function s(l) {
    let c = n[l];
    return c === void 0 && (n[l] = c = []), c;
  }
  const o = r.getChildren();
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    nt(c) || Ce(209);
    for (let u = c.getFirstChild(), d = 0; u != null; u = u.getNextSibling()) {
      ae(u) || Ce(147);
      const m = s(l);
      for (; m[d] !== void 0; ) d++;
      const g = { cell: u, startColumn: d, startRow: l }, { __rowSpan: v, __colSpan: b } = u;
      for (let x = 0; x < v && !(l + x >= o.length); x++) {
        const S = s(l + x);
        for (let w = 0; w < b; w++) S[d + w] = g;
      }
      e !== null && a === null && e.is(u) && (a = g), t !== null && i === null && t.is(u) && (i = g);
    }
  }
  return [n, a, i];
}
function vt(r) {
  let e;
  if (r instanceof sr) e = r;
  else if ("__type" in r) {
    const a = me(r, ae);
    ae(a) || Ce(148), e = a;
  } else {
    const a = me(r.getNode(), ae);
    ae(a) || Ce(148), e = a;
  }
  const t = e.getParent();
  nt(t) || Ce(149);
  const n = t.getParent();
  return We(n) || Ce(210), [e, t, n];
}
function Sl(r) {
  const [e, , t] = vt(r), n = t.getChildren(), a = n.length, i = n[0].getChildren().length, s = new Array(a);
  for (let o = 0; o < a; o++) s[o] = new Array(i);
  for (let o = 0; o < a; o++) {
    const l = n[o].getChildren();
    let c = 0;
    for (let u = 0; u < l.length; u++) {
      for (; s[o][c]; ) c++;
      const d = l[u], m = d.__rowSpan || 1, g = d.__colSpan || 1;
      for (let v = 0; v < m; v++) for (let b = 0; b < g; b++) s[o + v][c + b] = d;
      if (e === d) return { colSpan: g, columnIndex: c, rowIndex: o, rowSpan: m };
      c += g;
    }
  }
  return null;
}
class Ai {
  constructor(e, t, n) {
    this.anchor = t, this.focus = n, t._selection = this, n._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = e;
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
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    return !!Oe(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, n) {
    this.dirty = !0, this.tableKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null;
  }
  clone() {
    return new Ai(this.tableKey, this.anchor, this.focus);
  }
  isCollapsed() {
    return !1;
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {
  }
  insertText() {
  }
  hasFormat(e) {
    let t = 0;
    this.getNodes().filter(ae).forEach((a) => {
      const i = a.getFirstChild();
      Hr(i) && (t |= i.getTextFormat());
    });
    const n = Rr[e];
    return !!(t & n);
  }
  insertNodes(e) {
    const t = this.focus.getNode();
    ue(t) || Ce(151), po(t.select(0, t.getChildrenSize())).insertNodes(e);
  }
  getShape() {
    const e = bt(this.anchor.key);
    ae(e) || Ce(152);
    const t = Sl(e);
    t === null && Ce(153);
    const n = bt(this.focus.key);
    ae(n) || Ce(154);
    const a = Sl(n);
    a === null && Ce(155);
    const i = Math.min(t.columnIndex, a.columnIndex), s = Math.max(t.columnIndex + t.colSpan - 1, a.columnIndex + a.colSpan - 1), o = Math.min(t.rowIndex, a.rowIndex), l = Math.max(t.rowIndex + t.rowSpan - 1, a.rowIndex + a.rowSpan - 1);
    return { fromX: Math.min(i, s), fromY: Math.min(o, l), toX: Math.max(i, s), toY: Math.max(o, l) };
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) return e;
    const t = this.anchor.getNode(), n = this.focus.getNode(), a = me(t, ae), i = me(n, ae);
    ae(a) || Ce(152), ae(i) || Ce(154);
    const s = a.getParent();
    nt(s) || Ce(156);
    const o = s.getParent();
    We(o) || Ce(157);
    const l = i.getParents()[1];
    if (l !== o) {
      if (o.isParentOf(i)) {
        const D = l.getParent();
        D == null && Ce(159), this.set(this.tableKey, i.getKey(), D.getKey());
      } else {
        const D = o.getParent();
        D == null && Ce(158), this.set(this.tableKey, D.getKey(), i.getKey());
      }
      return this.getNodes();
    }
    const [c, u, d] = Kt(o, a, i);
    let m = Math.min(u.startColumn, d.startColumn), g = Math.min(u.startRow, d.startRow), v = Math.max(u.startColumn + u.cell.__colSpan - 1, d.startColumn + d.cell.__colSpan - 1), b = Math.max(u.startRow + u.cell.__rowSpan - 1, d.startRow + d.cell.__rowSpan - 1), x = m, S = g, w = m, C = g;
    function N(D) {
      const { cell: M, startColumn: F, startRow: z } = D;
      m = Math.min(m, F), g = Math.min(g, z), v = Math.max(v, F + M.__colSpan - 1), b = Math.max(b, z + M.__rowSpan - 1);
    }
    for (; m < x || g < S || v > w || b > C; ) {
      if (m < x) {
        const D = C - S, M = x - 1;
        for (let F = 0; F <= D; F++) N(c[S + F][M]);
        x = M;
      }
      if (g < S) {
        const D = w - x, M = S - 1;
        for (let F = 0; F <= D; F++) N(c[M][x + F]);
        S = M;
      }
      if (v > w) {
        const D = C - S, M = w + 1;
        for (let F = 0; F <= D; F++) N(c[S + F][M]);
        w = M;
      }
      if (b > C) {
        const D = w - x, M = C + 1;
        for (let F = 0; F <= D; F++) N(c[M][x + F]);
        C = M;
      }
    }
    const k = /* @__PURE__ */ new Map([[o.getKey(), o]]);
    let E = null;
    for (let D = g; D <= b; D++) for (let M = m; M <= v; M++) {
      const { cell: F } = c[D][M], z = F.getParent();
      nt(z) || Ce(160), z !== E && k.set(z.getKey(), z), k.set(F.getKey(), F);
      for (const $ of df(F)) k.set($.getKey(), $);
      E = z;
    }
    const I = Array.from(k.values());
    return N1() || (this._cachedNodes = I), I;
  }
  getTextContent() {
    const e = this.getNodes().filter((n) => ae(n));
    let t = "";
    for (let n = 0; n < e.length; n++) {
      const a = e[n], i = a.__parent, s = (e[n + 1] || {}).__parent;
      t += a.getTextContent() + (s !== i ? `
` : "	");
    }
    return t;
  }
}
function Oe(r) {
  return r instanceof Ai;
}
function _l() {
  const r = K0("root", 0, "element"), e = K0("root", 0, "element");
  return new Ai("root", r, e);
}
function df(r) {
  const e = [], t = [r];
  for (; t.length > 0; ) {
    const n = t.pop();
    n === void 0 && Ce(112), ue(n) && t.unshift(...n.getChildren()), n !== r && e.push(n);
  }
  return e;
}
class hf {
  constructor(e, t) {
    this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = t, this.editor = e, this.table = { columns: 0, domRows: [], rows: 0 }, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.trackTable(), this.isSelecting = !1, this.abortController = new AbortController(), this.listenerOptions = { signal: this.abortController.signal };
  }
  getTable() {
    return this.table;
  }
  removeListeners() {
    this.abortController.abort("removeListeners"), Array.from(this.listenersToRemove).forEach((e) => e()), this.listenersToRemove.clear();
  }
  trackTable() {
    const e = new MutationObserver((t) => {
      this.editor.update(() => {
        let n = !1;
        for (let i = 0; i < t.length; i++) {
          const s = t[i].target.nodeName;
          if (s === "TABLE" || s === "TBODY" || s === "THEAD" || s === "TR") {
            n = !0;
            break;
          }
        }
        if (!n) return;
        const a = this.editor.getElementByKey(this.tableNodeKey);
        if (!a) throw new Error("Expected to find TableElement in DOM");
        this.table = sa(a);
      });
    });
    this.editor.update(() => {
      const t = this.editor.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      this.table = sa(t), e.observe(t, { attributes: !0, childList: !0, subtree: !0 });
    });
  }
  clearHighlight() {
    const e = this.editor;
    this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.enableHighlightStyle(), e.update(() => {
      if (!We(bt(this.tableNodeKey))) throw new Error("Expected TableNode.");
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      const n = sa(t);
      Ha(e, n, null), xt(null), e.dispatchCommand(yr, void 0);
    });
  }
  enableHighlightStyle() {
    const e = this.editor;
    e.update(() => {
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      pn(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
    });
  }
  disableHighlightStyle() {
    const e = this.editor;
    e.update(() => {
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      et(t, e._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
    });
  }
  updateTableTableSelection(e) {
    if (e !== null && e.tableKey === this.tableNodeKey) {
      const t = this.editor;
      this.tableSelection = e, this.isHighlightingCells = !0, this.disableHighlightStyle(), Ha(t, this.table, this.tableSelection);
    } else e == null ? this.clearHighlight() : (this.tableNodeKey = e.tableKey, this.updateTableTableSelection(e));
  }
  setFocusCellForSelection(e, t = !1) {
    const n = this.editor;
    n.update(() => {
      const a = bt(this.tableNodeKey);
      if (!We(a)) throw new Error("Expected TableNode.");
      if (!n.getElementByKey(this.tableNodeKey)) throw new Error("Expected to find TableElement in DOM");
      const i = e.x, s = e.y;
      if (this.focusCell = e, this.anchorCell !== null) {
        const o = id(n._window);
        o && o.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
      }
      if (this.isHighlightingCells || this.anchorX === i && this.anchorY === s && !t) {
        if (i === this.focusX && s === this.focusY) return;
      } else this.isHighlightingCells = !0, this.disableHighlightStyle();
      if (this.focusX = i, this.focusY = s, this.isHighlightingCells) {
        const o = Qe(e.elem);
        if (this.tableSelection != null && this.anchorCellNodeKey != null && ae(o) && a.is(En(o))) {
          const l = o.getKey();
          this.tableSelection = this.tableSelection.clone() || _l(), this.focusCellNodeKey = l, this.tableSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), xt(this.tableSelection), n.dispatchCommand(yr, void 0), Ha(n, this.table, this.tableSelection);
        }
      }
    });
  }
  setAnchorCellForSelection(e) {
    this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.editor.update(() => {
      const t = Qe(e.elem);
      if (ae(t)) {
        const n = t.getKey();
        this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : _l(), this.anchorCellNodeKey = n;
      }
    });
  }
  formatCells(e) {
    this.editor.update(() => {
      const t = j();
      Oe(t) || Ce(11);
      const n = Sa(), a = n.anchor, i = n.focus, s = t.getNodes().filter(ae), o = s[0].getFirstChild(), l = Hr(o) ? o.getFormatFlags(e, null) : null;
      s.forEach((c) => {
        a.set(c.getKey(), 0, "element"), i.set(c.getKey(), c.getChildrenSize(), "element"), n.formatText(e, l);
      }), xt(t), this.editor.dispatchCommand(yr, void 0);
    });
  }
  clearText() {
    const e = this.editor;
    e.update(() => {
      const t = bt(this.tableNodeKey);
      if (!We(t)) throw new Error("Expected TableNode.");
      const n = j();
      Oe(n) || Ce(11);
      const a = n.getNodes().filter(ae);
      a.length !== this.table.columns * this.table.rows ? (a.forEach((i) => {
        if (ue(i)) {
          const s = xe(), o = Ir();
          s.append(o), i.append(s), i.getChildren().forEach((l) => {
            l !== s && l.remove();
          });
        }
      }), Ha(e, this.table, null), xt(null), e.dispatchCommand(yr, void 0)) : (t.selectPrevious(), t.remove(), wt().selectStart());
    });
  }
}
const Ps = "__lexicalTableSelection", id = (r) => nf ? (r || window).getSelection() : null;
function mf(r, e, t, n) {
  const a = t.getRootElement();
  if (a === null) throw new Error("No root element.");
  const i = new hf(t, r.getKey()), s = t._window || window;
  (function(u, d) {
    Bs(u) !== null && Ce(205), u[Ps] = d;
  })(e, i), i.listenersToRemove.add(() => function(u, d) {
    Bs(u) === d && delete u[Ps];
  }(e, i));
  const o = () => {
    const u = () => {
      i.isSelecting = !1, s.removeEventListener("mouseup", u), s.removeEventListener("mousemove", d);
    }, d = (m) => {
      setTimeout(() => {
        if (1 & ~m.buttons && i.isSelecting) return i.isSelecting = !1, s.removeEventListener("mouseup", u), void s.removeEventListener("mousemove", d);
        const g = js(m.target);
        g === null || i.anchorX === g.x && i.anchorY === g.y || (m.preventDefault(), i.setFocusCellForSelection(g));
      }, 0);
    };
    return { onMouseMove: d, onMouseUp: u };
  };
  e.addEventListener("mousedown", (u) => {
    setTimeout(() => {
      if (u.button !== 0 || !s) return;
      const d = js(u.target);
      d !== null && (pr(u), i.setAnchorCellForSelection(d));
      const { onMouseUp: m, onMouseMove: g } = o();
      i.isSelecting = !0, s.addEventListener("mouseup", m, i.listenerOptions), s.addEventListener("mousemove", g, i.listenerOptions);
    }, 0);
  }, i.listenerOptions), s.addEventListener("mousedown", (u) => {
    u.button === 0 && t.update(() => {
      const d = j(), m = u.target;
      Oe(d) && d.tableKey === i.tableNodeKey && a.contains(m) && i.clearHighlight();
    });
  }, i.listenerOptions), i.listenersToRemove.add(t.registerCommand(mn, (u) => na(t, u, "down", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(fn, (u) => na(t, u, "up", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(_a, (u) => na(t, u, "backward", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(Ci, (u) => na(t, u, "forward", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(Rn, (u) => {
    const d = j();
    if (Oe(d)) {
      const m = me(d.focus.getNode(), ae);
      if (ae(m)) return pr(u), m.selectEnd(), !0;
    }
    return !1;
  }, Lt)), [bc, Ns, ia].forEach((u) => {
    i.listenersToRemove.add(t.registerCommand(u, /* @__PURE__ */ ((d) => () => {
      const m = j();
      if (!Xr(m, r)) return !1;
      if (Oe(m)) return i.clearText(), !0;
      if (U(m)) {
        const g = me(m.anchor.getNode(), (N) => ae(N));
        if (!ae(g)) return !1;
        const v = m.anchor.getNode(), b = m.focus.getNode(), x = r.isParentOf(v), S = r.isParentOf(b);
        if (x && !S || S && !x) return i.clearText(), !0;
        const w = me(m.anchor.getNode(), (N) => ue(N)), C = w && me(w, (N) => ue(N) && ae(N.getParent()));
        if (!ue(C) || !ue(w)) return !1;
        if (d === Ns && C.getPreviousSibling() === null) return !0;
      }
      return !1;
    })(u), pt));
  });
  const l = (u) => {
    const d = j();
    if (!Oe(d) && !U(d)) return !1;
    const m = r.isParentOf(d.anchor.getNode());
    if (m !== r.isParentOf(d.focus.getNode())) {
      const g = m ? "anchor" : "focus", v = m ? "focus" : "anchor", { key: b, offset: x, type: S } = d[v];
      return r[d[g].isBefore(d[v]) ? "selectPrevious" : "selectNext"]()[v].set(b, x, S), !1;
    }
    return !!Oe(d) && (u && (u.preventDefault(), u.stopPropagation()), i.clearText(), !0);
  };
  function c(u) {
    const d = r.getCordsFromCellNode(u, i.table);
    return r.getDOMCellFromCordsOrThrow(d.x, d.y, i.table);
  }
  return i.listenersToRemove.add(t.registerCommand(ya, l, pt)), i.listenersToRemove.add(t.registerCommand(xa, l, pt)), i.listenersToRemove.add(t.registerCommand(pc, (u) => {
    const d = j();
    if (d) {
      if (!Oe(d) && !U(d)) return !1;
      Fs(t, xr(u, ClipboardEvent) ? u : null, ed(d));
      const m = l(u);
      return U(d) ? (d.removeText(), !0) : m;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(yt, (u) => {
    const d = j();
    if (!Xr(d, r)) return !1;
    if (Oe(d)) return i.formatCells(u), !0;
    if (U(d)) {
      const m = me(d.anchor.getNode(), (g) => ae(g));
      if (!ae(m)) return !1;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(er, (u) => {
    const d = j();
    if (!Oe(d) || !Xr(d, r)) return !1;
    const m = d.anchor.getNode(), g = d.focus.getNode();
    if (!ae(m) || !ae(g)) return !1;
    const [v, b, x] = Kt(r, m, g), S = Math.max(b.startRow, x.startRow), w = Math.max(b.startColumn, x.startColumn), C = Math.min(b.startRow, x.startRow), N = Math.min(b.startColumn, x.startColumn);
    for (let k = C; k <= S; k++) for (let E = N; E <= w; E++) {
      const I = v[k][E].cell;
      I.setFormat(u);
      const D = I.getChildren();
      for (let M = 0; M < D.length; M++) {
        const F = D[M];
        ue(F) && !F.isInline() && F.setFormat(u);
      }
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(vc, (u) => {
    const d = j();
    if (!Xr(d, r)) return !1;
    if (Oe(d)) return i.clearHighlight(), !1;
    if (U(d)) {
      const m = me(d.anchor.getNode(), (g) => ae(g));
      if (!ae(m)) return !1;
      if (typeof u == "string") {
        const g = El(t, d, r);
        if (g) return kl(g, r, [Ir(u)]), !0;
      }
    }
    return !1;
  }, pt)), n && i.listenersToRemove.add(t.registerCommand(Ei, (u) => {
    const d = j();
    if (!U(d) || !d.isCollapsed() || !Xr(d, r)) return !1;
    const m = Ji(d.anchor.getNode());
    if (m === null) return !1;
    pr(u);
    const g = r.getCordsFromCellNode(m, i.table);
    return sd(i, r, g.x, g.y, u.shiftKey ? "backward" : "forward"), !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(xc, (u) => r.isSelected(), Lt)), i.listenersToRemove.add(t.registerCommand(hc, (u) => {
    const { nodes: d, selection: m } = u, g = m.getStartEndPoints(), v = Oe(m), b = U(m) && me(m.anchor.getNode(), (J) => ae(J)) !== null && me(m.focus.getNode(), (J) => ae(J)) !== null || v;
    if (d.length !== 1 || !We(d[0]) || !b || g === null) return !1;
    const [x] = g, S = d[0], w = S.getChildren(), C = S.getFirstChildOrThrow().getChildrenSize(), N = S.getChildrenSize(), k = me(x.getNode(), (J) => ae(J)), E = k && me(k, (J) => nt(J)), I = E && me(E, (J) => We(J));
    if (!ae(k) || !nt(E) || !We(I)) return !1;
    const D = E.getIndexWithinParent(), M = Math.min(I.getChildrenSize() - 1, D + N - 1), F = k.getIndexWithinParent(), z = Math.min(E.getChildrenSize() - 1, F + C - 1), $ = Math.min(F, z), P = Math.min(D, M), X = Math.max(F, z), Y = Math.max(D, M), re = I.getChildren();
    let de = 0;
    for (let J = P; J <= Y; J++) {
      const he = re[J];
      if (!nt(he)) return !1;
      const le = w[de];
      if (!nt(le)) return !1;
      const Ee = he.getChildren(), oe = le.getChildren();
      let Pe = 0;
      for (let Be = $; Be <= X; Be++) {
        const je = Ee[Be];
        if (!ae(je)) return !1;
        const dt = oe[Pe];
        if (!ae(dt)) return !1;
        const Je = je.getChildren();
        dt.getChildren().forEach((Ge) => {
          Se(Ge) && xe().append(Ge), je.append(Ge);
        }), Je.forEach((Ge) => Ge.remove()), Pe++;
      }
      de++;
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(yr, () => {
    const u = j(), d = ho();
    if (U(u)) {
      const { anchor: m, focus: g } = u, v = m.getNode(), b = g.getNode(), x = Ji(v), S = Ji(b), w = !(!x || !r.is(En(x))), C = !(!S || !r.is(En(S))), N = w !== C, k = w && C, E = u.isBackward();
      if (N) {
        const I = u.clone();
        if (C) {
          const [D] = Kt(r, S, S), M = D[0][0].cell, F = D[D.length - 1].at(-1).cell;
          I.focus.set(E ? M.getKey() : F.getKey(), E ? M.getChildrenSize() : F.getChildrenSize(), "element");
        } else if (w) {
          const [D] = Kt(r, x, x), M = D[0][0].cell, F = D[D.length - 1].at(-1).cell;
          I.anchor.set(E ? F.getKey() : M.getKey(), E ? F.getChildrenSize() : 0, "element");
        }
        xt(I), Cl(t, i);
      } else k && (x.is(S) || (i.setAnchorCellForSelection(c(x)), i.setFocusCellForSelection(c(S), !0), i.isSelecting || setTimeout(() => {
        const { onMouseUp: I, onMouseMove: D } = o();
        i.isSelecting = !0, s.addEventListener("mouseup", I), s.addEventListener("mousemove", D);
      }, 0)));
    } else if (u && Oe(u) && u.is(d) && u.tableKey === r.getKey()) {
      const m = id(t._window);
      if (m && m.anchorNode && m.focusNode) {
        const g = Qe(m.focusNode), v = g && !r.is(En(g)), b = Qe(m.anchorNode), x = b && r.is(En(b));
        if (v && x && m.rangeCount > 0) {
          const S = T1(m, t);
          S && (S.anchor.set(r.getKey(), u.isBackward() ? r.getChildrenSize() : 0, "element"), m.removeAllRanges(), xt(S));
        }
      }
    }
    return u && !u.is(d) && (Oe(u) || Oe(d)) && i.tableSelection && !i.tableSelection.is(d) ? (Oe(u) && u.tableKey === i.tableNodeKey ? i.updateTableTableSelection(u) : !Oe(u) && Oe(d) && d.tableKey === i.tableNodeKey && i.updateTableTableSelection(null), !1) : (i.hasHijackedSelectionStyles && !r.isSelected() ? function(m, g) {
      g.enableHighlightStyle(), zo(g.table, (v) => {
        const b = v.elem;
        v.highlighted = !1, ld(m, v), b.getAttribute("style") || b.removeAttribute("style");
      });
    }(t, i) : !i.hasHijackedSelectionStyles && r.isSelected() && Cl(t, i), !1);
  }, pt)), i.listenersToRemove.add(t.registerCommand(ca, () => {
    const u = j();
    if (!U(u) || !u.isCollapsed() || !Xr(u, r)) return !1;
    const d = El(t, u, r);
    return !!d && (kl(d, r), !0);
  }, pt)), i;
}
function Bs(r) {
  return r[Ps] || null;
}
function js(r) {
  let e = r;
  for (; e != null; ) {
    const t = e.nodeName;
    if (t === "TD" || t === "TH") {
      const n = e._cell;
      return n === void 0 ? null : n;
    }
    e = e.parentNode;
  }
  return null;
}
function sa(r) {
  const e = [], t = { columns: 0, domRows: e, rows: 0 };
  let n = r.querySelector("tr"), a = 0, i = 0;
  for (e.length = 0; n != null; ) {
    const s = n.nodeName;
    if (s === "TD" || s === "TH") {
      const c = { elem: n, hasBackgroundColor: n.style.backgroundColor !== "", highlighted: !1, x: a, y: i };
      n._cell = c;
      let u = e[i];
      u === void 0 && (u = e[i] = []), u[a] = c;
    } else {
      const c = n.firstChild;
      if (c != null) {
        n = c;
        continue;
      }
    }
    const o = n.nextSibling;
    if (o != null) {
      a++, n = o;
      continue;
    }
    const l = n.parentNode;
    if (l != null) {
      const c = l.nextSibling;
      if (c == null) break;
      i++, a = 0, n = c;
    }
  }
  return t.columns = a + 1, t.rows = i + 1, t;
}
function Ha(r, e, t) {
  const n = new Set(t ? t.getNodes() : []);
  zo(e, (a, i) => {
    const s = a.elem;
    n.has(i) ? (a.highlighted = !0, od(r, a)) : (a.highlighted = !1, ld(r, a), s.getAttribute("style") || s.removeAttribute("style"));
  });
}
function zo(r, e) {
  const { domRows: t } = r;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (a) for (let i = 0; i < a.length; i++) {
      const s = a[i];
      if (!s) continue;
      const o = Qe(s.elem);
      o !== null && e(s, o, { x: i, y: n });
    }
  }
}
function Cl(r, e) {
  e.disableHighlightStyle(), zo(e.table, (t) => {
    t.highlighted = !0, od(r, t);
  });
}
const sd = (r, e, t, n, a) => {
  const i = a === "forward";
  switch (a) {
    case "backward":
    case "forward":
      return t !== (i ? r.table.columns - 1 : 0) ? qa(e.getCellNodeFromCordsOrThrow(t + (i ? 1 : -1), n, r.table), i) : n !== (i ? r.table.rows - 1 : 0) ? qa(e.getCellNodeFromCordsOrThrow(i ? 0 : r.table.columns - 1, n + (i ? 1 : -1), r.table), i) : i ? e.selectNext() : e.selectPrevious(), !0;
    case "up":
      return n !== 0 ? qa(e.getCellNodeFromCordsOrThrow(t, n - 1, r.table), !1) : e.selectPrevious(), !0;
    case "down":
      return n !== r.table.rows - 1 ? qa(e.getCellNodeFromCordsOrThrow(t, n + 1, r.table), !0) : e.selectNext(), !0;
    default:
      return !1;
  }
}, ff = (r, e, t, n, a) => {
  const i = a === "forward";
  switch (a) {
    case "backward":
    case "forward":
      return t !== (i ? r.table.columns - 1 : 0) && r.setFocusCellForSelection(e.getDOMCellFromCordsOrThrow(t + (i ? 1 : -1), n, r.table)), !0;
    case "up":
      return n !== 0 && (r.setFocusCellForSelection(e.getDOMCellFromCordsOrThrow(t, n - 1, r.table)), !0);
    case "down":
      return n !== r.table.rows - 1 && (r.setFocusCellForSelection(e.getDOMCellFromCordsOrThrow(t, n + 1, r.table)), !0);
    default:
      return !1;
  }
};
function Xr(r, e) {
  if (U(r) || Oe(r)) {
    const t = e.isParentOf(r.anchor.getNode()), n = e.isParentOf(r.focus.getNode());
    return t && n;
  }
  return !1;
}
function qa(r, e) {
  e ? r.selectStart() : r.selectEnd();
}
const Xi = "172,206,247";
function od(r, e) {
  const t = e.elem, n = Qe(t);
  ae(n) || Ce(131), n.getBackgroundColor() === null ? t.style.setProperty("background-color", `rgb(${Xi})`) : t.style.setProperty("background-image", `linear-gradient(to right, rgba(${Xi},0.85), rgba(${Xi},0.85))`), t.style.setProperty("caret-color", "transparent");
}
function ld(r, e) {
  const t = e.elem, n = Qe(t);
  ae(n) || Ce(131), n.getBackgroundColor() === null && t.style.removeProperty("background-color"), t.style.removeProperty("background-image"), t.style.removeProperty("caret-color");
}
function Ji(r) {
  const e = me(r, ae);
  return ae(e) ? e : null;
}
function En(r) {
  const e = me(r, We);
  return We(e) ? e : null;
}
function na(r, e, t, n, a) {
  if ((t === "up" || t === "down") && function(s) {
    const o = s.getRootElement();
    return o ? o.hasAttribute("aria-controls") && o.getAttribute("aria-controls") === "typeahead-menu" : !1;
  }(r)) return !1;
  const i = j();
  if (!Xr(i, n)) {
    if (U(i)) {
      if (i.isCollapsed() && t === "backward") {
        const s = i.anchor.type, o = i.anchor.offset;
        if (s !== "element" && (s !== "text" || o !== 0)) return !1;
        const l = i.anchor.getNode();
        if (!l) return !1;
        const c = me(l, (d) => ue(d) && !d.isInline());
        if (!c) return !1;
        const u = c.getPreviousSibling();
        return !(!u || !We(u)) && (pr(e), u.selectEnd(), !0);
      }
      if (e.shiftKey && (t === "up" || t === "down")) {
        const s = i.focus.getNode();
        if (!i.isCollapsed() && (t === "up" && !i.isBackward() || t === "down" && i.isBackward())) {
          let o = me(s, (m) => We(m));
          if (ae(o) && (o = me(o, We)), o !== n || !o) return !1;
          const l = t === "down" ? o.getNextSibling() : o.getPreviousSibling();
          if (!l) return !1;
          let c = 0;
          t === "up" && ue(l) && (c = l.getChildrenSize());
          let u = l;
          t === "up" && ue(l) && (u = l.getLastChild() || l, c = Se(u) ? u.getTextContentSize() : 0);
          const d = i.clone();
          return d.focus.set(u.getKey(), c, Se(u) ? "text" : "element"), xt(d), pr(e), !0;
        }
        if (zt(s)) {
          const o = t === "up" ? i.getNodes()[i.getNodes().length - 1] : i.getNodes()[0];
          if (o) {
            const l = me(o, ae);
            if (l && n.isParentOf(l)) {
              const c = n.getFirstDescendant(), u = n.getLastDescendant();
              if (!c || !u) return !1;
              const [d] = vt(c), [m] = vt(u), g = n.getCordsFromCellNode(d, a.table), v = n.getCordsFromCellNode(m, a.table), b = n.getDOMCellFromCordsOrThrow(g.x, g.y, a.table), x = n.getDOMCellFromCordsOrThrow(v.x, v.y, a.table);
              return a.setAnchorCellForSelection(b), a.setFocusCellForSelection(x, !0), !0;
            }
          }
          return !1;
        }
        {
          let o = me(s, (c) => ue(c) && !c.isInline());
          if (ae(o) && (o = me(o, We)), !o) return !1;
          const l = t === "down" ? o.getNextSibling() : o.getPreviousSibling();
          if (We(l) && a.tableNodeKey === l.getKey()) {
            const c = l.getFirstDescendant(), u = l.getLastDescendant();
            if (!c || !u) return !1;
            const [d] = vt(c), [m] = vt(u), g = i.clone();
            return g.focus.set((t === "up" ? d : m).getKey(), t === "up" ? 0 : m.getChildrenSize(), "element"), pr(e), xt(g), !0;
          }
        }
      }
    }
    return !1;
  }
  if (U(i) && i.isCollapsed()) {
    const { anchor: s, focus: o } = i, l = me(s.getNode(), ae), c = me(o.getNode(), ae);
    if (!ae(l) || !l.is(c)) return !1;
    const u = En(l);
    if (u !== n && u != null) {
      const S = r.getElementByKey(u.getKey());
      if (S != null) return a.table = sa(S), na(r, e, t, u, a);
    }
    if (t === "backward" || t === "forward") {
      const S = s.type, w = s.offset, C = s.getNode();
      if (!C) return !1;
      const N = i.getNodes();
      return (N.length !== 1 || !wr(N[0])) && !!function(k, E, I, D) {
        return function(M, F, z) {
          return M === "element" && (z === "backward" ? F.getPreviousSibling() === null : F.getNextSibling() === null);
        }(k, I, D) || function(M, F, z, $) {
          const P = me(z, (Y) => ue(Y) && !Y.isInline());
          if (!P) return !1;
          const X = $ === "backward" ? F === 0 : F === z.getTextContentSize();
          return M === "text" && X && ($ === "backward" ? P.getPreviousSibling() === null : P.getNextSibling() === null);
        }(k, E, I, D);
      }(S, w, C, t) && function(k, E, I, D) {
        const M = me(E, ae);
        if (!ae(M)) return !1;
        const [F, z] = Kt(I, M, M);
        if (!function(P, X, Y) {
          const re = P[0][0], de = P[P.length - 1][P[0].length - 1], { startColumn: J, startRow: he } = X;
          return Y === "backward" ? J === re.startColumn && he === re.startRow : J === de.startColumn && he === de.startRow;
        }(F, z, D)) return !1;
        const $ = function(P, X, Y) {
          const re = me(P, (J) => ue(J) && !J.isInline());
          if (!re) return;
          const de = X === "backward" ? re.getPreviousSibling() : re.getNextSibling();
          return de && We(de) ? de : X === "backward" ? Y.getPreviousSibling() : Y.getNextSibling();
        }(E, D, I);
        return !$ || We($) ? !1 : (pr(k), D === "backward" ? $.selectEnd() : $.selectStart(), !0);
      }(e, C, n, t);
    }
    const d = r.getElementByKey(l.__key), m = r.getElementByKey(s.key);
    if (m == null || d == null) return !1;
    let g;
    if (s.type === "element") g = m.getBoundingClientRect();
    else {
      const S = window.getSelection();
      if (S === null || S.rangeCount === 0) return !1;
      g = S.getRangeAt(0).getBoundingClientRect();
    }
    const v = t === "up" ? l.getFirstChild() : l.getLastChild();
    if (v == null) return !1;
    const b = r.getElementByKey(v.__key);
    if (b == null) return !1;
    const x = b.getBoundingClientRect();
    if (t === "up" ? x.top > g.top - g.height : g.bottom + g.height > x.bottom) {
      pr(e);
      const S = n.getCordsFromCellNode(l, a.table);
      if (!e.shiftKey) return sd(a, n, S.x, S.y, t);
      {
        const w = n.getDOMCellFromCordsOrThrow(S.x, S.y, a.table);
        a.setAnchorCellForSelection(w), a.setFocusCellForSelection(w, !0);
      }
      return !0;
    }
  } else if (Oe(i)) {
    const { anchor: s, focus: o } = i, l = me(s.getNode(), ae), c = me(o.getNode(), ae), [u] = i.getNodes(), d = r.getElementByKey(u.getKey());
    if (!ae(l) || !ae(c) || !We(u) || d == null) return !1;
    a.updateTableTableSelection(i);
    const m = sa(d), g = n.getCordsFromCellNode(l, m), v = n.getDOMCellFromCordsOrThrow(g.x, g.y, m);
    if (a.setAnchorCellForSelection(v), pr(e), e.shiftKey) {
      const b = n.getCordsFromCellNode(c, m);
      return ff(a, u, b.x, b.y, t);
    }
    return c.selectEnd(), !0;
  }
  return !1;
}
function pr(r) {
  r.preventDefault(), r.stopImmediatePropagation(), r.stopPropagation();
}
function kl(r, e, t) {
  const n = xe();
  r === "first" ? e.insertBefore(n) : e.insertAfter(n), n.append(...t || []), n.selectEnd();
}
function El(r, e, t) {
  const n = t.getParent();
  if (!n) return;
  const a = r.getElementByKey(n.getKey());
  if (!a) return;
  const i = window.getSelection();
  if (!i || i.anchorNode !== a) return;
  const s = me(e.anchor.getNode(), (x) => ae(x));
  if (!s) return;
  const o = me(s, (x) => We(x));
  if (!We(o) || !o.is(t)) return;
  const [l, c] = Kt(t, s, s), u = l[0][0], d = l[l.length - 1][l[0].length - 1], { startRow: m, startColumn: g } = c, v = m === u.startRow && g === u.startColumn, b = m === d.startRow && g === d.startColumn;
  return v ? "first" : b ? "last" : void 0;
}
function Tl(r, e, t, n) {
  const a = r.querySelector("colgroup");
  if (!a) return;
  const i = [];
  for (let s = 0; s < t; s++) {
    const o = document.createElement("col"), l = n && n[s];
    l && (o.style.width = `${l}px`), i.push(o);
  }
  a.replaceChildren(...i);
}
function Nl(r, e, t) {
  t ? (et(r, e.theme.tableRowStriping), r.setAttribute("data-lexical-row-striping", "true")) : (pn(r, e.theme.tableRowStriping), r.removeAttribute("data-lexical-row-striping"));
}
class or extends St {
  static getType() {
    return "table";
  }
  getColWidths() {
    return this.getLatest().__colWidths;
  }
  setColWidths(e) {
    const t = this.getWritable();
    return t.__colWidths = e, t;
  }
  static clone(e) {
    return new or(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping;
  }
  static importDOM() {
    return { table: (e) => ({ conversion: pf, priority: 1 }) };
  }
  static importJSON(e) {
    const t = Po();
    return t.__rowStriping = e.rowStriping || !1, t.__colWidths = e.colWidths, t;
  }
  constructor(e) {
    super(e), this.__rowStriping = !1;
  }
  exportJSON() {
    return { ...super.exportJSON(), colWidths: this.getColWidths(), rowStriping: this.__rowStriping ? this.__rowStriping : void 0, type: "table", version: 1 };
  }
  createDOM(e, t) {
    const n = document.createElement("table"), a = document.createElement("colgroup");
    return n.appendChild(a), Tl(n, 0, this.getColumnCount(), this.getColWidths()), et(n, e.theme.table), this.__rowStriping && Nl(n, e, !0), n;
  }
  updateDOM(e, t, n) {
    return e.__rowStriping !== this.__rowStriping && Nl(t, n, this.__rowStriping), Tl(t, 0, this.getColumnCount(), this.getColWidths()), !1;
  }
  exportDOM(e) {
    return { ...super.exportDOM(e), after: (t) => {
      if (t) {
        const n = t.cloneNode(), a = document.createElement("colgroup"), i = document.createElement("tbody");
        if (Cr(t)) {
          const s = t.querySelectorAll("col");
          a.append(...s);
          const o = t.querySelectorAll("tr");
          i.append(...o);
        }
        return n.replaceChildren(a, i), n;
      }
    } };
  }
  canBeEmpty() {
    return !1;
  }
  isShadowRoot() {
    return !0;
  }
  getCordsFromCellNode(e, t) {
    const { rows: n, domRows: a } = t;
    for (let i = 0; i < n; i++) {
      const s = a[i];
      if (s == null) continue;
      const o = s.findIndex((l) => {
        if (!l) return;
        const { elem: c } = l;
        return Qe(c) === e;
      });
      if (o !== -1) return { x: o, y: i };
    }
    throw new Error("Cell not found in table.");
  }
  getDOMCellFromCords(e, t, n) {
    const { domRows: a } = n, i = a[t];
    if (i == null) return null;
    const s = i[e < i.length ? e : i.length - 1];
    return s ?? null;
  }
  getDOMCellFromCordsOrThrow(e, t, n) {
    const a = this.getDOMCellFromCords(e, t, n);
    if (!a) throw new Error("Cell not found at cords.");
    return a;
  }
  getCellNodeFromCords(e, t, n) {
    const a = this.getDOMCellFromCords(e, t, n);
    if (a == null) return null;
    const i = Qe(a.elem);
    return ae(i) ? i : null;
  }
  getCellNodeFromCordsOrThrow(e, t, n) {
    const a = this.getCellNodeFromCords(e, t, n);
    if (!a) throw new Error("Node at cords not TableCellNode.");
    return a;
  }
  getRowStriping() {
    return !!this.getLatest().__rowStriping;
  }
  setRowStriping(e) {
    this.getWritable().__rowStriping = e;
  }
  canSelectBefore() {
    return !0;
  }
  canIndent() {
    return !1;
  }
  getColumnCount() {
    const e = this.getFirstChild();
    if (!e) return 0;
    let t = 0;
    return e.getChildren().forEach((n) => {
      ae(n) && (t += n.getColSpan());
    }), t;
  }
}
function pf(r) {
  const e = Po();
  r.hasAttribute("data-lexical-row-striping") && e.setRowStriping(!0);
  const t = r.querySelector(":scope > colgroup");
  if (t) {
    let n = [];
    for (const a of t.querySelectorAll(":scope > col")) {
      const i = a.style.width;
      if (!i || !Do.test(i)) {
        n = void 0;
        break;
      }
      n.push(parseFloat(i));
    }
    n && e.setColWidths(n);
  }
  return { node: e };
}
function Po() {
  return ut(new or());
}
function We(r) {
  return r instanceof or;
}
function gf({ nodeKey: r }) {
  const [e] = se(), [t, n, a] = No(r), i = ie(
    (s) => {
      if (s.preventDefault(), t && gt(j())) {
        const o = bt(r);
        if (bf(o))
          return o.remove(), !0;
      }
      return !1;
    },
    [t, r]
  );
  return B(() => Re(
    e.registerCommand(
      wa,
      (s) => {
        const o = e.getElementByKey(r);
        return s.target === o ? (s.shiftKey || a(), n(!t), !0) : !1;
      },
      ye
    ),
    e.registerCommand(
      xa,
      i,
      ye
    ),
    e.registerCommand(
      ya,
      i,
      ye
    )
  ), [a, e, t, r, i, n]), B(() => {
    const s = e.getElementByKey(r);
    s !== null && (s.className = t ? "selected" : "");
  }, [e, t, r]), null;
}
class Bn extends ur {
  static getType() {
    return "page-break";
  }
  static clone(e) {
    return new Bn(e.__key);
  }
  static importJSON() {
    return Bo();
  }
  static importDOM() {
    return {
      figure: (e) => e.getAttribute("type") !== this.getType() ? null : {
        conversion: vf,
        priority: Lt
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
    const e = document.createElement("figure");
    return e.style.pageBreakAfter = "always", e.setAttribute("type", this.getType()), e;
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
    return /* @__PURE__ */ p.jsx(gf, { nodeKey: this.__key });
  }
}
function vf() {
  return { node: Bo() };
}
function Bo() {
  return new Bn();
}
function bf(r) {
  return r instanceof Bn;
}
class Aa extends $r {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__className");
    this.__className = t;
  }
  static getType() {
    return "emoji";
  }
  static clone(t) {
    return new Aa(t.__className, t.__text, t.__key);
  }
  createDOM(t) {
    const n = document.createElement("span"), a = super.createDOM(t);
    return n.className = this.__className, a.className = "emoji-inner", n.appendChild(a), n;
  }
  updateDOM(t, n, a) {
    const i = n.firstChild;
    return i === null ? !0 : (super.updateDOM(t, i, a), !1);
  }
  static importJSON(t) {
    const n = ud(
      t.className,
      t.text
    );
    return n.setFormat(t.format), n.setDetail(t.detail), n.setMode(t.mode), n.setStyle(t.style), n;
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
function ud(r, e) {
  const t = new Aa(r, e).setMode("token");
  return ut(t);
}
const yf = mt.lazy(() => import("./ImageComponent-BPwfgn5n.js"));
function xf(r) {
  const e = r;
  if (e.src.startsWith("file:///"))
    return null;
  const { alt: t, src: n, width: a, height: i } = e;
  return { node: jo({ altText: t, height: i, src: n, width: a }) };
}
class jn extends ur {
  constructor(t, n, a, i, s, o, l, c, u, d, m, g) {
    super(u);
    ne(this, "__src");
    ne(this, "__altText");
    ne(this, "__width");
    ne(this, "__height");
    ne(this, "__maxWidth");
    ne(this, "__showCaption");
    ne(this, "__caption");
    // Captions cannot yet be used within editor cells
    ne(this, "__captionsEnabled");
    ne(this, "__isAbsolute");
    ne(this, "__x");
    ne(this, "__y");
    this.__src = t, this.__altText = n, this.__maxWidth = a, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || va(), this.__captionsEnabled = c || c === void 0, this.__isAbsolute = d || !1, this.__x = m || 0, this.__y = g || 0;
  }
  static getType() {
    return "image";
  }
  static clone(t) {
    return new jn(
      t.__src,
      t.__altText,
      t.__maxWidth,
      t.__width,
      t.__height,
      t.__showCaption,
      t.__caption,
      t.__captionsEnabled,
      t.__key,
      t.__isAbsolute,
      t.__x,
      t.__y
    );
  }
  static importJSON(t) {
    const {
      altText: n,
      height: a,
      width: i,
      maxWidth: s,
      caption: o,
      src: l,
      showCaption: c,
      isAbsolute: u,
      xOffset: d,
      yOffset: m
    } = t, g = jo({
      altText: n,
      height: a,
      maxWidth: s,
      showCaption: c,
      src: l,
      width: i,
      isAbsolute: u,
      xOffset: d,
      yOffset: m
    }), v = g.__caption, b = v.parseEditorState(o.editorState);
    return b.isEmpty() || v.setEditorState(b), g;
  }
  exportDOM() {
    const t = document.createElement("img");
    return t.setAttribute("src", this.__src), t.setAttribute("alt", this.__altText), t.setAttribute("width", this.__width.toString()), t.setAttribute("height", this.__height.toString()), t.setAttribute("style", "max-width: 100%; object-fit: contain;"), { element: t };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: xf,
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
  setWidthAndHeight(t, n) {
    const a = this.getWritable();
    a.__width = t, a.__height = n;
  }
  setShowCaption(t) {
    const n = this.getWritable();
    n.__showCaption = t;
  }
  setAbsolute(t) {
    const n = this.getWritable();
    n.__isAbsolute = t;
  }
  setPosition(t, n) {
    const a = this.getWritable();
    a.__x = t, a.__y = n, xt(null);
  }
  // View
  createDOM(t) {
    const n = document.createElement("span"), i = t.theme.image;
    return i !== void 0 && (n.className = i), n;
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
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      yf,
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
function jo({
  altText: r,
  height: e,
  maxWidth: t = 500,
  captionsEnabled: n,
  src: a,
  width: i,
  showCaption: s,
  caption: o,
  key: l,
  xOffset: c,
  yOffset: u,
  isAbsolute: d
}) {
  return ut(
    new jn(
      a,
      r,
      t,
      i,
      e,
      s,
      o,
      n,
      l,
      d,
      c,
      u
    )
  );
}
function wf(r) {
  return r instanceof jn;
}
class An extends $r {
  static getType() {
    return "keyword";
  }
  static clone(e) {
    return new An(e.__text, e.__key);
  }
  static importJSON(e) {
    const t = cd(e.text);
    return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "keyword",
      version: 1
    };
  }
  createDOM(e) {
    const t = super.createDOM(e);
    return t.style.cursor = "default", t.className = "keyword", t;
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
function cd(r) {
  return new An(r);
}
let Mi = class extends ur {
  constructor(e, t) {
    super(t), this.__format = e || "";
  }
  exportJSON() {
    return { format: this.__format || "", type: "decorator-block", version: 1 };
  }
  canIndent() {
    return !1;
  }
  createDOM() {
    return document.createElement("div");
  }
  updateDOM() {
    return !1;
  }
  setFormat(e) {
    this.getWritable().__format = e;
  }
  isInline() {
    return !1;
  }
};
function $s(r) {
  return r instanceof Mi;
}
function $o({ children: r, format: e, nodeKey: t, className: n }) {
  const [a] = se(), [i, s, o] = No(t), l = Te(null), c = ie((u) => {
    const d = j();
    return i && gt(d) && (u.preventDefault(), a.update(() => {
      d.getNodes().forEach((m) => {
        wr(m) && m.remove();
      });
    })), !1;
  }, [a, i]);
  return B(() => Re(a.registerCommand(er, (u) => {
    if (i) {
      const d = j();
      if (gt(d)) {
        const m = bt(t);
        $s(m) && m.setFormat(u);
      } else if (U(d)) {
        const m = d.getNodes();
        for (const g of m) $s(g) ? g.setFormat(u) : Ti(g).setFormat(u);
      }
      return !0;
    }
    return !1;
  }, ye), a.registerCommand(wa, (u) => u.target === l.current && (u.preventDefault(), u.shiftKey || o(), s(!i), !0), ye), a.registerCommand(xa, c, ye), a.registerCommand(ya, c, ye)), [o, a, i, t, c, s]), p.jsx("div", { className: [n.base, i ? n.focus : null].filter(Boolean).join(" "), ref: l, style: { textAlign: e || void 0 }, children: r });
}
function Sf({
  className: r,
  format: e,
  nodeKey: t,
  documentID: n
}) {
  return /* @__PURE__ */ p.jsx(
    $o,
    {
      className: r,
      format: e,
      nodeKey: t,
      children: /* @__PURE__ */ p.jsx(
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
class Ma extends Mi {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "figma";
  }
  static clone(t) {
    return new Ma(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = dd(t.documentID);
    return n.setFormat(t.format), n;
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
  decorate(t, n) {
    const a = n.theme.embedBlock || {}, i = {
      base: a.base || "",
      focus: a.focus || ""
    };
    return /* @__PURE__ */ p.jsx(
      Sf,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        documentID: this.__id
      }
    );
  }
}
function dd(r) {
  return new Ma(r);
}
const _f = "https://platform.twitter.com/widgets.js";
function Cf(r) {
  const e = r.getAttribute("data-lexical-tweet-id");
  return e ? { node: Ho(e) } : null;
}
let Al = !0;
function kf({
  className: r,
  format: e,
  loadingComponent: t,
  nodeKey: n,
  onError: a,
  onLoad: i,
  tweetID: s
}) {
  const o = Te(null), l = Te(""), [c, u] = q(!1), d = ie(async () => {
    try {
      await window.twttr.widgets.createTweet(s, o.current), u(!1), Al = !1, i && i();
    } catch (m) {
      a && a(String(m));
    }
  }, [a, i, s]);
  return B(() => {
    var m;
    if (s !== l.current) {
      if (u(!0), Al) {
        const g = document.createElement("script");
        g.src = _f, g.async = !0, (m = document.body) == null || m.appendChild(g), g.onload = d, a && (g.onerror = a);
      } else
        d();
      l && (l.current = s);
    }
  }, [d, a, s]), /* @__PURE__ */ p.jsxs(
    $o,
    {
      className: r,
      format: e,
      nodeKey: n,
      children: [
        c ? t : null,
        /* @__PURE__ */ p.jsx(
          "div",
          {
            style: { display: "inline-block", width: "550px" },
            ref: o
          }
        )
      ]
    }
  );
}
class Oa extends Mi {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "tweet";
  }
  static clone(t) {
    return new Oa(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = Ho(t.id);
    return n.setFormat(t.format), n;
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
      div: (t) => t.hasAttribute("data-lexical-tweet-id") ? {
        conversion: Cf,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const t = document.createElement("div");
    t.setAttribute("data-lexical-tweet-id", this.__id);
    const n = document.createTextNode(this.getTextContent());
    return t.append(n), { element: t };
  }
  getId() {
    return this.__id;
  }
  getTextContent(t, n) {
    return `https://x.com/i/web/status/${this.__id}`;
  }
  decorate(t, n) {
    const a = n.theme.embedBlock || {}, i = {
      base: a.base || "",
      focus: a.focus || ""
    };
    return /* @__PURE__ */ p.jsx(
      kf,
      {
        className: i,
        format: this.__format,
        loadingComponent: "Loading...",
        nodeKey: this.getKey(),
        tweetID: this.__id
      }
    );
  }
}
function Ho(r) {
  return new Oa(r);
}
function Ef({
  className: r,
  format: e,
  nodeKey: t,
  videoID: n
}) {
  return /* @__PURE__ */ p.jsx(
    $o,
    {
      className: r,
      format: e,
      nodeKey: t,
      children: /* @__PURE__ */ p.jsx(
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
function Tf(r) {
  const e = r.getAttribute("data-lexical-youtube");
  return e ? { node: qo(e) } : null;
}
class Da extends Mi {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "youtube";
  }
  static clone(t) {
    return new Da(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = qo(t.videoID);
    return n.setFormat(t.format), n;
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
    const t = document.createElement("iframe");
    return t.setAttribute("data-lexical-youtube", this.__id), t.setAttribute("width", "560"), t.setAttribute("height", "315"), t.setAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${this.__id}`
    ), t.setAttribute("frameborder", "0"), t.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ), t.setAttribute("allowfullscreen", "true"), t.setAttribute("title", "YouTube video"), { element: t };
  }
  static importDOM() {
    return {
      iframe: (t) => t.hasAttribute("data-lexical-youtube") ? {
        conversion: Tf,
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
  getTextContent(t, n) {
    return `https://www.youtube.com/watch?v=${this.__id}`;
  }
  decorate(t, n) {
    const a = n.theme.embedBlock || {}, i = {
      base: a.base || "",
      focus: a.focus || ""
    };
    return /* @__PURE__ */ p.jsx(
      Ef,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
}
function qo(r) {
  return new Da(r);
}
function Nf(r) {
  const e = r.open !== void 0 ? r.open : !0;
  return {
    node: Uo(e)
  };
}
class an extends St {
  constructor(t, n) {
    super(n);
    ne(this, "__open");
    this.__open = t;
  }
  static getType() {
    return "collapsible-container";
  }
  static clone(t) {
    return new an(t.__open, t.__key);
  }
  createDOM(t, n) {
    const a = document.createElement("details");
    return a.classList.add("Collapsible__container"), a.open = this.__open, a.addEventListener("toggle", () => {
      n.getEditorState().read(() => this.getOpen()) !== a.open && n.update(() => this.toggleOpen());
    }), a;
  }
  updateDOM(t, n) {
    return t.__open !== this.__open && (n.open = this.__open), !1;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      details: (t) => ({
        conversion: Nf,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Uo(t.open);
  }
  exportDOM() {
    const t = document.createElement("details");
    return t.setAttribute("open", this.__open.toString()), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      open: this.__open,
      type: "collapsible-container",
      version: 1
    };
  }
  setOpen(t) {
    const n = this.getWritable();
    n.__open = t;
  }
  getOpen() {
    return this.getLatest().__open;
  }
  toggleOpen() {
    this.setOpen(!this.getOpen());
  }
}
function Uo(r) {
  return new an(r);
}
function fr(r) {
  return r instanceof an;
}
function Af(r) {
  return {
    node: Ko()
  };
}
class sn extends St {
  static getType() {
    return "collapsible-content";
  }
  static clone(e) {
    return new sn(e.__key);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(e) {
    const t = document.createElement("div");
    return t.classList.add("Collapsible__content"), t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return {
      div: (e) => e.hasAttribute("data-lexical-collapsible-content") ? {
        conversion: Af,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const e = document.createElement("div");
    return e.setAttribute("data-lexical-collapsible-content", "true"), { element: e };
  }
  static importJSON(e) {
    return Ko();
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
function Ko() {
  return new sn();
}
function hd(r) {
  return r instanceof sn;
}
function Mf(r) {
  return {
    node: Wo()
  };
}
class on extends St {
  static getType() {
    return "collapsible-title";
  }
  static clone(e) {
    return new on(e.__key);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDOM(e, t) {
    const n = document.createElement("summary");
    return n.classList.add("Collapsible__title"), n;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      summary: (e) => ({
        conversion: Mf,
        priority: 1
      })
    };
  }
  static importJSON(e) {
    return Wo();
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
  collapseAtStart(e) {
    return this.getParentOrThrow().insertBefore(this), !0;
  }
  insertNewAfter(e, t = !0) {
    const n = this.getParentOrThrow();
    if (!fr(n))
      throw new Error(
        "CollapsibleTitleNode expects to be child of CollapsibleContainerNode"
      );
    if (n.getOpen()) {
      const a = this.getNextSibling();
      if (!hd(a))
        throw new Error(
          "CollapsibleTitleNode expects to have CollapsibleContentNode sibling"
        );
      const i = a.getFirstChild();
      if (ue(i))
        return i;
      {
        const s = xe();
        return a.append(s), s;
      }
    } else {
      const a = xe();
      return n.insertAfter(a, t), a;
    }
  }
}
function Wo() {
  return new on();
}
function Ml(r) {
  return r instanceof on;
}
class Ft {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Ft(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Wt {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Wt(t, Ft.range(this, e));
  }
}
class G {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var n = "KaTeX parse error: " + e, a, i, s = t && t.loc;
    if (s && s.start <= s.end) {
      var o = s.lexer.input;
      a = s.start, i = s.end, a === o.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var l = o.slice(a, i).replace(/[^]/g, "$&̲"), c;
      a > 15 ? c = "…" + o.slice(a - 15, a) : c = o.slice(0, a);
      var u;
      i + 15 < o.length ? u = o.slice(i, i + 15) + "…" : u = o.slice(i), n += c + l + u;
    }
    var d = new Error(n);
    return d.name = "ParseError", d.__proto__ = G.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
G.prototype.__proto__ = Error.prototype;
var Of = function(e, t) {
  return e.indexOf(t) !== -1;
}, Df = function(e, t) {
  return e === void 0 ? t : e;
}, Rf = /([A-Z])/g, If = function(e) {
  return e.replace(Rf, "-$1").toLowerCase();
}, Ff = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Lf = /[&><"']/g;
function zf(r) {
  return String(r).replace(Lf, (e) => Ff[e]);
}
var md = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, Pf = function(e) {
  var t = md(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Bf = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, jf = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ce = {
  contains: Of,
  deflt: Df,
  escape: zf,
  hyphenate: If,
  getBaseElem: md,
  isCharacterBox: Pf,
  protocolFromUrl: jf
}, ni = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (r) => "#" + r
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (r, e) => (e.push(r), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (r) => Math.max(0, r),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (r) => Math.max(0, r),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (r) => Math.max(0, r),
    cli: "-e, --max-expand <n>",
    cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function $f(r) {
  if (r.default)
    return r.default;
  var e = r.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class Go {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in ni)
      if (ni.hasOwnProperty(t)) {
        var n = ni[t];
        this[t] = e[t] !== void 0 ? n.processor ? n.processor(e[t]) : e[t] : $f(n);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, n) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, n)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new G("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, n) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, n);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = ce.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class Ar {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return tr[Hf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return tr[qf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return tr[Uf[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return tr[Kf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return tr[Wf[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return tr[Gf[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Yo = 0, mi = 1, Nn = 2, Sr = 3, pa = 4, Ut = 5, Mn = 6, Tt = 7, tr = [new Ar(Yo, 0, !1), new Ar(mi, 0, !0), new Ar(Nn, 1, !1), new Ar(Sr, 1, !0), new Ar(pa, 2, !1), new Ar(Ut, 2, !0), new Ar(Mn, 3, !1), new Ar(Tt, 3, !0)], Hf = [pa, Ut, pa, Ut, Mn, Tt, Mn, Tt], qf = [Ut, Ut, Ut, Ut, Tt, Tt, Tt, Tt], Uf = [Nn, Sr, pa, Ut, Mn, Tt, Mn, Tt], Kf = [Sr, Sr, Ut, Ut, Tt, Tt, Tt, Tt], Wf = [mi, mi, Sr, Sr, Ut, Ut, Tt, Tt], Gf = [Yo, mi, Nn, Sr, Nn, Sr, Nn, Sr], pe = {
  DISPLAY: tr[Yo],
  TEXT: tr[Nn],
  SCRIPT: tr[pa],
  SCRIPTSCRIPT: tr[Mn]
}, Hs = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function Yf(r) {
  for (var e = 0; e < Hs.length; e++)
    for (var t = Hs[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var ai = [];
Hs.forEach((r) => r.blocks.forEach((e) => ai.push(...e)));
function fd(r) {
  for (var e = 0; e < ai.length; e += 2)
    if (r >= ai[e] && r <= ai[e + 1])
      return !0;
  return !1;
}
var _n = 80, Vf = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Xf = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Jf = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Zf = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Qf = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, ep = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, tp = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, rp = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = Vf(t, _n);
      break;
    case "sqrtSize1":
      a = Xf(t, _n);
      break;
    case "sqrtSize2":
      a = Jf(t, _n);
      break;
    case "sqrtSize3":
      a = Zf(t, _n);
      break;
    case "sqrtSize4":
      a = Qf(t, _n);
      break;
    case "sqrtTall":
      a = tp(t, _n, n);
  }
  return a;
}, np = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Ol = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
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
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
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
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
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
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
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
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, ap = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class Ra {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ce.contains(this.classes, e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var ar = {
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
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
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
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
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
    160: [0, 0, 0, 0, 0.25]
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
    58119: [0, 0.47534, 0, 0, 0.50073]
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
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
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
    57376: [0.19444, 0.69444, 0, 0, 0]
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
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
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
    8463: [0, 0.68889, 0, 0, 0.54028]
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
    8904: [5e-3, 0.505, 0, 0, 0.9],
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
    57376: [0.19444, 0.69444, 0, 0, 0]
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
    82: [0, 0.68611, 421e-5, 0, 0.87235],
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
    108: [0, 0.69444, 88e-4, 0, 0.34815],
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
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
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
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
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
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
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
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
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
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
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
    97: [0, 0.44444, 981e-5, 0, 0.48056],
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
    8221: [0, 0.69444, 316e-5, 0, 0.5]
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
    8221: [0, 0.69444, 0, 0, 0.5]
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
    160: [0, 0, 0, 0, 0.25]
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
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
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
    10758: [0.25001, 0.75, 0, 0, 0.83334]
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
    10758: [0.55001, 1.05, 0, 0, 1.11111]
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
    10217: [0.95003, 1.45, 0, 0, 0.75]
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
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
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
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Ua = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, Dl = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function ip(r, e) {
  ar[r] = e;
}
function Vo(r, e, t) {
  if (!ar[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = ar[e][n];
  if (!a && r[0] in Dl && (n = Dl[r[0]].charCodeAt(0), a = ar[e][n]), !a && t === "text" && fd(n) && (a = ar[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Zi = {};
function sp(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Zi[e]) {
    var t = Zi[e] = {
      cssEmPerMu: Ua.quad[e] / 18
    };
    for (var n in Ua)
      Ua.hasOwnProperty(n) && (t[n] = Ua[n][e]);
  }
  return Zi[e];
}
var op = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], Rl = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], Il = function(e, t) {
  return t.size < 2 ? e : op[e - 1][t.size - 1];
};
class gr {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || gr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Rl[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
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
      minRuleThickness: this.minRuleThickness
    };
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
    return new gr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Il(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Rl[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Il(gr.BASESIZE, e);
    return this.size === t && this.textSize === gr.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== gr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + gr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = sp(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
gr.BASESIZE = 6;
var qs = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, lp = {
  ex: !0,
  em: !0,
  mu: !0
}, pd = function(e) {
  return typeof e != "string" && (e = e.unit), e in qs || e in lp || e === "ex";
}, Xe = function(e, t) {
  var n;
  if (e.unit in qs)
    n = qs[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, V = function(e) {
  return +e.toFixed(4) + "em";
}, Fr = function(e) {
  return e.filter((t) => t).join(" ");
}, gd = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, vd = function(e) {
  var t = document.createElement(e);
  t.className = Fr(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, bd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ce.escape(Fr(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += ce.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + ce.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ce.escape(this.attributes[i]) + '"');
  t += ">";
  for (var s = 0; s < this.children.length; s++)
    t += this.children[s].toMarkup();
  return t += "</" + e + ">", t;
};
class Ia {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, gd.call(this, e, n, a), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ce.contains(this.classes, e);
  }
  toNode() {
    return vd.call(this, "span");
  }
  toMarkup() {
    return bd.call(this, "span");
  }
}
class Xo {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, gd.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ce.contains(this.classes, e);
  }
  toNode() {
    return vd.call(this, "a");
  }
  toMarkup() {
    return bd.call(this, "a");
  }
}
class up {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return ce.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ce.escape(this.src) + '"' + (' alt="' + ce.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += ce.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + ce.escape(t) + '"'), e += "'/>", e;
  }
}
var cp = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Gt {
  constructor(e, t, n, a, i, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var c = Yf(this.text.charCodeAt(0));
    c && this.classes.push(c + "_fallback"), /[îïíì]/.test(this.text) && (this.text = cp[this.text]);
  }
  hasClass(e) {
    return ce.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = V(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Fr(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ce.escape(Fr(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += ce.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + ce.escape(n) + '"');
    var i = ce.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class kr {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ce.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class Lr {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ol[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ce.escape(this.alternate) + '"/>' : '<path d="' + ce.escape(Ol[this.pathName]) + '"/>';
  }
}
class Us {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var n in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, n) && t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ce.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Fl(r) {
  if (r instanceof Gt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function dp(r) {
  if (r instanceof Ia)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var hp = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, mp = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, qe = {
  math: {},
  text: {}
};
function h(r, e, t, n, a, i) {
  qe[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (qe[r][n] = qe[r][a]);
}
var f = "math", H = "text", y = "main", T = "ams", Ye = "accent-token", te = "bin", Nt = "close", $n = "inner", fe = "mathord", ct = "op-token", Bt = "open", Oi = "punct", A = "rel", Nr = "spacing", R = "textord";
h(f, y, A, "≡", "\\equiv", !0);
h(f, y, A, "≺", "\\prec", !0);
h(f, y, A, "≻", "\\succ", !0);
h(f, y, A, "∼", "\\sim", !0);
h(f, y, A, "⊥", "\\perp");
h(f, y, A, "⪯", "\\preceq", !0);
h(f, y, A, "⪰", "\\succeq", !0);
h(f, y, A, "≃", "\\simeq", !0);
h(f, y, A, "∣", "\\mid", !0);
h(f, y, A, "≪", "\\ll", !0);
h(f, y, A, "≫", "\\gg", !0);
h(f, y, A, "≍", "\\asymp", !0);
h(f, y, A, "∥", "\\parallel");
h(f, y, A, "⋈", "\\bowtie", !0);
h(f, y, A, "⌣", "\\smile", !0);
h(f, y, A, "⊑", "\\sqsubseteq", !0);
h(f, y, A, "⊒", "\\sqsupseteq", !0);
h(f, y, A, "≐", "\\doteq", !0);
h(f, y, A, "⌢", "\\frown", !0);
h(f, y, A, "∋", "\\ni", !0);
h(f, y, A, "∝", "\\propto", !0);
h(f, y, A, "⊢", "\\vdash", !0);
h(f, y, A, "⊣", "\\dashv", !0);
h(f, y, A, "∋", "\\owns");
h(f, y, Oi, ".", "\\ldotp");
h(f, y, Oi, "⋅", "\\cdotp");
h(f, y, R, "#", "\\#");
h(H, y, R, "#", "\\#");
h(f, y, R, "&", "\\&");
h(H, y, R, "&", "\\&");
h(f, y, R, "ℵ", "\\aleph", !0);
h(f, y, R, "∀", "\\forall", !0);
h(f, y, R, "ℏ", "\\hbar", !0);
h(f, y, R, "∃", "\\exists", !0);
h(f, y, R, "∇", "\\nabla", !0);
h(f, y, R, "♭", "\\flat", !0);
h(f, y, R, "ℓ", "\\ell", !0);
h(f, y, R, "♮", "\\natural", !0);
h(f, y, R, "♣", "\\clubsuit", !0);
h(f, y, R, "℘", "\\wp", !0);
h(f, y, R, "♯", "\\sharp", !0);
h(f, y, R, "♢", "\\diamondsuit", !0);
h(f, y, R, "ℜ", "\\Re", !0);
h(f, y, R, "♡", "\\heartsuit", !0);
h(f, y, R, "ℑ", "\\Im", !0);
h(f, y, R, "♠", "\\spadesuit", !0);
h(f, y, R, "§", "\\S", !0);
h(H, y, R, "§", "\\S");
h(f, y, R, "¶", "\\P", !0);
h(H, y, R, "¶", "\\P");
h(f, y, R, "†", "\\dag");
h(H, y, R, "†", "\\dag");
h(H, y, R, "†", "\\textdagger");
h(f, y, R, "‡", "\\ddag");
h(H, y, R, "‡", "\\ddag");
h(H, y, R, "‡", "\\textdaggerdbl");
h(f, y, Nt, "⎱", "\\rmoustache", !0);
h(f, y, Bt, "⎰", "\\lmoustache", !0);
h(f, y, Nt, "⟯", "\\rgroup", !0);
h(f, y, Bt, "⟮", "\\lgroup", !0);
h(f, y, te, "∓", "\\mp", !0);
h(f, y, te, "⊖", "\\ominus", !0);
h(f, y, te, "⊎", "\\uplus", !0);
h(f, y, te, "⊓", "\\sqcap", !0);
h(f, y, te, "∗", "\\ast");
h(f, y, te, "⊔", "\\sqcup", !0);
h(f, y, te, "◯", "\\bigcirc", !0);
h(f, y, te, "∙", "\\bullet", !0);
h(f, y, te, "‡", "\\ddagger");
h(f, y, te, "≀", "\\wr", !0);
h(f, y, te, "⨿", "\\amalg");
h(f, y, te, "&", "\\And");
h(f, y, A, "⟵", "\\longleftarrow", !0);
h(f, y, A, "⇐", "\\Leftarrow", !0);
h(f, y, A, "⟸", "\\Longleftarrow", !0);
h(f, y, A, "⟶", "\\longrightarrow", !0);
h(f, y, A, "⇒", "\\Rightarrow", !0);
h(f, y, A, "⟹", "\\Longrightarrow", !0);
h(f, y, A, "↔", "\\leftrightarrow", !0);
h(f, y, A, "⟷", "\\longleftrightarrow", !0);
h(f, y, A, "⇔", "\\Leftrightarrow", !0);
h(f, y, A, "⟺", "\\Longleftrightarrow", !0);
h(f, y, A, "↦", "\\mapsto", !0);
h(f, y, A, "⟼", "\\longmapsto", !0);
h(f, y, A, "↗", "\\nearrow", !0);
h(f, y, A, "↩", "\\hookleftarrow", !0);
h(f, y, A, "↪", "\\hookrightarrow", !0);
h(f, y, A, "↘", "\\searrow", !0);
h(f, y, A, "↼", "\\leftharpoonup", !0);
h(f, y, A, "⇀", "\\rightharpoonup", !0);
h(f, y, A, "↙", "\\swarrow", !0);
h(f, y, A, "↽", "\\leftharpoondown", !0);
h(f, y, A, "⇁", "\\rightharpoondown", !0);
h(f, y, A, "↖", "\\nwarrow", !0);
h(f, y, A, "⇌", "\\rightleftharpoons", !0);
h(f, T, A, "≮", "\\nless", !0);
h(f, T, A, "", "\\@nleqslant");
h(f, T, A, "", "\\@nleqq");
h(f, T, A, "⪇", "\\lneq", !0);
h(f, T, A, "≨", "\\lneqq", !0);
h(f, T, A, "", "\\@lvertneqq");
h(f, T, A, "⋦", "\\lnsim", !0);
h(f, T, A, "⪉", "\\lnapprox", !0);
h(f, T, A, "⊀", "\\nprec", !0);
h(f, T, A, "⋠", "\\npreceq", !0);
h(f, T, A, "⋨", "\\precnsim", !0);
h(f, T, A, "⪹", "\\precnapprox", !0);
h(f, T, A, "≁", "\\nsim", !0);
h(f, T, A, "", "\\@nshortmid");
h(f, T, A, "∤", "\\nmid", !0);
h(f, T, A, "⊬", "\\nvdash", !0);
h(f, T, A, "⊭", "\\nvDash", !0);
h(f, T, A, "⋪", "\\ntriangleleft");
h(f, T, A, "⋬", "\\ntrianglelefteq", !0);
h(f, T, A, "⊊", "\\subsetneq", !0);
h(f, T, A, "", "\\@varsubsetneq");
h(f, T, A, "⫋", "\\subsetneqq", !0);
h(f, T, A, "", "\\@varsubsetneqq");
h(f, T, A, "≯", "\\ngtr", !0);
h(f, T, A, "", "\\@ngeqslant");
h(f, T, A, "", "\\@ngeqq");
h(f, T, A, "⪈", "\\gneq", !0);
h(f, T, A, "≩", "\\gneqq", !0);
h(f, T, A, "", "\\@gvertneqq");
h(f, T, A, "⋧", "\\gnsim", !0);
h(f, T, A, "⪊", "\\gnapprox", !0);
h(f, T, A, "⊁", "\\nsucc", !0);
h(f, T, A, "⋡", "\\nsucceq", !0);
h(f, T, A, "⋩", "\\succnsim", !0);
h(f, T, A, "⪺", "\\succnapprox", !0);
h(f, T, A, "≆", "\\ncong", !0);
h(f, T, A, "", "\\@nshortparallel");
h(f, T, A, "∦", "\\nparallel", !0);
h(f, T, A, "⊯", "\\nVDash", !0);
h(f, T, A, "⋫", "\\ntriangleright");
h(f, T, A, "⋭", "\\ntrianglerighteq", !0);
h(f, T, A, "", "\\@nsupseteqq");
h(f, T, A, "⊋", "\\supsetneq", !0);
h(f, T, A, "", "\\@varsupsetneq");
h(f, T, A, "⫌", "\\supsetneqq", !0);
h(f, T, A, "", "\\@varsupsetneqq");
h(f, T, A, "⊮", "\\nVdash", !0);
h(f, T, A, "⪵", "\\precneqq", !0);
h(f, T, A, "⪶", "\\succneqq", !0);
h(f, T, A, "", "\\@nsubseteqq");
h(f, T, te, "⊴", "\\unlhd");
h(f, T, te, "⊵", "\\unrhd");
h(f, T, A, "↚", "\\nleftarrow", !0);
h(f, T, A, "↛", "\\nrightarrow", !0);
h(f, T, A, "⇍", "\\nLeftarrow", !0);
h(f, T, A, "⇏", "\\nRightarrow", !0);
h(f, T, A, "↮", "\\nleftrightarrow", !0);
h(f, T, A, "⇎", "\\nLeftrightarrow", !0);
h(f, T, A, "△", "\\vartriangle");
h(f, T, R, "ℏ", "\\hslash");
h(f, T, R, "▽", "\\triangledown");
h(f, T, R, "◊", "\\lozenge");
h(f, T, R, "Ⓢ", "\\circledS");
h(f, T, R, "®", "\\circledR");
h(H, T, R, "®", "\\circledR");
h(f, T, R, "∡", "\\measuredangle", !0);
h(f, T, R, "∄", "\\nexists");
h(f, T, R, "℧", "\\mho");
h(f, T, R, "Ⅎ", "\\Finv", !0);
h(f, T, R, "⅁", "\\Game", !0);
h(f, T, R, "‵", "\\backprime");
h(f, T, R, "▲", "\\blacktriangle");
h(f, T, R, "▼", "\\blacktriangledown");
h(f, T, R, "■", "\\blacksquare");
h(f, T, R, "⧫", "\\blacklozenge");
h(f, T, R, "★", "\\bigstar");
h(f, T, R, "∢", "\\sphericalangle", !0);
h(f, T, R, "∁", "\\complement", !0);
h(f, T, R, "ð", "\\eth", !0);
h(H, y, R, "ð", "ð");
h(f, T, R, "╱", "\\diagup");
h(f, T, R, "╲", "\\diagdown");
h(f, T, R, "□", "\\square");
h(f, T, R, "□", "\\Box");
h(f, T, R, "◊", "\\Diamond");
h(f, T, R, "¥", "\\yen", !0);
h(H, T, R, "¥", "\\yen", !0);
h(f, T, R, "✓", "\\checkmark", !0);
h(H, T, R, "✓", "\\checkmark");
h(f, T, R, "ℶ", "\\beth", !0);
h(f, T, R, "ℸ", "\\daleth", !0);
h(f, T, R, "ℷ", "\\gimel", !0);
h(f, T, R, "ϝ", "\\digamma", !0);
h(f, T, R, "ϰ", "\\varkappa");
h(f, T, Bt, "┌", "\\@ulcorner", !0);
h(f, T, Nt, "┐", "\\@urcorner", !0);
h(f, T, Bt, "└", "\\@llcorner", !0);
h(f, T, Nt, "┘", "\\@lrcorner", !0);
h(f, T, A, "≦", "\\leqq", !0);
h(f, T, A, "⩽", "\\leqslant", !0);
h(f, T, A, "⪕", "\\eqslantless", !0);
h(f, T, A, "≲", "\\lesssim", !0);
h(f, T, A, "⪅", "\\lessapprox", !0);
h(f, T, A, "≊", "\\approxeq", !0);
h(f, T, te, "⋖", "\\lessdot");
h(f, T, A, "⋘", "\\lll", !0);
h(f, T, A, "≶", "\\lessgtr", !0);
h(f, T, A, "⋚", "\\lesseqgtr", !0);
h(f, T, A, "⪋", "\\lesseqqgtr", !0);
h(f, T, A, "≑", "\\doteqdot");
h(f, T, A, "≓", "\\risingdotseq", !0);
h(f, T, A, "≒", "\\fallingdotseq", !0);
h(f, T, A, "∽", "\\backsim", !0);
h(f, T, A, "⋍", "\\backsimeq", !0);
h(f, T, A, "⫅", "\\subseteqq", !0);
h(f, T, A, "⋐", "\\Subset", !0);
h(f, T, A, "⊏", "\\sqsubset", !0);
h(f, T, A, "≼", "\\preccurlyeq", !0);
h(f, T, A, "⋞", "\\curlyeqprec", !0);
h(f, T, A, "≾", "\\precsim", !0);
h(f, T, A, "⪷", "\\precapprox", !0);
h(f, T, A, "⊲", "\\vartriangleleft");
h(f, T, A, "⊴", "\\trianglelefteq");
h(f, T, A, "⊨", "\\vDash", !0);
h(f, T, A, "⊪", "\\Vvdash", !0);
h(f, T, A, "⌣", "\\smallsmile");
h(f, T, A, "⌢", "\\smallfrown");
h(f, T, A, "≏", "\\bumpeq", !0);
h(f, T, A, "≎", "\\Bumpeq", !0);
h(f, T, A, "≧", "\\geqq", !0);
h(f, T, A, "⩾", "\\geqslant", !0);
h(f, T, A, "⪖", "\\eqslantgtr", !0);
h(f, T, A, "≳", "\\gtrsim", !0);
h(f, T, A, "⪆", "\\gtrapprox", !0);
h(f, T, te, "⋗", "\\gtrdot");
h(f, T, A, "⋙", "\\ggg", !0);
h(f, T, A, "≷", "\\gtrless", !0);
h(f, T, A, "⋛", "\\gtreqless", !0);
h(f, T, A, "⪌", "\\gtreqqless", !0);
h(f, T, A, "≖", "\\eqcirc", !0);
h(f, T, A, "≗", "\\circeq", !0);
h(f, T, A, "≜", "\\triangleq", !0);
h(f, T, A, "∼", "\\thicksim");
h(f, T, A, "≈", "\\thickapprox");
h(f, T, A, "⫆", "\\supseteqq", !0);
h(f, T, A, "⋑", "\\Supset", !0);
h(f, T, A, "⊐", "\\sqsupset", !0);
h(f, T, A, "≽", "\\succcurlyeq", !0);
h(f, T, A, "⋟", "\\curlyeqsucc", !0);
h(f, T, A, "≿", "\\succsim", !0);
h(f, T, A, "⪸", "\\succapprox", !0);
h(f, T, A, "⊳", "\\vartriangleright");
h(f, T, A, "⊵", "\\trianglerighteq");
h(f, T, A, "⊩", "\\Vdash", !0);
h(f, T, A, "∣", "\\shortmid");
h(f, T, A, "∥", "\\shortparallel");
h(f, T, A, "≬", "\\between", !0);
h(f, T, A, "⋔", "\\pitchfork", !0);
h(f, T, A, "∝", "\\varpropto");
h(f, T, A, "◀", "\\blacktriangleleft");
h(f, T, A, "∴", "\\therefore", !0);
h(f, T, A, "∍", "\\backepsilon");
h(f, T, A, "▶", "\\blacktriangleright");
h(f, T, A, "∵", "\\because", !0);
h(f, T, A, "⋘", "\\llless");
h(f, T, A, "⋙", "\\gggtr");
h(f, T, te, "⊲", "\\lhd");
h(f, T, te, "⊳", "\\rhd");
h(f, T, A, "≂", "\\eqsim", !0);
h(f, y, A, "⋈", "\\Join");
h(f, T, A, "≑", "\\Doteq", !0);
h(f, T, te, "∔", "\\dotplus", !0);
h(f, T, te, "∖", "\\smallsetminus");
h(f, T, te, "⋒", "\\Cap", !0);
h(f, T, te, "⋓", "\\Cup", !0);
h(f, T, te, "⩞", "\\doublebarwedge", !0);
h(f, T, te, "⊟", "\\boxminus", !0);
h(f, T, te, "⊞", "\\boxplus", !0);
h(f, T, te, "⋇", "\\divideontimes", !0);
h(f, T, te, "⋉", "\\ltimes", !0);
h(f, T, te, "⋊", "\\rtimes", !0);
h(f, T, te, "⋋", "\\leftthreetimes", !0);
h(f, T, te, "⋌", "\\rightthreetimes", !0);
h(f, T, te, "⋏", "\\curlywedge", !0);
h(f, T, te, "⋎", "\\curlyvee", !0);
h(f, T, te, "⊝", "\\circleddash", !0);
h(f, T, te, "⊛", "\\circledast", !0);
h(f, T, te, "⋅", "\\centerdot");
h(f, T, te, "⊺", "\\intercal", !0);
h(f, T, te, "⋒", "\\doublecap");
h(f, T, te, "⋓", "\\doublecup");
h(f, T, te, "⊠", "\\boxtimes", !0);
h(f, T, A, "⇢", "\\dashrightarrow", !0);
h(f, T, A, "⇠", "\\dashleftarrow", !0);
h(f, T, A, "⇇", "\\leftleftarrows", !0);
h(f, T, A, "⇆", "\\leftrightarrows", !0);
h(f, T, A, "⇚", "\\Lleftarrow", !0);
h(f, T, A, "↞", "\\twoheadleftarrow", !0);
h(f, T, A, "↢", "\\leftarrowtail", !0);
h(f, T, A, "↫", "\\looparrowleft", !0);
h(f, T, A, "⇋", "\\leftrightharpoons", !0);
h(f, T, A, "↶", "\\curvearrowleft", !0);
h(f, T, A, "↺", "\\circlearrowleft", !0);
h(f, T, A, "↰", "\\Lsh", !0);
h(f, T, A, "⇈", "\\upuparrows", !0);
h(f, T, A, "↿", "\\upharpoonleft", !0);
h(f, T, A, "⇃", "\\downharpoonleft", !0);
h(f, y, A, "⊶", "\\origof", !0);
h(f, y, A, "⊷", "\\imageof", !0);
h(f, T, A, "⊸", "\\multimap", !0);
h(f, T, A, "↭", "\\leftrightsquigarrow", !0);
h(f, T, A, "⇉", "\\rightrightarrows", !0);
h(f, T, A, "⇄", "\\rightleftarrows", !0);
h(f, T, A, "↠", "\\twoheadrightarrow", !0);
h(f, T, A, "↣", "\\rightarrowtail", !0);
h(f, T, A, "↬", "\\looparrowright", !0);
h(f, T, A, "↷", "\\curvearrowright", !0);
h(f, T, A, "↻", "\\circlearrowright", !0);
h(f, T, A, "↱", "\\Rsh", !0);
h(f, T, A, "⇊", "\\downdownarrows", !0);
h(f, T, A, "↾", "\\upharpoonright", !0);
h(f, T, A, "⇂", "\\downharpoonright", !0);
h(f, T, A, "⇝", "\\rightsquigarrow", !0);
h(f, T, A, "⇝", "\\leadsto");
h(f, T, A, "⇛", "\\Rrightarrow", !0);
h(f, T, A, "↾", "\\restriction");
h(f, y, R, "‘", "`");
h(f, y, R, "$", "\\$");
h(H, y, R, "$", "\\$");
h(H, y, R, "$", "\\textdollar");
h(f, y, R, "%", "\\%");
h(H, y, R, "%", "\\%");
h(f, y, R, "_", "\\_");
h(H, y, R, "_", "\\_");
h(H, y, R, "_", "\\textunderscore");
h(f, y, R, "∠", "\\angle", !0);
h(f, y, R, "∞", "\\infty", !0);
h(f, y, R, "′", "\\prime");
h(f, y, R, "△", "\\triangle");
h(f, y, R, "Γ", "\\Gamma", !0);
h(f, y, R, "Δ", "\\Delta", !0);
h(f, y, R, "Θ", "\\Theta", !0);
h(f, y, R, "Λ", "\\Lambda", !0);
h(f, y, R, "Ξ", "\\Xi", !0);
h(f, y, R, "Π", "\\Pi", !0);
h(f, y, R, "Σ", "\\Sigma", !0);
h(f, y, R, "Υ", "\\Upsilon", !0);
h(f, y, R, "Φ", "\\Phi", !0);
h(f, y, R, "Ψ", "\\Psi", !0);
h(f, y, R, "Ω", "\\Omega", !0);
h(f, y, R, "A", "Α");
h(f, y, R, "B", "Β");
h(f, y, R, "E", "Ε");
h(f, y, R, "Z", "Ζ");
h(f, y, R, "H", "Η");
h(f, y, R, "I", "Ι");
h(f, y, R, "K", "Κ");
h(f, y, R, "M", "Μ");
h(f, y, R, "N", "Ν");
h(f, y, R, "O", "Ο");
h(f, y, R, "P", "Ρ");
h(f, y, R, "T", "Τ");
h(f, y, R, "X", "Χ");
h(f, y, R, "¬", "\\neg", !0);
h(f, y, R, "¬", "\\lnot");
h(f, y, R, "⊤", "\\top");
h(f, y, R, "⊥", "\\bot");
h(f, y, R, "∅", "\\emptyset");
h(f, T, R, "∅", "\\varnothing");
h(f, y, fe, "α", "\\alpha", !0);
h(f, y, fe, "β", "\\beta", !0);
h(f, y, fe, "γ", "\\gamma", !0);
h(f, y, fe, "δ", "\\delta", !0);
h(f, y, fe, "ϵ", "\\epsilon", !0);
h(f, y, fe, "ζ", "\\zeta", !0);
h(f, y, fe, "η", "\\eta", !0);
h(f, y, fe, "θ", "\\theta", !0);
h(f, y, fe, "ι", "\\iota", !0);
h(f, y, fe, "κ", "\\kappa", !0);
h(f, y, fe, "λ", "\\lambda", !0);
h(f, y, fe, "μ", "\\mu", !0);
h(f, y, fe, "ν", "\\nu", !0);
h(f, y, fe, "ξ", "\\xi", !0);
h(f, y, fe, "ο", "\\omicron", !0);
h(f, y, fe, "π", "\\pi", !0);
h(f, y, fe, "ρ", "\\rho", !0);
h(f, y, fe, "σ", "\\sigma", !0);
h(f, y, fe, "τ", "\\tau", !0);
h(f, y, fe, "υ", "\\upsilon", !0);
h(f, y, fe, "ϕ", "\\phi", !0);
h(f, y, fe, "χ", "\\chi", !0);
h(f, y, fe, "ψ", "\\psi", !0);
h(f, y, fe, "ω", "\\omega", !0);
h(f, y, fe, "ε", "\\varepsilon", !0);
h(f, y, fe, "ϑ", "\\vartheta", !0);
h(f, y, fe, "ϖ", "\\varpi", !0);
h(f, y, fe, "ϱ", "\\varrho", !0);
h(f, y, fe, "ς", "\\varsigma", !0);
h(f, y, fe, "φ", "\\varphi", !0);
h(f, y, te, "∗", "*", !0);
h(f, y, te, "+", "+");
h(f, y, te, "−", "-", !0);
h(f, y, te, "⋅", "\\cdot", !0);
h(f, y, te, "∘", "\\circ", !0);
h(f, y, te, "÷", "\\div", !0);
h(f, y, te, "±", "\\pm", !0);
h(f, y, te, "×", "\\times", !0);
h(f, y, te, "∩", "\\cap", !0);
h(f, y, te, "∪", "\\cup", !0);
h(f, y, te, "∖", "\\setminus", !0);
h(f, y, te, "∧", "\\land");
h(f, y, te, "∨", "\\lor");
h(f, y, te, "∧", "\\wedge", !0);
h(f, y, te, "∨", "\\vee", !0);
h(f, y, R, "√", "\\surd");
h(f, y, Bt, "⟨", "\\langle", !0);
h(f, y, Bt, "∣", "\\lvert");
h(f, y, Bt, "∥", "\\lVert");
h(f, y, Nt, "?", "?");
h(f, y, Nt, "!", "!");
h(f, y, Nt, "⟩", "\\rangle", !0);
h(f, y, Nt, "∣", "\\rvert");
h(f, y, Nt, "∥", "\\rVert");
h(f, y, A, "=", "=");
h(f, y, A, ":", ":");
h(f, y, A, "≈", "\\approx", !0);
h(f, y, A, "≅", "\\cong", !0);
h(f, y, A, "≥", "\\ge");
h(f, y, A, "≥", "\\geq", !0);
h(f, y, A, "←", "\\gets");
h(f, y, A, ">", "\\gt", !0);
h(f, y, A, "∈", "\\in", !0);
h(f, y, A, "", "\\@not");
h(f, y, A, "⊂", "\\subset", !0);
h(f, y, A, "⊃", "\\supset", !0);
h(f, y, A, "⊆", "\\subseteq", !0);
h(f, y, A, "⊇", "\\supseteq", !0);
h(f, T, A, "⊈", "\\nsubseteq", !0);
h(f, T, A, "⊉", "\\nsupseteq", !0);
h(f, y, A, "⊨", "\\models");
h(f, y, A, "←", "\\leftarrow", !0);
h(f, y, A, "≤", "\\le");
h(f, y, A, "≤", "\\leq", !0);
h(f, y, A, "<", "\\lt", !0);
h(f, y, A, "→", "\\rightarrow", !0);
h(f, y, A, "→", "\\to");
h(f, T, A, "≱", "\\ngeq", !0);
h(f, T, A, "≰", "\\nleq", !0);
h(f, y, Nr, " ", "\\ ");
h(f, y, Nr, " ", "\\space");
h(f, y, Nr, " ", "\\nobreakspace");
h(H, y, Nr, " ", "\\ ");
h(H, y, Nr, " ", " ");
h(H, y, Nr, " ", "\\space");
h(H, y, Nr, " ", "\\nobreakspace");
h(f, y, Nr, null, "\\nobreak");
h(f, y, Nr, null, "\\allowbreak");
h(f, y, Oi, ",", ",");
h(f, y, Oi, ";", ";");
h(f, T, te, "⊼", "\\barwedge", !0);
h(f, T, te, "⊻", "\\veebar", !0);
h(f, y, te, "⊙", "\\odot", !0);
h(f, y, te, "⊕", "\\oplus", !0);
h(f, y, te, "⊗", "\\otimes", !0);
h(f, y, R, "∂", "\\partial", !0);
h(f, y, te, "⊘", "\\oslash", !0);
h(f, T, te, "⊚", "\\circledcirc", !0);
h(f, T, te, "⊡", "\\boxdot", !0);
h(f, y, te, "△", "\\bigtriangleup");
h(f, y, te, "▽", "\\bigtriangledown");
h(f, y, te, "†", "\\dagger");
h(f, y, te, "⋄", "\\diamond");
h(f, y, te, "⋆", "\\star");
h(f, y, te, "◃", "\\triangleleft");
h(f, y, te, "▹", "\\triangleright");
h(f, y, Bt, "{", "\\{");
h(H, y, R, "{", "\\{");
h(H, y, R, "{", "\\textbraceleft");
h(f, y, Nt, "}", "\\}");
h(H, y, R, "}", "\\}");
h(H, y, R, "}", "\\textbraceright");
h(f, y, Bt, "{", "\\lbrace");
h(f, y, Nt, "}", "\\rbrace");
h(f, y, Bt, "[", "\\lbrack", !0);
h(H, y, R, "[", "\\lbrack", !0);
h(f, y, Nt, "]", "\\rbrack", !0);
h(H, y, R, "]", "\\rbrack", !0);
h(f, y, Bt, "(", "\\lparen", !0);
h(f, y, Nt, ")", "\\rparen", !0);
h(H, y, R, "<", "\\textless", !0);
h(H, y, R, ">", "\\textgreater", !0);
h(f, y, Bt, "⌊", "\\lfloor", !0);
h(f, y, Nt, "⌋", "\\rfloor", !0);
h(f, y, Bt, "⌈", "\\lceil", !0);
h(f, y, Nt, "⌉", "\\rceil", !0);
h(f, y, R, "\\", "\\backslash");
h(f, y, R, "∣", "|");
h(f, y, R, "∣", "\\vert");
h(H, y, R, "|", "\\textbar", !0);
h(f, y, R, "∥", "\\|");
h(f, y, R, "∥", "\\Vert");
h(H, y, R, "∥", "\\textbardbl");
h(H, y, R, "~", "\\textasciitilde");
h(H, y, R, "\\", "\\textbackslash");
h(H, y, R, "^", "\\textasciicircum");
h(f, y, A, "↑", "\\uparrow", !0);
h(f, y, A, "⇑", "\\Uparrow", !0);
h(f, y, A, "↓", "\\downarrow", !0);
h(f, y, A, "⇓", "\\Downarrow", !0);
h(f, y, A, "↕", "\\updownarrow", !0);
h(f, y, A, "⇕", "\\Updownarrow", !0);
h(f, y, ct, "∐", "\\coprod");
h(f, y, ct, "⋁", "\\bigvee");
h(f, y, ct, "⋀", "\\bigwedge");
h(f, y, ct, "⨄", "\\biguplus");
h(f, y, ct, "⋂", "\\bigcap");
h(f, y, ct, "⋃", "\\bigcup");
h(f, y, ct, "∫", "\\int");
h(f, y, ct, "∫", "\\intop");
h(f, y, ct, "∬", "\\iint");
h(f, y, ct, "∭", "\\iiint");
h(f, y, ct, "∏", "\\prod");
h(f, y, ct, "∑", "\\sum");
h(f, y, ct, "⨂", "\\bigotimes");
h(f, y, ct, "⨁", "\\bigoplus");
h(f, y, ct, "⨀", "\\bigodot");
h(f, y, ct, "∮", "\\oint");
h(f, y, ct, "∯", "\\oiint");
h(f, y, ct, "∰", "\\oiiint");
h(f, y, ct, "⨆", "\\bigsqcup");
h(f, y, ct, "∫", "\\smallint");
h(H, y, $n, "…", "\\textellipsis");
h(f, y, $n, "…", "\\mathellipsis");
h(H, y, $n, "…", "\\ldots", !0);
h(f, y, $n, "…", "\\ldots", !0);
h(f, y, $n, "⋯", "\\@cdots", !0);
h(f, y, $n, "⋱", "\\ddots", !0);
h(f, y, R, "⋮", "\\varvdots");
h(f, y, Ye, "ˊ", "\\acute");
h(f, y, Ye, "ˋ", "\\grave");
h(f, y, Ye, "¨", "\\ddot");
h(f, y, Ye, "~", "\\tilde");
h(f, y, Ye, "ˉ", "\\bar");
h(f, y, Ye, "˘", "\\breve");
h(f, y, Ye, "ˇ", "\\check");
h(f, y, Ye, "^", "\\hat");
h(f, y, Ye, "⃗", "\\vec");
h(f, y, Ye, "˙", "\\dot");
h(f, y, Ye, "˚", "\\mathring");
h(f, y, fe, "", "\\@imath");
h(f, y, fe, "", "\\@jmath");
h(f, y, R, "ı", "ı");
h(f, y, R, "ȷ", "ȷ");
h(H, y, R, "ı", "\\i", !0);
h(H, y, R, "ȷ", "\\j", !0);
h(H, y, R, "ß", "\\ss", !0);
h(H, y, R, "æ", "\\ae", !0);
h(H, y, R, "œ", "\\oe", !0);
h(H, y, R, "ø", "\\o", !0);
h(H, y, R, "Æ", "\\AE", !0);
h(H, y, R, "Œ", "\\OE", !0);
h(H, y, R, "Ø", "\\O", !0);
h(H, y, Ye, "ˊ", "\\'");
h(H, y, Ye, "ˋ", "\\`");
h(H, y, Ye, "ˆ", "\\^");
h(H, y, Ye, "˜", "\\~");
h(H, y, Ye, "ˉ", "\\=");
h(H, y, Ye, "˘", "\\u");
h(H, y, Ye, "˙", "\\.");
h(H, y, Ye, "¸", "\\c");
h(H, y, Ye, "˚", "\\r");
h(H, y, Ye, "ˇ", "\\v");
h(H, y, Ye, "¨", '\\"');
h(H, y, Ye, "˝", "\\H");
h(H, y, Ye, "◯", "\\textcircled");
var yd = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
h(H, y, R, "–", "--", !0);
h(H, y, R, "–", "\\textendash");
h(H, y, R, "—", "---", !0);
h(H, y, R, "—", "\\textemdash");
h(H, y, R, "‘", "`", !0);
h(H, y, R, "‘", "\\textquoteleft");
h(H, y, R, "’", "'", !0);
h(H, y, R, "’", "\\textquoteright");
h(H, y, R, "“", "``", !0);
h(H, y, R, "“", "\\textquotedblleft");
h(H, y, R, "”", "''", !0);
h(H, y, R, "”", "\\textquotedblright");
h(f, y, R, "°", "\\degree", !0);
h(H, y, R, "°", "\\degree");
h(H, y, R, "°", "\\textdegree", !0);
h(f, y, R, "£", "\\pounds");
h(f, y, R, "£", "\\mathsterling", !0);
h(H, y, R, "£", "\\pounds");
h(H, y, R, "£", "\\textsterling", !0);
h(f, T, R, "✠", "\\maltese");
h(H, T, R, "✠", "\\maltese");
var Ll = '0123456789/@."';
for (var Qi = 0; Qi < Ll.length; Qi++) {
  var zl = Ll.charAt(Qi);
  h(f, y, R, zl, zl);
}
var Pl = '0123456789!@*()-=+";:?/.,';
for (var es = 0; es < Pl.length; es++) {
  var Bl = Pl.charAt(es);
  h(H, y, R, Bl, Bl);
}
var fi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ts = 0; ts < fi.length; ts++) {
  var Ka = fi.charAt(ts);
  h(f, y, fe, Ka, Ka), h(H, y, R, Ka, Ka);
}
h(f, T, R, "C", "ℂ");
h(H, T, R, "C", "ℂ");
h(f, T, R, "H", "ℍ");
h(H, T, R, "H", "ℍ");
h(f, T, R, "N", "ℕ");
h(H, T, R, "N", "ℕ");
h(f, T, R, "P", "ℙ");
h(H, T, R, "P", "ℙ");
h(f, T, R, "Q", "ℚ");
h(H, T, R, "Q", "ℚ");
h(f, T, R, "R", "ℝ");
h(H, T, R, "R", "ℝ");
h(f, T, R, "Z", "ℤ");
h(H, T, R, "Z", "ℤ");
h(f, y, fe, "h", "ℎ");
h(H, y, fe, "h", "ℎ");
var ge = "";
for (var Et = 0; Et < fi.length; Et++) {
  var Ze = fi.charAt(Et);
  ge = String.fromCharCode(55349, 56320 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56372 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56424 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56580 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56684 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56736 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56788 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56840 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56944 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), Et < 26 && (ge = String.fromCharCode(55349, 56632 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge), ge = String.fromCharCode(55349, 56476 + Et), h(f, y, fe, Ze, ge), h(H, y, R, Ze, ge));
}
ge = "𝕜";
h(f, y, fe, "k", ge);
h(H, y, R, "k", ge);
for (var Wr = 0; Wr < 10; Wr++) {
  var Mr = Wr.toString();
  ge = String.fromCharCode(55349, 57294 + Wr), h(f, y, fe, Mr, ge), h(H, y, R, Mr, ge), ge = String.fromCharCode(55349, 57314 + Wr), h(f, y, fe, Mr, ge), h(H, y, R, Mr, ge), ge = String.fromCharCode(55349, 57324 + Wr), h(f, y, fe, Mr, ge), h(H, y, R, Mr, ge), ge = String.fromCharCode(55349, 57334 + Wr), h(f, y, fe, Mr, ge), h(H, y, R, Mr, ge);
}
var Ks = "ÐÞþ";
for (var rs = 0; rs < Ks.length; rs++) {
  var Wa = Ks.charAt(rs);
  h(f, y, fe, Wa, Wa), h(H, y, R, Wa, Wa);
}
var Ga = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], jl = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], fp = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, s = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [Ga[o][2], Ga[o][s]];
  } else if (120782 <= i && i <= 120831) {
    var l = Math.floor((i - 120782) / 10);
    return [jl[l][2], jl[l][s]];
  } else {
    if (i === 120485 || i === 120486)
      return [Ga[0][2], Ga[0][s]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, Di = function(e, t, n) {
  return qe[n][e] && qe[n][e].replace && (e = qe[n][e].replace), {
    value: e,
    metrics: Vo(e, t, n)
  };
}, Xt = function(e, t, n, a, i) {
  var s = Di(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var c = o.italic;
    (n === "text" || a && a.font === "mathit") && (c = 0), l = new Gt(e, o.height, o.depth, c, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new Gt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    l.maxFontSize = a.sizeMultiplier, a.style.isTight() && l.classes.push("mtight");
    var u = a.getColor();
    u && (l.style.color = u);
  }
  return l;
}, pp = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Di(e, "Main-Bold", t).metrics ? Xt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || qe[t][e].font === "main" ? Xt(e, "Main-Regular", t, n, a) : Xt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, gp = function(e, t, n, a, i) {
  return i !== "textord" && Di(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, vp = function(e, t, n) {
  var a = e.mode, i = e.text, s = ["mord"], o = a === "math" || a === "text" && t.font, l = o ? t.font : t.fontFamily, c = "", u = "";
  if (i.charCodeAt(0) === 55349 && ([c, u] = fp(i, a)), c.length > 0)
    return Xt(i, c, a, t, s.concat(u));
  if (l) {
    var d, m;
    if (l === "boldsymbol") {
      var g = gp(i, a, t, s, n);
      d = g.fontName, m = [g.fontClass];
    } else o ? (d = Sd[l].fontName, m = [l]) : (d = Ya(l, t.fontWeight, t.fontShape), m = [l, t.fontWeight, t.fontShape]);
    if (Di(i, d, a).metrics)
      return Xt(i, d, a, t, s.concat(m));
    if (yd.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var v = [], b = 0; b < i.length; b++)
        v.push(Xt(i[b], d, a, t, s.concat(m)));
      return wd(v);
    }
  }
  if (n === "mathord")
    return Xt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var x = qe[a][i] && qe[a][i].font;
    if (x === "ams") {
      var S = Ya("amsrm", t.fontWeight, t.fontShape);
      return Xt(i, S, a, t, s.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (x === "main" || !x) {
      var w = Ya("textrm", t.fontWeight, t.fontShape);
      return Xt(i, w, a, t, s.concat(t.fontWeight, t.fontShape));
    } else {
      var C = Ya(x, t.fontWeight, t.fontShape);
      return Xt(i, C, a, t, s.concat(C, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, bp = (r, e) => {
  if (Fr(r.classes) !== Fr(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n in r.style)
    if (r.style.hasOwnProperty(n) && r.style[n] !== e.style[n])
      return !1;
  for (var a in e.style)
    if (e.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  return !0;
}, yp = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Gt && n instanceof Gt && bp(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Jo = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, Mt = function(e, t, n, a) {
  var i = new Ia(e, t, n, a);
  return Jo(i), i;
}, xd = (r, e, t, n) => new Ia(r, e, t, n), xp = function(e, t, n) {
  var a = Mt([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = V(a.height), a.maxFontSize = 1, a;
}, wp = function(e, t, n, a) {
  var i = new Xo(e, t, n, a);
  return Jo(i), i;
}, wd = function(e) {
  var t = new Ra(e);
  return Jo(t), t;
}, Sp = function(e, t) {
  return e instanceof Ra ? Mt([], [e], t) : e;
}, _p = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, s = 1; s < t.length; s++) {
      var o = -t[s].shift - i - t[s].elem.depth, l = o - (t[s - 1].elem.height + t[s - 1].elem.depth);
      i = i + o, n.push({
        type: "kern",
        size: l
      }), n.push(t[s]);
    }
    return {
      children: n,
      depth: a
    };
  }
  var c;
  if (e.positionType === "top") {
    for (var u = e.positionData, d = 0; d < e.children.length; d++) {
      var m = e.children[d];
      u -= m.type === "kern" ? m.size : m.elem.height + m.elem.depth;
    }
    c = u;
  } else if (e.positionType === "bottom")
    c = -e.positionData;
  else {
    var g = e.children[0];
    if (g.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      c = -g.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      c = -g.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: c
  };
}, Cp = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = _p(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      i = Math.max(i, l.maxFontSize, l.height);
    }
  }
  i += 2;
  var c = Mt(["pstrut"], []);
  c.style.height = V(i);
  for (var u = [], d = a, m = a, g = a, v = 0; v < n.length; v++) {
    var b = n[v];
    if (b.type === "kern")
      g += b.size;
    else {
      var x = b.elem, S = b.wrapperClasses || [], w = b.wrapperStyle || {}, C = Mt(S, [c, x], void 0, w);
      C.style.top = V(-i - g - x.depth), b.marginLeft && (C.style.marginLeft = b.marginLeft), b.marginRight && (C.style.marginRight = b.marginRight), u.push(C), g += x.height + x.depth;
    }
    d = Math.min(d, g), m = Math.max(m, g);
  }
  var N = Mt(["vlist"], u);
  N.style.height = V(m);
  var k;
  if (d < 0) {
    var E = Mt([], []), I = Mt(["vlist"], [E]);
    I.style.height = V(-d);
    var D = Mt(["vlist-s"], [new Gt("​")]);
    k = [Mt(["vlist-r"], [N, D]), Mt(["vlist-r"], [I])];
  } else
    k = [Mt(["vlist-r"], [N])];
  var M = Mt(["vlist-t"], k);
  return k.length === 2 && M.classes.push("vlist-t2"), M.height = m, M.depth = -d, M;
}, kp = (r, e) => {
  var t = Mt(["mspace"], [], e), n = Xe(r, e);
  return t.style.marginRight = V(n), t;
}, Ya = function(e, t, n) {
  var a = "";
  switch (e) {
    case "amsrm":
      a = "AMS";
      break;
    case "textrm":
      a = "Main";
      break;
    case "textsf":
      a = "SansSerif";
      break;
    case "texttt":
      a = "Typewriter";
      break;
    default:
      a = e;
  }
  var i;
  return t === "textbf" && n === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", a + "-" + i;
}, Sd = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, _d = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Ep = function(e, t) {
  var [n, a, i] = _d[e], s = new Lr(n), o = new kr([s], {
    width: V(a),
    height: V(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + V(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), l = xd(["overlay"], [o], t);
  return l.height = i, l.style.height = V(i), l.style.width = V(a), l;
}, L = {
  fontMap: Sd,
  makeSymbol: Xt,
  mathsym: pp,
  makeSpan: Mt,
  makeSvgSpan: xd,
  makeLineSpan: xp,
  makeAnchor: wp,
  makeFragment: wd,
  wrapFragment: Sp,
  makeVList: Cp,
  makeOrd: vp,
  makeGlue: kp,
  staticSvg: Ep,
  svgData: _d,
  tryCombineChars: yp
}, Ve = {
  number: 3,
  unit: "mu"
}, Gr = {
  number: 4,
  unit: "mu"
}, mr = {
  number: 5,
  unit: "mu"
}, Tp = {
  mord: {
    mop: Ve,
    mbin: Gr,
    mrel: mr,
    minner: Ve
  },
  mop: {
    mord: Ve,
    mop: Ve,
    mrel: mr,
    minner: Ve
  },
  mbin: {
    mord: Gr,
    mop: Gr,
    mopen: Gr,
    minner: Gr
  },
  mrel: {
    mord: mr,
    mop: mr,
    mopen: mr,
    minner: mr
  },
  mopen: {},
  mclose: {
    mop: Ve,
    mbin: Gr,
    mrel: mr,
    minner: Ve
  },
  mpunct: {
    mord: Ve,
    mop: Ve,
    mrel: mr,
    mopen: Ve,
    mclose: Ve,
    mpunct: Ve,
    minner: Ve
  },
  minner: {
    mord: Ve,
    mop: Ve,
    mbin: Gr,
    mrel: mr,
    mopen: Ve,
    mpunct: Ve,
    minner: Ve
  }
}, Np = {
  mord: {
    mop: Ve
  },
  mop: {
    mord: Ve,
    mop: Ve
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: Ve
  },
  mpunct: {},
  minner: {
    mop: Ve
  }
}, Cd = {}, pi = {}, gi = {};
function Z(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs,
    argTypes: n.argTypes,
    allowedInArgument: !!n.allowedInArgument,
    allowedInText: !!n.allowedInText,
    allowedInMath: n.allowedInMath === void 0 ? !0 : n.allowedInMath,
    numOptionalArgs: n.numOptionalArgs || 0,
    infix: !!n.infix,
    primitive: !!n.primitive,
    handler: a
  }, l = 0; l < t.length; ++l)
    Cd[t[l]] = o;
  e && (i && (pi[e] = i), s && (gi[e] = s));
}
function gn(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  Z({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: n
  });
}
var vi = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, at = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Er = L.makeSpan, Ap = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Mp = ["rightmost", "mrel", "mclose", "mpunct"], Op = {
  display: pe.DISPLAY,
  text: pe.TEXT,
  script: pe.SCRIPT,
  scriptscript: pe.SCRIPTSCRIPT
}, Dp = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, ft = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = De(e[s], t);
    if (o instanceof Ra) {
      var l = o.children;
      i.push(...l);
    } else
      i.push(o);
  }
  if (L.tryCombineChars(i), !n)
    return i;
  var c = t;
  if (e.length === 1) {
    var u = e[0];
    u.type === "sizing" ? c = t.havingSize(u.size) : u.type === "styling" && (c = t.havingStyle(Op[u.style]));
  }
  var d = Er([a[0] || "leftmost"], [], t), m = Er([a[1] || "rightmost"], [], t), g = n === "root";
  return $l(i, (v, b) => {
    var x = b.classes[0], S = v.classes[0];
    x === "mbin" && ce.contains(Mp, S) ? b.classes[0] = "mord" : S === "mbin" && ce.contains(Ap, x) && (v.classes[0] = "mord");
  }, {
    node: d
  }, m, g), $l(i, (v, b) => {
    var x = Ws(b), S = Ws(v), w = x && S ? v.hasClass("mtight") ? Np[x][S] : Tp[x][S] : null;
    if (w)
      return L.makeGlue(w, c);
  }, {
    node: d
  }, m, g), i;
}, $l = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = kd(o);
    if (l) {
      r(l.children, t, n, null, i);
      continue;
    }
    var c = !o.hasClass("mspace");
    if (c) {
      var u = t(o, n.node);
      u && (n.insertAfter ? n.insertAfter(u) : (e.unshift(u), s++));
    }
    c ? n.node = o : i && o.hasClass("newline") && (n.node = Er(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((d) => (m) => {
      e.splice(d + 1, 0, m), s++;
    })(s);
  }
  a && e.pop();
}, kd = function(e) {
  return e instanceof Ra || e instanceof Xo || e instanceof Ia && e.hasClass("enclosing") ? e : null;
}, Rp = function r(e, t) {
  var n = kd(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return r(a[a.length - 1], "right");
      if (t === "left")
        return r(a[0], "left");
    }
  }
  return e;
}, Ws = function(e, t) {
  return e ? (t && (e = Rp(e, t)), Dp[e.classes[0]] || null) : null;
}, ga = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Er(t.concat(n));
}, De = function(e, t, n) {
  if (!e)
    return Er();
  if (pi[e.type]) {
    var a = pi[e.type](e, t);
    if (n && t.size !== n.size) {
      a = Er(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Va(r, e) {
  var t = Er(["base"], r, e), n = Er(["strut"]);
  return n.style.height = V(t.height + t.depth), t.depth && (n.style.verticalAlign = V(-t.depth)), t.children.unshift(n), t;
}
function Gs(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = ft(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (i.push(Va(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(Va(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(Va(s, e));
  var c;
  t ? (c = Va(ft(t, e, !0)), c.classes = ["tag"], i.push(c)) : a && i.push(a);
  var u = Er(["katex-html"], i);
  if (u.setAttribute("aria-hidden", "true"), c) {
    var d = c.children[0];
    d.style.height = V(u.height + u.depth), u.depth && (d.style.verticalAlign = V(-u.depth));
  }
  return u;
}
function Ed(r) {
  return new Ra(r);
}
class qt {
  constructor(e, t, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Fr(this.classes));
    for (var n = 0; n < this.children.length; n++)
      e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ce.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ce.escape(Fr(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class oa {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return ce.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Ip {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", V(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + V(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var W = {
  MathNode: qt,
  TextNode: oa,
  SpaceNode: Ip,
  newDocumentFragment: Ed
}, Yt = function(e, t, n) {
  return qe[t][e] && qe[t][e].replace && e.charCodeAt(0) !== 55349 && !(yd.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = qe[t][e].replace), new W.TextNode(e);
}, Zo = function(e) {
  return e.length === 1 ? e[0] : new W.MathNode("mrow", e);
}, Qo = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var n = t.font;
  if (!n || n === "mathnormal")
    return null;
  var a = e.mode;
  if (n === "mathit")
    return "italic";
  if (n === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (n === "mathbf")
    return "bold";
  if (n === "mathbb")
    return "double-struck";
  if (n === "mathfrak")
    return "fraktur";
  if (n === "mathscr" || n === "mathcal")
    return "script";
  if (n === "mathsf")
    return "sans-serif";
  if (n === "mathtt")
    return "monospace";
  var i = e.text;
  if (ce.contains(["\\imath", "\\jmath"], i))
    return null;
  qe[a][i] && qe[a][i].replace && (i = qe[a][i].replace);
  var s = L.fontMap[n].fontName;
  return Vo(i, s, a) ? L.fontMap[n].variant : null;
}, Dt = function(e, t, n) {
  if (e.length === 1) {
    var a = ze(e[0], t);
    return n && a instanceof qt && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var l = ze(e[o], t);
    if (l instanceof qt && s instanceof qt) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mi" && l.children.length === 1 && s.type === "mn") {
        var c = l.children[0];
        if (c instanceof oa && c.text === ".") {
          s.children.push(...l.children);
          continue;
        }
      } else if (s.type === "mi" && s.children.length === 1) {
        var u = s.children[0];
        if (u instanceof oa && u.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var d = l.children[0];
          d instanceof oa && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(l), s = l;
  }
  return i;
}, zr = function(e, t, n) {
  return Zo(Dt(e, t, n));
}, ze = function(e, t) {
  if (!e)
    return new W.MathNode("mrow");
  if (gi[e.type]) {
    var n = gi[e.type](e, t);
    return n;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Hl(r, e, t, n, a) {
  var i = Dt(r, t), s;
  i.length === 1 && i[0] instanceof qt && ce.contains(["mrow", "mtable"], i[0].type) ? s = i[0] : s = new W.MathNode("mrow", i);
  var o = new W.MathNode("annotation", [new W.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new W.MathNode("semantics", [s, o]), c = new W.MathNode("math", [l]);
  c.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && c.setAttribute("display", "block");
  var u = a ? "katex" : "katex-mathml";
  return L.makeSpan([u], [c]);
}
var Td = function(e) {
  return new gr({
    style: e.displayMode ? pe.DISPLAY : pe.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Nd = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = L.makeSpan(n, [e]);
  }
  return e;
}, Fp = function(e, t, n) {
  var a = Td(n), i;
  if (n.output === "mathml")
    return Hl(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = Gs(e, a);
    i = L.makeSpan(["katex"], [s]);
  } else {
    var o = Hl(e, t, a, n.displayMode, !1), l = Gs(e, a);
    i = L.makeSpan(["katex"], [o, l]);
  }
  return Nd(i, n);
}, Lp = function(e, t, n) {
  var a = Td(n), i = Gs(e, a), s = L.makeSpan(["katex"], [i]);
  return Nd(s, n);
}, zp = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Pp = function(e) {
  var t = new W.MathNode("mo", [new W.TextNode(zp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Bp = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, jp = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, $p = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (ce.contains(["widehat", "widecheck", "widetilde", "utilde"], l)) {
      var c = e, u = jp(c.base), d, m, g;
      if (u > 5)
        l === "widehat" || l === "widecheck" ? (d = 420, o = 2364, g = 0.42, m = l + "4") : (d = 312, o = 2340, g = 0.34, m = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][u];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], d = [0, 239, 300, 360, 420][v], g = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], m = l + v) : (o = [0, 600, 1033, 2339, 2340][v], d = [0, 260, 286, 306, 312][v], g = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], m = "tilde" + v);
      }
      var b = new Lr(m), x = new kr([b], {
        width: "100%",
        height: V(g),
        viewBox: "0 0 " + o + " " + d,
        preserveAspectRatio: "none"
      });
      return {
        span: L.makeSvgSpan([], [x], t),
        minWidth: 0,
        height: g
      };
    } else {
      var S = [], w = Bp[l], [C, N, k] = w, E = k / 1e3, I = C.length, D, M;
      if (I === 1) {
        var F = w[3];
        D = ["hide-tail"], M = [F];
      } else if (I === 2)
        D = ["halfarrow-left", "halfarrow-right"], M = ["xMinYMin", "xMaxYMin"];
      else if (I === 3)
        D = ["brace-left", "brace-center", "brace-right"], M = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + I + " children.");
      for (var z = 0; z < I; z++) {
        var $ = new Lr(C[z]), P = new kr([$], {
          width: "400em",
          height: V(E),
          viewBox: "0 0 " + o + " " + k,
          preserveAspectRatio: M[z] + " slice"
        }), X = L.makeSvgSpan([D[z]], [P], t);
        if (I === 1)
          return {
            span: X,
            minWidth: N,
            height: E
          };
        X.style.height = V(E), S.push(X);
      }
      return {
        span: L.makeSpan(["stretchy"], S, t),
        minWidth: N,
        height: E
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = V(s), i > 0 && (a.style.minWidth = V(i)), a;
}, Hp = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = L.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var l = i.color && i.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var c = [];
    /^[bx]cancel$/.test(t) && c.push(new Us({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && c.push(new Us({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var u = new kr(c, {
      width: "100%",
      height: V(o)
    });
    s = L.makeSvgSpan([], [u], i);
  }
  return s.height = o, s.style.height = V(o), s;
}, Tr = {
  encloseSpan: Hp,
  mathMLnode: Pp,
  svgSpan: $p
};
function _e(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function e0(r) {
  var e = Ri(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Ri(r) {
  return r && (r.type === "atom" || mp.hasOwnProperty(r.type)) ? r : null;
}
var t0 = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = _e(r.base, "accent"), t = n.base, r.base = t, a = dp(De(r, e)), r.base = n) : (n = _e(r, "accent"), t = n.base);
  var i = De(t, e.havingCrampedStyle()), s = n.isShifty && ce.isCharacterBox(t), o = 0;
  if (s) {
    var l = ce.getBaseElem(t), c = De(l, e.havingCrampedStyle());
    o = Fl(c).skew;
  }
  var u = n.label === "\\c", d = u ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = Tr.svgSpan(n, e), m = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + V(2 * o) + ")",
          marginLeft: V(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var g, v;
    n.label === "\\vec" ? (g = L.staticSvg("vec", e), v = L.svgData.vec[1]) : (g = L.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), g = Fl(g), g.italic = 0, v = g.width, u && (d += g.depth)), m = L.makeSpan(["accent-body"], [g]);
    var b = n.label === "\\textcircled";
    b && (m.classes.push("accent-full"), d = i.height);
    var x = o;
    b || (x -= v / 2), m.style.left = V(x), n.label === "\\textcircled" && (m.style.top = ".2em"), m = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -d
      }, {
        type: "elem",
        elem: m
      }]
    }, e);
  }
  var S = L.makeSpan(["mord", "accent"], [m], e);
  return a ? (a.children[0] = S, a.height = Math.max(S.height, a.height), a.classes[0] = "mord", a) : S;
}, Ad = (r, e) => {
  var t = r.isStretchy ? Tr.mathMLnode(r.label) : new W.MathNode("mo", [Yt(r.label, r.mode)]), n = new W.MathNode("mover", [ze(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, qp = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
Z({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = vi(e[0]), n = !qp.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: t0,
  mathmlBuilder: Ad
});
Z({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], n = r.parser.mode;
    return n === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: t0,
  mathmlBuilder: Ad
});
Z({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = De(r.base, e), n = Tr.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = L.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return L.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Tr.mathMLnode(r.label), n = new W.MathNode("munder", [ze(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Xa = (r) => {
  var e = new W.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
Z({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), a = L.wrapFragment(De(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = L.wrapFragment(De(r.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = Tr.svgSpan(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, c = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (c -= a.depth);
    var u;
    if (s) {
      var d = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      u = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: o,
          shift: l
        }, {
          type: "elem",
          elem: s,
          shift: d
        }]
      }, e);
    } else
      u = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: c
        }, {
          type: "elem",
          elem: o,
          shift: l
        }]
      }, e);
    return u.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [u], e);
  },
  mathmlBuilder(r, e) {
    var t = Tr.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = Xa(ze(r.body, e));
      if (r.below) {
        var i = Xa(ze(r.below, e));
        n = new W.MathNode("munderover", [t, i, a]);
      } else
        n = new W.MathNode("mover", [t, a]);
    } else if (r.below) {
      var s = Xa(ze(r.below, e));
      n = new W.MathNode("munder", [t, s]);
    } else
      n = Xa(), n = new W.MathNode("mover", [t, n]);
    return n;
  }
});
var Up = L.makeSpan;
function Md(r, e) {
  var t = ft(r.body, e, !0);
  return Up([r.mclass], t, e);
}
function Od(r, e) {
  var t, n = Dt(r.body, e);
  return r.mclass === "minner" ? t = new W.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new W.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new W.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
Z({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: at(a),
      isCharacterBox: ce.isCharacterBox(a)
    };
  },
  htmlBuilder: Md,
  mathmlBuilder: Od
});
var Ii = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
Z({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ii(e[0]),
      body: at(e[1]),
      isCharacterBox: ce.isCharacterBox(e[1])
    };
  }
});
Z({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[1], i = e[0], s;
    n !== "\\stackrel" ? s = Ii(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: at(a)
    }, l = {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: n === "\\underset" ? null : i,
      sub: n === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: s,
      body: [l],
      isCharacterBox: ce.isCharacterBox(l)
    };
  },
  htmlBuilder: Md,
  mathmlBuilder: Od
});
Z({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Ii(e[0]),
      body: at(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = ft(r.body, e, !0), n = L.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = Dt(r.body, e), n = new W.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var Kp = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, ql = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ul = (r) => r.type === "textord" && r.text === "@", Wp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Gp(r, e, t) {
  var n = Kp[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, s = t.callFunction("\\Big", [i], []), o = t.callFunction("\\\\cdright", [e[1]], []), l = {
        type: "ordgroup",
        mode: "math",
        body: [a, s, o]
      };
      return t.callFunction("\\\\cdparent", [l], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var c = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [c], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Yp(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new G("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = ql(), l = 0; l < s.length; l++)
      if (!Ul(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var c = e0(s[l]).text, u = new Array(2);
        if (u[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, u[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(c) > -1)) if ("<>AV".indexOf(c) > -1)
          for (var d = 0; d < 2; d++) {
            for (var m = !0, g = l + 1; g < s.length; g++) {
              if (Wp(s[g], c)) {
                m = !1, l = g;
                break;
              }
              if (Ul(s[g]))
                throw new G("Missing a " + c + " character to complete a CD arrow.", s[g]);
              u[d].body.push(s[g]);
            }
            if (m)
              throw new G("Missing a " + c + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', s[l]);
        var v = Gp(c, u, r), b = {
          type: "styling",
          body: [v],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(b), o = ql();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var x = new Array(a[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: x,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
Z({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), n = L.wrapFragment(De(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = V(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mrow", [ze(r.label, e)]);
    return t = new W.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new W.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
Z({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = L.wrapFragment(De(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new W.MathNode("mrow", [ze(r.fragment, e)]);
  }
});
Z({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = _e(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = _e(a[s], "textord");
      i += o.text;
    }
    var l = parseInt(i), c;
    if (isNaN(l))
      throw new G("\\@char has non-numeric argument " + i);
    if (l < 0 || l >= 1114111)
      throw new G("\\@char with invalid code point " + i);
    return l <= 65535 ? c = String.fromCharCode(l) : (l -= 65536, c = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: c
    };
  }
});
var Dd = (r, e) => {
  var t = ft(r.body, e.withColor(r.color), !1);
  return L.makeFragment(t);
}, Rd = (r, e) => {
  var t = Dt(r.body, e.withColor(r.color)), n = new W.MathNode("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
Z({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = _e(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: at(a)
    };
  },
  htmlBuilder: Dd,
  mathmlBuilder: Rd
});
Z({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, a = _e(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Dd,
  mathmlBuilder: Rd
});
Z({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && _e(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = L.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = V(Xe(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", V(Xe(r.size, e)))), t;
  }
});
var Ys = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Id = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", r);
  return e;
}, Vp = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Fd = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
Z({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if (Ys[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = Ys[n.text]), _e(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", n);
  }
});
Z({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new G("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new G('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new G('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new G("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(a, {
      tokens: l,
      numArgs: i,
      delimiters: o
    }, t === Ys[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
Z({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Id(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Vp(e);
    return Fd(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
Z({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Id(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Fd(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var aa = function(e, t, n) {
  var a = qe.math[e] && qe.math[e].replace, i = Vo(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, r0 = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = L.makeSpan(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, Ld = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = V(i), e.height -= i, e.depth += i;
}, Xp = function(e, t, n, a, i, s) {
  var o = L.makeSymbol(e, "Main-Regular", i, a), l = r0(o, t, a, s);
  return n && Ld(l, a, t), l;
}, Jp = function(e, t, n, a) {
  return L.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, zd = function(e, t, n, a, i, s) {
  var o = Jp(e, t, i, a), l = r0(L.makeSpan(["delimsizing", "size" + t], [o], a), pe.TEXT, a, s);
  return n && Ld(l, a, pe.TEXT), l;
}, ns = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = L.makeSpan(["delimsizinginner", a], [L.makeSpan([], [L.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, as = function(e, t, n) {
  var a = ar["Size4-Regular"][e.charCodeAt(0)] ? ar["Size4-Regular"][e.charCodeAt(0)][4] : ar["Size1-Regular"][e.charCodeAt(0)][4], i = new Lr("inner", np(e, Math.round(1e3 * t))), s = new kr([i], {
    width: V(a),
    height: V(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + V(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = L.makeSvgSpan([], [s], n);
  return o.height = t, o.style.height = V(t), o.style.width = V(a), {
    type: "elem",
    elem: o
  };
}, Vs = 8e-3, Ja = {
  type: "kern",
  size: -1 * Vs
}, Zp = ["|", "\\lvert", "\\rvert", "\\vert"], Qp = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Pd = function(e, t, n, a, i, s) {
  var o, l, c, u, d = "", m = 0;
  o = c = u = e, l = null;
  var g = "Size1-Regular";
  e === "\\uparrow" ? c = u = "⏐" : e === "\\Uparrow" ? c = u = "‖" : e === "\\downarrow" ? o = c = "⏐" : e === "\\Downarrow" ? o = c = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", c = "⏐", u = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", c = "‖", u = "\\Downarrow") : ce.contains(Zp, e) ? (c = "∣", d = "vert", m = 333) : ce.contains(Qp, e) ? (c = "∥", d = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", c = "⎢", u = "⎣", g = "Size4-Regular", d = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", c = "⎥", u = "⎦", g = "Size4-Regular", d = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (c = o = "⎢", u = "⎣", g = "Size4-Regular", d = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", c = u = "⎢", g = "Size4-Regular", d = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (c = o = "⎥", u = "⎦", g = "Size4-Regular", d = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", c = u = "⎥", g = "Size4-Regular", d = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", c = "⎜", u = "⎝", g = "Size4-Regular", d = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", c = "⎟", u = "⎠", g = "Size4-Regular", d = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", u = "⎩", c = "⎪", g = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", u = "⎭", c = "⎪", g = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", u = "⎩", c = "⎪", g = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", u = "⎭", c = "⎪", g = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", u = "⎭", c = "⎪", g = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", u = "⎩", c = "⎪", g = "Size4-Regular");
  var v = aa(o, g, i), b = v.height + v.depth, x = aa(c, g, i), S = x.height + x.depth, w = aa(u, g, i), C = w.height + w.depth, N = 0, k = 1;
  if (l !== null) {
    var E = aa(l, g, i);
    N = E.height + E.depth, k = 2;
  }
  var I = b + C + N, D = Math.max(0, Math.ceil((t - I) / (k * S))), M = I + D * k * S, F = a.fontMetrics().axisHeight;
  n && (F *= a.sizeMultiplier);
  var z = M / 2 - F, $ = [];
  if (d.length > 0) {
    var P = M - b - C, X = Math.round(M * 1e3), Y = ap(d, Math.round(P * 1e3)), re = new Lr(d, Y), de = (m / 1e3).toFixed(3) + "em", J = (X / 1e3).toFixed(3) + "em", he = new kr([re], {
      width: de,
      height: J,
      viewBox: "0 0 " + m + " " + X
    }), le = L.makeSvgSpan([], [he], a);
    le.height = X / 1e3, le.style.width = de, le.style.height = J, $.push({
      type: "elem",
      elem: le
    });
  } else {
    if ($.push(ns(u, g, i)), $.push(Ja), l === null) {
      var Ee = M - b - C + 2 * Vs;
      $.push(as(c, Ee, a));
    } else {
      var oe = (M - b - C - N) / 2 + 2 * Vs;
      $.push(as(c, oe, a)), $.push(Ja), $.push(ns(l, g, i)), $.push(Ja), $.push(as(c, oe, a));
    }
    $.push(Ja), $.push(ns(o, g, i));
  }
  var Pe = a.havingBaseStyle(pe.TEXT), Be = L.makeVList({
    positionType: "bottom",
    positionData: z,
    children: $
  }, Pe);
  return r0(L.makeSpan(["delimsizing", "mult"], [Be], Pe), pe.TEXT, a, s);
}, is = 80, ss = 0.08, os = function(e, t, n, a, i) {
  var s = rp(e, a, n), o = new Lr(e, s), l = new kr([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: V(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return L.makeSvgSpan(["hide-tail"], [l], i);
}, eg = function(e, t) {
  var n = t.havingBaseSizing(), a = Hd("\\surd", e * n.sizeMultiplier, $d, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l = 0, c = 0, u = 0, d;
  return a.type === "small" ? (u = 1e3 + 1e3 * s + is, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), l = (1 + s + ss) / i, c = (1 + s) / i, o = os("sqrtMain", l, u, s, t), o.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (u = (1e3 + is) * la[a.size], c = (la[a.size] + s) / i, l = (la[a.size] + s + ss) / i, o = os("sqrtSize" + a.size, l, u, s, t), o.style.minWidth = "1.02em", d = 1 / i) : (l = e + s + ss, c = e + s, u = Math.floor(1e3 * e + s) + is, o = os("sqrtTall", l, u, s, t), o.style.minWidth = "0.742em", d = 1.056), o.height = c, o.style.height = V(l), {
    span: o,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, Bd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], tg = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], jd = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], la = [0, 1.2, 1.8, 2.4, 3], rg = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ce.contains(Bd, e) || ce.contains(jd, e))
    return zd(e, t, !1, n, a, i);
  if (ce.contains(tg, e))
    return Pd(e, la[t], !1, n, a, i);
  throw new G("Illegal delimiter: '" + e + "'");
}, ng = [{
  type: "small",
  style: pe.SCRIPTSCRIPT
}, {
  type: "small",
  style: pe.SCRIPT
}, {
  type: "small",
  style: pe.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], ag = [{
  type: "small",
  style: pe.SCRIPTSCRIPT
}, {
  type: "small",
  style: pe.SCRIPT
}, {
  type: "small",
  style: pe.TEXT
}, {
  type: "stack"
}], $d = [{
  type: "small",
  style: pe.SCRIPTSCRIPT
}, {
  type: "small",
  style: pe.SCRIPT
}, {
  type: "small",
  style: pe.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], ig = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Hd = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length && n[s].type !== "stack"; s++) {
    var o = aa(e, ig(n[s]), "math"), l = o.height + o.depth;
    if (n[s].type === "small") {
      var c = a.havingBaseStyle(n[s].style);
      l *= c.sizeMultiplier;
    }
    if (l > t)
      return n[s];
  }
  return n[n.length - 1];
}, qd = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  ce.contains(jd, e) ? o = ng : ce.contains(Bd, e) ? o = $d : o = ag;
  var l = Hd(e, t, o, a);
  return l.type === "small" ? Xp(e, l.style, n, a, i, s) : l.type === "large" ? zd(e, l.size, n, a, i, s) : Pd(e, t, n, a, i, s);
}, sg = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, l = 901, c = 5 / a.fontMetrics().ptPerEm, u = Math.max(t - o, n + o), d = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    u / 500 * l,
    2 * u - c
  );
  return qd(e, d, !0, a, i, s);
}, _r = {
  sqrtImage: eg,
  sizedDelim: rg,
  sizeToMaxHeight: la,
  customSizedDelim: qd,
  leftRightDelim: sg
}, Kl = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, og = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Fi(r, e) {
  var t = Ri(r);
  if (t && ce.contains(og, t.text))
    return t;
  throw t ? new G("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new G("Invalid delimiter type '" + r.type + "'", r);
}
Z({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Fi(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Kl[r.funcName].size,
      mclass: Kl[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? L.makeSpan([r.mclass]) : _r.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Yt(r.delim, r.mode));
    var t = new W.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = V(_r.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Wl(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
Z({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Fi(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
Z({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Fi(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = _e(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    Wl(r);
    for (var t = ft(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++)
      t[s].isMiddle ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var o;
    if (r.left === "." ? o = ga(e, ["mopen"]) : o = _r.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(o), i)
      for (var l = 1; l < t.length; l++) {
        var c = t[l], u = c.isMiddle;
        u && (t[l] = _r.leftRightDelim(u.delim, n, a, u.options, r.mode, []));
      }
    var d;
    if (r.right === ".")
      d = ga(e, ["mclose"]);
    else {
      var m = r.rightColor ? e.withColor(r.rightColor) : e;
      d = _r.leftRightDelim(r.right, n, a, m, r.mode, ["mclose"]);
    }
    return t.push(d), L.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Wl(r);
    var t = Dt(r.body, e);
    if (r.left !== ".") {
      var n = new W.MathNode("mo", [Yt(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new W.MathNode("mo", [Yt(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Zo(t);
  }
});
Z({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Fi(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = ga(e, []);
    else {
      t = _r.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? Yt("|", "text") : Yt(r.delim, r.mode), n = new W.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var n0 = (r, e) => {
  var t = L.wrapFragment(De(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s = 0, o = ce.isCharacterBox(r.body);
  if (n === "sout")
    i = L.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = Xe({
      number: 0.6,
      unit: "pt"
    }, e), c = Xe({
      number: 0.35,
      unit: "ex"
    }, e), u = e.havingBaseSizing();
    a = a / u.sizeMultiplier;
    var d = t.height + t.depth + l + c;
    t.style.paddingLeft = V(d / 2 + l);
    var m = Math.floor(1e3 * d * a), g = ep(m), v = new kr([new Lr("phase", g)], {
      width: "400em",
      height: V(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = L.makeSvgSpan(["hide-tail"], [v], e), i.style.height = V(d), s = t.depth + l + c;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var b = 0, x = 0, S = 0;
    /box/.test(n) ? (S = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), b = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : S), x = b) : n === "angl" ? (S = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), b = 4 * S, x = Math.max(0, 0.25 - t.depth)) : (b = o ? 0.2 : 0, x = b), i = Tr.encloseSpan(t, n, b, x, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = V(S)) : n === "angl" && S !== 0.049 && (i.style.borderTopWidth = V(S), i.style.borderRightWidth = V(S)), s = t.depth + x, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var w;
  if (r.backgroundColor)
    w = L.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: s
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var C = /cancel|phase/.test(n) ? ["svg-align"] : [];
    w = L.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: s,
          wrapperClasses: C
        }
      ]
    }, e);
  }
  return /cancel/.test(n) && (w.height = t.height, w.depth = t.depth), /cancel/.test(n) && !o ? L.makeSpan(["mord", "cancel-lap"], [w], e) : L.makeSpan(["mord"], [w], e);
}, a0 = (r, e) => {
  var t = 0, n = new W.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ze(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * t + "pt"), n.setAttribute("height", "+" + 2 * t + "pt"), n.setAttribute("lspace", t + "pt"), n.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        n.setAttribute("style", "border: " + a + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
Z({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = _e(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: n0,
  mathmlBuilder: a0
});
Z({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = _e(e[0], "color-token").color, s = _e(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: s,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: n0,
  mathmlBuilder: a0
});
Z({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
Z({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  },
  htmlBuilder: n0,
  mathmlBuilder: a0
});
Z({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Ud = {};
function cr(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, l = 0; l < t.length; ++l)
    Ud[t[l]] = o;
  i && (pi[e] = i), s && (gi[e] = s);
}
var Kd = {};
function _(r, e) {
  Kd[r] = e;
}
function Gl(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Li = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new G("{" + r.envName + "} can be used only in display mode.");
};
function i0(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function Ur(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: l,
    singleRow: c,
    emptySingleRow: u,
    maxNumCols: d,
    leqno: m
  } = e;
  if (r.gullet.beginGroup(), c || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var g = r.gullet.expandMacroAsText("\\arraystretch");
    if (g == null)
      s = 1;
    else if (s = parseFloat(g), !s || s < 0)
      throw new G("Invalid \\arraystretch: " + g);
  }
  r.gullet.beginGroup();
  var v = [], b = [v], x = [], S = [], w = l != null ? [] : void 0;
  function C() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function N() {
    w && (r.gullet.macros.get("\\df@tag") ? (w.push(r.subparse([new Wt("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (C(), S.push(Gl(r)); ; ) {
    var k = r.parseExpression(!1, c ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), k = {
      type: "ordgroup",
      mode: r.mode,
      body: k
    }, t && (k = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [k]
    }), v.push(k);
    var E = r.fetch().text;
    if (E === "&") {
      if (d && v.length === d) {
        if (c || o)
          throw new G("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (E === "\\end") {
      N(), v.length === 1 && k.type === "styling" && k.body[0].body.length === 0 && (b.length > 1 || !u) && b.pop(), S.length < b.length + 1 && S.push([]);
      break;
    } else if (E === "\\\\") {
      r.consume();
      var I = void 0;
      r.gullet.future().text !== " " && (I = r.parseSizeGroup(!0)), x.push(I ? I.value : null), N(), S.push(Gl(r)), v = [], b.push(v), C();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: s,
    body: b,
    cols: i,
    rowGaps: x,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: S,
    colSeparationType: o,
    tags: w,
    leqno: m
  };
}
function s0(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var dr = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(i), c = [], u = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, m = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var g = t.havingStyle(pe.SCRIPT).sizeMultiplier;
    m = 0.2778 * (g / t.sizeMultiplier);
  }
  var v = e.colSeparationType === "CD" ? Xe({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, b = 3 * d, x = e.arraystretch * v, S = 0.7 * x, w = 0.3 * x, C = 0;
  function N($e) {
    for (var It = 0; It < $e.length; ++It)
      It > 0 && (C += 0.25), c.push({
        pos: C,
        isDashed: $e[It]
      });
  }
  for (N(s[0]), n = 0; n < e.body.length; ++n) {
    var k = e.body[n], E = S, I = w;
    o < k.length && (o = k.length);
    var D = new Array(k.length);
    for (a = 0; a < k.length; ++a) {
      var M = De(k[a], t);
      I < M.depth && (I = M.depth), E < M.height && (E = M.height), D[a] = M;
    }
    var F = e.rowGaps[n], z = 0;
    F && (z = Xe(F, t), z > 0 && (z += w, I < z && (I = z), z = 0)), e.addJot && (I += b), D.height = E, D.depth = I, C += E, D.pos = C, C += I + z, l[n] = D, N(s[n + 1]);
  }
  var $ = C / 2 + t.fontMetrics().axisHeight, P = e.cols || [], X = [], Y, re, de = [];
  if (e.tags && e.tags.some(($e) => $e))
    for (n = 0; n < i; ++n) {
      var J = l[n], he = J.pos - $, le = e.tags[n], Ee = void 0;
      le === !0 ? Ee = L.makeSpan(["eqn-num"], [], t) : le === !1 ? Ee = L.makeSpan([], [], t) : Ee = L.makeSpan([], ft(le, t, !0), t), Ee.depth = J.depth, Ee.height = J.height, de.push({
        type: "elem",
        elem: Ee,
        shift: he
      });
    }
  for (
    a = 0, re = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || re < P.length;
    ++a, ++re
  ) {
    for (var oe = P[re] || {}, Pe = !0; oe.type === "separator"; ) {
      if (Pe || (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(t.fontMetrics().doubleRuleSep), X.push(Y)), oe.separator === "|" || oe.separator === ":") {
        var Be = oe.separator === "|" ? "solid" : "dashed", je = L.makeSpan(["vertical-separator"], [], t);
        je.style.height = V(C), je.style.borderRightWidth = V(u), je.style.borderRightStyle = Be, je.style.margin = "0 " + V(-u / 2);
        var dt = C - $;
        dt && (je.style.verticalAlign = V(-dt)), X.push(je);
      } else
        throw new G("Invalid separator type: " + oe.separator);
      re++, oe = P[re] || {}, Pe = !1;
    }
    if (!(a >= o)) {
      var Je = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Je = ce.deflt(oe.pregap, m), Je !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(Je), X.push(Y)));
      var Ge = [];
      for (n = 0; n < i; ++n) {
        var Rt = l[n], _t = Rt[a];
        if (_t) {
          var Qt = Rt.pos - $;
          _t.depth = Rt.depth, _t.height = Rt.height, Ge.push({
            type: "elem",
            elem: _t,
            shift: Qt
          });
        }
      }
      Ge = L.makeVList({
        positionType: "individualShift",
        children: Ge
      }, t), Ge = L.makeSpan(["col-align-" + (oe.align || "c")], [Ge]), X.push(Ge), (a < o - 1 || e.hskipBeforeAndAfter) && (Je = ce.deflt(oe.postgap, m), Je !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(Je), X.push(Y)));
    }
  }
  if (l = L.makeSpan(["mtable"], X), c.length > 0) {
    for (var ee = L.makeLineSpan("hline", t, u), we = L.makeLineSpan("hdashline", t, u), Ke = [{
      type: "elem",
      elem: l,
      shift: 0
    }]; c.length > 0; ) {
      var Ct = c.pop(), tt = Ct.pos - $;
      Ct.isDashed ? Ke.push({
        type: "elem",
        elem: we,
        shift: tt
      }) : Ke.push({
        type: "elem",
        elem: ee,
        shift: tt
      });
    }
    l = L.makeVList({
      positionType: "individualShift",
      children: Ke
    }, t);
  }
  if (de.length === 0)
    return L.makeSpan(["mord"], [l], t);
  var ht = L.makeVList({
    positionType: "individualShift",
    children: de
  }, t);
  return ht = L.makeSpan(["tag"], [ht], t), L.makeFragment([l, ht]);
}, lg = {
  c: "center ",
  l: "left ",
  r: "right "
}, hr = function(e, t) {
  for (var n = [], a = new W.MathNode("mtd", [], ["mtr-glue"]), i = new W.MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], c = 0; c < o.length; c++)
      l.push(new W.MathNode("mtd", [ze(o[c], t)]));
    e.tags && e.tags[s] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)), n.push(new W.MathNode("mtr", l));
  }
  var u = new W.MathNode("mtable", n), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  u.setAttribute("rowspacing", V(d));
  var m = "", g = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, b = "", x = !1, S = 0, w = v.length;
    v[0].type === "separator" && (m += "top ", S = 1), v[v.length - 1].type === "separator" && (m += "bottom ", w -= 1);
    for (var C = S; C < w; C++)
      v[C].type === "align" ? (g += lg[v[C].align], x && (b += "none "), x = !0) : v[C].type === "separator" && x && (b += v[C].separator === "|" ? "solid " : "dashed ", x = !1);
    u.setAttribute("columnalign", g.trim()), /[sd]/.test(b) && u.setAttribute("columnlines", b.trim());
  }
  if (e.colSeparationType === "align") {
    for (var N = e.cols || [], k = "", E = 1; E < N.length; E++)
      k += E % 2 ? "0em " : "1em ";
    u.setAttribute("columnspacing", k.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? u.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? u.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? u.setAttribute("columnspacing", "0.5em") : u.setAttribute("columnspacing", "1em");
  var I = "", D = e.hLinesBeforeRow;
  m += D[0].length > 0 ? "left " : "", m += D[D.length - 1].length > 0 ? "right " : "";
  for (var M = 1; M < D.length - 1; M++)
    I += D[M].length === 0 ? "none " : D[M][0] ? "dashed " : "solid ";
  return /[sd]/.test(I) && u.setAttribute("rowlines", I.trim()), m !== "" && (u = new W.MathNode("menclose", [u]), u.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (u = new W.MathNode("mstyle", [u]), u.setAttribute("scriptlevel", "1")), u;
}, Wd = function(e, t) {
  e.envName.indexOf("ed") === -1 && Li(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", s = Ur(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : i0(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, l = 0, c = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var u = "", d = 0; d < t[0].body.length; d++) {
      var m = _e(t[0].body[d], "textord");
      u += m.text;
    }
    o = Number(u), l = o * 2;
  }
  var g = !l;
  s.body.forEach(function(S) {
    for (var w = 1; w < S.length; w += 2) {
      var C = _e(S[w], "styling"), N = _e(C.body[0], "ordgroup");
      N.body.unshift(c);
    }
    if (g)
      l < S.length && (l = S.length);
    else {
      var k = S.length / 2;
      if (o < k)
        throw new G("Too many math in a row: " + ("expected " + o + ", but got " + k), S[0]);
    }
  });
  for (var v = 0; v < l; ++v) {
    var b = "r", x = 0;
    v % 2 === 1 ? b = "l" : v > 0 && g && (x = 1), n[v] = {
      type: "align",
      align: b,
      pregap: x,
      postgap: 0
    };
  }
  return s.colSeparationType = g ? "align" : "alignat", s;
};
cr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ri(e[0]), n = t ? [e[0]] : _e(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = e0(s), l = o.text;
      if ("lcr".indexOf(l) !== -1)
        return {
          type: "align",
          align: l
        };
      if (l === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (l === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new G("Unknown column alignment: " + l, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return Ur(r.parser, i, s0(r.envName));
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, "lcr".indexOf(t) === -1)
          throw new G("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = Ur(r.parser, n, s0(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(s).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = Ur(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ri(e[0]), n = t ? [e[0]] : _e(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = e0(s), l = o.text;
      if ("lc".indexOf(l) !== -1)
        return {
          type: "align",
          align: l
        };
      throw new G("Unknown column alignment: " + l, s);
    });
    if (a.length > 1)
      throw new G("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = Ur(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = Ur(r.parser, e, s0(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Wd,
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    ce.contains(["gather", "gather*"], r.envName) && Li(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: i0(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return Ur(r.parser, e, "display");
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Wd,
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Li(r);
    var e = {
      autoTag: i0(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return Ur(r.parser, e, "display");
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
cr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Li(r), Yp(r.parser);
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
_("\\nonumber", "\\gdef\\@eqnsw{0}");
_("\\notag", "\\nonumber");
Z({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new G(r.funcName + " valid only within array environment");
  }
});
var Yl = Ud;
Z({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    if (a.type !== "ordgroup")
      throw new G("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += _e(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Yl.hasOwnProperty(i))
        throw new G("No such environment: " + i, a);
      var o = Yl[i], {
        args: l,
        optArgs: c
      } = t.parseArguments("\\begin{" + i + "}", o), u = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = o.handler(u, l, c);
      t.expect("\\end", !1);
      var m = t.nextToken, g = _e(t.parseFunction(), "environment");
      if (g.name !== i)
        throw new G("Mismatch: \\begin{" + i + "} matched by \\end{" + g.name + "}", m);
      return d;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Gd = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return De(r.body, n);
}, Yd = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ze(r.body, n);
}, Vl = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
Z({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = vi(e[0]), i = n;
    return i in Vl && (i = Vl[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Gd,
  mathmlBuilder: Yd
});
Z({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0], a = ce.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ii(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: a
    };
  }
});
Z({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: a
    } = r, {
      mode: i
    } = t, s = t.parseExpression(!0, a), o = "math" + n.slice(1);
    return {
      type: "font",
      mode: i,
      font: o,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: s
      }
    };
  },
  htmlBuilder: Gd,
  mathmlBuilder: Yd
});
var Vd = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= pe.SCRIPT.id ? t.text() : pe.DISPLAY : r === "text" && t.size === pe.DISPLAY.size ? t = pe.TEXT : r === "script" ? t = pe.SCRIPT : r === "scriptscript" && (t = pe.SCRIPTSCRIPT), t;
}, o0 = (r, e) => {
  var t = Vd(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = De(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  i = e.havingStyle(a);
  var c = De(r.denom, i, e), u, d, m;
  r.hasBarLine ? (r.barSize ? (d = Xe(r.barSize, e), u = L.makeLineSpan("frac-line", e, d)) : u = L.makeLineSpan("frac-line", e), d = u.height, m = u.height) : (u = null, d = 0, m = e.fontMetrics().defaultRuleThickness);
  var g, v, b;
  t.size === pe.DISPLAY.size || r.size === "display" ? (g = e.fontMetrics().num1, d > 0 ? v = 3 * m : v = 7 * m, b = e.fontMetrics().denom1) : (d > 0 ? (g = e.fontMetrics().num2, v = m) : (g = e.fontMetrics().num3, v = 3 * m), b = e.fontMetrics().denom2);
  var x;
  if (u) {
    var w = e.fontMetrics().axisHeight;
    g - s.depth - (w + 0.5 * d) < v && (g += v - (g - s.depth - (w + 0.5 * d))), w - 0.5 * d - (c.height - b) < v && (b += v - (w - 0.5 * d - (c.height - b)));
    var C = -(w - 0.5 * d);
    x = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: b
      }, {
        type: "elem",
        elem: u,
        shift: C
      }, {
        type: "elem",
        elem: s,
        shift: -g
      }]
    }, e);
  } else {
    var S = g - s.depth - (c.height - b);
    S < v && (g += 0.5 * (v - S), b += 0.5 * (v - S)), x = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: c,
        shift: b
      }, {
        type: "elem",
        elem: s,
        shift: -g
      }]
    }, e);
  }
  i = e.havingStyle(t), x.height *= i.sizeMultiplier / e.sizeMultiplier, x.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var N;
  t.size === pe.DISPLAY.size ? N = e.fontMetrics().delim1 : t.size === pe.SCRIPTSCRIPT.size ? N = e.havingStyle(pe.SCRIPT).fontMetrics().delim2 : N = e.fontMetrics().delim2;
  var k, E;
  return r.leftDelim == null ? k = ga(e, ["mopen"]) : k = _r.customSizedDelim(r.leftDelim, N, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? E = L.makeSpan([]) : r.rightDelim == null ? E = ga(e, ["mclose"]) : E = _r.customSizedDelim(r.rightDelim, N, !0, e.havingStyle(t), r.mode, ["mclose"]), L.makeSpan(["mord"].concat(i.sizingClasses(e)), [k, L.makeSpan(["mfrac"], [x]), E], e);
}, l0 = (r, e) => {
  var t = new W.MathNode("mfrac", [ze(r.numer, e), ze(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Xe(r.barSize, e);
    t.setAttribute("linethickness", V(n));
  }
  var a = Vd(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new W.MathNode("mstyle", [t]);
    var i = a.size === pe.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var s = [];
    if (r.leftDelim != null) {
      var o = new W.MathNode("mo", [new W.TextNode(r.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), s.push(o);
    }
    if (s.push(t), r.rightDelim != null) {
      var l = new W.MathNode("mo", [new W.TextNode(r.rightDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), s.push(l);
    }
    return Zo(s);
  }
  return t;
};
Z({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1], s, o = null, l = null, c = "auto";
    switch (n) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        s = !0;
        break;
      case "\\\\atopfrac":
        s = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        s = !1, o = "(", l = ")";
        break;
      case "\\\\bracefrac":
        s = !1, o = "\\{", l = "\\}";
        break;
      case "\\\\brackfrac":
        s = !1, o = "[", l = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (n) {
      case "\\dfrac":
      case "\\dbinom":
        c = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        c = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: a,
      denom: i,
      hasBarLine: s,
      leftDelim: o,
      rightDelim: l,
      size: c,
      barSize: null
    };
  },
  htmlBuilder: o0,
  mathmlBuilder: l0
});
Z({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: a,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
Z({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, a;
    switch (t) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: n
    };
  }
});
var Xl = ["display", "text", "script", "scriptscript"], Jl = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
Z({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], a = e[5], i = vi(e[0]), s = i.type === "atom" && i.family === "open" ? Jl(i.text) : null, o = vi(e[1]), l = o.type === "atom" && o.family === "close" ? Jl(o.text) : null, c = _e(e[2], "size"), u, d = null;
    c.isBlank ? u = !0 : (d = c.value, u = d.number > 0);
    var m = "auto", g = e[3];
    if (g.type === "ordgroup") {
      if (g.body.length > 0) {
        var v = _e(g.body[0], "textord");
        m = Xl[Number(v.text)];
      }
    } else
      g = _e(g, "textord"), m = Xl[Number(g.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: u,
      barSize: d,
      leftDelim: s,
      rightDelim: l,
      size: m
    };
  },
  htmlBuilder: o0,
  mathmlBuilder: l0
});
Z({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: _e(e[0], "size").value,
      token: a
    };
  }
});
Z({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = Bf(_e(e[1], "infix").size), s = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: s,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: o0,
  mathmlBuilder: l0
});
var Xd = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? De(r.sup, e.havingStyle(t.sup()), e) : De(r.sub, e.havingStyle(t.sub()), e), a = _e(r.base, "horizBrace")) : a = _e(r, "horizBrace");
  var i = De(a.base, e.havingBaseStyle(pe.DISPLAY)), s = Tr.svgSpan(a, e), o;
  if (a.isOver ? (o = L.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: s
    }]
  }, e), o.children[0].children[0].children[1].classes.push("svg-align")) : (o = L.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + s.height,
    children: [{
      type: "elem",
      elem: s
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), o.children[0].children[0].children[0].classes.push("svg-align")), n) {
    var l = L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }, e) : o = L.makeVList({
      positionType: "bottom",
      positionData: l.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: l
      }]
    }, e);
  }
  return L.makeSpan(["mord", a.isOver ? "mover" : "munder"], [o], e);
}, ug = (r, e) => {
  var t = Tr.mathMLnode(r.label);
  return new W.MathNode(r.isOver ? "mover" : "munder", [ze(r.base, e), t]);
};
Z({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: /^\\over/.test(n),
      base: e[0]
    };
  },
  htmlBuilder: Xd,
  mathmlBuilder: ug
});
Z({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], a = _e(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: at(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = ft(r.body, e, !1);
    return L.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = zr(r.body, e);
    return t instanceof qt || (t = new qt("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
Z({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = _e(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var s = n[i];
      s === "~" && (s = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: s
      });
    }
    var o = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: at(o)
    };
  }
});
Z({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: at(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = ft(r.body, e, !1);
    return L.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new W.MathNode("mrow", Dt(r.body, e));
  }
});
Z({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r, i = _e(e[0], "raw").string, s = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, l = {};
    switch (n) {
      case "\\htmlClass":
        l.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        l.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        l.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var c = i.split(","), u = 0; u < c.length; u++) {
          var d = c[u].split("=");
          if (d.length !== 2)
            throw new G("Error parsing key-value for \\htmlData");
          l["data-" + d[0].trim()] = d[1].trim();
        }
        o = {
          command: "\\htmlData",
          attributes: l
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o) ? {
      type: "html",
      mode: t.mode,
      attributes: l,
      body: at(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = ft(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = L.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => zr(r.body, e)
});
Z({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: at(e[0]),
      mathml: at(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = ft(r.html, e, !1);
    return L.makeFragment(t);
  },
  mathmlBuilder: (r, e) => zr(r.mathml, e)
});
var ls = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!pd(n))
    throw new G("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
Z({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, s = {
      number: 0,
      unit: "em"
    }, o = "";
    if (t[0])
      for (var l = _e(t[0], "raw").string, c = l.split(","), u = 0; u < c.length; u++) {
        var d = c[u].split("=");
        if (d.length === 2) {
          var m = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              a = ls(m);
              break;
            case "height":
              i = ls(m);
              break;
            case "totalheight":
              s = ls(m);
              break;
            default:
              throw new G("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var g = _e(e[0], "url").url;
    return o === "" && (o = g, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: g
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: a,
      height: i,
      totalheight: s,
      src: g
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = Xe(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = Xe(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = Xe(r.width, e));
    var i = {
      height: V(t + n)
    };
    a > 0 && (i.width = V(a)), n > 0 && (i.verticalAlign = V(-n));
    var s = new up(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new W.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = Xe(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = Xe(r.totalheight, e) - n, t.setAttribute("valign", V(-a))), t.setAttribute("height", V(n + a)), r.width.number > 0) {
      var i = Xe(r.width, e);
      t.setAttribute("width", V(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
Z({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = _e(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m", s = a.value.unit === "mu";
      i ? (s || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(r, e) {
    return L.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = Xe(r.dimension, e);
    return new W.SpaceNode(t);
  }
});
Z({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = L.makeSpan([], [De(r.body, e)]), t = L.makeSpan(["inner"], [t], e)) : t = L.makeSpan(["inner"], [De(r.body, e)]);
    var n = L.makeSpan(["fix"], []), a = L.makeSpan([r.alignment], [t, n], e), i = L.makeSpan(["strut"]);
    return i.style.height = V(a.height + a.depth), a.depth && (i.style.verticalAlign = V(-a.depth)), a.children.unshift(i), a = L.makeSpan(["thinbox"], [a], e), L.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new W.MathNode("mpadded", [ze(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
Z({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", s = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      body: s
    };
  }
});
Z({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new G("Mismatched " + r.funcName);
  }
});
var Zl = (r, e) => {
  switch (e.style.size) {
    case pe.DISPLAY.size:
      return r.display;
    case pe.TEXT.size:
      return r.text;
    case pe.SCRIPT.size:
      return r.script;
    case pe.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
Z({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: at(e[0]),
      text: at(e[1]),
      script: at(e[2]),
      scriptscript: at(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Zl(r, e), n = ft(t, e, !1);
    return L.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Zl(r, e);
    return zr(t, e);
  }
});
var Jd = (r, e, t, n, a, i, s) => {
  r = L.makeSpan([], [r]);
  var o = t && ce.isCharacterBox(t), l, c;
  if (e) {
    var u = De(e, n.havingStyle(a.sup()), n);
    c = {
      elem: u,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - u.depth)
    };
  }
  if (t) {
    var d = De(t, n.havingStyle(a.sub()), n);
    l = {
      elem: d,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - d.height)
    };
  }
  var m;
  if (c && l) {
    var g = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + s;
    m = L.makeVList({
      positionType: "bottom",
      positionData: g,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: V(-i)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: V(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else if (l) {
    var v = r.height - s;
    m = L.makeVList({
      positionType: "top",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: V(-i)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, n);
  } else if (c) {
    var b = r.depth + s;
    m = L.makeVList({
      positionType: "bottom",
      positionData: b,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: V(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    }, n);
  } else
    return r;
  var x = [m];
  if (l && i !== 0 && !o) {
    var S = L.makeSpan(["mspace"], [], n);
    S.style.marginRight = V(i), x.unshift(S);
  }
  return L.makeSpan(["mop", "op-limits"], x, n);
}, Zd = ["\\smallint"], Hn = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = _e(r.base, "op"), a = !0) : i = _e(r, "op");
  var s = e.style, o = !1;
  s.size === pe.DISPLAY.size && i.symbol && !ce.contains(Zd, i.name) && (o = !0);
  var l;
  if (i.symbol) {
    var c = o ? "Size2-Regular" : "Size1-Regular", u = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (u = i.name.slice(1), i.name = u === "oiint" ? "\\iint" : "\\iiint"), l = L.makeSymbol(i.name, c, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), u.length > 0) {
      var d = l.italic, m = L.staticSvg(u + "Size" + (o ? "2" : "1"), e);
      l = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: l,
          shift: 0
        }, {
          type: "elem",
          elem: m,
          shift: o ? 0.08 : 0
        }]
      }, e), i.name = "\\" + u, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (i.body) {
    var g = ft(i.body, e, !0);
    g.length === 1 && g[0] instanceof Gt ? (l = g[0], l.classes[0] = "mop") : l = L.makeSpan(["mop"], g, e);
  } else {
    for (var v = [], b = 1; b < i.name.length; b++)
      v.push(L.mathsym(i.name[b], i.mode, e));
    l = L.makeSpan(["mop"], v, e);
  }
  var x = 0, S = 0;
  return (l instanceof Gt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (x = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, S = l.italic), a ? Jd(l, t, n, e, s, S, x) : (x && (l.style.position = "relative", l.style.top = V(x)), l);
}, Fa = (r, e) => {
  var t;
  if (r.symbol)
    t = new qt("mo", [Yt(r.name, r.mode)]), ce.contains(Zd, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new qt("mo", Dt(r.body, e));
  else {
    t = new qt("mi", [new oa(r.name.slice(1))]);
    var n = new qt("mo", [Yt("⁡", "text")]);
    r.parentIsSupSub ? t = new qt("mrow", [t, n]) : t = Ed([t, n]);
  }
  return t;
}, cg = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
Z({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = n;
    return a.length === 1 && (a = cg[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: Hn,
  mathmlBuilder: Fa
});
Z({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: at(n)
    };
  },
  htmlBuilder: Hn,
  mathmlBuilder: Fa
});
var dg = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
Z({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Hn,
  mathmlBuilder: Fa
});
Z({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Hn,
  mathmlBuilder: Fa
});
Z({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = dg[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Hn,
  mathmlBuilder: Fa
});
var Qd = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = _e(r.base, "operatorname"), a = !0) : i = _e(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((d) => {
      var m = d.text;
      return typeof m == "string" ? {
        type: "textord",
        mode: d.mode,
        text: m
      } : d;
    }), l = ft(o, e.withFont("mathrm"), !0), c = 0; c < l.length; c++) {
      var u = l[c];
      u instanceof Gt && (u.text = u.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = L.makeSpan(["mop"], l, e);
  } else
    s = L.makeSpan(["mop"], [], e);
  return a ? Jd(s, t, n, e, e.style, 0, 0) : s;
}, hg = (r, e) => {
  for (var t = Dt(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof W.SpaceNode)) if (i instanceof W.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof W.TextNode ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = t.map((u) => u.toText()).join("");
    t = [new W.TextNode(o)];
  }
  var l = new W.MathNode("mi", t);
  l.setAttribute("mathvariant", "normal");
  var c = new W.MathNode("mo", [Yt("⁡", "text")]);
  return r.parentIsSupSub ? new W.MathNode("mrow", [l, c]) : W.newDocumentFragment([l, c]);
};
Z({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: at(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Qd,
  mathmlBuilder: hg
});
_("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
gn({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? L.makeFragment(ft(r.body, e, !1)) : L.makeSpan(["mord"], ft(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return zr(r.body, e, !0);
  }
});
Z({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = De(r.body, e.havingCrampedStyle()), n = L.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: a
      }]
    }, e);
    return L.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mo", [new W.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new W.MathNode("mover", [ze(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
Z({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: at(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = ft(r.body, e.withPhantom(), !1);
    return L.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = Dt(r.body, e);
    return new W.MathNode("mphantom", t);
  }
});
Z({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = L.makeSpan([], [De(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0, t.children[n].depth = 0;
    return t = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), L.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Dt(at(r.body), e), n = new W.MathNode("mphantom", t), a = new W.MathNode("mpadded", [n]);
    return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a;
  }
});
Z({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = L.makeSpan(["inner"], [De(r.body, e.withPhantom())]), n = L.makeSpan(["fix"], []);
    return L.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Dt(at(r.body), e), n = new W.MathNode("mphantom", t), a = new W.MathNode("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
Z({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, n = _e(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = De(r.body, e), n = Xe(r.dy, e);
    return L.makeVList({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mpadded", [ze(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
Z({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
Z({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = _e(e[0], "size"), s = _e(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && _e(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = L.makeSpan(["mord", "rule"], [], e), n = Xe(r.width, e), a = Xe(r.height, e), i = r.shift ? Xe(r.shift, e) : 0;
    return t.style.borderRightWidth = V(n), t.style.borderTopWidth = V(a), t.style.bottom = V(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Xe(r.width, e), n = Xe(r.height, e), a = r.shift ? Xe(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new W.MathNode("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", V(t)), s.setAttribute("height", V(n));
    var o = new W.MathNode("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", V(a)) : (o.setAttribute("height", V(a)), o.setAttribute("depth", V(-a))), o.setAttribute("voffset", V(a)), o;
  }
});
function eh(r, e, t) {
  for (var n = ft(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return L.makeFragment(n);
}
var Ql = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], mg = (r, e) => {
  var t = e.havingSize(r.size);
  return eh(r.body, t, e);
};
Z({
  type: "sizing",
  names: Ql,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Ql.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: mg,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = Dt(r.body, t), a = new W.MathNode("mstyle", n);
    return a.setAttribute("mathsize", V(t.sizeMultiplier)), a;
  }
});
Z({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = !1, i = !1, s = t[0] && _e(t[0], "ordgroup");
    if (s)
      for (var o = "", l = 0; l < s.body.length; ++l) {
        var c = s.body[l];
        if (o = c.text, o === "t")
          a = !0;
        else if (o === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var u = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: u,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = L.makeSpan([], [De(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].depth = 0;
    var i = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return L.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new W.MathNode("mpadded", [ze(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
Z({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = De(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = L.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < pe.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: l,
      ruleWidth: c,
      advanceWidth: u
    } = _r.sqrtImage(o, e), d = l.height - c;
    d > t.height + t.depth + s && (s = (s + d - t.height - t.depth) / 2);
    var m = l.height - t.height - s - c;
    t.style.paddingLeft = V(u);
    var g = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + m)
      }, {
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: c
      }]
    }, e);
    if (r.index) {
      var v = e.havingStyle(pe.SCRIPTSCRIPT), b = De(r.index, v, e), x = 0.6 * (g.height - g.depth), S = L.makeVList({
        positionType: "shift",
        positionData: -x,
        children: [{
          type: "elem",
          elem: b
        }]
      }, e), w = L.makeSpan(["root"], [S]);
      return L.makeSpan(["mord", "sqrt"], [w, g], e);
    } else
      return L.makeSpan(["mord", "sqrt"], [g], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new W.MathNode("mroot", [ze(t, e), ze(n, e)]) : new W.MathNode("msqrt", [ze(t, e)]);
  }
});
var eu = {
  display: pe.DISPLAY,
  text: pe.TEXT,
  script: pe.SCRIPT,
  scriptscript: pe.SCRIPTSCRIPT
};
Z({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!0, t), s = n.slice(1, n.length - 5);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: s,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = eu[r.style], n = e.havingStyle(t).withFont("");
    return eh(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = eu[r.style], n = e.havingStyle(t), a = Dt(r.body, n), i = new W.MathNode("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var fg = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === pe.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? Hn : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === pe.DISPLAY.size || n.limits);
      return i ? Qd : null;
    } else {
      if (n.type === "accent")
        return ce.isCharacterBox(n.base) ? t0 : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? Xd : null;
      } else
        return null;
    }
  else return null;
};
gn({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = fg(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = De(n, e), o, l, c = e.fontMetrics(), u = 0, d = 0, m = n && ce.isCharacterBox(n);
    if (a) {
      var g = e.havingStyle(e.style.sup());
      o = De(a, g, e), m || (u = s.height - g.fontMetrics().supDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      l = De(i, v, e), m || (d = s.depth + v.fontMetrics().subDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    var b;
    e.style === pe.DISPLAY ? b = c.sup1 : e.style.cramped ? b = c.sup3 : b = c.sup2;
    var x = e.sizeMultiplier, S = V(0.5 / c.ptPerEm / x), w = null;
    if (l) {
      var C = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (s instanceof Gt || C) && (w = V(-s.italic));
    }
    var N;
    if (o && l) {
      u = Math.max(u, b, o.depth + 0.25 * c.xHeight), d = Math.max(d, c.sub2);
      var k = c.defaultRuleThickness, E = 4 * k;
      if (u - o.depth - (l.height - d) < E) {
        d = E - (u - o.depth) + l.height;
        var I = 0.8 * c.xHeight - (u - o.depth);
        I > 0 && (u += I, d -= I);
      }
      var D = [{
        type: "elem",
        elem: l,
        shift: d,
        marginRight: S,
        marginLeft: w
      }, {
        type: "elem",
        elem: o,
        shift: -u,
        marginRight: S
      }];
      N = L.makeVList({
        positionType: "individualShift",
        children: D
      }, e);
    } else if (l) {
      d = Math.max(d, c.sub1, l.height - 0.8 * c.xHeight);
      var M = [{
        type: "elem",
        elem: l,
        marginLeft: w,
        marginRight: S
      }];
      N = L.makeVList({
        positionType: "shift",
        positionData: d,
        children: M
      }, e);
    } else if (o)
      u = Math.max(u, b, o.depth + 0.25 * c.xHeight), N = L.makeVList({
        positionType: "shift",
        positionData: -u,
        children: [{
          type: "elem",
          elem: o,
          marginRight: S
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var F = Ws(s, "right") || "mord";
    return L.makeSpan([F], [s, L.makeSpan(["msupsub"], [N])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [ze(r.base, e)];
    r.sub && i.push(ze(r.sub, e)), r.sup && i.push(ze(r.sup, e));
    var s;
    if (t)
      s = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var c = r.base;
        c && c.type === "op" && c.limits && e.style === pe.DISPLAY || c && c.type === "operatorname" && c.alwaysHandleSupSub && (e.style === pe.DISPLAY || c.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === pe.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === pe.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === pe.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === pe.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new W.MathNode(s, i);
  }
});
gn({
  type: "atom",
  htmlBuilder(r, e) {
    return L.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mo", [Yt(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Qo(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var th = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
gn({
  type: "mathord",
  htmlBuilder(r, e) {
    return L.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mi", [Yt(r.text, r.mode, e)]), n = Qo(r, e) || "italic";
    return n !== th[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
gn({
  type: "textord",
  htmlBuilder(r, e) {
    return L.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Yt(r.text, r.mode, e), n = Qo(r, e) || "normal", a;
    return r.mode === "text" ? a = new W.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new W.MathNode("mn", [t]) : r.text === "\\prime" ? a = new W.MathNode("mo", [t]) : a = new W.MathNode("mi", [t]), n !== th[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var us = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, cs = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
gn({
  type: "spacing",
  htmlBuilder(r, e) {
    if (cs.hasOwnProperty(r.text)) {
      var t = cs[r.text].className || "";
      if (r.mode === "text") {
        var n = L.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return L.makeSpan(["mspace", t], [L.mathsym(r.text, r.mode, e)], e);
    } else {
      if (us.hasOwnProperty(r.text))
        return L.makeSpan(["mspace", us[r.text]], [], e);
      throw new G('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (cs.hasOwnProperty(r.text))
      t = new W.MathNode("mtext", [new W.TextNode(" ")]);
    else {
      if (us.hasOwnProperty(r.text))
        return new W.MathNode("mspace");
      throw new G('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var tu = () => {
  var r = new W.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
gn({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mtable", [new W.MathNode("mtr", [tu(), new W.MathNode("mtd", [zr(r.body, e)]), tu(), new W.MathNode("mtd", [zr(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var ru = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, nu = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, pg = {
  "\\textit": "textit",
  "\\textup": "textup"
}, au = (r, e) => {
  var t = r.font;
  if (t) {
    if (ru[t])
      return e.withTextFontFamily(ru[t]);
    if (nu[t])
      return e.withTextFontWeight(nu[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(pg[t]);
};
Z({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: at(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = au(r, e), n = ft(r.body, t, !0);
    return L.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = au(r, e);
    return zr(r.body, t);
  }
});
Z({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = De(r.body, e), n = L.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = L.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return L.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new W.MathNode("mo", [new W.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new W.MathNode("munder", [ze(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
Z({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = De(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return L.makeVList({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new W.MathNode("mpadded", [ze(r.body, e)], ["vcenter"]);
  }
});
Z({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = iu(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(L.makeSymbol(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return L.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), L.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new W.TextNode(iu(r)), n = new W.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var iu = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Dr = Cd, rh = `[ \r
	]`, gg = "\\\\[a-zA-Z@]+", vg = "\\\\[^\uD800-\uDFFF]", bg = "(" + gg + ")" + rh + "*", yg = `\\\\(
|[ \r	]+
?)[ \r	]*`, Xs = "[̀-ͯ]", xg = new RegExp(Xs + "+$"), wg = "(" + rh + "+)|" + // whitespace
(yg + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Xs + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Xs + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + bg) + // \macroName + spaces
("|" + vg + ")");
class su {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(wg, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new Wt("EOF", new Ft(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new Wt(e[t], new Ft(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Wt(a, new Ft(this, t, this.tokenRegex.lastIndex));
  }
}
class Sg {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new G("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, n) {
    if (n === void 0 && (n = !1), n) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var _g = Kd;
_("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
_("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
_("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
_("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
_("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
_("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
_("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var ou = {
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
  F: 15
};
_("\\char", function(r) {
  var e = r.popToken(), t, n = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new G("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = ou[e.text], n == null || n >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = ou[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var u0 = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new G("\\newcommand's first argument must be a macro name");
  var a = n[0].text, i = r.isDefined(a);
  if (i && !e)
    throw new G("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new G("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var s = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var o = "", l = r.expandNextToken(); l.text !== "]" && l.text !== "EOF"; )
      o += l.text, l = r.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new G("Invalid number of arguments: " + o);
    s = parseInt(o), n = r.consumeArg().tokens;
  }
  return r.macros.set(a, {
    tokens: n,
    numArgs: s
  }), "";
};
_("\\newcommand", (r) => u0(r, !1, !0));
_("\\renewcommand", (r) => u0(r, !0, !1));
_("\\providecommand", (r) => u0(r, !0, !0));
_("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
_("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
_("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), Dr[t], qe.math[t], qe.text[t]), "";
});
_("\\bgroup", "{");
_("\\egroup", "}");
_("~", "\\nobreakspace");
_("\\lq", "`");
_("\\rq", "'");
_("\\aa", "\\r a");
_("\\AA", "\\r A");
_("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
_("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
_("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
_("ℬ", "\\mathscr{B}");
_("ℰ", "\\mathscr{E}");
_("ℱ", "\\mathscr{F}");
_("ℋ", "\\mathscr{H}");
_("ℐ", "\\mathscr{I}");
_("ℒ", "\\mathscr{L}");
_("ℳ", "\\mathscr{M}");
_("ℛ", "\\mathscr{R}");
_("ℭ", "\\mathfrak{C}");
_("ℌ", "\\mathfrak{H}");
_("ℨ", "\\mathfrak{Z}");
_("\\Bbbk", "\\Bbb{k}");
_("·", "\\cdotp");
_("\\llap", "\\mathllap{\\textrm{#1}}");
_("\\rlap", "\\mathrlap{\\textrm{#1}}");
_("\\clap", "\\mathclap{\\textrm{#1}}");
_("\\mathstrut", "\\vphantom{(}");
_("\\underbar", "\\underline{\\text{#1}}");
_("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
_("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
_("\\ne", "\\neq");
_("≠", "\\neq");
_("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
_("∉", "\\notin");
_("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
_("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
_("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
_("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
_("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
_("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
_("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
_("⟂", "\\perp");
_("‼", "\\mathclose{!\\mkern-0.8mu!}");
_("∌", "\\notni");
_("⌜", "\\ulcorner");
_("⌝", "\\urcorner");
_("⌞", "\\llcorner");
_("⌟", "\\lrcorner");
_("©", "\\copyright");
_("®", "\\textregistered");
_("️", "\\textregistered");
_("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
_("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
_("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
_("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
_("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
_("⋮", "\\vdots");
_("\\varGamma", "\\mathit{\\Gamma}");
_("\\varDelta", "\\mathit{\\Delta}");
_("\\varTheta", "\\mathit{\\Theta}");
_("\\varLambda", "\\mathit{\\Lambda}");
_("\\varXi", "\\mathit{\\Xi}");
_("\\varPi", "\\mathit{\\Pi}");
_("\\varSigma", "\\mathit{\\Sigma}");
_("\\varUpsilon", "\\mathit{\\Upsilon}");
_("\\varPhi", "\\mathit{\\Phi}");
_("\\varPsi", "\\mathit{\\Psi}");
_("\\varOmega", "\\mathit{\\Omega}");
_("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
_("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
_("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
_("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
_("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
_("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var lu = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
_("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in lu ? e = lu[t] : (t.slice(0, 4) === "\\not" || t in qe.math && ce.contains(["bin", "rel"], qe.math[t].group)) && (e = "\\dotsb"), e;
});
var c0 = {
  // \rightdelim@ checks for the following:
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
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
_("\\dotso", function(r) {
  var e = r.future().text;
  return e in c0 ? "\\ldots\\," : "\\ldots";
});
_("\\dotsc", function(r) {
  var e = r.future().text;
  return e in c0 && e !== "," ? "\\ldots\\," : "\\ldots";
});
_("\\cdots", function(r) {
  var e = r.future().text;
  return e in c0 ? "\\@cdots\\," : "\\@cdots";
});
_("\\dotsb", "\\cdots");
_("\\dotsm", "\\cdots");
_("\\dotsi", "\\!\\cdots");
_("\\dotsx", "\\ldots\\,");
_("\\DOTSI", "\\relax");
_("\\DOTSB", "\\relax");
_("\\DOTSX", "\\relax");
_("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
_("\\,", "\\tmspace+{3mu}{.1667em}");
_("\\thinspace", "\\,");
_("\\>", "\\mskip{4mu}");
_("\\:", "\\tmspace+{4mu}{.2222em}");
_("\\medspace", "\\:");
_("\\;", "\\tmspace+{5mu}{.2777em}");
_("\\thickspace", "\\;");
_("\\!", "\\tmspace-{3mu}{.1667em}");
_("\\negthinspace", "\\!");
_("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
_("\\negthickspace", "\\tmspace-{5mu}{.277em}");
_("\\enspace", "\\kern.5em ");
_("\\enskip", "\\hskip.5em\\relax");
_("\\quad", "\\hskip1em\\relax");
_("\\qquad", "\\hskip2em\\relax");
_("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
_("\\tag@paren", "\\tag@literal{({#1})}");
_("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
_("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
_("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
_("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
_("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
_("\\newline", "\\\\\\relax");
_("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var nh = V(ar["Main-Regular"][84][1] - 0.7 * ar["Main-Regular"][65][1]);
_("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + nh + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
_("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + nh + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
_("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
_("\\@hspace", "\\hskip #1\\relax");
_("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
_("\\ordinarycolon", ":");
_("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
_("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
_("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
_("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
_("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
_("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
_("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
_("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
_("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
_("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
_("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
_("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
_("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
_("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
_("∷", "\\dblcolon");
_("∹", "\\eqcolon");
_("≔", "\\coloneqq");
_("≕", "\\eqqcolon");
_("⩴", "\\Coloneqq");
_("\\ratio", "\\vcentcolon");
_("\\coloncolon", "\\dblcolon");
_("\\colonequals", "\\coloneqq");
_("\\coloncolonequals", "\\Coloneqq");
_("\\equalscolon", "\\eqqcolon");
_("\\equalscoloncolon", "\\Eqqcolon");
_("\\colonminus", "\\coloneq");
_("\\coloncolonminus", "\\Coloneq");
_("\\minuscolon", "\\eqcolon");
_("\\minuscoloncolon", "\\Eqcolon");
_("\\coloncolonapprox", "\\Colonapprox");
_("\\coloncolonsim", "\\Colonsim");
_("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
_("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
_("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
_("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
_("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
_("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
_("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
_("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
_("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
_("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
_("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
_("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
_("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
_("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
_("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
_("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
_("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
_("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
_("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
_("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
_("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
_("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
_("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
_("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
_("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
_("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
_("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
_("\\imath", "\\html@mathml{\\@imath}{ı}");
_("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
_("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
_("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
_("⟦", "\\llbracket");
_("⟧", "\\rrbracket");
_("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
_("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
_("⦃", "\\lBrace");
_("⦄", "\\rBrace");
_("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
_("⦵", "\\minuso");
_("\\darr", "\\downarrow");
_("\\dArr", "\\Downarrow");
_("\\Darr", "\\Downarrow");
_("\\lang", "\\langle");
_("\\rang", "\\rangle");
_("\\uarr", "\\uparrow");
_("\\uArr", "\\Uparrow");
_("\\Uarr", "\\Uparrow");
_("\\N", "\\mathbb{N}");
_("\\R", "\\mathbb{R}");
_("\\Z", "\\mathbb{Z}");
_("\\alef", "\\aleph");
_("\\alefsym", "\\aleph");
_("\\Alpha", "\\mathrm{A}");
_("\\Beta", "\\mathrm{B}");
_("\\bull", "\\bullet");
_("\\Chi", "\\mathrm{X}");
_("\\clubs", "\\clubsuit");
_("\\cnums", "\\mathbb{C}");
_("\\Complex", "\\mathbb{C}");
_("\\Dagger", "\\ddagger");
_("\\diamonds", "\\diamondsuit");
_("\\empty", "\\emptyset");
_("\\Epsilon", "\\mathrm{E}");
_("\\Eta", "\\mathrm{H}");
_("\\exist", "\\exists");
_("\\harr", "\\leftrightarrow");
_("\\hArr", "\\Leftrightarrow");
_("\\Harr", "\\Leftrightarrow");
_("\\hearts", "\\heartsuit");
_("\\image", "\\Im");
_("\\infin", "\\infty");
_("\\Iota", "\\mathrm{I}");
_("\\isin", "\\in");
_("\\Kappa", "\\mathrm{K}");
_("\\larr", "\\leftarrow");
_("\\lArr", "\\Leftarrow");
_("\\Larr", "\\Leftarrow");
_("\\lrarr", "\\leftrightarrow");
_("\\lrArr", "\\Leftrightarrow");
_("\\Lrarr", "\\Leftrightarrow");
_("\\Mu", "\\mathrm{M}");
_("\\natnums", "\\mathbb{N}");
_("\\Nu", "\\mathrm{N}");
_("\\Omicron", "\\mathrm{O}");
_("\\plusmn", "\\pm");
_("\\rarr", "\\rightarrow");
_("\\rArr", "\\Rightarrow");
_("\\Rarr", "\\Rightarrow");
_("\\real", "\\Re");
_("\\reals", "\\mathbb{R}");
_("\\Reals", "\\mathbb{R}");
_("\\Rho", "\\mathrm{P}");
_("\\sdot", "\\cdot");
_("\\sect", "\\S");
_("\\spades", "\\spadesuit");
_("\\sub", "\\subset");
_("\\sube", "\\subseteq");
_("\\supe", "\\supseteq");
_("\\Tau", "\\mathrm{T}");
_("\\thetasym", "\\vartheta");
_("\\weierp", "\\wp");
_("\\Zeta", "\\mathrm{Z}");
_("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
_("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
_("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
_("\\bra", "\\mathinner{\\langle{#1}|}");
_("\\ket", "\\mathinner{|{#1}\\rangle}");
_("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
_("\\Bra", "\\left\\langle#1\\right|");
_("\\Ket", "\\left|#1\\right\\rangle");
var ah = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (d) => (m) => {
    r && (m.macros.set("|", s), a.length && m.macros.set("\\|", o));
    var g = d;
    if (!d && a.length) {
      var v = m.future();
      v.text === "|" && (m.popToken(), g = !0);
    }
    return {
      tokens: g ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", l(!1)), a.length && e.macros.set("\\|", l(!0));
  var c = e.consumeArg().tokens, u = e.expandTokens([
    ...i,
    ...c,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: u.reverse(),
    numArgs: 0
  };
};
_("\\bra@ket", ah(!1));
_("\\bra@set", ah(!0));
_("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
_("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
_("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
_("\\angln", "{\\angl n}");
_("\\blue", "\\textcolor{##6495ed}{#1}");
_("\\orange", "\\textcolor{##ffa500}{#1}");
_("\\pink", "\\textcolor{##ff00af}{#1}");
_("\\red", "\\textcolor{##df0030}{#1}");
_("\\green", "\\textcolor{##28ae7b}{#1}");
_("\\gray", "\\textcolor{gray}{#1}");
_("\\purple", "\\textcolor{##9d38bd}{#1}");
_("\\blueA", "\\textcolor{##ccfaff}{#1}");
_("\\blueB", "\\textcolor{##80f6ff}{#1}");
_("\\blueC", "\\textcolor{##63d9ea}{#1}");
_("\\blueD", "\\textcolor{##11accd}{#1}");
_("\\blueE", "\\textcolor{##0c7f99}{#1}");
_("\\tealA", "\\textcolor{##94fff5}{#1}");
_("\\tealB", "\\textcolor{##26edd5}{#1}");
_("\\tealC", "\\textcolor{##01d1c1}{#1}");
_("\\tealD", "\\textcolor{##01a995}{#1}");
_("\\tealE", "\\textcolor{##208170}{#1}");
_("\\greenA", "\\textcolor{##b6ffb0}{#1}");
_("\\greenB", "\\textcolor{##8af281}{#1}");
_("\\greenC", "\\textcolor{##74cf70}{#1}");
_("\\greenD", "\\textcolor{##1fab54}{#1}");
_("\\greenE", "\\textcolor{##0d923f}{#1}");
_("\\goldA", "\\textcolor{##ffd0a9}{#1}");
_("\\goldB", "\\textcolor{##ffbb71}{#1}");
_("\\goldC", "\\textcolor{##ff9c39}{#1}");
_("\\goldD", "\\textcolor{##e07d10}{#1}");
_("\\goldE", "\\textcolor{##a75a05}{#1}");
_("\\redA", "\\textcolor{##fca9a9}{#1}");
_("\\redB", "\\textcolor{##ff8482}{#1}");
_("\\redC", "\\textcolor{##f9685d}{#1}");
_("\\redD", "\\textcolor{##e84d39}{#1}");
_("\\redE", "\\textcolor{##bc2612}{#1}");
_("\\maroonA", "\\textcolor{##ffbde0}{#1}");
_("\\maroonB", "\\textcolor{##ff92c6}{#1}");
_("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
_("\\maroonD", "\\textcolor{##ca337c}{#1}");
_("\\maroonE", "\\textcolor{##9e034e}{#1}");
_("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
_("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
_("\\purpleC", "\\textcolor{##aa87ff}{#1}");
_("\\purpleD", "\\textcolor{##7854ab}{#1}");
_("\\purpleE", "\\textcolor{##543b78}{#1}");
_("\\mintA", "\\textcolor{##f5f9e8}{#1}");
_("\\mintB", "\\textcolor{##edf2df}{#1}");
_("\\mintC", "\\textcolor{##e0e5cc}{#1}");
_("\\grayA", "\\textcolor{##f6f7f7}{#1}");
_("\\grayB", "\\textcolor{##f0f1f2}{#1}");
_("\\grayC", "\\textcolor{##e3e5e6}{#1}");
_("\\grayD", "\\textcolor{##d6d8da}{#1}");
_("\\grayE", "\\textcolor{##babec2}{#1}");
_("\\grayF", "\\textcolor{##888d93}{#1}");
_("\\grayG", "\\textcolor{##626569}{#1}");
_("\\grayH", "\\textcolor{##3b3e40}{#1}");
_("\\grayI", "\\textcolor{##21242c}{#1}");
_("\\kaBlue", "\\textcolor{##314453}{#1}");
_("\\kaGreen", "\\textcolor{##71B307}{#1}");
var ih = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class Cg {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Sg(_g, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new su(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, n, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: n
      } = this.consumeArg());
    return this.pushToken(new Wt("EOF", n.loc)), this.pushTokens(a), t.range(n, "");
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], n = e && e.length > 0;
    n || this.consumeSpaces();
    var a = this.future(), i, s = 0, o = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++s;
      else if (i.text === "}") {
        if (--s, s === -1)
          throw new G("Extra }", i);
      } else if (i.text === "EOF")
        throw new G("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
      if (e && n)
        if ((s === 0 || s === 1 && e[o] === "{") && i.text === e[o]) {
          if (++o, o === e.length) {
            t.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (s !== 0 || n);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new G("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new G("Use of the macro doesn't match its definition", i);
      }
    }
    for (var s = [], o = 0; o < e; o++)
      s.push(this.consumeArg(t && t[o + 1]).tokens);
    return s;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new G("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), n = t.text, a = t.noexpand ? null : this._getExpansion(n);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && n[0] === "\\" && !this.isDefined(n))
        throw new G("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, s = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var l = i[o];
        if (l.text === "#") {
          if (o === 0)
            throw new G("Incomplete placeholder at end of macro body", l);
          if (l = i[--o], l.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            i.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new G("Not a valid argument number", l);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Wt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((n) => n.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var n = this.lexer.catcodes[e];
      if (n != null && n !== 13)
        return;
    }
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.indexOf("#") !== -1)
        for (var s = a.replace(/##/g, ""); s.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var o = new su(a, this.settings), l = [], c = o.lex(); c.text !== "EOF"; )
        l.push(c), c = o.lex();
      l.reverse();
      var u = {
        tokens: l,
        numArgs: i
      };
      return u;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || Dr.hasOwnProperty(e) || qe.math.hasOwnProperty(e) || qe.text.hasOwnProperty(e) || ih.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Dr.hasOwnProperty(e) && !Dr[e].primitive;
  }
}
var uu = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Za = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), ds = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, cu = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class zi {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Cg(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new G("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new Wt("}")), this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, n;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (zi.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && Dr[a.text] && Dr[a.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      n.push(i);
    }
    return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, n, a = 0; a < e.length; a++)
      if (e[a].type === "infix") {
        if (t !== -1)
          throw new G("only one infix operator per group", e[a].token);
        t = a, n = e[a].replaceWith;
      }
    if (t !== -1 && n) {
      var i, s, o = e.slice(0, t), l = e.slice(t + 1);
      o.length === 1 && o[0].type === "ordgroup" ? i = o[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: o
      }, l.length === 1 && l[0].type === "ordgroup" ? s = l[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: l
      };
      var c;
      return n === "\\\\abovefrac" ? c = this.callFunction(n, [i, e[t], s], []) : c = this.callFunction(n, [i, s], []), [c];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), n = t.text;
    this.consume(), this.consumeSpaces();
    var a = this.parseGroup(e);
    if (!a)
      throw new G("Expected group after '" + n + "'", t);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[n]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var n, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var s = i.text === "\\limits";
          t.limits = s, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new G("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new G("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new G("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new G("Double superscript", i);
        var o = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, l = [o];
        for (this.consume(); this.fetch().text === "'"; )
          l.push(o), this.consume();
        this.fetch().text === "^" && l.push(this.handleSupSubscript("superscript")), n = {
          type: "ordgroup",
          mode: this.mode,
          body: l
        };
      } else if (Za[i.text]) {
        var c = uu.test(i.text), u = [];
        for (u.push(new Wt(Za[i.text])), this.consume(); ; ) {
          var d = this.fetch().text;
          if (!Za[d] || uu.test(d) !== c)
            break;
          u.unshift(new Wt(Za[d])), this.consume();
        }
        var m = this.subparse(u);
        c ? a = {
          type: "ordgroup",
          mode: "math",
          body: m
        } : n = {
          type: "ordgroup",
          mode: "math",
          body: m
        };
      } else
        break;
    }
    return n || a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: n,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var n = this.fetch(), a = n.text, i = Dr[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new G("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new G("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new G("Can't use function '" + a + "' in math mode", n);
    var {
      args: s,
      optArgs: o
    } = this.parseArguments(a, i);
    return this.callFunction(a, s, o, n, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, n, a, i) {
    var s = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, o = Dr[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new G("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var n = t.numArgs + t.numOptionalArgs;
    if (n === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var a = [], i = [], s = 0; s < n; s++) {
      var o = t.argTypes && t.argTypes[s], l = s < t.numOptionalArgs;
      (t.primitive && o == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && s === 1 && i[0] == null) && (o = "primitive");
      var c = this.parseGroupOfType("argument to '" + e + "'", o, l);
      if (l)
        i.push(c);
      else if (c != null)
        a.push(c);
      else
        throw new G("Null argument, please report this as a bug");
    }
    return {
      args: a,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, n) {
    switch (t) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, t);
      case "hbox": {
        var a = this.parseArgumentGroup(n, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", n);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (n)
          throw new G("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new G("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new G("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var n = this.gullet.scanArgument(t);
    if (n == null)
      return null;
    for (var a = "", i; (i = this.fetch()).text !== "EOF"; )
      a += i.text, this.consume();
    return this.consume(), n.text = a, n;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var n = this.fetch(), a = n, i = "", s; (s = this.fetch()).text !== "EOF" && e.test(i + s.text); )
      a = s, i += a.text, this.consume();
    if (i === "")
      throw new G("Invalid " + t + ": '" + n.text + "'", n);
    return n.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var n = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!n)
      throw new G("Invalid color: '" + t.text + "'", t);
    var a = n[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, n = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", n = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new G("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!pd(i))
      throw new G("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: n
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: n
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var n = this.gullet.scanArgument(e);
    if (n == null)
      return null;
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var s = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: i
    };
    return t && this.switchMode(a), s;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var n = this.fetch(), a = n.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var s = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, s), l = this.fetch();
      this.expect(s), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Ft.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !ih.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new G("Undefined control sequence: " + a, n);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var a = e[n], i = a.text;
      i === "-" && e[n + 1].text === "-" && (n + 1 < t && e[n + 2].text === "-" ? (e.splice(n, 3, {
        type: "textord",
        mode: "text",
        loc: Ft.range(a, e[n + 2]),
        text: "---"
      }), t -= 2) : (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: Ft.range(a, e[n + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[n + 1].text === i && (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: Ft.range(a, e[n + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var n = t.slice(5), a = n.charAt(0) === "*";
      if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new G(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    cu.hasOwnProperty(t[0]) && !qe[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = cu[t[0]] + t.slice(1));
    var i = xg.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (qe[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ks.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = qe[this.mode][t].group, l = Ft.range(e), c;
      if (hp.hasOwnProperty(o)) {
        var u = o;
        c = {
          type: "atom",
          mode: this.mode,
          family: u,
          loc: l,
          text: t
        };
      } else
        c = {
          type: o,
          mode: this.mode,
          loc: l,
          text: t
        };
      s = c;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (fd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Ft.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var d = 0; d < i[0].length; d++) {
        var m = i[0][d];
        if (!ds[m])
          throw new G("Unknown accent ' " + m + "'", e);
        var g = ds[m][this.mode] || ds[m].text;
        if (!g)
          throw new G("Accent " + m + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Ft.range(e),
          label: g,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: s
        };
      }
    return s;
  }
}
zi.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var d0 = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new zi(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new Wt("\\df@tag")])
    }];
  }
  return a;
}, sh = function(e, t, n) {
  t.textContent = "";
  var a = h0(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), sh = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var kg = function(e, t) {
  var n = h0(e, t).toMarkup();
  return n;
}, Eg = function(e, t) {
  var n = new Go(t);
  return d0(e, n);
}, oh = function(e, t, n) {
  if (n.throwOnError || !(e instanceof G))
    throw e;
  var a = L.makeSpan(["katex-error"], [new Gt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, h0 = function(e, t) {
  var n = new Go(t);
  try {
    var a = d0(e, n);
    return Fp(a, e, n);
  } catch (i) {
    return oh(i, e, n);
  }
}, Tg = function(e, t) {
  var n = new Go(t);
  try {
    var a = d0(e, n);
    return Lp(a, e, n);
  } catch (i) {
    return oh(i, e, n);
  }
}, lh = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: sh,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: kg,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: ni,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: Eg,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: h0,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: Tg,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: ip,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: h,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: Z,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: _,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: Ia,
    Anchor: Xo,
    SymbolNode: Gt,
    SvgNode: kr,
    PathNode: Lr,
    LineNode: Us
  }
};
const Ng = mt.lazy(() => import("./EquationComponent-DHDXUpVX.js"));
function du(r) {
  let e = r.getAttribute("data-lexical-equation");
  const t = r.getAttribute("data-lexical-inline") === "true";
  return e = atob(e || ""), e ? { node: m0(e, t) } : null;
}
class qn extends ur {
  constructor(t, n, a) {
    super(a);
    ne(this, "__equation");
    ne(this, "__inline");
    this.__equation = t, this.__inline = n ?? !1;
  }
  static getType() {
    return "equation";
  }
  static clone(t) {
    return new qn(t.__equation, t.__inline, t.__key);
  }
  static importJSON(t) {
    return m0(
      t.equation,
      t.inline
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
  createDOM(t) {
    const n = document.createElement(this.__inline ? "span" : "div");
    return n.className = "editor-equation", n;
  }
  exportDOM() {
    const t = document.createElement(this.__inline ? "span" : "div"), n = btoa(this.__equation);
    return t.setAttribute("data-lexical-equation", n), t.setAttribute("data-lexical-inline", `${this.__inline}`), lh.render(this.__equation, t, {
      displayMode: !this.__inline,
      // true === block display //
      errorColor: "#cc0000",
      output: "html",
      strict: "warn",
      throwOnError: !1,
      trust: !1
    }), { element: t };
  }
  static importDOM() {
    return {
      div: (t) => t.hasAttribute("data-lexical-equation") ? {
        conversion: du,
        priority: 2
      } : null,
      span: (t) => t.hasAttribute("data-lexical-equation") ? {
        conversion: du,
        priority: 1
      } : null
    };
  }
  updateDOM(t) {
    return this.__inline !== t.__inline;
  }
  getTextContent() {
    return this.__equation;
  }
  getEquation() {
    return this.__equation;
  }
  setEquation(t) {
    const n = this.getWritable();
    n.__equation = t;
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      Ng,
      {
        equation: this.__equation,
        inline: this.__inline,
        nodeKey: this.__key
      }
    ) });
  }
}
function m0(r = "", e = !1) {
  const t = new qn(r, e);
  return ut(t);
}
function w6(r) {
  return r instanceof qn;
}
const Ag = mt.lazy(() => import("./ExcalidrawComponent-CMZ9rFvP.js"));
function Mg(r) {
  const e = r.getAttribute("data-lexical-excalidraw-json");
  if (e) {
    const t = uh();
    return t.__data = e, {
      node: t
    };
  }
  return null;
}
class ln extends ur {
  constructor(t = "[]", n = "inherit", a = "inherit", i) {
    super(i);
    ne(this, "__data");
    ne(this, "__width");
    ne(this, "__height");
    this.__data = t, this.__width = n, this.__height = a;
  }
  static getType() {
    return "excalidraw";
  }
  static clone(t) {
    return new ln(t.__data, t.__width, t.__height, t.__key);
  }
  static importJSON(t) {
    return new ln(t.data, t.width, t.height);
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
  createDOM(t) {
    const n = document.createElement("span"), i = t.theme.image;
    return n.style.width = this.__width === "inherit" ? "inherit" : `${this.__width}px`, n.style.height = this.__height === "inherit" ? "inherit" : `${this.__height}px`, i !== void 0 && (n.className = i), n;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-excalidraw-json") ? {
        conversion: Mg,
        priority: 1
      } : null
    };
  }
  exportDOM(t) {
    const n = document.createElement("span");
    n.style.display = "inline-block";
    const a = t.getElementByKey(this.getKey());
    if (a !== null) {
      const i = a.querySelector("svg");
      i !== null && (n.innerHTML = i.outerHTML);
    }
    return n.style.width = this.__width === "inherit" ? "inherit" : `${this.__width}px`, n.style.height = this.__height === "inherit" ? "inherit" : `${this.__height}px`, n.setAttribute("data-lexical-excalidraw-json", this.__data), { element: n };
  }
  setData(t) {
    const n = this.getWritable();
    n.__data = t;
  }
  setWidth(t) {
    const n = this.getWritable();
    n.__width = t;
  }
  setHeight(t) {
    const n = this.getWritable();
    n.__height = t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(t, n) {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(Ag, { nodeKey: this.getKey(), data: this.__data }) });
  }
}
function uh() {
  return new ln();
}
function S6(r) {
  return r instanceof ln;
}
class un extends St {
  constructor(t, n) {
    super(n);
    ne(this, "__templateColumns");
    this.__templateColumns = t;
  }
  static getType() {
    return "layout-container";
  }
  static clone(t) {
    return new un(t.__templateColumns, t.__key);
  }
  createDOM(t) {
    const n = document.createElement("div");
    return n.style.gridTemplateColumns = this.__templateColumns, typeof t.theme.layoutContainer == "string" && et(n, t.theme.layoutContainer), n;
  }
  updateDOM(t, n) {
    return t.__templateColumns !== this.__templateColumns && (n.style.gridTemplateColumns = this.__templateColumns), !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON(t) {
    return ch(t.templateColumns);
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
  setTemplateColumns(t) {
    this.getWritable().__templateColumns = t;
  }
}
function ch(r) {
  return new un(r);
}
function Qa(r) {
  return r instanceof un;
}
class cn extends St {
  static getType() {
    return "layout-item";
  }
  static clone(e) {
    return new cn(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("div");
    return typeof e.theme.layoutItem == "string" && et(t, e.theme.layoutItem), t;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON() {
    return Js();
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
function Js() {
  return new cn();
}
function hu(r) {
  return r instanceof cn;
}
const Og = mt.lazy(() => import("./PollComponent-CLhQxJkR.js"));
function Dg() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function mu(r = "") {
  return {
    text: r,
    uid: Dg(),
    votes: []
  };
}
function fu(r, e, t) {
  return {
    text: e,
    uid: r.uid,
    votes: t || Array.from(r.votes)
  };
}
function Rg(r) {
  const e = r.getAttribute("data-lexical-poll-question"), t = r.getAttribute("data-lexical-poll-options");
  return e !== null && t !== null ? { node: f0(e, JSON.parse(t)) } : null;
}
class Un extends ur {
  constructor(t, n, a) {
    super(a);
    ne(this, "__question");
    ne(this, "__options");
    this.__question = t, this.__options = n;
  }
  static getType() {
    return "poll";
  }
  static clone(t) {
    return new Un(t.__question, t.__options, t.__key);
  }
  static importJSON(t) {
    const n = f0(
      t.question,
      t.options
    );
    return t.options.forEach(n.addOption), n;
  }
  exportJSON() {
    return {
      options: this.__options,
      question: this.__question,
      type: "poll",
      version: 1
    };
  }
  addOption(t) {
    const n = this.getWritable(), a = Array.from(n.__options);
    a.push(t), n.__options = a;
  }
  deleteOption(t) {
    const n = this.getWritable(), a = Array.from(n.__options), i = a.indexOf(t);
    a.splice(i, 1), n.__options = a;
  }
  setOptionText(t, n) {
    const a = this.getWritable(), i = fu(t, n), s = Array.from(a.__options), o = s.indexOf(t);
    s[o] = i, a.__options = s;
  }
  toggleVote(t, n) {
    const a = this.getWritable(), i = t.votes, s = Array.from(i), o = i.indexOf(n);
    o === -1 ? s.push(n) : s.splice(o, 1);
    const l = fu(t, t.text, s), c = Array.from(a.__options), u = c.indexOf(t);
    c[u] = l, a.__options = c;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-poll-question") ? {
        conversion: Rg,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-lexical-poll-question", this.__question), t.setAttribute(
      "data-lexical-poll-options",
      JSON.stringify(this.__options)
    ), { element: t };
  }
  createDOM() {
    const t = document.createElement("span");
    return t.style.display = "inline-block", t;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      Og,
      {
        question: this.__question,
        options: this.__options,
        nodeKey: this.__key
      }
    ) });
  }
}
function f0(r, e) {
  return new Un(r, e);
}
function _6(r) {
  return r instanceof Un;
}
const Ig = mt.lazy(() => import("./InlineImageComponent-H5vcYyNm.js"));
function Fg(r) {
  if (r instanceof HTMLImageElement) {
    const { alt: e, src: t, width: n, height: a } = r;
    return { node: p0({ altText: e, height: a, src: t, width: n }) };
  }
  return null;
}
class Kn extends ur {
  constructor(t, n, a, i, s, o, l, c) {
    super(c);
    ne(this, "__src");
    ne(this, "__altText");
    ne(this, "__width");
    ne(this, "__height");
    ne(this, "__showCaption");
    ne(this, "__caption");
    ne(this, "__position");
    this.__src = t, this.__altText = n, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || va(), this.__position = a;
  }
  static getType() {
    return "inline-image";
  }
  static clone(t) {
    return new Kn(
      t.__src,
      t.__altText,
      t.__position,
      t.__width,
      t.__height,
      t.__showCaption,
      t.__caption,
      t.__key
    );
  }
  static importJSON(t) {
    const { altText: n, height: a, width: i, caption: s, src: o, showCaption: l, position: c } = t, u = p0({
      altText: n,
      height: a,
      position: c,
      showCaption: l,
      src: o,
      width: i
    }), d = u.__caption, m = d.parseEditorState(s.editorState);
    return m.isEmpty() || d.setEditorState(m), u;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (t) => ({
        conversion: Fg,
        priority: 0
      })
    };
  }
  exportDOM() {
    const t = document.createElement("span");
    t.className = `inline-editor-image position-${this.__position}`;
    const n = document.createElement("img");
    return n.setAttribute("src", this.__src), n.setAttribute("alt", this.__altText), n.setAttribute("width", this.__width.toString()), n.setAttribute("height", this.__height.toString()), t.appendChild(n), { element: t };
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
  setAltText(t) {
    const n = this.getWritable();
    n.__altText = t;
  }
  setWidthAndHeight(t, n) {
    const a = this.getWritable();
    a.__width = t, a.__height = n;
  }
  getShowCaption() {
    return this.__showCaption;
  }
  setShowCaption(t) {
    const n = this.getWritable();
    n.__showCaption = t;
  }
  getPosition() {
    return this.__position;
  }
  setPosition(t) {
    const n = this.getWritable();
    n.__position = t;
  }
  update(t) {
    const n = this.getWritable(), { altText: a, showCaption: i, position: s } = t;
    a !== void 0 && (n.__altText = a), i !== void 0 && (n.__showCaption = i), s !== void 0 && (n.__position = s);
  }
  // View
  createDOM(t) {
    const n = document.createElement("span");
    return n.className = `${t.theme.inlineImage} position-${this.__position}`, n;
  }
  updateDOM(t, n, a) {
    const i = this.__position;
    return i !== t.__position && (n.className = `${a.theme.inlineImage} position-${i}`), !1;
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      Ig,
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
function p0({
  altText: r,
  position: e,
  height: t,
  src: n,
  width: a,
  showCaption: i,
  caption: s,
  key: o
}) {
  return ut(
    new Kn(
      n,
      r,
      e,
      a,
      t,
      i,
      s,
      o
    )
  );
}
function Lg(r) {
  return r instanceof Kn;
}
const zg = mt.lazy(() => import("./StickyComponent-CrzQ-xym.js"));
class On extends ur {
  constructor(t, n, a, i, s) {
    super(s);
    ne(this, "__x");
    ne(this, "__y");
    ne(this, "__color");
    ne(this, "__caption");
    this.__x = t, this.__y = n, this.__caption = i || va(), this.__color = a;
  }
  static getType() {
    return "sticky";
  }
  static clone(t) {
    return new On(
      t.__x,
      t.__y,
      t.__color,
      t.__caption,
      t.__key
    );
  }
  static importJSON(t) {
    const n = new On(
      t.xOffset,
      t.yOffset,
      t.color
    ), a = t.caption, i = n.__caption, s = i.parseEditorState(a.editorState);
    return s.isEmpty() || i.setEditorState(s), n;
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
  createDOM(t) {
    const n = document.createElement("div");
    return n.style.display = "contents", n;
  }
  updateDOM() {
    return !1;
  }
  setPosition(t, n) {
    const a = this.getWritable();
    a.__x = t, a.__y = n, xt(null);
  }
  toggleColor() {
    const t = this.getWritable();
    t.__color = t.__color === "pink" ? "yellow" : "pink";
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(t, n) {
    return Zt(
      /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
        zg,
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
function C6(r) {
  return r instanceof On;
}
function Pg(r, e) {
  return new On(r, e, "yellow");
}
const Bg = [
  xo,
  Eo,
  zn,
  Na,
  Ta,
  Ea,
  ka,
  Fn,
  Mo,
  Bn,
  Aa,
  jn,
  An,
  Ma,
  Oa,
  Da,
  an,
  sn,
  on,
  qn,
  ln,
  un,
  cn,
  Un,
  zc,
  Kn,
  or,
  Pn,
  sr,
  On,
  To
], ei = 0, Zs = 1, Qs = 2, Vt = 0, jg = 1, pu = 2, $g = 3, Hg = 4;
function qg(r, e, t, n, a) {
  if (r === null || t.size === 0 && n.size === 0 && !a) return Vt;
  const i = e._selection, s = r._selection;
  if (a) return jg;
  if (!(U(i) && U(s) && s.isCollapsed() && i.isCollapsed())) return Vt;
  const o = function(S, w, C) {
    const N = S._nodeMap, k = [];
    for (const E of w) {
      const I = N.get(E);
      I !== void 0 && k.push(I);
    }
    for (const [E, I] of C) {
      if (!I) continue;
      const D = N.get(E);
      D === void 0 || co(D) || k.push(D);
    }
    return k;
  }(e, t, n);
  if (o.length === 0) return Vt;
  if (o.length > 1) {
    const S = e._nodeMap, w = S.get(i.anchor.key), C = S.get(s.anchor.key);
    return w && C && !r._nodeMap.has(w.__key) && Se(w) && w.__text.length === 1 && i.anchor.offset === 1 ? pu : Vt;
  }
  const l = o[0], c = r._nodeMap.get(l.__key);
  if (!Se(c) || !Se(l) || c.__mode !== l.__mode) return Vt;
  const u = c.__text, d = l.__text;
  if (u === d) return Vt;
  const m = i.anchor, g = s.anchor;
  if (m.key !== g.key || m.type !== "text") return Vt;
  const v = m.offset, b = g.offset, x = d.length - u.length;
  return x === 1 && b === v - 1 ? pu : x === -1 && b === v + 1 ? $g : x === -1 && b === v ? Hg : Vt;
}
function Ug(r, e) {
  let t = Date.now(), n = Vt;
  return (a, i, s, o, l, c) => {
    const u = Date.now();
    if (c.has("historic")) return n = Vt, t = u, Qs;
    const d = qg(a, i, o, l, r.isComposing()), m = (() => {
      const g = s === null || s.editor === r, v = c.has("history-push");
      if (!v && g && c.has("history-merge")) return ei;
      if (a === null) return Zs;
      const b = i._selection;
      return o.size > 0 || l.size > 0 ? v === !1 && d !== Vt && d === n && u < t + e && g || o.size === 1 && function(x, S, w) {
        const C = S._nodeMap.get(x), N = w._nodeMap.get(x), k = S._selection, E = w._selection;
        return !(U(k) && U(E) && k.anchor.type === "element" && k.focus.type === "element" && E.anchor.type === "text" && E.focus.type === "text" || !Se(C) || !Se(N) || C.__parent !== N.__parent) && JSON.stringify(S.read(() => C.exportJSON())) === JSON.stringify(w.read(() => N.exportJSON()));
      }(Array.from(o)[0], a, i) ? ei : Zs : b !== null ? ei : Qs;
    })();
    return t = u, n = d, m;
  };
}
function gu(r) {
  r.undoStack = [], r.redoStack = [], r.current = null;
}
function Kg(r, e, t) {
  const n = Ug(r, t);
  return Re(r.registerCommand(Sc, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const c = s.current, u = l.pop();
      c !== null && (o.push(c), i.dispatchCommand(ea, !0)), l.length === 0 && i.dispatchCommand(ta, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(r, e), !0), be), r.registerCommand(wc, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (o.length !== 0) {
      const c = s.current;
      c !== null && (l.push(c), i.dispatchCommand(ta, !0));
      const u = o.pop();
      o.length === 0 && i.dispatchCommand(ea, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: "historic" });
    }
  }(r, e), !0), be), r.registerCommand(M1, () => (gu(e), !1), be), r.registerCommand(A1, () => (gu(e), r.dispatchCommand(ea, !1), r.dispatchCommand(ta, !1), !0), be), r.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: o, dirtyElements: l, tags: c }) => {
    const u = e.current, d = e.redoStack, m = e.undoStack, g = u === null ? null : u.editorState;
    if (u !== null && i === g) return;
    const v = n(s, i, u, o, l, c);
    if (v === Zs) d.length !== 0 && (e.redoStack = [], r.dispatchCommand(ea, !1)), u !== null && (m.push({ ...u }), r.dispatchCommand(ta, !0));
    else if (v === Qs) return;
    e.current = { editor: r, editorState: i };
  }));
}
function dh() {
  return { current: null, redoStack: [], undoStack: [] };
}
function Wg({ delay: r, externalHistoryState: e }) {
  const [t] = se();
  return function(n, a, i = 1e3) {
    const s = it(() => a || dh(), [a]);
    B(() => Kg(n, s, i), [i, n, s]);
  }(t, e, r), null;
}
const hh = uo({}), Gg = ({
  children: r,
  initHistoryState: e
}) => {
  const t = it(
    () => ({ historyState: e || dh() }),
    []
  );
  return /* @__PURE__ */ p.jsx(hh.Provider, { value: t, children: r });
}, Yg = () => sc(hh), Vg = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
function Xg(r) {
  return { initialValueFn: () => r.isEditable(), subscribe: (e) => r.registerEditableListener(e) };
}
function La() {
  return function(r) {
    const [e] = se(), t = it(() => r(e), [e, r]), n = Te(t.initialValueFn()), [a, i] = q(n.current);
    return Vg(() => {
      const { initialValueFn: s, subscribe: o } = t, l = s();
      return n.current !== l && (n.current = l, i(l)), o((c) => {
        n.current = c, i(c);
      });
    }, [t, r]), a;
  }(Xg);
}
function Jg() {
  return wt().getTextContent();
}
function Zg(r, e = !0) {
  if (r) return !1;
  let t = Jg();
  return e && (t = t.trim()), t === "";
}
function Qg(r) {
  if (!Zg(r, !1)) return !1;
  const e = wt().getChildren(), t = e.length;
  if (t > 1) return !1;
  for (let n = 0; n < t; n++) {
    const a = e[n];
    if (wr(a)) return !1;
    if (ue(a)) {
      if (!Hr(a) || a.__indent !== 0) return !1;
      const i = a.getChildren(), s = i.length;
      for (let o = 0; o < s; o++) {
        const l = i[n];
        if (!Se(l)) return !1;
      }
    }
  }
  return !0;
}
function mh(r) {
  return () => Qg(r);
}
function e4(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var t4 = e4(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function r4(r, e, t, n) {
  const a = (s) => s instanceof t, i = (s) => {
    const o = Ir(s.getTextContent());
    o.setFormat(s.getFormat()), s.replace(o);
  };
  return [r.registerNodeTransform($r, (s) => {
    if (!s.isSimpleText()) return;
    let o, l = s.getPreviousSibling(), c = s.getTextContent(), u = s;
    if (Se(l)) {
      const m = l.getTextContent(), g = e(m + c);
      if (a(l)) {
        if (g === null || ((v) => v.getLatest().__mode)(l) !== 0) return void i(l);
        {
          const v = g.end - m.length;
          if (v > 0) {
            const b = m + c.slice(0, v);
            if (l.select(), l.setTextContent(b), v === c.length) s.remove();
            else {
              const x = c.slice(v);
              s.setTextContent(x);
            }
            return;
          }
        }
      } else if (g === null || g.start < m.length) return;
    }
    let d = 0;
    for (; ; ) {
      o = e(c);
      let m, g = o === null ? "" : c.slice(o.end);
      if (c = g, g === "") {
        const b = u.getNextSibling();
        if (Se(b)) {
          g = u.getTextContent() + b.getTextContent();
          const x = e(g);
          if (x === null) return void (a(b) ? i(b) : b.markDirty());
          if (x.start !== 0) return;
        }
      }
      if (o === null) return;
      if (o.start === 0 && Se(l) && l.isTextEntity()) {
        d += o.end;
        continue;
      }
      o.start === 0 ? [m, u] = u.splitText(o.end) : [, m, u] = u.splitText(o.start + d, o.end + d), m === void 0 && t4(165, "nodeToReplace");
      const v = n(m);
      if (v.setFormat(m.getFormat()), m.replace(v), u == null) return;
      d = 0, l = v;
    }
  }), r.registerNodeTransform(t, (s) => {
    const o = s.getTextContent(), l = e(o);
    if (l === null || l.start !== 0) return void i(s);
    if (o.length > l.end) return void s.splitText(l.end);
    const c = s.getPreviousSibling();
    Se(c) && c.isTextEntity() && (i(c), i(s));
    const u = s.getNextSibling();
    Se(u) && u.isTextEntity() && (i(u), a(s) && i(s));
  })];
}
function n4(r) {
  const e = window.location.origin, t = (n) => {
    if (n.origin !== e) return;
    const a = r.getRootElement();
    if (document.activeElement !== a) return;
    const i = n.data;
    if (typeof i == "string") {
      let s;
      try {
        s = JSON.parse(i);
      } catch {
        return;
      }
      if (s && s.protocol === "nuanria_messaging" && s.type === "request") {
        const o = s.payload;
        if (o && o.functionId === "makeChanges") {
          const l = o.args;
          if (l) {
            const [c, u, d, m, g, v] = l;
            r.update(() => {
              const b = j();
              if (U(b)) {
                const x = b.anchor;
                let S = x.getNode(), w = 0, C = 0;
                if (Se(S) && c >= 0 && u >= 0 && (w = c, C = c + u, b.setTextNodeRange(S, w, S, C)), w === C && d === "" || (b.insertRawText(d), S = x.getNode()), Se(S)) {
                  w = m, C = m + g;
                  const N = S.getTextContentSize();
                  w = w > N ? N : w, C = C > N ? N : C, b.setTextNodeRange(S, w, S, C);
                }
                n.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", t, !0), () => {
    window.removeEventListener("message", t, !0);
  };
}
const eo = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
function vu(r) {
  return r.getEditorState().read(mh(r.isComposing()));
}
function a4({ contentEditable: r, placeholder: e = null, ErrorBoundary: t }) {
  const [n] = se(), a = function(i, s) {
    const [o, l] = q(() => i.getDecorators());
    return eo(() => i.registerDecoratorListener((c) => {
      H1(() => {
        l(c);
      });
    }), [i]), B(() => {
      l(i.getDecorators());
    }, [i]), it(() => {
      const c = [], u = Object.keys(o);
      for (let d = 0; d < u.length; d++) {
        const m = u[d], g = p.jsx(s, { onError: (b) => i._onError(b), children: p.jsx(jr, { fallback: null, children: o[m] }) }), v = i.getElementByKey(m);
        v !== null && c.push(Zt(g, v, m));
      }
      return c;
    }, [s, o, i]);
  }(n, t);
  return function(i) {
    eo(() => Re(tf(i), n4(i)), [i]);
  }(n), p.jsxs(p.Fragment, { children: [r, p.jsx(i4, { content: e }), a] });
}
function i4({ content: r }) {
  const [e] = se(), t = function(a) {
    const [i, s] = q(() => vu(a));
    return eo(() => {
      function o() {
        const l = vu(a);
        s(l);
      }
      return o(), Re(a.registerUpdateListener(() => {
        o();
      }), a.registerEditableListener(() => {
        o();
      }));
    }, [a]), i;
  }(e), n = La();
  return t ? typeof r == "function" ? r(n) : r : null;
}
function to(r, e) {
  return to = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, to(r, e);
}
var bu = { error: null }, s4 = function(r) {
  var e, t;
  function n() {
    for (var i, s = arguments.length, o = new Array(s), l = 0; l < s; l++) o[l] = arguments[l];
    return (i = r.call.apply(r, [this].concat(o)) || this).state = bu, i.resetErrorBoundary = function() {
      for (var c, u = arguments.length, d = new Array(u), m = 0; m < u; m++) d[m] = arguments[m];
      i.props.onReset == null || (c = i.props).onReset.apply(c, d), i.reset();
    }, i;
  }
  t = r, (e = n).prototype = Object.create(t.prototype), e.prototype.constructor = e, to(e, t), n.getDerivedStateFromError = function(i) {
    return { error: i };
  };
  var a = n.prototype;
  return a.reset = function() {
    this.setState(bu);
  }, a.componentDidCatch = function(i, s) {
    var o, l;
    (o = (l = this.props).onError) == null || o.call(l, i, s);
  }, a.componentDidUpdate = function(i, s) {
    var o, l, c, u, d = this.state.error, m = this.props.resetKeys;
    d !== null && s.error !== null && ((c = i.resetKeys) === void 0 && (c = []), (u = m) === void 0 && (u = []), c.length !== u.length || c.some(function(g, v) {
      return !Object.is(g, u[v]);
    })) && ((o = (l = this.props).onResetKeysChange) == null || o.call(l, i.resetKeys, m), this.reset());
  }, a.render = function() {
    var i = this.state.error, s = this.props, o = s.fallbackRender, l = s.FallbackComponent, c = s.fallback;
    if (i !== null) {
      var u = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (mt.isValidElement(c)) return c;
      if (typeof o == "function") return o(u);
      if (l) return mt.createElement(l, u);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, n;
}(mt.Component);
function o4({ children: r, onError: e }) {
  return p.jsx(s4, { fallback: p.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: e, children: r });
}
function l4({ defaultSelection: r }) {
  const [e] = se();
  return B(() => {
    e.focus(() => {
      const t = document.activeElement, n = e.getRootElement();
      n === null || t !== null && n.contains(t) || n.focus({ preventScroll: !0 });
    }, { defaultSelection: r });
  }, [r, e]), null;
}
function u4(r) {
  return r.registerCommand(Ei, (e) => {
    const t = j();
    if (!U(t)) return !1;
    e.preventDefault();
    const n = function(a) {
      const i = a.getNodes();
      if (lm(i, (d) => li(d) && d.canIndent() ? d : null).length > 0) return !0;
      const s = a.anchor, o = a.focus, l = o.isBefore(s) ? o : s, c = l.getNode(), u = Ti(c);
      if (u.canIndent()) {
        const d = u.getKey();
        let m = Sa();
        if (m.anchor.set(d, 0, "element"), m.focus.set(d, 0, "element"), m = po(m), m.anchor.is(l)) return !0;
      }
      return !1;
    }(t) ? e.shiftKey ? ui : ki : gc;
    return r.dispatchCommand(n, void 0);
  }, be);
}
function c4() {
  const [r] = se();
  return B(() => u4(r)), null;
}
function d4() {
  const [r] = se();
  return B(() => r.registerCommand(Ao, (e) => {
    const t = j();
    if (!U(t)) return !1;
    if (t.focus.getNode() !== null) {
      const n = Oo();
      qr(n);
    }
    return !0;
  }, be), [r]), null;
}
function h4({
  children: r,
  className: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: e || "placeholder__root", children: r });
}
const fh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
function m4({ editor: r, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: n, ariaDescribedBy: a, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: o, ariaLabel: l, ariaLabelledBy: c, ariaMultiline: u, ariaOwns: d, ariaRequired: m, autoCapitalize: g, className: v, id: b, role: x = "textbox", spellCheck: S = !0, style: w, tabIndex: C, "data-testid": N, ...k }, E) {
  const [I, D] = q(r.isEditable()), M = ie((z) => {
    z && z.ownerDocument && z.ownerDocument.defaultView ? r.setRootElement(z) : r.setRootElement(null);
  }, [r]), F = it(() => /* @__PURE__ */ function(...z) {
    return ($) => {
      z.forEach((P) => {
        typeof P == "function" ? P($) : P != null && (P.current = $);
      });
    };
  }(E, M), [M, E]);
  return fh(() => (D(r.isEditable()), r.registerEditableListener((z) => {
    D(z);
  })), [r]), p.jsx("div", { ...k, "aria-activedescendant": I ? e : void 0, "aria-autocomplete": I ? t : "none", "aria-controls": I ? n : void 0, "aria-describedby": a, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": I && x === "combobox" ? !!s : void 0, ...o != null ? { "aria-invalid": o } : {}, "aria-label": l, "aria-labelledby": c, "aria-multiline": u, "aria-owns": I ? d : void 0, "aria-readonly": !I || void 0, "aria-required": m, autoCapitalize: g, className: v, contentEditable: I, "data-testid": N, id: b, ref: F, role: I ? x : void 0, spellCheck: S, style: w, tabIndex: C });
}
const f4 = oc(m4);
function yu(r) {
  return r.getEditorState().read(mh(r.isComposing()));
}
const p4 = oc(g4);
function g4(r, e) {
  const { placeholder: t, ...n } = r, [a] = se();
  return p.jsxs(p.Fragment, { children: [p.jsx(f4, { editor: a, ...n, ref: e }), t != null && p.jsx(v4, { editor: a, content: t })] });
}
function v4({ content: r, editor: e }) {
  const t = function(s) {
    const [o, l] = q(() => yu(s));
    return fh(() => {
      function c() {
        const u = yu(s);
        l(u);
      }
      return c(), Re(s.registerUpdateListener(() => {
        c();
      }), s.registerEditableListener(() => {
        c();
      }));
    }, [s]), o;
  }(e), [n, a] = q(e.isEditable());
  if (Br(() => (a(e.isEditable()), e.registerEditableListener((s) => {
    a(s);
  })), [e]), !t) return null;
  let i = null;
  return typeof r == "function" ? i = r(n) : r !== null && (i = r), i === null ? null : p.jsx("div", { "aria-hidden": !0, children: i });
}
function b4({
  className: r
}) {
  return /* @__PURE__ */ p.jsx(p4, { className: r || "content-editable__root" });
}
const Wn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", y4 = Wn && "documentMode" in document ? document.documentMode : null, Or = Wn && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
Wn && "InputEvent" in window && !y4 && "getTargetRanges" in new window.InputEvent("input");
const ph = mt.createContext(null), xu = 4;
function Me({
  children: r,
  className: e,
  onClick: t,
  title: n
}) {
  const a = Te(null), i = mt.useContext(ph);
  if (i === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: s } = i;
  return B(() => {
    a && a.current && s(a);
  }, [a, s]), /* @__PURE__ */ p.jsx(
    "button",
    {
      className: e,
      onClick: t,
      ref: a,
      title: n,
      type: "button",
      children: r
    }
  );
}
function x4({
  children: r,
  dropDownRef: e,
  onClose: t
}) {
  const [n, a] = q(), [i, s] = q(), o = ie(
    (u) => {
      a((d) => d ? [...d, u] : [u]);
    },
    [a]
  ), l = (u) => {
    if (!n)
      return;
    const d = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(d) && u.preventDefault(), d === "Escape" || d === "Tab" ? t() : d === "ArrowUp" ? s((m) => {
      if (!m)
        return n[0];
      const g = n.indexOf(m) - 1;
      return n[g === -1 ? n.length - 1 : g];
    }) : d === "ArrowDown" && s((m) => m ? n[n.indexOf(m) + 1] : n[0]);
  }, c = it(
    () => ({
      registerItem: o
    }),
    [o]
  );
  return B(() => {
    n && !i && s(n[0]), i && i.current && i.current.focus();
  }, [n, i]), /* @__PURE__ */ p.jsx(ph.Provider, { value: c, children: /* @__PURE__ */ p.jsx("div", { className: "dropdown", ref: e, onKeyDown: l, children: r }) });
}
function dn({
  disabled: r = !1,
  buttonLabel: e,
  buttonAriaLabel: t,
  buttonClassName: n,
  buttonIconClassName: a,
  children: i,
  stopCloseOnClickSelf: s
}) {
  const o = Te(null), l = Te(null), [c, u] = q(!1), d = () => {
    u(!1), l && l.current && l.current.focus();
  };
  return B(() => {
    const m = l.current, g = o.current;
    if (c && m !== null && g !== null) {
      const { top: v, left: b } = m.getBoundingClientRect();
      g.style.top = `${v + m.offsetHeight + xu}px`, g.style.left = `${Math.min(
        b,
        window.innerWidth - g.offsetWidth - 20
      )}px`;
    }
  }, [o, l, c]), B(() => {
    const m = l.current;
    if (m !== null && c) {
      const g = (v) => {
        const b = v.target;
        s && o.current && o.current.contains(b) || m.contains(b) || u(!1);
      };
      return document.addEventListener("click", g), () => {
        document.removeEventListener("click", g);
      };
    }
  }, [o, l, c, s]), B(() => {
    const m = () => {
      if (c) {
        const g = l.current, v = o.current;
        if (g !== null && v !== null) {
          const { top: b } = g.getBoundingClientRect(), x = b + g.offsetHeight + xu;
          x !== v.getBoundingClientRect().top && (v.style.top = `${x}px`);
        }
      }
    };
    return document.addEventListener("scroll", m), () => {
      document.removeEventListener("scroll", m);
    };
  }, [l, o, c]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        disabled: r,
        "aria-label": t || e,
        className: n,
        onClick: () => u(!c),
        ref: l,
        children: [
          a && /* @__PURE__ */ p.jsx("span", { className: a }),
          e && /* @__PURE__ */ p.jsx("span", { className: "text dropdown-button-text", children: e }),
          /* @__PURE__ */ p.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    c && Zt(
      /* @__PURE__ */ p.jsx(x4, { dropDownRef: o, onClose: d, children: i }),
      document.body
    )
  ] });
}
function w4(...r) {
  const e = [];
  for (const t of r)
    if (t && typeof t == "string")
      for (const [n] of t.matchAll(/\S+/g))
        e.push(n);
  return e;
}
function S4(r, e, t) {
  const n = Rr[e];
  let a = r ^ n;
  return e === "subscript" ? a &= ~Rr.superscript : e === "superscript" && (a &= ~Rr.subscript), a;
}
function hs(r, e) {
  r.__lexicalClassNameCache === void 0 && (r.__lexicalClassNameCache = {});
  const t = r.__lexicalClassNameCache, n = t[e];
  if (n !== void 0)
    return n;
  const a = r[e];
  if (typeof a == "string") {
    const i = w4(a);
    return t[e] = i, i;
  }
  return a;
}
function wu(r, e, ...t) {
  throw new Error(
    "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + e
  );
}
const _4 = tn.lazy(() => import("./DataMentionComponent-BrQfJ20B.js"));
function C4(r) {
  const e = r.getAttribute("data-mention-data"), t = r.getAttribute("data-mention-type"), n = r.getAttribute("data-mention-field"), a = r.getAttribute("data-mention-label");
  return t !== null && n !== null && a !== null ? {
    node: g0({ dataMention: t, fieldName: n, label: a, data: e })
  } : null;
}
function ms(r) {
  return r & O1 ? "code" : r & D1 ? "mark" : r & R1 ? "sub" : r & I1 ? "sup" : null;
}
function fs(r) {
  return r & F1 ? "strong" : r & L1 ? "em" : "span";
}
function gh(r, e, t, n) {
  const a = t.classList;
  let i = hs(n, "base");
  i !== void 0 && a.add(...i), i = hs(
    n,
    "underlineStrikethrough"
  );
  let s = !1;
  const o = r & W0 && r & G0, l = e & W0 && e & G0;
  i !== void 0 && (l ? (s = !0, o || a.add(...i)) : o && a.remove(...i));
  for (const c in Rr) {
    const u = Rr[c];
    if (i = hs(n, c), i !== void 0)
      if (e & u) {
        if (s && (c === "underline" || c === "strikethrough")) {
          r & u && a.remove(...i);
          continue;
        }
        (!(r & u) || o && c === "underline" || c === "strikethrough") && a.add(...i);
      } else r & u && a.remove(...i);
  }
}
function Su(r, e, t) {
  const a = t.theme.text;
  a !== void 0 && gh(0, e, r, a);
}
const k4 = (r) => {
  var t;
  const e = r.parentElement;
  if (e) {
    if (e.hasAttribute("data-lexical-data-mention"))
      return;
    (t = e.parentElement) == null || t.appendChild(r);
  }
};
class hn extends ur {
  constructor(t, n, a, i, s, o, l, c, u, d) {
    super(d);
    ne(this, "__dataMention");
    ne(this, "__fieldName");
    ne(this, "__label");
    ne(this, "__value");
    ne(this, "__data");
    ne(this, "__step");
    ne(this, "__format");
    ne(this, "__style");
    ne(this, "__decoratorSpan");
    ne(this, "__inputError", null);
    ne(this, "defaultStep", 1);
    this.__dataMention = t, this.__fieldName = n, this.__label = a, this.__value = s, this.__data = i, this.__step = o || this.defaultStep, this.__format = l || 0, this.__style = c || "", this.__decoratorSpan = null, this.__inputError = u || null;
  }
  static getType() {
    return "data-mention";
  }
  static clone(t) {
    return new hn(
      t.__dataMention,
      t.__fieldName,
      t.__label,
      t.__data,
      t.__value,
      t.__step,
      t.__format,
      t.__style,
      t.__inputError,
      t.__key
    );
  }
  getDataMention() {
    return this.getLatest().__dataMention;
  }
  getFieldName() {
    return this.getLatest().__fieldName;
  }
  getLabel() {
    return this.getLatest().__label;
  }
  getValue() {
    return this.getLatest().__value;
  }
  getData() {
    return this.getLatest().__data;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getStyle() {
    return this.getLatest().__style;
  }
  hasFormat(t) {
    const n = Rr[t];
    return (this.getFormat() & n) !== 0;
  }
  getStyleValue(t, n) {
    const a = this.getStyle(), i = new RegExp(`${t}:\\s*([^;]+)`), s = a.match(i);
    return s ? s[1] : n;
  }
  canHaveFormat() {
    return !0;
  }
  isInput() {
    return this.getDataMention() === "input";
  }
  createDOM(t) {
    var g;
    const n = this.__dataMention === "input", a = this.__format, i = ms(a), s = fs(a), o = i === null ? s : i, l = document.createElement(n ? "span" : o), u = t.theme.dataMention;
    if (l.setAttribute("data-mention-type", this.__dataMention), l.setAttribute("data-mention-field", this.__fieldName), l.setAttribute("data-mention-label", this.__label), l.setAttribute("data-lexical-data-mention", "true"), l.setAttribute("data-mention-data", ((g = this.__data) == null ? void 0 : g.toString()) || ""), u !== void 0 && (l.className = u), n)
      return l;
    let d = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (d = document.createElement(s), l.appendChild(d)), Su(d, a, t);
    const m = this.__style;
    return m !== "" && (l.style.cssText = m), l;
  }
  updateDOM(t, n, a) {
    if (this.__dataMention === "input")
      return !1;
    const i = t.__format, s = this.__format, o = ms(i), l = ms(s), c = fs(i), u = fs(s), d = o === null ? c : o, m = l === null ? u : l, g = n.firstChild;
    let v = g !== null ? g.firstChild : null;
    if (v && v.nodeType !== Node.TEXT_NODE ? n.appendChild(v) : v = null, d !== m)
      return !0;
    if (o === l && c !== u) {
      const N = n.firstChild;
      N == null && wu(!1, "updateDOM: prevInnerDOM is null or undefined");
      const k = document.createElement(u);
      return Su(
        k,
        s,
        a
      ), n.replaceChild(k, N), v && k.appendChild(v), !1;
    }
    let b = n;
    l !== null && o !== null && (b = n.firstChild, b == null && wu(!1, "updateDOM: innerDOM is null or undefined"));
    const S = a.theme.text;
    S !== void 0 && i !== s && gh(
      i,
      s,
      b,
      S
    );
    const w = t.__style, C = this.__style;
    return w !== C && (n.style.cssText = C), v && b && b.appendChild(v), !1;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-data-mention") ? {
        conversion: C4,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    const {
      dataMention: n,
      fieldName: a,
      label: i,
      data: s,
      value: o,
      format: l,
      style: c
    } = t, u = g0({
      dataMention: n,
      fieldName: a,
      label: i,
      data: s,
      step: this.prototype.defaultStep,
      format: l,
      style: c
    });
    if (n === "input" && u.__value) {
      const d = u.__value;
      if (o) {
        const m = d.parseEditorState(o.editorState);
        m.isEmpty() || d.setEditorState(m);
      }
    }
    return u;
  }
  exportDOM() {
    const t = document.createElement("span");
    if (t.setAttribute("data-mention-type", this.__dataMention), t.setAttribute("data-mention-field", this.__fieldName), t.setAttribute("data-mention-label", this.__label), t.setAttribute("data-lexical-data-mention", "true"), this.__dataMention === "input" && this.__value) {
      const n = document.createElement("span");
      n.style.wordBreak = "break-word", n.style.whiteSpace = "pre-wrap", n.style.overflowWrap = "break-word", n.style.display = "inline-grid", this.__value.getEditorState().read(() => {
        const s = new DOMParser().parseFromString(
          Yc(this.__value),
          "text/html"
        ), o = [];
        s.body.childNodes.forEach((l) => {
          const c = document.createElement("span");
          c.append(...l.childNodes), o.push(c);
        }), n.append(...o);
      }), t.appendChild(n);
    } else
      t.textContent = this.__data ? this.__data.toString() : "";
    return { element: t };
  }
  exportJSON() {
    const t = this.getValue();
    return {
      dataMention: this.getDataMention(),
      fieldName: this.getFieldName(),
      label: this.getLabel(),
      value: t && t.toJSON(),
      data: this.getData(),
      version: 1,
      type: "data-mention",
      format: this.getFormat(),
      style: this.getStyle()
    };
  }
  setData(t) {
    const n = this.getWritable();
    return n.__data = t, n;
  }
  setLabel(t) {
    const n = this.getWritable();
    return n.__label = t, n;
  }
  setValue(t) {
    const n = this.getWritable();
    return n.__value = t, n;
  }
  setFormat(t) {
    if (this.isInput())
      return this;
    const n = this.getWritable();
    return n.__format = typeof t == "string" ? Rr[t] : t, n;
  }
  setStyle(t) {
    if (this.isInput())
      return this;
    const n = this.getWritable();
    return n.__style = t, n;
  }
  setSpanRef(t) {
    if (this.__decoratorSpan) return;
    const n = this.getWritable();
    n.__decoratorSpan = t;
  }
  setError(t) {
    const n = this.getWritable();
    n.__inputError = t;
  }
  patchStyle(t) {
    if (this.isInput())
      return this;
    let n = this.getStyle();
    for (const a in t) {
      const i = t[a], s = new RegExp(`${a}:\\s*([^;]+)`);
      n.match(s) ? n = n.replace(s, `${a}: ${i}`) : n += `; ${a}: ${i}`;
    }
    return this.setStyle(n);
  }
  toggleFormat(t) {
    if (this.isInput())
      return this;
    const n = this.getFormat(), a = S4(n, t);
    return this.setFormat(a);
  }
  clearAllFormats() {
    if (this.isInput())
      return this;
    this.setFormat(0), this.setStyle("");
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      _4,
      {
        dataMention: this.__dataMention,
        label: this.__label,
        value: this.__value,
        data: this.__data,
        step: this.__step,
        error: this.__inputError,
        nodeKey: this.__key
      }
    ) });
  }
  remove(t) {
    this.__data !== "input" && this.__decoratorSpan && k4(this.__decoratorSpan), super.remove(t);
  }
}
const g0 = ({
  dataMention: r,
  fieldName: e,
  label: t,
  data: n,
  value: a,
  step: i,
  format: s,
  style: o
}) => {
  !a && r === "input" && (a = va());
  const l = new hn(r, e, t, n, a, i, s, o);
  return ut(l);
}, E4 = (r) => r instanceof hn, ua = (r) => r === null || r.getNodes().length !== 1 ? !1 : E4(r.getNodes()[0]), Yr = 8, Vr = 72, T4 = 15;
function N4({
  selectionFontSize: r,
  disabled: e = !1,
  editor: t
}) {
  const [n, a] = mt.useState(r), i = (c, u) => {
    if (!u)
      return c;
    let d = c;
    switch (u) {
      case 2:
        switch (!0) {
          case c > Vr:
            d = Vr;
            break;
          case c >= 48:
            d -= 12;
            break;
          case c >= 24:
            d -= 4;
            break;
          case c >= 14:
            d -= 2;
            break;
          case c >= 9:
            d -= 1;
            break;
          default:
            d = Yr;
            break;
        }
        break;
      case 1:
        switch (!0) {
          case c < Yr:
            d = Yr;
            break;
          case c < 12:
            d += 1;
            break;
          case c < 20:
            d += 2;
            break;
          case c < 36:
            d += 4;
            break;
          case c <= 60:
            d += 12;
            break;
          default:
            d = Vr;
            break;
        }
        break;
    }
    return d;
  }, s = mt.useCallback(
    (c, u) => {
      const d = (m) => (m || (m = `${T4}px`), m = m.slice(0, -2), `${i(
        Number(m),
        u
      )}px`);
      t.update(() => {
        if (t.isEditable()) {
          const m = j();
          m !== null && (ua(m) ? m.getNodes()[0].patchStyle({ "font-size": c || "15px" }) : bo(m, {
            "font-size": c || d
          }));
        }
      });
    },
    [t]
  ), o = (c) => {
    const u = Number(n);
    if (["e", "E", "+", "-"].includes(c.key) || isNaN(u)) {
      c.preventDefault(), a("");
      return;
    }
    if (c.key === "Enter") {
      c.preventDefault();
      let d = u;
      u > Vr ? d = Vr : u < Yr && (d = Yr), a(String(d)), s(String(d) + "px", null);
    }
  }, l = (c) => {
    if (n !== "") {
      const u = i(
        Number(n),
        c
      );
      s(String(u) + "px", null);
    } else
      s(null, c);
  };
  return mt.useEffect(() => {
    a(r);
  }, [r]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) <= Yr,
        onClick: () => l(
          2
          /* decrement */
        ),
        className: "toolbar-item font-decrement",
        children: /* @__PURE__ */ p.jsx("i", { className: "format minus-icon" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "number",
        value: n,
        disabled: e,
        className: "toolbar-item font-size-input",
        min: Yr,
        max: Vr,
        onChange: (c) => a(c.target.value),
        onKeyDown: o
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) >= Vr,
        onClick: () => l(
          1
          /* increment */
        ),
        className: "toolbar-item font-increment",
        children: /* @__PURE__ */ p.jsx("i", { className: "format add-icon" })
      }
    )
  ] });
}
const A4 = /* @__PURE__ */ new Set([
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:"
]);
function bi(r) {
  try {
    const e = new URL(r);
    if (!A4.has(e.protocol))
      return "about:blank";
  } catch {
    return r;
  }
  return r;
}
const M4 = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function O4(r) {
  return r === "https://" || M4.test(r);
}
function Dn(r) {
  const e = r.anchor, t = r.focus, n = r.anchor.getNode(), a = r.focus.getNode();
  return n === a ? n : r.isBackward() ? J0(t) ? n : a : J0(e) ? n : a;
}
function Pr({
  label: r,
  value: e,
  onChange: t,
  placeholder: n = "",
  "data-test-id": a,
  type: i = "text"
}) {
  return /* @__PURE__ */ p.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ p.jsx("label", { className: "Input__label", children: r }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: i,
        className: "Input__input",
        placeholder: n,
        value: e,
        onChange: (s) => {
          t(s.target.value);
        },
        "data-test-id": a
      }
    )
  ] });
}
let ro = !1;
const D4 = [
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
], Jn = 214, _u = 150;
function vh({
  color: r,
  onChange: e
}) {
  const [t, n] = q(Cn("hex", r)), [a, i] = q(r), s = Te(null), o = it(
    () => ({
      x: t.hsv.s / 100 * Jn,
      y: (100 - t.hsv.v) / 100 * _u
    }),
    [t.hsv.s, t.hsv.v]
  ), l = it(
    () => ({
      x: t.hsv.h / 360 * Jn
    }),
    [t.hsv]
  ), c = (m) => {
    if (i(m), /^#[0-9A-Fa-f]{6}$/i.test(m)) {
      const g = Cn("hex", m);
      n(g);
    }
  }, u = ({ x: m, y: g }) => {
    const v = {
      ...t.hsv,
      s: m / Jn * 100,
      v: 100 - g / _u * 100
    }, b = Cn("hsv", v);
    n(b), i(b.hex);
  }, d = ({ x: m }) => {
    const g = { ...t.hsv, h: m / Jn * 360 }, v = Cn("hsv", g);
    n(v), i(v.hex);
  };
  return B(() => {
    s.current !== null && e && (e(t.hex, ro), i(t.hex));
  }, [t, e]), B(() => {
    if (r === void 0)
      return;
    const m = Cn("hex", r);
    n(m), i(m.hex);
  }, [r]), /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: Jn },
      ref: s,
      children: [
        /* @__PURE__ */ p.jsx(Pr, { label: "Hex", onChange: c, value: a }),
        /* @__PURE__ */ p.jsx("div", { className: "color-picker-basic-color", children: D4.map((m) => /* @__PURE__ */ p.jsx(
          "button",
          {
            className: m === t.hex ? " active" : "",
            style: { backgroundColor: m },
            onClick: () => {
              i(m), n(Cn("hex", m));
            }
          },
          m
        )) }),
        /* @__PURE__ */ p.jsx(
          Cu,
          {
            className: "color-picker-saturation",
            style: { backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)` },
            onChange: u,
            children: /* @__PURE__ */ p.jsx(
              "div",
              {
                className: "color-picker-saturation_cursor",
                style: {
                  backgroundColor: t.hex,
                  left: o.x,
                  top: o.y
                }
              }
            )
          }
        ),
        /* @__PURE__ */ p.jsx(Cu, { className: "color-picker-hue", onChange: d, children: /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "color-picker-hue_cursor",
            style: {
              backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)`,
              left: l.x
            }
          }
        ) }),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            className: "color-picker-color",
            style: { backgroundColor: t.hex }
          }
        )
      ]
    }
  );
}
function Cu({ className: r, style: e, onChange: t, children: n }) {
  const a = Te(null), i = Te(!1), s = (l) => {
    if (a.current) {
      const { current: c } = a, { width: u, height: d, left: m, top: g } = c.getBoundingClientRect(), v = ku(l.clientX - m, u, 0), b = ku(l.clientY - g, d, 0);
      t({ x: v, y: b });
    }
  }, o = (l) => {
    if (l.button !== 0)
      return;
    s(l);
    const c = (d) => {
      i.current = !0, ro = !0, s(d);
    }, u = (d) => {
      i.current && (ro = !1), document.removeEventListener("mousemove", c, !1), document.removeEventListener("mouseup", u, !1), s(d), i.current = !1;
    };
    document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", u, !1);
  };
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      ref: a,
      className: r,
      style: e,
      onMouseDown: o,
      children: n
    }
  );
}
function ku(r, e, t) {
  return r > e ? e : r < t ? t : r;
}
function Eu(r) {
  if (r.startsWith("#")) {
    if (r.length === 4 || r.length === 5)
      return r = r.split("").map((e, t) => t ? e + e : "#").join(""), r;
    if (r.length === 7 || r.length === 9)
      return r;
  } else {
    const e = document.createElement("canvas").getContext("2d");
    if (!e)
      throw new Error("2d context not supported or canvas already initialized");
    return e.fillStyle = r, e.fillStyle;
  }
  return "#000000";
}
function Tu(r) {
  const e = (r.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (t, n, a, i) => "#" + n + n + a + a + i + i
  ).substring(1).match(/.{2}/g) || []).map((t) => parseInt(t, 16));
  return {
    b: e[2],
    g: e[1],
    r: e[0]
  };
}
function ps({ r, g: e, b: t }) {
  r /= 255, e /= 255, t /= 255;
  const n = Math.max(r, e, t), a = n - Math.min(r, e, t), i = a ? (n === r ? (e - t) / a + (e < t ? 6 : 0) : n === e ? 2 + (t - r) / a : 4 + (r - e) / a) * 60 : 0, s = n ? a / n * 100 : 0, o = n * 100;
  return { h: i, s, v: o };
}
function R4({ h: r, s: e, v: t }) {
  e /= 100, t /= 100;
  const n = ~~(r / 60), a = r / 60 - n, i = t * (1 - e), s = t * (1 - e * a), o = t * (1 - e * (1 - a)), l = n % 6, c = Math.round([t, s, i, i, o, t][l] * 255), u = Math.round([o, t, t, s, i, i][l] * 255);
  return { b: Math.round([i, i, o, t, t, s][l] * 255), g: u, r: c };
}
function Nu({ b: r, g: e, r: t }) {
  return "#" + [t, e, r].map((n) => n.toString(16).padStart(2, "0")).join("");
}
function Cn(r, e) {
  let t = Eu("#121212"), n = Tu(t), a = ps(n);
  return r === "hex" ? (t = Eu(e), n = Tu(t), a = ps(n)) : r === "rgb" ? (n = e, t = Nu(n), a = ps(n)) : r === "hsv" && (a = e, n = R4(a), t = Nu(n)), { hex: t, hsv: a, rgb: n };
}
function Au({
  disabled: r = !1,
  stopCloseOnClickSelf: e = !0,
  color: t,
  onChange: n,
  ...a
}) {
  return /* @__PURE__ */ p.jsx(
    dn,
    {
      ...a,
      disabled: r,
      stopCloseOnClickSelf: e,
      children: /* @__PURE__ */ p.jsx(vh, { color: t, onChange: n })
    }
  );
}
const v0 = Ue();
function I4() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Bn]))
      throw new Error(
        "PageBreakPlugin: PageBreakNode is not registered on editor"
      );
    return Re(
      r.registerCommand(
        v0,
        () => {
          const e = j();
          if (!U(e))
            return !1;
          if (e.focus.getNode() !== null) {
            const n = Bo();
            qr(n);
          }
          return !0;
        },
        be
      )
    );
  }, [r]), null;
}
function F4({ children: r }) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogButtonsList", children: r });
}
function Gn({
  "data-test-id": r,
  children: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogActions", "data-test-id": r, children: e });
}
function L4(...r) {
  return r.filter(Boolean).join(" ");
}
function lr({
  "data-test-id": r,
  children: e,
  className: t,
  onClick: n,
  disabled: a,
  small: i,
  title: s
}) {
  return /* @__PURE__ */ p.jsx(
    "button",
    {
      disabled: a,
      className: L4(
        "Button__root",
        a && "Button__disabled",
        i && "Button__small",
        t
      ),
      onClick: n,
      title: s,
      "aria-label": s,
      ...r && { "data-test-id": r },
      children: e
    }
  );
}
function bh({
  accept: r,
  label: e,
  onChange: t,
  "data-test-id": n
}) {
  return /* @__PURE__ */ p.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ p.jsx("label", { className: "Input__label", children: e }),
    /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "file",
        accept: r,
        className: "Input__input",
        onChange: (a) => t(a.target.files),
        "data-test-id": n
      }
    )
  ] });
}
const z4 = (r) => Wn ? (r || window).getSelection() : null, za = Ue("INSERT_IMAGE_COMMAND");
function P4({
  onClick: r
}) {
  const [e, t] = q(""), [n, a] = q(""), i = e === "";
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Pr,
      {
        label: "Image URL",
        placeholder: "i.e. https://source.unsplash.com/random",
        onChange: t,
        value: e,
        "data-test-id": "image-modal-url-input"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pr,
      {
        label: "Alt Text",
        placeholder: "Random unsplash image",
        onChange: a,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ p.jsx(Gn, { children: /* @__PURE__ */ p.jsx(
      lr,
      {
        "data-test-id": "image-modal-confirm-btn",
        disabled: i,
        onClick: () => r({ altText: n, src: e }),
        children: "Confirm"
      }
    ) })
  ] });
}
function B4({
  onClick: r
}) {
  const [e, t] = q(""), [n, a] = q(""), i = e === "", s = (o) => {
    const l = new FileReader();
    l.onload = function() {
      return typeof l.result == "string" && t(l.result), "";
    }, o !== null && l.readAsDataURL(o[0]);
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      bh,
      {
        label: "Image Upload",
        onChange: s,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pr,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: a,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ p.jsx(Gn, { children: /* @__PURE__ */ p.jsx(
      lr,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: i,
        onClick: () => r({ altText: n, src: e }),
        children: "Confirm"
      }
    ) })
  ] });
}
function yh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = q(null), a = Te(!1);
  B(() => {
    a.current = !1;
    const s = (o) => {
      a.current = o.altKey;
    };
    return document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s);
    };
  }, [r]);
  const i = (s) => {
    r.dispatchCommand(za, s), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    !t && /* @__PURE__ */ p.jsxs(F4, { children: [
      /* @__PURE__ */ p.jsx(
        lr,
        {
          "data-test-id": "image-modal-option-url",
          onClick: () => n("url"),
          children: "URL"
        }
      ),
      /* @__PURE__ */ p.jsx(
        lr,
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => n("file"),
          children: "File"
        }
      )
    ] }),
    t === "url" && /* @__PURE__ */ p.jsx(P4, { onClick: i }),
    t === "file" && /* @__PURE__ */ p.jsx(B4, { onClick: i })
  ] });
}
function j4({
  captionsEnabled: r
}) {
  const [e] = se();
  return B(() => {
    if (!e.hasNodes([jn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Re(
      e.registerCommand(
        za,
        (t) => {
          const n = jo(t);
          return In([n]), zt(n.getParentOrThrow()) && Ca(n, xe).selectEnd(), !0;
        },
        be
      ),
      e.registerCommand(
        fo,
        (t) => H4(t),
        Lt
      ),
      e.registerCommand(
        Si,
        (t) => q4(t),
        ye
      ),
      e.registerCommand(
        _i,
        (t) => U4(t, e),
        Lt
      )
    );
  }, [r, e]), null;
}
const $4 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", xh = document.createElement("img");
xh.src = $4;
function H4(r) {
  const e = b0();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(xh, 0, 0), t.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: e.__altText,
        caption: e.__caption,
        height: e.__height,
        key: e.getKey(),
        maxWidth: e.__maxWidth,
        showCaption: e.__showCaption,
        src: e.__src,
        width: e.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function q4(r) {
  return b0() ? (wh(r) || r.preventDefault(), !0) : !1;
}
function U4(r, e) {
  const t = b0();
  if (!t)
    return !1;
  const n = K4(r);
  if (!n)
    return !1;
  if (r.preventDefault(), wh(r)) {
    const a = W4(r);
    t.remove();
    const i = Sa();
    a != null && i.applyDOMRange(a), xt(i), e.dispatchCommand(za, n);
  }
  return !0;
}
function b0() {
  const r = j();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return wf(t) ? t : null;
}
function K4(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function wh(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function W4(r) {
  let e;
  const t = r.target, n = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, a = z4(n);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && a !== null)
    a.collapse(r.rangeParent, r.rangeOffset || 0), e = a.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
function G4({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n
}) {
  const a = Te(null);
  return B(() => {
    a.current !== null && a.current.focus();
  }, []), B(() => {
    let i = null;
    const s = (c) => {
      c.key === "Escape" && r();
    }, o = (c) => {
      const u = c.target;
      a.current !== null && !a.current.contains(u) && n && r();
    }, l = a.current;
    return l !== null && (i = l.parentElement, i !== null && i.addEventListener("click", o)), window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s), i !== null && (i == null || i.removeEventListener("click", o));
    };
  }, [n, r]), /* @__PURE__ */ p.jsx("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ p.jsxs("div", { className: "Modal__modal", tabIndex: -1, ref: a, children: [
    /* @__PURE__ */ p.jsx("h2", { className: "Modal__title", children: t }),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: r,
        children: "X"
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: "Modal__content", children: e })
  ] }) });
}
function Y4({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n = !1
}) {
  return Zt(
    /* @__PURE__ */ p.jsx(
      G4,
      {
        onClose: r,
        title: t,
        closeOnClickOutside: n,
        children: e
      }
    ),
    document.body
  );
}
function Pi() {
  const [r, e] = q(null), t = ie(() => {
    e(null);
  }, []), n = it(() => {
    if (r === null)
      return null;
    const { title: i, content: s, closeOnClickOutside: o } = r;
    return /* @__PURE__ */ p.jsx(
      Y4,
      {
        onClose: t,
        title: i,
        closeOnClickOutside: o,
        children: s
      }
    );
  }, [r, t]), a = ie(
    (i, s, o = !1) => {
      e({
        closeOnClickOutside: o,
        content: s(t),
        title: i
      });
    },
    [t]
  );
  return [n, a];
}
function V4({
  children: r,
  label: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs("div", { className: "Input__wrapper", children: [
    /* @__PURE__ */ p.jsx("label", { style: { marginTop: "-1em" }, className: "Input__label", children: e }),
    /* @__PURE__ */ p.jsx("select", { ...n, className: t || "select", children: r })
  ] });
}
const X4 = (r) => Wn ? (r || window).getSelection() : null, y0 = Ue("INSERT_INLINE_IMAGE_COMMAND");
function J4({
  activeEditor: r,
  onClose: e
}) {
  const t = Te(!1), [n, a] = q(""), [i, s] = q(""), [o, l] = q(!1), [c, u] = q("left"), d = n === "", m = (x) => {
    l(x.target.checked);
  }, g = (x) => {
    u(x.target.value);
  }, v = (x) => {
    const S = new FileReader();
    S.onload = function() {
      return typeof S.result == "string" && a(S.result), "";
    }, x !== null && S.readAsDataURL(x[0]);
  };
  B(() => {
    t.current = !1;
    const x = (S) => {
      t.current = S.altKey;
    };
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [r]);
  const b = () => {
    const x = { altText: i, position: c, showCaption: o, src: n };
    r.dispatchCommand(y0, x), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ p.jsx(
      bh,
      {
        label: "Image Upload",
        onChange: v,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ p.jsx(
      Pr,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: s,
        value: i,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ p.jsxs(
      V4,
      {
        style: { marginBottom: "1em", width: "290px" },
        label: "Position",
        name: "position",
        id: "position-select",
        onChange: g,
        children: [
          /* @__PURE__ */ p.jsx("option", { value: "left", children: "Left" }),
          /* @__PURE__ */ p.jsx("option", { value: "right", children: "Right" }),
          /* @__PURE__ */ p.jsx("option", { value: "full", children: "Full Width" })
        ]
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "Input__wrapper", children: [
      /* @__PURE__ */ p.jsx(
        "input",
        {
          id: "caption",
          className: "InlineImageNode_Checkbox",
          type: "checkbox",
          checked: o,
          onChange: m
        }
      ),
      /* @__PURE__ */ p.jsx("label", { htmlFor: "caption", children: "Show Caption" })
    ] }),
    /* @__PURE__ */ p.jsx(Gn, { children: /* @__PURE__ */ p.jsx(
      lr,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: d,
        onClick: () => b(),
        children: "Confirm"
      }
    ) })
  ] });
}
function Z4() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Kn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Re(
      r.registerCommand(
        y0,
        (e) => {
          const t = p0(e);
          return In([t]), zt(t.getParentOrThrow()) && Ca(t, xe).selectEnd(), !0;
        },
        be
      ),
      r.registerCommand(
        fo,
        (e) => e2(e),
        Lt
      ),
      r.registerCommand(
        Si,
        (e) => t2(e),
        ye
      ),
      r.registerCommand(
        _i,
        (e) => r2(e, r),
        Lt
      )
    );
  }, [r]), null;
}
const Q4 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Sh = document.createElement("img");
Sh.src = Q4;
function e2(r) {
  const e = x0();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(Sh, 0, 0), t.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: e.__altText,
        caption: e.__caption,
        height: e.__height,
        key: e.getKey(),
        showCaption: e.__showCaption,
        src: e.__src,
        width: e.__width
      },
      type: "image"
    })
  ), !0) : !1;
}
function t2(r) {
  return x0() ? (_h(r) || r.preventDefault(), !0) : !1;
}
function r2(r, e) {
  const t = x0();
  if (!t)
    return !1;
  const n = n2(r);
  if (!n)
    return !1;
  if (r.preventDefault(), _h(r)) {
    const a = a2(r);
    t.remove();
    const i = Sa();
    a != null && i.applyDOMRange(a), xt(i), e.dispatchCommand(y0, n);
  }
  return !0;
}
function x0() {
  const r = j();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return Lg(t) ? t : null;
}
function n2(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function _h(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function a2(r) {
  let e;
  const t = r.target, n = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, a = X4(n);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && a !== null)
    a.collapse(r.rangeParent, r.rangeOffset || 0), e = a.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
const w0 = Ue(
  "INSERT_EXCALIDRAW_COMMAND"
);
function i2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([ln]))
      throw new Error(
        "ExcalidrawPlugin: ExcalidrawNode not registered on editor"
      );
    return r.registerCommand(
      w0,
      () => {
        const e = uh();
        return In([e]), zt(e.getParentOrThrow()) && Ca(e, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
Ue("INSERT_NEW_TABLE_COMMAND");
uo({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function Ch({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = q("5"), [a, i] = q("5"), [s, o] = q(!0);
  B(() => {
    const c = Number(t), u = Number(a);
    c && c > 0 && c <= 500 && u && u > 0 && u <= 50 ? o(!1) : o(!0);
  }, [t, a]);
  const l = () => {
    r.dispatchCommand(Ro, {
      columns: a,
      rows: t
    }), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Pr,
      {
        placeholder: "# of rows (1-500)",
        label: "Rows",
        onChange: n,
        value: t,
        "data-test-id": "table-modal-rows",
        type: "number"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Pr,
      {
        placeholder: "# of columns (1-50)",
        label: "Columns",
        onChange: i,
        value: a,
        "data-test-id": "table-modal-columns",
        type: "number"
      }
    ),
    /* @__PURE__ */ p.jsx(Gn, { "data-test-id": "table-model-confirm-insert", children: /* @__PURE__ */ p.jsx(lr, { disabled: s, onClick: l, children: "Confirm" }) })
  ] });
}
const kh = Ue(
  "INSERT_POLL_COMMAND"
);
function Eh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = q(""), a = () => {
    r.dispatchCommand(kh, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Pr, { label: "Question", onChange: n, value: t }),
    /* @__PURE__ */ p.jsx(Gn, { children: /* @__PURE__ */ p.jsx(lr, { disabled: t.trim() === "", onClick: a, children: "Confirm" }) })
  ] });
}
function s2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Un]))
      throw new Error("PollPlugin: PollNode not registered on editor");
    return r.registerCommand(
      kh,
      (e) => {
        const t = f0(e, [
          mu(),
          mu()
        ]);
        return In([t]), zt(t.getParentOrThrow()) && Ca(t, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
const Th = Ue(), o2 = Ue();
function l2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([un, cn]))
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    const e = (t) => {
      var a, i;
      const n = j();
      if (U(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const s = me(
          n.anchor.getNode(),
          Qa
        );
        if (Qa(s)) {
          const o = s.getParent(), l = o && (t ? o.getFirstChild() : o == null ? void 0 : o.getLastChild()), c = t ? (a = s.getFirstDescendant()) == null ? void 0 : a.getKey() : (i = s.getLastDescendant()) == null ? void 0 : i.getKey();
          o !== null && l === s && n.anchor.key === c && (t ? s.insertBefore(xe()) : s.insertAfter(xe()));
        }
      }
      return !1;
    };
    return Re(
      // When layout is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        mn,
        () => e(!1),
        ye
      ),
      r.registerCommand(
        Ci,
        () => e(!1),
        ye
      ),
      // When layout is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        fn,
        () => e(!0),
        ye
      ),
      r.registerCommand(
        _a,
        () => e(!0),
        ye
      ),
      r.registerCommand(
        Th,
        (t) => (r.update(() => {
          const n = ch(t), a = gs(t);
          for (let i = 0; i < a; i++)
            n.append(
              Js().append(xe())
            );
          qr(n), n.selectStart();
        }), !0),
        be
      ),
      r.registerCommand(
        o2,
        ({ template: t, nodeKey: n }) => (r.update(() => {
          const a = bt(n);
          if (!Qa(a))
            return;
          const i = gs(t), s = gs(
            a.getTemplateColumns()
          );
          if (i > s)
            for (let o = s; o < i; o++)
              a.append(
                Js().append(xe())
              );
          else if (i < s)
            for (let o = s - 1; o >= i; o--) {
              const l = a.getChildAtIndex(o);
              hu(l) && l.remove();
            }
          a.setTemplateColumns(t);
        }), !0),
        be
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(cn, (t) => {
        const n = t.getParent();
        if (!Qa(n)) {
          const a = t.getChildren();
          for (const i of a)
            t.insertBefore(i);
          t.remove();
        }
      }),
      r.registerNodeTransform(un, (t) => {
        const n = t.getChildren();
        if (!n.every(hu)) {
          for (const a of n)
            t.insertBefore(a);
          t.remove();
        }
      })
    );
  }, [r]), null;
}
function gs(r) {
  return r.trim().split(/\s+/).length;
}
const vs = [
  { label: "2 columns (equal width)", value: "1fr 1fr" },
  { label: "2 columns (25% - 75%)", value: "1fr 3fr" },
  { label: "3 columns (equal width)", value: "1fr 1fr 1fr" },
  { label: "3 columns (25% - 50% - 25%)", value: "1fr 2fr 1fr" },
  { label: "4 columns (equal width)", value: "1fr 1fr 1fr 1fr" }
];
function Nh({
  activeEditor: r,
  onClose: e
}) {
  var s;
  const [t, n] = q(vs[0].value), a = (s = vs.find((o) => o.value === t)) == null ? void 0 : s.label, i = () => {
    r.dispatchCommand(Th, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      dn,
      {
        buttonClassName: "toolbar-item dialog-dropdown",
        buttonLabel: a,
        children: vs.map(({ label: o, value: l }) => /* @__PURE__ */ p.jsx(
          Me,
          {
            className: "item",
            onClick: () => n(l),
            children: /* @__PURE__ */ p.jsx("span", { className: "text", children: o })
          },
          l
        ))
      }
    ),
    /* @__PURE__ */ p.jsx(lr, { onClick: i, children: "Insert" })
  ] });
}
function no(r, e) {
  return no = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, no(r, e);
}
function u2(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, no(r, e);
}
var c2 = function(e, t) {
  return e === void 0 && (e = []), t === void 0 && (t = []), e.length !== t.length || e.some(function(n, a) {
    return !Object.is(n, t[a]);
  });
}, Mu = {
  error: null
}, d2 = /* @__PURE__ */ function(r) {
  u2(e, r);
  function e() {
    for (var n, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return n = r.call.apply(r, [this].concat(i)) || this, n.state = Mu, n.resetErrorBoundary = function() {
      for (var o, l = arguments.length, c = new Array(l), u = 0; u < l; u++)
        c[u] = arguments[u];
      n.props.onReset == null || (o = n.props).onReset.apply(o, c), n.reset();
    }, n;
  }
  e.getDerivedStateFromError = function(a) {
    return {
      error: a
    };
  };
  var t = e.prototype;
  return t.reset = function() {
    this.setState(Mu);
  }, t.componentDidCatch = function(a, i) {
    var s, o;
    (s = (o = this.props).onError) == null || s.call(o, a, i);
  }, t.componentDidUpdate = function(a, i) {
    var s = this.state.error, o = this.props.resetKeys;
    if (s !== null && i.error !== null && c2(a.resetKeys, o)) {
      var l, c;
      (l = (c = this.props).onResetKeysChange) == null || l.call(c, a.resetKeys, o), this.reset();
    }
  }, t.render = function() {
    var a = this.state.error, i = this.props, s = i.fallbackRender, o = i.FallbackComponent, l = i.fallback;
    if (a !== null) {
      var c = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ mt.isValidElement(l))
        return l;
      if (typeof s == "function")
        return s(c);
      if (o)
        return /* @__PURE__ */ mt.createElement(o, c);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, e;
}(mt.Component);
function h2({
  equation: r,
  inline: e,
  onDoubleClick: t
}) {
  const n = Te(null);
  return B(() => {
    const a = n.current;
    a !== null && lh.render(r, a, {
      displayMode: !e,
      // true === block display //
      errorColor: "#cc0000",
      output: "html",
      strict: "warn",
      throwOnError: !1,
      trust: !1
    });
  }, [r, e]), // We use an empty image tag either side to ensure Android doesn't try and compose from the
  // inner text from Katex. There didn't seem to be any other way of making this work,
  // without having a physical space.
  /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("img", { src: "#", alt: "" }),
    /* @__PURE__ */ p.jsx(
      "span",
      {
        role: "button",
        tabIndex: -1,
        onDoubleClick: t,
        ref: n
      }
    ),
    /* @__PURE__ */ p.jsx("img", { src: "#", alt: "" })
  ] });
}
function m2({
  onConfirm: r,
  initialEquation: e = ""
}) {
  const [t] = se(), [n, a] = q(e), [i, s] = q(!0), o = ie(() => {
    r(n, i);
  }, [r, n, i]), l = ie(() => {
    s(!i);
  }, [s, i]);
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "KatexEquationAlterer_defaultRow", children: [
      "Inline",
      /* @__PURE__ */ p.jsx("input", { type: "checkbox", checked: i, onChange: l })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_defaultRow", children: "Equation " }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_centerRow", children: i ? /* @__PURE__ */ p.jsx(
      "input",
      {
        onChange: (c) => {
          a(c.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) : /* @__PURE__ */ p.jsx(
      "textarea",
      {
        onChange: (c) => {
          a(c.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_defaultRow", children: "Visualization " }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_centerRow", children: /* @__PURE__ */ p.jsx(d2, { onError: (c) => t._onError(c), fallback: null, children: /* @__PURE__ */ p.jsx(
      h2,
      {
        equation: n,
        inline: !1,
        onDoubleClick: () => null
      }
    ) }) }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_dialogActions", children: /* @__PURE__ */ p.jsx(lr, { onClick: o, children: "Confirm" }) })
  ] });
}
const Ah = Ue("INSERT_EQUATION_COMMAND");
function Mh({
  activeEditor: r,
  onClose: e
}) {
  const t = ie(
    (n, a) => {
      r.dispatchCommand(Ah, { equation: n, inline: a }), e();
    },
    [r, e]
  );
  return /* @__PURE__ */ p.jsx(m2, { onConfirm: t });
}
function f2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([qn]))
      throw new Error(
        "EquationsPlugins: EquationsNode not registered on editor"
      );
    return r.registerCommand(
      Ah,
      (e) => {
        const { equation: t, inline: n } = e, a = m0(t, n);
        return In([a]), zt(a.getParentOrThrow()) && Ca(a, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
const S0 = Ue();
Ue();
function p2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([
      an,
      on,
      sn
    ]))
      throw new Error(
        "CollapsiblePlugin: CollapsibleContainerNode, CollapsibleTitleNode, or CollapsibleContentNode not registered on editor"
      );
    const e = () => {
      var a;
      const n = j();
      if (U(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const i = me(
          n.anchor.getNode(),
          fr
        );
        if (fr(i)) {
          const s = i.getParent();
          s !== null && s.getFirstChild() === i && n.anchor.key === ((a = i.getFirstDescendant()) == null ? void 0 : a.getKey()) && i.insertBefore(xe());
        }
      }
      return !1;
    }, t = () => {
      const n = j();
      if (U(n) && n.isCollapsed()) {
        const a = me(
          n.anchor.getNode(),
          fr
        );
        if (fr(a)) {
          const i = a.getParent();
          if (i !== null && i.getLastChild() === a) {
            const s = a.getFirstDescendant(), o = a.getLastDescendant();
            (o !== null && n.anchor.key === o.getKey() && n.anchor.offset === o.getTextContentSize() || s !== null && n.anchor.key === s.getKey() && n.anchor.offset === s.getTextContentSize()) && a.insertAfter(xe());
          }
        }
      }
      return !1;
    };
    return Re(
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Title + Content" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(sn, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          const i = n.getChildren();
          for (const s of i)
            n.insertBefore(s);
          n.remove();
        }
      }),
      r.registerNodeTransform(on, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          n.replace(
            xe().append(...n.getChildren())
          );
          return;
        }
      }),
      r.registerNodeTransform(an, (n) => {
        const a = n.getChildren();
        if (a.length !== 2 || !Ml(a[0]) || !hd(a[1])) {
          for (const i of a)
            n.insertBefore(i);
          n.remove();
        }
      }),
      // This handles the case when container is collapsed and we delete its previous sibling
      // into it, it would cause collapsed content deleted (since it's display: none, and selection
      // swallows it when deletes single char). Instead we expand container, which is although
      // not perfect, but avoids bigger problem
      r.registerCommand(
        ia,
        () => {
          const n = j();
          if (!U(n) || !n.isCollapsed() || n.anchor.offset !== 0)
            return !1;
          const i = n.anchor.getNode().getTopLevelElement();
          if (i === null)
            return !1;
          const s = i.getPreviousSibling();
          return !fr(s) || s.getOpen() ? !1 : (s.setOpen(!0), !0);
        },
        ye
      ),
      // When collapsible is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        mn,
        t,
        ye
      ),
      r.registerCommand(
        Ci,
        t,
        ye
      ),
      // When collapsible is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        fn,
        e,
        ye
      ),
      r.registerCommand(
        _a,
        e,
        ye
      ),
      // Handling CMD+Enter to toggle collapsible element collapsed state
      r.registerCommand(
        ca,
        () => {
          var a;
          const n = (a = r._window) == null ? void 0 : a.event;
          if (n && (n.ctrlKey || n.metaKey) && n.key === "Enter") {
            const i = ho();
            if (U(i) && i.isCollapsed()) {
              const s = me(
                i.anchor.getNode(),
                (o) => ue(o) && !o.isInline()
              );
              if (Ml(s)) {
                const o = s.getParent();
                if (fr(o))
                  return o.toggleOpen(), xt(i.clone()), !0;
              }
            }
          }
          return !1;
        },
        ye
      ),
      r.registerCommand(
        S0,
        () => (r.update(() => {
          const n = Wo(), a = xe();
          qr(
            Uo(!0).append(
              n.append(a),
              Ko().append(xe())
            )
          ), a.select();
        }), !0),
        ye
      )
    );
  }, [r]), null;
}
const Ou = "startTransition", g2 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
let v2 = class {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
};
const Du = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function Ru(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function b2(r, e, t, n) {
  const [a] = se();
  B(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(d, m) {
        let g = getComputedStyle(d);
        const v = g.position === "absolute", b = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = d; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && b.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = Ru(e, s);
      const c = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const d = Ru(e, s);
        d !== l && (l = d, n != null && n(d));
      }, u = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", c, { capture: !0, passive: !0 }), u.observe(e), () => {
        u.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", c, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const Iu = Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function y2({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ye }) {
  const [c, u] = q(null), d = n.match && n.match.matchingString;
  B(() => {
    u(0);
  }, [d]);
  const m = ie((v) => {
    e.update(() => {
      const b = n.match != null && o ? function(x) {
        const S = j();
        if (!U(S) || !S.isCollapsed()) return null;
        const w = S.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const N = w.offset, k = C.getTextContent().slice(0, N), E = x.replaceableString.length, I = N - function(M, F, z) {
          let $ = z;
          for (let P = $; P <= F.length; P++) M.substr(-P) === F.substr(0, P) && ($ = P);
          return $;
        }(k, x.matchingString, E);
        if (I < 0) return null;
        let D;
        return I === 0 ? [D] = C.splitText(N) : [, D] = C.splitText(I, N), D;
      }(n.match) : null;
      s(v, b, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ie((v) => {
    const b = e.getRootElement();
    b !== null && (b.setAttribute("aria-activedescendant", "typeahead-item-" + v), u(v));
  }, [e]);
  return B(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), g2(() => {
    a === null ? u(null) : c === null && g(0);
  }, [a, c, g]), B(() => Re(e.registerCommand(Iu, ({ option: v }) => !(!v.ref || v.ref.current == null) && (Du(v.ref.current), !0), l)), [e, g, l]), B(() => Re(e.registerCommand(mn, (v) => {
    const b = v;
    if (a !== null && a.length && c !== null) {
      const x = c !== a.length - 1 ? c + 1 : 0;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && e.dispatchCommand(Iu, { index: x, option: S }), b.preventDefault(), b.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(fn, (v) => {
    const b = v;
    if (a !== null && a.length && c !== null) {
      const x = c !== 0 ? c - 1 : a.length - 1;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && Du(S.ref.current), b.preventDefault(), b.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Rn, (v) => {
    const b = v;
    return b.preventDefault(), b.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(Ei, (v) => {
    const b = v;
    return a !== null && c !== null && a[c] != null && (b.preventDefault(), b.stopImmediatePropagation(), m(a[c]), !0);
  }, l), e.registerCommand(go, (v) => a !== null && c !== null && a[c] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[c]), !0), l)), [m, r, e, a, c, g, l]), i(t, it(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: c, setHighlightedIndex: u }), [m, c, a]), n.match ? n.match.matchingString : "");
}
function x2({ options: r, nodeKey: e, onClose: t, onOpen: n, onSelectOption: a, menuRenderFn: i, anchorClassName: s, commandPriority: o = ye, parent: l }) {
  const [c] = se(), [u, d] = q(null), m = function(x, S, w, C = document.body, N = !0) {
    const [k] = se(), E = Te(document.createElement("div")), I = ie(() => {
      E.current.style.top = E.current.style.bottom;
      const M = k.getRootElement(), F = E.current, z = F.firstChild;
      if (M !== null && x !== null) {
        const { left: $, top: P, width: X, height: Y } = x.getRect(), re = E.current.offsetHeight;
        if (F.style.top = `${P + re + 3 + (N ? window.pageYOffset : 0)}px`, F.style.left = `${$ + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${X}px`, z !== null) {
          z.style.top = `${P}`;
          const de = z.getBoundingClientRect(), J = de.height, he = de.width, le = M.getBoundingClientRect();
          $ + he > le.right && (F.style.left = `${le.right - he + window.pageXOffset}px`), (P + J > window.innerHeight || P + J > le.bottom) && P - le.top > J + Y && (F.style.top = `${P - J - Y + (N ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), E.current = F, M.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, N, w, C]);
    B(() => {
      const M = k.getRootElement();
      if (x !== null) return I(), () => {
        M !== null && M.removeAttribute("aria-controls");
        const F = E.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, I, x]);
    const D = ie((M) => {
      x !== null && (M || S(null));
    }, [x, S]);
    return b2(x, E.current, I, D), E;
  }(u, d, s, l), g = ie(() => {
    d(null), t != null && u !== null && t();
  }, [t, u]), v = ie((x) => {
    d(x), n != null && u === null && n(x);
  }, [n, u]), b = ie(() => {
    e ? c.update(() => {
      const x = bt(e), S = c.getElementByKey(e);
      var w;
      x != null && S != null && u == null && (w = () => v({ getRect: () => S.getBoundingClientRect() }), Ou in tn ? tn[Ou](w) : w());
    }) : e == null && u != null && g();
  }, [g, c, e, v, u]);
  return B(() => {
    b();
  }, [b, e]), B(() => {
    if (e != null) return c.registerUpdateListener(({ dirtyElements: x }) => {
      x.get(e) && b();
    });
  }, [c, b, e]), u === null || c === null ? null : p.jsx(y2, { close: g, resolution: u, editor: c, anchorElementRef: m, options: r, menuRenderFn: i, onSelectOption: a, commandPriority: o });
}
const w2 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, _0 = Ue("INSERT_EMBED_COMMAND");
let Fu = class extends v2 {
  constructor(e, t) {
    super(e), this.title = e, this.onSelect = t.onSelect.bind(this);
  }
};
function S2({ embedConfigs: r, onOpenEmbedModalForConfig: e, getMenuOptions: t, menuRenderFn: n, menuCommandPriority: a = ye }) {
  const [i] = se(), [s, o] = q(null), [l, c] = q(null), u = ie(() => {
    o(null), c(null);
  }, []), d = ie(async (b) => {
    const x = i.getEditorState().read(function() {
      const S = bt(b);
      if (lt(S)) return S.getURL();
    });
    if (x !== void 0) for (const S of r)
      await Promise.resolve(S.parseUrl(x)) != null && (c(S), o(b));
  }, [i, r]);
  B(() => Re(...[Fn, ka].map((b) => i.registerMutationListener(b, (...x) => ((S, { updateTags: w, dirtyLeaves: C }) => {
    for (const [N, k] of S) k === "created" && w.has("paste") && C.size <= 3 ? d(N) : N === s && u();
  })(...x), { skipInitialization: !0 }))), [d, i, r, s, u]), B(() => i.registerCommand(_0, (b) => {
    const x = r.find(({ type: S }) => S === b);
    return !!x && (e(x), !0);
  }, be), [i, r, e]);
  const m = ie(async function() {
    if (l != null && s != null) {
      const b = i.getEditorState().read(() => {
        const x = bt(s);
        return lt(x) ? x : null;
      });
      if (lt(b)) {
        const x = await Promise.resolve(l.parseUrl(b.__url));
        x != null && i.update(() => {
          j() || b.selectEnd(), l.insertNode(i, x), b.isAttached() && b.remove();
        });
      }
    }
  }, [l, i, s]), g = it(() => l != null && s != null ? t(l, m, u) : [], [l, m, t, s, u]), v = ie((b, x, S) => {
    i.update(() => {
      b.onSelect(x), S();
    });
  }, [i]);
  return s != null ? p.jsx(x2, { nodeKey: s, onClose: u, onSelectOption: v, options: g, menuRenderFn: n, commandPriority: a }) : null;
}
const Oh = Ue(
  "INSERT_FIGMA_COMMAND"
);
function _2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Ma]))
      throw new Error("FigmaPlugin: FigmaNode not registered on editor");
    return r.registerCommand(
      Oh,
      (e) => {
        const t = dd(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const Dh = Ue(
  "INSERT_TWEET_COMMAND"
);
function C2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Oa]))
      throw new Error("TwitterPlugin: TweetNode not registered on editor");
    return r.registerCommand(
      Dh,
      (e) => {
        const t = Ho(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const Rh = Ue(
  "INSERT_YOUTUBE_COMMAND"
);
function k2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Da]))
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    return r.registerCommand(
      Rh,
      (e) => {
        const t = qo(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const E2 = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon youtube" }),
  insertNode: (r, e) => {
    r.dispatchCommand(Rh, e.id);
  },
  keywords: ["youtube", "video"],
  // Determine if a given URL is a match and return url data.
  parseUrl: async (r) => {
    const e = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(r), t = e && (e == null ? void 0 : e[2].length) === 11 ? e[2] : null;
    return t != null ? {
      id: t,
      url: r
    } : null;
  },
  type: "youtube-video"
}, T2 = {
  // e.g. Tweet or Google Map.
  contentName: "Tweet",
  exampleUrl: "https://twitter.com/jack/status/20",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon tweet" }),
  // Create the Lexical embed node from the url data.
  insertNode: (r, e) => {
    r.dispatchCommand(Dh, e.id);
  },
  // For extra searching.
  keywords: ["tweet", "twitter"],
  // Determine if a given URL is a match and return url data.
  parseUrl: (r) => {
    const e = /^https:\/\/(twitter|x)\.com\/(#!\/)?(\w+)\/status(es)*\/(\d+)/.exec(
      r
    );
    return e != null ? {
      id: e[5],
      url: e[1]
    } : null;
  },
  type: "tweet"
}, N2 = {
  contentName: "Figma Document",
  exampleUrl: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon figma" }),
  insertNode: (r, e) => {
    r.dispatchCommand(Oh, e.id);
  },
  keywords: ["figma", "figma.com", "mock-up"],
  // Determine if a given URL is a match and return url data.
  parseUrl: (r) => {
    const e = /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.exec(
      r
    );
    return e != null ? {
      id: e[3],
      url: e[0]
    } : null;
  },
  type: "figma"
}, C0 = [
  T2,
  E2,
  N2
];
function A2({
  index: r,
  isSelected: e,
  onClick: t,
  onMouseEnter: n,
  option: a
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ p.jsx(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: a.setRefElement,
      role: "option",
      "aria-selected": e,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: t,
      children: /* @__PURE__ */ p.jsx("span", { className: "text", children: a.title })
    },
    a.key
  );
}
function M2({
  options: r,
  selectedItemIndex: e,
  onOptionClick: t,
  onOptionMouseEnter: n
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover", children: /* @__PURE__ */ p.jsx("ul", { children: r.map((a, i) => /* @__PURE__ */ p.jsx(
    A2,
    {
      index: i,
      isSelected: e === i,
      onClick: () => t(a, i),
      onMouseEnter: () => n(i),
      option: a
    },
    a.key
  )) }) });
}
const O2 = (r, e) => {
  let t;
  return (n) => {
    window.clearTimeout(t), t = window.setTimeout(() => {
      r(n);
    }, e);
  };
};
function D2({
  embedConfig: r,
  onClose: e
}) {
  const [t, n] = q(""), [a] = se(), [i, s] = q(null), o = it(
    () => O2((c) => {
      const u = w2.exec(c);
      r != null && c != null && u != null ? Promise.resolve(r.parseUrl(c)).then(
        (d) => {
          s(d);
        }
      ) : i != null && s(null);
    }, 200),
    [r, i]
  ), l = () => {
    i != null && (r.insertNode(a, i), e());
  };
  return /* @__PURE__ */ p.jsxs("div", { style: { width: "600px" }, children: [
    /* @__PURE__ */ p.jsx("div", { className: "Input__wrapper", children: /* @__PURE__ */ p.jsx(
      "input",
      {
        type: "text",
        className: "Input__input",
        placeholder: r.exampleUrl,
        value: t,
        "data-test-id": `${r.type}-embed-modal-url`,
        onChange: (c) => {
          const { value: u } = c.target;
          n(u), o(u);
        }
      }
    ) }),
    /* @__PURE__ */ p.jsx(Gn, { children: /* @__PURE__ */ p.jsx(
      lr,
      {
        disabled: !i,
        onClick: l,
        "data-test-id": `${r.type}-embed-modal-submit-btn`,
        children: "Embed"
      }
    ) })
  ] });
}
function R2() {
  const [r, e] = Pi(), t = (a) => {
    e(`Embed ${a.contentName}`, (i) => /* @__PURE__ */ p.jsx(D2, { embedConfig: a, onClose: i }));
  }, n = (a, i, s) => [
    new Fu("Dismiss", {
      onSelect: s
    }),
    new Fu(`Embed ${a.contentName}`, {
      onSelect: i
    })
  ];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    r,
    /* @__PURE__ */ p.jsx(
      S2,
      {
        embedConfigs: C0,
        onOpenEmbedModalForConfig: t,
        getMenuOptions: n,
        menuRenderFn: (a, { selectedIndex: i, options: s, selectOptionAndCleanUp: o, setHighlightedIndex: l }) => a.current ? da.createPortal(
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "typeahead-popover auto-embed-menu",
              style: {
                marginLeft: a.current.style.width,
                width: 200
              },
              children: /* @__PURE__ */ p.jsx(
                M2,
                {
                  options: s,
                  selectedItemIndex: i,
                  onOptionClick: (c, u) => {
                    l(u), o(c);
                  },
                  onOptionMouseEnter: (c) => {
                    l(c);
                  }
                }
              )
            }
          ),
          a.current
        ) : null
      }
    )
  ] });
}
const ao = {
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
}, Lu = [
  ['"Noto Sans JP", serif', "Noto Sans JP"],
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"]
], I2 = [
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
], Zn = {
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
function Ht(r) {
  return r ? "active dropdown-item-active" : "";
}
function F2({
  editor: r,
  blockType: e,
  disabled: t = !1
}) {
  const n = () => {
    r.update(() => {
      const c = j();
      Qr(c, () => xe());
    });
  }, a = (c) => {
    e !== c && r.update(() => {
      const u = j();
      Qr(u, () => en(c));
    });
  }, i = () => {
    e !== "bullet" ? r.dispatchCommand(_o, void 0) : n();
  }, s = () => {
    e !== "check" ? r.dispatchCommand(ko, void 0) : n();
  }, o = () => {
    e !== "number" ? r.dispatchCommand(Co, void 0) : n();
  }, l = () => {
    e !== "quote" && r.update(() => {
      const c = j();
      Qr(c, () => Ni());
    });
  };
  return /* @__PURE__ */ p.jsxs(
    dn,
    {
      disabled: t,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + e,
      buttonLabel: ao[e],
      buttonAriaLabel: "Formatting options for text style",
      children: [
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "paragraph"),
            onClick: n,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon paragraph" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Normal" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "h1"),
            onClick: () => a("h1"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h1" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 1" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "h2"),
            onClick: () => a("h2"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h2" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 2" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "h3"),
            onClick: () => a("h3"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h3" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 3" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "bullet"),
            onClick: i,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon bullet-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Bullet List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "number"),
            onClick: o,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon numbered-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Numbered List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "check"),
            onClick: s,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon check-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Check List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            className: "item " + Ht(e === "quote"),
            onClick: l,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon quote" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Quote" })
            ]
          }
        )
      ]
    }
  );
}
function L2({
  editor: r,
  value: e,
  style: t,
  disabled: n = !1
}) {
  var s;
  const a = ie(
    (o) => {
      r.update(() => {
        const l = j();
        l !== null && (ua(l) ? l.getNodes()[0].patchStyle({ [t]: o }) : bo(l, {
          [t]: o
        }));
      });
    },
    [r, t]
  ), i = t === "font-family" ? "Formatting options for font family" : "Formatting options for font size";
  return /* @__PURE__ */ p.jsx(
    dn,
    {
      disabled: n,
      buttonClassName: "toolbar-item " + t,
      buttonLabel: ((s = Lu.find(([o]) => o === e)) == null ? void 0 : s[1]) || e,
      buttonIconClassName: t === "font-family" ? "icon block-type font-family" : "",
      buttonAriaLabel: i,
      children: (t === "font-family" ? Lu : I2).map(
        ([o, l]) => /* @__PURE__ */ p.jsx(
          Me,
          {
            className: `item ${Ht(e === o)} ${t === "font-size" ? "fontsize-item" : ""}`,
            onClick: () => a(o),
            children: /* @__PURE__ */ p.jsx("span", { className: "text", children: l })
          },
          o
        )
      )
    }
  );
}
function Jr() {
  return /* @__PURE__ */ p.jsx("div", { className: "divider" });
}
function z2({
  editor: r,
  value: e,
  isRTL: t,
  disabled: n = !1
}) {
  const a = Zn[e || "left"];
  return /* @__PURE__ */ p.jsxs(
    dn,
    {
      disabled: n,
      buttonLabel: a.name,
      buttonIconClassName: `icon ${t ? a.iconRTL : a.icon}`,
      buttonClassName: "toolbar-item spaced alignment",
      buttonAriaLabel: "Formatting options for text alignment",
      children: [
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "left");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon left-align" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Left Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "center");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon center-align" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Center Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "right");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon right-align" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Right Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "justify");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon justify-align" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Justify Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "start");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx(
                "i",
                {
                  className: `icon ${t ? Zn.start.iconRTL : Zn.start.icon}`
                }
              ),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Start Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(er, "end");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx(
                "i",
                {
                  className: `icon ${t ? Zn.end.iconRTL : Zn.end.icon}`
                }
              ),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "End Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx(Jr, {}),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(ui, void 0);
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon " + (t ? "indent" : "outdent") }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Outdent" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Me,
          {
            onClick: () => {
              r.dispatchCommand(ki, void 0);
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon " + (t ? "outdent" : "indent") }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Indent" })
            ]
          }
        )
      ]
    }
  );
}
function P2({ setIsLinkEditMode: r }) {
  const [e] = se(), [t, n] = q("paragraph"), [a, i] = q(e), [s, o] = q("15px"), [l, c] = q("#000"), [u, d] = q("#fff"), [m, g] = q('"Noto Sans JP", serif'), [v, b] = q("left"), [x, S] = q(!1), [w, C] = q(!1), [N, k] = q(!1), [E, I] = q(!1), [D, M] = q(!1), [F, z] = q(!1), [$, P] = q(!1), [X, Y] = q(!1), [re, de] = q(!1), [J, he] = q(!1), [le, Ee] = q(!1), [oe, Pe] = q(() => e.isEditable()), [Be, je] = Pi(), dt = ie(() => {
    const ee = j();
    if (ee && ua(ee)) {
      const we = ee.getNodes()[0];
      C(we.hasFormat("bold")), k(we.hasFormat("italic")), I(we.hasFormat("underline")), M(we.hasFormat("strikethrough")), z(we.hasFormat("subscript")), P(we.hasFormat("superscript")), Y(we.hasFormat("code")), o(we.getStyleValue("font-size", "15px")), c(we.getStyleValue("color", "#000")), d(we.getStyleValue("background-color", "#fff")), g(we.getStyleValue("font-family", '"Noto Sans JP", serif'));
    } else if (U(ee)) {
      const we = ee.anchor.getNode();
      let Ke = we.getKey() === "root" ? we : me(we, (jt) => {
        const vn = jt.getParent();
        return vn !== null && zt(vn);
      });
      Ke === null && (Ke = we.getTopLevelElementOrThrow());
      const Ct = Ke.getKey(), tt = a.getElementByKey(Ct);
      C(ee.hasFormat("bold")), k(ee.hasFormat("italic")), I(ee.hasFormat("underline")), M(ee.hasFormat("strikethrough")), z(ee.hasFormat("subscript")), P(ee.hasFormat("superscript")), Y(ee.hasFormat("code")), de(Nc(ee));
      const ht = Dn(ee), $e = ht.getParent();
      if (lt($e) || lt(ht) ? S(!0) : S(!1), tt !== null)
        if (ke(Ke)) {
          const jt = Oc(
            we,
            Ta
          ), vn = jt ? jt.getListType() : Ke.getListType();
          n(vn);
        } else {
          const jt = Tn(Ke) ? Ke.getTag() : Ke.getType();
          jt in ao && n(jt);
        }
      o(
        Ba(ee, "font-size", "15px")
      ), c(
        Ba(ee, "color", "#000")
      ), d(
        Ba(
          ee,
          "background-color",
          "#fff"
        )
      ), g(
        Ba(ee, "font-family", '"Noto Sans JP", serif')
      );
      let It;
      lt($e) && (It = me(
        ht,
        (jt) => ue(jt) && !jt.isInline()
      )), b(
        ue(It) ? It.getFormatType() : ue(ht) ? ht.getFormatType() : ($e == null ? void 0 : $e.getFormatType()) || "left"
      );
    }
  }, [a]);
  B(() => e.registerCommand(
    yr,
    (ee, we) => (dt(), i(we), Pe(we.isEditable()), !1),
    pt
  ), [e, dt]), B(() => Re(
    e.registerEditableListener((ee) => {
      Pe(ee);
    }),
    a.registerUpdateListener(({ editorState: ee }) => {
      ee.read(() => {
        dt();
      });
    }),
    a.registerCommand(
      ta,
      (ee) => (he(ee), !1),
      pt
    ),
    a.registerCommand(
      ea,
      (ee) => (Ee(ee), !1),
      pt
    )
  ), [dt, a, e]), B(() => a.registerCommand(
    z1,
    (ee) => {
      const we = ee, { code: Ke, ctrlKey: Ct, metaKey: tt } = we;
      if (Ke === "KeyK" && (Ct || tt)) {
        we.preventDefault();
        let ht;
        return x ? (r(!1), ht = null) : (r(!0), ht = bi("https://")), a.dispatchCommand(ir, ht);
      }
      return !1;
    },
    P1
  ), [a, x, r]);
  const Je = ie(
    (ee, we) => {
      a.update(
        () => {
          const Ke = j();
          Ke !== null && (ua(Ke) ? Ke.getNodes()[0].patchStyle(ee) : bo(Ke, ee));
        },
        we ? { tag: "historic" } : {}
      );
    },
    [a]
  ), Ge = ie(() => {
    a.update(() => {
      const ee = j();
      if (ee && ua(ee))
        ee.getNodes()[0].clearAllFormats();
      else if (U(ee)) {
        const we = ee.anchor, Ke = ee.focus, Ct = ee.getNodes();
        if (we.key === Ke.key && we.offset === Ke.offset)
          return;
        Ct.forEach((tt, ht) => {
          if (Se(tt)) {
            let $e = tt;
            ht === 0 && we.offset !== 0 && ($e = $e.splitText(we.offset)[1] || $e), ht === Ct.length - 1 && ($e = $e.splitText(Ke.offset)[0] || $e), $e.__style !== "" && $e.setStyle(""), $e.__format !== 0 && ($e.setFormat(0), Ti($e).setFormat("")), tt = $e;
          } else Tn(tt) || Qm(tt) ? tt.replace(xe(), !0) : $s(tt) && tt.setFormat("");
        });
      }
    });
  }, [a]), Rt = ie(
    (ee, we) => {
      Je({ color: ee }, we);
    },
    [Je]
  ), _t = ie(
    (ee, we) => {
      Je({ "background-color": ee }, we);
    },
    [Je]
  ), Qt = ie(() => {
    x ? (r(!1), e.dispatchCommand(ir, null)) : (r(!0), e.dispatchCommand(ir, bi("https://")));
  }, [e, x, r]);
  return /* @__PURE__ */ p.jsxs("div", { className: "toolbar", children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !J || !oe,
        onClick: () => {
          a.dispatchCommand(Sc, void 0);
        },
        title: Or ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Undo",
        children: /* @__PURE__ */ p.jsx("i", { className: "format undo" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le || !oe,
        onClick: () => {
          a.dispatchCommand(wc, void 0);
        },
        title: Or ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Redo",
        children: /* @__PURE__ */ p.jsx("i", { className: "format redo" })
      }
    ),
    /* @__PURE__ */ p.jsx(Jr, {}),
    t in ao && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        F2,
        {
          disabled: !oe,
          blockType: t,
          editor: a
        }
      ),
      /* @__PURE__ */ p.jsx(Jr, {})
    ] }),
    /* @__PURE__ */ p.jsx(
      L2,
      {
        disabled: !oe,
        editor: a,
        value: m,
        style: "font-family"
      }
    ),
    /* @__PURE__ */ p.jsx(Jr, {}),
    /* @__PURE__ */ p.jsx(N4, { selectionFontSize: s.slice(0, -2), editor: a, disabled: !oe }),
    /* @__PURE__ */ p.jsx(Jr, {}),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !oe,
        onClick: () => {
          a.dispatchCommand(yt, "bold");
        },
        className: "toolbar-item spaced " + (w ? "active" : ""),
        title: Or ? "Bold (⌘B)" : "Bold (Ctrl+B)",
        type: "button",
        "aria-label": `Format text as bold. Shortcut: ${Or ? "⌘B" : "Ctrl+B"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !oe,
        onClick: () => {
          a.dispatchCommand(yt, "italic");
        },
        className: "toolbar-item spaced " + (N ? "active" : ""),
        title: Or ? "Italic (⌘I)" : "Italic (Ctrl+I)",
        type: "button",
        "aria-label": `Format text as italics. Shortcut: ${Or ? "⌘I" : "Ctrl+I"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !oe,
        onClick: () => {
          a.dispatchCommand(yt, "underline");
        },
        className: "toolbar-item spaced " + (E ? "active" : ""),
        title: Or ? "Underline (⌘U)" : "Underline (Ctrl+U)",
        type: "button",
        "aria-label": `Format text to underlined. Shortcut: ${Or ? "⌘U" : "Ctrl+U"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !oe,
        onClick: () => {
          a.dispatchCommand(yt, "code");
        },
        className: "toolbar-item spaced " + (X ? "active" : ""),
        title: "Insert code block",
        type: "button",
        "aria-label": "Insert code block",
        children: /* @__PURE__ */ p.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !oe,
        onClick: Qt,
        className: "toolbar-item spaced " + (x ? "active" : ""),
        "aria-label": "Insert link",
        title: "Insert link",
        type: "button",
        children: /* @__PURE__ */ p.jsx("i", { className: "format link" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Au,
      {
        disabled: !oe,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting text color",
        buttonIconClassName: "icon font-color",
        color: l,
        onChange: Rt,
        title: "text color"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Au,
      {
        disabled: !oe,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting background color",
        buttonIconClassName: "icon bg-color",
        color: u,
        onChange: _t,
        title: "bg color"
      }
    ),
    /* @__PURE__ */ p.jsxs(
      dn,
      {
        disabled: !oe,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "",
        buttonAriaLabel: "Formatting options for additional text styles",
        buttonIconClassName: "icon dropdown-more",
        children: [
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(
                  yt,
                  "strikethrough"
                );
              },
              className: "item " + Ht(D),
              title: "Strikethrough",
              "aria-label": "Format text with a strikethrough",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon strikethrough" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Strikethrough" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(yt, "subscript");
              },
              className: "item " + Ht(F),
              title: "Subscript",
              "aria-label": "Format text with a subscript",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon subscript" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Subscript" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(
                  yt,
                  "superscript"
                );
              },
              className: "item " + Ht($),
              title: "Superscript",
              "aria-label": "Format text with a superscript",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon superscript" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Superscript" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: Ge,
              className: "item",
              title: "Clear text formatting",
              "aria-label": "Clear all text formatting",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon clear" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Clear Formatting" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(Jr, {}),
    /* @__PURE__ */ p.jsxs(
      dn,
      {
        disabled: !oe,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "Insert",
        buttonAriaLabel: "Insert specialized editor node",
        buttonIconClassName: "icon plus",
        children: [
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(
                  Ao,
                  void 0
                );
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon horizontal-rule" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Horizontal Rule" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(v0, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon page-break" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Page Break" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Image", (ee) => /* @__PURE__ */ p.jsx(
                  yh,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon image" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Image" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Inline Image", (ee) => /* @__PURE__ */ p.jsx(
                  J4,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon image" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Inline Image" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(
                  w0,
                  void 0
                );
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon diagram-2" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Excalidraw" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Table", (ee) => /* @__PURE__ */ p.jsx(
                  Ch,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Table" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Poll", (ee) => /* @__PURE__ */ p.jsx(
                  Eh,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon poll" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Poll" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Columns Layout", (ee) => /* @__PURE__ */ p.jsx(
                  Nh,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon columns" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Columns Layout" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                je("Insert Equation", (ee) => /* @__PURE__ */ p.jsx(
                  Mh,
                  {
                    activeEditor: a,
                    onClose: ee
                  }
                ));
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon equation" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Equation" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                e.update(() => {
                  const ee = wt(), we = Pg(0, 0);
                  ee.append(we);
                });
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon sticky" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Sticky Note" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                e.dispatchCommand(S0, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Collapsible container" })
              ]
            }
          ),
          C0.map((ee) => /* @__PURE__ */ p.jsxs(
            Me,
            {
              onClick: () => {
                a.dispatchCommand(
                  _0,
                  ee.type
                );
              },
              className: "item",
              children: [
                ee.icon,
                /* @__PURE__ */ p.jsx("span", { className: "text", children: ee.contentName })
              ]
            },
            ee.type
          ))
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(Jr, {}),
    /* @__PURE__ */ p.jsx(
      z2,
      {
        disabled: !oe,
        value: v,
        editor: e,
        isRTL: re
      }
    ),
    Be
  ] });
}
function B2() {
  const [r] = se();
  return B(() => {
    if (!r.hasNodes([Ta, Ea])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [r]), function(e) {
    B(() => Am(e), [e]);
  }(r), null;
}
function j2() {
  const [r] = se();
  return B(() => Re(r.registerCommand(ko, () => (Is(r, "check"), !0), ye), r.registerCommand(mn, (e) => Bu(e, r, !1), ye), r.registerCommand(fn, (e) => Bu(e, r, !0), ye), r.registerCommand(Rn, (e) => {
    if (io() != null) {
      const t = r.getRootElement();
      return t != null && t.focus(), !0;
    }
    return !1;
  }, ye), r.registerCommand(B1, (e) => {
    const t = io();
    return !(t == null || !r.isEditable()) && (r.update(() => {
      const n = Qe(t);
      Fe(n) && (e.preventDefault(), n.toggleChecked());
    }), !0);
  }, ye), r.registerCommand(_a, (e) => r.getEditorState().read(() => {
    const t = j();
    if (U(t) && t.isCollapsed()) {
      const { anchor: n } = t, a = n.type === "element";
      if (a || n.offset === 0) {
        const i = n.getNode(), s = me(i, (o) => ue(o) && !o.isInline());
        if (Fe(s)) {
          const o = s.getParent();
          if (ke(o) && o.getListType() === "check" && (a || s.getFirstDescendant() === i)) {
            const l = r.getElementByKey(s.__key);
            if (l != null && document.activeElement !== l) return l.focus(), e.preventDefault(), !0;
          }
        }
      }
    }
    return !1;
  }), ye), r.registerRootListener((e, t) => {
    e !== null && (e.addEventListener("click", zu), e.addEventListener("pointerdown", Pu)), t !== null && (t.removeEventListener("click", zu), t.removeEventListener("pointerdown", Pu));
  }))), null;
}
function Ih(r, e) {
  const t = r.target;
  if (t === null || !Cr(t)) return;
  const n = t.firstChild;
  if (n != null && Cr(n) && (n.tagName === "UL" || n.tagName === "OL")) return;
  const a = t.parentNode;
  if (!a || a.__lexicalListType !== "check") return;
  const i = t.getBoundingClientRect(), s = r.pageX / Ms(t);
  (t.dir === "rtl" ? s < i.right && s > i.right - 20 : s > i.left && s < i.left + 20) && e();
}
function zu(r) {
  Ih(r, () => {
    if (r.target instanceof HTMLElement) {
      const e = r.target, t = j1(e);
      t != null && t.isEditable() && t.update(() => {
        const n = Qe(e);
        Fe(n) && (e.focus(), n.toggleChecked());
      });
    }
  });
}
function Pu(r) {
  Ih(r, () => {
    r.preventDefault();
  });
}
function io() {
  const r = document.activeElement;
  return r != null && r.tagName === "LI" && r.parentNode != null && r.parentNode.__lexicalListType === "check" ? r : null;
}
function Bu(r, e, t) {
  const n = io();
  return n != null && e.update(() => {
    const a = Qe(n);
    if (!Fe(a)) return;
    const i = function(s, o) {
      let l = o ? s.getPreviousSibling() : s.getNextSibling(), c = s;
      for (; l == null && Fe(c); ) c = c.getParentOrThrow().getParent(), c != null && (l = o ? c.getPreviousSibling() : c.getNextSibling());
      for (; Fe(l); ) {
        const u = o ? l.getLastChild() : l.getFirstChild();
        if (!ke(u)) return l;
        l = o ? u.getLastChild() : u.getFirstChild();
      }
      return null;
    }(a, t);
    if (i != null) {
      i.selectStart();
      const s = e.getElementByKey(i.__key);
      s != null && (r.preventDefault(), setTimeout(() => {
        s.focus();
      }, 0));
    }
  }), !1;
}
function $2(r) {
  const e = r.getNodes();
  return e.length === 0 ? /* @__PURE__ */ new Set([
    r.anchor.getNode().getParentOrThrow(),
    r.focus.getNode().getParentOrThrow()
  ]) : new Set(
    e.map((t) => ue(t) ? t : t.getParentOrThrow())
  );
}
function H2(r) {
  const e = j();
  if (!U(e))
    return !1;
  const t = $2(e);
  let n = 0;
  for (const a of t)
    if (ke(a))
      n = Math.max(Ds(a) + 1, n);
    else if (Fe(a)) {
      const i = a.getParent();
      if (!ke(i))
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      n = Math.max(Ds(i) + 1, n);
    }
  return n <= r;
}
function q2({ maxDepth: r }) {
  const [e] = se();
  return B(() => e.registerCommand(
    ki,
    () => !H2(r ?? 7),
    pt
  ), [e, r]), null;
}
const U2 = 1, K2 = 100;
let Fh = 0, ju = !1;
function W2() {
  window.addEventListener(
    "keydown",
    (r) => {
      r.key === "Tab" && (Fh = r.timeStamp);
    },
    !0
  );
}
function G2() {
  const [r] = se();
  return B(() => (ju || (W2(), ju = !0), r.registerCommand(
    xc,
    (e) => {
      const t = j();
      return U(t) && Fh + K2 > e.timeStamp && xt(t.clone()), !1;
    },
    U2
  )), [r]), null;
}
const Y2 = 10, V2 = 5;
function $u(r, e, t, n = Y2, a = V2) {
  const i = t.parentElement;
  if (r === null || !i) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const s = e.getBoundingClientRect(), o = t.getBoundingClientRect(), l = i.getBoundingClientRect();
  let c = r.top - n, u = r.left - a;
  c < l.top && (c += s.height + r.height + n * 2), u + s.width > l.right && (u = l.right - s.width - a), c -= o.top, u -= o.left, e.style.opacity = "1", e.style.transform = `translate(${u}px, ${c}px)`;
}
function X2({
  editor: r,
  isLink: e,
  setIsLink: t,
  anchorElem: n,
  isLinkEditMode: a,
  setIsLinkEditMode: i
}) {
  const s = Te(null), o = Te(null), [l, c] = q(""), [u, d] = q("https://"), [m, g] = q(
    null
  ), v = ie(() => {
    var E, I;
    const S = j();
    if (U(S)) {
      const D = Dn(S), M = me(D, lt);
      M ? c(M.getURL()) : lt(D) ? c(D.getURL()) : c(""), a && d(l);
    }
    const w = s.current, C = window.getSelection(), N = document.activeElement;
    if (w === null)
      return;
    const k = r.getRootElement();
    if (S !== null && C !== null && k !== null && k.contains(C.anchorNode) && r.isEditable()) {
      const D = (I = (E = C.focusNode) == null ? void 0 : E.parentElement) == null ? void 0 : I.getBoundingClientRect();
      D && (D.y += 40, $u(D, w, n)), g(S);
    } else (!N || N.className !== "link-input") && (k !== null && $u(null, w, n), g(null), i(!1), c(""));
    return !0;
  }, [n, r, i, a, l]);
  B(() => {
    const S = n.parentElement, w = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", w), S && S.addEventListener("scroll", w), () => {
      window.removeEventListener("resize", w), S && S.removeEventListener("scroll", w);
    };
  }, [n.parentElement, r, v]), B(() => Re(
    r.registerUpdateListener(({ editorState: S }) => {
      S.read(() => {
        v();
      });
    }),
    r.registerCommand(
      yr,
      () => (v(), !0),
      ye
    ),
    r.registerCommand(
      Rn,
      () => e ? (t(!1), !0) : !1,
      Lt
    )
  ), [r, v, t, e]), B(() => {
    r.getEditorState().read(() => {
      v();
    });
  }, [r, v]), B(() => {
    a && o.current && o.current.focus();
  }, [a, e]);
  const b = (S) => {
    S.key === "Enter" ? (S.preventDefault(), x()) : S.key === "Escape" && (S.preventDefault(), i(!1));
  }, x = () => {
    m !== null && (l !== "" && (r.dispatchCommand(ir, bi(u)), r.update(() => {
      const S = j();
      if (U(S)) {
        const w = Dn(S).getParent();
        if (vr(w)) {
          const C = ha(w.getURL(), {
            rel: w.__rel,
            target: w.__target,
            title: w.__title
          });
          w.replace(C, !0);
        }
      }
    })), d("https://"), i(!1));
  };
  return /* @__PURE__ */ p.jsx("div", { ref: s, className: "link-editor", children: e ? a ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: o,
        className: "link-input",
        value: u,
        onChange: (S) => {
          d(S.target.value);
        },
        onKeyDown: (S) => {
          b(S);
        }
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "link-cancel",
          role: "button",
          tabIndex: 0,
          onMouseDown: (S) => S.preventDefault(),
          onClick: () => {
            i(!1);
          }
        }
      ),
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "link-confirm",
          role: "button",
          tabIndex: 0,
          onMouseDown: (S) => S.preventDefault(),
          onClick: x
        }
      )
    ] })
  ] }) : /* @__PURE__ */ p.jsxs("div", { className: "link-view", children: [
    /* @__PURE__ */ p.jsx(
      "a",
      {
        href: bi(l),
        target: "_blank",
        rel: "noopener noreferrer",
        children: l
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "link-edit",
        role: "button",
        tabIndex: 0,
        onMouseDown: (S) => S.preventDefault(),
        onClick: () => {
          d(l), i(!0);
        }
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "link-trash",
        role: "button",
        tabIndex: 0,
        onMouseDown: (S) => S.preventDefault(),
        onClick: () => {
          r.dispatchCommand(ir, null);
        }
      }
    )
  ] }) : null });
}
function J2(r, e, t, n) {
  const [a, i] = q(r), [s, o] = q(!1);
  return B(() => {
    function l() {
      const c = j();
      if (U(c)) {
        const u = Dn(c), d = me(u, lt), m = me(
          u,
          vr
        );
        if (!(d || m)) {
          o(!1);
          return;
        }
        const g = c.getNodes().find((v) => {
          const b = me(v, lt), x = me(v, vr);
          if (!(b != null && b.is(d)) && !(x != null && x.is(m)) && !b && !x && !ba(v))
            return v;
        });
        o(!g);
      }
    }
    return Re(
      r.registerUpdateListener(({ editorState: c }) => {
        c.read(() => {
          l();
        });
      }),
      r.registerCommand(
        yr,
        (c, u) => (l(), i(u), !1),
        pt
      ),
      r.registerCommand(
        wa,
        (c) => {
          const u = j();
          if (U(u)) {
            const d = Dn(u), m = me(d, lt);
            if (lt(m) && (c.metaKey || c.ctrlKey))
              return window.open(m.getURL(), "_blank"), !0;
          }
          return !1;
        },
        ye
      )
    );
  }, [r]), Zt(
    /* @__PURE__ */ p.jsx(
      X2,
      {
        editor: a,
        isLink: s,
        anchorElem: e,
        setIsLink: o,
        isLinkEditMode: t,
        setIsLinkEditMode: n
      }
    ),
    e
  );
}
function Z2({
  anchorElem: r = document.body,
  isLinkEditMode: e,
  setIsLinkEditMode: t
}) {
  const [n] = se();
  return J2(
    n,
    r,
    e,
    t
  );
}
function Q2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var e5 = Q2(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function Hu(r, e = (t) => t) {
  return (t) => {
    const n = r.exec(t);
    return n === null ? null : { index: n.index, length: n[0].length, text: n[0], url: e(n[0]) };
  };
}
function Lh(r, e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t](r);
    if (n) return n;
  }
  return null;
}
const t5 = /[.,;\s]/;
function yi(r) {
  return t5.test(r);
}
function zh(r) {
  return yi(r[r.length - 1]);
}
function so(r) {
  return yi(r[0]);
}
function Ph(r) {
  let e = r.getPreviousSibling();
  return ue(e) && (e = e.getLastDescendant()), e === null || ba(e) || Se(e) && zh(e.getTextContent());
}
function Bh(r) {
  let e = r.getNextSibling();
  return ue(e) && (e = e.getFirstDescendant()), e === null || ba(e) || Se(e) && so(e.getTextContent());
}
function r5(r, e, t, n) {
  return (r > 0 ? yi(t[r - 1]) : Ph(n[0])) ? e < t.length ? yi(t[e]) : Bh(n[n.length - 1]) : !1;
}
function n5(r, e, t) {
  const n = [], a = [], i = [];
  let s = 0, o = 0;
  const l = [...r];
  for (; l.length > 0; ) {
    const c = l[0], u = c.getTextContent().length, d = o;
    o + u <= e ? (n.push(c), s += u) : d >= t ? i.push(c) : a.push(c), o += u, l.shift();
  }
  return [s, n, a, i];
}
function a5(r, e, t, n) {
  const a = Os(n.url, n.attributes);
  if (r.length === 1) {
    let i, s = r[0];
    e === 0 ? [i, s] = s.splitText(t) : [, i, s] = s.splitText(e, t);
    const o = Ir(n.text);
    return o.setFormat(i.getFormat()), o.setDetail(i.getDetail()), o.setStyle(i.getStyle()), a.append(o), i.replace(a), s;
  }
  if (r.length > 1) {
    const i = r[0];
    let s, o = i.getTextContent().length;
    e === 0 ? s = i : [, s] = i.splitText(e);
    const l = [];
    let c;
    for (let g = 1; g < r.length; g++) {
      const v = r[g], b = v.getTextContent().length, x = o;
      if (x < t) if (o + b <= t) l.push(v);
      else {
        const [S, w] = v.splitText(t - x);
        l.push(S), c = w;
      }
      o += b;
    }
    const u = j(), d = u ? u.getNodes().find(Se) : void 0, m = Ir(s.getTextContent());
    return m.setFormat(s.getFormat()), m.setDetail(s.getDetail()), m.setStyle(s.getStyle()), a.append(m, ...l), d && d === s && (U(u) ? m.select(u.anchor.offset, u.focus.offset) : gt(u) && m.select(0, m.getTextContent().length)), s.replace(a), c;
  }
}
function bs(r, e, t) {
  const n = r.getChildren(), a = n.length;
  for (let l = 0; l < a; l++) {
    const c = n[l];
    if (!Se(c) || !c.isSimpleText()) return ii(r), void t(null, r.getURL());
  }
  const i = r.getTextContent(), s = Lh(i, e);
  if (s === null || s.text !== i || !Ph(r) || !Bh(r)) return ii(r), void t(null, r.getURL());
  const o = r.getURL();
  if (o !== s.url && (r.setURL(s.url), t(s.url, o)), s.attributes) {
    const l = r.getRel();
    l !== s.attributes.rel && (r.setRel(s.attributes.rel || null), t(s.attributes.rel || null, l));
    const c = r.getTarget();
    c !== s.attributes.target && (r.setTarget(s.attributes.target || null), t(s.attributes.target || null, c));
  }
}
function ii(r) {
  const e = r.getChildren();
  for (let t = e.length - 1; t >= 0; t--) r.insertAfter(e[t]);
  return r.remove(), e.map((t) => t.getLatest());
}
function i5(r, e, t) {
  B(() => {
    r.hasNodes([ka]) || e5(77);
    const n = (a, i) => {
      t && t(a, i);
    };
    return Re(r.registerNodeTransform($r, (a) => {
      const i = a.getParentOrThrow(), s = a.getPreviousSibling();
      if (vr(i) && !i.getIsUnlinked()) bs(i, e, n);
      else if (!lt(i)) {
        if (a.isSimpleText() && (so(a.getTextContent()) || !vr(s))) {
          const o = function(l) {
            const c = [l];
            let u = l.getNextSibling();
            for (; u !== null && Se(u) && u.isSimpleText() && (c.push(u), !/[\s]/.test(u.getTextContent())); ) u = u.getNextSibling();
            return c;
          }(a);
          (function(l, c, u) {
            let d = [...l];
            const m = d.map((x) => x.getTextContent()).join("");
            let g, v = m, b = 0;
            for (; (g = Lh(v, c)) && g !== null; ) {
              const x = g.index, S = x + g.length;
              if (r5(b + x, b + S, m, d)) {
                const [w, , C, N] = n5(d, b + x, b + S), k = a5(C, b + x - w, b + S - w, g);
                d = k ? [k, ...N] : N, u(g.url, null), b = 0;
              } else b += S;
              v = v.substring(S);
            }
          })(o, e, n);
        }
        (function(o, l, c) {
          const u = o.getPreviousSibling(), d = o.getNextSibling(), m = o.getTextContent();
          var g;
          !vr(u) || u.getIsUnlinked() || so(m) && (g = m, !(u.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(g) : /^\.[a-zA-Z0-9]{1,}/.test(g))) || (u.append(o), bs(u, l, c), c(null, u.getURL())), !vr(d) || d.getIsUnlinked() || zh(m) || (ii(d), bs(d, l, c), c(null, d.getURL()));
        })(a, e, n);
      }
    }), r.registerCommand(ir, (a) => {
      const i = j();
      return a !== null || !U(i) || i.extract().forEach((s) => {
        const o = s.getParent();
        if (vr(o)) return o.setIsUnlinked(!o.getIsUnlinked()), o.markDirty(), !0;
      }), !1;
    }, ye));
  }, [r, e, t]);
}
function s5({ matchers: r, onChange: e }) {
  const [t] = se();
  return i5(t, r, e), null;
}
const o5 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, l5 = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, u5 = [
  Hu(o5, (r) => r.startsWith("http") ? r : `https://${r}`),
  Hu(l5, (r) => `mailto:${r}`)
];
function c5() {
  return /* @__PURE__ */ p.jsx(s5, { matchers: u5 });
}
function d5({ validateUrl: r, attributes: e }) {
  const [t] = se();
  return B(() => {
    if (!t.hasNodes([Fn])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return Re(t.registerCommand(ir, (n) => {
      if (n === null) return Yi(n), !0;
      if (typeof n == "string") return !(r !== void 0 && !r(n)) && (Yi(n, e), !0);
      {
        const { url: a, target: i, rel: s, title: o } = n;
        return Yi(a, { ...e, rel: s, target: i, title: o }), !0;
      }
    }, ye), r !== void 0 ? t.registerCommand(fc, (n) => {
      const a = j();
      if (!U(a) || a.isCollapsed() || !xr(n, ClipboardEvent)) return !1;
      const i = n;
      if (i.clipboardData === null) return !1;
      const s = i.clipboardData.getData("text");
      return !!r(s) && !a.getNodes().some((o) => ue(o)) && (t.dispatchCommand(ir, { ...e, url: s }), n.preventDefault(), !0);
    }, ye) : () => {
    });
  }, [t, r, e]), null;
}
function h5() {
  return /* @__PURE__ */ p.jsx(d5, { validateUrl: O4 });
}
function m5(r, e, t) {
  const [n] = se();
  B(() => Re(...r4(n, r, e, t)), [t, n, r, e]);
}
const f5 = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function p5() {
  const [r] = se();
  B(() => {
    if (!r.hasNodes([An]))
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
  }, [r]);
  const e = ie((n) => cd(n.getTextContent()), []), t = ie((n) => {
    const a = f5.exec(n);
    if (a === null)
      return null;
    const i = a[2].length, s = a.index + a[1].length;
    return {
      end: s + i,
      start: s
    };
  }, []);
  return m5(
    t,
    An,
    e
  ), null;
}
const qu = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]],
  ["🙂", ["emoji happysmile", "🙂"]],
  ["😀", ["emoji veryhappysmile", "😀"]],
  ["🙁", ["emoji unhappysmile", "🙁"]],
  ["❤", ["emoji heart", "❤"]]
]);
function g5(r) {
  const e = r.getTextContent();
  for (let t = 0; t < e.length; t++) {
    const n = qu.get(e[t]) || qu.get(e.slice(t, t + 2));
    if (n !== void 0) {
      const [a, i] = n;
      let s;
      t === 0 ? [s] = r.splitText(t + 2) : [, s] = r.splitText(t, t + 2);
      const o = ud(a, i);
      return s.replace(o), o;
    }
  }
  return null;
}
function v5(r) {
  let e = r;
  for (; e !== null; ) {
    if (!e.isSimpleText())
      return;
    e = g5(e);
  }
}
function b5(r) {
  B(() => {
    if (!r.hasNodes([Aa]))
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    return r.registerNodeTransform($r, v5);
  }, [r]);
}
function y5() {
  const [r] = se();
  return b5(r), null;
}
const Uu = "startTransition", x5 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
class k0 {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
}
const Ku = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function Wu(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function w5(r, e, t, n) {
  const [a] = se();
  B(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(d, m) {
        let g = getComputedStyle(d);
        const v = g.position === "absolute", b = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = d; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && b.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = Wu(e, s);
      const c = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const d = Wu(e, s);
        d !== l && (l = d, n != null && n(d));
      }, u = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", c, { capture: !0, passive: !0 }), u.observe(e), () => {
        u.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", c, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const Gu = Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function S5({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ye }) {
  const [c, u] = q(null), d = n.match && n.match.matchingString;
  B(() => {
    u(0);
  }, [d]);
  const m = ie((v) => {
    e.update(() => {
      const b = n.match != null && o ? function(x) {
        const S = j();
        if (!U(S) || !S.isCollapsed()) return null;
        const w = S.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const N = w.offset, k = C.getTextContent().slice(0, N), E = x.replaceableString.length, I = N - function(M, F, z) {
          let $ = z;
          for (let P = $; P <= F.length; P++) M.substr(-P) === F.substr(0, P) && ($ = P);
          return $;
        }(k, x.matchingString, E);
        if (I < 0) return null;
        let D;
        return I === 0 ? [D] = C.splitText(N) : [, D] = C.splitText(I, N), D;
      }(n.match) : null;
      s(v, b, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ie((v) => {
    const b = e.getRootElement();
    b !== null && (b.setAttribute("aria-activedescendant", "typeahead-item-" + v), u(v));
  }, [e]);
  return B(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), x5(() => {
    a === null ? u(null) : c === null && g(0);
  }, [a, c, g]), B(() => Re(e.registerCommand(Gu, ({ option: v }) => !(!v.ref || v.ref.current == null) && (Ku(v.ref.current), !0), l)), [e, g, l]), B(() => Re(e.registerCommand(mn, (v) => {
    const b = v;
    if (a !== null && a.length && c !== null) {
      const x = c !== a.length - 1 ? c + 1 : 0;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && e.dispatchCommand(Gu, { index: x, option: S }), b.preventDefault(), b.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(fn, (v) => {
    const b = v;
    if (a !== null && a.length && c !== null) {
      const x = c !== 0 ? c - 1 : a.length - 1;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && Ku(S.ref.current), b.preventDefault(), b.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Rn, (v) => {
    const b = v;
    return b.preventDefault(), b.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(Ei, (v) => {
    const b = v;
    return a !== null && c !== null && a[c] != null && (b.preventDefault(), b.stopImmediatePropagation(), m(a[c]), !0);
  }, l), e.registerCommand(go, (v) => a !== null && c !== null && a[c] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[c]), !0), l)), [m, r, e, a, c, g, l]), i(t, it(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: c, setHighlightedIndex: u }), [m, c, a]), n.match ? n.match.matchingString : "");
}
const _5 = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function E0(r, { minLength: e = 1, maxLength: t = 75 }) {
  return ie((n) => {
    const a = new RegExp("(^|\\s|\\()([" + r + "]((?:" + ("[^" + r + _5 + "\\s]") + "){0," + t + "}))$").exec(n);
    if (a !== null) {
      const i = a[1], s = a[3];
      if (s.length >= e) return { leadOffset: a.index + i.length, matchingString: s, replaceableString: a[2] };
    }
    return null;
  }, [t, e, r]);
}
function T0({ options: r, onQueryChange: e, onSelectOption: t, onOpen: n, onClose: a, menuRenderFn: i, triggerFn: s, anchorClassName: o, commandPriority: l = ye, parent: c }) {
  const [u] = se(), [d, m] = q(null), g = function(x, S, w, C = document.body, N = !0) {
    const [k] = se(), E = Te(document.createElement("div")), I = ie(() => {
      E.current.style.top = E.current.style.bottom;
      const M = k.getRootElement(), F = E.current, z = F.firstChild;
      if (M !== null && x !== null) {
        const { left: $, top: P, width: X, height: Y } = x.getRect(), re = E.current.offsetHeight;
        if (F.style.top = `${P + re + 3 + (N ? window.pageYOffset : 0)}px`, F.style.left = `${$ + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${X}px`, z !== null) {
          z.style.top = `${P}`;
          const de = z.getBoundingClientRect(), J = de.height, he = de.width, le = M.getBoundingClientRect();
          $ + he > le.right && (F.style.left = `${le.right - he + window.pageXOffset}px`), (P + J > window.innerHeight || P + J > le.bottom) && P - le.top > J + Y && (F.style.top = `${P - J - Y + (N ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), E.current = F, M.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, N, w, C]);
    B(() => {
      const M = k.getRootElement();
      if (x !== null) return I(), () => {
        M !== null && M.removeAttribute("aria-controls");
        const F = E.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, I, x]);
    const D = ie((M) => {
      x !== null && (M || S(null));
    }, [x, S]);
    return w5(x, E.current, I, D), E;
  }(d, m, o, c), v = ie(() => {
    m(null), a != null && d !== null && a();
  }, [a, d]), b = ie((x) => {
    m(x), n != null && d === null && n(x);
  }, [n, d]);
  return B(() => {
    const x = u.registerUpdateListener(() => {
      u.getEditorState().read(() => {
        const S = u._window || window, w = S.document.createRange(), C = j(), N = function(I) {
          let D = null;
          return I.getEditorState().read(() => {
            const M = j();
            U(M) && (D = function(F) {
              const z = F.anchor;
              if (z.type !== "text") return null;
              const $ = z.getNode();
              if (!$.isSimpleText()) return null;
              const P = z.offset;
              return $.getTextContent().slice(0, P);
            }(M));
          }), D;
        }(u);
        if (!U(C) || !C.isCollapsed() || N === null || w === null) return void v();
        const k = s(N, u);
        if (e(k ? k.matchingString : null), k !== null && !function(I, D) {
          return D === 0 && I.getEditorState().read(() => {
            const M = j();
            if (U(M)) {
              const F = M.anchor.getNode().getPreviousSibling();
              return Se(F) && F.isTextEntity();
            }
            return !1;
          });
        }(u, k.leadOffset) && function(D, M, F) {
          const z = F.getSelection();
          if (z === null || !z.isCollapsed) return !1;
          const $ = z.anchorNode, P = D, X = z.anchorOffset;
          if ($ == null || X == null) return !1;
          try {
            M.setStart($, P), M.setEnd($, X);
          } catch {
            return !1;
          }
          return !0;
        }(k.leadOffset, w, S) !== null)
          return E = () => b({ getRect: () => w.getBoundingClientRect(), match: k }), void (Uu in tn ? tn[Uu](E) : E());
        var E;
        v();
      });
    });
    return () => {
      x();
    };
  }, [u, s, e, d, v, b]), d === null || u === null ? null : p.jsx(S5, { close: v, resolution: d, editor: u, anchorElementRef: g, options: r, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: t, commandPriority: l });
}
class ot extends k0 {
  constructor(t, n) {
    super(t);
    // What shows up in the editor
    ne(this, "title");
    // Icon for display
    ne(this, "icon");
    // For extra searching.
    ne(this, "keywords");
    // TBD
    ne(this, "keyboardShortcut");
    // What happens when you select this option?
    ne(this, "onSelect");
    this.title = t, this.keywords = n.keywords || [], this.icon = n.icon, this.keyboardShortcut = n.keyboardShortcut, this.onSelect = n.onSelect.bind(this);
  }
}
function C5({
  index: r,
  isSelected: e,
  onClick: t,
  onMouseEnter: n,
  option: a
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ p.jsxs(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: a.setRefElement,
      role: "option",
      "aria-selected": e,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: t,
      children: [
        a.icon,
        /* @__PURE__ */ p.jsx("span", { className: "text", children: a.title })
      ]
    },
    a.key
  );
}
function k5(r, e) {
  const t = [];
  if (e == null)
    return t;
  const n = e.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
  if (n !== null) {
    const a = n[1], i = n[2] ? [n[2]] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    t.push(
      ...i.map(
        (s) => new ot(`${a}x${s} Table`, {
          icon: /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
          keywords: ["table"],
          onSelect: () => r.dispatchCommand(Ro, { columns: s, rows: a })
        })
      )
    );
  }
  return t;
}
function E5(r, e) {
  return [
    new ot("Paragraph", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => r.update(() => {
        const t = j();
        U(t) && Qr(t, () => xe());
      })
    }),
    ...[1, 2, 3].map(
      (t) => new ot(`Heading ${t}`, {
        icon: /* @__PURE__ */ p.jsx("i", { className: `icon h${t}` }),
        keywords: ["heading", "header", `h${t}`],
        onSelect: () => r.update(() => {
          const n = j();
          U(n) && Qr(n, () => en(`h${t}`));
        })
      })
    ),
    new ot("Table", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => e("Insert Table", (t) => /* @__PURE__ */ p.jsx(Ch, { activeEditor: r, onClose: t }))
    }),
    new ot("Numbered List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => r.dispatchCommand(Co, void 0)
    }),
    new ot("Bulleted List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => r.dispatchCommand(_o, void 0)
    }),
    new ot("Check List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => r.dispatchCommand(ko, void 0)
    }),
    new ot("Quote", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => r.update(() => {
        const t = j();
        U(t) && Qr(t, () => Ni());
      })
    }),
    new ot("Code", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => r.update(() => {
        const t = j();
        if (U(t))
          if (t.isCollapsed())
            Qr(t, () => rn());
          else {
            const n = t.getTextContent(), a = rn();
            t.insertNodes([a]), t.insertRawText(n);
          }
      })
    }),
    new ot("Divider", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => r.dispatchCommand(Ao, void 0)
    }),
    new ot("Page Break", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon page-break" }),
      keywords: ["page break", "divider"],
      onSelect: () => r.dispatchCommand(v0, void 0)
    }),
    new ot("Excalidraw", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon diagram-2" }),
      keywords: ["excalidraw", "diagram", "drawing"],
      onSelect: () => r.dispatchCommand(w0, void 0)
    }),
    new ot("Poll", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon poll" }),
      keywords: ["poll", "vote"],
      onSelect: () => e("Insert Poll", (t) => /* @__PURE__ */ p.jsx(Eh, { activeEditor: r, onClose: t }))
    }),
    ...C0.map(
      (t) => new ot(`Embed ${t.contentName}`, {
        icon: t.icon,
        keywords: [...t.keywords, "embed"],
        onSelect: () => r.dispatchCommand(_0, t.type)
      })
    ),
    new ot("Equation", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon equation" }),
      keywords: ["equation", "latex", "math"],
      onSelect: () => e("Insert Equation", (t) => /* @__PURE__ */ p.jsx(Mh, { activeEditor: r, onClose: t }))
    }),
    new ot("GIF", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon gif" }),
      keywords: ["gif", "animate", "image", "file"],
      onSelect: () => r.dispatchCommand(za, {
        altText: "Cat typing on a laptop",
        src: "https://media.giphy.com/media/3o7TKz5R0Lkzg7g9gI/giphy.gif"
      })
    }),
    new ot("Image", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon image" }),
      keywords: ["image", "photo", "picture", "file"],
      onSelect: () => e("Insert Image", (t) => /* @__PURE__ */ p.jsx(yh, { activeEditor: r, onClose: t }))
    }),
    new ot("Collapsible", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
      keywords: ["collapse", "collapsible", "toggle"],
      onSelect: () => r.dispatchCommand(S0, void 0)
    }),
    new ot("Columns Layout", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => e("Insert Columns Layout", (t) => /* @__PURE__ */ p.jsx(Nh, { activeEditor: r, onClose: t }))
    }),
    ...["left", "center", "right", "justify"].map(
      (t) => new ot(`Align ${t}`, {
        icon: /* @__PURE__ */ p.jsx("i", { className: `icon ${t}-align` }),
        keywords: ["align", "justify", t],
        onSelect: () => r.dispatchCommand(er, t)
      })
    )
  ];
}
function T5() {
  const [r] = se(), [e, t] = Pi(), [n, a] = q(null), i = E0("/", {
    minLength: 0
  }), s = it(() => {
    const l = E5(r, t);
    if (!n)
      return l;
    const c = new RegExp(n, "i");
    return [
      ...k5(r, n),
      ...l.filter(
        (u) => c.test(u.title) || u.keywords.some((d) => c.test(d))
      )
    ];
  }, [r, n, t]), o = ie(
    (l, c, u, d) => {
      r.update(() => {
        c == null || c.remove(), l.onSelect(d), u();
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    e,
    /* @__PURE__ */ p.jsx(
      T0,
      {
        onQueryChange: a,
        onSelectOption: o,
        triggerFn: i,
        options: s,
        menuRenderFn: (l, { selectedIndex: c, selectOptionAndCleanUp: u, setHighlightedIndex: d }) => l.current && s.length ? da.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover component-picker-menu", children: /* @__PURE__ */ p.jsx("ul", { children: s.map((m, g) => /* @__PURE__ */ p.jsx(
            C5,
            {
              index: g,
              isSelected: c === g,
              onClick: () => {
                d(g), u(m);
              },
              onMouseEnter: () => {
                d(g);
              },
              option: m
            },
            m.key
          )) }) }),
          l.current
        ) : null
      }
    )
  ] });
}
function N5(r, e) {
  const t = r.getRangeAt(0);
  let n;
  if (r.anchorNode === e) {
    let a = e;
    for (; a.firstElementChild != null; )
      a = a.firstElementChild;
    n = a.getBoundingClientRect();
  } else
    n = t.getBoundingClientRect();
  return n;
}
const A5 = 10, M5 = 5;
function O5(r, e, t, n = !1, a = A5, i = M5) {
  const s = t.parentElement;
  if (r === null || !s) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const o = e.getBoundingClientRect(), l = t.getBoundingClientRect(), c = s.getBoundingClientRect();
  let u = r.top - o.height - a, d = r.left - i;
  u < c.top && (u += o.height + r.height + a * (n ? 9 : 2)), d + o.width > c.right && (d = c.right - o.width - i), u -= l.top, d -= l.left, e.style.opacity = "1", e.style.transform = `translate(${d}px, ${u}px)`;
}
function D5({
  editor: r,
  anchorElem: e,
  isLink: t,
  isBold: n,
  isItalic: a,
  isUnderline: i,
  isCode: s,
  isStrikethrough: o,
  isSubscript: l,
  isSuperscript: c
}) {
  const u = Te(null), d = ie(() => {
    t ? r.dispatchCommand(ir, null) : r.dispatchCommand(ir, "https://");
  }, [r, t]);
  function m(b) {
    if (u != null && u.current && (b.buttons === 1 || b.buttons === 3) && u.current.style.pointerEvents !== "none") {
      const x = b.clientX, S = b.clientY, w = document.elementFromPoint(x, S);
      u.current.contains(w) || (u.current.style.pointerEvents = "none");
    }
  }
  function g(b) {
    u != null && u.current && u.current.style.pointerEvents !== "auto" && (u.current.style.pointerEvents = "auto");
  }
  B(() => {
    if (u != null && u.current)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", g);
      };
  }, [u]);
  const v = ie(() => {
    const b = j(), x = u.current, S = window.getSelection();
    if (x === null)
      return;
    const w = r.getRootElement();
    if (b !== null && S !== null && !S.isCollapsed && w !== null && w.contains(S.anchorNode)) {
      const C = N5(S, w);
      O5(
        C,
        x,
        e,
        t
      );
    }
  }, [r, e, t]);
  return B(() => {
    const b = e.parentElement, x = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", x), b && b.addEventListener("scroll", x), () => {
      window.removeEventListener("resize", x), b && b.removeEventListener("scroll", x);
    };
  }, [r, v, e]), B(() => (r.getEditorState().read(() => {
    v();
  }), Re(
    r.registerUpdateListener(({ editorState: b }) => {
      b.read(() => {
        v();
      });
    }),
    r.registerCommand(
      yr,
      () => (v(), !1),
      ye
    )
  )), [r, v]), /* @__PURE__ */ p.jsx("div", { ref: u, className: "floating-text-format-popup", children: r.isEditable() && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "bold");
        },
        className: "popup-item spaced " + (n ? "active" : ""),
        "aria-label": "Format text as bold",
        children: /* @__PURE__ */ p.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "italic");
        },
        className: "popup-item spaced " + (a ? "active" : ""),
        "aria-label": "Format text as italics",
        children: /* @__PURE__ */ p.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "underline");
        },
        className: "popup-item spaced " + (i ? "active" : ""),
        "aria-label": "Format text to underlined",
        children: /* @__PURE__ */ p.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "strikethrough");
        },
        className: "popup-item spaced " + (o ? "active" : ""),
        "aria-label": "Format text with a strikethrough",
        children: /* @__PURE__ */ p.jsx("i", { className: "format strikethrough" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "subscript");
        },
        className: "popup-item spaced " + (l ? "active" : ""),
        title: "Subscript",
        "aria-label": "Format Subscript",
        children: /* @__PURE__ */ p.jsx("i", { className: "format subscript" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "superscript");
        },
        className: "popup-item spaced " + (c ? "active" : ""),
        title: "Superscript",
        "aria-label": "Format Superscript",
        children: /* @__PURE__ */ p.jsx("i", { className: "format superscript" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(yt, "code");
        },
        className: "popup-item spaced " + (s ? "active" : ""),
        "aria-label": "Insert code block",
        children: /* @__PURE__ */ p.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: d,
        className: "popup-item spaced " + (t ? "active" : ""),
        "aria-label": "Insert link",
        children: /* @__PURE__ */ p.jsx("i", { className: "format link" })
      }
    )
  ] }) });
}
function R5(r, e) {
  const [t, n] = q(!1), [a, i] = q(!1), [s, o] = q(!1), [l, c] = q(!1), [u, d] = q(!1), [m, g] = q(!1), [v, b] = q(!1), [x, S] = q(!1), [w, C] = q(!1), N = ie(() => {
    r.getEditorState().read(() => {
      if (r.isComposing())
        return;
      const k = j(), E = window.getSelection(), I = r.getRootElement();
      if (E !== null && (!U(k) || I === null || !I.contains(E.anchorNode))) {
        n(!1);
        return;
      }
      if (!U(k))
        return;
      const D = Dn(k);
      o(k.hasFormat("bold")), c(k.hasFormat("italic")), d(k.hasFormat("underline")), g(k.hasFormat("strikethrough")), b(k.hasFormat("subscript")), S(k.hasFormat("superscript")), C(k.hasFormat("code"));
      const M = D.getParent();
      lt(M) || lt(D) ? i(!0) : i(!1), !wo(k.anchor.getNode()) && k.getTextContent() !== "" ? n(Se(D) || Hr(D)) : n(!1);
      const F = k.getTextContent().replace(/\n/g, "");
      if (!k.isCollapsed() && F === "") {
        n(!1);
        return;
      }
    });
  }, [r]);
  return B(() => (document.addEventListener("selectionchange", N), () => {
    document.removeEventListener("selectionchange", N);
  }), [N]), B(() => Re(
    r.registerUpdateListener(() => {
      N();
    }),
    r.registerRootListener(() => {
      r.getRootElement() === null && n(!1);
    })
  ), [r, N]), t ? Zt(
    /* @__PURE__ */ p.jsx(
      D5,
      {
        editor: r,
        anchorElem: e,
        isLink: a,
        isBold: s,
        isItalic: l,
        isStrikethrough: m,
        isSubscript: v,
        isSuperscript: x,
        isUnderline: u,
        isCode: w
      }
    ),
    e
  ) : null;
}
function I5({
  anchorElem: r = document.body
}) {
  const [e] = se();
  return R5(e, r);
}
function F5(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ti = F5(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function L5({ hasCellMerge: r = !0, hasCellBackgroundColor: e = !0, hasTabHandler: t = !0 }) {
  const [n] = se();
  return B(() => (n.hasNodes([or, sr, Pn]) || ti(10), Re(n.registerCommand(Ro, ({ columns: a, rows: i, includeHeaders: s }) => {
    const o = sf(Number(i), Number(a), s);
    qr(o);
    const l = o.getFirstDescendant();
    return Se(l) && l.select(), !0;
  }, be), n.registerNodeTransform(or, (a) => {
    const [i] = Lo(a, null, null), s = i.reduce((l, c) => Math.max(l, c.length), 0), o = a.getChildren();
    for (let l = 0; l < i.length; ++l) {
      const c = o[l];
      if (!c) continue;
      const u = i[l].reduce((d, m) => m ? 1 + d : d, 0);
      if (u !== s) for (let d = u; d < s; ++d) {
        const m = Jt(0);
        m.append(xe()), c.append(m);
      }
    }
  }))), [n]), B(() => {
    const a = /* @__PURE__ */ new Map(), i = (o, l, c) => {
      const u = c, d = mf(o, u, n, t);
      a.set(l, [d, u]);
    }, s = n.registerMutationListener(or, (o) => {
      for (const [l, c] of o) if (c === "created" || c === "updated") {
        const u = a.get(l), d = n.getElementByKey(l);
        u && d === u[1] || (u && (u[0].removeListeners(), a.delete(l)), d !== null && n.getEditorState().read(() => {
          const m = bt(l);
          We(m) && i(m, l, d);
        }));
      } else if (c === "destroyed") {
        const u = a.get(l);
        u !== void 0 && (u[0].removeListeners(), a.delete(l));
      }
    }, { skipInitialization: !1 });
    return () => {
      s();
      for (const [, [o]] of a) o.removeListeners();
    };
  }, [n, t]), B(() => {
    if (!r) return n.registerNodeTransform(sr, (a) => {
      if (a.getColSpan() > 1 || a.getRowSpan() > 1) {
        const [, , i] = vt(a), [s] = Kt(i, a, a), o = s.length, l = s[0].length;
        let c = i.getFirstChild();
        nt(c) || ti(175);
        const u = [];
        for (let d = 0; d < o; d++) {
          d !== 0 && (c = c.getNextSibling(), nt(c) || ti(175));
          let m = null;
          for (let g = 0; g < l; g++) {
            const v = s[d][g], b = v.cell;
            if (v.startRow === d && v.startColumn === g) m = b, u.push(b);
            else if (b.getColSpan() > 1 || b.getRowSpan() > 1) {
              ae(b) || ti(176);
              const x = Jt(b.__headerState);
              m !== null ? m.insertAfter(x) : um(c, x);
            }
          }
        }
        for (const d of u) d.setColSpan(1), d.setRowSpan(1);
      }
    });
  }, [n, r]), B(() => {
    if (!e) return n.registerNodeTransform(sr, (a) => {
      a.getBackgroundColor() !== null && a.setBackgroundColor(null);
    });
  }, [n, e, r]), null;
}
const z5 = 33, Yu = 92;
function P5({ editor: r }) {
  const e = Te(null), t = Te(null), n = Te(null), a = Te(null), [i, s] = q(null), [o, l] = q(null), [c, u] = q(!1), [d, m] = q(null), g = ie(() => {
    l(null), e.current = null, m(null), a.current = null, n.current = null;
  }, []), v = (D) => (D.buttons & 1) === 1;
  B(() => r.registerNodeTransform(or, (D) => {
    if (D.getColWidths())
      return D;
    const M = D.getColumnCount(), F = Yu;
    return D.setColWidths(Array(M).fill(F)), D;
  }), [r]), B(() => {
    const D = ($) => {
      setTimeout(() => {
        const P = $.target;
        if (d) {
          s({
            x: $.clientX,
            y: $.clientY
          });
          return;
        }
        if (u(v($)), !(t.current && t.current.contains(P)) && e.current !== P) {
          e.current = P;
          const X = js(P);
          X && o !== X ? r.update(() => {
            const Y = Qe(X.elem);
            if (!Y)
              throw new Error("TableCellResizer: Table cell node not found.");
            const re = br(Y), de = r.getElementByKey(re.getKey());
            if (!de)
              throw new Error("TableCellResizer: Table element not found.");
            e.current = P, n.current = de.getBoundingClientRect(), l(X);
          }) : X == null && g();
        }
      }, 0);
    }, M = () => {
      setTimeout(() => {
        u(!0);
      }, 0);
    }, F = () => {
      setTimeout(() => {
        u(!1);
      }, 0);
    }, z = r.registerRootListener(
      ($, P) => {
        P == null || P.removeEventListener("mousemove", D), P == null || P.removeEventListener("mousedown", M), P == null || P.removeEventListener("mouseup", F), $ == null || $.addEventListener("mousemove", D), $ == null || $.addEventListener("mousedown", M), $ == null || $.addEventListener("mouseup", F);
      }
    );
    return () => {
      z();
    };
  }, [o, d, r, g]);
  const b = (D) => D === "bottom", x = ie(
    (D) => {
      if (!o)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(
        () => {
          const M = Qe(o.elem);
          if (!ae(M))
            throw new Error("TableCellResizer: Table cell node not found.");
          const F = br(M), z = Io(M) + M.getRowSpan() - 1, $ = F.getChildren();
          if (z >= $.length || z < 0)
            throw new Error("Expected table cell to be inside of table row.");
          const P = $[z];
          if (!nt(P))
            throw new Error("Expected table row");
          let X = P.getHeight();
          if (X === void 0) {
            const re = P.getChildren();
            X = Math.min(
              ...re.map(
                (de) => S(de, r) ?? 1 / 0
              )
            );
          }
          const Y = Math.max(X + D, z5);
          P.setHeight(Y);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [o, r]
  ), S = (D, M) => {
    const F = M.getElementByKey(D.getKey());
    return F == null ? void 0 : F.clientHeight;
  }, w = (D, M) => {
    for (let F = 0; F < M.length; F++)
      for (let z = 0; z < M[F].length; z++)
        if (M[F][z].cell === D)
          return z;
  }, C = ie(
    (D) => {
      if (!o)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(
        () => {
          const M = Qe(o.elem);
          if (!ae(M))
            throw new Error("TableCellResizer: Table cell node not found.");
          const F = br(M), [z] = Lo(
            F,
            null,
            null
          ), $ = w(M, z);
          if ($ === void 0)
            throw new Error("TableCellResizer: Table column not found.");
          const P = F.getColWidths();
          if (!P)
            return;
          const X = P[$];
          if (X === void 0)
            return;
          const Y = [...P];
          Y[$] = Math.max(X + D, Yu), F.setColWidths(Y);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [o, r]
  ), N = ie(
    (D) => {
      const M = (F) => {
        if (F.preventDefault(), F.stopPropagation(), !o)
          throw new Error("TableCellResizer: Expected active cell.");
        if (a.current) {
          const { x: z, y: $ } = a.current, P = Ms(F.target);
          if (b(D)) {
            const X = (F.clientY - $) / P;
            x(X);
          } else {
            const X = (F.clientX - z) / P;
            C(X);
          }
          g(), document.removeEventListener("mouseup", M);
        }
      };
      return M;
    },
    [o, g, C, x]
  ), k = ie(
    (D) => (M) => {
      if (M.preventDefault(), M.stopPropagation(), !o)
        throw new Error("TableCellResizer: Expected active cell.");
      a.current = {
        x: M.clientX,
        y: M.clientY
      }, s(a.current), m(D), document.addEventListener("mouseup", N(D));
    },
    [o, N]
  ), I = ie(() => {
    if (o) {
      const { height: D, width: M, top: F, left: z } = o.elem.getBoundingClientRect(), $ = Ms(o.elem), P = 10, X = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: `${P}px`,
          left: `${(window.scrollX || window.pageXOffset) + z}px`,
          top: `${(window.scrollY || window.pageYOffset) + F + D - P / 2}px`,
          width: `${M}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${D}px`,
          left: `${(window.scrollX || window.pageXOffset) + z + M - P / 2}px`,
          top: `${(window.scrollY || window.pageYOffset) + F}px`,
          width: `${P}px`
        }
      }, Y = n.current;
      return d && i && Y && (b(d) ? (X[d].left = `${(window.scrollX || window.pageXOffset) + Y.left}px`, X[d].top = `${(window.scrollY || window.pageYOffset) + i.y / $}px`, X[d].height = "3px", X[d].width = `${Y.width}px`) : (X[d].top = `${(window.scrollY || window.pageYOffset) + Y.top}px`, X[d].left = `${(window.scrollX || window.pageXOffset) + i.x / $}px`, X[d].width = "3px", X[d].height = `${Y.height}px`), X[d].backgroundColor = "#adf"), X;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [o, d, i])();
  return /* @__PURE__ */ p.jsx("div", { ref: t, children: o != null && !c && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: I.right || void 0,
        onMouseDown: k("right")
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: I.bottom || void 0,
        onMouseDown: k("bottom")
      }
    )
  ] }) });
}
function B5() {
  const [r] = se(), e = La();
  return it(
    () => e ? Zt(/* @__PURE__ */ p.jsx(P5, { editor: r }), document.body) : null,
    [r, e]
  );
}
function ys(r) {
  const e = r.getShape();
  return {
    columns: e.toX - e.fromX + 1,
    rows: e.toY - e.fromY + 1
  };
}
function j5() {
  const r = j();
  if (U(r) && !r.isCollapsed() || Oe(r) && !r.anchor.is(r.focus) || !U(r) && !Oe(r))
    return !1;
  const [e] = vt(r.anchor);
  return e.__colSpan > 1 || e.__rowSpan > 1;
}
function Vu(r) {
  if (r.getChildrenSize() !== 1)
    return !1;
  const e = r.getFirstChildOrThrow();
  return !(!Hr(e) || !e.isEmpty());
}
function $5(r) {
  const e = r.getLastDescendant();
  Se(e) ? e.select() : ue(e) ? e.selectEnd() : e !== null && e.selectNext();
}
function Xu(r) {
  return r.getEditorState().read(() => {
    const e = j();
    if (U(e) || Oe(e)) {
      const [t] = vt(e.anchor);
      if (ae(t))
        return t.getBackgroundColor();
    }
    return null;
  });
}
function H5({
  onClose: r,
  tableCellNode: e,
  setIsMenuOpen: t,
  contextRef: n,
  cellMerge: a,
  showColorPickerModal: i
}) {
  const [s] = se(), o = Te(null), [l, c] = q(e), [u, d] = q({
    columns: 1,
    rows: 1
  }), [m, g] = q(!1), [v, b] = q(!1), [x, S] = q(
    () => Xu(s) || ""
  );
  B(() => s.registerMutationListener(
    sr,
    (Y) => {
      Y.get(l.getKey()) === "updated" && (s.getEditorState().read(() => {
        c(l.getLatest());
      }), S(Xu(s) || ""));
    },
    { skipInitialization: !0 }
  ), [s, l]), B(() => {
    s.getEditorState().read(() => {
      const Y = j();
      if (Oe(Y)) {
        const re = ys(Y);
        d(ys(Y)), g(
          re.columns > 1 || re.rows > 1
        );
      }
      b(j5());
    });
  }, [s]), B(() => {
    const Y = n.current, re = o.current, de = s.getRootElement();
    if (Y != null && re != null && de != null) {
      const J = de.getBoundingClientRect(), he = Y.getBoundingClientRect();
      re.style.opacity = "1";
      const le = re.getBoundingClientRect(), Ee = 5;
      let oe = he.right + Ee;
      if (oe + le.width > window.innerWidth || oe + le.width > J.right) {
        const Be = he.left - le.width - Ee;
        oe = (Be < 0 ? Ee : Be) + window.pageXOffset;
      }
      re.style.left = `${oe + window.pageXOffset}px`;
      let Pe = he.top;
      if (Pe + le.height > window.innerHeight) {
        const Be = he.bottom - le.height;
        Pe = (Be < 0 ? Ee : Be) + window.pageYOffset;
      }
      re.style.top = `${Pe + +window.pageYOffset}px`;
    }
  }, [n, o, s]), B(() => {
    function Y(re) {
      o.current != null && n.current != null && !o.current.contains(re.target) && !n.current.contains(re.target) && t(!1);
    }
    return window.addEventListener("click", Y), () => window.removeEventListener("click", Y);
  }, [t, n]);
  const w = ie(() => {
    s.update(() => {
      if (l.isAttached()) {
        const re = br(l), de = s.getElementByKey(
          re.getKey()
        );
        if (!de)
          throw new Error("Expected to find tableElement in DOM");
        const J = Bs(de);
        J !== null && J.clearHighlight(), re.markDirty(), c(l.getLatest());
      }
      wt().selectStart();
    });
  }, [s, l]), C = () => {
    s.update(() => {
      const Y = j();
      if (Oe(Y)) {
        const { columns: re, rows: de } = ys(Y), J = Y.getNodes();
        let he = null;
        for (let le = 0; le < J.length; le++) {
          const Ee = J[le];
          if (ae(Ee))
            if (he === null) {
              Ee.setColSpan(re).setRowSpan(de), he = Ee;
              const oe = Vu(Ee);
              let Pe;
              oe && Hr(Pe = Ee.getFirstChild()) && Pe.remove();
            } else ae(he) && (Vu(Ee) || he.append(...Ee.getChildren()), Ee.remove());
        }
        he !== null && (he.getChildrenSize() === 0 && he.append(xe()), $5(he)), r();
      }
    });
  }, N = () => {
    s.update(() => {
      cf();
    });
  }, k = ie(
    (Y) => {
      s.update(() => {
        nd(Y), r();
      });
    },
    [s, r]
  ), E = ie(
    (Y) => {
      s.update(() => {
        for (let re = 0; re < u.columns; re++)
          ad(Y);
        r();
      });
    },
    [s, r, u.columns]
  ), I = ie(() => {
    s.update(() => {
      lf(), r();
    });
  }, [s, r]), D = ie(() => {
    s.update(() => {
      br(l).remove(), w(), r();
    });
  }, [s, l, w, r]), M = ie(() => {
    s.update(() => {
      uf(), r();
    });
  }, [s, r]), F = ie(() => {
    s.update(() => {
      const Y = br(l), re = Io(l), de = Y.getChildren();
      if (re >= de.length || re < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const J = de[re];
      if (!nt(J))
        throw new Error("Expected table row");
      const he = l.getHeaderStyles() ^ He.ROW;
      J.getChildren().forEach((le) => {
        if (!ae(le))
          throw new Error("Expected table cell");
        le.setHeaderStyles(he, He.ROW);
      }), w(), r();
    });
  }, [s, l, w, r]), z = ie(() => {
    s.update(() => {
      const Y = br(l), re = rd(l), de = Y.getChildren(), J = Math.max(
        ...de.map((le) => le.getChildren().length)
      );
      if (re >= J || re < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const he = l.getHeaderStyles() ^ He.COLUMN;
      for (let le = 0; le < de.length; le++) {
        const Ee = de[le];
        if (!nt(Ee))
          throw new Error("Expected table row");
        const oe = Ee.getChildren();
        if (re >= oe.length)
          continue;
        const Pe = oe[re];
        if (!ae(Pe))
          throw new Error("Expected table cell");
        Pe.setHeaderStyles(he, He.COLUMN);
      }
      w(), r();
    });
  }, [s, l, w, r]), $ = ie(() => {
    s.update(() => {
      if (l.isAttached()) {
        const Y = br(l);
        Y && Y.setRowStriping(!Y.getRowStriping());
      }
      w(), r();
    });
  }, [s, l, w, r]), P = ie(
    (Y) => {
      s.update(() => {
        const re = j();
        if (U(re) || Oe(re)) {
          const [de] = vt(re.anchor);
          if (ae(de) && de.setBackgroundColor(Y), Oe(re)) {
            const J = re.getNodes();
            for (let he = 0; he < J.length; he++) {
              const le = J[he];
              ae(le) && le.setBackgroundColor(Y);
            }
          }
        }
      });
    },
    [s]
  );
  let X = null;
  return a && (m ? X = /* @__PURE__ */ p.jsx(
    "button",
    {
      type: "button",
      className: "item",
      onClick: () => C(),
      "data-test-id": "table-merge-cells",
      children: "Merge cells"
    }
  ) : v && (X = /* @__PURE__ */ p.jsx(
    "button",
    {
      type: "button",
      className: "item",
      onClick: () => N(),
      "data-test-id": "table-unmerge-cells",
      children: "Unmerge cells"
    }
  ))), Zt(
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "dropdown",
        ref: o,
        onClick: (Y) => {
          Y.stopPropagation();
        },
        children: [
          X,
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => i("Cell background color", () => /* @__PURE__ */ p.jsx(
                vh,
                {
                  color: x,
                  onChange: P
                }
              )),
              "data-test-id": "table-background-color",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Background color" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => $(),
              "data-test-id": "table-row-striping",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Toggle Row Striping" })
            }
          ),
          /* @__PURE__ */ p.jsx("hr", {}),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => k(!1),
              "data-test-id": "table-insert-row-above",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                u.rows === 1 ? "row" : `${u.rows} rows`,
                " ",
                "above"
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => k(!0),
              "data-test-id": "table-insert-row-below",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                u.rows === 1 ? "row" : `${u.rows} rows`,
                " ",
                "below"
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx("hr", {}),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => E(!1),
              "data-test-id": "table-insert-column-before",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                u.columns === 1 ? "column" : `${u.columns} columns`,
                " ",
                "left"
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => E(!0),
              "data-test-id": "table-insert-column-after",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                u.columns === 1 ? "column" : `${u.columns} columns`,
                " ",
                "right"
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx("hr", {}),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => M(),
              "data-test-id": "table-delete-columns",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Delete column" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => I(),
              "data-test-id": "table-delete-rows",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Delete row" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => D(),
              "data-test-id": "table-delete",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Delete table" })
            }
          ),
          /* @__PURE__ */ p.jsx("hr", {}),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => F(),
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                (l.__headerState & He.ROW) === He.ROW ? "Remove" : "Add",
                " ",
                "row header"
              ] })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => z(),
              "data-test-id": "table-column-header",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                (l.__headerState & He.COLUMN) === He.COLUMN ? "Remove" : "Add",
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
function q5({
  anchorElem: r,
  cellMerge: e
}) {
  const [t] = se(), n = Te(null), a = Te(null), [i, s] = q(!1), [o, l] = q(
    null
  ), [c, u] = Pi(), d = ie(() => {
    const g = n.current, v = j(), b = window.getSelection(), x = document.activeElement;
    if (v == null || g == null) {
      l(null);
      return;
    }
    const S = t.getRootElement();
    if (U(v) && S !== null && b !== null && S.contains(b.anchorNode)) {
      const w = of(
        v.anchor.getNode()
      );
      if (w == null) {
        l(null);
        return;
      }
      if (t.getElementByKey(
        w.getKey()
      ) == null) {
        l(null);
        return;
      }
      l(w);
    } else x || l(null);
  }, [t]);
  B(() => t.registerUpdateListener(() => {
    t.getEditorState().read(() => {
      d();
    });
  })), B(() => {
    const g = n.current;
    if (g != null && o != null) {
      const v = t.getElementByKey(o.getKey());
      if (v != null) {
        const b = v.getBoundingClientRect(), x = g.getBoundingClientRect(), S = r.getBoundingClientRect(), w = b.top - S.top + 4, C = b.right - x.width - 10 - S.left;
        g.style.opacity = "1", g.style.transform = `translate(${C}px, ${w}px)`;
      } else
        g.style.opacity = "0", g.style.transform = "translate(-10000px, -10000px)";
    }
  }, [n, o, t, r]);
  const m = Te(o);
  return B(() => {
    m.current !== o && s(!1), m.current = o;
  }, [m, o]), /* @__PURE__ */ p.jsx("div", { className: "table-cell-action-button-container", ref: n, children: o != null && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        className: "table-cell-action-button chevron-down",
        onClick: (g) => {
          g.stopPropagation(), s(!i);
        },
        ref: a,
        children: /* @__PURE__ */ p.jsx("i", { className: "chevron-down" })
      }
    ),
    c,
    i && /* @__PURE__ */ p.jsx(
      H5,
      {
        contextRef: a,
        setIsMenuOpen: s,
        onClose: () => s(!1),
        tableCellNode: o,
        cellMerge: e,
        showColorPickerModal: u
      }
    )
  ] }) });
}
function U5({
  anchorElem: r = document.body,
  cellMerge: e = !1
}) {
  const t = La();
  return Zt(
    t ? /* @__PURE__ */ p.jsx(
      q5,
      {
        anchorElem: r,
        cellMerge: e
      }
    ) : null,
    r
  );
}
const Ju = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function K5() {
  const [r] = se();
  return B(() => r.registerCommand(
    Ls,
    (e) => ((async () => {
      const t = await om(
        e,
        [Ju].flatMap((n) => n)
      );
      for (const { file: n, result: a } of t)
        Mc(n, Ju) && r.dispatchCommand(za, {
          altText: n.name,
          src: a
        });
    })(), !0),
    ye
  ), [r]), null;
}
class W5 extends k0 {
  constructor(t, n, a) {
    super(t);
    ne(this, "title");
    ne(this, "emoji");
    ne(this, "keywords");
    this.title = t, this.emoji = n, this.keywords = a.keywords || [];
  }
}
function G5({
  index: r,
  isSelected: e,
  onClick: t,
  onMouseEnter: n,
  option: a
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ p.jsx(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: a.setRefElement,
      role: "option",
      "aria-selected": e,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: t,
      children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
        a.emoji,
        " ",
        a.title
      ] })
    },
    a.key
  );
}
const Y5 = 10;
function V5() {
  const [r] = se(), [e, t] = q(null), [n, a] = q([]);
  B(() => {
    import("./emoji-list-CKk-PE96.js").then((c) => a(c.default));
  }, []);
  const i = it(
    () => n != null ? n.map(
      ({ emoji: c, aliases: u, tags: d }) => new W5(u[0], c, {
        keywords: [...u, ...d]
      })
    ) : [],
    [n]
  ), s = E0(":", {
    minLength: 0
  }), o = it(() => i.filter((c) => e != null ? new RegExp(e, "gi").exec(c.title) || c.keywords != null ? c.keywords.some(
    (u) => new RegExp(e, "gi").exec(u)
  ) : !1 : i).slice(0, Y5), [i, e]), l = ie(
    (c, u, d) => {
      r.update(() => {
        const m = j();
        !U(m) || c == null || (u && u.remove(), m.insertNodes([Ir(c.emoji)]), d());
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsx(
    T0,
    {
      onQueryChange: t,
      onSelectOption: l,
      triggerFn: s,
      options: o,
      menuRenderFn: (c, { selectedIndex: u, selectOptionAndCleanUp: d, setHighlightedIndex: m }) => c.current == null || o.length === 0 ? null : c.current && o.length ? da.createPortal(
        /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover emoji-menu", children: /* @__PURE__ */ p.jsx("ul", { children: o.map((g, v) => /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
          G5,
          {
            index: v,
            isSelected: u === v,
            onClick: () => {
              m(v), d(g);
            },
            onMouseEnter: () => {
              m(v);
            },
            option: g
          }
        ) }, g.key)) }) }),
        c.current
      ) : null
    }
  );
}
function xs(r) {
  return r instanceof HTMLElement;
}
class jh {
  constructor(e, t) {
    ne(this, "_x");
    ne(this, "_y");
    this._x = e, this._y = t;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  equals({ x: e, y: t }) {
    return this.x === e && this.y === t;
  }
  calcDeltaXTo({ x: e }) {
    return this.x - e;
  }
  calcDeltaYTo({ y: e }) {
    return this.y - e;
  }
  calcHorizontalDistanceTo(e) {
    return Math.abs(this.calcDeltaXTo(e));
  }
  calcVerticalDistance(e) {
    return Math.abs(this.calcDeltaYTo(e));
  }
  calcDistanceTo(e) {
    return Math.sqrt(
      Math.pow(this.calcDeltaXTo(e), 2) + Math.pow(this.calcDeltaYTo(e), 2)
    );
  }
}
function X5(r) {
  return r instanceof jh;
}
class Zr {
  constructor(e, t, n, a) {
    ne(this, "_left");
    ne(this, "_top");
    ne(this, "_right");
    ne(this, "_bottom");
    const [i, s] = t <= a ? [t, a] : [a, t], [o, l] = e <= n ? [e, n] : [n, e];
    this._top = i, this._right = l, this._left = o, this._bottom = s;
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
  equals({ top: e, left: t, bottom: n, right: a }) {
    return e === this._top && n === this._bottom && t === this._left && a === this._right;
  }
  contains(e) {
    if (X5(e)) {
      const { x: t, y: n } = e, a = n < this._top, i = n > this._bottom, s = t < this._left, o = t > this._right;
      return {
        reason: {
          isOnBottomSide: i,
          isOnLeftSide: s,
          isOnRightSide: o,
          isOnTopSide: a
        },
        result: !a && !i && !s && !o
      };
    } else {
      const { top: t, left: n, bottom: a, right: i } = e;
      return t >= this._top && t <= this._bottom && a >= this._top && a <= this._bottom && n >= this._left && n <= this._right && i >= this._left && i <= this._right;
    }
  }
  intersectsWith(e) {
    const { left: t, top: n, width: a, height: i } = e, { left: s, top: o, width: l, height: c } = this, u = t + a >= s + l ? t + a : s + l, d = n + i >= o + c ? n + i : o + c, m = t <= s ? t : s, g = n <= o ? n : o;
    return u - m <= a + l && d - g <= i + c;
  }
  generateNewRect({
    left: e = this.left,
    top: t = this.top,
    right: n = this.right,
    bottom: a = this.bottom
  }) {
    return new Zr(e, t, n, a);
  }
  static fromLTRB(e, t, n, a) {
    return new Zr(e, t, n, a);
  }
  static fromLWTH(e, t, n, a) {
    return new Zr(e, n, e + t, n + a);
  }
  static fromPoints(e, t) {
    const { y: n, x: a } = e, { y: i, x: s } = t;
    return Zr.fromLTRB(a, n, s, i);
  }
  static fromDOM(e) {
    const { top: t, width: n, left: a, height: i } = e.getBoundingClientRect();
    return Zr.fromLWTH(a, n, t, i);
  }
}
const oo = 4, J5 = 2, Z5 = "draggable-block-menu", Zu = "application/x-lexical-drag-block", Qu = 28, Q5 = 1, e3 = -1, ec = 0;
let si = 1 / 0;
function t3(r) {
  return r === 0 ? 1 / 0 : si >= 0 && si < r ? si : Math.floor(r / 2);
}
function r3(r) {
  return r.getEditorState().read(() => wt().getChildrenKeys());
}
function $h(r) {
  const e = (l, c) => l ? parseFloat(window.getComputedStyle(l)[c]) : 0, { marginTop: t, marginBottom: n } = window.getComputedStyle(r), a = e(
    r.previousElementSibling,
    "marginBottom"
  ), i = e(
    r.nextElementSibling,
    "marginTop"
  ), s = Math.max(
    parseFloat(t),
    a
  );
  return { marginBottom: Math.max(
    parseFloat(n),
    i
  ), marginTop: s };
}
function ws(r, e, t, n = !1) {
  const a = r.getBoundingClientRect(), i = r3(e);
  let s = null;
  return e.getEditorState().read(() => {
    if (n) {
      const [c, u] = [
        e.getElementByKey(i[0]),
        e.getElementByKey(i[i.length - 1])
      ], [d, m] = [
        c == null ? void 0 : c.getBoundingClientRect(),
        u == null ? void 0 : u.getBoundingClientRect()
      ];
      if (d && m && (t.y < d.top ? s = c : t.y > m.bottom && (s = u), s))
        return;
    }
    let o = t3(i.length), l = ec;
    for (; o >= 0 && o < i.length; ) {
      const c = i[o], u = e.getElementByKey(c);
      if (u === null)
        break;
      const d = new jh(t.x, t.y), m = Zr.fromDOM(u), { marginTop: g, marginBottom: v } = $h(u), b = m.generateNewRect({
        bottom: m.bottom + v,
        left: a.left,
        right: a.right,
        top: m.top - g
      }), {
        result: x,
        reason: { isOnTopSide: S, isOnBottomSide: w }
      } = b.contains(d);
      if (x) {
        s = u, si = o;
        break;
      }
      l === ec && (S ? l = e3 : w ? l = Q5 : l = 1 / 0), o += l;
    }
  }), s;
}
function n3(r) {
  return !!r.closest(`.${Z5}`);
}
function a3(r, e, t) {
  if (!r) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const n = r.getBoundingClientRect(), a = window.getComputedStyle(r), i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), o = n.top + (parseInt(a.lineHeight, 10) - i.height) / 2 - s.top, l = oo;
  e.style.opacity = "1", e.style.transform = `translate(${l}px, ${o}px)`;
}
function i3(r, e) {
  const { transform: t } = e.style;
  e.style.transform = "translateZ(0)", r.setDragImage(e, 0, 0), setTimeout(() => {
    e.style.transform = t;
  });
}
function s3(r, e, t, n) {
  const { top: a, height: i } = e.getBoundingClientRect(), { top: s, width: o } = n.getBoundingClientRect(), { marginTop: l, marginBottom: c } = $h(e);
  let u = a;
  t >= a ? u += i + c / 2 : u -= l / 2;
  const d = u - s - J5, m = Qu - oo;
  r.style.transform = `translate(${m}px, ${d}px)`, r.style.width = `${o - (Qu - oo) * 2}px`, r.style.opacity = ".4";
}
function o3(r) {
  r && (r.style.opacity = "0", r.style.transform = "translate(-10000px, -10000px)");
}
function l3(r, e, t) {
  const n = e.parentElement, a = Te(null), i = Te(null), s = Te(!1), [o, l] = q(null);
  B(() => {
    function d(g) {
      const v = g.target;
      if (!xs(v)) {
        l(null);
        return;
      }
      if (n3(v))
        return;
      const b = ws(e, r, g);
      l(b);
    }
    function m() {
      l(null);
    }
    return n == null || n.addEventListener("mousemove", d), n == null || n.addEventListener("mouseleave", m), () => {
      n == null || n.removeEventListener("mousemove", d), n == null || n.removeEventListener("mouseleave", m);
    };
  }, [n, e, r]), B(() => {
    a.current && a3(o, a.current, e);
  }, [e, o]), B(() => {
    function d(g) {
      if (!s.current)
        return !1;
      const [v] = kn(g);
      if (v)
        return !1;
      const { pageY: b, target: x } = g;
      if (!xs(x))
        return !1;
      const S = ws(e, r, g, !0), w = i.current;
      return S === null || w === null ? !1 : (s3(w, S, b, e), g.preventDefault(), !0);
    }
    function m(g) {
      if (!s.current)
        return !1;
      const [v] = kn(g);
      if (v)
        return !1;
      const { target: b, dataTransfer: x, pageY: S } = g, w = (x == null ? void 0 : x.getData(Zu)) || "", C = bt(w);
      if (!C || !xs(b))
        return !1;
      const N = ws(e, r, g, !0);
      if (!N)
        return !1;
      const k = Qe(N);
      if (!k)
        return !1;
      if (k === C)
        return !0;
      const E = N.getBoundingClientRect().top;
      return S >= E ? k.insertAfter(C) : k.insertBefore(C), l(null), !0;
    }
    return Re(
      r.registerCommand(
        Si,
        (g) => d(g),
        ye
      ),
      r.registerCommand(
        _i,
        (g) => m(g),
        Lt
      )
    );
  }, [e, r]);
  function c(d) {
    const m = d.dataTransfer;
    if (!m || !o)
      return;
    i3(m, o);
    let g = "";
    r.update(() => {
      const v = Qe(o);
      v && (g = v.getKey());
    }), s.current = !0, m.setData(Zu, g);
  }
  function u() {
    s.current = !1, o3(i.current);
  }
  return Zt(
    /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "icon draggable-block-menu",
          ref: a,
          draggable: !0,
          onDragStart: c,
          onDragEnd: u,
          children: /* @__PURE__ */ p.jsx("div", { className: t ? "icon" : "" })
        }
      ),
      /* @__PURE__ */ p.jsx("div", { className: "draggable-block-target-line", ref: i })
    ] }),
    e
  );
}
function u3({
  anchorElem: r = document.body
}) {
  const [e] = se();
  return l3(e, r, e._editable);
}
const Hh = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, c3 = "\\b[A-Z][^\\s" + Hh + "]", d3 = {
  NAME: c3,
  PUNCTUATION: Hh
}, qh = d3.PUNCTUATION, N0 = ["=\\$a", "=\\$i", "=\\$f"].join("|"), Ss = "=$a", h3 = "=$i", m3 = "=$f", Uh = "^(" + N0 + ")\\s|[^" + qh + "\\s]", f3 = "(?:\\.[ |$]| |[" + qh + "]|)", p3 = 75, g3 = new RegExp(
  "((" + N0 + ")((?:" + Uh + f3 + "){0," + p3 + "}))"
), v3 = 50, b3 = new RegExp(
  "((" + N0 + ")((?:" + Uh + "){0," + v3 + "}))"
), y3 = [
  {
    inputField: {
      label: "入力フィールドを追加",
      value: null
    }
  }
], _s = /* @__PURE__ */ new Map(), x3 = {
  search(r, e, t) {
    setTimeout(() => {
      const n = e.filter(
        (a) => Object.keys(a).filter((i) => a[i].label.toLowerCase().includes(r.toLowerCase())).length > 0
      );
      t(n);
    }, 300);
  }
};
function w3(r, e, t = "") {
  const [n, a] = q([]);
  return B(() => {
    const i = _s.get(t + r);
    if (r == null) {
      a([]);
      return;
    }
    if (i !== null) {
      if (i !== void 0) {
        a(i);
        return;
      }
      _s.set(t + r, null), x3.search(r, e, (s) => {
        _s.set(t + r, s), a(s);
      });
    }
  }, [r, e, t]), n;
}
function S3(r, e) {
  let t = g3.exec(r);
  if (t === null && (t = b3.exec(r)), t !== null) {
    const n = t[3];
    if (n.length >= e)
      return {
        leadOffset: t.index,
        matchingString: n,
        // Use the extracted part for searching
        replaceableString: t[0]
        // The entire matched string including trigger
      };
  }
  return null;
}
function _3(r) {
  return S3(r, 0);
}
class C3 extends k0 {
  constructor(t, n, a, i, s = !1, o = !1) {
    super(t + a);
    ne(this, "dataMention");
    ne(this, "fieldName");
    ne(this, "label");
    ne(this, "data");
    ne(this, "isMan");
    ne(this, "isNumber");
    this.dataMention = t, this.fieldName = n, this.label = a, this.data = i, this.isMan = s, this.isNumber = o;
  }
}
function k3({
  index: r,
  isSelected: e,
  onClick: t,
  onMouseEnter: n,
  option: a
}) {
  let i = "item";
  return e && (i += " selected"), /* @__PURE__ */ p.jsx(
    "li",
    {
      tabIndex: -1,
      className: i,
      ref: a.setRefElement,
      role: "option",
      "aria-selected": e,
      id: "typeahead-item-" + r,
      onMouseEnter: n,
      onClick: t,
      children: /* @__PURE__ */ p.jsx("span", { className: "text", children: a.label })
    },
    a.key
  );
}
function E3({
  step: r,
  autoData: e,
  afterAutoData: t
}) {
  const [n] = se(), [a, i] = q(null), [s, o] = q(), [l, c] = q(), [u, d] = q(!1), [m, g] = q(null), v = mt.useRef(!0), x = w3(a, s === Ss ? e : s === m3 ? t : y3, s), S = E0("/", {
    minLength: 0
  }), w = it(
    () => x.map(
      (k) => {
        const E = Object.keys(k)[0];
        return new C3(s === Ss ? "auto" : "after-auto", E, k[E].label, k[E].value, k[E].isMan, k[E].isNumber);
      }
    ),
    [x]
  ), C = ie(
    (k, E, I) => {
      n.update(() => {
        let D = k.data;
        k.isMan && typeof D == "number" && D && (D = 1e4 * D), k.isNumber && D && (D = D.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        const M = g0(
          {
            dataMention: s === Ss ? "auto" : s == h3 ? "input" : "after-auto",
            fieldName: k.fieldName,
            label: k.label,
            data: D,
            format: E == null ? void 0 : E.getFormat(),
            style: E == null ? void 0 : E.getStyle()
          }
        );
        k.fieldName === "inputField" && (d(!0), g(M), I()), E && E.replace(M), I();
      });
    },
    [n, s]
  ), N = ie(
    (k) => {
      if (S(k, n) !== null)
        return null;
      const I = _3(k);
      return I !== null && o(I.replaceableString.replace(I.matchingString, "")), I;
    },
    [S, n]
  );
  return B(() => {
    if (v.current)
      return (r === 2 || r === 3) && n.update(() => {
        $1(hn).forEach((E) => {
          if (E.__dataMention === "auto" && E.__step === 2 || E.__dataMention === "after-auto" && E.__step === 3) {
            let I;
            if (E.__dataMention === "auto" ? I = e.find((D) => D[E.__fieldName] && D[E.__fieldName].label === E.__label) : I = t.find((D) => D[E.__fieldName] && D[E.__fieldName].label === E.__label), I) {
              const D = I[E.__fieldName];
              let M = D.value;
              M && D.isMan && (M = parseInt(M.toString()) * 1e4), M && D.isNumber && (M = M.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), E.setData(M);
            }
          }
        });
      }), v.current = !1, () => {
        v.current = !1;
      };
  }, []), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      T0,
      {
        onQueryChange: i,
        onSelectOption: C,
        triggerFn: N,
        options: w,
        menuRenderFn: (k, { selectedIndex: E, selectOptionAndCleanUp: I, setHighlightedIndex: D }) => k.current && x.length ? da.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ p.jsx("ul", { children: w.map((M, F) => /* @__PURE__ */ p.jsx(
            k3,
            {
              index: F,
              isSelected: E === F,
              onClick: () => {
                D(F), I(M);
              },
              onMouseEnter: () => {
                D(F);
              },
              option: M
            },
            M.key
          )) }) }),
          k.current
        ) : null
      }
    ),
    u && m && da.createPortal(
      /* @__PURE__ */ p.jsxs("div", { className: "data-mention-input-modal", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            placeholder: "Enter label of input field",
            value: l || "",
            type: "text",
            onChange: (k) => {
              c(k.target.value);
            }
          }
        ),
        /* @__PURE__ */ p.jsx("button", { onClick: () => {
          n.update(() => {
            m == null || m.setLabel(l || ""), d(!1), g(null), c("");
          });
        }, children: "Save" })
      ] }),
      document.body
    )
  ] });
}
const T3 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : B;
function N3({ ignoreHistoryMergeTagChange: r = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [n] = se();
  return T3(() => {
    if (t) return n.registerUpdateListener(({ editorState: a, dirtyElements: i, dirtyLeaves: s, prevEditorState: o, tags: l }) => {
      e && i.size === 0 && s.size === 0 || r && l.has("history-merge") || o.isEmpty() || t(a, n, l);
    });
  }, [n, r, e, t]), null;
}
var A3 = typeof global == "object" && global && global.Object === Object && global, M3 = typeof self == "object" && self && self.Object === Object && self, Kh = A3 || M3 || Function("return this")(), xi = Kh.Symbol, Wh = Object.prototype, O3 = Wh.hasOwnProperty, D3 = Wh.toString, Qn = xi ? xi.toStringTag : void 0;
function R3(r) {
  var e = O3.call(r, Qn), t = r[Qn];
  try {
    r[Qn] = void 0;
    var n = !0;
  } catch {
  }
  var a = D3.call(r);
  return n && (e ? r[Qn] = t : delete r[Qn]), a;
}
var I3 = Object.prototype, F3 = I3.toString;
function L3(r) {
  return F3.call(r);
}
var z3 = "[object Null]", P3 = "[object Undefined]", tc = xi ? xi.toStringTag : void 0;
function B3(r) {
  return r == null ? r === void 0 ? P3 : z3 : tc && tc in Object(r) ? R3(r) : L3(r);
}
function j3(r) {
  return r != null && typeof r == "object";
}
var $3 = "[object Symbol]";
function H3(r) {
  return typeof r == "symbol" || j3(r) && B3(r) == $3;
}
var q3 = /\s/;
function U3(r) {
  for (var e = r.length; e-- && q3.test(r.charAt(e)); )
    ;
  return e;
}
var K3 = /^\s+/;
function W3(r) {
  return r && r.slice(0, U3(r) + 1).replace(K3, "");
}
function lo(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var rc = NaN, G3 = /^[-+]0x[0-9a-f]+$/i, Y3 = /^0b[01]+$/i, V3 = /^0o[0-7]+$/i, X3 = parseInt;
function nc(r) {
  if (typeof r == "number")
    return r;
  if (H3(r))
    return rc;
  if (lo(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = lo(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = W3(r);
  var t = Y3.test(r);
  return t || V3.test(r) ? X3(r.slice(2), t ? 2 : 8) : G3.test(r) ? rc : +r;
}
var Cs = function() {
  return Kh.Date.now();
}, J3 = "Expected a function", Z3 = Math.max, Q3 = Math.min;
function e6(r, e, t) {
  var n, a, i, s, o, l, c = 0, u = !1, d = !1, m = !0;
  if (typeof r != "function")
    throw new TypeError(J3);
  e = nc(e) || 0, lo(t) && (u = !!t.leading, d = "maxWait" in t, i = d ? Z3(nc(t.maxWait) || 0, e) : i, m = "trailing" in t ? !!t.trailing : m);
  function g(E) {
    var I = n, D = a;
    return n = a = void 0, c = E, s = r.apply(D, I), s;
  }
  function v(E) {
    return c = E, o = setTimeout(S, e), u ? g(E) : s;
  }
  function b(E) {
    var I = E - l, D = E - c, M = e - I;
    return d ? Q3(M, i - D) : M;
  }
  function x(E) {
    var I = E - l, D = E - c;
    return l === void 0 || I >= e || I < 0 || d && D >= i;
  }
  function S() {
    var E = Cs();
    if (x(E))
      return w(E);
    o = setTimeout(S, b(E));
  }
  function w(E) {
    return o = void 0, m && n ? g(E) : (n = a = void 0, s);
  }
  function C() {
    o !== void 0 && clearTimeout(o), c = 0, n = l = a = o = void 0;
  }
  function N() {
    return o === void 0 ? s : w(Cs());
  }
  function k() {
    var E = Cs(), I = x(E);
    if (n = arguments, a = this, l = E, I) {
      if (o === void 0)
        return v(l);
      if (d)
        return clearTimeout(o), o = setTimeout(S, e), g(l);
    }
    return o === void 0 && (o = setTimeout(S, e)), s;
  }
  return k.cancel = C, k.flush = N, k;
}
function t6(r, e, t) {
  const n = Te(null);
  return n.current = r, it(
    () => e6(
      (...a) => {
        n.current && n.current(...a);
      },
      e,
      { maxWait: t }
    ),
    [e, t]
  );
}
const ac = 20;
function r6({
  anchorElem: r
}) {
  const [e] = se(), t = La(), [n, a] = q(!1), [i, s] = q(!1), [o, l] = q(!1), [c, u] = q({}), d = Te(/* @__PURE__ */ new Set()), m = Te(null), g = t6(
    (x) => {
      const { isOutside: S, tableDOMNode: w } = n6(x);
      if (S) {
        a(!1), s(!1);
        return;
      }
      if (!w)
        return;
      m.current = w;
      let C = null, N = null, k = null;
      if (e.update(() => {
        var I;
        const E = Qe(w);
        if (ae(E)) {
          const D = me(
            E,
            (M) => We(M)
          );
          if (!We(D))
            return;
          if (k = e.getElementByKey(D == null ? void 0 : D.getKey()), k) {
            const M = D.getChildrenSize(), F = (I = D.getChildAtIndex(0)) == null ? void 0 : I.getChildrenSize(), z = Io(E), $ = rd(E);
            z === M - 1 ? C = E : $ === F - 1 && (N = E);
          }
        }
      }), k) {
        const {
          width: E,
          y: I,
          right: D,
          left: M,
          bottom: F,
          height: z
        } = k.getBoundingClientRect(), { y: $, left: P } = r.getBoundingClientRect();
        C ? (s(!1), a(!0), u({
          height: ac,
          left: M - P,
          top: F - $ + 5,
          width: E
        })) : N && (s(!0), a(!1), u({
          height: z,
          left: D - P + 5,
          top: I - $,
          width: ac
        }));
      }
    },
    50,
    250
  ), v = it(() => new ResizeObserver(() => {
    a(!1), s(!1);
  }), []);
  B(() => {
    if (o)
      return document.addEventListener("mousemove", g), () => {
        a(!1), s(!1), g.cancel(), document.removeEventListener("mousemove", g);
      };
  }, [o, g]), B(() => Re(
    e.registerMutationListener(
      or,
      (x) => {
        e.getEditorState().read(() => {
          for (const [S, w] of x) {
            const C = e.getElementByKey(S);
            switch (w) {
              case "created":
                d.current.add(S), l(d.current.size > 0), C && v.observe(C);
                break;
              case "destroyed":
                d.current.delete(S), l(d.current.size > 0), v.disconnect(), d.current.forEach((N) => {
                  const k = e.getElementByKey(N);
                  k && v.observe(k);
                });
                break;
            }
          }
        });
      },
      { skipInitialization: !1 }
    )
  ), [e, v]);
  const b = (x) => {
    e.update(() => {
      if (m.current) {
        const S = Qe(
          m.current
        );
        S == null || S.selectEnd(), x ? (nd(), a(!1)) : (ad(), s(!1));
      }
    });
  };
  return t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    n && /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "et_table-add-rows",
        style: { ...c },
        onClick: () => b(!0)
      }
    ),
    i && /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "et_table-add-columns",
        style: { ...c },
        onClick: () => b(!1)
      }
    )
  ] }) : null;
}
function n6(r) {
  const e = r.target;
  if (e && e instanceof HTMLElement) {
    const t = e.closest(
      "td.et_table-cell, th.et_table-cell"
    );
    return { isOutside: !(t || e.closest(
      "button.et_table-add-rows"
    ) || e.closest(
      "button.et_table-add-columns"
    ) || e.closest("div.TableCellResizer__resizer")), tableDOMNode: t };
  } else
    return { isOutside: !0, tableDOMNode: null };
}
function a6({
  anchorElem: r = document.body
}) {
  return La() ? Zt(
    /* @__PURE__ */ p.jsx(r6, { anchorElem: r }),
    r
  ) : null;
}
function A0(r) {
  return [r.getKey(), r.getTextContent(), r.getTag()];
}
function i6(r, e, t) {
  if (e === null) return t;
  const n = A0(e);
  let a = [];
  if (r === null) {
    if (t.length > 0 && t[0][0] === e.__key) return t;
    a = [n, ...t];
  } else for (let i = 0; i < t.length; i++) {
    const s = t[i][0];
    if (a.push(t[i]), s === r.getKey() && s !== e.getKey()) {
      if (i + 1 < t.length && t[i + 1][0] === e.__key) return t;
      a.push(n);
    }
  }
  return a;
}
function s6(r, e) {
  const t = [];
  for (const n of e) n[0] !== r && t.push(n);
  return t;
}
function o6(r, e) {
  const t = [];
  for (const n of e) n[0] === r.getKey() ? t.push(A0(r)) : t.push(n);
  return t;
}
function ic(r, e, t) {
  const n = [], a = A0(e);
  r || n.push(a);
  for (const i of t) i[0] !== e.getKey() && (n.push(i), r && i[0] === r.getKey() && n.push(a));
  return n;
}
function ks(r) {
  let e = tl(r);
  for (; e !== null && !Tn(e); ) e = tl(e);
  return e;
}
function l6({ children: r }) {
  const [e, t] = q([]), [n] = se();
  return B(() => {
    let a = [];
    n.getEditorState().read(() => {
      const l = (c) => {
        for (const u of c.getChildren()) Tn(u) ? a.push([u.getKey(), u.getTextContent(), u.getTag()]) : ue(u) && l(u);
      };
      l(wt()), t(a);
    });
    const i = n.registerUpdateListener(({ editorState: l, dirtyElements: c }) => {
      l.read(() => {
        const u = (d) => {
          for (const m of d.getChildren()) if (Tn(m)) {
            const g = ks(m);
            a = ic(g, m, a), t(a);
          } else ue(m) && u(m);
        };
        wt().getChildren().forEach((d) => {
          ue(d) && c.get(d.__key) && u(d);
        });
      });
    }), s = n.registerMutationListener(zn, (l) => {
      n.getEditorState().read(() => {
        for (const [c, u] of l) if (u === "created") {
          const d = bt(c);
          if (d !== null) {
            const m = ks(d);
            a = i6(m, d, a);
          }
        } else if (u === "destroyed") a = s6(c, a);
        else if (u === "updated") {
          const d = bt(c);
          if (d !== null) {
            const m = ks(d);
            a = ic(m, d, a);
          }
        }
        t(a);
      });
    }, { skipInitialization: !0 }), o = n.registerMutationListener($r, (l) => {
      n.getEditorState().read(() => {
        for (const [c, u] of l) if (u === "updated") {
          const d = bt(c);
          if (d !== null) {
            const m = d.getParentOrThrow();
            Tn(m) && (a = o6(m, a), t(a));
          }
        }
      });
    }, { skipInitialization: !0 });
    return () => {
      s(), o(), i();
    };
  }, [n]), r(e, n);
}
const wi = 624, Gh = 9;
function u6(r) {
  if (r === "h2")
    return "heading2";
  if (r === "h3")
    return "heading3";
}
function c6(r) {
  const e = r == null ? void 0 : r.getClientRects()[0].y;
  return e >= wi && e <= wi + Gh;
}
function ri(r) {
  return (r == null ? void 0 : r.getClientRects()[0].y) < wi;
}
function Es(r) {
  return (r == null ? void 0 : r.getClientRects()[0].y) >= wi + Gh;
}
function d6({
  tableOfContents: r
}) {
  const [e, t] = q(""), n = Te(null), a = Te(null), i = Te(0), [s] = se(), o = Te(/* @__PURE__ */ new Map());
  function l(u, d) {
    s.getEditorState().read(() => {
      var g;
      const m = s.getElementByKey(u);
      m !== null && (a.current ? (g = a.current) == null || g.scrollTo({
        top: m.offsetTop,
        behavior: "smooth"
      }) : m.scrollIntoView(), t(u), i.current = d);
    });
  }
  function c(u) {
    if (u === null)
      return [];
    const d = [];
    let m = u.parentElement;
    for (; m; ) {
      const g = window.getComputedStyle(m).overflowY, v = window.getComputedStyle(m).overflowX, b = g === "scroll" || g === "auto", x = v === "scroll" || v === "auto";
      (b && m.scrollHeight > m.clientHeight || x && m.scrollWidth > m.clientWidth) && d.push(m), m = m.parentElement;
    }
    return d;
  }
  return B(() => {
    const u = s.getRootElement(), d = c(u);
    function m(x) {
      if (a.current = x.target, r.length !== 0 && i.current < r.length - 1) {
        let S = s.getElementByKey(
          r[i.current][0]
        );
        if (S !== null) {
          if (Es(S)) {
            for (; S !== null && Es(S) && i.current > 0; ) {
              const C = s.getElementByKey(
                r[i.current - 1][0]
              );
              C !== null && (ri(C) || Es(C)) && i.current--, S = C;
            }
            const w = r[i.current][0];
            t(w);
          } else if (ri(S)) {
            for (; S !== null && ri(S) && i.current < r.length - 1; ) {
              const C = s.getElementByKey(
                r[i.current + 1][0]
              );
              C !== null && (c6(C) || ri(C)) && i.current++, S = C;
            }
            const w = r[i.current][0];
            t(w);
          }
        }
      } else
        i.current = 0;
    }
    let g;
    function v(x, S) {
      return (w) => {
        clearTimeout(g), g = setTimeout(() => x(w), S);
      };
    }
    function b(x) {
      const S = x.target, w = o.current.get(S) || 0;
      S.scrollTop !== w && (o.current.set(S, S.scrollTop), v(m, 10)(x));
    }
    return d.length > 0 ? d.forEach((x) => {
      o.current.set(x, x.scrollTop), x.addEventListener("scroll", b);
    }) : document.addEventListener("scroll", b), () => {
      d.length > 0 ? d.forEach((x) => {
        x.removeEventListener("scroll", b);
      }) : document.removeEventListener("scroll", b);
    };
  }, [r, s]), B(() => {
    if (n.current) {
      const u = n.current.querySelector(
        ".selected-heading-wrapper"
      );
      u && u.scrollIntoView({
        behavior: "instant",
        block: "center"
      });
    }
  }, [e]), /* @__PURE__ */ p.jsx("div", { className: "table-of-contents", children: /* @__PURE__ */ p.jsx("ul", { className: "headings", ref: n, children: r.map(([u, d, m], g) => g === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "normal-heading-wrapper", children: [
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "first-heading",
        onClick: () => l(u, g),
        role: "button",
        tabIndex: 0,
        children: ("" + d).length > 20 ? d.substring(0, 20) + "..." : d
      }
    ),
    /* @__PURE__ */ p.jsx("br", {})
  ] }, u) : /* @__PURE__ */ p.jsx(
    "div",
    {
      className: `normal-heading-wrapper ${e === u ? "selected-heading-wrapper" : ""}`,
      children: /* @__PURE__ */ p.jsx(
        "div",
        {
          onClick: () => l(u, g),
          role: "button",
          className: u6(m),
          tabIndex: 0,
          children: /* @__PURE__ */ p.jsx(
            "li",
            {
              className: `normal-heading ${e === u ? "selected-heading" : ""}
                    `,
              children: ("" + d).length > 27 ? d.substring(0, 27) + "..." : d
            }
          )
        }
      )
    },
    u
  )) }) });
}
function h6() {
  return /* @__PURE__ */ p.jsx(l6, { children: (r) => /* @__PURE__ */ p.jsx(d6, { tableOfContents: r }) });
}
function m6(r) {
  const {
    step: e,
    autoMentionData: t,
    autoAfterMentionData: n,
    onChange: a = () => {
    },
    showTableOfContents: i = !1
  } = r, { historyState: s } = Yg(), o = /* @__PURE__ */ p.jsx(h4, { children: "Enter text..." }), [l, c] = q(!1), [u, d] = q(null), [m, g] = q(!1), v = (b) => {
    b !== null && d(b);
  };
  return B(() => {
    const b = () => {
      const x = Wn && window.matchMedia("(max-width: 1025px)").matches;
      x !== m && g(x);
    };
    return b(), window.addEventListener("resize", b), () => {
      window.removeEventListener("resize", b);
    };
  }, [m]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(P2, { setIsLinkEditMode: c }),
    /* @__PURE__ */ p.jsxs("div", { className: "editor-container", children: [
      /* @__PURE__ */ p.jsx(K5, {}),
      /* @__PURE__ */ p.jsx(l4, {}),
      /* @__PURE__ */ p.jsx(T5, {}),
      /* @__PURE__ */ p.jsx(V5, {}),
      /* @__PURE__ */ p.jsx(R2, {}),
      /* @__PURE__ */ p.jsx(E3, { step: e, autoData: t, afterAutoData: n }),
      /* @__PURE__ */ p.jsx(y5, {}),
      /* @__PURE__ */ p.jsx(p5, {}),
      /* @__PURE__ */ p.jsx(N3, { ignoreSelectionChange: !0, onChange: a }),
      /* @__PURE__ */ p.jsx(Wg, { externalHistoryState: s }),
      /* @__PURE__ */ p.jsx(c5, {}),
      /* @__PURE__ */ p.jsx(
        a4,
        {
          contentEditable: /* @__PURE__ */ p.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ p.jsx("div", { className: "editor", ref: v, children: /* @__PURE__ */ p.jsx(b4, {}) }) }),
          placeholder: o,
          ErrorBoundary: o4
        }
      ),
      /* @__PURE__ */ p.jsx(B2, {}),
      /* @__PURE__ */ p.jsx(j2, {}),
      /* @__PURE__ */ p.jsx(q2, { maxDepth: 7 }),
      /* @__PURE__ */ p.jsx(
        L5,
        {
          hasCellMerge: !0,
          hasCellBackgroundColor: !0
        }
      ),
      /* @__PURE__ */ p.jsx(B5, {}),
      /* @__PURE__ */ p.jsx(j4, {}),
      /* @__PURE__ */ p.jsx(Z4, {}),
      /* @__PURE__ */ p.jsx(h5, {}),
      /* @__PURE__ */ p.jsx(s2, {}),
      /* @__PURE__ */ p.jsx(C2, {}),
      /* @__PURE__ */ p.jsx(k2, {}),
      /* @__PURE__ */ p.jsx(_2, {}),
      /* @__PURE__ */ p.jsx(d4, {}),
      /* @__PURE__ */ p.jsx(f2, {}),
      /* @__PURE__ */ p.jsx(i2, {}),
      /* @__PURE__ */ p.jsx(G2, {}),
      /* @__PURE__ */ p.jsx(c4, {}),
      /* @__PURE__ */ p.jsx(p2, {}),
      /* @__PURE__ */ p.jsx(I4, {}),
      /* @__PURE__ */ p.jsx(l2, {}),
      u && !m && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          u3,
          {
            anchorElem: u
          }
        ),
        /* @__PURE__ */ p.jsx(
          Z2,
          {
            anchorElem: u,
            isLinkEditMode: l,
            setIsLinkEditMode: c
          }
        ),
        /* @__PURE__ */ p.jsx(a6, { anchorElem: u }),
        /* @__PURE__ */ p.jsx(
          I5,
          {
            anchorElem: u
          }
        ),
        /* @__PURE__ */ p.jsx(
          U5,
          {
            anchorElem: u,
            cellMerge: !0
          }
        )
      ] }),
      i && /* @__PURE__ */ p.jsx(h6, {})
    ] })
  ] });
}
function f6({ editorRef: r }) {
  const [e] = se();
  return mt.useEffect(() => {
    typeof r == "function" ? r(e) : typeof r == "object" && (r.current = e);
  }, [e]), null;
}
function T6(r) {
  const {
    editorState: e,
    historyState: t,
    onChange: n,
    showTableOfContents: a,
    autoAfterMentionData: i = [],
    autoMentionData: s = [],
    step: o = 1,
    editorRef: l = { current: null }
  } = r;
  hn.prototype.defaultStep = o;
  const c = {
    editorState: e,
    namespace: "Doc App",
    editable: o === 1,
    theme: X1,
    onError: (u) => {
      console.log("Error:", u.message);
    },
    nodes: [...Bg, hn]
  };
  return /* @__PURE__ */ p.jsxs(V1, { initialConfig: c, children: [
    /* @__PURE__ */ p.jsx(f6, { editorRef: l }),
    /* @__PURE__ */ p.jsx(Gg, { initHistoryState: t, children: /* @__PURE__ */ p.jsx("div", { className: "editor-shell", children: /* @__PURE__ */ p.jsx(
      m6,
      {
        step: o,
        autoAfterMentionData: i,
        autoMentionData: s,
        onChange: n,
        showTableOfContents: a
      }
    ) }) })
  ] });
}
export {
  E4 as $,
  S6 as A,
  lr as B,
  _6 as C,
  Ea as D,
  Aa as E,
  L4 as F,
  mu as G,
  Pi as H,
  j4 as I,
  Ta as J,
  An as K,
  Re as L,
  Y4 as M,
  Lg as N,
  I5 as O,
  h4 as P,
  Pr as Q,
  Gn as R,
  V4 as S,
  B5 as T,
  y6 as U,
  Z0 as V,
  Q0 as W,
  xr as X,
  $m as Y,
  n4 as Z,
  La as _,
  No as a,
  mh as a0,
  Wn as a1,
  X1 as a2,
  b4 as a3,
  C6 as a4,
  _c as a5,
  G1 as a6,
  T6 as a7,
  hn as a8,
  se as b,
  h5 as c,
  y5 as d,
  p5 as e,
  Wg as f,
  o4 as g,
  a4 as h,
  q2 as i,
  p as j,
  L5 as k,
  Z4 as l,
  G2 as m,
  B2 as n,
  a6 as o,
  U5 as p,
  wf as q,
  l4 as r,
  zc as s,
  vm as t,
  Yg as u,
  m5 as v,
  w6 as w,
  p4 as x,
  d2 as y,
  h2 as z
};
