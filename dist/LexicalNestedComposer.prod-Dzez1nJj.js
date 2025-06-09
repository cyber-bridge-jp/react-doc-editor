import { l as y } from "./LexicalCollaborationContext.prod-BooDYVUZ.js";
import { m as u, p as E, j as k } from "./index-DwhukDPk.js";
import { useRef as O, useContext as j, useMemo as D, useEffect as m } from "react";
function K(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C = K(function(e) {
  const r = new URLSearchParams();
  r.append("code", e);
  for (let n = 1; n < arguments.length; n++) r.append("v", arguments[n]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function h(e) {
  const r = e.transform();
  return r !== null ? /* @__PURE__ */ new Set([r]) : /* @__PURE__ */ new Set();
}
function R({ initialEditor: e, children: r, initialNodes: n, initialTheme: g, skipCollabChecks: _ }) {
  const f = O(!1), i = j(u);
  i == null && C(9);
  const [l, { getTheme: v }] = i, x = D(() => {
    const s = g || v() || void 0, b = E(i, s);
    if (s !== void 0 && (e._config.theme = s), e._parentEditor = l, n) for (let t of n) {
      let a = null, o = null;
      if (typeof t != "function") {
        const p = t;
        t = p.replace, a = p.with, o = p.withKlass || null;
      }
      const d = e._nodes.get(t.getType());
      e._nodes.set(t.getType(), { exportDOM: d ? d.exportDOM : void 0, klass: t, replace: a, replaceWithKlass: o, transforms: h(t) });
    }
    else {
      const t = e._nodes = new Map(l._nodes);
      for (const [a, o] of t) e._nodes.set(a, { exportDOM: o.exportDOM, klass: o.klass, replace: o.replace, replaceWithKlass: o.replaceWithKlass, transforms: h(o.klass) });
    }
    return e._config.namespace = l._config.namespace, e._editable = l._editable, [e, b];
  }, []), { isCollabActive: w, yjsDocMap: M } = y(), c = _ || f.current || M.has(e.getKey());
  return m(() => {
    c && (f.current = !0);
  }, [c]), m(() => l.registerEditableListener((s) => {
    e.setEditable(s);
  }), [e, l]), k.jsx(u.Provider, { value: x, children: !w || c ? r : null });
}
export {
  R as d
};
