import { f as o, p as a } from "./flowDb-956e92f1-CjEXK33e.js";
import { f as t, a as e } from "./styles-c10674c1-PZfDVVgh.js";
import { x as s } from "./index-D_MM-tG6.js";
import "./graph-CsJVoxAn.js";
import "./layout-Cz8Xezln.js";
import "./index-CW_PN8RV.js";
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
