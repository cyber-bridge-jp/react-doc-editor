import { N as $, D as H, R as i, ah as l, ai as d, aj as U, ak as q, al as B, am as F, an as G, ao as V, ap as J, d as Q, aq as T, e as Z, ar as L, k as ee, as as te, at as _, au as A, av as ne, aw as re, z as oe, ax as se, A as ae, E as ie, ay as ce, az as le, u as N, j as m, aA as ue, aB as de, aC as fe, aD as me, aE as ge, q as pe, W as Ce, g as he, P as ye, aF as ve, C as R, aG as j } from "./index-DwhukDPk.js";
import { d as Ee } from "./LexicalNestedComposer.prod-Dzez1nJj.js";
import { useState as Y, useMemo as xe, useLayoutEffect as I, useEffect as w, Suspense as ke, useRef as z } from "react";
import { flushSync as we, createPortal as De } from "react-dom";
const E = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, be = E && "documentMode" in document ? document.documentMode : null, Le = !(!E || !("InputEvent" in window) || be) && "getTargetRanges" in new window.InputEvent("input"), Re = E && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), M = E && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, je = E && /^(?=.*Chrome).*/i.test(navigator.userAgent), Se = E && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !je;
function W(n, t) {
  t.update(() => {
    if (n !== null) {
      const e = ce(n, KeyboardEvent) ? null : n.clipboardData, s = i();
      if (s !== null && e != null) {
        n.preventDefault();
        const a = le(t);
        a !== null && e.setData("text/html", a), e.setData("text/plain", s.getTextContent());
      }
    }
  });
}
function $e(n) {
  return $(n.registerCommand(L, (t) => {
    const e = i();
    return !!l(e) && (e.deleteCharacter(t), !0);
  }, d), n.registerCommand(ie, (t) => {
    const e = i();
    return !!l(e) && (e.deleteWord(t), !0);
  }, d), n.registerCommand(ae, (t) => {
    const e = i();
    return !!l(e) && (e.deleteLine(t), !0);
  }, d), n.registerCommand(se, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (typeof t == "string") e.insertText(t);
    else {
      const s = t.dataTransfer;
      if (s != null) B(s, e);
      else {
        const a = t.data;
        a && e.insertText(a);
      }
    }
    return !0;
  }, d), n.registerCommand(oe, () => {
    const t = i();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(T, (t) => {
    const e = i();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(re, () => {
    const t = i();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(ne, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!_(e, !0) && (s.preventDefault(), A(e, a, !0), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!_(e, !1) && (s.preventDefault(), A(e, a, !1), !0);
  }, d), n.registerCommand(ee, (t) => {
    const e = i();
    return !!l(e) && (!M || navigator.language !== "ko-KR") && (t.preventDefault(), n.dispatchCommand(L, !0));
  }, d), n.registerCommand(Z, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(L, !1));
  }, d), n.registerCommand(Q, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (t !== null) {
      if ((M || Re || Se) && Le) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(T, !1);
  }, d), n.registerCommand(V, () => (J(), !0), d), n.registerCommand(G, (t) => {
    const e = i();
    return !!l(e) && (W(t, n), !0);
  }, d), n.registerCommand(F, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      W(s, a), a.update(() => {
        const r = i();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(q, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      s.preventDefault(), a.update(() => {
        const r = i(), { clipboardData: f } = s;
        f != null && l(r) && B(f, r);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(U, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(H, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const S = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I : w;
function X(n) {
  return n.getEditorState().read(fe(n.isComposing()));
}
function Ne({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = N(), a = function(r, f) {
    const [g, y] = Y(() => r.getDecorators());
    return S(() => r.registerDecoratorListener((v) => {
      we(() => {
        y(v);
      });
    }), [r]), w(() => {
      y(r.getDecorators());
    }, [r]), xe(() => {
      const v = [], D = Object.keys(g);
      for (let x = 0; x < D.length; x++) {
        const k = D[x], o = m.jsx(f, { onError: (c) => r._onError(c), children: m.jsx(ke, { fallback: null, children: g[k] }) }), u = r.getElementByKey(k);
        u !== null && v.push(De(o, u, k));
      }
      return v;
    }, [f, g, r]);
  }(s, e);
  return function(r) {
    S(() => $($e(r), ue(r)), [r]);
  }(s), m.jsxs(m.Fragment, { children: [n, m.jsx(Pe, { content: t }), a] });
}
function Pe({ content: n }) {
  const [t] = N(), e = function(a) {
    const [r, f] = Y(() => X(a));
    return S(() => {
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
  }(t), s = de();
  return e ? typeof n == "function" ? n(s) : n : null;
}
const Be = me ? I : w, Te = {
  ...ge,
  paragraph: "st__paragraph"
};
function b(n, t) {
  const e = n.style, s = t.rootElementRect, a = s !== null ? s.left : 0, r = s !== null ? s.top : 0;
  e.top = r + t.y + "px", e.left = a + t.x + "px";
}
function We({
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
  w(() => {
    const o = g.current;
    o.x = n, o.y = t;
    const u = f.current;
    u !== null && b(u, o);
  }, [n, t]), Be(() => {
    const o = g.current, u = new ResizeObserver((h) => {
      for (let C = 0; C < h.length; C++) {
        const K = h[C], { target: O } = K;
        o.rootElementRect = O.getBoundingClientRect();
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
    const u = f.current, c = g.current, p = c.rootElementRect;
    u !== null && c.isDragging && p !== null && (c.x = o.pageX - c.offsetX - p.left, c.y = o.pageY - c.offsetY - p.top, b(u, c));
  }, v = (o) => {
    const u = f.current, c = g.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), r.update(() => {
      const p = R(e);
      j(p) && p.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", v);
  }, D = () => {
    r.update(() => {
      const o = R(e);
      j(o) && o.remove();
    });
  }, x = () => {
    r.update(() => {
      const o = R(e);
      j(o) && o.toggleColor();
    });
  }, { historyState: k } = pe();
  return /* @__PURE__ */ m.jsx("div", { ref: f, className: "sticky-note-container", children: /* @__PURE__ */ m.jsxs(
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
            children: /* @__PURE__ */ m.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ m.jsxs(
          Ee,
          {
            initialEditor: a,
            initialTheme: Te,
            children: [
              /* @__PURE__ */ m.jsx(Ce, { externalHistoryState: k }),
              /* @__PURE__ */ m.jsx(
                Ne,
                {
                  contentEditable: /* @__PURE__ */ m.jsx(ve, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ m.jsx(ye, { className: "StickyNode__placeholder", children: "What's up?" }),
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
  We as default,
  b as positionSticky
};
