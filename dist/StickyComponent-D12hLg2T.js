import { jsx as C, jsxs as $, Fragment as V } from "react/jsx-runtime";
import { V as P, a2 as j, O as i, aH as l, aI as d, aJ as H, aK as Q, aL as B, aM as Z, aN as F, aO as J, aP as q, Z as G, aQ as M, a1 as ee, aR as R, a0 as te, aS as ne, aT as O, aU as W, aV as re, aW as oe, aX as se, aY as ae, aZ as ie, a_ as ce, a$ as le, b0 as ue, K as T, b1 as de, al as fe, b2 as me, b3 as ge, b4 as pe, ay as Ce, aB as ye, a9 as he, aa as ve, b5 as Ee, Q as S, b6 as x } from "./index-CNvc0npE.js";
import { d as be } from "./LexicalNestedComposer.prod-CNlR-tv4.js";
import { useState as Y, useMemo as we, useLayoutEffect as I, useEffect as k, Suspense as ke, useRef as X } from "react";
import { flushSync as De, createPortal as Le } from "react-dom";
const E = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Re = E && "documentMode" in document ? document.documentMode : null, Se = !(!E || !("InputEvent" in window) || Re) && "getTargetRanges" in new window.InputEvent("input"), xe = E && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), $e = E && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ne = E && /^(?=.*Chrome).*/i.test(navigator.userAgent), Pe = E && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Ne;
function z(n, t) {
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
  return P(n.registerCommand(R, (t) => {
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
      if (s != null) B(s, e);
      else {
        const a = t.data;
        a && e.insertText(a);
      }
    }
    return !0;
  }, d), n.registerCommand(se, () => {
    const t = i();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(M, (t) => {
    const e = i();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(oe, () => {
    const t = i();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(re, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!O(e, !0) && (s.preventDefault(), W(e, a, !0), !0);
  }, d), n.registerCommand(ne, (t) => {
    const e = i();
    if (!l(e)) return !1;
    const s = t, a = s.shiftKey;
    return !!O(e, !1) && (s.preventDefault(), W(e, a, !1), !0);
  }, d), n.registerCommand(te, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(R, !0));
  }, d), n.registerCommand(ee, (t) => {
    const e = i();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(R, !1));
  }, d), n.registerCommand(G, (t) => {
    const e = i();
    if (!l(e)) return !1;
    if (t !== null) {
      if (($e || xe || Pe) && Se) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(M, !1);
  }, d), n.registerCommand(J, () => (q(), !0), d), n.registerCommand(F, (t) => {
    const e = i();
    return !!l(e) && (z(t, n), !0);
  }, d), n.registerCommand(Z, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      z(s, a), a.update(() => {
        const r = i();
        l(r) && r.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(Q, (t) => {
    const e = i();
    return !!l(e) && (function(s, a) {
      s.preventDefault(), a.update(() => {
        const r = i(), { clipboardData: f } = s;
        f != null && l(r) && B(f, r);
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
const N = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? I : k;
function A(n) {
  return n.getEditorState().read(me(n.isComposing()));
}
function _e({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = T(), a = function(r, f) {
    const [m, h] = Y(() => r.getDecorators());
    return N(() => r.registerDecoratorListener((v) => {
      De(() => {
        h(v);
      });
    }), [r]), k(() => {
      h(r.getDecorators());
    }, [r]), we(() => {
      const v = [], D = Object.keys(m);
      for (let b = 0; b < D.length; b++) {
        const w = D[b], o = C(f, { onError: (c) => r._onError(c), children: C(ke, { fallback: null, children: m[w] }) }), u = r.getElementByKey(w);
        u !== null && v.push(Le(o, u, w));
      }
      return v;
    }, [f, m, r]);
  }(s, e);
  return function(r) {
    N(() => P(Te(r), de(r)), [r]);
  }(s), $(V, { children: [n, C(Be, { content: t }), a] });
}
function Be({ content: n }) {
  const [t] = T(), e = function(a) {
    const [r, f] = Y(() => A(a));
    return N(() => {
      function m() {
        const h = A(a);
        f(h);
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
const Me = ge ? I : k, Oe = {
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
  const [r] = T(), f = X(null), m = X({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  k(() => {
    const o = m.current;
    o.x = n, o.y = t;
    const u = f.current;
    u !== null && L(u, o);
  }, [n, t]), Me(() => {
    const o = m.current, u = new ResizeObserver((y) => {
      for (let p = 0; p < y.length; p++) {
        const K = y[p], { target: U } = K;
        o.rootElementRect = U.getBoundingClientRect();
        const _ = f.current;
        _ !== null && L(_, o);
      }
    }), c = r.registerRootListener(
      (y, p) => {
        p !== null && u.unobserve(p), y !== null && u.observe(y);
      }
    ), g = () => {
      const y = r.getRootElement(), p = f.current;
      y !== null && p !== null && (o.rootElementRect = y.getBoundingClientRect(), L(p, o));
    };
    return window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g), c();
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
  const h = (o) => {
    const u = f.current, c = m.current, g = c.rootElementRect;
    u !== null && c.isDragging && g !== null && (c.x = o.pageX - c.offsetX - g.left, c.y = o.pageY - c.offsetY - g.top, L(u, c));
  }, v = (o) => {
    const u = f.current, c = m.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), r.update(() => {
      const g = S(e);
      x(g) && g.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", h), document.removeEventListener("pointerup", v);
  }, D = () => {
    r.update(() => {
      const o = S(e);
      x(o) && o.remove();
    });
  }, b = () => {
    r.update(() => {
      const o = S(e);
      x(o) && o.toggleColor();
    });
  }, { historyState: w } = Ce();
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
          const { top: y, left: p } = c.getBoundingClientRect();
          g.offsetX = o.clientX - p, g.offsetY = o.clientY - y, g.isDragging = !0, c.classList.add("dragging"), document.addEventListener("pointermove", h), document.addEventListener("pointerup", v), o.preventDefault();
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
              /* @__PURE__ */ C(ye, { externalHistoryState: w }),
              /* @__PURE__ */ C(
                _e,
                {
                  contentEditable: /* @__PURE__ */ C(Ee, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ C(ve, { className: "StickyNode__placeholder", children: "What's up?" }),
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
  Ie as default,
  L as positionSticky
};
