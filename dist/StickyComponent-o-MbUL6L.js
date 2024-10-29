import { L as x, N as k, z as S, A as P, C as z, G as H, b, j as f, H as U, I as G, J as F, O as V, Q as J, u as Q, f as q, R as Z, P as ee, g as te, U as v } from "./index-CZheSgaM.js";
import { d as ne } from "./LexicalNestedComposer.prod-Cl7N7kns.js";
import { useState as Y, useEffect as R, useMemo as oe, Suspense as re, useLayoutEffect as K, useRef as j } from "react";
import { flushSync as se, createPortal as ie } from "react-dom";
import { DRAGSTART_COMMAND as ae, $getSelection as a, $isRangeSelection as l, COMMAND_PRIORITY_EDITOR as d, DROP_COMMAND as ce, PASTE_COMMAND as le, CUT_COMMAND as ue, COPY_COMMAND as de, SELECT_ALL_COMMAND as me, $selectAll as fe, KEY_ENTER_COMMAND as ge, INSERT_LINE_BREAK_COMMAND as I, KEY_DELETE_COMMAND as Ce, DELETE_CHARACTER_COMMAND as L, KEY_BACKSPACE_COMMAND as Ee, KEY_ARROW_RIGHT_COMMAND as pe, KEY_ARROW_LEFT_COMMAND as De, INSERT_PARAGRAPH_COMMAND as _e, REMOVE_TEXT_COMMAND as Me, CONTROLLED_TEXT_INSERTION_COMMAND as he, DELETE_LINE_COMMAND as ye, DELETE_WORD_COMMAND as Re, $getNodeByKey as O } from "lexical";
const M = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ae = M && "documentMode" in document ? document.documentMode : null, Ne = !(!M || !("InputEvent" in window) || Ae) && "getTargetRanges" in new window.InputEvent("input"), ve = M && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Le = M && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Oe = M && /^(?=.*Chrome).*/i.test(navigator.userAgent), Te = M && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !Oe;
function $(n, t) {
  t.update(() => {
    if (n !== null) {
      const e = z(n, KeyboardEvent) ? null : n.clipboardData, s = a();
      if (s !== null && e != null) {
        n.preventDefault();
        const i = H(t);
        i !== null && e.setData("text/html", i), e.setData("text/plain", s.getTextContent());
      }
    }
  });
}
function xe(n) {
  return x(n.registerCommand(L, (t) => {
    const e = a();
    return !!l(e) && (e.deleteCharacter(t), !0);
  }, d), n.registerCommand(Re, (t) => {
    const e = a();
    return !!l(e) && (e.deleteWord(t), !0);
  }, d), n.registerCommand(ye, (t) => {
    const e = a();
    return !!l(e) && (e.deleteLine(t), !0);
  }, d), n.registerCommand(he, (t) => {
    const e = a();
    if (!l(e)) return !1;
    if (typeof t == "string") e.insertText(t);
    else {
      const s = t.dataTransfer;
      if (s != null) k(s, e);
      else {
        const i = t.data;
        i && e.insertText(i);
      }
    }
    return !0;
  }, d), n.registerCommand(Me, () => {
    const t = a();
    return !!l(t) && (t.removeText(), !0);
  }, d), n.registerCommand(I, (t) => {
    const e = a();
    return !!l(e) && (e.insertLineBreak(t), !0);
  }, d), n.registerCommand(_e, () => {
    const t = a();
    return !!l(t) && (t.insertLineBreak(), !0);
  }, d), n.registerCommand(De, (t) => {
    const e = a();
    if (!l(e)) return !1;
    const s = t, i = s.shiftKey;
    return !!S(e, !0) && (s.preventDefault(), P(e, i, !0), !0);
  }, d), n.registerCommand(pe, (t) => {
    const e = a();
    if (!l(e)) return !1;
    const s = t, i = s.shiftKey;
    return !!S(e, !1) && (s.preventDefault(), P(e, i, !1), !0);
  }, d), n.registerCommand(Ee, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(L, !0));
  }, d), n.registerCommand(Ce, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), n.dispatchCommand(L, !1));
  }, d), n.registerCommand(ge, (t) => {
    const e = a();
    if (!l(e)) return !1;
    if (t !== null) {
      if ((Le || ve || Te) && Ne) return !1;
      t.preventDefault();
    }
    return n.dispatchCommand(I, !1);
  }, d), n.registerCommand(me, () => (fe(), !0), d), n.registerCommand(de, (t) => {
    const e = a();
    return !!l(e) && ($(t, n), !0);
  }, d), n.registerCommand(ue, (t) => {
    const e = a();
    return !!l(e) && (function(s, i) {
      $(s, i), i.update(() => {
        const o = a();
        l(o) && o.removeText();
      });
    }(t, n), !0);
  }, d), n.registerCommand(le, (t) => {
    const e = a();
    return !!l(e) && (function(s, i) {
      s.preventDefault(), i.update(() => {
        const o = a(), { clipboardData: m } = s;
        m != null && l(o) && k(m, o);
      }, { tag: "paste" });
    }(t, n), !0);
  }, d), n.registerCommand(ce, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), !0);
  }, d), n.registerCommand(ae, (t) => {
    const e = a();
    return !!l(e) && (t.preventDefault(), !0);
  }, d));
}
const T = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? K : R;
function B(n) {
  return n.getEditorState().read(F(n.isComposing()));
}
function be({ contentEditable: n, placeholder: t = null, ErrorBoundary: e }) {
  const [s] = b(), i = function(o, m) {
    const [g, D] = Y(() => o.getDecorators());
    return T(() => o.registerDecoratorListener((_) => {
      se(() => {
        D(_);
      });
    }), [o]), R(() => {
      D(o.getDecorators());
    }, [o]), oe(() => {
      const _ = [], A = Object.keys(g);
      for (let h = 0; h < A.length; h++) {
        const y = A[h], r = f.jsx(m, { onError: (c) => o._onError(c), children: f.jsx(re, { fallback: null, children: g[y] }) }), u = o.getElementByKey(y);
        u !== null && _.push(ie(r, u, y));
      }
      return _;
    }, [m, g, o]);
  }(s, e);
  return function(o) {
    T(() => x(xe(o), U(o)), [o]);
  }(s), f.jsxs(f.Fragment, { children: [n, f.jsx(we, { content: t }), i] });
}
function we({ content: n }) {
  const [t] = b(), e = function(i) {
    const [o, m] = Y(() => B(i));
    return T(() => {
      function g() {
        const D = B(i);
        m(D);
      }
      return g(), x(i.registerUpdateListener(() => {
        g();
      }), i.registerEditableListener(() => {
        g();
      }));
    }, [i]), o;
  }(t), s = G();
  return e ? typeof n == "function" ? n(s) : n : null;
}
const ke = V ? K : R, Se = {
  ...J,
  paragraph: "st__paragraph"
};
function N(n, t) {
  const e = n.style, s = t.rootElementRect, i = s !== null ? s.left : 0, o = s !== null ? s.top : 0;
  e.top = o + t.y + "px", e.left = i + t.x + "px";
}
function Ye({
  x: n,
  y: t,
  nodeKey: e,
  color: s,
  caption: i
}) {
  const [o] = b(), m = j(null), g = j({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  R(() => {
    const r = g.current;
    r.x = n, r.y = t;
    const u = m.current;
    u !== null && N(u, r);
  }, [n, t]), ke(() => {
    const r = g.current, u = new ResizeObserver((p) => {
      for (let E = 0; E < p.length; E++) {
        const W = p[E], { target: X } = W;
        r.rootElementRect = X.getBoundingClientRect();
        const w = m.current;
        w !== null && N(w, r);
      }
    }), c = o.registerRootListener(
      (p, E) => {
        E !== null && u.unobserve(E), p !== null && u.observe(p);
      }
    ), C = () => {
      const p = o.getRootElement(), E = m.current;
      p !== null && E !== null && (r.rootElementRect = p.getBoundingClientRect(), N(E, r));
    };
    return window.addEventListener("resize", C), () => {
      window.removeEventListener("resize", C), c();
    };
  }, [o]), R(() => {
    const r = m.current;
    r !== null && setTimeout(() => {
      r.style.setProperty(
        "transition",
        "top 0.3s ease 0s, left 0.3s ease 0s"
      );
    }, 500);
  }, []);
  const D = (r) => {
    const u = m.current, c = g.current, C = c.rootElementRect;
    u !== null && c.isDragging && C !== null && (c.x = r.pageX - c.offsetX - C.left, c.y = r.pageY - c.offsetY - C.top, N(u, c));
  }, _ = (r) => {
    const u = m.current, c = g.current;
    u !== null && (c.isDragging = !1, u.classList.remove("dragging"), o.update(() => {
      const C = O(e);
      v(C) && C.setPosition(c.x, c.y);
    })), document.removeEventListener("pointermove", D), document.removeEventListener("pointerup", _);
  }, A = () => {
    o.update(() => {
      const r = O(e);
      v(r) && r.remove();
    });
  }, h = () => {
    o.update(() => {
      const r = O(e);
      v(r) && r.toggleColor();
    });
  }, { historyState: y } = Q();
  return /* @__PURE__ */ f.jsx("div", { ref: m, className: "sticky-note-container", children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `sticky-note ${s}`,
      onPointerDown: (r) => {
        const u = m.current;
        if (u == null || r.button === 2 || r.target !== u.firstChild)
          return;
        const c = u, C = g.current;
        if (c !== null && o.isEditable()) {
          const { top: p, left: E } = c.getBoundingClientRect();
          C.offsetX = r.clientX - E, C.offsetY = r.clientY - p, C.isDragging = !0, c.classList.add("dragging"), document.addEventListener("pointermove", D), document.addEventListener("pointerup", _), r.preventDefault();
        }
      },
      children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            disabled: !o.isEditable(),
            onClick: A,
            className: "delete",
            "aria-label": "Delete sticky note",
            title: "Delete",
            children: "X"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            disabled: !o.isEditable(),
            onClick: h,
            className: "color",
            "aria-label": "Change sticky note color",
            title: "Color",
            children: /* @__PURE__ */ f.jsx("i", { className: "bucket" })
          }
        ),
        /* @__PURE__ */ f.jsxs(
          ne,
          {
            initialEditor: i,
            initialTheme: Se,
            children: [
              /* @__PURE__ */ f.jsx(q, { externalHistoryState: y }),
              /* @__PURE__ */ f.jsx(
                be,
                {
                  contentEditable: /* @__PURE__ */ f.jsx(Z, { className: "StickyNode__contentEditable" }),
                  placeholder: /* @__PURE__ */ f.jsx(ee, { className: "StickyNode__placeholder", children: "What's up?" }),
                  ErrorBoundary: te
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
  Ye as default,
  N as positionSticky
};
