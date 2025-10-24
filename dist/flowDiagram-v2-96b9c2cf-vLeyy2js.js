import { f as o, p as a } from "./flowDb-956e92f1-TUx5VTZM.js";
import { f as t, a as e } from "./styles-c10674c1-ByZz0-5u.js";
import { x as s } from "./index-DP-l99HS.js";
import "./graph-CJbNvK4y.js";
import "./layout-DY2A4i2X.js";
import "./index-D1Kv7B10.js";
const b = {
  parser: a,
  db: o,
  renderer: e,
  styles: t,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), e.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  b as diagram
};
