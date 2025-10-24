import { f as o, p as a } from "./flowDb-956e92f1-CKTjkn2w.js";
import { f as t, a as e } from "./styles-c10674c1-Cm8CiZe4.js";
import { x as s } from "./index-E70wNNXS.js";
import "./graph-D_JjFWYM.js";
import "./layout-DWuZgFDa.js";
import "./index-64JgSrCY.js";
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
