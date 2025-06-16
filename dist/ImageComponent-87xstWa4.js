import { jsx as a, Fragment as ue, jsxs as C } from "react/jsx-runtime";
import { aN as de, Q as ge, H as fe, U as R, V as B, W as S, aO as b, Y as O, Z as me, a0 as pe, a1 as m, a2 as he, a3 as Ee, a4 as ve, a6 as Ce, a7 as Re, an as Se, a8 as be, a9 as Ie, aB as ke, aC as xe, aD as ye, ab as De, ac as Le, ad as Ne, ae as Pe } from "./index-B1XK6w54.js";
import { c as Me } from "./LexicalHashtagPlugin.prod-lHicX4Ts.js";
import { d as _e } from "./LexicalNestedComposer.prod-CUnPetiN.js";
import { useRef as I, useState as T, useEffect as $, useCallback as k, Suspense as ze } from "react";
import { I as Ye } from "./ImageResizer-C8Cf15hU.js";
const K = /* @__PURE__ */ new Set(), we = de();
function j(c, l) {
  const o = c.style;
  o.top = l.y + "px", o.left = l.x + "px";
}
function He(c) {
  if (!K.has(c))
    throw new Promise((l) => {
      const o = new Image();
      o.src = c, o.onload = () => {
        K.add(c), l(null);
      };
    });
}
function Xe({
  altText: c,
  className: l,
  imageRef: o,
  src: x,
  width: M,
  height: y,
  maxWidth: _
}) {
  return He(x), /* @__PURE__ */ a(
    "img",
    {
      className: l || void 0,
      src: x,
      alt: c,
      ref: o,
      style: {
        height: y,
        maxWidth: _,
        width: M
      },
      draggable: "false"
    }
  );
}
function Fe({
  src: c,
  altText: l,
  nodeKey: o,
  width: x,
  height: M,
  maxWidth: y,
  resizable: _,
  showCaption: p,
  caption: E,
  captionsEnabled: ee,
  isAbsolute: d,
  xOffset: D,
  yOffset: L
}) {
  const N = I(null), z = I(null), h = I(null), [i, u, P] = ge(o), [v, G] = T(!1), [s] = fe(), [Y, te] = T(null), U = I(null), [F, Q] = T(!1), g = I({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  $(() => {
    const t = g.current;
    t.x = D, t.y = L;
    const e = h.current;
    e !== null && j(e, t);
  }, [D, L]), $(() => {
    if (d) {
      const t = g.current;
      t.x = D, t.y = L;
      const e = h.current;
      e !== null && j(e, t);
    }
  }, [D, L, d]);
  const w = k(
    (t) => {
      if (i && R(B())) {
        t.preventDefault();
        const n = S(o);
        if (b(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [i, o]
  ), V = k(
    (t) => {
      const e = B(), n = z.current;
      if (i && R(e) && e.getNodes().length === 1) {
        if (p)
          return O(null), t.preventDefault(), E.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [E, i, p]
  ), W = k(
    (t) => U.current === E || z.current === t.target ? (O(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [E, s, u]
  ), H = k(
    (t) => {
      const e = t;
      return F && Q(!1), v ? !0 : e.target === N.current ? (e.shiftKey ? u(!i) : (P(), u(!0)), !0) : !1;
    },
    [v, i, u, P]
  ), X = k(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === N.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!i) : (P(), u(!0), Q(!0)));
      });
    },
    [s]
  ), Z = (t) => {
    const e = h.current, n = g.current, r = s.getRootElement();
    e && g.current.isDragging && t.target === e.firstChild && (g.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = S(o);
      b(f) && f.setPosition(n.x, n.y);
    })), r == null || r.removeEventListener("pointermove", q), r == null || r.removeEventListener("pointerup", Z);
  }, q = (t) => {
    const e = h.current, n = g.current, r = n.rootElementRect;
    e !== null && n.isDragging && r !== null && (n.x = t.pageX - n.offsetX - r.left, n.y = t.pageY - n.offsetY - r.top, j(e, n));
  }, ne = (t) => {
    var f;
    const e = h.current, n = g.current, r = s.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ce, left: le } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - le, n.offsetY = t.pageY - ce, e.classList.add("dragging"), r == null || r.addEventListener("pointermove", q), r == null || r.addEventListener("pointerup", Z);
    }
  };
  $(() => {
    let t = !0;
    const e = s.getRootElement(), n = me(
      s.registerUpdateListener(({ editorState: r }) => {
        t && te(r.read(() => B()));
      }),
      s.registerCommand(
        Re,
        (r, f) => (U.current = f, !1),
        m
      ),
      s.registerCommand(
        Ce,
        H,
        m
      ),
      s.registerCommand(
        we,
        H,
        m
      ),
      s.registerCommand(
        ve,
        w,
        m
      ),
      s.registerCommand(
        Ee,
        w,
        m
      ),
      s.registerCommand(he, V, m),
      s.registerCommand(
        pe,
        W,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", X), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", X);
    };
  }, [
    P,
    s,
    v,
    i,
    o,
    w,
    V,
    W,
    H,
    X,
    u
  ]);
  const A = (t = !0) => {
    s.update(() => {
      const e = S(o);
      b(e) && e.setShowCaption(t);
    });
  }, se = (t, e) => {
    setTimeout(() => {
      G(!1);
    }, 200), s.update(() => {
      const n = S(o);
      b(n) && n.setWidthAndHeight(t, e);
    });
  }, re = (t) => {
    s.update(() => {
      const e = S(o);
      b(e) && e.setAbsolute(t.target.checked);
    });
  }, ae = () => {
    G(!0);
  }, { historyState: oe } = Se(), ie = i && R(Y) && !v, J = i || v;
  return /* @__PURE__ */ a(ze, { fallback: null, children: /* @__PURE__ */ a(ue, { children: /* @__PURE__ */ C(
    "div",
    {
      ref: h,
      draggable: !d && ie,
      style: {
        position: d ? "absolute" : "initial",
        zIndex: d ? 1 : 0
      },
      onPointerDown: ne,
      children: [
        /* @__PURE__ */ a(
          Xe,
          {
            className: J ? `focused ${R(Y) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: N,
            width: x,
            height: M,
            maxWidth: y
          }
        ),
        p && /* @__PURE__ */ a("div", { className: "image-caption-container", children: /* @__PURE__ */ C(_e, { initialEditor: E, children: [
          /* @__PURE__ */ a(be, {}),
          /* @__PURE__ */ a(Ie, {}),
          /* @__PURE__ */ a(ke, {}),
          /* @__PURE__ */ a(Me, {}),
          /* @__PURE__ */ a(xe, {}),
          /* @__PURE__ */ a(ye, { externalHistoryState: oe }),
          /* @__PURE__ */ a(
            De,
            {
              contentEditable: /* @__PURE__ */ a(Pe, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ a(Ne, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Le
            }
          )
        ] }) }),
        F && /* @__PURE__ */ C("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ a("div", { children: /* @__PURE__ */ C("label", { children: [
            /* @__PURE__ */ a(
              "input",
              {
                type: "checkbox",
                checked: d,
                onChange: re
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ a("div", { children: /* @__PURE__ */ C("label", { children: [
            /* @__PURE__ */ a(
              "input",
              {
                type: "checkbox",
                checked: p,
                onChange: () => A(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        _ && R(Y) && J && s.isEditable() && /* @__PURE__ */ a(
          Ye,
          {
            showCaption: p,
            setShowCaption: A,
            editor: s,
            buttonRef: z,
            imageRef: N,
            maxWidth: y,
            onResizeStart: ae,
            onResizeEnd: se,
            captionsEnabled: ee
          }
        )
      ]
    }
  ) }) });
}
export {
  we as RIGHT_CLICK_IMAGE_COMMAND,
  Fe as default
};
