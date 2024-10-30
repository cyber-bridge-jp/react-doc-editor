import { a as le, b as ue, q as h, L as de, u as ge, j as r, r as fe, c as me, d as pe, e as Ee, f as Ce, h as xe, x as he, P as Re, g as je } from "./index-DHTCdfXr.js";
import { c as ve } from "./LexicalHashtagPlugin.prod-Bo1iNyur.js";
import { d as Me } from "./LexicalNestedComposer.prod-C9PIpBx6.js";
import { $isNodeSelection as R, $getSelection as $, $getNodeByKey as j, $setSelection as Q, KEY_ESCAPE_COMMAND as Ne, COMMAND_PRIORITY_LOW as m, KEY_ENTER_COMMAND as Se, KEY_BACKSPACE_COMMAND as _e, KEY_DELETE_COMMAND as Ie, CLICK_COMMAND as De, SELECTION_CHANGE_COMMAND as Le, createCommand as be } from "lexical";
import { useRef as v, useState as z, useEffect as T, useCallback as M, Suspense as ye } from "react";
import { I as ke } from "./ImageResizer-Bdo7crCx.js";
const V = /* @__PURE__ */ new Set(), Pe = be("RIGHT_CLICK_IMAGE_COMMAND");
function G(c, l) {
  const i = c.style;
  i.top = l.y + "px", i.left = l.x + "px";
}
function Ae(c) {
  if (!V.has(c))
    throw new Promise((l) => {
      const i = new Image();
      i.src = c, i.onload = () => {
        V.add(c), l(null);
      };
    });
}
function Ye({
  altText: c,
  className: l,
  imageRef: i,
  src: N,
  width: b,
  height: S,
  maxWidth: y
}) {
  return Ae(N), /* @__PURE__ */ r.jsx(
    "img",
    {
      className: l || void 0,
      src: N,
      alt: c,
      ref: i,
      style: {
        height: S,
        maxWidth: y,
        width: b
      },
      draggable: "false"
    }
  );
}
function Be({
  src: c,
  altText: l,
  nodeKey: i,
  width: N,
  height: b,
  maxWidth: S,
  resizable: y,
  showCaption: p,
  caption: C,
  captionsEnabled: Z,
  isAbsolute: d,
  xOffset: _,
  yOffset: I
}) {
  const D = v(null), k = v(null), E = v(null), [a, u, L] = le(i), [x, H] = z(!1), [s] = ue(), [P, ee] = z(null), B = v(null), [K, X] = z(!1), g = v({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  T(() => {
    const t = g.current;
    t.x = _, t.y = I;
    const e = E.current;
    e !== null && G(e, t);
  }, [_, I]), T(() => {
    if (d) {
      const t = g.current;
      t.x = _, t.y = I;
      const e = E.current;
      e !== null && G(e, t);
    }
  }, [_, I, d]);
  const A = M(
    (t) => {
      if (a && R($())) {
        t.preventDefault();
        const n = j(i);
        if (h(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, i]
  ), w = M(
    (t) => {
      const e = $(), n = k.current;
      if (a && R(e) && e.getNodes().length === 1) {
        if (p)
          return Q(null), t.preventDefault(), C.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [C, a, p]
  ), F = M(
    (t) => B.current === C || k.current === t.target ? (Q(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [C, s, u]
  ), Y = M(
    (t) => {
      const e = t;
      return K && X(!1), x ? !0 : e.target === D.current ? (e.shiftKey ? u(!a) : (L(), u(!0)), !0) : !1;
    },
    [x, a, u, L]
  ), O = M(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === D.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (L(), u(!0), X(!0)));
      });
    },
    [s]
  ), U = (t) => {
    const e = E.current, n = g.current, o = s.getRootElement();
    e && g.current.isDragging && t.target === e.firstChild && (g.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = j(i);
      h(f) && f.setPosition(n.x, n.y);
    })), o == null || o.removeEventListener("pointermove", q), o == null || o.removeEventListener("pointerup", U);
  }, q = (t) => {
    const e = E.current, n = g.current, o = n.rootElementRect;
    e !== null && n.isDragging && o !== null && (n.x = t.pageX - n.offsetX - o.left, n.y = t.pageY - n.offsetY - o.top, G(e, n));
  }, te = (t) => {
    var f;
    const e = E.current, n = g.current, o = s.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ae, left: ce } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ce, n.offsetY = t.pageY - ae, e.classList.add("dragging"), o == null || o.addEventListener("pointermove", q), o == null || o.addEventListener("pointerup", U);
    }
  };
  T(() => {
    let t = !0;
    const e = s.getRootElement(), n = de(
      s.registerUpdateListener(({ editorState: o }) => {
        t && ee(o.read(() => $()));
      }),
      s.registerCommand(
        Le,
        (o, f) => (B.current = f, !1),
        m
      ),
      s.registerCommand(
        De,
        Y,
        m
      ),
      s.registerCommand(
        Pe,
        Y,
        m
      ),
      s.registerCommand(
        Ie,
        A,
        m
      ),
      s.registerCommand(
        _e,
        A,
        m
      ),
      s.registerCommand(Se, w, m),
      s.registerCommand(
        Ne,
        F,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", O), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", O);
    };
  }, [
    L,
    s,
    x,
    a,
    i,
    A,
    w,
    F,
    Y,
    O,
    u
  ]);
  const W = (t = !0) => {
    s.update(() => {
      const e = j(i);
      h(e) && e.setShowCaption(t);
    });
  }, ne = (t, e) => {
    setTimeout(() => {
      H(!1);
    }, 200), s.update(() => {
      const n = j(i);
      h(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    s.update(() => {
      const e = j(i);
      h(e) && e.setAbsolute(t.target.checked);
    });
  }, re = () => {
    H(!0);
  }, { historyState: oe } = ge(), ie = a && R(P) && !x, J = a || x;
  return /* @__PURE__ */ r.jsx(ye, { fallback: null, children: /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: E,
      draggable: !d && ie,
      style: {
        position: d ? "absolute" : "initial",
        zIndex: d ? 1 : 0
      },
      onPointerDown: te,
      children: [
        /* @__PURE__ */ r.jsx(
          Ye,
          {
            className: J ? `focused ${R(P) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: D,
            width: N,
            height: b,
            maxWidth: S
          }
        ),
        p && /* @__PURE__ */ r.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ r.jsxs(Me, { initialEditor: C, children: [
          /* @__PURE__ */ r.jsx(fe, {}),
          /* @__PURE__ */ r.jsx(me, {}),
          /* @__PURE__ */ r.jsx(pe, {}),
          /* @__PURE__ */ r.jsx(ve, {}),
          /* @__PURE__ */ r.jsx(Ee, {}),
          /* @__PURE__ */ r.jsx(Ce, { externalHistoryState: oe }),
          /* @__PURE__ */ r.jsx(
            xe,
            {
              contentEditable: /* @__PURE__ */ r.jsx(he, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ r.jsx(Re, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: je
            }
          )
        ] }) }),
        K && /* @__PURE__ */ r.jsxs("div", { className: "image-context-menu", children: [
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
                onChange: () => W(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        y && R(P) && J && s.isEditable() && /* @__PURE__ */ r.jsx(
          ke,
          {
            showCaption: p,
            setShowCaption: W,
            editor: s,
            buttonRef: k,
            imageRef: D,
            maxWidth: S,
            onResizeStart: re,
            onResizeEnd: ne,
            captionsEnabled: Z
          }
        )
      ]
    }
  ) }) });
}
export {
  Pe as RIGHT_CLICK_IMAGE_COMMAND,
  Be as default
};
