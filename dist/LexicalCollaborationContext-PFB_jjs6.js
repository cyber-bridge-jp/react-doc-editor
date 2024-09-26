import d from "react";
var i = {}, c;
function s() {
  if (c)
    return i;
  c = 1;
  var o = d;
  const e = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], t = e[Math.floor(Math.random() * e.length)], a = /* @__PURE__ */ o.createContext({
    clientID: 0,
    color: t[1],
    isCollabActive: !1,
    name: t[0],
    yjsDocMap: /* @__PURE__ */ new Map()
  });
  function l(n, r) {
    const g = o.useContext(a);
    return n != null && (g.name = n), r != null && (g.color = r), g;
  }
  return i.CollaborationContext = a, i.useCollaborationContext = l, i;
}
var b = {}, x;
function f() {
  if (x)
    return b;
  x = 1;
  var o = d;
  let e = [["Cat", "rgb(125, 50, 0)"], ["Dog", "rgb(100, 0, 0)"], ["Rabbit", "rgb(150, 0, 0)"], ["Frog", "rgb(200, 0, 0)"], ["Fox", "rgb(200, 75, 0)"], ["Hedgehog", "rgb(0, 75, 0)"], ["Pigeon", "rgb(0, 125, 0)"], ["Squirrel", "rgb(75, 100, 0)"], ["Bear", "rgb(125, 100, 0)"], ["Tiger", "rgb(0, 0, 150)"], ["Leopard", "rgb(0, 0, 200)"], ["Zebra", "rgb(0, 0, 250)"], ["Wolf", "rgb(0, 100, 150)"], ["Owl", "rgb(0, 100, 100)"], ["Gull", "rgb(100, 0, 100)"], ["Squid", "rgb(150, 0, 150)"]], t = e[Math.floor(Math.random() * e.length)], a = o.createContext({
    clientID: 0,
    color: t[1],
    isCollabActive: !1,
    name: t[0],
    yjsDocMap: /* @__PURE__ */ new Map()
  });
  return b.CollaborationContext = a, b.useCollaborationContext = function(l, n) {
    let r = o.useContext(a);
    return l != null && (r.name = l), n != null && (r.color = n), r;
  }, b;
}
var C, u;
function p() {
  return u || (u = 1, C = process.env.NODE_ENV === "development" ? s() : f()), C;
}
export {
  p as r
};
