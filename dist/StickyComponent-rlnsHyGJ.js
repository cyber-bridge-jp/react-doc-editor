import { L as $, O as K, M as i, ah as l, ai as d, aj as U, ak as F, al as T, am as H, an as V, ao as q, ap as G, d as J, aq as B, w as Q, ar as L, k as Z, as as ee, at as M, au as _, av as te, aw as ne, z as re, ax as oe, A as se, C as ae, ay as ie, az as ce, u as N, j as m, aA as le, aB as ue, aC as de, aD as fe, aE as me, t as ge, X as pe, g as Ce, P as he, aF as ye, S as R, aG as S } from "./index-woOfvq2D.js";
import { d as ve } from "./LexicalNestedComposer.prod-snPYp0-8.js";
import { useState as O, useMemo as Ee, useLayoutEffect as W, useEffect as k, Suspense as xe, useRef as z } from "react";
import { flushSync as we, createPortal as ke } from "react-dom";
const E = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, De = E && "documentMode" in document ? document.documentMode : null, be = !(!E || !("InputEvent" in window) || De) && "getTargetRanges" in new window.InputEvent("input"), Le = E && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Re = E && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Se = E && /^(?=.*Chrome).*/i.test(navigator.userAgent), je = E && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Se;
function A(n, t) {
  t.update(() => {
    if (n !== null) {
      const e = ie(n, KeyboardEvent) ? null : n.clipboardData, s = i();
      if (s !== null && e != null) {
        n.preventDefault();
        const a = ce(t);
        a !== null && e.setData("text/html", a), e.setData("text/plain", s.getTextContent());
      }
    }
  });
}
function $e(n) {
  return $(n.registerCommand(L, (t) => {
    const e = i();
    return !!l(e) && (e.deleteCharacter(t), !0);
  }, d), n.registerCommand(ae, (t) => {
    const e = i();
    return !!l(e) && (e.deleteWord(t), !0);
  }, d), n.registerCommand(se, (t) => {
    const e = i();
    return !!l(e) && (e.deleteLine(t), !0);
  }, d), n.registerCommand(oe, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (typeof t == "string") e.insertText(t);
    else {
      const s = t.dataTransfer;
      if (s != null) T(s, e);
      else {
        const a = t.data;
        a && e.insertText(a);
      }
    }
    return !0;
  }, d), n.registerCommand(re, () => {
    const t = i();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(B, (t) => {
    const e = i();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(ne, () => {
    const t = i();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!M(e, !0) && (s.preventDefault(), _(e, a, !0), !0);
  }, d), n.registerCommand(ee, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!M(e, !1) && (s.preventDefault(), _(e, a, !1), !0);
  }, d), n.registerCommand(Z, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(L, !0));
  }, d), n.registerCommand(Q, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(L, !1));
  }, d), n.registerCommand(J, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (t !== null) {
      if ((Re || Le || je) && be) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(B, !1);
  }, d), n.registerCommand(q, () => (G(), !0), d), n.registerCommand(V, (t) => {
    const e = i();
    return !!l(e) && (A(t, n), !0);
  }, d), n.registerCommand(H, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      A(s, a), a.update(() => {
        const r = i();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(F, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      s.preventDefault(), a.update(() => {
        const r = i(), { clipboardData: f } = s;
        f != null && l(r) && T(f, r);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(U, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(K, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const j = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? W : k;
function X(n) {
  return n.getEditorState().read(de(n.isComposing()));
}
function Ne({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = N(), a = function(r, f) {
    const [g, y] = O(() => r.getDecorators());
    return j(() => r.registerDecoratorListener((v) => {
      we(() => {
        y(v);
      });
    }), [r]), k(() => {
      y(r.getDecorators());
    }, [r]), Ee(() => {
      const v = [], D = Object.keys(g);
      for (let x = 0; x < D.length; x++) {
        const w = D[x], o = m.jsx(f, { onError: (c) => r._onError(c), children: m.jsx(xe, { fallback: null, children: g[w] }) }), u = r.getElementByKey(w);
        u !== null && v.push(ke(o, u, w));
      }
      return v;
    }, [f, g, r]);
  }(s, e);
  return function(r) {
    j(() => $($e(r), le(r)), [r]);
  }(s), m.jsxs(m.Fragment, { children: [n, m.jsx(Pe, { content: t }), a] });
}
function Pe({ content: n }) {
  const [t] = N(), e = function(a) {
    const [r, f] = O(() => X(a));
    return j(() => {
      function g() {
        const y = X(a);
        f(y);
      }
      return g(), $(a.registerUpdateListener(() => {
        g();
      }), a.registerEditableListener(() => {
        g();
      }));
    }, [a]), r;
  }(t), s = ue();
  return e ? typeof n == "function" ? n(s) : n : null;
}
const Te = fe ? W : k, Be = {
  ...me,
  paragraph: "st__paragraph"
};
function b(n, t) {
  const e = n.style, s = t.rootElementRect, a = s !== null ? s.left : 0, r = s !== null ? s.top : 0;
  e.top = r + t.y + "px", e.left = a + t.x + "px";
}
function Xe({
  x: n,
  y: t,
  nodeKey: e,
  color: s,
  caption: a
}) {
  const [r] = N(), f = z(null), g = z({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  k(() => {
    const o = g.current;
    o.x = n, o.y = t;
    const u = f.current;
    u !== null && b(u, o);
  }, [n, t]), Te(() => {
    const o = g.current, u = new ResizeObserver((h) => {
      for (let C = 0; C < h.length; C++) {
        const Y = h[C], { target: I } = Y;
        o.rootElementRect = I.getBoundingClientRect();
        const P = f.current;
        P !== null && b(P, o);
      }
    }), c = r.registerRootListener(
      (h, C) => {
        C !== null && u.unobserve(C), h !== null && u.observe(h);
      }
    ), p = () => {
      const h = r.getRootElement(), C = f.current;
      h !== null && C !== null && (o.rootElementRect = h.getBoundingClientRect(), b(C, o));
    };
    return window.addEventListener("resize", p), () => {
      window.removeEventListener("resize", p), c();
    };
  }, [r]), k(() => {
    const o = f.current;
    o !== null && setTimeout(() => {
      o.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const y = (o) => {
    const u = f.current, c = g.current, p = c.rootElementRect;
    u !== null && c.isDragging && p !== null && (c.x = o.pageX - c.offsetX - p.left, c.y = o.pageY - c.offsetY - p.top, b(u, c));
  }, v = (o) => {
    const u = f.current, c = g.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), r.update(() => {
      const p = R(e);
      S(p) && p.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", v);
  }, D = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.remove();
    });
  }, x = () => {
    r.update(() => {
      const o = R(e);
      S(o) && o.toggleColor();
    });
  }, { historyState: w } = ge();
  return /* @__PURE__ */ m.jsx("div", { ref: f, className: "doc-editor-sticky-note-container", children: /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `sticky-note ${s}`,
      onPointerDown: (o) => {
        const u = f.current;
        if (u == null || o.button === 2 || o.target !== u.firstChild)
          return;
        const c = u, p = g.current;
        if (c !== null && r.isEditable()) {
          const { top: h, left: C } = c.getBoundingClientRect();
          p.offsetX = o.clientX - C, p.offsetY = o.clientY - h, p.isDragging = !0, c.classList.add("dragging"), document.addEventListener("pointermove", y), document.addEventListener("pointerup", v), o.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ m.jsx(
          "button",
          {
            disabled: !r.isEditable(),
            onClick: D,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            disabled: !r.isEditable(),
            onClick: x,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ m.jsx("i", { className: "doc-editor-icon bucket" })
          }
        ),
        /* @__PURE__ */ m.jsxs(
          ve,
          {
            initialEditor: a,
            initialTheme: Be,
            children: [
              /* @__PURE__ */ m.jsx(pe, { externalHistoryState: w }),
              /* @__PURE__ */ m.jsx(
                Ne,
                {
                  contentEditable: /* @__PURE__ */ m.jsx(ye, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ m.jsx(he, { className: "StickyNode__placeholder", children: "What's up?" }),
                  ErrorBoundary: Ce
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
  Xe as default,
  b as positionSticky
};
