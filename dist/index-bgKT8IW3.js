var i1 = Object.defineProperty;
var s1 = (r, e, t) => e in r ? i1(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ne = (r, e, t) => s1(r, typeof e != "symbol" ? e + "" : e, t);
import * as mt from "react";
import en, { createContext as ao, useContext as Zu, useMemo as it, useLayoutEffect as Br, useEffect as $, useState as H, useCallback as ie, Suspense as jr, useRef as Oe, forwardRef as Qu } from "react";
import { createEditor as pa, $getRoot as Ot, $createParagraphNode as xe, $getSelection as B, $isElementNode as pe, $isRangeSelection as U, $isTextNode as _e, $isTokenOrSegmented as qi, $getAdjacentNode as _s, $isDecoratorNode as wr, $isRootNode as io, $getCharacterOffsets as o1, $isRootOrShadowRoot as zt, $isLineBreakNode as ga, $getPreviousSelection as so, $splitNode as l1, TextNode as hn, $applyNodeReplacement as ut, ElementNode as xt, $isTabNode as ec, $createTabNode as oo, $createLineBreakNode as ii, isHTMLElement as Cr, isHTMLAnchorElement as u1, createCommand as Ue, $isLeafNode as tc, $isParagraphNode as $r, $createTextNode as Ir, INSERT_PARAGRAPH_COMMAND as la, COMMAND_PRIORITY_LOW as ye, $isNodeSelection as gt, $createNodeSelection as c1, $setSelection as yt, $getNodeByKey as At, DecoratorNode as ur, KEY_BACKSPACE_COMMAND as va, KEY_DELETE_COMMAND as ba, CLICK_COMMAND as ya, $cloneWithProperties as rc, isDocumentFragment as F0, ArtificialNode__DO_NOT_USE as nc, $isBlockElementNode as si, isBlockDomNode as L0, isInlineDomNode as z0, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as ac, $parseSerializedNode as d1, COPY_COMMAND as ic, COMMAND_PRIORITY_CRITICAL as pt, isSelectionWithinEditor as h1, $getEditor as m1, PASTE_COMMAND as sc, isSelectionCapturedInDecoratorInput as f1, COMMAND_PRIORITY_EDITOR as be, CUT_COMMAND as oc, SELECT_ALL_COMMAND as p1, $selectAll as g1, DRAGOVER_COMMAND as yi, $getNearestNodeFromDOMNode as Qe, DRAGSTART_COMMAND as lo, DROP_COMMAND as xi, $createRangeSelection as xa, $normalizeSelection__EXPERIMENTAL as uo, KEY_ESCAPE_COMMAND as Dn, KEY_ENTER_COMMAND as co, INSERT_LINE_BREAK_COMMAND as P0, DELETE_CHARACTER_COMMAND as na, OUTDENT_CONTENT_COMMAND as oi, KEY_ARROW_RIGHT_COMMAND as wi, KEY_ARROW_LEFT_COMMAND as wa, KEY_ARROW_DOWN_COMMAND as mn, KEY_ARROW_UP_COMMAND as fn, INDENT_CONTENT_COMMAND as _i, INSERT_TAB_COMMAND as lc, $insertNodes as Rn, FORMAT_ELEMENT_COMMAND as er, FORMAT_TEXT_COMMAND as bt, REMOVE_TEXT_COMMAND as v1, CONTROLLED_TEXT_INSERTION_COMMAND as uc, DELETE_LINE_COMMAND as Ss, DELETE_WORD_COMMAND as cc, setNodeIndentFromDOM as dc, COMMAND_PRIORITY_HIGH as Lt, KEY_TAB_COMMAND as Si, FOCUS_COMMAND as hc, SELECTION_CHANGE_COMMAND as yr, $createRangeSelectionFromDom as b1, TEXT_TYPE_TO_FORMAT as Rr, isCurrentlyReadOnlyMode as y1, $createPoint as B0, CAN_REDO_COMMAND as Zn, CAN_UNDO_COMMAND as Qn, CLEAR_HISTORY_COMMAND as x1, CLEAR_EDITOR_COMMAND as w1, REDO_COMMAND as mc, UNDO_COMMAND as fc, IS_CODE as _1, IS_HIGHLIGHT as S1, IS_SUBSCRIPT as C1, IS_SUPERSCRIPT as k1, IS_BOLD as N1, IS_ITALIC as E1, IS_UNDERLINE as j0, IS_STRIKETHROUGH as $0, KEY_MODIFIER_COMMAND as T1, COMMAND_PRIORITY_NORMAL as A1, KEY_SPACE_COMMAND as M1, getNearestEditorFromDOMNode as O1, $nodesOfType as D1 } from "lexical";
import * as ua from "react-dom";
import { createPortal as Zt, flushSync as R1 } from "react-dom";
var q0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Cs = { exports: {} }, Gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H0;
function I1() {
  if (H0) return Gn;
  H0 = 1;
  var r = en, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, u) {
    var c, d = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (c in l) n.call(l, c) && !i.hasOwnProperty(c) && (d[c] = l[c]);
    if (o && o.defaultProps) for (c in l = o.defaultProps, l) d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: e, type: o, key: m, ref: g, props: d, _owner: a.current };
  }
  return Gn.Fragment = t, Gn.jsx = s, Gn.jsxs = s, Gn;
}
var Yn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U0;
function F1() {
  return U0 || (U0 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = en, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function x(O) {
      if (O === null || typeof O != "object")
        return null;
      var W = v && O[v] || O[y];
      return typeof W == "function" ? W : null;
    }
    var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var W = arguments.length, Q = new Array(W > 1 ? W - 1 : 0), ve = 1; ve < W; ve++)
          Q[ve - 1] = arguments[ve];
        C("error", O, Q);
      }
    }
    function C(O, W, Q) {
      {
        var ve = _.ReactDebugCurrentFrame, Ie = ve.getStackAddendum();
        Ie !== "" && (W += "%s", Q = Q.concat([Ie]));
        var Le = Q.map(function(Te) {
          return String(Te);
        });
        Le.unshift("Warning: " + W), Function.prototype.apply.call(console[O], console, Le);
      }
    }
    var T = !1, k = !1, N = !1, I = !1, D = !1, M;
    M = Symbol.for("react.module.reference");
    function F(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === i || D || O === a || O === u || O === c || I || O === g || T || k || N || typeof O == "object" && O !== null && (O.$$typeof === m || O.$$typeof === d || O.$$typeof === s || O.$$typeof === o || O.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === M || O.getModuleId !== void 0));
    }
    function z(O, W, Q) {
      var ve = O.displayName;
      if (ve)
        return ve;
      var Ie = W.displayName || W.name || "";
      return Ie !== "" ? Q + "(" + Ie + ")" : Q;
    }
    function j(O) {
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
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case o:
            var W = O;
            return j(W) + ".Consumer";
          case s:
            var Q = O;
            return j(Q._context) + ".Provider";
          case l:
            return z(O, O.render, "ForwardRef");
          case d:
            var ve = O.displayName || null;
            return ve !== null ? ve : P(O.type) || "Memo";
          case m: {
            var Ie = O, Le = Ie._payload, Te = Ie._init;
            try {
              return P(Te(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, Y = 0, ee, ce, J, de, le, Ne, se;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Be() {
      {
        if (Y === 0) {
          ee = console.log, ce = console.info, J = console.warn, de = console.error, le = console.group, Ne = console.groupCollapsed, se = console.groupEnd;
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
              value: ee
            }),
            info: X({}, O, {
              value: ce
            }),
            warn: X({}, O, {
              value: J
            }),
            error: X({}, O, {
              value: de
            }),
            group: X({}, O, {
              value: le
            }),
            groupCollapsed: X({}, O, {
              value: Ne
            }),
            groupEnd: X({}, O, {
              value: se
            })
          });
        }
        Y < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = _.ReactCurrentDispatcher, Je;
    function Ge(O, W, Q) {
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
    var Rt = !1, wt;
    {
      var Qt = typeof WeakMap == "function" ? WeakMap : Map;
      wt = new Qt();
    }
    function te(O, W) {
      if (!O || Rt)
        return "";
      {
        var Q = wt.get(O);
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
        if (W) {
          var Te = function() {
            throw Error();
          };
          if (Object.defineProperty(Te.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Te, []);
            } catch (Et) {
              ve = Et;
            }
            Reflect.construct(O, [], Te);
          } else {
            try {
              Te.call();
            } catch (Et) {
              ve = Et;
            }
            O.call(Te.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ve = Et;
          }
          O();
        }
      } catch (Et) {
        if (Et && ve && typeof Et.stack == "string") {
          for (var Ee = Et.stack.split(`
`), St = ve.stack.split(`
`), rt = Ee.length - 1, st = St.length - 1; rt >= 1 && st >= 0 && Ee[rt] !== St[st]; )
            st--;
          for (; rt >= 1 && st >= 0; rt--, st--)
            if (Ee[rt] !== St[st]) {
              if (rt !== 1 || st !== 1)
                do
                  if (rt--, st--, st < 0 || Ee[rt] !== St[st]) {
                    var $t = `
` + Ee[rt].replace(" at new ", " at ");
                    return O.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", O.displayName)), typeof O == "function" && wt.set(O, $t), $t;
                  }
                while (rt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        Rt = !1, dt.current = Le, je(), Error.prepareStackTrace = Ie;
      }
      var yn = O ? O.displayName || O.name : "", Ur = yn ? Ge(yn) : "";
      return typeof O == "function" && wt.set(O, Ur), Ur;
    }
    function we(O, W, Q) {
      return te(O, !1);
    }
    function We(O) {
      var W = O.prototype;
      return !!(W && W.isReactComponent);
    }
    function _t(O, W, Q) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return te(O, We(O));
      if (typeof O == "string")
        return Ge(O);
      switch (O) {
        case u:
          return Ge("Suspense");
        case c:
          return Ge("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case l:
            return we(O.render);
          case d:
            return _t(O.type, W, Q);
          case m: {
            var ve = O, Ie = ve._payload, Le = ve._init;
            try {
              return _t(Le(Ie), W, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var tt = Object.prototype.hasOwnProperty, ht = {}, $e = _.ReactDebugCurrentFrame;
    function It(O) {
      if (O) {
        var W = O._owner, Q = _t(O.type, O._source, W ? W.type : null);
        $e.setExtraStackFrame(Q);
      } else
        $e.setExtraStackFrame(null);
    }
    function jt(O, W, Q, ve, Ie) {
      {
        var Le = Function.call.bind(tt);
        for (var Te in O)
          if (Le(O, Te)) {
            var Ee = void 0;
            try {
              if (typeof O[Te] != "function") {
                var St = Error((ve || "React class") + ": " + Q + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ee = O[Te](W, Te, ve, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rt) {
              Ee = rt;
            }
            Ee && !(Ee instanceof Error) && (It(Ie), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", Q, Te, typeof Ee), It(null)), Ee instanceof Error && !(Ee.message in ht) && (ht[Ee.message] = !0, It(Ie), w("Failed %s type: %s", Q, Ee.message), It(null));
          }
      }
    }
    var vn = Array.isArray;
    function Li(O) {
      return vn(O);
    }
    function Bh(O) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, Q = W && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return Q;
      }
    }
    function jh(O) {
      try {
        return C0(O), !1;
      } catch {
        return !0;
      }
    }
    function C0(O) {
      return "" + O;
    }
    function k0(O) {
      if (jh(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bh(O)), C0(O);
    }
    var Kn = _.ReactCurrentOwner, $h = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, N0, E0, zi;
    zi = {};
    function qh(O) {
      if (tt.call(O, "ref")) {
        var W = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function Hh(O) {
      if (tt.call(O, "key")) {
        var W = Object.getOwnPropertyDescriptor(O, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Uh(O, W) {
      if (typeof O.ref == "string" && Kn.current && W && Kn.current.stateNode !== W) {
        var Q = P(Kn.current.type);
        zi[Q] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Kn.current.type), O.ref), zi[Q] = !0);
      }
    }
    function Wh(O, W) {
      {
        var Q = function() {
          N0 || (N0 = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Kh(O, W) {
      {
        var Q = function() {
          E0 || (E0 = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        Q.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Gh = function(O, W, Q, ve, Ie, Le, Te) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: O,
        key: W,
        ref: Q,
        props: Te,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Yh(O, W, Q, ve, Ie) {
      {
        var Le, Te = {}, Ee = null, St = null;
        Q !== void 0 && (k0(Q), Ee = "" + Q), Hh(W) && (k0(W.key), Ee = "" + W.key), qh(W) && (St = W.ref, Uh(W, Ie));
        for (Le in W)
          tt.call(W, Le) && !$h.hasOwnProperty(Le) && (Te[Le] = W[Le]);
        if (O && O.defaultProps) {
          var rt = O.defaultProps;
          for (Le in rt)
            Te[Le] === void 0 && (Te[Le] = rt[Le]);
        }
        if (Ee || St) {
          var st = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Ee && Wh(Te, st), St && Kh(Te, st);
        }
        return Gh(O, Ee, St, Ie, ve, Kn.current, Te);
      }
    }
    var Pi = _.ReactCurrentOwner, T0 = _.ReactDebugCurrentFrame;
    function bn(O) {
      if (O) {
        var W = O._owner, Q = _t(O.type, O._source, W ? W.type : null);
        T0.setExtraStackFrame(Q);
      } else
        T0.setExtraStackFrame(null);
    }
    var Bi;
    Bi = !1;
    function ji(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function A0() {
      {
        if (Pi.current) {
          var O = P(Pi.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function Vh(O) {
      return "";
    }
    var M0 = {};
    function Xh(O) {
      {
        var W = A0();
        if (!W) {
          var Q = typeof O == "string" ? O : O.displayName || O.name;
          Q && (W = `

Check the top-level render call using <` + Q + ">.");
        }
        return W;
      }
    }
    function O0(O, W) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var Q = Xh(W);
        if (M0[Q])
          return;
        M0[Q] = !0;
        var ve = "";
        O && O._owner && O._owner !== Pi.current && (ve = " It was passed a child from " + P(O._owner.type) + "."), bn(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ve), bn(null);
      }
    }
    function D0(O, W) {
      {
        if (typeof O != "object")
          return;
        if (Li(O))
          for (var Q = 0; Q < O.length; Q++) {
            var ve = O[Q];
            ji(ve) && O0(ve, W);
          }
        else if (ji(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var Ie = x(O);
          if (typeof Ie == "function" && Ie !== O.entries)
            for (var Le = Ie.call(O), Te; !(Te = Le.next()).done; )
              ji(Te.value) && O0(Te.value, W);
        }
      }
    }
    function Jh(O) {
      {
        var W = O.type;
        if (W == null || typeof W == "string")
          return;
        var Q;
        if (typeof W == "function")
          Q = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === d))
          Q = W.propTypes;
        else
          return;
        if (Q) {
          var ve = P(W);
          jt(Q, O.props, "prop", ve, O);
        } else if (W.PropTypes !== void 0 && !Bi) {
          Bi = !0;
          var Ie = P(W);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zh(O) {
      {
        for (var W = Object.keys(O.props), Q = 0; Q < W.length; Q++) {
          var ve = W[Q];
          if (ve !== "children" && ve !== "key") {
            bn(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), bn(null);
            break;
          }
        }
        O.ref !== null && (bn(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var R0 = {};
    function I0(O, W, Q, ve, Ie, Le) {
      {
        var Te = F(O);
        if (!Te) {
          var Ee = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = Vh();
          St ? Ee += St : Ee += A0();
          var rt;
          O === null ? rt = "null" : Li(O) ? rt = "array" : O !== void 0 && O.$$typeof === e ? (rt = "<" + (P(O.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : rt = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rt, Ee);
        }
        var st = Yh(O, W, Q, Ie, Le);
        if (st == null)
          return st;
        if (Te) {
          var $t = W.children;
          if ($t !== void 0)
            if (ve)
              if (Li($t)) {
                for (var yn = 0; yn < $t.length; yn++)
                  D0($t[yn], O);
                Object.freeze && Object.freeze($t);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              D0($t, O);
        }
        if (tt.call(W, "key")) {
          var Ur = P(O), Et = Object.keys(W).filter(function(a1) {
            return a1 !== "key";
          }), $i = Et.length > 0 ? "{key: someKey, " + Et.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!R0[Ur + $i]) {
            var n1 = Et.length > 0 ? "{" + Et.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, $i, Ur, n1, Ur), R0[Ur + $i] = !0;
          }
        }
        return O === n ? Zh(st) : Jh(st), st;
      }
    }
    function Qh(O, W, Q) {
      return I0(O, W, Q, !0);
    }
    function e1(O, W, Q) {
      return I0(O, W, Q, !1);
    }
    var t1 = e1, r1 = Qh;
    Yn.Fragment = n, Yn.jsx = t1, Yn.jsxs = r1;
  }()), Yn;
}
process.env.NODE_ENV === "production" ? Cs.exports = I1() : Cs.exports = F1();
var p = Cs.exports;
function L1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var z1 = L1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const pc = ao(null);
function P1(r, e) {
  let t = null;
  return r != null && (t = r[1]), { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function oe() {
  const r = Zu(pc);
  return r == null && z1(8), r;
}
const gc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, B1 = gc ? Br : $, za = { tag: "history-merge" };
function j1({ initialConfig: r, children: e }) {
  const t = it(() => {
    const { theme: n, namespace: a, nodes: i, onError: s, editorState: o, html: l } = r, u = P1(null, n), c = pa({ editable: r.editable, html: l, namespace: a, nodes: i, onError: (d) => s(d, c), theme: n });
    return function(d, m) {
      if (m !== null) {
        if (m === void 0) d.update(() => {
          const g = Ot();
          if (g.isEmpty()) {
            const v = xe();
            g.append(v);
            const y = gc ? document.activeElement : null;
            (B() !== null || y !== null && y === d.getRootElement()) && v.select();
          }
        }, za);
        else if (m !== null) switch (typeof m) {
          case "string": {
            const g = d.parseEditorState(m);
            d.setEditorState(g, za);
            break;
          }
          case "object":
            d.setEditorState(m, za);
            break;
          case "function":
            d.update(() => {
              Ot().isEmpty() && m(d);
            }, za);
        }
      }
    }(c, o), [c, u];
  }, []);
  return B1(() => {
    const n = r.editable, [a] = t;
    a.setEditable(n === void 0 || n);
  }, []), p.jsx(pc.Provider, { value: t, children: e });
}
const $1 = {
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
function q1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var vc = q1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const li = /* @__PURE__ */ new Map();
function bc(r) {
  const e = {};
  if (!r) return e;
  const t = r.split(";");
  for (const n of t) if (n !== "") {
    const [a, i] = n.split(/:([^]+)/);
    a && i && (e[a.trim()] = i.trim());
  }
  return e;
}
function ho(r) {
  let e = li.get(r);
  return e === void 0 && (e = bc(r), li.set(r, e)), e;
}
function H1(r) {
  let e = "";
  for (const t in r) t && (e += `${t}: ${r[t]};`);
  return e;
}
function yc(r, e) {
  const t = r.getStartEndPoints();
  if (e.isSelected(r) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [n, a] = t, i = r.isBackward(), s = n.getNode(), o = a.getNode(), l = e.is(s), u = e.is(o);
    if (l || u) {
      const [c, d] = o1(r), m = s.is(o), g = e.is(i ? o : s), v = e.is(i ? s : o);
      let y, x = 0;
      return m ? (x = c > d ? d : c, y = c > d ? c : d) : g ? (x = i ? d : c, y = void 0) : v && (x = 0, y = i ? c : d), e.__text = e.__text.slice(x, y), e;
    }
  }
  return e;
}
function W0(r) {
  if (r.type === "text") return r.offset === r.getNode().getTextContentSize();
  const e = r.getNode();
  return pe(e) || vc(177), r.offset === e.getChildrenSize();
}
function U1(r) {
  const e = r.getStyle(), t = bc(e);
  li.set(e, t);
}
function xn(r, e) {
  const t = ho("getStyle" in r ? r.getStyle() : r.style), n = Object.entries(e).reduce((i, [s, o]) => (typeof o == "function" ? i[s] = o(t[s], r) : o === null ? delete i[s] : i[s] = o, i), { ...t }), a = H1(n);
  r.setStyle(a), li.set(a, n);
}
function mo(r, e) {
  const t = r.getNodes(), n = t.length, a = r.getStartEndPoints();
  if (a === null) return;
  const [i, s] = a, o = n - 1;
  let l = t[0], u = t[o];
  if (r.isCollapsed() && U(r)) return void xn(r, e);
  const c = l.getTextContent().length, d = s.offset;
  let m = i.offset;
  const g = i.isBefore(s);
  let v = g ? m : d, y = g ? d : m;
  const x = g ? i.type : s.type, _ = g ? s.type : i.type, w = g ? s.key : i.key;
  if (_e(l) && v === c) {
    const C = l.getNextSibling();
    _e(C) && (m = 0, v = 0, l = C);
  }
  if (t.length === 1) {
    if (_e(l) && l.canHaveFormat()) {
      if (v = x === "element" ? 0 : m > d ? d : m, y = _ === "element" ? c : m > d ? m : d, v === y) return;
      if (qi(l) || v === 0 && y === c) xn(l, e), l.select(v, y);
      else {
        const C = l.splitText(v, y), T = v === 0 ? C[0] : C[1];
        xn(T, e), T.select(0, y - v);
      }
    }
  } else {
    if (_e(l) && v < l.getTextContentSize() && l.canHaveFormat() && (v === 0 || qi(l) || (l = l.splitText(v)[1], v = 0, g ? i.set(l.getKey(), v, "text") : s.set(l.getKey(), v, "text")), xn(l, e)), _e(u) && u.canHaveFormat()) {
      const C = u.getTextContent().length;
      u.__key !== w && y !== 0 && (y = C), y === C || qi(u) || ([u] = u.splitText(y)), y === 0 && _ !== "element" || xn(u, e);
    }
    for (let C = 1; C < o; C++) {
      const T = t[C], k = T.getKey();
      _e(T) && T.canHaveFormat() && k !== l.getKey() && k !== u.getKey() && !T.isToken() && xn(T, e);
    }
  }
}
function Zr(r, e) {
  if (r === null) return;
  const t = r.getStartEndPoints(), n = t ? t[0] : null;
  if (n !== null && n.key === "root") {
    const s = e(), o = Ot(), l = o.getFirstChild();
    return void (l ? l.replace(s, !0) : o.append(s));
  }
  const a = r.getNodes(), i = n !== null && function(s, o) {
    let l = s;
    for (; l !== null && l.getParent() !== null && !o(l); ) l = l.getParentOrThrow();
    return o(l) ? l : null;
  }(n.getNode(), Y0);
  i && a.indexOf(i) === -1 && a.push(i);
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    if (!Y0(o)) continue;
    pe(o) || vc(178);
    const l = e();
    l.setFormat(o.getFormatType()), l.setIndent(o.getIndent()), o.replace(l, !0);
  }
}
function K0(r, e) {
  const t = _s(r.focus, e);
  return wr(t) && !t.isIsolated() || pe(t) && !t.isInline() && !t.canBeEmpty();
}
function W1(r, e, t, n) {
  r.modify(e ? "extend" : "move", t, n);
}
function xc(r) {
  const e = r.anchor.getNode();
  return (io(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function G0(r, e, t) {
  const n = xc(r);
  W1(r, e, t ? !n : n, "character");
}
function K1(r, e, t) {
  const n = ho(r.getStyle());
  return n !== null && n[e] || t;
}
function Pa(r, e, t = "") {
  let n = null;
  const a = r.getNodes(), i = r.anchor, s = r.focus, o = r.isBackward(), l = o ? s.offset : i.offset, u = o ? s.getNode() : i.getNode();
  if (U(r) && r.isCollapsed() && r.style !== "") {
    const c = ho(r.style);
    if (c !== null && e in c) return c[e];
  }
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    if ((c === 0 || l !== 0 || !d.is(u)) && _e(d)) {
      const m = K1(d, e, t);
      if (n === null) n = m;
      else if (n !== m) {
        n = "";
        break;
      }
    }
  }
  return n === null ? t : n;
}
function Y0(r) {
  if (wr(r) || !pe(r) || zt(r)) return !1;
  const e = r.getFirstChild(), t = e === null || ga(e) || _e(e) || e.isInline();
  return !r.isInline() && r.canBeEmpty() !== !1 && t;
}
function G1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Y1 = G1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const fo = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, V1 = fo && "documentMode" in document ? document.documentMode : null, X1 = fo && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!fo || !("InputEvent" in window) || V1) && "getTargetRanges" in new window.InputEvent("input");
function wc(...r) {
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
const J1 = X1;
function et(r, ...e) {
  const t = wc(...e);
  t.length > 0 && r.classList.add(...t);
}
function pn(r, ...e) {
  const t = wc(...e);
  t.length > 0 && r.classList.remove(...t);
}
function _c(r, e) {
  for (const t of e) if (r.type.startsWith(t)) return !0;
  return !1;
}
function Z1(r, e) {
  const t = r[Symbol.iterator]();
  return new Promise((n, a) => {
    const i = [], s = () => {
      const { done: o, value: l } = t.next();
      if (o) return n(i);
      const u = new FileReader();
      u.addEventListener("error", a), u.addEventListener("load", () => {
        const c = u.result;
        typeof c == "string" && i.push({ file: l, result: c }), s();
      }), _c(l, e) ? u.readAsDataURL(l) : s();
    };
    s();
  });
}
function Sc(r, e) {
  let t = r;
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
}
function Ci(r) {
  const e = he(r, (t) => pe(t) && !t.isInline());
  return pe(e) || Y1(4, r.__key), e;
}
const he = (r, e) => {
  let t = r;
  for (; t !== Ot() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
function qr(r) {
  const e = B() || so();
  if (U(e)) {
    const { focus: t } = e, n = t.getNode(), a = t.offset;
    if (zt(n)) {
      const i = n.getChildAtIndex(a);
      i == null ? n.append(r) : i.insertBefore(r), r.selectNext();
    } else {
      let i, s;
      _e(n) ? (i = n.getParentOrThrow(), s = n.getIndexWithinParent(), a > 0 && (s += 1, n.splitText(a))) : (i = n, s = a);
      const [, o] = l1(i, s);
      o.insertBefore(r), o.selectStart();
    }
  } else {
    if (e != null) {
      const n = e.getNodes();
      n[n.length - 1].getTopLevelElementOrThrow().insertAfter(r);
    } else
      Ot().append(r);
    const t = xe();
    r.insertAfter(t), t.select();
  }
  return r.getLatest();
}
function _a(r, e) {
  const t = e();
  return r.replace(t), t.append(r), t;
}
function xr(r, e) {
  return r !== null && Object.getPrototypeOf(r).constructor.name === e.name;
}
function Q1(r, e) {
  const t = [];
  for (let n = 0; n < r.length; n++) {
    const a = e(r[n]);
    a !== null && t.push(a);
  }
  return t;
}
function em(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function ks(r) {
  if (J1) return 1;
  let e = 1;
  for (; r; ) e *= Number(window.getComputedStyle(r).getPropertyValue("zoom")), r = r.parentElement;
  return e;
}
var tm = { exports: {} };
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
        clone: function w(C, T) {
          T = T || {};
          var k, N;
          switch (o.util.type(C)) {
            case "Object":
              if (N = o.util.objId(C), T[N])
                return T[N];
              k = /** @type {Record<string, any>} */
              {}, T[N] = k;
              for (var I in C)
                C.hasOwnProperty(I) && (k[I] = w(C[I], T));
              return (
                /** @type {any} */
                k
              );
            case "Array":
              return N = o.util.objId(C), T[N] ? T[N] : (k = [], T[N] = k, /** @type {Array} */
              /** @type {any} */
              C.forEach(function(D, M) {
                k[M] = w(D, T);
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
              for (var T in C)
                if (C[T].src == w)
                  return C[T];
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
        isActive: function(w, C, T) {
          for (var k = "no-" + C; w; ) {
            var N = w.classList;
            if (N.contains(C))
              return !0;
            if (N.contains(k))
              return !1;
            w = w.parentElement;
          }
          return !!T;
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
          var T = o.util.clone(o.languages[w]);
          for (var k in C)
            T[k] = C[k];
          return T;
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
        insertBefore: function(w, C, T, k) {
          k = k || /** @type {any} */
          o.languages;
          var N = k[w], I = {};
          for (var D in N)
            if (N.hasOwnProperty(D)) {
              if (D == C)
                for (var M in T)
                  T.hasOwnProperty(M) && (I[M] = T[M]);
              T.hasOwnProperty(D) || (I[D] = N[D]);
            }
          var F = k[w];
          return k[w] = I, o.languages.DFS(o.languages, function(z, j) {
            j === F && z != w && (this[z] = I);
          }), I;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(C, T, k, N) {
          N = N || {};
          var I = o.util.objId;
          for (var D in C)
            if (C.hasOwnProperty(D)) {
              T.call(C, D, C[D], k || D);
              var M = C[D], F = o.util.type(M);
              F === "Object" && !N[I(M)] ? (N[I(M)] = !0, w(M, T, null, N)) : F === "Array" && !N[I(M)] && (N[I(M)] = !0, w(M, T, D, N));
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
      highlightAllUnder: function(w, C, T) {
        var k = {
          callback: T,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", k), k.elements = Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)), o.hooks.run("before-all-elements-highlight", k);
        for (var N = 0, I; I = k.elements[N++]; )
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
      highlightElement: function(w, C, T) {
        var k = o.util.getLanguage(w), N = o.languages[k];
        o.util.setLanguage(w, k);
        var I = w.parentElement;
        I && I.nodeName.toLowerCase() === "pre" && o.util.setLanguage(I, k);
        var D = w.textContent, M = {
          element: w,
          language: k,
          grammar: N,
          code: D
        };
        function F(j) {
          M.highlightedCode = j, o.hooks.run("before-insert", M), M.element.innerHTML = M.highlightedCode, o.hooks.run("after-highlight", M), o.hooks.run("complete", M), T && T.call(M.element);
        }
        if (o.hooks.run("before-sanity-check", M), I = M.element.parentElement, I && I.nodeName.toLowerCase() === "pre" && !I.hasAttribute("tabindex") && I.setAttribute("tabindex", "0"), !M.code) {
          o.hooks.run("complete", M), T && T.call(M.element);
          return;
        }
        if (o.hooks.run("before-highlight", M), !M.grammar) {
          F(o.util.encode(M.code));
          return;
        }
        if (C && n.Worker) {
          var z = new Worker(o.filename);
          z.onmessage = function(j) {
            F(j.data);
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
      highlight: function(w, C, T) {
        var k = {
          code: w,
          grammar: C,
          language: T
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
        var T = C.rest;
        if (T) {
          for (var k in T)
            C[k] = T[k];
          delete C.rest;
        }
        var N = new d();
        return m(N, N.head, w), c(w, N, C, N.head, 0), v(N);
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
          var T = o.hooks.all;
          T[w] = T[w] || [], T[w].push(C);
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
          var T = o.hooks.all[w];
          if (!(!T || !T.length))
            for (var k = 0, N; N = T[k++]; )
              N(C);
        }
      },
      Token: l
    };
    n.Prism = o;
    function l(w, C, T, k) {
      this.type = w, this.content = C, this.alias = T, this.length = (k || "").length | 0;
    }
    l.stringify = function w(C, T) {
      if (typeof C == "string")
        return C;
      if (Array.isArray(C)) {
        var k = "";
        return C.forEach(function(F) {
          k += w(F, T);
        }), k;
      }
      var N = {
        type: C.type,
        content: w(C.content, T),
        tag: "span",
        classes: ["token", C.type],
        attributes: {},
        language: T
      }, I = C.alias;
      I && (Array.isArray(I) ? Array.prototype.push.apply(N.classes, I) : N.classes.push(I)), o.hooks.run("wrap", N);
      var D = "";
      for (var M in N.attributes)
        D += " " + M + '="' + (N.attributes[M] || "").replace(/"/g, "&quot;") + '"';
      return "<" + N.tag + ' class="' + N.classes.join(" ") + '"' + D + ">" + N.content + "</" + N.tag + ">";
    };
    function u(w, C, T, k) {
      w.lastIndex = C;
      var N = w.exec(T);
      if (N && k && N[1]) {
        var I = N[1].length;
        N.index += I, N[0] = N[0].slice(I);
      }
      return N;
    }
    function c(w, C, T, k, N, I) {
      for (var D in T)
        if (!(!T.hasOwnProperty(D) || !T[D])) {
          var M = T[D];
          M = Array.isArray(M) ? M : [M];
          for (var F = 0; F < M.length; ++F) {
            if (I && I.cause == D + "," + F)
              return;
            var z = M[F], j = z.inside, P = !!z.lookbehind, X = !!z.greedy, Y = z.alias;
            if (X && !z.pattern.global) {
              var ee = z.pattern.toString().match(/[imsuy]*$/)[0];
              z.pattern = RegExp(z.pattern.source, ee + "g");
            }
            for (var ce = z.pattern || z, J = k.next, de = N; J !== C.tail && !(I && de >= I.reach); de += J.value.length, J = J.next) {
              var le = J.value;
              if (C.length > w.length)
                return;
              if (!(le instanceof l)) {
                var Ne = 1, se;
                if (X) {
                  if (se = u(ce, de, w, P), !se || se.index >= w.length)
                    break;
                  var dt = se.index, Pe = se.index + se[0].length, Be = de;
                  for (Be += J.value.length; dt >= Be; )
                    J = J.next, Be += J.value.length;
                  if (Be -= J.value.length, de = Be, J.value instanceof l)
                    continue;
                  for (var je = J; je !== C.tail && (Be < Pe || typeof je.value == "string"); je = je.next)
                    Ne++, Be += je.value.length;
                  Ne--, le = w.slice(de, Be), se.index -= de;
                } else if (se = u(ce, 0, le, P), !se)
                  continue;
                var dt = se.index, Je = se[0], Ge = le.slice(0, dt), Rt = le.slice(dt + Je.length), wt = de + le.length;
                I && wt > I.reach && (I.reach = wt);
                var Qt = J.prev;
                Ge && (Qt = m(C, Qt, Ge), de += Ge.length), g(C, Qt, Ne);
                var te = new l(D, j ? o.tokenize(Je, j) : Je, Y, Je);
                if (J = m(C, Qt, te), Rt && m(C, J, Rt), Ne > 1) {
                  var we = {
                    cause: D + "," + F,
                    reach: wt
                  };
                  c(w, C, T, J.prev, de, we), I && we.reach > I.reach && (I.reach = we.reach);
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
    function m(w, C, T) {
      var k = C.next, N = { value: T, prev: C, next: k };
      return C.next = N, k.prev = N, w.length++, N;
    }
    function g(w, C, T) {
      for (var k = C.next, N = 0; N < T && k !== w.tail; N++)
        k = k.next;
      C.next = k, k.prev = C, w.length -= N;
    }
    function v(w) {
      for (var C = [], T = w.head.next; T !== w.tail; )
        C.push(T.value), T = T.next;
      return C;
    }
    if (!n.document)
      return n.addEventListener && (o.disableWorkerMessageHandler || n.addEventListener("message", function(w) {
        var C = JSON.parse(w.data), T = C.language, k = C.code, N = C.immediateClose;
        n.postMessage(o.highlight(k, o.languages[T], T)), N && n.close();
      }, !1)), o;
    var y = o.util.currentScript();
    y && (o.filename = y.src, y.hasAttribute("data-manual") && (o.manual = !0));
    function x() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var _ = document.readyState;
      _ === "loading" || _ === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
    }
    return o;
  }(e);
  r.exports && (r.exports = t), typeof q0 < "u" && (q0.Prism = t), t.languages.markup = {
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
    var n = "Loading…", a = function(y, x) {
      return "✖ Error " + y + " while fetching file: " + x;
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
    }, o = "data-src-status", l = "loading", u = "loaded", c = "failed", d = "pre[data-src]:not([" + o + '="' + u + '"]):not([' + o + '="' + l + '"])';
    function m(y, x, _) {
      var w = new XMLHttpRequest();
      w.open("GET", y, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? x(w.responseText) : w.status >= 400 ? _(a(w.status, w.statusText)) : _(i));
      }, w.send(null);
    }
    function g(y) {
      var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
      if (x) {
        var _ = Number(x[1]), w = x[2], C = x[3];
        return w ? C ? [_, Number(C)] : [_, void 0] : [_, _];
      }
    }
    t.hooks.add("before-highlightall", function(y) {
      y.selector += ", " + d;
    }), t.hooks.add("before-sanity-check", function(y) {
      var x = (
        /** @type {HTMLPreElement} */
        y.element
      );
      if (x.matches(d)) {
        y.code = "", x.setAttribute(o, l);
        var _ = x.appendChild(document.createElement("CODE"));
        _.textContent = n;
        var w = x.getAttribute("data-src"), C = y.language;
        if (C === "none") {
          var T = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          C = s[T] || T;
        }
        t.util.setLanguage(_, C), t.util.setLanguage(x, C);
        var k = t.plugins.autoloader;
        k && k.loadLanguages(C), m(
          w,
          function(N) {
            x.setAttribute(o, u);
            var I = g(x.getAttribute("data-range"));
            if (I) {
              var D = N.split(/\r\n?|\n/g), M = I[0], F = I[1] == null ? D.length : I[1];
              M < 0 && (M += D.length), M = Math.max(0, Math.min(M - 1, D.length)), F < 0 && (F += D.length), F = Math.max(0, Math.min(F, D.length)), N = D.slice(M, F).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(M + 1));
            }
            _.textContent = N, t.highlightElement(_);
          },
          function(N) {
            x.setAttribute(o, c), _.textContent = N;
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
        for (var _ = (x || document).querySelectorAll(d), w = 0, C; C = _[w++]; )
          t.highlightElement(C);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(tm);
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
  function t(c) {
    return c = c.replace(/<inner>/g, function() {
      return e;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + c + ")");
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
  }), ["url", "bold", "italic", "strike"].forEach(function(c) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(d) {
      c !== d && (r.languages.markdown[c].inside.content.inside[d] = r.languages.markdown[d]);
    });
  }), r.hooks.add("after-tokenize", function(c) {
    if (c.language !== "markdown" && c.language !== "md")
      return;
    function d(m) {
      if (!(!m || typeof m == "string"))
        for (var g = 0, v = m.length; g < v; g++) {
          var y = m[g];
          if (y.type !== "code") {
            d(y.content);
            continue;
          }
          var x = y.content[1], _ = y.content[3];
          if (x && _ && x.type === "code-language" && _.type === "code-block" && typeof x.content == "string") {
            var w = x.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            w = (/[a-z][\w-]*/i.exec(w) || [""])[0].toLowerCase();
            var C = "language-" + w;
            _.alias ? typeof _.alias == "string" ? _.alias = [_.alias, C] : _.alias.push(C) : _.alias = [C];
          }
        }
    }
    d(c.tokens);
  }), r.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var d = "", m = 0, g = c.classes.length; m < g; m++) {
        var v = c.classes[m], y = /language-(.+)/.exec(v);
        if (y) {
          d = y[1];
          break;
        }
      }
      var x = r.languages[d];
      if (x)
        c.content = r.highlight(u(c.content), x, d);
      else if (d && d !== "none" && r.plugins.autoloader) {
        var _ = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        c.attributes.id = _, r.plugins.autoloader.loadLanguages(d, function() {
          var w = document.getElementById(_);
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
  function u(c) {
    var d = c.replace(s, "");
    return d = d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, g) {
      if (g = g.toLowerCase(), g[0] === "#") {
        var v;
        return g[1] === "x" ? v = parseInt(g.slice(2), 16) : v = Number(g.slice(1)), l(v);
      } else {
        var y = o[g];
        return y || m;
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
function rm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
rm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const nm = globalThis.Prism || window.Prism, V0 = (r) => {
  try {
    return !!r && nm.languages.hasOwnProperty(r);
  } catch {
    return !1;
  }
};
function Cc(r, e) {
  for (const t of r.childNodes) {
    if (Cr(t) && t.tagName === e) return !0;
    Cc(t, e);
  }
  return !1;
}
const ea = "data-language", Ba = "data-highlight-language";
let po = class kc extends xt {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new kc(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e, this.__isSyntaxHighlightSupported = V0(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    et(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(ea, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(Ba, n)), t;
  }
  updateDOM(e, t, n) {
    const a = this.__language, i = e.__language;
    return a ? a !== i && (t.setAttribute(ea, a), this.__isSyntaxHighlightSupported && t.setAttribute(Ba, a)) : i && (t.removeAttribute(ea), e.__isSyntaxHighlightSupported && t.removeAttribute(Ba)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    et(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(ea, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(Ba, n)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || Cc(e, "BR")) ? { conversion: X0, priority: 1 } : null, div: () => ({ conversion: im, priority: 1 }), pre: () => ({ conversion: X0, priority: 0 }), table: (e) => Hi(e) ? { conversion: sm, priority: 3 } : null, td: (e) => {
      const t = e, n = t.closest("table");
      return t.classList.contains("js-file-line") || n && Hi(n) ? { conversion: J0, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && Hi(t) ? { conversion: J0, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    const t = tn(e.language);
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
    if (_e(o)) {
      let l = om(o);
      const u = [];
      for (; ; ) if (ec(l)) u.push(oo()), l = l.getNextSibling();
      else {
        if (!go(l)) break;
        {
          let x = 0;
          const _ = l.getTextContent(), w = l.getTextContentSize();
          for (; x < w && _[x] === " "; ) x++;
          if (x !== 0 && u.push(Tc(" ".repeat(x))), x !== w) break;
          l = l.getNextSibling();
        }
      }
      const c = o.splitText(i.offset)[0], d = i.offset === 0 ? 0 : 1, m = c.getIndexWithinParent() + d, g = o.getParentOrThrow(), v = [ii(), ...u];
      g.splice(m, 0, v);
      const y = u[u.length - 1];
      y ? y.select() : i.offset === 0 ? c.selectPrevious() : c.getNextSibling().selectNext(0, 0);
    }
    if (am(o)) {
      const { offset: l } = e.anchor;
      o.splice(l, 0, [ii()]), o.select(l + 1, l + 1);
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
    t.__language = e, t.__isSyntaxHighlightSupported = V0(e);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
};
function tn(r) {
  return ut(new po(r));
}
function am(r) {
  return r instanceof po;
}
function X0(r) {
  return { node: tn(r.getAttribute(ea)) };
}
function im(r) {
  const e = r, t = Z0(e);
  return t || function(n) {
    let a = n.parentElement;
    for (; a !== null; ) {
      if (Z0(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  }(e) ? { node: t ? tn() : null } : { node: null };
}
function sm() {
  return { node: tn() };
}
function J0() {
  return { node: null };
}
function Z0(r) {
  return r.style.fontFamily.match("monospace") !== null;
}
function Hi(r) {
  return r.classList.contains("js-file-line-container");
}
let Nc = class Ec extends hn {
  constructor(e, t, n) {
    super(e, n), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new Ec(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    const t = super.createDOM(e), n = Ui(e.theme, this.__highlightType);
    return et(t, n), t;
  }
  updateDOM(e, t, n) {
    const a = super.updateDOM(e, t, n), i = Ui(n.theme, e.__highlightType), s = Ui(n.theme, this.__highlightType);
    return i !== s && (i && pn(t, i), s && et(t, s)), a;
  }
  static importJSON(e) {
    const t = Tc(e.text, e.highlightType);
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
    return tn();
  }
};
function Ui(r, e) {
  return e && r && r.codeHighlight && r.codeHighlight[e];
}
function Tc(r, e) {
  return ut(new Nc(r, e));
}
function go(r) {
  return r instanceof Nc;
}
function om(r) {
  let e = r, t = r;
  for (; go(t) || ec(t); ) e = t, t = t.getPreviousSibling();
  return e;
}
let Ac = class Mc extends hn {
  static getType() {
    return "hashtag";
  }
  static clone(e) {
    return new Mc(e.__text, e.__key);
  }
  constructor(e, t) {
    super(e, t);
  }
  createDOM(e) {
    const t = super.createDOM(e);
    return et(t, e.theme.hashtag), t;
  }
  static importJSON(e) {
    const t = lm(e.text);
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
function lm(r = "") {
  return ut(new Ac(r));
}
const um = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
let In = class Oc extends xt {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new Oc(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
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
    return { a: (e) => ({ conversion: cm, priority: 1 }) };
  }
  static importJSON(e) {
    const t = ca(e.url, { rel: e.rel, target: e.target, title: e.title });
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!um.has(t.protocol)) return "about:blank";
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
    const n = ca(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
function cm(r) {
  let e = null;
  if (u1(r)) {
    const t = r.textContent;
    (t !== null && t !== "" || r.children.length > 0) && (e = ca(r.getAttribute("href") || "", { rel: r.getAttribute("rel"), target: r.getAttribute("target"), title: r.getAttribute("title") }));
  }
  return { node: e };
}
function ca(r, e) {
  return ut(new In(r, e));
}
function lt(r) {
  return r instanceof In;
}
let Sa = class Dc extends In {
  constructor(e, t = {}, n) {
    super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new Dc(e.__url, { isUnlinked: e.__isUnlinked, rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
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
    const t = Ns(e.url, { isUnlinked: e.isUnlinked, rel: e.rel, target: e.target, title: e.title });
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
    if (pe(n)) {
      const a = Ns(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return n.append(a), a;
    }
    return null;
  }
};
function Ns(r, e) {
  return ut(new Sa(r, e));
}
function vr(r) {
  return r instanceof Sa;
}
const ir = Ue("TOGGLE_LINK_COMMAND");
function Wi(r, e = {}) {
  const { target: t, title: n } = e, a = e.rel === void 0 ? "noreferrer" : e.rel, i = B();
  if (!U(i)) return;
  const s = i.extract();
  if (r === null) s.forEach((o) => {
    const l = he(o, (u) => !vr(u) && lt(u));
    if (l) {
      const u = l.getChildren();
      for (let c = 0; c < u.length; c++) l.insertBefore(u[c]);
      l.remove();
    }
  });
  else {
    if (s.length === 1) {
      const u = function(c, d) {
        let m = c;
        for (; m !== null && m.getParent() !== null && !d(m); ) m = m.getParentOrThrow();
        return d(m) ? m : null;
      }(s[0], lt);
      if (u !== null) return u.setURL(r), t !== void 0 && u.setTarget(t), a !== null && u.setRel(a), void (n !== void 0 && u.setTitle(n));
    }
    let o = null, l = null;
    s.forEach((u) => {
      const c = u.getParent();
      if (c !== l && c !== null && (!pe(u) || u.isInline())) {
        if (lt(c)) return l = c, c.setURL(r), t !== void 0 && c.setTarget(t), a !== null && l.setRel(a), void (n !== void 0 && l.setTitle(n));
        if (c.is(o) || (o = c, l = ca(r, { rel: a, target: t, title: n }), lt(c) ? u.getPreviousSibling() === null ? c.insertBefore(l) : c.insertAfter(l) : u.insertBefore(l)), lt(u)) {
          if (u.is(l)) return;
          if (l !== null) {
            const d = u.getChildren();
            for (let m = 0; m < d.length; m++) l.append(d[m]);
          }
          u.remove();
        } else l !== null && l.append(u);
      }
    });
  }
}
function dm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rr = dm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function Es(r) {
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
function Ts(r) {
  let e = r.getParent();
  ke(e) || rr(40);
  let t = e;
  for (; t !== null; ) t = t.getParent(), ke(t) && (e = t);
  return e;
}
function Rc(r) {
  let e = [];
  const t = r.getChildren().filter(Fe);
  for (let n = 0; n < t.length; n++) {
    const a = t[n], i = a.getFirstChild();
    ke(i) ? e = e.concat(Rc(i)) : e.push(a);
  }
  return e;
}
function nr(r) {
  return Fe(r) && ke(r.getFirstChild());
}
function Q0(r) {
  return Pt().append(r);
}
function Ic(r, e) {
  return Fe(r) && (e.length === 0 || e.length === 1 && r.is(e[0]) && r.getChildrenSize() === 0);
}
function As(r, e) {
  r.update(() => {
    const t = B();
    if (t !== null) {
      const n = t.getNodes();
      if (U(t)) {
        const i = t.getStartEndPoints();
        i === null && rr(143);
        const [s] = i, o = s.getNode(), l = o.getParent();
        if (Ic(o, n)) {
          const u = Mt(e);
          if (zt(l)) {
            o.replace(u);
            const c = Pt();
            pe(o) && (c.setFormat(o.getFormatType()), c.setIndent(o.getIndent())), u.append(c);
          } else if (Fe(o)) {
            const c = o.getParentOrThrow();
            rn(u, c.getChildren()), c.replace(u);
          }
          return;
        }
      }
      const a = /* @__PURE__ */ new Set();
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (!pe(s) || !s.isEmpty() || Fe(s) || a.has(s.getKey())) {
          if (tc(s)) {
            let o = s.getParent();
            for (; o != null; ) {
              const l = o.getKey();
              if (ke(o)) {
                if (!a.has(l)) {
                  const u = Mt(e);
                  rn(u, o.getChildren()), o.replace(u), a.add(l);
                }
                break;
              }
              {
                const u = o.getParent();
                if (zt(u) && !a.has(l)) {
                  a.add(l), el(o, e);
                  break;
                }
                o = u;
              }
            }
          }
        } else el(s, e);
      }
    }
  });
}
function rn(r, e) {
  r.splice(r.getChildrenSize(), 0, e);
}
function el(r, e) {
  if (ke(r)) return r;
  const t = r.getPreviousSibling(), n = r.getNextSibling(), a = Pt();
  let i;
  if (rn(a, r.getChildren()), ke(t) && e === t.getListType()) t.append(a), ke(n) && e === n.getListType() && (rn(t, n.getChildren()), n.remove()), i = t;
  else if (ke(n) && e === n.getListType()) n.getFirstChildOrThrow().insertBefore(a), i = n;
  else {
    const s = Mt(e);
    s.append(a), r.replace(s), i = s;
  }
  return a.setFormat(r.getFormatType()), a.setIndent(r.getIndent()), r.remove(), i;
}
function vo(r, e) {
  const t = r.getLastChild(), n = e.getFirstChild();
  t && n && nr(t) && nr(n) && (vo(t.getFirstChild(), n.getFirstChild()), n.remove());
  const a = e.getChildren();
  a.length > 0 && r.append(...a), e.remove();
}
function hm(r) {
  r.update(() => {
    const e = B();
    if (U(e)) {
      const t = /* @__PURE__ */ new Set(), n = e.getNodes(), a = e.anchor.getNode();
      if (Ic(a, n)) t.add(Ts(a));
      else for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (tc(s)) {
          const o = Sc(s, Ca);
          o != null && t.add(Ts(o));
        }
      }
      for (const i of t) {
        let s = i;
        const o = Rc(i);
        for (const l of o) {
          const u = xe();
          rn(u, l.getChildren()), s.insertAfter(u), s = u, l.__key === e.anchor.key && e.anchor.set(u.getKey(), 0, "element"), l.__key === e.focus.key && e.focus.set(u.getKey(), 0, "element"), l.remove();
        }
        i.remove();
      }
    }
  });
}
function mm(r) {
  const e = /* @__PURE__ */ new Set();
  if (nr(r) || e.has(r.getKey())) return;
  const t = r.getParent(), n = r.getNextSibling(), a = r.getPreviousSibling();
  if (nr(n) && nr(a)) {
    const i = a.getFirstChild();
    if (ke(i)) {
      i.append(r);
      const s = n.getFirstChild();
      ke(s) && (rn(i, s.getChildren()), n.remove(), e.add(n.getKey()));
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
    const i = Pt(), s = Mt(t.getListType());
    i.append(s), s.append(r), a ? a.insertAfter(i) : n ? n.insertBefore(i) : t.append(i);
  }
}
function fm(r) {
  if (nr(r)) return;
  const e = r.getParent(), t = e ? e.getParent() : void 0;
  if (ke(t ? t.getParent() : void 0) && Fe(t) && ke(e)) {
    const n = e ? e.getFirstChild() : void 0, a = e ? e.getLastChild() : void 0;
    if (r.is(n)) t.insertBefore(r), e.isEmpty() && t.remove();
    else if (r.is(a)) t.insertAfter(r), e.isEmpty() && t.remove();
    else {
      const i = e.getListType(), s = Pt(), o = Mt(i);
      s.append(o), r.getPreviousSiblings().forEach((c) => o.append(c));
      const l = Pt(), u = Mt(i);
      l.append(u), rn(u, r.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(r);
    }
  }
}
function pm() {
  const r = B();
  if (!U(r) || !r.isCollapsed()) return !1;
  const e = r.anchor.getNode();
  if (!Fe(e) || e.getChildrenSize() !== 0) return !1;
  const t = Ts(e), n = e.getParent();
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
    const o = Mt(n.getListType());
    if ($r(i)) i.insertAfter(o);
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
      const u = l.getParent();
      if (u == null || !Fe(l) && !ke(l)) break;
      l = u;
    }
    l.remove();
  }(e), !0;
}
function ui(...r) {
  const e = [];
  for (const t of r) if (t && typeof t == "string") for (const [n] of t.matchAll(/\S+/g)) e.push(n);
  return e;
}
let Ca = class Fc extends xt {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new Fc(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, n) {
    super(n), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), n = this.getParent();
    return ke(n) && n.getListType() === "check" && rl(t, this, null), t.value = this.__value, tl(t, e.theme, this), t;
  }
  updateDOM(e, t, n) {
    const a = this.getParent();
    return ke(a) && a.getListType() === "check" && rl(t, this, e), t.value = this.__value, tl(t, n.theme, this), !1;
  }
  static transform() {
    return (e) => {
      if (Fe(e) || rr(144), e.__checked == null) return;
      const t = e.getParent();
      ke(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: gm, priority: 0 }) };
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
      if (pe(n) && this.canMergeWith(n)) {
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
      const a = Mt(n.getListType());
      let i = this.getNextSibling();
      for (; i; ) {
        const s = i;
        i = i.getNextSibling(), a.append(s);
      }
      n.insertAfter(e), e.insertAfter(a);
    }
    return t && (pe(e) || rr(139), this.getChildren().forEach((a) => {
      e.append(a);
    })), this.remove(), n.getChildrenSize() === 0 && n.remove(), e;
  }
  insertAfter(e, t = !0) {
    const n = this.getParentOrThrow();
    if (ke(n) || rr(39), Fe(e)) return super.insertAfter(e, t);
    const a = this.getNextSiblings();
    if (n.insertAfter(e, t), a.length !== 0) {
      const i = Mt(n.getListType());
      a.forEach((s) => i.append(s)), e.insertAfter(i, t);
    }
    return e;
  }
  remove(e) {
    const t = this.getPreviousSibling(), n = this.getNextSibling();
    super.remove(e), t && n && nr(t) && nr(n) && (vo(t.getFirstChild(), n.getFirstChild()), n.remove());
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
    for (; t !== e; ) t < e ? (mm(this), t++) : (fm(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return Fe(e);
  }
  canReplaceWith(e) {
    return Fe(e);
  }
  canMergeWith(e) {
    return $r(e) || Fe(e);
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
    return Mt("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function tl(r, e, t) {
  const n = [], a = [], i = e.list, s = i ? i.listitem : void 0;
  let o;
  if (i && i.nested && (o = i.nested.listitem), s !== void 0 && n.push(...ui(s)), i) {
    const l = t.getParent(), u = ke(l) && l.getListType() === "check", c = t.getChecked();
    u && !c || a.push(i.listitemUnchecked), u && c || a.push(i.listitemChecked), u && n.push(c ? i.listitemChecked : i.listitemUnchecked);
  }
  if (o !== void 0) {
    const l = ui(o);
    t.getChildren().some((u) => ke(u)) ? n.push(...l) : a.push(...l);
  }
  a.length > 0 && pn(r, ...a), n.length > 0 && et(r, ...n);
}
function rl(r, e, t, n) {
  ke(e.getFirstChild()) ? (r.removeAttribute("role"), r.removeAttribute("tabIndex"), r.removeAttribute("aria-checked")) : (r.setAttribute("role", "checkbox"), r.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || r.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function gm(r) {
  if (r.classList.contains("task-list-item")) {
    for (const t of r.children) if (t.tagName === "INPUT") return vm(t);
  }
  const e = r.getAttribute("aria-checked");
  return { node: Pt(e === "true" || e !== "false" && void 0) };
}
function vm(r) {
  return r.getAttribute("type") !== "checkbox" ? { node: null } : { node: Pt(r.hasAttribute("checked")) };
}
function Pt(r) {
  return ut(new Ca(void 0, r));
}
function Fe(r) {
  return r instanceof Ca;
}
let ka = class Lc extends xt {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || il[e.__tag];
    return new Lc(t, e.__start, e.__key);
  }
  constructor(e, t, n) {
    super(n);
    const a = il[e] || e;
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
    return this.__start !== 1 && a.setAttribute("start", String(this.__start)), a.__lexicalListType = this.__listType, nl(a, e.theme, this), a;
  }
  updateDOM(e, t, n) {
    return e.__tag !== this.__tag || (nl(t, n.theme, this), !1);
  }
  static transform() {
    return (e) => {
      ke(e) || rr(163), function(t) {
        const n = t.getNextSibling();
        ke(n) && t.getListType() === n.getListType() && vo(t, n);
      }(e), function(t) {
        const n = t.getListType() !== "check";
        let a = t.getStart();
        for (const i of t.getChildren()) Fe(i) && (i.getValue() !== a && i.setValue(a), n && i.getLatest().__checked != null && i.setChecked(void 0), ke(i.getFirstChild()) || a++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: al, priority: 0 }), ul: () => ({ conversion: al, priority: 0 }) };
  }
  static importJSON(e) {
    const t = Mt(e.listType, e.start);
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
        else if (pe(n)) {
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
function nl(r, e, t) {
  const n = [], a = [], i = e.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], o = Es(t) - 1, l = o % s.length, u = s[l], c = i[t.__tag];
    let d;
    const m = i.nested, g = i.checklist;
    if (m !== void 0 && m.list && (d = m.list), c !== void 0 && n.push(c), g !== void 0 && t.__listType === "check" && n.push(g), u !== void 0) {
      n.push(...ui(u));
      for (let v = 0; v < s.length; v++) v !== l && a.push(t.__tag + v);
    }
    if (d !== void 0) {
      const v = ui(d);
      o > 1 ? n.push(...v) : a.push(...v);
    }
  }
  a.length > 0 && pn(r, ...a), n.length > 0 && et(r, ...n);
}
function bm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    if (Fe(n)) {
      e.push(n);
      const a = n.getChildren();
      a.length > 1 && a.forEach((i) => {
        ke(i) && e.push(Q0(i));
      });
    } else e.push(Q0(n));
  }
  return e;
}
function al(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = Mt("number", r.start) : e === "ul" && (t = function(n) {
    if (n.getAttribute("__lexicallisttype") === "check" || n.classList.contains("contains-task-list")) return !0;
    for (const a of n.childNodes) if (Cr(a) && a.hasAttribute("aria-checked")) return !0;
    return !1;
  }(r) ? Mt("check") : Mt("bullet")), { after: bm, node: t };
}
const il = { ol: "number", ul: "bullet" };
function Mt(r, e = 1) {
  return ut(new ka(r, e));
}
function ke(r) {
  return r instanceof ka;
}
const bo = Ue("INSERT_UNORDERED_LIST_COMMAND"), yo = Ue("INSERT_ORDERED_LIST_COMMAND"), xo = Ue("INSERT_CHECK_LIST_COMMAND"), ym = Ue("REMOVE_LIST_COMMAND");
function xm(r) {
  return Re(r.registerCommand(yo, () => (As(r, "number"), !0), ye), r.registerCommand(bo, () => (As(r, "bullet"), !0), ye), r.registerCommand(ym, () => (hm(r), !0), ye), r.registerCommand(la, () => !!pm(), ye));
}
let wo = class zc extends xt {
  static getType() {
    return "mark";
  }
  static clone(e) {
    return new zc(Array.from(e.__ids), e.__key);
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    const t = sl(e.ids);
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
    return Ki(e) ? e.__ids : [];
  }
  addID(e) {
    const t = this.getWritable();
    if (Ki(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return;
      n.push(e);
    }
  }
  deleteID(e) {
    const t = this.getWritable();
    if (Ki(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return void n.splice(a, 1);
    }
  }
  insertNewAfter(e, t = !0) {
    const n = sl(this.__ids);
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
function sl(r) {
  return ut(new wo(r));
}
function Ki(r) {
  return r instanceof wo;
}
function wm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var _m = wm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let _o = class Pc extends xt {
  static getType() {
    return "overflow";
  }
  static clone(e) {
    return new Pc(e.__key);
  }
  static importJSON(e) {
    return Sm();
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
      Cm(e) || _m(204), e.isEmpty() && e.remove();
    };
  }
};
function Sm() {
  return ut(new _o());
}
function Cm(r) {
  return r instanceof _o;
}
function ol(r, e) {
  return r.getEditorState().read(() => {
    const t = At(e);
    return t !== null && t.isSelected();
  });
}
function So(r) {
  const [e] = oe(), [t, n] = H(() => ol(e, r));
  return $(() => {
    let a = !0;
    const i = e.registerUpdateListener(() => {
      a && n(ol(e, r));
    });
    return () => {
      a = !1, i();
    };
  }, [e, r]), [t, ie((a) => {
    e.update(() => {
      let i = B();
      gt(i) || (i = c1(), yt(i)), gt(i) && (a ? i.add(r) : i.delete(r));
    });
  }, [e, r]), ie(() => {
    e.update(() => {
      const a = B();
      gt(a) && a.clear();
    });
  }, [e])];
}
const Co = Ue("INSERT_HORIZONTAL_RULE_COMMAND");
function km({ nodeKey: r }) {
  const [e] = oe(), [t, n, a] = So(r), i = ie((s) => {
    const o = B();
    return t && gt(o) && (s.preventDefault(), e.update(() => {
      o.getNodes().forEach((l) => {
        Em(l) && l.remove();
      });
    })), !1;
  }, [e, t]);
  return $(() => Re(e.registerCommand(ya, (s) => {
    const o = e.getElementByKey(r);
    return s.target === o && (s.shiftKey || a(), n(!t), !0);
  }, ye), e.registerCommand(ba, i, ye), e.registerCommand(va, i, ye)), [a, e, t, r, i, n]), $(() => {
    const s = e.getElementByKey(r), o = "selected";
    s !== null && (t ? et(s, o) : pn(s, o));
  }, [e, t, r]), null;
}
let ko = class Bc extends ur {
  static getType() {
    return "horizontalrule";
  }
  static clone(e) {
    return new Bc(e.__key);
  }
  static importJSON(e) {
    return No();
  }
  static importDOM() {
    return { hr: () => ({ conversion: Nm, priority: 0 }) };
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
    return p.jsx(km, { nodeKey: this.__key });
  }
};
function Nm() {
  return { node: No() };
}
function No() {
  return ut(new ko());
}
function Em(r) {
  return r instanceof ko;
}
function Tm(r, e) {
  const t = e.body ? e.body.childNodes : [];
  let n = [];
  const a = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!qc.has(s.nodeName)) {
      const o = Hc(s, r, a, !1);
      o !== null && (n = n.concat(o));
    }
  }
  return function(i) {
    for (const s of i) s.getNextSibling() instanceof nc && s.insertAfter(ii());
    for (const s of i) {
      const o = s.getChildren();
      for (const l of o) s.insertBefore(l);
      s.remove();
    }
  }(a), n;
}
function jc(r, e) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), n = Ot().getChildren();
  for (let a = 0; a < n.length; a++)
    $c(r, n[a], t, e);
  return t.innerHTML;
}
function $c(r, e, t, n = null) {
  let a = n === null || e.isSelected(n);
  const i = pe(e) && e.excludeFromCopy("html");
  let s = e;
  if (n !== null) {
    let g = rc(e);
    g = _e(g) && n !== null ? yc(n, g) : g, s = g;
  }
  const o = pe(s) ? s.getChildren() : [], l = r._nodes.get(s.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(r, s) : s.exportDOM(r);
  const { element: c, after: d } = u;
  if (!c) return !1;
  const m = document.createDocumentFragment();
  for (let g = 0; g < o.length; g++) {
    const v = o[g], y = $c(r, v, m, n);
    !a && pe(e) && y && e.extractWithChild(v, n, "html") && (a = !0);
  }
  if (a && !i) {
    if ((Cr(c) || F0(c)) && c.append(m), t.append(c), d) {
      const g = d.call(s, c);
      g && (F0(c) ? c.replaceChildren(g) : c.replaceWith(g));
    }
  } else t.append(m);
  return a;
}
const qc = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Hc(r, e, t, n, a = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (qc.has(r.nodeName)) return s;
  let o = null;
  const l = function(v, y) {
    const { nodeName: x } = v, _ = y._htmlConversions.get(x.toLowerCase());
    let w = null;
    if (_ !== void 0) for (const C of _) {
      const T = C(v);
      T !== null && (w === null || (w.priority || 0) < (T.priority || 0)) && (w = T);
    }
    return w !== null ? w.conversion : null;
  }(r, e), u = l ? l(r) : null;
  let c = null;
  if (u !== null) {
    c = u.after;
    const v = u.node;
    if (o = Array.isArray(v) ? v[v.length - 1] : v, o !== null) {
      for (const [, y] of a) if (o = y(o, i), !o) break;
      o && s.push(...Array.isArray(v) ? v : [o]);
    }
    u.forChild != null && a.set(r.nodeName, u.forChild);
  }
  const d = r.childNodes;
  let m = [];
  const g = (o == null || !zt(o)) && (o != null && si(o) || n);
  for (let v = 0; v < d.length; v++) m.push(...Hc(d[v], e, t, g, new Map(a), o));
  return c != null && (m = c(m)), L0(r) && (m = Am(r, m, g ? () => {
    const v = new nc();
    return t.push(v), v;
  } : xe)), o == null ? m.length > 0 ? s = s.concat(m) : L0(r) && function(v) {
    return v.nextSibling == null || v.previousSibling == null ? !1 : z0(v.nextSibling) && z0(v.previousSibling);
  }(r) && (s = s.concat(ii())) : pe(o) && o.append(...m), s;
}
function Am(r, e, t) {
  const n = r.style.textAlign, a = [];
  let i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (si(o)) n && !o.getFormat() && o.setFormat(n), a.push(o);
    else if (i.push(o), s === e.length - 1 || s < e.length - 1 && si(e[s + 1])) {
      const l = t();
      l.setFormat(n), l.append(...i), a.push(l), i = [];
    }
  }
  return a;
}
function Mm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ci = Mm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Om = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Uc = (r) => Om ? (r || window).getSelection() : null;
function Dm(r, e = B()) {
  return e == null && ci(166), U(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : jc(r, e);
}
function Rm(r, e = B()) {
  return e == null && ci(166), U(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(Im(r, e));
}
function n6(r, e) {
  const t = r.getData("text/plain") || r.getData("text/uri-list");
  t != null && e.insertRawText(t);
}
function ll(r, e, t) {
  const n = r.getData("application/x-lexical-editor");
  if (n) try {
    const s = JSON.parse(n);
    if (s.namespace === t._config.namespace && Array.isArray(s.nodes))
      return ul(t, Fm(s.nodes), e);
  } catch {
  }
  const a = r.getData("text/html");
  if (a) try {
    const s = new DOMParser().parseFromString(function(o) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (l) => l }).createHTML(o) : o;
    }(a), "text/html");
    return ul(t, Tm(t, s), e);
  } catch {
  }
  const i = r.getData("text/plain") || r.getData("text/uri-list");
  if (i != null) if (U(e)) {
    const s = i.split(/(\r?\n|\t)/);
    s[s.length - 1] === "" && s.pop();
    for (let o = 0; o < s.length; o++) {
      const l = B();
      if (U(l)) {
        const u = s[o];
        u === `
` || u === `\r
` ? l.insertParagraph() : u === "	" ? l.insertNodes([oo()]) : l.insertText(u);
      }
    }
  } else e.insertRawText(i);
}
function ul(r, e, t) {
  r.dispatchCommand(ac, { nodes: e, selection: t }) || t.insertNodes(e);
}
function Wc(r, e, t, n = []) {
  let a = e === null || t.isSelected(e);
  const i = pe(t) && t.excludeFromCopy("html");
  let s = t;
  if (e !== null) {
    let u = rc(t);
    u = _e(u) && e !== null ? yc(e, u) : u, s = u;
  }
  const o = pe(s) ? s.getChildren() : [], l = function(u) {
    const c = u.exportJSON(), d = u.constructor;
    if (c.type !== d.getType() && ci(58, d.name), pe(u)) {
      const m = c.children;
      Array.isArray(m) || ci(59, d.name);
    }
    return c;
  }(s);
  if (_e(s)) {
    const u = s.__text;
    u.length > 0 ? l.text = u : a = !1;
  }
  for (let u = 0; u < o.length; u++) {
    const c = o[u], d = Wc(r, e, c, l.children);
    !a && pe(t) && d && t.extractWithChild(c, e, "clone") && (a = !0);
  }
  if (a && !i) n.push(l);
  else if (Array.isArray(l.children)) for (let u = 0; u < l.children.length; u++) {
    const c = l.children[u];
    n.push(c);
  }
  return a;
}
function Im(r, e) {
  const t = [], n = Ot().getChildren();
  for (let a = 0; a < n.length; a++)
    Wc(r, e, n[a], t);
  return { namespace: r._config.namespace, nodes: t };
}
function Fm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t], a = d1(n);
    _e(a) && U1(a), e.push(a);
  }
  return e;
}
let wn = null;
async function Ms(r, e, t) {
  if (wn !== null) return !1;
  if (e !== null) return new Promise((l, u) => {
    r.update(() => {
      l(cl(r, e, t));
    });
  });
  const n = r.getRootElement(), a = r._window == null ? window.document : r._window.document, i = Uc(r._window);
  if (n === null || i === null) return !1;
  const s = a.createElement("span");
  s.style.cssText = "position: fixed; top: -1000px;", s.append(a.createTextNode("#")), n.append(s);
  const o = new Range();
  return o.setStart(s, 0), o.setEnd(s, 1), i.removeAllRanges(), i.addRange(o), new Promise((l, u) => {
    const c = r.registerCommand(ic, (d) => (xr(d, ClipboardEvent) && (c(), wn !== null && (window.clearTimeout(wn), wn = null), l(cl(r, d, t))), !0), pt);
    wn = window.setTimeout(() => {
      c(), wn = null, l(!1);
    }, 50), a.execCommand("copy"), s.remove();
  });
}
function cl(r, e, t) {
  if (t === void 0) {
    const a = Uc(r._window);
    if (!a) return !1;
    const i = a.anchorNode, s = a.focusNode;
    if (i !== null && s !== null && !h1(r, i, s)) return !1;
    const o = B();
    if (o === null) return !1;
    t = Kc(o);
  }
  e.preventDefault();
  const n = e.clipboardData;
  return n !== null && (zm(n, t), !0);
}
const Lm = [["text/html", Dm], ["application/x-lexical-editor", Rm]];
function Kc(r = B()) {
  const e = { "text/plain": r ? r.getTextContent() : "" };
  if (r) {
    const t = m1();
    for (const [n, a] of Lm) {
      const i = a(t, r);
      i !== null && (e[n] = i);
    }
  }
  return e;
}
function zm(r, e) {
  for (const t in e) {
    const n = e[t];
    n !== void 0 && r.setData(t, n);
  }
}
function dl(r, e) {
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
const Fn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Pm = Fn && "documentMode" in document ? document.documentMode : null, Bm = !(!Fn || !("InputEvent" in window) || Pm) && "getTargetRanges" in new window.InputEvent("input"), jm = Fn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), $m = Fn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, qm = Fn && /^(?=.*Chrome).*/i.test(navigator.userAgent), Hm = Fn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !qm, Os = Ue("DRAG_DROP_PASTE_FILE");
class Na extends xt {
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
    return { blockquote: (e) => ({ conversion: Wm, priority: 0 }) };
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
    const t = ki();
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
function ki() {
  return ut(new Na());
}
function Um(r) {
  return r instanceof Na;
}
class Ea extends xt {
  static getType() {
    return "heading";
  }
  static clone(e) {
    return new Ea(e.__tag, e.__key);
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
    return { h1: (e) => ({ conversion: _n, priority: 0 }), h2: (e) => ({ conversion: _n, priority: 0 }), h3: (e) => ({ conversion: _n, priority: 0 }), h4: (e) => ({ conversion: _n, priority: 0 }), h5: (e) => ({ conversion: _n, priority: 0 }), h6: (e) => ({ conversion: _n, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && hl(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => hl(e) ? { conversion: (t) => ({ node: Qr("h1") }), priority: 3 } : null };
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
    const t = Qr(e.tag);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag(), type: "heading", version: 1 };
  }
  insertNewAfter(e, t = !0) {
    const n = e ? e.anchor.offset : 0, a = this.getLastDescendant(), i = !a || e && e.anchor.key === a.getKey() && n === a.getTextContentSize() || !e ? xe() : Qr(this.getTag()), s = this.getDirection();
    if (i.setDirection(s), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
      const o = xe();
      o.select(), this.replace(o, !0);
    }
    return i;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? xe() : Qr(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function hl(r) {
  return r.nodeName.toLowerCase() === "span" && r.style.fontSize === "26pt";
}
function _n(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = Qr(e), r.style !== null && (dc(r, t), t.setFormat(r.style.textAlign))), { node: t };
}
function Wm(r) {
  const e = ki();
  return r.style !== null && (e.setFormat(r.style.textAlign), dc(r, e)), { node: e };
}
function Qr(r) {
  return ut(new Ea(r));
}
function ml(r) {
  return r instanceof Ea;
}
function kn(r) {
  let e = null;
  if (xr(r, DragEvent) ? e = r.dataTransfer : xr(r, ClipboardEvent) && (e = r.clipboardData), e === null) return [!1, [], !1];
  const t = e.types, n = t.includes("Files"), a = t.includes("text/html") || t.includes("text/plain");
  return [n, Array.from(e.files), a];
}
function fl(r) {
  const e = B();
  if (!U(e)) return !1;
  const t = /* @__PURE__ */ new Set(), n = e.getNodes();
  for (let a = 0; a < n.length; a++) {
    const i = n[a], s = i.getKey();
    if (t.has(s)) continue;
    const o = he(i, (u) => pe(u) && !u.isInline());
    if (o === null) continue;
    const l = o.getKey();
    o.canIndent() && !t.has(l) && (t.add(l), r(o));
  }
  return t.size > 0;
}
function ja(r) {
  const e = Qe(r);
  return wr(e);
}
function Km(r) {
  return Re(r.registerCommand(ya, (e) => {
    const t = B();
    return !!gt(t) && (t.clear(), !0);
  }, 0), r.registerCommand(na, (e) => {
    const t = B();
    return !!U(t) && (t.deleteCharacter(e), !0);
  }, be), r.registerCommand(cc, (e) => {
    const t = B();
    return !!U(t) && (t.deleteWord(e), !0);
  }, be), r.registerCommand(Ss, (e) => {
    const t = B();
    return !!U(t) && (t.deleteLine(e), !0);
  }, be), r.registerCommand(uc, (e) => {
    const t = B();
    if (typeof e == "string") t !== null && t.insertText(e);
    else {
      if (t === null) return !1;
      const n = e.dataTransfer;
      if (n != null) ll(n, t, r);
      else if (U(t)) {
        const a = e.data;
        return a && t.insertText(a), !0;
      }
    }
    return !0;
  }, be), r.registerCommand(v1, () => {
    const e = B();
    return !!U(e) && (e.removeText(), !0);
  }, be), r.registerCommand(bt, (e) => {
    const t = B();
    return !!U(t) && (t.formatText(e), !0);
  }, be), r.registerCommand(er, (e) => {
    const t = B();
    if (!U(t) && !gt(t)) return !1;
    const n = t.getNodes();
    for (const a of n) {
      const i = he(a, (s) => pe(s) && !s.isInline());
      i !== null && i.setFormat(e);
    }
    return !0;
  }, be), r.registerCommand(P0, (e) => {
    const t = B();
    return !!U(t) && (t.insertLineBreak(e), !0);
  }, be), r.registerCommand(la, () => {
    const e = B();
    return !!U(e) && (e.insertParagraph(), !0);
  }, be), r.registerCommand(lc, () => (Rn([oo()]), !0), be), r.registerCommand(_i, () => fl((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), be), r.registerCommand(oi, () => fl((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), be), r.registerCommand(fn, (e) => {
    const t = B();
    if (gt(t) && !ja(e.target)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectPrevious(), !0;
    } else if (U(t)) {
      const n = _s(t.focus, !0);
      if (!e.shiftKey && wr(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, be), r.registerCommand(mn, (e) => {
    const t = B();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectNext(0, 0), !0;
    } else if (U(t)) {
      if (function(a) {
        const i = a.focus;
        return i.key === "root" && i.offset === Ot().getChildrenSize();
      }(t)) return e.preventDefault(), !0;
      const n = _s(t.focus, !1);
      if (!e.shiftKey && wr(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, be), r.registerCommand(wa, (e) => {
    const t = B();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
    }
    if (!U(t)) return !1;
    if (K0(t, !0)) {
      const n = e.shiftKey;
      return e.preventDefault(), G0(t, n, !0), !0;
    }
    return !1;
  }, be), r.registerCommand(wi, (e) => {
    const t = B();
    if (gt(t) && !ja(e.target)) {
      const a = t.getNodes();
      if (a.length > 0) return e.preventDefault(), a[0].selectNext(0, 0), !0;
    }
    if (!U(t)) return !1;
    const n = e.shiftKey;
    return !!K0(t, !1) && (e.preventDefault(), G0(t, n, !1), !0);
  }, be), r.registerCommand(va, (e) => {
    if (ja(e.target)) return !1;
    const t = B();
    if (!U(t)) return !1;
    e.preventDefault();
    const { anchor: n } = t, a = n.getNode();
    return t.isCollapsed() && n.offset === 0 && !io(a) && Ci(a).getIndent() > 0 ? r.dispatchCommand(oi, void 0) : r.dispatchCommand(na, !0);
  }, be), r.registerCommand(ba, (e) => {
    if (ja(e.target)) return !1;
    const t = B();
    return !!U(t) && (e.preventDefault(), r.dispatchCommand(na, !1));
  }, be), r.registerCommand(co, (e) => {
    const t = B();
    if (!U(t)) return !1;
    if (e !== null) {
      if (($m || jm || Hm) && Bm) return !1;
      if (e.preventDefault(), e.shiftKey) return r.dispatchCommand(P0, !1);
    }
    return r.dispatchCommand(la, void 0);
  }, be), r.registerCommand(Dn, () => {
    const e = B();
    return !!U(e) && (r.blur(), !0);
  }, be), r.registerCommand(xi, (e) => {
    const [, t] = kn(e);
    if (t.length > 0) {
      const a = dl(e.clientX, e.clientY);
      if (a !== null) {
        const { offset: i, node: s } = a, o = Qe(s);
        if (o !== null) {
          const l = xa();
          if (_e(o)) l.anchor.set(o.getKey(), i, "text"), l.focus.set(o.getKey(), i, "text");
          else {
            const c = o.getParentOrThrow().getKey(), d = o.getIndexWithinParent() + 1;
            l.anchor.set(c, d, "element"), l.focus.set(c, d, "element");
          }
          const u = uo(l);
          yt(u);
        }
        r.dispatchCommand(Os, t);
      }
      return e.preventDefault(), !0;
    }
    const n = B();
    return !!U(n);
  }, be), r.registerCommand(lo, (e) => {
    const [t] = kn(e), n = B();
    return !(t && !U(n));
  }, be), r.registerCommand(yi, (e) => {
    const [t] = kn(e), n = B();
    if (t && !U(n)) return !1;
    const a = dl(e.clientX, e.clientY);
    if (a !== null) {
      const i = Qe(a.node);
      wr(i) && e.preventDefault();
    }
    return !0;
  }, be), r.registerCommand(p1, () => (g1(), !0), be), r.registerCommand(ic, (e) => (Ms(r, xr(e, ClipboardEvent) ? e : null), !0), be), r.registerCommand(oc, (e) => (async function(t, n) {
    await Ms(n, xr(t, ClipboardEvent) ? t : null), n.update(() => {
      const a = B();
      U(a) ? a.removeText() : gt(a) && a.getNodes().forEach((i) => i.remove());
    });
  }(e, r), !0), be), r.registerCommand(sc, (e) => {
    const [, t, n] = kn(e);
    return t.length > 0 && !n ? (r.dispatchCommand(Os, t), !0) : f1(e.target) ? !1 : B() !== null && (function(a, i) {
      a.preventDefault(), i.update(() => {
        const s = B(), o = xr(a, InputEvent) || xr(a, KeyboardEvent) ? null : a.clipboardData;
        o != null && s !== null && ll(o, s, i);
      }, { tag: "paste" });
    }(e, r), !0);
  }, be));
}
const Eo = /^(\d+(?:\.\d+)?)px$/, qe = { BOTH: 3, COLUMN: 2, NO_STATUS: 0, ROW: 1 };
class sr extends xt {
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
    return { td: (e) => ({ conversion: pl, priority: 0 }), th: (e) => ({ conversion: pl, priority: 0 }) };
  }
  static importJSON(e) {
    const t = e.colSpan || 1, n = e.rowSpan || 1;
    return Jt(e.headerState, t, e.width || void 0).setRowSpan(n).setBackgroundColor(e.backgroundColor || null);
  }
  constructor(e = qe.NO_STATUS, t = 1, n, a) {
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
  setHeaderStyles(e, t = qe.BOTH) {
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
    return this.getLatest().__headerState !== qe.NO_STATUS;
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
function pl(r) {
  const e = r, t = r.nodeName.toLowerCase();
  let n;
  Eo.test(e.style.width) && (n = parseFloat(e.style.width));
  const a = Jt(t === "th" ? qe.ROW : qe.NO_STATUS, e.colSpan, n);
  a.__rowSpan = e.rowSpan;
  const i = e.style.backgroundColor;
  i !== "" && (a.__backgroundColor = i);
  const s = e.style, o = (s && s.textDecoration || "").split(" "), l = s.fontWeight === "700" || s.fontWeight === "bold", u = o.includes("line-through"), c = s.fontStyle === "italic", d = o.includes("underline");
  return { after: (m) => (m.length === 0 && m.push(xe()), m), forChild: (m, g) => {
    if (ae(g) && !pe(m)) {
      const v = xe();
      return ga(m) && m.getTextContent() === `
` ? null : (_e(m) && (l && m.toggleFormat("bold"), u && m.toggleFormat("strikethrough"), c && m.toggleFormat("italic"), d && m.toggleFormat("underline")), v.append(m), v);
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
const To = Ue("INSERT_TABLE_COMMAND");
function Gm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ce = Gm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Ym = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
class Ln extends xt {
  static getType() {
    return "tablerow";
  }
  static clone(e) {
    return new Ln(e.__height, e.__key);
  }
  static importDOM() {
    return { tr: (e) => ({ conversion: Vm, priority: 0 }) };
  }
  static importJSON(e) {
    return da(e.height);
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
function Vm(r) {
  const e = r;
  let t;
  return Eo.test(e.style.height) && (t = parseFloat(e.style.height)), { node: da(t) };
}
function da(r) {
  return ut(new Ln(r));
}
function nt(r) {
  return r instanceof Ln;
}
function Xm(r, e, t = !0) {
  const n = Ro();
  for (let a = 0; a < r; a++) {
    const i = da();
    for (let s = 0; s < e; s++) {
      let o = qe.NO_STATUS;
      typeof t == "object" ? (a === 0 && t.rows && (o |= qe.ROW), s === 0 && t.columns && (o |= qe.COLUMN)) : t && (a === 0 && (o |= qe.ROW), s === 0 && (o |= qe.COLUMN));
      const l = Jt(o), u = xe();
      u.append(Ir()), l.append(u), i.append(l);
    }
    n.append(i);
  }
  return n;
}
function Jm(r) {
  const e = he(r, (t) => ae(t));
  return ae(e) ? e : null;
}
function Gc(r) {
  const e = he(r, (t) => nt(t));
  if (nt(e)) return e;
  throw new Error("Expected table cell to be inside of table row.");
}
function br(r) {
  const e = he(r, (t) => Ke(t));
  if (Ke(e)) return e;
  throw new Error("Expected table cell to be inside of table.");
}
function Ao(r) {
  const e = Gc(r);
  return br(e).getChildren().findIndex((t) => t.is(e));
}
function Yc(r) {
  return Gc(r).getChildren().findIndex((e) => e.is(r));
}
const Ds = (r, e) => r === qe.BOTH || r === e ? e : qe.NO_STATUS;
function Vc(r = !0) {
  const e = B();
  U(e) || Me(e) || Ce(188);
  const t = e.focus.getNode(), [n, , a] = vt(t), [i, s] = Wt(a, n, n), o = i[0].length, { startRow: l } = s;
  let u = null;
  if (r) {
    const c = l + n.__rowSpan - 1, d = i[c], m = da();
    for (let v = 0; v < o; v++) {
      const { cell: y, startRow: x } = d[v];
      if (x + y.__rowSpan - 1 <= c) {
        const _ = d[v].cell.__headerState, w = Ds(_, qe.COLUMN);
        m.append(Jt(w).append(xe()));
      } else y.setRowSpan(y.__rowSpan + 1);
    }
    const g = a.getChildAtIndex(c);
    nt(g) || Ce(145), g.insertAfter(m), u = m;
  } else {
    const c = i[l], d = da();
    for (let g = 0; g < o; g++) {
      const { cell: v, startRow: y } = c[g];
      if (y === l) {
        const x = c[g].cell.__headerState, _ = Ds(x, qe.COLUMN);
        d.append(Jt(_).append(xe()));
      } else v.setRowSpan(v.__rowSpan + 1);
    }
    const m = a.getChildAtIndex(l);
    nt(m) || Ce(145), m.insertBefore(d), u = d;
  }
  return u;
}
function Xc(r = !0) {
  const e = B();
  U(e) || Me(e) || Ce(188);
  const t = e.anchor.getNode(), n = e.focus.getNode(), [a] = vt(t), [i, , s] = vt(n), [o, l, u] = Wt(s, i, a), c = o.length, d = r ? Math.max(l.startColumn, u.startColumn) : Math.min(l.startColumn, u.startColumn), m = r ? d + i.__colSpan - 1 : d - 1, g = s.getFirstChild();
  nt(g) || Ce(120);
  let v = null;
  function y(w = qe.NO_STATUS) {
    const C = Jt(w).append(xe());
    return v === null && (v = C), C;
  }
  let x = g;
  e: for (let w = 0; w < c; w++) {
    if (w !== 0) {
      const M = x.getNextSibling();
      nt(M) || Ce(121), x = M;
    }
    const C = o[w], T = C[m < 0 ? 0 : m].cell.__headerState, k = Ds(T, qe.ROW);
    if (m < 0) {
      Mo(x, y(k));
      continue;
    }
    const { cell: N, startColumn: I, startRow: D } = C[m];
    if (I + N.__colSpan - 1 <= m) {
      let M = N, F = D, z = m;
      for (; F !== w && M.__rowSpan > 1; ) {
        if (z -= N.__colSpan, !(z >= 0)) {
          x.append(y(k));
          continue e;
        }
        {
          const { cell: j, startRow: P } = C[z];
          M = j, F = P;
        }
      }
      M.insertAfter(y(k));
    } else N.setColSpan(N.__colSpan + 1);
  }
  v !== null && ha(v);
  const _ = s.getColWidths();
  if (_) {
    const w = [..._], C = m < 0 ? 0 : m, T = w[C];
    w.splice(C, 0, T), s.setColWidths(w);
  }
  return v;
}
function Zm() {
  const r = B();
  U(r) || Me(r) || Ce(188);
  const [e, t] = r.isBackward() ? [r.focus.getNode(), r.anchor.getNode()] : [r.anchor.getNode(), r.focus.getNode()], [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Wt(a, n, i), { startRow: u } = o, { startRow: c } = l, d = c + i.__rowSpan - 1;
  if (s.length === d - u + 1) return void a.remove();
  const m = s[0].length, g = s[d + 1], v = a.getChildAtIndex(d + 1);
  for (let y = d; y >= u; y--) {
    for (let _ = m - 1; _ >= 0; _--) {
      const { cell: w, startRow: C, startColumn: T } = s[y][_];
      if (T === _ && (y === u && C < u && w.setRowSpan(w.__rowSpan - (C - u)), C >= u && C + w.__rowSpan - 1 > d)) if (w.setRowSpan(w.__rowSpan - (d - C + 1)), v === null && Ce(122), _ === 0) Mo(v, w);
      else {
        const { cell: k } = g[_ - 1];
        k.insertAfter(w);
      }
    }
    const x = a.getChildAtIndex(y);
    nt(x) || Ce(206, String(y)), x.remove();
  }
  if (g !== void 0) {
    const { cell: y } = g[0];
    ha(y);
  } else {
    const y = s[u - 1], { cell: x } = y[0];
    ha(x);
  }
}
function Qm() {
  const r = B();
  U(r) || Me(r) || Ce(188);
  const e = r.anchor.getNode(), t = r.focus.getNode(), [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Wt(a, n, i), { startColumn: u } = o, { startRow: c, startColumn: d } = l, m = Math.min(u, d), g = Math.max(u + n.__colSpan - 1, d + i.__colSpan - 1), v = g - m + 1;
  if (s[0].length === g - m + 1) return a.selectPrevious(), void a.remove();
  const y = s.length;
  for (let C = 0; C < y; C++) for (let T = m; T <= g; T++) {
    const { cell: k, startColumn: N } = s[C][T];
    if (N < m) {
      if (T === m) {
        const I = m - N;
        k.setColSpan(k.__colSpan - Math.min(v, k.__colSpan - I));
      }
    } else if (N + k.__colSpan - 1 > g) {
      if (T === g) {
        const I = g - N + 1;
        k.setColSpan(k.__colSpan - I);
      }
    } else k.remove();
  }
  const x = s[c], _ = u > d ? x[u + n.__colSpan] : x[d + i.__colSpan];
  if (_ !== void 0) {
    const { cell: C } = _;
    ha(C);
  } else {
    const C = d < u ? x[d - 1] : x[u - 1], { cell: T } = C;
    ha(T);
  }
  const w = a.getColWidths();
  if (w) {
    const C = [...w];
    C.splice(m, v), a.setColWidths(C);
  }
}
function ha(r) {
  const e = r.getFirstDescendant();
  e == null ? r.selectStart() : e.getParentOrThrow().selectStart();
}
function Mo(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function ef() {
  const r = B();
  U(r) || Me(r) || Ce(188);
  const e = r.anchor.getNode(), [t, n, a] = vt(e), i = t.__colSpan, s = t.__rowSpan;
  if (i === 1 && s === 1) return;
  const [o, l] = Wt(a, t, t), { startColumn: u, startRow: c } = l, d = t.__headerState & qe.COLUMN, m = Array.from({ length: i }, (y, x) => {
    let _ = d;
    for (let w = 0; _ !== 0 && w < o.length; w++) _ &= o[w][x + u].cell.__headerState;
    return _;
  }), g = t.__headerState & qe.ROW, v = Array.from({ length: s }, (y, x) => {
    let _ = g;
    for (let w = 0; _ !== 0 && w < o[0].length; w++) _ &= o[x + c][w].cell.__headerState;
    return _;
  });
  if (i > 1) {
    for (let y = 1; y < i; y++) t.insertAfter(Jt(m[y] | v[0]).append(xe()));
    t.setColSpan(1);
  }
  if (s > 1) {
    let y;
    for (let x = 1; x < s; x++) {
      const _ = c + x, w = o[_];
      y = (y || n).getNextSibling(), nt(y) || Ce(125);
      let C = null;
      for (let T = 0; T < u; T++) {
        const k = w[T], N = k.cell;
        k.startRow === _ && (C = N), N.__colSpan > 1 && (T += N.__colSpan - 1);
      }
      if (C === null) for (let T = i - 1; T >= 0; T--) Mo(y, Jt(m[T] | v[x]).append(xe()));
      else for (let T = i - 1; T >= 0; T--) C.insertAfter(Jt(m[T] | v[x]).append(xe()));
    }
    t.setRowSpan(1);
  }
}
function Wt(r, e, t) {
  const [n, a, i] = Oo(r, e, t);
  return a === null && Ce(207), i === null && Ce(208), [n, a, i];
}
function Oo(r, e, t) {
  const n = [];
  let a = null, i = null;
  function s(l) {
    let u = n[l];
    return u === void 0 && (n[l] = u = []), u;
  }
  const o = r.getChildren();
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    nt(u) || Ce(209);
    for (let c = u.getFirstChild(), d = 0; c != null; c = c.getNextSibling()) {
      ae(c) || Ce(147);
      const m = s(l);
      for (; m[d] !== void 0; ) d++;
      const g = { cell: c, startColumn: d, startRow: l }, { __rowSpan: v, __colSpan: y } = c;
      for (let x = 0; x < v && !(l + x >= o.length); x++) {
        const _ = s(l + x);
        for (let w = 0; w < y; w++) _[d + w] = g;
      }
      e !== null && a === null && e.is(c) && (a = g), t !== null && i === null && t.is(c) && (i = g);
    }
  }
  return [n, a, i];
}
function vt(r) {
  let e;
  if (r instanceof sr) e = r;
  else if ("__type" in r) {
    const a = he(r, ae);
    ae(a) || Ce(148), e = a;
  } else {
    const a = he(r.getNode(), ae);
    ae(a) || Ce(148), e = a;
  }
  const t = e.getParent();
  nt(t) || Ce(149);
  const n = t.getParent();
  return Ke(n) || Ce(210), [e, t, n];
}
function gl(r) {
  const [e, , t] = vt(r), n = t.getChildren(), a = n.length, i = n[0].getChildren().length, s = new Array(a);
  for (let o = 0; o < a; o++) s[o] = new Array(i);
  for (let o = 0; o < a; o++) {
    const l = n[o].getChildren();
    let u = 0;
    for (let c = 0; c < l.length; c++) {
      for (; s[o][u]; ) u++;
      const d = l[c], m = d.__rowSpan || 1, g = d.__colSpan || 1;
      for (let v = 0; v < m; v++) for (let y = 0; y < g; y++) s[o + v][u + y] = d;
      if (e === d) return { colSpan: g, columnIndex: u, rowIndex: o, rowSpan: m };
      u += g;
    }
  }
  return null;
}
class Ni {
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
    return !!Me(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, n) {
    this.dirty = !0, this.tableKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null;
  }
  clone() {
    return new Ni(this.tableKey, this.anchor, this.focus);
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
      $r(i) && (t |= i.getTextFormat());
    });
    const n = Rr[e];
    return !!(t & n);
  }
  insertNodes(e) {
    const t = this.focus.getNode();
    pe(t) || Ce(151), uo(t.select(0, t.getChildrenSize())).insertNodes(e);
  }
  getShape() {
    const e = At(this.anchor.key);
    ae(e) || Ce(152);
    const t = gl(e);
    t === null && Ce(153);
    const n = At(this.focus.key);
    ae(n) || Ce(154);
    const a = gl(n);
    a === null && Ce(155);
    const i = Math.min(t.columnIndex, a.columnIndex), s = Math.max(t.columnIndex + t.colSpan - 1, a.columnIndex + a.colSpan - 1), o = Math.min(t.rowIndex, a.rowIndex), l = Math.max(t.rowIndex + t.rowSpan - 1, a.rowIndex + a.rowSpan - 1);
    return { fromX: Math.min(i, s), fromY: Math.min(o, l), toX: Math.max(i, s), toY: Math.max(o, l) };
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) return e;
    const t = this.anchor.getNode(), n = this.focus.getNode(), a = he(t, ae), i = he(n, ae);
    ae(a) || Ce(152), ae(i) || Ce(154);
    const s = a.getParent();
    nt(s) || Ce(156);
    const o = s.getParent();
    Ke(o) || Ce(157);
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
    const [u, c, d] = Wt(o, a, i);
    let m = Math.min(c.startColumn, d.startColumn), g = Math.min(c.startRow, d.startRow), v = Math.max(c.startColumn + c.cell.__colSpan - 1, d.startColumn + d.cell.__colSpan - 1), y = Math.max(c.startRow + c.cell.__rowSpan - 1, d.startRow + d.cell.__rowSpan - 1), x = m, _ = g, w = m, C = g;
    function T(D) {
      const { cell: M, startColumn: F, startRow: z } = D;
      m = Math.min(m, F), g = Math.min(g, z), v = Math.max(v, F + M.__colSpan - 1), y = Math.max(y, z + M.__rowSpan - 1);
    }
    for (; m < x || g < _ || v > w || y > C; ) {
      if (m < x) {
        const D = C - _, M = x - 1;
        for (let F = 0; F <= D; F++) T(u[_ + F][M]);
        x = M;
      }
      if (g < _) {
        const D = w - x, M = _ - 1;
        for (let F = 0; F <= D; F++) T(u[M][x + F]);
        _ = M;
      }
      if (v > w) {
        const D = C - _, M = w + 1;
        for (let F = 0; F <= D; F++) T(u[_ + F][M]);
        w = M;
      }
      if (y > C) {
        const D = w - x, M = C + 1;
        for (let F = 0; F <= D; F++) T(u[M][x + F]);
        C = M;
      }
    }
    const k = /* @__PURE__ */ new Map([[o.getKey(), o]]);
    let N = null;
    for (let D = g; D <= y; D++) for (let M = m; M <= v; M++) {
      const { cell: F } = u[D][M], z = F.getParent();
      nt(z) || Ce(160), z !== N && k.set(z.getKey(), z), k.set(F.getKey(), F);
      for (const j of tf(F)) k.set(j.getKey(), j);
      N = z;
    }
    const I = Array.from(k.values());
    return y1() || (this._cachedNodes = I), I;
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
function Me(r) {
  return r instanceof Ni;
}
function vl() {
  const r = B0("root", 0, "element"), e = B0("root", 0, "element");
  return new Ni("root", r, e);
}
function tf(r) {
  const e = [], t = [r];
  for (; t.length > 0; ) {
    const n = t.pop();
    n === void 0 && Ce(112), pe(n) && t.unshift(...n.getChildren()), n !== r && e.push(n);
  }
  return e;
}
class rf {
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
        this.table = aa(a);
      });
    });
    this.editor.update(() => {
      const t = this.editor.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      this.table = aa(t), e.observe(t, { attributes: !0, childList: !0, subtree: !0 });
    });
  }
  clearHighlight() {
    const e = this.editor;
    this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.enableHighlightStyle(), e.update(() => {
      if (!Ke(At(this.tableNodeKey))) throw new Error("Expected TableNode.");
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      const n = aa(t);
      $a(e, n, null), yt(null), e.dispatchCommand(yr, void 0);
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
      this.tableSelection = e, this.isHighlightingCells = !0, this.disableHighlightStyle(), $a(t, this.table, this.tableSelection);
    } else e == null ? this.clearHighlight() : (this.tableNodeKey = e.tableKey, this.updateTableTableSelection(e));
  }
  setFocusCellForSelection(e, t = !1) {
    const n = this.editor;
    n.update(() => {
      const a = At(this.tableNodeKey);
      if (!Ke(a)) throw new Error("Expected TableNode.");
      if (!n.getElementByKey(this.tableNodeKey)) throw new Error("Expected to find TableElement in DOM");
      const i = e.x, s = e.y;
      if (this.focusCell = e, this.anchorCell !== null) {
        const o = Jc(n._window);
        o && o.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
      }
      if (this.isHighlightingCells || this.anchorX === i && this.anchorY === s && !t) {
        if (i === this.focusX && s === this.focusY) return;
      } else this.isHighlightingCells = !0, this.disableHighlightStyle();
      if (this.focusX = i, this.focusY = s, this.isHighlightingCells) {
        const o = Qe(e.elem);
        if (this.tableSelection != null && this.anchorCellNodeKey != null && ae(o) && a.is(Nn(o))) {
          const l = o.getKey();
          this.tableSelection = this.tableSelection.clone() || vl(), this.focusCellNodeKey = l, this.tableSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), yt(this.tableSelection), n.dispatchCommand(yr, void 0), $a(n, this.table, this.tableSelection);
        }
      }
    });
  }
  setAnchorCellForSelection(e) {
    this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.editor.update(() => {
      const t = Qe(e.elem);
      if (ae(t)) {
        const n = t.getKey();
        this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : vl(), this.anchorCellNodeKey = n;
      }
    });
  }
  formatCells(e) {
    this.editor.update(() => {
      const t = B();
      Me(t) || Ce(11);
      const n = xa(), a = n.anchor, i = n.focus, s = t.getNodes().filter(ae), o = s[0].getFirstChild(), l = $r(o) ? o.getFormatFlags(e, null) : null;
      s.forEach((u) => {
        a.set(u.getKey(), 0, "element"), i.set(u.getKey(), u.getChildrenSize(), "element"), n.formatText(e, l);
      }), yt(t), this.editor.dispatchCommand(yr, void 0);
    });
  }
  clearText() {
    const e = this.editor;
    e.update(() => {
      const t = At(this.tableNodeKey);
      if (!Ke(t)) throw new Error("Expected TableNode.");
      const n = B();
      Me(n) || Ce(11);
      const a = n.getNodes().filter(ae);
      a.length !== this.table.columns * this.table.rows ? (a.forEach((i) => {
        if (pe(i)) {
          const s = xe(), o = Ir();
          s.append(o), i.append(s), i.getChildren().forEach((l) => {
            l !== s && l.remove();
          });
        }
      }), $a(e, this.table, null), yt(null), e.dispatchCommand(yr, void 0)) : (t.selectPrevious(), t.remove(), Ot().selectStart());
    });
  }
}
const Rs = "__lexicalTableSelection", Jc = (r) => Ym ? (r || window).getSelection() : null;
function nf(r, e, t, n) {
  const a = t.getRootElement();
  if (a === null) throw new Error("No root element.");
  const i = new rf(t, r.getKey()), s = t._window || window;
  (function(c, d) {
    Is(c) !== null && Ce(205), c[Rs] = d;
  })(e, i), i.listenersToRemove.add(() => function(c, d) {
    Is(c) === d && delete c[Rs];
  }(e, i));
  const o = () => {
    const c = () => {
      i.isSelecting = !1, s.removeEventListener("mouseup", c), s.removeEventListener("mousemove", d);
    }, d = (m) => {
      setTimeout(() => {
        if (1 & ~m.buttons && i.isSelecting) return i.isSelecting = !1, s.removeEventListener("mouseup", c), void s.removeEventListener("mousemove", d);
        const g = Fs(m.target);
        g === null || i.anchorX === g.x && i.anchorY === g.y || (m.preventDefault(), i.setFocusCellForSelection(g));
      }, 0);
    };
    return { onMouseMove: d, onMouseUp: c };
  };
  e.addEventListener("mousedown", (c) => {
    setTimeout(() => {
      if (c.button !== 0 || !s) return;
      const d = Fs(c.target);
      d !== null && (pr(c), i.setAnchorCellForSelection(d));
      const { onMouseUp: m, onMouseMove: g } = o();
      i.isSelecting = !0, s.addEventListener("mouseup", m, i.listenerOptions), s.addEventListener("mousemove", g, i.listenerOptions);
    }, 0);
  }, i.listenerOptions), s.addEventListener("mousedown", (c) => {
    c.button === 0 && t.update(() => {
      const d = B(), m = c.target;
      Me(d) && d.tableKey === i.tableNodeKey && a.contains(m) && i.clearHighlight();
    });
  }, i.listenerOptions), i.listenersToRemove.add(t.registerCommand(mn, (c) => ta(t, c, "down", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(fn, (c) => ta(t, c, "up", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(wa, (c) => ta(t, c, "backward", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(wi, (c) => ta(t, c, "forward", r, i), Lt)), i.listenersToRemove.add(t.registerCommand(Dn, (c) => {
    const d = B();
    if (Me(d)) {
      const m = he(d.focus.getNode(), ae);
      if (ae(m)) return pr(c), m.selectEnd(), !0;
    }
    return !1;
  }, Lt)), [cc, Ss, na].forEach((c) => {
    i.listenersToRemove.add(t.registerCommand(c, /* @__PURE__ */ ((d) => () => {
      const m = B();
      if (!Vr(m, r)) return !1;
      if (Me(m)) return i.clearText(), !0;
      if (U(m)) {
        const g = he(m.anchor.getNode(), (T) => ae(T));
        if (!ae(g)) return !1;
        const v = m.anchor.getNode(), y = m.focus.getNode(), x = r.isParentOf(v), _ = r.isParentOf(y);
        if (x && !_ || _ && !x) return i.clearText(), !0;
        const w = he(m.anchor.getNode(), (T) => pe(T)), C = w && he(w, (T) => pe(T) && ae(T.getParent()));
        if (!pe(C) || !pe(w)) return !1;
        if (d === Ss && C.getPreviousSibling() === null) return !0;
      }
      return !1;
    })(c), pt));
  });
  const l = (c) => {
    const d = B();
    if (!Me(d) && !U(d)) return !1;
    const m = r.isParentOf(d.anchor.getNode());
    if (m !== r.isParentOf(d.focus.getNode())) {
      const g = m ? "anchor" : "focus", v = m ? "focus" : "anchor", { key: y, offset: x, type: _ } = d[v];
      return r[d[g].isBefore(d[v]) ? "selectPrevious" : "selectNext"]()[v].set(y, x, _), !1;
    }
    return !!Me(d) && (c && (c.preventDefault(), c.stopPropagation()), i.clearText(), !0);
  };
  function u(c) {
    const d = r.getCordsFromCellNode(c, i.table);
    return r.getDOMCellFromCordsOrThrow(d.x, d.y, i.table);
  }
  return i.listenersToRemove.add(t.registerCommand(va, l, pt)), i.listenersToRemove.add(t.registerCommand(ba, l, pt)), i.listenersToRemove.add(t.registerCommand(oc, (c) => {
    const d = B();
    if (d) {
      if (!Me(d) && !U(d)) return !1;
      Ms(t, xr(c, ClipboardEvent) ? c : null, Kc(d));
      const m = l(c);
      return U(d) ? (d.removeText(), !0) : m;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(bt, (c) => {
    const d = B();
    if (!Vr(d, r)) return !1;
    if (Me(d)) return i.formatCells(c), !0;
    if (U(d)) {
      const m = he(d.anchor.getNode(), (g) => ae(g));
      if (!ae(m)) return !1;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(er, (c) => {
    const d = B();
    if (!Me(d) || !Vr(d, r)) return !1;
    const m = d.anchor.getNode(), g = d.focus.getNode();
    if (!ae(m) || !ae(g)) return !1;
    const [v, y, x] = Wt(r, m, g), _ = Math.max(y.startRow, x.startRow), w = Math.max(y.startColumn, x.startColumn), C = Math.min(y.startRow, x.startRow), T = Math.min(y.startColumn, x.startColumn);
    for (let k = C; k <= _; k++) for (let N = T; N <= w; N++) {
      const I = v[k][N].cell;
      I.setFormat(c);
      const D = I.getChildren();
      for (let M = 0; M < D.length; M++) {
        const F = D[M];
        pe(F) && !F.isInline() && F.setFormat(c);
      }
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(uc, (c) => {
    const d = B();
    if (!Vr(d, r)) return !1;
    if (Me(d)) return i.clearHighlight(), !1;
    if (U(d)) {
      const m = he(d.anchor.getNode(), (g) => ae(g));
      if (!ae(m)) return !1;
      if (typeof c == "string") {
        const g = xl(t, d, r);
        if (g) return yl(g, r, [Ir(c)]), !0;
      }
    }
    return !1;
  }, pt)), n && i.listenersToRemove.add(t.registerCommand(Si, (c) => {
    const d = B();
    if (!U(d) || !d.isCollapsed() || !Vr(d, r)) return !1;
    const m = Yi(d.anchor.getNode());
    if (m === null) return !1;
    pr(c);
    const g = r.getCordsFromCellNode(m, i.table);
    return Zc(i, r, g.x, g.y, c.shiftKey ? "backward" : "forward"), !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(hc, (c) => r.isSelected(), Lt)), i.listenersToRemove.add(t.registerCommand(ac, (c) => {
    const { nodes: d, selection: m } = c, g = m.getStartEndPoints(), v = Me(m), y = U(m) && he(m.anchor.getNode(), (J) => ae(J)) !== null && he(m.focus.getNode(), (J) => ae(J)) !== null || v;
    if (d.length !== 1 || !Ke(d[0]) || !y || g === null) return !1;
    const [x] = g, _ = d[0], w = _.getChildren(), C = _.getFirstChildOrThrow().getChildrenSize(), T = _.getChildrenSize(), k = he(x.getNode(), (J) => ae(J)), N = k && he(k, (J) => nt(J)), I = N && he(N, (J) => Ke(J));
    if (!ae(k) || !nt(N) || !Ke(I)) return !1;
    const D = N.getIndexWithinParent(), M = Math.min(I.getChildrenSize() - 1, D + T - 1), F = k.getIndexWithinParent(), z = Math.min(N.getChildrenSize() - 1, F + C - 1), j = Math.min(F, z), P = Math.min(D, M), X = Math.max(F, z), Y = Math.max(D, M), ee = I.getChildren();
    let ce = 0;
    for (let J = P; J <= Y; J++) {
      const de = ee[J];
      if (!nt(de)) return !1;
      const le = w[ce];
      if (!nt(le)) return !1;
      const Ne = de.getChildren(), se = le.getChildren();
      let Pe = 0;
      for (let Be = j; Be <= X; Be++) {
        const je = Ne[Be];
        if (!ae(je)) return !1;
        const dt = se[Pe];
        if (!ae(dt)) return !1;
        const Je = je.getChildren();
        dt.getChildren().forEach((Ge) => {
          _e(Ge) && xe().append(Ge), je.append(Ge);
        }), Je.forEach((Ge) => Ge.remove()), Pe++;
      }
      ce++;
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(yr, () => {
    const c = B(), d = so();
    if (U(c)) {
      const { anchor: m, focus: g } = c, v = m.getNode(), y = g.getNode(), x = Yi(v), _ = Yi(y), w = !(!x || !r.is(Nn(x))), C = !(!_ || !r.is(Nn(_))), T = w !== C, k = w && C, N = c.isBackward();
      if (T) {
        const I = c.clone();
        if (C) {
          const [D] = Wt(r, _, _), M = D[0][0].cell, F = D[D.length - 1].at(-1).cell;
          I.focus.set(N ? M.getKey() : F.getKey(), N ? M.getChildrenSize() : F.getChildrenSize(), "element");
        } else if (w) {
          const [D] = Wt(r, x, x), M = D[0][0].cell, F = D[D.length - 1].at(-1).cell;
          I.anchor.set(N ? F.getKey() : M.getKey(), N ? F.getChildrenSize() : 0, "element");
        }
        yt(I), bl(t, i);
      } else k && (x.is(_) || (i.setAnchorCellForSelection(u(x)), i.setFocusCellForSelection(u(_), !0), i.isSelecting || setTimeout(() => {
        const { onMouseUp: I, onMouseMove: D } = o();
        i.isSelecting = !0, s.addEventListener("mouseup", I), s.addEventListener("mousemove", D);
      }, 0)));
    } else if (c && Me(c) && c.is(d) && c.tableKey === r.getKey()) {
      const m = Jc(t._window);
      if (m && m.anchorNode && m.focusNode) {
        const g = Qe(m.focusNode), v = g && !r.is(Nn(g)), y = Qe(m.anchorNode), x = y && r.is(Nn(y));
        if (v && x && m.rangeCount > 0) {
          const _ = b1(m, t);
          _ && (_.anchor.set(r.getKey(), c.isBackward() ? r.getChildrenSize() : 0, "element"), m.removeAllRanges(), yt(_));
        }
      }
    }
    return c && !c.is(d) && (Me(c) || Me(d)) && i.tableSelection && !i.tableSelection.is(d) ? (Me(c) && c.tableKey === i.tableNodeKey ? i.updateTableTableSelection(c) : !Me(c) && Me(d) && d.tableKey === i.tableNodeKey && i.updateTableTableSelection(null), !1) : (i.hasHijackedSelectionStyles && !r.isSelected() ? function(m, g) {
      g.enableHighlightStyle(), Do(g.table, (v) => {
        const y = v.elem;
        v.highlighted = !1, ed(m, v), y.getAttribute("style") || y.removeAttribute("style");
      });
    }(t, i) : !i.hasHijackedSelectionStyles && r.isSelected() && bl(t, i), !1);
  }, pt)), i.listenersToRemove.add(t.registerCommand(la, () => {
    const c = B();
    if (!U(c) || !c.isCollapsed() || !Vr(c, r)) return !1;
    const d = xl(t, c, r);
    return !!d && (yl(d, r), !0);
  }, pt)), i;
}
function Is(r) {
  return r[Rs] || null;
}
function Fs(r) {
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
function aa(r) {
  const e = [], t = { columns: 0, domRows: e, rows: 0 };
  let n = r.querySelector("tr"), a = 0, i = 0;
  for (e.length = 0; n != null; ) {
    const s = n.nodeName;
    if (s === "TD" || s === "TH") {
      const u = { elem: n, hasBackgroundColor: n.style.backgroundColor !== "", highlighted: !1, x: a, y: i };
      n._cell = u;
      let c = e[i];
      c === void 0 && (c = e[i] = []), c[a] = u;
    } else {
      const u = n.firstChild;
      if (u != null) {
        n = u;
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
      const u = l.nextSibling;
      if (u == null) break;
      i++, a = 0, n = u;
    }
  }
  return t.columns = a + 1, t.rows = i + 1, t;
}
function $a(r, e, t) {
  const n = new Set(t ? t.getNodes() : []);
  Do(e, (a, i) => {
    const s = a.elem;
    n.has(i) ? (a.highlighted = !0, Qc(r, a)) : (a.highlighted = !1, ed(r, a), s.getAttribute("style") || s.removeAttribute("style"));
  });
}
function Do(r, e) {
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
function bl(r, e) {
  e.disableHighlightStyle(), Do(e.table, (t) => {
    t.highlighted = !0, Qc(r, t);
  });
}
const Zc = (r, e, t, n, a) => {
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
}, af = (r, e, t, n, a) => {
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
function Vr(r, e) {
  if (U(r) || Me(r)) {
    const t = e.isParentOf(r.anchor.getNode()), n = e.isParentOf(r.focus.getNode());
    return t && n;
  }
  return !1;
}
function qa(r, e) {
  e ? r.selectStart() : r.selectEnd();
}
const Gi = "172,206,247";
function Qc(r, e) {
  const t = e.elem, n = Qe(t);
  ae(n) || Ce(131), n.getBackgroundColor() === null ? t.style.setProperty("background-color", `rgb(${Gi})`) : t.style.setProperty("background-image", `linear-gradient(to right, rgba(${Gi},0.85), rgba(${Gi},0.85))`), t.style.setProperty("caret-color", "transparent");
}
function ed(r, e) {
  const t = e.elem, n = Qe(t);
  ae(n) || Ce(131), n.getBackgroundColor() === null && t.style.removeProperty("background-color"), t.style.removeProperty("background-image"), t.style.removeProperty("caret-color");
}
function Yi(r) {
  const e = he(r, ae);
  return ae(e) ? e : null;
}
function Nn(r) {
  const e = he(r, Ke);
  return Ke(e) ? e : null;
}
function ta(r, e, t, n, a) {
  if ((t === "up" || t === "down") && function(s) {
    const o = s.getRootElement();
    return o ? o.hasAttribute("aria-controls") && o.getAttribute("aria-controls") === "typeahead-menu" : !1;
  }(r)) return !1;
  const i = B();
  if (!Vr(i, n)) {
    if (U(i)) {
      if (i.isCollapsed() && t === "backward") {
        const s = i.anchor.type, o = i.anchor.offset;
        if (s !== "element" && (s !== "text" || o !== 0)) return !1;
        const l = i.anchor.getNode();
        if (!l) return !1;
        const u = he(l, (d) => pe(d) && !d.isInline());
        if (!u) return !1;
        const c = u.getPreviousSibling();
        return !(!c || !Ke(c)) && (pr(e), c.selectEnd(), !0);
      }
      if (e.shiftKey && (t === "up" || t === "down")) {
        const s = i.focus.getNode();
        if (!i.isCollapsed() && (t === "up" && !i.isBackward() || t === "down" && i.isBackward())) {
          let o = he(s, (m) => Ke(m));
          if (ae(o) && (o = he(o, Ke)), o !== n || !o) return !1;
          const l = t === "down" ? o.getNextSibling() : o.getPreviousSibling();
          if (!l) return !1;
          let u = 0;
          t === "up" && pe(l) && (u = l.getChildrenSize());
          let c = l;
          t === "up" && pe(l) && (c = l.getLastChild() || l, u = _e(c) ? c.getTextContentSize() : 0);
          const d = i.clone();
          return d.focus.set(c.getKey(), u, _e(c) ? "text" : "element"), yt(d), pr(e), !0;
        }
        if (zt(s)) {
          const o = t === "up" ? i.getNodes()[i.getNodes().length - 1] : i.getNodes()[0];
          if (o) {
            const l = he(o, ae);
            if (l && n.isParentOf(l)) {
              const u = n.getFirstDescendant(), c = n.getLastDescendant();
              if (!u || !c) return !1;
              const [d] = vt(u), [m] = vt(c), g = n.getCordsFromCellNode(d, a.table), v = n.getCordsFromCellNode(m, a.table), y = n.getDOMCellFromCordsOrThrow(g.x, g.y, a.table), x = n.getDOMCellFromCordsOrThrow(v.x, v.y, a.table);
              return a.setAnchorCellForSelection(y), a.setFocusCellForSelection(x, !0), !0;
            }
          }
          return !1;
        }
        {
          let o = he(s, (u) => pe(u) && !u.isInline());
          if (ae(o) && (o = he(o, Ke)), !o) return !1;
          const l = t === "down" ? o.getNextSibling() : o.getPreviousSibling();
          if (Ke(l) && a.tableNodeKey === l.getKey()) {
            const u = l.getFirstDescendant(), c = l.getLastDescendant();
            if (!u || !c) return !1;
            const [d] = vt(u), [m] = vt(c), g = i.clone();
            return g.focus.set((t === "up" ? d : m).getKey(), t === "up" ? 0 : m.getChildrenSize(), "element"), pr(e), yt(g), !0;
          }
        }
      }
    }
    return !1;
  }
  if (U(i) && i.isCollapsed()) {
    const { anchor: s, focus: o } = i, l = he(s.getNode(), ae), u = he(o.getNode(), ae);
    if (!ae(l) || !l.is(u)) return !1;
    const c = Nn(l);
    if (c !== n && c != null) {
      const _ = r.getElementByKey(c.getKey());
      if (_ != null) return a.table = aa(_), ta(r, e, t, c, a);
    }
    if (t === "backward" || t === "forward") {
      const _ = s.type, w = s.offset, C = s.getNode();
      if (!C) return !1;
      const T = i.getNodes();
      return (T.length !== 1 || !wr(T[0])) && !!function(k, N, I, D) {
        return function(M, F, z) {
          return M === "element" && (z === "backward" ? F.getPreviousSibling() === null : F.getNextSibling() === null);
        }(k, I, D) || function(M, F, z, j) {
          const P = he(z, (Y) => pe(Y) && !Y.isInline());
          if (!P) return !1;
          const X = j === "backward" ? F === 0 : F === z.getTextContentSize();
          return M === "text" && X && (j === "backward" ? P.getPreviousSibling() === null : P.getNextSibling() === null);
        }(k, N, I, D);
      }(_, w, C, t) && function(k, N, I, D) {
        const M = he(N, ae);
        if (!ae(M)) return !1;
        const [F, z] = Wt(I, M, M);
        if (!function(P, X, Y) {
          const ee = P[0][0], ce = P[P.length - 1][P[0].length - 1], { startColumn: J, startRow: de } = X;
          return Y === "backward" ? J === ee.startColumn && de === ee.startRow : J === ce.startColumn && de === ce.startRow;
        }(F, z, D)) return !1;
        const j = function(P, X, Y) {
          const ee = he(P, (J) => pe(J) && !J.isInline());
          if (!ee) return;
          const ce = X === "backward" ? ee.getPreviousSibling() : ee.getNextSibling();
          return ce && Ke(ce) ? ce : X === "backward" ? Y.getPreviousSibling() : Y.getNextSibling();
        }(N, D, I);
        return !j || Ke(j) ? !1 : (pr(k), D === "backward" ? j.selectEnd() : j.selectStart(), !0);
      }(e, C, n, t);
    }
    const d = r.getElementByKey(l.__key), m = r.getElementByKey(s.key);
    if (m == null || d == null) return !1;
    let g;
    if (s.type === "element") g = m.getBoundingClientRect();
    else {
      const _ = window.getSelection();
      if (_ === null || _.rangeCount === 0) return !1;
      g = _.getRangeAt(0).getBoundingClientRect();
    }
    const v = t === "up" ? l.getFirstChild() : l.getLastChild();
    if (v == null) return !1;
    const y = r.getElementByKey(v.__key);
    if (y == null) return !1;
    const x = y.getBoundingClientRect();
    if (t === "up" ? x.top > g.top - g.height : g.bottom + g.height > x.bottom) {
      pr(e);
      const _ = n.getCordsFromCellNode(l, a.table);
      if (!e.shiftKey) return Zc(a, n, _.x, _.y, t);
      {
        const w = n.getDOMCellFromCordsOrThrow(_.x, _.y, a.table);
        a.setAnchorCellForSelection(w), a.setFocusCellForSelection(w, !0);
      }
      return !0;
    }
  } else if (Me(i)) {
    const { anchor: s, focus: o } = i, l = he(s.getNode(), ae), u = he(o.getNode(), ae), [c] = i.getNodes(), d = r.getElementByKey(c.getKey());
    if (!ae(l) || !ae(u) || !Ke(c) || d == null) return !1;
    a.updateTableTableSelection(i);
    const m = aa(d), g = n.getCordsFromCellNode(l, m), v = n.getDOMCellFromCordsOrThrow(g.x, g.y, m);
    if (a.setAnchorCellForSelection(v), pr(e), e.shiftKey) {
      const y = n.getCordsFromCellNode(u, m);
      return af(a, c, y.x, y.y, t);
    }
    return u.selectEnd(), !0;
  }
  return !1;
}
function pr(r) {
  r.preventDefault(), r.stopImmediatePropagation(), r.stopPropagation();
}
function yl(r, e, t) {
  const n = xe();
  r === "first" ? e.insertBefore(n) : e.insertAfter(n), n.append(...t || []), n.selectEnd();
}
function xl(r, e, t) {
  const n = t.getParent();
  if (!n) return;
  const a = r.getElementByKey(n.getKey());
  if (!a) return;
  const i = window.getSelection();
  if (!i || i.anchorNode !== a) return;
  const s = he(e.anchor.getNode(), (x) => ae(x));
  if (!s) return;
  const o = he(s, (x) => Ke(x));
  if (!Ke(o) || !o.is(t)) return;
  const [l, u] = Wt(t, s, s), c = l[0][0], d = l[l.length - 1][l[0].length - 1], { startRow: m, startColumn: g } = u, v = m === c.startRow && g === c.startColumn, y = m === d.startRow && g === d.startColumn;
  return v ? "first" : y ? "last" : void 0;
}
function wl(r, e, t, n) {
  const a = r.querySelector("colgroup");
  if (!a) return;
  const i = [];
  for (let s = 0; s < t; s++) {
    const o = document.createElement("col"), l = n && n[s];
    l && (o.style.width = `${l}px`), i.push(o);
  }
  a.replaceChildren(...i);
}
function _l(r, e, t) {
  t ? (et(r, e.theme.tableRowStriping), r.setAttribute("data-lexical-row-striping", "true")) : (pn(r, e.theme.tableRowStriping), r.removeAttribute("data-lexical-row-striping"));
}
class or extends xt {
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
    return { table: (e) => ({ conversion: sf, priority: 1 }) };
  }
  static importJSON(e) {
    const t = Ro();
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
    return n.appendChild(a), wl(n, 0, this.getColumnCount(), this.getColWidths()), et(n, e.theme.table), this.__rowStriping && _l(n, e, !0), n;
  }
  updateDOM(e, t, n) {
    return e.__rowStriping !== this.__rowStriping && _l(t, n, this.__rowStriping), wl(t, 0, this.getColumnCount(), this.getColWidths()), !1;
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
        const { elem: u } = l;
        return Qe(u) === e;
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
function sf(r) {
  const e = Ro();
  r.hasAttribute("data-lexical-row-striping") && e.setRowStriping(!0);
  const t = r.querySelector(":scope > colgroup");
  if (t) {
    let n = [];
    for (const a of t.querySelectorAll(":scope > col")) {
      const i = a.style.width;
      if (!i || !Eo.test(i)) {
        n = void 0;
        break;
      }
      n.push(parseFloat(i));
    }
    n && e.setColWidths(n);
  }
  return { node: e };
}
function Ro() {
  return ut(new or());
}
function Ke(r) {
  return r instanceof or;
}
function of({ nodeKey: r }) {
  const [e] = oe(), [t, n, a] = So(r), i = ie(
    (s) => {
      if (s.preventDefault(), t && gt(B())) {
        const o = At(r);
        if (uf(o))
          return o.remove(), !0;
      }
      return !1;
    },
    [t, r]
  );
  return $(() => Re(
    e.registerCommand(
      ya,
      (s) => {
        const o = e.getElementByKey(r);
        return s.target === o ? (s.shiftKey || a(), n(!t), !0) : !1;
      },
      ye
    ),
    e.registerCommand(
      ba,
      i,
      ye
    ),
    e.registerCommand(
      va,
      i,
      ye
    )
  ), [a, e, t, r, i, n]), $(() => {
    const s = e.getElementByKey(r);
    s !== null && (s.className = t ? "selected" : "");
  }, [e, t, r]), null;
}
class zn extends ur {
  static getType() {
    return "page-break";
  }
  static clone(e) {
    return new zn(e.__key);
  }
  static importJSON() {
    return Io();
  }
  static importDOM() {
    return {
      figure: (e) => e.getAttribute("type") !== this.getType() ? null : {
        conversion: lf,
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
    return /* @__PURE__ */ p.jsx(of, { nodeKey: this.__key });
  }
}
function lf() {
  return { node: Io() };
}
function Io() {
  return new zn();
}
function uf(r) {
  return r instanceof zn;
}
class Ta extends hn {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__className");
    this.__className = t;
  }
  static getType() {
    return "emoji";
  }
  static clone(t) {
    return new Ta(t.__className, t.__text, t.__key);
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
    const n = td(
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
function td(r, e) {
  const t = new Ta(r, e).setMode("token");
  return ut(t);
}
const cf = mt.lazy(() => import("./ImageComponent-CU09ttF4.js"));
function df(r) {
  const e = r;
  if (e.src.startsWith("file:///"))
    return null;
  const { alt: t, src: n, width: a, height: i } = e;
  return { node: Fo({ altText: t, height: i, src: n, width: a }) };
}
class Pn extends ur {
  constructor(t, n, a, i, s, o, l, u, c, d, m, g) {
    super(c);
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
    this.__src = t, this.__altText = n, this.__maxWidth = a, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || pa(), this.__captionsEnabled = u || u === void 0, this.__isAbsolute = d || !1, this.__x = m || 0, this.__y = g || 0;
  }
  static getType() {
    return "image";
  }
  static clone(t) {
    return new Pn(
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
      showCaption: u,
      isAbsolute: c,
      xOffset: d,
      yOffset: m
    } = t, g = Fo({
      altText: n,
      height: a,
      maxWidth: s,
      showCaption: u,
      src: l,
      width: i,
      isAbsolute: c,
      xOffset: d,
      yOffset: m
    }), v = g.__caption, y = v.parseEditorState(o.editorState);
    return y.isEmpty() || v.setEditorState(y), g;
  }
  exportDOM() {
    const t = document.createElement("img");
    return t.setAttribute("src", this.__src), t.setAttribute("alt", this.__altText), t.setAttribute("width", this.__width.toString()), t.setAttribute("height", this.__height.toString()), t.setAttribute("style", "max-width: 100%; object-fit: contain;"), { element: t };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: df,
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
    a.__x = t, a.__y = n, yt(null);
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
      cf,
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
function Fo({
  altText: r,
  height: e,
  maxWidth: t = 500,
  captionsEnabled: n,
  src: a,
  width: i,
  showCaption: s,
  caption: o,
  key: l,
  xOffset: u,
  yOffset: c,
  isAbsolute: d
}) {
  return ut(
    new Pn(
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
      u,
      c
    )
  );
}
function hf(r) {
  return r instanceof Pn;
}
class Tn extends hn {
  static getType() {
    return "keyword";
  }
  static clone(e) {
    return new Tn(e.__text, e.__key);
  }
  static importJSON(e) {
    const t = rd(e.text);
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
function rd(r) {
  return new Tn(r);
}
let Ei = class extends ur {
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
function Ls(r) {
  return r instanceof Ei;
}
function Lo({ children: r, format: e, nodeKey: t, className: n }) {
  const [a] = oe(), [i, s, o] = So(t), l = Oe(null), u = ie((c) => {
    const d = B();
    return i && gt(d) && (c.preventDefault(), a.update(() => {
      d.getNodes().forEach((m) => {
        wr(m) && m.remove();
      });
    })), !1;
  }, [a, i]);
  return $(() => Re(a.registerCommand(er, (c) => {
    if (i) {
      const d = B();
      if (gt(d)) {
        const m = At(t);
        Ls(m) && m.setFormat(c);
      } else if (U(d)) {
        const m = d.getNodes();
        for (const g of m) Ls(g) ? g.setFormat(c) : Ci(g).setFormat(c);
      }
      return !0;
    }
    return !1;
  }, ye), a.registerCommand(ya, (c) => c.target === l.current && (c.preventDefault(), c.shiftKey || o(), s(!i), !0), ye), a.registerCommand(ba, u, ye), a.registerCommand(va, u, ye)), [o, a, i, t, u, s]), p.jsx("div", { className: [n.base, i ? n.focus : null].filter(Boolean).join(" "), ref: l, style: { textAlign: e || void 0 }, children: r });
}
function mf({
  className: r,
  format: e,
  nodeKey: t,
  documentID: n
}) {
  return /* @__PURE__ */ p.jsx(
    Lo,
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
class Aa extends Ei {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "figma";
  }
  static clone(t) {
    return new Aa(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = nd(t.documentID);
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
      mf,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        documentID: this.__id
      }
    );
  }
}
function nd(r) {
  return new Aa(r);
}
const ff = "https://platform.twitter.com/widgets.js";
function pf(r) {
  const e = r.getAttribute("data-lexical-tweet-id");
  return e ? { node: zo(e) } : null;
}
let Sl = !0;
function gf({
  className: r,
  format: e,
  loadingComponent: t,
  nodeKey: n,
  onError: a,
  onLoad: i,
  tweetID: s
}) {
  const o = Oe(null), l = Oe(""), [u, c] = H(!1), d = ie(async () => {
    try {
      await window.twttr.widgets.createTweet(s, o.current), c(!1), Sl = !1, i && i();
    } catch (m) {
      a && a(String(m));
    }
  }, [a, i, s]);
  return $(() => {
    var m;
    if (s !== l.current) {
      if (c(!0), Sl) {
        const g = document.createElement("script");
        g.src = ff, g.async = !0, (m = document.body) == null || m.appendChild(g), g.onload = d, a && (g.onerror = a);
      } else
        d();
      l && (l.current = s);
    }
  }, [d, a, s]), /* @__PURE__ */ p.jsxs(
    Lo,
    {
      className: r,
      format: e,
      nodeKey: n,
      children: [
        u ? t : null,
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
class Ma extends Ei {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "tweet";
  }
  static clone(t) {
    return new Ma(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = zo(t.id);
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
        conversion: pf,
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
      gf,
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
function zo(r) {
  return new Ma(r);
}
function vf({
  className: r,
  format: e,
  nodeKey: t,
  videoID: n
}) {
  return /* @__PURE__ */ p.jsx(
    Lo,
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
function bf(r) {
  const e = r.getAttribute("data-lexical-youtube");
  return e ? { node: Po(e) } : null;
}
class Oa extends Ei {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "youtube";
  }
  static clone(t) {
    return new Oa(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = Po(t.videoID);
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
        conversion: bf,
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
      vf,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
}
function Po(r) {
  return new Oa(r);
}
function yf(r) {
  const e = r.open !== void 0 ? r.open : !0;
  return {
    node: Bo(e)
  };
}
class nn extends xt {
  constructor(t, n) {
    super(n);
    ne(this, "__open");
    this.__open = t;
  }
  static getType() {
    return "collapsible-container";
  }
  static clone(t) {
    return new nn(t.__open, t.__key);
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
        conversion: yf,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Bo(t.open);
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
function Bo(r) {
  return new nn(r);
}
function fr(r) {
  return r instanceof nn;
}
function xf(r) {
  return {
    node: jo()
  };
}
class an extends xt {
  static getType() {
    return "collapsible-content";
  }
  static clone(e) {
    return new an(e.__key);
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
        conversion: xf,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const e = document.createElement("div");
    return e.setAttribute("data-lexical-collapsible-content", "true"), { element: e };
  }
  static importJSON(e) {
    return jo();
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
function jo() {
  return new an();
}
function ad(r) {
  return r instanceof an;
}
function wf(r) {
  return {
    node: $o()
  };
}
class sn extends xt {
  static getType() {
    return "collapsible-title";
  }
  static clone(e) {
    return new sn(e.__key);
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
        conversion: wf,
        priority: 1
      })
    };
  }
  static importJSON(e) {
    return $o();
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
      if (!ad(a))
        throw new Error(
          "CollapsibleTitleNode expects to have CollapsibleContentNode sibling"
        );
      const i = a.getFirstChild();
      if (pe(i))
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
function $o() {
  return new sn();
}
function Cl(r) {
  return r instanceof sn;
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
class Kt {
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
    return new Kt(t, Ft.range(this, e));
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
      var l = o.slice(a, i).replace(/[^]/g, "$&̲"), u;
      a > 15 ? u = "…" + o.slice(a - 15, a) : u = o.slice(0, a);
      var c;
      i + 15 < o.length ? c = o.slice(i, i + 15) + "…" : c = o.slice(i), n += u + l + c;
    }
    var d = new Error(n);
    return d.name = "ParseError", d.__proto__ = G.prototype, d.position = a, a != null && i != null && (d.length = i - a), d.rawMessage = e, d;
  }
}
G.prototype.__proto__ = Error.prototype;
var _f = function(e, t) {
  return e.indexOf(t) !== -1;
}, Sf = function(e, t) {
  return e === void 0 ? t : e;
}, Cf = /([A-Z])/g, kf = function(e) {
  return e.replace(Cf, "-$1").toLowerCase();
}, Nf = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Ef = /[&><"']/g;
function Tf(r) {
  return String(r).replace(Ef, (e) => Nf[e]);
}
var id = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, Af = function(e) {
  var t = id(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Mf = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Of = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ue = {
  contains: _f,
  deflt: Sf,
  escape: Tf,
  hyphenate: kf,
  getBaseElem: id,
  isCharacterBox: Af,
  protocolFromUrl: Of
}, ti = {
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
function Df(r) {
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
class qo {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in ti)
      if (ti.hasOwnProperty(t)) {
        var n = ti[t];
        this[t] = e[t] !== void 0 ? n.processor ? n.processor(e[t]) : e[t] : Df(n);
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
      var t = ue.protocolFromUrl(e.url);
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
    return tr[Rf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return tr[If[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return tr[Ff[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return tr[Lf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return tr[zf[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return tr[Pf[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Ho = 0, di = 1, En = 2, _r = 3, ma = 4, Ut = 5, An = 6, kt = 7, tr = [new Ar(Ho, 0, !1), new Ar(di, 0, !0), new Ar(En, 1, !1), new Ar(_r, 1, !0), new Ar(ma, 2, !1), new Ar(Ut, 2, !0), new Ar(An, 3, !1), new Ar(kt, 3, !0)], Rf = [ma, Ut, ma, Ut, An, kt, An, kt], If = [Ut, Ut, Ut, Ut, kt, kt, kt, kt], Ff = [En, _r, ma, Ut, An, kt, An, kt], Lf = [_r, _r, Ut, Ut, kt, kt, kt, kt], zf = [di, di, _r, _r, Ut, Ut, kt, kt], Pf = [Ho, di, En, _r, En, _r, En, _r], fe = {
  DISPLAY: tr[Ho],
  TEXT: tr[En],
  SCRIPT: tr[ma],
  SCRIPTSCRIPT: tr[An]
}, zs = [{
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
function Bf(r) {
  for (var e = 0; e < zs.length; e++)
    for (var t = zs[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var ri = [];
zs.forEach((r) => r.blocks.forEach((e) => ri.push(...e)));
function sd(r) {
  for (var e = 0; e < ri.length; e += 2)
    if (r >= ri[e] && r <= ri[e + 1])
      return !0;
  return !1;
}
var Sn = 80, jf = function(e, t) {
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
}, $f = function(e, t) {
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
}, qf = function(e, t) {
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
}, Hf = function(e, t) {
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
}, Uf = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Wf = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Kf = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Gf = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = jf(t, Sn);
      break;
    case "sqrtSize1":
      a = $f(t, Sn);
      break;
    case "sqrtSize2":
      a = qf(t, Sn);
      break;
    case "sqrtSize3":
      a = Hf(t, Sn);
      break;
    case "sqrtSize4":
      a = Uf(t, Sn);
      break;
    case "sqrtTall":
      a = Kf(t, Sn, n);
  }
  return a;
}, Yf = function(e, t) {
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
}, kl = {
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
}, Vf = function(e, t) {
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
class Da {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return ue.contains(this.classes, e);
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
}, Ha = {
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
}, Nl = {
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
function Xf(r, e) {
  ar[r] = e;
}
function Uo(r, e, t) {
  if (!ar[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = ar[e][n];
  if (!a && r[0] in Nl && (n = Nl[r[0]].charCodeAt(0), a = ar[e][n]), !a && t === "text" && sd(n) && (a = ar[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Vi = {};
function Jf(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Vi[e]) {
    var t = Vi[e] = {
      cssEmPerMu: Ha.quad[e] / 18
    };
    for (var n in Ha)
      Ha.hasOwnProperty(n) && (t[n] = Ha[n][e]);
  }
  return Vi[e];
}
var Zf = [
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
], El = [
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
], Tl = function(e, t) {
  return t.size < 2 ? e : Zf[e - 1][t.size - 1];
};
class gr {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || gr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = El[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
      size: Tl(this.textSize, e)
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
      sizeMultiplier: El[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Tl(gr.BASESIZE, e);
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
    return this._fontMetrics || (this._fontMetrics = Jf(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
gr.BASESIZE = 6;
var Ps = {
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
}, Qf = {
  ex: !0,
  em: !0,
  mu: !0
}, od = function(e) {
  return typeof e != "string" && (e = e.unit), e in Ps || e in Qf || e === "ex";
}, Xe = function(e, t) {
  var n;
  if (e.unit in Ps)
    n = Ps[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
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
}, ld = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, ud = function(e) {
  var t = document.createElement(e);
  t.className = Fr(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, cd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ue.escape(Fr(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += ue.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + ue.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + ue.escape(this.attributes[i]) + '"');
  t += ">";
  for (var s = 0; s < this.children.length; s++)
    t += this.children[s].toMarkup();
  return t += "</" + e + ">", t;
};
class Ra {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, ld.call(this, e, n, a), this.children = t || [];
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
    return ue.contains(this.classes, e);
  }
  toNode() {
    return ud.call(this, "span");
  }
  toMarkup() {
    return cd.call(this, "span");
  }
}
class Wo {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, ld.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return ue.contains(this.classes, e);
  }
  toNode() {
    return ud.call(this, "a");
  }
  toMarkup() {
    return cd.call(this, "a");
  }
}
class ep {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return ue.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ue.escape(this.src) + '"' + (' alt="' + ue.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += ue.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + ue.escape(t) + '"'), e += "'/>", e;
  }
}
var tp = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Gt {
  constructor(e, t, n, a, i, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var u = Bf(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = tp[this.text]);
  }
  hasClass(e) {
    return ue.contains(this.classes, e);
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
    this.classes.length && (e = !0, t += ' class="', t += ue.escape(Fr(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += ue.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + ue.escape(n) + '"');
    var i = ue.escape(this.text);
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ue.escape(this.attributes[t]) + '"');
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
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", kl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ue.escape(this.alternate) + '"/>' : '<path d="' + ue.escape(kl[this.pathName]) + '"/>';
  }
}
class Bs {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ue.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Al(r) {
  if (r instanceof Gt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function rp(r) {
  if (r instanceof Ra)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var np = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, ap = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, He = {
  math: {},
  text: {}
};
function h(r, e, t, n, a, i) {
  He[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (He[r][n] = He[r][a]);
}
var f = "math", q = "text", b = "main", E = "ams", Ye = "accent-token", re = "bin", Nt = "close", Bn = "inner", me = "mathord", ct = "op-token", Bt = "open", Ti = "punct", A = "rel", Tr = "spacing", R = "textord";
h(f, b, A, "≡", "\\equiv", !0);
h(f, b, A, "≺", "\\prec", !0);
h(f, b, A, "≻", "\\succ", !0);
h(f, b, A, "∼", "\\sim", !0);
h(f, b, A, "⊥", "\\perp");
h(f, b, A, "⪯", "\\preceq", !0);
h(f, b, A, "⪰", "\\succeq", !0);
h(f, b, A, "≃", "\\simeq", !0);
h(f, b, A, "∣", "\\mid", !0);
h(f, b, A, "≪", "\\ll", !0);
h(f, b, A, "≫", "\\gg", !0);
h(f, b, A, "≍", "\\asymp", !0);
h(f, b, A, "∥", "\\parallel");
h(f, b, A, "⋈", "\\bowtie", !0);
h(f, b, A, "⌣", "\\smile", !0);
h(f, b, A, "⊑", "\\sqsubseteq", !0);
h(f, b, A, "⊒", "\\sqsupseteq", !0);
h(f, b, A, "≐", "\\doteq", !0);
h(f, b, A, "⌢", "\\frown", !0);
h(f, b, A, "∋", "\\ni", !0);
h(f, b, A, "∝", "\\propto", !0);
h(f, b, A, "⊢", "\\vdash", !0);
h(f, b, A, "⊣", "\\dashv", !0);
h(f, b, A, "∋", "\\owns");
h(f, b, Ti, ".", "\\ldotp");
h(f, b, Ti, "⋅", "\\cdotp");
h(f, b, R, "#", "\\#");
h(q, b, R, "#", "\\#");
h(f, b, R, "&", "\\&");
h(q, b, R, "&", "\\&");
h(f, b, R, "ℵ", "\\aleph", !0);
h(f, b, R, "∀", "\\forall", !0);
h(f, b, R, "ℏ", "\\hbar", !0);
h(f, b, R, "∃", "\\exists", !0);
h(f, b, R, "∇", "\\nabla", !0);
h(f, b, R, "♭", "\\flat", !0);
h(f, b, R, "ℓ", "\\ell", !0);
h(f, b, R, "♮", "\\natural", !0);
h(f, b, R, "♣", "\\clubsuit", !0);
h(f, b, R, "℘", "\\wp", !0);
h(f, b, R, "♯", "\\sharp", !0);
h(f, b, R, "♢", "\\diamondsuit", !0);
h(f, b, R, "ℜ", "\\Re", !0);
h(f, b, R, "♡", "\\heartsuit", !0);
h(f, b, R, "ℑ", "\\Im", !0);
h(f, b, R, "♠", "\\spadesuit", !0);
h(f, b, R, "§", "\\S", !0);
h(q, b, R, "§", "\\S");
h(f, b, R, "¶", "\\P", !0);
h(q, b, R, "¶", "\\P");
h(f, b, R, "†", "\\dag");
h(q, b, R, "†", "\\dag");
h(q, b, R, "†", "\\textdagger");
h(f, b, R, "‡", "\\ddag");
h(q, b, R, "‡", "\\ddag");
h(q, b, R, "‡", "\\textdaggerdbl");
h(f, b, Nt, "⎱", "\\rmoustache", !0);
h(f, b, Bt, "⎰", "\\lmoustache", !0);
h(f, b, Nt, "⟯", "\\rgroup", !0);
h(f, b, Bt, "⟮", "\\lgroup", !0);
h(f, b, re, "∓", "\\mp", !0);
h(f, b, re, "⊖", "\\ominus", !0);
h(f, b, re, "⊎", "\\uplus", !0);
h(f, b, re, "⊓", "\\sqcap", !0);
h(f, b, re, "∗", "\\ast");
h(f, b, re, "⊔", "\\sqcup", !0);
h(f, b, re, "◯", "\\bigcirc", !0);
h(f, b, re, "∙", "\\bullet", !0);
h(f, b, re, "‡", "\\ddagger");
h(f, b, re, "≀", "\\wr", !0);
h(f, b, re, "⨿", "\\amalg");
h(f, b, re, "&", "\\And");
h(f, b, A, "⟵", "\\longleftarrow", !0);
h(f, b, A, "⇐", "\\Leftarrow", !0);
h(f, b, A, "⟸", "\\Longleftarrow", !0);
h(f, b, A, "⟶", "\\longrightarrow", !0);
h(f, b, A, "⇒", "\\Rightarrow", !0);
h(f, b, A, "⟹", "\\Longrightarrow", !0);
h(f, b, A, "↔", "\\leftrightarrow", !0);
h(f, b, A, "⟷", "\\longleftrightarrow", !0);
h(f, b, A, "⇔", "\\Leftrightarrow", !0);
h(f, b, A, "⟺", "\\Longleftrightarrow", !0);
h(f, b, A, "↦", "\\mapsto", !0);
h(f, b, A, "⟼", "\\longmapsto", !0);
h(f, b, A, "↗", "\\nearrow", !0);
h(f, b, A, "↩", "\\hookleftarrow", !0);
h(f, b, A, "↪", "\\hookrightarrow", !0);
h(f, b, A, "↘", "\\searrow", !0);
h(f, b, A, "↼", "\\leftharpoonup", !0);
h(f, b, A, "⇀", "\\rightharpoonup", !0);
h(f, b, A, "↙", "\\swarrow", !0);
h(f, b, A, "↽", "\\leftharpoondown", !0);
h(f, b, A, "⇁", "\\rightharpoondown", !0);
h(f, b, A, "↖", "\\nwarrow", !0);
h(f, b, A, "⇌", "\\rightleftharpoons", !0);
h(f, E, A, "≮", "\\nless", !0);
h(f, E, A, "", "\\@nleqslant");
h(f, E, A, "", "\\@nleqq");
h(f, E, A, "⪇", "\\lneq", !0);
h(f, E, A, "≨", "\\lneqq", !0);
h(f, E, A, "", "\\@lvertneqq");
h(f, E, A, "⋦", "\\lnsim", !0);
h(f, E, A, "⪉", "\\lnapprox", !0);
h(f, E, A, "⊀", "\\nprec", !0);
h(f, E, A, "⋠", "\\npreceq", !0);
h(f, E, A, "⋨", "\\precnsim", !0);
h(f, E, A, "⪹", "\\precnapprox", !0);
h(f, E, A, "≁", "\\nsim", !0);
h(f, E, A, "", "\\@nshortmid");
h(f, E, A, "∤", "\\nmid", !0);
h(f, E, A, "⊬", "\\nvdash", !0);
h(f, E, A, "⊭", "\\nvDash", !0);
h(f, E, A, "⋪", "\\ntriangleleft");
h(f, E, A, "⋬", "\\ntrianglelefteq", !0);
h(f, E, A, "⊊", "\\subsetneq", !0);
h(f, E, A, "", "\\@varsubsetneq");
h(f, E, A, "⫋", "\\subsetneqq", !0);
h(f, E, A, "", "\\@varsubsetneqq");
h(f, E, A, "≯", "\\ngtr", !0);
h(f, E, A, "", "\\@ngeqslant");
h(f, E, A, "", "\\@ngeqq");
h(f, E, A, "⪈", "\\gneq", !0);
h(f, E, A, "≩", "\\gneqq", !0);
h(f, E, A, "", "\\@gvertneqq");
h(f, E, A, "⋧", "\\gnsim", !0);
h(f, E, A, "⪊", "\\gnapprox", !0);
h(f, E, A, "⊁", "\\nsucc", !0);
h(f, E, A, "⋡", "\\nsucceq", !0);
h(f, E, A, "⋩", "\\succnsim", !0);
h(f, E, A, "⪺", "\\succnapprox", !0);
h(f, E, A, "≆", "\\ncong", !0);
h(f, E, A, "", "\\@nshortparallel");
h(f, E, A, "∦", "\\nparallel", !0);
h(f, E, A, "⊯", "\\nVDash", !0);
h(f, E, A, "⋫", "\\ntriangleright");
h(f, E, A, "⋭", "\\ntrianglerighteq", !0);
h(f, E, A, "", "\\@nsupseteqq");
h(f, E, A, "⊋", "\\supsetneq", !0);
h(f, E, A, "", "\\@varsupsetneq");
h(f, E, A, "⫌", "\\supsetneqq", !0);
h(f, E, A, "", "\\@varsupsetneqq");
h(f, E, A, "⊮", "\\nVdash", !0);
h(f, E, A, "⪵", "\\precneqq", !0);
h(f, E, A, "⪶", "\\succneqq", !0);
h(f, E, A, "", "\\@nsubseteqq");
h(f, E, re, "⊴", "\\unlhd");
h(f, E, re, "⊵", "\\unrhd");
h(f, E, A, "↚", "\\nleftarrow", !0);
h(f, E, A, "↛", "\\nrightarrow", !0);
h(f, E, A, "⇍", "\\nLeftarrow", !0);
h(f, E, A, "⇏", "\\nRightarrow", !0);
h(f, E, A, "↮", "\\nleftrightarrow", !0);
h(f, E, A, "⇎", "\\nLeftrightarrow", !0);
h(f, E, A, "△", "\\vartriangle");
h(f, E, R, "ℏ", "\\hslash");
h(f, E, R, "▽", "\\triangledown");
h(f, E, R, "◊", "\\lozenge");
h(f, E, R, "Ⓢ", "\\circledS");
h(f, E, R, "®", "\\circledR");
h(q, E, R, "®", "\\circledR");
h(f, E, R, "∡", "\\measuredangle", !0);
h(f, E, R, "∄", "\\nexists");
h(f, E, R, "℧", "\\mho");
h(f, E, R, "Ⅎ", "\\Finv", !0);
h(f, E, R, "⅁", "\\Game", !0);
h(f, E, R, "‵", "\\backprime");
h(f, E, R, "▲", "\\blacktriangle");
h(f, E, R, "▼", "\\blacktriangledown");
h(f, E, R, "■", "\\blacksquare");
h(f, E, R, "⧫", "\\blacklozenge");
h(f, E, R, "★", "\\bigstar");
h(f, E, R, "∢", "\\sphericalangle", !0);
h(f, E, R, "∁", "\\complement", !0);
h(f, E, R, "ð", "\\eth", !0);
h(q, b, R, "ð", "ð");
h(f, E, R, "╱", "\\diagup");
h(f, E, R, "╲", "\\diagdown");
h(f, E, R, "□", "\\square");
h(f, E, R, "□", "\\Box");
h(f, E, R, "◊", "\\Diamond");
h(f, E, R, "¥", "\\yen", !0);
h(q, E, R, "¥", "\\yen", !0);
h(f, E, R, "✓", "\\checkmark", !0);
h(q, E, R, "✓", "\\checkmark");
h(f, E, R, "ℶ", "\\beth", !0);
h(f, E, R, "ℸ", "\\daleth", !0);
h(f, E, R, "ℷ", "\\gimel", !0);
h(f, E, R, "ϝ", "\\digamma", !0);
h(f, E, R, "ϰ", "\\varkappa");
h(f, E, Bt, "┌", "\\@ulcorner", !0);
h(f, E, Nt, "┐", "\\@urcorner", !0);
h(f, E, Bt, "└", "\\@llcorner", !0);
h(f, E, Nt, "┘", "\\@lrcorner", !0);
h(f, E, A, "≦", "\\leqq", !0);
h(f, E, A, "⩽", "\\leqslant", !0);
h(f, E, A, "⪕", "\\eqslantless", !0);
h(f, E, A, "≲", "\\lesssim", !0);
h(f, E, A, "⪅", "\\lessapprox", !0);
h(f, E, A, "≊", "\\approxeq", !0);
h(f, E, re, "⋖", "\\lessdot");
h(f, E, A, "⋘", "\\lll", !0);
h(f, E, A, "≶", "\\lessgtr", !0);
h(f, E, A, "⋚", "\\lesseqgtr", !0);
h(f, E, A, "⪋", "\\lesseqqgtr", !0);
h(f, E, A, "≑", "\\doteqdot");
h(f, E, A, "≓", "\\risingdotseq", !0);
h(f, E, A, "≒", "\\fallingdotseq", !0);
h(f, E, A, "∽", "\\backsim", !0);
h(f, E, A, "⋍", "\\backsimeq", !0);
h(f, E, A, "⫅", "\\subseteqq", !0);
h(f, E, A, "⋐", "\\Subset", !0);
h(f, E, A, "⊏", "\\sqsubset", !0);
h(f, E, A, "≼", "\\preccurlyeq", !0);
h(f, E, A, "⋞", "\\curlyeqprec", !0);
h(f, E, A, "≾", "\\precsim", !0);
h(f, E, A, "⪷", "\\precapprox", !0);
h(f, E, A, "⊲", "\\vartriangleleft");
h(f, E, A, "⊴", "\\trianglelefteq");
h(f, E, A, "⊨", "\\vDash", !0);
h(f, E, A, "⊪", "\\Vvdash", !0);
h(f, E, A, "⌣", "\\smallsmile");
h(f, E, A, "⌢", "\\smallfrown");
h(f, E, A, "≏", "\\bumpeq", !0);
h(f, E, A, "≎", "\\Bumpeq", !0);
h(f, E, A, "≧", "\\geqq", !0);
h(f, E, A, "⩾", "\\geqslant", !0);
h(f, E, A, "⪖", "\\eqslantgtr", !0);
h(f, E, A, "≳", "\\gtrsim", !0);
h(f, E, A, "⪆", "\\gtrapprox", !0);
h(f, E, re, "⋗", "\\gtrdot");
h(f, E, A, "⋙", "\\ggg", !0);
h(f, E, A, "≷", "\\gtrless", !0);
h(f, E, A, "⋛", "\\gtreqless", !0);
h(f, E, A, "⪌", "\\gtreqqless", !0);
h(f, E, A, "≖", "\\eqcirc", !0);
h(f, E, A, "≗", "\\circeq", !0);
h(f, E, A, "≜", "\\triangleq", !0);
h(f, E, A, "∼", "\\thicksim");
h(f, E, A, "≈", "\\thickapprox");
h(f, E, A, "⫆", "\\supseteqq", !0);
h(f, E, A, "⋑", "\\Supset", !0);
h(f, E, A, "⊐", "\\sqsupset", !0);
h(f, E, A, "≽", "\\succcurlyeq", !0);
h(f, E, A, "⋟", "\\curlyeqsucc", !0);
h(f, E, A, "≿", "\\succsim", !0);
h(f, E, A, "⪸", "\\succapprox", !0);
h(f, E, A, "⊳", "\\vartriangleright");
h(f, E, A, "⊵", "\\trianglerighteq");
h(f, E, A, "⊩", "\\Vdash", !0);
h(f, E, A, "∣", "\\shortmid");
h(f, E, A, "∥", "\\shortparallel");
h(f, E, A, "≬", "\\between", !0);
h(f, E, A, "⋔", "\\pitchfork", !0);
h(f, E, A, "∝", "\\varpropto");
h(f, E, A, "◀", "\\blacktriangleleft");
h(f, E, A, "∴", "\\therefore", !0);
h(f, E, A, "∍", "\\backepsilon");
h(f, E, A, "▶", "\\blacktriangleright");
h(f, E, A, "∵", "\\because", !0);
h(f, E, A, "⋘", "\\llless");
h(f, E, A, "⋙", "\\gggtr");
h(f, E, re, "⊲", "\\lhd");
h(f, E, re, "⊳", "\\rhd");
h(f, E, A, "≂", "\\eqsim", !0);
h(f, b, A, "⋈", "\\Join");
h(f, E, A, "≑", "\\Doteq", !0);
h(f, E, re, "∔", "\\dotplus", !0);
h(f, E, re, "∖", "\\smallsetminus");
h(f, E, re, "⋒", "\\Cap", !0);
h(f, E, re, "⋓", "\\Cup", !0);
h(f, E, re, "⩞", "\\doublebarwedge", !0);
h(f, E, re, "⊟", "\\boxminus", !0);
h(f, E, re, "⊞", "\\boxplus", !0);
h(f, E, re, "⋇", "\\divideontimes", !0);
h(f, E, re, "⋉", "\\ltimes", !0);
h(f, E, re, "⋊", "\\rtimes", !0);
h(f, E, re, "⋋", "\\leftthreetimes", !0);
h(f, E, re, "⋌", "\\rightthreetimes", !0);
h(f, E, re, "⋏", "\\curlywedge", !0);
h(f, E, re, "⋎", "\\curlyvee", !0);
h(f, E, re, "⊝", "\\circleddash", !0);
h(f, E, re, "⊛", "\\circledast", !0);
h(f, E, re, "⋅", "\\centerdot");
h(f, E, re, "⊺", "\\intercal", !0);
h(f, E, re, "⋒", "\\doublecap");
h(f, E, re, "⋓", "\\doublecup");
h(f, E, re, "⊠", "\\boxtimes", !0);
h(f, E, A, "⇢", "\\dashrightarrow", !0);
h(f, E, A, "⇠", "\\dashleftarrow", !0);
h(f, E, A, "⇇", "\\leftleftarrows", !0);
h(f, E, A, "⇆", "\\leftrightarrows", !0);
h(f, E, A, "⇚", "\\Lleftarrow", !0);
h(f, E, A, "↞", "\\twoheadleftarrow", !0);
h(f, E, A, "↢", "\\leftarrowtail", !0);
h(f, E, A, "↫", "\\looparrowleft", !0);
h(f, E, A, "⇋", "\\leftrightharpoons", !0);
h(f, E, A, "↶", "\\curvearrowleft", !0);
h(f, E, A, "↺", "\\circlearrowleft", !0);
h(f, E, A, "↰", "\\Lsh", !0);
h(f, E, A, "⇈", "\\upuparrows", !0);
h(f, E, A, "↿", "\\upharpoonleft", !0);
h(f, E, A, "⇃", "\\downharpoonleft", !0);
h(f, b, A, "⊶", "\\origof", !0);
h(f, b, A, "⊷", "\\imageof", !0);
h(f, E, A, "⊸", "\\multimap", !0);
h(f, E, A, "↭", "\\leftrightsquigarrow", !0);
h(f, E, A, "⇉", "\\rightrightarrows", !0);
h(f, E, A, "⇄", "\\rightleftarrows", !0);
h(f, E, A, "↠", "\\twoheadrightarrow", !0);
h(f, E, A, "↣", "\\rightarrowtail", !0);
h(f, E, A, "↬", "\\looparrowright", !0);
h(f, E, A, "↷", "\\curvearrowright", !0);
h(f, E, A, "↻", "\\circlearrowright", !0);
h(f, E, A, "↱", "\\Rsh", !0);
h(f, E, A, "⇊", "\\downdownarrows", !0);
h(f, E, A, "↾", "\\upharpoonright", !0);
h(f, E, A, "⇂", "\\downharpoonright", !0);
h(f, E, A, "⇝", "\\rightsquigarrow", !0);
h(f, E, A, "⇝", "\\leadsto");
h(f, E, A, "⇛", "\\Rrightarrow", !0);
h(f, E, A, "↾", "\\restriction");
h(f, b, R, "‘", "`");
h(f, b, R, "$", "\\$");
h(q, b, R, "$", "\\$");
h(q, b, R, "$", "\\textdollar");
h(f, b, R, "%", "\\%");
h(q, b, R, "%", "\\%");
h(f, b, R, "_", "\\_");
h(q, b, R, "_", "\\_");
h(q, b, R, "_", "\\textunderscore");
h(f, b, R, "∠", "\\angle", !0);
h(f, b, R, "∞", "\\infty", !0);
h(f, b, R, "′", "\\prime");
h(f, b, R, "△", "\\triangle");
h(f, b, R, "Γ", "\\Gamma", !0);
h(f, b, R, "Δ", "\\Delta", !0);
h(f, b, R, "Θ", "\\Theta", !0);
h(f, b, R, "Λ", "\\Lambda", !0);
h(f, b, R, "Ξ", "\\Xi", !0);
h(f, b, R, "Π", "\\Pi", !0);
h(f, b, R, "Σ", "\\Sigma", !0);
h(f, b, R, "Υ", "\\Upsilon", !0);
h(f, b, R, "Φ", "\\Phi", !0);
h(f, b, R, "Ψ", "\\Psi", !0);
h(f, b, R, "Ω", "\\Omega", !0);
h(f, b, R, "A", "Α");
h(f, b, R, "B", "Β");
h(f, b, R, "E", "Ε");
h(f, b, R, "Z", "Ζ");
h(f, b, R, "H", "Η");
h(f, b, R, "I", "Ι");
h(f, b, R, "K", "Κ");
h(f, b, R, "M", "Μ");
h(f, b, R, "N", "Ν");
h(f, b, R, "O", "Ο");
h(f, b, R, "P", "Ρ");
h(f, b, R, "T", "Τ");
h(f, b, R, "X", "Χ");
h(f, b, R, "¬", "\\neg", !0);
h(f, b, R, "¬", "\\lnot");
h(f, b, R, "⊤", "\\top");
h(f, b, R, "⊥", "\\bot");
h(f, b, R, "∅", "\\emptyset");
h(f, E, R, "∅", "\\varnothing");
h(f, b, me, "α", "\\alpha", !0);
h(f, b, me, "β", "\\beta", !0);
h(f, b, me, "γ", "\\gamma", !0);
h(f, b, me, "δ", "\\delta", !0);
h(f, b, me, "ϵ", "\\epsilon", !0);
h(f, b, me, "ζ", "\\zeta", !0);
h(f, b, me, "η", "\\eta", !0);
h(f, b, me, "θ", "\\theta", !0);
h(f, b, me, "ι", "\\iota", !0);
h(f, b, me, "κ", "\\kappa", !0);
h(f, b, me, "λ", "\\lambda", !0);
h(f, b, me, "μ", "\\mu", !0);
h(f, b, me, "ν", "\\nu", !0);
h(f, b, me, "ξ", "\\xi", !0);
h(f, b, me, "ο", "\\omicron", !0);
h(f, b, me, "π", "\\pi", !0);
h(f, b, me, "ρ", "\\rho", !0);
h(f, b, me, "σ", "\\sigma", !0);
h(f, b, me, "τ", "\\tau", !0);
h(f, b, me, "υ", "\\upsilon", !0);
h(f, b, me, "ϕ", "\\phi", !0);
h(f, b, me, "χ", "\\chi", !0);
h(f, b, me, "ψ", "\\psi", !0);
h(f, b, me, "ω", "\\omega", !0);
h(f, b, me, "ε", "\\varepsilon", !0);
h(f, b, me, "ϑ", "\\vartheta", !0);
h(f, b, me, "ϖ", "\\varpi", !0);
h(f, b, me, "ϱ", "\\varrho", !0);
h(f, b, me, "ς", "\\varsigma", !0);
h(f, b, me, "φ", "\\varphi", !0);
h(f, b, re, "∗", "*", !0);
h(f, b, re, "+", "+");
h(f, b, re, "−", "-", !0);
h(f, b, re, "⋅", "\\cdot", !0);
h(f, b, re, "∘", "\\circ", !0);
h(f, b, re, "÷", "\\div", !0);
h(f, b, re, "±", "\\pm", !0);
h(f, b, re, "×", "\\times", !0);
h(f, b, re, "∩", "\\cap", !0);
h(f, b, re, "∪", "\\cup", !0);
h(f, b, re, "∖", "\\setminus", !0);
h(f, b, re, "∧", "\\land");
h(f, b, re, "∨", "\\lor");
h(f, b, re, "∧", "\\wedge", !0);
h(f, b, re, "∨", "\\vee", !0);
h(f, b, R, "√", "\\surd");
h(f, b, Bt, "⟨", "\\langle", !0);
h(f, b, Bt, "∣", "\\lvert");
h(f, b, Bt, "∥", "\\lVert");
h(f, b, Nt, "?", "?");
h(f, b, Nt, "!", "!");
h(f, b, Nt, "⟩", "\\rangle", !0);
h(f, b, Nt, "∣", "\\rvert");
h(f, b, Nt, "∥", "\\rVert");
h(f, b, A, "=", "=");
h(f, b, A, ":", ":");
h(f, b, A, "≈", "\\approx", !0);
h(f, b, A, "≅", "\\cong", !0);
h(f, b, A, "≥", "\\ge");
h(f, b, A, "≥", "\\geq", !0);
h(f, b, A, "←", "\\gets");
h(f, b, A, ">", "\\gt", !0);
h(f, b, A, "∈", "\\in", !0);
h(f, b, A, "", "\\@not");
h(f, b, A, "⊂", "\\subset", !0);
h(f, b, A, "⊃", "\\supset", !0);
h(f, b, A, "⊆", "\\subseteq", !0);
h(f, b, A, "⊇", "\\supseteq", !0);
h(f, E, A, "⊈", "\\nsubseteq", !0);
h(f, E, A, "⊉", "\\nsupseteq", !0);
h(f, b, A, "⊨", "\\models");
h(f, b, A, "←", "\\leftarrow", !0);
h(f, b, A, "≤", "\\le");
h(f, b, A, "≤", "\\leq", !0);
h(f, b, A, "<", "\\lt", !0);
h(f, b, A, "→", "\\rightarrow", !0);
h(f, b, A, "→", "\\to");
h(f, E, A, "≱", "\\ngeq", !0);
h(f, E, A, "≰", "\\nleq", !0);
h(f, b, Tr, " ", "\\ ");
h(f, b, Tr, " ", "\\space");
h(f, b, Tr, " ", "\\nobreakspace");
h(q, b, Tr, " ", "\\ ");
h(q, b, Tr, " ", " ");
h(q, b, Tr, " ", "\\space");
h(q, b, Tr, " ", "\\nobreakspace");
h(f, b, Tr, null, "\\nobreak");
h(f, b, Tr, null, "\\allowbreak");
h(f, b, Ti, ",", ",");
h(f, b, Ti, ";", ";");
h(f, E, re, "⊼", "\\barwedge", !0);
h(f, E, re, "⊻", "\\veebar", !0);
h(f, b, re, "⊙", "\\odot", !0);
h(f, b, re, "⊕", "\\oplus", !0);
h(f, b, re, "⊗", "\\otimes", !0);
h(f, b, R, "∂", "\\partial", !0);
h(f, b, re, "⊘", "\\oslash", !0);
h(f, E, re, "⊚", "\\circledcirc", !0);
h(f, E, re, "⊡", "\\boxdot", !0);
h(f, b, re, "△", "\\bigtriangleup");
h(f, b, re, "▽", "\\bigtriangledown");
h(f, b, re, "†", "\\dagger");
h(f, b, re, "⋄", "\\diamond");
h(f, b, re, "⋆", "\\star");
h(f, b, re, "◃", "\\triangleleft");
h(f, b, re, "▹", "\\triangleright");
h(f, b, Bt, "{", "\\{");
h(q, b, R, "{", "\\{");
h(q, b, R, "{", "\\textbraceleft");
h(f, b, Nt, "}", "\\}");
h(q, b, R, "}", "\\}");
h(q, b, R, "}", "\\textbraceright");
h(f, b, Bt, "{", "\\lbrace");
h(f, b, Nt, "}", "\\rbrace");
h(f, b, Bt, "[", "\\lbrack", !0);
h(q, b, R, "[", "\\lbrack", !0);
h(f, b, Nt, "]", "\\rbrack", !0);
h(q, b, R, "]", "\\rbrack", !0);
h(f, b, Bt, "(", "\\lparen", !0);
h(f, b, Nt, ")", "\\rparen", !0);
h(q, b, R, "<", "\\textless", !0);
h(q, b, R, ">", "\\textgreater", !0);
h(f, b, Bt, "⌊", "\\lfloor", !0);
h(f, b, Nt, "⌋", "\\rfloor", !0);
h(f, b, Bt, "⌈", "\\lceil", !0);
h(f, b, Nt, "⌉", "\\rceil", !0);
h(f, b, R, "\\", "\\backslash");
h(f, b, R, "∣", "|");
h(f, b, R, "∣", "\\vert");
h(q, b, R, "|", "\\textbar", !0);
h(f, b, R, "∥", "\\|");
h(f, b, R, "∥", "\\Vert");
h(q, b, R, "∥", "\\textbardbl");
h(q, b, R, "~", "\\textasciitilde");
h(q, b, R, "\\", "\\textbackslash");
h(q, b, R, "^", "\\textasciicircum");
h(f, b, A, "↑", "\\uparrow", !0);
h(f, b, A, "⇑", "\\Uparrow", !0);
h(f, b, A, "↓", "\\downarrow", !0);
h(f, b, A, "⇓", "\\Downarrow", !0);
h(f, b, A, "↕", "\\updownarrow", !0);
h(f, b, A, "⇕", "\\Updownarrow", !0);
h(f, b, ct, "∐", "\\coprod");
h(f, b, ct, "⋁", "\\bigvee");
h(f, b, ct, "⋀", "\\bigwedge");
h(f, b, ct, "⨄", "\\biguplus");
h(f, b, ct, "⋂", "\\bigcap");
h(f, b, ct, "⋃", "\\bigcup");
h(f, b, ct, "∫", "\\int");
h(f, b, ct, "∫", "\\intop");
h(f, b, ct, "∬", "\\iint");
h(f, b, ct, "∭", "\\iiint");
h(f, b, ct, "∏", "\\prod");
h(f, b, ct, "∑", "\\sum");
h(f, b, ct, "⨂", "\\bigotimes");
h(f, b, ct, "⨁", "\\bigoplus");
h(f, b, ct, "⨀", "\\bigodot");
h(f, b, ct, "∮", "\\oint");
h(f, b, ct, "∯", "\\oiint");
h(f, b, ct, "∰", "\\oiiint");
h(f, b, ct, "⨆", "\\bigsqcup");
h(f, b, ct, "∫", "\\smallint");
h(q, b, Bn, "…", "\\textellipsis");
h(f, b, Bn, "…", "\\mathellipsis");
h(q, b, Bn, "…", "\\ldots", !0);
h(f, b, Bn, "…", "\\ldots", !0);
h(f, b, Bn, "⋯", "\\@cdots", !0);
h(f, b, Bn, "⋱", "\\ddots", !0);
h(f, b, R, "⋮", "\\varvdots");
h(f, b, Ye, "ˊ", "\\acute");
h(f, b, Ye, "ˋ", "\\grave");
h(f, b, Ye, "¨", "\\ddot");
h(f, b, Ye, "~", "\\tilde");
h(f, b, Ye, "ˉ", "\\bar");
h(f, b, Ye, "˘", "\\breve");
h(f, b, Ye, "ˇ", "\\check");
h(f, b, Ye, "^", "\\hat");
h(f, b, Ye, "⃗", "\\vec");
h(f, b, Ye, "˙", "\\dot");
h(f, b, Ye, "˚", "\\mathring");
h(f, b, me, "", "\\@imath");
h(f, b, me, "", "\\@jmath");
h(f, b, R, "ı", "ı");
h(f, b, R, "ȷ", "ȷ");
h(q, b, R, "ı", "\\i", !0);
h(q, b, R, "ȷ", "\\j", !0);
h(q, b, R, "ß", "\\ss", !0);
h(q, b, R, "æ", "\\ae", !0);
h(q, b, R, "œ", "\\oe", !0);
h(q, b, R, "ø", "\\o", !0);
h(q, b, R, "Æ", "\\AE", !0);
h(q, b, R, "Œ", "\\OE", !0);
h(q, b, R, "Ø", "\\O", !0);
h(q, b, Ye, "ˊ", "\\'");
h(q, b, Ye, "ˋ", "\\`");
h(q, b, Ye, "ˆ", "\\^");
h(q, b, Ye, "˜", "\\~");
h(q, b, Ye, "ˉ", "\\=");
h(q, b, Ye, "˘", "\\u");
h(q, b, Ye, "˙", "\\.");
h(q, b, Ye, "¸", "\\c");
h(q, b, Ye, "˚", "\\r");
h(q, b, Ye, "ˇ", "\\v");
h(q, b, Ye, "¨", '\\"');
h(q, b, Ye, "˝", "\\H");
h(q, b, Ye, "◯", "\\textcircled");
var dd = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
h(q, b, R, "–", "--", !0);
h(q, b, R, "–", "\\textendash");
h(q, b, R, "—", "---", !0);
h(q, b, R, "—", "\\textemdash");
h(q, b, R, "‘", "`", !0);
h(q, b, R, "‘", "\\textquoteleft");
h(q, b, R, "’", "'", !0);
h(q, b, R, "’", "\\textquoteright");
h(q, b, R, "“", "``", !0);
h(q, b, R, "“", "\\textquotedblleft");
h(q, b, R, "”", "''", !0);
h(q, b, R, "”", "\\textquotedblright");
h(f, b, R, "°", "\\degree", !0);
h(q, b, R, "°", "\\degree");
h(q, b, R, "°", "\\textdegree", !0);
h(f, b, R, "£", "\\pounds");
h(f, b, R, "£", "\\mathsterling", !0);
h(q, b, R, "£", "\\pounds");
h(q, b, R, "£", "\\textsterling", !0);
h(f, E, R, "✠", "\\maltese");
h(q, E, R, "✠", "\\maltese");
var Ml = '0123456789/@."';
for (var Xi = 0; Xi < Ml.length; Xi++) {
  var Ol = Ml.charAt(Xi);
  h(f, b, R, Ol, Ol);
}
var Dl = '0123456789!@*()-=+";:?/.,';
for (var Ji = 0; Ji < Dl.length; Ji++) {
  var Rl = Dl.charAt(Ji);
  h(q, b, R, Rl, Rl);
}
var hi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Zi = 0; Zi < hi.length; Zi++) {
  var Ua = hi.charAt(Zi);
  h(f, b, me, Ua, Ua), h(q, b, R, Ua, Ua);
}
h(f, E, R, "C", "ℂ");
h(q, E, R, "C", "ℂ");
h(f, E, R, "H", "ℍ");
h(q, E, R, "H", "ℍ");
h(f, E, R, "N", "ℕ");
h(q, E, R, "N", "ℕ");
h(f, E, R, "P", "ℙ");
h(q, E, R, "P", "ℙ");
h(f, E, R, "Q", "ℚ");
h(q, E, R, "Q", "ℚ");
h(f, E, R, "R", "ℝ");
h(q, E, R, "R", "ℝ");
h(f, E, R, "Z", "ℤ");
h(q, E, R, "Z", "ℤ");
h(f, b, me, "h", "ℎ");
h(q, b, me, "h", "ℎ");
var ge = "";
for (var Ct = 0; Ct < hi.length; Ct++) {
  var Ze = hi.charAt(Ct);
  ge = String.fromCharCode(55349, 56320 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56372 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56424 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56580 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56684 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56736 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56788 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56840 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56944 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), Ct < 26 && (ge = String.fromCharCode(55349, 56632 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge), ge = String.fromCharCode(55349, 56476 + Ct), h(f, b, me, Ze, ge), h(q, b, R, Ze, ge));
}
ge = "𝕜";
h(f, b, me, "k", ge);
h(q, b, R, "k", ge);
for (var Wr = 0; Wr < 10; Wr++) {
  var Mr = Wr.toString();
  ge = String.fromCharCode(55349, 57294 + Wr), h(f, b, me, Mr, ge), h(q, b, R, Mr, ge), ge = String.fromCharCode(55349, 57314 + Wr), h(f, b, me, Mr, ge), h(q, b, R, Mr, ge), ge = String.fromCharCode(55349, 57324 + Wr), h(f, b, me, Mr, ge), h(q, b, R, Mr, ge), ge = String.fromCharCode(55349, 57334 + Wr), h(f, b, me, Mr, ge), h(q, b, R, Mr, ge);
}
var js = "ÐÞþ";
for (var Qi = 0; Qi < js.length; Qi++) {
  var Wa = js.charAt(Qi);
  h(f, b, me, Wa, Wa), h(q, b, R, Wa, Wa);
}
var Ka = [
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
], Il = [
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
], ip = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, s = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [Ka[o][2], Ka[o][s]];
  } else if (120782 <= i && i <= 120831) {
    var l = Math.floor((i - 120782) / 10);
    return [Il[l][2], Il[l][s]];
  } else {
    if (i === 120485 || i === 120486)
      return [Ka[0][2], Ka[0][s]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new G("Unsupported character: " + e);
  }
}, Ai = function(e, t, n) {
  return He[n][e] && He[n][e].replace && (e = He[n][e].replace), {
    value: e,
    metrics: Uo(e, t, n)
  };
}, Xt = function(e, t, n, a, i) {
  var s = Ai(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var u = o.italic;
    (n === "text" || a && a.font === "mathit") && (u = 0), l = new Gt(e, o.height, o.depth, u, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new Gt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    l.maxFontSize = a.sizeMultiplier, a.style.isTight() && l.classes.push("mtight");
    var c = a.getColor();
    c && (l.style.color = c);
  }
  return l;
}, sp = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Ai(e, "Main-Bold", t).metrics ? Xt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || He[t][e].font === "main" ? Xt(e, "Main-Regular", t, n, a) : Xt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, op = function(e, t, n, a, i) {
  return i !== "textord" && Ai(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, lp = function(e, t, n) {
  var a = e.mode, i = e.text, s = ["mord"], o = a === "math" || a === "text" && t.font, l = o ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = ip(i, a)), u.length > 0)
    return Xt(i, u, a, t, s.concat(c));
  if (l) {
    var d, m;
    if (l === "boldsymbol") {
      var g = op(i, a, t, s, n);
      d = g.fontName, m = [g.fontClass];
    } else o ? (d = fd[l].fontName, m = [l]) : (d = Ga(l, t.fontWeight, t.fontShape), m = [l, t.fontWeight, t.fontShape]);
    if (Ai(i, d, a).metrics)
      return Xt(i, d, a, t, s.concat(m));
    if (dd.hasOwnProperty(i) && d.slice(0, 10) === "Typewriter") {
      for (var v = [], y = 0; y < i.length; y++)
        v.push(Xt(i[y], d, a, t, s.concat(m)));
      return md(v);
    }
  }
  if (n === "mathord")
    return Xt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var x = He[a][i] && He[a][i].font;
    if (x === "ams") {
      var _ = Ga("amsrm", t.fontWeight, t.fontShape);
      return Xt(i, _, a, t, s.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (x === "main" || !x) {
      var w = Ga("textrm", t.fontWeight, t.fontShape);
      return Xt(i, w, a, t, s.concat(t.fontWeight, t.fontShape));
    } else {
      var C = Ga(x, t.fontWeight, t.fontShape);
      return Xt(i, C, a, t, s.concat(C, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, up = (r, e) => {
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
}, cp = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Gt && n instanceof Gt && up(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Ko = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, Tt = function(e, t, n, a) {
  var i = new Ra(e, t, n, a);
  return Ko(i), i;
}, hd = (r, e, t, n) => new Ra(r, e, t, n), dp = function(e, t, n) {
  var a = Tt([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = V(a.height), a.maxFontSize = 1, a;
}, hp = function(e, t, n, a) {
  var i = new Wo(e, t, n, a);
  return Ko(i), i;
}, md = function(e) {
  var t = new Da(e);
  return Ko(t), t;
}, mp = function(e, t) {
  return e instanceof Da ? Tt([], [e], t) : e;
}, fp = function(e) {
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
  var u;
  if (e.positionType === "top") {
    for (var c = e.positionData, d = 0; d < e.children.length; d++) {
      var m = e.children[d];
      c -= m.type === "kern" ? m.size : m.elem.height + m.elem.depth;
    }
    u = c;
  } else if (e.positionType === "bottom")
    u = -e.positionData;
  else {
    var g = e.children[0];
    if (g.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      u = -g.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      u = -g.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: u
  };
}, pp = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = fp(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      i = Math.max(i, l.maxFontSize, l.height);
    }
  }
  i += 2;
  var u = Tt(["pstrut"], []);
  u.style.height = V(i);
  for (var c = [], d = a, m = a, g = a, v = 0; v < n.length; v++) {
    var y = n[v];
    if (y.type === "kern")
      g += y.size;
    else {
      var x = y.elem, _ = y.wrapperClasses || [], w = y.wrapperStyle || {}, C = Tt(_, [u, x], void 0, w);
      C.style.top = V(-i - g - x.depth), y.marginLeft && (C.style.marginLeft = y.marginLeft), y.marginRight && (C.style.marginRight = y.marginRight), c.push(C), g += x.height + x.depth;
    }
    d = Math.min(d, g), m = Math.max(m, g);
  }
  var T = Tt(["vlist"], c);
  T.style.height = V(m);
  var k;
  if (d < 0) {
    var N = Tt([], []), I = Tt(["vlist"], [N]);
    I.style.height = V(-d);
    var D = Tt(["vlist-s"], [new Gt("​")]);
    k = [Tt(["vlist-r"], [T, D]), Tt(["vlist-r"], [I])];
  } else
    k = [Tt(["vlist-r"], [T])];
  var M = Tt(["vlist-t"], k);
  return k.length === 2 && M.classes.push("vlist-t2"), M.height = m, M.depth = -d, M;
}, gp = (r, e) => {
  var t = Tt(["mspace"], [], e), n = Xe(r, e);
  return t.style.marginRight = V(n), t;
}, Ga = function(e, t, n) {
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
}, fd = {
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
}, pd = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, vp = function(e, t) {
  var [n, a, i] = pd[e], s = new Lr(n), o = new kr([s], {
    width: V(a),
    height: V(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + V(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), l = hd(["overlay"], [o], t);
  return l.height = i, l.style.height = V(i), l.style.width = V(a), l;
}, L = {
  fontMap: fd,
  makeSymbol: Xt,
  mathsym: sp,
  makeSpan: Tt,
  makeSvgSpan: hd,
  makeLineSpan: dp,
  makeAnchor: hp,
  makeFragment: md,
  wrapFragment: mp,
  makeVList: pp,
  makeOrd: lp,
  makeGlue: gp,
  staticSvg: vp,
  svgData: pd,
  tryCombineChars: cp
}, Ve = {
  number: 3,
  unit: "mu"
}, Kr = {
  number: 4,
  unit: "mu"
}, mr = {
  number: 5,
  unit: "mu"
}, bp = {
  mord: {
    mop: Ve,
    mbin: Kr,
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
    mord: Kr,
    mop: Kr,
    mopen: Kr,
    minner: Kr
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
    mbin: Kr,
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
    mbin: Kr,
    mrel: mr,
    mopen: Ve,
    mpunct: Ve,
    minner: Ve
  }
}, yp = {
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
}, gd = {}, mi = {}, fi = {};
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
    gd[t[l]] = o;
  e && (i && (mi[e] = i), s && (fi[e] = s));
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
var pi = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, at = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Nr = L.makeSpan, xp = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], wp = ["rightmost", "mrel", "mclose", "mpunct"], _p = {
  display: fe.DISPLAY,
  text: fe.TEXT,
  script: fe.SCRIPT,
  scriptscript: fe.SCRIPTSCRIPT
}, Sp = {
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
    if (o instanceof Da) {
      var l = o.children;
      i.push(...l);
    } else
      i.push(o);
  }
  if (L.tryCombineChars(i), !n)
    return i;
  var u = t;
  if (e.length === 1) {
    var c = e[0];
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(_p[c.style]));
  }
  var d = Nr([a[0] || "leftmost"], [], t), m = Nr([a[1] || "rightmost"], [], t), g = n === "root";
  return Fl(i, (v, y) => {
    var x = y.classes[0], _ = v.classes[0];
    x === "mbin" && ue.contains(wp, _) ? y.classes[0] = "mord" : _ === "mbin" && ue.contains(xp, x) && (v.classes[0] = "mord");
  }, {
    node: d
  }, m, g), Fl(i, (v, y) => {
    var x = $s(y), _ = $s(v), w = x && _ ? v.hasClass("mtight") ? yp[x][_] : bp[x][_] : null;
    if (w)
      return L.makeGlue(w, u);
  }, {
    node: d
  }, m, g), i;
}, Fl = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = vd(o);
    if (l) {
      r(l.children, t, n, null, i);
      continue;
    }
    var u = !o.hasClass("mspace");
    if (u) {
      var c = t(o, n.node);
      c && (n.insertAfter ? n.insertAfter(c) : (e.unshift(c), s++));
    }
    u ? n.node = o : i && o.hasClass("newline") && (n.node = Nr(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((d) => (m) => {
      e.splice(d + 1, 0, m), s++;
    })(s);
  }
  a && e.pop();
}, vd = function(e) {
  return e instanceof Da || e instanceof Wo || e instanceof Ra && e.hasClass("enclosing") ? e : null;
}, Cp = function r(e, t) {
  var n = vd(e);
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
}, $s = function(e, t) {
  return e ? (t && (e = Cp(e, t)), Sp[e.classes[0]] || null) : null;
}, fa = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Nr(t.concat(n));
}, De = function(e, t, n) {
  if (!e)
    return Nr();
  if (mi[e.type]) {
    var a = mi[e.type](e, t);
    if (n && t.size !== n.size) {
      a = Nr(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Ya(r, e) {
  var t = Nr(["base"], r, e), n = Nr(["strut"]);
  return n.style.height = V(t.height + t.depth), t.depth && (n.style.verticalAlign = V(-t.depth)), t.children.unshift(n), t;
}
function qs(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = ft(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (i.push(Ya(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(Ya(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(Ya(s, e));
  var u;
  t ? (u = Ya(ft(t, e, !0)), u.classes = ["tag"], i.push(u)) : a && i.push(a);
  var c = Nr(["katex-html"], i);
  if (c.setAttribute("aria-hidden", "true"), u) {
    var d = u.children[0];
    d.style.height = V(c.height + c.depth), c.depth && (d.style.verticalAlign = V(-c.depth));
  }
  return c;
}
function bd(r) {
  return new Da(r);
}
class Ht {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ue.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ue.escape(Fr(this.classes)) + '"'), e += ">";
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
class ia {
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
    return ue.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class kp {
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
var K = {
  MathNode: Ht,
  TextNode: ia,
  SpaceNode: kp,
  newDocumentFragment: bd
}, Yt = function(e, t, n) {
  return He[t][e] && He[t][e].replace && e.charCodeAt(0) !== 55349 && !(dd.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = He[t][e].replace), new K.TextNode(e);
}, Go = function(e) {
  return e.length === 1 ? e[0] : new K.MathNode("mrow", e);
}, Yo = function(e, t) {
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
  if (ue.contains(["\\imath", "\\jmath"], i))
    return null;
  He[a][i] && He[a][i].replace && (i = He[a][i].replace);
  var s = L.fontMap[n].fontName;
  return Uo(i, s, a) ? L.fontMap[n].variant : null;
}, Dt = function(e, t, n) {
  if (e.length === 1) {
    var a = ze(e[0], t);
    return n && a instanceof Ht && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var l = ze(e[o], t);
    if (l instanceof Ht && s instanceof Ht) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mi" && l.children.length === 1 && s.type === "mn") {
        var u = l.children[0];
        if (u instanceof ia && u.text === ".") {
          s.children.push(...l.children);
          continue;
        }
      } else if (s.type === "mi" && s.children.length === 1) {
        var c = s.children[0];
        if (c instanceof ia && c.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var d = l.children[0];
          d instanceof ia && d.text.length > 0 && (d.text = d.text.slice(0, 1) + "̸" + d.text.slice(1), i.pop());
        }
      }
    }
    i.push(l), s = l;
  }
  return i;
}, zr = function(e, t, n) {
  return Go(Dt(e, t, n));
}, ze = function(e, t) {
  if (!e)
    return new K.MathNode("mrow");
  if (fi[e.type]) {
    var n = fi[e.type](e, t);
    return n;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function Ll(r, e, t, n, a) {
  var i = Dt(r, t), s;
  i.length === 1 && i[0] instanceof Ht && ue.contains(["mrow", "mtable"], i[0].type) ? s = i[0] : s = new K.MathNode("mrow", i);
  var o = new K.MathNode("annotation", [new K.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new K.MathNode("semantics", [s, o]), u = new K.MathNode("math", [l]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && u.setAttribute("display", "block");
  var c = a ? "katex" : "katex-mathml";
  return L.makeSpan([c], [u]);
}
var yd = function(e) {
  return new gr({
    style: e.displayMode ? fe.DISPLAY : fe.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, xd = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = L.makeSpan(n, [e]);
  }
  return e;
}, Np = function(e, t, n) {
  var a = yd(n), i;
  if (n.output === "mathml")
    return Ll(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = qs(e, a);
    i = L.makeSpan(["katex"], [s]);
  } else {
    var o = Ll(e, t, a, n.displayMode, !1), l = qs(e, a);
    i = L.makeSpan(["katex"], [o, l]);
  }
  return xd(i, n);
}, Ep = function(e, t, n) {
  var a = yd(n), i = qs(e, a), s = L.makeSpan(["katex"], [i]);
  return xd(s, n);
}, Tp = {
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
}, Ap = function(e) {
  var t = new K.MathNode("mo", [new K.TextNode(Tp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Mp = {
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
}, Op = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Dp = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (ue.contains(["widehat", "widecheck", "widetilde", "utilde"], l)) {
      var u = e, c = Op(u.base), d, m, g;
      if (c > 5)
        l === "widehat" || l === "widecheck" ? (d = 420, o = 2364, g = 0.42, m = l + "4") : (d = 312, o = 2340, g = 0.34, m = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][c];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], d = [0, 239, 300, 360, 420][v], g = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], m = l + v) : (o = [0, 600, 1033, 2339, 2340][v], d = [0, 260, 286, 306, 312][v], g = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], m = "tilde" + v);
      }
      var y = new Lr(m), x = new kr([y], {
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
      var _ = [], w = Mp[l], [C, T, k] = w, N = k / 1e3, I = C.length, D, M;
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
        var j = new Lr(C[z]), P = new kr([j], {
          width: "400em",
          height: V(N),
          viewBox: "0 0 " + o + " " + k,
          preserveAspectRatio: M[z] + " slice"
        }), X = L.makeSvgSpan([D[z]], [P], t);
        if (I === 1)
          return {
            span: X,
            minWidth: T,
            height: N
          };
        X.style.height = V(N), _.push(X);
      }
      return {
        span: L.makeSpan(["stretchy"], _, t),
        minWidth: T,
        height: N
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = V(s), i > 0 && (a.style.minWidth = V(i)), a;
}, Rp = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = L.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var l = i.color && i.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new Bs({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new Bs({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new kr(u, {
      width: "100%",
      height: V(o)
    });
    s = L.makeSvgSpan([], [c], i);
  }
  return s.height = o, s.style.height = V(o), s;
}, Er = {
  encloseSpan: Rp,
  mathMLnode: Ap,
  svgSpan: Dp
};
function Se(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Vo(r) {
  var e = Mi(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Mi(r) {
  return r && (r.type === "atom" || ap.hasOwnProperty(r.type)) ? r : null;
}
var Xo = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = Se(r.base, "accent"), t = n.base, r.base = t, a = rp(De(r, e)), r.base = n) : (n = Se(r, "accent"), t = n.base);
  var i = De(t, e.havingCrampedStyle()), s = n.isShifty && ue.isCharacterBox(t), o = 0;
  if (s) {
    var l = ue.getBaseElem(t), u = De(l, e.havingCrampedStyle());
    o = Al(u).skew;
  }
  var c = n.label === "\\c", d = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = Er.svgSpan(n, e), m = L.makeVList({
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
    }, e, "textord"), g = Al(g), g.italic = 0, v = g.width, c && (d += g.depth)), m = L.makeSpan(["accent-body"], [g]);
    var y = n.label === "\\textcircled";
    y && (m.classes.push("accent-full"), d = i.height);
    var x = o;
    y || (x -= v / 2), m.style.left = V(x), n.label === "\\textcircled" && (m.style.top = ".2em"), m = L.makeVList({
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
  var _ = L.makeSpan(["mord", "accent"], [m], e);
  return a ? (a.children[0] = _, a.height = Math.max(_.height, a.height), a.classes[0] = "mord", a) : _;
}, wd = (r, e) => {
  var t = r.isStretchy ? Er.mathMLnode(r.label) : new K.MathNode("mo", [Yt(r.label, r.mode)]), n = new K.MathNode("mover", [ze(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, Ip = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
Z({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = pi(e[0]), n = !Ip.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Xo,
  mathmlBuilder: wd
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
  htmlBuilder: Xo,
  mathmlBuilder: wd
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
    var t = De(r.base, e), n = Er.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = L.makeVList({
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
    var t = Er.mathMLnode(r.label), n = new K.MathNode("munder", [ze(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Va = (r) => {
  var e = new K.MathNode("mpadded", r ? [r] : []);
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
    var o = Er.svgSpan(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, u = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
    var c;
    if (s) {
      var d = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      c = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
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
      c = L.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: u
        }, {
          type: "elem",
          elem: o,
          shift: l
        }]
      }, e);
    return c.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [c], e);
  },
  mathmlBuilder(r, e) {
    var t = Er.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = Va(ze(r.body, e));
      if (r.below) {
        var i = Va(ze(r.below, e));
        n = new K.MathNode("munderover", [t, i, a]);
      } else
        n = new K.MathNode("mover", [t, a]);
    } else if (r.below) {
      var s = Va(ze(r.below, e));
      n = new K.MathNode("munder", [t, s]);
    } else
      n = Va(), n = new K.MathNode("mover", [t, n]);
    return n;
  }
});
var Fp = L.makeSpan;
function _d(r, e) {
  var t = ft(r.body, e, !0);
  return Fp([r.mclass], t, e);
}
function Sd(r, e) {
  var t, n = Dt(r.body, e);
  return r.mclass === "minner" ? t = new K.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new K.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new K.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
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
      isCharacterBox: ue.isCharacterBox(a)
    };
  },
  htmlBuilder: _d,
  mathmlBuilder: Sd
});
var Oi = (r) => {
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
      mclass: Oi(e[0]),
      body: at(e[1]),
      isCharacterBox: ue.isCharacterBox(e[1])
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
    n !== "\\stackrel" ? s = Oi(a) : s = "mrel";
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
      isCharacterBox: ue.isCharacterBox(l)
    };
  },
  htmlBuilder: _d,
  mathmlBuilder: Sd
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
      mclass: Oi(e[0]),
      body: at(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = ft(r.body, e, !0), n = L.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = Dt(r.body, e), n = new K.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var Lp = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, zl = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Pl = (r) => r.type === "textord" && r.text === "@", zp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Pp(r, e, t) {
  var n = Lp[r];
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
      var u = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [u], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Bp(r) {
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
    for (var s = e[i], o = zl(), l = 0; l < s.length; l++)
      if (!Pl(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var u = Vo(s[l]).text, c = new Array(2);
        if (c[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, c[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var d = 0; d < 2; d++) {
            for (var m = !0, g = l + 1; g < s.length; g++) {
              if (zp(s[g], u)) {
                m = !1, l = g;
                break;
              }
              if (Pl(s[g]))
                throw new G("Missing a " + u + " character to complete a CD arrow.", s[g]);
              c[d].body.push(s[g]);
            }
            if (m)
              throw new G("Missing a " + u + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', s[l]);
        var v = Pp(u, c, r), y = {
          type: "styling",
          body: [v],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(y), o = zl();
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
    var t = new K.MathNode("mrow", [ze(r.label, e)]);
    return t = new K.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new K.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
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
    return new K.MathNode("mrow", [ze(r.fragment, e)]);
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
    } = r, n = Se(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = Se(a[s], "textord");
      i += o.text;
    }
    var l = parseInt(i), u;
    if (isNaN(l))
      throw new G("\\@char has non-numeric argument " + i);
    if (l < 0 || l >= 1114111)
      throw new G("\\@char with invalid code point " + i);
    return l <= 65535 ? u = String.fromCharCode(l) : (l -= 65536, u = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var Cd = (r, e) => {
  var t = ft(r.body, e.withColor(r.color), !1);
  return L.makeFragment(t);
}, kd = (r, e) => {
  var t = Dt(r.body, e.withColor(r.color)), n = new K.MathNode("mstyle", t);
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
    } = r, n = Se(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: at(a)
    };
  },
  htmlBuilder: Cd,
  mathmlBuilder: kd
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
    } = r, a = Se(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  },
  htmlBuilder: Cd,
  mathmlBuilder: kd
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
      size: a && Se(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = L.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = V(Xe(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new K.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", V(Xe(r.size, e)))), t;
  }
});
var Hs = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Nd = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", r);
  return e;
}, jp = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Ed = (r, e, t, n) => {
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
    if (Hs[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = Hs[n.text]), Se(e.parseFunction(), "internal");
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
    }, t === Hs[t]), {
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
    } = r, n = Nd(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = jp(e);
    return Ed(e, n, a, t === "\\\\globallet"), {
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
    } = r, n = Nd(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Ed(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ra = function(e, t, n) {
  var a = He.math[e] && He.math[e].replace, i = Uo(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Jo = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = L.makeSpan(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, Td = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = V(i), e.height -= i, e.depth += i;
}, $p = function(e, t, n, a, i, s) {
  var o = L.makeSymbol(e, "Main-Regular", i, a), l = Jo(o, t, a, s);
  return n && Td(l, a, t), l;
}, qp = function(e, t, n, a) {
  return L.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, Ad = function(e, t, n, a, i, s) {
  var o = qp(e, t, i, a), l = Jo(L.makeSpan(["delimsizing", "size" + t], [o], a), fe.TEXT, a, s);
  return n && Td(l, a, fe.TEXT), l;
}, es = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = L.makeSpan(["delimsizinginner", a], [L.makeSpan([], [L.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, ts = function(e, t, n) {
  var a = ar["Size4-Regular"][e.charCodeAt(0)] ? ar["Size4-Regular"][e.charCodeAt(0)][4] : ar["Size1-Regular"][e.charCodeAt(0)][4], i = new Lr("inner", Yf(e, Math.round(1e3 * t))), s = new kr([i], {
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
}, Us = 8e-3, Xa = {
  type: "kern",
  size: -1 * Us
}, Hp = ["|", "\\lvert", "\\rvert", "\\vert"], Up = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Md = function(e, t, n, a, i, s) {
  var o, l, u, c, d = "", m = 0;
  o = u = c = e, l = null;
  var g = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? o = u = "⏐" : e === "\\Downarrow" ? o = u = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", u = "‖", c = "\\Downarrow") : ue.contains(Hp, e) ? (u = "∣", d = "vert", m = 333) : ue.contains(Up, e) ? (u = "∥", d = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", u = "⎢", c = "⎣", g = "Size4-Regular", d = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", u = "⎥", c = "⎦", g = "Size4-Regular", d = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (u = o = "⎢", c = "⎣", g = "Size4-Regular", d = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", u = c = "⎢", g = "Size4-Regular", d = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (u = o = "⎥", c = "⎦", g = "Size4-Regular", d = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", u = c = "⎥", g = "Size4-Regular", d = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", u = "⎜", c = "⎝", g = "Size4-Regular", d = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", u = "⎟", c = "⎠", g = "Size4-Regular", d = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", c = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", c = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", c = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", c = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", c = "⎭", u = "⎪", g = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", c = "⎩", u = "⎪", g = "Size4-Regular");
  var v = ra(o, g, i), y = v.height + v.depth, x = ra(u, g, i), _ = x.height + x.depth, w = ra(c, g, i), C = w.height + w.depth, T = 0, k = 1;
  if (l !== null) {
    var N = ra(l, g, i);
    T = N.height + N.depth, k = 2;
  }
  var I = y + C + T, D = Math.max(0, Math.ceil((t - I) / (k * _))), M = I + D * k * _, F = a.fontMetrics().axisHeight;
  n && (F *= a.sizeMultiplier);
  var z = M / 2 - F, j = [];
  if (d.length > 0) {
    var P = M - y - C, X = Math.round(M * 1e3), Y = Vf(d, Math.round(P * 1e3)), ee = new Lr(d, Y), ce = (m / 1e3).toFixed(3) + "em", J = (X / 1e3).toFixed(3) + "em", de = new kr([ee], {
      width: ce,
      height: J,
      viewBox: "0 0 " + m + " " + X
    }), le = L.makeSvgSpan([], [de], a);
    le.height = X / 1e3, le.style.width = ce, le.style.height = J, j.push({
      type: "elem",
      elem: le
    });
  } else {
    if (j.push(es(c, g, i)), j.push(Xa), l === null) {
      var Ne = M - y - C + 2 * Us;
      j.push(ts(u, Ne, a));
    } else {
      var se = (M - y - C - T) / 2 + 2 * Us;
      j.push(ts(u, se, a)), j.push(Xa), j.push(es(l, g, i)), j.push(Xa), j.push(ts(u, se, a));
    }
    j.push(Xa), j.push(es(o, g, i));
  }
  var Pe = a.havingBaseStyle(fe.TEXT), Be = L.makeVList({
    positionType: "bottom",
    positionData: z,
    children: j
  }, Pe);
  return Jo(L.makeSpan(["delimsizing", "mult"], [Be], Pe), fe.TEXT, a, s);
}, rs = 80, ns = 0.08, as = function(e, t, n, a, i) {
  var s = Gf(e, a, n), o = new Lr(e, s), l = new kr([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: V(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return L.makeSvgSpan(["hide-tail"], [l], i);
}, Wp = function(e, t) {
  var n = t.havingBaseSizing(), a = Id("\\surd", e * n.sizeMultiplier, Rd, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l = 0, u = 0, c = 0, d;
  return a.type === "small" ? (c = 1e3 + 1e3 * s + rs, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), l = (1 + s + ns) / i, u = (1 + s) / i, o = as("sqrtMain", l, c, s, t), o.style.minWidth = "0.853em", d = 0.833 / i) : a.type === "large" ? (c = (1e3 + rs) * sa[a.size], u = (sa[a.size] + s) / i, l = (sa[a.size] + s + ns) / i, o = as("sqrtSize" + a.size, l, c, s, t), o.style.minWidth = "1.02em", d = 1 / i) : (l = e + s + ns, u = e + s, c = Math.floor(1e3 * e + s) + rs, o = as("sqrtTall", l, c, s, t), o.style.minWidth = "0.742em", d = 1.056), o.height = u, o.style.height = V(l), {
    span: o,
    advanceWidth: d,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, Od = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Kp = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Dd = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], sa = [0, 1.2, 1.8, 2.4, 3], Gp = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ue.contains(Od, e) || ue.contains(Dd, e))
    return Ad(e, t, !1, n, a, i);
  if (ue.contains(Kp, e))
    return Md(e, sa[t], !1, n, a, i);
  throw new G("Illegal delimiter: '" + e + "'");
}, Yp = [{
  type: "small",
  style: fe.SCRIPTSCRIPT
}, {
  type: "small",
  style: fe.SCRIPT
}, {
  type: "small",
  style: fe.TEXT
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
}], Vp = [{
  type: "small",
  style: fe.SCRIPTSCRIPT
}, {
  type: "small",
  style: fe.SCRIPT
}, {
  type: "small",
  style: fe.TEXT
}, {
  type: "stack"
}], Rd = [{
  type: "small",
  style: fe.SCRIPTSCRIPT
}, {
  type: "small",
  style: fe.SCRIPT
}, {
  type: "small",
  style: fe.TEXT
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
}], Xp = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Id = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length && n[s].type !== "stack"; s++) {
    var o = ra(e, Xp(n[s]), "math"), l = o.height + o.depth;
    if (n[s].type === "small") {
      var u = a.havingBaseStyle(n[s].style);
      l *= u.sizeMultiplier;
    }
    if (l > t)
      return n[s];
  }
  return n[n.length - 1];
}, Fd = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  ue.contains(Dd, e) ? o = Yp : ue.contains(Od, e) ? o = Rd : o = Vp;
  var l = Id(e, t, o, a);
  return l.type === "small" ? $p(e, l.style, n, a, i, s) : l.type === "large" ? Ad(e, l.size, n, a, i, s) : Md(e, t, n, a, i, s);
}, Jp = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, l = 901, u = 5 / a.fontMetrics().ptPerEm, c = Math.max(t - o, n + o), d = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    c / 500 * l,
    2 * c - u
  );
  return Fd(e, d, !0, a, i, s);
}, Sr = {
  sqrtImage: Wp,
  sizedDelim: Gp,
  sizeToMaxHeight: sa,
  customSizedDelim: Fd,
  leftRightDelim: Jp
}, Bl = {
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
}, Zp = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Di(r, e) {
  var t = Mi(r);
  if (t && ue.contains(Zp, t.text))
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
    var t = Di(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Bl[r.funcName].size,
      mclass: Bl[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? L.makeSpan([r.mclass]) : Sr.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Yt(r.delim, r.mode));
    var t = new K.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = V(Sr.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function jl(r) {
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
      delim: Di(e[0], r).text,
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
    var t = Di(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = Se(n.parseFunction(), "leftright-right");
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
    jl(r);
    for (var t = ft(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++)
      t[s].isMiddle ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var o;
    if (r.left === "." ? o = fa(e, ["mopen"]) : o = Sr.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(o), i)
      for (var l = 1; l < t.length; l++) {
        var u = t[l], c = u.isMiddle;
        c && (t[l] = Sr.leftRightDelim(c.delim, n, a, c.options, r.mode, []));
      }
    var d;
    if (r.right === ".")
      d = fa(e, ["mclose"]);
    else {
      var m = r.rightColor ? e.withColor(r.rightColor) : e;
      d = Sr.leftRightDelim(r.right, n, a, m, r.mode, ["mclose"]);
    }
    return t.push(d), L.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    jl(r);
    var t = Dt(r.body, e);
    if (r.left !== ".") {
      var n = new K.MathNode("mo", [Yt(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new K.MathNode("mo", [Yt(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Go(t);
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
    var t = Di(e[0], r);
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
      t = fa(e, []);
    else {
      t = Sr.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? Yt("|", "text") : Yt(r.delim, r.mode), n = new K.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Zo = (r, e) => {
  var t = L.wrapFragment(De(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s = 0, o = ue.isCharacterBox(r.body);
  if (n === "sout")
    i = L.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = Xe({
      number: 0.6,
      unit: "pt"
    }, e), u = Xe({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var d = t.height + t.depth + l + u;
    t.style.paddingLeft = V(d / 2 + l);
    var m = Math.floor(1e3 * d * a), g = Wf(m), v = new kr([new Lr("phase", g)], {
      width: "400em",
      height: V(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = L.makeSvgSpan(["hide-tail"], [v], e), i.style.height = V(d), s = t.depth + l + u;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var y = 0, x = 0, _ = 0;
    /box/.test(n) ? (_ = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), y = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : _), x = y) : n === "angl" ? (_ = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), y = 4 * _, x = Math.max(0, 0.25 - t.depth)) : (y = o ? 0.2 : 0, x = y), i = Er.encloseSpan(t, n, y, x, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = V(_)) : n === "angl" && _ !== 0.049 && (i.style.borderTopWidth = V(_), i.style.borderRightWidth = V(_)), s = t.depth + x, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
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
}, Qo = (r, e) => {
  var t = 0, n = new K.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ze(r.body, e)]);
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
    } = r, i = Se(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: Zo,
  mathmlBuilder: Qo
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
    } = r, i = Se(e[0], "color-token").color, s = Se(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: s,
      borderColor: i,
      body: o
    };
  },
  htmlBuilder: Zo,
  mathmlBuilder: Qo
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
  htmlBuilder: Zo,
  mathmlBuilder: Qo
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
var Ld = {};
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
    Ld[t[l]] = o;
  i && (mi[e] = i), s && (fi[e] = s);
}
var zd = {};
function S(r, e) {
  zd[r] = e;
}
function $l(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Ri = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new G("{" + r.envName + "} can be used only in display mode.");
};
function e0(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function Hr(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: l,
    singleRow: u,
    emptySingleRow: c,
    maxNumCols: d,
    leqno: m
  } = e;
  if (r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var g = r.gullet.expandMacroAsText("\\arraystretch");
    if (g == null)
      s = 1;
    else if (s = parseFloat(g), !s || s < 0)
      throw new G("Invalid \\arraystretch: " + g);
  }
  r.gullet.beginGroup();
  var v = [], y = [v], x = [], _ = [], w = l != null ? [] : void 0;
  function C() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function T() {
    w && (r.gullet.macros.get("\\df@tag") ? (w.push(r.subparse([new Kt("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (C(), _.push($l(r)); ; ) {
    var k = r.parseExpression(!1, u ? "\\end" : "\\\\");
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
    var N = r.fetch().text;
    if (N === "&") {
      if (d && v.length === d) {
        if (u || o)
          throw new G("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (N === "\\end") {
      T(), v.length === 1 && k.type === "styling" && k.body[0].body.length === 0 && (y.length > 1 || !c) && y.pop(), _.length < y.length + 1 && _.push([]);
      break;
    } else if (N === "\\\\") {
      r.consume();
      var I = void 0;
      r.gullet.future().text !== " " && (I = r.parseSizeGroup(!0)), x.push(I ? I.value : null), T(), _.push($l(r)), v = [], y.push(v), C();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: s,
    body: y,
    cols: i,
    rowGaps: x,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: _,
    colSeparationType: o,
    tags: w,
    leqno: m
  };
}
function t0(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var dr = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), d = 1 / t.fontMetrics().ptPerEm, m = 5 * d;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var g = t.havingStyle(fe.SCRIPT).sizeMultiplier;
    m = 0.2778 * (g / t.sizeMultiplier);
  }
  var v = e.colSeparationType === "CD" ? Xe({
    number: 3,
    unit: "ex"
  }, t) : 12 * d, y = 3 * d, x = e.arraystretch * v, _ = 0.7 * x, w = 0.3 * x, C = 0;
  function T($e) {
    for (var It = 0; It < $e.length; ++It)
      It > 0 && (C += 0.25), u.push({
        pos: C,
        isDashed: $e[It]
      });
  }
  for (T(s[0]), n = 0; n < e.body.length; ++n) {
    var k = e.body[n], N = _, I = w;
    o < k.length && (o = k.length);
    var D = new Array(k.length);
    for (a = 0; a < k.length; ++a) {
      var M = De(k[a], t);
      I < M.depth && (I = M.depth), N < M.height && (N = M.height), D[a] = M;
    }
    var F = e.rowGaps[n], z = 0;
    F && (z = Xe(F, t), z > 0 && (z += w, I < z && (I = z), z = 0)), e.addJot && (I += y), D.height = N, D.depth = I, C += N, D.pos = C, C += I + z, l[n] = D, T(s[n + 1]);
  }
  var j = C / 2 + t.fontMetrics().axisHeight, P = e.cols || [], X = [], Y, ee, ce = [];
  if (e.tags && e.tags.some(($e) => $e))
    for (n = 0; n < i; ++n) {
      var J = l[n], de = J.pos - j, le = e.tags[n], Ne = void 0;
      le === !0 ? Ne = L.makeSpan(["eqn-num"], [], t) : le === !1 ? Ne = L.makeSpan([], [], t) : Ne = L.makeSpan([], ft(le, t, !0), t), Ne.depth = J.depth, Ne.height = J.height, ce.push({
        type: "elem",
        elem: Ne,
        shift: de
      });
    }
  for (
    a = 0, ee = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || ee < P.length;
    ++a, ++ee
  ) {
    for (var se = P[ee] || {}, Pe = !0; se.type === "separator"; ) {
      if (Pe || (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(t.fontMetrics().doubleRuleSep), X.push(Y)), se.separator === "|" || se.separator === ":") {
        var Be = se.separator === "|" ? "solid" : "dashed", je = L.makeSpan(["vertical-separator"], [], t);
        je.style.height = V(C), je.style.borderRightWidth = V(c), je.style.borderRightStyle = Be, je.style.margin = "0 " + V(-c / 2);
        var dt = C - j;
        dt && (je.style.verticalAlign = V(-dt)), X.push(je);
      } else
        throw new G("Invalid separator type: " + se.separator);
      ee++, se = P[ee] || {}, Pe = !1;
    }
    if (!(a >= o)) {
      var Je = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Je = ue.deflt(se.pregap, m), Je !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(Je), X.push(Y)));
      var Ge = [];
      for (n = 0; n < i; ++n) {
        var Rt = l[n], wt = Rt[a];
        if (wt) {
          var Qt = Rt.pos - j;
          wt.depth = Rt.depth, wt.height = Rt.height, Ge.push({
            type: "elem",
            elem: wt,
            shift: Qt
          });
        }
      }
      Ge = L.makeVList({
        positionType: "individualShift",
        children: Ge
      }, t), Ge = L.makeSpan(["col-align-" + (se.align || "c")], [Ge]), X.push(Ge), (a < o - 1 || e.hskipBeforeAndAfter) && (Je = ue.deflt(se.postgap, m), Je !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = V(Je), X.push(Y)));
    }
  }
  if (l = L.makeSpan(["mtable"], X), u.length > 0) {
    for (var te = L.makeLineSpan("hline", t, c), we = L.makeLineSpan("hdashline", t, c), We = [{
      type: "elem",
      elem: l,
      shift: 0
    }]; u.length > 0; ) {
      var _t = u.pop(), tt = _t.pos - j;
      _t.isDashed ? We.push({
        type: "elem",
        elem: we,
        shift: tt
      }) : We.push({
        type: "elem",
        elem: te,
        shift: tt
      });
    }
    l = L.makeVList({
      positionType: "individualShift",
      children: We
    }, t);
  }
  if (ce.length === 0)
    return L.makeSpan(["mord"], [l], t);
  var ht = L.makeVList({
    positionType: "individualShift",
    children: ce
  }, t);
  return ht = L.makeSpan(["tag"], [ht], t), L.makeFragment([l, ht]);
}, Qp = {
  c: "center ",
  l: "left ",
  r: "right "
}, hr = function(e, t) {
  for (var n = [], a = new K.MathNode("mtd", [], ["mtr-glue"]), i = new K.MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], u = 0; u < o.length; u++)
      l.push(new K.MathNode("mtd", [ze(o[u], t)]));
    e.tags && e.tags[s] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)), n.push(new K.MathNode("mtr", l));
  }
  var c = new K.MathNode("mtable", n), d = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", V(d));
  var m = "", g = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, y = "", x = !1, _ = 0, w = v.length;
    v[0].type === "separator" && (m += "top ", _ = 1), v[v.length - 1].type === "separator" && (m += "bottom ", w -= 1);
    for (var C = _; C < w; C++)
      v[C].type === "align" ? (g += Qp[v[C].align], x && (y += "none "), x = !0) : v[C].type === "separator" && x && (y += v[C].separator === "|" ? "solid " : "dashed ", x = !1);
    c.setAttribute("columnalign", g.trim()), /[sd]/.test(y) && c.setAttribute("columnlines", y.trim());
  }
  if (e.colSeparationType === "align") {
    for (var T = e.cols || [], k = "", N = 1; N < T.length; N++)
      k += N % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", k.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var I = "", D = e.hLinesBeforeRow;
  m += D[0].length > 0 ? "left " : "", m += D[D.length - 1].length > 0 ? "right " : "";
  for (var M = 1; M < D.length - 1; M++)
    I += D[M].length === 0 ? "none " : D[M][0] ? "dashed " : "solid ";
  return /[sd]/.test(I) && c.setAttribute("rowlines", I.trim()), m !== "" && (c = new K.MathNode("menclose", [c]), c.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (c = new K.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, Pd = function(e, t) {
  e.envName.indexOf("ed") === -1 && Ri(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", s = Hr(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : e0(e.envName),
    emptySingleRow: !0,
    colSeparationType: a,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), o, l = 0, u = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var c = "", d = 0; d < t[0].body.length; d++) {
      var m = Se(t[0].body[d], "textord");
      c += m.text;
    }
    o = Number(c), l = o * 2;
  }
  var g = !l;
  s.body.forEach(function(_) {
    for (var w = 1; w < _.length; w += 2) {
      var C = Se(_[w], "styling"), T = Se(C.body[0], "ordgroup");
      T.body.unshift(u);
    }
    if (g)
      l < _.length && (l = _.length);
    else {
      var k = _.length / 2;
      if (o < k)
        throw new G("Too many math in a row: " + ("expected " + o + ", but got " + k), _[0]);
    }
  });
  for (var v = 0; v < l; ++v) {
    var y = "r", x = 0;
    v % 2 === 1 ? y = "l" : v > 0 && g && (x = 1), n[v] = {
      type: "align",
      align: y,
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
    var t = Mi(e[0]), n = t ? [e[0]] : Se(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = Vo(s), l = o.text;
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
    return Hr(r.parser, i, t0(r.envName));
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
    var i = Hr(r.parser, n, t0(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
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
    }, t = Hr(r.parser, e, "script");
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
    var t = Mi(e[0]), n = t ? [e[0]] : Se(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = Vo(s), l = o.text;
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
    if (i = Hr(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
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
    }, t = Hr(r.parser, e, t0(r.envName));
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
  handler: Pd,
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
    ue.contains(["gather", "gather*"], r.envName) && Ri(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: e0(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return Hr(r.parser, e, "display");
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
  handler: Pd,
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
    Ri(r);
    var e = {
      autoTag: e0(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return Hr(r.parser, e, "display");
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
    return Ri(r), Bp(r.parser);
  },
  htmlBuilder: dr,
  mathmlBuilder: hr
});
S("\\nonumber", "\\gdef\\@eqnsw{0}");
S("\\notag", "\\nonumber");
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
var ql = Ld;
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
      i += Se(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!ql.hasOwnProperty(i))
        throw new G("No such environment: " + i, a);
      var o = ql[i], {
        args: l,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", o), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, d = o.handler(c, l, u);
      t.expect("\\end", !1);
      var m = t.nextToken, g = Se(t.parseFunction(), "environment");
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
var Bd = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return De(r.body, n);
}, jd = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ze(r.body, n);
}, Hl = {
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
    } = r, a = pi(e[0]), i = n;
    return i in Hl && (i = Hl[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Bd,
  mathmlBuilder: jd
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
    } = r, n = e[0], a = ue.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Oi(n),
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
  htmlBuilder: Bd,
  mathmlBuilder: jd
});
var $d = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= fe.SCRIPT.id ? t.text() : fe.DISPLAY : r === "text" && t.size === fe.DISPLAY.size ? t = fe.TEXT : r === "script" ? t = fe.SCRIPT : r === "scriptscript" && (t = fe.SCRIPTSCRIPT), t;
}, r0 = (r, e) => {
  var t = $d(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = De(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  i = e.havingStyle(a);
  var u = De(r.denom, i, e), c, d, m;
  r.hasBarLine ? (r.barSize ? (d = Xe(r.barSize, e), c = L.makeLineSpan("frac-line", e, d)) : c = L.makeLineSpan("frac-line", e), d = c.height, m = c.height) : (c = null, d = 0, m = e.fontMetrics().defaultRuleThickness);
  var g, v, y;
  t.size === fe.DISPLAY.size || r.size === "display" ? (g = e.fontMetrics().num1, d > 0 ? v = 3 * m : v = 7 * m, y = e.fontMetrics().denom1) : (d > 0 ? (g = e.fontMetrics().num2, v = m) : (g = e.fontMetrics().num3, v = 3 * m), y = e.fontMetrics().denom2);
  var x;
  if (c) {
    var w = e.fontMetrics().axisHeight;
    g - s.depth - (w + 0.5 * d) < v && (g += v - (g - s.depth - (w + 0.5 * d))), w - 0.5 * d - (u.height - y) < v && (y += v - (w - 0.5 * d - (u.height - y)));
    var C = -(w - 0.5 * d);
    x = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: y
      }, {
        type: "elem",
        elem: c,
        shift: C
      }, {
        type: "elem",
        elem: s,
        shift: -g
      }]
    }, e);
  } else {
    var _ = g - s.depth - (u.height - y);
    _ < v && (g += 0.5 * (v - _), y += 0.5 * (v - _)), x = L.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: u,
        shift: y
      }, {
        type: "elem",
        elem: s,
        shift: -g
      }]
    }, e);
  }
  i = e.havingStyle(t), x.height *= i.sizeMultiplier / e.sizeMultiplier, x.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var T;
  t.size === fe.DISPLAY.size ? T = e.fontMetrics().delim1 : t.size === fe.SCRIPTSCRIPT.size ? T = e.havingStyle(fe.SCRIPT).fontMetrics().delim2 : T = e.fontMetrics().delim2;
  var k, N;
  return r.leftDelim == null ? k = fa(e, ["mopen"]) : k = Sr.customSizedDelim(r.leftDelim, T, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? N = L.makeSpan([]) : r.rightDelim == null ? N = fa(e, ["mclose"]) : N = Sr.customSizedDelim(r.rightDelim, T, !0, e.havingStyle(t), r.mode, ["mclose"]), L.makeSpan(["mord"].concat(i.sizingClasses(e)), [k, L.makeSpan(["mfrac"], [x]), N], e);
}, n0 = (r, e) => {
  var t = new K.MathNode("mfrac", [ze(r.numer, e), ze(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Xe(r.barSize, e);
    t.setAttribute("linethickness", V(n));
  }
  var a = $d(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new K.MathNode("mstyle", [t]);
    var i = a.size === fe.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var s = [];
    if (r.leftDelim != null) {
      var o = new K.MathNode("mo", [new K.TextNode(r.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), s.push(o);
    }
    if (s.push(t), r.rightDelim != null) {
      var l = new K.MathNode("mo", [new K.TextNode(r.rightDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), s.push(l);
    }
    return Go(s);
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
    } = r, a = e[0], i = e[1], s, o = null, l = null, u = "auto";
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
        u = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        u = "text";
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
      size: u,
      barSize: null
    };
  },
  htmlBuilder: r0,
  mathmlBuilder: n0
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
var Ul = ["display", "text", "script", "scriptscript"], Wl = function(e) {
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
    } = r, n = e[4], a = e[5], i = pi(e[0]), s = i.type === "atom" && i.family === "open" ? Wl(i.text) : null, o = pi(e[1]), l = o.type === "atom" && o.family === "close" ? Wl(o.text) : null, u = Se(e[2], "size"), c, d = null;
    u.isBlank ? c = !0 : (d = u.value, c = d.number > 0);
    var m = "auto", g = e[3];
    if (g.type === "ordgroup") {
      if (g.body.length > 0) {
        var v = Se(g.body[0], "textord");
        m = Ul[Number(v.text)];
      }
    } else
      g = Se(g, "textord"), m = Ul[Number(g.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: c,
      barSize: d,
      leftDelim: s,
      rightDelim: l,
      size: m
    };
  },
  htmlBuilder: r0,
  mathmlBuilder: n0
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
      size: Se(e[0], "size").value,
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
    } = r, a = e[0], i = Mf(Se(e[1], "infix").size), s = e[2], o = i.number > 0;
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
  htmlBuilder: r0,
  mathmlBuilder: n0
});
var qd = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? De(r.sup, e.havingStyle(t.sup()), e) : De(r.sub, e.havingStyle(t.sub()), e), a = Se(r.base, "horizBrace")) : a = Se(r, "horizBrace");
  var i = De(a.base, e.havingBaseStyle(fe.DISPLAY)), s = Er.svgSpan(a, e), o;
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
}, e4 = (r, e) => {
  var t = Er.mathMLnode(r.label);
  return new K.MathNode(r.isOver ? "mover" : "munder", [ze(r.base, e), t]);
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
  htmlBuilder: qd,
  mathmlBuilder: e4
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
    } = r, n = e[1], a = Se(e[0], "url").url;
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
    return t instanceof Ht || (t = new Ht("mrow", [t])), t.setAttribute("href", r.href), t;
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
    } = r, n = Se(e[0], "url").url;
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
    return new K.MathNode("mrow", Dt(r.body, e));
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
    } = r, i = Se(e[0], "raw").string, s = e[1];
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
        for (var u = i.split(","), c = 0; c < u.length; c++) {
          var d = u[c].split("=");
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
var is = function(e) {
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
  if (!od(n))
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
      for (var l = Se(t[0], "raw").string, u = l.split(","), c = 0; c < u.length; c++) {
        var d = u[c].split("=");
        if (d.length === 2) {
          var m = d[1].trim();
          switch (d[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              a = is(m);
              break;
            case "height":
              i = is(m);
              break;
            case "totalheight":
              s = is(m);
              break;
            default:
              throw new G("Invalid key: '" + d[0] + "' in \\includegraphics.");
          }
        }
      }
    var g = Se(e[0], "url").url;
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
    var s = new ep(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new K.MathNode("mglyph", []);
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
    } = r, a = Se(e[0], "size");
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
    return new K.SpaceNode(t);
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
    var t = new K.MathNode("mpadded", [ze(r.body, e)]);
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
var Kl = (r, e) => {
  switch (e.style.size) {
    case fe.DISPLAY.size:
      return r.display;
    case fe.TEXT.size:
      return r.text;
    case fe.SCRIPT.size:
      return r.script;
    case fe.SCRIPTSCRIPT.size:
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
    var t = Kl(r, e), n = ft(t, e, !1);
    return L.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Kl(r, e);
    return zr(t, e);
  }
});
var Hd = (r, e, t, n, a, i, s) => {
  r = L.makeSpan([], [r]);
  var o = t && ue.isCharacterBox(t), l, u;
  if (e) {
    var c = De(e, n.havingStyle(a.sup()), n);
    u = {
      elem: c,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - c.depth)
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
  if (u && l) {
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
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
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
  } else if (u) {
    var y = r.depth + s;
    m = L.makeVList({
      positionType: "bottom",
      positionData: y,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: u.elem,
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
    var _ = L.makeSpan(["mspace"], [], n);
    _.style.marginRight = V(i), x.unshift(_);
  }
  return L.makeSpan(["mop", "op-limits"], x, n);
}, Ud = ["\\smallint"], jn = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Se(r.base, "op"), a = !0) : i = Se(r, "op");
  var s = e.style, o = !1;
  s.size === fe.DISPLAY.size && i.symbol && !ue.contains(Ud, i.name) && (o = !0);
  var l;
  if (i.symbol) {
    var u = o ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), l = L.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), c.length > 0) {
      var d = l.italic, m = L.staticSvg(c + "Size" + (o ? "2" : "1"), e);
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
      }, e), i.name = "\\" + c, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (i.body) {
    var g = ft(i.body, e, !0);
    g.length === 1 && g[0] instanceof Gt ? (l = g[0], l.classes[0] = "mop") : l = L.makeSpan(["mop"], g, e);
  } else {
    for (var v = [], y = 1; y < i.name.length; y++)
      v.push(L.mathsym(i.name[y], i.mode, e));
    l = L.makeSpan(["mop"], v, e);
  }
  var x = 0, _ = 0;
  return (l instanceof Gt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (x = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, _ = l.italic), a ? Hd(l, t, n, e, s, _, x) : (x && (l.style.position = "relative", l.style.top = V(x)), l);
}, Ia = (r, e) => {
  var t;
  if (r.symbol)
    t = new Ht("mo", [Yt(r.name, r.mode)]), ue.contains(Ud, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new Ht("mo", Dt(r.body, e));
  else {
    t = new Ht("mi", [new ia(r.name.slice(1))]);
    var n = new Ht("mo", [Yt("⁡", "text")]);
    r.parentIsSupSub ? t = new Ht("mrow", [t, n]) : t = bd([t, n]);
  }
  return t;
}, t4 = {
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
    return a.length === 1 && (a = t4[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: jn,
  mathmlBuilder: Ia
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
  htmlBuilder: jn,
  mathmlBuilder: Ia
});
var r4 = {
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
  htmlBuilder: jn,
  mathmlBuilder: Ia
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
  htmlBuilder: jn,
  mathmlBuilder: Ia
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
    return n.length === 1 && (n = r4[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: jn,
  mathmlBuilder: Ia
});
var Wd = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Se(r.base, "operatorname"), a = !0) : i = Se(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((d) => {
      var m = d.text;
      return typeof m == "string" ? {
        type: "textord",
        mode: d.mode,
        text: m
      } : d;
    }), l = ft(o, e.withFont("mathrm"), !0), u = 0; u < l.length; u++) {
      var c = l[u];
      c instanceof Gt && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = L.makeSpan(["mop"], l, e);
  } else
    s = L.makeSpan(["mop"], [], e);
  return a ? Hd(s, t, n, e, e.style, 0, 0) : s;
}, n4 = (r, e) => {
  for (var t = Dt(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof K.SpaceNode)) if (i instanceof K.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof K.TextNode ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = t.map((c) => c.toText()).join("");
    t = [new K.TextNode(o)];
  }
  var l = new K.MathNode("mi", t);
  l.setAttribute("mathvariant", "normal");
  var u = new K.MathNode("mo", [Yt("⁡", "text")]);
  return r.parentIsSupSub ? new K.MathNode("mrow", [l, u]) : K.newDocumentFragment([l, u]);
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
  htmlBuilder: Wd,
  mathmlBuilder: n4
});
S("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
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
    var t = new K.MathNode("mo", [new K.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new K.MathNode("mover", [ze(r.body, e), t]);
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
    return new K.MathNode("mphantom", t);
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
    var t = Dt(at(r.body), e), n = new K.MathNode("mphantom", t), a = new K.MathNode("mpadded", [n]);
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
    var t = Dt(at(r.body), e), n = new K.MathNode("mphantom", t), a = new K.MathNode("mpadded", [n]);
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
    } = r, n = Se(e[0], "size").value, a = e[1];
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
    var t = new K.MathNode("mpadded", [ze(r.body, e)]), n = r.dy.number + r.dy.unit;
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
    } = r, a = t[0], i = Se(e[0], "size"), s = Se(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && Se(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = L.makeSpan(["mord", "rule"], [], e), n = Xe(r.width, e), a = Xe(r.height, e), i = r.shift ? Xe(r.shift, e) : 0;
    return t.style.borderRightWidth = V(n), t.style.borderTopWidth = V(a), t.style.bottom = V(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Xe(r.width, e), n = Xe(r.height, e), a = r.shift ? Xe(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new K.MathNode("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", V(t)), s.setAttribute("height", V(n));
    var o = new K.MathNode("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", V(a)) : (o.setAttribute("height", V(a)), o.setAttribute("depth", V(-a))), o.setAttribute("voffset", V(a)), o;
  }
});
function Kd(r, e, t) {
  for (var n = ft(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return L.makeFragment(n);
}
var Gl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], a4 = (r, e) => {
  var t = e.havingSize(r.size);
  return Kd(r.body, t, e);
};
Z({
  type: "sizing",
  names: Gl,
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
      size: Gl.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: a4,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = Dt(r.body, t), a = new K.MathNode("mstyle", n);
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
    } = r, a = !1, i = !1, s = t[0] && Se(t[0], "ordgroup");
    if (s)
      for (var o = "", l = 0; l < s.body.length; ++l) {
        var u = s.body[l];
        if (o = u.text, o === "t")
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
    var c = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: c,
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
    var t = new K.MathNode("mpadded", [ze(r.body, e)]);
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
    e.style.id < fe.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: l,
      ruleWidth: u,
      advanceWidth: c
    } = Sr.sqrtImage(o, e), d = l.height - u;
    d > t.height + t.depth + s && (s = (s + d - t.height - t.depth) / 2);
    var m = l.height - t.height - s - u;
    t.style.paddingLeft = V(c);
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
        size: u
      }]
    }, e);
    if (r.index) {
      var v = e.havingStyle(fe.SCRIPTSCRIPT), y = De(r.index, v, e), x = 0.6 * (g.height - g.depth), _ = L.makeVList({
        positionType: "shift",
        positionData: -x,
        children: [{
          type: "elem",
          elem: y
        }]
      }, e), w = L.makeSpan(["root"], [_]);
      return L.makeSpan(["mord", "sqrt"], [w, g], e);
    } else
      return L.makeSpan(["mord", "sqrt"], [g], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new K.MathNode("mroot", [ze(t, e), ze(n, e)]) : new K.MathNode("msqrt", [ze(t, e)]);
  }
});
var Yl = {
  display: fe.DISPLAY,
  text: fe.TEXT,
  script: fe.SCRIPT,
  scriptscript: fe.SCRIPTSCRIPT
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
    var t = Yl[r.style], n = e.havingStyle(t).withFont("");
    return Kd(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = Yl[r.style], n = e.havingStyle(t), a = Dt(r.body, n), i = new K.MathNode("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var i4 = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === fe.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? jn : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === fe.DISPLAY.size || n.limits);
      return i ? Wd : null;
    } else {
      if (n.type === "accent")
        return ue.isCharacterBox(n.base) ? Xo : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? qd : null;
      } else
        return null;
    }
  else return null;
};
gn({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = i4(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = De(n, e), o, l, u = e.fontMetrics(), c = 0, d = 0, m = n && ue.isCharacterBox(n);
    if (a) {
      var g = e.havingStyle(e.style.sup());
      o = De(a, g, e), m || (c = s.height - g.fontMetrics().supDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      l = De(i, v, e), m || (d = s.depth + v.fontMetrics().subDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    var y;
    e.style === fe.DISPLAY ? y = u.sup1 : e.style.cramped ? y = u.sup3 : y = u.sup2;
    var x = e.sizeMultiplier, _ = V(0.5 / u.ptPerEm / x), w = null;
    if (l) {
      var C = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (s instanceof Gt || C) && (w = V(-s.italic));
    }
    var T;
    if (o && l) {
      c = Math.max(c, y, o.depth + 0.25 * u.xHeight), d = Math.max(d, u.sub2);
      var k = u.defaultRuleThickness, N = 4 * k;
      if (c - o.depth - (l.height - d) < N) {
        d = N - (c - o.depth) + l.height;
        var I = 0.8 * u.xHeight - (c - o.depth);
        I > 0 && (c += I, d -= I);
      }
      var D = [{
        type: "elem",
        elem: l,
        shift: d,
        marginRight: _,
        marginLeft: w
      }, {
        type: "elem",
        elem: o,
        shift: -c,
        marginRight: _
      }];
      T = L.makeVList({
        positionType: "individualShift",
        children: D
      }, e);
    } else if (l) {
      d = Math.max(d, u.sub1, l.height - 0.8 * u.xHeight);
      var M = [{
        type: "elem",
        elem: l,
        marginLeft: w,
        marginRight: _
      }];
      T = L.makeVList({
        positionType: "shift",
        positionData: d,
        children: M
      }, e);
    } else if (o)
      c = Math.max(c, y, o.depth + 0.25 * u.xHeight), T = L.makeVList({
        positionType: "shift",
        positionData: -c,
        children: [{
          type: "elem",
          elem: o,
          marginRight: _
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var F = $s(s, "right") || "mord";
    return L.makeSpan([F], [s, L.makeSpan(["msupsub"], [T])], e);
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
        var u = r.base;
        u && u.type === "op" && u.limits && e.style === fe.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === fe.DISPLAY || u.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === fe.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === fe.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === fe.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === fe.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new K.MathNode(s, i);
  }
});
gn({
  type: "atom",
  htmlBuilder(r, e) {
    return L.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new K.MathNode("mo", [Yt(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Yo(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Gd = {
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
    var t = new K.MathNode("mi", [Yt(r.text, r.mode, e)]), n = Yo(r, e) || "italic";
    return n !== Gd[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
gn({
  type: "textord",
  htmlBuilder(r, e) {
    return L.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Yt(r.text, r.mode, e), n = Yo(r, e) || "normal", a;
    return r.mode === "text" ? a = new K.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new K.MathNode("mn", [t]) : r.text === "\\prime" ? a = new K.MathNode("mo", [t]) : a = new K.MathNode("mi", [t]), n !== Gd[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var ss = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, os = {
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
    if (os.hasOwnProperty(r.text)) {
      var t = os[r.text].className || "";
      if (r.mode === "text") {
        var n = L.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return L.makeSpan(["mspace", t], [L.mathsym(r.text, r.mode, e)], e);
    } else {
      if (ss.hasOwnProperty(r.text))
        return L.makeSpan(["mspace", ss[r.text]], [], e);
      throw new G('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (os.hasOwnProperty(r.text))
      t = new K.MathNode("mtext", [new K.TextNode(" ")]);
    else {
      if (ss.hasOwnProperty(r.text))
        return new K.MathNode("mspace");
      throw new G('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Vl = () => {
  var r = new K.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
gn({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new K.MathNode("mtable", [new K.MathNode("mtr", [Vl(), new K.MathNode("mtd", [zr(r.body, e)]), Vl(), new K.MathNode("mtd", [zr(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Xl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Jl = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, s4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Zl = (r, e) => {
  var t = r.font;
  if (t) {
    if (Xl[t])
      return e.withTextFontFamily(Xl[t]);
    if (Jl[t])
      return e.withTextFontWeight(Jl[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(s4[t]);
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
    var t = Zl(r, e), n = ft(r.body, t, !0);
    return L.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Zl(r, e);
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
    var t = new K.MathNode("mo", [new K.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new K.MathNode("munder", [ze(r.body, e), t]);
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
    return new K.MathNode("mpadded", [ze(r.body, e)], ["vcenter"]);
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
    for (var t = Ql(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(L.makeSymbol(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return L.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), L.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new K.TextNode(Ql(r)), n = new K.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var Ql = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Dr = gd, Yd = `[ \r
	]`, o4 = "\\\\[a-zA-Z@]+", l4 = "\\\\[^\uD800-\uDFFF]", u4 = "(" + o4 + ")" + Yd + "*", c4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, Ws = "[̀-ͯ]", d4 = new RegExp(Ws + "+$"), h4 = "(" + Yd + "+)|" + // whitespace
(c4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Ws + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Ws + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + u4) + // \macroName + spaces
("|" + l4 + ")");
class eu {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(h4, "g"), this.catcodes = {
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
      return new Kt("EOF", new Ft(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new Kt(e[t], new Ft(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Kt(a, new Ft(this, t, this.tokenRegex.lastIndex));
  }
}
class m4 {
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
var f4 = zd;
S("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
S("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
S("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
S("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
S("\\@ifnextchar", function(r) {
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
S("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
S("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var tu = {
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
S("\\char", function(r) {
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
    if (n = tu[e.text], n == null || n >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = tu[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var a0 = (r, e, t) => {
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
S("\\newcommand", (r) => a0(r, !1, !0));
S("\\renewcommand", (r) => a0(r, !0, !1));
S("\\providecommand", (r) => a0(r, !0, !0));
S("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
S("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
S("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), Dr[t], He.math[t], He.text[t]), "";
});
S("\\bgroup", "{");
S("\\egroup", "}");
S("~", "\\nobreakspace");
S("\\lq", "`");
S("\\rq", "'");
S("\\aa", "\\r a");
S("\\AA", "\\r A");
S("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
S("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
S("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
S("ℬ", "\\mathscr{B}");
S("ℰ", "\\mathscr{E}");
S("ℱ", "\\mathscr{F}");
S("ℋ", "\\mathscr{H}");
S("ℐ", "\\mathscr{I}");
S("ℒ", "\\mathscr{L}");
S("ℳ", "\\mathscr{M}");
S("ℛ", "\\mathscr{R}");
S("ℭ", "\\mathfrak{C}");
S("ℌ", "\\mathfrak{H}");
S("ℨ", "\\mathfrak{Z}");
S("\\Bbbk", "\\Bbb{k}");
S("·", "\\cdotp");
S("\\llap", "\\mathllap{\\textrm{#1}}");
S("\\rlap", "\\mathrlap{\\textrm{#1}}");
S("\\clap", "\\mathclap{\\textrm{#1}}");
S("\\mathstrut", "\\vphantom{(}");
S("\\underbar", "\\underline{\\text{#1}}");
S("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
S("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
S("\\ne", "\\neq");
S("≠", "\\neq");
S("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
S("∉", "\\notin");
S("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
S("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
S("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
S("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
S("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
S("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
S("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
S("⟂", "\\perp");
S("‼", "\\mathclose{!\\mkern-0.8mu!}");
S("∌", "\\notni");
S("⌜", "\\ulcorner");
S("⌝", "\\urcorner");
S("⌞", "\\llcorner");
S("⌟", "\\lrcorner");
S("©", "\\copyright");
S("®", "\\textregistered");
S("️", "\\textregistered");
S("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
S("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
S("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
S("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
S("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
S("⋮", "\\vdots");
S("\\varGamma", "\\mathit{\\Gamma}");
S("\\varDelta", "\\mathit{\\Delta}");
S("\\varTheta", "\\mathit{\\Theta}");
S("\\varLambda", "\\mathit{\\Lambda}");
S("\\varXi", "\\mathit{\\Xi}");
S("\\varPi", "\\mathit{\\Pi}");
S("\\varSigma", "\\mathit{\\Sigma}");
S("\\varUpsilon", "\\mathit{\\Upsilon}");
S("\\varPhi", "\\mathit{\\Phi}");
S("\\varPsi", "\\mathit{\\Psi}");
S("\\varOmega", "\\mathit{\\Omega}");
S("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
S("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
S("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
S("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
S("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
S("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var ru = {
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
S("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in ru ? e = ru[t] : (t.slice(0, 4) === "\\not" || t in He.math && ue.contains(["bin", "rel"], He.math[t].group)) && (e = "\\dotsb"), e;
});
var i0 = {
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
S("\\dotso", function(r) {
  var e = r.future().text;
  return e in i0 ? "\\ldots\\," : "\\ldots";
});
S("\\dotsc", function(r) {
  var e = r.future().text;
  return e in i0 && e !== "," ? "\\ldots\\," : "\\ldots";
});
S("\\cdots", function(r) {
  var e = r.future().text;
  return e in i0 ? "\\@cdots\\," : "\\@cdots";
});
S("\\dotsb", "\\cdots");
S("\\dotsm", "\\cdots");
S("\\dotsi", "\\!\\cdots");
S("\\dotsx", "\\ldots\\,");
S("\\DOTSI", "\\relax");
S("\\DOTSB", "\\relax");
S("\\DOTSX", "\\relax");
S("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
S("\\,", "\\tmspace+{3mu}{.1667em}");
S("\\thinspace", "\\,");
S("\\>", "\\mskip{4mu}");
S("\\:", "\\tmspace+{4mu}{.2222em}");
S("\\medspace", "\\:");
S("\\;", "\\tmspace+{5mu}{.2777em}");
S("\\thickspace", "\\;");
S("\\!", "\\tmspace-{3mu}{.1667em}");
S("\\negthinspace", "\\!");
S("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
S("\\negthickspace", "\\tmspace-{5mu}{.277em}");
S("\\enspace", "\\kern.5em ");
S("\\enskip", "\\hskip.5em\\relax");
S("\\quad", "\\hskip1em\\relax");
S("\\qquad", "\\hskip2em\\relax");
S("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
S("\\tag@paren", "\\tag@literal{({#1})}");
S("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
S("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
S("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
S("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
S("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
S("\\newline", "\\\\\\relax");
S("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Vd = V(ar["Main-Regular"][84][1] - 0.7 * ar["Main-Regular"][65][1]);
S("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Vd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
S("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Vd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
S("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
S("\\@hspace", "\\hskip #1\\relax");
S("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
S("\\ordinarycolon", ":");
S("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
S("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
S("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
S("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
S("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
S("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
S("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
S("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
S("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
S("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
S("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
S("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
S("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
S("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
S("∷", "\\dblcolon");
S("∹", "\\eqcolon");
S("≔", "\\coloneqq");
S("≕", "\\eqqcolon");
S("⩴", "\\Coloneqq");
S("\\ratio", "\\vcentcolon");
S("\\coloncolon", "\\dblcolon");
S("\\colonequals", "\\coloneqq");
S("\\coloncolonequals", "\\Coloneqq");
S("\\equalscolon", "\\eqqcolon");
S("\\equalscoloncolon", "\\Eqqcolon");
S("\\colonminus", "\\coloneq");
S("\\coloncolonminus", "\\Coloneq");
S("\\minuscolon", "\\eqcolon");
S("\\minuscoloncolon", "\\Eqcolon");
S("\\coloncolonapprox", "\\Colonapprox");
S("\\coloncolonsim", "\\Colonsim");
S("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
S("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
S("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
S("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
S("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
S("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
S("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
S("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
S("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
S("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
S("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
S("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
S("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
S("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
S("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
S("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
S("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
S("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
S("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
S("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
S("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
S("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
S("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
S("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
S("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
S("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
S("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
S("\\imath", "\\html@mathml{\\@imath}{ı}");
S("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
S("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
S("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
S("⟦", "\\llbracket");
S("⟧", "\\rrbracket");
S("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
S("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
S("⦃", "\\lBrace");
S("⦄", "\\rBrace");
S("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
S("⦵", "\\minuso");
S("\\darr", "\\downarrow");
S("\\dArr", "\\Downarrow");
S("\\Darr", "\\Downarrow");
S("\\lang", "\\langle");
S("\\rang", "\\rangle");
S("\\uarr", "\\uparrow");
S("\\uArr", "\\Uparrow");
S("\\Uarr", "\\Uparrow");
S("\\N", "\\mathbb{N}");
S("\\R", "\\mathbb{R}");
S("\\Z", "\\mathbb{Z}");
S("\\alef", "\\aleph");
S("\\alefsym", "\\aleph");
S("\\Alpha", "\\mathrm{A}");
S("\\Beta", "\\mathrm{B}");
S("\\bull", "\\bullet");
S("\\Chi", "\\mathrm{X}");
S("\\clubs", "\\clubsuit");
S("\\cnums", "\\mathbb{C}");
S("\\Complex", "\\mathbb{C}");
S("\\Dagger", "\\ddagger");
S("\\diamonds", "\\diamondsuit");
S("\\empty", "\\emptyset");
S("\\Epsilon", "\\mathrm{E}");
S("\\Eta", "\\mathrm{H}");
S("\\exist", "\\exists");
S("\\harr", "\\leftrightarrow");
S("\\hArr", "\\Leftrightarrow");
S("\\Harr", "\\Leftrightarrow");
S("\\hearts", "\\heartsuit");
S("\\image", "\\Im");
S("\\infin", "\\infty");
S("\\Iota", "\\mathrm{I}");
S("\\isin", "\\in");
S("\\Kappa", "\\mathrm{K}");
S("\\larr", "\\leftarrow");
S("\\lArr", "\\Leftarrow");
S("\\Larr", "\\Leftarrow");
S("\\lrarr", "\\leftrightarrow");
S("\\lrArr", "\\Leftrightarrow");
S("\\Lrarr", "\\Leftrightarrow");
S("\\Mu", "\\mathrm{M}");
S("\\natnums", "\\mathbb{N}");
S("\\Nu", "\\mathrm{N}");
S("\\Omicron", "\\mathrm{O}");
S("\\plusmn", "\\pm");
S("\\rarr", "\\rightarrow");
S("\\rArr", "\\Rightarrow");
S("\\Rarr", "\\Rightarrow");
S("\\real", "\\Re");
S("\\reals", "\\mathbb{R}");
S("\\Reals", "\\mathbb{R}");
S("\\Rho", "\\mathrm{P}");
S("\\sdot", "\\cdot");
S("\\sect", "\\S");
S("\\spades", "\\spadesuit");
S("\\sub", "\\subset");
S("\\sube", "\\subseteq");
S("\\supe", "\\supseteq");
S("\\Tau", "\\mathrm{T}");
S("\\thetasym", "\\vartheta");
S("\\weierp", "\\wp");
S("\\Zeta", "\\mathrm{Z}");
S("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
S("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
S("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
S("\\bra", "\\mathinner{\\langle{#1}|}");
S("\\ket", "\\mathinner{|{#1}\\rangle}");
S("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
S("\\Bra", "\\left\\langle#1\\right|");
S("\\Ket", "\\left|#1\\right\\rangle");
var Xd = (r) => (e) => {
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
  var u = e.consumeArg().tokens, c = e.expandTokens([
    ...i,
    ...u,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: c.reverse(),
    numArgs: 0
  };
};
S("\\bra@ket", Xd(!1));
S("\\bra@set", Xd(!0));
S("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
S("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
S("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
S("\\angln", "{\\angl n}");
S("\\blue", "\\textcolor{##6495ed}{#1}");
S("\\orange", "\\textcolor{##ffa500}{#1}");
S("\\pink", "\\textcolor{##ff00af}{#1}");
S("\\red", "\\textcolor{##df0030}{#1}");
S("\\green", "\\textcolor{##28ae7b}{#1}");
S("\\gray", "\\textcolor{gray}{#1}");
S("\\purple", "\\textcolor{##9d38bd}{#1}");
S("\\blueA", "\\textcolor{##ccfaff}{#1}");
S("\\blueB", "\\textcolor{##80f6ff}{#1}");
S("\\blueC", "\\textcolor{##63d9ea}{#1}");
S("\\blueD", "\\textcolor{##11accd}{#1}");
S("\\blueE", "\\textcolor{##0c7f99}{#1}");
S("\\tealA", "\\textcolor{##94fff5}{#1}");
S("\\tealB", "\\textcolor{##26edd5}{#1}");
S("\\tealC", "\\textcolor{##01d1c1}{#1}");
S("\\tealD", "\\textcolor{##01a995}{#1}");
S("\\tealE", "\\textcolor{##208170}{#1}");
S("\\greenA", "\\textcolor{##b6ffb0}{#1}");
S("\\greenB", "\\textcolor{##8af281}{#1}");
S("\\greenC", "\\textcolor{##74cf70}{#1}");
S("\\greenD", "\\textcolor{##1fab54}{#1}");
S("\\greenE", "\\textcolor{##0d923f}{#1}");
S("\\goldA", "\\textcolor{##ffd0a9}{#1}");
S("\\goldB", "\\textcolor{##ffbb71}{#1}");
S("\\goldC", "\\textcolor{##ff9c39}{#1}");
S("\\goldD", "\\textcolor{##e07d10}{#1}");
S("\\goldE", "\\textcolor{##a75a05}{#1}");
S("\\redA", "\\textcolor{##fca9a9}{#1}");
S("\\redB", "\\textcolor{##ff8482}{#1}");
S("\\redC", "\\textcolor{##f9685d}{#1}");
S("\\redD", "\\textcolor{##e84d39}{#1}");
S("\\redE", "\\textcolor{##bc2612}{#1}");
S("\\maroonA", "\\textcolor{##ffbde0}{#1}");
S("\\maroonB", "\\textcolor{##ff92c6}{#1}");
S("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
S("\\maroonD", "\\textcolor{##ca337c}{#1}");
S("\\maroonE", "\\textcolor{##9e034e}{#1}");
S("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
S("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
S("\\purpleC", "\\textcolor{##aa87ff}{#1}");
S("\\purpleD", "\\textcolor{##7854ab}{#1}");
S("\\purpleE", "\\textcolor{##543b78}{#1}");
S("\\mintA", "\\textcolor{##f5f9e8}{#1}");
S("\\mintB", "\\textcolor{##edf2df}{#1}");
S("\\mintC", "\\textcolor{##e0e5cc}{#1}");
S("\\grayA", "\\textcolor{##f6f7f7}{#1}");
S("\\grayB", "\\textcolor{##f0f1f2}{#1}");
S("\\grayC", "\\textcolor{##e3e5e6}{#1}");
S("\\grayD", "\\textcolor{##d6d8da}{#1}");
S("\\grayE", "\\textcolor{##babec2}{#1}");
S("\\grayF", "\\textcolor{##888d93}{#1}");
S("\\grayG", "\\textcolor{##626569}{#1}");
S("\\grayH", "\\textcolor{##3b3e40}{#1}");
S("\\grayI", "\\textcolor{##21242c}{#1}");
S("\\kaBlue", "\\textcolor{##314453}{#1}");
S("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Jd = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class p4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new m4(f4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new eu(e, this.settings);
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
    return this.pushToken(new Kt("EOF", n.loc)), this.pushTokens(a), t.range(n, "");
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
    return this.macros.has(e) ? this.expandTokens([new Kt(e)]) : void 0;
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
      for (var o = new eu(a, this.settings), l = [], u = o.lex(); u.text !== "EOF"; )
        l.push(u), u = o.lex();
      l.reverse();
      var c = {
        tokens: l,
        numArgs: i
      };
      return c;
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
    return this.macros.has(e) || Dr.hasOwnProperty(e) || He.math.hasOwnProperty(e) || He.text.hasOwnProperty(e) || Jd.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Dr.hasOwnProperty(e) && !Dr[e].primitive;
  }
}
var nu = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ja = Object.freeze({
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
}), ls = {
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
}, au = {
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
class Ii {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new p4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
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
    this.consume(), this.gullet.pushToken(new Kt("}")), this.gullet.pushTokens(e);
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
      if (Ii.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && Dr[a.text] && Dr[a.text].infix)
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
      var u;
      return n === "\\\\abovefrac" ? u = this.callFunction(n, [i, e[t], s], []) : u = this.callFunction(n, [i, s], []), [u];
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
      } else if (Ja[i.text]) {
        var u = nu.test(i.text), c = [];
        for (c.push(new Kt(Ja[i.text])), this.consume(); ; ) {
          var d = this.fetch().text;
          if (!Ja[d] || nu.test(d) !== u)
            break;
          c.unshift(new Kt(Ja[d])), this.consume();
        }
        var m = this.subparse(c);
        u ? a = {
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
      var u = this.parseGroupOfType("argument to '" + e + "'", o, l);
      if (l)
        i.push(u);
      else if (u != null)
        a.push(u);
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
    if (!od(i))
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
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !Jd.hasOwnProperty(a)) {
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
    au.hasOwnProperty(t[0]) && !He[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = au[t[0]] + t.slice(1));
    var i = d4.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (He[this.mode][t]) {
      this.settings.strict && this.mode === "math" && js.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = He[this.mode][t].group, l = Ft.range(e), u;
      if (np.hasOwnProperty(o)) {
        var c = o;
        u = {
          type: "atom",
          mode: this.mode,
          family: c,
          loc: l,
          text: t
        };
      } else
        u = {
          type: o,
          mode: this.mode,
          loc: l,
          text: t
        };
      s = u;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (sd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
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
        if (!ls[m])
          throw new G("Unknown accent ' " + m + "'", e);
        var g = ls[m][this.mode] || ls[m].text;
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
Ii.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var s0 = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Ii(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new Kt("\\df@tag")])
    }];
  }
  return a;
}, Zd = function(e, t, n) {
  t.textContent = "";
  var a = o0(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Zd = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var g4 = function(e, t) {
  var n = o0(e, t).toMarkup();
  return n;
}, v4 = function(e, t) {
  var n = new qo(t);
  return s0(e, n);
}, Qd = function(e, t, n) {
  if (n.throwOnError || !(e instanceof G))
    throw e;
  var a = L.makeSpan(["katex-error"], [new Gt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, o0 = function(e, t) {
  var n = new qo(t);
  try {
    var a = s0(e, n);
    return Np(a, e, n);
  } catch (i) {
    return Qd(i, e, n);
  }
}, b4 = function(e, t) {
  var n = new qo(t);
  try {
    var a = s0(e, n);
    return Ep(a, e, n);
  } catch (i) {
    return Qd(i, e, n);
  }
}, eh = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Zd,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: g4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: ti,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: v4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: o0,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: b4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Xf,
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
  __defineMacro: S,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: Ra,
    Anchor: Wo,
    SymbolNode: Gt,
    SvgNode: kr,
    PathNode: Lr,
    LineNode: Bs
  }
};
const y4 = mt.lazy(() => import("./EquationComponent-BPStJCuQ.js"));
function iu(r) {
  let e = r.getAttribute("data-lexical-equation");
  const t = r.getAttribute("data-lexical-inline") === "true";
  return e = atob(e || ""), e ? { node: l0(e, t) } : null;
}
class $n extends ur {
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
    return new $n(t.__equation, t.__inline, t.__key);
  }
  static importJSON(t) {
    return l0(
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
    return t.setAttribute("data-lexical-equation", n), t.setAttribute("data-lexical-inline", `${this.__inline}`), eh.render(this.__equation, t, {
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
        conversion: iu,
        priority: 2
      } : null,
      span: (t) => t.hasAttribute("data-lexical-equation") ? {
        conversion: iu,
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
      y4,
      {
        equation: this.__equation,
        inline: this.__inline,
        nodeKey: this.__key
      }
    ) });
  }
}
function l0(r = "", e = !1) {
  const t = new $n(r, e);
  return ut(t);
}
function i6(r) {
  return r instanceof $n;
}
const x4 = mt.lazy(() => import("./ExcalidrawComponent-vU6PZKSZ.js"));
function w4(r) {
  const e = r.getAttribute("data-lexical-excalidraw-json");
  if (e) {
    const t = th();
    return t.__data = e, {
      node: t
    };
  }
  return null;
}
class on extends ur {
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
    return new on(t.__data, t.__width, t.__height, t.__key);
  }
  static importJSON(t) {
    return new on(t.data, t.width, t.height);
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
        conversion: w4,
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
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(x4, { nodeKey: this.getKey(), data: this.__data }) });
  }
}
function th() {
  return new on();
}
function s6(r) {
  return r instanceof on;
}
class ln extends xt {
  constructor(t, n) {
    super(n);
    ne(this, "__templateColumns");
    this.__templateColumns = t;
  }
  static getType() {
    return "layout-container";
  }
  static clone(t) {
    return new ln(t.__templateColumns, t.__key);
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
    return rh(t.templateColumns);
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
function rh(r) {
  return new ln(r);
}
function Za(r) {
  return r instanceof ln;
}
class un extends xt {
  static getType() {
    return "layout-item";
  }
  static clone(e) {
    return new un(e.__key);
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
    return Ks();
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
function Ks() {
  return new un();
}
function su(r) {
  return r instanceof un;
}
const _4 = mt.lazy(() => import("./PollComponent-BAd8YpgX.js"));
function S4() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ou(r = "") {
  return {
    text: r,
    uid: S4(),
    votes: []
  };
}
function lu(r, e, t) {
  return {
    text: e,
    uid: r.uid,
    votes: t || Array.from(r.votes)
  };
}
function C4(r) {
  const e = r.getAttribute("data-lexical-poll-question"), t = r.getAttribute("data-lexical-poll-options");
  return e !== null && t !== null ? { node: u0(e, JSON.parse(t)) } : null;
}
class qn extends ur {
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
    return new qn(t.__question, t.__options, t.__key);
  }
  static importJSON(t) {
    const n = u0(
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
    const a = this.getWritable(), i = lu(t, n), s = Array.from(a.__options), o = s.indexOf(t);
    s[o] = i, a.__options = s;
  }
  toggleVote(t, n) {
    const a = this.getWritable(), i = t.votes, s = Array.from(i), o = i.indexOf(n);
    o === -1 ? s.push(n) : s.splice(o, 1);
    const l = lu(t, t.text, s), u = Array.from(a.__options), c = u.indexOf(t);
    u[c] = l, a.__options = u;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-poll-question") ? {
        conversion: C4,
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
      _4,
      {
        question: this.__question,
        options: this.__options,
        nodeKey: this.__key
      }
    ) });
  }
}
function u0(r, e) {
  return new qn(r, e);
}
function o6(r) {
  return r instanceof qn;
}
const k4 = mt.lazy(() => import("./InlineImageComponent-CTUe8ltL.js"));
function N4(r) {
  if (r instanceof HTMLImageElement) {
    const { alt: e, src: t, width: n, height: a } = r;
    return { node: c0({ altText: e, height: a, src: t, width: n }) };
  }
  return null;
}
class Hn extends ur {
  constructor(t, n, a, i, s, o, l, u) {
    super(u);
    ne(this, "__src");
    ne(this, "__altText");
    ne(this, "__width");
    ne(this, "__height");
    ne(this, "__showCaption");
    ne(this, "__caption");
    ne(this, "__position");
    this.__src = t, this.__altText = n, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || pa(), this.__position = a;
  }
  static getType() {
    return "inline-image";
  }
  static clone(t) {
    return new Hn(
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
    const { altText: n, height: a, width: i, caption: s, src: o, showCaption: l, position: u } = t, c = c0({
      altText: n,
      height: a,
      position: u,
      showCaption: l,
      src: o,
      width: i
    }), d = c.__caption, m = d.parseEditorState(s.editorState);
    return m.isEmpty() || d.setEditorState(m), c;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (t) => ({
        conversion: N4,
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
      k4,
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
function c0({
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
    new Hn(
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
function E4(r) {
  return r instanceof Hn;
}
const T4 = mt.lazy(() => import("./StickyComponent-Bowu9uub.js"));
class Mn extends ur {
  constructor(t, n, a, i, s) {
    super(s);
    ne(this, "__x");
    ne(this, "__y");
    ne(this, "__color");
    ne(this, "__caption");
    this.__x = t, this.__y = n, this.__caption = i || pa(), this.__color = a;
  }
  static getType() {
    return "sticky";
  }
  static clone(t) {
    return new Mn(
      t.__x,
      t.__y,
      t.__color,
      t.__caption,
      t.__key
    );
  }
  static importJSON(t) {
    const n = new Mn(
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
    a.__x = t, a.__y = n, yt(null);
  }
  toggleColor() {
    const t = this.getWritable();
    t.__color = t.__color === "pink" ? "yellow" : "pink";
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(t, n) {
    return Zt(
      /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
        T4,
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
function l6(r) {
  return r instanceof Mn;
}
function A4(r, e) {
  return new Mn(r, e, "yellow");
}
const M4 = [
  po,
  wo,
  Ea,
  Na,
  ka,
  Ca,
  Sa,
  In,
  ko,
  zn,
  Ta,
  Pn,
  Tn,
  Aa,
  Ma,
  Oa,
  nn,
  an,
  sn,
  $n,
  on,
  ln,
  un,
  qn,
  Ac,
  Hn,
  or,
  Ln,
  sr,
  Mn,
  _o
], Qa = 0, Gs = 1, Ys = 2, Vt = 0, O4 = 1, uu = 2, D4 = 3, R4 = 4;
function I4(r, e, t, n, a) {
  if (r === null || t.size === 0 && n.size === 0 && !a) return Vt;
  const i = e._selection, s = r._selection;
  if (a) return O4;
  if (!(U(i) && U(s) && s.isCollapsed() && i.isCollapsed())) return Vt;
  const o = function(_, w, C) {
    const T = _._nodeMap, k = [];
    for (const N of w) {
      const I = T.get(N);
      I !== void 0 && k.push(I);
    }
    for (const [N, I] of C) {
      if (!I) continue;
      const D = T.get(N);
      D === void 0 || io(D) || k.push(D);
    }
    return k;
  }(e, t, n);
  if (o.length === 0) return Vt;
  if (o.length > 1) {
    const _ = e._nodeMap, w = _.get(i.anchor.key), C = _.get(s.anchor.key);
    return w && C && !r._nodeMap.has(w.__key) && _e(w) && w.__text.length === 1 && i.anchor.offset === 1 ? uu : Vt;
  }
  const l = o[0], u = r._nodeMap.get(l.__key);
  if (!_e(u) || !_e(l) || u.__mode !== l.__mode) return Vt;
  const c = u.__text, d = l.__text;
  if (c === d) return Vt;
  const m = i.anchor, g = s.anchor;
  if (m.key !== g.key || m.type !== "text") return Vt;
  const v = m.offset, y = g.offset, x = d.length - c.length;
  return x === 1 && y === v - 1 ? uu : x === -1 && y === v + 1 ? D4 : x === -1 && y === v ? R4 : Vt;
}
function F4(r, e) {
  let t = Date.now(), n = Vt;
  return (a, i, s, o, l, u) => {
    const c = Date.now();
    if (u.has("historic")) return n = Vt, t = c, Ys;
    const d = I4(a, i, o, l, r.isComposing()), m = (() => {
      const g = s === null || s.editor === r, v = u.has("history-push");
      if (!v && g && u.has("history-merge")) return Qa;
      if (a === null) return Gs;
      const y = i._selection;
      return o.size > 0 || l.size > 0 ? v === !1 && d !== Vt && d === n && c < t + e && g || o.size === 1 && function(x, _, w) {
        const C = _._nodeMap.get(x), T = w._nodeMap.get(x), k = _._selection, N = w._selection;
        return !(U(k) && U(N) && k.anchor.type === "element" && k.focus.type === "element" && N.anchor.type === "text" && N.focus.type === "text" || !_e(C) || !_e(T) || C.__parent !== T.__parent) && JSON.stringify(_.read(() => C.exportJSON())) === JSON.stringify(w.read(() => T.exportJSON()));
      }(Array.from(o)[0], a, i) ? Qa : Gs : y !== null ? Qa : Ys;
    })();
    return t = c, n = d, m;
  };
}
function cu(r) {
  r.undoStack = [], r.redoStack = [], r.current = null;
}
function L4(r, e, t) {
  const n = F4(r, t);
  return Re(r.registerCommand(fc, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const u = s.current, c = l.pop();
      u !== null && (o.push(u), i.dispatchCommand(Zn, !0)), l.length === 0 && i.dispatchCommand(Qn, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(r, e), !0), be), r.registerCommand(mc, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (o.length !== 0) {
      const u = s.current;
      u !== null && (l.push(u), i.dispatchCommand(Qn, !0));
      const c = o.pop();
      o.length === 0 && i.dispatchCommand(Zn, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(r, e), !0), be), r.registerCommand(w1, () => (cu(e), !1), be), r.registerCommand(x1, () => (cu(e), r.dispatchCommand(Zn, !1), r.dispatchCommand(Qn, !1), !0), be), r.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: o, dirtyElements: l, tags: u }) => {
    const c = e.current, d = e.redoStack, m = e.undoStack, g = c === null ? null : c.editorState;
    if (c !== null && i === g) return;
    const v = n(s, i, c, o, l, u);
    if (v === Gs) d.length !== 0 && (e.redoStack = [], r.dispatchCommand(Zn, !1)), c !== null && (m.push({ ...c }), r.dispatchCommand(Qn, !0));
    else if (v === Ys) return;
    e.current = { editor: r, editorState: i };
  }));
}
function nh() {
  return { current: null, redoStack: [], undoStack: [] };
}
function z4({ delay: r, externalHistoryState: e }) {
  const [t] = oe();
  return function(n, a, i = 1e3) {
    const s = it(() => a || nh(), [a]);
    $(() => L4(n, s, i), [i, n, s]);
  }(t, e, r), null;
}
const ah = ao({}), P4 = ({
  children: r,
  initHistoryState: e
}) => {
  const t = it(
    () => ({ historyState: e || nh() }),
    []
  );
  return /* @__PURE__ */ p.jsx(ah.Provider, { value: t, children: r });
}, B4 = () => Zu(ah), j4 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
function $4(r) {
  return { initialValueFn: () => r.isEditable(), subscribe: (e) => r.registerEditableListener(e) };
}
function Fa() {
  return function(r) {
    const [e] = oe(), t = it(() => r(e), [e, r]), n = Oe(t.initialValueFn()), [a, i] = H(n.current);
    return j4(() => {
      const { initialValueFn: s, subscribe: o } = t, l = s();
      return n.current !== l && (n.current = l, i(l)), o((u) => {
        n.current = u, i(u);
      });
    }, [t, r]), a;
  }($4);
}
function q4() {
  return Ot().getTextContent();
}
function H4(r, e = !0) {
  if (r) return !1;
  let t = q4();
  return e && (t = t.trim()), t === "";
}
function U4(r) {
  if (!H4(r, !1)) return !1;
  const e = Ot().getChildren(), t = e.length;
  if (t > 1) return !1;
  for (let n = 0; n < t; n++) {
    const a = e[n];
    if (wr(a)) return !1;
    if (pe(a)) {
      if (!$r(a) || a.__indent !== 0) return !1;
      const i = a.getChildren(), s = i.length;
      for (let o = 0; o < s; o++) {
        const l = i[n];
        if (!_e(l)) return !1;
      }
    }
  }
  return !0;
}
function ih(r) {
  return () => U4(r);
}
function W4(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var K4 = W4(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function G4(r, e, t, n) {
  const a = (s) => s instanceof t, i = (s) => {
    const o = Ir(s.getTextContent());
    o.setFormat(s.getFormat()), s.replace(o);
  };
  return [r.registerNodeTransform(hn, (s) => {
    if (!s.isSimpleText()) return;
    let o, l = s.getPreviousSibling(), u = s.getTextContent(), c = s;
    if (_e(l)) {
      const m = l.getTextContent(), g = e(m + u);
      if (a(l)) {
        if (g === null || ((v) => v.getLatest().__mode)(l) !== 0) return void i(l);
        {
          const v = g.end - m.length;
          if (v > 0) {
            const y = m + u.slice(0, v);
            if (l.select(), l.setTextContent(y), v === u.length) s.remove();
            else {
              const x = u.slice(v);
              s.setTextContent(x);
            }
            return;
          }
        }
      } else if (g === null || g.start < m.length) return;
    }
    let d = 0;
    for (; ; ) {
      o = e(u);
      let m, g = o === null ? "" : u.slice(o.end);
      if (u = g, g === "") {
        const y = c.getNextSibling();
        if (_e(y)) {
          g = c.getTextContent() + y.getTextContent();
          const x = e(g);
          if (x === null) return void (a(y) ? i(y) : y.markDirty());
          if (x.start !== 0) return;
        }
      }
      if (o === null) return;
      if (o.start === 0 && _e(l) && l.isTextEntity()) {
        d += o.end;
        continue;
      }
      o.start === 0 ? [m, c] = c.splitText(o.end) : [, m, c] = c.splitText(o.start + d, o.end + d), m === void 0 && K4(165, "nodeToReplace");
      const v = n(m);
      if (v.setFormat(m.getFormat()), m.replace(v), c == null) return;
      d = 0, l = v;
    }
  }), r.registerNodeTransform(t, (s) => {
    const o = s.getTextContent(), l = e(o);
    if (l === null || l.start !== 0) return void i(s);
    if (o.length > l.end) return void s.splitText(l.end);
    const u = s.getPreviousSibling();
    _e(u) && u.isTextEntity() && (i(u), i(s));
    const c = s.getNextSibling();
    _e(c) && c.isTextEntity() && (i(c), a(s) && i(s));
  })];
}
function Y4(r) {
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
            const [u, c, d, m, g, v] = l;
            r.update(() => {
              const y = B();
              if (U(y)) {
                const x = y.anchor;
                let _ = x.getNode(), w = 0, C = 0;
                if (_e(_) && u >= 0 && c >= 0 && (w = u, C = u + c, y.setTextNodeRange(_, w, _, C)), w === C && d === "" || (y.insertRawText(d), _ = x.getNode()), _e(_)) {
                  w = m, C = m + g;
                  const T = _.getTextContentSize();
                  w = w > T ? T : w, C = C > T ? T : C, y.setTextNodeRange(_, w, _, C);
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
const Vs = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
function du(r) {
  return r.getEditorState().read(ih(r.isComposing()));
}
function V4({ contentEditable: r, placeholder: e = null, ErrorBoundary: t }) {
  const [n] = oe(), a = function(i, s) {
    const [o, l] = H(() => i.getDecorators());
    return Vs(() => i.registerDecoratorListener((u) => {
      R1(() => {
        l(u);
      });
    }), [i]), $(() => {
      l(i.getDecorators());
    }, [i]), it(() => {
      const u = [], c = Object.keys(o);
      for (let d = 0; d < c.length; d++) {
        const m = c[d], g = p.jsx(s, { onError: (y) => i._onError(y), children: p.jsx(jr, { fallback: null, children: o[m] }) }), v = i.getElementByKey(m);
        v !== null && u.push(Zt(g, v, m));
      }
      return u;
    }, [s, o, i]);
  }(n, t);
  return function(i) {
    Vs(() => Re(Km(i), Y4(i)), [i]);
  }(n), p.jsxs(p.Fragment, { children: [r, p.jsx(X4, { content: e }), a] });
}
function X4({ content: r }) {
  const [e] = oe(), t = function(a) {
    const [i, s] = H(() => du(a));
    return Vs(() => {
      function o() {
        const l = du(a);
        s(l);
      }
      return o(), Re(a.registerUpdateListener(() => {
        o();
      }), a.registerEditableListener(() => {
        o();
      }));
    }, [a]), i;
  }(e), n = Fa();
  return t ? typeof r == "function" ? r(n) : r : null;
}
function Xs(r, e) {
  return Xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Xs(r, e);
}
var hu = { error: null }, J4 = function(r) {
  var e, t;
  function n() {
    for (var i, s = arguments.length, o = new Array(s), l = 0; l < s; l++) o[l] = arguments[l];
    return (i = r.call.apply(r, [this].concat(o)) || this).state = hu, i.resetErrorBoundary = function() {
      for (var u, c = arguments.length, d = new Array(c), m = 0; m < c; m++) d[m] = arguments[m];
      i.props.onReset == null || (u = i.props).onReset.apply(u, d), i.reset();
    }, i;
  }
  t = r, (e = n).prototype = Object.create(t.prototype), e.prototype.constructor = e, Xs(e, t), n.getDerivedStateFromError = function(i) {
    return { error: i };
  };
  var a = n.prototype;
  return a.reset = function() {
    this.setState(hu);
  }, a.componentDidCatch = function(i, s) {
    var o, l;
    (o = (l = this.props).onError) == null || o.call(l, i, s);
  }, a.componentDidUpdate = function(i, s) {
    var o, l, u, c, d = this.state.error, m = this.props.resetKeys;
    d !== null && s.error !== null && ((u = i.resetKeys) === void 0 && (u = []), (c = m) === void 0 && (c = []), u.length !== c.length || u.some(function(g, v) {
      return !Object.is(g, c[v]);
    })) && ((o = (l = this.props).onResetKeysChange) == null || o.call(l, i.resetKeys, m), this.reset());
  }, a.render = function() {
    var i = this.state.error, s = this.props, o = s.fallbackRender, l = s.FallbackComponent, u = s.fallback;
    if (i !== null) {
      var c = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (mt.isValidElement(u)) return u;
      if (typeof o == "function") return o(c);
      if (l) return mt.createElement(l, c);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, n;
}(mt.Component);
function Z4({ children: r, onError: e }) {
  return p.jsx(J4, { fallback: p.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: e, children: r });
}
function Q4({ defaultSelection: r }) {
  const [e] = oe();
  return $(() => {
    e.focus(() => {
      const t = document.activeElement, n = e.getRootElement();
      n === null || t !== null && n.contains(t) || n.focus({ preventScroll: !0 });
    }, { defaultSelection: r });
  }, [r, e]), null;
}
function eg(r) {
  return r.registerCommand(Si, (e) => {
    const t = B();
    if (!U(t)) return !1;
    e.preventDefault();
    const n = function(a) {
      const i = a.getNodes();
      if (Q1(i, (d) => si(d) && d.canIndent() ? d : null).length > 0) return !0;
      const s = a.anchor, o = a.focus, l = o.isBefore(s) ? o : s, u = l.getNode(), c = Ci(u);
      if (c.canIndent()) {
        const d = c.getKey();
        let m = xa();
        if (m.anchor.set(d, 0, "element"), m.focus.set(d, 0, "element"), m = uo(m), m.anchor.is(l)) return !0;
      }
      return !1;
    }(t) ? e.shiftKey ? oi : _i : lc;
    return r.dispatchCommand(n, void 0);
  }, be);
}
function tg() {
  const [r] = oe();
  return $(() => eg(r)), null;
}
function rg() {
  const [r] = oe();
  return $(() => r.registerCommand(Co, (e) => {
    const t = B();
    if (!U(t)) return !1;
    if (t.focus.getNode() !== null) {
      const n = No();
      qr(n);
    }
    return !0;
  }, be), [r]), null;
}
function ng({
  children: r,
  className: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: e || "placeholder__root", children: r });
}
const sh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
function ag({ editor: r, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: n, ariaDescribedBy: a, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: o, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: c, ariaOwns: d, ariaRequired: m, autoCapitalize: g, className: v, id: y, role: x = "textbox", spellCheck: _ = !0, style: w, tabIndex: C, "data-testid": T, ...k }, N) {
  const [I, D] = H(r.isEditable()), M = ie((z) => {
    z && z.ownerDocument && z.ownerDocument.defaultView ? r.setRootElement(z) : r.setRootElement(null);
  }, [r]), F = it(() => /* @__PURE__ */ function(...z) {
    return (j) => {
      z.forEach((P) => {
        typeof P == "function" ? P(j) : P != null && (P.current = j);
      });
    };
  }(N, M), [M, N]);
  return sh(() => (D(r.isEditable()), r.registerEditableListener((z) => {
    D(z);
  })), [r]), p.jsx("div", { ...k, "aria-activedescendant": I ? e : void 0, "aria-autocomplete": I ? t : "none", "aria-controls": I ? n : void 0, "aria-describedby": a, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": I && x === "combobox" ? !!s : void 0, ...o != null ? { "aria-invalid": o } : {}, "aria-label": l, "aria-labelledby": u, "aria-multiline": c, "aria-owns": I ? d : void 0, "aria-readonly": !I || void 0, "aria-required": m, autoCapitalize: g, className: v, contentEditable: I, "data-testid": T, id: y, ref: F, role: I ? x : void 0, spellCheck: _, style: w, tabIndex: C });
}
const ig = Qu(ag);
function mu(r) {
  return r.getEditorState().read(ih(r.isComposing()));
}
const sg = Qu(og);
function og(r, e) {
  const { placeholder: t, ...n } = r, [a] = oe();
  return p.jsxs(p.Fragment, { children: [p.jsx(ig, { editor: a, ...n, ref: e }), t != null && p.jsx(lg, { editor: a, content: t })] });
}
function lg({ content: r, editor: e }) {
  const t = function(s) {
    const [o, l] = H(() => mu(s));
    return sh(() => {
      function u() {
        const c = mu(s);
        l(c);
      }
      return u(), Re(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), o;
  }(e), [n, a] = H(e.isEditable());
  if (Br(() => (a(e.isEditable()), e.registerEditableListener((s) => {
    a(s);
  })), [e]), !t) return null;
  let i = null;
  return typeof r == "function" ? i = r(n) : r !== null && (i = r), i === null ? null : p.jsx("div", { "aria-hidden": !0, children: i });
}
function ug({
  className: r
}) {
  return /* @__PURE__ */ p.jsx(sg, { className: r || "content-editable__root" });
}
const Un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", cg = Un && "documentMode" in document ? document.documentMode : null, Or = Un && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
Un && "InputEvent" in window && !cg && "getTargetRanges" in new window.InputEvent("input");
const oh = mt.createContext(null), fu = 4;
function Ae({
  children: r,
  className: e,
  onClick: t,
  title: n
}) {
  const a = Oe(null), i = mt.useContext(oh);
  if (i === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: s } = i;
  return $(() => {
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
function dg({
  children: r,
  dropDownRef: e,
  onClose: t
}) {
  const [n, a] = H(), [i, s] = H(), o = ie(
    (c) => {
      a((d) => d ? [...d, c] : [c]);
    },
    [a]
  ), l = (c) => {
    if (!n)
      return;
    const d = c.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(d) && c.preventDefault(), d === "Escape" || d === "Tab" ? t() : d === "ArrowUp" ? s((m) => {
      if (!m)
        return n[0];
      const g = n.indexOf(m) - 1;
      return n[g === -1 ? n.length - 1 : g];
    }) : d === "ArrowDown" && s((m) => m ? n[n.indexOf(m) + 1] : n[0]);
  }, u = it(
    () => ({
      registerItem: o
    }),
    [o]
  );
  return $(() => {
    n && !i && s(n[0]), i && i.current && i.current.focus();
  }, [n, i]), /* @__PURE__ */ p.jsx(oh.Provider, { value: u, children: /* @__PURE__ */ p.jsx("div", { className: "dropdown", ref: e, onKeyDown: l, children: r }) });
}
function cn({
  disabled: r = !1,
  buttonLabel: e,
  buttonAriaLabel: t,
  buttonClassName: n,
  buttonIconClassName: a,
  children: i,
  stopCloseOnClickSelf: s
}) {
  const o = Oe(null), l = Oe(null), [u, c] = H(!1), d = () => {
    c(!1), l && l.current && l.current.focus();
  };
  return $(() => {
    const m = l.current, g = o.current;
    if (u && m !== null && g !== null) {
      const { top: v, left: y } = m.getBoundingClientRect();
      g.style.top = `${v + m.offsetHeight + fu}px`, g.style.left = `${Math.min(
        y,
        window.innerWidth - g.offsetWidth - 20
      )}px`;
    }
  }, [o, l, u]), $(() => {
    const m = l.current;
    if (m !== null && u) {
      const g = (v) => {
        const y = v.target;
        s && o.current && o.current.contains(y) || m.contains(y) || c(!1);
      };
      return document.addEventListener("click", g), () => {
        document.removeEventListener("click", g);
      };
    }
  }, [o, l, u, s]), $(() => {
    const m = () => {
      if (u) {
        const g = l.current, v = o.current;
        if (g !== null && v !== null) {
          const { top: y } = g.getBoundingClientRect(), x = y + g.offsetHeight + fu;
          x !== v.getBoundingClientRect().top && (v.style.top = `${x}px`);
        }
      }
    };
    return document.addEventListener("scroll", m), () => {
      document.removeEventListener("scroll", m);
    };
  }, [l, o, u]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        type: "button",
        disabled: r,
        "aria-label": t || e,
        className: n,
        onClick: () => c(!u),
        ref: l,
        children: [
          a && /* @__PURE__ */ p.jsx("span", { className: a }),
          e && /* @__PURE__ */ p.jsx("span", { className: "text dropdown-button-text", children: e }),
          /* @__PURE__ */ p.jsx("i", { className: "chevron-down" })
        ]
      }
    ),
    u && Zt(
      /* @__PURE__ */ p.jsx(dg, { dropDownRef: o, onClose: d, children: i }),
      document.body
    )
  ] });
}
function hg(...r) {
  const e = [];
  for (const t of r)
    if (t && typeof t == "string")
      for (const [n] of t.matchAll(/\S+/g))
        e.push(n);
  return e;
}
function mg(r, e, t) {
  const n = Rr[e];
  let a = r ^ n;
  return e === "subscript" ? a &= ~Rr.superscript : e === "superscript" && (a &= ~Rr.subscript), a;
}
function us(r, e) {
  r.__lexicalClassNameCache === void 0 && (r.__lexicalClassNameCache = {});
  const t = r.__lexicalClassNameCache, n = t[e];
  if (n !== void 0)
    return n;
  const a = r[e];
  if (typeof a == "string") {
    const i = hg(a);
    return t[e] = i, i;
  }
  return a;
}
function pu(r, e, ...t) {
  throw new Error(
    "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + e
  );
}
const fg = en.lazy(() => import("./DataMentionComponent-BCBOVhPr.js"));
function pg(r) {
  const e = r.getAttribute("data-mention-data"), t = r.getAttribute("data-mention-type"), n = r.getAttribute("data-mention-field"), a = r.getAttribute("data-mention-label");
  return t !== null && n !== null && a !== null ? {
    node: d0({ dataMention: t, fieldName: n, label: a, data: e })
  } : null;
}
function cs(r) {
  return r & _1 ? "code" : r & S1 ? "mark" : r & C1 ? "sub" : r & k1 ? "sup" : null;
}
function ds(r) {
  return r & N1 ? "strong" : r & E1 ? "em" : "span";
}
function lh(r, e, t, n) {
  const a = t.classList;
  let i = us(n, "base");
  i !== void 0 && a.add(...i), i = us(
    n,
    "underlineStrikethrough"
  );
  let s = !1;
  const o = r & j0 && r & $0, l = e & j0 && e & $0;
  i !== void 0 && (l ? (s = !0, o || a.add(...i)) : o && a.remove(...i));
  for (const u in Rr) {
    const c = Rr[u];
    if (i = us(n, u), i !== void 0)
      if (e & c) {
        if (s && (u === "underline" || u === "strikethrough")) {
          r & c && a.remove(...i);
          continue;
        }
        (!(r & c) || o && u === "underline" || u === "strikethrough") && a.add(...i);
      } else r & c && a.remove(...i);
  }
}
function gu(r, e, t) {
  const a = t.theme.text;
  a !== void 0 && lh(0, e, r, a);
}
const gg = (r) => {
  var t;
  const e = r.parentElement;
  if (e) {
    if (e.hasAttribute("data-lexical-data-mention"))
      return;
    (t = e.parentElement) == null || t.appendChild(r);
  }
};
class dn extends ur {
  constructor(t, n, a, i, s, o, l, u, c, d) {
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
    this.__dataMention = t, this.__fieldName = n, this.__label = a, this.__value = s, this.__data = i, this.__step = o || this.defaultStep, this.__format = l || 0, this.__style = u || "", this.__decoratorSpan = null, this.__inputError = c || null;
  }
  static getType() {
    return "data-mention";
  }
  static clone(t) {
    return new dn(
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
  createDOM(t) {
    var g;
    const n = this.__dataMention === "input", a = this.__format, i = cs(a), s = ds(a), o = i === null ? s : i, l = document.createElement(n ? "span" : o), c = t.theme.dataMention;
    if (l.setAttribute("data-mention-type", this.__dataMention), l.setAttribute("data-mention-field", this.__fieldName), l.setAttribute("data-mention-label", this.__label), l.setAttribute("data-lexical-data-mention", "true"), l.setAttribute("data-mention-data", ((g = this.__data) == null ? void 0 : g.toString()) || ""), c !== void 0 && (l.className = c), n)
      return l;
    let d = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (d = document.createElement(s), l.appendChild(d)), gu(d, a, t);
    const m = this.__style;
    return m !== "" && (l.style.cssText = m), l;
  }
  updateDOM(t, n, a) {
    if (this.__dataMention === "input")
      return !1;
    const i = t.__format, s = this.__format, o = cs(i), l = cs(s), u = ds(i), c = ds(s), d = o === null ? u : o, m = l === null ? c : l, g = n.firstChild;
    let v = g !== null ? g.firstChild : null;
    if (v && v.nodeType !== Node.TEXT_NODE ? n.appendChild(v) : v = null, d !== m)
      return !0;
    if (o === l && u !== c) {
      const T = n.firstChild;
      T == null && pu(!1, "updateDOM: prevInnerDOM is null or undefined");
      const k = document.createElement(c);
      return gu(
        k,
        s,
        a
      ), n.replaceChild(k, T), v && k.appendChild(v), !1;
    }
    let y = n;
    l !== null && o !== null && (y = n.firstChild, y == null && pu(!1, "updateDOM: innerDOM is null or undefined"));
    const _ = a.theme.text;
    _ !== void 0 && i !== s && lh(
      i,
      s,
      y,
      _
    );
    const w = t.__style, C = this.__style;
    return w !== C && (n.style.cssText = C), v && y && y.appendChild(v), !1;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-data-mention") ? {
        conversion: pg,
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
      style: u
    } = t, c = d0({
      dataMention: n,
      fieldName: a,
      label: i,
      data: s,
      step: this.prototype.defaultStep,
      format: l,
      style: u
    });
    if (n === "input" && c.__value) {
      const d = c.__value;
      if (o) {
        const m = d.parseEditorState(o.editorState);
        m.isEmpty() || d.setEditorState(m);
      }
    }
    return c;
  }
  exportDOM() {
    const t = document.createElement("span");
    if (t.setAttribute("data-mention-type", this.__dataMention), t.setAttribute("data-mention-field", this.__fieldName), t.setAttribute("data-mention-label", this.__label), t.setAttribute("data-lexical-data-mention", "true"), this.__dataMention === "input" && this.__value) {
      const n = document.createElement("span");
      n.style.wordBreak = "break-word", n.style.whiteSpace = "pre-wrap", n.style.overflowWrap = "break-word", n.style.display = "inline-grid", this.__value.getEditorState().read(() => {
        const s = new DOMParser().parseFromString(
          jc(this.__value),
          "text/html"
        ), o = [];
        s.body.childNodes.forEach((l) => {
          const u = document.createElement("span");
          u.append(...l.childNodes), o.push(u);
        }), n.append(...o);
      }), t.appendChild(n);
    } else
      t.textContent = this.__data ? this.__data.toString() : "";
    return { element: t };
  }
  exportJSON() {
    return {
      dataMention: this.__dataMention,
      fieldName: this.__fieldName,
      label: this.__label,
      value: this.__value && this.__value.toJSON(),
      data: this.__data,
      version: 1,
      type: "data-mention",
      format: this.getFormat(),
      style: this.getStyle()
    };
  }
  isInput() {
    return this.__dataMention === "input";
  }
  setData(t) {
    const n = this.getWritable();
    n.__data = t;
  }
  setLabel(t) {
    const n = this.getWritable();
    n.__label = t;
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
    const n = this.getFormat(), a = mg(n, t);
    return this.setFormat(a);
  }
  clearAllFormats() {
    if (this.isInput())
      return this;
    this.setFormat(0), this.setStyle("");
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(jr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      fg,
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
    this.__dataMention !== "input" && this.__decoratorSpan && gg(this.__decoratorSpan), super.remove(t);
  }
}
const d0 = ({
  dataMention: r,
  fieldName: e,
  label: t,
  data: n,
  value: a,
  step: i,
  format: s,
  style: o
}) => {
  !a && r === "input" && (a = pa());
  const l = new dn(r, e, t, n, a, i, s, o);
  return ut(l);
}, vg = (r) => r instanceof dn, oa = (r) => r === null || r.getNodes().length !== 1 ? !1 : vg(r.getNodes()[0]), Gr = 8, Yr = 72, bg = 15;
function yg({
  selectionFontSize: r,
  disabled: e = !1,
  editor: t
}) {
  const [n, a] = mt.useState(r), i = (u, c) => {
    if (!c)
      return u;
    let d = u;
    switch (c) {
      case 2:
        switch (!0) {
          case u > Yr:
            d = Yr;
            break;
          case u >= 48:
            d -= 12;
            break;
          case u >= 24:
            d -= 4;
            break;
          case u >= 14:
            d -= 2;
            break;
          case u >= 9:
            d -= 1;
            break;
          default:
            d = Gr;
            break;
        }
        break;
      case 1:
        switch (!0) {
          case u < Gr:
            d = Gr;
            break;
          case u < 12:
            d += 1;
            break;
          case u < 20:
            d += 2;
            break;
          case u < 36:
            d += 4;
            break;
          case u <= 60:
            d += 12;
            break;
          default:
            d = Yr;
            break;
        }
        break;
    }
    return d;
  }, s = mt.useCallback(
    (u, c) => {
      const d = (m) => (m || (m = `${bg}px`), m = m.slice(0, -2), `${i(
        Number(m),
        c
      )}px`);
      t.update(() => {
        if (t.isEditable()) {
          const m = B();
          m !== null && (oa(m) ? m.getNodes()[0].patchStyle({ "font-size": u || "15px" }) : mo(m, {
            "font-size": u || d
          }));
        }
      });
    },
    [t]
  ), o = (u) => {
    const c = Number(n);
    if (["e", "E", "+", "-"].includes(u.key) || isNaN(c)) {
      u.preventDefault(), a("");
      return;
    }
    if (u.key === "Enter") {
      u.preventDefault();
      let d = c;
      c > Yr ? d = Yr : c < Gr && (d = Gr), a(String(d)), s(String(d) + "px", null);
    }
  }, l = (u) => {
    if (n !== "") {
      const c = i(
        Number(n),
        u
      );
      s(String(c) + "px", null);
    } else
      s(null, u);
  };
  return mt.useEffect(() => {
    a(r);
  }, [r]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) <= Gr,
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
        min: Gr,
        max: Yr,
        onChange: (u) => a(u.target.value),
        onKeyDown: o
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) >= Yr,
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
const xg = /* @__PURE__ */ new Set([
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:"
]);
function gi(r) {
  try {
    const e = new URL(r);
    if (!xg.has(e.protocol))
      return "about:blank";
  } catch {
    return r;
  }
  return r;
}
const wg = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function _g(r) {
  return r === "https://" || wg.test(r);
}
function On(r) {
  const e = r.anchor, t = r.focus, n = r.anchor.getNode(), a = r.focus.getNode();
  return n === a ? n : r.isBackward() ? W0(t) ? n : a : W0(e) ? n : a;
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
let Js = !1;
const Sg = [
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
], Vn = 214, vu = 150;
function uh({
  color: r,
  onChange: e
}) {
  const [t, n] = H(Cn("hex", r)), [a, i] = H(r), s = Oe(null), o = it(
    () => ({
      x: t.hsv.s / 100 * Vn,
      y: (100 - t.hsv.v) / 100 * vu
    }),
    [t.hsv.s, t.hsv.v]
  ), l = it(
    () => ({
      x: t.hsv.h / 360 * Vn
    }),
    [t.hsv]
  ), u = (m) => {
    if (i(m), /^#[0-9A-Fa-f]{6}$/i.test(m)) {
      const g = Cn("hex", m);
      n(g);
    }
  }, c = ({ x: m, y: g }) => {
    const v = {
      ...t.hsv,
      s: m / Vn * 100,
      v: 100 - g / vu * 100
    }, y = Cn("hsv", v);
    n(y), i(y.hex);
  }, d = ({ x: m }) => {
    const g = { ...t.hsv, h: m / Vn * 360 }, v = Cn("hsv", g);
    n(v), i(v.hex);
  };
  return $(() => {
    s.current !== null && e && (e(t.hex, Js), i(t.hex));
  }, [t, e]), $(() => {
    if (r === void 0)
      return;
    const m = Cn("hex", r);
    n(m), i(m.hex);
  }, [r]), /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: Vn },
      ref: s,
      children: [
        /* @__PURE__ */ p.jsx(Pr, { label: "Hex", onChange: u, value: a }),
        /* @__PURE__ */ p.jsx("div", { className: "color-picker-basic-color", children: Sg.map((m) => /* @__PURE__ */ p.jsx(
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
          bu,
          {
            className: "color-picker-saturation",
            style: { backgroundColor: `hsl(${t.hsv.h}, 100%, 50%)` },
            onChange: c,
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
        /* @__PURE__ */ p.jsx(bu, { className: "color-picker-hue", onChange: d, children: /* @__PURE__ */ p.jsx(
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
function bu({ className: r, style: e, onChange: t, children: n }) {
  const a = Oe(null), i = Oe(!1), s = (l) => {
    if (a.current) {
      const { current: u } = a, { width: c, height: d, left: m, top: g } = u.getBoundingClientRect(), v = yu(l.clientX - m, c, 0), y = yu(l.clientY - g, d, 0);
      t({ x: v, y });
    }
  }, o = (l) => {
    if (l.button !== 0)
      return;
    s(l);
    const u = (d) => {
      i.current = !0, Js = !0, s(d);
    }, c = (d) => {
      i.current && (Js = !1), document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", c, !1), s(d), i.current = !1;
    };
    document.addEventListener("mousemove", u, !1), document.addEventListener("mouseup", c, !1);
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
function yu(r, e, t) {
  return r > e ? e : r < t ? t : r;
}
function xu(r) {
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
function wu(r) {
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
function hs({ r, g: e, b: t }) {
  r /= 255, e /= 255, t /= 255;
  const n = Math.max(r, e, t), a = n - Math.min(r, e, t), i = a ? (n === r ? (e - t) / a + (e < t ? 6 : 0) : n === e ? 2 + (t - r) / a : 4 + (r - e) / a) * 60 : 0, s = n ? a / n * 100 : 0, o = n * 100;
  return { h: i, s, v: o };
}
function Cg({ h: r, s: e, v: t }) {
  e /= 100, t /= 100;
  const n = ~~(r / 60), a = r / 60 - n, i = t * (1 - e), s = t * (1 - e * a), o = t * (1 - e * (1 - a)), l = n % 6, u = Math.round([t, s, i, i, o, t][l] * 255), c = Math.round([o, t, t, s, i, i][l] * 255);
  return { b: Math.round([i, i, o, t, t, s][l] * 255), g: c, r: u };
}
function _u({ b: r, g: e, r: t }) {
  return "#" + [t, e, r].map((n) => n.toString(16).padStart(2, "0")).join("");
}
function Cn(r, e) {
  let t = xu("#121212"), n = wu(t), a = hs(n);
  return r === "hex" ? (t = xu(e), n = wu(t), a = hs(n)) : r === "rgb" ? (n = e, t = _u(n), a = hs(n)) : r === "hsv" && (a = e, n = Cg(a), t = _u(n)), { hex: t, hsv: a, rgb: n };
}
function Su({
  disabled: r = !1,
  stopCloseOnClickSelf: e = !0,
  color: t,
  onChange: n,
  ...a
}) {
  return /* @__PURE__ */ p.jsx(
    cn,
    {
      ...a,
      disabled: r,
      stopCloseOnClickSelf: e,
      children: /* @__PURE__ */ p.jsx(uh, { color: t, onChange: n })
    }
  );
}
const h0 = Ue();
function kg() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([zn]))
      throw new Error(
        "PageBreakPlugin: PageBreakNode is not registered on editor"
      );
    return Re(
      r.registerCommand(
        h0,
        () => {
          const e = B();
          if (!U(e))
            return !1;
          if (e.focus.getNode() !== null) {
            const n = Io();
            qr(n);
          }
          return !0;
        },
        be
      )
    );
  }, [r]), null;
}
function Ng({ children: r }) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogButtonsList", children: r });
}
function Wn({
  "data-test-id": r,
  children: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogActions", "data-test-id": r, children: e });
}
function Eg(...r) {
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
      className: Eg(
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
function ch({
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
const Tg = (r) => Un ? (r || window).getSelection() : null, La = Ue("INSERT_IMAGE_COMMAND");
function Ag({
  onClick: r
}) {
  const [e, t] = H(""), [n, a] = H(""), i = e === "";
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
    /* @__PURE__ */ p.jsx(Wn, { children: /* @__PURE__ */ p.jsx(
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
function Mg({
  onClick: r
}) {
  const [e, t] = H(""), [n, a] = H(""), i = e === "", s = (o) => {
    const l = new FileReader();
    l.onload = function() {
      return typeof l.result == "string" && t(l.result), "";
    }, o !== null && l.readAsDataURL(o[0]);
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      ch,
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
    /* @__PURE__ */ p.jsx(Wn, { children: /* @__PURE__ */ p.jsx(
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
function dh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = H(null), a = Oe(!1);
  $(() => {
    a.current = !1;
    const s = (o) => {
      a.current = o.altKey;
    };
    return document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s);
    };
  }, [r]);
  const i = (s) => {
    r.dispatchCommand(La, s), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    !t && /* @__PURE__ */ p.jsxs(Ng, { children: [
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
    t === "url" && /* @__PURE__ */ p.jsx(Ag, { onClick: i }),
    t === "file" && /* @__PURE__ */ p.jsx(Mg, { onClick: i })
  ] });
}
function Og({
  captionsEnabled: r
}) {
  const [e] = oe();
  return $(() => {
    if (!e.hasNodes([Pn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Re(
      e.registerCommand(
        La,
        (t) => {
          const n = Fo(t);
          return Rn([n]), zt(n.getParentOrThrow()) && _a(n, xe).selectEnd(), !0;
        },
        be
      ),
      e.registerCommand(
        lo,
        (t) => Rg(t),
        Lt
      ),
      e.registerCommand(
        yi,
        (t) => Ig(t),
        ye
      ),
      e.registerCommand(
        xi,
        (t) => Fg(t, e),
        Lt
      )
    );
  }, [r, e]), null;
}
const Dg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", hh = document.createElement("img");
hh.src = Dg;
function Rg(r) {
  const e = m0();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(hh, 0, 0), t.setData(
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
function Ig(r) {
  return m0() ? (mh(r) || r.preventDefault(), !0) : !1;
}
function Fg(r, e) {
  const t = m0();
  if (!t)
    return !1;
  const n = Lg(r);
  if (!n)
    return !1;
  if (r.preventDefault(), mh(r)) {
    const a = zg(r);
    t.remove();
    const i = xa();
    a != null && i.applyDOMRange(a), yt(i), e.dispatchCommand(La, n);
  }
  return !0;
}
function m0() {
  const r = B();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return hf(t) ? t : null;
}
function Lg(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function mh(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function zg(r) {
  let e;
  const t = r.target, n = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, a = Tg(n);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && a !== null)
    a.collapse(r.rangeParent, r.rangeOffset || 0), e = a.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
function Pg({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n
}) {
  const a = Oe(null);
  return $(() => {
    a.current !== null && a.current.focus();
  }, []), $(() => {
    let i = null;
    const s = (u) => {
      u.key === "Escape" && r();
    }, o = (u) => {
      const c = u.target;
      a.current !== null && !a.current.contains(c) && n && r();
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
function Bg({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n = !1
}) {
  return Zt(
    /* @__PURE__ */ p.jsx(
      Pg,
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
function Fi() {
  const [r, e] = H(null), t = ie(() => {
    e(null);
  }, []), n = it(() => {
    if (r === null)
      return null;
    const { title: i, content: s, closeOnClickOutside: o } = r;
    return /* @__PURE__ */ p.jsx(
      Bg,
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
function jg({
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
const $g = (r) => Un ? (r || window).getSelection() : null, f0 = Ue("INSERT_INLINE_IMAGE_COMMAND");
function qg({
  activeEditor: r,
  onClose: e
}) {
  const t = Oe(!1), [n, a] = H(""), [i, s] = H(""), [o, l] = H(!1), [u, c] = H("left"), d = n === "", m = (x) => {
    l(x.target.checked);
  }, g = (x) => {
    c(x.target.value);
  }, v = (x) => {
    const _ = new FileReader();
    _.onload = function() {
      return typeof _.result == "string" && a(_.result), "";
    }, x !== null && _.readAsDataURL(x[0]);
  };
  $(() => {
    t.current = !1;
    const x = (_) => {
      t.current = _.altKey;
    };
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [r]);
  const y = () => {
    const x = { altText: i, position: u, showCaption: o, src: n };
    r.dispatchCommand(f0, x), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ p.jsx(
      ch,
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
      jg,
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
    /* @__PURE__ */ p.jsx(Wn, { children: /* @__PURE__ */ p.jsx(
      lr,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: d,
        onClick: () => y(),
        children: "Confirm"
      }
    ) })
  ] });
}
function Hg() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([Hn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Re(
      r.registerCommand(
        f0,
        (e) => {
          const t = c0(e);
          return Rn([t]), zt(t.getParentOrThrow()) && _a(t, xe).selectEnd(), !0;
        },
        be
      ),
      r.registerCommand(
        lo,
        (e) => Wg(e),
        Lt
      ),
      r.registerCommand(
        yi,
        (e) => Kg(e),
        ye
      ),
      r.registerCommand(
        xi,
        (e) => Gg(e, r),
        Lt
      )
    );
  }, [r]), null;
}
const Ug = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", fh = document.createElement("img");
fh.src = Ug;
function Wg(r) {
  const e = p0();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(fh, 0, 0), t.setData(
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
function Kg(r) {
  return p0() ? (ph(r) || r.preventDefault(), !0) : !1;
}
function Gg(r, e) {
  const t = p0();
  if (!t)
    return !1;
  const n = Yg(r);
  if (!n)
    return !1;
  if (r.preventDefault(), ph(r)) {
    const a = Vg(r);
    t.remove();
    const i = xa();
    a != null && i.applyDOMRange(a), yt(i), e.dispatchCommand(f0, n);
  }
  return !0;
}
function p0() {
  const r = B();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return E4(t) ? t : null;
}
function Yg(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function ph(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function Vg(r) {
  let e;
  const t = r.target, n = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, a = $g(n);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && a !== null)
    a.collapse(r.rangeParent, r.rangeOffset || 0), e = a.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
const g0 = Ue(
  "INSERT_EXCALIDRAW_COMMAND"
);
function Xg() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([on]))
      throw new Error(
        "ExcalidrawPlugin: ExcalidrawNode not registered on editor"
      );
    return r.registerCommand(
      g0,
      () => {
        const e = th();
        return Rn([e]), zt(e.getParentOrThrow()) && _a(e, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
Ue("INSERT_NEW_TABLE_COMMAND");
ao({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function gh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = H("5"), [a, i] = H("5"), [s, o] = H(!0);
  $(() => {
    const u = Number(t), c = Number(a);
    u && u > 0 && u <= 500 && c && c > 0 && c <= 50 ? o(!1) : o(!0);
  }, [t, a]);
  const l = () => {
    r.dispatchCommand(To, {
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
    /* @__PURE__ */ p.jsx(Wn, { "data-test-id": "table-model-confirm-insert", children: /* @__PURE__ */ p.jsx(lr, { disabled: s, onClick: l, children: "Confirm" }) })
  ] });
}
const vh = Ue(
  "INSERT_POLL_COMMAND"
);
function bh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = H(""), a = () => {
    r.dispatchCommand(vh, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Pr, { label: "Question", onChange: n, value: t }),
    /* @__PURE__ */ p.jsx(Wn, { children: /* @__PURE__ */ p.jsx(lr, { disabled: t.trim() === "", onClick: a, children: "Confirm" }) })
  ] });
}
function Jg() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([qn]))
      throw new Error("PollPlugin: PollNode not registered on editor");
    return r.registerCommand(
      vh,
      (e) => {
        const t = u0(e, [
          ou(),
          ou()
        ]);
        return Rn([t]), zt(t.getParentOrThrow()) && _a(t, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
const yh = Ue(), Zg = Ue();
function Qg() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([ln, un]))
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    const e = (t) => {
      var a, i;
      const n = B();
      if (U(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const s = he(
          n.anchor.getNode(),
          Za
        );
        if (Za(s)) {
          const o = s.getParent(), l = o && (t ? o.getFirstChild() : o == null ? void 0 : o.getLastChild()), u = t ? (a = s.getFirstDescendant()) == null ? void 0 : a.getKey() : (i = s.getLastDescendant()) == null ? void 0 : i.getKey();
          o !== null && l === s && n.anchor.key === u && (t ? s.insertBefore(xe()) : s.insertAfter(xe()));
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
        wi,
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
        wa,
        () => e(!0),
        ye
      ),
      r.registerCommand(
        yh,
        (t) => (r.update(() => {
          const n = rh(t), a = ms(t);
          for (let i = 0; i < a; i++)
            n.append(
              Ks().append(xe())
            );
          qr(n), n.selectStart();
        }), !0),
        be
      ),
      r.registerCommand(
        Zg,
        ({ template: t, nodeKey: n }) => (r.update(() => {
          const a = At(n);
          if (!Za(a))
            return;
          const i = ms(t), s = ms(
            a.getTemplateColumns()
          );
          if (i > s)
            for (let o = s; o < i; o++)
              a.append(
                Ks().append(xe())
              );
          else if (i < s)
            for (let o = s - 1; o >= i; o--) {
              const l = a.getChildAtIndex(o);
              su(l) && l.remove();
            }
          a.setTemplateColumns(t);
        }), !0),
        be
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(un, (t) => {
        const n = t.getParent();
        if (!Za(n)) {
          const a = t.getChildren();
          for (const i of a)
            t.insertBefore(i);
          t.remove();
        }
      }),
      r.registerNodeTransform(ln, (t) => {
        const n = t.getChildren();
        if (!n.every(su)) {
          for (const a of n)
            t.insertBefore(a);
          t.remove();
        }
      })
    );
  }, [r]), null;
}
function ms(r) {
  return r.trim().split(/\s+/).length;
}
const fs = [
  { label: "2 columns (equal width)", value: "1fr 1fr" },
  { label: "2 columns (25% - 75%)", value: "1fr 3fr" },
  { label: "3 columns (equal width)", value: "1fr 1fr 1fr" },
  { label: "3 columns (25% - 50% - 25%)", value: "1fr 2fr 1fr" },
  { label: "4 columns (equal width)", value: "1fr 1fr 1fr 1fr" }
];
function xh({
  activeEditor: r,
  onClose: e
}) {
  var s;
  const [t, n] = H(fs[0].value), a = (s = fs.find((o) => o.value === t)) == null ? void 0 : s.label, i = () => {
    r.dispatchCommand(yh, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      cn,
      {
        buttonClassName: "toolbar-item dialog-dropdown",
        buttonLabel: a,
        children: fs.map(({ label: o, value: l }) => /* @__PURE__ */ p.jsx(
          Ae,
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
function Zs(r, e) {
  return Zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Zs(r, e);
}
function e2(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Zs(r, e);
}
var t2 = function(e, t) {
  return e === void 0 && (e = []), t === void 0 && (t = []), e.length !== t.length || e.some(function(n, a) {
    return !Object.is(n, t[a]);
  });
}, Cu = {
  error: null
}, r2 = /* @__PURE__ */ function(r) {
  e2(e, r);
  function e() {
    for (var n, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return n = r.call.apply(r, [this].concat(i)) || this, n.state = Cu, n.resetErrorBoundary = function() {
      for (var o, l = arguments.length, u = new Array(l), c = 0; c < l; c++)
        u[c] = arguments[c];
      n.props.onReset == null || (o = n.props).onReset.apply(o, u), n.reset();
    }, n;
  }
  e.getDerivedStateFromError = function(a) {
    return {
      error: a
    };
  };
  var t = e.prototype;
  return t.reset = function() {
    this.setState(Cu);
  }, t.componentDidCatch = function(a, i) {
    var s, o;
    (s = (o = this.props).onError) == null || s.call(o, a, i);
  }, t.componentDidUpdate = function(a, i) {
    var s = this.state.error, o = this.props.resetKeys;
    if (s !== null && i.error !== null && t2(a.resetKeys, o)) {
      var l, u;
      (l = (u = this.props).onResetKeysChange) == null || l.call(u, a.resetKeys, o), this.reset();
    }
  }, t.render = function() {
    var a = this.state.error, i = this.props, s = i.fallbackRender, o = i.FallbackComponent, l = i.fallback;
    if (a !== null) {
      var u = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ mt.isValidElement(l))
        return l;
      if (typeof s == "function")
        return s(u);
      if (o)
        return /* @__PURE__ */ mt.createElement(o, u);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, e;
}(mt.Component);
function n2({
  equation: r,
  inline: e,
  onDoubleClick: t
}) {
  const n = Oe(null);
  return $(() => {
    const a = n.current;
    a !== null && eh.render(r, a, {
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
function a2({
  onConfirm: r,
  initialEquation: e = ""
}) {
  const [t] = oe(), [n, a] = H(e), [i, s] = H(!0), o = ie(() => {
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
        onChange: (u) => {
          a(u.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) : /* @__PURE__ */ p.jsx(
      "textarea",
      {
        onChange: (u) => {
          a(u.target.value);
        },
        value: n,
        className: "KatexEquationAlterer_textArea"
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_defaultRow", children: "Visualization " }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_centerRow", children: /* @__PURE__ */ p.jsx(r2, { onError: (u) => t._onError(u), fallback: null, children: /* @__PURE__ */ p.jsx(
      n2,
      {
        equation: n,
        inline: !1,
        onDoubleClick: () => null
      }
    ) }) }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_dialogActions", children: /* @__PURE__ */ p.jsx(lr, { onClick: o, children: "Confirm" }) })
  ] });
}
const wh = Ue("INSERT_EQUATION_COMMAND");
function _h({
  activeEditor: r,
  onClose: e
}) {
  const t = ie(
    (n, a) => {
      r.dispatchCommand(wh, { equation: n, inline: a }), e();
    },
    [r, e]
  );
  return /* @__PURE__ */ p.jsx(a2, { onConfirm: t });
}
function i2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([$n]))
      throw new Error(
        "EquationsPlugins: EquationsNode not registered on editor"
      );
    return r.registerCommand(
      wh,
      (e) => {
        const { equation: t, inline: n } = e, a = l0(t, n);
        return Rn([a]), zt(a.getParentOrThrow()) && _a(a, xe).selectEnd(), !0;
      },
      be
    );
  }, [r]), null;
}
const v0 = Ue();
Ue();
function s2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([
      nn,
      sn,
      an
    ]))
      throw new Error(
        "CollapsiblePlugin: CollapsibleContainerNode, CollapsibleTitleNode, or CollapsibleContentNode not registered on editor"
      );
    const e = () => {
      var a;
      const n = B();
      if (U(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const i = he(
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
      const n = B();
      if (U(n) && n.isCollapsed()) {
        const a = he(
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
      r.registerNodeTransform(an, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          const i = n.getChildren();
          for (const s of i)
            n.insertBefore(s);
          n.remove();
        }
      }),
      r.registerNodeTransform(sn, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          n.replace(
            xe().append(...n.getChildren())
          );
          return;
        }
      }),
      r.registerNodeTransform(nn, (n) => {
        const a = n.getChildren();
        if (a.length !== 2 || !Cl(a[0]) || !ad(a[1])) {
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
        na,
        () => {
          const n = B();
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
        wi,
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
        wa,
        e,
        ye
      ),
      // Handling CMD+Enter to toggle collapsible element collapsed state
      r.registerCommand(
        la,
        () => {
          var a;
          const n = (a = r._window) == null ? void 0 : a.event;
          if (n && (n.ctrlKey || n.metaKey) && n.key === "Enter") {
            const i = so();
            if (U(i) && i.isCollapsed()) {
              const s = he(
                i.anchor.getNode(),
                (o) => pe(o) && !o.isInline()
              );
              if (Cl(s)) {
                const o = s.getParent();
                if (fr(o))
                  return o.toggleOpen(), yt(i.clone()), !0;
              }
            }
          }
          return !1;
        },
        ye
      ),
      r.registerCommand(
        v0,
        () => (r.update(() => {
          const n = $o(), a = xe();
          qr(
            Bo(!0).append(
              n.append(a),
              jo().append(xe())
            )
          ), a.select();
        }), !0),
        ye
      )
    );
  }, [r]), null;
}
const ku = "startTransition", o2 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
let l2 = class {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
};
const Nu = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function Eu(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function u2(r, e, t, n) {
  const [a] = oe();
  $(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(d, m) {
        let g = getComputedStyle(d);
        const v = g.position === "absolute", y = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = d; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && y.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = Eu(e, s);
      const u = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const d = Eu(e, s);
        d !== l && (l = d, n != null && n(d));
      }, c = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), c.observe(e), () => {
        c.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const Tu = Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function c2({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ye }) {
  const [u, c] = H(null), d = n.match && n.match.matchingString;
  $(() => {
    c(0);
  }, [d]);
  const m = ie((v) => {
    e.update(() => {
      const y = n.match != null && o ? function(x) {
        const _ = B();
        if (!U(_) || !_.isCollapsed()) return null;
        const w = _.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const T = w.offset, k = C.getTextContent().slice(0, T), N = x.replaceableString.length, I = T - function(M, F, z) {
          let j = z;
          for (let P = j; P <= F.length; P++) M.substr(-P) === F.substr(0, P) && (j = P);
          return j;
        }(k, x.matchingString, N);
        if (I < 0) return null;
        let D;
        return I === 0 ? [D] = C.splitText(T) : [, D] = C.splitText(I, T), D;
      }(n.match) : null;
      s(v, y, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ie((v) => {
    const y = e.getRootElement();
    y !== null && (y.setAttribute("aria-activedescendant", "typeahead-item-" + v), c(v));
  }, [e]);
  return $(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), o2(() => {
    a === null ? c(null) : u === null && g(0);
  }, [a, u, g]), $(() => Re(e.registerCommand(Tu, ({ option: v }) => !(!v.ref || v.ref.current == null) && (Nu(v.ref.current), !0), l)), [e, g, l]), $(() => Re(e.registerCommand(mn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== a.length - 1 ? u + 1 : 0;
      g(x);
      const _ = a[x];
      _.ref != null && _.ref.current && e.dispatchCommand(Tu, { index: x, option: _ }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(fn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== 0 ? u - 1 : a.length - 1;
      g(x);
      const _ = a[x];
      _.ref != null && _.ref.current && Nu(_.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Dn, (v) => {
    const y = v;
    return y.preventDefault(), y.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(Si, (v) => {
    const y = v;
    return a !== null && u !== null && a[u] != null && (y.preventDefault(), y.stopImmediatePropagation(), m(a[u]), !0);
  }, l), e.registerCommand(co, (v) => a !== null && u !== null && a[u] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[u]), !0), l)), [m, r, e, a, u, g, l]), i(t, it(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: u, setHighlightedIndex: c }), [m, u, a]), n.match ? n.match.matchingString : "");
}
function d2({ options: r, nodeKey: e, onClose: t, onOpen: n, onSelectOption: a, menuRenderFn: i, anchorClassName: s, commandPriority: o = ye, parent: l }) {
  const [u] = oe(), [c, d] = H(null), m = function(x, _, w, C = document.body, T = !0) {
    const [k] = oe(), N = Oe(document.createElement("div")), I = ie(() => {
      N.current.style.top = N.current.style.bottom;
      const M = k.getRootElement(), F = N.current, z = F.firstChild;
      if (M !== null && x !== null) {
        const { left: j, top: P, width: X, height: Y } = x.getRect(), ee = N.current.offsetHeight;
        if (F.style.top = `${P + ee + 3 + (T ? window.pageYOffset : 0)}px`, F.style.left = `${j + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${X}px`, z !== null) {
          z.style.top = `${P}`;
          const ce = z.getBoundingClientRect(), J = ce.height, de = ce.width, le = M.getBoundingClientRect();
          j + de > le.right && (F.style.left = `${le.right - de + window.pageXOffset}px`), (P + J > window.innerHeight || P + J > le.bottom) && P - le.top > J + Y && (F.style.top = `${P - J - Y + (T ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), N.current = F, M.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, T, w, C]);
    $(() => {
      const M = k.getRootElement();
      if (x !== null) return I(), () => {
        M !== null && M.removeAttribute("aria-controls");
        const F = N.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, I, x]);
    const D = ie((M) => {
      x !== null && (M || _(null));
    }, [x, _]);
    return u2(x, N.current, I, D), N;
  }(c, d, s, l), g = ie(() => {
    d(null), t != null && c !== null && t();
  }, [t, c]), v = ie((x) => {
    d(x), n != null && c === null && n(x);
  }, [n, c]), y = ie(() => {
    e ? u.update(() => {
      const x = At(e), _ = u.getElementByKey(e);
      var w;
      x != null && _ != null && c == null && (w = () => v({ getRect: () => _.getBoundingClientRect() }), ku in en ? en[ku](w) : w());
    }) : e == null && c != null && g();
  }, [g, u, e, v, c]);
  return $(() => {
    y();
  }, [y, e]), $(() => {
    if (e != null) return u.registerUpdateListener(({ dirtyElements: x }) => {
      x.get(e) && y();
    });
  }, [u, y, e]), c === null || u === null ? null : p.jsx(c2, { close: g, resolution: c, editor: u, anchorElementRef: m, options: r, menuRenderFn: i, onSelectOption: a, commandPriority: o });
}
const h2 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, b0 = Ue("INSERT_EMBED_COMMAND");
let Au = class extends l2 {
  constructor(e, t) {
    super(e), this.title = e, this.onSelect = t.onSelect.bind(this);
  }
};
function m2({ embedConfigs: r, onOpenEmbedModalForConfig: e, getMenuOptions: t, menuRenderFn: n, menuCommandPriority: a = ye }) {
  const [i] = oe(), [s, o] = H(null), [l, u] = H(null), c = ie(() => {
    o(null), u(null);
  }, []), d = ie(async (y) => {
    const x = i.getEditorState().read(function() {
      const _ = At(y);
      if (lt(_)) return _.getURL();
    });
    if (x !== void 0) for (const _ of r)
      await Promise.resolve(_.parseUrl(x)) != null && (u(_), o(y));
  }, [i, r]);
  $(() => Re(...[In, Sa].map((y) => i.registerMutationListener(y, (...x) => ((_, { updateTags: w, dirtyLeaves: C }) => {
    for (const [T, k] of _) k === "created" && w.has("paste") && C.size <= 3 ? d(T) : T === s && c();
  })(...x), { skipInitialization: !0 }))), [d, i, r, s, c]), $(() => i.registerCommand(b0, (y) => {
    const x = r.find(({ type: _ }) => _ === y);
    return !!x && (e(x), !0);
  }, be), [i, r, e]);
  const m = ie(async function() {
    if (l != null && s != null) {
      const y = i.getEditorState().read(() => {
        const x = At(s);
        return lt(x) ? x : null;
      });
      if (lt(y)) {
        const x = await Promise.resolve(l.parseUrl(y.__url));
        x != null && i.update(() => {
          B() || y.selectEnd(), l.insertNode(i, x), y.isAttached() && y.remove();
        });
      }
    }
  }, [l, i, s]), g = it(() => l != null && s != null ? t(l, m, c) : [], [l, m, t, s, c]), v = ie((y, x, _) => {
    i.update(() => {
      y.onSelect(x), _();
    });
  }, [i]);
  return s != null ? p.jsx(d2, { nodeKey: s, onClose: c, onSelectOption: v, options: g, menuRenderFn: n, commandPriority: a }) : null;
}
const Sh = Ue(
  "INSERT_FIGMA_COMMAND"
);
function f2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([Aa]))
      throw new Error("FigmaPlugin: FigmaNode not registered on editor");
    return r.registerCommand(
      Sh,
      (e) => {
        const t = nd(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const Ch = Ue(
  "INSERT_TWEET_COMMAND"
);
function p2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([Ma]))
      throw new Error("TwitterPlugin: TweetNode not registered on editor");
    return r.registerCommand(
      Ch,
      (e) => {
        const t = zo(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const kh = Ue(
  "INSERT_YOUTUBE_COMMAND"
);
function g2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([Oa]))
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    return r.registerCommand(
      kh,
      (e) => {
        const t = Po(e);
        return qr(t), !0;
      },
      be
    );
  }, [r]), null;
}
const v2 = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon youtube" }),
  insertNode: (r, e) => {
    r.dispatchCommand(kh, e.id);
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
}, b2 = {
  // e.g. Tweet or Google Map.
  contentName: "Tweet",
  exampleUrl: "https://twitter.com/jack/status/20",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon tweet" }),
  // Create the Lexical embed node from the url data.
  insertNode: (r, e) => {
    r.dispatchCommand(Ch, e.id);
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
}, y2 = {
  contentName: "Figma Document",
  exampleUrl: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon figma" }),
  insertNode: (r, e) => {
    r.dispatchCommand(Sh, e.id);
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
}, y0 = [
  b2,
  v2,
  y2
];
function x2({
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
function w2({
  options: r,
  selectedItemIndex: e,
  onOptionClick: t,
  onOptionMouseEnter: n
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover", children: /* @__PURE__ */ p.jsx("ul", { children: r.map((a, i) => /* @__PURE__ */ p.jsx(
    x2,
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
const _2 = (r, e) => {
  let t;
  return (n) => {
    window.clearTimeout(t), t = window.setTimeout(() => {
      r(n);
    }, e);
  };
};
function S2({
  embedConfig: r,
  onClose: e
}) {
  const [t, n] = H(""), [a] = oe(), [i, s] = H(null), o = it(
    () => _2((u) => {
      const c = h2.exec(u);
      r != null && u != null && c != null ? Promise.resolve(r.parseUrl(u)).then(
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
        onChange: (u) => {
          const { value: c } = u.target;
          n(c), o(c);
        }
      }
    ) }),
    /* @__PURE__ */ p.jsx(Wn, { children: /* @__PURE__ */ p.jsx(
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
function C2() {
  const [r, e] = Fi(), t = (a) => {
    e(`Embed ${a.contentName}`, (i) => /* @__PURE__ */ p.jsx(S2, { embedConfig: a, onClose: i }));
  }, n = (a, i, s) => [
    new Au("Dismiss", {
      onSelect: s
    }),
    new Au(`Embed ${a.contentName}`, {
      onSelect: i
    })
  ];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    r,
    /* @__PURE__ */ p.jsx(
      m2,
      {
        embedConfigs: y0,
        onOpenEmbedModalForConfig: t,
        getMenuOptions: n,
        menuRenderFn: (a, { selectedIndex: i, options: s, selectOptionAndCleanUp: o, setHighlightedIndex: l }) => a.current ? ua.createPortal(
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "typeahead-popover auto-embed-menu",
              style: {
                marginLeft: a.current.style.width,
                width: 200
              },
              children: /* @__PURE__ */ p.jsx(
                w2,
                {
                  options: s,
                  selectedItemIndex: i,
                  onOptionClick: (u, c) => {
                    l(c), o(u);
                  },
                  onOptionMouseEnter: (u) => {
                    l(u);
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
const Qs = {
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
}, k2 = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"]
], N2 = [
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
], Xn = {
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
function qt(r) {
  return r ? "active dropdown-item-active" : "";
}
function E2({
  editor: r,
  blockType: e,
  disabled: t = !1
}) {
  const n = () => {
    r.update(() => {
      const u = B();
      Zr(u, () => xe());
    });
  }, a = (u) => {
    e !== u && r.update(() => {
      const c = B();
      Zr(c, () => Qr(u));
    });
  }, i = () => {
    e !== "bullet" ? r.dispatchCommand(bo, void 0) : n();
  }, s = () => {
    e !== "check" ? r.dispatchCommand(xo, void 0) : n();
  }, o = () => {
    e !== "number" ? r.dispatchCommand(yo, void 0) : n();
  }, l = () => {
    e !== "quote" && r.update(() => {
      const u = B();
      Zr(u, () => ki());
    });
  };
  return /* @__PURE__ */ p.jsxs(
    cn,
    {
      disabled: t,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + e,
      buttonLabel: Qs[e],
      buttonAriaLabel: "Formatting options for text style",
      children: [
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "paragraph"),
            onClick: n,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon paragraph" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Normal" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "h1"),
            onClick: () => a("h1"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h1" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 1" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "h2"),
            onClick: () => a("h2"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h2" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 2" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "h3"),
            onClick: () => a("h3"),
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon h3" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Heading 3" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "bullet"),
            onClick: i,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon bullet-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Bullet List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "number"),
            onClick: o,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon numbered-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Numbered List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "check"),
            onClick: s,
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon check-list" }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Check List" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            className: "item " + qt(e === "quote"),
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
function T2({
  editor: r,
  value: e,
  style: t,
  disabled: n = !1
}) {
  const a = ie(
    (s) => {
      r.update(() => {
        const o = B();
        o !== null && (oa(o) ? o.getNodes()[0].patchStyle({ [t]: s }) : mo(o, {
          [t]: s
        }));
      });
    },
    [r, t]
  ), i = t === "font-family" ? "Formatting options for font family" : "Formatting options for font size";
  return /* @__PURE__ */ p.jsx(
    cn,
    {
      disabled: n,
      buttonClassName: "toolbar-item " + t,
      buttonLabel: e,
      buttonIconClassName: t === "font-family" ? "icon block-type font-family" : "",
      buttonAriaLabel: i,
      children: (t === "font-family" ? k2 : N2).map(
        ([s, o]) => /* @__PURE__ */ p.jsx(
          Ae,
          {
            className: `item ${qt(e === s)} ${t === "font-size" ? "fontsize-item" : ""}`,
            onClick: () => a(s),
            children: /* @__PURE__ */ p.jsx("span", { className: "text", children: o })
          },
          s
        )
      )
    }
  );
}
function Xr() {
  return /* @__PURE__ */ p.jsx("div", { className: "divider" });
}
function A2({
  editor: r,
  value: e,
  isRTL: t,
  disabled: n = !1
}) {
  const a = Xn[e || "left"];
  return /* @__PURE__ */ p.jsxs(
    cn,
    {
      disabled: n,
      buttonLabel: a.name,
      buttonIconClassName: `icon ${t ? a.iconRTL : a.icon}`,
      buttonClassName: "toolbar-item spaced alignment",
      buttonAriaLabel: "Formatting options for text alignment",
      children: [
        /* @__PURE__ */ p.jsxs(
          Ae,
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
          Ae,
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
          Ae,
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
          Ae,
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
          Ae,
          {
            onClick: () => {
              r.dispatchCommand(er, "start");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx(
                "i",
                {
                  className: `icon ${t ? Xn.start.iconRTL : Xn.start.icon}`
                }
              ),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Start Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            onClick: () => {
              r.dispatchCommand(er, "end");
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx(
                "i",
                {
                  className: `icon ${t ? Xn.end.iconRTL : Xn.end.icon}`
                }
              ),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "End Align" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsx(Xr, {}),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            onClick: () => {
              r.dispatchCommand(oi, void 0);
            },
            className: "item",
            children: [
              /* @__PURE__ */ p.jsx("i", { className: "icon " + (t ? "indent" : "outdent") }),
              /* @__PURE__ */ p.jsx("span", { className: "text", children: "Outdent" })
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            onClick: () => {
              r.dispatchCommand(_i, void 0);
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
function M2({ setIsLinkEditMode: r }) {
  const [e] = oe(), [t, n] = H("paragraph"), [a, i] = H(e), [s, o] = H("15px"), [l, u] = H("#000"), [c, d] = H("#fff"), [m, g] = H("Arial"), [v, y] = H("left"), [x, _] = H(!1), [w, C] = H(!1), [T, k] = H(!1), [N, I] = H(!1), [D, M] = H(!1), [F, z] = H(!1), [j, P] = H(!1), [X, Y] = H(!1), [ee, ce] = H(!1), [J, de] = H(!1), [le, Ne] = H(!1), [se, Pe] = H(() => e.isEditable()), [Be, je] = Fi(), dt = ie(() => {
    const te = B();
    if (te && oa(te)) {
      const we = te.getNodes()[0];
      C(we.hasFormat("bold")), k(we.hasFormat("italic")), I(we.hasFormat("underline")), M(we.hasFormat("strikethrough")), z(we.hasFormat("subscript")), P(we.hasFormat("superscript")), Y(we.hasFormat("code")), o(we.getStyleValue("font-size", "15px")), u(we.getStyleValue("color", "#000")), d(we.getStyleValue("background-color", "#fff")), g(we.getStyleValue("font-family", "Arial"));
    } else if (U(te)) {
      const we = te.anchor.getNode();
      let We = we.getKey() === "root" ? we : he(we, (jt) => {
        const vn = jt.getParent();
        return vn !== null && zt(vn);
      });
      We === null && (We = we.getTopLevelElementOrThrow());
      const _t = We.getKey(), tt = a.getElementByKey(_t);
      C(te.hasFormat("bold")), k(te.hasFormat("italic")), I(te.hasFormat("underline")), M(te.hasFormat("strikethrough")), z(te.hasFormat("subscript")), P(te.hasFormat("superscript")), Y(te.hasFormat("code")), ce(xc(te));
      const ht = On(te), $e = ht.getParent();
      if (lt($e) || lt(ht) ? _(!0) : _(!1), tt !== null)
        if (ke(We)) {
          const jt = Sc(
            we,
            ka
          ), vn = jt ? jt.getListType() : We.getListType();
          n(vn);
        } else {
          const jt = ml(We) ? We.getTag() : We.getType();
          jt in Qs && n(jt);
        }
      o(
        Pa(te, "font-size", "15px")
      ), u(
        Pa(te, "color", "#000")
      ), d(
        Pa(
          te,
          "background-color",
          "#fff"
        )
      ), g(
        Pa(te, "font-family", "Arial")
      );
      let It;
      lt($e) && (It = he(
        ht,
        (jt) => pe(jt) && !jt.isInline()
      )), y(
        pe(It) ? It.getFormatType() : pe(ht) ? ht.getFormatType() : ($e == null ? void 0 : $e.getFormatType()) || "left"
      );
    }
  }, [a]);
  $(() => e.registerCommand(
    yr,
    (te, we) => (dt(), i(we), Pe(we.isEditable()), !1),
    pt
  ), [e, dt]), $(() => Re(
    e.registerEditableListener((te) => {
      Pe(te);
    }),
    a.registerUpdateListener(({ editorState: te }) => {
      te.read(() => {
        dt();
      });
    }),
    a.registerCommand(
      Qn,
      (te) => (de(te), !1),
      pt
    ),
    a.registerCommand(
      Zn,
      (te) => (Ne(te), !1),
      pt
    )
  ), [dt, a, e]), $(() => a.registerCommand(
    T1,
    (te) => {
      const we = te, { code: We, ctrlKey: _t, metaKey: tt } = we;
      if (We === "KeyK" && (_t || tt)) {
        we.preventDefault();
        let ht;
        return x ? (r(!1), ht = null) : (r(!0), ht = gi("https://")), a.dispatchCommand(ir, ht);
      }
      return !1;
    },
    A1
  ), [a, x, r]);
  const Je = ie(
    (te, we) => {
      a.update(
        () => {
          const We = B();
          We !== null && (oa(We) ? We.getNodes()[0].patchStyle(te) : mo(We, te));
        },
        we ? { tag: "historic" } : {}
      );
    },
    [a]
  ), Ge = ie(() => {
    a.update(() => {
      const te = B();
      if (te && oa(te))
        te.getNodes()[0].clearAllFormats();
      else if (U(te)) {
        const we = te.anchor, We = te.focus, _t = te.getNodes();
        if (we.key === We.key && we.offset === We.offset)
          return;
        _t.forEach((tt, ht) => {
          if (_e(tt)) {
            let $e = tt;
            ht === 0 && we.offset !== 0 && ($e = $e.splitText(we.offset)[1] || $e), ht === _t.length - 1 && ($e = $e.splitText(We.offset)[0] || $e), $e.__style !== "" && $e.setStyle(""), $e.__format !== 0 && ($e.setFormat(0), Ci($e).setFormat("")), tt = $e;
          } else ml(tt) || Um(tt) ? tt.replace(xe(), !0) : Ls(tt) && tt.setFormat("");
        });
      }
    });
  }, [a]), Rt = ie(
    (te, we) => {
      Je({ color: te }, we);
    },
    [Je]
  ), wt = ie(
    (te, we) => {
      Je({ "background-color": te }, we);
    },
    [Je]
  ), Qt = ie(() => {
    x ? (r(!1), e.dispatchCommand(ir, null)) : (r(!0), e.dispatchCommand(ir, gi("https://")));
  }, [e, x, r]);
  return /* @__PURE__ */ p.jsxs("div", { className: "toolbar", children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !J || !se,
        onClick: () => {
          a.dispatchCommand(fc, void 0);
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
        disabled: !le || !se,
        onClick: () => {
          a.dispatchCommand(mc, void 0);
        },
        title: Or ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Redo",
        children: /* @__PURE__ */ p.jsx("i", { className: "format redo" })
      }
    ),
    /* @__PURE__ */ p.jsx(Xr, {}),
    t in Qs && a === e && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        E2,
        {
          disabled: !se,
          blockType: t,
          editor: e
        }
      ),
      /* @__PURE__ */ p.jsx(Xr, {})
    ] }),
    /* @__PURE__ */ p.jsx(
      T2,
      {
        disabled: !se,
        editor: e,
        value: m,
        style: "font-family"
      }
    ),
    /* @__PURE__ */ p.jsx(Xr, {}),
    /* @__PURE__ */ p.jsx(yg, { selectionFontSize: s.slice(0, -2), editor: e, disabled: !se }),
    /* @__PURE__ */ p.jsx(Xr, {}),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !se,
        onClick: () => {
          a.dispatchCommand(bt, "bold");
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
        disabled: !se,
        onClick: () => {
          a.dispatchCommand(bt, "italic");
        },
        className: "toolbar-item spaced " + (T ? "active" : ""),
        title: Or ? "Italic (⌘I)" : "Italic (Ctrl+I)",
        type: "button",
        "aria-label": `Format text as italics. Shortcut: ${Or ? "⌘I" : "Ctrl+I"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !se,
        onClick: () => {
          a.dispatchCommand(bt, "underline");
        },
        className: "toolbar-item spaced " + (N ? "active" : ""),
        title: Or ? "Underline (⌘U)" : "Underline (Ctrl+U)",
        type: "button",
        "aria-label": `Format text to underlined. Shortcut: ${Or ? "⌘U" : "Ctrl+U"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !se,
        onClick: () => {
          a.dispatchCommand(bt, "code");
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
        disabled: !se,
        onClick: Qt,
        className: "toolbar-item spaced " + (x ? "active" : ""),
        "aria-label": "Insert link",
        title: "Insert link",
        type: "button",
        children: /* @__PURE__ */ p.jsx("i", { className: "format link" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      Su,
      {
        disabled: !se,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting text color",
        buttonIconClassName: "icon font-color",
        color: l,
        onChange: Rt,
        title: "text color"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Su,
      {
        disabled: !se,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting background color",
        buttonIconClassName: "icon bg-color",
        color: c,
        onChange: wt,
        title: "bg color"
      }
    ),
    /* @__PURE__ */ p.jsxs(
      cn,
      {
        disabled: !se,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "",
        buttonAriaLabel: "Formatting options for additional text styles",
        buttonIconClassName: "icon dropdown-more",
        children: [
          /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  bt,
                  "strikethrough"
                );
              },
              className: "item " + qt(D),
              title: "Strikethrough",
              "aria-label": "Format text with a strikethrough",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon strikethrough" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Strikethrough" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(bt, "subscript");
              },
              className: "item " + qt(F),
              title: "Subscript",
              "aria-label": "Format text with a subscript",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon subscript" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Subscript" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  bt,
                  "superscript"
                );
              },
              className: "item " + qt(j),
              title: "Superscript",
              "aria-label": "Format text with a superscript",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon superscript" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Superscript" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Ae,
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
    /* @__PURE__ */ p.jsx(Xr, {}),
    /* @__PURE__ */ p.jsxs(
      cn,
      {
        disabled: !se,
        buttonClassName: "toolbar-item spaced",
        buttonLabel: "Insert",
        buttonAriaLabel: "Insert specialized editor node",
        buttonIconClassName: "icon plus",
        children: [
          /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  Co,
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
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(h0, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon page-break" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Page Break" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                je("Insert Image", (te) => /* @__PURE__ */ p.jsx(
                  dh,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                je("Insert Inline Image", (te) => /* @__PURE__ */ p.jsx(
                  qg,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  g0,
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
            Ae,
            {
              onClick: () => {
                je("Insert Table", (te) => /* @__PURE__ */ p.jsx(
                  gh,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                je("Insert Poll", (te) => /* @__PURE__ */ p.jsx(
                  bh,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                je("Insert Columns Layout", (te) => /* @__PURE__ */ p.jsx(
                  xh,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                je("Insert Equation", (te) => /* @__PURE__ */ p.jsx(
                  _h,
                  {
                    activeEditor: a,
                    onClose: te
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
            Ae,
            {
              onClick: () => {
                e.update(() => {
                  const te = Ot(), we = A4(0, 0);
                  te.append(we);
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
            Ae,
            {
              onClick: () => {
                e.dispatchCommand(v0, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Collapsible container" })
              ]
            }
          ),
          y0.map((te) => /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  b0,
                  te.type
                );
              },
              className: "item",
              children: [
                te.icon,
                /* @__PURE__ */ p.jsx("span", { className: "text", children: te.contentName })
              ]
            },
            te.type
          ))
        ]
      }
    ),
    /* @__PURE__ */ p.jsx(Xr, {}),
    /* @__PURE__ */ p.jsx(
      A2,
      {
        disabled: !se,
        value: v,
        editor: e,
        isRTL: ee
      }
    ),
    Be
  ] });
}
function O2() {
  const [r] = oe();
  return $(() => {
    if (!r.hasNodes([ka, Ca])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [r]), function(e) {
    $(() => xm(e), [e]);
  }(r), null;
}
function D2() {
  const [r] = oe();
  return $(() => Re(r.registerCommand(xo, () => (As(r, "check"), !0), ye), r.registerCommand(mn, (e) => Du(e, r, !1), ye), r.registerCommand(fn, (e) => Du(e, r, !0), ye), r.registerCommand(Dn, (e) => {
    if (eo() != null) {
      const t = r.getRootElement();
      return t != null && t.focus(), !0;
    }
    return !1;
  }, ye), r.registerCommand(M1, (e) => {
    const t = eo();
    return !(t == null || !r.isEditable()) && (r.update(() => {
      const n = Qe(t);
      Fe(n) && (e.preventDefault(), n.toggleChecked());
    }), !0);
  }, ye), r.registerCommand(wa, (e) => r.getEditorState().read(() => {
    const t = B();
    if (U(t) && t.isCollapsed()) {
      const { anchor: n } = t, a = n.type === "element";
      if (a || n.offset === 0) {
        const i = n.getNode(), s = he(i, (o) => pe(o) && !o.isInline());
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
    e !== null && (e.addEventListener("click", Mu), e.addEventListener("pointerdown", Ou)), t !== null && (t.removeEventListener("click", Mu), t.removeEventListener("pointerdown", Ou));
  }))), null;
}
function Nh(r, e) {
  const t = r.target;
  if (t === null || !Cr(t)) return;
  const n = t.firstChild;
  if (n != null && Cr(n) && (n.tagName === "UL" || n.tagName === "OL")) return;
  const a = t.parentNode;
  if (!a || a.__lexicalListType !== "check") return;
  const i = t.getBoundingClientRect(), s = r.pageX / ks(t);
  (t.dir === "rtl" ? s < i.right && s > i.right - 20 : s > i.left && s < i.left + 20) && e();
}
function Mu(r) {
  Nh(r, () => {
    if (r.target instanceof HTMLElement) {
      const e = r.target, t = O1(e);
      t != null && t.isEditable() && t.update(() => {
        const n = Qe(e);
        Fe(n) && (e.focus(), n.toggleChecked());
      });
    }
  });
}
function Ou(r) {
  Nh(r, () => {
    r.preventDefault();
  });
}
function eo() {
  const r = document.activeElement;
  return r != null && r.tagName === "LI" && r.parentNode != null && r.parentNode.__lexicalListType === "check" ? r : null;
}
function Du(r, e, t) {
  const n = eo();
  return n != null && e.update(() => {
    const a = Qe(n);
    if (!Fe(a)) return;
    const i = function(s, o) {
      let l = o ? s.getPreviousSibling() : s.getNextSibling(), u = s;
      for (; l == null && Fe(u); ) u = u.getParentOrThrow().getParent(), u != null && (l = o ? u.getPreviousSibling() : u.getNextSibling());
      for (; Fe(l); ) {
        const c = o ? l.getLastChild() : l.getFirstChild();
        if (!ke(c)) return l;
        l = o ? c.getLastChild() : c.getFirstChild();
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
function R2(r) {
  const e = r.getNodes();
  return e.length === 0 ? /* @__PURE__ */ new Set([
    r.anchor.getNode().getParentOrThrow(),
    r.focus.getNode().getParentOrThrow()
  ]) : new Set(
    e.map((t) => pe(t) ? t : t.getParentOrThrow())
  );
}
function I2(r) {
  const e = B();
  if (!U(e))
    return !1;
  const t = R2(e);
  let n = 0;
  for (const a of t)
    if (ke(a))
      n = Math.max(Es(a) + 1, n);
    else if (Fe(a)) {
      const i = a.getParent();
      if (!ke(i))
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      n = Math.max(Es(i) + 1, n);
    }
  return n <= r;
}
function F2({ maxDepth: r }) {
  const [e] = oe();
  return $(() => e.registerCommand(
    _i,
    () => !I2(r ?? 7),
    pt
  ), [e, r]), null;
}
const L2 = 1, z2 = 100;
let Eh = 0, Ru = !1;
function P2() {
  window.addEventListener(
    "keydown",
    (r) => {
      r.key === "Tab" && (Eh = r.timeStamp);
    },
    !0
  );
}
function B2() {
  const [r] = oe();
  return $(() => (Ru || (P2(), Ru = !0), r.registerCommand(
    hc,
    (e) => {
      const t = B();
      return U(t) && Eh + z2 > e.timeStamp && yt(t.clone()), !1;
    },
    L2
  )), [r]), null;
}
const j2 = 10, $2 = 5;
function Iu(r, e, t, n = j2, a = $2) {
  const i = t.parentElement;
  if (r === null || !i) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const s = e.getBoundingClientRect(), o = t.getBoundingClientRect(), l = i.getBoundingClientRect();
  let u = r.top - n, c = r.left - a;
  u < l.top && (u += s.height + r.height + n * 2), c + s.width > l.right && (c = l.right - s.width - a), u -= o.top, c -= o.left, e.style.opacity = "1", e.style.transform = `translate(${c}px, ${u}px)`;
}
function q2({
  editor: r,
  isLink: e,
  setIsLink: t,
  anchorElem: n,
  isLinkEditMode: a,
  setIsLinkEditMode: i
}) {
  const s = Oe(null), o = Oe(null), [l, u] = H(""), [c, d] = H("https://"), [m, g] = H(
    null
  ), v = ie(() => {
    var N, I;
    const _ = B();
    if (U(_)) {
      const D = On(_), M = he(D, lt);
      M ? u(M.getURL()) : lt(D) ? u(D.getURL()) : u(""), a && d(l);
    }
    const w = s.current, C = window.getSelection(), T = document.activeElement;
    if (w === null)
      return;
    const k = r.getRootElement();
    if (_ !== null && C !== null && k !== null && k.contains(C.anchorNode) && r.isEditable()) {
      const D = (I = (N = C.focusNode) == null ? void 0 : N.parentElement) == null ? void 0 : I.getBoundingClientRect();
      D && (D.y += 40, Iu(D, w, n)), g(_);
    } else (!T || T.className !== "link-input") && (k !== null && Iu(null, w, n), g(null), i(!1), u(""));
    return !0;
  }, [n, r, i, a, l]);
  $(() => {
    const _ = n.parentElement, w = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", w), _ && _.addEventListener("scroll", w), () => {
      window.removeEventListener("resize", w), _ && _.removeEventListener("scroll", w);
    };
  }, [n.parentElement, r, v]), $(() => Re(
    r.registerUpdateListener(({ editorState: _ }) => {
      _.read(() => {
        v();
      });
    }),
    r.registerCommand(
      yr,
      () => (v(), !0),
      ye
    ),
    r.registerCommand(
      Dn,
      () => e ? (t(!1), !0) : !1,
      Lt
    )
  ), [r, v, t, e]), $(() => {
    r.getEditorState().read(() => {
      v();
    });
  }, [r, v]), $(() => {
    a && o.current && o.current.focus();
  }, [a, e]);
  const y = (_) => {
    _.key === "Enter" ? (_.preventDefault(), x()) : _.key === "Escape" && (_.preventDefault(), i(!1));
  }, x = () => {
    m !== null && (l !== "" && (r.dispatchCommand(ir, gi(c)), r.update(() => {
      const _ = B();
      if (U(_)) {
        const w = On(_).getParent();
        if (vr(w)) {
          const C = ca(w.getURL(), {
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
        value: c,
        onChange: (_) => {
          d(_.target.value);
        },
        onKeyDown: (_) => {
          y(_);
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
          onMouseDown: (_) => _.preventDefault(),
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
          onMouseDown: (_) => _.preventDefault(),
          onClick: x
        }
      )
    ] })
  ] }) : /* @__PURE__ */ p.jsxs("div", { className: "link-view", children: [
    /* @__PURE__ */ p.jsx(
      "a",
      {
        href: gi(l),
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
        onMouseDown: (_) => _.preventDefault(),
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
        onMouseDown: (_) => _.preventDefault(),
        onClick: () => {
          r.dispatchCommand(ir, null);
        }
      }
    )
  ] }) : null });
}
function H2(r, e, t, n) {
  const [a, i] = H(r), [s, o] = H(!1);
  return $(() => {
    function l() {
      const u = B();
      if (U(u)) {
        const c = On(u), d = he(c, lt), m = he(
          c,
          vr
        );
        if (!(d || m)) {
          o(!1);
          return;
        }
        const g = u.getNodes().find((v) => {
          const y = he(v, lt), x = he(v, vr);
          if (!(y != null && y.is(d)) && !(x != null && x.is(m)) && !y && !x && !ga(v))
            return v;
        });
        o(!g);
      }
    }
    return Re(
      r.registerUpdateListener(({ editorState: u }) => {
        u.read(() => {
          l();
        });
      }),
      r.registerCommand(
        yr,
        (u, c) => (l(), i(c), !1),
        pt
      ),
      r.registerCommand(
        ya,
        (u) => {
          const c = B();
          if (U(c)) {
            const d = On(c), m = he(d, lt);
            if (lt(m) && (u.metaKey || u.ctrlKey))
              return window.open(m.getURL(), "_blank"), !0;
          }
          return !1;
        },
        ye
      )
    );
  }, [r]), Zt(
    /* @__PURE__ */ p.jsx(
      q2,
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
function U2({
  anchorElem: r = document.body,
  isLinkEditMode: e,
  setIsLinkEditMode: t
}) {
  const [n] = oe();
  return H2(
    n,
    r,
    e,
    t
  );
}
function W2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var K2 = W2(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function Fu(r, e = (t) => t) {
  return (t) => {
    const n = r.exec(t);
    return n === null ? null : { index: n.index, length: n[0].length, text: n[0], url: e(n[0]) };
  };
}
function Th(r, e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t](r);
    if (n) return n;
  }
  return null;
}
const G2 = /[.,;\s]/;
function vi(r) {
  return G2.test(r);
}
function Ah(r) {
  return vi(r[r.length - 1]);
}
function to(r) {
  return vi(r[0]);
}
function Mh(r) {
  let e = r.getPreviousSibling();
  return pe(e) && (e = e.getLastDescendant()), e === null || ga(e) || _e(e) && Ah(e.getTextContent());
}
function Oh(r) {
  let e = r.getNextSibling();
  return pe(e) && (e = e.getFirstDescendant()), e === null || ga(e) || _e(e) && to(e.getTextContent());
}
function Y2(r, e, t, n) {
  return (r > 0 ? vi(t[r - 1]) : Mh(n[0])) ? e < t.length ? vi(t[e]) : Oh(n[n.length - 1]) : !1;
}
function V2(r, e, t) {
  const n = [], a = [], i = [];
  let s = 0, o = 0;
  const l = [...r];
  for (; l.length > 0; ) {
    const u = l[0], c = u.getTextContent().length, d = o;
    o + c <= e ? (n.push(u), s += c) : d >= t ? i.push(u) : a.push(u), o += c, l.shift();
  }
  return [s, n, a, i];
}
function X2(r, e, t, n) {
  const a = Ns(n.url, n.attributes);
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
    let u;
    for (let g = 1; g < r.length; g++) {
      const v = r[g], y = v.getTextContent().length, x = o;
      if (x < t) if (o + y <= t) l.push(v);
      else {
        const [_, w] = v.splitText(t - x);
        l.push(_), u = w;
      }
      o += y;
    }
    const c = B(), d = c ? c.getNodes().find(_e) : void 0, m = Ir(s.getTextContent());
    return m.setFormat(s.getFormat()), m.setDetail(s.getDetail()), m.setStyle(s.getStyle()), a.append(m, ...l), d && d === s && (U(c) ? m.select(c.anchor.offset, c.focus.offset) : gt(c) && m.select(0, m.getTextContent().length)), s.replace(a), u;
  }
}
function ps(r, e, t) {
  const n = r.getChildren(), a = n.length;
  for (let l = 0; l < a; l++) {
    const u = n[l];
    if (!_e(u) || !u.isSimpleText()) return ni(r), void t(null, r.getURL());
  }
  const i = r.getTextContent(), s = Th(i, e);
  if (s === null || s.text !== i || !Mh(r) || !Oh(r)) return ni(r), void t(null, r.getURL());
  const o = r.getURL();
  if (o !== s.url && (r.setURL(s.url), t(s.url, o)), s.attributes) {
    const l = r.getRel();
    l !== s.attributes.rel && (r.setRel(s.attributes.rel || null), t(s.attributes.rel || null, l));
    const u = r.getTarget();
    u !== s.attributes.target && (r.setTarget(s.attributes.target || null), t(s.attributes.target || null, u));
  }
}
function ni(r) {
  const e = r.getChildren();
  for (let t = e.length - 1; t >= 0; t--) r.insertAfter(e[t]);
  return r.remove(), e.map((t) => t.getLatest());
}
function J2(r, e, t) {
  $(() => {
    r.hasNodes([Sa]) || K2(77);
    const n = (a, i) => {
      t && t(a, i);
    };
    return Re(r.registerNodeTransform(hn, (a) => {
      const i = a.getParentOrThrow(), s = a.getPreviousSibling();
      if (vr(i) && !i.getIsUnlinked()) ps(i, e, n);
      else if (!lt(i)) {
        if (a.isSimpleText() && (to(a.getTextContent()) || !vr(s))) {
          const o = function(l) {
            const u = [l];
            let c = l.getNextSibling();
            for (; c !== null && _e(c) && c.isSimpleText() && (u.push(c), !/[\s]/.test(c.getTextContent())); ) c = c.getNextSibling();
            return u;
          }(a);
          (function(l, u, c) {
            let d = [...l];
            const m = d.map((x) => x.getTextContent()).join("");
            let g, v = m, y = 0;
            for (; (g = Th(v, u)) && g !== null; ) {
              const x = g.index, _ = x + g.length;
              if (Y2(y + x, y + _, m, d)) {
                const [w, , C, T] = V2(d, y + x, y + _), k = X2(C, y + x - w, y + _ - w, g);
                d = k ? [k, ...T] : T, c(g.url, null), y = 0;
              } else y += _;
              v = v.substring(_);
            }
          })(o, e, n);
        }
        (function(o, l, u) {
          const c = o.getPreviousSibling(), d = o.getNextSibling(), m = o.getTextContent();
          var g;
          !vr(c) || c.getIsUnlinked() || to(m) && (g = m, !(c.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(g) : /^\.[a-zA-Z0-9]{1,}/.test(g))) || (c.append(o), ps(c, l, u), u(null, c.getURL())), !vr(d) || d.getIsUnlinked() || Ah(m) || (ni(d), ps(d, l, u), u(null, d.getURL()));
        })(a, e, n);
      }
    }), r.registerCommand(ir, (a) => {
      const i = B();
      return a !== null || !U(i) || i.extract().forEach((s) => {
        const o = s.getParent();
        if (vr(o)) return o.setIsUnlinked(!o.getIsUnlinked()), o.markDirty(), !0;
      }), !1;
    }, ye));
  }, [r, e, t]);
}
function Z2({ matchers: r, onChange: e }) {
  const [t] = oe();
  return J2(t, r, e), null;
}
const Q2 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, e5 = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, t5 = [
  Fu(Q2, (r) => r.startsWith("http") ? r : `https://${r}`),
  Fu(e5, (r) => `mailto:${r}`)
];
function r5() {
  return /* @__PURE__ */ p.jsx(Z2, { matchers: t5 });
}
function n5({ validateUrl: r, attributes: e }) {
  const [t] = oe();
  return $(() => {
    if (!t.hasNodes([In])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return Re(t.registerCommand(ir, (n) => {
      if (n === null) return Wi(n), !0;
      if (typeof n == "string") return !(r !== void 0 && !r(n)) && (Wi(n, e), !0);
      {
        const { url: a, target: i, rel: s, title: o } = n;
        return Wi(a, { ...e, rel: s, target: i, title: o }), !0;
      }
    }, ye), r !== void 0 ? t.registerCommand(sc, (n) => {
      const a = B();
      if (!U(a) || a.isCollapsed() || !xr(n, ClipboardEvent)) return !1;
      const i = n;
      if (i.clipboardData === null) return !1;
      const s = i.clipboardData.getData("text");
      return !!r(s) && !a.getNodes().some((o) => pe(o)) && (t.dispatchCommand(ir, { ...e, url: s }), n.preventDefault(), !0);
    }, ye) : () => {
    });
  }, [t, r, e]), null;
}
function a5() {
  return /* @__PURE__ */ p.jsx(n5, { validateUrl: _g });
}
function i5(r, e, t) {
  const [n] = oe();
  $(() => Re(...G4(n, r, e, t)), [t, n, r, e]);
}
const s5 = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function o5() {
  const [r] = oe();
  $(() => {
    if (!r.hasNodes([Tn]))
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
  }, [r]);
  const e = ie((n) => rd(n.getTextContent()), []), t = ie((n) => {
    const a = s5.exec(n);
    if (a === null)
      return null;
    const i = a[2].length, s = a.index + a[1].length;
    return {
      end: s + i,
      start: s
    };
  }, []);
  return i5(
    t,
    Tn,
    e
  ), null;
}
const Lu = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]],
  ["🙂", ["emoji happysmile", "🙂"]],
  ["😀", ["emoji veryhappysmile", "😀"]],
  ["🙁", ["emoji unhappysmile", "🙁"]],
  ["❤", ["emoji heart", "❤"]]
]);
function l5(r) {
  const e = r.getTextContent();
  for (let t = 0; t < e.length; t++) {
    const n = Lu.get(e[t]) || Lu.get(e.slice(t, t + 2));
    if (n !== void 0) {
      const [a, i] = n;
      let s;
      t === 0 ? [s] = r.splitText(t + 2) : [, s] = r.splitText(t, t + 2);
      const o = td(a, i);
      return s.replace(o), o;
    }
  }
  return null;
}
function u5(r) {
  let e = r;
  for (; e !== null; ) {
    if (!e.isSimpleText())
      return;
    e = l5(e);
  }
}
function c5(r) {
  $(() => {
    if (!r.hasNodes([Ta]))
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    return r.registerNodeTransform(hn, u5);
  }, [r]);
}
function d5() {
  const [r] = oe();
  return c5(r), null;
}
const zu = "startTransition", h5 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
class x0 {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
}
const Pu = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function Bu(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function m5(r, e, t, n) {
  const [a] = oe();
  $(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(d, m) {
        let g = getComputedStyle(d);
        const v = g.position === "absolute", y = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = d; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && y.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = Bu(e, s);
      const u = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const d = Bu(e, s);
        d !== l && (l = d, n != null && n(d));
      }, c = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), c.observe(e), () => {
        c.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const ju = Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function f5({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ye }) {
  const [u, c] = H(null), d = n.match && n.match.matchingString;
  $(() => {
    c(0);
  }, [d]);
  const m = ie((v) => {
    e.update(() => {
      const y = n.match != null && o ? function(x) {
        const _ = B();
        if (!U(_) || !_.isCollapsed()) return null;
        const w = _.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const T = w.offset, k = C.getTextContent().slice(0, T), N = x.replaceableString.length, I = T - function(M, F, z) {
          let j = z;
          for (let P = j; P <= F.length; P++) M.substr(-P) === F.substr(0, P) && (j = P);
          return j;
        }(k, x.matchingString, N);
        if (I < 0) return null;
        let D;
        return I === 0 ? [D] = C.splitText(T) : [, D] = C.splitText(I, T), D;
      }(n.match) : null;
      s(v, y, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ie((v) => {
    const y = e.getRootElement();
    y !== null && (y.setAttribute("aria-activedescendant", "typeahead-item-" + v), c(v));
  }, [e]);
  return $(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), h5(() => {
    a === null ? c(null) : u === null && g(0);
  }, [a, u, g]), $(() => Re(e.registerCommand(ju, ({ option: v }) => !(!v.ref || v.ref.current == null) && (Pu(v.ref.current), !0), l)), [e, g, l]), $(() => Re(e.registerCommand(mn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== a.length - 1 ? u + 1 : 0;
      g(x);
      const _ = a[x];
      _.ref != null && _.ref.current && e.dispatchCommand(ju, { index: x, option: _ }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(fn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== 0 ? u - 1 : a.length - 1;
      g(x);
      const _ = a[x];
      _.ref != null && _.ref.current && Pu(_.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Dn, (v) => {
    const y = v;
    return y.preventDefault(), y.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(Si, (v) => {
    const y = v;
    return a !== null && u !== null && a[u] != null && (y.preventDefault(), y.stopImmediatePropagation(), m(a[u]), !0);
  }, l), e.registerCommand(co, (v) => a !== null && u !== null && a[u] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[u]), !0), l)), [m, r, e, a, u, g, l]), i(t, it(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: u, setHighlightedIndex: c }), [m, u, a]), n.match ? n.match.matchingString : "");
}
const p5 = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
Ue("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function w0(r, { minLength: e = 1, maxLength: t = 75 }) {
  return ie((n) => {
    const a = new RegExp("(^|\\s|\\()([" + r + "]((?:" + ("[^" + r + p5 + "\\s]") + "){0," + t + "}))$").exec(n);
    if (a !== null) {
      const i = a[1], s = a[3];
      if (s.length >= e) return { leadOffset: a.index + i.length, matchingString: s, replaceableString: a[2] };
    }
    return null;
  }, [t, e, r]);
}
function _0({ options: r, onQueryChange: e, onSelectOption: t, onOpen: n, onClose: a, menuRenderFn: i, triggerFn: s, anchorClassName: o, commandPriority: l = ye, parent: u }) {
  const [c] = oe(), [d, m] = H(null), g = function(x, _, w, C = document.body, T = !0) {
    const [k] = oe(), N = Oe(document.createElement("div")), I = ie(() => {
      N.current.style.top = N.current.style.bottom;
      const M = k.getRootElement(), F = N.current, z = F.firstChild;
      if (M !== null && x !== null) {
        const { left: j, top: P, width: X, height: Y } = x.getRect(), ee = N.current.offsetHeight;
        if (F.style.top = `${P + ee + 3 + (T ? window.pageYOffset : 0)}px`, F.style.left = `${j + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${X}px`, z !== null) {
          z.style.top = `${P}`;
          const ce = z.getBoundingClientRect(), J = ce.height, de = ce.width, le = M.getBoundingClientRect();
          j + de > le.right && (F.style.left = `${le.right - de + window.pageXOffset}px`), (P + J > window.innerHeight || P + J > le.bottom) && P - le.top > J + Y && (F.style.top = `${P - J - Y + (T ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), N.current = F, M.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, T, w, C]);
    $(() => {
      const M = k.getRootElement();
      if (x !== null) return I(), () => {
        M !== null && M.removeAttribute("aria-controls");
        const F = N.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, I, x]);
    const D = ie((M) => {
      x !== null && (M || _(null));
    }, [x, _]);
    return m5(x, N.current, I, D), N;
  }(d, m, o, u), v = ie(() => {
    m(null), a != null && d !== null && a();
  }, [a, d]), y = ie((x) => {
    m(x), n != null && d === null && n(x);
  }, [n, d]);
  return $(() => {
    const x = c.registerUpdateListener(() => {
      c.getEditorState().read(() => {
        const _ = c._window || window, w = _.document.createRange(), C = B(), T = function(I) {
          let D = null;
          return I.getEditorState().read(() => {
            const M = B();
            U(M) && (D = function(F) {
              const z = F.anchor;
              if (z.type !== "text") return null;
              const j = z.getNode();
              if (!j.isSimpleText()) return null;
              const P = z.offset;
              return j.getTextContent().slice(0, P);
            }(M));
          }), D;
        }(c);
        if (!U(C) || !C.isCollapsed() || T === null || w === null) return void v();
        const k = s(T, c);
        if (e(k ? k.matchingString : null), k !== null && !function(I, D) {
          return D === 0 && I.getEditorState().read(() => {
            const M = B();
            if (U(M)) {
              const F = M.anchor.getNode().getPreviousSibling();
              return _e(F) && F.isTextEntity();
            }
            return !1;
          });
        }(c, k.leadOffset) && function(D, M, F) {
          const z = F.getSelection();
          if (z === null || !z.isCollapsed) return !1;
          const j = z.anchorNode, P = D, X = z.anchorOffset;
          if (j == null || X == null) return !1;
          try {
            M.setStart(j, P), M.setEnd(j, X);
          } catch {
            return !1;
          }
          return !0;
        }(k.leadOffset, w, _) !== null)
          return N = () => y({ getRect: () => w.getBoundingClientRect(), match: k }), void (zu in en ? en[zu](N) : N());
        var N;
        v();
      });
    });
    return () => {
      x();
    };
  }, [c, s, e, d, v, y]), d === null || c === null ? null : p.jsx(f5, { close: v, resolution: d, editor: c, anchorElementRef: g, options: r, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: t, commandPriority: l });
}
class ot extends x0 {
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
function g5({
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
function v5(r, e) {
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
          onSelect: () => r.dispatchCommand(To, { columns: s, rows: a })
        })
      )
    );
  }
  return t;
}
function b5(r, e) {
  return [
    new ot("Paragraph", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => r.update(() => {
        const t = B();
        U(t) && Zr(t, () => xe());
      })
    }),
    ...[1, 2, 3].map(
      (t) => new ot(`Heading ${t}`, {
        icon: /* @__PURE__ */ p.jsx("i", { className: `icon h${t}` }),
        keywords: ["heading", "header", `h${t}`],
        onSelect: () => r.update(() => {
          const n = B();
          U(n) && Zr(n, () => Qr(`h${t}`));
        })
      })
    ),
    new ot("Table", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => e("Insert Table", (t) => /* @__PURE__ */ p.jsx(gh, { activeEditor: r, onClose: t }))
    }),
    new ot("Numbered List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => r.dispatchCommand(yo, void 0)
    }),
    new ot("Bulleted List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => r.dispatchCommand(bo, void 0)
    }),
    new ot("Check List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => r.dispatchCommand(xo, void 0)
    }),
    new ot("Quote", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => r.update(() => {
        const t = B();
        U(t) && Zr(t, () => ki());
      })
    }),
    new ot("Code", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => r.update(() => {
        const t = B();
        if (U(t))
          if (t.isCollapsed())
            Zr(t, () => tn());
          else {
            const n = t.getTextContent(), a = tn();
            t.insertNodes([a]), t.insertRawText(n);
          }
      })
    }),
    new ot("Divider", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => r.dispatchCommand(Co, void 0)
    }),
    new ot("Page Break", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon page-break" }),
      keywords: ["page break", "divider"],
      onSelect: () => r.dispatchCommand(h0, void 0)
    }),
    new ot("Excalidraw", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon diagram-2" }),
      keywords: ["excalidraw", "diagram", "drawing"],
      onSelect: () => r.dispatchCommand(g0, void 0)
    }),
    new ot("Poll", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon poll" }),
      keywords: ["poll", "vote"],
      onSelect: () => e("Insert Poll", (t) => /* @__PURE__ */ p.jsx(bh, { activeEditor: r, onClose: t }))
    }),
    ...y0.map(
      (t) => new ot(`Embed ${t.contentName}`, {
        icon: t.icon,
        keywords: [...t.keywords, "embed"],
        onSelect: () => r.dispatchCommand(b0, t.type)
      })
    ),
    new ot("Equation", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon equation" }),
      keywords: ["equation", "latex", "math"],
      onSelect: () => e("Insert Equation", (t) => /* @__PURE__ */ p.jsx(_h, { activeEditor: r, onClose: t }))
    }),
    new ot("GIF", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon gif" }),
      keywords: ["gif", "animate", "image", "file"],
      onSelect: () => r.dispatchCommand(La, {
        altText: "Cat typing on a laptop",
        src: "https://media.giphy.com/media/3o7TKz5R0Lkzg7g9gI/giphy.gif"
      })
    }),
    new ot("Image", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon image" }),
      keywords: ["image", "photo", "picture", "file"],
      onSelect: () => e("Insert Image", (t) => /* @__PURE__ */ p.jsx(dh, { activeEditor: r, onClose: t }))
    }),
    new ot("Collapsible", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
      keywords: ["collapse", "collapsible", "toggle"],
      onSelect: () => r.dispatchCommand(v0, void 0)
    }),
    new ot("Columns Layout", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => e("Insert Columns Layout", (t) => /* @__PURE__ */ p.jsx(xh, { activeEditor: r, onClose: t }))
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
function y5() {
  const [r] = oe(), [e, t] = Fi(), [n, a] = H(null), i = w0("/", {
    minLength: 0
  }), s = it(() => {
    const l = b5(r, t);
    if (!n)
      return l;
    const u = new RegExp(n, "i");
    return [
      ...v5(r, n),
      ...l.filter(
        (c) => u.test(c.title) || c.keywords.some((d) => u.test(d))
      )
    ];
  }, [r, n, t]), o = ie(
    (l, u, c, d) => {
      r.update(() => {
        u == null || u.remove(), l.onSelect(d), c();
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    e,
    /* @__PURE__ */ p.jsx(
      _0,
      {
        onQueryChange: a,
        onSelectOption: o,
        triggerFn: i,
        options: s,
        menuRenderFn: (l, { selectedIndex: u, selectOptionAndCleanUp: c, setHighlightedIndex: d }) => l.current && s.length ? ua.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover component-picker-menu", children: /* @__PURE__ */ p.jsx("ul", { children: s.map((m, g) => /* @__PURE__ */ p.jsx(
            g5,
            {
              index: g,
              isSelected: u === g,
              onClick: () => {
                d(g), c(m);
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
function x5(r, e) {
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
const w5 = 10, _5 = 5;
function S5(r, e, t, n = !1, a = w5, i = _5) {
  const s = t.parentElement;
  if (r === null || !s) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const o = e.getBoundingClientRect(), l = t.getBoundingClientRect(), u = s.getBoundingClientRect();
  let c = r.top - o.height - a, d = r.left - i;
  c < u.top && (c += o.height + r.height + a * (n ? 9 : 2)), d + o.width > u.right && (d = u.right - o.width - i), c -= l.top, d -= l.left, e.style.opacity = "1", e.style.transform = `translate(${d}px, ${c}px)`;
}
function C5({
  editor: r,
  anchorElem: e,
  isLink: t,
  isBold: n,
  isItalic: a,
  isUnderline: i,
  isCode: s,
  isStrikethrough: o,
  isSubscript: l,
  isSuperscript: u
}) {
  const c = Oe(null), d = ie(() => {
    t ? r.dispatchCommand(ir, null) : r.dispatchCommand(ir, "https://");
  }, [r, t]);
  function m(y) {
    if (c != null && c.current && (y.buttons === 1 || y.buttons === 3) && c.current.style.pointerEvents !== "none") {
      const x = y.clientX, _ = y.clientY, w = document.elementFromPoint(x, _);
      c.current.contains(w) || (c.current.style.pointerEvents = "none");
    }
  }
  function g(y) {
    c != null && c.current && c.current.style.pointerEvents !== "auto" && (c.current.style.pointerEvents = "auto");
  }
  $(() => {
    if (c != null && c.current)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", g);
      };
  }, [c]);
  const v = ie(() => {
    const y = B(), x = c.current, _ = window.getSelection();
    if (x === null)
      return;
    const w = r.getRootElement();
    if (y !== null && _ !== null && !_.isCollapsed && w !== null && w.contains(_.anchorNode)) {
      const C = x5(_, w);
      S5(
        C,
        x,
        e,
        t
      );
    }
  }, [r, e, t]);
  return $(() => {
    const y = e.parentElement, x = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", x), y && y.addEventListener("scroll", x), () => {
      window.removeEventListener("resize", x), y && y.removeEventListener("scroll", x);
    };
  }, [r, v, e]), $(() => (r.getEditorState().read(() => {
    v();
  }), Re(
    r.registerUpdateListener(({ editorState: y }) => {
      y.read(() => {
        v();
      });
    }),
    r.registerCommand(
      yr,
      () => (v(), !1),
      ye
    )
  )), [r, v]), /* @__PURE__ */ p.jsx("div", { ref: c, className: "floating-text-format-popup", children: r.isEditable() && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          r.dispatchCommand(bt, "bold");
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
          r.dispatchCommand(bt, "italic");
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
          r.dispatchCommand(bt, "underline");
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
          r.dispatchCommand(bt, "strikethrough");
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
          r.dispatchCommand(bt, "subscript");
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
          r.dispatchCommand(bt, "superscript");
        },
        className: "popup-item spaced " + (u ? "active" : ""),
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
          r.dispatchCommand(bt, "code");
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
function k5(r, e) {
  const [t, n] = H(!1), [a, i] = H(!1), [s, o] = H(!1), [l, u] = H(!1), [c, d] = H(!1), [m, g] = H(!1), [v, y] = H(!1), [x, _] = H(!1), [w, C] = H(!1), T = ie(() => {
    r.getEditorState().read(() => {
      if (r.isComposing())
        return;
      const k = B(), N = window.getSelection(), I = r.getRootElement();
      if (N !== null && (!U(k) || I === null || !I.contains(N.anchorNode))) {
        n(!1);
        return;
      }
      if (!U(k))
        return;
      const D = On(k);
      o(k.hasFormat("bold")), u(k.hasFormat("italic")), d(k.hasFormat("underline")), g(k.hasFormat("strikethrough")), y(k.hasFormat("subscript")), _(k.hasFormat("superscript")), C(k.hasFormat("code"));
      const M = D.getParent();
      lt(M) || lt(D) ? i(!0) : i(!1), !go(k.anchor.getNode()) && k.getTextContent() !== "" ? n(_e(D) || $r(D)) : n(!1);
      const F = k.getTextContent().replace(/\n/g, "");
      if (!k.isCollapsed() && F === "") {
        n(!1);
        return;
      }
    });
  }, [r]);
  return $(() => (document.addEventListener("selectionchange", T), () => {
    document.removeEventListener("selectionchange", T);
  }), [T]), $(() => Re(
    r.registerUpdateListener(() => {
      T();
    }),
    r.registerRootListener(() => {
      r.getRootElement() === null && n(!1);
    })
  ), [r, T]), t ? Zt(
    /* @__PURE__ */ p.jsx(
      C5,
      {
        editor: r,
        anchorElem: e,
        isLink: a,
        isBold: s,
        isItalic: l,
        isStrikethrough: m,
        isSubscript: v,
        isSuperscript: x,
        isUnderline: c,
        isCode: w
      }
    ),
    e
  ) : null;
}
function N5({
  anchorElem: r = document.body
}) {
  const [e] = oe();
  return k5(e, r);
}
function E5(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ei = E5(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function T5({ hasCellMerge: r = !0, hasCellBackgroundColor: e = !0, hasTabHandler: t = !0 }) {
  const [n] = oe();
  return $(() => (n.hasNodes([or, sr, Ln]) || ei(10), Re(n.registerCommand(To, ({ columns: a, rows: i, includeHeaders: s }) => {
    const o = Xm(Number(i), Number(a), s);
    qr(o);
    const l = o.getFirstDescendant();
    return _e(l) && l.select(), !0;
  }, be), n.registerNodeTransform(or, (a) => {
    const [i] = Oo(a, null, null), s = i.reduce((l, u) => Math.max(l, u.length), 0), o = a.getChildren();
    for (let l = 0; l < i.length; ++l) {
      const u = o[l];
      if (!u) continue;
      const c = i[l].reduce((d, m) => m ? 1 + d : d, 0);
      if (c !== s) for (let d = c; d < s; ++d) {
        const m = Jt(0);
        m.append(xe()), u.append(m);
      }
    }
  }))), [n]), $(() => {
    const a = /* @__PURE__ */ new Map(), i = (o, l, u) => {
      const c = u, d = nf(o, c, n, t);
      a.set(l, [d, c]);
    }, s = n.registerMutationListener(or, (o) => {
      for (const [l, u] of o) if (u === "created" || u === "updated") {
        const c = a.get(l), d = n.getElementByKey(l);
        c && d === c[1] || (c && (c[0].removeListeners(), a.delete(l)), d !== null && n.getEditorState().read(() => {
          const m = At(l);
          Ke(m) && i(m, l, d);
        }));
      } else if (u === "destroyed") {
        const c = a.get(l);
        c !== void 0 && (c[0].removeListeners(), a.delete(l));
      }
    }, { skipInitialization: !1 });
    return () => {
      s();
      for (const [, [o]] of a) o.removeListeners();
    };
  }, [n, t]), $(() => {
    if (!r) return n.registerNodeTransform(sr, (a) => {
      if (a.getColSpan() > 1 || a.getRowSpan() > 1) {
        const [, , i] = vt(a), [s] = Wt(i, a, a), o = s.length, l = s[0].length;
        let u = i.getFirstChild();
        nt(u) || ei(175);
        const c = [];
        for (let d = 0; d < o; d++) {
          d !== 0 && (u = u.getNextSibling(), nt(u) || ei(175));
          let m = null;
          for (let g = 0; g < l; g++) {
            const v = s[d][g], y = v.cell;
            if (v.startRow === d && v.startColumn === g) m = y, c.push(y);
            else if (y.getColSpan() > 1 || y.getRowSpan() > 1) {
              ae(y) || ei(176);
              const x = Jt(y.__headerState);
              m !== null ? m.insertAfter(x) : em(u, x);
            }
          }
        }
        for (const d of c) d.setColSpan(1), d.setRowSpan(1);
      }
    });
  }, [n, r]), $(() => {
    if (!e) return n.registerNodeTransform(sr, (a) => {
      a.getBackgroundColor() !== null && a.setBackgroundColor(null);
    });
  }, [n, e, r]), null;
}
const A5 = 33, $u = 92;
function M5({ editor: r }) {
  const e = Oe(null), t = Oe(null), n = Oe(null), a = Oe(null), [i, s] = H(null), [o, l] = H(null), [u, c] = H(!1), [d, m] = H(null), g = ie(() => {
    l(null), e.current = null, m(null), a.current = null, n.current = null;
  }, []), v = (D) => (D.buttons & 1) === 1;
  $(() => r.registerNodeTransform(or, (D) => {
    if (D.getColWidths())
      return D;
    const M = D.getColumnCount(), F = $u;
    return D.setColWidths(Array(M).fill(F)), D;
  }), [r]), $(() => {
    const D = (j) => {
      setTimeout(() => {
        const P = j.target;
        if (d) {
          s({
            x: j.clientX,
            y: j.clientY
          });
          return;
        }
        if (c(v(j)), !(t.current && t.current.contains(P)) && e.current !== P) {
          e.current = P;
          const X = Fs(P);
          X && o !== X ? r.update(() => {
            const Y = Qe(X.elem);
            if (!Y)
              throw new Error("TableCellResizer: Table cell node not found.");
            const ee = br(Y), ce = r.getElementByKey(ee.getKey());
            if (!ce)
              throw new Error("TableCellResizer: Table element not found.");
            e.current = P, n.current = ce.getBoundingClientRect(), l(X);
          }) : X == null && g();
        }
      }, 0);
    }, M = () => {
      setTimeout(() => {
        c(!0);
      }, 0);
    }, F = () => {
      setTimeout(() => {
        c(!1);
      }, 0);
    }, z = r.registerRootListener(
      (j, P) => {
        P == null || P.removeEventListener("mousemove", D), P == null || P.removeEventListener("mousedown", M), P == null || P.removeEventListener("mouseup", F), j == null || j.addEventListener("mousemove", D), j == null || j.addEventListener("mousedown", M), j == null || j.addEventListener("mouseup", F);
      }
    );
    return () => {
      z();
    };
  }, [o, d, r, g]);
  const y = (D) => D === "bottom", x = ie(
    (D) => {
      if (!o)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(
        () => {
          const M = Qe(o.elem);
          if (!ae(M))
            throw new Error("TableCellResizer: Table cell node not found.");
          const F = br(M), z = Ao(M) + M.getRowSpan() - 1, j = F.getChildren();
          if (z >= j.length || z < 0)
            throw new Error("Expected table cell to be inside of table row.");
          const P = j[z];
          if (!nt(P))
            throw new Error("Expected table row");
          let X = P.getHeight();
          if (X === void 0) {
            const ee = P.getChildren();
            X = Math.min(
              ...ee.map(
                (ce) => _(ce, r) ?? 1 / 0
              )
            );
          }
          const Y = Math.max(X + D, A5);
          P.setHeight(Y);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [o, r]
  ), _ = (D, M) => {
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
          const F = br(M), [z] = Oo(
            F,
            null,
            null
          ), j = w(M, z);
          if (j === void 0)
            throw new Error("TableCellResizer: Table column not found.");
          const P = F.getColWidths();
          if (!P)
            return;
          const X = P[j];
          if (X === void 0)
            return;
          const Y = [...P], ee = Math.max(X + D, $u);
          Y[j] = ee, F.setColWidths(Y);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [o, r]
  ), T = ie(
    (D) => {
      const M = (F) => {
        if (F.preventDefault(), F.stopPropagation(), !o)
          throw new Error("TableCellResizer: Expected active cell.");
        if (a.current) {
          const { x: z, y: j } = a.current;
          if (o === null)
            return;
          const P = ks(F.target);
          if (y(D)) {
            const X = (F.clientY - j) / P;
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
      }, s(a.current), m(D), document.addEventListener("mouseup", T(D));
    },
    [o, T]
  ), I = ie(() => {
    if (o) {
      const { height: D, width: M, top: F, left: z } = o.elem.getBoundingClientRect(), j = ks(o.elem), P = 10, X = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: `${P}px`,
          left: `${window.pageXOffset + z}px`,
          top: `${window.pageYOffset + F + D - P / 2}px`,
          width: `${M}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${D}px`,
          left: `${window.pageXOffset + z + M - P / 2}px`,
          top: `${window.pageYOffset + F}px`,
          width: `${P}px`
        }
      }, Y = n.current;
      return d && i && Y && (y(d) ? (X[d].left = `${window.pageXOffset + Y.left}px`, X[d].top = `${window.pageYOffset + i.y / j}px`, X[d].height = "3px", X[d].width = `${Y.width}px`) : (X[d].top = `${window.pageYOffset + Y.top}px`, X[d].left = `${window.pageXOffset + i.x / j}px`, X[d].width = "3px", X[d].height = `${Y.height}px`), X[d].backgroundColor = "#adf"), X;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [o, d, i])();
  return /* @__PURE__ */ p.jsx("div", { ref: t, children: o != null && !u && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
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
function O5() {
  const [r] = oe(), e = Fa();
  return it(
    () => e ? Zt(/* @__PURE__ */ p.jsx(M5, { editor: r }), document.body) : null,
    [r, e]
  );
}
function gs(r) {
  const e = r.getShape();
  return {
    columns: e.toX - e.fromX + 1,
    rows: e.toY - e.fromY + 1
  };
}
function D5() {
  const r = B();
  if (U(r) && !r.isCollapsed() || Me(r) && !r.anchor.is(r.focus) || !U(r) && !Me(r))
    return !1;
  const [e] = vt(r.anchor);
  return e.__colSpan > 1 || e.__rowSpan > 1;
}
function qu(r) {
  if (r.getChildrenSize() !== 1)
    return !1;
  const e = r.getFirstChildOrThrow();
  return !(!$r(e) || !e.isEmpty());
}
function R5(r) {
  const e = r.getLastDescendant();
  _e(e) ? e.select() : pe(e) ? e.selectEnd() : e !== null && e.selectNext();
}
function Hu(r) {
  return r.getEditorState().read(() => {
    const e = B();
    if (U(e) || Me(e)) {
      const [t] = vt(e.anchor);
      if (ae(t))
        return t.getBackgroundColor();
    }
    return null;
  });
}
function I5({
  onClose: r,
  tableCellNode: e,
  setIsMenuOpen: t,
  contextRef: n,
  cellMerge: a,
  showColorPickerModal: i
}) {
  const [s] = oe(), o = Oe(null), [l, u] = H(e), [c, d] = H({
    columns: 1,
    rows: 1
  }), [m, g] = H(!1), [v, y] = H(!1), [x, _] = H(
    () => Hu(s) || ""
  );
  $(() => s.registerMutationListener(
    sr,
    (Y) => {
      Y.get(l.getKey()) === "updated" && (s.getEditorState().read(() => {
        u(l.getLatest());
      }), _(Hu(s) || ""));
    },
    { skipInitialization: !0 }
  ), [s, l]), $(() => {
    s.getEditorState().read(() => {
      const Y = B();
      if (Me(Y)) {
        const ee = gs(Y);
        d(gs(Y)), g(
          ee.columns > 1 || ee.rows > 1
        );
      }
      y(D5());
    });
  }, [s]), $(() => {
    const Y = n.current, ee = o.current, ce = s.getRootElement();
    if (Y != null && ee != null && ce != null) {
      const J = ce.getBoundingClientRect(), de = Y.getBoundingClientRect();
      ee.style.opacity = "1";
      const le = ee.getBoundingClientRect(), Ne = 5;
      let se = de.right + Ne;
      if (se + le.width > window.innerWidth || se + le.width > J.right) {
        const Be = de.left - le.width - Ne;
        se = (Be < 0 ? Ne : Be) + window.pageXOffset;
      }
      ee.style.left = `${se + window.pageXOffset}px`;
      let Pe = de.top;
      if (Pe + le.height > window.innerHeight) {
        const Be = de.bottom - le.height;
        Pe = (Be < 0 ? Ne : Be) + window.pageYOffset;
      }
      ee.style.top = `${Pe + +window.pageYOffset}px`;
    }
  }, [n, o, s]), $(() => {
    function Y(ee) {
      o.current != null && n.current != null && !o.current.contains(ee.target) && !n.current.contains(ee.target) && t(!1);
    }
    return window.addEventListener("click", Y), () => window.removeEventListener("click", Y);
  }, [t, n]);
  const w = ie(() => {
    s.update(() => {
      if (l.isAttached()) {
        const ee = br(l), ce = s.getElementByKey(
          ee.getKey()
        );
        if (!ce)
          throw new Error("Expected to find tableElement in DOM");
        const J = Is(ce);
        J !== null && J.clearHighlight(), ee.markDirty(), u(l.getLatest());
      }
      Ot().selectStart();
    });
  }, [s, l]), C = () => {
    s.update(() => {
      const Y = B();
      if (Me(Y)) {
        const { columns: ee, rows: ce } = gs(Y), J = Y.getNodes();
        let de = null;
        for (let le = 0; le < J.length; le++) {
          const Ne = J[le];
          if (ae(Ne))
            if (de === null) {
              Ne.setColSpan(ee).setRowSpan(ce), de = Ne;
              const se = qu(Ne);
              let Pe;
              se && $r(Pe = Ne.getFirstChild()) && Pe.remove();
            } else ae(de) && (qu(Ne) || de.append(...Ne.getChildren()), Ne.remove());
        }
        de !== null && (de.getChildrenSize() === 0 && de.append(xe()), R5(de)), r();
      }
    });
  }, T = () => {
    s.update(() => {
      ef();
    });
  }, k = ie(
    (Y) => {
      s.update(() => {
        Vc(Y), r();
      });
    },
    [s, r]
  ), N = ie(
    (Y) => {
      s.update(() => {
        for (let ee = 0; ee < c.columns; ee++)
          Xc(Y);
        r();
      });
    },
    [s, r, c.columns]
  ), I = ie(() => {
    s.update(() => {
      Zm(), r();
    });
  }, [s, r]), D = ie(() => {
    s.update(() => {
      br(l).remove(), w(), r();
    });
  }, [s, l, w, r]), M = ie(() => {
    s.update(() => {
      Qm(), r();
    });
  }, [s, r]), F = ie(() => {
    s.update(() => {
      const Y = br(l), ee = Ao(l), ce = Y.getChildren();
      if (ee >= ce.length || ee < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const J = ce[ee];
      if (!nt(J))
        throw new Error("Expected table row");
      const de = l.getHeaderStyles() ^ qe.ROW;
      J.getChildren().forEach((le) => {
        if (!ae(le))
          throw new Error("Expected table cell");
        le.setHeaderStyles(de, qe.ROW);
      }), w(), r();
    });
  }, [s, l, w, r]), z = ie(() => {
    s.update(() => {
      const Y = br(l), ee = Yc(l), ce = Y.getChildren(), J = Math.max(
        ...ce.map((le) => le.getChildren().length)
      );
      if (ee >= J || ee < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const de = l.getHeaderStyles() ^ qe.COLUMN;
      for (let le = 0; le < ce.length; le++) {
        const Ne = ce[le];
        if (!nt(Ne))
          throw new Error("Expected table row");
        const se = Ne.getChildren();
        if (ee >= se.length)
          continue;
        const Pe = se[ee];
        if (!ae(Pe))
          throw new Error("Expected table cell");
        Pe.setHeaderStyles(de, qe.COLUMN);
      }
      w(), r();
    });
  }, [s, l, w, r]), j = ie(() => {
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
        const ee = B();
        if (U(ee) || Me(ee)) {
          const [ce] = vt(ee.anchor);
          if (ae(ce) && ce.setBackgroundColor(Y), Me(ee)) {
            const J = ee.getNodes();
            for (let de = 0; de < J.length; de++) {
              const le = J[de];
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
      onClick: () => T(),
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
                uh,
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
              onClick: () => j(),
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
                c.rows === 1 ? "row" : `${c.rows} rows`,
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
                c.rows === 1 ? "row" : `${c.rows} rows`,
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
              onClick: () => N(!1),
              "data-test-id": "table-insert-column-before",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                c.columns === 1 ? "column" : `${c.columns} columns`,
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
              onClick: () => N(!0),
              "data-test-id": "table-insert-column-after",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                "Insert",
                " ",
                c.columns === 1 ? "column" : `${c.columns} columns`,
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
                (l.__headerState & qe.ROW) === qe.ROW ? "Remove" : "Add",
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
                (l.__headerState & qe.COLUMN) === qe.COLUMN ? "Remove" : "Add",
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
function F5({
  anchorElem: r,
  cellMerge: e
}) {
  const [t] = oe(), n = Oe(null), a = Oe(null), [i, s] = H(!1), [o, l] = H(
    null
  ), [u, c] = Fi(), d = ie(() => {
    const g = n.current, v = B(), y = window.getSelection(), x = document.activeElement;
    if (v == null || g == null) {
      l(null);
      return;
    }
    const _ = t.getRootElement();
    if (U(v) && _ !== null && y !== null && _.contains(y.anchorNode)) {
      const w = Jm(
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
  $(() => t.registerUpdateListener(() => {
    t.getEditorState().read(() => {
      d();
    });
  })), $(() => {
    const g = n.current;
    if (g != null && o != null) {
      const v = t.getElementByKey(o.getKey());
      if (v != null) {
        const y = v.getBoundingClientRect(), x = g.getBoundingClientRect(), _ = r.getBoundingClientRect(), w = y.top - _.top + 4, C = y.right - x.width - 10 - _.left;
        g.style.opacity = "1", g.style.transform = `translate(${C}px, ${w}px)`;
      } else
        g.style.opacity = "0", g.style.transform = "translate(-10000px, -10000px)";
    }
  }, [n, o, t, r]);
  const m = Oe(o);
  return $(() => {
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
    u,
    i && /* @__PURE__ */ p.jsx(
      I5,
      {
        contextRef: a,
        setIsMenuOpen: s,
        onClose: () => s(!1),
        tableCellNode: o,
        cellMerge: e,
        showColorPickerModal: c
      }
    )
  ] }) });
}
function L5({
  anchorElem: r = document.body,
  cellMerge: e = !1
}) {
  const t = Fa();
  return Zt(
    t ? /* @__PURE__ */ p.jsx(
      F5,
      {
        anchorElem: r,
        cellMerge: e
      }
    ) : null,
    r
  );
}
const Uu = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function z5() {
  const [r] = oe();
  return $(() => r.registerCommand(
    Os,
    (e) => ((async () => {
      const t = await Z1(
        e,
        [Uu].flatMap((n) => n)
      );
      for (const { file: n, result: a } of t)
        _c(n, Uu) && r.dispatchCommand(La, {
          altText: n.name,
          src: a
        });
    })(), !0),
    ye
  ), [r]), null;
}
class P5 extends x0 {
  constructor(t, n, a) {
    super(t);
    ne(this, "title");
    ne(this, "emoji");
    ne(this, "keywords");
    this.title = t, this.emoji = n, this.keywords = a.keywords || [];
  }
}
function B5({
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
const j5 = 10;
function $5() {
  const [r] = oe(), [e, t] = H(null), [n, a] = H([]);
  $(() => {
    import("./emoji-list-CKk-PE96.js").then((u) => a(u.default));
  }, []);
  const i = it(
    () => n != null ? n.map(
      ({ emoji: u, aliases: c, tags: d }) => new P5(c[0], u, {
        keywords: [...c, ...d]
      })
    ) : [],
    [n]
  ), s = w0(":", {
    minLength: 0
  }), o = it(() => i.filter((u) => e != null ? new RegExp(e, "gi").exec(u.title) || u.keywords != null ? u.keywords.some(
    (c) => new RegExp(e, "gi").exec(c)
  ) : !1 : i).slice(0, j5), [i, e]), l = ie(
    (u, c, d) => {
      r.update(() => {
        const m = B();
        !U(m) || u == null || (c && c.remove(), m.insertNodes([Ir(u.emoji)]), d());
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsx(
    _0,
    {
      onQueryChange: t,
      onSelectOption: l,
      triggerFn: s,
      options: o,
      menuRenderFn: (u, { selectedIndex: c, selectOptionAndCleanUp: d, setHighlightedIndex: m }) => u.current == null || o.length === 0 ? null : u.current && o.length ? ua.createPortal(
        /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover emoji-menu", children: /* @__PURE__ */ p.jsx("ul", { children: o.map((g, v) => /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
          B5,
          {
            index: v,
            isSelected: c === v,
            onClick: () => {
              m(v), d(g);
            },
            onMouseEnter: () => {
              m(v);
            },
            option: g
          }
        ) }, g.key)) }) }),
        u.current
      ) : null
    }
  );
}
function vs(r) {
  return r instanceof HTMLElement;
}
class Dh {
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
function q5(r) {
  return r instanceof Dh;
}
class Jr {
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
    if (q5(e)) {
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
    const { left: t, top: n, width: a, height: i } = e, { left: s, top: o, width: l, height: u } = this, c = t + a >= s + l ? t + a : s + l, d = n + i >= o + u ? n + i : o + u, m = t <= s ? t : s, g = n <= o ? n : o;
    return c - m <= a + l && d - g <= i + u;
  }
  generateNewRect({
    left: e = this.left,
    top: t = this.top,
    right: n = this.right,
    bottom: a = this.bottom
  }) {
    return new Jr(e, t, n, a);
  }
  static fromLTRB(e, t, n, a) {
    return new Jr(e, t, n, a);
  }
  static fromLWTH(e, t, n, a) {
    return new Jr(e, n, e + t, n + a);
  }
  static fromPoints(e, t) {
    const { y: n, x: a } = e, { y: i, x: s } = t;
    return Jr.fromLTRB(a, n, s, i);
  }
  static fromDOM(e) {
    const { top: t, width: n, left: a, height: i } = e.getBoundingClientRect();
    return Jr.fromLWTH(a, n, t, i);
  }
}
const ro = 4, H5 = 2, U5 = "draggable-block-menu", Wu = "application/x-lexical-drag-block", Ku = 28, W5 = 1, K5 = -1, Gu = 0;
let ai = 1 / 0;
function G5(r) {
  return r === 0 ? 1 / 0 : ai >= 0 && ai < r ? ai : Math.floor(r / 2);
}
function Y5(r) {
  return r.getEditorState().read(() => Ot().getChildrenKeys());
}
function Rh(r) {
  const e = (l, u) => l ? parseFloat(window.getComputedStyle(l)[u]) : 0, { marginTop: t, marginBottom: n } = window.getComputedStyle(r), a = e(
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
function bs(r, e, t, n = !1) {
  const a = r.getBoundingClientRect(), i = Y5(e);
  let s = null;
  return e.getEditorState().read(() => {
    if (n) {
      const [u, c] = [
        e.getElementByKey(i[0]),
        e.getElementByKey(i[i.length - 1])
      ], [d, m] = [
        u == null ? void 0 : u.getBoundingClientRect(),
        c == null ? void 0 : c.getBoundingClientRect()
      ];
      if (d && m && (t.y < d.top ? s = u : t.y > m.bottom && (s = c), s))
        return;
    }
    let o = G5(i.length), l = Gu;
    for (; o >= 0 && o < i.length; ) {
      const u = i[o], c = e.getElementByKey(u);
      if (c === null)
        break;
      const d = new Dh(t.x, t.y), m = Jr.fromDOM(c), { marginTop: g, marginBottom: v } = Rh(c), y = m.generateNewRect({
        bottom: m.bottom + v,
        left: a.left,
        right: a.right,
        top: m.top - g
      }), {
        result: x,
        reason: { isOnTopSide: _, isOnBottomSide: w }
      } = y.contains(d);
      if (x) {
        s = c, ai = o;
        break;
      }
      l === Gu && (_ ? l = K5 : w ? l = W5 : l = 1 / 0), o += l;
    }
  }), s;
}
function V5(r) {
  return !!r.closest(`.${U5}`);
}
function X5(r, e, t) {
  if (!r) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const n = r.getBoundingClientRect(), a = window.getComputedStyle(r), i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), o = n.top + (parseInt(a.lineHeight, 10) - i.height) / 2 - s.top, l = ro;
  e.style.opacity = "1", e.style.transform = `translate(${l}px, ${o}px)`;
}
function J5(r, e) {
  const { transform: t } = e.style;
  e.style.transform = "translateZ(0)", r.setDragImage(e, 0, 0), setTimeout(() => {
    e.style.transform = t;
  });
}
function Z5(r, e, t, n) {
  const { top: a, height: i } = e.getBoundingClientRect(), { top: s, width: o } = n.getBoundingClientRect(), { marginTop: l, marginBottom: u } = Rh(e);
  let c = a;
  t >= a ? c += i + u / 2 : c -= l / 2;
  const d = c - s - H5, m = Ku - ro;
  r.style.transform = `translate(${m}px, ${d}px)`, r.style.width = `${o - (Ku - ro) * 2}px`, r.style.opacity = ".4";
}
function Q5(r) {
  r && (r.style.opacity = "0", r.style.transform = "translate(-10000px, -10000px)");
}
function e3(r, e, t) {
  const n = e.parentElement, a = Oe(null), i = Oe(null), s = Oe(!1), [o, l] = H(null);
  $(() => {
    function d(g) {
      const v = g.target;
      if (!vs(v)) {
        l(null);
        return;
      }
      if (V5(v))
        return;
      const y = bs(e, r, g);
      l(y);
    }
    function m() {
      l(null);
    }
    return n == null || n.addEventListener("mousemove", d), n == null || n.addEventListener("mouseleave", m), () => {
      n == null || n.removeEventListener("mousemove", d), n == null || n.removeEventListener("mouseleave", m);
    };
  }, [n, e, r]), $(() => {
    a.current && X5(o, a.current, e);
  }, [e, o]), $(() => {
    function d(g) {
      if (!s.current)
        return !1;
      const [v] = kn(g);
      if (v)
        return !1;
      const { pageY: y, target: x } = g;
      if (!vs(x))
        return !1;
      const _ = bs(e, r, g, !0), w = i.current;
      return _ === null || w === null ? !1 : (Z5(w, _, y, e), g.preventDefault(), !0);
    }
    function m(g) {
      if (!s.current)
        return !1;
      const [v] = kn(g);
      if (v)
        return !1;
      const { target: y, dataTransfer: x, pageY: _ } = g, w = (x == null ? void 0 : x.getData(Wu)) || "", C = At(w);
      if (!C || !vs(y))
        return !1;
      const T = bs(e, r, g, !0);
      if (!T)
        return !1;
      const k = Qe(T);
      if (!k)
        return !1;
      if (k === C)
        return !0;
      const N = T.getBoundingClientRect().top;
      return _ >= N ? k.insertAfter(C) : k.insertBefore(C), l(null), !0;
    }
    return Re(
      r.registerCommand(
        yi,
        (g) => d(g),
        ye
      ),
      r.registerCommand(
        xi,
        (g) => m(g),
        Lt
      )
    );
  }, [e, r]);
  function u(d) {
    const m = d.dataTransfer;
    if (!m || !o)
      return;
    J5(m, o);
    let g = "";
    r.update(() => {
      const v = Qe(o);
      v && (g = v.getKey());
    }), s.current = !0, m.setData(Wu, g);
  }
  function c() {
    s.current = !1, Q5(i.current);
  }
  return Zt(
    /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          className: "icon draggable-block-menu",
          ref: a,
          draggable: !0,
          onDragStart: u,
          onDragEnd: c,
          children: /* @__PURE__ */ p.jsx("div", { className: t ? "icon" : "" })
        }
      ),
      /* @__PURE__ */ p.jsx("div", { className: "draggable-block-target-line", ref: i })
    ] }),
    e
  );
}
function t3({
  anchorElem: r = document.body
}) {
  const [e] = oe();
  return e3(e, r, e._editable);
}
const Ih = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, r3 = "\\b[A-Z][^\\s" + Ih + "]", n3 = {
  NAME: r3,
  PUNCTUATION: Ih
}, Fh = n3.PUNCTUATION, S0 = ["=\\$a", "=\\$i", "=\\$f"].join("|"), ys = "=$a", a3 = "=$i", i3 = "=$f", Lh = "^(" + S0 + ")\\s|[^" + Fh + "\\s]", s3 = "(?:\\.[ |$]| |[" + Fh + "]|)", o3 = 75, l3 = new RegExp(
  "((" + S0 + ")((?:" + Lh + s3 + "){0," + o3 + "}))"
), u3 = 50, c3 = new RegExp(
  "((" + S0 + ")((?:" + Lh + "){0," + u3 + "}))"
), d3 = [
  {
    inputField: {
      label: "入力フィールドを追加",
      value: null
    }
  }
], xs = /* @__PURE__ */ new Map(), h3 = {
  search(r, e, t) {
    setTimeout(() => {
      const n = e.filter(
        (a) => Object.keys(a).filter((i) => a[i].label.toLowerCase().includes(r.toLowerCase())).length > 0
      );
      t(n);
    }, 300);
  }
};
function m3(r, e, t = "") {
  const [n, a] = H([]);
  return $(() => {
    const i = xs.get(t + r);
    if (r == null) {
      a([]);
      return;
    }
    if (i !== null) {
      if (i !== void 0) {
        a(i);
        return;
      }
      xs.set(t + r, null), h3.search(r, e, (s) => {
        xs.set(t + r, s), a(s);
      });
    }
  }, [r, e, t]), n;
}
function f3(r, e) {
  let t = l3.exec(r);
  if (t === null && (t = c3.exec(r)), t !== null) {
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
function p3(r) {
  return f3(r, 0);
}
class g3 extends x0 {
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
function v3({
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
function b3({
  step: r,
  autoData: e,
  afterAutoData: t
}) {
  const [n] = oe(), [a, i] = H(null), [s, o] = H(), [l, u] = H(), [c, d] = H(!1), [m, g] = H(null), v = mt.useRef(!0), x = m3(a, s === ys ? e : s === i3 ? t : d3, s), _ = w0("/", {
    minLength: 0
  }), w = it(
    () => x.map(
      (k) => {
        const N = Object.keys(k)[0];
        return new g3(s === ys ? "auto" : "after-auto", N, k[N].label, k[N].value, k[N].isMan, k[N].isNumber);
      }
    ),
    [x]
  ), C = ie(
    (k, N, I) => {
      n.update(() => {
        let D = k.data;
        k.isMan && typeof D == "number" && D && (D = 1e4 * D), k.isNumber && D && (D = D.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        const M = d0(
          {
            dataMention: s === ys ? "auto" : s == a3 ? "input" : "after-auto",
            fieldName: k.fieldName,
            label: k.label,
            data: D,
            format: N == null ? void 0 : N.getFormat(),
            style: N == null ? void 0 : N.getStyle()
          }
        );
        k.fieldName === "inputField" && (d(!0), g(M), I()), N && N.replace(M), I();
      });
    },
    [n, s]
  ), T = ie(
    (k) => {
      if (_(k, n) !== null)
        return null;
      const I = p3(k);
      return I !== null && o(I.replaceableString.replace(I.matchingString, "")), I;
    },
    [_, n]
  );
  return $(() => {
    if (v.current)
      return (r === 2 || r === 3) && n.update(() => {
        D1(dn).forEach((N) => {
          if (N.__dataMention === "auto" && N.__step === 2 || N.__dataMention === "after-auto" && N.__step === 3) {
            let I;
            if (N.__dataMention === "auto" ? I = e.find((D) => D[N.__fieldName] && D[N.__fieldName].label === N.__label) : I = t.find((D) => D[N.__fieldName] && D[N.__fieldName].label === N.__label), I) {
              const D = I[N.__fieldName];
              let M = D.value;
              M && D.isMan && (M = parseInt(M.toString()) * 1e4), M && D.isNumber && (M = M.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), N.setData(M);
            }
          }
        });
      }), v.current = !1, () => {
        v.current = !1;
      };
  }, []), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      _0,
      {
        onQueryChange: i,
        onSelectOption: C,
        triggerFn: T,
        options: w,
        menuRenderFn: (k, { selectedIndex: N, selectOptionAndCleanUp: I, setHighlightedIndex: D }) => k.current && x.length ? ua.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ p.jsx("ul", { children: w.map((M, F) => /* @__PURE__ */ p.jsx(
            v3,
            {
              index: F,
              isSelected: N === F,
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
    c && m && ua.createPortal(
      /* @__PURE__ */ p.jsxs("div", { className: "data-mention-input-modal", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            placeholder: "Enter label of input field",
            value: l || "",
            type: "text",
            onChange: (k) => {
              u(k.target.value);
            }
          }
        ),
        /* @__PURE__ */ p.jsx("button", { onClick: () => {
          n.update(() => {
            m == null || m.setLabel(l || ""), d(!1), g(null), u("");
          });
        }, children: "Save" })
      ] }),
      document.body
    )
  ] });
}
const y3 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Br : $;
function x3({ ignoreHistoryMergeTagChange: r = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [n] = oe();
  return y3(() => {
    if (t) return n.registerUpdateListener(({ editorState: a, dirtyElements: i, dirtyLeaves: s, prevEditorState: o, tags: l }) => {
      e && i.size === 0 && s.size === 0 || r && l.has("history-merge") || o.isEmpty() || t(a, n, l);
    });
  }, [n, r, e, t]), null;
}
var w3 = typeof global == "object" && global && global.Object === Object && global, _3 = typeof self == "object" && self && self.Object === Object && self, zh = w3 || _3 || Function("return this")(), bi = zh.Symbol, Ph = Object.prototype, S3 = Ph.hasOwnProperty, C3 = Ph.toString, Jn = bi ? bi.toStringTag : void 0;
function k3(r) {
  var e = S3.call(r, Jn), t = r[Jn];
  try {
    r[Jn] = void 0;
    var n = !0;
  } catch {
  }
  var a = C3.call(r);
  return n && (e ? r[Jn] = t : delete r[Jn]), a;
}
var N3 = Object.prototype, E3 = N3.toString;
function T3(r) {
  return E3.call(r);
}
var A3 = "[object Null]", M3 = "[object Undefined]", Yu = bi ? bi.toStringTag : void 0;
function O3(r) {
  return r == null ? r === void 0 ? M3 : A3 : Yu && Yu in Object(r) ? k3(r) : T3(r);
}
function D3(r) {
  return r != null && typeof r == "object";
}
var R3 = "[object Symbol]";
function I3(r) {
  return typeof r == "symbol" || D3(r) && O3(r) == R3;
}
var F3 = /\s/;
function L3(r) {
  for (var e = r.length; e-- && F3.test(r.charAt(e)); )
    ;
  return e;
}
var z3 = /^\s+/;
function P3(r) {
  return r && r.slice(0, L3(r) + 1).replace(z3, "");
}
function no(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Vu = NaN, B3 = /^[-+]0x[0-9a-f]+$/i, j3 = /^0b[01]+$/i, $3 = /^0o[0-7]+$/i, q3 = parseInt;
function Xu(r) {
  if (typeof r == "number")
    return r;
  if (I3(r))
    return Vu;
  if (no(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = no(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = P3(r);
  var t = j3.test(r);
  return t || $3.test(r) ? q3(r.slice(2), t ? 2 : 8) : B3.test(r) ? Vu : +r;
}
var ws = function() {
  return zh.Date.now();
}, H3 = "Expected a function", U3 = Math.max, W3 = Math.min;
function K3(r, e, t) {
  var n, a, i, s, o, l, u = 0, c = !1, d = !1, m = !0;
  if (typeof r != "function")
    throw new TypeError(H3);
  e = Xu(e) || 0, no(t) && (c = !!t.leading, d = "maxWait" in t, i = d ? U3(Xu(t.maxWait) || 0, e) : i, m = "trailing" in t ? !!t.trailing : m);
  function g(N) {
    var I = n, D = a;
    return n = a = void 0, u = N, s = r.apply(D, I), s;
  }
  function v(N) {
    return u = N, o = setTimeout(_, e), c ? g(N) : s;
  }
  function y(N) {
    var I = N - l, D = N - u, M = e - I;
    return d ? W3(M, i - D) : M;
  }
  function x(N) {
    var I = N - l, D = N - u;
    return l === void 0 || I >= e || I < 0 || d && D >= i;
  }
  function _() {
    var N = ws();
    if (x(N))
      return w(N);
    o = setTimeout(_, y(N));
  }
  function w(N) {
    return o = void 0, m && n ? g(N) : (n = a = void 0, s);
  }
  function C() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = a = o = void 0;
  }
  function T() {
    return o === void 0 ? s : w(ws());
  }
  function k() {
    var N = ws(), I = x(N);
    if (n = arguments, a = this, l = N, I) {
      if (o === void 0)
        return v(l);
      if (d)
        return clearTimeout(o), o = setTimeout(_, e), g(l);
    }
    return o === void 0 && (o = setTimeout(_, e)), s;
  }
  return k.cancel = C, k.flush = T, k;
}
function G3(r, e, t) {
  const n = Oe(null);
  return n.current = r, it(
    () => K3(
      (...a) => {
        n.current && n.current(...a);
      },
      e,
      { maxWait: t }
    ),
    [e, t]
  );
}
const Ju = 20;
function Y3({
  anchorElem: r
}) {
  const [e] = oe(), t = Fa(), [n, a] = H(!1), [i, s] = H(!1), [o, l] = H(!1), [u, c] = H({}), d = Oe(/* @__PURE__ */ new Set()), m = Oe(null), g = G3(
    (x) => {
      const { isOutside: _, tableDOMNode: w } = V3(x);
      if (_) {
        a(!1), s(!1);
        return;
      }
      if (!w)
        return;
      m.current = w;
      let C = null, T = null, k = null;
      if (e.update(() => {
        var I;
        const N = Qe(w);
        if (ae(N)) {
          const D = he(
            N,
            (M) => Ke(M)
          );
          if (!Ke(D))
            return;
          if (k = e.getElementByKey(D == null ? void 0 : D.getKey()), k) {
            const M = D.getChildrenSize(), F = (I = D.getChildAtIndex(0)) == null ? void 0 : I.getChildrenSize(), z = Ao(N), j = Yc(N);
            z === M - 1 ? C = N : j === F - 1 && (T = N);
          }
        }
      }), k) {
        const {
          width: N,
          y: I,
          right: D,
          left: M,
          bottom: F,
          height: z
        } = k.getBoundingClientRect(), { y: j, left: P } = r.getBoundingClientRect();
        C ? (s(!1), a(!0), c({
          height: Ju,
          left: M - P,
          top: F - j + 5,
          width: N
        })) : T && (s(!0), a(!1), c({
          height: z,
          left: D - P + 5,
          top: I - j,
          width: Ju
        }));
      }
    },
    50,
    250
  ), v = it(() => new ResizeObserver(() => {
    a(!1), s(!1);
  }), []);
  $(() => {
    if (o)
      return document.addEventListener("mousemove", g), () => {
        a(!1), s(!1), g.cancel(), document.removeEventListener("mousemove", g);
      };
  }, [o, g]), $(() => Re(
    e.registerMutationListener(
      or,
      (x) => {
        e.getEditorState().read(() => {
          for (const [_, w] of x) {
            const C = e.getElementByKey(_);
            switch (w) {
              case "created":
                d.current.add(_), l(d.current.size > 0), C && v.observe(C);
                break;
              case "destroyed":
                d.current.delete(_), l(d.current.size > 0), v.disconnect(), d.current.forEach((T) => {
                  const k = e.getElementByKey(T);
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
  const y = (x) => {
    e.update(() => {
      if (m.current) {
        const _ = Qe(
          m.current
        );
        _ == null || _.selectEnd(), x ? (Vc(), a(!1)) : (Xc(), s(!1));
      }
    });
  };
  return t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    n && /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "et_table-add-rows",
        style: { ...u },
        onClick: () => y(!0)
      }
    ),
    i && /* @__PURE__ */ p.jsx(
      "button",
      {
        className: "et_table-add-columns",
        style: { ...u },
        onClick: () => y(!1)
      }
    )
  ] }) : null;
}
function V3(r) {
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
function X3({
  anchorElem: r = document.body
}) {
  return Fa() ? Zt(
    /* @__PURE__ */ p.jsx(Y3, { anchorElem: r }),
    r
  ) : null;
}
function J3(r) {
  const { step: e, autoMentionData: t, autoAfterMentionData: n, onChange: a = () => {
  } } = r, { historyState: i } = B4(), s = /* @__PURE__ */ p.jsx(ng, { children: "Enter text..." }), [o, l] = H(null), [u, c] = H(!1), [d, m] = H(!1), g = (v) => {
    v !== null && l(v);
  };
  return $(() => {
    const v = () => {
      const y = Un && window.matchMedia("(max-width: 1025px)").matches;
      y !== u && c(y);
    };
    return v(), window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v);
    };
  }, [u]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(M2, { setIsLinkEditMode: m }),
    /* @__PURE__ */ p.jsxs("div", { className: "editor-container", children: [
      /* @__PURE__ */ p.jsx(z5, {}),
      /* @__PURE__ */ p.jsx(Q4, {}),
      /* @__PURE__ */ p.jsx(y5, {}),
      /* @__PURE__ */ p.jsx($5, {}),
      /* @__PURE__ */ p.jsx(C2, {}),
      /* @__PURE__ */ p.jsx(b3, { step: e, autoData: t, afterAutoData: n }),
      /* @__PURE__ */ p.jsx(d5, {}),
      /* @__PURE__ */ p.jsx(o5, {}),
      /* @__PURE__ */ p.jsx(x3, { ignoreSelectionChange: !0, onChange: a }),
      /* @__PURE__ */ p.jsx(z4, { externalHistoryState: i }),
      /* @__PURE__ */ p.jsx(r5, {}),
      /* @__PURE__ */ p.jsx(
        V4,
        {
          contentEditable: /* @__PURE__ */ p.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ p.jsx("div", { className: "editor", ref: g, children: /* @__PURE__ */ p.jsx(ug, {}) }) }),
          placeholder: s,
          ErrorBoundary: Z4
        }
      ),
      /* @__PURE__ */ p.jsx(O2, {}),
      /* @__PURE__ */ p.jsx(D2, {}),
      /* @__PURE__ */ p.jsx(F2, { maxDepth: 7 }),
      /* @__PURE__ */ p.jsx(
        T5,
        {
          hasCellMerge: !0,
          hasCellBackgroundColor: !0
        }
      ),
      /* @__PURE__ */ p.jsx(O5, {}),
      /* @__PURE__ */ p.jsx(Og, {}),
      /* @__PURE__ */ p.jsx(Hg, {}),
      /* @__PURE__ */ p.jsx(a5, {}),
      /* @__PURE__ */ p.jsx(Jg, {}),
      /* @__PURE__ */ p.jsx(p2, {}),
      /* @__PURE__ */ p.jsx(g2, {}),
      /* @__PURE__ */ p.jsx(f2, {}),
      /* @__PURE__ */ p.jsx(rg, {}),
      /* @__PURE__ */ p.jsx(i2, {}),
      /* @__PURE__ */ p.jsx(Xg, {}),
      /* @__PURE__ */ p.jsx(B2, {}),
      /* @__PURE__ */ p.jsx(tg, {}),
      /* @__PURE__ */ p.jsx(s2, {}),
      /* @__PURE__ */ p.jsx(kg, {}),
      /* @__PURE__ */ p.jsx(Qg, {}),
      o && !u && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          t3,
          {
            anchorElem: o
          }
        ),
        /* @__PURE__ */ p.jsx(
          U2,
          {
            anchorElem: o,
            isLinkEditMode: d,
            setIsLinkEditMode: m
          }
        ),
        /* @__PURE__ */ p.jsx(X3, { anchorElem: o }),
        /* @__PURE__ */ p.jsx(
          N5,
          {
            anchorElem: o
          }
        ),
        /* @__PURE__ */ p.jsx(
          L5,
          {
            anchorElem: o,
            cellMerge: !0
          }
        )
      ] })
    ] })
  ] });
}
function Z3({ editorRef: r }) {
  const [e] = oe();
  return mt.useEffect(() => {
    typeof r == "function" ? r(e) : typeof r == "object" && (r.current = e);
  }, [e]), null;
}
function d6(r) {
  const {
    editorState: e,
    historyState: t,
    onChange: n,
    autoAfterMentionData: a = [],
    autoMentionData: i = [],
    step: s = 1,
    editorRef: o = { current: null }
  } = r;
  dn.prototype.defaultStep = s;
  const l = {
    editorState: e,
    namespace: "Doc App",
    editable: s === 1,
    theme: $1,
    onError: (u) => {
      console.log("Error:", u.message);
    },
    nodes: [...M4, dn]
  };
  return /* @__PURE__ */ p.jsxs(j1, { initialConfig: l, children: [
    /* @__PURE__ */ p.jsx(Z3, { editorRef: o }),
    /* @__PURE__ */ p.jsx(P4, { initHistoryState: t, children: /* @__PURE__ */ p.jsx("div", { className: "editor-shell", children: /* @__PURE__ */ p.jsx(J3, { step: s, autoAfterMentionData: a, autoMentionData: i, onChange: n }) }) })
  ] });
}
export {
  vg as $,
  G0 as A,
  lr as B,
  xr as C,
  Wn as D,
  Ta as E,
  N5 as F,
  Dm as G,
  Y4 as H,
  Fa as I,
  ih as J,
  Tn as K,
  Re as L,
  Bg as M,
  n6 as N,
  Un as O,
  ng as P,
  $1 as Q,
  ug as R,
  jg as S,
  Pr as T,
  l6 as U,
  pc as V,
  P1 as W,
  d6 as X,
  dn as Y,
  So as a,
  oe as b,
  a5 as c,
  d5 as d,
  o5 as e,
  z4 as f,
  Z4 as g,
  V4 as h,
  hf as i,
  p as j,
  i5 as k,
  i6 as l,
  r2 as m,
  Ac as n,
  Q4 as o,
  n2 as p,
  s6 as q,
  o6 as r,
  lm as s,
  Eg as t,
  B4 as u,
  ou as v,
  Fi as w,
  sg as x,
  E4 as y,
  K0 as z
};
