import { jsx as C, jsxs as $, Fragment as V } from "react/jsx-runtime";
import { V as P, a2 as j, O as i, aG as l, aH as d, aI as H, aJ as Q, aK as M, aL as Z, aM as F, aN as G, aO as J, Z as q, aP as B, a1 as ee, aQ as x, a0 as te, aR as ne, aS as O, aT as A, aU as re, aV as oe, aW as se, aX as ae, aY as ie, aZ as ce, a_ as le, a$ as ue, K as T, b0 as de, ak as fe, b1 as me, b2 as ge, b3 as pe, ax as Ce, aA as he, a8 as ye, a9 as ve, b4 as Ee, Q as R, b5 as S } from "./index-C6GX-Z8i.js";
import { d as be } from "./LexicalNestedComposer.prod-Dfuux-jB.js";
import { useState as Y, useMemo as ke, useLayoutEffect as I, useEffect as w, Suspense as we, useRef as W } from "react";
import { flushSync as De, createPortal as Le } from "react-dom";
const E = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xe = E && "documentMode" in document ? document.documentMode : null, Re = !(!E || !("InputEvent" in window) || xe) && "getTargetRanges" in new window.InputEvent("input"), Se = E && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), $e = E && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ne = E && /^(?=.*Chrome).*/i.test(navigator.userAgent), Pe = E && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ne;
function X(n, t) {
  t.update(() => {
    if (n !== null) {
      const e = le(n, KeyboardEvent) ? null : n.clipboardData, s = i();
      if (s !== null && e != null) {
        n.preventDefault();
        const a = ue(t);
        a !== null && e.setData("text/html", a), e.setData("text/plain", s.getTextContent());
      }
    }
  });
}
function Te(n) {
  return P(n.registerCommand(x, (t) => {
    const e = i();
    return !!l(e) && (e.deleteCharacter(t), !0);
  }, d), n.registerCommand(ce, (t) => {
    const e = i();
    return !!l(e) && (e.deleteWord(t), !0);
  }, d), n.registerCommand(ie, (t) => {
    const e = i();
    return !!l(e) && (e.deleteLine(t), !0);
  }, d), n.registerCommand(ae, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (typeof t == "string") e.insertText(t);
    else {
      const s = t.dataTransfer;
      if (s != null) M(s, e);
      else {
        const a = t.data;
        a && e.insertText(a);
      }
    }
    return !0;
  }, d), n.registerCommand(se, () => {
    const t = i();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(B, (t) => {
    const e = i();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(oe, () => {
    const t = i();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(re, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!O(e, !0) && (s.preventDefault(), A(e, a, !0), !0);
  }, d), n.registerCommand(ne, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!O(e, !1) && (s.preventDefault(), A(e, a, !1), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !0));
  }, d), n.registerCommand(ee, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !1));
  }, d), n.registerCommand(q, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (t !== null) {
      if (($e || Se || Pe) && Re) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(B, !1);
  }, d), n.registerCommand(G, () => (J(), !0), d), n.registerCommand(F, (t) => {
    const e = i();
    return !!l(e) && (X(t, n), !0);
  }, d), n.registerCommand(Z, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      X(s, a), a.update(() => {
        const r = i();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(Q, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      s.preventDefault(), a.update(() => {
        const r = i(), { clipboardData: f } = s;
        f != null && l(r) && M(f, r);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(H, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(j, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const N = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I : w;
function z(n) {
  return n.getEditorState().read(me(n.isComposing()));
}
function _e({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = T(), a = function(r, f) {
    const [m, y] = Y(() => r.getDecorators());
    return N(() => r.registerDecoratorListener((v) => {
      De(() => {
        y(v);
      });
    }), [r]), w(() => {
      y(r.getDecorators());
    }, [r]), ke(() => {
      const v = [], D = Object.keys(m);
      for (let b = 0; b < D.length; b++) {
        const k = D[b], o = C(f, { onError: (c) => r._onError(c), children: C(we, { fallback: null, children: m[k] }) }), u = r.getElementByKey(k);
        u !== null && v.push(Le(o, u, k));
      }
      return v;
    }, [f, m, r]);
  }(s, e);
  return function(r) {
    N(() => P(Te(r), de(r)), [r]);
  }(s), $(V, { children: [n, C(Me, { content: t }), a] });
}
function Me({ content: n }) {
  const [t] = T(), e = function(a) {
    const [r, f] = Y(() => z(a));
    return N(() => {
      function m() {
        const y = z(a);
        f(y);
      }
      return m(), P(a.registerUpdateListener(() => {
        m();
      }), a.registerEditableListener(() => {
        m();
      }));
    }, [a]), r;
  }(t), s = fe();
  return e ? typeof n == "function" ? n(s) : n : null;
}
const Be = ge ? I : w, Oe = {
  ...pe,
  paragraph: "st__paragraph"
};
function L(n, t) {
  const e = n.style, s = t.rootElementRect, a = s !== null ? s.left : 0, r = s !== null ? s.top : 0;
  e.top = r + t.y + "px", e.left = a + t.x + "px";
}
function Ie({
  x: n,
  y: t,
  nodeKey: e,
  color: s,
  caption: a
}) {
  const [r] = T(), f = W(null), m = W({
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
  }, [n, t]), Be(() => {
    const o = m.current, u = new ResizeObserver((h) => {
      for (let p = 0; p < h.length; p++) {
        const K = h[p], { target: U } = K;
        o.rootElementRect = U.getBoundingClientRect();
        const _ = f.current;
        _ !== null && L(_, o);
      }
    }), c = r.registerRootListener(
      (h, p) => {
        p !== null && u.unobserve(p), h !== null && u.observe(h);
      }
    ), g = () => {
      const h = r.getRootElement(), p = f.current;
      h !== null && p !== null && (o.rootElementRect = h.getBoundingClientRect(), L(p, o));
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
  const y = (o) => {
    const u = f.current, c = m.current, g = c.rootElementRect;
    u !== null && c.isDragging && g !== null && (c.x = o.pageX - c.offsetX - g.left, c.y = o.pageY - c.offsetY - g.top, L(u, c));
  }, v = (o) => {
    const u = f.current, c = m.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), r.update(() => {
      const g = R(e);
      S(g) && g.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", v);
  }, D = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.remove();
    });
  }, b = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.toggleColor();
    });
  }, { historyState: k } = Ce();
  return /* @__PURE__ */ C("div", { ref: f, className: "doc-editor-sticky-note-container", children: /* @__PURE__ */ $(
    "div",
    {
      className: `sticky-note ${s}`,
      onPointerDown: (o) => {
        const u = f.current;
        if (u == null || o.button === 2 || o.target !== u.firstChild)
          return;
        const c = u, g = m.current;
        if (c !== null && r.isEditable()) {
          const { top: h, left: p } = c.getBoundingClientRect();
          g.offsetX = o.clientX - p, g.offsetY = o.clientY - h, g.isDragging = !0, c.classList.add("dragging"), document.addEventListener("pointermove", y), document.addEventListener("pointerup", v), o.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ C(
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
        /* @__PURE__ */ C(
          "button",
          {
            type: "button",
            disabled: !r.isEditable(),
            onClick: b,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ C("i", { className: "doc-editor-icon bucket" })
          }
        ),
        /* @__PURE__ */ $(
          be,
          {
            initialEditor: a,
            initialTheme: Oe,
            children: [
              /* @__PURE__ */ C(he, { externalHistoryState: k }),
              /* @__PURE__ */ C(
                _e,
                {
                  contentEditable: /* @__PURE__ */ C(Ee, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ C(ve, { className: "StickyNode__placeholder", children: "What's up?" }),
                  ErrorBoundary: ye
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
  Ie as default,
  L as positionSticky
};
