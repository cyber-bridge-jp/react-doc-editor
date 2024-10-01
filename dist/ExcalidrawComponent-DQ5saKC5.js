import { j as o, M as T, B as z, g as H, f as $, o as j, h as P } from "./index-D6zAFZpw.js";
import { $isNodeSelection as F, $getSelection as W, $getNodeByKey as R, CLICK_COMMAND as Y, COMMAND_PRIORITY_LOW as y, KEY_DELETE_COMMAND as J, KEY_BACKSPACE_COMMAND as K } from "lexical";
import * as S from "react";
import { useState as b, useEffect as M, useRef as _, useLayoutEffect as V, useMemo as p, useCallback as I } from "react";
import { I as U } from "./ImageResizer-B9tAgt4G.js";
import { exportToSvg as q, Excalidraw as G } from "@excalidraw/excalidraw";
import { createPortal as Q } from "react-dom";
const X = (n) => {
  var r;
  const l = (r = n == null ? void 0 : n.firstElementChild) == null ? void 0 : r.firstElementChild, t = n.getAttribute("viewBox");
  if (t != null) {
    const a = t.split(" ");
    n.setAttribute("width", a[2]), n.setAttribute("height", a[3]);
  }
  l && l.tagName === "style" && l.remove();
};
function Z({
  elements: n,
  files: l,
  imageContainerRef: t,
  appState: r,
  rootClassName: a = null
}) {
  const [m, u] = b(null);
  return M(() => {
    (async () => {
      const i = await q({
        appState: r,
        elements: n,
        files: l
      });
      X(i), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("display", "block"), u(i);
    })();
  }, [n, l, r]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: t,
      className: a ?? "",
      dangerouslySetInnerHTML: { __html: (m == null ? void 0 : m.outerHTML) ?? "" }
    }
  );
}
const ee = () => {
  const [n, l] = S.useState(null), t = S.useCallback(
    (r) => l(r),
    []
  );
  return [n, t];
};
function te({
  closeOnClickOutside: n = !1,
  onSave: l,
  initialElements: t,
  initialAppState: r,
  initialFiles: a,
  isShown: m = !1,
  onDelete: u,
  onClose: k
}) {
  const i = _(null), [E, N] = ee(), [h, x] = b(!1), [g, C] = b(t), [v, D] = b(a);
  M(() => {
    i.current !== null && i.current.focus();
  }, []), M(() => {
    var s;
    let e = null;
    const f = (c) => {
      const d = c.target;
      i.current !== null && !i.current.contains(d) && n && u();
    };
    return i.current !== null && (e = (s = i.current) == null ? void 0 : s.parentElement, e !== null && (e == null || e.addEventListener("click", f))), () => {
      e !== null && (e == null || e.removeEventListener("click", f));
    };
  }, [n, u]), V(() => {
    const e = i.current, f = (s) => {
      s.key === "Escape" && u();
    };
    return e !== null && e.addEventListener("keydown", f), () => {
      e !== null && e.removeEventListener("keydown", f);
    };
  }, [g, v, u]);
  const L = () => {
    if (g.filter((e) => !e.isDeleted).length > 0) {
      const e = E == null ? void 0 : E.getAppState(), f = {
        exportBackground: e == null ? void 0 : e.exportBackground,
        exportScale: e == null ? void 0 : e.exportScale,
        exportWithDarkMode: (e == null ? void 0 : e.theme) === "dark",
        isBindingEnabled: e == null ? void 0 : e.isBindingEnabled,
        isLoading: e == null ? void 0 : e.isLoading,
        name: e == null ? void 0 : e.name,
        theme: e == null ? void 0 : e.theme,
        viewBackgroundColor: e == null ? void 0 : e.viewBackgroundColor,
        viewModeEnabled: e == null ? void 0 : e.viewModeEnabled,
        zenModeEnabled: e == null ? void 0 : e.zenModeEnabled,
        zoom: e == null ? void 0 : e.zoom
      };
      l(g, f, v);
    } else
      u();
  }, A = () => {
    g.filter((e) => !e.isDeleted).length === 0 ? u() : x(!0);
  };
  function B() {
    return /* @__PURE__ */ o.jsxs(
      T,
      {
        title: "Discard",
        onClose: () => {
          x(!1);
        },
        closeOnClickOutside: !1,
        children: [
          "Are you sure you want to discard the changes?",
          /* @__PURE__ */ o.jsxs("div", { className: "ExcalidrawModal__discardModal", children: [
            /* @__PURE__ */ o.jsx(
              z,
              {
                onClick: () => {
                  x(!1), k();
                },
                children: "Discard"
              }
            ),
            " ",
            /* @__PURE__ */ o.jsx(
              z,
              {
                onClick: () => {
                  x(!1);
                },
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    );
  }
  if (m === !1)
    return null;
  const w = (e, f, s) => {
    C(e), D(s);
  };
  return Q(
    /* @__PURE__ */ o.jsx("div", { className: "ExcalidrawModal__overlay", role: "dialog", children: /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "ExcalidrawModal__modal",
        ref: i,
        tabIndex: -1,
        children: /* @__PURE__ */ o.jsxs("div", { className: "ExcalidrawModal__row", children: [
          h && /* @__PURE__ */ o.jsx(B, {}),
          /* @__PURE__ */ o.jsx(
            G,
            {
              onChange: w,
              excalidrawAPI: N,
              initialData: {
                appState: r || { isLoading: !1 },
                elements: t,
                files: a
              }
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "ExcalidrawModal__actions", children: [
            /* @__PURE__ */ o.jsx("button", { className: "action-button", onClick: A, children: "Discard" }),
            /* @__PURE__ */ o.jsx("button", { className: "action-button", onClick: L, children: "Save" })
          ] })
        ] })
      }
    ) }),
    document.body
  );
}
function ae({
  nodeKey: n,
  data: l
}) {
  const [t] = H.useLexicalComposerContext(), [r, a] = b(
    l === "[]" && t.isEditable()
  ), m = _(null), u = _(null), k = _(null), [i, E, N] = $.useLexicalNodeSelection(n), [h, x] = b(!1), g = p(() => t.isEditable(), []), C = I(
    (s) => (i && F(W()) && (s.preventDefault(), t.update(() => {
      const c = R(n);
      if (j(c))
        return c.remove(), !0;
    })), !1),
    [t, i, n]
  );
  M(() => {
    g && (r ? t.setEditable(!1) : t.setEditable(!0));
  }, [r, t, g]), M(() => P.mergeRegister(
    t.registerCommand(
      Y,
      (s) => {
        const c = u.current, d = s.target;
        return h ? !0 : c !== null && c.contains(d) ? (s.shiftKey || N(), E(!i), s.detail > 1 && a(!0), !0) : !1;
      },
      y
    ),
    t.registerCommand(
      J,
      C,
      y
    ),
    t.registerCommand(
      K,
      C,
      y
    )
  ), [N, t, i, h, C, E]);
  const v = I(() => (a(!1), t.update(() => {
    const s = R(n);
    j(s) && s.remove();
  })), [t, n]), D = (s, c, d) => {
    if (t.isEditable())
      return t.update(() => {
        const O = R(n);
        j(O) && (s.length > 0 || Object.keys(d).length > 0 ? O.setData(
          JSON.stringify({
            appState: c,
            elements: s,
            files: d
          })
        ) : O.remove());
      });
  }, L = () => {
    x(!0);
  }, A = (s, c) => {
    setTimeout(() => {
      x(!1);
    }, 200), t.update(() => {
      const d = R(n);
      j(d) && (d.setWidth(s), d.setHeight(c));
    });
  }, B = I(() => {
    a(!0);
  }, []), {
    elements: w = [],
    files: e = {},
    appState: f = {}
  } = p(() => JSON.parse(l), [l]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      te,
      {
        initialElements: w,
        initialFiles: e,
        initialAppState: f,
        isShown: r,
        onDelete: v,
        onClose: () => a(!1),
        onSave: (s, c, d) => {
          t.setEditable(!0), D(s, c, d), a(!1);
        },
        closeOnClickOutside: !1
      }
    ),
    w.length > 0 && /* @__PURE__ */ o.jsxs(
      "button",
      {
        ref: u,
        className: `excalidraw-button ${i ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ o.jsx(
            Z,
            {
              imageContainerRef: m,
              className: "image",
              elements: w,
              files: e,
              appState: f
            }
          ),
          i && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "image-edit-button",
              role: "button",
              tabIndex: 0,
              onMouseDown: (s) => s.preventDefault(),
              onClick: B
            }
          ),
          (i || h) && /* @__PURE__ */ o.jsx(
            U,
            {
              buttonRef: k,
              showCaption: !0,
              setShowCaption: () => null,
              imageRef: m,
              editor: t,
              onResizeStart: L,
              onResizeEnd: A,
              captionsEnabled: !0
            }
          )
        ]
      }
    )
  ] });
}
export {
  ae as default
};
