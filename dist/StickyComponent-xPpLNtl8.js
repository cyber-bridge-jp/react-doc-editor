import { jsx as C, jsxs as $, Fragment as U } from "react/jsx-runtime";
import { L as P, O as q, M as i, ag as l, ah as d, ai as F, aj as H, ak as M, al as V, am as G, an as J, ao as Q, d as Z, ap as _, w as ee, aq as x, k as te, ar as ne, as as z, at as A, au as re, av as oe, y as se, aw as ae, z as ie, A as ce, ax as le, ay as ue, u as T, az as de, aA as fe, aB as me, aC as ge, aD as pe, q as Ce, W as he, g as ye, P as ve, aE as Ee, S, aF as R } from "./index-Bec-pY47.js";
import { d as we } from "./LexicalNestedComposer.prod-ClogiqCZ.js";
import { useState as Y, useMemo as ke, useLayoutEffect as j, useEffect as D, Suspense as De, useRef as W } from "react";
import { flushSync as be, createPortal as Le } from "react-dom";
const E = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xe = E && "documentMode" in document ? document.documentMode : null, Se = !(!E || !("InputEvent" in window) || xe) && "getTargetRanges" in new window.InputEvent("input"), Re = E && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), $e = E && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ne = E && /^(?=.*Chrome).*/i.test(navigator.userAgent), Pe = E && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ne;
function O(n, t) {
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
  }, d), n.registerCommand(_, (t) => {
    const e = i();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(oe, () => {
    const t = i();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(re, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!z(e, !0) && (s.preventDefault(), A(e, a, !0), !0);
  }, d), n.registerCommand(ne, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!z(e, !1) && (s.preventDefault(), A(e, a, !1), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !0));
  }, d), n.registerCommand(ee, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(x, !1));
  }, d), n.registerCommand(Z, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (t !== null) {
      if (($e || Re || Pe) && Se) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(_, !1);
  }, d), n.registerCommand(J, () => (Q(), !0), d), n.registerCommand(G, (t) => {
    const e = i();
    return !!l(e) && (O(t, n), !0);
  }, d), n.registerCommand(V, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      O(s, a), a.update(() => {
        const r = i();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(H, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      s.preventDefault(), a.update(() => {
        const r = i(), { clipboardData: f } = s;
        f != null && l(r) && M(f, r);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(F, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(q, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const N = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? j : D;
function X(n) {
  return n.getEditorState().read(me(n.isComposing()));
}
function Be({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = T(), a = function(r, f) {
    const [m, y] = Y(() => r.getDecorators());
    return N(() => r.registerDecoratorListener((v) => {
      be(() => {
        y(v);
      });
    }), [r]), D(() => {
      y(r.getDecorators());
    }, [r]), ke(() => {
      const v = [], b = Object.keys(m);
      for (let w = 0; w < b.length; w++) {
        const k = b[w], o = C(f, { onError: (c) => r._onError(c), children: C(De, { fallback: null, children: m[k] }) }), u = r.getElementByKey(k);
        u !== null && v.push(Le(o, u, k));
      }
      return v;
    }, [f, m, r]);
  }(s, e);
  return function(r) {
    N(() => P(Te(r), de(r)), [r]);
  }(s), $(U, { children: [n, C(Me, { content: t }), a] });
}
function Me({ content: n }) {
  const [t] = T(), e = function(a) {
    const [r, f] = Y(() => X(a));
    return N(() => {
      function m() {
        const y = X(a);
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
const _e = ge ? j : D, ze = {
  ...pe,
  paragraph: "st__paragraph"
};
function L(n, t) {
  const e = n.style, s = t.rootElementRect, a = s !== null ? s.left : 0, r = s !== null ? s.top : 0;
  e.top = r + t.y + "px", e.left = a + t.x + "px";
}
function je({
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
  D(() => {
    const o = m.current;
    o.x = n, o.y = t;
    const u = f.current;
    u !== null && L(u, o);
  }, [n, t]), _e(() => {
    const o = m.current, u = new ResizeObserver((h) => {
      for (let p = 0; p < h.length; p++) {
        const I = h[p], { target: K } = I;
        o.rootElementRect = K.getBoundingClientRect();
        const B = f.current;
        B !== null && L(B, o);
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
  }, [r]), D(() => {
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
      const g = S(e);
      R(g) && g.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", v);
  }, b = () => {
    r.update(() => {
      const o = S(e);
      R(o) && o.remove();
    });
  }, w = () => {
    r.update(() => {
      const o = S(e);
      R(o) && o.toggleColor();
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
            disabled: !r.isEditable(),
            onClick: b,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ C(
          "button",
          {
            disabled: !r.isEditable(),
            onClick: w,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ C("i", { className: "doc-editor-icon bucket" })
          }
        ),
        /* @__PURE__ */ $(
          we,
          {
            initialEditor: a,
            initialTheme: ze,
            children: [
              /* @__PURE__ */ C(he, { externalHistoryState: k }),
              /* @__PURE__ */ C(
                Be,
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
  je as default,
  L as positionSticky
};
