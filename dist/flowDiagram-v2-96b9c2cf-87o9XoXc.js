import { f as o, p as a } from "./flowDb-956e92f1-YN_2n5rh.js";
import { f as t, a as e } from "./styles-c10674c1-BFfEqxY9.js";
import { x as s } from "./index-BU3ShsPI.js";
import "./graph-Bk4gW_oC.js";
import "./layout-BL4ary9Y.js";
import "./ExcalidrawComponent-CQ-oaHL2.js";
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
