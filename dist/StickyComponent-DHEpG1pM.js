import { jsx as b, jsxs as $, Fragment as K } from "react/jsx-runtime";
import { Z as P, a5 as U, V as a, b1 as l, b2 as d, b3 as V, b4 as q, b5 as B, b6 as F, b7 as Q, b8 as Z, b9 as G, a2 as J, ba as M, a4 as ee, bb as x, a3 as te, bc as ne, bd as W, be as z, bf as re, bg as oe, aq as se, bh as ie, ar as ae, as as ce, bi as le, bj as ue, H as T, bk as de, aQ as fe, bl as me, bm as ge, bn as pe, an as be, aD as Ce, ac as he, ad as ye, bo as ve, W as R, bp as S } from "./index-B-hVvLl3.js";
import { d as Ee } from "./LexicalNestedComposer.prod-BXFMiEJe.js";
import { useState as Y, useMemo as ke, useLayoutEffect as j, useEffect as w, Suspense as we, useRef as A } from "react";
import { flushSync as De, createPortal as Le } from "react-dom";
const v = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xe = v && "documentMode" in document ? document.documentMode : null, Re = !(!v || !("InputEvent" in window) || xe) && "getTargetRanges" in new window.InputEvent("input"), Se = v && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), $e = v && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ne = v && /^(?=.*Chrome).*/i.test(navigator.userAgent), Pe = v && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ne;
function O(n, t) {
  t.update(() => {
    if (n !== null) {
      const e = le(n, KeyboardEvent) ? null : n.clipboardData, s = a();
      if (s !== null && e != null) {
        n.preventDefault();
        const i = ue(t);
        i !== null && e.setData("text/html", i), e.setData("text/plain", s.getTextContent());
      }
    }
  });
}
function Te(n) {
  return P(n.registerCommand(x, (t) => {
    const e = a();
    return !!l(e) && (e.deleteCharacter(t), !0);
  }, d), n.registerCommand(ce, (t) => {
    const e = a();
    return !!l(e) && (e.deleteWord(t), !0);
  }, d), n.registerCommand(ae, (t) => {
    const e = a();
    return !!l(e) && (e.deleteLine(t), !0);
  }, d), n.registerCommand(ie, (t) => {
    const e = a();
    if (!l(e)) return !1;
    if (typeof t == "string") e.insertText(t);
    else {
      const s = t.dataTransfer;
      if (s != null) B(s, e);
      else {
        const i = t.data;
        i && e.insertText(i);
      }
    }
    return !0;
  }, d), n.registerCommand(se, () => {
    const t = a();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(M, (t) => {
    const e = a();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(oe, () => {
    const t = a();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(re, (t) => {
    const e = a();
    if (!l(e)) return !1;
    const s = t, i = s.shiftKey;
    return !!W(e, !0) && (s.preventDefault(), z(e, i, !0), !0);
  }, d), n.registerCommand(ne, (t) => {
    const e = a();
    if (!l(e)) return !1;
    const s = t, i = s.shiftKey;
    return !!W(e, !1) && (s.preventDefault(), z(e, i, !1), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !0));
  }, d), n.registerCommand(ee, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !1));
  }, d), n.registerCommand(J, (t) => {
    const e = a();
    if (!l(e)) return !1;
    if (t !== null) {
      if (($e || Se || Pe) && Re) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(M, !1);
  }, d), n.registerCommand(Z, () => (G(), !0), d), n.registerCommand(Q, (t) => {
    const e = a();
    return !!l(e) && (O(t, n), !0);
  }, d), n.registerCommand(F, (t) => {
    const e = a();
    return !!l(e) && (function(s, i) {
      O(s, i), i.update(() => {
        const r = a();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(q, (t) => {
    const e = a();
    return !!l(e) && (function(s, i) {
      s.preventDefault(), i.update(() => {
        const r = a(), { clipboardData: f } = s;
        f != null && l(r) && B(f, r);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(V, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(U, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const N = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j : w;
function X(n) {
  return n.getEditorState().read(me(n.isComposing()));
}
function _e({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = T(), i = function(r, f) {
    const [m, h] = Y(() => r.getDecorators());
    return N(() => r.registerDecoratorListener((y) => {
      De(() => {
        h(y);
      });
    }), [r]), w(() => {
      h(r.getDecorators());
    }, [r]), ke(() => {
      const y = [], D = Object.keys(m);
      for (let E = 0; E < D.length; E++) {
        const k = D[E], o = b(f, { onError: (c) => r._onError(c), children: b(we, { fallback: null, children: m[k] }) }), u = r.getElementByKey(k);
        u !== null && y.push(Le(o, u, k));
      }
      return y;
    }, [f, m, r]);
  }(s, e);
  return function(r) {
    N(() => P(Te(r), de(r)), [r]);
  }(s), $(K, { children: [n, b(Be, { content: t }), i] });
}
function Be({ content: n }) {
  const [t] = T(), e = function(i) {
    const [r, f] = Y(() => X(i));
    return N(() => {
      function m() {
        const h = X(i);
        f(h);
      }
      return m(), P(i.registerUpdateListener(() => {
        m();
      }), i.registerEditableListener(() => {
        m();
      }));
    }, [i]), r;
  }(t), s = fe();
  return e ? typeof n == "function" ? n(s) : n : null;
}
const Me = ge ? j : w, We = {
  ...pe,
  paragraph: "st__paragraph"
};
function L(n, t) {
  const e = n.style, s = t.rootElementRect, i = s !== null ? s.left : 0, r = s !== null ? s.top : 0;
  e.top = r + t.y + "px", e.left = i + t.x + "px";
}
function je({
  x: n,
  y: t,
  nodeKey: e,
  color: s,
  caption: i
}) {
  const [r] = T(), f = A(null), m = A({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  w(() => {
    const o = m.current;
    o.x = n, o.y = t;
    const u = f.current;
    u !== null && L(u, o);
  }, [n, t]), Me(() => {
    const o = m.current, u = new ResizeObserver((C) => {
      for (let p = 0; p < C.length; p++) {
        const I = C[p], { target: H } = I;
        o.rootElementRect = H.getBoundingClientRect();
        const _ = f.current;
        _ !== null && L(_, o);
      }
    }), c = r.registerRootListener(
      (C, p) => {
        p !== null && u.unobserve(p), C !== null && u.observe(C);
      }
    ), g = () => {
      const C = r.getRootElement(), p = f.current;
      C !== null && p !== null && (o.rootElementRect = C.getBoundingClientRect(), L(p, o));
    };
    return window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g), c();
    };
  }, [r]), w(() => {
    const o = f.current;
    o !== null && setTimeout(() => {
      o.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const h = (o) => {
    const u = f.current, c = m.current, g = c.rootElementRect;
    u !== null && c.isDragging && g !== null && (c.x = o.pageX - c.offsetX - g.left, c.y = o.pageY - c.offsetY - g.top, L(u, c));
  }, y = (o) => {
    const u = f.current, c = m.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), r.update(() => {
      const g = R(e);
      S(g) && g.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", h), document.removeEventListener("pointerup", y);
  }, D = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.remove();
    });
  }, E = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.toggleColor();
    });
  }, { historyState: k } = be();
  return /* @__PURE__ */ b("div", { ref: f, className: "doc-editor-sticky-note-container", children: /* @__PURE__ */ $(
    "div",
    {
      className: `sticky-note ${s}`,
      onPointerDown: (o) => {
        const u = f.current;
        if (u == null || o.button === 2 || o.target !== u.firstChild)
          return;
        const c = u, g = m.current;
        if (c !== null && r.isEditable()) {
          const { top: C, left: p } = c.getBoundingClientRect();
          g.offsetX = o.clientX - p, g.offsetY = o.clientY - C, g.isDragging = !0, c.classList.add("dragging"), document.addEventListener("pointermove", h), document.addEventListener("pointerup", y), o.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            disabled: !r.isEditable(),
            onClick: D,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            disabled: !r.isEditable(),
            onClick: E,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ b("i", { className: "doc-editor-icon bucket" })
          }
        ),
        /* @__PURE__ */ $(
          Ee,
          {
            initialEditor: i,
            initialTheme: We,
            children: [
              /* @__PURE__ */ b(Ce, { externalHistoryState: k }),
              /* @__PURE__ */ b(
                _e,
                {
                  contentEditable: /* @__PURE__ */ b(ve, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ b(ye, { className: "StickyNode__placeholder", children: "What's up?" }),
                  ErrorBoundary: he
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
export {
  je as default,
  L as positionSticky
};
