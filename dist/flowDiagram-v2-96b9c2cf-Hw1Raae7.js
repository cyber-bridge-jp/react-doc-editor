import { f as o, p as a } from "./flowDb-956e92f1-DX3NahXZ.js";
import { f as t, a as e } from "./styles-c10674c1-CPWiJ2oe.js";
import { x as s } from "./index-DDZpbyCo.js";
import "./graph-B8XQeYO2.js";
import "./layout-da2udPoe.js";
import "./index-C6VtxeZe.js";
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
