import { a6 as le, b as ue, u as de, T as j, M as T, S as v, a7 as R, E as Z, L as ge, c as fe, I as m, d as me, k as pe, w as xe, r as he, e as Ee, t as je, j as r, o as ve, f as Re, V as Ce, W as Se, X as be, h as Ie, g as ke, P as ye, x as De } from "./index-woOfvq2D.js";
import { c as Le } from "./LexicalHashtagPlugin.prod-B8LMvJaj.js";
import { d as Ne } from "./LexicalNestedComposer.prod-snPYp0-8.js";
import { useRef as C, useState as Y, useEffect as H, useCallback as S, Suspense as Pe } from "react";
import { I as Me } from "./ImageResizer-B2kQ01nU.js";
const K = /* @__PURE__ */ new Set(), _e = le();
function $(c, l) {
  const i = c.style;
  i.top = l.y + "px", i.left = l.x + "px";
}
function ze(c) {
  if (!K.has(c))
    throw new Promise((l) => {
      const i = new Image();
      i.src = c, i.onload = () => {
        K.add(c), l(null);
      };
    });
}
function Xe({
  altText: c,
  className: l,
  imageRef: i,
  src: b,
  width: N,
  height: I,
  maxWidth: P
}) {
  return ze(b), /* @__PURE__ */ r.jsx(
    "img",
    {
      className: l || void 0,
      src: b,
      alt: c,
      ref: i,
      style: {
        height: I,
        maxWidth: P,
        width: N
      },
      draggable: "false"
    }
  );
}
function Be({
  src: c,
  altText: l,
  nodeKey: i,
  width: b,
  height: N,
  maxWidth: I,
  resizable: P,
  showCaption: p,
  caption: h,
  captionsEnabled: O,
  isAbsolute: d,
  xOffset: k,
  yOffset: y
}) {
  const D = C(null), M = C(null), x = C(null), [a, u, L] = ue(i), [E, B] = Y(!1), [s] = de(), [_, ee] = Y(null), G = C(null), [F, U] = Y(!1), g = C({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  H(() => {
    const t = g.current;
    t.x = k, t.y = y;
    const e = x.current;
    e !== null && $(e, t);
  }, [k, y]), H(() => {
    if (d) {
      const t = g.current;
      t.x = k, t.y = y;
      const e = x.current;
      e !== null && $(e, t);
    }
  }, [k, y, d]);
  const z = S(
    (t) => {
      if (a && j(T())) {
        t.preventDefault();
        const n = v(i);
        if (R(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, i]
  ), V = S(
    (t) => {
      const e = T(), n = M.current;
      if (a && j(e) && e.getNodes().length === 1) {
        if (p)
          return Z(null), t.preventDefault(), h.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [h, a, p]
  ), W = S(
    (t) => G.current === h || M.current === t.target ? (Z(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [h, s, u]
  ), X = S(
    (t) => {
      const e = t;
      return F && U(!1), E ? !0 : e.target === D.current ? (e.shiftKey ? u(!a) : (L(), u(!0)), !0) : !1;
    },
    [E, a, u, L]
  ), w = S(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === D.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (L(), u(!0), U(!0)));
      });
    },
    [s]
  ), q = (t) => {
    const e = x.current, n = g.current, o = s.getRootElement();
    e && g.current.isDragging && t.target === e.firstChild && (g.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = v(i);
      R(f) && f.setPosition(n.x, n.y);
    })), o == null || o.removeEventListener("pointermove", A), o == null || o.removeEventListener("pointerup", q);
  }, A = (t) => {
    const e = x.current, n = g.current, o = n.rootElementRect;
    e !== null && n.isDragging && o !== null && (n.x = t.pageX - n.offsetX - o.left, n.y = t.pageY - n.offsetY - o.top, $(e, n));
  }, te = (t) => {
    var f;
    const e = x.current, n = g.current, o = s.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ae, left: ce } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ce, n.offsetY = t.pageY - ae, e.classList.add("dragging"), o == null || o.addEventListener("pointermove", A), o == null || o.addEventListener("pointerup", q);
    }
  };
  H(() => {
    let t = !0;
    const e = s.getRootElement(), n = ge(
      s.registerUpdateListener(({ editorState: o }) => {
        t && ee(o.read(() => T()));
      }),
      s.registerCommand(
        Ee,
        (o, f) => (G.current = f, !1),
        m
      ),
      s.registerCommand(
        he,
        X,
        m
      ),
      s.registerCommand(
        _e,
        X,
        m
      ),
      s.registerCommand(
        xe,
        z,
        m
      ),
      s.registerCommand(
        pe,
        z,
        m
      ),
      s.registerCommand(me, V, m),
      s.registerCommand(
        fe,
        W,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", w), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", w);
    };
  }, [
    L,
    s,
    E,
    a,
    i,
    z,
    V,
    W,
    X,
    w,
    u
  ]);
  const J = (t = !0) => {
    s.update(() => {
      const e = v(i);
      R(e) && e.setShowCaption(t);
    });
  }, ne = (t, e) => {
    setTimeout(() => {
      B(!1);
    }, 200), s.update(() => {
      const n = v(i);
      R(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    s.update(() => {
      const e = v(i);
      R(e) && e.setAbsolute(t.target.checked);
    });
  }, re = () => {
    B(!0);
  }, { historyState: oe } = je(), ie = a && j(_) && !E, Q = a || E;
  return /* @__PURE__ */ r.jsx(Pe, { fallback: null, children: /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: x,
      draggable: !d && ie,
      style: {
        position: d ? "absolute" : "initial",
        zIndex: d ? 1 : 0
      },
      onPointerDown: te,
      children: [
        /* @__PURE__ */ r.jsx(
          Xe,
          {
            className: Q ? `focused ${j(_) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: D,
            width: b,
            height: N,
            maxWidth: I
          }
        ),
        p && /* @__PURE__ */ r.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ r.jsxs(Ne, { initialEditor: h, children: [
          /* @__PURE__ */ r.jsx(ve, {}),
          /* @__PURE__ */ r.jsx(Re, {}),
          /* @__PURE__ */ r.jsx(Ce, {}),
          /* @__PURE__ */ r.jsx(Le, {}),
          /* @__PURE__ */ r.jsx(Se, {}),
          /* @__PURE__ */ r.jsx(be, { externalHistoryState: oe }),
          /* @__PURE__ */ r.jsx(
            Ie,
            {
              contentEditable: /* @__PURE__ */ r.jsx(De, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ r.jsx(ye, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: ke
            }
          )
        ] }) }),
        F && /* @__PURE__ */ r.jsxs("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "checkbox",
                checked: d,
                onChange: se
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs("label", { children: [
            /* @__PURE__ */ r.jsx(
              "input",
              {
                type: "checkbox",
                checked: p,
                onChange: () => J(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        P && j(_) && Q && s.isEditable() && /* @__PURE__ */ r.jsx(
          Me,
          {
            showCaption: p,
            setShowCaption: J,
            editor: s,
            buttonRef: M,
            imageRef: D,
            maxWidth: I,
            onResizeStart: re,
            onResizeEnd: ne,
            captionsEnabled: O
          }
        )
      ]
    }
  ) }) });
}
export {
  _e as RIGHT_CLICK_IMAGE_COMMAND,
  Be as default
};
