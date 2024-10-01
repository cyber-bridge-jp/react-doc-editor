import { f as ie, g as re, h as n, $ as R, i as ae, u as ce, j as i, L as le, a as ue, E as ge, K as de, b as fe, c as me, d as xe, P as pe, e as Ce } from "./index-CP_DG8xS.js";
import { L as Ee } from "./LexicalHashtagPlugin-FHub-_sa.js";
import { L as Re } from "./LexicalNestedComposer-fyOUBMoC.js";
import { useRef as N, useState as $, useEffect as Y, useCallback as _, Suspense as Ne } from "react";
import { I as _e } from "./ImageResizer-o-orjCbK.js";
const U = /* @__PURE__ */ new Set(), he = n.createCommand("RIGHT_CLICK_IMAGE_COMMAND");
function k(l, u) {
  const a = l.style;
  a.top = u.y + "px", a.left = u.x + "px";
}
function Le(l) {
  if (!U.has(l))
    throw new Promise((u) => {
      const a = new Image();
      a.src = l, a.onload = () => {
        U.add(l), u(null);
      };
    });
}
function Me({
  altText: l,
  className: u,
  imageRef: a,
  src: h,
  width: D,
  height: L,
  maxWidth: P
}) {
  return Le(h), /* @__PURE__ */ i.jsx(
    "img",
    {
      className: u || void 0,
      src: h,
      alt: l,
      ref: a,
      style: {
        height: L,
        maxWidth: P,
        width: D
      },
      draggable: "false"
    }
  );
}
function je({
  src: l,
  altText: u,
  nodeKey: a,
  width: h,
  height: D,
  maxWidth: L,
  resizable: P,
  showCaption: x,
  caption: C,
  captionsEnabled: q,
  isAbsolute: d,
  xOffset: M,
  yOffset: I
}) {
  const S = N(null), j = N(null), p = N(null), [c, g, y] = ie.useLexicalNodeSelection(a), [E, T] = $(!1), [o] = re.useLexicalComposerContext(), [v, J] = $(null), B = N(null), [H, K] = $(!1), f = N({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  Y(() => {
    const t = f.current;
    t.x = M, t.y = I;
    const e = p.current;
    e !== null && k(e, t);
  }, [M, I]), Y(() => {
    if (d) {
      const t = f.current;
      t.x = M, t.y = I;
      const e = p.current;
      e !== null && k(e, t);
    }
  }, [M, I, d]);
  const O = _(
    (t) => {
      if (c && n.$isNodeSelection(n.$getSelection())) {
        t.preventDefault();
        const s = n.$getNodeByKey(a);
        if (R(s))
          return s.remove(), !0;
      }
      return !1;
    },
    [c, a]
  ), z = _(
    (t) => {
      const e = n.$getSelection(), s = j.current;
      if (c && n.$isNodeSelection(e) && e.getNodes().length === 1) {
        if (x)
          return n.$setSelection(null), t.preventDefault(), C.focus(), !0;
        if (s !== null && s !== document.activeElement)
          return t.preventDefault(), s.focus(), !0;
      }
      return !1;
    },
    [C, c, x]
  ), W = _(
    (t) => B.current === C || j.current === t.target ? (n.$setSelection(null), o.update(() => {
      g(!0);
      const e = o.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [C, o, g]
  ), A = _(
    (t) => {
      const e = t;
      return H && K(!1), E ? !0 : e.target === S.current ? (e.shiftKey ? g(!c) : (y(), g(!0)), !0) : !1;
    },
    [E, c, g, y]
  ), b = _(
    (t) => {
      o.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === S.current && o.isEditable() && (t.preventDefault(), t.shiftKey ? g(!c) : (y(), g(!0), K(!0)));
      });
    },
    [o]
  ), G = (t) => {
    const e = p.current, s = f.current, r = o.getRootElement();
    e && f.current.isDragging && t.target === e.firstChild && (f.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), o.update(() => {
      const m = n.$getNodeByKey(a);
      R(m) && m.setPosition(s.x, s.y);
    })), r == null || r.removeEventListener("pointermove", X), r == null || r.removeEventListener("pointerup", G);
  }, X = (t) => {
    const e = p.current, s = f.current, r = s.rootElementRect;
    e !== null && s.isDragging && r !== null && (s.x = t.pageX - s.offsetX - r.left, s.y = t.pageY - s.offsetY - r.top, k(e, s));
  }, Q = (t) => {
    var m;
    const e = p.current, s = f.current, r = o.getRootElement();
    if (e !== null && t.button !== 2 && d && t.target === (e == null ? void 0 : e.firstChild) && o.isEditable() && (s.rootElementRect = ((m = e.parentElement) == null ? void 0 : m.getBoundingClientRect()) || null, s.rootElementRect !== null)) {
      const { top: se, left: oe } = e.getBoundingClientRect();
      s.isDragging = !0, s.offsetX = t.pageX - oe, s.offsetY = t.pageY - se, e.classList.add("dragging"), r == null || r.addEventListener("pointermove", X), r == null || r.addEventListener("pointerup", G);
    }
  };
  Y(() => {
    let t = !0;
    const e = o.getRootElement(), s = ae.mergeRegister(
      o.registerUpdateListener(({ editorState: r }) => {
        t && J(r.read(() => n.$getSelection()));
      }),
      o.registerCommand(
        n.SELECTION_CHANGE_COMMAND,
        (r, m) => (B.current = m, !1),
        n.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        n.CLICK_COMMAND,
        A,
        n.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        he,
        A,
        n.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        n.KEY_DELETE_COMMAND,
        O,
        n.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(
        n.KEY_BACKSPACE_COMMAND,
        O,
        n.COMMAND_PRIORITY_LOW
      ),
      o.registerCommand(n.KEY_ENTER_COMMAND, z, n.COMMAND_PRIORITY_LOW),
      o.registerCommand(
        n.KEY_ESCAPE_COMMAND,
        W,
        n.COMMAND_PRIORITY_LOW
      )
    );
    return e == null || e.addEventListener("contextmenu", b), () => {
      t = !1, s(), e == null || e.removeEventListener("contextmenu", b);
    };
  }, [
    y,
    o,
    E,
    c,
    a,
    O,
    z,
    W,
    A,
    b,
    g
  ]);
  const w = (t = !0) => {
    o.update(() => {
      const e = n.$getNodeByKey(a);
      R(e) && e.setShowCaption(t);
    });
  }, V = (t, e) => {
    setTimeout(() => {
      T(!1);
    }, 200), o.update(() => {
      const s = n.$getNodeByKey(a);
      R(s) && s.setWidthAndHeight(t, e);
    });
  }, Z = (t) => {
    o.update(() => {
      const e = n.$getNodeByKey(a);
      R(e) && e.setAbsolute(t.target.checked);
    });
  }, ee = () => {
    T(!0);
  }, { historyState: te } = ce(), ne = c && n.$isNodeSelection(v) && !E, F = c || E;
  return /* @__PURE__ */ i.jsx(Ne, { fallback: null, children: /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: p,
      draggable: !d && ne,
      style: {
        position: d ? "absolute" : "initial",
        zIndex: d ? 1 : 0
      },
      onPointerDown: Q,
      children: [
        /* @__PURE__ */ i.jsx(
          Me,
          {
            className: F ? `focused ${n.$isNodeSelection(v) ? "draggable" : ""}` : "",
            src: l,
            altText: u,
            imageRef: S,
            width: h,
            height: D,
            maxWidth: L
          }
        ),
        x && /* @__PURE__ */ i.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ i.jsxs(Re.LexicalNestedComposer, { initialEditor: C, children: [
          /* @__PURE__ */ i.jsx(le.AutoFocusPlugin, {}),
          /* @__PURE__ */ i.jsx(ue, {}),
          /* @__PURE__ */ i.jsx(ge, {}),
          /* @__PURE__ */ i.jsx(Ee.HashtagPlugin, {}),
          /* @__PURE__ */ i.jsx(de, {}),
          /* @__PURE__ */ i.jsx(fe.HistoryPlugin, { externalHistoryState: te }),
          /* @__PURE__ */ i.jsx(
            me.RichTextPlugin,
            {
              contentEditable: /* @__PURE__ */ i.jsx(xe.ContentEditable, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ i.jsx(pe, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Ce
            }
          )
        ] }) }),
        H && /* @__PURE__ */ i.jsxs("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: d,
                onChange: Z
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsxs("label", { children: [
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "checkbox",
                checked: x,
                onChange: () => w(!x)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        P && n.$isNodeSelection(v) && F && o.isEditable() && /* @__PURE__ */ i.jsx(
          _e,
          {
            showCaption: x,
            setShowCaption: w,
            editor: o,
            buttonRef: j,
            imageRef: S,
            maxWidth: L,
            onResizeStart: ee,
            onResizeEnd: V,
            captionsEnabled: q
          }
        )
      ]
    }
  ) }) });
}
export {
  he as RIGHT_CLICK_IMAGE_COMMAND,
  je as default
};
