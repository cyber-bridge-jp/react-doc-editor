import x from "react";
var b = {}, C;
function u() {
  if (C) return b;
  C = 1;
  var r = x;
  const e = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], t = e[Math.floor(Math.random() * e.length)], a = /* @__PURE__ */ r.createContext({
    clientID: 0,
    color: t[1],
    isCollabActive: !1,
    name: t[0],
    yjsDocMap: /* @__PURE__ */ new Map()
  });
  function n(l, o) {
    const g = r.useContext(a);
    return l != null && (g.name = l), o != null && (g.color = o), g;
  }
  return b.CollaborationContext = a, b.useCollaborationContext = n, b;
}
var i = {}, c;
function d() {
  if (c) return i;
  c = 1;
  var r = x;
  let e = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], t = e[Math.floor(Math.random() * e.length)], a = r.createContext({
    clientID: 0,
    color: t[1],
    isCollabActive: !1,
    name: t[0],
    yjsDocMap: /* @__PURE__ */ new Map()
  });
  return i.CollaborationContext = a, i.useCollaborationContext = function(n, l) {
    let o = r.useContext(a);
    return n != null && (o.name = n), l != null && (o.color = l), o;
  }, i;
}
const s = process.env.NODE_ENV === "development" ? u() : d();
var v = s;
export {
  v as L
};
