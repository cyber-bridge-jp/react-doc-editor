import { a6 as le, b as ue, u as de, w as R, R as Y, C as j, a7 as C, F as Z, N as ge, c as fe, K as m, d as me, k as pe, e as xe, r as he, t as Ee, q as Re, j as r, o as je, L as Ce, U as ve, V as be, W as Se, h as ke, g as Ie, P as ye, x as De } from "./index-CSHQHh7d.js";
import { c as Le } from "./LexicalHashtagPlugin.prod-CjEFK_nn.js";
import { d as Ne } from "./LexicalNestedComposer.prod-Ct09ui7s.js";
import { useRef as v, useState as F, useEffect as H, useCallback as b, Suspense as Pe } from "react";
import { I as Me } from "./ImageResizer-BKFzdk7y.js";
const K = /* @__PURE__ */ new Set(), _e = le();
function $(c, l) {
  const i = c.style;
  i.top = l.y + "px", i.left = l.x + "px";
}
function we(c) {
  if (!K.has(c))
    throw new Promise((l) => {
      const i = new Image();
      i.src = c, i.onload = () => {
        K.add(c), l(null);
      };
    });
}
function ze({
  altText: c,
  className: l,
  imageRef: i,
  src: S,
  width: N,
  height: k,
  maxWidth: P
}) {
  return we(S), /* @__PURE__ */ r.jsx(
    "img",
    {
      className: l || void 0,
      src: S,
      alt: c,
      ref: i,
      style: {
        height: k,
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
  width: S,
  height: N,
  maxWidth: k,
  resizable: P,
  showCaption: p,
  caption: h,
  captionsEnabled: O,
  isAbsolute: d,
  xOffset: I,
  yOffset: y
}) {
  const D = v(null), M = v(null), x = v(null), [a, u, L] = ue(i), [E, B] = F(!1), [s] = de(), [_, ee] = F(null), G = v(null), [U, T] = F(!1), g = v({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  H(() => {
    const t = g.current;
    t.x = I, t.y = y;
    const e = x.current;
    e !== null && $(e, t);
  }, [I, y]), H(() => {
    if (d) {
      const t = g.current;
      t.x = I, t.y = y;
      const e = x.current;
      e !== null && $(e, t);
    }
  }, [I, y, d]);
  const w = b(
    (t) => {
      if (a && R(Y())) {
        t.preventDefault();
        const n = j(i);
        if (C(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, i]
  ), q = b(
    (t) => {
      const e = Y(), n = M.current;
      if (a && R(e) && e.getNodes().length === 1) {
        if (p)
          return Z(null), t.preventDefault(), h.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [h, a, p]
  ), V = b(
    (t) => G.current === h || M.current === t.target ? (Z(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [h, s, u]
  ), z = b(
    (t) => {
      const e = t;
      return U && T(!1), E ? !0 : e.target === D.current ? (e.shiftKey ? u(!a) : (L(), u(!0)), !0) : !1;
    },
    [E, a, u, L]
  ), X = b(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === D.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (L(), u(!0), T(!0)));
      });
    },
    [s]
  ), W = (t) => {
    const e = x.current, n = g.current, o = s.getRootElement();
    e && g.current.isDragging && t.target === e.firstChild && (g.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = j(i);
      C(f) && f.setPosition(n.x, n.y);
    })), o == null || o.removeEventListener("pointermove", A), o == null || o.removeEventListener("pointerup", W);
  }, A = (t) => {
    const e = x.current, n = g.current, o = n.rootElementRect;
    e !== null && n.isDragging && o !== null && (n.x = t.pageX - n.offsetX - o.left, n.y = t.pageY - n.offsetY - o.top, $(e, n));
  }, te = (t) => {
    var f;
    const e = x.current, n = g.current, o = s.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ae, left: ce } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ce, n.offsetY = t.pageY - ae, e.classList.add("dragging"), o == null || o.addEventListener("pointermove", A), o == null || o.addEventListener("pointerup", W);
    }
  };
  H(() => {
    let t = !0;
    const e = s.getRootElement(), n = ge(
      s.registerUpdateListener(({ editorState: o }) => {
        t && ee(o.read(() => Y()));
      }),
      s.registerCommand(
        Ee,
        (o, f) => (G.current = f, !1),
        m
      ),
      s.registerCommand(
        he,
        z,
        m
      ),
      s.registerCommand(
        _e,
        z,
        m
      ),
      s.registerCommand(
        xe,
        w,
        m
      ),
      s.registerCommand(
        pe,
        w,
        m
      ),
      s.registerCommand(me, q, m),
      s.registerCommand(
        fe,
        V,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", X), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", X);
    };
  }, [
    L,
    s,
    E,
    a,
    i,
    w,
    q,
    V,
    z,
    X,
    u
  ]);
  const J = (t = !0) => {
    s.update(() => {
      const e = j(i);
      C(e) && e.setShowCaption(t);
    });
  }, ne = (t, e) => {
    setTimeout(() => {
      B(!1);
    }, 200), s.update(() => {
      const n = j(i);
      C(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    s.update(() => {
      const e = j(i);
      C(e) && e.setAbsolute(t.target.checked);
    });
  }, re = () => {
    B(!0);
  }, { historyState: oe } = Re(), ie = a && R(_) && !E, Q = a || E;
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
          ze,
          {
            className: Q ? `focused ${R(_) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: D,
            width: S,
            height: N,
            maxWidth: k
          }
        ),
        p && /* @__PURE__ */ r.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ r.jsxs(Ne, { initialEditor: h, children: [
          /* @__PURE__ */ r.jsx(je, {}),
          /* @__PURE__ */ r.jsx(Ce, {}),
          /* @__PURE__ */ r.jsx(ve, {}),
          /* @__PURE__ */ r.jsx(Le, {}),
          /* @__PURE__ */ r.jsx(be, {}),
          /* @__PURE__ */ r.jsx(Se, { externalHistoryState: oe }),
          /* @__PURE__ */ r.jsx(
            ke,
            {
              contentEditable: /* @__PURE__ */ r.jsx(De, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ r.jsx(ye, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Ie
            }
          )
        ] }) }),
        U && /* @__PURE__ */ r.jsxs("div", { className: "image-context-menu", children: [
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
        P && R(_) && Q && s.isEditable() && /* @__PURE__ */ r.jsx(
          Me,
          {
            showCaption: p,
            setShowCaption: J,
            editor: s,
            buttonRef: M,
            imageRef: D,
            maxWidth: k,
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
