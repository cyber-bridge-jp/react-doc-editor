import { f as o, p as a } from "./flowDb-956e92f1-ByTPOUFO.js";
import { f as t, a as e } from "./styles-c10674c1-bKk7QrQ0.js";
import { x as s } from "./index-CHi9R-ow.js";
import "./graph-CSyP48iv.js";
import "./layout-BZA0JARJ.js";
import "./index-Dm-mzxEZ.js";
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
