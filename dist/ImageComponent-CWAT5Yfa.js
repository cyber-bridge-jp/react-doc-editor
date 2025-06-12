import { jsx as o, Fragment as ue, jsxs as R } from "react/jsx-runtime";
import { a5 as de, b as ge, u as fe, T as C, M as H, S, a6 as b, E as K, L as me, c as pe, I as m, d as he, k as Ee, w as ve, r as Re, e as Ce, q as Se, o as be, f as Ie, U as ke, V as xe, W as ye, h as De, g as Le, P as Ne, x as Pe } from "./index-Bec-pY47.js";
import { c as Me } from "./LexicalHashtagPlugin.prod-bGVOS6xA.js";
import { d as _e } from "./LexicalNestedComposer.prod-ClogiqCZ.js";
import { useRef as I, useState as $, useEffect as j, useCallback as k, Suspense as ze } from "react";
import { I as we } from "./ImageResizer-C8Cf15hU.js";
const O = /* @__PURE__ */ new Set(), Te = de();
function B(c, l) {
  const i = c.style;
  i.top = l.y + "px", i.left = l.x + "px";
}
function Xe(c) {
  if (!O.has(c))
    throw new Promise((l) => {
      const i = new Image();
      i.src = c, i.onload = () => {
        O.add(c), l(null);
      };
    });
}
function Ye({
  altText: c,
  className: l,
  imageRef: i,
  src: x,
  width: M,
  height: y,
  maxWidth: _
}) {
  return Xe(x), /* @__PURE__ */ o(
    "img",
    {
      className: l || void 0,
      src: x,
      alt: c,
      ref: i,
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
  nodeKey: i,
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
  const N = I(null), z = I(null), h = I(null), [a, u, P] = ge(i), [v, G] = $(!1), [r] = fe(), [w, te] = $(null), U = I(null), [F, q] = $(!1), g = I({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  j(() => {
    const t = g.current;
    t.x = D, t.y = L;
    const e = h.current;
    e !== null && B(e, t);
  }, [D, L]), j(() => {
    if (d) {
      const t = g.current;
      t.x = D, t.y = L;
      const e = h.current;
      e !== null && B(e, t);
    }
  }, [D, L, d]);
  const T = k(
    (t) => {
      if (a && C(H())) {
        t.preventDefault();
        const n = S(i);
        if (b(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, i]
  ), V = k(
    (t) => {
      const e = H(), n = z.current;
      if (a && C(e) && e.getNodes().length === 1) {
        if (p)
          return K(null), t.preventDefault(), E.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [E, a, p]
  ), W = k(
    (t) => U.current === E || z.current === t.target ? (K(null), r.update(() => {
      u(!0);
      const e = r.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [E, r, u]
  ), X = k(
    (t) => {
      const e = t;
      return F && q(!1), v ? !0 : e.target === N.current ? (e.shiftKey ? u(!a) : (P(), u(!0)), !0) : !1;
    },
    [v, a, u, P]
  ), Y = k(
    (t) => {
      r.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === N.current && r.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (P(), u(!0), q(!0)));
      });
    },
    [r]
  ), A = (t) => {
    const e = h.current, n = g.current, s = r.getRootElement();
    e && g.current.isDragging && t.target === e.firstChild && (g.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), r.update(() => {
      const f = S(i);
      b(f) && f.setPosition(n.x, n.y);
    })), s == null || s.removeEventListener("pointermove", J), s == null || s.removeEventListener("pointerup", A);
  }, J = (t) => {
    const e = h.current, n = g.current, s = n.rootElementRect;
    e !== null && n.isDragging && s !== null && (n.x = t.pageX - n.offsetX - s.left, n.y = t.pageY - n.offsetY - s.top, B(e, n));
  }, ne = (t) => {
    var f;
    const e = h.current, n = g.current, s = r.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && r.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ce, left: le } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - le, n.offsetY = t.pageY - ce, e.classList.add("dragging"), s == null || s.addEventListener("pointermove", J), s == null || s.addEventListener("pointerup", A);
    }
  };
  j(() => {
    let t = !0;
    const e = r.getRootElement(), n = me(
      r.registerUpdateListener(({ editorState: s }) => {
        t && te(s.read(() => H()));
      }),
      r.registerCommand(
        Ce,
        (s, f) => (U.current = f, !1),
        m
      ),
      r.registerCommand(
        Re,
        X,
        m
      ),
      r.registerCommand(
        Te,
        X,
        m
      ),
      r.registerCommand(
        ve,
        T,
        m
      ),
      r.registerCommand(
        Ee,
        T,
        m
      ),
      r.registerCommand(he, V, m),
      r.registerCommand(
        pe,
        W,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", Y), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", Y);
    };
  }, [
    P,
    r,
    v,
    a,
    i,
    T,
    V,
    W,
    X,
    Y,
    u
  ]);
  const Q = (t = !0) => {
    r.update(() => {
      const e = S(i);
      b(e) && e.setShowCaption(t);
    });
  }, re = (t, e) => {
    setTimeout(() => {
      G(!1);
    }, 200), r.update(() => {
      const n = S(i);
      b(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    r.update(() => {
      const e = S(i);
      b(e) && e.setAbsolute(t.target.checked);
    });
  }, oe = () => {
    G(!0);
  }, { historyState: ie } = Se(), ae = a && C(w) && !v, Z = a || v;
  return /* @__PURE__ */ o(ze, { fallback: null, children: /* @__PURE__ */ o(ue, { children: /* @__PURE__ */ R(
    "div",
    {
      ref: h,
      draggable: !d && ae,
      style: {
        position: d ? "absolute" : "initial",
        zIndex: d ? 1 : 0
      },
      onPointerDown: ne,
      children: [
        /* @__PURE__ */ o(
          Ye,
          {
            className: Z ? `focused ${C(w) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: N,
            width: x,
            height: M,
            maxWidth: y
          }
        ),
        p && /* @__PURE__ */ o("div", { className: "image-caption-container", children: /* @__PURE__ */ R(_e, { initialEditor: E, children: [
          /* @__PURE__ */ o(be, {}),
          /* @__PURE__ */ o(Ie, {}),
          /* @__PURE__ */ o(ke, {}),
          /* @__PURE__ */ o(Me, {}),
          /* @__PURE__ */ o(xe, {}),
          /* @__PURE__ */ o(ye, { externalHistoryState: ie }),
          /* @__PURE__ */ o(
            De,
            {
              contentEditable: /* @__PURE__ */ o(Pe, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ o(Ne, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Le
            }
          )
        ] }) }),
        F && /* @__PURE__ */ R("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ o("div", { children: /* @__PURE__ */ R("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: d,
                onChange: se
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ o("div", { children: /* @__PURE__ */ R("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                checked: p,
                onChange: () => Q(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        _ && C(w) && Z && r.isEditable() && /* @__PURE__ */ o(
          we,
          {
            showCaption: p,
            setShowCaption: Q,
            editor: r,
            buttonRef: z,
            imageRef: N,
            maxWidth: y,
            onResizeStart: oe,
            onResizeEnd: re,
            captionsEnabled: ee
          }
        )
      ]
    }
  ) }) });
}
export {
  Te as RIGHT_CLICK_IMAGE_COMMAND,
  Fe as default
};
