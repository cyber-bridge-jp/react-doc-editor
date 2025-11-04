import { f as o, p as a } from "./flowDb-956e92f1-BaDd1uN2.js";
import { f as t, a as e } from "./styles-c10674c1-PI9Ng3Sk.js";
import { x as s } from "./index-Dp2_WYxj.js";
import "./graph-B6h85kPq.js";
import "./layout-7abzZtqw.js";
import "./index-CDtOATUE.js";
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
