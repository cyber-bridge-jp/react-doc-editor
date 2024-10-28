var Hh = Object.defineProperty;
var Uh = (r, e, t) => e in r ? Hh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ne = (r, e, t) => Uh(r, typeof e != "symbol" ? e + "" : e, t);
import * as ft from "react";
import Qr, { createContext as Qs, useContext as Bu, useMemo as ht, useLayoutEffect as zr, useEffect as P, useState as U, useCallback as ae, Suspense as Pr, useRef as Re, forwardRef as ju } from "react";
import { createEditor as fa, $getRoot as Dt, $createParagraphNode as xe, $getSelection as z, $isElementNode as ge, $isRangeSelection as $, $isTextNode as Se, $isTokenOrSegmented as Bi, $getAdjacentNode as bs, $isDecoratorNode as br, $isRootNode as e0, $isRootOrShadowRoot as zt, $isLineBreakNode as pa, $getCharacterOffsets as Kh, $getPreviousSelection as t0, $splitNode as Wh, TextNode as cn, $applyNodeReplacement as lt, ElementNode as yt, $isTabNode as $u, $createTabNode as r0, $createLineBreakNode as ni, isHTMLElement as wr, isHTMLAnchorElement as Gh, createCommand as $e, $isLeafNode as qu, $isParagraphNode as dn, $createTextNode as Dr, INSERT_PARAGRAPH_COMMAND as oa, COMMAND_PRIORITY_LOW as ve, $isNodeSelection as gt, $createNodeSelection as Yh, $setSelection as Ct, $getNodeByKey as Mt, DecoratorNode as lr, KEY_BACKSPACE_COMMAND as ga, KEY_DELETE_COMMAND as va, CLICK_COMMAND as ba, ArtificialNode__DO_NOT_USE as Hu, $isBlockElementNode as ai, isBlockDomNode as To, isInlineDomNode as Ao, $cloneWithProperties as Uu, isDocumentFragment as Mo, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as Ku, $parseSerializedNode as Vh, COPY_COMMAND as Wu, COMMAND_PRIORITY_CRITICAL as pt, isSelectionWithinEditor as Xh, $getEditor as Jh, PASTE_COMMAND as Gu, isSelectionCapturedInDecoratorInput as Zh, COMMAND_PRIORITY_EDITOR as ye, CUT_COMMAND as Yu, SELECT_ALL_COMMAND as Qh, $selectAll as e1, DRAGOVER_COMMAND as gi, $getNearestNodeFromDOMNode as ot, DRAGSTART_COMMAND as n0, DROP_COMMAND as vi, $createRangeSelection as ya, $normalizeSelection__EXPERIMENTAL as a0, KEY_ESCAPE_COMMAND as Dn, KEY_ENTER_COMMAND as i0, INSERT_LINE_BREAK_COMMAND as Oo, DELETE_CHARACTER_COMMAND as ra, OUTDENT_CONTENT_COMMAND as ii, KEY_ARROW_RIGHT_COMMAND as bi, KEY_ARROW_LEFT_COMMAND as xa, KEY_ARROW_DOWN_COMMAND as hn, KEY_ARROW_UP_COMMAND as mn, INDENT_CONTENT_COMMAND as yi, INSERT_TAB_COMMAND as Vu, $insertNodes as Rn, FORMAT_ELEMENT_COMMAND as er, FORMAT_TEXT_COMMAND as bt, REMOVE_TEXT_COMMAND as t1, CONTROLLED_TEXT_INSERTION_COMMAND as Xu, DELETE_LINE_COMMAND as ys, DELETE_WORD_COMMAND as Ju, COMMAND_PRIORITY_HIGH as At, KEY_TAB_COMMAND as xi, FOCUS_COMMAND as Zu, SELECTION_CHANGE_COMMAND as Jt, $createRangeSelectionFromDom as r1, isCurrentlyReadOnlyMode as n1, $createPoint as Do, CAN_REDO_COMMAND as Jn, CAN_UNDO_COMMAND as Zn, CLEAR_HISTORY_COMMAND as a1, CLEAR_EDITOR_COMMAND as i1, REDO_COMMAND as Qu, UNDO_COMMAND as ec, TEXT_TYPE_TO_FORMAT as Zr, IS_CODE as s1, IS_HIGHLIGHT as o1, IS_SUBSCRIPT as l1, IS_SUPERSCRIPT as u1, IS_BOLD as c1, IS_ITALIC as d1, IS_UNDERLINE as Ro, IS_STRIKETHROUGH as Io, KEY_MODIFIER_COMMAND as h1, COMMAND_PRIORITY_NORMAL as m1, KEY_SPACE_COMMAND as f1, getNearestEditorFromDOMNode as p1 } from "lexical";
import * as la from "react-dom";
import { createPortal as ur, flushSync as g1 } from "react-dom";
var Fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xs = { exports: {} }, Gn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function v1() {
  if (Lo) return Gn;
  Lo = 1;
  var r = Qr, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, l, u) {
    var c, h = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (c in l) n.call(l, c) && !i.hasOwnProperty(c) && (h[c] = l[c]);
    if (o && o.defaultProps) for (c in l = o.defaultProps, l) h[c] === void 0 && (h[c] = l[c]);
    return { $$typeof: e, type: o, key: m, ref: g, props: h, _owner: a.current };
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
var zo;
function b1() {
  return zo || (zo = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Qr, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function x(M) {
      if (M === null || typeof M != "object")
        return null;
      var q = v && M[v] || M[y];
      return typeof q == "function" ? q : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(M) {
      {
        for (var q = arguments.length, Q = new Array(q > 1 ? q - 1 : 0), be = 1; be < q; be++)
          Q[be - 1] = arguments[be];
        C("error", M, Q);
      }
    }
    function C(M, q, Q) {
      {
        var be = S.ReactDebugCurrentFrame, De = be.getStackAddendum();
        De !== "" && (q += "%s", Q = Q.concat([De]));
        var Le = Q.map(function(Ne) {
          return String(Ne);
        });
        Le.unshift("Warning: " + q), Function.prototype.apply.call(console[M], console, Le);
      }
    }
    var E = !1, k = !1, A = !1, R = !1, I = !1, O;
    O = Symbol.for("react.module.reference");
    function F(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === i || I || M === a || M === u || M === c || R || M === g || E || k || A || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === h || M.$$typeof === s || M.$$typeof === o || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === O || M.getModuleId !== void 0));
    }
    function j(M, q, Q) {
      var be = M.displayName;
      if (be)
        return be;
      var De = q.displayName || q.name || "";
      return De !== "" ? Q + "(" + De + ")" : Q;
    }
    function V(M) {
      return M.displayName || "Context";
    }
    function X(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
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
      if (typeof M == "object")
        switch (M.$$typeof) {
          case o:
            var q = M;
            return V(q) + ".Consumer";
          case s:
            var Q = M;
            return V(Q._context) + ".Provider";
          case l:
            return j(M, M.render, "ForwardRef");
          case h:
            var be = M.displayName || null;
            return be !== null ? be : X(M.type) || "Memo";
          case m: {
            var De = M, Le = De._payload, Ne = De._init;
            try {
              return X(Ne(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Y = 0, he, ie, W, me, de, Oe, le;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function rt() {
      {
        if (Y === 0) {
          he = console.log, ie = console.info, W = console.warn, me = console.error, de = console.group, Oe = console.groupCollapsed, le = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        Y++;
      }
    }
    function Pe() {
      {
        if (Y--, Y === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, M, {
              value: he
            }),
            info: J({}, M, {
              value: ie
            }),
            warn: J({}, M, {
              value: W
            }),
            error: J({}, M, {
              value: me
            }),
            group: J({}, M, {
              value: de
            }),
            groupCollapsed: J({}, M, {
              value: Oe
            }),
            groupEnd: J({}, M, {
              value: le
            })
          });
        }
        Y < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ct = S.ReactCurrentDispatcher, Ve;
    function He(M, q, Q) {
      {
        if (Ve === void 0)
          try {
            throw Error();
          } catch (De) {
            var be = De.stack.trim().match(/\n( *(at )?)/);
            Ve = be && be[1] || "";
          }
        return `
` + Ve + M;
      }
    }
    var It = !1, xt;
    {
      var Qt = typeof WeakMap == "function" ? WeakMap : Map;
      xt = new Qt();
    }
    function ee(M, q) {
      if (!M || It)
        return "";
      {
        var Q = xt.get(M);
        if (Q !== void 0)
          return Q;
      }
      var be;
      It = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = ct.current, ct.current = null, rt();
      try {
        if (q) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (Nt) {
              be = Nt;
            }
            Reflect.construct(M, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (Nt) {
              be = Nt;
            }
            M.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nt) {
            be = Nt;
          }
          M();
        }
      } catch (Nt) {
        if (Nt && be && typeof Nt.stack == "string") {
          for (var Ee = Nt.stack.split(`
`), _t = be.stack.split(`
`), et = Ee.length - 1, nt = _t.length - 1; et >= 1 && nt >= 0 && Ee[et] !== _t[nt]; )
            nt--;
          for (; et >= 1 && nt >= 0; et--, nt--)
            if (Ee[et] !== _t[nt]) {
              if (et !== 1 || nt !== 1)
                do
                  if (et--, nt--, nt < 0 || Ee[et] !== _t[nt]) {
                    var $t = `
` + Ee[et].replace(" at new ", " at ");
                    return M.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", M.displayName)), typeof M == "function" && xt.set(M, $t), $t;
                  }
                while (et >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        It = !1, ct.current = Le, Pe(), Error.prepareStackTrace = De;
      }
      var bn = M ? M.displayName || M.name : "", $r = bn ? He(bn) : "";
      return typeof M == "function" && xt.set(M, $r), $r;
    }
    function we(M, q, Q) {
      return ee(M, !1);
    }
    function qe(M) {
      var q = M.prototype;
      return !!(q && q.isReactComponent);
    }
    function wt(M, q, Q) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return ee(M, qe(M));
      if (typeof M == "string")
        return He(M);
      switch (M) {
        case u:
          return He("Suspense");
        case c:
          return He("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case l:
            return we(M.render);
          case h:
            return wt(M.type, q, Q);
          case m: {
            var be = M, De = be._payload, Le = be._init;
            try {
              return wt(Le(De), q, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, dt = {}, Be = S.ReactDebugCurrentFrame;
    function Ft(M) {
      if (M) {
        var q = M._owner, Q = wt(M.type, M._source, q ? q.type : null);
        Be.setExtraStackFrame(Q);
      } else
        Be.setExtraStackFrame(null);
    }
    function jt(M, q, Q, be, De) {
      {
        var Le = Function.call.bind(Qe);
        for (var Ne in M)
          if (Le(M, Ne)) {
            var Ee = void 0;
            try {
              if (typeof M[Ne] != "function") {
                var _t = Error((be || "React class") + ": " + Q + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _t.name = "Invariant Violation", _t;
              }
              Ee = M[Ne](q, Ne, be, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Ee = et;
            }
            Ee && !(Ee instanceof Error) && (Ft(De), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", Q, Ne, typeof Ee), Ft(null)), Ee instanceof Error && !(Ee.message in dt) && (dt[Ee.message] = !0, Ft(De), w("Failed %s type: %s", Q, Ee.message), Ft(null));
          }
      }
    }
    var gn = Array.isArray;
    function Ri(M) {
      return gn(M);
    }
    function Sh(M) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, Q = q && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Q;
      }
    }
    function Ch(M) {
      try {
        return vo(M), !1;
      } catch {
        return !0;
      }
    }
    function vo(M) {
      return "" + M;
    }
    function bo(M) {
      if (Ch(M))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sh(M)), vo(M);
    }
    var Wn = S.ReactCurrentOwner, kh = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yo, xo, Ii;
    Ii = {};
    function Eh(M) {
      if (Qe.call(M, "ref")) {
        var q = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Nh(M) {
      if (Qe.call(M, "key")) {
        var q = Object.getOwnPropertyDescriptor(M, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Th(M, q) {
      if (typeof M.ref == "string" && Wn.current && q && Wn.current.stateNode !== q) {
        var Q = X(Wn.current.type);
        Ii[Q] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Wn.current.type), M.ref), Ii[Q] = !0);
      }
    }
    function Ah(M, q) {
      {
        var Q = function() {
          yo || (yo = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        Q.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Mh(M, q) {
      {
        var Q = function() {
          xo || (xo = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        Q.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Oh = function(M, q, Q, be, De, Le, Ne) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: M,
        key: q,
        ref: Q,
        props: Ne,
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
        value: be
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Dh(M, q, Q, be, De) {
      {
        var Le, Ne = {}, Ee = null, _t = null;
        Q !== void 0 && (bo(Q), Ee = "" + Q), Nh(q) && (bo(q.key), Ee = "" + q.key), Eh(q) && (_t = q.ref, Th(q, De));
        for (Le in q)
          Qe.call(q, Le) && !kh.hasOwnProperty(Le) && (Ne[Le] = q[Le]);
        if (M && M.defaultProps) {
          var et = M.defaultProps;
          for (Le in et)
            Ne[Le] === void 0 && (Ne[Le] = et[Le]);
        }
        if (Ee || _t) {
          var nt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          Ee && Ah(Ne, nt), _t && Mh(Ne, nt);
        }
        return Oh(M, Ee, _t, De, be, Wn.current, Ne);
      }
    }
    var Fi = S.ReactCurrentOwner, wo = S.ReactDebugCurrentFrame;
    function vn(M) {
      if (M) {
        var q = M._owner, Q = wt(M.type, M._source, q ? q.type : null);
        wo.setExtraStackFrame(Q);
      } else
        wo.setExtraStackFrame(null);
    }
    var Li;
    Li = !1;
    function zi(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function _o() {
      {
        if (Fi.current) {
          var M = X(Fi.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function Rh(M) {
      return "";
    }
    var So = {};
    function Ih(M) {
      {
        var q = _o();
        if (!q) {
          var Q = typeof M == "string" ? M : M.displayName || M.name;
          Q && (q = `

Check the top-level render call using <` + Q + ">.");
        }
        return q;
      }
    }
    function Co(M, q) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var Q = Ih(q);
        if (So[Q])
          return;
        So[Q] = !0;
        var be = "";
        M && M._owner && M._owner !== Fi.current && (be = " It was passed a child from " + X(M._owner.type) + "."), vn(M), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, be), vn(null);
      }
    }
    function ko(M, q) {
      {
        if (typeof M != "object")
          return;
        if (Ri(M))
          for (var Q = 0; Q < M.length; Q++) {
            var be = M[Q];
            zi(be) && Co(be, q);
          }
        else if (zi(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var De = x(M);
          if (typeof De == "function" && De !== M.entries)
            for (var Le = De.call(M), Ne; !(Ne = Le.next()).done; )
              zi(Ne.value) && Co(Ne.value, q);
        }
      }
    }
    function Fh(M) {
      {
        var q = M.type;
        if (q == null || typeof q == "string")
          return;
        var Q;
        if (typeof q == "function")
          Q = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === h))
          Q = q.propTypes;
        else
          return;
        if (Q) {
          var be = X(q);
          jt(Q, M.props, "prop", be, M);
        } else if (q.PropTypes !== void 0 && !Li) {
          Li = !0;
          var De = X(q);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lh(M) {
      {
        for (var q = Object.keys(M.props), Q = 0; Q < q.length; Q++) {
          var be = q[Q];
          if (be !== "children" && be !== "key") {
            vn(M), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), vn(null);
            break;
          }
        }
        M.ref !== null && (vn(M), w("Invalid attribute `ref` supplied to `React.Fragment`."), vn(null));
      }
    }
    var Eo = {};
    function No(M, q, Q, be, De, Le) {
      {
        var Ne = F(M);
        if (!Ne) {
          var Ee = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _t = Rh();
          _t ? Ee += _t : Ee += _o();
          var et;
          M === null ? et = "null" : Ri(M) ? et = "array" : M !== void 0 && M.$$typeof === e ? (et = "<" + (X(M.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : et = typeof M, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Ee);
        }
        var nt = Dh(M, q, Q, De, Le);
        if (nt == null)
          return nt;
        if (Ne) {
          var $t = q.children;
          if ($t !== void 0)
            if (be)
              if (Ri($t)) {
                for (var bn = 0; bn < $t.length; bn++)
                  ko($t[bn], M);
                Object.freeze && Object.freeze($t);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ko($t, M);
        }
        if (Qe.call(q, "key")) {
          var $r = X(M), Nt = Object.keys(q).filter(function(qh) {
            return qh !== "key";
          }), Pi = Nt.length > 0 ? "{key: someKey, " + Nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Eo[$r + Pi]) {
            var $h = Nt.length > 0 ? "{" + Nt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Pi, $r, $h, $r), Eo[$r + Pi] = !0;
          }
        }
        return M === n ? Lh(nt) : Fh(nt), nt;
      }
    }
    function zh(M, q, Q) {
      return No(M, q, Q, !0);
    }
    function Ph(M, q, Q) {
      return No(M, q, Q, !1);
    }
    var Bh = Ph, jh = zh;
    Yn.Fragment = n, Yn.jsx = Bh, Yn.jsxs = jh;
  }()), Yn;
}
process.env.NODE_ENV === "production" ? xs.exports = v1() : xs.exports = b1();
var p = xs.exports;
function y1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var x1 = y1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const tc = Qs(null);
function w1(r, e) {
  let t = null;
  return r != null && (t = r[1]), { getTheme: function() {
    return e ?? (t != null ? t.getTheme() : null);
  } };
}
function se() {
  const r = Bu(tc);
  return r == null && x1(8), r;
}
const rc = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, _1 = rc ? zr : P, Fa = { tag: "history-merge" };
function S1({ initialConfig: r, children: e }) {
  const t = ht(() => {
    const { theme: n, namespace: a, nodes: i, onError: s, editorState: o, html: l } = r, u = w1(null, n), c = fa({ editable: r.editable, html: l, namespace: a, nodes: i, onError: (h) => s(h, c), theme: n });
    return function(h, m) {
      if (m !== null) {
        if (m === void 0) h.update(() => {
          const g = Dt();
          if (g.isEmpty()) {
            const v = xe();
            g.append(v);
            const y = rc ? document.activeElement : null;
            (z() !== null || y !== null && y === h.getRootElement()) && v.select();
          }
        }, Fa);
        else if (m !== null) switch (typeof m) {
          case "string": {
            const g = h.parseEditorState(m);
            h.setEditorState(g, Fa);
            break;
          }
          case "object":
            h.setEditorState(m, Fa);
            break;
          case "function":
            h.update(() => {
              Dt().isEmpty() && m(h);
            }, Fa);
        }
      }
    }(c, o), [c, u];
  }, []);
  return _1(() => {
    const n = r.editable, [a] = t;
    a.setEditable(n === void 0 || n);
  }, []), p.jsx(tc.Provider, { value: t, children: e });
}
const C1 = {
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
function k1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var nc = k1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const si = /* @__PURE__ */ new Map();
function ac(r) {
  const e = {}, t = r.split(";");
  for (const n of t) if (n !== "") {
    const [a, i] = n.split(/:([^]+)/);
    a && i && (e[a.trim()] = i.trim());
  }
  return e;
}
function s0(r) {
  let e = si.get(r);
  return e === void 0 && (e = ac(r), si.set(r, e)), e;
}
function E1(r) {
  let e = "";
  for (const t in r) t && (e += `${t}: ${r[t]};`);
  return e;
}
function ic(r, e) {
  const t = r.getStartEndPoints();
  if (e.isSelected(r) && !e.isSegmented() && !e.isToken() && t !== null) {
    const [n, a] = t, i = r.isBackward(), s = n.getNode(), o = a.getNode(), l = e.is(s), u = e.is(o);
    if (l || u) {
      const [c, h] = Kh(r), m = s.is(o), g = e.is(i ? o : s), v = e.is(i ? s : o);
      let y, x = 0;
      return m ? (x = c > h ? h : c, y = c > h ? c : h) : g ? (x = i ? h : c, y = void 0) : v && (x = 0, y = i ? c : h), e.__text = e.__text.slice(x, y), e;
    }
  }
  return e;
}
function Po(r) {
  if (r.type === "text") return r.offset === r.getNode().getTextContentSize();
  const e = r.getNode();
  return ge(e) || nc(177), r.offset === e.getChildrenSize();
}
function N1(r) {
  const e = r.getStyle(), t = ac(e);
  si.set(e, t);
}
function yn(r, e) {
  const t = s0("getStyle" in r ? r.getStyle() : r.style), n = Object.entries(e).reduce((i, [s, o]) => (typeof o == "function" ? i[s] = o(t[s], r) : o === null ? delete i[s] : i[s] = o, i), { ...t }), a = E1(n);
  r.setStyle(a), si.set(a, n);
}
function o0(r, e) {
  const t = r.getNodes(), n = t.length, a = r.getStartEndPoints();
  if (a === null) return;
  const [i, s] = a, o = n - 1;
  let l = t[0], u = t[o];
  if (r.isCollapsed() && $(r)) return void yn(r, e);
  const c = l.getTextContent().length, h = s.offset;
  let m = i.offset;
  const g = i.isBefore(s);
  let v = g ? m : h, y = g ? h : m;
  const x = g ? i.type : s.type, S = g ? s.type : i.type, w = g ? s.key : i.key;
  if (Se(l) && v === c) {
    const C = l.getNextSibling();
    Se(C) && (m = 0, v = 0, l = C);
  }
  if (t.length === 1) {
    if (Se(l) && l.canHaveFormat()) {
      if (v = x === "element" ? 0 : m > h ? h : m, y = S === "element" ? c : m > h ? m : h, v === y) return;
      if (Bi(l) || v === 0 && y === c) yn(l, e), l.select(v, y);
      else {
        const C = l.splitText(v, y), E = v === 0 ? C[0] : C[1];
        yn(E, e), E.select(0, y - v);
      }
    }
  } else {
    if (Se(l) && v < l.getTextContentSize() && l.canHaveFormat() && (v === 0 || Bi(l) || (l = l.splitText(v)[1], v = 0, g ? i.set(l.getKey(), v, "text") : s.set(l.getKey(), v, "text")), yn(l, e)), Se(u) && u.canHaveFormat()) {
      const C = u.getTextContent().length;
      u.__key !== w && y !== 0 && (y = C), y === C || Bi(u) || ([u] = u.splitText(y)), y === 0 && S !== "element" || yn(u, e);
    }
    for (let C = 1; C < o; C++) {
      const E = t[C], k = E.getKey();
      Se(E) && E.canHaveFormat() && k !== l.getKey() && k !== u.getKey() && !E.isToken() && yn(E, e);
    }
  }
}
function Vr(r, e) {
  if (r === null) return;
  const t = r.getStartEndPoints(), n = t ? t[0] : null;
  if (n !== null && n.key === "root") {
    const s = e(), o = Dt(), l = o.getFirstChild();
    return void (l ? l.replace(s, !0) : o.append(s));
  }
  const a = r.getNodes(), i = n !== null && function(s, o) {
    let l = s;
    for (; l !== null && l.getParent() !== null && !o(l); ) l = l.getParentOrThrow();
    return o(l) ? l : null;
  }(n.getNode(), $o);
  i && a.indexOf(i) === -1 && a.push(i);
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    if (!$o(o)) continue;
    ge(o) || nc(178);
    const l = e();
    l.setFormat(o.getFormatType()), l.setIndent(o.getIndent()), o.replace(l, !0);
  }
}
function Bo(r, e) {
  const t = bs(r.focus, e);
  return br(t) && !t.isIsolated() || ge(t) && !t.isInline() && !t.canBeEmpty();
}
function T1(r, e, t, n) {
  r.modify(e ? "extend" : "move", t, n);
}
function sc(r) {
  const e = r.anchor.getNode();
  return (e0(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
}
function jo(r, e, t) {
  const n = sc(r);
  T1(r, e, t ? !n : n, "character");
}
function A1(r, e, t) {
  const n = s0(r.getStyle());
  return n !== null && n[e] || t;
}
function La(r, e, t = "") {
  let n = null;
  const a = r.getNodes(), i = r.anchor, s = r.focus, o = r.isBackward(), l = o ? s.offset : i.offset, u = o ? s.getNode() : i.getNode();
  if ($(r) && r.isCollapsed() && r.style !== "") {
    const c = s0(r.style);
    if (c !== null && e in c) return c[e];
  }
  for (let c = 0; c < a.length; c++) {
    const h = a[c];
    if ((c === 0 || l !== 0 || !h.is(u)) && Se(h)) {
      const m = A1(h, e, t);
      if (n === null) n = m;
      else if (n !== m) {
        n = "";
        break;
      }
    }
  }
  return n === null ? t : n;
}
function $o(r) {
  if (br(r) || !ge(r) || zt(r)) return !1;
  const e = r.getFirstChild(), t = e === null || pa(e) || Se(e) || e.isInline();
  return !r.isInline() && r.canBeEmpty() !== !1 && t;
}
function M1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var O1 = M1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const l0 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, D1 = l0 && "documentMode" in document ? document.documentMode : null, R1 = l0 && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!l0 || !("InputEvent" in window) || D1) && "getTargetRanges" in new window.InputEvent("input");
function oc(...r) {
  const e = [];
  for (const t of r) if (t && typeof t == "string") for (const [n] of t.matchAll(/\S+/g)) e.push(n);
  return e;
}
function Ie(...r) {
  return () => {
    for (let e = r.length - 1; e >= 0; e--) r[e]();
    r.length = 0;
  };
}
const I1 = R1;
function Je(r, ...e) {
  const t = oc(...e);
  t.length > 0 && r.classList.add(...t);
}
function fn(r, ...e) {
  const t = oc(...e);
  t.length > 0 && r.classList.remove(...t);
}
function lc(r, e) {
  for (const t of e) if (r.type.startsWith(t)) return !0;
  return !1;
}
function F1(r, e) {
  const t = r[Symbol.iterator]();
  return new Promise((n, a) => {
    const i = [], s = () => {
      const { done: o, value: l } = t.next();
      if (o) return n(i);
      const u = new FileReader();
      u.addEventListener("error", a), u.addEventListener("load", () => {
        const c = u.result;
        typeof c == "string" && i.push({ file: l, result: c }), s();
      }), lc(l, e) ? u.readAsDataURL(l) : s();
    };
    s();
  });
}
function uc(r, e) {
  let t = r;
  for (; t != null; ) {
    if (t instanceof e) return t;
    t = t.getParent();
  }
  return null;
}
function wi(r) {
  const e = fe(r, (t) => ge(t) && !t.isInline());
  return ge(e) || O1(4, r.__key), e;
}
const fe = (r, e) => {
  let t = r;
  for (; t !== Dt() && t != null; ) {
    if (e(t)) return t;
    t = t.getParent();
  }
  return null;
};
function Br(r) {
  const e = z() || t0();
  if ($(e)) {
    const { focus: t } = e, n = t.getNode(), a = t.offset;
    if (zt(n)) {
      const i = n.getChildAtIndex(a);
      i == null ? n.append(r) : i.insertBefore(r), r.selectNext();
    } else {
      let i, s;
      Se(n) ? (i = n.getParentOrThrow(), s = n.getIndexWithinParent(), a > 0 && (s += 1, n.splitText(a))) : (i = n, s = a);
      const [, o] = Wh(i, s);
      o.insertBefore(r), o.selectStart();
    }
  } else {
    if (e != null) {
      const n = e.getNodes();
      n[n.length - 1].getTopLevelElementOrThrow().insertAfter(r);
    } else
      Dt().append(r);
    const t = xe();
    r.insertAfter(t), t.select();
  }
  return r.getLatest();
}
function wa(r, e) {
  const t = e();
  return r.replace(t), t.append(r), t;
}
function vr(r, e) {
  return r !== null && Object.getPrototypeOf(r).constructor.name === e.name;
}
function L1(r, e) {
  const t = [];
  for (let n = 0; n < r.length; n++) {
    const a = e(r[n]);
    a !== null && t.push(a);
  }
  return t;
}
function z1(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function P1(r) {
  if (I1) return 1;
  let e = 1;
  for (; r; ) e *= Number(window.getComputedStyle(r).getPropertyValue("zoom")), r = r.parentElement;
  return e;
}
var B1 = { exports: {} };
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
        clone: function w(C, E) {
          E = E || {};
          var k, A;
          switch (o.util.type(C)) {
            case "Object":
              if (A = o.util.objId(C), E[A])
                return E[A];
              k = /** @type {Record<string, any>} */
              {}, E[A] = k;
              for (var R in C)
                C.hasOwnProperty(R) && (k[R] = w(C[R], E));
              return (
                /** @type {any} */
                k
              );
            case "Array":
              return A = o.util.objId(C), E[A] ? E[A] : (k = [], E[A] = k, /** @type {Array} */
              /** @type {any} */
              C.forEach(function(I, O) {
                k[O] = w(I, E);
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
              for (var E in C)
                if (C[E].src == w)
                  return C[E];
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
        isActive: function(w, C, E) {
          for (var k = "no-" + C; w; ) {
            var A = w.classList;
            if (A.contains(C))
              return !0;
            if (A.contains(k))
              return !1;
            w = w.parentElement;
          }
          return !!E;
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
          var E = o.util.clone(o.languages[w]);
          for (var k in C)
            E[k] = C[k];
          return E;
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
        insertBefore: function(w, C, E, k) {
          k = k || /** @type {any} */
          o.languages;
          var A = k[w], R = {};
          for (var I in A)
            if (A.hasOwnProperty(I)) {
              if (I == C)
                for (var O in E)
                  E.hasOwnProperty(O) && (R[O] = E[O]);
              E.hasOwnProperty(I) || (R[I] = A[I]);
            }
          var F = k[w];
          return k[w] = R, o.languages.DFS(o.languages, function(j, V) {
            V === F && j != w && (this[j] = R);
          }), R;
        },
        // Traverse a language definition with Depth First Search
        DFS: function w(C, E, k, A) {
          A = A || {};
          var R = o.util.objId;
          for (var I in C)
            if (C.hasOwnProperty(I)) {
              E.call(C, I, C[I], k || I);
              var O = C[I], F = o.util.type(O);
              F === "Object" && !A[R(O)] ? (A[R(O)] = !0, w(O, E, null, A)) : F === "Array" && !A[R(O)] && (A[R(O)] = !0, w(O, E, I, A));
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
      highlightAllUnder: function(w, C, E) {
        var k = {
          callback: E,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", k), k.elements = Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)), o.hooks.run("before-all-elements-highlight", k);
        for (var A = 0, R; R = k.elements[A++]; )
          o.highlightElement(R, C === !0, k.callback);
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
      highlightElement: function(w, C, E) {
        var k = o.util.getLanguage(w), A = o.languages[k];
        o.util.setLanguage(w, k);
        var R = w.parentElement;
        R && R.nodeName.toLowerCase() === "pre" && o.util.setLanguage(R, k);
        var I = w.textContent, O = {
          element: w,
          language: k,
          grammar: A,
          code: I
        };
        function F(V) {
          O.highlightedCode = V, o.hooks.run("before-insert", O), O.element.innerHTML = O.highlightedCode, o.hooks.run("after-highlight", O), o.hooks.run("complete", O), E && E.call(O.element);
        }
        if (o.hooks.run("before-sanity-check", O), R = O.element.parentElement, R && R.nodeName.toLowerCase() === "pre" && !R.hasAttribute("tabindex") && R.setAttribute("tabindex", "0"), !O.code) {
          o.hooks.run("complete", O), E && E.call(O.element);
          return;
        }
        if (o.hooks.run("before-highlight", O), !O.grammar) {
          F(o.util.encode(O.code));
          return;
        }
        if (C && n.Worker) {
          var j = new Worker(o.filename);
          j.onmessage = function(V) {
            F(V.data);
          }, j.postMessage(JSON.stringify({
            language: O.language,
            code: O.code,
            immediateClose: !0
          }));
        } else
          F(o.highlight(O.code, O.grammar, O.language));
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
      highlight: function(w, C, E) {
        var k = {
          code: w,
          grammar: C,
          language: E
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
        var E = C.rest;
        if (E) {
          for (var k in E)
            C[k] = E[k];
          delete C.rest;
        }
        var A = new h();
        return m(A, A.head, w), c(w, A, C, A.head, 0), v(A);
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
          var E = o.hooks.all;
          E[w] = E[w] || [], E[w].push(C);
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
          var E = o.hooks.all[w];
          if (!(!E || !E.length))
            for (var k = 0, A; A = E[k++]; )
              A(C);
        }
      },
      Token: l
    };
    n.Prism = o;
    function l(w, C, E, k) {
      this.type = w, this.content = C, this.alias = E, this.length = (k || "").length | 0;
    }
    l.stringify = function w(C, E) {
      if (typeof C == "string")
        return C;
      if (Array.isArray(C)) {
        var k = "";
        return C.forEach(function(F) {
          k += w(F, E);
        }), k;
      }
      var A = {
        type: C.type,
        content: w(C.content, E),
        tag: "span",
        classes: ["token", C.type],
        attributes: {},
        language: E
      }, R = C.alias;
      R && (Array.isArray(R) ? Array.prototype.push.apply(A.classes, R) : A.classes.push(R)), o.hooks.run("wrap", A);
      var I = "";
      for (var O in A.attributes)
        I += " " + O + '="' + (A.attributes[O] || "").replace(/"/g, "&quot;") + '"';
      return "<" + A.tag + ' class="' + A.classes.join(" ") + '"' + I + ">" + A.content + "</" + A.tag + ">";
    };
    function u(w, C, E, k) {
      w.lastIndex = C;
      var A = w.exec(E);
      if (A && k && A[1]) {
        var R = A[1].length;
        A.index += R, A[0] = A[0].slice(R);
      }
      return A;
    }
    function c(w, C, E, k, A, R) {
      for (var I in E)
        if (!(!E.hasOwnProperty(I) || !E[I])) {
          var O = E[I];
          O = Array.isArray(O) ? O : [O];
          for (var F = 0; F < O.length; ++F) {
            if (R && R.cause == I + "," + F)
              return;
            var j = O[F], V = j.inside, X = !!j.lookbehind, J = !!j.greedy, Y = j.alias;
            if (J && !j.pattern.global) {
              var he = j.pattern.toString().match(/[imsuy]*$/)[0];
              j.pattern = RegExp(j.pattern.source, he + "g");
            }
            for (var ie = j.pattern || j, W = k.next, me = A; W !== C.tail && !(R && me >= R.reach); me += W.value.length, W = W.next) {
              var de = W.value;
              if (C.length > w.length)
                return;
              if (!(de instanceof l)) {
                var Oe = 1, le;
                if (J) {
                  if (le = u(ie, me, w, X), !le || le.index >= w.length)
                    break;
                  var ct = le.index, Ze = le.index + le[0].length, rt = me;
                  for (rt += W.value.length; ct >= rt; )
                    W = W.next, rt += W.value.length;
                  if (rt -= W.value.length, me = rt, W.value instanceof l)
                    continue;
                  for (var Pe = W; Pe !== C.tail && (rt < Ze || typeof Pe.value == "string"); Pe = Pe.next)
                    Oe++, rt += Pe.value.length;
                  Oe--, de = w.slice(me, rt), le.index -= me;
                } else if (le = u(ie, 0, de, X), !le)
                  continue;
                var ct = le.index, Ve = le[0], He = de.slice(0, ct), It = de.slice(ct + Ve.length), xt = me + de.length;
                R && xt > R.reach && (R.reach = xt);
                var Qt = W.prev;
                He && (Qt = m(C, Qt, He), me += He.length), g(C, Qt, Oe);
                var ee = new l(I, V ? o.tokenize(Ve, V) : Ve, Y, Ve);
                if (W = m(C, Qt, ee), It && m(C, W, It), Oe > 1) {
                  var we = {
                    cause: I + "," + F,
                    reach: xt
                  };
                  c(w, C, E, W.prev, me, we), R && we.reach > R.reach && (R.reach = we.reach);
                }
              }
            }
          }
        }
    }
    function h() {
      var w = { value: null, prev: null, next: null }, C = { value: null, prev: w, next: null };
      w.next = C, this.head = w, this.tail = C, this.length = 0;
    }
    function m(w, C, E) {
      var k = C.next, A = { value: E, prev: C, next: k };
      return C.next = A, k.prev = A, w.length++, A;
    }
    function g(w, C, E) {
      for (var k = C.next, A = 0; A < E && k !== w.tail; A++)
        k = k.next;
      C.next = k, k.prev = C, w.length -= A;
    }
    function v(w) {
      for (var C = [], E = w.head.next; E !== w.tail; )
        C.push(E.value), E = E.next;
      return C;
    }
    if (!n.document)
      return n.addEventListener && (o.disableWorkerMessageHandler || n.addEventListener("message", function(w) {
        var C = JSON.parse(w.data), E = C.language, k = C.code, A = C.immediateClose;
        n.postMessage(o.highlight(k, o.languages[E], E)), A && n.close();
      }, !1)), o;
    var y = o.util.currentScript();
    y && (o.filename = y.src, y.hasAttribute("data-manual") && (o.manual = !0));
    function x() {
      o.manual || o.highlightAll();
    }
    if (!o.manual) {
      var S = document.readyState;
      S === "loading" || S === "interactive" && y && y.defer ? document.addEventListener("DOMContentLoaded", x) : window.requestAnimationFrame ? window.requestAnimationFrame(x) : window.setTimeout(x, 16);
    }
    return o;
  }(e);
  r.exports && (r.exports = t), typeof Fo < "u" && (Fo.Prism = t), t.languages.markup = {
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
    }, o = "data-src-status", l = "loading", u = "loaded", c = "failed", h = "pre[data-src]:not([" + o + '="' + u + '"]):not([' + o + '="' + l + '"])';
    function m(y, x, S) {
      var w = new XMLHttpRequest();
      w.open("GET", y, !0), w.onreadystatechange = function() {
        w.readyState == 4 && (w.status < 400 && w.responseText ? x(w.responseText) : w.status >= 400 ? S(a(w.status, w.statusText)) : S(i));
      }, w.send(null);
    }
    function g(y) {
      var x = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y || "");
      if (x) {
        var S = Number(x[1]), w = x[2], C = x[3];
        return w ? C ? [S, Number(C)] : [S, void 0] : [S, S];
      }
    }
    t.hooks.add("before-highlightall", function(y) {
      y.selector += ", " + h;
    }), t.hooks.add("before-sanity-check", function(y) {
      var x = (
        /** @type {HTMLPreElement} */
        y.element
      );
      if (x.matches(h)) {
        y.code = "", x.setAttribute(o, l);
        var S = x.appendChild(document.createElement("CODE"));
        S.textContent = n;
        var w = x.getAttribute("data-src"), C = y.language;
        if (C === "none") {
          var E = (/\.(\w+)$/.exec(w) || [, "none"])[1];
          C = s[E] || E;
        }
        t.util.setLanguage(S, C), t.util.setLanguage(x, C);
        var k = t.plugins.autoloader;
        k && k.loadLanguages(C), m(
          w,
          function(A) {
            x.setAttribute(o, u);
            var R = g(x.getAttribute("data-range"));
            if (R) {
              var I = A.split(/\r\n?|\n/g), O = R[0], F = R[1] == null ? I.length : R[1];
              O < 0 && (O += I.length), O = Math.max(0, Math.min(O - 1, I.length)), F < 0 && (F += I.length), F = Math.max(0, Math.min(F, I.length)), A = I.slice(O, F).join(`
`), x.hasAttribute("data-start") || x.setAttribute("data-start", String(O + 1));
            }
            S.textContent = A, t.highlightElement(S);
          },
          function(A) {
            x.setAttribute(o, c), S.textContent = A;
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
        for (var S = (x || document).querySelectorAll(h), w = 0, C; C = S[w++]; )
          t.highlightElement(C);
      }
    };
    var v = !1;
    t.fileHighlight = function() {
      v || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), v = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(B1);
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
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(h) {
      c !== h && (r.languages.markdown[c].inside.content.inside[h] = r.languages.markdown[h]);
    });
  }), r.hooks.add("after-tokenize", function(c) {
    if (c.language !== "markdown" && c.language !== "md")
      return;
    function h(m) {
      if (!(!m || typeof m == "string"))
        for (var g = 0, v = m.length; g < v; g++) {
          var y = m[g];
          if (y.type !== "code") {
            h(y.content);
            continue;
          }
          var x = y.content[1], S = y.content[3];
          if (x && S && x.type === "code-language" && S.type === "code-block" && typeof x.content == "string") {
            var w = x.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            w = (/[a-z][\w-]*/i.exec(w) || [""])[0].toLowerCase();
            var C = "language-" + w;
            S.alias ? typeof S.alias == "string" ? S.alias = [S.alias, C] : S.alias.push(C) : S.alias = [C];
          }
        }
    }
    h(c.tokens);
  }), r.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var h = "", m = 0, g = c.classes.length; m < g; m++) {
        var v = c.classes[m], y = /language-(.+)/.exec(v);
        if (y) {
          h = y[1];
          break;
        }
      }
      var x = r.languages[h];
      if (x)
        c.content = r.highlight(u(c.content), x, h);
      else if (h && h !== "none" && r.plugins.autoloader) {
        var S = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        c.attributes.id = S, r.plugins.autoloader.loadLanguages(h, function() {
          var w = document.getElementById(S);
          w && (w.innerHTML = r.highlight(w.textContent, r.languages[h], h));
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
    var h = c.replace(s, "");
    return h = h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, g) {
      if (g = g.toLowerCase(), g[0] === "#") {
        var v;
        return g[1] === "x" ? v = parseInt(g.slice(2), 16) : v = Number(g.slice(1)), l(v);
      } else {
        var y = o[g];
        return y || m;
      }
    }), h;
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
function j1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
j1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const $1 = globalThis.Prism || window.Prism, qo = (r) => {
  try {
    return !!r && $1.languages.hasOwnProperty(r);
  } catch {
    return !1;
  }
};
function cc(r, e) {
  for (const t of r.childNodes) {
    if (wr(t) && t.tagName === e) return !0;
    cc(t, e);
  }
  return !1;
}
const Qn = "data-language", za = "data-highlight-language";
let u0 = class dc extends yt {
  static getType() {
    return "code";
  }
  static clone(e) {
    return new dc(e.__language, e.__key);
  }
  constructor(e, t) {
    super(t), this.__language = e, this.__isSyntaxHighlightSupported = qo(e);
  }
  createDOM(e) {
    const t = document.createElement("code");
    Je(t, e.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(Qn, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(za, n)), t;
  }
  updateDOM(e, t, n) {
    const a = this.__language, i = e.__language;
    return a ? a !== i && (t.setAttribute(Qn, a), this.__isSyntaxHighlightSupported && t.setAttribute(za, a)) : i && (t.removeAttribute(Qn), e.__isSyntaxHighlightSupported && t.removeAttribute(za)), !1;
  }
  exportDOM(e) {
    const t = document.createElement("pre");
    Je(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
    const n = this.getLanguage();
    return n && (t.setAttribute(Qn, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(za, n)), { element: t };
  }
  static importDOM() {
    return { code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || cc(e, "BR")) ? { conversion: Ho, priority: 1 } : null, div: () => ({ conversion: H1, priority: 1 }), pre: () => ({ conversion: Ho, priority: 0 }), table: (e) => ji(e) ? { conversion: U1, priority: 3 } : null, td: (e) => {
      const t = e, n = t.closest("table");
      return t.classList.contains("js-file-line") || n && ji(n) ? { conversion: Uo, priority: 3 } : null;
    }, tr: (e) => {
      const t = e.closest("table");
      return t && ji(t) ? { conversion: Uo, priority: 3 } : null;
    } };
  }
  static importJSON(e) {
    const t = en(e.language);
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
      let l = K1(o);
      const u = [];
      for (; ; ) if ($u(l)) u.push(r0()), l = l.getNextSibling();
      else {
        if (!c0(l)) break;
        {
          let x = 0;
          const S = l.getTextContent(), w = l.getTextContentSize();
          for (; x < w && S[x] === " "; ) x++;
          if (x !== 0 && u.push(fc(" ".repeat(x))), x !== w) break;
          l = l.getNextSibling();
        }
      }
      const c = o.splitText(i.offset)[0], h = i.offset === 0 ? 0 : 1, m = c.getIndexWithinParent() + h, g = o.getParentOrThrow(), v = [ni(), ...u];
      g.splice(m, 0, v);
      const y = u[u.length - 1];
      y ? y.select() : i.offset === 0 ? c.selectPrevious() : c.getNextSibling().selectNext(0, 0);
    }
    if (q1(o)) {
      const { offset: l } = e.anchor;
      o.splice(l, 0, [ni()]), o.select(l + 1, l + 1);
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
    t.__language = e, t.__isSyntaxHighlightSupported = qo(e);
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
};
function en(r) {
  return lt(new u0(r));
}
function q1(r) {
  return r instanceof u0;
}
function Ho(r) {
  return { node: en(r.getAttribute(Qn)) };
}
function H1(r) {
  const e = r, t = Ko(e);
  return t || function(n) {
    let a = n.parentElement;
    for (; a !== null; ) {
      if (Ko(a)) return !0;
      a = a.parentElement;
    }
    return !1;
  }(e) ? { node: t ? en() : null } : { node: null };
}
function U1() {
  return { node: en() };
}
function Uo() {
  return { node: null };
}
function Ko(r) {
  return r.style.fontFamily.match("monospace") !== null;
}
function ji(r) {
  return r.classList.contains("js-file-line-container");
}
let hc = class mc extends cn {
  constructor(e, t, n) {
    super(e, n), this.__highlightType = t;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(e) {
    return new mc(e.__text, e.__highlightType || void 0, e.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(e) {
    const t = super.createDOM(e), n = $i(e.theme, this.__highlightType);
    return Je(t, n), t;
  }
  updateDOM(e, t, n) {
    const a = super.updateDOM(e, t, n), i = $i(n.theme, e.__highlightType), s = $i(n.theme, this.__highlightType);
    return i !== s && (i && fn(t, i), s && Je(t, s)), a;
  }
  static importJSON(e) {
    const t = fc(e.text, e.highlightType);
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
    return en();
  }
};
function $i(r, e) {
  return e && r && r.codeHighlight && r.codeHighlight[e];
}
function fc(r, e) {
  return lt(new hc(r, e));
}
function c0(r) {
  return r instanceof hc;
}
function K1(r) {
  let e = r, t = r;
  for (; c0(t) || $u(t); ) e = t, t = t.getPreviousSibling();
  return e;
}
let pc = class gc extends cn {
  static getType() {
    return "hashtag";
  }
  static clone(e) {
    return new gc(e.__text, e.__key);
  }
  constructor(e, t) {
    super(e, t);
  }
  createDOM(e) {
    const t = super.createDOM(e);
    return Je(t, e.theme.hashtag), t;
  }
  static importJSON(e) {
    const t = W1(e.text);
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
function W1(r = "") {
  return lt(new pc(r));
}
const G1 = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
let In = class vc extends yt {
  static getType() {
    return "link";
  }
  static clone(e) {
    return new vc(e.__url, { rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
  }
  constructor(e, t = {}, n) {
    super(n);
    const { target: a = null, rel: i = null, title: s = null } = t;
    this.__url = e, this.__target = a, this.__rel = i, this.__title = s;
  }
  createDOM(e) {
    const t = document.createElement("a");
    return t.href = this.sanitizeUrl(this.__url), this.__target !== null && (t.target = this.__target), this.__rel !== null && (t.rel = this.__rel), this.__title !== null && (t.title = this.__title), Je(t, e.theme.link), t;
  }
  updateDOM(e, t, n) {
    if (t instanceof HTMLAnchorElement) {
      const a = this.__url, i = this.__target, s = this.__rel, o = this.__title;
      a !== e.__url && (t.href = a), i !== e.__target && (i ? t.target = i : t.removeAttribute("target")), s !== e.__rel && (s ? t.rel = s : t.removeAttribute("rel")), o !== e.__title && (o ? t.title = o : t.removeAttribute("title"));
    }
    return !1;
  }
  static importDOM() {
    return { a: (e) => ({ conversion: Y1, priority: 1 }) };
  }
  static importJSON(e) {
    const t = ua(e.url, { rel: e.rel, target: e.target, title: e.title });
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  sanitizeUrl(e) {
    try {
      const t = new URL(e);
      if (!G1.has(t.protocol)) return "about:blank";
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
    const n = ua(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
    if (!$(t)) return !1;
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
function Y1(r) {
  let e = null;
  if (Gh(r)) {
    const t = r.textContent;
    (t !== null && t !== "" || r.children.length > 0) && (e = ua(r.getAttribute("href") || "", { rel: r.getAttribute("rel"), target: r.getAttribute("target"), title: r.getAttribute("title") }));
  }
  return { node: e };
}
function ua(r, e) {
  return lt(new In(r, e));
}
function it(r) {
  return r instanceof In;
}
let _a = class bc extends In {
  constructor(e, t = {}, n) {
    super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(e) {
    return new bc(e.__url, { isUnlinked: e.__isUnlinked, rel: e.__rel, target: e.__target, title: e.__title }, e.__key);
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
    const t = ws(e.url, { isUnlinked: e.isUnlinked, rel: e.rel, target: e.target, title: e.title });
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
    if (ge(n)) {
      const a = ws(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return n.append(a), a;
    }
    return null;
  }
};
function ws(r, e) {
  return lt(new _a(r, e));
}
function gr(r) {
  return r instanceof _a;
}
const ir = $e("TOGGLE_LINK_COMMAND");
function qi(r, e = {}) {
  const { target: t, title: n } = e, a = e.rel === void 0 ? "noreferrer" : e.rel, i = z();
  if (!$(i)) return;
  const s = i.extract();
  if (r === null) s.forEach((o) => {
    const l = fe(o, (u) => !gr(u) && it(u));
    if (l) {
      const u = l.getChildren();
      for (let c = 0; c < u.length; c++) l.insertBefore(u[c]);
      l.remove();
    }
  });
  else {
    if (s.length === 1) {
      const u = function(c, h) {
        let m = c;
        for (; m !== null && m.getParent() !== null && !h(m); ) m = m.getParentOrThrow();
        return h(m) ? m : null;
      }(s[0], it);
      if (u !== null) return u.setURL(r), t !== void 0 && u.setTarget(t), a !== null && u.setRel(a), void (n !== void 0 && u.setTitle(n));
    }
    let o = null, l = null;
    s.forEach((u) => {
      const c = u.getParent();
      if (c !== l && c !== null && (!ge(u) || u.isInline())) {
        if (it(c)) return l = c, c.setURL(r), t !== void 0 && c.setTarget(t), a !== null && l.setRel(a), void (n !== void 0 && l.setTitle(n));
        if (c.is(o) || (o = c, l = ua(r, { rel: a, target: t, title: n }), it(c) ? u.getPreviousSibling() === null ? c.insertBefore(l) : c.insertAfter(l) : u.insertBefore(l)), it(u)) {
          if (u.is(l)) return;
          if (l !== null) {
            const h = u.getChildren();
            for (let m = 0; m < h.length; m++) l.append(h[m]);
          }
          u.remove();
        } else l !== null && l.append(u);
      }
    });
  }
}
function V1(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rr = V1(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function _s(r) {
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
function Ss(r) {
  let e = r.getParent();
  ke(e) || rr(40);
  let t = e;
  for (; t !== null; ) t = t.getParent(), ke(t) && (e = t);
  return e;
}
function yc(r) {
  let e = [];
  const t = r.getChildren().filter(Fe);
  for (let n = 0; n < t.length; n++) {
    const a = t[n], i = a.getFirstChild();
    ke(i) ? e = e.concat(yc(i)) : e.push(a);
  }
  return e;
}
function nr(r) {
  return Fe(r) && ke(r.getFirstChild());
}
function Wo(r) {
  return Pt().append(r);
}
function xc(r, e) {
  return Fe(r) && (e.length === 0 || e.length === 1 && r.is(e[0]) && r.getChildrenSize() === 0);
}
function Cs(r, e) {
  r.update(() => {
    const t = z();
    if (t !== null) {
      const n = t.getNodes();
      if ($(t)) {
        const i = t.getStartEndPoints();
        i === null && rr(143);
        const [s] = i, o = s.getNode(), l = o.getParent();
        if (xc(o, n)) {
          const u = Ot(e);
          if (zt(l)) {
            o.replace(u);
            const c = Pt();
            ge(o) && (c.setFormat(o.getFormatType()), c.setIndent(o.getIndent())), u.append(c);
          } else if (Fe(o)) {
            const c = o.getParentOrThrow();
            tn(u, c.getChildren()), c.replace(u);
          }
          return;
        }
      }
      const a = /* @__PURE__ */ new Set();
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (!ge(s) || !s.isEmpty() || Fe(s) || a.has(s.getKey())) {
          if (qu(s)) {
            let o = s.getParent();
            for (; o != null; ) {
              const l = o.getKey();
              if (ke(o)) {
                if (!a.has(l)) {
                  const u = Ot(e);
                  tn(u, o.getChildren()), o.replace(u), a.add(l);
                }
                break;
              }
              {
                const u = o.getParent();
                if (zt(u) && !a.has(l)) {
                  a.add(l), Go(o, e);
                  break;
                }
                o = u;
              }
            }
          }
        } else Go(s, e);
      }
    }
  });
}
function tn(r, e) {
  r.splice(r.getChildrenSize(), 0, e);
}
function Go(r, e) {
  if (ke(r)) return r;
  const t = r.getPreviousSibling(), n = r.getNextSibling(), a = Pt();
  if (a.setFormat(r.getFormatType()), a.setIndent(r.getIndent()), tn(a, r.getChildren()), ke(t) && e === t.getListType()) return t.append(a), r.remove(), ke(n) && e === n.getListType() && (tn(t, n.getChildren()), n.remove()), t;
  if (ke(n) && e === n.getListType()) return n.getFirstChildOrThrow().insertBefore(a), r.remove(), n;
  {
    const i = Ot(e);
    return i.append(a), r.replace(i), i;
  }
}
function d0(r, e) {
  const t = r.getLastChild(), n = e.getFirstChild();
  t && n && nr(t) && nr(n) && (d0(t.getFirstChild(), n.getFirstChild()), n.remove());
  const a = e.getChildren();
  a.length > 0 && r.append(...a), e.remove();
}
function X1(r) {
  r.update(() => {
    const e = z();
    if ($(e)) {
      const t = /* @__PURE__ */ new Set(), n = e.getNodes(), a = e.anchor.getNode();
      if (xc(a, n)) t.add(Ss(a));
      else for (let i = 0; i < n.length; i++) {
        const s = n[i];
        if (qu(s)) {
          const o = uc(s, Sa);
          o != null && t.add(Ss(o));
        }
      }
      for (const i of t) {
        let s = i;
        const o = yc(i);
        for (const l of o) {
          const u = xe();
          tn(u, l.getChildren()), s.insertAfter(u), s = u, l.__key === e.anchor.key && e.anchor.set(u.getKey(), 0, "element"), l.__key === e.focus.key && e.focus.set(u.getKey(), 0, "element"), l.remove();
        }
        i.remove();
      }
    }
  });
}
function J1(r) {
  const e = /* @__PURE__ */ new Set();
  if (nr(r) || e.has(r.getKey())) return;
  const t = r.getParent(), n = r.getNextSibling(), a = r.getPreviousSibling();
  if (nr(n) && nr(a)) {
    const i = a.getFirstChild();
    if (ke(i)) {
      i.append(r);
      const s = n.getFirstChild();
      ke(s) && (tn(i, s.getChildren()), n.remove(), e.add(n.getKey()));
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
function Z1(r) {
  if (nr(r)) return;
  const e = r.getParent(), t = e ? e.getParent() : void 0;
  if (ke(t ? t.getParent() : void 0) && Fe(t) && ke(e)) {
    const n = e ? e.getFirstChild() : void 0, a = e ? e.getLastChild() : void 0;
    if (r.is(n)) t.insertBefore(r), e.isEmpty() && t.remove();
    else if (r.is(a)) t.insertAfter(r), e.isEmpty() && t.remove();
    else {
      const i = e.getListType(), s = Pt(), o = Ot(i);
      s.append(o), r.getPreviousSiblings().forEach((c) => o.append(c));
      const l = Pt(), u = Ot(i);
      l.append(u), tn(u, r.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(r);
    }
  }
}
function Q1() {
  const r = z();
  if (!$(r) || !r.isCollapsed()) return !1;
  const e = r.anchor.getNode();
  if (!Fe(e) || e.getChildrenSize() !== 0) return !1;
  const t = Ss(e), n = e.getParent();
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
    if (dn(i)) i.insertAfter(o);
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
function oi(...r) {
  const e = [];
  for (const t of r) if (t && typeof t == "string") for (const [n] of t.matchAll(/\S+/g)) e.push(n);
  return e;
}
let Sa = class wc extends yt {
  static getType() {
    return "listitem";
  }
  static clone(e) {
    return new wc(e.__value, e.__checked, e.__key);
  }
  constructor(e, t, n) {
    super(n), this.__value = e === void 0 ? 1 : e, this.__checked = t;
  }
  createDOM(e) {
    const t = document.createElement("li"), n = this.getParent();
    return ke(n) && n.getListType() === "check" && Vo(t, this, null), t.value = this.__value, Yo(t, e.theme, this), t;
  }
  updateDOM(e, t, n) {
    const a = this.getParent();
    return ke(a) && a.getListType() === "check" && Vo(t, this, e), t.value = this.__value, Yo(t, n.theme, this), !1;
  }
  static transform() {
    return (e) => {
      if (Fe(e) || rr(144), e.__checked == null) return;
      const t = e.getParent();
      ke(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: em, priority: 0 }) };
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
      if (ge(n) && this.canMergeWith(n)) {
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
    return t && (ge(e) || rr(139), this.getChildren().forEach((a) => {
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
    super.remove(e), t && n && nr(t) && nr(n) && (d0(t.getFirstChild(), n.getFirstChild()), n.remove());
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
    for (; t !== e; ) t < e ? (J1(this), t++) : (Z1(this), t--);
    return this;
  }
  canInsertAfter(e) {
    return Fe(e);
  }
  canReplaceWith(e) {
    return Fe(e);
  }
  canMergeWith(e) {
    return dn(e) || Fe(e);
  }
  extractWithChild(e, t) {
    if (!$(t)) return !1;
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
function Yo(r, e, t) {
  const n = [], a = [], i = e.list, s = i ? i.listitem : void 0;
  let o;
  if (i && i.nested && (o = i.nested.listitem), s !== void 0 && n.push(...oi(s)), i) {
    const l = t.getParent(), u = ke(l) && l.getListType() === "check", c = t.getChecked();
    u && !c || a.push(i.listitemUnchecked), u && c || a.push(i.listitemChecked), u && n.push(c ? i.listitemChecked : i.listitemUnchecked);
  }
  if (o !== void 0) {
    const l = oi(o);
    t.getChildren().some((u) => ke(u)) ? n.push(...l) : a.push(...l);
  }
  a.length > 0 && fn(r, ...a), n.length > 0 && Je(r, ...n);
}
function Vo(r, e, t, n) {
  ke(e.getFirstChild()) ? (r.removeAttribute("role"), r.removeAttribute("tabIndex"), r.removeAttribute("aria-checked")) : (r.setAttribute("role", "checkbox"), r.setAttribute("tabIndex", "-1"), t && e.__checked === t.__checked || r.setAttribute("aria-checked", e.getChecked() ? "true" : "false"));
}
function em(r) {
  if (r.classList.contains("task-list-item")) {
    for (const t of r.children) if (t.tagName === "INPUT") return tm(t);
  }
  const e = r.getAttribute("aria-checked");
  return { node: Pt(e === "true" || e !== "false" && void 0) };
}
function tm(r) {
  return r.getAttribute("type") !== "checkbox" ? { node: null } : { node: Pt(r.hasAttribute("checked")) };
}
function Pt(r) {
  return lt(new Sa(void 0, r));
}
function Fe(r) {
  return r instanceof Sa;
}
let Ca = class _c extends yt {
  static getType() {
    return "list";
  }
  static clone(e) {
    const t = e.__listType || Zo[e.__tag];
    return new _c(t, e.__start, e.__key);
  }
  constructor(e, t, n) {
    super(n);
    const a = Zo[e] || e;
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
    return this.__start !== 1 && a.setAttribute("start", String(this.__start)), a.__lexicalListType = this.__listType, Xo(a, e.theme, this), a;
  }
  updateDOM(e, t, n) {
    return e.__tag !== this.__tag || (Xo(t, n.theme, this), !1);
  }
  static transform() {
    return (e) => {
      ke(e) || rr(163), function(t) {
        const n = t.getNextSibling();
        ke(n) && t.getListType() === n.getListType() && d0(t, n);
      }(e), function(t) {
        const n = t.getListType() !== "check";
        let a = t.getStart();
        for (const i of t.getChildren()) Fe(i) && (i.getValue() !== a && i.setValue(a), n && i.getLatest().__checked != null && i.setChecked(void 0), ke(i.getFirstChild()) || a++);
      }(e);
    };
  }
  static importDOM() {
    return { ol: () => ({ conversion: Jo, priority: 0 }), ul: () => ({ conversion: Jo, priority: 0 }) };
  }
  static importJSON(e) {
    const t = Ot(e.listType, e.start);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    return t && wr(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
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
        else if (ge(n)) {
          const i = Dr(n.getTextContent());
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
function Xo(r, e, t) {
  const n = [], a = [], i = e.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], o = _s(t) - 1, l = o % s.length, u = s[l], c = i[t.__tag];
    let h;
    const m = i.nested, g = i.checklist;
    if (m !== void 0 && m.list && (h = m.list), c !== void 0 && n.push(c), g !== void 0 && t.__listType === "check" && n.push(g), u !== void 0) {
      n.push(...oi(u));
      for (let v = 0; v < s.length; v++) v !== l && a.push(t.__tag + v);
    }
    if (h !== void 0) {
      const v = oi(h);
      o > 1 ? n.push(...v) : a.push(...v);
    }
  }
  a.length > 0 && fn(r, ...a), n.length > 0 && Je(r, ...n);
}
function rm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    if (Fe(n)) {
      e.push(n);
      const a = n.getChildren();
      a.length > 1 && a.forEach((i) => {
        ke(i) && e.push(Wo(i));
      });
    } else e.push(Wo(n));
  }
  return e;
}
function Jo(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e === "ol" ? t = Ot("number", r.start) : e === "ul" && (t = function(n) {
    if (n.getAttribute("__lexicallisttype") === "check" || n.classList.contains("contains-task-list")) return !0;
    for (const a of n.childNodes) if (wr(a) && a.hasAttribute("aria-checked")) return !0;
    return !1;
  }(r) ? Ot("check") : Ot("bullet")), { after: rm, node: t };
}
const Zo = { ol: "number", ul: "bullet" };
function Ot(r, e = 1) {
  return lt(new Ca(r, e));
}
function ke(r) {
  return r instanceof Ca;
}
const h0 = $e("INSERT_UNORDERED_LIST_COMMAND"), m0 = $e("INSERT_ORDERED_LIST_COMMAND"), f0 = $e("INSERT_CHECK_LIST_COMMAND"), nm = $e("REMOVE_LIST_COMMAND");
function am(r) {
  return Ie(r.registerCommand(m0, () => (Cs(r, "number"), !0), ve), r.registerCommand(h0, () => (Cs(r, "bullet"), !0), ve), r.registerCommand(nm, () => (X1(r), !0), ve), r.registerCommand(oa, () => !!Q1(), ve));
}
let p0 = class Sc extends yt {
  static getType() {
    return "mark";
  }
  static clone(e) {
    return new Sc(Array.from(e.__ids), e.__key);
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    const t = Qo(e.ids);
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
    return Je(t, e.theme.mark), this.__ids.length > 1 && Je(t, e.theme.markOverlap), t;
  }
  updateDOM(e, t, n) {
    const a = e.__ids, i = this.__ids, s = a.length, o = i.length, l = n.theme.markOverlap;
    return s !== o && (s === 1 ? o === 2 && Je(t, l) : o === 1 && fn(t, l)), !1;
  }
  hasID(e) {
    const t = this.getIDs();
    for (let n = 0; n < t.length; n++) if (e === t[n]) return !0;
    return !1;
  }
  getIDs() {
    const e = this.getLatest();
    return Hi(e) ? e.__ids : [];
  }
  addID(e) {
    const t = this.getWritable();
    if (Hi(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return;
      n.push(e);
    }
  }
  deleteID(e) {
    const t = this.getWritable();
    if (Hi(t)) {
      const n = t.__ids;
      t.__ids = n;
      for (let a = 0; a < n.length; a++) if (e === n[a]) return void n.splice(a, 1);
    }
  }
  insertNewAfter(e, t = !0) {
    const n = Qo(this.__ids);
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
    if (!$(t) || n === "html") return !1;
    const a = t.anchor, i = t.focus, s = a.getNode(), o = i.getNode(), l = t.isBackward() ? a.offset - i.offset : i.offset - a.offset;
    return this.isParentOf(s) && this.isParentOf(o) && this.getTextContent().length === l;
  }
  excludeFromCopy(e) {
    return e !== "clone";
  }
};
function Qo(r) {
  return lt(new p0(r));
}
function Hi(r) {
  return r instanceof p0;
}
function im(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var sm = im(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let g0 = class Cc extends yt {
  static getType() {
    return "overflow";
  }
  static clone(e) {
    return new Cc(e.__key);
  }
  static importJSON(e) {
    return om();
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
      lm(e) || sm(204), e.isEmpty() && e.remove();
    };
  }
};
function om() {
  return lt(new g0());
}
function lm(r) {
  return r instanceof g0;
}
function el(r, e) {
  return r.getEditorState().read(() => {
    const t = Mt(e);
    return t !== null && t.isSelected();
  });
}
function v0(r) {
  const [e] = se(), [t, n] = U(() => el(e, r));
  return P(() => {
    let a = !0;
    const i = e.registerUpdateListener(() => {
      a && n(el(e, r));
    });
    return () => {
      a = !1, i();
    };
  }, [e, r]), [t, ae((a) => {
    e.update(() => {
      let i = z();
      gt(i) || (i = Yh(), Ct(i)), gt(i) && (a ? i.add(r) : i.delete(r));
    });
  }, [e, r]), ae(() => {
    e.update(() => {
      const a = z();
      gt(a) && a.clear();
    });
  }, [e])];
}
const b0 = $e("INSERT_HORIZONTAL_RULE_COMMAND");
function um({ nodeKey: r }) {
  const [e] = se(), [t, n, a] = v0(r), i = ae((s) => {
    const o = z();
    return t && gt(o) && (s.preventDefault(), e.update(() => {
      o.getNodes().forEach((l) => {
        dm(l) && l.remove();
      });
    })), !1;
  }, [e, t]);
  return P(() => Ie(e.registerCommand(ba, (s) => {
    const o = e.getElementByKey(r);
    return s.target === o && (s.shiftKey || a(), n(!t), !0);
  }, ve), e.registerCommand(va, i, ve), e.registerCommand(ga, i, ve)), [a, e, t, r, i, n]), P(() => {
    const s = e.getElementByKey(r), o = "selected";
    s !== null && (t ? Je(s, o) : fn(s, o));
  }, [e, t, r]), null;
}
let y0 = class kc extends lr {
  static getType() {
    return "horizontalrule";
  }
  static clone(e) {
    return new kc(e.__key);
  }
  static importJSON(e) {
    return x0();
  }
  static importDOM() {
    return { hr: () => ({ conversion: cm, priority: 0 }) };
  }
  exportJSON() {
    return { type: "horizontalrule", version: 1 };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(e) {
    const t = document.createElement("hr");
    return Je(t, e.theme.hr), t;
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
    return p.jsx(um, { nodeKey: this.__key });
  }
};
function cm() {
  return { node: x0() };
}
function x0() {
  return lt(new y0());
}
function dm(r) {
  return r instanceof y0;
}
function hm(r, e) {
  const t = e.body ? e.body.childNodes : [];
  let n = [];
  const a = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Nc.has(s.nodeName)) {
      const o = Tc(s, r, a, !1);
      o !== null && (n = n.concat(o));
    }
  }
  return function(i) {
    for (const s of i) s.getNextSibling() instanceof Hu && s.insertAfter(ni());
    for (const s of i) {
      const o = s.getChildren();
      for (const l of o) s.insertBefore(l);
      s.remove();
    }
  }(a), n;
}
function mm(r, e) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), n = Dt().getChildren();
  for (let a = 0; a < n.length; a++)
    Ec(r, n[a], t, e);
  return t.innerHTML;
}
function Ec(r, e, t, n = null) {
  let a = n === null || e.isSelected(n);
  const i = ge(e) && e.excludeFromCopy("html");
  let s = e;
  if (n !== null) {
    let g = Uu(e);
    g = Se(g) && n !== null ? ic(n, g) : g, s = g;
  }
  const o = ge(s) ? s.getChildren() : [], l = r._nodes.get(s.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(r, s) : s.exportDOM(r);
  const { element: c, after: h } = u;
  if (!c) return !1;
  const m = document.createDocumentFragment();
  for (let g = 0; g < o.length; g++) {
    const v = o[g], y = Ec(r, v, m, n);
    !a && ge(e) && y && e.extractWithChild(v, n, "html") && (a = !0);
  }
  if (a && !i) {
    if ((wr(c) || Mo(c)) && c.append(m), t.append(c), h) {
      const g = h.call(s, c);
      g && (Mo(c) ? c.replaceChildren(g) : c.replaceWith(g));
    }
  } else t.append(m);
  return a;
}
const Nc = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Tc(r, e, t, n, a = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (Nc.has(r.nodeName)) return s;
  let o = null;
  const l = function(v, y) {
    const { nodeName: x } = v, S = y._htmlConversions.get(x.toLowerCase());
    let w = null;
    if (S !== void 0) for (const C of S) {
      const E = C(v);
      E !== null && (w === null || (w.priority || 0) < (E.priority || 0)) && (w = E);
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
  const h = r.childNodes;
  let m = [];
  const g = (o == null || !zt(o)) && (o != null && ai(o) || n);
  for (let v = 0; v < h.length; v++) m.push(...Tc(h[v], e, t, g, new Map(a), o));
  return c != null && (m = c(m)), To(r) && (m = fm(r, m, g ? () => {
    const v = new Hu();
    return t.push(v), v;
  } : xe)), o == null ? m.length > 0 ? s = s.concat(m) : To(r) && function(v) {
    return v.nextSibling == null || v.previousSibling == null ? !1 : Ao(v.nextSibling) && Ao(v.previousSibling);
  }(r) && (s = s.concat(ni())) : ge(o) && o.append(...m), s;
}
function fm(r, e, t) {
  const n = r.style.textAlign, a = [];
  let i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ai(o)) n && !o.getFormat() && o.setFormat(n), a.push(o);
    else if (i.push(o), s === e.length - 1 || s < e.length - 1 && ai(e[s + 1])) {
      const l = t();
      l.setFormat(n), l.append(...i), a.push(l), i = [];
    }
  }
  return a;
}
function pm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var li = pm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const gm = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ac = (r) => gm ? (r || window).getSelection() : null;
function vm(r, e = z()) {
  return e == null && li(166), $(e) && e.isCollapsed() || e.getNodes().length === 0 ? "" : mm(r, e);
}
function bm(r, e = z()) {
  return e == null && li(166), $(e) && e.isCollapsed() || e.getNodes().length === 0 ? null : JSON.stringify(ym(r, e));
}
function g3(r, e) {
  const t = r.getData("text/plain") || r.getData("text/uri-list");
  t != null && e.insertRawText(t);
}
function tl(r, e, t) {
  const n = r.getData("application/x-lexical-editor");
  if (n) try {
    const s = JSON.parse(n);
    if (s.namespace === t._config.namespace && Array.isArray(s.nodes))
      return rl(t, xm(s.nodes), e);
  } catch {
  }
  const a = r.getData("text/html");
  if (a) try {
    const s = new DOMParser().parseFromString(a, "text/html");
    return rl(t, hm(t, s), e);
  } catch {
  }
  const i = r.getData("text/plain") || r.getData("text/uri-list");
  if (i != null) if ($(e)) {
    const s = i.split(/(\r?\n|\t)/);
    s[s.length - 1] === "" && s.pop();
    for (let o = 0; o < s.length; o++) {
      const l = z();
      if ($(l)) {
        const u = s[o];
        u === `
` || u === `\r
` ? l.insertParagraph() : u === "	" ? l.insertNodes([r0()]) : l.insertText(u);
      }
    }
  } else e.insertRawText(i);
}
function rl(r, e, t) {
  r.dispatchCommand(Ku, { nodes: e, selection: t }) || t.insertNodes(e);
}
function Mc(r, e, t, n = []) {
  let a = e === null || t.isSelected(e);
  const i = ge(t) && t.excludeFromCopy("html");
  let s = t;
  if (e !== null) {
    let u = Uu(t);
    u = Se(u) && e !== null ? ic(e, u) : u, s = u;
  }
  const o = ge(s) ? s.getChildren() : [], l = function(u) {
    const c = u.exportJSON(), h = u.constructor;
    if (c.type !== h.getType() && li(58, h.name), ge(u)) {
      const m = c.children;
      Array.isArray(m) || li(59, h.name);
    }
    return c;
  }(s);
  if (Se(s)) {
    const u = s.__text;
    u.length > 0 ? l.text = u : a = !1;
  }
  for (let u = 0; u < o.length; u++) {
    const c = o[u], h = Mc(r, e, c, l.children);
    !a && ge(t) && h && t.extractWithChild(c, e, "clone") && (a = !0);
  }
  if (a && !i) n.push(l);
  else if (Array.isArray(l.children)) for (let u = 0; u < l.children.length; u++) {
    const c = l.children[u];
    n.push(c);
  }
  return a;
}
function ym(r, e) {
  const t = [], n = Dt().getChildren();
  for (let a = 0; a < n.length; a++)
    Mc(r, e, n[a], t);
  return { namespace: r._config.namespace, nodes: t };
}
function xm(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t], a = Vh(n);
    Se(a) && N1(a), e.push(a);
  }
  return e;
}
let xn = null;
async function ks(r, e, t) {
  if (xn !== null) return !1;
  if (e !== null) return new Promise((l, u) => {
    r.update(() => {
      l(nl(r, e, t));
    });
  });
  const n = r.getRootElement(), a = r._window == null ? window.document : r._window.document, i = Ac(r._window);
  if (n === null || i === null) return !1;
  const s = a.createElement("span");
  s.style.cssText = "position: fixed; top: -1000px;", s.append(a.createTextNode("#")), n.append(s);
  const o = new Range();
  return o.setStart(s, 0), o.setEnd(s, 1), i.removeAllRanges(), i.addRange(o), new Promise((l, u) => {
    const c = r.registerCommand(Wu, (h) => (vr(h, ClipboardEvent) && (c(), xn !== null && (window.clearTimeout(xn), xn = null), l(nl(r, h, t))), !0), pt);
    xn = window.setTimeout(() => {
      c(), xn = null, l(!1);
    }, 50), a.execCommand("copy"), s.remove();
  });
}
function nl(r, e, t) {
  if (t === void 0) {
    const a = Ac(r._window);
    if (!a) return !1;
    const i = a.anchorNode, s = a.focusNode;
    if (i !== null && s !== null && !Xh(r, i, s)) return !1;
    const o = z();
    if (o === null) return !1;
    t = Oc(o);
  }
  e.preventDefault();
  const n = e.clipboardData;
  return n !== null && (_m(n, t), !0);
}
const wm = [["text/html", vm], ["application/x-lexical-editor", bm]];
function Oc(r = z()) {
  const e = { "text/plain": r ? r.getTextContent() : "" };
  if (r) {
    const t = Jh();
    for (const [n, a] of wm) {
      const i = a(t, r);
      i !== null && (e[n] = i);
    }
  }
  return e;
}
function _m(r, e) {
  for (const t in e) {
    const n = e[t];
    n !== void 0 && r.setData(t, n);
  }
}
function al(r, e) {
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
const Fn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Sm = Fn && "documentMode" in document ? document.documentMode : null, Cm = !(!Fn || !("InputEvent" in window) || Sm) && "getTargetRanges" in new window.InputEvent("input"), km = Fn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Em = Fn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Nm = Fn && /^(?=.*Chrome).*/i.test(navigator.userAgent), Tm = Fn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Nm, Es = $e("DRAG_DROP_PASTE_FILE");
class ka extends yt {
  static getType() {
    return "quote";
  }
  static clone(e) {
    return new ka(e.__key);
  }
  constructor(e) {
    super(e);
  }
  createDOM(e) {
    const t = document.createElement("blockquote");
    return Je(t, e.theme.quote), t;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (e) => ({ conversion: Mm, priority: 0 }) };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (t && wr(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const n = this.getFormatType();
      t.style.textAlign = n;
      const a = this.getDirection();
      a && (t.dir = a);
    }
    return { element: t };
  }
  static importJSON(e) {
    const t = _i();
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
function _i() {
  return lt(new ka());
}
function Am(r) {
  return r instanceof ka;
}
class Ea extends yt {
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
      Je(n, i);
    }
    return n;
  }
  updateDOM(e, t) {
    return !1;
  }
  static importDOM() {
    return { h1: (e) => ({ conversion: wn, priority: 0 }), h2: (e) => ({ conversion: wn, priority: 0 }), h3: (e) => ({ conversion: wn, priority: 0 }), h4: (e) => ({ conversion: wn, priority: 0 }), h5: (e) => ({ conversion: wn, priority: 0 }), h6: (e) => ({ conversion: wn, priority: 0 }), p: (e) => {
      const t = e.firstChild;
      return t !== null && il(t) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (e) => il(e) ? { conversion: (t) => ({ node: Xr("h1") }), priority: 3 } : null };
  }
  exportDOM(e) {
    const { element: t } = super.exportDOM(e);
    if (t && wr(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const n = this.getFormatType();
      t.style.textAlign = n;
      const a = this.getDirection();
      a && (t.dir = a);
    }
    return { element: t };
  }
  static importJSON(e) {
    const t = Xr(e.tag);
    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t;
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag(), type: "heading", version: 1 };
  }
  insertNewAfter(e, t = !0) {
    const n = e ? e.anchor.offset : 0, a = this.getLastDescendant(), i = !a || e && e.anchor.key === a.getKey() && n === a.getTextContentSize() || !e ? xe() : Xr(this.getTag()), s = this.getDirection();
    if (i.setDirection(s), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
      const o = xe();
      o.select(), this.replace(o, !0);
    }
    return i;
  }
  collapseAtStart() {
    const e = this.isEmpty() ? xe() : Xr(this.getTag());
    return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
  }
  extractWithChild() {
    return !0;
  }
}
function il(r) {
  return r.nodeName.toLowerCase() === "span" && r.style.fontSize === "26pt";
}
function wn(r) {
  const e = r.nodeName.toLowerCase();
  let t = null;
  return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6" || (t = Xr(e), r.style !== null && t.setFormat(r.style.textAlign)), { node: t };
}
function Mm(r) {
  const e = _i();
  return r.style !== null && e.setFormat(r.style.textAlign), { node: e };
}
function Xr(r) {
  return lt(new Ea(r));
}
function sl(r) {
  return r instanceof Ea;
}
function Cn(r) {
  let e = null;
  if (vr(r, DragEvent) ? e = r.dataTransfer : vr(r, ClipboardEvent) && (e = r.clipboardData), e === null) return [!1, [], !1];
  const t = e.types, n = t.includes("Files"), a = t.includes("text/html") || t.includes("text/plain");
  return [n, Array.from(e.files), a];
}
function ol(r) {
  const e = z();
  if (!$(e)) return !1;
  const t = /* @__PURE__ */ new Set(), n = e.getNodes();
  for (let a = 0; a < n.length; a++) {
    const i = n[a], s = i.getKey();
    if (t.has(s)) continue;
    const o = fe(i, (u) => ge(u) && !u.isInline());
    if (o === null) continue;
    const l = o.getKey();
    o.canIndent() && !t.has(l) && (t.add(l), r(o));
  }
  return t.size > 0;
}
function Pa(r) {
  const e = ot(r);
  return br(e);
}
function Om(r) {
  return Ie(r.registerCommand(ba, (e) => {
    const t = z();
    return !!gt(t) && (t.clear(), !0);
  }, 0), r.registerCommand(ra, (e) => {
    const t = z();
    return !!$(t) && (t.deleteCharacter(e), !0);
  }, ye), r.registerCommand(Ju, (e) => {
    const t = z();
    return !!$(t) && (t.deleteWord(e), !0);
  }, ye), r.registerCommand(ys, (e) => {
    const t = z();
    return !!$(t) && (t.deleteLine(e), !0);
  }, ye), r.registerCommand(Xu, (e) => {
    const t = z();
    if (typeof e == "string") t !== null && t.insertText(e);
    else {
      if (t === null) return !1;
      const n = e.dataTransfer;
      if (n != null) tl(n, t, r);
      else if ($(t)) {
        const a = e.data;
        return a && t.insertText(a), !0;
      }
    }
    return !0;
  }, ye), r.registerCommand(t1, () => {
    const e = z();
    return !!$(e) && (e.removeText(), !0);
  }, ye), r.registerCommand(bt, (e) => {
    const t = z();
    return !!$(t) && (t.formatText(e), !0);
  }, ye), r.registerCommand(er, (e) => {
    const t = z();
    if (!$(t) && !gt(t)) return !1;
    const n = t.getNodes();
    for (const a of n) {
      const i = fe(a, (s) => ge(s) && !s.isInline());
      i !== null && i.setFormat(e);
    }
    return !0;
  }, ye), r.registerCommand(Oo, (e) => {
    const t = z();
    return !!$(t) && (t.insertLineBreak(e), !0);
  }, ye), r.registerCommand(oa, () => {
    const e = z();
    return !!$(e) && (e.insertParagraph(), !0);
  }, ye), r.registerCommand(Vu, () => (Rn([r0()]), !0), ye), r.registerCommand(yi, () => ol((e) => {
    const t = e.getIndent();
    e.setIndent(t + 1);
  }), ye), r.registerCommand(ii, () => ol((e) => {
    const t = e.getIndent();
    t > 0 && e.setIndent(t - 1);
  }), ye), r.registerCommand(mn, (e) => {
    const t = z();
    if (gt(t) && !Pa(e.target)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectPrevious(), !0;
    } else if ($(t)) {
      const n = bs(t.focus, !0);
      if (!e.shiftKey && br(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
    }
    return !1;
  }, ye), r.registerCommand(hn, (e) => {
    const t = z();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return n[0].selectNext(0, 0), !0;
    } else if ($(t)) {
      if (function(a) {
        const i = a.focus;
        return i.key === "root" && i.offset === Dt().getChildrenSize();
      }(t)) return e.preventDefault(), !0;
      const n = bs(t.focus, !1);
      if (!e.shiftKey && br(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
    }
    return !1;
  }, ye), r.registerCommand(xa, (e) => {
    const t = z();
    if (gt(t)) {
      const n = t.getNodes();
      if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
    }
    if (!$(t)) return !1;
    if (Bo(t, !0)) {
      const n = e.shiftKey;
      return e.preventDefault(), jo(t, n, !0), !0;
    }
    return !1;
  }, ye), r.registerCommand(bi, (e) => {
    const t = z();
    if (gt(t) && !Pa(e.target)) {
      const a = t.getNodes();
      if (a.length > 0) return e.preventDefault(), a[0].selectNext(0, 0), !0;
    }
    if (!$(t)) return !1;
    const n = e.shiftKey;
    return !!Bo(t, !1) && (e.preventDefault(), jo(t, n, !1), !0);
  }, ye), r.registerCommand(ga, (e) => {
    if (Pa(e.target)) return !1;
    const t = z();
    if (!$(t)) return !1;
    e.preventDefault();
    const { anchor: n } = t, a = n.getNode();
    return t.isCollapsed() && n.offset === 0 && !e0(a) && wi(a).getIndent() > 0 ? r.dispatchCommand(ii, void 0) : r.dispatchCommand(ra, !0);
  }, ye), r.registerCommand(va, (e) => {
    if (Pa(e.target)) return !1;
    const t = z();
    return !!$(t) && (e.preventDefault(), r.dispatchCommand(ra, !1));
  }, ye), r.registerCommand(i0, (e) => {
    const t = z();
    if (!$(t)) return !1;
    if (e !== null) {
      if ((Em || km || Tm) && Cm) return !1;
      if (e.preventDefault(), e.shiftKey) return r.dispatchCommand(Oo, !1);
    }
    return r.dispatchCommand(oa, void 0);
  }, ye), r.registerCommand(Dn, () => {
    const e = z();
    return !!$(e) && (r.blur(), !0);
  }, ye), r.registerCommand(vi, (e) => {
    const [, t] = Cn(e);
    if (t.length > 0) {
      const a = al(e.clientX, e.clientY);
      if (a !== null) {
        const { offset: i, node: s } = a, o = ot(s);
        if (o !== null) {
          const l = ya();
          if (Se(o)) l.anchor.set(o.getKey(), i, "text"), l.focus.set(o.getKey(), i, "text");
          else {
            const c = o.getParentOrThrow().getKey(), h = o.getIndexWithinParent() + 1;
            l.anchor.set(c, h, "element"), l.focus.set(c, h, "element");
          }
          const u = a0(l);
          Ct(u);
        }
        r.dispatchCommand(Es, t);
      }
      return e.preventDefault(), !0;
    }
    const n = z();
    return !!$(n);
  }, ye), r.registerCommand(n0, (e) => {
    const [t] = Cn(e), n = z();
    return !(t && !$(n));
  }, ye), r.registerCommand(gi, (e) => {
    const [t] = Cn(e), n = z();
    if (t && !$(n)) return !1;
    const a = al(e.clientX, e.clientY);
    if (a !== null) {
      const i = ot(a.node);
      br(i) && e.preventDefault();
    }
    return !0;
  }, ye), r.registerCommand(Qh, () => (e1(), !0), ye), r.registerCommand(Wu, (e) => (ks(r, vr(e, ClipboardEvent) ? e : null), !0), ye), r.registerCommand(Yu, (e) => (async function(t, n) {
    await ks(n, vr(t, ClipboardEvent) ? t : null), n.update(() => {
      const a = z();
      $(a) ? a.removeText() : gt(a) && a.getNodes().forEach((i) => i.remove());
    });
  }(e, r), !0), ye), r.registerCommand(Gu, (e) => {
    const [, t, n] = Cn(e);
    return t.length > 0 && !n ? (r.dispatchCommand(Es, t), !0) : Zh(e.target) ? !1 : z() !== null && (function(a, i) {
      a.preventDefault(), i.update(() => {
        const s = z(), o = vr(a, InputEvent) || vr(a, KeyboardEvent) ? null : a.clipboardData;
        o != null && s !== null && tl(o, s, i);
      }, { tag: "paste" });
    }(e, r), !0);
  }, ye));
}
const Dc = /^(\d+(?:\.\d+)?)px$/, Ue = { BOTH: 3, COLUMN: 2, NO_STATUS: 0, ROW: 1 };
class sr extends yt {
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
    return { td: (e) => ({ conversion: ll, priority: 0 }), th: (e) => ({ conversion: ll, priority: 0 }) };
  }
  static importJSON(e) {
    const t = e.colSpan || 1, n = e.rowSpan || 1;
    return Zt(e.headerState, t, e.width || void 0).setRowSpan(n).setBackgroundColor(e.backgroundColor || null);
  }
  constructor(e = Ue.NO_STATUS, t = 1, n, a) {
    super(a), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = n, this.__backgroundColor = null;
  }
  createDOM(e) {
    const t = document.createElement(this.getTag());
    return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), Je(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
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
  setHeaderStyles(e, t = Ue.BOTH) {
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
    return this.getLatest().__headerState !== Ue.NO_STATUS;
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
function ll(r) {
  const e = r, t = r.nodeName.toLowerCase();
  let n;
  Dc.test(e.style.width) && (n = parseFloat(e.style.width));
  const a = Zt(t === "th" ? Ue.ROW : Ue.NO_STATUS, e.colSpan, n);
  a.__rowSpan = e.rowSpan;
  const i = e.style.backgroundColor;
  i !== "" && (a.__backgroundColor = i);
  const s = e.style, o = s.textDecoration.split(" "), l = s.fontWeight === "700" || s.fontWeight === "bold", u = o.includes("line-through"), c = s.fontStyle === "italic", h = o.includes("underline");
  return { after: (m) => (m.length === 0 && m.push(xe()), m), forChild: (m, g) => {
    if (re(g) && !ge(m)) {
      const v = xe();
      return pa(m) && m.getTextContent() === `
` ? null : (Se(m) && (l && m.toggleFormat("bold"), u && m.toggleFormat("strikethrough"), c && m.toggleFormat("italic"), h && m.toggleFormat("underline")), v.append(m), v);
    }
    return m;
  }, node: a };
}
function Zt(r, e = 1, t) {
  return lt(new sr(r, e, t));
}
function re(r) {
  return r instanceof sr;
}
const w0 = $e("INSERT_TABLE_COMMAND");
function Dm(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ce = Dm(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
const Rm = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
class Ln extends yt {
  static getType() {
    return "tablerow";
  }
  static clone(e) {
    return new Ln(e.__height, e.__key);
  }
  static importDOM() {
    return { tr: (e) => ({ conversion: Im, priority: 0 }) };
  }
  static importJSON(e) {
    return ca(e.height);
  }
  constructor(e, t) {
    super(t), this.__height = e;
  }
  exportJSON() {
    return { ...super.exportJSON(), ...this.getHeight() && { height: this.getHeight() }, type: "tablerow", version: 1 };
  }
  createDOM(e) {
    const t = document.createElement("tr");
    return this.__height && (t.style.height = `${this.__height}px`), Je(t, e.theme.tableRow), t;
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
function Im(r) {
  const e = r;
  let t;
  return Dc.test(e.style.height) && (t = parseFloat(e.style.height)), { node: ca(t) };
}
function ca(r) {
  return lt(new Ln(r));
}
function Ye(r) {
  return r instanceof Ln;
}
function Fm(r, e, t = !0) {
  const n = C0();
  for (let a = 0; a < r; a++) {
    const i = ca();
    for (let s = 0; s < e; s++) {
      let o = Ue.NO_STATUS;
      typeof t == "object" ? (a === 0 && t.rows && (o |= Ue.ROW), s === 0 && t.columns && (o |= Ue.COLUMN)) : t && (a === 0 && (o |= Ue.ROW), s === 0 && (o |= Ue.COLUMN));
      const l = Zt(o), u = xe();
      u.append(Dr()), l.append(u), i.append(l);
    }
    n.append(i);
  }
  return n;
}
function Lm(r) {
  const e = fe(r, (t) => re(t));
  return re(e) ? e : null;
}
function Rc(r) {
  const e = fe(r, (t) => Ye(t));
  if (Ye(e)) return e;
  throw new Error("Expected table cell to be inside of table row.");
}
function Ar(r) {
  const e = fe(r, (t) => st(t));
  if (st(e)) return e;
  throw new Error("Expected table cell to be inside of table.");
}
function Ic(r) {
  const e = Rc(r);
  return Ar(e).getChildren().findIndex((t) => t.is(e));
}
function Fc(r) {
  return Rc(r).getChildren().findIndex((e) => e.is(r));
}
const Ns = (r, e) => r === Ue.BOTH || r === e ? e : Ue.NO_STATUS;
function zm(r = !0) {
  const e = z();
  $(e) || Te(e) || Ce(188);
  const t = e.focus.getNode(), [n, , a] = vt(t), [i, s] = Kt(a, n, n), o = i[0].length, { startRow: l } = s;
  if (r) {
    const u = l + n.__rowSpan - 1, c = i[u], h = ca();
    for (let g = 0; g < o; g++) {
      const { cell: v, startRow: y } = c[g];
      if (y + v.__rowSpan - 1 <= u) {
        const x = c[g].cell.__headerState, S = Ns(x, Ue.COLUMN);
        h.append(Zt(S).append(xe()));
      } else v.setRowSpan(v.__rowSpan + 1);
    }
    const m = a.getChildAtIndex(u);
    Ye(m) || Ce(145), m.insertAfter(h);
  } else {
    const u = i[l], c = ca();
    for (let m = 0; m < o; m++) {
      const { cell: g, startRow: v } = u[m];
      if (v === l) {
        const y = u[m].cell.__headerState, x = Ns(y, Ue.COLUMN);
        c.append(Zt(x).append(xe()));
      } else g.setRowSpan(g.__rowSpan + 1);
    }
    const h = a.getChildAtIndex(l);
    Ye(h) || Ce(145), h.insertBefore(c);
  }
}
function Pm(r = !0) {
  const e = z();
  $(e) || Te(e) || Ce(188);
  const t = e.anchor.getNode(), n = e.focus.getNode(), [a] = vt(t), [i, , s] = vt(n), [o, l, u] = Kt(s, i, a), c = o.length, h = r ? Math.max(l.startColumn, u.startColumn) : Math.min(l.startColumn, u.startColumn), m = r ? h + i.__colSpan - 1 : h - 1, g = s.getFirstChild();
  Ye(g) || Ce(120);
  let v = null;
  function y(w = Ue.NO_STATUS) {
    const C = Zt(w).append(xe());
    return v === null && (v = C), C;
  }
  let x = g;
  e: for (let w = 0; w < c; w++) {
    if (w !== 0) {
      const O = x.getNextSibling();
      Ye(O) || Ce(121), x = O;
    }
    const C = o[w], E = C[m < 0 ? 0 : m].cell.__headerState, k = Ns(E, Ue.ROW);
    if (m < 0) {
      _0(x, y(k));
      continue;
    }
    const { cell: A, startColumn: R, startRow: I } = C[m];
    if (R + A.__colSpan - 1 <= m) {
      let O = A, F = I, j = m;
      for (; F !== w && O.__rowSpan > 1; ) {
        if (j -= A.__colSpan, !(j >= 0)) {
          x.append(y(k));
          continue e;
        }
        {
          const { cell: V, startRow: X } = C[j];
          O = V, F = X;
        }
      }
      O.insertAfter(y(k));
    } else A.setColSpan(A.__colSpan + 1);
  }
  v !== null && da(v);
  const S = s.getColWidths();
  if (S) {
    const w = [...S], C = m < 0 ? 0 : m, E = w[C];
    w.splice(C, 0, E), s.setColWidths(w);
  }
}
function Bm() {
  const r = z();
  $(r) || Te(r) || Ce(188);
  const e = r.anchor.getNode(), t = r.focus.getNode(), [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Kt(a, n, i), { startRow: u } = o, { startRow: c } = l, h = c + i.__rowSpan - 1;
  if (s.length === h - u + 1) return void a.remove();
  const m = s[0].length, g = s[h + 1], v = a.getChildAtIndex(h + 1);
  for (let y = h; y >= u; y--) {
    for (let S = m - 1; S >= 0; S--) {
      const { cell: w, startRow: C, startColumn: E } = s[y][S];
      if (E === S && (y === u && C < u && w.setRowSpan(w.__rowSpan - (C - u)), C >= u && C + w.__rowSpan - 1 > h)) if (w.setRowSpan(w.__rowSpan - (h - C + 1)), v === null && Ce(122), S === 0) _0(v, w);
      else {
        const { cell: k } = g[S - 1];
        k.insertAfter(w);
      }
    }
    const x = a.getChildAtIndex(y);
    Ye(x) || Ce(206, String(y)), x.remove();
  }
  if (g !== void 0) {
    const { cell: y } = g[0];
    da(y);
  } else {
    const y = s[u - 1], { cell: x } = y[0];
    da(x);
  }
}
function jm() {
  const r = z();
  $(r) || Te(r) || Ce(188);
  const e = r.anchor.getNode(), t = r.focus.getNode(), [n, , a] = vt(e), [i] = vt(t), [s, o, l] = Kt(a, n, i), { startColumn: u } = o, { startRow: c, startColumn: h } = l, m = Math.min(u, h), g = Math.max(u + n.__colSpan - 1, h + i.__colSpan - 1), v = g - m + 1;
  if (s[0].length === g - m + 1) return a.selectPrevious(), void a.remove();
  const y = s.length;
  for (let C = 0; C < y; C++) for (let E = m; E <= g; E++) {
    const { cell: k, startColumn: A } = s[C][E];
    if (A < m) {
      if (E === m) {
        const R = m - A;
        k.setColSpan(k.__colSpan - Math.min(v, k.__colSpan - R));
      }
    } else if (A + k.__colSpan - 1 > g) {
      if (E === g) {
        const R = g - A + 1;
        k.setColSpan(k.__colSpan - R);
      }
    } else k.remove();
  }
  const x = s[c], S = u > h ? x[u + n.__colSpan] : x[h + i.__colSpan];
  if (S !== void 0) {
    const { cell: C } = S;
    da(C);
  } else {
    const C = h < u ? x[h - 1] : x[u - 1], { cell: E } = C;
    da(E);
  }
  const w = a.getColWidths();
  if (w) {
    const C = [...w];
    C.splice(m, v), a.setColWidths(C);
  }
}
function da(r) {
  const e = r.getFirstDescendant();
  e == null ? r.selectStart() : e.getParentOrThrow().selectStart();
}
function _0(r, e) {
  const t = r.getFirstChild();
  t !== null ? t.insertBefore(e) : r.append(e);
}
function $m() {
  const r = z();
  $(r) || Te(r) || Ce(188);
  const e = r.anchor.getNode(), [t, n, a] = vt(e), i = t.__colSpan, s = t.__rowSpan;
  if (i === 1 && s === 1) return;
  const [o, l] = Kt(a, t, t), { startColumn: u, startRow: c } = l, h = t.__headerState & Ue.COLUMN, m = Array.from({ length: i }, (y, x) => {
    let S = h;
    for (let w = 0; S !== 0 && w < o.length; w++) S &= o[w][x + u].cell.__headerState;
    return S;
  }), g = t.__headerState & Ue.ROW, v = Array.from({ length: s }, (y, x) => {
    let S = g;
    for (let w = 0; S !== 0 && w < o[0].length; w++) S &= o[x + c][w].cell.__headerState;
    return S;
  });
  if (i > 1) {
    for (let y = 1; y < i; y++) t.insertAfter(Zt(m[y] | v[0]).append(xe()));
    t.setColSpan(1);
  }
  if (s > 1) {
    let y;
    for (let x = 1; x < s; x++) {
      const S = c + x, w = o[S];
      y = (y || n).getNextSibling(), Ye(y) || Ce(125);
      let C = null;
      for (let E = 0; E < u; E++) {
        const k = w[E], A = k.cell;
        k.startRow === S && (C = A), A.__colSpan > 1 && (E += A.__colSpan - 1);
      }
      if (C === null) for (let E = i - 1; E >= 0; E--) _0(y, Zt(m[E] | v[x]).append(xe()));
      else for (let E = i - 1; E >= 0; E--) C.insertAfter(Zt(m[E] | v[x]).append(xe()));
    }
    t.setRowSpan(1);
  }
}
function Kt(r, e, t) {
  const [n, a, i] = Lc(r, e, t);
  return a === null && Ce(207), i === null && Ce(208), [n, a, i];
}
function Lc(r, e, t) {
  const n = [];
  let a = null, i = null;
  function s(l) {
    let u = n[l];
    return u === void 0 && (n[l] = u = []), u;
  }
  const o = r.getChildren();
  for (let l = 0; l < o.length; l++) {
    const u = o[l];
    Ye(u) || Ce(209);
    for (let c = u.getFirstChild(), h = 0; c != null; c = c.getNextSibling()) {
      re(c) || Ce(147);
      const m = s(l);
      for (; m[h] !== void 0; ) h++;
      const g = { cell: c, startColumn: h, startRow: l }, { __rowSpan: v, __colSpan: y } = c;
      for (let x = 0; x < v && !(l + x >= o.length); x++) {
        const S = s(l + x);
        for (let w = 0; w < y; w++) S[h + w] = g;
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
    const a = fe(r, re);
    re(a) || Ce(148), e = a;
  } else {
    const a = fe(r.getNode(), re);
    re(a) || Ce(148), e = a;
  }
  const t = e.getParent();
  Ye(t) || Ce(149);
  const n = t.getParent();
  return st(n) || Ce(210), [e, t, n];
}
function ul(r) {
  const [e, , t] = vt(r), n = t.getChildren(), a = n.length, i = n[0].getChildren().length, s = new Array(a);
  for (let o = 0; o < a; o++) s[o] = new Array(i);
  for (let o = 0; o < a; o++) {
    const l = n[o].getChildren();
    let u = 0;
    for (let c = 0; c < l.length; c++) {
      for (; s[o][u]; ) u++;
      const h = l[c], m = h.__rowSpan || 1, g = h.__colSpan || 1;
      for (let v = 0; v < m; v++) for (let y = 0; y < g; y++) s[o + v][u + y] = h;
      if (e === h) return { colSpan: g, columnIndex: u, rowIndex: o, rowSpan: m };
      u += g;
    }
  }
  return null;
}
class Si {
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
    return !!Te(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
  }
  set(e, t, n) {
    this.dirty = !0, this.tableKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null;
  }
  clone() {
    return new Si(this.tableKey, this.anchor, this.focus);
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
  insertNodes(e) {
    const t = this.focus.getNode();
    ge(t) || Ce(151), a0(t.select(0, t.getChildrenSize())).insertNodes(e);
  }
  getShape() {
    const e = Mt(this.anchor.key);
    re(e) || Ce(152);
    const t = ul(e);
    t === null && Ce(153);
    const n = Mt(this.focus.key);
    re(n) || Ce(154);
    const a = ul(n);
    a === null && Ce(155);
    const i = Math.min(t.columnIndex, a.columnIndex), s = Math.max(t.columnIndex + t.colSpan - 1, a.columnIndex + a.colSpan - 1), o = Math.min(t.rowIndex, a.rowIndex), l = Math.max(t.rowIndex + t.rowSpan - 1, a.rowIndex + a.rowSpan - 1);
    return { fromX: Math.min(i, s), fromY: Math.min(o, l), toX: Math.max(i, s), toY: Math.max(o, l) };
  }
  getNodes() {
    const e = this._cachedNodes;
    if (e !== null) return e;
    const t = this.anchor.getNode(), n = this.focus.getNode(), a = fe(t, re), i = fe(n, re);
    re(a) || Ce(152), re(i) || Ce(154);
    const s = a.getParent();
    Ye(s) || Ce(156);
    const o = s.getParent();
    st(o) || Ce(157);
    const l = i.getParents()[1];
    if (l !== o) {
      if (o.isParentOf(i)) {
        const I = l.getParent();
        I == null && Ce(159), this.set(this.tableKey, i.getKey(), I.getKey());
      } else {
        const I = o.getParent();
        I == null && Ce(158), this.set(this.tableKey, I.getKey(), i.getKey());
      }
      return this.getNodes();
    }
    const [u, c, h] = Kt(o, a, i);
    let m = Math.min(c.startColumn, h.startColumn), g = Math.min(c.startRow, h.startRow), v = Math.max(c.startColumn + c.cell.__colSpan - 1, h.startColumn + h.cell.__colSpan - 1), y = Math.max(c.startRow + c.cell.__rowSpan - 1, h.startRow + h.cell.__rowSpan - 1), x = m, S = g, w = m, C = g;
    function E(I) {
      const { cell: O, startColumn: F, startRow: j } = I;
      m = Math.min(m, F), g = Math.min(g, j), v = Math.max(v, F + O.__colSpan - 1), y = Math.max(y, j + O.__rowSpan - 1);
    }
    for (; m < x || g < S || v > w || y > C; ) {
      if (m < x) {
        const I = C - S, O = x - 1;
        for (let F = 0; F <= I; F++) E(u[S + F][O]);
        x = O;
      }
      if (g < S) {
        const I = w - x, O = S - 1;
        for (let F = 0; F <= I; F++) E(u[O][x + F]);
        S = O;
      }
      if (v > w) {
        const I = C - S, O = w + 1;
        for (let F = 0; F <= I; F++) E(u[S + F][O]);
        w = O;
      }
      if (y > C) {
        const I = w - x, O = C + 1;
        for (let F = 0; F <= I; F++) E(u[O][x + F]);
        C = O;
      }
    }
    const k = /* @__PURE__ */ new Map([[o.getKey(), o]]);
    let A = null;
    for (let I = g; I <= y; I++) for (let O = m; O <= v; O++) {
      const { cell: F } = u[I][O], j = F.getParent();
      Ye(j) || Ce(160), j !== A && k.set(j.getKey(), j), k.set(F.getKey(), F);
      for (const V of qm(F)) k.set(V.getKey(), V);
      A = j;
    }
    const R = Array.from(k.values());
    return n1() || (this._cachedNodes = R), R;
  }
  getTextContent() {
    const e = this.getNodes().filter((n) => re(n));
    let t = "";
    for (let n = 0; n < e.length; n++) {
      const a = e[n], i = a.__parent, s = (e[n + 1] || {}).__parent;
      t += a.getTextContent() + (s !== i ? `
` : "	");
    }
    return t;
  }
}
function Te(r) {
  return r instanceof Si;
}
function cl() {
  const r = Do("root", 0, "element"), e = Do("root", 0, "element");
  return new Si("root", r, e);
}
function qm(r) {
  const e = [], t = [r];
  for (; t.length > 0; ) {
    const n = t.pop();
    n === void 0 && Ce(112), ge(n) && t.unshift(...n.getChildren()), n !== r && e.push(n);
  }
  return e;
}
class Hm {
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
        this.table = na(a);
      });
    });
    this.editor.update(() => {
      const t = this.editor.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      this.table = na(t), e.observe(t, { attributes: !0, childList: !0, subtree: !0 });
    });
  }
  clearHighlight() {
    const e = this.editor;
    this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.enableHighlightStyle(), e.update(() => {
      if (!st(Mt(this.tableNodeKey))) throw new Error("Expected TableNode.");
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      const n = na(t);
      Ba(e, n, null), Ct(null), e.dispatchCommand(Jt, void 0);
    });
  }
  enableHighlightStyle() {
    const e = this.editor;
    e.update(() => {
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      fn(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
    });
  }
  disableHighlightStyle() {
    const e = this.editor;
    e.update(() => {
      const t = e.getElementByKey(this.tableNodeKey);
      if (!t) throw new Error("Expected to find TableElement in DOM");
      Je(t, e._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
    });
  }
  updateTableTableSelection(e) {
    if (e !== null && e.tableKey === this.tableNodeKey) {
      const t = this.editor;
      this.tableSelection = e, this.isHighlightingCells = !0, this.disableHighlightStyle(), Ba(t, this.table, this.tableSelection);
    } else e == null ? this.clearHighlight() : (this.tableNodeKey = e.tableKey, this.updateTableTableSelection(e));
  }
  setFocusCellForSelection(e, t = !1) {
    const n = this.editor;
    n.update(() => {
      const a = Mt(this.tableNodeKey);
      if (!st(a)) throw new Error("Expected TableNode.");
      if (!n.getElementByKey(this.tableNodeKey)) throw new Error("Expected to find TableElement in DOM");
      const i = e.x, s = e.y;
      if (this.focusCell = e, this.anchorCell !== null) {
        const o = zc(n._window);
        o && o.setBaseAndExtent(this.anchorCell.elem, 0, this.focusCell.elem, 0);
      }
      if (this.isHighlightingCells || this.anchorX === i && this.anchorY === s && !t) {
        if (i === this.focusX && s === this.focusY) return;
      } else this.isHighlightingCells = !0, this.disableHighlightStyle();
      if (this.focusX = i, this.focusY = s, this.isHighlightingCells) {
        const o = ot(e.elem);
        if (this.tableSelection != null && this.anchorCellNodeKey != null && re(o) && a.is(kn(o))) {
          const l = o.getKey();
          this.tableSelection = this.tableSelection.clone() || cl(), this.focusCellNodeKey = l, this.tableSelection.set(this.tableNodeKey, this.anchorCellNodeKey, this.focusCellNodeKey), Ct(this.tableSelection), n.dispatchCommand(Jt, void 0), Ba(n, this.table, this.tableSelection);
        }
      }
    });
  }
  setAnchorCellForSelection(e) {
    this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.editor.update(() => {
      const t = ot(e.elem);
      if (re(t)) {
        const n = t.getKey();
        this.tableSelection = this.tableSelection != null ? this.tableSelection.clone() : cl(), this.anchorCellNodeKey = n;
      }
    });
  }
  formatCells(e) {
    this.editor.update(() => {
      const t = z();
      Te(t) || Ce(11);
      const n = ya(), a = n.anchor, i = n.focus, s = t.getNodes().filter(re), o = s[0].getFirstChild(), l = dn(o) ? o.getFormatFlags(e, null) : null;
      s.forEach((u) => {
        a.set(u.getKey(), 0, "element"), i.set(u.getKey(), u.getChildrenSize(), "element"), n.formatText(e, l);
      }), Ct(t), this.editor.dispatchCommand(Jt, void 0);
    });
  }
  clearText() {
    const e = this.editor;
    e.update(() => {
      const t = Mt(this.tableNodeKey);
      if (!st(t)) throw new Error("Expected TableNode.");
      const n = z();
      Te(n) || Ce(11);
      const a = n.getNodes().filter(re);
      a.length !== this.table.columns * this.table.rows ? (a.forEach((i) => {
        if (ge(i)) {
          const s = xe(), o = Dr();
          s.append(o), i.append(s), i.getChildren().forEach((l) => {
            l !== s && l.remove();
          });
        }
      }), Ba(e, this.table, null), Ct(null), e.dispatchCommand(Jt, void 0)) : (t.selectPrevious(), t.remove(), Dt().selectStart());
    });
  }
}
const Ts = "__lexicalTableSelection", zc = (r) => Rm ? (r || window).getSelection() : null;
function Um(r, e, t, n) {
  const a = t.getRootElement();
  if (a === null) throw new Error("No root element.");
  const i = new Hm(t, r.getKey()), s = t._window || window;
  (function(c, h) {
    As(c) !== null && Ce(205), c[Ts] = h;
  })(e, i), i.listenersToRemove.add(() => function(c, h) {
    As(c) === h && delete c[Ts];
  }(e, i));
  const o = () => {
    const c = () => {
      i.isSelecting = !1, s.removeEventListener("mouseup", c), s.removeEventListener("mousemove", h);
    }, h = (m) => {
      setTimeout(() => {
        if (1 & ~m.buttons && i.isSelecting) return i.isSelecting = !1, s.removeEventListener("mouseup", c), void s.removeEventListener("mousemove", h);
        const g = Ms(m.target);
        g === null || i.anchorX === g.x && i.anchorY === g.y || (m.preventDefault(), i.setFocusCellForSelection(g));
      }, 0);
    };
    return { onMouseMove: h, onMouseUp: c };
  };
  e.addEventListener("mousedown", (c) => {
    setTimeout(() => {
      if (c.button !== 0 || !s) return;
      const h = Ms(c.target);
      h !== null && (Jr(c), i.setAnchorCellForSelection(h));
      const { onMouseUp: m, onMouseMove: g } = o();
      i.isSelecting = !0, s.addEventListener("mouseup", m, i.listenerOptions), s.addEventListener("mousemove", g, i.listenerOptions);
    }, 0);
  }, i.listenerOptions), s.addEventListener("mousedown", (c) => {
    c.button === 0 && t.update(() => {
      const h = z(), m = c.target;
      Te(h) && h.tableKey === i.tableNodeKey && a.contains(m) && i.clearHighlight();
    });
  }, i.listenerOptions), i.listenersToRemove.add(t.registerCommand(hn, (c) => ea(t, c, "down", r, i), At)), i.listenersToRemove.add(t.registerCommand(mn, (c) => ea(t, c, "up", r, i), At)), i.listenersToRemove.add(t.registerCommand(xa, (c) => ea(t, c, "backward", r, i), At)), i.listenersToRemove.add(t.registerCommand(bi, (c) => ea(t, c, "forward", r, i), At)), i.listenersToRemove.add(t.registerCommand(Dn, (c) => {
    const h = z();
    if (Te(h)) {
      const m = fe(h.focus.getNode(), re);
      if (re(m)) return Jr(c), m.selectEnd(), !0;
    }
    return !1;
  }, At)), [Ju, ys, ra].forEach((c) => {
    i.listenersToRemove.add(t.registerCommand(c, /* @__PURE__ */ ((h) => () => {
      const m = z();
      if (!Wr(m, r)) return !1;
      if (Te(m)) return i.clearText(), !0;
      if ($(m)) {
        const g = fe(m.anchor.getNode(), (E) => re(E));
        if (!re(g)) return !1;
        const v = m.anchor.getNode(), y = m.focus.getNode(), x = r.isParentOf(v), S = r.isParentOf(y);
        if (x && !S || S && !x) return i.clearText(), !0;
        const w = fe(m.anchor.getNode(), (E) => ge(E)), C = w && fe(w, (E) => ge(E) && re(E.getParent()));
        if (!ge(C) || !ge(w)) return !1;
        if (h === ys && C.getPreviousSibling() === null) return !0;
      }
      return !1;
    })(c), pt));
  });
  const l = (c) => {
    const h = z();
    if (!Te(h) && !$(h)) return !1;
    const m = r.isParentOf(h.anchor.getNode());
    if (m !== r.isParentOf(h.focus.getNode())) {
      const g = m ? "anchor" : "focus", v = m ? "focus" : "anchor", { key: y, offset: x, type: S } = h[v];
      return r[h[g].isBefore(h[v]) ? "selectPrevious" : "selectNext"]()[v].set(y, x, S), !1;
    }
    return !!Te(h) && (c && (c.preventDefault(), c.stopPropagation()), i.clearText(), !0);
  };
  function u(c) {
    const h = r.getCordsFromCellNode(c, i.table);
    return r.getDOMCellFromCordsOrThrow(h.x, h.y, i.table);
  }
  return i.listenersToRemove.add(t.registerCommand(ga, l, pt)), i.listenersToRemove.add(t.registerCommand(va, l, pt)), i.listenersToRemove.add(t.registerCommand(Yu, (c) => {
    const h = z();
    if (h) {
      if (!Te(h) && !$(h)) return !1;
      ks(t, vr(c, ClipboardEvent) ? c : null, Oc(h));
      const m = l(c);
      return $(h) ? (h.removeText(), !0) : m;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(bt, (c) => {
    const h = z();
    if (!Wr(h, r)) return !1;
    if (Te(h)) return i.formatCells(c), !0;
    if ($(h)) {
      const m = fe(h.anchor.getNode(), (g) => re(g));
      if (!re(m)) return !1;
    }
    return !1;
  }, pt)), i.listenersToRemove.add(t.registerCommand(er, (c) => {
    const h = z();
    if (!Te(h) || !Wr(h, r)) return !1;
    const m = h.anchor.getNode(), g = h.focus.getNode();
    if (!re(m) || !re(g)) return !1;
    const [v, y, x] = Kt(r, m, g), S = Math.max(y.startRow, x.startRow), w = Math.max(y.startColumn, x.startColumn), C = Math.min(y.startRow, x.startRow), E = Math.min(y.startColumn, x.startColumn);
    for (let k = C; k <= S; k++) for (let A = E; A <= w; A++) {
      const R = v[k][A].cell;
      R.setFormat(c);
      const I = R.getChildren();
      for (let O = 0; O < I.length; O++) {
        const F = I[O];
        ge(F) && !F.isInline() && F.setFormat(c);
      }
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(Xu, (c) => {
    const h = z();
    if (!Wr(h, r)) return !1;
    if (Te(h)) return i.clearHighlight(), !1;
    if ($(h)) {
      const m = fe(h.anchor.getNode(), (g) => re(g));
      if (!re(m)) return !1;
      if (typeof c == "string") {
        const g = ml(t, h, r);
        if (g) return hl(g, r, [Dr(c)]), !0;
      }
    }
    return !1;
  }, pt)), n && i.listenersToRemove.add(t.registerCommand(xi, (c) => {
    const h = z();
    if (!$(h) || !h.isCollapsed() || !Wr(h, r)) return !1;
    const m = Ki(h.anchor.getNode());
    if (m === null) return !1;
    Jr(c);
    const g = r.getCordsFromCellNode(m, i.table);
    return Pc(i, r, g.x, g.y, c.shiftKey ? "backward" : "forward"), !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(Zu, (c) => r.isSelected(), At)), i.listenersToRemove.add(t.registerCommand(Ku, (c) => {
    const { nodes: h, selection: m } = c, g = m.getStartEndPoints(), v = Te(m), y = $(m) && fe(m.anchor.getNode(), (W) => re(W)) !== null && fe(m.focus.getNode(), (W) => re(W)) !== null || v;
    if (h.length !== 1 || !st(h[0]) || !y || g === null) return !1;
    const [x] = g, S = h[0], w = S.getChildren(), C = S.getFirstChildOrThrow().getChildrenSize(), E = S.getChildrenSize(), k = fe(x.getNode(), (W) => re(W)), A = k && fe(k, (W) => Ye(W)), R = A && fe(A, (W) => st(W));
    if (!re(k) || !Ye(A) || !st(R)) return !1;
    const I = A.getIndexWithinParent(), O = Math.min(R.getChildrenSize() - 1, I + E - 1), F = k.getIndexWithinParent(), j = Math.min(A.getChildrenSize() - 1, F + C - 1), V = Math.min(F, j), X = Math.min(I, O), J = Math.max(F, j), Y = Math.max(I, O), he = R.getChildren();
    let ie = 0;
    for (let W = X; W <= Y; W++) {
      const me = he[W];
      if (!Ye(me)) return !1;
      const de = w[ie];
      if (!Ye(de)) return !1;
      const Oe = me.getChildren(), le = de.getChildren();
      let Ze = 0;
      for (let rt = V; rt <= J; rt++) {
        const Pe = Oe[rt];
        if (!re(Pe)) return !1;
        const ct = le[Ze];
        if (!re(ct)) return !1;
        const Ve = Pe.getChildren();
        ct.getChildren().forEach((He) => {
          Se(He) && xe().append(He), Pe.append(He);
        }), Ve.forEach((He) => He.remove()), Ze++;
      }
      ie++;
    }
    return !0;
  }, pt)), i.listenersToRemove.add(t.registerCommand(Jt, () => {
    const c = z(), h = t0();
    if ($(c)) {
      const { anchor: m, focus: g } = c, v = m.getNode(), y = g.getNode(), x = Ki(v), S = Ki(y), w = !(!x || !r.is(kn(x))), C = !(!S || !r.is(kn(S))), E = w !== C, k = w && C, A = c.isBackward();
      if (E) {
        const R = c.clone();
        if (C) {
          const [I] = Kt(r, S, S), O = I[0][0].cell, F = I[I.length - 1].at(-1).cell;
          R.focus.set(A ? O.getKey() : F.getKey(), A ? O.getChildrenSize() : F.getChildrenSize(), "element");
        } else if (w) {
          const [I] = Kt(r, x, x), O = I[0][0].cell, F = I[I.length - 1].at(-1).cell;
          R.anchor.set(A ? F.getKey() : O.getKey(), A ? F.getChildrenSize() : 0, "element");
        }
        Ct(R), dl(t, i);
      } else k && (x.is(S) || (i.setAnchorCellForSelection(u(x)), i.setFocusCellForSelection(u(S), !0), i.isSelecting || setTimeout(() => {
        const { onMouseUp: R, onMouseMove: I } = o();
        i.isSelecting = !0, s.addEventListener("mouseup", R), s.addEventListener("mousemove", I);
      }, 0)));
    } else if (c && Te(c) && c.is(h) && c.tableKey === r.getKey()) {
      const m = zc(t._window);
      if (m && m.anchorNode && m.focusNode) {
        const g = ot(m.focusNode), v = g && !r.is(kn(g)), y = ot(m.anchorNode), x = y && r.is(kn(y));
        if (v && x && m.rangeCount > 0) {
          const S = r1(m, t);
          S && (S.anchor.set(r.getKey(), c.isBackward() ? r.getChildrenSize() : 0, "element"), m.removeAllRanges(), Ct(S));
        }
      }
    }
    return c && !c.is(h) && (Te(c) || Te(h)) && i.tableSelection && !i.tableSelection.is(h) ? (Te(c) && c.tableKey === i.tableNodeKey ? i.updateTableTableSelection(c) : !Te(c) && Te(h) && h.tableKey === i.tableNodeKey && i.updateTableTableSelection(null), !1) : (i.hasHijackedSelectionStyles && !r.isSelected() ? function(m, g) {
      g.enableHighlightStyle(), S0(g.table, (v) => {
        const y = v.elem;
        v.highlighted = !1, jc(m, v), y.getAttribute("style") || y.removeAttribute("style");
      });
    }(t, i) : !i.hasHijackedSelectionStyles && r.isSelected() && dl(t, i), !1);
  }, pt)), i.listenersToRemove.add(t.registerCommand(oa, () => {
    const c = z();
    if (!$(c) || !c.isCollapsed() || !Wr(c, r)) return !1;
    const h = ml(t, c, r);
    return !!h && (hl(h, r), !0);
  }, pt)), i;
}
function As(r) {
  return r[Ts] || null;
}
function Ms(r) {
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
function na(r) {
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
function Ba(r, e, t) {
  const n = new Set(t ? t.getNodes() : []);
  S0(e, (a, i) => {
    const s = a.elem;
    n.has(i) ? (a.highlighted = !0, Bc(r, a)) : (a.highlighted = !1, jc(r, a), s.getAttribute("style") || s.removeAttribute("style"));
  });
}
function S0(r, e) {
  const { domRows: t } = r;
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (a) for (let i = 0; i < a.length; i++) {
      const s = a[i];
      if (!s) continue;
      const o = ot(s.elem);
      o !== null && e(s, o, { x: i, y: n });
    }
  }
}
function dl(r, e) {
  e.disableHighlightStyle(), S0(e.table, (t) => {
    t.highlighted = !0, Bc(r, t);
  });
}
const Pc = (r, e, t, n, a) => {
  const i = a === "forward";
  switch (a) {
    case "backward":
    case "forward":
      return t !== (i ? r.table.columns - 1 : 0) ? ja(e.getCellNodeFromCordsOrThrow(t + (i ? 1 : -1), n, r.table), i) : n !== (i ? r.table.rows - 1 : 0) ? ja(e.getCellNodeFromCordsOrThrow(i ? 0 : r.table.columns - 1, n + (i ? 1 : -1), r.table), i) : i ? e.selectNext() : e.selectPrevious(), !0;
    case "up":
      return n !== 0 ? ja(e.getCellNodeFromCordsOrThrow(t, n - 1, r.table), !1) : e.selectPrevious(), !0;
    case "down":
      return n !== r.table.rows - 1 ? ja(e.getCellNodeFromCordsOrThrow(t, n + 1, r.table), !0) : e.selectNext(), !0;
    default:
      return !1;
  }
}, Km = (r, e, t, n, a) => {
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
function Wr(r, e) {
  if ($(r) || Te(r)) {
    const t = e.isParentOf(r.anchor.getNode()), n = e.isParentOf(r.focus.getNode());
    return t && n;
  }
  return !1;
}
function ja(r, e) {
  e ? r.selectStart() : r.selectEnd();
}
const Ui = "172,206,247";
function Bc(r, e) {
  const t = e.elem, n = ot(t);
  re(n) || Ce(131), n.getBackgroundColor() === null ? t.style.setProperty("background-color", `rgb(${Ui})`) : t.style.setProperty("background-image", `linear-gradient(to right, rgba(${Ui},0.85), rgba(${Ui},0.85))`), t.style.setProperty("caret-color", "transparent");
}
function jc(r, e) {
  const t = e.elem, n = ot(t);
  re(n) || Ce(131), n.getBackgroundColor() === null && t.style.removeProperty("background-color"), t.style.removeProperty("background-image"), t.style.removeProperty("caret-color");
}
function Ki(r) {
  const e = fe(r, re);
  return re(e) ? e : null;
}
function kn(r) {
  const e = fe(r, st);
  return st(e) ? e : null;
}
function ea(r, e, t, n, a) {
  if ((t === "up" || t === "down") && function(s) {
    const o = s.getRootElement();
    return o ? o.hasAttribute("aria-controls") && o.getAttribute("aria-controls") === "typeahead-menu" : !1;
  }(r)) return !1;
  const i = z();
  if (!Wr(i, n)) {
    if ($(i)) {
      if (i.isCollapsed() && t === "backward") {
        const s = i.anchor.type, o = i.anchor.offset;
        if (s !== "element" && (s !== "text" || o !== 0)) return !1;
        const l = i.anchor.getNode();
        if (!l) return !1;
        const u = fe(l, (h) => ge(h) && !h.isInline());
        if (!u) return !1;
        const c = u.getPreviousSibling();
        return !(!c || !st(c)) && (Jr(e), c.selectEnd(), !0);
      }
      if (e.shiftKey && (t === "up" || t === "down")) {
        const s = i.focus.getNode();
        if (zt(s)) {
          const o = i.getNodes()[0];
          if (o) {
            const l = fe(o, re);
            if (l && n.isParentOf(l)) {
              const u = n.getFirstDescendant(), c = n.getLastDescendant();
              if (!u || !c) return !1;
              const [h] = vt(u), [m] = vt(c), g = n.getCordsFromCellNode(h, a.table), v = n.getCordsFromCellNode(m, a.table), y = n.getDOMCellFromCordsOrThrow(g.x, g.y, a.table), x = n.getDOMCellFromCordsOrThrow(v.x, v.y, a.table);
              return a.setAnchorCellForSelection(y), a.setFocusCellForSelection(x, !0), !0;
            }
          }
          return !1;
        }
        {
          const o = fe(s, (u) => ge(u) && !u.isInline());
          if (!o) return !1;
          const l = t === "down" ? o.getNextSibling() : o.getPreviousSibling();
          if (st(l) && a.tableNodeKey === l.getKey()) {
            const u = l.getFirstDescendant(), c = l.getLastDescendant();
            if (!u || !c) return !1;
            const [h] = vt(u), [m] = vt(c), g = i.clone();
            return g.focus.set((t === "up" ? h : m).getKey(), t === "up" ? 0 : m.getChildrenSize(), "element"), Ct(g), !0;
          }
        }
      }
    }
    return !1;
  }
  if ($(i) && i.isCollapsed()) {
    const { anchor: s, focus: o } = i, l = fe(s.getNode(), re), u = fe(o.getNode(), re);
    if (!re(l) || !l.is(u)) return !1;
    const c = kn(l);
    if (c !== n && c != null) {
      const S = r.getElementByKey(c.getKey());
      if (S != null) return a.table = na(S), ea(r, e, t, c, a);
    }
    if (t === "backward" || t === "forward") {
      const S = s.type, w = s.offset, C = s.getNode();
      if (!C) return !1;
      const E = i.getNodes();
      return (E.length !== 1 || !br(E[0])) && !!function(k, A, R, I) {
        return function(O, F, j) {
          return O === "element" && (j === "backward" ? F.getPreviousSibling() === null : F.getNextSibling() === null);
        }(k, R, I) || function(O, F, j, V) {
          const X = fe(j, (Y) => ge(Y) && !Y.isInline());
          if (!X) return !1;
          const J = V === "backward" ? F === 0 : F === j.getTextContentSize();
          return O === "text" && J && (V === "backward" ? X.getPreviousSibling() === null : X.getNextSibling() === null);
        }(k, A, R, I);
      }(S, w, C, t) && function(k, A, R, I) {
        const O = fe(A, re);
        if (!re(O)) return !1;
        const [F, j] = Kt(R, O, O);
        if (!function(X, J, Y) {
          const he = X[0][0], ie = X[X.length - 1][X[0].length - 1], { startColumn: W, startRow: me } = J;
          return Y === "backward" ? W === he.startColumn && me === he.startRow : W === ie.startColumn && me === ie.startRow;
        }(F, j, I)) return !1;
        const V = function(X, J, Y) {
          const he = fe(X, (W) => ge(W) && !W.isInline());
          if (!he) return;
          const ie = J === "backward" ? he.getPreviousSibling() : he.getNextSibling();
          return ie && st(ie) ? ie : J === "backward" ? Y.getPreviousSibling() : Y.getNextSibling();
        }(A, I, R);
        return !V || st(V) ? !1 : (Jr(k), I === "backward" ? V.selectEnd() : V.selectStart(), !0);
      }(e, C, n, t);
    }
    const h = r.getElementByKey(l.__key), m = r.getElementByKey(s.key);
    if (m == null || h == null) return !1;
    let g;
    if (s.type === "element") g = m.getBoundingClientRect();
    else {
      const S = window.getSelection();
      if (S === null || S.rangeCount === 0) return !1;
      g = S.getRangeAt(0).getBoundingClientRect();
    }
    const v = t === "up" ? l.getFirstChild() : l.getLastChild();
    if (v == null) return !1;
    const y = r.getElementByKey(v.__key);
    if (y == null) return !1;
    const x = y.getBoundingClientRect();
    if (t === "up" ? x.top > g.top - g.height : g.bottom + g.height > x.bottom) {
      Jr(e);
      const S = n.getCordsFromCellNode(l, a.table);
      if (!e.shiftKey) return Pc(a, n, S.x, S.y, t);
      {
        const w = n.getDOMCellFromCordsOrThrow(S.x, S.y, a.table);
        a.setAnchorCellForSelection(w), a.setFocusCellForSelection(w, !0);
      }
      return !0;
    }
  } else if (Te(i)) {
    const { anchor: s, focus: o } = i, l = fe(s.getNode(), re), u = fe(o.getNode(), re), [c] = i.getNodes(), h = r.getElementByKey(c.getKey());
    if (!re(l) || !re(u) || !st(c) || h == null) return !1;
    a.updateTableTableSelection(i);
    const m = na(h), g = n.getCordsFromCellNode(l, m), v = n.getDOMCellFromCordsOrThrow(g.x, g.y, m);
    if (a.setAnchorCellForSelection(v), Jr(e), e.shiftKey) {
      const y = n.getCordsFromCellNode(u, m);
      return Km(a, c, y.x, y.y, t);
    }
    return u.selectEnd(), !0;
  }
  return !1;
}
function Jr(r) {
  r.preventDefault(), r.stopImmediatePropagation(), r.stopPropagation();
}
function hl(r, e, t) {
  const n = xe();
  r === "first" ? e.insertBefore(n) : e.insertAfter(n), n.append(...t || []), n.selectEnd();
}
function ml(r, e, t) {
  const n = t.getParent();
  if (!n) return;
  const a = r.getElementByKey(n.getKey());
  if (!a) return;
  const i = window.getSelection();
  if (!i || i.anchorNode !== a) return;
  const s = fe(e.anchor.getNode(), (x) => re(x));
  if (!s) return;
  const o = fe(s, (x) => st(x));
  if (!st(o) || !o.is(t)) return;
  const [l, u] = Kt(t, s, s), c = l[0][0], h = l[l.length - 1][l[0].length - 1], { startRow: m, startColumn: g } = u, v = m === c.startRow && g === c.startColumn, y = m === h.startRow && g === h.startColumn;
  return v ? "first" : y ? "last" : void 0;
}
function fl(r, e, t, n) {
  const a = r.querySelector("colgroup");
  if (!a) return;
  const i = [];
  for (let s = 0; s < t; s++) {
    const o = document.createElement("col"), l = n && n[s];
    l && (o.style.width = `${l}px`), i.push(o);
  }
  a.replaceChildren(...i);
}
function pl(r, e, t) {
  t ? (Je(r, e.theme.tableRowStriping), r.setAttribute("data-lexical-row-striping", "true")) : (fn(r, e.theme.tableRowStriping), r.removeAttribute("data-lexical-row-striping"));
}
class Or extends yt {
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
    return new Or(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping;
  }
  static importDOM() {
    return { table: (e) => ({ conversion: Wm, priority: 1 }) };
  }
  static importJSON(e) {
    const t = C0();
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
    return n.appendChild(a), fl(n, 0, this.getColumnCount(), this.getColWidths()), Je(n, e.theme.table), this.__rowStriping && pl(n, e, !0), n;
  }
  updateDOM(e, t, n) {
    return e.__rowStriping !== this.__rowStriping && pl(t, n, this.__rowStriping), fl(t, 0, this.getColumnCount(), this.getColWidths()), !1;
  }
  exportDOM(e) {
    return { ...super.exportDOM(e), after: (t) => {
      if (t) {
        const n = t.cloneNode(), a = document.createElement("colgroup"), i = document.createElement("tbody");
        if (wr(t)) {
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
        return ot(u) === e;
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
    const i = ot(a.elem);
    return re(i) ? i : null;
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
      re(n) && (t += n.getColSpan());
    }), t;
  }
}
function Wm(r) {
  const e = C0();
  return r.hasAttribute("data-lexical-row-striping") && e.setRowStriping(!0), { node: e };
}
function C0() {
  return lt(new Or());
}
function st(r) {
  return r instanceof Or;
}
function Gm({ nodeKey: r }) {
  const [e] = se(), [t, n, a] = v0(r), i = ae(
    (s) => {
      if (s.preventDefault(), t && gt(z())) {
        const o = Mt(r);
        if (Vm(o))
          return o.remove(), !0;
      }
      return !1;
    },
    [t, r]
  );
  return P(() => Ie(
    e.registerCommand(
      ba,
      (s) => {
        const o = e.getElementByKey(r);
        return s.target === o ? (s.shiftKey || a(), n(!t), !0) : !1;
      },
      ve
    ),
    e.registerCommand(
      va,
      i,
      ve
    ),
    e.registerCommand(
      ga,
      i,
      ve
    )
  ), [a, e, t, r, i, n]), P(() => {
    const s = e.getElementByKey(r);
    s !== null && (s.className = t ? "selected" : "");
  }, [e, t, r]), null;
}
class zn extends lr {
  static getType() {
    return "page-break";
  }
  static clone(e) {
    return new zn(e.__key);
  }
  static importJSON() {
    return k0();
  }
  static importDOM() {
    return {
      figure: (e) => e.getAttribute("type") !== this.getType() ? null : {
        conversion: Ym,
        priority: At
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
    return /* @__PURE__ */ p.jsx(Gm, { nodeKey: this.__key });
  }
}
function Ym() {
  return { node: k0() };
}
function k0() {
  return new zn();
}
function Vm(r) {
  return r instanceof zn;
}
class Na extends cn {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__className");
    this.__className = t;
  }
  static getType() {
    return "emoji";
  }
  static clone(t) {
    return new Na(t.__className, t.__text, t.__key);
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
    const n = $c(
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
function $c(r, e) {
  const t = new Na(r, e).setMode("token");
  return lt(t);
}
const Xm = ft.lazy(() => import("./ImageComponent-CHDjWEqo.js"));
function Jm(r) {
  const e = r;
  if (e.src.startsWith("file:///"))
    return null;
  const { alt: t, src: n, width: a, height: i } = e;
  return { node: E0({ altText: t, height: i, src: n, width: a }) };
}
class Pn extends lr {
  constructor(t, n, a, i, s, o, l, u, c, h, m, g) {
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
    this.__src = t, this.__altText = n, this.__maxWidth = a, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || fa(), this.__captionsEnabled = u || u === void 0, this.__isAbsolute = h || !1, this.__x = m || 0, this.__y = g || 0;
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
      xOffset: h,
      yOffset: m
    } = t, g = E0({
      altText: n,
      height: a,
      maxWidth: s,
      showCaption: u,
      src: l,
      width: i,
      isAbsolute: c,
      xOffset: h,
      yOffset: m
    }), v = g.__caption, y = v.parseEditorState(o.editorState);
    return y.isEmpty() || v.setEditorState(y), g;
  }
  exportDOM() {
    const t = document.createElement("img");
    return t.setAttribute("src", this.__src), t.setAttribute("alt", this.__altText), t.setAttribute("width", this.__width.toString()), t.setAttribute("height", this.__height.toString()), { element: t };
  }
  static importDOM() {
    return {
      img: () => ({
        conversion: Jm,
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
    a.__x = t, a.__y = n, Ct(null);
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
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      Xm,
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
function E0({
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
  isAbsolute: h
}) {
  return lt(
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
      h,
      u,
      c
    )
  );
}
function Zm(r) {
  return r instanceof Pn;
}
class Nn extends cn {
  static getType() {
    return "keyword";
  }
  static clone(e) {
    return new Nn(e.__text, e.__key);
  }
  static importJSON(e) {
    const t = qc(e.text);
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
function qc(r) {
  return new Nn(r);
}
let Ci = class extends lr {
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
function Os(r) {
  return r instanceof Ci;
}
function N0({ children: r, format: e, nodeKey: t, className: n }) {
  const [a] = se(), [i, s, o] = v0(t), l = Re(null), u = ae((c) => {
    const h = z();
    return i && gt(h) && (c.preventDefault(), a.update(() => {
      h.getNodes().forEach((m) => {
        br(m) && m.remove();
      });
    })), !1;
  }, [a, i]);
  return P(() => Ie(a.registerCommand(er, (c) => {
    if (i) {
      const h = z();
      if (gt(h)) {
        const m = Mt(t);
        Os(m) && m.setFormat(c);
      } else if ($(h)) {
        const m = h.getNodes();
        for (const g of m) Os(g) ? g.setFormat(c) : wi(g).setFormat(c);
      }
      return !0;
    }
    return !1;
  }, ve), a.registerCommand(ba, (c) => c.target === l.current && (c.preventDefault(), c.shiftKey || o(), s(!i), !0), ve), a.registerCommand(va, u, ve), a.registerCommand(ga, u, ve)), [o, a, i, t, u, s]), p.jsx("div", { className: [n.base, i ? n.focus : null].filter(Boolean).join(" "), ref: l, style: { textAlign: e || void 0 }, children: r });
}
function Qm({
  className: r,
  format: e,
  nodeKey: t,
  documentID: n
}) {
  return /* @__PURE__ */ p.jsx(
    N0,
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
class Ta extends Ci {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "figma";
  }
  static clone(t) {
    return new Ta(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = Hc(t.documentID);
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
      Qm,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        documentID: this.__id
      }
    );
  }
}
function Hc(r) {
  return new Ta(r);
}
const ef = "https://platform.twitter.com/widgets.js";
function tf(r) {
  const e = r.getAttribute("data-lexical-tweet-id");
  return e ? { node: T0(e) } : null;
}
let gl = !0;
function rf({
  className: r,
  format: e,
  loadingComponent: t,
  nodeKey: n,
  onError: a,
  onLoad: i,
  tweetID: s
}) {
  const o = Re(null), l = Re(""), [u, c] = U(!1), h = ae(async () => {
    try {
      await window.twttr.widgets.createTweet(s, o.current), c(!1), gl = !1, i && i();
    } catch (m) {
      a && a(String(m));
    }
  }, [a, i, s]);
  return P(() => {
    var m;
    if (s !== l.current) {
      if (c(!0), gl) {
        const g = document.createElement("script");
        g.src = ef, g.async = !0, (m = document.body) == null || m.appendChild(g), g.onload = h, a && (g.onerror = a);
      } else
        h();
      l && (l.current = s);
    }
  }, [h, a, s]), /* @__PURE__ */ p.jsxs(
    N0,
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
class Aa extends Ci {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "tweet";
  }
  static clone(t) {
    return new Aa(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = T0(t.id);
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
        conversion: tf,
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
      rf,
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
function T0(r) {
  return new Aa(r);
}
function nf({
  className: r,
  format: e,
  nodeKey: t,
  videoID: n
}) {
  return /* @__PURE__ */ p.jsx(
    N0,
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
function af(r) {
  const e = r.getAttribute("data-lexical-youtube");
  return e ? { node: A0(e) } : null;
}
class Ma extends Ci {
  constructor(t, n, a) {
    super(n, a);
    ne(this, "__id");
    this.__id = t;
  }
  static getType() {
    return "youtube";
  }
  static clone(t) {
    return new Ma(t.__id, t.__format, t.__key);
  }
  static importJSON(t) {
    const n = A0(t.videoID);
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
        conversion: af,
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
      nf,
      {
        className: i,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
}
function A0(r) {
  return new Ma(r);
}
function sf(r) {
  const e = r.open !== void 0 ? r.open : !0;
  return {
    node: M0(e)
  };
}
class rn extends yt {
  constructor(t, n) {
    super(n);
    ne(this, "__open");
    this.__open = t;
  }
  static getType() {
    return "collapsible-container";
  }
  static clone(t) {
    return new rn(t.__open, t.__key);
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
        conversion: sf,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return M0(t.open);
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
function M0(r) {
  return new rn(r);
}
function fr(r) {
  return r instanceof rn;
}
function of(r) {
  return {
    node: O0()
  };
}
class nn extends yt {
  static getType() {
    return "collapsible-content";
  }
  static clone(e) {
    return new nn(e.__key);
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
        conversion: of,
        priority: 2
      } : null
    };
  }
  exportDOM() {
    const e = document.createElement("div");
    return e.setAttribute("data-lexical-collapsible-content", "true"), { element: e };
  }
  static importJSON(e) {
    return O0();
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
function O0() {
  return new nn();
}
function Uc(r) {
  return r instanceof nn;
}
function lf(r) {
  return {
    node: D0()
  };
}
class an extends yt {
  static getType() {
    return "collapsible-title";
  }
  static clone(e) {
    return new an(e.__key);
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
        conversion: lf,
        priority: 1
      })
    };
  }
  static importJSON(e) {
    return D0();
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
      if (!Uc(a))
        throw new Error(
          "CollapsibleTitleNode expects to have CollapsibleContentNode sibling"
        );
      const i = a.getFirstChild();
      if (ge(i))
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
function D0() {
  return new an();
}
function vl(r) {
  return r instanceof an;
}
class Lt {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Lt(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
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
    return new Wt(t, Lt.range(this, e));
  }
}
class K {
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
    var h = new Error(n);
    return h.name = "ParseError", h.__proto__ = K.prototype, h.position = a, a != null && i != null && (h.length = i - a), h.rawMessage = e, h;
  }
}
K.prototype.__proto__ = Error.prototype;
var uf = function(e, t) {
  return e.indexOf(t) !== -1;
}, cf = function(e, t) {
  return e === void 0 ? t : e;
}, df = /([A-Z])/g, hf = function(e) {
  return e.replace(df, "-$1").toLowerCase();
}, mf = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, ff = /[&><"']/g;
function pf(r) {
  return String(r).replace(ff, (e) => mf[e]);
}
var Kc = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, gf = function(e) {
  var t = Kc(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, vf = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, bf = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, oe = {
  contains: uf,
  deflt: cf,
  escape: pf,
  hyphenate: hf,
  getBaseElem: Kc,
  isCharacterBox: gf,
  protocolFromUrl: bf
}, Qa = {
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
function yf(r) {
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
class R0 {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Qa)
      if (Qa.hasOwnProperty(t)) {
        var n = Qa[t];
        this[t] = e[t] !== void 0 ? n.processor ? n.processor(e[t]) : e[t] : yf(n);
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
        throw new K("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
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
      var t = oe.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class Er {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return tr[xf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return tr[wf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return tr[_f[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return tr[Sf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return tr[Cf[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return tr[kf[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var I0 = 0, ui = 1, En = 2, yr = 3, ha = 4, Ut = 5, Tn = 6, kt = 7, tr = [new Er(I0, 0, !1), new Er(ui, 0, !0), new Er(En, 1, !1), new Er(yr, 1, !0), new Er(ha, 2, !1), new Er(Ut, 2, !0), new Er(Tn, 3, !1), new Er(kt, 3, !0)], xf = [ha, Ut, ha, Ut, Tn, kt, Tn, kt], wf = [Ut, Ut, Ut, Ut, kt, kt, kt, kt], _f = [En, yr, ha, Ut, Tn, kt, Tn, kt], Sf = [yr, yr, Ut, Ut, kt, kt, kt, kt], Cf = [ui, ui, yr, yr, Ut, Ut, kt, kt], kf = [I0, ui, En, yr, En, yr, En, yr], ce = {
  DISPLAY: tr[I0],
  TEXT: tr[En],
  SCRIPT: tr[ha],
  SCRIPTSCRIPT: tr[Tn]
}, Ds = [{
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
function Ef(r) {
  for (var e = 0; e < Ds.length; e++)
    for (var t = Ds[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var ei = [];
Ds.forEach((r) => r.blocks.forEach((e) => ei.push(...e)));
function Wc(r) {
  for (var e = 0; e < ei.length; e += 2)
    if (r >= ei[e] && r <= ei[e + 1])
      return !0;
  return !1;
}
var _n = 80, Nf = function(e, t) {
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
}, Tf = function(e, t) {
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
}, Af = function(e, t) {
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
}, Mf = function(e, t) {
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
}, Of = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Df = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Rf = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, If = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = Nf(t, _n);
      break;
    case "sqrtSize1":
      a = Tf(t, _n);
      break;
    case "sqrtSize2":
      a = Af(t, _n);
      break;
    case "sqrtSize3":
      a = Mf(t, _n);
      break;
    case "sqrtSize4":
      a = Of(t, _n);
      break;
    case "sqrtTall":
      a = Rf(t, _n, n);
  }
  return a;
}, Ff = function(e, t) {
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
}, bl = {
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
}, Lf = function(e, t) {
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
class Oa {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return oe.contains(this.classes, e);
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
}, $a = {
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
}, yl = {
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
function zf(r, e) {
  ar[r] = e;
}
function F0(r, e, t) {
  if (!ar[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = ar[e][n];
  if (!a && r[0] in yl && (n = yl[r[0]].charCodeAt(0), a = ar[e][n]), !a && t === "text" && Wc(n) && (a = ar[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var Wi = {};
function Pf(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Wi[e]) {
    var t = Wi[e] = {
      cssEmPerMu: $a.quad[e] / 18
    };
    for (var n in $a)
      $a.hasOwnProperty(n) && (t[n] = $a[n][e]);
  }
  return Wi[e];
}
var Bf = [
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
], xl = [
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
], wl = function(e, t) {
  return t.size < 2 ? e : Bf[e - 1][t.size - 1];
};
class pr {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || pr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = xl[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return new pr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: wl(this.textSize, e)
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
      sizeMultiplier: xl[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = wl(pr.BASESIZE, e);
    return this.size === t && this.textSize === pr.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== pr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + pr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Pf(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
pr.BASESIZE = 6;
var Rs = {
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
}, jf = {
  ex: !0,
  em: !0,
  mu: !0
}, Gc = function(e) {
  return typeof e != "string" && (e = e.unit), e in Rs || e in jf || e === "ex";
}, Ge = function(e, t) {
  var n;
  if (e.unit in Rs)
    n = Rs[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new K("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, G = function(e) {
  return +e.toFixed(4) + "em";
}, Rr = function(e) {
  return e.filter((t) => t).join(" ");
}, Yc = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Vc = function(e) {
  var t = document.createElement(e);
  t.className = Rr(this.classes);
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (t.style[n] = this.style[n]);
  for (var a in this.attributes)
    this.attributes.hasOwnProperty(a) && t.setAttribute(a, this.attributes[a]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, Xc = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + oe.escape(Rr(this.classes)) + '"');
  var n = "";
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (n += oe.hyphenate(a) + ":" + this.style[a] + ";");
  n && (t += ' style="' + oe.escape(n) + '"');
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && (t += " " + i + '="' + oe.escape(this.attributes[i]) + '"');
  t += ">";
  for (var s = 0; s < this.children.length; s++)
    t += this.children[s].toMarkup();
  return t += "</" + e + ">", t;
};
class Da {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Yc.call(this, e, n, a), this.children = t || [];
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
    return oe.contains(this.classes, e);
  }
  toNode() {
    return Vc.call(this, "span");
  }
  toMarkup() {
    return Xc.call(this, "span");
  }
}
class L0 {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Yc.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return oe.contains(this.classes, e);
  }
  toNode() {
    return Vc.call(this, "a");
  }
  toMarkup() {
    return Xc.call(this, "a");
  }
}
class $f {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = n;
  }
  hasClass(e) {
    return oe.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + oe.escape(this.src) + '"' + (' alt="' + oe.escape(this.alt) + '"'), t = "";
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t += oe.hyphenate(n) + ":" + this.style[n] + ";");
    return t && (e += ' style="' + oe.escape(t) + '"'), e += "'/>", e;
  }
}
var qf = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Gt {
  constructor(e, t, n, a, i, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var u = Ef(this.text.charCodeAt(0));
    u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = qf[this.text]);
  }
  hasClass(e) {
    return oe.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = G(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Rr(this.classes));
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (t = t || document.createElement("span"), t.style[n] = this.style[n]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += oe.escape(Rr(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + this.italic + "em;");
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (n += oe.hyphenate(a) + ":" + this.style[a] + ";");
    n && (e = !0, t += ' style="' + oe.escape(n) + '"');
    var i = oe.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class _r {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + oe.escape(this.attributes[t]) + '"');
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class Ir {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", bl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + oe.escape(this.alternate) + '"/>' : '<path d="' + oe.escape(bl[this.pathName]) + '"/>';
  }
}
class Is {
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + oe.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function _l(r) {
  if (r instanceof Gt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Hf(r) {
  if (r instanceof Da)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Uf = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Kf = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, je = {
  math: {},
  text: {}
};
function d(r, e, t, n, a, i) {
  je[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (je[r][n] = je[r][a]);
}
var f = "math", B = "text", b = "main", N = "ams", Ke = "accent-token", te = "bin", Et = "close", Bn = "inner", ue = "mathord", ut = "op-token", Bt = "open", ki = "punct", T = "rel", kr = "spacing", D = "textord";
d(f, b, T, "≡", "\\equiv", !0);
d(f, b, T, "≺", "\\prec", !0);
d(f, b, T, "≻", "\\succ", !0);
d(f, b, T, "∼", "\\sim", !0);
d(f, b, T, "⊥", "\\perp");
d(f, b, T, "⪯", "\\preceq", !0);
d(f, b, T, "⪰", "\\succeq", !0);
d(f, b, T, "≃", "\\simeq", !0);
d(f, b, T, "∣", "\\mid", !0);
d(f, b, T, "≪", "\\ll", !0);
d(f, b, T, "≫", "\\gg", !0);
d(f, b, T, "≍", "\\asymp", !0);
d(f, b, T, "∥", "\\parallel");
d(f, b, T, "⋈", "\\bowtie", !0);
d(f, b, T, "⌣", "\\smile", !0);
d(f, b, T, "⊑", "\\sqsubseteq", !0);
d(f, b, T, "⊒", "\\sqsupseteq", !0);
d(f, b, T, "≐", "\\doteq", !0);
d(f, b, T, "⌢", "\\frown", !0);
d(f, b, T, "∋", "\\ni", !0);
d(f, b, T, "∝", "\\propto", !0);
d(f, b, T, "⊢", "\\vdash", !0);
d(f, b, T, "⊣", "\\dashv", !0);
d(f, b, T, "∋", "\\owns");
d(f, b, ki, ".", "\\ldotp");
d(f, b, ki, "⋅", "\\cdotp");
d(f, b, D, "#", "\\#");
d(B, b, D, "#", "\\#");
d(f, b, D, "&", "\\&");
d(B, b, D, "&", "\\&");
d(f, b, D, "ℵ", "\\aleph", !0);
d(f, b, D, "∀", "\\forall", !0);
d(f, b, D, "ℏ", "\\hbar", !0);
d(f, b, D, "∃", "\\exists", !0);
d(f, b, D, "∇", "\\nabla", !0);
d(f, b, D, "♭", "\\flat", !0);
d(f, b, D, "ℓ", "\\ell", !0);
d(f, b, D, "♮", "\\natural", !0);
d(f, b, D, "♣", "\\clubsuit", !0);
d(f, b, D, "℘", "\\wp", !0);
d(f, b, D, "♯", "\\sharp", !0);
d(f, b, D, "♢", "\\diamondsuit", !0);
d(f, b, D, "ℜ", "\\Re", !0);
d(f, b, D, "♡", "\\heartsuit", !0);
d(f, b, D, "ℑ", "\\Im", !0);
d(f, b, D, "♠", "\\spadesuit", !0);
d(f, b, D, "§", "\\S", !0);
d(B, b, D, "§", "\\S");
d(f, b, D, "¶", "\\P", !0);
d(B, b, D, "¶", "\\P");
d(f, b, D, "†", "\\dag");
d(B, b, D, "†", "\\dag");
d(B, b, D, "†", "\\textdagger");
d(f, b, D, "‡", "\\ddag");
d(B, b, D, "‡", "\\ddag");
d(B, b, D, "‡", "\\textdaggerdbl");
d(f, b, Et, "⎱", "\\rmoustache", !0);
d(f, b, Bt, "⎰", "\\lmoustache", !0);
d(f, b, Et, "⟯", "\\rgroup", !0);
d(f, b, Bt, "⟮", "\\lgroup", !0);
d(f, b, te, "∓", "\\mp", !0);
d(f, b, te, "⊖", "\\ominus", !0);
d(f, b, te, "⊎", "\\uplus", !0);
d(f, b, te, "⊓", "\\sqcap", !0);
d(f, b, te, "∗", "\\ast");
d(f, b, te, "⊔", "\\sqcup", !0);
d(f, b, te, "◯", "\\bigcirc", !0);
d(f, b, te, "∙", "\\bullet", !0);
d(f, b, te, "‡", "\\ddagger");
d(f, b, te, "≀", "\\wr", !0);
d(f, b, te, "⨿", "\\amalg");
d(f, b, te, "&", "\\And");
d(f, b, T, "⟵", "\\longleftarrow", !0);
d(f, b, T, "⇐", "\\Leftarrow", !0);
d(f, b, T, "⟸", "\\Longleftarrow", !0);
d(f, b, T, "⟶", "\\longrightarrow", !0);
d(f, b, T, "⇒", "\\Rightarrow", !0);
d(f, b, T, "⟹", "\\Longrightarrow", !0);
d(f, b, T, "↔", "\\leftrightarrow", !0);
d(f, b, T, "⟷", "\\longleftrightarrow", !0);
d(f, b, T, "⇔", "\\Leftrightarrow", !0);
d(f, b, T, "⟺", "\\Longleftrightarrow", !0);
d(f, b, T, "↦", "\\mapsto", !0);
d(f, b, T, "⟼", "\\longmapsto", !0);
d(f, b, T, "↗", "\\nearrow", !0);
d(f, b, T, "↩", "\\hookleftarrow", !0);
d(f, b, T, "↪", "\\hookrightarrow", !0);
d(f, b, T, "↘", "\\searrow", !0);
d(f, b, T, "↼", "\\leftharpoonup", !0);
d(f, b, T, "⇀", "\\rightharpoonup", !0);
d(f, b, T, "↙", "\\swarrow", !0);
d(f, b, T, "↽", "\\leftharpoondown", !0);
d(f, b, T, "⇁", "\\rightharpoondown", !0);
d(f, b, T, "↖", "\\nwarrow", !0);
d(f, b, T, "⇌", "\\rightleftharpoons", !0);
d(f, N, T, "≮", "\\nless", !0);
d(f, N, T, "", "\\@nleqslant");
d(f, N, T, "", "\\@nleqq");
d(f, N, T, "⪇", "\\lneq", !0);
d(f, N, T, "≨", "\\lneqq", !0);
d(f, N, T, "", "\\@lvertneqq");
d(f, N, T, "⋦", "\\lnsim", !0);
d(f, N, T, "⪉", "\\lnapprox", !0);
d(f, N, T, "⊀", "\\nprec", !0);
d(f, N, T, "⋠", "\\npreceq", !0);
d(f, N, T, "⋨", "\\precnsim", !0);
d(f, N, T, "⪹", "\\precnapprox", !0);
d(f, N, T, "≁", "\\nsim", !0);
d(f, N, T, "", "\\@nshortmid");
d(f, N, T, "∤", "\\nmid", !0);
d(f, N, T, "⊬", "\\nvdash", !0);
d(f, N, T, "⊭", "\\nvDash", !0);
d(f, N, T, "⋪", "\\ntriangleleft");
d(f, N, T, "⋬", "\\ntrianglelefteq", !0);
d(f, N, T, "⊊", "\\subsetneq", !0);
d(f, N, T, "", "\\@varsubsetneq");
d(f, N, T, "⫋", "\\subsetneqq", !0);
d(f, N, T, "", "\\@varsubsetneqq");
d(f, N, T, "≯", "\\ngtr", !0);
d(f, N, T, "", "\\@ngeqslant");
d(f, N, T, "", "\\@ngeqq");
d(f, N, T, "⪈", "\\gneq", !0);
d(f, N, T, "≩", "\\gneqq", !0);
d(f, N, T, "", "\\@gvertneqq");
d(f, N, T, "⋧", "\\gnsim", !0);
d(f, N, T, "⪊", "\\gnapprox", !0);
d(f, N, T, "⊁", "\\nsucc", !0);
d(f, N, T, "⋡", "\\nsucceq", !0);
d(f, N, T, "⋩", "\\succnsim", !0);
d(f, N, T, "⪺", "\\succnapprox", !0);
d(f, N, T, "≆", "\\ncong", !0);
d(f, N, T, "", "\\@nshortparallel");
d(f, N, T, "∦", "\\nparallel", !0);
d(f, N, T, "⊯", "\\nVDash", !0);
d(f, N, T, "⋫", "\\ntriangleright");
d(f, N, T, "⋭", "\\ntrianglerighteq", !0);
d(f, N, T, "", "\\@nsupseteqq");
d(f, N, T, "⊋", "\\supsetneq", !0);
d(f, N, T, "", "\\@varsupsetneq");
d(f, N, T, "⫌", "\\supsetneqq", !0);
d(f, N, T, "", "\\@varsupsetneqq");
d(f, N, T, "⊮", "\\nVdash", !0);
d(f, N, T, "⪵", "\\precneqq", !0);
d(f, N, T, "⪶", "\\succneqq", !0);
d(f, N, T, "", "\\@nsubseteqq");
d(f, N, te, "⊴", "\\unlhd");
d(f, N, te, "⊵", "\\unrhd");
d(f, N, T, "↚", "\\nleftarrow", !0);
d(f, N, T, "↛", "\\nrightarrow", !0);
d(f, N, T, "⇍", "\\nLeftarrow", !0);
d(f, N, T, "⇏", "\\nRightarrow", !0);
d(f, N, T, "↮", "\\nleftrightarrow", !0);
d(f, N, T, "⇎", "\\nLeftrightarrow", !0);
d(f, N, T, "△", "\\vartriangle");
d(f, N, D, "ℏ", "\\hslash");
d(f, N, D, "▽", "\\triangledown");
d(f, N, D, "◊", "\\lozenge");
d(f, N, D, "Ⓢ", "\\circledS");
d(f, N, D, "®", "\\circledR");
d(B, N, D, "®", "\\circledR");
d(f, N, D, "∡", "\\measuredangle", !0);
d(f, N, D, "∄", "\\nexists");
d(f, N, D, "℧", "\\mho");
d(f, N, D, "Ⅎ", "\\Finv", !0);
d(f, N, D, "⅁", "\\Game", !0);
d(f, N, D, "‵", "\\backprime");
d(f, N, D, "▲", "\\blacktriangle");
d(f, N, D, "▼", "\\blacktriangledown");
d(f, N, D, "■", "\\blacksquare");
d(f, N, D, "⧫", "\\blacklozenge");
d(f, N, D, "★", "\\bigstar");
d(f, N, D, "∢", "\\sphericalangle", !0);
d(f, N, D, "∁", "\\complement", !0);
d(f, N, D, "ð", "\\eth", !0);
d(B, b, D, "ð", "ð");
d(f, N, D, "╱", "\\diagup");
d(f, N, D, "╲", "\\diagdown");
d(f, N, D, "□", "\\square");
d(f, N, D, "□", "\\Box");
d(f, N, D, "◊", "\\Diamond");
d(f, N, D, "¥", "\\yen", !0);
d(B, N, D, "¥", "\\yen", !0);
d(f, N, D, "✓", "\\checkmark", !0);
d(B, N, D, "✓", "\\checkmark");
d(f, N, D, "ℶ", "\\beth", !0);
d(f, N, D, "ℸ", "\\daleth", !0);
d(f, N, D, "ℷ", "\\gimel", !0);
d(f, N, D, "ϝ", "\\digamma", !0);
d(f, N, D, "ϰ", "\\varkappa");
d(f, N, Bt, "┌", "\\@ulcorner", !0);
d(f, N, Et, "┐", "\\@urcorner", !0);
d(f, N, Bt, "└", "\\@llcorner", !0);
d(f, N, Et, "┘", "\\@lrcorner", !0);
d(f, N, T, "≦", "\\leqq", !0);
d(f, N, T, "⩽", "\\leqslant", !0);
d(f, N, T, "⪕", "\\eqslantless", !0);
d(f, N, T, "≲", "\\lesssim", !0);
d(f, N, T, "⪅", "\\lessapprox", !0);
d(f, N, T, "≊", "\\approxeq", !0);
d(f, N, te, "⋖", "\\lessdot");
d(f, N, T, "⋘", "\\lll", !0);
d(f, N, T, "≶", "\\lessgtr", !0);
d(f, N, T, "⋚", "\\lesseqgtr", !0);
d(f, N, T, "⪋", "\\lesseqqgtr", !0);
d(f, N, T, "≑", "\\doteqdot");
d(f, N, T, "≓", "\\risingdotseq", !0);
d(f, N, T, "≒", "\\fallingdotseq", !0);
d(f, N, T, "∽", "\\backsim", !0);
d(f, N, T, "⋍", "\\backsimeq", !0);
d(f, N, T, "⫅", "\\subseteqq", !0);
d(f, N, T, "⋐", "\\Subset", !0);
d(f, N, T, "⊏", "\\sqsubset", !0);
d(f, N, T, "≼", "\\preccurlyeq", !0);
d(f, N, T, "⋞", "\\curlyeqprec", !0);
d(f, N, T, "≾", "\\precsim", !0);
d(f, N, T, "⪷", "\\precapprox", !0);
d(f, N, T, "⊲", "\\vartriangleleft");
d(f, N, T, "⊴", "\\trianglelefteq");
d(f, N, T, "⊨", "\\vDash", !0);
d(f, N, T, "⊪", "\\Vvdash", !0);
d(f, N, T, "⌣", "\\smallsmile");
d(f, N, T, "⌢", "\\smallfrown");
d(f, N, T, "≏", "\\bumpeq", !0);
d(f, N, T, "≎", "\\Bumpeq", !0);
d(f, N, T, "≧", "\\geqq", !0);
d(f, N, T, "⩾", "\\geqslant", !0);
d(f, N, T, "⪖", "\\eqslantgtr", !0);
d(f, N, T, "≳", "\\gtrsim", !0);
d(f, N, T, "⪆", "\\gtrapprox", !0);
d(f, N, te, "⋗", "\\gtrdot");
d(f, N, T, "⋙", "\\ggg", !0);
d(f, N, T, "≷", "\\gtrless", !0);
d(f, N, T, "⋛", "\\gtreqless", !0);
d(f, N, T, "⪌", "\\gtreqqless", !0);
d(f, N, T, "≖", "\\eqcirc", !0);
d(f, N, T, "≗", "\\circeq", !0);
d(f, N, T, "≜", "\\triangleq", !0);
d(f, N, T, "∼", "\\thicksim");
d(f, N, T, "≈", "\\thickapprox");
d(f, N, T, "⫆", "\\supseteqq", !0);
d(f, N, T, "⋑", "\\Supset", !0);
d(f, N, T, "⊐", "\\sqsupset", !0);
d(f, N, T, "≽", "\\succcurlyeq", !0);
d(f, N, T, "⋟", "\\curlyeqsucc", !0);
d(f, N, T, "≿", "\\succsim", !0);
d(f, N, T, "⪸", "\\succapprox", !0);
d(f, N, T, "⊳", "\\vartriangleright");
d(f, N, T, "⊵", "\\trianglerighteq");
d(f, N, T, "⊩", "\\Vdash", !0);
d(f, N, T, "∣", "\\shortmid");
d(f, N, T, "∥", "\\shortparallel");
d(f, N, T, "≬", "\\between", !0);
d(f, N, T, "⋔", "\\pitchfork", !0);
d(f, N, T, "∝", "\\varpropto");
d(f, N, T, "◀", "\\blacktriangleleft");
d(f, N, T, "∴", "\\therefore", !0);
d(f, N, T, "∍", "\\backepsilon");
d(f, N, T, "▶", "\\blacktriangleright");
d(f, N, T, "∵", "\\because", !0);
d(f, N, T, "⋘", "\\llless");
d(f, N, T, "⋙", "\\gggtr");
d(f, N, te, "⊲", "\\lhd");
d(f, N, te, "⊳", "\\rhd");
d(f, N, T, "≂", "\\eqsim", !0);
d(f, b, T, "⋈", "\\Join");
d(f, N, T, "≑", "\\Doteq", !0);
d(f, N, te, "∔", "\\dotplus", !0);
d(f, N, te, "∖", "\\smallsetminus");
d(f, N, te, "⋒", "\\Cap", !0);
d(f, N, te, "⋓", "\\Cup", !0);
d(f, N, te, "⩞", "\\doublebarwedge", !0);
d(f, N, te, "⊟", "\\boxminus", !0);
d(f, N, te, "⊞", "\\boxplus", !0);
d(f, N, te, "⋇", "\\divideontimes", !0);
d(f, N, te, "⋉", "\\ltimes", !0);
d(f, N, te, "⋊", "\\rtimes", !0);
d(f, N, te, "⋋", "\\leftthreetimes", !0);
d(f, N, te, "⋌", "\\rightthreetimes", !0);
d(f, N, te, "⋏", "\\curlywedge", !0);
d(f, N, te, "⋎", "\\curlyvee", !0);
d(f, N, te, "⊝", "\\circleddash", !0);
d(f, N, te, "⊛", "\\circledast", !0);
d(f, N, te, "⋅", "\\centerdot");
d(f, N, te, "⊺", "\\intercal", !0);
d(f, N, te, "⋒", "\\doublecap");
d(f, N, te, "⋓", "\\doublecup");
d(f, N, te, "⊠", "\\boxtimes", !0);
d(f, N, T, "⇢", "\\dashrightarrow", !0);
d(f, N, T, "⇠", "\\dashleftarrow", !0);
d(f, N, T, "⇇", "\\leftleftarrows", !0);
d(f, N, T, "⇆", "\\leftrightarrows", !0);
d(f, N, T, "⇚", "\\Lleftarrow", !0);
d(f, N, T, "↞", "\\twoheadleftarrow", !0);
d(f, N, T, "↢", "\\leftarrowtail", !0);
d(f, N, T, "↫", "\\looparrowleft", !0);
d(f, N, T, "⇋", "\\leftrightharpoons", !0);
d(f, N, T, "↶", "\\curvearrowleft", !0);
d(f, N, T, "↺", "\\circlearrowleft", !0);
d(f, N, T, "↰", "\\Lsh", !0);
d(f, N, T, "⇈", "\\upuparrows", !0);
d(f, N, T, "↿", "\\upharpoonleft", !0);
d(f, N, T, "⇃", "\\downharpoonleft", !0);
d(f, b, T, "⊶", "\\origof", !0);
d(f, b, T, "⊷", "\\imageof", !0);
d(f, N, T, "⊸", "\\multimap", !0);
d(f, N, T, "↭", "\\leftrightsquigarrow", !0);
d(f, N, T, "⇉", "\\rightrightarrows", !0);
d(f, N, T, "⇄", "\\rightleftarrows", !0);
d(f, N, T, "↠", "\\twoheadrightarrow", !0);
d(f, N, T, "↣", "\\rightarrowtail", !0);
d(f, N, T, "↬", "\\looparrowright", !0);
d(f, N, T, "↷", "\\curvearrowright", !0);
d(f, N, T, "↻", "\\circlearrowright", !0);
d(f, N, T, "↱", "\\Rsh", !0);
d(f, N, T, "⇊", "\\downdownarrows", !0);
d(f, N, T, "↾", "\\upharpoonright", !0);
d(f, N, T, "⇂", "\\downharpoonright", !0);
d(f, N, T, "⇝", "\\rightsquigarrow", !0);
d(f, N, T, "⇝", "\\leadsto");
d(f, N, T, "⇛", "\\Rrightarrow", !0);
d(f, N, T, "↾", "\\restriction");
d(f, b, D, "‘", "`");
d(f, b, D, "$", "\\$");
d(B, b, D, "$", "\\$");
d(B, b, D, "$", "\\textdollar");
d(f, b, D, "%", "\\%");
d(B, b, D, "%", "\\%");
d(f, b, D, "_", "\\_");
d(B, b, D, "_", "\\_");
d(B, b, D, "_", "\\textunderscore");
d(f, b, D, "∠", "\\angle", !0);
d(f, b, D, "∞", "\\infty", !0);
d(f, b, D, "′", "\\prime");
d(f, b, D, "△", "\\triangle");
d(f, b, D, "Γ", "\\Gamma", !0);
d(f, b, D, "Δ", "\\Delta", !0);
d(f, b, D, "Θ", "\\Theta", !0);
d(f, b, D, "Λ", "\\Lambda", !0);
d(f, b, D, "Ξ", "\\Xi", !0);
d(f, b, D, "Π", "\\Pi", !0);
d(f, b, D, "Σ", "\\Sigma", !0);
d(f, b, D, "Υ", "\\Upsilon", !0);
d(f, b, D, "Φ", "\\Phi", !0);
d(f, b, D, "Ψ", "\\Psi", !0);
d(f, b, D, "Ω", "\\Omega", !0);
d(f, b, D, "A", "Α");
d(f, b, D, "B", "Β");
d(f, b, D, "E", "Ε");
d(f, b, D, "Z", "Ζ");
d(f, b, D, "H", "Η");
d(f, b, D, "I", "Ι");
d(f, b, D, "K", "Κ");
d(f, b, D, "M", "Μ");
d(f, b, D, "N", "Ν");
d(f, b, D, "O", "Ο");
d(f, b, D, "P", "Ρ");
d(f, b, D, "T", "Τ");
d(f, b, D, "X", "Χ");
d(f, b, D, "¬", "\\neg", !0);
d(f, b, D, "¬", "\\lnot");
d(f, b, D, "⊤", "\\top");
d(f, b, D, "⊥", "\\bot");
d(f, b, D, "∅", "\\emptyset");
d(f, N, D, "∅", "\\varnothing");
d(f, b, ue, "α", "\\alpha", !0);
d(f, b, ue, "β", "\\beta", !0);
d(f, b, ue, "γ", "\\gamma", !0);
d(f, b, ue, "δ", "\\delta", !0);
d(f, b, ue, "ϵ", "\\epsilon", !0);
d(f, b, ue, "ζ", "\\zeta", !0);
d(f, b, ue, "η", "\\eta", !0);
d(f, b, ue, "θ", "\\theta", !0);
d(f, b, ue, "ι", "\\iota", !0);
d(f, b, ue, "κ", "\\kappa", !0);
d(f, b, ue, "λ", "\\lambda", !0);
d(f, b, ue, "μ", "\\mu", !0);
d(f, b, ue, "ν", "\\nu", !0);
d(f, b, ue, "ξ", "\\xi", !0);
d(f, b, ue, "ο", "\\omicron", !0);
d(f, b, ue, "π", "\\pi", !0);
d(f, b, ue, "ρ", "\\rho", !0);
d(f, b, ue, "σ", "\\sigma", !0);
d(f, b, ue, "τ", "\\tau", !0);
d(f, b, ue, "υ", "\\upsilon", !0);
d(f, b, ue, "ϕ", "\\phi", !0);
d(f, b, ue, "χ", "\\chi", !0);
d(f, b, ue, "ψ", "\\psi", !0);
d(f, b, ue, "ω", "\\omega", !0);
d(f, b, ue, "ε", "\\varepsilon", !0);
d(f, b, ue, "ϑ", "\\vartheta", !0);
d(f, b, ue, "ϖ", "\\varpi", !0);
d(f, b, ue, "ϱ", "\\varrho", !0);
d(f, b, ue, "ς", "\\varsigma", !0);
d(f, b, ue, "φ", "\\varphi", !0);
d(f, b, te, "∗", "*", !0);
d(f, b, te, "+", "+");
d(f, b, te, "−", "-", !0);
d(f, b, te, "⋅", "\\cdot", !0);
d(f, b, te, "∘", "\\circ", !0);
d(f, b, te, "÷", "\\div", !0);
d(f, b, te, "±", "\\pm", !0);
d(f, b, te, "×", "\\times", !0);
d(f, b, te, "∩", "\\cap", !0);
d(f, b, te, "∪", "\\cup", !0);
d(f, b, te, "∖", "\\setminus", !0);
d(f, b, te, "∧", "\\land");
d(f, b, te, "∨", "\\lor");
d(f, b, te, "∧", "\\wedge", !0);
d(f, b, te, "∨", "\\vee", !0);
d(f, b, D, "√", "\\surd");
d(f, b, Bt, "⟨", "\\langle", !0);
d(f, b, Bt, "∣", "\\lvert");
d(f, b, Bt, "∥", "\\lVert");
d(f, b, Et, "?", "?");
d(f, b, Et, "!", "!");
d(f, b, Et, "⟩", "\\rangle", !0);
d(f, b, Et, "∣", "\\rvert");
d(f, b, Et, "∥", "\\rVert");
d(f, b, T, "=", "=");
d(f, b, T, ":", ":");
d(f, b, T, "≈", "\\approx", !0);
d(f, b, T, "≅", "\\cong", !0);
d(f, b, T, "≥", "\\ge");
d(f, b, T, "≥", "\\geq", !0);
d(f, b, T, "←", "\\gets");
d(f, b, T, ">", "\\gt", !0);
d(f, b, T, "∈", "\\in", !0);
d(f, b, T, "", "\\@not");
d(f, b, T, "⊂", "\\subset", !0);
d(f, b, T, "⊃", "\\supset", !0);
d(f, b, T, "⊆", "\\subseteq", !0);
d(f, b, T, "⊇", "\\supseteq", !0);
d(f, N, T, "⊈", "\\nsubseteq", !0);
d(f, N, T, "⊉", "\\nsupseteq", !0);
d(f, b, T, "⊨", "\\models");
d(f, b, T, "←", "\\leftarrow", !0);
d(f, b, T, "≤", "\\le");
d(f, b, T, "≤", "\\leq", !0);
d(f, b, T, "<", "\\lt", !0);
d(f, b, T, "→", "\\rightarrow", !0);
d(f, b, T, "→", "\\to");
d(f, N, T, "≱", "\\ngeq", !0);
d(f, N, T, "≰", "\\nleq", !0);
d(f, b, kr, " ", "\\ ");
d(f, b, kr, " ", "\\space");
d(f, b, kr, " ", "\\nobreakspace");
d(B, b, kr, " ", "\\ ");
d(B, b, kr, " ", " ");
d(B, b, kr, " ", "\\space");
d(B, b, kr, " ", "\\nobreakspace");
d(f, b, kr, null, "\\nobreak");
d(f, b, kr, null, "\\allowbreak");
d(f, b, ki, ",", ",");
d(f, b, ki, ";", ";");
d(f, N, te, "⊼", "\\barwedge", !0);
d(f, N, te, "⊻", "\\veebar", !0);
d(f, b, te, "⊙", "\\odot", !0);
d(f, b, te, "⊕", "\\oplus", !0);
d(f, b, te, "⊗", "\\otimes", !0);
d(f, b, D, "∂", "\\partial", !0);
d(f, b, te, "⊘", "\\oslash", !0);
d(f, N, te, "⊚", "\\circledcirc", !0);
d(f, N, te, "⊡", "\\boxdot", !0);
d(f, b, te, "△", "\\bigtriangleup");
d(f, b, te, "▽", "\\bigtriangledown");
d(f, b, te, "†", "\\dagger");
d(f, b, te, "⋄", "\\diamond");
d(f, b, te, "⋆", "\\star");
d(f, b, te, "◃", "\\triangleleft");
d(f, b, te, "▹", "\\triangleright");
d(f, b, Bt, "{", "\\{");
d(B, b, D, "{", "\\{");
d(B, b, D, "{", "\\textbraceleft");
d(f, b, Et, "}", "\\}");
d(B, b, D, "}", "\\}");
d(B, b, D, "}", "\\textbraceright");
d(f, b, Bt, "{", "\\lbrace");
d(f, b, Et, "}", "\\rbrace");
d(f, b, Bt, "[", "\\lbrack", !0);
d(B, b, D, "[", "\\lbrack", !0);
d(f, b, Et, "]", "\\rbrack", !0);
d(B, b, D, "]", "\\rbrack", !0);
d(f, b, Bt, "(", "\\lparen", !0);
d(f, b, Et, ")", "\\rparen", !0);
d(B, b, D, "<", "\\textless", !0);
d(B, b, D, ">", "\\textgreater", !0);
d(f, b, Bt, "⌊", "\\lfloor", !0);
d(f, b, Et, "⌋", "\\rfloor", !0);
d(f, b, Bt, "⌈", "\\lceil", !0);
d(f, b, Et, "⌉", "\\rceil", !0);
d(f, b, D, "\\", "\\backslash");
d(f, b, D, "∣", "|");
d(f, b, D, "∣", "\\vert");
d(B, b, D, "|", "\\textbar", !0);
d(f, b, D, "∥", "\\|");
d(f, b, D, "∥", "\\Vert");
d(B, b, D, "∥", "\\textbardbl");
d(B, b, D, "~", "\\textasciitilde");
d(B, b, D, "\\", "\\textbackslash");
d(B, b, D, "^", "\\textasciicircum");
d(f, b, T, "↑", "\\uparrow", !0);
d(f, b, T, "⇑", "\\Uparrow", !0);
d(f, b, T, "↓", "\\downarrow", !0);
d(f, b, T, "⇓", "\\Downarrow", !0);
d(f, b, T, "↕", "\\updownarrow", !0);
d(f, b, T, "⇕", "\\Updownarrow", !0);
d(f, b, ut, "∐", "\\coprod");
d(f, b, ut, "⋁", "\\bigvee");
d(f, b, ut, "⋀", "\\bigwedge");
d(f, b, ut, "⨄", "\\biguplus");
d(f, b, ut, "⋂", "\\bigcap");
d(f, b, ut, "⋃", "\\bigcup");
d(f, b, ut, "∫", "\\int");
d(f, b, ut, "∫", "\\intop");
d(f, b, ut, "∬", "\\iint");
d(f, b, ut, "∭", "\\iiint");
d(f, b, ut, "∏", "\\prod");
d(f, b, ut, "∑", "\\sum");
d(f, b, ut, "⨂", "\\bigotimes");
d(f, b, ut, "⨁", "\\bigoplus");
d(f, b, ut, "⨀", "\\bigodot");
d(f, b, ut, "∮", "\\oint");
d(f, b, ut, "∯", "\\oiint");
d(f, b, ut, "∰", "\\oiiint");
d(f, b, ut, "⨆", "\\bigsqcup");
d(f, b, ut, "∫", "\\smallint");
d(B, b, Bn, "…", "\\textellipsis");
d(f, b, Bn, "…", "\\mathellipsis");
d(B, b, Bn, "…", "\\ldots", !0);
d(f, b, Bn, "…", "\\ldots", !0);
d(f, b, Bn, "⋯", "\\@cdots", !0);
d(f, b, Bn, "⋱", "\\ddots", !0);
d(f, b, D, "⋮", "\\varvdots");
d(f, b, Ke, "ˊ", "\\acute");
d(f, b, Ke, "ˋ", "\\grave");
d(f, b, Ke, "¨", "\\ddot");
d(f, b, Ke, "~", "\\tilde");
d(f, b, Ke, "ˉ", "\\bar");
d(f, b, Ke, "˘", "\\breve");
d(f, b, Ke, "ˇ", "\\check");
d(f, b, Ke, "^", "\\hat");
d(f, b, Ke, "⃗", "\\vec");
d(f, b, Ke, "˙", "\\dot");
d(f, b, Ke, "˚", "\\mathring");
d(f, b, ue, "", "\\@imath");
d(f, b, ue, "", "\\@jmath");
d(f, b, D, "ı", "ı");
d(f, b, D, "ȷ", "ȷ");
d(B, b, D, "ı", "\\i", !0);
d(B, b, D, "ȷ", "\\j", !0);
d(B, b, D, "ß", "\\ss", !0);
d(B, b, D, "æ", "\\ae", !0);
d(B, b, D, "œ", "\\oe", !0);
d(B, b, D, "ø", "\\o", !0);
d(B, b, D, "Æ", "\\AE", !0);
d(B, b, D, "Œ", "\\OE", !0);
d(B, b, D, "Ø", "\\O", !0);
d(B, b, Ke, "ˊ", "\\'");
d(B, b, Ke, "ˋ", "\\`");
d(B, b, Ke, "ˆ", "\\^");
d(B, b, Ke, "˜", "\\~");
d(B, b, Ke, "ˉ", "\\=");
d(B, b, Ke, "˘", "\\u");
d(B, b, Ke, "˙", "\\.");
d(B, b, Ke, "¸", "\\c");
d(B, b, Ke, "˚", "\\r");
d(B, b, Ke, "ˇ", "\\v");
d(B, b, Ke, "¨", '\\"');
d(B, b, Ke, "˝", "\\H");
d(B, b, Ke, "◯", "\\textcircled");
var Jc = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
d(B, b, D, "–", "--", !0);
d(B, b, D, "–", "\\textendash");
d(B, b, D, "—", "---", !0);
d(B, b, D, "—", "\\textemdash");
d(B, b, D, "‘", "`", !0);
d(B, b, D, "‘", "\\textquoteleft");
d(B, b, D, "’", "'", !0);
d(B, b, D, "’", "\\textquoteright");
d(B, b, D, "“", "``", !0);
d(B, b, D, "“", "\\textquotedblleft");
d(B, b, D, "”", "''", !0);
d(B, b, D, "”", "\\textquotedblright");
d(f, b, D, "°", "\\degree", !0);
d(B, b, D, "°", "\\degree");
d(B, b, D, "°", "\\textdegree", !0);
d(f, b, D, "£", "\\pounds");
d(f, b, D, "£", "\\mathsterling", !0);
d(B, b, D, "£", "\\pounds");
d(B, b, D, "£", "\\textsterling", !0);
d(f, N, D, "✠", "\\maltese");
d(B, N, D, "✠", "\\maltese");
var Sl = '0123456789/@."';
for (var Gi = 0; Gi < Sl.length; Gi++) {
  var Cl = Sl.charAt(Gi);
  d(f, b, D, Cl, Cl);
}
var kl = '0123456789!@*()-=+";:?/.,';
for (var Yi = 0; Yi < kl.length; Yi++) {
  var El = kl.charAt(Yi);
  d(B, b, D, El, El);
}
var ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Vi = 0; Vi < ci.length; Vi++) {
  var qa = ci.charAt(Vi);
  d(f, b, ue, qa, qa), d(B, b, D, qa, qa);
}
d(f, N, D, "C", "ℂ");
d(B, N, D, "C", "ℂ");
d(f, N, D, "H", "ℍ");
d(B, N, D, "H", "ℍ");
d(f, N, D, "N", "ℕ");
d(B, N, D, "N", "ℕ");
d(f, N, D, "P", "ℙ");
d(B, N, D, "P", "ℙ");
d(f, N, D, "Q", "ℚ");
d(B, N, D, "Q", "ℚ");
d(f, N, D, "R", "ℝ");
d(B, N, D, "R", "ℝ");
d(f, N, D, "Z", "ℤ");
d(B, N, D, "Z", "ℤ");
d(f, b, ue, "h", "ℎ");
d(B, b, ue, "h", "ℎ");
var pe = "";
for (var St = 0; St < ci.length; St++) {
  var Xe = ci.charAt(St);
  pe = String.fromCharCode(55349, 56320 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56372 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56424 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56580 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56684 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56736 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56788 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56840 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56944 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), St < 26 && (pe = String.fromCharCode(55349, 56632 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe), pe = String.fromCharCode(55349, 56476 + St), d(f, b, ue, Xe, pe), d(B, b, D, Xe, pe));
}
pe = "𝕜";
d(f, b, ue, "k", pe);
d(B, b, D, "k", pe);
for (var qr = 0; qr < 10; qr++) {
  var Nr = qr.toString();
  pe = String.fromCharCode(55349, 57294 + qr), d(f, b, ue, Nr, pe), d(B, b, D, Nr, pe), pe = String.fromCharCode(55349, 57314 + qr), d(f, b, ue, Nr, pe), d(B, b, D, Nr, pe), pe = String.fromCharCode(55349, 57324 + qr), d(f, b, ue, Nr, pe), d(B, b, D, Nr, pe), pe = String.fromCharCode(55349, 57334 + qr), d(f, b, ue, Nr, pe), d(B, b, D, Nr, pe);
}
var Fs = "ÐÞþ";
for (var Xi = 0; Xi < Fs.length; Xi++) {
  var Ha = Fs.charAt(Xi);
  d(f, b, ue, Ha, Ha), d(B, b, D, Ha, Ha);
}
var Ua = [
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
], Nl = [
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
], Wf = function(e, t) {
  var n = e.charCodeAt(0), a = e.charCodeAt(1), i = (n - 55296) * 1024 + (a - 56320) + 65536, s = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var o = Math.floor((i - 119808) / 26);
    return [Ua[o][2], Ua[o][s]];
  } else if (120782 <= i && i <= 120831) {
    var l = Math.floor((i - 120782) / 10);
    return [Nl[l][2], Nl[l][s]];
  } else {
    if (i === 120485 || i === 120486)
      return [Ua[0][2], Ua[0][s]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new K("Unsupported character: " + e);
  }
}, Ei = function(e, t, n) {
  return je[n][e] && je[n][e].replace && (e = je[n][e].replace), {
    value: e,
    metrics: F0(e, t, n)
  };
}, Xt = function(e, t, n, a, i) {
  var s = Ei(e, t, n), o = s.metrics;
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
}, Gf = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Ei(e, "Main-Bold", t).metrics ? Xt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || je[t][e].font === "main" ? Xt(e, "Main-Regular", t, n, a) : Xt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, Yf = function(e, t, n, a, i) {
  return i !== "textord" && Ei(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Vf = function(e, t, n) {
  var a = e.mode, i = e.text, s = ["mord"], o = a === "math" || a === "text" && t.font, l = o ? t.font : t.fontFamily, u = "", c = "";
  if (i.charCodeAt(0) === 55349 && ([u, c] = Wf(i, a)), u.length > 0)
    return Xt(i, u, a, t, s.concat(c));
  if (l) {
    var h, m;
    if (l === "boldsymbol") {
      var g = Yf(i, a, t, s, n);
      h = g.fontName, m = [g.fontClass];
    } else o ? (h = ed[l].fontName, m = [l]) : (h = Ka(l, t.fontWeight, t.fontShape), m = [l, t.fontWeight, t.fontShape]);
    if (Ei(i, h, a).metrics)
      return Xt(i, h, a, t, s.concat(m));
    if (Jc.hasOwnProperty(i) && h.slice(0, 10) === "Typewriter") {
      for (var v = [], y = 0; y < i.length; y++)
        v.push(Xt(i[y], h, a, t, s.concat(m)));
      return Qc(v);
    }
  }
  if (n === "mathord")
    return Xt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var x = je[a][i] && je[a][i].font;
    if (x === "ams") {
      var S = Ka("amsrm", t.fontWeight, t.fontShape);
      return Xt(i, S, a, t, s.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (x === "main" || !x) {
      var w = Ka("textrm", t.fontWeight, t.fontShape);
      return Xt(i, w, a, t, s.concat(t.fontWeight, t.fontShape));
    } else {
      var C = Ka(x, t.fontWeight, t.fontShape);
      return Xt(i, C, a, t, s.concat(C, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Xf = (r, e) => {
  if (Rr(r.classes) !== Rr(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
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
}, Jf = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Gt && n instanceof Gt && Xf(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, z0 = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, Tt = function(e, t, n, a) {
  var i = new Da(e, t, n, a);
  return z0(i), i;
}, Zc = (r, e, t, n) => new Da(r, e, t, n), Zf = function(e, t, n) {
  var a = Tt([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = G(a.height), a.maxFontSize = 1, a;
}, Qf = function(e, t, n, a) {
  var i = new L0(e, t, n, a);
  return z0(i), i;
}, Qc = function(e) {
  var t = new Oa(e);
  return z0(t), t;
}, ep = function(e, t) {
  return e instanceof Oa ? Tt([], [e], t) : e;
}, tp = function(e) {
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
    for (var c = e.positionData, h = 0; h < e.children.length; h++) {
      var m = e.children[h];
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
}, rp = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = tp(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      i = Math.max(i, l.maxFontSize, l.height);
    }
  }
  i += 2;
  var u = Tt(["pstrut"], []);
  u.style.height = G(i);
  for (var c = [], h = a, m = a, g = a, v = 0; v < n.length; v++) {
    var y = n[v];
    if (y.type === "kern")
      g += y.size;
    else {
      var x = y.elem, S = y.wrapperClasses || [], w = y.wrapperStyle || {}, C = Tt(S, [u, x], void 0, w);
      C.style.top = G(-i - g - x.depth), y.marginLeft && (C.style.marginLeft = y.marginLeft), y.marginRight && (C.style.marginRight = y.marginRight), c.push(C), g += x.height + x.depth;
    }
    h = Math.min(h, g), m = Math.max(m, g);
  }
  var E = Tt(["vlist"], c);
  E.style.height = G(m);
  var k;
  if (h < 0) {
    var A = Tt([], []), R = Tt(["vlist"], [A]);
    R.style.height = G(-h);
    var I = Tt(["vlist-s"], [new Gt("​")]);
    k = [Tt(["vlist-r"], [E, I]), Tt(["vlist-r"], [R])];
  } else
    k = [Tt(["vlist-r"], [E])];
  var O = Tt(["vlist-t"], k);
  return k.length === 2 && O.classes.push("vlist-t2"), O.height = m, O.depth = -h, O;
}, np = (r, e) => {
  var t = Tt(["mspace"], [], e), n = Ge(r, e);
  return t.style.marginRight = G(n), t;
}, Ka = function(e, t, n) {
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
}, ed = {
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
}, td = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, ap = function(e, t) {
  var [n, a, i] = td[e], s = new Ir(n), o = new _r([s], {
    width: G(a),
    height: G(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), l = Zc(["overlay"], [o], t);
  return l.height = i, l.style.height = G(i), l.style.width = G(a), l;
}, L = {
  fontMap: ed,
  makeSymbol: Xt,
  mathsym: Gf,
  makeSpan: Tt,
  makeSvgSpan: Zc,
  makeLineSpan: Zf,
  makeAnchor: Qf,
  makeFragment: Qc,
  wrapFragment: ep,
  makeVList: rp,
  makeOrd: Vf,
  makeGlue: np,
  staticSvg: ap,
  svgData: td,
  tryCombineChars: Jf
}, We = {
  number: 3,
  unit: "mu"
}, Hr = {
  number: 4,
  unit: "mu"
}, mr = {
  number: 5,
  unit: "mu"
}, ip = {
  mord: {
    mop: We,
    mbin: Hr,
    mrel: mr,
    minner: We
  },
  mop: {
    mord: We,
    mop: We,
    mrel: mr,
    minner: We
  },
  mbin: {
    mord: Hr,
    mop: Hr,
    mopen: Hr,
    minner: Hr
  },
  mrel: {
    mord: mr,
    mop: mr,
    mopen: mr,
    minner: mr
  },
  mopen: {},
  mclose: {
    mop: We,
    mbin: Hr,
    mrel: mr,
    minner: We
  },
  mpunct: {
    mord: We,
    mop: We,
    mrel: mr,
    mopen: We,
    mclose: We,
    mpunct: We,
    minner: We
  },
  minner: {
    mord: We,
    mop: We,
    mbin: Hr,
    mrel: mr,
    mopen: We,
    mpunct: We,
    minner: We
  }
}, sp = {
  mord: {
    mop: We
  },
  mop: {
    mord: We,
    mop: We
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: We
  },
  mpunct: {},
  minner: {
    mop: We
  }
}, rd = {}, di = {}, hi = {};
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
    rd[t[l]] = o;
  e && (i && (di[e] = i), s && (hi[e] = s));
}
function pn(r) {
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
var mi = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, tt = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Sr = L.makeSpan, op = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], lp = ["rightmost", "mrel", "mclose", "mpunct"], up = {
  display: ce.DISPLAY,
  text: ce.TEXT,
  script: ce.SCRIPT,
  scriptscript: ce.SCRIPTSCRIPT
}, cp = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, mt = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = Me(e[s], t);
    if (o instanceof Oa) {
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
    c.type === "sizing" ? u = t.havingSize(c.size) : c.type === "styling" && (u = t.havingStyle(up[c.style]));
  }
  var h = Sr([a[0] || "leftmost"], [], t), m = Sr([a[1] || "rightmost"], [], t), g = n === "root";
  return Tl(i, (v, y) => {
    var x = y.classes[0], S = v.classes[0];
    x === "mbin" && oe.contains(lp, S) ? y.classes[0] = "mord" : S === "mbin" && oe.contains(op, x) && (v.classes[0] = "mord");
  }, {
    node: h
  }, m, g), Tl(i, (v, y) => {
    var x = Ls(y), S = Ls(v), w = x && S ? v.hasClass("mtight") ? sp[x][S] : ip[x][S] : null;
    if (w)
      return L.makeGlue(w, u);
  }, {
    node: h
  }, m, g), i;
}, Tl = function r(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = nd(o);
    if (l) {
      r(l.children, t, n, null, i);
      continue;
    }
    var u = !o.hasClass("mspace");
    if (u) {
      var c = t(o, n.node);
      c && (n.insertAfter ? n.insertAfter(c) : (e.unshift(c), s++));
    }
    u ? n.node = o : i && o.hasClass("newline") && (n.node = Sr(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((h) => (m) => {
      e.splice(h + 1, 0, m), s++;
    })(s);
  }
  a && e.pop();
}, nd = function(e) {
  return e instanceof Oa || e instanceof L0 || e instanceof Da && e.hasClass("enclosing") ? e : null;
}, dp = function r(e, t) {
  var n = nd(e);
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
}, Ls = function(e, t) {
  return e ? (t && (e = dp(e, t)), cp[e.classes[0]] || null) : null;
}, ma = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Sr(t.concat(n));
}, Me = function(e, t, n) {
  if (!e)
    return Sr();
  if (di[e.type]) {
    var a = di[e.type](e, t);
    if (n && t.size !== n.size) {
      a = Sr(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new K("Got group of unknown type: '" + e.type + "'");
};
function Wa(r, e) {
  var t = Sr(["base"], r, e), n = Sr(["strut"]);
  return n.style.height = G(t.height + t.depth), t.depth && (n.style.verticalAlign = G(-t.depth)), t.children.unshift(n), t;
}
function zs(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = mt(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (i.push(Wa(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(Wa(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(Wa(s, e));
  var u;
  t ? (u = Wa(mt(t, e, !0)), u.classes = ["tag"], i.push(u)) : a && i.push(a);
  var c = Sr(["katex-html"], i);
  if (c.setAttribute("aria-hidden", "true"), u) {
    var h = u.children[0];
    h.style.height = G(c.height + c.depth), c.depth && (h.style.verticalAlign = G(-c.depth));
  }
  return c;
}
function ad(r) {
  return new Oa(r);
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
    this.classes.length > 0 && (e.className = Rr(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += oe.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + oe.escape(Rr(this.classes)) + '"'), e += ">";
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
class aa {
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
    return oe.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class hp {
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
    return e.setAttribute("width", G(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + G(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var H = {
  MathNode: Ht,
  TextNode: aa,
  SpaceNode: hp,
  newDocumentFragment: ad
}, Yt = function(e, t, n) {
  return je[t][e] && je[t][e].replace && e.charCodeAt(0) !== 55349 && !(Jc.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = je[t][e].replace), new H.TextNode(e);
}, P0 = function(e) {
  return e.length === 1 ? e[0] : new H.MathNode("mrow", e);
}, B0 = function(e, t) {
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
  if (oe.contains(["\\imath", "\\jmath"], i))
    return null;
  je[a][i] && je[a][i].replace && (i = je[a][i].replace);
  var s = L.fontMap[n].fontName;
  return F0(i, s, a) ? L.fontMap[n].variant : null;
}, Rt = function(e, t, n) {
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
        if (u instanceof aa && u.text === ".") {
          s.children.push(...l.children);
          continue;
        }
      } else if (s.type === "mi" && s.children.length === 1) {
        var c = s.children[0];
        if (c instanceof aa && c.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var h = l.children[0];
          h instanceof aa && h.text.length > 0 && (h.text = h.text.slice(0, 1) + "̸" + h.text.slice(1), i.pop());
        }
      }
    }
    i.push(l), s = l;
  }
  return i;
}, Fr = function(e, t, n) {
  return P0(Rt(e, t, n));
}, ze = function(e, t) {
  if (!e)
    return new H.MathNode("mrow");
  if (hi[e.type]) {
    var n = hi[e.type](e, t);
    return n;
  } else
    throw new K("Got group of unknown type: '" + e.type + "'");
};
function Al(r, e, t, n, a) {
  var i = Rt(r, t), s;
  i.length === 1 && i[0] instanceof Ht && oe.contains(["mrow", "mtable"], i[0].type) ? s = i[0] : s = new H.MathNode("mrow", i);
  var o = new H.MathNode("annotation", [new H.TextNode(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new H.MathNode("semantics", [s, o]), u = new H.MathNode("math", [l]);
  u.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && u.setAttribute("display", "block");
  var c = a ? "katex" : "katex-mathml";
  return L.makeSpan([c], [u]);
}
var id = function(e) {
  return new pr({
    style: e.displayMode ? ce.DISPLAY : ce.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, sd = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = L.makeSpan(n, [e]);
  }
  return e;
}, mp = function(e, t, n) {
  var a = id(n), i;
  if (n.output === "mathml")
    return Al(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = zs(e, a);
    i = L.makeSpan(["katex"], [s]);
  } else {
    var o = Al(e, t, a, n.displayMode, !1), l = zs(e, a);
    i = L.makeSpan(["katex"], [o, l]);
  }
  return sd(i, n);
}, fp = function(e, t, n) {
  var a = id(n), i = zs(e, a), s = L.makeSpan(["katex"], [i]);
  return sd(s, n);
}, pp = {
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
}, gp = function(e) {
  var t = new H.MathNode("mo", [new H.TextNode(pp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, vp = {
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
}, bp = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, yp = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (oe.contains(["widehat", "widecheck", "widetilde", "utilde"], l)) {
      var u = e, c = bp(u.base), h, m, g;
      if (c > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, g = 0.42, m = l + "4") : (h = 312, o = 2340, g = 0.34, m = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][c];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], g = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], m = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], g = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], m = "tilde" + v);
      }
      var y = new Ir(m), x = new _r([y], {
        width: "100%",
        height: G(g),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: L.makeSvgSpan([], [x], t),
        minWidth: 0,
        height: g
      };
    } else {
      var S = [], w = vp[l], [C, E, k] = w, A = k / 1e3, R = C.length, I, O;
      if (R === 1) {
        var F = w[3];
        I = ["hide-tail"], O = [F];
      } else if (R === 2)
        I = ["halfarrow-left", "halfarrow-right"], O = ["xMinYMin", "xMaxYMin"];
      else if (R === 3)
        I = ["brace-left", "brace-center", "brace-right"], O = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + R + " children.");
      for (var j = 0; j < R; j++) {
        var V = new Ir(C[j]), X = new _r([V], {
          width: "400em",
          height: G(A),
          viewBox: "0 0 " + o + " " + k,
          preserveAspectRatio: O[j] + " slice"
        }), J = L.makeSvgSpan([I[j]], [X], t);
        if (R === 1)
          return {
            span: J,
            minWidth: E,
            height: A
          };
        J.style.height = G(A), S.push(J);
      }
      return {
        span: L.makeSpan(["stretchy"], S, t),
        minWidth: E,
        height: A
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = G(s), i > 0 && (a.style.minWidth = G(i)), a;
}, xp = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = L.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var l = i.color && i.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var u = [];
    /^[bx]cancel$/.test(t) && u.push(new Is({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && u.push(new Is({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var c = new _r(u, {
      width: "100%",
      height: G(o)
    });
    s = L.makeSvgSpan([], [c], i);
  }
  return s.height = o, s.style.height = G(o), s;
}, Cr = {
  encloseSpan: xp,
  mathMLnode: gp,
  svgSpan: yp
};
function _e(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function j0(r) {
  var e = Ni(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Ni(r) {
  return r && (r.type === "atom" || Kf.hasOwnProperty(r.type)) ? r : null;
}
var $0 = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = _e(r.base, "accent"), t = n.base, r.base = t, a = Hf(Me(r, e)), r.base = n) : (n = _e(r, "accent"), t = n.base);
  var i = Me(t, e.havingCrampedStyle()), s = n.isShifty && oe.isCharacterBox(t), o = 0;
  if (s) {
    var l = oe.getBaseElem(t), u = Me(l, e.havingCrampedStyle());
    o = _l(u).skew;
  }
  var c = n.label === "\\c", h = c ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = Cr.svgSpan(n, e), m = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + G(2 * o) + ")",
          marginLeft: G(2 * o)
        } : void 0
      }]
    }, e);
  else {
    var g, v;
    n.label === "\\vec" ? (g = L.staticSvg("vec", e), v = L.svgData.vec[1]) : (g = L.makeOrd({
      mode: n.mode,
      text: n.label
    }, e, "textord"), g = _l(g), g.italic = 0, v = g.width, c && (h += g.depth)), m = L.makeSpan(["accent-body"], [g]);
    var y = n.label === "\\textcircled";
    y && (m.classes.push("accent-full"), h = i.height);
    var x = o;
    y || (x -= v / 2), m.style.left = G(x), n.label === "\\textcircled" && (m.style.top = ".2em"), m = L.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -h
      }, {
        type: "elem",
        elem: m
      }]
    }, e);
  }
  var S = L.makeSpan(["mord", "accent"], [m], e);
  return a ? (a.children[0] = S, a.height = Math.max(S.height, a.height), a.classes[0] = "mord", a) : S;
}, od = (r, e) => {
  var t = r.isStretchy ? Cr.mathMLnode(r.label) : new H.MathNode("mo", [Yt(r.label, r.mode)]), n = new H.MathNode("mover", [ze(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, wp = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
Z({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = mi(e[0]), n = !wp.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: $0,
  mathmlBuilder: od
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
  htmlBuilder: $0,
  mathmlBuilder: od
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
    var t = Me(r.base, e), n = Cr.svgSpan(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = L.makeVList({
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
    var t = Cr.mathMLnode(r.label), n = new H.MathNode("munder", [ze(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Ga = (r) => {
  var e = new H.MathNode("mpadded", r ? [r] : []);
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
    var t = e.style, n = e.havingStyle(t.sup()), a = L.wrapFragment(Me(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = L.wrapFragment(Me(r.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = Cr.svgSpan(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, u = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (u -= a.depth);
    var c;
    if (s) {
      var h = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
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
          shift: h
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
    var t = Cr.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = Ga(ze(r.body, e));
      if (r.below) {
        var i = Ga(ze(r.below, e));
        n = new H.MathNode("munderover", [t, i, a]);
      } else
        n = new H.MathNode("mover", [t, a]);
    } else if (r.below) {
      var s = Ga(ze(r.below, e));
      n = new H.MathNode("munder", [t, s]);
    } else
      n = Ga(), n = new H.MathNode("mover", [t, n]);
    return n;
  }
});
var _p = L.makeSpan;
function ld(r, e) {
  var t = mt(r.body, e, !0);
  return _p([r.mclass], t, e);
}
function ud(r, e) {
  var t, n = Rt(r.body, e);
  return r.mclass === "minner" ? t = new H.MathNode("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new H.MathNode("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new H.MathNode("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
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
      body: tt(a),
      isCharacterBox: oe.isCharacterBox(a)
    };
  },
  htmlBuilder: ld,
  mathmlBuilder: ud
});
var Ti = (r) => {
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
      mclass: Ti(e[0]),
      body: tt(e[1]),
      isCharacterBox: oe.isCharacterBox(e[1])
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
    n !== "\\stackrel" ? s = Ti(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: tt(a)
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
      isCharacterBox: oe.isCharacterBox(l)
    };
  },
  htmlBuilder: ld,
  mathmlBuilder: ud
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
      mclass: Ti(e[0]),
      body: tt(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = mt(r.body, e, !0), n = L.makeSpan([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = Rt(r.body, e), n = new H.MathNode("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var Sp = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Ml = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ol = (r) => r.type === "textord" && r.text === "@", Cp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function kp(r, e, t) {
  var n = Sp[r];
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
function Ep(r) {
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
      throw new K("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = Ml(), l = 0; l < s.length; l++)
      if (!Ol(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var u = j0(s[l]).text, c = new Array(2);
        if (c[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, c[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(u) > -1)) if ("<>AV".indexOf(u) > -1)
          for (var h = 0; h < 2; h++) {
            for (var m = !0, g = l + 1; g < s.length; g++) {
              if (Cp(s[g], u)) {
                m = !1, l = g;
                break;
              }
              if (Ol(s[g]))
                throw new K("Missing a " + u + " character to complete a CD arrow.", s[g]);
              c[h].body.push(s[g]);
            }
            if (m)
              throw new K("Missing a " + u + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new K('Expected one of "<>AV=|." after @', s[l]);
        var v = kp(u, c, r), y = {
          type: "styling",
          body: [v],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        n.push(y), o = Ml();
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
    var t = e.havingStyle(e.style.sup()), n = L.wrapFragment(Me(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = G(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new H.MathNode("mrow", [ze(r.label, e)]);
    return t = new H.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new H.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
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
    var t = L.wrapFragment(Me(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new H.MathNode("mrow", [ze(r.fragment, e)]);
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
    var l = parseInt(i), u;
    if (isNaN(l))
      throw new K("\\@char has non-numeric argument " + i);
    if (l < 0 || l >= 1114111)
      throw new K("\\@char with invalid code point " + i);
    return l <= 65535 ? u = String.fromCharCode(l) : (l -= 65536, u = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: u
    };
  }
});
var cd = (r, e) => {
  var t = mt(r.body, e.withColor(r.color), !1);
  return L.makeFragment(t);
}, dd = (r, e) => {
  var t = Rt(r.body, e.withColor(r.color)), n = new H.MathNode("mstyle", t);
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
      body: tt(a)
    };
  },
  htmlBuilder: cd,
  mathmlBuilder: dd
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
  htmlBuilder: cd,
  mathmlBuilder: dd
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
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = G(Ge(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new H.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", G(Ge(r.size, e)))), t;
  }
});
var Ps = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, hd = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new K("Expected a control sequence", r);
  return e;
}, Np = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, md = (r, e, t, n) => {
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
    if (Ps[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = Ps[n.text]), _e(e.parseFunction(), "internal");
    throw new K("Invalid token after macro prefix", n);
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
      throw new K("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new K('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new K('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new K("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(a, {
      tokens: l,
      numArgs: i,
      delimiters: o
    }, t === Ps[t]), {
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
    } = r, n = hd(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Np(e);
    return md(e, n, a, t === "\\\\globallet"), {
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
    } = r, n = hd(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return md(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ta = function(e, t, n) {
  var a = je.math[e] && je.math[e].replace, i = F0(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, q0 = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = L.makeSpan(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, fd = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = G(i), e.height -= i, e.depth += i;
}, Tp = function(e, t, n, a, i, s) {
  var o = L.makeSymbol(e, "Main-Regular", i, a), l = q0(o, t, a, s);
  return n && fd(l, a, t), l;
}, Ap = function(e, t, n, a) {
  return L.makeSymbol(e, "Size" + t + "-Regular", n, a);
}, pd = function(e, t, n, a, i, s) {
  var o = Ap(e, t, i, a), l = q0(L.makeSpan(["delimsizing", "size" + t], [o], a), ce.TEXT, a, s);
  return n && fd(l, a, ce.TEXT), l;
}, Ji = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = L.makeSpan(["delimsizinginner", a], [L.makeSpan([], [L.makeSymbol(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, Zi = function(e, t, n) {
  var a = ar["Size4-Regular"][e.charCodeAt(0)] ? ar["Size4-Regular"][e.charCodeAt(0)][4] : ar["Size1-Regular"][e.charCodeAt(0)][4], i = new Ir("inner", Ff(e, Math.round(1e3 * t))), s = new _r([i], {
    width: G(a),
    height: G(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = L.makeSvgSpan([], [s], n);
  return o.height = t, o.style.height = G(t), o.style.width = G(a), {
    type: "elem",
    elem: o
  };
}, Bs = 8e-3, Ya = {
  type: "kern",
  size: -1 * Bs
}, Mp = ["|", "\\lvert", "\\rvert", "\\vert"], Op = ["\\|", "\\lVert", "\\rVert", "\\Vert"], gd = function(e, t, n, a, i, s) {
  var o, l, u, c, h = "", m = 0;
  o = u = c = e, l = null;
  var g = "Size1-Regular";
  e === "\\uparrow" ? u = c = "⏐" : e === "\\Uparrow" ? u = c = "‖" : e === "\\downarrow" ? o = u = "⏐" : e === "\\Downarrow" ? o = u = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", u = "⏐", c = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", u = "‖", c = "\\Downarrow") : oe.contains(Mp, e) ? (u = "∣", h = "vert", m = 333) : oe.contains(Op, e) ? (u = "∥", h = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", u = "⎢", c = "⎣", g = "Size4-Regular", h = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", u = "⎥", c = "⎦", g = "Size4-Regular", h = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (u = o = "⎢", c = "⎣", g = "Size4-Regular", h = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", u = c = "⎢", g = "Size4-Regular", h = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (u = o = "⎥", c = "⎦", g = "Size4-Regular", h = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", u = c = "⎥", g = "Size4-Regular", h = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", u = "⎜", c = "⎝", g = "Size4-Regular", h = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", u = "⎟", c = "⎠", g = "Size4-Regular", h = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", c = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", c = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", c = "⎩", u = "⎪", g = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", c = "⎭", u = "⎪", g = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", c = "⎭", u = "⎪", g = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", c = "⎩", u = "⎪", g = "Size4-Regular");
  var v = ta(o, g, i), y = v.height + v.depth, x = ta(u, g, i), S = x.height + x.depth, w = ta(c, g, i), C = w.height + w.depth, E = 0, k = 1;
  if (l !== null) {
    var A = ta(l, g, i);
    E = A.height + A.depth, k = 2;
  }
  var R = y + C + E, I = Math.max(0, Math.ceil((t - R) / (k * S))), O = R + I * k * S, F = a.fontMetrics().axisHeight;
  n && (F *= a.sizeMultiplier);
  var j = O / 2 - F, V = [];
  if (h.length > 0) {
    var X = O - y - C, J = Math.round(O * 1e3), Y = Lf(h, Math.round(X * 1e3)), he = new Ir(h, Y), ie = (m / 1e3).toFixed(3) + "em", W = (J / 1e3).toFixed(3) + "em", me = new _r([he], {
      width: ie,
      height: W,
      viewBox: "0 0 " + m + " " + J
    }), de = L.makeSvgSpan([], [me], a);
    de.height = J / 1e3, de.style.width = ie, de.style.height = W, V.push({
      type: "elem",
      elem: de
    });
  } else {
    if (V.push(Ji(c, g, i)), V.push(Ya), l === null) {
      var Oe = O - y - C + 2 * Bs;
      V.push(Zi(u, Oe, a));
    } else {
      var le = (O - y - C - E) / 2 + 2 * Bs;
      V.push(Zi(u, le, a)), V.push(Ya), V.push(Ji(l, g, i)), V.push(Ya), V.push(Zi(u, le, a));
    }
    V.push(Ya), V.push(Ji(o, g, i));
  }
  var Ze = a.havingBaseStyle(ce.TEXT), rt = L.makeVList({
    positionType: "bottom",
    positionData: j,
    children: V
  }, Ze);
  return q0(L.makeSpan(["delimsizing", "mult"], [rt], Ze), ce.TEXT, a, s);
}, Qi = 80, es = 0.08, ts = function(e, t, n, a, i) {
  var s = If(e, a, n), o = new Ir(e, s), l = new _r([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: G(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return L.makeSvgSpan(["hide-tail"], [l], i);
}, Dp = function(e, t) {
  var n = t.havingBaseSizing(), a = xd("\\surd", e * n.sizeMultiplier, yd, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l = 0, u = 0, c = 0, h;
  return a.type === "small" ? (c = 1e3 + 1e3 * s + Qi, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), l = (1 + s + es) / i, u = (1 + s) / i, o = ts("sqrtMain", l, c, s, t), o.style.minWidth = "0.853em", h = 0.833 / i) : a.type === "large" ? (c = (1e3 + Qi) * ia[a.size], u = (ia[a.size] + s) / i, l = (ia[a.size] + s + es) / i, o = ts("sqrtSize" + a.size, l, c, s, t), o.style.minWidth = "1.02em", h = 1 / i) : (l = e + s + es, u = e + s, c = Math.floor(1e3 * e + s) + Qi, o = ts("sqrtTall", l, c, s, t), o.style.minWidth = "0.742em", h = 1.056), o.height = u, o.style.height = G(l), {
    span: o,
    advanceWidth: h,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, vd = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Rp = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], bd = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], ia = [0, 1.2, 1.8, 2.4, 3], Ip = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), oe.contains(vd, e) || oe.contains(bd, e))
    return pd(e, t, !1, n, a, i);
  if (oe.contains(Rp, e))
    return gd(e, ia[t], !1, n, a, i);
  throw new K("Illegal delimiter: '" + e + "'");
}, Fp = [{
  type: "small",
  style: ce.SCRIPTSCRIPT
}, {
  type: "small",
  style: ce.SCRIPT
}, {
  type: "small",
  style: ce.TEXT
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
}], Lp = [{
  type: "small",
  style: ce.SCRIPTSCRIPT
}, {
  type: "small",
  style: ce.SCRIPT
}, {
  type: "small",
  style: ce.TEXT
}, {
  type: "stack"
}], yd = [{
  type: "small",
  style: ce.SCRIPTSCRIPT
}, {
  type: "small",
  style: ce.SCRIPT
}, {
  type: "small",
  style: ce.TEXT
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
}], zp = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, xd = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length && n[s].type !== "stack"; s++) {
    var o = ta(e, zp(n[s]), "math"), l = o.height + o.depth;
    if (n[s].type === "small") {
      var u = a.havingBaseStyle(n[s].style);
      l *= u.sizeMultiplier;
    }
    if (l > t)
      return n[s];
  }
  return n[n.length - 1];
}, wd = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  oe.contains(bd, e) ? o = Fp : oe.contains(vd, e) ? o = yd : o = Lp;
  var l = xd(e, t, o, a);
  return l.type === "small" ? Tp(e, l.style, n, a, i, s) : l.type === "large" ? pd(e, l.size, n, a, i, s) : gd(e, t, n, a, i, s);
}, Pp = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, l = 901, u = 5 / a.fontMetrics().ptPerEm, c = Math.max(t - o, n + o), h = Math.max(
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
  return wd(e, h, !0, a, i, s);
}, xr = {
  sqrtImage: Dp,
  sizedDelim: Ip,
  sizeToMaxHeight: ia,
  customSizedDelim: wd,
  leftRightDelim: Pp
}, Dl = {
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
}, Bp = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Ai(r, e) {
  var t = Ni(r);
  if (t && oe.contains(Bp, t.text))
    return t;
  throw t ? new K("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new K("Invalid delimiter type '" + r.type + "'", r);
}
Z({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Ai(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Dl[r.funcName].size,
      mclass: Dl[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? L.makeSpan([r.mclass]) : xr.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Yt(r.delim, r.mode));
    var t = new H.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = G(xr.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Rl(r) {
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
      throw new K("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Ai(e[0], r).text,
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
    var t = Ai(e[0], r), n = r.parser;
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
    Rl(r);
    for (var t = mt(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++)
      t[s].isMiddle ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var o;
    if (r.left === "." ? o = ma(e, ["mopen"]) : o = xr.leftRightDelim(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(o), i)
      for (var l = 1; l < t.length; l++) {
        var u = t[l], c = u.isMiddle;
        c && (t[l] = xr.leftRightDelim(c.delim, n, a, c.options, r.mode, []));
      }
    var h;
    if (r.right === ".")
      h = ma(e, ["mclose"]);
    else {
      var m = r.rightColor ? e.withColor(r.rightColor) : e;
      h = xr.leftRightDelim(r.right, n, a, m, r.mode, ["mclose"]);
    }
    return t.push(h), L.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Rl(r);
    var t = Rt(r.body, e);
    if (r.left !== ".") {
      var n = new H.MathNode("mo", [Yt(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new H.MathNode("mo", [Yt(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return P0(t);
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
    var t = Ai(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new K("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = ma(e, []);
    else {
      t = xr.sizedDelim(r.delim, 1, e, r.mode, []);
      var n = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = n;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? Yt("|", "text") : Yt(r.delim, r.mode), n = new H.MathNode("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var H0 = (r, e) => {
  var t = L.wrapFragment(Me(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s = 0, o = oe.isCharacterBox(r.body);
  if (n === "sout")
    i = L.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = Ge({
      number: 0.6,
      unit: "pt"
    }, e), u = Ge({
      number: 0.35,
      unit: "ex"
    }, e), c = e.havingBaseSizing();
    a = a / c.sizeMultiplier;
    var h = t.height + t.depth + l + u;
    t.style.paddingLeft = G(h / 2 + l);
    var m = Math.floor(1e3 * h * a), g = Df(m), v = new _r([new Ir("phase", g)], {
      width: "400em",
      height: G(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = L.makeSvgSpan(["hide-tail"], [v], e), i.style.height = G(h), s = t.depth + l + u;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var y = 0, x = 0, S = 0;
    /box/.test(n) ? (S = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), y = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : S), x = y) : n === "angl" ? (S = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), y = 4 * S, x = Math.max(0, 0.25 - t.depth)) : (y = o ? 0.2 : 0, x = y), i = Cr.encloseSpan(t, n, y, x, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = G(S)) : n === "angl" && S !== 0.049 && (i.style.borderTopWidth = G(S), i.style.borderRightWidth = G(S)), s = t.depth + x, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
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
}, U0 = (r, e) => {
  var t = 0, n = new H.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [ze(r.body, e)]);
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
  htmlBuilder: H0,
  mathmlBuilder: U0
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
  htmlBuilder: H0,
  mathmlBuilder: U0
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
  htmlBuilder: H0,
  mathmlBuilder: U0
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
var _d = {};
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
    _d[t[l]] = o;
  i && (di[e] = i), s && (hi[e] = s);
}
var Sd = {};
function _(r, e) {
  Sd[r] = e;
}
function Il(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Mi = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new K("{" + r.envName + "} can be used only in display mode.");
};
function K0(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function jr(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: l,
    singleRow: u,
    emptySingleRow: c,
    maxNumCols: h,
    leqno: m
  } = e;
  if (r.gullet.beginGroup(), u || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var g = r.gullet.expandMacroAsText("\\arraystretch");
    if (g == null)
      s = 1;
    else if (s = parseFloat(g), !s || s < 0)
      throw new K("Invalid \\arraystretch: " + g);
  }
  r.gullet.beginGroup();
  var v = [], y = [v], x = [], S = [], w = l != null ? [] : void 0;
  function C() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function E() {
    w && (r.gullet.macros.get("\\df@tag") ? (w.push(r.subparse([new Wt("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : w.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (C(), S.push(Il(r)); ; ) {
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
    var A = r.fetch().text;
    if (A === "&") {
      if (h && v.length === h) {
        if (u || o)
          throw new K("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (A === "\\end") {
      E(), v.length === 1 && k.type === "styling" && k.body[0].body.length === 0 && (y.length > 1 || !c) && y.pop(), S.length < y.length + 1 && S.push([]);
      break;
    } else if (A === "\\\\") {
      r.consume();
      var R = void 0;
      r.gullet.future().text !== " " && (R = r.parseSizeGroup(!0)), x.push(R ? R.value : null), E(), S.push(Il(r)), v = [], y.push(v), C();
    } else
      throw new K("Expected & or \\\\ or \\cr or \\end", r.nextToken);
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
    hLinesBeforeRow: S,
    colSeparationType: o,
    tags: w,
    leqno: m
  };
}
function W0(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var dr = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(i), u = [], c = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), h = 1 / t.fontMetrics().ptPerEm, m = 5 * h;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var g = t.havingStyle(ce.SCRIPT).sizeMultiplier;
    m = 0.2778 * (g / t.sizeMultiplier);
  }
  var v = e.colSeparationType === "CD" ? Ge({
    number: 3,
    unit: "ex"
  }, t) : 12 * h, y = 3 * h, x = e.arraystretch * v, S = 0.7 * x, w = 0.3 * x, C = 0;
  function E(Be) {
    for (var Ft = 0; Ft < Be.length; ++Ft)
      Ft > 0 && (C += 0.25), u.push({
        pos: C,
        isDashed: Be[Ft]
      });
  }
  for (E(s[0]), n = 0; n < e.body.length; ++n) {
    var k = e.body[n], A = S, R = w;
    o < k.length && (o = k.length);
    var I = new Array(k.length);
    for (a = 0; a < k.length; ++a) {
      var O = Me(k[a], t);
      R < O.depth && (R = O.depth), A < O.height && (A = O.height), I[a] = O;
    }
    var F = e.rowGaps[n], j = 0;
    F && (j = Ge(F, t), j > 0 && (j += w, R < j && (R = j), j = 0)), e.addJot && (R += y), I.height = A, I.depth = R, C += A, I.pos = C, C += R + j, l[n] = I, E(s[n + 1]);
  }
  var V = C / 2 + t.fontMetrics().axisHeight, X = e.cols || [], J = [], Y, he, ie = [];
  if (e.tags && e.tags.some((Be) => Be))
    for (n = 0; n < i; ++n) {
      var W = l[n], me = W.pos - V, de = e.tags[n], Oe = void 0;
      de === !0 ? Oe = L.makeSpan(["eqn-num"], [], t) : de === !1 ? Oe = L.makeSpan([], [], t) : Oe = L.makeSpan([], mt(de, t, !0), t), Oe.depth = W.depth, Oe.height = W.height, ie.push({
        type: "elem",
        elem: Oe,
        shift: me
      });
    }
  for (
    a = 0, he = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || he < X.length;
    ++a, ++he
  ) {
    for (var le = X[he] || {}, Ze = !0; le.type === "separator"; ) {
      if (Ze || (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = G(t.fontMetrics().doubleRuleSep), J.push(Y)), le.separator === "|" || le.separator === ":") {
        var rt = le.separator === "|" ? "solid" : "dashed", Pe = L.makeSpan(["vertical-separator"], [], t);
        Pe.style.height = G(C), Pe.style.borderRightWidth = G(c), Pe.style.borderRightStyle = rt, Pe.style.margin = "0 " + G(-c / 2);
        var ct = C - V;
        ct && (Pe.style.verticalAlign = G(-ct)), J.push(Pe);
      } else
        throw new K("Invalid separator type: " + le.separator);
      he++, le = X[he] || {}, Ze = !1;
    }
    if (!(a >= o)) {
      var Ve = void 0;
      (a > 0 || e.hskipBeforeAndAfter) && (Ve = oe.deflt(le.pregap, m), Ve !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = G(Ve), J.push(Y)));
      var He = [];
      for (n = 0; n < i; ++n) {
        var It = l[n], xt = It[a];
        if (xt) {
          var Qt = It.pos - V;
          xt.depth = It.depth, xt.height = It.height, He.push({
            type: "elem",
            elem: xt,
            shift: Qt
          });
        }
      }
      He = L.makeVList({
        positionType: "individualShift",
        children: He
      }, t), He = L.makeSpan(["col-align-" + (le.align || "c")], [He]), J.push(He), (a < o - 1 || e.hskipBeforeAndAfter) && (Ve = oe.deflt(le.postgap, m), Ve !== 0 && (Y = L.makeSpan(["arraycolsep"], []), Y.style.width = G(Ve), J.push(Y)));
    }
  }
  if (l = L.makeSpan(["mtable"], J), u.length > 0) {
    for (var ee = L.makeLineSpan("hline", t, c), we = L.makeLineSpan("hdashline", t, c), qe = [{
      type: "elem",
      elem: l,
      shift: 0
    }]; u.length > 0; ) {
      var wt = u.pop(), Qe = wt.pos - V;
      wt.isDashed ? qe.push({
        type: "elem",
        elem: we,
        shift: Qe
      }) : qe.push({
        type: "elem",
        elem: ee,
        shift: Qe
      });
    }
    l = L.makeVList({
      positionType: "individualShift",
      children: qe
    }, t);
  }
  if (ie.length === 0)
    return L.makeSpan(["mord"], [l], t);
  var dt = L.makeVList({
    positionType: "individualShift",
    children: ie
  }, t);
  return dt = L.makeSpan(["tag"], [dt], t), L.makeFragment([l, dt]);
}, jp = {
  c: "center ",
  l: "left ",
  r: "right "
}, hr = function(e, t) {
  for (var n = [], a = new H.MathNode("mtd", [], ["mtr-glue"]), i = new H.MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], u = 0; u < o.length; u++)
      l.push(new H.MathNode("mtd", [ze(o[u], t)]));
    e.tags && e.tags[s] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)), n.push(new H.MathNode("mtr", l));
  }
  var c = new H.MathNode("mtable", n), h = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  c.setAttribute("rowspacing", G(h));
  var m = "", g = "";
  if (e.cols && e.cols.length > 0) {
    var v = e.cols, y = "", x = !1, S = 0, w = v.length;
    v[0].type === "separator" && (m += "top ", S = 1), v[v.length - 1].type === "separator" && (m += "bottom ", w -= 1);
    for (var C = S; C < w; C++)
      v[C].type === "align" ? (g += jp[v[C].align], x && (y += "none "), x = !0) : v[C].type === "separator" && x && (y += v[C].separator === "|" ? "solid " : "dashed ", x = !1);
    c.setAttribute("columnalign", g.trim()), /[sd]/.test(y) && c.setAttribute("columnlines", y.trim());
  }
  if (e.colSeparationType === "align") {
    for (var E = e.cols || [], k = "", A = 1; A < E.length; A++)
      k += A % 2 ? "0em " : "1em ";
    c.setAttribute("columnspacing", k.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? c.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? c.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? c.setAttribute("columnspacing", "0.5em") : c.setAttribute("columnspacing", "1em");
  var R = "", I = e.hLinesBeforeRow;
  m += I[0].length > 0 ? "left " : "", m += I[I.length - 1].length > 0 ? "right " : "";
  for (var O = 1; O < I.length - 1; O++)
    R += I[O].length === 0 ? "none " : I[O][0] ? "dashed " : "solid ";
  return /[sd]/.test(R) && c.setAttribute("rowlines", R.trim()), m !== "" && (c = new H.MathNode("menclose", [c]), c.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (c = new H.MathNode("mstyle", [c]), c.setAttribute("scriptlevel", "1")), c;
}, Cd = function(e, t) {
  e.envName.indexOf("ed") === -1 && Mi(e);
  var n = [], a = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", s = jr(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : K0(e.envName),
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
    for (var c = "", h = 0; h < t[0].body.length; h++) {
      var m = _e(t[0].body[h], "textord");
      c += m.text;
    }
    o = Number(c), l = o * 2;
  }
  var g = !l;
  s.body.forEach(function(S) {
    for (var w = 1; w < S.length; w += 2) {
      var C = _e(S[w], "styling"), E = _e(C.body[0], "ordgroup");
      E.body.unshift(u);
    }
    if (g)
      l < S.length && (l = S.length);
    else {
      var k = S.length / 2;
      if (o < k)
        throw new K("Too many math in a row: " + ("expected " + o + ", but got " + k), S[0]);
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
    var t = Ni(e[0]), n = t ? [e[0]] : _e(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = j0(s), l = o.text;
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
      throw new K("Unknown column alignment: " + l, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return jr(r.parser, i, W0(r.envName));
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
          throw new K("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = jr(r.parser, n, W0(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
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
    }, t = jr(r.parser, e, "script");
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
    var t = Ni(e[0]), n = t ? [e[0]] : _e(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = j0(s), l = o.text;
      if ("lc".indexOf(l) !== -1)
        return {
          type: "align",
          align: l
        };
      throw new K("Unknown column alignment: " + l, s);
    });
    if (a.length > 1)
      throw new K("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = jr(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new K("{subarray} can contain only one column");
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
    }, t = jr(r.parser, e, W0(r.envName));
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
  handler: Cd,
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
    oe.contains(["gather", "gather*"], r.envName) && Mi(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: K0(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return jr(r.parser, e, "display");
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
  handler: Cd,
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
    Mi(r);
    var e = {
      autoTag: K0(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return jr(r.parser, e, "display");
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
    return Mi(r), Ep(r.parser);
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
    throw new K(r.funcName + " valid only within array environment");
  }
});
var Fl = _d;
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
      throw new K("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += _e(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Fl.hasOwnProperty(i))
        throw new K("No such environment: " + i, a);
      var o = Fl[i], {
        args: l,
        optArgs: u
      } = t.parseArguments("\\begin{" + i + "}", o), c = {
        mode: t.mode,
        envName: i,
        parser: t
      }, h = o.handler(c, l, u);
      t.expect("\\end", !1);
      var m = t.nextToken, g = _e(t.parseFunction(), "environment");
      if (g.name !== i)
        throw new K("Mismatch: \\begin{" + i + "} matched by \\end{" + g.name + "}", m);
      return h;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var kd = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Me(r.body, n);
}, Ed = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ze(r.body, n);
}, Ll = {
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
    } = r, a = mi(e[0]), i = n;
    return i in Ll && (i = Ll[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: kd,
  mathmlBuilder: Ed
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
    } = r, n = e[0], a = oe.isCharacterBox(n);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ti(n),
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
  htmlBuilder: kd,
  mathmlBuilder: Ed
});
var Nd = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= ce.SCRIPT.id ? t.text() : ce.DISPLAY : r === "text" && t.size === ce.DISPLAY.size ? t = ce.TEXT : r === "script" ? t = ce.SCRIPT : r === "scriptscript" && (t = ce.SCRIPTSCRIPT), t;
}, G0 = (r, e) => {
  var t = Nd(r.size, e.style), n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = Me(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  i = e.havingStyle(a);
  var u = Me(r.denom, i, e), c, h, m;
  r.hasBarLine ? (r.barSize ? (h = Ge(r.barSize, e), c = L.makeLineSpan("frac-line", e, h)) : c = L.makeLineSpan("frac-line", e), h = c.height, m = c.height) : (c = null, h = 0, m = e.fontMetrics().defaultRuleThickness);
  var g, v, y;
  t.size === ce.DISPLAY.size || r.size === "display" ? (g = e.fontMetrics().num1, h > 0 ? v = 3 * m : v = 7 * m, y = e.fontMetrics().denom1) : (h > 0 ? (g = e.fontMetrics().num2, v = m) : (g = e.fontMetrics().num3, v = 3 * m), y = e.fontMetrics().denom2);
  var x;
  if (c) {
    var w = e.fontMetrics().axisHeight;
    g - s.depth - (w + 0.5 * h) < v && (g += v - (g - s.depth - (w + 0.5 * h))), w - 0.5 * h - (u.height - y) < v && (y += v - (w - 0.5 * h - (u.height - y)));
    var C = -(w - 0.5 * h);
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
    var S = g - s.depth - (u.height - y);
    S < v && (g += 0.5 * (v - S), y += 0.5 * (v - S)), x = L.makeVList({
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
  var E;
  t.size === ce.DISPLAY.size ? E = e.fontMetrics().delim1 : t.size === ce.SCRIPTSCRIPT.size ? E = e.havingStyle(ce.SCRIPT).fontMetrics().delim2 : E = e.fontMetrics().delim2;
  var k, A;
  return r.leftDelim == null ? k = ma(e, ["mopen"]) : k = xr.customSizedDelim(r.leftDelim, E, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? A = L.makeSpan([]) : r.rightDelim == null ? A = ma(e, ["mclose"]) : A = xr.customSizedDelim(r.rightDelim, E, !0, e.havingStyle(t), r.mode, ["mclose"]), L.makeSpan(["mord"].concat(i.sizingClasses(e)), [k, L.makeSpan(["mfrac"], [x]), A], e);
}, Y0 = (r, e) => {
  var t = new H.MathNode("mfrac", [ze(r.numer, e), ze(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = Ge(r.barSize, e);
    t.setAttribute("linethickness", G(n));
  }
  var a = Nd(r.size, e.style);
  if (a.size !== e.style.size) {
    t = new H.MathNode("mstyle", [t]);
    var i = a.size === ce.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var s = [];
    if (r.leftDelim != null) {
      var o = new H.MathNode("mo", [new H.TextNode(r.leftDelim.replace("\\", ""))]);
      o.setAttribute("fence", "true"), s.push(o);
    }
    if (s.push(t), r.rightDelim != null) {
      var l = new H.MathNode("mo", [new H.TextNode(r.rightDelim.replace("\\", ""))]);
      l.setAttribute("fence", "true"), s.push(l);
    }
    return P0(s);
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
  htmlBuilder: G0,
  mathmlBuilder: Y0
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
var zl = ["display", "text", "script", "scriptscript"], Pl = function(e) {
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
    } = r, n = e[4], a = e[5], i = mi(e[0]), s = i.type === "atom" && i.family === "open" ? Pl(i.text) : null, o = mi(e[1]), l = o.type === "atom" && o.family === "close" ? Pl(o.text) : null, u = _e(e[2], "size"), c, h = null;
    u.isBlank ? c = !0 : (h = u.value, c = h.number > 0);
    var m = "auto", g = e[3];
    if (g.type === "ordgroup") {
      if (g.body.length > 0) {
        var v = _e(g.body[0], "textord");
        m = zl[Number(v.text)];
      }
    } else
      g = _e(g, "textord"), m = zl[Number(g.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: c,
      barSize: h,
      leftDelim: s,
      rightDelim: l,
      size: m
    };
  },
  htmlBuilder: G0,
  mathmlBuilder: Y0
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
    } = r, a = e[0], i = vf(_e(e[1], "infix").size), s = e[2], o = i.number > 0;
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
  htmlBuilder: G0,
  mathmlBuilder: Y0
});
var Td = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? Me(r.sup, e.havingStyle(t.sup()), e) : Me(r.sub, e.havingStyle(t.sub()), e), a = _e(r.base, "horizBrace")) : a = _e(r, "horizBrace");
  var i = Me(a.base, e.havingBaseStyle(ce.DISPLAY)), s = Cr.svgSpan(a, e), o;
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
}, $p = (r, e) => {
  var t = Cr.mathMLnode(r.label);
  return new H.MathNode(r.isOver ? "mover" : "munder", [ze(r.base, e), t]);
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
  htmlBuilder: Td,
  mathmlBuilder: $p
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
      body: tt(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.body, e, !1);
    return L.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = Fr(r.body, e);
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
      body: tt(o)
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
      body: tt(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = mt(r.body, e, !1);
    return L.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new H.MathNode("mrow", Rt(r.body, e));
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
        for (var u = i.split(","), c = 0; c < u.length; c++) {
          var h = u[c].split("=");
          if (h.length !== 2)
            throw new K("Error parsing key-value for \\htmlData");
          l["data-" + h[0].trim()] = h[1].trim();
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
      body: tt(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = L.makeSpan(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => Fr(r.body, e)
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
      html: tt(e[0]),
      mathml: tt(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.html, e, !1);
    return L.makeFragment(t);
  },
  mathmlBuilder: (r, e) => Fr(r.mathml, e)
});
var rs = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new K("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Gc(n))
    throw new K("Invalid unit: '" + n.unit + "' in \\includegraphics.");
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
      for (var l = _e(t[0], "raw").string, u = l.split(","), c = 0; c < u.length; c++) {
        var h = u[c].split("=");
        if (h.length === 2) {
          var m = h[1].trim();
          switch (h[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              a = rs(m);
              break;
            case "height":
              i = rs(m);
              break;
            case "totalheight":
              s = rs(m);
              break;
            default:
              throw new K("Invalid key: '" + h[0] + "' in \\includegraphics.");
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
    var t = Ge(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = Ge(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = Ge(r.width, e));
    var i = {
      height: G(t + n)
    };
    a > 0 && (i.width = G(a)), n > 0 && (i.verticalAlign = G(-n));
    var s = new $f(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new H.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = Ge(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = Ge(r.totalheight, e) - n, t.setAttribute("valign", G(-a))), t.setAttribute("height", G(n + a)), r.width.number > 0) {
      var i = Ge(r.width, e);
      t.setAttribute("width", G(i));
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
    var t = Ge(r.dimension, e);
    return new H.SpaceNode(t);
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
    r.alignment === "clap" ? (t = L.makeSpan([], [Me(r.body, e)]), t = L.makeSpan(["inner"], [t], e)) : t = L.makeSpan(["inner"], [Me(r.body, e)]);
    var n = L.makeSpan(["fix"], []), a = L.makeSpan([r.alignment], [t, n], e), i = L.makeSpan(["strut"]);
    return i.style.height = G(a.height + a.depth), a.depth && (i.style.verticalAlign = G(-a.depth)), a.children.unshift(i), a = L.makeSpan(["thinbox"], [a], e), L.makeSpan(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new H.MathNode("mpadded", [ze(r.body, e)]);
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
    throw new K("Mismatched " + r.funcName);
  }
});
var Bl = (r, e) => {
  switch (e.style.size) {
    case ce.DISPLAY.size:
      return r.display;
    case ce.TEXT.size:
      return r.text;
    case ce.SCRIPT.size:
      return r.script;
    case ce.SCRIPTSCRIPT.size:
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
      display: tt(e[0]),
      text: tt(e[1]),
      script: tt(e[2]),
      scriptscript: tt(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Bl(r, e), n = mt(t, e, !1);
    return L.makeFragment(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Bl(r, e);
    return Fr(t, e);
  }
});
var Ad = (r, e, t, n, a, i, s) => {
  r = L.makeSpan([], [r]);
  var o = t && oe.isCharacterBox(t), l, u;
  if (e) {
    var c = Me(e, n.havingStyle(a.sup()), n);
    u = {
      elem: c,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - c.depth)
    };
  }
  if (t) {
    var h = Me(t, n.havingStyle(a.sub()), n);
    l = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - h.height)
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
        marginLeft: G(-i)
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
        marginLeft: G(i)
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
        marginLeft: G(-i)
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
        marginLeft: G(i)
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
    S.style.marginRight = G(i), x.unshift(S);
  }
  return L.makeSpan(["mop", "op-limits"], x, n);
}, Md = ["\\smallint"], jn = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = _e(r.base, "op"), a = !0) : i = _e(r, "op");
  var s = e.style, o = !1;
  s.size === ce.DISPLAY.size && i.symbol && !oe.contains(Md, i.name) && (o = !0);
  var l;
  if (i.symbol) {
    var u = o ? "Size2-Regular" : "Size1-Regular", c = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (c = i.name.slice(1), i.name = c === "oiint" ? "\\iint" : "\\iiint"), l = L.makeSymbol(i.name, u, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), c.length > 0) {
      var h = l.italic, m = L.staticSvg(c + "Size" + (o ? "2" : "1"), e);
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
      }, e), i.name = "\\" + c, l.classes.unshift("mop"), l.italic = h;
    }
  } else if (i.body) {
    var g = mt(i.body, e, !0);
    g.length === 1 && g[0] instanceof Gt ? (l = g[0], l.classes[0] = "mop") : l = L.makeSpan(["mop"], g, e);
  } else {
    for (var v = [], y = 1; y < i.name.length; y++)
      v.push(L.mathsym(i.name[y], i.mode, e));
    l = L.makeSpan(["mop"], v, e);
  }
  var x = 0, S = 0;
  return (l instanceof Gt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (x = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, S = l.italic), a ? Ad(l, t, n, e, s, S, x) : (x && (l.style.position = "relative", l.style.top = G(x)), l);
}, Ra = (r, e) => {
  var t;
  if (r.symbol)
    t = new Ht("mo", [Yt(r.name, r.mode)]), oe.contains(Md, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new Ht("mo", Rt(r.body, e));
  else {
    t = new Ht("mi", [new aa(r.name.slice(1))]);
    var n = new Ht("mo", [Yt("⁡", "text")]);
    r.parentIsSupSub ? t = new Ht("mrow", [t, n]) : t = ad([t, n]);
  }
  return t;
}, qp = {
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
    return a.length === 1 && (a = qp[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: jn,
  mathmlBuilder: Ra
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
      body: tt(n)
    };
  },
  htmlBuilder: jn,
  mathmlBuilder: Ra
});
var Hp = {
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
  mathmlBuilder: Ra
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
  mathmlBuilder: Ra
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
    return n.length === 1 && (n = Hp[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: jn,
  mathmlBuilder: Ra
});
var Od = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = _e(r.base, "operatorname"), a = !0) : i = _e(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((h) => {
      var m = h.text;
      return typeof m == "string" ? {
        type: "textord",
        mode: h.mode,
        text: m
      } : h;
    }), l = mt(o, e.withFont("mathrm"), !0), u = 0; u < l.length; u++) {
      var c = l[u];
      c instanceof Gt && (c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = L.makeSpan(["mop"], l, e);
  } else
    s = L.makeSpan(["mop"], [], e);
  return a ? Ad(s, t, n, e, e.style, 0, 0) : s;
}, Up = (r, e) => {
  for (var t = Rt(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof H.SpaceNode)) if (i instanceof H.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof H.TextNode ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
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
    t = [new H.TextNode(o)];
  }
  var l = new H.MathNode("mi", t);
  l.setAttribute("mathvariant", "normal");
  var u = new H.MathNode("mo", [Yt("⁡", "text")]);
  return r.parentIsSupSub ? new H.MathNode("mrow", [l, u]) : H.newDocumentFragment([l, u]);
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
      body: tt(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Od,
  mathmlBuilder: Up
});
_("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
pn({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? L.makeFragment(mt(r.body, e, !1)) : L.makeSpan(["mord"], mt(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return Fr(r.body, e, !0);
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
    var t = Me(r.body, e.havingCrampedStyle()), n = L.makeLineSpan("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = L.makeVList({
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
    var t = new H.MathNode("mo", [new H.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new H.MathNode("mover", [ze(r.body, e), t]);
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
      body: tt(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.body, e.withPhantom(), !1);
    return L.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = Rt(r.body, e);
    return new H.MathNode("mphantom", t);
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
    var t = L.makeSpan([], [Me(r.body, e.withPhantom())]);
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
    var t = Rt(tt(r.body), e), n = new H.MathNode("mphantom", t), a = new H.MathNode("mpadded", [n]);
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
    var t = L.makeSpan(["inner"], [Me(r.body, e.withPhantom())]), n = L.makeSpan(["fix"], []);
    return L.makeSpan(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Rt(tt(r.body), e), n = new H.MathNode("mphantom", t), a = new H.MathNode("mpadded", [n]);
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
    var t = Me(r.body, e), n = Ge(r.dy, e);
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
    var t = new H.MathNode("mpadded", [ze(r.body, e)]), n = r.dy.number + r.dy.unit;
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
    var t = L.makeSpan(["mord", "rule"], [], e), n = Ge(r.width, e), a = Ge(r.height, e), i = r.shift ? Ge(r.shift, e) : 0;
    return t.style.borderRightWidth = G(n), t.style.borderTopWidth = G(a), t.style.bottom = G(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = Ge(r.width, e), n = Ge(r.height, e), a = r.shift ? Ge(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new H.MathNode("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", G(t)), s.setAttribute("height", G(n));
    var o = new H.MathNode("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", G(a)) : (o.setAttribute("height", G(a)), o.setAttribute("depth", G(-a))), o.setAttribute("voffset", G(a)), o;
  }
});
function Dd(r, e, t) {
  for (var n = mt(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return L.makeFragment(n);
}
var jl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Kp = (r, e) => {
  var t = e.havingSize(r.size);
  return Dd(r.body, t, e);
};
Z({
  type: "sizing",
  names: jl,
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
      size: jl.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: Kp,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = Rt(r.body, t), a = new H.MathNode("mstyle", n);
    return a.setAttribute("mathsize", G(t.sizeMultiplier)), a;
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
    var t = L.makeSpan([], [Me(r.body, e)]);
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
    var t = new H.MathNode("mpadded", [ze(r.body, e)]);
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
    var t = Me(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = L.wrapFragment(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < ce.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: l,
      ruleWidth: u,
      advanceWidth: c
    } = xr.sqrtImage(o, e), h = l.height - u;
    h > t.height + t.depth + s && (s = (s + h - t.height - t.depth) / 2);
    var m = l.height - t.height - s - u;
    t.style.paddingLeft = G(c);
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
      var v = e.havingStyle(ce.SCRIPTSCRIPT), y = Me(r.index, v, e), x = 0.6 * (g.height - g.depth), S = L.makeVList({
        positionType: "shift",
        positionData: -x,
        children: [{
          type: "elem",
          elem: y
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
    return n ? new H.MathNode("mroot", [ze(t, e), ze(n, e)]) : new H.MathNode("msqrt", [ze(t, e)]);
  }
});
var $l = {
  display: ce.DISPLAY,
  text: ce.TEXT,
  script: ce.SCRIPT,
  scriptscript: ce.SCRIPTSCRIPT
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
    var t = $l[r.style], n = e.havingStyle(t).withFont("");
    return Dd(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = $l[r.style], n = e.havingStyle(t), a = Rt(r.body, n), i = new H.MathNode("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var Wp = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === ce.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? jn : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === ce.DISPLAY.size || n.limits);
      return i ? Od : null;
    } else {
      if (n.type === "accent")
        return oe.isCharacterBox(n.base) ? $0 : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? Td : null;
      } else
        return null;
    }
  else return null;
};
pn({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Wp(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = Me(n, e), o, l, u = e.fontMetrics(), c = 0, h = 0, m = n && oe.isCharacterBox(n);
    if (a) {
      var g = e.havingStyle(e.style.sup());
      o = Me(a, g, e), m || (c = s.height - g.fontMetrics().supDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var v = e.havingStyle(e.style.sub());
      l = Me(i, v, e), m || (h = s.depth + v.fontMetrics().subDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    var y;
    e.style === ce.DISPLAY ? y = u.sup1 : e.style.cramped ? y = u.sup3 : y = u.sup2;
    var x = e.sizeMultiplier, S = G(0.5 / u.ptPerEm / x), w = null;
    if (l) {
      var C = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (s instanceof Gt || C) && (w = G(-s.italic));
    }
    var E;
    if (o && l) {
      c = Math.max(c, y, o.depth + 0.25 * u.xHeight), h = Math.max(h, u.sub2);
      var k = u.defaultRuleThickness, A = 4 * k;
      if (c - o.depth - (l.height - h) < A) {
        h = A - (c - o.depth) + l.height;
        var R = 0.8 * u.xHeight - (c - o.depth);
        R > 0 && (c += R, h -= R);
      }
      var I = [{
        type: "elem",
        elem: l,
        shift: h,
        marginRight: S,
        marginLeft: w
      }, {
        type: "elem",
        elem: o,
        shift: -c,
        marginRight: S
      }];
      E = L.makeVList({
        positionType: "individualShift",
        children: I
      }, e);
    } else if (l) {
      h = Math.max(h, u.sub1, l.height - 0.8 * u.xHeight);
      var O = [{
        type: "elem",
        elem: l,
        marginLeft: w,
        marginRight: S
      }];
      E = L.makeVList({
        positionType: "shift",
        positionData: h,
        children: O
      }, e);
    } else if (o)
      c = Math.max(c, y, o.depth + 0.25 * u.xHeight), E = L.makeVList({
        positionType: "shift",
        positionData: -c,
        children: [{
          type: "elem",
          elem: o,
          marginRight: S
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var F = Ls(s, "right") || "mord";
    return L.makeSpan([F], [s, L.makeSpan(["msupsub"], [E])], e);
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
        u && u.type === "op" && u.limits && e.style === ce.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (e.style === ce.DISPLAY || u.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === ce.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === ce.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === ce.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === ce.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new H.MathNode(s, i);
  }
});
pn({
  type: "atom",
  htmlBuilder(r, e) {
    return L.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new H.MathNode("mo", [Yt(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = B0(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Rd = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
pn({
  type: "mathord",
  htmlBuilder(r, e) {
    return L.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new H.MathNode("mi", [Yt(r.text, r.mode, e)]), n = B0(r, e) || "italic";
    return n !== Rd[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
pn({
  type: "textord",
  htmlBuilder(r, e) {
    return L.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Yt(r.text, r.mode, e), n = B0(r, e) || "normal", a;
    return r.mode === "text" ? a = new H.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? a = new H.MathNode("mn", [t]) : r.text === "\\prime" ? a = new H.MathNode("mo", [t]) : a = new H.MathNode("mi", [t]), n !== Rd[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var ns = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, as = {
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
pn({
  type: "spacing",
  htmlBuilder(r, e) {
    if (as.hasOwnProperty(r.text)) {
      var t = as[r.text].className || "";
      if (r.mode === "text") {
        var n = L.makeOrd(r, e, "textord");
        return n.classes.push(t), n;
      } else
        return L.makeSpan(["mspace", t], [L.mathsym(r.text, r.mode, e)], e);
    } else {
      if (ns.hasOwnProperty(r.text))
        return L.makeSpan(["mspace", ns[r.text]], [], e);
      throw new K('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (as.hasOwnProperty(r.text))
      t = new H.MathNode("mtext", [new H.TextNode(" ")]);
    else {
      if (ns.hasOwnProperty(r.text))
        return new H.MathNode("mspace");
      throw new K('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var ql = () => {
  var r = new H.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
pn({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new H.MathNode("mtable", [new H.MathNode("mtr", [ql(), new H.MathNode("mtd", [Fr(r.body, e)]), ql(), new H.MathNode("mtd", [Fr(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Hl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Ul = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Gp = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Kl = (r, e) => {
  var t = r.font;
  if (t) {
    if (Hl[t])
      return e.withTextFontFamily(Hl[t]);
    if (Ul[t])
      return e.withTextFontWeight(Ul[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Gp[t]);
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
      body: tt(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = Kl(r, e), n = mt(r.body, t, !0);
    return L.makeSpan(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Kl(r, e);
    return Fr(r.body, t);
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
    var t = Me(r.body, e), n = L.makeLineSpan("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = L.makeVList({
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
    var t = new H.MathNode("mo", [new H.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new H.MathNode("munder", [ze(r.body, e), t]);
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
    var t = Me(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
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
    return new H.MathNode("mpadded", [ze(r.body, e)], ["vcenter"]);
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
    throw new K("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = Wl(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(L.makeSymbol(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return L.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), L.tryCombineChars(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new H.TextNode(Wl(r)), n = new H.MathNode("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var Wl = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Mr = rd, Id = `[ \r
	]`, Yp = "\\\\[a-zA-Z@]+", Vp = "\\\\[^\uD800-\uDFFF]", Xp = "(" + Yp + ")" + Id + "*", Jp = `\\\\(
|[ \r	]+
?)[ \r	]*`, js = "[̀-ͯ]", Zp = new RegExp(js + "+$"), Qp = "(" + Id + "+)|" + // whitespace
(Jp + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(js + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(js + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Xp) + // \macroName + spaces
("|" + Vp + ")");
class Gl {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(Qp, "g"), this.catcodes = {
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
      return new Wt("EOF", new Lt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new K("Unexpected character: '" + e[t] + "'", new Wt(e[t], new Lt(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Wt(a, new Lt(this, t, this.tokenRegex.lastIndex));
  }
}
class e4 {
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
      throw new K("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
var t4 = Sd;
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
var Yl = {
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
        throw new K("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = Yl[e.text], n == null || n >= t)
      throw new K("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Yl[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var V0 = (r, e, t) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new K("\\newcommand's first argument must be a macro name");
  var a = n[0].text, i = r.isDefined(a);
  if (i && !e)
    throw new K("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!i && !t)
    throw new K("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var s = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var o = "", l = r.expandNextToken(); l.text !== "]" && l.text !== "EOF"; )
      o += l.text, l = r.expandNextToken();
    if (!o.match(/^\s*[0-9]+\s*$/))
      throw new K("Invalid number of arguments: " + o);
    s = parseInt(o), n = r.consumeArg().tokens;
  }
  return r.macros.set(a, {
    tokens: n,
    numArgs: s
  }), "";
};
_("\\newcommand", (r) => V0(r, !1, !0));
_("\\renewcommand", (r) => V0(r, !0, !1));
_("\\providecommand", (r) => V0(r, !0, !0));
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
  return console.log(e, r.macros.get(t), Mr[t], je.math[t], je.text[t]), "";
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
var Vl = {
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
  return t in Vl ? e = Vl[t] : (t.slice(0, 4) === "\\not" || t in je.math && oe.contains(["bin", "rel"], je.math[t].group)) && (e = "\\dotsb"), e;
});
var X0 = {
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
  return e in X0 ? "\\ldots\\," : "\\ldots";
});
_("\\dotsc", function(r) {
  var e = r.future().text;
  return e in X0 && e !== "," ? "\\ldots\\," : "\\ldots";
});
_("\\cdots", function(r) {
  var e = r.future().text;
  return e in X0 ? "\\@cdots\\," : "\\@cdots";
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
    throw new K("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
_("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
_("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
_("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
_("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
_("\\newline", "\\\\\\relax");
_("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Fd = G(ar["Main-Regular"][84][1] - 0.7 * ar["Main-Regular"][65][1]);
_("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Fd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
_("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Fd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var Ld = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (h) => (m) => {
    r && (m.macros.set("|", s), a.length && m.macros.set("\\|", o));
    var g = h;
    if (!h && a.length) {
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
_("\\bra@ket", Ld(!1));
_("\\bra@set", Ld(!0));
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
var zd = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class r4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new e4(t4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Gl(e, this.settings);
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
          throw new K("Extra }", i);
      } else if (i.text === "EOF")
        throw new K("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
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
        throw new K("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new K("Use of the macro doesn't match its definition", i);
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
      throw new K("Too many expansions: infinite loop or need to increase maxExpand setting");
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
        throw new K("Undefined control sequence: " + n);
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
            throw new K("Incomplete placeholder at end of macro body", l);
          if (l = i[--o], l.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            i.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new K("Not a valid argument number", l);
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
      for (var o = new Gl(a, this.settings), l = [], u = o.lex(); u.text !== "EOF"; )
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
    return this.macros.has(e) || Mr.hasOwnProperty(e) || je.math.hasOwnProperty(e) || je.text.hasOwnProperty(e) || zd.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Mr.hasOwnProperty(e) && !Mr[e].primitive;
  }
}
var Xl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Va = Object.freeze({
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
}), is = {
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
}, Jl = {
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
class Oi {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new r4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new K("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
      if (Oi.endOfExpression.indexOf(a.text) !== -1 || t && a.text === t || e && Mr[a.text] && Mr[a.text].infix)
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
          throw new K("only one infix operator per group", e[a].token);
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
      throw new K("Expected group after '" + n + "'", t);
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
          throw new K("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new K("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new K("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new K("Double superscript", i);
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
      } else if (Va[i.text]) {
        var u = Xl.test(i.text), c = [];
        for (c.push(new Wt(Va[i.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!Va[h] || Xl.test(h) !== u)
            break;
          c.unshift(new Wt(Va[h])), this.consume();
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
    var n = this.fetch(), a = n.text, i = Mr[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new K("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new K("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new K("Can't use function '" + a + "' in math mode", n);
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
    }, o = Mr[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new K("No function handler for " + e);
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
        throw new K("Null argument, please report this as a bug");
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
          throw new K("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new K("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new K("Unknown group type as " + e, this.fetch());
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
      throw new K("Invalid " + t + ": '" + n.text + "'", n);
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
      throw new K("Invalid color: '" + t.text + "'", t);
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
      throw new K("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Gc(i))
      throw new K("Invalid unit: '" + i.unit + "'", t);
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
        loc: Lt.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !zd.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new K("Undefined control sequence: " + a, n);
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
        loc: Lt.range(a, e[n + 2]),
        text: "---"
      }), t -= 2) : (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: Lt.range(a, e[n + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[n + 1].text === i && (e.splice(n, 2, {
        type: "textord",
        mode: "text",
        loc: Lt.range(a, e[n + 1]),
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
        throw new K(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    Jl.hasOwnProperty(t[0]) && !je[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Jl[t[0]] + t.slice(1));
    var i = Zp.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (je[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Fs.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = je[this.mode][t].group, l = Lt.range(e), u;
      if (Uf.hasOwnProperty(o)) {
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
      this.settings.strict && (Wc(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Lt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var h = 0; h < i[0].length; h++) {
        var m = i[0][h];
        if (!is[m])
          throw new K("Unknown accent ' " + m + "'", e);
        var g = is[m][this.mode] || is[m].text;
        if (!g)
          throw new K("Accent " + m + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Lt.range(e),
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
Oi.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var J0 = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Oi(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new K("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new Wt("\\df@tag")])
    }];
  }
  return a;
}, Pd = function(e, t, n) {
  t.textContent = "";
  var a = Z0(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Pd = function() {
  throw new K("KaTeX doesn't work in quirks mode.");
});
var n4 = function(e, t) {
  var n = Z0(e, t).toMarkup();
  return n;
}, a4 = function(e, t) {
  var n = new R0(t);
  return J0(e, n);
}, Bd = function(e, t, n) {
  if (n.throwOnError || !(e instanceof K))
    throw e;
  var a = L.makeSpan(["katex-error"], [new Gt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, Z0 = function(e, t) {
  var n = new R0(t);
  try {
    var a = J0(e, n);
    return mp(a, e, n);
  } catch (i) {
    return Bd(i, e, n);
  }
}, i4 = function(e, t) {
  var n = new R0(t);
  try {
    var a = J0(e, n);
    return fp(a, e, n);
  } catch (i) {
    return Bd(i, e, n);
  }
}, jd = {
  /**
   * Current KaTeX version
   */
  version: "0.16.11",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Pd,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: n4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: K,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: Qa,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: a4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Z0,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: i4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: zf,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: d,
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
    Span: Da,
    Anchor: L0,
    SymbolNode: Gt,
    SvgNode: _r,
    PathNode: Ir,
    LineNode: Is
  }
};
const s4 = ft.lazy(() => import("./EquationComponent-aEHhCI6G.js"));
function Zl(r) {
  let e = r.getAttribute("data-lexical-equation");
  const t = r.getAttribute("data-lexical-inline") === "true";
  return e = atob(e || ""), e ? { node: Q0(e, t) } : null;
}
class $n extends lr {
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
    return Q0(
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
    return t.setAttribute("data-lexical-equation", n), t.setAttribute("data-lexical-inline", `${this.__inline}`), jd.render(this.__equation, t, {
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
        conversion: Zl,
        priority: 2
      } : null,
      span: (t) => t.hasAttribute("data-lexical-equation") ? {
        conversion: Zl,
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
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      s4,
      {
        equation: this.__equation,
        inline: this.__inline,
        nodeKey: this.__key
      }
    ) });
  }
}
function Q0(r = "", e = !1) {
  const t = new $n(r, e);
  return lt(t);
}
function b3(r) {
  return r instanceof $n;
}
const o4 = ft.lazy(() => import("./ExcalidrawComponent-B__hzuf1.js"));
function l4(r) {
  const e = r.getAttribute("data-lexical-excalidraw-json");
  if (e) {
    const t = $d();
    return t.__data = e, {
      node: t
    };
  }
  return null;
}
class sn extends lr {
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
    return new sn(t.__data, t.__width, t.__height, t.__key);
  }
  static importJSON(t) {
    return new sn(t.data, t.width, t.height);
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
        conversion: l4,
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
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(o4, { nodeKey: this.getKey(), data: this.__data }) });
  }
}
function $d() {
  return new sn();
}
function y3(r) {
  return r instanceof sn;
}
class on extends yt {
  constructor(t, n) {
    super(n);
    ne(this, "__templateColumns");
    this.__templateColumns = t;
  }
  static getType() {
    return "layout-container";
  }
  static clone(t) {
    return new on(t.__templateColumns, t.__key);
  }
  createDOM(t) {
    const n = document.createElement("div");
    return n.style.gridTemplateColumns = this.__templateColumns, typeof t.theme.layoutContainer == "string" && Je(n, t.theme.layoutContainer), n;
  }
  updateDOM(t, n) {
    return t.__templateColumns !== this.__templateColumns && (n.style.gridTemplateColumns = this.__templateColumns), !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON(t) {
    return qd(t.templateColumns);
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
function qd(r) {
  return new on(r);
}
function Xa(r) {
  return r instanceof on;
}
class ln extends yt {
  static getType() {
    return "layout-item";
  }
  static clone(e) {
    return new ln(e.__key);
  }
  createDOM(e) {
    const t = document.createElement("div");
    return typeof e.theme.layoutItem == "string" && Je(t, e.theme.layoutItem), t;
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {};
  }
  static importJSON() {
    return $s();
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
function $s() {
  return new ln();
}
function Ql(r) {
  return r instanceof ln;
}
const u4 = ft.lazy(() => import("./PollComponent-DZqmbiWp.js"));
function c4() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function eu(r = "") {
  return {
    text: r,
    uid: c4(),
    votes: []
  };
}
function tu(r, e, t) {
  return {
    text: e,
    uid: r.uid,
    votes: t || Array.from(r.votes)
  };
}
function d4(r) {
  const e = r.getAttribute("data-lexical-poll-question"), t = r.getAttribute("data-lexical-poll-options");
  return e !== null && t !== null ? { node: eo(e, JSON.parse(t)) } : null;
}
class qn extends lr {
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
    const n = eo(
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
    const a = this.getWritable(), i = tu(t, n), s = Array.from(a.__options), o = s.indexOf(t);
    s[o] = i, a.__options = s;
  }
  toggleVote(t, n) {
    const a = this.getWritable(), i = t.votes, s = Array.from(i), o = i.indexOf(n);
    o === -1 ? s.push(n) : s.splice(o, 1);
    const l = tu(t, t.text, s), u = Array.from(a.__options), c = u.indexOf(t);
    u[c] = l, a.__options = u;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-poll-question") ? {
        conversion: d4,
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
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      u4,
      {
        question: this.__question,
        options: this.__options,
        nodeKey: this.__key
      }
    ) });
  }
}
function eo(r, e) {
  return new qn(r, e);
}
function x3(r) {
  return r instanceof qn;
}
const h4 = ft.lazy(() => import("./InlineImageComponent-DIIParRt.js"));
function m4(r) {
  if (r instanceof HTMLImageElement) {
    const { alt: e, src: t, width: n, height: a } = r;
    return { node: to({ altText: e, height: a, src: t, width: n }) };
  }
  return null;
}
class Hn extends lr {
  constructor(t, n, a, i, s, o, l, u) {
    super(u);
    ne(this, "__src");
    ne(this, "__altText");
    ne(this, "__width");
    ne(this, "__height");
    ne(this, "__showCaption");
    ne(this, "__caption");
    ne(this, "__position");
    this.__src = t, this.__altText = n, this.__width = i || "inherit", this.__height = s || "inherit", this.__showCaption = o || !1, this.__caption = l || fa(), this.__position = a;
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
    const { altText: n, height: a, width: i, caption: s, src: o, showCaption: l, position: u } = t, c = to({
      altText: n,
      height: a,
      position: u,
      showCaption: l,
      src: o,
      width: i
    }), h = c.__caption, m = h.parseEditorState(s.editorState);
    return m.isEmpty() || h.setEditorState(m), c;
  }
  static importDOM() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      img: (t) => ({
        conversion: m4,
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
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      h4,
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
function to({
  altText: r,
  position: e,
  height: t,
  src: n,
  width: a,
  showCaption: i,
  caption: s,
  key: o
}) {
  return lt(
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
function f4(r) {
  return r instanceof Hn;
}
const p4 = ft.lazy(() => import("./StickyComponent-BSZ4WJBM.js"));
class An extends lr {
  constructor(t, n, a, i, s) {
    super(s);
    ne(this, "__x");
    ne(this, "__y");
    ne(this, "__color");
    ne(this, "__caption");
    this.__x = t, this.__y = n, this.__caption = i || fa(), this.__color = a;
  }
  static getType() {
    return "sticky";
  }
  static clone(t) {
    return new An(
      t.__x,
      t.__y,
      t.__color,
      t.__caption,
      t.__key
    );
  }
  static importJSON(t) {
    const n = new An(
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
    a.__x = t, a.__y = n, Ct(null);
  }
  toggleColor() {
    const t = this.getWritable();
    t.__color = t.__color === "pink" ? "yellow" : "pink";
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decorate(t, n) {
    return ur(
      /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
        p4,
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
function w3(r) {
  return r instanceof An;
}
function g4(r, e) {
  return new An(r, e, "yellow");
}
const v4 = [
  u0,
  p0,
  Ea,
  ka,
  Ca,
  Sa,
  _a,
  In,
  y0,
  zn,
  Na,
  Pn,
  Nn,
  Ta,
  Aa,
  Ma,
  rn,
  nn,
  an,
  $n,
  sn,
  on,
  ln,
  qn,
  pc,
  Hn,
  Or,
  Ln,
  sr,
  An,
  g0
], Ja = 0, qs = 1, Hs = 2, Vt = 0, b4 = 1, ru = 2, y4 = 3, x4 = 4;
function w4(r, e, t, n, a) {
  if (r === null || t.size === 0 && n.size === 0 && !a) return Vt;
  const i = e._selection, s = r._selection;
  if (a) return b4;
  if (!($(i) && $(s) && s.isCollapsed() && i.isCollapsed())) return Vt;
  const o = function(S, w, C) {
    const E = S._nodeMap, k = [];
    for (const A of w) {
      const R = E.get(A);
      R !== void 0 && k.push(R);
    }
    for (const [A, R] of C) {
      if (!R) continue;
      const I = E.get(A);
      I === void 0 || e0(I) || k.push(I);
    }
    return k;
  }(e, t, n);
  if (o.length === 0) return Vt;
  if (o.length > 1) {
    const S = e._nodeMap, w = S.get(i.anchor.key), C = S.get(s.anchor.key);
    return w && C && !r._nodeMap.has(w.__key) && Se(w) && w.__text.length === 1 && i.anchor.offset === 1 ? ru : Vt;
  }
  const l = o[0], u = r._nodeMap.get(l.__key);
  if (!Se(u) || !Se(l) || u.__mode !== l.__mode) return Vt;
  const c = u.__text, h = l.__text;
  if (c === h) return Vt;
  const m = i.anchor, g = s.anchor;
  if (m.key !== g.key || m.type !== "text") return Vt;
  const v = m.offset, y = g.offset, x = h.length - c.length;
  return x === 1 && y === v - 1 ? ru : x === -1 && y === v + 1 ? y4 : x === -1 && y === v ? x4 : Vt;
}
function _4(r, e) {
  let t = Date.now(), n = Vt;
  return (a, i, s, o, l, u) => {
    const c = Date.now();
    if (u.has("historic")) return n = Vt, t = c, Hs;
    const h = w4(a, i, o, l, r.isComposing()), m = (() => {
      const g = s === null || s.editor === r, v = u.has("history-push");
      if (!v && g && u.has("history-merge")) return Ja;
      if (a === null) return qs;
      const y = i._selection;
      return o.size > 0 || l.size > 0 ? v === !1 && h !== Vt && h === n && c < t + e && g || o.size === 1 && function(x, S, w) {
        const C = S._nodeMap.get(x), E = w._nodeMap.get(x), k = S._selection, A = w._selection;
        return !($(k) && $(A) && k.anchor.type === "element" && k.focus.type === "element" && A.anchor.type === "text" && A.focus.type === "text" || !Se(C) || !Se(E) || C.__parent !== E.__parent) && JSON.stringify(S.read(() => C.exportJSON())) === JSON.stringify(w.read(() => E.exportJSON()));
      }(Array.from(o)[0], a, i) ? Ja : qs : y !== null ? Ja : Hs;
    })();
    return t = c, n = h, m;
  };
}
function nu(r) {
  r.undoStack = [], r.redoStack = [], r.current = null;
}
function S4(r, e, t) {
  const n = _4(r, t);
  return Ie(r.registerCommand(ec, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const u = s.current, c = l.pop();
      u !== null && (o.push(u), i.dispatchCommand(Jn, !0)), l.length === 0 && i.dispatchCommand(Zn, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(r, e), !0), ye), r.registerCommand(Qu, () => (function(i, s) {
    const o = s.redoStack, l = s.undoStack;
    if (o.length !== 0) {
      const u = s.current;
      u !== null && (l.push(u), i.dispatchCommand(Zn, !0));
      const c = o.pop();
      o.length === 0 && i.dispatchCommand(Jn, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: "historic" });
    }
  }(r, e), !0), ye), r.registerCommand(i1, () => (nu(e), !1), ye), r.registerCommand(a1, () => (nu(e), r.dispatchCommand(Jn, !1), r.dispatchCommand(Zn, !1), !0), ye), r.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: o, dirtyElements: l, tags: u }) => {
    const c = e.current, h = e.redoStack, m = e.undoStack, g = c === null ? null : c.editorState;
    if (c !== null && i === g) return;
    const v = n(s, i, c, o, l, u);
    if (v === qs) h.length !== 0 && (e.redoStack = [], r.dispatchCommand(Jn, !1)), c !== null && (m.push({ ...c }), r.dispatchCommand(Zn, !0));
    else if (v === Hs) return;
    e.current = { editor: r, editorState: i };
  }));
}
function Hd() {
  return { current: null, redoStack: [], undoStack: [] };
}
function C4({ delay: r, externalHistoryState: e }) {
  const [t] = se();
  return function(n, a, i = 1e3) {
    const s = ht(() => a || Hd(), [a]);
    P(() => S4(n, s, i), [i, n, s]);
  }(t, e, r), null;
}
const Ud = Qs({}), k4 = ({
  children: r,
  initHistoryState: e
}) => {
  const t = ht(
    () => ({ historyState: e || Hd() }),
    []
  );
  return /* @__PURE__ */ p.jsx(Ud.Provider, { value: t, children: r });
}, E4 = () => Bu(Ud), N4 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
function T4(r) {
  return { initialValueFn: () => r.isEditable(), subscribe: (e) => r.registerEditableListener(e) };
}
function ro() {
  return function(r) {
    const [e] = se(), t = ht(() => r(e), [e, r]), n = Re(t.initialValueFn()), [a, i] = U(n.current);
    return N4(() => {
      const { initialValueFn: s, subscribe: o } = t, l = s();
      return n.current !== l && (n.current = l, i(l)), o((u) => {
        n.current = u, i(u);
      });
    }, [t, r]), a;
  }(T4);
}
function A4() {
  return Dt().getTextContent();
}
function M4(r, e = !0) {
  if (r) return !1;
  let t = A4();
  return e && (t = t.trim()), t === "";
}
function O4(r) {
  if (!M4(r, !1)) return !1;
  const e = Dt().getChildren(), t = e.length;
  if (t > 1) return !1;
  for (let n = 0; n < t; n++) {
    const a = e[n];
    if (br(a)) return !1;
    if (ge(a)) {
      if (!dn(a) || a.__indent !== 0) return !1;
      const i = a.getChildren(), s = i.length;
      for (let o = 0; o < s; o++) {
        const l = i[n];
        if (!Se(l)) return !1;
      }
    }
  }
  return !0;
}
function Kd(r) {
  return () => O4(r);
}
function D4(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var R4 = D4(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function I4(r, e, t, n) {
  const a = (s) => s instanceof t, i = (s) => {
    const o = Dr(s.getTextContent());
    o.setFormat(s.getFormat()), s.replace(o);
  };
  return [r.registerNodeTransform(cn, (s) => {
    if (!s.isSimpleText()) return;
    let o, l = s.getPreviousSibling(), u = s.getTextContent(), c = s;
    if (Se(l)) {
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
    let h = 0;
    for (; ; ) {
      o = e(u);
      let m, g = o === null ? "" : u.slice(o.end);
      if (u = g, g === "") {
        const y = c.getNextSibling();
        if (Se(y)) {
          g = c.getTextContent() + y.getTextContent();
          const x = e(g);
          if (x === null) return void (a(y) ? i(y) : y.markDirty());
          if (x.start !== 0) return;
        }
      }
      if (o === null) return;
      if (o.start === 0 && Se(l) && l.isTextEntity()) {
        h += o.end;
        continue;
      }
      o.start === 0 ? [m, c] = c.splitText(o.end) : [, m, c] = c.splitText(o.start + h, o.end + h), m === void 0 && R4(165, "nodeToReplace");
      const v = n(m);
      if (v.setFormat(m.getFormat()), m.replace(v), c == null) return;
      h = 0, l = v;
    }
  }), r.registerNodeTransform(t, (s) => {
    const o = s.getTextContent(), l = e(o);
    if (l === null || l.start !== 0) return void i(s);
    if (o.length > l.end) return void s.splitText(l.end);
    const u = s.getPreviousSibling();
    Se(u) && u.isTextEntity() && (i(u), i(s));
    const c = s.getNextSibling();
    Se(c) && c.isTextEntity() && (i(c), a(s) && i(s));
  })];
}
function F4(r) {
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
            const [u, c, h, m, g, v] = l;
            r.update(() => {
              const y = z();
              if ($(y)) {
                const x = y.anchor;
                let S = x.getNode(), w = 0, C = 0;
                if (Se(S) && u >= 0 && c >= 0 && (w = u, C = u + c, y.setTextNodeRange(S, w, S, C)), w === C && h === "" || (y.insertRawText(h), S = x.getNode()), Se(S)) {
                  w = m, C = m + g;
                  const E = S.getTextContentSize();
                  w = w > E ? E : w, C = C > E ? E : C, y.setTextNodeRange(S, w, S, C);
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
const Us = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
function au(r) {
  return r.getEditorState().read(Kd(r.isComposing()));
}
function L4({ contentEditable: r, placeholder: e = null, ErrorBoundary: t }) {
  const [n] = se(), a = function(i, s) {
    const [o, l] = U(() => i.getDecorators());
    return Us(() => i.registerDecoratorListener((u) => {
      g1(() => {
        l(u);
      });
    }), [i]), P(() => {
      l(i.getDecorators());
    }, [i]), ht(() => {
      const u = [], c = Object.keys(o);
      for (let h = 0; h < c.length; h++) {
        const m = c[h], g = p.jsx(s, { onError: (y) => i._onError(y), children: p.jsx(Pr, { fallback: null, children: o[m] }) }), v = i.getElementByKey(m);
        v !== null && u.push(ur(g, v, m));
      }
      return u;
    }, [s, o, i]);
  }(n, t);
  return function(i) {
    Us(() => Ie(Om(i), F4(i)), [i]);
  }(n), p.jsxs(p.Fragment, { children: [r, p.jsx(z4, { content: e }), a] });
}
function z4({ content: r }) {
  const [e] = se(), t = function(a) {
    const [i, s] = U(() => au(a));
    return Us(() => {
      function o() {
        const l = au(a);
        s(l);
      }
      return o(), Ie(a.registerUpdateListener(() => {
        o();
      }), a.registerEditableListener(() => {
        o();
      }));
    }, [a]), i;
  }(e), n = ro();
  return t ? typeof r == "function" ? r(n) : r : null;
}
function Ks(r, e) {
  return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Ks(r, e);
}
var iu = { error: null }, P4 = function(r) {
  var e, t;
  function n() {
    for (var i, s = arguments.length, o = new Array(s), l = 0; l < s; l++) o[l] = arguments[l];
    return (i = r.call.apply(r, [this].concat(o)) || this).state = iu, i.resetErrorBoundary = function() {
      for (var u, c = arguments.length, h = new Array(c), m = 0; m < c; m++) h[m] = arguments[m];
      i.props.onReset == null || (u = i.props).onReset.apply(u, h), i.reset();
    }, i;
  }
  t = r, (e = n).prototype = Object.create(t.prototype), e.prototype.constructor = e, Ks(e, t), n.getDerivedStateFromError = function(i) {
    return { error: i };
  };
  var a = n.prototype;
  return a.reset = function() {
    this.setState(iu);
  }, a.componentDidCatch = function(i, s) {
    var o, l;
    (o = (l = this.props).onError) == null || o.call(l, i, s);
  }, a.componentDidUpdate = function(i, s) {
    var o, l, u, c, h = this.state.error, m = this.props.resetKeys;
    h !== null && s.error !== null && ((u = i.resetKeys) === void 0 && (u = []), (c = m) === void 0 && (c = []), u.length !== c.length || u.some(function(g, v) {
      return !Object.is(g, c[v]);
    })) && ((o = (l = this.props).onResetKeysChange) == null || o.call(l, i.resetKeys, m), this.reset());
  }, a.render = function() {
    var i = this.state.error, s = this.props, o = s.fallbackRender, l = s.FallbackComponent, u = s.fallback;
    if (i !== null) {
      var c = { error: i, resetErrorBoundary: this.resetErrorBoundary };
      if (ft.isValidElement(u)) return u;
      if (typeof o == "function") return o(c);
      if (l) return ft.createElement(l, c);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, n;
}(ft.Component);
function B4({ children: r, onError: e }) {
  return p.jsx(P4, { fallback: p.jsx("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: e, children: r });
}
function j4({ defaultSelection: r }) {
  const [e] = se();
  return P(() => {
    e.focus(() => {
      const t = document.activeElement, n = e.getRootElement();
      n === null || t !== null && n.contains(t) || n.focus({ preventScroll: !0 });
    }, { defaultSelection: r });
  }, [r, e]), null;
}
function $4(r) {
  return r.registerCommand(xi, (e) => {
    const t = z();
    if (!$(t)) return !1;
    e.preventDefault();
    const n = function(a) {
      const i = a.getNodes();
      if (L1(i, (h) => ai(h) && h.canIndent() ? h : null).length > 0) return !0;
      const s = a.anchor, o = a.focus, l = o.isBefore(s) ? o : s, u = l.getNode(), c = wi(u);
      if (c.canIndent()) {
        const h = c.getKey();
        let m = ya();
        if (m.anchor.set(h, 0, "element"), m.focus.set(h, 0, "element"), m = a0(m), m.anchor.is(l)) return !0;
      }
      return !1;
    }(t) ? e.shiftKey ? ii : yi : Vu;
    return r.dispatchCommand(n, void 0);
  }, ye);
}
function q4() {
  const [r] = se();
  return P(() => $4(r)), null;
}
function H4() {
  const [r] = se();
  return P(() => r.registerCommand(b0, (e) => {
    const t = z();
    if (!$(t)) return !1;
    if (t.focus.getNode() !== null) {
      const n = x0();
      Br(n);
    }
    return !0;
  }, ye), [r]), null;
}
function U4({
  children: r,
  className: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: e || "placeholder__root", children: r });
}
const Wd = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
function K4({ editor: r, ariaActiveDescendant: e, ariaAutoComplete: t, ariaControls: n, ariaDescribedBy: a, ariaExpanded: i, ariaLabel: s, ariaLabelledBy: o, ariaMultiline: l, ariaOwns: u, ariaRequired: c, autoCapitalize: h, className: m, id: g, role: v = "textbox", spellCheck: y = !0, style: x, tabIndex: S, "data-testid": w, ...C }, E) {
  const [k, A] = U(r.isEditable()), R = ae((O) => {
    O && O.ownerDocument && O.ownerDocument.defaultView ? r.setRootElement(O) : r.setRootElement(null);
  }, [r]), I = ht(() => /* @__PURE__ */ function(...O) {
    return (F) => {
      O.forEach((j) => {
        typeof j == "function" ? j(F) : j != null && (j.current = F);
      });
    };
  }(E, R), [R, E]);
  return Wd(() => (A(r.isEditable()), r.registerEditableListener((O) => {
    A(O);
  })), [r]), p.jsx("div", { ...C, "aria-activedescendant": k ? e : void 0, "aria-autocomplete": k ? t : "none", "aria-controls": k ? n : void 0, "aria-describedby": a, "aria-expanded": k && v === "combobox" ? !!i : void 0, "aria-label": s, "aria-labelledby": o, "aria-multiline": l, "aria-owns": k ? u : void 0, "aria-readonly": !k || void 0, "aria-required": c, autoCapitalize: h, className: m, contentEditable: k, "data-testid": w, id: g, ref: I, role: k ? v : void 0, spellCheck: y, style: x, tabIndex: S });
}
const W4 = ju(K4);
function su(r) {
  return r.getEditorState().read(Kd(r.isComposing()));
}
const G4 = ju(Y4);
function Y4(r, e) {
  const { placeholder: t, ...n } = r, [a] = se();
  return p.jsxs(p.Fragment, { children: [p.jsx(W4, { editor: a, ...n, ref: e }), t != null && p.jsx(V4, { editor: a, content: t })] });
}
function V4({ content: r, editor: e }) {
  const t = function(s) {
    const [o, l] = U(() => su(s));
    return Wd(() => {
      function u() {
        const c = su(s);
        l(c);
      }
      return u(), Ie(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), o;
  }(e), [n, a] = U(e.isEditable());
  if (zr(() => (a(e.isEditable()), e.registerEditableListener((s) => {
    a(s);
  })), [e]), !t) return null;
  let i = null;
  return typeof r == "function" ? i = r(n) : r !== null && (i = r), i === null ? null : p.jsx("div", { "aria-hidden": !0, children: i });
}
function X4({
  className: r
}) {
  return /* @__PURE__ */ p.jsx(G4, { className: r || "content-editable__root" });
}
const Un = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", J4 = Un && "documentMode" in document ? document.documentMode : null, Tr = Un && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
Un && "InputEvent" in window && !J4 && "getTargetRanges" in new window.InputEvent("input");
const Gd = ft.createContext(null), ou = 4;
function Ae({
  children: r,
  className: e,
  onClick: t,
  title: n
}) {
  const a = Re(null), i = ft.useContext(Gd);
  if (i === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: s } = i;
  return P(() => {
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
function Z4({
  children: r,
  dropDownRef: e,
  onClose: t
}) {
  const [n, a] = U(), [i, s] = U(), o = ae(
    (c) => {
      a((h) => h ? [...h, c] : [c]);
    },
    [a]
  ), l = (c) => {
    if (!n)
      return;
    const h = c.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(h) && c.preventDefault(), h === "Escape" || h === "Tab" ? t() : h === "ArrowUp" ? s((m) => {
      if (!m)
        return n[0];
      const g = n.indexOf(m) - 1;
      return n[g === -1 ? n.length - 1 : g];
    }) : h === "ArrowDown" && s((m) => m ? n[n.indexOf(m) + 1] : n[0]);
  }, u = ht(
    () => ({
      registerItem: o
    }),
    [o]
  );
  return P(() => {
    n && !i && s(n[0]), i && i.current && i.current.focus();
  }, [n, i]), /* @__PURE__ */ p.jsx(Gd.Provider, { value: u, children: /* @__PURE__ */ p.jsx("div", { className: "dropdown", ref: e, onKeyDown: l, children: r }) });
}
function un({
  disabled: r = !1,
  buttonLabel: e,
  buttonAriaLabel: t,
  buttonClassName: n,
  buttonIconClassName: a,
  children: i,
  stopCloseOnClickSelf: s
}) {
  const o = Re(null), l = Re(null), [u, c] = U(!1), h = () => {
    c(!1), l && l.current && l.current.focus();
  };
  return P(() => {
    const m = l.current, g = o.current;
    if (u && m !== null && g !== null) {
      const { top: v, left: y } = m.getBoundingClientRect();
      g.style.top = `${v + m.offsetHeight + ou}px`, g.style.left = `${Math.min(
        y,
        window.innerWidth - g.offsetWidth - 20
      )}px`;
    }
  }, [o, l, u]), P(() => {
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
  }, [o, l, u, s]), P(() => {
    const m = () => {
      if (u) {
        const g = l.current, v = o.current;
        if (g !== null && v !== null) {
          const { top: y } = g.getBoundingClientRect(), x = y + g.offsetHeight + ou;
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
    u && ur(
      /* @__PURE__ */ p.jsx(Z4, { dropDownRef: o, onClose: h, children: i }),
      document.body
    )
  ] });
}
function Q4(...r) {
  const e = [];
  for (const t of r)
    if (t && typeof t == "string")
      for (const [n] of t.matchAll(/\S+/g))
        e.push(n);
  return e;
}
function eg(r, e, t) {
  const n = Zr[e];
  let a = r ^ n;
  return e === "subscript" ? a &= ~Zr.superscript : e === "superscript" && (a &= ~Zr.subscript), a;
}
function ss(r, e) {
  r.__lexicalClassNameCache === void 0 && (r.__lexicalClassNameCache = {});
  const t = r.__lexicalClassNameCache, n = t[e];
  if (n !== void 0)
    return n;
  const a = r[e];
  if (typeof a == "string") {
    const i = Q4(a);
    return t[e] = i, i;
  }
  return a;
}
function Ws(r, e, ...t) {
  if (!r)
    throw new Error(
      "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + e
    );
}
const tg = Qr.lazy(() => import("./DataMentionComponent-Bkb7X0c-.js"));
function rg(r) {
  const e = r.getAttribute("data-mention-data"), t = r.getAttribute("data-mention-type"), n = r.getAttribute("data-mention-field"), a = r.getAttribute("data-mention-label"), i = r.getAttribute("data-mention-step");
  return t !== null && n !== null && a !== null && i !== null ? {
    node: no({ dataMention: t, fieldName: n, label: a, data: e, step: parseInt(i) })
  } : null;
}
function os(r) {
  return r & s1 ? "code" : r & o1 ? "mark" : r & l1 ? "sub" : r & u1 ? "sup" : null;
}
function ls(r) {
  return r & c1 ? "strong" : r & d1 ? "em" : "span";
}
function Yd(r, e, t, n) {
  const a = t.classList;
  let i = ss(n, "base");
  i !== void 0 && a.add(...i), i = ss(
    n,
    "underlineStrikethrough"
  );
  let s = !1;
  const o = r & Ro && r & Io, l = e & Ro && e & Io;
  i !== void 0 && (l ? (s = !0, o || a.add(...i)) : o && a.remove(...i));
  for (const u in Zr) {
    const c = Zr[u];
    if (i = ss(n, u), i !== void 0)
      if (e & c) {
        if (s && (u === "underline" || u === "strikethrough")) {
          r & c && a.remove(...i);
          continue;
        }
        (!(r & c) || o && u === "underline" || u === "strikethrough") && a.add(...i);
      } else r & c && a.remove(...i);
  }
}
function lu(r, e, t) {
  const a = t.theme.text;
  a !== void 0 && Yd(0, e, r, a);
}
const ng = (r) => {
  var t;
  const e = r.parentElement;
  if (e) {
    if (e.hasAttribute("data-lexical-data-mention"))
      return;
    (t = e.parentElement) == null || t.appendChild(r);
  }
};
class Mn extends lr {
  constructor(t, n, a, i, s, o, l, u, c) {
    super(c);
    ne(this, "__dataMention");
    ne(this, "__fieldName");
    ne(this, "__label");
    ne(this, "__value");
    ne(this, "__data");
    ne(this, "__step");
    ne(this, "__format");
    ne(this, "__style");
    ne(this, "__decoratorSpan");
    ne(this, "defaultStep", 1);
    this.__dataMention = t, this.__fieldName = n, this.__label = a, this.__value = s, this.__data = i, this.__step = o || this.defaultStep, this.__format = l || 0, this.__style = u || "", this.__decoratorSpan = null;
  }
  static getType() {
    return "data-mention";
  }
  static clone(t) {
    return new Mn(
      t.__dataMention,
      t.__fieldName,
      t.__label,
      t.__data,
      t.__value,
      t.__step,
      t.__format,
      t.__style,
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
    const n = Zr[t];
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
    const n = this.__dataMention === "input", a = this.__format, i = os(a), s = ls(a), o = i === null ? s : i, l = document.createElement(n ? "span" : o), c = t.theme.dataMention;
    if (l.setAttribute("data-mention-type", this.__dataMention), l.setAttribute("data-mention-step", this.__step.toString()), l.setAttribute("data-mention-field", this.__fieldName), l.setAttribute("data-mention-label", this.__label), l.setAttribute("data-lexical-data-mention", "true"), l.setAttribute("data-mention-data", ((g = this.__data) == null ? void 0 : g.toString()) || ""), c !== void 0 && (l.className = c), n)
      return l;
    let h = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (h = document.createElement(s), l.appendChild(h)), lu(h, a, t);
    const m = this.__style;
    return m !== "" && (l.style.cssText = m), l;
  }
  updateDOM(t, n, a) {
    if (this.__dataMention === "input")
      return !1;
    const i = t.__format, s = this.__format, o = os(i), l = os(s), u = ls(i), c = ls(s), h = o === null ? u : o, m = l === null ? c : l, g = n.firstChild;
    let v = g !== null ? g.firstChild : null;
    if (v && v.nodeType !== Node.TEXT_NODE ? n.appendChild(v) : v = null, h !== m)
      return !0;
    if (o === l && u !== c) {
      const E = n.firstChild;
      E == null && Ws(!1, "updateDOM: prevInnerDOM is null or undefined");
      const k = document.createElement(c);
      return lu(
        k,
        s,
        a
      ), n.replaceChild(k, E), v && k.appendChild(v), !1;
    }
    let y = n;
    l !== null && o !== null && (y = n.firstChild, y == null && Ws(!1, "updateDOM: innerDOM is null or undefined"));
    const S = a.theme.text;
    S !== void 0 && i !== s && Yd(
      i,
      s,
      y,
      S
    );
    const w = t.__style, C = this.__style;
    return w !== C && (n.style.cssText = C), v && y && y.appendChild(v), !1;
  }
  static importDOM() {
    return {
      span: (t) => t.hasAttribute("data-lexical-data-mention") ? {
        conversion: rg,
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
    } = t, c = no({
      dataMention: n,
      fieldName: a,
      label: i,
      data: s,
      step: this.prototype.defaultStep,
      format: l,
      style: u
    });
    if (n === "input" && c.__value) {
      const h = c.__value;
      if (o) {
        const m = h.parseEditorState(o.editorState);
        m.isEmpty() || h.setEditorState(m);
      }
    }
    return c;
  }
  exportDOM() {
    var n;
    const t = document.createElement("span");
    return t.setAttribute("data-mention-type", this.__dataMention), t.setAttribute("data-mention-step", this.__step.toString()), t.setAttribute("data-mention-field", this.__fieldName), t.setAttribute("data-mention-label", this.__label), t.setAttribute("data-lexical-data-mention", "true"), t.setAttribute("data-mention-data", ((n = this.__data) == null ? void 0 : n.toString()) || ""), { element: t };
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
    return n.__format = typeof t == "string" ? Zr[t] : t, n;
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
    const n = this.getFormat(), a = eg(n, t);
    return this.setFormat(a);
  }
  clearAllFormats() {
    if (this.isInput())
      return this;
    this.setFormat(0), this.setStyle("");
  }
  decorate() {
    return /* @__PURE__ */ p.jsx(Pr, { fallback: null, children: /* @__PURE__ */ p.jsx(
      tg,
      {
        dataMention: this.__dataMention,
        label: this.__label,
        value: this.__value,
        data: this.__data,
        step: this.__step,
        nodeKey: this.__key
      }
    ) });
  }
  remove(t) {
    this.__dataMention !== "input" && this.__decoratorSpan && ng(this.__decoratorSpan), super.remove(t);
  }
}
const no = ({
  dataMention: r,
  fieldName: e,
  label: t,
  data: n,
  value: a,
  step: i,
  format: s,
  style: o
}) => {
  !a && r === "input" && (a = fa());
  const l = new Mn(r, e, t, n, a, i, s, o);
  return lt(l);
}, ag = (r) => r instanceof Mn, sa = (r) => r === null || r.getNodes().length !== 1 ? !1 : ag(r.getNodes()[0]), Ur = 8, Kr = 72, ig = 15;
function sg({
  selectionFontSize: r,
  disabled: e = !1,
  editor: t
}) {
  const [n, a] = ft.useState(r), i = (u, c) => {
    if (!c)
      return u;
    let h = u;
    switch (c) {
      case 2:
        switch (!0) {
          case u > Kr:
            h = Kr;
            break;
          case u >= 48:
            h -= 12;
            break;
          case u >= 24:
            h -= 4;
            break;
          case u >= 14:
            h -= 2;
            break;
          case u >= 9:
            h -= 1;
            break;
          default:
            h = Ur;
            break;
        }
        break;
      case 1:
        switch (!0) {
          case u < Ur:
            h = Ur;
            break;
          case u < 12:
            h += 1;
            break;
          case u < 20:
            h += 2;
            break;
          case u < 36:
            h += 4;
            break;
          case u <= 60:
            h += 12;
            break;
          default:
            h = Kr;
            break;
        }
        break;
    }
    return h;
  }, s = ft.useCallback(
    (u, c) => {
      const h = (m) => (m || (m = `${ig}px`), m = m.slice(0, -2), `${i(
        Number(m),
        c
      )}px`);
      t.update(() => {
        if (t.isEditable()) {
          const m = z();
          m !== null && (sa(m) ? m.getNodes()[0].patchStyle({ "font-size": u || "15px" }) : o0(m, {
            "font-size": u || h
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
      let h = c;
      c > Kr ? h = Kr : c < Ur && (h = Ur), a(String(h)), s(String(h) + "px", null);
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
  return ft.useEffect(() => {
    a(r);
  }, [r]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) <= Ur,
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
        min: Ur,
        max: Kr,
        onChange: (u) => a(u.target.value),
        onKeyDown: o
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        type: "button",
        disabled: e || r !== "" && Number(n) >= Kr,
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
const og = /* @__PURE__ */ new Set([
  "http:",
  "https:",
  "mailto:",
  "sms:",
  "tel:"
]);
function fi(r) {
  try {
    const e = new URL(r);
    if (!og.has(e.protocol))
      return "about:blank";
  } catch {
    return r;
  }
  return r;
}
const lg = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
function ug(r) {
  return r === "https://" || lg.test(r);
}
function On(r) {
  const e = r.anchor, t = r.focus, n = r.anchor.getNode(), a = r.focus.getNode();
  return n === a ? n : r.isBackward() ? Po(t) ? n : a : Po(e) ? n : a;
}
function Lr({
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
let Gs = !1;
const cg = [
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
], Vn = 214, uu = 150;
function Vd({
  color: r,
  onChange: e
}) {
  const [t, n] = U(Sn("hex", r)), [a, i] = U(r), s = Re(null), o = ht(
    () => ({
      x: t.hsv.s / 100 * Vn,
      y: (100 - t.hsv.v) / 100 * uu
    }),
    [t.hsv.s, t.hsv.v]
  ), l = ht(
    () => ({
      x: t.hsv.h / 360 * Vn
    }),
    [t.hsv]
  ), u = (m) => {
    if (i(m), /^#[0-9A-Fa-f]{6}$/i.test(m)) {
      const g = Sn("hex", m);
      n(g);
    }
  }, c = ({ x: m, y: g }) => {
    const v = {
      ...t.hsv,
      s: m / Vn * 100,
      v: 100 - g / uu * 100
    }, y = Sn("hsv", v);
    n(y), i(y.hex);
  }, h = ({ x: m }) => {
    const g = { ...t.hsv, h: m / Vn * 360 }, v = Sn("hsv", g);
    n(v), i(v.hex);
  };
  return P(() => {
    s.current !== null && e && (e(t.hex, Gs), i(t.hex));
  }, [t, e]), P(() => {
    if (r === void 0)
      return;
    const m = Sn("hex", r);
    n(m), i(m.hex);
  }, [r]), /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: Vn },
      ref: s,
      children: [
        /* @__PURE__ */ p.jsx(Lr, { label: "Hex", onChange: u, value: a }),
        /* @__PURE__ */ p.jsx("div", { className: "color-picker-basic-color", children: cg.map((m) => /* @__PURE__ */ p.jsx(
          "button",
          {
            className: m === t.hex ? " active" : "",
            style: { backgroundColor: m },
            onClick: () => {
              i(m), n(Sn("hex", m));
            }
          },
          m
        )) }),
        /* @__PURE__ */ p.jsx(
          cu,
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
        /* @__PURE__ */ p.jsx(cu, { className: "color-picker-hue", onChange: h, children: /* @__PURE__ */ p.jsx(
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
function cu({ className: r, style: e, onChange: t, children: n }) {
  const a = Re(null), i = Re(!1), s = (l) => {
    if (a.current) {
      const { current: u } = a, { width: c, height: h, left: m, top: g } = u.getBoundingClientRect(), v = du(l.clientX - m, c, 0), y = du(l.clientY - g, h, 0);
      t({ x: v, y });
    }
  }, o = (l) => {
    if (l.button !== 0)
      return;
    s(l);
    const u = (h) => {
      i.current = !0, Gs = !0, s(h);
    }, c = (h) => {
      i.current && (Gs = !1), document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", c, !1), s(h), i.current = !1;
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
function du(r, e, t) {
  return r > e ? e : r < t ? t : r;
}
function hu(r) {
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
function mu(r) {
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
function us({ r, g: e, b: t }) {
  r /= 255, e /= 255, t /= 255;
  const n = Math.max(r, e, t), a = n - Math.min(r, e, t), i = a ? (n === r ? (e - t) / a + (e < t ? 6 : 0) : n === e ? 2 + (t - r) / a : 4 + (r - e) / a) * 60 : 0, s = n ? a / n * 100 : 0, o = n * 100;
  return { h: i, s, v: o };
}
function dg({ h: r, s: e, v: t }) {
  e /= 100, t /= 100;
  const n = ~~(r / 60), a = r / 60 - n, i = t * (1 - e), s = t * (1 - e * a), o = t * (1 - e * (1 - a)), l = n % 6, u = Math.round([t, s, i, i, o, t][l] * 255), c = Math.round([o, t, t, s, i, i][l] * 255);
  return { b: Math.round([i, i, o, t, t, s][l] * 255), g: c, r: u };
}
function fu({ b: r, g: e, r: t }) {
  return "#" + [t, e, r].map((n) => n.toString(16).padStart(2, "0")).join("");
}
function Sn(r, e) {
  let t = hu("#121212"), n = mu(t), a = us(n);
  return r === "hex" ? (t = hu(e), n = mu(t), a = us(n)) : r === "rgb" ? (n = e, t = fu(n), a = us(n)) : r === "hsv" && (a = e, n = dg(a), t = fu(n)), { hex: t, hsv: a, rgb: n };
}
function pu({
  disabled: r = !1,
  stopCloseOnClickSelf: e = !0,
  color: t,
  onChange: n,
  ...a
}) {
  return /* @__PURE__ */ p.jsx(
    un,
    {
      ...a,
      disabled: r,
      stopCloseOnClickSelf: e,
      children: /* @__PURE__ */ p.jsx(Vd, { color: t, onChange: n })
    }
  );
}
const ao = $e();
function hg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([zn]))
      throw new Error(
        "PageBreakPlugin: PageBreakNode is not registered on editor"
      );
    return Ie(
      r.registerCommand(
        ao,
        () => {
          const e = z();
          if (!$(e))
            return !1;
          if (e.focus.getNode() !== null) {
            const n = k0();
            Br(n);
          }
          return !0;
        },
        ye
      )
    );
  }, [r]), null;
}
function mg({ children: r }) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogButtonsList", children: r });
}
function Kn({
  "data-test-id": r,
  children: e
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "DialogActions", "data-test-id": r, children: e });
}
function fg(...r) {
  return r.filter(Boolean).join(" ");
}
function or({
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
      className: fg(
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
function Xd({
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
const pg = (r) => Un ? (r || window).getSelection() : null, Ia = $e("INSERT_IMAGE_COMMAND");
function gg({
  onClick: r
}) {
  const [e, t] = U(""), [n, a] = U(""), i = e === "";
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Lr,
      {
        label: "Image URL",
        placeholder: "i.e. https://source.unsplash.com/random",
        onChange: t,
        value: e,
        "data-test-id": "image-modal-url-input"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Lr,
      {
        label: "Alt Text",
        placeholder: "Random unsplash image",
        onChange: a,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ p.jsx(Kn, { children: /* @__PURE__ */ p.jsx(
      or,
      {
        "data-test-id": "image-modal-confirm-btn",
        disabled: i,
        onClick: () => r({ altText: n, src: e }),
        children: "Confirm"
      }
    ) })
  ] });
}
function vg({
  onClick: r
}) {
  const [e, t] = U(""), [n, a] = U(""), i = e === "", s = (o) => {
    const l = new FileReader();
    l.onload = function() {
      return typeof l.result == "string" && t(l.result), "";
    }, o !== null && l.readAsDataURL(o[0]);
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Xd,
      {
        label: "Image Upload",
        onChange: s,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ),
    /* @__PURE__ */ p.jsx(
      Lr,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: a,
        value: n,
        "data-test-id": "image-modal-alt-text-input"
      }
    ),
    /* @__PURE__ */ p.jsx(Kn, { children: /* @__PURE__ */ p.jsx(
      or,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: i,
        onClick: () => r({ altText: n, src: e }),
        children: "Confirm"
      }
    ) })
  ] });
}
function Jd({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = U(null), a = Re(!1);
  P(() => {
    a.current = !1;
    const s = (o) => {
      a.current = o.altKey;
    };
    return document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s);
    };
  }, [r]);
  const i = (s) => {
    r.dispatchCommand(Ia, s), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    !t && /* @__PURE__ */ p.jsxs(mg, { children: [
      /* @__PURE__ */ p.jsx(
        or,
        {
          "data-test-id": "image-modal-option-url",
          onClick: () => n("url"),
          children: "URL"
        }
      ),
      /* @__PURE__ */ p.jsx(
        or,
        {
          "data-test-id": "image-modal-option-file",
          onClick: () => n("file"),
          children: "File"
        }
      )
    ] }),
    t === "url" && /* @__PURE__ */ p.jsx(gg, { onClick: i }),
    t === "file" && /* @__PURE__ */ p.jsx(vg, { onClick: i })
  ] });
}
function bg({
  captionsEnabled: r
}) {
  const [e] = se();
  return P(() => {
    if (!e.hasNodes([Pn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Ie(
      e.registerCommand(
        Ia,
        (t) => {
          const n = E0(t);
          return Rn([n]), zt(n.getParentOrThrow()) && wa(n, xe).selectEnd(), !0;
        },
        ye
      ),
      e.registerCommand(
        n0,
        (t) => xg(t),
        At
      ),
      e.registerCommand(
        gi,
        (t) => wg(t),
        ve
      ),
      e.registerCommand(
        vi,
        (t) => _g(t, e),
        At
      )
    );
  }, [r, e]), null;
}
const yg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Zd = document.createElement("img");
Zd.src = yg;
function xg(r) {
  const e = io();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(Zd, 0, 0), t.setData(
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
function wg(r) {
  return io() ? (Qd(r) || r.preventDefault(), !0) : !1;
}
function _g(r, e) {
  const t = io();
  if (!t)
    return !1;
  const n = Sg(r);
  if (!n)
    return !1;
  if (r.preventDefault(), Qd(r)) {
    const a = Cg(r);
    t.remove();
    const i = ya();
    a != null && i.applyDOMRange(a), Ct(i), e.dispatchCommand(Ia, n);
  }
  return !0;
}
function io() {
  const r = z();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return Zm(t) ? t : null;
}
function Sg(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function Qd(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function Cg(r) {
  let e;
  const t = r.target, n = t == null ? null : t.nodeType === 9 ? t.defaultView : t.ownerDocument.defaultView, a = pg(n);
  if (document.caretRangeFromPoint)
    e = document.caretRangeFromPoint(r.clientX, r.clientY);
  else if (r.rangeParent && a !== null)
    a.collapse(r.rangeParent, r.rangeOffset || 0), e = a.getRangeAt(0);
  else
    throw Error("Cannot get the selection when dragging");
  return e;
}
function kg({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n
}) {
  const a = Re(null);
  return P(() => {
    a.current !== null && a.current.focus();
  }, []), P(() => {
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
function Eg({
  onClose: r,
  children: e,
  title: t,
  closeOnClickOutside: n = !1
}) {
  return ur(
    /* @__PURE__ */ p.jsx(
      kg,
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
function Di() {
  const [r, e] = U(null), t = ae(() => {
    e(null);
  }, []), n = ht(() => {
    if (r === null)
      return null;
    const { title: i, content: s, closeOnClickOutside: o } = r;
    return /* @__PURE__ */ p.jsx(
      Eg,
      {
        onClose: t,
        title: i,
        closeOnClickOutside: o,
        children: s
      }
    );
  }, [r, t]), a = ae(
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
function Ng({
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
const Tg = (r) => Un ? (r || window).getSelection() : null, so = $e("INSERT_INLINE_IMAGE_COMMAND");
function Ag({
  activeEditor: r,
  onClose: e
}) {
  const t = Re(!1), [n, a] = U(""), [i, s] = U(""), [o, l] = U(!1), [u, c] = U("left"), h = n === "", m = (x) => {
    l(x.target.checked);
  }, g = (x) => {
    c(x.target.value);
  }, v = (x) => {
    const S = new FileReader();
    S.onload = function() {
      return typeof S.result == "string" && a(S.result), "";
    }, x !== null && S.readAsDataURL(x[0]);
  };
  P(() => {
    t.current = !1;
    const x = (S) => {
      t.current = S.altKey;
    };
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [r]);
  const y = () => {
    const x = { altText: i, position: u, showCaption: o, src: n };
    r.dispatchCommand(so, x), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ p.jsx(
      Xd,
      {
        label: "Image Upload",
        onChange: v,
        accept: "image/*",
        "data-test-id": "image-modal-file-upload"
      }
    ) }),
    /* @__PURE__ */ p.jsx("div", { style: { marginBottom: "1em" }, children: /* @__PURE__ */ p.jsx(
      Lr,
      {
        label: "Alt Text",
        placeholder: "Descriptive alternative text",
        onChange: s,
        value: i,
        "data-test-id": "image-modal-alt-text-input"
      }
    ) }),
    /* @__PURE__ */ p.jsxs(
      Ng,
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
    /* @__PURE__ */ p.jsx(Kn, { children: /* @__PURE__ */ p.jsx(
      or,
      {
        "data-test-id": "image-modal-file-upload-btn",
        disabled: h,
        onClick: () => y(),
        children: "Confirm"
      }
    ) })
  ] });
}
function Mg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([Hn]))
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    return Ie(
      r.registerCommand(
        so,
        (e) => {
          const t = to(e);
          return Rn([t]), zt(t.getParentOrThrow()) && wa(t, xe).selectEnd(), !0;
        },
        ye
      ),
      r.registerCommand(
        n0,
        (e) => Dg(e),
        At
      ),
      r.registerCommand(
        gi,
        (e) => Rg(e),
        ve
      ),
      r.registerCommand(
        vi,
        (e) => Ig(e, r),
        At
      )
    );
  }, [r]), null;
}
const Og = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", eh = document.createElement("img");
eh.src = Og;
function Dg(r) {
  const e = oo();
  if (!e)
    return !1;
  const t = r.dataTransfer;
  return t ? (t.setData("text/plain", "_"), t.setDragImage(eh, 0, 0), t.setData(
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
function Rg(r) {
  return oo() ? (th(r) || r.preventDefault(), !0) : !1;
}
function Ig(r, e) {
  const t = oo();
  if (!t)
    return !1;
  const n = Fg(r);
  if (!n)
    return !1;
  if (r.preventDefault(), th(r)) {
    const a = Lg(r);
    t.remove();
    const i = ya();
    a != null && i.applyDOMRange(a), Ct(i), e.dispatchCommand(so, n);
  }
  return !0;
}
function oo() {
  const r = z();
  if (!gt(r))
    return null;
  const t = r.getNodes()[0];
  return f4(t) ? t : null;
}
function Fg(r) {
  var a;
  const e = (a = r.dataTransfer) == null ? void 0 : a.getData("application/x-lexical-drag");
  if (!e)
    return null;
  const { type: t, data: n } = JSON.parse(e);
  return t !== "image" ? null : n;
}
function th(r) {
  const e = r.target;
  return !!(e && e instanceof HTMLElement && !e.closest("code, span.editor-image") && e.parentElement && e.parentElement.closest("div.content-editable__root"));
}
function Lg(r) {
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
const lo = $e(
  "INSERT_EXCALIDRAW_COMMAND"
);
function zg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([sn]))
      throw new Error(
        "ExcalidrawPlugin: ExcalidrawNode not registered on editor"
      );
    return r.registerCommand(
      lo,
      () => {
        const e = $d();
        return Rn([e]), zt(e.getParentOrThrow()) && wa(e, xe).selectEnd(), !0;
      },
      ye
    );
  }, [r]), null;
}
$e("INSERT_NEW_TABLE_COMMAND");
Qs({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function rh({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = U("5"), [a, i] = U("5"), [s, o] = U(!0);
  P(() => {
    const u = Number(t), c = Number(a);
    u && u > 0 && u <= 500 && c && c > 0 && c <= 50 ? o(!1) : o(!0);
  }, [t, a]);
  const l = () => {
    r.dispatchCommand(w0, {
      columns: a,
      rows: t
    }), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      Lr,
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
      Lr,
      {
        placeholder: "# of columns (1-50)",
        label: "Columns",
        onChange: i,
        value: a,
        "data-test-id": "table-modal-columns",
        type: "number"
      }
    ),
    /* @__PURE__ */ p.jsx(Kn, { "data-test-id": "table-model-confirm-insert", children: /* @__PURE__ */ p.jsx(or, { disabled: s, onClick: l, children: "Confirm" }) })
  ] });
}
const nh = $e(
  "INSERT_POLL_COMMAND"
);
function ah({
  activeEditor: r,
  onClose: e
}) {
  const [t, n] = U(""), a = () => {
    r.dispatchCommand(nh, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Lr, { label: "Question", onChange: n, value: t }),
    /* @__PURE__ */ p.jsx(Kn, { children: /* @__PURE__ */ p.jsx(or, { disabled: t.trim() === "", onClick: a, children: "Confirm" }) })
  ] });
}
function Pg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([qn]))
      throw new Error("PollPlugin: PollNode not registered on editor");
    return r.registerCommand(
      nh,
      (e) => {
        const t = eo(e, [
          eu(),
          eu()
        ]);
        return Rn([t]), zt(t.getParentOrThrow()) && wa(t, xe).selectEnd(), !0;
      },
      ye
    );
  }, [r]), null;
}
const ih = $e(), Bg = $e();
function jg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([on, ln]))
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    const e = (t) => {
      var a, i;
      const n = z();
      if ($(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const s = fe(
          n.anchor.getNode(),
          Xa
        );
        if (Xa(s)) {
          const o = s.getParent(), l = o && (t ? o.getFirstChild() : o == null ? void 0 : o.getLastChild()), u = t ? (a = s.getFirstDescendant()) == null ? void 0 : a.getKey() : (i = s.getLastDescendant()) == null ? void 0 : i.getKey();
          o !== null && l === s && n.anchor.key === u && (t ? s.insertBefore(xe()) : s.insertAfter(xe()));
        }
      }
      return !1;
    };
    return Ie(
      // When layout is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        hn,
        () => e(!1),
        ve
      ),
      r.registerCommand(
        bi,
        () => e(!1),
        ve
      ),
      // When layout is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        mn,
        () => e(!0),
        ve
      ),
      r.registerCommand(
        xa,
        () => e(!0),
        ve
      ),
      r.registerCommand(
        ih,
        (t) => (r.update(() => {
          const n = qd(t), a = cs(t);
          for (let i = 0; i < a; i++)
            n.append(
              $s().append(xe())
            );
          Br(n), n.selectStart();
        }), !0),
        ye
      ),
      r.registerCommand(
        Bg,
        ({ template: t, nodeKey: n }) => (r.update(() => {
          const a = Mt(n);
          if (!Xa(a))
            return;
          const i = cs(t), s = cs(
            a.getTemplateColumns()
          );
          if (i > s)
            for (let o = s; o < i; o++)
              a.append(
                $s().append(xe())
              );
          else if (i < s)
            for (let o = s - 1; o >= i; o--) {
              const l = a.getChildAtIndex(o);
              Ql(l) && l.remove();
            }
          a.setTemplateColumns(t);
        }), !0),
        ye
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(ln, (t) => {
        const n = t.getParent();
        if (!Xa(n)) {
          const a = t.getChildren();
          for (const i of a)
            t.insertBefore(i);
          t.remove();
        }
      }),
      r.registerNodeTransform(on, (t) => {
        const n = t.getChildren();
        if (!n.every(Ql)) {
          for (const a of n)
            t.insertBefore(a);
          t.remove();
        }
      })
    );
  }, [r]), null;
}
function cs(r) {
  return r.trim().split(/\s+/).length;
}
const ds = [
  { label: "2 columns (equal width)", value: "1fr 1fr" },
  { label: "2 columns (25% - 75%)", value: "1fr 3fr" },
  { label: "3 columns (equal width)", value: "1fr 1fr 1fr" },
  { label: "3 columns (25% - 50% - 25%)", value: "1fr 2fr 1fr" },
  { label: "4 columns (equal width)", value: "1fr 1fr 1fr 1fr" }
];
function sh({
  activeEditor: r,
  onClose: e
}) {
  var s;
  const [t, n] = U(ds[0].value), a = (s = ds.find((o) => o.value === t)) == null ? void 0 : s.label, i = () => {
    r.dispatchCommand(ih, t), e();
  };
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      un,
      {
        buttonClassName: "toolbar-item dialog-dropdown",
        buttonLabel: a,
        children: ds.map(({ label: o, value: l }) => /* @__PURE__ */ p.jsx(
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
    /* @__PURE__ */ p.jsx(or, { onClick: i, children: "Insert" })
  ] });
}
function Ys(r, e) {
  return Ys = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Ys(r, e);
}
function $g(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, Ys(r, e);
}
var qg = function(e, t) {
  return e === void 0 && (e = []), t === void 0 && (t = []), e.length !== t.length || e.some(function(n, a) {
    return !Object.is(n, t[a]);
  });
}, gu = {
  error: null
}, Hg = /* @__PURE__ */ function(r) {
  $g(e, r);
  function e() {
    for (var n, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return n = r.call.apply(r, [this].concat(i)) || this, n.state = gu, n.resetErrorBoundary = function() {
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
    this.setState(gu);
  }, t.componentDidCatch = function(a, i) {
    var s, o;
    (s = (o = this.props).onError) == null || s.call(o, a, i);
  }, t.componentDidUpdate = function(a, i) {
    var s = this.state.error, o = this.props.resetKeys;
    if (s !== null && i.error !== null && qg(a.resetKeys, o)) {
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
      if (/* @__PURE__ */ ft.isValidElement(l))
        return l;
      if (typeof s == "function")
        return s(u);
      if (o)
        return /* @__PURE__ */ ft.createElement(o, u);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, e;
}(ft.Component);
function Ug({
  equation: r,
  inline: e,
  onDoubleClick: t
}) {
  const n = Re(null);
  return P(() => {
    const a = n.current;
    a !== null && jd.render(r, a, {
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
function Kg({
  onConfirm: r,
  initialEquation: e = ""
}) {
  const [t] = se(), [n, a] = U(e), [i, s] = U(!0), o = ae(() => {
    r(n, i);
  }, [r, n, i]), l = ae(() => {
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
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_centerRow", children: /* @__PURE__ */ p.jsx(Hg, { onError: (u) => t._onError(u), fallback: null, children: /* @__PURE__ */ p.jsx(
      Ug,
      {
        equation: n,
        inline: !1,
        onDoubleClick: () => null
      }
    ) }) }),
    /* @__PURE__ */ p.jsx("div", { className: "KatexEquationAlterer_dialogActions", children: /* @__PURE__ */ p.jsx(or, { onClick: o, children: "Confirm" }) })
  ] });
}
const oh = $e("INSERT_EQUATION_COMMAND");
function lh({
  activeEditor: r,
  onClose: e
}) {
  const t = ae(
    (n, a) => {
      r.dispatchCommand(oh, { equation: n, inline: a }), e();
    },
    [r, e]
  );
  return /* @__PURE__ */ p.jsx(Kg, { onConfirm: t });
}
function Wg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([$n]))
      throw new Error(
        "EquationsPlugins: EquationsNode not registered on editor"
      );
    return r.registerCommand(
      oh,
      (e) => {
        const { equation: t, inline: n } = e, a = Q0(t, n);
        return Rn([a]), zt(a.getParentOrThrow()) && wa(a, xe).selectEnd(), !0;
      },
      ye
    );
  }, [r]), null;
}
const uo = $e();
$e();
function Gg() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([
      rn,
      an,
      nn
    ]))
      throw new Error(
        "CollapsiblePlugin: CollapsibleContainerNode, CollapsibleTitleNode, or CollapsibleContentNode not registered on editor"
      );
    const e = () => {
      var a;
      const n = z();
      if ($(n) && n.isCollapsed() && n.anchor.offset === 0) {
        const i = fe(
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
      const n = z();
      if ($(n) && n.isCollapsed()) {
        const a = fe(
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
    return Ie(
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Title + Content" it'll unwrap nodes and convert it back
      // to regular content.
      r.registerNodeTransform(nn, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          const i = n.getChildren();
          for (const s of i)
            n.insertBefore(s);
          n.remove();
        }
      }),
      r.registerNodeTransform(an, (n) => {
        const a = n.getParent();
        if (!fr(a)) {
          n.replace(
            xe().append(...n.getChildren())
          );
          return;
        }
      }),
      r.registerNodeTransform(rn, (n) => {
        const a = n.getChildren();
        if (a.length !== 2 || !vl(a[0]) || !Uc(a[1])) {
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
        ra,
        () => {
          const n = z();
          if (!$(n) || !n.isCollapsed() || n.anchor.offset !== 0)
            return !1;
          const i = n.anchor.getNode().getTopLevelElement();
          if (i === null)
            return !1;
          const s = i.getPreviousSibling();
          return !fr(s) || s.getOpen() ? !1 : (s.setOpen(!0), !0);
        },
        ve
      ),
      // When collapsible is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      r.registerCommand(
        hn,
        t,
        ve
      ),
      r.registerCommand(
        bi,
        t,
        ve
      ),
      // When collapsible is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      r.registerCommand(
        mn,
        e,
        ve
      ),
      r.registerCommand(
        xa,
        e,
        ve
      ),
      // Handling CMD+Enter to toggle collapsible element collapsed state
      r.registerCommand(
        oa,
        () => {
          var a;
          const n = (a = r._window) == null ? void 0 : a.event;
          if (n && (n.ctrlKey || n.metaKey) && n.key === "Enter") {
            const i = t0();
            if ($(i) && i.isCollapsed()) {
              const s = fe(
                i.anchor.getNode(),
                (o) => ge(o) && !o.isInline()
              );
              if (vl(s)) {
                const o = s.getParent();
                if (fr(o))
                  return o.toggleOpen(), Ct(i.clone()), !0;
              }
            }
          }
          return !1;
        },
        ve
      ),
      r.registerCommand(
        uo,
        () => (r.update(() => {
          const n = D0(), a = xe();
          Br(
            M0(!0).append(
              n.append(a),
              O0().append(xe())
            )
          ), a.select();
        }), !0),
        ve
      )
    );
  }, [r]), null;
}
const vu = "startTransition", Yg = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
let Vg = class {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
};
const bu = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function yu(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function Xg(r, e, t, n) {
  const [a] = se();
  P(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(h, m) {
        let g = getComputedStyle(h);
        const v = g.position === "absolute", y = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = h; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && y.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = yu(e, s);
      const u = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const h = yu(e, s);
        h !== l && (l = h, n != null && n(h));
      }, c = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), c.observe(e), () => {
        c.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const xu = $e("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function Jg({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ve }) {
  const [u, c] = U(null), h = n.match && n.match.matchingString;
  P(() => {
    c(0);
  }, [h]);
  const m = ae((v) => {
    e.update(() => {
      const y = n.match != null && o ? function(x) {
        const S = z();
        if (!$(S) || !S.isCollapsed()) return null;
        const w = S.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const E = w.offset, k = C.getTextContent().slice(0, E), A = x.replaceableString.length, R = E - function(O, F, j) {
          let V = j;
          for (let X = V; X <= F.length; X++) O.substr(-X) === F.substr(0, X) && (V = X);
          return V;
        }(k, x.matchingString, A);
        if (R < 0) return null;
        let I;
        return R === 0 ? [I] = C.splitText(E) : [, I] = C.splitText(R, E), I;
      }(n.match) : null;
      s(v, y, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ae((v) => {
    const y = e.getRootElement();
    y !== null && (y.setAttribute("aria-activedescendant", "typeahead-item-" + v), c(v));
  }, [e]);
  return P(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), Yg(() => {
    a === null ? c(null) : u === null && g(0);
  }, [a, u, g]), P(() => Ie(e.registerCommand(xu, ({ option: v }) => !(!v.ref || v.ref.current == null) && (bu(v.ref.current), !0), l)), [e, g, l]), P(() => Ie(e.registerCommand(hn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== a.length - 1 ? u + 1 : 0;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && e.dispatchCommand(xu, { index: x, option: S }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(mn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== 0 ? u - 1 : a.length - 1;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && bu(S.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Dn, (v) => {
    const y = v;
    return y.preventDefault(), y.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(xi, (v) => {
    const y = v;
    return a !== null && u !== null && a[u] != null && (y.preventDefault(), y.stopImmediatePropagation(), m(a[u]), !0);
  }, l), e.registerCommand(i0, (v) => a !== null && u !== null && a[u] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[u]), !0), l)), [m, r, e, a, u, g, l]), i(t, ht(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: u, setHighlightedIndex: c }), [m, u, a]), n.match ? n.match.matchingString : "");
}
function Zg({ options: r, nodeKey: e, onClose: t, onOpen: n, onSelectOption: a, menuRenderFn: i, anchorClassName: s, commandPriority: o = ve, parent: l }) {
  const [u] = se(), [c, h] = U(null), m = function(x, S, w, C = document.body, E = !0) {
    const [k] = se(), A = Re(document.createElement("div")), R = ae(() => {
      A.current.style.top = A.current.style.bottom;
      const O = k.getRootElement(), F = A.current, j = F.firstChild;
      if (O !== null && x !== null) {
        const { left: V, top: X, width: J, height: Y } = x.getRect(), he = A.current.offsetHeight;
        if (F.style.top = `${X + he + 3 + (E ? window.pageYOffset : 0)}px`, F.style.left = `${V + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${J}px`, j !== null) {
          j.style.top = `${X}`;
          const ie = j.getBoundingClientRect(), W = ie.height, me = ie.width, de = O.getBoundingClientRect();
          V + me > de.right && (F.style.left = `${de.right - me + window.pageXOffset}px`), (X + W > window.innerHeight || X + W > de.bottom) && X - de.top > W + Y && (F.style.top = `${X - W - Y + (E ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), A.current = F, O.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, E, w, C]);
    P(() => {
      const O = k.getRootElement();
      if (x !== null) return R(), () => {
        O !== null && O.removeAttribute("aria-controls");
        const F = A.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, R, x]);
    const I = ae((O) => {
      x !== null && (O || S(null));
    }, [x, S]);
    return Xg(x, A.current, R, I), A;
  }(c, h, s, l), g = ae(() => {
    h(null), t != null && c !== null && t();
  }, [t, c]), v = ae((x) => {
    h(x), n != null && c === null && n(x);
  }, [n, c]), y = ae(() => {
    e ? u.update(() => {
      const x = Mt(e), S = u.getElementByKey(e);
      var w;
      x != null && S != null && c == null && (w = () => v({ getRect: () => S.getBoundingClientRect() }), vu in Qr ? Qr[vu](w) : w());
    }) : e == null && c != null && g();
  }, [g, u, e, v, c]);
  return P(() => {
    y();
  }, [y, e]), P(() => {
    if (e != null) return u.registerUpdateListener(({ dirtyElements: x }) => {
      x.get(e) && y();
    });
  }, [u, y, e]), c === null || u === null ? null : p.jsx(Jg, { close: g, resolution: c, editor: u, anchorElementRef: m, options: r, menuRenderFn: i, onSelectOption: a, commandPriority: o });
}
const Qg = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, co = $e("INSERT_EMBED_COMMAND");
let wu = class extends Vg {
  constructor(e, t) {
    super(e), this.title = e, this.onSelect = t.onSelect.bind(this);
  }
};
function e2({ embedConfigs: r, onOpenEmbedModalForConfig: e, getMenuOptions: t, menuRenderFn: n, menuCommandPriority: a = ve }) {
  const [i] = se(), [s, o] = U(null), [l, u] = U(null), c = ae(() => {
    o(null), u(null);
  }, []), h = ae(async (y) => {
    const x = i.getEditorState().read(function() {
      const S = Mt(y);
      if (it(S)) return S.getURL();
    });
    if (x !== void 0) for (const S of r)
      await Promise.resolve(S.parseUrl(x)) != null && (u(S), o(y));
  }, [i, r]);
  P(() => Ie(...[In, _a].map((y) => i.registerMutationListener(y, (...x) => ((S, { updateTags: w, dirtyLeaves: C }) => {
    for (const [E, k] of S) k === "created" && w.has("paste") && C.size <= 3 ? h(E) : E === s && c();
  })(...x), { skipInitialization: !0 }))), [h, i, r, s, c]), P(() => i.registerCommand(co, (y) => {
    const x = r.find(({ type: S }) => S === y);
    return !!x && (e(x), !0);
  }, ye), [i, r, e]);
  const m = ae(async function() {
    if (l != null && s != null) {
      const y = i.getEditorState().read(() => {
        const x = Mt(s);
        return it(x) ? x : null;
      });
      if (it(y)) {
        const x = await Promise.resolve(l.parseUrl(y.__url));
        x != null && i.update(() => {
          z() || y.selectEnd(), l.insertNode(i, x), y.isAttached() && y.remove();
        });
      }
    }
  }, [l, i, s]), g = ht(() => l != null && s != null ? t(l, m, c) : [], [l, m, t, s, c]), v = ae((y, x, S) => {
    i.update(() => {
      y.onSelect(x), S();
    });
  }, [i]);
  return s != null ? p.jsx(Zg, { nodeKey: s, onClose: c, onSelectOption: v, options: g, menuRenderFn: n, commandPriority: a }) : null;
}
const uh = $e(
  "INSERT_FIGMA_COMMAND"
);
function t2() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([Ta]))
      throw new Error("FigmaPlugin: FigmaNode not registered on editor");
    return r.registerCommand(
      uh,
      (e) => {
        const t = Hc(e);
        return Br(t), !0;
      },
      ye
    );
  }, [r]), null;
}
const ch = $e(
  "INSERT_TWEET_COMMAND"
);
function r2() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([Aa]))
      throw new Error("TwitterPlugin: TweetNode not registered on editor");
    return r.registerCommand(
      ch,
      (e) => {
        const t = T0(e);
        return Br(t), !0;
      },
      ye
    );
  }, [r]), null;
}
const dh = $e(
  "INSERT_YOUTUBE_COMMAND"
);
function n2() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([Ma]))
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    return r.registerCommand(
      dh,
      (e) => {
        const t = A0(e);
        return Br(t), !0;
      },
      ye
    );
  }, [r]), null;
}
const a2 = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon youtube" }),
  insertNode: (r, e) => {
    r.dispatchCommand(dh, e.id);
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
}, i2 = {
  // e.g. Tweet or Google Map.
  contentName: "Tweet",
  exampleUrl: "https://twitter.com/jack/status/20",
  // Icon for display.
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon tweet" }),
  // Create the Lexical embed node from the url data.
  insertNode: (r, e) => {
    r.dispatchCommand(ch, e.id);
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
}, s2 = {
  contentName: "Figma Document",
  exampleUrl: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  icon: /* @__PURE__ */ p.jsx("i", { className: "icon figma" }),
  insertNode: (r, e) => {
    r.dispatchCommand(uh, e.id);
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
}, ho = [
  i2,
  a2,
  s2
];
function o2({
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
function l2({
  options: r,
  selectedItemIndex: e,
  onOptionClick: t,
  onOptionMouseEnter: n
}) {
  return /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover", children: /* @__PURE__ */ p.jsx("ul", { children: r.map((a, i) => /* @__PURE__ */ p.jsx(
    o2,
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
const u2 = (r, e) => {
  let t;
  return (n) => {
    window.clearTimeout(t), t = window.setTimeout(() => {
      r(n);
    }, e);
  };
};
function c2({
  embedConfig: r,
  onClose: e
}) {
  const [t, n] = U(""), [a] = se(), [i, s] = U(null), o = ht(
    () => u2((u) => {
      const c = Qg.exec(u);
      r != null && u != null && c != null ? Promise.resolve(r.parseUrl(u)).then(
        (h) => {
          s(h);
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
    /* @__PURE__ */ p.jsx(Kn, { children: /* @__PURE__ */ p.jsx(
      or,
      {
        disabled: !i,
        onClick: l,
        "data-test-id": `${r.type}-embed-modal-submit-btn`,
        children: "Embed"
      }
    ) })
  ] });
}
function d2() {
  const [r, e] = Di(), t = (a) => {
    e(`Embed ${a.contentName}`, (i) => /* @__PURE__ */ p.jsx(c2, { embedConfig: a, onClose: i }));
  }, n = (a, i, s) => [
    new wu("Dismiss", {
      onSelect: s
    }),
    new wu(`Embed ${a.contentName}`, {
      onSelect: i
    })
  ];
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    r,
    /* @__PURE__ */ p.jsx(
      e2,
      {
        embedConfigs: ho,
        onOpenEmbedModalForConfig: t,
        getMenuOptions: n,
        menuRenderFn: (a, { selectedIndex: i, options: s, selectOptionAndCleanUp: o, setHighlightedIndex: l }) => a.current ? la.createPortal(
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: "typeahead-popover auto-embed-menu",
              style: {
                marginLeft: a.current.style.width,
                width: 200
              },
              children: /* @__PURE__ */ p.jsx(
                l2,
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
const Vs = {
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
}, h2 = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"]
], m2 = [
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
function f2({
  editor: r,
  blockType: e,
  disabled: t = !1
}) {
  const n = () => {
    r.update(() => {
      const u = z();
      Vr(u, () => xe());
    });
  }, a = (u) => {
    e !== u && r.update(() => {
      const c = z();
      Vr(c, () => Xr(u));
    });
  }, i = () => {
    e !== "bullet" ? r.dispatchCommand(h0, void 0) : n();
  }, s = () => {
    e !== "check" ? r.dispatchCommand(f0, void 0) : n();
  }, o = () => {
    e !== "number" ? r.dispatchCommand(m0, void 0) : n();
  }, l = () => {
    e !== "quote" && r.update(() => {
      const u = z();
      Vr(u, () => _i());
    });
  };
  return /* @__PURE__ */ p.jsxs(
    un,
    {
      disabled: t,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + e,
      buttonLabel: Vs[e],
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
function p2({
  editor: r,
  value: e,
  style: t,
  disabled: n = !1
}) {
  const a = ae(
    (s) => {
      r.update(() => {
        const o = z();
        o !== null && (sa(o) ? o.getNodes()[0].patchStyle({ [t]: s }) : o0(o, {
          [t]: s
        }));
      });
    },
    [r, t]
  ), i = t === "font-family" ? "Formatting options for font family" : "Formatting options for font size";
  return /* @__PURE__ */ p.jsx(
    un,
    {
      disabled: n,
      buttonClassName: "toolbar-item " + t,
      buttonLabel: e,
      buttonIconClassName: t === "font-family" ? "icon block-type font-family" : "",
      buttonAriaLabel: i,
      children: (t === "font-family" ? h2 : m2).map(
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
function Gr() {
  return /* @__PURE__ */ p.jsx("div", { className: "divider" });
}
function g2({
  editor: r,
  value: e,
  isRTL: t,
  disabled: n = !1
}) {
  const a = Xn[e || "left"];
  return /* @__PURE__ */ p.jsxs(
    un,
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
        /* @__PURE__ */ p.jsx(Gr, {}),
        /* @__PURE__ */ p.jsxs(
          Ae,
          {
            onClick: () => {
              r.dispatchCommand(ii, void 0);
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
              r.dispatchCommand(yi, void 0);
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
function v2({ setIsLinkEditMode: r }) {
  const [e] = se(), [t, n] = U("paragraph"), [a, i] = U(e), [s, o] = U("15px"), [l, u] = U("#000"), [c, h] = U("#fff"), [m, g] = U("Arial"), [v, y] = U("left"), [x, S] = U(!1), [w, C] = U(!1), [E, k] = U(!1), [A, R] = U(!1), [I, O] = U(!1), [F, j] = U(!1), [V, X] = U(!1), [J, Y] = U(!1), [he, ie] = U(!1), [W, me] = U(!1), [de, Oe] = U(!1), [le, Ze] = U(() => e.isEditable()), [rt, Pe] = Di(), ct = ae(() => {
    const ee = z();
    if (ee && sa(ee)) {
      const we = ee.getNodes()[0];
      C(we.hasFormat("bold")), k(we.hasFormat("italic")), R(we.hasFormat("underline")), O(we.hasFormat("strikethrough")), j(we.hasFormat("subscript")), X(we.hasFormat("superscript")), Y(we.hasFormat("code")), o(we.getStyleValue("font-size", "15px")), u(we.getStyleValue("color", "#000")), h(we.getStyleValue("background-color", "#fff")), g(we.getStyleValue("font-family", "Arial"));
    } else if ($(ee)) {
      const we = ee.anchor.getNode();
      let qe = we.getKey() === "root" ? we : fe(we, (jt) => {
        const gn = jt.getParent();
        return gn !== null && zt(gn);
      });
      qe === null && (qe = we.getTopLevelElementOrThrow());
      const wt = qe.getKey(), Qe = a.getElementByKey(wt);
      C(ee.hasFormat("bold")), k(ee.hasFormat("italic")), R(ee.hasFormat("underline")), O(ee.hasFormat("strikethrough")), j(ee.hasFormat("subscript")), X(ee.hasFormat("superscript")), Y(ee.hasFormat("code")), ie(sc(ee));
      const dt = On(ee), Be = dt.getParent();
      if (it(Be) || it(dt) ? S(!0) : S(!1), Qe !== null)
        if (ke(qe)) {
          const jt = uc(
            we,
            Ca
          ), gn = jt ? jt.getListType() : qe.getListType();
          n(gn);
        } else {
          const jt = sl(qe) ? qe.getTag() : qe.getType();
          jt in Vs && n(jt);
        }
      o(
        La(ee, "font-size", "15px")
      ), u(
        La(ee, "color", "#000")
      ), h(
        La(
          ee,
          "background-color",
          "#fff"
        )
      ), g(
        La(ee, "font-family", "Arial")
      );
      let Ft;
      it(Be) && (Ft = fe(
        dt,
        (jt) => ge(jt) && !jt.isInline()
      )), y(
        ge(Ft) ? Ft.getFormatType() : ge(dt) ? dt.getFormatType() : (Be == null ? void 0 : Be.getFormatType()) || "left"
      );
    }
  }, [a]);
  P(() => e.registerCommand(
    Jt,
    (ee, we) => (ct(), i(we), !1),
    pt
  ), [e, ct]), P(() => Ie(
    e.registerEditableListener((ee) => {
      Ze(ee);
    }),
    a.registerUpdateListener(({ editorState: ee }) => {
      ee.read(() => {
        ct();
      });
    }),
    a.registerCommand(
      Zn,
      (ee) => (me(ee), !1),
      pt
    ),
    a.registerCommand(
      Jn,
      (ee) => (Oe(ee), !1),
      pt
    )
  ), [ct, a, e]), P(() => a.registerCommand(
    h1,
    (ee) => {
      const we = ee, { code: qe, ctrlKey: wt, metaKey: Qe } = we;
      if (qe === "KeyK" && (wt || Qe)) {
        we.preventDefault();
        let dt;
        return x ? (r(!1), dt = null) : (r(!0), dt = fi("https://")), a.dispatchCommand(ir, dt);
      }
      return !1;
    },
    m1
  ), [a, x, r]);
  const Ve = ae(
    (ee, we) => {
      a.update(
        () => {
          const qe = z();
          qe !== null && (sa(qe) ? qe.getNodes()[0].patchStyle(ee) : o0(qe, ee));
        },
        we ? { tag: "historic" } : {}
      );
    },
    [a]
  ), He = ae(() => {
    a.update(() => {
      const ee = z();
      if (ee && sa(ee))
        ee.getNodes()[0].clearAllFormats();
      else if ($(ee)) {
        const we = ee.anchor, qe = ee.focus, wt = ee.getNodes();
        if (we.key === qe.key && we.offset === qe.offset)
          return;
        wt.forEach((Qe, dt) => {
          if (Se(Qe)) {
            let Be = Qe;
            dt === 0 && we.offset !== 0 && (Be = Be.splitText(we.offset)[1] || Be), dt === wt.length - 1 && (Be = Be.splitText(qe.offset)[0] || Be), Be.__style !== "" && Be.setStyle(""), Be.__format !== 0 && (Be.setFormat(0), wi(Be).setFormat("")), Qe = Be;
          } else sl(Qe) || Am(Qe) ? Qe.replace(xe(), !0) : Os(Qe) && Qe.setFormat("");
        });
      }
    });
  }, [a]), It = ae(
    (ee, we) => {
      Ve({ color: ee }, we);
    },
    [Ve]
  ), xt = ae(
    (ee, we) => {
      Ve({ "background-color": ee }, we);
    },
    [Ve]
  ), Qt = ae(() => {
    x ? (r(!1), e.dispatchCommand(ir, null)) : (r(!0), e.dispatchCommand(ir, fi("https://")));
  }, [e, x, r]);
  return /* @__PURE__ */ p.jsxs("div", { className: "toolbar", children: [
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !W || !le,
        onClick: () => {
          a.dispatchCommand(ec, void 0);
        },
        title: Tr ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Undo",
        children: /* @__PURE__ */ p.jsx("i", { className: "format undo" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !de || !le,
        onClick: () => {
          a.dispatchCommand(Qu, void 0);
        },
        title: Tr ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
        type: "button",
        className: "toolbar-item spaced",
        "aria-label": "Redo",
        children: /* @__PURE__ */ p.jsx("i", { className: "format redo" })
      }
    ),
    /* @__PURE__ */ p.jsx(Gr, {}),
    t in Vs && a === e && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        f2,
        {
          disabled: !le,
          blockType: t,
          editor: e
        }
      ),
      /* @__PURE__ */ p.jsx(Gr, {})
    ] }),
    /* @__PURE__ */ p.jsx(
      p2,
      {
        disabled: !le,
        editor: e,
        value: m,
        style: "font-family"
      }
    ),
    /* @__PURE__ */ p.jsx(Gr, {}),
    /* @__PURE__ */ p.jsx(sg, { selectionFontSize: s.slice(0, -2), editor: e, disabled: !le }),
    /* @__PURE__ */ p.jsx(Gr, {}),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le,
        onClick: () => {
          a.dispatchCommand(bt, "bold");
        },
        className: "toolbar-item spaced " + (w ? "active" : ""),
        title: Tr ? "Bold (⌘B)" : "Bold (Ctrl+B)",
        type: "button",
        "aria-label": `Format text as bold. Shortcut: ${Tr ? "⌘B" : "Ctrl+B"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format bold" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le,
        onClick: () => {
          a.dispatchCommand(bt, "italic");
        },
        className: "toolbar-item spaced " + (E ? "active" : ""),
        title: Tr ? "Italic (⌘I)" : "Italic (Ctrl+I)",
        type: "button",
        "aria-label": `Format text as italics. Shortcut: ${Tr ? "⌘I" : "Ctrl+I"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format italic" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le,
        onClick: () => {
          a.dispatchCommand(bt, "underline");
        },
        className: "toolbar-item spaced " + (A ? "active" : ""),
        title: Tr ? "Underline (⌘U)" : "Underline (Ctrl+U)",
        type: "button",
        "aria-label": `Format text to underlined. Shortcut: ${Tr ? "⌘U" : "Ctrl+U"}`,
        children: /* @__PURE__ */ p.jsx("i", { className: "format underline" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le,
        onClick: () => {
          a.dispatchCommand(bt, "code");
        },
        className: "toolbar-item spaced " + (J ? "active" : ""),
        title: "Insert code block",
        type: "button",
        "aria-label": "Insert code block",
        children: /* @__PURE__ */ p.jsx("i", { className: "format code" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      "button",
      {
        disabled: !le,
        onClick: Qt,
        className: "toolbar-item spaced " + (x ? "active" : ""),
        "aria-label": "Insert link",
        title: "Insert link",
        type: "button",
        children: /* @__PURE__ */ p.jsx("i", { className: "format link" })
      }
    ),
    /* @__PURE__ */ p.jsx(
      pu,
      {
        disabled: !le,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting text color",
        buttonIconClassName: "icon font-color",
        color: l,
        onChange: It,
        title: "text color"
      }
    ),
    /* @__PURE__ */ p.jsx(
      pu,
      {
        disabled: !le,
        buttonClassName: "toolbar-item color-picker",
        buttonAriaLabel: "Formatting background color",
        buttonIconClassName: "icon bg-color",
        color: c,
        onChange: xt,
        title: "bg color"
      }
    ),
    /* @__PURE__ */ p.jsxs(
      un,
      {
        disabled: !le,
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
              className: "item " + qt(I),
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
              className: "item " + qt(V),
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
              onClick: He,
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
    /* @__PURE__ */ p.jsx(Gr, {}),
    /* @__PURE__ */ p.jsxs(
      un,
      {
        disabled: !le,
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
                  b0,
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
                a.dispatchCommand(ao, void 0);
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
                Pe("Insert Image", (ee) => /* @__PURE__ */ p.jsx(
                  Jd,
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
            Ae,
            {
              onClick: () => {
                Pe("Insert Inline Image", (ee) => /* @__PURE__ */ p.jsx(
                  Ag,
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
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  lo,
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
                Pe("Insert Table", (ee) => /* @__PURE__ */ p.jsx(
                  rh,
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
            Ae,
            {
              onClick: () => {
                Pe("Insert Poll", (ee) => /* @__PURE__ */ p.jsx(
                  ah,
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
            Ae,
            {
              onClick: () => {
                Pe("Insert Columns Layout", (ee) => /* @__PURE__ */ p.jsx(
                  sh,
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
            Ae,
            {
              onClick: () => {
                Pe("Insert Equation", (ee) => /* @__PURE__ */ p.jsx(
                  lh,
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
            Ae,
            {
              onClick: () => {
                e.update(() => {
                  const ee = Dt(), we = g4(0, 0);
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
            Ae,
            {
              onClick: () => {
                e.dispatchCommand(uo, void 0);
              },
              className: "item",
              children: [
                /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
                /* @__PURE__ */ p.jsx("span", { className: "text", children: "Collapsible container" })
              ]
            }
          ),
          ho.map((ee) => /* @__PURE__ */ p.jsxs(
            Ae,
            {
              onClick: () => {
                a.dispatchCommand(
                  co,
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
    /* @__PURE__ */ p.jsx(Gr, {}),
    /* @__PURE__ */ p.jsx(
      g2,
      {
        disabled: !le,
        value: v,
        editor: e,
        isRTL: he
      }
    ),
    rt
  ] });
}
function b2() {
  const [r] = se();
  return P(() => {
    if (!r.hasNodes([Ca, Sa])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [r]), function(e) {
    P(() => am(e), [e]);
  }(r), null;
}
function y2() {
  const [r] = se();
  return P(() => Ie(r.registerCommand(f0, () => (Cs(r, "check"), !0), ve), r.registerCommand(hn, (e) => Cu(e, r, !1), ve), r.registerCommand(mn, (e) => Cu(e, r, !0), ve), r.registerCommand(Dn, (e) => {
    if (Xs() != null) {
      const t = r.getRootElement();
      return t != null && t.focus(), !0;
    }
    return !1;
  }, ve), r.registerCommand(f1, (e) => {
    const t = Xs();
    return !(t == null || !r.isEditable()) && (r.update(() => {
      const n = ot(t);
      Fe(n) && (e.preventDefault(), n.toggleChecked());
    }), !0);
  }, ve), r.registerCommand(xa, (e) => r.getEditorState().read(() => {
    const t = z();
    if ($(t) && t.isCollapsed()) {
      const { anchor: n } = t, a = n.type === "element";
      if (a || n.offset === 0) {
        const i = n.getNode(), s = fe(i, (o) => ge(o) && !o.isInline());
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
  }), ve), r.registerRootListener((e, t) => {
    e !== null && (e.addEventListener("click", _u), e.addEventListener("pointerdown", Su)), t !== null && (t.removeEventListener("click", _u), t.removeEventListener("pointerdown", Su));
  }))), null;
}
function hh(r, e) {
  const t = r.target;
  if (t === null || !wr(t)) return;
  const n = t.firstChild;
  if (n != null && wr(n) && (n.tagName === "UL" || n.tagName === "OL")) return;
  const a = t.parentNode;
  if (!a || a.__lexicalListType !== "check") return;
  const i = t.getBoundingClientRect(), s = r.pageX / P1(t);
  (t.dir === "rtl" ? s < i.right && s > i.right - 20 : s > i.left && s < i.left + 20) && e();
}
function _u(r) {
  hh(r, () => {
    if (r.target instanceof HTMLElement) {
      const e = r.target, t = p1(e);
      t != null && t.isEditable() && t.update(() => {
        const n = ot(e);
        Fe(n) && (e.focus(), n.toggleChecked());
      });
    }
  });
}
function Su(r) {
  hh(r, () => {
    r.preventDefault();
  });
}
function Xs() {
  const r = document.activeElement;
  return r != null && r.tagName === "LI" && r.parentNode != null && r.parentNode.__lexicalListType === "check" ? r : null;
}
function Cu(r, e, t) {
  const n = Xs();
  return n != null && e.update(() => {
    const a = ot(n);
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
function x2(r) {
  const e = r.getNodes();
  return e.length === 0 ? /* @__PURE__ */ new Set([
    r.anchor.getNode().getParentOrThrow(),
    r.focus.getNode().getParentOrThrow()
  ]) : new Set(
    e.map((t) => ge(t) ? t : t.getParentOrThrow())
  );
}
function w2(r) {
  const e = z();
  if (!$(e))
    return !1;
  const t = x2(e);
  let n = 0;
  for (const a of t)
    if (ke(a))
      n = Math.max(_s(a) + 1, n);
    else if (Fe(a)) {
      const i = a.getParent();
      if (!ke(i))
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      n = Math.max(_s(i) + 1, n);
    }
  return n <= r;
}
function _2({ maxDepth: r }) {
  const [e] = se();
  return P(() => e.registerCommand(
    yi,
    () => !w2(r ?? 7),
    pt
  ), [e, r]), null;
}
const S2 = 1, C2 = 100;
let mh = 0, ku = !1;
function k2() {
  window.addEventListener(
    "keydown",
    (r) => {
      r.key === "Tab" && (mh = r.timeStamp);
    },
    !0
  );
}
function E2() {
  const [r] = se();
  return P(() => (ku || (k2(), ku = !0), r.registerCommand(
    Zu,
    (e) => {
      const t = z();
      return $(t) && mh + C2 > e.timeStamp && Ct(t.clone()), !1;
    },
    S2
  )), [r]), null;
}
const N2 = 10, T2 = 5;
function Eu(r, e, t, n = N2, a = T2) {
  const i = t.parentElement;
  if (r === null || !i) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const s = e.getBoundingClientRect(), o = t.getBoundingClientRect(), l = i.getBoundingClientRect();
  let u = r.top - n, c = r.left - a;
  u < l.top && (u += s.height + r.height + n * 2), c + s.width > l.right && (c = l.right - s.width - a), u -= o.top, c -= o.left, e.style.opacity = "1", e.style.transform = `translate(${c}px, ${u}px)`;
}
function A2({
  editor: r,
  isLink: e,
  setIsLink: t,
  anchorElem: n,
  isLinkEditMode: a,
  setIsLinkEditMode: i
}) {
  const s = Re(null), o = Re(null), [l, u] = U(""), [c, h] = U("https://"), [m, g] = U(
    null
  ), v = ae(() => {
    var A, R;
    const S = z();
    if ($(S)) {
      const I = On(S), O = fe(I, it);
      O ? u(O.getURL()) : it(I) ? u(I.getURL()) : u(""), a && h(l);
    }
    const w = s.current, C = window.getSelection(), E = document.activeElement;
    if (w === null)
      return;
    const k = r.getRootElement();
    if (S !== null && C !== null && k !== null && k.contains(C.anchorNode) && r.isEditable()) {
      const I = (R = (A = C.focusNode) == null ? void 0 : A.parentElement) == null ? void 0 : R.getBoundingClientRect();
      I && (I.y += 40, Eu(I, w, n)), g(S);
    } else (!E || E.className !== "link-input") && (k !== null && Eu(null, w, n), g(null), i(!1), u(""));
    return !0;
  }, [n, r, i, a, l]);
  P(() => {
    const S = n.parentElement, w = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", w), S && S.addEventListener("scroll", w), () => {
      window.removeEventListener("resize", w), S && S.removeEventListener("scroll", w);
    };
  }, [n.parentElement, r, v]), P(() => Ie(
    r.registerUpdateListener(({ editorState: S }) => {
      S.read(() => {
        v();
      });
    }),
    r.registerCommand(
      Jt,
      () => (v(), !0),
      ve
    ),
    r.registerCommand(
      Dn,
      () => e ? (t(!1), !0) : !1,
      At
    )
  ), [r, v, t, e]), P(() => {
    r.getEditorState().read(() => {
      v();
    });
  }, [r, v]), P(() => {
    a && o.current && o.current.focus();
  }, [a, e]);
  const y = (S) => {
    S.key === "Enter" ? (S.preventDefault(), x()) : S.key === "Escape" && (S.preventDefault(), i(!1));
  }, x = () => {
    m !== null && (l !== "" && (r.dispatchCommand(ir, fi(c)), r.update(() => {
      const S = z();
      if ($(S)) {
        const w = On(S).getParent();
        if (gr(w)) {
          const C = ua(w.getURL(), {
            rel: w.__rel,
            target: w.__target,
            title: w.__title
          });
          w.replace(C, !0);
        }
      }
    })), h("https://"), i(!1));
  };
  return /* @__PURE__ */ p.jsx("div", { ref: s, className: "link-editor", children: e ? a ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "input",
      {
        ref: o,
        className: "link-input",
        value: c,
        onChange: (S) => {
          h(S.target.value);
        },
        onKeyDown: (S) => {
          y(S);
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
        href: fi(l),
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
          h(l), i(!0);
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
function M2(r, e, t, n) {
  const [a, i] = U(r), [s, o] = U(!1);
  return P(() => {
    function l() {
      const u = z();
      if ($(u)) {
        const c = On(u), h = fe(c, it), m = fe(
          c,
          gr
        );
        if (!(h || m)) {
          o(!1);
          return;
        }
        const g = u.getNodes().find((v) => {
          const y = fe(v, it), x = fe(v, gr);
          if (!(y != null && y.is(h)) && !(x != null && x.is(m)) && !y && !x && !pa(v))
            return v;
        });
        o(!g);
      }
    }
    return Ie(
      r.registerUpdateListener(({ editorState: u }) => {
        u.read(() => {
          l();
        });
      }),
      r.registerCommand(
        Jt,
        (u, c) => (l(), i(c), !1),
        pt
      ),
      r.registerCommand(
        ba,
        (u) => {
          const c = z();
          if ($(c)) {
            const h = On(c), m = fe(h, it);
            if (it(m) && (u.metaKey || u.ctrlKey))
              return window.open(m.getURL(), "_blank"), !0;
          }
          return !1;
        },
        ve
      )
    );
  }, [r]), ur(
    /* @__PURE__ */ p.jsx(
      A2,
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
function O2({
  anchorElem: r = document.body,
  isLinkEditMode: e,
  setIsLinkEditMode: t
}) {
  const [n] = se();
  return M2(
    n,
    r,
    e,
    t
  );
}
function D2(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var R2 = D2(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function Nu(r, e = (t) => t) {
  return (t) => {
    const n = r.exec(t);
    return n === null ? null : { index: n.index, length: n[0].length, text: n[0], url: e(n[0]) };
  };
}
function fh(r, e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t](r);
    if (n) return n;
  }
  return null;
}
const I2 = /[.,;\s]/;
function pi(r) {
  return I2.test(r);
}
function ph(r) {
  return pi(r[r.length - 1]);
}
function Js(r) {
  return pi(r[0]);
}
function gh(r) {
  let e = r.getPreviousSibling();
  return ge(e) && (e = e.getLastDescendant()), e === null || pa(e) || Se(e) && ph(e.getTextContent());
}
function vh(r) {
  let e = r.getNextSibling();
  return ge(e) && (e = e.getFirstDescendant()), e === null || pa(e) || Se(e) && Js(e.getTextContent());
}
function F2(r, e, t, n) {
  return (r > 0 ? pi(t[r - 1]) : gh(n[0])) ? e < t.length ? pi(t[e]) : vh(n[n.length - 1]) : !1;
}
function L2(r, e, t) {
  const n = [], a = [], i = [];
  let s = 0, o = 0;
  const l = [...r];
  for (; l.length > 0; ) {
    const u = l[0], c = u.getTextContent().length, h = o;
    o + c <= e ? (n.push(u), s += c) : h >= t ? i.push(u) : a.push(u), o += c, l.shift();
  }
  return [s, n, a, i];
}
function z2(r, e, t, n) {
  const a = ws(n.url, n.attributes);
  if (r.length === 1) {
    let i, s = r[0];
    e === 0 ? [i, s] = s.splitText(t) : [, i, s] = s.splitText(e, t);
    const o = Dr(n.text);
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
        const [S, w] = v.splitText(t - x);
        l.push(S), u = w;
      }
      o += y;
    }
    const c = z(), h = c ? c.getNodes().find(Se) : void 0, m = Dr(s.getTextContent());
    return m.setFormat(s.getFormat()), m.setDetail(s.getDetail()), m.setStyle(s.getStyle()), a.append(m, ...l), h && h === s && ($(c) ? m.select(c.anchor.offset, c.focus.offset) : gt(c) && m.select(0, m.getTextContent().length)), s.replace(a), u;
  }
}
function hs(r, e, t) {
  const n = r.getChildren(), a = n.length;
  for (let l = 0; l < a; l++) {
    const u = n[l];
    if (!Se(u) || !u.isSimpleText()) return ti(r), void t(null, r.getURL());
  }
  const i = r.getTextContent(), s = fh(i, e);
  if (s === null || s.text !== i || !gh(r) || !vh(r)) return ti(r), void t(null, r.getURL());
  const o = r.getURL();
  if (o !== s.url && (r.setURL(s.url), t(s.url, o)), s.attributes) {
    const l = r.getRel();
    l !== s.attributes.rel && (r.setRel(s.attributes.rel || null), t(s.attributes.rel || null, l));
    const u = r.getTarget();
    u !== s.attributes.target && (r.setTarget(s.attributes.target || null), t(s.attributes.target || null, u));
  }
}
function ti(r) {
  const e = r.getChildren();
  for (let t = e.length - 1; t >= 0; t--) r.insertAfter(e[t]);
  return r.remove(), e.map((t) => t.getLatest());
}
function P2(r, e, t) {
  P(() => {
    r.hasNodes([_a]) || R2(77);
    const n = (a, i) => {
      t && t(a, i);
    };
    return Ie(r.registerNodeTransform(cn, (a) => {
      const i = a.getParentOrThrow(), s = a.getPreviousSibling();
      if (gr(i) && !i.getIsUnlinked()) hs(i, e, n);
      else if (!it(i)) {
        if (a.isSimpleText() && (Js(a.getTextContent()) || !gr(s))) {
          const o = function(l) {
            const u = [l];
            let c = l.getNextSibling();
            for (; c !== null && Se(c) && c.isSimpleText() && (u.push(c), !/[\s]/.test(c.getTextContent())); ) c = c.getNextSibling();
            return u;
          }(a);
          (function(l, u, c) {
            let h = [...l];
            const m = h.map((x) => x.getTextContent()).join("");
            let g, v = m, y = 0;
            for (; (g = fh(v, u)) && g !== null; ) {
              const x = g.index, S = x + g.length;
              if (F2(y + x, y + S, m, h)) {
                const [w, , C, E] = L2(h, y + x, y + S), k = z2(C, y + x - w, y + S - w, g);
                h = k ? [k, ...E] : E, c(g.url, null), y = 0;
              } else y += S;
              v = v.substring(S);
            }
          })(o, e, n);
        }
        (function(o, l, u) {
          const c = o.getPreviousSibling(), h = o.getNextSibling(), m = o.getTextContent();
          var g;
          !gr(c) || c.getIsUnlinked() || Js(m) && (g = m, !(c.isEmailURI() ? /^\.[a-zA-Z]{2,}/.test(g) : /^\.[a-zA-Z0-9]{1,}/.test(g))) || (c.append(o), hs(c, l, u), u(null, c.getURL())), !gr(h) || h.getIsUnlinked() || ph(m) || (ti(h), hs(h, l, u), u(null, h.getURL()));
        })(a, e, n);
      }
    }), r.registerCommand(ir, (a) => {
      const i = z();
      return a !== null || !$(i) || i.extract().forEach((s) => {
        const o = s.getParent();
        if (gr(o)) return o.setIsUnlinked(!o.getIsUnlinked()), o.markDirty(), !0;
      }), !1;
    }, ve));
  }, [r, e, t]);
}
function B2({ matchers: r, onChange: e }) {
  const [t] = se();
  return P2(t, r, e), null;
}
const j2 = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, $2 = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, q2 = [
  Nu(j2, (r) => r.startsWith("http") ? r : `https://${r}`),
  Nu($2, (r) => `mailto:${r}`)
];
function H2() {
  return /* @__PURE__ */ p.jsx(B2, { matchers: q2 });
}
function U2({ validateUrl: r }) {
  const [e] = se();
  return P(() => {
    if (!e.hasNodes([In])) throw new Error("LinkPlugin: LinkNode not registered on editor");
    return Ie(e.registerCommand(ir, (t) => {
      if (t === null) return qi(t), !0;
      if (typeof t == "string") return !(r !== void 0 && !r(t)) && (qi(t), !0);
      {
        const { url: n, target: a, rel: i, title: s } = t;
        return qi(n, { rel: i, target: a, title: s }), !0;
      }
    }, ve), r !== void 0 ? e.registerCommand(Gu, (t) => {
      const n = z();
      if (!$(n) || n.isCollapsed() || !vr(t, ClipboardEvent)) return !1;
      const a = t;
      if (a.clipboardData === null) return !1;
      const i = a.clipboardData.getData("text");
      return !!r(i) && !n.getNodes().some((s) => ge(s)) && (e.dispatchCommand(ir, i), t.preventDefault(), !0);
    }, ve) : () => {
    });
  }, [e, r]), null;
}
function K2() {
  return /* @__PURE__ */ p.jsx(U2, { validateUrl: ug });
}
function W2(r, e, t) {
  const [n] = se();
  P(() => Ie(...I4(n, r, e, t)), [t, n, r, e]);
}
const G2 = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
function Y2() {
  const [r] = se();
  P(() => {
    if (!r.hasNodes([Nn]))
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
  }, [r]);
  const e = ae((n) => qc(n.getTextContent()), []), t = ae((n) => {
    const a = G2.exec(n);
    if (a === null)
      return null;
    const i = a[2].length, s = a.index + a[1].length;
    return {
      end: s + i,
      start: s
    };
  }, []);
  return W2(
    t,
    Nn,
    e
  ), null;
}
const Tu = /* @__PURE__ */ new Map([
  [":)", ["emoji happysmile", "🙂"]],
  [":D", ["emoji veryhappysmile", "😀"]],
  [":(", ["emoji unhappysmile", "🙁"]],
  ["<3", ["emoji heart", "❤"]],
  ["🙂", ["emoji happysmile", "🙂"]],
  ["😀", ["emoji veryhappysmile", "😀"]],
  ["🙁", ["emoji unhappysmile", "🙁"]],
  ["❤", ["emoji heart", "❤"]]
]);
function V2(r) {
  const e = r.getTextContent();
  for (let t = 0; t < e.length; t++) {
    const n = Tu.get(e[t]) || Tu.get(e.slice(t, t + 2));
    if (n !== void 0) {
      const [a, i] = n;
      let s;
      t === 0 ? [s] = r.splitText(t + 2) : [, s] = r.splitText(t, t + 2);
      const o = $c(a, i);
      return s.replace(o), o;
    }
  }
  return null;
}
function X2(r) {
  let e = r;
  for (; e !== null; ) {
    if (!e.isSimpleText())
      return;
    e = V2(e);
  }
}
function J2(r) {
  P(() => {
    if (!r.hasNodes([Na]))
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    return r.registerNodeTransform(cn, X2);
  }, [r]);
}
function Z2() {
  const [r] = se();
  return J2(r), null;
}
const Au = "startTransition", Q2 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
class mo {
  constructor(e) {
    this.key = e, this.ref = { current: null }, this.setRefElement = this.setRefElement.bind(this);
  }
  setRefElement(e) {
    this.ref = { current: e };
  }
}
const Mu = (r) => {
  const e = document.getElementById("typeahead-menu");
  if (!e) return;
  const t = e.getBoundingClientRect();
  t.top + t.height > window.innerHeight && e.scrollIntoView({ block: "center" }), t.top < 0 && e.scrollIntoView({ block: "center" }), r.scrollIntoView({ block: "nearest" });
};
function Ou(r, e) {
  const t = r.getBoundingClientRect(), n = e.getBoundingClientRect();
  return t.top > n.top && t.top < n.bottom;
}
function e5(r, e, t, n) {
  const [a] = se();
  P(() => {
    if (e != null && r != null) {
      const i = a.getRootElement(), s = i != null ? function(h, m) {
        let g = getComputedStyle(h);
        const v = g.position === "absolute", y = /(auto|scroll)/;
        if (g.position === "fixed") return document.body;
        for (let x = h; x = x.parentElement; ) if (g = getComputedStyle(x), (!v || g.position !== "static") && y.test(g.overflow + g.overflowY + g.overflowX)) return x;
        return document.body;
      }(i) : document.body;
      let o = !1, l = Ou(e, s);
      const u = function() {
        o || (window.requestAnimationFrame(function() {
          t(), o = !1;
        }), o = !0);
        const h = Ou(e, s);
        h !== l && (l = h, n != null && n(h));
      }, c = new ResizeObserver(t);
      return window.addEventListener("resize", t), document.addEventListener("scroll", u, { capture: !0, passive: !0 }), c.observe(e), () => {
        c.unobserve(e), window.removeEventListener("resize", t), document.removeEventListener("scroll", u, !0);
      };
    }
  }, [e, a, n, t, r]);
}
const Du = $e("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function t5({ close: r, editor: e, anchorElementRef: t, resolution: n, options: a, menuRenderFn: i, onSelectOption: s, shouldSplitNodeWithQuery: o = !1, commandPriority: l = ve }) {
  const [u, c] = U(null), h = n.match && n.match.matchingString;
  P(() => {
    c(0);
  }, [h]);
  const m = ae((v) => {
    e.update(() => {
      const y = n.match != null && o ? function(x) {
        const S = z();
        if (!$(S) || !S.isCollapsed()) return null;
        const w = S.anchor;
        if (w.type !== "text") return null;
        const C = w.getNode();
        if (!C.isSimpleText()) return null;
        const E = w.offset, k = C.getTextContent().slice(0, E), A = x.replaceableString.length, R = E - function(O, F, j) {
          let V = j;
          for (let X = V; X <= F.length; X++) O.substr(-X) === F.substr(0, X) && (V = X);
          return V;
        }(k, x.matchingString, A);
        if (R < 0) return null;
        let I;
        return R === 0 ? [I] = C.splitText(E) : [, I] = C.splitText(R, E), I;
      }(n.match) : null;
      s(v, y, r, n.match ? n.match.matchingString : "");
    });
  }, [e, o, n.match, s, r]), g = ae((v) => {
    const y = e.getRootElement();
    y !== null && (y.setAttribute("aria-activedescendant", "typeahead-item-" + v), c(v));
  }, [e]);
  return P(() => () => {
    const v = e.getRootElement();
    v !== null && v.removeAttribute("aria-activedescendant");
  }, [e]), Q2(() => {
    a === null ? c(null) : u === null && g(0);
  }, [a, u, g]), P(() => Ie(e.registerCommand(Du, ({ option: v }) => !(!v.ref || v.ref.current == null) && (Mu(v.ref.current), !0), l)), [e, g, l]), P(() => Ie(e.registerCommand(hn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== a.length - 1 ? u + 1 : 0;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && e.dispatchCommand(Du, { index: x, option: S }), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(mn, (v) => {
    const y = v;
    if (a !== null && a.length && u !== null) {
      const x = u !== 0 ? u - 1 : a.length - 1;
      g(x);
      const S = a[x];
      S.ref != null && S.ref.current && Mu(S.ref.current), y.preventDefault(), y.stopImmediatePropagation();
    }
    return !0;
  }, l), e.registerCommand(Dn, (v) => {
    const y = v;
    return y.preventDefault(), y.stopImmediatePropagation(), r(), !0;
  }, l), e.registerCommand(xi, (v) => {
    const y = v;
    return a !== null && u !== null && a[u] != null && (y.preventDefault(), y.stopImmediatePropagation(), m(a[u]), !0);
  }, l), e.registerCommand(i0, (v) => a !== null && u !== null && a[u] != null && (v !== null && (v.preventDefault(), v.stopImmediatePropagation()), m(a[u]), !0), l)), [m, r, e, a, u, g, l]), i(t, ht(() => ({ options: a, selectOptionAndCleanUp: m, selectedIndex: u, setHighlightedIndex: c }), [m, u, a]), n.match ? n.match.matchingString : "");
}
const r5 = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
$e("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");
function fo(r, { minLength: e = 1, maxLength: t = 75 }) {
  return ae((n) => {
    const a = new RegExp("(^|\\s|\\()([" + r + "]((?:" + ("[^" + r + r5 + "\\s]") + "){0," + t + "}))$").exec(n);
    if (a !== null) {
      const i = a[1], s = a[3];
      if (s.length >= e) return { leadOffset: a.index + i.length, matchingString: s, replaceableString: a[2] };
    }
    return null;
  }, [t, e, r]);
}
function po({ options: r, onQueryChange: e, onSelectOption: t, onOpen: n, onClose: a, menuRenderFn: i, triggerFn: s, anchorClassName: o, commandPriority: l = ve, parent: u }) {
  const [c] = se(), [h, m] = U(null), g = function(x, S, w, C = document.body, E = !0) {
    const [k] = se(), A = Re(document.createElement("div")), R = ae(() => {
      A.current.style.top = A.current.style.bottom;
      const O = k.getRootElement(), F = A.current, j = F.firstChild;
      if (O !== null && x !== null) {
        const { left: V, top: X, width: J, height: Y } = x.getRect(), he = A.current.offsetHeight;
        if (F.style.top = `${X + he + 3 + (E ? window.pageYOffset : 0)}px`, F.style.left = `${V + window.pageXOffset}px`, F.style.height = `${Y}px`, F.style.width = `${J}px`, j !== null) {
          j.style.top = `${X}`;
          const ie = j.getBoundingClientRect(), W = ie.height, me = ie.width, de = O.getBoundingClientRect();
          V + me > de.right && (F.style.left = `${de.right - me + window.pageXOffset}px`), (X + W > window.innerHeight || X + W > de.bottom) && X - de.top > W + Y && (F.style.top = `${X - W - Y + (E ? window.pageYOffset : 0)}px`);
        }
        F.isConnected || (w != null && (F.className = w), F.setAttribute("aria-label", "Typeahead menu"), F.setAttribute("id", "typeahead-menu"), F.setAttribute("role", "listbox"), F.style.display = "block", F.style.position = "absolute", C.append(F)), A.current = F, O.setAttribute("aria-controls", "typeahead-menu");
      }
    }, [k, x, E, w, C]);
    P(() => {
      const O = k.getRootElement();
      if (x !== null) return R(), () => {
        O !== null && O.removeAttribute("aria-controls");
        const F = A.current;
        F !== null && F.isConnected && F.remove();
      };
    }, [k, R, x]);
    const I = ae((O) => {
      x !== null && (O || S(null));
    }, [x, S]);
    return e5(x, A.current, R, I), A;
  }(h, m, o, u), v = ae(() => {
    m(null), a != null && h !== null && a();
  }, [a, h]), y = ae((x) => {
    m(x), n != null && h === null && n(x);
  }, [n, h]);
  return P(() => {
    const x = c.registerUpdateListener(() => {
      c.getEditorState().read(() => {
        const S = c._window || window, w = S.document.createRange(), C = z(), E = function(R) {
          let I = null;
          return R.getEditorState().read(() => {
            const O = z();
            $(O) && (I = function(F) {
              const j = F.anchor;
              if (j.type !== "text") return null;
              const V = j.getNode();
              if (!V.isSimpleText()) return null;
              const X = j.offset;
              return V.getTextContent().slice(0, X);
            }(O));
          }), I;
        }(c);
        if (!$(C) || !C.isCollapsed() || E === null || w === null) return void v();
        const k = s(E, c);
        if (e(k ? k.matchingString : null), k !== null && !function(R, I) {
          return I === 0 && R.getEditorState().read(() => {
            const O = z();
            if ($(O)) {
              const F = O.anchor.getNode().getPreviousSibling();
              return Se(F) && F.isTextEntity();
            }
            return !1;
          });
        }(c, k.leadOffset) && function(I, O, F) {
          const j = F.getSelection();
          if (j === null || !j.isCollapsed) return !1;
          const V = j.anchorNode, X = I, J = j.anchorOffset;
          if (V == null || J == null) return !1;
          try {
            O.setStart(V, X), O.setEnd(V, J);
          } catch {
            return !1;
          }
          return !0;
        }(k.leadOffset, w, S) !== null)
          return A = () => y({ getRect: () => w.getBoundingClientRect(), match: k }), void (Au in Qr ? Qr[Au](A) : A());
        var A;
        v();
      });
    });
    return () => {
      x();
    };
  }, [c, s, e, h, v, y]), h === null || c === null ? null : p.jsx(t5, { close: v, resolution: h, editor: c, anchorElementRef: g, options: r, menuRenderFn: i, shouldSplitNodeWithQuery: !0, onSelectOption: t, commandPriority: l });
}
class at extends mo {
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
function n5({
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
function a5(r, e) {
  const t = [];
  if (e == null)
    return t;
  const n = e.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
  if (n !== null) {
    const a = n[1], i = n[2] ? [n[2]] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    t.push(
      ...i.map(
        (s) => new at(`${a}x${s} Table`, {
          icon: /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
          keywords: ["table"],
          onSelect: () => r.dispatchCommand(w0, { columns: s, rows: a })
        })
      )
    );
  }
  return t;
}
function i5(r, e) {
  return [
    new at("Paragraph", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => r.update(() => {
        const t = z();
        $(t) && Vr(t, () => xe());
      })
    }),
    ...[1, 2, 3].map(
      (t) => new at(`Heading ${t}`, {
        icon: /* @__PURE__ */ p.jsx("i", { className: `icon h${t}` }),
        keywords: ["heading", "header", `h${t}`],
        onSelect: () => r.update(() => {
          const n = z();
          $(n) && Vr(n, () => Xr(`h${t}`));
        })
      })
    ),
    new at("Table", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => e("Insert Table", (t) => /* @__PURE__ */ p.jsx(rh, { activeEditor: r, onClose: t }))
    }),
    new at("Numbered List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => r.dispatchCommand(m0, void 0)
    }),
    new at("Bulleted List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => r.dispatchCommand(h0, void 0)
    }),
    new at("Check List", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => r.dispatchCommand(f0, void 0)
    }),
    new at("Quote", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => r.update(() => {
        const t = z();
        $(t) && Vr(t, () => _i());
      })
    }),
    new at("Code", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => r.update(() => {
        const t = z();
        if ($(t))
          if (t.isCollapsed())
            Vr(t, () => en());
          else {
            const n = t.getTextContent(), a = en();
            t.insertNodes([a]), t.insertRawText(n);
          }
      })
    }),
    new at("Divider", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => r.dispatchCommand(b0, void 0)
    }),
    new at("Page Break", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon page-break" }),
      keywords: ["page break", "divider"],
      onSelect: () => r.dispatchCommand(ao, void 0)
    }),
    new at("Excalidraw", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon diagram-2" }),
      keywords: ["excalidraw", "diagram", "drawing"],
      onSelect: () => r.dispatchCommand(lo, void 0)
    }),
    new at("Poll", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon poll" }),
      keywords: ["poll", "vote"],
      onSelect: () => e("Insert Poll", (t) => /* @__PURE__ */ p.jsx(ah, { activeEditor: r, onClose: t }))
    }),
    ...ho.map(
      (t) => new at(`Embed ${t.contentName}`, {
        icon: t.icon,
        keywords: [...t.keywords, "embed"],
        onSelect: () => r.dispatchCommand(co, t.type)
      })
    ),
    new at("Equation", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon equation" }),
      keywords: ["equation", "latex", "math"],
      onSelect: () => e("Insert Equation", (t) => /* @__PURE__ */ p.jsx(lh, { activeEditor: r, onClose: t }))
    }),
    new at("GIF", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon gif" }),
      keywords: ["gif", "animate", "image", "file"],
      onSelect: () => r.dispatchCommand(Ia, {
        altText: "Cat typing on a laptop",
        src: "https://media.giphy.com/media/3o7TKz5R0Lkzg7g9gI/giphy.gif"
      })
    }),
    new at("Image", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon image" }),
      keywords: ["image", "photo", "picture", "file"],
      onSelect: () => e("Insert Image", (t) => /* @__PURE__ */ p.jsx(Jd, { activeEditor: r, onClose: t }))
    }),
    new at("Collapsible", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon caret-right" }),
      keywords: ["collapse", "collapsible", "toggle"],
      onSelect: () => r.dispatchCommand(uo, void 0)
    }),
    new at("Columns Layout", {
      icon: /* @__PURE__ */ p.jsx("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => e("Insert Columns Layout", (t) => /* @__PURE__ */ p.jsx(sh, { activeEditor: r, onClose: t }))
    }),
    ...["left", "center", "right", "justify"].map(
      (t) => new at(`Align ${t}`, {
        icon: /* @__PURE__ */ p.jsx("i", { className: `icon ${t}-align` }),
        keywords: ["align", "justify", t],
        onSelect: () => r.dispatchCommand(er, t)
      })
    )
  ];
}
function s5() {
  const [r] = se(), [e, t] = Di(), [n, a] = U(null), i = fo("/", {
    minLength: 0
  }), s = ht(() => {
    const l = i5(r, t);
    if (!n)
      return l;
    const u = new RegExp(n, "i");
    return [
      ...a5(r, n),
      ...l.filter(
        (c) => u.test(c.title) || c.keywords.some((h) => u.test(h))
      )
    ];
  }, [r, n, t]), o = ae(
    (l, u, c, h) => {
      r.update(() => {
        u == null || u.remove(), l.onSelect(h), c();
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    e,
    /* @__PURE__ */ p.jsx(
      po,
      {
        onQueryChange: a,
        onSelectOption: o,
        triggerFn: i,
        options: s,
        menuRenderFn: (l, { selectedIndex: u, selectOptionAndCleanUp: c, setHighlightedIndex: h }) => l.current && s.length ? la.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover component-picker-menu", children: /* @__PURE__ */ p.jsx("ul", { children: s.map((m, g) => /* @__PURE__ */ p.jsx(
            n5,
            {
              index: g,
              isSelected: u === g,
              onClick: () => {
                h(g), c(m);
              },
              onMouseEnter: () => {
                h(g);
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
function o5(r, e) {
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
const l5 = 10, u5 = 5;
function c5(r, e, t, n = !1, a = l5, i = u5) {
  const s = t.parentElement;
  if (r === null || !s) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const o = e.getBoundingClientRect(), l = t.getBoundingClientRect(), u = s.getBoundingClientRect();
  let c = r.top - o.height - a, h = r.left - i;
  c < u.top && (c += o.height + r.height + a * (n ? 9 : 2)), h + o.width > u.right && (h = u.right - o.width - i), c -= l.top, h -= l.left, e.style.opacity = "1", e.style.transform = `translate(${h}px, ${c}px)`;
}
function d5({
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
  const c = Re(null), h = ae(() => {
    t ? r.dispatchCommand(ir, null) : r.dispatchCommand(ir, "https://");
  }, [r, t]);
  function m(y) {
    if (c != null && c.current && (y.buttons === 1 || y.buttons === 3) && c.current.style.pointerEvents !== "none") {
      const x = y.clientX, S = y.clientY, w = document.elementFromPoint(x, S);
      c.current.contains(w) || (c.current.style.pointerEvents = "none");
    }
  }
  function g(y) {
    c != null && c.current && c.current.style.pointerEvents !== "auto" && (c.current.style.pointerEvents = "auto");
  }
  P(() => {
    if (c != null && c.current)
      return document.addEventListener("mousemove", m), document.addEventListener("mouseup", g), () => {
        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", g);
      };
  }, [c]);
  const v = ae(() => {
    const y = z(), x = c.current, S = window.getSelection();
    if (x === null)
      return;
    const w = r.getRootElement();
    if (y !== null && S !== null && !S.isCollapsed && w !== null && w.contains(S.anchorNode)) {
      const C = o5(S, w);
      c5(
        C,
        x,
        e,
        t
      );
    }
  }, [r, e, t]);
  return P(() => {
    const y = e.parentElement, x = () => {
      r.getEditorState().read(() => {
        v();
      });
    };
    return window.addEventListener("resize", x), y && y.addEventListener("scroll", x), () => {
      window.removeEventListener("resize", x), y && y.removeEventListener("scroll", x);
    };
  }, [r, v, e]), P(() => (r.getEditorState().read(() => {
    v();
  }), Ie(
    r.registerUpdateListener(({ editorState: y }) => {
      y.read(() => {
        v();
      });
    }),
    r.registerCommand(
      Jt,
      () => (v(), !1),
      ve
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
        onClick: h,
        className: "popup-item spaced " + (t ? "active" : ""),
        "aria-label": "Insert link",
        children: /* @__PURE__ */ p.jsx("i", { className: "format link" })
      }
    )
  ] }) });
}
function h5(r, e) {
  const [t, n] = U(!1), [a, i] = U(!1), [s, o] = U(!1), [l, u] = U(!1), [c, h] = U(!1), [m, g] = U(!1), [v, y] = U(!1), [x, S] = U(!1), [w, C] = U(!1), E = ae(() => {
    r.getEditorState().read(() => {
      if (r.isComposing())
        return;
      const k = z(), A = window.getSelection(), R = r.getRootElement();
      if (A !== null && (!$(k) || R === null || !R.contains(A.anchorNode))) {
        n(!1);
        return;
      }
      if (!$(k))
        return;
      const I = On(k);
      o(k.hasFormat("bold")), u(k.hasFormat("italic")), h(k.hasFormat("underline")), g(k.hasFormat("strikethrough")), y(k.hasFormat("subscript")), S(k.hasFormat("superscript")), C(k.hasFormat("code"));
      const O = I.getParent();
      it(O) || it(I) ? i(!0) : i(!1), !c0(k.anchor.getNode()) && k.getTextContent() !== "" ? n(Se(I) || dn(I)) : n(!1);
      const F = k.getTextContent().replace(/\n/g, "");
      if (!k.isCollapsed() && F === "") {
        n(!1);
        return;
      }
    });
  }, [r]);
  return P(() => (document.addEventListener("selectionchange", E), () => {
    document.removeEventListener("selectionchange", E);
  }), [E]), P(() => Ie(
    r.registerUpdateListener(() => {
      E();
    }),
    r.registerRootListener(() => {
      r.getRootElement() === null && n(!1);
    })
  ), [r, E]), t ? ur(
    /* @__PURE__ */ p.jsx(
      d5,
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
function m5({
  anchorElem: r = document.body
}) {
  const [e] = se();
  return h5(e, r);
}
function f5(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Za = f5(function(r) {
  const e = new URLSearchParams();
  e.append("code", r);
  for (let t = 1; t < arguments.length; t++) e.append("v", arguments[t]);
  throw Error(`Minified Lexical error #${r}; visit https://lexical.dev/docs/error?${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function p5({ hasCellMerge: r = !0, hasCellBackgroundColor: e = !0, hasTabHandler: t = !0 }) {
  const [n] = se();
  return P(() => (n.hasNodes([Or, sr, Ln]) || Za(10), Ie(n.registerCommand(w0, ({ columns: a, rows: i, includeHeaders: s }) => {
    const o = Fm(Number(i), Number(a), s);
    Br(o);
    const l = o.getFirstDescendant();
    return Se(l) && l.select(), !0;
  }, ye), n.registerNodeTransform(Or, (a) => {
    const [i] = Lc(a, null, null), s = i.reduce((l, u) => Math.max(l, u.length), 0), o = a.getChildren();
    for (let l = 0; l < i.length; ++l) {
      const u = o[l];
      if (!u) continue;
      const c = i[l].reduce((h, m) => m ? 1 + h : h, 0);
      if (c !== s) for (let h = c; h < s; ++h) {
        const m = Zt(0);
        m.append(xe()), u.append(m);
      }
    }
  }))), [n]), P(() => {
    const a = /* @__PURE__ */ new Map(), i = (o, l, u) => {
      const c = u, h = Um(o, c, n, t);
      a.set(l, [h, c]);
    }, s = n.registerMutationListener(Or, (o) => {
      for (const [l, u] of o) if (u === "created" || u === "updated") {
        const c = a.get(l), h = n.getElementByKey(l);
        c && h === c[1] || (c && (c[0].removeListeners(), a.delete(l)), h !== null && n.getEditorState().read(() => {
          const m = Mt(l);
          st(m) && i(m, l, h);
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
  }, [n, t]), P(() => {
    if (!r) return n.registerNodeTransform(sr, (a) => {
      if (a.getColSpan() > 1 || a.getRowSpan() > 1) {
        const [, , i] = vt(a), [s] = Kt(i, a, a), o = s.length, l = s[0].length;
        let u = i.getFirstChild();
        Ye(u) || Za(175);
        const c = [];
        for (let h = 0; h < o; h++) {
          h !== 0 && (u = u.getNextSibling(), Ye(u) || Za(175));
          let m = null;
          for (let g = 0; g < l; g++) {
            const v = s[h][g], y = v.cell;
            if (v.startRow === h && v.startColumn === g) m = y, c.push(y);
            else if (y.getColSpan() > 1 || y.getRowSpan() > 1) {
              re(y) || Za(176);
              const x = Zt(y.__headerState);
              m !== null ? m.insertAfter(x) : z1(u, x);
            }
          }
        }
        for (const h of c) h.setColSpan(1), h.setRowSpan(1);
      }
    });
  }, [n, r]), P(() => {
    if (!e) return n.registerNodeTransform(sr, (a) => {
      a.getBackgroundColor() !== null && a.setBackgroundColor(null);
    });
  }, [n, e, r]), null;
}
const g5 = 33, v5 = 50;
function b5({ editor: r }) {
  const e = Re(null), t = Re(null), n = Re(null), a = Re(null), [i, s] = U(null), [o, l] = U(null), [u, c] = U(!1), [h, m] = U(null);
  P(() => r.registerCommand(
    Jt,
    () => {
      const k = z(), A = Te(k);
      return u !== A && c(A), !1;
    },
    At
  ));
  const g = ae(() => {
    l(null), e.current = null, m(null), a.current = null, n.current = null;
  }, []);
  P(() => {
    const k = (A) => {
      setTimeout(() => {
        const R = A.target;
        if (h) {
          s({
            x: A.clientX,
            y: A.clientY
          });
          return;
        }
        if (!(t.current && t.current.contains(R)) && e.current !== R) {
          e.current = R;
          const I = Ms(R);
          I && o !== I ? r.update(() => {
            const O = ot(I.elem);
            if (!O)
              throw new Error("TableCellResizer: Table cell node not found.");
            const F = Ar(O), j = r.getElementByKey(F.getKey());
            if (!j)
              throw new Error("TableCellResizer: Table element not found.");
            e.current = R, n.current = j.getBoundingClientRect(), l(I);
          }) : I == null && g();
        }
      }, 0);
    };
    return document.addEventListener("mousemove", k), () => {
      document.removeEventListener("mousemove", k);
    };
  }, [o, h, r, g]);
  const v = (k) => k === "bottom", y = ae(
    (k) => {
      if (!o)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(() => {
        const A = ot(o.elem);
        if (!re(A))
          throw new Error("TableCellResizer: Table cell node not found.");
        const R = Ar(A), I = Ic(A), O = R.getChildren();
        if (I >= O.length || I < 0)
          throw new Error("Expected table cell to be inside of table row.");
        const F = O[I];
        if (!Ye(F))
          throw new Error("Expected table row");
        F.setHeight(k);
      });
    },
    [o, r]
  ), x = ae(
    (k) => {
      if (!o)
        throw new Error("TableCellResizer: Expected active cell.");
      r.update(() => {
        const A = ot(o.elem);
        if (!re(A))
          throw new Error("TableCellResizer: Table cell node not found.");
        const R = Ar(A), I = Fc(A), O = R.getChildren();
        for (let F = 0; F < O.length; F++) {
          const j = O[F];
          if (!Ye(j))
            throw new Error("Expected table row");
          const V = j.getChildren(), Y = V.map((ie) => ie.getColSpan()).reduce(
            (ie, W) => {
              const me = ie[ie.length - 1] ?? 0;
              return ie.push(me + W), ie;
            },
            []
          ).findIndex(
            (ie) => ie > I
          );
          if (Y >= V.length || Y < 0)
            throw new Error("Expected table cell to be inside of table row.");
          const he = V[Y];
          if (!re(he))
            throw new Error("Expected table cell");
          he.setWidth(k);
        }
      });
    },
    [o, r]
  ), S = ae(
    (k) => {
      const A = (R) => {
        if (R.preventDefault(), R.stopPropagation(), !o)
          throw new Error("TableCellResizer: Expected active cell.");
        if (a.current) {
          const { x: I, y: O } = a.current;
          if (o === null)
            return;
          if (v(k)) {
            const F = o.elem.getBoundingClientRect().height, j = Math.abs(R.clientY - O), V = k === "bottom" && O > R.clientY;
            y(
              Math.max(
                V ? F - j : j + F,
                g5
              )
            );
          } else {
            const F = getComputedStyle(o.elem);
            let j = o.elem.clientWidth;
            j -= parseFloat(F.paddingLeft) + parseFloat(F.paddingRight);
            const V = Math.abs(R.clientX - I), X = k === "right" && I > R.clientX;
            x(
              Math.max(
                X ? j - V : V + j,
                v5
              )
            );
          }
          g(), document.removeEventListener("mouseup", A);
        }
      };
      return A;
    },
    [o, g, x, y]
  ), w = ae(
    (k) => (A) => {
      if (A.preventDefault(), A.stopPropagation(), !o)
        throw new Error("TableCellResizer: Expected active cell.");
      a.current = {
        x: A.clientX,
        y: A.clientY
      }, s(a.current), m(k), document.addEventListener("mouseup", S(k));
    },
    [o, S]
  ), E = ae(() => {
    if (o) {
      const { height: k, width: A, top: R, left: I } = o.elem.getBoundingClientRect(), O = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: "10px",
          left: `${window.pageXOffset + I}px`,
          top: `${window.pageYOffset + R + k}px`,
          width: `${A}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${k}px`,
          left: `${window.pageXOffset + I + A}px`,
          top: `${window.pageYOffset + R}px`,
          width: "10px"
        }
      }, F = n.current;
      return h && i && F && (v(h) ? (O[h].left = `${window.pageXOffset + F.left}px`, O[h].top = `${window.pageYOffset + i.y}px`, O[h].height = "3px", O[h].width = `${F.width}px`) : (O[h].top = `${window.pageYOffset + F.top}px`, O[h].left = `${window.pageXOffset + i.x}px`, O[h].width = "3px", O[h].height = `${F.height}px`), O[h].backgroundColor = "#adf"), O;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [o, h, i])();
  return /* @__PURE__ */ p.jsx("div", { ref: t, children: o != null && !u && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: E.right || void 0,
        onMouseDown: w("right")
      }
    ),
    /* @__PURE__ */ p.jsx(
      "div",
      {
        className: "TableCellResizer__resizer TableCellResizer__ui",
        style: E.bottom || void 0,
        onMouseDown: w("bottom")
      }
    )
  ] }) });
}
function y5() {
  const [r] = se(), e = ro();
  return ht(
    () => e ? ur(/* @__PURE__ */ p.jsx(b5, { editor: r }), document.body) : null,
    [r, e]
  );
}
function ms(r) {
  const e = r.getShape();
  return {
    columns: e.toX - e.fromX + 1,
    rows: e.toY - e.fromY + 1
  };
}
function x5(r) {
  const e = r.getNodes(), t = [];
  let n = null, a = null, i = 0;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (re(o)) {
      const l = o.getParentOrThrow();
      if (Ws(
        Ye(l),
        "Expected CellNode to have a RowNode parent"
      ), n !== l) {
        if (a !== null && i !== a)
          return !1;
        n !== null && (a = i), n = l, i = 0;
      }
      const u = o.__colSpan;
      for (let c = 0; c < u; c++)
        t[i + c] === void 0 && (t[i + c] = 0), t[i + c] += o.__rowSpan;
      i += u;
    }
  }
  return (a === null || i === a) && t.every((s) => s === t[0]);
}
function w5() {
  const r = z();
  if ($(r) && !r.isCollapsed() || Te(r) && !r.anchor.is(r.focus) || !$(r) && !Te(r))
    return !1;
  const [e] = vt(r.anchor);
  return e.__colSpan > 1 || e.__rowSpan > 1;
}
function Ru(r) {
  if (r.getChildrenSize() !== 1)
    return !1;
  const e = r.getFirstChildOrThrow();
  return !(!dn(e) || !e.isEmpty());
}
function _5(r) {
  const e = r.getLastDescendant();
  Se(e) ? e.select() : ge(e) ? e.selectEnd() : e !== null && e.selectNext();
}
function Iu(r) {
  return r.getEditorState().read(() => {
    const e = z();
    if ($(e) || Te(e)) {
      const [t] = vt(e.anchor);
      if (re(t))
        return t.getBackgroundColor();
    }
    return null;
  });
}
function S5({
  onClose: r,
  tableCellNode: e,
  setIsMenuOpen: t,
  contextRef: n,
  cellMerge: a,
  showColorPickerModal: i
}) {
  const [s] = se(), o = Re(null), [l, u] = U(e), [c, h] = U({
    columns: 1,
    rows: 1
  }), [m, g] = U(!1), [v, y] = U(!1), [x, S] = U(
    () => Iu(s) || ""
  );
  P(() => s.registerMutationListener(sr, (J) => {
    J.get(l.getKey()) === "updated" && (s.getEditorState().read(() => {
      u(l.getLatest());
    }), S(Iu(s) || ""));
  }), [s, l]), P(() => {
    s.getEditorState().read(() => {
      const J = z();
      if (Te(J)) {
        const Y = ms(J);
        h(ms(J)), g(
          x5(J) && (Y.columns > 1 || Y.rows > 1)
        );
      }
      y(w5());
    });
  }, [s]), P(() => {
    const J = n.current, Y = o.current, he = s.getRootElement();
    if (J != null && Y != null && he != null) {
      const ie = he.getBoundingClientRect(), W = J.getBoundingClientRect();
      Y.style.opacity = "1";
      const me = Y.getBoundingClientRect(), de = 5;
      let Oe = W.right + de;
      if (Oe + me.width > window.innerWidth || Oe + me.width > ie.right) {
        const Ze = W.left - me.width - de;
        Oe = (Ze < 0 ? de : Ze) + window.pageXOffset;
      }
      Y.style.left = `${Oe + window.pageXOffset}px`;
      let le = W.top;
      if (le + me.height > window.innerHeight) {
        const Ze = W.bottom - me.height;
        le = (Ze < 0 ? de : Ze) + window.pageYOffset;
      }
      Y.style.top = `${le + +window.pageYOffset}px`;
    }
  }, [n, o, s]), P(() => {
    function J(Y) {
      o.current != null && n.current != null && !o.current.contains(Y.target) && !n.current.contains(Y.target) && t(!1);
    }
    return window.addEventListener("click", J), () => window.removeEventListener("click", J);
  }, [t, n]);
  const w = ae(() => {
    s.update(() => {
      if (l.isAttached()) {
        const Y = Ar(l), he = s.getElementByKey(
          Y.getKey()
        );
        if (!he)
          throw new Error("Expected to find tableElement in DOM");
        const ie = As(he);
        ie !== null && ie.clearHighlight(), Y.markDirty(), u(l.getLatest());
      }
      Dt().selectStart();
    });
  }, [s, l]), C = () => {
    s.update(() => {
      const J = z();
      if (Te(J)) {
        const { columns: Y, rows: he } = ms(J), ie = J.getNodes();
        let W = null;
        for (let me = 0; me < ie.length; me++) {
          const de = ie[me];
          if (re(de))
            if (W === null) {
              de.setColSpan(Y).setRowSpan(he), W = de;
              const Oe = Ru(de);
              let le;
              Oe && dn(le = de.getFirstChild()) && le.remove();
            } else re(W) && (Ru(de) || W.append(...de.getChildren()), de.remove());
        }
        W !== null && (W.getChildrenSize() === 0 && W.append(xe()), _5(W)), r();
      }
    });
  }, E = () => {
    s.update(() => {
      $m();
    });
  }, k = ae(
    (J) => {
      s.update(() => {
        zm(J), r();
      });
    },
    [s, r]
  ), A = ae(
    (J) => {
      s.update(() => {
        for (let Y = 0; Y < c.columns; Y++)
          Pm(J);
        r();
      });
    },
    [s, r, c.columns]
  ), R = ae(() => {
    s.update(() => {
      Bm(), r();
    });
  }, [s, r]), I = ae(() => {
    s.update(() => {
      Ar(l).remove(), w(), r();
    });
  }, [s, l, w, r]), O = ae(() => {
    s.update(() => {
      jm(), r();
    });
  }, [s, r]), F = ae(() => {
    s.update(() => {
      const J = Ar(l), Y = Ic(l), he = J.getChildren();
      if (Y >= he.length || Y < 0)
        throw new Error("Expected table cell to be inside of table row.");
      const ie = he[Y];
      if (!Ye(ie))
        throw new Error("Expected table row");
      ie.getChildren().forEach((W) => {
        if (!re(W))
          throw new Error("Expected table cell");
        W.toggleHeaderStyle(Ue.ROW);
      }), w(), r();
    });
  }, [s, l, w, r]), j = ae(() => {
    s.update(() => {
      const J = Ar(l), Y = Fc(l), he = J.getChildren(), ie = Math.max(
        ...he.map((W) => W.getChildren().length)
      );
      if (Y >= ie || Y < 0)
        throw new Error("Expected table cell to be inside of table row.");
      for (let W = 0; W < he.length; W++) {
        const me = he[W];
        if (!Ye(me))
          throw new Error("Expected table row");
        const de = me.getChildren();
        if (Y >= de.length)
          continue;
        const Oe = de[Y];
        if (!re(Oe))
          throw new Error("Expected table cell");
        Oe.toggleHeaderStyle(Ue.COLUMN);
      }
      w(), r();
    });
  }, [s, l, w, r]), V = ae(
    (J) => {
      s.update(() => {
        const Y = z();
        if ($(Y) || Te(Y)) {
          const [he] = vt(Y.anchor);
          if (re(he) && he.setBackgroundColor(J), Te(Y)) {
            const ie = Y.getNodes();
            for (let W = 0; W < ie.length; W++) {
              const me = ie[W];
              re(me) && me.setBackgroundColor(J);
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
      onClick: () => E(),
      "data-test-id": "table-unmerge-cells",
      children: "Unmerge cells"
    }
  ))), ur(
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: "dropdown",
        ref: o,
        onClick: (J) => {
          J.stopPropagation();
        },
        children: [
          X,
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => i("Cell background color", () => /* @__PURE__ */ p.jsx(
                Vd,
                {
                  color: x,
                  onChange: V
                }
              )),
              "data-test-id": "table-background-color",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Background color" })
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
              onClick: () => A(!1),
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
              onClick: () => A(!0),
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
              onClick: () => O(),
              "data-test-id": "table-delete-columns",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Delete column" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => R(),
              "data-test-id": "table-delete-rows",
              children: /* @__PURE__ */ p.jsx("span", { className: "text", children: "Delete row" })
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              className: "item",
              onClick: () => I(),
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
                (l.__headerState & Ue.ROW) === Ue.ROW ? "Remove" : "Add",
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
              onClick: () => j(),
              "data-test-id": "table-column-header",
              children: /* @__PURE__ */ p.jsxs("span", { className: "text", children: [
                (l.__headerState & Ue.COLUMN) === Ue.COLUMN ? "Remove" : "Add",
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
function C5({
  anchorElem: r,
  cellMerge: e
}) {
  const [t] = se(), n = Re(null), a = Re(null), [i, s] = U(!1), [o, l] = U(
    null
  ), [u, c] = Di(), h = ae(() => {
    const g = n.current, v = z(), y = window.getSelection(), x = document.activeElement;
    if (v == null || g == null) {
      l(null);
      return;
    }
    const S = t.getRootElement();
    if ($(v) && S !== null && y !== null && S.contains(y.anchorNode)) {
      const w = Lm(
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
  P(() => t.registerUpdateListener(() => {
    t.getEditorState().read(() => {
      h();
    });
  })), P(() => {
    const g = n.current;
    if (g != null && o != null) {
      const v = t.getElementByKey(o.getKey());
      if (v != null) {
        const y = v.getBoundingClientRect(), x = g.getBoundingClientRect(), S = r.getBoundingClientRect(), w = y.top - S.top + 4, C = y.right - x.width - 10 - S.left;
        g.style.opacity = "1", g.style.transform = `translate(${C}px, ${w}px)`;
      } else
        g.style.opacity = "0", g.style.transform = "translate(-10000px, -10000px)";
    }
  }, [n, o, t, r]);
  const m = Re(o);
  return P(() => {
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
      S5,
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
function k5({
  anchorElem: r = document.body,
  cellMerge: e = !1
}) {
  const t = ro();
  return ur(
    t ? /* @__PURE__ */ p.jsx(
      C5,
      {
        anchorElem: r,
        cellMerge: e
      }
    ) : null,
    r
  );
}
const Fu = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function E5() {
  const [r] = se();
  return P(() => r.registerCommand(
    Es,
    (e) => ((async () => {
      const t = await F1(
        e,
        [Fu].flatMap((n) => n)
      );
      for (const { file: n, result: a } of t)
        lc(n, Fu) && r.dispatchCommand(Ia, {
          altText: n.name,
          src: a
        });
    })(), !0),
    ve
  ), [r]), null;
}
class N5 extends mo {
  constructor(t, n, a) {
    super(t);
    ne(this, "title");
    ne(this, "emoji");
    ne(this, "keywords");
    this.title = t, this.emoji = n, this.keywords = a.keywords || [];
  }
}
function T5({
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
const A5 = 10;
function M5() {
  const [r] = se(), [e, t] = U(null), [n, a] = U([]);
  P(() => {
    import("./emoji-list-CKk-PE96.js").then((u) => a(u.default));
  }, []);
  const i = ht(
    () => n != null ? n.map(
      ({ emoji: u, aliases: c, tags: h }) => new N5(c[0], u, {
        keywords: [...c, ...h]
      })
    ) : [],
    [n]
  ), s = fo(":", {
    minLength: 0
  }), o = ht(() => i.filter((u) => e != null ? new RegExp(e, "gi").exec(u.title) || u.keywords != null ? u.keywords.some(
    (c) => new RegExp(e, "gi").exec(c)
  ) : !1 : i).slice(0, A5), [i, e]), l = ae(
    (u, c, h) => {
      r.update(() => {
        const m = z();
        !$(m) || u == null || (c && c.remove(), m.insertNodes([Dr(u.emoji)]), h());
      });
    },
    [r]
  );
  return /* @__PURE__ */ p.jsx(
    po,
    {
      onQueryChange: t,
      onSelectOption: l,
      triggerFn: s,
      options: o,
      menuRenderFn: (u, { selectedIndex: c, selectOptionAndCleanUp: h, setHighlightedIndex: m }) => u.current == null || o.length === 0 ? null : u.current && o.length ? la.createPortal(
        /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover emoji-menu", children: /* @__PURE__ */ p.jsx("ul", { children: o.map((g, v) => /* @__PURE__ */ p.jsx("div", { children: /* @__PURE__ */ p.jsx(
          T5,
          {
            index: v,
            isSelected: c === v,
            onClick: () => {
              m(v), h(g);
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
function fs(r) {
  return r instanceof HTMLElement;
}
class bh {
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
function O5(r) {
  return r instanceof bh;
}
class Yr {
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
    if (O5(e)) {
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
    const { left: t, top: n, width: a, height: i } = e, { left: s, top: o, width: l, height: u } = this, c = t + a >= s + l ? t + a : s + l, h = n + i >= o + u ? n + i : o + u, m = t <= s ? t : s, g = n <= o ? n : o;
    return c - m <= a + l && h - g <= i + u;
  }
  generateNewRect({
    left: e = this.left,
    top: t = this.top,
    right: n = this.right,
    bottom: a = this.bottom
  }) {
    return new Yr(e, t, n, a);
  }
  static fromLTRB(e, t, n, a) {
    return new Yr(e, t, n, a);
  }
  static fromLWTH(e, t, n, a) {
    return new Yr(e, n, e + t, n + a);
  }
  static fromPoints(e, t) {
    const { y: n, x: a } = e, { y: i, x: s } = t;
    return Yr.fromLTRB(a, n, s, i);
  }
  static fromDOM(e) {
    const { top: t, width: n, left: a, height: i } = e.getBoundingClientRect();
    return Yr.fromLWTH(a, n, t, i);
  }
}
const Zs = 4, D5 = 2, R5 = "draggable-block-menu", Lu = "application/x-lexical-drag-block", zu = 28, I5 = 1, F5 = -1, Pu = 0;
let ri = 1 / 0;
function L5(r) {
  return r === 0 ? 1 / 0 : ri >= 0 && ri < r ? ri : Math.floor(r / 2);
}
function z5(r) {
  return r.getEditorState().read(() => Dt().getChildrenKeys());
}
function yh(r) {
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
function ps(r, e, t, n = !1) {
  const a = r.getBoundingClientRect(), i = z5(e);
  let s = null;
  return e.getEditorState().read(() => {
    if (n) {
      const [u, c] = [
        e.getElementByKey(i[0]),
        e.getElementByKey(i[i.length - 1])
      ], [h, m] = [
        u == null ? void 0 : u.getBoundingClientRect(),
        c == null ? void 0 : c.getBoundingClientRect()
      ];
      if (h && m && (t.y < h.top ? s = u : t.y > m.bottom && (s = c), s))
        return;
    }
    let o = L5(i.length), l = Pu;
    for (; o >= 0 && o < i.length; ) {
      const u = i[o], c = e.getElementByKey(u);
      if (c === null)
        break;
      const h = new bh(t.x, t.y), m = Yr.fromDOM(c), { marginTop: g, marginBottom: v } = yh(c), y = m.generateNewRect({
        bottom: m.bottom + v,
        left: a.left,
        right: a.right,
        top: m.top - g
      }), {
        result: x,
        reason: { isOnTopSide: S, isOnBottomSide: w }
      } = y.contains(h);
      if (x) {
        s = c, ri = o;
        break;
      }
      l === Pu && (S ? l = F5 : w ? l = I5 : l = 1 / 0), o += l;
    }
  }), s;
}
function P5(r) {
  return !!r.closest(`.${R5}`);
}
function B5(r, e, t) {
  if (!r) {
    e.style.opacity = "0", e.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const n = r.getBoundingClientRect(), a = window.getComputedStyle(r), i = e.getBoundingClientRect(), s = t.getBoundingClientRect(), o = n.top + (parseInt(a.lineHeight, 10) - i.height) / 2 - s.top, l = Zs;
  e.style.opacity = "1", e.style.transform = `translate(${l}px, ${o}px)`;
}
function j5(r, e) {
  const { transform: t } = e.style;
  e.style.transform = "translateZ(0)", r.setDragImage(e, 0, 0), setTimeout(() => {
    e.style.transform = t;
  });
}
function $5(r, e, t, n) {
  const { top: a, height: i } = e.getBoundingClientRect(), { top: s, width: o } = n.getBoundingClientRect(), { marginTop: l, marginBottom: u } = yh(e);
  let c = a;
  t >= a ? c += i + u / 2 : c -= l / 2;
  const h = c - s - D5, m = zu - Zs;
  r.style.transform = `translate(${m}px, ${h}px)`, r.style.width = `${o - (zu - Zs) * 2}px`, r.style.opacity = ".4";
}
function q5(r) {
  r && (r.style.opacity = "0", r.style.transform = "translate(-10000px, -10000px)");
}
function H5(r, e, t) {
  const n = e.parentElement, a = Re(null), i = Re(null), s = Re(!1), [o, l] = U(null);
  P(() => {
    function h(g) {
      const v = g.target;
      if (!fs(v)) {
        l(null);
        return;
      }
      if (P5(v))
        return;
      const y = ps(e, r, g);
      l(y);
    }
    function m() {
      l(null);
    }
    return n == null || n.addEventListener("mousemove", h), n == null || n.addEventListener("mouseleave", m), () => {
      n == null || n.removeEventListener("mousemove", h), n == null || n.removeEventListener("mouseleave", m);
    };
  }, [n, e, r]), P(() => {
    a.current && B5(o, a.current, e);
  }, [e, o]), P(() => {
    function h(g) {
      if (!s.current)
        return !1;
      const [v] = Cn(g);
      if (v)
        return !1;
      const { pageY: y, target: x } = g;
      if (!fs(x))
        return !1;
      const S = ps(e, r, g, !0), w = i.current;
      return S === null || w === null ? !1 : ($5(w, S, y, e), g.preventDefault(), !0);
    }
    function m(g) {
      if (!s.current)
        return !1;
      const [v] = Cn(g);
      if (v)
        return !1;
      const { target: y, dataTransfer: x, pageY: S } = g, w = (x == null ? void 0 : x.getData(Lu)) || "", C = Mt(w);
      if (!C || !fs(y))
        return !1;
      const E = ps(e, r, g, !0);
      if (!E)
        return !1;
      const k = ot(E);
      if (!k)
        return !1;
      if (k === C)
        return !0;
      const A = E.getBoundingClientRect().top;
      return S >= A ? k.insertAfter(C) : k.insertBefore(C), l(null), !0;
    }
    return Ie(
      r.registerCommand(
        gi,
        (g) => h(g),
        ve
      ),
      r.registerCommand(
        vi,
        (g) => m(g),
        At
      )
    );
  }, [e, r]);
  function u(h) {
    const m = h.dataTransfer;
    if (!m || !o)
      return;
    j5(m, o);
    let g = "";
    r.update(() => {
      const v = ot(o);
      v && (g = v.getKey());
    }), s.current = !0, m.setData(Lu, g);
  }
  function c() {
    s.current = !1, q5(i.current);
  }
  return ur(
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
function U5({
  anchorElem: r = document.body
}) {
  const [e] = se();
  return H5(e, r, e._editable);
}
const xh = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`, K5 = "\\b[A-Z][^\\s" + xh + "]", W5 = {
  NAME: K5,
  PUNCTUATION: xh
}, wh = W5.PUNCTUATION, go = ["=\\$a", "=\\$i", "=\\$f"].join("|"), gs = "=$a", G5 = "=$i", Y5 = "=$f", _h = "^(" + go + ")\\s|[^" + wh + "\\s]", V5 = "(?:\\.[ |$]| |[" + wh + "]|)", X5 = 75, J5 = new RegExp(
  "((" + go + ")((?:" + _h + V5 + "){0," + X5 + "}))"
), Z5 = 50, Q5 = new RegExp(
  "((" + go + ")((?:" + _h + "){0," + Z5 + "}))"
), e3 = [
  {
    inputField: {
      label: "入力フィールドを追加",
      value: null
    }
  }
], vs = /* @__PURE__ */ new Map(), t3 = {
  search(r, e, t) {
    setTimeout(() => {
      const n = e.filter(
        (a) => Object.keys(a).filter((i) => a[i].label.toLowerCase().includes(r.toLowerCase())).length > 0
      );
      t(n);
    }, 300);
  }
};
function r3(r, e, t = "") {
  const [n, a] = U([]);
  return P(() => {
    const i = vs.get(t + r);
    if (r == null) {
      a([]);
      return;
    }
    if (i !== null) {
      if (i !== void 0) {
        a(i);
        return;
      }
      vs.set(t + r, null), t3.search(r, e, (s) => {
        vs.set(t + r, s), a(s);
      });
    }
  }, [r, e, t]), n;
}
function n3(r, e) {
  let t = J5.exec(r);
  if (t === null && (t = Q5.exec(r)), t !== null) {
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
function a3(r) {
  return n3(r, 0);
}
class i3 extends mo {
  constructor(t, n, a, i) {
    super(t + a);
    ne(this, "dataMention");
    ne(this, "fieldName");
    ne(this, "label");
    ne(this, "data");
    this.dataMention = t, this.fieldName = n, this.label = a, this.data = i;
  }
}
function s3({
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
function o3({
  step: r,
  autoData: e,
  afterAutoData: t
}) {
  const [n] = se(), [a, i] = U(null), [s, o] = U(), [l, u] = U(), [c, h] = U(!1), [m, g] = U(null), y = r3(a, s === gs ? e : s === Y5 ? t : e3, s), x = fo("/", {
    minLength: 0
  }), S = ht(
    () => y.map(
      (E) => {
        const k = Object.keys(E)[0];
        return new i3(s === gs ? "auto" : "after-auto", k, E[k].label, E[k].value);
      }
    ),
    [y]
  ), w = ae(
    (E, k, A) => {
      n.update(() => {
        const R = no(
          {
            dataMention: s === gs ? "auto" : s == G5 ? "input" : "after-auto",
            fieldName: E.fieldName,
            label: E.label,
            data: E.data,
            format: k == null ? void 0 : k.getFormat(),
            style: k == null ? void 0 : k.getStyle()
          }
        );
        E.fieldName === "inputField" && (h(!0), g(R), A()), k && k.replace(R), A();
      });
    },
    [n, s]
  ), C = ae(
    (E) => {
      if (x(E, n) !== null)
        return null;
      const A = a3(E);
      return A !== null && o(A.replaceableString.replace(A.matchingString, "")), A;
    },
    [x, n]
  );
  return P(() => {
    r === 2 && n.registerCommand(
      Jt,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (E, k) => {
        var A, R;
        return ((A = k.getRootElement()) == null ? void 0 : A.className) === "DataMention__contentEditable" && !n.isEditable() ? (n.setEditable(!0), k.focus()) : ((R = k.getRootElement()) == null ? void 0 : R.className) !== "DataMention__contentEditable" && n.isEditable() && n.setEditable(!1), !0;
      },
      ve
    );
  }, [r, n]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(
      po,
      {
        onQueryChange: i,
        onSelectOption: w,
        triggerFn: C,
        options: S,
        menuRenderFn: (E, { selectedIndex: k, selectOptionAndCleanUp: A, setHighlightedIndex: R }) => E.current && y.length ? la.createPortal(
          /* @__PURE__ */ p.jsx("div", { className: "typeahead-popover mentions-menu", children: /* @__PURE__ */ p.jsx("ul", { children: S.map((I, O) => /* @__PURE__ */ p.jsx(
            s3,
            {
              index: O,
              isSelected: k === O,
              onClick: () => {
                R(O), A(I);
              },
              onMouseEnter: () => {
                R(O);
              },
              option: I
            },
            I.key
          )) }) }),
          E.current
        ) : null
      }
    ),
    c && m && la.createPortal(
      /* @__PURE__ */ p.jsxs("div", { className: "data-mention-input-modal", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            placeholder: "Enter label of input field",
            value: l || "",
            type: "text",
            onChange: (E) => {
              u(E.target.value);
            }
          }
        ),
        /* @__PURE__ */ p.jsx("button", { onClick: () => {
          n.update(() => {
            m == null || m.setLabel(l || ""), h(!1), g(null), u("");
          });
        }, children: "Save" })
      ] }),
      document.body
    )
  ] });
}
const l3 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? zr : P;
function u3({ ignoreHistoryMergeTagChange: r = !0, ignoreSelectionChange: e = !1, onChange: t }) {
  const [n] = se();
  return l3(() => {
    if (t) return n.registerUpdateListener(({ editorState: a, dirtyElements: i, dirtyLeaves: s, prevEditorState: o, tags: l }) => {
      e && i.size === 0 && s.size === 0 || r && l.has("history-merge") || o.isEmpty() || t(a, n, l);
    });
  }, [n, r, e, t]), null;
}
function c3(r) {
  const { step: e, autoMentionData: t, autoAfterMentionData: n, onChange: a = () => {
  } } = r, { historyState: i } = E4(), s = /* @__PURE__ */ p.jsx(U4, { children: "Enter text..." }), [o, l] = U(null), [u, c] = U(!1), [h, m] = U(!1), g = (v) => {
    v !== null && l(v);
  };
  return P(() => {
    const v = () => {
      const y = Un && window.matchMedia("(max-width: 1025px)").matches;
      y !== u && c(y);
    };
    return v(), window.addEventListener("resize", v), () => {
      window.removeEventListener("resize", v);
    };
  }, [u]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(v2, { setIsLinkEditMode: m }),
    /* @__PURE__ */ p.jsxs("div", { className: "editor-container", children: [
      /* @__PURE__ */ p.jsx(E5, {}),
      /* @__PURE__ */ p.jsx(j4, {}),
      /* @__PURE__ */ p.jsx(s5, {}),
      /* @__PURE__ */ p.jsx(M5, {}),
      /* @__PURE__ */ p.jsx(d2, {}),
      /* @__PURE__ */ p.jsx(o3, { step: e, autoData: t, afterAutoData: n }),
      /* @__PURE__ */ p.jsx(Z2, {}),
      /* @__PURE__ */ p.jsx(Y2, {}),
      /* @__PURE__ */ p.jsx(u3, { ignoreSelectionChange: !0, onChange: a }),
      /* @__PURE__ */ p.jsx(C4, { externalHistoryState: i }),
      /* @__PURE__ */ p.jsx(H2, {}),
      /* @__PURE__ */ p.jsx(
        L4,
        {
          contentEditable: /* @__PURE__ */ p.jsx("div", { className: "editor-scroller", children: /* @__PURE__ */ p.jsx("div", { className: "editor", ref: g, children: /* @__PURE__ */ p.jsx(X4, {}) }) }),
          placeholder: s,
          ErrorBoundary: B4
        }
      ),
      /* @__PURE__ */ p.jsx(b2, {}),
      /* @__PURE__ */ p.jsx(y2, {}),
      /* @__PURE__ */ p.jsx(_2, { maxDepth: 7 }),
      /* @__PURE__ */ p.jsx(
        p5,
        {
          hasCellMerge: !0,
          hasCellBackgroundColor: !0
        }
      ),
      /* @__PURE__ */ p.jsx(y5, {}),
      /* @__PURE__ */ p.jsx(bg, {}),
      /* @__PURE__ */ p.jsx(Mg, {}),
      /* @__PURE__ */ p.jsx(K2, {}),
      /* @__PURE__ */ p.jsx(Pg, {}),
      /* @__PURE__ */ p.jsx(r2, {}),
      /* @__PURE__ */ p.jsx(n2, {}),
      /* @__PURE__ */ p.jsx(t2, {}),
      /* @__PURE__ */ p.jsx(H4, {}),
      /* @__PURE__ */ p.jsx(Wg, {}),
      /* @__PURE__ */ p.jsx(zg, {}),
      /* @__PURE__ */ p.jsx(E2, {}),
      /* @__PURE__ */ p.jsx(q4, {}),
      /* @__PURE__ */ p.jsx(Gg, {}),
      /* @__PURE__ */ p.jsx(hg, {}),
      /* @__PURE__ */ p.jsx(jg, {}),
      o && !u && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          U5,
          {
            anchorElem: o
          }
        ),
        /* @__PURE__ */ p.jsx(
          O2,
          {
            anchorElem: o,
            isLinkEditMode: h,
            setIsLinkEditMode: m
          }
        ),
        /* @__PURE__ */ p.jsx(
          m5,
          {
            anchorElem: o
          }
        ),
        /* @__PURE__ */ p.jsx(
          k5,
          {
            anchorElem: o,
            cellMerge: !0
          }
        )
      ] })
    ] })
  ] });
}
function d3({ editorRef: r }) {
  const [e] = se();
  return ft.useEffect(() => {
    typeof r == "function" ? r(e) : typeof r == "object" && (r.current = e);
  }, [e]), null;
}
function C3(r) {
  const {
    editorState: e,
    historyState: t,
    onChange: n,
    autoAfterMentionData: a = [],
    autoMentionData: i = [],
    step: s = 1,
    editorRef: o = { current: null }
  } = r;
  Mn.prototype.defaultStep = s;
  const l = {
    editorState: e,
    namespace: "Doc App",
    editable: s === 1,
    theme: C1,
    onError: (u) => {
      console.log("Error:", u.message);
    },
    nodes: [...v4, Mn]
  };
  return /* @__PURE__ */ p.jsxs(S1, { initialConfig: l, children: [
    /* @__PURE__ */ p.jsx(d3, { editorRef: o }),
    /* @__PURE__ */ p.jsx(k4, { initHistoryState: t, children: /* @__PURE__ */ p.jsx("div", { className: "editor-shell", children: /* @__PURE__ */ p.jsx(c3, { step: s, autoAfterMentionData: a, autoMentionData: i, onChange: n }) }) })
  ] });
}
export {
  ag as $,
  jo as A,
  or as B,
  vr as C,
  Kn as D,
  Na as E,
  m5 as F,
  vm as G,
  F4 as H,
  ro as I,
  Kd as J,
  Nn as K,
  Ie as L,
  Eg as M,
  Un as N,
  C1 as O,
  U4 as P,
  X4 as Q,
  w3 as R,
  Ng as S,
  Lr as T,
  tc as U,
  w1 as V,
  C3 as W,
  g3 as _,
  v0 as a,
  se as b,
  K2 as c,
  Z2 as d,
  Y2 as e,
  C4 as f,
  B4 as g,
  L4 as h,
  Zm as i,
  p as j,
  W2 as k,
  b3 as l,
  Hg as m,
  pc as n,
  j4 as o,
  Ug as p,
  y3 as q,
  x3 as r,
  W1 as s,
  fg as t,
  E4 as u,
  eu as v,
  Di as w,
  G4 as x,
  f4 as y,
  Bo as z
};
