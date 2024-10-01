import { r as K } from "./LexicalCollaborationContext-PFB_jjs6.js";
import { r as k } from "./index-OsErVNU-.js";
import R from "react";
var y = {}, N;
function O() {
  if (N)
    return y;
  N = 1;
  var m = K(), c = k(), r = R;
  function x({
    initialEditor: e,
    children: p,
    initialNodes: l,
    initialTheme: C,
    skipCollabChecks: h
  }) {
    const u = r.useRef(!1), i = r.useContext(c.LexicalComposerContext);
    if (i == null)
      throw Error("Unexpected parent context null on a nested composer");
    const [s, {
      getTheme: v
    }] = i, _ = r.useMemo(
      () => {
        const o = C || v() || void 0, b = c.createLexicalComposerContext(i, o);
        if (o !== void 0 && (e._config.theme = o), e._parentEditor = s, l)
          for (let t of l) {
            let a = null, n = null;
            if (typeof t != "function") {
              const w = t;
              t = w.replace, a = w.with, n = w.withKlass || null;
            }
            const d = e._nodes.get(t.getType());
            e._nodes.set(t.getType(), {
              exportDOM: d ? d.exportDOM : void 0,
              klass: t,
              replace: a,
              replaceWithKlass: n,
              transforms: /* @__PURE__ */ new Set()
            });
          }
        else {
          const t = e._nodes = new Map(s._nodes);
          for (const [a, n] of t)
            e._nodes.set(a, {
              exportDOM: n.exportDOM,
              klass: n.klass,
              replace: n.replace,
              replaceWithKlass: n.replaceWithKlass,
              transforms: /* @__PURE__ */ new Set()
            });
        }
        return e._config.namespace = s._config.namespace, e._editable = s._editable, [e, b];
      },
      // We only do this for init
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    ), {
      isCollabActive: L,
      yjsDocMap: g
    } = m.useCollaborationContext(), f = h || u.current || g.has(e.getKey());
    return r.useEffect(() => {
      f && (u.current = !0);
    }, [f]), r.useEffect(() => s.registerEditableListener((o) => {
      e.setEditable(o);
    }), [e, s]), /* @__PURE__ */ r.createElement(c.LexicalComposerContext.Provider, {
      value: _
    }, !L || f ? p : null);
  }
  return y.LexicalNestedComposer = x, y;
}
var M = {}, D;
function T() {
  if (D)
    return M;
  D = 1;
  var m = K(), c = k(), r = R;
  function x(e) {
    let p = new URLSearchParams();
    p.append("code", e);
    for (let l = 1; l < arguments.length; l++)
      p.append("v", arguments[l]);
    throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${p} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  }
  return M.LexicalNestedComposer = function({ initialEditor: e, children: p, initialNodes: l, initialTheme: C, skipCollabChecks: h }) {
    let u = r.useRef(!1), i = r.useContext(c.LexicalComposerContext);
    i == null && x(9);
    let [s, { getTheme: v }] = i, _ = r.useMemo(() => {
      var o = C || v() || void 0;
      const b = c.createLexicalComposerContext(i, o);
      if (o !== void 0 && (e._config.theme = o), e._parentEditor = s, l)
        for (var t of l) {
          var a = o = null;
          typeof t != "function" && (a = t, t = a.replace, o = a.with, a = a.withKlass || null);
          const n = e._nodes.get(t.getType());
          e._nodes.set(
            t.getType(),
            { exportDOM: n ? n.exportDOM : void 0, klass: t, replace: o, replaceWithKlass: a, transforms: /* @__PURE__ */ new Set() }
          );
        }
      else {
        t = e._nodes = new Map(s._nodes);
        for (const [n, d] of t)
          e._nodes.set(n, { exportDOM: d.exportDOM, klass: d.klass, replace: d.replace, replaceWithKlass: d.replaceWithKlass, transforms: /* @__PURE__ */ new Set() });
      }
      return e._config.namespace = s._config.namespace, e._editable = s._editable, [e, b];
    }, []), { isCollabActive: L, yjsDocMap: g } = m.useCollaborationContext(), f = h || u.current || g.has(e.getKey());
    return r.useEffect(() => {
      f && (u.current = !0);
    }, [f]), r.useEffect(() => s.registerEditableListener((o) => {
      e.setEditable(o);
    }), [e, s]), r.createElement(c.LexicalComposerContext.Provider, { value: _ }, !L || f ? p : null);
  }, M;
}
const q = process.env.NODE_ENV === "development" ? O() : T();
var S = q;
export {
  S as L
};
