import { l as y } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { af as u, ag as k } from "./index-C6GX-Z8i.js";
import { useRef as E, useContext as O, useMemo as D, useEffect as m } from "react";
import { jsx as K } from "react/jsx-runtime";
function C(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var T = C(function(e) {
  const r = new URLSearchParams();
  r.append("code", e);
  for (let n = 1; n < arguments.length; n++) r.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function h(e) {
  const r = e.transform();
  return r !== null ? /* @__PURE__ */ new Set([r]) : /* @__PURE__ */ new Set();
}
function W({ initialEditor: e, children: r, initialNodes: n, initialTheme: g, skipCollabChecks: _ }) {
  const p = E(!1), i = O(u);
  i == null && T(9);
  const [l, { getTheme: v }] = i, w = D(() => {
    const a = g || v() || void 0, b = k(i, a);
    if (a !== void 0 && (e._config.theme = a), e._parentEditor = l, n) for (let t of n) {
      let s = null, o = null;
      if (typeof t != "function") {
        const f = t;
        t = f.replace, s = f.with, o = f.withKlass || null;
      }
      const d = e._nodes.get(t.getType());
      e._nodes.set(t.getType(), { exportDOM: d ? d.exportDOM : void 0, klass: t, replace: s, replaceWithKlass: o, transforms: h(t) });
    }
    else {
      const t = e._nodes = new Map(l._nodes);
      for (const [s, o] of t) e._nodes.set(s, { exportDOM: o.exportDOM, klass: o.klass, replace: o.replace, replaceWithKlass: o.replaceWithKlass, transforms: h(o.klass) });
    }
    return e._config.namespace = l._config.namespace, e._editable = l._editable, [e, b];
  }, []), { isCollabActive: x, yjsDocMap: M } = y(), c = _ || p.current || M.has(e.getKey());
  return m(() => {
    c && (p.current = !0);
  }, [c]), m(() => l.registerEditableListener((a) => {
    e.setEditable(a);
  }), [e, l]), K(u.Provider, { value: w, children: !x || c ? r : null });
}
export {
  W as d
};
