import { j as o, M as z, B as I, g as S, f as $, h as u, p as v, i as P } from "./index-CP_DG8xS.js";
import * as T from "react";
import { useState as b, useEffect as N, useRef as j, useLayoutEffect as H, useMemo as p, useCallback as B } from "react";
import { I as K } from "./ImageResizer-o-orjCbK.js";
import { exportToSvg as W, Excalidraw as Y } from "@excalidraw/excalidraw";
import { createPortal as F } from "react-dom";
const J = (n) => {
  var r;
  const l = (r = n == null ? void 0 : n.firstElementChild) == null ? void 0 : r.firstElementChild, t = n.getAttribute("viewBox");
  if (t != null) {
    const a = t.split(" ");
    n.setAttribute("width", a[2]), n.setAttribute("height", a[3]);
  }
  l && l.tagName === "style" && l.remove();
};
function V({
  elements: n,
  files: l,
  imageContainerRef: t,
  appState: r,
  rootClassName: a = null
}) {
  const [x, f] = b(null);
  return N(() => {
    (async () => {
      const i = await W({
        appState: r,
        elements: n,
        files: l
      });
      J(i), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("display", "block"), f(i);
    })();
  }, [n, l, r]), /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: t,
      className: a ?? "",
      dangerouslySetInnerHTML: { __html: (x == null ? void 0 : x.outerHTML) ?? "" }
    }
  );
}
const U = () => {
  const [n, l] = T.useState(null), t = T.useCallback(
    (r) => l(r),
    []
  );
  return [n, t];
};
function q({
  closeOnClickOutside: n = !1,
  onSave: l,
  initialElements: t,
  initialAppState: r,
  initialFiles: a,
  isShown: x = !1,
  onDelete: f,
  onClose: k
}) {
  const i = j(null), [C, R] = U(), [h, g] = b(!1), [E, M] = b(t), [_, D] = b(a);
  N(() => {
    i.current !== null && i.current.focus();
  }, []), N(() => {
    var s;
    let e = null;
    const m = (c) => {
      const d = c.target;
      i.current !== null && !i.current.contains(d) && n && f();
    };
    return i.current !== null && (e = (s = i.current) == null ? void 0 : s.parentElement, e !== null && (e == null || e.addEventListener("click", m))), () => {
      e !== null && (e == null || e.removeEventListener("click", m));
    };
  }, [n, f]), H(() => {
    const e = i.current, m = (s) => {
      s.key === "Escape" && f();
    };
    return e !== null && e.addEventListener("keydown", m), () => {
      e !== null && e.removeEventListener("keydown", m);
    };
  }, [E, _, f]);
  const L = () => {
    if (E.filter((e) => !e.isDeleted).length > 0) {
      const e = C == null ? void 0 : C.getAppState(), m = {
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
      l(E, m, _);
    } else
      f();
  }, A = () => {
    E.filter((e) => !e.isDeleted).length === 0 ? f() : g(!0);
  };
  function O() {
    return /* @__PURE__ */ o.jsxs(
      z,
      {
        title: "Discard",
        onClose: () => {
          g(!1);
        },
        closeOnClickOutside: !1,
        children: [
          "Are you sure you want to discard the changes?",
          /* @__PURE__ */ o.jsxs("div", { className: "ExcalidrawModal__discardModal", children: [
            /* @__PURE__ */ o.jsx(
              I,
              {
                onClick: () => {
                  g(!1), k();
                },
                children: "Discard"
              }
            ),
            " ",
            /* @__PURE__ */ o.jsx(
              I,
              {
                onClick: () => {
                  g(!1);
                },
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    );
  }
  if (x === !1)
    return null;
  const w = (e, m, s) => {
    M(e), D(s);
  };
  return F(
    /* @__PURE__ */ o.jsx("div", { className: "ExcalidrawModal__overlay", role: "dialog", children: /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "ExcalidrawModal__modal",
        ref: i,
        tabIndex: -1,
        children: /* @__PURE__ */ o.jsxs("div", { className: "ExcalidrawModal__row", children: [
          h && /* @__PURE__ */ o.jsx(O, {}),
          /* @__PURE__ */ o.jsx(
            Y,
            {
              onChange: w,
              excalidrawAPI: R,
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
function te({
  nodeKey: n,
  data: l
}) {
  const [t] = S.useLexicalComposerContext(), [r, a] = b(
    l === "[]" && t.isEditable()
  ), x = j(null), f = j(null), k = j(null), [i, C, R] = $.useLexicalNodeSelection(n), [h, g] = b(!1), E = p(() => t.isEditable(), []), M = B(
    (s) => (i && u.$isNodeSelection(u.$getSelection()) && (s.preventDefault(), t.update(() => {
      const c = u.$getNodeByKey(n);
      if (v(c))
        return c.remove(), !0;
    })), !1),
    [t, i, n]
  );
  N(() => {
    E && (r ? t.setEditable(!1) : t.setEditable(!0));
  }, [r, t, E]), N(() => P.mergeRegister(
    t.registerCommand(
      u.CLICK_COMMAND,
      (s) => {
        const c = f.current, d = s.target;
        return h ? !0 : c !== null && c.contains(d) ? (s.shiftKey || R(), C(!i), s.detail > 1 && a(!0), !0) : !1;
      },
      u.COMMAND_PRIORITY_LOW
    ),
    t.registerCommand(
      u.KEY_DELETE_COMMAND,
      M,
      u.COMMAND_PRIORITY_LOW
    ),
    t.registerCommand(
      u.KEY_BACKSPACE_COMMAND,
      M,
      u.COMMAND_PRIORITY_LOW
    )
  ), [R, t, i, h, M, C]);
  const _ = B(() => (a(!1), t.update(() => {
    const s = u.$getNodeByKey(n);
    v(s) && s.remove();
  })), [t, n]), D = (s, c, d) => {
    if (t.isEditable())
      return t.update(() => {
        const y = u.$getNodeByKey(n);
        v(y) && (s.length > 0 || Object.keys(d).length > 0 ? y.setData(
          JSON.stringify({
            appState: c,
            elements: s,
            files: d
          })
        ) : y.remove());
      });
  }, L = () => {
    g(!0);
  }, A = (s, c) => {
    setTimeout(() => {
      g(!1);
    }, 200), t.update(() => {
      const d = u.$getNodeByKey(n);
      v(d) && (d.setWidth(s), d.setHeight(c));
    });
  }, O = B(() => {
    a(!0);
  }, []), {
    elements: w = [],
    files: e = {},
    appState: m = {}
  } = p(() => JSON.parse(l), [l]);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      q,
      {
        initialElements: w,
        initialFiles: e,
        initialAppState: m,
        isShown: r,
        onDelete: _,
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
        ref: f,
        className: `excalidraw-button ${i ? "selected" : ""}`,
        children: [
          /* @__PURE__ */ o.jsx(
            V,
            {
              imageContainerRef: x,
              className: "image",
              elements: w,
              files: e,
              appState: m
            }
          ),
          i && /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "image-edit-button",
              role: "button",
              tabIndex: 0,
              onMouseDown: (s) => s.preventDefault(),
              onClick: O
            }
          ),
          (i || h) && /* @__PURE__ */ o.jsx(
            K,
            {
              buttonRef: k,
              showCaption: !0,
              setShowCaption: () => null,
              imageRef: x,
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
  te as default
};
