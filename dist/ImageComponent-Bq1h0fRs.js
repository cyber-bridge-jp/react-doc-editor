import { f as le, g as ue, $ as h, h as ge, u as de, j as o, L as fe, a as me, E as pe, K as xe, b as Ee, c as Ce, d as he, P as Le, e as Re } from "./index-Bb4kPwGF.js";
import { L as _e } from "./LexicalHashtagPlugin-CAU3Fut-.js";
import { L as Ne } from "./LexicalNestedComposer-c9_rjILw.js";
import { $isNodeSelection as L, $getSelection as T, $getNodeByKey as R, $setSelection as Q, SELECTION_CHANGE_COMMAND as je, COMMAND_PRIORITY_LOW as m, CLICK_COMMAND as ve, KEY_DELETE_COMMAND as Se, KEY_BACKSPACE_COMMAND as Me, KEY_ENTER_COMMAND as Ie, KEY_ESCAPE_COMMAND as De, createCommand as Pe } from "lexical";
import { useRef as _, useState as O, useEffect as z, useCallback as N, Suspense as ye } from "react";
import { I as be } from "./ImageResizer-CHnn_sUE.js";
const V = /* @__PURE__ */ new Set(), ke = Pe("RIGHT_CLICK_IMAGE_COMMAND");
function $(c, l) {
  const r = c.style;
  r.top = l.y + "px", r.left = l.x + "px";
}
function Ae(c) {
  if (!V.has(c))
    throw new Promise((l) => {
      const r = new Image();
      r.src = c, r.onload = () => {
        V.add(c), l(null);
      };
    });
}
function He({
  altText: c,
  className: l,
  imageRef: r,
  src: j,
  width: P,
  height: v,
  maxWidth: y
}) {
  return Ae(j), /* @__PURE__ */ o.jsx(
    "img",
    {
      className: l || void 0,
      src: j,
      alt: c,
      ref: r,
      style: {
        height: v,
        maxWidth: y,
        width: P
      },
      draggable: "false"
    }
  );
}
function Ge({
  src: c,
  altText: l,
  nodeKey: r,
  width: j,
  height: P,
  maxWidth: v,
  resizable: y,
  showCaption: p,
  caption: E,
  captionsEnabled: Z,
  isAbsolute: g,
  xOffset: S,
  yOffset: M
}) {
  const I = _(null), b = _(null), x = _(null), [a, u, D] = le.useLexicalNodeSelection(r), [C, B] = O(!1), [s] = ue.useLexicalComposerContext(), [k, ee] = O(null), G = _(null), [K, X] = O(!1), d = _({
    isDragging: !1,
    offsetX: 0,
    offsetY: 0,
    rootElementRect: null,
    x: 0,
    y: 0
  });
  z(() => {
    const t = d.current;
    t.x = S, t.y = M;
    const e = x.current;
    e !== null && $(e, t);
  }, [S, M]), z(() => {
    if (g) {
      const t = d.current;
      t.x = S, t.y = M;
      const e = x.current;
      e !== null && $(e, t);
    }
  }, [S, M, g]);
  const A = N(
    (t) => {
      if (a && L(T())) {
        t.preventDefault();
        const n = R(r);
        if (h(n))
          return n.remove(), !0;
      }
      return !1;
    },
    [a, r]
  ), w = N(
    (t) => {
      const e = T(), n = b.current;
      if (a && L(e) && e.getNodes().length === 1) {
        if (p)
          return Q(null), t.preventDefault(), E.focus(), !0;
        if (n !== null && n !== document.activeElement)
          return t.preventDefault(), n.focus(), !0;
      }
      return !1;
    },
    [E, a, p]
  ), F = N(
    (t) => G.current === E || b.current === t.target ? (Q(null), s.update(() => {
      u(!0);
      const e = s.getRootElement();
      e !== null && e.focus();
    }), !0) : !1,
    [E, s, u]
  ), H = N(
    (t) => {
      const e = t;
      return K && X(!1), C ? !0 : e.target === I.current ? (e.shiftKey ? u(!a) : (D(), u(!0)), !0) : !1;
    },
    [C, a, u, D]
  ), Y = N(
    (t) => {
      s.getEditorState().read(() => {
        t.target.tagName === "IMG" && t.target === I.current && s.isEditable() && (t.preventDefault(), t.shiftKey ? u(!a) : (D(), u(!0), X(!0)));
      });
    },
    [s]
  ), U = (t) => {
    const e = x.current, n = d.current, i = s.getRootElement();
    e && d.current.isDragging && t.target === e.firstChild && (d.current.isDragging = !1, t.preventDefault(), e.classList.remove("dragging"), s.update(() => {
      const f = R(r);
      h(f) && f.setPosition(n.x, n.y);
    })), i == null || i.removeEventListener("pointermove", W), i == null || i.removeEventListener("pointerup", U);
  }, W = (t) => {
    const e = x.current, n = d.current, i = n.rootElementRect;
    e !== null && n.isDragging && i !== null && (n.x = t.pageX - n.offsetX - i.left, n.y = t.pageY - n.offsetY - i.top, $(e, n));
  }, te = (t) => {
    var f;
    const e = x.current, n = d.current, i = s.getRootElement();
    if (e !== null && t.button !== 2 && g && t.target === (e == null ? void 0 : e.firstChild) && s.isEditable() && (n.rootElementRect = ((f = e.parentElement) == null ? void 0 : f.getBoundingClientRect()) || null, n.rootElementRect !== null)) {
      const { top: ae, left: ce } = e.getBoundingClientRect();
      n.isDragging = !0, n.offsetX = t.pageX - ce, n.offsetY = t.pageY - ae, e.classList.add("dragging"), i == null || i.addEventListener("pointermove", W), i == null || i.addEventListener("pointerup", U);
    }
  };
  z(() => {
    let t = !0;
    const e = s.getRootElement(), n = ge.mergeRegister(
      s.registerUpdateListener(({ editorState: i }) => {
        t && ee(i.read(() => T()));
      }),
      s.registerCommand(
        je,
        (i, f) => (G.current = f, !1),
        m
      ),
      s.registerCommand(
        ve,
        H,
        m
      ),
      s.registerCommand(
        ke,
        H,
        m
      ),
      s.registerCommand(
        Se,
        A,
        m
      ),
      s.registerCommand(
        Me,
        A,
        m
      ),
      s.registerCommand(Ie, w, m),
      s.registerCommand(
        De,
        F,
        m
      )
    );
    return e == null || e.addEventListener("contextmenu", Y), () => {
      t = !1, n(), e == null || e.removeEventListener("contextmenu", Y);
    };
  }, [
    D,
    s,
    C,
    a,
    r,
    A,
    w,
    F,
    H,
    Y,
    u
  ]);
  const q = (t = !0) => {
    s.update(() => {
      const e = R(r);
      h(e) && e.setShowCaption(t);
    });
  }, ne = (t, e) => {
    setTimeout(() => {
      B(!1);
    }, 200), s.update(() => {
      const n = R(r);
      h(n) && n.setWidthAndHeight(t, e);
    });
  }, se = (t) => {
    s.update(() => {
      const e = R(r);
      h(e) && e.setAbsolute(t.target.checked);
    });
  }, oe = () => {
    B(!0);
  }, { historyState: ie } = de(), re = a && L(k) && !C, J = a || C;
  return /* @__PURE__ */ o.jsx(ye, { fallback: null, children: /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: x,
      draggable: !g && re,
      style: {
        position: g ? "absolute" : "initial",
        zIndex: g ? 1 : 0
      },
      onPointerDown: te,
      children: [
        /* @__PURE__ */ o.jsx(
          He,
          {
            className: J ? `focused ${L(k) ? "draggable" : ""}` : "",
            src: c,
            altText: l,
            imageRef: I,
            width: j,
            height: P,
            maxWidth: v
          }
        ),
        p && /* @__PURE__ */ o.jsx("div", { className: "image-caption-container", children: /* @__PURE__ */ o.jsxs(Ne.LexicalNestedComposer, { initialEditor: E, children: [
          /* @__PURE__ */ o.jsx(fe.AutoFocusPlugin, {}),
          /* @__PURE__ */ o.jsx(me, {}),
          /* @__PURE__ */ o.jsx(pe, {}),
          /* @__PURE__ */ o.jsx(_e.HashtagPlugin, {}),
          /* @__PURE__ */ o.jsx(xe, {}),
          /* @__PURE__ */ o.jsx(Ee.HistoryPlugin, { externalHistoryState: ie }),
          /* @__PURE__ */ o.jsx(
            Ce.RichTextPlugin,
            {
              contentEditable: /* @__PURE__ */ o.jsx(he.ContentEditable, { className: "ImageNode__contentEditable" }),
              placeholder: /* @__PURE__ */ o.jsx(Le, { className: "ImageNode__placeholder", children: "Enter a caption..." }),
              ErrorBoundary: Re
            }
          )
        ] }) }),
        K && /* @__PURE__ */ o.jsxs("div", { className: "image-context-menu", children: [
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsxs("label", { children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                checked: g,
                onChange: se
              }
            ),
            "Absolute"
          ] }) }),
          /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsxs("label", { children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                checked: p,
                onChange: () => q(!p)
              }
            ),
            "Show caption"
          ] }) })
        ] }),
        y && L(k) && J && s.isEditable() && /* @__PURE__ */ o.jsx(
          be,
          {
            showCaption: p,
            setShowCaption: q,
            editor: s,
            buttonRef: b,
            imageRef: I,
            maxWidth: v,
            onResizeStart: oe,
            onResizeEnd: ne,
            captionsEnabled: Z
          }
        )
      ]
    }
  ) }) });
}
export {
  ke as RIGHT_CLICK_IMAGE_COMMAND,
  Ge as default
};
